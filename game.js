var h, a9, aA, aB, aC, aD, aE, aF, aG, aH, aI, aJ, aK, aL, aM, aN, aO, aP, aQ, aR, aS, aT, aU, aV, aW, aX, aY, aZ, aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, at, au, av, aw, ax, ay, az, b0, b1, b2, b3, b4, b5, b6, b7, b8,
	b9, bA, bB, bC, bD, bE, bF, bG, bH, bI, bJ, bK, bL, bM, bN, bO, bP, bQ, n, bR, bS, bT, bU, bV, bW, bX, bY, bZ, ba, bb, bc, bd, be, u, bf, bg, bh, l, bi, bj, bk, bl, bm, bn, di, dj, a5, dk, a6, fe, ff, fg, fh, fi, fj, fk, fl, fm, fn, fo, fp, fq,
	iD, iC, iE, a5n, lC, jf, zo, tA, wU, a9X, a2p, a2q, S = ["100%", "div", "⬅️ ", "canvas", "absolute", "rgb(", "inherit", "rgba(", "auto", "none", "hidden", "undefined", "center", "Data", "<br>", "1em", "flex", "0.8em", "   ", "territorial.io",
		"input", "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg==", "0.5em", "' target='_blank'>", "span", "click",
		"</a>", "pointer", "password", "function", "Value", "Enter", "0.6em", "text", "string", "rgba(0,0,0,0.8)", "number", "nowrap", "focus", "break-word", "blur", "Player ", "NoStack", "50%", "1.2em", "1 Minute", "1 Hour", "0.0em 0.9em",
		". Duration: x", " voted with ", " / ", "🔄 Reload", "videoad", "underline", "top", "tls7", "Trebuchet MS", "rgba(140,10,10,0.75)", "rgba(100,0,0,0.8)", "rgba(10,140,10,0.75)", "rgba(0,100,0,0.8)", "rgba(0,", "rgb(10,220,10)", "placeholder",
		"mouseover", "mouseout", "middle", "long", "logo", "loading", "keydown", "italic ", "inline-block", "file", "error", "en-US", "data:image/png;base64,", "break-all", "bold", "blur(4px)", "arena", "account", "accept", "_blank", "Space", "Seed",
		"Reload", "Interest", "Escape", "Bot ", "Back", "<a href='", "20 Seconds", "1 Day", "0px", "000", "0.75em", "0.4em 0em", "0.2em", ",0,0.85)", " solid white;}", " / 160", " -> "
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
			c = "SevereError|" + e + "|" + c, console.log(c), alert(c)
		}(b = new WebSocket("wss://territorial.io/s52/")).onopen = x, b.onclose = function() {
			y()
		}
	})
}

function bo(bp) {
	h && !bp || (br(), bI = new bs, bH = new bt, b7 = new bu, b8 = new bv, a9 = new bw, b4 = new bx, bC = new by, bD = new bz, aA = new c0, aB = new c1, aC = new c2, aD = new c3, aE = new c4, aF = new c5, aG = new c6, aH = new c7, aI = new c8, aJ =
		new c9, aK = new cA, aL = new cB, aM = new cC, aN = new cD, aO = new cE, aP = new cF, aQ = new cG, aR = new cH, aS = new cI, aT = new cJ, aU = new cK, aV = new cL, aW = new cM, aX = new cN, aY = new cO, ag = new cP, ah = new cQ, ai =
		new cR, aZ = new cS, aa = new cT, ad = new cU, ab = new cV, ac = new cW, ae = new cX, aw = new cY, af = new cZ, ak = new ca, al = new cb, am = new cc, ax = new cd, av = new ce, aj = new cf, an = new cg, ao = new ch, ap = new ci, au =
		new cj, aq = new ck, ar = new cl, at = new cm, ay = new cn, az = new co, b0 = new cp, b1 = new cq, b2 = new cr, b3 = new cs, b5 = new ct, b6 = new cu, b9 = new cv, bA = new a2, bB = new cw, bE = new cx, bF = new cy, bG = new cz, bJ =
		new d0, bK = new d1, bL = new d2, bM = new d3, bN = new d4, bO = new d5, bP = new d6, bQ = new d7, n = new d8, bR = new d9, u = new dA, h = new dB, bf = new dC, bg = new dD, bd = new dE, be = new dF, bX = new dG, bY = new dH, bS = new dI,
		bT = new dJ, ba = new dK, bb = new dL, bc = new dM, bh = new dN, bZ = new dO, l = new dP, bi = new dQ, bj = new dR, bk = new dS, bl = new dT, bn = new dU, h.dW(), u.dW(), au.dX(), bg.dW(), b4.dW(), b4.dY(), (bU = new dZ).dW(), bi.dW(), b7
		.dW(), bS.dW(), ax.dW(), bC.dW(), bD.dW(), bP.dW(), n.dW(), bV = new da, au.dW(), u.v.db(), bc.dW(), bZ.dW(), bT.dW(), bW = new dc, av.dW(), aa.dd(), bR.dW(), ak.dW(), aW.dW(), aP.dW(), ae.dW(), bG.dW(), aX.dW(), bc.de = !0, setTimeout(
			function() {
				bP.a3(2, 14071)
			}, 0), n.o(5, 5), bF.df() || u.v.dg(), au.dh(), h.i = 1)
}

function dB() {
	this.dl = 1077, this.j = 2010, this.rVersion = 2, this.dW = function() {
		di = 2;
		var dm = bI.dn(this.j, 10) % 100;
		dj = "12 Jan 2025 [" + bI.dn(this.j, 1e3) + "." + (dm < 10 ? "0" : "") + dm + "." + this.j % 10 + "]", a5 = true, a6 = function() {
			try {
				return window.self !== window.top
			} catch (e) {
				return !0
			}
		}(), dk = (new Date).getTime() % 1024
	}, this.i = 0
}

function dQ() {
	this.id = new dq, this.dW = function() {
		this.id.dW()
	}
}

function dq() {
	this.dW = function() {
		0 === bg.dr.data[181].value && (bg.dr.ds(180, Math.floor(Math.random() * bI.pow(30))), bg.dr.ds(181, Math.floor((new Date).getTime() / 36e5)))
	}
}

function dt() {
	var du = [L(0), L(1), L(2), L(3), L(4), L(5), L(6)],
		dv = [100, 60, 30, 15, 6, 1],
		dw = [
			[0, 0, 0, 0, 0],
			[0, 1, 1, 1, 1],
			[1, 2, 1, 1, 1],
			[2, 3, 2, 2, 2],
			[2, 4, 2, 2, 3],
			[3, 4, 3, 3, 4],
			[3, 5, 3, 3, 5]
		],
		dx = [" kicked ", " muted ", " censored the username of ", " deducted x from ", " seized x from ", " reported "],
		dy = [". Duration: x", ". Duration: x", ". Duration: x", ".", ".", ". Reason: x"];
	this.dz = [
		["20 Seconds", "1 Minute", "1 Hour"],
		["20 Seconds", "1 Minute", "5 Minutes", "1 Hour", "1 Day"],
		["1 Minute", "1 Hour", "1 Day"],
		["1 Elo Point", "2 Elo Points", "5 Elo Points"],
		["0.5 Gold", "1 Gold", "2 Gold", "5 Gold", "10 Gold"],
		["Bad Username", "Cheating or Exploiting", "Inappropriate Content", "Bullying or Harassment"]
	], this.e0 = function(id, e1, e2) {
		e1 = this.e3(e1);
		return +(dw[e1][id] > e2)
	}, this.e3 = function(e1) {
		for (var a7 = 0; a7 < dv.length; a7++)
			if (dv[a7] <= e1) return a7;
		return dv.length
	}, this.e4 = function(e1) {
		return du[this.e3(e1)]
	}, this.e5 = function(id, e6) {
		return dx[id].replace(new RegExp("x", "g"), e6)
	}, this.e7 = function(id, e6) {
		return dy[id].replace(new RegExp("x", "g"), e6)
	}
}

function d9() {
	this.e8 = new e9, this.eA = new eB, this.dW = function() {
		u.v.eC()
	}
}

function e9() {
	function eM() {}
	this.dW = function() {}, this.eL = function() {
		return !!eM() && (aiptag.cmd.player.push(function() {
			aiptag.adplayer.startVideoAd()
		}), !0)
	}, this.hideCMPButton = function() {
		"undefined" != typeof aipAPItag && aipAPItag.hideCMPButton && aipAPItag.hideCMPButton()
	}, this.showCMPButton = function() {
		"undefined" != typeof aipAPItag && aipAPItag.showCMPButton && aipAPItag.showCMPButton()
	}, this.showCMPScreen = function() {
		eM() && aipAPItag.showCMPScreen()
	}
}

function eB() {
	this.show = function() {
		return !1
	}
}

function cR() {
	this.eQ = new eR
}

function eR() {
	this.eS = function(eT) {
		var eW;
		return bP.eU(bP.eV) && a9.data.passableMountains && (eW = aY.eX(eT), this.eY(a9.eZ, eW) || this.ea(a9.eZ, eW)) && 0 !== (eW = function(ev) {
			for (var ew = bJ.ex(ev), ey = bJ.ez(ev), max = Math.max(bP.f0, bP.f1) - 2, f2 = max * max, f3 = !1, f4 = 0, f5 = 0; f5 < max; f5++) {
				var f6, eb = function(ew, ey, f5) {
					for (var a7 = 0; a7 <= f5; a7++)
						for (var f8 = -1; f8 < 2; f8 += 2)
							for (var f9 = -1; f9 < 2; f9 += 2)
								for (var fA = 0; fA < 2; fA++) {
									var eT = function(ew, ey) {
										if (bJ.fC(ew, ey)) {
											ew = bJ.fD(ew, ey), ey = bJ.ef(ew);
											if (aY.ek(ey) && aY.fE(ey)) return ew
										}
										return 0
									}(ew + fA * f8 * a7 + (1 - fA) * f9 * f5, ey + fA * f9 * f5 + (1 - fA) * f8 * a7);
									if (eT) return eT
								}
					return 0
				}(ew, ey, f5);
				eb && (f6 = bJ.f7(ew, ey, eb)) < f2 && (f4 = eb, f2 = f6, f3 || (f3 = !0, max = Math.floor(Math.sqrt(f6)) + 1))
			}
			return f4
		}(bJ.ed(eT))) && (eT = bJ.ef(eW), aY.eg(eT) || (eT = aY.eh(eT)) !== a9.eZ && ei(eT, a9.eZ)) ? eW : 0
	}, this.ej = function(player, eb) {
		eb = bJ.ef(eb);
		if (aY.ek(eb)) {
			if (aY.eg(eb)) bL.el[0] = a9.em;
			else if (aY.eh(eb) !== bL.el[0]) return !1;
			for (var en = function(eT) {
					var er = aY.er,
						en = [];
					loop: for (var es = 3; 0 <= es; es--) {
						var et = eT + er[es];
						if (aY.eu(et)) {
							for (var id = aY.eX(et), a7 = 0; a7 < en.length; a7++)
								if (id === en[a7]) continue loop;
							bL.eq[en.length] = et, en.push(id)
						}
					}
					return en
				}(eb), ep = en.length, a7 = 0; a7 < ep; a7++)
				if (this.eY(player, en[a7]) || this.ea(player, en[a7])) return bL.eq[0] = bL.eq[a7], !0
		}
		return !1
	}, this.eY = function(player, eW) {
		for (var fF = ac.fF[player], ep = fF.length, fG = Math.max(bI.dn(ep, 12), 1), er = aY.er, a7 = 0; a7 < ep; a7 += fG)
			for (var ee = fF[a7], es = 3; 0 <= es; es--) {
				var et = ee + er[es];
				if (aY.eu(et) && eW === aY.eX(et)) return !0
			}
		return !1
	}, this.ea = function(player, eW) {
		for (var fF = ac.fF[player], ep = fF.length, er = aY.er, a7 = 0; a7 < ep; a7++)
			for (var ee = fF[a7], es = 3; 0 <= es; es--) {
				var et = ee + er[es];
				if (aY.eu(et) && eW === aY.eX(et)) return !0
			}
		return !1
	}
}

function d2() {
	this.fK = new Uint16Array(2), this.fL = new Uint16Array(2), this.fM = new Uint32Array(2), this.fN = new Uint32Array(2), this.fO = new Uint32Array(2), this.fP = new Uint8Array(4), this.fQ = new Uint8Array(4), this.eq = new Uint32Array(4), this
		.fR = new Uint32Array(5), this.el = new Uint32Array(8), this.fS = new Uint16Array(16), this.fT = new Uint16Array(512), this.fU = new Uint16Array(512), this.fV = new Uint16Array(512), this.fW = function(g, fX) {
			return g[0] = fX, g
		}, this.fY = function(g, fX, fZ) {
			return g[0] = fX, g[1] = fZ, g
		}, this.fa = function(g, fX, fZ, fb) {
			return g[0] = fX, g[1] = fZ, g[2] = fb, g
		}, this.fc = function(g, fX, fZ, fb, fd) {
			return g[0] = fX, g[1] = fZ, g[2] = fb, g[3] = fd, g
		}
}

function fr() {
	fk = 0, fl = 2048, fm = new Uint32Array(4 * fl), fn = 0, fo = new Uint32Array(fl), fp = new Uint8Array(bP.f0 * bP.f1)
}

function fs(player) {
	ff = player, fq = !1, ft(), fu();
	for (var a7 = aZ.fv(ff) - 1; 0 <= a7; a7--) 0 === aZ.fw(ff, a7) && (fe = a7, fx());
	fq && fy()
}

function fy() {
	fz(), g0()
}

function fx() {
	fj = aZ.g1(ff, fe), fg = aZ.g2(ff, fe), fh = aZ.g3(ff, fe), g4(), (0 !== fk && (g6(), g7()) ? g8 : g5)()
}

function g7() {
	if (!((fi = bI.dn(fg, fk)) > a9.g9)) {
		if (!fh) return !1;
		var gA = fk * (1 + a9.g9);
		fg += b7.gB.gC(ff, gA - fg), fi = bI.dn(fg, fk)
	}
	return !0
}

function g6() {
	for (var a7 = fk - 1; 0 <= a7; a7--) fp[bI.dn(fm[a7], 4)] = 0
}

function g5() {
	1 === aZ.fv(ff) && aB.gD(ff);
	var dm = b7.gB.gE(ff, fg);
	ba.gF(ff, fg - dm, 12), aZ.gG(ff, fe)
}

function ft() {
	for (var player = ff, gH = ac.gH, ep = Math.min(gH[player].length, fl), gI = 0, gJ = fo, a7 = ep - 1; 0 <= a7; a7--) gJ[gI++] = gH[player][a7];
	fn = gI
}

function fu() {
	for (var a7 = ac.gH[ff].length - 1; 0 <= a7; a7--) aY.ek(ac.gH[ff][a7]) && aY.gK(ac.gH[ff][a7], ff);
	ac.gH[ff] = []
}

function g4() {
	fk = 0, (fj === a9.em ? gL : gM)()
}

function gM() {
	for (var gN, gO, a7, er = aY.er, es = 3; 0 <= es; es--)
		for (a7 = fn - 1; 0 <= a7; a7--) gN = fo[a7] + er[es], gO = bI.dn(gN, 4), 0 === fp[gO] && aY.gP(gN) && aY.eh(gN) === fj && (fp[gO] = 1, fm[fk++] = gN)
}

function gL() {
	for (var gN, gO, a7, er = aY.er, es = 3; 0 <= es; es--)
		for (a7 = fn - 1; 0 <= a7; a7--) gN = fo[a7] + er[es], gO = bI.dn(gN, 4), 0 === fp[gO] && aY.eg(gN) && (fp[gO] = 1, fm[fk++] = gN)
}

function g8() {
	gQ() ? (gR(), fj !== a9.em && gS()) : g5()
}

function gS() {
	gT(), gU(ac.gV[fj]), gU(ac.gW[fj]), bP.eU(bP.eV) && gU(ac.fF[fj]), gX(ac.gH[fj]), gY(ac.gW[fj]), gY(ac.fF[fj]), gZ(), ga()
}

function gR() {
	fq = !0, aZ.gb(ff, fe, fg), aZ.gc(ff, fe), ac.gd[ff] += fk, ge(), gf()
}

function gQ() {
	return (fj === a9.em ? gg : gh)()
}

function gh() {
	var gi = fk * a9.g9,
		gj = gk(),
		gl = gm(),
		gj = gi + 2 * gj + gl,
		go = fi * fk;
	return gj < go ? (fg -= gj, ba.gF(ff, gj, 13), gp(gj - gi, gl), !0) : fh && 0 === gl ? (fg -= go, go += b7.gB.gC(ff, gj - go + 1), ba.gF(ff, go, 13), gp(go - gi, 0), !0) : (fg -= go, ba.gF(ff, go, 13), gp(go - gi, gl), !1)
}

function gp(go, gl) {
	if (0 < gl) {
		if (go <= gl) return ba.gF(fj, go, 13), void aZ.gq(fj, ff, gl - go);
		aZ.gq(fj, ff, 0), go -= gl
	}
	go = bI.dn(go, 2), go = Math.min(ac.gr[fj], go), ba.gF(fj, go, 13), ac.gr[fj] -= go
}

function gm() {
	return aZ.gs(fj, ff)
}

function gk() {
	return bI.dn(fk * ac.gr[fj], 1 + bI.dn(10 * ac.gd[fj], 16))
}

function gg() {
	var gt = fk * a9.g9;
	return fg -= gt, ba.gF(ff, gt, 13), !0
}

function gf() {
	for (var a7 = fk - 1; 0 <= a7; a7--) ac.gH[ff].push(fm[a7]), ac.gV[ff].push(fm[a7]), aY.gK(fm[a7], ff)
}

function d7() {
	var gu = 0,
		gv = 0;
	this.gw = function(ew, ey) {
		gu = ew, gv = ey
	}, this.gx = function(gy) {
		a9.gz || aI.h0 || (b7.gB.h1(0) || b7.gB.h1(1)) && b7.gB.h2(a9.eZ) && (aN.h3(gu, gv) ? aN.h4 = !1 : function(gy) {
			var h6 = bJ.h7(gu),
				h8 = bJ.h9(gv),
				eb = bJ.fD(h6, h8),
				eT = bJ.ef(eb);
			bJ.hA(h6, h8) && (a9.hB ? aY.ek(eT) && b5.hC.hD(eb) : aY.eu(eT) ? gy || (h6 = ai.eQ.eS(eT)) && (h8 = bJ.ef(h6), h8 = aY.eg(h8) ? a9.em : aY.eh(h8), b5.hC.hG(aN.hH(), h6, h8)) : aY.hI(eT) || gy ? bK.hJ.hK(a9.eZ, eb) && b5.hC
				.hL(aN.hH(), eb) : aY.eg(eT) ? hM(a9.eZ) ? b5.hC.hN(aN.hH(), a9.em) : hO(a9.eZ, a9.em) ? ay.hP(a9.em, aN.hH()) : bK.hJ.hK(a9.eZ, eb) && b5.hC.hL(aN.hH(), eb) : (h6 = aY.eh(eT)) !== a9.eZ && (ei(h6, a9.eZ) ? hQ(a9.eZ,
					h6) ? b5.hC.hN(aN.hH(), h6) : hO(a9.eZ, h6) ? ay.hP(h6, aN.hH()) : bK.hJ.hK(a9.eZ, eb) && b5.hC.hL(aN.hH(), eb) : bK.hJ.hK(a9.eZ, eb) && b5.hC.hL(aN.hH(), eb)))
		}(gy))
	}
}

function hR(hS, size, hT, hU, font) {
	var a7, hX = .2,
		canvas = document.createElement("canvas"),
		hY = canvas.getContext("2d", {
			alpha: !1
		});
	for (canvas.width = hS, canvas.height = hS, hY.font = size + font, hY.textAlign = "center", hY.textBaseline = "middle", hY.fillStyle = "red", a7 = 0; a7 < hT.length; a7++) hY.fillText(hT[a7], .5 * hS, .5 * hS);
	return -1 < (canvas = function(hV) {
		var a7, e1, es = hV.data;
		for (a7 = es.length - 4; 0 <= a7; a7 -= 4)
			if (e1 = es[a7], hU <= e1) return Math.floor(a7 / (4 * hS));
		return -1
	}(hY.getImageData(0, 0, hS, hS))) && (hX = (canvas - .5 * hS + .1 * size) / size), Math.max(hX, 0)
}

function d0() {
	this.ha = new Int16Array(4), this.hb = new Int16Array(4), this.dW = function() {
		var a7;
		for (this.ha[0] = -bP.f0, this.ha[1] = 1, this.ha[2] = bP.f0, this.ha[3] = -1, a7 = 0; a7 < 4; a7++) this.hb[a7] = 4 * this.ha[a7]
	}, this.hc = function(hE, hd) {
		var he = this.ex(hd) - this.ex(hE),
			hd = this.ez(hd) - this.ez(hE),
			hE = he >>> 31 << 1;
		return 5 + hE + (1 - hE) * (1 - (hd >>> 31 << 1)) * (Math.abs(he) - Math.abs(hd) >>> 31) & 3
	}, this.hj = function(hE, hd, hk) {
		return hk % 2 == 0 ? hk + (1 - hk) * (1 - (this.ex(hd) - this.ex(hE) >>> 31 << 1)) + 4 & 3 : hk + (2 - hk) * (1 - (this.ez(hd) - this.ez(hE) >>> 31 << 1)) + 4 & 3
	}, this.hm = function(gN, eb) {
		for (var hd, hn, hp = ac.gW[gN], ep = hp.length, a1 = bP.f0, hq = this.ex(eb), hr = this.ez(eb), ev = hp[0] >> 2, min = this.f7(hq, hr, ev), a7 = 1; a7 < ep; a7++)(hn = (hn = hq - (hd = hp[a7] >> 2) % a1) * hn + (hn = hr - ~~((.5 + hd) /
			a1)) * hn) < min && (min = hn, ev = hd);
		return ev
	}, this.hs = function(player, eT) {
		return !aY.eg(eT) && player === aY.eh(eT)
	}, this.f7 = function(h6, h8, eb) {
		return (h6 -= this.ex(eb)) * h6 + (h8 -= this.ez(eb)) * h8
	}, this.ht = function(hu, hv, hw) {
		hu = this.hy(hu) - this.hz(hw), hv = this.i1(hv) - this.i2(hw);
		return Math.sqrt(hu * hu + hv * hv)
	}, this.i3 = function(hE, hd) {
		var hx = this.ex(hE) - this.ex(hd),
			hE = this.ez(hE) - this.ez(hd);
		return Math.sqrt(hx * hx + hE * hE)
	}, this.i4 = function(hE, hd) {
		var hx = this.ex(hE) - this.ex(hd),
			hE = this.ez(hE) - this.ez(hd);
		return hx * hx + hE * hE
	}, this.i5 = function(i6, i7, i8, i9) {
		return (i6 -= i8) * i6 + (i7 -= i9) * i7
	}, this.iA = function(gN, iB) {
		return bI.dn(iB * ac.gr[gN], 1e3)
	}, this.hy = function(hu) {
		return 16 * (hu + iC) / iD
	}, this.i1 = function(hv) {
		return 16 * (hv + iE) / iD
	}, this.iF = function(es) {
		return 16 * es / iD
	}, this.h7 = function(hu) {
		return Math.floor((hu + iC) / iD)
	}, this.h9 = function(hv) {
		return Math.floor((hv + iE) / iD)
	}, this.hA = function(h6, h8) {
		return 1 <= h6 && 1 <= h8 && h6 < bP.f0 - 1 && h8 < bP.f1 - 1
	}, this.ex = function(eb) {
		return eb % bP.f0
	}, this.ez = function(eb) {
		return bI.dn(eb, bP.f0)
	}, this.fD = function(h6, h8) {
		return h8 * bP.f0 + h6
	}, this.iG = function(eb) {
		return this.fC(this.ex(eb), this.ez(eb))
	}, this.fC = function(h6, h8) {
		return 0 < h6 && h6 < bP.f0 - 1 && 0 < h8 && h8 < bP.f1 - 1
	}, this.ef = function(eb) {
		return eb << 2
	}, this.ed = function(eT) {
		return eT >> 2
	}, this.iH = function(eb) {
		return bP.f0 * this.ez(eb) * 256 + (this.ex(eb) << 4)
	}, this.iI = function(eb) {
		return this.iH(eb) + 8 + (bP.f0 << 7)
	}, this.iJ = function(hw) {
		return bP.f0 * (this.i2(hw) >> 4) + (this.hz(hw) >> 4)
	}, this.iK = function(hw) {
		hw = this.iJ(hw);
		return (this.ex(hw) >> 5) + bK.iL.iM * (this.ez(hw) >> 5)
	}, this.hz = function(hw) {
		return hw % (bP.f0 << 4)
	}, this.i2 = function(hw) {
		return bI.dn(hw, bP.f0 << 4)
	}, this.iN = function(eb, hk) {
		return eb + this.ha[hk]
	}, this.iO = function(eT, hk) {
		return eT + this.hb[hk]
	}, this.iP = function(player) {
		return this.fD(ac.iQ[player] + ac.iR[player] >> 1, ac.iS[player] + ac.iT[player] >> 1)
	}, this.iU = function(player) {
		return this.fD(av.iV(ac.iQ[player], ac.iR[player]), av.iV(ac.iS[player], ac.iT[player]))
	}
}

function cf() {
	this.iW = new iX, this.iY = new iZ, this.ia = new ib, this.performance = new ic, this.ie = new ig, this.ih = new ii, this.ij = new ik, this.dW = function() {
		this.iW.dW(), this.ia.dW(), this.performance.dW(), this.ie.dW(), this.ih.dW()
	}, this.il = function() {
		this.performance.il(), this.iW.il()
	}
}

function ig() {
	var im, ip = new Uint16Array(8);

	function iz(size, player) {
		for (var a7 = ac.gH[player].length - 1; size <= a7; a7--) aY.j7(ac.gH[player][a7], player)
	}
	this.dW = function() {
		im = 0
	}, this.iq = function(player, ir) {
		return bL.el[1] = ac.gH[player].length, bL.el[0] === a9.em ? aj.ie.is(player) : this.it(player, bL.el[0]), (0 !== bL.el[1] || 0 !== ac.gH[player].length) && !(!ir && bL.el[1] === ac.gH[player].length || (bL.el[0] === a9.em ? ac.iu[
			player]++ : ac.iv[player]++, 0))
	}, this.iw = function(player) {
		a9.ix && (aj.ih.iy[player] = 1), iz(bL.el[1], player), aZ.j0(player, bL.fN[0], bL.el[0]), aB.j1(player, !1)
	}, this.j2 = function(player, j3, ep, j4) {
		var j5 = bI.dn(12 * ac.gr[player], 1024);
		j4 -= j4 >= bI.dn(ac.gr[player], 2) ? j5 : 0, iz(ep, player), aZ.j0(player, j4, j3), ac.gr[player] -= j4 + j5, aB.j1(player, !1)
	}, this.it = function(player, j3) {
		for (var hk, er = aY.er, a7 = ac.gV[player].length - 1; 0 <= a7; a7--)
			if (aY.j6(ac.gV[player][a7]))
				for (hk = 3; 0 <= hk; hk--)
					if (aY.gP(ac.gV[player][a7] + er[hk]) && aY.eh(ac.gV[player][a7] + er[hk]) === j3) {
						ac.gH[player].push(ac.gV[player][a7]);
						break
					}
	}, this.is = function(player) {
		for (var er = aY.er, a7 = ac.gV[player].length - 1; 0 <= a7; a7--)
			if (aY.j6(ac.gV[player][a7]))
				for (var hk = 3; 0 <= hk; hk--)
					if (aY.eg(ac.gV[player][a7] + er[hk])) {
						ac.gH[player].push(ac.gV[player][a7]);
						break
					}
	}, this.j8 = function(player, j9) {
		var a7, f8, hk, jA, ep = ac.gV[player].length,
			hl = 256 <= ep ? 12 : 32 <= ep ? 6 : 1,
			jB = ep - 1 - av.jC(hl),
			er = aY.er;
		im = 0;
		loop: for (a7 = jB; 0 <= a7; a7 -= hl)
			for (hk = 3; 0 <= hk; hk--)
				if ((jA = aY.eg(ac.gV[player][a7] + er[hk]) ? a9.em : aY.eh(ac.gV[player][a7] + er[hk])) === a9.em || aY.gP(ac.gV[player][a7] + er[hk]) && jA !== player && (j9 || ei(player, jA))) {
					for (f8 = im - 1; 0 <= f8; f8--)
						if (ip[f8] === jA) continue loop;
					if (ip[im] = jA, 8 <= ++im) return !0
				}
		return 0 < im
	}, this.jD = function(player, j9) {
		var a7, hk, jA, er = aY.er;
		for (im = 0, a7 = ac.gV[player].length - 1; 0 <= a7; a7--)
			for (hk = 3; 0 <= hk; hk--)
				if ((jA = aY.eg(ac.gV[player][a7] + er[hk]) ? a9.em : aY.eh(ac.gV[player][a7] + er[hk])) === a9.em || aY.gP(ac.gV[player][a7] + er[hk]) && jA !== player && (j9 || ei(player, jA))) return ip[im++] = jA, !0;
		return !1
	}, this.jE = function() {
		for (var f9, a7 = im - 1; 0 <= a7; a7--)
			if (ip[a7] === a9.em) {
				for (im--, f9 = a7; f9 < im; f9++) ip[f9] = ip[f9 + 1];
				return !0
			} return !1
	}, this.jF = function(player) {
		for (var f9, a7 = im - 1; 0 <= a7; a7--)
			if (aZ.jG(player, ip[a7]))
				for (im--, f9 = a7; f9 < im; f9++) ip[f9] = ip[f9 + 1];
		return 0 === im
	}, this.jH = function() {
		for (var a7 = im - 1; 0 <= a7; a7--)
			if (b7.gB.jI(ip[a7])) return !0;
		return !1
	}, this.jJ = function() {
		for (var a7 = im - 1; 0 <= a7; a7--) b7.gB.jI(ip[a7]) || (ip[a7] = ip[--im]);
		return 0 < im
	}, this.jK = function(player) {
		for (var f9, jL = ip[0], jM = ac.gr[jL] + aZ.gs(jL, player), a7 = im - 1; 1 <= a7; a7--)(f9 = ac.gr[ip[a7]] + aZ.gs(ip[a7], player)) < jM && (jL = ip[a7], jM = f9);
		return jL
	}, this.jN = function(player) {
		var jO, jP = ip[0];
		if (1 !== im)
			for (var jQ = bI.dn(ac.iR[player] + ac.iQ[player], 2), jR = bI.dn(ac.iT[player] + ac.iS[player], 2), f5 = jS(jQ - bI.dn(ac.iR[jP] + ac.iQ[jP], 2)) + jS(jR - bI.dn(ac.iT[jP] + ac.iS[jP], 2)), a7 = im - 1; 1 <= a7; a7--)(jO = jS(jQ - bI
				.dn(ac.iR[ip[a7]] + ac.iQ[ip[a7]], 2)) + jS(jR - bI.dn(ac.iT[ip[a7]] + ac.iS[ip[a7]], 2))) < f5 && (f5 = jO, jP = ip[a7]);
		return jP
	}, this.jT = function() {
		for (var jU = ip, jV = jU[0], gr = ac.gr, jW = gr[jV], a7 = im - 1; 1 <= a7; a7--) {
			var gN = jU[a7],
				f9 = gr[gN];
			jW < f9 && (jV = gN, jW = f9)
		}
		return jV
	}
}

function ii() {
	function jl(player, j3, jb) {
		3 <= jb && 2142 < bc.jr() && (j3 === a9.em || ac.gr[j3] < bI.dn(ac.gr[player], 20)) && aA.jg(player, 20)
	}

	function jo(player, j4, j3, jb) {
		3 <= jb && jb < 6 && bI.dn(ac.gr[player], 8) > ac.gr[j3] && (j4 = Math.max(bI.dn(11 * ac.gr[j3], 5), bI.dn(ac.gr[player], 10)));
		jb = ac.gH[player].length;
		aj.ie.it(player, j3), aj.ie.j2(player, j3, jb, j4)
	}

	function jk(player, j4) {
		var j3 = a9.em,
			ep = ac.gH[player].length;
		aj.ie.is(player), ac.gH[player].length !== ep && aj.ie.j2(player, j3, ep, j4)
	}
	this.iy = new Uint8Array(a9.em), this.dW = function() {
		this.iy.fill(0)
	}, this.jX = function(player, j4) {
		var jZ, jb, jc, jd;
		a9.ix && (this.iy[player] = 0), aZ.jY(player) && (jZ = aa.ja(player), 3 <= (jb = aA.j4[player]) && jb < 6 && (j4 = Math.max(ac.gr[player] - jZ, j4)), jc = ac.gW[player].length, jd = ac.gV[player].length, 30 * ac.gd[player] > a9.je && jf[
			player] < 10 && 100 * jd <= jc && aA.jg(player, 10), a9.ix ? function(player, j4, jb, jZ) {
			var j3;
			if (aj.ie.j8(player, !1) || aj.ie.jD(player, !1)) {
				if (aj.ih.iy[player] = 1, !aj.ie.jF(player))
					if (aj.ie.jE()) jk(player, j4), jl(player, a9.em, jb);
					else {
						if (av.jm(aA.jn[jb])) j3 = aj.ie.jK(player);
						else {
							if (aj.ie.jH() && av.jm(aA.jp[jb]) && aj.ie.jJ(), 6 === jb) return jo(player, j4, aj.ie.jT(), jb);
							j3 = aj.ie.jN(player)
						}
						jo(player, j4, j3, jb), jl(player, j3, jb)
					}
			} else bK.ji.il(player) || aj.ij.il(player) || ! function(player, j4, jb, jZ) {
				var a7, f9, fA, en = bd.en,
					js = en[player];
				if (0 !== js) {
					var gr = ac.gr,
						jt = gr[player],
						gd = ac.gd;
					if (player < a9.ju && (j4 = jt), !(jt < gd[player] || 5 === jb && jt < jZ || 4 === jb && jt < bI.dn(jZ, 2))) {
						var ep = ah.jv,
							jw = ah.jx,
							jy = (a7 = av.jC(ep), aj.ih.iy);
						for (f9 = 0; f9 < ep; f9++)
							if (fA = jw[(f9 + a7) % ep], 1 === jy[fA] && en[fA] === js) return b5.jz.k0(player, fA, j4);
						var k1 = a9.k1,
							gW = ac.gW;
						for (f9 = 0; f9 < ep; f9++)
							if (fA = jw[(f9 + a7) % ep], gr[fA] < k1 * gd[fA] && gW[fA].length && en[fA] === js && fA !== player) return b5.jz.k0(player, fA, j4)
					}
				}
			}(player, j4, jb, jZ)
		}(player, j4, jb, jZ) : (!jd || jc && (jc < jd && !av.jC(10) || 100 * jd <= jc && av.jC(3) || !av.jC(8))) && bK.ji.il(player) || function(player, j4, jb) {
			aj.ie.j8(player, !0) || aj.ie.jD(player, !0) ? aj.ie.jF(player) || (aj.ie.jE() ? jk(player, j4) : av.jm(aA.jn[jb]) ? jo(player, j4, aj.ie.jK(player), jb) : 5 === jb ? jo(player, j4, aj.ie.jT(), jb) : (aj.ie.jH() && av.jm(aA
				.jp[jb]) && aj.ie.jJ(), jo(player, j4, 6 === jb ? aj.ie.jT() : aj.ie.jN(player), jb))) : aj.ij.il(player)
		}(player, j4, jb))
	}
}

function c0() {
	var k2 = new Uint8Array(a9.em),
		k3 = new Uint16Array(a9.em),
		k4 = new Uint16Array(a9.em),
		k5 = new Uint8Array(a9.em),
		k6 = (this.j4 = new Uint8Array(a9.em), new Uint16Array(a9.em)),
		k7 = new Uint16Array(a9.em);

	function kM(a7) {
		k2[a7] = 1 + bI.dn(k6[a7] * av.random(), 10 * av.value(100))
	}
	this.k8 = null, this.jp = [97, 94, 70, 40, 20, 0, 100], this.k9 = [500, 450, 400, 300, 80, 50, 100], this.jn = [0, 0, 5, 25, 50, 100, 0], this.kA = [60, 74, 112, 200, 256, 512, 512], this.kB = [1, 2, 3, 4, 6, 8, 1], this.kC = [500, 450, 400, 300,
		80, 50, 100
	], this.dX = function() {
		this.k8 = [L(7), L(8), L(9), L(10), L(11), L(12), "H Bot"]
	}, this.dW = function() {
		k2.fill(0), k3.fill(0), k4.fill(0), k5.fill(0), this.j4.fill(0), k6.fill(0), k7.fill(0);
		var kD = a9.ju;
		if (9 === a9.kE) this.kF();
		else if (__fx.customLobby.isActive())
			for (a7 = a9.kI - 1; 0 <= a7; a7--) this.j4[a7 + kD] = __fx.customLobby.gameInfo.difficulty;
		else if (a9.kG)
			if (3 === a9.data.botDifficultyType)
				for (a7 = a9.kI - 1; 0 <= a7; a7--) {
					var kJ = a7 + kD;
					this.j4[kJ] = a9.data.botDifficultyData[kJ]
				} else if (2 === a9.data.botDifficultyType)
					for (a7 = a9.kI - 1; 0 <= a7; a7--) this.j4[kJ = a7 + kD] = a9.data.botDifficultyTeam[bd.kK[bd.en[kJ]]];
				else if (1 === a9.data.botDifficultyType) {
			var kL = this.k8.length;
			for (a7 = a9.kI - 1; 0 <= a7; a7--) this.j4[a7 + kD] = a7 % kL
		} else
			for (kL = a9.data.botDifficultyValue, a7 = a9.kI - 1; 0 <= a7; a7--) this.j4[a7 + kD] = kL;
		else
			for (var kH = 8 === a9.kE ? 1 : 0, a7 = a9.kI - 1; 0 <= a7; a7--) this.j4[a7 + kD] = kH;
		for (a7 = 0; a7 < kD; a7++) this.j4[a7] = 6;
		var ep = a9.em;
		for (a7 = 0; a7 < ep; a7++) this.j4[a7] <= 2 ? (k5[a7] = 5, k6[a7] = k7[a7] = 1040, 0 === this.j4[a7] ? (k3[a7] = 980, k4[a7] = 980) : 1 === this.j4[a7] ? (k3[a7] = 980, k4[a7] = 920, k6[a7] = k7[a7] = 1100) : (k3[a7] = 825, k4[a7] =
			750)) : this.j4[a7] <= 4 ? (k5[a7] = 1 + av.jC(20), 3 === this.j4[a7] ? (k3[a7] = k4[a7] = 500, k6[a7] = k7[a7] = 1e3) : (k7[a7] = 250 + av.jC(1501), k6[a7] = 500 + av.jC(501), k3[a7] = 300 + av.jC(201), k4[a7] = 100 + av.jC(
			201))) : this.j4[a7] <= 5 ? (k6[a7] = 1e3, k7[a7] = 1e3, k5[a7] = 35 + av.jC(16), k3[a7] = 300 + av.jC(201), k4[a7] = 50 + av.jC(101)) : (k6[a7] = k7[a7] = 800, k5[a7] = 5, k3[a7] = 10, k4[a7] = 250), kM(a7)
	}, this.kF = function() {
		for (var eT = aw.kN, kD = a9.ju, a7 = eT - 1; 0 <= a7; a7--) this.j4[a7 + kD] = 5;
		for (var f9 = 0; f9 < 6; f9++) {
			for (a7 = eT + aw.kO[f9] - 1; eT <= a7; a7--) this.j4[a7 + kD] = f9;
			eT += aw.kO[f9]
		}
	}, this.jg = function(gN, value) {
		k2[gN] = Math.min(value, k2[gN])
	}, this.il = function(gN) {
		0 == --k2[gN] && ! function(gN) {
			(function(gN) {
				k6[gN] !== k7[gN] && (k6[gN] += k6[gN] < k7[gN] ? 3 : -3);
				k3[gN] !== k4[gN] && (k3[gN] += k3[gN] < k4[gN] ? k5[gN] : -k5[gN], k3[gN] = (Math.abs(k3[gN] - k4[gN]) <= k5[gN] ? k4 : k3)[gN]);
				k2[gN] = bI.dn(k6[gN], 10)
			})(gN), aj.ih.jX(gN, bI.dn(k3[gN] * ac.gr[gN], 1e3))
		}(gN)
	}, this.kR = function(gN, gI) {
		k6[gN] = k7[gN] = gI
	}
}

function ib() {
	var kS = new Uint16Array(a9.em);

	function kX(player, kV) {
		for (var ep = bL.fL[0], fS = bL.fS, kg = -1, kh = a9.em, a7 = 0; a7 < ep; a7++) {
			var f5, gN = fS[a7];
			ei(player, gN) && (f5 = bJ.i4(kV, bJ.iP(gN)), -1 === kg || f5 < kg) && (kg = f5, kh = gN)
		}
		return kh
	}

	function kZ(kW, kV) {
		if (kW === a9.em) return 0;
		for (var gW = ac.gW[kW], kf = gW.length, ep = Math.min(kf, 10), kh = 0, kg = bJ.i4(gW[kh] >> 2, kV), a7 = 0; a7 < ep; a7++) {
			var kJ = av.jC(kf),
				f5 = bJ.i4(gW[kJ] >> 2, kV);
			f5 < kg && (kg = f5, kh = kJ)
		}
		return gW[kh] >> 2
	}

	function kc(player, kV, j3, kk) {
		var kl;
		(kk === a9.em || (kl = bJ.iP(j3), kk = bJ.iP(kk), bJ.i4(kV, kl) < bJ.i4(kV, kk))) && (kS[player] = j3)
	}
	this.dW = function() {
		kS.fill(a9.em)
	}, this.il = function(player) {
		var kV, kY, kW, j3 = function(player) {
			var j3 = kS[player];
			if (j3 !== a9.em) {
				if (b7.gB.kj(j3)) return j3;
				kS[player] = a9.em
			}
			return a9.em
		}(player);
		return function(player) {
			for (var jw = ah.jx, kf = ah.jv, ep = Math.min(kf, kf < 17 && 5 === av.jC(20) ? 1 : 16), gO = av.jC(kf), fS = bL.fS, gW = ac.gW, gI = 0, a7 = 0; a7 < ep; a7++) {
				var gN = jw[(a7 + gO) % kf];
				gN !== player && gW[gN].length && (fS[gI++] = gN)
			}
			bL.fL[0] = gI
		}(player), 0 !== bL.fL[0] && (0 < (kY = kZ(kW = kX(player, kV = bJ.iU(player)), kV)) && bK.ka.kb(player, kY) ? (kc(player, kV, kW, j3), !0) : 0 < (kW = function(player, kV) {
			for (var ep = bL.fL[0], fS = bL.fS, ki = kS, gO = 0, a7 = 0; a7 < ep; a7++) {
				var gN = fS[a7],
					gN = ki[gN];
				gN !== a9.em && b7.gB.kj(gN) && player !== gN && ei(player, gN) && (fS[gO++] = gN)
			}
			return 0 !== (bL.fL[0] = gO) ? kZ(kX(player, kV), kV) : 0
		}(player, kV)) && bK.ka.kb(player, kW) ? (kc(player, kV, aY.eh(kW << 2), j3), !0) : !!(0 < (kY = kZ(j3, kV)) && bK.ka.kb(player, kY)))
	}
}

function ik() {
	function kp(player) {
		for (var fF = ac.fF[player], ep = fF.length, fG = Math.max(bI.dn(ep, 12), 1), er = aY.er, e1 = av.jC(ep), a7 = 0; a7 < ep; a7 += fG)
			for (var ee = fF[(a7 + e1) % ep], es = 3; 0 <= es; es--) {
				var et = ee + er[es];
				if (aY.eu(et)) return {
					eT: et,
					id: aY.eX(et),
					gN: player
				}
			}
		return null
	}

	function ku(player, kw) {
		var j4 = b7.gB.kx(player, aA.kC[aA.j4[player]]);
		ac.gH[player].push(kw.eT), aZ.j0(player, j4, kw.gN), aB.j1(player, !0)
	}
	this.il = function(player) {
		return !!bP.eU(bP.eV) && !!a9.data.passableMountains && 0 !== ac.fF[player].length && function(player) {
			var ko = kp(player);
			if (null === ko) return !1;
			! function(player) {
				for (var jx = ah.jx, jv = ah.jv, ep = Math.min(jv, 12), gO = av.jC(jv), fS = bL.fS, fF = ac.fF, gI = 0, a7 = 0; a7 < ep; a7++) {
					var gN = jx[(a7 + gO) % jv];
					gN !== player && fF[gN].length && ei(player, gN) && (fS[gI++] = gN)
				}
				bL.fL[0] = gI
			}(player);
			var kr = function(eW) {
				for (var ep = bL.fL[0], fS = bL.fS, a7 = 0; a7 < ep; a7++) {
					var kw = kp(fS[a7]);
					if (null !== kw && kw.id === eW) return kw
				}
				return null
			}(ko.id);
			return null !== kr ? (ku(player, kr), !0) : function(player, eW) {
				var ep = aj.iW.kv;
				if (0 !== ep)
					for (var eT = aj.iW.dr[av.jC(ep)] << 2, er = aY.er, es = av.jC(4);;) {
						if (eT += er[es], aY.eu(eT)) {
							if (aY.eX(eT) === eW) return ku(player, {
								eT: eT,
								gN: a9.em
							}), !0;
							break
						}
						if (!aY.eg(eT)) break
					}
				return !1
			}(player, ko.id)
		}(player)
	}
}

function iZ() {
	this.il = function(player) {
		var eb = function(player) {
			var ep = aj.iW.kv;
			if (0 === ep) return -1;
			for (var kf = Math.min(ep, aj.performance.kz ? ep : 10), dr = aj.iW.dr, jB = bI.dn(av.random() * ep, av.value(100)), e = jB + kf, l0 = av.iV(ac.iQ[player], ac.iR[player]), l1 = av.iV(ac.iS[player], ac.iT[player]), kh = -1, f5 = bJ
					.i5(0, 0, bP.f0, bP.f1), a7 = jB; a7 < e; a7++) {
				var gO = a7 % ep,
					l2 = bJ.f7(l0, l1, dr[gO]);
				l2 < f5 && (f5 = l2, kh = gO)
			}
			return -1 !== kh ? dr[kh] : -1
		}(player);
		return -1 !== eb && bK.ka.kb(player, eb)
	}
}

function ic() {
	this.kz = 0, this.dW = function() {
		this.kz = 0
	}, this.il = function() {
		if (!this.kz && bc.jr() % 30 == 7 && b7.gB.l5(80) && (aj.performance.kz = 1)) {
			if (a9.ix) {
				var l8 = be.l9();
				if (bd.kK[l8]) {
					be.lA(l8);
					var g = bL.fT,
						ep = bL.fL[0];
					if (0 !== ep)
						for (var lB = Math.min(100 + 10 * (ep - 1), 400), a7 = 0; a7 < ep; a7++) aA.kR(g[a7], lB)
				}
			}
			aA.kR(lC[0], 100)
		}
	}
}

function iX() {
	var lD, lE, lF = 300,
		lG = 300,
		lH = (this.kv = 0, this.dr = new Uint32Array(512), !1);
	this.dW = function() {
		lH = !1, lE = lD = 0, this.kv = 0
	}, this.il = function() {
		if (function() {
				var ep = aj.iW.kv;
				if (0 === ep) return 1;
				var dr = aj.iW.dr;
				if (bc.jr() % 35 == 6) {
					for (var a7 = ep - 1; 0 <= a7; a7--) aY.eg(dr[a7] << 2) || (ep--, dr[a7] = dr[ep]);
					aj.iW.kv = ep
				}
				return ep < dr.length
			}() && !(lF <= lD)) {
			var a7, a1 = bP.f0,
				lL = a1 - 2,
				ep = lL * (bP.f1 - 2),
				lM = lF,
				dr = aj.iW.dr,
				kf = aj.iW.kv,
				lN = dr.length,
				gO = Math.min(lE + lM * ((1 + 19 * aj.performance.kz) * lG), ep);
			for (a7 = lE; a7 < gO; a7 += lM) {
				var eT = 4 * (a7 % lL + (bI.dn(a7, lL) + 1) * a1 + 1);
				if (aY.eg(eT) && (dr[kf] = eT >> 2, ++kf === lN)) {
					a7 += lM;
					break
				}
			}(lE = a7) >= ep && (lE = ++lD), aj.iW.kv = kf
		}
	}, this.lK = function() {
		lH || (this.dW(), lH = !0)
	}
}

function lO() {
	aJ.il(), ab.il(), aS.lP(), ax.s.il()
}

function lQ() {
	ay.il(), aC.il(), aa.il(), b1.il(), aB.il(), aj.il(), bK.s.il(), ah.lR(), aR.il(), aw.il(), bO.il(), bS.il(), ab.il(), ab.lS(), aS.il(), bM.il(), aQ.il(), aL.il(), aJ.il(), b2.il(), aN.il(), ar.il(), ba.il(), be.il(), ax.s.il(), ax.lT.il(), n
	.il(), b6.il(), bc.il()
}

function lU() {
	aD.il(), aT.il(), aM.il(), ap.il(), b9.il(), at.lV()
}

function lW() {
	aR.lX(!1), aL.lX(), aS.lX(!1), aQ.lX(), aN.lX(), ar.lX(), ab.lX(!1), be.lY()
}

function lZ() {
	ab.lX(!1) && (bc.de = !0), ax.s.il()
}

function c1() {
	var la, lb, lc;

	function le(lg) {
		for (var a7 = la - 1; 0 <= a7; a7--) 0 === lc[lb[a7]] && ac.gd[lb[a7]] >= lg && fs(lb[a7])
	}

	function ld(player) {
		var dm;
		64 === lc[player] ? lc[player] = 6 : (dm = ac.gd[player], lc[player] = dm < 1e3 ? 3 : dm < 1e4 ? 2 : dm < 6e4 ? 1 : 0)
	}
	this.dW = function() {
		la = 0, lb = new Uint16Array(a9.em), lc = new Uint8Array(a9.em)
	}, this.il = function() {
		for (var a7 = la - 1; 0 <= a7; a7--) 64 === lc[lb[a7]] ? ld(lb[a7]) : 0 == lc[lb[a7]]-- && (ld(lb[a7]), fs(lb[a7]));
		16e4 <= ac.gd[lC[0]] && (le(16e4), 3e5 <= ac.gd[lC[0]]) && le(3e5), b7.gB.kj(a9.eZ) && (ba.lh[7] = Math.max(ac.gd[a9.eZ], ba.lh[7]))
	}, this.gD = function(player) {
		for (var f8, a7 = la - 1; 0 <= a7; a7--)
			if (player === lb[a7]) {
				for (la--, f8 = a7; f8 < la; f8++) lb[f8] = lb[f8 + 1];
				return
			}
	}, this.j1 = function(player, li) {
		for (var a7 = la - 1; 0 <= a7; a7--)
			if (player === lb[a7]) return;
		lb[la++] = player, lc[player] = li ? 2 : 64
	}
}

function c2() {
	var size, ji;
	this.dW = function() {
		size = a9.kI, ji = new Uint16Array(a9.em);
		for (var ju = a9.ju, a7 = a9.kI - 1; 0 <= a7; a7--) ji[a7] = ju + a7
	}, this.il = function() {
		for (var a7 = size - 1; 0 <= a7; a7--)
			if (0 === ac.ll[ji[a7]]) {
				f8 = void 0;
				var f8 = a7;
				size--, ji[f8] = ji[size]
			} else aA.il(ji[a7])
	}, this.lk = function(gN) {
		ji[size++] = gN
	}
}

function c3() {
	var ln, lo, lp, lq, lr, ls, lt, lu, lv, lw, lx, ly, lz, m0 = !1,
		m1 = !1;

	function m2(m3) {
		ly = bc.eO, lp = lq = lo = 0, lr = (lz = 33) / m3, ln = 1 / (m3 / lz / 4), ls = (au.a1 / 2 + iC) / iD, lt = (au.jO / 2 + iE) / iD, lu = iD
	}

	function mA(a7) {
		var mD; - 1 !== a7 && (a7 = bJ.iJ(bK.s.mC[a7]), mD = bJ.ex(a7) - 10, a7 = bJ.ez(a7) - 10, aD.m6(mD, a7, 19 + mD, 19 + a7))
	}

	function mO(e6) {
		Math.abs(Math.log(lx / lu)) < .125 && (lx = e6 * lu)
	}

	function mN(mD, mE, mQ, mR) {
		lv = (mD + mQ + 1) / 2, lw = (mE + mR + 1) / 2;
		mQ = au.a1 / (mQ - mD + 1), mD = au.jO / (mR - mE + 1);
		lx = .9 * (mQ < mD ? mQ : mD)
	}
	this.m4 = function() {
		return m0
	}, this.m5 = function() {
		m2(1), this.m6(0, 0, bP.f0 - 1, bP.f1 - 1), a9.hB || a9.gz || this.m7(a9.eZ, 3e3, !0, .3)
	}, this.m8 = function(player, m9) {
		mA(bK.hJ.mB(player, m9))
	}, this.m7 = function(player, m3, mF, zoom) {
		a9.mG || m0 && !mF && m1 || (0 === ac.gd[player] ? mA(bK.hJ.mH(player)) : (aO.mI = !1, m1 = mF, m2(m3), function(player) {
			lv = (ac.iQ[player] + ac.iR[player] + 1) / 2, lw = (ac.iS[player] + ac.iT[player] + 1) / 2
		}(player), function(zoom, player) {
			var hx = ac.iR[player] - ac.iQ[player] + 1,
				player = ac.iT[player] - ac.iS[player] + 1,
				f8 = au.a1 / hx,
				f9 = au.jO / player,
				f8 = (lx = f8 < f9 ? f8 : f9, 0 !== zoom ? zoom : hx < 20 && player < 20 ? .5 : .9);
			lx *= f8, mO(7 / 8)
		}(zoom, player), m0 = !0, am.mL()))
	}, this.mM = function(m3) {
		a9.gz || a9.mG || (aO.mI = !1, m1 = !1, m2(m3), mN(0, 0, bP.f0 - 1, bP.f1 - 1), mO(7 / 8), m0 = !0, am.mL())
	}, this.m6 = function(mD, mE, mQ, mR) {
		mN(mD, mE, mQ, mR), iD = lx, aO.mS(lv, au.a1 / 2), aO.mT(lw, au.jO / 2), bX.mU(), bc.de = !0
	}, this.mV = function() {
		return !(m0 && m1 || (m0 = !1))
	}, this.il = function() {
		var mY, mZ, es, mc;
		m0 && (lo < .5 ? lq < lr && (lq += lr * ln, lp = lo) : 1 - lp < lo && (lq = (lq -= lr * ln) < lr * ln ? lr * ln : lq), ly = ly >= bc.eO ? bc.eO - 1 : ly, es = bc.eO - ly, lo = 1e3 < es || 1 < (lo += lq * es / lz) ? 1 : lo, ly = bc.eO,
			es = iD, mY = iC, mZ = iE, es = (iD = lu * Math.pow(lx / lu, lo)) / es, mc = 1 - (lu * Math.pow(lx / lu, 1 - lo) - lu) / (lx - lu), aO.mS(ls + mc * (lv - ls), au.a1 / 2), aO.mT(lt + mc * (lw - lt), au.jO / 2), ab.zoom(es, (mY *
				es - iC) / (1 - es), (mZ * es - iE) / (1 - es)), bX.mU(), 1 <= lo && (m0 = !1, bY.md = !0), bc.de = !0)
	}
}

function bv() {
	var fA = b7.color;
	this.me = fA.mf(0, 0, 0), this.mg = fA.mh(0, 0, 0, .7), this.mi = fA.mh(0, 0, 0, .5), this.mj = fA.mh(0, 0, 0, .85), this.mk = fA.mh(0, 0, 0, .75), this.ml = fA.mh(0, 0, 0, .6), this.mm = fA.mh(0, 0, 0, .35), this.mn = fA.mf(255, 255, 255), this
		.mo = fA.mh(255, 255, 255, .3), this.mp = fA.mh(255, 255, 255, .6), this.mq = fA.mh(255, 255, 255, .4), this.mr = fA.mh(255, 255, 255, .25), this.ms = fA.mh(255, 255, 255, .85), this.mt = fA.mh(255, 255, 255, .75), this.mu = fA.mh(255, 255,
			255, .15), this.mv = fA.mf(128, 128, 128), this.mw = fA.mh(64, 64, 64, .75), this.mx = fA.mh(88, 88, 88, .83), this.my = fA.mh(60, 60, 60, .85), this.mz = fA.mh(80, 60, 60, .85), this.n0 = fA.mf(160, 160, 160), this.n1 = fA.mf(30, 255,
			30), this.n2 = fA.mf(0, 200, 0), this.n3 = fA.mf(128, 255, 128), this.n4 = fA.mh(10, 65, 10, .75), this.n5 = fA.mh(0, 255, 0, .6), this.n6 = fA.mh(0, 255, 0, .5), this.n7 = fA.mh(0, 200, 0, .5), this.n8 = fA.mh(0, 100, 0, .75), this.n9 =
		fA.mh(0, 60, 0, .8), this.nA = fA.mh(0, 255, 0, .3), this.nB = fA.mh(0, 180, 0, .6), this.nC = fA.mh(0, 120, 0, .85), this.nD = fA.mf(0, 120, 0), this.nE = fA.mh(0, 70, 0, .85), this.nF = fA.mf(255, 120, 120), this.nG = fA.mf(255, 160, 160),
		this.nH = fA.mf(255, 70, 70), this.nI = fA.mf(230, 0, 0), this.nJ = fA.mh(220, 0, 0, .6), this.nK = fA.mh(255, 100, 100, .8), this.nL = fA.mh(100, 0, 0, .85), this.nM = fA.mh(60, 0, 0, .85), this.nN = fA.mh(200, 0, 0, .6), this.nO = fA.mh(
			120, 0, 0, .85), this.nP = fA.mf(255, 70, 10), this.nQ = fA.mf(255, 0, 255), this.nR = fA.mh(0, 60, 60, .85), this.nS = fA.mh(10, 60, 60, .9), this.nT = fA.mh(0, 96, 96, .75), this.nU = fA.mf(0, 255, 255), this.nV = fA.mf(160, 160, 255),
		this.nW = fA.mh(0, 40, 90, .75), this.nX = fA.mh(0, 0, 255, .6), this.nY = fA.mf(200, 200, 255), this.nZ = fA.mf(255, 120, 100), this.na = fA.mh(255, 255, 0, .5), this.nb = fA.mh(255, 255, 150, .2), this.nc = fA.mf(255, 255, 0), this.nd = fA
		.mf(255, 255, 200), this.ne = fA.mh(200, 200, 0, .6), this.nf = fA.mh(140, 120, 0, .75), this.ng = fA.mh(180, 160, 40, .75), this.nh = fA.mh(70, 50, 20, .85), this.ni = fA.mh(30, 30, 0, .85), this.nj = fA.mf(255, 255, 50), this.nk = fA.mh(60,
			60, 0, .85), this.nl = fA.mh(255, 140, 0, .75), this.nm = fA.mh(0, 0, 0, 0), this.nn = fA.mh(255, 255, 255, 0), this.no = fA.mh(254, 254, 254, 0)
}

function ct() {
	this.hC = new np, this.gB = new nq, this.nr = new ns, this.nt = new nu, this.jz = new nv
}

function np() {
	this.hD = function(eb) {
		a9.kG ? b5.nr.hD(a9.eZ, eb) : ax.nw.nx(eb)
	}, this.hN = function(iB, j3) {
		a9.kG ? b5.nr.hN(a9.eZ, iB, j3) : ax.nw.ny(iB, j3)
	}, this.nz = function(iB, o0) {
		a9.kG ? b5.nr.o1(a9.eZ, iB, o0) : ax.nw.o2(iB, o0)
	}, this.hL = function(iB, eb) {
		a9.kG ? b5.nr.hL(a9.eZ, iB, eb) : bK.hJ.hK(a9.eZ, eb) && ax.nw.o3(iB, eb)
	}, this.o4 = function(m9, eb) {
		a9.kG ? b5.nr.o4(a9.eZ, m9, eb) : bK.hJ.o5(a9.eZ, m9, eb) && ax.nw.o6(m9, eb)
	}, this.o7 = function(j3) {
		a9.kG ? b5.nr.o7(a9.eZ, j3) : ax.nw.o8(j3)
	}, this.o9 = function(oA) {
		a9.kG ? b5.nr.oB(a9.eZ, oA) : ax.nw.oC(oA)
	}, this.oD = function(oE) {
		a9.kG ? b5.nr.oD(a9.eZ, oE) : ax.nw.oF(oE)
	}, this.oG = function() {
		a9.kG ? b5.nr.oG(a9.eZ) : ax.nw.oH()
	}, this.oI = function() {
		a9.kG ? b5.nr.oI(a9.eZ) : ax.nw.o3(1, 0)
	}, this.hG = function(iB, eb, j3) {
		a9.kG ? b5.nr.hG(a9.eZ, iB, eb, j3) : ax.nw.oJ(iB, eb, j3)
	}
}

function nv() {
	this.k0 = function(player, o0, j4) {
		b7.gB.oK(player, j4, o0) && (aa.nz(player, o0), o0 < a9.ju) && av.random() < av.value(10) && (aj.ih.iy[o0] = 0)
	}, this.oL = function(player, o0, j4) {
		b7.gB.oM(j4, o0) ? (b7.gB.gE(o0, bL.fN[0]), ba.oN(player, o0), ab.oO(o0, bL.fN[0])) : ba.gF(player, j4, 12)
	}
}

function nq() {
	this.oP = function(oA, player) {
		aJ.o9(a9.eZ, player, oA), ax.nw.oQ(oA, player)
	}, this.oR = function(player) {
		aJ.oS(player, 0), ax.nw.oT(player)
	}, this.oU = function(oV, player) {
		aJ.oW(oV, player), ax.nw.oX(oV, player)
	}, this.oY = function() {
		a9.kG || a9.gz || ax.oZ.oY()
	}
}

function nu() {
	this.il = function(a8) {
		var id, fX, mV;
		for (bE.dW(a8), bE.e2 += 2, mV = 8 * bE.size; bE.e2 + 8 <= mV;) id = bE.oa(4), fX = bE.oa(9), 0 === id ? this.ob(id, fX, bE.oa(22)) : 1 === id ? this.ob(id, fX, bE.oa(10), bE.oa(10)) : 2 === id ? this.ob(id, fX, bE.oa(10), bE.oa(9)) :
			3 === id || 4 === id ? this.ob(id, fX, bE.oa(10), bE.oa(22)) : 5 === id || 6 === id ? this.ob(id, fX, bE.oa(10)) : 7 === id ? this.ob(id, fX, bE.oa(1)) : 10 === id ? this.ob(id, fX, bE.oa(20), bE.oa(22)) : this.ob(id, fX)
	}, this.oc = [], this.od = function() {
		for (var og = 0, oh = 0, oi = 0, oj = 0, ok = 0, ol = 0, a7 = 0; a7 < 512; a7++) og += ac.ll[a7], oh += ac.gd[a7], oi += ac.gr[a7], oj += bK.s.om[a7];
		ok += bK.s.on, ol += ah.jv, this.oc.push(oi % 1073741824 * 4 + (og + oh + oj + ok + ol) % 4)
	}, this.ob = function(id, fX, fZ, fb) {
		0 === id ? b5.nr.hD(fX, fZ) : 1 === id ? b5.nr.hN(fX, fZ, fb) : 2 === id ? b5.nr.o1(fX, fZ, fb) : 3 === id ? b5.nr.hL(fX, fZ, fb) : 4 === id ? b5.nr.o4(fX, fZ, fb) : 5 === id ? b5.nr.o7(fX, fZ) : 6 === id ? b5.nr.oB(fX, fZ) : 7 === id ?
			b5.nr.oD(fX, fZ) : 8 === id ? b5.nr.oG(fX) : 9 === id ? b5.nr.oo(fX) : 10 === id && b5.nr.hG(fX, fZ >> 10, fb, fZ % 1024)
	}
}

function ns() {
	this.hD = function(player, eb) {
		b7.gB.h1(0) && b7.gB.h2(player) && bJ.iG(eb) && (b6.op.oq(0, player, eb), a9.or.j0(player, eb))
	}, this.hN = function(player, iB, j3) {
		b7.gB.h1(1) && b7.gB.h2(player) && b7.gB.os(player, j3) && b7.gB.ot(player, iB, 12, 0) && b7.gB.ou(player, j3) && ((j3 = aZ.jG(player, bL.el[0])) || aZ.jY(player)) && (ac.ov[player]++, b6.op.oq(1, player, iB, bL.el[0]), aj.ie.iq(player,
			j3)) && (b7.gB.ow(player), ba.ox(player, iB), aj.ie.iw(player))
	}, this.o1 = function(player, iB, o0) {
		b7.gB.h1(1) && b7.gB.h2(player) && a9.ix && b7.gB.os(player, o0) && b7.gB.oy(player, o0) && b7.gB.oK(player, b7.gB.iA(player, iB), o0) && (b6.op.oq(2, player, iB, o0), aa.nz(player, o0))
	}, this.hL = function(player, iB, eb) {
		b7.gB.h1(1) && b7.gB.h2(player) && (0 === eb && 1 === iB ? this.oI(player) : bJ.iG(eb) && bK.s.on !== bK.s.kB && bK.s.om[player] !== bK.s.oz && 0 !== ac.gW[player].length && b7.gB.ot(player, iB, 32, 0) && bK.ka.kb(player, eb) && (ba.p0(
			player), b6.op.oq(3, player, iB, eb), b7.gB.ow(player), bj.p1.hL(player), bK.s.p2(player)))
	}, this.o4 = function(player, m9, eb) {
		b7.gB.h1(1) && b7.gB.h2(player) && bJ.iG(eb) && bK.hJ.p3(player, m9) && bK.ka.p4(eb) && (b6.op.oq(4, player, m9, eb), b7.gB.p5(player, 8), ba.gF(player, bL.fN[1], 12), bj.p1.o4(player), bK.s.o4())
	}, this.o7 = function(player, j3) {
		b7.gB.h1(1) && b7.gB.h2(player) && (j3 = Math.min(j3, a9.em), aZ.jG(player, j3)) && (b6.op.oq(5, player, j3), aZ.p6(player, j3))
	}, this.oB = function(player, oA) {
		(b7.gB.h1(1) || b7.gB.h1(2)) && b7.gB.h2(player) && (oA = bI.p7(oA, 0, 1023), b6.op.oq(6, player, oA), ab.p8(player, 0, oA))
	}, this.oD = function(player, oE) {
		b7.gB.h1(1) && b7.gB.h2(player) && (b6.op.oq(7, player, oE), ar.p9(player, oE))
	}, this.oG = function(player) {
		(b7.gB.h1(0) || b7.gB.h1(1)) && b7.gB.h2(player) && bN.oG(player) && b6.op.oq(8, player)
	}, this.oo = function(player) {
		bN.oo(player), b6.op.oq(9, player)
	}, this.oI = function(player) {
		ar.pA(player) && (b6.op.oq(3, player, 1, 0), ar.oI(player))
	}, this.hG = function(player, iB, eb, j3) {
		b7.gB.h1(1) && b7.gB.h2(player) && b7.gB.os(player, j3) && b7.gB.ou(player, j3) && bJ.iG(eb) && ai.eQ.ej(player, eb) && (aZ.jG(player, bL.el[0]) || aZ.jY(player)) && (b6.op.oq(10, player, (iB << 10) + bL.el[0], eb), j3 = b7.gB.kx(player,
			iB), ac.gH[player].push(bL.eq[0]), aZ.j0(player, j3, bL.el[0]), aB.j1(player, !0), ba.pB(player))
	}
}

function pC() {
	var pE;
	this.pD = [], this.pE = document.createElement("div"), this.pF = function(pG, marginTop) {
		var title = document.createElement("h2");
		return title.textContent = pG, title.style.margin = "0", title.style.marginBottom = "0.6em", marginTop && (title.style.marginTop = marginTop), title.style.fontSize = "1.4em", title.style.overflowWrap = "break-word", this.pE.appendChild(
			title), title
	}, this.pH = function(pG, marginBottom) {
		var pI = document.createElement("p");
		return pI.textContent = pG, pI.style.fontSize = "0.75em", pI.style.lineHeight = "1.2em", pI.style.marginBottom = marginBottom || "0", this.pE.appendChild(pI), pI
	}, this.pJ = function(pG) {
		var pK = document.createElement("p");
		return pK.textContent = pG, pK.style.fontSize = "1em", pK.style.marginBottom = "0", pK.style.whiteSpace = "pre-wrap", pK.style.overflowWrap = "break-word", this.pE.appendChild(pK), pK
	}, this.pL = function(pM, fontSize) {
		var pE = document.createElement("div");
		return pE.innerHTML = pM, pE.style.fontSize = fontSize || "1em", pE.style.lineHeight = "1.2em", this.pE.appendChild(pE), pE
	}, this.pN = function(pO) {
		for (var pP = pO.pP, ep = pP.length, a7 = 0; a7 < ep; a7++) this.pE.appendChild(pP[a7])
	}, this.pQ = function(pR) {
		return this.pD.push(pR), this.pE.appendChild(pR.e), pR
	}, this.resize = function() {
		for (var ep = this.pD.length, a7 = 0; a7 < ep; a7++) this.pD[a7].resize && this.pD[a7].resize()
	}, (pE = this.pE).style.position = "absolute", pE.style.height = "auto", pE.style.padding = "0.5em"
}

function pS(pT, pU) {
	var pE = document.createElement("div");

	function pd() {
		var a7, pe, jO, gO, es, pY = au.pf * pE.offsetWidth,
			pg = new Float64Array(function(pY) {
				var a1 = .25 * b7.pZ.pa(.6) * au.pb;
				return Math.max(Math.floor(pY / a1), 1)
			}(pY)),
			ph = bZ.ph,
			pi = (pY - (pg.length + 1) * bZ.gap) / (pg.length * au.pf);
		for (pg.fill(ph), a7 = 0; a7 < pU.length; a7++) pe = (es = pU[a7].pE).style, jO = b7.pj.min(pg), gO = pg.indexOf(jO), pe.top = b7.pZ.pk(jO), pe.left = b7.pZ.pk(ph + gO * (pi + ph)), pe.width = b7.pZ.pk(pi), b7.pZ.pl(es, 5), pg[gO] += es
			.offsetHeight + 3 * ph;
		pE.style.height = b7.pZ.pk(b7.pj.max(pg) - 2 * ph)
	}
	this.pV = pE, this.pW = pU, this.resize = function() {
		var a7;
		for (a7 = 0; a7 < pU.length; a7++) pU[a7].resize();
		pd(), pd()
	}, pE.style.width = "100%", pE.style.maxWidth = "100%", pT.style.lineHeight = "1.5em", pT.style.overflowX = "hidden", pT.style.overflowY = "auto";
	for (var a7 = 0; a7 < pU.length; a7++) pE.appendChild(pU[a7].pE);
	pT.appendChild(pE)
}

function q(pm, pn, po, pp, pq) {
	var self, pr = document.createElement("button");

	function py() {
		var q4;
		bG.q3() || (q4 = b7.color.q5(po), !1 !== pp && 0 < q4[0] && q4[0] < 255 && q4[0] === q4[1] && q4[0] === q4[2]) || (pr.style.backgroundColor = b7.color.q6(po, q4[3] && q4[3] < 120 ? 150 : 50))
	}

	function px() {
		if (pp) {
			var q4 = b7.color.q5(po);
			if (q4[0] === q4[1] && q4[0] === q4[2]) return
		}
		pn && ((q4 = pn(this)) ? 2 === q4 && py() : q8(this))
	}

	function q0() {
		this.style.backgroundColor = po
	}

	function pz() {
		q8(this)
	}

	function q8(es) {
		es.style.backgroundColor = po, es.blur()
	}
	this.button = pr, this.ps = pn, this.pt = po, this.pw = function(q1) {
		q1 = 1.1 - Math.min(.01 * pm.length, .6) + .2 * q1;
		pr.style.fontSize = q1.toFixed(1) + "em"
	}, this.pv = function(fA) {
		fA ? 1 === fA ? fA = b8.my : 2 === fA && (pp = 1, fA = b8.my) : (pp = 0, fA = b8.mj), this.pt = po = fA, pr.style.backgroundColor = fA
	}, self = this, pr.innerHTML = pm, pr.style.color = pq ? b8.nc : b8.mn, pr.style.userSelect = "none", pr.style.outline = "none", pr.style.overflowWrap = "break-word", self.pv(po), pr.style.border = "none", pr.style.font = "inherit", self.pw(
		0), pr.style.padding = "0em 0.3em", pr.onclick = px, pr.addEventListener("mouseover", py), pr.addEventListener("mouseout", pz), pr.addEventListener("focus", py), pr.addEventListener("blur", q0)
}

function q9(qA, pT) {
	var pE;
	this.resize = function() {
		for (var a7 = 0; a7 < qA.length; a7++) b7.pZ.pl(qA[a7].button);
		pE.style.gap = pE.style.padding = b7.pZ.pk(bZ.ph)
	}, (pE = document.createElement("div")).style.display = "grid", pE.style.gridTemplateColumns = "repeat(auto-fill, minmax(9.5em, 1fr))", pE.style.overflowY = "auto", pE.style.gridAutoRows = "5.3em", pE.style.maxHeight = "100%";
	for (var a7 = 0; a7 < qA.length; a7++) qA[a7].pw(1), pE.appendChild(qA[a7].button);
	pT.appendChild(pE)
}

function qC(qD, qE, qF) {
	this.ew = 0, this.ey = 0, this.a1 = 0, this.jO = 0, this.resize = function() {
		this.jO = Math.min(b7.pZ.pa(qF || .5) * qD[1] * au.pb, au.jO - 2 * bZ.gap), this.a1 = Math.min(this.jO * (qD[0] / qD[1]), au.a1 - 2 * bZ.gap), this.jO = qD[1] * this.a1 / qD[0], this.ew = bZ.gap + qE[0] * (au.a1 - this.a1 - 2 * bZ.gap),
			this.ey = bZ.gap + qE[1] * (au.jO - this.jO - 2 * bZ.gap)
	}, this.qG = function() {
		return this.ew + .5 * this.a1
	}
}

function qH(qI, qJ) {
	var qS, self, qK = document.createElement("div"),
		qL = document.createElement("div"),
		qM = document.createElement("div"),
		qN = null,
		qT = (this.qO = new qP({
			value: "",
			e2: -1
		}, 0, qQ, function(e) {
			qN.qY.textContent = 127 - e.target.value.length
		}), 0),
		qU = 1,
		qV = 1048575;

	function qQ() {
		qI(), qN.qY.textContent = 127
	}

	function ql() {
		qU && (qK.scrollTop = qK.scrollHeight)
	}

	function qn(qo) {
		var qY = document.createElement("span");
		return qY.textContent = qo.username, qY.style.display = "inline-block", qY.style.color = qo.color, qY.style.cursor = "pointer", qY.style.margin = "0", qY.style.font = "inherit", qY.style.minWidth = qY.style.minHeight = "1em", qY.style
			.backgroundColor = b8.nM, bl.qj.qr(qo) && (qY.style.textDecoration = "underline"), qo.qs && (qY.style.fontWeight = "bold"), qY.onclick = function(e) {
				qJ(e, qo)
			}, qY
	}

	function qp(qq) {
		var qY = document.createElement("span");
		return qY.textContent = qq.pG, qY.style.color = qq.color, qY.style.margin = "0", qY.style.font = "inherit", qY.style.backgroundColor = b8.mi, qq.qs && (qY.style.fontWeight = "bold"), qY
	}
	this.qZ = function(qa) {
			qV = 1048575, qL.textContent = "", qa || this.lY()
		}, this.lY = function() {
			var qb = bl.s.qc[0],
				qd = bl.s.qe[qb],
				qf = qd.qf,
				ep = qf.length,
				jB = 1048575 === qV ? 0 : ep - (qd.qg - qV + 1048575) % 1048575;
			if (qV = qd.qg, !(ep <= (jB = Math.max(jB, 0)))) {
				for (var qh = document.createDocumentFragment(), a7 = jB; a7 < ep; a7++) ! function(qh, pR) {
					var pE;
					pR && ((pE = document.createElement("div")).style.margin = "0.6em 0 0.6em 0", pE.style.font = "inherit", pE.style.marginLeft = pE.style.marginRight = "inherit", pE.style.fontSize = pR.fontSize.toFixed(2) + "em", pR.id && (pE
						.style.qm = "italic"), pE.appendChild(qn(pR.qo[0])), pE.appendChild(qp(pR.qq[0])), pR.id && pE.appendChild(qn(pR.qo[1])), pR.id && pE.appendChild(qp(pR.qq[1])), qh.appendChild(pE))
				}(qh, bl.qj.qk(qb, qf[a7]));
				qL.appendChild(qh), ql()
			}
		}, this.show = function(pT) {
			pT.appendChild(qK), pT.appendChild(qM), this.resize(pT)
		}, this.qt = function(pT) {
			pT.removeChild(qK), pT.removeChild(qM)
		}, this.resize = function(pT) {
			qT = pT ? pT.offsetHeight : qT;
			var pT = b7.pZ.qv(.04, .75),
				qw = Math.max(pT, qT - pT),
				qx = au.a1 / au.pf,
				qy = .7 * qx,
				qw = (qM.style.top = b7.pZ.pk(qT - pT), qM.style.height = b7.pZ.pk(pT), qK.style.top = b7.pZ.pk(qT - pT - qw), qK.style.height = b7.pZ.pk(qw), b7.pZ.pl(qK, 2), this.qO.e.style.width = b7.pZ.pk(qy), this.qO.e.style.fontSize = qS.button
					.style.fontSize = b7.pZ.pk(.5 * pT), b7.pZ.pl(this.qO.e, 6), qS.button.style.left = b7.pZ.pk(qy), qS.button.style.width = b7.pZ.pk(qx - qy), .385 * pT);
			qL.style.marginLeft = qL.style.marginRight = b7.pZ.pk(.5 * qw), qL.style.fontSize = b7.pZ.pk(qw), ql()
		}, (self = this).qO.e.qW = 127, qK.style.position = "absolute", qK.style.top = "0", qK.style.left = "0", qK.style.width = "100%", qK.style.overflowX = "hidden", qK.style.overflowY = "auto", qK.style.font = "inherit", qK.style
		.backgroundColor = b8.mi, qK.addEventListener("scroll", function() {
			qU = qK.scrollTop < qK.scrollHeight - qK.clientHeight - 2 ? 0 : 1
		}), qL.style.font = "inherit", qM.style.position = "absolute", qM.style.left = "0", qM.style.width = "100%", self.qO.e.setAttribute("placeholder", L(13)), self.qO.e.style.position = "absolute", self.qO.e.style.top = "0", self.qO.e.style
		.left = "0", self.qO.e.style.height = "100%", self.qO.e.style.backgroundColor = b8.mi, self.qO.e.style.textAlign = "center", (qS = new q(L(14), qQ)).button.top = "0", qS.button.style.position = "absolute", qS.button.style.height = "100%", qS
		.pv(b8.nn), qN = new qX("127", qS.button, 1, 1), qK.appendChild(qL), qM.appendChild(self.qO.e), qM.appendChild(qS.button)
}

function r0(r1, pm, r2) {
	function click() {
		var value = 1 - r1.value;
		this.textContent = (value ? "🟩 " : "⬜ ") + pm, void 0 !== r1.e2 ? bg.r3.r4(r1.e2, value) : r1.value = value, r2 && r2(value)
	}
	var e;
	pm = pm || L(15), this.e = document.createElement("p"), (e = this.e).textContent = (r1.value ? "🟩 " : "⬜ ") + pm, e.style.margin = "0", e.style.marginBottom = "0.5em", e.style.cursor = "pointer", e.addEventListener("click", click)
}

function r5(pT, pM) {
	var pE = document.createElement("div");
	this.pV = pE, this.resize = function() {
		pE.style.padding = b7.pZ.pk(bZ.ph), pE.style.lineHeight = b7.pZ.pk(b7.pZ.qv(.035))
	}, pT.style.overflowX = "hidden", pT.style.overflowY = "auto", pE.innerHTML = pM, pT.appendChild(pE)
}

function r6(r7) {
	var pE = document.createElement("div");
	this.e = pE, this.r8 = r7, this.resize = function() {
		for (var ep = r7.length, a7 = 1; a7 < ep; a7++) b7.pZ.pl(r7[a7], 4)
	};
	var a7, ep = r7.length;
	for (pE.style.width = "100%", pE.style.height = "2.7em", pE.style.marginTop = "0.6em", pE.style.border = "inherit", a7 = 0; a7 < ep; a7++) r7[a7].style.verticalAlign = "top", r7[a7].style.width = (100 / ep).toFixed(2) + "%", r7[a7].style.height =
		"100%", r7[a7].style.fontSize = "0.75em", pE.appendChild(r7[a7])
}

function r9(rA, po, rB) {
	this.pE = document.createElement("div"), this.qA = rA;
	var rC = 0;
	this.resize = function(pT, rE) {
		var ep = rA.length;
		if (!rB)
			for (var a7 = 1; a7 < ep; a7++) b7.pZ.pl(rA[a7].button, 4);
		for (var rF = 0, a7 = 0; a7 < ep; a7++) rF += rA[a7].button.offsetWidth;
		if (pT && (rC = pT.offsetWidth), rE && rF < rC)
			for (a7 = 0; a7 < ep; a7++) rA[a7].button.style.width = (100 * rA[a7].button.offsetWidth / rF).toFixed(2) + "%";
		else
			for (a7 = 0; a7 < ep; a7++) rA[a7].button.style.width = "auto";
		rE || this.resize(pT, 1)
	};
	var rD = this;
	rD.pE.style.height = rD.pE.style.maxHeight = "100%";
	for (var a7 = 0; a7 < rA.length; a7++) rA[a7].pv(po), rA[a7].button.style.height = "100%", rA[a7].button.style.padding = "0.0em 0.9em", rD.pE.appendChild(rA[a7].button)
}

function rG() {
	var e;
	this.e = document.createElement("hr"), this.resize = function() {
		b7.pZ.pl(this.e, 8, b8.mv)
	}, (e = this.e).style.marginBottom = e.style.marginTop = "0.65em", e.style.marginLeft = e.style.marginRight = "-4%", e.style.border = "none"
}

function qP(rH, type, rI, rJ) {
	var e;
	this.e = document.createElement("input"), (e = this.e).type = type ? "number" : "text", e.id = "input" + n.s.rK++, e.value = rH.value, e.style.width = "100%", e.style.userSelect = "none", e.style.outline = "none", e.style.resize = "none", e.style
		.border = "inherit", e.style.font = "inherit", e.style.color = b8.mn, e.style.backgroundColor = b8.mg, e.style.fontSize = "1em", e.style.padding = "0.1em 0.2em", e.addEventListener("focus", function() {
			au.rL++
		}), e.addEventListener("blur", function() {
			au.rL--, -1 !== rH.e2 && bg.r3.r4(rH.e2, e.value)
		}), e.addEventListener("keypress", function(event) {
			"Enter" === event.key && (event.preventDefault(), -1 !== rH.e2 && bg.r3.r4(rH.e2, e.value), rI ? rI() : e.blur())
		}), rJ && e.addEventListener("input", function(pR) {
			rJ(pR)
		})
}

function rM(pT, data) {
	var ep = data.rN.length,
		rO = document.createElement("div"),
		rP = document.createElement("div"),
		rQ = document.createElement("div"),
		rR = new Array(ep),
		pU = new Array(ep),
		rS = new Array(data.rT.length),
		rU = b7.color.mh(70, 70, 0, .35);

	function q6() {
		this.style.backgroundColor = b7.color.q6(rU, 160)
	}

	function rY() {
		this.style.backgroundColor = rU
	}

	function pd() {
		var f8;
		for (pT.style.font = b7.pZ.ri(0, b7.pZ.rj(.026, .5, .03)), a7 = 1; a7 < rS.length; a7++) b7.pZ.pl(rS[a7], 4);
		if (b7.pZ.pl(rO, 2), ep) {
			for (var hF, rk = rO.offsetWidth, rl = rQ.offsetWidth, a7 = 0; a7 < rS.length; a7++) hF = .01 * data.rX[a7] * rl, rS[a7].style.width = (100 * hF / rk).toFixed(2) + "%";
			var kf = data.rN[0].length;
			for (a7 = 0; a7 < ep; a7++)
				for (b7.pZ.pl(rR[a7], 2), f8 = 1; f8 < kf; f8++) b7.pZ.pl(pU[a7][f8], 4)
		}
	}
	this.resize = function() {
			pd(), pd()
		}, pT.style.display = "flex", pT.style.flexDirection = "column", rP.style.overflowX = "hidden", rP.style.overflowY = "auto",
		function() {
			var es, a7, rN = data.rN,
				kf = ep ? rN[0].length : 0;
			for (a7 = 0; a7 < ep; a7++) {
				rR[a7] = document.createElement("div"), rR[a7].style.backgroundColor = function(a7) {
					return a7 % 2 == 1 ? b7.color.mh(130, 130, 130, .35) : b8.mm
				}(a7), rR[a7].style.width = "100%", rR[a7].style.display = "flex", pU[a7] = new Array(kf);
				for (var f8 = 0; f8 < kf; f8++) pU[a7][f8] = es = document.createElement("div"), es.style.display = "flex", es.style.justifyContent = "center", es.style.wordBreak = "break-all", es.style.padding = "0.4em 0em", es.style.width = data
					.rX[f8] + "%", es.innerHTML = rN[a7][f8].fH, 1 === rN[a7][f8].dm && (es.name = "" + a7, es.style.color = b8.nc, es.style.backgroundColor = rU, es.addEventListener("mouseover", q6), es.addEventListener("mouseout", rY), function(es,
						ra, rb) {
						2147483647 !== rb && es.addEventListener("click", function() {
							bA.a3(30), bA.a4(30, ra), bE.dW(bA.a8), this.style.backgroundColor = rU, n.o(8, n.rc, new rd(25, {
								re: 0,
								ra: bC.rf.rg(bC.rf.rh(5)),
								rb: rb
							}))
						})
					}(es, rN[a7][f8].ra, rN[a7][f8].rb)), rR[a7].appendChild(es)
			}
			for (rO.style.display = "flex", rO.style.backgroundColor = b7.color.mh(0, 120, 0, .35), a7 = 0; a7 < rS.length; a7++) rS[a7] = es = document.createElement("div"), es.style.display = "flex", es.style.justifyContent = "center", es.style
				.wordBreak = "break-all", es.style.padding = "0.4em 0em", es.style.width = data.rX[a7] + "%", es.innerHTML = data.rT[a7], rO.appendChild(es)
		}();
	for (var a7 = 0; a7 < ep; a7++) rQ.appendChild(rR[a7]);
	rP.appendChild(rQ), pT.appendChild(rO), pT.appendChild(rP)
}

function rm() {
	var rq, a7, rn = document.createElement("div"),
		ro = document.createElement("div"),
		rp = document.createElement("div"),
		rQ = document.createElement("div"),
		qA = [],
		rT = ["Best 1v1 Player", "Top Clan", "Leading Clan Member"],
		rr = [1, 0, 2];

	function rs(a7) {
		n.o(8, 0, new rd(21, {
			rt: rr[a7],
			ru: 0,
			rv: 10
		}))
	}
	for (this.show = function() {
			this.r4(n.s.rw), document.body.appendChild(rn)
		}, this.qt = function() {
			document.body.removeChild(rn)
		}, this.r4 = function(rw) {
			for (var a7 = 0; a7 < qA.length; a7++) qA[rr[a7]].button.innerHTML = rT[a7] + "<br>" + rw[a7]
		}, this.resize = function() {
			var a7, rx = bZ.gap,
				jO = b7.pZ.ry(.085),
				a1 = Math.min(4 * jO, au.a1 - 2 * rx),
				ep = qA.length;
			for (b7.pZ.rz(rn, rx, au.jO - rx - jO, a1, jO), b7.pZ.pl(rn), b7.pZ.pl(ro, 6), a7 = 0; a7 < ep - 1; a7++) b7.pZ.pl(qA[a7].button, 6);
			for (a7 = 0; a7 < ep; a7++) qA[a7].button.style.fontSize = b7.pZ.s0(.22 * jO);
			if (!rq) {
				if (!aX.s1()) return;
				(rq = aX.get(14)).style.width = "24%", rq.style.position = "absolute", ro.appendChild(rq)
			}
			rq.style.left = b7.pZ.pk(0), rq.style.top = "7%"
		}, rn.style.position = "absolute", ro.style.width = "25%", ro.style.height = "100%", ro.style.backgroundColor = b8.mj, rp.style.position = "absolute", rp.style.width = "75%", rp.style.height = "100%", rp.style.backgroundColor = b8.mj, rp
		.style.top = rp.style.right = b7.pZ.pk(0), rp.style.overflowX = "auto", rp.style.overflowY = "hidden", rp.style.whiteSpace = "nowrap", rQ.style.height = rQ.style.maxHeight = "100%", qA.push(new q("", function() {
			rs(0)
		}, b8.nM)), qA.push(new q("", function() {
			rs(1)
		}, b8.n9)), qA.push(new q("", function() {
			rs(2)
		}, b8.nR)), a7 = 0; a7 < qA.length; a7++) qA[a7].button.style.height = "100%", rQ.appendChild(qA[a7].button);
	rp.appendChild(rQ), rn.appendChild(ro), rn.appendChild(rp)
}

function s2(s3, s4, s5, s6, qI, qJ) {
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
	this.sH = new qH(qI, qJ), this.sI = new sJ(qJ), this.sK = [s3, s4, s5, s6], this.sO = function(sP) {
		sP = (sP / 10).toFixed(1) + "%";
		sE.style.width = sP, sF.innerHTML = sP
	}, this.sQ = function() {
		this.sI.qt(sC), this.sH.show(sC)
	}, this.sR = function() {
		this.sH.qt(sC), this.sI.show(sC)
	}, this.show = function() {
		document.body.appendChild(s7)
	}, this.qt = function() {
		document.body.removeChild(s7)
	}, this.resize = function(sS) {
		var sT = 1 - .4 * u.v.sU() * (au.a1 > 1.6 * au.jO),
			sV = b7.pZ.qv(.05 * sT),
			sW = au.jO > au.a1,
			sX = b7.pZ.qv(.07 * sT + .03 * sW),
			sY = b7.pZ.qv(.04 + .02 * sW),
			sT = b7.pZ.qv(.02 * sT + .01 * sW);
		s7.style.font = b7.pZ.ri(0, b7.pZ.qv(.025)), s8.style.height = b7.pZ.pk(sV), b7.pZ.pl(s8, 2), s9.style.top = b7.pZ.pk(sV), s9.style.height = b7.pZ.pk(sX), b7.pZ.pl(s9, 2), sA.style.font = b7.pZ.ri(0, b7.pZ.qv(.02)), sA.style.top = b7.pZ
			.pk(sV + sX), sA.style.height = b7.pZ.pk(sY), b7.pZ.pl(sA, 2), sB.style.top = b7.pZ.pk(sV + sX + sY), sB.style.height = b7.pZ.pk(sX), b7.pZ.pl(sB, 2), sC.style.top = b7.pZ.pk(sV + sX + sY + sX), sC.style.height = b7.pZ.pk(au.jO / au
				.pf - sV - 3 * sX - sY - sT), sD.style.top = b7.pZ.pk(au.jO / au.pf - sX - sT), sD.style.height = b7.pZ.pk(sT), b7.pZ.pl(sD, 8), sF.style.font = b7.pZ.ri(0, .8 * sT), sG.style.top = b7.pZ.pk(au.jO / au.pf - sX), sG.style.height =
			b7.pZ.pk(sX), b7.pZ.pl(sG, 8), s3.resize(s9), s4.resize(s9), s5.resize(s9), s6.resize(s9), sS ? this.sH.resize(sC) : this.sI.resize()
	};
	qI = this;
	s7.style.position = "absolute", s7.style.top = "0", s7.style.left = "0", s7.style.width = "100%", s7.style.height = "100%", s7.style.backgroundColor = b8.mm, bG.q3() || (s7.style.backdropFilter = "blur(4px)", s7.style.webkitBackdropFilter =
		"blur(4px)"), s8.style.position = "absolute", s8.style.top = "0", s8.style.left = "0", s8.style.width = "100%", s8.style.display = "flex";
	for (var g = [s9, sA, sB, sG], a7 = 0; a7 < g.length; a7++) g[a7].style.position = "absolute", g[a7].style.left = "0", g[a7].style.width = "100%", g[a7].style.overflowX = "auto", g[a7].style.overflowY = "hidden", g[a7].style.whiteSpace =
	"nowrap";
	sC.style.position = "absolute", sC.style.left = "0", sC.style.width = "100%", sC.style.font = "inherit", sD.style.position = "absolute", sD.style.left = "0", sD.style.width = "100%", sE.style.position = "absolute", sE.style.top = "0", sE.style
		.left = "0", sE.style.height = "100%", sE.style.width = "50%", sE.style.backgroundColor = b8.n7, sF.innerHTML = "", sF.style.position = "absolute", sF.style.top = "50%", sF.style.left = "50%", sF.style.transform = "translate(-50%, -50%)", s8
		.appendChild(function() {
			var sN = document.createElement("h1");
			return sN.textContent = "Lobby", sN.style.margin = "auto", sN.style.fontFamily = "inherit", sN.style.fontSize = "inherit", sN.style.fontWeight = "inherit", sN
		}()), s9.appendChild(s3.pE), sA.appendChild(s4.pE), sB.appendChild(s5.pE), sD.appendChild(sE), sD.appendChild(sF), sG.appendChild(s6.pE), s7.appendChild(s8), s7.appendChild(s9), s7.appendChild(sA), s7.appendChild(sB), s7.appendChild(sC), s7
		.appendChild(sD), s7.appendChild(sG), qI.sI.show(sC)
}

function sJ(qJ) {
	var s7 = document.createElement("div"),
		sC = document.createElement("div");
	this.lY = function() {
			sC.textContent = "";
			for (var qh = document.createDocumentFragment(), sa = bl.s.qc[0], sb = bl.sb.sc[sa], sd = bl.sb.sd[sa], a7 = 0; a7 < sb.length; a7++) ! function(qh, pR, sf, sa) {
				var qY = document.createElement("span");
				qY.textContent = (sf ? "🟢 " : "⚪ ") + bl.qj.sg(pR, sa), qY.style.color = bl.qj.sh(pR.si), qY.style.cursor = "pointer", qY.style.margin = "0.2em 0.4em 0.2em 0.4em", qY.style.font = "inherit", qY.style.display = "inline-block", bl
					.qj.qr(pR) && (qY.style.textDecoration = "underline");
				qY.onclick = function(e) {
					qJ(e, pR)
				}, qh.appendChild(qY)
			}(qh, sb[a7], a7 < sd, sa);
			sC.appendChild(qh)
		}, this.show = function(pT) {
			pT.appendChild(s7)
		}, this.qt = function(pT) {
			pT.removeChild(s7)
		}, this.resize = function() {
			sC.style.fontSize = b7.pZ.pk(b7.pZ.qv(.02, .3))
		}, s7.style.top = "0", s7.style.left = "0", s7.style.width = s7.style.height = "100%", s7.style.overflowX = "hidden", s7.style.overflowY = "auto", s7.style.font = "inherit", sC.style.font = "inherit", sC.style.margin = "0.4em", s7
		.appendChild(sC)
}

function sj(rA) {
	var s7 = document.createElement("div"),
		sk = document.createElement("div"),
		sl = (this.ew = 0, this.ey = 0);
	this.qA = rA, this.show = function(ew, ey, so) {
		sl || (sl = 1, this.ew = ew, this.ey = ey, this.resize(so), document.body.appendChild(s7))
	}, this.qt = function() {
		sl && (sl = 0, document.body.removeChild(s7))
	}, this.resize = function(so) {
		var a1 = b7.pZ.qv(.16, .75),
			jO = rA.length * a1 / 3,
			mP = Math.min(1, Math.min(au.a1 / a1, au.jO / jO));
		a1 *= mP, jO *= mP, so || (this.ew -= a1, this.ey -= jO / 2), this.ew = bI.p7(this.ew, 0, au.a1 - a1), this.ey = bI.p7(this.ey, 0, au.jO - jO), sk.style.left = this.ew + "px", sk.style.top = this.ey + "px", sk.style.width = a1 + "px", sk
			.style.height = jO + "px", sk.style.font = b7.pZ.ri(0, .34 * jO / rA.length), b7.pZ.pl(sk, 5);
		for (var a7 = 1; a7 < rA.length; a7++) b7.pZ.pl(rA[a7].button, 8)
	};
	var self = this;
	s7.style.position = "fixed", s7.style.top = "0", s7.style.left = "0", s7.style.width = "100%", s7.style.height = "100%", s7.style.zIndex = "5", sk.style.position = "absolute";
	for (var sn = (100 / rA.length).toFixed(2) + "%", a7 = 0; a7 < rA.length; a7++) rA[a7].button.style.width = "100%", rA[a7].button.style.height = rA[a7].button.style.maxHeight = sn, rA[a7].button.style.padding = "0.0em 0.9em", sk.appendChild(rA[
		a7].button);
	s7.appendChild(sk), s7.addEventListener("click", function(e) {
		self.qt()
	})
}

function sp(rH, sq) {
	this.pP = [];
	var sr = this.pP;

	function click() {
		for (var a7 = 0; a7 < sr.length; a7++) sr[a7].textContent = sr[a7].textContent.replace("🟢", "⚪");
		this.textContent = this.textContent.replace("⚪", "🟢");
		var e2 = parseInt(this.name);
		void 0 !== rH.e2 && bg.r3.r4(rH.e2, e2), sq && sq(e2)
	}
	for (var ss, ep = rH.st.length, a7 = 0; a7 < ep; a7++)(ss = document.createElement("p")).textContent = "⚪ " + rH.st[a7], ss.style.margin = "0", ss.name = "" + a7, ss.style.cursor = "pointer", ss.style.fontSize = "1em", ss.addEventListener(
		"click", click), sr.push(ss);
	sr[rH.value].textContent = sr[rH.value].textContent.replace("⚪", "🟢")
}

function su(title, sv, sw) {
	var rn = document.createElement("div"),
		sx = document.createElement("div"),
		rQ = document.createElement("div"),
		sy = document.createElement("div"),
		sz = document.createElement("div");
	this.t0 = rQ, this.t1 = sv, this.show = function() {
			!1 !== sw ? document.body.appendChild(rn) : (document.body.appendChild(sx), document.body.appendChild(sy))
		}, this.qt = function() {
			!1 !== sw ? document.body.removeChild(rn) : (document.body.removeChild(sx), document.body.removeChild(sy))
		}, this.t5 = function() {
			var qw = b7.pZ.qv(.1),
				qu = b7.pZ.qv(.08 + .04 * (au.t6 < 1));
			return {
				qw: qw,
				qu: qu,
				t7: au.jO / au.pf - qw - qu
			}
		}, this.resize = function(rE) {
			var ep = sv.length,
				t8 = this.t5(),
				qw = t8.qw,
				qu = t8.qu;
			for (sx.style.height = b7.pZ.pk(qw), b7.pZ.pl(sx, 2), sy.style.top = b7.pZ.pk(au.jO / au.pf - qu), sy.style.height = b7.pZ.pk(qu), b7.pZ.pl(sy, 8), rQ.style.top = b7.pZ.pk(qw), rQ.style.height = rQ.style.maxHeight = b7.pZ.pk(t8.t7), sx
				.style.font = b7.pZ.ri(0, b7.pZ.qv(.02, .3)), sy.style.font = b7.pZ.ri(0, b7.pZ.qv(.02, .7)), rQ.style.font = b7.pZ.ri(0, b7.pZ.qv(.02, .7)), a7 = 1; a7 < ep; a7++) b7.pZ.pl(sv[a7].button, 4);
			for (var rF = 0, a7 = 0; a7 < ep; a7++) rF += sv[a7].button.offsetWidth;
			if (rE && rF < sy.offsetWidth)
				for (a7 = 0; a7 < ep; a7++) sv[a7].button.style.width = (100 * sv[a7].button.offsetWidth / rF).toFixed(2) + "%";
			else
				for (a7 = 0; a7 < ep; a7++) sv[a7].button.style.width = "auto";
			rE || this.resize(!0)
		}, this.t9 = function() {
			var t8 = this.t5(),
				fA = au.pf;
			tA.fillStyle = b8.mj, tA.fillRect(0, fA * t8.qw, au.a1, fA * t8.t7)
		}, rn.style.position = "absolute", rn.style.top = "0", rn.style.left = "0", rn.style.width = "100%", rn.style.height = "100%", sx.style.position = "absolute", sx.style.top = "0", sx.style.left = "0", sx.style.width = "100%", sx.style
		.display = "flex", sx.style.backgroundColor = b8.mj, sy.style.position = "absolute", sy.style.left = "0", sy.style.width = "100%", sy.style.overflowX = "auto", sy.style.overflowY = "hidden", sy.style.whiteSpace = "nowrap", sz.style.height =
		sz.style.maxHeight = "100%", rQ.style.position = "absolute", rQ.style.width = "100%", rQ.style.backgroundColor = b8.mj,
		function() {
			for (var a7 = 0; a7 < sv.length; a7++) sv[a7].button.style.height = "100%", sv[a7].button.style.padding = "0.0em 0.9em"
		}();
	for (var a7 = 0; a7 < sv.length; a7++) sz.appendChild(sv[a7].button);
	sx.appendChild(function() {
		var t4 = document.createElement("h1");
		return t4.textContent = title, t4.style.margin = "auto", t4.style.fontSize = 20 < title.length && au.jO > au.a1 ? "1.8em" : "2.3em", t4
	}()), sy.appendChild(sz), !1 !== sw && (rn.appendChild(rQ), rn.appendChild(sx), rn.appendChild(sy))
}

function qX(tB, tC, tD, tE) {
	var self;
	this.qY = document.createElement("span"), (self = this).qY.textContent = tB, self.qY.style.color = b8.mn, self.qY.style.position = "absolute", self.qY.style.font = "inherit", tE ? self.qY.style.bottom = "0.06em" : self.qY.style.top = "0.12em",
		tD ? self.qY.style.left = "0.2em" : self.qY.style.right = "0.2em", self.qY.style.fontSize = "0.6em", self.qY.style.pointerEvents = "none", tC.style.position = "relative", tC.style.overflow = "hidden", tC.appendChild(self.qY)
}

function tF(tG, tH, tI, tJ) {
	var tK = document.createElement("textarea"),
		tL = (this.e = tK, !0);

	function tQ() {
		tK.select(), document.execCommand("copy")
	}
	this.resize = function() {
			tH && b7.pZ.pl(tK, 5)
		}, this.tM = function(qq) {
			tK.value = qq
		}, this.tN = function() {
			return tK.value
		}, this.tO = function() {
			tK.select()
		}, this.clear = function() {
			tK.value = ""
		}, this.tP = function() {
			tL && navigator.clipboard ? (tK.select(), navigator.clipboard.writeText(tK.value).catch(function() {
				tL = !1, tQ()
			})) : tQ()
		}, tK.setAttribute("id", "textArea" + n.s.rK++), tK.setAttribute("autocomplete", "off"), tG && tK.setAttribute("placeholder", tG), tK.style.top = "0", tK.style.left = "0", tK.style.width = "100%", tK.style.height = "100%", tK.style
		.userSelect = "none", tK.style.outline = "none", tK.style.resize = "none", tK.style.border = "none", tK.style.color = b8.mn, tK.style.backgroundColor = b8.mg, tJ ? (tK.style.fontSize = "1em", tK.rows = 6, tK.style.padding = "0.25em") : (tK
			.style.padding = "0.45em", tK.style.fontSize = "1.2em"), tI && tK.addEventListener("input", function(e) {
			tI(e)
		}), tK.addEventListener("focus", function() {
			au.rL++
		}), tK.addEventListener("blur", function() {
			au.rL--
		})
}

function dD() {
	this.ps = new tR, this.dr = new tS, this.r3 = new tT, this.s = new tU, this.dW = function() {
		this.dr.dW(), (new tV).dW()
	}
}

function tS() {
	function tW(a7, type, tc, fI) {
		bg.dr.data.push({
			e2: a7,
			type: type || 0,
			value: tc || 0,
			tc: tc || 0,
			fI: fI || 0
		})
	}

	function tX(a7, type, tc, fI) {
		bg.dr.data.push({
			e2: a7,
			type: type,
			value: tc || "",
			tc: tc || "",
			fI: fI || 0
		})
	}

	function tY(mV) {
		for (var a7 = bg.dr.data.length; a7 < mV; a7++) bg.dr.data.push(null)
	}
	this.data = [], this.dW = function() {
		tW(0, 1, 0, 5), tW(1, 1, 1), tW(2, 0), tX(3, 2), tW(4, 1), tX(5, 2, "Trebuchet MS", 1), tW(6, 0), tW(7, 0, 0), tW(8, 0), tW(9, 1, 1), tW(10, 1), tW(11, 1, 1), tX(12, 2, navigator.language), tY(100), tX(100, 2), tX(101, 2), tX(102, 2), tX(
				103, 2), tX(104, 2), tX(105, 2), tX(106, 2), tW(107), tW(108), tW(109), tX(110, 2), tW(111), tW(112), tW(113), tX(114, 2), tW(115), tX(116, 2), tW(117, 1), tX(118, 2, "", 2), tW(119, 1, 0, 1), tX(120, 2), tW(121, 1, ~~(262144 *
				Math.random())), tX(122, 2, "Player " + Math.floor(1e3 * Math.random())), tW(123), tX(124), tW(125, 1), tX(126, 2), tW(127, 0, 1), tW(128), tW(129), tW(130), tW(131), tW(132), tX(133, 2), tW(134, 0, 5), tX(135, 2), tX(136, 2), tW(
				137), tW(138), tW(139), tW(140), tW(141), tW(142), tW(143), tW(144), tX(145, 2), tW(146), tW(147), tX(148, 2), tW(149), tW(150, 0, 1), tX(151, 2), tW(152, 0, 5), tW(153, 1), tW(154, 1), tX(155, 2), tX(156, 2), tW(157), tY(180),
			tW(180, 0), tW(181, 0)
	}, this.r4 = function(e2, value) {
		this.data[e2].value = value
	}, this.ds = function(e2, value) {
		this.r4(e2, value), bg.ps.save(e2, String(value)), bg.ps.save(e2, String(this.data[e2].fI), !0)
	}, this.tZ = function() {
		for (var a7 = 0; a7 < this.data.length; a7++) this.data[a7] && (bg.ps.save(a7, String(this.data[a7].value)), bg.ps.save(a7, String(this.data[a7].fI), !0))
	}, this.ta = function(e2) {
		return Number(this.data[e2].value)
	}, this.tb = function(e2) {
		return String(this.data[e2].value)
	}
}

function tR() {
	this.td = function(e2, fI) {
		return Number(this.te(e2, fI))
	}, this.te = function(e2, fI) {
		var fH = null;
		return 0 === u.id ? u.tf && (fH = u.tf.getItem((fI ? "v" : "d") + e2)) : 1 === u.id ? fH = u.tg.loadString((fI ? 1e3 : 2e3) + e2) : 2 === u.id && (fH = u.th[(fI ? "v" : "d") + e2]), fH && 0 !== fH.length ? fH : null
	}, this.ti = function(ep, tj) {
		var g = [],
			tk = tj ? "e" : "l";
		if (0 === u.id) {
			if (u.tf)
				for (a7 = 0; a7 < ep; a7++) g.push(u.tf.getItem(tk + a7))
		} else if (1 === u.id)
			for (var tl = tj ? 5e3 : 3e3, a7 = 0; a7 < ep; a7++) g.push(u.tg.loadString(tl + a7));
		else if (2 === u.id)
			for (a7 = 0; a7 < ep; a7++) g.push(u.th[tk + a7]);
		return g
	}, this.save = function(e2, value, fI) {
		var tm = (fI ? "v" : "d") + e2;
		if (0 === u.id) {
			if (u.tf && bg.dr.data[140].value) try {
				u.tf.setItem(tm, value)
			} catch (e) {
				console.log(e)
			}
		} else 1 === u.id ? u.tg.saveString((fI ? 1e3 : 2e3) + e2, value) : 2 === u.id && (u.th[tm] = value, u.tn.postMessage(tm + " " + value))
	}, this.to = function(g, tj) {
		var ep = g.length,
			tk = tj ? "e" : "l";
		if (0 === u.id) {
			if (u.tf && bg.dr.data[140].value) try {
				for (a7 = 0; a7 < ep; a7++) u.tf.setItem(tk + a7, g[a7])
			} catch (e) {
				console.log(e)
			}
		} else if (1 === u.id)
			for (var tl = tj ? 5e3 : 3e3, a7 = 0; a7 < ep; a7++) u.tg.saveString(tl + a7, g[a7]);
		else if (2 === u.id)
			for (a7 = 0; a7 < ep; a7++) u.th[tk + a7] = g[a7], u.tn.postMessage(tk + a7 + " " + g[a7])
	}
}

function tV() {
	this.dW = function() {
		! function() {
			var data = bg.dr.data;
			0 === data[2].fI && (au.jO > au.a1 || 0 !== u.id) && (data[2].value = data[2].tc = 1);
			0 === data[100].fI && (data[100].value = data[100].tc = (0 === u.id ? "Player " : 1 === u.id ? "Android User " : "iOS User ") + Math.floor(1e3 * Math.random()))
		}();
		var a7, fH, data = bg.dr.data,
			ep = data.length;
		for (a7 = 0; a7 < ep; a7++) data[a7] && data[a7].fI === bg.ps.td(a7, !0) && (fH = bg.ps.te(a7), data[a7].value = null === fH ? data[a7].tc : 2 === data[a7].type ? fH : Number(fH));
		bg.dr.data[10].value = bg.dr.data[10].tc
	}
}

function tU() {
	function tu(g) {
		if (0 === g.length) bg.r3.r4(116, "");
		else {
			for (var tx = g[0], a7 = 1; a7 < g.length; a7++) tx += ";" + g[a7];
			bg.r3.r4(116, tx)
		}
	}
	this.tr = function() {
		bg.dr.data[110].value.length && (bg.dr.data[106].value = bg.dr.data[110], bg.r3.r4(110, ""), this.ts())
	}, this.ts = function() {
		var g = bg.dr.data[116].value.split(";");
		for (g.length % 2 == 1 && g.pop(), g.unshift(bg.dr.data[106].value), g.unshift(bg.dr.data[105].value), a7 = 2; a7 < g.length; a7 += 2)
			if (g[a7] === g[0]) {
				g.splice(a7, 2);
				break
			} for (var tt = [], a7 = 0; a7 < g.length; a7 += 2) tt.push(g[a7]);
		tu(g), bg.dr.data[117].value = 0, bg.dr.data[117].st = tt
	}, this.tv = function(e2) {
		bg.dr.data[117].st.splice(e2, 1), bg.dr.data[117].value = Math.min(e2, bg.dr.data[117].st.length - 1);
		var g = bg.dr.data[116].value.split(";");
		g.splice(2 * e2, 2), tu(g)
	}, this.tw = function(e2) {
		var g = bg.dr.data[116].value.split(";");
		return {
			ra: g[2 * e2],
			password: g[2 * e2 + 1]
		}
	}, this.ty = function() {
		var fH = bI.p7(bg.dr.data[121].value, -1, 262143);
		return fH = -1 === fH ? ~~(262144 * Math.random()) : fH
	}
}

function tT() {
	this.r4 = function(e2, value) {
		bg.dr.data[e2].value !== value && (bg.dr.ds(e2, value), 0 === e2 ? (n.r(), b4.dW(), n.o(2)) : 1 === e2 ? au.dh(1) : 2 === e2 ? au.dh(0) : 5 === e2 && (b7.pZ.tz(), au.dh(0)))
	}, this.u0 = function() {
		for (var data = bg.dr.data, a7 = 0; a7 < 100; a7++) data[a7] && bg.dr.ds(a7, data[a7].tc);
		b7.pZ.tz(), au.dh(1), b4.dW()
	}, this.u1 = function() {
		for (var data = bg.dr.data, a7 = 0; a7 < data.length; a7++) data[a7] && bg.dr.r4(a7, data[a7].tc)
	}, this.u2 = function() {
		for (var f9 = bg.dr, a7 = 128; a7 < 135; a7++) f9.ds(a7, f9.data[a7].tc)
	}, this.u3 = function(data) {
		bg.r3.r4(109, data.rb), bg.r3.r4(107, data.u4), bg.r3.r4(108, data.u5), bg.r3.r4(112, data.u6), bg.r3.r4(111, data.u7), bg.r3.r4(113, data.u8), bg.r3.r4(135, data.u9), bg.r3.r4(136, data.uA), bg.r3.r4(137, data.uB), bg.r3.r4(138, data
			.uC), bg.r3.r4(139, data.uD), bg.r3.r4(141, data.uE), bg.r3.r4(142, data.uF), bg.r3.r4(143, data.uG), bg.r3.r4(144, data.uH)
	}
}

function bz() {
	this.rf = new uI, this.uJ = new uK, this.uL = new uM, this.dW = function() {
		this.rf.dW()
	}
}

function uK() {
	this.uN = function(size) {
		for (var uO = bE, g = [], a7 = 0; a7 < size; a7++) g.push(String.fromCharCode(uO.oa(16)));
		return g.join("")
	}, this.uP = function(pG) {
		return 20 < (pG = pG.trim()).length ? pG.substring(0, 20) : pG
	}
}

function uI() {
	var uQ = new Uint8Array(78);
	this.dW = function() {
		var a7;
		for (uQ[50] = 37, a7 = 0; a7 < 10; a7++) uQ[a7 + 3] = a7 + 1;
		for (a7 = 0; a7 < 26; a7++) uQ[a7 + 20] = a7 + 11, uQ[a7 + 52] = a7 + 38
	}, this.uR = function(pG) {
		return pG.trim().replace(new RegExp("[^a-zA-Z0-9_\\-]", "g"), "-")
	}, this.uS = function(pG, size) {
		if ((pG = this.uR(pG)).length > size) return pG.substring(0, size);
		for (; pG.length < size;) pG = "-" + pG;
		return pG
	}, this.uT = function(pG) {
		for (var uU = uQ, ep = pG.length, g = new Uint8Array(ep), a7 = 0; a7 < ep; a7++) g[a7] = uU[pG.charCodeAt(a7) - 45];
		return g
	}, this.uV = function(uW) {
		bA.a3(6 * uW.length), this.uX(uW), bE.dW(bA.a8)
	}, this.uX = function(uW) {
		for (var ep = uW.length, a1 = bA, a7 = 0; a7 < ep; a7++) a1.a4(6, uW[a7])
	}, this.uY = function(pG) {
		this.uX(this.uT(pG))
	}, this.uZ = function(pG, size) {
		this.uX(this.uT(this.uS(pG, size)))
	}, this.ua = function(pG, size) {
		for (var g = this.uT(this.uS(pG, size)), fH = 0, mP = 1, a7 = g.length - 1; 0 <= a7; a7--) fH += mP * g[a7], mP *= 64;
		return fH
	}
}

function ub() {
	var a1, jO, uc;

	function v2(hF, es, v0, uh, uv) {
		es = v1(hF, es + 1 + 2 * uh & 3);
		! function(hF, v3) {
			return 1 < Math.abs(hF % a1 - v3 % a1) || 1 < Math.abs(v6(hF) - v6(v3))
		}(hF, es) && 0 === uv[es << 2] && (uv[es << 2] = v0)
	}

	function v6(gN) {
		return Math.floor((gN + .5) / a1) % jO
	}

	function v1(gN, es) {
		return gN + uc[es]
	}
	this.ud = function(pG) {
		var a7, ue, ep, uf, uO = bE;
		for (bD.rf.uV(bD.rf.uT(pG)), bP.ui.uj[bP.eV].a1 = bP.f0 = a1 = uO.oa(12), bP.ui.uj[bP.eV].jO = bP.f1 = jO = uO.oa(12), uc = [-a1, -1, a1, 1], bP.us = document.createElement("canvas"), bP.us.width = bP.f0, bP.us.height = bP.f1, bP.uo = bP
			.us.getContext("2d", {
				alpha: !1
			}), bP.up = bP.ut = null, bP.up = bP.uo.getImageData(0, 0, bP.f0, bP.f1), bP.ut = bP.up.data, b7.pj.uu(bP.ut), ep = uO.oa(12), ue = uO.oa(5), uf = ul(a1 * jO - 1), a7 = 0; a7 < ep; a7++) ! function(kf, gN, ug, uh) {
			var a7, es, uO = bE,
				uv = bP.ut,
				uw = gN,
				ux = gN,
				uy = 0,
				uz = 1 + ug,
				v0 = 2 - ug;
			for (uv[gN << 2] = uz, a7 = 0; a7 < kf; a7++) es = uO.oa(2), gN = v1(gN, es), uv[gN << 2] === uz ? uy % 2 == 1 && v2(ux, uy + 2 * uh + 3, v0, uh, uv) : uv[gN << 2] = uz, v2(gN, es, v0, uh, uv), v2(ux, es, v0, uh, uv), ux = gN,
				uy = es;
			v1(gN, 0) === uw ? (v2(gN, 0, v0, uh, uv), v2(uw, 0, v0, uh, uv)) : v1(gN, 1) === uw && (v2(gN, 0, v0, uh, uv), v2(uw, 2, v0, uh, uv));
			0 === kf && (v2(uw, 0, v0, uh, uv), v2(uw, 2, v0, uh, uv))
		}(uO.oa(ue), uO.oa(uf), 1 === uO.oa(1), 1 === uO.oa(1));
		var ew, ey, kJ, v7, v8, v9, uv = bP.ut,
			vA = !0,
			vB = bP.ui.uj[bP.eV].vB,
			vC = bP.ui.uj[bP.eV].vC;
		for (ey = 0; ey < jO; ey++)
			for (v7 = !0, v8 = vA, ew = v9 = 0; ew < a1; ew++) kJ = 4 * ey * a1 + 4 * ew, v9 <= ew && 0 < uv[kJ] && (v8 = 2 === uv[kJ], v7) && (v7 = !1, v8 !== vA) ? (vA = v8, v9 = ew + 1, ew = -1) : (v8 ? (uv[kJ] = vC[0], uv[1 + kJ] = vC[1], uv[
				2 + kJ] = vC[2]) : (uv[kJ] = vB[0], uv[1 + kJ] = vB[1], uv[2 + kJ] = vB[2]), uv[3 + kJ] = 255);
		bP.uo.putImageData(bP.up, 0, 0), bP.uq = !0, bP.ur.dW(), bc.de = !0
	}
}

function uM() {
	this.ud = function(vD) {
		for (var uO = bE, size = uO.oa(vD), vE = 7 + 9 * uO.oa(1), g = [], a7 = 0; a7 < size; a7++) g.push(String.fromCharCode(uO.oa(vE)));
		return g.join("")
	}
}

function c4() {
	var vF, vG, vH, vI, vJ, vK, vL, vM, vN, vO;

	function vQ() {
		var vT = a9.vT;
		for (vN = vT; vN < a9.em; vN++) vP();
		for (vN = a9.hB ? a9.ju : 0; vN < vT; vN++) {
			if (!vU()) {
				for (var f9 = a9.vY = vN; f9 < vT; f9++) vN = f9, vP();
				return
			}
			vX(vK + vF * vJ + bI.dn(vJ, 2), vL + vG * vJ + bI.dn(vJ, 2))
		}
	}

	function w0(player) {
		for (var iQ = ac.iQ, iS = ac.iS, iR = ac.iR, iT = ac.iT, ey = iS[player]; ey <= iT[player]; ey++)
			for (var ew = iQ[player]; ew <= iR[player]; ew++) {
				var eT = aY.w1(ew, ey);
				aY.gP(eT) && (aY.j6(eT) ? aY.gK(eT, player) : aY.w2(eT, player))
			}
	}

	function vz(g, ru, rv) {
		var dm = g[ru];
		g[ru] = g[rv], g[rv] = dm
	}

	function vU() {
		return function() {
			var a7;
			for (a7 = 0; a7 < 8; a7++)
				if (vF = bI.dn(vH * av.random(), av.value(100)), vG = bI.dn(vI * av.random(), av.value(100)), w7()) return 1;
			return
		}() || function() {
			var hx, i0, f8, vW, f9, vV;
			for (hx = bI.dn(vH * av.random(), av.value(100)), i0 = bI.dn(vI * av.random(), av.value(100)), f8 = 40; 1 <= f8; f8--)
				for (vW = vI - f8; 0 <= vW; vW -= 40)
					for (vG = (vW + i0) % vI, f9 = 40; 1 <= f9; f9--)
						for (vV = vH - f9; 0 <= vV; vV -= 40)
							if (vF = (vV + hx) % vH, w7()) return 1;
			return
		}()
	}

	function w7() {
		for (var gN, w9, gap = bI.dn(vJ - vM, 2), wA = vL + vG * vJ + gap, wB = vK + vF * vJ + gap, w8 = wA + vM - 1; wA <= w8; w8--)
			for (w9 = wB + vM - 1; wB <= w9; w9--)
				if (gN = aY.w1(w9, w8), !aY.ek(gN) || aY.j6(gN)) return;
		return 1
	}

	function vX(vV, vW) {
		vP(), wC(vV - 2, vW - 2)
	}

	function vP() {
		ac.ll[vN] = 0, ac.gd[vN] = ac.vx[vN] = 0, ac.gH[vN] = [], ac.gV[vN] = [], ac.gW[vN] = [], ac.fF[vN] = [], ac.iQ[vN] = ac.iS[vN] = ac.iR[vN] = ac.iT[vN] = 0
	}

	function wC(vV, vW) {
		var gN, a7, wD, wE;
		for (ac.ll[vN] = 1, ac.iQ[vN] = vV + 10, ac.iS[vN] = vW + 10, ac.iT[vN] = ac.iR[vN] = 0, wD = vV; wD < vV + 4; wD++)
			for (wE = vW; wE < vW + 4; wE++)(vV < wD && wD < vV + 3 || vW < wE && wE < vW + 3) && (gN = aY.w1(wD, wE), aY.ek(gN)) && (ac.iQ[vN] = Math.min(wD, ac.iQ[vN]), ac.iR[vN] = Math.max(wD, ac.iR[vN]), ac.iS[vN] = Math.min(wE, ac.iS[vN]), ac
				.iT[vN] = Math.max(wE, ac.iT[vN]), vO[ac.gd[vN]] = gN, ac.gd[vN]++, aY.w2(gN, vN));
		for (ac.vx[vN] = ac.gd[vN], a7 = ac.gd[vN] - 1; 0 <= a7; a7--) aY.wF(vO[a7], vN) ? (aY.gK(vO[a7], vN), ac.gV[vN].push(vO[a7])) : aY.wG(vO[a7]) ? (aY.gK(vO[a7], vN), ac.gW[vN].push(vO[a7])) : aY.wH(vO[a7]) && (aY.gK(vO[a7], vN), ac.fF[vN]
			.push(vO[a7]))
	}

	function w6(vV, vW) {
		for (var gN, w9, w8 = vW; vW - 6 < w8; w8--)
			for (w9 = vV; vV - 6 < w9; w9--)
				if (gN = aY.w1(w9, w8), aY.j6(gN)) return;
		return 1
	}
	this.dW = function() {
		if (vO = new Array(12), vM = 6, vJ = 10, vH = bI.dn(bP.f0, vJ), vI = bI.dn(bP.f1, vJ), vK = bI.dn(bP.f0 - vJ * vH, 2), vL = bI.dn(bP.f1 - vJ * vI, 2), a9.hB)
			for (var a7 = 0; a7 < a9.ju; a7++) vN = a7, vP(), ac.ll[vN] = 1;
		(0 === a9.data.spawningType ? vQ : 1 === a9.data.spawningType ? (vQ(), function() {
			var vZ = a9.va;
			a9.vb || vZ++;
			if (!(vZ < 3)) {
				for (var data = a9.data, jB = (a9.hB ? a9.ju : 0) + data.teamPlayerCount[0], mV = a9.vY, vc = new Uint32Array(vZ), vd = new Uint32Array(vZ), ve = new Uint16Array(vZ), vf = new Uint16Array(vZ), en = bd.en, iQ = ac.iQ, iS =
						ac.iS, iR = ac.iR, iT = ac.iT, fU = bL.fU, fV = bL.fV, a7 = jB; a7 < mV; a7++) fU[a7] = iQ[a7] + iR[a7] >> 1, fV[a7] = iS[a7] + iT[a7] >> 1;
				for (a7 = jB; a7 < mV; a7++) {
					var id = en[a7];
					vc[id] += fU[a7], vd[id] += fV[a7]
				}
				var kK = bd.kK;
				for (a7 = 1; a7 < vZ; a7++) {
					var gI = Math.max(data.teamPlayerCount[kK[a7]], 1);
					ve[a7] = bI.dn(vc[a7], gI), vf[a7] = bI.dn(vd[a7], gI)
				}
				var vg = bd.vg,
					vh = bd.vh,
					vi = bd.vi,
					fT = bL.fT;
				for (a7 = 0; a7 < 512; a7++) fT[a7] = a7;
				for (var e1 = 0; e1 < 2 + (4 <= vZ); e1++)
					for (a7 = jB; a7 < mV; a7++) {
						for (var hF = a7, vj = fT[hF], vk = 1, f5 = bI.vl(fU[vj] - ve[1], fV[vj] - vf[1]), f8 = 2; f8 < vZ; f8++) {
							var vm = bI.vl(fU[vj] - ve[f8], fV[vj] - vf[f8]);
							vm < f5 && (f5 = vm, vk = f8)
						}
						var vn = en[hF];
						if (vk !== vn) {
							if (2 === e1 && 4 <= vZ) {
								var vo = Math.max((vk + 1) % vZ, 1),
									vp = bI.vl(fU[vj] - ve[vo], fV[vj] - vf[vo]);
								for (f8 = 1; f8 < vZ; f8++) vm = bI.vl(fU[vj] - ve[f8], fV[vj] - vf[f8]), f5 < vm && vm < vp && (vp = vm, vo = f8);
								vo !== vn && bI.vl(ve[vn] - ve[vo], vf[vn] - vf[vo]) < bI.vl(ve[vn] - ve[vk], vf[vn] - vf[vk]) && (vk = vo)
							}
							var vq = kK[vk],
								vr = vh[vq] + (a9.hB ? 0 : vi[vq]),
								v3 = vg[vr],
								vs = fT[v3],
								vt = vh[vq + 1];
							f5 = bI.vl(fU[vs] - ve[vn], fV[vs] - vf[vn]);
							for (var fA = vr + 1; fA < vt; fA++) {
								var vu = vg[fA],
									vv = fT[vu];
								(vm = bI.vl(fU[vv] - ve[vn], fV[vv] - vf[vn])) < f5 && (f5 = vm, v3 = vu)
							}
							v3 < jB || mV <= v3 || (vs = fT[v3], vc[vn] += fU[vs] - fU[vj], vd[vn] += fV[vs] - fV[vj], vc[vk] += fU[vj] - fU[vs], vd[vk] += fV[vj] - fV[vs], gI = data.teamPlayerCount[kK[vn]], ve[vn] = bI.dn(vc[vn], gI),
								vf[vn] = bI.dn(vd[vn], gI), gI = data.teamPlayerCount[vq], ve[vk] = bI.dn(vc[vk], gI), vf[vk] = bI.dn(vd[vk], gI), fT[hF] = vs, fT[v3] = vj)
						}
					}! function() {
						for (var fT = bL.fT, iQ = ac.iQ, iS = ac.iS, iR = ac.iR, iT = ac.iT, gd = ac.gd, vx = ac.vx, gV = ac.gV, gW = ac.gW, fF = ac.fF, a7 = 0; a7 < 512; a7++) {
							var vy = fT[a7];
							if (vy !== a7) {
								vz(iQ, a7, vy), vz(iS, a7, vy), vz(iR, a7, vy), vz(iT, a7, vy), vz(gd, a7, vy), vz(vx, a7, vy), vz(gV, a7, vy), vz(gW, a7, vy), vz(fF, a7, vy), w0(a7), w0(vy), fT[a7] = a7;
								for (var jO = vy, gO = fT[jO]; gO !== a7;) gO = fT[jO = gO];
								fT[jO] = vy
							}
						}
					}()
			}
		}) : function() {
			var vT = a9.vT;
			for (vN = vT; vN < a9.em; vN++) vP();
			for (vN = a9.hB ? a9.ju : 0; vN < vT; vN++)
				if (! function() {
						var spawningData = a9.data.spawningData,
							vV = spawningData[2 * vN] + 1,
							spawningData = spawningData[2 * vN + 1] + 1;
						if (3 < vV && vV < bP.f0 - 5 && 3 < spawningData && spawningData < bP.f1 - 5 && aY.ek(aY.w1(vV, spawningData)) && w6(vV + 3, spawningData + 3)) return vX(vV + 1, spawningData + 1), 1;
						return
					}()) {
					if (!vU()) {
						for (var f9 = a9.vY = vN; f9 < vT; f9++) vN = f9, vP();
						return
					}
					var vV = vK + vF * vJ + bI.dn(vJ, 2),
						vW = vL + vG * vJ + bI.dn(vJ, 2);
					vX(vV, vW)
				}
		})(), ba.lh[7] = ac.gd[a9.eZ]
	}, this.wI = function(j3, wJ, wK) {
		var a7, vV, vW, gN, vF, vG;
		for (vN = j3, a7 = 0; a7 < 20; a7++)
			for (vV = wJ + a7; wJ - a7 <= vV; vV--)
				for (vW = wK + a7; wK - a7 <= vW; vW--)
					if ((vV === wJ + a7 || vV === wJ - a7 || vW === wK + a7 || vW === wK - a7) && 3 < vV && vV < bP.f0 - 5 && 3 < vW && vW < bP.f1 - 5 && aY.ek(aY.w1(vV, vW)) && w6(vV + 3, vW + 3)) {
						if (0 < ac.gd[vN]) {
							for (vG = vF = gN = void 0, vF = ac.iR[vN]; vF >= ac.iQ[vN]; vF--)
								for (vG = ac.iT[vN]; vG >= ac.iS[vN]; vG--) gN = 4 * (vG * bP.f0 + vF), aY.wM(vN, gN) && (aY.wN(gN), ac.gd[vN]--);
							vP()
						}
						return wC(vV - 1, vW - 1), !0
					} return !1
	}, this.wO = function(j3) {
		vN = j3, vU() ? vX(vK + vF * vJ + bI.dn(vJ, 2), vL + vG * vJ + bI.dn(vJ, 2)) : vP()
	}
}

function wP() {
	an.wQ(), tA.setTransform(iD, 0, 0, iD, 0, 0), tA.imageSmoothingEnabled = iD < 3, tA.drawImage(bP.us, aO.wR(), aO.wS()), bM.wT.t9(), tA.drawImage(wU, aO.wR(), aO.wS()), an.t9(), bK.t9(), ab.t9(), (a9.mG ? (be.t9(), b9) : (aJ.t9(), aR.t9(), aN
	.t9(), b9.t9(), ar.t9(), aS.t9(), aO.t9(), aM.t9(), be.t9(), aQ.t9(), aL.t9(), aI.t9(), aH.t9(), aT.t9(), bb.t9(), ap)).t9(), n.t9()
}

function wV(wW, a1, jO) {
	wW.clearRect(0, 0, a1, jO), wW.fillStyle = b8.mk, wW.fillRect(0, 0, a1, jO)
}

function wX(wW, a1, jO, wY) {
	wW.fillStyle = b8.mn, wW.fillRect(0, 0, a1, wY), wW.fillRect(0, 0, wY, jO), wW.fillRect(a1 - wY, 0, wY, jO), wW.fillRect(0, jO - wY, a1, wY)
}

function wZ(wW, ew, ey, hS, wY, gN, wa) {
	wW.fillStyle = b8.mn;
	var gN = Math.floor(hS * gN),
		rl = (gN += (gN - wY) % 2, Math.floor((gN - wY) / 2)),
		hS = Math.floor((hS - gN) / 2);
	wW.fillRect(ew + hS, ey + hS + rl, gN, wY), wa && wW.fillRect(ew + hS + rl, ey + hS, wY, gN)
}

function wc() {
	this.dW = function() {
		8 === a9.kE && aJ.wd()
	}, this.we = function(wf) {
		var elo = a9.data.elo,
			hl = (elo[wf] - elo[1 - wf]) / 10,
			hl = 8 / (1 + Math.pow(2, hl / 32)),
			hl = Math.floor(10 * hl + .5),
			wh = this.wi(elo[wf] + (1 + a9.wj) * hl + 1),
			elo = this.wi(elo[1 - wf] - hl);
		0 === wf ? aJ.wl(wh, elo, ["rgba(10,140,10,0.75)", "rgba(140,10,10,0.75)"]) : aJ.wl(elo, wh, ["rgba(140,10,10,0.75)", "rgba(10,140,10,0.75)"])
	}, this.wi = function(elo) {
		return 16e3 === (elo = bI.p7(elo, 0, 16e3)) ? "Unknown" : (elo / 10).toFixed(1)
	}
}

function cZ() {
	this.wm = new wn, this.uv = new wo
}

function wo() {
	this.wp = !1;
	this.wt = [], this.wu = 100;
	var mD, mE, gap, hS, wq, ws, wv = 0,
		ww = new Array(9),
		wx = [],
		wy = [],
		wz = 0,
		x0 = 0,
		x1 = 0,
		x2 = 0;

	function xD() {
		ww.sort(function(f8, f9) {
			return f9.k2 - f8.k2
		});
		for (var pG = "" + ww[0].oA, a7 = 1; a7 < 9; a7++) pG += "," + ww[a7].oA;
		for (a7 = 0; a7 < 9; a7++) pG += "," + ww[a7].k2;
		bg.dr.ds(120, pG)
	}
	this.dW = function() {
		for (var rr = [0, 1, 2, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 6], a7 = 0; a7 < rr.length; a7++) {
			var color = 6 === rr[a7] ? b8.nB : b8.ml;
			this.wt.push(b7.canvas.x3(aX.get(3), rr[a7], color))
		}
		for (a7 = 0; a7 < af.wm.x4; a7++) wy.push(af.wm.x5 - af.wm.x4 + a7);
		for (a7 = 0; a7 < af.wm.x6; a7++) wy.push(af.wm.x7 + a7);
		var x8 = af.wm.x9(bH.x8);
		for (a7 = 0; a7 < x8.length; a7++) wy.push(x8[a7]);
		! function() {
			var a7, g = bg.dr.data[120].value.split(",");
			if (18 !== g.length)
				for (a7 = 0; a7 < 9; a7++) ww[a7] = {
					oA: 1015 + a7,
					k2: 0
				};
			else
				for (a7 = 0; a7 < 9; a7++) {
					var fH = parseInt(g[a7]),
						fA = (fH = 0 <= fH && fH < af.wm.x5 ? fH : 0, parseInt(g[a7 + 9]));
					fA = 0 <= fA && fA < 1e3 ? fA : 0, ww[a7] = {
						oA: fH,
						k2: fA
					}
				}
		}()
	}, this.show = function(l0, l1, xE) {
		var a7;
		if (wz = l0, x0 = l1, wv = xE || 0, this.wp = !0, wx = [], 0 === wv)
			for (a7 = 0; a7 < 9; a7++) wx.push(ww[a7].oA);
		else {
			var f9 = 49 * wv,
				xE = f9 - 49;
			for (xE >= wy.length && (wv = 1, xE = 0, f9 = 49), a7 = xE = (f9 = Math.min(f9, wy.length)) - 49; a7 < f9; a7++) wx.push(wy[a7])
		}
		wx.push(1024);
		xE = wx.length, hS = Math.floor((u.v.sU() ? .075 : .0468) * au.pb), gap = Math.floor(hS / 3), (x1 = 10 * (wq = hS + gap)) > au.a1 && (x1 = au.a1, gap = (wq = x1 / 10) - (hS = 3 * wq / 4)), ws = bI.dn(xE, 10) + !!(xE % 10), (x2 = ws *
			wq) > au.jO && (x2 = au.jO, gap = (wq = x2 / ws) - (hS = 3 * wq / 4)), xE = .5 * gap;
		mD = Math.min(Math.max(l0 - .5 * x1 + xE, xE), au.a1 - x1 + xE), mE = Math.min(Math.max(l1 - .5 * x2 + xE, xE), au.jO - x2 + xE)
	}, this.h3 = function(l0, l1, player) {
		if (!this.wp) return !1;
		if (this.xG(l0, l1)) {
			l0 = bI.p7(bI.dn(l0 - mD + .5 * gap, wq), 0, 9);
			if ((l0 += 10 * bI.p7(bI.dn(l1 - mE + .5 * gap, wq), 0, 9)) >= wx.length) return aH.qt(), !0;
			l1 = wx[l0];
			if (1024 === l1) return this.show(wz, x0, wv + 1), !0;
			! function(oA) {
				for (var a7 = 0; a7 < 9; a7++) ww[a7].k2 = Math.floor(.99 * ww[a7].k2);
				for (a7 = 0; a7 < 9; a7++)
					if (oA === ww[a7].oA) return ww[a7].k2 = Math.min(ww[a7].k2 + 30, 999), xD();
				ww.splice(5, 0, {
					oA: oA,
					k2: Math.max(ww[4].k2, 30)
				}), ww.pop(), xD()
			}(l1), player === a9.eZ ? b5.hC.o9(l1) : b5.gB.oP(l1, player)
		}
		return aH.qt(), !0
	}, this.xG = function(l0, l1) {
		return !(l0 < mD - .5 * gap || l1 < mE - .5 * gap || mD + x1 - .5 * gap <= l0 || mE + x2 - .5 * gap <= l1)
	}, this.t9 = function() {
		tA.fillStyle = b8.mk, tA.fillRect(mD - .5 * gap, mE - .5 * gap, x1, x2);
		for (var kJ = .5 * bZ.xH, ep = (tA.lineWidth = bZ.xH, tA.strokeStyle = tA.fillStyle = b8.mn, tA.strokeRect(mD - .5 * gap + kJ, mE - .5 * gap + kJ, x1 - 2 * kJ, x2 - 2 * kJ), tA.imageSmoothingEnabled = !0, wx.length), a7 = 0; a7 <
			ep; a7++) this.xI(wx[a7], tA, mD + a7 % 10 * wq, mE + bI.dn(a7, 10) * wq, hS);
		tA.imageSmoothingEnabled = !1
	}, this.xI = function(oA, hY, ew, ey, hS) {
		var eT;
		oA >= 1024 - af.wm.x4 ? (eT = hS / this.wu, hY.setTransform(eT, 0, 0, eT, ew, ey), hY.drawImage(this.wt[oA - 1024 + af.wm.x4], 0, 0), hY.setTransform(1, 0, 0, 1, 0, 0)) : (b7.pZ.textAlign(hY, 1), b7.pZ.textBaseline(hY, 1), hY.font = b7.pZ
			.ri(0, .89 * hS), hY.fillText(af.wm.xJ(oA), ew + .5 * hS, ey + (.35 - b7.pZ.xK + .56) * hS))
	}
}

function wn() {
	this.emojis = ["🥰", "😎", "😘", "😜", "🤗", "🥳", "😇", "😊", "🥱", "🙄", "🤔", "🥺", "😡", "😭", "😱", "😞", "💀", "👹", "👋", "🙏", "👏", "💪", "🙋‍♂️", "🤦‍♂️", "⬆️", "➡️", "⬇️", "⬅️", "👀", "❤️", "💔", "💥", "🔥", "🪦", "🥇", "🥈", "🥉",
		"🎖️", "🏅", "👑", "🎉", "💯", "✝️", "☪️", "🕉️", "☸️", "✡️", "☦️", "⚛️"
	], this.x4 = 13, this.x6 = this.emojis.length, this.x7 = 676, this.x5 = 1024, this.xL = this.emojis.indexOf("💀"), this.xM = this.xL + 1, this.xN = this.emojis.indexOf("🥇"), this.xO = this.emojis.indexOf("😊"), this.xJ = function(fH) {
		return fH < this.x7 ? String.fromCharCode(55356, 56806 + bI.dn(fH, 26), 55356, 56806 + fH % 26) : this.emojis[Math.min(fH - this.x7, this.x6 - 1)]
	}, this.x9 = function(pG) {
		for (var ep = pG.length - 2, g = [], a7 = 0; a7 < ep; a7++) {
			var hg = pG.charCodeAt(a7) - 56806,
				hh = pG.charCodeAt(a7 + 2) - 56806;
			0 <= hg && hg < 26 && 0 <= hh && hh < 26 && (g.push(26 * hg + hh), a7 += 3)
		}
		return g
	}, this.xP = function(fH) {
		return fH < this.x7
	}, this.xQ = function(fH) {
		return fH >= 1024 - this.x4
	}, this.xR = function(fH) {
		return fH >= this.x7 && fH < this.x7 + this.xM
	}
}

function by() {
	this.rf = new xS, this.uJ = new xT, this.uL = new xU, this.dW = function() {
		this.rf.dW()
	}
}

function xT() {
	this.uY = function(pG) {
		for (var ep = pG.length, a1 = bA, a7 = 0; a7 < ep; a7++) a1.a4(16, pG.charCodeAt(a7))
	}
}

function xS() {
	var xV = new Uint8Array(64);
	this.dW = function() {
		var a7;
		for (xV[0] = 45, xV[37] = 95, a7 = 0; a7 < 10; a7++) xV[a7 + 1] = 48 + a7;
		for (a7 = 0; a7 < 26; a7++) xV[a7 + 11] = 65 + a7, xV[a7 + 38] = 97 + a7
	}, this.rh = function(xW) {
		for (var uO = bE, uW = new Uint8Array(xW), a7 = 0; a7 < xW; a7++) uW[a7] = uO.oa(6);
		return uW
	}, this.rg = function(uW) {
		for (var ep = uW.length, xX = xV, g = [], a7 = 0; a7 < ep; a7++) g.push(String.fromCharCode(xX[uW[a7]]));
		return g.join("")
	}, this.xY = function(value, xZ) {
		for (var xX = xV, g = [], a7 = 0; a7 < xZ; a7++) g.push(String.fromCharCode(xX[value >> 6 * (xZ - 1 - a7) & 63]));
		return g.join("")
	}
}

function c6() {
	var xa, xb, xc;
	xa = [32, 65, 191, 913, 931], xb = [64, 127, 688, 930, 1155], xc = new Array(xa.length + 1);
	for (var a7 = 0; a7 < xc.length; a7++) {
		xc[a7] = 0;
		for (var f8 = a7 - 1; 0 <= f8; f8--) xc[a7] += xb[f8] - xa[f8]
	}

	function xi(fA) {
		for (var a7 = xa.length - 1; 0 <= a7; a7--)
			if (fA >= xa[a7] && fA < xb[a7]) return a7;
		return -1
	}
	this.uP = function(pG) {
		return 0 !== (pG = pG.trim()).indexOf("Bot ") && 0 !== pG.indexOf("[Bot] ") && function(pG, xf, xg) {
			var ep = (pG = pG.trim()).length;
			if (ep < xf || xg < ep) return !1;
			for (var fA, xh = 0, a7 = 0; a7 < ep; a7++)
				if (fA = pG.charCodeAt(a7), xh += 65 <= fA && fA <= 90 || 1040 <= fA && fA <= 1071 ? 1 : 0, -1 === xi(fA)) return !1;
			if (3 < xh && xh > Math.floor(ep / 2)) return !1;
			return !0
		}(pG, 3, 20)
	}, this.xj = function(pG) {
		for (var ep = (pG = pG.trim()).length, g = [], a7 = 0; a7 < ep; a7++) {
			var fA, gN = xi(fA = pG.charCodeAt(a7));
			g.push(xc[gN] + fA - xa[gN])
		}
		return g
	}, this.ud = function(g) {
		for (var fA, f9, pG = "", ep = g.length, a7 = 0; a7 < ep; a7++)
			for (f9 = 1; f9 < xc.length; f9++)
				if (g[a7] < xc[f9]) {
					fA = xa[f9 - 1] + g[a7] - xc[f9 - 1], pG += String.fromCharCode(fA);
					break
				} return pG
	}, this.xk = function(pG) {
		for (var g = this.xj(pG), result = "", a7 = 0; a7 < g.length; a7++) result = (result += g[a7] < 10 ? "00" : g[a7] < 100 ? "0" : "") + g[a7].toString(10);
		return result
	}, this.xl = function(pG) {
		for (var g = new Array(Math.floor(pG.length / 3)), a7 = 0; a7 < pG.length; a7 += 3) g[Math.floor(a7 / 3)] = parseInt(pG.substring(a7, a7 + 3));
		return this.ud(g)
	}, this.xm = function(pG) {
		for (var fH, g = [pG.length], a7 = 0; a7 < pG.length; a7++) g[a7] = pG.charCodeAt(a7) - 48;
		var result = "";
		for (a7 = 0; a7 < pG.length; a7++) a7 === pG.length - 1 || 51 < 10 * g[a7] + g[a7 + 1] ? result += g[a7].toString() : (fH = 10 * g[a7] + g[a7 + 1], result += String.fromCharCode(fH + (fH < 26 ? 65 : 71)), a7++);
		return result
	}, this.xn = function(pG) {
		for (var fA, result = "", a7 = 0; a7 < pG.length; a7++) 48 <= (fA = pG.charCodeAt(a7)) && fA < 58 ? result += String.fromCharCode(fA) : 65 <= fA && fA < 75 ? result += "0" + (fA - 65).toString() : 75 <= fA && fA < 91 ? result += (fA - 65)
			.toString() : 97 <= fA && fA < 123 && (result += (fA - 71).toString());
		return result
	}, this.xo = function(pG) {
		for (var ep = pG.length, g = [], a7 = 0; a7 < ep; a7++)(fA = pG.charCodeAt(a7)) < 58 ? g.push(pG[a7]) : (fA -= fA < 91 ? 65 : 71, g.push(String(bI.dn(fA, 10))), g.push(String(fA - 10 * bI.dn(fA, 10))));
		var ep = g.length - 2,
			fA = 0,
			uW = [];
		for (a7 = 0; a7 < ep; a7 += 3) uW[fA++] = parseInt(g[a7] + g[a7 + 1] + g[a7 + 2]);
		return uW
	}, this.xp = function() {
		for (var e1, xq = "", a7 = 0; a7 < 6; a7++) e1 = 48 + av.random() % 36, e1 += 58 <= e1 ? 39 : 0, xq += String.fromCharCode(e1);
		return xq
	}
}

function xU() {
	this.xj = function(pG, vD, xr) {
		for (var xs = [], ep = pG.length, max = 0, a7 = 0; a7 < ep; a7++) {
			var fH = pG.charCodeAt(a7);
			xs.push(fH), max = Math.max(max, fH)
		}
		var vE = max < 128 ? 7 : 16;
		for (xr.a4(vD, ep), xr.a4(1, +(16 == vE)), a7 = 0; a7 < ep; a7++) xr.a4(vE, xs[a7])
	}
}

function d5() {
	this.xt = new xu, this.xv = new xw, this.result = new xx, this.hJ = new xy, this.xz = new y0, this.y1 = new y2, this.y3 = new y4, this.dW = function() {
		this.xz.dW()
	}, this.il = function() {
		this.xz.il()
	}
}

function xy() {
	this.y5 = function() {
		for (var ep = ah.jv, y6 = ah.jx, y7 = [], a7 = 0; a7 < ep; a7++) {
			var gN = y6[a7];
			aY.y8(gN) && y7.push(gN)
		}
		return y7
	}, this.y9 = function() {
		for (var ep = ah.jv, y6 = ah.jx, dm = 0, gd = ac.gd, a7 = 0; a7 < ep; a7++) dm += gd[y6[a7]];
		return dm
	}
}

function xu() {
	function yB() {
		if (2 === a9.yF) return 1;
		ar.yG(), a9.yF = 2, a9.yH = a9.yI
	}

	function yD() {
		bO.y3.yJ(), aT.show(1 === a9.yK, !1, 2 === a9.yK), bO.result.yJ(), bO.y1.il(), aJ.yL(!0), aJ.yM(247), aJ.yM(956), aJ.yM(957), aR.lX(!0), aS.lX(!0), ar.lX(), b9.yN(), a9.gz && bc.yO.yP(), bc.de = !0, bY.yQ(), u.v.setState(0)
	}
	this.yA = function() {
		yB() || (a9.yC = 2, yD())
	}, this.yE = function() {
		yB() || (a9.yC = 1, yD())
	}
}

function y2() {
	this.il = function() {
		var yZ;
		2 === a9.yC ? (aJ.yR(0, 59), aD.mM(2700)) : a9.kE < 7 ? (yZ = bd.kK[be.l9()], yZ = bd.yb[yZ], aM.yc(L(16, [yZ]), 2, 1, 12), aJ.yd(0, L(17, [yZ]), 40, 0, b8.mn, b8.mk, -1, !1), aD.mM(2700)) : 8 === a9.kE ? (a9.yK ? aJ.yR(a9.yW, 2) : aJ.yR(
			1 - a9.eZ, 3), a9.yX.we(a9.yW), aJ.yY(a9.yW), aD.m7(a9.yW, 2700, !1, 0)) : 9 === a9.kE ? (aJ.ye(), aD.mM(2700)) : (aJ.yY(a9.yW), aD.m7(a9.yW, 2700, !1, 0))
	}
}

function xx() {
	this.yf = 0, this.y7 = null;
	var yh = this.yg = 0;
	this.yi = 0, this.yJ = function() {
		var rD, gO, dm;
		bO.xz.yj || (bO.xz.yj = !0, a9.kG) || ((rD = this).y7 = bO.hJ.y5(), rD.yf = bf.ym.yn(), a9.kE < 7 && 2 !== a9.yC ? rD.yg = be.yo() : rD.yg = bO.hJ.y9(), 8 === a9.kE && 1 === a9.yC ? (gO = 1 - a9.yW, dm = ac.gd[gO], ac.gd[gO] = 0, b5.gB
				.oY(), ac.gd[gO] = dm) : b5.gB.oY(), yh = .01 * ac.ys[a9.eZ] / 50, rD.yi = 0, a9.kE < 7 ? bO.xv.yJ(rD.y7) : 7 === a9.kE || 10 === a9.kE ? b7.gB.h2(a9.eZ) && (gO = bO.result.yf * (1 + a9.wj), 2 === a9.yC ? bO.result.yi += gO *
				ac.gd[a9.eZ] / bO.result.yg : lC[0] === a9.eZ && (bO.result.yi += gO)) : 8 !== a9.kE || 1 !== a9.yK || 0 === bg.dr.data[107].value || 100 <= (dm = bg.dr.data[108].value) || (bO.result.yi += .01 * (1 + a9.wj) * (100 - dm) *
			10), this.yl())
	}, this.yl = function() {
		b7.gB.h2(a9.eZ) && (.01 <= yh && aJ.yd(0, L(18, [yh.toFixed(2)]), 40, 0, b8.n3, b8.mk, -1, !1), .01 <= bO.result.yi) && aJ.yd(0, L(19, [bO.result.yi.toFixed(2)]), 40, 0, b8.n3, b8.mk, -1, !1)
	}, this.yv = function() {
		var uw, yw;
		a9.kG || bO.xz.yj || (yw = ac, uw = a9.eZ, 0 === yw.yx[uw]) || yw.iv[uw] < 1 || 2 * yw.ov[uw] > 3 * (yw.iu[uw] + yw.iv[uw]) || (yw = .01 * yw.ys[uw] / 50) < .01 || aJ.yd(0, L(18, [yw.toFixed(2)]), 40, 0, b8.n3, b8.mk, -1, !1)
	}
}

function y0() {
	this.yj = !1, this.dW = function() {
		this.yj = !1
	}, this.il = function() {
		7 <= a9.kE || this.yj || bc.jr() % 20 == 11 && b7.gB.l5(90) && (a9.yC = 1, bO.y3.yJ(), bO.result.yJ())
	}
}

function xw() {
	function z1(yz) {
		for (var hl = (1 + a9.wj) * bO.result.yf / (1e5 * bO.result.yg), k = "", a7 = 0; a7 < yz.length; a7++) {
			var z6 = yz[a7].z7 * hl;
			k += "  " + yz[a7].name + ": " + b7.z3.z8(1e5 * z6)
		}
		k.length && (aJ.yd(0, L(20), 45, 0, b7.color.mf(225, 240, 255), b8.mk, -1, !1), aJ.yd(0, k.trim(), 45, 0, b7.color.mf(225, 240, 255), b8.mk, -1, !1), a9.gz || aJ.yd(700, L(21) + bH.z9, 736, 0, b8.mn, b8.n9, -1, !1))
	}
	this.yJ = function(y7) {
		var yZ = bd.kK[be.l9()],
			y7 = (a9.yK && b7.gB.h2(a9.eZ) && (bO.result.yi += (b7.z3.z4(ac.z5[a9.eZ]) ? 2 : 1) * bO.result.yf * (1 + a9.wj) * ac.gd[a9.eZ] / bO.result.yg), function(y6) {
				var yz = [],
					username = ac.z5,
					ep = y6.length;
				loop: for (var a7 = 0; a7 < ep; a7++) {
					var gN = y6[a7],
						zA = b7.z3.z4(username[gN]);
					if (zA) {
						for (var f8 = yz.length - 1; 0 <= f8; f8--)
							if (yz[f8].name === zA) {
								yz[f8].z7 += ac.gd[gN];
								continue loop
							} yz.push({
							name: zA,
							z7: ac.gd[gN],
							zB: bd.en[gN]
						})
					}
				}
				return yz.sort(function(f8, f9) {
					return f9.z7 - f8.z7
				}), yz
			}(y7));
		y7.length && (2 === a9.yC ? z1(y7) : z1(function(yz, yZ) {
			for (var a7 = yz.length - 1; 0 <= a7; a7--) bd.kK[yz[a7].zB] !== yZ && yz.splice(a7, 1);
			return yz
		}(y7, yZ)))
	}
}

function y4() {
	this.yJ = function() {
		if (2 === a9.yC) a9.yK = 2;
		else {
			if (8 === a9.kE) aY.y8(0) ? aY.y8(1) ? a9.yW = +(ac.gd[1] > ac.gd[0]) : a9.yW = 0 : a9.yW = 1;
			else {
				if (a9.ix) {
					var l8 = be.zD();
					if (bd.kK[l8]) return void(a9.yK = +(bd.en[a9.eZ] === l8))
				}
				a9.yW = lC[0]
			}
			a9.yK = +(a9.yW === a9.eZ)
		}
	}
}

function dA() {
	this.id = 0, this.fI = 0, this.tf = null, this.tg = null, this.th = null, this.tn = null, this.v = new zE, this.dW = function() {
		var self, fI;
		self = this, "undefined" == typeof Android || "function" != typeof Android.getVersion || (fI = Android.getVersion()) < 12 || (self.fI = fI, self.id = 1, self.tg = Android),
			function(self) {
				var fI;
				"undefined" != typeof mwIOSdataX && window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.iosCommandA && (self.id = 2, self.th = mwIOSdataX, self.tn = window.webkit.messageHandlers.iosCommandA, fI = self
					.th.version, self.fI = fI ? Number(fI) : 0)
			}(this),
			function(self) {
				var tf;
				if (0 === self.id) {
					try {
						if (!(tf = window.localStorage)) return;
						tf.setItem("tls7", "1"), tf.removeItem("tls7")
					} catch (error) {
						return
					}
					self.tf = tf
				}
			}(this)
	}
}

function zE() {
	this.zI = function() {
		bg.r3.u0(), bg.r3.u1(), ax.s.close(0, 3255), 0 === u.id ? u.tf && u.tf.clear() : 1 === u.id ? u.tg.saveString(199, "") : 2 === u.id && u.tn.postMessage("clear")
	}, this.zJ = function() {
		2 === u.id ? u.tn.postMessage("showConsentForm") : 1 === u.id ? u.tg.setState(7) : bR.e8.showCMPScreen()
	}, this.zK = function() {
		this.setState(14)
	}, this.sU = function() {
		return 1 === bg.dr.ta(2)
	}, this.zL = function() {
		bg.dr.ds(102, "")
	}, this.setState = function(eN) {
		1 === u.id && 5 <= u.fI && u.tg.setState(eN)
	}, this.w = function() {
		var zM;
		1 === u.id && 7 <= u.fI ? u.tg.setState(5) : ((zM = new URL(window.location)).searchParams.set("v", "" + Math.floor(1e3 * Math.random())), window.location.href = zM.toString())
	}, this.db = function() {
		1 !== u.id || u.fI < 17 || u.tg.saveString(23, document.documentElement.outerHTML)
	}, this.eC = function() {
		0 === u.id ? bR.e8.dW() : 1 === u.id ? u.tg.prepareAd("1688441405") : 2 === u.id && (0 === u.fI ? u.tn.postMessage("prepare ad 4500876070") : u.tn.postMessage("loadAds 4500876070"))
	}, this.eP = function(dm) {
		return 0 === u.id ? !!bR.e8.eL() : 1 === u.id ? 12 <= u.fI && (u.tg.presentAd(dm), !0) : 2 === u.id && (0 === u.fI ? u.tn.postMessage("show ad " + dm) : u.tn.postMessage("showAd"), !0)
	}, this.dg = function() {
		2 === u.id && u.fI < 23 && n.o(4, 1, new p("App Update Required", "A new iOS app version with bug fixes has been published.<br>Please download the new Territorial.io app version for iOS:<br><a href='" + bH.zN + "' target='_blank'>" + bH
			.zN + "</a>", !0, [new q("⬅️ " + L(22), function() {
				n.o(0)
			}, b8.nO)]))
	}
}

function dP() {
	function zQ(e) {
		zb(e), n.o(4, 5, new p("🚀 New Game Update", "The game has been updated! Please reload the game." +
			"<div style='border: white; border-width: 1px; border-style: solid; margin: 10px; padding: 5px;'><h2>FX Client is not yet compatible with the latest version of the game.</h2><p>Updates should normally be available within a few hours.<br>You can still use FX to play in singleplayer mode.</p></div>",
			!0, [new q("⬅️ " + L(22), function() {
				n.zc()
			}), new q("🔄 Reload", function() {
				u.v.w()
			}, b8.n8)]))
	}

	function za(e) {
		zb(e), n.o(4, 5, new p(L(23), {
			"3249": "No servers found",
			"4705": "Lobby not found",
			"4730": "Kicked from lobby"
		} [e] ?? zU(e), !0))
	}

	function zU(e) {
		var pG = " [" + e + "]";
		return 3249 === e || 1006 === e ? "No Internet / No Server Response" + pG : 4527 === e ? "Player already in lobby" + pG : 4532 === e || 4533 === e ? "You have been kicked." + pG : 4530 === e ? "Lobby Timeout" + pG : "Unknown error" + pG
	}

	function zb(e) {
		zT(e), n.s.t()
	}

	function zT(e) {
		var eN = aW.zS();
		6 === eN ? ax.s.ze(e) : bl.zW ? (bl.zf(), n.r(), ax.s.close(ax.s.zX, 3256)) : 8 === eN && a9.zg(!0)
	}
	this.zO = function(zP, e) {
		zP === 1 && __fx.customLobby.isActive() && aW.zS() !== 6 && __fx.customLobby.setActive(false);
		if (8 === n.rc && 0 === zP)
			if (4211 === e) zQ(e);
			else {
				if (4480 === e) return bg.r3.u2(), void n.o(4, 0, new p(L(25), L(26), !0));
				8 !== aW.zS() && zT(), n.o(4, 0, new p(L(23), zU(e), !0))
			}
		else {
			var eN = aW.zS();
			if (6 === eN) {
				if (4211 === e) return void zQ(e);
				if (4215 !== e && 4516 !== e && 4527 !== e && 4533 !== e) return void aV.zV(zP)
			} else {
				if (!bl.zW) return 8 === eN ? void(zP !== ax.s.zY || a9.kG || 1 !== a9.yF || a9.gz || aJ.zZ(L(24, [e]))) : void 0;
				if (zP !== ax.s.zX) return
			}
			za(e)
		}
	}, this.zd = function(e) {
		8 === aW.zS() ? a9.kG || 1 !== a9.yF || aJ.zZ(L(24, [e])) : za(e)
	}, this.m = function() {
		zb(3268)
	}
}

function cz() {
	var zh, zi, zj = -15e3,
		zk = !1;

	function h3(e) {
		a04() || (zk = !0, a05(e, 1), ax.s.a06(ax.s.zY), a07(Math.floor(au.pf * e.clientX), Math.floor(au.pf * e.clientY)))
	}

	function zt(e) {
		zj = bc.eO, a05(e, 1), ax.s.a06(ax.s.zY), 0 < e.touches.length && (zh = Math.floor(au.pf * e.touches[0].clientX), zi = Math.floor(au.pf * e.touches[0].clientY), ao.zt(e) || a07(zh, zi))
	}

	function a07(ew, ey) {
		n.h3(ew, ey), 0 === a9.yF ? aW.h3(ew, ey) : b9.a08(ew, ey) || bb.h3(ew, ey) || aT.h3(ew, ey) || aH.a09(ew, ey) || aL.h3(ew, ey) || 0 <= aI.h3(ew, ey) || bG.a0A(ew, ey) || ar.h3(ew, ey) || aH.a0B(ew, ey)
	}

	function zp(e) {
		a04() || (zk = !0, a05(e, 1), a0C(Math.floor(au.pf * e.clientX), Math.floor(au.pf * e.clientY)))
	}

	function zu(e) {
		zj = bc.eO, a05(e, 1), 0 < e.touches.length && (zh = Math.floor(au.pf * e.touches[0].clientX), zi = Math.floor(au.pf * e.touches[0].clientY), ao.zu(e) || a0C(zh, zi))
	}

	function a0C(ew, ey) {
		n.zp(ew, ey), 0 === a9.yF ? aW.zp(ew, ey) : (bQ.gw(ew, ey), bb.zp(ew, ey) || (aI.zp(ew, ey), aH.wp() ? aH.zp(ew, ey) : aN.h4 ? aN.zp(ew) && (bc.de = !0) : (aR.zp(ew, ey), aO.mI && aO.zp(ew, ey) && (bc.de = !0))))
	}

	function zr(e) {
		a04() || (a05(e, 1), a0D(), 0 === a9.yF ? (aW.click(-1024, -1024), aP.qZ()) : (aR.a0E(-1024, -1024), aI.zp(-1024, -1024), aN.a0F(), aO.mI = !1))
	}

	function zq(e) {
		a04() || (a05(e, 1), a0G(Math.floor(au.pf * e.clientX), Math.floor(au.pf * e.clientY), 2 === e.button), bG.zn && (bG.zn = !1, e.preventDefault()))
	}

	function click(e) {
		a04() || a05(e, 1)
	}

	function zv(e) {
		zj = bc.eO, a05(e, 1), e && e.touches && 0 < e.touches.length && 0 !== a9.yF ? aO.mI = !1 : ao.a0H() || (a0G(zh, zi, !1), bG.zn && (bG.zn = !1, e.preventDefault()))
	}

	function zw(e) {
		zj = bc.eO, a05(e, 1), a0G(zh, zi, !1), bG.zn && (bG.zn = !1, e.preventDefault())
	}

	function zx(e) {}

	function zy(e) {}

	function zz(e) {
		a04() || a05(e, 0)
	}

	function a0G(ew, ey, a0I) {
		a0D(), 0 === a9.yF ? aW.click(ew, ey) : (aR.a0E(ew, ey), bb.a0E(), aN.a0F(), aO.mI = !1, aH.click(ew, ey, a0I) ? bc.de = !0 : aI.zq(ew, ey))
	}

	function a0D() {
		n.a0D()
	}

	function zs(e) {
		var ew, ey, deltaY;
		a04() || (a05(e, 1), ax.s.a06(ax.s.zY), ew = Math.floor(au.pf * e.clientX), ey = Math.floor(au.pf * e.clientY), deltaY = e.deltaY, 1 === e.deltaMode && (deltaY *= 16), n.zs(ew, ey, deltaY), 0 === a9.yF ? aW.zs(ew, ey, deltaY) : aR.zs(ew, ey,
			deltaY) || (aN.a0J(ew, ey) ? aN.zs(deltaY) && (bc.de = !0) : aO.zs(ew, ey, deltaY)))
	}

	function a00(e) {
		a05(e, 0)
	}

	function a05(e, id) {
		0 === id && n.wp() || (id = window.innerWidth / document.documentElement.clientWidth) < .999 || 1.001 < id || 0 !== aW.zS() && e.preventDefault()
	}

	function a01(e) {
		if (__fx.keybindHandler(e.key)) return;
		a04() || (e = e.code) && e.length && (bU.fA(e, 18) ? am.a0L(3) : bU.fA(e, 22) ? am.a0L(0) : bU.fA(e, 20) ? am.a0L(1) : bU.fA(e, 24) ? am.a0L(2) : bU.fA(e, 10) ? aN.a0M(31 / 32) : bU.fA(e, 8) ? aN.a0M(32 / 31) : bU.fA(e, 6) ? aN.a0M(7 / 8) :
			bU.fA(e, 4) ? aN.a0M(8 / 7) : bU.fA(e, 14) ? 0 !== a9.yF && aO.zs(Math.floor(au.a1 / 2), Math.floor(au.jO / 2), -200) : bU.fA(e, 16) ? 0 !== a9.yF && aO.zs(Math.floor(au.a1 / 2), Math.floor(au.jO / 2), 200) : bU.fA(e, 0) ? a9.yF && bQ
			.gx(!1) : bU.fA(e, 2) && a9.yF && bQ.gx(!0))
	}

	function a02(e) {
		var code;
		a04() || bc.eO < 400 || (code = e.code) && code.length && ("Enter" === code && n.a0N(1) || (8 !== aW.zS() && aW.a0N(e) ? bc.de = !0 : "Escape" === code ? bG.fJ() : bU.fA(code, 18) ? am.a0O(3) : bU.fA(code, 22) ? am.a0O(0) : bU.fA(code, 20) ?
			am.a0O(1) : bU.fA(code, 24) ? am.a0O(2) : bU.fA(code, 12) ? b9.a0P(!a9.mG) : "Space" === code && a9.yF && (aI.h0 && aI.a0Q(), a9.gz) && b9.a0R(!1)))
	}

	function a03() {
		"hidden" === document.visibilityState ? 1 === a9.yF && (a9.gz ? b9.a0S() : !a9.kG || aI.h0 || a9.hB || aI.a0Q()) : bc.de = !0
	}

	function a04() {
		return zj + 15e3 > bc.eO
	}

	function resize() {
		au.a0U()
	}
	this.zl = 0, this.zm = "", this.zn = !1, this.dW = function() {
		zo.addEventListener("mousedown", h3, {
			passive: !1
		}), zo.addEventListener("mousemove", zp, {
			passive: !1
		}), zo.addEventListener("mouseup", zq, {
			passive: !1
		}), zo.addEventListener("click", click, {
			passive: !1
		}), zo.addEventListener("mouseleave", zr, {
			passive: !1
		}), zo.addEventListener("wheel", zs, {
			passive: !1
		}), zo.addEventListener("touchstart", zt, {
			passive: !1
		}), zo.addEventListener("touchmove", zu, {
			passive: !1
		}), zo.addEventListener("touchend", zv, {
			passive: !1
		}), zo.addEventListener("touchcancel", zw, {
			passive: !1
		}), zo.addEventListener("dragover", zx), zo.addEventListener("drop", zy), zo.addEventListener("dblclick", zz), document.addEventListener("contextmenu", a00), document.addEventListener("keydown", a01), document.addEventListener(
			"keyup", a02), document.addEventListener("visibilitychange", a03), window.addEventListener("resize", resize)
	}, this.a0A = function(ew, ey) {
		return !!b9.h3(ew, ey) || !!(aR.h3(ew, ey) || aO.h3(ew, ey) || aN.h3(ew, ey) || aJ.h3(ew, ey))
	}, this.a0T = a04, this.q3 = function() {
		return !zk || 0 < zj
	}, this.fJ = function() {
		if (!n.wp()) return 8 === aW.zS() ? a9.mG ? void b9.a0P(!1) : bb.wp ? void bb.a0Q() : void aI.a0Q() : void(7 !== aW.zS() && 6 === aW.zS() && aV.a0V());
		n.a0N(2)
	}
}

function bu() {
	this.pZ = new a0W, this.pj = new a0X, this.gB = new a0Y, this.z3 = new a0Z, this.wW = new a0a, this.a0b = new a0c, this.canvas = new a0d, this.color = new a0e, this.a0f = new a0g, this.dW = function() {
		this.pZ.tz()
	}
}

function a0X() {
	this.uu = function(g) {
		g.fill(0)
	}, this.a0h = function(g) {
		for (var ep = g.length, a7 = 0; a7 < ep; a7++) g[a7] = []
	}, this.a0i = function(hg, a0j) {
		for (var hh = bL.fQ, a7 = 0; a7 < 3; a7++) hh[a7] = a0j * hg[a7];
		return hh
	}, this.a0k = function(hg, hh, a0l) {
		for (var hl = 0, a7 = 0; a7 < 3; a7++) hl += Math.abs(hg[a7] - hh[a7]);
		return a0l <= hl
	}, this.a0m = function(hg, a0n) {
		for (var a7 = 0; a7 < 3; a7++) hg[a7] = bI.p7(hg[a7] + a0n, 0, 255);
		return hg
	}, this.a0o = function(g, ru, rv) {
		rv = rv || g.length - 1;
		for (var a0p = 0, a7 = ru = ru || 0; a7 <= rv; a7++) a0p += g[a7];
		return a0p
	}, this.a0q = function(g, a0r) {
		for (var a7, a0s, ep = g.length, a0t = [], f8 = ep - 1; 0 <= f8; f8--) {
			for (a7 = a0s = 0; a7 < ep; a7++) a0r(g[a7]) < a0r(g[a0s]) && (a0s = a7);
			ep--, a0t.push(g[a0s]), g[a0s] = g[ep], g.pop()
		}
		return a0t
	}, this.min = function(g) {
		var a7, fH, ep = g.length;
		if (0 === ep) return 0;
		for (fH = g[0], a7 = 1; a7 < ep; a7++) fH = Math.min(fH, g[a7]);
		return fH
	}, this.max = function(g) {
		var ep = g.length;
		if (0 === ep) return 0;
		for (var fH = g[0], a7 = 1; a7 < ep; a7++) fH = Math.max(fH, g[a7]);
		return fH
	}, this.a0u = function(g, fH) {
		for (var ep = g.length, gI = 0, a7 = 0; a7 < ep; a7++) gI += g[a7] > fH;
		return gI
	}, this.a0v = function(a0w, a0x, min) {
		for (var ep = a0x[0], a7 = ep - 1; 0 <= a7; a7--) a0w[a7] < min && (a0w[a7] = a0w[--ep]);
		a0x[0] = ep
	}, this.a0y = function(g, ep, value) {
		for (var a7 = 0; a7 < ep; a7++) g[a7] -= value
	}, this.a0z = function(g) {
		for (var ep = g.length, a7 = 0; a7 < ep; a7++)
			if ("string" != typeof g[a7]) return !1;
		return !0
	}, this.a10 = function(pG, g, a11) {
		g.fill(0);
		for (var rx = pG.split(","), ep = Math.min(rx.length, g.length), a7 = 0; a7 < ep; a7++) g[a7] = Math.min(parseInt(rx[a7]), a11)
	}, this.a12 = function(pG, g, qW) {
		g.fill("");
		for (var rx = pG.split('"'), ep = Math.min(rx.length, 2 * g.length), kJ = 0, a7 = 1; a7 < ep; a7 += 2) g[kJ++] = rx[a7].slice(0, qW)
	}, this.a13 = function(g, gI) {
		if (0 === gI) g.fill(0);
		else {
			var a0p = this.a0o(g),
				ep = g.length;
			if (0 === a0p) g.fill(bI.dn(gI, ep));
			else
				for (var a7 = 0; a7 < ep; a7++) g[a7] = bI.dn(gI * g[a7], a0p);
			if (0 === (a0p = this.a0o(g))) g[1] = gI;
			else
				for (var kJ = 0; a0p++ < gI;) g[kJ = (kJ + 1) % ep] && g[kJ]++
		}
	}, this.a14 = function(g) {
		if (!g) return 0;
		var ep = g.length;
		if (0 === ep) return 0;
		for (var fH = g[ep - 1], a7 = ep - 2; 0 <= a7; a7--)
			if (g[a7] !== fH) return a7 + 2;
		return 1
	}
}

function a0d() {
	this.x3 = function(a15, e2, a16) {
		var hS = a15.height,
			a17 = b7.pZ.uk(hS, hS),
			hY = b7.pZ.getContext(a17);
		return function(a1, hY, a16) {
			hY.fillStyle = a16, hY.beginPath(), hY.arc(a1 / 2, a1 / 2, .47 * a1, 0, 2 * Math.PI), hY.fill()
		}(hS, hY, a16), hY.drawImage(a15, -e2 * hS, 0), a17
	}, this.a19 = function(a1A) {
		var hY, hV, hS = a1A.height;
		return a1A.width === hS && (hV = (hY = b7.pZ.getContext(a1A, !0)).getImageData(0, 0, hS, hS), b7.a0b.a1B(hV.data, hS, hS, .9), hY.putImageData(hV, 0, 0)), a1A
	}
}

function a0e() {
	this.a1C = function(fH) {
		return [fH >> 12 & 63, fH >> 6 & 63, 63 & fH]
	}, this.a1D = function(fH) {
		for (var g = this.a1C(fH), a7 = 0; a7 < 3; a7++) g[a7] = ~~(4.05 * g[a7]);
		return g
	}, this.a1E = function(fH) {
		fH = this.a1D(fH);
		return b7.color.mf(fH[0], fH[1], fH[2])
	}, this.a1F = function(g) {
		for (var a7 = 0; a7 < 3; a7++) g[a7] = ~~(g[a7] / 4.04);
		return (g[0] << 12) + (g[1] << 6) + g[2]
	}, this.mf = function(e1, rx, f9) {
		return "rgb(" + e1 + "," + rx + "," + f9 + ")"
	}, this.mh = function(e1, rx, f9, f8) {
		return "rgba(" + e1 + "," + rx + "," + f9 + "," + f8.toFixed(3) + ")"
	}, this.q5 = function(fA) {
		for (var g = fA.split("(")[1].split(","), fP = bL.fP, a7 = 0; a7 < 3; a7++) fP[a7] = parseInt(g[a7]);
		return 4 === g.length ? fP[3] = 255 * parseFloat(g[3].slice(0, -1)) : fP[3] = 255, fP
	}, this.q6 = function(a1G, es) {
		for (var g = a1G.slice(a1G.indexOf("(") + 1, a1G.indexOf(")")).split(","), fP = bL.fP, a7 = 0; a7 < 3; a7++) fP[a7] = bI.p7(parseInt(g[a7].trim(), 10) + es, 0, 255);
		return 3 === g.length ? this.mf(fP[0], fP[1], fP[2]) : (a1G = parseFloat(g[3].trim()), this.mh(fP[0], fP[1], fP[2], a1G = 0 === a1G ? .3 : a1G))
	}, this.a1H = function(g) {
		for (var pG = "#", a7 = 0; a7 < 3; a7++) {
			var e1 = g[a7].toString(16);
			pG += 1 === e1.length ? "0" + e1 : e1
		}
		return pG
	}, this.a1I = function(pG) {
		var e1, rx;
		return pG.length < 7 ? b8.me : (e1 = parseInt(pG.slice(1, 3), 16), rx = parseInt(pG.slice(3, 5), 16), pG = parseInt(pG.slice(5, 7), 16), this.mf(e1, rx, pG))
	}
}

function a0a() {
	this.a1J = function(pG, font, maxWidth) {
		if (font && (tA.font = font), tA.measureText(pG).width <= maxWidth) return pG;
		for (var a7 = pG.length - 1; 1 <= a7; a7--)
			if (pG = pG.substring(0, a7), tA.measureText(pG + "...").width <= maxWidth) return pG + "...";
		return "..."
	}
}

function a0g() {
	var a1L = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	this.a1M = function(eO) {
		var a1O, pG = new Date(eO.getTime() - 6e4 * eO.getTimezoneOffset()).toUTCString();
		return pG.length < 12 || (pG = pG.substring(5, pG.length), 0 === (eO = eO.getTimezoneOffset())) ? pG : (a1O = (eO < 0 ? "+" : "-") + bI.dn(Math.abs(eO), 60), 0 == (eO = Math.abs(eO) % 60) ? pG + a1O : pG + a1O + ":" + (eO < 10 ? "0" :
			"") + eO)
	}, this.a1P = function(eO) {
		var pG = eO.toUTCString();
		return pG.length < 12 ? pG : function(eO) {
			return a1L[eO.getUTCDay()]
		}(eO) + ", " + pG.substring(5, pG.length - 4)
	}
}

function a0W() {
	var a1R = null;
	this.xK = 0, this.tz = function() {
		var fH = bg.dr.data[5].value;
		a1R = "px " + fH, "Trebuchet MS" !== fH && (a1R += ", Trebuchet MS"), this.xK = hR(32, 32, ["a", "b", "m"], 200, a1R)
	}, this.uk = function(a1, jO) {
		var fA = document.createElement("canvas");
		return fA.width = a1, fA.height = jO, fA
	}, this.getContext = function(canvas, alpha) {
		return canvas.getContext("2d", {
			alpha: alpha
		})
	}, this.getImageData = function(wW, a1, jO) {
		return wW.getImageData(0, 0, a1, jO)
	}, this.ri = function(type, size) {
		return size = size.toFixed(2), 0 === type ? size + a1R : 1 === type ? "bold " + size + a1R : 2 === type ? "lighter " + size + a1R : 3 === type ? "italic " + size + a1R : 4 === type ? "oblique " + size + a1R : 5 === type ? "small-caps " +
			size + a1R : "small-caps bold " + size + a1R
	}, this.textAlign = function(hY, id) {
		hY.textAlign = 0 === id ? "left" : 1 === id ? "center" : "right"
	}, this.textBaseline = function(hY, id) {
		hY.textBaseline = 1 === id ? "middle" : 2 === id ? "bottom" : "top"
	}, this.pl = function(e, code, color) {
		color = this.pk(bZ.a1S) + " solid " + (color || b8.mn);
		5 === (code = code || 5) ? e.style.border = color : 4 === code ? e.style.borderLeft = color : 2 === code ? e.style.borderBottom = color : 6 === code ? e.style.borderRight = color : e.style.borderTop = color
	}, this.rz = function(e, ew, ey, a1, jO) {
		e = e.style;
		e.left = this.s0(ew), e.top = this.s0(ey), e.width = this.s0(a1), e.height = this.s0(jO)
	}, this.pa = function(fH) {
		return 1 + fH * u.v.sU()
	}, this.qv = function(mP, gO) {
		return mP * this.pa(void 0 === gO ? .5 : gO) * au.pb / au.pf
	}, this.ry = function(mP, gO) {
		return mP * this.pa(void 0 === gO ? .5 : gO) * au.pb
	}, this.rj = function(mP, gO, a1T) {
		return this.pa(gO) * Math.min(mP * au.pb, a1T * au.a1) / au.pf
	}, this.pk = function(fH) {
		return fH.toFixed(1) + "px"
	}, this.s0 = function(fH) {
		return this.a1V(fH).toFixed(1) + "px"
	}, this.a1V = function(fH) {
		return fH / au.pf
	}, this.a1W = function(rT, a1X) {
		for (var pG = "<ul>", ep = rT.length, a7 = 0; a7 < ep; a7++) pG += "<li>" + rT[a7] + ": <a href='" + a1X[a7] + "' target='_blank'>" + a1X[a7] + "</a></li>";
		return pG += "</ul>"
	}, this.a1Y = function(a1Z) {
		return "<a href='" + a1Z + "' target='_blank'>" + a1Z + "</a>"
	}, this.a1a = function(e) {
		navigator.clipboard && navigator.clipboard.writeText(e.value)
	}, this.a1b = function(e) {
		var dm = e.textContent;
		b7.z3.a1c(dm, "✔") || (1 === dm.length ? e.textContent = "✔" : e.textContent = dm + " ✔", setTimeout(function() {
			e.textContent = dm
		}, 500))
	}, this.measureText = function(pG) {
		return tA.measureText(pG).width
	}
}

function a0Y() {
	this.h1 = function(eN) {
		return 0 === eN ? 1 === a9.yF && a9.hB : 1 === eN ? 1 === a9.yF && !a9.hB : 2 === a9.yF
	}, this.h2 = function(player) {
		return 0 !== ac.ll[player] && 2 !== ac.a1d[player]
	}, this.a1e = function(player) {
		return player === a9.eZ && 2 !== ac.a1d[player]
	}, this.a1f = function(player) {
		return player === a9.eZ
	}, this.jI = function(player) {
		return player >= a9.ju || 2 === ac.a1d[player]
	}, this.kj = function(player) {
		return 0 !== ac.ll[player]
	}, this.os = function(a1g, a1h) {
		return a1g !== a1h
	}, this.gE = function(player, fH) {
		var min;
		return fH = this.a1i(player, fH), ac.gr[player] += fH, ac.a1j[player] && (min = Math.min(ac.a1j[player], ac.gr[player]), ac.a1j[player] -= min, ac.gr[player] -= min), fH
	}, this.a1i = function(player, fH) {
		var a1k = ac.gr[player];
		return fH = Math.min(fH, ac.gd[player] * a9.k1 - a1k), fH = Math.min(fH, a9.a1l - a1k), Math.max(fH, 0)
	}, this.ot = function(player, iB, a1m, a1n) {
		var a1k = ac.gr[player],
			iB = bI.dn(a1k * (iB + 1), 1024),
			a1m = bI.dn(a1m * a1k, 1024),
			iB = Math.min(iB, a1k - a1m);
		return 10 === a9.kE && (iB = b1.a1p(player, iB)), bL.fN[0] = iB, bL.fN[1] = a1m, a1n <= iB
	}, this.oK = function(player, o1, o0) {
		var player = ac.gr[player],
			a1o = bI.dn(64 * player, 1024),
			player = (o1 = Math.min(o1, player - a1o), this.a1r(o1));
		return a1o += player, o1 = this.a1i(o0, o1 -= player), bL.fN[0] = o1, bL.fN[1] = a1o, 1 <= o1
	}, this.oM = function(o1, o0) {
		var a1q = this.a1r(o1);
		return o1 = this.a1i(o0, o1 -= a1q), bL.fN[0] = o1, bL.fN[1] = a1q, 1 <= o1
	}, this.iA = function(player, a1s) {
		return bI.dn(ac.gr[player] * (a1s + 1), 1024)
	}, this.a1r = function(a1t) {
		return bI.dn(Math.max(2142 - bc.jr(), 0) * a1t, 2142)
	}, this.p5 = function(player, a1m) {
		a1m = bI.dn(a1m * ac.gr[player], 1024);
		bL.fN[1] = a1m, ac.gr[player] -= a1m
	}, this.gC = function(player, a1u) {
		var fZ, fb, f9 = ac.gr[player];
		return a1u <= f9 ? ac.gr[player] -= a1u : (ac.gr[player] = 0, fb = ac.a1j[player] + (fZ = 5 * ((f9 = a1u - f9) >> 2)), ba.gF(player, fZ - f9, 12), fb <= a9.a1v ? ac.a1j[player] = fb : (ac.a1j[player] = a9.a1v, ba.gF(player, fb - a9.a1v,
			18))), a1u
	}, this.kx = function(player, iB) {
		var gr = ac.gr,
			a1k = gr[player],
			iB = bI.dn(a1k * (iB + 1), 1024),
			a1o = Math.max(bI.dn(a1k, 10), 1e3);
		return (iB = Math.min(iB, a1k - a1o)) < 0 ? (gr[player] = 0, a1o = Math.min(1e3, a1k + a9.a1v - ac.a1j[player]), bL.fN[1] = a1o, ac.a1j[player] += a1o - a1k, 0) : (bL.fN[1] = a1o, 10 === a9.kE && (iB = b1.a1p(player, iB)), gr[player] -=
			a1o + iB, iB)
	}, this.ow = function(player) {
		ac.gr[player] -= bL.fN[0] + bL.fN[1]
	}, this.ou = function(player, j3) {
		return (j3 = Math.min(j3, a9.em)) < a9.em && 0 === ac.ll[j3] && (j3 = a9.em), (bL.el[0] = j3) === a9.em || ei(player, j3)
	}, this.oy = function(player, o0) {
		return 0 !== ac.ll[o0] && !ei(player, o0)
	}, this.a1w = function(player, a1x) {
		for (var gN, ep = ah.jv, yt = 0, a1y = lC, a7 = 0; a7 < ep; a7++)
			if (gN = a1y[a7], aY.y8(gN)) {
				if (player === gN) return !0;
				if (++yt > a1x) return !1
			} return !1
	}, this.l5 = function(gN) {
		var a1z = a9.ix ? be.yo() : ac.gd[lC[0]];
		return a1z >= bI.dn(gN * a9.je, 100)
	}
}

function a0c() {
	this.a20 = function(canvas, a21, a22) {
		var a1 = canvas.width,
			jO = canvas.height,
			fA = b7.pZ.uk(a1, jO),
			hY = b7.pZ.getContext(fA, !0),
			canvas = (hY.drawImage(canvas, 0, 0), hY.getImageData(0, 0, a1, jO));
		return a21(canvas.data, a1, jO, a22), hY.putImageData(canvas, 0, 0), fA
	}, this.a23 = function(uv, a1, jO) {
		for (var ew = a1 - 1; 0 <= ew; ew--)
			for (var ey = jO - 1; 0 <= ey; ey--) {
				var a7 = 4 * (ew + ey * a1);
				uv[3 + a7] = uv[a7], uv[a7] = uv[1 + a7] = uv[2 + a7] = 255
			}
	}, this.a24 = function(uv, a1, jO) {
		for (var ew = a1 - 1; 0 <= ew; ew--)
			for (var ey = jO - 1; 0 <= ey; ey--) {
				var a7 = 4 * (ew + ey * a1);
				uv[1 + a7] > uv[2 + a7] + 10 && (uv[3 + a7] = uv[a7], uv[1 + a7] = uv[2 + a7])
			}
	}, this.a25 = function(uv, a1, jO, a22) {
		for (var gap = Math.floor(Math.min(a1, jO) * a22), ew = 0; ew < a1; ew++)
			for (var a7, ey = 0; ey < jO; ey++)(ew < gap || ey < gap || a1 - gap <= ew || jO - gap <= ey) && (uv[3 + (a7 = 4 * (ew + ey * a1))] = 255 - 255 * (uv[1 + a7] - uv[a7]) / (255 - uv[a7]))
	}, this.a26 = function(uv, a1, jO, a22) {
		for (var ew = a1 - 1; 0 <= ew; ew--)
			for (var ey = jO - 1; 0 <= ey; ey--) {
				var a7 = 4 * (ew + ey * a1);
				uv[a7] = a22[0], uv[1 + a7] = a22[1], uv[2 + a7] = a22[2]
			}
	}, this.a27 = function(uv, a1, jO, a22) {
		for (var gap = Math.floor(a1 * a22), ew = 0; ew < a1; ew++)
			for (var a7, ey = 0; ey < jO; ey++)(ew < gap || ey < gap || a1 - gap <= ew || jO - gap <= ey) && (uv[a7 = 4 * (ew + ey * a1)] = uv[1 + a7] = uv[2 + a7] = 0)
	}, this.a28 = function(uv, a1, jO) {
		for (var ey, a7, ew = a1 - 1; 0 <= ew; ew--)
			for (ey = jO - 1; 0 <= ey; ey--) 200 < uv[1 + (a7 = 4 * (ew + ey * a1))] && uv[1 + a7] - 20 > uv[a7] && uv[1 + a7] - 20 > uv[2 + a7] ? uv[a7] + uv[2 + a7] < 40 ? uv[3 + a7] = 0 : (uv[3 + a7] = uv[a7], uv[a7] = 255, uv[1 + a7] = 255,
				uv[2 + a7] = 255) : uv[a7] < 50 && uv[1 + a7] < 50 && uv[2 + a7] < 50 && (uv[a7] + uv[1 + a7] + uv[2 + a7] < 50 ? uv[3 + a7] = 180 : uv[3 + a7] = 180 + Math.floor(75 * (uv[a7] + uv[1 + a7] + uv[2 + a7] - 50) / 100))
	}, this.a29 = function(uv, a1, jO) {
		for (var ey, a7, ew = a1 - 1; 0 <= ew; ew--)
			for (ey = jO - 1; 0 <= ey; ey--) uv[1 + (a7 = 4 * (ew + ey * a1))] > uv[a7] + 20 && uv[1 + a7] > uv[2 + a7] + 20 && uv[a7] + uv[2] < 40 && (uv[3 + a7] = 255 - uv[1 + a7], uv[a7] = uv[1 + a7] = uv[2 + a7] = uv[a7])
	}, this.a1B = function(uv, a1, jO, a22) {
		for (var e1 = a1 >> 1, ew = 0; ew < a1; ew++)
			for (var ey = 0; ey < jO; ey++) Math.sqrt((ew - e1) * (ew - e1) + (ey - e1) * (ey - e1)) > a22 * e1 && (uv[4 * (ew + ey * a1) + 3] = 0)
	}
}

function a0Z() {
	this.xY = function(fH) {
		var a7, a2A, a2B, a2C, a2D;
		if (fH < 0) return "-" + this.xY(Math.abs(fH));
		if (fH < 1e3) return fH.toString();
		for (a2A = Math.floor(Math.log(fH + .5) / Math.log(10)) + 1, a2B = Math.floor((a2A - 1) / 3), a2D = (a2C = fH.toString()).substring(a2A - 3, a2A), a7 = 1; a7 < a2B; a7++) a2D = a2C.substring(a2A - 3 * (a7 + 1), a2A - 3 * a7) + " " + a2D;
		return a2C.substring(0, a2A - 3 * a2B) + " " + a2D
	}, this.a2E = function(gN, a2A) {
		return gN.toFixed(a2A) + "%"
	}, this.z8 = function(fH, a2F) {
		return fH.toFixed(bI.p7(Math.floor((void 0 === a2F ? 3 : a2F) - Math.log10(Math.max(fH, 1))), 0, 8))
	}, this.a2G = function(fH, mP, a2A) {
		return (fH * mP).toFixed(a2A)
	}, this.z4 = function(username) {
		var et, ee = username.indexOf("[");
		return !(ee < 0) && 1 < (et = username.indexOf("]")) - ee && et - ee <= 8 ? username.substring(ee + 1, et).toUpperCase().trim() : null
	}, __fx.leaderboardFilter.parseClanFromPlayerName = this.z4;
	this.a2H = function(pG) {
		for (var f8 = Math.floor(.5 * pG.length + .5), mV = Math.floor(.5 * (f8 - 1)), a7 = 0; a7 < mV; a7++)
			for (var f9 = -1; f9 < 2; f9 += 2) {
				var fA = f8 + f9 * a7;
				if (" " === pG[fA]) return [this.a2I(pG.substring(0, fA)), this.a2J(pG.substring(fA))]
			}
		return [pG.substring(0, f8), pG.substring(f8)]
	}, this.a2J = function(pG) {
		for (var ep = pG.length, a7 = 0; a7 < ep; a7++)
			if (" " !== pG[a7]) return pG.substring(a7);
		return pG
	}, this.a2I = function(pG) {
		for (var a7 = pG.length - 1; 0 <= a7; a7--)
			if (" " !== pG[a7]) return pG.substring(0, a7 + 1);
		return pG
	}, this.a2K = function(pG, a2L) {
		return pG.split("(")[0] + "(🧈 " + a2L.toFixed(2) + ")"
	}, this.startsWith = function(pG, a2M) {
		return pG.substring(0, a2M.length) === a2M
	}, this.a1c = function(pG, a2M) {
		var ep = pG.length;
		return pG.substring(ep - a2M.length, ep) === a2M
	}, this.a2N = function(g, a2O, a2P) {
		var pG = "",
			ep = g.length - 1;
		a2P = a2P || "";
		for (var a7 = 0; a7 < ep; a7++) pG += a2P + g[a7] + a2P + ",", (a7 + 1) % a2O == 0 && (pG += "\n");
		return pG += a2P + g[ep] + a2P
	}, this.a2Q = function(pG, hg, hh) {
		return pG.replace(new RegExp(hg, "g"), hh)
	}
}

function a2R() {
	this.j0 = function(player, eb) {
		aE.wI(player, bJ.ex(eb), bJ.ez(eb)) && (bc.de = !0), a9.kG && this.il()
	}, this.il = function() {
		a9.hB = !1;
		for (var a7 = 0; a7 < a9.ju; a7++) 0 !== ac.ll[a7] && 0 === ac.gd[a7] && aE.wO(a7);
		0 !== ac.ll[a9.eZ] ? (ba.lh[7] = ac.gd[a9.eZ], ba.lh[8] = ac.gr[a9.eZ], aN.a2S(), aS.a2T(), a9.gz || aD.m6(ac.iQ[a9.eZ] - 5, ac.iS[a9.eZ] - 5, ac.iR[a9.eZ] + 5, ac.iT[a9.eZ] + 5), ap.dW()) : aT.show(!1, !1, !1, !0), aJ.a2U(18), ab.a2V(),
			ab.lX(!0), bM.s.a2W(), aH.qt(), a9.or = null, bY.a2X = !0, bY.a2Y(), a9.kG && u.v.setState(1)
	}
}

function bw() {
	this.em = 512, this.a1l = 15e8, this.a2Z = 1e9, this.a1v = 5e4, this.a2a = 512, this.g9 = 2, this.eZ = 0, this.ju = 0, this.yI = 0, this.kI = 0, this.yH = 0, this.vT = 512, this.vY = 512, this.k1 = 150, this.kG = !0, this.gz = 0, this.yF = 0,
		this.je = 0, this.mG = !1, this.hB = 0, this.a2b = 0, this.ix = !1, this.va = 0, this.vb = 0, this.kE = 0, this.wj = 0, this.or = null, this.yX = new wc, this.a2c = 30, this.yC = 0, this.yK = 0, this.yW = 0, this.data = new a2d, this.a2e =
		new a2f, this.a2g = 0, this.a2h = function() {
			this.yI = this.ju = this.data.humanCount, this.kG = 1 === this.yI && !__fx.customLobby.isActive(), this.mG = !1, this.gz = this.data.isReplay, this.kE = 0 === this.data.gameMode ? [7, 10, 8][this.data.battleRoyaleMode] : this.data
				.isZombieMode ? 9 : this.data.numberTeams - 2, this.wj = this.data.isContest, this.ix = this.kE < 7 || 9 === this.kE, this.kE = 10 === this.kE && this.kG ? 7 : this.kE, this.kE = 8 === this.kE && 2 !== this.ju ? 7 : this.kE, aw.dW(),
				this.va = this.data.numberTeams, this.data.teamPlayerCount ? this.vb = +(0 < this.data.teamPlayerCount[0]) : (this.vb = 0, this.ix && this.kG && (this.data.teamPlayerCount = new Uint16Array(9), this.data.teamPlayerCount.fill(1, 1,
					this.va + 1), a9.a2e.a2i())), this.a2c = this.ju <= 2 ? 30 : this.ju <= 50 ? 40 : 50, this.a2b = this.hB = __fx.customLobby.isActive() ? __fx.customLobby.gameInfo.spawnSelection : this.data.selectableSpawn, this.or = this.hB ?
				new a2R : null, this.vT = __fx.customLobby.isActive() ? Math.max(Math.min(__fx.customLobby.gameInfo.botCount, this.data.playerCount), this.ju) : this.data.playerCount,
				this.vY = this.vT, this.kI = this.vT - this.ju, this.yH = 0, this.eZ = this.data.selectedPlayer, this.yC = 0, this.yK = 0, this.yW = 0, av.a2j(this.data.spawningSeed), aa.dW(), ac.dW(), ae.a2k(), b5.nt.oc = [], bd.dW(), this.yF = 1,
				__fx.donationsTracker.reset(), __fx.leaderboardFilter.reset(), __fx.customLobby.isActive() && __fx.customLobby.hideWindow(), ba.dW(), a2l(), aY.dX(), ak.a2m(), bY.dW(), aY.dW(), an.dW(), bJ.dW(), bK.dW(), aj.dW(), bO.dW(), bS.a2n(),
				aA.dW(), ae.a3(), aE.dW(), aF.dW(), ah.a2o(), b6.dW(), be.dW(), bM.dW(), bb.dW(), a2p.putImageData(a2q, 0, 0), aR.dW(), aO.dW(), aN.dW(), b9.dW(), ar.dW(), aQ.dW(), aS.dW(), aI.dW(), aM.dW(), aJ.dW(), aL.dW(), aH.dW(), aT.dW(), aB
				.dW(), aC.dW(), fr(), aZ.dW(), ab.dW(), b1.dW(), b2.dW(), ay.dW(), this.yX.dW(), bc.a2n(), aD.m5(), 0 === ac.ll[a9.eZ] && aT.show(!1, !0), ab.lX(!0), ap.dW(), bc.de = !0, this.gz || this.kG && this.hB || u.v.setState(1), this.a2g = 0
		}, this.zg = function(a2s) {
			a9.gz || b6.op.a2t.length || (b6.op.a2t = b6.a2u.xj()),
				__fx.customLobby.isActive() === false && ax.s.a2v(),
				this.yF = 0, bc.a2w(), u.v.setState(0), a2s || bR.eA.show(), aW.setState(0);
			if (__fx.customLobby.isActive()) __fx.customLobby.rejoinLobby();
			else this.a2g ? n.o(19) : n.o(5, 5)
		}, this.a2x = function() {
			return this.gz ? aI.h0 || !b9.a2y : this.kG && (aI.h0 || this.hB)
		}, this.a2z = function() {
			return 1 === this.yF && !this.hB
		}
}

function a2d() {
	this.mapType = 0, this.mapProceduralIndex = 2, this.mapRealisticIndex = 0, this.mapSeed = 14071, this.mapName = "", this.canvas = null, this.passableWater = 1, this.passableMountains = 1, this.playerCount = 512, this.humanCount = 1, this
		.selectedPlayer = 0, this.gameMode = 0, this.playerMode = 0, this.battleRoyaleMode = 0, this.numberTeams = 0, this.isZombieMode = 0, this.isContest = 0, this.isReplay = 0, this.elo = null, this.colorsType = 0, this.colorsPersonalized = 1,
		this.colorsData = null, this.selectableColor = 1, this.teamPlayerCount = null, this.neutralBots = 0, this.botDifficultyType = 0, this.botDifficultyValue = 0, this.botDifficultyTeam = null, this.botDifficultyData = null, this.spawningType = 0,
		this.spawningSeed = 0, this.spawningData = null, this.selectableSpawn = 1, this.playerNamesType = 0, this.playerNamesData = null, this.selectableName = 1, this.aIncomeType = 0, this.aIncomeValue = 0, this.aIncomeData = null, this
		.tIncomeType = 0, this.tIncomeValue = 32, this.tIncomeData = null, this.iIncomeType = 0, this.iIncomeValue = 64, this.iIncomeData = null, this.sResourcesType = 0, this.sResourcesValue = 0, this.sResourcesData = null
}

function a2f() {
	this.a2i = function() {
		var a30 = a9.data;
		b7.pj.a13(a30.teamPlayerCount, a30.playerCount), a30.numberTeams = b7.pj.a0u(a30.teamPlayerCount, 0), a30.teamPlayerCount[0] && a30.teamPlayerCount[7] && (a30.teamPlayerCount[7] = 0, this.a2i())
	}, this.a31 = function() {
		var a30 = a9.data;
		a30.mapType < 2 ? bP.a3(bP.a32(a30), a30.mapSeed) : bP.a33(a30.canvas)
	}, this.a34 = function() {
		var a30 = a9.data;
		a30.colorsData || (a30.colorsData = new Uint32Array(1)), a30.selectableColor && (a30.colorsData[0] = bg.s.ty()), a30.selectableName && (a30.playerNamesData || (a30.playerNamesData = new Array(1)), a30.playerNamesData[0] = bg.dr.data[122]
			.value)
	}, this.a35 = function() {
		a9.data = new a2d, a9.data.aIncomeType = 2, a9.data.aIncomeData = new Uint8Array(a9.em), a9.data.aIncomeData[0] = 64
	}
}

function dO() {
	this.xH = 0, this.gap = 0, this.a1S = 0, this.ph = 0, this.dW = function() {
		this.resize()
	}, this.resize = function() {
		this.xH = .0022 * b7.pZ.pa(.5) * au.pb, this.a1S = this.xH / au.pf, this.gap = Math.max(Math.floor((u.v.sU() ? .0114 : .01296) * au.pb), 2), this.ph = this.gap / au.pf
	}
}

function dN() {
	this.a36 = function() {
		return u.v.sU() ? 2 : 1
	}
}

function c7() {
	var qA, ew, ey, a37, a38, a39, eO, player, a3A, gap, zoom, oV, a3B;

	function a3L(player) {
		for (var a7 = oV.length - 1; 0 <= a7; a7--)
			if (oV[a7] === player) return 1
	}

	function a3J(a3G) {
		var a7, ep;
		if (-1 !== a3G)
			for (ep = qA.length, a7 = 0; a7 < ep; a7++)
				if (qA[a7].wp && qA[a7].ew + 1 === a3G % 4 && qA[a7].ey + 1 === a3G >> 2) return a7;
		return -1
	}

	function a3H(l0, l1) {
		var rx = gap / 2;
		return l0 < ew - a37 - 3 * rx || ew + 3 * a37 + 5 * rx < l0 || l1 < ey - a37 - 3 * rx || ey + 2 * a37 + 3 * rx < l1 ? -1 : 4 * (l1 < ey - rx ? 0 : l1 < ey + a37 + rx ? 1 : 2) + (l0 < ew - rx ? 0 : l0 < ew + a37 + rx ? 1 : l0 < ew + 2 * a37 +
			3 * rx ? 2 : 3)
	}
	this.a3C = function() {
		var a7, f9, a3F = [b8.nB, b8.nN, b8.ml, b8.ne, b8.nX];
		for (qA = new Array(9), a7 = 0; a7 < 9; a7++) qA[a7] = {
			id: a7,
			wp: !1,
			kh: 0,
			canvas: [],
			ew: 0,
			ey: 0
		};
		for (qA[0].colors = [0, 1, 2, 3], qA[0].ew = 0, qA[0].ey = 0, qA[1].colors = [0, 1, 4], qA[1].ew = 1, qA[1].ey = 0, qA[2].colors = [0, 2], qA[2].ew = -1, qA[2].ey = 0, qA[3].colors = [0], qA[3].ew = 0, qA[3].ey = 0, qA[4].colors = [0, 2],
			qA[4].ew = 1, qA[4].ey = 1, qA[5].colors = [3], qA[5].ew = 0, qA[5].ey = -1, qA[6].id = 20, qA[6].colors = [0], qA[6].ew = 1, qA[6].ey = -1, qA[7].id = 21, qA[7].colors = [0], qA[7].ew = 0, qA[7].ey = 1, qA[8].id = 16, qA[8]
			.colors = [0], qA[8].ew = 0, qA[8].ey = 0, a7 = 0; a7 < 9; a7++)
			for (f9 = 0; f9 < qA[a7].colors.length; f9++) qA[a7].canvas.push(function(id, a16) {
				if (id < 20) return b7.canvas.x3(aX.get(3), id, a16);
				var a16 = aX.get(3).height,
					a17 = b7.pZ.uk(a16, a16),
					hY = b7.pZ.getContext(a17);
				20 === id ? hY.drawImage(aX.get(18), 0, 0) : 21 === id && af.uv.xI(af.wm.x7 + af.wm.xO, hY, 0, 0, a16);
				return a17
			}(qA[a7].id, a3F[qA[a7].colors[f9]]))
	}, this.a3E = function() {
		return qA
	}, this.dW = function() {
		oV = [], ew = ey = eO = 0, a38 = a39 = -1e3, this.resize()
	}, this.resize = function() {
		a37 = Math.floor((u.v.sU() ? .075 : .0468) * au.pb), zoom = a37 / aX.get(3).height, gap = Math.floor(a37 / 3)
	}, this.a09 = function(l0, l1) {
		return !!this.wp() && (bc.de = !0, !!af.uv.h3(l0, l1, player) || (l0 = function(l0, l1) {
			a39 = a38 = -1e3;
			var a3I = a3J(a3H(l0, l1));
			if (-1 === a3I) return 0;
			if (1 !== qA[a3I].colors[qA[a3I].kh])
				if (5 === a3I) {
					if (! function() {
							var dm = performance.now();
							a3B + 4e3 < dm && (oV = []);
							a3B = dm
						}(), a3L(player)) return 1;
					oV.push(player), 16 < oV.length && oV.shift()
				} else if (6 === a3I) {
				for (var a7 = oV.length - 1; 0 <= a7; a7--) 0 === ac.ll[oV[a7]] && oV.splice(a7, 1);
				0 < oV.length && (b2.a3M(1, oV, !0) && b5.gB.oU(oV, player), oV = [])
			} else if (2 === a3I) b5.hC.nz(aN.hH(), player);
			else if (3 === a3I) a9.hB && b5.hC.hD(a3A);
			else if (0 === a3I)
				if (0 === qA[0].kh) {
					if (a9.a2b && aS.a3N() < 350) return 1;
					b5.hC.hN(aN.hH(), player)
				} else ay.hP(player, aN.hH());
			else if (1 === a3I) bS.a3O(), b5.hC.hL(aN.hH(), a3A);
			else {
				if (7 === a3I) return bS.a3P(), af.uv.show(l0, l1), 2;
				if (4 === a3I) b2.a3M(0, [player], !0) && b5.gB.oR(player);
				else {
					if (8 !== a3I) return 0;
					b5.hC.hG(aN.hH(), a3A, player)
				}
			}
			return 1
		}(l0, l1), this.qt(), 2 === l0 && (af.uv.wp = !0), 0 < l0))
	}, this.a0B = function(l0, l1) {
		this.wp() || (a38 = l0, a39 = l1, eO = performance.now())
	}, __fx.hoveringTooltip.display = function(mouseX, mouseY) {
		var coordX = bJ.h7(mouseX),
			coordY = bJ.h9(mouseY),
			coord = bJ.fD(coordX, coordY),
			point = bJ.ef(coord);
		if (coordX < 0 || coordY < 0) return;
		(function(l0, l1, eT) {
			aY.ek(eT) || -1 === (l0 = bK.hJ.a3d(l0, l1)) ? aJ.a3c(eT) : aJ.a3e(l0)
		}(mouseX, mouseY, point))
	}
	this.click = function(l0, l1, a0I) {
		var h6 = bJ.h7(l0),
			h8 = bJ.h9(l1),
			eb = bJ.fD(h6, h8),
			eT = bJ.ef(eb);
		if (!bJ.hA(h6, h8)) return !1;
		h6 = (u.v.sU() ? .025 : .0144) * au.pb, h8 = performance.now();
		if (Math.abs(l0 - a38) > h6 || Math.abs(l1 - a39) > h6 || eO + 500 < h8) return !1;
		if (eO = h8, a0I && ! function(l0, l1, eT) {
				aY.ek(eT) || -1 === (l0 = bK.hJ.a3d(l0, l1)) ? aJ.a3c(eT) : aJ.a3e(l0)
			}(l0, l1, eT), aI.h0 || this.wp() || !b7.gB.h2(a9.eZ) || a9.gz) return this.qt(), !1;
		if (a9.hB) {
			if (!a0I) {
				if (!aY.ek(eT)) return !1;
				a3A = eb, qA[3].wp = !0
			}
		} else if (bK.hJ.o4(eb)) a0I ? aJ.a3V(55, 0) : bK.a3T.a3U = -1;
		else {
			if (a0I) return !1;
			bK.hJ.a3W(l0, l1) || (2 === a9.yF ? aY.gP(eT) && (player = aY.eh(eT), aY.y8(player)) && (qA[0].wp = !0, qA[0].kh = 1, qA[7].wp = !0) : aY.eu(eT) ? (a3A = ai.eQ.eS(eT)) && (h6 = bJ.ef(a3A), qA[8].wp = !0, player = aY.eg(h6) ? a9.em :
				aY.eh(h6)) : (a3A = eb, bK.hJ.hK(a9.eZ, eb) && (qA[0].wp = !0, qA[0].kh = 1, qA[1].wp = !0, qA[1].kh = bL.fR[2] ? 0 : 2), aY.hI(eT) || (aY.eg(eT) ? (player = a9.em, hM(a9.eZ) ? (qA[0].wp = !0, qA[0].kh = 0) : hO(a9.eZ,
				player) && (qA[0].wp = !0, qA[0].kh = 3)) : (player = aY.eh(eT)) === a9.eZ ? (qA[0].wp = !0, qA[0].kh = 1, qA[7].wp = !0) : (qA[0].kh = 1, qA[5].wp = function(player) {
				return aY.y8(player) && !a3L(player) && b2.a3M(1, [player], !1)
			}(player), qA[7].wp = aY.y8(player), ei(player, a9.eZ) ? (qA[4].wp = aY.y8(player) && !ab.a3Y(player) && b2.a3M(0, [player], !1), qA[6].wp = function(player) {
				if (0 === oV.length) return !1;
				if (performance.now() > a3B + 4e3) return !(oV = []);
				return !a3L(player) && ! function(player) {
					var a7;
					if (a9.ix)
						for (a7 = oV.length - 1; 0 <= a7; a7--)
							if (!ei(player, oV[a7])) return 1;
					return
				}(player)
			}(player), hQ(a9.eZ, player) ? (qA[0].kh = 0, qA[0].wp = !0) : hO(a9.eZ, player) && (qA[0].kh = 3, qA[0].wp = !0), qA[0].wp = this.a3a()) : (qA[2].wp = !0, qA[0].wp = !0)))))
		}
		return this.a3S(l0, l1)
	}, this.a3S = function(l0, l1) {
		return ew = l0 - Math.floor(a37 / 2), ey = l1 - Math.floor(a37 / 2), !!this.wp()
	}, this.zp = function(l0, l1) {
		return !!this.wp() && (af.uv.wp ? !af.uv.xG(l0, l1) && (af.uv.wp = !1, bc.de = !0) : function(rD, l0, l1) {
			l0 = a3H(l0, l1);
			if (0 <= a3J(l0)) return !1;
			if ((1 === l0 || 6 === l0) && 0 <= a3J(2)) return !1;
			if ((6 === l0 || 9 === l0) && 0 <= a3J(10)) return !1;
			return rD.qt(), bc.de = !0
		}(this, l0, l1))
	}, this.qt = function() {
		for (var a7 = qA.length - 1; 0 <= a7; a7--) qA[a7].wp = !1, qA[a7].kh = 0;
		af.uv.wp = !1
	}, this.wp = function() {
		return this.a3a() || af.uv.wp
	}, this.a3a = function() {
		for (var ep = qA.length, a7 = 0; a7 < ep; a7++)
			if (qA[a7].wp) return !0;
		return !1
	}, this.t9 = function() {
		if (this.wp())
			if (af.uv.wp) af.uv.t9();
			else {
				var a7, hY = tA,
					f9 = qA,
					ep = f9.length,
					a3i = (a37 + gap) / zoom;
				for (hY.imageSmoothingEnabled = !0, hY.setTransform(zoom, 0, 0, zoom, ew, ey), a7 = 0; a7 < ep; a7++) f9[a7].wp && tA.drawImage(f9[a7].canvas[f9[a7].kh], f9[a7].ew * a3i, f9[a7].ey * a3i);
				hY.imageSmoothingEnabled = !1, hY.setTransform(1, 0, 0, 1, 0, 0)
			}
	}
}

function c8() {
	var jO, canvas, a3j, a3k, a3l, a3m = -1;

	function a3n() {
		var a3o, wW = canvas.getContext("2d", {
			alpha: !0
		});
		wW.clearRect(0, 0, jO, jO), wW.fillStyle = b8.mj, wW.fillRect(0, 0, jO, jO), 0 === a3k && (wW.fillStyle = b8.mo, wW.fillRect(0, 0, jO, jO)), wW.fillStyle = b8.mn, wW.fillRect(0, 0, jO, 1), wW.fillRect(0, 0, 1, jO), wW.fillRect(0, jO - 1, jO,
				1), wW.fillRect(jO - 1, 0, 1, jO), a3o = .9 * jO / aX.get(0).width, wW.imageSmoothingEnabled = !0, wW.setTransform(a3o, 0, 0, a3o, Math.floor((jO - a3o * aX.get(0).width) / 2), Math.floor((jO - a3o * aX.get(0).height) / 2)), wW
			.drawImage(aX.get(0), 0, 0), wW.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a3q(l0, l1) {
		if (!aI.h0) return l0 <= jO + bZ.gap && l1 >= aN.ey ? 9 : -1;
		if (l0 <= 4 * jO + bZ.gap) {
			if (l1 >= aN.ey) return 0;
			if (l1 >= aN.ey - jO - a3l * bZ.gap) return 2
		} else if (l0 <= 7 * jO + bZ.gap && l1 >= aN.ey - jO - a3l * bZ.gap) return 1;
		return -1
	}
	this.h0 = !1, this.dW = function() {
		a3k = -1, this.h0 = !1, a3l = u.v.sU() ? 1.2 : .6, this.resize()
	}, this.resize = function() {
		jO = aN.jO, (canvas = document.createElement("canvas")).width = jO, canvas.height = jO, a3j = b7.pZ.ri(1, (u.v.sU() ? .5 : .45) * jO), a3n()
	}, this.a0Q = function() {
		this.h0 = !this.h0, this.h0 ? (bR.e8.hideCMPButton(), b9.a0P(!1), a9.gz && b9.a2y && b9.a0R(!0), this.a3p()) : (a3k = -1, a3n(), !a9.kG || 1 !== a9.yF || a9.hB || a9.gz || u.v.setState(1)), bc.de = !0
	}, this.a3p = function() {
		(a9.kG || a9.gz) && 1 === a9.yF && (aR.lX(!0), a9.hB || setTimeout(function() {
			bY.yQ()
		}, 0), u.v.setState(0))
	}, this.h3 = function(l0, l1) {
		return 0 <= (a3m = a3q(l0, l1)) || !aI.h0 || a9.kG || a9.gz || bb.wp || aI.a0Q(), a3m
	}, this.zp = function(l0, l1) {
		l0 = a3q(l0, l1);
		l0 !== a3k && (a3k = l0, this.h0 || a3n(), bc.de = !0)
	}, this.zq = function(l0, l1) {
		l0 = a3q(l0, l1);
		return -1 !== l0 && a3m === l0 && (this.h0 ? a9.mG ? (0 <= l0 && b9.a0P(!1), !a9.gz) : (0 === l0 ? a9.zg() : 1 === l0 ? this.a0Q() : 2 === l0 && n.o(1, 0), !0) : 9 === l0 && (this.a0Q(), !0))
	}, this.t9 = function() {
		var a1;
		this.h0 ? (a1 = Math.floor(5.5 * jO), tA.setTransform(1, 0, 0, 1, bZ.gap, aN.ey), tA.fillStyle = b8.mj, tA.fillRect(0, 0, a1, jO), 0 === a3k ? (tA.fillStyle = b8.mo, tA.fillRect(0, 0, 4 * jO, jO)) : 1 === a3k && (tA.fillStyle = b8.mo, tA
				.fillRect(4 * jO, 0, Math.floor(1.5 * jO), jO)), tA.fillStyle = b8.mn, tA.fillRect(0, 0, a1, 1), tA.fillRect(0, 0, 1, jO), tA.fillRect(4 * jO, 0, 1, jO), tA.fillRect(0, jO - 1, a1, 1), tA.fillRect(a1 - 1, 0, 1, jO), tA.font =
			a3j, b7.pZ.textBaseline(tA, 1), b7.pZ.textAlign(tA, 1), tA.fillText(L(27), 2 * jO, .54 * jO), a1 = .4 * jO, aI.a3v(bZ.gap + 4 * jO + (1.5 * jO - a1) / 2, aN.ey + .3 * jO, a1), a1 = 1, tA.setTransform(1, 0, 0, 1, bZ.gap, aN.ey -
				a1 * a3l * bZ.gap - a1 * jO), tA.fillStyle = b8.mj, tA.fillRect(0, 0, 4 * jO, jO), a3k === a1 + 1 && (tA.fillStyle = b8.mo, tA.fillRect(0, 0, 4 * jO, jO)), tA.fillStyle = b8.mn, tA.fillRect(0, 0, 4 * jO, 1), tA.fillRect(0, 0,
				1, jO), tA.fillRect(4 * jO, 0, 1, jO), tA.fillRect(0, jO - 1, 4 * jO, 1), tA.fillText(L(0 === a1 ? 27 : 28), 2 * jO, .54 * jO), tA.setTransform(1, 0, 0, 1, 0, 0)) : tA.drawImage(canvas, bZ.gap, aN.ey)
	}, this.a3u = function(player) {
		return 0 !== ac.ll[player] && 2 !== a9.yF && aY.y8(player)
	}, this.a3v = function(ew, ey, ep) {
		tA.setTransform(1, 0, 0, 1, ew, ey), tA.lineWidth = bZ.xH, tA.strokeStyle = b8.mn, tA.beginPath(), tA.moveTo(0, 0), tA.lineTo(ep, ep), tA.moveTo(0, ep), tA.lineTo(ep, 0), tA.stroke()
	}
}

function c9() {
	var a3x, jO, a3y, a3z, a40, a41, a42, a43, a44;

	function wS() {
		return aN.a4M(aJ.a4I()) ? ar.wp ? aN.ey - aN.jO - 2 * a3y : aN.ey - a3y : b9.a4M(aJ.a4L()) ? ar.wp ? b9.wS() - aN.jO - 2 * a3y : b9.wS() - a3y : ar.wp ? au.jO - aN.jO - (bh.a36() + 1) * a3y : au.jO - bh.a36() * bZ.gap
	}

	function a49(dm, pG, id, gN, a4C, a4D, v3, a4E, a4F, a4G) {
		var a7, wW, a17, pR, g, a4R = void 0 !== a4F,
			a1 = Math.floor(aM.measureText(pG, aJ.a3j) + 1.5 * a3z + (a4R ? jO : 1.5 * a3z));
		if (bc.de = !0, a1 + a3y > au.a1 && !a4R && 50 !== id && 20 < pG.length) a49(dm, (g = b7.z3.a2H(pG))[0], id, gN, a4C, a4D, v3, a4E, a4F, a4G), a49(dm, g[1], id, gN, a4C, a4D, v3, a4E, a4F, a4G);
		else if (g = a1 + (50 === id ? a40 : 0), (a17 = document.createElement("canvas")).width = a1, a17.height = jO, (wW = a17.getContext("2d", {
				alpha: !0
			})).font = aJ.a3j, b7.pZ.textBaseline(wW, 1), b7.pZ.textAlign(wW, 0), wW.clearRect(0, 0, a1, jO), wW.fillStyle = a4D, wW.fillRect(0, 0, a1, jO), wW.fillStyle = a4C, wW.fillText(pG, Math.floor(1.5 * a3z), Math.floor(jO / 2)), a4R && (wW
				.imageSmoothingEnabled = !0, af.uv.xI(a4F, wW, a1 - jO, 0, jO)), 0 === (pR = {
				eO: dm,
				pG: pG,
				id: id,
				player: gN,
				canvas: a17,
				a4C: a4C,
				a4D: a4D,
				a1: a1,
				a4J: g,
				v3: v3,
				a4E: a4E,
				a4F: a4F,
				a4G: a4G
			}).eO || 0 < a3x.length && 0 < a3x[0].eO) a3x.unshift(pR);
		else {
			for (a7 = 1; a7 < a3x.length; a7++)
				if (0 < a3x[a7].eO) return void a3x.splice(a7, 0, pR);
			a3x.push(pR)
		}
	}

	function a4A(e1, rx, f9) {
		return "rgb(" + e1 + "," + rx + "," + f9 + ")"
	}

	function a4S(id, gI) {
		for (var ep = a3x.length, a7 = 0; a7 < ep; a7++) a3x[a7].id === id && gI-- <= 0 && (a3x.splice(a7, 1), a7--, ep--)
	}

	function a4U(id, player) {
		for (var f3 = !1, a7 = a3x.length - 1; 0 <= a7; a7--) a3x[a7].id !== id || player !== a9.em && a3x[a7].player !== player || (a3x.splice(a7, 1), f3 = !0);
		return f3
	}

	function a4r(pG) {
		a49(340, pG, 6, 0, a4A(215, 245, 255), b8.mk, -1, !1)
	}
	this.a45 = "", this.dW = function() {
		var self;
		a43 = 0, a42 = u.v.sU() ? 7 : 12, a41 = {
			y6: [0, 0, 0],
			a46: [0, 0, 0],
			m3: [220, 180, 180],
			t8: [0, 0, 0],
			fA: [0, 0, 0]
		}, a3x = [], this.resize(), a9.hB && this.yR(0, 18), bP.ui.uj[bP.eV].name.length && a4r(L(75, [bP.ui.uj[bP.eV].name])), a4r(L(76, [bP.f0 - 2 + "x" + (bP.f1 - 2)])), a4r(L(77, [ak.a4s])), ak.a4s !== ak.a4t && a4r(L(78, [ak.a4t + " (" +
			b7.z3.a2E(100 * ak.a4t / ak.a4s, 1) + ")"
		])), 0 < ak.a4u && a4r(L(51, [ak.a4u + " (" + b7.z3.a2E(100 * ak.a4u / ak.a4s, 1) + ")"])), 0 < ak.a4v && a4r(L(79, [ak.a4v + " (" + b7.z3.a2E(100 * ak.a4v / ak.a4s, 1) + ")"])), 10 === a9.kE && a49(120, L(80), 6, 0, a4A(235, 255,
			120), b8.mk, -1, !1), 0 !== (self = this).a45.length && (a49(200, self.a45, 0, 0, b8.mn, b8.mk, -1, !1), self.a45 = ""), a9.wj && a49(340, L(29), 6, 0, a4A(255, 200, 0), b8.mk, -1, !1)
	}, this.resize = function() {
		var a4B, a7;
		if (jO = (jO = Math.floor((u.v.sU() ? .031 : .0249) * au.pb)) < 10 ? 10 : jO, this.fontSize = Math.floor(2 * jO / 3), this.a3j = b7.pZ.ri(1, this.fontSize), a3y = bZ.gap, a3z = Math.floor(jO / 5), 0 < a3x.length)
			for (a4B = a3x, a3x = [], a7 = a4B.length - 1; 0 <= a7; a7--) a49(a4B[a7].eO, a4B[a7].pG, a4B[a7].id, a4B[a7].player, a4B[a7].a4C, a4B[a7].a4D, a4B[a7].v3, a4B[a7].a4E, a4B[a7].a4F, a4B[a7].a4G);
		this.a4H()
	}, this.a4H = function() {
		a44 = document.createElement("canvas");
		var pG = L(30),
			wW = (a40 = aM.measureText(pG, this.a3j) + 5 * a3z, a44.height = jO, a44.width = a40, a44.getContext("2d", {
				alpha: !0
			}));
		wW.font = this.a3j, b7.pZ.textBaseline(wW, 1), b7.pZ.textAlign(wW, 1), wW.clearRect(0, 0, a40, jO), wW.fillStyle = b8.n8, wW.fillRect(0, 0, a40, jO), wW.fillStyle = b8.mn, wW.fillText(pG, Math.floor(a40 / 2), Math.floor(jO / 2))
	}, this.a4I = function() {
		var ep;
		return ar.wp ? ar.a1 : 0 === (ep = a3x.length) ? 0 : 1 === ep ? a3x[0].a4J : a4K(a3x[0].a4J, a3x[1].a4J)
	}, this.a4L = function() {
		var ep = a3x.length;
		return ar.wp ? ep ? a4K(ar.a1, a3x[0].a4J) : ar.a1 : 0 === ep ? 0 : 1 === ep ? a3x[0].a4J : 2 === ep ? a4K(a3x[0].a4J, a3x[1].a4J) : a4K(a4K(a3x[0].a4J, a3x[1].a4J), a3x[2].a4J)
	}, this.h3 = function(ew, ey) {
		for (var mD, a4N, a4O = wS(), a7 = a3x.length - 1; 0 <= a7; a7--)
			if ((a4N = a4O - (a7 + 1) * jO) <= ey && ey < a4N + jO) return 50 === a3x[a7].id ? ew >= au.a1 - a40 - a3y - a3x[a7].a1 && (ew >= au.a1 - a40 - a3y ? b5.gB.oR(a3x[a7].player) : aD.m7(a3x[a7].player, 800, !1, 0), !0) : ew >= au.a1 -
				a3x[a7].a1 - a3y && (736 === a3x[a7].id ? (a4N = a3x[a7].pG.split(" "), window.open(a4N[a4N.length - 1], "_blank")) : a3x[a7].a4E && (a3x[a7].a4G && a3x[a7].a4G.f8 ? (a4N = a3x[a7].a4G.eb, mD = bJ.ex(a4N) - 10, a4N = bJ.ez(
					a4N) - 10, aD.m6(mD, a4N, 19 + mD, 19 + a4N)) : a3x[a7].a4G && a3x[a7].a4G.f9 ? aD.m8(a3x[a7].player, a3x[a7].a4G.m9) : (aD.m7(a3x[a7].player, 800, !1, 0), 0 <= a3x[a7].v3 && (mD = a3x[a7].v3, a3x[a7].v3 = a3x[a7]
					.player, a3x[a7].player = mD))), !0);
		return !1
	}, this.yd = function(dm, pG, id, gN, a4C, a4D, v3, a4E, a4F, a4G) {
		a49(dm, pG, id, gN, a4C, a4D, v3, a4E, a4F, a4G)
	}, this.a4Q = function(k) {
		a49(300, k, 252, 0, b8.mn, b8.mk, -1, !1)
	}, this.a2U = function(id) {
		for (var a7 = a3x.length - 1; 0 <= a7; a7--) a3x[a7].id === id && (a3x[a7].eO = 1)
	}, this.yR = function(player, id) {
		0 === id ? (aM.j0(player, 0), a4S(423, 0), a49(160, L(31, [ac.a4T[player]]), 423, player, "rgb(10,220,10)", b8.mk, -1, !1)) : 1 === id ? (a4U(50, a9.em), aM.j0(player, 1), a49(360, L(32, [ac.a4T[player]]), 0, player, b8.nP, b8.mk, -1, !
			0), aD.m7(player, 2700, !1, 0)) : 2 === id ? (aM.j0(player, 2), a49(0, L(33), 0, player, "rgb(10,255,255)", b8.mk, -1, !0), aD.m7(player, 2700, !1, 0)) : 3 === id ? (aM.j0(player, 2), a49(0, L(34, [ac.a4T[player]]), 0, player, b8
			.mn, b8.mk, -1, !0), aD.m7(player, 2700, !1, 0)) : 4 === id ? this.a4V(1, player, player) : 5 === id ? 2 !== ac.a1d[player] && aY.y8(a9.eZ) && (function(id, lg) {
			var a7, a4g = 0,
				ep = a3x.length;
			for (a7 = 0; a7 < ep; a7++)
				if (a3x[a7].id === id && lg <= ++a4g) return a3x.splice(a7, 1)
		}(1, 5), ab.a4X(player) ? a49(180, L(35, [ac.a4T[player]]), 1, player, a4A(255, 200, 180), b8.mk, -1, !0) : (a4S(573, 0), a49(180, L(36, [ac.a4T[player]]), 573, player, b8.nP, b8.mk, -1, !0))) : 18 === id ? a49(255, L(37), 18, 0, b8
			.mn, b8.mk, -1, !1) : 21 === id ? a49(220, L(38), id, 0, b8.mn, b8.mk, -1, !1) : 22 === id ? this.a4V(2, player, player) : 59 === id && a49(0, L(39), id, 0, b8.nd, b8.mk, 0, !1)
	}, this.zZ = function(k) {
		a49(200, L(40, [k]), 94, 0, b8.mn, b8.nL, -1, !1)
	}, this.yY = function(a4Y) {
		if (a9.eZ === a4Y && !a9.kG)
			__fx.wins.count++, window.localStorage.setItem("fx_winCount", __fx.wins.count),
			a49(0, "Your Win Count is now " + __fx.wins.count, 3, a4Y, b8.mn, b8.mk, -1, !0);
		ac.gd[a4Y] && (aM.j0(a4Y, 2), a9.ju < 100 ? a49(0, L(34, [ac.a4T[a4Y]]), 3, a4Y, b8.mn, b8.mk, -1, !0) : a49(0, L(41, [ac.a4T[a4Y]]), 3, a4Y, b8.mn, b8.mk, -1, !0))
	}, this.a3c = function(eT) {
		var a4a, pG, a4Z = "(" + bJ.ex(eT >> 2) + ", " + bJ.ez(eT >> 2) + ")",
			a4E = !1,
			player = 0;
		aY.ek(eT) ? aY.eg(eT) ? a4Z = L(42, [a4Z]) : (player = aY.eh(eT), pG = L(43, [b7.wW.a1J(ac.z5[player], b7.pZ.ri(0, 10), 150)]) + "   ", pG = (pG += L(44, [b7.z3.xY(ac.gr[player])]) + "   ") + L(45, [b7.z3.xY(ac.gd[player])]) + "   ", a9
				.ix && (a4a = bd.yb[bd.kK[bd.en[player]]], pG += L(46) + ": " + a4a + "   "), b7.gB.jI(player) && (pG += L(47) + ": " + aA.k8[aA.j4[player]] + "   "), a4Z = pG = (pG += L(48, [player]) + "   ") + L(49, [a4Z]), a4E = !0) : a4Z = aY
			.eu(eT) ? L(50, [a4Z]) + "   #" + aY.eX(eT) : L(51, [a4Z]), bc.de = !0, a4S(55, 0), a49(220, a4Z, 55, player, b8.mn, b8.mk, -1, a4E)
	}, this.a3e = function(a4b) {
		var kf = bK.s,
			player = kf.a4c[a4b] >> 3,
			pG = (bc.de = !0, a4S(55, 0), L(52, [ac.a4T[player]]) + "   ");
		a49(220, pG += L(44, [kf.a4d[a4b]]), 55, player, b8.mn, b8.mk, -1, !0)
	}, this.o9 = function(nw, a4e, oA) {
		nw === a9.eZ ? a49(175, " " + L(53, [ac.a4T[a4e]]) + ": ", 1001, a4e, a4A(200, 255, 210), b8.mk, -1, !0, oA) : this.a4f(nw, oA)
	}, this.a4f = function(nw, oA) {
		a4S(1e3, 0), a49(175, ac.a4T[nw] + ": ", 1e3, nw, b8.mn, "rgba(5,60,25,0.9)", -1, !0, oA)
	}, this.ye = function() {
		var k;
		a9.yK ? (k = L(54), aM.yc(L(55), 2, 1, 12), a49(0, k, 40, 0, "rgb(10,220,10)", b8.mk, -1, !1)) : (k = L(56), aM.yc(L(57), 2, 0, 16), a49(0, k, 41, 0, b8.mn, b8.mk, -1, !1))
	}, this.wd = function() {
		var z5 = ac.z5,
			es = a9.data;
		a49(300, z5[0] + " [" + a9.yX.wi(es.elo[0]) + "] vs " + z5[1] + " [" + a9.yX.wi(es.elo[1]) + "]", 65, 0, b8.me, "rgba(100,255,255,0.75)", -1, !1)
	}, this.a4h = function(k) {
		a49(200, k, 0, 0, "rgb(40,255,200)", "rgba(10,60,40,0.9)", -1, !1)
	}, this.a4i = function(a4j) {
		a49(0, L(a4j ? 58 : 59), 247, 0, b8.nc, b8.mk, -1, !1)
	}, this.wl = function(wh, wk, a4k) {
		var es = a9.data,
			z5 = ac.z5;
		a49(0, z5[0] + ": " + a9.yX.wi(es.elo[0]) + " -> " + wh, 66, 0, b8.mn, a4k[0], -1, !1), a49(0, z5[1] + ": " + a9.yX.wi(es.elo[1]) + " -> " + wk, 66, 1, b8.mn, a4k[1], -1, !1)
	}, this.oS = function(player, id) {
		0 === id ? a4U(50, player) ? (a49(128, L(60, [ac.a4T[player]]), 52, player, a4A(180, 255, 180), b8.mk, -1, !0), ab.p8(player, 2, 255)) : a49(384, L(61, [ac.a4T[player]]), 51, player, a4A(210, 210, 255), b8.mk, -1, !0) : a4U(51, player) ?
			(a49(128, L(62, [ac.a4T[player]]), 52, player, b8.mn, "rgba(60,120,10,0.9)", -1, !0), ab.p8(player, 2, 255)) : (a49(384, L(63, [ac.a4T[player]]), 50, player, b8.mn, "rgba(90,90,90,0.9)", -1, !0), ab.p8(player, 2, 96))
	}, this.oW = function(y6, target) {
		var color = a4A(210, 255, 210);
		1 < y6.length ? a49(230, L(64, [y6.length, ac.a4T[target]]), 66, target, color, b8.mk, -1, !0) : a49(230, L(65, [ac.a4T[y6[0]], ac.a4T[target]]), 66, y6[0], color, b8.mk, target, !0)
	}, this.a4l = function(player, target) {
		a49(230, L(66, [ac.a4T[player], ac.a4T[target]]), 66, player, b8.mn, "rgba(75,65,5,0.9)", target, !0)
	}, this.a3V = function(id, gI) {
		a4S(id, gI)
	}, this.yM = function(id, player) {
		a4U(id, void 0 === player ? a9.em : player)
	}, this.a4m = function(id) {
		for (var a7 = a3x.length - 1; 0 <= a7; a7--)
			if (a3x[a7].id === id) return a3x[a7];
		return null
	}, this.oN = function(a4n, a4o, player) {
		2 !== ac.a1d[a9.eZ] && (a49(200, 1 === a4n ? L(67, [ac.a4T[player]]) : L(68, [a4n, ac.a4T[player]]), 30, player, "rgb(190,255,190)", b8.mk, -1, !0), a4o) && a49(30, 1 === a4o ? L(69) : L(70, [a4o]), 30, 0, b8.mn, b8.mk, -1, !1)
	}, this.a4q = function(a4n, player) {
		2 !== ac.a1d[a9.eZ] && (a4S(31, 0), 2 === ac.a1d[player] || player >= a9.ju ? a49(150, 1 === a4n ? L(71, [ac.a4T[player]]) : L(72, [ac.a4T[player], a4n]), 31, player, b8.me, "rgba(205,205,205,0.9)", -1, !0) : a49(150, 1 === a4n ? L(73, [
			ac.a4T[player]
		]) : L(74, [ac.a4T[player], a4n]), 31, player, b8.me, "rgba(205,255,205,0.9)", -1, !0))
	}, this.yL = function(bp) {
		for (var fA = bc.jr(), a7 = 2; 0 <= a7; a7--) 0 < a41.t8[a7] && (bp || a41.fA[a7] < fA - 220) && this.a4w(a7)
	}, this.a4w = function(id) {
		var pG, ep = a41.t8[id],
			player = a41.y6[id];
		a41.t8[id] = 0, 1 === ep ? (0 === id ? pG = L(81, [ac.a4T[player], ac.a4T[a41.a46[0]]]) : 1 === id ? pG = L(82, [ac.a4T[player]]) : 2 === id ? pG = L(83, [ac.a4T[player]]) : 3 === id && (pG = L(84, [ac.a4T[player]])), a4S(7, 0), a49(a41
			.m3[id], pG, 7, a41.a46[id], b8.mn, b8.mk, -1, !0)) : (pG = L(0 === id ? 85 : 1 === id ? 86 : 87, [ep]), a4S(7, 0), a49(a41.m3[id], pG, 7, player, b8.mn, b8.mk, -1, !1))
	}, this.a4V = function(id, hF, v3) {
		var fA = bc.jr(),
			ep = a41.t8[id] + 1;
		a41.t8[id]++, a41.y6[id] = hF, a41.a46[id] = v3, 1 === ep && (a41.fA[id] = fA), (1 === ep && (a9.yI < 32 || 2 === a9.yF) || 1 < ep && (a41.fA[id] < fA - 140 || 2 === a9.yF)) && this.a4w(id)
	}, this.il = function() {
		for (var hl = (hl = a3x.length - a42) <= 1 ? 1 : hl * hl, a7 = a3x.length - 1; 0 <= a7; a7--) 0 < a3x[a7].eO && (a3x[a7].eO -= hl, a3x[a7].eO <= 0) && (bc.de = !0, a3x.splice(a7, 1));
		! function() {
			var gI, a7;
			if (128 !== a43 && !(++a43 < 128))
				for (gI = 5, a7 = ah.jv - 1; 0 <= a7; a7--) 1 === ac.a1d[ah.jx[a7]] && 0 < gI-- && a49(240, L(84, [ac.a4T[ah.jx[a7]]]), 1, ah.jx[a7], b8.me, "rgba(255,255,255,0.75)", -1, !0)
		}(), this.yL(!1)
	}, this.t9 = function() {
		for (var vW, ey = wS(), a7 = a3x.length - 1; 0 <= a7; a7--) vW = ey - (a7 + 1) * jO, 50 === a3x[a7].id ? (tA.drawImage(a3x[a7].canvas, au.a1 - a3x[a7].a1 - a40 - a3y, vW), tA.drawImage(a44, au.a1 - a40 - a3y, vW)) : tA.drawImage(a3x[a7]
			.canvas, au.a1 - a3x[a7].a1 - a3y, vW)
	}
}

function cA() {
	var a4y, a4z, a50, a1, jO, font, pG;

	function a54(a55) {
		return a55 < 10 ? "0" + a55 : String(a55)
	}
	this.dW = function() {
		pG = L(88)
	}, this.resize = function() {
		a1 = Math.floor((u.v.sU() ? .53 : .36) * au.pb), jO = Math.floor(.065 * a1), font = b7.pZ.ri(1, Math.floor(.9 * jO)), a50--, this.setTime()
	}, this.il = function() {
		this.setTime() && (bc.de = !0)
	}, this.setTime = function() {
		var dm = new Date,
			a52 = dm.getUTCMinutes(),
			dm = dm.getUTCSeconds();
		return a4z = 3600 - 60 * a52 - dm, a4z %= 900, a4y = pG + a54(Math.floor(a4z / 60)) + ":" + a54(a4z % 60), a50 !== (a50 = 60 * a52 + dm) && (a1 = aM.measureText(a4y, font), a1 += Math.floor(.4 * jO), !0)
	}, this.t9 = function() {
		tA.lineWidth = 1 + Math.floor(jO / 15), tA.translate(au.a1 - jO, Math.floor(.5 * (au.jO + a1))), tA.rotate(-Math.PI / 2), tA.fillStyle = b8.mn, tA.fillRect(0, 0, a1, jO), tA.strokeStyle = b8.me, tA.strokeRect(0, 0, a1, jO + 10), tA
			.fillStyle = b8.me, tA.font = font, b7.pZ.textBaseline(tA, 1), b7.pZ.textAlign(tA, 1), tA.fillText(a4y, Math.floor(a1 / 2), Math.floor(.59 * jO)), tA.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function cB() {
	var a3x, a56, a3j, jO, a57;

	function a59(a7) {
		var a5B = !0,
			hg = b8.mn,
			a1 = (a3x[a7].j3 === a9.em ? a3x[a7].wW.fillStyle = b8.mx : (aY.a5C(a3x[a7].j3), a3x[a7].wW.fillStyle = b7.color.mh(bL.fP[0], bL.fP[1], bL.fP[2], .87), 400 < b7.pj.a0o(bL.fP, 0, 2) && (a5B = !1, hg = b8.me)), a3x[a7].canvas.width),
			rk = (a3x[a7].wW.clearRect(0, 0, a1, jO), a3x[a7].wW.fillRect(0, 0, a1, jO), a3x[a7].wW.fillStyle = hg, ! function(wW, a1, jO) {
				wW.fillRect(0, 0, a1, 1), wW.fillRect(0, jO - 1, a1, 1), wW.fillRect(0, 0, 1, jO), wW.fillRect(a1 - 1, 0, 1, jO)
			}(a3x[a7].wW, a1, jO), a56 + 2 * jO < a1 && (a3x[a7].wW.fillRect(a1 - a56 - jO, 0, 1, jO), a3x[a7].wW.fillText(ac.a4T[a3x[a7].j3], Math.floor((a1 - a56) / 2), Math.floor(.57 * jO))), 0 !== a3x[a7].id ? 0 : jO);
		a3x[a7].wW.fillText(b7.z3.xY(a3x[a7].j4), Math.floor(a1 - a56 / 2 - rk), Math.floor(.57 * jO)),
			function(a7, a1, rk, a5B) {
				a3x[a7].wW.fillStyle = a5B ? b8.mp : b8.ml;
				a5B = Math.floor(a56 * a3x[a7].j4 / a3x[a7].a5I);
				a3x[a7].wW.fillRect(Math.floor(a1 - a56 - rk), jO - a57, a5B, a57)
			}(a7, a1, rk, a5B), 0 === a3x[a7].id ? (a5F(a7, a1, a5B, hg), function(a7, a1, a5B) {
				a3x[a7].wW.strokeStyle = a5B ? b8.n3 : b8.nD, a3x[a7].wW.fillRect(jO, 0, 1, jO);
				a5B = a1 - jO;
				a3x[a7].wW.beginPath(), a3x[a7].wW.moveTo(Math.floor(.3 * jO + a5B), Math.floor(jO / 2)), a3x[a7].wW.lineTo(Math.floor(jO - .3 * jO + 0 + a5B), Math.floor(jO / 2)), a3x[a7].wW.stroke(), a3x[a7].wW.beginPath(), a3x[a7].wW.moveTo(
					Math.floor(jO / 2 + a5B), Math.floor(.3 * jO)), a3x[a7].wW.lineTo(Math.floor(jO / 2 + a5B), Math.floor(jO - .3 * jO + 0)), a3x[a7].wW.stroke()
			}(a7, a1, a5B)) : a5F(a7, 2 * jO, a5B, hg)
	}

	function a5F(a7, a1, a5B, hg) {
		a3x[a7].wW.strokeStyle = a3x[a7].a5J ? b8.mv : a5B ? b8.nH : b8.nI, a3x[a7].wW.fillStyle = hg, a3x[a7].wW.fillRect(a1 - jO, 0, 1, jO), a3x[a7].wW.lineWidth = Math.max(Math.floor(jO / 12), 3), a3x[a7].wW.lineCap = "round";
		a5B = .35;
		a1 = jO + 1, a3x[a7].wW.beginPath(), a3x[a7].wW.moveTo(Math.floor(a1 - a5B * jO + 0), Math.floor(a5B * jO)), a3x[a7].wW.lineTo(Math.floor(a1 - jO + a5B * jO), Math.floor(jO - a5B * jO + 0)), a3x[a7].wW.stroke(), a3x[a7].wW.beginPath(), a3x[
			a7].wW.moveTo(Math.floor(a1 - jO + a5B * jO), Math.floor(a5B * jO)), a3x[a7].wW.lineTo(Math.floor(a1 - a5B * jO + 0), Math.floor(jO - a5B * jO + 0)), a3x[a7].wW.stroke()
	}

	function a5T(ep) {
		for (var j4, a7 = ep - 1; 0 <= a7; a7--) j4 = aZ.g2(a9.eZ, a7), a3x[a7].j4 !== j4 && (a3x[a7].j4 = j4, a3x[a7].a5I = j4 > a3x[a7].a5I ? j4 : a3x[a7].a5I, a3x[a7].a5A = !0)
	}

	function a58(a5V) {
		a5V.canvas = document.createElement("canvas"), bP.uo.font = a3j;
		var a1 = a56;
		a5V.j3 < a9.em && 0 === a5V.id && (a1 += Math.floor(bP.uo.measureText(ac.a4T[a5V.j3] + "000").width)), a1 += jO, 0 === a5V.id && (a1 += jO), a5V.canvas.width = a1, a5V.canvas.height = jO, a5V.wW = a5V.canvas.getContext("2d", {
			alpha: !0
		}), a5V.wW.font = a3j, b7.pZ.textBaseline(a5V.wW, 1), b7.pZ.textAlign(a5V.wW, 1)
	}

	function a5P(a7) {
		return aQ.a5X() ? au.a1 - a3x[a7].canvas.width - bZ.gap : aQ.ew
	}

	function a5Q(a7) {
		return Math.floor(2 * bZ.gap + (aQ.a5X() ? aS.jO + bZ.gap : 0) + aQ.jO + a7 * (1.3 * jO))
	}
	this.dW = function() {
		a3x = [], this.resize()
	}, this.resize = function() {
		a3j = aJ.a3j, jO = aJ.fontSize + 5, jO = Math.floor(1.25 * jO), u.v.sU() && (jO = Math.floor(1.25 * jO)), a57 = Math.floor(.15 * jO), bP.uo.font = a3j, a56 = Math.floor(bP.uo.measureText("02 000 000 0000").width);
		for (var a7 = a3x.length - 1; 0 <= a7; a7--) a58(a3x[a7]), a59(a7)
	}, this.lX = function() {
		for (var a7 = a3x.length - 1; 0 <= a7; a7--) a3x[a7].a5A && (a3x[a7].a5A = !1, a59(a7))
	}, this.h3 = function(l0, ey) {
		if (2 !== a9.yF && 0 !== ac.ll[a9.eZ] && !a9.gz && aY.y8(a9.eZ))
			for (var a5K, a5L, a5M, a5N = u.v.sU() ? jO : 0, a5O = u.v.sU() ? Math.floor(.15 * jO) : 0, a7 = a3x.length - 1; 0 <= a7; a7--)
				if (a5K = a5P(a7), a5L = a5Q(a7), a5M = a3x[a7].canvas.width, a5L - a5O <= ey && ey <= a5L + jO + a5O) {
					if (a5K - a5N <= l0 && l0 <= a5K + jO + a5N) return a3x[a7].a5J || (a3x[a7].a5A = !0, a3x[a7].a5J = !0, 0 === a3x[a7].id && b5.hC.o7(a3x[a7].j3)), !0;
					if (0 === a3x[a7].id && a5K + a5M - jO - a5N <= l0 && l0 <= a5K + a5M + a5N) return b5.hC.hN(aN.hH(), a3x[a7].j3), !0
				} return !1
	}, this.il = function() {
		var ep;
		0 !== ac.ll[a9.eZ] && (aY.y8(a9.eZ) || a9.gz) && (function(ep) {
			if (a3x.length !== ep) return 1;
			for (var a7 = ep - 1; 0 <= a7; a7--)
				if (a3x[a7].id !== aZ.fw(a9.eZ, a7) || a3x[a7].j3 !== aZ.g1(a9.eZ, a7)) return 1;
			return
		}(ep = aZ.fv(a9.eZ)) && function(ep) {
			var a7, id, j3, f9, j4, a4B = [];
			loop: for (a7 = 0; a7 < ep; a7++) {
				for (id = aZ.fw(a9.eZ, a7), j3 = aZ.g1(a9.eZ, a7), f9 = 0; f9 < a3x.length; f9++)
					if (a3x[f9].id === id && a3x[f9].j3 === j3) {
						a4B.push(a3x.splice(f9, 1)[0]);
						continue loop
					} j4 = aZ.g2(a9.eZ, a7), a58(j4 = {
					j3: j3,
					j4: j4,
					a5I: j4,
					id: id,
					a5A: !0,
					a5J: !1,
					canvas: null,
					wW: null
				}), a4B.push(j4)
			}
			a3x = a4B
		}(ep), a5T(ep))
	}, this.a5W = function(gN) {
		for (var ep = Math.min(a3x.length, aZ.fv(a9.eZ)), a7 = 0; a7 < ep; a7++)
			if (a3x[a7].j3 === gN) return void(a3x = [])
	}, this.t9 = function() {
		if (0 !== ac.ll[a9.eZ] && (aY.y8(a9.eZ) || a9.gz))
			for (var a7 = a3x.length - 1; 0 <= a7; a7--) tA.drawImage(a3x[a7].canvas, a5P(a7), a5Q(a7))
	}
}

function cC() {
	var a3x, k2, a5Y, a5Z, jO, a3j, fontSize, a5a, a5b, a5c, a5d, canvas, wW, ly, a5e;

	function tN(a7) {
		return L(0 === a7 ? 89 : 1 === a7 ? 90 : 2 === a7 ? 91 : 92)
	}

	function a5l() {
		tA.drawImage(canvas, bZ.gap + (a9.ix ? bZ.gap + be.a5m() : 0), a5n + 2 * bZ.gap)
	}

	function a5f() {
		canvas.width = a3x[0].width + a5c, canvas.height = jO + a5c, (wW = canvas.getContext("2d", {
				alpha: !0
			})).clearRect(0, 0, a3x[0].width + a5c, jO + a5c), wW.translate(Math.floor(a5c / 2), Math.floor(a5c / 2)), wW.lineWidth = a5c, wW.fillStyle = 1 === a3x[0].a5k ? b8.ms : b8.mk, a5o(), wW.fill(), wW.strokeStyle = 1 === a3x[0].a5k ? b8.me :
			b8.mn, a5o(), wW.stroke(), b7.pZ.textAlign(wW, 1), b7.pZ.textBaseline(wW, 1), wW.fillStyle = 1 === a3x[0].a5k ? b8.me : b8.mn, wW.font = a3j[0], wW.fillText(tN(a3x[0].a5j), Math.floor(a3x[0].width / 2), Math.floor(.72 * a5a[0] * jO)), wW
			.font = a3j[1], wW.fillText(a3x[0].pG, Math.floor(a3x[0].width / 2), Math.floor((a5a[0] + .48 * a5a[1]) * jO))
	}

	function a5o() {
		wW.beginPath(), wW.moveTo(a5d, 0), wW.lineTo(a3x[0].width - a5d, 0), wW.lineTo(a3x[0].width, a5d), wW.lineTo(a3x[0].width, jO - a5d), wW.lineTo(a3x[0].width - a5d, jO), wW.lineTo(a5d, jO), wW.lineTo(0, jO - a5d), wW.lineTo(0, a5d), wW
			.closePath()
	}
	this.dW = function() {
		k2 = 4, a5Y = a5Z = ly = 0, a3x = [], a3j = new Array(2), fontSize = new Array(2), (a5a = new Array(2))[0] = .3, a5a[1] = .7, a5b = new Array(4), canvas = document.createElement("canvas"), a5e = bc.eO + 2e3, this.resize()
	}, this.resize = function() {
		var a7, a1;
		for (jO = Math.floor((u.v.sU() ? .0725 : .058) * au.pb), fontSize[0] = Math.floor(.85 * a5a[0] * jO), fontSize[1] = Math.floor(.85 * a5a[1] * jO), a3j[0] = b7.pZ.ri(1, fontSize[0]), a3j[1] = b7.pZ.ri(1, fontSize[1]), a7 = a5b.length -
			1; 0 <= a7; a7--) a5b[a7] = this.measureText(tN(a7) + "000", a3j[0]);
		if (a5c = Math.floor(1 + .05 * jO), a5d = Math.floor(.2 * jO), 0 < a3x.length) {
			for (a7 = a3x.length - 1; 0 <= a7; a7--) a1 = this.measureText(a3x[a7].pG + "00", a3j[1]), a3x[a7].width = a1 < a5b[a7] ? a5b[a7] : a1;
			a5f()
		}
	}, this.il = function() {
		0 !== k2 && (4 === k2 ? bc.eO > a5e && (k2 = 0, 1 === a9.yF) && aM.yc(bP.ui.uj[bP.eV].name, 3, 1, 9) : (1 === k2 ? (0 === a5Y && (a5f(), a5Y = 1e-4), 1 <= (a5Y += .002 * (bc.eO - ly)) && (a5Z = 0, k2 = 2, a5Y = 1), bc.de = !0) : 2 ===
			k2 ? ((a5Z += (bc.eO - ly) / 1e3) > a3x[0].m3 || 1 < a5Z && 1 < a3x.length) && (k2 = 3) : 3 === k2 && ((a5Y -= .002 * (bc.eO - ly)) <= 0 && (a5Y = 0, a3x.shift(), k2 = 0 < a3x.length ? 1 : 0), bc.de = !0), ly = bc.eO))
	}, this.measureText = function(pG, a3j) {
		return tA.font = a3j, Math.floor(tA.measureText(pG).width)
	}, this.j0 = function(a5i, a7) {
		this.yc(ac.a4T[a5i], a7, 1, 0 === a7 ? 3 : 7)
	}, this.yc = function(pG, a5j, a5k, m3) {
		var a1;
		pG.length && (a1 = (a1 = this.measureText(pG + "00", a3j[1])) < a5b[a5j] ? a5b[a5j] : a1, a3x.push({
			pG: pG,
			width: a1,
			a5j: a5j,
			a5k: a5k,
			m3: m3
		}), 0 === k2) && (a5Y = 0, k2 = 1, ly = bc.eO)
	}, this.t9 = function() {
		0 !== k2 && 0 !== a5Y && (a5Y < 1 ? (tA.globalAlpha = a5Y, a5l(), tA.globalAlpha = 1) : a5l())
	}
}

function cl() {
	var jO, canvas, wW, a5p, a5q, a5r, a5s, a5A, a5t, a5u, a5v, a5w, a4j = !1,
		a17 = (this.wp = !1, this.a1 = 0, new Array(2));

	function lY() {
		var a1 = ar.a1,
			kf = (a5A = !1, wV(wW, a1, jO), Math.floor(a1 / 2));
		1 === a5p ? (wW.fillStyle = b8.n5, wW.fillRect(kf, 0, kf, jO)) : -1 === a5p && (wW.fillStyle = b8.nJ, wW.fillRect(0, 0, kf, jO)), wX(wW, a1, jO, 2);
		var kf = (kf = Math.floor(.25 * jO)) < 2 ? 2 : kf,
			a4s = (wW.fillStyle = b8.mt, Math.floor((jO - 4) * a5q[1] / a5r[1]));
		0 < a4s && wW.fillRect(2, jO - 2 - a4s, kf, a4s), 0 < (a4s = Math.floor((jO - 4) * a5q[0] / a5r[0])) && wW.fillRect(a1 - 2 - kf, jO - 2 - a4s, kf, a4s);
		kf = (kf = Math.floor(jO / 8)) < 2 ? 2 : kf, wZ(wW, Math.floor(.4 * jO), 0, jO, kf, .5, !1), wZ(wW, Math.floor(a1 - 1.4 * jO), 0, jO, kf, .5, !0), a4s = 1.1 * jO / a17[0].width;
		wW.imageSmoothingEnabled = !0, wW.setTransform(a4s, 0, 0, a4s, (a1 - a4s * a17[0].width) / 2, -.05 * jO), wW.drawImage(a17[+a4j], 0, 0), wW.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a5x() {
		a5v = bc.jr(), a5A = !0, a5t = a5p = 0, a5s = [], ar.wp = !1, aJ.yM(247), a5q[0] = a5q[1] = 0, aJ.a2U(673)
	}

	function wS() {
		return aN.a4M(aJ.a4I()) ? aN.ey - jO - bZ.gap : b9.a4M(aJ.a4L()) ? b9.wS() - jO - bZ.gap : au.jO - jO - bh.a36() * bZ.gap
	}
	this.dX = function() {
		for (var a7 = 0; a7 < 2; a7++) a17[a7] = b7.canvas.x3(aX.get(3), 8 - a7, b8.nm), a17[a7] = b7.canvas.a19(a17[a7])
	}, this.dW = function() {
		a5v = -140, a5u = 0, a5w = -1, this.wp = !1, a5A = a4j = !1, a5q = [a5p = a5t = 0, 0], a5r = [1, 1], a5s = [], this.resize()
	}, this.resize = function() {
		jO = aN.jO, this.a1 = 4 * jO, (canvas = document.createElement("canvas")).width = this.a1, canvas.height = jO, wW = canvas.getContext("2d", {
			alpha: !0
		}), lY()
	}, this.lX = function() {
		a5A && lY()
	}, this.h3 = function(ew, ey) {
		var mE;
		return !!this.wp && !(ew < au.a1 - this.a1 - bZ.gap || ey < (mE = wS()) || mE + jO < ey || (a9.gz || b5.hC.oD(ew > au.a1 - bZ.gap - this.a1 / 2 ? 1 : 0), 0))
	}, this.il = function() {
		if (0 < a5u) 0 === --a5u && a5x();
		else if (this.wp) 180 == --a5t && 3 * a5q[0] < a5r[0] ? a5x() : a5q[0] >= a5r[0] ? a4j ? bO.xt.yA() : bO.xt.yE() : a5q[1] >= a5r[1] ? a5u = 4 : a5t <= 0 && a5x();
		else if (function() {
				if (0 <= a5w) return 1;
				return
			}()) {
			a4j = ad.a60(), aJ.yd(250, L(93, [ac.a4T[a5w]]), 673, a5w, b8.mn, b8.mk, -1, !0), a5w = -1, aJ.a2U(257), aJ.a4i(a4j), this.wp = !0, a5A = !0, a5t = 360;
			for (var fH, dm = 0, a7 = ah.jv - 1; 0 <= a7; a7--) aY.y8(ah.jx[a7]) && (dm += ac.gd[ah.jx[a7]]);
			a4j ? a5r[0] = Math.max(bI.dn(3 * dm, 4), 1) : a9.ix ? 9 === a9.kE && 8 === bd.kK[be.l9()] ? a5r[0] = Math.max(dm, 1) : (fH = bI.dn(100 * be.yo(), a9.je), fH = bI.p7(200 - 2 * fH, 50, 100), fH = bI.dn(fH * dm, 100), a5r[0] = Math.max(
				fH, 1)) : a5r[0] = Math.max(bI.dn(3 * dm, 5), 1), a5r[1] = Math.max(dm - a5r[0], 1)
		}
	}, this.yG = function() {
		this.wp && a5q[0] < a5r[0] && a5x()
	}, this.p9 = function(player, a63) {
		var a7;
		if (this.wp) {
			for (a7 = a5s.length - 1; 0 <= a7; a7--)
				if (a5s[a7] === player) return;
			var a64 = L(a63 ? 94 : 95, [ac.a4T[player]]);
			aJ.yd(450, a64, 257, player, a63 ? b8.n3 : b8.nG, b8.mk, -1, !0), a5s.push(player), a5A = !0, a64 = a9.kG ? a5r[0] : ac.gd[player], a63 ? a5q[0] += a64 : a5q[1] += a64, player === a9.eZ && (a5p = a63 ? 1 : -1)
		}
	}, this.t9 = function() {
		var ey;
		this.wp && (ey = wS(), tA.drawImage(canvas, au.a1 - this.a1 - bZ.gap, ey))
	}, this.pA = function(player) {
		if (!a9.kG) {
			if (bc.jr() < a5v + 140) return !1;
			if (bc.jr() < 535) return !1
		}
		return 0 === a5t && !!b7.gB.h1(1) && !(!b7.gB.h2(player) || 10 <= jf[player] && !b7.gB.a1w(player, 9))
	}, this.oI = function(player) {
		a5w = player
	}
}

function cD() {
	var a1, ew, a65, canvas, wW, wp, iB, a2L, a3j, a5A, a66 = 11 / 12;

	function a68() {
		var a5H = Math.floor(iB * (a1 - 2 * a65)),
			a6B = 1 + Math.floor(.0625 * aN.jO),
			a6C = 1 + Math.floor(.3 * aN.jO),
			a6D = Math.floor(.55 * aN.jO);
		wW.clearRect(0, 0, a1, aN.jO), wW.fillStyle = b8.mj, wW.fillRect(0, 0, a65, aN.jO), wW.fillRect(a65 + a5H, 0, a1 - a65 - a5H, aN.jO), wW.fillStyle = iB < 1 / 3 ? "rgba(" + Math.floor(3 * iB * 130) + ",130,0,0.85)" : iB < 2 / 3 ? "rgba(130," +
			(130 - Math.floor(3 * (iB - 1 / 3) * 130)) + ",0,0.85)" : "rgba(130,0," + Math.floor(3 * (iB - 2 / 3) * 130) + ",0.85)", wW.fillRect(a65, 0, a5H, aN.jO), wW.fillStyle = b8.mn, wW.fillRect(0, 0, a1, 1), wW.fillRect(0, aN.jO - 1, a1, 1), wW
			.fillRect(0, 0, 1, aN.jO), wW.fillRect(a65, 0, 1, aN.jO), wW.fillRect(a65 + a5H, 0, 1, aN.jO), wW.fillRect(a1 - a65, 0, 1, aN.jO), wW.fillRect(a1 - 1, 0, 1, aN.jO), wW.fillRect(Math.floor(.25 * aN.jO) + a6C, Math.floor((aN.jO - a6B) / 2),
				aN.jO - 2 * a6C, a6B), wW.fillRect(Math.floor(a1 - 1.25 * aN.jO) + a6C, Math.floor((aN.jO - a6B) / 2), aN.jO - 2 * a6C - a6C % 2, a6B), wW.fillRect(Math.floor(a1 - 1.25 * aN.jO) + Math.floor((aN.jO - a6B) / 2), a6C, a6B, aN.jO - 2 *
				a6C - a6C % 2), a2L = b7.gB.iA(a9.eZ, aN.hH()), wW.fillText(b7.z3.xY(a2L) + " (" + b7.z3.a2E(100 * iB, +(iB < .1)) + ")", Math.floor(.5 * a1), a6D)
	}
	this.setAbsolutePercentage = function(newPercentage) {
		iB = newPercentage;
	};
	__fx.keybindFunctions.setAbsolute = this.setAbsolutePercentage;
	__fx.keybindFunctions.setRelative = (arg1) => aN.a0M(arg1);

	function a6I(a0j) {
		return !(1 < a0j && 1 === iB || (1 < a0j && a0j * iB - iB < 1 / 1024 ? a0j = (iB + 1 / 1024) / iB : a0j < 1 && iB - a0j * iB < 1 / 1024 && (a0j = (iB - 1 / 1024) / iB), iB = bI.p7(iB * a0j, 1 / 1024, 1), a68(), 0))
	}

	function a6J(l0) {
		return iB !== (iB = bI.p7((l0 - ew - a65) / (a1 - 2 * a65), 1 / 1024, 1)) && (a68(), !0)
	}
	this.ey = 0, this.h4 = !1, this.dW = function() {
		wp = !a9.hB && !a9.gz, a5A = !1, iB = .5, a2L = 0, this.h4 = !1, this.resize()
	}, this.resize = function() {
		u.v.sU() && au.a1 < .8 * au.jO ? (this.jO = Math.floor(.066 * au.pb), a1 = au.a1 - 4 * bZ.gap - this.jO) : (a1 = Math.floor((u.v.sU() ? .65 : .389) * au.pb), a1 += 12 - a1 % 12, this.jO = Math.floor(a1 / 12)), a65 = Math.floor(3 * this
			.jO / 2), a3j = b7.pZ.ri(1, Math.floor(.5 * this.jO)), (canvas = document.createElement("canvas")).width = a1, canvas.height = this.jO, (wW = canvas.getContext("2d", {
			alpha: !0
		})).font = a3j, b7.pZ.textBaseline(wW, 1), b7.pZ.textAlign(wW, 1), this.a67(), a68()
	}, this.a67 = function() {
		ew = u.v.sU() && au.a1 < .8 * au.jO ? this.jO + 3 * bZ.gap : Math.floor((au.a1 - a1) / 2), this.ey = au.jO - this.jO - bh.a36() * bZ.gap
	}, this.lX = function() {
		a5A && (a5A = !1, a68())
	}, this.wp = function() {
		return !(!wp || aI.h0 && ew < Math.floor(bZ.gap + 5.5 * this.jO))
	}, this.a4M = function(a6E) {
		return !!this.wp() && ew + a1 > au.a1 - a6E - bZ.gap
	}, this.a2S = function() {
		wp = !a9.gz
	}, this.a5x = function() {
		wp = !1
	}, this.hH = function() {
		return bI.p7(Math.floor(1024 * iB + .5) - 1, 0, 1023)
	}, this.a0J = function(l0, l1) {
		return this.wp() && ew < l0 && l0 < ew + a1 && l1 > this.ey
	}, this.h3 = function(l0, l1) {
		return !!this.wp() && !!aN.a0J(l0, l1) && (aO.mI = !1, function(rD, l0, l1) {
			if (function(l0, l1) {
					return ew < l0 && l0 < ew + a65 && l1 > aN.ey
				}(l0, l1)) return a6I(a66);
			if (function(l0, l1) {
					return ew + a1 - a65 < l0 && l0 < ew + a1 && l1 > aN.ey
				}(l0, l1)) return a6I(1 / a66);
			return rD.h4 = !0, a6J(l0)
		}(this, l0, l1) && (bc.de = !0), !0)
	}, this.a0M = function(mP) {
		0 !== a9.yF && this.wp() && a6I(mP) && (bc.de = !0)
	}, this.zs = function(deltaY) {
		var mP;
		return !(0 === deltaY || !this.wp()) && a6I(mP = 0 < deltaY ? (mP = 400 / (400 + deltaY)) < a66 ? a66 : mP : 1 / a66 < (mP = (400 - deltaY) / 400) ? 1 / a66 : mP)
	}, this.zp = function(l0) {
		return !!this.h4 && a6J(l0)
	}, this.a0F = function() {
		this.h4 = !1
	}, this.il = function() {
		this.wp() && a2L !== b7.gB.iA(a9.eZ, this.hH()) && (a5A = !0)
	}, this.t9 = function() {
		this.wp() && tA.drawImage(canvas, ew, this.ey)
	}
}

function cv() {
	var canvas, wW, a6K, font, a6L = 0,
		a6M = !1,
		a6N = [10, 5, 3, 2, 1.5, 1, .75, .5, .25],
		a6O = 5;

	function a6U() {
		if (a6M) {
			var a7, ep = a6N.length,
				a6D = Math.floor(.5 * a6K.jO),
				jO = ep * a6D,
				ew = Math.floor(Math.floor(a6K.ew) + .3 * a6K.a1 - .5),
				ey = Math.floor(Math.floor(a6K.ey) - jO),
				a1 = Math.floor(.4 * a6K.a1 + 2.5);
			for (tA.fillStyle = b8.mj, tA.fillRect(ew, ey, a1, jO), tA.fillStyle = b8.nA, tA.fillRect(ew, ey + a6O * a6D, a1, a6D), tA.fillStyle = b8.mn, tA.fillRect(ew, ey, 2, jO), tA.fillRect(ew, ey, a1, 2), tA.fillRect(ew + a1 - 2, ey, 2, jO),
				a7 = 1; a7 < ep; a7++) tA.fillRect(ew, ey + a7 * a6D, a1, 2);
			for (tA.fillStyle = b8.mn, b7.pZ.textAlign(tA, 1), b7.pZ.textBaseline(tA, 1), tA.font = b7.pZ.ri(0, .6 * a6D), ew += .5 * a1, a7 = 0; a7 < ep; a7++) tA.fillText(a6c(a7), ew, ey + (a7 + .6) * a6D)
		}
		tA.drawImage(canvas, Math.floor(a6K.ew), Math.floor(a6K.ey))
	}

	function lY(rD) {
		var ew, mD, mE, a6D;
		wW.clearRect(0, 0, Math.floor(a6K.a1), Math.floor(a6K.jO)), wW.fillStyle = b8.mj, wW.fillRect(0, 0, Math.floor(a6K.a1), Math.floor(a6K.jO)), a9.mG && (wW.fillStyle = b8.nA, wW.fillRect(0, 0, Math.floor(.3 * a6K.a1), Math.floor(a6K.jO))), wW
			.fillStyle = b8.mn, wW.fillText("Hide UI", .15 * a6K.a1, .5 * a6K.jO), wW.fillRect(Math.floor(.3 * a6K.a1 - .5), 0, 2, Math.floor(a6K.jO)), ew = .5 * a6K.a1, wW.fillText("Replay Speed", ew, .31 * a6K.jO), wW.fillText(a6c(a6O), ew, .69 *
				a6K.jO), wW.fillRect(Math.floor(.7 * a6K.a1 - .5), 0, 2, Math.floor(a6K.jO)), rD.a2y ? (ew = Math.floor(.02 * a6K.a1), rD = Math.floor(.025 * a6K.a1), mD = Math.floor(.85 * a6K.a1 - ew - .5 * rD), mE = Math.floor(.25 * a6K.jO), a6D =
				Math.floor(a6K.jO) - 2 * mE, wW.fillRect(mD, mE, ew, a6D), wW.fillRect(mD + ew + rD, mE, ew, a6D)) : function() {
				var a1 = Math.floor(.46 * a6K.jO),
					jO = Math.floor(.23 * a6K.jO),
					ew = Math.floor(.85 * a6K.a1 - .5 * a1 + a1 / 12),
					ey = Math.floor(.5 * a6K.jO - jO);
				wW.beginPath(), wW.moveTo(ew, ey), wW.lineTo(ew + a1, ey + jO), wW.lineTo(ew, ey + (jO << 1)), wW.fill()
			}(), wW.fillRect(0, 0, Math.floor(a6K.a1), 2), wW.fillRect(0, 0, 2, Math.floor(a6K.jO)), wW.fillRect(0, Math.floor(a6K.jO) - 2, Math.floor(a6K.a1), 2), wW.fillRect(Math.floor(a6K.a1 - 2), 0, 2, Math.floor(a6K.jO))
	}

	function a6c(a7) {
		return 5 === a7 ? "Normal" : "" + a6N[a7]
	}
	this.a2y = !1, this.dW = function() {
		a9.gz && (a6O = 5, this.a2y = !1, a6M = !1, a6K = new qC([.3, .3 / 6], [.5, 1]), this.resize())
	}, this.a6P = function() {
		return a6N[a6O]
	}, this.wS = function() {
		return a6K.ey
	}, this.a4M = function(a6E) {
		return !!a9.gz && a6K.ew + a6K.a1 > au.a1 - a6E - bZ.gap
	}, this.resize = function() {
		a9.gz && (a6K.resize(), a6K.ey -= (bh.a36() - 1) * bZ.gap, font = b7.pZ.ri(0, .3 * a6K.jO), (canvas = document.createElement("canvas")).width = Math.floor(a6K.a1), canvas.height = Math.floor(a6K.jO), (wW = canvas.getContext("2d", {
			alpha: !0
		})).font = font, b7.pZ.textAlign(wW, 1), b7.pZ.textBaseline(wW, 1), lY(this))
	}, this.a0P = function(a6Q) {
		0 === a9.yF || n.wp() || a6Q !== a9.mG && (a9.mG = a6Q, be.resize(), bc.de = !0, a9.gz) && (a6L = bc.eO + 2e3, lY(this))
	}, this.h3 = function(ew, ey) {
		if (!a9.gz) return !1;
		if (ew < a6K.ew || ey < a6K.ey || ew > a6K.ew + a6K.a1) return a6M && function(rD, ew, ey) {
			var ep = a6N.length,
				a6D = Math.floor(.5 * a6K.jO),
				jO = ep * a6D,
				mD = Math.floor(Math.floor(a6K.ew) + .3 * a6K.a1 - .5),
				jO = Math.floor(Math.floor(a6K.ey) - jO),
				a1 = Math.floor(.4 * a6K.a1 + 2.5);
			return a6M = !1, bc.de = !0, ew < mD || mD + a1 < ew || ey < jO || (a6O = a6T(0, Math.floor((ey - jO) / a6D), ep - 1), lY(rD)), !0
		}(this, ew, ey);
		if ((ew -= a6K.ew) < .3 * a6K.a1) a6M = !1, this.a0P(!a9.mG);
		else {
			if (ew < .7 * a6K.a1) return a6M = !a6M, bc.de = !0;
			this.a0R(!1)
		}
		return !0
	}, this.a0R = function(a6S) {
		2 === a9.yF ? (this.a0P(!1), n.o(3)) : (a6M = !1, this.a2y = !this.a2y, this.a2y ? (aI.h0 && aI.a0Q(), u.v.setState(1)) : a6S || aI.a3p(), bc.de = !0, lY(this))
	}, this.a0S = function() {
		this.a2y = !1, aI.a3p(), bc.de = !0, lY(this)
	}, this.a08 = function(ew, ey) {
		return !!a9.mG && (0 <= aI.h3(ew, ey) || (a9.gz ? ((bc.eO > a6L || !this.h3(ew, ey)) && aO.h3(ew, ey), bc.de = !0, a6L = bc.eO + 2e3) : aO.h3(ew, ey)), !0)
	}, this.il = function() {
		a9.gz && a9.mG && bc.eO > a6L - 1e3 && bc.eO < a6L && (bc.de = !0)
	}, this.yN = function() {
		a9.gz && (this.a2y = !1, bc.de = !0, lY(this))
	}, this.t9 = function() {
		if (a9.gz) {
			if (a9.mG) {
				if (bc.eO > a6L) return;
				if (bc.eO > a6L - 1e3) return tA.globalAlpha = a6T(0, (1e3 - (bc.eO - (a6L - 1e3))) / 1e3, 1), a6U(), void(tA.globalAlpha = 1)
			}
			a6U()
		}
	}
}

function cE() {
	var a6d, a6e, a1, ew, ey, a6f, a6g;
	this.dW = function() {
		a6d = new Array(2), a6e = new Array(2), this.mI = !1, a6g = a6f = iE = iC = 0, iD = 1, this.resize()
	}, this.resize = function() {
		a1 = (a1 = Math.floor((u.v.sU() ? .072 : .0502) * au.pb)) < 8 ? 8 : a1;
		for (var a7 = 1; 0 <= a7; a7--) a6d[a7] = document.createElement("canvas"), a6d[a7].width = a1, a6d[a7].height = a1, a6e[a7] = a6d[a7].getContext("2d", {
			alpha: !0
		});
		this.a67(),
			function() {
				for (var a6v = Math.floor(1 + a1 / 20), a7 = 1; 0 <= a7; a7--) a6e[a7].clearRect(0, 0, a1, a1), a6e[a7].fillStyle = b8.mg, a6e[a7].beginPath(), a6e[a7].arc(a1 / 2, a1 / 2, a1 / 2 - a6v, 0, 2 * Math.PI), a6e[a7].fill(), a6e[a7]
					.lineWidth = a6v, a6e[a7].fillStyle = b8.mn, a6e[a7].strokeStyle = b8.mn, a6e[a7].beginPath(), a6e[a7].arc(a1 / 2, a1 / 2, a1 / 2 - a6v, 0, 2 * Math.PI), a6e[a7].stroke(), wZ(a6e[a7], 0, 0, a1, a6v, .3, 0 === a7)
			}()
	}, this.wR = function() {
		return -iC / iD
	}, this.wS = function() {
		return -iE / iD
	}, this.mS = function(a6k, hu) {
		iC = iD * a6k - hu
	}, this.mT = function(a6l, hv) {
		iE = iD * a6l - hv
	}, this.h3 = function(a6j, a4N) {
		return a9.mG || ! function(a6j, a4N) {
			return Math.pow(a6j - (ew + a1 / 2), 2) + Math.pow(a4N - (ey + a1 / 2), 2) < a1 * a1 / 4 || Math.pow(a6j - (ew + a1 / 2), 2) + Math.pow(a4N - (ey + 2 * a1), 2) < a1 * a1 / 4
		}(a6j, a4N) || bg.dr.data[8].value ? (aD.mV() && (this.mI = !0, a6f = a6j, a6g = a4N), !1) : a4N < ey + 1.25 * a1 ? this.zs(Math.floor(au.a1 / 2), Math.floor(au.jO / 2), -200) : this.zs(Math.floor(au.a1 / 2), Math.floor(au.jO / 2),
			200)
	}, this.zp = function(a6j, a4N) {
		var a6m, a6n, hx, i0;
		return !aD.mV() || (a6m = iC, a6n = iE, iC += hx = a6f - a6j, iE += i0 = a6g - a4N, ab.zp(hx, i0), this.a6o(), a6f = a6j, a6g = a4N, a6m !== iC) || a6n !== iE
	}, this.zs = function(l0, l1, deltaY) {
		var mP;
		if (aD.mV()) {
			if (0 < deltaY) mP = (mP = 500 / (500 + deltaY)) < .5 ? .5 : mP;
			else {
				if (!(deltaY < 0)) return !1;
				mP = 2 < (mP = (500 - deltaY) / 500) ? 2 : mP
			}
			this.a6p(l0, l1, mP), bc.de = !0
		}
		return !0
	}, this.a6p = function(ew, ey, eT) {
		var a0j;
		eT = a0j = (a0j = 1024 < (a0j = eT) * iD ? 1024 / iD : a0j) * iD < .125 ? .125 / iD : a0j, ab.zoom(eT, ew, ey),
			function(a0j, l0, l1) {
				iD *= a0j, iC = (iC + l0) * a0j - l0, iE = (iE + l1) * a0j - l1, aO.a6o()
			}(eT, ew, ey)
	}, this.a6o = function() {
		var a6s = au.a1 / 16,
			he = 0,
			a6t = au.jO / 16,
			hf = 0;
		iC < -au.a1 + a6s && (he = -au.a1 + a6s - iC), iC > iD * bP.f0 - a6s && (he = iD * bP.f0 - a6s - iC), iE < -au.jO + a6t && (hf = -au.jO + a6t - iE), iE > iD * bP.f1 - a6t && (hf = iD * bP.f1 - a6t - iE), iC += he, iE += hf, bX.mU(), ab
			.a6u(he, hf)
	}, this.a67 = function() {
		ew = au.a1 - a1 - bZ.gap, ey = Math.floor(au.jO / 2 - 1.25 * a1)
	}, this.t9 = function() {
		bg.dr.data[8].value || (tA.drawImage(a6d[0], ew, ey), tA.drawImage(a6d[1], ew, Math.floor(ey + 3 * a1 / 2)))
	}
}

function cF() {
	var g, a6w, a6x, a6y, gap, a6z, a70, a71, a72, a73, a3j, a74, gu, a75, a5H, a76, a77, a78;

	function a7C() {
		a6y = Math.floor(.2 * (u.v.sU() ? .07 : .035) * au.pb), a6y = a4K(u.v.sU() ? 3 : 1, a6y);
		var a7F = au.a1 / (g.length + gap);
		a6y = a6y < a7F ? a7F : a6y, a5H = Math.floor((1 - gap) * a6y), a6w = 0, a7G()
	}

	function a7G() {
		a6w = (a6w = a6w < -20 ? -20 : a6w) > (g.length - 15) * a6y ? (g.length - 15) * a6y : a6w, a70 = Math.floor(a6w / a6y), a71 = (a71 = a70 + Math.floor(au.a1 / a6y)) > g.length - 1 ? g.length - 1 : a71, a70 = (a70 = a71 < a70 ? a71 : a70) < 0 ?
			0 : a70;
		var kf = a71;
		a6z = a6x / g[kf];
		for (var a7 = a71 - 1; a70 <= a7; a7--) g[a7] > g[kf] && (kf = a7, a6z = a6x / Math.pow(g[a7], a75))
	}

	function a7J(ew) {
		ew = Math.floor((a6w + au.a1 - ew - gap * a6y) / a6y);
		return (ew = ew < -1 ? -1 : -1 === ew ? 0 : ew > g.length - 1 ? -1 : ew) !== a72 && (a72 = ew, -1 === a76 && 0 === a72 && aP.a79 && (a76 = setInterval(a7K, 100)), 1)
	}

	function a7L(a7) {
		var a57 = Math.floor(a6z * Math.pow(g[a7], a75));
		tA.fillRect(a6w + au.a1 - (a7 + 1) * a6y, au.jO - a57, a5H, a57)
	}

	function a7K() {
		var gN;
		0 !== (a72 = 8 === aW.zS() ? -1 : a72) ? (a77 = (new Date).getTime(), clearInterval(a76), a76 = -1) : (gN = g[1] / 864e3, -1 !== a77 && (gN += ((new Date).getTime() - a77) * g[1] / 864e5, a77 = -1), 0 < gN && (g[0] += Math.floor(gN), bc
			.de = !0))
	}
	this.a79 = !1, this.dW = function() {
		a77 = a76 = -1, a72 = -(a75 = 1), this.a7A = !1, gu = 0, a74 = new Date, a6w = 0, gap = .3, (a78 = []).push({
			gI: "Plateau A",
			ep: 0,
			e: 57
		}), a78.push({
			gI: "Max A",
			ep: 1,
			e: 1
		}), a78.push({
			gI: "Black Friday",
			ep: 15,
			e: 15
		}), a78.push({
			gI: "Max B",
			ep: 19,
			e: 19
		}), a78.push({
			gI: "Max C",
			ep: 44,
			e: 44
		}), a78.push({
			gI: "First Android Version",
			ep: 58,
			e: 58
		}), a78.push({
			gI: "Max D",
			ep: 67,
			e: 67
		}), a78.push({
			gI: "The iFrame Explosion",
			ep: 98,
			e: 99
		}), a78.push({
			gI: "The 155-Day Uptrend",
			ep: 58,
			e: 213
		}), a78.push({
			gI: "Max E",
			ep: 213,
			e: 213
		}), a78.push({
			gI: "Plateau B",
			ep: 214,
			e: 259
		}), a78.push({
			gI: "Turbulent Times",
			ep: 260,
			e: 344
		}), a78.push({
			gI: "Max F",
			ep: 262,
			e: 262
		}), a78.push({
			gI: "Max G",
			ep: 282,
			e: 282
		}), a78.push({
			gI: "Max H",
			ep: 333,
			e: 333
		}), a78.push({
			gI: "The 19-Day Downtrend",
			ep: 283,
			e: 301
		}), a78.push({
			gI: "Plateau C",
			ep: 345,
			e: 385
		}), a78.push({
			gI: "The Alliance Ascent",
			ep: 386,
			e: 395
		}), a78.push({
			gI: "Max I",
			ep: 395,
			e: 395
		}), a78.push({
			gI: "First iOS Version",
			ep: 411,
			e: 411
		}), a78.push({
			gI: "Plateau D",
			ep: 396,
			e: 453
		}), a78.push({
			gI: "The TikTok Revolution",
			ep: 454,
			e: 470
		}), a78.push({
			gI: "Max J",
			ep: 456,
			e: 456
		}), a78.push({
			gI: "Max K",
			ep: 472,
			e: 472
		}), a78.push({
			gI: "Max L",
			ep: 478,
			e: 478
		}), a78.push({
			gI: "YT Drew",
			ep: 471,
			e: 485
		}), a78.push({
			gI: "Plateau E",
			ep: 485,
			e: 600
		}), a78.push({
			gI: "Uptrend A",
			ep: 600,
			e: 613
		}), a78.push({
			gI: "Max M",
			ep: 613,
			e: 613
		}), a78.push({
			gI: "Downtrend A",
			ep: 614,
			e: 635
		}), a78.push({
			gI: "Plateau F",
			ep: 636,
			e: 737
		}), a78.push({
			gI: "End of Record",
			ep: 738,
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
		a6x = Math.floor(.15 * au.jO), a73 = (a73 = Math.floor((u.v.sU() ? .018 : .0137) * au.pb)) < 2 ? 2 : a73, a3j = b7.pZ.ri(1, a73), a7C()
	}, this.a7D = function(a7E) {
		var a7;
		for (this.a79 = !0, a7 = 0; a7 < a7E.length; a7++) g.unshift(a7E[a7]);
		a7C(), bc.de = !0
	}, this.a7H = function() {
		a7G()
	}, this.zp = function(ew, ey) {
		ey > au.jO - .6 * a6x ? this.a7A ? ew !== gu && (a6w += ew - gu, gu = ew, a7G(), a7J(ew), this.a7A = -1 !== a72, bc.de = !0) : a7J(ew) && (bc.de = !0) : this.qZ()
	}, this.qZ = function() {
		-1 !== a72 && (this.a7A = !1, a72 = -1, bc.de = !0)
	}, this.zs = function(ew, deltaY) {
		-1 !== a72 && (a6w += Math.floor(deltaY), a7G(), a7J(ew), bc.de = !0)
	}, this.h3 = function(ew, ey) {
		this.zp(ew, ey), -1 !== a72 && (gu = ew, this.a7A = !0)
	}, this.a0E = function() {
		-1 !== a72 && (this.a7A = !1)
	}, this.t9 = function() {
		tA.fillStyle = b8.mq;
		for (var a7N, month, dm, rl, a7Q, a7R, mE, a7S, a7T, a7 = a71; a70 <= a7; a7--) a7L(a7);
		this.a79 && 0 === a70 && (tA.fillStyle = b8.nJ, a7L(0)), -1 !== a72 && (tA.fillStyle = b8.mp, a7L(a72)), -1 !== a72 && (tA.font = a3j, b7.pZ.textBaseline(tA, 2), (dm = new Date).setTime(a74.getTime() - 1e3 * a72 * 60 * 60 * 24), month =
			"month", a7N = "day", "undefined" != typeof Intl && (month = new Intl.DateTimeFormat("en-US", {
				month: "long"
			}).format(dm), a7N = new Intl.DateTimeFormat("en-US", {
				weekday: "long"
			}).format(dm)), a7N = a7N + ", " + dm.getUTCDate() + " " + month + " " + dm.getFullYear(), month = 1 === g[a72] ? L(96) : L(97), month = b7.z3.xY(g[a72]) + " " + month, dm = Math.floor(tA.measureText(a7N).width), rl = Math.floor(
				tA.measureText(month).width), a7Q = Math.floor(.5 * (dm + a73)), a7R = (a7R = a6w + au.a1 - (a72 + 1) * a6y) < a7Q ? a7Q : a7R > au.a1 - a7Q ? au.a1 - a7Q : a7R, mE = au.jO - Math.floor(a6z * Math.pow(g[a72], a75)), a7S = Math
			.floor(1.1 * a73), a7T = mE > au.jO - a7S ? au.jO - a7S : mE, tA.fillStyle = b8.mk, tA.fillRect(au.a1 - rl - a73, a7T - a7S, rl + a73, a7S), tA.fillRect(a7R - a7Q, au.jO - a7S, dm + a73, a7S), tA.fillStyle = b8.mn, b7.pZ
			.textAlign(tA, 2), tA.fillText(month, Math.floor(au.a1 - .5 * a73), a7T),
			function(mE, a7S) {
				for (var rk, kh = -1, e2 = g.length - a72 - 1, a7 = a78.length - 1; 0 <= a7; a7--) e2 >= a78[a7].ep && e2 <= a78[a7].e && (-1 === kh || a78[a7].e - a78[a7].ep < a78[kh].e - a78[kh].ep) && (kh = a7); - 1 !== kh && (rk = Math
					.floor(tA.measureText(a78[kh].gI).width), tA.fillStyle = b8.mk, tA.fillRect(au.a1 - rk - a73, mE, rk + a73, a7S), tA.fillStyle = b8.mn, tA.fillText(a78[kh].gI, Math.floor(au.a1 - .5 * a73), mE + a7S))
			}(a7T - 2 * a7S, a7S), b7.pZ.textAlign(tA, 1), tA.fillText(a7N, a7R, au.jO), tA.strokeStyle = b8.mr, tA.lineWidth = 1, tA.beginPath(), tA.moveTo(0, mE), tA.lineTo(au.a1, mE), tA.closePath(), tA.stroke())
	}
}

function cG() {
	var a3j, a1, ey, a7V, a7W, canvas, wW, a5A, a1k, a7X, a7Y, a7Z, a7a;
	this.ew = 0, this.jO = 0, this.dW = function() {
		a7W = a9.a2a, a7Y = "rgba(0,100,0,0.8)", a7Z = "rgba(150,0,0,0.8)", a5A = !(a7X = !0), a1k = ac.gr[a9.eZ], this.resize()
	}, this.resize = function() {
		a1 = Math.floor((u.v.sU() ? .305 : .24) * au.pb), this.jO = Math.floor(.5 + .13 * a1), a1 = Math.floor(6 * this.jO), a3j = b7.pZ.ri(1, Math.floor(.8 * this.jO)), a7a = Math.floor(.5 * this.jO), bP.uo.font = a3j, ey = bZ.gap, a7V = Math
			.floor(1 + .13 * this.jO), (canvas = document.createElement("canvas")).width = a1, canvas.height = this.jO, (wW = canvas.getContext("2d", {
				alpha: !0
			})).font = a3j, b7.pZ.textBaseline(wW, 1), b7.pZ.textAlign(wW, 1), this.a7b()
	}, this.a5X = function() {
		return u.v.sU() && au.a1 < 1.2 * au.jO
	}, this.a67 = function() {
		this.a5X() ? this.ew = au.a1 - a1 - bZ.gap : this.ew = Math.floor(aR.a7c() + (au.a1 - aR.a7c() - aS.a1 - a1) / 2 - .5 * bZ.gap)
	}, this.lX = function() {
		a5A && (a5A = !1, this.a7b())
	}, this.a7b = function() {
		wW.clearRect(0, 0, a1, this.jO), wW.fillStyle = a7X ? a7Y : a7Z, wW.fillRect(0, 0, a1, this.jO), wW.fillStyle = b8.mp, this.a7d(), this.a7e(), wW.fillStyle = ac.gr[a9.eZ] >= aa.ja(a9.eZ) ? b8.nG : b8.mn, wW.fillText(b7.z3.xY(a1k), Math
			.floor(a1 / 2), a7a), wW.fillStyle = b8.mn, wW.fillRect(0, 0, a1, 1), wW.fillRect(0, 0, 1, this.jO), wW.fillRect(0, this.jO - 1, a1, 1), wW.fillRect(a1 - 1, 0, 1, this.jO)
	}, this.a7d = function() {
		var fA = bc.jr() % 100,
			fA = (fA = 9 - bI.dn(fA -= fA % 10, 10), Math.floor(fA * (this.jO - a7V) / 9));
		wW.fillRect(0, fA, a7V, this.jO - fA), wW.fillRect(a1 - a7V, fA, a7V, this.jO - fA)
	}, this.a7e = function() {
		wW.fillRect(a7V, this.jO - a7V, Math.floor((a1 - 2 * a7V) * ac.gr[a9.eZ] / a7W), a7V)
	}, this.il = function() {
		var gN = a9.eZ;
		b7.gB.h2(gN) && (gN = ac.gr[gN] - ac.a1j[gN], a1k !== gN ? (a7W = a4K(gN, a7W), a7X = a1k < gN && 10 <= gN, a1k = gN, a5A = !0) : bc.jr() % 10 == 9 && (a5A = !0))
	}, this.t9 = function() {
		0 === ac.ll[a9.eZ] || a9.hB || 2 === ac.a1d[a9.eZ] || tA.drawImage(canvas, this.ew, ey)
	}
}

function cH() {
	var a7f, a7g, a7h, a7i, a7j, a7k, a7l, a7m, a7n, a7o, a7p, a7q, a7r, a7s, a7t, a7u, a7v, a7w, a7x, a7y, a7z, a80, position, a81, a82, a83, a84, a85 = 1,
		a86 = 1,
		a87 = "";
	var leaderboardHasChanged = true;
	this.playerPos = a9.eZ;
	__fx.leaderboardFilter.setUpdateFlag = () => leaderboardHasChanged = true;

	function updateFilteredLb() {
		if (!leaderboardHasChanged) return;
		__fx.leaderboardFilter.filteredLeaderboard = __fx.leaderboardFilter.playersToInclude
			.map(id => jf[id]).sort((a, b) => a - b);
		leaderboardHasChanged = false;
		this.playerPos = __fx.leaderboardFilter.filteredLeaderboard.indexOf(jf[a9.eZ]);
	}

	function a89() {
		a7l.clearRect(0, 0, a7f, a5n),
			a7l.fillStyle = b8.nW,
			a7l.fillRect(0, 0, a7f, a7q),
			a7l.fillStyle = b8.mj,
			a7l.fillRect(0, a7q, a7f, a5n - a7q);
		if (__fx.leaderboardFilter.enabled) updateFilteredLb();
		var playerPos = (__fx.leaderboardFilter.enabled ?
			this.playerPos :
			jf[a9.eZ]
		);
		if (__fx.leaderboardFilter.hoveringOverTabs) a80 = -1;
		if (__fx.leaderboardFilter.enabled && a80 >= __fx.leaderboardFilter.filteredLeaderboard.length) a80 = -1;
		playerPos >= position && a8B(playerPos - position, b8.nA),
			0 !== jf[a9.eZ] && 0 === position && a8B(0, b8.nb),
			-1 !== a80 && a8B(a80, b8.mo),
			a7l.fillStyle = b8.mj,
			//console.log("drawing", a80),
			a7l.clearRect(0, a5n - __fx.leaderboardFilter.tabBarOffset, a7f, __fx.leaderboardFilter.tabBarOffset);
		a7l.fillRect(0, a5n - __fx.leaderboardFilter.tabBarOffset, a7f, __fx.leaderboardFilter.tabBarOffset);
		a7l.fillStyle = b8.mn,
			a7l.fillRect(0, a7q, a7f, 1),
			a7l.fillRect(0, a5n - __fx.leaderboardFilter.tabBarOffset, a7f, 1),
			__fx.leaderboardFilter.drawTabs(a7l, a7f, a5n - __fx.leaderboardFilter.tabBarOffset, b8.nA),
			a7l.fillRect(0, 0, a7f, bZ.xH),
			a7l.fillRect(0, 0, bZ.xH, a5n),
			a7l.fillRect(a7f - bZ.xH, 0, bZ.xH, a5n),
			a7l.fillRect(0, a5n - bZ.xH, a7f, bZ.xH), a7l.font = a7g, b7.pZ.textBaseline(a7l, 1), b7.pZ.textAlign(a7l, 1), a7l.fillText(a87, Math.floor((a7f + a7q - 22) / 2), Math.floor(a7o + a7h / 2));
		__fx.playerList.drawButton(a7l, 12, 12, a7q - 22);
		var f8, gO = playerPos < position + a7j - 1 ? 1 : 2;

		if (__fx.leaderboardFilter.enabled) {
			let result = __fx.leaderboardFilter.filteredLeaderboard;
			if (position !== 0 && position >= result.length - a7j)
				position = (result.length > a7j ? result.length : a7j) - a7j;
			//if (position >= result.length) position = result.length - 1;
			for (a7l.font = a7i, b7.pZ.textAlign(a7l, 0), f8 = a7j - gO; 0 <= f8; f8--) {
				const pos = result[f8 + position];
				if (pos !== undefined)
					a8C(lC[pos]), a8D(f8, pos, lC[pos]);
			}
			for (b7.pZ.textAlign(a7l, 2), f8 = a7j - gO; 0 <= f8; f8--) {
				const pos = result[f8 + position];
				if (pos !== undefined)
					a8C(lC[pos]), a8E(f8, lC[pos]);
			}
		} else {
			for (a7l.font = a7i, b7.pZ.textAlign(a7l, 0), f8 = a7j - gO; 0 <= f8; f8--)
				a8C(lC[f8 + position]), a8D(f8, f8 + position, lC[f8 + position]);
			for (b7.pZ.textAlign(a7l, 2), f8 = a7j - gO; 0 <= f8; f8--)
				a8C(lC[f8 + position]), a8E(f8, lC[f8 + position]);
		}
		2 == gO && (a8C(a9.eZ), b7.pZ.textAlign(a7l, 0), a8D(a7j - 1, jf[a9.eZ], a9.eZ), b7.pZ.textAlign(a7l, 2), a8E(a7j - 1, a9.eZ)), 0 === position && (gO = .7 * a7r / aX.get(4).height, a7l.setTransform(gO, 0, 0, gO, Math.floor(a7s + .58 * a7r +
			.5 * gO * aX.get(4).width), Math.floor(a7o + a7h + .4 * a7r)), a7l.imageSmoothingEnabled = !0, a7l.drawImage(aX.get(4), -Math.floor(aX.get(4).width / 2), -Math.floor(aX.get(4).height / 2)), a7l.setTransform(1, 0, 0, 1, 0, 0))
	}

	function a8C(player) {
		a9.ix && (a7l.fillStyle = bd.a8G[bd.kK[bd.en[player]]])
	}

	function a8B(a7, a8H) {
		a7l.fillStyle = a8H, a7 = a7j - 1 < a7 ? a7j - 1 : a7;
		a8H = Math.floor((a7 === a7j - 1 ? 2 : 0 === a7 ? 1.15 : 1) * a7r), a8H = a7 === a7j - 2 ? Math.floor(a7q + 9.15 * a7r) - Math.floor(a7q + 8.15 * a7r) : a8H;
		a7l.fillRect(0, Math.floor(a7q + (a7 + (0 === a7 ? 0 : .15)) * a7r), a7f, a8H)
	}

	function a8D(a8J, yt, a7) {
		a7l.fillText(a7w[yt], a7s, Math.floor(a7o + a7h + (a8J + .5) * a7r)), 1 === ac.a1d[a7] && (a7l.font = "italic " + a7i);
		yt = Math.floor(a7o + a7h + (a8J + .5) * a7r);
		a7l.fillText(ac.a4T[a7], a7t, yt), 0 !== ac.a1d[a7] && (a7l.font = a7i), a7 < a9.ju && 2 !== ac.a1d[a7] || a7l.fillRect(a7t, yt + .35 * a85, a7v[a7], Math.max(1, .1 * a85))
	}

	function a8E(a8J, a7) {
		a7l.fillText(ac.gd[a7], a7u, Math.floor(a7o + a7h + (a8J + .5) * a7r))
	}

	function a8S(ey) {
		return (ey -= bZ.gap + a7q) < 0 ? Math.floor(ey / a7r) - 1 : ey < (a7j - 1) * a7r ? Math.floor(ey / a7r) : ey < a5n - a7q ? a7j - 1 : (ey -= a5n - a7q, a7j + Math.floor(ey / a7r))
	}

	function xG(ew, ey) {
		return ew >= bZ.gap && ew < bZ.gap + a7f && ey >= bZ.gap && ey < bZ.gap + a5n
	}
	this.dW = function() {
			var a7;
			for (a82 = !1, a84 = a83 = a81 = 0, a80 = -1, a7j = u.v.sU() ? 6 : 10, a86 = (position = 0) === (a86 = bg.dr.data[11].value) ? 10 : 1 === a86 ? 5 : 1, a7z = !1, a7x = new Uint16Array(a7j + 1), a7y = new Uint32Array(a7j + 1), a7n = a9.em,
				lC = new Uint16Array(a7n), jf = new Uint16Array(a7n), a7 = a7n - 1; 0 <= a7; a7--) lC[a7] = a7, jf[a7] = a7;
			this.resize(!0), a7v = new Uint16Array(a9.em);
			var a88 = Math.floor(a7f - a7t - a7s - a7m);
			for (a7w = new Array(a9.em), a7l.font = a7i, a7 = a9.em - 1; 0 <= a7; a7--) a7w[a7] = a7 + 1 + ".", ac.a4T[a7] = b7.wW.a1J(ac.z5[a7], a7i, a88), a7v[a7] = Math.floor(a7l.measureText(ac.a4T[a7]).width);
			a89()
		}, this.resize = function(dW) {
			if (a5n = u.v.sU() ? (a7f = Math.floor(.335 * au.pb), Math.floor(a7j * a7f / 8)) : (a7f = Math.floor(.27 * au.pb), Math.floor(a7j * a7f / 10)), a7f = Math.floor(.97 * a7f), (a7k = document.createElement("canvas")).width = a7f, a7k
				.height = a5n, a7l = a7k.getContext("2d", {
					alpha: !0
				}), a7o = .025 * a7f, a7h = .16 * a7f, a7p = 0 * a7f, a7q = Math.floor(.45 * a7o + a7h), a7r = (a5n - a7h - 2 * a7o - a7p) / a7j,
				a7k.height = a5n += a7r, __fx.leaderboardFilter.tabBarOffset = Math.floor(a7r * 1.3), __fx.leaderboardFilter.verticalClickThreshold = a5n - __fx.leaderboardFilter.tabBarOffset, __fx.leaderboardFilter.windowWidth = a7f,
				a7g = b7.pZ.ri(1, Math.floor(.55 * a7h)), a85 = Math.floor((u.v.sU() ? .67 : .72) * a7r), a7i = b7.pZ.ri(0, a85), a7l.font = a7i, a7s = Math.floor(.04 * a7f), a7t = Math.floor((u.v.sU() ? .195 : .18) * a7f), a7m = Math.floor(a7l
					.measureText("00920600").width), a7l.font = a7g, a7u = a7f - a7s, !dW) {
				a7l.font = a7i;
				for (var a7 = a9.em - 1; 0 <= a7; a7--) a7v[a7] = Math.floor(a7l.measureText(ac.a4T[a7]).width);
				a89()
			}
			a87 = b7.wW.a1J(L(98), a7g, .96 * a7f)
		}, this.a7c = function() {
			return a7f
		}, this.lX = function(bp, a8A) {
			(a8A || a7z && (bp || bc.jr() % a86 == 0)) && (a7z = !1, a89())
		}, this.il = function() {
			! function() {
				for (var f8 = a7n - 1; 0 <= f8; f8--) 0 === ac.ll[lC[f8]] && ! function(f8) {
					var a8Q = lC[f8];
					a7n--;
					for (var a7 = f8; a7 < a7n; a7++) lC[a7] = lC[a7 + 1], jf[lC[a7]] = a7;
					lC[a7n] = a8Q, jf[lC[a7n]] = a7n
				}(f8)
			}();
			for (var a8O, mV = a7n - 1, f8 = 0; f8 < mV; f8++) ac.gd[lC[f8]] < ac.gd[lC[f8 + 1]] && (a8O = lC[f8], lC[f8] = lC[f8 + 1], lC[f8 + 1] = a8O, jf[lC[f8]] = f8, jf[lC[f8 + 1]] = f8 + 1);
			! function() {
				for (var dm = a7z, gO = (a7z = !0, jf[a9.eZ] >= a7j - 1 ? a7j - 2 : a7j - 1), a7 = gO; 0 <= a7; a7--)
					if (a7x[a7] !== lC[a7] || a7y[a7] !== ac.gd[lC[a7]]) return;
				(gO != a7j - 2 || a7x[a7j] === jf[a9.eZ] && a7y[a7j] === ac.gd[a9.eZ]) && (a7z = dm)
			}();
			for (var a7 = a7j - 1; 0 <= a7; a7--) a7x[a7] = lC[a7], a7y[a7] = ac.gd[lC[a7]];
			a7x[a7j] = jf[a9.eZ], a7y[a7j] = ac.gd[a9.eZ];
			leaderboardHasChanged = true;
		}, __fx.leaderboardFilter.scrollToTop = function() {
			position = 0;
		}, this.h3 = function(ew, ey) {
			return !!xG(ew, ey) && ((__fx.utils.isPointInRectangle(ew, ey, bZ.gap + 12, bZ.gap + 12, a7q - 22, a7q - 22) && __fx.playerList.display(ac.z5), true) &&
				!(ey - bZ.gap > __fx.leaderboardFilter.verticalClickThreshold && __fx.leaderboardFilter.handleMouseDown(ew - bZ.gap)) && (a81 = bc.eO, a82 = !0, a83 = a84 = a8S(ey), bG.a0T() && (ew = a6T(-1, a84, a7j), a80 !== (ew = ew === a7j ?
					-1 : ew)) && (a80 = ew, a89(), bc.de = !0)), !0)
		}, __fx.leaderboardFilter.repaintLeaderboard = function() {
			a89(), bc.de = !0;
		},
		this.zp = function(ew, ey) {
			if (__fx.utils.isPointInRectangle(ew, ey, bZ.gap + 12, bZ.gap + 12, a7q - 22, a7q - 22)) {
				__fx.playerList.hoveringOverButton === false && (__fx.playerList.hoveringOverButton = true, a89(), bc.de = !0);
			} else {
				__fx.playerList.hoveringOverButton === true && (__fx.playerList.hoveringOverButton = false, a89(), bc.de = !0);
			}
			if (__fx.leaderboardFilter.setHovering(
					__fx.utils.isPointInRectangle(ew, ey, bZ.gap, bZ.gap + __fx.leaderboardFilter.verticalClickThreshold, __fx.leaderboardFilter.windowWidth, __fx.leaderboardFilter.tabBarOffset), ew - bZ.gap
				)) return;
			var dm, a8R = a8S(ey);
			return a82 ? (dm = position, (position = a6T(0, position += a83 - a8R, a9.em - a7j)) !== dm && (a8R = (a8R = a6T(-1, a83 = a8R, a7j)) !== a7j && xG(ew, ey) ? a8R : -1, a80 = a8R, a89(), bc.de = !0), !0) : (a8R = (a8R = a6T(-1, a8R,
				a7j)) === a7j || !xG(ew, ey) || bG.a0T() ? -1 : a8R, a80 !== a8R && (a80 = a8R, a89(), bc.de = !0))
		}, this.a0E = function(ew, ey) {
			if (!a82) return !1;
			a82 = !1;
			var a8R = a8S(ey);
			var isEmptySpace = false;
			return bG.a0T() && -1 !== a80 && (a80 = -1, a89(), bc.de = !0), bc.eO - a81 < 350 && a84 === a8R && -1 !== (a8R = (a8R = a6T(-1, a8R, a7j)) !== a7j && xG(ew, ey) ? a8R : -1) && (ew = (__fx.leaderboardFilter.enabled ? (updateFilteredLb(),
					lC[__fx.leaderboardFilter.filteredLeaderboard[a8R + position] ?? (isEmptySpace = true, jf[a9.eZ])]) : lC[a8R + position]), a8R === a7j - 1 && (__fx.leaderboardFilter.enabled ? this.playerPos : jf[a9.eZ]) >=
				position + a7j - 1 && (ew = a9.eZ), !isEmptySpace && a9.ix && __fx.donationsTracker.displayHistory(ew, ac.z5, a9.kG), 0 !== ac.ll[ew] && !isEmptySpace) && aD.m7(ew, 800, !1, 0), !0
		}, this.zs = function(ew, ey, deltaY) {
			var a8T;
			return !(a82 || a9.mG || (a8T = Math.max(Math.floor(Math.abs(deltaY) / 40), 1), !xG(ew, ey)) || (ew = (ew = a6T(-1, a8S(ey), a7j)) === a7j || bG.a0T() ? -1 : ew, 0 < deltaY ? position < a9.em - a7j && (position += Math.min(a9.em - a7j -
				position, a8T), a80 = ew, a89(), bc.de = !0) : 0 < position && (position -= Math.min(position, a8T), a80 = ew, a89(), bc.de = !0), 0))
		}, this.t9 = function() {
			tA.drawImage(a7k, bZ.gap, bZ.gap)
		}
}

function cI() {
	var canvas, wW, ew, ey, a57, a8U, gap, a8V, fontSize, a8W, a8X, a8Y, a8Z, a8a, a8b, a8c, a8d, a8e;

	function a8i() {
		wW.clearRect(0, 0, aS.a1, aS.jO), wW.fillStyle = b8.mk, wW.fillRect(0, 0, aS.a1, aS.jO), wW.fillStyle = b8.n5, eT = 0 < a8c ? a8c : Math.sqrt(a8Z[4] / 1e4), wW.fillRect(0, aS.jO - a57 - 1, Math.floor(eT * aS.a1), a57), wW.fillStyle = b8.mn,
			wW.fillRect(0, 0, aS.a1, 1), wW.fillRect(0, 0, 1, aS.jO), wW.fillRect(aS.a1 - 1, 0, 1, aS.jO), wW.fillRect(0, aS.jO - 1, aS.a1, 1), wW.fillRect(0, aS.jO - a57 - 1, aS.a1, 1);
		for (var eT, a8k, dm = 0, a7 = 0; a7 < a8Y.length; a7++) a8a[a7] ? (b7.pZ.textAlign(wW, 0), a8k = Math.floor((a8U - a57 + 2 * a8V) * (a7 - dm + 1) / (a8Y.length + 1) - .7 * a8V), wW.fillText(a8Y[a7], gap, a8k), b7.pZ.textAlign(wW, 2), 5 ===
			a7 && 0 !== ac.ll[a9.eZ] && ac.gr[a9.eZ] >= aa.ja(a9.eZ) ? (wW.fillStyle = b8.nZ, wW.fillText(a8g(a7), aS.a1 - gap, a8k), wW.fillStyle = b8.mn) : wW.fillText(a8g(a7), aS.a1 - gap, a8k)) : dm++
	}

	function a8g(a7) {
		return a7 < 3 ? a8Z[a7].toString() : 3 === a7 || 4 === a7 || 5 === a7 ? b7.z3.a2E(a8Z[a7] / 100, 2) : a7 < 7 ? b7.z3.xY(a8Z[a7]) : a7 === 7 ? aS.a8l(a8Z[7]) : a7 === 8 ? __fx.utils.getMaxTroops(ac.gd, a9.eZ) : __fx.utils.getDensity(a9.eZ)
	}

	function a8f() {
		ac.gd[a9.eZ] !== a8Z[6] && (a8Z[6] = ac.gd[a9.eZ], a8W++)
	}
	this.dW = function() {
		a8c = a8d = 0, (a8X = new Array(8))[0] = L(99), a8X[1] = a9.kG ? L(100) : L(101), a8X[2] = L(102), a8X[3] = L(103), a8X[4] = L(104), a8X[5] = L(105, 0, "Interest"), a8X[6] = L(106), a8X[7] = L(107),
			a8X.push("Max Troops", "Density"), // add a8X
			(a8Y = new Array(a8X.length)).fill(""), (a8Z = new Array(a8X.length))[0] = a9.kG ? 0 : a9.ju, a8Z[1] = a9.kG ? ah.jv : a9.kI, a8Z[2] = a9.yH, a8Z[3] = 0, a8Z[4] = bI.dn(1e4 * ac.gd[0], Math.max(a9.je, 1)), a8Z[5] = 0 === a9.data
			.iIncomeType ? 700 : 1 === a9.data.iIncomeType ? bI.dn(700 * a9.data.iIncomeValue, 64) : bI.dn(700 * a9.data.iIncomeData[a9.eZ], 64), a8Z[6] = 0, a8f(), a8Z[7] = 0, a8b = a8g(6), a8a = new Array(a8X.length);
		for (var a7 = a8X.length - 1; 0 <= a7; a7--) a8a[a7] = !0;
		a8e = 0, a8e = a9.kG ? (a8a[0] = !1, a8a[2] = !1, a8a[3] = !1, 3) : (a8a[3] = !1, 1), a8W = 0, this.resize()
	}, this.resize = function() {
		this.a1 = Math.floor((u.v.sU() ? .1646 : .126) * 1.25 * au.pb), this.jO = Math.floor(1.18 * this.a1), a57 = Math.floor(.04 * this.a1), gap = Math.floor(.035 * this.a1), a8V = .04 * this.a1, a8U = this.jO, this.jO -= Math.floor(a8e * (this
			.jO - 2 * a57) / a8X.length), fontSize = Math.floor(.7 * (a8U - a57) / a8X.length);
		var a3j = b7.pZ.ri(1, fontSize);
		(canvas = document.createElement("canvas")).width = this.a1, canvas.height = this.jO,
			function(a3j, a1) {
				for (var a7 = 0; a7 < a8Y.length; a7++) a8Y[a7] = b7.wW.a1J(a8X[a7], a3j, a1)
			}((wW = canvas.getContext("2d", {
				alpha: !0
			})).font = a3j, .575 * this.a1), b7.pZ.textBaseline(wW, 1), wW.lineWidth = 1, this.a2T(), this.a67(), aQ.a67(), a8i()
	}, this.a67 = function() {
		ew = au.a1 - this.a1 - bZ.gap
	}, this.a8j = function() {
		ey = bZ.gap
	}, this.a2T = function() {
		ey = bZ.gap + (aQ.a5X() && 0 !== ac.ll[a9.eZ] && !a9.hB ? aQ.jO + bZ.gap : 0)
	}, this.lX = function(bp) {
		(bp || 100 <= a8W) && (a8W = 0, a8i())
	}, this.a3N = function() {
		return a8Z[7]
	}, this.a8l = function(value) {
		var kf = Math.floor(value / 1e3 / 60),
			value = Math.floor((value - 6e4 * kf) / 1e3);
		return value < 10 ? kf + ":0" + value : kf + ":" + value
	}, this.il = function() {
		var a8u, per;
		a8a[0] && a9.yI - a9.yH !== a8Z[0] && (a8Z[0] = a9.yI - a9.yH, a8W++), ah.jv - a8Z[0] !== a8Z[1] && (a8Z[1] = ah.jv - a8Z[0], a8W++), this.lP(), (a8u = aa.a8v(a9.eZ)) !== a8Z[5] && (a8Z[5] = a8u, a8W++), a8f(), a8Z[7] += bc.a8w, a8u =
			a8g(7), a8b !== a8u && (a8b = a8u, a8W += 100), a8u = a9.ix ? be.yo() : ac.gd[lC[0]], per = bI.dn(1e4 * a8u, Math.max(a9.je, 1)), a8Z[3] = a8u, a8Z[4] !== per && (a8W++, a8Z[4] = per), 8 === a9.kE && function() {
				for (var a7 = 0; a7 < 2; a7++)
					if (!b7.gB.h2(a7)) return bO.xt.yE(), 1;
				return
			}() || a8Z[3] < a9.je || ! function() {
				for (var a7 = ah.jv - 1; 0 <= a7; a7--)
					if (0 < ac.gH[ah.jx[a7]].length) return;
				return 1
			}() || bO.xt.yE()
	}, this.lP = function() {
		a8a[2] && a9.yH !== a8Z[2] && (a8Z[2] = a9.yH, a8W++)
	}, this.a8x = function(a7) {
		var rx, a8y, dm;
		return 2 !== a9.yF && (a7 % 2 == 1 && (aR.lX(1, 1), bc.de = !0), a7 === a9.a2c ? (a8c = 0, a8i(), !1) : (-1 !== a7 || 0 !== a8d) && (a8y = a8c, a8c = a9.gz ? a7 / a9.a2c : (dm = performance.now(), 0 <= a7 && (rx = dm - 392 * a7, a8d =
			0 === a7 || rx < a8d ? rx : a8d), 1 < (a8c = (dm - a8d) / (392 * a9.a2c)) ? 1 : a8c), a8i(), a8c !== a8y))
	}, this.t9 = function() {
		tA.drawImage(canvas, ew, ey)
	}
}

function cJ() {
	var wp, a8z, a1, jO, a6D, a90, a91, a5Y, canvas, ly, a92;

	function wS() {
		return Math.floor((au.a1 - a1) / 2) < aN.jO + 2 * bZ.gap ? au.jO - jO - 4 * bZ.gap - aN.jO : au.jO - jO - 2 * bZ.gap
	}
	this.dW = function() {
		a92 = wp = !1, a6D = .61, a90 = .07, a91 = .09, ly = a5Y = jO = 0
	}, this.resize = function() {
		var wW, mD, fA, a97, a98, a3o;
		wp && (a1 = a93(a1 = u.v.sU() ? Math.floor(.69 * au.pb) : Math.floor(.5 * au.pb), a4K(au.a1 - 2 * bZ.gap, 10)), a1 = a93(a1, Math.floor(3.57 * a4K(au.jO - 2 * bZ.gap, 3))), jO = Math.floor(.28 * a1), (canvas = document.createElement(
			"canvas")).width = a1, canvas.height = jO, wW = canvas.getContext("2d", {
			alpha: !0
		}), mD = Math.floor(1 + jO / 40), wW.clearRect(0, 0, a1, jO), wW.fillStyle = b8.mk, wW.fillRect(mD, mD, a1 - 2 * mD, jO - 2 * mD), wW.lineJoin = "bevel", wW.lineWidth = 2 * mD, wW.strokeStyle = b8.mn, wW.strokeRect(mD, mD, a1 -
			2 * mD, jO - 2 * mD), wW.imageSmoothingEnabled = !1, fA = aX.get(a8z), a97 = fA.width, a3o = (1 === a8z ? .85 : 21 === a8z ? .666 : .9) * a6D * jO / (a98 = fA.height), wW.setTransform(a3o, 0, 0, a3o, Math.floor((a1 - a3o *
			a97) / 2), Math.floor((jO - a3o * a98) / 2)), wW.drawImage(fA, 0, 0), wW.setTransform(1, 0, 0, 1, Math.floor(a1 - a91 * jO - a90 * jO - mD), Math.floor(mD + a90 * jO)), function(wW, ep) {
			wW.lineWidth = Math.floor(1 + jO / 80), wW.strokeStyle = b8.mn, wW.beginPath(), wW.moveTo(0, 0), wW.lineTo(ep, ep), wW.moveTo(0, ep), wW.lineTo(ep, 0), wW.stroke()
		}(wW, Math.floor(a91 * jO)), wW.setTransform(1, 0, 0, 1, 0, 0))
	}, this.show = function(fH, a95, a60, a96) {
		wp || a96 && a92 || (a8z = a60 ? 21 : fH ? 1 : 2, wp = a92 = !0, this.resize(), aH.qt(), aN.a5x(), ly = bc.eO, a5Y = a95 ? 1 : 0)
	}, this.il = function() {
		!wp || 1 <= a5Y || (a5Y = 1 < (a5Y += 5e-4 * (bc.eO - ly)) ? 1 : a5Y, ly = bc.eO, bc.de = !0)
	}, this.h3 = function(ew, ey) {
		return !(!wp || a5Y <= 0 || (ew -= Math.floor((au.a1 - a1) / 2), ey -= wS(), ew < 0) || ey < 0 || a1 < ew || jO < ey || (a1 - jO / 3 < ew && ey < jO / 3 && (wp = !1, bc.de = !0), 0))
	}, this.t9 = function() {
		!wp || a5Y <= 0 || (tA.globalAlpha = a5Y, tA.drawImage(canvas, Math.floor((au.a1 - a1) / 2), wS()), tA.globalAlpha = 1)
	}
}

function dI() {
	var a9A = [0, 0],
		a9B = [0, 0];

	function a9E(e2) {
		return 3 !== a9A[e2] && 1 !== a9B[e2] && (a9B[e2] = 1, a9A[e2]++, bg.r3.r4(119, (a9A[0] << 2) + a9A[1]), 1)
	}
	this.a9C = new a9D, this.dW = function() {
		var fH = bg.dr.data[119].value;
		a9A[0] = fH >> 2, a9A[1] = 3 & fH
	}, this.a2n = function() {
		this.a9C.dW()
	}, this.il = function() {
		this.a9C.il()
	}, this.a3O = function() {
		a9E(0) && aJ.a4Q(L(108))
	}, this.a3P = function() {
		a9E(1) && aJ.a4Q(L(109))
	}
}

function a9D() {
	var a9F;
	this.dW = function() {
		a9F = !1
	}, this.il = function() {
		var gN;
		if (function() {
				if (!a9F) {
					if (bc.jr() % 30 != 9) return;
					if (!b7.gB.l5(90)) return;
					a9F = !0
				}
				return 1
			}() && (! function() {
				var pR = aJ.a4m(956);
				if (pR) {
					if (b7.gB.kj(pR.player)) return 1;
					aJ.a3V(956, 0)
				}
				return
			}() && (-1 === (gN = (a9.ix ? function() {
				var id = be.l9(),
					ep = ah.jv;
				if (bd.kK[id])
					for (var y6 = ah.jx, en = bd.en, a7 = 0; a7 < ep; a7++) {
						var gN = y6[a7];
						if (en[gN] !== id) return gN
					} else if (1 < ep) return lC[ep - 1];
				return -1
			} : function() {
				for (var a9N = ah.jv, jw = ah.jx, a9O = jf, a7 = 0; a7 < a9N; a7++) {
					var gN = jw[a7];
					if (0 !== a9O[gN]) return gN
				}
				return -1
			})()) ? ! function() {
				var pR = aJ.a4m(957);
				if (pR && pR.a4G) {
					if (aY.eg(pR.a4G.eb << 2)) return 1;
					aJ.a3V(957, 0)
				}
				return
			}() : (aJ.yd(0, L(110, [ac.a4T[gN]]), 956, gN, b8.mn, b8.mk, -1, !0), 0)))) {
			var ep = aj.iW.kv;
			if (0 === ep) aj.iW.lK();
			else
				for (var dr = aj.iW.dr, a7 = 0; a7 < ep; a7++) {
					var eb = dr[a7];
					if (aY.eg(eb << 2)) return void aJ.yd(0, L(111, [bJ.ex(eb), bJ.ez(eb)]), 957, 0, b8.mn, b8.mk, -1, !0, void 0, {
						f8: 1,
						eb: eb
					})
				}
		}
	}
}

function dJ() {
	this.a9P = new a9Q, this.dW = function() {
		this.a9P.resize()
	}
}

function a9Q() {
	this.resize = function() {
		var a7, a9R = document.head.querySelector("style#ss");
		if (a9R)
			for (a7 = a9R.sheet.cssRules.length - 1; 0 <= a7; a7--) a9R.sheet.deleteRule(0);
		else(a9R = document.createElement("style")).id = "ss", document.head.appendChild(a9R);
		var a6L = "::-webkit-scrollbar",
			a9S = b7.pZ.pk(bZ.a1S),
			hS = b7.pZ.pk(Math.max(b7.pZ.qv(.012), 8));
		try {
			a9R.sheet.insertRule(a6L + "{width:" + hS + ";height:" + hS + ";}", a9R.sheet.cssRules.length), a9R.sheet.insertRule(a6L + "-thumb{background-color:white;}", a9R.sheet.cssRules.length), a9R.sheet.insertRule(a6L +
				"-track{background:" + b8.mj + ";}", a9R.sheet.cssRules.length), a9R.sheet.insertRule(a6L + "-track:horizontal{border-top:" + a9S + " solid white;}", a9R.sheet.cssRules.length), a9R.sheet.insertRule(a6L +
				"-track:vertical{border-left:" + a9S + " solid white;}", a9R.sheet.cssRules.length), a9R.sheet.insertRule(a6L + "-button{display:none;}", a9R.sheet.cssRules.length)
		} catch (e) {
			for (console.log("error 3425: " + e), a7 = a9R.sheet.cssRules.length - 1; 0 <= a7; a7--) a9R.sheet.deleteRule(0)
		}
	}
}

function dH() {
	this.a9T = !1, this.md = !1, this.a2X = !1, this.a9U = [0, 0, 0, 0], this.a9V = function() {
		var mD, mE, mQ, mR;
		this.a2X = this.a2X || this.md, (this.md || this.a9T && this.a2X) && (mD = bX.a9W[0], mE = bX.a9W[1], mQ = bX.a9W[2], mR = bX.a9W[3], mD = mD < this.a9U[0] ? this.a9U[0] : mD, mE = mE < this.a9U[1] ? this.a9U[1] : mE, mQ = mQ > this.a9U[
				2] ? this.a9U[2] : mQ, mR = mR > this.a9U[3] ? this.a9U[3] : mR, this.md = !1, this.a9T = !1, mD === this.a9U[0] && mE === this.a9U[1] && mQ === this.a9U[2] && mR === this.a9U[3] ? this.a2Y() : mD <= mQ && mE <= mR && a2p
			.putImageData(a2q, 0, 0, mD, mE, mQ - mD + 1, mR - mE + 1))
	}, this.a2Y = function() {
		this.a2X && this.a9U[2] >= this.a9U[0] && this.a9U[3] >= this.a9U[1] && a2p.putImageData(a2q, 0, 0, this.a9U[0], this.a9U[1], this.a9U[2] - this.a9U[0] + 1, this.a9U[3] - this.a9U[1] + 1), this.a2X = !1
	}, this.yQ = function() {
		this.a9U[2] >= this.a9U[0] && this.a9U[3] >= this.a9U[1] && a2p.putImageData(a2q, 0, 0, this.a9U[0], this.a9U[1], this.a9U[2] - this.a9U[0] + 1, this.a9U[3] - this.a9U[1] + 1), this.a2X = !1
	}, this.dW = function() {
		var ew, ey;
		this.a9T = !1, this.md = !1, this.a2X = !1, this.a9U[0] = bP.f0, this.a9U[1] = bP.f1, this.a9U[2] = this.a9U[3] = 0;
		loop: for (ew = 1; ew < bP.f0 - 1; ew++)
			for (ey = bP.f1 - 2; 1 < ey; ey--)
				if (1 === a9X[aY.w1(ew, ey) + 2]) {
					this.a9U[0] = ew;
					break loop
				} loop: for (ey = 1; ey < bP.f1 - 1; ey++)
			for (ew = bP.f0 - 2; 1 < ew; ew--)
				if (1 === a9X[aY.w1(ew, ey) + 2]) {
					this.a9U[1] = ey;
					break loop
				} loop: for (ew = bP.f0 - 2; 0 < ew; ew--)
			for (ey = bP.f1 - 2; 1 < ey; ey--)
				if (1 === a9X[aY.w1(ew, ey) + 2]) {
					this.a9U[2] = ew;
					break loop
				} loop: for (ey = bP.f1 - 2; 0 < ey; ey--)
			for (ew = bP.f0 - 2; 1 < ew; ew--)
				if (1 === a9X[aY.w1(ew, ey) + 2]) {
					this.a9U[3] = ey;
					break loop
				}
	}
}

function L(value, a9Y, tc) {
	var pG = "number" == typeof value ? b4.a9Z[value] : value;
	if (tc && b4.a9a() && (pG = tc), a9Y)
		for (var ep = a9Y.length, a7 = 0; a7 < ep; a7++)
			for (var f8 = 0; f8 < 3; f8++) pG = pG.replace("{" + (10 * f8 + a7) + "}", a9Y[a7]);
	return pG
}

function bx() {
	this.data = new a9b;
	var a9c = (new a9d).L84,
		a9e = (this.a9Z = a9c, !1);
	this.dW = function() {
		var ep, g;
		a9e = !1, "en" !== bg.dr.data[12].value.split("-")[0].toLowerCase() ? bg.dr.data[12].value === bg.dr.data[145].value && 0 < bg.dr.data[146].value && (ep = bg.dr.data[146].value, (g = bg.ps.ti(ep, !1)).length === ep) && !!b7.pj.a0z(g) &&
			function(g) {
				var ep = g.length,
					a9k = bg.ps.ti(ep, !0);
				if (ep !== a9k.length) return !1;
				if (!b7.pj.a0z(a9k)) return !1;
				for (var kf = a9c.length, a7E = new Array(kf), a9l = kf === ep, gI = Math.min(ep, kf), a7 = 0; a7 < kf; a7++)
					if (a7E[a7] = a9c[a7], a7 < ep && a9k[a7] === a7E[a7]) a7E[a7] = g[a7];
					else {
						a9l = !1;
						for (var f9 = 0; f9 < gI; f9++)
							if (a9k[f9] === a7E[a7]) {
								a7E[a7] = g[f9];
								break
							}
					} return b4.a9Z = a7E, a9l
			}(g) || (a9e = !0) : b4.a9Z = a9c
	}, this.dY = function() {
		bd.dX(), aA.dX(), bb.dX(), ba.dX(), aK.dW(), bm = new dt
	}, this.a9a = function() {
		return this.a9Z === a9c || !a9c.length
	}, this.a9m = function() {
		var a9n;
		a9e && (a9e = !1, 0 !== a9c.length) && (a9n = bg.dr.data[12].value, ax.a9o.a9p(0, a9n.slice(0, 20)))
	}, this.a9q = function(g) {
		g.length === a9c.length && (this.a9Z = g, bg.r3.r4(145, bg.dr.data[12].value), bg.r3.r4(146, g.length), bg.ps.to(g, !1), bg.ps.to(a9c, !0), 0 === aW.zS()) && 5 === n.rc && n.s.a9r()
	}
}

function a9b() {
	var g = ["aa", "ab", "ace", "ach", "af", "ak", "alz", "am", "ar", "as", "av", "awa", "ay", "az", "ba", "bal", "ban", "bbc", "bci", "be", "bem", "ber", "ber-Latn", "bew", "bg", "bho", "bik", "bm", "bm-Nkoo", "bn", "bo", "br", "bs", "bts", "btx",
		"bua", "ca", "ce", "ceb", "cgg", "ch", "chk", "chm", "ckb", "cnh", "co", "crh", "crs", "cs", "cv", "cy", "da", "de", "din", "doi", "dov", "dv", "dyu", "dz", "ee", "el", "en", "eo", "es", "et", "eu", "fa", "fa-AF", "ff", "fi", "fil", "fj",
		"fo", "fon", "fr", "fur", "fy", "ga", "gaa", "gd", "gl", "gn", "gom", "gu", "gv", "ha", "haw", "he", "hi", "hil", "hmn", "hr", "hrx", "ht", "hu", "hy", "iba", "id", "ig", "ilo", "is", "it", "iw", "ja", "jam", "jv", "jw", "ka", "kac",
		"kek", "kg", "kha", "kk", "kl", "km", "kn", "ko", "kr", "kri", "ktu", "ku", "kv", "ky", "la", "lb", "lg", "li", "lij", "lmo", "ln", "lo", "lt", "ltg", "luo", "lus", "lv", "mad", "mai", "mak", "mam", "mfe", "mg", "mh", "mi", "min", "mk",
		"ml", "mn", "mni-Mtei", "mr", "ms", "ms-Arab", "mt", "mwr", "my", "nb", "ndc-ZW", "ne", "new", "nhe", "nl", "no", "nr", "nso", "nus", "ny", "oc", "om", "or", "os", "pa", "pa-Arab", "pag", "pam", "pap", "pl", "ps", "pt", "pt-PT", "qu",
		"rn", "ro", "rom", "ru", "rw", "sa", "sah", "scn", "sd", "se", "sg", "sh", "shn", "si", "sk", "sl", "sm", "sn", "so", "sq", "sr", "ss", "st", "su", "sus", "sv", "sw", "szl", "ta", "tcy", "te", "tet", "tg", "th", "ti", "tiv", "tk", "tl",
		"tn", "to", "tpi", "tr", "trp", "ts", "tt", "tum", "ty", "tyv", "udm", "ug", "uk", "ur", "uz", "ve", "vec", "vi", "war", "wo", "xh", "yi", "yo", "yua", "yue", "zap", "zh", "zh-CN", "zh-TW", "zu"
	];
	this.a9s = function() {
		for (var a9t = [], ep = g.length, a7 = 0; a7 < ep; a7++) a9t.push(g[a7]);
		for (ep++, a9t.unshift(bg.dr.data[12].tc), a7 = 1; a7 < ep; a7++)
			if (a9t[a7] === a9t[0]) {
				a9t.splice(a7, 1), ep--;
				break
			} try {
			if ("undefined" == typeof Intl) return a9t;
			for (a7 = 0; a7 < ep; a7++) {
				var pG = new Intl.DisplayNames([a9t[a7]], {
					type: "language"
				}).of(a9t[a7]);
				pG !== a9t[a7] && (a9t[a7] = a9t[a7] + ": " + pG)
			}
		} catch (e) {
			console.log("error 3646: " + e)
		}
		return a9t
	}, this.a9v = function(a9w) {
		for (var pG = bg.dr.data[12].value, ep = a9w.length, a7 = 0; a7 < ep; a7++)
			if (pG === a9w[a7].split(":")[0]) return a7;
		return 0
	}
}

function a9d() {
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
		"A neutral pixel at position ({10}, {11}) still needs to be conquered!", "Moderation Actions", "Report User", "Loading", "White Arena", "Black Arena", "Island", "Mountains", "Desert", "Swamp", "White Plains", "Cliffs", "Pond", "Halo",
		"Europe", "World", "Caucasia", "Africa", "Middle East", "Scandinavia", "North America", "South America", "Asia", "Australia", "Island Kingdom", "Refresh", "Public Profile", "🧈 Gold", "Account Balance: ",
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
		"Magenta", "Cyan", "White", "Black", "Ship launched!", "Ship selected!", "Ship on the way!", "Maps"
	]
}

function dc() {
	var ew, ey, jO, sV, a9x, a9y, a9z, aA0, aA1, a1, a1Z, aA2;
	this.wp = !1, this.dW = function(pG, aA3) {
		if (1 === u.id && 13 <= u.fI && u.fI < 18) return aA3 ? void(a1Z = pG) : a1Z !== pG ? void 0 : void u.tg.saveString(200, pG);
		aA3 && (a1Z = pG, (aA2 = document.createElement("a")).appendChild(document.createTextNode(a1Z)), this.wp = !0, aA2.title = a1Z, aA2.target = "_blank", aA2.href = a1Z, aA2.style.textAlign = "center", aA2.style.color = b8.mn, aA2.style
			.position = "absolute", aA2.style.padding = "0px", aA2.style.margin = "0px", this.resize(), document.body.appendChild(aA2), bc.de = !0)
	}, this.qt = function() {
		return !(!this.wp || (document.body.removeChild(aA2), this.wp = !1))
	}, this.h3 = function(hu, hv) {
		return !!this.wp && ((hu < ew || hv < ey || ew + a1 < hu || ey + jO < hv || ew + a1 - sV < hu && hv < ey + sV) && (bc.de = !0, this.wp = !1, document.body.removeChild(aA2)), !0)
	}, this.resize = function() {
		var a3j, aA4;
		this.wp && (aA0 = Math.floor(.8 * (u.v.sU() ? au.a1 > au.jO ? .6 : .55 : .4) * au.pb), sV = Math.floor(.15 * aA0), a9x = Math.floor(.35 * sV), a9y = Math.floor(.5 * sV), a9z = Math.floor(2.5 * a9y), jO = sV + a9x + 3 * a9y, a3j = b7.pZ
			.ri(1, a9x / au.pf), aA1 = Math.floor(au.pf * aM.measureText(a1Z, a3j)), aA4 = a1 = (aA0 < aA1 ? aA1 : aA0) + 2 * a9z, a1 = Math.min(a1, au.a1 - 2 * (u.v.sU() ? 2 : 1) * bZ.gap), a3j = b7.pZ.ri(1, a1 / aA4 * a9x / au.pf), aA1 =
			Math.floor(au.pf * aM.measureText(a1Z, a3j)), ew = Math.floor((au.a1 - a1) / 2), ey = Math.floor((au.jO - jO) / 2), aA2.style.font = a3j, aA2.style.top = Math.floor((ey + 1.4 * a9y + sV) / au.pf) + "px", aA2.style.left = Math
			.floor((ew + (a1 - aA1) / 2) / au.pf) + "px")
	}, this.t9 = function() {
		this.wp && (tA.fillStyle = b8.mk, tA.fillRect(ew, ey + sV, a1, jO - sV), tA.fillStyle = b8.nl, tA.fillRect(ew, ey, a1, sV), tA.fillStyle = b8.mn, tA.lineWidth = bZ.xH, tA.strokeStyle = b8.mn, tA.strokeRect(ew, ey, a1, jO), tA.fillRect(ew,
			ey + sV, a1, bZ.xH), tA.font = b7.pZ.ri(1, .48 * sV), b7.pZ.textAlign(tA, 1), b7.pZ.textBaseline(tA, 1), tA.fillText("You are leaving Territorial.io!", Math.floor(ew + (a1 - .5 * sV) / 2), Math.floor(ey + .55 * sV)), aI.a3v(
			Math.floor(ew + a1 - .8 * sV), Math.floor(ey + .25 * sV), Math.floor(.5 * sV)), tA.setTransform(1, 0, 0, 1, 0, 0))
	}
}

function da() {
	var gap, a8X, ew = [0, 0, 0, 0, 0],
		ey = [0, 0, 0, 0, 0],
		mP = [1, 1, 1, 1, 1],
		fH = [!0, !0, !0, !1, !1],
		fA = (this.fb = [!0, !0, !0, !1, !1], null);
	this.aA5 = function(a17, aA6) {
		fA = a17, fH = aA6, a8X = [bH.aA7, bH.zN, bH.aA8, bH.aA8, bH.aA9], this.dW()
	}, this.dW = function() {
		if (aX.s1()) {
			var a7, rk = Math.floor((u.v.sU() ? .261 : .195) * au.pb),
				rl = Math.floor(.9 * rk),
				a6D = Math.floor(.17 * rl);
			if (gap = u.v.sU() ? 2 * bZ.gap : bZ.gap, mP[0] = rk / fA[0].width, mP[1] = rl / fA[1].width, mP[2] = a6D / fA[2].height, mP[3] = a6D / fA[3].height, mP[4] = a6D / fA[4].height, mP[2] *= 1.7, mP[3] *= 1.07, ew[0] = gap, ew[1] = gap,
				ew[2] = gap, ew[3] = gap, ew[4] = Math.floor(2 * gap + mP[3] * fA[3].width), ey[0] = gap, ey[1] = ey[0] + gap + mP[0] * fA[0].height, ey[2] = ey[1] + gap + mP[1] * fA[1].height, ey[3] = ey[2] + gap + mP[2] * fA[2].height, ey[4] =
				ey[3], !fH[0])
				for (a7 = 0; a7 < 5; a7++) ey[a7] -= mP[0] * fA[0].height + gap;
			if (!fH[1])
				for (a7 = 2; a7 < 5; a7++) ey[a7] -= mP[1] * fA[1].height + gap
		}
	}, this.wp = function() {
		return !(7 === aW.zS() && u.v.sU())
	}, this.h3 = function(hu, hv) {
		if (fA && this.wp())
			for (var a7 = fH.length - 1; 0 <= a7; a7--)
				if (fH[a7] && this.fb[a7] && ew[a7] < hu && ey[a7] < hv && hu < ew[a7] + mP[a7] * fA[a7].width && hv < ey[a7] + mP[a7] * fA[a7].height) return n.o(9, n.rc, new aAA("You are leaving Territorial.io.", b7.pZ.a1Y(a8X[a7]))), !0;
		return !1
	}, this.t9 = function() {
		if (fA && this.wp()) {
			var a7;
			for (tA.imageSmoothingEnabled = !0, a7 = 0; a7 < 5; a7++) fH[a7] && this.fb[a7] && (tA.setTransform(mP[a7], 0, 0, mP[a7], ew[a7], ey[a7]), tA.drawImage(fA[a7], 0, 0));
			tA.setTransform(1, 0, 0, 1, 0, 0)
		}
	}
}

function dT() {
	this.aAB = 0, this.aAC = null, this.sb = null, this.qj = null, this.s = null, this.aAD = new aAE, this.aAF = new aAG, this.zW = 0, this.dW = function() {
		this.aAB = bD.rf.ua(bg.dr.data[105].value), this.sb = new aAH, this.qj = new aAI, this.s = new aAJ, this.s.dW(), this.zW = 1, aW.setState(0)
	}, this.zf = function() {
		this.aAC = null, this.sb = null, this.qj = null, this.s = null, this.zW = 0
	}
}

function aAH() {
	this.sc = [
		[],
		[],
		[],
		[]
	], this.sd = [0, 0, 0, 0], this.aAK = function(aAL, ra, username, si, yt, aAM, elo, color) {
		this.sc[aAL].push(this.aAN(ra, username, si, yt, aAM, elo, color)), bl.aAB === ra && (bl.aAC = this.sc[aAL][this.sc[aAL].length - 1]), bl.s.aAO += 29 === n.rc && bl.s.qc[0] === aAL && 1 === bl.s.qc[2]
	}, this.aAN = function(ra, username, si, yt, aAM, elo, color) {
		return {
			ra: ra,
			username: username,
			si: si,
			yt: yt,
			aAM: aAM,
			elo: elo,
			color: color
		}
	}, this.aAP = function(e2, aAL, username, si, yt, aAM, elo) {
		e2 = this.sc[aAL][e2];
		e2.aAQ = e2.username, e2.username = username, e2.si = si, e2.yt = yt, e2.aAM = aAM, e2.elo = elo, bl.s.aAO += 29 === n.rc && bl.s.qc[0] === aAL && 1 === bl.s.qc[2]
	}, this.aAR = function(e2, aAS, aAT) {
		var player = this.sc[aAS][e2];
		this.aAU(e2, aAS), this.sc[aAT].push(player), bl.s.aAO += 29 === n.rc && bl.s.qc[0] === aAT && 1 === bl.s.qc[2]
	}, this.aAU = function(e2, aAS) {
		this.sc[aAS].splice(e2, 1), e2 < this.sd[aAS] && this.sd[aAS]--, bl.s.aAO += 29 === n.rc && bl.s.qc[0] === aAS && 1 === bl.s.qc[2]
	}, this.aAV = function(e2, qb) {
		var sb = this.sc[qb],
			pR = sb[e2];
		sb.splice(e2, 1), e2 < this.sd[qb] ? (this.sd[qb]--, sb.splice(this.sd[qb], 0, pR)) : (sb.splice(function(sb, qb, pR) {
			var sd = bl.sb.sd[qb];
			if (2 === qb)
				for (var elo = pR.elo; sd && elo > sb[sd - 1].elo;) sd--;
			return sd
		}(sb, qb, pR), 0, pR), this.sd[qb]++), bl.s.aAO += 29 === n.rc && bl.s.qc[0] === qb && 1 === bl.s.qc[2]
	}
}

function aAE() {
	this.df = function(e2) {
		if ((sd = bl.sb.sd[e2]) < 2) return !1;
		var qd = bl.s.qe[e2],
			aAX = 9 === qd.aAY ? 333 : 512,
			sd = Math.min(sd, aAX);
		8 === qd.aAY && (sd -= sd % 2);
		aAX = bl.sb.sc[e2].splice(0, sd), bl.sb.sd[e2] -= sd, sd = function(aAZ) {
			if (bl.aAC)
				for (var ep = aAZ.length, ra = bl.aAC.ra, a7 = 0; a7 < ep; a7++)
					if (aAZ[a7].ra === ra) return a7;
			return -1
		}(aAX);
		return -1 === sd ? (bl.s.aAO += 29 === n.rc && bl.s.qc[0] === e2 && 1 === bl.s.qc[2], !1) : (8 === qd.aAY && (qd.aAc = (qd.aAc + (sd >> 1)) % 1024, e2 = sd - sd % 2, sd %= 2, aAX = aAX.slice(e2, 2 + e2)), at.dW(qd, aAX, sd), !0)
	}, this.aAd = function(qd, aAZ, aAa) {
		var es = a9.data = new a2d,
			aAh = (es.spawningSeed = qd.spawningSeed, qd.aAY < 7 ? (es.gameMode = 1, es.numberTeams = qd.aAY + 2) : 9 === qd.aAY ? (es.gameMode = es.isZombieMode = 1, es.numberTeams = 2) : (es.gameMode = 0, es.battleRoyaleMode = 7 === qd.aAY ?
				0 : 10 === qd.aAY ? 1 : 2), es.selectedPlayer = aAa, es.isContest = qd.aAe, es.mapType = bP.aAf(qd.eV) ? 0 : 1, bP.aAg(es, qd.eV), es.mapSeed = qd.mapSeed, es.humanCount = aAZ.length);
		es.selectableSpawn = 1 === es.gameMode || aAh < 100, es.colorsData = new Uint32Array(aAh), es.playerNamesData = new Array(aAh);
		for (var a7 = 0; a7 < aAh; a7++) es.colorsData[a7] = aAZ[a7].color, es.playerNamesData[a7] = aAZ[a7].username;
		if (2 === es.battleRoyaleMode)
			for (es.elo = new Uint16Array(aAh), a7 = 0; a7 < aAh; a7++) es.elo[a7] = aAZ[a7].elo;
		aW.setState(8), bP.a3(qd.eV, es.mapSeed), a9.a2h()
	}
}

function aAI() {
	var aAi = [b8.n0, b8.mn, b8.nj, b8.nQ, b8.n1, b8.nU, b8.nH, b8.n0, b8.n0, b8.n0],
		aAj = [
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
		aAk = [0, 0, 1, 1, 1, 1, 1, 0, 0, 0];
	this.qk = function(qb, aAl) {
		var a1h, jO = this,
			a1g = (a1g = jO.aAm(qb, aAl.ra)) || bl.sb.aAN(aAl.ra, bC.rf.xY(aAl.ra, 5), 1, 1e6, 1e6, 0, 0);
		return 0 === aAl.id ? {
			id: aAl.id,
			fontSize: jO.aAn(a1g.si, a1g.yt),
			qo: [{
				username: jO.sg(a1g, qb),
				color: jO.sh(a1g.si),
				ra: aAl.ra,
				qs: jO.aAo(a1g.si, a1g.yt),
				yt: a1g.yt,
				aAM: a1g.aAM
			}],
			qq: [{
				pG: ": " + aAl.k,
				color: jO.aAp(a1g.si),
				qs: jO.aAo(a1g.si, a1g.yt)
			}]
		} : (a1h = (a1h = jO.aAm(qb, aAl.target)) || bl.sb.aAN(aAl.target, bC.rf.xY(aAl.target, 5), 1, 1e6, 1e6, 0, 0), {
			id: aAl.id,
			fontSize: jO.aAn(1, 0),
			qo: [{
				username: jO.sg(a1g, qb),
				color: jO.sh(a1g.si),
				ra: aAl.ra,
				qs: jO.aAo(a1g.si, a1g.yt),
				yt: a1g.yt,
				aAM: a1g.aAM
			}, {
				username: jO.sg(a1h, qb, 3 === aAl.id),
				color: jO.sh(a1h.si),
				ra: aAl.target,
				qs: jO.aAo(a1h.si, a1h.yt),
				yt: a1h.yt,
				aAM: a1h.aAM
			}],
			qq: [{
				pG: 15 === aAl.id ? function(aAl) {
					return 0 === aAl.aAs ? 32768 <= aAl.value ? " voted with " + (aAl.value - 32768 + 1) + " gold against " : " voted with " + (aAl.value + 1) + " gold for " : 1 === aAl.aAs ? " sent " + (aAl.value / 100)
						.toFixed(2) + " Gold to " : " voted with " + aAl.value + " points for "
				}(aAl) : bm.e5(aAl.id - 1, bm.dz[aAl.id - 1][aAl.value]),
				color: jO.aAp(1)
			}, {
				pG: 15 === aAl.id ? function(aAl) {
					return 0 === aAl.aAs ? 32768 <= aAl.value ? " to weaken the latter's admin position." : " to strengthen the latter's admin position." : 1 === aAl.aAs ? "." : " to acknowledge the latter as clan leader."
				}(aAl) : bm.e7(aAl.id - 1, bm.dz[aAl.id - 1][aAl.value]),
				color: jO.aAp(1)
			}]
		})
	}, this.sg = function(player, qb, aAt) {
		return (aAt && player.aAQ ? player.aAQ : player.username) + (2 === qb ? " (" + (player.elo / 10).toFixed(1) + ")" : "")
	}, this.sh = function(si) {
		return aAi[si]
	}, this.aAp = function(si) {
		return 0 === si ? aAi[si] : b8.mn
	}, this.aAn = function(si, yt) {
		return si < 2 || 5 < si ? aAj[si][0] : 3 === si ? aAj[si][yt < 1 ? 0 : yt < 8 ? 1 : 2] : aAj[si][yt < 10 ? 0 : 1]
	}, this.aAo = function(si, yt) {
		return 0 === yt && aAk[si]
	}, this.aAm = function(qb, ra) {
		for (var sc = bl.sb.sc, sb = sc[qb], ep = sb.length, a7 = 0; a7 < ep; a7++)
			if (ra === sb[a7].ra) return sb[a7];
		for (var f9 = 0; f9 < sc.length; f9++)
			if (qb !== f9)
				for (ep = (sb = sc[f9]).length, a7 = 0; a7 < ep; a7++)
					if (ra === sb[a7].ra) return sb[a7];
		return null
	}, this.qr = function(pR) {
		return !!bl.aAC && pR.ra === bl.aAC.ra
	}, this.aAu = function(sb, aAv, aAw) {
		var yz = [];
		loop: for (var a7 = aAv; a7 < aAw; a7++) {
			var aAx = b7.z3.z4(sb[a7].username);
			if (aAx) {
				for (var f9 = yz.length - 1; 0 <= f9; f9--)
					if (aAx === yz[f9].name) {
						yz[f9].gI++;
						continue loop
					} yz.push({
					name: aAx,
					gI: 1
				})
			}
		}
		if (yz.sort(function(f8, f9) {
				return f9.gI - f8.gI
			}), 0 === yz.length) return "";
		for (var pG = yz[0].name + ": " + yz[0].gI, a7 = 1; a7 < yz.length; a7++) pG += " " + yz[a7].name + ": " + yz[a7].gI;
		return pG
	}
}

function aAJ() {
	function aB1(aB4) {
		bl.s.aAO && 1 === bl.s.qc[2] && n.aB5(29).aB6(), bl.s.aAO = 0, n.aB5(29).aB7(), 0 !== bl.s.qe[bl.s.qc[0]].sP && !aB4 || n.aB5(29).aB8()
	}
	this.qe = new Array(4), this.qc = [0, 0, 1, 0], this.aAO = 0, this.aAy = [0, 0], this.dW = function() {
		for (var a7 = 0; a7 < this.qe.length; a7++) this.qe[a7] = new aAz
	}, this.aB0 = function() {
		aB1(!0)
	}, this.aB2 = function() {
		for (var a7 = 0; a7 < bl.s.qe.length; a7++) {
			var qd = bl.s.qe[a7];
			0 === qd.sP ? qd.aB9 = 0 : (qd.aBA = Math.max(qd.aBA - qd.aB9 % 2, 0), qd.aB9++)
		}
		aB1(!1)
	}, this.aBB = function(qb) {
		this.qc[0] !== qb || this.qc[2] || n.aB5(29).aBC()
	}
}

function aAG() {
	var aBD = null,
		aBE = null;

	function aBG() {
		n.o(8, 29, new rd(25, {
			re: 0,
			ra: bC.rf.xY(aBE.ra, 5),
			rb: 0
		}, 29))
	}

	function aBH() {
		var ew = aBD.ew,
			ey = aBD.ey;
		bl.aAF.qt(), (aBD = new sj([new q("Kick User", aBK, aBL(0)), new q("Block Chat", aBM, aBL(1)), new q("Censor Username", aBN, aBL(2)), new q("Elo Deduction", aBO, aBL(3)), new q("Gold Seizure", aBP, aBL(4))])).show(ew, ey, 1)
	}

	function aBL(id) {
		return bl.aAC ? bl.qj.qr(aBE) ? 0 : bl.aAC.aAM >= aBE.yt || 0 === id && aBE.yt < 200 ? 1 : 1 - bm.e0(id, bl.aAC.aAM, 0) : 1
	}

	function aBQ(id, e2) {
		return bl.aAC ? bl.qj.qr(aBE) ? 0 : bl.aAC.aAM >= aBE.yt ? 1 : 1 - bm.e0(id, bl.aAC.aAM, e2) : 1
	}

	function aBJ() {
		var ew = aBD.ew,
			ey = aBD.ey;
		bl.aAF.qt(), (aBD = new sj([new q(bm.dz[5][0], function() {
			aBR(5, 0)
		}), new q(bm.dz[5][1], function() {
			aBR(5, 1)
		}), new q(bm.dz[5][2], function() {
			aBR(5, 2)
		}), new q(bm.dz[5][3], function() {
			aBR(5, 3)
		})])).show(ew, ey, 1)
	}

	function aBR(id, value) {
		ax.aBS.aBT(5, {
			id: id,
			value: value,
			ra: aBE.ra
		})
	}

	function aBK() {
		var ew = aBD.ew,
			ey = aBD.ey;
		bl.aAF.qt(), (aBD = new sj([new q(bm.dz[0][0], function() {
			aBR(0, 0)
		}, aBQ(0, 0)), new q(bm.dz[0][1], function() {
			aBR(0, 1)
		}, aBQ(0, 1)), new q(bm.dz[0][2], function() {
			aBR(0, 2)
		}, aBQ(0, 2))])).show(ew, ey, 1)
	}

	function aBM() {
		var ew = aBD.ew,
			ey = aBD.ey;
		bl.aAF.qt(), (aBD = new sj([new q(bm.dz[1][0], function() {
			aBR(1, 0)
		}, aBQ(1, 0)), new q(bm.dz[1][1], function() {
			aBR(1, 1)
		}, aBQ(1, 1)), new q(bm.dz[1][2], function() {
			aBR(1, 2)
		}, aBQ(1, 2)), new q(bm.dz[1][3], function() {
			aBR(1, 3)
		}, aBQ(1, 3)), new q(bm.dz[1][4], function() {
			aBR(1, 4)
		}, aBQ(1, 4))])).show(ew, ey, 1)
	}

	function aBN() {
		var ew = aBD.ew,
			ey = aBD.ey;
		bl.aAF.qt(), (aBD = new sj([new q(bm.dz[2][0], function() {
			aBR(2, 0)
		}, aBQ(2, 0)), new q(bm.dz[2][1], function() {
			aBR(2, 1)
		}, aBQ(2, 1)), new q(bm.dz[2][2], function() {
			aBR(2, 2)
		}, aBQ(2, 2))])).show(ew, ey, 1)
	}

	function aBO() {
		var ew = aBD.ew,
			ey = aBD.ey;
		bl.aAF.qt(), (aBD = new sj([new q(bm.dz[3][0], function() {
			aBR(3, 0)
		}, aBQ(3, 0)), new q(bm.dz[3][1], function() {
			aBR(3, 1)
		}, aBQ(3, 1)), new q(bm.dz[3][2], function() {
			aBR(3, 2)
		}, aBQ(3, 2))])).show(ew, ey, 1)
	}

	function aBP() {
		var ew = aBD.ew,
			ey = aBD.ey;
		bl.aAF.qt(), (aBD = new sj([new q(bm.dz[4][0], function() {
			aBR(4, 0)
		}, aBQ(4, 0)), new q(bm.dz[4][1], function() {
			aBR(4, 1)
		}, aBQ(4, 1)), new q(bm.dz[4][2], function() {
			aBR(4, 2)
		}, aBQ(4, 2)), new q(bm.dz[4][3], function() {
			aBR(4, 3)
		}, aBQ(4, 3)), new q(bm.dz[4][4], function() {
			aBR(4, 4)
		}, aBQ(4, 4))])).show(ew, ey, 1)
	}
	this.aBF = function(e, pR) {
		aBE = pR, (aBD = new sj([new q("", aBG), new q(L(112), aBH, function() {
			if (!bl.aAC) return 1;
			if (!bl.qj.qr(aBE)) {
				if (100 <= bl.aAC.aAM) return 1;
				if (bl.aAC.aAM >= aBE.yt) return 1
			}
			return 0
		}()), new q(L(113), aBJ)])).qA[0].button.textContent = aBE.username, new qX(1 + pR.yt, aBD.qA[0].button, 1), pR.aAM < 100 && new qX(1 + pR.aAM, aBD.qA[0].button, 1, 1), aBD.show(e.clientX, e.clientY)
	}, this.qt = function() {
		aBD && aBD.qt(), aBD = null
	}
}

function aAz() {
	this.sP = 0, this.eV = 0, this.mapSeed = 0, this.aAY = 0, this.aBU = 0, this.aBV = 0, this.aAe = 0, this.aBA = 0, this.spawningSeed = 0, this.zY = 0, this.aAc = 0, this.qf = [], this.qg = 1048575, this.aB9 = 0
}

function cK() {
	var aBW, aBX, aBY;

	function aBd(a7) {
		var button = aU.qA[a7],
			ew = button.ew,
			ey = button.ey,
			a1 = button.a1,
			jO = button.jO;
		tA.fillStyle = button.aBb, tA.fillRect(ew, ey, a1, jO), a7 === aBW && (tA.fillStyle = aBY, tA.fillRect(ew, ey, a1, jO)), tA.lineWidth = bZ.xH, tA.strokeStyle = aBX, tA.strokeRect(ew, ey, a1, jO),
			function(button) {
				var ew = button.ew,
					ey = button.ey,
					a1 = button.a1,
					jO = button.jO;
				b7.pZ.textAlign(tA, 1), b7.pZ.textBaseline(tA, 1), tA.font = button.font, tA.fillStyle = aBX, tA.fillText(button.a4y, Math.floor(ew + a1 / 2), Math.floor(ey + jO / 2 + .1 * button.fontSize))
			}(button)
	}
	this.a1 = 0, this.jO = 0, this.ey = 0, this.gap = 0, this.dW = function() {
		aBW = -1, aBX = b8.mn, aBY = "rgba(255,255,255,0.16)", this.qA = new Array(7), this.jO = Math.floor((u.v.sU() ? .123 : .093) * au.pb), this.a1 = Math.floor((u.v.sU() ? 3.96 : 4.2) * this.jO), this.gap = Math.floor(.025 * this.a1);
		var aBZ = Math.floor(.26 * this.jO),
			aBa = b7.pZ.ri(1, aBZ);
		this.qA[0] = {
			ew: 0,
			ey: 0,
			a1: Math.floor(.6 * this.a1 - this.gap / 2),
			jO: this.jO,
			a4y: "Multiplayer",
			font: aBa,
			aBb: "rgba(22,88,22,0.8)",
			fontSize: aBZ
		}, aBZ = Math.floor(.18 * this.jO), aBa = b7.pZ.ri(1, aBZ), this.qA[1] = {
			ew: 0,
			ey: 0,
			a1: this.a1 - this.qA[0].a1 - this.gap,
			jO: this.jO,
			a4y: "Single Player",
			font: aBa,
			aBb: "rgba(22,88,88,0.8)",
			fontSize: aBZ
		}, this.qA[2] = {
			ew: 0,
			ey: 0,
			a1: this.a1,
			jO: Math.floor(.3 * this.jO),
			a4y: "",
			font: this.qA[1].font,
			aBb: "rgba(100,0,0,0.8)",
			fontSize: this.qA[1].fontSize
		}, this.qA[3] = {
			ew: 0,
			ey: 0,
			a1: this.a1,
			jO: this.jO,
			a4y: "Back",
			font: this.qA[0].font,
			aBb: "rgba(0,0,0,0.8)",
			fontSize: this.qA[0].fontSize
		}, this.qA[4] = {
			ew: 0,
			ey: 0,
			a1: this.a1,
			jO: Math.floor(.3 * this.jO),
			a4y: "The game was updated!",
			font: this.qA[1].font,
			aBb: "rgba(100,0,0,0.8)",
			fontSize: this.qA[1].fontSize
		}, this.qA[5] = {
			ew: 0,
			ey: 0,
			a1: this.qA[0].a1,
			jO: Math.floor(.8 * this.jO),
			a4y: "Reload",
			font: this.qA[0].font,
			aBb: "rgba(0,100,0,0.8)",
			fontSize: this.qA[0].fontSize
		}, this.qA[6] = {
			ew: 0,
			ey: 0,
			a1: this.qA[1].a1,
			jO: this.qA[5].jO,
			a4y: "Back",
			font: this.qA[0].font,
			aBb: "rgba(0,0,0,0.8)",
			fontSize: this.qA[0].fontSize
		}, this.a7H()
	}, this.a7H = function() {
		this.ey = Math.floor(.54 * au.jO), this.qA[0].ew = Math.floor(.5 * au.a1 - .5 * this.a1), this.qA[1].ew = this.qA[0].ew + this.qA[0].a1 + this.gap, this.qA[2].ew = this.qA[3].ew = this.qA[0].ew, this.qA[4].ew = this.qA[5].ew = this.qA[0]
			.ew, this.qA[6].ew = this.qA[1].ew, this.qA[0].ey = Math.floor(.54 * au.jO), this.qA[1].ey = this.qA[0].ey, this.qA[2].ey = Math.floor((au.jO - this.qA[2].jO - this.qA[3].jO - this.gap) / 2), this.qA[3].ey = this.qA[2].ey + this.qA[2]
			.jO + this.gap, this.qA[4].ey = Math.floor((au.jO - this.qA[4].jO - this.qA[5].jO - this.gap) / 2), this.qA[5].ey = this.qA[6].ey = this.qA[4].ey + this.qA[4].jO + this.gap
	}, this.aBc = function() {
		aBd(0), aBd(1)
	}, this.aBe = function() {
		aBd(2), aBd(3)
	}, this.aBf = function() {
		aBd(4), aBd(5), aBd(6)
	}, this.zp = function(ew, ey, lX) {
		var a7 = -1;
		return 0 === aW.zS() ? a7 = this.a0J(ew, ey, 0, 2) : 3 === aW.zS() ? a7 = this.a0J(ew, ey, 3, 1) : 5 === aW.zS() && (a7 = this.a0J(ew, ey, 5, 2)), aBW !== a7 && (aBW = a7, lX) && (bc.de = !0), -1 !== a7 && (aP.qZ(), !0)
	}, this.a0J = function(ew, ey, aBg, size) {
		for (var a7 = aBg; a7 < aBg + size; a7++)
			if (ew >= this.qA[a7].ew && ey >= this.qA[a7].ey && ew <= this.qA[a7].ew + this.qA[a7].a1 && ey <= this.qA[a7].ey + this.qA[a7].jO) return a7;
		return -1
	}
}

function aBi() {
	function aBp(a8H) {
		return a8H < 0 ? 0 : 255 < a8H ? 255 : Math.floor(a8H)
	}
	this.a1 = 0, this.jO = 0, this.wp = !1, this.aBj = 0, this.gap = 0, this.aBk = 0, this.sV = 0, this.aBl = 0, this.aBm = 0, this.aBn = 0, this.colors = null, this.dW = function() {
		this.wp = !0, this.aBj = 0, this.resize()
	}, this.resize = function() {
		this.wp && (au.a1 < 1.4 * au.jO ? this.a1 = Math.floor((u.v.sU() ? .94 : .43) * au.a1) : (this.jO = Math.floor((u.v.sU() ? .88 : .43) * au.jO), this.a1 = Math.floor(1.4 * this.jO)), this.jO = this.a1 / 1.4, this.gap = this.a1 / 32, this
			.sV = Math.floor(.25 * this.jO), this.aBl = (this.jO - this.sV - 3 * this.gap) / 2, this.aBm = this.a1 - 3 * this.gap - this.aBl, this.aBn = (this.jO - this.sV - 4 * this.gap) / 3)
	}, this.aBo = function() {
		this.colors = [
			[0, 0, 0],
			[0, 0, 0]
		];
		var pG = bg.dr.data[103].value.split("");
		if (pG.length < 6)
			for (var f9 = 2; 0 <= f9; f9--) this.colors[0][f9] = aBp(256 * Math.random());
		else
			for (var a7 = 2; 0 <= a7; a7--) this.colors[0][a7] = aBp(4 * (10 * parseInt(pG[2 * a7]) + parseInt(pG[2 * a7 + 1])));
		this.aBq()
	}, this.aBr = function() {
		return [bI.dn(this.colors[0][0], 4), bI.dn(this.colors[0][1], 4), bI.dn(this.colors[0][2], 4)]
	}, this.zs = function(l0, l1, deltaY) {
		var mD = (au.a1 - this.a1) / 2;
		l1 -= (au.jO - this.jO) / 2 + this.sV, (l0 -= mD) < 0 || l1 < 0 || l0 >= this.a1 || l1 >= this.jO - this.sV || (mD = Math.floor(3 * l1 / (this.jO - this.sV)), this.colors[this.aBk][mD] = aBp(this.colors[this.aBk][mD] + (deltaY < 0 ? 1 : -
			1) * Math.max(Math.abs(.05 * deltaY), 1)), bc.de = !0)
	}, this.h3 = function(l0, l1) {
		this.aBj = 0;
		var mD = (au.a1 - this.a1) / 2;
		return l1 -= (au.jO - this.jO) / 2, (l0 -= mD) < 0 || l1 < 0 || l0 >= this.a1 - 1 || l1 >= this.jO - 1 || l0 > this.a1 - (.4 * this.sV + 3 * this.gap) && l1 < this.sV ? (this.wp = !1, !(bc.de = !0)) : l0 < this.gap || l1 < this.gap + this
			.sV || l0 >= this.a1 || l1 >= this.jO - this.gap || (l0 < this.gap + this.aBl ? (l1 < this.gap + this.sV + this.aBl && 0 !== this.aBk && (this.aBk = 0, bc.de = !0), !0) : l0 < this.gap + this.aBl || (l0 -= 2 * this.gap + this.aBl,
				l1 < this.gap + this.sV + this.aBn ? (this.aBj = 1, this.colors[this.aBk][0] = aBp(256 * l0 / this.aBm), bc.de = !0) : l1 < 2 * this.gap + this.sV + this.aBn || (l1 < 2 * this.gap + this.sV + 2 * this.aBn ? (this.aBj = 2, this
					.colors[this.aBk][1] = aBp(256 * l0 / this.aBm), bc.de = !0) : !(l1 >= 3 * this.gap + this.sV + 2 * this.aBn) || (this.aBj = 3, this.colors[this.aBk][2] = aBp(256 * l0 / this.aBm), bc.de = !0))))
	}, this.aBq = function() {
		for (var f9 = 2; 0 <= f9; f9--) this.colors[0][f9] = aBp(this.colors[0][f9])
	}, this.aBs = function() {
		for (var fH, pG = "", a7 = 0; a7 < 3; a7++)(fH = bI.dn(this.colors[0][a7], 4)) < 10 && (pG += "0"), pG += fH.toString();
		return pG
	}, this.zp = function(l0) {
		0 !== this.aBj && (l0 -= 2 * this.gap + this.aBl + (au.a1 - this.a1) / 2, this.colors[this.aBk][this.aBj - 1] = aBp(256 * l0 / this.aBm), bc.de = !0)
	}, this.a0D = function() {
		0 < this.aBj && (this.aBj = 0, this.aBq(), bg.r3.r4(103, this.aBs()), bc.de = !0)
	}, this.t9 = function() {
		var mD = (au.a1 - this.a1) / 2,
			mE = (au.jO - this.jO) / 2;
		tA.setTransform(1, 0, 0, 1, mD, mE), tA.fillStyle = b8.mk, tA.fillRect(0, this.sV, this.a1, this.jO - this.sV), tA.fillStyle = b8.mw, tA.fillRect(0, 0, this.a1, this.sV), tA.fillStyle = b8.mn, tA.lineWidth = bZ.xH, tA.strokeStyle = b8.mn,
			tA.strokeRect(-1, -1, this.a1 + 2, this.jO + 2), tA.fillRect(0, this.sV, this.a1, bZ.xH), tA.font = b7.pZ.ri(1, .31 * this.sV), b7.pZ.textBaseline(tA, 1), b7.pZ.textAlign(tA, 1), tA.fillText("Choose Your Nation's Color!", Math.floor((
				this.a1 - this.gap - .4 * this.sV) / 2), Math.floor(.55 * this.sV)), this.aBt(0), tA.lineWidth = bZ.xH, this.aBu(0), this.aBu(1), this.aBu(2), aI.a3v(Math.floor(mD + this.a1 - .4 * this.sV - this.gap), Math.floor(mE + .3 * this
				.sV), Math.floor(.4 * this.sV)), tA.setTransform(1, 0, 0, 1, 0, 0)
	}, this.aBt = function(a7) {
		var e1 = this.colors[a7][0],
			rx = this.colors[a7][1],
			a7 = this.colors[a7][2];
		tA.fillStyle = "rgb(" + e1 + "," + rx + "," + a7 + ")", tA.fillRect(this.gap, this.sV + this.gap, this.aBl, 2 * this.aBl + this.gap), tA.lineWidth = bZ.xH, tA.strokeStyle = b8.mn, tA.strokeRect(this.gap, this.sV + this.gap, this.aBl, 2 *
			this.aBl + this.gap), tA.fillStyle = e1 + rx + a7 < 306 && rx < 150 ? b8.mn : b8.me, tA.font = b7.pZ.ri(1, .32 * this.aBn), b7.pZ.textAlign(tA, 1), b7.pZ.textBaseline(tA, 1), tA.rotate(-Math.PI / 2), tA.fillText("National Color",
			Math.floor(-1.5 * this.gap - this.sV - this.aBl), Math.floor(this.gap + .5 * this.aBl)), tA.rotate(Math.PI / 2)
	}, this.aBu = function(a7) {
		tA.fillStyle = "rgb(" + (0 === a7 ? 150 : 2 === a7 ? 30 : 0) + "," + (1 === a7 ? 130 : 2 === a7 ? 30 : 0) + "," + (2 === a7 ? 220 : 0) + ")", tA.fillRect(2 * this.gap + this.aBl, this.sV + this.gap + a7 * (this.gap + this.aBn), Math
				.floor(this.colors[this.aBk][a7] * this.aBm / 255), this.aBn), tA.strokeStyle = b8.mn, tA.strokeRect(2 * this.gap + this.aBl, this.sV + this.gap + a7 * (this.gap + this.aBn), this.aBm, this.aBn), tA.fillStyle = b8.mn, tA.font = b7
			.pZ.ri(1, .32 * this.aBn), b7.pZ.textBaseline(tA, 1), b7.pZ.textAlign(tA, 0), tA.fillText((0 === a7 ? "Red: " : 1 === a7 ? "Green: " : "Blue: ") + this.colors[0][a7].toString(), 3 * this.gap + this.aBl, Math.floor(this.sV + this.gap +
				a7 * (this.gap + this.aBn) + .53 * this.aBn))
	}
}

function cL() {
	var aBv, aBw, a57, a5H, a65, aBx, aBy, aBz, aC0, a3j, fontSize, ly, aC1, aC3, aC2 = 0;

	function aC6() {
		return ax.s.aC7[(aC1 + aC2) % ax.s.aC8]
	}

	function aCB() {
		__fx.customLobby.isActive() ? (l.zd(3249), __fx.customLobby.setActive(false)) : l.zd(3249)
	}

	function aCH(ey, a6y, sP) {
		var mD = Math.floor((au.a1 - a5H) / 2) + aBy,
			mQ = mD + Math.floor(sP * (a5H - 2 * aBy));
		tA.lineWidth = a6y, tA.beginPath(), tA.moveTo(mD, ey), tA.lineTo(mQ, ey), tA.lineTo(Math.floor(mD - aBy + sP * a5H), ey + a57), tA.lineTo(mD - aBy, ey + a57), tA.closePath()
	}
	this.dW = function() {
		aW.setState(6), aBv = 0, aBw = 1, aBz = "rgba(0,220,120,0.4)", aC0 = "rgba(0,0,0,0.8)", this.resize(), bc.de = !0, aC1 = 0, aC3 = !1, aC1++, ly = bc.eO, ax.s.aC9(aC6(), 4) && (aC3 = !0, ax.aBS.aCA(aC6()))
	}, this.resize = function() {
		a5H = Math.floor((u.v.sU() ? .5 : .25) * au.pb), a65 = a5H + 12, a57 = Math.floor(.125 * a5H), aBy = 3 * a57, aBx = Math.floor(.225 * a5H), fontSize = Math.floor(.3 * a57), a3j = b7.pZ.ri(0, fontSize)
	}, this.aC5 = function(f8) {
		aC2 = f8
	}, this.zV = function(zP) {
		zP === aC6() && (aC3 = !1, aCB())
	}, this.aCC = function(zP) {
		6 !== aW.zS() || aC3 || (ly = bc.eO, aC3 = !0)
	}, this.h3 = function(ew, ey) {
		var mD = Math.floor((au.a1 - a65) / 2),
			mE = Math.floor(.5 * (au.jO - bZ.gap - a57 - aBx)) + a57 + bZ.gap;
		return mD < ew && ew < mD + a65 && mE < ey && ey < mE + aBx && (this.a0V(), aU.zp(ew, ey, !1), !0)
	}, this.a0V = function() {
		ax.s.ze(3260), __fx.customLobby.setActive(false), n.s.t()
	}, this.il = function() {
		6 === aW.zS() && (aC3 ? bc.eO > ly + 12e3 && l.zd(3250) : bc.eO > ly + 12e3 && aCB(), 100 < (aBv += .07 * aBw * (aBv < 16 ? 5 + aBv : 84 < aBv ? 105 - aBv : 17)) ? (aBv = 100, aBw = -1) : aBv < 0 && (aBv = 0, aBw = 1), aBz = "rgba(0," +
			Math.floor(190 - 1.9 * aBv) + "," + Math.floor(120 - 1.2 * aBv) + "," + (.4 + .004 * aBv) + ")", aC0 = "rgba(0," + Math.floor(1.9 * aBv) + "," + Math.floor(1.2 * aBv) + "," + (.8 - .004 * aBv) + ")", bc.de = !0)
	}, this.t9 = function() {
		var ew = Math.floor((au.a1 - a65) / 2),
			ey = Math.floor(.5 * (au.jO - bZ.gap - a57 - aBx));
		! function(title, ey, a6y, sP) {
			tA.fillStyle = aC0, aCH(ey, a6y, 1), tA.fill(), tA.fillStyle = aBz, aCH(ey, a6y, sP), tA.fill(), tA.strokeStyle = b8.mn, aCH(ey, a6y, 1), tA.stroke(),
				function(aCJ, ey) {
					b7.pZ.textAlign(tA, 1), b7.pZ.textBaseline(tA, 1), tA.font = a3j, tA.fillStyle = b8.mn, tA.fillText(aCJ, Math.floor(.5 * au.a1), Math.floor(ey + .58 * a57))
				}(title, ey)
		}(L(114), ey, 3, aBv / 100),
		function(ew, ey, a1, jO, a4y) {
			tA.fillStyle = b8.mi, tA.fillRect(ew, ey, a1, jO), tA.lineWidth = 3, tA.strokeStyle = b8.mn, tA.strokeRect(ew, ey, a1, jO);
			var ep = Math.floor(.3 * jO);
			b7.pZ.textAlign(tA, 1), b7.pZ.textBaseline(tA, 1), tA.font = b7.pZ.ri(0, ep), tA.fillStyle = b8.mn, tA.fillText(a4y, Math.floor(ew + a1 / 2), Math.floor(ey + jO / 2 + .1 * ep))
		}(ew, ey + a57 + bZ.gap, a65, aBx, L(22))
	}
}

function cM() {
	var eN = 0;
	this.dW = function() {
		aU.dW(), eN = 0
	}, this.setState = function(aCK) {
		eN = aCK
	}, this.zS = function() {
		return eN
	}, this.aCL = function() {
		this.setState(8), n.r()
	}, this.a0N = function(e) {
		if (!bP.uq) return !1;
		if (!(bc.eO < 400)) {
			if ("Enter" === e.key || "Escape" === e.key) {
				if (this.aCM()) return !0;
				if ("Enter" === e.key) {
					if (0 === eN) return !0;
					if (7 === eN) return !0
				}
			}
			return !1
		}
	}, this.aCN = function() {
		bW.resize()
	}, this.aCM = function() {
		return !!bW.qt()
	}, this.h3 = function(ew, ey) {
		!bP.uq || bW.h3(ew, ey) || 6 === eN && aV.h3(ew, ey) || bV.h3(ew, ey) || aP.h3(ew, ey)
	}, this.zp = function(ew, ey) {
		!aP.a7A && aU.zp(ew, ey, !0) || aP.zp(ew, ey)
	}, this.click = function(ew, ey) {
		aP.a0E()
	}, this.zs = function(ew, ey, deltaY) {}, this.aCO = function() {
		aU.a7H(), bc.de = !0
	}, this.t9 = function() {
		8 !== eN && 10 !== eN && (tA.imageSmoothingEnabled = !0, this.wQ(), 0 !== eN && (aP.t9(), aK.t9(), this.aCP(), bV.t9()), 0 !== eN && 6 === eN && aV.t9(), bW.t9(), n.t9())
	}, this.wQ = function() {
		var aCR, aCQ;
		if (__fx.makeMainMenuTransparent) tA.clearRect(0, 0, au.a1, au.jO);
		else bP.uq ? (aCQ = au.a1 / bP.f0, aCR = au.jO / bP.f1, tA.setTransform(aCQ = aCR < aCQ ? aCQ : aCR, 0, 0, aCQ, Math.floor((au.a1 - aCQ * bP.f0) / 2), Math.floor((au.jO - aCQ * bP.f1) / 2)), tA.drawImage(bP.us, 0, 0), tA.setTransform(1,
			0, 0, 1, 0, 0), tA.fillStyle = b8.mi) : tA.fillStyle = b8.me, tA.fillRect(0, 0, au.a1, au.jO)
	}, this.aCP = function() {
		var ey = Math.floor(.3 * au.jO),
			canvas = aX.aCS("territorial.io"),
			hX = (hX = 1.75 * au.jO / canvas.width) * canvas.width < .98 * au.a1 ? .98 * au.a1 / canvas.width : hX,
			ew = (tA.globalAlpha = .15, tA.imageSmoothingEnabled = !1, Math.floor(.5 * (au.a1 - hX * canvas.width))),
			ew = Math.floor(ew / hX),
			ey = Math.floor(ey - .5 * canvas.height * hX),
			ey = Math.floor(ey / hX);
		tA.setTransform(hX, 0, 0, hX, ew, ey), tA.drawImage(canvas, ew, ey), tA.setTransform(1, 0, 0, 1, 0, 0), tA.globalAlpha = 1, tA.imageSmoothingEnabled = !0
	}
}

function cm() {
	this.aAc = 0;
	var aCU, aCV, aCW, aCX, aCY, aCZ = this.aCT = 0;

	function aCd() {
		aCX = aCY = null, aCZ = 0
	}
	this.dW = function(qd, aAZ, aAa) {
		n.r(), bl.zf(), aW.setState(10), aCX = qd, aCY = aAZ, aCZ = aAa, this.aAc = qd.aAc, this.aCT = aAa, aCU = 0, aCV = bc.eO + 4500, ax.s.zX > ax.s.aCa && (qd.zY += ax.s.aCa), ax.s.zY = qd.zY, ax.s.zX === qd.zY ? (console.log("direct pass"),
			aCW = 0) : (console.log("delayed pass"), ax.s.close(ax.s.zX, 3247), aCW = 2, ax.s.aC9(qd.zY, 5) && ax.nw.aCb()), tA.imageSmoothingEnabled = !0, aW.wQ();
		aAZ = aX.aCS("loading"), aAa = (u.v.sU() ? .396 : .25) * au.pb / aAZ.width;
		tA.setTransform(aAa, 0, 0, aAa, Math.floor((au.a1 - aAa * aAZ.width) / 2), Math.floor((au.jO - aAa * aAZ.height) / 2)), tA.imageSmoothingEnabled = !1, tA.drawImage(aAZ, 0, 0), tA.setTransform(1, 0, 0, 1, 0, 0)
	}, this.lV = function() {
		0 < aCW && bc.eO > aCV && (aCW--, aCV += 4500, 0 === bc.aCf) && 0 === bc.jr() && (0 === aCW && ax.s.zY < ax.s.aCg && (ax.s.zY += ax.s.aCa), ax.s.aC9(ax.s.zY, 5))
	}, this.aCh = function() {
		return 10 === aW.zS() && (bl.aAD.aAd(aCX, aCY, aCZ), aCd(), !0)
	}, this.aCi = function() {
		10 === aW.zS() && 2 <= ++aCU && (bl.aAD.aAd(aCX, aCY, aCZ), aCd())
	}
}

function cN() {
	var aCk, canvas, yb, aCl;

	function aCr(e2, name, aCs, pG) {
		yb[e2] = name, canvas[e2] = new Image, canvas[e2].onload = function() {
			! function(e2, aCs) {
				var a21, a22 = null;
				7 === aCs ? a21 = b7.a0b.a24 : 8 === aCs ? (a21 = b7.a0b.a27, a22 = .1) : 3 === aCs ? (a21 = b7.a0b.a25, a22 = .06) : 5 === aCs ? a21 = b7.a0b.a28 : 6 === aCs ? a21 = b7.a0b.a23 : 4 === aCs && (a21 = b7.a0b.a29);
				canvas[e2] = b7.a0b.a20(canvas[e2], a21, a22)
			}(e2, aCs), aCu()
		}, canvas[e2].onerror = function(e) {
			console.error("Error loading image at index", e2, "Error:", e), aCu()
		}, canvas[e2].src = "data:image/png;base64," + pG
	}

	function aCu() {
		aCk--, aCo()
	}

	function aCo() {
		0 === aCk && (aCk = -1, aCq(), bc.de = !0, canvas[7] = aCl, canvas[8] = aCl, canvas[9] = aCl, canvas[10] = aCl, 5 === n.rc) && n.aCw().aCx.resize()
	}

	function aCq() {
		aH.a3C(), bV.aA5([canvas[8], canvas[16], canvas[9], canvas[9], canvas[10]], [2 !== u.id, 1 !== u.id, !0, !0, !0]), af.uv = new wo, af.uv.dW(), ar.dX()
	}
	this.dW = function() {
		if (void 0 === canvas) {
			aCk = 23, canvas = new Array(aCk), yb = new Array(aCk), (aCl = document.createElement("canvas")).width = 1;
			for (var a7 = aCk - (aCl.height = 1); 0 <= a7; a7--) canvas[a7] = aCl;
			aCq(), aCr(0, "exit", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAFYAAABGBAMAAACkrn5fAAAAHlBMVEUAAAAiJCI4OjdcXltoameIioejpqPExsPY29j///9xarZIAAAAyUlEQVRIx+3WQQqCQBTG8TdOB5DUI+S6nRcoPIFhu1bBHGGO4Any3TYxAkWTv1DSYr71D4b5mOE9kWmszkeC/ZptT6Ocl+xj5qgtbVR1iZn9VE2wU2uO2Jryhm2h2OaKbdZgu/NKrXVK7f6q1JpaqTWFYpvrUtqhPTTYpst0aBOv2Drltlxh392iu0U1t5I4biX13PZvF7+zvOFWihXWlNy+aqZ/M3LcivXcds1xK9kKK3GYAVtYe+8CZ/c/7Br9blSNcgn75O/tE26TasUvH0ImAAAAAElFTkSuQmCC"
					), aCr(1, "victory", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADYAAAAKAQMAAADFMz9IAAAABlBMVEUAAAD///+l2Z/dAAAASUlEQVQI12M4lvj+++efLQzHkoH0jxaGI+yMbcIcZxiOpEHoMyD6xx+GHBB9oIIhA0Q/MGCoSAfSBQYMBskP2z9bAOlEIC1hAADJYSFMvxXXTAAAAABJRU5ErkJggg=="), aCr(2, "defeat", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aCr(3, "orders", 6,
					"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"
					), aCr(4, "crown", 4,
					"iVBORw0KGgoAAAANSUhEUgAAANIAAADSCAIAAACw+wkVAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0xMi0yM1QxNDowNDo0NyswMzozMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1ZmFkNDE3NC03OWNiLTUwNDgtYWIyMi04NThmMGExODUzZTEiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4ZDQ1NTIyYS02MDRlLWYxNDUtYWM3MC1hYTQzNmJhMTIyNWQiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo3NmYxZWQyOC05MTFlLWJiNDItYjZjOC05N2EyYmU1ZmEzNzkiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NmYxZWQyOC05MTFlLWJiNDItYjZjOC05N2EyYmU1ZmEzNzkiIHN0RXZ0OndoZW49IjIwMjItMTItMjNUMTQ6MDQ6NDcrMDM6MzAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NWZhZDQxNzQtNzljYi01MDQ4LWFiMjItODU4ZjBhMTg1M2UxIiBzdEV2dDp3aGVuPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+jNxzTQAAIABJREFUeF7snXecE0X4/5/ZknbJ3SXXC/2O3qWXoyO9VykCgkgHURRE6dKUjiKC0qX3Lr33zgHXe02vm0125/fH5nK5gALq78v39yPvV+CVnZmd5LKffWbmmWdmEWDw4eN/GMo7wYeP//v4ZOfjHeCTnY93gE92Pt4BPtn5eAf4ZOfjHeCTnY93gE92Pt4BPtn5eAf4ZOfjHeCTnY93gE92Pt4BPtn5eAf4ZOfjHeCTnY93gE92Pt4BPtn5eAf4ZOfjHeCTnY93gE92Pt4BPtn5eAf4ZOfjHeCTnY93gE92Pt4BPtn5eAf4ZOfjHeCTnY93gE92/5APR8Kf64D3/X7/COTbeucf0PhbqHYbNCwc/BMw6Z3r47X47ta3pu7PEPswoEuH0lcfFcQeyE/o413AxxuAfa+3e43pp8y5NWLjzLLZtz/Ztapxv3beBXyv17581u7taPcZzJ/zuS7/AQAAJpo2rpVXYMyd8fTy994lffwNPtm9BRItSOOBDmwKefcAAAMvC/lwQA/bmckJAA7v0j7+Gp/s3hR5DsT1gZVLP+I5pjgVEaSy/bZ10uoX1mW2LE728ff4ZPdGBKRBpQ6wecdgOvQjryyCFHHydnXG/ur/Kfd0kFemj1fjk90bUakD3Ly0Um8vy3NWgpKVzEQAePm8XotXHyctlkeflsz08Sp8sns9wU9h4sjqOqY04L/swNGyUl+O7/HlnO0+2b0JPtm9njrDofXGgYA57wwPEKJoiixXKghA453n4yV8sns9HAekKMA79SV4jId/1Go57PXO8PESPtm9BtoCNaspxfJY3mnyznsJjL1TfLwSn+xeg1QDcj8pwBsJCiHkneTjVfhk9xowgjfRksOWBwDYZ+7eDJ/sXoM5EtIyXzNKQAT9hubQh4BPdq8Bk5CXb7dq70r8KwK8wu4hgrKobwnvJWK6ZKaPV+OT3evRdQRku0cGN+RYvVcWQoRV+5C1ZAAAgdB3C3dCK68iPl6BT3avptIuIFmIHwIAkNseHj0zViVPy0MaYcx7FsMcyxifI0QBgERK2z2yavwGTz72BYG+Gp/sStBmLCjiiw+rbAJ9JTj7E/zy3ZX1y0pzTgtBSt25CJBV91DQHAAsWXUopzVuOxYCXgDHAQBU2AIAQFFwfAdYQ93n+fDJrgjCCX07E1/N+L5ixWruRJPJkJmRurLzfAbb7j5KjylzTFW2n8dJyGHLEd5JJeKEZE1ENjSp12TIT2MCApTuUa1OpzN1/VgShg8dLj7zPce3lgIAoNZG2Bj7ffkyFb0zikhMfjF7xjefDG1St0YZVfkh6sRfL569/2G3NqydFQpM/HrrwqXLIiNKEQRFkFKbIR4hCghSLC+PeQfmWQDYsvmnyd+dK1Hv+4rP2gEA+K+EMgfKe6d6ULFC5fYd437bfqn+D6+QplQqqlmrQaVK1S0Wxlx4lTEkkLRCCN825ZyhpKGqMv2crHb4iAlXO53bc9z79PcQn+ygW3foObwnSf3dT4EBT54y5/HD/nceJLUtK/LKTUrOnf7ddwZtrjH7CCKlJC0vcuMhgpbzTmv+s+UB0Z2xODQ3w+vU95S/+63fBxAP4eKgHr0HF3XFEO+0WgqvFk1NEIrwVoAIwLxOp1m/cXuXju3i2pbQToC/rP/IrTt/VSKEkMeAwxNSpDQXXON5+4bf17S6NT63gXeB9433XXaxe6FuvcaC5hCijLlnOFYHiHAX0GXsB8DK0r0AwGQyliqlYq3Z7lwAeJ6QVb6sFHmcwjAMy7p8KRjjgIBA4T1BiKOUuuBL4JPd+y67skeg12whFB0b885xDgMggiAIwMDxHEEQACQAaFO3B8eM5DnbrLnLOMM5glIIp0vF9KzFxz7qU8ddocGg9wwIQAgZDHqlMojnOQDQFiardgOMcOe/p7zvsnNDiUM4VgcADgdrNpsRQgghiqIVCgXP8wSlKEz8NTh2pEols7JSo8kqnGVhWIcT+nRrotYYAcDhcLwchIIQslotEokEADiOQwVe+e8jPtm5yI9fSomD9DotIgiSdM0tcJxTr9fxPK9UqkjaX5e2KzC6+5gvNq/78WMAIAg0Y962jm0qCJozm008X2IOww3L2kUiEUEUN8TvOe+77FCR2xIRIrudQa9SBkEQLMvSNA2A9NlHU1IZEe363TgORg5tazRaESI4jnObOoSQVxCUcEhRJI70TH5Ped9lp64BKckJlavWIyi502oREkmSsFjthWqTQi4JDfG3s06LxaxUqjDGmHcIE19uWNYJAFarRdAcRRE2xrlx24Wh/ZsG+MscjhKlZVIxM8wz4T3lfZfd/amwYeDyZSv/gKKQdAKhKTMP5o2BJ6MAAPq1hzLRQYP6NDWbjHKFPwD5ycjOdx4kAwDH8f4KCcOwAGC3MwRBEATx/aqDR34CUzdYB6c6NYNflw8uLDS6Py4xOSepqvvo/eV9lx1PQUG+PiX5hT8CjnMCQF6hwdoTnhQNNnefhvYNNSMHiyxWRmgoK1YIf/r8xisddNduJe44WnxY0BvmLj04ZlhrjLHQsbtyM1HTq7jAe8v7LjsAuPQbLJ08f95XHSiScnJOACBc41QXdzZDwpW8UpEqjuNIkrQZE0mSgJJNLUEQykDZketPPROfDYBWT6QAwPMcQRAkgW7cee5Z4L3FJzvQx8DNT9VWxiFXKHR6Hc9j1r9EAW1lWNz/yh+/fKTWmAIDlSXyipCI6Wlz9hw75Z0uoFIFA+CfN53ed9Y76/3EJzsAgKRuMLPjro2LR3Ocf0GhQfLS2oncObD7wK12rap7pfv5SYQ3O/Zd37PQe/126/HgFykiSVIiphetOvhc/FK97ys+2bk4eAKM9X/ZunZ4VLhS8at3bnIPOL0wqVvH4tkIAMgv0JctHSK8N1uZQH/QemYDODXw0fjGkRER3y7845lMc3pdyez3GJ/sikmfC8Mn/P7FuHa1q0cXLM26/WWJXIkYNDpTWGjxWCK3QB8e5mpzHz3V6l6KnCofodAb2S9mry5sA9e/8859n/HJrpjkjpDcEZ6f/bNhEpRNBi/Z5XYCnd4a5hGbXlhoKB0dJLynRYBLeprLnYACtaln0OHsiyXSfYBPdi+T0QYy2gBlA1k+WMMAACgbBD8GWQHcyk4hCFFOnlarM1NOG2tUSyW04BA2tYXwO4D44ugSXSzs+bO4Wh+e+ILaXwPioXd7kMlkAIAx5jgeEQgVLZjFGLtnvQCA5/k/9jOcdxioD2981u7vCH4MdUfCngs3DBo1AGDhHnVNtrrvVyFZ+IfJfuNeNMi9MaMo08er8Mnu71AlAEWCJWObttDglpdLfIBL6A+70jWFuYy86Hwff4FPdn9HQm+QGeCTiT+tX/aZd96rsLMOKgIeTPRO9+GFr2/3euIWg/SA6z3LuiLeXXEDBPAcYAxiMQAAQnDyuqukj78F/3/ymjJnyqxZs2w2W0pKyqJFi8YvG085Kc8CcpO80eVGU+dNlZvkL5/+V6/AROjaDfq1VZmS5rarD9a8Y9vn+mXe/CTt6tD0ax8fXlHGnHsc267eOth1dL+grm0h5CGQdu9K/uolN8knLJzwyq+k1CoXLFnw5MkTnU537dq1Lxd8KWWkL9fw/+jr/41GVmqTBmmCnLQzLyzPOw8AAKYsnrLsu2XC+4CAgOHDhz9+/Fg1VzV3zlwhceKkiVWqVBk0aJCovqjW7lpPnjxZNXcVI/Z4wsRLEE5o2wQqV42pHRfbooHq7u1rrB14HlO0H0GQDp5FCDieZ+0WNt9qMtu/Gt9REaBasOLk4wcJj3pA4ev8w9OmTytXptxnX39mMBhK/1Y6Ly/v16m/qoPUABCkCVp0YNHIL0cKJStUqNCP7ldqfakpfadw4d5TcAAQrA6WMBIAyIrO8s77X8pLSvxf9RqxeMSmTZsEPwXGeN++fZMmTfIqM3PmTHcBjLHValWr1dnZ2c+fP++zrQ9gmDp1qmcBtVp9//79y5cvk07y5U+M3Q/dmsMH5eDnpZ8mX+ybcnlI6pWhCef6fTk86NHlH3Tp+y5ubZRyeXDK5SEpl4ckXxx0aWcnTequptUg6Xyv7FujUi4PfX6qHbYdWLe4b/t6ELvfu37hNWHCBK+vdO/evXPnzpVNLwsYEhISPHMNBkN+fv7t27ePHDniVU/jm40XLVrkLrlt27aJEye+/HH/217/q61dgCFg1bhVfn5+wmFBQUGbNm2qVauWczpnT/s97mKlS5d2vwcAu90OAE6n02w2t9S33At7f/jhB88CAKBUKp1O56Rpk5b96LKRABBzGOqsBkSgrxesqV1JlPBgHyJCJBLZi/j7YRExF69ovv6uDCJo4BiF1Mk6CRHNWyzOnOSr9dt+xTkgW+2fcXFbu27DMQ5LvXuwfVNZr76Hdm5bfXThGfVguOcxzvho/UerVq0qPgbgeV74K1pvap3ePD22VaxnLkJICNerUqVK86vNLze9LKR3OdWle2b3kV+5jCIANGvWrF69eiHzQ76d+a078X8h/3tlF5kXufD0Qr+hLs0JOJ1OjPGnxKeibaLtg7cDwLDNw9q0aeNVxr2moUWLFjO+mQELPPMBAJRKZW5ubqVKlQJ1gUa5vvUkYC/D8lVL6+yrn/boN4AbaQkgVYTfvXG+XuspDTr0/fPk7v4D2tO0yM4yhuAl9vCqoaGhyclJSXmZdw2xXe25nbvWs2NllxE7bKbCm8enBQZFVKlR35y9t0vLsF4dxugcFW8tu3Tk0IHcjlDQWtkvzHP/HgAAgiAwxhzHdarW6crhK1wc515GBAAsy/I8jxDS6/UNDzZ0y24yNbnNyBJ/u0KhMBqN3bt3Z+ex876d55n1v4p3JrvPVnxW3lE+PDw8MzPTjMxHuxx9XOOxZ4Fea3sNnTfUM0UAYxwcHBxzNcZ9SNO0Wq1WqVQAoNVqBdug0+k8T3ELEWMMAAaDgabppk2bfrZ8VNqtFdVr1Jp6bk7uiz9SH94TNg4ryM0syM9t3WclRZO807p18+bRY8YRBLdgze3lPy4RqgoPjwgODilbOvLrJVtWzF7cvk2bVWvKlilbrvOwbZh3XDr4RbXajQiSYu1mOXrQo3uXXn0/Hj9mWLUXMaoRKpZlRSLXbIbJZAIAQVhVq1Y9deqUTqcTiURyudzhcJjNZvfXBijelTsqJ8rrfgMAjDFBEAzDNG3Q1CsLACYvmBwpioyMjMzJyclz5q34agVPvHqp2/9t3o3svpz25YIFC2iaBoCCggKJRNL0ctMh0UN0ymKtlA0sa7VahVkpAGAYRjAAwqIsZVG4JUJIWLIl6Ey4KizLOp1OABD+12q1AQEBAGA0GoXrx7IsAPA8T2HRhs1H7JbC3Oc7ABEkKdYU5mamJcbU7FGpYTOWtY0YOhAQqAugXbc+P6w8t3RxCctJkiTGeOxnIwhxVlSUbNa3kwgC/bx+t0gsjuu57Mbx2ZhnqtRsyPOcIfcC5h2rVq958NwKACaTyd/fXzBgwnc2Go1Q9P0RQg6Hw/POyc7OBiieiwMAZEdGo9HfvzgkVVjey3EcAAjLct1E5kYO/HGgu7NhNBqzsrLEM8V7h+9NjE30LPk/wzuQ3aiVo5YscRkMAJDJZHa7vVy5cquPrz4oObi3t+txIn5+fjabzWw20zTtdDqFzo1YLNbr9TRNlytXTii26eNNZWaXmTlz5qVLlzZt2qRQKPr16xca6goUOX36NKNiAMBgMAgpAECSpHCYmJjYo3FWQeJ2ACBISl2Yl5rwuPOwrWVqqoPKVTu4bcv2HUviP4Hng2HW5Or79z8YN/5ziirenVi4xiqVKi8vb8fuh5UqVrmecff5EPzRgr78fZj0+cTG7WfIAyIeXP7Jpk8sU6EqELQh+xSyUKy4IkLIU2c2m03Q3+PHj3FzHBgYqNfr/fz8Ll++bDKZDh8+HBcXFx4eHhMTc+yTY8KnR2dEO/wdhYWFgi0Xfh+WZe12u9eC3DKpZXYV7Gr4Q0N3ilwuDwkJ6d69e7PEZtMt0x/VfuRR/H+C/2nZlUkv01zV3DNF+N1DQ0Pr169/c81N6O1KT0lJUSgUJpOJ53nhd6Rp+vnz58I659u3b0M3V0lNsGbkyJHz58/fsmWLw+HYuXPngQMHJkyY4HQ691X7LYqtLhhIoTBN08+ePaMoCgBy8zQ1qmMAIAgiIf6hKqJWlxEzOIdRq1F361g9qBkcOQ4AEH0bqlapw9iteXl5brlD0R4Awve/didnzaIlXXu1SeoKSV1BqobAgavMJl2/gSNianQ3aFPP7fu6Wt1WoeHRH8Rahi86sGd7c8GYkSRptVpzcnIEW25j+A1DNjTb3LRly1abN29u0qRJ27Zte/XqxTDMli1bTp8+/WzFM+HTUyumisViYfzkJi8vT/itPK3dsN3DGn5VrDkBsViMMS5Tpky3nd3+/5ddveP1+g7v65lis9mEK2cymVq3bv30/NNzrc4BwPbJ26v9Ua1Lly5CsZycHJvNJjRqDofDEOqyXqM3jRvfbnyl8ZWEQ5IkO3XqVL169Rs3brx48WJ+zS4H9m1d83hthw4fugsImisoKGhU7raIIhLi76vzUnqOOWozF146d2DFjytubgatx1KbUj9Av22fzVlwpGe/8MLCQqFPxrIsQRAEQWRmZgoVshazSiwDsAKALRj2/Amnn23d23MrQsG//r6+5+i9BEmf2zOhYbMOqyerv/5mYZ+e7QCAIAiEkKA5u91+6cTiY/T4nzeMe/Z8yqKF893fwWKx9OzZs2HDhpqpmm0/bgMATajmxvkbderUAQChhrS0NPe2BMePH4cipYl5setdETqdTujhMAwTGOjaGeh/kv8rsuuzu0/FvIr+Nn+McR7k/TL5F0bicsyWSihF07Rerxc6W8IIAACysrKEAizt2h8zJzLnlv5WE20Ti8WCMeZ5Xrg2BEHsP3F49czVtBnKHyc+rTWmUiWX5oRchJBIJKpVq5Zax6xZOVKp8uvdocytp/E1alSnKEpoktLTs27dutW7fsq9Gy8adfxOHhCFnabPRo22kpoTN9yVAQAgDNIXoM3OiS0flpGRERwcLPQXBaOSk5MjaI7jMY/x198s3AKT3OcaqsDesxBzWD129NBvvp0fXapMq94rzu+dWKpc1bFdqL2XZXHNmwpfCWOs1Wrv3L62cN60oYOHtew0ctinJWZ2EUI0TTMM065Wu4zVp68PLwDkPHThQOnSpaxWG8/zHCdsFAQkSZ4/f/6Hr4p9Rs2bN9doNGKxWHBFCVbWaDQKyqtevXiBCO2gh24YGuWIktlkGGMNrVkzfs3fO9X/Gf+97L76+qtFixYJ700mk06na3a02dOnT2fPmg0At7rcysnJkclkWm3xwgOTySR4PUiSNMmLH+3106SfnH+I2tKtAgMkUVHRWq2W5/HG9cuiFQkzxlVFCAWW7lu3X/FWwwCg1+sxxiqVKicnp3aNmJG99rMOnnMYWlY4mpx6OylHgTF2cmTHugkG8kh47MpydUL85IqE5y++/XHiwdOeNbkofR4aNK6MEPqoR+z4mRuXLJrNsqxEImFZNjU1VZAgQmjc4Eo2xlm2bEylyfBiRYkakrpBUjfz9YWTqx6FVWt/btl7uZ9/5Pm9EztV0xHW5xeuKzGAUsHGVcup1bsVLZLt2Ll9zopbYZ5xzABCT4Mkyfr169/fMOwibjdj2iSCuLBh1XMjV7VP7+4REREEQTx4GH/FcO3XcasdouJnkF67dq1q1ap2u92zRc7OzhZumKdPn8KHAABSq/RG0o2aY2oKBcxms9PprL6z+lcdvsoPy3ef+J/wX8pO5BCNnTZ20XKX5gBAKpUCQGRkZNmyZWfDbADQlNLcv3+/aVPX8B5jrNPp9Ho9QRASieTevXsPuz50nx4UDycVK/QrV5ABjSSB9ds0KxOskm3+7XNtTr5gI7+Yf95ztAsAwuAjMzOTJMnw8PCE9Jwopc5SeBUIeYUIU4UIEwCwrD3+0f3OI7YRiFAGhXw5+ZOMzKSDf7HWsNosmLp5NgBcPLq2epT/0aPHSJI4ceIExpiiqPbt29eoUcNms+pStpQuPZ3n+drx8MK7DgCA1OmQOh1sdcecvX5Zk53Z8MNvLuz/nEBPOjVswTmdAGB3iOwF10haIQ9tShCg1+vdzZ/QD0EIcRxnsVjKlyudl6/98qu5ACCV+kn8YPfBp7v3HiUISpO87uEQS/RZSO1Y/NFWwoZK7smCEBI0R9O01epaFdzr0141t7k0BwAkSdrt9mrVqn287OMli4uHgP8J/6XsAMOYMWO80ux2e1hYmE6n+2bmNwvmL3hR8cWuU7tq1qxJUZTgEzGZTELrYDabzjc5LbISlXfwsX9AYQFQNIwaPdjRHYaMmwLGHL3BjjHocgsEzQkQBFFYWCiRSBBCVqtVaIiF/wHAmHMq0OkE5DrEGBsN2qRn97uO3GM15t29c3nFspUp4+CZ95PYXVA28JOI5HJ/O+vAvL1WmbRzCfGNGjfbsGEDAHAcd+HChRUrVsSUlkRyT+tSYpYxZGVB5A3IaeRdlcC5e1C3TPOxkz/+5JOPOwz+LeXJscf3jtdr3MpqEWw85hxGXfo+RFQlCEKj0UilUpZlBZ+I3W53dRI84oZsNovNBu2aRffrXAFj/sZNeXp6sjnftGXaIaUS0oYCAGxpvbblwxZRUVFSqZRhGADQaDQURfE8n5eXd632NaGqNWvWuCr1QCwWd+/eXfeb7tcRLy2n+xf8l7KbtWZW9GfRnilGo1G4RxFCbpu0Y8KOmotrtm3b1rMkwzDff9Xpp6VzzVc7NOgfx/dxGgzFj7zRZ2UhRFrUd3hO6Gcgp13Dc7bmdaIzMzNVKpXghyNJEiGUnJws6Pjp06dx5ewmKw0ACCG9Tv3s0Y0PWo5r02+EWE4P6DHy2Xj9i6vuD3kFDefDiJGf2WxWqTwkL/Oe3X9gv/6DY2MrCLkmk+mDDz7w9/c3m4zMs/3a/GfygKglP3477eS8v5IdANxPhxmPN+9pu3nX3n0R5RqXrtTm7vnlTkYdU7mmMCAgKFmo0smyLELIZrMJZ1kslsLCQgBQKBSJKbmOgrMWJyHyKw1Fj2dBRGsAqFylZuUqNQCgd58hfn5ymhapC/NTUxNXrB1ZqlK/UaNGCJ4jiqL8/f03bdp0ocuFa42vAUCFFxUUMa69IgUEK4gxVigUqgSVZ9a/57+UnYgU2Ww2m82mVCrtdrvwvWma1mq1NE17jphmTvx6/WW627GRZcqW5TjOxrBjB1fbtv03AABAWnUOBrBpHzjtakFnFEmYbehpup9KwUaoeH+Zk6apjHzbhZObsg2R48eOstvtCCGdTmc0GgXNSaXSC5fu1gmlAQDz/P07F2s2GdVxyCjMcynJCbO/6nPsvPdar5eJvks0Gt0CY/z8zjaRLNomb+HWnADHcZGRkXl5RIYtNv7mpkYdZjVu2tpv1mLqa9ZZwl9bgsIacPoWDBjem3gGew4crtHkUwB87dh3Eok0tkotnuf6xWVt/G3z8GFDAAAhlJGR4T73zNlLWLNr/PTEhd/2l0rVOhPJc47nWYrK2j0ERUlFLABGBA0Y46iOGDtpsX9sxaprVy4mScTYHxw8l0BRFALYa/v29lcOu7/LbPI8r9frAUCpVDIMIxhFKDKxsbEl5oj/Pf+l7FiOFfoQnu71nJwcYcSk17sSVc+g7hCoV7/C7LldbTar0F5gAIKUOpg8J6u3ae9D0RoZhEipiNtzJapOg659hjdhGGbfvn0PHj5+cX2Jwl+19udfr93NX/rDjwP69xP6y0L7K5FIfl6//eMPCwCAJKnbN051GradsWgokszKzVqwfMbRI0L1r8HO8ARBcBxnKEzJsn7Qu08zz1zPyd8H+c3bitYBQnqdZvSYIUnnNqZ08iz7Ck79DvIc6NCu29mrf1r0hubdl9w8NS854XHFKrUdDlYpLUhOTqZp2rNHIZVKGtakP+q8kCSp3t17RFdp26RFvw8//LBzs5CMjPSzZ892rHELCCyYQEP2cQDA2Okf3paWhvG8g6bwyH6VAAHGkDgj1q/dU5kMLv0EmipAUSKJRMIwjOe1AwCCICiKSkz8j2cy/kvZ3Ym44+fnJ8whCpAk6e6xmkXWSgdAMRWGDm834c4iXXqKkEWQYs5hdjD55vxLBCUDQG7N8TwOD0ZzNkW2ahXXrFlTocIOHTrUqFFjl1g+d0o9k9nauG4oSUk3bzvQtVOLkJAQAEhMTLx4+XqfOIPSz87amTtXT/Qac4ixaJRhEd9/N/PmjfOHL7m+3mtZteY3juMwxnlpl7TMKJVKZbfbxWIxePiKXe0g5ihaZLcZaJGsVJny1WbBa2UHAOZIMI+Flo3anTl/hGGYhh/OvHpkxvOn9ypWrd3hg5ztZ/bUrd82NCxCIpE4nc7EpNTLly7MndrMyWGOc87+YUdQRJ3KlSsDAMY4JCSkT58+q9eqJ3RLQwRtsbrMFUKUKf8C7zSL/StS4iBpYE3eaQJAc+bPCgqN2L97c8D0nefGmhlJMo4oHnMIJCUlURRlt9tTq6d6Zf1L/klQe7f13co/K2/zt6U1TjvVoXgEKHKIps6a+sUXX6jVagAQ2lYAwBhLJJIJg2qcv3NNk5lBkBQAIIImKKkh87jDni/MvmOMVYFygiTW/X6GIPDR04kIQbPuS2Z+PVG40gKFhYVCL2fh4tU/Tq9hKbwGiEAIWAeRkicHgIaV1HqLSCyW3L99OTC0Uq1mY+w249rV6y5eOHfxBrzVakK7+pTFYpLIVIc3DDD5D+vR/0uEkHvWBAAQQqmpqQCweev+7tX2ckRg/bbT/BT+4z4dvmFvdom6/pYPm0Cnjm0nTvlWW5jnFxC576cuDeO6IESqFPakHIXaKJaJnZVLGS0MxbFaWVB9v+AmuebSlT0clhqNBiGkVqsPHjpxYd9rT6guAAAgAElEQVRkhoWWzUrL/SRNGlSuWjFao3O7pRDvMEkCqvqFNsKcy58SGKj8fePPDzKrjvvsI+FeUqvVglccIbRr1y6vkayYFXf7qVtEagRJkk+aP/mz51uvB3472Q3ZNqROYZ0pU6YAAMMwiYmJew/snfvdXM8y02dM79u3r9tdjjHOzc099eelNQs66Vy+OsyYkllTkpPVC0+OE9EULaJWrz/+8Gm23Q7PloDdH7SVwSmF+/fv1q5Tt7h2gMLCQoIgUlNTzWZTaXIDKhqlesJj/sWTewpl2VrNx3FOxmoxjfpp+IlXDNT+jlq/wKXOBziOsxiy85KPPMyp07zdyKAg1zYAIEypJSQInojrF7b2bKZ7eO9+406zMMZbNv30+XfnX9t39KTjYHC+gJ27dyOCsFnUV4/NaRzX2eEoMfflRmdg63be6Zmi0WgAIC0tzWKxtIhrAQCh9wEB1J8ITgfUrRURWz6yc/s6ZktRhYiQ+FeSKWvxnA0ACIJ0OCyPUsOVKpX72gFAQkLC1JZTcyNy3SmjfhlVy1lr3LhxAOBwOLRa7YoVKxYtLPaavQlvIbvBWwYvabckIiJCONTr9RzHxcfHHz19dMm84ruB4Il5i+aVK1cuJiZGJBKdPHW6agVxi4bRHIcBEbzDaC64yjutgoniODzz+4MAViPLX9wOAGBxVe/Cxtg8pxetVqvNZuN5PiMjw8/PT2WZa7F59xM4p/PpwxtB4VVrNR/jdDA8zw0b1v/oRa9Sr6fTUNg2by8A6AsTSWeClGJ+2Fd5xteThIE5QRDJycmCMwwhBAU/qxTs/ZvnW/ZeDgDKiKig1MbaYmP0RkTegMGbKs3/frXZZOQ49sqh6WERZSJKlfV0uQnsulj662/muw8xxoL7PS0tjabpPXv2zJ9XnOuXB4Ch5XjgC6BMhGLE4Dahwf48jwHzGHOkKNA/sj1gHmM4cSE9PYetVKli6dKlxGLxqVOn9rTcc7v+bXdVJE/qLDqFwjXm5Xleq9Xm5OTsPLRz4bcL3cVey1vITq1Re97rBoPB6XQmJycHBgZ2ha4JFRM8ykLdZdD4TvSPK3+x2WwYAyJEDkuWWX0dAHge6w2W/EL9hq3nTVXgzE+e55UgWEvnBdj0er1CoUAIGQwGoX+dmZnJcZxUKg1l5gn+EQGMsbYw32x11mkxieedfoqAmV+NecwlnRSGyG+DRAc1G8LJP/fSYvmRjf0bt+yOMaYpfuPpyjzniIqKEvyOer2+atWqT+KTB8U9BEAZKc8/+HCegzEBho/69zl507va16J6Di2/gC0bjjgdDkokv3bsu8KcZ01b9/C0QABw6Ga5IcMmChOMGGMhmIWmaaHvf/zc4e++LNEEedFuHDSCqK4f1i9fJtRgtCKEeM6qLNMXIRIhhAClpiZMmzL99h7Qlxi4w5KlS778ssTeMGq1WvBazDw3c/fo3Z5Zf4O3qfgrehzqEdS9WHMAIPgwAcBkMvXY3cPd/AelQe1esP/wfq43b7VaSTpQm76Ld1oRIktHBx04/mDRigvEp3D7i9c8FaRHS1AFSpMWJwUHBwuBkAghjLEw/wgANE0zxuIWViyRPrp7XeIXXKv5WIw5iUzaskm76/9088wKJ2HK1CEA2G7Th0fHCPZGJuYKCvVrV7umO/V6vcPhUKvVN+8k8xgRCEeXi715Yl7dVpMBQc3aMSchqUSlb4C2Muw/CmS7riGhkfMWrKjX5gu/gMiD6zo3ad3bUfRkHwDQmbBwH7pTRCKR4GeRyWQWDRtXEx7vA91f+D3+XAt/QvaxVdnlV0H5MqHfftG3QI0NWccQIQ4s3Z3n7GXKxh45deLu3Rs/jpyz/3zxiYMHDy4+KPLLYowNBkNHccfd8F/LjjNyGo3Gbe3UarXQ9xQOhf4NAMTNhNj4wA33LmpSXxAECUAUPF9NigIRIpWBfk07rVA1gac3gPlb72OFw1BlCXw+/ZvmzVsvWndi/NiRgnOEIAi73Z6eni4469PTUipIXb0ngiTv37pEUZI6LSdj3qlWF3w6YsyTt+7pFhM4HwY8/dyQmXF21wj/wEgAENH8ot2V166e5VmMJEmSJEcO7xFivqUxiSmSZiwakVjO2s216jRAXNI/e3r2nj+h2racu3eu1q3bxGLIadVn9aWDXzdu2cnOuLzHYzomicVit3eNoqinT5/SNI0xvn792hej6wbPu9mkZsPUbZD3QXG1XtybCPcmQvljBbcGrf1kcP1GH1Qkwa5J+l0SUEUeFme1mipWrPrpmMl+nVdsPQYA0OBW/cAaxc5Xd2yfID5hevoNeVPZiSVihJAQCezprxKmoYRHmfduA/7+IRu27dOlJxIEYSm8xloySFEAz/Nhof59h/+UvAtu1vCs9dXEfg8LflhSqlR5nU4nF1mSk5NoWgQAdrvd6XQKEpfJZGvX7/1uKAAAQkTiswe0SNGs+yK7Vbdjx69HD526cxRMJWZM3oKgeIiKlnJGHee0E5Rf9bqN7YwtVytpGecdKY4x9vPzy83Nzc0OigwyY8wZddlimZK1m3v1GoTJHV7l35yng2FFk5VjJ3KtWnYAwLG1e9y4dLhKzQYSiRQAGCd5bNeuxo1ckyEmk0lwGgQGBt69H9+nfVNdTubF66ebNWhfqxWc+sWzYm9SOoMlHA5Ou/3kWeGY4XFA+bGWTG3y5qCYkcBqGjZqbjQZ7W1/uzQXWGTBGBcWForFYofDgYv2ATebze7ZyDfkTft2nY512tVil2cIA8Y4LS1NsHl7du9Jvbd807YDNpsVEGHTPmCMiYigCIK4fD1+95HbKcPh6cce1b2KqT9MDeFCJBKZyWxGmB09qJqIprRpO689i0otDO3cyRUwBwDnzl8indm9mmVzPAkY7t44pwqLqR03DjCs+3nZ0tHXX97h8K3o3hO6Ne/Rs/dgm0Xz8OLyyjXqA8Cfd5Vd+33tHlFBkclnGCYvL2/z1v3TB6YxDlKv03AoqEKN7gihgV/1PvlHcbX/gDJnofYC2L//jMGgF4kVJ7d9XLZCzaDQcIyxjaUuvGjSoH4td8Cz0+nMe/FbrQqMLLQVRfst2/CQpMQymdTpsFv9rQsGL+D9/27lBGKhazuoVinikyFtiCKzoizdC2OOpkUH9v2x49AfK9Y+Dw4OLj4FoaysLIfDQVHU2bNnp34+1Z3197yptTve+XhuYq7gj0UIaTQad6gcSZJZL7Zv33XUaDQQpMSquWM3pyKCEovoq7dfbI2/ffqCV2WvYNLsST/MdvWZtFptQUHB+j8OhCp0beqImlQpbFKlYN1uVxwej+GT9iliEefkCHVBTlrSozpxY4Mja/I8J/X3v5b5bzUHGExpMGLn17q8rEdXfilToSoASERceh4ZGBioVquVSiUAaDQakiQJgsjOzva81yUS6f0b+2s0GWkzqxVqBG94W/8F6W0gvQ30aNZ26x/7Wbup08c7jm8ehAGHhEVKRc6ONS7tPJWuM4sIBBiDSsH2izM7ncAWnvjxULnvv18gVKLVai0Wi3St9Hr160e6/uX8DBbB4Yug+yb3wbRtP84fIKIpgkC69L3Ksv0dDrZr9z6NmzbfvGPP55PHCbaGYZiMjAzB4CGEUmwp3jX+NW8qOwD4/fffBwwYwDAMxpiiKEFzBEGcOXtl6+aNOp2BICXq5M2CKy4wwG/YuHWalnB1o3c9LzNp7qQVs4uD1HieDwoK6tat6959hwP9MvQWEQCa0tMVzI0QWBgKY6AoOjXhbqu+ayhKxPMc67B3j/vwyhN3Nf+QwBQICVE6GCsAmA05UmlVALCzRKkwTlhvJsxdClJjWdarffEPVHEc6AuTRJIAiwVHX4SsFp75/4S7g+Deveu1azdgrNp6bb64fWaJ0+EIiywFAANbpMskTsHBYrVTAAAYbzhdqW/fopB/AISQTCbr3Lmz7LzsCPyl7AQuLwDEg7TtziWzB4lFIjvr0KfvlYe3JilZUFBog5p8VlamzebSgKA5kUh05MiRX798ixCVN21k3bQ93naIeojQf0xKKxjSLSo0SEpLAtQJvyJSAgChwYHdBq/O/fwvo4m8GLVk1PJxy91rsAGgsLCQJMnU1FSM8W+b9876OMPKlLg9EEGkJjwtzEtu238dIsjAQFXblq3v7/7Lgdtb0aUpbNi0XSQSA8C1o99Uq91QGMaGBTIT1pRds3yO0Wg8f/68EPpWs2ZNmUzmcDik+rVSsatPnZ+TmfTsaudhf2i1mkmLRh/b5Vn9P6djYxj4Ud9OXfoQBEnR0gv7JtVr0oaxueYeBTCG47ejB4+Y5hl4IXiSrVZrQUHBzp07f1jqvVj9lRAO6DgK2kZV6t6xAQDwnFWiqCgLqisRi9Zvux4YUonjeADgOG5d/XX3at/zPv9vebW1G/H7iPCkcJ7nEUL5sfm/DS92fJ3pdOZZTjzrMHWcoho5rHd4SCwAVif8ikgpABaLqBETf715xNvr+zeodFGemoOieHGMMULIPyCIQMXxFwJpifFadXabfj8hggwIVH3YtvXjbf+N5gDA4YSwsEidTiOSBlSu/oGgOQDI00na1XceOnQ4MzOjf//+crk8Ozv7+PHjNputXbt2oVKHk3f1h8rGVEl8eh0BKlW6LJdaXPO/5MR1kLTaU7N2/VKlyjkdtrJVO928dLhe07aejhWFzJGSSwrRtZ4ghITYsNjYWHmhyBzi6rH8DTwNxzaBtO2LAT2b2RiWIGWsNUuqrMnY0ZiPm/cbMPbFZC1TJyQzMp0jirdlGbp1aGR8JAC8rBxPXiG7ycsnzxo+S7hdTCZTfHx88IzgEx+deFz9sVAgOzKnVyv4dNqUatVqY0A23SNBcxqdae6Sg4nj30JzygRABGW1WlmWFZyfQgSE+2LHlI8o0MfLxMV/GElSWnVO826LCJJSBCo7tGl9dxtoK7vz/y1VqpTS6TQAgAARHg0oQtCiRv6Pex78sNTljkcIjRo1KiUlZdPW/VP7FseJsHYmLKoSLZHb7Uxcq8ZZm64/GebO/FccPAeO5tNmfje3UuVq0TFxL+7+8fDWpVr1mzkcrhB2BIAxYlnWZrMJv6cQmUEQRGFhIU3THMd1mOq3d8vrZSew9wxwrTY2qhczsFdTJ8frsw4py/S3WG2jRvZYv3Tl4UvFKxAAYM7cOWPHjg0eEgwAFovlyZMnMQtjvvn6G+x+jmUR3rLreLxj65jWbhONEIqOjh42ZBjajB4vcsmOtEOL1m1r1frA4XCw5jS7KRFjZLbYvl928Mjl4qrehMbDwNHcgRDiOM5zdYUQPwcAeQUGVXWWYYXLjylSdPvan826fU+L/DDG7Vu2efjHf6k5KNpCBQCeXN8QFirhi7ziBMI7L5SZN7d4bxH3iGrcZ0P8bXONRfMlHOeUyeX6wiSZIqxV6w93J153n/IvwQiOXgG63XdfTp1VuUqN5t2XXD40Lf7RndgqtTyLvfx7uj0sBEFEU+Gd++vevOk/chycQ5L4vWho/+Z2Fow5JwOiOjdtGpebk0a0PHTwgqvYgB0Dpk+fLnwKAFit1piYGIlE8uy3Z1s/2eoqVEQJ2bU833J28OwGDRq4U4T9EPR6ff/+/S9dunQ97joAdGmnGLRplMPhYM3pVt1DjsN7Dl29fT/1gIc7+01oNQ6OXXuy/fdDGelpwSGuFStuv4xw6LQmuSckTUZDauLTinX60CI/mUy2cvmy8/ddWf8hS5dtZFm7TBGW9OhgSKvitZXXnoeOGP21Z/slXN3Q0NC8vLxLj1V1Yo0Yu752udhqWYkXKtbtX7ZcTPgsgPHuk/4DDvwJKevnbBDNq1ChSrdPDx5e31OrDlMFhwOAyUZHh/J2hoGiHxBjnJWVJczr8Dx/617qz4uXbtyw9hic8Kzzb3BK4cheuPY08djAxH2bRlqsVk3K5uCYkb37DOnUqZe9w8cnTkKrS63m1Jvj1hwACL49nueHlRtm/8O+e2CJCYwSsmt4u2GDacWagyLXlEwmYxim+/Xu1+OuN1sAB8+c1uVmsZZMi/YuQmSp6OB7j99aczU2gew+pN/4qUtdzfqTEf16thaWk5AkKWhOaGf7tjDZHSQAECSZEP9A4R9Srnon7LStWb34VvxFrzr/Pd27gXOtAwAQIiiqONoKA7B2XqvVBAQUb/4gLJUV3p+5p2xURc843I0yzk27WbFu//DwqKKZhf+Sh5/Ct42/PXH5li47o+vIfcd+HwiAVMFhAPBJ+6R5i38cN2aUTCYTHLnuacyAgIAv+hdmPN00eGDvIx+fOLG5RJ1/j6YaPN8Oq9Ye/2RwG4KUWdQ3pYHVpTL54O4Db9//o/yx8hUXV/QszxRtHhIZGRl2MAwGemaWlJ2clRsMBqFPIIAQoihKGFrStAjxIN4PmoEZtERpKdyDSLEyUP7x2I373/TOKab0Fjh64lTqk+1qo1iKE0+edNStW8d9FQFALBav37jvq/6MgyMA4M7Vs4qA0LgeSxmrdvOmtTdvXNz3qvWFLg5Go7MRYKPgrASKgkaLISTQqRAA8Ori2AoBa9Gs3dObm0m6WGFSmkvMxP0jIkwmkxB/Iaw8QkV7r5BEie6LnWE4jkeIcHJccIgI4K/7UvdV6LeS8+1FvPz1PLl0ECZ/0mPhkvVWUz4tlmWkvogqVd5ms+jMos4N9VeuXqtcqaKnc8ff33/t+j1f9rGzDmlhxhnjHQh+BOrilWKvR10DnqXl+CukRpPNpn8i8a+ICLpzl767J/6hrBjpcDg8rZ37oy0WS9OmTTdZNpn8ijuCJWSHAfM8L4y33aSnpwtVIICxQ6PnH1gFSKRJ2YJIsVQqmvTNz7tOeRZ/IwZ8SC9ZMCgzfiuJgKKgS4MsgKzUjPs3ngeJxVK73VY+wtywovbzPiBoTq8tbNRxukweYmf0v/y8bP6ka5ZZHtUZaLgciibXAwAUNhkIGQAG7AQAiPIo5sl9AADUnAYA4IzA2bB2G/azBIUeE6wsSYlCI4on1xgHWb6UKCMjIygoyP37EASRnp4u2BIxzXvqDiGkCFABQiaj/qPBQ/fZf8NWCg1vBM/8ActBHIP8WwOSACKLvioC7ABWCx4OLdSAAgDgTNh0HDgj1NbjDbdA6VKwNQxWbcpJatPl2+lzmnX93mrKv/7nojoNWmPMlwu3lEenE1Ov3UpQymQyO8MEyJh2HxRM7I55HigSA0nt/n3EipXH9vTPT2vv/sDXs/8kOLutr1e2zOB+cYbsEwhRgaW6rf1+85rtOQghT+UghHJycnieF8yW2a845hy8ZGcmzBRFCSNtAafTKYySMMaFGsN3sxZizFs1VwEQQuiLWZu3ezy19w2pcBRmTO5YoCe3nQkLDwspKChoU0dfq4KlbJilXLjrsem4aBd+ABBLpKlJT8vWGol5npKKzp69ZnHHFD4NQCPqgZoGuhyKGAqYB8CAi1cmvwahJCEFVo8CB2BQUegYxlgsVT6/vS2mWol9Q7o3ypz7y/bv504T1nQhhBISEty+nh7NdEJnwA1CgHkOAMLDI5W16+pwXSSpCKFNi9Z6YQDeve4LAAOiQBwKrBp41rXCUrhzCCkK6ANAQEomNIzGlbJhxw1QOAAAI0iYALNmztq5Z59MEVa90QiT/r5c4Q+AMIaYKHNsdNHFxkCRvMEm+fFgSGiwHAB6NExcMrfXjU4/Z7YArrg38XoOHwauafr4UTK9wYqxw2EvlMlU1/9cap1WYq1qdna2ezlfWk6ax/UE8JLdkhlLAhcGjho1iqZph8MhOBiFnlZQUFCU332JtA6Pkd2YgkhRanq+xfwWQQduqi6Bnc2q1G/QePmP3QGAZdm7d+8u3n3y20EJZluxlRZAgB7fu0ZRIgBQlatWp2y1BHfLcywKTWmD/D+EoEAQKwEXO1neDuwERABgdw0IAcbYZDQqVcVL8w0Wum6s9ezZs5GRkYKFE4ISMMYSsbhUpMlqLyG78OjyPO8kCKpx287+4VK9ozkAvP5LioKBoMGWWbJvgAE4oCJR4EDISII6AQAETjoMAIk9IegJEATJcc6yVT7ct+7nuLY93IEq7tGYiOYPXvan/OuuXTUSABwOx5kzp5d+d6Pbh1H5h7MTSmxK83rOHYJDG282b1yNIAhzwbXA6C7fz/r06PGLnTrEEQRht9tZlnUbr/j4+NODvPtD3g6U6xWv175dW6lUEgTh7t0rFIqde44O6daZ4xyY5xApClIpZn6/xz14fnOir4BKFb3g++IYaJ1OV7169c8CAlb+sX9Sj3hzyWhhWiwxGrTlqrbjOO74jlXKfmANAbgdhAY2ASRCyr7AW0Gk9DAbb49d7Rr34eK7nuOcCv8Se9IgBO3q5P6w9/7woeVYllUEhBr1+QRBiEX098t3LRhRQnMEQfDua+50Al9iLuE18A6QRIHDAJzZu2OKnUhUFiQTsO02Ks/glNMAcONb+GXmj6M+nWzSZcoVSqNeK5aUcBdTJD58NaBT78/LlXN1IkmSrFq1+qTPQo+cUNVa92VC39fdDCWxBcPPmx50bPuB1cZi3gGIbNKu24aRy6pWLs0wjKAcoaRCobj99Pbjfi7Xmxtv2R3pfeSk4+T85fPr1q0bHh5OkuSxY0dzMx+f2791dL89gCh91n6EqMUr91+f8E92ZGmzslLvT5Z5psjlcoZh7HZ7716djl0vjKuhKxr7AwDcvXEWAVflg4F+/vJVS3+5sFeBYlshv9YQVAl4KxAkiEv9K80hwn1lq8tWVqpeEwB43snzWCz1QyX3cLA7iIk9kg+c2Kq1RWXdX1S+/tdWc17fFoXzh5cYMSCE9HotEp5f8c/AHFByoAOAY4AtAFTyMvFmJK4CktqoalXsl4b3nbn88PJoYirGWB4Q/ezxnboNW3hGI/95N7hLv6mloou7qgRBCNvoDh7QeTtmAM94edz19zy+DN3jNp7c9ZnOYDHlnQXccu3ST3re/arlw1a1atUqVaqUwWC4f/9+ujX9hzmvmIvzlh0AOGjH/LHzRYxoxE8jbje+fXfMvQaDjMtWf4EQYTe8QIhSBsofvcjz3GXjDQl6ApLAmu3atfZMtFgsJEn6+/vbbLYnmdHdGhcYLMVNrZ2xVf5goIO1Xjl/2RQUDu1qItUAQGLgrYB5oAL+leYAwJ7vtigqMqlx0/YAYChMFkn8AMBmswrxbW4whr5xuTfvXIw35hU8mf7N531sLy2yYVk7AMIYm/U5/qrS3tlvDuaAoEESBazG1c8rkWsHeRvEmaGl9cFPZ1ctnzdu4nSpIsSoTbMzNlpUbLkN9lBPzQEUTwKZTCZlgCziFuR673/3GmzBIOkOj56ml4oOdtjyAIC12/hvTy84f01sFw/6bdDuwbudlZ3C8w5e5hWyAwCT3ARyWPrdUgCQZ4P1BbTq1FuXm8MY4gHg0rUnd99uoZCL2J0QEFrT00sCRSNtk8nEcVyDD6rm6Z5JRa6fWCyRiUQSf2U0xvyy7xfc0M1DwTVdFwDzII0s7rz8MxAJmHPLDgOKjCoFAIxVR5KuTezEYonQ03BjNLMLV9765rPqW44+yc43qQJL7OHA87zVahVOUec8EmQnAiMGAsE/vUNEwcAWuga8nmAWCBEK+ixnHDwq/6efXFG7+djDz3qkJDypXKOeW1s2lrJYLJ4T3zqdzh0Q3qJF3J/L31p2AHB5HvzY5sTqxcMApATlxzst5SoEXbVqNGHmVdNK7EP/Mq+WnSe12sOVZ8906U9NeecwYJqm1uy5nPupd7E3ocYTkaUsR5Kk50gbY8wWbTVMUiKZ2BXGAwC5WamR5RoHhMQAzxvFFcGvMmAnYA4kUQDuJ839C+x53hcSAAB43un28ptMRp7nAwICBSUF+PslJGXt3DDo8rnra5eOJAC6DNyw+ee+MomEIAiGsTEM45apOvdx+epdAEBG5mKO/OeyAwwiIbiSAIcWOBuUaMExrxrz0Bq9dtX8YSMmRcbEFWY/8OwbYIzsdrs7Al4gOztbcLM5nRydDpV3wvMBnvmvh6fg8EVQdtsxa1r/whdrQitPXrTkF93gfnv+fP2f+XrZNWpc2pqXDIAdTAFBSvUGi7q7d5k3RCKT1KmQkZyc7LkCzeFwZGVlkSQpkUiOnjjY+jNWbxEBAEXTSc8fVf6gN+acJEldNc8GIAA7QfrvOnNuEOFp6gSKLHEJQRMEYTDoJRJpqeiwrgPXbFg5yG2wrTbm+K5P2vXeeHDbxzqdK+7VDUm41oLb+HAEb9dt/wt4oAOB8gN7iQ4fAj7PWXvv7t+GjZhUt8WEE1uGFOZnh4S5nJZi0uzVSSUIQtjMAGN87ty5oT3KLo9Pc+e+FQUMy2NM0oGMKVHiFyGRiMsftaW4tmD9S0rIbsDOAcJihZ0DXEt/xQaIjChrtzME5UeQUgKhJ88y7k/yPOlNkWhhypiOeoN25+5jE8cPFxKNRmNeXp7Qzlos5pa1LTqzGCEMAJzTSdOiSnX72sxqp9PB8EEEyQAd+t9oDgA4m5fmEODMjNTQ0AixVMlzJZx/BEEEyEW9hq6ZPKY5SUp4vnjCy2Jz7PltQG5urkxawv2FEAoIiRHeMzjwX5i6l0A0SEqDPdvz+xu5GkopAIDDbqFoqU5T4JZd3Qr5V65cbd68mXDI83x2dragQn9/f63BgYNRyBVXPW/L3SWgIuR6o8WmfUBLQpcs29B/4yC37Hrv742sSHCJuEUFbtnVfFiz867OU6dO9fPzS09Pj5waaY2xrhuzzmmEz79dosvNsmrvAwBNU5t33PDYJvUtqLYZnLU5iuTC5Onp6emCXwcVbdtLkuTW7YdmfJRvKYroNJuMVNFkC8Y8QQHQIf+Z5gCBa8+yYtRclUsXjn9Qr0lgSAWWcTmuBVSBfsMnbR87onnt6uUVkW31GYeEdJPJGBAQSFHU3B9Oz5zaXuFXvJIcY4gq30R4/9bBtK+HA1EosIwfML8AACAASURBVIXuY4SM2X7dAYDjWLFUyTLF27RViLSsO3qrbNkydrtdUJtgrSmKOnr0eIPQ3QoxVRQ59dYYysLPc04N7N3MadcAgFQiDbgKANDhRIf61+uPHj06JCQkMzNTJpOVmlZq6ZKlwlkUxVGfz/h88eLFUBQ7ExQUNGHCBIvFEjhDGf9wIbtZT1Byq+YeQckKNAa6jKvY2xJ+FqyVWADUqGLqzYu/5xoiW8Y1VKlUer0+/llCQV7a5N7pbs0BAEEQjFXLWDQAMOubsUAd+u80B4BZ4L2tXbxtZN2E1gBA0VKKIrWFuf6BQQAg95P0G/nH6b3j1Fojx7EASFgpByD4SnQqVdDWn0cNGfPr52PiwkJc3r6UFw+iq5ScAP9vQQSIw4CzgsMAiEDgVHOVKZp2OhwYc04PHfE8jO6UlpO6Zuf5kN492qlUKozx8ZMXnfb8fk3uJSdyDMt3bhlxFIp3nHhz7IGgN5oBgKBkCJFisdjOQIhacaLjCSjydZQrV06j0YwbN040U7Rg/gIAoGrdrdW5c2ePeiAwMFAkEuXn5w8ZPPiLcwstFjNBKYTujkQievMQTi9EHuajYUwqRaZcf6yx2+0isahShLlzDaMw/SqAEJGXnQYYC3enV5/pTUEkYAyuBhFBUU8L4BUtLAAAUey4wZgvzE33DwwS0eThUw8WzmxfoDEQCIlkpRCiwaPFRAgZDAaOkx8+vL99u14//dDT4eDEUhlJUsKPxtis/1HH7lWQMiAkwBYAoCx7e4VKosvPrdV87PXjcz1LYYBwpW3B8MSdl5ysnQGADjXVwJntTonDzgACwCDRAeN6xszb8eCxy+hyDoMdBQwa0qvM5zrYUlyAIAiMsb+/f5cuXdS/qH8Z/Qs14s6IuLFxxUUAtFqtSCQiSdJms9Vv9wUAWDS3CFpOIPhu4c5z3vMcb4rcjyRJiuNczhGF3K9d3Xy3V9NTcwCAEDIadMKcJklRtpIrBv4ORIJDD8CB01LCyyqJ8nB9kcC9FI1E0ED5M06KIAjGqqvWaHjq02NisXjzrgsyiaRM6TDOYQwoPxgBIgix1xyX8EeZLfZDR/d/Mqzv6kWDL58/LRFLSUqCee7k4d2pztkESvU85b8EESCJAocO/g9t3xkYVdG2fc2csi2bnpDQe28qCKiASLMgzU6TpgKKgCJWRH1UBBFFQZCmqIiigKKIdAQEBEVQegnpPbvZvufsOTPfj7PZbJYg+jzvd/GHzM7p19xzz92GycbqXjLZqCCIoqRp1TKPEJS7Tf06Fxp/UqiOSkaIyJhOBaFl4/gmPxadGRnp/i8gm2E2S8FgiGkBJsa1ad/NI9Zw8CiKYqhSZrO5o94xpSJFNMJQbTabsT9GeXm5IAiiKOq6LooiEewAiCE2CDHJIvDfagFRIITMeXtTTr7SsU29Z6YOUNUrbKEAgDqNugGwmC0V5f+AdkSAWg6mhMVYNOcIqWFu5VeEIXEGKZnC42IZRkPrLiNOHV79xVfbyipCL0wfqKvO9DZP6qobAGraHVEljF0FWxIbDBsy7L6lKzbe0C6dcY0zPT4+Ye3nG4CXYg65OhgCBaBmELHaniinAAScxyyxq8F1iPEQ6wEFRgOp2pcnBrIsigKdt2jzX2fLPl40wlHpM67yvxijflsEu9kSDIa8ZYcSGw412zLS0yy6Ht6tz+FwRBRKXdebNm06bsU4EQDn3OPxGHVGjHstKioKJ99bRBDKND8AxrjP9z9xzut2WGzhIDbG0LUB6Xxz7yef+3jU/bd0bt/0yndqtiYCACF6rKGjNgSNcUwAAqYwfwmNbwymA4Bc7dEHALWs5uk4zGHVIZcPEwSBMeZzFTZs1fe7fd8t+M84VdVSW07SVdff3ASllDEWdJ8fMeqR66/7sm+P+qlNhgGgVFDKHdSWF3vAVUEhp0DzgKvV7yNoaF0EIDDVfJZo/K3uK4qCJIpTZq3UNCx4b9kjEycBKCnIprSGN/m/Aav5NjlIVRgiqsYkISQvL8/4DydcNCrqR7vwBEEwaisRQnRdp1RWvZcN++S/ipC5Eh6XM0I7TVOHTZzR4ca+w+8f9+jDo1Z+duDVZ4c3aZTicoc35QFwJRGvilBV3gBnzFsA6DS+aZhztZykJnuiKuSd1x6c99ZjTz39Cuesw02PsOXfaxoDGAHhV+dcBIr7vK5d361LyomzjntvbA7g6JEDNDURV0zpfwfBaqwSopqiXohSDDEOgi32KQwYqnDNn8xmucLhfen1r0wWccE7y1LTM/74ZWvAD0GU/D7Pf6k318Qvv51v0SQ8UTRtYP9xX3afPtWnpZSWlpYqiiKK4qFDh5bOWiqelk4bEbNGRF4gEDBKhwKQZXnK6HYglOl+KsYBUGv4ga4Cj4QTiQBwyY7TiaRC5ulBdKoUSHZ0L8549773vPvC6LFPzX9v8ZKEhKTJj9732zHHorlD6mZUh/WGO8f8HQOmgIUAgAjMkw2AxjerVr/EuEjH2iGnR12BVlaUGOOQVamhuuY3ag9eE4wFfT7PwNsHX/pzkz2pASXs2w3rTqvjYvtdE+Z0KDEiOQICzQfNA7lOTWoCgKOsiKBGo9VimjxzJWN4aNToQXffr6qKyWz94cuPABBA1zTDSkUIrkjv+qfQTbicUxKhndls+uuPA4Q8zDk33mRpaamRwKYoSkAOKCZFXPnEyvK15U83eppSatRqFUWRc56env7h0mUzxrc3W8O+cF3/2/v6uBl5rRHieoFYiLVG/U0CYDd8tv4et7NuoxZaSAXAODyVZR27dQt43Za4eJfL+dbbH8XZE06fPD7uiVnrVo4Pj9trIlQBFuYHc10Alai9UTXnzHWuxdkaIND/ykvdv2/Hzbf0ZUwTBALAHBeOF/obqKoiihIhIhFMANLqddRCgUAwcDzLe1EbSUisjfBaEGCuV6U2RINUjRAaVhUs9cJDDgAgCpKu60ZMZSikv/fR9zt2VJ7O+9VZmAdAVZWk1LovTrhtyIh+P7+0s7wkP2IZPZ3lOv1m5DRVWNISVcm/mHquxk9RKG8PfBv5iysqa5X+V3Z2tiHeIiom53zjxo3z35oPw1y89d6tdB0doAy48cYbGWOyLB89evT8+fPz3pr31MXq0jG//n6+NiUVAEi7uwnthPReYG6AQHfH9gACRtXgmvNn3xEvLXhi2JOvLff7vVwPej3uho2azp791JARC3t1t9+XkWX0JfwqDGRB6CoIBaHMdRFUIlJctYpDxH/AuVh96ARe/OLzaQPuutfnciYnxgH8mtK2GhzG1ZmQBODJSaNPs5f/PecAAFwHaMztcc0HwRRVN5fDnwNTnYieEJ+a7iwpAkDABw77ePFHry76bJAz5zIAEEqpvPqdqfUaJapqSJZRWpxbdR4IlKDYSua3AYBvUwAdoMTWHTScWMPf/QlgGOriC3+PHFUbiKqqHa+/dfmPH3Wr171Hjx4+n48QYrfbDx8+PO+teUYnEYBiUjaO3bgRG7v+2rXrL13Xj1lfPr6WeJXDv52rhXZ76pAJHUjaFDAfmOcq7AAAQqkoSqUFOclpmahaDrrys+xxvl9+eLlJs4bGpCaaUm7oeuuOXZvi4+PvHDhgpulQjx6962RaUVLzdAZUB4gAEObNA5XANGJKDhNFjIdgje1/JWrMsABQyVpmqzeuXDLvoVGPVrp8APmbh4oBh8ZZCEBKajohxMcS8tSe+K9VdlM6NDf06lU8Ea08WMFCHiInEFMSgPD6nYiQUwCAUL/fP27MmNvv6HP02Hu6HnLlFThzN4IzgMQnJv555PeRj97ldns4B6WCQWuTRPf8UoQta4mUCHCkhK4cjSRlMsBxwEzabOOhXH5uM4SrjUYuCOJHLy39CMtTK1KH7Rx2vvX5U41OlY+uJlWUlQE42u3o0W6x2UpcV8zxrVR/wZUXIR3ugjSMpCSB+UDEqiiJ2rEj9PVTcc+4XQ7ZbLHHJ4U/JZEGDLrtm7XfySZT3XoZAPSQuzJvM8Adurp23Sd7f95318DBnTrVtnwjojHKueIAZ2A6jasf5pAUD/oPOAdcSSkK9VBwceqmZqPHPh4IagAU32VbWrcre0ZDEEQAVLBwzk0mc0gLzX39mR3atwiVQYgtDfGPwSHaQURo1bMHMaeAUB7ycNVF7U3Cz8s1KCWAfFfvHsMfuGfjd9+6y45XZH9j3DMhAogQnxC38M0VL7052ef1u1w1piNFZTIBle1VQWUagCsVR4CAK4i7lQDo3An+o/zSNVIGy1PKVzyxIrb1n0SgcK5TKR4oYKzGYo50uQOsFRGSwHWY0kGkGLERgxBPXLfl8l296xfmXGjVIZyNy3mIs9CEKaPffHnJ40+PNnICDBMGEUzuwh03tE34cMV7z82YXlNRBoAqMUB4yAeAmOzVboZ/yjlAKYG5bsydU1J4KW7i/HmvG+t7KlgFKVEPVVdsvRKCIDCmx6XdnJScMv+tpcuWv7N40UpmJoQIUEpgqhN7wD+HYEHIhaj1JjElgYCrXua6SBObR2xuDeSvn33+pUYp5aUX1xEqA5QzhVATZwqIdPL4GUEwuys9uQUFMavXgKIXoBOkqmxNQgECpQI8gFreOwAQcwdO40kzXJN5teLatIugQd3k3MKqUXIgDQ6FpNwEAHI6SNgRFAah0IM1nFGADquxpYzZYqNClZqpK1Syu1xuixlWmzU3J8eohGqxWC0WC2OMhyoldc+DD/X/4SuhhouJUCjloAIECVwHodXX/1ffuJYxDYCcVhd3OWaOT4mTJSGoMNWXI0jxV+kMAIYFikp2Yo27fBltb3pYSl1BXGHbFagUrfj/a8jJCFWdCgBA5GSueiHIzJVFTInElMS4van5SIeGzSrdGqEywEVTmmxtxKGDCKJ2Zs2KvVNmDDKZZfWK4mjbDxbI0Y9mKMdyIkgKQs5aPDoAQInciFu6kOaSkUwEIDwACAlFJR/WimvQLtrSPW5E331vrTL+T0Z3IOnPgPlhzoy1UhIBShG4DlMN9y2BmpMbtA+Q3N5QUU4WrXrOlCYjSs8unjrr0W3f7+7W83pjE0tFCfr9Prs9XhRFUY7v2SWh2Yb1WdpQVCtKHJQA4J4cgw3EWhfMCDAnfy93AY4aMyYz/mTcAhgG6gpK9p8Vbpp9X+dFy795dMwAZ+43ddrO1NXqsI5oGFZ4zjRKpaN7t77w0m0bVz29K7iM80rOUgEBAQ81m69xUwZUBwiFnFLD/0ZlcD3avghwItu56gEVechLzMlx9FKifqDS3RAAZ5oc10yQ4hgLAuBczc8vat8pNaNe+umz5w3ORWVSQ/WHtgeOUHq2usmA4fwgEkLOmlc3QImlCw+elKuyIiVrJjgS4hPWfLrm7+uhX4N2Lzw7ed6C5eb4Fn7HH0EFNmPILWtBMl+GIIPba3KOIFQOFkKMGk4EBIuIKf249NZPB964qXN6MOjVNVZUVJCWVkdTKlKajHDkfvPHbxfi4m0t2zUzoicEQfD7faIo2Ww2TedtQu8qQmYBC4cSQfOE5T8RAA2chTnH2bU4h+iQIQapv2mimRfaqUfnqFOvHhFoSV4eBQKcdOg0Yc2aZd9v+23w7V3LLyxPqD+ECrEWc8653R4PIL7uQJNJfuXlOVsO5vdsU//+emu4CXKctVmz1ieOHTMJAFDBmm9TvqekRhp2DcgpCDkRLAQYOIE5M9zTXA9qcY0ZRU7kQSeoCIB4Lw5q8NzSdx5zVnolSz1BNtZVYbhLf/902Xcvz5vqrKiMyJEEOwwVghCU6o0oPVNzKEZBsEC0IZBfG/M0kvSQ8OmxMff3Li6ttCS2BRgRqMtRu7czAtGeh9vHgxB4vLBZ4W6Gwy+AcXgbA4Ae3mrSDq4TQmw22VSmqfObo64YK+RgpMNECxICPQDNBcDQuvK1e4tznytpYK+TYmnTPGnZh2/PnrMAAAdPrD/kudfin3rso/lLupSVlladAZoWqqx0JiYmrVr8yCOPzcqT8inJZjwhnp3snfCi7q+ABACU4Ff2uo9lBoRmV3l5USACuM6QeF/cgDr1M954aylQvd9BBIIg/PbbYa+H/fzL2UfG9C8prXQX/pjYcHhMN0mSjW/pK9n91PQvKcX6lS9t/ukbSgUWdpNUg1I6940hl06e/xE/BhFrFQcAcEiJCBaBUBBAKQY1MbFxCv21b8IEj7dax/sTz+fbByBwGiw0MG32vFdGOSu9srUhleKjOUeouOajr6c/P9bldJ+/eCmSQtGuebzXH+IcP+7L26nsjvSvHZxBSoBWI7M/DGIauC6n4obqQhNHDu9PrQcAtiIIKlqtR6NtCAQBwGrByXE4MwKipwF2L0Kn0fj+iyeWfbK90uW7aQH9+WAeBRISUKJUcs4BRqjMGH9u2vA/52w9Ed8nco2aCM9WACDGI+QAq5rjBRsASgoPalOtZ1befoulTdOE3y9Uy1oimLwe/5hHbvpp854bureLtAMghDDGRFFw+pCYvKuSdX3A0tbpRtvmXd946yujT1lZycqPFm7f+ntJ+szzoXsp/n60cSY172ebOPPZ11q36RgJiomBruvXXdf1i6++uXfYvR+v3XFn/64AdeZsSGk6KrqbzWYzJtnLuWVef+iZZ59r1/46KphDwQpViZqUOY9Laqlr/meeff34iV/dr9+53XyU4oq0MwNSHAw/OAQrigexQa27dDRbuj//ykI96AcAzp9/dkrumbkb6baQ+2y8STHUKsGUzKuM5wa0kOFPZ5Vud4RzokgVVQeQkmgqKFH/l/QiznSfH6GQDkCQkwk0znlRN/TtAkLQukViUqJNbi9OHN0vNTm++7fvGjVeRQAVbXFkM26/c/FnH03RAoVEMI15QAaQlGjbsuNYty73PT1z1KRJt10+uT85Ma7VGdefSYOqfaARxDhzqAytagRwHYIFnAH0ovZIC+due5wu+MmxYxdZZNs4rpviGrTvJJ88cZHUDPwH4PG4CSFPTO4xZb1/FG376YbdlZUOAO6qrY5Nsunxqc9PeYLHx9vHDO++TjtFUUMHrwl2j9Rjziuv1G/Q4mqci8aufT8PvK13uzYNG9RNj3GcJyQkGouJQFB9672fxo0f2aJZg6xjH4gmO42K3jNQlrtbDVQ06jCuyw29tu6886GhXddrJylq0xcFO/SgBZ4xqWNUa+NFH2w2grGdJdV+i+dfnJuUWW/EkMFaskuWRHBwpsRwjlBTHL00acbDqqo6HNUvhACD+zT0B7XVm87vUlcR6Z9wrrZZRDBDTOvaLhOApvp37/z+nfkrundLeX3gwIa3pVFKAEiSpKpqSAsOH7Pq9/3h48L099bD8S2wa/0FyawpFUwLuPI3O52sR5eWWze2+OKbPf36fb5myThdZxUeMEGNfaWExior0c9Pxcgin8B9KPhmXtETSfHyrd1TUpq0dOZcNH6yJl/nyF5/55BbU9JSCvLzr3RR6zq70zq598AhBueuBCHE4/E+PGWasKLd5/7TlNTejfH0+s2atGhzfcBboxjl1eCsKOvZq/OcudvXfDiGc27sB2kgEkLx0psbx44fdfONLUqytsiWKkvEFZAtKQXnvhEla+OOjzZv17LbmelH1VdiO4XBu5rnt+p2x7SZzzvLq7WOaDiLCr7YuGn8iHsa1JU4QGPN45yrhUuXfj5i7H1Z2TkRUUcIcvKdCbKaX+xjHi2gt6ISif18MSACQs7YLHHBBCnRgqI7+9+QkZ745nu/Korz1Rf6t2vTMBhUZUkqKCrmnFe6XMlJttff2Z0ztvrQGlH+U0fXfeOtDzVNAzgVzJricBduByGyLKmqNnnmZ0vmjyp3uLu/9iK11jQHEAGB/Gr7AmegUpQzPgFCdZIBIA0l3cY/2BzAhbIGD497PNxMSLDybMh3oay0XJKFGIEXH5/w6+/nP1z+674/DjmLwlFlVwxBDkCS5PfeefXrY61OhiZf0QEA7CTv4meCUIs1pJazGUhq1KxP5+tat7K/MOOexMZjS88u2rfnxMC7b1OC4VnysRmfrVgy01l29h8VAyCEELFpx4cfGzn4y9CB2F8BgLCgc2q7qfMWfBj018jquBI2W9yPG97o1K4xleJla8NIO6GmyqK9b7/27fP/GZmTl1fdTsi7y36ePqbVknUXj+qvFQbaAgLkqw4VwPi+eTWWFIIZYhIHv0Get2dJg7FPLGvZPO3JR+4KBFVCiD8QyMsvMIhuMolr1h36dVDgr6i1bQ3+nrEWvjrnqZdefptzMF2hoi2p0b2chSrzvuOcv/fGgzNe+rx7lyad4/7zpz7rb4xYIEYuYAQxIynkktvkF1fWTbd+smbP+Eem60YQLOeW5E5+x9E1y394+qWHK2tu42ygXgNBj3wGQn2l+zUj9BIgVLJn9qVUDoXUB0dMOH98yp/8HUouRY6NoBd7SKQbatKa6CFf4cVvI+5OKkh1WwwHwmLAkX3x+y3fDR86RFFD3tJfog4EgLTU+LEPXV9Zfi6WcwRM5wAICQd2h9s55zzkq7x8c/87vthAqIVHLhQ+TCm1C4Wv/WfBNTkHQBAEsaYdzoAWLPj917MPjrkpryA/un3XvjOZ6fKZrEqbIOUrD1GcAFeMZVZ0txrQ/TU4x3WIiQADaB22fcRj6nPTBjWqn+IPKHn5BaqmEVTvB/bX6UKntwbnEEO7nR/h4vasyhlT5r39vlEtmnMdhCY2HEapyZHz1aI3RweC6sXTX52omEBMKWETBgAwEBHXVks544lA0qnQo5ZfZg++hTw7qdGCeW/MnvO61+sGwPWgvU6frt1P/bhpx4BBvb3e2JeeWa+hFgqBUMWT5Xf8Hj3fcaa68jYDoERPzuj7+HNvHHvzpTOhcdUHG91Am7fIiOIc8VVeLMvdQwUZAIdmaJZMV3JPfaprgczmg63xTZgeDGmhocPvePnNL956ZZKxFYIBUaQr1uzpf2tLo2C+AUppSVlFjJ7AGMtIT43My8XZuwb2Su+6bfbv/scBVFsGCOEQbpae5vzzcAs4oeaQPw8gnIfM8a30UA31IK+gvH2bajkHgBDxwqlf/QFvq/Y9LlysHnsbfvhdVdTuHdMOHC78KbghVdhVHmxLaTHUckhXyaQgApQKRJRaakHVYrmjtMRMgisXT3Z7Apeyc42adJEdfACoIW2denb/FYkQNWdrIHsA1nUsmV3uslnjDT+jAcaU5CYjKy6uMpsssj3V7nB4FQZTWph5nMOcgWABYucpAIBaDlsTxqRbTRPjg388NGYUJUKnznNFUdy3b3e7duYpj01YuGixEfgvWTJ79e2x5J3PPG4/Y5pQNWgMJCenaLpembsJQDTnopGVU8gurzGbpY7KrjM0lnYA0aryNggRsk4sFQQzFWS/P+D2+QkIIdAZS4yPi7NaIVpKs3cQKjVo8xCAUaMf3bVjh655oy/t8wXXbjh9W8/mkRYARSXlQpUnJgJKaXFpeZ20FIP0lNKS4nyNV3lsoyQlZ8n1UsNGAKYHHZfXiabqSdBXfpTp/tTmE5kWHpYOZ6xpg4UKV3+4b9VXs8pLwgUYGOOMaXFWU0r91Aofhg/vdl3urKCiAThxIudn7zPFuEraveaq5hzXUVXklIUSO9vW3tr3eofTm1tVHjkaWdllW3ed2b8nphm4knYA/Bl4eOCjq9Z8lJSYHD1emeZLbPyAK2/z268+kDNtwTbnO0QpqXZFcB1EqqVCDAAqQ3V0s7772ow7ew5c5ijIiUxGQ4c9IIjitm2b5s99/iljC1RCdV0dOKjn3u377xjaP1iz8i8BBeeMqbSm5y0auq4TQiRRUHSAsiiRHEZE0LnK/zLOE9I0f1CJTFWUUp8/6PL4MtJSAHCuhZRKSU7Qdb1vv75VRwMA59zrU+7sF45wNFpKy51Xcs4ApVRRVVmSAJSUVdisscZnAz3t027uNQQAFa2VeZuiOWeACtaKi6uTGz9ohNaxGqVEAc4DnuLe/RrmZueXVtX98PmVJauOvPXy7ZWucEhL+zb1jP8kJVqDW9/+FhMIaok8QhW5AcDSIDwXc6Wp+L49ObH/rZ38gWB0dLqBpETrT3vOXa2idS20A/DzcTzV+7G589/LjCqkCoCA2FJuLK84cn2zytxTn50J3k9CjmoXspwCPRAdLhEB08ROqb+17/CYszAvRgHSNe2ddz8pKsxb8dG7k6bM1HVdNKW3amfd8cP+P4+dbt66UbSDzuOpVN2nIpzLKyhkjGmaJgiUUKFZo4YcMIaKxxu8qU+TjfvrUlIcOTwGzoJDRJCclW7DKh4DURBKK5zpKUngvOjid6kN+ljjG40aM5m7tkWki8UsPz3n2y+XjyotcwMghJQ7Kq/GOQMutzcjLYVxfuVSPQKJ+Pr0u0tXK5053xAqESC/qIgxFgpplFJBEARK62VmOLLXpTSfACA+vkaQi+a/sPTdtVOfedjpcvl9flkWP1l3KBAMvf5C/wjnotGscdrzsxrISzp97d8V+5seqQeqw1K/inNaM6xvGlrxynOPuj3+S1nZ0VWLDcye+9OPsTpwNWqnHQi+3wNy2/Q1n2+KMbWb7I19Fb8++cidp2asOo+hjInQ3BCrDO6CBeBhi52cZuRvAugRN+c/byypPgtAqMQ0X8TOVLdeoz/+OLlg/pwXZ7+FjD7OnK8feHjQ6qU/tO3YMjrrLqiEtGAxAIHScxcvGYwkhDDGwbTT5y8kxleb/jnnUaKtujliGmVMFQSpVs4ZoISUOyptVovFbCrL3V2v5T1yXOqilT89dM8tRofi0sqMVOr3h9ez/2RPVca4KAp5hSXRw+lKEEI9xTsJlQAUlpQoStWcyxhjLATkFxbVq5vhrzgWZ+1mtZiqn5SIXq/bbKacMVUNEUJWfv6LxSSOGNkjEAhvi4qaZeYBuD3BgFOBidZU0Ak0Dzgg2iDGh7VPzqGW3Ri/Yvzj/d0eP2PsSs4lJ9r+dqPp+AAAIABJREFUWBjTVgNXoR3ABeTfC7PZ7K+5mGK6As78AbXnTS1CRyb95FkJPQApEZxxCByEivZwBgqhkNOhlHBCTMRji4uLFBaloq0iay0Bjyg0nGkfLnxs0tQPnnx87Nz5HxIiZjbIpJTXrZeRfTkn8oI8bj/X3IIgnLtw8crPJgqCx+uNSBEqUIP0MRCj1mSaVmNQWcwypcTvV2w2EwCvTwHg8fpsFjMDzTu7rmnnxyMlAQDIkli/bqLRDQjnxxuIs5n8AdVilgF4fdVloAgh5U6XcfOUEJEyUAl6MMbjqYd8xrJaFEWfz3/lwyqqCsDv/IM06pmUYKtiHVc85zeu+75F66aiKDocjqTEOFVVn5821Gq1cF5dYhTApcvZ0RK3522NNx9IpaTKRkgolDJwzs0NOVDt+FFLOE9KSItr06J+UAkFahaSAkAp2bLzz6L3Yppr4Kq0A/D7VNx7yx2frv0mpt2e0ddTsvfeu286cWIN94AAzOfJtP+VTM4ICHrRIEseCrWUAiAUpjo8QDPYycgGRQApPbdYlJOjOUGoWFlRtPL98dNe+DTObmcZvd1Fe+4b2be4qFSS5IgvweEoE0Xx/OkzV34GA5H3aI8z79ubBVrLjH/ubPW06/FVD6rSMteGH04gAFGApqHMj9kzexm2D39QMZtkQTB7yk863V5JEgBQSj5YscVsDo91SiljzBC9Vov86us77FboGnRg5MguddLsakg3joqIrvNZJce0lZBUyCJCDnAO3QeAEk137RclE4DikqvKxZzc/KZNGjtyvkxOtnOAcEYFq93GHOXBEeNucjgr01MT3lm6+6OFkx1O75XqV5uWLU6fC1f9BqCqeg1Rp7mYntTCvk3CTpm43bxxvnabxiiH3M3+9pJ3Hrt8uVgUhOKScHVrA5xzURQO/xYxrNaOv6MdgB8OYNO7nw0ZOiLaKSTICYKUoIdcc18dV/jMjERL4IFBbe/s36G0TAUoIYV10tbu+eXs+i93rPFepKQYlnohzZjyAMBfcVS8inGy3OGePXPo6Afv6tr9luED6mbWz3jzpbVPPjuU0PCDuVyMUso5J4S4vYEvvj560P8qSKiP7fWevVo3bZwWWb1fzikXTQL1XgZnkTRYAATsiGlVUmqas7xMNCXCH9a4kxOtDy4f5WDtQDk4IAB2/YNlvZ+eemtIYy6311YnVWfMUXh4/y8VrzwTLlFY4fTNnX2/zxcE4HC6CCH2OPOCJfvO60P+suwDp0ag1s6vvL1Dtz/7VB9VrRauoZC+86c/OQKAAK6FFRUpAcBO9Zt5797w4qzRkiRWOJySJImUzn9/b6H1oTK90/XywpCndOYTvRnn5RWOBmYpNdnOuWayt6Tq8ddnrx4/ZTjA9/5y4sixktWLJhWW1GIBBaCGQq2aN7uQddn4s33ruhm//1TKugDcDO+ojDsmTRzeuGF6pSsASLJckmD/bsTYJZ64Dv07uy9fThdF8cy5cBhVBKXlni+OHd9yILqtFlyDdgA+XvXd+KkvOAvyohupaNNDLlXVZDW3XftGXTo3LC0LB99yzotLK1s3z+javV3FgR4/KpuiDwRArr4INfDBW2OnvrBa4q0G396lV9+mZ/86f0OPzoQQs0nWGaggUEpNJmnt6oMblJOUZYGF1jp3erb0mzWzbjAYlotuT+Csdh8AEIpQJaTq8gjl2g33D7n+yw07S62p8ZrirHQD+OXIJZUn1NQFhT/FF77a9N7wu7tUtxESs2o0pmlKqapplJAtO/4q0rqe8E6kpmoR5WUt7FbUdLvg+21/5vP2qC3VgkIpctfIs3xv2d690ha/mkoR+t4/MEE6vWvf9L692tQUhHzfrt+ogJTUJErw9easr1dPKCiuUQs6BjpjsiypagjA+axSJ28JwEKct4UGvzHnUbc3UOkKzwaqqpVVuN9bMOqZOZ8//shkh8NbXu6IEcOE4Ktvj/94ldVrNK5Nu5wluPWG7nuPHoxyScFep3fF5U8lydy6ZerE0X1iNCQAhGDYoG7H/1wnlCUwuEOWBFmWI7pdBJUul8NpBLnAarVkpKdTSn0B5ZVZ9z/5/Jcj7rnlzqEDX5y29OY+3TVNS09LUEPhibms3OMhjSmphJQKpZAS1x/CzHnvvzPt0Z4AzCZp89YzPn9niBRgYAq4HgmBpsQrQF63dvmdgx7M/nOpITsDwZCb3RCz7M3Wh5aUvpmTV9GoQYo/qJhkCcDffEVJFC6cK/vF/SWl5VA8kNNAKMABTggUVYsIY0kUiks9u9U1tPbUbU5FyR5nCSohzrlZFn1iy6CaSGHYY30u1jivwAGgtKy8UYOwLCdE+vP4uRFjB6mqmpVdsn71eH9ANZSEsvIKt8djzLOCIDSoV+/K5TZjTGEtQLy38VuWvT/e4w1c+aCEkOQk2wfLfxzzQB+nqzJmMb5h8+/+DuCxJ64F16ZdXm/Qd/jrzz8zZeq0yGWY7ren3TT58Sc/fHuir2odFwNFCb3+0gg2s8NqxXlZH+5yOS0WGwjhVbY9fyDgcFaiSiELBIKXc3JVVW3dsoXZJM2bM/zukSu+XDHm9iGd1676+oGHh7VpWd/QxASBfvX1ke2uLdTCQQBTBpSSvOCwrvICADab/NbCneeVB7KDN4JdognNwXWo5eAa5DRQE8C/CvxBvrtxxKiJ5riGqaS4tMJpjzMlCIc9rHHV7QMAhbpJPRzc1H3aEz2j22sFAc5cLF7nPERpLgCAQy0FABaCOZNzmGTRCBCqkxb/7Ks//Eh/vQrnAPAfgtvHP971s48mpyQn/Xzo9F51dbUkVssp170+JklCRGOmgiUUKOlxS8eUtOQzF/KXf7J74eujCYEkiueqvBTGe2aMZefmNm3SOJoynPNDe3OoqXSgNGjOU8MU9aoh+G++NHLo6OWDbw8LiwjqpMWfbuTbOz+67aq4Nu0A5PTD4S8OPJ/wittdHaUj2xpIkhC9RrsS/oAqpac1Kpn3lzrtlwOL+vW/C1ERHAWFRTGaAQBZljUtJIpSRnpC186pVot8U+8bD+w5rqohURCMJyWEGBVaECwGESDGQbQZ23pxzt98Z+eF0F3nfd0AAioybw611WfcTokTIScEK0Q7IRXrvBfKb8rYfnj/8Z/nZ6SmpCfH0Z0KEGte5oSW2+9IT4FS24eo9rIyRgg5dPgMpdkxZwCVMvSvPIGwmExMsL7+3o6grTsNqIhaVDGeSEn166VQysz9pr205oXpwxrWTaHQdJgAgGtgIRC6M7DsRfNGvz+8kCREtpqcGfXqiqLw8dp9qxY95vL4NV2/cCnrypdMCLGYTEFFAWBUrkhMsOqJbTOVo4LiTE9LuHL6ikBR1AF9GjC9hqwxyeIb724/VF2u8xr4R7QDcGQ69u/b3vm68A7mAABOqHQl5wghhrk/pGkAnp7c3//iW59h0ndff9Kv/10ADFuUzlj067DHmSklHm+QMX45N791i+aKoi34z8jnX/vs6ceHJCSJilItGPx+BRwACU9hmgdcB1I4w9mLxcW861n37Yjk+3AOQrpa3j7qfY8KZ6H7wXVIiZRcPJ684o5ePZcvneioKPX4lKHihI+V2HApArVA63n81Lo2LWtYzgFwxhlDeFsjSgBU+qRYzgEAGpt+GDG0k6rqVqs8Z/5PQcvNu/0roi/EQYZZu34b2BkdEXQ4+L6VTHx1/ldvvXwPvjGEHYdaZlidTMRdc75n2Vl59RrU37rjt8yMOI8vCEIuX84WRJEQEh9nBoHPr0b4VFBcnJKUJAqCPxgUKM0vdP6qPNZZenfRG6MjfSRJAufGd4wgpOk3Xt8i2gENoKDIGQiqSrX+fA38U9qVdcSCyfO//Pq7KDtILQhpWmlZmc8fIEDjBg0kWUpJtis2MS241avJ8fGJbnelLa170H0+cgjn/PBvWUf/KOAh1G1g79erZVKi7cz5C21atsgvqNh30HH/0PKHHx0R4/Jz6XaQKHc4EerJ35js2LYv72jFUyA1xiLz5PjM6c2tC7OUOwACpkCtgKlOBWt9JG7VpCcnNG+R/uQjtzp1xNGTfl43+lgA+dqQ0vLlbVrGNIMDggBuxJiAnDlfpCE6visC3hQHM9N7CyJd+dmB49qHBY42VLgEOQVVBm0bKboyvpcSx+7AijrKyUenPyBKI0Iag+aNWDoBHDmW1bRRimHAE4XQ1m8PTp814pvNf7zznwc455ezcwyP9obv/yjIc4MjNdMycdQtPp8CgEXxxmyWPvn0UBlblqJNo0IvzrgoCHmFhW63h1BaPzPDav27BFDOsXbDiS27Y9v/Bv+UdgC2/IJ7xg/pLLV87oUrq2UAQElpmc/vB2BIu7zCQgAtmjb9aOEjYx6Z/H1gw33Dhw6/9667Bz/I9aAoWhhjlNI9B84vP/O6g7WBAF5Il6+r81BCyynjbr1wKctqsez+dvKoScvnzr5nz7a9D0+4L3ItDjGmVkxhqNt6x0bmuRzDOQAA6UDWtuzcYvnv9cu0DgAB1xAsAFCJxJ/IJlxO+fAl3t90aAAZuymwi4ABPDIDUuI6vC/77gHXGYHgEXDORYFELLCnzuZtL32FsTwARI4nslHGQbzeutInZfZ/7wkOamxoTIkDLFI+DAC93XKvRMEVBzF0BUEG4+AhipIySNvxDdM5hT+ac2DBkMbMZvOyj7ePH9n31IlzCcmm7rcv2fPtI16fcjHrsiyLu/adv3iuYJ1royFEWY7VsfCOp568TVG0upkZoVAov7DIYpY/XLbry8BxjvRxE/uD43JOrjGnGe6H4tIyi9mSmVGdIR+9HCGELF657/t9Nb7FNfEvaAdg+2oI3c/HJya7q+J7jWWg8X9/IDwPmkyiJAqG7b6wpDg5uXlIBwfZ7ltMPhublt60Vf0Urvsy6tQpLStT1JAZZZw1J+AEALtUHOzwwcrd0yf183r9bq9y14B2L7yxvoEZ9uSE5CRk55VxwEqd4GaQatH792WpfX4MHj4k98yra8p+oKaavOQMahnjbFtgIYOZCqUgMkABBt1nqG9EMnI3dQCEwDD8AtVRdGaTWO4I8qpVHFfdIJTISeDqb94nj9VmtY7ARvyzX531wfsL4ah6BD16yc8BQiM6AyFgjLMg0yubN0lLTEjQdd1kkn749uCb702v0/iw2xvMyc0HyPa957OyXOscB6lQxW9ub9EyUdMY5zwUCpnNZl1XP1y9/8vAn5R6O+GxRvXTjAUvIUSWBFkWPV6FEHi8noZSPWOiM8nSxu+PPDqmR/icwKXRf/fma8W/ox2AbQfwzaoVA26/B4CiBG02c8QjadwugKUfH/RWBl+cNcDjDTqdlZVuf4cOqT+dkAKwbmefJK0a+/6KZcXZ+xPi7QWFhaPv6375zRc2KjtI1bfZ45nTL/6pxSt2TRjV0+P13j2wy469pxo1Tdnx475BA5rn5pcScIkAXIrSyKsQFUBfDS5qDF26dwuZEk3smKo1IeIVswahAChUMKA6A4gY+lO5pf3RPy63b1MfACFhtRUApcS4miDQYBAas0VGAlcqeaCcWNMJD0BMAABevYljBJzL18e9nJkxPqa9FlARTGP+Emh+EAEyMtMSDJsI56xu/ThZwHUdm5tkWVXVhHjL5ayydWUHqZATOUGSeKpZ4wxdZzpjnHN/oHLRiv0lWmfKS+B3MKspNcV+8nSx8RHXrP+9stg9aVJPQ+pHnByCQM9edHt8CgBCyXtLf/5rf+QK/xT/mnZMxEfZ6+5JmOBxVS7+8HN38VaxpgUoKcFqQvCL0i+tix/s0qVJ+zZ1Q2qIEAoQQPBz+6qK77wT7vMH1M+WTWrfpvWJU2caN0u6p+D2Ta71xhkI2E73u3WlXx2L5z4xoUfrVk2XLhivhvSZk1cPHnsLISTebr1iJRMGoSZ+ReV/cNOAO28svJi19sul5X0f2u5dxFFOLHWMomD/BJWhZqqWk5RoY4yrIdSpm2IxiclJcYQgMd7KOF+99uczyn0gNUMBqMiDDgBcMSYHXlXpsRoZ8mWbcCoUCg0Zdn/2iok7S2fFdAiDoDqVocp7q4TURg3raTpb8cFnM56fNPXZtS9Mv/Ps+QuXcyv27jv7tWt9NOdksDtMjzVv0jMlJTnebp+7aLOrwrXB/SMhPsANKrbm36jqxKCi2Kzmxav2f5vzdlBLfsjzfmK8RRAEh7MyId4OICevVJKgacxskua+t+vUy5Er/Av8a9oBOPgcXps9/dnn5+q6tnzNjinjB0b/yhjjDKD+9QULVH1W5/YN3G5Pr+5t3//TqXIrAArtK8eWDPnA/eNebdY05cUZg9PTEhd/9FP0SQj0AvWWNNt9ASXb7fJKgmQym5JSsH/34cFDevEYR8G1QTRNJwRFObktWyZvP0YBzv0lXJCprd6VEuhKZKv9tv40dd2G4wCaNkLfu+aZzVi58bw9DhNnrANgs6Ik2BJ/O9EDxMimjkbPzC9GPng/IaRNqxac7Luyw9WQIBZLkpiYYDt8tPjm1uTCpYIz58sclZVmk7Rzz9ldgXej/R+M2/omjG7YNL1tm1aapr2z5IcLFc32ut6ntDiy9A4GoaohSunJs4UuJTUIPaI967qempxkyHhK6PUdUzjHwaOXzGZk1/j4/xT/9CGjoSTg1KmTZ8/+1aZNx/IKt9Vi8gcUVCk6Hp/i8QEAg3So8pGbT23v1yvlxi4t2Lu5MDcDFQFKibs4dEPvRGzJm5g/a15qAhjoTbY3D/pejHw5SoLHfRPWfn77jGl9kpISX3z989EP37ppw94PVuxdMn+kziDRkhAssSmxRjRHTSSYzk8YO0pRVYDMmf3SJ/eWevUUEAIWYu4sUJHICUSyAfQqvCG3sanvv/82oYixkUbjiSdmbS57K8RqXcxeBXq80+G+e9AdJSWlnHORxHpxrgIKsOvi1lJ6N+eMCuh1W/d3P/zh7oHNtFDwzUW7DmsL3HrD6u6cpWlbLShzueRHZ6zUuXzMO6GYjKdCrjGBRuBye9SQtmvvma0Fn0ComUlZNb/MfX/zhJHdrRZp9/7snw7V6PLP8d/QDsDO1eBjX/jy6215BTxYFU8hy7KiKIxFIoN4ke/GHbs/GnJH1/2HznA0Zf5iAOCMxtUzCz4QJAt//eDfBD9pZ/6iielXxu2UVGvflPjO0PHvLlk9/z8PnTjle/s/HTZ+vlfVmNksd+vWrOTga0GecDYwspI1IFXkI+ZkXjPPAIBI1Dh7nLc4V/U745Mb90l95/uSN8JvnFBwxhUnV5wAiBx/pdrH9LQKjuSUxIqK2jMgDTRoVAdlVyVlbeBUdEwcf1dpmUNTPUlJKcliKaJW0LVCpr4Wtn0laisO1ElPO3jknNWCxs0auTxHxo3o++rb62VziqOyLSUBACAC9KAYzLo+bX2A1111aqrKbOB0eP1pm5wPxJ4acHs8G384lhXoEeYcF43nSYiPD+dJUMJ0xNvNs9/adXJF9KH/Dn+//rsGhvTGtz+XNEmsc3DnhGBQpZSev3iJUnrg1wtL9w8vUVoAaGT7ddKt+xWFvrLj2ZoLT21G9wXlJf5PyzdTXr3hYg1QtOcbbkj9IqsQyUkYdGe/QEAb+dAwu90OguLiEkppYVHx3Dff3VD0HrEkEnMqWIh5qhUaAIBwT+a0RQtfKc75JTMzpaiorM119zw1adLn2fN8Udtl/y30m1M/U0uOe70QRKSlwOUJG6rtNpQ7QAiCAXS9Hl9cXgkam9ZQO5j5oXqThtx7V7tm1lBIIYSnNbjJ5XL3eVwrDdW9KvO01O2vb2vbui2l1CTLCQkJlNI9e/dlZWcfPnz0wCFP9444ERh2wj2YB8qjd3eJAhuS+ewjD9/36uqS3/1TqpsJbcE/3rU47olZX3xb8gGIDsK6Jn25cHqcz6d0aNvasA6u//bggD4tn355656/L+l5LfyX0s7Adz9j1sRu778/rqCwIiXZDsBmtQaCwVCItbTvMWgXJ5QDwok/c0CiVShyS9pKxsiQYf23LPrOQVoTUxIEU82kbok5g60afXHvQ6P73taTMeZ0VhJCAsGgEVpIKRUF4bfff5clgAhcqeSBUmJKqT4DALDW8dsmT3rYWXqqbmbarUM/37b+wfycP+8bOz537rPblfk6j4rLvQpkAnfO8aOHlsuyNe/cD9Nf/vK5SU18AZ1QrP4md9qk7p3a1mvSfuiw4WN61Zm/r2xSRFuqHURHsMWgJlMeGHnfTT1uKsjaU1xamZhgcZedada6Z/ekJzfnfwE5ZuREQHftPtDzpluclZWKqpaWlQFo06ZVmzatHrjvHrPZ9NO2naGvN1hYziHl4dqfS20QL4Wuv74TX7UTVATTAc5Dbh6osCU7l6z+7bBnMggDALVeS+mIqvayWi0G5xhjPx+8FB8vxTeLOem/xv9EOwCnTmePGH/9m3NmLZk/yusLJiYmBIqD9w6+4eTJH8Mdyief/Wu4zQzUtMIn0JyuXfsOv2/45+tnbMp9g4fyAQ7RVv2yNH9m3Ok5Lz2XlJRoFFKIGAgtFrMsm/7zxjx/IFCUV/x14epwOCeVY2bY9vE7Wpi2tm+/sChr954DRa1bYP4HWx4d07tpo3ZLVrwybeosr9x0T/FzoLVkGAAAl29Lf9uqXN60e0V5hbfw0kZBMg3tm1lSoRj3MmZo/aUfH3704e7W1LLPP1myfNUay/5l24pmgqixq1oDXOiXtry+9XTfO+/ufmPX/IvbMjLSZs7ZfHvfpgNulSsqnEPv7pmya9jHl1ZBiFUVAEAsLc29/MT0mampKTd1797rlh6arhvTn9fr9Xq9XW647o6B/e6+dyIwtlba9ar3QmJ6hiAImeIvrOheyBoIha6AisfKH2904UFPKNU4sFHCVkcQnCM9LTyS69VNGXX/jeu/PfLd3uhT/jf4X2m3dT/Um6YOv7P947M+njfnIbvNls9YhcPboKEd5RJICDRIKbYVPxpzoKaz/n37XPjrl05tU49WHM4PdAR4jdUAEYo8t77++php06es+ewLh6MyGOQWMwJBWK30+ScHDRnQvEHz2z5Z85k/NL6cX/9rxaMABzRABNGa2H5pY/ryP3OeyszoWXR595E/sjdtPfXy4ze4verCpdueny6rqrZi5dtqSD99av+mbzd4vX6Hp3pqEwmvm2Gd9uR0q22CxWz+67dNZpP82ddHKl3uvj3SNS3Uuk3HC+dPBRWMu6fez/uPX9e+YYlPuf/eux96QLZalAmPPW+zBEqd1SNNIDwjzaSq0quvvGCPs+Rn7S0vPJhf5Hlx7k+TRzbYc7jgvY+KnnlCuqlrwyGD3w8+OdWvaltLXlX1RICDaOCihfoH133Rq8V/+MYrhArZZ7ffP3JaZjp1uhkBTCZQSpd88M4DIx474p0RM8jD0BMy5dxXZs8LBHzU7wfsYFFlLqgrToaihzeBSJGzht3VhnMuSzKAOKu5z+D3+/TM/H5H9RH/Nf5X2nEBZxaiY2HDH3ecFASq6XqdtNTyCkfD+inica/GTSCKQFDs7QkxWoGjItUAOEtPvPziM0cGj8v31aYViRVHKu+dOXd/psn54QdzKwqPfr/99+Qk++nzBQs+3Pb6C8NEyTRh/NhJj4nz3l6UenKSxYpz/n6NyE5NR7Pm9aY+8ZLNIhXnHkiIj9u8/dSrT3ZxeRRKSXycuOLTnyeM7FmUvQ+ct2nV6brX5goCifaKEoKQBjXo0hRnQeFZs9k8ZdbGxvXFAbfU0XVus8Vxjri4BJ/Po+n8xo7JE2esf/XZ/tbKE4Kpoa4nLXn/P4RCqAqKBkAATYcSrCzJ3eWSrBaz6ctNv/72Z97Y4fUDQb3HdSk7D5YsWPLTtEf7513a/f6iecs+Wqb88jwlEKzWi77bmpIfZAv6Dbht0J13KEFfWeFRjzdos5L772j42eacN1+4N6lur4KC/GFjFxaE7nEoTWuqNGG0TVo385lJFaUXLNZUxgBe8+vTACBpegJoAOCN6b7rOw10VvoBWC2mj9f9PHNKj9XrDrFaNcZ/if9pSRHBzR2xfOGDp8/l3dCpqc/vLyktkyWh98vdOM0AOPQkCI4aGg+XJrad/sbr84uy96bW677vwMHNG7//svDdWlRpLf2+JhPbt2t81611QUzjpm1Zs+ROl8v/w/Y/Dx5xfLRgkCmufnxSc0rFtLTE9V9vys3Le/KJSZTA7dMrCn7z+0pTkuJGTln33os3VlSGRakaUncdyj9ywjt7Rq/2bRqUOzy6FqSCmJDSJnJZxrTKslOiZE5LTdh/6NIHqw6Pu7eOxSQyxpVg8PouPQIBPyHk3NmTRi5WmVPZc7iCEixbMMrhdAeDQbMlxWKvjirggLPkhCBaEuOtF7NLP/1qf1qydPN1qf5gmB+yTPf+WtatS+tePVo7HOV1m96ekpwgW8zLlq5yezxPTX9cVUP+AKso/t3nLkpNiX9kxpeTRjTw+fWcQt+gO24FeHrDXl98OHPmlm9gzbviTTLCzXdap3z17epzJ9ZLkm3hkr3b8ocWBTtEd2pj33HGfSdICLp9dIsnJo2/ORBQGzdqeCm7cPGKfYvfHn193McVNarA/Zf4v6Fd8ll0HAFJwqSxN9/QucXFS1kA3ll+8KeS6ZzGxgsBuDPjlamPDO7UoX3W2Z1mmdVtOjAlOWH0A49eYjdd9nVz+G8AiMV0sa1tv+TYuXXre4oCR9G+ByZufOe1noSAEMI5r5MWP3bqlv690x5+sCc4DwS8hAi2hEbeyixwmCxxkig888o39TItIwa1DQRDhJCU9Lo6Y2dO/0kIEQRSUh48drry/GXdLOP22xob92a1SP5ACIDPr+z4ueiuPgmpSaY4qxjxi7Ru06E6BY7SkuJCr9dt2PPibeKpS+7NOyslCYMHNNV0JgiUAJrOAJQ7PEeOVWSmo22LxBvaJVS6w+t6i9lsLJI4hyCQRWsK7rmr2ajC8XeUAAAgAElEQVR7exSXlHDO4xIaMRYKeIs4R0ZG+povj27Ycn5QH3uLxuHZkHOs31q4ZN5D5eUOc2Kn2XPmB0haRbDlkbLJRocb0z9obf01JCV8/vG7fxxem5Kc6qz0nM4mazae2lH4PGhtoaZ64luD53Tp3CgjPY1xunjFzpdfuGfExJX7jsV2/O/wf0M7ALc+hc/uHzdx+scj7umSniZLorhg2/59R27rW/dAZqLi9eCL/MVVWjYfUW/GwkULygqO7Nh7rGnD9MYNUwXRnF6/m65refmFxgfmHGmpyRaLxePM8nsKpr/0/cszb9V1Rgiat+594cxeQgilRNN0pyvw+frfZRPq1kngHITg4mVXUMGT4ztnJotef4gAnPOktIz0OvVKK1xrvtjmD6jg4X8AZJkCCIVYpUczLp2UIEoiVdVYDYkQIslX5IJwqGqN8AJBIKJASh1hdtqtgsUicA5d57oeLnhPCOEcLRon3tA20+Gq1Koiuzjj3oB27rL3zEV/q+aJxuZHLo+/rDzUrJGpa4dkSaA1Eg8Bk0w//y7/tl4t7ho4wJbUJD7OevrsucivddLTEhISXM6SiqLf9v+atfvA+dlP3dWp6/B+t084henlamOjW6u4gz3S17sDqNCa/lz45ltDn+3SuVGr5s3mzFu/eN74/vd88NsBKEZUzf+M/zPaARg/zLzgtYf7Df/o0yXDikrKP1ixP85qnffWS2azmVKSOSygMivAqZ70yZSv+ve7tST3wIQZ3ycnYuwDN3Ru30DTeWJaB0E0C6IZYEwPAbQ0b7/ZbNq6+2Tn9nV1nRMCzli76+4O+itzsw5GAoFUVXN7AgBUTf/muz8IgdlEQhpnOoIKQJCYaDHIRwgRRarrpFXLJrf27l0nPfVvHA//n6Co6p9//rVz917OwTnXGTckqc/vV4IQBMgSCAHnUENo2yKuYaYVgMUkSFJ1XRvOYLdZgmrICECXRPrFD/mvzrpbEMTE9A6UyoJoAgjnuqYFnMUnBMrMZnnG7K87t7WXOzFnzms7d27f/N2u9fkfGlr13bbpqz9fGAqFcvPyP1y6tFnj9Ju7Nd+668xjY/v/djzrHXr496nhS//v+F+XFNEorwgWFjvnPNNr5pxNjRsmr1m9KBhUjC/tcDo5twGE6nEPNRo7dOiS7DO77HZr57b/r73zjo+qShv/c85t0zIlbdJJAiShBUjoGKpiQ+yI2FDsrr2uu6trL6y9rbuurq4VVFRABUF6J4SEIpCQHpKZJDOZfus57x93MhkCImqyn/f3+b3fD38Md+7cOzn3mec85zlP4a+YM/SHTUfe+7T87pum8vxPLIMVRWEYjDFmWdbVEXz21W8LB5rGlwwABJqmKTSrsamZEPLmvzd6OqM9JVkGhg/L1nXA+XPOOvfsM3sJ0wnz9f/7AqdjNpumTS2bPm1Kr+MYYxyXi8UyzLoNm35cu7W6BRBAm8vtbo+qT6MRBmabRhQgjFBYUpIdAgAsvDjn4aeXzZ0zcmBeMD3VTilRFI1lGYSQu6Nr8Vfbm1vD18/NDoe1iv1HPa0VZ545a9uO8jz/2rrgOADKMcAyjKIoOdlZzz/7zNp1G9967xuEACh89MO28uWx79UH9KW2K/wIit+DadPKLp97sShJCKEEi+WpZ/9WWVVrTwCPnCq73XOvnHnmGVO6XDt4jv/s611zpqV7ukQAQAhqGrva2kMCx2zd4xb46B5garJle3lQU2He3NFGgwEACIVbbrxOfzzu9vaYM+8UwZjVo+oBgGhSJOTW2zXFIEQRw245crLmJ6eC0ZwimFJ6HwVgWINgTMFMz4KQaDI9hXCEeKzWBIEXWIPh7bfe1tMNNU37dMkOCjB6BNfpVXRxESUwm1FOmsloZEYV2QMhVR+tYFidM3tWV4DYU0eu37Dhw/dWmHjYHrpvhOVvJSWDJ4wfO3P6VK+3CwBSkpP++JfHd0Pjj+8c+w1+H30pdgsvsr72yvNdXT5KaXJy0quv/ePtf+38+IM7DxyoNxgAIZh76YUut7+9ebOmiqs37N20vfbW+cUMRhYzDwDfrq9DCEIReecePyUwaFDCrNNnKArMveQ8jFFHp+f4vPbjQQj3quGvyP6QL5rkixCSIh5ZjKUrY4bpFvD/FpTq9kPP32IwO1kumu/NMILFkRffzE5Te0c2nBCEUGpKEmaYJZ9/RQglRPvHO8sBgFKYUGoGgNNKkhWNSpKiaojn8dc/uJ579FKX252UNjo7d4jP5/9h9VoAsNtt23ZUbt5S+e4/njabTaIomc3mz7/86jXT6j1xe2m/k74Uuz/fNvjWm6/nOPb9Dz9Z8+Oue26ZNjg/JRhhk9PHAkDI3xQJtkoRL2aElT9W7d7b+Jdbx/9z8b6IrNU3hcUIFBXar5w/V5a10yaNAwBZkUOhn9k8AACAWE1qWewK+ur110STpR6pAtAF8cS7k/87oURToisdAISwwZQMgAAgwTGQ4/XVKyXHlsY+IQ67HQAIJTt3VXyzbEX5nhYEMCDHaDEQjJE/qAZCzBvPz21r8wpGBwWanD6GUuJxVRLFq1F0y31fFw9PfPXF5zs6O/fu239/6IOq63vf4jfTl2KXWgGlj4BrMux+CMYsgJF+Y0dnZOqkQZPGDQYKLItfe+cHQjR3u5aWZiybPHFK2WkUaFJiIqX02MwgpE+dlBJCVIRwl3uvpkkAiBAlViQqTiX0ASefrHUrMN4W1JfMMRCKfuefpU8NSX1SRoAxG91TZliDPWU4pQR3p/PFlwiKIfA8Bejs9LS5XG+9/R+jEbvcoSQHm5frPGdGMQDUN3esWFXp9ck2G7fqaSWQDdOuBs8Y2PFo70v9HvpS7OIZ/yzcwhQv+aoqGIKyyYM1ot171x8wZsRjCwQhxCDMUKJKES8gIKrsde/FDPs7RQpjHBMCopFeVYmC4YjP19t0Qyi++GnfQyntJXgWs1mP142BMTaZDN1n0V5Jgb+WqEYkWmJGKQCwrJHlLZSSXk0EAIBlWZ7nXnn1LUmWq/YeCYUgK5Pr8CqbPoVAdq9z+4a+FztjB0w5FyQJLrxgYpoz9eKLznO5OuI1AWYEhHAk1KopkiR2RgKtCGG9dPBvAGPEMAxQoBR8fj+hBAACgVAwHJ2gMULH5yefnF/UXKcKhV4OtpNDKY1573iOS0qM5p1aEywswwIAofT4Wq2nCCUaIYpgcJisWZRSiz2XaNLxGjHR4RCMhpdfecPlbt+8udbphM9X9zqlD+h7sZsxBd57+cnMzAxXTwkqxHAGoskBzxGEcMjXoGmSLny9PvuL6O4AAOjo8OjlECVJ8QcDCBAg4I4tdKxjEFi9LpgOpVD1U6vPdyLXfDeKqvUuy/pb4Tg2bmO2NxSgaFBKujOaiaMfEiVVOTYpX1U1XVPyPGdNiJbkSXLYWY4FAEXprb1OBVUJma3ZDGsEoLbkoQghvV9PDJ7nHXbbp4u/vGHu8rAz/p0+oC/FzuCFqWfDv/+1CAAHvXWy1EUpkSMeABTvLzgVdP8IobS1Ndo1W8/AjZ89MUYMxgDg6QpvK28A3cYBcLlD4QjoWoYC8BzMmJiR4jACACHg9mtDCtI7PYEOb3jUoASB75bU49USQieVmZMhqwSg+wvFgwAAVJUc7RRlDTtTHa1tng6vmG6P3mf1lsZ2jxLTaCYjpKaYcPf8bzLz0ycOopQCivZbAoh2S8MY6w4ma4LZak2gtCfX69RARJM4gw1jjlItOWM8pSolGkLoD3c+8MWa3mf/TvpS7Ma+ADMPps6/eLKmygjrqWK/TEyMNEIQQKfHE4lIsqoABQDEMFh/8rKiUQoIo58Ouw8dcQOAomiKQhkGEAKM8ekTc5LsRgAABGYjx3E9qlRVKSEkKIJI2LIJxVv228YXdfEcrFm/OyORpRQQBnuiU++JAAAIIULoui0H122pPV4aTwWHlZl7/hiTie9lz1E5AlT1BrVUZ0ZOTsbaPUkzRnWwWNtVXmkWEACwbI+JSQgNBGX9At6AuGpjA0KgakQjoChgs7L6Qu3M6YUsgxECnmeBUkKjRiHPc0DBZDI6HHb99wlwqgsbSjRAwHJm3uBobpMf2/3ehmd7n/N76Euxu+ES823Xzex99FgQQhhjWVYUVSEaaXW54/3yRgMHAI3NXRijtVtrvF6NUmBZyM0yswy+9KwCWSFmIxsW1UBITnIYAwGREN0NFr26NSlH11sMw6empTKM/gxpQ3Or1Sz8uG/ovKvuyMjIEEXxzTffuHLqgWUrt44dXRD/MBIshuvuXJyVYV306HntnUFBOMXA9ygIgSwrmqYZDdztf/zizhsn8jwbbyp2eAJDB+cs3110y20P2e12AHjooQfvu6x12fe7spI5AEAIhcPRGE+eM8RKSmKMdbNEtzwRAoyR0cAiBGFRXbbmiKSoza1hSQFNA4GHC88uUjWSYBEcNmNEjA6RrgLTnKkCzxsEnnYry5NgNPAPPLZ09WdaqKce/e/lBMbQb4ZhgP5MAXKOYyMRUZQkRVbcHR6WZXRpYxjGYuLdncFWV4Bl0LIf6iMinDbGxjA4O9U6Z3pKTrqVUgiGZTHsMxiYHVXuj5Y1zZjsNBr4j77Y/+ozZWkpmXlDTlcVCQAoUEXqLgqLGDlYE+vcsH3X/puvnrWmZnBGRgYAiKJ4xhmz6ur3mU3GWFY5ACCErrtj8c0LSocVZbvafTWu+h/K9xmDwMfNVyQaSnri0PWQGUqKsgY4cpKTk+64YfITf9v8yP2Teb7HuAyHFc7ozMkfF3vezz773LZlCw0GQ0+5oO6JQlZ6IgwopQhAlFVBoJUHfZt3+0ePSBN4dsmy5jcfG3FmWS5C2GzidEWyfG1tTa0LALbs9mIE583KpZSqKowZmUEIdbd3UEo1TSOEZmWmE0ISHXZK6Qm3EENh6fbry+qWr/tf6rebeTsMdln+dPecLn8EI+RubyeAOjo8CCPd2EcIWcw8Qmjl2mpJljmW04iWYEBJiaYEszBsUJKikmBI0lQFM0x6Vh7CxoxB0xDCCODZ558LBTsXzCszm4z6PEQo3V7e+Pf3d5VNTD5/1qDkjPHO9AJJ7IkVVaV2VYyahnsPHAkz4wcWzysqGqL/Nvbt27fki+UXjd1qNlv0iZxS+v7izXfccIbfH5FE6R/rV7766tjgz/QI5QC1gtIAMn+cLcEAjtjl6rt8U8dOJBq96f5lLz05U+zWN5qG26WS1LyzxowZo6qqyWSSJKl85T3u1kqnlVCqa7veEa8aoRxLfqr1vbPY+/Ado8omFMTq0SIE73+2Zd/B1msvzMMYmc0JvWZSnmOMBpZSuqm8lWdoi0cOhURVoxYzP3JoRrozQZJV/WqKotqtCZjBiQ67wPOaphFKOZZ5+KmlX6+Pv+TvpS+13ZrXgL0xeNtDny68fJSsqnoBHp7nEAKeY9dsrA5HlLrGkKLCzLKsc2aVMYgm2k3bK2ojoWBKAqhgNNksyelmkzkBAFRVYTi7IoUQQh9+/Nk50wflD5i0ecehZeL8dkOJBtwk8e/zS7OnTR5YXdv26KL1BfkHr7+iOCVrGi9EN5riOVLXtPCKwi93twweXEApra+vt9ls86a1HanuGlIQXRtazIbaOk/AHzGZTP9a+93Lr/fIHIFA4p/vg0BIOdIYWr4RgCpAk4FNB247hHoVxdCAcF1s/qsW+A8AhtsXjjra2pXoiH6rpqOu6VOCh4J8dXV1QUGBKIpWq9VhY9pbT7QEAUAIQhFp0+72g7XSmGLnj1/M9/vFir21P9pfwZSGVHS6788L5k2ub2p/9Pn1T91VcPw6QlY0WaWIN40ZmXPkaOCKGUUZTnNji3d3ZfW7n+xnGEhLYew209kzijiOCUUiANDlD1BKDQbBZOBfeGvzhiW9r/k76Uttp1O4BEreZc6YMthuM5RXNh91+VWVBEOq3crNnj6QwSjFYbSk5KzbXxiSzCGRnTGyJSfJs3PPwaGFORzLGY09nT0Yzo749PsfeiYrnb/w3NKjNeXv5e4cl5X7+T4RAFQQpoefm4Y/HpiXabMlBELifY8sT0tlb1k4c2DhdMywSqQtpu0am9sMAlvRMGTYmIusCRZKacWeqrOHrV75Y8Xo4oG6evh2daUsqRecW9rY2MT/s23U7jQEQCCS8uKjjMMK4QggBAzWFKn9jj9hEm2AwQE6XvJ09v/JNXVSWWqKdemKHYWDopaRxxssHJS9Zm/B9FnzVVVNSEj48suvr5pe9eOGinRHdE6IajuEQpEIg9HXa1oWzJvmTLWyLFNRWV2TcHmb8xqJTQMABPDkGXjpS+NLC5MsZuHJF74+d3p+eoqltwMIM5zR9lN1S9agOYebTX7RxOHgrec1LltZnp8mtHsjBgP7z8/2IQR2q6Ao9OLzhgEFnmP+9fGuFUv7LMwuRt+LnU7pK5D5NTx+73nLf6hcta7xmQcnhAIhYFiOQXtr/ZJ57u13PSIIgtvtdrlcn3yy+KoZB2RZ5TheFzuMkSSr1/7h47tvHlc0OCMYirxu+p5X6R8nown/DKcn9DxjCkgDfqr06qXMC0La8CSb8c331lUd8N576zigZPCgvASzWffButu9gVBoyODspVuyB2aIg9Na1m+uHF9aGNsM+OTLbbOmDU9OSlj65rJ7lpdEQKOgOd/6a2/fCqXhNduDX/Z4Ub2gNesFwo5l4/xDly+8VBTFm+795qUnTw9HoucEQ2JSYqLVnrdxv330oGCK2b1l597MRFa/D8uy/oD3qDv4+cr2IYMT584pSUm21h/eXy/lbR7yHa/SXlrx0TJ8zscRASILvOfOLE1v7/QvemPNuJHJ08ZlxypTIcy4utRLZpdubb26qGhIWloaANxxzxOPX1O7etNem4EApRQxX3x3kOOZe24++/G/rWjJDh6ZA3W/qdbEL9KXk2w85XdC5pdgtPDnnDHSbOIeeWnbH++YCkARy5QUO9dVp+orRIRQOBxOTnUKwhGte4zsNvO3P+z++IsdtywYPbwou7rOdVgazucSACD02KJ2AAgoC9Jm4abPmLvuaL52qr/itoXTHXbzG+9s+HFTw8Ir5eFFzoz0LEVRU5LtJpOwZkNFVsKhfeXNYl52vMwBQJu7CwB8Pp9FNmLdfwOM6/bHnZ+/BkfjMqwG5Qbveiw2dBTghKoOAMYtyaubUZ+e3nsFaDEbOjs9lXsPDx6Yu2N7g9NhzHSwlAKDsSiJnd72D79pzc5I+OD1+R5vOCJp6zdVbJxQK6iE192Bx3LL9ySsAOKMi5K2Dj+S6xxU8sZzl73z4foPvvrplvnFnq6I7j3geGHF9sSiMU4A6OzsTEpKOv/cifsbO3y+sMOWAoAsZoFj+dsXzghGxAvOGnHhrb+10sQp0F9iBwDz/KMqZlYFS4RZr40cmOfkOKx7OJuaXS1HXX6/X5IkhJDBYAgERI5BGqVUI3l5qbMueuGdly4fVugEQKv2oQ3FG21hElLgiBcKE8EbQFkpxvML4dwCAIDXl9WsqWyaP4IblIgh5Yabv2v6a+dfRowYesmckRfNLs7PTZl347v33za1cGC+rKoWs2nmlLEHDtc67AkWs4HjmHix0/fQKKUGQNsgPAqMGlCkIvcFd2jgYSCJG5AuNuxjIDk2bhigFVQXKCeUu0BiZFDqCULuOI5RNE0wcK2tzUVZZoyBAlBKW1yu+pbQ2m3+txZdLIqKLyDu3rXzwcYXLp+YO0bZBwDbW2iICIuuLBBY0Ai8sB0iMvhF0tBFnWZIMkUWMPWlh7+9lt57xcWTUpItDz/5dV2T74EbigHA3e45a1SEsGxDQ8OQIUPcbrcvIOckSvv0BgcIbn1g1UdvXVT5YgP63s9xHPRdmNPx9KPYXXLQskETUyvUo2u78kucf31+6c0LpmgaCYuRghyQZamrq6uzs9Plah2TX7urqiY/Jy3daR8x6YUVH8/zdoU4jv1+1epLnvRfosILW7WQRM7MRbUhfrb4+Yav3U/L8KRMAUCwGEwC+15r9KYqjZMkBJ98uQ0h0DRNJQQAjAZh+cpNE0qLxozI9YdCq9btHTe6pzZsutMGAElJSS3OcDEw2yE0AcwqUABgIBGAKg1HGUiE7lA5FtBhEINATihzAFA5u7XYaJQkKX6WlhXtUE3LaRNGZacnEEK27q4Xg16bCWGMKSGEgtkMZpMgigpQoJRJ5IMfbI1aqACgEjpkbQVQAASCQAvSEzKswnWmsDvMbD+sfvvY+QnGc3Z+/EZ5Vc2IIbn3/+GMNrfP13FUwGxOVoosti1ZvPziC2YdOnQoOyuzeu+3wye352QlAYDVajx7ZqZ7j9+wKmAmGEvaeW+kLrstTsf3Kf1l22UfMhwYWbJd8gBAVyrKfDrnH8vWXTV3AiEUY9zY1DFxfMlPTdaqWvv86fXle37Ky3HyPGsyGZd8vbOppf36q6aYjULV/trvtWsrDfOCOIWjIgA0+Gj73WzG1e/2vh+AShlM8d8nLBo6tBAhtO+n5q++233TNWUmo8mZmgIAgsDtqjg4fOjgBnXh2DGjA4HAd0tfnDKseXfV4cKBWQBwtNX778+2PnzXOS6Xu/adQ4Vb0ghQEnXRIRaQFbAG4AONAihA8M/MrToYUOXDrdMnT7EmGFeu3TM43wkAGCOM2LZI8d66xIcevAshePKZ1x689NCmLbsFFgEAxtjd4V6/syMYoffdehZCiGHZHRU1d9c8w56ozEDEL91/bsZry/fq/+WwOimp8uLc7QUDMwHhbbtqtuyovvGyEYS1YJb1eEMTxw7xBbkvt2TNm9rQ0NgSDAUsZoMgsIte2/DK0xdvn1GRrGAAEIHkZNiKW3Yec7O+o7+03TVPZAjdO/3JbrJvUdMNT03v8vl5niWEZGcl7tpdKUpyJg/bd/Gjhufrm9+Kos2/5LQj9a6X/76aUHXh/KkPpq/fe+B9vy/8hOMnCw0PsKHMV1VJ0YS43X0AUClzpnPLRfm7hxQWdnWFF725OjXZetdN0zIzcnTlhxDaUX5gZlnhn9/NeuWFMgAQRZEKRV3hrmBIZBlG1bT8vFRFJRih7OysnePKW71e5092DEAACFAVqBgXEnxymaMA2y6vOW/KbErJlyt2T5s8UO+oGRGVIUVFa1Y577pzodlsRgg98+Qf335xoUGFzESgFAghKUkpU8YhVSH3/XXZ84/MFngYNyr/GeVPd9a9aGP80bQzAABQFG3Nk6dPuvldR5LZr5hzzO5nSv8zfEguzxceOHz0o8+3lI3JvGFusUYIxgyl4LCbN23bH4pIGey2LdvZAdlJFrMBAFxuv0o0yagmUia2XvlZHd4X9JfYycaeJ6QCEsKQaDd9tnTLnLNHU0opBWeqjWEwpaAqpK6xjePY7IwU3cTJH5D67KPzfb7wB4vXO5PNI4cPGDu60LnZ9obxg73C+RkJ0oxZQz/48VBsN8SvmM/L2HDLhAa7LafV3fXSmxumTc44beKo3IEjxWCzfo5B4I/UNQ8uKL1x4TUA0VbHY8eO/eyz+jOGR01+UVQmlA5oaO7MynBcftHcT+Vvsn5KQoDkn/EYnxAWGAHYliG+tCFpqqpazMKSr6tLR2bq77Z3+JUaduL4YlVVFUXheR4Adh9JnTXUSGlPUKDFYIhg9fLZzpf//m12VuqCy8vKxuYtM11yU/UbYWIg3RWSU03Ce19v523Jw20H7i36WOGdKUkph2vdz762dXKp7Q9XjpZkTY+84ji2yx+WZQVj5EyxWROMsqyq3QuU2sb2Qbm2zoogq0YDofpnCuyhv8Tu+X/WP/NhNgWqd9vIaiKirOyu8i+Yb+70RF3wgWBkeGHWyl2JDFKSEq3VdbvsNktWhgEhJMuq0cjfeNXUnMGz1q7fcN2d719/1Zi3xy5uOvoPb+1WZcRTb2OnFJFBNT035smSPCYzK4Njk5566dthhenPP7UwK2eULIdVqT36bRDwgoEQcCRIayv3OlMdLMt2dnaaTCZRYbzegNXEiZEwpXRySdbL72wUBNPLT116zjnTmkY0hbTI/rZD+l9xKgx25rOSYUrZtPYOz4pVeyqqmt58epqnKwSAADM8hwlgVVWampqMRmMgEHA4HIGQihBC6BhHjZFnTULC7OkGA0+vvGXJ4ncuUwsnf1P4yapdbQ/UvwQAEFGWPyBs/uYPK2ajYcOKOr1j/v3pphRb09lT85+4qxghiNWVD0lUwdr000YuWcNoamRGKVO1v552R0cjgLUbG954bu53t+wt7L57NmPE0SzKfqG/bDsAIAlTvg+28d1bl/jZTL8tVF5ZN3VyIQDIsjo4P33lwfNvu/kqn8+nadozz7+28PTyo65I3oB0/SOUyEZHif5aUZR/vvuf7TsOjS9Jm3/xpHBE4nmWwVgjhOfY1/+1mlBYeMUkMaRSSqSITwx3IcToibQIEMOyERnSs/LqO/MHjrpS0zSj0fifj7+6bfbh9Zsr0uzH7K8aDexTb+22GOHRBy5ko8EEvwKTUXjxrZX7D3luvKzAZjXE71EjBCNLRn20OmXMpAsMBgOl9IOPlv/pioZNm3fYzD2xYUjf/dM0ChQARSS5pqFj7TbP+WcNnTi2QC+toqgaz3N2q+GJF1a62jsuOD07NdEoSurxm2MpmXnf7S6YPvOC4SOKLRYLADz858dGO5fpGycIocVf7brz7jMPXnjQ6iYAoAEtM6Vc8OrBVQtP1MO9L+hHsVtWOGpqo2mHGK2A6SrljQtN23bVnD1zuEZIS6unZPT44ae/AwC6M2Xrth1mZX3Vzs8uOHea/qgokU2JYzRNoUQDhFTRf6hqVW2jZ3NF62njCyaU5nMcs2xl5aYdtQsuG5doY9VI763MeBACV5c6amTR0q2FZrPV7ZFvPe/IjxsqMhJ7DwIFMApMu0f8+Juffn0oKlAKwwYljhmRZhBOMJkcaZXOP3v8zoMJNe4sSSFXTEfT5m4AAAkNSURBVKs+cLCOVb29fNK90DS13eNdsa51+mlDJ48vQAgIgRf//v3RVvHe60doqqgoFAAoJceLXdbA0d9XjTr7rLMSExNTU1MBoKGxbcW/Ths2JEdVNYQQg7nUAdb2yfv1RoIa0FlCpqlzfcT8C8Epv5kTjEtfsXNkYHZDIuo2FBSfNmHYgKde2nbpBQafP8JznCgDpZQQojvwjAbe4+ERRp6ONk97rNPhAYgbRYTQwBxbQa79kxUHyyuqEUKyQu+8eiSlonqyeGFgWcxglJPCVB8+ctkUTlE0k1HYvK0qN5UFAEnWZEUT5W7TBkBPtZg3Ozbt/DoogChpotTz2FgWcywWeGZkvnnDlsqcrIxBxS6Gwes37U+1cTzPUEpVjfbe1OqGYdi0lJTr56a89+Wh8sojAIgQcsOlxRFRIYSyrDEWWN1L5gCAYXCaMy0YDGZmZuphLzyPKQVASP9ns5rcO/3RTHeAVCwctof6T+agX8Xu8cVH7LPZ0u+wSigFcNaoCAHCQEKdJCypilo0QG1qrHckJoui2NbWtmTp2ldvr/vsqBAncwDQPeUAUAoCzxgEhlK4/tIR+jvtnnB1vTeWsoAA9lZ3HKyJhMMQnwFj4IHjQP8N5OUdyRuQJwgcxnxz1DOFAX5d/PPvg212ucOiIolibV3t0aMqxqBqICsQH81uEMBhh2EF9uy0nkyf0ydm5GfbjYZo1z+LiQOAYFj5OXkFAIElVQeaSkpG79u3b/jw4RzHLXrhtdEpnOzvAIBDdd7TJo+mWC/hCQRgqNl6/rMHj71GH9OPYgcAf/mo5uiAsvKA6/hUljQH+8lXO46KL5WOn1VUVFRdXX3jnMDSVbVpSQYA4FhsMnIAgBGqb/EdrPNiBAyD6pp8NY2iLEEgAABAAQQesjJh8sSxyUnRopMTkmHevOyS0SN/rlNWOBwJBk82Hf/XwBgnWCwGg3C8yCCAmtq6PXv2xufahSPh9xdvCARBj1dnGHA4ABBMGJloNLAAwHPMpNEZLItBD04OyQCwZuOuu+aoi96D6WVDt2/fvnX73jPH+KArmjNV3+I7rfv6IVDPS8h85IyW7xf0l1Wn09us6XMW/DHz2s/TSU2gZggz8+0Rc2/47I2/jvUFJAAIimTEsPy69lRFkRMsZndLOVXFLbsaOBa6AtLBI6JeRYnngOfhvruvjqU5ZWSkFxUWxL65qqmhUOgkvShPEYQwIIQQ/pkIzl8LoZSA7i7qo1HGGNvtttiyOiJGdpVXxFKMI2Hxzbc/D0WAUqAAKUkwdJANAGw2U+nowtEjCqpqKKVkcDbeu3+/AEH9KgdqOqdOKUUI2i6rSXSYnniocdmt/bU5EaPfxU6n9EV4fcBZXl/o359suee60a9/WMFgUFQiyTQj3TZwQLItMXf0qBKGwWazyWG3AwJFUU8Y7ArQM+3GoJTG595RSsL+ZjHcfmxyGiWaSqh6fCucKAgBIIQQnLK75KToAgfw82KHMKvXZYo/iBFrTS46NukJxYf+6xxvw/XCYDDo12052qqqxOEwr9+4oaqy0uMNd3rCdhtDCeU49rJzihyp2WYTf+tflq7b1usa/UW/i13p65D0AQBAcXG23w9vvf64x+PVtGgGHhw7fBj3BHMQTVVkf/SRUOJxVcZO6zvJ6AFjXc/1C7Sb3m/8DuJ/ZgZjksmWo79mGJ7l4wJdKZBjawtB3M+WYRiE0HOLXvL5A4kO+56qeosZ+jxP7Hj6Xeyml8CP25ZK7e2dnV6AnkwLzPD6YxZD7ZomAiCgxN95SOvOx0EI/9o0x15gjOOVBEIgibIoS8f3jtIICYXCQb0lfF9DKVjMJo5nTYaeCNYYvMAbDb0VXvzP8tdCqUa0nlmCYXlrUhEAIEBGSzrCGCCaqh07BwA4jpMkOTkp8Z333l+7bnN/S17/ip2lCbbVPpiYmMJwvH4jv+ew/lbY36wqIYBokYC4D50qGOP4xqaaRrq6fLGlC6U0FA7HeprrxzDD4H4uOvFrIYT0KjqBECQ67Me2FjcbDMcksMUStn8Vmirq0z0nWI2WdKCUNziMFielFBBoSgQAWJa98pp7a1+AmrLeH+9D+lHs+CBcs8By09WTGMwh/OvKQQDo+XkAAIqiujuiVd7DkYjWvZOI8Qksnv9P0DSiix1CYDIZ9XGgAFnp0fx9Qn71nE40Wa80ZUlIu+dP76/Y3PuEPqQfHShnXAtDCtNZ9mSt3/Q5Vx8hBNDR6RGlaIqeLCuxgYuJFwLEsr8gwQhBnPUShVJKCFC9U/JxeLrCra5ge0cw2N0bt29hMLbbjXarITXZkuQ4sVsHRTnmIKUnXjrEq3mpu+cbAByuqdNfsCwbOyczIx0AgNLYDU54zVgZGjHSdfHskSugx5juc/pR7LAbzr2lOJYY3DOolMqKAgCiJHd0egB6yibEj/oJHgIAAMQXNAEAopGwqChKzzzV0uY7Ut8ZCB4jQIQQQiA62ggiyUCOlV6EAGGAaBJZ39MsRaAdaJxrAgGwYeC7O/thrC9rev5kSiHDmTCk0GkUemxco4E1GrhjpIZCrGZK7PdJ9D8YAADq6hv1F7EhtdusFrMJEOK56JUp7dGOlFKH3WSrB1+ufqDv6Uex41hYs2F3SpJF79xwEnieNQgsQqjN7W9pDegjX7G/xePR9NdmE9Sd2322CJEUODgPyC9c9f9FqG57xeHr3qg7ASlVkHOs7Z/5FcgyIARUg/FjnRaTAAAYw6hhmbqm9wUkhMDb5fN2neCyuqGJEHy0dK8v2l6gX+hH2w4AZpfBgrnFCONoIZNujAaOZTHD4FXralgW2jtDtfUhhEAQQOCh8iYAAMJBzfnxH/o/fh0Fn0dfjHwb/AEABITA5HFpmkaAwtRJ+QhBICj3mnDbO0PffH9458vgGhN/uI/pX7EDgLMmwqC8xEtmF4mSunlHvT73HXX5giEAgMA0qDkvembrhJ5P/R/9QXq3N7jgczBvBU2DwfkJLIM1AmXjc60Jwq7K5vKqoxtfgY5jmvP0Pf0udowEM+4FQxUgBDwHDWfBoUsAAPy5vU78P/7bsBEwuQAAzrwBZAUIAYGDz/vZY6fzP2eprGibBueQAAAAAElFTkSuQmCC"
					), aCr(5, "arena", 6, "iVBORw0KGgoAAAANSUhEUgAAACsAAAAKAQMAAAAXYzUQAAAABlBMVEUAAAD///+l2Z/dAAAARklEQVQI12OwqbdXOHyAoabe3uD4AYaURAOLYw4gygZE1dvpAKl/FXZq/g8Y/tUYGAOpY3kGxj4JDMfS7Q3PAKlke4MzCQCHpxoxsfTs8gAAAABJRU5ErkJggg=="),
				aCr(6, "territorial.io", 6,
					"iVBORw0KGgoAAAANSUhEUgAAGe4AAAMACAYAAAD286EDAAAABGdBTUEAALGPC/xhBQAACklpQ0NQc1JHQiBJRUM2MTk2Ni0yLjEAAEiJnVN3WJP3Fj7f92UPVkLY8LGXbIEAIiOsCMgQWaIQkgBhhBASQMWFiApWFBURnEhVxILVCkidiOKgKLhnQYqIWotVXDjuH9yntX167+3t+9f7vOec5/zOec8PgBESJpHmomoAOVKFPDrYH49PSMTJvYACFUjgBCAQ5svCZwXFAADwA3l4fnSwP/wBr28AAgBw1S4kEsfh/4O6UCZXACCRAOAiEucLAZBSAMguVMgUAMgYALBTs2QKAJQAAGx5fEIiAKoNAOz0ST4FANipk9wXANiiHKkIAI0BAJkoRyQCQLsAYFWBUiwCwMIAoKxAIi4EwK4BgFm2MkcCgL0FAHaOWJAPQGAAgJlCLMwAIDgCAEMeE80DIEwDoDDSv+CpX3CFuEgBAMDLlc2XS9IzFLiV0Bp38vDg4iHiwmyxQmEXKRBmCeQinJebIxNI5wNMzgwAABr50cH+OD+Q5+bk4eZm52zv9MWi/mvwbyI+IfHf/ryMAgQAEE7P79pf5eXWA3DHAbB1v2upWwDaVgBo3/ldM9sJoFoK0Hr5i3k4/EAenqFQyDwdHAoLC+0lYqG9MOOLPv8z4W/gi372/EAe/tt68ABxmkCZrcCjg/1xYW52rlKO58sEQjFu9+cj/seFf/2OKdHiNLFcLBWK8ViJuFAiTcd5uVKRRCHJleIS6X8y8R+W/QmTdw0ArIZPwE62B7XLbMB+7gECiw5Y0nYAQH7zLYwaC5EAEGc0Mnn3AACTv/mPQCsBAM2XpOMAALzoGFyolBdMxggAAESggSqwQQcMwRSswA6cwR28wBcCYQZEQAwkwDwQQgbkgBwKoRiWQRlUwDrYBLWwAxqgEZrhELTBMTgN5+ASXIHrcBcGYBiewhi8hgkEQcgIE2EhOogRYo7YIs4IF5mOBCJhSDSSgKQg6YgUUSLFyHKkAqlCapFdSCPyLXIUOY1cQPqQ28ggMor8irxHMZSBslED1AJ1QLmoHxqKxqBz0XQ0D12AlqJr0Rq0Hj2AtqKn0UvodXQAfYqOY4DRMQ5mjNlhXIyHRWCJWBomxxZj5Vg1Vo81Yx1YN3YVG8CeYe8IJAKLgBPsCF6EEMJsgpCQR1hMWEOoJewjtBK6CFcJg4Qxwicik6hPtCV6EvnEeGI6sZBYRqwm7iEeIZ4lXicOE1+TSCQOyZLkTgohJZAySQtJa0jbSC2kU6Q+0hBpnEwm65Btyd7kCLKArCCXkbeQD5BPkvvJw+S3FDrFiOJMCaIkUqSUEko1ZT/lBKWfMkKZoKpRzame1AiqiDqfWkltoHZQL1OHqRM0dZolzZsWQ8ukLaPV0JppZ2n3aC/pdLoJ3YMeRZfQl9Jr6Afp5+mD9HcMDYYNg8dIYigZaxl7GacYtxkvmUymBdOXmchUMNcyG5lnmA+Yb1VYKvYqfBWRyhKVOpVWlX6V56pUVXNVP9V5qgtUq1UPq15WfaZGVbNQ46kJ1Bar1akdVbupNq7OUndSj1DPUV+jvl/9gvpjDbKGhUaghkijVGO3xhmNIRbGMmXxWELWclYD6yxrmE1iW7L57Ex2Bfsbdi97TFNDc6pmrGaRZp3mcc0BDsax4PA52ZxKziHODc57LQMtPy2x1mqtZq1+rTfaetq+2mLtcu0W7eva73VwnUCdLJ31Om0693UJuja6UbqFutt1z+o+02PreekJ9cr1Dund0Uf1bfSj9Rfq79bv0R83MDQINpAZbDE4Y/DMkGPoa5hpuNHwhOGoEctoupHEaKPRSaMnuCbuh2fjNXgXPmasbxxirDTeZdxrPGFiaTLbpMSkxeS+Kc2Ua5pmutG003TMzMgs3KzYrMnsjjnVnGueYb7ZvNv8jYWlRZzFSos2i8eW2pZ8ywWWTZb3rJhWPlZ5VvVW16xJ1lzrLOtt1ldsUBtXmwybOpvLtqitm63Edptt3xTiFI8p0in1U27aMez87ArsmuwG7Tn2YfYl9m32zx3MHBId1jt0O3xydHXMdmxwvOuk4TTDqcSpw+lXZxtnoXOd8zUXpkuQyxKXdpcXU22niqdun3rLleUa7rrStdP1o5u7m9yt2W3U3cw9xX2r+00umxvJXcM970H08PdY4nHM452nm6fC85DnL152Xlle+70eT7OcJp7WMG3I28Rb4L3Le2A6Pj1l+s7pAz7GPgKfep+Hvqa+It89viN+1n6Zfgf8nvs7+sv9j/i/4XnyFvFOBWABwQHlAb2BGoGzA2sDHwSZBKUHNQWNBbsGLww+FUIMCQ1ZH3KTb8AX8hv5YzPcZyya0RXKCJ0VWhv6MMwmTB7WEY6GzwjfEH5vpvlM6cy2CIjgR2yIuB9pGZkX+X0UKSoyqi7qUbRTdHF09yzWrORZ+2e9jvGPqYy5O9tqtnJ2Z6xqbFJsY+ybuIC4qriBeIf4RfGXEnQTJAntieTE2MQ9ieNzAudsmjOc5JpUlnRjruXcorkX5unOy553PFk1WZB8OIWYEpeyP+WDIEJQLxhP5aduTR0T8oSbhU9FvqKNolGxt7hKPJLmnVaV9jjdO31D+miGT0Z1xjMJT1IreZEZkrkj801WRNberM/ZcdktOZSclJyjUg1plrQr1zC3KLdPZisrkw3keeZtyhuTh8r35CP5c/PbFWyFTNGjtFKuUA4WTC+oK3hbGFt4uEi9SFrUM99m/ur5IwuCFny9kLBQuLCz2Lh4WfHgIr9FuxYji1MXdy4xXVK6ZHhp8NJ9y2jLspb9UOJYUlXyannc8o5Sg9KlpUMrglc0lamUycturvRauWMVYZVkVe9ql9VbVn8qF5VfrHCsqK74sEa45uJXTl/VfPV5bdra3kq3yu3rSOuk626s91m/r0q9akHV0IbwDa0b8Y3lG19tSt50oXpq9Y7NtM3KzQM1YTXtW8y2rNvyoTaj9nqdf13LVv2tq7e+2Sba1r/dd3vzDoMdFTve75TsvLUreFdrvUV99W7S7oLdjxpiG7q/5n7duEd3T8Wej3ulewf2Re/ranRvbNyvv7+yCW1SNo0eSDpw5ZuAb9qb7Zp3tXBaKg7CQeXBJ9+mfHvjUOihzsPcw83fmX+39QjrSHkr0jq/dawto22gPaG97+iMo50dXh1Hvrf/fu8x42N1xzWPV56gnSg98fnkgpPjp2Snnp1OPz3Umdx590z8mWtdUV29Z0PPnj8XdO5Mt1/3yfPe549d8Lxw9CL3Ytslt0utPa49R35w/eFIr1tv62X3y+1XPK509E3rO9Hv03/6asDVc9f41y5dn3m978bsG7duJt0cuCW69fh29u0XdwruTNxdeo94r/y+2v3qB/oP6n+0/rFlwG3g+GDAYM/DWQ/vDgmHnv6U/9OH4dJHzEfVI0YjjY+dHx8bDRq98mTOk+GnsqcTz8p+Vv9563Or59/94vtLz1j82PAL+YvPv655qfNy76uprzrHI8cfvM55PfGm/K3O233vuO+638e9H5ko/ED+UPPR+mPHp9BP9z7nfP78L/eE8/stRzjPAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAAJcEhZcwAALiMAAC4jAXilP3YAAR6vSURBVHic7N1/3Nbz/f//x3me1XmqJM6ypNGSSoW0LHqXt99qZWIzovIrkzWbUjrrLCEpP5f1A40RxjDDQjVhWCsLsWGitbSMt19LnxA5z77/7LvLZqrzPOvseRzn63r9r+NynudxO/44jo7zvLyO570gIjYGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGREYeoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANieDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAA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jz//+c+xZMmS+PWvfx3Lly9PnQXUssWLF8c3vvGN1BmZM3To0Jg1a1bqDBJp3rx5LF++PHbcccfUKZm2dOnS+PrXv546AwAAAAAAAAAAAACAWlYvdQAAAAAAAAAAAAAAAGxLRUVFcfzxx8fhhx8eBxxwQLRv3z6aNm2aOiuv7bDDDrHffvvFfvvtFyeddFJcddVVsWrVqnjppZdi8eLFcd9998Wrr76aOhMA8t7IkSON9uSAAw44II455piYP39+6hQAAAAAAAAAAAAAAGqR4R4AAAAAAAAAAAAAAPJe7969o0+fPtG9e/fo1KlTNGrUKHVSnVZQUBB77rln7LnnntG3b9+49NJL469//Ws899xz8cQTT8Ttt98eH330UepMAMg7/fv3T53APw0ZMsRwDwAAAAAAAAAAAABAHWe4BwAAAAAAAAAAAACAvNOyZcs49dRT49BDD41u3bpF8+bNUydlWkFBQbRp0ybatGkTJ554Ylx77bXxwgsvxJNPPhn33HNPLF26NHUiAOS83r17x9577506g3864ogjon79+rFhw4bUKQAAAAAAAAAAAAAA1BLDPQAAAAAAAAAAAAAA5IX9998/TjnllDj88MNj//33j3r1XBKfq0pKSuKggw6Kgw46KC688MJYtmxZPPnkk3HXXXfFU089lToPAHLSwIEDUyfwb5o2bRpnn312zJw5M3UKAAAAAAAAAAAAAAC1xKcUAQAAAAAAAAAAAADIWd26dYvBgwfHEUccER06dIiCgoLUSVRTQUFBdOjQITp06BDnnHNOrFixIhYsWBCzZ8+ORYsWpc4DgJzRs2fP1Al8QZ8+fQz3AAAAAAAAAAAAAADUYYZ7AAAAAAAAAAAAAADIKR06dIgzzzwzevfuHZ06dTLWU8e0adMmvve978XZZ58dr776asydOzdmzpwZK1asSJ0GAMkccsghsccee6TO4AsOOuig1AkAAAAAAAAAAAAAANSiwtQBAAAAAAAAAAAAAABQv379GD58eCxcuDD++Mc/xsiRI6Nz585Ge+qwgoKC2GeffWLEiBHx5z//OZ588sk477zzoqioKHUaAGx3/fr1S53AlygtLY3evXunzgAAAAAAAAAAAAAAoJbUSx0AAAAAAAAAsK3df//9sdtuu6XOAHLE9OnT44477kidwSaMGzfOgZR1wG233RYzZ85MnUEeuuWWW2KfffZJnUEVvffee16zAagVRx55ZJx99tlx1FFHRdOmTVPnkEj9+vWjV69e0atXrxg/fnw8/PDDMW3atHj++edTpwHAdtG9e/fUCWzC0UcfHfPmzUudAQAAAAAAAAAAAABALTDcAwAAAAAAANQ5Xbp0iT333DN1BpAjdt9999QJbMacOXOivLw8iouLU6ewFZo2bWq4h2rr2bNnDBw4MIqKilKnUEVXXHFF6gQA6pD69evHiBEj4uSTT479998/dQ45plmzZnHaaafFwIEDY8mSJTF79uy48cYbU2cBQK0ybpy7unbtmjoBAAAAAAAAAAAAAIBaUpg6AAAAAAAAAACA7HrxxRfjvvvuS53BVmrXrl2cddZZqTPIM6NGjTLak0dWrVoV48aNS50BQB3QsWPHuOWWW+Lvf/97TJ482WgPm1VUVBQHHXRQXH/99bFy5cqYMmVKlJaWps4CgG1u//33j2bNmqXOYBP23nvv1AkAAAAAAAAAAAAAANQSwz0AAAAAAAAAACQ1bty4WLduXeoMttK5556bOoE80rlz5zjmmGNSZ1AN11xzTVRUVKTOACCPHXPMMfHQQw/F888/H6eddprxFaptjz32iAsvvDBWrFgRs2fPjs6dO6dOAoBt5rDDDkudwGbstttu0bp169QZAAAAAAAAAAAAAADUAsM9AAAAAAAAAAAktXLlyrjjjjtSZ7CVunbtGv3790+dQZ4oKyuLBg0apM6gil588cWYNm1a6gwA8tSgQYNi8eLF8cgjj8Q3v/lN7wHYajvuuGMMGjQolixZEg8++GD07NkzdRIAbLX27dunTmALevTokToBAAAAAAAAAAAAAIBaYLgHAAAAAAAAAIDkxo4dG++//37qDLbSj370o9QJ5IFWrVrFcccdlzqDKtq4cWNceumlqTMAyEPf+9734oUXXojZs2fHN77xjSgoKEidRB1TXFwcxx57bDzxxBMxb968OPLII1MnAUCNfe1rX0udwBZ06tQpdQIAAAAAAAAAAAAAALXAcA8AAAAAAAAAAMmtWbMmbrrpptQZbKVevXpFr169UmeQ48rLy6NRo0apM6iixx9/PO6///7UGQDkkWHDhsUrr7wSN9xwQ+y3336pc8iAoqKiOProo2PevHmxYMECAz4A5KUWLVqkTmALvvrVr6ZOAAAAAAAAAAAAAACgFhju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FpLMnDkzmjZtmp1RdEpLS7MTAAAAAAAAAFhKDbIDAAAAAAAAAACgEAwdOjR23333qKioyE5hMcrKyuKUU06JX/ziF9kpNebggw822lPH3HDDDUZ7AOqhX//610Z7CtT8+fPj5ptvjr59+0ZVVVV2TkEZPnx4PPvss3HddddFx44ds3NYRj169Iju3bvH2LFjs1MAAChSO+ywQ/Ts2TM23njjWGeddWLNNdes80MFy2qVVVaJVVZZJbp06fKtf//ZZ5/FO++8E//6179izJgx8fjjj8f777+fVAnA8tS2bds46KCDomfPnrHRRhtFu3btspOW2P//eLbRRhvFvvvuGxdddFF88sknMW7cuBg7dmzcc889fucEAAAAAAAAAECdVBIR87MjAAAAAAAAAGrSv//971hzzTWzM4raBx98EGuvvXZ2BkCtu+yyy+K4447LzqAa5s6dG926dYu33347O6VGjB49Onr06JGdwQIfffRRdOrUKebNm5edAsASeu+99/w8W4Bmz54dQ4YMiUsvvTQ7paCVl5fHyJEjY/vtt89OYRndcMMNcdRRR2VnUEe89NJLsemmm2ZnFJ1+/frFddddl50BAMtdw4YNY++9946tt946unfvHuutt140b948O6vOmj9/fnz00Ucxbty4GDNmTDz22GPx4osvZmcBsJS6d+8eBx98cGy11VbRtWvXaNCgQXbScjdhwoR44YUX4vHHH4877rjD86mwnMycOTOaNm2anVF0SktLsxMAAAAAAAAAWEqGewAAAAAAAICCY7gnn+EeoFiVl5fHW2+9Fa1bt85OoRpuvvnmOPzww7Mzltmuu+4af/rTn7IzWMivf/3ruOSSS7IzAFhCBx98cNx8883ZGdSwKVOmxGGHHRaPPPJIdkrRuPTSS6N///5RVlaWncJS+vjjj2ONNdbIzqCOMNyTw3APAIWsd+/esdtuu8UWW2wRG2ywQTRp0iQ7qV77z3/+E6+99lq88MILMXLkyHj33XezkwBYhE6dOsWRRx4ZO+20U2ywwQZRUlKSnZTmyy+/jOeffz7uvffeuOmmm6Kqqio7CQqG4Z4chnsAAAAAAAAA6i/DPQAAAAAAAEDBMdyTz3APUMzOOuusGDJkSHYG1fDll19Gp06dYsqUKdkpy+Svf/1rbL311tkZLPDGG29Et27dsjMAWApPPvlkbLPN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ZwAAUIPatm0bd955Zzz22GPxk5/8JDuHeqisrCz22GOPGDNmTFx22WXRsGHD7CSAGtOtW7d45ZVXYu+9985OYRmsscYacffdd8dZZ52VnQIAAAAAAAAAQB1nuAcAAAAAAAAAAGrBxIkT45ZbbsnOoBp23nnn6NSpU3bG/zjyyCOzE1hg1KhR8dRTT2VnALAMDj744OwElkJlZWWccsopMWHChOwUatCbb74ZJ510UnzzzTfZKSzCLrvskp0AAEANOfPMM+ONN96IfffdNxo0aJCdQz3XvHnzOO644+Ktt96KQw45JDsHYJn16dMn/vKXv8QGG2yQnUINaNSoUQwZMiQefPBBI3MAAAAAAAAAAPwgwz0AAAAAAAAAAFBLBg0aFJ999ll2BouxwgorxODBg7MzvuWggw6KLl26ZGcQEbNnz46BAwdmZwCwjHr37p2dwFK46aab4tZbb83OYDm47bbb4qabbsrOYBG23HLL7AQAAJZR796947XXXoszzjgjVl555ewcCsxaa60VN910Uzz22GOx7rrrZucALJWBAwfGjTfeGKusskp2CjXs5z//ebz88sseowAAAAAAAAAA+F6GewAAAAAAAAAAoJbMmDEjbrjhhuwMqmHPPfeMli1bZmf8V//+/bMTWOC2226LN998MzsDgGWw0047xRprrJGdwRJ6/fXX4+ijj87OYDn61a9+FePHj8/O4Ad07NjRwaYAAPVU48aN4/e//338+c9/jm7dumXnUOC22267GD16dAwePDg7BWCJXHvttTFixIho1KhRdgrLSbdu3eKvf/1rbLXVVtkpAAAAAAAAAADUMYZ7AAAAAAAAAACgFg0dOjQmTpyYncFilJeX15lD5XbZZZfYdNNNszOIiM8++ywGDBiQnQHAMvrFL36RncASmjNnTvTv3z+qqqqyU1iOKisr45hjjok5c+Zkp/A9SkpKYu+9987OAABgCe2+++4xbty4OPzww6Nhw4bZORSJlVZaKc4+++x48cUXo2vXrtk5AItUWloa999/fxx55JFRUlKSncNy1rZt23jggQdin332yU4BAAAAAAAAAKAOMdwDAAAAAAAAAAC1qLKyMq644orsDKph//33j8aNG2dnxIknnuiQqDrimmuuienTp2dnALCMevXqlZ3AErrmmmvihRdeyM6gFjz77LNxzTXXZGfwA7ba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XFRVVWXnLFcnnHBC7LfffjF58uTsFBY44ogjshMAKDAbbLBBdgIAAAAAAAAAAAsx3AMAAAAAAAAAAEXq+uuvj9deey07A37QXXfdFW+88UZ2BgB1WIsWLbITWMg777yTnQAAALDM9t9//+wEFjJmzJjYcsst4/77789OqTX3339/bL311jFu3LjsFCKid+/e0axZs+wMAApIhw4dshMAAAAAAAAAAFhIg+wAAAAAAAAAAAAgz/nnnx933nlnlJSUZKfAt0ybNi0GDBiQnQFAHdapU6do2LBhdgYLGTt2bHYCAADAMtlyyy1jk002yc5ggbvuuisOPPDAqKqqyk6pdW+++WZsuumm8fDDD0evXr2yc4raSiutFP369YuLL744OwWoY6ZNmxZTp06NL774Ij7//PP46quvIiJi5syZ0bx584iIaNSoUZSXl8eKK64YK6+8cqy66qrRuHHjzGzqgDXWWCM7AQAAAAAAAACAhRjuAQAAAAAAAACAInb33XfHscceGz/96U+zU+Bbrr322pgyZUp2BgB12DrrrJOdwELmzJljuAcAAKj3jj76aEP3dcD8+fPjiiuuiBNPPDE7JdWcOXNiu+22i3vvvTd233337JyitsceexjugSJWVVUV77zzTvzrX/+KcePGxauvvhrPPPNMTJ8+famut/7668emm24a3bp1i/XWWy822GCDaN++ve9BishKK60U66+/frz55pvZKQAAAAAAAAAAhOEeAAAAAAAAAAAoemeffXY88sgjUVZWlp0CERExYcKEOOOMM7IzAKjjVl999ewEFvLZZ59lJwAAACyTsrKy2HHHHbMzit78+fPjnHPO8TviBaqqqmLPPfeMe+65J/baa6/snKK16aabRocOHeL999/PTgFqyaxZs+LFF1+Mxx9/PEaOHBkffvhhjV37zTff/J/Blg4dOsTee+8dvXv3jk033TRWWmmlGrsfdVPPnj0N9wAAAAAAAAAA1BGl2QEAAAAAAAAAAECuJ598Mh577LHsDPiviy++OCorK7MzAKjjVltttewEFjJlypTsBAAAgGVy5JFHRsuWLbMziprRnh+27777xiOPPJKdUbQaNmwYRx55ZHYGsJxVVVXFyy+/HKecckq0adMmtt9++7joootqdLTnh7z//vtx4YUXxg477BCtWrWKE044IZ599tn45ptvlvu9ydG5c+fsBAAAAAAAAAAAFjDcAwAAAAAAAAAAxJlnnhlff/11dgbEa6+9FldddVV2BgD1wKqrrpqdwEI+/fTT7AQAAIBlst9++2UnFL0LLrjAaM8PqKqqij322CNGjx6dnVK0dthhh+wEYDmZO3du3H///fGTn/wkNt988/jtb38bs2bNSuuZN29eXHHFFbH11ltHjx494rbbbouZM2em9bB8dOzYMTsBAAAAAAAAAIAFGmQHAAAAAAAAAAAA+caMGRP333+/gwlJNX/+/Dj77LOzMwCoJwz31C2GewAAgPqsXbt2scUWW2RnFLUbbrghBg0alJ1Rp82bNy/23HPPeO655xz2n6Br166x/vrrx5tvvpmdAtSQb775Jh588MEYNmxYjB8/Pjvne73++utx8MEHR7t27eKcc86JvffeO5o0aZKdRQ1o165ddgLV8Jvf/Cbuuuuu7Iwl9uijj0bjxo2zM4rO1ltvnZ1Qaz755JPsBAAAAAAAAIAaZbgHAAAAAAAAAACIiIihQ4fGLrvsEs2bN89OoUg9+eST8cADD2RnAFBPrLzyytkJLOTjjz/OTgAAAFhqRx99dDRq1Cg7o2g98sgjcdRRR2Vn1AuTJk2KQw45JB555JEoLy/PzikqZWVlcfjhh8eAAQOyU4Aa8OKLL8bAgQPj2WefzU6plokTJ8ahhx4al156afz2t7+Nn/3sZ9lJLKPVVlstO4FqmDBhQkyYMCE7Y4lVVVVlJxSl+vKYAgAAAAAAAMD/Ks0OAAAAAAAAAAAA6oZ333037rjjjuwMitTXX38dQ4YMyc4AoB5ZaaWVshNYyAcffJCdAAAAsNR22WWX7ISiNX78+Nh3332zM+qVF198MQYMGBDz58/PTik62223XXYCsIw+//zzOP300+MnP/lJvRxYeO2116JXr15x/PHHx+eff56dwzJo2bJllJWVZWcAAAAAAAAAABCGewAAAAAAAAAAgIUMGTIkpk2blp1BEbrnnnvilVdeyc4AoB5ZccUVsxNYyLvvvpudAAAAsFS6desW3bp1y84oSp9//nn06dMnZs2alZ1S71x77bUxcuTI7Iyi07Vr1+jUqVN2BrCUXn755fjJT34SF154YXbKMrvyyivjpz/9qedX67GysrLYYostsjMAAAAAAAAAAAjDPQAAAAAAAAAAwEKmTJkSf/jDH7IzKDJffPFFnH766dkZANQz5eXl2Qks5B//+Ed2AgAAwFI59NBDo6SkJDuj6MyfPz9OP/30eOONN7JT6q2+ffvG+++/n51RVMrKyuLggw/OzgCWUFVVVVx11VWx+eabx5tvvpmdU2PGjx8fW2yxRdx2223ZKSylzp07ZycAAAAAAAAAABCGewAAAAAAAABYDtZcc82oqqry4aPGPvbee+/s/62hqJxxxhnxySefZGdQRH7/+9/HxIkTszMAqGeaN2+encACc+bMialTp2ZnAAAALJVtt902O6Eo3XnnnXH99ddnZ9Rrs2bNipNOOikqKyuzU4pK7969sxOAJTBr1qw4/vjj47jjjstOWS6qqqri4IMPjnPOOcfjQT209tprZycAAAAAAAAAABCGewAAAAAAAAAAgO+YM2dOXHPNNdkZFImPP/44hgwZkp0BQD1kuKfumD59enYCAADAUunWrVtssMEG2RlF54MPPoijjjoqO6MgPPTQQ3HvvfdmZxSV7t27R3l5eXYGUA3Tpk2L/fffP66++urslOVu6NChMWDAgPjmm2+yU1gC7du3z04AAAAAAAAAACAM9wAAAAAAAAAAAN/jvPPOi/feey87gyJw6aWXxpw5c7IzAKhnWrRoEY0aNcrOYIEZM2ZkJwAAACyVQw89NEpKSrIzikplZWWceuqpMWvWrOyUgtG/f/+YMmVKdkbRaNy4cRxwwAHZGcBifPrpp7HHHnvEww8/nJ1Sa37729/G4MGDo7KyMjuFamrVqlV2AgAAAAAAAAAAYbgHAAAAAAAAAAD4HlVVVXHJJZdkZ1Dg/vnPf8bFF1+cnQFAPdShQ4fsBBYybdq07AQAAIClss0222QnFJ377rsv7rnnnuyMgjJ16tS46qqrsjOKSq9evbITgEWYPHly7LXXXvH8889np9S63/zmN3HeeedlZ1BNLVq0yE4AAAAAAAAAACAM9wAAAAAAAAAAAD/g6quvjjfeeCM7gwI2YsSI7AQA6qlVV101O4GFTJ8+PTsBAABgiXXo0CE22GCD7IyiMm3atDjppJOyMwrSiBEj4u23387OKBo9evTITgB+wPTp0+Oggw6KF198MTslzRlnnBG33XZbdgbVsMoqq2QnAAAAAAAAAAAQhnsAAAAAAAAAAIBFOP/887MTKFDPPPNM3HXXXdkZANRTK6+8cnYCC5k2bVp2AgAAwBI75JBDoqysLDujqFxxxRXxySefZGcUpKqqqvjtb3+bnVE01lprrejWrVt2BvAdX3/9dfTr1y+efPLJ7JR0hx56aIwePTo7g8WoqKjITgAAAAAAAAAAIAz3AAAAAAAAAAAAi3DHHXfEiy++mJ1Bgfnmm2/ijDPOyM4AoB5zmF3dMnXq1OwEAACAJbbNNttkJxSV9957L84+++zsjIJ23XXXxfjx47MzisY+++yTnQB8x9ChQ2PkyJHZGXVCVVVVHHroofHZZ59lp7AI5eXlUV5enp0BAAAAAAAAAFD0DPcAAAAAAAAAAACLdNZZZ0VVVVV2BgXkwQcfjOeeey47A4B6zEF2dcuMGTOyEwAAAJZI48aNo3v37tkZReXiiy/2XEMtuPrqq7MTisaWW26ZnQAs5K677orf/OY32Rl1yttvvx2nn356zJ8/PzuFRdhwww2zEwAAAAAAAAAAip7hHgAAAAAAAAAAYJEee+yxePLJJ7MzKBAzZ86MgQMHZmcAUM+ttNJK2QksZPr06dkJAAAAS+Sggw6Kpk2bZmcUjfHjx8fvfve77IyicPXVV8eECROyM4pC9+7do7TUW/WhLhg3blwccsgh2Rl10h/+8Id46KGHsjNYhLXXXjs7AQAAAAAAAACg6Hk1IAAAAAAAAAAAsFjDhg2LefPmZWdQAP74xz/Gu+++m50BQD234oorZiewkM8//zw7AQAAYIlsu+222QlF5fLLL89OKCq33XZbdkJRKC8vj7322is7A4re7Nmz4+ijj/Zc9iIce+yxMXXq1OwMfkDLli2zEwAAAAAAAAAAip7hHgAAAAAAAAAAYLFGjx4df/rTn7IzqOc+/fTTGDRoUHYGAAWgadOm2QksZNq0adkJAAAAS2SzzTbLTiga77zzTlx33XXZGUXlN7/5TcyYMSM7oyhsvfXW2QlQ9C655JJ48cUXszPqtIkTJ8YVV1yRncEPWHnllbMTAAAAAAAAAACKnuEeAAAAAAAAAACgWgYPHhyzZ8/OzqAeu/LKKx0WCECNaNiwYXYCC5k8eXJ2AgAAQLV179491lxzzeyMonHLLbdkJxSdGTNmxBNPPJGdURQ22mij7AQoaq+99loMHTo0O6NeGDFiRLz11lvZGXyPioqK7AQAAAAAAAAAgKJnuAcAAAAAAAAAAKiWt99+O0aOHJmdQT319ttvx3nnnZedAUCBWHHFFbMTWMjEiROzEwAAAKptzz33zE4oGlOnTo2LLrooO6Mo/f73v89OKAqdO3fOToCiNW/evDjllFOyM+qNqqqquOSSS7Iz+B4rr7xydgIAAAAAAAAAQNEz3AMAAAAAAAAAAFTboEGDYvr06dkZ1EMXXHBBVFVVZWcAUCAaNGiQncAC8+fPjw8//DA7AwAAoNo233zz7ISi8eCDD8acOXOyM4rSo48+Gu+88052RsGrqKiIXr16ZWdAUbrzzjvjqaeeys6oV6677roYP358dgbfUV5enp0AAAAAAAAAAFD0DPcAAAAAAAAAAADVNmnSpLj55puzM6hnXnrppbjxxhuzMwAoII0bN85OYIGvvvoqOwEAAGCJbLTRRtkJRaGqqiquvvrq7Iyi9vjjj2cnFIXevXtnJ0DRmT59egwcODA7o1668sorsxP4DsM9AAAAAAAAAAD5DPcAAAAAAAAAAABLZMiQIfHpp59mZ1BPVFZWxrBhw7IzACgwTZs2zU5ggXnz5mUnAAAAVNu2224bLVq0yM4oCmPHjo2xY8dmZxS1m2++OebPn5+dUfC6d++enQBF54YbbohPPvkkO6Ne+t3vfhcffPBBdgYLWXHFFbMTAAAAAAAAAACKnuEeAAAAAAAAAABgicyaNSuuvfba7AzqiUceeSSeeOKJ7AwACkxpqZdB1xWGewAAgPpk2223zU4oGg888EB2QtEbM2ZMvP3229kZBW+DDTbIToCi8umnn8YZZ5yRnVGv3XHHHdkJLGSFFVbITgAAAAAAAAAAKHresQoAAAAAAAAAACyxs846KyZMmJCdQR03e/bsGDRoUHYGAAWoefPm2Qks8NVXX2UnAAAAVFv37t2zE4rCV199FVdffXV2BhHx/PPPZycUvHbt2sW6666bnQFF44477og5c+ZkZ9Rrl19+ecyePTs7gwWaNWuWnQAAAAAAAAAAUPQM9wAAAAAAAAAAAEusqqoqLrvssuwM6rg77rgjxo0bl50BACxHlZWV2QkAAADV1rlz5+yEovDyyy/H9OnTszOIiAcffDA7oeCVlJTETjvtlJ0BReHzzz+PM888Mzuj3ps0aVI8/fTT2Rks0LBhw+wEAAAAAAAAAICiZ7gHAAAAAAAAAABYKpdddlmMHz8+O4M66rPPPotBgwZlZwBQoMrKyrITWGD27NnZCQAAANXSpUuXaNu2bXZGUXjkkUeyE1hg1KhRMW3atOyMgrfhhhtmJ0BRePDBB2PGjBnZGQXhzjvvzE5ggUaNGmUnAAAAAAAAAAAUPcM9AAAAAAAAAADAUrvggguyE6ijrrvuupgyZUp2BgAFqnHjxtkJLDBv3rzsBAAAgGrZaaedshOKwrx58+KPf/xjdgYL+fvf/56dUPDWW2+97AQoePPmzYvf/va32RkF49Zbb43JkydnZxARTZs2zU4AAAAAAAAAACh6hnsAAAAAAAAAAICldsstt8To0aOzM6hj/v3vf8ewYcOyMwCAWjB37tzsBAAAgGrp0aNHdkJReOONN2LSpEnZGSzE8zjLX4cOHbIToOD97W9/i3HjxmVnFJRnnnkmO4GIaNCgQXYCAAAAAAAAAEDRM9wDAAAAAAAAAAAsk3POOSfmz5+fnUEdcvHFF0dlZWV2BgAFrFGjRtkJAAAA1DNdu3bNTigKL7zwQnYC3/HYY49lJxS81q1bR/v27bMzoKDdcccd2QkFZ9SoUdkJhOc7AAAAAAAAAADqAsM9AAAAAAAAAADAMhk1alT89a9/zc6gjnj11Vfj6quvzs4AoMA1bNgwO4EFjPUBAAD1QUVFRXTs2DE7oyg88sgj2Ql8x7PPPhszZszIzihoJSUlsd1222VnQMH69NNP4/e//312RsG5/fbb48svv8zOICLWWmut7AQAAAAAAAAAgKJmuAcAAAAAAAAAAFhmw4cPj2+++SY7g2RVVVUxYsSI7AwAoBZ99dVX2QkAAACLtccee0SDBg2yMwreF198YbinjnrzzTezEwreRhttlJ0ABeuvf/1rVFVVZWcUnMrKynj11VezM4jwfSoAAAAAAAAAQDLDPQAAAAAAAAAAwDJ7/vnn4+GHH87OINmTTz4ZDz74YHYGAAAAAMC3bLzxxtkJReGNN97ITuAHjB8/Pjuh4K2//vrZCVCw7r777uyEgjV69OjsBAAAAAAAAAAASGe4BwAAAAAAAAAAqBFDhw6NOXPmZGeQZO7cuTFkyJDsDAAAAACA/2FQo3b8/e9/z07gBxhVWv46duyYnQAF6ZNPPokHHnggO6NgPfTQQ9kJAAAAAAAAAACQznAPAAAAAAAAAABQI8aNGxd33313dgZJ7r777hgzZkx2BgAAAADA/+jUqVN2QlEYPXp0dgI/4IUXXshOKHhrrLFGNGzYMDsDCo6/v5avF154ISZPnpydUfRWXHHF7AQAAAAAAAAAgKJmuAcAAAAAAAAAAKgxb731VnYCCaZPnx6DBg3KzgAAAAAA+B/NmjWLNdZYIzuj4H3zzTfx0EMPZWfwA0aPHh2zZs3KzihoZWVl0bNnz+wMKDiPP/54dkLBe/PNN7MTip7hHgAAAAAAAACAXIZ7AAAAAAAAAACAGlFWVhb9+vXLziDBCy+8EBMnTszOAKCINGnSJDuBBWbOnJmdAAAAsEjbb799NGjQIDuj4H300UcxY8aM7AwWwe/xl7+NNtooOwEKyuzZs+Pmm2/Ozih4b7zxRnYCAAAAAAAAAACkMtwDAAAAAAAAAADUiDPPPDPatWuXnUGC3r17R/fu3bMzAIAEK6ywQnYCAADAIvXo0SM7oSi8//772QkshuGe5a9Tp07ZCVBQxo0bF/PmzcvOKHgvv/xydgIAAAAAAAAAAKQy3AMAAAAAAAAAACyzZs2aRd++fbMzSLLCCivE2WefnZ0BQBH56quvshNYoGHDhtkJAAAAi9S5c+fshKLw9ttvZyewGB9++GF2QsFba621shOgoLz66qvZCUXhiSeeiPnz52dnAAAAAAAAAABAGsM9AAAAAAAAAADAMjv77LOjdevW2Rkk2mGHHWKHHXbIzgAAAAAA+JZOnTplJxSFf/3rX9kJLIbhnuWvffv22QlQUJ566qnshKIwadKk+PTTT7MzAAAAAAAAAAAgjeEeAAAAAAAAAABgmbRs2TIOO+yw7AySlZaWxrBhw7IzAAAAAAC+Ze21185OKAr/+Mc/shNYjA8++CA7oeCtttpq2QlQMObOnRsPPvhgdkbRmDBhQnYCAAAAAAAAAACkMdwDAAAAAAAAAAAskxEjRkRFRUV2BnXA5ptvbsQJAAAAAKgzevToEU2aNMnOKHjffPNN/O1vf8vOYDHeeuut7ISCt8oqq0T79u2zM6AgvPfeezFv3rzsjKLx73//OzsBAAAAAAAAAADSGO4BAAAAAAAAAACW2lprrRV9+vTJzqAOOe2007ITAIBa1KBBg+wEAACAH7TxxhtnJxSFTz/9NCorK7MzWIwxY8bE/PnzszMK3uabb56dAAXhX//6V3ZCUfnggw+yEwAAAAAAAAAAII3hHgAAAAAAAAAAYKmdffbZ0bx58+wM6pD1118/Tj311OwMAKCWNG7cODsBAADgB6233nrZCUVhypQp2QlUw7x58+LLL7/Mzih4/t6BmjF+/PjshKLyzjvvZCcAAAAAAAAAAEAawz0AAAAAAAAAAMBS6dKlS/ziF7/IzqAOOv744x3iD8ByNW/evOwEAAAA6oEOHTpkJxSFyZMnZydQTTNmzMhOKHjt2rXLToCCMHbs2OyEovL3v/89OwEAAAAAAAAAANIY7gEAAAAAAAAAAJbK8OHDjbPwvVZfffU466yzsjMAKGBff/11dgILlJZ6SToAAFB3GdCoHYZ76o/p06dnJxS8Nm3aZCdAvVdZWRlPPvlkdkZRee211+Kbb77JzgAAAAAAAAAAgBTeJQkAAAAAAAAAACyxzTbbLHbdddfsDOqwvn37OpwOAIpA06ZNsxMAAAB+0BprrJGdUBSmTJmSnUA1zZw5Mzuh4LVq1So7Aeq9//znPzFr1qzsjKIzderU7AQAAAAAAAAAAEhhuAcAAAAAAAAAAFhiw4YNi4YNG2ZnUIdVVFTEeeedl50BQIGaM2dOdgIL+J4QAACoq8rLy2PVVVfNzigK06ZNy06gmgxhLH/+3oFl95///Cc7oSgZ7gEAAAAAAAAAoFgZ7gEAAAAAAAAAAJbItttuG9tvv312BvXAvvvuG126dMnOAKAAVVZWZiewQKNGjbITAAAAvtdWW20VpaXeRlsbJk+enJ1ANRnuWf5atmyZnQD13sSJE7MTipIhPgAAAAAAAAAAilWD7AAAAAAAAAAAAKB+GTp0qMMOqZYmTZrEOeecE7vvvnt2CgCwnDRu3Dg7AQAA4HsZFa89PXv2jA4dOmRnUA1t27bNTih45eXlUVFREdOnT89OgXrro48+yk4oSv7eAgAAAAAAAACgWBnuAQAAAAAAAAAAqm3PPfeMnj17ZmdQj+y8887Rq1eveOqpp7JTACggM2fOzE5ggbKysuwEAACA77XWWmtlJxSNgw8+ODsB6pQePXrEE088kZ0B9dbEiROzE4rS1KlTsxMAAAAAAAAAACBFaXYAAAAAAAAAAABQf5x++ulRUlKSnUE9UlZWFsOHD8/OAKDAVFVVZSewQNOmTbMTAAAAvtdqq62WnQAUqY4dO2YnQL320UcfZScUpenTp2cnAAAAAAAAAABACsM9AAAAAAAAAABAtRx88MHRo0eP7AzqoZ49e0afPn2yMwAoILNnz85OYIEGDRpkJwAAAHyvVq1aZScARapdu3bZCVCvvf3229kJRWnGjBnZCQAAAAAAAAAAkMJwDwAAAAAAAAAAUC2nnXZadgL12MCBA7MTACggc+fOzU5ggUaNGkWzZs2yMwAAAP7Hqquump0AFKmWLVtmJ0C99o9//CM7oShNnz49OwEAAAAAAAAAAFIY7gEAAAAAAAAAABarf//+scEGG2RnUI916dIlTjzxxOwMAArEvHnzshNYSIcOHbITAAAA/ofhDCBLRUVFdgLUWzNnzozKysrsjKJkuAcAAAAAAAAAgGJluAcAAAAAAAAAAFik0tLSOOGEE7IzKAAnnnhilJWVZWcAUAC+/PLL7AQW0qZNm+wEAACAb6moqIjy8vLsDKBIGe6BpTdz5szshKLl9+4AAAAAAAAAABQrwz0AAAAAAAAAAMAinXrqqdGpU6fsDApA+/bt46yzzsrOAKAAzJs3LzuBhay66qrZCQAAAN/So0eP7ASgiK288srZCVBvGY8BAAAAAAAAAABqm+EeAAAAAAAAAADgB5WVlUX//v2zMyggRx11VLRs2TI7A4B6bvbs2dkJLGSVVVbJTgAAAPiWjh07ZicARay8vDw7AeqtuXPnZicULaNJAAAAAAAAAAAUK8M9AAAAAAAAAADADxo+fHi0a9cuO4MC0qJFixgxYkR2BgD1nAME65aKiorsBAAAgG9p3759dgJQxAz3wNIz2p7nq6++yk4AAAAAAAAAAIAUhnsAAAAAAAAAAIDvVV5eHkcccUR2BgXowAMPjHXXXTc7A4B67IsvvshOYCErrbRSdgIAAMC3rLbaatkJQBFbccUVsxOg3jIeAwAAAAAAAAAA1DbDPQAAAAAAAAAAwPc688wzo3Xr1tkZFKCmTZvGeeedl50BQD02Y8aM7AQWUlFRkZ0AAADwLS1btsxOAIpYs2bNonHjxtkZUC9VVlZmJxStyZMnZycAAAAAAAAAAEAKwz0AAAAAAAAAAMD/aNmyZRx22GHZGRSwXXfdNXr27JmdAUA9NX369OwEFrLKKqtkJwAAAHxLeXl5dgJQ5Dp37pydALBEvvnmm+wEAAAAAAAAAABIYbgHAAAAAAAAAAD4HyNGjIiKiorsDApYw4YN46yzzsrOAKCemjZtWnYCC2nRokV2AgAAwLestNJK2QlAkVtttdWyE6Bemj17dnYCAAAAAAAAAABQZAz3AAAAAAAAAAAA39KhQ4fo06dPdgZF4Gc/+1nstdde2RkA1ENTp07NTmAhBh8BAIC6xnAPkK158+bZCVAvVVVVZScAAAAAAAAAAABFxnAPAAAAAAAAAADwLcOHD3eYGLWipKQkBg8enJ0BQD30/vvvZyewEAdiAwAAdU15eXl2AlDk/L4EAAAAAAAAAAAA6gfDPQAAAAAAAAAAwH916dIl9t577+wMisjGG28cxxxzTHYGAPXM1KlT4+uvv87OYIGKiorsBAAAgG9ZccUVsxOAIme4BwAAAAAAAAAAAOoHwz0AAAAAAAAAAMB/nXXWWbHCCitkZ1Bkfv3rX0dpqZezAbBkZs6cmZ3AAg7EBgAA6pIOHTpEWVlZdgZQ5Jo1a5adAAAAAAAAAAAAAFSDkw4AAAAA+P/Y+/M4r+t6//9/zIwIIY64gOZCJJw0RUvDT0ckjiZW6DE1TUtTE7T0gFKoiArDNoC4JW65YLmhx31JIxWVECnREI6KuKMhgQgiAoIww++f8+trHkZnYGYe75n39Xq58M8s79dtvIwwy+v9vAMAAABARETsu+++ccghh2RnUIS++tWvRkVFRXYGAE2M4Z7CUVZWFl26dMnOAAAAiIiITp06ZScAROvWrbMTAAAAAAAAAAAAgFow3AMAAAAAAAAAAEREREVFRbRo0SI7gyJ16qmnRnl5eXYGAE3IsmXLshP4lK997WvZCQAAABER8eUvfzk7ASA222yz7AQAAAAAAAAAAACgFgz3AAAAAAAAAAAA0bNnzzjooIOyMyhi7du3j9GjR2dnANCEfPTRR9kJfMrOO++cnQAAABAREe3atctOAIg2bdpkJwAAAAAAAAAAAAC1YLgHAAAAAAAAAACIIUOGRGmp24nIdcIJJzj0H4Ba+/DDD7MT+JQdd9wxOwEAACAiItq2bZudABBf+tKXshMAAAAAAAAAAACAWnDSBgAAAAAAAAAAFLkjjjgiunfvnp0B0aZNmxg1alR2BgBNxAcffJCdwKd8+ctfzk4AAACIiIjWrVtnJwAY7gEAAAAAAAAAAIAmwnAPAAAAAAAAAAAUuUGDBkVJSUl2BkRExI9+9KPYZ599sjMAaAIWLVqUncCnbLfddtkJAAAAEWG4BygMhnsAAAAAAAAAAACgaTDcAwAAAAAAAAAARez44483kkJBadGiRVRWVmZnANAELF68ODuBT2nfvn12AgAAQEREtGnTJjsBAAAAAAAAAAAAAGgiDPcAAAAAAAAAAEARGzhwYHYC/B8HHnhgHHroodkZABS4+fPnZyfwKVtvvXV2AgAAQEREtG7dOjsBAAAAAAAAAAAAAGgiDPcAAAAAAAAAAECR6tu3b+y+++7ZGfB/lJaWxpAhQ7IzAChwhnsKy9Zbbx3l5eXZGQAAAPGlL30pOwEgNt100+wEAAAAAAAAAAAAoBYM9wAAAAAAAAAAQBEqLS2N/v37Z2dAjbp27Rp9+vTJzgCggL322mvZCXxKSUlJ7LffftkZAAAAhnuAgmC4BwAAAAAAAAAAAJoGwz0AAAAAAAAAAFCEzj777OjcuXN2BnyugQMHRmmp29wAWL/XX3891qxZk53Bp+y+++7ZCQAAAIZ7AAAAAAAAAAAAAIBac6IBAAAAAAAAAAAUmbKysujbt292Bnyhf/u3f4tBgwZlZwBQwBYvXpydwKd06tQpOwEAACBat26dnQAAAAAAAAAAAAAANBGGewAAAAAAAAAAoMgMHz48dtxxx+wMqJV+/fpFq1atsjMAKFBLlizJTuBTvvKVr2QnAAAARMuWLbMTAKJFixbZCQAAAAAAAAAAAEAtGO4BAAAAAAAAAIAiUl5eHn369MnOgFrbbrvt4oILLsjOAKBALV68ODuBTzEOCQAAFIJNN900OwHAiBgAAAAAAAAAAAA0EYZ7AAAAAAAAAACgiAwbNiy23Xbb7AyokxNPPNEQAADrtXDhwuwEPmW77bbLTgAAAAAAAAAAAAAAAAAAqDXDPQAAAAAAAAAAUCTatWsXP//5z7MzoM622GKLGDNmTHYGAAXovffey07gU7bZZhtjewAAQLpNNtkkOwEAAAAAAAAAAAAAaCIM9wAAAAAAAAAAQJGorKyMtm3bZmfABjnqqKNir732ys4AoMD8/e9/z07gMw444IDsBAAAoMi1bNkyOwEAAAAAAAAAAAAAaCIM9wAAAAAAAAAAQBHYeeed46c//Wl2Bmywli1bxsiRI7MzACgwb775ZnYCn7HnnntmJwAAAAAAAAAAAAAAAAAA1IrhHgAAAAAAAAAAKALDhw+PNm3aZGfARvnBD34Q3//+97MzACggL7zwQnYCn/G1r30tOwEAAAAAAAAAAAAAAAAAoFYM9wAAAAAAAAAAQDPXpUuXOOqoo7IzYKOVlpZGRUVFdgYABWTOnDmxatWq7Aw+pVOnTtkJAABAkSsrK8tOAAAAAAAAAAAAAACaCMM9AAAAAAAAAADQzI0YMSJatmyZnQH1Yt99943jjz8+OwOAAvLee+9lJ/ApHTp0yE4AAACKnJ+HAwAAAAAAAAAAAAC1ZbgHAAAAAAAAAACasX333TcOOeSQ7AyoV+eee252AgAFZNGiRdkJfEqbNm2ia9eu2RkAAAAAAAAAAAAAAAAAAF/IcA8AAAAAAAAAADRjFRUV0aJFi+wMqFe77rprnHXWWdkZABSI+fPnZyfwGT169MhOAAAAAAAAAAAAAAAAAAD4QoZ7AAAAAAAAAACgmerZs2ccdNBB2RnQIM4444xo1apVdgYABeDtt9/OTuAz9t577+wEAAAAAAAAAAAAAAAAAIAvZLgHAAAAAAAAAACaqSFDhkRpqVuEaJ523HHHGDFiRHYGAAXgzTffzE7gM77+9a9nJwAAAAAAAAAAAAAAAAAAfCGncgAAAAAAAAAAQDN0xBFHRPfu3bMzoEH16dMn2rVrl50BQLKXXnopO4HP6Ny5c3YCAAAAAAAAAAAAAAAAAMAX2iQ7AAAAAAAAAIDmp6qqKj744IPsDJqRVatWZSdAkzNo0KAoKSnJzoAGteWWW8aFF14YJ510UnYKAImmTZsW1dXVUVpamp3C/9p8883jgAMOiCeffDI7BQAAAAAAAAAAAAAAAACgRoZ7AAAAAAAAAKh38+bNi69+9avZGQBF6/jjj4999tknOwMaxY9//OO45JJL4sUXX8xOASDJihUr4v3334/27dtnp/ApPXr0MNwDAACkWL16dbRu3To7AwAAAAAAAAAAAABoAkqzAwAAAAAAAAAAgPo1cODA7ARoNK1bt47KysrsDACSvfvuu9kJfMaee+6ZnQAAABSpqqqq7AQAAAAAAAAAAAAAoIkw3AMAAAAAAAAAAM1I3759Y/fdd8/OgEZ1yCGHxAEHHJCdAUCit99+OzuBz/jGN76RnQAAAAAAAAAAAAAAAAAA8LkM9wAAAAAAAAAAQDNRWloa/fv3z86ARldWVhZDhw7NzgAg0euvv56dwGd89atfjQ4dOmRnAAAAAAAAAAAAAAAAAADUaJPsAAAAAAAAAAAAoH6cffbZ0blz5+wMSNGjR4845phj4o477shOASDBK6+8kp3AZ5SUlMQRRxwR48aNy06hyBx00EExYcKE7Iyic99998Uvf/nL7AwAgIiIWL16dXYCAAAAAAAAAAAAANBEGO4BAAAAAAAAAIBmoKysLPr27ZudAanOP/98wz0ARerpp5/OTmA9unXrZriHRrfHHnvENttsk51RdL70pS9lJwAA/NPatWuzEwAAAAAAAAAAAACAJqI0OwAAAAAAAAAAANh4w4cPjx133DE7A1J16dIlzjjjjOwMABLMmTMnPvroo+wMPmPPPffMTqAIdezYMTuhKPk7GAAAAAAAAAAAAAAAAGiKDPcAAAAAAAAAAEATV15eHn369MnOgIIwYMCAKCsry84AIMHf//737AQ+o3PnzrHddttlZ1Bkdtppp+yEorRq1arsBACAf/rkk0+yEwAAAAAAAAAAAACAJsJwDwAAAAAAAAAANHHDhg2LbbfdNjsDCkKHDh1ixIgR2RkAJHjjjTeyE/iMsrKy+MlPfpKdQZHZYYcdshOK0urVq7MTAAD+yaggAAAAAAAAAAAAAFBbhnsAAAAAAAAAAKAJa9euXfz85z/PzoCCcsopp8TWW2+dnQFAI3vllVeyE1iP/fffPzuBItOhQ4fshKK0dOnS7AQAgH/6+OOPsxMAAAAAAAAAAAAAgCbCcA8AAAAAAAAAADRhlZWV0bZt2+wMKCjbbLNNjB49OjsDgEY2a9as7ATWo2vXrtkJFJHtt98+2rVrl51RlD744IPsBACAf1q5cmV2AgAAAAAAAAAAAADQRBjuAQAAAAAAAACAJmrnnXeOn/70p9kZUJCOO+646Ny5c3YGAI3oySefjHXr1mVn8Bnbb7999OjRIzuDIrH//vtHSUlJdkZRev/997MTAAD+6eOPP85OAAAAAAAAAAAAAACaCMM9AAAAAAAAAADQRA0fPjzatGmTnQEFqXXr1nHBBRdkZwDQiObPnx/vvfdedgbrcfjhh2cnUCT22GOP7ISitWjRouwEAIB/WrVqVXYCAAAAAAAAAAAAANBEGO4BAAAAAAAAAIAmqEuXLnHUUUdlZ0BBO/TQQ6N79+7ZGQA0ojfffDM7gfXo1q1bdgJFokuXLtkJReudd97JTgAA+KeVK1dmJwAAAAAAAAAAAAAATYThHgAAAAAAAAAAaIJGjBgRLVu2zM6AgtaiRYsYPnx4dgYAjejll1/OTmA9vvGNb0S7du2yMygCu+yyS3ZCUVq7dq3hHgCgoCxfvjw7AQAAAAAAAAAAAABoIgz3AAAAAAAAAABAE7PvvvvGIYcckp0BTcL+++8fRxxxRHYGAI1k5syZ2QmsR8uWLeOkk07KzqCZKy8vj44dO2ZnFKWPPvooOwEA4F+sXLkyOwEAAAAAAAAAAAAAaCIM9wAAAAAAAAAAQBNTUVERLVq0yM6AJqGkpCQGDx6cnQFAI3niiSeyE6hBr169shNo5v7zP/8zNtlkk+yMovTBBx9kJwAA/IuPP/44OwEAAAAAAAAAAAAAaCIM9wAAAAAAAAAAQBPSs2fPOOigg7IzoEnZa6+94tRTT83OAKARzJ49OxYvXpydwXp07do1Nttss+wMmrH99tsvO6FoLVu2LDsBAOBfLFmyJDsBAAAAAAAAAAAAAGgiNskOAAAAAAAAAAAAam/IkCFRWlqanQFNzllnnRXXXXddVFdXZ6cA0MBef/312HrrrbMz+IzNNtssevfuHVdccUV2Cs3Ut771reyEovXBBx9kJwAA/ItFixZlJxSVN954Ix599NHsDCg48+fPz04AAAAAAAAAAAAAasFwDwAAAAAAAAAANBFHHHFEdO/ePTsDmqSdd945hgwZEsOHD89OAaCBvfjii/Htb387O4P16NWrl+EeGkRZWVnsvvvu2RlFy8H4AECh+cc//pGdUFTefvvt6Nu3b3YGAAAAAAAAAAAAAGyQ0uwAAAAAAAAAAACgdgYNGhQlJSXZGdBknXbaaVFeXp6dAUADe/bZZ7MTqEH37t1js802y86gGTriiCN8biVasGBBdgIAwL94/fXXsxMAAAAAAAAAAAAAgCbCcA8AAAAAAAAAADQBxx9/fOyzzz7ZGdCktW/fPkaNGpWdAUADe+ihh2LdunXZGaxHmzZtom/fvtkZNEPf/e53sxOK2vz587MTAAD+xdy5c6Oqqio7AwAAAAAAAAAAAABoAgz3AAAAAAAAAABAEzBw4MDsBGgWTjzxxOjYsWN2BgANaP78+fHOO+9kZ1CDww47LDuBZmi//fbLTihq8+bNy04AAPg/Pvroo+wEAAAAAAAAAAAAAKAJMNwDAAAAAAAAAAAFrl+/frH77rtnZ0Cz0KZNmxg9enR2BgANbM6cOdkJ1GCfffaJzp07Z2fQjHTo0CG+/vWvZ2cUtZdeeik7AQDg/1i2bFl2AgAAAAAAAAAAAADQBBjuAQAAAAAAAACAAlZaWhr9+/fPzqAGS5cujffff/9f/qxduzY7iy/wox/9KPbZZ5/sDAAa0MyZM7MTqMEmm2wSp556anYGzchPf/rT2GSTTbIzitbq1atj1qxZ2RkAAP/Hhx9+mJ0AAAAAAAAAAAAAADQBhnsAAAAAAAAAAKCAnX322dGpU6fsDNZj8eLFsfPOO0f79u3/5c/NN9+cncYX2HTTTWPkyJHZGQA0oMcffzw7gc9xyCGHZCfQjPTs2TM7oagtWrQoOwEAYL0M9zSeNm3aZCcAAAAAAAAAAAAAwAYz3AMAAAAAAAAAAAWqrKws+vXrl51BDW688cZYunTp/3l5RUXFel9OYenZs6fRAIBmbNKkSQ5pLmC77LJLHHbYYdkZNAObbbZZ/Pu//3t2RlFbsGBBdgIAwHotW7YsO6FolJZ6qjIAAAAAAAAAAAAATZe7YQEAAAAAAAAAoECNGDEidthhh+wM1mPhwoUxZMiQ9b5u/vz5cfvttzdyEXVVWloaQ4cOzc4AoAG99NJL2Ql8jpNPPjk7gWbg5JNPjs022yw7o6j94x//yE4AAFiv9957LzuhaLRu3To7AQAAAAAAAAAAAAA2mOEeAAAAAAAAAAAoQOXl5dGnT5/sDGpw/fXXx6pVq2p8fUVFRSxevLgRi9gQXbt2jd69e2dnANBAZsyYkZ3A5zjwwANjxx13zM6giTvkkEOyE4re3LlzsxMAANZr/vz52QlFY9NNN81OAAAAAAAAAAAAAIANZrgHAAAAAAAAAAAK0PDhw6N9+/bZGazHvHnzYvjw4Z/7NosXL45bbrmlkYrYGAMHDozSUrfSATRHU6ZMyU7gc7Rq1Sp+9atfZWfQhG299dbRrVu37Iyi9+qrr2YnAACs19tvv52dUDTatGmTnQAAAAAAAAAAAAAAG8xpAwAAAAAAAAAAUGDatWsXJ554YnYGNbjqqquiqqrqC99uyJAhsXDhwkYoYmN87Wtfi0GDBmVnANAAHnjggVixYkV2Bp/jyCOPzE6gCTv99NOjdevW2RlFb9asWdkJAADr9eabb2YnFA1flwMAAAAAAAAAAADQlBnuAQAAAAAAAACAAjNq1Kho27Ztdgbr8cYbb8RFF11Uq7ddsWJF3HjjjQ0bRL3o27dvtGrVKjsDgHq2Zs2aeOmll7Iz+Bxf+cpX4he/+EV2Bk3UYYcdlp1Q9D755JOYNm1adgYAwHo9++yz2QlFY7PNNstOAAAAAAAAAAAAAIANZrgHAAAAAAAAAAAKSOfOneMnP/lJdgY1uPLKK6O6urrWb19RURHvvvtuAxZRH7785S/HmDFjsjMAaADPPPNMdgJf4Je//GV2Ak1Q9+7dY88998zOKHrz58+v0/dHAACNadmyZfHhhx9mZxSFsrKy6NixY3YGAAAAAAAAAAAAAGwQwz0AAAAAAAAAAFBAhg0bFm3atMnOYD1mz54d48aNq9P7rFmzJsaPH99ARdSnE088MXbcccfsDADq2aRJk7IT+AJ77bVXHH744dkZNDGnnXZalJSUZGcUvbfeeis7AQDgc73//vvZCUXj61//enYCAAAAAAAAAAAAAGwQwz0AAAAAAAAAAFAgunTpEkceeWR2BjX4zW9+s0HvN3LkyJg7d279xlDv2rZtG6NGjcrOAKCe/eEPf4gPP/wwO4Mv0L9//+wEmpDy8vI45JBDsjOIiNdffz07AQDgcy1atCg7oWjstNNO2QkAAAAAAAAAAAAAsEEM9wAAAAAAAAAAQIEYOXJktGzZMjuD9Zg5c2bccMMNG/S+1dXVce2119ZzEQ3h6KOPjr322is7A4B6NmvWrOwEvkD37t2jW7du2Rk0EQMHDozy8vLsDCJi9uzZ2QkAAJ9r4cKF2QlFY/vtt89OAAAAAAAAAAAAAIANYrgHAAAAAAAAAAAKQLdu3eLggw/OzqAGF1xwwUa9/9ixY+O1116rpxoaSsuWLWPEiBHZGQDUs2nTpmUn8AXKyspi0KBB2Rk0Ecccc0x2Av/rr3/9a3YCAMDn+sc//pGdUDQM9wAAAAAAAAAAAADQVBnuAQAAAAAAAACAAlBRUREtWrTIzmA9nnnmmbjzzjs3+nGuuuqqeqihof3gBz+Igw46KDsDgHp09913ZydQC7169Yru3btnZ1DgTj311OjUqVN2BhHx4YcfxjPPPJOdAQDwud54443shKKxww47ZCcAAAAAAAAAAAAAwAYx3AMAAAAAAAAAAMl69uwZPXv2zM5gPdatWxejRo2ql8e6/PLLY/bs2fXyWDScsrKyGDZsWHYGAPVoxowZMXfu3OwMvkBZWVkMGTIkO4MC91//9V/ZCfyvt956KzsBAOALzZo1KzuhaGy//fbZCQAAAAAAAAAAAACwQQz3AAAAAAAAAABAsoqKiigtdStPIfrzn/8cDz30UL093rhx4+rtsWg4++67bxx33HHZGQDUo+nTp2cnUAsHHnigQUtqdPzxx0eXLl2yM/hfr7zySnYCAMAXmjp1alRVVWVnFIVtt902OwEAAAAAAAAAAAAANojTPgAAAAAAAAAAINGPfvSj2G+//bIzWI+qqqoYPXp0vT7m9ddfHzNnzqzXx6RhnHfeedkJANSjJ554IjuBWigtLY3BgwdnZ1Cg+vfvn53Ap/zP//xPdgIAwBdatWpVLFy4MDujKLRv3z7Ky8uzMwAAAAAAAAAAAACgzgz3AAAAAAAAAABAokGDBkVJSUl2Buvx2GOPxaRJk+r9cS+99NJ6f0zq39e//vU466yzsjMAqCcTJkyIlStXZmdQC9/5znfi6KOPzs6gwPTu3Tv23nvv7Aw+ZfLkydkJAAC1Mm/evOyEolBaWhoHHnhgdgYAAAAAAAAAAAAA1JnhHgAAAAAAAAAASHL88cdH165dszNYjzVr1sTIkSMb5LFvvfXWmD59eoM8NvXrjDPOiBYtWmRnAFAPVqxYETNmzMjOoBZKSkpi2LBhUVrqVnf+P2effXZ2Ap+yZMmS+Mtf/pKdAQBQK3//+9+zE4rGnnvumZ0AAAAAAAAAAAAAAHXm2YwAAAAAAAAAAJDknHPOyU6gBhMnTmzQg6gvvvjiWLduXYM9PvVjxx13jMrKyuwMAOrJk08+mZ1ALe26664xZMiQ7AwKxJlnnhm77LJLdgafMmfOnOwEAIBae+ONN7ITisbXvva17AQAAAAAAAAAAAAAqDPDPQAAAAAAAAAAkKBfv36x2267ZWewHqtXr47Bgwc36DXuvvvuePrppxv0GtSPk08+Odq1a5edAUA9mDBhQlRXV2dnUEv9+vWL7bbbLjuDZOXl5TFgwIDsDD7jpZdeyk4AAKi11157LTuhaBjcBAAAAAAAAAAAAKApMtwDAAAAAAAAAACNrLS0NPr375+dQQ3uu+++ePHFFxv8OmPHjjUe0ARsueWWccEFF2RnAFAPXn311Xj55ZezM6ilrbfeOi6++OLsDJJdfPHF8eUvfzk7g8+YOnVqdgIAQK0988wz2QlFo1OnTtkJAAAAAAAAAAAAAFBnhnsAAAAAAAAAAKCRnX322Q6wK1ArV66MioqKRrnWww8/HJMnT26Ua7FxjjnmmOjSpUt2BgD14KmnnspOoA6OPvroOOSQQ7IzSNK1a9f42c9+lp3BZ3zyySdx7733ZmcAANTaiy++GEuXLs3OKApbbLFFdO/ePTsDAAAAAAAAAAAAAOrEcA8AAAAAAAAAADSisrKy6NevX3YGNbjjjjvi9ddfb7TrjRkzJqqqqhrtemyY1q1bx4gRI7IzAKgHt912W3YCdbDJJpvEJZdcEmVlZdkpJPjNb34TrVq1ys7gM1555ZVYsWJFdgYAQJ289dZb2QlFY//9989OAAAAAAAAAAAAAIA6MdwDAAAAAAAAAACNaMSIEbHDDjtkZ7Aey5Yti6FDhzbqNR9//PF47LHHGvWabJhDDz3UoZMAzcDUqVMbdaSPjfe1r30tLrvssuwMGtk555wT++23X3YG6/H8889nJwAA1Nmrr76anVA0vv3tb2cnAAAAAAAAAAAAAECdGO4BAAAAAAAAAIBGUl5eHn369MnOoAYTJkyIefPmNfp1KysrY82aNY1+XeqmrKwshg0blp0BQD2YMmVKdgJ1dPLJJ8d3vvOd7AwaSefOnWPgwIHZGdRg2rRp2QkAAHX20ksvZScUjS5dumQnAAAApGjbtm12AgAAAAAAAAAbyHAPAAAAAAAAAAA0kuHDh0f79u2zM1iPxYsXR0VFRcq1p02bFhMnTky5NnXzne98J44++ujsDAA20u23356dQB21bNkyrrrqqigrK8tOoRH89re/jS233DI7g/X45JNP4r//+7+zMwAA6uyvf/1rdkLR6NChQ+y6667ZGQAAAI1um222yU4AAAAAAAAAYAMZ7gEAAAAAAAAAgEbQrl27OPHEE7MzqMFNN90UixcvTrv+iBEjYvXq1WnXp3ZKSkri/PPPz84AYCM9/vjj8dZbb2VnUEddunSJ6667LjuDBjZkyJA48MADszOowUsvvRTLli3LzgAAqLMnnngiVq1alZ1RFEpKSoyfAwAARalVq1bZCQAAAAAAAABsIMM9AAAAAAAAAADQCEaNGhVt27bNzmA9Fi5cGIMHD05tmDFjRjz44IOpDdTOHnvsEaeffnp2BgAb6cknn8xOYAOccMIJcfzxx2dn0EC6desW55xzTnYGn2P69OnZCQAAG6S6ujrmzp2bnVE0evTokZ0AAADQ6HbYYYfsBAAAAAAAAAA2kOEeAAAAAAAAAABoYJ07d46f/OQn2RnU4Prrr49Vq1ZlZ8Tw4cNj5cqV2RnUwoABA6KsrCw7A4CNcOONN2YnsAHKysrioosuio4dO2anUM9atWoV48ePj9atW2en8DkeeeSR7AQAgA322muvZScUjW9961tRWurpywAAQHHZfvvtsxMAAAAAAAAA2EDufAUAAAAAAAAAgAY2bNiwaNOmTXYG6zFv3rwYPnx4dkZERMyePTvuu+++7Axq4Stf+UrBfN4AsGGmTp0ar7zySnYGG6B9+/Zx6623OgS6mbn99ttj1113zc7gcyxZsiTuv//+7AwAgA02e/bs7ISiscUWW8Rxxx2XnQEAANCodthhh+wEAAAAAAAAADaQZysCAAAAAAAAAEAD6tKlSxx55JHZGdTgqquuiqqqquyMfxo6dGgsX748O4Na+MUvfhFt27bNzgBgIzzyyCPZCWygbt26xfXXX5+dQT0ZOnRoHHbYYdkZfIFnn302OwEAYKNMmTIlO6Go+BofAAAoNttss012AgAAAAAAAAAbyHAPAAAAAAAAAAA0oJEjR0bLli2zM1iPN954Iy666KLsjH/x5ptvxp133pmdQS1ss802ccEFF2RnALARfv/73xfUgB918/Of/zzOPPPM7Aw20tFHHx3nnntudga18MQTT2QnAABslEceecRoeiPq3r17dgIAAECj2nbbbbMTAAAAAAAAANhAhnsAAAAAAAAAAKCBdOvWLQ4++ODsDGpw5ZVXRnV1dXbG/1FRURFLly7NzqAWjjvuuOjcuXN2BgAbaNasWTFz5szsDDZQSUlJjBgxInr16pWdwgbq1q1bXHPNNbHppptmp/AF1q5dGxMmTMjOAADYKNXV1TFnzpzsjKLRvn37OO6447IzAAAAGk3Hjh2zEwAAAAAAAADYQIZ7AAAAAAAAAACggVRUVESLFi2yM1iP2bNnx7hx47Iz1mv+/Plx++23Z2dQC5tttlmMGTMmOwOAjXD//fdnJ7ARvvSlL8UNN9wQXbp0yU6hjjp27Bi33XZbtG3bNjuFWvif//mfmD9/fnYGAMBGmzVrVnZCUfnpT3+anQAAANBodtppp+wEAAAAAAAAADaQ4R4AAAAAAAAAAGgAPXv2jJ49e2ZnUIPLLrssO+FzVVRUxOLFi7MzqIUf/vCH0a1bt+wMADbQVVddFcuXL8/OYCNst912cffdd8d2222XnUIttWvXLh588MHo0KFDdgq19Pjjj2cnAADUi2nTpmUnFJX9998/tt566+wMAACARrHddttFeXl5dgYAAAAAAAAAG8BwDwAAAAAAAAAANICKioooLXV7TiGaOXNmjB8/Pjvjcy1evDhuueWW7AxqoUWLFjFixIjsDAA20NKlS2Py5MnZGWykr33ta/Hggw86DK0JKC8vj4cffji6dOmSnUItrVu3Lm677bbsDACAenHffffF2rVrszOKRuvWreP000/PzgAAAGgUpaWl8b3vfS87AwAAAAAAAIAN4GQQAAAAAAAAAACoZz/60Y9iv/32y86gBmPHjs1OqJUhQ4bEwoULszOohQMOOCAOP/zw7AwANtCtt96anUA96Nq1a/zhD3+IFi1aZKdQgxYtWsRDDz0UXbt2zU6hDl5++eWYNWtWdgYAQL1YunRpvPHGG9kZReWYY47JTgAAAGg03/nOd7ITAAAAAAAAANgAhnsAAAAAAAAAAKCeDRo0KEpKSrIzWI9nnnkm7rjjjuyMWlmxYkXceOON2RnUQklJSQwePDg7A4ANdOedd8bbb7+dnUE9+M53vhOPPfaY8Z4CVF5eHk8++WR07949O4U6euKJJ7ITAADq1QsvvJCdUFR22WUX4z0AAEDR6Nq1a3YCAAAAAAAAABvAcA8AAAAAAAAAANSj448/3iEMBWrdunUxatSo7Iw6qaioiHfffTc7g1rYe++945e//GV2BgAb6IEHHshOoJ706NHDeE+Badu2bUyaNCm6deuWnUIdrVu3Lm6++ebsDACAevXMM89kJxSdU089NTsBAACgUXTp0iVKSx3nBAAAAAAAANDUbJIdAAAAAAAAAAAAzck555yTnUANpkyZEg899FB2Rp2sWbMmxo8fH0OHDs1OoRbOOuusuP7666O6ujo7BYA6uuyyy+LUU0+NTTfdNDuFetCjR4+YPHly9OrVK5YtW5adU9R23nnneOCBB2L33XfPTmEDvPTSS/Hcc89lZwAA1Kt77rknxo4d6yDlRvSd73wnunfvHlOnTs1O4TO23nrrOPnkk7Mzmp2VK1fGFVdckZ0BAECCzTffPA4//PC49957s1MAAAAAAAAAqAPDPQAAAAAAAAAAUE/69esXu+22W3YG61FdXR2jRo3KztggI0eOjBNPPDE6duyYncIX6NSpUwwePDhGjBiR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qsrOaHSVlZWxZs2a7AxqoW3btlFZWZmdAUAdDR8+PN57773sDApIaWlpdO3aNSorK+Ott96K6dOnx4UXXhh77bVXdlqNysrK4rjjjosbb7wxXn755fjrX/8a/fr1i1133TVKSkqy80h26623ZicAAKS67bbbshOIiK222iruueee6Nq1a3ZKs3DsscfGhRde6Hu+RvLcc89lJwAA/JPhnsK3+eabx+WXXx4PPPBAdOjQITsHAAAAAAAAoOgZ7gEAAAAAAAAAgFqqqKiI0lK33BSiN998My666KLsjBTTpk2LiRMnZmdQS0cffXR84xvfyM4AoA5WrVoVEyZMyM6gQLVo0SK6du0aZ511Vjz33HMxd+7ceOihh2LYsGHRrVu3tK527dpF796947rrrou//OUv8cEHH8Qtt9wSJ5xwQuyyyy4ObuaflixZEqNHj87OAABI9cADD8Tbb7+dnUFEbLvttnHPPff4GepGOvzww+O3v/1tbLrpptkpReOJJ57ITgAA+Kfly5dnJ1BLhx56aDz//PMxZsyYaNWqVXYOAAAAAAAAQNHaJDsAAAAAAAAAAACagh/96Eex3377ZWdQgyuuuCKqq6uzM9KMGDEivv/970fLli2zU/gCrVq1isrKyjj00EOzUwCog/PPPz+OPfbY2HbbbbNTKGAlJSXRoUOH6NChQxx88MFRUVERS5YsiXfeeSfmzp0br732WsyZMydmzJgRL7zwQr18/dqlS5fYbbfdolOnTrHrrrvGV7/61fjKV74S22+/fZSVldXDR0Vzd8cdd8SqVauyMwAA0j366KNxyimnZGcQETvttFP86U9/ih//+McxderU7Jwm57jjjourr746Nt988+yUorFy5UqjzwBAQVm9enV2AnWw5ZZbxjnnnBM/+9nP4vbbb4+xY8fG4sWLs7MAAAAAAAAAiorhHgAAAAAAAAAAqIVBgwZFSUlJdgbrMXv27Bg3blx2RqoZM2bEgw8+GD/+8Y+zU6iFH/zgB9GzZ8+YNGlSdgoAtbRq1aq48cYb45xzzslOoYnZaqutYquttopvfvOb//LyqqqqWLZsWSxZsiSWLl0aH374YVRVVcXHH38ca9eujY8//jgiIlq0aBGtWrWKiIjy8vLYfPPNY/PNN482bdrENttsE5tuumljf0g0I8uXL4+RI0dmZwAAFITx48fHySef7PcABWLbbbeN+++/P04++eS4//77s3OajDPOOCPGjh0bLVu2zE4pKjNmzIg1a9ZkZwAA/JOx9qZphx12iLPOOitOPfXUePLJJ+Puu++OCRMmRHV1dXYaAAAAAAAAQLNnuAcAAAAAAAAAAL7A8ccfH127ds3OoAaXXXZZdkJBGD58eBxyyCHRunXr7BS+QFlZWQwfPtxwD0ATU1FRET/72c9ihx12yE6hGSgrK4stt9wyttxyy+wUitidd94ZCxYsyM4AACgIzz77bMycOTP22muv7BT+11ZbbRW33XZbDB48OC699NLsnII3bty46Nevn/GpBI8++mh2AgDAv1i2bFl2AhuhTZs2ceihh8ahhx4al112WcyYMSOeeeaZePrpp2PSpEkpo5G77rpr7LnnntGpU6fo0KFDvPTSS3HllVc2egcAAAAAAABAQzHcAwAAAAAAAAAAX+Ccc87JTqAGM2fOjPHjx2dnFITZs2fHfffdF8cdd1x2CrWw7777xnHHHRcTJkzITgGgltasWRPjx4+PoUOHZqcAbLSVK1fG6NGjszMAAArKPffcY7inwLRq1Souuuii2H333eOUU06J6urq7KSCs/3228eECRPiP/7jP7JTitKaNWvixhtvzM4AAPgXS5cuzU6gnmy55ZZx4IEHxoEHHhgREZ988km89dZbMXfu3FiwYEEsWLAg3n333Zg3b14sWbIkVq9eHYsXL44PP/wwqqurY8stt/znY2222WaxxRZbRETEl770pWjbtm1sscUWseWWW8bmm28ebdq0ifLy8thmm21iq622iq222uqfr2/VqtW/dE2YMMFwDwAAAAAAANCsGO4BAAAAAAAAAIDP0a9fv9htt92yM6jBRRddlJ1QUIYOHRqHHXZYtGnTJjuFWjj33HMN9wA0MSNHjowTTjghvvrVr2anAGyU++67L958883sDACAgnLllVfGwIEDo7y8PDuFTykpKYmTTjop9t577/j5z38es2bNyk4qGMcee2xcdNFF8eUvfzk7pWjNnDkz5s2bl50BAPAvlixZkp1AA9l0001jl112iV122SU7BQAAAAAAAKBZKc0OAAAAAAAAAACAQlVaWhr9+/fPzqAG06dPj9tvvz07o6C8+eabceedd2ZnUEu77bZbnHnmmdkZANRBdXV1XHLJJdkZABtl+fLlMWTIkOwMAICCs2zZsnj88cezM6jBN77xjZg8eXKce+652Snptt566/jv//7vuOmmm4z2JHvssceyEwAA/o/33nsvOwEAAAAAAAAAmhTDPQAAAAAAAAAAUIOzzz47OnXqlJ3Beqxbty4qKyuzMwpSRUVFLF26NDuDWurfv3+UlZVlZwBQB1dffXU8//zz2RkAG+zOO++MuXPnZmcAABSk3/72t9kJfI4tttgiRo0aFU8//XR07do1O6fRlZaWxpAhQ+Kll16Ko48+2s+Wk1VVVcWtt96anQEA8H8sWrQoOwEAAAAAAAAAmhTDPQAAAAAAAAAAsB5lZWXRr1+/7AxqMGXKlHjooYeyMwrS/Pnz4/bbb8/OoJZ23HHHGDVqVHYGAHVUWVkZ69aty84AqLNly5bFsGHDsjMAAArWpEmTYtasWdkZfIF99903pkyZEjfccENsvfXW2TmNonfv3vHyyy/H8OHDo3379tk5RMTf/va3mDNnTnYGAMD/8Y9//CM7AQAAAAAAAACaFMM9AAAAAAAAAACwHiNHjowddtghO4P1qK6uNnTyBSoqKmLx4sXZGdTSySefHO3atcvOAKAO7rvvvnjiiSeyMwDq7Kabbop58+ZlZwAAFDTD6E1Dq1at4qSTToo5c+bEpZdeGuXl5dlJ9a60tDROP/30mDlzZowfPz7+7d/+LTuJT7nvvvuyEwAA1mvGjBnZCQAAAAAAAADQpBjuAQAAAAAAAACAzygvL4/evXtnZ1CDxx57LCZNmpSdUdAWL14ct9xyS3YGtbTVVlvFmDFjsjMAqKNzzjknVq1alZ0BUGsLFiyI8847LzsDAKDg/eY3v4n3338/O4Na2nrrreNXv/pVvPHGG3H55ZdHhw4dspM22vbbbx9jxoyJt956K8aNGxd77rlndhKf8dFHH8WVV16ZnQEAsF6LFy+Ojz76KDsDAAAAAAAAAJoMwz0AAAAAAAAAAPAZI0aMiPbt22dnsB5r1qyJUaNGZWc0CUOGDImFCxdmZ1BLP/nJT2K33XbLzgCgDmbMmBETJkzIzgCotauvvjpWrFiRnQEAUPDWrFkT9957b3YGdbT11ltHv3794uWXX4777rsvDj/88OykOikrK4u+ffvG448/Hm+88Uacc845sdNOO2VnUYMnn3zS91cAQEEzRgoAAAAAAAAAtWe4BwAAAAAAAAAAPqVdu3ZxwgknZGdQg4kTJ8bUqVOzM5qEFStWxI033pidQS21bt06KisrszMAqKOzzz7bUB7QJLz22msxevTo7AwAgCbjwgsvjFWrVmVnsAG+9KUvxWGHHRb33ntvvPXWW3HttdfGgQcemJ21Xh07doxzzz03HnnkkVi0aFFcccUVccABB0TLli2z0/gCxpwBgEL33nvvZScAAAAAAAAAQJNhuAcAAAAAAAAAAD5l9OjR0bZt2+wM1mP16tUxdOjQ7IwmpaKiIt59993sDGrp0EMPjR49emRnAFAHS5cujUsvvTQ7A+ALVVZWRnV1dXYGAECT8eabb8ajjz6ancFG+spXvhKnnHJKPPbYYzFv3ry455574swzz4xdd901pWfvvfeOgQMHxu233x4vvvhivPbaazFq1Kg46KCD/G6qCZk7d27cdddd2RkAAJ/LcA8AAAAAAAAA1N4m2QEAAAAAAAAAAFAoOnfuHMccc0x2BjV44IEHYtasWdkZTcqaNWti/PjxBo+aiLKyshg+fHgccMAB2SkA1MFFF10UxxxzTOy9997ZKQDrNXny5LjllluyMwAAmpxLLrkk/vM//zNKS0uzU6gH22+/fRxxxBFxxBFHxIUXXhjz5s2LN998M1599dV46aWX4oUXXojp06fHihUrNuo6LVq0iH322Sf22GOP+Ld/+7f46le/GjvuuGN06tQpttpqq3r6aMh0xx13ZCcAAHyhefPmZScAAAAAAAAAQJNhuAcAAAAAAAAAAP7XsGHDok2bNtkZrMfKlStj8ODB2RlN0siRI+PEE0+Mjh07ZqdQCz169Igf//jHcdddd2WnAFAHZ511VjzyyCPRokWL7BSAf/HJJ5/Eueeem50BANAkPfXUUzFlypTYf//9s1OoZyUlJbHTTjvFTjvtFP/xH//xz5evW7culixZEkuXLo2PPvooli1bFsuXL4+1a9fGunXr4uOPP47WrVtHRMRmm20WJSUl8aUvfSnatm0bW2yxRWy++eax+eabZ31YNIKPPvooLr744uwMAIAv9Morr2QnAAAAAAAAAECTYbgHAAAAAAAAAAAiokuXLnHkkUdmZ1CDu+66K15//fXsjCapuro6rr322hgzZkx2CrVQUlIS559/vuEegCZm8uTJcdttt8WJJ56YnQLwL2699dZ45plnsjMAAJqsSy+9NP7jP/4jSkpKslNoBCUl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N96II488Mqqrq7NTAACohdmzZ8f5558f69aty04BvkBVVVWceeaZficCABSVe++9NzsBAAAAAAAAAAqO4R4AAAAAAAAAAJql7t27R69evbIzqMEDDzwQzz//fHYG6zF//vy4/fbbszOog29/+9tx0kknZWcAsJGOOOKImDVrVnYGUEAWL14cP/3pT2PRokXZKQAA1ME111wTd911V3YG8AWuu+46/68CAEXnsssuiwULFmRnAAAAAAAAAEBBMdwDAAAAAAAAAECzNHjw4GjRokV2BuuxcuXKGDx4cHYGn6OioiIWL16cnUEdDBw4MDsBgI20atWqOPLII2PevHnZKUAB+Pjjj6N3797x3HPPZacAALAB+vTpE6+//np2BlCDZ555Jk4//fTsDACARldVVWW8EAAAAAAAAAA+w3APAAAAAAAAAADNTs+ePaNnz57ZGdTgrrvucmBhgVu8eHHccsst2RnUwS677BLnnHNOdgYAG+nNN9+M4447Lj744IPsFCBRVVVVnHnmmfGHP/whOwUAgA20YsWK6N27d6xYsSI7BfiMRYsWxYknnhjV1dXZKQAAKS666KJYuXJldgYAAAAAAAAAFAzDPQAAAAAAAAAANDsVFRVRWurWmEK0fPnyGDJkSHYGtTBkyJBYuHBhdgZ1cPrpp0erVq2yMwDYSE899VScfPLJ8fHHH2enAEkuuOCCuOaaa7IzAADYSFOnTo0hQ4bEunXrslOA/1VVVRUDBgyIV199NTsFACDNvHnz4pFHHsnOAAAAAAAAAICC4XQSAAAAAAAAAACalaOOOir222+/7AxqcMstt8S8efOyM6iFFStWxI033pidQR1sv/32UVlZmZ0BQD247777on///rFmzZrsFKCR/fa3vzV2CgDQjFx22WVx++23Z2cA/+uqq66KCRMmZGcAAKSrrKyM1atXZ2cAAAAAAAAAQEEw3AMAAAAAAAAAQLMycODAKCkpyc5gPZYsWRLDhg3LzqAOKioq4t13383OoA569+4d22+/fXYGAPVg/PjxMXTo0Fi3bl12CtBIbr/99ujbt292BgAA9ezEE0+M5557LjsDit4f//jH+NWvfpWdAQBQEJ5//vl48MEHszMAAAAAAAAAoCAY7gEAAAAAAAAAoNk44YQTomvXrtkZ1ODmm2+ORYsWZWdQB2vWrInx48dnZ1AHbdu2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L14c06ZNiyeffDKamppST6KXO378eKxevTpKS0vjrrvuihMnTqSeBAAAPVZnZ2esXLkyJk+eHLfeemvs2LEjOjs7U88ioa6urti5c2fceeedH4adhFIBAPi07dmzJ+69996YN29ejBo1Ku644454+umn480334wzZ86kngcAAAAAAABADybcAwAAAAAAAABAUl/84hdj0aJFqWfwMXbt2hUbN25MPYNe4Oc//3ns378/9QzO09e//vWYPXt26hkA9FC1tbVx++23x8SJE2PVqlVRW1ubehK9TFVVVfz4xz+OSy65JJYuXRrNzc2pJwEAQK/yy1/+MubNmxcLFiyIX/3qV665M9PQ0BDPPPNMXHnllXH55ZfHunXrUk8CAICIiGhra4snnngibrnllqioqIgRI0bEN7/5zVi3bl3s2LEj/vGPf6Se2Ou0t7dHVVVVbN68OZ577rnUcwAAAAAAAAD+o/qlHgAAAAAAAAAAQN7uu+++6NfP31i6o66urvjpT3+aega9yMMPP+zGfj3MwIEDY/ny5XHttdemngJAD9bY2Bh333133HPPPfG9730vFi9eHNOnT089ix6qs7Mzdu3aFevXr4+nnnoq9RwAAMjC1q1bY+vWrVFUVBRLly6NG264IS699NLUs7gA2tvbY+fOnfHss8/GY489Fh0dHaknAQDA/6mtrS02bdoUmzZt+vBYaWlpLFy4MGbOnBlTp06NSy65JEpKSmLAgAEJl/YMra2t8e6778ahQ4fi73//e7zxxhvx/PPPR2NjY+ppAAAAAAAAABeEO54AAAAAAAAAAJDMVVddFVdeeWXqGXyMbdu2xW9/+9vUM+hFnnjiiViyZElUVFSknsJ5uPrqq+Oaa66JP/zhD6mnANDDdXZ2xkMPPRQPPfRQXHvttXHHHXfEVVddFYWFhamn0QM0NzfH73//+3j00Udj+/btqecAAECWmpubY9myZbFs2bKYP39+3HbbbXH11VfHqFGjUk/j/6GrqysOHjwYL730Ujz++OOxf//+1JMAAOD/7dChQ7F27dqPHOvbt2/MmzcvZs2aFZMnT46JEyfGxRdfHGPGjIkxY8ZEv3753Iqpubk56uvr49ixY1FTUxPvvPNOVFdXx969e2PPnj2p5wEAAAAAAAB8qvL5tRgAAAAAAAAAgG7nvvvui4KCgtQz+Cc6OztjxYoV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"
					), aCr(7, "youtube", 7, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aCr(8,
					"googleplay", 3,
					"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"
					), aCr(9, "discord", 7,
					"iVBORw0KGgoAAAANSUhEUgAAACwAAAAyBAMAAADVdiTZAAAAG1BMVEUA/wBI/0lu/26P/5Cl/6O8/73R/9Hn/+j///+iRuwXAAABJUlEQVQ4y83TvW7CMBQF4BsKdKVIpYxIRaJjVLUSI6JDGSNlCCOq1JC1f+CxFIL92D22E+di/ABciZB8seRj35joVZ3VN1FXBSqhRYgPJEIsSQXrAnmjL2uP5Usm81z83Bec5WM+J9T4vS8Yfzz1yFQ0v2ackKsrxr2G7d4ZPjK1O214z3no+Jdz1/EKTy1NI/w6jmcIID6JJirGe8cYdIdGIcQOwx3j/gEpI6X+qoRkGqrnd6OXFR/NRAcdOWFc6hDPera0Xk/Fozo1ck4bHsSVpg0jYJSlervGW9zWSdQXhhXozlbGek1uY9/s2hRWect7ucnsf5ld7DfosX+kcsv+AdwtDfvHdW877x/u0raB6Oa0qG35rKZhbokg41sKclQEmTr/f+SUPtWxuyYAAAAASUVORK5CYII="
					), aCr(10, "insta", 3, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aCr(11, "emojis",
					4, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aCr(12, "flags", 3,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aCr(13, "bestTeam", 5,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aCr(14, "bestPlayer", 5,
					"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"
					), aCr(15, "zoom", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuBAMAAACllzYEAAAAHlBMVEUAAAAhIyA3ODZTVVJrbWqEhoOkpqO8v7vX2tb///8goTJXAAABaElEQVQ4y32Tu1ODQBDGL8QAdlg5dml8dZTa2TijXQpnIh2TwoQOxwehi2PB0flKYP/b7HFv5nALBn5337d7ewshXZyuKX2PST8egUW76OE7EJFa+BhJ9bSsUWFaeTV3GKHbn8EvlB79bjSv4VO8jUr4VdiHNnK938MHPie0Yh+ZLqmGuNsJ7CNURgewI5qPoRE86GwkJyWIBIfcUfJrmMm0sclDyDnPWmLyADacl8jnRbEGKIoiJRP4EmU2LJmIDfLvAf7z/37mv6IUm08pzbV/rx5f1pPA1Fn/iX3eS3nekAslz7gcGw9bg3uqn6Rup5oH+uaTLpO4r0SmZVuUFE2lfTc+z1qr9+BVtGJqzq1RHNfQdAtnrEW75UwuXOFgvj3crpCyDu6UIpP9fPHZU5XkiYVXvsXIPcc+VwspzY2pPorE/NgCfYK+QJ5+QFA6fjQt2A4IWuIWODixe2ELcuIUNJGL+zQle92exY5pfDIaAAAAAElFTkSuQmCC"
					), aCr(16, "apple", 3,
					"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"
					), aCr(17, "loading", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEEAAAAKAQMAAADRpqGpAAAABlBMVEUAAAD///+l2Z/dAAAATklEQVQI12M48E/OzoinjoGB4cA/O3tjnn8g1iEjY+aeAxCWofGZBijLCMqqNzRKmQdhGRubNINZyeYQ1p9/yXbGMv9yG0AsG2OemtwGAJcsIuxbPF7gAAAAAElFTkSuQmCC"), aCr(18, "target",
					7,
					"iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAJFBMVEXUAADLSwDYWli/eQCzlQGgswDloaGC0wAA/wBk5wDx09P///8NUBuBAAADWElEQVRYw62YvW/aUBDADwghTRakqoJuTBmSBamNSjcyJSMZotINZciQLCxVnQ1EkO0N1ET1iDJkgCViyGD/c7UN8bv37t5Hq96EbH6+j3fv3d2DgJPw52Uqd+y7AJhnP05hI6WTOyfksQ1IPnhWJLwAWUrfLYjfBSJfjIjfBkYaBoQnVAYjYRc08lWHXIBW+jwy0RNQijjErxsQqHJID4xyTpF7MwEVirQtCHxUkYmNEBEAVyVCDbgqEWq2SNcBgQ5GpsrLw+UqSZbPAzZoG2QovdpN/7+R5xaTNjkSSgt/lAiJJaYmkImOUJiSQHCu7CeJnjl/Q7Bdu4kqr6ploKTXLUGSJ8UykON1lDDSkmMGUrKUOSJZC+TdBvHFk2MWSQbSTkuRsUWJpCbKkaE2wIw3/RwRrqx0yKL4SzNDQsOa0LWpZcjU5rxkWSVDxna7sGVRisz4eMUay/op0uPilW2UQ6wVbU0I6owrm7Qqr5jV3AsgZFx5paa+iJCBSBcmPvvUmWoAU7oqKD8KzbGIMkzoF1vcHi0eBTB6+3nAbcMy/U4EM7IfF8Dt0iJkHoNI59AB+VAfhqqnsXwMkiifQ09FXiWkTJCOQJgQs48Z5EVGiPIOdFVk8f+Rvb9Hmv/iiyvCRYxfFzCti/vqk4SRc2yfybGZPmelAwEhI/JyzXmPk39MTIg5V4S5AdzTtwNmh8Wi9onjoswcjbv02Q5/jj3RYrtGh1LAFeMBKbYLUS1BNEkH6Ay/yh7ccNWimSJDtiItn2/wKR6jBgOCkUt9EWvlpci9qbMgcS9lVcy3F2RkVzWvyHW7ZWvcXgBurY6tdmX9ZYqMrFUc7TovR6ZgC8BC6kizTgksamK5hwO5T7w1e5K3yhkyBmOvhM+PaIv4YGr7cD9aLTrYtqm5xEdBs0DmuKCstM1oHuIt4oOWeaIDGTCDxY2yb5TRArjx5XDJTgnbAWaDhOqAWL6+vr5S55eaNPLMXUYeT0J8B6KqjG9DO9JXELuaGhlF546eICS0TJYNZqw2D8mViJv3e26DOEZMpjU0FxFTLbGjvSF50Dni6e9hfvHztGe67Xmw6qB3So/k0mMnst1c+acyceZyP/aI9uiJ53alFvy+/JTa9/7zt8j1Fs4ifwCmXBmOYkld0AAAAABJRU5ErkJggg=="
					), aCr(19, "members", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABSVFGanJkA/wDMz8x4/3ey/7L///+GDHoaAAACZElEQVRIx9WWwYrjMAyGlVCYa6cs5JqGQh5gaObaDYU8QJnOA5SS66RN49dfSZZt2U2WZZeFXc9h2r9fZEmRJcPbLyz4d6GzMdM1/uXcG3PV0KehFVFnlh4Baoxdl8BEEkF7EcwUoN5pJ4HenRBMNV66C4QfxxI2nTKFhsYt5CgZC9FTawDIxbg4UKKUWevAuw1Aq/D7NUq6M9RbQ2zKhkwpKVnK2AWGRrCrc04lEpDfgyg1u8mh3EQqSGLoS5QXY/a4+XSKJIIwkkNQOIlTgFYUcQq59TuQcrwI0PDk+M3Hayh2+RcC1smkl3DDj1ltlMR5old38LutHT04l/BVAVfOSL9lnXelUBKaAltxt2gTv3Ft6w6k4sajdtf6zhLVHUHltzTwkIzvOUGf9PhOJJdVdphWS0YfFnJUCrVgISmdTVWVnVQa19+YV9VWKgohl2+MRUFKjaAXDX0tQCvt0+HPIJWnJajWGV9wPDPutPFhXs9CK+PLr1aJjSF+5aUzpOQY6mwZURWNCRRO9JZq43ikMtnog44v2LlojK1EW6n4zYXz4HqSb/gsty1qaWjAt5o7NAEiL7Jdu2vX7IqHLikEIYdzUJ5CZQQdJJcJ5GSE9i5tC1BNR4oadGub76ChwrZfKn48wTRXsGfrQvHFQr0dmy245o8nMYHGoxsToMZIAoWBA2qOzEMXmVJiK4nO2jn5oXju5yGZpn4Gf/QpNH08D+pn6O3vQqOGulkIX0+1fbXd93VT+dkXQe/SO3F1fkSnUBjgT7cEdVdJodkLTbNkKLr1NH1ApstPrkbnK/39B9e1H85NJPjxrK7zAAAAAElFTkSuQmCC"
					), aCr(20, "hourglass", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABKTEqZm5gA/wDJzMh3/3iz/7L///+iyVF/AAACjklEQVRIx72W3aqyQBSGJwk6dceGTv1C8AJEO60QvACJLkDI02xPrtvf75pJ58cx2iffIqT0aWb9vGuNIrft0hSX8WqZ4Etxg9HM+G4zQVdatOcEdSSrqkr3juFOVdMwQXQUC7YmAyVLUPQZ1PxtJSJ5js7KX7j/+pKkNR5Y0RE9Ij/6JMPFRFfebt0cOmbD7dZOEOwQgn7ssnwOrf8rJAMp8KFSrnwormcQCR8S1HpQgT8qVVXnVCsJS/tQzlV4mMpmJLUCXOi4I2mgmnotOAfqcJPiCUIGNsMMunJdEqMjbP+cQQcOrx+hnZ0BA5XsuTQuPUxwBoLnZj98Oxq/LaiTHNK4G34MAQj7jfGhQqeIfgJQzm7ofELccUZ5CDpQjKBO3LbUr+gZhAo8QhMl8FoCb4IQhkvyUt7JWciBCnhUa5VkJkkexEtxQ3KjPvMlqKD7hk7fdF/bHnlQfoUU4LglgBCElVCP+ztIbQfDdXk7OL5jqH/juE7BA4pBUZr8XTJZMadoKZklKlxriMvSBqGO4m8ejJmuy5AH9aTqq02CbwPQlfeYDH94ziEWilqDW5xniiUWq6VUjs6szFTnat5SHYuXdcnGAcTZrINLrpmZGJnqqXY26WLONJ7rfqm5qfwh1vXckPahAh8HD/Imjzt7xJgACLe3oZ01xYQ1Mo/umWmGprBOjcQ96cyEEtacc89DrDx6PkJQrHSh2kjdgh4ulH0C7YIQuS8P3nYlDa9ecg33OpUF8TqnFyB9UitIVujsALSmqp6g+/5fHKVpxQfQqM6q2ier7X5joFdAMX++YrEyMc6hgP0RkuoVZbvfTqfU6gs/VbZG6M3bmn5fE0pxb6x1Ori4eNbkY3f+AriuYpjQCOoxAAAAAElFTkSuQmCC"
					), aCr(21, "stalemate", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEoAAAAKAQMAAAApRlpeAAAABlBMVEUAAAD///+l2Z/dAAAAX0lEQVQI12P4/afiwJ+G9vnvDzD8/vPjwJ+D/SDmgYQTBw487mnmYYAwv4OZBUDmj/89zfwNDBWJfw78uDv/MJApAWQeODn/MFABR2LPgQMHZ4CYPxJ7/vwBMvkPIDEB8vo+S3L7oMwAAAAASUVORK5CYII="
					), aCr(22, "logo", 8,
					"iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxMAAAsTAQCanBgAAATzaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTEyLTIzVDE0OjQ0OjQ2KzAzOjMwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyZTU0YWVlOS01ZDdhLWQ3NDgtYTRjYS0yODQ1NmQ1ZWFlZDYiIHhtcE1NOkRvY3Vt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"
					)
		}
	}, this.get = function(e2) {
		return canvas[e2]
	}, this.aCS = function(name) {
		for (var a7 = yb.length - 1; 0 <= a7; a7--)
			if (yb[a7] === name) return canvas[a7];
		return aCl
	}, this.s1 = function() {
		return aCk <= 0
	}, this.aCn = function() {
		aCk = 0, aCo()
	}
}

function cO() {
	var aD0, aD1, aD2, aD3, aD4, aD5, aD6, aD7, aD8, aD9, aCy = [
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
		aCz = [
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

	function aDF(jB, mV) {
		for (var a7 = jB; a7 < mV; a7++) aD0[a7] = 4 * bI.dn(64 * av.random(), av.value(100)), aD1[a7] = 4 * bI.dn(64 * av.random(), av.value(100)), aD2[a7] = 4 * bI.dn(64 * av.random(), av.value(100))
	}

	function aDE(jB, mV) {
		for (var colorsData = a9.data.colorsData, a7 = jB; a7 < mV; a7++) {
			var fH = colorsData[a7];
			aD0[a7] = 4 * (fH >> 12), aD1[a7] = 4 * (fH >> 6 & 63), aD2[a7] = 4 * (63 & fH)
		}
	}

	function aDQ(eT, aDS) {
		a9X[eT] = 0, a9X[eT + 1] = 0, a9X[eT + 2] = aDS, a9X[eT + 3] = 0, aDT(eT)
	}

	function aDT(eT) {
		var ew;
		bY.md || (ew = aY.wR(eT), eT = aY.wS(eT), bY.md = ew >= bX.a9W[0] && ew <= bX.a9W[2] && eT >= bX.a9W[1] && eT <= bX.a9W[3])
	}
	this.er = new Int32Array(4), this.dX = function() {
		var er = this.er;
		er[0] = -4 * bP.f0, er[1] = 4, er[2] = -er[0], er[3] = -er[1]
	}, this.dW = function() {
		if (aD0 = new Uint8Array(a9.em), aD1 = new Uint8Array(a9.em), aD2 = new Uint8Array(a9.em), aD3 = new Uint8Array(a9.em), aD4 = new Uint8Array(a9.em), aD5 = new Uint8Array(a9.em), aD6 = new Uint8Array(a9.em), aD7 = new Uint8Array(a9.em),
			aD8 = new Uint8Array(a9.em), aD9 = new Uint8Array(a9.em), this.a6A = new Uint8Array(a9.em), a9.ix)
			for (var a7 = a9.em - 1; 0 <= a7; a7--) {
				var fA = bd.kK[bd.en[a7]],
					kf = bI.dn((aCz[fA][3] + 1) * av.random(), av.value(100));
				aD0[a7] = aCy[fA][0] + kf * aCz[fA][0], aD1[a7] = aCy[fA][1] + kf * aCz[fA][1], aD2[a7] = aCy[fA][2] + kf * aCz[fA][2]
			} else 0 === a9.data.colorsType ? a9.data.selectableColor ? (aDE(0, a9.ju), aDF(a9.ju, a9.em)) : aDF(0, a9.em) : aDE(0, a9.em);
		! function() {
			var a7, es;
			for (a7 = a9.em - 1; 0 <= a7; a7--) es = bI.dn(aD0[a7] + aD1[a7] + aD2[a7], 3), aD0[a7] += aDL(es - aD0[a7], 2), aD1[a7] += aDL(es - aD1[a7], 2), aD2[a7] += aDL(es - aD2[a7], 2), aD0[a7] -= aD0[a7] % 4, aD1[a7] -= aD1[a7] % 4, aD2[
				a7] -= aD2[a7] % 4
		}(),
		function() {
			for (var a7 = a9.em - 1; 0 <= a7; a7--) aD0[a7] += bI.dn(a7, 128), aD1[a7] += bI.dn(a7 % 128, 32), aD2[a7] += bI.dn(a7 % 32, 8), aD3[a7] = a7 % 8
		}(), this.aDI(),
			function() {
				for (var a7 = a9.em - 1; 0 <= a7; a7--) aD4[a7] = aD0[a7] < 32 ? aD0[a7] + 32 : aD0[a7] - 32, aD5[a7] = aD1[a7] < 32 ? aD1[a7] + 32 : aD1[a7] - 32, aD6[a7] = aD2[a7] < 32 ? aD2[a7] + 32 : aD2[a7] - 32
			}(),
			function() {
				for (var a7 = a9.em - 1; 0 <= a7; a7--) aD7[a7] = 235 < aD0[a7] ? aD0[a7] - 20 : aD0[a7] + 20, aD8[a7] = 235 < aD1[a7] ? aD1[a7] - 20 : aD1[a7] + 20, aD9[a7] = 235 < aD2[a7] ? aD2[a7] - 20 : aD2[a7] + 20
			}()
	}, this.a5C = function(player) {
		var g = bL.fP;
		return g[0] = aD0[player], g[1] = aD1[player], g[2] = aD2[player], g
	}, this.aDI = function() {
		for (var a7 = a9.em - 1; 0 <= a7; a7--) this.a6A[a7] = aD0[a7] + aD1[a7] + aD2[a7] < 280 ? 0 : 1
	}, this.wR = function(eT) {
		return bI.dn(eT, 4) % bP.f0
	}, this.wS = function(eT) {
		return bI.dn(eT, 4 * bP.f0)
	}, this.w1 = function(ew, ey) {
		return Math.floor(4 * (ey * bP.f0 + ew))
	}, this.wH = function(eT) {
		var er = this.er;
		return this.aDM(eT + er[0]) || this.aDM(eT + er[1]) || this.aDM(eT + er[2]) || this.aDM(eT + er[3])
	}, this.fE = function(eT) {
		var er = this.er;
		return this.eu(eT + er[0]) || this.eu(eT + er[1]) || this.eu(eT + er[2]) || this.eu(eT + er[3])
	}, this.wF = function(eT, player) {
		var er = this.er;
		return this.aDN(eT + er[0], player) || this.aDN(eT + er[1], player) || this.aDN(eT + er[2], player) || this.aDN(eT + er[3], player)
	}, this.y8 = function(player) {
		return player < a9.ju && 2 !== ac.a1d[player]
	}, this.gP = function(eT) {
		return 208 <= a9X[eT + 3]
	}, this.wM = function(player, eT) {
		return this.gP(eT) && this.aDO(player, eT)
	}, this.aDO = function(player, eT) {
		return player === this.eh(eT)
	}, this.aDP = function(eT) {
		return 208 <= a9X[eT + 3] && a9X[eT + 3] < 224
	}, this.j6 = function(eT) {
		return 224 <= a9X[eT + 3] && a9X[eT + 3] < 248
	}, this.wG = function(eT) {
		for (var er = this.er, a7 = 3; 0 <= a7; a7--)
			if (this.hI(eT + er[a7])) return !0;
		return !1
	}, this.ek = function(eT) {
		return this.gP(eT) || this.eg(eT)
	}, this.hI = function(eT) {
		return 0 === a9X[eT + 3] && 2 === a9X[eT + 2]
	}, this.eg = function(eT) {
		return 0 === a9X[eT + 3] && 1 === a9X[eT + 2]
	}, this.v4 = function(eT) {
		return 0 === a9X[eT + 3] && 3 === a9X[eT + 2]
	}, this.eu = function(eT) {
		return 0 === a9X[eT + 3] && 5 <= a9X[eT + 2]
	}, this.aDM = function(eT) {
		return 0 === a9X[eT + 3] && 3 <= a9X[eT + 2]
	}, this.eX = function(eT) {
		return a9X[eT + 2] - 5
	}, this.aDN = function(eT, player) {
		return this.eg(eT) || this.gP(eT) && player !== this.eh(eT)
	}, this.eh = function(eT) {
		return a9X[eT] % 4 * 128 + a9X[eT + 1] % 4 * 32 + a9X[eT + 2] % 4 * 8 + a9X[eT + 3] % 8
	}, this.wN = function(eT) {
		aDQ(eT, 1)
	}, this.aDR = function(eT) {
		aDQ(eT, 2)
	}, this.w2 = function(eT, player) {
		a9X[eT] = aD0[player], a9X[eT + 1] = aD1[player], a9X[eT + 2] = aD2[player], a9X[eT + 3] = 208 + aD3[player], aDT(eT)
	}, this.gK = function(eT, player) {
		a9X[eT] = aD4[player], a9X[eT + 1] = aD5[player], a9X[eT + 2] = aD6[player], a9X[eT + 3] = 224 + aD3[player], aDT(eT)
	}, this.j7 = function(eT, player) {
		a9X[eT] = aD7[player], a9X[eT + 1] = aD8[player], a9X[eT + 2] = aD9[player], a9X[eT + 3] = 248 + aD3[player], aDT(eT)
	}
}

function cn() {
	var e2 = 0,
		aDU = new Uint16Array(32);

	function remove(a3G) {
		var a7;
		for (e2 -= 2, a7 = a3G; a7 < e2; a7 += 2) aDU[a7] = aDU[a7 + 2], aDU[a7 + 1] = aDU[a7 + 3]
	}
	this.dW = function() {
		e2 = 0
	}, this.il = function() {
		var a7, j3, iB;
		if (0 !== e2)
			if (0 === ac.ll[a9.eZ] || aZ.aDV(a9.eZ) === aZ.fv(a9.eZ)) e2 = 0;
			else
				for (a7 = e2 - 2; 0 <= a7; a7 -= 2)(j3 = aDU[a7]) < a9.em && 0 === ac.ll[j3] ? remove(a7) : (iB = aDU[a7 + 1], (j3 >= a9.em && aDW(a9.eZ) || j3 < a9.em && aDX(a9.eZ, j3)) && (b5.hC.hN(iB, j3), remove(a7)))
	}, this.hP = function(j3, iB) {
		! function(j3, iB) {
			var a7;
			for (a7 = 0; a7 < e2; a7 += 2)
				if (aDU[a7] === j3) return aDU[a7 + 1] = Math.min(aDU[a7 + 1] + iB, 1023), 1;
			return
		}(j3, iB) && 32 !== e2 && (aDU[e2] = j3, aDU[e2 + 1] = iB, e2 += 2)
	}
}

function cP() {
	function aDe(player) {
		var dm;
		b7.gB.a1f(player) && (dm = ac.gr[player] - ac.a1j[player] + aZ.aDg(player), ba.gF(player, Math.abs(dm), dm < 0 ? 18 : 12)), ac.gr[player] = 0, ac.a1j[player] = 0
	}

	function aDn() {
		aT.show(!1, !1, !1, !0), aS.a8j(), bO.result.yv()
	}

	function aDb(player, aDm) {
		for (var a7 = aDm.length - 1; 0 <= a7; a7--) aZ.aDp(aDm[a7], player)
	}

	function aDd(player) {
		for (var iQ = ac.iQ, iR = ac.iR, iS = ac.iS, iT = ac.iT, mD = iQ[player], mE = iS[player], f0 = bP.f0, gd = ac.gd, ew = iR[player]; mD <= ew; ew--)
			for (var ey = iT[player]; mE <= ey; ey--) {
				var gN = 4 * (ey * f0 + ew);
				aY.wM(player, gN) && (aY.wN(gN), gd[player]--)
			}
		iQ[player] = iR[player] = 0, iS[player] = iT[player] = 0
	}
	this.df = function(gN) {
		var player, dm = ac.gd[gN];
		bK.s.om[gN] ? dm && (aDb(player = gN, aZ.aDc(player)), aDd(player), aB.gD(player), aZ.clear(player), aDe(player), function(player) {
			ac.vx[player] = 0, ac.gH[player] = [], ac.gV[player] = [], ac.gW[player] = [], ac.fF[player] = []
		}(player)) : !dm && ac.gH[gN].length || this.aDa(gN)
	}, this.aDa = function(player) {
		! function(player) {
			aY.y8(player) && (ac.ys[player] = bf.ym.aDl(), a9.yH++);
			var aDm = aZ.aDc(player);
			0 === aDm.length ? b7.gB.a1e(player) && aDn() : (aDb(player, aDm), function(player, aDm) {
				var aDr = aDm[function(aDm) {
					var a7, e2 = 0;
					for (a7 = aDm.length - 1; 1 <= a7; a7--) ac.gd[aDm[a7]] > ac.gd[aDm[e2]] && (e2 = a7);
					return e2
				}(aDm)];
				9 === a9.kE && 1 === bd.en[player] && av.jm(8) && aw.aDs(aDr);
				if (b7.gB.a1e(player)) aDn(), aJ.yR(aDr, 1);
				else {
					for (var a7 = aDm.length - 1; 0 <= a7; a7--)
						if (b7.gB.a1f(aDm[a7]) && (ba.lh[4 - b7.gB.jI(player)]++, b7.gB.a1e(aDm[a7]))) return aJ.yR(player, 0);
					b7.gB.jI(player) || aJ.a4V(0, player, aDr)
				}
			}(player, aDm))
		}(player), aDd(player), aDe(player),
			function(player) {
				ac.ll[player] = 0, ac.gH[player] = null, ac.gV[player] = null, ac.gW[player] = null, ac.fF[player] = null
			}(player), aB.gD(player), aZ.clear(player), bK.aDj.aDk(player)
	}
}

function cs() {
	var input;

	function aDt(e) {
		(e = e.target.files) && 0 < e.length && b3.aDw(e[0])
	}

	function aE0(e) {
		var fA = new Image;
		fA.onload = aE1, fA.src = e.target.result
	}

	function aE1(e) {
		var e = e.target,
			canvas = document.createElement("canvas");
		canvas.width = e.width, canvas.height = e.height;
		canvas.getContext("2d").drawImage(e, 0, 0);
		var e = canvas.width,
			jO = canvas.height;
		e > bP.aE3 || jO > bP.aE3 || e < 10 || jO < 10 ? (e = "Image dimensions must be between 10 and " + bP.aE3 + ".", u.tg ? u.tg.showToast(e) : alert(e)) : 20 === n.rc && n.aCw().aE1(canvas)
	}
	this.dW = function() {
		(input = document.createElement("input")).type = "file", input.setAttribute("accept", ".png, .jpg, .gif, .jpeg"), input.onchange = aDt
	}, this.zf = function() {
		input && (input.onchange = null, input.value = "", input = null)
	}, this.aDu = function() {
		input.click()
	}, this.aDw = function(aDx) {
		var g = aDx.name.split("."),
			g = g[g.length - 1].toLowerCase();
		"gif" !== g && "jpg" !== g && "jpeg" !== g && "png" !== g || ((g = new FileReader).onload = aE0, g.readAsDataURL(aDx))
	}
}

function cq() {
	this.aE5 = null, this.dW = function() {
		10 !== a9.kE ? this.aE5 = null : this.aE5 = new Uint32Array(a9.em)
	}, this.il = function() {
		10 === a9.kE && this.qj()
	}, this.qj = function() {
		for (var gN, target, a8u, aE5 = this.aE5, y6 = ah.jx, a1k = ac.gr, a7 = ah.jv - 1; 0 <= a7; a7--)(gN = y6[a7]) >= a9.ju || (target = Math.max(bI.dn(a1k[gN], 4), 2048), a8u = Math.max(aa.a8v(gN), 100), aE5[gN] += bI.dn(a8u * target, 1e4),
			aE5[gN] > target && (aE5[gN] = target))
	}, this.a1p = function(player, j4) {
		return j4 > this.aE5[player] ? (j4 = this.aE5[player], this.aE5[player] = 0) : this.aE5[player] -= j4, j4
	}
}

function dS() {
	function aE7(e) {
		var g, e = e.target.files;
		e && 0 < e.length && (e = e[0], "json" === (g = e.name.split("."))[g.length - 1].toLowerCase()) && ((g = new FileReader).onload = aEF, g.readAsText(e))
	}

	function aEF(e) {
		var aEJ;
		a9.yF || (e = JSON.parse(e.target.result), aEJ = a9.data = new a2d, aEK(e, aEJ, "mapType", 0, 2), aEK(e, aEJ, "mapProceduralIndex", 0, 255), aEK(e, aEJ, "mapRealisticIndex", 0, 255), aEK(e, aEJ, "mapSeed", 0, 16383), function(aEI, aEJ, gO,
				max) {
				aEI = aEI[gO];
				aEJ[gO] = aEQ(aEI) ? aEI.slice(0, max) : aEJ[gO]
			}(e, aEJ, "mapName", 20), function(aEI, aEJ, gO) {
				var aE2;
				2 === aEJ.mapType && (!aEQ(aEI = aEI[gO]) || aEI.length <= 20 ? aEJ.mapType = 0 : ((aE2 = new Image).onload = function() {
					b6.aER.aES(aE2, 1), aE2.onload = null, aE2 = null
				}, aE2.src = aEI))
			}(e, aEJ, "canvas"), aEK(e, aEJ, "passableWater", 0, 1), aEK(e, aEJ, "passableMountains", 0, 1), aEK(e, aEJ, "playerCount", 1, 512), aEK(e, aEJ, "humanCount", 1, 1), aEK(e, aEJ, "selectedPlayer", 0, 0), aEK(e, aEJ, "gameMode", 0, 1),
			aEK(e, aEJ, "playerMode", 0, 0), aEK(e, aEJ, "battleRoyaleMode", 0, 0), aEK(e, aEJ, "numberTeams", 0, 8), aEK(e, aEJ, "isZombieMode", 0, 0), aEK(e, aEJ, "isContest", 0, 0), aEK(e, aEJ, "isReplay", 0, 0), aEN(e, aEJ, "elo", 16, 2,
				16383), aEK(e, aEJ, "colorsType", 0, 1), aEK(e, aEJ, "colorsPersonalized", 0, 1), aEN(e, aEJ, "colorsData", 32, 512, 262143), aEK(e, aEJ, "selectableColor", 0, 1), aEN(e, aEJ, "teamPlayerCount", 16, 9, 512), aEK(e, aEJ,
				"neutralBots", 0, 1), aEK(e, aEJ, "botDifficultyType", 0, 3), aEK(e, aEJ, "botDifficultyValue", 0, 15), aEN(e, aEJ, "botDifficultyTeam", 8, 9, 15), aEN(e, aEJ, "botDifficultyData", 8, 512, 15), aEK(e, aEJ, "spawningType", 0, 2),
			aEK(e, aEJ, "spawningSeed", 0, 16383), aEN(e, aEJ, "spawningData", 16, 1024, 4095), aEK(e, aEJ, "selectableSpawn", 0, 1), aEK(e, aEJ, "playerNamesType", 0, 2),
			function(aEI, aEJ, gO, size, max) {
				var a0w = aEI[gO];
				if (Array.isArray(a0w)) {
					for (var a0x = new Array(size), ep = Math.min(a0w.length, size), a7 = 0; a7 < ep; a7++) a0x[a7] = aEQ(a0w[a7]) ? a0w[a7].slice(0, max) : "";
					aEJ[gO] = a0x
				}
			}(e, aEJ, "playerNamesData", 512, 20), aEK(e, aEJ, "selectableName", 0, 1), aEK(e, aEJ, "aIncomeType", 0, 2), aEK(e, aEJ, "aIncomeValue", 0, 255), aEN(e, aEJ, "aIncomeData", 8, 512, 255), aEK(e, aEJ, "tIncomeType", 0, 2), aEK(e, aEJ,
				"tIncomeValue", 0, 255), aEN(e, aEJ, "tIncomeData", 8, 512, 255), aEK(e, aEJ, "iIncomeType", 0, 2), aEK(e, aEJ, "iIncomeValue", 0, 255), aEN(e, aEJ, "iIncomeData", 8, 512, 255), aEK(e, aEJ, "sResourcesType", 0, 2), aEK(e, aEJ,
				"sResourcesValue", 0, 2047), aEN(e, aEJ, "sResourcesData", 16, 512, 2047), n.r(), n.s.aEH[0] = 0, n.o(19))
	}

	function aEK(aEI, aEJ, gO, min, max) {
		aEI = aEI[gO];
		aEJ[gO] = "number" == typeof aEI && min <= aEI && aEI <= max ? Math.floor(aEI) : aEJ[gO]
	}

	function aEQ(pG) {
		return "string" == typeof pG
	}

	function aEN(aEI, aEJ, gO, aET, size, max) {
		var a0w = aEI[gO];
		if (Array.isArray(a0w)) {
			for (var a0x = new(8 === aET ? Uint8Array : 16 === aET ? Uint16Array : Uint32Array)(size), ep = Math.min(a0w.length, size), a7 = 0; a7 < ep; a7++) a0x[a7] = bI.p7(a0w[a7], 0, max);
			aEJ[gO] = a0x
		}
	}
	this.aE6 = function() {
		var input = document.createElement("input");
		input.type = "file", input.setAttribute("accept", ".json"), input.onchange = aE7, input.click()
	}, this.aE8 = function() {
		for (var aEB, aA2, a5V = a9.data, keys = Object.keys(a5V), aE9 = {}, a7 = 0; a7 < keys.length; a7++) {
			var key = keys[a7];
			a5V[key] instanceof Uint8Array || a5V[key] instanceof Uint16Array || a5V[key] instanceof Uint32Array ? aE9[key] = Array.from(a5V[key]) : aE9[key] = a5V[key]
		}
		aE9.canvas = 2 === aE9.mapType && aE9.canvas ? aE9.canvas.toDataURL() : null, aEB = aE9, aEB = JSON.stringify(aEB, null, 2), aEB = new Blob([aEB], {
			type: "application/json"
		}), (aA2 = document.createElement("a")).href = URL.createObjectURL(aEB), aA2.download = "tt_scenario.json", aA2.click()
	}
}

function cS() {
	var aEU, aEV, size, j3, j4, id, aEW;

	function aEX(player) {
		return player < a9.ju ? aEU * player : aEU * a9.ju + aEV * (player - a9.ju)
	}
	this.dW = function() {
		aEU = a9.ju < 16 ? 12 : 8, aEV = 4;
		var ep = aEX(a9.em);
		size = new Uint8Array(a9.em), j3 = new Uint16Array(ep), j4 = new Uint32Array(ep), id = new Uint16Array(ep), aEW = new Uint8Array(ep)
	}, this.p6 = function(a5i, aEY) {
		var aEZ = this.gs(a5i, aEY),
			aEY = (this.gq(a5i, aEY, 0), b7.gB.gE(a5i, aEZ));
		ba.gF(a5i, aEZ - aEY, 12)
	}, this.clear = function(player) {
		size[player] = 0
	}, this.aDp = function(player, aEY) {
		var aEc, aEY = function(player, aEY) {
			var a7, kf = aEX(player);
			for (a7 = size[player] - 1; 0 <= a7; a7--)
				if (0 === id[kf + a7] && j3[kf + a7] === aEY) return a7;
			return size[player]
		}(player, aEY);
		aEY !== size[player] && (aEc = j4[aEX(player) + aEY], this.gG(player, aEY), this.j0(player, aEc, a9.em))
	}, this.jG = function(player, aEY) {
		for (var kf = aEX(player), a7 = size[player] - 1; 0 <= a7; a7--)
			if (0 === id[kf + a7] && j3[kf + a7] === aEY) return !0;
		return !1
	}, this.jY = function(player) {
		return player < a9.ju ? size[player] < aEU : size[player] < aEV
	}, this.fv = function(player) {
		return size[player]
	}, this.g1 = function(player, a7) {
		return j3[aEX(player) + a7]
	}, this.fw = function(player, a7) {
		return id[aEX(player) + a7]
	}, this.aEd = function(player, aEe) {
		for (var kf = aEX(player), a7 = size[player] - 1; 0 <= a7; a7--)
			if (id[kf + a7] === aEe) return a7;
		return -1
	}, this.g2 = function(player, a7) {
		return j4[aEX(player) + a7]
	}, this.gs = function(player, aEY) {
		for (var kf = aEX(player), a7 = size[player] - 1; 0 <= a7; a7--)
			if (0 === id[kf + a7] && j3[kf + a7] === aEY) return j4[kf + a7];
		return 0
	}, this.aDg = function(player) {
		for (var kf = aEX(player), fH = 0, a7 = size[player] - 1; 0 <= a7; a7--) fH += j4[kf + a7];
		return fH
	}, this.aEf = function(player) {
		for (var kf = aEX(player), fH = 0, a7 = size[player] - 1; 0 <= a7; a7--) 0 === id[kf + a7] && (fH += j4[kf + a7]);
		return fH
	}, this.aDV = function(player) {
		for (var kf = aEX(player), gI = 0, a7 = size[player] - 1; 0 <= a7; a7--) 0 < id[kf + a7] && gI++;
		return gI
	}, this.gq = function(player, aEY, aEc) {
		for (var kf = aEX(player), a7 = size[player] - 1; 0 <= a7; a7--) 0 === id[kf + a7] && j3[kf + a7] === aEY && (j4[kf + a7] = aEc)
	}, this.gb = function(player, a7, aEc) {
		j4[aEX(player) + a7] = Math.max(aEc, 0)
	}, this.gc = function(player, a7) {
		aEW[aEX(player) + a7] = 0
	}, this.g3 = function(player, a7) {
		return aEW[aEX(player) + a7]
	}, this.j0 = function(player, aEc, aEY) {
		b7.gB.a1f(aEY) && ba.lh[6 - b7.gB.jI(player)]++;
		for (var kf = aEX(player), a7 = size[player] - 1; 0 <= a7; a7--)
			if (0 === id[kf + a7] && j3[kf + a7] === aEY) return j4[kf + a7] += aEc, void(j4[kf + a7] = j4[kf + a7] > a9.a1l ? a9.a1l : j4[kf + a7]);
		j3[kf + size[player]] = aEY, j4[kf + size[player]] = aEc, id[kf + size[player]] = 0, aEW[kf + size[player]] = 1, size[player]++, player < a9.ju && (aEY === a9.eZ ? aJ.yR(player, 5) : player === a9.eZ && ab.a4X(aEY))
	}, this.aEg = function(player, aEc, aEe) {
		var kf = aEX(player);
		j3[kf + size[player]] = 0, j4[kf + size[player]] = aEc, id[kf + size[player]] = aEe, aEW[kf + size[player]] = 0, size[player]++
	}, this.gG = function(player, e2) {
		var f8, kf;
		if (0 !== size[player])
			for (kf = aEX(player), size[player]--, f8 = e2; f8 < size[player]; f8++) j3[kf + f8] = j3[kf + f8 + 1], j4[kf + f8] = j4[kf + f8 + 1], id[kf + f8] = id[kf + f8 + 1], aEW[kf + f8] = aEW[kf + f8 + 1]
	}, this.aDc = function(player) {
		for (var f8, kf, aDm = [], a7 = ah.jv - 1; 0 <= a7; a7--)
			for (kf = aEX(ah.jx[a7]), f8 = size[ah.jx[a7]] - 1; 0 <= f8; f8--)
				if (0 === id[kf + f8] && j3[kf + f8] === player) {
					aDm.push(ah.jx[a7]);
					break
				} return aDm
	}
}

function cT() {
	var aEh;

	function aEj(player) {
		var e1, jZ;
		return b7.gB.jI(player) && player < a9.ju ? 0 : (e1 = aEh[bI.dn((a9.em - 1) * ac.gd[player], a9.je)], bc.jr() < 1920 && (e1 = Math.max(bI.dn(100 * (13440 - 6 * bc.jr()), 1920), e1)), jZ = aa.ja(player), ac.gr[player] > jZ && (e1 -= bI.dn(2 *
			e1 * (ac.gr[player] - jZ), jZ)), Math.min(Math.max(e1, 0), 700))
	}

	function aEu(mP) {
		for (var gd = ac.gd, jx = ah.jx, a7 = ah.jv - 1; 0 <= a7; a7--) {
			var gN = jx[a7];
			b7.gB.gE(gN, bI.dn(mP * gd[gN], 32))
		}
	}

	function aEr() {
		var uw = a9.eZ;
		bL.fM[0] = ac.gr[uw] - ac.a1j[uw]
	}

	function aEt(e2) {
		var uw = a9.eZ;
		ba.lh[e2] += ac.gr[uw] - ac.a1j[uw] - bL.fM[0]
	}
	this.dd = function() {
		for (var ep = a9.em, a7 = (aEh = new Uint16Array(ep), 0); a7 < ep; a7++) aEh[a7] = 100 + aEi(bI.dn(25600 * a7, ep - 4), 9)
	}, this.dW = function() {
		0 === a9.data.iIncomeType ? this.a8v = aEj : 1 === a9.data.iIncomeType ? this.a8v = function(player) {
			return bI.dn(a9.data.iIncomeValue * aEj(player), 64)
		} : this.a8v = function(player) {
			return bI.dn(a9.data.iIncomeData[player] * aEj(player), 64)
		}
	}, this.il = function() {
		if (bc.jr() % 10 == 9 && (function() {
				aEr();
				for (var jx = ah.jx, gr = ac.gr, a7 = ah.jv - 1; 0 <= a7; a7--) {
					var gN = jx[a7],
						aEs = bI.dn(aa.a8v(gN) * gr[gN], 1e4);
					b7.gB.gE(gN, Math.max(aEs, 1))
				}
				aEt(9)
			}(), function() {
				if (0 !== a9.data.aIncomeType) {
					if (aEr(), 1 === a9.data.aIncomeType)
						for (var gd = ac.gd, jx = ah.jx, mP = a9.data.aIncomeValue, a7 = ah.jv - 1; 0 <= a7; a7--) {
							var gN = jx[a7];
							b7.gB.gE(gN, bI.dn(mP * gd[gN], 128))
						} else 2 === a9.data.aIncomeType && function() {
							for (var gd = ac.gd, jx = ah.jx, mP = a9.data.aIncomeData, a7 = ah.jv - 1; 0 <= a7; a7--) {
								var gN = jx[a7];
								b7.gB.gE(gN, bI.dn(mP[gN] * gd[gN], 128))
							}
						}();
					aEt(18)
				}
			}(), bc.jr() % 100 == 99)) {
			if (aEr(), 0 === a9.data.tIncomeType) aEu(32);
			else if (1 === a9.data.tIncomeType) aEu(a9.data.tIncomeValue);
			else
				for (var gd = ac.gd, jx = ah.jx, mP = a9.data.tIncomeData, a7 = ah.jv - 1; 0 <= a7; a7--) {
					var gN = jx[a7];
					b7.gB.gE(gN, bI.dn(mP[gN] * gd[gN], 32))
				}
			aEt(8)
		}
	}, this.ja = function(player) {
		return Math.min(100 * ac.gd[player], a9.a2Z)
	}, this.nz = function(player, o0) {
		b7.gB.gE(o0, bL.fN[0]), ba.oN(player, o0), ab.aEl(player, bL.fN[0] + bL.fN[1]), ab.oO(o0, bL.fN[0]), b7.gB.ow(player)
	}, this.aEm = function() {
		for (var ep = ah.jv, y6 = ah.jx, kf = 0, a1k = ac.gr, a7 = 0; a7 < ep; a7++) kf += a1k[y6[a7]];
		return kf
	}, this.aEn = function(zB) {
		for (var gN, ep = ah.jv, y6 = ah.jx, kf = 0, a1k = ac.gr, en = bd.en, a7 = 0; a7 < ep; a7++) en[gN = y6[a7]] === zB && (kf += a1k[gN]);
		return kf
	}
}

function cV() {
	var aEy, aEz, aF0, aF1, aF2, aF3, aF4, aF5, aF6, aF7, aF8, aF9, aFA, aFB, aFC, aFD, aFE, aFF, aFH, aFI, a9w, aFJ, aFK, aFR, aFS, aFG = null,
		aFM = 0,
		aFN = !1,
		aFO = new Float32Array(4),
		aFP = 0,
		aFQ = !0,
		a86 = 400;

	function pd() {
		aF6 = Math.floor(+au.pb), aF7 = Math.floor(.5 * aF6)
	}

	function aFT() {
		var a7, aFY;
		for (tA.font = b7.pZ.ri(1, 100 * aF8), aFY = 80 / Math.floor(tA.measureText(b7.z3.xY(a9.a1l)).width), tA.font = b7.pZ.ri(1, 100), a7 = a9.em - 1; 0 <= a7; a7--) aF5[a7] = 100 / Math.floor(tA.measureText(ac.a4T[a7]).width), aF4[a7] = Math.min(
			aFY, aF5[a7])
	}

	function aFZ(a7) {
		return !bg.dr.data[7].value || (a7 = ac.gr[a7]) < 1e6 ? 1 : a7 < 1e7 ? aFO[0] : aFO[Math.min(Math.floor(Math.log10(a7)) - 6, 3)]
	}

	function aFX(hY) {
		aFF = !1, aFE = 1, aFC = aFD = 0, aFQ && (b7.pZ.textAlign(hY, 1), b7.pZ.textBaseline(hY, 1));
		for (var aFf, aFg, a7, aFh, fontSize, aFi, mD = iC / iD, mE = iE / iD, mQ = (au.a1 + iC) / iD, mR = (au.jO + iE) / iD, aFj = 0 !== ac.ll[a9.eZ] && aY.y8(a9.eZ), f8 = ah.jv - 1; 0 <= f8; f8--) a7 = ah.jx[f8], (fontSize = Math.floor(aFB * iD *
			aFZ(a7) * aF4[a7] * aF2[a7])) < aFA || aF6 <= fontSize || aF0[a7] + aF2[a7] > mD && aF0[a7] < mQ && aF1[a7] + aF3[a7] > mE && aF1[a7] < mR && (aFf = Math.floor(au.a1 * (aF0[a7] + aF2[a7] / 2 - mD) / (mQ - mD)), aFg = Math.floor(au
			.jO * (aF1[a7] + aF3[a7] / 2 - mE) / (mR - mE) - .1 * fontSize), aFh = aY.a6A[a7], hY.font = b7.pZ.ri(1 === ac.a1d[a7] ? 4 : 1, fontSize), hY.fillStyle = aFk(fontSize, aFh % 2), bg.dr.data[7].value ? aFl(hY, a7, fontSize, aFf,
			aFg, aFh) : aFm(a7, fontSize, aFf, aFg, hY), aFF = !0, 0 < a9w[a7] ? function(aFf, aFg, fontSize, a7, hY) {
			0 === jf[a7] ? af.wm.xP(aFI[a7]) ? (function(aFf, aFg, fontSize, player, oA, hY) {
				for (var vW = aFg, hX = (hY.globalAlpha = aFu(fontSize), aFZ(player) * (bg.dr.data[7].value ? aFP : aF5[player])), vV = aFf - .5 * fontSize / hX - .9 * fontSize, f9 = 0; f9 < 2; f9++) hY.fillText(af.wm.xJ(oA), vV, vW),
					vV = aFf + .5 * fontSize / hX + .9 * fontSize;
				hY.globalAlpha = 1
			}(aFf, aFg, fontSize, a7, aFI[a7], hY), aFo(aFf, aFg, fontSize, 0, 0, hY)) : af.wm.xR(aFI[a7]) ? (aFx(aFf, aFg, fontSize, aFI[a7], 0, hY), aFo(aFf, aFg, fontSize, 0, 1, hY)) : (aFx(aFf, aFg, fontSize, aFI[a7], 1, hY), aFo(aFf,
				aFg, fontSize, 1, 0, hY)) : aFx(aFf, aFg, fontSize, aFI[a7], 0, hY)
		}(aFf, aFg, fontSize, a7, hY) : 0 === jf[a7] && aFo(aFf, aFg, fontSize, 0, 0, hY), aFj && (0 < a9w[a7 + a9.em] || 0 < a9w[a7 + 2 * a9.em] || 0 < a9w[a7 + 3 * a9.em] || 0 < a9w[a7 + 4 * a9.em]) && function(aFf, aFg, fontSize, a7, hY) {
			var fA, gI = -1;
			for (fA = 4; 1 <= fA; fA--) 0 < a9w[a7 + fA * a9.em] && gI++;
			for (fA = 1; fA < 5; fA++) 0 < a9w[a7 + fA * a9.em] && (! function(aFf, aFg, fontSize, fA, a7, aFs, dm, hY) {
				var a17;
				if (1 === fA) {
					a7 = aFI[a7 + a9.em];
					if (!af.wm.xQ(a7)) return function(aFf, aFg, fontSize, oA, aFs, hY) {
						hY.globalAlpha = aFu(fontSize);
						aFf -= .534 * aFs * fontSize, aFs = aFg + 1.59 * fontSize;
						hY.font = b7.pZ.ri(0, .785 * fontSize), hY.fillText(af.wm.xJ(oA), aFf, aFs), hY.globalAlpha = 1
					}(aFf, aFg, fontSize, a7, aFs, hY);
					a17 = af.uv.wt[a7 - 1024 + af.wm.x4]
				} else a17 = 2 === fA ? aH.a3E()[4].canvas[+(dm < 255)] : (3 === fA ? aH.a3E()[5] : aH.a3E()[6]).canvas[0];
				a7 = af.uv.wu, dm = .8 * fontSize / a7, fA = aFf - .5 * dm * a7 - .534 * aFs * fontSize, aFf = aFg + 1.4 * dm * a7;
				hY.setTransform(dm, 0, 0, dm, fA, aFf), hY.globalAlpha = aFu(fontSize), hY.drawImage(a17, 0, 0), hY.globalAlpha = 1, hY.setTransform(1, 0, 0, 1, 0, 0)
			}(aFf, aFg, fontSize, fA, a7, gI, a9w[a7 + fA * a9.em], hY), gI -= 2)
		}(aFf, aFg, fontSize, a7, hY), (aFi = aF8 * fontSize) < aFA || (hY.font = b7.pZ.ri(1, aFi), aFg += Math.floor(.78 * fontSize), bg.dr.data[7].value ? aFm(a7, aFi, aFf, aFg, hY) : aFl(hY, a7, aFi, aFf, aFg, aFh)))
	}

	function aFm(a7, fontSize, ew, ey, hY) {
		var ___id = a7;
		var showName = a7 < a9.ju || !__fx.settings.hideBotNames;
		if (showName) hY.fillText(ac.a4T[a7], ew, ey), a7 < a9.ju && 2 !== ac.a1d[a7] || (a7 = fontSize / aF5[a7], hY.fillRect(ew - .5 * a7, ey + b7.pZ.xK * fontSize, a7, Math.max(1, .1 * fontSize)));
		bg.dr.data[7].value && __fx.settings.showPlayerDensity && (
			__fx.settings.coloredDensity && (hY.fillStyle = __fx.utils.textStyleBasedOnDensity(___id)),
			hY.fillText(__fx.utils.getDensity(___id), ew, showName ? ey + fontSize : ey)
		);
	}

	function aFl(hY, a7, fontSize, aFf, aFg, aFh) {
		var ___id = a7;
		a7 = b7.z3.xY(ac.gr[a7]);
		aFh >> 1 & 1 ? (hY.lineWidth = .05 * fontSize, hY.strokeStyle = aFk(fontSize, aFh % 2), hY.strokeText(a7, aFf, aFg)) : (1 < aFh && (hY.lineWidth = .12 * fontSize, hY.strokeStyle = aFk(fontSize, aFh), hY.strokeText(a7, aFf, aFg)), hY.fillText(
			a7, aFf, aFg));
		bg.dr.data[7].value || __fx.settings.showPlayerDensity && (__fx.settings.coloredDensity && (hY.fillStyle = __fx.utils.textStyleBasedOnDensity(___id)), hY.fillText(__fx.utils.getDensity(___id), aFf, aFg + fontSize))
	}

	function aFo(aFf, aFg, fontSize, aFs, aFt, hY) {
		var a3o = .95 * fontSize / aFK,
			aFf = aFf - .5 * a3o * aFJ + .8 * aFs * fontSize,
			aFs = aFg - 1.76 * a3o * aFK - (.35 - b7.pZ.xK + .7) * aFt * fontSize;
		hY.setTransform(a3o, 0, 0, a3o, aFf, aFs), hY.globalAlpha = aFu(fontSize), hY.drawImage(aX.get(4), 0, 0), hY.globalAlpha = 1, hY.setTransform(1, 0, 0, 1, 0, 0)
	}

	function aFx(aFf, aFg, fontSize, oA, aFs, hY) {
		var hS, vV, a3o;
		hY.globalAlpha = aFu(fontSize), af.wm.xQ(oA) ? (hS = af.uv.wu, hY.setTransform(a3o = 1.1 * fontSize / hS, 0, 0, a3o, vV = aFf - .5 * a3o * hS - .8 * aFs * fontSize, a3o = aFg - 1.55 * a3o * hS), hY.drawImage(af.uv.wt[oA - 1024 + af.wm.x4], 0,
			0), hY.setTransform(1, 0, 0, 1, 0, 0)) : (vV = aFf - .8 * aFs * fontSize, a3o = aFg - (.35 - b7.pZ.xK + 1) * fontSize, hY.fillText(af.wm.xJ(oA), vV, a3o)), hY.globalAlpha = 1
	}

	function aFk(fontSize, aFh) {
		return aF7 <= fontSize && fontSize < aF6 ? bd.aFz[aFh] + aFu(fontSize).toFixed(3) + ")" : bd.aG0[aFh]
	}

	function aFu(fontSize) {
		return aF7 <= fontSize && fontSize < aF6 ? 1 - (fontSize - aF7) / (aF6 - aF7) : 1
	}

	function aG9(hX, a1) {
		return 1 + Math.floor(aF9 * hX * a1)
	}

	function aG6(a7) {
		for (var left = aF0[a7], f8 = aF0[a7] - ac.iQ[a7] - 1; 0 <= f8; f8--)
			if (!aGA(a7, --left, aF1[a7], aF3[a7])) {
				left++;
				break
			} var right = aF0[a7];
		for (f8 = ac.iR[a7] - aF0[a7] - aF2[a7]; 0 <= f8; f8--)
			if (!aGA(a7, ++right + aF2[a7] - 1, aF1[a7], aF3[a7])) {
				right--;
				break
			} var ew = Math.floor((left + right) / 2),
			top = aF1[a7];
		for (f8 = aF1[a7] - ac.iS[a7] - 1; 0 <= f8; f8--)
			if (!aGB(a7, ew, --top, aF2[a7])) {
				top++;
				break
			} var bottom = aF1[a7];
		for (f8 = ac.iT[a7] - aF1[a7] - aF3[a7]; 0 <= f8; f8--)
			if (!aGB(a7, ew, ++bottom + aF3[a7] - 1, aF2[a7])) {
				bottom--;
				break
			} var ey = Math.floor((top + bottom) / 2);
		aG3(a7, ew, ey, aF2[a7], aF3[a7]) && (aF0[a7] = ew, aF1[a7] = ey)
	}

	function aG3(player, ew, ey, a1, jO) {
		es = Math.floor(.2 * a1);
		for (var es, fA = ew + a1 - 1; ew <= fA; fA--)
			if (!aGA(player, fA, ey, jO)) return;
		for (fA = ey + jO - 1 - (es = (es = Math.floor(.25 * jO)) < 1 ? 1 : es); ey + es <= fA; fA--)
			if (!aGB(player, ew, fA, a1)) return;
		return 1
	}

	function aGA(player, ew, ey, jO) {
		return aY.wM(player, 4 * (ey * bP.f0 + ew)) && aY.wM(player, 4 * ((ey + jO - 1) * bP.f0 + ew))
	}

	function aGB(player, ew, ey, a1) {
		return aY.wM(player, 4 * (ey * bP.f0 + ew)) && aY.wM(player, 4 * (ey * bP.f0 + ew + a1 - 1))
	}
	this.dW = function() {
		if (a86 = 0 === (a86 = bg.dr.data[11].value) ? 280 : 1 === a86 ? 187 : 112, aFF = !1, aFB = .88, aF8 = .5, aF9 = 1.8, aFA = 12 - 3 * bg.dr.data[9].value, aEz = aEy = 0, aF0 = new Uint16Array(a9.em), aF1 = new Uint16Array(a9.em), aF2 =
			new Uint16Array(a9.em), aF3 = new Uint16Array(a9.em), aF4 = new Float32Array(a9.em), aF5 = new Float32Array(a9.em), aFI = new Uint16Array(2 * a9.em), a9w = new Uint8Array(5 * a9.em), aFR = new Uint8Array(a9.em), aFS = new Uint8Array(
				a9.em), aFQ || (aFG = aFG || document.createElement("canvas")), pd(), aFD = aFC = 0, aFE = 1, bg.dr.data[7].value) {
			var a7, aFY;
			for (aFT(), tA.font = b7.pZ.ri(1, 100), aFY = 100 / Math.floor(tA.measureText("900 000").width), a7 = a9.em - 1; 0 <= a7; a7--) aF4[a7] = Math.min(aFY, 2 * aF5[a7]);
			aFP = aFY, aFO[0] = 100 / (aFY * Math.floor(tA.measureText("5 000 000").width)), aFO[1] = 100 / (aFY * Math.floor(tA.measureText("50 000 000").width)), aFO[2] = 100 / (aFY * Math.floor(tA.measureText("500 000 000").width)), aFO[3] =
				100 / (aFY * Math.floor(tA.measureText("1 000 000 000").width))
		} else aFT();
		! function() {
			var a7;
			for (a7 = a9.em - 1; 0 <= a7; a7--) ac.gd[a7] < 12 ? (aF0[a7] = ac.iQ[a7] + 1, aF1[a7] = ac.iS[a7] + 1, aF2[a7] = 1, aF3[a7] = 1) : (aF0[a7] = ac.iQ[a7], aF1[a7] = ac.iS[a7] + 1, aF2[a7] = 4, aF3[a7] = 2);
			if (a9.hB)
				for (a7 = 0; a7 < a9.ju; a7++) aF2[a7] = 0;
			aFJ = aX.get(4).width, aFK = aX.get(4).height
		}()
	}, this.aEl = function(gN, a4n) {
		a4n > 18 * ac.gd[gN] ? (aFS[gN] = 6, aY.a6A[gN] = 2 + aY.a6A[gN] % 2) : (aFR[gN] = 4, (aY.a6A[gN] < 2 || 3 < aY.a6A[gN]) && (aY.a6A[gN] = 6 + aY.a6A[gN] % 2))
	}, this.oO = function(gN, a4n) {
		a4n > 6 * ac.gd[gN] ? (aFS[gN] = 6, aY.a6A[gN] = 4 + aY.a6A[gN] % 2) : (aFR[gN] = 4, (aY.a6A[gN] < 4 || 5 < aY.a6A[gN]) && (aY.a6A[gN] = 8 + aY.a6A[gN] % 2))
	}, this.resize = function() {
		pd(), aFQ || aFX(aFH)
	}, this.a2V = function() {
		for (var a7 = 0; a7 < a9.ju; a7++) ac.iR[a7] - ac.iQ[a7] != 3 || ac.iT[a7] - ac.iS[a7] != 3 ? (aF0[a7] = ac.iQ[a7] + (ac.iR[a7] !== ac.iQ[a7] ? 1 : 0), aF1[a7] = ac.iS[a7], aF2[a7] = 1, aF3[a7] = 1) : (aF0[a7] = ac.iQ[a7], aF1[a7] = ac
			.iS[a7] + 1, aF2[a7] = 4, aF3[a7] = 2)
	}, this.p8 = function(player, e2, aFa) {
		! function(player, e2, aFa) {
			player += e2 * a9.em;
			0 === e2 ? aFI[player] === aFa && 0 < a9w[player] ? a9w[player] = 0 : (aFI[player] = aFa, a9w[player] = af.wm.xP(aFa) ? 255 : 64) : 1 === e2 ? (a9w[player] = 64, aFI[player] = aFa) : a9w[player] = aFa
		}(player, e2, aFa), 2 === a9.yF && this.lX(!0)
	}, this.t9 = function() {
		aFQ ? aFX(tA) : aFF && (1 !== aFE ? (tA.imageSmoothingEnabled = !0, tA.setTransform(aFE, 0, 0, aFE, 0, 0), tA.drawImage(aFG, -aFC / aFE, -aFD / aFE), tA.setTransform(1, 0, 0, 1, 0, 0), tA.imageSmoothingEnabled = !1) : tA.drawImage(aFG, -
			aFC, -aFD))
	}, this.a6u = function(hx, i0) {
		aFC += hx, aFD += i0
	}, this.zp = function(hx, i0) {
		ab.a6u(hx, i0)
	}, this.zoom = function(a0j, l0, l1) {
		aFE *= a0j, aFC = (aFC + l0) * a0j - l0, aFD = (aFD + l1) * a0j - l1
	}, this.lX = function(bp) {
		return !aFQ && !(!aFN && !bp && bc.eO < aFM + (1 === aFE && 0 === aFC && 0 === aFD && (a9.a2x() || a9.hB || 2 === a9.yF) ? 1e3 : a86) || (aFN = !1, aFM = bc.eO, aFX(aFH), 0))
	}, this.aFd = function(a7) {
		return aFZ(a7) * aF4[a7]
	}, this.aFe = function(player) {
		return aF4[player]
	}, this.il = function() {
		bc.jr() % 10 == 9 && (aFN = a9.a2z() && !a9.a2x()), !a9.a2x() && 4 <= ++aEz && function() {
			var a7, f8, f9;
			for (aEz = 0, f9 = 4; 1 <= f9; f9--)
				for (f8 = ah.jv - 1; 0 <= f8; f8--) a7 = ah.jx[f8] + f9 * a9.em, 0 < a9w[a7] && a9w[a7] < 255 && a9w[a7]--;
			if (2 !== a9.yF)
				for (f8 = ah.jv - 1; 0 <= f8; f8--) a7 = ah.jx[f8], 0 < a9w[a7] && a9w[a7] < 255 && a9w[a7]--
		}();
		var a7, f8, ep = Math.floor(.1 * ah.jv);
		for (ep = (ep = ep < 8 ? 8 : ep) > ah.jv ? ah.jv : ep, a7 = aEy + ep - 1; aEy <= a7; a7--) f8 = a7 % ah.jv, ! function(a7) {
			var hX = aFZ(a7) * aF4[a7];
			0 < aF2[a7] && aG3(a7, aF0[a7], aF1[a7], aF2[a7], aF3[a7]) ? ! function(a7) {
				for (var ew, ey, a1, jO, eT = !1, f9 = 0; f9 < 8; f9++) {
					if (a1 = aF2[a7] + 2, jO = aF3[a7] + 2, a1 > ac.iR[a7] - ac.iQ[a7] + 1 || jO > ac.iT[a7] - ac.iS[a7] + 1) return eT;
					if (ew = aF0[a7] - 1, ey = aF1[a7] - 1, !aG3(a7, ew, ey, a1, jO)) return eT;
					aF0[a7] = ew, aF1[a7] = ey, aF2[a7] = a1, aF3[a7] = jO, eT = !0
				}
				return eT
			}(a7) && function(a7, hX) {
				for (var ew, ey, a1, jO, eT = !1, aA4 = aF2[a7], mP = 1 + Math.floor(.02 * aA4), f9 = 1; f9 < 5; f9++) {
					if ((a1 = aA4 + f9 * mP) > ac.iR[a7] - ac.iQ[a7] + 1) return eT;
					if ((jO = aG9(hX, a1)) > ac.iT[a7] - ac.iS[a7] + 1) return eT;
					ew = ac.iQ[a7] + Math.floor(Math.random() * (ac.iR[a7] - ac.iQ[a7] + 2 - a1)), ey = ac.iS[a7] + Math.floor(Math.random() * (ac.iT[a7] - ac.iS[a7] + 2 - jO)), aG3(a7, ew, ey, a1, jO) && (aF0[a7] = ew, aF1[a7] = ey, aF2[
						a7] = a1, aF3[a7] = jO, eT = !0)
				}
				return eT
			}(a7, hX) && aG6(a7) : ! function(a7, hX) {
				var jO, ew = aF0[a7] + 1,
					ey = aF1[a7] + 1,
					a1 = aF2[a7] - 2;
				for (;;) {
					if (a1 < 1) {
						aF2[a7] = 0;
						break
					}
					if (jO = aG9(hX, a1), aG3(a7, ew, ey, a1, jO)) return aF0[a7] = ew, aF1[a7] = ey, aF2[a7] = a1, aF3[a7] = jO, 1;
					ew++, ey++, a1 -= 2
				}
				return
			}(a7, hX) ? function(a7, hX) {
				var ew, ey, a1, jO, f9, mV, jB = ac.iR[a7] - ac.iQ[a7] + 1,
					lF = Math.floor(.02 * jB);
				for (mV = -6 * (lF = lF < 1 ? 1 : lF), f9 = jB; mV <= f9; f9 -= lF)
					if (jO = aG9(hX, a1 = 0 < f9 ? f9 : 1), ew = ac.iQ[a7] + Math.floor(Math.random() * (ac.iR[a7] - ac.iQ[a7] + 2 - a1)), ey = ac.iS[a7] + Math.floor(Math.random() * (ac.iT[a7] - ac.iS[a7] + 2 - jO)), aG3(a7, ew, ey, a1,
							jO)) return aF0[a7] = ew, aF1[a7] = ey, aF2[a7] = a1, aF3[a7] = jO
			}(a7, hX) : aG6(a7)
		}(ah.jx[f8]);
		aEy = (aEy += ep) % ah.jv
	}, this.lS = function() {
		var a7, gN, hg, hh;
		if (bc.jr() % 4 == 1)
			for (a7 = ah.jv - 1; 0 <= a7; a7--) gN = ah.jx[a7], aY.a6A[gN] < 2 || ((hg = Math.max(aFR[gN] - 1, 0)) === (hh = Math.max(aFS[gN] - 1, 0)) ? 0 === hg && (aY.a6A[gN] %= 2) : 0 === hh && aY.a6A[gN] < 6 && (aY.a6A[gN] += 4), aFR[gN] =
				hg, aFS[gN] = hh)
	}, this.a4X = function(player) {
		var a7 = player + 2 * a9.em,
			dm = a9w[a7];
		return 0 < dm && (aJ.yM(50, player), a9w[a7] = 0, 255 === dm)
	}, this.a3Y = function(player) {
		return 255 === a9w[player + 2 * a9.em]
	}
}

function cX() {
	var aGC, aGD;
	this.dW = function() {
		aGC =
			"Abbasid Caliphate;Aceh s;Achaemenid Z;Afsharid z;Aghlabid Emirate;Ahom z;Akkadian Z;Aksumite Z;Akwamu;Alaouite z;Almohad Caliphate;Almoravid z;Angevin Z;Aq Qoyunlu;Armenian Z;Assyria;Ashanti Z;Austrian Z;Austria-Hungary;Ayyubid z;Aztec Z;Aulikara Z;Babylonian Z;Balhae;Banten s;S Banjar;Bamana Z;Bengal s;Benin Z;Kadamba z;Bornu Z;E Brazil;Britannic Z;British Z;British Raj;Bruneian Z;Bukhara Z;Burgundian State;Buyid z;Byzantine Z;Caliphate of Córdoba;Cao Wei;Carthaginian Z;Cebu Rajahnate;Chagatai Khanate;Chalukya z;Chauhan z;Chavín Z;Chenla;Chera z;Chola z;Comanche Z;Congo Free State;Crimean Khanate;Dacian Z;Delhi s;Demak s;Durrani Z;Dutch Z;Egyptian Z;Elamite Z;Exarchate of Africa;Abyssinia;Fatimid Caliphate;First French Z;Frankish Z;Funan;Gallic Z;Gaza Z;Republic of Genoa;German Z;Ghana Z;Ghaznavid z;Ghurid z;Goguryeo;Goryeo;Gorkha Z;Göktürk Khaganate;Golden Horde;S Gowa;Seljuq Z;Gupta Z;Hafsid Y;Han z;Hanseatic League;E Harsha;Hephthalite Z;Hittite Z;Holy Roman Z;Hotak z;Hoysala Z;Hunnic Z;Husainid z;Idrisid z;Ilkhanate;K Israel;K Judah;Inca Z;Italian Z;E Japan;Jin z;Johor Z;Jolof Z;Joseon;Kaabu Z;Kachari Y;Kalmar Union;Kanem Z;Kanva z;Kara-Khanid Khanate;Kazakh Khanate;Khazar Khaganate;Khmer Z;Khilji z;Khwarazmian z;Kievan Rus';Konbaung z;Kong Z;Korean Z;Kushan Z;K Kush;Lakota;Latin Z;Later Lê z;Liao z;Lodi s;Khmer Z;Macedonian Z;Majapahit Z;Mali Z;Malacca Z;Mamluk s;Manchukuo;Maratha Z;Marinid z;Massina Z;Mataram s;Mauretania;Mauryan Z;Median Z;Mlechchha z;Ming z;Mitanni Z;Mongol Z;Mughal Z;Nanda Z;Nguyễn z;North Sea Z;E Nicaea;Numidia;Omani Z;Ottoman Z;Oyo Z;Pagan Z;Pahlavi z;Pala Z;Palmyrene Z;Parthian Z;Pontic Z;Portuguese Z;K Prussia;Ptolemaic Z;Qajar z;Qara Qoyunlu;Qin z;Qing z;Ramnad Sethupathis;Rashidun Caliphate;Rashtrakuta z;Roman Z;Rouran Khaganate;Rozwi Z;Rustamid z;Russian Z;Tsardom of Russia;Saadi z;Safavid z;Saffarid z;Sassanid z;Satavahana z;Samanid Z;Soviet Union;Saudeleur z;Duchy of Savoy;Seleucid Z;Serbian Z;Shu Han;Shang z;Siam Z;Sikh Z;Singhasari;Sokoto Caliphate;Song z;Songhai Z;Spanish Z;Srivijaya Z;Sui z;K Mysore;Shunga Z;S Sulu;Sumer;Sur Z;Swedish Z;Tahirid z;Tang z;Tây Sơn z;S Ternate;E Thessalonica;German Reich;Tibetan Z;Tondo z;S Tidore;Timurid Z;K Tlemcen;E Trebizond;Toltec Z;Toungoo z;Toucouleur Z;Tu'i Tonga Z;Turgesh Khaganate;Umayyad Caliphate;Uyunid Emirate;Uyghur Khaganate;Uzbek Khanate;Vandal Y;Vijayanagara Z;Republic of Venice;Wari Z;Wassoulou Z;Wattasids;Western Roman Z;Eastern Wu;Western Xia z;Xin z;Yuan z;Zand z;Zhou z;Zulu Z;Yugoslavia;Kosovo;Sikkim;Kanem–Bornu Z;Wadai Z;Ethiopian Z;Rozvi Z;Sasanian Z;E Vietnam;Shilluk Y;K Aksum;Gwiriko Y;Toro Y;Malindi Y;K Loango;K Mapungubwe;Ryukyu Y;K Cyprus;K Jerusalem;Garhwal Y;K Nepal;K Cambodia;Champa Y;Hanthawaddy Y;Phayao Y;K Sardinia;K Sicily;K Gwynedd;K Scotland;K Desmond;K Poland;K Hungary;K Croatia;K Bohemia;Albanian Y;K Georgia;K Portugal;Khanate of Sibir;K Romania;Cossack Hetmanate;Duchy of Bouillon;K Ireland;Lordship of Ireland;K Italy;Republic of Pisa;Idrisid z;Almoravid z;Almohad Caliphate;Marinid z;Wattasid z;Saadian z;Republic of Salé;Rif Republic;K Kush;Makuria;Alodia;Ayyubid z;Mamluk s;Egypt Eyalet;K Fazughli;S Sennar;S Darfur;Mahdist State;S Egypt;K Egypt;Emirate of Cyrenaica;K Libya;Republic of Egypt;Republic of the Sudan;United Arab Republic;Libyan Arab Republic;Zirid z;Hafsid z;K Kuku;Regency of Algiers;Gurunsi;Liptako;Tenkodogo;Wogodogo;Yatenga;Bilanga;Bilayanga;Bongandini;Con;Macakoali;Piela;Nungu;K Sine;K Saloum;K Baol;K Cayor;K Waalo;Bundu;Bonoman;Gyaaman;Denkyira;Mankessim Y;K Dahomey;Oyo Z;K Nri;Aro Confederacy;Kwararafa;Biafra;Buganda;Bunyoro;Ankole;Busoga;Tanganyika;Kuba Y;K Luba;K Lunda;Yeke Y;K Ndongo;Kasanje Y;K Matamba;Mbunda Y;Chokwe Y;Kazembe Y;K Butua;Ndebele Y;Mthethwa Z;Bophuthatswana;Ciskei;Transkei;Venda;Rhodesia;Kart z;Nogai Horde;Khanate of Bukhara;Khanate of Khiva;Khamag Mongol;Northern Fujiwara;Kamakura Shogunate;Ashikaga Shogunate;Jaxa;Republic of Ezo;Jiangxi Soviet;Hunan Soviet;Guangzhou Commune;Gojoseon;Alaiye;Beylik of Bafra;Kara Koyunlu;Kars Republic;K Iraq;Arab Federation;Kar-Kiya z;Baduspanids;Marashiyan z;Afrasiyab z;Mihrabanid z;Safavid Iran;Sheikhdom of Kuwait;Bani Khalid Emirate;Emirate of Diriyah;Emirate of Najd;Muscat and Oman;Emirate of Riyadh;S Najd;K Hejaz;Fadhli s;Emirate of Beihan;Emirate of Dhala;S Lahej;Republic of Kuwait;K Cochin;Jaffna Y;Laur Y;Pandya z;Jaunpur s;Jaintia Y;Hyderabad State;Travancore;Udaipur State;Manikya z;Lan Xang;K Vientiane;K Champasak;Lao Issara;K Laos;Pyu States;Ava;Mon Ys;Pegu;K Mrauk U;Taungoo z;Shan States;Arakan;Raktamaritika;Singhanavati;Dvaravati;Ngoenyang;Hariphunchai;Tambralinga;Lavo Y;Langkasuka;Sukhothai Y;S Singora;Ayutthaya Y;Thonburi Y;Lan Na;Pattani Y;Jambi s;Palembang s;S Deli;S Langkat;S Serdang;S Cirebon;K Pajang;K Bali;Bima s;K Larantuka;K Banggai;Luwu;S Bone;Caucasian Albania;Kabardia;Circassia;K Abkhazia;Elisu s;Avar Khanate;Caucasian Imamate;K Imereti;K Kartli;K Kakheti;Crown of Aragon;Emirate of Granada;K Majorca;Crown of Castile;K Haiti;Cocollán;Zapotec Civilization;Mosquito Y;Somoza Regime;Iroquois Confederacy;Cherokee Nation;Vermont Republic;State of Muskogee;K Alo;K Sigave;K Fiji;K Nauru;K Chile;Muisca Confederation;El Stronato;K Chimor;Jungle Republic;Liga Federal;Supreme Junta;Weimar Republic;K Bavaria;Bremen;Frankfurt;Hamburg;K Hanover;Holstein;Lippe;Nassau;Oldenburg;Pomerania;Reuss;Saxe-Altenburg;Saxony;Schleswig;Waldeck;Württemberg;Helvetic Republic;Republic of Florence;Duchy of Urbino;Republic of Cospaia;Duchy of Lucca;Duchy of Mantua;Duchy of Milan;Papal States"
			.split(";"), aGD =
			"Pestilent Dominion;Wretched Realm;Damned Province;Corrupt Zone;Cursed Territory;Blight Nation;Haunted Expanse;Malevolent State;Ruined Empire;Contaminated Land;Epidemic Domain;Forsaken District;Abandoned Wasteland;Necrotic Enclave;Tainted Domain;Decayed Principality;Infested Region;Malignant Territory;Toxic Dominion;Ravaged Sector;Ghostly Realm;Plagued Commonwealth;Afflicted State;Desolate Nation;Apocalyptic Zone;Radiated Province;Deathly District;Pestilence Haven;Doom Territory;Malefic Expanse;Abandoned State;Cursed Haven;Corroded Zone;Hauntland;Noxious Nation;Infected Enclave;Ruinous Domain;Wasteland Woe;Rotten Principality;Voided Land;Vile Dominion;Catastrophic Region;Eerie Expanse;Desolation State;Forsaken Outpost;Contagion District;Damaged Province;Abhorrent Sector;Accursed Nation;Doomstruck Land;Radiant Ruin;Deathly Enclave;Malefic Dominion;Plague District;Infected Haven;Corrupt State;Pestilent Territory;Razed Realm;Haunted Wasteland;Toxic Sector;Cursed Dominion;Decaying Province;Forsaken Enclave;Ruinous Region;Malignant Haven;Infested State;Ghostly Nation;Tainted Territory;Damned District;Radiated Dominion;Desolate Expanse;Apocalyptic Land;Death Zone;Wretched State;Malevolent Haven;Plagued Nation;Noxious Domain;Voided Territory;Eerie Sector;Accursed Province;Necrotic District;Doom Haven;Haunt Realm;Rotten Nation;Forsaken Territory;Infected State;Abhorrent Expanse;Malignant Land;Toxic Dominion;Ruined District;Ghostland;Cursed Sector;Radiant Nation"
			.split(";");
		for (var a4p = ["K ", " Y", "E ", " Z", " z", " s", "S "], aGE = ["Kingdom of ", " Kingdom", "Empire of ", " Empire", " Dynasty", " Sultanate", "Sultanate of "], a7 = aGC.length - 1; 0 <= a7; a7--)
			for (var f8 = a4p.length - 1; 0 <= f8; f8--) aGC[a7] = aGC[a7].replace(a4p[f8], aGE[f8]);
		if (__fx.settings.realisticNames) aGC = realisticNames;
	}, this.a2k = function() {
		var ep = a9.ju,
			a4T = ac.a4T,
			z5 = ac.z5,
			playerNamesData = a9.data.playerNamesData;
		if (!playerNamesData || playerNamesData.length < ep)
			for (var a7 = 0; a7 < ep; a7++) a4T[a7] = z5[a7] = "Player " + av.jC(1e3);
		else
			for (a7 = 0; a7 < ep; a7++) a4T[a7] = z5[a7] = playerNamesData[a7]
	}, this.a3 = function() {
		if (9 === a9.kE) {
			for (var e1 = av.random(), aGK = aGC, aGL = aGD, ep = aGK.length, kf = a9.data.teamPlayerCount[7], a4T = ac.a4T, z5 = ac.z5, a7 = kf - 1; a7 >= a9.ju; a7--) a4T[a7] = z5[a7] = aGK[(a7 + e1) % ep];
			for (ep = aGL.length, a7 = kf; a7 < a9.em; a7++) a4T[a7] = z5[a7] = aGL[a7 % ep]
		} else(2 === a9.data.playerNamesType ? function() {
			for (var ep = a9.em, a4T = ac.a4T, z5 = ac.z5, playerNamesData = a9.data.playerNamesData, a7 = a9.ju; a7 < ep; a7++) a4T[a7] = z5[a7] = playerNamesData[a7]
		} : 1 === a9.data.playerNamesType ? function() {
			for (var a4T = ac.a4T, z5 = ac.z5, a7 = a9.ju; a7 < a9.em; a7++) a4T[a7] = z5[a7] = "Bot " + av.jC(1e3)
		} : function() {
			for (var aGK = aGC, ep = aGK.length, e1 = av.random(), a4T = ac.a4T, z5 = ac.z5, a7 = a9.ju; a7 < a9.em; a7++) a4T[a7] = z5[a7] = aGK[(a7 + e1) % ep]
		})()
	}
}

function cr() {
	this.aGM = [], this.aGN = [], this.dW = function() {
		this.aGM = [], this.aGN = []
	}, this.il = function() {
		0 <= this.aGM.length && this.aGO(this.aGM), 0 <= this.aGN.length && this.aGO(this.aGN)
	}, this.aGO = function(g) {
		for (var f9 = -1, a7 = g.length - 1; 0 <= a7; a7--)
			if (g[a7].eO--, g[a7].eO <= 0) {
				f9 = a7;
				break
			} for (a7 = f9; 0 <= a7; a7--) g.shift()
	}, this.a3M = function(id, y6, aGP) {
		return this.fB(this.aGM, id, y6, aGP)
	}, this.aGQ = function(id, y6, aGP) {
		return this.fB(this.aGN, id, y6, aGP)
	}, this.fB = function(g, id, y6, aGP) {
		return ! function(g, id, y6) {
			var a7, kJ;
			for (a7 = y6.length - 1; 0 <= a7; a7--)
				for (kJ = g.length - 1; 0 <= kJ; kJ--)
					if (g[kJ].player === y6[a7] && id === g[kJ].id) return 1;
			return
		}(g, id, y6) && (aGP && function(g, id, y6) {
			var a7;
			for (a7 = y6.length - 1; 0 <= a7; a7--) g.push({
				player: y6[a7],
				id: id,
				eO: 384
			})
		}(g, id, y6), !0)
	}
}

function cW() {
	this.z5 = new Array(a9.em), this.a4T = new Array(a9.em), this.a1d = new Uint8Array(a9.em), this.ll = new Uint8Array(a9.em), this.iQ = new Uint16Array(a9.em), this.iS = new Uint16Array(a9.em), this.iR = new Uint16Array(a9.em), this.iT =
		new Uint16Array(a9.em), this.gd = new Uint32Array(a9.em), this.vx = new Uint32Array(a9.em), this.gr = new Uint32Array(a9.em), this.gH = null, this.gV = null, this.gW = null, this.fF = null, this.ov = new Uint16Array(a9.em), this.iu =
		new Uint16Array(a9.em), this.iv = new Uint16Array(a9.em), this.ys = new Uint16Array(a9.em), this.yx = new Uint8Array(a9.em), this.a1j = new Uint16Array(a9.em), this.dW = function() {
			this.z5.fill(""), this.a4T.fill(""), this.a1d.fill(0), this.ll.fill(0), this.iQ.fill(0), this.iS.fill(0), this.iR.fill(0), this.iT.fill(0), this.gd.fill(0), this.vx.fill(0), this.gr.fill(0), this.gH = new Array(a9.em), this.gV =
				new Array(a9.em), this.gW = new Array(a9.em), this.fF = new Array(a9.em), this.ov.fill(0), this.iu.fill(0), this.iv.fill(0), this.ys.fill(0), this.yx.fill(0), this.a1j.fill(0)
		}
}

function cp() {
	this.aAK = function(player) {
		aC.lk(player), a9.yH++, ac.a1d[player] = 2, ac.ys[player] = bf.ym.aDl(), player === a9.eZ && (aT.show(!1, !1), aS.a8j(), bO.result.yv()), ab.a4X(player)
	}
}

function cQ() {
	this.jx = null, this.jv = 0, this.a2o = function() {
		for (this.jv = 0, a7 = a9.em - 1; 0 <= a7; a7--) 0 !== ac.ll[a7] && this.jv++;
		this.jx = new Uint16Array(this.jv);
		for (var ep = 0, a7 = 0; a7 < a9.em; a7++) 0 !== ac.ll[a7] && (this.jx[ep++] = a7)
	}, this.lR = function() {
		for (var gd = ac.gd, vx = ac.vx, yx = ac.yx, jx = ah.jx, a7 = ah.jv - 1; 0 <= a7; a7--) {
			var dm, gN = jx[a7];
			gd[gN] <= bI.dn(vx[gN], 4) ? ag.df(gN) : gd[gN] >= vx[gN] ? (dm = gd[gN], 250 <= (vx[gN] = dm) && (yx[gN] = 1)) : vx[gN] -= Math.max(1, bI.dn(vx[gN] - gd[gN], 1e3))
		}
		this.aGU()
	}, this.aGU = function() {
		for (var ll = ac.ll, jw = this.jx, a9N = this.jv, a7 = a9N - 1; 0 <= a7; a7--) 0 === ll[jw[a7]] && (jw[a7] = jw[--a9N]);
		this.jv = a9N
	}
}

function cY() {
	var aGV;
	this.kO = null, this.kN = 0, this.dW = function() {
		aGV = [], 9 === a9.kE && this.aGW()
	}, this.aGW = function() {
		var aGX = [57, 85, 105, 150, 190, 333];
		if (this.kO = [0, 0, 0, 0, 0, 0], this.kN = 0, a9.ju <= aGX[0]) this.kN = aGX[0] - a9.ju, this.kO[0] = a9.em - a9.ju - this.kN;
		else
			for (var a7 = 1; a7 < 6; a7++)
				if (a9.ju <= aGX[a7]) {
					this.kO[a7 - 1] = 512 - aGX[a7 - 1] - bI.dn((512 - aGX[a7 - 1]) * (a9.ju - aGX[a7 - 1]), aGX[a7] - aGX[a7 - 1]), this.kO[a7] = 512 - a9.ju - this.kO[a7 - 1];
					break
				} a9.kI = a9.em - a9.ju, a9.data.numberTeams = (0 < a9.ju) + (0 < a9.kI), a9.data.playerCount = a9.vT = a9.ju + a9.kI, a9.data.teamPlayerCount = new Uint16Array([0, 0, 0, 0, 0, 0, 0, a9.ju + this.kN, a9.kI - this.kN]), a9.a2e
		.a2i()
	}, this.aDs = function(player) {
		aGV.push({
			player: player,
			gI: 14 + av.jC(20)
		})
	}, this.il = function() {
		if (9 === a9.kE)
			for (var a7 = aGV.length - 1; 0 <= a7; a7--) --aGV[a7].gI <= 0 && (ab.p8(aGV[a7].player, 0, af.wm.x7 + af.wm.xL), aGV.splice(a7))
	}
}

function d6() {
	function aGm() {
		return {
			f0: bP.f0,
			f1: bP.f1,
			us: bP.us,
			uo: bP.uo,
			up: bP.up,
			ut: bP.ut,
			eV: bP.eV,
			mapSeed: bP.mapSeed
		}
	}

	function aGe(a7) {
		return 1 !== a7 && bP.aAf(a7) && a7 !== bP.aGn()
	}
	this.aGZ = 22, this.aE3 = 4096, this.f0 = 0, this.f1 = 0, this.us = null, this.uo = null, this.up = null, this.ut = null, this.eV = 0, this.mapSeed = 0, this.uq = !1, this.ur = new aGa, this.ui = new aGb, this.a4v = new aGc, this.dW =
function() {
		this.ui.dW()
	}, this.a3 = function(map, aGd) {
		((map %= this.aGZ) !== this.eV || aGe(this.eV) && aGd !== this.mapSeed) && (this.uq = !1, this.ur.aGf(), av.a2j(map), this.eV = map, this.mapSeed = aGd, aGe(map) && (bP.ui.uj[map].aGg = aGd), this.aAf(this.eV) ? (map = bP.ui.uj[this.eV],
			this.f0 = map.a1, this.f1 = map.jO, av.a2j(map.aGg), al.a3([this.f0, this.f1, map.lq, map.ln]), aGi(), ak.aGj(), al.aGk()) : aGh())
	}, this.aGl = function(map, aGd) {
		var fX = aGm(),
			map = (this.a3(map, aGd), this.ur.aGf(), aGm());
		return this.f0 = fX.f0, this.f1 = fX.f1, this.us = fX.us, this.uo = fX.uo, this.up = fX.up, this.ut = fX.ut, this.eV = fX.eV, this.mapSeed = fX.mapSeed, map
	}, this.a33 = function(canvas) {
		canvas && this.us !== canvas && (this.f0 = canvas.width, this.f1 = canvas.height, this.us = canvas, this.uo = this.us.getContext("2d", {
			alpha: !1
		}), this.hV = this.uo.getImageData(0, 0, this.f0, this.f1), this.ut = this.hV.data, this.eV = this.aGn(), this.mapSeed = 0, bP.ui.uj[this.eV].name = a9.data.mapName)
	}, this.eU = function(a7) {
		return 3 === a7 || 7 === a7 || 9 === a7 || 21 === a7 || a7 === this.aGn()
	}, this.aGo = function(a7) {
		return 2 === a7 || 7 === a7 || 9 === a7 || 20 === a7
	}, this.aGp = function(a7) {
		return 1 === a7
	}, this.aGn = function() {
		return this.aGZ
	}, this.aAf = function(a7) {
		return void 0 === this.ui.uj[a7].aGq
	}, this.a32 = function(pR) {
		return 0 === pR.mapType ? pR.mapProceduralIndex < 10 ? pR.mapProceduralIndex : 10 + pR.mapProceduralIndex : 1 === pR.mapType ? pR.mapRealisticIndex + 10 : void 0
	}, this.aAg = function(pR, aGr) {
		0 === pR.mapType ? pR.mapProceduralIndex = aGr < 10 ? aGr : aGr - 10 : 1 === pR.mapType && (pR.mapRealisticIndex = aGr - 10)
	}
}

function aGa() {
	function aH0() {
		bP.ur.il()
	}

	function aH6(gN, aH5) {
		0 < aH5 && (bP.ut[gN] += aH5, bP.ut[gN + 1] += aH5, bP.ut[gN + 2] += aH5)
	}

	function hI(gN) {
		return bP.ut[gN + 2] > bP.ut[gN] && bP.ut[gN + 2] > bP.ut[gN + 1]
	}
	this.a76 = -1, this.eN = 0, this.aGs = 0, this.aGt = 8, this.aGu = 32, this.aGv = 8, this.aGw = 32, this.aGx = [0, 0], this.a6A = [0, 0, 0, 0], this.iL = null, this.aGy = !0, this.aGz = !1, this.aGf = function() {
		-1 !== this.a76 && clearTimeout(this.a76), this.a76 = -1, this.iL = null, al.aGk()
	}, this.dW = function() {
		7 === aW.zS() || this.aGz || (this.aGy = !0, this.eN = 0, this.aGs = 1, this.aGx = [bP.ui.uj[bP.eV].vB[0], bP.ui.uj[bP.eV].vC[0]], this.a6A = [bP.ui.uj[bP.eV].aGq[3], bP.ui.uj[bP.eV].aGq[4], bP.ui.uj[bP.eV].aGq[5], bP.ui.uj[bP.eV].aGq[
			6]], this.aGt = bP.ui.uj[bP.eV].aGq[7], this.aGu = bP.ui.uj[bP.eV].aGq[8], this.aGv = bP.ui.uj[bP.eV].aGq[9], this.aGw = bP.ui.uj[bP.eV].aGq[10], this.aGy ? this.a76 = setTimeout(aH0, 16) : this.il())
	}, this.il = function() {
		if (8 === aW.zS() && aD.m4()) this.a76 = setTimeout(aH0, 16);
		else {
			if (0 === this.eN) {
				var aGg = av.aH1();
				if (av.a2j(bP.ui.uj[bP.eV].aGq[2]), al.a3([bP.f0, bP.f1, bP.ui.uj[bP.eV].aGq[0], bP.ui.uj[bP.eV].aGq[1]]), av.a2j(aGg), this.iL = al.aH2(), this.eN++, this.aGy) return void(this.a76 = setTimeout(aH0, 16))
			}
			for (var gN, eb, aGg = this.aGy ? 10 : 1e6, aGg = bP.f1 - this.aGs - 1 < aGg ? bP.f1 - this.aGs - 1 : aGg, wA = this.aGs + aGg, ey = this.aGs; ey < wA; ey++)
				for (var ew = 1; ew < bP.f0 - 1; ew++) hI(gN = 4 * (eb = ew + ey * bP.f0)) ? this.aH3(gN, eb, 1) : (this.aH3(gN, eb, 0), function(ew, ey, gN) {
					return 1 < ew && hI(gN - 4) || ew < bP.f0 - 2 && hI(gN + 4) || 1 < ey && hI(gN - 4 * bP.f0) || ey < bP.f1 - 2 && hI(gN + 4 * bP.f0)
				}(ew, ey, gN) && this.aH4(ew, ey));
			this.aGs = wA, this.aGs >= bP.f1 - 1 ? (bP.uo.putImageData(bP.up, 0, 0, 1, 1, bP.f0 - 2, bP.f1 - 2), bc.de = !0, this.aGf()) : this.aGy && (this.a76 = setTimeout(aH0, 16))
		}
	}, this.aH3 = function(gN, eb, e2) {
		aH6(gN, Math.floor(this.aGx[e2] + this.a6A[e2] * this.iL[eb] / 1e4) - bP.ut[gN])
	}, this.aH7 = function(gN, e1, aH8, e2, a6A) {
		aH6(gN, Math.floor(this.aGx[e2] + (1 - e1 / aH8) * a6A) - bP.ut[gN])
	}, this.aH4 = function(l0, l1) {
		for (var gN, e1, aH8, a6w = l0 - this.aGu, aH9 = l1 - this.aGu, wB = l0 + this.aGu, wA = l1 + this.aGu, a6w = a6w < 1 ? 1 : a6w, wB = wB > bP.f0 - 2 ? bP.f0 - 2 : wB, wA = wA > bP.f1 - 2 ? bP.f1 - 2 : wA, ey = aH9 < 1 ? 1 : aH9; ey <=
			wA; ey++)
			for (var ew = a6w; ew <= wB; ew++) hI(gN = 4 * (ew + ey * bP.f0)) ? (aH8 = this.aGt + (this.aGu - this.aGt) * this.iL[ew + bP.f0 * ey] / 1e4, Math.abs(l0 - ew) > aH8 || Math.abs(l1 - ey) > aH8 || aH8 <= (e1 = Math.sqrt((l0 - ew) * (
				l0 - ew) + (l1 - ey) * (l1 - ey))) || this.aH7(gN, e1, aH8, 1, this.a6A[3])) : (aH8 = this.aGv + (this.aGw - this.aGv) * this.iL[ew + bP.f0 * ey] / 1e4, Math.abs(l0 - ew) > aH8 || Math.abs(l1 - ey) > aH8 || aH8 <= (e1 = Math
				.sqrt((l0 - ew) * (l0 - ew) + (l1 - ey) * (l1 - ey))) || this.aH7(gN, e1, aH8, 0, this.a6A[2]))
	}
}

function aGi() {
	2 === bP.eV ? aHA([256], [256], [0, 205, 256], [500, 500, 0], [0, 0, 0]) : 7 === bP.eV ? aHA([512], [512], [0, 380, 512], [500, 500, 0], [0, 0, 0]) : 8 === bP.eV ? aHA([410], [410], [0, 120, 210], [0, 80, 640], [0, 0, 0]) : 9 === bP.eV ? aHA([
		512], [512], [0, 70, 180, 200, 290, 420, 512], [500, 500, 0, 0, 500, 500, 0], [0, 0, 0, 0, 0, 0, 0]) : 20 === bP.eV && aHA([512], [512], [0, 380, 512], [500, 500, 0], [0, 0, 0])
}

function aHA(aHB, aHC, aHD, aHE, aHF) {
	for (var ew, ey, aHH, aHI, a0j, aHJ, hw = aHB.length - 1, aHG = bP.f0 + bP.f1, ep = (aHG *= aHG, aHD.length), a7 = ep - 1; 0 <= a7; a7--) aHD[a7] *= aHD[a7];
	var aHK = new Array(ep),
		aHL = new Array(ep),
		aHM = new Array(ep),
		fH = al.aH2();
	if (void 0 === aHF)
		for (aHF = new Array(ep), a7 = ep - 1; 0 <= a7; a7--) aHF[a7] = 0;
	for (a7 = 1; a7 < ep; a7++) aHK[a7] = aHD[a7] - aHD[a7 - 1], aHL[a7] = aHE[a7] - aHE[a7 - 1], aHM[a7] = aHF[a7] - aHF[a7 - 1];
	for (ew = bP.f0 - 1; 0 <= ew; ew--)
		for (ey = bP.f1 - 1; 0 <= ey; ey--) {
			for (aHH = aHG, a7 = hw; 0 <= a7; a7--) aHH = (aHI = (ew - aHB[a7]) * (ew - aHB[a7]) + (ey - aHC[a7]) * (ey - aHC[a7])) < aHH ? aHI : aHH;
			for (a0j = aHE[ep - 1], aHJ = aHF[ep - 1], a7 = 1; a7 < ep; a7++)
				if (aHH < aHD[a7]) {
					a0j = aHE[a7 - 1] + aDL((aHH - aHD[a7 - 1]) * aHL[a7], aHK[a7]), aHJ = aHF[a7 - 1] + aDL((aHH - aHD[a7 - 1]) * aHM[a7], aHK[a7]);
					break
				} aHN(bP.f0 * ey + ew, a0j, aHJ, fH)
		}
}

function aHN(e2, a0j, aHJ, fH) {
	a0j < 500 ? fH[e2] = bI.dn(fH[e2] * a0j * 2, 1e3) : 500 < a0j && (fH[e2] += bI.dn(2 * (1e4 - fH[e2]) * (a0j - 500), 1e3)), fH[e2] += bI.dn(aHJ * (10 * a0j - fH[e2]), 1e3)
}

function ca() {
	var aHO;

	function aHY(a17, hX, ew, ey, globalAlpha) {
		bP.uo.save(), bP.uo.globalAlpha = globalAlpha, bP.uo.imageSmoothingEnabled = !1, bP.uo.scale(hX, hX), bP.uo.drawImage(a17, Math.floor(ew * (bP.f0 / hX - a17.width)), Math.floor(ey * (bP.f1 / hX - a17.height))), bP.uo.restore()
	}
	this.a4s = 0, this.a4t = 0, this.a4u = 0, this.a4v = 0, this.dW = function() {
		(aHO = new Array(bP.aGZ))[0] = {
			a1: [0, 5e3, 8e3, 1e4],
			e1: [220, 250, 255, 220],
			rx: [190, 220, 0, 0],
			f9: [170, 200, 0, 0]
		}, aHO[1] = {
			a1: [0, 4e3, 5e3, 6e3, 1e4],
			e1: [25, 0, 100, 0, 25],
			rx: [25, 0, 0, 0, 25],
			f9: [25, 0, 0, 0, 25]
		}, aHO[2] = {
			a1: [0, 500, 2500, 2999, 3e3, 3200, 4200, 5200, 5700, 8800, 1e4],
			e1: [15, 15, 70, 40, 48, 48, 252, 40, 40, 20, 30],
			rx: [80, 80, 190, 90, 46, 46, 248, 180, 180, 90, 140],
			f9: [120, 120, 220, 110, 37, 37, 217, 10, 10, 10, 10]
		}, aHO[3] = {
			a1: [0, 400, 1899, 1900, 3200, 4500, 6e3, 7700, 8499, 8500, 9500, 1e4],
			e1: [10, 10, 20, 10, 30, 10, 16, 40, 50, 55, 230, 230],
			rx: [10, 10, 40, 50, 100, 40, 80, 120, 80, 55, 230, 230],
			f9: [80, 80, 200, 10, 60, 10, 16, 40, 50, 55, 230, 230]
		}, aHO[4] = {
			a1: [0, 300, 1400, 1700, 3e3, 4e3, 1e4],
			e1: [10, 10, 20, 10, 10, 170, 212],
			rx: [20, 20, 60, 100, 100, 110, 170],
			f9: [70, 70, 160, 30, 30, 60, 120]
		}, aHO[5] = {
			a1: [0, 1e3, 3e3, 3500, 4e3, 4500, 7e3, 7500, 8e3, 1e4],
			e1: [10, 10, 20, 10, 5, 10, 20, 5, 20, 25],
			rx: [30, 30, 50, 100, 30, 100, 140, 60, 140, 200],
			f9: [80, 80, 200, 10, 5, 10, 20, 5, 20, 25]
		}, aHO[6] = {
			a1: [0, 700, 2650, 3200, 5e3, 8e3, 1e4],
			e1: [10, 10, 60, 255, 255, 200, 200],
			rx: [10, 10, 60, 255, 255, 200, 200],
			f9: [80, 80, 255, 255, 255, 200, 200]
		}, aHO[7] = {
			a1: [0, 400, 1999, 2e3, 3200, 4e3, 4700, 5500, 6500, 9500, 1e4],
			e1: [10, 10, 80, 255, 255, 55, 6, 70, 20, 155, 255],
			rx: [10, 10, 90, 245, 245, 170, 80, 190, 20, 155, 255],
			f9: [80, 80, 255, 235, 235, 55, 26, 10, 20, 155, 255]
		}, aHO[8] = {
			a1: [0, 700, 1300, 1900, 1901, 2500, 3400, 6e3, 1e4],
			e1: [25, 30, 30, 30, 255, 255, 30, 40, 20],
			rx: [25, 30, 150, 150, 245, 245, 80, 150, 70],
			f9: [60, 170, 170, 170, 235, 235, 30, 40, 40]
		}, aHO[9] = {
			a1: [0, 400, 2009, 2010, 3300, 4e3, 5200, 6500, 8e3, 9500, 1e4],
			e1: [10, 10, 80, 255, 255, 55, 23, 36, 20, 155, 255],
			rx: [10, 10, 90, 245, 245, 170, 60, 160, 20, 155, 255],
			f9: [80, 80, 255, 235, 235, 55, 9, 72, 20, 155, 255]
		}, aHO[20] = {
			a1: [0, 5500, 6700, 6999, 7e3, 7300, 7600, 8200, 1e4],
			e1: [5, 5, 70, 70, 255, 255, 252, 10, 8],
			rx: [20, 28, 190, 190, 255, 255, 248, 90, 60],
			f9: [60, 80, 220, 220, 220, 220, 217, 10, 8]
		}, aHO[21] = {
			a1: [0, 1500, 3e3, 4e3, 5e3, 5999, 6e3, 9500, 1e4],
			e1: [12, 30, 10, 16, 40, 50, 55, 170, 170],
			rx: [45, 100, 40, 80, 120, 80, 55, 170, 170],
			f9: [12, 60, 10, 16, 40, 50, 55, 170, 170]
		}
	}, this.aGj = function() {
		var aHX, a7, f8, fX, hV = function() {
				var hV;
				return bP.us = document.createElement("canvas"), bP.us.width = bP.f0, bP.us.height = bP.f1, bP.uo = bP.us.getContext("2d", {
					alpha: !1
				}), hV = bP.uo.getImageData(0, 0, bP.f0, bP.f1), bP.ut = hV.data, hV
			}(),
			a1 = aHO[bP.eV].a1,
			e1 = aHO[bP.eV].e1,
			rx = aHO[bP.eV].rx,
			f9 = aHO[bP.eV].f9,
			fH = al.aH2(),
			ep = a1.length - 2,
			aHS = new Array(1 + ep),
			aHT = new Array(1 + ep),
			aHU = new Array(1 + ep),
			aHV = new Array(1 + ep);
		for (f8 = ep; 0 <= f8; f8--) aHS[f8] = a1[f8 + 1] - a1[f8], aHT[f8] = e1[f8 + 1] - e1[f8], aHU[f8] = rx[f8 + 1] - rx[f8], aHV[f8] = f9[f8 + 1] - f9[f8];
		for (a7 = bP.f0 * bP.f1 - 1; 0 <= a7; a7--)
			for (f8 = ep; 0 <= f8; f8--)
				if (fH[a7] >= a1[f8]) {
					fX = fH[a7] - a1[f8], bP.ut[4 * a7] = e1[f8] + aDL(aHT[f8] * fX, aHS[f8]), bP.ut[4 * a7 + 1] = rx[f8] + aDL(aHU[f8] * fX, aHS[f8]), bP.ut[4 * a7 + 2] = f9[f8] + aDL(aHV[f8] * fX, aHS[f8]), bP.ut[4 * a7 + 3] = 255;
					break
				} bP.uo.putImageData(hV, 0, 0), bP.aGp(bP.eV) && aX.s1() && bP.aGp(bP.eV) && (hV = aX.aCS("arena"), aHX = aX.aCS("territorial.io"), aHY(hV, 5, .5, .5, .1), aHY(aHX, 2, .5, .45, .1)), bP.uq = !0, bc.de = !0
	}, this.a2m = function() {
		for (var gN, ew, ey, aHZ, aHa, fZ, a4t = 0, a1 = bP.f0, jO = bP.f1, fX = a1 * jO * 4, aHb = a9X, aHc = bP.ut, a7 = a1 - 1; 0 <= a7; a7--) aHb[(gN = a7 << 2) + 2] = aHb[fX - gN - 2] = 3;
		for (fX = 4 * a1, a7 = jO - 1; 0 <= a7; a7--) aHb[(gN = a7 * fX) + 2] = aHb[gN + fX - 2] = 3;
		for (aHZ = a1 - 1, aHa = jO - 1, ey = 1; ey < aHa; ey++)
			for (fX = ey * a1, ew = 1; ew < aHZ; ew++) fZ = 1 - (aHc[(gN = fX + ew << 2) + 2] > aHc[gN + 1] && aHc[gN + 2] > aHc[gN]), aHb[gN + 2] = 2 - fZ, a4t += fZ;
		this.a4s = (a1 - 2) * (jO - 2), this.a4v = 0, bP.eU(bP.eV) && (bP.a4v.aHd(), bP.a4v.aHe()), this.a4t = a9.je = a4t - this.a4v, this.a4u = this.a4s - this.a4t - this.a4v
	}
}

function aGh() {
	var pG;
	10 === bP.eV ? pG =
		"DYDz2ESNu-0UYCCrS9c3pBUrKHc94BhIBhIJpIIBnMIAAIrKSSpKABmgf9e7X7ecX-5P0baOy191XXX7eegf9mcfUrrxrKppppKpKSrzUMMMSKKKrJcXcXcmgcXnKIKBmnCIJonCKrrSrrSSxSS9XcJnBe9XemmWXeX99chMIAEprrSrrtbrxIrMKBn9eBcecX9X7f99X90e577VX1VcOWX16XX7X999cX7eWyXXccVVX6rUSrrwUrlzpbbrrU6xzztzxzrztzbaOtaOa5-0WV-77e-9119HcXXZecccceXXX7ce9Xcce9e9meeVof919ee9Wzy5XeXYS9KBcXee_He6ce1ee0zxzta5UaX99c1mXcXhEJp9cNHWcTN9BcnAzJoorIBe0c--nIJoonSIBe-OX-NNOXWbcBgzIHX9xHzS9mcCSI9-nBrrorK9VcP-jHe9_BhxzKHcWC9mZp9-3n9fBnS970a6zs7egrIAAIRUKocXX9gx9npKaUxBppABe5OdHpBe-AC9-17TOWABpKI9-7JmnC6zGtxIBmen9egp6aUlyOzbrbbqUzxHXgjKKBc-ZehlxoeeoxObonox9XonAUbzS9efBdCAArHmjISBhEJnAofBUIJgrpocXxIBUoxHVmnBmmXAExoUxABmdAIBgnBonIAC6oxHVgfMHcXcUXAAGxIBgfxJch9c3enCMzSBe9eXomxHeBgmeCSBgpKMp9hzHfIEzHnArSxHX7pSrUHcnCMrUpSa5UIonABrSBccnBopJttzbxpBonHXpIEKMrMSrxpKxzUzltyUtaTOaOaObaT5UzNTOV0c116rMMKSKrxIKpJpKMSKMGxISCrKMSpKMKrSpSpI9xp9_pMMMMSBoxSryTUUxa5P7-0ttbWzzzxzaN5-NOWVN--0Wa5-0X-0VNVN7TOzaOWzL0bbX0y7NN5Ua17V111749c79e1c-V-----Ow7--N57-OzaN0ba156byNNT6q5OzWaT55-OsOX1777Oa55-5T5UX16tzUOyUtzrpzUrSKKSSAoemnKCIAIICI9KHn9CKBhCSHgenSAJnIJxSMMKKSSpKoopKKHpSoorSzxpWxMS-UKISaOxMOxttyOzy5OzbbtyTOzbtaUxyUyTT6porUrSztzzMSp9eceoogeZp9ZxJx9geeeXe9eZgeC9gegemp9gmpKMSonSxKrrbaUMIKJpMKKKpIACBmeccV71XX7V1mmmmhCCCKJompKKJpMKSKSKpKMJpKBeeceenKpzHnBnBmceee-X1117ememfBn9mfCBmgemf9mfBmf9xromcec7Us8He0u99cWtbc-PeCCS9VecZnBnBemfBn9X9c6aOXA997Y99755VXc6tXXmV5Os-ObVN0yN0bzaT-7ec7N70Wa-OV-5eggnHon9f9efCBpMzop97epCKIpSIBpKrrSKKIKKMKMJehzKKErJeABnIAJc717f9eBnAJzrHe7V9d9ef9gmopKUKC9gmcV6tX73eCIJoonIBnBnBgnCHgjJeZfA9megeegfKCICCJnIA9meZf9mfIEMof9XceXe97X-59XdCIKKpKKCJoeVcf97mZmVVV199YJmX7gceY9gpEOxMMJecrSSGzOxSrxprSxzJzUopSrIxKBpUMIpMprSropEMHnBrpprK91AJpJpIICpBopICCJonKBn9mcme9VcX9ee7X7e9ece9Xe19XcX91Xee9Xcce9VVVccefAAABe7emhBnSSKMSIJhCIJpKJppCKKIIIICJgpIBpAIHpBcoooonIKLObpBnKlzrKIKCJpCJpBnBpUzrrxpxSbbwUxzUprpppppJppMMIrrSSRUbWsOwUzUltbzrxzUzSzUbrrTTUUrSbbV6WbaTOzxzyN5TN-T5TOxbtts71-X-70V0sOWsObbaT0sTObw70tbbzbxbzzyOtyUtbyUaOV1-N0cVN-50aOtza6tzlxzUxSrzUzSSxUSzzOzzs5OyOtyOyUztyObaNOtaUrUxrrUSrrUrMSJrSIMSpKISzKUSpSrSSrzSMMxMSrMSpSrUzSSzzrTUMSpprSzMSzUxSSIEUSrzrUSpMKKxpKrKMKBmmrIKBgpKrzs6VOsUa--5ObzyN77-7X7e970V-5Oa5ObzxSxrzzSrKMUw-OV17X7X1X99X97X9X99cXXXXX977OaOVXeeeeecX7cX7X7X177-7-X-71-7XX97X97cX7VVV1--VObs970cVObtzbtyObrzxSomdKKSSMKqTN5NN0xrMIM5UrKKKpEKrSMSMprSrxMMUzrzrzSrSrSrHXenOtxrrxrxzSrrSrUrrSrSxMSxxKJpKKKJnKKrKIUUSrSrKKzKxKrSrSwUxIBnrxpSSpUzyOzzzzyUSxzRUpCBee7ecXce89omegpIBrpxzSrMJnKrMSFT0tbrMKxKL0VObxprSSlXV-11-c-X-WxzxFUaPcX777OzztzrSrMV-V75X96zzMKrUa9e-7V17gc9XeV90Bf957cVOzrMOX17X7X-X7X7V-N-6aUxCKzUUKprcX-UzSrN17WzrxrNX7ecV17WzzbaOtbxraObrOxrbxwUxpUzrzraOy5OVOWtzyOzzxbzVNXccXcXcX1-V197V-ec5Oy5N1--555UyN-N1---VOWX0Wtcc0aUMMyOs----Zc5-TOtsOWX7c0xzLN-NWbyOyUyUzrbxJe9gfTUxAMxrxzlbzbzbq5UKrJnAABnAAICETUtxSrzrpIpKIUSxraOaOVNTObzWa5NOtxxyOyOc-5A9YBmnBfHceX7-XXcX9e9Y9e5OzUbxSyVUX5OcUa1-UMqNNUbyOtsUWtWbWaObtzbyUWy6bzpJmoh9nIUI99oghSUzrrrSHeHohKCJgrKJemgcrS9nry6xSrUMStxzUSzqUrbrUxUSxxrrprUU6zSrbrtzUSUSzxMKxSMprMKIIIoonIBmohAIAHgf9eHeemfI9nA9mf9c9n9ZeXc9d9n9ccX7VZmoceeHVX1Zn9meZegegegfBhABehABonAHnABhCIBemee9eBfBeecgeohCUxzUbzxI9egegfAUUrHmegemecWcfCUp9meX9Beeef9onrSpAAKKKIyOzyUzJnBjSrxSSIBhMSHgcVYKxBmnzrROzpzxzSKKCKUzKBnoUzzbzpJmegfzyUzFObyUzrrzpKUSlzry6sUyUVN-7NOzbzzlzrzUrUSrrURUxzbzsTUsUWts5NOWa5ObzrUxrtyOWWaOzMSJnIAIprMJorKMIrSKMKKpUKCBonKMJnCJpCIKIKMJmpKIMKJpCJpBxBonHomoemmegnHf9f9cX7ce99emecgn9h9eA9nCHgfBnAIBfHh9eXXce9emec7f9ec1me89eeceme89fHeemX77-ceeeemeX9X9eeecV-V9e9Xe7e9eefBnBeefBfHmnBnBnKBpIEpKxMSKJnBpBnBnBmgmeeX9cXXVcX7Xce1eXcXe7ee9eXeeeX9X7V7V77V--XcXee7ec7X9eXXceX9f9eeee997X9Ve7Zee7WaX5X2Be-cee17X--0tsUbtaT0ta5-Oc--7Xe-X7--OVUtbVT--QA9nBmcXV--97X9ememggnBecJceeXme-cXdABeXeX97cnHgeeI9IA9XcVX7eX99e9e9mgeXeXemmceZmXe9ceXemXmggf9mmnAI9X1eIHcXfBghBmf9BemcX9Y9Ve9--JmZeccXA9Xd9cX9VXVVc7-V-Xee_BnJhIIBnJnBmohBgohBcmmf9eHf99Hf9HmommmmV5N-MvxppxrIICWzsOxX--OV5s0i1mopMKppzTOaN-0XXceV--0lJ7-90mzBlV2N7tRof9JqUsOaW7c8bwrrJchpK9-X7PBfHjKogcP0Jd92SMUwUlxMSErHegnrlxI9X7cY99e7hSzxpxSIIUHozogmgecYIExxxrrrKpKrSrMMrrlxtyUtxblxUyTUbyUUSaUy6Wzttbbc5N5N7V7XWaT7V6aZeVWsV9nIA9X2BmcWc7ooc--f9IBomV-0cnICBeXgn90Wc5TOa7-1-5cX---d11---esD---m8D-1VvAYqV-92glC5--NEEiqV-7Hsjk014I4wognBxwOs0Wc-D4y4gcT--0Y8X-0WalAk--0pHX-1Wsy6EV-a7EDhCBtaT9--X3IIV--_VJV0Ndepmzq1-0XeJbD-5XhvrCqTe-07iCnpteV-7iejk-iAtCxEIrrX71-2smknnEUUpze-e-c-1BtMB--2Kbq--YMmzV-sqPmrF7--Culc-HCwyxxcV-DEWXhte-DZ7mzorSr56eX170LG-rUSrSItzOueVc93c-5ZH-rrRP9-2d613nHdRUR6kP7-CZVZUEKUyUe91e-2ZYhnTPV-t8OMny7-1HZrT-DZf16A9mjFUzlsV--Hh_N-1HlyB-CZhCrSpzrkX7cX-2ZibAr-VMdC8brSrzUxSSIBxpHX17c8CrJe7rrUIpSrUxxzSrMIMOs5OVV7X7X7977V-7P19Xcce--8DNHk-LIcPSpN7-0ODtgnMN1-7Zz5USxyX9c--J2As-9J2CSu-08FHSrR7V-0G5xV-OH5vqV-0LEoV0OLiAnMN70D_f4UKIBnSBgzSrSxSSMSxpSpppzc-5TTUMbV716s117X1Xcce-cXXHcX--0Rs7V3dS04nKonpSSkV7----TMGPxrS-V7--MN-c0HMYnBnrIAIrK-OWV75V-tTEHotV-qMoqSMUUbe9HXV-mNcawnr6xtcVe-3aNiUIq1-6aOwMISlc1-6aSe6rROec-8ac9fISzuX-V1tf-1mnBrlWaN-NajMY9ggeoopCTTTTN6aN1HdgkXoohABnK9n9KJmpogeV-0XJenppSrUzJgghomhp9VnxIAAzOxWbbrIBnJmenBegozlWyObxIKBonIGaOVT50xSk6xJpEpIHnBonBoptxpr56xrzzbonCBnCMMSonzxJmopCIJomX7mceHcV7nJxSABhrbxEKCIJhAA9HgenABrUMbqUpSUrprSrbzzp9hABeXce9YAHcoomnBmmnBmmnpzaTTUrzzMpzWWblbyUUSrUrxbbzzblxrUUbrzSrtztzw6btV19ceWXWzq0aU6aTOta0a0V5777Xce7nA97VOa0X-17VUVV0V17-17X7V7-V----1-V-VcX9A9cWbbzyV-U5T5TOa5NNOaOV1Xe9ce99mZee5OtcWbaTTTTTOWe9ZeXcmcXVV38gtRnCMzSw1X6VcV08hu4rq9--tiGRrac-1Qfbg-dax4zrrIKoeBxErUlzSGbs0VP3eXX97XV-9R0KCsV1OlXjprrP7X7-HRQsCpVc2TRgLxJrKBeKKJe7BhIKKBlwOaUrNTUsNNNcNP91V---PS6VgopVN-LbHRrK999ezrxxoy5Tc7-0bJGjF--6Spy-5bU7rSbuXV4tsIYpKSSrSp50aX-177e-2baNMC5-2Otd7nHrpOba7cV2tv2dnICxz-Uk7cc0mUIkRnBpCBpCIJOWa0VNOtc-19UQnBeegmnIISxJns56zaOWtu7TV--URWN--VDLc-eVE7zSrUX7Xc-5WM4BN1DWTIggpBnEKKKESCWV5T5Wa-N0a9VsP6YRn9cmY9JggoggzUKHfA9XmcP9XZfIJhronABfISpxrUrrI9ABnBggrxxoe9fHmeBdCDUUrHf9orUogrzzJfUU6zUzbbbzrty6brbrxxz57OtsN5OsN5V5VT5V57N56yTUtsNN1cNNVV5VNeeeZeWtu77-XX-KgxCqWVV-P8w5qV-uAjtz5c15XwhBooopBonIKKJNN5-N5-6WVN-8ckmzArUOVeV-uDoWxNV--YoA7-TYoYRoxa57-1_P1T--8NKD-9dNS2ACAUta---dQzr-DPM79mmgcpI9chMKCppxxxrSzIbXc0aT1WVOxk7-N-9c0eauZgfAKrSrrSla-5-7n9-V1eVE3nKUwNVcV0eWZinCF5N0TcbkCMSrzr5OVPXCA9VXV-1b0uV0ezUBxUsXc--mhTc--n9_c1DnTIxCCSMKC9eCKClsT5OsN-V7NNV6QJcYxzUSxzSwUa7X9I99Xd9X-BhW8EE6rUw7ceV6fXkApBmf9f9hKGaOWzzzObV1V-PuipRpJ5--6iiarprP77--DrhL-0iv-fN-7jNKjExzXcc-Y1kshKK-5-V-wF2umWs-03EWs-03_Ms-23gdy-qlmyACJmcgfBnCIIrKpICUSIprUa0VOV5N5---V5---wRnFru7-E6kMClX-4lwIAzq9c-A7r-z5V7gdk8monBgfCCCElzbzxsN995-T5-KgiSunBnABmeeIHprrKJxpIISKICJpKprUzOcOzzUTN---0V--50aN1-1-PV7XX-SnCeY9f9mnUSSKzMtaOWa9VX--bBy1gzSxX-e-4nFNEAqTc-6C7Wgs-EC_DBjN-0nVb2N-3n_EYByN--nfWnV1Bx8ZorUaV9-CnqgbKISrNN9-9-8o5aACrSVWXV-C0gPk-jFRwSM6rsW9VV3h23TmfBjOxMUtaX17-6GYfE-0UHSjwfEzbxpUUq17ZcXeV-h8rqr--3odX6MF--8ogzvMJrN--V1xAI4npKwT7cV0Xp-Yf9nBeehKMKrzzSxrSxrUSzzSxrSMzSzzV-T-7V10Wa6VOWVT1mmeeegn9eeeXmcX97V-IJGnCr1--2JVvD-Bp7gzSxw6aeZcV0hHX5merts-EJjUhq7-2pGMvBtV-hJmVz1-1pJofqV-0KQ3c-0KztN-0L5k7-6LYvE--ILYxhTNc-0LZ57-ALu1CaV-4SIqV-hSQ3na--KpjX--ppknVESTPknBgmgn9f9f9onBmenSpMGzxbtbzbaOV6zbX9-NObWV-4TmmV3SToLnBnJnST5Oa-1-0px0YD-0pylvD--L3Ge--q54IV2CWmWnUUz5Pcec-nO-URhBoUy6VX-1qFuQGc-MOcagpR---CcERs-0PQUc3MPs8gehClzSzbzzUzxMr6tyUzzbzaTP0HgmcVXegeeeXeh9eX7e-JqqUEKIMpzz5T7cXX97-bRBpSKoT5X7--M4g1-grMIbBecemgfMxUpzMzObtu7V0zrrq7e9eV-MTaFhOy9VfLnt2-9-17117VcX1-1X97cVXX9177V-VXV9-WaOSMSSSSrrUSKMKxrrrUSxrrUzsOV7--N-tVN--N0bKIKKQCKRnKQCUtrTUtUSxpMprrUUKxSpxrpprMrxF-EcVGxTX" :
		11 === bP.eV ? pG =
		"QREc7lR7oVUYGy_KJOJKKKKuK4OKT_K4KG_u_GJJO_3K_KKKL_4KL__KK_4_LKK_MjzuOOK_KKKOKLKKLLUjzji_KKMgyzdMjzgzzzEszzyzzjvuQvieeid_POOvzkzvzy_TvuOK4GKKvyyzzydJQi_OdKKaLOLajdOPuueaYBzydJdPOybvdbjeuvizwzujuQnunl2wBnBE2-EYBz2nk2kFzwBzznBydnwznEYwnnEBnnwkyvwzEgznzzEwwwwznnxK4KGOJ2zl2nzifvwyw-J0GGJ042nvzEvzwznJEnzlG42zg02KKGFzzEzzeT-woKK3EvoKLOJBnBnzE2EznnwnwznznzpJKKKKOOKG_G_LKFwl2zK8K4JK4KKKKKKKKKKKKF_g38EBemXeeeeeemeemgeXeegf9XgeeexCxzzzoenErMroeXeeegfEzSS9eVcghoeemf9YBe9ee9eXghrzzzKBfIUzrbzUzzzbryOxrzzbbsTXe9geY9egeeBeY91cUy6z6xtxbxzbzlzObrx6ztztue5UyT6zzbzbae7UxyOzzbzzbbtzyUyUtzztbyUzzbuecZeBeXeeecgeV--1ViZ-00JJIV379xwOLKKgzyzK2zF5g4ccBgcn9ggepUxAprzztxtyOzbzzbe90f9cXX99V-cAQAOx-PFLqqmemxp9zzttzIAzrrzzxzzze7X9ZeceX5ece---AorF0B4uUghzzae9-6VjJh_UznK---NUXV1NBEpOLYnzlJ--0X1X--Vl4pk-B5KYEc-D29vazJ-HkP9DmexzxxzzzrbztbseeeHeYHceXV-NC5uUF-R5YYCyX-2Vpc0jCF--5lM7-12TuM-hkQrZrS9X7f9e9enrSxrzaUxx9f9zzHhzUxqOaOsObbzSxoqUxyUY999c9Xcecce7eV5NDrSOLauUwzzzzEGK4K_0F2Z6YfEUoefUtzUzMyNNe9ceec0a2zdLQdyjwynxKKFznpGGJ--1-_X-AW0ZpjvnzCKKJ--1309--02HO---WrDV1sGfOOjzzn4KK-0FYN1qP-2W7RtfkF6J8G-geeemf9gemegfEbqUrxEbyTgecOwUbbxEbyTTUac-H3crrjCLEE1KoQBrofHegeecBefBeeegfAACxUHemeeeeegxrSrzxxoeeXXe9ecdAzUomXexzrzroeXeecc711_rI9nUSxxKMSryUzrzUpxKx9cV7cceghrrJnJmhBe9ee9VUrxy0a5-7e7VVX-7XccOVX99eefKKAAMxMIUxzMrxK9XXXXeXceXceee9mxxp9oeV9mf9eHgmeeWsXnHcmfA9oenJf9XcXcOby999exKKzMIJcceYBggghxrI9e9e99pxzpHeccceX110cXe7cXWzrUzUxzzrzrtzbaOcVcceXccce9Xceegcce6emeZe96buXeXoe7TZhBe2Bmc6eIBdC9eC9fHcHcAC9erxHed90C9MTUzoh9ZjJeofIAzHghHzI9nHYACCA9VxIHcfx9gmmnEJrKErJzSC9xrrrtyTOaUa0xSxKroxMSSrIMKqUlc6bztWx51--P7OyOy0tcX997V-NP6WsUaUbaOaX6VTOzzzxxpHnBnBggofCKSpJxUUo6pzzbtzyUzbxSzogfABeceef9mpSzoppI9e7X9nCCKMMK9fEI9ee19mfBgemh9W91WuI9gf9e5eX17N5NUXc0a1nBenUHfSorpMKMrHXh9XgmY9nMJmV1nIISC93fA9gnKBemp9e9XxKoeeeA9fSMzrxrpMSxMMHorIKII9eecgeceeee9gmghrKKCpKCIJonMozKJp6xyUzSppr5OttzzzzWWtyN5ObcV-5OaOWttyTTN5VWWbbzzrrxaOtbyNTUUrrSMMSpxrrSrUxxUUpSzSMKonIOaN6aVcVNOzUrL17ccXccVPeccX7717cXX-5V0zbzJxOboUKrKrrUxxrrSxxrSorIKSrMpUUISxxAESpGxrsVWzP7XXWzrrxVNXoccWcOcX-6xrV6tx0zxzUtbtzq99777WWVUV-50xaV0tsNUbzpUUzp9nUrpIyOzaUy9ge197e6zlbbbzbbyUzommhxonCHeIxxrxrxrUSxrUrrMKoogmmecmeeZcceX7eXHeeemmmn9eedCzHfoeeeZe_IMzIpoxHXKzUJxxUoUUprza0zxxxrUtyOaUUlbxIMKKKoopCIJpJoommeeeX9A9mmn9cce9Xe9ee19eXe17eA9mgnCKpJnBee7XXXcee7X-99XXeee9993cXV0ba5-XV0aOA919HgmeeBeY9mmX9ememef9ggn9ghA9mXcmeecX7gpCCCBnAAAABnCIICIKpJonCABnBgf9hBpBnBnCCCJonBnJnJonCIKprSKIMKKpJpCIKIIIHrSMpJjJxMpz6zHxCrrMMUSprKSIrMrMUUMrSxrSrSrrUUyTUbbtz6zbr6xxxtbtyOtyU56tzyUTUxzrSpxKMU6lWxzqNUSxpUxEMKJxCJnMKEUHhICEMrHxSUMSrMSrSppppMKMSSMKpKBxMKpppKKCBnCBopIKIKCEKCKKMMSpppSSSMMMMSSKKKKpSKKSKSMMMSrSSSMKpSSSppKICppMrUSyTUztbzzbrxaUq6zttbaObaOa5TOa5NOWWa5TT5-N50V7WWbaUbbtaOX-N-7-1-170cTT5ObaOa5OtttttbaOa5N5-1510c5V--0VVcX-1-V51-N7X-WWV55N55550ta6aNNOa5Oa5OaOaOtbaOaOaOaNOa55NNOV50a5-T50WWV-N--7nBf9mcmgcmmmeBgmee7X17eWba11X7VX7X79X97Jc7V7-V7117X7cV7---V1-X7X97--7X111111711-VX77V7-UMMMSMSrN0V5-UKKCMxpprSSSrMSSKprxrSSSMKKSKrMrrSrMKpprSrKrSSCKKppKpoxMUOzaTOzyUaTUttWtzbbyOts-OyUbbztVObyNNOyTV-0WxWWaNNN7X7VXceXXX17-7WWIBnIBonBd9eAA9Vc7NNV1CIK9117-797X7VX1111WbWy0xUzprSSSpprUxrSxxrzTUbqP6zrSKprxzxzzTUUUztzztxzzbtzSSUSMSzprSrrtzJmmfrSrSUSzaTN756xKxCSSIKMMKKpSKpMKprKprMKpSKpprMMMMMKrJxSSrSaNNOtVN6s---0WV17N-V-0aUWbyN0baOaOaNNOWbyOsN70btaUL0xLT6o-UM6lX6brSppSSSUUSrppEF6pSSSMKKCKVUMUL0tba-USSUKSKSSMKrMKpKSKKCKpIKIM6rSSpxMSppKSMKSSSpSrSxrUSlwT777VV---777X7XX19XXX--7V1Hc1--N0VN570c6bzKMUzrSxprK6xMxxrpCKS5NTT6cN0zltaTOa--57-11-V7X7VcX7c7X77977VN-Oa0aTObaUUoOxpKpqP70btyOwUsOw776rS6twUkUOtWaObX6ta0bVcOcWy5N-5T96XWaWccZeWWtaX97cecWzUxxq1X7cVX77VX999750a6VOttw1XecXnIBe9-VZceX7V0zTT-OtWWbrzSpCCUJltWbbbzxzUpoxopxTUUxprS9zMMSKKxGtaUtzV177177cX7X7X997-OtWaNX150a6V6rxUxtbaOV-NN0WV-75-0V77777X711-1X195XccccXZe_on9c29c799ecVOWaN-55NP-T-TUzzzzlzzzsUzxzzrxAqUyUzuA9770V-5UzbzOzSSUrOVOac7WzzxCrSUMJgpIJrKIHgrSJxSrMSrSrSrrSrSrSrrSrSrU55-X77TOe775OxsXX7X15WzMcXccX-Xee77-VX-UzkOzSq7UbzzxzSX5OVNUbaTP6xzrzccccce1XXeccWzzsP7ce-U6rSzSzbzUxxxzxzUwUqXcPVTT99XXce9eeXzS9cXXX9XceXe9e9ce9cece9e9ececeeeeeceexxxxrHee7ece7Ue9omeeXeeeeeeeccX999e9eeXgef9eeXXXeceec5eXefC9eWcPn9WeXeeef9hzSxHcfx9cBe9emee9X_Sp9e9Xe999XWyce7X9ceeeeXerp9eeeceecVeeeeen97d9ec_BemgeemVTOyTNUbttXVe9cce9eeef9e1ee95eeec--3mJ3-01RcfV-NIoOUF8R8uLgf9hIHeec1Xe9fBeh9mfEzzyUrHenxyUyUtzyUxzzbyTTNf9e0a0cWEvKdK_KKKLKOK_aJaPPOOUeKdUddLTyEukyvizjzzzGK43G3322EBkwBzkwwzwzwzwznwoKKJ0K1X2ABrpzzozzzaUWtacme9hxBcXBoeV9--7KZ5R0K1i5QpxUxzUyUzbxztyX9e9oe7eAHXe9eV--KycF0gAC-Bf9rUzta7c-54dtbV-61qbAAy---LztF1oAWqEUzrzxzbeXeecf9V-94pL6xF--Agu7--4xl31226aIBogfABfBf9nxxMyUztttttzbbzbyUtzbsX9f9e99eeec--5HLZ-A28MQry9f055LVqKKPKOaOddaKaKOOd_bizvy_MeOOOK_LPPK42BnJFzszEo0G4aLKOUjuOLO__GKKKKJHKG32K_KOKbnzzdKOLOeOO_-EoJG5KK_KKKGK2wzElGLK4K44JGJKLLLKFnLLOJF23dLLLK43_OK_KOOKFqKOKeK4KG43KKGGGOKKGKKJKKKKG0OKF_FOK_OKKKPLJK_KLK____LKOKKOLLMjidbzzdPPKOKJOG2pOKOKLLKOUu_PUzzzzYwzwydKdaOOKKOOKKLKaOK_OO__aEeOLTdzzEBydaaKdbEnzjfBnuzdPLLO_OLLOK_OLLLUzEnnEnzEnwwnz42zuRzEwwwwznK2nnwzEnEEEnnwzEzvdKKOLO_OOdOUEnwznnzYwnkEEzyEiuUvjzzzvjnyaTyuiz02yyawBkyeQeeOueddaUibuPJi__9gwnyaOOPTvuPJTbeLzEiYuEiaQEeRydiddddaJ-x4K4deadddaa_daaOdaOaOddePaPOaauddeufEeaLiuOfevduazjuzfvieeeuPueefiviiebe_3KvfjfEfiveePivjfiuiE-FGJ--3--4-FFF-FF33F-B-22vjyjeauefeiiuzefujidavuyuivfiuuvfeeuePaPiuvvjiiyyzyivvvvvyziyvzjzEnnEvyviviuvivjjzvjyyzwEii_viuviuo-2vjffdKHPdivgEijjieEigzjvfYyfno3-z2BzvvjeOiivffdideeeieOdeLKbeLuOOOOedaeOeidjgnueaaLOaafeveLyyvivffiiuuiiiiiiiivevfiiieiiviviyyvvvvvvvjiuvvjefeueieieeeddveTefeaieeeeQePevedeffeuieeuaeeeaeee_fiffiieeQeffideufj3323FwEjdyuMeuaveTuQeuLEeudG33_eLVzizvdjfzi_JibeJF44fzeeu2vc3BEfdvdjfy_vvfyEvd_TyfyeTgyY2yzFF-wz2zJGF3F-kz-F22Bn-0GKG43F-2BwzFk3-BoFC4300-EyzjzBo3-l0-zzzwzwzEBk2B-440-04443-EivzjjvzzwwkkBn2-B322BB-zyadY2-B2-nBkk-oF0-o-o2wBnnBnnEsnE2Ezsnvzk2nn32-nB-kk--BBl-2-23-3-BF-B-ysn2-kBBnEBBkn22-B--00-00GKK43GG03JG43KKOGJ_444OOFddF23BJHJGGGJJKOddG-kBKHJ44G-nB-K3-F3-F403JG3GJK45KGdGK8J3G44-3G04J3_LK2B23JK8G3FExKOLK__KGG4KOKG-3K4OHLK_affedaK-G-n2-F-wn3_aO___KaPJ4aOeadaOaLdG3G3GGK5O_OOOGGJFG3FFFF-k-22--n--GJ2K4KK_KKG_KF2n2-2-C-nu22-2-nBn-KKKOK_OPaeOdd_eOK0O_KOLJG44J33-FFF3-F-2-B-B-k2E202--n-wnE2yEEEB2ynkygEfynEvijz2y2GJ2zgzEgwygwyzvyigwwziiiveaaidfuuevfiE22-k-0---F----knBnBnnnnBnBwzBnnEwx-EsnGJEnkCJBBBFkB22nyaLdfeaBknB-EsnBnB-zznzKK2nzznEzx03BknBnBwznByEwzBnzBynnzjzdLJ_OL_aOigwnnBnyEnzEEnlGOJK4FpF-FnBOJGFzywnwkoJKOK_OK____aOJBEBwnEEEwwknwzzzzzzzzzzzEBwnnwzEswwwk-nC3LK2BLKK2wznJK4JK23J4-FzYsCG2lFoJEC332JCaOT_aLPJ8_OOJ34JBFnFwBEK4JF3G48K_4_44HLLPdaPaeOOaLLQiuudeOdaLOOOOOLKOeePPduOaOdGOdGJB3G2FFnBB-nB4K4_GG44GJC3GJK4KOKFwB-kG_F2BknBnnBwnEBzBwwnzwzC3EzwnEjzEEEEE4KK0-zjizwwwwFzzvih-yC02yijEnnnwkF2Ez2CJGGKKdeOKaO_Gbd___Fo-nEB48O_aOG2k2pK3EBzF2042wwwnzznnEEnlK_4F--Bnu7-D5P0Mj4-NFneHn99fHdEpA9e1mrUrMMy6rbyObacVUbsXc-95VQqU-0RC72gfrLTUX9WL7PGHOKOLKaLLO_aOzjzdKK8fyy2yvzzzzjnvEyszn-yvuyji_KjEzfvvdedLOOK_au_K_8KK4O_Oavznwzj2vYyiizdQjjyvjvzjnFJ43FEvyyvysEV2vkG-oJJ-J2vC2nzfvdvcyvB2EgwkznoHKJEKF44K444Fwkzjx4JEwoLK2EGKJ34KOGFCFK2C3GKKKLujnzuK_aK4K2Bl0KK_K__OOd_id_032E-wwwznKK-5koy5rxzzye9XeV0NQGfQzp409Fr2emf9gemeoemhxzoeenrzzzzzzxoeeeeHeeemnrUzzJr6zzzzbyUztttzIzrzrtzaP5Uxy1XXc7TOVNOcXemnCBoeVOX9IHeX9ec9V-7QyMR-O2VLYCrzOcTXeV-7R7oR-42W7vEc-16Tkb---xZJV2sUexOjjEzzlK4KJ--2yzH--10C8--0-gFV-7VNER-038rYV-7WePR--3FiX-8X7VOizvlGJF--GAnc-q7b4qavzwz43KJ--3In9--193W--G5YBk--7uzo-03SVI---Z6nF-JH3JgtV1NZFfOiznCGJ-03ZUnV-NZy-Ok--HUC7-18Epr--G9ncs--8SB3-23innD--1O-0-6lCPTmmnCzzbWa9c--8glJ--3qO1-3XRYCbzK-XlIJjmegemef9efDUzwUzx9fHfBfxyTTTUpsTUxzWttf9eeWtzu7-19Vk6-2lJH2nUze9VKcf22OuK5ObzzuOLKUzviaKzzzfzvwwzEwwwzYBzB0GF5JGaKOJOG__3a_OJBG4-PlNXPmfBnBnBofADUzJzbbbbbzpxzbXe0ccX9Bc6s--1mmx-6lYOwmextzUrP7cc-5BSZbV-45HC2T7-9BdhMxF6JOkqwemmmmf9e19nJemmmenzryUyTTUyUbbbbzbtzue7-qBstqKOOYvEEBo-45TmAqV-1Bzxq-CGcDCxzS9dEMrxowOX7V19X-6YINKaOgnk--leh3lV-cqZnQo-AGhLznASpxpObxa-cXcXV--sj9F--RjYc-9DO8aRk-JRodC5V1Ntt6OKvznCJ--6Flm--Yf48k-BTXJhc-LEJ7aTYC-0BTkwjJhyP7P1LYtQd_KPPLbePLnuafp-yEeddzzEuOiydeKOGdzeaK_jzjjuKKaOaOUEnynBzvnzVyzzEE4FnBwBGGOJBF334G0-3JKJEknBBlKKK-wnCF-RUIqgju-4Yv7daLnB--6voH-EYxyt_ueaYBBE24F-wUjugoqOWc09F4K5OGOOYyzBzElK-1m02NnLNP--32h4-0m0qgnqV-1FPCq--H2Gus--FRXJ--7Gue--38td-6H3zimfGzxLPWaX--3E7C--16gBV2O3CZOuLecn-n3--RX7jgyP--3G5C--18RXV3t3nbP_3_iju_Hz2-B-03XWAgfxyTcV-047KF--Xjy7--GPHJ0W7iC6CSKKIICJnCBemzqUbV6sUa5PX6w1711-V0d4t8OOwwo--7o-P-3ZP3pin4--1CVBV-85mEN0d7rPv9hEIBeXrICxpCAIBtxrtbttztWV--UWc7ec--ZRVOk-3Y_fi--3SWl-1HE1urq7V-06YZF0JYnKBgltzy9c-1GuEq--1Ey3V-87P_R--8B0X--3aep-1HIL9xw7V-08jeF1RZt2BoxCKLV5NOaTeV-LHXk5OUn-3B_KjRnEJxK6xSIBnGsOV5-5-N7e0PZfppdQivevivviuviuvfffiviiiuuivV2vxJG3G400-F2zoG43G3G3G43G3043FJF-B_XHC--1HrHb--1Ml9V0OBPSTykK--mPGuw--0CdCF-3bQrg--_-bGk--c3w7-1J1Tb-nHWSNmnBmnCBnBognAxAACOzzzUbzOzIAAEbaOtbpICxtaNHW9WWttge-Ou9dHce0uXWaOaNTc0qJ_j5Tfuiyfuvyn-43-C4GJJF-ZdZ-CEN--qKF5MivvzoGGJJ--9fZm--4NVG0OHj5Imgmgn9mggggggzbxlyUttxUxrltzzxUp9mcegf9nBx9HzICBnICCIKMbaOWa0c55OWaUlaOaUxxrIJogmqTUpK6aNNOaN0xMUNT1-XXceee7cN575ec0cecV-0P9QF-3hh-D-7_jKnaJ2nyZ-YA_nYBnBnEUttXVOc8aMCmTLLKaaLKPddbjiuievivijivfivy_PPeaeffjyyvjjvzEnzso3-F-3G42l4J-2zvEBGG00LLuJF-3KFK003GFEyxG-nEzvp-B33G_JK--muI9w-5OSJStaOeji--wBzzzKGOK-0JieNwmeCzzaV-TMQgDzvlJJ-GAk2vrxkPe7--MV8o-6At0AC5--OURXy--gjqMEraeV2OUrqueTfVFl22F--jvyN-PNAgydcnF-Yn1WRrSpppMJeYrJnrUKq6ce7WzTUzUUUNVNUtsX7VJece9XXX97c--5440-2I2OHnJsOV-1NxR5-Bn6z2mgeegenBzbzzUbtsN--0_72F--nKlc11OxXDLKKO_OKLQvzwwwzEnnnnKF0RnydBghMMNN--dOfypPMdfibveueeaPaOO_3eafd_J8KOKKaaOaLuLaLvcyEieQevy2l---GFpJFzz-ynwwzzyeiyv-Bx3FEjjzVEvV2s2ufk2G0--3FF2020003JG33F-dC_NYAASKopSbtV--77--QufZ--CxYX-5b-NCbjY3F--sGR7-DRSQ6v4--2ZTFV-OmFuQF--tWp7--Rrk3-2DRQfF-ObG_p_LKK4LQjvvvvjk3BB--2cnkV-0opdF-BuUUE--1SP5b--2fOPV-0qQ8F-JvLKBlV-ttYkOgB--EKfm-GbimObjzjzzK4JOJJ-QEW629fAEU6aT5-Kbx48aOGeQiv-nzVk1K--4-Bei-2c4b_aEF-00fX7--VsoZ--FYHH--7bwK--3KeVV-19ymF-456Wg-0cmm4s--oPB-o--PCDOOk-46F9i--7vjd--oSsBlV-uEMIQY3-0GwSv--1EeMF-06tTc-5Z2ZLk-2HUyYu-0dG4tY--3dhcV-1KhfF-09wIc0ea0y5OddePfiivc-kk---0--hB85hIq---PPqqQ-ACDhYBegf9nBoyOyOtzzxAUzUxrxzxKrqUSHnEyUzzOzbcXXe5e9X97XXXccX9Xee--1UpAF-SFcxhOX-1eB0xgo--Jd31--9KJS-9pBVymefBnKMUUaOVNN72Xdb-LMveiuLKJKMinzzzvfY2BzjEzzY3GK3FK4KOGKF-0Ji17-ueZcLLyvwzYGGK-0KK8igpzza9cc4aecw5eQeefeK3iifeyVyyaPysnzivW-yvivjf3G32JdFG5OJG-3--EB2003-C_GGF-0M4Pc--fYVJ-0L1VIV-1kjSF-0NOQ7--gXeJ--LIdm--AAXh--Kaimk--h2YJ--LYMm--fHOlV-4QMoB-1fQzGbV-OM1DQUKrSV17XV-PsGvQ--0R8xc-Pi9hLee----4n7gV0uuK8Ovwo_F-0SPF7-Tihf5jioG3-rMLqIMSxJfMpp51-Uk7-X7mV-1vH3F-0SiM7--ivJJ-4MU-YL--5j0_5V--MW4m-Ffnz4uebcnu-E0K3--4umFV-1xQQF0KULdhJnCaOX--5ji96o-jMt7YCKBproNN55-KC9-7-Pjp4LPbw---4zuVV-2-p7F-4VdEB-3g5r8awo-6q3GTnIBnBlaOaOV--kXLJ-0NJ5IV7f1wFOePedueiffjEBwB-FFFFFG0F7pWV6CJfCAHcXBnHgpIN5Ox6lbxrJpMSxbpNN7V56rMF5-7-X577V--lo2Z-0O25AV-28oRFJ__7yBm_ICCAEJgcnBdJonCBgegnJpS9XXe7nIKCSSKpxppCpKUrbzKOzaUUoUzKLOttxGVV557-OWtbVWV0a6ryX7X70cX1-cUu-Uy90zaPcXe90XX--AA8ER--Oap9--gnQdkH4b2ThSprSrUSrMSSUSxpMKpUSprMKrMKSpprUMMSrrSrSR6rbr--N--0X71d9-VV7e7WaWu1Zc-cVe95BcZe7917X7cXV7VX9eeX9--Bw-4--LXIak-9oUkasF-KdZHh5--QKOSQF-0f7Ac-DpZnLQC--5ifVV-2M_TF2_g-RhCKoxKSR7-6xX7OVh9-77uqCsLOaOKKK4K45PKaadudaaeddaejyeedeTsz--o-k0-nzuafiueskznG3FB3FG3EBnknEs4_OOGa_K03F-BBzvnywzvvzEBBkk-EQ93ASrF17--hcV8V-0ho3c-1r18a-KLsKtn9ghIKopJxGbzlz5PcOWWV6bZeVXV-erChLbuawo3F-0QgRIV0AS_oTz4F-0iqsc-LrVEayh0F-0jBw7-1raaM0sqwtimmmocCrUzKrUzbxJeYBexrSIoT50xMUUSrzrrxxxrppMMIrI9gnJzzaUOzSrSUUzxtbX7OsU-UOzrUxxSSSpxSrzxzrr57cWue-BcVX-X7X10bqN7e7ce7-7cX7eX7ecccXce9e9997eBhHmhBnBme7791-5119cXV-ATZeR--Qs0X--CxF4-2M-EHrMNVV-1s18b-0M09Rrc-3i33Gcy3-7r1pBmhExpSrcP9-7-3i6ThbzJ-0r2kLmxV-LsT9bywKF-Cl8ajc-5sg76o--RNyP--DBcS--r75Dw--AZP8N-CRYLYIrWcV-AZ_gR-hRb0Q9efBUUzzxrq7Ve9--DIcG--69X3V-2_KXF0CmrNBxUTN7e--DM2x--MBNss1qtbGTeeeiebfeviufifjG-FF-FK-2F-F0-F--6CEoV-2b0EF-pnx7hKlVX--DWBO-IrGX5pJgomd9Beefrr6rUttyNUsWaN9c-iuOLLLPjcnF2--0p_uc--uwAJ-ISZnnCIKWa---QgbdT-0_qJ7CprKy7917--Do60-0MPdwpc0LirO4eLzjezyyzzzyyzjzjzzzvvsFEiyn3OJFKKJFEwwKOKJJKGd_GKKG3JK4KJ-ESx2nSrP79-5j2XKaPVn--_t4Cgjtc-1wYGa--6ZPXV-Ama9N-CTK4nUSXX--2n3-F24thzhrHcXnIqUttxbcd97-3jCxpvh0-1rbiZpEa1-JjETd_azzgznzC_KK4F-0TTz2V-2nrwF-Ctvzgs-Dwy-LEp--Mcags11x3uLKKLPLLLOeNwzBknnwwzECF-0uAGc-ax4e5iii30---6dYeV-2pDWF-0v0pc-uxhu5KvzivnG3GF-0vS9c-Tximavyl4F0GTtRbKpKKKIMKorSKxcP77--50cV1--X-0jSM8x--MlFHs-PyMyriv3J--6njmV-AuIRR--UKqu7wjf1GaaeOdiaPdeeaeadePOdd_OGG3FK43G443G3G-nBB-En2B3P_3HKJKGJJHPdOKJO_aOeOaaQe_K4_F3G3O_8PKOeLOPeOK9TddJ01OaPPu_aOdaO__OKKaK___GOOOaLLLOd_-9PPeaPPefeueOH_Afeeeueuaeaieeeaadd_OdvvivzynwnnwnEnzzzzzznBnBzEEEEzznwzEnwzzzzvizyzuuaveuePv-wnBwwnBnEePaOaPaOLEwBknueaaMwzeeePPujjczvyvwnnnEuuusEnnEEEEzznEBBBkn2BnE2BknknBnBwwn2Bn2B2BBBkkn2--3Bk-k-F3F3J0F-BK8J-0-3Fl43J0JJFC0220-FFB--434_F02-3-FoF-3--ULK1-9jk6__KPzsnC-0rs2uxu7-5z6oLo-0Ua7Y--2yTuFFpzEegnKCAHYSIEIBgmnBen9mhJonKKpKpKIICCBopKMKpCMMMSxxtbbyOVNN50V550VN50VN50WVN-0a--0xLN-V--711-V0R4w-PfBJ-5sCnMpUSzGcVcX--36DPF-a3T2CpX7-21Rkb--7L9iV-3CdyF-D7K1E--E3yyLPB-AsdryprMSrUMUXVXX77X7-0lNuCb-0sh-cpsV-24z4a-0O5skoP--HJcO--8cjcVMwvW_PePffuOedddaOd_OLivedaLOQswwnnBwnnBBEEz2EknBl___JJF2-ddFJBB-kFJF-3Oxo3mryUe9--oNo0k-L_0tBtV-x9UXPVk0Kd_2QCCKJnKMU6Wy6x0a5OtWWaA9f9eX9VNhBeeOaOaK_aOaOOOOOOOLK___aLLLL_aLbzjjjEnnnEEBnEBnBwwzEzFnBzBnnnBwkBOJ3--9Q2JV0hFDWPTj03-0esaIV-4M3pF-DfxqCV-0LPM3-8fbYnBy5-Cq8_WadYzEwLK3--A59FV-CZXbR-2ghDYk--LQk_-0vCsPnTV-0OncZ--gxEe--LXbt-4QGLNnIMaTP9V-4d4NF0DoYGBxBttWe--LdTx--AJjgV-4fDgF-1q1n72bQ0Tq_fzyaLyy__JbzjyiyEvnzoEzz4K44GG440J0GJ--AQaoV-hj4xQW--QUtTs-0QzBZ-2hzuIu--M0W0-3QVpXzUSX9X--r954k-6-LVD--s6udk-U12pBUe--NKbO--B9nkV-55gUGAILAU-ee9eeXeeXeee9eeXeyN9eeeee9XAzbzzzUUtzxzrza1fzrzs7Xe9XmeeiUzrWztzbzzsUztbyUUrztzUzzyUVfzMzzzzzzzzzzyUzzzy1SzSxzrzVczzSpUzbrzzztzzzzrzzy1cXXecXe9zzxzV9eeee99USzzzztzSzzzzzzzzzzWtzMUbUztUSzzzrzzsD2xzxrzbxrzbVeXUzMMzbztzztyUWVX7cX7X7ccX8rtVX2Vc1gVWrVNOta1UbbaT6byOyTMqXggpFemnBnLpThScXXopfJppUhSzt_USUrxSxSzUUKwepzznMzUwefMzSCJXAKRemgegeeoeeeeeeXe99eACMxzUrxzUzzzPmeceeeeXeepzrzzzr9eee9e9ehUrxzrzryUzzzxwg-3sRUlgzK-1wGfBrUXc-1s_20ck-8lARQMsc-6sakWaUYsG--BJEyXtygSR0KGMwzkKK_KK_KJKK4JRnEEEEzEnwznzwzwzzzwzzwzjw3wkznnnkKOKGnEzwEEwzB0wn2vyizz0nEEqPvnzzzwjjEjzEEwznzzEzzwnvz2jjvvzwnkTzzzj2vznzvzyzzyzzwzzwzzwzwzzzEnwnknzfjvuzECfjDzEBBwzEwzEwzwzzE2vfwzk6njvw-nzEEzEzyzvjvLizyyzzzyzzzzzvzzzzzeOPPKd_4aPuwnaLK_aOezjEwznnn2EEnn2wzzEmwznzEn2nwwzznwwnywwzzvzEznwwnDPzzwzzzzvzEvznzjEyjEEnnwzzzzvzvzywviwzzEBwzwzzveznyuzjEzzzwznzjwzjwwztfvzznEEEnzzzzzwn2BwuO_fizzvzzjzjDywzjjEqKfyvzEOfzzyLjzmzzn2hPjjAwzjvjezvnfzzzjAzfjjqKOO___OL_KKKOK_LKLO_KKaKKOaOOLOO_ePLiKKKLKKLKKLOOKa--wN-ww--DBg5N-4latIyc-MYUfaRyCF066q1CJxa5X--5F6mF7z9BugfEUSrSArzxBefBeJcrrzbtzUzHmfUzzzttVX7X7XXX7XXX9--yKGGTsF-2mkw2k-3tQstjx4--BkdsV0DNK7PzGF-6B9ki-9tXkO_K_zznl-0RovXrc--OeZW-IRqTXoeXefUzzzxHYUyWzzzu9XZmZe7-1tmAWzJ-0nbeYV0DRxYTvG--2Dto7-0bYlJ-0nm6v-4DTdBTzyzvzvlJKJK4K-8wxJTrrrzrzOceXce9V-DTg9R-dnsbYExxryUzaeeceec-6bz2Lk-2o5Gnu-1u2YOv3-0oCyAV-iaLAUp--CCXRV2Db2oOOwzvnpKF-ppYW0bVVaOyUzzzrxpxpzPk-2eBMb-8xGoerUUxzry9Xce9XV2ydQ2OK_OjjnBwnJ--pC19-2uliNEyk" :
		12 === bP.eV ? pG =
		"JJAf2uP6y-0nEiiuyywnyueuTbfevfvvjivivivjfvivviyvuuyEgzjjzzvviyvizvviuNziyvijvijfvyvgzvvvvfeu0-F-n5a_GG4KJGGG3G3G3FFJFmKGJ4JGGGG3GJJFJG3G3G323G--kLPeduaKGFGGGG443JJJJJJG--B-C0FJK__443-BJ-66wmpBnJopCMJpCCCIIIJoopKKICKCBnCKJgooopMIDOzzSzUzbzzUSyTUxxrrrrrP1XcXXX9Hcn9cceemece7cPIoeX0sWWaOWVNTOcTNNcN0V0V5-N0aOa-0V--N50a5Obyc-M0z3TPOdgBnBF0NOpxpMV7-M2mMiLbinz03F0sTx8mfrNT-2l6QEdMwwp-5XX7UMTP1V1GIuvaNn-5Xfxrpw5XV1GNTEfn4-_XvzjAAA9mfA9ed9fpzyTUzyUaUyOX3n59NTKLLKHPPPO_LK4iidea_O_QeideeaLOLLJG3-0eeddOaPO_OKLKzEznzjgnnzBykknByEYnByug-3332ElJ222-2wBko2BnBnBwwzwx-9Y6j6rrrkccc-E5ctEizpJF-aDYgSMGz-X10G6VyjiyuuPeiuzjivh3G3K3G--k-9JGFAPEIZSKBghKSMIpKpCJnI9gcXeccehHccoeXBeoppKIJoghIHnCJnJmemmecmfA9jyTUzzzbbxbV0WaTT-OtWWWV0zxtyUN6yUzSxrSqTUztaN71190V7-5V15VUy--V-lxHEg--33oL-67Dhyu0--3FoL--7ahw-LGYowfzu-0HFMIfF-aHWWwxxxcXX-E8ZrUdfVl--TIJLzSr17V0wcDLvivjysGK3G4XaJb1zppIJpBccccge7fUxx9eocX7cXX6y7Y99Heggen9nJdAHp9Xnp9IIJfICIBdCKKIIMMJme19eXxxp9X9VVfEMMMSBpooe7XCSBomccxxpHcrKKCMHmXXmcxoeX1mpJe70BrMJmVV--gxExIpJcX71nKCJmhCKKCIJoopCKKKHX8KHd9nKrKBj6xrSrKpz6xSMMSrKppwObaP-UzSCAICIKCIKKKCMMKKCpCMMSrrrKpKprUSprMUSMrSprKrSpSrUrUSxpxprSrMrMprSSSppMKprSprrSrxKSUSqUGbqUbbrxrSxrSrKHXXeggeYBnBgmnBnKCrJnKpIKpBnKCMMrSS9chKKIBeX77EIAE5OxIIKKKIIEKSKSKKSKKMKpKpKKSMSSSSrSzxxxzlzzUzzzzzUxrMMMMSxxxrrxrrxxxxzUzOzrbxzrxzzzw6w6yOtttttyUbbyTTTTTTTTTUtzIrzbzbzbba-71-VVV77V--7711-V1-1---51--1-1-V0cN-N5VN1e-ee7-1mc71Xe9fIBcVV0WbyOzxX-VV7VNN5TUzUu1ce9menBecmf9gxHc7c7V-777---50VP-V-N-0WxppSJpr6zyObzttV6rMKpUyObttbryUbzWaP0sNNOX757X97X7ce9XXXXXVc7-V-X7VX5-V7eeA9menA9fBnCBnIIJoorMIRObpIKMJpppSSSMSoeX71-V7777X97c5V-ccWV0VX77--NN55-N--7U5111cXXenBcc7fABgcX117X7c-gf9emV---1--XXXVX7X17579VVV117Xed9XecXX--WV5Uzz6zyUzrSrUUaNUlxtzXXXee1777X1e-5NOy--WV5OttttaTUzyUrxxtzzzlzMUrzzxaUttbbxWzxpSonBmpCCJpCKCIJpJooeACHpprSxaOV577U6sOWV-NNN70WVOWzwTTT5NUxryUba5NNOba1cc79cXX199X-91X99mhIHfJmXgxxxpHe9XccX997c7X0zV--V-N7P6k49V711-111X-77cX79mmeHeccV1mdbn_Uno-DKNVSo1-O9kaiKKzzEzpK-8_SLEzzzeeeV1Hinzjh3-8_UsM9mjtyTVBHk8AfiyvivizpG43G3GG--0OIzV2mnjMaLEBxn29mc4SSpprSSSUprrKprSSpppKMMSrMrxrKIKHhKHfIKKpIBpCIIJpIJnIKpSKJo1AKKpppxprSprpMKphIKhMUSrCKMRpMKrrSMMMMSKUVUxxUxSJe19efAKKUbKnMxKKUKIKUStaSrUMTUrzbzxxrSzzUy5SSKtbqprTprzSxxSrBXe9ghSrMMUyUzzbySKrUKpUSpSUMtV---D--0aN-X9997977VVe9XD-19XX1-9XcXXXXYxzUttzbV-7VX78by0rUSppKMbs5-V77V77X-X71--17-X-7V-0WWVN-6byTOrJepKpSrpxrUSSIKSKSzrrrs797c1711ObUSxxpSSSSSSy5--7997VV6z_rrSrxpSprs-7VX17XeXVXN-11-TUUSxztyTT5ObzrSSrzbtbbtUKzrxrSxzUrzUzShKhMKrxzzzxyMtzqnAA9mgfAAACKICBnKzbbWWbaOtbaOaTUbtyUyTTTOaOa556zyMxrUtaTUzrxrrrzSzxzbta5N0s-ee997cX97cX7cX7X771-V-aT--V17V7X1--V7Xea6ty5T5Mts5--5-550aT55NU_ySxxta5OVD--0VN5NND-N--8a6a5OsN1og55OVVOta-75OTSqhCMrBmhMbbtzzzzta--NN5-8Us0V-N1eD-XN0VOKppraT18zs0SyOUaOa5OaN1-VcX7X5OSpSxpMSra5NNObV5-N19cVc-W_KMSrrxxztzsND--MJpKMrzb_pyTMzUa5-0a5-X-VOIMMMSBnKKSMrMzprzaQBen1ceeXcccempprtzUUSv9mmfMrxzUMxpUUUrzbztrxyOzUxrrMzbWbJppSvC7gmenA9mgggfABgnBf9nBppUrttbzUzCKrSSxzbaUxPfMSKpKnJhRpIAIIKrSzUMMzxztyTObaTOWWaTTTUbzzrza5ObaTOWbbbUrSrStzyUUzbyN--s5T2rs-1XeXeefBn97VfBnIBemf97cXcX7bWV1111c1eiN7f-ABa6s19n77X7g97cceX7f11UzUppry-N0MMAIKzV4UW_rJoppza55-TMSsNObztaOa6KzV-77N-SKKSUzbaOaOyUtzzzyTUbtzxrsOaObtttSraOWaObzzzzz_ptaUbyMzzyUtbVUyUrUzzzzzUzzxyQMzzUzzzeeeeXee9Xeee9eeeefKMIKcf9ggnABemefCCKzrLf99X1fABgeeXAKSSMKxxzUSrSraMRpSxrQA7X7X9oopBo1N9gnIKCIJmmmnKIKJomn7emfMBc51997cenKMUzPmegmfMMSzzyNA9OzzUUIKMUKrKpSSrUrxza6SrMSrrMSrUUxzrxxxrUSSzSSxSUSxSrSSrSrpUrMMUSprrUUUUSpKrySzSrxzzxpzSppprrzUrSpSSCSRprSMKKpMKrMKKCIIIBohIBonAAABnABmgemhBmmmeenBnA9X9ecceeXX7Xemmcemgef9nA7en9kecee9eXeX1-enBkeX7XeXce92VXX99ceACBn9XX77XVVV--X7XemmgeeXXX997VVc75OVeX9hAAA7eeme9eXe9Xeeee9e9ceemmmmf9meegfHenBmfBnA9mgggemnBggfBnIHmmekeeceX9e9cXXXmoeceeXce9Xce99eXnBpCBpSrSrSrMSxzzxyeeeeemkeemgf9pprUzUHmeXXem99e9eceef1dbs17ecepKrMgg9XeXccX-Xeen7cXeenBmnBghCBgnBACCCMCKJohCCMrzzzyUzzzzqognBmnCKprMSMACKpz_wmoogepCKrMSMStUZkeeeeAH15-11-X9hCKMSRomcgpKzprpprs0z_rKppzrSrzSpIKIBgXmprrUKIKKrttpKzSUBomm97ghJpSyUzSzzzUbzzUtrzfAI9epnHceceemegghUUzxzWbzzrbTopMSta5OVOrzzUSKUUxrsOrpxQCSrIIKSxSrSzSrzUrUUtttztUtbzxxMaOV-sOWV5--NNOUzUzxzxzUUrSxrrUSrrSzrrSxSprSppprSpxrrrUUrbbtzrbbrztzzrbbyTT6bSyOa0aTOaOy5T6aTOzbzpxxxxpzUSxs7XESrKyOUrtaOa17zyUaTOaOSxprKCKgnIAAABnBnKppppppJnHnCMJnCCKMSrSSKKICCKKKKppKo-2AYFDB--MPns--j8uk-0TwQV7mzO6ievyyvFGK3F--qNX0zxzxrXce9c-3mKUw-DOJuzw9-lBkNyuuuviyzjJK43G000-OaPJEprzSKMrrkccc-1997-2C8pDo-uPOqwf9mnbbtyTV-2Jzv--5gXT-CCmSUvvGG--5xsy-0D-rE-4b-qzSqX7--sMmk-0lNEV-IZ0nk-tm6EnFN-Rt3BvgF-5ReOUc-otNAvisG30DRoZzUzzzrwP9eeecc-3uJps0eSSKRrMGzrzrrM-V-eXXeX--2fpn--6MiT-0DoXD--6ULD--E2lg--TGhs--wrkk-0uNAV-npyzx-0bkCEF-6EeL6jG-5bpJQAEbaV0nuubvp-0dya3mhrk--BzMKzF28zMOzrMUP779c-gziXufkG-2byBQrcV-J-IhV490elopIKKJzlX70V---2FCPyV-HVlaxpX7-x0_hzvvGGF-12_CV1o6LCaeB---Vy4s-K15tuR-0cH3EP-AFalyPf--1u44Wxxxr17cc-CFkqTusBG-2cO5jMcV3oE3YuuiB3FF0P7tWrre9-4GLRUh--19rRV-JN8nk-1B7iV-3OQA--cpNzV8oQxrjjizyyw4KKG44-1d-ezGV-_77wzvGF0eJQZmxL0V-C9jlvF09OI0rTX--JoI0k-PTDyyV-40oK--e5AbV7K29M_OLMfgznEB4-IfrEMASpSUSq-7-Nee-ANaSDyx3F0A69npL--1qoP6bvVF-qtlNxCKCUa0V7V0xqOguudaNznk-G3-Lvq2RrOc-2N7SOfvlG-2g3LFmnKUrla-7X--Vg031A1AJgoxMSporMSSr-XV--10aNXeV-y7CVQfz0GF0RIcNptae02XdsiLTezvzyyyzjzGGGGGGGGG3--GRVT-QXt0TTyyzwK4GJ-r5K0genCxtwT-V-yBnotTvg-F-RR4WyVBNuCtdejvYyi-knBLOFJJF3BSAjnMSzUbsX9XeV3t0vf_fzv-GF0wZ8bxrOe9--8AQA--HN1m-CZlGTLRwx-cmONzIxrprppKprUyUts-XccX1e97cXc--_7pw029QbgoonJUROV5-V-iJrguik4--mdjY-0tQAdaRk-BiCss-aMQLTjJ--3jUaV4tUqAvjzx5KGF-YB7rwfzwOeVuOXlO_O__Kbj2vizuviyuuvfeveTiviynvYziefiiefvfiYvjB-444G3F-0-2-kJ304K3GGG3JG34--F3GJ-IBbGxS--3yOw8PPd_GaaiC-Eueibvyvx-304--C-2IBzcggmeenCMSrwOaOzKHmnrUSxzTOu--V7VVV9c-yPFVPuf0-F0gt0ZpKs17-aTPhOiBFxRy2ZmgnJeeXAICBnBenJzSrKKrrSSrKpMKJnBnCKMSMIKMrxSOV0V0zzUKSpppSKSEKIESOV-Oa0sOzUrMKSppSUMMkP77V-0a1--VP-17--71--7-UxSrrrrSJpqOtzzOX770hBcX7V5--XXV11cc717X7X9XX999777X7e-_chDLLiiivYEl33G3-Vock29fSpSKonCMU5OaNV-NNX7c2DaQYtPjzvjfiywGK33G3G-0xDlzpUyX9V5PSx2jyuzVGGK-0CFZWnwNV1uXF0_fBo1IJJoSSJnACCCKppSxyUV-117-N711-6evlav4-JpSyQKUSSSpaX517c-c-yg6luPzk3F0CNJQpy9-iumBnaLKKeudOKG_KLKLLLueLOaQEEjEjyinEyzejjnskBnwC043F2-nn2zE2EEoKGKFASOdporHX8CBhzxraUqUzSlzSX77eeeXBc0V-LhikvW--KmlL-EfebDLTskk-YMe-RrMTV7V2uyCCaPEBC-5q1sjK6a7V-A2Ih-Aq892rMUNP7cc-TlB1tv--ANsVBjV2v6d6aOwnp-7qIGAIJlaNV1imQQOPszivwzE8GGGGJ0vODuRhCrppCBpULN5N7NX90WX-6gppqPk-GqSXfBnqOxtaUemec-5nnTs-YPD2wz6re9-3QGmz__bnno-2PJQD-KhKnTaaTn-nF-0Pg_N-aphUzj4FKhhRbmhUrKHohIzMpxrpKKKSMKSKxrU5N5OaUL--X11777Hf9VX-N7--5P-XHXe-0hhca-WqtqMCppppSJp6ltz5NVXV-X17eV0QUJbjJ-nREfwnBwOtbae-IiGGaLPvEk0-Er7eI9nCKpUa0V--1v_ZSfcl--0T7Zc0TwsLPNzgz8K4--MdCP-8jMTqMno-QTv6BfDUs-CjSgLdjBG--rknYV0vttlfW-0CxT2mcUV6Qv4daeffkn3J3B-EUOXBja1CjifiOvd_LdKKaaOaK--nBw8aOFFeeKbfivzjix3En-2Ennz-n-3-2UYTi-bkAQ5LLKaRzgwnznGJ-MWJCRr5NV0wBylcwF0D6jaola--BJZx--NfgX-6lRkav3--sx_2V7RUnUaK_aLLQjzzz-atBrI9mgmnICCpCKLTOaOzs0aNOWV9c-E9stskaiM_-pIJnKoxxzxzrUrrxzUxzSrUSzSpISxzxbxzzzzrzzrzxbzrzUta-0YBe7mf9eeV--P9eee7XXcecVXeXceA9eeeXX-c7T9Bee997n9X-0wqC2ylF4iQ5frxSUzJzqNX9cX97V1wr6EuslF-YbY3xSUaeX--x1Jxc--uDnn-6S8wKaPedvn-FFB-zea6RfESrSq7-WX-6pPVqNx-dun9rIIKMSrSrSxxBzbts7XeX97XX7N---2MXGF3ilDMnrSppGa50VeXcHjS0jOLKO_LOaK_K_K_LKK_JKK4K4KGPedaOK44KOPaK_3aefffeTzivizzzyuvkBzwzszEEnwnn-nzyzwzv03G00-B2EzBEBwzBwnEE2-ow4SEIJmcccxxrUJnBonSrrztzyTOts-9X7VX7X9-YvBN2wwwwzvvjjzzk0zOXTUyUxzV" :
		13 === bP.eV ? pG =
		"C0DX0NP1V--QqeadnzzjynEEzzjjivdivfezjj2BBwzwnEzzzzzEjnnvYBBBBEBnzz-UV-hflzUUSrrUzSxSxzk0a1-V50K-0pMiudevf-zvfeBnyviVF-F33-yzgp3bVV02IKUrHnUzzpHz5UzUzSKrUrzbyNN-OzzxzUUUSrSrrrtzttzWaOaTUzSxxaOaOxrKBnCSKCIMSKKKKIBpIJoonIJopCJpJpCCCBnBggeXn9eccc9X7geXXn9efHfBnABemcXX9eece7XHXeXecegeeVV1ee9eX9ecc70eXcXe9enA9fAABnBnJpMKpKJnBnHmmeeXX7X7cceXXce9eeccXVVVV-VeXe97Xcee9f9eXeXXXXceWVWBc29cX7V-6aOaTOWWV-1XX17-NOtWaNVnBn97X-7cf9mmnBemXgece9I9eXXomgeh9eX99eeeemf9BmmeHgeeegfBggmnHoeABeggnIBggeeeecVI9eeemeXe7cX1-ZmfIKCCIJooonIIBnAAAA9mmgnIIBnBpKCBnCCCKKKMSKJoonIBohBmnABnCABfA9gd9mhBopCIJonABgmnJopCCKJpBnBnBnCJnCCCJnKBoggpIKCKJ-UMSGxrMMKKIIISrKpSKKKKJopCIIKKKCCCBnIBjSrSSpKppqUI9cpKIKrrrKSzyUpKpMxS5UKxMSrSxxxpSrSKpIrHxrSMSzHfrxxzUUUSxrSrSxxxrSrrSrSrrrrrrUUxryOtttzbttyUzzbtzzUzzxzzUxzrTTTTUbyTTTTTUbbxy0byUtzyUzyUzzzzxzrrSrSSSppSSMrRN-OxpSMztzbzzzVUrLUSpprUtxKbxBfrSKJpKKJonICppKHnKKJoopKISppSrMKrSrrUSSpxxMSxprUSMMSSpKMSttzzI9f9hMMMSrKSMKpprKKHnCSSKpMMSSrKKKKKCIIC9gnJonBpKAKJpJpBpKBnCpMKKCKCKpKSSSrSrMMMMKrMSSMKSSSprMMMpUKppSJpKKKKMKSSppIMIpKKMSKSpKMSSSprMrSrMMSSrKppMMKSSMSSSSSprSMKKSKBmgprSSppSIMzxCUzprMUyTObbyUzzzaOaUzzzUtzzzUUqOaUxy0bzzzbbtaTOaTOaOaObaOa5OWbaOtWaOWa555555NNOWaOaObaOa57-6WV0WWV--O97VWWWaObbbtyTUttyTOaNNNHV0V-N---9-V-777579775-0taTOaOaObyNOa5OaOWbbaTTTTTUztWbbbaOVOWaOa5-5N-7X--V-517T7---7-Wa0V-X7ccX7-7-77VV-5-7-5N17X7XV-0VN5-N5TNNNNN50aN-5Oza5OaOtsOWWaOWaOWaOaOaOaOaObaOaObaTTTOtbaTOtaOaOWaOaOaNOaOWWWaNOa5NNNN5-Oa5NN0WaT550WaNNN--N0aN7--0WcefIBf9en9geecmmf9eAAABgee9egfBgmeee7cX7X777cce5TTT-VVX1cX1c7197X977X7Xe79eX15hHX11717-7-V-V71177VXX7X7ce-V-1-1-----117--cXX77ce1-VVV-0u7X777117771177V771-717VV-977X77VVV-7X-OWxpSSMSrMKMSSrSrSy5150WV0V5OzJpKCKCCUzSrSSSrKrSprMKprpMUMMMpKKSpzSxxrUMSSMKpppSCKKSMISMSrMMUUrrSrUKSSpppMpSSSpxrrSKrSpSMKKJhSMKppKKppSKKSSprxtzaUTObbaObzzzbyUby5OtzrtzWsObbbtzttbtztzaTTUs-o-9SuvkpF---4GN0--Akuevkk-0Z-5DzUUzzUMMSrUUrrxzzV0k24nbEF-72uPs-31lfR-X0zvBgpOsN---Fjh-1VahUR-033plvivC44-bVp12CUzzrxpztzzzy2A979eeXd9eXXVGkPch_OLJKKa_OLujjznwwkzo-Eno-q32WRrMKpkV7-V--7jXk2-IvW9e-7xySpV2kZ-vaazk0-HWAOjKHprsWxta7ccV2FavYivl3F2cIsAppKMwN117X-81g-ifoF-L4N9UrkcVDFfPz___bjvjjEB3ByvEGJKK--WQlvV0kn8QjoF0NPnGrScX-E2V6yPuEF3-D6-ISGX-42b3rh-0NYH_ooy-3P8eEOJFGGIB-B-0-2043LaPdaeeiZ30003G002j-03-JGFGJ-4K-03G-3303330NBzB-UzzB3DvzuzByyfiivieivifevefjzyw-D9vlxqX-A58vaOYw-07nF-rFPV4lbM4aaabBn3B-mC6fBmmjSOa5N-25o35o--CiYN-gQSZPTw0--2QiX--66YJ-9FT6CN-BHQ8jadHQyddcyvG2232-F-8Hr8k--dcfk6dIezn9YpIBhC5Oa6y5UrWZmX70C2JVtUzzp4J-mXEjworrq557e-6IQmyv4--dmmEV-JuCMk-9SVlk3KDxRuPiueObi_JGTyycnBk--4-BF-eicPos02KqRDLPefeTiuiviuk-K33F-----6f9qfBnUWV-jMD3iO_aOaPOiwBnBnn--0evOEn5U5c1_T5ktLKKGTvjzzYp-w0Rg9s6ABmeWBmghJonKxCIKIKKSKWa6zzro5Uxltbe9e5OtVOWaN-N6w6y2ABcX17cXV-SWU2PBo-alHDReopsOa-OOYdiPPPgnE00--BsPu--Oo5J-5oKjx-AxeUxtaeeTeeffeuePauuvivijfieiivePgyvvC000000-3-3G35JG-2BF0-30-2FFFF--3hlWISD1-ER5o5evV0-0eu7_RjSSprzrSrcX7X7X7X--6KDt-HirDjBnBnKMba5551-3rQbzaaEBnpFJAmhxnKSSSSKKKKonIKKpKpMKrSKIr5UrNV79V1----V55N-1V1-7-7-X79-IUBriLagwC2-3jm7YKkV7jUvJLaLMeudeP_LPK3PfeaLeaa_F8aaLLOaO__KHdOK8__KeePOdaaieeeiiefifeeddddaaPadOPePPeeiiveueaeeivfeiuyzjvvizEBwwwzzEE2-kkBB2-2-kB-2-B222-B-k22-BB2-B-BB222-k-kF-B22Bk0-F32nyevg220-FF-0--0-F003G-G0-Cl0ab9eefxzzba-AX5ODuklF2RKFUonyUUaPXeV9sgwrddaLaPNn2BnEE0F3RULpn9opxbbbtXVe-Y_1riO_LKfvEink--0BfCIpy1V" :
		14 === bP.eV ? pG =
		"EcA20EP9t--46idaPadePOddiaeuuuebieeiiivuO_aRnufezijzzvzjvfuuPKJFJGG3GPKGPOaTiiiedaduus2EYuiedn2nyffdv32--0202EzeRwoG--Ezzjevck20202zeufik43BFBFK0G4-0_J--nyioC03-0002-n22wyddyjfzven3Eyv3JJ20-zynnEyjnnvjizjjejzyy_wznnBn2zvnzyvzBl3GG3G--23FFo0-wzBB8m--ZISrMUUSpzrxxrKrrSKpppKKIACBnAA9mmgfBcee9cXef9geeeXVf9999199ge17V7Hgce7c15ABee99eeXegegegfBgfA9mgomeecXcXgeXceXnBrxSxxzHecefAUUJceccgce0AxBeXXXeceY9nTUJgoepCJnzzzxIBfrMpIJmnpHmc58EJmnrSbrMrUKJnIKxrHgrUzrxKCbtzprzxKISpxzU5Ulzq0a-NOzzxxzSxrprSSpxxrzrtztyUtaOaTObzxpxrUyObaOxMKBn9pMKICCKSKIKKCMKCACBpCACBonIJnKIHhKBpKBpBonCBmnHmgeme1ggeeeX17Xc7VY9e7emdBe97gfBfBfBfBf9e7X7cXeXc19eX-ecXceX9Vf9cee7V-P1e9cecX7e9X7X-0XcX7c97e9V0--O6glDk-BjnBnJpKKMSKrrMSSpSSrxMrSSrMKMprSKzUzzSI9cmgonCKIJppI9YKCKCKKSKKSMMrrUzzzUSMSrUUUSzrzUzryUaUyUyUbxlzzs7-V15X----V---NNccX-ccc0y10WeeeeV--70V6xUztWxMSzbbc6xta11cX9X7V7-X-eHeggnCISpKHX1V1X-7-Oa-N5Xe98HeVVVeeV0X9711-3--XjabvBG-0s7nSrxGc9-BFOunededziszBzG0-G-KF2NDz6rSzzu9d99-0FVIObk153LiReenAUbbxzxzrpxq--e9e9e-A1JTaukCF07J23pq7---cVM--WN3QV1khy_awxF-H4kIRjyV-oCGnvjx3J-16-Ny-U2iSDjyffv33G4F-CWtG2GxSUlV79e--2nbB--6j1s0REhiviizkJG4-4X-vYML77-ZHJ3Pv3-1cZeNponGtV-V4lDIreOiuBl-3-DAESjT9-r4cgTLLKKOaQjzyvgn3FBEB--1pnH-E4zQyafnG--5BKbgN-3Oxws0iCDazIKxKMMIr5OVX1V7759-05hoa-4YPwIzTXc0oS4-OaOaanwnB0-qYoDA9pIrzxzpzpKzzzzUzrWVf9cP1ceceVemcc7cV0H9uMvF-eGU9USSbuX975JYvsOLKOKKK4OaLJKPueTzjEzjzBn2zj3-Bnwn-B_HnzBpIzyNX7V1mi7bfz3J09L-pSKKCSrs5P7VX7-YBjWieueuusF-F03-0dhx_nILN-03vANuaQYl---6b56-jf6VcBknBBn-Bk2BnEBkBkn-BnBkBw-----n2Bk------kn04GKKKaOaO__KKKPLOKLKGKKLKaKKKKKLLKaOOLGKKK3KaKLKOaKaOKKKG3G43G3J33F3G4G4JGznnE2--G-G3334L33G43J-33JG3KG303F433GK3K3GKG3G3k3GKOffaF--GG-FG3---F-3I-3F0-0303F40GGG-G03GG4FF0--FF2-----0---k-G-F3--04343G-G3KG030-0-Gk-2DwkG43F3G0-30-F3F30-00-G30-0-F-3--G33I--03FG3303F3-I0--3F-nDtfefeuvfideeviivfiuviuzwn--B2BBB22--wn9PeLeeLeaPOfjzyvuiveuifhfifiivevefffjiafjiuifeypeeeiivejEivjiivijfiuieiiueuieeeeeafieeeujvifffiuzziviuzivieifiififPivfeifivPvyvijviefivevevafieeaOeueevfeeveeeuiufiaeefifivizizzwmznEzzBnEzBnBnznEzzzzwzwEzwnBnEnAyzzBzzBn-nEnBznEwzzwnBnzzEEzBznnnBznEk--22B2zkzwnnwnzznBnnEzzzmvwEEBkBk-B2znEzEznBn--kBnBEnzBzzw---4--2-n-RB2Dvfzn0n-kB2BnB2nBknBBB2-n-3-KK3JG0304-G43GLJJK_K4JJJKJG3F43G03F3-Fk3-3-k--FLOadeOaOaOOaPOada__aOe_LPaPOK_KOGGKKKKOaOKKJG-K3Gk--nB-FF-3Rk-JGGKaPPeaPPeuieW00-FF3G3FFF--2-J0-GJ43G3JG-0KK2-3G3G-3F0-3G00-F4N2znB-3jEzzBk-ivzzfjEBAzievivivieevivueiuiuufivzzzvivzuivivjvyvzejvjwzzvyvzwnnBzn_ejEBzzEB2-LOKOaMBBzzBnzwzizieveefifieizzzvyzzznyyvzznvjEzzwzBijzjyzznDzzwnnEyznzznEnEEw2yajzDjwBvnznEnzkzEznivvheejwzjefievveyzByvnmeziuvfiyvyzjnzjBwnkzaeO_PO_dLLG4PPvjivjivjiuviyviyzjwzwnE2zBnBnB2-k--4222BzEOOaeiejxPeeuuuuqeuaeeuuefifefefeeffeuuifeveffeueiieuvfiiveufiivvfeuuiuffieeuufuffieyvjiyfeveiuiffifefieevuiivfjivvjwwnBn2BB--BBnnBwn--2-k2BBwzE---0--0B3F-k2-kBB--k---JF-3B---3F03-k2--wkzEn2-B2wEEE2Bn0BB0-kknBkwE-kk22--eUSCSJrLT7V71K0YLtevvyl3KFzwGJ-DWcRRqP-hG7KyLafizivwwG03G0F-acjpSSKy-VX-IJltLePvV---PeSVrBgmoxprMRTTOa77X77-0N3vk7eoElnII93nzSKBooUSX0aNX0a5V-1pfNUugBJ-9iOdUNV-4v1z-Sfs-zBgmX8MKAxy5NOzKbse7V-0U-Fk-1y-lV-4x-6--g6bj-3L4kbaTYn2J-apmECIJlaN--MR8FTPQYEwpGF-2W9GV-62Hz-7i5cMKKGV---y2dwQvz4K-NgIMwmnUzJopKCCKKIJnKKpKSKKSKMKrMMbrWbWtaT6a550VN---X157cV-VX77VVX7ce7V-nZT45OKJLLPzjzzBz2wLJF0I80TwpCpzpOWa5P7eeV-9fnj-3pOZ6JOX-2f5dcs" :
		15 === bP.eV ? pG =
		"CoE-7lR-YWRa2AEJenMxJpbqTObaOBcX5NeW_xnVto5UUzzrzUrtxtxrMKMUSSyN1XXV5NNOtaUUxzztzUxxpUSIBpSSyNN1aUrSpCCIJpKs50WVNN--7N6bbzrzxzrrpSMMSSMSzs9X7-X-VVVX99ccVVDUV19D--998a6rztVXaOV1771-78VN0V0V-7V---YV7Xh17XOWWV0V6pTOs-8V7XXpCF5-N-N-N-N0VObSxrSrSUyN-aNOsObrxMABnKUaUs-V1-N5NUzrxUWbzUSxprzCKHenMtzKoopSSSzzxxrMCJmnABegmXOs1ABmnCSKCKIC77gcepzSKBe9XfKrHh9eprxmnKMKLmehKCUrSrII7XnMUSxrUSIMpIABpryURpMbtxrrSrMUWtbzSnKKABgnAAKUxztrMUxrsObWtWzzUttraOtbUtbbVefaOrxxpStySStzVXaNTNN5SJhSry1zzSgmpSM9mmgofKpxryU_rUSxrPXmhMQIKSxrUrrxSxrprKLpMa-2V7Va-OV1XXAI97ee9m8a6TNSxSzzrtyTStbtzyUbzzbtztzzzyObaNObaOyUtzzaOttyUMy-f_zztztztzzxxrSopKprKKMSzrzzxzztttyOtaOaOZnBnBmn9mmmpMzbbzWaTOta5UyObtV9eg7XnBNN-7-ObrTUzztaOaOaOaNOa555-4KCCCBnIBnBnBnBpzzSzzxzba-7--6WV-1--771-VV------71-----NN-5---OaTOaNN---0WWWaNN56bzzbbaTTTTUCKSSprrSrMrrSMKpKSUUrSxzzzttaTNOaOVN---VV--X--1N0WVN5-7-0aN79enKBmVX9e9177-X770Ws7VX-WbVccOa-7OtzaUzy1WbyObaMxyN6UV4rUUy4zzaOaMWxyOzrzxrrTOzUUUrztzUzzzzzaNN--770aSSSztV-6rxzbbs5-NOUzzyMxzUxzV-1X9777e9gf9ege997VX7X9X71MMrV-V75-gnAHommmgf9emem9eefBmenA1AHmmfCC9h9m91AIHegn9emnAABnIBmV1mmegon9f9mXenI9fbV1ge7tzV--cgoon99gc0s76tV99nCLo1977Ebs50Vf-AKJcc-1fMMKr9c7-Aa-1mpBme9c-5OWWV-XV-50a0VVUV---1N18xy11--V1717V-0a0VV117V7-0VcWaN7Oa6aNN--OVV0SrWyUxzVe8UxyNN7X2bVSMVN50bbzWVXhH7aNTSraTObbWV0Us0WVOaN55OaOaOV5-OsND0tbzaUrrtVXX6rrV-X91V0V-N-V7X17X99f17X1XXeemXcgeA9hBce17XpA17fKKCK9e97hSrSHpomf9ABpSxHpKIKHhHhIJhMUhKnKUrKKyICCBnABpAAJpKBnIICA9opBme9hC9nCKQ97-XhJmfIKBhJoXA9empmpHhMTehICIBehIKSRkgomfKQ1971hKxQBpprSghCCJonCKKqpMSpBX17XhSnBopKSgpKopnKpIJpKSppIJprSzzKMTTTUQKMrKrrps5-KpUKKSSpMppSSKrrKMI9fBnBpHnK779nAMrSxzwonBmXXppQAI9fCLmhBop-s1-WV1hKBAJpBofBegp9mefKrpqfABfKzbpIAKMKHpKKBpIBpqmpKKKRnABooppKpLmnKJpCBpKABoonIIJpBpBnIHVX9e9f7ceeceegpSRe7f9mmonCJpKSpSQIIHn99cXee9mgf9Xce97V-5OV511711-V--7X1--MrSTT--VcNUUWV-7971--X77c1-VV-V1---AJXN--N5-7eYWs17Wa---cXcWs2aOVgc1ca0tVVD---V0V--55-1eX7X511V-8V5-ge9pMKpKJoepIIBmegXc-fCBmgfCIABfIBogmnAC1gnBnBfAABgm99ggefBXXccXf7VXe9XX6ba-XXX7c91X7VV7X1VV1-D0s55--6USrMSMSrWWbzs1menB1N7VUsN----2bVemACUSKKBk-VVfICKSpg9777--7hCSJpC-----bsN-OaOa56rJnIKT0a5SrtaUs99150zy50ty-55ObaOzbopHpMWa555Uzs9ef79gf9eopBcgnKRkAJomVa0V1da5-gnIBmWVVVWWzV-VXAMLkVVXNOVza-1hRmVNEtSrrpMSy17VTN1mgX7X2yN56zrMTUtztzSxzMrStbtyMxSppKST-V-UTUraUy1Xe-OaN9nHpKLegA9a1ccX1nIBcXXXcXcefA9gX7VVzs9XVbzyUVef-Obzs91UV-e9WWaUWaUzrUSrUrpzzUUrsUrs7efB999e971ceXX9ec7c4rMyTN11X-SprMMMbVcYa4xzzrIMpry1X-V19ge-zza5OzMUUUKpKps1-1OyTSzKMKnIKKSy1V0WxzT19XX-V-Xcf7gekcaUby19f9mdtyMtbzxtzSrWUzrSyOzzbrtrV9gXf1me-eecaTMs7cX8aTTMxSrMtrxtzrKKs--VXDOxSSSSCMUy-XUs7gV97V6tV6xprV7tVA8ySrVEzzxRopzbVXOVaUzbtzKopxRpMrV5StxzrzUV7TOVgiOtbaUzba-emVOtbaTObtbzbztbs9emgf9fBggf9mnAKRpgmmn9mmn9egge1-0ttV9mmme6a-iUbbzaOV7NSs5O_s8baNUVaMT0brs54SMMUICMaNOzzMsD1eeccXUSs8WVObttVVgfAIV71g7XmkXtaT2rxrSryOyMsAxs8a5UKtWWxpKztyObWs1mmon9Yy-X7N9on8V5OWVaNMMSrStVXVcV0WaST-aN55OVfABda6bUthMSrT17XN1fVU_ttzyUwprs2zzbWa6s1eopAA99eef9ttbyN9gcX0y-VDMptzs9cdV6s8WvKy0zy171OsUxT0V2brBpMs8s51kTTUxzxzxxrV17es1mfA-egeiTTOtV55OtttppSzUMV199-8bbrUVcAtSrs7XX7gnBnA9eTOs1cT5T2WxRpzbtyN9bs9ABkYWbbaShMsOWt_QMIKKxzT18VXTTUT-1hPecVOUVbaUzUU_rSSUVVX8tzzUT-ce9f9VemeeABfB8a5UzbWWWzzbbs6tSrVVWxrV79f755OWtyUs1-0aN-OUKMpry-c17aOzWUIMKprUUIMa-1X918V770aTObyUxIKSIJpCUVNN5--sNOMVN56_pKCJpSJoonKMVNNOa---OVsOptaKMT55NNUrKxxrMMT11115N7s9kc9V9VttMT0UTNO_xU_nJpUs7NUSzzSKKUMUts1e1T-c5TOVNOaOaUy2V50_zSUVX119X7USxs7--OzSCUbbKSzsUxRnCBnCCBnKrCIKJnIKM_pUVN5NN-7T50a5OWV0aNNNOWWxKKMBnAMxpIKKIMaSxs1X6rV-D6V-sT-UUVX1e9Os7zy-5SMUTOtpKySqpCBoe9nCTURnBpyOt_oonBnKttU_zV7a-5-tWWWtxxrqpKTOttSMsOrSxhBpT6bxSxrtUUIKAA9nHpHnBgeecf1ee9XnMxzxrUzUQCUxSs6SompyMs-0rSTUxtTMzzrrrUV1-sSxs777UrrrUMUtzUpMJn9e9ee-VhKgnMzUrynKtWzrzzzUxJpSKJnACKKs0Wba0V--UTOxyUrxzxyUxs-xyUrxzrUzprzUrpzUrrUrSyMrUSrrSUUUSxUaSfMT6xrSzrUrUUby18SrSrxrUpMUTNSUUzSSKSMSrMKhSzTKSpMLpMCSCCJopCIJpJonBonIIHnABggnBnA9nBf9geeg9ecce9cf1e9mm9mecf1eeece9X7cXXfBn97V9eA9cX7XfMQB97cX9997VV7ceXXnKSxxpSKxSxzQMUtxxhUr9Xs1AJmhUzUUSzzKSz1hUU_Sz_xrrSzUMUKrSxprqnH19pSKSpBpQABhMrKSxrKSzMBpxrppIMygpSrBopryKpzKy0nMMzba0rrUMStUSpSrMryMrxzbyUUMUty5-Ortbs78V77X77--Xe79pHfBg997X7X7X77ce-X7-zTOa0VV75TUUzUrrxSrrUrzzwfACKrsObs6TSz_zxrzxrrrtVN5Sy-4W_BQCq0c--5XUc-X5rCBxMa7PVDNUK-nSJp971_ESHe-mocmeKzxIIOxttzsTT-Ota0ee-057TlBpMMMlsOV7Xe---Z41V6NZVgpBmXJgnKMpr6WaNT0c7--3XZyYK57-DXainASrrUs-cXc0D9q9BhrKpMy6e7VHVV-19qEB--1him-7XjEvIohy--0DA35ggnKEGzTOs90X7-DANdhT7-7Xt_vISba9c11AoEBnACBxrSxSa0Wbba7ZmcWXV0Nl-LpUX7--232P--Y4hn-1NmHcmmnUy5--yBtECSKpGaNP197-0YF0nN-QYKBvKofomhMUtzba-1WcBcV17r9ZnpzsX9-4YWUUKaNc-1DHqB03YaRQJjHc9K9Mp9XmrHhrJhromghUxoOVT5OzMxtV5VNT--7VBc--DVec-5DXQxV-9EWOSk-7cyKynBpBnABoopJ5OaTT5NOs-OcVH7zjtnSIAHcgnCBomn9gjzUxrxCBeo6yT5Uc5Wzxru-e-Wy0s0aPc-39Fz7gpKSBcCHgcWggnIpRObztbxHggpoehryP6tbaT-VN-17---ZFFrV-t3OTpa7--GJ2c--GJFN-5GL3xc-9GPigq-T84fLpBpAMHpSBfACoemeoefCACAJrzttaUM5TUa5TUIErr0WWxOtWaOzyNNNN77977KACKBnAC90aTN1VN-7c-eGPvhSrq0ceV-1GRaD-9ZO8jSpKF--7--ZPZE--O6VKyV1O6qJppObVXc-aHHGgonUbVV-1ZZurAs1XHQCRnMzMppopDOVNWbttbYBec3mgce---HWfN-LHY8SS5X--09ahV-tAuEpN--TI4hxDUT7c-PI_QzrqXX-3ZxNzHzV--ZyYEV0dEl0pKsV---J06s--J71N--J8is--JDws-5JFcRs--JKrN0iJQsgnonCCL6xba6yOWXe9e--_6BUV2dHDArSUrz1XXX9-E_ADrICMKoN176X--0I2AV58JkgmgfIIICCTOaT0wNN--PKIxzUTcc-3_KPjIqV-1_MDbCV0yKYtSHpIpCSKHZlzLNV-10V55--5Kcizc-9KeMwq--0MPIV-dMpxrc--_Ul6V0OMzAnSN7-O_Wd6ppSppKMwNP-7X97V7-F_Zn6CzUrMOX9Xc7--_a82V-0OcIV-8OxHk--LW2N-DLaXxTX--4fBH-2_fwzLPV-0QFUV3OQn6xKMSxy0X-ee7-F_tjEBemhT6zzP7N-1_yrzR71uMvlwxIBemeefSu6zp9zTOzq-5TUxxWc9A97-9N1TU5V-0Va0V-8W-ps--NFDs--NFLN0aNK0UKptxxxrUNXXX9997V-DOBAzTX-2aJfQBy--0a2hV-0a3SV08aU0zT9V-taUEntc-5OtESV-eP2MzUSk6e9c-XPIwxMSN7VV-ddFArc-7aafrpUq-e7-TPquRnTTNc-mPxXxrrKlcVV9-3amCbSkV--5oXa-Gat6zSSzrUR7X7ec7-HQgPwxu7-9R1zzP-1tkzEmgj6zzXc-2b3DrLP--Ol2rq-78lqzrHegrzzzKEUTN6seVNcgeX-kbAFvBghCIKIIBpBognIJpMKSSxUSrSSxUrpK--0ogPV0OpIUnBOs-SbSprpUSI9jxa6aPeWzz5XeeV-PSyVwpEsV-CbXszKCCGWbsV7-0bZmzN--bbTv--0uTlV08uUInDTV-OulbqV1tuqQnCMF-5Ue-2bh7jJP--0vJ6V-0vjlV-OwCMqV-OwVCw-0twdKojFTNV3dwdbnUSMzs-PCA91V-HUDFBraV-5UKsSc-DUR5ByP--6rqa-2bsubMc--tyOApa7-yUdojJmnIqOtWV9--bxunV-0zWdVAOzeUnxBmfrrICrUUUUrpHzWVcWX1175X-Xc--UzJs-9VELhk--e0DGpX-2c8yvE5V0P1YAmzTX-Fc9eEBhHgn5Uta5N-OcBY6pSrIAUJgTOa-09We7-GcENbMSppzye9777c-9VzggtV-94IUs-9WO6SNV-95_ss-DWdaSDP-mcR2MBoggxrpUzzKSEzxUqUyX9ecWaNVe79V79c--WkEs-9WoBzNV2u6I8rMJpGaOV7Xc-9WxeRyV197X5onrsN9-1cXrMEc-uXElzMKM575NHe-09AHrpNP--1AZrV-eBC4rX--7ndq-4coH6ETP70HYKWxSMOxxc9XWbkd9V-9Edzk-HZ0xhyPc09Z7pBmpSxpy5O9V79--82Ca--86Zu-2dAgzUcV-PI-Bq--eIQcrX-1dKuADN-H_k1UrXc-9_qWSsV8uMPGmzMTNUUUSEMSxxze7e71c-XHee7-Ha0vzScV--aLfs01aO1woxIC6a-0tuc-DaUtSq7-6dh56pM0X7-7dp2zMSR-X--abWegmjUOWc-EdszfAKSzV5UNe9V1PUQ2nABUzc7-5by5U---cAvN--cHps-5cLGhV-DcONzR7--98tL-4e9eMrR7V-HciUxpX7-udBoSJfErlbuVX-29aVfmxIpGa7P--DdjHRtu-6eW7EKSN11--9XeD-jeZFrBfCpCSxpSrzJ5TUcOzaOXfBh9X9X--1c-1eGYR-5efWrCracV-1fXrV-ufyWxkV-ufAyBoeezUrzV-V-ugwopa7--fJNN-LfPwSpkVV-9iyzs--fqes-ifsnRxzxyXecV0ejZ8nMbe7-9ftmzP-FujbporSIzSpMUISCxzx-VUzrrTc6zy7Xh9ecVWuXX-7mcVHe1--ejc_xc-3ezMzK51-4ezOMKGV7-1g-Dw-Rf-nQAA9gnpMtzzzbttXXX7e-1f-oITV-agD2xzola9X-Ff2bjASrxSr-97VV-4f47MJyP7-9gJYUP--9lWRs-qg_aBfJxrzs117--gavs-PghqUKGX---fCFz-09nVOpqV--9njxk--gyON-Dh4IxL7-2fGYEENV-1ob8V-upTOpa7--hVws-XhbrSpLOcXV1eqiCpKR0yX7--9qk6k-PhjSS9c6y-7fR-rUrR7Xc-ehsTBgrqUscc-PiJ1hASaV-bfaA6AI9MMMHhzpUbzOyOz1X97-1ge7V-1tzIV1uu69nCrtwP-e-9ffCUprUkVXc-5fgVYCM5-V-9vpss-5jH-E--HjT-wxu--XjYHx9xSVN-19yPqognyT--pfugbS9rSrSMSrzpaUpSUMSkVV-VVVPHgccX1XX1c-9jiyz5V0Pz_GnSN1-4g0rMKR-7-HkBVxlu7--kCK70LkGUSpMSrOzuXWse7X9-4g57jrTXV-DkQfwxX--B98T--g9En-1v1y0pKorN7-7--gDm6V-v2vCxNV--l12N-Pl34RxUcX-0gHXnD-7gHhbKrq7X7-TlB1xMxcVcJ1lBSSrSSppzUzxpzT6xSSrKrMJopBmcXcxrMRUSpMKBgc7N1cX97971AMHYSSrMHcce7eVVN77XVX7-Oc1dMSHooe-V-CMKSSKq1VUpkUSrUSCMMMUSzSprKKHexxrSSxSxxyUSzzSUUSpSpSxKKBhUpttx57OaP0WyOaP-9-0V7X5CHcV77X1VVXXV-97cV----0c-7VXcY97X7ece1XABcc9--23yxV3v42inCMKrbVBe-0xXV-A4Ugk-aliIwpIMs----BS4D-2gSBER5V1v6fGpCCptV-X--BTnq-7gVUzKKT-VV--m1DN-qm1FRfpppNVN7N-DmEsxT9-QgZUjCSKEKR6xGWe57N-ZmVV0A8RQxR7--A8TUk-imT5xSTTTd9cV4Q8thxpponSpTN7-X77V--mZcN1immTUMSKCKMR16VUSprGbxkXBcVcX77V7V-TmmkSpUVcV-un7nSrMSxkX797V1ABckpMba99-0go5MN-5gpKjMMX7V-QCSMnV-vCllpk7-Pn_7wppc--6gu_jIIqN7-3gwCEUP1-HgwGzMMMSxlu7X7X1V1vETrmxSrTVX1--C-0D-Eh0RESoxSRN-X09--AFrbk--oIos-aoMTSIKFN5--5h58vIRNNV-2GitV-vH2_psV--oc-s0aoc_xKMSJe9JUUqN5P17VV-XoimSI5OycV-fHxjnk--CB5q-0hHcbN-VhHl6KpASSSKIMxsVWyP77VXV-7-HpEKxUX7-mpKbRoeKSo-NN--CNDi-7hOczxzTcXc--pboN-DpiAwpV-5hTmMpR5X-0QMjrnMN7-1hUQAT7-HqBoxK---DqWZRr--IhdNrKrSzOV5QBeX3e-9hfVIBpUzX17--CfpD-phgbjBmccjMJrzke76zrrMMSrUrpSyc17VVX7X7X7-HqmXSSX---qmvs--qqEN0HqtqSrxKESrNN7Xc1XV-2R4lV-fTzpnk-1hwNUTV4Prr2xMJnIC9EIrJomnqUKKCJeIIMOxp9MKzKSr6XX7--V57OV70WXV-5-N6a--V5fUUEofHchpKMOba7X5UTP7-0hzqEP-2i1rMSX-2vVmOnHpplxk-WcV-9sS7x5-2fXLhnESoxu7T17-2iCDURP-3fYKfrK9fISr6s-57---sq1c-DsqBSTX--DFu5-1iHcjR7Bmt9wxogcf95IIESpAAJegxUJfxI9onJeCrrrUrSUSSrSpMKSpUSrMKrMMMSMSppSKCyUUz5N71-0aP5OzyOzUSrUN6aOX10ty-7-0s-7cV-7X1X1-VX9XX7e9cecge16yX-X7X7BmXXcV-2iHoMUcV4Q_4_nBrpyOzSq5cXX7c-HtGWSpX7--tUGs-5u0pzc-Tu6aUSS-17-Tu7VxACOa---u7iN-5uEYS--5uEcz--auFlSKqNO99-2i_aUGuV0QdwKony7-BicpMJrMSc1-5V0feEApSWcc-5uYrSV-1uf6R--igpMV9vfYUppKHexxMzxxrUROttX1e7cW97HX17--2fYfV-Qf_oq-0Afj_rL7V0vfwMpMaX5V3Ag7opBpKpT575-7--fgPSna-4iqejAoOV-avQIxxrycce-0isQUF-1is_AGc-LvkFzM5X--fjqbr1--Dz_T-6j-zjASq75-1j1jzlc-9wL5ww--2lNpV-flSUxX-3j5MbM5X-Hj6HUJm_prMSk--7X--vlsIpk7-HwadwjOV-1wepR-2jAT6Ia-1fnTTxHnEy0X--Anark-9wvRwtV5QospnoxMSOzr0aNn9X797V-Qp0rq--QpG4o-0QpR0mxlX-4jL0rSq-c0XxPBBfBnEMKKyNNTOVN1e-6jMXUJlz11-EEgqwecX-s5OaSs-AjV-jKppq-17c-9y-hSkV3fsD9ppKIKDNNOVV17-Ty3bxJp0V--9yERww-0Ax-_npV--Ax2Ik-9zfaxkV-vzr2xk7-A-1BRy--3-zvV-w0lpqTc-I-kixr-c-A0MPENV3R55SnBpKkWa0zGVX-nkNrfACJeonMrxSrrrSrT55-IC9e-0ztVNX7X99--35IBV-R5UCqV-35iqV-w6ltpWc-60xjx--A1PugyV-B95ws-E1cpgpV--ki4IV1wAqXpUTUa1ee-4kl7ACOa7-02LhN-02YwN-I2aoBjy7-f2fQUKrScVc--I2gExS-V-b2tvSppo-7X-0kyWUF-1kyZMq7-036Ns-M36nwhr---RFUnqV-BFvKk-03Kgs-A3kyxNV-wI34p57-644wwN-64BcS--04PSN064PVSKSTUF14HcWc--BL4Uk-64ckSV-04jBN7r4jQxHppKKpMJxHe7V1-ecnIIKABoopUSognBnIAUtbotyOyNOsNTUSJnKq0a6ztbttVOzOVOX-5c0a5OV1XX7Ze9jpI977AI97--lSWj-FgMRSmf9zbrpzMKc0bxrKESxrlVXHVUbbpSkV7XccomXX9ZcP7-E4xwwja--lXvjV-wQInrsc0Q5ozSpKEryObbuVgce1c-Q64OwhMWX-0lmZbk-0lpy6P--GtFD-2lu5jKVV0RUb6mp6V-0m9erN-5mBT2BjNOV0wZLzpUk5XVPBZWrmmmmnIJrMSrSSSSKSMUxKpKrSESpbxSSrMOts7-7Ve7cnA9119-Oa0Wba7V---V7---ece-cmKJQBmp9ggzzrSKMMy-OyTTOX7X997X06mLdEBgnABnIIIICCAJnJpCCJnKJ0a5OtWa55Oa0WbaTObcV0WWV--I8QGBxs7-U8RIgpzs7c-29W_w-3mdg6Ctc-0mguE5-ZmlOjKBmmonUUUUbw-OzwN-VHmc1eV-wgZprsc-rANbgnKrUtX17c4UAhBhBenHYBocVgprSCHZnrrUMSxHnIKLOa-0VObaUzxWza0bsNOy1X7Xe9n9cV-1n8XjDN-IBkvzxXc-2BlYi-RnBjzIEMMKppKKF51-1-0V-9--nBzMVXBp7smn9f9XehBnCAIBomnABmceXeZegccZmonAAIBnKSMSrMVc57OyOaVUzWzOzxxzzztxzxxrrSrtbVOWtVN-OVP7V-0aT--RstSq--gtJnqP-3nilrCq7-AniufCAM0bbcV4UEFHBomghIHoonBnCKpKICSKpMxIBnJOtV-OsTOtsN0aUX7VN---6zOa--7fJe1-7nuYnACrtVc0EFVzgfBofKUUaOV0a73zH2ShKICCCCICCIBgnBpBpCICKpKCKRN55N-5N5OV0a0aN5-NNNOWV-NP7-zHTMwnJhpJ5-OVP-5oiBECSkV-0hBVAn9M6V-IIDDgzZc-2IgAR-1pHnrR--2KH6w-4pLvUIOaV-0KUwN92LmEgfBfBgqUSCrKKKBeVUX5-X4JmoocX-57NNmconHdBpJce99pKppppKIKopMrtxxxprKrMUStaN7-6yUza-7X9775ObzzStV--51--N-PcXX7-ILxOwoOV-UMCUghM5N--AMQdSNV0STQGrScX-8ptlrCCCta1-0CTnYnqP-0SVFsrM-70Eq1sfHnA9XcYCppSKKSErrSSCzpUUzKTOWaN0V0WX7VXWa-2KBme0WX19c-4qODnHrVN-2OnhB-Cqb12CCKJ-UcWV-IqjjQSrKAMzTNV7VXc-Nqu9fBnACIHnSLNOWWaOV--hjnFrX--r-vI-1xkFZpprOu97V-zr6zAApICSUpzKUxlyUrwUxKV56a6a7VVXY9_HmmeXVX1X9V4CmRVp9mrMaTUxT-e7c-OrAdfJnKrrSrrsN0X979X9-0rFTQP--MKdX--M_8P-DreVnCCSrzVVNec-AVFgBTV-T02FyV0L0slMs1c-6VTDEc-6V_Ajc-AV_JBtV-D5hsk-b_7iwnSROX1--OPBa-1tQurDN-Ya80xERTNXV" :
		16 === bP.eV ? pG =
		"DwCd1sP0j--RaO__ddedddifv2EEznnnyfEeRwyzBBBB2Bn00-17-2fEMK9dCrtzUrrMMqN-X-789V----Sf-T--yfzIrzohrxy6kX6rSk16k7---11J7Z-35CISoOxsUKESpEP6qOV6pJp9mec17cmhpxUSogfBnMMGWxptyUUzc5UrtttzpoTOV6lVVZme-gcfBc5cUrztbV73cWztaEO-1I5dLOfvkygzEyaOdzjzsl2knvg2EW2zEznvzzyzyfyyzzvjuMyzdzjivvvyyinyaTVyydzufvevjgwBoG-znzdiEdbg2vkyjEyiazuK_4OGaJaPjzYnzzjBwnvyfiigEnuP_vjuiaOMdezeififiiEfgzfusnEeO_ivviEuvjzyzivivivg3EjuyjiezjjisnvvEffvznviyviYEYyzjygnBz1_Fl-zivjEzyuwnB2z0434-4G304-44-CGJFKJEK42Bo-38G-340403LK2kl44G_GFn-G402l2x2433432vuvfvY4-l-0-FkF3G-J43G3FJ3-G5J2---20L-Y-8CqLKOzvEjYn3GF5N0A3mrIprrIryT1Wace1XV0F2MKYo-H05ahSVV1R1RHOKefiznn0-z4KUy5MEe17X7Xa17X7X7X7X7e7X7-17Xe1XeX1VXT0aN7X7X9X7V19X7V17-Xec7X-7X77X7VfBctaT-17917-X--7V0V-9Xe19X1cX991hJpKJpKMSKMSKUIMUrMprSrMSrKMSKrKKrMSrSKrMprSrMpKMSMMpMSKrKKCKMUzrxrSUMUKIABceV17-XcX7X7917X9X7X7e--0aN-7V17XcX77eceVX7X17919X1EzyTN5T-c-7X77X7V197XcVXN-7V-17-X18VXD---X7a11--7a17-99177Vce91X7XX1cVXe9XV-N-7a11177VVX12V0V-VX9-N0VVVX1-1171777s0V5-N7V7Va0bVN0VUV-VN-2Vs--a-NTN0WbV50WsN5-N5-N5-N5-OrxzST-VXcc-VN-1N5-V51-15OxUSxUrxSxSJpMs0V-8V5Oa1D18V91191X11-VVX19nCSSKSSSrMrKQKpK7cXXX7Xcs-1X1VXVV7777719-csN7714yUSpUSSryN77c7X0V-16a0VenB5-D0WV9X-a0WWVN-gpC7X-gm10tV0yN7NNN1VV-N1mm-N--s-7WWyN--fLocccAAC9555NUsSpy-Wa555-c--hIJpCCBmg5NN-NNN8_y--N0VD-epnIKCCLVXYWV-919prKSC9cV77-V0Vc11111TTUVVgkf1991D-e1-ceXX7X-WWs9cXXgcUxy10Va1cXei1monICI7g9-XgegmVgem7X6xyUVc8bbta6bbtrzMST--15NAA9egemfABXnBm9n9XmfBpMI9mggfA1eceeegn9eeXe9AIBme7g7Vecg7dV9mgecVfWzzyUzxSvCMtbtbzxtUryOzzttbtaOaTOzs97ea0VenBmN5N-XN9X9XiOa5ObtaNNNNOttVgggnB7e17OVN0WbtT-tWV5MV0ztbaUzMy2aOyStI7fCMtxrzzbKrUyUa5Oa0bUsOa1me7f9cD-1997-VTOWaUV-WWrzzxprWzUrqnBnCKrSSzySSza19Es9aOs-c-WsOaN50V-NObttrSSxzzbtyUbzzUUzUtxrUUTUyULpf7hKyTSBpMzpompqpSxUrSSrKprUSMMUTMxSrKSKrrrppMKMSSprSy50byOSzaKgpxza6zUtbz_zUmgf9mA1egmgf9pMsOzbtzMyTOzzMbttWy2WrKKIKSKSUtVOsUCLnKUtza5SzUxSSrSSzUSrMrUzMttSxxMSSHemgnKzUSzrzxzyUrtbbpSrzKtKrSAMKSs-T---X55UbsN9eem7iObtztyU_rQMKrUSMzzSrxUzzbyUxxyUs18s1UaUprzxMKJhSrMxpps-V-798VUtaOVOVD-XhHDN-6V9XXm7ce7VVtV-951-Ors18Wa-7-177--1-UVcOyUbzMTUbURopIKCIA7f1hMShJonIMTUMUSUKKUMrSrRchMJpSryOxxhIMprSJpxrs---Wa4xxrSprKmpKKxUSrUT5OV7N2a--7-ztVYVXcVV2aOzrzzxrSrbrIMxJogAMSMSUUSrrKJgpQJnAJX97hMMU7fHeX-en99pSrxwopCICBmcXXccXehSrprUxzbztTpKJonKCBfHeXnCLpBmX9XpSzrpKpABeepS9nKnBofKwnBopRpBopCJpKpKKMKIKxzSzzzxKMSSSSKxKSIKtTUWyTObUrrxzrzrbrSzrMSrpzUxySrxxzrrrzzbtztzyMxrUKQKKSSppMKpSKpxprrSrUUSxxrMprrttVD5SrV-a-NN71-cX7791-77VVVVX71-TT6WWbWWWVN-NN8V711-V777X11XVcccceXVXXNNN8V-15-9-VV791dV1-VVX7X1-sNOtrtxtxtySyUVNStUrUrrbUMrppzzrbbry6pKKrMMMrMMCSUUKepKxs0aTTMUUU_rMT-OVN-6T-7-a-777V-5-XMxSSxxrxMU_pzhUxSmpra6QKUbSyOSSnMxSyUKSxCMKUtprySzrxxKttbzbSrbTN0xzUKBpyTSrrMtttzprrSSrMSpprKCILpJhBhIBonKMKLnKICJnBgmmpBm9mnAABgggmeommnAAAJghKKKhKgmpAAJpIJopCIMIMIJpCKJpKUa-s550V2VN50VNT0s5OWs6VT5NNTTTTTMyUSSxQJpJpAA7fBprxpttWbbSSQKSSSMMzSrt_rUUbUbaMyTOVzTOs7777N70V70_pzKKzbbSJpBp11hIKqnKUtIAJmnJnJmnIBnBnJnKKLpBnJhI7e9778V1N5-NT0VOtbaNN9gmmmkfICCACBgonCBpQICBnI1fJo9pSQJohBchKhCKJopSMKSSMrSMCIBomooenABfAIABgnIIMtsOaObbxI9mmon9gnKUwpMJpJpJpBmpSCShMKCMKCBpCK10V7-77X1-cVV-7hKKCMKrppMKSKpIAKtxzxSKpxnHghUySrvCICBfCJpMbnAIBhBgompIIMC9mgfCCKBoonIIICBfIIICBopIIIKKCKKSKMUKpKxpSSxxMUMKKSKxpUpKrSKSKSKnICCJnCA1999-1A9e-7-cXXX17V70a-f7VV-1--7XXm997cXX9AAC9mgoekccXg97XXABmkf9f9fA9emXn9emgmgonKtxgnBfI9nBemef1X9-9gn9meeXA9eemegoefBmgnBnC9gnC9eeggnCJhBpBnKJnKKKKxpIKrRhBhAKBhKSKKKIMKKKF7Z2MkT__44OOaO__O_LLTbYvkyffBkEcw2knyaaiBkyEC-x-nl3-3VQ3QMsc-O-txaOjzzk4K_-7VS-vCSzc7V0J2qEPevjFF3F--6mTV-FGRlV--92TV0kLotbx-a7AuPnIUUoxxzbzrKrpKKMSSSlWxrUsWtzKlzTUyOzbw516xSUzWbsX6wNgc55Xc7mcXmgmeJmofomXXIBcYHcVPXZcVTUceX1d9me17ee9-A0Y6qioC-asBoenIBjSUIBjUSJe9ceV7177eV7fC9gpzzHeeICyUxA9efIrzM0zKaP6kOxIMtxzbxBgef9gfMSxyU6ttaUttzGzryOa-OV1XCJc9VcN7---40ekqQ--NDEDyV--Red-6VumnMUacX--0pcZ3P2fIBnrozKocX7X7poxognBU6zbzojHxISryUWX-U0XV--V9YHX7--6M-k--Do0VDFSy8__bfuePPaEykFkk03C2-3VwCbAMV--0t6o-92oUS0V4FUCSaOQzBn4---ywe-Y13Y5KOjuRyaEBG2F--GW_V0FZtli---3co7-38GgR-93kCEP-1kaQpeNn--L4BWBn5T-BFdZS_ePOvjjjjwk3-FJGF0sL9epCyN9-mkhAhaefdPOOaOd_eO_dPLyiiveeeyEnnEiEwBk2nEnBnEEEnnwwznnF3333GGKJJG3G4KKGJ-94g9CkV--ipW-VWVbABxrMKz5OzJxsNNNVXmXe9c--B49F--PnOV-FqcSV7sQLqmeeppUUSSxtaTU6yT97997eeMC2a-LKOaOaOi_vdPiuzjd_dvijyu_KFJGF33303FC2-oBBB4KLOOaaOiaeduaeeffdiuzzzyyydKKJLfivjjjYBwyuyynzyEnznvszkxFzwzjvEBG0G2zjgyuyYvybvzjyieKbfYBkwzivYvyvyEiviyvfuuuPfePPaadvvvjjeOLP_MdOKKK_UeaPMefvjjYzYknkkzznFzyEjzjfyvvEzjeQfjYvzznzyiyEsywzwzYvEgkG43K4GJJKGJJK3-zjsEzjjvzwyyvvC3J2G3FJ2yjFG04FK4F4K-OKGJGJG0GK43EB4GG2EEzyvvn2yduyvjyinzx33G033Eiw-o-KF2k-GGJeKO_-0PL_JBFGKOF_KOHK4GFxOHKGGFwp08J-yEYnlKKFJBwFJK9eOFHLTdJ-kkn0KKdFPPe_3-B3HeOaJ_2-EeVC-3JKLdi_FHK20dPJFk0O_JBl3KT_3K5LLfjdJeu_Fo3_JiePJF30-l3FGJFoGF-X6dJBfEOtsV0FxOWbo-D6uCS6X1v2zp5_4fu_4ivEdiuPdKJF45aiivivyyiviiijsn-znBkBF235J-GG_-nBl-w44aKKG-KX2_nCErSSSkOWa11XeXLG1g8_OK_OOO_aPuKOdajsydQjznzydLKK_5KaiuyzyvzzzyzjvjidLK3KKGKKKKKaQfefjizjzyvdefiiznyzzyEwznBzwzkn2Eifzjufwyyzjwww--GPO_--zVBnvgEekk3K3GG3JGGFFG2B-333-0--03G3HK4ePeefeQiaOK--3-0-JFKiydeJHKJ2C40GG_ddKFnB2-JF0cWyMmmyTN-ZGfute2---ZAWV0G8Ihi3--8AO7--I0sk-7aWNk-RIFpuEF018vKgpKEM6tWV7XV--L5Mk-NgeYlV6GUzf_eczf24_-k-1C0lB-I5ZZqOynkqK-5YJBIArlX-1Gfu8_yC-6YOlnKIOV---5qJB-DCgdwja-C61_LTvoG-kYgE2KIJnAAMUxzUrOxzTOWaZcV9176qXeX7cVDlqEh_PPeffijjnEBC203FFGJ-mDm3BfEMtyP89-C6VITdTn---2mET-26bSqk--EMts2wUQzuiijiibfV-EYnn3G4LJJGF1szi7nJnr550e--78qw-1FShy-27J7aR-eFczBxKoT7-V-oWi1tLgwk-9FyXENV7H7Of_bisywyoGJG-GZSgYBepxxpyN5X97-gZ3Btfw30yZX6E9mY9eememXeefSzxzT6xzUrMommceKIABhBeMUSxyOWbbbxzHpATTTV5OzxzSy15Ua5O93eme9cXWWbbyVcmVAmK5MiyiajY2Eil3G445J--Hp-s--aMYk-0CdpV2HW8xuvoG-28GGLmemxr6tsV-oczDQis3F11JY8BgnBopr6ztzzNOWX7e7omX-0mZRx_UkRdHRBnKMKpMJppJxponBop6bbzxpxKlbWa0WWWX-UzUUrMzlxrWaWXVd9n9WVVc91e99X7eeVjHcccOe1V--dDLF0OOWLmpy1-6AISazG-5_hMYrq3e-2mvLGeyn04-Ca5w69nUrSq17--QBDVUivzzlJKJJ-qNYawozzyNn97c23mKCO_OLdiffgwnBBBl-J-5OPQhV0wnGIOeeyin0230F5uPAsSSUrHprMSI9BenCHoeXAIrrUUUzTUzyN56rzbV0bxbtcOyOttztcmefBgfBn9ef9X7VXX7X7X7V9IG_jaaeivzB-pFn2KJ09Pe2Rhbzzxxu7cemc-CCRoydz-p--5k5q-ICZKiPvjk34--5npT0dDEw5Oeuaufdeu_PeijB-BBFkoFG2EfswFk3-JLJ-9Ul6xk-7nzgraaOeQfVBB-n-1XVgnghCEpKSIIIMKxML5-0Wc0c5V71-7-C0ccQ-B92pWnABnIBgmxUa-UbtbrzzrtbbueXBee5Pec-C21Ktk6e6I4rJpIBrMM0c-0zzbae91c7Qh2tpO_ddeeTbeeiiduuffeeefydbefjiedeeaijY-nnBwnznEBnnEwk-nveefdbYw3B-2koFFnyjueuTw2FyvfiB-32G0-oGK3-OdveeJFFFo3BoLK0JF-40OOaOa_8KKFB3OKefddFF0--02F-00G2--5cWxzMSV1V0JNHMaB-uYI9RnKMGWWaNe-HJRYn_aayu_jjjeBC-FJFFEjiwC44F2uEcgpJxIIy5-NVV-07cwk-PGjhlV3oZcraOPzkC-5eHK_nABpKKrK55-575TT-e0fHO2qaaabeuauQeiffeQffF-33-kk-BB222n4J3K--9LCls-CAWRtk-1QXrVIK7Wd___4aLywyizYzYEyEBw0JOJOJJ-edEvRpK5Os1V1CKLfOdOyszywkGG4-5etPbKtae-jKWNneePfiuiifiijifiw2yfeii-zefeeeeefYBBn--0033F3F03-G-3F03-4-0GGGKJ-ufB4MHjSzSomcXfMpzS6xKKKKMSsV-10a7V-75Ouec17-6Lbx5JE-PfeifA9eme9AJzrzxztyN57-SVW5uU-0qkprRxMSKSpKSrtV7X7X17--V-58t6-LgVLbBpIKrWzSqV0V7Ve--O0SB8LoLpxJnBgmpICBomogn9oghBnIBpUbWxpMOzzVUsUbaTOa55ObxonKESyUSzrzRUtWztsTUzrMtcVV-V-eX-0Zegee977XX-cemcY9ecV8q__U_OdujEvnBmK30--hDurV-5vfz37hzjz9gemecf9genrI9ggn97gegegoenBgopCJonEJUzpCKKIKonKSKMKKKSMSpUKrbzV0V5NN-77VV-7X-WWVV-N-0aNOWWbsN-0yUUUxzrzSMKrSICpJnIIErL5NOaUSxpSUMSSkOWWaV1-1-55--Vc7X5UxrpUSUxty51-cVXX97VcXZecV9r1ep_LLasznvgyw343F-AZ4Kk6pnU1tLuaOG5K_a_OLLPKeOddYzwwwzEnzEnwzE2E2C-JF3-4id5YIMV7-Cs_ftkIvpQOmnA9nBgf9YBoooofICBeeCBoqUUUxtza6aNUWba6aOaOWba5T5THcV7NLKvdveejzG-33F-5q05bAzy9VCvXK8_eeiyvujin304_-3-0FZT-95mmcgfAACBn9ggeAA9mmnCUtzrprpUSAAIBggecmmggghM6tzNOtttyTTTUbbbxzKa5N0bbbbbbaNTTTTTTUy551ccfAA99XXcWnw5hG_OLKOLKaO_LKOK_POOKdaPOaPOaaUzBnEknwknzE2En2nzEnzeKazEyzzjnwzzznyszgzzzwziyzjvvzjEnueOOdawzEnnwzEEnwwzEEnknEnB0JLJJ__OJ0K_JLK4K4_G8K4445K_48LK_OK4G44K4OKGF1TETamnMTOVc" :
		17 === bP.eV ? pG =
		"9mDS-FP-F--0TedPPOXo0HCGSpxrMptUSrUztztbbsUtaTTOzzzzStzSzSrSrSrppT-0btaOaNNUttVOa---56y6aOSrUaN5OzztztaOtTObtaNNUzaOSrSvHogmgfKpKSrCJgnIICMKrSryUWs--17XD--OaUzaOzyObzzztzrrUxUKprrzyUzzzzzzrSrrbzUSzyOaOsOzzzztbzzrAMSKzrUzzUSrUrrMKKSzzxrrxrxrrSrSrUSpMJnCKUV6aSxxUSxrSSMzzzWzz_zzzzzzxrUzxUzzrSzpxpxUSUxrxxSrrMSrSKKMKMSKKxrSKxzxpJmegnKzWzzoeepBpABgohBnBpMSKyOsT5T---OWWt_onKzzS9ehSrUzzzzrzzKKAILmfHnBpUztWsT0WaOaUzzzUrUrSzpxzzrSMSrzzzSKKKKpyTUaOzxzxrxxrxrUzzxzzzzzzzSrxrUrSrSzMSrSSrSrUprMKzUUUrbrbrbrrSMKxKKKpIKKKMKKKIBpKBnJnBhBgnCAIBnBnBnBgonIJoonIJnBnKBen17AKICIKKJgpKKCSSKKCKJpBpKIKBnKKKCACBpKMIKponBgfBnCHoonBnAKCKKCI9nBenBnBgmepCBn9cecegX-9eenHmognBmegefBnBenBnBenBgmonAKICCKKCKKKIKKJnCJnBmfBnBmpBnICIBpIBmpBmnBnABn8aObbaOa0bVOV1n9fCBonIHmonCMpQ9hCAJnJgnCBnBmpBpBgfA9nBmX9eeeXeXcXX9eee77gpKrSrzSrSrJnKKrrrrKJnCBnCBhCIBgemggeggef9eemmeecceAKKrKICJproomgmgeee9X9eXfKMSMAKMzrMyOtxrKCBe7VcfBprrBAIHnKhSKIBp9emgfBnCBpSMSUSxrrzzrKKLmnBmmnABpIKIBmgmnKSpSKUSrPkf9en9nAIKpIBgmXEV9gpB7Ve9VX9XbrUV1cc9V7Ws11chBeaN7tV7AIC7XN1N1777c2V-a5USy117aNN-ceef97Oa-Wzy1N-17WbyMMKSCKrs10WV-Ws978V-5-D5-s-7VcgmfMopCSppIA7XV--1-2bs717V15--a52aN-X1-cVN-X-V-ts-0V0VOV1OaOa1-2WV-sOV--7OV-V--VX-7--7-0yN7--7-X1OWa--1-0WVT--9N7OV--1-NN---V-17V-15Us--V--15NN7----VX1N7---X71--17eX7X7XX1VcX9XXcX9999A77eVeX9A17X9cX7X7X9cX7V7VV---717cV1717X717X-X7X71177X-X71N19--97X-X7-X7c-91X-X-7X7g7XVeX7Ws-177-17-5Oa5NOsOa5OaOV1XmX7eVcOV-95--5-sUWVNT5N--0WWtztaTT6WaOV7-0aOaOzza0aN0a--7VOV7s-s--6V-X---17X1Vc118V5OV7eX7XcXemnCCBfBnBoprSp9gn9cV17ee-9eee7eV4kDJ_aeiwn-FJ-u28mgpMSzsN-XeV5Fop6aeecBBk-F1t5Zdn9xxrs-9-O9QZyeevz-G3G-YcmK6CIIrUrrSrrrqOa9-X9X7X9cV1_beTuOPOPfznwwC3-4-Jh78rBeejprrSrNN--7-T5ITPw30U8E3BgonBzrtWzzaNVeeV8t9XtaOdOyzBwnEBKK-AmPDvCxrr-7X7ByJT4OdKaTizEydLQi_G48_OUdOvEvyuv-zyevvnzyBFzjvyBnzzznE0KKJJJK43JJG3JF0GKK-2BiSRpxxpWX7Xc" :
		18 === bP.eV ? pG =
		"DgBy1vR-AV60YBnopk-O_9DCIs4rUUrSSMUrSrSSSMKzypKSSMRpKMSrUKMSpKSSrUrSKIKSueXgnCKBgme9XenIKKMBpSKpKMMxpLppKKpnBoopKMMMMKpMKKKKrSzzza55ObzzUUSxppppCCSSpSSrRopSrrSSSppMMSSrKSzUtpxrxxphSMUMUSrrUzzaOtbaOtbbbaOzWWaN5Os6yN-ee117eme97cX--1117XmmccVaN1-Xy-XD-NT-6sDOa0y-cWtzrrKrrSpptWSxs1W_rMUMMUTUUzrrrrSrSxKSrKKzKSrMSrxxprUUzUyTOa-N-1-X-7--1-VV1D-EUUaOtSs-SyMzy-Xe1XXe999XcefCIKKUUn7X7eXee8aOV11UUUa-X7X0Ss1N1mVcf9ecekgk1AJmnABgn99mn9hIJhKKMB7797ee17y17V79Ve79nFX8s19nAIKI1n9pMKKT5Jp-hFgV1goV1nIF-hB-1kOsN56rSpppMtVX-77c7a5N-D550V-ObbaTTN-OVa----N--7s50y0VTNN-9maOzV17cVeepABnBpKKCBnBoopIKMMS9pKKKKKKIBWV-D-XemgpKBe9gm9eOzbyOa5OWV15NN7-N--V5-OV55-50aOaOa----99e77X9e770V1OVX-ccefABn997Xc77VccgceXegfBnH7cegcVX9ecD-VV-7-XV7Xcs5OaUT155-51XD--UtyUy--zWzzUzrbzyMT5OtztyOaOzKpxxIKKKKpIKKSMIKSKKSzztzbyUxtaUaNN5OyKs-6V0WV0_y-SppSICMKMTTTOtQBpSCMSsSrMSzyTMSprSptSUbzzygfKxUaObrMJpTO_pmpUxraTTOtttVUtaSSptzIAK99eXegfKgpCLmpMrUSpz7fKBoohUttrSrUrrSrSAKKUUra4pSzbaNTObaUyUxopBpSrzbaOyN10baSrrpzKpSSUtSzpUs-75N7cc91cXoX7V7Ws1-5TUbaOaOaSySzzzrzzzUtaN0V971A9eenBeee7Xe9cgcfAA9gggnKJgpgeee9eA9mfBgf9geVVX9fB7X6baOTTNNOtaOty52tzVNN9m7Xcce9715N5ObKt_y-8rMbzs90My6_s4raOUxrrpUMrz_rCMUry-eXUzrpySrxyObrztrzUMUttpztrVMrzrMsURhUxpsOpCUbrzqmenMtzmpzb_mfKzpooXX1pBpxSSKpSMSMKKCMKQKnCBmmeXcc71171-V--XpIIKKnIAAIBnCMMCKprzWV7sObKKrKUMsNN5UyMzzrBpztttWVaTObW_xpI99ghKKMxztaUUbzzzMy6vBgnACUtz_yTMrUzbnIMUtttV-UrUSrSSprMSSMyOWVX-18a0a-0yTOa5NOzrrRoonBpSKBpCKCCKSnCCBhBmme7efMSUSzUUaOyT5OaN-0aUxpoopMSzTN99WbV2VVXX9eYV0WaN-V-OtvKKUSzMrs1797VtpzV6rrSSrzBhKCKMSrT-Wa-V0V-X77ca--UzzzyHpMT-yT-7-sOaObbyTTOzUtsUIMSpSRnMzMT0WsTOs97hIBeX-X7tVVtzVc8WWaUonMzbKUsTUbSxrnMUKBoonJnJgpBpBoptaNOttaT5NUxprCUT1-VObbzrUzzyTUzzzy2zSxxxzry-1-Wrbtbs9zbzV9UV19-fa-taTOpUWxMsN716aUKyUps0xzaNN0VOWbaUzSrzaMrzVcX155OVOV0ztby-199f1XOWa-N-TOWa5UaNUaOa5OaUtzxtaN7egYy-VTOaUrnMwnKtzxpzaICTmoomenCKS9e9hSKxzbrSrSKBgpMKrWs-_yTNMbMyTOzrJnHnKxrKpSMKMSpprKSSMU9fBopKKpcfKSMAIKSrUMMpSSrUzVbrMUUTMympKrSrUUzMBnKSKrSxpJpMrUSSpSKS97cXXXXcXXXX9997ccX7c7X7V11171N-V-VVX1-71117-7-X19997V1mopKrSxpMMKpPeVX7hJfKCCKMMMMMKKpprUa6BpepKAK8V1meommnKMPgpAACReonACBopKSIKMMCKKKKKRpKCKJoprUtbbSSUs4MtaT-78sUxzzwpxxpxrKKSSSUSpUSSSSSKKKSKKMKSKJpKKKIKKKJoopBn9mccgpKICAMIKKKrKCJnIIBopMMzxxrrSxxxrSpSMSpKABofBnBn97710VA112V1171mmgn9k7V51-7XecXpAHhAIBooo-X75NN-XeXnBnKIBnCCKBnB9gpKprryU_ppSzyOWVObrzyTShPfIBnCK9hKCCJpKzrzxprSrSSUrxxqeeehUxzUrrABnIBhMzsOxrxSmgpxnMHnHhMnMICHmpMnHhSyMBhLopC9fIMhBnBnCJommmfAA1nBo97c9nMMrFhBgnBehBgfABfIKSx9X17N1emXABf9gmnJepJmhRmopKCMSUSxrMSrrUSxrrxrSrSrMSSMKKppCKKRognBggogeefI9mpxrr9nBggoog7--N-e999fAa-XfJV17s7XA97XcgecWV7eeAJpKKJoopCKBpKKKrTTMMKSxRpKrSzrzxxrStSrUUUSSpLpCMSKMSzMSSRef7Xce7e9X997-cX9-c-777-11197VXX17X7cgc0V0VNN1VOV-1-WVV-77VcV71-V-71--AJVV7XhMCBmfBnC797g-ACI7-Oa--11-Vc-1XVX9979X17V1-VV7cec9oppnBn1gXo71oome-1nHmgfBpKIBgmmcenIBnBnBnAAAIA9mmonI9egoXmggopCMKKKLpQCIBoopKopJcgnIBp9fACJmge7X77VVa-11-V7-VVVX-V72V7-7-VVV11-V7----V---N78V5NN-V6s9XOy1cepgpQIA9f9e7X777VX7UTUbta1eekXX7X0VcX91c--g7-11emXceeXX9ee99ce9g7cX999XXXX99X7XV-5-V7ceeegeX7X977X77-X7XVV-5-1-7--ecD-9hBX99onAMSKIMJpKSpKrMKJhIMKopST-NOaOrRopIBfIMSSMzxzUpzUUaUaUbttyUaOhBpIJppMKprSxrUrrKMKprRnBn9ggnBms9gnICIK99efBomceXgnIBcXceeeXeefBp9emceececeegmeXXeekee9X9Xf9ecee7X7-5N-a-N--NOWVN--V-1-V1--5---711171--550aN5--0V1-V77-55---------N-7XOta6aN1ggnBmnI7VD-VNN--NN1ghKBpKIKKJpKIIKCKKKCKIKKRnBopKKrKSSIJpIIJoopCIJpKUKSMLpSKKIIJpKKMSnKrUSSppKpMSMKpSKrKp9eepUrpSSKpSprrrzzzSrrzzzrUrzxrUzUzUyTSxnICKCACCCBnABnBgnBmnABnCBnBgmnBgmmmgggggf9meemeXggf9mgemmmenAAABmmmmXhA7cgnIIAIBnBmhBnIBnKKSMSpgnCKRnKKMKKpKSprQMQCIKKCKMKCJpKKpMBohRmnABfB-1V9sQR73q09kCIBed989cCHZpMUMMSMSUOxbpy0bbxSraOaOc7TVP29C9Vc0VBecV--7NVV-N8H9w--c9BgrX-BVhQICKrSsV-1VkNB1Dn9choeAEHp9A9eAKKp9fCI9Xme118BgecX7IKKAKrJce70cXXXcXMSppCzSpJxSMKSKSSrk-0xpxxzba-17Oxta56paOsNNTOyTOa--USkWzMUUzs--VWbrxrrVV-d9e7VHsFGFpA9BnCzzII9X97pxS9XHVZoogqUtzqUyUxx50WsTOXmgcOuVOXc0T4CohpochopxzyN7X7NXV-cNWurX-AW_mQ9horyWa--D6JABqN-51WZ4aN79-1XOJ2Oc-58_IBN-i8hrCBfItza-V2Nd5onEIMLOs-X-0se3gprOX1V5NezHrS9eACprpxy0aN7cVV07h4Zpy1V3shEFnKMUrzcVN7I91V-chgRwP--Xvb6V37jO2mfSxrUba79cV3cjXTpJpJOyTOX7gc--1B70i-6Y102KttXe-4Y2-QBrWV-qBklBoptztf9-7-aBzewzzyPee--YGg2-DspvZoeeeXmeA9mgmogn9fSApra0tzWzy6tzzbzztza-e-1YR0fR--PDnihKtVX-SYi0nMS9VecnMSUzxc7UNN5eV4HE3LxHx9HfA9nBxpaX5TUbzUpKDNUKBh9e5BfCMSFT6zUbaOd9V0aP7OZecWV-dYlL2AAIBmcozMopohpzU---NOaOa6X97-LEHZBzbeV07yFszq9V-cz9FrX-4YxwbHc6s-9FJpByV0d0kXnUT7V--FTac-5FvBCV-XGFeBnEUa1-686HMnJmxCIATUpUzV5--57eV2t6dDnABplyUaN1c--GxMc-9HB5gtV38862nCBopa0taT7V0d8AyppN7-1THOURmocpAKpBc9zSMU0aN551-USL---WZbifBogn9ghCUrLTTTOyOWs7e7V08F5moo5-48NGSmzJmVCKK6ls-0V-1_meQFN19MIGBrKKKKopKzWaUbsX7X77-17c-1P80D09ablQKBxrSSMSxzUSpSrSrSprMMUSVVVVV0baXX997XX7ccXVX17X7c-DQ9vBxX-PblGIMMSrMMMkVVOte97eX7-DUDUCL1-0bwmfD-3c-SvC55-NcAPfppppSrSr1117X171-Ju42Zn9gmd9ceceAMSrSppKrSIBfrKCMUUKk-T9mcV5Ua5Ubz6tX--0aOa1X902cKbrCKKJpHpIJnIKBnCCBfBfEryOttVOu5OaTN5OX0a-7--1---cRyM--P9esnVneG9xnBmn9grKKJnIJpKSKMKJporUonHe2IBmmnCBpCKrSrKpppxrSzUzxxrV5-NNNOV-Ws-XV55UrSrxyOc775-7egoe50Wta7X777N--7VOxrSVWtbzUUSqV6bWaN19cVX99gecemd9ec1xdFn2SrJeCpKrMSrKpSKSKIKKIICCI9XKMKCMSII9comomnAABpCIJpBmrTObs0taT5OsNOzaUSKMUtV-0aXX0WxOzaOV0zr1750zrGWX--XVVV-77X7V0VV-117XXXcHX1V39Nu-nKrUUyP7X9XVFeTW0xrI997KBcXBgnCAJpta50aUpIIBnKSzba-0VVUzbqNX1c--dA_c19eGowgggnCSSGWWWbaUsUUUccee705ejHzrzUUyNA9eXeV19fFvonOaTX-Rf_UfKCBeISJxrT-0WbbVNXe--AcyX--Aenu-lfzAABeconJnUP5UrSpKIpxLV0zML5-V7--1X7-2gTJfAOV-AQx3k--sU3c1TvB1BnKCIKIKCpMSGzr-0VN--751-19-0iur2k0FkOrQBgceZgnKKMMKKSJmXxpSSprMs6rJnrUra5NX7-X10X0aOVN-1cV70c16258gfA9fJmnIMKxzyOaOs-NNNX-7lElAMryXe7-042oc-A4AKhN-7gKbcmpIrX6zrxrMzUVeVX-gocVXV-3MmVV-3NpHV4wNq3mmmrUUrMUTP77-X7--lazYV3RQ6imfrrSprs-1X9-7liMQEOxse70E6TIBmZxlxxKOa77VV0I6vXBefKMIM5Ota50cV-RW4Rw-0RW5cnK5--Om5EABpMKBhSxxs17-0V5X--H5H1-9mCaYBoxbaP70emCc2MSIBepJfIIBmVP7mnCIAACCKIlV50bxqUV6zxxpCKprzzaUKa577cWVNUrOtV17V17V7Xcc--HEP1-0mI5IF-0mLgQF-amT1YIBonIIICBgonGaOaNOWVNOWba-02AS3hKIKIJN0V-5--AByfCsV-BqE5k-6CtMgN-0D4wcDzDLQCCCBpIIAAUJmmfBnAAJonCBoomgggfABpAKCJeecme9IBnKKKrMJrSrzUSKpMKpzrtttbxpMbbqOaUwUxObzrrK6aTTTOa5550Vc155ObWaOs9--0WWbtzyNce9cc-Ne7Vcc90zbcV0ztte90byTOXeXeeeVNXeeV0RupTnClV-hngH2CCCCJpKKKppUUtzbta5-V777-X177XV1wx_ZnIKKaN-V-PnvrYCJooerSo-OzuXVTOV71MEjtggeeeggnIAACJoTUzrMUbbttyN-AEykhD--x0GZrsc-2FY2g-4o9gQCSX-CjFseBonHonBf9en9eegf9XfCIBfBpCKMMHhCCKpCKICIpOtzSMMKKIJxUbbs7VN1---VV5ObbxrKCESzUpISy0bbbse1cX5-XVcXeV6y6aTNNNfBmehCCBee19cVV-0a6bzttyUyTUtzwUtttaNNOWV-1oImQL--AGQ0CNV-x5IkxkV0IIIYXm2V7XXeyUta5UV-46fyV0C78BrT7V0S83qnAyP2IoidnCSprrSxrSzrUMSxpMxzUUSSMMMMSzSSrrSprMSpMSSxrSxxxprrrrrUrxrSUUbtaUUL----WX-5N97X9emVP97719ecX-0aNcgmme6a9eX7199e77gecVX7cXXXXXcXX77X7X9egeeXX9-2oitACsV0hAoJnEbsc1EIX0Bgeen9gf9rSaOzzWyUrzqNX9-0CE-XnxVV-4FqeV0SGIunObe-1p622T7-0JRDc-0JfGc-vK0CgggrUzaT19V-CLDDs-6Ku0CV-ALMbENV-COvBk-bLoRjSrR-cX-8pp72IJoOWV--4T3HV-STYBq--hTbPoN-6pzxnBpT0X-5q4TfCGaNV-xXFHpN7-6N_hh--2NfsB-NqBUQHeCCtzSSSzT1cX11-1CZ-NpprX17-7qMXnCMyN7c-IOb-BnaN-0Owzc2fPAlBgggf9fAHoonAABgnCKCbbaT5OWaOaTOtbaTTOaN-0PiN7-MPkJBf6tV-4fLuV-SgO9lV-phLT7tV-4gqNV-4hl5V3xiFwnA9nAROzqOaOXV-SifanVGKwWFOaOV6zzzzUUy6tztbKta56s-WrzzsN-5T4rKpppSKSKKKM-6Sk2RmmeXgeggnTUbxyTUbyOe-OMnm0a50aOV-NNOyNOxtyN-fRZugenzttuc6MRg2gooef9eemeX7XeeeA9Y9BehCIUzrMUzzbrxzttzztzUzrzqUzzbzzzbbzrzzV-9fA9eeX0XeBeeY9e7-DrA8vSzrOtaXeec-0S7u7-rS8wBhCUbttcec-bSGCgnCzaN9-BrL6QBezxyTPXV4hpYLmgfCtzxzSttX9ce-" :
		19 === bP.eV && (pG =
			"EcCx-VQCO1iiqOLOKeeedae_ddadadadOfiveOeLeeeedadaPiuuiePPeeyeeeeOeaPadaeeydPeOedaOPLOeeeOadLOKLKKLJG4G3G4G4G3F-3GJG4G4KKG443G3G3G3G4K3K3K3GKKK3FJ40F33GK0K0K3G3F3F2nBnBnBnB-Bn-04G--BzzwEByvn-wG-BnnB2BkG44K-4KPKQyde_K-G3GKFwGPKO_O_K3J4KG4KKG4KKKJG4KJKK30304LOJG3GKKKKKQvjzuzziviueeaKaKPKKKKKKKKK3K_eOKO_OedaKaLaOevedaOGOeOeeaOaOaOeOjzvjyaPeOKKKOK43K_KKaveJGJ0-JG3G3GF3G3G43KaKF3G4aOedaOFKLK4_eee_dJK33KeaOLOaOjveeKLO_OaOaeKLPeivjeaOeOaJKGKJ4PdadafiyjedLPeueK3F-G30F3G3-3LOaOjeKLPe_O_OeaPfieieeyeaOaPOKOeedeOdada_daOdaKd_O_aOKPOKLKaKdK4LK3LTdaOdKaOK_KLPOaaO_LPKGKKK_KOaLO_aOOaaOdaPOdaO_OaKOdaPOdaPedeOJF--00LaPdeaeOfeyeiuudaueaaPdbeOeuefefuivfifujifieviivifeeid_G-04OF0-03KaPvievjizfeeLJ0-JG-KdOTvfiyviyujffviujeiufeiefivivfivvfeevivveiuueieiefeeiyejffuiuuiviuvfiifiieePeeaieieveuePdaPKJKefefefiuzzvzivviyfvnvjvzEzzjzwzzzBnzwnnk2Bwkn2zzknB-n2BnEBzyzzBzzEwnzznzzzjfzBzwzznziz2zwnBnBBkB--B2EBznEzBwnBnBzzBknEnEByywzzzzzEzz2wnzkzznEBwwEnEnEzznEzzzzzzzzEzwwEEizizizivjvjfznnzyyyvivzzwnyviuizyeyeKbifiuizzvifieeuyviuiuefie_iviiyjzvn3F3Bnw-BnBn2BnBnwnwnwnBkBBk22nEn-EeeieKdeiudaOaOPedaeePeee_KKLPOefzkzEEjzwk2B-k-kBB2yiiuieueeaeeaOOaOvzzzBzvjivjuiuyevieifiedaOeueuivivieuvfyvzvyvvuuvwzzyyvzzvjivvivvjyvznBnn2wzznwoLK-z2BknzEivePPLOOvjBwnEffeuyzefzuuujnkkGG-yzEEzBnEBnnBwnEBnznzzvzzznzvzzEBnzn-k-k-k-2-wB2B-k2-2nBB2kBBwnBw-nB-2Bk22Bw-BkknnBBBBBnBE-znznkkEnE2--kEBknBBkBBk2E-3-2Bk-k2B22BB2k-k-k2BBn-w2-32k-C3F--k-FG0G-22-2-FB--k-2-w-G32En--nB-2kKLePLdFJG3-F0033G043-l3-G3K3JK-32B3G4K4F--B--B--FGLJGJ3F03JLaeKFG--0---BFK--203FGGFG33F2nBFG3FGJ4GJ4K02GKF03-GKKG3K0JFK3G03F--G--l43--Bk--kG-FF3F03G-403G----l0----G--Bn33GJG340JG3-G4KaLKPKG-4-3F3F03-B-------G3FJ00--3KGF--0---03G0032T4mfgmegmeX7fBnJnKIEzzzzbrpzzaObtVOaNX9c9c0JN9cQfjzGG0F4NoWynBpJnKzzzV---Xc1RfMlOOvfvzwEw3GKKF-0gAIV-2OK2-3aoazBjs-pIUdyOaKaKaOfzzvgBnBF---1gInV-4OaA-BexerKESrs-V9V3q6e6dauVn3-0fPHBpMs-c-SiqWQwJ1mtRSUSKKKKKKJOzzxrROc11--TX-X7V7eeV4Meo2avi2kCK--EcNy-OUJfiLKdTzsBk-0kCPrF0fVVRjiveveiueOuveeeeaNn-n22-BG--030303K3F3B6-nnBnBrSr0a---EsTXQudeviviedazk-2-G-030K-4l1tMCkOc-57MIs-E3IhS5P-CYA-DLew--koIyA9emmfACMSrUtbzzzTTObrUtV7ge7X7eeV8QnZxddaebjwnB-30F3xzBZnMKCMzra71-7cV3wA4p_Qzzo4Ffy5yanHpIKSKMKSMSSrKKMofJppMKSKrSpSMKSzrzzrUtaOzsTN1oc5OaUzrHnCTOtaP755N5-T-NUTNN-N-5-5-N-P7X97gn9gmeee9n9meeX97cX7eVeX9cXV"
			), (new ub).ud(pG)
}

function aGb() {
	this.uj = null, this.aHf = null, this.aHg = null, this.dW = function() {
		var aHh = [120, 105, 92],
			cos = [12, 12, 60],
			aHi = [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
			aHj = [140, 130, 120],
			aHk = [12, 12, 76],
			aHl = [240, 120, 1024, 30, 19, 30, 70, 8, 20, 3, 9],
			aHm = [130, 117, 106],
			aHn = [12, 12, 68],
			aHo = [270, 210, 1024, 28, 19, 33, 50, 8, 26, 3, 9];
		this.uj = new Array(bP.aGZ + 1), __fx.customLobby.setMapInfo(this.uj), this.uj[0] = {
			name: L(115),
			a1: 230,
			jO: 230,
			lq: 1e3,
			ln: 2e3,
			aGg: 173
		}, this.uj[1] = {
			name: L(116),
			a1: 800,
			jO: 800,
			lq: 100,
			ln: 50,
			aGg: 43
		}, this.uj[2] = {
			name: L(117),
			a1: 512,
			jO: 512,
			lq: 128,
			ln: 32,
			aGg: 0
		}, this.uj[3] = {
			name: L(118) + " 1",
			a1: 960,
			jO: 960,
			lq: 60,
			ln: 8,
			aGg: 0
		}, this.uj[4] = {
			name: L(119),
			a1: 900,
			jO: 900,
			lq: 100,
			ln: 5,
			aGg: 0
		}, this.uj[5] = {
			name: L(120),
			a1: 1e3,
			jO: 1e3,
			lq: 100,
			ln: 40,
			aGg: 0
		}, this.uj[6] = {
			name: L(121),
			a1: 1e3,
			jO: 1e3,
			lq: 100,
			ln: 20,
			aGg: 0
		}, this.uj[7] = {
			name: L(122),
			a1: 1024,
			jO: 1024,
			lq: 128,
			ln: 32,
			aGg: 0
		}, this.uj[8] = {
			name: L(123),
			a1: 820,
			jO: 820,
			lq: 200,
			ln: 100,
			aGg: 0
		}, this.uj[9] = {
			name: L(124),
			a1: 1024,
			jO: 1024,
			lq: 128,
			ln: 32,
			aGg: 0
		}, this.uj[10] = {
			name: L(125),
			vB: aHj,
			vC: aHk,
			aGq: aHl
		}, this.uj[11] = {
			name: L(126),
			vB: aHm,
			vC: aHn,
			aGq: aHo
		}, this.uj[12] = {
			name: L(127),
			vB: aHm,
			vC: aHn,
			aGq: aHo
		}, this.uj[13] = {
			name: L(128),
			vB: aHh,
			vC: cos,
			aGq: aHi
		}, this.uj[14] = {
			name: L(129),
			vB: aHh,
			vC: cos,
			aGq: aHi
		}, this.uj[15] = {
			name: L(130),
			vB: aHj,
			vC: aHk,
			aGq: aHl
		}, this.uj[16] = {
			name: L(131),
			vB: aHj,
			vC: aHk,
			aGq: aHl
		}, this.uj[17] = {
			name: L(132),
			vB: aHh,
			vC: cos,
			aGq: aHi
		}, this.uj[18] = {
			name: L(133),
			vB: aHm,
			vC: aHn,
			aGq: aHo
		}, this.uj[19] = {
			name: L(134),
			vB: aHh,
			vC: cos,
			aGq: aHi
		}, this.uj[20] = {
			name: L(135),
			a1: 1024,
			jO: 1024,
			lq: 128,
			ln: 32,
			aGg: 0
		}, this.uj[21] = {
			name: L(118) + " 2",
			a1: 940,
			jO: 940,
			lq: 80,
			ln: 8,
			aGg: 0
		}, this.uj[bP.aGZ] = {
			name: ""
		}, this.aHf = new Uint8Array(12);
		for (var a7 = 0; a7 < 10; a7++) this.aHf[a7] = a7;
		this.aHf[10] = 20, this.aHf[11] = 21, this.aHg = new Uint8Array(10);
		for (a7 = 0; a7 < 10; a7++) this.aHg[a7] = 10 + a7
	}
}

function aGc() {
	this.aHd = function() {
		for (var gN, ew, fX, aHb = a9X, aHc = bP.ut, a1 = bP.f0, aHZ = a1 - 1, aHa = bP.f1 - 1, gI = 0, ey = 1; ey < aHa; ey++)
			for (fX = ey * a1, ew = 1; ew < aHZ; ew++) aHc[gN = fX + ew << 2] === aHc[1 + gN] && aHc[gN] === aHc[2 + gN] && (gI++, aHb[2 + gN] = 4);
		ak.a4v = gI
	}, this.aHe = function() {
		for (var aHb = a9X, a1 = bP.f0, aHZ = a1 - 1, aHa = bP.f1 - 1, id = 5, ey = 1; ey < aHa; ey++)
			for (var fX = ey * a1, ew = 1; ew < aHZ; ew++) {
				var eT = 2 + (fX + ew << 2);
				4 === aHb[eT] && (! function(eT, id) {
					var ep = 1,
						aHb = a9X,
						er = aY.er,
						a0w = [eT];
					aHb[eT] = id;
					for (; ep;) {
						for (var a0x = [], a7 = 0; a7 < ep; a7++)
							for (var ee = a0w[a7], es = 3; 0 <= es; es--) {
								var et = ee + er[es];
								4 === aHb[et] && (aHb[et] = id, a0x.push(et))
							}
						ep = (a0w = a0x).length
					}
				}(eT, id), id = Math.max((id + 1) % 256, 5))
			}
	}
}

function a2l() {
	(wU = void 0 === wU ? document.createElement("canvas") : wU).width = bP.f0, wU.height = bP.f1, a2p = wU.getContext("2d", {
		alpha: !0
	}), a2q = a9X = null, a2q = a2p.getImageData(0, 0, bP.f0, bP.f1), a9X = a2q.data, b7.pj.uu(a9X)
}

function cb() {
	var fH, a1, jO, max, aHq, ln, aHs, aHt, aHu, aHv, aHw, aHx, aHy, aHz, aHr = 1e4;

	function aI6(aI5, lq, ep) {
		var a7;
		for (aHs[0] = aI5, a7 = 1; a7 < ep; a7++) aHs[a7] = aHs[a7 - 1] + lq, lq = aHs[a7] >= aHr ? (aHs[a7] = aHr - 1, -lq) : aHs[a7] < 0 ? (aHs[a7] = 0, -lq) : (lq += 16384 <= av.random() ? ln : -ln) < -aHq ? -aHq : aHq < lq ? aHq : lq
	}

	function aI8(ew, ey, aI9, ep) {
		(aI9 ? function(ew, ey, ep) {
			var a7;
			for (a7 = 0; a7 < ep; a7++) fH[ey * a1 + ew + a7] = aHs[a7]
		} : function(ew, ey, ep) {
			var a7;
			for (a7 = 0; a7 < ep; a7++) fH[ey * a1 + ew + a7 * a1] = aHs[a7]
		})(ew, ey, ep)
	}

	function aIC(value, ep) {
		var a7, lF, eT, hl = value - aHs[ep - 1];
		if (0 != hl) {
			for (lF = 1 + bI.dn(Math.abs(hl), ep - 1), lF = hl < 0 ? -lF : lF, aHs[ep - 1] = value, eT = (eT = ep - 1 - bI.dn(Math.abs(hl), Math.abs(lF))) < 1 ? 1 : ep - 2 < eT ? ep - 2 : eT, a7 = ep - 2; eT <= a7; a7--) aHs[a7] += hl - (ep - 1 -
				a7) * lF;
			(hl < 0 ? function(ep) {
				var a7;
				for (a7 = ep - 2; 1 <= a7; a7--) aHs[a7] < 0 && (aHs[a7] = -aHs[a7] - 1)
			} : function(ep) {
				var a7;
				for (a7 = ep - 2; 1 <= a7; a7--) aHs[a7] >= aHr && (aHs[a7] = 2 * aHr - aHs[a7] - 1)
			})(ep)
		}
	}

	function aIF(a0w, a0x, ep) {
		for (var a7 = 0; a7 < ep; a7++) a0w[a7] = a0x[a7]
	}

	function aIG(g) {
		for (var a7 = 0; a7 < g.length - 1; a7++) g[a7] = g[a7 + 1] - g[a7];
		g[g.length - 1] = g[g.length - 3]
	}

	function aIH(a3G, gap, hk) {
		aHt.push(a3G), aHu.push(gap), aHv.push(hk)
	}
	this.a3 = function(a22) {
		! function(a22) {
			var a7;
			for (a1 = a22[0], jO = a22[1], aHq = a22[2], ln = a22[3], fH = new Int16Array(a1 * jO), max = jO < a1 ? a1 : jO, aHs = new Int16Array(max), aHt = [], aHu = [], aHv = [], aHw = new Array(a1), aHx = new Array(jO), a7 = a1 - 1; 0 <=
				a7; a7--) aHw[a7] = !1;
			for (a7 = jO - 1; 0 <= a7; a7--) aHx[a7] = !1;
			aHy = new Int16Array(a1), aHz = new Int16Array(jO)
		}(a22),
		function(ep) {
			var aI5 = av.random() % aHr,
				lq = av.random() % (2 * aHq + 1) - aHq;
			aI6(aI5, lq, ep)
		}(max), aIF(aHz, aHs, jO), aI8(0, 0, !0, a1);
		var ew, ey, a22 = fH[0],
			ep = max,
			lq = av.random() % (2 * aHq + 1) - aHq;
		for (aI6(a22, lq, ep), aIF(aHy, aHs, a1), aI8(0, 0, !1, jO), aIG(aHy), aIG(aHz), aI6(fH[a1 - 1], aHy[a1 - 1], jO), aI8(a1 - 1, 0, !1, jO), aI6(fH[a1 * (jO - 1)], aHz[jO - 1], a1), aIC(fH[a1 * jO - 1], a1), aI8(0, jO - 1, !0, a1), aHw[a1 -
				1] = aHw[0] = !0, aHx[jO - 1] = aHx[0] = !0, aIH(0, a1, !0), aIH(0, jO, !1), ! function() {
				var aIJ, a3G;
				for (;;) {
					if (aIJ = function() {
							var a7, aIJ = aHt.length - 1;
							for (a7 = aIJ - 1; 0 <= a7; a7--) aHu[a7] > aHu[aIJ] && (aIJ = a7);
							return aIJ
						}(), aHu[aIJ] < 5) return;
					a3G = aHt[aIJ] + bI.dn(aHu[aIJ], 2), (aHv[aIJ] ? function(ew) {
						var ep, aIM, a7, aBg = 0,
							aIN = 0;
						for (; aIN < jO - 1;) {
							for (a7 = aBg + 1; a7 < jO; a7++)
								if (aHx[a7]) {
									aIN = a7;
									break
								} ep = aIN - aBg + 1, aI6(fH[ew + a1 * aBg], 0 === aBg ? aHy[ew] : aHs[aIM - 1] - aHs[aIM - 2], ep), aIC(fH[aIN * a1 + ew], ep), aI8(ew, aBg, !1, ep), aIM = ep, aBg = aIN
						}
						aHw[ew] = !0
					} : function(ey) {
						var ep, aIM, a7, aBg = 0,
							aIN = 0;
						for (; aIN < a1 - 1;) {
							for (a7 = aBg + 1; a7 < a1; a7++)
								if (aHw[a7]) {
									aIN = a7;
									break
								} ep = aIN - aBg + 1, aI6(fH[ey * a1 + aBg], 0 === aBg ? aHz[ey] : aHs[aIM - 1] - aHs[aIM - 2], ep), aIC(fH[ey * a1 + aIN], ep), aI8(aBg, ey, !0, ep), aIM = ep, aBg = aIN
						}
						aHx[ey] = !0
					})(a3G), aIH(a3G, aHt[aIJ] + aHu[aIJ] - a3G, aHv[aIJ]), aHu[aIJ] = a3G - aHt[aIJ] + 1
				}
			}(), ew = 0; ew < a1; ew++)
			if (!aHw[ew])
				for (ey = 0; ey < jO; ey++) aHx[ey] || ! function(ew, ey) {
					var value = fH[ey * a1 + ew - 1] + fH[(ey - 1) * a1 + ew],
						a55 = 2;
					aHw[ew + 1] && (a55++, value += fH[ey * a1 + ew + 1]);
					aHx[ey + 1] && (a55++, value += fH[(ey + 1) * a1 + ew]);
					fH[ey * a1 + ew] = bI.dn(value, a55)
				}(ew, ey)
	}, this.aH2 = function() {
		return fH
	}, this.aGk = function() {
		fH = null
	}
}

function aDL(f8, f9) {
	return 0 <= f8 ? bI.dn(f8, f9) : -bI.dn(-f8, f9)
}

function jS(fH) {
	return fH * fH
}

function a4K(f8, f9) {
	return f9 < f8 ? f8 : f9
}

function a93(f8, f9) {
	return f8 < f9 ? f8 : f9
}

function a6T(f8, fH, f9) {
	return fH < f8 ? f8 : f9 < fH ? f9 : fH
}

function aIP(fH, ep) {
	for (var fA = bI.dn(fH + 1, 2), a7 = 0; a7 < ep; a7++) fA = bI.dn(fA + bI.dn(fH, fA), 2);
	return fA
}

function aEi(fH, ep) {
	return fH < 1 ? 0 : aIP(fH, ep)
}

function aIQ(mD, mE, rk, a6D, mQ, mR, rl, sN) {
	return !(mD + rk <= mQ || mE + a6D <= mR || mQ + rl <= mD || mR + sN <= mE)
}

function aIR(mD, mE, rk, a6D, mQ, mR, rl, sN) {
	return mD <= mQ && mE <= mR && mQ + rl <= mD + rk && mR + sN <= mE + a6D
}

function ul(fH) {
	return Math.floor(!!fH * (1 + Math.log2(fH + .5)))
}

function bs() {
	this.dn = function(f8, f9) {
		return Math.floor((f8 + .5) / f9)
	}, this.aIS = function(f8, f9) {
		return Math.floor(f8 * (f9 + .5))
	}, this.sqrt = function(fH) {
		return ~~Math.sqrt(fH + .5)
	}, this.pow = function(e) {
		return Math.floor(Math.pow(2, e) + .5)
	}, this.p7 = function(value, min, max) {
		return Math.min(Math.max(value, min), max)
	}, this.aIT = function(fX, fZ, fb) {
		return Math.max(Math.min(fX, fZ), fb)
	}, this.aIU = function(aIV, aIW, ew, ey) {
		ew -= aIV, aIV = ey - aIW, ey = 0;
		return 0 == ew ? ey = 0 <= aIV ? Math.PI : 0 : (ey = Math.atan(aIV / ew), ey += 0 < ew ? .5 * Math.PI : 1.5 * Math.PI), ey
	}, this.log2 = function(fH) {
		return Math.floor(!!fH * (1 + Math.log2(fH + .5)))
	}, this.log10 = function(fH) {
		return Math.floor(Math.log10(fH + .5))
	}, this.aIY = function(aIZ, aIa, aIb, aIc, aId) {
		return aIb - aId < aIZ && aIZ < aIb + aId && aIc - aId < aIa && aIa < aIc + aId
	}, this.vl = function(he, hf) {
		return he * he + hf * hf
	}
}

function d8() {
	this.s = new aIe, this.rc = 0;
	var aIf = new Array(30);

	function aIj() {
		for (var ep = aIf.length, a7 = 0; a7 < ep; a7++) aIf[a7] = null
	}
	this.dW = function() {
		for (var aIg, aIh = document.body.firstChild; aIh;) {
			if (aIg = aIh.nextSibling, document.body.contains(aIh) && ("DIV" === aIh.tagName || "INPUT" === aIh.tagName || "BUTTON" === aIh.tagName)) try {
				document.body.removeChild(aIh)
			} catch (e) {
				console.log("error 2623: " + e)
			}
			aIh = aIg
		}
	}, this.o = function(e2, aIi, a22) {
		void 0 === aIi && (aIi = this.rc), bc.de = !0, 0 === e2 && (0 === aW.zS() ? e2 = 5 : u.v.setState(13)), this.qt(), this.rc === e2 && (aIi = aIf[e2].aIi, aIf[e2] = null), this.rc = e2;
		var kf = aIf[e2];
		if (!kf || 4 === e2 || 7 === e2 || 8 === e2 || 9 === e2 || 10 === e2 || 11 === e2 || 13 === e2 || 15 === e2 || 18 === e2 || 20 <= e2 && e2 <= 28) {
			if (0 === e2) return void aIj();
			1 === e2 ? kf = new aIk : 2 === e2 ? kf = new aIl : 3 === e2 ? kf = new aIm : 4 === e2 || 9 === e2 || 10 === e2 || 11 === e2 || 13 === e2 ? kf = a22 : 5 === e2 ? kf = new aIn : 6 === e2 ? kf = new aIo : 7 === e2 ? kf = new aIp(n.s
					.aIq) : 8 === e2 ? kf = a22 : 12 === e2 ? kf = new aIr : 14 === e2 ? kf = new aIs : 15 === e2 ? kf = new aIp(n.s.aIt) : 16 === e2 ? kf = new aIu : 17 === e2 ? kf = new aIv : 18 === e2 ? kf = new aIw : 19 === e2 ? kf =
				new aIx : 20 === e2 ? kf = new aIy : 21 === e2 ? kf = new aIz : 22 === e2 ? kf = new aJ0 : 23 === e2 ? kf = new aJ1 : 24 === e2 ? kf = new aJ2 : 25 === e2 ? kf = new aJ3 : 26 === e2 ? kf = new aJ4 : 27 === e2 ? kf = new aJ5 :
				28 === e2 ? kf = new aJ6 : 29 === e2 && (kf = new aJ7), kf.aIi = aIi, aIf[e2] = kf
		}
		kf.show(a22)
	}, this.zc = function() {
		this.wp() && this.aJ8(this.aCw().aIi)
	}, this.aJ8 = function(e2) {
		this.wp() && (aIf[e2] ? (this.qt(), bc.de = !0, this.rc = e2, aIf[e2].show()) : this.o(e2))
	}, this.qt = function() {
		this.wp() && aIf[this.rc].qt()
	}, this.r = function() {
		this.wp() && (aIf[this.rc].qt(), aIj(), this.rc = 0, u.v.setState(13))
	}, this.t9 = function() {
		var kf;
		this.wp() && (kf = aIf[this.rc]).t9 && kf.t9()
	}, this.resize = function() {
		if (!this.wp()) return !1;
		aIf[this.rc].resize()
	}, this.h3 = function(ew, ey) {
		var kf;
		this.wp() && (kf = aIf[this.rc]).h3 && kf.h3(ew, ey)
	}, this.zp = function(ew, ey) {
		var kf;
		this.wp() && (kf = aIf[this.rc]).zp && kf.zp(ew, ey)
	}, this.a0D = function() {
		var kf;
		this.wp() && (kf = aIf[this.rc]).a0D && kf.a0D()
	}, this.zs = function(l0, l1, deltaY) {
		var kf;
		this.wp() && (kf = aIf[this.rc]).zs && kf.zs(l0, l1, deltaY)
	}, this.a0N = function(code) {
		var kf;
		return !!this.wp() && ((kf = aIf[this.rc]).a0N && kf.a0N(code), !0)
	}, this.il = function() {
		var kf;
		this.wp() && (kf = aIf[this.rc]) && kf.il && kf.il()
	}, this.wp = function() {
		return 0 < this.rc
	}, this.aCw = function() {
		return aIf[this.rc]
	}, this.aB5 = function(e2) {
		return aIf[e2]
	}, this.aJ9 = function() {
		return aIf
	}
}

function aIp(data) {
	var aJA, aJB;
	this.show = function() {
		data.aJC && bF.aJq("account", data.ra), aJA.show(), this.resize()
	}, this.qt = function() {
		aJA.qt()
	}, this.resize = function() {
		aJA.resize(), aJB.resize()
	}, this.a0N = function(fA) {
		2 === fA && aJA.t1[0].ps()
	}, aJA = new su(data.username, [new q("⬅️ " + L(22), function() {
		bF.clear(), n.zc()
	}), new q(data.aJC ? "🔄 " + L(136) : L(137), function() {
		n.o(8, n.aCw().aIi, new rd(25, {
			re: 0,
			ra: data.ra,
			rb: data.rb
		}))
	}, 0, 0, 1)]), aJB = new pS(aJA.t0, function() {
		var pU = [];
		pU.push(function() {
				var aJR = new pC,
					qO = (aJR.pF(L(175)), new qP({
						value: data.username,
						e2: -1
					}));
				qO.e.readOnly = !0, aJR.pQ(qO), aJR.pQ(new r6([new q(L(148), function(e) {
					return b7.pZ.a1a(qO.e), b7.pZ.a1b(e), !0
				}).button])), data.aJC || aJR.pH(L(176));
				return aJR
			}()),
			function(pU) {
				var aJR, pI, a9l, aJi, aJX;
				data.aJC || ((aJR = new pC).pF(L(177)), (pI = aJR.pH(data.aJh.length + " / 160")).style.textAlign = "center", a9l = !0, (aJi = new tF(0, 1, function(e) {
					e = e.target.value.length;
					pI.textContent = e + " / 160", 160 < e ? a9l && (a9l = !1, aJX.pv(1), aJX.button.style.color = b8.mn) : a9l || (a9l = !0, aJX.pv(0), aJX.button.style.color = b8.nc)
				})).e.rows = 6, aJi.e.style.fontSize = "1em", aJi.tM(data.aJh), aJR.pQ(aJi), aJX = new q(L(178), function() {
					if (!a9l) return !0;
					n.o(8, n.aCw().aIi, new rd(29, {
						re: 1,
						pG: aJi.tN().substring(0, 160)
					}))
				}, 0, 0, 1), aJR.pQ(new r6([aJX.button])), 0 !== data.aJj && (aJR.pQ(new r6([new q(L(1 === data.aJj ? 180 : 181), function() {
					n.o(8, n.aCw().aIi, new rd(29, {
						re: 0,
						pG: ""
					}))
				}, 0, 0, 1).button])), aJR.pH(1 === data.aJj ? L(182, [data.aJl - 1]) : L(183, [data.aJl - 1]))), aJR.pH(L(179, [data.aJk])), pU.push(aJR))
			}(pU),
			function(pU) {
				var aJR;
				data.aJC && 0 !== data.aJj && ((aJR = new pC).pF(L(177)), aJR.pJ(data.aJh), aJR.pQ(new r6([new q(L(184), function(e) {
					return ax.s.aC3(0) && (b7.pZ.a1b(e), ax.aJV.aJg({
						re: 5,
						ra: data.ra,
						rb: data.rb
					})), !0
				}, 0, 0, 1).button])), pU.push(aJR))
			}(pU), pU.push(function() {
				var aJR = new pC;
				aJR.pF(L(138)), aJR.pL(L(139) + b7.z3.a2G(data.u8, .01, 2)), data.aJC || (aJR.pH(L(140)), aJR.pH(L(141)), aJR.pH(L(142)));
				return aJR
			}()), data.aJC && pU.push(function() {
				var aJR = new pC,
					qO = (aJR.pF(L(143)), new qP(bg.dr.data[147], 1, void 0, function(e) {
						aJS(e.target.value)
					})),
					aJT = (aJR.pQ(qO), new q(L(14), function(e) {
						return qO.e.readOnly && ax.s.aC3(0) && (b7.pZ.a1b(e), aJU(), ax.aJV.aJW({
							re: 0,
							ra: data.ra,
							rb: data.rb,
							value: bI.p7(Math.floor(100 * bg.dr.data[147].value), 0, 4294967295)
						})), !0
					}, 1)),
					aJX = new q(L(144), function(e) {
						return e.textContent === L(144) ? (e.textContent = L(145), qO.e.readOnly = !0, aJT.pv(0), aJT.button.style.color = b8.nc, bg.r3.r4(147, qO.e.value), aJS(bg.dr.data[147].value)) : aJU(), !0
					}),
					pI = (aJR.pQ(new r6([aJX.button])), aJR.pH()),
					aJS = function(fH) {
						fH = isNaN(fH) ? 0 : Number(fH);
						var fH = Math.max(fH, (data.aJY + 1) / 100),
							aJZ = Math.floor(100 * Math.max(1e-4 * fH, data.aJY / 100)) / 100;
						pI.textContent = L(146, [fH.toFixed(2), bg.dr.data[105].value, aJZ.toFixed(2), data.ra, (fH - aJZ).toFixed(2)])
					},
					aJU = function() {
						aJX.button.textContent = L(144), qO.e.readOnly = !1, aJT.pv(1), aJT.button.style.color = b8.mn
					};
				return aJS(bg.dr.data[147].value), aJR.pQ(new r6([aJT.button])), aJR
			}());
		pU.push(function() {
			var aJR = new pC,
				qO = (aJR.pF(L(147)), new qP({
					value: data.ra,
					e2: -1
				}));
			return qO.e.readOnly = !0, aJR.pQ(qO), aJR.pQ(new r6([new q(L(148), function(e) {
				return b7.pZ.a1a(qO.e), b7.pZ.a1b(e), !0
			}).button])), aJR
		}()), data.aJC || (pU.push(function() {
			var aJR = new pC,
				aJa = (aJR.pF(L(149)), new qP(bg.dr.data[106]));
			return aJa.e.readOnly = !0, aJa.e.type = "password", aJR.pQ(aJa), aJR.pQ(new r6([new q(L(150), function(e) {
				return e.textContent === L(150) ? (e.textContent = L(151), aJa.e.type = "text") : (e.textContent = L(150), aJa.e.type = "password"), !0
			}).button, new q(L(148), function(e) {
				return b7.pZ.a1a(aJa.e), b7.pZ.a1b(e), !0
			}).button])), aJR.pQ(new r6([new q(L(152), function() {
				n.o(8, n.aCw().aIi, new rd(15))
			}).button])), aJR.pF(L(153), "0.8em"), aJR.pH(L(154)), aJR.pH(L(155)), aJR.pH(L(156)), aJR
		}()), pU.push(function() {
			var aJR = new pC;
			return aJR.pF(L(157)), aJR.pQ(new r6([new q(L(158), function() {
				n.o(6, n.aCw().aIi)
			}).button])), aJR.pQ(new r6([new q(L(159), function() {
				bg.r3.r4(105, ""), n.o(8, n.aCw().aIi, new rd(18))
			}).button])), aJR.pQ(new r6([new q(L(160) + bg.dr.data[105].value, function() {
				n.o(4, 0, new p(L(161), L(162), !0, [new q("⬅️ " + L(22), function() {
					n.o(7, n.aB5(7).aIi)
				})]))
			}, b8.nO).button])), aJR
		}()), pU.push(function() {
			function aJc(e2) {
				for (var a7 = 0; a7 < 2; a7++) aJb[a7].pv(0 === e2 ? b8.my : 0 === a7 ? b8.nO : b8.n8)
			}
			var pO, aJb, aJR = new pC;
			aJR.pF(L(163)), aJR.pH(L(164)), bg.s.ts();
			return aJb = [new q(L(165), function() {
				var e2 = Math.min(bg.dr.data[117].value, pO.pP.length - 1);
				if (!(e2 < 1)) {
					pO.pP[e2].remove(), pO.pP.splice(e2, 1);
					for (var a7 = e2; a7 < pO.pP.length; a7++) pO.pP[a7].name = "" + a7;
					bg.s.tv(e2), e2 = bg.dr.data[117].value, pO.pP[e2].textContent = pO.pP[e2].textContent.replace("⚪", "🟢"), aJc(e2)
				}
			}, b8.my), new q(L(166), function() {
				var e2 = Math.min(bg.dr.data[117].value, pO.pP.length - 1);
				e2 < 1 || (e2 = bg.s.tw(e2), bg.r3.r4(105, e2.ra), bg.r3.r4(106, e2.password), n.o(8, n.aCw().aIi, new rd(18)))
			}, b8.my)], (pO = new sp(bg.dr.data[117], aJc)).pP[0].style.marginTop = "0.5em", aJR.pN(pO), aJR.pQ(new r6([aJb[1].button])), aJR.pQ(new r6([aJb[0].button])), aJR
		}()));
		return pU.push(function() {
				var aJR = new pC;
				return aJR.pF(L(167)), aJR.pL(L(168) + b7.z3.a2G(data.u4, .1, 1) + "<br>" + L(169) + (data.u5 + 1) + " / " + data.u7 + "<br>" + L(170) + data.u6), aJR
			}()),
			function(pU) {
				var aJR = new pC,
					z6 = data.uB,
					aJm = (aJR.pF(L(185)), aJR.pL(L(186) + (z6 ? "[" + data.u9 + "]" : "-")), aJR.pL(L(187) + b7.z3.a2G(z6, .001, 2)), aJR.pL(L(169) + (data.uD + 1) + " / " + data.u7), data.uE),
					aJn = (aJR.pL(L(188) + b7.z3.a2G(aJm, .01, 2)), data.uG);
				aJR.pL(L(189) + aJn), aJR.pL(L(190) + b7.z3.a2G(aJm / Math.max(aJn, 1), .01, 2)), z6 = data.uC, aJR.pF(L(191), "0.8em"), aJR.pL("Clan: " + (z6 ? "[" + data.uA + "]" : "-")), aJR.pL(L(187) + b7.z3.a2G(z6, .001, 2)), aJm = data
					.uF, aJR.pL(L(188) + b7.z3.a2G(aJm, .01, 2)), aJn = data.uH, aJR.pL(L(189) + aJn), aJR.pL(L(190) + b7.z3.a2G(aJm / Math.max(aJn, 1), .01, 2)), pU.push(aJR)
			}(pU),
			function(pU) {
				var aJR = new pC;
				aJR.pF(L(192)), aJR.pL(L(193) + data.aJo + "<br>" + L(173) + (data.aJp.length ? L(194, [data.aJp]) : L(195))), data.aJC && (aJR.pQ(new r6([new q(L(196), function(e) {
					return ax.s.aC3(0) && (b7.pZ.a1b(e), ax.aJV.aJg({
						re: 4,
						ra: data.ra,
						rb: data.rb
					})), !0
				}, 0, 0, 1).button])), aJR.pH(L(197)), aJR.pH(L(198)));
				pU.push(aJR)
			}(pU), pU.push(function() {
				var aJR = new pC;
				if (aJR.pF(L(171)), aJR.pL(L(172) + data.aJd + "<br>" + L(169) + (data.aJe + 1) + " / " + data.u7 + "<br>" + L(173) + bm.e4(data.aJe)), data.aJC) {
					var qO = new qP(bg.dr.data[157], 1, void 0, function(e) {
							aJS(e.target.value)
						}),
						aJX = (qO.e.style.marginTop = "0.6em", aJR.pQ(qO), new q(L(144), function(e) {
							return e.textContent === L(144) ? (e.textContent = L(145), qO.e.readOnly = !0, aJf[0].pv(0), aJf[1].pv(0), aJf[0].button.style.color = b8.nc, aJf[1].button.style.color = b8.nc, bg.r3.r4(157, qO.e
								.value), aJS(bg.dr.data[157].value)) : aJU(), !0
						})),
						aJf = (aJR.pQ(new r6([aJX.button])), [new q("−", function(e) {
							return qO.e.readOnly && ax.s.aC3(0) && (b7.pZ.a1b(e), aJU(), ax.aJV.aJg({
								re: 7,
								ra: data.ra,
								rb: bI.p7(bg.dr.data[157].value, 2, 32767)
							})), !0
						}, 1), new q("+", function(e) {
							return qO.e.readOnly && ax.s.aC3(0) && (b7.pZ.a1b(e), aJU(), ax.aJV.aJg({
								re: 6,
								ra: data.ra,
								rb: bI.p7(bg.dr.data[157].value, 2, 32767)
							})), !0
						}, 1)]),
						pI = aJR.pH(),
						aJS = function(fH) {
							fH = isNaN(fH) ? 0 : Number(fH), fH = Math.floor(bI.p7(fH, 3, 32767)), pI.textContent = L(174, [fH - 1, fH, bg.dr.data[105].value])
						};
					aJR.pQ(new r6([aJf[0].button, aJf[1].button]));
					for (var a7 = 0; a7 < 2; a7++) aJf[a7].button.style.fontSize = "1.6em";
					var aJU = function() {
						aJX.button.textContent = L(144), qO.e.readOnly = !1, aJf[0].pv(1), aJf[1].pv(1), aJf[0].button.style.color = b8.mn, aJf[1].button.style.color = b8.mn
					};
					aJS(bg.dr.data[157].value)
				}
				return aJR
			}()), pU
	}())
}

function aJ0() {
	var aJr, aJs, aJt, pU;

	function aJu() {
		aJw(), 2 !== a9.data.aIncomeType && (a9.data.aIncomeData = null), n.aJ9()[19] = null, n.zc()
	}

	function aJw() {
		2 === a9.data.aIncomeType ? (b7.pj.a10(aJt.tN(), a9.data.aIncomeData, 255), b7.pj.max(a9.data.aIncomeData) || (a9.data.aIncomeType = 0)) : 1 !== a9.data.aIncomeType || a9.data.aIncomeValue || (a9.data.aIncomeType = 0)
	}
	this.show = function() {
		aJr.show(), this.resize()
	}, this.qt = function() {
		aJr.qt()
	}, this.resize = function() {
		aJr.resize(), aJs.resize()
	}, this.a0N = function(fA) {
		2 === fA && aJr.t1[0].ps()
	}, aJr = new su(L(199), [new q("⬅️ " + L(22), aJu)]), aJs = new pS(aJr.t0, (function(pU) {
		var aJR = new pC;
		aJR.pF(L(200)), aJR.pN(new sp({
			st: [L(201), L(202), L(203)],
			value: a9.data.aIncomeType
		}, function(e2) {
			aJw(), 2 !== e2 || a9.data.aIncomeData || (a9.data.aIncomeData = new Uint8Array(a9.em)), a9.data.aIncomeType = e2, n.o(22)
		})), pU.push(aJR)
	}(pU = []), function(pU) {
		var aJR;
		1 === a9.data.aIncomeType && ((aJR = new pC).pF("Value"), aJR.pQ(new qP({
			e2: -1,
			value: a9.data.aIncomeValue
		}, 1, 0, function(e) {
			var value = bI.p7(Math.floor(e.target.value), 0, 255);
			e.target.value = a9.data.aIncomeValue = value
		})), pU.push(aJR))
	}(pU), function(pU) {
		var aJR;
		2 === a9.data.aIncomeType && ((aJR = new pC).pF("Data"), (aJt = new tF(0, 1, 0, 1)).tM(b7.z3.a2N(a9.data.aIncomeData, 4)), aJR.pQ(aJt), pU.push(aJR))
	}(pU), pU))
}

function aJ3() {
	var aJr, aJs, aJt;

	function aJu() {
		aJw(), 3 !== a9.data.botDifficultyType || b7.pj.a0o(a9.data.botDifficultyData) || (a9.data.botDifficultyType = 0), 3 !== a9.data.botDifficultyType && (a9.data.botDifficultyData = null), n.aJ9()[19] = null, n.zc()
	}

	function aJw() {
		3 === a9.data.botDifficultyType && b7.pj.a10(aJt.tN(), a9.data.botDifficultyData, aA.k8.length - 1)
	}

	function aK1(pU, e2) {
		var aJR = new pC,
			value = (aJR.pF(e2 < 0 ? L(47) : L(46) + " " + bd.yb[e2 % 9]), 0 <= e2 && (aJR.pL(L(206) + ": " + a9.data.teamPlayerCount[e2]).style.marginBottom = "1em"), e2 < 0 ? a9.data.botDifficultyValue : a9.data.botDifficultyTeam[e2]);
		aJR.pN(new sp({
			st: aA.k8,
			value: value
		}, function(kJ) {
			e2 < 0 ? a9.data.botDifficultyValue = kJ : a9.data.botDifficultyTeam[e2] = kJ
		})), pU.push(aJR)
	}
	this.show = function() {
		aJr.show(), this.resize()
	}, this.qt = function() {
		aJr.qt()
	}, this.resize = function() {
		aJr.resize(), aJs.resize()
	}, this.a0N = function(fA) {
		2 === fA && aJr.t1[0].ps()
	}, aJr = new su(L(47), [new q("⬅️ " + L(22), aJu)]), aJs = new pS(aJr.t0, function() {
		var pU = [];
		if (function(pU) {
				var aJR = new pC,
					st = (aJR.pF(L(200)), [L(202), L(204), L(205), L(203)]),
					value = a9.data.botDifficultyType;
				0 === a9.data.gameMode && (value = Math.min(value, 2), st.splice(2, 1));
				aJR.pN(new sp({
					st: st,
					value: value
				}, function(e2) {
					aJw(), a9.data.botDifficultyType = e2, 0 === a9.data.gameMode && 2 === e2 && (a9.data.botDifficultyType = 3), 3 !== a9.data.botDifficultyType || a9.data.botDifficultyData || (a9.data.botDifficultyData =
						new Uint8Array(a9.em)), 2 !== a9.data.botDifficultyType || a9.data.botDifficultyTeam || (a9.data.botDifficultyTeam = new Uint8Array(9)), n.o(25)
				})), pU.push(aJR)
			}(pU), 0 === a9.data.botDifficultyType) aK1(pU, -1);
		else if (2 === a9.data.botDifficultyType)
			for (var a7 = 0; a7 < a9.data.teamPlayerCount.length; a7++) a9.data.teamPlayerCount[a7] && aK1(pU, a7);
		else 3 === a9.data.botDifficultyType && ! function(pU) {
			var aJR = new pC;
			aJR.pF("Data"), (aJt = new tF(0, 1, 0, 1)).tM(b7.z3.a2N(a9.data.botDifficultyData, 8)), aJR.pQ(aJt), pU.push(aJR)
		}(pU);
		return pU
	}())
}

function aK2(data) {
	var aJA, aK3, aK4, aBl, aK5, aK6, aK7, colors, aK8, aK9, aKA = 0,
		aKB = 0,
		aKC = !1,
		aKD = !1,
		aKE = [1, 5, 60, 240, 1440, 10080, 43200];

	function aKf(l0, l1) {
		! function(l0, l1) {
			return aK3 < l0 && l0 < aK3 + aBl && aK4 < l1 && l1 < aK4 + aK5
		}(aKA = l0, aKB = l1) ? (aKC && (bc.de = !0), aKC = !1) : (aKC = !0, bc.de = !0)
	}
	this.show = function() {
		aKD = bg.dr.data[127].value, aJA.show(), this.resize()
	}, this.qt = function() {
		aJA.qt()
	}, this.resize = function() {
		aJA.resize();
		var fA = au.pf,
			t8 = aJA.t5(),
			aKN = fA * t8.t7,
			fA = fA * t8.qw;
		aK6 = b7.pZ.ry(.06), aK7 = b7.pZ.ry(.04), aK3 = b7.pZ.ry(.06), aK4 = fA + aK6, aBl = au.a1 - aK3 - aK7, aK5 = aKN + fA - aK4 - aK7
	}, this.t9 = function() {
		aJA.t9(),
			function() {
				var a7, aKK, gI, ew, f8, g = data.data,
					aKQ = 1,
					aKR = .125,
					aKS = aKD ? 65536 : 0;
				for (a7 = 0; a7 < g.length; a7++)
					for (aKK = g[a7].aKK, gI = aKK.length, aKQ = Math.max(gI, aKQ), f8 = 0; f8 < gI; f8++) aKR = Math.max(aKK[f8], aKR), aKS = Math.min(aKK[f8], aKS);
				var mE = aK4 + aK5,
					wK = aK5 / (aKR - aKS),
					wJ = 1 / (aKQ - 1);
				for (tA.lineWidth = bZ.xH, a7 = 0; a7 < g.length; a7++) {
					for (aKK = g[a7].aKK, gI = aKK.length, ew = aK3, tA.beginPath(), tA.moveTo(ew + aBl, mE - wK * (aKK[gI - 1] - aKS)), f8 = gI - 2; 0 <= f8; f8--) tA.lineTo(ew + wJ * f8 * aBl, mE - wK * (aKK[f8] - aKS));
					tA.strokeStyle = colors[a7], tA.stroke()
				}(function(aKS, aKR, mE, wK) {
					tA.font = b7.pZ.ri(0, .25 * aK3), b7.pZ.textBaseline(tA, 1), b7.pZ.textAlign(tA, 2), tA.fillStyle = colors[0];
					for (var ew = .92 * aK3, a7 = 0; a7 < 3; a7++) {
						var fH = aKS + a7 * (aKR - aKS) / 2;
						tA.fillText((fH / 1e3).toFixed(3), ew, mE - wK * (fH - aKS))
					}
				})(aKS, aKR, mE, wK),
				function(aKQ) {
					var ey = aK4 + aK5 + .15 * aK7;
					tA.font = b7.pZ.ri(0, Math.min(.4 * aK7, .028 * au.a1)), b7.pZ.textBaseline(tA, 0), b7.pZ.textAlign(tA, 2), tA.fillStyle = colors[0], tA.fillText(b7.a0f.a1P(aK8), aK3 + aBl, ey), b7.pZ.textAlign(tA, 0), tA.fillText(b7.a0f.a1P(
						new Date(aK9.getTime() - 6e4 * (aKQ - 1) * aKE[data.aKJ])), aK3, ey)
				}(aKQ),
				function(aKQ, aKS, aKR) {
					if (aKC && !(aKQ < 2)) {
						for (var a6L, e2 = (aKA - aK3) / aBl * (aKQ - 1), lD = Math.floor(e2), lE = Math.floor(1 + e2), aKV = e2 - lD, aKW = 1e5, aKX = -1, aKY = -1, aKZ = aKR - (aKR - aKS) * (aKB - aK4) / aK5, g = data.data, a7 = 0; a7 < g
							.length; a7++) {
							var aHL, aKK = g[a7].aKK;
							aKK.length <= lE || (aKK = aKK[lD] + aKV * (aKK[lE] - aKK[lD]), (aHL = Math.abs(aKZ - aKK)) < aKW && (aKW = aHL, aKX = a7, aKY = aKK))
						} - 1 !== aKX && (aKR = aK4 + aK5 - (aKY - aKS) / (aKR - aKS) * aK5, tA.lineWidth = .5 * bZ.xH, tA.strokeStyle = colors[aKX], tA.beginPath(), tA.moveTo(aK3, aKR), tA.lineTo(aKA, aKR), tA.lineTo(aKA, aK4 + aK5), tA
						.stroke(), tA.beginPath(), tA.arc(aKA, aKR, .1 * aK3, 0, 2 * Math.PI), tA.fillStyle = colors[aKX], tA.fill(), aKS = aK4 + aK5 + .15 * aK7, b7.pZ.textAlign(tA, 1), a6L = aKQ - 2 < e2 ? (a6L = aK9.getTime() - 6e4 * aKE[
								data.aKJ], new Date(a6L + (e2 - (aKQ - 2)) * (aK8.getTime() - a6L))) : new Date(aK9.getTime() - 6e4 * (aKQ - e2 - 1) * aKE[data.aKJ]), aKQ = b7.a0f.a1P(a6L), e2 = b7.pZ.measureText(aKQ), a6L = bI.p7(aKA, aK3 +
								.5 * e2, aK3 + aBl - .5 * e2), tA.fillStyle = b7.color.mf(70, 50, 20), tA.fillRect(a6L - .52 * e2, aK4 + aK5, 1.04 * e2, .55 * aK7), tA.fillStyle = colors[0], tA.fillText(aKQ, a6L, aKS), tA.font = b7.pZ.ri(0,
								.25 * aK3), b7.pZ.textBaseline(tA, 1), b7.pZ.textAlign(tA, 2), a6L = .92 * aK3, aKQ = (aKY / 1e3).toFixed(3), e2 = b7.pZ.measureText(aKQ), aKS = a6L - 1.04 * e2, tA.fillStyle = b7.color.mf(70, 50, 20), tA
							.fillRect(aKS, aKR - .1625 * aK3, aK3 - aKS, .275 * aK3), tA.fillStyle = colors[aKX], tA.fillText(aKQ, a6L, aKR))
					}
				}(aKQ, aKS, aKR)
			}(), tA.lineWidth = bZ.xH, tA.strokeStyle = b8.mn, tA.beginPath(), tA.moveTo(aK3, aK4), tA.lineTo(aK3, aK4 + aK5), tA.lineTo(aK3 + aBl, aK4 + aK5), tA.stroke();
		var a7, fontSize = .5 * aK6,
			g = (tA.font = b7.pZ.ri(0, fontSize), b7.pZ.textBaseline(tA, 1), b7.pZ.textAlign(tA, 0), data.data),
			ep = g.length,
			ey = aK4 - .5 * aK6,
			pG = "";
		for (a7 = 0; a7 < ep; a7++) pG += g[a7].name + "  ";
		pG = pG.trim();
		var aKc = b7.pZ.measureText(pG),
			ew = .5 * (au.a1 - aKc);
		for (aKc > au.a1 && (ew = 0, tA.font = b7.pZ.ri(0, au.a1 / aKc * fontSize)), a7 = 0; a7 < ep; a7++) tA.fillStyle = colors[a7], tA.fillText(g[a7].name, ew, ey), ew += b7.pZ.measureText(g[a7].name + "  ")
	}, this.h3 = function(l0, l1) {
		aKf(l0, l1)
	}, this.zp = function(l0, l1) {
		aKf(l0, l1)
	}, this.a0N = function(fA) {
		2 === fA && aJA.t1[0].ps()
	};
	var a7, dm, a1N, kJ, es = data.data,
		ep = es.length,
		max = 1;
	for (a7 = 0; a7 < ep; a7++) max = Math.max(max, es[a7].aKK.length);
	for (a7 = 0; a7 < ep; a7++)
		for (; es[a7].aKK.length < max;) es[a7].aKK.unshift(0);
	dm = new Date, a1N = 6e4 * dm.getTimezoneOffset(), kJ = dm.getTime() - a1N, aK8 = new Date(kJ), 6 === data.aKJ ? function(dm, a1N) {
		var aKM = dm.getUTCFullYear(),
			dm = dm.getUTCMonth() + 1;
		aK9 = dm < 12 ? new Date(Date.UTC(aKM, dm) - a1N) : new Date(Date.UTC(aKM + 1, 0) - a1N)
	}(dm, a1N) : (a1N = 6e4 * aKE[data.aKJ], aK9 = data.aKJ <= 4 ? new Date(kJ + a1N - dm.getTime() % a1N) : new Date(kJ + a1N - (dm.getTime() + 2592e5) % a1N)), kJ = b7.color, colors = [b8.mn, kJ.mf(255, 0, 0), kJ.mf(0, 200, 0), kJ.mf(80, 80,
		255), kJ.mf(255, 255, 0), kJ.mf(255, 0, 255), kJ.mf(0, 255, 255), kJ.mf(255, 140, 0), kJ.mf(128, 128, 128), kJ.mf(0, 255, 140)], aJA = new su(L(207) + ", " + ["M1", "M5", "H1", "H4", "D1", "W1", "MN"][data.aKJ] + ", " + b7.a0f.a1M(aK8), [
		new q("⬅️ " + L(22), function() {
			n.s.a9r()
		}), new q(L(208), function() {
			n.o(14)
		})
	], !1)
}

function aIs() {
	var aJA, aJB, pU;
	this.show = function() {
		aJA.show(), this.resize()
	}, this.qt = function() {
		aJA.qt()
	}, this.resize = function() {
		aJA.resize(), aJB.resize()
	}, this.a0N = function(fA) {
		2 === fA && aJA.t1[0].ps()
	}, aJA = new su(L(209), [new q("⬅️ " + L(22), function() {
		n.aJ8(13)
	})]), aJB = new pS(aJA.t0, ((pU = []).push(function() {
		var aJR = new pC,
			aJX = (aJR.pF(L(210)), aJR.pH(L(211)), new q(L(212), function() {
				bg.r3.r4(130, 0), n.s.aKk()
			}, 0, 0, 1)),
			qO = new qP(bg.dr.data[126], 0, function() {
				aJX.button.click()
			});
		return aJR.pQ(qO), qO.e.placeholder = "a,b,c", qO.e.style.marginTop = "0.5em", aJR.pQ(new r6([aJX.button])), aJR
	}()), pU.push(function() {
		var aJR = new pC,
			aJX = new q(L(212), function() {
				bg.r3.r4(130, 1), n.s.aKk()
			}, 0, 0, 1),
			aKl = new qP(bg.dr.data[129], 1, function() {
				aKl.e.focus()
			}),
			aKm = new qP(bg.dr.data[128], 1, function() {
				aJX.button.click()
			});
		return aJR.pF(L(213)), aJR.pQ(aKm), aKm.e.style.marginBottom = "0.5em", aJR.pF(L(214)), aJR.pQ(aKl), aJR.pQ(new r6([aJX.button])), aJR
	}()), pU.push(function() {
		var aJR = new pC;
		return aJR.pF(L(215)), bg.dr.data[125].st = ["M1", "M5", "H1", "H4", "D1", "W1", "MN"], aJR.pN(new sp(bg.dr.data[125])), aJR
	}()), pU.push(function() {
		var aJR = new pC;
		return aJR.pF(L(216)), aJR.pQ(new r0(bg.dr.data[127], L(217))), aJR
	}()), pU))
}

function aIr() {
	var aJA, aKn, aBl, aKo, aBm, aBn, colors = [0, 0, 0],
		aKp = -1;

	function aBu(a7) {
		var aKs = aKn.ey + a7 * (bZ.gap + aBn);
		tA.fillStyle = "rgb(" + (0 === a7 ? 150 : 2 === a7 ? 30 : 0) + "," + (1 === a7 ? 130 : 2 === a7 ? 30 : 0) + "," + (2 === a7 ? 220 : 0) + ")", tA.fillRect(aKo, aKs, colors[a7] * aBm, aBn), tA.strokeStyle = b8.mn, tA.strokeRect(aKo, aKs, aBm,
			aBn), tA.fillStyle = b8.mn, tA.font = b7.pZ.ri(0, .32 * aBn), b7.pZ.textBaseline(tA, 1), b7.pZ.textAlign(tA, 0), tA.fillText(L(0 === a7 ? 220 : 1 === a7 ? 221 : 222) + aKq(a7), aKo + bZ.gap, aKs + .53 * aBn)
	}

	function aKq(a7, aKt) {
		return aKt = aKt || 256, bI.p7(Math.floor(aKt * colors[a7]), 0, aKt - 1)
	}

	function a0J(l0, l1) {
		return !(l0 < aKo || l1 < aKn.ey || l0 > aKn.ew + aKn.a1 || l1 > aKn.ey + aKn.jO)
	}
	this.show = function() {
		var fH = bg.dr.data[121].value;
		colors[0] = (fH >> 12) / 63, colors[1] = (fH >> 6 & 63) / 63, colors[2] = (63 & fH) / 63, aJA.show(), this.resize()
	}, this.qt = function() {
		bg.r3.r4(121, (aKq(0, 64) << 12) + (aKq(1, 64) << 6) + aKq(2, 64)), aJA.qt()
	}, this.resize = function() {
		aJA.resize(), aKn.resize();
		var fA = au.pf,
			t8 = aJA.t5(),
			aKr = (aKn.ey = Math.max(aKn.ey, fA * t8.qw + bZ.gap), fA * t8.t7 - 2 * bZ.gap);
		aKn.jO = Math.min(aKn.jO, aKr), aKn.a1 = 2 * aKn.jO, aKn.ey = fA * t8.qw + .5 * (fA * t8.t7 - aKn.jO), aKn.ew = .5 * (au.a1 - aKn.a1), aBl = .25 * aKn.a1, aKo = aKn.ew + aBl + bZ.gap, aBm = aKn.a1 - aBl - bZ.gap, aBn = (aKn.jO - 2 * bZ
			.gap) / 3
	}, this.t9 = function() {
		var e1, rx, f9;
		aJA.t9(), tA.lineWidth = bZ.xH, e1 = aKq(0), rx = aKq(1), f9 = aKq(2), tA.fillStyle = "rgb(" + e1 + "," + rx + "," + f9 + ")", tA.fillRect(aKn.ew, aKn.ey, aBl, aKn.jO), tA.strokeStyle = b8.mn, tA.strokeRect(aKn.ew, aKn.ey, aBl, aKn.jO),
			tA.fillStyle = e1 + rx + f9 < 306 && rx < 150 ? b8.mn : b8.me, b7.pZ.textBaseline(tA, 1), b7.pZ.textAlign(tA, 1), tA.font = b7.pZ.ri(0, .1 * aKn.jO), tA.rotate(-Math.PI / 2), tA.fillText(L(219), -aKn.ey - .5 * aKn.jO, aKn.ew + .5 *
				aBl), tA.setTransform(1, 0, 0, 1, 0, 0), aBu(0), aBu(1), aBu(2)
	}, this.h3 = function(l0, l1) {
		a0J(l0, l1) && (aKp = bI.p7(Math.floor((l1 - aKn.ey) / (aBn + .75 * bZ.gap)), 0, 2), colors[aKp] = bI.p7((l0 - aKo) / aBm, 0, 1), bc.de = !0)
	}, this.zp = function(l0) {
		-1 !== aKp && (colors[aKp] = bI.p7((l0 - aKo) / aBm, 0, 1), bc.de = !0)
	}, this.zs = function(l0, l1, deltaY) {
		a0J(l0, l1) && (l0 = bI.p7(Math.floor((l1 - aKn.ey) / (aBn + .75 * bZ.gap)), 0, 2), colors[l0] = bI.p7(colors[l0] + (1 - 2 * (0 < deltaY)) / 256, 0, 1), bc.de = !0)
	}, this.a0D = function() {
		0 <= aKp && (aKp = -1, bc.de = !0)
	}, this.a0N = function(fA) {
		2 === fA && aJA.t1[0].ps()
	}, aJA = new su(L(218), [new q("⬅️ " + L(22), function() {
		n.s.a9r()
	})], !1), aKn = new qC([.5, .25], [.5, .5], 1)
}

function aIz() {
	var aJr, aJs, aJt, qA;

	function aJu() {
		aJw(), 1 !== a9.data.colorsType && (a9.data.colorsData = null), n.aJ9()[19] = null, n.zc()
	}

	function aKu() {
		aJw(), n.o(21)
	}

	function aJw() {
		1 === a9.data.gameMode ? a9.a2e.a2i() : 0 === a9.data.gameMode && 1 === a9.data.colorsType && b7.pj.a10(aJt.tN(), a9.data.colorsData, 262143)
	}
	this.show = function() {
		aJr.show(), this.resize()
	}, this.qt = function() {
		aJr.qt()
	}, this.resize = function() {
		aJr.resize(), aJs.resize()
	}, this.a0N = function(fA) {
		2 === fA && aJr.t1[0].ps()
	}, qA = [new q("⬅️ " + L(22), aJu)], 1 === a9.data.gameMode && qA.push(new q(L(223), aKu, 1, 1)), aJr = new su(L(224), qA), aJs = new pS(aJr.t0, (function(pU) {
		var aJR = new pC;
		aJR.pF(L(200)), 0 === a9.data.gameMode && (aJR.pN(new sp({
			st: [L(225), L(203)],
			value: a9.data.colorsType
		}, function(e2) {
			aJw(), a9.data.colorsType = e2, 1 !== a9.data.colorsType || a9.data.colorsData && a9.data.colorsData.length === a9.em || (a9.data.colorsData = new Uint32Array(a9.em)), n.o(21)
		})), aJR.pQ(new rG));
		aJR.pQ(new r0({
			value: a9.data.selectableColor
		}, L(226), function(value) {
			a9.data.selectableColor = value
		})), pU.push(aJR)
	}(qA = []), 0 === a9.data.gameMode ? 1 === a9.data.colorsType && function(pU) {
		var aJR = new pC;
		aJR.pF("Data"), (aJt = new tF(0, 1, 0, 1)).tM(b7.z3.a2N(a9.data.colorsData, 1)), aJR.pQ(aJt), pU.push(aJR)
	}(qA) : (a9.a2e.a2i(), qA.push(function() {
		var aJR = new pC;
		aJR.pF(L(206));
		for (var a7 = 0; a7 < bd.yb.length; a7++) {
			var kJ = (a7 + 1) % bd.yb.length,
				e = aJR.pL((0 == kJ ? "" : "Team ") + bd.yb[kJ]);
			a7 && (e.style.marginTop = "0.5em"), aJR.pQ(new qP({
				e2: -1,
				value: a9.data.teamPlayerCount[kJ]
			}, 1, 0, function(e) {
				aJr.t1[1].pv(0);
				var playerCount = bI.p7(Math.floor(e.target.value), 0, 512);
				e.target.value = playerCount, a9.data.teamPlayerCount[e.target.aKw] = playerCount
			})).e.aKw = kJ
		}
		return aJR
	}())), qA))
}

function rd(id, a22, aKx) {
	var aJA, aKy;

	function aL2() {
		aKy.pV.innerHTML += "<br>" + L(229)
	}

	function aL1() {
		bA.a3(48), bA.a4(24, Math.floor(bI.pow(24) * Math.random())), bA.a4(24, Math.floor(bI.pow(24) * Math.random())), bE.dW(bA.a8), bg.r3.r4(110, bC.rf.rg(bC.rf.rh(8))), ax.aJV.aLG()
	}
	this.aKz = !0, this.aL0 = id, this.show = function() {
		aJA.show(), this.resize(), 15 === id ? (ax.s.aC9(0, id) ? aL1 : aL2)() : 16 === id ? ax.s.aC9(0, id) ? ax.a9o.aL3(2) : aL2() : 17 === id ? ax.s.aC9(0, id) ? ax.a9o.aL3(3) : aL2() : 18 === id ? (ax.s.close(0, 3253), ax.s.aC9(0, id),
		aL2()) : 21 === id ? ax.s.aC9(0, id) ? ax.aL4.aL5(a22.rt, a22.ru, a22.rv) : aL2() : 22 === id ? ax.s.aC9(0, id) ? ax.aL4.aL6(a22.rt, a22.aL7, a22.aL8) : aL2() : 23 === id ? ax.s.aC9(0, id) ? ax.aL4.aL9(a22.aKJ, a22.yz) : aL2() : 24 ===
			id ? ax.s.aC9(0, id) ? ax.aL4.aLA(a22.aKJ, a22.ru, a22.rv) : aL2() : 25 === id ? ax.s.aC9(0, id) ? ax.aJV.aJg(a22) : aL2() : 28 === id ? ax.s.aC9(0, id) ? ax.aL4.aLB(a22.rt, a22.aL7, a22.aL8) : aL2() : 29 === id && (ax.s.aC9(0, id) ?
				ax.aJV.aLC(a22) : aL2())
	}, this.aLD = function() {
		15 === id ? aL1() : 16 === id ? ax.a9o.aL3(2) : 17 === id ? ax.a9o.aL3(3) : 18 === id ? n.o(8, this.aIi, new rd(16)) : 21 === id ? ax.aL4.aL5(a22.rt, a22.ru, a22.rv) : 22 === id ? ax.aL4.aL6(a22.rt, a22.aL7, a22.aL8) : 23 === id ? ax.aL4
			.aL9(a22.aKJ, a22.yz) : 24 === id ? ax.aL4.aLA(a22.aKJ, a22.ru, a22.rv) : 25 === id ? ax.aJV.aJg(a22) : 28 === id ? ax.aL4.aLB(a22.rt, a22.aL7, a22.aL8) : 29 === id ? ax.aJV.aLC(a22) : 1e3 === id && (this.aL0 = id = 25, ax.aJV.aJg(
				a22))
	}, this.aLE = function(code, bp, data) {
		!bp && code !== id || (16 === code ? n.o(7, this.aIi) : 17 === code ? (ax.s.close(0, 3252), bg.s.tv(0), bg.dr.data[117].st && 0 < bg.dr.data[117].st.length ? (bp = bg.s.tw(0), bg.r3.r4(105, bp.ra), bg.r3.r4(106, bp.password), n.o(8, this
			.aIi, new rd(16))) : (bg.r3.r4(105, ""), n.s.a9r())) : 21 === code ? n.o(10, this.aIi, new aLF(data)) : 23 === code ? n.o(13, 0, new aK2({
			data: data,
			aKJ: a22.aKJ
		})) : 25 === code && (n.s.aIt.ra = a22.ra, n.o(15, this.aIi)))
	}, this.qt = function() {
		aJA.qt()
	}, this.resize = function() {
		aJA.resize(), aKy.resize()
	}, this.a0N = function(fA) {
		2 === fA && aJA.t1[0].ps()
	}, aJA = new su(L(227), [new q("⬅️ " + L(22), function() {
		aKx ? n.o(29) : n.s.a9r()
	})]), aKy = new r5(aJA.t0, L(228))
}

function aIx() {
	var aJr, aJs, pU;

	function aLJ() {
		var gI;
		1 === a9.data.gameMode ? (a9.data.teamPlayerCount || (a9.data.teamPlayerCount = new Uint16Array([0, 1, 1, 0, 0, 0, 0, 0, 0]), a9.a2e.a2i()), gI = b7.pj.a0u(a9.data.teamPlayerCount, 0), a9.data.numberTeams = gI) : (2 === a9.data
			.botDifficultyType && (a9.data.botDifficultyType = 0), 1 === a9.data.spawningType && (a9.data.spawningType = 0))
	}

	function aJu() {
		1 !== a9.data.gameMode && (a9.data.teamPlayerCount = null), aLL(), a9.data.canvas = null, n.o(5, 5)
	}

	function aLL() {
		b6.op.dW(), bg.r3.r4(156, b6.a2u.xj())
	}

	function aLH() {
		a9.data.isReplay = 0, aLL(), a9.a2e.a34(), aW.aCL(), a9.a2e.a31(), a9.data.canvas = 2 === a9.data.mapType ? bP.us : null, a9.a2h(), a9.a2g = 1
	}

	function aLZ() {
		aLJ();
		for (var g = [aLO(), aLP(), aLQ()], a7 = 3; a7 < 6; a7++) aJs.pV.removeChild(aJs.pW[a7].pE), aJs.pW[a7] = g[a7 - 3], aJs.pV.appendChild(aJs.pW[a7].pE);
		aJs.resize()
	}

	function aLO() {
		var aLa, aJR = new pC;
		return aJR.pF(L(224)), aLa = 0 === a9.data.gameMode ? [L(225), L(203)][a9.data.colorsType] : a9.data.numberTeams + " Team" + (1 === a9.data.numberTeams ? "" : "s"), aJR.pL(aLa), aJR.pQ(new r6([new q(L(233), function() {
			n.o(21)
		}).button])), aJR
	}

	function aLP() {
		var aJR = new pC,
			g = (aJR.pF(L(47)), [L(202) + ": " + aA.k8[a9.data.botDifficultyValue], L(204), L(205), L(203)]);
		return aJR.pL(g[a9.data.botDifficultyType]), aJR.pQ(new r6([new q(L(233), function() {
			n.o(25)
		}).button])), aJR
	}

	function aLQ() {
		var aJR = new pC,
			g = (aJR.pF("Spawning"), [L(225), L(235), L(203)]);
		return aJR.pL(g[a9.data.spawningType]), aJR.pQ(new r6([new q(L(233), function() {
			n.o(24)
		}).button])), aJR
	}
	this.show = function() {
		aJr.show(), this.resize(), aJr.t0.scrollTop = n.s.aEH[0]
	}, this.qt = function() {
		n.s.aEH[0] = aJr.t0.scrollTop, aJr.qt()
	}, this.resize = function() {
		aJr.resize(), aJs.resize()
	}, this.a0N = function(fA) {
		2 === fA && aJr.t1[0].ps()
	}, aJr = new su("🔧 " + L(230), [new q("⬅️ " + L(22), aJu), new q(L(231), aLH)]), aLJ(), a9.data.canvas || (2 === a9.data.mapType ? a9.data.canvas = bP.us : 1 === a9.data.mapType ? a9.data.canvas = bP.aGl(bP.a32(a9.data), 0).us : (a9.data
		.mapType = 0, a9.data.passableWater = a9.data.passableMountains = 1, a9.data.canvas = bP.aGl(bP.a32(a9.data), a9.data.mapSeed).us)), aJs = new pS(aJr.t0, (function(pU) {
		var aJR = new pC,
			a17 = (aJR.pF(L(232)), a9.data.canvas);
		a17.style.width = "100%", aJR.pQ({
			e: a17
		}), aJR.pQ(new r6([new q(L(233), function() {
			n.o(20)
		}).button])), pU.push(aJR)
	}(pU = []), function(pU) {
		var aJR = new pC;
		aJR.pF(L(206)), aJR.pQ(new qP({
			e2: -1,
			value: a9.data.playerCount
		}, 1, 0, function(e) {
			var playerCount = bI.p7(Math.floor(e.target.value), 1, 512);
			e.target.value = a9.data.playerCount = playerCount, 1 === a9.data.gameMode && (e = b7.pj.a0u(a9.data.teamPlayerCount, 0), a9.a2e.a2i(), b7.pj.a0u(a9.data.teamPlayerCount, 0) !== e) && aLZ()
		})), pU.push(aJR)
	}(pU), function(pU) {
		var aJR = new pC;
		aJR.pF(L(234)), aJR.pN(new sp({
			st: ["Battle Royale", "Teams"],
			value: a9.data.gameMode
		}, function(e2) {
			a9.data.gameMode !== e2 && (a9.data.gameMode = e2, aLZ())
		})), pU.push(aJR)
	}(pU), pU.push(aLO()), pU.push(aLP()), pU.push(aLQ()), function(pU) {
		var aJR = new pC,
			g = (aJR.pF(L(236)), [L(237), L(238), L(203)]);
		aJR.pL(g[a9.data.playerNamesType]), aJR.pQ(new r6([new q(L(233), function() {
			n.o(23)
		}).button])), pU.push(aJR)
	}(pU), function(pU) {
		var aJR = new pC,
			g = (aJR.pF(L(199)), [L(201), L(202) + ": " + a9.data.aIncomeValue, L(203)]);
		aJR.pL(g[a9.data.aIncomeType]), aJR.pQ(new r6([new q(L(233), function() {
			n.o(22)
		}).button])), pU.push(aJR)
	}(pU), function(pU) {
		var aJR = new pC,
			g = (aJR.pF(L(239)), [L(201), L(202) + ": " + a9.data.tIncomeValue, L(203)]);
		aJR.pL(g[a9.data.tIncomeType]), aJR.pQ(new r6([new q(L(233), function() {
			n.o(26)
		}).button])), pU.push(aJR)
	}(pU), function(pU) {
		var aJR = new pC,
			g = (aJR.pF(L(240)), [L(201), L(202) + ": " + a9.data.iIncomeValue, L(203)]);
		aJR.pL(g[a9.data.iIncomeType]), aJR.pQ(new r6([new q(L(233), function() {
			n.o(27)
		}).button])), pU.push(aJR)
	}(pU), function(pU) {
		var aJR = new pC,
			g = (aJR.pF(L(241)), [L(201), L(202) + ": " + a9.data.sResourcesValue, L(203)]);
		aJR.pL(g[a9.data.sResourcesType]), aJR.pQ(new r6([new q(L(233), function() {
			n.o(28)
		}).button])), pU.push(aJR)
	}(pU), function(pU) {
		var aJR = new pC;
		aJR.pF(L(242)), aJR.pQ(new r6([new q(L(243), function() {
			n.r(), a9.a2e.a35(), n.s.aEH[0] = 0, n.o(19)
		}).button])), aJR.pQ(new r6([new q(L(244), function() {
			bk.aE6()
		}).button])), aJR.pQ(new r6([new q(L(245), function() {
			return bk.aE8(), !0
		}).button])), pU.push(aJR)
	}(pU), pU))
}

function aJ5() {
	var aJr, aJs, aJt, pU;

	function aJu() {
		aJw(), 2 !== a9.data.iIncomeType && (a9.data.iIncomeData = null), n.aJ9()[19] = null, n.zc()
	}

	function aJw() {
		2 === a9.data.iIncomeType && b7.pj.a10(aJt.tN(), a9.data.iIncomeData, 255)
	}
	this.show = function() {
		aJr.show(), this.resize()
	}, this.qt = function() {
		aJr.qt()
	}, this.resize = function() {
		aJr.resize(), aJs.resize()
	}, this.a0N = function(fA) {
		2 === fA && aJr.t1[0].ps()
	}, aJr = new su(L(240), [new q("⬅️ " + L(22), aJu)]), aJs = new pS(aJr.t0, (function(pU) {
		var aJR = new pC;
		aJR.pF(L(200)), aJR.pN(new sp({
			st: [L(201), L(202), L(203)],
			value: a9.data.iIncomeType
		}, function(e2) {
			aJw(), 2 !== e2 || a9.data.iIncomeData || (a9.data.iIncomeData = new Uint8Array(a9.em), a9.data.iIncomeData.fill(32)), a9.data.iIncomeType = e2, n.o(27)
		})), pU.push(aJR)
	}(pU = []), function(pU) {
		var aJR;
		1 === a9.data.iIncomeType && ((aJR = new pC).pF("Value"), aJR.pQ(new qP({
			e2: -1,
			value: a9.data.iIncomeValue
		}, 1, 0, function(e) {
			var value = bI.p7(Math.floor(e.target.value), 0, 255);
			e.target.value = a9.data.iIncomeValue = value
		})), pU.push(aJR))
	}(pU), function(pU) {
		var aJR;
		2 === a9.data.iIncomeType && ((aJR = new pC).pF("Data"), (aJt = new tF(0, 1, 0, 1)).tM(b7.z3.a2N(a9.data.iIncomeData, 4)), aJR.pQ(aJt), pU.push(aJR))
	}(pU), pU))
}

function aIn() {
	var aLb, aLc, aKn, qO, aLd;
	this.aCx = new rm, aKn = new qC([.45, .27], [.5, .5], 2 / 3), aLc = [new q("⚔️<br>" + L(246), function() {
			aLe(0)
		}, b8.nE), new q("🗡️<br>" + L(230), function() {
			aLe(1)
		}, b8.nR), new q("🔑<br>" + L(247), function() {
			aLe(2)
		}, b8.nh), new q("☰<br>" + L(248), function() {
			aLe(3)
		}, b8.mz), new q("", function() {
			n.o(12)
		}, b8.mj, !1),
		new q("FX Client settings", function() {
			__fx.WindowManager.openWindow("settings");
		}, "rgba(0, 0, 20, 0.5)"),
		new q("Join/Create custom lobby", function() {
			__fx.customLobby.showJoinPrompt();
		}, "rgba(20, 9, 77, 0.5)")
	], qO = new qP(bg.dr.data[122]);
	for (var a7 = 0; a7 < aLc.length; a7++) aLc[a7].button.style.position = "absolute";

	function aLe(e2) {
		u.v.setState(10), aX.s1() || aX.aCn(), 0 === e2 ? n.s.aLf() : 1 === e2 ? (b6.aER.ud(bg.dr.data[156].value, 1) || a9.a2e.a35(), n.o(19)) : 2 === e2 ? 0 !== u.id || bg.dr.data[140].value ? n.o(8, n.rc, new rd(16)) : n.s.aLg(n.rc, 16) : 3 ===
			e2 && n.o(1)
	}
	qO.e.style.position = "absolute", qO.e.style.textAlign = "center", qO.e.placeholder = L(249), this.show = function() {
		aW.setState(0), u.v.setState(12), this.aCx.show(), aLc[4].pv(b7.color.a1E(bg.dr.data[121].value)), this.resize(), document.body.appendChild(qO.e);
		for (var a7 = 0; a7 < aLc.length; a7++) document.body.appendChild(aLc[a7].button);
		1 !== u.id || u.fI < 5 || (aLd && bc.eO > aLd + 144e5 ? u.tg.setState(14) : aLd = bc.eO)
	}, this.qt = function() {
		this.aCx.qt(), document.body.removeChild(qO.e);
		for (var a7 = 0; a7 < aLc.length; a7++) document.body.removeChild(aLc[a7].button)
	}, this.resize = function() {
		this.aCx.resize(), aKn.resize();
		var gap = .5 * bZ.gap,
			sV = 10 / 99 * .84 * aKn.a1,
			aLj = .16 * aKn.jO,
			a6s = .19 * aKn.a1,
			ew = aKn.ew + a6s,
			sV = aKn.ey + sV + 3 * gap,
			a1 = .5 * (aKn.a1 - gap) - a6s,
			a6s = aKn.a1 - 2 * a6s - aLj - gap,
			a6s = (b7.pZ.rz(qO.e, ew, sV, a6s, aLj), b7.pZ.rz(aLc[4].button, ew + a6s + gap, sV, aLj, aLj), .5 * (aKn.ey + aKn.jO - (sV += aLj + gap) - gap));
		b7.pZ.rz(aLc[0].button, ew, sV, a1, a6s), b7.pZ.rz(aLc[1].button, ew + a1 + gap, sV, a1, a6s), b7.pZ.rz(aLc[2].button, ew, sV + a6s + gap, a1, a6s), b7.pZ.rz(aLc[3].button, ew + a1 + gap, sV + a6s + gap, a1, a6s);
		b7.pZ.rz(aLc[5].button, ew, sV + a6s * 2 + gap * 2, a1 * 2 + gap, a6s / 3);
		b7.pZ.rz(aLc[6].button, ew, sV + a6s * 2.33 + gap * 3, a1 * 2 + gap, a6s / 3);
		for (var a7 = 0; a7 < aLc.length; a7++) aLc[a7].button.style.font = b7.pZ.ri(0, b7.pZ.a1V(.065 * aKn.jO)), b7.pZ.pl(aLc[a7].button, 5);
		qO.e.style.font = b7.pZ.ri(0, b7.pZ.a1V(.08 * aKn.jO)), b7.pZ.pl(qO.e, 5)
	}, this.t9 = function() {
		if (aW.aCP(), aP.t9(), aK.t9(), bV.t9(), aX.s1()) {
			if (__fx.settings.displayWinCounter) {
				const size = Math.floor(aKn.a1 * 0.03);
				tA.font = b7.pZ.ri(1, size);
				tA.fillStyle = "#ffffff";
				const text = "Win count: " + __fx.wins.count;
				const textLength = tA.measureText(text).width;
				tA.textAlign = "left";
				tA.textBaseline = "middle";
				tA.fillText(text, tA.canvas.width - textLength - size / 2, size);
			};
			tA.imageSmoothingEnabled = !1;
			var fA = aX.aCS("territorial.io"),
				mP = .84 * aKn.a1 / fA.width;
			tA.setTransform(mP, 0, 0, mP, aKn.ew + .08 * aKn.a1, aKn.ey), aLb = aLb || b7.a0b.a20(fA, b7.a0b.a26, [0, 0, 0]);
			for (var ew = -1; ew <= 1; ew += 2)
				for (var ey = -1; ey <= 1; ey += 2) tA.drawImage(aLb, ew, ey);
			tA.drawImage(fA, 0, 0), tA.imageSmoothingEnabled = !0;
			var hh = aX.aCS("logo"),
				aLl = .6666 * mP * fA.height / hh.height,
				mQ = .5 * au.a1,
				mR = aKn.ey + .5 * mP * fA.height - .5 * aLl * hh.height;
			tA.setTransform(aLl, 0, 0, aLl, mQ - .6 * mP * fA.width, mR), tA.drawImage(hh, 0, 0), tA.setTransform(aLl, 0, 0, aLl, mQ + .6 * mP * fA.width - aLl * hh.width, mR), tA.drawImage(hh, 0, 0), tA.setTransform(1, 0, 0, 1, 0, 0), tA
				.imageSmoothingEnabled = !0
		}
	}
}

function aIu() {
	var aJA, aLm, aLn, sv;

	function rs(a7) {
		n.o(8, n.rc, new rd(21, {
			rt: a7,
			ru: 0,
			rv: 10
		}))
	}
	this.show = function() {
		aJA.show(), this.resize()
	}, this.qt = function() {
		aJA.qt()
	}, this.resize = function() {
		aJA.resize(), aLm.resize()
	}, this.a0N = function(fA) {
		2 === fA && aJA.t1[0].ps()
	}, aLn = [new q(L(250), function() {
		rs(1)
	}, 0, 0, 1), new q(L(251), function() {
		rs(2)
	}, 0, 0, 1), new q(L(252), function() {
		rs(0)
	}, 0, 0, 1), new q(L(253), function() {
		rs(3)
	}, 0, 0, 1)], sv = [new q("⬅️ " + L(22), function() {
		n.zc()
	})], aJA = new su(L(254), sv), aLm = new q9(aLn, aJA.t0)
}

function aAA(title, pM, aLo) {
	var aJA, aKy;
	this.show = function() {
		aJA.show(), this.resize()
	}, this.qt = function() {
		aJA.qt()
	}, this.resize = function() {
		aJA.resize(), aKy.resize()
	}, this.a0N = function(fA) {
		2 === fA && aJA.t1[0].ps()
	}, aLo = aLo || [new q("⬅️ " + L(22), function() {
		n.zc()
	}, b8.nO)], aJA = new su(title, aLo), aKy = new r5(aJA.t0, pM), b7.pZ.textAlign(aJA.t0.style, 1)
}

function aLF(data) {
	var aJA, aLp, fA, rT;

	function aLq(hl) {
		var ep = data.data.length;
		if (ep) {
			for (var ru, max = min = parseInt(data.data[0][0]), a7 = 1; a7 < ep; a7++) var aLx = parseInt(data.data[a7][0]),
				min = Math.min(aLx, min),
				max = Math.max(aLx, max);
			ru = hl < 0 ? min + hl : max + 1, n.o(8, n.aCw().aIi, new rd(21, {
				rt: data.rt,
				ru: ru,
				rv: ru + Math.abs(hl)
			}))
		}
	}
	this.show = function() {
			aJA.show(), this.resize()
		}, this.qt = function() {
			aJA.qt()
		}, this.resize = function() {
			aJA.resize(), aLp.resize()
		}, this.a0N = function(fA) {
			2 === fA && aJA.t1[0].ps()
		}, fA = data.data.length ? 0 : 1, fA = [new q("⬅️ " + L(22), function() {
			n.zc()
		}), new q(L(255), function() {
			aLq(-10)
		}, fA, 0, 1), new q(L(256), function() {
			aLq(10)
		}, fA, 0, 1), new q(L(208), function() {
			n.o(11, 10, new aLr({
				rt: data.rt
			}))
		})], rT = [L(257), L(258), L(259), L(260), L(261), L(262), L(263), L(264), L(265)], aJA = new su(rT[data.rt], fA),
		function() {
			var a7, es = {
					rN: []
				},
				rN = es.rN,
				aLt = data.data,
				ep = aLt.length,
				mP = [.1, .001, .001, 1, 100, 1, .01, 1, 100][data.rt],
				a2A = [1, 3, 3, 0, 0, 0, 2, 0, 0][data.rt],
				rT = [
					[L(266), L(267) + " ↗", L(268)],
					[L(266), L(269), L(270), L(271) + " ↗"],
					[L(266), L(267) + " ↗", L(270)],
					[L(266), L(267) + " ↗", L(270)],
					[L(272), L(273), L(274) + " ↗", L(275) + " ↗", L(104)],
					[L(272), L(273), L(276) + " ↗", L(277) + " ↗", L(278)],
					[L(272), L(273), L(279) + " ↗", L(280) + " ↗", L(281)],
					[L(272), L(273), L(276) + " ↗", L(277) + " ↗", L(282)],
					[L(272), L(273), L(274) + " ↗", L(275) + " ↗", L(104)]
				];
			if (es.rT = rT[data.rt], es.rX = [
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
				for (a7 = 0; a7 < ep; a7++) rN.push([{
					fH: aLt[a7][0] + 1 + ".",
					dm: 0
				}, {
					fH: aLt[a7][1],
					dm: 1,
					ra: aLt[a7][4],
					rb: aLt[a7][3]
				}, {
					fH: (mP * aLt[a7][2]).toFixed(a2A),
					dm: 0
				}]);
			else if (1 === data.rt)
				for (a7 = 0; a7 < ep; a7++) rN.push([{
					fH: aLt[a7][0] + 1 + ".",
					dm: 0
				}, {
					fH: aLt[a7][1],
					dm: 0
				}, {
					fH: (mP * aLt[a7][2]).toFixed(a2A),
					dm: 0
				}, {
					fH: aLt[a7][3],
					dm: 1,
					ra: aLt[a7][5],
					rb: aLt[a7][4]
				}]);
			else if (2 === data.rt || 3 === data.rt)
				for (a7 = 0; a7 < ep; a7++) rN.push([{
					fH: aLt[a7][0] + 1 + ".",
					dm: 0
				}, {
					fH: aLt[a7][1],
					dm: 1,
					ra: aLt[a7][4],
					rb: aLt[a7][3]
				}, {
					fH: (mP * aLt[a7][2]).toFixed(a2A),
					dm: 0
				}]);
			else if (4 === data.rt || 5 === data.rt || 6 === data.rt || 7 === data.rt || 8 === data.rt)
				for (a7 = 0; a7 < ep; a7++) {
					var aLw = aLt[a7][5];
					4 === data.rt || 8 === data.rt ? "100%" === (aLw = (aLw % 64 * 100 / (aLw >> 6)).toFixed(0) + "%") && (4 === data.rt ? aLw += " (" + L(283) + ")" : aLw += " (" + L(284) + ")") : 5 === data.rt ? 32768 <= aLw && (aLw = -(aLw -
						32768)) : aLw = (mP * aLw).toFixed(a2A), rN.push([{
						fH: "" + aLt[a7][0],
						dm: 0
					}, {
						fH: "" + aLt[a7][6],
						dm: 0
					}, {
						fH: aLt[a7][7],
						dm: 1,
						ra: aLt[a7][1],
						rb: aLt[a7][2]
					}, {
						fH: aLt[a7][8],
						dm: 1,
						ra: aLt[a7][3],
						rb: aLt[a7][4]
					}, {
						fH: "" + aLw,
						dm: 0
					}])
				}
			aLp = new rM(aJA.t0, es)
		}()
}

function aLr(a22) {
	var aJA, aJB, pU;
	this.show = function() {
		aJA.show(), this.resize()
	}, this.qt = function() {
		aJA.qt()
	}, this.resize = function() {
		aJA.resize(), aJB.resize()
	}, this.a0N = function(fA) {
		2 === fA && aJA.t1[0].ps()
	}, aJA = new su(L(285), [new q("⬅️ " + L(22), function() {
		n.aJ8(10)
	})]), aJB = new pS(aJA.t0, ((pU = []).push(function() {
		var aJX, aJR = new pC,
			aKl = new qP(bg.dr.data[132], 1, function() {
				aJX.button.click()
			}),
			aKm = new qP(bg.dr.data[131], 1, function() {
				aKl.e.focus()
			});
		aJR.pF(L(213)), aJR.pQ(aKm), aKm.e.style.marginBottom = "0.8em", aJR.pF(L(214)), aJR.pQ(aKl);
		return aJX = new q(L(212), function() {
			ru = Math.floor(aKm.e.value), rv = Math.floor(aKl.e.value);
			var rv, ru = {
				a0s: Math.min(ru, rv),
				aIJ: Math.max(ru, rv)
			};
			n.o(8, n.aB5(10).aIi, new rd(21, {
				rt: a22.rt,
				ru: ru.a0s,
				rv: ru.aIJ
			}))
		}, 0, 0, 1), aJR.pQ(new r6([aJX.button])), aJR
	}()), pU.push(function() {
		var aJX, aJR = new pC,
			aKl = new qP(bg.dr.data[134], 1, function() {
				aJX.button.click()
			}),
			aKm = new qP(bg.dr.data[133], 0, function() {
				aKl.e.focus()
			});
		return aJR.pF(1 === a22.rt ? L(286) : L(287)), aJR.pQ(aKm), aKm.e.style.marginBottom = "0.8em", aJR.pF(L(288)), aJR.pQ(aKl), aJX = new q(L(212), function() {
			var aL7 = aKm.e.value.slice(0, 20),
				aL8 = Math.abs(Math.floor(aKl.e.value));
			n.o(8, n.aB5(10).aIi, new rd(22, {
				rt: a22.rt,
				aL7: aL7,
				aL8: aL8
			}))
		}, 0, 0, 1), aJR.pQ(new r6([aJX.button])), aJR
	}()), pU.push(function() {
		var aJX, aJR = new pC,
			aKl = new qP(bg.dr.data[152], 1, function() {
				aJX.button.click()
			}),
			aKm = new qP(bg.dr.data[151], 0, function() {
				aKl.e.focus()
			});
		return aJR.pF(L(289)), aJR.pQ(aKm), aKm.e.style.marginBottom = "0.8em", aJR.pF(L(288)), aJR.pQ(aKl), aJX = new q(L(212), function() {
			var aL7 = aKm.e.value.slice(0, 5),
				aL8 = Math.abs(Math.floor(aKl.e.value));
			n.o(8, n.aB5(10).aIi, new rd(28, {
				rt: a22.rt,
				aL7: aL7,
				aL8: aL8
			}))
		}, 0, 0, 1), aJR.pQ(new r6([aJX.button])), aJR
	}()), pU))
}

function aJ7() {
	var aM1, s4, aM4, s3, s6, aM2 = [new Array(4), [], new Array(2), new Array(2)],
		aM3 = new Array(4),
		aM5 = [L(46), L(290), L(291), L(292)];

	function aM9() {
		var a4y = aM1.sH.qO.e.value.slice(0, 127);
		return a4y.length < 1 || (aM1.sH.qO.e.value = "", ax.aBS.aBT(3, a4y)), 1
	}

	function aM8(aMB) {
		bl.s.qc[3] = 1 - bl.s.qc[3], aMA(3, 1, bl.s.qc[3]), aMB && ax.aBS.aBT(4)
	}

	function aM6(f8, f9) {
		bl.s.qc[f8] !== f9 && (0 === f8 && bl.s.qc[3] && aM8(0), aMA(f8, bl.s.qc[f8], 0), aMA(f8, f9, 1), bl.s.qc[f8] = f9, 0 === f8 ? (ax.aBS.aBT(2, f9), bl.s.qc[2] ? (aM1.sI.lY(), aM1.sH.qZ(1)) : aM1.sH.qZ(0), n.aCw().aB8(), n.aCw().aB7()) : 2 ===
			f8 && (0 === f9 ? (ax.aBS.aBT(0), aM1.sH.lY(), aM1.sQ()) : (ax.aBS.aBT(1), aM1.sI.lY(), aM1.sR())))
	}

	function aMA(f8, f9, color) {
		aM1.sK[f8].qA[f9].pv(color ? b8.nA : b8.nn)
	}

	function aMD(aAY) {
		return aAY < 7 ? aAY + 2 + " " + L(299) : 7 === aAY || 10 === aAY ? L(290) + " (Full-Sending: " + L(7 === aAY ? 300 : 301) + ")" : 8 === aAY ? "1v1" : L(302)
	}

	function aME(fH) {
		var a52 = bI.dn(fH, 60),
			fH = fH % 60;
		return (a52 < 10 ? "0" : "") + a52 + ":" + (fH < 10 ? "0" : "") + fH
	}
	this.aB6 = function() {
		aM1.sI.lY()
	}, this.aB8 = function() {
		var aMC = bl.s.qc[0],
			aMC = bl.s.qe[aMC];
		bP.a3(aMC.eV, aMC.mapSeed), s4.qA[0].button.textContent = L(232) + ": " + bP.ui.uj[aMC.eV].name, s4.qA[1].button.textContent = L(234, 0, "Mode") + ": " + aMD(aMC.aAY), s4.qA[2].button.textContent = L(296) + ": " + bP.ui.uj[aMC.aBU].name,
			s4.qA[3].button.textContent = L(297, 0, "Next Mode") + ": " + aMD(aMC.aBV), s4.qA[4].button.textContent = L(298) + ": " + aME(aMC.aBA), s4.qA[5].button.textContent = "MP: " + bl.s.aAy[0], s4.qA[6].button.textContent = "SP: " + bl.s
			.aAy[1], s4.resize()
	}, this.aB7 = function() {
		var aMC = bl.s.qc[0],
			qd = bl.s.qe[aMC];
		aM1.sO(qd.sP);
		for (var a7 = 0; a7 < bl.sb.sc.length; a7++) aM2[0][a7].qY.textContent = "" + bl.sb.sc[a7].length;
		var sb = bl.sb.sc[aMC],
			aMF = sb.length,
			aMG = bl.sb.sd[aMC];
		aM2[2][1].qY.textContent = "" + aMF, aM2[3][1].qY.textContent = "" + aMG, s4.qA[4].button.textContent = L(298) + ": " + aME(qd.aBA);
		for (a7 = 0; a7 < 4; a7++) {
			qd = bl.s.qe[a7];
			aM3[a7] ? 0 === qd.sP && (aM3[a7].qY.textContent = bP.ui.uj[qd.eV].name) : aM3[a7] = new qX(bP.ui.uj[qd.eV].name, s3.qA[a7].button, 1, 1), b7.z3.startsWith(aM5[a7], "🏆 ") ? qd.aAe || (aM5[a7] = aM5[a7].substring(3), s3.qA[a7].button
				.textContent = aM5[a7], s3.qA[a7].button.appendChild(aM2[0][a7].qY), s3.qA[a7].button.appendChild(aM3[a7].qY)) : qd.aAe && (aM5[a7] = "🏆 " + aM5[a7], s3.qA[a7].button.textContent = aM5[a7], s3.qA[a7].button.appendChild(aM2[0]
				[a7].qY), s3.qA[a7].button.appendChild(aM3[a7].qY))
		}
		var aMH = "",
			aMI = "";
		0 === aMC && (aMH = bl.qj.aAu(sb, 0, aMF), aMI = bl.qj.aAu(sb, 0, aMG)), aM4[0].qY.textContent = aMH, aM4[1].qY.textContent = aMI
	}, this.aBC = function() {
		aM1.sH.lY()
	}, this.show = function() {
		aM1.show(), this.resize()
	}, this.qt = function() {
		aM1.qt(), bl.aAF.qt()
	}, this.resize = function() {
		aM1.resize(1 - bl.s.qc[2])
	}, this.a0N = function(fA) {
		2 === fA && aM1.sK[3].qA[0].ps()
	}, s3 = new r9([new q(aM5[0], function() {
		return aM6(0, 0), 2
	}), new q(aM5[1], function() {
		return aM6(0, 1), 2
	}), new q(aM5[2], function() {
		return aM6(0, 2), 2
	}), new q(aM5[3], function() {
		return aM6(0, 3), 2
	})], b8.nn), s4 = new r9([new q("", 0, 2), new q("", 0, 2), new q("", 0, 2), new q("", 0, 2), new q("", 0, 2), new q("", 0, 2), new q("", 0, 2)], b8.no, 1);
	var aM7 = new r9([new q(L(293), function() {
		return aM6(2, 0), 2
	}), new q(L(100), function() {
		return aM6(2, 1), 2
	})], b8.nn);
	s6 = new r9([new q(L(294), (__fx.customLobby.setLeaveFunction(() => {
			bl.zf(), ax.s.ze(3240), __fx.customLobby.setActive(false), n.r(), n.o(5, 5)
		}),
		function() {
			bl.zf(), ax.s.ze(3240), __fx.customLobby.setActive(false), n.r(), n.o(5, 5)
		})), new q(L(295), function() {
		return aM8(1), 2
	})], b8.nn), aM1 = new s2(s3, s4, aM7, s6, aM9, bl.aAF.aBF);
	for (var a7 = 0; a7 < 4; a7++) aM2[0][a7] = new qX("0", s3.qA[a7].button);
	aM2[2][1] = new qX("0", aM7.qA[1].button), aM2[3][1] = new qX("0", s6.qA[1].button), aM4 = [new qX("", aM7.qA[1].button, 1, 1), new qX("", s6.qA[1].button, 1, 1)], aMA(0, bl.s.qc[0], 1), aMA(2, bl.s.qc[2], 1)
}

function aIo() {
	var aJA, aJB, pU;
	this.show = function() {
		aJA.show(), this.resize()
	}, this.qt = function() {
		aJA.qt()
	}, this.resize = function() {
		aJA.resize(), aJB.resize()
	}, this.a0N = function(fA) {
		2 === fA && aJA.t1[0].ps()
	}, aJA = new su(L(303), [new q("⬅️ " + L(22), function() {
		n.o(7, n.aB5(7).aIi)
	}), new q(L(166), function() {
		bg.r3.r4(105, bD.rf.uS(aJB.pW[0].pD[0].e.value, 5)), bg.r3.r4(106, bD.rf.uS(aJB.pW[1].pD[0].e.value, 8)), n.o(8, n.aB5(7).aIi, new rd(18))
	})]), aJB = new pS(aJA.t0, ((pU = []).push(function() {
		var aJR = new pC;
		return aJR.pF(L(147)), aJR.pQ(new qP({
			value: "",
			e2: -1
		})), aJR
	}()), pU.push(function() {
		var aJR = new pC,
			aJa = (aJR.pF(L(149)), new qP({
				value: "",
				e2: -1
			}));
		return aJa.e.type = "password", aJR.pQ(aJa), aJR.pQ(new r6([new q(L(150), function(e) {
			return e.textContent === L(150) ? (e.textContent = L(151), aJa.e.type = "text") : (e.textContent = L(150), aJa.e.type = "password"), !0
		}).button])), aJR
	}()), pU))
}

function aIv() {
	var aJA, aLm, aLn, sv;

	function rs(a7) {
		n.o(8, n.rc, new rd(21, {
			rt: a7,
			ru: 0,
			rv: 10
		}))
	}
	this.show = function() {
		aJA.show(), this.resize()
	}, this.qt = function() {
		aJA.qt()
	}, this.resize = function() {
		aJA.resize(), aLm.resize()
	}, this.a0N = function(fA) {
		2 === fA && aJA.t1[0].ps()
	}, aLn = [new q(L(262), function() {
		rs(5)
	}, 0, 0, 1), new q(L(263), function() {
		rs(6)
	}, 0, 0, 1), new q(L(264), function() {
		rs(7)
	}, 0, 0, 1), new q(L(265), function() {
		rs(8)
	}, 0, 0, 1)], sv = [new q("⬅️ " + L(22), function() {
		n.zc()
	})], aJA = new su(L(304), sv), aLm = new q9(aLn, aJA.t0)
}

function aIe() {
	this.dr = {}, this.rw = ["", "", ""], this.aIt = null, this.aIq = null, this.rK = 0, this.aEH = [0], this.t = function() {
			n.o(5, 5)
		}, this.aLf = function() {
			n.r(), aV.aC5(0), aV.dW()
		},
		__fx.customLobby.setJoinFunction(() => {
			n.r();
			aV.aC5(0);
			aV.dW();
		}), this.a9r = function() {
			n.o(0 === aW.zS() ? 5 : 0)
		}, this.aKk = function() {
			if (1 === bg.dr.data[130].value) n.o(8, n.aCw().aIi, new rd(24, {
				aKJ: bg.dr.data[125].value,
				ru: bg.dr.data[128].value,
				rv: bg.dr.data[129].value
			}));
			else {
				for (var g = (g = bg.dr.data[126].value.split(",")).slice(0, 10), a7 = 0; a7 < g.length; a7++) g[a7] = g[a7].trim().slice(0, 7).toUpperCase();
				1 === g.length && 0 === g[0].length && (g = []), n.o(8, n.aCw().aIi, new rd(23, {
					aKJ: bg.dr.data[125].value,
					yz: g
				}))
			}
		}, this.aLg = function(aIi, target) {
			n.o(4, aIi, new p("Data Usage Information",
				"Do you want your username and other data to be remembered for the next session?<br>The app might not function correctly if you decline data usage.<br>Please read our privacy policy for more information: <a href='" + bH.aMK +
				"' target='_blank'>" + bH.aMK + "</a>", !1, [new q("⬅️ " + L(22), function() {
					n.o(aIi)
				}), new q("✅ Accept", function() {
					bg.r3.r4(140, 1), 0 === target ? n.o(2, aIi) : n.o(8, aIi, new rd(target))
				})]))
		}, this.aML = function() {
			for (var a7 = 0; a7 < 3; a7++) this.rw[a7] = bD.uJ.uN(bE.oa(5));
			this.rw[1] = "[" + this.rw[1] + "]", 5 === n.rc && n.aCw().aCx.r4(this.rw)
		}
}

function aIy() {
	var aJr, aJs, aMM, pU;

	function aJu() {
		b3.zf(), n.aJ9()[19] = null, n.zc()
	}

	function aMT() {
		aMW(), aMU()
	}

	function aMW() {
		aMM.pE.lastChild && aMM.pE.removeChild(aMM.pE.lastChild)
	}

	function aMU() {
		var aMX = bP.a32(a9.data);
		a9.data.canvas = bP.aGl(aMX, a9.data.mapSeed).us, aMV()
	}

	function aMV() {
		var a17 = a9.data.canvas;
		a17.style.width = "100%", aMM.pE.appendChild(a17)
	}
	this.aE1 = function(a17) {
		a9.data.canvas && aMW(), a9.data.canvas = a17, aMV()
	}, this.show = function() {
		aJr.show(), this.resize()
	}, this.qt = function() {
		aJr.qt()
	}, this.resize = function() {
		aJr.resize(), aJs.resize()
	}, this.a0N = function(fA) {
		2 === fA && aJr.t1[0].ps()
	}, aJr = new su(L(232), [new q("⬅️ " + L(22), aJu)]), 2 === a9.data.mapType && b3.dW(), aJs = new pS(aJr.t0, (function(pU) {
		var aJR = new pC;
		aJR.pF(L(200)), aJR.pN(new sp({
			st: [L(305), L(306), L(307)],
			value: a9.data.mapType
		}, function(e2) {
			2 === (a9.data.mapType = e2) ? (b3.dW(), a9.data.canvas = null) : (a9.data.passableWater = a9.data.passableMountains = 1, b3.zf()), n.o(20)
		})), 2 <= a9.data.mapType && (aJR.pQ(new rG), aJR.pQ(new r0({
			value: a9.data.passableWater
		}, L(308), function(value) {
			a9.data.passableWater = value
		})), aJR.pQ(new r0({
			value: a9.data.passableMountains
		}, L(309), function(value) {
			a9.data.passableMountains = value
		})));
		pU.push(aJR)
	}(pU = []), function(pU) {
		if (0 === a9.data.mapType) {
			for (var aJR = new pC, st = (aJR.pF(L(232)), []), a7 = 0; a7 < bP.ui.aHf.length; a7++) st.push(bP.ui.uj[bP.ui.aHf[a7]].name);
			aJR.pN(new sp({
				st: st,
				value: a9.data.mapProceduralIndex
			}, function(e2) {
				a9.data.mapProceduralIndex = e2, aMT()
			})), pU.push(aJR)
		}
	}(pU), function(pU) {
		if (1 === a9.data.mapType) {
			for (var aJR = new pC, st = (aJR.pF(L(232)), []), a7 = 0; a7 < bP.ui.aHg.length; a7++) st.push(bP.ui.uj[bP.ui.aHg[a7]].name);
			aJR.pN(new sp({
				st: st,
				value: a9.data.mapRealisticIndex
			}, function(e2) {
				a9.data.mapRealisticIndex = e2, aMT()
			})), pU.push(aJR)
		}
	}(pU), function(pU) {
		var aJR;
		2 === a9.data.mapType && ((aJR = new pC).pF(L(232)), aJR.pQ(new r6([new q(L(310), function() {
			return b3.aDu(), !0
		}).button])), pU.push(aJR))
	}(pU), function(pU) {
		(aMM = new pC).pF(L(311)), 2 !== a9.data.mapType ? aMU() : a9.data.canvas && aMV();
		pU.push(aMM)
	}(pU), function(pU) {
		var aJR, qO, aJX;
		0 === a9.data.mapType && ((aJR = new pC).pF("Seed"), qO = new qP({
			e2: -1,
			value: a9.data.mapSeed
		}, 1, 0, function(e) {
			e = Math.abs(Math.floor(e.target.value)) % 16384;
			a9.data.mapSeed !== e && (a9.data.mapSeed = e, aMT())
		}), aJX = new q(L(225), function(e) {
			var aGg = Math.floor(16384 * Math.random());
			if (a9.data.mapSeed !== aGg) return qO.e.value = a9.data.mapSeed = aGg, aMT(), !0
		}), aJR.pQ(qO), aJR.pQ(new r6([aJX.button])), pU.push(aJR))
	}(pU), function(pU) {
		var aJR, qO;
		2 === a9.data.mapType && ((aJR = new pC).pF(L(312)), qO = new qP({
			e2: -1,
			value: a9.data.mapName
		}, 0, 0, function(e) {
			a9.data.mapName = e.target.value = e.target.value.slice(0, 20)
		}), aJR.pQ(qO), pU.push(aJR))
	}(pU), pU))
}

function p(title, pM, aMY, aLo) {
	var aJA, aKy;
	this.show = function() {
		aJA.show(), this.resize()
	}, this.qt = function() {
		aJA.qt()
	}, this.resize = function() {
		aJA.resize(), aKy.resize()
	}, this.a0N = function(fA) {
		2 === fA && aJA.t1[0].ps()
	}, aLo = aLo || [new q("⬅️ " + L(22), function() {
		n.zc()
	})], aJA = new su(title, aLo), aKy = new r5(aJA.t0, pM), aMY && b7.pZ.textAlign(aJA.t0.style, 1)
}

function aJ1() {
	var aJr, aJs, aJt, pU;

	function aJu() {
		aJw(), 2 === a9.data.playerNamesType && 1 === b7.pj.a0o(a9.data.playerNamesData).length && (a9.data.playerNamesType = 0), 2 !== a9.data.playerNamesType && (a9.data.playerNamesData = null), n.aJ9()[19] = null, n.zc()
	}

	function aJw() {
		2 === a9.data.playerNamesType && b7.pj.a12(aJt.tN(), a9.data.playerNamesData, 20)
	}
	this.show = function() {
		aJr.show(), this.resize()
	}, this.qt = function() {
		aJr.qt()
	}, this.resize = function() {
		aJr.resize(), aJs.resize()
	}, this.a0N = function(fA) {
		2 === fA && aJr.t1[0].ps()
	}, aJr = new su(L(236), [new q("⬅️ " + L(22), aJu)]), aJs = new pS(aJr.t0, (function(pU) {
		var aJR = new pC;
		aJR.pF(L(200)), aJR.pN(new sp({
			st: [L(237), L(238), L(203)],
			value: a9.data.playerNamesType
		}, function(e2) {
			aJw(), a9.data.playerNamesType = e2, n.o(23)
		})), aJR.pQ(new rG), aJR.pQ(new r0({
			value: a9.data.selectableName
		}, L(313), function(value) {
			a9.data.selectableName = value
		})), pU.push(aJR)
	}(pU = []), function(pU) {
		var aJR;
		2 === a9.data.playerNamesType && ((aJR = new pC).pF("Data"), aJt = new tF(0, 1, 0, 1), a9.data.playerNamesData && a9.data.playerNamesData.length === a9.em || (a9.data.playerNamesData = new Array(a9.em), a9.data.playerNamesData
			.fill("")), aJt.tM(b7.z3.a2N(a9.data.playerNamesData, 1, '"')), aJR.pQ(aJt), pU.push(aJR))
	}(pU), pU))
}

function aIm() {
	var aJr, tK;

	function aMZ() {
		n.r();
		var pG = b6.aMd(tK.tN());
		(a9.yF && 0 < pG.length && pG === b6.op.a2t || b6.aER.ud(pG)) && b6.aMe()
	}
	this.show = function(aMa) {
		this.aMb(aMa), aJr.show(), this.resize()
	}, this.aMb = function(aMa) {
		0 === a9.yF ? aMa ? tK.tM(aMa) : b6.op.a2t.length && tK.tM(b6.op.a2t) : (a9.gz || (b6.op.a2t = b6.a2u.xj()), tK.tM(b6.aMc(b6.op.a2t)))
	}, this.qt = function() {
		aJr.qt()
	}, this.resize = function() {
		aJr.resize(), tK.resize()
	}, this.a0N = function(fA) {
		2 === fA ? aJr.t1[0].ps() : aMZ()
	}, aJr = new su(L(314), [new q("⬅️ " + L(22), function() {
		n.aJ8(1)
	}), new q(L(315), function() {
		tK.tO()
	}), new q(L(316), function() {
		tK.tP()
	}), new q(L(317), function() {
		tK.clear()
	}), new q(L(318), function() {
		aMZ()
	})]), tK = new tF(L(319)), aJr.t0.appendChild(tK.e)
}

function aIl() {
	var aJA, aJB, pU, a9n, aJR;

	function aMf() {
		var eO;
		a9n !== bg.dr.data[12].value ? (b4.dW(), b4.a9m(), eO = bc.eO, n.o(4, 1, new p(L(322), L(323), !1, [new q("⬅️ " + L(22), function() {
			n.o(1)
		}), new q("🔄 Reload", function() {
			bc.eO < eO + 1500 || u.v.w()
		}, b8.n8)]))) : n.o(1)
	}
	this.show = function() {
			a9n = bg.dr.data[12].value, aJA.show(), this.resize()
		}, this.qt = function() {
			aJA.qt()
		}, this.resize = function() {
			aJA.resize(), aJB.resize()
		}, this.a0N = function(fA) {
			2 === fA && aJA.t1[0].ps()
		}, aJA = new su(L(320), [new q("⬅️ " + L(22), aMf), new q(L(321), function() {
			n.r(), bg.r3.u0(), n.o(2)
		})]), pU = [], (aJR = new pC).pF(L(324)), aJR.pH(L(325)), pU.push(aJR),
		function(pU) {
			var aJR = new pC,
				g = (aJR.pF(L(343)), b4.data.a9s());
			aJR.pN(new sp({
				st: g,
				value: b4.data.a9v(g)
			}, function(e2) {
				return bg.r3.r4(12, g[e2].split(":")[0]), !0
			})), pU.push(aJR)
		}(pU),
		function(pU) {
			var aJR = new pC,
				aMi = (aJR.pF(L(341)), []);
			aJR.pQ(new r6([new q(L(342), function(e) {
				bU.aMj();
				for (var a7 = 0; a7 < aMi.length; a7++) aMi[a7].e.value = bU.aMk[a7];
				return b7.pZ.a1b(e), !0
			}).button]));
			for (var a7 = 0; a7 < bU.aMl.length; a7++) {
				aJR.pH(bU.aMl[a7]);
				for (var f8 = 0; f8 < 2; f8++) {
					var e2 = 2 * a7 + f8,
						qO = new qP({
							value: bU.aMk[e2],
							e2: -1
						});
					qO.e.aMm = e2, aMi.push(qO), qO.e.addEventListener("keydown", function(e) {
						e.preventDefault();
						var code = e.code;
						e.target.value = code, bU.aMn(e.target.aMm, code)
					}), f8 && (qO.e.style.marginLeft = "4%"), qO.e.style.width = "48%", aJR.pQ(qO)
				}
			}
			pU.push(aJR)
		}(pU), (aJR = new pC).pF(L(326)), bg.dr.data[1].st = [L(327), L(328), L(329), L(330)], aJR.pN(new sp(bg.dr.data[1])), pU.push(aJR), (aJR = new pC).pF(L(331)), bg.dr.data[9].st = [L(328), L(332), L(333)], aJR.pN(new sp(bg.dr.data[9])), pU
		.push(aJR), (aJR = new pC).pF(L(334)), bg.dr.data[11].st = [L(335), L(9), L(336)], aJR.pN(new sp(bg.dr.data[11])), pU.push(aJR), (aJR = new pC).pF(L(337)), aJR.pQ(new r0(bg.dr.data[2])), pU.push(aJR), (aJR = new pC).pF(L(338)), aJR.pQ(new r0(
			bg.dr.data[7])), pU.push(aJR), (aJR = new pC).pF(L(339)), aJR.pQ(new r0(bg.dr.data[8])), pU.push(aJR), (aJR = new pC).pF(L(340)), aJR.pQ(new qP(bg.dr.data[5])), pU.push(aJR), aJB = new pS(aJA.t0, pU)
}

function aJ2() {
	var aJr, aJs, aJt, pU;

	function aJu() {
		aJw(), 2 !== a9.data.spawningType || b7.pj.a0o(a9.data.spawningData) || (a9.data.spawningType = 0), 2 !== a9.data.spawningType && (a9.data.spawningData = null), n.aJ9()[19] = null, n.zc()
	}

	function aJw() {
		2 === a9.data.spawningType && b7.pj.a10(aJt.tN(), a9.data.spawningData, bP.aE3 - 1)
	}
	this.show = function() {
		aJr.show(), this.resize()
	}, this.qt = function() {
		aJr.qt()
	}, this.resize = function() {
		aJr.resize(), aJs.resize()
	}, this.a0N = function(fA) {
		2 === fA && aJr.t1[0].ps()
	}, aJr = new su(L(344), [new q("⬅️ " + L(22), aJu)]), aJs = new pS(aJr.t0, (function(pU) {
		var aJR = new pC,
			st = (aJR.pF(L(200)), [L(225), L(235), L(203)]),
			value = a9.data.spawningType;
		0 === a9.data.gameMode && (st.splice(1, 1), 0 < value) && (value = 1);
		aJR.pN(new sp({
			st: st,
			value: value
		}, function(e2) {
			aJw(), a9.data.spawningType = e2, 0 === a9.data.gameMode && 1 === e2 && (a9.data.spawningType = 2), 2 !== a9.data.spawningType || a9.data.spawningData || (a9.data.spawningData = new Uint16Array(2 * a9.em)), n.o(24)
		})), aJR.pQ(new rG), aJR.pQ(new r0({
			value: a9.data.selectableSpawn
		}, L(345), function(value) {
			a9.data.selectableSpawn = value
		})), pU.push(aJR)
	}(pU = []), function(pU) {
		var aJR = new pC;
		aJR.pF("Seed"), aJR.pQ(new qP({
			e2: -1,
			value: a9.data.spawningSeed
		}, 1, 0, function(e) {
			var value = Math.abs(Math.floor(e.target.value)) % 16384;
			e.target.value = a9.data.spawningSeed = value
		})), pU.push(aJR)
	}(pU), function(pU) {
		var aJR;
		2 === a9.data.spawningType && ((aJR = new pC).pF("Data"), (aJt = new tF(0, 1, 0, 1)).tM(b7.z3.a2N(a9.data.spawningData, 2)), aJR.pQ(aJt), pU.push(aJR))
	}(pU), pU))
}

function aIk() {
	var aJA, aLm, aLn, sv;

	function aMo(id) {
		0 !== u.id || bg.dr.data[140].value ? 0 === id ? n.o(8, 1, new rd(16)) : n.o(2) : n.s.aLg(n.rc, 0 === id ? 16 : 0)
	}
	this.show = function() {
		u.v.setState(12), aJA.show(), this.resize(), this.il()
	}, this.qt = function() {
		aJA.qt()
	}, this.resize = function() {
		aJA.resize(), aLm.resize()
	}, this.il = function() {
		8 === aW.zS() && (2 <= ba.aMt ? aLn[2].pt === b8.my && aLn[2].pv(0) : aLn[2].pt !== b8.my && aLn[2].pv(b8.my), !a9.gz && aI.a3u(a9.eZ) ? aLn[1].pt === b8.my && aLn[1].pv(0) : aLn[1].pt !== b8.my && aLn[1].pv(b8.my), !a9.gz && ar.pA(a9
			.eZ) ? aLn[0].pt === b8.my && aLn[0].pv(0) : aLn[0].pt !== b8.my && aLn[0].pv(b8.my))
	}, this.a0N = function(fA) {
		2 === fA && aJA.t1[0].ps()
	}, aLn = [new q(L(346), function() {
		aMo(0)
	}), new q(L(254), function() {
		n.o(16)
	}), new q(L(304), function() {
		n.o(17)
	}), new q(L(347), function() {
		n.s.aKk()
	}, 0, 0, 1), new q(L(314), function() {
		n.o(3, 1)
	}), new q(L(348), function() {
		n.o(18)
	}), new q(L(320), function() {
		aMo(1)
	}), new q(L(349), function() {
		n.o(4, 1, new p(L(349), b7.pZ.a1W([L(358), L(359), "Discord", L(360), L(250), L(361), L(100), L(362), L(363), L(364)], [bH.aA7, bH.zN, bH.aA8, bH.aMu, bH.aMv, bH.z9, bH.aMw, bH.aMx, bH.aMy, bH.aMK]), !1, [new q("⬅️ " + L(22),
			function() {
				n.o(1)
			})]))
	}), new q(L(350), function() {
		n.o(4, 1, new p(L(350), dj + "<br><a href='" + bH.aMu + "' target='_blank'>" + bH.aMu + "</a>" +
			"<br><br><b>" + "FX Client v" + __fx.version + "<br><a href='https://discord.gg/dyxcwdNKwK' target='_blank'>FX Client Discord server</a>" +
			"<br><a href='https://github.com/fxclient/FXclient' target='_blank'>Github repository</a></b>", !0, [new q("⬅️ " + L(22), function() {
				n.o(1)
			})]))
	}), new q(L(351), function() {
		n.o(4, 1, new p(L(351), L(365) + "<br>" + L(366), !1, [new q("⬅️ " + L(22), function() {
			n.o(1)
		}), new q(L(367), function() {
			u.v.zI(), n.o(1)
		})]))
	}), new q(L(352), function() {
		u.v.zJ(), n.o(4, 1, new p(L(368), L(369) + "<a href='" + bH.aMK + "' target='_blank'>" + bH.aMK + "</a>", !1, [new q("⬅️ " + L(22), function() {
			n.o(1)
		})]))
	})], sv = [new q("⬅️ " + L(22), function() {
		n.s.a9r()
	})], 8 === aW.zS() && (aLn.unshift(new q(L(355), function() {
		2 <= ba.aMt && (n.r(), bb.a0Q(), bc.de = !0)
	}, 0, 1)), aLn.unshift(new q(L(356), function() {
		!a9.gz && aI.a3u(a9.eZ) && (b5.hC.oG(), n.r(), aI.h0) && aI.a0Q()
	}, 0, 1)), aLn.unshift(new q(L(357), function() {
		!a9.gz && ar.pA(a9.eZ) && (b5.hC.oI(), n.r(), aI.h0) && aI.a0Q()
	}, 0, 1))), 1 === u.id && 5 <= u.fI && aLn.push(new q(L(353), function() {
		u.v.zK()
	})), aJA = new su(L(354), sv), aLm = new q9(aLn, aJA.t0)
}

function aJ6() {
	var aJr, aJs, aJt, pU;

	function aJu() {
		aJw(), 2 !== a9.data.sResourcesType && (a9.data.sResourcesData = null), n.aJ9()[19] = null, n.zc()
	}

	function aJw() {
		2 === a9.data.sResourcesType && b7.pj.a10(aJt.tN(), a9.data.sResourcesData, 2047)
	}
	this.show = function() {
		aJr.show(), this.resize()
	}, this.qt = function() {
		aJr.qt()
	}, this.resize = function() {
		aJr.resize(), aJs.resize()
	}, this.a0N = function(fA) {
		2 === fA && aJr.t1[0].ps()
	}, aJr = new su(L(241), [new q("⬅️ " + L(22), aJu)]), aJs = new pS(aJr.t0, (function(pU) {
		var aJR = new pC;
		aJR.pF(L(200)), aJR.pN(new sp({
			st: [L(201), L(202), L(203)],
			value: a9.data.sResourcesType
		}, function(e2) {
			aJw(), 2 !== e2 || a9.data.sResourcesData || (a9.data.sResourcesData = new Uint16Array(a9.em)), a9.data.sResourcesType = e2, n.o(28)
		})), pU.push(aJR)
	}(pU = []), function(pU) {
		var aJR;
		1 === a9.data.sResourcesType && ((aJR = new pC).pF("Value"), aJR.pQ(new qP({
			e2: -1,
			value: a9.data.sResourcesValue
		}, 1, 0, function(e) {
			var value = bI.p7(Math.floor(e.target.value), 0, 2047);
			e.target.value = a9.data.sResourcesValue = value
		})), pU.push(aJR))
	}(pU), function(pU) {
		var aJR;
		2 === a9.data.sResourcesType && ((aJR = new pC).pF("Data"), (aJt = new tF(0, 1, 0, 1)).tM(b7.z3.a2N(a9.data.sResourcesData, 2)), aJR.pQ(aJt), pU.push(aJR))
	}(pU), pU))
}

function aJ4() {
	var aJr, aJs, aJt, pU;

	function aJu() {
		aJw(), 2 !== a9.data.tIncomeType && (a9.data.tIncomeData = null), n.aJ9()[19] = null, n.zc()
	}

	function aJw() {
		2 === a9.data.tIncomeType && b7.pj.a10(aJt.tN(), a9.data.tIncomeData, 255)
	}
	this.show = function() {
		aJr.show(), this.resize()
	}, this.qt = function() {
		aJr.qt()
	}, this.resize = function() {
		aJr.resize(), aJs.resize()
	}, this.a0N = function(fA) {
		2 === fA && aJr.t1[0].ps()
	}, aJr = new su(L(239), [new q("⬅️ " + L(22), aJu)]), aJs = new pS(aJr.t0, (function(pU) {
		var aJR = new pC;
		aJR.pF(L(200)), aJR.pN(new sp({
			st: [L(201), L(202), L(203)],
			value: a9.data.tIncomeType
		}, function(e2) {
			aJw(), 2 !== e2 || a9.data.tIncomeData || (a9.data.tIncomeData = new Uint8Array(a9.em), a9.data.tIncomeData.fill(32)), a9.data.tIncomeType = e2, n.o(26)
		})), pU.push(aJR)
	}(pU = []), function(pU) {
		var aJR;
		1 === a9.data.tIncomeType && ((aJR = new pC).pF("Value"), aJR.pQ(new qP({
			e2: -1,
			value: a9.data.tIncomeValue
		}, 1, 0, function(e) {
			var value = bI.p7(Math.floor(e.target.value), 0, 255);
			e.target.value = a9.data.tIncomeValue = value
		})), pU.push(aJR))
	}(pU), function(pU) {
		var aJR;
		2 === a9.data.tIncomeType && ((aJR = new pC).pF("Data"), (aJt = new tF(0, 1, 0, 1)).tM(b7.z3.a2N(a9.data.tIncomeData, 4)), aJR.pQ(aJt), pU.push(aJR))
	}(pU), pU))
}

function aIw() {
	var aJA, aJB, pU;
	this.show = function() {
		aJA.show(), this.resize()
	}, this.qt = function() {
		aJA.qt()
	}, this.resize = function() {
		aJA.resize(), aJB.resize()
	}, this.a0N = function(fA) {
		2 === fA && aJA.t1[0].ps()
	}, aJA = new su(L(348), [new q("⬅️ " + L(22), function() {
		n.zc()
	})]), aJB = new pS(aJA.t0, ((pU = []).push(function() {
		function aJU() {
			aN3.button.textContent = L(144), aN1.e.readOnly = !1, aN2.e.readOnly = !1, aJT.pv(1), aJT.button.style.color = b8.mn
		}
		var aJR = new pC,
			aN0 = (aJR.pF(L(370)), new qP({
				value: bg.dr.data[105].value,
				e2: -1
			})),
			aN1 = (aN0.e.readOnly = !0, aJR.pQ(aN0), aJR.pF(L(277), "0.8em"), new qP(bg.dr.data[148])),
			aN1 = new qP(bg.dr.data[148], 0, void 0, function(e) {
				aJS(bg.dr.data[149].value, e.target.value)
			}),
			aN2 = (aJR.pQ(aN1), aJR.pF(L(281), "0.8em"), new qP(bg.dr.data[149], 1, void 0, function(e) {
				aJS(e.target.value, bg.dr.data[148].value)
			})),
			aN3 = (aJR.pQ(aN2), new q(L(144), function(e) {
				return e.textContent === L(144) ? (e.textContent = L(145), aN1.e.readOnly = !0, aN2.e.readOnly = !0, aJT.pv(0), aJT.button.style.color = b8.nc, bg.r3.r4(149, aN2.e.value), aJS(bg.dr.data[149].value, bg.dr.data[
					148].value)) : aJU(), !0
			})),
			aJT = (aJR.pQ(new r6([aN3.button])), new q(L(14), function(e) {
				return aN1.e.readOnly && ax.s.aC3(0) && (b7.pZ.a1b(e), aJU(), ax.aJV.aJW({
					re: 0,
					ra: bg.dr.data[148].value,
					rb: 0,
					value: bI.p7(Math.floor(100 * bg.dr.data[149].value), 0, 4294967295)
				})), !0
			}, 1)),
			pI = (aJR.pQ(new r6([aJT.button])), aJR.pH()),
			aJS = function(fH, pG) {
				fH = isNaN(fH) ? 0 : Number(fH);
				var fH = Math.max(fH, (bg.dr.data[150].value + 1) / 100),
					aJZ = Math.floor(100 * Math.max(1e-4 * fH, bg.dr.data[150].value / 100)) / 100;
				pI.textContent = L(146, [fH.toFixed(2), bg.dr.data[105].value, aJZ.toFixed(2), pG, (fH - aJZ).toFixed(2)])
			};
		return aJS(bg.dr.data[149].value, bg.dr.data[148].value), aJR
	}()), pU))
}

function br() {
	"function" != typeof Math.log2 && (Math.log2 = function(ew) {
		return Math.log(ew) / Math.log(2)
	}), "function" != typeof Math.log10 && (Math.log10 = function(ew) {
		return Math.log(ew) / Math.log(10)
	}), "function" != typeof Math.sign && (Math.sign = function(ew) {
		return 0 < ew ? 1 : ew < 0 ? -1 : 0
	})
}

function cc() {
	var a76, aN5, aN6, aN7, aN4 = !1;

	function aN8() {
		aN4 = !0, a76 = -1, aN5 = new Array(4);
		for (var a7 = 3; 0 <= a7; a7--) aN5[a7] = !1;
		var vl = Math.floor(1 + .02 * au.min);
		aN6 = new Array(4), (aN7 = new Array(4))[1] = aN7[3] = aN6[0] = aN6[2] = 0, aN7[0] = aN6[3] = -vl, aN6[1] = aN7[2] = vl
	}

	function aN9() {
		if (-1 !== a76)
			if (0 !== a9.yF && aD.mV()) {
				for (var aNA = !1, a7 = 3; 0 <= a7; a7--) aN5[a7] && (aNA = !0, iC += aN6[a7], iE += aN7[a7], ab.zp(aN6[a7], aN7[a7]), aO.a6o());
				aNA ? bc.de = !0 : am.mL()
			} else am.mL()
	}
	this.a0L = function(e2) {
		0 !== a9.yF && aD.mV() && (aN4 || aN8(), aN5[e2] = !0, -1 === a76) && (a76 = setInterval(aN9, 20), aN9())
	}, this.a0O = function(e2) {
		if (0 !== a9.yF && (aN4 || aN8(), aN5[e2] = !1, -1 !== a76)) {
			for (var aNA = !1, a7 = 3; 0 <= a7; a7--) aNA = aNA || aN5[a7];
			aNA || this.mL()
		}
	}, this.mL = function() {
		if (aN4 && -1 !== a76) {
			for (var a7 = 3; 0 <= a7; a7--) aN5[a7] = !1;
			clearInterval(a76), a76 = -1
		}
	}
}

function cd() {
	this.s = new aNB, this.lT = new aNC, this.nw = new aND, this.aBS = new aNE, this.a9o = new aNF, this.aJV = new aNG, this.oZ = new aNH, this.aL4 = new aNI, this.a4e = new aNJ, this.aNK = new aNL, this.aNM = new aNN, this.aNO = new aNP, this.aNQ =
		new aNR, this.dW = function() {
			this.s.dW()
		}
}

function aNB() {
	var aNS, aNU;
	this.aCg = 5, this.aCa = this.aCg - 1, this.aC8 = this.aCg + this.aCa, this.aC7 = [0, 1, 5, 2, 6, 3, 7, 4, 8], this.aNT = null;

	function eF(a7) {
		return aNU[a7].aN4 && aNS[a7].eF()
	}

	function aNc(zP) {
		aNU[zP].eO = bc.eO, aNU[zP].aNW = !1
	}
	this.zY = 0, this.zX = 0, this.dW = function() {
		this.aNT = new Array(this.aCg);
		this.aNT[0] = "territorial.io";
		var a7, aGg = av.aH1(0);
		for (av.a2j(0), a7 = 1; a7 < this.aCg; a7++) this.aNT[a7] = aG.xp() + ".territorial.io";
		for (av.a2j(aGg), aNS = new Array(this.aC8), aNU = new Array(this.aC8), a7 = this.aC8 - 1; 0 <= a7; a7--) aNU[a7] = {
			aN4: !1,
			eO: 0,
			aNW: !1
		};
		this.aC9(0, 0)
	}, this.aNX = function(a7) {
		return aNS[a7]
	}, this.aNY = function() {
		return this.zX < this.aCg ? this.zX : this.zX - this.aCa
	}, this.il = function() {
		for (var a7 = this.aC8 - 1; 0 <= a7; a7--) this.aC3(a7) && bc.eO > aNU[a7].eO + 15e3 && ax.nw.aNZ(a7, aNU[a7].aNW);
		!this.aC3(0) && bc.eO > aNU[0].eO + 8e3 && (aNU[0].eO = bc.eO, this.aC9(0, 0))
	}, this.aC9 = function(zP, aIi) {
		if (aNU[zP].aN4) {
			if (aNS[zP].eF()) return aNS[zP].aNb(aIi), aNS[zP].aC3();
			aNS[zP].qt()
		}
		return this.aNa(zP, aIi), !1
	}, this.aNa = function(zP, aIi) {
		aNU[zP].aN4 = !0, aNc(zP), aNS[zP] = new aNd, aNS[zP].dW(zP, aIi)
	}, this.aNb = function(zP, aIi) {
		eF(zP) && aNS[zP].aNb(aIi)
	}, this.aNe = function(zP, aIi) {
		ax.a9o.aNf(zP)
	}, this.aC3 = function(a7) {
		return aNU[a7].aN4 && aNS[a7].aC3()
	}, this.send = function(zP, a8) {
		aNc(zP), aNS[zP].send(a8)
	}, __fx.customLobby.setSendFunction(this.send), this.a06 = function(zP) {
		8 === aW.zS() && (aNU[zP].aNW = !0, ax.lT.aNg = !0)
	}, this.close = function(zP, aNh) {
		eF(zP) && aNS[zP].close(aNh)
	}, this.aNi = function(zP, aNh) {
		l.zd(aNh), eF(zP) && aNS[zP].close(aNh)
	}, this.ze = function(aNh) {
		for (var a7 = this.aC8 - 1; 0 <= a7; a7--) this.close(a7, aNh)
	}, this.aNj = function(zP, aNh) {
		for (var a7 = this.aC8 - 1; 0 <= a7; a7--) a7 !== zP && this.close(a7, aNh)
	}, this.a2v = function() {
		this.close(this.zY, 3246)
	}, this.aNk = function(zP, e) {
		aNS[zP].qt(), l.zO(zP, e.code)
	}
}

function aNC() {
	this.aNg = !1, this.il = function() {
		bc.jr() % 250 != 249 || a9.gz || (ax.a9o.aNl(+(this.aNg && ac.ll[a9.eZ]), ah.jv + bK.s.on), this.aNg = !1)
	}
}

function aNJ() {
	function aOB(aOC) {
		var es = a9.data,
			aOC = (es.selectedPlayer = bE.oa(aOC), es.spawningSeed = bE.oa(14), bE.oa(4)),
			aOC = (aOC < 7 ? (es.gameMode = 1, es.numberTeams = aOC + 2) : 9 === aOC ? (es.gameMode = es.isZombieMode = 1, es.numberTeams = 2) : (es.gameMode = 0, es.battleRoyaleMode = 7 === aOC ? 0 : 10 === aOC ? 1 : 2), es.isContest = bE.oa(1), bE
				.oa(6));
		return es.mapType = bP.aAf(aOC) ? 0 : 1, bP.aAg(es, aOC), es.mapSeed = bE.oa(14), aOC
	}
	this.aNn = function(zP, a8) {
		bE.dW(a8), 0 === bE.size ? ax.s.aNi(zP, 3205) : __fx.customLobby.isCustomMessage(a8) || ((0 === bE.oa(1) ? function(zP) {
			var aNr = bE.oa(6);
			0 === aNr ? function(zP) {
					if (0 === zP && 8 !== aW.zS()) {
						n.s.aML();
						for (var aO3 = bE.oa(12), aO4 = bE.oa(6), g = new Array(aO3), a7 = 0; a7 < aO3; a7++) g[a7] = bE.oa(aO4);
						aP.a7D(g)
					}
				}(zP) : 2 === aNr ? ax.aNK.aNt(zP) : 3 === aNr || 4 === aNr ? at.dW() : 9 === aNr ? ax.aNM.aNu(zP) : 10 === aNr ? ax.aNO.aNv() : 11 === aNr ? ax.aNM.aNw() : 12 === aNr ? ax.aNO.aNx() : 13 === aNr ? ax.aNQ.aNy() :
				14 === aNr ? ax.aNQ.aNz() : 15 === aNr ? ax.aNM.aO0() : 16 === aNr ? ax.aNK.aO1(zP) : 17 === aNr && ax.aNK.aO2(zP)
		} : function(zP) {
			if (8 !== aW.zS() && !at.aCh()) return;
			if (zP !== ax.s.zY) ax.s.aNi(zP, 3244);
			else if (0 === bE.oa(1)) bc.yO.aOD(bE.a8);
			else {
				var a7, zP = bE.oa(2);
				if (0 === zP) {
					var oA, nw = bE.oa(9);
					0 !== ac.ll[nw] && 0 !== ac.ll[a9.eZ] && (oA = bE.oa(10), aJ.o9(nw, a9.eZ, oA), ab.p8(nw, 1, oA))
				} else if (1 === zP) ! function() {
					var nw = bE.oa(9);
					0 !== ac.ll[nw] && 0 !== ac.ll[a9.eZ] && b2.aGQ(0, [nw], !0) && aJ.oS(nw, 1)
				}();
				else if (2 === zP) ! function() {
					var nw = bE.oa(9),
						target = bE.oa(9);
					0 !== ac.ll[nw] && 0 !== ac.ll[target] && 0 !== ac.ll[a9.eZ] && b2.aGQ(1, [nw], !0) && (ab.p8(nw, 3, 96), ab.p8(target, 4, 96), aJ.a4l(nw, target))
				}();
				else if (a5 && !a6) {
					var ep = 540;
					for (bA.a3(17287), bA.a4(1, 0), bA.a4(6, 10), ep = Math.min(b5.nt.oc.length, 540), a7 = 0; a7 < ep; a7++) bA.aOJ(32, b5.nt.oc[a7]);
					ax.s.send(ax.s.zY, bA.a8)
				}
			}
		})(zP), bc.aNq())
	}, this.aO5 = function(a8) {
		if (bE.dW(a8), bE.e2 = 1, 3 === bE.oa(6)) {
			bE.e2 += 20;
			var es = a9.data = new a2d,
				a8 = aOB(9),
				aAh = es.humanCount = bE.oa(9) + 1;
			es.selectableSpawn = 1 === es.gameMode || aAh < 100, es.colorsData = new Uint32Array(aAh), es.playerNamesData = new Array(aAh);
			for (var a7 = 0; a7 < aAh; a7++) bE.e2++, es.colorsData[a7] = bE.oa(18), es.playerNamesData[a7] = bD.uJ.uN(bE.oa(5));
			aW.aCL(), bP.a3(a8, es.mapSeed), a9.a2h()
		} else ! function() {
			bE.e2 += 20;
			var es = a9.data = new a2d,
				aOA = aOB(1);
			es.humanCount = 2;
			es.selectableSpawn = 1, es.elo = new Uint16Array(2), es.colorsData = new Uint32Array(2), es.playerNamesData = new Array(2);
			for (var a7 = 0; a7 < 2; a7++) bE.e2++, es.colorsData[a7] = bE.oa(18), es.elo[a7] = bE.oa(14), es.playerNamesData[a7] = bD.uJ.uN(bE.oa(5));
			aW.aCL(), bP.a3(aOA, es.mapSeed), a9.a2h()
		}()
	}, this.aO8 = function() {
		bE.e2 = 1;
		var aNr = bE.oa(6),
			aO9 = bE.oa(10);
		return ax.s.zX > ax.s.aCa && (aO9 += ax.s.aCa), ax.s.zX === aO9 ? (ax.s.zY = aO9, !1) : (ax.s.close(ax.s.zX, 3247), ax.s.zY = aO9, at.aAc = bE.oa(10), at.aCT = bE.oa(3 === aNr ? 9 : 1), ax.s.aC9(aO9, 5) && ax.nw.aCb(), !0)
	}
}

function aNP() {
	this.aNv = function() {
		bg.s.tr(), bg.r3.r4(105, bC.rf.rg(bC.rf.rh(5))), bg.r3.r4(106, bC.rf.rg(bC.rf.rh(8))), bg.r3.r4(109, bE.oa(30)), bg.r3.r4(108, bg.dr.data[109].value), bg.r3.r4(111, bg.dr.data[109].value + 1), bg.r3.r4(107, 0), bg.r3.r4(110, "")
	}, this.aNx = function() {
		var aOM, aON, aOO, aOP, aOL;
		bE.size < bA.aOK(29) ? ax.s.aNi(0, 3254) : (aOL = bE.oa(5), aOM = bE.oa(3), aON = bE.oa(3), aOO = bE.oa(3), aOP = bE.oa(8), bE.aOQ(197 + 16 * (aOL + aOM + aON + aOO + aOP) + 32 + 32 + 30 + 128 + 32 + 30 + 10 + 32 + 2 + 10 + 5) ? (aOL = {
			rb: bE.oa(30),
			u4: bE.oa(16),
			u5: bE.oa(30),
			u6: bE.oa(30),
			u7: bE.oa(30),
			u8: bE.aOR(32),
			username: bD.uJ.uN(aOL),
			u9: bD.uJ.uN(aOM),
			uA: bD.uJ.uN(aON),
			uB: bE.aOR(32),
			uC: bE.aOR(32),
			uD: bE.oa(30),
			uE: bE.aOR(32),
			uF: bE.aOR(32),
			uG: bE.aOR(32),
			uH: bE.aOR(32),
			aJd: bE.aOR(32),
			aJe: bE.aOR(30),
			aJY: bE.aOR(10),
			aJo: bE.aOR(32),
			aJp: bD.uJ.uN(aOO),
			aJj: bE.aOR(2),
			aJk: bE.aOR(10),
			aJh: bD.uJ.uN(aOP),
			aJl: bE.aOR(5)
		}, bg.r3.r4(150, aOL.aJY), 8 === n.rc && (25 === n.aCw().aL0 ? (aOL.aJC = !0, n.s.aIt = aOL, n.aCw().aLE(25, !1)) : (aOL.aJC = !1, aOL.ra = bg.dr.data[105].value, n.s.aIq = aOL, bg.r3.u3(aOL), n.aCw().aLE(16, !0)))) : ax.s.aNi(0,
			3267))
	}
}

function aNR() {
	this.aNy = function() {
		var a7;
		if (bE.size < bA.aOK(39)) ax.s.aNi(0, 3259);
		else {
			var rt = bE.oa(6),
				ep = bE.oa(10),
				hT = bE.oa(16);
			if (bE.aOQ(39 + 16 * hT + ep * (0 === rt ? 111 : 1 === rt ? 101 : 2 === rt || 3 === rt ? 127 : 212))) {
				var data = [];
				if (0 === rt)
					for (a7 = 0; a7 < ep; a7++) data.push([bE.oa(30), bD.uJ.uN(bE.oa(5)), bE.oa(16), bE.oa(30), bE.oa(30)]);
				else if (1 === rt)
					for (a7 = 0; a7 < ep; a7++) data.push([bE.oa(16), bD.uJ.uN(bE.oa(3)), bE.oa(16), bD.uJ.uN(bE.oa(5)), bE.oa(31), bE.oa(30)]);
				else if (2 === rt || 3 === rt)
					for (a7 = 0; a7 < ep; a7++) data.push([bE.oa(30), bD.uJ.uN(bE.oa(5)), bE.aOR(32), bE.oa(30), bE.oa(30)]);
				else
					for (a7 = 0; a7 < ep; a7++) data.push([bE.oa(20), bE.oa(30), bE.oa(30), bE.oa(30), bE.oa(30), bE.aOR(32), bE.oa(30), bD.uJ.uN(bE.oa(5)), bD.uJ.uN(bE.oa(5))]);
				8 === n.rc && n.aCw().aLE(21, !0, {
					rt: rt,
					data: data
				})
			} else ax.s.aNi(0, 3260)
		}
	}, this.aNz = function() {
		if (bE.size < bA.aOK(29)) ax.s.aNi(0, 3265);
		else {
			var aOS = bE.oa(4),
				aOT = bE.oa(7),
				aOU = bE.oa(11);
			if (bE.aOQ(29 + 16 * aOT + 16 * aOU + 11 * aOS)) {
				for (var data = [], a7 = 0; a7 < aOS; a7++) {
					for (var aAx = bD.uJ.uN(bE.oa(3)), aOV = bE.oa(8), aKK = [], f8 = 0; f8 < aOV; f8++) aKK.push(bE.oa(16));
					data.push({
						name: "[" + aAx + "]",
						aKK: aKK
					})
				}
				8 === n.rc && n.aCw().aLE(23, !0, data)
			} else ax.s.aNi(0, 3266)
		}
	}
}

function aNL() {
	this.aNt = function(zP) {
		if (zP !== ax.s.zX) ax.s.close(zP, 3239);
		else if (6 !== aW.zS()) ax.s.close(zP, 3271);
		else {
			bl.dW();
			for (var a7 = 0; a7 < 4; a7++) {
				var qd = bl.s.qe[a7],
					playerCount = (qd.sP = bE.oa(10), qd.eV = bE.oa(6), qd.mapSeed = bE.oa(14), qd.aAY = bE.oa(4), qd.aBU = bE.oa(6), qd.aBV = bE.oa(4), qd.aAe = bE.oa(1), qd.aBA = bE.oa(12), qd.spawningSeed = bE.oa(14), bE.oa(16));
				bl.sb.sd[a7] = bE.oa(16);
				for (var f8 = 0; f8 < playerCount; f8++) bl.sb.aAK(a7, bE.oa(30), bD.uL.ud(5), bE.oa(4), bE.oa(30), bE.oa(7), bE.oa(16), bE.oa(18))
			}
			n.o(29), bl.s.aB0(!0)
		}
	}, this.aO1 = function(zP) {
		if (zP !== ax.s.zX) ax.s.close(zP, 3239);
		else if (bl.zW) {
			bl.s.aAy[0] = bE.oa(20), bl.s.aAy[1] = bE.oa(20);
			for (var aOW = bE.oa(16), f8 = 0; f8 < aOW; f8++) {
				var id = bE.oa(3);
				0 === id ? bl.sb.aAK(0, bE.oa(30), bD.uL.ud(5), 9, 1e6, 127, 0, bE.oa(18)) : 1 === id ? bl.sb.aAV(bE.oa(16), bE.oa(2)) : 2 === id ? bl.sb.aAR(bE.oa(16), bE.oa(2), bE.oa(2)) : 3 === id ? bl.sb.aAU(bE.oa(16), bE.oa(2)) : 4 === id &&
					bl.sb.aAP(bE.oa(16), bE.oa(2), bD.uL.ud(5), bE.oa(4), bE.oa(30), bE.oa(7), bE.oa(16))
			}
			for (var a7 = 0; a7 < 4; a7++) {
				var qd = bl.s.qe[a7];
				if (qd.sP = bE.oa(10), 0 === qd.sP) {
					if (qd.zY = bE.oa(10), qd.aAc = bE.oa(10), bl.aAD.df(a7)) return;
					qd.eV = bE.oa(6), qd.mapSeed = bE.oa(14), qd.aAY = bE.oa(4), qd.aBU = bE.oa(6), qd.aBV = bE.oa(4), qd.aAe = bE.oa(1), qd.aBA = bE.oa(12), qd.spawningSeed = bE.oa(14)
				}
			}
			bl.s.aB2()
		} else ax.s.close(zP, 3251)
	}, this.aO2 = function(zP) {
		if (zP !== ax.s.zX) ax.s.close(zP, 3272);
		else if (bl.zW) {
			for (var qb = bE.oa(4), qd = bl.s.qe[qb], qf = qd.qf, aOX = (qd.qg = bE.oa(20), bE.oa(6)), a7 = 0; a7 < aOX; a7++) {
				var aAs, target, ra = bE.oa(30),
					id = bE.oa(4);
				0 === id ? qf.push({
					id: id,
					ra: ra,
					k: bD.uL.ud(7)
				}) : 15 === id ? (aAs = bE.oa(3), (target = bE.oa(30)) === bl.aAB && bn.aOY(), qf.push({
					id: id,
					ra: ra,
					aAs: aAs,
					target: target,
					value: bE.oa(30)
				})) : (target = bE.oa(30), qf.push({
					id: id,
					ra: ra,
					target: target,
					value: bE.oa(4)
				}))
			}
			bl.s.aBB(qb)
		} else ax.s.close(zP, 3273)
	}
}

function aNN() {
	this.aNu = function(zP) {
		var aOF, q7;
		bE.aOQ(70) ? (aOF = bE.oa(3), q7 = bf.aOZ.il(bE.oa(30), bE.oa(30)), ax.a9o.aOa(zP, q7, aOF), 0 < aOF || (0 === zP && 0 === bg.dr.data[105].value.length ? ax.a9o.aL3(0) : ax.aJV.aOb(zP), 4 === ax.s.aNX(zP).aOc() ? 6 === aW.zS() && ax.aBS
			.aCA(zP) : 5 !== ax.s.aNX(zP).aOc() || 8 !== aW.zS() && 10 !== aW.zS() || ax.nw.aCb())) : ax.s.aNi(zP, 3269)
	}, this.aNw = function() {
		var id = bE.oa(6);
		0 === id ? (aP.a79 || ax.a9o.aL3(1), b4.a9m(), 8 === n.rc && n.aCw().aLD()) : 21 === id ? 8 === n.rc && n.aCw().aLE(17) : 22 === id && (bg.r3.r4(106, bg.dr.data[110].value), bg.r3.r4(110, ""), 8 === n.rc) && n.aCw().aLE(16)
	}, this.aO0 = function() {
		var ep = bE.oa(16),
			aOd = bE.oa(16);
		if (bE.aOQ(55 + 10 * ep + 16 * aOd)) {
			for (var g = [], a7 = 0; a7 < ep; a7++) g.push(bD.uJ.uN(bE.oa(10)));
			b4.a9q(g)
		} else ax.s.aNi(zP, 3270)
	}
}

function aND() {
	this.aNZ = function(zP, aNW) {
		bA.a3(8), bA.a4(1, 0), bA.a4(6, 4), bA.a4(1, aNW ? 1 : 0), ax.s.send(zP, bA.a8)
	}, this.aCb = function() {
		bA.a3(58), bA.a4(1, 0), bA.a4(6, 5), bA.a4(8, ax.s.aNY()), bA.a4(10, at.aAc), bA.a4(9, at.aCT), bA.a4(10, dk), bA.a4(14, h.dl), ax.s.send(ax.s.zY, bA.a8)
	}, this.nx = function(eb) {
		bA.a3(27), bA.a4(1, 1), bA.a4(4, 0), bA.a4(22, eb), ax.s.send(ax.s.zY, bA.a8)
	}, this.ny = function(iB, j3) {
		bA.a3(25), bA.a4(1, 1), bA.a4(4, 1), bA.a4(10, iB), bA.a4(10, j3), ax.s.send(ax.s.zY, bA.a8)
	}, this.o2 = function(iB, o0) {
		bA.a3(24), bA.a4(1, 1), bA.a4(4, 2), bA.a4(10, iB), bA.a4(9, o0), ax.s.send(ax.s.zY, bA.a8)
	}, this.o3 = function(iB, eb) {
		bA.a3(37), bA.a4(1, 1), bA.a4(4, 3), bA.a4(10, iB), bA.a4(22, eb), ax.s.send(ax.s.zY, bA.a8)
	}, this.o6 = function(m9, eb) {
		bA.a3(37), bA.a4(1, 1), bA.a4(4, 4), bA.a4(10, m9), bA.a4(22, eb), ax.s.send(ax.s.zY, bA.a8)
	}, this.o8 = function(j3) {
		bA.a3(15), bA.a4(1, 1), bA.a4(4, 5), bA.a4(10, j3), ax.s.send(ax.s.zY, bA.a8)
	}, this.oC = function(e2) {
		bA.a3(15), bA.a4(1, 1), bA.a4(4, 6), bA.a4(10, e2), ax.s.send(ax.s.zY, bA.a8)
	}, this.oF = function(oE) {
		bA.a3(6), bA.a4(1, 1), bA.a4(4, 7), bA.a4(1, oE), ax.s.send(ax.s.zY, bA.a8)
	}, this.oH = function() {
		bA.a3(5), bA.a4(1, 1), bA.a4(4, 8), ax.s.send(ax.s.zY, bA.a8)
	}, this.oJ = function(iB, eb, j3) {
		bA.a3(47), bA.a4(1, 1), bA.a4(4, 10), bA.a4(10, iB), bA.a4(10, j3), bA.a4(22, eb), ax.s.send(ax.s.zY, bA.a8)
	}, this.oQ = function(aOe, aOf) {
		bA.a3(24), bA.a4(1, 1), bA.a4(4, 15), bA.a4(9, aOf), bA.a4(10, aOe), ax.s.send(ax.s.zY, bA.a8)
	}, this.oT = function(a4e) {
		bA.a3(14), bA.a4(1, 1), bA.a4(4, 14), bA.a4(9, a4e), ax.s.send(ax.s.zY, bA.a8)
	}, this.oX = function(aOg, target) {
		var a7, ep = aOg.length;
		for (bA.a3(14 + 9 * ep), bA.a4(1, 1), bA.a4(4, 13), bA.a4(9, target), a7 = 0; a7 < ep; a7++) bA.a4(9, aOg[a7]);
		ax.s.send(ax.s.zY, bA.a8)
	}
}

function aNG() {
	this.aOh = function() {
		bA.a3(39), bA.a4(1, 0), bA.a4(6, 16), ax.a9o.aOi(), ax.s.send(0, bA.a8)
	}, this.aOb = function(zP) {
		bA.a3(115), bA.a4(1, 0), bA.a4(6, 17), bD.rf.uZ(bg.dr.data[105].value, 5), bD.rf.uZ(bg.dr.data[106].value, 8), bA.a4(30, bg.dr.data[109].value), ax.s.send(zP, bA.a8)
	}, this.aLG = function() {
		bA.a3(55), bA.a4(1, 0), bA.a4(6, 18), bD.rf.uY(bg.dr.data[110].value), ax.s.send(0, bA.a8)
	}, this.aLC = function(a22) {
		var ep = a22.pG.length;
		bA.a3(21 + 16 * ep), bA.a4(1, 0), bA.a4(6, 29), bA.a4(6, a22.re), bA.a4(8, ep), bC.uJ.uY(a22.pG), ax.s.send(0, bA.a8)
	}, this.aJg = function(data) {
		bA.a3(73), bA.a4(1, 0), bA.a4(6, 25), bA.a4(6, data.re), bD.rf.uZ(data.ra, 5), bA.a4(30, data.rb), ax.s.send(0, bA.a8)
	}, this.aJW = function(data) {
		bA.a3(105), bA.a4(1, 0), bA.a4(6, 27), bA.a4(6, data.re), bD.rf.uZ(data.ra, 5), bA.a4(30, data.rb), bA.aOJ(32, data.value), ax.s.send(0, bA.a8)
	}
}

function aNH() {
	this.oY = function() {
		var gN, ep = a9.ju,
			y7 = bO.result.y7,
			aOk = y7.length,
			ys = (bA.a3(40 + 16 * ep + aOk * (33 + 3 * (a9.kE < 7))), bA.a4(1, 1), bA.a4(4, 12), bA.a4(10, aOk), bA.a4(1, +(2 === a9.yC)), bA.a4(24, bO.result.yg), ac.ys);
		for (a7 = 0; a7 < ep; a7++) bA.a4(16, ys[a7]);
		var gd = ac.gd;
		for (a7 = 0; a7 < aOk; a7++) gN = y7[a7], bA.a4(9, gN), bA.a4(24, gd[gN]);
		if (a9.kE < 7)
			for (var en = bd.en, kK = bd.kK, a7 = 0; a7 < aOk; a7++) bA.a4(3, 7 & kK[en[y7[a7]]]);
		ax.s.send(ax.s.zY, bA.a8)
	}
}

function aNI() {
	this.aL5 = function(rt, ru, rv) {
		bA.a3(75), bA.a4(1, 0), bA.a4(6, 21), bA.a4(6, rt), bA.a4(1, +(ru < 0)), bA.a4(1, +(rv < 0)), bA.a4(30, Math.abs(ru)), bA.a4(30, Math.abs(rv)), ax.s.send(0, bA.a8)
	}, this.aL6 = function(rt, aL7, aL8) {
		bA.a3(18 + 16 * aL7.length + 30), bA.a4(1, 0), bA.a4(6, 22), bA.a4(6, rt), ax.a9o.aOl(aL7), bA.a4(30, aL8), ax.s.send(0, bA.a8)
	}, this.aLB = function(rt, aL7, aL8) {
		bA.a3(73), bA.a4(1, 0), bA.a4(6, 28), bA.a4(6, rt), bD.rf.uZ(aL7, 5), bA.a4(30, aL8), ax.s.send(0, bA.a8)
	}, this.aL9 = function(aKJ, yz) {
		for (var ep = yz.length, hT = 0, a7 = 0; a7 < ep; a7++) hT += yz[a7].length;
		for (bA.a3(21 + 3 * ep + 16 * hT), bA.a4(1, 0), bA.a4(6, 23), bA.a4(3, aKJ), bA.a4(4, ep), bA.a4(7, hT), a7 = 0; a7 < ep; a7++) bA.a4(3, yz[a7].length), bC.uJ.uY(yz[a7]);
		ax.s.send(0, bA.a8)
	}, this.aLA = function(aKJ, ru, rv) {
		bA.a3(52), bA.a4(1, 0), bA.a4(6, 24), bA.a4(3, aKJ), bA.a4(1, +(ru < 0)), bA.a4(1, +(rv < 0)), bA.a4(20, Math.abs(ru)), bA.a4(20, Math.abs(rv)), ax.s.send(0, bA.a8)
	}
}

function aNE() {
	this.aCA = function(zP) {
		var username = bg.dr.data[122].value.slice(0, 20),
			username = (bA.a3(22 + 16 * username.length + 18), bA.a4(1, 0), bA.a4(6, 1), bA.a4(10, dk), ax.a9o.aOl(username), b7.color.a1C(bg.s.ty()));
		bA.a4(6, username[0]), bA.a4(6, username[1]), bA.a4(6, username[2]), ax.s.zX = zP, ax.s.send(zP, bA.a8)
	}, this.aBT = function(aOn, a22) {
		bB.dW(), bB.a4(1, 0), bB.a4(6, 2), bB.a4(3, aOn), 2 === aOn ? bB.a4(2, a22) : 3 === aOn ? bC.uL.xj(a22, 7, bB) : 5 === aOn && (bB.a4(3, a22.id), bB.a4(3, a22.value), bB.a4(30, a22.ra)), ax.s.send(ax.s.zX, bB.aOo())
	}
}

function aNF() {
	this.aNf = function(zP) {
		bA.a3(39), bA.a4(1, 0), bA.a4(6, 13), bA.a4(14, h.dl), bA.a4(4, u.id), bA.a4(7, u.fI), bA.a4(1, +a5), bA.a4(1, +a6), bA.a4(5, (new Date).getHours() % 24), ax.s.send(zP, bA.a8)
	}, this.aOa = function(zP, q7, aOF) {
		bA.a3(70), bA.a4(1, 0), bA.a4(6, 14), bA.a4(3, aOF), bA.a4(30, q7[0]), bA.a4(30, q7[1]), ax.s.send(zP, bA.a8)
	}, this.aL3 = function(id) {
		bA.a3(13), bA.a4(1, 0), bA.a4(6, 15), bA.a4(6, id), ax.s.send(0, bA.a8)
	}, this.a9p = function(id, pG) {
		var ep = Math.min(pG.length, 63);
		bA.a3(19 + 16 * ep), bA.a4(1, 0), bA.a4(6, 26), bA.a4(6, id), bA.a4(6, ep), bC.uJ.uY(pG), ax.s.send(0, bA.a8)
	}, this.aOp = function(aO9, pR) {
		bA.a3(7 + 26 * pR.length), bA.a4(1, 0), bA.a4(6, 9);
		for (var a7 = 0; a7 < pR.length; a7++) bA.a4(16, pR[a7][0]), bA.a4(10, pR[a7][1]);
		ax.s.send(aO9, bA.a8)
	}, this.aNl = function(aOq, aOr) {
		bA.a3(20), bA.a4(1, 0), bA.a4(6, 19), bA.a4(1, aOq), bA.a4(12, aOr), ax.s.send(ax.s.zY, bA.a8)
	}, this.aOl = function(username) {
		bA.a4(5, username.length), bC.uJ.uY(username)
	}
}

function aNd() {
	var zP, aIi, aOs, aOt = ["wss://", "/s50/", "/s51/", "/s52/"];

	function aNe() {
		ax.s.aNe(zP, aIi)
	}

	function aOy(e) {
		ax.a4e.aNn(zP, new Uint8Array(e.data))
	}

	function aOz() {}

	function aNk(e) {
		ax.s.aNk(zP, e)
	}
	this.dW = function(e2, aOu) {
		zP = e2, aIi = aOu;
		e2 = aOt[0];
		zP < ax.s.aCg ? e2 += ax.s.aNT[zP] + aOt[1 + di] : e2 += ax.s.aNT[0] + "/i" + (1 + di) + (zP - ax.s.aCa) + "/", (aOs = new WebSocket(__fx.customLobby.isActive() && zP === 1 ? __fx.customLobby.getSocketURL() : e2)).binaryType =
			"arraybuffer", aOs.onopen = aNe, aOs.onmessage = aOy, aOs.onclose = aNk, aOs.onerror = aOz
	}, this.aOw = function() {
		return aOs.readyState === aOs.CONNECTING
	}, this.aC3 = function() {
		return aOs.readyState === aOs.OPEN
	}, this.eF = function() {
		return this.aOw() || this.aC3()
	}, this.aNb = function(aOu) {
		aIi = aOu
	}, this.aOc = function() {
		return aIi
	}, this.send = function(a8) {
		this.aC3() && aOs.send(a8)
	}, this.close = function(aNh) {
		this.eF() && (aOs.close(aNh), this.qt())
	}, this.qt = function() {
		aOs.onopen = null, aOs.onmessage = null, aOs.onclose = null, aOs.onerror = null
	}
}

function dF() {
	var aP0 = !1,
		a4z = 0,
		a1 = 0,
		rk = 0,
		gap = 0,
		canvas = null,
		wW = null,
		a0p = null;

	function aP2() {
		for (var aP8, aP6 = 0, ep = 0, fA = Math.floor(a1 / 2), e1 = Math.floor(rk / 2), aP7 = 1.5 * Math.PI, a7 = a9.va; 0 <= a7; a7--) ep += a0p[a7], 0 === a0p[a7] && aP6++;
		if (aP0 = !1, wW.clearRect(0, 0, a1, a1), wW.fillStyle = b8.mk, wW.fillRect(0, 0, a1, a1), wW.fillStyle = b8.mn, wW.fillRect(0, 0, a1, gap), wW.fillRect(0, 0, gap, a1), wW.fillRect(a1 - gap, 0, gap, a1), wW.fillRect(0, a1 - gap, a1, gap), 0 <
			ep)
			if (aP6 === a9.va) {
				for (a7 = a9.va; 0 <= a7; a7--)
					if (0 < a0p[a7]) {
						! function(a7, fA, e1) {
							wW.fillStyle = bd.aPF[bd.kK[a7]], wW.beginPath(), wW.arc(fA, fA, e1, 0, 2 * Math.PI), wW.fill()
						}(a7, fA, e1);
						break
					}!
				function(fA) {
					var fontSize = fA / 3;
					wW.font = b7.pZ.ri(1, fontSize), wW.fillStyle = b8.mn, wW.fillText("100%", fA, fA + .1 * fontSize)
				}(fA)
			} else {
				for (a7 = 0; a7 <= a9.va; a7++) 0 < a0p[a7] && (! function(a7, fA, e1, aP7, aP8) {
					wW.fillStyle = bd.aPF[bd.kK[a7]], wW.beginPath(), wW.arc(fA, fA, e1, aP7, aP8), wW.lineTo(fA, fA), wW.fill()
				}(a7, fA, e1, aP7, aP8 = aP7 + 2 * Math.PI * a0p[a7] / ep), function(fA, e1, aP7, aP8) {
					var fH = (aP8 - aP7) / (2 * Math.PI),
						fontSize = +e1 * Math.min(fH, .37);
					fontSize < 8 || (aP7 = (aP7 + aP8) / 2, aP8 = Math.floor(100 * fH + .5) + "%", e1 *= .525 - Math.max(.6 * (fH - .7), 0), wW.font = b7.pZ.ri(1, fontSize), wW.fillStyle = b8.mn, wW.fillText(aP8, fA + Math.cos(aP7) * e1, fA +
						Math.cos(aP7 + 1.5 * Math.PI) * e1))
				}(fA, e1, aP7, aP8), 0 !== a7 && aPD(fA, e1, aP7), aP7 = aP8);
				aPD(fA, e1, 1.5 * Math.PI)
			}!
		function(fA, e1) {
			wW.beginPath(), wW.arc(fA, fA, e1, 0, 2 * Math.PI), wW.stroke()
		}(fA, e1)
	}

	function aPD(fA, e1, aPG) {
		wW.beginPath(), wW.moveTo(fA, fA), wW.lineTo(fA + Math.cos(aPG) * e1, fA + Math.cos(aPG + 1.5 * Math.PI) * e1), wW.stroke()
	}
	this.dW = function() {
		if (a9.ix) {
			a4z = 0, a0p = new Uint32Array(a9.va + 1);
			for (var a7 = a9.va; 0 <= a7; a7--) a0p[a7] = 0;
			for (a7 = ah.jv - 1; 0 <= a7; a7--) a0p[bd.en[ah.jx[a7]]] += 1;
			this.resize()
		} else a0p = wW = canvas = null
	}, this.a5m = function() {
		return a1
	}, this.resize = function() {
		a9.ix && (a1 = Math.floor(u.v.sU() && !a9.mG ? .18 * au.min : .13 * au.pb), a1 = (a1 *= 1 + (.5 + .2 * u.v.sU()) * a9.mG) + a1 % 2, rk = Math.floor(7 * a1 / 8), (canvas = canvas || document.createElement("canvas")).width = a1, canvas
			.height = a1, wW = canvas.getContext("2d", {
				alpha: !0
			}), gap = Math.max(1, .015 * a1), wW.lineWidth = gap, wW.strokeStyle = b8.mn, b7.pZ.textAlign(wW, 1), b7.pZ.textBaseline(wW, 1), aP2())
	}, this.yo = function() {
		var dm, l8 = this.l9();
		return bd.kK[l8] || (l8 = function() {
			for (var l8 = -1, a7 = a9.va; 1 <= a7; a7--)(-1 === l8 || a0p[a7] > a0p[l8]) && (l8 = a7);
			return l8
		}(), dm = ac.gd[lC[0]], -1 !== l8 && a0p[l8] > dm) ? a0p[l8] : dm
	}, this.zD = function() {
		return a4z = 31, this.il(), this.l9()
	}, this.l9 = function() {
		for (var l8 = 0, a7 = a9.va; 0 < a7; a7--) a0p[a7] > a0p[l8] && (l8 = a7);
		return l8
	}, this.lA = function(aP4) {
		for (var gI = 0, jw = ah.jx, en = bd.en, ep = ah.jv, fT = bL.fT, a7 = 0; a7 < ep; a7++) {
			var gN = jw[a7];
			en[gN] === aP4 && (fT[gI++] = gN)
		}
		bL.fL[0] = gI
	}, this.il = function() {
		if (a9.ix && 32 <= ++a4z) {
			a4z = 0;
			for (var a7 = a9.va; 0 <= a7; a7--) a0p[a7] = 0;
			for (a7 = ah.jv - 1; 0 <= a7; a7--) a0p[bd.en[ah.jx[a7]]] += ac.gd[ah.jx[a7]];
			aP0 = !0
		}
	}, this.lY = function() {
		a9.ix && aP0 && aP2()
	}, this.t9 = function() {
		a9.ix && (a9.mG ? tA.drawImage(canvas, bZ.gap, bZ.gap) : tA.drawImage(canvas, bZ.gap, a5n + 2 * bZ.gap))
	}
}

function cy() {
	function aPI(key) {
		var aMa;
		return "undefined" == typeof URLSearchParams || (aMa = window.location.search, "string" != typeof(aMa = new URLSearchParams(aMa).get(key))) || aMa.length < 1 ? null : aMa
	}
	this.df = function() {
		if (0 !== u.id) return !1;
		if (! function() {
				var value = aPI("account");
				if (!value && !(value = aPI("a"))) return void bF.clear();
				return bF.clear(), n.o(8, n.rc, new rd(1e3, {
					re: 0,
					ra: value,
					rb: 0
				})), 1
			}()) {
			var value = aPI("replay");
			if (!this.clear()) return !1;
			if (!value) return !1;
			n.o(3, 0, value)
		}
		return !0
	}, this.clear = function() {
		var zM = new URL(window.location.href);
		zM.search = "";
		try {
			return history.replaceState(null, "", zM.toString()), !0
		} catch (e) {
			console.log("error 352: " + e)
		}
		return !1
	}, this.aJq = function(key, value) {
		if (0 === u.id) try {
			var zM = new URL(window.location.href),
				gN = zM.searchParams;
			gN.set(key, value), zM.search = gN.toString(), history.replaceState(null, "", zM.toString())
		} catch (e) {
			console.log("error 358: " + e)
		}
	}
}

function ce() {
	var aPK, g;
	this.dW = function() {
		for (var a7 = (g = new Uint16Array(101)).length - 1; 0 <= a7; a7--) g[a7] = bI.dn(32768 * a7, 100);
		this.a2j(0)
	}, this.value = function(gN) {
		return g[gN]
	}, this.aH1 = function() {
		return bI.dn(aPK - 1, 2)
	}, this.a2j = function(aGg) {
		aPK = 2 * aGg % 32768 + 1
	}, this.random = function() {
		return aPK = 167 * aPK % 32768
	}, this.jC = function(lg) {
		return bI.dn(lg * this.random(), 32768)
	}, this.jm = function(gN) {
		return 0 !== gN && this.random() < this.value(gN)
	}, this.iV = function(f8, f9) {
		return f8 + this.jC(f9 - f8)
	}
}

function cu() {
	this.op = new aPL, this.a2u = new aPM, this.aER = new aPN, this.dW = function() {
		a9.gz || this.op.dW()
	}, this.il = function() {
		a9.gz || (this.op.il(), 3 !== n.rc) || bc.jr() % 15 != 5 && 2 !== a9.yF || n.aCw().aMb()
	}, this.aMe = function() {
		0 === a9.yF && aW.aCL(), a9.a2e.a31(), a9.data.canvas = null, ax.s.close(ax.s.zY, 3257), ax.s.zY = 0, a9.data.isReplay = 1, a9.a2h()
	}, this.aMd = function(pG) {
		var a7 = pG.indexOf("=");
		return 0 <= a7 ? pG.substring(a7 + 1) : pG
	}, this.aMc = function(pG) {
		return "https://territorial.io/?replay=" + pG
	}
}

function aPL() {
	this.aPP = null, this.aPQ = null, this.aPR = null, this.aPS = null, this.aPT = null, this.aPU = null, this.a2t = "";
	var aPV = 0;
	this.dW = function() {
		this.aPP = [], this.aPQ = [], this.aPR = [], this.aPS = [], this.aPT = [0], this.aPU = [0], aPV = 0, this.a2t = ""
	}, this.oq = function(id, fX, fZ, fb) {
		a9.gz || 2 === a9.yF || (0 === this.aPT[aPV] && (this.aPU[aPV] ? (this.aPT.push(1), this.aPU.push(0), aPV++) : this.aPT[aPV] = 1), this.aPP.push(id), this.aPQ.push(fX), this.aPR.push(void 0 === fZ ? 0 : fZ), this.aPS.push(void 0 === fb ?
			0 : fb), this.aPU[aPV]++)
	}, this.il = function() {
		0 === this.aPT[aPV] ? this.aPU[aPV]++ : (this.aPT.push(0), this.aPU.push(0), aPV++)
	}
}

function aPN() {
	var aPW = 0;

	function aPa(pG, id) {
		aPW || (id ? 1 === id ? aJ.a45 = L(372) + ": " + pG : n.o(4, 3, new p(L(373), pG, 1)) : n.o(4, 3, new p("⚠️ " + L(371), pG, 1)))
	}
	this.ud = function(pG, aPX) {
		var pR;
		return aPW = aPX, bD.rf.uV(bD.rf.uT(bD.rf.uR(pG))), aJ.a45 = "", !(! function() {
			if (bE.size < 10) aPa("File Too Small");
			else {
				var aPc = bE.oa(12),
					aOr = (aPc !== h.rVersion && aPa("Incompatible Version " + aPc + " " + h.rVersion, 1), bE.oa(12)),
					aPd = bE.oa(31);
				if (aPd !== bE.size) aPa("Size Error: " + aPd + " " + bE.size);
				else if (function(jO, aPc) {
						for (var gN = bE.a8, ep = bE.size, aOr = aPc, a7 = 3; a7 < ep; a7++) aOr = aOr + gN[a7] & 4095;
						return aOr === jO || (aPa("Hash Error: " + aOr + " " + jO + " " + ep), !1)
					}(aOr, aPc)) return 1
			}
			return
		}() || (aPX = bE, (pR = a9.data = new a2d).mapType = aPX.oa(2), pR.mapProceduralIndex = aPX.oa(8), pR.mapRealisticIndex = aPX.oa(8), pR.mapSeed = aPX.oa(14), pR.mapName = aPX.aPf(5), 2 === pR.mapType && aPX.aPg(), pR
			.passableWater = aPX.oa(1), pR.passableMountains = aPX.oa(1), pR.playerCount = aPX.oa(10), pR.humanCount = aPX.oa(10), pR.selectedPlayer = aPX.oa(9), pR.gameMode = aPX.oa(1), pR.playerMode = aPX.oa(2), pR.battleRoyaleMode =
			aPX.oa(2), pR.numberTeams = aPX.oa(4), pR.isZombieMode = aPX.oa(1), pR.isContest = aPX.oa(1), pR.isReplay = aPX.oa(1), pR.elo = aPX.aPh(2, 14, 2), pR.colorsType = aPX.oa(1), pR.colorsPersonalized = aPX.oa(1), pR.colorsData =
			aPX.aPh(10, 18, 512), pR.selectableColor = aPX.oa(1), pR.teamPlayerCount = aPX.aPh(4, 10, 9), pR.neutralBots = aPX.oa(1), pR.botDifficultyType = aPX.oa(2), pR.botDifficultyValue = aPX.oa(4), pR.botDifficultyTeam = aPX.aPh(4,
				4, 9), pR.botDifficultyData = aPX.aPh(10, 4, 512), pR.spawningType = aPX.oa(2), pR.spawningSeed = aPX.oa(14), pR.spawningData = aPX.aPh(11, 12, 1024), pR.selectableSpawn = aPX.oa(1), pR.playerNamesType = aPX.oa(2), pR
			.playerNamesData = aPX.aPi(10, 5, 512), pR.selectableName = aPX.oa(1), pR.aIncomeType = aPX.oa(2), pR.aIncomeValue = aPX.oa(8), pR.aIncomeData = aPX.aPh(10, 8, 512), pR.tIncomeType = aPX.oa(2), pR.tIncomeValue = aPX.oa(8), pR
			.tIncomeData = aPX.aPh(10, 8, 512), pR.iIncomeType = aPX.oa(2), pR.iIncomeValue = aPX.oa(8), pR.iIncomeData = aPX.aPh(10, 8, 512), pR.sResourcesType = aPX.oa(2), pR.sResourcesValue = aPX.oa(11), pR.sResourcesData = aPX.aPh(10,
				11, 512), ! function() {
				var hw = bE,
					ue = hw.oa(5),
					aPj = hw.oa(30),
					aPk = hw.oa(30);
				if (aPj + aPk > 8 * hw.size) return void aPa("Corrupted File");
				return function(ep) {
						var aPn = new Uint8Array(ep),
							aPo = new Uint16Array(ep),
							aPp = new Uint32Array(ep),
							aPq = new Uint32Array(ep);
						b6.op.aPP = aPn, b6.op.aPQ = aPo, b6.op.aPR = aPp, b6.op.aPS = aPq;
						for (var a7 = 0; a7 < ep; a7++) {
							var id = bE.oa(4);
							aPn[a7] = id, aPo[a7] = bE.oa(9), 0 === id ? aPp[a7] = bE.oa(22) : 1 === id ? (aPp[a7] = bE.oa(10), aPq[a7] = bE.oa(10)) : 2 === id ? (aPp[a7] = bE.oa(10), aPq[a7] = bE.oa(9)) : 3 === id || 4 === id ? (aPp[
								a7] = bE.oa(10), aPq[a7] = bE.oa(22)) : 5 === id || 6 === id ? aPp[a7] = bE.oa(10) : 7 === id ? aPp[a7] = bE.oa(1) : 10 === id && (aPp[a7] = bE.oa(20), aPq[a7] = bE.oa(22))
						}
					}(aPj),
					function(ep, ue) {
						var aPT = new Uint8Array(ep),
							aPU = new Array(ep);
						aPU.fill(0), b6.op.aPT = aPT, b6.op.aPU = aPU;
						for (var a7 = 0; a7 < ep; a7++) aPT[a7] = bE.oa(1), aPU[a7] = bE.oa(ue)
					}(aPk, ue), 1
			}()) || (bE.e2 < 8 * bE.size - 13 || bE.e2 > 8 * bE.size ? (aPa("Out Of Bounds Error: " + bE.e2 + " " + 8 * bE.size), 1) : (b6.op.a2t = pG, 2 === a9.data.mapType && (aPa("Load base64 image...", 2), 1))))
	}, this.aES = function(aE2, aPb) {
		var a17 = document.createElement("canvas"),
			hY = a17.getContext("2d");
		if (a17.width = aE2.width, a17.height = aE2.height, hY.drawImage(aE2, 0, 0), aPW || aPb) return a9.yF ? void 0 : (a9.data.canvas = a17, a9.data.mapType = 2, n.r(), void n.o(19));
		b6.aMe()
	}
}

function aPM() {
	this.xj = function() {
		var ue = function() {
				for (var aPU = b6.op.aPU, ep = aPU.length, max = 0, a7 = 0; a7 < ep; a7++) max = Math.max(max, aPU[a7]);
				return ul(Math.max(max, 1))
			}(),
			a1 = (pR = a9.data, (a1 = bB).dW(), a1.a4(12, h.rVersion), a1.e2 += 43, a1.a4(2, pR.mapType), a1.a4(8, pR.mapProceduralIndex), a1.a4(8, pR.mapRealisticIndex), a1.a4(14, pR.mapSeed), a1.aPx(pR.mapName, 5), 2 === pR.mapType && a1.aPy(pR
				.canvas), a1.a4(1, pR.passableWater), a1.a4(1, pR.passableMountains), a1.a4(10, pR.playerCount), a1.a4(10, pR.humanCount), a1.a4(9, pR.selectedPlayer), a1.a4(1, pR.gameMode), a1.a4(2, pR.playerMode), a1.a4(2, pR
				.battleRoyaleMode), a1.a4(4, pR.numberTeams), a1.a4(1, pR.isZombieMode), a1.a4(1, pR.isContest), a1.a4(1, pR.isReplay), a1.dd(pR.elo, 2, 14), a1.a4(1, pR.colorsType), a1.a4(1, pR.colorsPersonalized), a1.dd(pR.colorsData, 10,
				18), a1.a4(1, pR.selectableColor), a1.dd(pR.teamPlayerCount, 4, 10), a1.a4(1, pR.neutralBots), a1.a4(2, pR.botDifficultyType), a1.a4(4, pR.botDifficultyValue), a1.dd(pR.botDifficultyTeam, 4, 4), a1.dd(pR.botDifficultyData, 10,
				4), a1.a4(2, pR.spawningType), a1.a4(14, pR.spawningSeed), a1.dd(pR.spawningData, 11, 12), a1.a4(1, pR.selectableSpawn), a1.a4(2, pR.playerNamesType), a1.aPz(pR.playerNamesData, 10, 5), a1.a4(1, pR.selectableName), a1.a4(2, pR
				.aIncomeType), a1.a4(8, pR.aIncomeValue), a1.dd(pR.aIncomeData, 10, 8), a1.a4(2, pR.tIncomeType), a1.a4(8, pR.tIncomeValue), a1.dd(pR.tIncomeData, 10, 8), a1.a4(2, pR.iIncomeType), a1.a4(8, pR.iIncomeValue), a1.dd(pR
				.iIncomeData, 10, 8), a1.a4(2, pR.sResourcesType), a1.a4(11, pR.sResourcesValue), a1.dd(pR.sResourcesData, 10, 11), ! function(ue) {
				var a1 = bB,
					aPP = b6.op.aPP,
					fX = b6.op.aPQ,
					fZ = b6.op.aPR,
					fb = b6.op.aPS,
					ep = aPP.length;
				a1.a4(5, ue), a1.a4(30, ep), a1.a4(30, b6.op.aPU.length);
				for (var a7 = 0; a7 < ep; a7++) {
					var fA = aPP[a7];
					a1.a4(4, fA), a1.a4(9, fX[a7]), 0 === fA ? a1.a4(22, fZ[a7]) : 1 === fA ? (a1.a4(10, fZ[a7]), a1.a4(10, fb[a7])) : 2 === fA ? (a1.a4(10, fZ[a7]), a1.a4(9, fb[a7])) : 3 === fA || 4 === fA ? (a1.a4(10, fZ[a7]), a1.a4(22, fb[
						a7])) : 5 === fA || 6 === fA ? a1.a4(10, fZ[a7]) : 7 === fA ? a1.a4(1, fZ[a7]) : 10 === fA && (a1.a4(20, fZ[a7]), a1.a4(22, fb[a7]))
				}
			}(ue), ! function(ue) {
				for (var a1 = bB, aPT = b6.op.aPT, aPU = b6.op.aPU, ep = aPT.length, a7 = 0; a7 < ep; a7++) a1.a4(1, aPT[a7]), a1.a4(ue, aPU[a7])
			}(ue), bB.e2),
			pR = bI.dn(a1 - 1, 6) + 1,
			ue = (bA.aOK(6 * pR) !== bB.g.length && bB.g.push(0), ! function() {
				var a1 = bB;
				a1.e2 = 24, a1.a4(31, a1.g.length), a1.e2 = 12, a1.a4(12, function() {
					for (var g = bB.g, ep = g.length, aOr = h.rVersion, a7 = 3; a7 < ep; a7++) aOr = aOr + g[a7] & 4095;
					return aOr
				}())
			}(), bE.dW(bB.g), bC.rf.rg(bC.rf.rh(pR)));
		return bE.zf(), bB.dW(), ue
	}
}

function cj() {
	var fA, bp = !1,
		aQ1 = !1,
		aQ2 = -1e4,
		aQ3 = -1,
		aQ4 = 0;

	function resize(aQ8) {
		fA = 0, aX.s1() && (aQ6(aQ8) || bp) && (bp = !1, bZ.resize(), bT.a9P.resize(), aU.dW(), bV.dW(), aV.resize(), aP.resize(), aK.resize(), n.resize(), 1 <= a9.yF ? (aR.resize(!1), aQ.resize(), aS.resize(), aO.resize(), aN.resize(), aJ.resize(),
			aI.resize(), b9.resize(), ar.resize(), aL.resize(), aM.resize(), aH.resize(), bb.resize(), ab.resize(), aT.resize(), be.resize(), aO.a6o()) : (aW.aCN(), aW.aCO()), bc.de = !0)
	}

	function aQ5(fH) {
		return fH && 128 < fH ? Math.floor(fH) : 128
	}

	function aQ6(aQ8) {
		var a1, jO, aQA, rk, a6D;
		if (!(0 < au.rL)) return rk = aQ5(document.documentElement.clientWidth), a6D = aQ5(window.visualViewport && 2 !== u.id ? window.visualViewport.height : document.documentElement.clientHeight), a1 = rk, jO = a6D, aQA = 0 !== u.id || a1 < jO ?
			700 : 1200, aQA = Math.min(aQA / ((a1 + jO) / 2), 1), aQA = 0 === bg.dr.data[1].value ? 2 * aQA / 3 : Math.min(aQA + (bg.dr.data[1].value - 1) * (1 - aQA) / 2, 1), au.pf = (window.devicePixelRatio || 1) * aQA, __fx.hoveringTooltip
			.canvasPixelScale = au.pf, aQ8 && !aQ1 ? (aQ1 = !0, document.body.removeChild(zo)) : aQ1 && (aQ1 = !1, document.body.appendChild(zo)), a1 = Math.floor(.5 + rk * au.pf), jO = Math.floor(.5 + a6D * au.pf), a1 !== au.a1 || jO !== au.jO ?
			(au.a1 = a1, au.jO = jO, au.min = a93(a1, jO), au.max = a4K(a1, jO), au.pb = bI.dn(a1 + jO, 2), au.t6 = a1 / jO, zo.width = a1, zo.height = jO, zo.style.width = rk + "px", zo.style.height = a6D + "px", aQ3 = bc.eO + 1e3, 1) : void 0
	}
	this.a1 = 0, this.jO = 0, this.min = 0, this.max = 0, this.pb = 0, this.t6 = 1, this.pf = 1, this.rL = 0, this.dX = function() {
		this.a1 = aQ5(document.documentElement.clientWidth) + 2, this.jO = aQ5(document.documentElement.clientHeight) + 2
	}, this.dW = function() {
		fA = 1, zo = document.getElementById("canvasA"), (tA = zo.getContext("2d", {
			alpha: __fx.makeMainMenuTransparent
		})).imageSmoothingEnabled = !1, aQ6(0)
	}, this.il = function() {
		az.il(), 50 <= ++fA && resize(0), -1 === aQ3 || bc.eO < aQ3 || (aQ3 = -1, 2e3 * ++aQ4 >= bc.eO + 8e3 ? console.log("error 3748") : u.v.setState(15))
	}, this.dh = function(hl) {
		bp = !0, resize(hl)
	}, this.a0U = function() {
		aQ2 + 1e3 > bc.eO || (aQ2 = bc.eO, resize(0))
	}
}

function dC() {
	this.aOZ = new aQC, this.ym = new aQD
}

function aQD() {
	this.yn = function() {
		for (var gN, ep = ah.jv, y6 = ah.jx, ys = ac.ys, aQE = this.aDl(), a7 = 0; a7 < ep; a7++) gN = y6[a7], aY.y8(gN) && (ys[gN] = aQE);
		var ov = ac.ov,
			iu = ac.iu,
			iv = ac.iv,
			yx = ac.yx,
			ep = a9.ju;
		for (a7 = 0; a7 < ep; a7++)(0 === yx[a7] || iv[a7] < 1 || 2 * ov[a7] > 3 * (iu[a7] + iv[a7])) && (ys[a7] = 0);
		var yf = 0;
		for (a7 = 0; a7 < ep; a7++) yf += 0 < ys[a7];
		return yf
	}, this.aDl = function() {
		return Math.min(65535, bc.jr())
	}
}

function aQC() {
	function aQI(g, fH, kJ) {
		for (var a7 = 0; a7 < 256; a7++) g[a7] = (g[a7] + (fH >> (a7 + kJ) % 30 & 1)) % 256
	}
	this.il = function(aQF, aQG) {
		var g = new Uint8Array(256);
		return function(g, aQF, aQG) {
				var a7, aQK = 3 + (4 + aQF) % 32768,
					aQL = 12 + aQG % 32768,
					aQM = 17 + ((aQF & aQG) + (aQF | aQG) + aQF) % 32768;
				for (a7 = 0; a7 < 256; a7++) aQK = 1 + aQK * aQL % aQM, g[a7] = aQK % 256
			}(g, aQF, aQG), aQI(g, aQF, 2), aQI(g, aQG, 7),
			function(g) {
				var a7, fH, e2 = 0;
				for (a7 = 0; a7 < 3e4; a7++) fH = g[e2], g[e2] = (fH + a7 + g[(e2 + a7) % 256]) % 256, e2 = (fH + a7 + e2 + (fH & e2)) % 256
			}(g),
			function(g) {
				var a7, a6D = 1,
					sN = 1;
				for (a7 = 0; a7 < 256; a7 += 2) a6D = (1 + a6D) * (g[a7] + 1) % 1073741824, sN = (1 + sN) * (g[a7 + 1] + 1) % 1073741824;
				return [a6D, sN]
			}(g)
	}
}

function cg() {
	var aQN, aQO, hI, aQP;
	this.dW = function() {
		var a7, ew, ey, aOm, aQQ, a1, jO, wW, hV, uv, fH, gN, f5, f8, a3T;
		if (function() {
				if (hI = !0, aQP = "rgb(" + bP.ut[0] + "," + bP.ut[1] + "," + bP.ut[2] + ")", bP.aGo(bP.eV)) return 1;
				return hI = !1, 0
			}()) aQO = null;
		else {
			for (aQN = bI.dn(96, 4), aQQ = 1 === bP.eV ? (aOm = 0, 160) : (aOm = 128, 32), aQP = "rgb(" + aOm + "," + aOm + "," + aOm + ")", aQO = new Array(4), a7 = 3; 0 <= a7; a7--) {
				if (aQO[a7] = document.createElement("canvas"), a1 = a7 % 2 == 0 ? bP.f0 : aQN, jO = a7 % 2 == 0 ? aQN : bP.f1 + 2 * aQN, aQO[a7].width = a1, aQO[a7].height = jO, uv = (hV = (wW = aQO[a7].getContext("2d", {
						alpha: !1
					})).getImageData(0, 0, a1, jO)).data, a7 % 2 == 0)
					for (ey = aQN - 1; 0 <= ey; ey--)
						for (fH = aQQ + Math.floor((ey + 1) * (aOm - aQQ) / (aQN + 1)), ew = a1 - 1; 0 <= ew; ew--) uv[gN = 4 * ((0 === a7 ? aQN - ey - 1 : ey) * a1 + ew)] = fH, uv[gN + 1] = fH, uv[gN + 2] = fH, uv[gN + 3] = 255;
				else {
					for (ew = aQN - 1; 0 <= ew; ew--)
						for (fH = aQQ + Math.floor((ew + 1) * (aOm - aQQ) / (aQN + 1)), ey = jO - 1 - aQN; aQN <= ey; ey--) uv[gN = 4 * (ey * a1 + (3 === a7 ? aQN - ew - 1 : ew))] = fH, uv[gN + 1] = fH, uv[gN + 2] = fH, uv[gN + 3] = 255;
					for (f8 = 1; 0 <= f8; f8--)
						for (ew = aQN - 1; 0 <= ew; ew--)
							for (ey = aQN - 1; 0 <= ey; ey--) f5 = (Math.pow(ew * ew + ey * ey, .5) + 1) / (aQN + 1), fH = aQQ + Math.floor((1 < f5 ? 1 : f5) * (aOm - aQQ)), uv[gN = 4 * ((0 === f8 ? aQN - ey - 1 : ey + f8 * (jO - aQN)) * a1 + (
								1 === a7 ? ew : aQN - ew - 1))] = fH, uv[gN + 1] = fH, uv[gN + 2] = fH, uv[gN + 3] = 255
				}
				wW.putImageData(hV, 0, 0)
			}
			a3T = aQQ, bP.uo.fillStyle = "rgb(" + a3T + "," + a3T + "," + a3T + ")", bP.uo.fillRect(0, 0, bP.f0, 1), bP.uo.fillRect(0, bP.f1 - 1, bP.f0, 1), bP.uo.fillRect(0, 0, 1, bP.f1), bP.uo.fillRect(bP.f0 - 1, 0, 1, bP.f1)
		}
	}, this.wQ = function() {
		var f8 = hI ? 0 : -aQN;
		aIR(f8, f8, bP.f0 - 2 * f8, bP.f1 - 2 * f8, bX.aQT, bX.aQU, bX.aQV, bX.aQW) || (tA.fillStyle = aQP, tA.fillRect(0, 0, au.a1, au.jO))
	}, this.t9 = function() {
		hI || (aIQ(0, -aQN, bP.f0, aQN, bX.aQT, bX.aQU, bX.aQV, bX.aQW) && tA.drawImage(aQO[0], bX.aQX, bX.aQY - aQN), aIQ(bP.f0, -aQN, aQN, bP.f1 + 2 * aQN, bX.aQT, bX.aQU, bX.aQV, bX.aQW) && tA.drawImage(aQO[1], bX.aQX + bP.f0, bX.aQY - aQN),
			aIQ(0, bP.f1, bP.f0, aQN, bX.aQT, bX.aQU, bX.aQV, bX.aQW) && tA.drawImage(aQO[2], bX.aQX, bX.aQY + bP.f1), aIQ(-aQN, -aQN, aQN, bP.f1 + 2 * aQN, bX.aQT, bX.aQU, bX.aQV, bX.aQW) && tA.drawImage(aQO[3], bX.aQX - aQN, bX.aQY - aQN))
	}
}

function d1() {
	this.hJ = new aQZ, this.aDj = new aQa, this.wT = new aQb, this.s = new aQc, this.iL = new aQd, this.a3T = new aQe, this.aQf = new aQg, this.ji = new aQh, this.ka = new aQi, this.aQj = new aQk, this.dW = function() {
		this.wT.dW(), this.s.dW(), this.iL.dW(), this.a3T.dW(), this.aQj.dW()
	}, this.t9 = function() {
		this.aQj.t9(), this.wT.t9()
	}
}

function aQh() {
	this.il = function(player) {
		var om;
		return !!a9.data.passableWater && 0 !== ac.gW[player].length && bK.s.on !== bK.s.kB && !((om = bK.s.om[player]) >= aA.kB[aA.j4[player]] || om === bK.s.oz || !b7.gB.ot(player, aA.k9[aA.j4[player]], 32, 0) || !aj.iY.il(player) && !aj.ia.il(
			player) || ! function(a1g) {
			var aQn = bL.fR[1] + bJ.ha[bL.fR[2] - 1] << 2;
			if (aY.eg(aQn)) return 1;
			return aQn = aY.eh(aQn), a1g !== aQn && !!ei(a1g, aQn)
		}(player)) && function(player) {
			return b7.gB.ow(player), bK.s.p2(player), !0
		}(player)
	}
}

function aQZ() {
	function aQv(a7, l0, l1) {
		var aQx, aQw;
		if (!(a7 < 0)) return aQw = bK.s.mC[a7], aQx = bJ.hz(aQw), aQw = bJ.i2(aQw), a7 = 20 * (.9 + .1 * Math.log10(bK.s.a4d[a7])), a7 = Math.max(a7, bJ.iF(b7.pZ.ry(.02, 1.7))), bI.aIY(bJ.hy(l0), bJ.i1(l1), aQx, aQw, a7)
	}

	function aQp(aQo) {
		var aR0 = 4 + .03 * (1 + 1.5 * u.v.sU()) * au.pb / iD;
		return bJ.i3(aQo, bL.fR[1]) < aR0
	}
	this.hK = function(player, aQo) {
		return !!(a9.data.passableWater && bJ.iG(aQo) && bK.s.on !== bK.s.kB && bK.s.om[player] !== bK.s.oz && 0 !== ac.gW[player].length && bK.ka.kb(player, aQo) && aQp(aQo))
	}, this.o5 = function(player, m9, aQo) {
		return !!(bJ.iG(aQo) && this.p3(player, m9) && bK.ka.p4(aQo) && aQp(aQo))
	}, this.p3 = function(player, id) {
		for (var aQq, ru = player << 3, rv = ru + bK.s.om[player], aQr = bK.s.aQr, aQs = bK.s.aQs, a7 = ru; a7 < rv; a7++)
			if (id === aQs[aQq = aQr[a7]]) return bL.fR[3] = aQq, !0;
		return !1
	}, this.o4 = function(eb) {
		var a3U = bK.a3T.a3U;
		return !!this.p3(a9.eZ, a3U) && (b5.hC.o4(a3U, eb), !0)
	}, this.a3W = function(l0, l1) {
		var player = a9.eZ,
			ep = bK.s.om[player];
		if (0 === ep) return !1;
		for (var aQr = bK.s.aQr, mC = bK.s.mC, ru = player << 3, aQt = 80, aKX = -1, a7 = ru + ep - 1; ru <= a7; a7--) {
			var aQu = aQr[a7],
				f5 = bJ.ht(l0, l1, mC[aQu]);
			f5 < aQt && (aQt = f5, aKX = aQu)
		}
		return !!aQv(aKX, l0, l1) && (bK.a3T.a3U = bK.s.aQs[aKX], bj.p1.a3W(), !0)
	}, this.a3d = function(l0, l1) {
		var ep = bK.s.on;
		if (ep < 1) return -1;
		for (var mC = bK.s.mC, aQt = 80, aKX = -1, a7 = 0; a7 < ep; a7++) {
			var f5 = bJ.ht(l0, l1, mC[a7]);
			f5 < aQt && (aQt = f5, aKX = a7)
		}
		return aQv(aKX, l0, l1) ? aKX : -1
	}, this.mB = function(player, id) {
		for (var ru = player << 3, rv = ru + bK.s.om[player], aQs = bK.s.aQs, aQr = bK.s.aQr, a7 = ru; a7 < rv; a7++) {
			var aQu = aQr[a7];
			if (aQs[aQu] === id) return aQu
		}
		return -1
	}, this.aDg = function(player) {
		for (var ru = player << 3, rv = ru + bK.s.om[player], aQr = bK.s.aQr, a4d = bK.s.a4d, j4 = 0, a7 = ru; a7 < rv; a7++) j4 += a4d[aQr[a7]];
		return j4
	}, this.mH = function(player) {
		return 0 === bK.s.om[player] ? -1 : bK.s.aQr[player << 3]
	}
}

function aQa() {
	this.aDk = function(player) {
		for (var aQr = bK.s.aQr, ru = player << 3, a7 = ru + bK.s.om[player] - 1; ru <= a7; a7--) this.aR1(aQr[a7])
	}, this.aR1 = function(aR2) {
		var s = bK.s,
			aR3 = s.on - 1,
			aR4 = s.a4c[aR2],
			aR5 = s.aR6[aR2],
			aR7 = s.mC[aR2];
		s.on = aR3, s.a4c[aR2] = s.a4c[aR3], s.aR8[aR2] = s.aR8[aR3], s.aR9[aR2] = s.aR9[aR3], s.mC[aR2] = s.mC[aR3], s.aRA[aR2] = s.aRA[aR3], s.a4d[aR2] = s.a4d[aR3], s.aR6[aR2] = s.aR6[aR3], s.aQs[aR2] = s.aQs[aR3], s.aRB[aR2] = s.aRB[aR3], s
			.aRC[aR2] = s.aRC[aR3], s.aRD[aR2] = s.aRD[aR3], s.aQr[s.a4c[aR2]] = aR2,
			function(aPG) {
				var player = aPG >> 3,
					s = bK.s,
					ep = s.om[player] - 1,
					aRG = (player << 3) + ep;
				s.om[player] = ep, aRG !== aPG && (s.aQr[aPG] = s.aQr[aRG], s.a4c[s.aQr[aPG]] = aPG)
			}(aR4), bK.iL.iL[bJ.iK(s.mC[aR2])][s.aR6[aR2]] = aR2, aR3 = bJ.iK(aR7), aR4 = aR5, aR3 = bK.iL.iL[aR3], s = aR3.pop(), aR4 !== aR3.length && (aR3[aR4] = s, bK.s.aR6[s] = aR4)
	}
}

function aQb() {
	var aRI, wu = 8,
		aRJ = new Array(2);

	function aRK(e2) {
		var hS = wu + 4,
			a17 = b7.pZ.uk(hS, hS),
			hY = b7.pZ.getContext(a17, !0),
			hV = b7.pZ.getImageData(hY, hS, hS),
			uv = hV.data;
		return aRL(uv, hS + 1, e2), aRL(uv, hS + 2, e2), aRL(uv, 2 * hS + 1, e2), aRL(uv, 2 * hS - 3, e2), aRL(uv, 2 * hS - 2, e2), aRL(uv, 3 * hS - 2, e2), aRL(uv, hS * (hS - 3) + 1, e2), aRL(uv, hS * (hS - 2) + 1, e2), aRL(uv, hS * (hS - 2) + 2,
			e2), aRL(uv, hS * (hS - 2) - 2, e2), aRL(uv, hS * (hS - 1) - 3, e2), aRL(uv, hS * (hS - 1) - 2, e2), hY.putImageData(hV, 0, 0), a17
	}

	function aRL(uv, eb, e2) {
		eb *= 4;
		uv[eb] = 255, uv[1 + eb] = 255, uv[2 + eb] = e2, uv[3 + eb] = 255
	}

	function uk(player) {
		var a17 = b7.pZ.uk(wu, wu);
		return function(hY, player) {
			var ew, ey, hx, eb, aRN, aRO, hS = wu,
				hV = b7.pZ.getImageData(hY, hS, hS),
				uv = hV.data,
				kf = (hS >> 1) - .5,
				aQP = aY.a5C(player),
				aRQ = b7.pj.a0i(aQP, .5);
			b7.pj.a0k(aQP, aRQ, 300) || b7.pj.a0m(aQP, 100);
			for (ey = 0; ey < hS; ey++)
				for (ew = 0; ew < hS; ew++) aRO = (hS - 1.5) * (hS - 1.5) / 4, aRN = (hx = (hx = ew - kf) * hx + (hx = ey - kf) * hx) <= (hS - 4.5) * (hS - 4.5) / 4 ? aRQ : aQP, uv[eb = 4 * (ey * hS + ew)] = aRN[0], uv[1 + eb] = aRN[1], uv[2 +
					eb] = aRN[2], uv[3 + eb] = aRO < hx ? 0 : 255;
			hY.putImageData(hV, 0, 0)
		}(b7.pZ.getContext(a17, !0), player), a17
	}
	this.dW = function() {
		aRI = new Array(a9.em), aRJ[0] = aRK(255), aRJ[1] = aRK(0)
	}, this.t9 = function() {
		var a7, player, aRR, aIZ, j4, hw, aRT, aRV, aRW, mC = bK.s.mC,
			a4c = bK.s.a4c,
			a4d = bK.s.a4d,
			aRC = bK.s.aRC,
			aRX = aRI,
			aRY = a9.eZ,
			aRZ = -1,
			ep = bK.s.on,
			aRa = au.a1,
			aRb = au.jO,
			aRc = bP.f0 << 4,
			ee = iD,
			eT = ee / wu,
			mD = iC / ee,
			mE = iE / ee,
			hx = (aRa + iC) / ee - mD,
			i0 = (aRb + iE) / ee - mE,
			hY = tA;
		for (bK.hJ.p3(a9.eZ, bK.a3T.a3U) && (aRZ = bL.fR[3]), hY.imageSmoothingEnabled = ee < 9, b7.pZ.textAlign(hY, 1), b7.pZ.textBaseline(hY, 1), a7 = 0; a7 < ep; a7++) player = a4c[a7] >> 3, j4 = a4d[a7], aRR = .9 + .1 * Math.log10(j4), aIZ =
			(hw = mC[a7]) % aRc / 16 - aRR, hw = aRb * (Math.floor(hw / aRc) / 16 - aRR - mE) / i0, aRT = -2 * (aRW = ee * aRR) * (1 + (aRV = +(player === aRY)) / 8), aRV = aRV * aRW / 4, (aRW = aRa * (aIZ - mD) / hx) < aRT || hw < aRT || aRa +
			aRV < aRW || aRb + aRV < hw || (aIZ = 2 * aRR * eT, aRT = aRR * ee, void 0 === (aRV = aRX[player]) && (aRX[player] = aRV = uk(player)), player === aRY && (hY.setTransform(aIZ, 0, 0, aIZ, aRW - 2 * aIZ, hw - 2 * aIZ), hY.drawImage(aRJ[
				+(a7 === aRZ)], 0, 0)), hY.setTransform(aIZ, 0, 0, aIZ, aRW, hw), hY.drawImage(aRV, 0, 0), (aRR = Math.floor(function(j4) {
				if (j4 < 1e3) return .42;
				if (j4 < 1e4) return .34;
				if (j4 < 1e6) return .26;
				if (j4 < 1e8) return .19;
				return .15
			}(j4) * aRT)) < 6) || (hY.setTransform(1, 0, 0, 1, 0, 0), hY.fillStyle = aRC[a7] ? b8.nH : b8.mn, hY.font = b7.pZ.ri(1, aRR), hY.fillText(b7.z3.xY(j4), aRW + aRT, hw + aRT + .1 * aRR));
		hY.imageSmoothingEnabled = !1, hY.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function aQk() {
	var a17;
	this.dW = function() {
		a17 = a17 || bM.s.aRf(20, bd.aRg[7])
	}, this.t9 = function() {
		var mX = iD;
		if (!(5 <= mX)) {
			var aRa = au.a1,
				aRb = au.jO,
				mD = iC / mX,
				mE = iE / mX,
				mQ = (aRa + iC) / mX,
				mR = (aRb + iE) / mX,
				gO = -20 * mX,
				aRh = .5 * gO,
				aRc = bP.f0 << 4,
				ep = bK.s.on,
				mC = bK.s.mC,
				aRi = a17,
				hY = tA;
			3 < mX && (hY.globalAlpha = .5 * (5 - mX));
			for (var a7 = 0; a7 < ep; a7++) {
				var hw = mC[a7],
					ew = aRa * (hw % aRc / 16 - mD) / (mQ - mD) + aRh,
					hw = aRb * (Math.floor(hw / aRc) / 16 - mE) / (mR - mE) + aRh;
				aRa < ew || aRb < hw || ew < gO || hw < gO || (hY.setTransform(mX, 0, 0, mX, ew, hw), hY.drawImage(aRi, 0, 0))
			}
			hY.globalAlpha = 1, hY.setTransform(mX, 0, 0, mX, 0, 0)
		}
	}
}

function aQg() {
	this.il = function() {
		for (var aQw, aQf, aRB = bK.s.aRB, mC = bK.s.mC, aR9 = bK.s.aR9, a7 = bK.s.on - 1; 0 <= a7; a7--) aQw = mC[a7], 0 !== (aQf = aRB[a7]) && aQw === aR9[a7] && (! function(a7, aRm, hk) {
			var j3, player = bK.s.a4c[a7] >> 3,
				hk = aRm + bJ.ha[hk] << 2,
				a7 = bK.s.a4d[a7];
			if (ba.aRn(player), aY.eg(hk)) j3 = a9.em;
			else {
				if ((j3 = aY.eh(hk)) === player) return hk = b7.gB.gE(player, a7), ba.gF(player, a7 - hk, 12);
				if (!ei(player, j3)) return b5.jz.oL(player, j3, a7)
			}
			aZ.jG(player, j3) || aZ.jY(player) ? (ac.gH[player].push(aRm << 2), aZ.j0(player, a7, j3), aB.j1(player, !0)) : ba.gF(player, a7, 12)
		}(a7, bJ.iJ(aQw), aQf - 1), bK.aDj.aR1(a7))
	}, this.aRo = function(player, eb, hk, m9) {
		if (0 !== hk) {
			var aRY = a9.eZ;
			if (b7.gB.h2(aRY) && ei(player, aRY) && player !== aRY && 0 !== ac.gW[aRY].length) {
				var aQn = eb + bJ.ha[--hk] << 2;
				if (aY.eg(aQn) || ei(player, aY.eh(aQn))) {
					for (var f3 = !1, a7 = 0; a7 < 4; a7++)
						if (aQn = eb + bJ.ha[a7] << 2, aY.ek(aQn) && !aY.eg(aQn) && aY.eh(aQn) === aRY) {
							f3 = !0;
							break
						} f3 && (aJ.a3V(719, 0), aJ.yd(180, L(374, [ac.a4T[player]]), 719, player, b8.nG, b8.mk, -1, !0, void 0, {
						f9: 1,
						m9: m9
					}))
				}
			}
		}
	}
}

function aQc() {
	this.aRp = null, this.kB = 512, this.oz = 8, this.on = 0, this.aRq = 0, this.a4c = new Uint16Array(this.kB), this.aR8 = new Uint32Array(this.kB), this.aR9 = new Uint32Array(this.kB), this.mC = new Uint32Array(this.kB), this.aRA = new Uint16Array(
			this.kB), this.a4d = new Uint32Array(this.kB), this.aR6 = new Uint16Array(this.kB), this.aQs = new Uint16Array(this.kB), this.aRB = new Uint8Array(this.kB), this.aRC = new Uint8Array(this.kB), this.aRD = new Uint32Array(this.kB), this
		.om = new Uint8Array(a9.em), this.aQr = new Uint16Array(this.oz * a9.em), this.dW = function() {
			this.aRq = 0, this.on = 0, this.aRp = new Uint8Array(bP.f0 + bP.f1), this.om.fill(0)
		}, this.p2 = function(player) {
			var ep = this.on,
				aRr = bJ.iI(bL.fR[0]),
				aRs = this.om[player],
				aRt = (player << 3) + aRs,
				j4 = (this.a4c[ep] = aRt, this.aR8[ep] = aRr, this.mC[ep] = aRr, this.aR9[ep] = bJ.iI(bL.fR[1]), this.aRA[ep] = 0, bL.fN[0]);
			j4 < 60 ? (b7.gB.gC(player, 60 - j4), this.a4d[ep] = 60) : this.a4d[ep] = j4, this.aR6[ep] = bK.iL.p2(ep, bJ.iK(aRr)), this.aQs[ep] = this.aRq, this.aRB[ep] = bL.fR[2], this.aRC[ep] = 0, this.aRD[ep] = 0, this.aRq = this.aRq + 1 & 1023,
				this.aQr[aRt] = ep, this.om[player] = aRs + 1, this.on++, bK.aQf.aRo(player, bL.fR[1], bL.fR[2], this.aQs[ep])
		}, this.o4 = function() {
			var aQq = bL.fR[3];
			this.aR8[aQq] = this.mC[aQq], this.aR9[aQq] = bJ.iI(bL.fR[1]), this.aRA[aQq] = 0, this.aRB[aQq] = bL.fR[2], bK.aQf.aRo(this.a4c[aQq] >> 3, bL.fR[1], bL.fR[2], this.aQs[aQq])
		}, this.il = function() {
			bK.aQf.il();
			var a7, gN = a9.eZ,
				dm = bK.hJ.aDg(gN),
				rD = (! function(rD) {
					var a7, aRy, aRz, aS0, aS1, aRr, aS5, aS6, es, gO, aR8 = rD.aR8,
						aR9 = rD.aR9,
						mC = rD.mC,
						a4d = rD.a4d,
						aRC = rD.aRC,
						aRA = rD.aRA,
						aR6 = rD.aR6,
						gd = ac.gd,
						a4c = rD.a4c,
						rD = rD.on,
						aRc = bP.f0 << 4;
					for (a7 = rD - 1; 0 <= a7; a7--) aRz = mC[a7], aRy = aR9[a7], aRz !== aRy && (aRr = aR8[a7], aS5 = aRy % aRc - (aS1 = aRr % aRc), aS6 = ~~((aRy + .5) / aRc) - (aRr = ~~((aRr + .5) / aRc)), es = ~~Math.sqrt(aS5 * aS5 + aS6 *
						aS6 + .5), gO = 15e4 + 25e3 * bI.log10(a4d[a7]), gO += 5e4 * !gd[a4c[a7] >> 3], aRC[a7] && (gO = bI.dn(gO, 5)), 65535 <= (gO = aRA[a7] + Math.max(~~((gO + .5) / es), 1)) ? mC[a7] = aS0 = aRy : (aRA[a7] = gO, mC[
						a7] = aS0 = aS1 + bI.dn(gO * aS5, 65536) + aRc * (aRr + bI.dn(gO * aS6, 65536))), aR6[a7] = bK.iL.aS8(aR6[a7], aRz, aS0))
				}(this), ! function(rD) {
					if (bc.jr() % 2 == 1) {
						var a7, kJ, kf, f9, fA, aS9, xE, aSA, hF, he, mD, mE, aRr, aSB, aSC, aSD, v3, ep = rD.on,
							mC = rD.mC,
							a4c = rD.a4c,
							a4d = rD.a4d,
							aRD = rD.aRD,
							aRC = rD.aRC,
							iL = bK.iL.iL,
							aSF = iL.length,
							aSG = bK.iL.aSG,
							aRc = bP.f0 << 4,
							aSH = a9.ix,
							aP4 = bd.en,
							gO = (ep - 1) * (bI.dn(bc.jr(), 2) % 2);
						for (a7 = 0; a7 < ep; a7++)
							for (kJ = Math.abs(a7 - gO), aRr = mC[kJ], kf = bJ.iK(aRr), hF = a4c[kJ] >> 3, mD = aRr % aRc, mE = ~~((aRr + .5) / aRc), aSD = a4d[kJ], f9 = 0; f9 < 9; f9++)
								if (!((aS9 = kf + aSG[f9]) < 0 || aSF <= aS9))
									for (aSA = iL[aS9], xE = aSA.length, fA = 0; fA < xE; fA++) aSB = aSA[fA], v3 = a4c[aSB] >> 3, hF == v3 || aSH && aP4[hF] === aP4[v3] && aP4[hF] || (v3 = mC[aSB], (he = mD - v3 % aRc) * he + (he = mE - ~~((v3 +
										.5) / aRc)) * he < 14400 && ((v3 = a4d[aSB]) <= aSD ? aSC = Math.max(1, bI.dn(v3 + bI.dn(aSD - v3, 10), 10)) : (aSC = Math.max(1, bI.dn(aSD, 10)), aRD[aSB] = Math.min(aRD[aSB] + aSC, 4294967295)),
										a4d[aSB] = Math.max(v3 - aSC, 0), aRC[aSB] = 4))
					}
				}(this), ! function(rD) {
					if (bc.jr() % 5 == 3) {
						var a7, j4, a4d = rD.a4d,
							gd = ac.gd,
							a4c = rD.a4c,
							aRD = rD.aRD,
							aRC = rD.aRC,
							ep = rD.on;
						for (a7 = 0; a7 < ep; a7++) j4 = a4d[a7], gd[a4c[a7] >> 3] ? a4d[a7] = Math.max(j4 - Math.max(1, j4 >> 7), 0) : (a4d[a7] = Math.max(j4 - Math.max(1, j4 >> 11), 0), aRC[a7] || (j4 = aRD[a7]) && (j4 = Math.max(j4 >> 3, 1),
							a4d[a7] = Math.min(a4d[a7] + (j4 << 1), 4294967295), aRD[a7] -= j4))
					}
				}(this), this),
				a4d = rD.a4d,
				aRC = rD.aRC;
			for (a7 = rD.on - 1; 0 <= a7; a7--) aRC[a7] = aRC[a7] >> 1, 0 === a4d[a7] && bK.aDj.aR1(a7);
			ba.gF(gN, dm - bK.hJ.aDg(gN), 15)
		}
}

function aQd() {
	this.aSI = 32, this.ew = 0, this.ey = 0, this.iM = 0, this.aSJ = 0, this.aSK = 4, this.iL = null, this.aSG = new Int16Array(9), this.dW = function() {
		this.iM = 1 + bI.dn(bP.f0 - 1, this.aSI), this.aSJ = 1 + bI.dn(bP.f1 - 1, this.aSI), this.iL = new Array(this.iM * this.aSJ), b7.pj.a0h(this.iL);
		var ew, ey, aSG = this.aSG,
			a1 = this.iM;
		for (ew = -1; ew <= 1; ew++)
			for (ey = -1; ey <= 1; ey++) aSG[3 * (1 + ey) + 1 + ew] = ey * a1 + ew
	}, this.p2 = function(aSM, a7) {
		return this.iL[a7].push(aSM), this.iL[a7].length - 1
	}, this.aS8 = function(aSN, aRr, aRy) {
		var aSO, aSP, aRr = bJ.iK(aRr),
			aRy = bJ.iK(aRy);
		return aRr === aRy ? aSN : (aSO = this.iL[aRr].pop(), this.iL[aRr].length === aSN ? this.p2(aSO, aRy) : (aSP = this.iL[aRr][aSN], this.iL[aRr][aSN] = aSO, bK.s.aR6[aSO] = aSN, this.p2(aSP, aRy)))
	}
}

function aQi() {
	function zb(aRy, aSQ) {
		if (! function(aRy, aQo) {
				var hd = bJ.iJ(aRy),
					aSU = Math.abs(bJ.ex(aQo) - bJ.ex(hd)),
					hd = Math.abs(bJ.ez(aQo) - bJ.ez(hd));
				return 0 !== Math.max(aSU, hd) && (function(aRr, aRy, aSU, aSV) {
					var aSX = bJ.hz(aRr),
						aRr = bJ.i2(aRr),
						aSZ = bJ.hz(aRy),
						aRy = bJ.i2(aRy),
						aSZ = aSZ - aSX,
						aRy = aRy - aRr,
						aSd = Math.abs(aSZ),
						aSe = Math.abs(aRy),
						aSZ = 0 < aSZ ? 1 : 3,
						aRy = 0 < aRy ? 2 : 0;
					aSe < aSd ? aSh(aSX, aRr, aSX + aSd, aRr + aSe, aSZ, aRy, aSU) : aSh(aRr, aSX, aRr + aSe, aSX + aSd, aRy, aSZ, aSV)
				}(aRy, bJ.iI(aQo), aSU, hd), !0)
			}(aRy, aSQ)) return !1;
		if (0 === bL.fK[0]) return !!aY.hI(aSQ << 2);
		if (! function(aQo) {
				if (aY.hI(aQo << 2)) return 1;
				return function(aQo) {
					var a7, hk, aRp = bK.s.aRp,
						aSl = bJ,
						ep = bL.fK[0],
						aSm = 4 * aQo;
					for (a7 = ep - 1; 0 <= a7; a7--) {
						hk = aRp[a7];
						var aSn = aSm;
						if (aSm = aSl.iO(aSm, hk + 2 & 3), aY.hI(aSm)) return bL.fK[0] = a7, bL.fR[1] = aSm >> 2, bL.fR[2] = 1 + hk, bL.fR[4] = aSn, 1
					}
					return
				}(aQo)
			}(aSQ)) return !1;
		if (bL.fR[2] && aY.eu(bL.fR[4])) return !1;
		var a7, aSQ = bJ.iJ(aRy),
			uv = a9X,
			aRp = bK.s.aRp,
			ep = bL.fK[0] - 1,
			aSm = 4 * aSQ,
			hb = bJ.hb;
		for (a7 = 0; a7 < ep; a7++)
			if (aSm += hb[aRp[a7]], 0 !== uv[aSm + 3] || 2 !== uv[aSm + 2]) return !!void 0;
		return !!1
	}

	function aSh(aSX, aSY, aSZ, aSa, aSf, aSg, aSU) {
		for (var ey, aRp = bK.s.aRp, gO = 0, aSi = 0, jO = aSa - aSY, a1 = aSZ - aSX, aSj = aSX % 16, a7 = 1; a7 <= aSU; a7++) aRp[gO++] = aSf, aRp[gO] = aSg, gO += (ey = (jO * (aSj + (a7 << 4)) + .5) / a1 >> 4) - aSi, aSi = ey;
		bL.fW(bL.fK, gO)
	}
	this.kb = function(player, aSQ) {
		var hk, hd, hE = bJ.hm(player, aSQ);
		return hE !== aSQ && (hk = bJ.hc(hE, aSQ), hd = bJ.iN(hE, hk), !(!aY.hI(hd << 2) && (hk = bJ.hj(hE, aSQ, hk), hd = bJ.iN(hE, hk), !aY.hI(hd << 2)) || (bL.fR[0] = hd, bL.fR[1] = aSQ, bL.fR[2] = 0, hd !== aSQ && (!zb(bJ.iI(hd), aSQ) ||
			0 !== bL.fR[2] && bJ.hs(player, bL.fR[1] + bJ.ha[bL.fR[2] - 1] << 2)))))
	}, this.p4 = function(aSQ) {
		var aRr = bK.s.mC[bL.fR[3]];
		return bL.fR[1] = aSQ, bL.fR[2] = 0, zb(aRr, aSQ)
	}
}

function aQe() {
	var wu = 32,
		wt = new Array(2);

	function uk(fA) {
		var ew, ey, eb, i0, hx, hS = wu,
			a17 = b7.pZ.uk(hS, hS),
			hY = b7.pZ.getContext(a17, !0),
			hV = b7.pZ.getImageData(hY, hS, hS),
			uv = hV.data,
			kf = (hS >> 1) - .5,
			kg = Math.sqrt(kf * kf);
		for (uv.fill(255), ey = 0; ey < hS; ey++)
			for (ew = 0; ew < hS; ew++) hx = ew - kf, i0 = ey - kf, eb = 4 * (ey * hS + ew), hx = 714 * (kg - Math.sqrt(hx * hx + i0 * i0)) / kg, uv[2 + eb] = fA, uv[3 + eb] = 255 < hx ? 0 : hx;
		return hY.putImageData(hV, 0, 0), a17
	}
	this.a3U = -1, this.dW = function() {
		this.a3U = -1, wt[0] || (wt[0] = uk(255), wt[1] = uk(0))
	}, this.aSp = function(hY, eT, ew, ey, e1, a7) {
		b7.gB.h2(a9.eZ) && (hY.setTransform(eT *= 4 / 3 * .625, 0, 0, eT, ew - (e1 *= 4 / 3), ey - e1), hY.drawImage(wt[+(bK.s.aQs[a7] === this.a3U)], 0, 0))
	}
}

function dZ() {
	this.aMl = [L(375), L(376), L(377), L(378), L(379), L(380), L(381), L(382), L(383), L(384), L(385), L(386), L(387)];
	var aSq = ["Space", "", "KeyB", "", "KeyW", "", "KeyS", "", "KeyD", "", "KeyA", "", "KeyH", "", "NumpadAdd", "", "NumpadSubtract", "", "ArrowLeft", "", "ArrowRight", "", "ArrowUp", "", "ArrowDown", ""];
	this.aMk = new Array(aSq.length), this.dW = function() {
		var g = bg.dr.data[155].value.split(";"),
			kf = g.length;
		if (function() {
				for (var ep = aSq.length, a7 = 0; a7 < ep; a7++) bU.aMk[a7] = aSq[a7]
			}(), !(kf > aSq.length))
			for (var a7 = 0; a7 < kf; a7++) g[a7].length && (this.aMk[a7] = g[a7])
	}, this.aMn = function(e2, code) {
		for (var aMk = this.aMk, aSs = aSq, pG = (aMk[e2] = code, ""), ep = aMk.length, aSt = [], a7 = 0; a7 < ep; a7++) aSt.push(aMk[a7] === aSs[a7] ? "" : aMk[a7]);
		ep--;
		for (a7 = 0; a7 < ep; a7++) pG += aSt[a7] + ";";
		bg.r3.r4(155, pG += aSt[ep])
	}, this.aMj = function() {
		bg.r3.r4(155, ""), this.dW()
	}, this.fA = function(code, e2) {
		return code === this.aMk[e2] || code === this.aMk[e2 + 1]
	}
}

function dU() {
	var aSu = new Audio(
		"data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAFAAACoABtbW1tbW1tbW1tbW1tbW1tbW1tkpKSkpKSkpKSkpKSkpKSkpKSkpK2tra2tra2tra2tra2tra2tra2ttvb29vb29vb29vb29vb29vb29vb//////////////////////////8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJAaRAAAAAAAAAqDGJ7xx//sUZAAAAGoWTAUAQAILQojwoBQAQfh1YBgWgAA6iqWDANAA/qchCEIRugQAAAAQRX//zh8AAIKQ8PDADzH/4F4SAs/99er//lD9Zr+tH6BPCvRPDCOshGlfMtv/C4Rh//sUZAKAAIsdXIYVQAANgrkgwBQAAcwBhTwBgDA2CmODgQABAR4bRp///9fF/i9tH5q+c5QFAvcPgcvpBBIAHN+AAH5s2HXJpNQxh/+tf3ukWgQIyReNoQ1S//5ABgKY//sUZAMAAJgc2oUJQAILwpkQoBQAQgQvbhgSgAA8CuaXAFAAEBISGGZh7////3cSlP9OrSjmBg0TESm6X8APjixspcDhfT2cK+sRfD4AEkAAH+b8YABosOqFm9Fv/wrw//sUZAIAAHAMXYYUwAANo2jwwBwAAnABaZwBgAAyimODgCABAwEGWG/+31clmP0m+005fUbgtQ478mJAAArgAAMAPg0DQNDhKCv//8RBx3//mMFAQEBEioQKCilMQU1F//sUZAIP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV"
		);
	this.aOY = function() {
		aSu && aSu.play()
	}
}

function cU() {
	this.a60 = function() {
		var aSx;
		return !(ah.jv < 3 || ac.gd[lC[0]] >= a9.je >> 1) && (a9.ix ? (aSx = aa.aEm(), !(2 * aa.aEn(be.l9()) >= aSx)) : function() {
			var aSx = aa.aEm();
			if (2 * ac.gr[lC[0]] >= aSx) return !1;
			return !0
		}())
	}
}

function c5() {
	this.dW = function() {
		if (0 === a9.data.sResourcesType) {
			for (var aRs = a9.ju, gr = ac.gr, a7 = 0; a7 < aRs; a7++) gr[a7] = 512;
			var aRt = a9.vT,
				kA = aA.kA,
				j4 = aA.j4;
			for (a7 = aRs; a7 < aRt; a7++) gr[a7] = kA[j4[a7]]
		} else(1 === a9.data.sResourcesType ? function() {
			for (var ep = a9.vT, gr = ac.gr, sResourcesValue = a9.data.sResourcesValue, a7 = 0; a7 < ep; a7++) gr[a7] = sResourcesValue
		} : function() {
			for (var ep = a9.vT, gr = ac.gr, sResourcesData = a9.data.sResourcesData, a7 = 0; a7 < ep; a7++) gr[a7] = sResourcesData[a7]
		})();
		ba.lh[8] = ac.gr[a9.eZ]
	}
}

function dK() {
	var aT2 = 501,
		aT3 = (this.z7 = new Uint32Array(aT2), this.a1k = new Uint32Array(aT2), this.a8u = new Uint16Array(aT2), this.aMt = 0, 1),
		aT4 = 0;

	function aT7(self) {
		self.max.fill(0)
	}

	function aT9(self, a7) {
		self.max[0] = Math.max(self.z7[a7], self.max[0]), self.max[1] = Math.max(self.a1k[a7], self.max[1]), self.max[2] = Math.max(self.a8u[a7], self.max[2])
	}
	this.max = [0, 0, 0], this.aT5 = 0, this.lh = new Array(21), this.aT6 = null, this.dX = function() {
		this.aT6 = [L(388), L(389), L(390), L(391), L(392), L(393), L(394), L(395), L(239), L(240), L(396), L(397), L(398), L(399), "", L(400), L(401), L(402), L(199), L(403), L(404)]
	}, this.dW = function() {
		this.aMt = 0, aT3 = 1, this.aT5 = 0, aT4 = 0, aT7(this), this.lh.fill(0)
	}, this.ox = function(player, iB) {
		b7.gB.a1f(player) && (this.lh[0] += iB + 1, this.lh[1]++, this.lh[12] += bL.fN[1])
	}, this.oN = function(player, o0) {
		__fx.donationsTracker.logDonation(player, o0, bL.fN[0]);
		player === a9.eZ && (aJ.oN(bL.fN[0], bL.fN[1], o0), this.lh[12] += bL.fN[1], this.lh[16] += bL.fN[0]), o0 === a9.eZ && (aJ.a4q(bL.fN[0], player), this.lh[10] += bL.fN[0])
	}, this.p0 = function(player) {
		b7.gB.a1f(player) && (this.lh[2]++, this.lh[12] += bL.fN[1])
	}, this.pB = function(player) {
		b7.gB.a1f(player) && (this.lh[19]++, this.lh[12] += bL.fN[1])
	}, this.aRn = function(player) {
		b7.gB.a1f(player) && this.lh[20]++
	}, this.gF = function(player, a2L, e2) {
		b7.gB.a1f(player) && (this.lh[e2] += a2L)
	}, this.il = function() {
		var self;
		this.aT5 || 0 < aT4-- || ((self = this).z7[self.aMt] = ac.gd[a9.eZ], self.a1k[self.aMt] = ac.gr[a9.eZ], self.a8u[self.aMt] = aa.a8v(a9.eZ), aT9(self, self.aMt), self.aMt++, self.aMt === aT2 && function(self) {
			aT7(self), aT9(self, 0), self.aMt = 1 + bI.dn(aT2, 2);
			for (var a7 = 1; a7 < self.aMt; a7++) self.z7[a7] = self.z7[2 * a7], self.a1k[a7] = self.a1k[2 * a7], self.a8u[a7] = self.a8u[2 * a7], aT9(self, a7);
			aT3 *= 2
		}(self), aT4 = aT3 - 1, bb.lY(), 0 === ac.ll[a9.eZ] && (self.aT5 = bc.jr()))
	}
}

function dL() {
	this.a1 = 0, this.jO = 0, this.rk = 0, this.rl = 0, this.aTB = 0, this.aTC = 0, this.a6D = 0, this.sN = 0;
	var aTE = this.aTD = 0;
	this.aTF = 0, this.aTG = 0, this.aTH = 0, this.a5c = 0, this.e2 = 0, this.a8X = null, this.wp = !1, this.aTI = -1, this.aTJ = !1, this.aTK = [0, 0], this.dX = function() {
		this.a8X = [L(405), L(106, 0, "Balance"), L(105, 0, "Interest"), L(406)]
	}, this.dW = function() {
		this.wp = !1, this.aTI = -1, this.aTJ = !1, this.resize()
	}, this.resize = function() {
		this.a1 = au.a1 < 1.369 * au.jO ? au.a1 : 1.369 * au.jO;
		var es = u.v.sU() && au.a1 < au.jO ? 1 : u.v.sU() ? .8 : au.a1 < au.jO ? .65 : .59;
		this.a1 = Math.floor(es * this.a1), this.a1 -= u.v.sU() && au.a1 < au.jO ? 2 * bZ.gap + 2 : 0, this.jO = Math.floor(this.a1 / 1.369), this.a5c = Math.floor(this.jO / 150), this.a5c = Math.max(this.a5c, 1.5), this.rk = Math.floor(1 + .02 *
			this.a1), this.rl = Math.floor(1 + .04 * this.a1), this.a6D = this.rl, aTE = Math.floor(.75 * this.a6D), this.sN = Math.floor(1 + .075 * this.a1), this.aTF = Math.floor(1 + .1125 * this.a1), this.aTG = Math.floor(this.a1 * (u.v
			.sU() ? .03 : .029)), this.aTG = Math.max(this.aTG, 4), this.aTH = Math.floor(.035 * this.a1), this.aTH = Math.max(this.aTH, 4), this.aTD = this.jO - 2 * this.a6D - this.sN - this.aTF, this.wp && this.aTL()
	}, this.h3 = function(l0, l1) {
		var vW, vV;
		return !!this.wp && (vV = l0, vW = l1, l0 -= bI.dn(au.a1 - this.a1, 2), l1 -= bI.dn(au.jO - this.jO, 2), l0 < 0 || l1 < 0 || l0 >= this.a1 || l1 >= this.jO || l0 >= this.a1 - this.aTF && l1 < this.aTF ? -1 !== aI.h3(vV, vW) || b9.h3(vV,
			vW) || this.qt() : l1 < this.aTF || (l1 < this.jO - this.sN ? (this.aTJ = !0, this.aTI = (l0 - 2 * this.rk - this.aTB) / this.aTC, 3 !== this.e2 && (bc.de = !0)) : (vV = (vV = Math.floor(l0 / (this.a1 / this.a8X.length))) <
			0 ? 0 : vV >= this.a8X.length ? this.a8X.length - 1 : vV) !== this.e2 && (this.e2 = vV, this.aTL(), bc.de = !0)), !0)
	}, this.zp = function(l0, l1) {
		return this.aTK[0] = l0, this.aTK[1] = l1, !(!this.wp || !this.aTJ || (l0 -= bI.dn(au.a1 - this.a1, 2), l1 = this.aTI, this.aTI = (l0 - 2 * this.rk - this.aTB) / this.aTC, (0 <= this.aTI && this.aTI <= 1 || 0 <= l1 && l1 <= 1) && (bc
			.de = !0), 0))
	}, this.a0E = function() {
		this.aTJ && (this.aTJ = !1)
	}, this.a0Q = function() {
		this.wp ? this.qt() : this.show()
	}, this.show = function() {
		ba.aMt < 2 || (this.wp = !0, this.aTL())
	}, this.qt = function() {
		this.wp = !1, this.aTI = -1, bc.de = !0
	}, this.aTL = function() {
		this.e2 < 2 ? this.aTB = aM.measureText(b7.z3.xY(ba.max[this.e2]), b7.pZ.ri(0, this.aTG)) : 2 === this.e2 && (this.aTB = aM.measureText(b7.z3.a2E(6, 2), b7.pZ.ri(0, this.aTG))), this.aTC = this.a1 - 2 * this.rk - this.aTB - this.rl
	}, this.lY = function() {
		this.wp && this.aTL()
	}, this.t9 = function() {
		this.wp && this.a6U()
	}, this.a6U = function() {
		var ew = bI.dn(au.a1 - this.a1, 2),
			ey = bI.dn(au.jO - this.jO, 2);
		tA.setTransform(1, 0, 0, 1, ew, ey), tA.fillStyle = b8.mk, tA.fillRect(0, this.aTF, this.a1, this.jO - this.aTF), this.aTM(), this.aLk(), tA.strokeRect(0, 0, this.a1, this.jO), b7.pZ.textAlign(tA, 2), tA.font = b7.pZ.ri(0, this.aTG),
			0 === this.e2 ? this.aTN(ba.z7, ew, ey) : 1 === this.e2 ? this.aTN(ba.a1k, ew, ey) : 2 === this.e2 ? this.aTO(ew, ey) : 3 === this.e2 && (this.aTP(ew, ey), this.aTQ(ew, ey)), aI.a3v(Math.floor(ew + this.a1 - .725 * this.aTF), Math
				.floor(ey + .275 * this.aTF), Math.floor(.45 * this.aTF)), tA.setTransform(1, 0, 0, 1, 0, 0)
	}, this.aTM = function() {
		var a7, dm;
		for (tA.lineWidth = this.a5c, b7.pZ.textBaseline(tA, 1), b7.pZ.textAlign(tA, 1), tA.strokeStyle = b8.mn, tA.font = b7.pZ.ri(1, this.aTH), dm = this.a1 / this.a8X.length, tA.fillStyle = b8.n7, tA.fillRect(this.e2 * dm, this.jO - this.sN,
				dm, this.sN), tA.fillStyle = b8.mn, tA.fillRect(0, this.jO - this.sN - .5 * this.a5c, this.a1, this.a5c), a7 = 1; a7 <= 3; a7++) tA.fillRect(a7 * dm, this.jO - this.sN, this.a5c, this.sN);
		for (a7 = this.a8X.length - 1; 0 <= a7; a7--) tA.fillText(b7.wW.a1J(this.a8X[a7], 0, .9 * dm), (a7 + .5) * dm, this.jO - .46 * this.sN)
	}, this.aLk = function() {
		tA.fillStyle = b8.nS, tA.fillRect(0, 0, this.a1, this.aTF), tA.fillStyle = b8.mn, tA.fillRect(0, this.aTF - .5 * this.a5c, this.a1, this.a5c), tA.font = b7.pZ.ri(1, .39 * this.aTF), tA.fillText(b7.wW.a1J(L(407), 0, .8 * this.a1), Math
			.floor(this.a1 / 2), Math.floor(.55 * this.aTF))
	}, this.aTN = function(g, ew, ey) {
		var kf = ba.max[this.e2],
			a0j = (tA.setTransform(1, 0, 0, 1, ew + 2 * this.rk + this.aTB, ey + this.a6D + this.aTF), tA.lineWidth = 2, this.aTD / Math.sqrt(kf));
		tA.beginPath(), tA.moveTo(this.aTC, this.aTD - a0j * Math.sqrt(g[ba.aMt - 1]));
		for (var a7 = ba.aMt - 2; 0 <= a7; a7--) tA.lineTo(a7 * this.aTC / (ba.aMt - 1), this.aTD - a0j * Math.sqrt(g[a7]));
		tA.stroke();
		ew = this.a3v(g, a0j, .5);
		ew < .95 && tA.fillText(b7.z3.xY(kf), -this.rk, 0), .05 < Math.abs(ew - .5) && tA.fillText(b7.z3.xY(Math.floor(kf / 4)), -this.rk, Math.floor(this.aTD / 2)), .05 < ew && tA.fillText("0", -this.rk, this.aTD)
	}, this.aTO = function(ew, ey) {
		tA.setTransform(1, 0, 0, 1, ew + 2 * this.rk + this.aTB, ey + this.a6D + this.aTF), tA.lineWidth = 2;
		var a0j = this.aTD / Math.max(ba.max[this.e2], 1);
		tA.beginPath(), tA.moveTo(this.aTC, this.aTD - a0j * ba.a8u[ba.aMt - 1]);
		for (var a7 = ba.aMt - 2; 0 <= a7; a7--) tA.lineTo(a7 * this.aTC / (ba.aMt - 1), this.aTD - a0j * ba.a8u[a7]);
		tA.stroke();
		ew = this.a3v(ba.a8u, a0j, 1), ey = ba.max[this.e2] / 100;
		ew < .95 && tA.fillText(b7.z3.a2E(ey, 2), -this.rk, 0), .05 < Math.abs(ew - .5) && tA.fillText(b7.z3.a2E(ey / 2, 2), -this.rk, Math.floor(this.aTD / 2)), .05 < ew && tA.fillText(b7.z3.a2E(0, 2), -this.rk, this.aTD)
	}, this.aTP = function(ew, ey) {
		tA.setTransform(1, 0, 0, 1, ew + .34 * this.a1, ey + 2 * aTE + this.aTF), b7.pZ.textAlign(tA, 2);
		for (var a8I = this.jO - 4 * aTE - this.sN - this.aTF, g = [0, 1, 19, 2, 20, 3, 4, 5, 6, 7], a7 = 9; 0 <= a7; a7--) tA.fillText(b7.wW.a1J(ba.aT6[g[a7]], 0, .31 * this.a1), 0, a7 * a8I / 9);
		var fH = ba.lh;
		for (tA.setTransform(1, 0, 0, 1, ew + .39 * this.a1, ey + 2 * aTE + this.aTF), b7.pZ.textAlign(tA, 0), tA.fillText(b7.z3.a2E(100 * fH[0] / (1024 * Math.max(fH[1], 1)), 1), 0, 0), a7 = 8; 1 <= a7; a7--) tA.fillText(fH[g[a7]].toString(), 0,
			a7 * a8I / 9);
		tA.fillText(b7.z3.a2E(100 * (1 - ac.gd[a9.eZ] / fH[7]), 0), 0, a8I)
	}, this.aTQ = function(ew, ey) {
		tA.setTransform(1, 0, 0, 1, ew + .79 * this.a1, ey + 2 * aTE + this.aTF), b7.pZ.textAlign(tA, 2);
		var a7, a8I = this.jO - 4 * aTE - this.sN - this.aTF;
		for (tA.fillStyle = b8.n2, a7 = 2; 0 <= a7; a7--) tA.fillText(b7.wW.a1J(ba.aT6[a7 + 8], 0, .31 * this.a1), 0, a7 * a8I / 9);
		tA.fillText(b7.wW.a1J(ba.aT6[18], 0, .31 * this.a1), 0, 3 * a8I / 9), tA.fillStyle = b8.n1, tA.fillText(b7.wW.a1J(ba.aT6[11], 0, .31 * this.a1), 0, 4 * a8I / 9), tA.fillStyle = b8.nI, tA.fillText(b7.wW.a1J(ba.aT6[13], 0, .31 * this.a1),
				0, 5 * a8I / 9), tA.fillText(b7.wW.a1J(ba.aT6[15], 0, .31 * this.a1), 0, 6 * a8I / 9), tA.fillText(b7.wW.a1J(ba.aT6[16], 0, .31 * this.a1), 0, 7 * a8I / 9), tA.fillText(b7.wW.a1J(ba.aT6[12], 0, .31 * this.a1), 0, 8 * a8I / 9), tA
			.fillStyle = b8.nH, tA.fillText(b7.wW.a1J(ba.aT6[17], 0, .31 * this.a1), 0, a8I), tA.fillStyle = b8.n2;
		var fH = ba.lh,
			aLx = fH[8] + fH[9] + fH[10] + fH[18],
			aLx = b7.z3.xY(aLx),
			aKc = tA.measureText(aLx).width,
			ew = (tA.setTransform(1, 0, 0, 1, ew + .83 * this.a1 + aKc, ey + 2 * aTE + this.aTF), tA.fillText(b7.z3.xY(fH[8]), 0, 0), tA.fillText(b7.z3.xY(fH[9]), 0, a8I / 9), tA.fillText(b7.z3.xY(fH[10]), 0, 2 * a8I / 9), tA.fillText(b7.z3.xY(
				fH[18]), 0, 3 * a8I / 9), tA.fillStyle = b8.n1, tA.fillText(aLx, 0, 4 * a8I / 9), tA.fillStyle = b8.nI, tA.fillText(b7.z3.xY(fH[13]), 0, 5 * a8I / 9), tA.fillText(b7.z3.xY(fH[15]), 0, 6 * a8I / 9), tA.fillText(b7.z3.xY(fH[
				16]), 0, 7 * a8I / 9), tA.fillText(b7.z3.xY(fH[12]), 0, 8 * a8I / 9), fH[12] + fH[13] + fH[15] + fH[16]);
		tA.fillStyle = b8.nH, tA.fillText(b7.z3.xY(ew), 0, a8I), tA.fillStyle = b8.mn
	}, this.a3v = function(g, a0j, a75) {
		var a7, e, fX;
		return this.aTI < 0 || 1 < this.aTI ? .25 : (a7 = this.aTI * (ba.aMt - 1), fX = g[e = Math.floor(a7)], fX += (a7 - e) * (g[e < ba.aMt - 1 ? e + 1 : e] - fX), tA.strokeStyle = b8.mq, .04 < this.aTI && this.aTS(0, this.aTD - a0j * Math.pow(
				fX, a75), a7 * this.aTC / (ba.aMt - 1), this.aTD - a0j * Math.pow(fX, a75)), .04 < fX / ba.max[this.e2] && this.aTS(a7 * this.aTC / (ba.aMt - 1), this.aTD, a7 * this.aTC / (ba.aMt - 1), this.aTD - a0j * Math.pow(fX, a75)), tA
			.fillStyle = b8.nK, tA.beginPath(), tA.arc(a7 * this.aTC / (ba.aMt - 1), this.aTD - a0j * Math.pow(fX, a75), Math.max(2, .014 * this.jO), 0, 2 * Math.PI), tA.fill(), g = this.aTI * bc.a8w, g = 0 === ac.ll[a9.eZ] ? Math.floor(g *
				ba.aT5) : Math.floor(g * bc.jr()), tA.fillStyle = b8.mn, tA.fillText(1 === a75 ? b7.z3.a2E(fX / 100, 2) : b7.z3.xY(Math.floor(fX)), -this.rk, this.aTD - a0j * Math.pow(fX, a75)), b7.pZ.textAlign(tA, 1), tA.fillText(aS.a8l(g),
				a7 * this.aTC / (ba.aMt - 1), this.aTD + this.aTG - (u.v.sU() ? 2 : 0) - this.a5c), b7.pZ.textAlign(tA, 2), a0j * Math.pow(fX, a75) / this.aTD)
	}, this.aTS = function(mD, mE, mQ, mR) {
		tA.beginPath(), tA.moveTo(mD, mE), tA.lineTo(mQ, mR), tA.stroke()
	}
}

function bt() {
	this.aTT = "https://", this.aTU = this.aTT + "territorial.io/", this.aMu = this.aTU + "changelog", this.aMy = this.aTU + "terms", this.aTV = this.aTU + "cookie_policy", this.aMK = this.aTU + "privacy", this.aMx = this.aTU + "tutorial", this.aMw =
		this.aTU + "players", this.aMv = this.aTU + "clans", this.z9 = this.aTU + "clan-results", this.aA7 = this.aTT + "play.google.com/store/apps/details?id=territorial.io", this.zN = this.aTT + "apps.apple.com/app/id1581110913", this.aTW = this
		.aTT + "www.youtube.com/watch?v=toZTQ8aRdFc", this.aA8 = this.aTT + "discord.gg/pthqvpTXmh", this.aA9 = this.aTT + "www.instagram.com/davidtschacher/", this.x8 =
		"🇦🇫🇦🇽🇦🇱🇩🇿🇦🇸🇦🇩🇦🇴🇦🇮🇦🇶🇦🇬🇦🇷🇦🇲🇦🇼🇦🇺🇦🇹🇦🇿🇧🇸🇧🇭🇧🇩🇧🇧🇧🇾🇧🇪🇧🇿🇧🇯🇧🇲🇧🇹🇧🇴🇧🇦🇧🇼🇧🇷🇮🇴🇻🇬🇧🇳🇧🇬🇧🇫🇧🇮🇨🇻🇰🇭🇨🇲🇨🇦🇮🇨🇰🇾🇨🇫🇹🇩🇨🇱🇨🇳🇨🇽🇨🇨🇨🇴🇰🇲🇨🇬🇨🇩🇨🇷🇭🇷🇨🇺🇨🇼🇨🇾🇨🇿🇩🇰🇩🇯🇩🇲🇩🇴🇪🇨🇪🇬🇸🇻🇬🇶🇪🇷🇪🇪🇸🇿🇪🇹🇪🇺🇫🇰🇫🇴🇫🇯🇫🇮🇫🇷🇬🇫🇵🇫🇹🇫🇬🇦🇬🇲🇬🇪🇩🇪🇬🇭🇬🇮🇬🇷🇬🇱🇬🇩🇬🇵🇬🇺🇬🇹🇬🇬🇬🇳🇬🇼🇬🇾🇭🇹🇭🇳🇭🇰🇭🇺🇮🇸🇮🇳🇮🇩🇮🇷🇮🇶🇮🇪🇮🇲🇮🇱🇮🇹🇨🇮🇯🇲🇯🇵🇯🇪🇯🇴🇰🇿🇰🇪🇰🇮🇽🇰🇰🇼🇰🇬🇱🇦🇱🇻🇱🇧🇱🇸🇱🇷🇱🇾🇱🇮🇱🇹🇱🇺🇲🇴🇲🇰🇲🇬🇲🇼🇲🇾🇲🇻🇲🇱🇲🇹🇲🇭🇲🇶🇲🇷🇲🇺🇾🇹🇲🇽🇫🇲🇲🇩🇲🇨🇲🇳🇲🇪🇲🇸🇲🇦🇲🇿🇲🇲🇳🇦🇳🇷🇳🇵🇳🇱🇳🇨🇳🇿🇳🇮🇳🇪🇳🇬🇳🇺🇳🇫🇰🇵🇲🇵🇳🇴🇴🇲🇵🇰🇵🇼🇵🇸🇵🇦🇵🇬🇵🇾🇵🇪🇵🇭🇵🇱🇵🇹🇵🇷🇶🇦🇷🇴🇷🇺🇷🇼🇼🇸🇸🇲🇸🇹🇸🇦🇸🇳🇷🇸🇸🇨🇸🇱🇸🇬🇸🇽🇸🇰🇸🇮🇸🇧🇸🇴🇿🇦🇬🇸🇰🇷🇸🇸🇪🇸🇱🇰🇧🇱🇸🇭🇰🇳🇱🇨🇲🇫🇵🇲🇻🇨🇸🇩🇸🇷🇸🇪🇸🇾🇨🇭🇹🇼🇹🇯🇹🇿🇹🇭🇹🇱🇹🇬🇹🇰🇹🇴🇹🇹🇹🇳🇹🇷🇹🇲🇹🇨🇹🇻🇺🇬🇺🇦🇦🇪🇬🇧🇺🇳🇺🇸🇻🇮🇺🇾🇺🇿🇻🇺🇻🇦🇻🇪🇻🇳🇼🇫🇪🇭🇾🇪🇿🇲🇿🇼"
}

function d3() {
	this.s = new aTX, this.wT = new aTY, this.dW = function() {
		this.s.dW()
	}, this.il = function() {
		0 !== this.s.a4z && this.s.a4z--
	}
}

function aTY() {
	this.t9 = function() {
		if (0 !== bM.s.a4z && (tA.globalAlpha = Math.min(bM.s.a4z / 580, 1), tA.drawImage(bM.s.aTb, 1 + aO.wR(), 1 + aO.wS()), tA.globalAlpha = 1, a9.hB)) {
			for (var mD = iC / iD, mE = iE / iD, mQ = (au.a1 + iC) / iD, mR = (au.jO + iE) / iD, gO = bM.s.aTc * iD, aTd = bM.s.aTd, a7 = a9.ju - 1; 0 <= a7; a7--) ! function(a7, gO, mD, mE, mQ, mR, aTd) {
				var highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[a7];
				if (highlight) gO *= 2;
				0 === ac.ll[a7] || 0 === ac.gd[a7] || (mQ = au.a1 * ((ac.iQ[a7] + ac.iR[a7] + 1) / 2 - mD) / (mQ - mD) - .5 * gO, mD = au.jO * ((ac.iS[a7] + ac.iT[a7] + 1) / 2 - mE) / (mR - mE) - .5 * gO, mQ > au.a1) || mD > au.jO || mQ < -
					gO || mD < -gO || (tA.setTransform(highlight ? iD * 2 : iD, 0, 0, highlight ? iD * 2 : iD, mQ, mD), tA.drawImage(aTd[a9.ix ? bd.en[a7] : 1], 0, 0))
			}(a7, gO, mD, mE, mQ, mR, aTd);
			tA.setTransform(iD, 0, 0, iD, 0, 0)
		}
	}
}

function aTX() {
	this.aTc = 28, this.a4z = 0, this.aTb = null;
	var aTf = this.aTd = null;

	function aTi(hS, aTj) {
		var ew, ey, eb, hx, a17 = b7.pZ.uk(hS, hS),
			hY = b7.pZ.getContext(a17, !0),
			hV = b7.pZ.getImageData(hY, hS, hS),
			uv = hV.data,
			kf = (hS >> 1) - .5,
			aTk = .5 + kf;
		for (aTk *= aTk, ey = 0; ey < hS; ey++)
			for (ew = 0; ew < hS; ew++) hx = (hx = ew - kf) * hx + (hx = ey - kf) * hx, uv[eb = 4 * (ey * hS + ew)] = aTj[0], uv[1 + eb] = aTj[1], uv[2 + eb] = aTj[2], uv[3 + eb] = (aTk - hx) * aTj[3] / aTk;
		return hY.putImageData(hV, 0, 0), a17
	}

	function aSp(a7, hY, a17, hS) {
		var ew, y, highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[a7];
		if (highlight) hS *= 2;
		0 !== ac.ll[a7] && 0 !== ac.gd[a7] && (ew = ac.iQ[a7] + ac.iR[a7] + 1 - hS - 2 >> 1, y = ac.iS[a7] + ac.iT[a7] + 1 - hS - 2 >> 1,
			highlight ? hY.drawImage(a17[a9.ix ? bd.en[a7] : a7 < a9.ju ? 1 : 0], ew, y, hS, hS) :
			hY.drawImage(a17[a9.ix ? bd.en[a7] : a7 < a9.ju ? 1 : 0], ew, y))
	}
	this.dW = function() {
		var rD;
		this.a4z = 700,
			function(rD) {
				var hS = rD.aTc;
				if (rD.aTd = [], aTf = [], a9.ix)
					for (var a7 = 0; a7 <= a9.va; a7++) rD.aTd.push(aTi(hS, bd.aRg[bd.kK[a7]])), aTf.push(aTi(hS >> 1, bd.aRg[bd.kK[a7]]));
				else rD.aTd.push(aTi(hS, bd.aRg[7])), rD.aTd.push(aTi(hS, bd.aRg[4])), aTf.push(aTi(hS >> 1, bd.aRg[7]))
			}(this),
			function(rD, aTl) {
				var a7, aTb = rD.aTb,
					hY = b7.pZ.getContext(aTb, !0),
					ep = a9.em,
					hS = rD.aTc >> 1;
				hY.imageSmoothingEnabled = !1, hY.setTransform(1, 0, 0, 1, 0, 0), aTl && hY.clearRect(0, 0, aTb.width, aTb.height);
				for (a7 = a9.ju; a7 < ep; a7++) aSp(a7, hY, aTf, hS)
			}(this, null !== (rD = this).aTb && rD.aTb.width === bP.f0 - 2 && rD.aTb.height === bP.f1 - 2 || (rD.aTb = b7.pZ.uk(bP.f0 - 2, bP.f1 - 2), !1)), a9.hB || this.a2W()
	}, this.aRf = aTi, this.a2W = function() {
		for (var ep = a9.ju, hS = this.aTc, aTd = this.aTd, hY = b7.pZ.getContext(this.aTb, !0), a7 = 0; a7 < ep; a7++) aSp(a7, hY, aTd, hS)
	}
}

function d4() {
	function aTm(player) {
		a9.hB ? (ag.aDa(player), ah.aGU(), a9.kG && a9.or.il()) : b0.aAK(player)
	}
	this.oG = function(player) {
		return !!aI.a3u(player) && (aJ.yR(player, player === a9.eZ ? 21 : 22), aTm(player), !0)
	}, this.oo = function(player) {
		1 === a9.yF && 0 !== ac.ll[player] && 2 !== ac.a1d[player] && aTm(player), a9.yI--, a9.yH--, aJ.yR(player, 4), b7.gB.h1(2) && aS.lX(!0)
	}
}

function dE() {
	this.aPF = ["rgba(90,90,90,0.88)", "rgba(130,12,12,0.88)", "rgba(12,130,12,0.88)", "rgba(12,12,130,0.88)", "rgba(130,130,12,0.88)", "rgba(130,12,130,0.88)", "rgba(12,130,130,0.88)", "rgba(130,130,130,0.88)", "rgba(0,0,0,0.88)"], this.a8G = [
		"rgb(210,200,200)", "rgb(255,120,120)", "rgb(0,230,0)", "rgb(150,150,255)", "rgb(240,240,25)", "rgb(255,70,255)", "rgb(25,240,240)", b8.mn, "rgb(170,170,170)"
	], this.aTn = [b8.mn, "rgb(255,0,0)", "rgb(0,255,0)", "rgb(0,0,255)", "rgb(255,255,0)", "rgb(255,0,255)", "rgb(0,255,255)", b8.mn, b8.me], this.aTo = [b8.me, b8.mn, b8.mn, b8.mn, b8.me, b8.me, b8.me, b8.me, b8.mn];
	var aTp = ["255,255,255", "0,0,0", "255,4,4", "200,4,4", "4,255,4", "4,180,4", "255,195,195", "90,3,3", "200,255,200", "3,84,3"],
		aTq = (this.aFz = ["rgba(" + aTp[0] + ",", "rgba(" + aTp[1] + ",", "rgba(" + aTp[2] + ",", "rgba(" + aTp[3] + ",", "rgba(" + aTp[4] + ",", "rgba(" + aTp[5] + ",", "rgba(" + aTp[6] + ",", "rgba(" + aTp[7] + ",", "rgba(" + aTp[8] + ",",
			"rgba(" + aTp[9] + ","
		], this.aG0 = ["rgb(" + aTp[0] + ")", "rgb(" + aTp[1] + ")", "rgb(" + aTp[2] + ")", "rgb(" + aTp[3] + ")", "rgb(" + aTp[4] + ")", "rgb(" + aTp[5] + ")", "rgb(" + aTp[6] + ")", "rgb(" + aTp[7] + ")", "rgb(" + aTp[8] + ")", "rgb(" + aTp[
			9] + ")"
		], this.yb = null, this.aRg = [
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
	this.kK = [0, 1, 2, 3, 4, 5, 6, 7, 8], this.en = new Uint8Array(a9.em), this.yz = null, this.aTr = null, this.vg = new Uint16Array(a9.em), this.vh = new Uint16Array(this.kK.length + 1), this.vi = new Uint16Array(this.kK.length), this.dX =
		function() {
			this.yb = [L(408), L(409), L(410), L(411), L(412), L(413), L(414), L(415), L(416)]
		}, this.dW = function() {
			if (this.en.fill(0), this.aTs(), a9.ix) {
				9 === a9.kE ? this.aTt() : a9.kG ? function() {
					var colorsData = a9.data.colorsData;
					if (!a9.data.selectableColor)
						for (var a7 = a9.ju - 1; 0 <= a7; a7--) colorsData[a7] = av.jC(262144);
					var aU2 = 0,
						f5 = 768,
						aOm = [4 * (colorsData[0] >> 12), 4 * (colorsData[0] >> 6 & 63), 4 * (63 & colorsData[0])],
						teamPlayerCount = a9.data.teamPlayerCount;
					for (a7 = 0; a7 < 9; a7++)
						if (teamPlayerCount[a7]) {
							for (var es = 0, f9 = 0; f9 < 3; f9++) es += Math.abs(aTq[a7][f9] - aOm[f9]);
							es < f5 && (aU2 = a7, f5 = es)
						} var aU3 = new Uint16Array(9);
					for (a7 = 0; a7 < 9; a7++) aU3[a7] = teamPlayerCount[a7];
					var kK = bd.kK,
						aU4 = new Uint8Array(9),
						gI = (kK[0] = 0, 1);
					for (a7 = 1; a7 < 9; a7++) aU3[a7] && (aU4[a7] = gI, kK[gI++] = a7);
					var jB = a9.ju,
						en = bd.en;
					aU3[aU2] ? (aU3[aU2]--, en[0] = aU4[aU2]) : jB = 0;
					var fA = 0;
					for (a7 = jB; a7 < a9.vT; a7++) {
						var kJ = kK[fA];
						if (aU3[kJ]) aU3[kJ]--, en[a7] = aU4[kJ];
						else if (a7--, 9 <= ++fA) return console.log("error 325")
					}
				}() : this.il();
				for (var ep = a9.em, vg = bd.vg, vh = bd.vh, vi = bd.vi, en = bd.en, kK = bd.kK, vZ = kK.length, dr = new Array(vZ), a7 = 0; a7 < vZ; a7++) dr[a7] = [];
				for (a7 = 0; a7 < ep; a7++) dr[kK[en[a7]]].push(a7);
				for (a7 = 1; a7 <= vZ; a7++) vh[a7] = vh[a7 - 1] + dr[a7 - 1].length;
				for (a7 = 0; a7 < vZ; a7++)
					for (var gI = dr[a7].length, kf = vh[a7], kJ = 0; kJ < gI; kJ++) vg[kJ + kf] = dr[a7][kJ];
				var ju = a9.ju;
				for (a7 = 0; a7 < vZ; a7++)
					for (gI = dr[a7].length, kf = vh[a7], kJ = 0; kJ < gI; kJ++)
						if (vg[kJ + kf] >= ju) {
							vi[a7] = kJ;
							break
						}
			}
		}, this.aTs = function() {
			for (var a7 = this.kK.length - 1; 0 <= a7; a7--) this.kK[a7] = a7;
			this.yz = [], this.aTr = []
		}, this.aTt = function() {
			for (var a7 = a9.data.teamPlayerCount[7] - 1; 0 <= a7; a7--) this.en[a7] = 1;
			for (a7 = a9.data.teamPlayerCount[7]; a7 < a9.em; a7++) this.en[a7] = 2;
			this.kK[1] = 7, this.kK[2] = 8
		}, this.il = function() {
			var hg = new Uint8Array(a9.ju),
				hh = new Uint8Array(a9.ju),
				aTw = new Uint16Array(8),
				aTx = new Uint16Array(this.kK.length);
			this.aTy(hg, hh, aTw, 1), this.aDD(aTw), this.aTz(aTx, hg, hh), this.aU0(hg, hh, aTx), this.aU1()
		}, this.aTy = function(hg, hh, aU3, aU5) {
			for (var f9, e, aU6, ep = this.kK.length - aU5, g = new Uint16Array(ep), colorsData = a9.data.colorsData, a7 = a9.ju - 1; 0 <= a7; a7--) {
				for (f9 = ep; aU5 <= f9; f9--) g[f9 - 1] = Math.abs(4 * (colorsData[a7] >> 12) - aTq[f9][0]) + Math.abs(4 * (colorsData[a7] >> 6 & 63) - aTq[f9][1]) + Math.abs(4 * (63 & colorsData[a7]) - aTq[f9][2]);
				for (aU6 = 768, f9 = ep - 1; 0 <= f9; f9--) g[e = (f9 + a7) % ep] < aU6 && (aU6 = g[e], hg[a7] = e);
				for (aU3[hg[a7]] += 4, aU6 = 768, f9 = ep - 1; 0 <= f9; f9--) g[e = (f9 + a7) % ep] < aU6 && e !== hg[a7] && (aU6 = g[e], hh[a7] = e);
				aU3[hh[a7]]++
			}
		}, this.aDD = function(aU3) {
			for (var f9, kh, ep = this.kK.length - 1, a7 = ep; 0 <= a7; a7--) this.kK[a7] = a7;
			for (a7 = ep - 1; 0 <= a7; a7--) aU3[a7]++;
			for (a7 = 1; a7 <= ep; a7++) {
				for (kh = 0, f9 = 1; f9 < ep; f9++) aU3[f9] > aU3[kh] && (kh = f9);
				aU3[kh] = 0, this.kK[a7] = kh + 1
			}
		}, this.aTz = function(aTx, hg, hh) {
			var f9, aAx, fA, es, e, mP, rx, aU7 = this.kK.length - 1,
				q4 = new Uint16Array(aU7),
				aU8 = [],
				aU9 = 0;
			loop: for (var a7 = 0; a7 < a9.ju; a7++)
				if (null !== (aAx = b7.z3.z4(ac.z5[a7]))) {
					for (f9 = this.yz.length - 1; 0 <= f9; f9--)
						if (aAx === this.yz[f9]) {
							this.aTr[f9].push(a7), aU9 = Math.max(aU9, this.aTr[f9].length);
							continue loop
						} this.yz.push(aAx), aU8.push(!1), this.aTr.push([a7]), aU9 = Math.max(aU9, 1)
				}
			for (; 2 < a9.va && aU9 > bI.dn(a9.ju, a9.va);) a9.va--, a9.kE--;
			for (f9 = this.yz.length - 1; 0 <= f9; f9--) {
				for (es = -1, fA = this.yz.length - 1; 0 <= fA; fA--) !aU8[fA] && (-1 === es || this.aTr[fA].length > this.aTr[es].length) && (es = fA);
				for (fA = aU7 - 1; 0 <= fA; fA--) q4[fA] = 1;
				for (fA = this.aTr[es].length - 1; 0 <= fA; fA--) q4[hg[this.aTr[es][fA]]] += 3, q4[hh[this.aTr[es][fA]]]++;
				for (a7 = aU7 - 1; 0 <= a7; a7--) {
					for (e = es % aU7, fA = aU7 - 1; 0 <= fA; fA--) q4[fA] > q4[e] && (e = fA);
					for (mP = -1, fA = a9.va; 0 < fA; fA--)
						if (this.kK[fA] === e + 1) {
							mP = fA;
							break
						} if (q4[e] = 0, -1 !== mP) {
						for (rx = 0, fA = a9.va; 0 < fA; fA--) aTx[mP] > aTx[fA] && rx++;
						if (rx !== a9.va - 1) {
							for (fA = this.aTr[es].length - 1; 0 <= fA; fA--) aTx[mP]++, this.en[this.aTr[es][fA]] = mP;
							break
						}
					}
				}
				aU8[es] = !0
			}
		}, this.aU0 = function(hg, hh, aTx) {
			for (var a7, hw, ep = this.kK.length - 1, border = bI.dn(a9.ju, a9.va), aUA = (0 < a9.ju % a9.va && border++, new Uint8Array(1 + ep)), f9 = ep; 1 <= f9; f9--) aUA[this.kK[f9]] = f9;
			for (a7 = 0; a7 < a9.ju; a7++) hw = aUA[hg[a7] + 1], 0 === this.en[a7] && hw <= a9.va && aTx[hw] < border && (aTx[hw]++, this.en[a7] = hw);
			for (a7 = 0; a7 < a9.ju; a7++) hw = aUA[hh[a7] + 1], 0 === this.en[a7] && hw <= a9.va && aTx[hw] < border && (aTx[hw]++, this.en[a7] = hw);
			for (f9 = a9.va; 1 <= f9; f9--)
				for (a7 = a9.ju - 1; 0 <= a7 && !(aTx[f9] >= border); a7--) 0 === this.en[a7] && (aTx[f9]++, this.en[a7] = f9)
		}, this.aU1 = function() {
			for (var a7 = a9.ju; a7 < a9.em; a7++) this.en[a7] = 1 + a7 % a9.va
		}
}

function ge() {
	for (var ew, ey, a7 = fk - 1; 0 <= a7; a7--) ew = bI.dn(fm[a7], 4) % bP.f0, ey = bI.dn(fm[a7], 4 * bP.f0), ac.iQ[ff] = ac.iQ[ff] > ew ? ew : ac.iQ[ff], ac.iS[ff] = ac.iS[ff] > ey ? ey : ac.iS[ff], ac.iR[ff] = ac.iR[ff] < ew ? ew : ac.iR[ff], ac
		.iT[ff] = ac.iT[ff] < ey ? ey : ac.iT[ff]
}

function fz() {
	var es, gN, a7, ep = ac.gH[ff].length,
		er = aY.er;
	loop: for (a7 = ep - 1; 0 <= a7; a7--) {
		for (es = 3; 0 <= es; es--)
			if (gN = ac.gH[ff][a7] + er[es], aY.eg(gN) || aY.gP(gN) && aY.eh(gN) !== ff) {
				aY.j7(ac.gH[ff][a7], ff);
				continue loop
			} ac.gH[ff][a7] = ac.gH[ff][ep - 1], ac.gH[ff].pop(), ep--
	}
}

function g0() {
	var player = ff,
		gV = ac.gV,
		gW = ac.gW,
		fF = ac.fF,
		ep = gV[player].length,
		er = aY.er;
	loop: for (var a7 = ep - 1; 0 <= a7; a7--) {
		for (var aUB = !1, aUC = !1, es = 3; 0 <= es; es--) {
			var gN = gV[player][a7] + er[es];
			if (aY.aDN(gN, player)) continue loop;
			aUB = aUB || aY.hI(gN), aUC = aUC || aY.aDM(gN)
		}
		aUB ? gW[player].push(gV[player][a7]) : aUC ? fF[player].push(gV[player][a7]) : aY.w2(gV[player][a7], player), gV[player][a7] = gV[player][ep - 1], gV[player].pop(), ep--
	}
}

function gT() {
	ac.gd[fj] -= fk
}

function gU(border) {
	for (var ep = border.length, a7 = ep - 1; 0 <= a7; a7--) aY.wM(fj, border[a7]) || (border[a7] = border[ep - 1], border.pop(), ep--)
}

function gX(border) {
	for (var ep = border.length, a7 = ep - 1; 0 <= a7; a7--) !aY.wM(fj, border[a7]) && aY.ek(border[a7]) && (border[a7] = border[ep - 1], border.pop(), ep--)
}

function gY(border) {
	for (var es, gN, ep = border.length, er = aY.er, a7 = ep - 1; 0 <= a7; a7--)
		for (es = 3; 0 <= es; es--)
			if (gN = border[a7] + er[es], aY.aDN(gN, fj)) {
				ac.gV[fj].push(border[a7]), border[a7] = border[ep - 1], border.pop(), ep--;
				break
			}
}

function gZ() {
	for (var es, gN, er = aY.er, a7 = fk - 1; 0 <= a7; a7--)
		for (es = 3; 0 <= es; es--) gN = fm[a7] + er[es], aY.aDO(fj, gN) && aY.aDP(gN) && (ac.gV[fj].push(gN), aY.gK(gN, fj))
}

function ga() {
	var ew, ey;
	loop: for (; ac.iS[fj] < ac.iT[fj];) {
		for (ew = ac.iR[fj]; ew >= ac.iQ[fj]; ew--)
			if (aY.wM(fj, 4 * (ac.iS[fj] * bP.f0 + ew))) break loop;
		ac.iS[fj]++
	}
	loop: for (; ac.iS[fj] < ac.iT[fj];) {
		for (ew = ac.iR[fj]; ew >= ac.iQ[fj]; ew--)
			if (aY.wM(fj, 4 * (ac.iT[fj] * bP.f0 + ew))) break loop;
		ac.iT[fj]--
	}
	loop: for (; ac.iQ[fj] < ac.iR[fj];) {
		for (ey = ac.iT[fj]; ey >= ac.iS[fj]; ey--)
			if (aY.wM(fj, 4 * (ey * bP.f0 + ac.iQ[fj]))) break loop;
		ac.iQ[fj]++
	}
	loop: for (; ac.iQ[fj] < ac.iR[fj];) {
		for (ey = ac.iT[fj]; ey >= ac.iS[fj]; ey--)
			if (aY.wM(fj, 4 * (ey * bP.f0 + ac.iR[fj]))) break loop;
		ac.iR[fj]--
	}
}

function ei(player, j3) {
	return 0 === bd.en[player] || bd.en[player] !== bd.en[j3]
}

function hO(player, j3) {
	for (var e, aUD = aZ.fv(player), a7 = 0; a7 < aUD; a7++)
		if (0 === aZ.fw(player, a7))
			if ((e = aZ.g1(player, a7)) === a9.em) {
				if (j3 === a9.em) return !1;
				if (hM(j3)) return !0
			} else if (b7.gB.kj(e))
		if (j3 === a9.em) {
			if (hM(e)) return !0
		} else if (hQ(j3, e)) return !0;
	return !1
}

function hM(player) {
	for (var a7, gO, ep = ac.gV[player].length, er = aY.er, es = 3; 0 <= es; es--)
		for (gO = er[es], a7 = 0; a7 < ep; a7++)
			if (aY.eg(ac.gV[player][a7] + gO)) return !0;
	return !1
}

function aDW(player) {
	for (var a7, gO, ep = ac.gV[player].length, er = aY.er, es = 3; 0 <= es; es--)
		for (gO = er[es], a7 = 0; a7 < ep; a7++)
			if (aY.j6(ac.gV[player][a7]) && aY.eg(ac.gV[player][a7] + gO)) return !0;
	return !1
}

function hQ(a1g, a1h) {
	for (var a7, dm, gO, gN, aRs = ac.gV[a1g].length, aRt = ac.gV[a1h].length, er = (aRt < aRs && (dm = a1g, a1g = a1h, a1h = dm, dm = aRs, aRs = aRt, 0), aY.er), es = 3; 0 <= es; es--)
		for (gO = er[es], a7 = 0; a7 < aRs; a7++)
			if (gN = ac.gV[a1g][a7] + gO, aY.gP(gN) && aY.eh(gN) === a1h) return !0;
	return !1
}

function aDX(a1g, a1h) {
	for (var a7, gO, gN, aRs = ac.gV[a1g].length, er = aY.er, es = 3; 0 <= es; es--)
		for (gO = er[es], a7 = 0; a7 < aRs; a7++)
			if (aY.j6(ac.gV[a1g][a7]) && (gN = ac.gV[a1g][a7] + gO, aY.gP(gN)) && aY.eh(gN) === a1h) return !0;
	return !1
}

function dR() {
	this.p1 = new aUE
}

function aUE() {
	this.hL = function(player) {
		b7.gB.a1e(player) && aJ.yd(80, L(417), 637, 0, b8.nV, b8.mk, -1, !1)
	}, this.a3W = function() {
		aJ.yd(80, L(418), 637, 0, b8.nV, b8.mk, -1, !1)
	}, this.o4 = function(player) {
		b7.gB.a1e(player) && aJ.yd(80, L(419), 637, 0, b8.nV, b8.mk, -1, !1)
	}
}

function aUF() {
	this.aUG = 0, this.il = function() {
		aK.il(), aV.il(), au.il(), ax.s.il(), at.aCi(), bc.de && (bc.de = !1, aW.t9())
	}
}

function aUH() {
	this.eO = bc.eO, this.e2 = 0, this.aUG = 0, this.aCf = 0, this.aUI = null, this.aUJ = 7, this.a50 = 0, this.dW = function() {
		this.aCf = 0, this.aUI = [], this.e2 = 0, this.aUG = 0
	}, this.aOD = function(a8) {
		var a7;
		if (a9.hB) this.a8x(a8);
		else if (this.aUI.push(a8), 2 === a9.yF) {
			for (a7 = 0; a7 < this.aUI.length; a7++) b5.nt.il(this.aUI[a7]);
			this.aUI = []
		}
	}, this.a8x = function(a8) {
		b5.nt.il(a8), b6.il(), aS.a8x(this.aCf), this.aCf === a9.a2c ? (a9.or.il(), this.aCf = 0, this.e2 = 0, this.aUG = 0, this.eO = bc.eO) : (this.aCf++, ab.a2V(), ab.lX(!0), bY.a9V())
	}, this.il = function() {
		au.il(), a9.hB ? (bc.de = aS.a8x(-1) || bc.de, lZ()) : (0 !== this.e2 || bc.eO >= this.eO && (this.eO += bc.a8w * Math.floor(1 + (bc.eO - this.eO) / bc.a8w), 2 === a9.yF ? lO() : this.aUK(), this.e2++, 27 < bc.eO - this.a50)) && this
		.aUL(), lU(), bc.de && (bc.de = !1, wP()), this.a50 = bc.eO
	}, this.aUL = function() {
		bc.de = !0, lW(), this.e2 = 0
	}, this.aUK = function() {
		var tm, a7;
		if (this.aUG !== 7 * this.aCf) lQ(), bY.a9V();
		else {
			tm = !1;
			loop: for (; this.aUM() && (tm = !0, lQ(), 2 !== a9.yF) && 0 < this.aUI.length;)
				for (a7 = this.aUJ - 2; 0 <= a7; a7--)
					if (lQ(), 2 === a9.yF) break loop;
			tm ? bY.a9V() : (lO(), bY.a2Y())
		}
	}, this.aUM = function() {
		return 0 < this.aUI.length && (this.aCf++, b5.nt.il(this.aUI[0]), this.aUI.shift(), !0)
	}
}

function aUN() {
	var aUO, aUP, aUQ, aCf, aUR, e2 = 0,
		eO = bc.eO;

	function aUU() {
		! function() {
			if (!a9.hB) return;
			if (a9.kG) return;
			if (aUR % 7 != 0) aUR++;
			else if (aCf === a9.a2c) {
				if (!aUX()) return;
				aS.a8x(aCf), a9.or.il()
			} else {
				if (!aUX()) return;
				aUR++, aCf++, ab.a2V(), ab.lX(!0)
			}
			return 1
		}() && aUX() && lQ()
	}

	function aUV() {
		e2 = 0, (a9.hB ? (bc.de = aS.a8x(aCf - (aUR % 7 == 0 ? 0 : 1) + aUR % 7 / 7) || bc.de, lZ) : aI.h0 || !b9.a2y ? lZ : (bc.de = !0, lW))()
	}

	function aUX() {
		var a7, ep, aUY = b6.op.aPP,
			fX = b6.op.aPQ,
			fZ = b6.op.aPR,
			fb = b6.op.aPS,
			aUZ = b6.op.aPT,
			aUa = b6.op.aPU;
		if (!(aUO >= aUa.length)) {
			if (aUa = aUa[aUO], aUZ[aUO]) {
				for (ep = aUP + aUa, a7 = aUP; a7 < ep; a7++) b5.nt.ob(aUY[a7], fX[a7], fZ[a7], fb[a7]);
				aUP += aUa, aUO++
			} else ++aUQ >= aUa && (aUO++, aUQ = 0);
			return 1
		}
		aJ.zZ("Replay file smaller than expected."), b9.a0R(!1), a9.yF = 2
	}
	this.aUG = 0, this.dW = function() {
		aUR = aCf = aUQ = aUP = aUO = 0
	}, this.il = function() {
		var aSF;
		au.il(), b9.a6P() < 1.7 ? 0 === e2 ? bc.eO >= eO && (aSF = bc.a8w / b9.a6P(), eO += aSF * Math.floor(1 + (bc.eO - eO) / aSF), 2 === a9.yF || aI.h0 || !b9.a2y ? lO() : (aUU(), bY.a9V()), e2++) : aUV() : function() {
			var aSF;
			if (bc.eO >= eO)
				if (2 === a9.yF || aI.h0 || !b9.a2y) lO(), eO = bc.eO;
				else {
					for (aSF = bc.a8w / b9.a6P(), 16 < (bc.eO - eO) / aSF && (eO = bc.eO - 16 * aSF); bc.eO >= eO && 2 !== a9.yF;) eO += aSF, aUU();
					bY.a9V()
				} aUV()
		}(), lU(), bc.de && (bc.de = !1, wP())
	}, this.yP = function() {
		aUO !== b6.op.aPU.length && aUO + 1 !== b6.op.aPU.length && aJ.zZ("Replay file larger than expected.")
	}
}

function aUb() {
	var e2 = 0,
		eO = bc.eO;
	this.aUG = 0, this.il = function() {
		au.il(), a9.hB ? lZ() : 0 === e2 ? bc.eO >= eO && (eO += bc.a8w * Math.floor(1 + (bc.eO - eO) / bc.a8w), 2 === a9.yF || aI.h0 ? lO() : (lQ(), bY.a9V()), e2++) : ((aI.h0 ? lZ : (bc.de = !0, lW))(), e2 = 0), lU(), bc.de && (bc.de = !1,
		wP())
	}
}

function dM() {
	this.yO = null, this.de = !1, this.eO = 0, this.a8w = 56;
	var aUc = 0;

	function aUd() {
		bc.eO = aUc = performance.now(), bc.yO.il(), window.requestAnimationFrame(aUd)
	}
	this.dW = function() {
		this.a2w(), window.requestAnimationFrame(aUd), this.eO = performance.now()
	}, this.a2n = function() {
		a9.gz ? (this.yO = new aUN, this.yO.dW()) : a9.kG ? this.yO = new aUb : (this.yO = new aUH, this.yO.dW())
	}, this.a2w = function() {
		this.yO = new aUF, this.de = !0
	}, this.il = function() {
		this.yO.aUG++
	}, this.jr = function() {
		return this.yO.aUG
	}, this.aNq = function() {
		var dm = performance.now();
		dm < aUc + 1e3 || (this.eO = dm, this.yO.il())
	}
}

function co() {
	var ly = 0,
		aUe = !0;

	function aUg(pG) {
		8 !== aW.zS() || 2 !== ac.a1d[a9.eZ] && (0 !== ac.ll[a9.eZ] || a9.hB) || aJ.a4h(pG)
	}
	this.il = function() {
		var dm, a53;
		bc.eO > ly && (ly = bc.eO + 2500, dm = new Date, a53 = dm.getUTCSeconds(), aUe ? a53 < 45 && (aUe = !1) : a53 < 45 || (aUe = !0, (a53 = dm.getUTCMinutes() + 1) % 15 == 0 && aUg(30 === a53 ? "Upcoming Battle Royale Contest!" :
			"Upcoming Alliance Contest!")))
	}
}

function ch() {
	var mD, mE, mQ, mR, aUh = 0,
		aUi = 0;

	function aUk() {
		return Math.pow(Math.pow(mQ - mD, 2) + Math.pow(mR - mE, 2), .5)
	}

	function aUj(e) {
		mD = au.pf * e.touches[0].clientX, mE = au.pf * e.touches[0].clientY, mQ = au.pf * e.touches[1].clientX, mR = au.pf * e.touches[1].clientY
	}
	this.zt = function(e) {
		return 1 < e.touches.length ? (aUi = bc.eO, aUh = 3, aUj(e), aH.qt(), !0) : (aUh = 0, !1)
	}, this.zu = function(e) {
		var aHH, hu, hv;
		return 0 !== a9.yF && 1 < e.touches.length && (aUh = Math.max(aUh - 1, 0), aD.mV() && (aHH = aUk(), aUj(e), e = aUk(), hu = Math.floor((mD + mQ) / 2), hv = Math.floor((mE + mR) / 2), aO.a6p(hu, hv, Math.max(.125, e) / Math.max(.125,
			aHH)), bc.de = !0), !0)
	}, this.a0H = function() {
		var ew, ey;
		return !!(aUh && (aUh = 0, bc.eO < aUi + 500)) && (ew = (mD + mQ) / 2, ey = (mE + mR) / 2, aH.a0B(ew, ey), aH.click(ew, ey, !0) && (bc.de = !0), !0)
	}
}

function cx() {
	this.size = 0, this.e2 = 0, this.a8 = null, this.dW = function(a8) {
		this.e2 = 0, this.a8 = a8, this.size = a8.length
	}, this.zf = function() {
		this.a8 = null
	}, this.oa = function(size) {
		for (var fH = 0, a8 = this.a8, mV = this.e2 + size - 1, a7 = this.e2; a7 <= mV; a7++) fH |= (a8[a7 >> 3] >> 7 - (7 & a7) & 1) << mV - a7;
		return this.e2 += size, this.e2 > 8 * this.size && console.error("Unwrapper Overflow"), fH
	}, this.aOR = function(size) {
		var f9 = size >> 1;
		return (1 << f9) * this.oa(size - f9) + this.oa(f9)
	}, this.aOQ = function(aUl) {
		return this.size === bA.aOK(aUl)
	}, this.aPh = function(vD, aUm, aUn) {
		var gI = this.oa(vD);
		if (!gI) return null;
		for (var vD = Math.max(gI, aUn), g = new(aUm <= 8 ? Uint8Array : aUm <= 16 ? Uint16Array : Uint32Array)(vD), a7 = 0; a7 < gI; a7++) g[a7] = this.oa(aUm);
		aUn = g[gI - 1];
		return aUn && g.fill(aUn, gI), g
	}, this.aPi = function(vD, aUo, aUn) {
		var gI = this.oa(vD);
		if (!gI) return null;
		for (var vD = Math.max(gI, aUn), g = new Array(vD), a7 = 0; a7 < gI; a7++) g[a7] = this.aPf(aUo);
		return g.fill(g[gI - 1], gI), g
	}, this.aPf = function(vD) {
		return bD.uJ.uN(this.oa(vD))
	}, this.aPg = function() {
		var pG = bC.rf.rg(bC.rf.rh(this.oa(30))),
			pG = b7.z3.a2Q(pG, "_", "/");
		pG = b7.z3.a2Q(pG, "-", "+");
		for (var aUp = "";
			(pG.length + aUp.length) % 4;) aUp += "=";
		pG = "data:image/png;base64," + pG + aUp;
		var aE2 = new Image;
		aE2.onload = function() {
			b6.aER.aES(aE2), aE2.onload = null, aE2 = null
		}, aE2.src = pG
	}
}

function dG() {
	this.aQX = 0, this.aQY = 0, this.aQT = 0, this.aQU = 0, this.aQV = 0, this.aQW = 0, this.a9W = [0, 0, 0, 0], this.mU = function() {
		this.aQX = aO.wR(), this.aQY = aO.wS(), this.aQT = -this.aQX, this.aQU = -this.aQY, this.aQV = au.a1 / iD, this.aQW = au.jO / iD, this.a9W[0] = Math.floor(this.aQT), this.a9W[1] = Math.floor(this.aQU), this.a9W[2] = Math.floor(this.a9W[
			0] + this.aQV + 1), this.a9W[3] = Math.floor(this.a9W[1] + this.aQW + 1), bY.a9T = !0
	}
}

function ci() {
	var a5Y, ly;
	this.dW = function() {
		a5Y = 1, ly = 0
	}, this.il = function() {
		0 < a5Y && (ly = 0 === ly ? bc.eO + 16 : ly, a5Y = (a5Y -= .001 * (bc.eO - ly)) < 0 ? 0 : a5Y, ly = bc.eO, bc.de = !0)
	}, this.t9 = function() {
		0 < a5Y && (tA.fillStyle = "rgba(0,0,0," + a5Y + ")", tA.fillRect(0, 0, au.a1, au.jO))
	}
}

function ck() {
	function aUt(map, ew, ey, a1, jO) {
		map >= bP.aGZ || (bP.eV === map && (tA.fillStyle = b8.nT, tA.fillRect(ew, ey, a1, jO), tA.fillStyle = b8.mn), tA.strokeRect(ew, ey, a1, jO), tA.fillText(b7.wW.a1J(bP.ui.uj[map].name, 0, .9 * a1), Math.floor(ew + .5 * a1), Math.floor(ey +
			.55 * jO)))
	}
	this.wp = !1, this.aUs = [0, 0, 0, 0], this.show = function() {
		this.wp = !0, this.resize(), bc.de = !0
	}, this.resize = function() {
		var aRs = bI.dn(bP.aGZ + bP.aGZ % 2, 2),
			aRs = au.jO - aRs * bZ.gap;
		u.v.sU() ? this.aUs[2] = Math.floor(.75 * au.min) : this.aUs[2] = Math.floor(.5 * au.min), this.aUs[3] = Math.floor(1.25 * this.aUs[2]), this.aUs[3] > aRs && (this.aUs[3] = aRs, this.aUs[2] = Math.floor(aRs / 1.2)), this.aUs[0] = Math
			.floor((au.a1 - this.aUs[2]) / 2), this.aUs[1] = Math.floor((au.jO - this.aUs[3]) / 2)
	}, this.zp = function(ew, ey) {
		return !(ew < this.aUs[0] || ey < this.aUs[1] || ew > this.aUs[0] + this.aUs[2] || ey > this.aUs[1] + this.aUs[3])
	}, this.h3 = function(ew, ey) {
		var a6D, aRs = bI.dn(bP.aGZ + bP.aGZ % 2, 2);
		return bc.de = !0, ew < this.aUs[0] || ey < this.aUs[1] || ew > this.aUs[0] + this.aUs[2] || ey > this.aUs[1] + this.aUs[3] ? !(this.wp = !1) : (a6D = Math.floor(.17 * this.aUs[3]), ey < this.aUs[1] + a6D ? ew > this.aUs[0] + this.aUs[
			2] - a6D && (this.wp = !1) : (ey = (ey = Math.floor(aRs * (ey - this.aUs[1] - a6D - .00576 * au.pb) / (this.aUs[3] - a6D - .01152 * au.pb))) < 0 ? 0 : aRs - 1 < ey ? aRs - 1 : ey, ew > this.aUs[0] + this.aUs[2] / 2 && (ey += aRs),
				ey >= bP.aGZ || bP.a3(ey, Math.floor(16384 * Math.random()))), !0)
	}, this.t9 = function() {
		var a7, mE, a6D = Math.floor(.17 * this.aUs[3]),
			aRs = bI.dn(bP.aGZ + bP.aGZ % 2, 2),
			gap = .6 * .01152 * au.pb,
			sN = (this.aUs[3] - a6D - (aRs + 1) * gap) / aRs,
			rk = Math.floor((this.aUs[2] - 3 * gap) / 2);
		for (tA.lineWidth = bZ.xH, b7.pZ.textAlign(tA, 1), b7.pZ.textBaseline(tA, 1), tA.fillStyle = b8.mk, tA.fillRect(this.aUs[0], this.aUs[1] + a6D, this.aUs[2], this.aUs[3] - a6D), tA.fillStyle = b8.nT, tA.fillRect(this.aUs[0], this.aUs[1],
				this.aUs[2], a6D), tA.strokeStyle = b8.mn, tA.strokeRect(this.aUs[0], this.aUs[1], this.aUs[2], this.aUs[3]), tA.fillStyle = b8.mn, tA.fillRect(this.aUs[0], this.aUs[1] + a6D, this.aUs[2], 2), tA.font = b7.pZ.ri(1, .48 * a6D), tA
			.fillText(L(420), Math.floor(this.aUs[0] + this.aUs[2] / 2), Math.floor(this.aUs[1] + .55 * a6D)), tA.font = b7.pZ.ri(1, .48 * sN), a7 = aRs - 1; 0 <= a7; a7--) mE = Math.floor(this.aUs[1] + a6D + gap + a7 * (sN + gap)), aUt(a7, this
			.aUs[0] + gap, mE, rk, sN), aUt(a7 + aRs, this.aUs[0] + rk + 2 * gap, mE, rk, sN);
		aI.a3v(Math.floor(this.aUs[0] + this.aUs[2] - .7 * a6D), Math.floor(this.aUs[1] + .3 * a6D), Math.floor(.4 * a6D)), tA.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function a2() {
	this.size = 0, this.e2 = 0, this.a8 = null, this.dW = function(a8) {
		this.e2 = 0, this.a8 = a8, this.size = a8.length
	}, this.a3 = function(aUl) {
		return this.dW(new Uint8Array(this.aOK(aUl))), this.a8
	}, this.zf = function() {
		this.a8 = null
	}, this.a4 = function(size, a55) {
		for (var a8 = this.a8, mV = this.e2 + size - 1, a7 = this.e2; a7 <= mV; a7++) a8[a7 >> 3] |= (a55 >> mV - a7 & 1) << 7 - (7 & a7);
		this.e2 += size, this.e2 > 8 * this.size && console.error("Wrapper Overflow")
	}, this.aOJ = function(size, a55) {
		var f9 = size >> 1,
			es = 1 << f9;
		this.a4(size - f9, bI.dn(a55, es)), this.a4(f9, a55 % es)
	}, this.aUu = function(size) {
		for (var a8 = this.a8, mV = this.e2 + size, a7 = this.e2; a7 < mV; a7++) a8[a7 >> 3] &= 255 ^ 128 >>> (7 & a7)
	}, this.aOK = function(aUl) {
		return aUl + 7 >> 3
	}, this.aUv = function(g, jB, mV, aUw) {
		for (var a7 = jB; a7 < mV; a7++) this.a4(aUw, g[a7])
	}
}

function cw() {
	this.dW = function() {
		this.g = [], this.e2 = 0
	}, this.aOo = function() {
		return new Uint8Array(this.g)
	}, this.a4 = function(aUx, value) {
		for (var g = this.g, mV = this.e2 + aUx - 1, aUy = 1 + (mV >> 3); g.length < aUy;) g.push(0);
		for (var a7 = this.e2; a7 <= mV; a7++) g[a7 >> 3] |= (value >> mV - a7 & 1) << 7 - (7 & a7);
		this.e2 += aUx
	}, this.dd = function(g, vD, aUm) {
		var aUz = b7.pj.a14(g);
		this.a4(vD, aUz);
		for (var a7 = 0; a7 < aUz; a7++) this.a4(aUm, g[a7])
	}, this.aPz = function(g, vD, aUo) {
		var aUz = b7.pj.a14(g);
		this.a4(vD, aUz);
		for (var a7 = 0; a7 < aUz; a7++) this.aPx(g[a7], aUo)
	}, this.aPx = function(pG, vD) {
		var ep = pG.length;
		this.a4(vD, ep);
		for (var a7 = 0; a7 < ep; a7++) this.a4(16, pG.charCodeAt(a7))
	}, this.aPy = function(a17) {
		var aV0 = (a17 = a17.toDataURL()).split(",");
		if (aV0.length < 2) console.log("error 266");
		else {
			a17 = b7.z3.a2Q(a17 = aV0[aV0.length - 1], "/", "_"), a17 = b7.z3.a2Q(a17, "\\+", "-");
			var a17 = b7.z3.a2Q(a17, "=", ""),
				uW = bD.rf.uT(a17),
				ep = uW.length;
			this.a4(30, ep);
			for (var a7 = 0; a7 < ep; a7++) this.a4(6, uW[a7])
		}
	}
}
a(), self.aiCommand746 = function(fH) {
	0 === fH ? bo() : 1 !== fH || !u || 1 !== u.id || u.fI < 14 || bG.fJ()
}, setTimeout(bo, 1e4), window.onload = function() {
	bo()
};