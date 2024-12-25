var h, a8, a9, aA, aB, aC, aD, aE, aF, aG, aH, aI, aJ, aK, aL, aM, aN, aO, aP, aQ, aR, aS, aT, aU, aV, aW, aX, aY, aZ, aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, at, au, av, aw, ax, ay, az, b0, b1, b2, b3, b4, b5, b6, b7,
	u, b8, b9, bA, bB, bC, bD, bE, bF, bG, bH, bI, bJ, bK, bL, bM, bN, bO, bP, n, bQ, bR, bS, bT, bU, bV, bW, bX, bY, bZ, ba, bb, bc, bd, r, be, bf, bg, l, bh, bi, bj, dd, de, df, a4, dg, a5, fL, fM, fN, fO, fP, fQ, fR, fS, fT, fU, fV, fW, fX, hv,
	hu, hw, a3k, kt, jN, xg, rB, uP, a7U, a0l, a0m, S = ["⬅️ ", "canvas", "100%", "div", "rgb(", "rgba(", "none", "absolute", "undefined", "auto", "Data", "<br>", "center", "1em", "0.8em", "   ", "territorial.io", "input",
		"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg==", "hidden", "flex", "0.5em", "' target='_blank'>", "</a>",
		"password", "inherit", "function", "click", "Value", "Enter", "🔄 Reload", "text", "string", "rgba(0,0,0,0.8)", "number", "focus", "break-word", "blur", "Player ", "NoStack", "1.2em", " / ", "videoad", "top", "tls7", "Trebuchet MS",
		"rgba(140,10,10,0.75)", "rgba(100,0,0,0.8)", "rgba(10,140,10,0.75)", "rgba(0,100,0,0.8)", "rgba(0,", "rgb(10,220,10)", "pointer", "nowrap", "mouseover", "mouseout", "middle", "long", "logo", "loading", "keydown", "italic ", "file", "error",
		"en-US", "data:image/png;base64,", "break-all", "arena", "account", "accept", "_blank", "Space", "Seed", "Interest", "Escape", "Bot ", "Back", "<a href='", "0px", "000", "0.75em", "0.6em", "0.4em 0em", ",0,0.85)", " solid white;}", " / 160",
		" -> "
	];

function a() {
	var b, c;

	function w() {
		if (b && b.readyState === b.OPEN) {
			var a0 = new a1;
			a0.a2(1612), a0.a3(1, 0), a0.a3(6, 7), a0.a3(2, r ? r.id : 3), a0.a3(1, a4 ? 1 : 0), a0.a3(1, a5 ? 1 : 0), a0.a3(1, h ? h.i : 0);
			for (var a6 = 0; a6 < c.length && a6 < 100; a6++) a0.a3(16, c.charCodeAt(a6));
			b.send(a0.a7), x()
		}
	}

	function x() {
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
				for (var z, y = new RegExp(":([0-9]+):([0-9]+)", "g"), result = []; null !== (z = y.exec(stack));) result.push(parseInt(z[1], 10)), result.push(parseInt(z[2], 10));
				return result.length ? result.join(" ") : "NoStack"
			}(e), performance.memory && ((g = []).push(Math.floor(performance.memory.jsHeapSizeLimit / 1e5)), g.push(Math.floor(performance.memory.totalJSHeapSize / 1e5)), g.push(Math.floor(performance.memory.usedJSHeapSize / 1e5)), c =
				c + "|" + g.join(" ")), c = c + "|" + e.message, h && 1 === h.i && (c = h.j + "|" + c, k = "What happened? Please send us a detailed email to davidtschacher@gmail.com so we can fix this error!", 0 === e.lineno && 0 === e
				.colno && (k += "<br>This error might be fixed by disabling browser extensions."), k += "<br>Error Message: " + c, l.m(), n.o(4, 5, new p("🤖 Beep Boop! An error occurred.", k, !0, [new q("🔄 Reload", function() {
					r.s.t()
				}, u.v)])))
		} catch (e) {
			c = "SevereError|" + e + "|" + c, console.log(c), alert(c)
		}(b = new WebSocket("wss://territorial.io/s52/")).onopen = w, b.onclose = function() {
			x()
		}
	})
}

function bk(bl) {
	h && !bl || (bn(), bH = new bo, bG = new bp, b7 = new bq, u = new br, a8 = new bs, b4 = new bt, bB = new bu, bC = new bv, a9 = new bw, aA = new bx, aB = new by, aC = new bz, aD = new c0, aE = new c1, aF = new c2, aG = new c3, aH = new c4, aI =
		new c5, aJ = new c6, aK = new c7, aL = new c8, aM = new c9, aN = new cA, aO = new cB, aP = new cC, aQ = new cD, aR = new cE, aS = new cF, aT = new cG, aU = new cH, aV = new cI, aW = new cJ, aX = new cK, af = new cL, ag = new cM, ah =
		new cN, aY = new cO, aZ = new cP, ac = new cQ, aa = new cR, ab = new cS, ad = new cT, aw = new cU, ae = new cV, aj = new cW, ak = new cX, al = new cY, ax = new cZ, av = new ca, ai = new cb, am = new cc, an = new cd, ao = new ce, au =
		new cf, ap = new cg, aq = new ch, ar = new ci, at = new cj, ay = new ck, az = new cl, b0 = new cm, b1 = new cn, b2 = new co, b3 = new cp, b5 = new cq, b6 = new cr, b8 = new cs, b9 = new a1, bA = new ct, bD = new cu, bE = new cv, bF =
		new cw, bI = new cx, bJ = new cy, bK = new cz, bL = new d0, bM = new d1, bN = new d2, bO = new d3, bP = new d4, n = new d5, bQ = new d6, r = new d7, h = new d8, be = new d9, bf = new dA, bc = new dB, bd = new dC, bW = new dD, bX = new dE,
		bR = new dF, bS = new dG, bZ = new dH, ba = new dI, bb = new dJ, bg = new dK, bY = new dL, l = new dM, bh = new dN, bi = new dO, bj = new dP, h.dR(), r.dR(), au.dS(), bf.dR(), b4.dR(), b4.dT(), (bT = new dU).dR(), bh.dR(), b7.dR(), bR
		.dR(), ax.dR(), bB.dR(), bC.dR(), bO.dR(), n.dR(), bU = new dV, au.dR(), r.s.dW(), bb.dR(), bY.dR(), bS.dR(), bV = new dX, av.dR(), aZ.dY(), bQ.dR(), aj.dR(), aV.dR(), aO.dR(), ad.dR(), bF.dR(), aW.dR(), bb.dZ = !0, setTimeout(
	function() {
			bO.a2(2, 14071)
		}, 0), n.o(5, 5), bE.da() || r.s.db(), au.dc(), h.i = 1)
}

function d8() {
	this.dh = 1070, this.j = 19999, this.dR = function() {
		dd = 2, df = 1, de = "24 Dec 2024 [1.99.9.9]", a4 = true, a5 = function() {
			try {
				return window.self !== window.top
			} catch (e) {
				return !0
			}
		}(), dg = (new Date).getTime() % 1024
	}, this.i = 0
}

function dN() {
	this.id = new dj, this.dR = function() {
		this.id.dR()
	}
}

function dj() {
	this.dR = function() {
		0 === bf.dk.data[181].value && (bf.dk.dl(180, Math.floor(Math.random() * bH.pow(30))), bf.dk.dl(181, Math.floor((new Date).getTime() / 36e5)))
	}
}

function d6() {
	this.dm = new dn, this.dp = new dq, this.dR = function() {
		r.s.dr()
	}
}

function dn() {
	function e1() {}
	this.dR = function() {}, this.e0 = function() {
		return !!e1() && (aiptag.cmd.player.push(function() {
			aiptag.adplayer.startVideoAd()
		}), !0)
	}, this.hideCMPButton = function() {
		"undefined" != typeof aipAPItag && aipAPItag.hideCMPButton && aipAPItag.hideCMPButton()
	}, this.showCMPButton = function() {
		"undefined" != typeof aipAPItag && aipAPItag.showCMPButton && aipAPItag.showCMPButton()
	}, this.showCMPScreen = function() {
		e1() && aipAPItag.showCMPScreen()
	}
}

function dq() {
	this.show = function() {
		return !1
	}
}

function cN() {
	this.e6 = new e7
}

function e7() {
	this.e8 = function(e9) {
		var eC;
		return bO.eA(bO.eB) && a8.data.passableMountains && (eC = aX.eD(e9), this.eE(a8.eF, eC) || this.eG(a8.eF, eC)) && 0 !== (eC = function(eb) {
			for (var ec = bI.ed(eb), ee = bI.ef(eb), max = Math.max(bO.eg, bO.eh) - 2, ei = max * max, ej = !1, ek = 0, el = 0; el < max; el++) {
				var em, eH = function(ec, ee, el) {
					for (var a6 = 0; a6 <= el; a6++)
						for (var eo = -1; eo < 2; eo += 2)
							for (var ep = -1; ep < 2; ep += 2)
								for (var eq = 0; eq < 2; eq++) {
									var e9 = function(ec, ee) {
										if (bI.es(ec, ee)) {
											ec = bI.et(ec, ee), ee = bI.eL(ec);
											if (aX.eQ(ee) && aX.eu(ee)) return ec
										}
										return 0
									}(ec + eq * eo * a6 + (1 - eq) * ep * el, ee + eq * ep * el + (1 - eq) * eo * a6);
									if (e9) return e9
								}
					return 0
				}(ec, ee, el);
				eH && (em = bI.en(ec, ee, eH)) < ei && (ek = eH, ei = em, ej || (ej = !0, max = Math.floor(Math.sqrt(em)) + 1))
			}
			return ek
		}(bI.eJ(e9))) && (e9 = bI.eL(eC), aX.eM(e9) || (e9 = aX.eN(e9)) !== a8.eF && eO(e9, a8.eF)) ? eC : 0
	}, this.eP = function(player, eH) {
		eH = bI.eL(eH);
		if (aX.eQ(eH)) {
			if (aX.eM(eH)) bK.eR[0] = a8.eS;
			else if (aX.eN(eH) !== bK.eR[0]) return !1;
			for (var eT = function(e9) {
					var eX = aX.eX,
						eT = [];
					loop: for (var eY = 3; 0 <= eY; eY--) {
						var eZ = e9 + eX[eY];
						if (aX.ea(eZ)) {
							for (var id = aX.eD(eZ), a6 = 0; a6 < eT.length; a6++)
								if (id === eT[a6]) continue loop;
							bK.eW[eT.length] = eZ, eT.push(id)
						}
					}
					return eT
				}(eH), eV = eT.length, a6 = 0; a6 < eV; a6++)
				if (this.eE(player, eT[a6]) || this.eG(player, eT[a6])) return bK.eW[0] = bK.eW[a6], !0
		}
		return !1
	}, this.eE = function(player, eC) {
		for (var ev = ab.ev[player], eV = ev.length, ew = Math.max(bH.ex(eV, 12), 1), eX = aX.eX, a6 = 0; a6 < eV; a6 += ew)
			for (var eK = ev[a6], eY = 3; 0 <= eY; eY--) {
				var eZ = eK + eX[eY];
				if (aX.ea(eZ) && eC === aX.eD(eZ)) return !0
			}
		return !1
	}, this.eG = function(player, eC) {
		for (var ev = ab.ev[player], eV = ev.length, eX = aX.eX, a6 = 0; a6 < eV; a6++)
			for (var eK = ev[a6], eY = 3; 0 <= eY; eY--) {
				var eZ = eK + eX[eY];
				if (aX.ea(eZ) && eC === aX.eD(eZ)) return !0
			}
		return !1
	}
}

function cz() {
	this.f1 = new Uint16Array(2), this.f2 = new Uint16Array(2), this.f3 = new Uint32Array(2), this.f4 = new Uint32Array(2), this.f5 = new Uint32Array(2), this.f6 = new Uint8Array(4), this.f7 = new Uint8Array(4), this.eW = new Uint32Array(4), this
		.f8 = new Uint32Array(5), this.eR = new Uint32Array(8), this.f9 = new Uint16Array(16), this.fA = new Uint16Array(512), this.fB = new Uint16Array(512), this.fC = new Uint16Array(512), this.fD = function(g, fE) {
			return g[0] = fE, g
		}, this.fF = function(g, fE, fG) {
			return g[0] = fE, g[1] = fG, g
		}, this.fH = function(g, fE, fG, fI) {
			return g[0] = fE, g[1] = fG, g[2] = fI, g
		}, this.fJ = function(g, fE, fG, fI, fK) {
			return g[0] = fE, g[1] = fG, g[2] = fI, g[3] = fK, g
		}
}

function fY() {
	fR = 0, fS = 2048, fT = new Uint32Array(4 * fS), fU = 0, fV = new Uint32Array(fS), fW = new Uint8Array(bO.eg * bO.eh)
}

function fZ(player) {
	fM = player, fX = !1, fa(), fb();
	for (var a6 = aY.fc(fM) - 1; 0 <= a6; a6--) 0 === aY.fd(fM, a6) && (fL = a6, fe());
	fX && ff()
}

function ff() {
	fg(), fh()
}

function fe() {
	fQ = aY.fi(fM, fL), fN = aY.fj(fM, fL), fO = aY.fk(fM, fL), fl(), (0 !== fR && (fn(), fo()) ? fp : fm)()
}

function fo() {
	if (!((fP = bH.ex(fN, fR)) > a8.fq)) {
		if (!fO) return !1;
		var fr = fR * (1 + a8.fq);
		fN += b7.fs.ft(fM, fr - fN), fP = bH.ex(fN, fR)
	}
	return !0
}

function fn() {
	for (var a6 = fR - 1; 0 <= a6; a6--) fW[bH.ex(fT[a6], 4)] = 0
}

function fm() {
	1 === aY.fc(fM) && aA.fu(fM);
	var e4 = b7.fs.fv(fM, fN);
	bZ.fw(fM, fN - e4, 12), aY.fx(fM, fL)
}

function fa() {
	for (var player = fM, fy = ab.fy, eV = Math.min(fy[player].length, fS), fz = 0, g0 = fV, a6 = eV - 1; 0 <= a6; a6--) g0[fz++] = fy[player][a6];
	fU = fz
}

function fb() {
	for (var a6 = ab.fy[fM].length - 1; 0 <= a6; a6--) aX.eQ(ab.fy[fM][a6]) && aX.g1(ab.fy[fM][a6], fM);
	ab.fy[fM] = []
}

function fl() {
	fR = 0, (fQ === a8.eS ? g2 : g3)()
}

function g3() {
	for (var g4, g5, a6, eX = aX.eX, eY = 3; 0 <= eY; eY--)
		for (a6 = fU - 1; 0 <= a6; a6--) g4 = fV[a6] + eX[eY], g5 = bH.ex(g4, 4), 0 === fW[g5] && aX.g6(g4) && aX.eN(g4) === fQ && (fW[g5] = 1, fT[fR++] = g4)
}

function g2() {
	for (var g4, g5, a6, eX = aX.eX, eY = 3; 0 <= eY; eY--)
		for (a6 = fU - 1; 0 <= a6; a6--) g4 = fV[a6] + eX[eY], g5 = bH.ex(g4, 4), 0 === fW[g5] && aX.eM(g4) && (fW[g5] = 1, fT[fR++] = g4)
}

function fp() {
	g7() ? (g8(), fQ !== a8.eS && g9()) : fm()
}

function g9() {
	gA(), gB(ab.gC[fQ]), gB(ab.gD[fQ]), bO.eA(bO.eB) && gB(ab.ev[fQ]), gE(ab.fy[fQ]), gF(ab.gD[fQ]), gF(ab.ev[fQ]), gG(), gH()
}

function g8() {
	fX = !0, aY.gI(fM, fL, fN), aY.gJ(fM, fL), ab.gK[fM] += fR, gL(), gM()
}

function g7() {
	return (fQ === a8.eS ? gN : gO)()
}

function gO() {
	var gP = fR * a8.fq,
		gQ = gR(),
		gS = gT(),
		gQ = gP + 2 * gQ + gS,
		gV = fP * fR;
	return gQ < gV ? (fN -= gQ, bZ.fw(fM, gQ, 13), gW(gQ - gP, gS), !0) : fO && 0 === gS ? (fN -= gV, gV += b7.fs.ft(fM, gQ - gV + 1), bZ.fw(fM, gV, 13), gW(gV - gP, 0), !0) : (fN -= gV, bZ.fw(fM, gV, 13), gW(gV - gP, gS), !1)
}

function gW(gV, gS) {
	if (0 < gS) {
		if (gV <= gS) return bZ.fw(fQ, gV, 13), void aY.gX(fQ, fM, gS - gV);
		aY.gX(fQ, fM, 0), gV -= gS
	}
	gV = bH.ex(gV, 2), gV = Math.min(ab.gY[fQ], gV), bZ.fw(fQ, gV, 13), ab.gY[fQ] -= gV
}

function gT() {
	return aY.gZ(fQ, fM)
}

function gR() {
	return bH.ex(fR * ab.gY[fQ], 1 + bH.ex(10 * ab.gK[fQ], 16))
}

function gN() {
	var ga = fR * a8.fq;
	return fN -= ga, bZ.fw(fM, ga, 13), !0
}

function gM() {
	for (var a6 = fR - 1; 0 <= a6; a6--) ab.fy[fM].push(fT[a6]), ab.gC[fM].push(fT[a6]), aX.g1(fT[a6], fM)
}

function d4() {
	var gb = 0,
		gc = 0;
	this.gd = function(ec, ee) {
		gb = ec, gc = ee
	}, this.ge = function(gf) {
		a8.gg || aH.gh || (b7.fs.gi(0) || b7.fs.gi(1)) && b7.fs.gj(a8.eF) && (aM.gk(gb, gc) ? aM.gl = !1 : function(gf) {
			var gn = bI.go(gb),
				gp = bI.gq(gc),
				eH = bI.et(gn, gp),
				e9 = bI.eL(eH);
			bI.gr(gn, gp) && (a8.gs ? aX.eQ(e9) && b5.gt.gu(eH) : aX.ea(e9) ? gf || (gn = ah.e6.e8(e9)) && (gp = bI.eL(gn), gp = aX.eM(gp) ? a8.eS : aX.eN(gp), b5.gt.gx(aM.gy(), gn, gp)) : aX.gz(e9) || gf ? bJ.h0.h1(a8.eF, eH) && b5.gt
				.h2(aM.gy(), eH) : aX.eM(e9) ? h3(a8.eF) ? b5.gt.h4(aM.gy(), a8.eS) : h5(a8.eF, a8.eS) ? ay.h6(a8.eS, aM.gy()) : bJ.h0.h1(a8.eF, eH) && b5.gt.h2(aM.gy(), eH) : (gn = aX.eN(e9)) !== a8.eF && (eO(gn, a8.eF) ? h7(a8.eF,
					gn) ? b5.gt.h4(aM.gy(), gn) : h5(a8.eF, gn) ? ay.h6(gn, aM.gy()) : bJ.h0.h1(a8.eF, eH) && b5.gt.h2(aM.gy(), eH) : bJ.h0.h1(a8.eF, eH) && b5.gt.h2(aM.gy(), eH)))
		}(gf))
	}
}

function h8(h9, size, hA, hB, font) {
	var a6, hE = .2,
		canvas = document.createElement("canvas"),
		hF = canvas.getContext("2d", {
			alpha: !1
		});
	for (canvas.width = h9, canvas.height = h9, hF.font = size + font, hF.textAlign = "center", hF.textBaseline = "middle", hF.fillStyle = "red", a6 = 0; a6 < hA.length; a6++) hF.fillText(hA[a6], .5 * h9, .5 * h9);
	return -1 < (canvas = function(hC) {
		var a6, hH, eY = hC.data;
		for (a6 = eY.length - 4; 0 <= a6; a6 -= 4)
			if (hH = eY[a6], hB <= hH) return Math.floor(a6 / (4 * h9));
		return -1
	}(hF.getImageData(0, 0, h9, h9))) && (hE = (canvas - .5 * h9 + .1 * size) / size), Math.max(hE, 0)
}

function cx() {
	this.hI = new Int16Array(4), this.hJ = new Int16Array(4), this.dR = function() {
		var a6;
		for (this.hI[0] = -bO.eg, this.hI[1] = 1, this.hI[2] = bO.eg, this.hI[3] = -1, a6 = 0; a6 < 4; a6++) this.hJ[a6] = 4 * this.hI[a6]
	}, this.hK = function(gv, hL) {
		var hM = this.ed(hL) - this.ed(gv),
			hL = this.ef(hL) - this.ef(gv),
			gv = hM >>> 31 << 1;
		return 5 + gv + (1 - gv) * (1 - (hL >>> 31 << 1)) * (Math.abs(hM) - Math.abs(hL) >>> 31) & 3
	}, this.hR = function(gv, hL, hS) {
		return hS % 2 == 0 ? hS + (1 - hS) * (1 - (this.ed(hL) - this.ed(gv) >>> 31 << 1)) + 4 & 3 : hS + (2 - hS) * (1 - (this.ef(hL) - this.ef(gv) >>> 31 << 1)) + 4 & 3
	}, this.hU = function(g4, eH) {
		for (var hL, hV, hX = ab.gD[g4], eV = hX.length, a0 = bO.eg, hY = this.ed(eH), hZ = this.ef(eH), eb = hX[0] >> 2, min = this.en(hY, hZ, eb), a6 = 1; a6 < eV; a6++)(hV = (hV = hY - (hL = hX[a6] >> 2) % a0) * hV + (hV = hZ - ~~((.5 + hL) /
			a0)) * hV) < min && (min = hV, eb = hL);
		return eb
	}, this.ha = function(player, e9) {
		return !aX.eM(e9) && player === aX.eN(e9)
	}, this.en = function(gn, gp, eH) {
		return (gn -= this.ed(eH)) * gn + (gp -= this.ef(eH)) * gp
	}, this.hb = function(hc, hd, he) {
		hc = this.hg(hc) - this.hh(he), hd = this.hj(hd) - this.hk(he);
		return Math.sqrt(hc * hc + hd * hd)
	}, this.hl = function(gv, hL) {
		var hf = this.ed(gv) - this.ed(hL),
			gv = this.ef(gv) - this.ef(hL);
		return Math.sqrt(hf * hf + gv * gv)
	}, this.hm = function(gv, hL) {
		var hf = this.ed(gv) - this.ed(hL),
			gv = this.ef(gv) - this.ef(hL);
		return hf * hf + gv * gv
	}, this.hn = function(ho, hp, hq, hr) {
		return (ho -= hq) * ho + (hp -= hr) * hp
	}, this.hs = function(g4, ht) {
		return bH.ex(ht * ab.gY[g4], 1e3)
	}, this.hg = function(hc) {
		return 16 * (hc + hu) / hv
	}, this.hj = function(hd) {
		return 16 * (hd + hw) / hv
	}, this.hx = function(eY) {
		return 16 * eY / hv
	}, this.go = function(hc) {
		return Math.floor((hc + hu) / hv)
	}, this.gq = function(hd) {
		return Math.floor((hd + hw) / hv)
	}, this.gr = function(gn, gp) {
		return 1 <= gn && 1 <= gp && gn < bO.eg - 1 && gp < bO.eh - 1
	}, this.ed = function(eH) {
		return eH % bO.eg
	}, this.ef = function(eH) {
		return bH.ex(eH, bO.eg)
	}, this.et = function(gn, gp) {
		return gp * bO.eg + gn
	}, this.hy = function(eH) {
		return this.es(this.ed(eH), this.ef(eH))
	}, this.es = function(gn, gp) {
		return 0 < gn && gn < bO.eg - 1 && 0 < gp && gp < bO.eh - 1
	}, this.eL = function(eH) {
		return eH << 2
	}, this.eJ = function(e9) {
		return e9 >> 2
	}, this.hz = function(eH) {
		return bO.eg * this.ef(eH) * 256 + (this.ed(eH) << 4)
	}, this.i0 = function(eH) {
		return this.hz(eH) + 8 + (bO.eg << 7)
	}, this.i1 = function(he) {
		return bO.eg * (this.hk(he) >> 4) + (this.hh(he) >> 4)
	}, this.i2 = function(he) {
		he = this.i1(he);
		return (this.ed(he) >> 5) + bJ.i3.i4 * (this.ef(he) >> 5)
	}, this.hh = function(he) {
		return he % (bO.eg << 4)
	}, this.hk = function(he) {
		return bH.ex(he, bO.eg << 4)
	}, this.i5 = function(eH, hS) {
		return eH + this.hI[hS]
	}, this.i6 = function(e9, hS) {
		return e9 + this.hJ[hS]
	}, this.i7 = function(player) {
		return this.et(ab.i8[player] + ab.i9[player] >> 1, ab.iA[player] + ab.iB[player] >> 1)
	}, this.iC = function(player) {
		return this.et(av.iD(ab.i8[player], ab.i9[player]), av.iD(ab.iA[player], ab.iB[player]))
	}
}

function cb() {
	this.iE = new iF, this.iG = new iH, this.iI = new iJ, this.performance = new iK, this.iL = new iM, this.iN = new iO, this.iP = new iQ, this.dR = function() {
		this.iE.dR(), this.iI.dR(), this.performance.dR(), this.iL.dR(), this.iN.dR()
	}, this.iR = function() {
		this.performance.iR(), this.iE.iR()
	}
}

function iM() {
	var iS, iU = new Uint16Array(8);

	function ig(size, player) {
		for (var a6 = ab.fy[player].length - 1; size <= a6; a6--) aX.ip(ab.fy[player][a6], player)
	}
	this.dR = function() {
		iS = 0
	}, this.iV = function(player, iW) {
		return bK.eR[1] = ab.fy[player].length, bK.eR[0] === a8.eS ? ai.iL.iX(player) : this.iY(player, bK.eR[0]), (0 !== bK.eR[1] || 0 !== ab.fy[player].length) && !(!iW && bK.eR[1] === ab.fy[player].length || (bK.eR[0] === a8.eS ? ab.iZ[
			player]++ : ab.ia[player]++, 0))
	}, this.ib = function(player) {
		a8.ic && (ai.iN.ie[player] = 1), ig(bK.eR[1], player), aY.ih(player, bK.f4[0], bK.eR[0]), aA.ii(player, !1)
	}, this.ij = function(player, ik, eV, il) {
		var im = bH.ex(12 * ab.gY[player], 1024);
		il -= il >= bH.ex(ab.gY[player], 2) ? im : 0, ig(eV, player), aY.ih(player, il, ik), ab.gY[player] -= il + im, aA.ii(player, !1)
	}, this.iY = function(player, ik) {
		for (var hS, eX = aX.eX, a6 = ab.gC[player].length - 1; 0 <= a6; a6--)
			if (aX.io(ab.gC[player][a6]))
				for (hS = 3; 0 <= hS; hS--)
					if (aX.g6(ab.gC[player][a6] + eX[hS]) && aX.eN(ab.gC[player][a6] + eX[hS]) === ik) {
						ab.fy[player].push(ab.gC[player][a6]);
						break
					}
	}, this.iX = function(player) {
		for (var eX = aX.eX, a6 = ab.gC[player].length - 1; 0 <= a6; a6--)
			if (aX.io(ab.gC[player][a6]))
				for (var hS = 3; 0 <= hS; hS--)
					if (aX.eM(ab.gC[player][a6] + eX[hS])) {
						ab.fy[player].push(ab.gC[player][a6]);
						break
					}
	}, this.iq = function(player, ir) {
		var a6, eo, hS, is, eV = ab.gC[player].length,
			hT = 256 <= eV ? 12 : 32 <= eV ? 6 : 1,
			it = eV - 1 - av.iu(hT),
			eX = aX.eX;
		iS = 0;
		loop: for (a6 = it; 0 <= a6; a6 -= hT)
			for (hS = 3; 0 <= hS; hS--)
				if ((is = aX.eM(ab.gC[player][a6] + eX[hS]) ? a8.eS : aX.eN(ab.gC[player][a6] + eX[hS])) === a8.eS || aX.g6(ab.gC[player][a6] + eX[hS]) && is !== player && (ir || eO(player, is))) {
					for (eo = iS - 1; 0 <= eo; eo--)
						if (iU[eo] === is) continue loop;
					if (iU[iS] = is, 8 <= ++iS) return !0
				}
		return 0 < iS
	}, this.iv = function(player, ir) {
		var a6, hS, is, eX = aX.eX;
		for (iS = 0, a6 = ab.gC[player].length - 1; 0 <= a6; a6--)
			for (hS = 3; 0 <= hS; hS--)
				if ((is = aX.eM(ab.gC[player][a6] + eX[hS]) ? a8.eS : aX.eN(ab.gC[player][a6] + eX[hS])) === a8.eS || aX.g6(ab.gC[player][a6] + eX[hS]) && is !== player && (ir || eO(player, is))) return iU[iS++] = is, !0;
		return !1
	}, this.iw = function() {
		for (var ep, a6 = iS - 1; 0 <= a6; a6--)
			if (iU[a6] === a8.eS) {
				for (iS--, ep = a6; ep < iS; ep++) iU[ep] = iU[ep + 1];
				return !0
			} return !1
	}, this.ix = function(player) {
		for (var ep, a6 = iS - 1; 0 <= a6; a6--)
			if (aY.iy(player, iU[a6]))
				for (iS--, ep = a6; ep < iS; ep++) iU[ep] = iU[ep + 1];
		return 0 === iS
	}, this.iz = function() {
		for (var a6 = iS - 1; 0 <= a6; a6--)
			if (b7.fs.j0(iU[a6])) return !0;
		return !1
	}, this.j1 = function() {
		for (var a6 = iS - 1; 0 <= a6; a6--) b7.fs.j0(iU[a6]) || (iU[a6] = iU[--iS]);
		return 0 < iS
	}, this.j2 = function(player) {
		for (var ep, j3 = iU[0], j4 = ab.gY[j3] + aY.gZ(j3, player), a6 = iS - 1; 1 <= a6; a6--)(ep = ab.gY[iU[a6]] + aY.gZ(iU[a6], player)) < j4 && (j3 = iU[a6], j4 = ep);
		return j3
	}, this.j5 = function(player) {
		var j6, j7 = iU[0];
		if (1 !== iS)
			for (var j8 = bH.ex(ab.i9[player] + ab.i8[player], 2), j9 = bH.ex(ab.iB[player] + ab.iA[player], 2), el = jA(j8 - bH.ex(ab.i9[j7] + ab.i8[j7], 2)) + jA(j9 - bH.ex(ab.iB[j7] + ab.iA[j7], 2)), a6 = iS - 1; 1 <= a6; a6--)(j6 = jA(j8 - bH
				.ex(ab.i9[iU[a6]] + ab.i8[iU[a6]], 2)) + jA(j9 - bH.ex(ab.iB[iU[a6]] + ab.iA[iU[a6]], 2))) < el && (el = j6, j7 = iU[a6]);
		return j7
	}, this.jB = function() {
		for (var jC = iU, jD = jC[0], gY = ab.gY, jE = gY[jD], a6 = iS - 1; 1 <= a6; a6--) {
			var g4 = jC[a6],
				ep = gY[g4];
			jE < ep && (jD = g4, jE = ep)
		}
		return jD
	}
}

function iO() {
	function jT(player, ik, jJ) {
		3 <= jJ && 2142 < bb.jZ() && (ik === a8.eS || ab.gY[ik] < bH.ex(ab.gY[player], 20)) && a9.jO(player, 20)
	}

	function jW(player, il, ik, jJ) {
		3 <= jJ && jJ < 6 && bH.ex(ab.gY[player], 8) > ab.gY[ik] && (il = Math.max(bH.ex(11 * ab.gY[ik], 5), bH.ex(ab.gY[player], 10)));
		jJ = ab.fy[player].length;
		ai.iL.iY(player, ik), ai.iL.ij(player, ik, jJ, il)
	}

	function jS(player, il) {
		var ik = a8.eS,
			eV = ab.fy[player].length;
		ai.iL.iX(player), ab.fy[player].length !== eV && ai.iL.ij(player, ik, eV, il)
	}
	this.ie = new Uint8Array(a8.eS), this.dR = function() {
		this.ie.fill(0)
	}, this.jF = function(player, il) {
		var jH, jJ, jK, jL;
		a8.ic && (this.ie[player] = 0), aY.jG(player) && (jH = aZ.jI(player), 3 <= (jJ = a9.il[player]) && jJ < 6 && (il = Math.max(ab.gY[player] - jH, il)), jK = ab.gD[player].length, jL = ab.gC[player].length, 30 * ab.gK[player] > a8.jM && jN[
			player] < 10 && 100 * jL <= jK && a9.jO(player, 10), a8.ic ? function(player, il, jJ, jH) {
			var ik;
			if (ai.iL.iq(player, !1) || ai.iL.iv(player, !1)) {
				if (ai.iN.ie[player] = 1, !ai.iL.ix(player))
					if (ai.iL.iw()) jS(player, il), jT(player, a8.eS, jJ);
					else {
						if (av.jU(a9.jV[jJ])) ik = ai.iL.j2(player);
						else {
							if (ai.iL.iz() && av.jU(a9.jX[jJ]) && ai.iL.j1(), 6 === jJ) return jW(player, il, ai.iL.jB(), jJ);
							ik = ai.iL.j5(player)
						}
						jW(player, il, ik, jJ), jT(player, ik, jJ)
					}
			} else bJ.jQ.iR(player) || ai.iP.iR(player) || ! function(player, il, jJ, jH) {
				var a6, ep, eq, eT = bc.eT,
					ja = eT[player];
				if (0 !== ja) {
					var gY = ab.gY,
						jb = gY[player],
						gK = ab.gK;
					if (player < a8.jc && (il = jb), !(jb < gK[player] || 5 === jJ && jb < jH || 4 === jJ && jb < bH.ex(jH, 2))) {
						var eV = ag.jd,
							je = ag.jf,
							jg = (a6 = av.iu(eV), ai.iN.ie);
						for (ep = 0; ep < eV; ep++)
							if (eq = je[(ep + a6) % eV], 1 === jg[eq] && eT[eq] === ja) return b5.jh.ji(player, eq, il);
						var jj = a8.jj,
							gD = ab.gD;
						for (ep = 0; ep < eV; ep++)
							if (eq = je[(ep + a6) % eV], gY[eq] < jj * gK[eq] && gD[eq].length && eT[eq] === ja && eq !== player) return b5.jh.ji(player, eq, il)
					}
				}
			}(player, il, jJ, jH)
		}(player, il, jJ, jH) : (!jL || jK && (jK < jL && !av.iu(10) || 100 * jL <= jK && av.iu(3) || !av.iu(8))) && bJ.jQ.iR(player) || function(player, il, jJ) {
			ai.iL.iq(player, !0) || ai.iL.iv(player, !0) ? ai.iL.ix(player) || (ai.iL.iw() ? jS(player, il) : av.jU(a9.jV[jJ]) ? jW(player, il, ai.iL.j2(player), jJ) : 5 === jJ ? jW(player, il, ai.iL.jB(), jJ) : (ai.iL.iz() && av.jU(a9
				.jX[jJ]) && ai.iL.j1(), jW(player, il, 6 === jJ ? ai.iL.jB() : ai.iL.j5(player), jJ))) : ai.iP.iR(player)
		}(player, il, jJ))
	}
}

function bw() {
	var jk = new Uint8Array(a8.eS),
		jl = new Uint16Array(a8.eS),
		jm = new Uint16Array(a8.eS),
		jn = new Uint8Array(a8.eS),
		jo = (this.il = new Uint8Array(a8.eS), new Uint16Array(a8.eS)),
		jp = new Uint16Array(a8.eS);

	function k4(a6) {
		jk[a6] = 1 + bH.ex(jo[a6] * av.random(), 10 * av.value(100))
	}
	this.jq = null, this.jX = [97, 94, 70, 40, 20, 0, 100], this.jr = [500, 450, 400, 300, 80, 50, 100], this.jV = [0, 0, 5, 25, 50, 100, 0], this.js = [60, 74, 112, 200, 256, 512, 512], this.jt = [1, 2, 3, 4, 6, 8, 1], this.ju = [500, 450, 400, 300,
		80, 50, 100
	], this.dS = function() {
		this.jq = [L(0), L(1), L(2), L(3), L(4), L(5), "H Bot"]
	}, this.dR = function() {
		jk.fill(0), jl.fill(0), jm.fill(0), jn.fill(0), this.il.fill(0), jo.fill(0), jp.fill(0);
		var jv = a8.jc;
		if (9 === a8.jw) this.jx();
		else if (__fx.customLobby.isActive())
			for (a6 = a8.k0 - 1; 0 <= a6; a6--) this.il[a6 + jv] = __fx.customLobby.gameInfo.difficulty;
		else if (a8.jy)
			if (3 === a8.data.botDifficultyType)
				for (a6 = a8.k0 - 1; 0 <= a6; a6--) {
					var k1 = a6 + jv;
					this.il[k1] = a8.data.botDifficultyData[k1]
				} else if (2 === a8.data.botDifficultyType)
					for (a6 = a8.k0 - 1; 0 <= a6; a6--) this.il[k1 = a6 + jv] = a8.data.botDifficultyTeam[bc.k2[bc.eT[k1]]];
				else if (1 === a8.data.botDifficultyType) {
			var k3 = this.jq.length;
			for (a6 = a8.k0 - 1; 0 <= a6; a6--) this.il[a6 + jv] = a6 % k3
		} else
			for (k3 = a8.data.botDifficultyValue, a6 = a8.k0 - 1; 0 <= a6; a6--) this.il[a6 + jv] = k3;
		else
			for (var jz = 8 === a8.jw ? 1 : 0, a6 = a8.k0 - 1; 0 <= a6; a6--) this.il[a6 + jv] = jz;
		for (a6 = 0; a6 < jv; a6++) this.il[a6] = 6;
		var eV = a8.eS;
		for (a6 = 0; a6 < eV; a6++) this.il[a6] <= 2 ? (jn[a6] = 5, jo[a6] = jp[a6] = 1040, 0 === this.il[a6] ? (jl[a6] = 980, jm[a6] = 980) : 1 === this.il[a6] ? (jl[a6] = 980, jm[a6] = 920, jo[a6] = jp[a6] = 1100) : (jl[a6] = 825, jm[a6] =
			750)) : this.il[a6] <= 4 ? (jn[a6] = 1 + av.iu(20), 3 === this.il[a6] ? (jl[a6] = jm[a6] = 500, jo[a6] = jp[a6] = 1e3) : (jp[a6] = 250 + av.iu(1501), jo[a6] = 500 + av.iu(501), jl[a6] = 300 + av.iu(201), jm[a6] = 100 + av.iu(
			201))) : this.il[a6] <= 5 ? (jo[a6] = 1e3, jp[a6] = 1e3, jn[a6] = 35 + av.iu(16), jl[a6] = 300 + av.iu(201), jm[a6] = 50 + av.iu(101)) : (jo[a6] = jp[a6] = 800, jn[a6] = 5, jl[a6] = 10, jm[a6] = 250), k4(a6)
	}, this.jx = function() {
		for (var e9 = 0, jv = a8.jc, ep = 0; ep < 6; ep++) {
			for (var a6 = e9 + aw.k5[ep] - 1; e9 <= a6; a6--) this.il[a6 + jv] = ep;
			e9 += aw.k5[ep]
		}
	}, this.jO = function(g4, value) {
		jk[g4] = Math.min(value, jk[g4])
	}, this.iR = function(g4) {
		0 == --jk[g4] && ! function(g4) {
			(function(g4) {
				jo[g4] !== jp[g4] && (jo[g4] += jo[g4] < jp[g4] ? 3 : -3);
				jl[g4] !== jm[g4] && (jl[g4] += jl[g4] < jm[g4] ? jn[g4] : -jn[g4], jl[g4] = (Math.abs(jl[g4] - jm[g4]) <= jn[g4] ? jm : jl)[g4]);
				jk[g4] = bH.ex(jo[g4], 10)
			})(g4), ai.iN.jF(g4, bH.ex(jl[g4] * ab.gY[g4], 1e3))
		}(g4)
	}, this.k8 = function(g4, fz) {
		jo[g4] = jp[g4] = fz
	}
}

function iJ() {
	var k9 = new Uint16Array(a8.eS);

	function kE(player, kC) {
		for (var eV = bK.f2[0], f9 = bK.f9, kN = -1, kO = a8.eS, a6 = 0; a6 < eV; a6++) {
			var el, g4 = f9[a6];
			eO(player, g4) && (el = bI.hm(kC, bI.i7(g4)), -1 === kN || el < kN) && (kN = el, kO = g4)
		}
		return kO
	}

	function kG(kD, kC) {
		if (kD === a8.eS) return 0;
		for (var gD = ab.gD[kD], kM = gD.length, eV = Math.min(kM, 10), kO = 0, kN = bI.hm(gD[kO] >> 2, kC), a6 = 0; a6 < eV; a6++) {
			var k1 = av.iu(kM),
				el = bI.hm(gD[k1] >> 2, kC);
			el < kN && (kN = el, kO = k1)
		}
		return gD[kO] >> 2
	}

	function kJ(player, kC, ik, kR) {
		var kS;
		(kR === a8.eS || (kS = bI.i7(ik), kR = bI.i7(kR), bI.hm(kC, kS) < bI.hm(kC, kR))) && (k9[player] = ik)
	}
	this.dR = function() {
		k9.fill(a8.eS)
	}, this.iR = function(player) {
		var kC, kF, kD, ik = function(player) {
			var ik = k9[player];
			if (ik !== a8.eS) {
				if (b7.fs.kQ(ik)) return ik;
				k9[player] = a8.eS
			}
			return a8.eS
		}(player);
		return function(player) {
			for (var je = ag.jf, kM = ag.jd, eV = Math.min(kM, kM < 17 && 5 === av.iu(20) ? 1 : 16), g5 = av.iu(kM), f9 = bK.f9, gD = ab.gD, fz = 0, a6 = 0; a6 < eV; a6++) {
				var g4 = je[(a6 + g5) % kM];
				g4 !== player && gD[g4].length && (f9[fz++] = g4)
			}
			bK.f2[0] = fz
		}(player), 0 !== bK.f2[0] && (0 < (kF = kG(kD = kE(player, kC = bI.iC(player)), kC)) && bJ.kH.kI(player, kF) ? (kJ(player, kC, kD, ik), !0) : 0 < (kD = function(player, kC) {
			for (var eV = bK.f2[0], f9 = bK.f9, kP = k9, g5 = 0, a6 = 0; a6 < eV; a6++) {
				var g4 = f9[a6],
					g4 = kP[g4];
				g4 !== a8.eS && b7.fs.kQ(g4) && player !== g4 && eO(player, g4) && (f9[g5++] = g4)
			}
			return 0 !== (bK.f2[0] = g5) ? kG(kE(player, kC), kC) : 0
		}(player, kC)) && bJ.kH.kI(player, kD) ? (kJ(player, kC, aX.eN(kD << 2), ik), !0) : !!(0 < (kF = kG(ik, kC)) && bJ.kH.kI(player, kF)))
	}
}

function iQ() {
	function kW(player) {
		for (var ev = ab.ev[player], eV = ev.length, ew = Math.max(bH.ex(eV, 12), 1), eX = aX.eX, hH = av.iu(eV), a6 = 0; a6 < eV; a6 += ew)
			for (var eK = ev[(a6 + hH) % eV], eY = 3; 0 <= eY; eY--) {
				var eZ = eK + eX[eY];
				if (aX.ea(eZ)) return {
					e9: eZ,
					id: aX.eD(eZ),
					g4: player
				}
			}
		return null
	}

	function kb(player, kd) {
		var il = b7.fs.ke(player, a9.ju[a9.il[player]]);
		ab.fy[player].push(kd.e9), aY.ih(player, il, kd.g4), aA.ii(player, !0)
	}
	this.iR = function(player) {
		return !!bO.eA(bO.eB) && !!a8.data.passableMountains && 0 !== ab.ev[player].length && function(player) {
			var kV = kW(player);
			if (null === kV) return !1;
			! function(player) {
				for (var jf = ag.jf, jd = ag.jd, eV = Math.min(jd, 12), g5 = av.iu(jd), f9 = bK.f9, ev = ab.ev, fz = 0, a6 = 0; a6 < eV; a6++) {
					var g4 = jf[(a6 + g5) % jd];
					g4 !== player && ev[g4].length && eO(player, g4) && (f9[fz++] = g4)
				}
				bK.f2[0] = fz
			}(player);
			var kY = function(eC) {
				for (var eV = bK.f2[0], f9 = bK.f9, a6 = 0; a6 < eV; a6++) {
					var kd = kW(f9[a6]);
					if (null !== kd && kd.id === eC) return kd
				}
				return null
			}(kV.id);
			return null !== kY ? (kb(player, kY), !0) : function(player, eC) {
				var eV = ai.iE.kc;
				if (0 !== eV)
					for (var e9 = ai.iE.dk[av.iu(eV)] << 2, eX = aX.eX, eY = av.iu(4);;) {
						if (e9 += eX[eY], aX.ea(e9)) {
							if (aX.eD(e9) === eC) return kb(player, {
								e9: e9,
								g4: a8.eS
							}), !0;
							break
						}
						if (!aX.eM(e9)) break
					}
				return !1
			}(player, kV.id)
		}(player)
	}
}

function iH() {
	this.iR = function(player) {
		var eH = function(player) {
			var eV = ai.iE.kc;
			if (0 === eV) return -1;
			for (var kM = Math.min(eV, ai.performance.kg ? eV : 10), dk = ai.iE.dk, it = bH.ex(av.random() * eV, av.value(100)), e = it + kM, kh = av.iD(ab.i8[player], ab.i9[player]), ki = av.iD(ab.iA[player], ab.iB[player]), kO = -1, el = bI
					.hn(0, 0, bO.eg, bO.eh), a6 = it; a6 < e; a6++) {
				var g5 = a6 % eV,
					kj = bI.en(kh, ki, dk[g5]);
				kj < el && (el = kj, kO = g5)
			}
			return -1 !== kO ? dk[kO] : -1
		}(player);
		return -1 !== eH && bJ.kH.kI(player, eH)
	}
}

function iK() {
	this.kg = 0, this.dR = function() {
		this.kg = 0
	}, this.iR = function() {
		if (!this.kg && bb.jZ() % 30 == 7 && b7.fs.km(80) && (ai.performance.kg = 1)) {
			if (a8.ic) {
				var kp = bd.kq();
				if (bc.k2[kp]) {
					bd.kr(kp);
					var g = bK.fA,
						eV = bK.f2[0];
					if (0 !== eV)
						for (var ks = Math.min(100 + 10 * (eV - 1), 400), a6 = 0; a6 < eV; a6++) a9.k8(g[a6], ks)
				}
			}
			a9.k8(kt[0], 100)
		}
	}
}

function iF() {
	var ku, kv, kw = 300,
		kx = 300,
		ky = (this.kc = 0, this.dk = new Uint32Array(512), !1);
	this.dR = function() {
		ky = !1, kv = ku = 0, this.kc = 0
	}, this.iR = function() {
		if (function() {
				var eV = ai.iE.kc;
				if (0 === eV) return 1;
				var dk = ai.iE.dk;
				if (bb.jZ() % 35 == 6) {
					for (var a6 = eV - 1; 0 <= a6; a6--) aX.eM(dk[a6] << 2) || (eV--, dk[a6] = dk[eV]);
					ai.iE.kc = eV
				}
				return eV < dk.length
			}() && !(kw <= ku)) {
			var a6, a0 = bO.eg,
				l2 = a0 - 2,
				eV = l2 * (bO.eh - 2),
				l3 = kw,
				dk = ai.iE.dk,
				kM = ai.iE.kc,
				l4 = dk.length,
				g5 = Math.min(kv + l3 * ((1 + 19 * ai.performance.kg) * kx), eV);
			for (a6 = kv; a6 < g5; a6 += l3) {
				var e9 = 4 * (a6 % l2 + (bH.ex(a6, l2) + 1) * a0 + 1);
				if (aX.eM(e9) && (dk[kM] = e9 >> 2, ++kM === l4)) {
					a6 += l3;
					break
				}
			}(kv = a6) >= eV && (kv = ++ku), ai.iE.kc = kM
		}
	}, this.l1 = function() {
		ky || (this.dR(), ky = !0)
	}
}

function l5() {
	aI.iR(), aa.iR(), aR.l6(), ax.l7.iR()
}

function l8() {
	ay.iR(), aB.iR(), aZ.iR(), b1.iR(), aA.iR(), ai.iR(), bJ.l7.iR(), ag.l9(), aQ.iR(), aw.iR(), bN.iR(), bR.iR(), aa.iR(), aa.lA(), aR.iR(), bL.iR(), aP.iR(), aK.iR(), aI.iR(), b2.iR(), aM.iR(), ar.iR(), bZ.iR(), bd.iR(), ax.l7.iR(), ax.lB.iR(), n
		.iR(), b6.iR(), bb.iR()
}

function lC() {
	aC.iR(), aS.iR(), aL.iR(), ao.iR(), b8.iR(), at.lD()
}

function lE() {
	aQ.lF(!1), aK.lF(), aR.lF(!1), aP.lF(), aM.lF(), ar.lF(), aa.lF(!1), bd.lG()
}

function lH() {
	aa.lF(!1) && (bb.dZ = !0), ax.l7.iR()
}

function bx() {
	var lI, lJ, lK;

	function lM(lO) {
		for (var a6 = lI - 1; 0 <= a6; a6--) 0 === lK[lJ[a6]] && ab.gK[lJ[a6]] >= lO && fZ(lJ[a6])
	}

	function lL(player) {
		var e4;
		64 === lK[player] ? lK[player] = 6 : (e4 = ab.gK[player], lK[player] = e4 < 1e3 ? 3 : e4 < 1e4 ? 2 : e4 < 6e4 ? 1 : 0)
	}
	this.dR = function() {
		lI = 0, lJ = new Uint16Array(a8.eS), lK = new Uint8Array(a8.eS)
	}, this.iR = function() {
		for (var a6 = lI - 1; 0 <= a6; a6--) 64 === lK[lJ[a6]] ? lL(lJ[a6]) : 0 == lK[lJ[a6]]-- && (lL(lJ[a6]), fZ(lJ[a6]));
		16e4 <= ab.gK[kt[0]] && (lM(16e4), 3e5 <= ab.gK[kt[0]]) && lM(3e5), b7.fs.kQ(a8.eF) && (bZ.lP[7] = Math.max(ab.gK[a8.eF], bZ.lP[7]))
	}, this.fu = function(player) {
		for (var eo, a6 = lI - 1; 0 <= a6; a6--)
			if (player === lJ[a6]) {
				for (lI--, eo = a6; eo < lI; eo++) lJ[eo] = lJ[eo + 1];
				return
			}
	}, this.ii = function(player, lQ) {
		for (var a6 = lI - 1; 0 <= a6; a6--)
			if (player === lJ[a6]) return;
		lJ[lI++] = player, lK[player] = lQ ? 2 : 64
	}
}

function by() {
	var size, jQ;
	this.dR = function() {
		size = a8.k0, jQ = new Uint16Array(a8.eS);
		for (var jc = a8.jc, a6 = a8.k0 - 1; 0 <= a6; a6--) jQ[a6] = jc + a6
	}, this.iR = function() {
		for (var a6 = size - 1; 0 <= a6; a6--)
			if (0 === ab.lT[jQ[a6]]) {
				eo = void 0;
				var eo = a6;
				size--, jQ[eo] = jQ[size]
			} else a9.iR(jQ[a6])
	}, this.lS = function(g4) {
		jQ[size++] = g4
	}
}

function bz() {
	var lV, lW, lX, lY, lZ, la, lb, lc, ld, le, lf, lg, lh, li = !1,
		lj = !1;

	function lk(ll) {
		lg = bb.e3, lX = lY = lW = 0, lZ = (lh = 33) / ll, lV = 1 / (ll / lh / 4), la = (au.a0 / 2 + hu) / hv, lb = (au.j6 / 2 + hw) / hv, lc = hv
	}

	function ls(a6) {
		var lv; - 1 !== a6 && (a6 = bI.i1(bJ.l7.lu[a6]), lv = bI.ed(a6) - 10, a6 = bI.ef(a6) - 10, aC.lo(lv, a6, 19 + lv, 19 + a6))
	}

	function m6(m8) {
		Math.abs(Math.log(lf / lc)) < .125 && (lf = m8 * lc)
	}

	function m5(lv, lw, m9, mA) {
		ld = (lv + m9 + 1) / 2, le = (lw + mA + 1) / 2;
		m9 = au.a0 / (m9 - lv + 1), lv = au.j6 / (mA - lw + 1);
		lf = .9 * (m9 < lv ? m9 : lv)
	}
	this.lm = function() {
		return li
	}, this.ln = function() {
		lk(1), this.lo(0, 0, bO.eg - 1, bO.eh - 1), a8.gs || a8.gg || this.lp(a8.eF, 3e3, !0, .3)
	}, this.lq = function(player, lr) {
		ls(bJ.h0.lt(player, lr))
	}, this.lp = function(player, ll, lx, zoom) {
		a8.ly || li && !lx && lj || (0 === ab.gK[player] ? ls(bJ.h0.lz(player)) : (aN.m0 = !1, lj = lx, lk(ll), function(player) {
			ld = (ab.i8[player] + ab.i9[player] + 1) / 2, le = (ab.iA[player] + ab.iB[player] + 1) / 2
		}(player), function(zoom, player) {
			var hf = ab.i9[player] - ab.i8[player] + 1,
				player = ab.iB[player] - ab.iA[player] + 1,
				eo = au.a0 / hf,
				ep = au.j6 / player,
				eo = (lf = eo < ep ? eo : ep, 0 !== zoom ? zoom : hf < 20 && player < 20 ? .5 : .9);
			lf *= eo, m6(7 / 8)
		}(zoom, player), li = !0, al.m3()))
	}, this.m4 = function(ll) {
		a8.gg || a8.ly || (aN.m0 = !1, lj = !1, lk(ll), m5(0, 0, bO.eg - 1, bO.eh - 1), m6(7 / 8), li = !0, al.m3())
	}, this.lo = function(lv, lw, m9, mA) {
		m5(lv, lw, m9, mA), hv = lf, aN.mB(ld, au.a0 / 2), aN.mC(le, au.j6 / 2), bW.mD(), bb.dZ = !0
	}, this.mE = function() {
		return !(li && lj || (li = !1))
	}, this.iR = function() {
		var mH, mI, eY, mL;
		li && (lW < .5 ? lY < lZ && (lY += lZ * lV, lX = lW) : 1 - lX < lW && (lY = (lY -= lZ * lV) < lZ * lV ? lZ * lV : lY), lg = lg >= bb.e3 ? bb.e3 - 1 : lg, eY = bb.e3 - lg, lW = 1e3 < eY || 1 < (lW += lY * eY / lh) ? 1 : lW, lg = bb.e3,
			eY = hv, mH = hu, mI = hw, eY = (hv = lc * Math.pow(lf / lc, lW)) / eY, mL = 1 - (lc * Math.pow(lf / lc, 1 - lW) - lc) / (lf - lc), aN.mB(la + mL * (ld - la), au.a0 / 2), aN.mC(lb + mL * (le - lb), au.j6 / 2), aa.zoom(eY, (mH *
				eY - hu) / (1 - eY), (mI * eY - hw) / (1 - eY)), bW.mD(), 1 <= lW && (li = !1, bX.mM = !0), bb.dZ = !0)
	}
}

function br() {
	var eq = b7.color;
	this.mN = eq.mO(0, 0, 0), this.mP = eq.mQ(0, 0, 0, .7), this.mR = eq.mQ(0, 0, 0, .5), this.mS = eq.mQ(0, 0, 0, .85), this.mT = eq.mQ(0, 0, 0, .75), this.mU = eq.mQ(0, 0, 0, .6), this.mV = eq.mQ(0, 0, 0, .35), this.mW = eq.mO(255, 255, 255), this
		.mX = eq.mQ(255, 255, 255, .3), this.mY = eq.mQ(255, 255, 255, .6), this.mZ = eq.mQ(255, 255, 255, .4), this.ma = eq.mQ(255, 255, 255, .25), this.mb = eq.mQ(255, 255, 255, .85), this.mc = eq.mQ(255, 255, 255, .75), this.md = eq.mQ(255, 255,
			255, .15), this.me = eq.mO(128, 128, 128), this.mf = eq.mQ(64, 64, 64, .75), this.mg = eq.mQ(88, 88, 88, .83), this.mh = eq.mQ(60, 60, 60, .85), this.mi = eq.mQ(80, 60, 60, .85), this.mj = eq.mO(30, 255, 30), this.mk = eq.mO(0, 200, 0),
		this.ml = eq.mO(128, 255, 128), this.mm = eq.mQ(10, 65, 10, .75), this.mn = eq.mQ(0, 255, 0, .6), this.mo = eq.mQ(0, 255, 0, .5), this.mp = eq.mQ(0, 200, 0, .5), this.v = eq.mQ(0, 100, 0, .75), this.mq = eq.mQ(0, 60, 0, .8), this.mr = eq.mQ(
			0, 255, 0, .3), this.ms = eq.mQ(0, 180, 0, .6), this.mt = eq.mQ(0, 120, 0, .85), this.mu = eq.mO(0, 120, 0), this.mv = eq.mQ(0, 70, 0, .85), this.mw = eq.mO(255, 120, 120), this.mx = eq.mO(255, 160, 160), this.my = eq.mO(255, 70, 70),
		this.mz = eq.mO(230, 0, 0), this.n0 = eq.mQ(220, 0, 0, .6), this.n1 = eq.mQ(255, 100, 100, .8), this.n2 = eq.mQ(100, 0, 0, .85), this.n3 = eq.mQ(60, 0, 0, .85), this.n4 = eq.mQ(200, 0, 0, .6), this.n5 = eq.mQ(120, 0, 0, .85), this.n6 = eq.mO(
			255, 70, 10), this.n7 = eq.mQ(0, 60, 60, .85), this.n8 = eq.mQ(10, 60, 60, .9), this.n9 = eq.mQ(0, 96, 96, .75), this.nA = eq.mO(160, 160, 255), this.nB = eq.mQ(0, 40, 90, .75), this.nC = eq.mQ(0, 0, 255, .6), this.nD = eq.mO(200, 200,
			255), this.nE = eq.mO(255, 120, 100), this.nF = eq.mQ(255, 255, 0, .5), this.nG = eq.mQ(255, 255, 150, .2), this.nH = eq.mO(255, 255, 0), this.nI = eq.mO(255, 255, 200), this.nJ = eq.mQ(200, 200, 0, .6), this.nK = eq.mQ(140, 120, 0, .75),
		this.nL = eq.mQ(180, 160, 40, .75), this.nM = eq.mQ(70, 50, 20, .85), this.nN = eq.mQ(30, 30, 0, .85), this.nO = eq.mQ(255, 140, 0, .75), this.nP = eq.mQ(0, 0, 0, 0)
}

function cq() {
	this.gt = new nQ, this.fs = new nR, this.nS = new nT, this.nU = new nV, this.jh = new nW
}

function nQ() {
	this.gu = function(eH) {
		a8.jy ? b5.nS.gu(a8.eF, eH) : ax.nX.nY(eH)
	}, this.h4 = function(ht, ik) {
		a8.jy ? b5.nS.h4(a8.eF, ht, ik) : ax.nX.nZ(ht, ik)
	}, this.na = function(ht, nb) {
		a8.jy ? b5.nS.nc(a8.eF, ht, nb) : ax.nX.nd(ht, nb)
	}, this.h2 = function(ht, eH) {
		a8.jy ? b5.nS.h2(a8.eF, ht, eH) : bJ.h0.h1(a8.eF, eH) && ax.nX.ne(ht, eH)
	}, this.nf = function(lr, eH) {
		a8.jy ? b5.nS.nf(a8.eF, lr, eH) : bJ.h0.ng(a8.eF, lr, eH) && ax.nX.nh(lr, eH)
	}, this.ni = function(ik) {
		a8.jy ? b5.nS.ni(a8.eF, ik) : ax.nX.nj(ik)
	}, this.nk = function(nl) {
		a8.jy ? b5.nS.nm(a8.eF, nl) : ax.nX.nn(nl)
	}, this.no = function(np) {
		a8.jy ? b5.nS.no(a8.eF, np) : ax.nX.nq(np)
	}, this.nr = function() {
		a8.jy ? b5.nS.nr(a8.eF) : ax.nX.ns()
	}, this.nt = function() {
		a8.jy ? b5.nS.nt(a8.eF) : ax.nX.ne(1, 0)
	}, this.gx = function(ht, eH, ik) {
		a8.jy ? b5.nS.gx(a8.eF, ht, eH, ik) : ax.nX.nu(ht, eH, ik)
	}
}

function nW() {
	this.ji = function(player, nb, il) {
		b7.fs.nv(player, il, nb) && (aZ.na(player, nb), nb < a8.jc) && av.random() < av.value(10) && (ai.iN.ie[nb] = 0)
	}, this.nw = function(player, nb, il) {
		b7.fs.nx(il, nb) ? (b7.fs.fv(nb, bK.f4[0]), bZ.ny(player, nb), aa.nz(nb, bK.f4[0])) : bZ.fw(player, il, 12)
	}
}

function nR() {
	this.o0 = function(nl, player) {
		aI.nk(a8.eF, player, nl), ax.nX.o1(nl, player)
	}, this.o2 = function(player) {
		aI.o3(player, 0), ax.nX.o4(player)
	}, this.o5 = function(o6, player) {
		aI.o7(o6, player), ax.nX.o8(o6, player)
	}, this.o9 = function() {
		a8.jy || a8.gg || ax.oA.o9()
	}
}

function nV() {
	this.iR = function(a7) {
		var id, fE, mE;
		for (bD.dR(a7), bD.oB += 2, mE = 8 * bD.size; bD.oB + 8 <= mE;) id = bD.oC(4), fE = bD.oC(9), 0 === id ? this.oD(id, fE, bD.oC(22)) : 1 === id ? this.oD(id, fE, bD.oC(10), bD.oC(10)) : 2 === id ? this.oD(id, fE, bD.oC(10), bD.oC(9)) :
			3 === id || 4 === id ? this.oD(id, fE, bD.oC(10), bD.oC(22)) : 5 === id || 6 === id ? this.oD(id, fE, bD.oC(10)) : 7 === id ? this.oD(id, fE, bD.oC(1)) : 10 === id ? this.oD(id, fE, bD.oC(20), bD.oC(22)) : this.oD(id, fE)
	}, this.oE = [], this.oF = function() {
		for (var oH = 0, oI = 0, oJ = 0, oK = 0, oL = 0, oM = 0, a6 = 0; a6 < 512; a6++) oH += ab.lT[a6], oI += ab.gK[a6], oJ += ab.gY[a6], oK += bJ.l7.oN[a6];
		oL += bJ.l7.oO, oM += ag.jd, this.oE.push(oJ % 1073741824 * 4 + (oH + oI + oK + oL + oM) % 4)
	}, this.oD = function(id, fE, fG, fI) {
		0 === id ? b5.nS.gu(fE, fG) : 1 === id ? b5.nS.h4(fE, fG, fI) : 2 === id ? b5.nS.nc(fE, fG, fI) : 3 === id ? b5.nS.h2(fE, fG, fI) : 4 === id ? b5.nS.nf(fE, fG, fI) : 5 === id ? b5.nS.ni(fE, fG) : 6 === id ? b5.nS.nm(fE, fG) : 7 === id ?
			b5.nS.no(fE, fG) : 8 === id ? b5.nS.nr(fE) : 9 === id ? b5.nS.oP(fE) : 10 === id && b5.nS.gx(fE, fG >> 10, fI, fG % 1024)
	}
}

function nT() {
	this.gu = function(player, eH) {
		b7.fs.gi(0) && b7.fs.gj(player) && bI.hy(eH) && (b6.oQ.oR(0, player, eH), a8.oS.ih(player, eH))
	}, this.h4 = function(player, ht, ik) {
		b7.fs.gi(1) && b7.fs.gj(player) && b7.fs.oT(player, ik) && b7.fs.oU(player, ht, 12, 0) && b7.fs.oV(player, ik) && ((ik = aY.iy(player, bK.eR[0])) || aY.jG(player)) && (ab.oW[player]++, b6.oQ.oR(1, player, ht, bK.eR[0]), ai.iL.iV(player,
			ik)) && (b7.fs.oX(player), bZ.oY(player, ht), ai.iL.ib(player))
	}, this.nc = function(player, ht, nb) {
		b7.fs.gi(1) && b7.fs.gj(player) && a8.ic && b7.fs.oT(player, nb) && b7.fs.oZ(player, nb) && b7.fs.nv(player, b7.fs.hs(player, ht), nb) && (b6.oQ.oR(2, player, ht, nb), aZ.na(player, nb))
	}, this.h2 = function(player, ht, eH) {
		b7.fs.gi(1) && b7.fs.gj(player) && (0 === eH && 1 === ht ? this.nt(player) : bI.hy(eH) && bJ.l7.oO !== bJ.l7.jt && bJ.l7.oN[player] !== bJ.l7.oa && 0 !== ab.gD[player].length && b7.fs.oU(player, ht, 32, 0) && bJ.kH.kI(player, eH) && (bZ
			.ob(player), b6.oQ.oR(3, player, ht, eH), b7.fs.oX(player), bi.oc.h2(player), bJ.l7.od(player)))
	}, this.nf = function(player, lr, eH) {
		b7.fs.gi(1) && b7.fs.gj(player) && bI.hy(eH) && bJ.h0.oe(player, lr) && bJ.kH.og(eH) && (b6.oQ.oR(4, player, lr, eH), b7.fs.oh(player, 8), bZ.fw(player, bK.f4[1], 12), bi.oc.nf(player), bJ.l7.nf())
	}, this.ni = function(player, ik) {
		b7.fs.gi(1) && b7.fs.gj(player) && (ik = Math.min(ik, a8.eS), aY.iy(player, ik)) && (b6.oQ.oR(5, player, ik), aY.oi(player, ik))
	}, this.nm = function(player, nl) {
		(b7.fs.gi(1) || b7.fs.gi(2)) && b7.fs.gj(player) && (nl = bH.oj(nl, 0, 1023), b6.oQ.oR(6, player, nl), aa.ok(player, 0, nl))
	}, this.no = function(player, np) {
		b7.fs.gi(1) && b7.fs.gj(player) && (b6.oQ.oR(7, player, np), ar.ol(player, np))
	}, this.nr = function(player) {
		(b7.fs.gi(0) || b7.fs.gi(1)) && b7.fs.gj(player) && bM.nr(player) && b6.oQ.oR(8, player)
	}, this.oP = function(player) {
		bM.oP(player), b6.oQ.oR(9, player)
	}, this.nt = function(player) {
		ar.om(player) && (b6.oQ.oR(3, player, 1, 0), ar.nt(player))
	}, this.gx = function(player, ht, eH, ik) {
		b7.fs.gi(1) && b7.fs.gj(player) && b7.fs.oT(player, ik) && b7.fs.oV(player, ik) && bI.hy(eH) && ah.e6.eP(player, eH) && (aY.iy(player, bK.eR[0]) || aY.jG(player)) && (b6.oQ.oR(10, player, (ht << 10) + bK.eR[0], eH), ik = b7.fs.ke(player,
			ht), ab.fy[player].push(bK.eW[0]), aY.ih(player, ik, bK.eR[0]), aA.ii(player, !0), bZ.on(player))
	}
}

function oo() {
	var oq;
	this.op = [], this.oq = document.createElement("div"), this.or = function(os, marginTop) {
		var title = document.createElement("h2");
		return title.textContent = os, title.style.margin = "0", title.style.marginBottom = "0.6em", marginTop && (title.style.marginTop = marginTop), title.style.fontSize = "1.4em", title.style.overflowWrap = "break-word", this.oq.appendChild(
			title), title
	}, this.ot = function(os, marginBottom) {
		var ou = document.createElement("p");
		return ou.textContent = os, ou.style.fontSize = "0.75em", ou.style.lineHeight = "1.2em", ou.style.marginBottom = marginBottom || "0", this.oq.appendChild(ou), ou
	}, this.ov = function(os) {
		var ow = document.createElement("p");
		return ow.textContent = os, ow.style.fontSize = "1em", ow.style.marginBottom = "0", ow.style.whiteSpace = "pre-wrap", ow.style.overflowWrap = "break-word", this.oq.appendChild(ow), ow
	}, this.ox = function(oy, fontSize) {
		var oq = document.createElement("div");
		return oq.innerHTML = oy, oq.style.fontSize = fontSize || "1em", oq.style.lineHeight = "1.2em", this.oq.appendChild(oq), oq
	}, this.oz = function(p0) {
		for (var p1 = p0.p1, eV = p1.length, a6 = 0; a6 < eV; a6++) this.oq.appendChild(p1[a6])
	}, this.p2 = function(p3) {
		return this.op.push(p3), this.oq.appendChild(p3.e), p3
	}, this.resize = function() {
		for (var eV = this.op.length, a6 = 0; a6 < eV; a6++) this.op[a6].resize && this.op[a6].resize()
	}, (oq = this.oq).style.position = "absolute", oq.style.height = "auto", oq.style.padding = "0.5em"
}

function p4(p5, p6) {
	var oq = document.createElement("div");

	function pF() {
		var a6, pG, j6, g5, eY, pA = au.pH * oq.offsetWidth,
			pI = new Float64Array(function(pA) {
				var a0 = .25 * b7.pB.pC(.6) * au.pD;
				return Math.max(Math.floor(pA / a0), 1)
			}(pA)),
			pJ = bY.pJ,
			pK = (pA - (pI.length + 1) * bY.gap) / (pI.length * au.pH);
		for (pI.fill(pJ), a6 = 0; a6 < p6.length; a6++) pG = (eY = p6[a6].oq).style, j6 = b7.pL.min(pI), g5 = pI.indexOf(j6), pG.top = b7.pB.pM(j6), pG.left = b7.pB.pM(pJ + g5 * (pK + pJ)), pG.width = b7.pB.pM(pK), b7.pB.pN(eY, 5), pI[g5] += eY
			.offsetHeight + 3 * pJ;
		oq.style.height = b7.pB.pM(b7.pL.max(pI) - 2 * pJ)
	}
	this.p7 = oq, this.p8 = p6, this.resize = function() {
		var a6;
		for (a6 = 0; a6 < p6.length; a6++) p6[a6].resize();
		pF(), pF()
	}, oq.style.width = "100%", oq.style.maxWidth = "100%", p5.style.lineHeight = "1.5em", p5.style.overflowX = "hidden", p5.style.overflowY = "auto";
	for (var a6 = 0; a6 < p6.length; a6++) oq.appendChild(p6[a6].oq);
	p5.appendChild(oq)
}

function q(title, pO, backgroundColor, pP, pQ) {
	var self, pR = document.createElement("button");

	function pX() {
		if (!bF.pc()) {
			if (!1 !== pP) {
				var pd = b7.color.pe(backgroundColor);
				if (0 < pd[0] && pd[0] < 255 && pd[0] === pd[1] && pd[0] === pd[2]) return
			}
			this.style.backgroundColor = b7.color.pX(backgroundColor, 50)
		}
	}

	function pW() {
		if (pP) {
			var pd = b7.color.pe(backgroundColor);
			if (pd[0] === pd[1] && pd[0] === pd[2]) return
		}
		pO(this) || pf(this)
	}

	function pZ() {
		this.style.backgroundColor = backgroundColor
	}

	function pY() {
		pf(this)
	}

	function pf(eY) {
		eY.style.backgroundColor = backgroundColor, eY.blur()
	}
	this.button = pR, this.pS = pO, this.pT = backgroundColor, this.pV = function(pa) {
			pa = 1.1 - Math.min(.01 * title.length, .6) + .2 * pa;
			pR.style.fontSize = pa.toFixed(1) + "em"
		}, this.pU = function(eq) {
			eq ? 1 === eq && (eq = u.mh) : (pP = 0, eq = u.mS), this.pT = backgroundColor = eq, pR.style.backgroundColor = eq
		}, self = this, pR.innerHTML = title, pR.style.color = pQ ? u.nH : u.mW, pR.style.userSelect = "none", pR.style.outline = "none", pR.style.overflowWrap = "break-word", self.pU(backgroundColor), pR.style.border = "none", pR.style.font =
		"inherit", self.pV(0), pR.style.padding = "0em 0.3em", pR.onclick = pW, pR.addEventListener("mouseover", pX), pR.addEventListener("mouseout", pY), pR.addEventListener("focus", pX), pR.addEventListener("blur", pZ)
}

function pg(ph, p5) {
	var oq;
	this.resize = function() {
		for (var a6 = 0; a6 < ph.length; a6++) b7.pB.pN(ph[a6].button);
		oq.style.gap = oq.style.padding = b7.pB.pM(bY.pJ)
	}, (oq = document.createElement("div")).style.display = "grid", oq.style.gridTemplateColumns = "repeat(auto-fill, minmax(9.5em, 1fr))", oq.style.overflowY = "auto", oq.style.gridAutoRows = "5.3em", oq.style.maxHeight = "100%";
	for (var a6 = 0; a6 < ph.length; a6++) ph[a6].pV(1), oq.appendChild(ph[a6].button);
	p5.appendChild(oq)
}

function pj(pk, pl, pm) {
	this.ec = 0, this.ee = 0, this.a0 = 0, this.j6 = 0, this.resize = function() {
		this.j6 = Math.min(b7.pB.pC(pm || .5) * pk[1] * au.pD, au.j6 - 2 * bY.gap), this.a0 = Math.min(this.j6 * (pk[0] / pk[1]), au.a0 - 2 * bY.gap), this.j6 = pk[1] * this.a0 / pk[0], this.ec = bY.gap + pl[0] * (au.a0 - this.a0 - 2 * bY.gap),
			this.ee = bY.gap + pl[1] * (au.j6 - this.j6 - 2 * bY.gap)
	}, this.pn = function() {
		return this.ec + .5 * this.a0
	}
}

function po(pp, pq, pr) {
	function click() {
		var value = 1 - pp.value;
		this.textContent = (value ? "🟩 " : "⬜ ") + pq, void 0 !== pp.oB ? bf.ps.pt(pp.oB, value) : pp.value = value, pr && pr(value)
	}
	var e;
	pq = pq || L(6), this.e = document.createElement("p"), (e = this.e).textContent = (pp.value ? "🟩 " : "⬜ ") + pq, e.style.margin = "0", e.style.marginBottom = "0.5em", e.style.cursor = "pointer", e.addEventListener("click", click)
}

function pu(p5, oy) {
	var oq = document.createElement("div");
	this.p7 = oq, this.resize = function() {
		oq.style.padding = b7.pB.pM(bY.pJ), oq.style.lineHeight = b7.pB.pM(b7.pB.pv(.035))
	}, p5.style.overflowX = "hidden", p5.style.overflowY = "auto", oq.innerHTML = oy, p5.appendChild(oq)
}

function pw(px) {
	var oq = document.createElement("div");
	this.e = oq, this.py = px, this.resize = function() {
		for (var eV = px.length, a6 = 1; a6 < eV; a6++) b7.pB.pN(px[a6], 4)
	};
	var a6, eV = px.length;
	for (oq.style.width = "100%", oq.style.height = "2.7em", oq.style.marginTop = "0.6em", oq.style.border = "inherit", a6 = 0; a6 < eV; a6++) px[a6].style.verticalAlign = "top", px[a6].style.width = (100 / eV).toFixed(2) + "%", px[a6].style.height =
		"100%", px[a6].style.fontSize = "0.75em", oq.appendChild(px[a6])
}

function pz() {
	var e;
	this.e = document.createElement("hr"), this.resize = function() {
		b7.pB.pN(this.e, 8, u.me)
	}, (e = this.e).style.marginBottom = e.style.marginTop = "0.65em", e.style.marginLeft = e.style.marginRight = "-4%", e.style.border = "none"
}

function q1(q2, type, q3, q4) {
	var e;
	this.e = document.createElement("input"), (e = this.e).type = type ? "number" : "text", e.id = "input" + n.l7.q5++, e.value = q2.value, e.style.width = "100%", e.style.userSelect = "none", e.style.outline = "none", e.style.resize = "none", e
		.style.border = "inherit", e.style.font = "inherit", e.style.color = u.mW, e.style.backgroundColor = u.mP, e.style.fontSize = "1em", e.style.padding = "0.1em 0.2em", e.addEventListener("focus", function() {
			au.q6++
		}), e.addEventListener("blur", function() {
			au.q6--, -1 !== q2.oB && bf.ps.pt(q2.oB, e.value)
		}), e.addEventListener("keypress", function(event) {
			"Enter" === event.key && (event.preventDefault(), -1 !== q2.oB && bf.ps.pt(q2.oB, e.value), q3 ? q3() : e.blur())
		}), q4 && e.addEventListener("input", function(e) {
			q4(e)
		})
}

function q7(p5, data) {
	var eV = data.q8.length,
		q9 = document.createElement("div"),
		qA = document.createElement("div"),
		qB = document.createElement("div"),
		qC = new Array(eV),
		p6 = new Array(eV),
		qD = new Array(data.qE.length),
		qF = b7.color.mQ(70, 70, 0, .35);

	function pX() {
		this.style.backgroundColor = b7.color.pX(qF, 160)
	}

	function pY() {
		this.style.backgroundColor = qF
	}

	function pF() {
		var eo;
		for (p5.style.font = b7.pB.qS(0, b7.pB.qT(.026, .5, .03)), a6 = 1; a6 < qD.length; a6++) b7.pB.pN(qD[a6], 4);
		if (b7.pB.pN(q9, 2), eV) {
			for (var gw, qU = q9.offsetWidth, qV = qB.offsetWidth, a6 = 0; a6 < qD.length; a6++) gw = .01 * data.qI[a6] * qV, qD[a6].style.width = (100 * gw / qU).toFixed(2) + "%";
			var kM = data.q8[0].length;
			for (a6 = 0; a6 < eV; a6++)
				for (b7.pB.pN(qC[a6], 2), eo = 1; eo < kM; eo++) b7.pB.pN(p6[a6][eo], 4)
		}
	}
	this.resize = function() {
			pF(), pF()
		}, p5.style.display = "flex", p5.style.flexDirection = "column", qA.style.overflowX = "hidden", qA.style.overflowY = "auto",
		function() {
			var eY, a6, q8 = data.q8,
				kM = eV ? q8[0].length : 0;
			for (a6 = 0; a6 < eV; a6++) {
				qC[a6] = document.createElement("div"), qC[a6].style.backgroundColor = function(a6) {
					return a6 % 2 == 1 ? b7.color.mQ(130, 130, 130, .35) : u.mV
				}(a6), qC[a6].style.width = "100%", qC[a6].style.display = "flex", p6[a6] = new Array(kM);
				for (var eo = 0; eo < kM; eo++) p6[a6][eo] = eY = document.createElement("div"), eY.style.display = "flex", eY.style.justifyContent = "center", eY.style.wordBreak = "break-all", eY.style.padding = "0.4em 0em", eY.style.width = data
					.qI[eo] + "%", eY.innerHTML = q8[a6][eo].ey, 1 === q8[a6][eo].e4 && (eY.name = "" + a6, eY.style.color = u.nH, eY.style.backgroundColor = qF, eY.addEventListener("mouseover", pX), eY.addEventListener("mouseout", pY), function(eY,
						qK, qL) {
						2147483647 !== qL && eY.addEventListener("click", function() {
							b9.a2(30), b9.a3(30, qK), bD.dR(b9.a7), this.style.backgroundColor = qF, n.o(8, n.qM, new qN(25, {
								qO: 0,
								qK: bB.qP.qQ(bB.qP.qR(5)),
								qL: qL
							}))
						})
					}(eY, q8[a6][eo].qK, q8[a6][eo].qL)), qC[a6].appendChild(eY)
			}
			for (q9.style.display = "flex", q9.style.backgroundColor = b7.color.mQ(0, 120, 0, .35), a6 = 0; a6 < qD.length; a6++) qD[a6] = eY = document.createElement("div"), eY.style.display = "flex", eY.style.justifyContent = "center", eY.style
				.wordBreak = "break-all", eY.style.padding = "0.4em 0em", eY.style.width = data.qI[a6] + "%", eY.innerHTML = data.qE[a6], q9.appendChild(eY)
		}();
	for (var a6 = 0; a6 < eV; a6++) qB.appendChild(qC[a6]);
	qA.appendChild(qB), p5.appendChild(q9), p5.appendChild(qA)
}

function qW() {
	var qa, a6, qX = document.createElement("div"),
		qY = document.createElement("div"),
		qZ = document.createElement("div"),
		qB = document.createElement("div"),
		ph = [],
		qE = ["Best 1v1 Player", "Top Clan", "Leading Clan Member"],
		qb = [1, 0, 2];

	function qc(a6) {
		n.o(8, 0, new qN(21, {
			qd: qb[a6],
			qe: 0,
			qf: 10
		}))
	}
	for (this.show = function() {
			this.pt(n.l7.qg), document.body.appendChild(qX)
		}, this.qh = function() {
			document.body.removeChild(qX)
		}, this.pt = function(qg) {
			for (var a6 = 0; a6 < ph.length; a6++) ph[qb[a6]].button.innerHTML = qE[a6] + "<br>" + qg[a6]
		}, this.resize = function() {
			var a6, qi = bY.gap,
				j6 = b7.pB.qj(.085),
				a0 = Math.min(4 * j6, au.a0 - 2 * qi),
				eV = ph.length;
			for (b7.pB.qk(qX, qi, au.j6 - qi - j6, a0, j6), b7.pB.pN(qX), b7.pB.pN(qY, 6), a6 = 0; a6 < eV - 1; a6++) b7.pB.pN(ph[a6].button, 6);
			for (a6 = 0; a6 < eV; a6++) ph[a6].button.style.fontSize = b7.pB.ql(.22 * j6);
			if (!qa) {
				if (!aW.qm()) return;
				(qa = aW.get(14)).style.width = "24%", qa.style.position = "absolute", qY.appendChild(qa)
			}
			qa.style.left = b7.pB.pM(0), qa.style.top = "7%"
		}, qX.style.position = "absolute", qY.style.width = "25%", qY.style.height = "100%", qY.style.backgroundColor = u.mS, qZ.style.position = "absolute", qZ.style.width = "75%", qZ.style.height = "100%", qZ.style.backgroundColor = u.mS, qZ.style
		.top = qZ.style.right = b7.pB.pM(0), qZ.style.overflowX = "auto", qZ.style.overflowY = "hidden", qZ.style.whiteSpace = "nowrap", qB.style.height = qB.style.maxHeight = "100%", ph.push(new q("", function() {
			qc(0)
		}, u.n3)), ph.push(new q("", function() {
			qc(1)
		}, u.mq)), ph.push(new q("", function() {
			qc(2)
		}, u.n7)), a6 = 0; a6 < ph.length; a6++) ph[a6].button.style.height = "100%", qB.appendChild(ph[a6].button);
	qZ.appendChild(qB), qX.appendChild(qY), qX.appendChild(qZ)
}

function qn(q2, pW) {
	this.p1 = [];
	var qo = this.p1;

	function click() {
		for (var a6 = 0; a6 < qo.length; a6++) qo[a6].textContent = qo[a6].textContent.replace("🟢", "⚪");
		this.textContent = this.textContent.replace("⚪", "🟢");
		var oB = parseInt(this.name);
		void 0 !== q2.oB && bf.ps.pt(q2.oB, oB), pW && pW(oB)
	}
	for (var qp, eV = q2.qq.length, a6 = 0; a6 < eV; a6++)(qp = document.createElement("p")).textContent = "⚪ " + q2.qq[a6], qp.style.margin = "0", qp.name = "" + a6, qp.style.cursor = "pointer", qp.style.fontSize = "1em", qp.addEventListener(
		"click", click), qo.push(qp);
	qo[q2.value].textContent = qo[q2.value].textContent.replace("⚪", "🟢")
}

function qr(title, qs, qt) {
	var qX = document.createElement("div"),
		qu = document.createElement("div"),
		qB = document.createElement("div"),
		qv = document.createElement("div"),
		qw = document.createElement("div");
	this.qx = qB, this.qy = qs, this.show = function() {
			!1 !== qt ? document.body.appendChild(qX) : (document.body.appendChild(qu), document.body.appendChild(qv))
		}, this.qh = function() {
			!1 !== qt ? document.body.removeChild(qX) : (document.body.removeChild(qu), document.body.removeChild(qv))
		}, this.r2 = function() {
			var r3 = b7.pB.pv(.1),
				r4 = b7.pB.pv(.08 + .04 * (au.r5 < 1));
			return {
				r3: r3,
				r4: r4,
				r6: au.j6 / au.pH - r3 - r4
			}
		}, this.resize = function(r7) {
			var eV = qs.length,
				r8 = this.r2(),
				r3 = r8.r3,
				r4 = r8.r4;
			for (qu.style.height = b7.pB.pM(r3), b7.pB.pN(qu, 2), qv.style.top = b7.pB.pM(au.j6 / au.pH - r4), qv.style.height = b7.pB.pM(r4), b7.pB.pN(qv, 8), qB.style.top = b7.pB.pM(r3), qB.style.height = qB.style.maxHeight = b7.pB.pM(r8.r6), qu
				.style.font = b7.pB.qS(0, b7.pB.pv(.02, .3)), qv.style.font = b7.pB.qS(0, b7.pB.pv(.02, .7)), qB.style.font = b7.pB.qS(0, b7.pB.pv(.02, .7)), a6 = 1; a6 < eV; a6++) b7.pB.pN(qs[a6].button, 4);
			for (var r9 = 0, a6 = 0; a6 < eV; a6++) r9 += qs[a6].button.offsetWidth;
			if (r7 && r9 < qv.offsetWidth)
				for (a6 = 0; a6 < eV; a6++) qs[a6].button.style.width = (100 * qs[a6].button.offsetWidth / r9).toFixed(2) + "%";
			else
				for (a6 = 0; a6 < eV; a6++) qs[a6].button.style.width = "auto";
			r7 || this.resize(!0)
		}, this.rA = function() {
			var r8 = this.r2(),
				eq = au.pH;
			rB.fillStyle = u.mS, rB.fillRect(0, eq * r8.r3, au.a0, eq * r8.r6)
		}, qX.style.position = "absolute", qX.style.top = "0", qX.style.left = "0", qX.style.width = "100%", qX.style.height = "100%", qu.style.position = "absolute", qu.style.top = "0", qu.style.left = "0", qu.style.width = "100%", qu.style
		.display = "flex", qu.style.backgroundColor = u.mS, qv.style.position = "absolute", qv.style.left = "0", qv.style.width = "100%", qv.style.overflowX = "auto", qv.style.overflowY = "hidden", qv.style.whiteSpace = "nowrap", qw.style.height = qw
		.style.maxHeight = "100%", qB.style.position = "absolute", qB.style.width = "100%", qB.style.backgroundColor = u.mS,
		function() {
			for (var a6 = 0; a6 < qs.length; a6++) qs[a6].button.style.height = "100%", qs[a6].button.style.padding = "0.0em 0.9em"
		}();
	for (var a6 = 0; a6 < qs.length; a6++) qw.appendChild(qs[a6].button);
	qu.appendChild(function() {
		var r1 = document.createElement("h1");
		return r1.textContent = title, r1.style.margin = "auto", r1.style.fontSize = 20 < title.length && au.j6 > au.a0 ? "1.8em" : "2.3em", r1
	}()), qv.appendChild(qw), !1 !== qt && (qX.appendChild(qB), qX.appendChild(qu), qX.appendChild(qv))
}

function rC(rD, rE, rF, rG) {
	var rH = document.createElement("textarea"),
		rI = (this.e = rH, !0);

	function rO() {
		rH.select(), document.execCommand("copy")
	}
	this.resize = function() {
			rE && b7.pB.pN(rH, 5)
		}, this.rJ = function(rK) {
			rH.value = rK
		}, this.rL = function() {
			return rH.value
		}, this.rM = function() {
			rH.select()
		}, this.clear = function() {
			rH.value = ""
		}, this.rN = function() {
			rI && navigator.clipboard ? (rH.select(), navigator.clipboard.writeText(rH.value).catch(function() {
				rI = !1, rO()
			})) : rO()
		}, rH.setAttribute("id", "textArea" + n.l7.q5++), rH.setAttribute("autocomplete", "off"), rD && rH.setAttribute("placeholder", rD), rH.style.top = "0", rH.style.left = "0", rH.style.width = "100%", rH.style.height = "100%", rH.style
		.userSelect = "none", rH.style.outline = "none", rH.style.resize = "none", rH.style.border = "none", rH.style.color = u.mW, rH.style.backgroundColor = u.mP, rG ? (rH.style.fontSize = "1em", rH.rows = 6, rH.style.padding = "0.25em") : (rH
			.style.padding = "0.45em", rH.style.fontSize = "1.2em"), rF && rH.addEventListener("input", function(e) {
			rF(e)
		}), rH.addEventListener("focus", function() {
			au.q6++
		}), rH.addEventListener("blur", function() {
			au.q6--
		})
}

function dA() {
	this.pS = new rP, this.dk = new rQ, this.ps = new rR, this.l7 = new rS, this.dR = function() {
		this.dk.dR(), (new rT).dR()
	}
}

function rQ() {
	function rU(a6, type, ra, ez) {
		bf.dk.data.push({
			oB: a6,
			type: type || 0,
			value: ra || 0,
			ra: ra || 0,
			ez: ez || 0
		})
	}

	function rV(a6, type, ra, ez) {
		bf.dk.data.push({
			oB: a6,
			type: type,
			value: ra || "",
			ra: ra || "",
			ez: ez || 0
		})
	}

	function rW(mE) {
		for (var a6 = bf.dk.data.length; a6 < mE; a6++) bf.dk.data.push(null)
	}
	this.data = [], this.dR = function() {
		rU(0, 1, 0, 5), rU(1, 1, 1), rU(2, 0), rV(3, 2), rU(4, 1), rV(5, 2, "Trebuchet MS", 1), rU(6, 0), rU(7, 0, 0), rU(8, 0), rU(9, 1, 1), rU(10, 1), rU(11, 1, 1), rV(12, 2, navigator.language), rW(100), rV(100, 2), rV(101, 2), rV(102, 2), rV(
				103, 2), rV(104, 2), rV(105, 2), rV(106, 2), rU(107), rU(108), rU(109), rV(110, 2), rU(111), rU(112), rU(113), rV(114, 2), rU(115), rV(116, 2), rU(117, 1), rV(118, 2, "", 2), rU(119, 1, 0, 1), rV(120, 2), rU(121, 1, ~~(262144 *
				Math.random())), rV(122, 2, "Player " + Math.floor(1e3 * Math.random())), rU(123), rV(124), rU(125, 1), rV(126, 2), rU(127, 0, 1), rU(128), rU(129), rU(130), rU(131), rU(132), rV(133, 2), rU(134, 0, 5), rV(135, 2), rV(136, 2), rU(
				137), rU(138), rU(139), rU(140), rU(141), rU(142), rU(143), rU(144), rV(145, 2), rU(146), rU(147), rV(148, 2), rU(149), rU(150, 0, 1), rV(151, 2), rU(152, 0, 5), rU(153, 1), rU(154, 1), rV(155, 2), rV(156, 2), rW(180), rU(180, 0),
			rU(181, 0)
	}, this.pt = function(oB, value) {
		this.data[oB].value = value
	}, this.dl = function(oB, value) {
		this.pt(oB, value), bf.pS.save(oB, String(value)), bf.pS.save(oB, String(this.data[oB].ez), !0)
	}, this.rX = function() {
		for (var a6 = 0; a6 < this.data.length; a6++) this.data[a6] && (bf.pS.save(a6, String(this.data[a6].value)), bf.pS.save(a6, String(this.data[a6].ez), !0))
	}, this.rY = function(oB) {
		return Number(this.data[oB].value)
	}, this.rZ = function(oB) {
		return String(this.data[oB].value)
	}
}

function rP() {
	this.rb = function(oB, ez) {
		return Number(this.rc(oB, ez))
	}, this.rc = function(oB, ez) {
		var ey = null;
		return 0 === r.id ? r.rd && (ey = r.rd.getItem((ez ? "v" : "d") + oB)) : 1 === r.id ? ey = r.re.loadString((ez ? 1e3 : 2e3) + oB) : 2 === r.id && (ey = r.rf[(ez ? "v" : "d") + oB]), ey && 0 !== ey.length ? ey : null
	}, this.rg = function(eV, rh) {
		var g = [],
			ri = rh ? "e" : "l";
		if (0 === r.id) {
			if (r.rd)
				for (a6 = 0; a6 < eV; a6++) g.push(r.rd.getItem(ri + a6))
		} else if (1 === r.id)
			for (var rj = rh ? 5e3 : 3e3, a6 = 0; a6 < eV; a6++) g.push(r.re.loadString(rj + a6));
		else if (2 === r.id)
			for (a6 = 0; a6 < eV; a6++) g.push(r.rf[ri + a6]);
		return g
	}, this.save = function(oB, value, ez) {
		var rk = (ez ? "v" : "d") + oB;
		if (0 === r.id) {
			if (r.rd && bf.dk.data[140].value) try {
				r.rd.setItem(rk, value)
			} catch (e) {
				console.log(e)
			}
		} else 1 === r.id ? r.re.saveString((ez ? 1e3 : 2e3) + oB, value) : 2 === r.id && (r.rf[rk] = value, r.rl.postMessage(rk + " " + value))
	}, this.rm = function(g, rh) {
		var eV = g.length,
			ri = rh ? "e" : "l";
		if (0 === r.id) {
			if (r.rd && bf.dk.data[140].value) try {
				for (a6 = 0; a6 < eV; a6++) r.rd.setItem(ri + a6, g[a6])
			} catch (e) {
				console.log(e)
			}
		} else if (1 === r.id)
			for (var rj = rh ? 5e3 : 3e3, a6 = 0; a6 < eV; a6++) r.re.saveString(rj + a6, g[a6]);
		else if (2 === r.id)
			for (a6 = 0; a6 < eV; a6++) r.rf[ri + a6] = g[a6], r.rl.postMessage(ri + a6 + " " + g[a6])
	}
}

function rT() {
	this.dR = function() {
		! function() {
			var data = bf.dk.data;
			0 === data[2].ez && (au.j6 > au.a0 || 0 !== r.id) && (data[2].value = data[2].ra = 1);
			0 === data[100].ez && (data[100].value = data[100].ra = (0 === r.id ? "Player " : 1 === r.id ? "Android User " : "iOS User ") + Math.floor(1e3 * Math.random()))
		}();
		var a6, ey, data = bf.dk.data,
			eV = data.length;
		for (a6 = 0; a6 < eV; a6++) data[a6] && data[a6].ez === bf.pS.rb(a6, !0) && (ey = bf.pS.rc(a6), data[a6].value = null === ey ? data[a6].ra : 2 === data[a6].type ? ey : Number(ey));
		bf.dk.data[10].value = bf.dk.data[10].ra
	}
}

function rS() {
	function rs(g) {
		if (0 === g.length) bf.ps.pt(116, "");
		else {
			for (var rv = g[0], a6 = 1; a6 < g.length; a6++) rv += ";" + g[a6];
			bf.ps.pt(116, rv)
		}
	}
	this.rp = function() {
		bf.dk.data[110].value.length && (bf.dk.data[106].value = bf.dk.data[110], bf.ps.pt(110, ""), this.rq())
	}, this.rq = function() {
		var g = bf.dk.data[116].value.split(";");
		for (g.length % 2 == 1 && g.pop(), g.unshift(bf.dk.data[106].value), g.unshift(bf.dk.data[105].value), a6 = 2; a6 < g.length; a6 += 2)
			if (g[a6] === g[0]) {
				g.splice(a6, 2);
				break
			} for (var rr = [], a6 = 0; a6 < g.length; a6 += 2) rr.push(g[a6]);
		rs(g), bf.dk.data[117].value = 0, bf.dk.data[117].qq = rr
	}, this.rt = function(oB) {
		bf.dk.data[117].qq.splice(oB, 1), bf.dk.data[117].value = Math.min(oB, bf.dk.data[117].qq.length - 1);
		var g = bf.dk.data[116].value.split(";");
		g.splice(2 * oB, 2), rs(g)
	}, this.ru = function(oB) {
		var g = bf.dk.data[116].value.split(";");
		return {
			qK: g[2 * oB],
			password: g[2 * oB + 1]
		}
	}, this.rw = function() {
		var ey = bH.oj(bf.dk.data[121].value, -1, 262143);
		return ey = -1 === ey ? ~~(262144 * Math.random()) : ey
	}
}

function rR() {
	this.pt = function(oB, value) {
		bf.dk.data[oB].value !== value && (bf.dk.dl(oB, value), 0 === oB ? (n.rx(), b4.dR(), n.o(2)) : 1 === oB ? au.dc(1) : 2 === oB ? au.dc(0) : 5 === oB && (b7.pB.ry(), au.dc(0)))
	}, this.rz = function() {
		for (var data = bf.dk.data, a6 = 0; a6 < 100; a6++) data[a6] && bf.dk.dl(a6, data[a6].ra);
		b7.pB.ry(), au.dc(1), b4.dR()
	}, this.s0 = function() {
		for (var data = bf.dk.data, a6 = 0; a6 < data.length; a6++) data[a6] && bf.dk.pt(a6, data[a6].ra)
	}, this.s1 = function() {
		for (var ep = bf.dk, a6 = 128; a6 < 135; a6++) ep.dl(a6, ep.data[a6].ra)
	}, this.s2 = function(data) {
		bf.ps.pt(109, data.qL), bf.ps.pt(107, data.s3), bf.ps.pt(108, data.s4), bf.ps.pt(112, data.s5), bf.ps.pt(111, data.s6), bf.ps.pt(113, data.s7), bf.ps.pt(122, data.username), bf.ps.pt(135, data.s8), bf.ps.pt(136, data.s9), bf.ps.pt(137,
			data.sA), bf.ps.pt(138, data.sB), bf.ps.pt(139, data.sC), bf.ps.pt(141, data.sD), bf.ps.pt(142, data.sE), bf.ps.pt(143, data.sF), bf.ps.pt(144, data.sG)
	}
}

function bv() {
	this.qP = new sH, this.sI = new sJ, this.dR = function() {
		this.qP.dR()
	}
}

function sJ() {
	this.sK = function(size) {
		for (var sL = bD, g = [], a6 = 0; a6 < size; a6++) g.push(String.fromCharCode(sL.oC(16)));
		return g.join("")
	}, this.sM = function(os) {
		return 20 < (os = os.trim()).length ? os.substring(0, 20) : os
	}
}

function sH() {
	var sN = new Uint8Array(78);
	this.dR = function() {
		var a6;
		for (sN[50] = 37, a6 = 0; a6 < 10; a6++) sN[a6 + 3] = a6 + 1;
		for (a6 = 0; a6 < 26; a6++) sN[a6 + 20] = a6 + 11, sN[a6 + 52] = a6 + 38
	}, this.sO = function(os) {
		return os.trim().replace(new RegExp("[^a-zA-Z0-9_\\-]", "g"), "-")
	}, this.sP = function(os, size) {
		if ((os = this.sO(os)).length > size) return os.substring(0, size);
		for (; os.length < size;) os = "-" + os;
		return os
	}, this.sQ = function(os) {
		for (var sR = sN, eV = os.length, g = new Uint8Array(eV), a6 = 0; a6 < eV; a6++) g[a6] = sR[os.charCodeAt(a6) - 45];
		return g
	}, this.sS = function(sT) {
		b9.a2(6 * sT.length), this.sU(sT), bD.dR(b9.a7)
	}, this.sU = function(sT) {
		for (var eV = sT.length, a0 = b9, a6 = 0; a6 < eV; a6++) a0.a3(6, sT[a6])
	}, this.sV = function(os) {
		this.sU(this.sQ(os))
	}, this.sW = function(os, size) {
		this.sU(this.sQ(this.sP(os, size)))
	}, this.sX = function(os, size) {
		for (var g = this.sQ(this.sP(os, size)), ey = 0, m7 = 1, a6 = g.length - 1; 0 <= a6; a6--) ey += m7 * g[a6], m7 *= 64;
		return ey
	}
}

function sY() {
	var a0, j6, sZ;

	function sz(gw, eY, sx, se, ss) {
		eY = sy(gw, eY + 1 + 2 * se & 3);
		! function(gw, t0) {
			return 1 < Math.abs(gw % a0 - t0 % a0) || 1 < Math.abs(t3(gw) - t3(t0))
		}(gw, eY) && 0 === ss[eY << 2] && (ss[eY << 2] = sx)
	}

	function t3(g4) {
		return Math.floor((g4 + .5) / a0) % j6
	}

	function sy(g4, eY) {
		return g4 + sZ[eY]
	}
	this.sa = function(os) {
		var a6, sb, eV, sc, sL = bD;
		for (bC.qP.sS(bC.qP.sQ(os)), bO.sf.sg[bO.eB].a0 = bO.eg = a0 = sL.oC(12), bO.sf.sg[bO.eB].j6 = bO.eh = j6 = sL.oC(12), sZ = [-a0, -1, a0, 1], bO.sp = document.createElement("canvas"), bO.sp.width = bO.eg, bO.sp.height = bO.eh, bO.sl = bO
			.sp.getContext("2d", {
				alpha: !1
			}), bO.sm = bO.sq = null, bO.sm = bO.sl.getImageData(0, 0, bO.eg, bO.eh), bO.sq = bO.sm.data, b7.pL.sr(bO.sq), eV = sL.oC(12), sb = sL.oC(5), sc = si(a0 * j6 - 1), a6 = 0; a6 < eV; a6++) ! function(kM, g4, sd, se) {
			var a6, eY, sL = bD,
				ss = bO.sq,
				st = g4,
				su = g4,
				sv = 0,
				sw = 1 + sd,
				sx = 2 - sd;
			for (ss[g4 << 2] = sw, a6 = 0; a6 < kM; a6++) eY = sL.oC(2), g4 = sy(g4, eY), ss[g4 << 2] === sw ? sv % 2 == 1 && sz(su, sv + 2 * se + 3, sx, se, ss) : ss[g4 << 2] = sw, sz(g4, eY, sx, se, ss), sz(su, eY, sx, se, ss), su = g4,
				sv = eY;
			sy(g4, 0) === st ? (sz(g4, 0, sx, se, ss), sz(st, 0, sx, se, ss)) : sy(g4, 1) === st && (sz(g4, 0, sx, se, ss), sz(st, 2, sx, se, ss));
			0 === kM && (sz(st, 0, sx, se, ss), sz(st, 2, sx, se, ss))
		}(sL.oC(sb), sL.oC(sc), 1 === sL.oC(1), 1 === sL.oC(1));
		var ec, ee, k1, t4, t5, t6, ss = bO.sq,
			t7 = !0,
			t8 = bO.sf.sg[bO.eB].t8,
			t9 = bO.sf.sg[bO.eB].t9;
		for (ee = 0; ee < j6; ee++)
			for (t4 = !0, t5 = t7, ec = t6 = 0; ec < a0; ec++) k1 = 4 * ee * a0 + 4 * ec, t6 <= ec && 0 < ss[k1] && (t5 = 2 === ss[k1], t4) && (t4 = !1, t5 !== t7) ? (t7 = t5, t6 = ec + 1, ec = -1) : (t5 ? (ss[k1] = t9[0], ss[1 + k1] = t9[1], ss[
				2 + k1] = t9[2]) : (ss[k1] = t8[0], ss[1 + k1] = t8[1], ss[2 + k1] = t8[2]), ss[3 + k1] = 255);
		bO.sl.putImageData(bO.sm, 0, 0), bO.sn = !0, bO.so.dR(), bb.dZ = !0
	}
}

function c0() {
	var tA, tB, tC, tD, tE, tF, tG, tH, tI, tJ;

	function tL() {
		var tO = a8.tO;
		for (tI = tO; tI < a8.eS; tI++) tK();
		for (tI = a8.gs ? a8.jc : 0; tI < tO; tI++) {
			if (!tP()) {
				for (var ep = a8.tT = tI; ep < tO; ep++) tI = ep, tK();
				return
			}
			tS(tF + tA * tE + bH.ex(tE, 2), tG + tB * tE + bH.ex(tE, 2))
		}
	}

	function tv(player) {
		for (var i8 = ab.i8, iA = ab.iA, i9 = ab.i9, iB = ab.iB, ee = iA[player]; ee <= iB[player]; ee++)
			for (var ec = i8[player]; ec <= i9[player]; ec++) {
				var e9 = aX.tw(ec, ee);
				aX.g6(e9) && (aX.io(e9) ? aX.g1(e9, player) : aX.tx(e9, player))
			}
	}

	function tu(g, qe, qf) {
		var e4 = g[qe];
		g[qe] = g[qf], g[qf] = e4
	}

	function tP() {
		return function() {
			var a6;
			for (a6 = 0; a6 < 8; a6++)
				if (tA = bH.ex(tC * av.random(), av.value(100)), tB = bH.ex(tD * av.random(), av.value(100)), u2()) return 1;
			return
		}() || function() {
			var hf, hi, eo, tR, ep, tQ;
			for (hf = bH.ex(tC * av.random(), av.value(100)), hi = bH.ex(tD * av.random(), av.value(100)), eo = 40; 1 <= eo; eo--)
				for (tR = tD - eo; 0 <= tR; tR -= 40)
					for (tB = (tR + hi) % tD, ep = 40; 1 <= ep; ep--)
						for (tQ = tC - ep; 0 <= tQ; tQ -= 40)
							if (tA = (tQ + hf) % tC, u2()) return 1;
			return
		}()
	}

	function u2() {
		for (var g4, u4, gap = bH.ex(tE - tH, 2), u5 = tG + tB * tE + gap, u6 = tF + tA * tE + gap, u3 = u5 + tH - 1; u5 <= u3; u3--)
			for (u4 = u6 + tH - 1; u6 <= u4; u4--)
				if (g4 = aX.tw(u4, u3), !aX.eQ(g4) || aX.io(g4)) return;
		return 1
	}

	function tS(tQ, tR) {
		tK(), u7(tQ - 2, tR - 2)
	}

	function tK() {
		ab.lT[tI] = 0, ab.gK[tI] = ab.ts[tI] = 0, ab.fy[tI] = [], ab.gC[tI] = [], ab.gD[tI] = [], ab.ev[tI] = [], ab.i8[tI] = ab.iA[tI] = ab.i9[tI] = ab.iB[tI] = 0
	}

	function u7(tQ, tR) {
		var g4, a6, u8, u9;
		for (ab.lT[tI] = 1, ab.i8[tI] = tQ + 10, ab.iA[tI] = tR + 10, ab.iB[tI] = ab.i9[tI] = 0, u8 = tQ; u8 < tQ + 4; u8++)
			for (u9 = tR; u9 < tR + 4; u9++)(tQ < u8 && u8 < tQ + 3 || tR < u9 && u9 < tR + 3) && (g4 = aX.tw(u8, u9), aX.eQ(g4)) && (ab.i8[tI] = Math.min(u8, ab.i8[tI]), ab.i9[tI] = Math.max(u8, ab.i9[tI]), ab.iA[tI] = Math.min(u9, ab.iA[tI]), ab
				.iB[tI] = Math.max(u9, ab.iB[tI]), tJ[ab.gK[tI]] = g4, ab.gK[tI]++, aX.tx(g4, tI));
		for (ab.ts[tI] = ab.gK[tI], a6 = ab.gK[tI] - 1; 0 <= a6; a6--) aX.uA(tJ[a6], tI) ? (aX.g1(tJ[a6], tI), ab.gC[tI].push(tJ[a6])) : aX.uB(tJ[a6]) ? (aX.g1(tJ[a6], tI), ab.gD[tI].push(tJ[a6])) : aX.uC(tJ[a6]) && (aX.g1(tJ[a6], tI), ab.ev[tI]
			.push(tJ[a6]))
	}

	function u1(tQ, tR) {
		for (var g4, u4, u3 = tR; tR - 6 < u3; u3--)
			for (u4 = tQ; tQ - 6 < u4; u4--)
				if (g4 = aX.tw(u4, u3), aX.io(g4)) return;
		return 1
	}
	this.dR = function() {
		if (tJ = new Array(12), tH = 6, tE = 10, tC = bH.ex(bO.eg, tE), tD = bH.ex(bO.eh, tE), tF = bH.ex(bO.eg - tE * tC, 2), tG = bH.ex(bO.eh - tE * tD, 2), a8.gs)
			for (var a6 = 0; a6 < a8.jc; a6++) tI = a6, tK(), ab.lT[tI] = 1;
		(0 === a8.data.spawningType ? tL : 1 === a8.data.spawningType ? (tL(), function() {
			var tU = a8.tV;
			a8.tW || tU++;
			if (!(tU < 3)) {
				for (var data = a8.data, it = (a8.gs ? a8.jc : 0) + data.teamPlayerCount[0], mE = a8.tT, tX = new Uint32Array(tU), tY = new Uint32Array(tU), tZ = new Uint16Array(tU), ta = new Uint16Array(tU), eT = bc.eT, i8 = ab.i8, iA =
						ab.iA, i9 = ab.i9, iB = ab.iB, fB = bK.fB, fC = bK.fC, a6 = it; a6 < mE; a6++) fB[a6] = i8[a6] + i9[a6] >> 1, fC[a6] = iA[a6] + iB[a6] >> 1;
				for (a6 = it; a6 < mE; a6++) {
					var id = eT[a6];
					tX[id] += fB[a6], tY[id] += fC[a6]
				}
				var k2 = bc.k2;
				for (a6 = 1; a6 < tU; a6++) {
					var fz = Math.max(data.teamPlayerCount[k2[a6]], 1);
					tZ[a6] = bH.ex(tX[a6], fz), ta[a6] = bH.ex(tY[a6], fz)
				}
				var tb = bc.tb,
					tc = bc.tc,
					td = bc.td,
					fA = bK.fA;
				for (a6 = 0; a6 < 512; a6++) fA[a6] = a6;
				for (var hH = 0; hH < 2 + (4 <= tU); hH++)
					for (a6 = it; a6 < mE; a6++) {
						for (var gw = a6, te = fA[gw], tf = 1, el = bH.tg(fB[te] - tZ[1], fC[te] - ta[1]), eo = 2; eo < tU; eo++) {
							var th = bH.tg(fB[te] - tZ[eo], fC[te] - ta[eo]);
							th < el && (el = th, tf = eo)
						}
						var ti = eT[gw];
						if (tf !== ti) {
							if (2 === hH && 4 <= tU) {
								var tj = Math.max((tf + 1) % tU, 1),
									tk = bH.tg(fB[te] - tZ[tj], fC[te] - ta[tj]);
								for (eo = 1; eo < tU; eo++) th = bH.tg(fB[te] - tZ[eo], fC[te] - ta[eo]), el < th && th < tk && (tk = th, tj = eo);
								tj !== ti && bH.tg(tZ[ti] - tZ[tj], ta[ti] - ta[tj]) < bH.tg(tZ[ti] - tZ[tf], ta[ti] - ta[tf]) && (tf = tj)
							}
							var tl = k2[tf],
								tm = tc[tl] + (a8.gs ? 0 : td[tl]),
								t0 = tb[tm],
								tn = fA[t0],
								to = tc[tl + 1];
							el = bH.tg(fB[tn] - tZ[ti], fC[tn] - ta[ti]);
							for (var eq = tm + 1; eq < to; eq++) {
								var tp = tb[eq],
									tq = fA[tp];
								(th = bH.tg(fB[tq] - tZ[ti], fC[tq] - ta[ti])) < el && (el = th, t0 = tp)
							}
							t0 < it || mE <= t0 || (tn = fA[t0], tX[ti] += fB[tn] - fB[te], tY[ti] += fC[tn] - fC[te], tX[tf] += fB[te] - fB[tn], tY[tf] += fC[te] - fC[tn], fz = data.teamPlayerCount[k2[ti]], tZ[ti] = bH.ex(tX[ti], fz),
								ta[ti] = bH.ex(tY[ti], fz), fz = data.teamPlayerCount[tl], tZ[tf] = bH.ex(tX[tf], fz), ta[tf] = bH.ex(tY[tf], fz), fA[gw] = tn, fA[t0] = te)
						}
					}! function() {
						for (var fA = bK.fA, i8 = ab.i8, iA = ab.iA, i9 = ab.i9, iB = ab.iB, gK = ab.gK, ts = ab.ts, gC = ab.gC, gD = ab.gD, ev = ab.ev, a6 = 0; a6 < 512; a6++) {
							var tt = fA[a6];
							if (tt !== a6) {
								tu(i8, a6, tt), tu(iA, a6, tt), tu(i9, a6, tt), tu(iB, a6, tt), tu(gK, a6, tt), tu(ts, a6, tt), tu(gC, a6, tt), tu(gD, a6, tt), tu(ev, a6, tt), tv(a6), tv(tt), fA[a6] = a6;
								for (var j6 = tt, g5 = fA[j6]; g5 !== a6;) g5 = fA[j6 = g5];
								fA[j6] = tt
							}
						}
					}()
			}
		}) : function() {
			var tO = a8.tO;
			for (tI = tO; tI < a8.eS; tI++) tK();
			for (tI = a8.gs ? a8.jc : 0; tI < tO; tI++)
				if (! function() {
						var spawningData = a8.data.spawningData,
							tQ = spawningData[2 * tI] + 1,
							spawningData = spawningData[2 * tI + 1] + 1;
						if (3 < tQ && tQ < bO.eg - 5 && 3 < spawningData && spawningData < bO.eh - 5 && aX.eQ(aX.tw(tQ, spawningData)) && u1(tQ + 3, spawningData + 3)) return tS(tQ + 1, spawningData + 1), 1;
						return
					}()) {
					if (!tP()) {
						for (var ep = a8.tT = tI; ep < tO; ep++) tI = ep, tK();
						return
					}
					var tQ = tF + tA * tE + bH.ex(tE, 2),
						tR = tG + tB * tE + bH.ex(tE, 2);
					tS(tQ, tR)
				}
		})(), bZ.lP[7] = ab.gK[a8.eF]
	}, this.uD = function(ik, uE, uF) {
		var a6, tQ, tR, g4, tA, tB;
		for (tI = ik, a6 = 0; a6 < 20; a6++)
			for (tQ = uE + a6; uE - a6 <= tQ; tQ--)
				for (tR = uF + a6; uF - a6 <= tR; tR--)
					if ((tQ === uE + a6 || tQ === uE - a6 || tR === uF + a6 || tR === uF - a6) && 3 < tQ && tQ < bO.eg - 5 && 3 < tR && tR < bO.eh - 5 && aX.eQ(aX.tw(tQ, tR)) && u1(tQ + 3, tR + 3)) {
						if (0 < ab.gK[tI]) {
							for (tB = tA = g4 = void 0, tA = ab.i9[tI]; tA >= ab.i8[tI]; tA--)
								for (tB = ab.iB[tI]; tB >= ab.iA[tI]; tB--) g4 = 4 * (tB * bO.eg + tA), aX.uH(tI, g4) && (aX.uI(g4), ab.gK[tI]--);
							tK()
						}
						return u7(tQ - 1, tR - 1), !0
					} return !1
	}, this.uJ = function(ik) {
		tI = ik, tP() ? tS(tF + tA * tE + bH.ex(tE, 2), tG + tB * tE + bH.ex(tE, 2)) : tK()
	}
}

function uK() {
	am.uL(), rB.setTransform(hv, 0, 0, hv, 0, 0), rB.imageSmoothingEnabled = hv < 3, rB.drawImage(bO.sp, aN.uM(), aN.uN()), bL.uO.rA(), rB.drawImage(uP, aN.uM(), aN.uN()), am.rA(), bJ.rA(), aa.rA(), (a8.ly ? (bd.rA(), b8) : (aI.rA(), aQ.rA(), aM
	.rA(), b8.rA(), ar.rA(), aR.rA(), aN.rA(), aL.rA(), bd.rA(), aP.rA(), aK.rA(), aH.rA(), aG.rA(), aS.rA(), ba.rA(), ao)).rA(), n.rA()
}

function uQ(uR, a0, j6) {
	uR.clearRect(0, 0, a0, j6), uR.fillStyle = u.mT, uR.fillRect(0, 0, a0, j6)
}

function uS(uR, a0, j6, uT) {
	uR.fillStyle = u.mW, uR.fillRect(0, 0, a0, uT), uR.fillRect(0, 0, uT, j6), uR.fillRect(a0 - uT, 0, uT, j6), uR.fillRect(0, j6 - uT, a0, uT)
}

function uU(uR, ec, ee, h9, uT, g4, uV) {
	uR.fillStyle = u.mW;
	var g4 = Math.floor(h9 * g4),
		qV = (g4 += (g4 - uT) % 2, Math.floor((g4 - uT) / 2)),
		h9 = Math.floor((h9 - g4) / 2);
	uR.fillRect(ec + h9, ee + h9 + qV, g4, uT), uV && uR.fillRect(ec + h9 + qV, ee + h9, uT, g4)
}

function uX() {
	this.dR = function() {
		8 === a8.jw && aI.uY()
	}, this.uZ = function(ua) {
		var elo = a8.data.elo,
			hT = (elo[ua] - elo[1 - ua]) / 10,
			hT = 8 / (1 + Math.pow(2, hT / 32)),
			hT = Math.floor(10 * hT + .5),
			uc = this.ud(elo[ua] + hT + 1),
			elo = this.ud(elo[1 - ua] - hT);
		0 === ua ? aI.uf(uc, elo, ["rgba(10,140,10,0.75)", "rgba(140,10,10,0.75)"]) : aI.uf(elo, uc, ["rgba(140,10,10,0.75)", "rgba(10,140,10,0.75)"])
	}, this.ud = function(elo) {
		return 16e3 === (elo = bH.oj(elo, 0, 16e3)) ? "Unknown" : (elo / 10).toFixed(1)
	}
}

function cV() {
	this.ug = new uh, this.ss = new ui
}

function ui() {
	this.uj = !1;
	this.un = [], this.uo = 100;
	var lv, lw, gap, h9, uk, um, up = 0,
		uq = new Array(9),
		ur = [],
		us = [],
		ut = 0,
		uu = 0,
		uv = 0,
		uw = 0;

	function v7() {
		uq.sort(function(eo, ep) {
			return ep.jk - eo.jk
		});
		for (var os = "" + uq[0].nl, a6 = 1; a6 < 9; a6++) os += "," + uq[a6].nl;
		for (a6 = 0; a6 < 9; a6++) os += "," + uq[a6].jk;
		bf.dk.dl(120, os)
	}
	this.dR = function() {
		for (var qb = [0, 1, 2, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 6], a6 = 0; a6 < qb.length; a6++) {
			var color = 6 === qb[a6] ? u.ms : u.mU;
			this.un.push(b7.canvas.ux(aW.get(3), qb[a6], color))
		}
		for (a6 = 0; a6 < ae.ug.uy; a6++) us.push(ae.ug.uz - ae.ug.uy + a6);
		for (a6 = 0; a6 < ae.ug.v0; a6++) us.push(ae.ug.v1 + a6);
		var v2 = ae.ug.v3(bG.v2);
		for (a6 = 0; a6 < v2.length; a6++) us.push(v2[a6]);
		! function() {
			var a6, g = bf.dk.data[120].value.split(",");
			if (18 !== g.length)
				for (a6 = 0; a6 < 9; a6++) uq[a6] = {
					nl: 1015 + a6,
					jk: 0
				};
			else
				for (a6 = 0; a6 < 9; a6++) {
					var ey = parseInt(g[a6]),
						eq = (ey = 0 <= ey && ey < ae.ug.uz ? ey : 0, parseInt(g[a6 + 9]));
					eq = 0 <= eq && eq < 1e3 ? eq : 0, uq[a6] = {
						nl: ey,
						jk: eq
					}
				}
		}()
	}, this.show = function(kh, ki, v8) {
		var a6;
		if (ut = kh, uu = ki, up = v8 || 0, this.uj = !0, ur = [], 0 === up)
			for (a6 = 0; a6 < 9; a6++) ur.push(uq[a6].nl);
		else {
			var ep = 49 * up,
				v8 = ep - 49;
			for (v8 >= us.length && (up = 1, v8 = 0, ep = 49), a6 = v8 = (ep = Math.min(ep, us.length)) - 49; a6 < ep; a6++) ur.push(us[a6])
		}
		ur.push(1024);
		v8 = ur.length, h9 = Math.floor((r.s.v9() ? .075 : .0468) * au.pD), gap = Math.floor(h9 / 3), (uv = 10 * (uk = h9 + gap)) > au.a0 && (uv = au.a0, gap = (uk = uv / 10) - (h9 = 3 * uk / 4)), um = bH.ex(v8, 10) + !!(v8 % 10), (uw = um *
			uk) > au.j6 && (uw = au.j6, gap = (uk = uw / um) - (h9 = 3 * uk / 4)), v8 = .5 * gap;
		lv = Math.min(Math.max(kh - .5 * uv + v8, v8), au.a0 - uv + v8), lw = Math.min(Math.max(ki - .5 * uw + v8, v8), au.j6 - uw + v8)
	}, this.gk = function(kh, ki, player) {
		if (!this.uj) return !1;
		if (this.vB(kh, ki)) {
			kh = bH.oj(bH.ex(kh - lv + .5 * gap, uk), 0, 9);
			if ((kh += 10 * bH.oj(bH.ex(ki - lw + .5 * gap, uk), 0, 9)) >= ur.length) return aG.qh(), !0;
			ki = ur[kh];
			if (1024 === ki) return this.show(ut, uu, up + 1), !0;
			! function(nl) {
				for (var a6 = 0; a6 < 9; a6++) uq[a6].jk = Math.floor(.99 * uq[a6].jk);
				for (a6 = 0; a6 < 9; a6++)
					if (nl === uq[a6].nl) return uq[a6].jk = Math.min(uq[a6].jk + 30, 999), v7();
				uq.splice(5, 0, {
					nl: nl,
					jk: Math.max(uq[4].jk, 30)
				}), uq.pop(), v7()
			}(ki), player === a8.eF ? b5.gt.nk(ki) : b5.fs.o0(ki, player)
		}
		return aG.qh(), !0
	}, this.vB = function(kh, ki) {
		return !(kh < lv - .5 * gap || ki < lw - .5 * gap || lv + uv - .5 * gap <= kh || lw + uw - .5 * gap <= ki)
	}, this.rA = function() {
		rB.fillStyle = u.mT, rB.fillRect(lv - .5 * gap, lw - .5 * gap, uv, uw);
		for (var k1 = .5 * bY.vC, eV = (rB.lineWidth = bY.vC, rB.strokeStyle = rB.fillStyle = u.mW, rB.strokeRect(lv - .5 * gap + k1, lw - .5 * gap + k1, uv - 2 * k1, uw - 2 * k1), rB.imageSmoothingEnabled = !0, ur.length), a6 = 0; a6 < eV; a6++)
			this.vD(ur[a6], rB, lv + a6 % 10 * uk, lw + bH.ex(a6, 10) * uk, h9);
		rB.imageSmoothingEnabled = !1
	}, this.vD = function(nl, hF, ec, ee, h9) {
		var e9;
		nl >= 1024 - ae.ug.uy ? (e9 = h9 / this.uo, hF.setTransform(e9, 0, 0, e9, ec, ee), hF.drawImage(this.un[nl - 1024 + ae.ug.uy], 0, 0), hF.setTransform(1, 0, 0, 1, 0, 0)) : (b7.pB.textAlign(hF, 1), b7.pB.textBaseline(hF, 1), hF.font = b7.pB
			.qS(0, .89 * h9), hF.fillText(ae.ug.vE(nl), ec + .5 * h9, ee + (.35 - b7.pB.vF + .56) * h9))
	}
}

function uh() {
	this.emojis = ["🥰", "😎", "😘", "😜", "🤗", "🥳", "😇", "😊", "🥱", "🙄", "🤔", "🥺", "😡", "😭", "😱", "😞", "💀", "👹", "👋", "🙏", "👏", "💪", "🙋‍♂️", "🤦‍♂️", "⬆️", "➡️", "⬇️", "⬅️", "👀", "❤️", "💔", "💥", "🔥", "🪦", "🥇", "🥈", "🥉",
		"🎖️", "🏅", "👑", "🎉", "💯", "✝️", "☪️", "🕉️", "☸️", "✡️", "☦️", "⚛️"
	], this.uy = 13, this.v0 = this.emojis.length, this.v1 = 676, this.uz = 1024, this.vG = this.emojis.indexOf("💀"), this.vH = this.vG + 1, this.vI = this.emojis.indexOf("🥇"), this.vJ = this.emojis.indexOf("😊"), this.vE = function(ey) {
		return ey < this.v1 ? String.fromCharCode(55356, 56806 + bH.ex(ey, 26), 55356, 56806 + ey % 26) : this.emojis[Math.min(ey - this.v1, this.v0 - 1)]
	}, this.v3 = function(os) {
		for (var eV = os.length - 2, g = [], a6 = 0; a6 < eV; a6++) {
			var hO = os.charCodeAt(a6) - 56806,
				hP = os.charCodeAt(a6 + 2) - 56806;
			0 <= hO && hO < 26 && 0 <= hP && hP < 26 && (g.push(26 * hO + hP), a6 += 3)
		}
		return g
	}, this.vK = function(ey) {
		return ey < this.v1
	}, this.vL = function(ey) {
		return ey >= 1024 - this.uy
	}, this.vM = function(ey) {
		return ey >= this.v1 && ey < this.v1 + this.vH
	}
}

function bu() {
	this.qP = new vN, this.sI = new vO, this.dR = function() {
		this.qP.dR()
	}
}

function vO() {
	this.sV = function(os) {
		for (var eV = os.length, a0 = b9, a6 = 0; a6 < eV; a6++) a0.a3(16, os.charCodeAt(a6))
	}
}

function vN() {
	var vP = new Uint8Array(64);
	this.dR = function() {
		var a6;
		for (vP[0] = 45, vP[37] = 95, a6 = 0; a6 < 10; a6++) vP[a6 + 1] = 48 + a6;
		for (a6 = 0; a6 < 26; a6++) vP[a6 + 11] = 65 + a6, vP[a6 + 38] = 97 + a6
	}, this.qR = function(vQ) {
		for (var sL = bD, sT = new Uint8Array(vQ), a6 = 0; a6 < vQ; a6++) sT[a6] = sL.oC(6);
		return sT
	}, this.qQ = function(sT) {
		for (var eV = sT.length, vR = vP, g = [], a6 = 0; a6 < eV; a6++) g.push(String.fromCharCode(vR[sT[a6]]));
		return g.join("")
	}
}

function c2() {
	var vS, vT, vU;
	vS = [32, 65, 191, 913, 931], vT = [64, 127, 688, 930, 1155], vU = new Array(vS.length + 1);
	for (var a6 = 0; a6 < vU.length; a6++) {
		vU[a6] = 0;
		for (var eo = a6 - 1; 0 <= eo; eo--) vU[a6] += vT[eo] - vS[eo]
	}

	function va(eq) {
		for (var a6 = vS.length - 1; 0 <= a6; a6--)
			if (eq >= vS[a6] && eq < vT[a6]) return a6;
		return -1
	}
	this.sM = function(os) {
		return 0 !== (os = os.trim()).indexOf("Bot ") && 0 !== os.indexOf("[Bot] ") && function(os, vX, vY) {
			var eV = (os = os.trim()).length;
			if (eV < vX || vY < eV) return !1;
			for (var eq, vZ = 0, a6 = 0; a6 < eV; a6++)
				if (eq = os.charCodeAt(a6), vZ += 65 <= eq && eq <= 90 || 1040 <= eq && eq <= 1071 ? 1 : 0, -1 === va(eq)) return !1;
			if (3 < vZ && vZ > Math.floor(eV / 2)) return !1;
			return !0
		}(os, 3, 20)
	}, this.vb = function(os) {
		for (var eV = (os = os.trim()).length, g = [], a6 = 0; a6 < eV; a6++) {
			var eq, g4 = va(eq = os.charCodeAt(a6));
			g.push(vU[g4] + eq - vS[g4])
		}
		return g
	}, this.sa = function(g) {
		for (var eq, ep, os = "", eV = g.length, a6 = 0; a6 < eV; a6++)
			for (ep = 1; ep < vU.length; ep++)
				if (g[a6] < vU[ep]) {
					eq = vS[ep - 1] + g[a6] - vU[ep - 1], os += String.fromCharCode(eq);
					break
				} return os
	}, this.vc = function(os) {
		for (var g = this.vb(os), result = "", a6 = 0; a6 < g.length; a6++) result = (result += g[a6] < 10 ? "00" : g[a6] < 100 ? "0" : "") + g[a6].toString(10);
		return result
	}, this.vd = function(os) {
		for (var g = new Array(Math.floor(os.length / 3)), a6 = 0; a6 < os.length; a6 += 3) g[Math.floor(a6 / 3)] = parseInt(os.substring(a6, a6 + 3));
		return this.sa(g)
	}, this.ve = function(os) {
		for (var ey, g = [os.length], a6 = 0; a6 < os.length; a6++) g[a6] = os.charCodeAt(a6) - 48;
		var result = "";
		for (a6 = 0; a6 < os.length; a6++) a6 === os.length - 1 || 51 < 10 * g[a6] + g[a6 + 1] ? result += g[a6].toString() : (ey = 10 * g[a6] + g[a6 + 1], result += String.fromCharCode(ey + (ey < 26 ? 65 : 71)), a6++);
		return result
	}, this.vf = function(os) {
		for (var eq, result = "", a6 = 0; a6 < os.length; a6++) 48 <= (eq = os.charCodeAt(a6)) && eq < 58 ? result += String.fromCharCode(eq) : 65 <= eq && eq < 75 ? result += "0" + (eq - 65).toString() : 75 <= eq && eq < 91 ? result += (eq - 65)
			.toString() : 97 <= eq && eq < 123 && (result += (eq - 71).toString());
		return result
	}, this.vg = function(os) {
		for (var eV = os.length, g = [], a6 = 0; a6 < eV; a6++)(eq = os.charCodeAt(a6)) < 58 ? g.push(os[a6]) : (eq -= eq < 91 ? 65 : 71, g.push(String(bH.ex(eq, 10))), g.push(String(eq - 10 * bH.ex(eq, 10))));
		var eV = g.length - 2,
			eq = 0,
			sT = [];
		for (a6 = 0; a6 < eV; a6 += 3) sT[eq++] = parseInt(g[a6] + g[a6 + 1] + g[a6 + 2]);
		return sT
	}, this.vh = function() {
		for (var hH, vi = "", a6 = 0; a6 < 6; a6++) hH = 48 + av.random() % 36, hH += 58 <= hH ? 39 : 0, vi += String.fromCharCode(hH);
		return vi
	}
}

function d2() {
	this.vj = new vk, this.vl = new vm, this.result = new vn, this.h0 = new vo, this.vp = new vq, this.vr = new vs, this.vt = new vu, this.dR = function() {
		this.vp.dR()
	}, this.iR = function() {
		this.vp.iR()
	}
}

function vo() {
	this.vv = function() {
		for (var eV = ag.jd, vw = ag.jf, vx = [], a6 = 0; a6 < eV; a6++) {
			var g4 = vw[a6];
			aX.vy(g4) && vx.push(g4)
		}
		return vx
	}, this.vz = function() {
		for (var eV = ag.jd, vw = ag.jf, e4 = 0, gK = ab.gK, a6 = 0; a6 < eV; a6++) e4 += gK[vw[a6]];
		return e4
	}
}

function vk() {
	function w1() {
		if (2 === a8.w5) return 1;
		ar.w6(), a8.w5 = 2, a8.w7 = a8.w8
	}

	function w3() {
		console.log("endGameHelperB"), bN.vt.w9(), aS.show(1 === a8.wA, !1, 2 === a8.wA), bN.result.w9(), bN.vr.iR(), aI.wB(!0), aI.wC(247), aI.wC(956), aI.wC(957), aQ.lF(!0), aR.lF(!0), ar.lF(), b8.wD(), a8.gg && bb.wE.wF(), bb.dZ = !0, bX.wG(), r.s
			.setState(0)
	}
	this.w0 = function() {
		w1() || (a8.w2 = 2, w3())
	}, this.w4 = function() {
		w1() || (a8.w2 = 1, w3())
	}
}

function vs() {
	this.iR = function() {
		var wP;
		2 === a8.w2 ? (aI.wH(0, 59), aC.m4(2700)) : a8.jw < 7 ? (wP = bc.k2[bd.kq()], wP = bc.wR[wP], aL.wS(L(7, [wP]), 2, 1, 12), aI.wT(0, L(8, [wP]), 40, 0, u.mW, u.mT, -1, !1), aC.m4(2700)) : 8 === a8.jw ? (a8.wA ? aI.wH(a8.wM, 2) : aI.wH(1 -
			a8.eF, 3), a8.wN.uZ(a8.wM), aI.wO(a8.wM), aC.lp(a8.wM, 2700, !1, 0)) : 9 === a8.jw ? (aI.wU(), aC.m4(2700)) : (aI.wO(a8.wM), aC.lp(a8.wM, 2700, !1, 0))
	}
}

function vn() {
	this.wV = 0, this.vx = null;
	var wX = this.wW = 0;
	this.wY = 0, this.w9 = function() {
		var wc, g5, e4;
		bN.vp.wZ || (bN.vp.wZ = !0, a8.jy) || ((wc = this).vx = bN.h0.vv(), wc.wV = be.wd.we(), a8.jw < 7 && 2 !== a8.w2 ? wc.wW = bd.wf() : wc.wW = bN.h0.vz(), 8 === a8.jw && 1 === a8.w2 ? (g5 = 1 - a8.wM, e4 = ab.gK[g5], ab.gK[g5] = 0, b5.fs
			.o9(), ab.gK[g5] = e4) : b5.fs.o9(), wX = .01 * ab.wj[a8.eF] / 50, wc.wY = 0, a8.jw < 7 ? bN.vl.w9(wc.vx) : 7 === a8.jw || 10 === a8.jw ? b7.fs.gj(a8.eF) && (g5 = bN.result.wV * (1 + a8.wm), 2 === a8.w2 ? bN.result.wY += g5 *
			ab.gK[a8.eF] / bN.result.wW : kt[0] === a8.eF && (bN.result.wY += g5)) : 8 !== a8.jw || 1 !== a8.wA || 0 === bf.dk.data[107].value || 100 <= (e4 = bf.dk.data[108].value) || (bN.result.wY += .01 * (100 - e4) * 10), this.wb())
	}, this.wb = function() {
		b7.fs.gj(a8.eF) && (.01 <= wX && aI.wT(0, L(9, [wX.toFixed(2)]), 40, 0, u.ml, u.mT, -1, !1), .01 <= bN.result.wY) && aI.wT(0, L(10, [bN.result.wY.toFixed(2)]), 40, 0, u.ml, u.mT, -1, !1)
	}, this.wn = function() {
		var st, wo;
		a8.jy || bN.vp.wZ || (wo = ab, st = a8.eF, 0 === wo.wp[st]) || wo.ia[st] < 1 || 2 * wo.oW[st] > 3 * (wo.iZ[st] + wo.ia[st]) || (wo = .01 * wo.wj[st] / 50) < .01 || aI.wT(0, L(9, [wo.toFixed(2)]), 40, 0, u.ml, u.mT, -1, !1)
	}
}

function vq() {
	this.wZ = !1, this.dR = function() {
		this.wZ = !1
	}, this.iR = function() {
		7 <= a8.jw || this.wZ || bb.jZ() % 20 == 11 && b7.fs.km(90) && (a8.w2 = 1, bN.vt.w9(), bN.result.w9())
	}
}

function vm() {
	function wt(wr) {
		for (var hT = (1 + a8.wm) * bN.result.wV / (1e5 * bN.result.wW), k = "", a6 = 0; a6 < wr.length; a6++) {
			var wy = wr[a6].wz * hT;
			k += "  " + wr[a6].name + ": " + b7.wv.x0(1e5 * wy)
		}
		k.length && (aI.wT(0, L(11), 45, 0, b7.color.mO(225, 240, 255), u.mT, -1, !1), aI.wT(0, k.trim(), 45, 0, b7.color.mO(225, 240, 255), u.mT, -1, !1), a8.gg || aI.wT(700, L(12) + bG.x1, 736, 0, u.mW, u.mq, -1, !1))
	}
	this.w9 = function(vx) {
		var wP = bc.k2[bd.kq()],
			vx = (a8.wA && b7.fs.gj(a8.eF) && (bN.result.wY += (b7.wv.ww(ab.wx[a8.eF]) ? 2 : 1) * bN.result.wV * (1 + a8.wm) * ab.gK[a8.eF] / bN.result.wW), function(vw) {
				var wr = [],
					username = ab.wx,
					eV = vw.length;
				loop: for (var a6 = 0; a6 < eV; a6++) {
					var g4 = vw[a6],
						x2 = b7.wv.ww(username[g4]);
					if (x2) {
						for (var eo = wr.length - 1; 0 <= eo; eo--)
							if (wr[eo].name === x2) {
								wr[eo].wz += ab.gK[g4];
								continue loop
							} wr.push({
							name: x2,
							wz: ab.gK[g4],
							x3: bc.eT[g4]
						})
					}
				}
				return wr.sort(function(eo, ep) {
					return ep.wz - eo.wz
				}), wr
			}(vx));
		vx.length && (2 === a8.w2 ? wt(vx) : wt(function(wr, wP) {
			for (var a6 = wr.length - 1; 0 <= a6; a6--) bc.k2[wr[a6].x3] !== wP && wr.splice(a6, 1);
			return wr
		}(vx, wP)))
	}
}

function vu() {
	this.w9 = function() {
		if (2 === a8.w2) a8.wA = 2;
		else {
			if (8 === a8.jw) aX.vy(0) ? aX.vy(1) ? a8.wM = +(ab.gK[1] > ab.gK[0]) : a8.wM = 0 : a8.wM = 1;
			else {
				if (a8.ic) {
					var kp = bd.x5();
					if (bc.k2[kp]) return void(a8.wA = +(bc.eT[a8.eF] === kp))
				}
				a8.wM = kt[0]
			}
			a8.wA = +(a8.wM === a8.eF)
		}
	}
}

function d7() {
	this.id = 0, this.ez = 0, this.rd = null, this.re = null, this.rf = null, this.rl = null, this.s = new x6, this.dR = function() {
		var self, ez;
		self = this, "undefined" == typeof Android || "function" != typeof Android.getVersion || (ez = Android.getVersion()) < 12 || (self.ez = ez, self.id = 1, self.re = Android),
			function(self) {
				var ez;
				"undefined" != typeof mwIOSdataX && window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.iosCommandA && (self.id = 2, self.rf = mwIOSdataX, self.rl = window.webkit.messageHandlers.iosCommandA, ez = self
					.rf.version, self.ez = ez ? Number(ez) : 0)
			}(this),
			function(self) {
				var rd;
				if (0 === self.id) {
					try {
						if (!(rd = window.localStorage)) return;
						rd.setItem("tls7", "1"), rd.removeItem("tls7")
					} catch (error) {
						return
					}
					self.rd = rd
				}
			}(this)
	}
}

function x6() {
	this.xA = function() {
		bf.ps.rz(), bf.ps.s0(), ax.l7.close(0, 3255), 0 === r.id ? r.rd && r.rd.clear() : 1 === r.id ? r.re.saveString(199, "") : 2 === r.id && r.rl.postMessage("clear")
	}, this.xB = function() {
		2 === r.id ? r.rl.postMessage("showConsentForm") : 1 === r.id ? r.re.setState(7) : bQ.dm.showCMPScreen()
	}, this.xC = function() {
		this.setState(14)
	}, this.v9 = function() {
		return 1 === bf.dk.rY(2)
	}, this.xD = function() {
		bf.dk.dl(102, "")
	}, this.setState = function(e2) {
		1 === r.id && 5 <= r.ez && r.re.setState(e2)
	}, this.t = function() {
		var xE;
		1 === r.id && 7 <= r.ez ? r.re.setState(5) : ((xE = new URL(window.location)).searchParams.set("v", "" + Math.floor(1e3 * Math.random())), window.location.href = xE.toString())
	}, this.dW = function() {
		1 !== r.id || r.ez < 17 || r.re.saveString(23, document.documentElement.outerHTML)
	}, this.dr = function() {
		0 === r.id ? bQ.dm.dR() : 1 === r.id ? r.re.prepareAd("1688441405") : 2 === r.id && (0 === r.ez ? r.rl.postMessage("prepare ad 4500876070") : r.rl.postMessage("loadAds 4500876070"))
	}, this.e5 = function(e4) {
		return 0 === r.id ? !!bQ.dm.e0() : 1 === r.id ? 12 <= r.ez && (r.re.presentAd(e4), !0) : 2 === r.id && (0 === r.ez ? r.rl.postMessage("show ad " + e4) : r.rl.postMessage("showAd"), !0)
	}, this.db = function() {
		2 === r.id && r.ez < 23 && n.o(4, 1, new p("App Update Required", "A new iOS app version with bug fixes has been published.<br>Please download the new Territorial.io app version for iOS:<br><a href='" + bG.xF + "' target='_blank'>" + bG
			.xF + "</a>", !0, [new q("⬅️ " + L(13), function() {
				n.o(0)
			}, u.n5)]))
	}
}

function dM() {
	function xI(e) {
		xR(e), n.o(4, 5, new p("🚀 New Game Update", "The game has been updated! Please reload the game." +
			"<div style='border: white; border-width: 1px; border-style: solid; margin: 10px; padding: 5px;'><h2>FX Client is not yet compatible with the latest version of the game.</h2><p>Updates should normally be available within a few hours.<br>You can still use FX to play in singleplayer mode.</p></div>",
			!0, [new q("⬅️ " + L(13), function() {
				n.xS()
			}), new q("🔄 Reload", function() {
				r.s.t()
			}, u.v)]))
	}

	function xQ(e) {
		xR(e), n.o(4, 5, new p(L(14), {
			"3249": "No servers found",
			"4705": "Lobby not found",
			"4730": "Kicked from lobby"
		} [e] ?? xK(e), !0))
	}

	function xK(e) {
		return 3249 === e || 1006 === e ? "No internet [" + e + "]" : "Unknown error [" + e + "]"
	}

	function xR(e) {
		! function(e) {
			var e2 = aV.xL();
			0 !== e2 && (6 === e2 ? ax.l7.xW(e) : 7 === e2 ? (ap.xX(), ax.l7.close(ax.l7.xN, 3256)) : 8 === e2 && a8.xY(!0))
		}(e), n.l7.xV()
	}
	this.xG = function(xH, e) {
		xH === 1 && __fx.customLobby.isActive() && aV.xL() !== 6 && __fx.customLobby.setActive(false);
		if (8 === n.qM && 0 === xH)
			if (4211 === e) xI(e);
			else {
				if (4480 === e) return bf.ps.s1(), void n.o(4, 0, new p(L(16), L(17), !0));
				n.o(4, 0, new p(L(14), xK(e), !0))
			}
		else {
			var e2 = aV.xL();
			if (6 === e2) {
				if (4211 === e) return void xI(e);
				if (4214 !== e) return void aU.xM(xH)
			} else {
				if (7 !== e2) return 8 === e2 ? void(xH !== ax.l7.xO || a8.jy || 1 !== a8.w5 || a8.gg || aI.xP(L(15, [e]))) : void 0;
				if (xH !== ax.l7.xN) return
			}
			xQ(e)
		}
	}, this.xT = function(e) {
		8 === aV.xL() ? a8.jy || 1 !== a8.w5 || aI.xP(L(15, [e])) : xQ(e)
	}, this.m = function() {
		xR(3268)
	}
}

function cw() {
	var xZ, xa, xb = -15e3,
		xc = !1;

	function gk(e) {
		xw() || (xc = !0, xx(e, 1), ax.l7.xy(ax.l7.xO), xz(Math.floor(au.pH * e.clientX), Math.floor(au.pH * e.clientY)))
	}

	function xl(e) {
		xb = bb.e3, xx(e, 1), ax.l7.xy(ax.l7.xO), 0 < e.touches.length && (xZ = Math.floor(au.pH * e.touches[0].clientX), xa = Math.floor(au.pH * e.touches[0].clientY), an.xl(e) || xz(xZ, xa))
	}

	function xz(ec, ee) {
		n.gk(ec, ee), 0 === a8.w5 ? aV.gk(ec, ee) : b8.y0(ec, ee) || ba.gk(ec, ee) || aS.gk(ec, ee) || aG.y1(ec, ee) || aK.gk(ec, ee) || 0 <= aH.gk(ec, ee) || bF.y2(ec, ee) || ar.gk(ec, ee) || aG.y3(ec, ee)
	}

	function xh(e) {
		xw() || (xc = !0, xx(e, 1), y4(Math.floor(au.pH * e.clientX), Math.floor(au.pH * e.clientY)))
	}

	function xm(e) {
		xb = bb.e3, xx(e, 1), 0 < e.touches.length && (xZ = Math.floor(au.pH * e.touches[0].clientX), xa = Math.floor(au.pH * e.touches[0].clientY), an.xm(e) || y4(xZ, xa))
	}

	function y4(ec, ee) {
		n.xh(ec, ee), 0 === a8.w5 ? aV.xh(ec, ee) : (bP.gd(ec, ee), ba.xh(ec, ee) || (aH.xh(ec, ee), aG.uj() ? aG.xh(ec, ee) : aM.gl ? aM.xh(ec) && (bb.dZ = !0) : (aQ.xh(ec, ee), aN.m0 && aN.xh(ec, ee) && (bb.dZ = !0))))
	}

	function xj(e) {
		xw() || (xx(e, 1), y5(), 0 === a8.w5 ? (aV.click(-1024, -1024), aO.y6()) : (aQ.y7(-1024, -1024), aH.xh(-1024, -1024), aM.y8(), aN.m0 = !1))
	}

	function xi(e) {
		xw() || (xx(e, 1), y9(Math.floor(au.pH * e.clientX), Math.floor(au.pH * e.clientY), 2 === e.button), bF.xf && (bF.xf = !1, e.preventDefault()))
	}

	function click(e) {
		xw() || xx(e, 1)
	}

	function xn(e) {
		xb = bb.e3, xx(e, 1), e && e.touches && 0 < e.touches.length && 0 !== a8.w5 ? aN.m0 = !1 : an.yA() || (y9(xZ, xa, !1), bF.xf && (bF.xf = !1, e.preventDefault()))
	}

	function xo(e) {
		xb = bb.e3, xx(e, 1), y9(xZ, xa, !1), bF.xf && (bF.xf = !1, e.preventDefault())
	}

	function xp(e) {}

	function xq(e) {}

	function xr(e) {
		xw() || xx(e, 0)
	}

	function y9(ec, ee, yB) {
		y5(), 0 === a8.w5 ? aV.click(ec, ee) : (aQ.y7(ec, ee), ba.y7(), aM.y8(), aN.m0 = !1, aG.click(ec, ee, yB) ? bb.dZ = !0 : aH.xi(ec, ee))
	}

	function y5() {
		n.y5()
	}

	function xk(e) {
		var ec, ee, deltaY;
		xw() || (xx(e, 1), ax.l7.xy(ax.l7.xO), ec = Math.floor(au.pH * e.clientX), ee = Math.floor(au.pH * e.clientY), deltaY = e.deltaY, 1 === e.deltaMode && (deltaY *= 16), n.xk(ec, ee, deltaY), 0 === a8.w5 ? aV.xk(ec, ee, deltaY) : aQ.xk(ec, ee,
			deltaY) || (aM.yC(ec, ee) ? aM.xk(deltaY) && (bb.dZ = !0) : aN.xk(ec, ee, deltaY)))
	}

	function xs(e) {
		xx(e, 0)
	}

	function xx(e, id) {
		0 === id && n.uj() || (id = window.innerWidth / document.documentElement.clientWidth) < .999 || 1.001 < id || 0 !== aV.xL() && e.preventDefault()
	}

	function xt(e) {
		if (__fx.keybindHandler(e.key)) return;
		xw() || (e = e.code) && e.length && (bT.eq(e, 18) ? al.yE(3) : bT.eq(e, 22) ? al.yE(0) : bT.eq(e, 20) ? al.yE(1) : bT.eq(e, 24) ? al.yE(2) : bT.eq(e, 10) ? aM.yF(.9375) : bT.eq(e, 8) ? aM.yF(16 / 15) : bT.eq(e, 6) ? aM.yF(7 / 8) : bT.eq(e,
			4) ? aM.yF(8 / 7) : bT.eq(e, 14) ? 0 !== a8.w5 && aN.xk(Math.floor(au.a0 / 2), Math.floor(au.j6 / 2), -200) : bT.eq(e, 16) ? 0 !== a8.w5 && aN.xk(Math.floor(au.a0 / 2), Math.floor(au.j6 / 2), 200) : bT.eq(e, 0) ? a8.w5 && bP.ge(!1) :
			bT.eq(e, 2) && a8.w5 && bP.ge(!0))
	}

	function xu(e) {
		var code;
		xw() || bb.e3 < 400 || (code = e.code) && code.length && ("Enter" === code && n.yG(1) || (8 !== aV.xL() && aV.yG(e) ? bb.dZ = !0 : "Escape" === code ? bF.f0() : bT.eq(code, 18) ? al.yH(3) : bT.eq(code, 22) ? al.yH(0) : bT.eq(code, 20) ? al
			.yH(1) : bT.eq(code, 24) ? al.yH(2) : bT.eq(code, 12) ? b8.yI(!a8.ly) : "Space" === code && a8.w5 && (aH.gh && aH.yJ(), a8.gg) && b8.yK(!1)))
	}

	function xv() {
		"hidden" === document.visibilityState ? 1 === a8.w5 && (a8.gg ? b8.yL() : !a8.jy || aH.gh || a8.gs || aH.yJ()) : bb.dZ = !0
	}

	function xw() {
		return xb + 15e3 > bb.e3
	}

	function resize() {
		au.yN()
	}
	this.xd = 0, this.xe = "", this.xf = !1, this.dR = function() {
		xg.addEventListener("mousedown", gk, {
			passive: !1
		}), xg.addEventListener("mousemove", xh, {
			passive: !1
		}), xg.addEventListener("mouseup", xi, {
			passive: !1
		}), xg.addEventListener("click", click, {
			passive: !1
		}), xg.addEventListener("mouseleave", xj, {
			passive: !1
		}), xg.addEventListener("wheel", xk, {
			passive: !1
		}), xg.addEventListener("touchstart", xl, {
			passive: !1
		}), xg.addEventListener("touchmove", xm, {
			passive: !1
		}), xg.addEventListener("touchend", xn, {
			passive: !1
		}), xg.addEventListener("touchcancel", xo, {
			passive: !1
		}), xg.addEventListener("dragover", xp), xg.addEventListener("drop", xq), xg.addEventListener("dblclick", xr), document.addEventListener("contextmenu", xs), document.addEventListener("keydown", xt), document.addEventListener("keyup",
			xu), document.addEventListener("visibilitychange", xv), window.addEventListener("resize", resize)
	}, this.y2 = function(ec, ee) {
		return !!b8.gk(ec, ee) || !!(aQ.gk(ec, ee) || aN.gk(ec, ee) || aM.gk(ec, ee) || aI.gk(ec, ee))
	}, this.yM = xw, this.pc = function() {
		return !xc || 0 < xb
	}, this.f0 = function() {
		if (!n.uj()) return 8 === aV.xL() ? a8.ly ? void b8.yI(!1) : ba.uj ? void ba.yJ() : void aH.yJ() : void(7 === aV.xL() ? ap.yO() : 6 === aV.xL() && aU.yP());
		n.yG(2)
	}
}

function bq() {
	this.pB = new yQ, this.pL = new yR, this.fs = new yS, this.wv = new yT, this.uR = new yU, this.yV = new yW, this.canvas = new yX, this.color = new yY, this.yZ = new ya, this.dR = function() {
		this.pB.ry()
	}
}

function yR() {
	this.sr = function(g) {
		g.fill(0)
	}, this.yb = function(g) {
		for (var eV = g.length, a6 = 0; a6 < eV; a6++) g[a6] = []
	}, this.yc = function(hO, yd) {
		for (var hP = bK.f7, a6 = 0; a6 < 3; a6++) hP[a6] = yd * hO[a6];
		return hP
	}, this.ye = function(hO, hP, yf) {
		for (var hT = 0, a6 = 0; a6 < 3; a6++) hT += Math.abs(hO[a6] - hP[a6]);
		return yf <= hT
	}, this.yg = function(hO, yh) {
		for (var a6 = 0; a6 < 3; a6++) hO[a6] = bH.oj(hO[a6] + yh, 0, 255);
		return hO
	}, this.yi = function(g, qe, qf) {
		qf = qf || g.length - 1;
		for (var yj = 0, a6 = qe = qe || 0; a6 <= qf; a6++) yj += g[a6];
		return yj
	}, this.yk = function(g, yl) {
		for (var a6, ym, eV = g.length, yn = [], eo = eV - 1; 0 <= eo; eo--) {
			for (a6 = ym = 0; a6 < eV; a6++) yl(g[a6]) < yl(g[ym]) && (ym = a6);
			eV--, yn.push(g[ym]), g[ym] = g[eV], g.pop()
		}
		return yn
	}, this.min = function(g) {
		var a6, ey, eV = g.length;
		if (0 === eV) return 0;
		for (ey = g[0], a6 = 1; a6 < eV; a6++) ey = Math.min(ey, g[a6]);
		return ey
	}, this.max = function(g) {
		var eV = g.length;
		if (0 === eV) return 0;
		for (var ey = g[0], a6 = 1; a6 < eV; a6++) ey = Math.max(ey, g[a6]);
		return ey
	}, this.yo = function(g, ey) {
		for (var eV = g.length, fz = 0, a6 = 0; a6 < eV; a6++) fz += g[a6] > ey;
		return fz
	}, this.yp = function(yq, yr, min) {
		for (var eV = yr[0], a6 = eV - 1; 0 <= a6; a6--) yq[a6] < min && (yq[a6] = yq[--eV]);
		yr[0] = eV
	}, this.ys = function(g, eV, value) {
		for (var a6 = 0; a6 < eV; a6++) g[a6] -= value
	}, this.yt = function(g) {
		for (var eV = g.length, a6 = 0; a6 < eV; a6++)
			if ("string" != typeof g[a6]) return !1;
		return !0
	}, this.yu = function(os, g, yv) {
		g.fill(0);
		for (var qi = os.split(","), eV = Math.min(qi.length, g.length), a6 = 0; a6 < eV; a6++) g[a6] = Math.min(parseInt(qi[a6]), yv)
	}, this.yw = function(os, g, yx) {
		g.fill("");
		for (var qi = os.split('"'), eV = Math.min(qi.length, 2 * g.length), k1 = 0, a6 = 1; a6 < eV; a6 += 2) g[k1++] = qi[a6].slice(0, yx)
	}, this.yy = function(g, fz) {
		if (0 === fz) g.fill(0);
		else {
			var yj = this.yi(g),
				eV = g.length;
			if (0 === yj) g.fill(bH.ex(fz, eV));
			else
				for (var a6 = 0; a6 < eV; a6++) g[a6] = bH.ex(fz * g[a6], yj);
			if (0 === (yj = this.yi(g))) g[1] = fz;
			else
				for (var k1 = 0; yj++ < fz;) g[k1 = (k1 + 1) % eV] && g[k1]++
		}
	}, this.yz = function(g) {
		if (!g) return 0;
		var eV = g.length;
		if (0 === eV) return 0;
		for (var ey = g[eV - 1], a6 = eV - 2; 0 <= a6; a6--)
			if (g[a6] !== ey) return a6 + 2;
		return 1
	}
}

function yX() {
	this.ux = function(z0, oB, z1) {
		var h9 = z0.height,
			z2 = b7.pB.sh(h9, h9),
			hF = b7.pB.getContext(z2);
		return function(a0, hF, z1) {
			hF.fillStyle = z1, hF.beginPath(), hF.arc(a0 / 2, a0 / 2, .47 * a0, 0, 2 * Math.PI), hF.fill()
		}(h9, hF, z1), hF.drawImage(z0, -oB * h9, 0), z2
	}, this.z4 = function(z5) {
		var hF, hC, h9 = z5.height;
		return z5.width === h9 && (hC = (hF = b7.pB.getContext(z5, !0)).getImageData(0, 0, h9, h9), b7.yV.z6(hC.data, h9, h9, .9), hF.putImageData(hC, 0, 0)), z5
	}
}

function yY() {
	this.z7 = function(ey) {
		return [ey >> 12 & 63, ey >> 6 & 63, 63 & ey]
	}, this.z8 = function(ey) {
		for (var g = this.z7(ey), a6 = 0; a6 < 3; a6++) g[a6] = ~~(4.05 * g[a6]);
		return g
	}, this.z9 = function(ey) {
		ey = this.z8(ey);
		return b7.color.mO(ey[0], ey[1], ey[2])
	}, this.zA = function(g) {
		for (var a6 = 0; a6 < 3; a6++) g[a6] = ~~(g[a6] / 4.04);
		return (g[0] << 12) + (g[1] << 6) + g[2]
	}, this.mO = function(hH, qi, ep) {
		return "rgb(" + hH + "," + qi + "," + ep + ")"
	}, this.mQ = function(hH, qi, ep, eo) {
		return "rgba(" + hH + "," + qi + "," + ep + "," + eo.toFixed(3) + ")"
	}, this.pe = function(eq) {
		for (var g = eq.split("(")[1].split(","), f6 = (g.length, bK.f6), a6 = 0; a6 < 3; a6++) f6[a6] = parseInt(g[a6]);
		return f6
	}, this.pX = function(zB, eY) {
		for (var g = zB.slice(zB.indexOf("(") + 1, zB.indexOf(")")).split(","), f6 = bK.f6, a6 = 0; a6 < 3; a6++) f6[a6] = bH.oj(parseInt(g[a6].trim(), 10) + eY, 0, 255);
		return 3 === g.length ? this.mO(f6[0], f6[1], f6[2]) : this.mQ(f6[0], f6[1], f6[2], parseFloat(g[3].trim()))
	}, this.zC = function(g) {
		for (var os = "#", a6 = 0; a6 < 3; a6++) {
			var hH = g[a6].toString(16);
			os += 1 === hH.length ? "0" + hH : hH
		}
		return os
	}, this.zD = function(os) {
		var hH, qi;
		return os.length < 7 ? u.mN : (hH = parseInt(os.slice(1, 3), 16), qi = parseInt(os.slice(3, 5), 16), os = parseInt(os.slice(5, 7), 16), this.mO(hH, qi, os))
	}
}

function yU() {
	this.zE = function(os, font, maxWidth) {
		if (font && (rB.font = font), rB.measureText(os).width <= maxWidth) return os;
		for (var a6 = os.length - 1; 1 <= a6; a6--)
			if (os = os.substring(0, a6), rB.measureText(os + "...").width <= maxWidth) return os + "...";
		return "..."
	}
}

function ya() {
	var zG = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	this.zH = function(e3) {
		var zJ, os = new Date(e3.getTime() - 6e4 * e3.getTimezoneOffset()).toUTCString();
		return os.length < 12 || (os = os.substring(5, os.length), 0 === (e3 = e3.getTimezoneOffset())) ? os : (zJ = (e3 < 0 ? "+" : "-") + bH.ex(Math.abs(e3), 60), 0 == (e3 = Math.abs(e3) % 60) ? os + zJ : os + zJ + ":" + (e3 < 10 ? "0" : "") +
			e3)
	}, this.zK = function(e3) {
		var os = e3.toUTCString();
		return os.length < 12 ? os : function(e3) {
			return zG[e3.getUTCDay()]
		}(e3) + ", " + os.substring(5, os.length - 4)
	}
}

function yQ() {
	var zM = null;
	this.vF = 0, this.ry = function() {
		var ey = bf.dk.data[5].value;
		zM = "px " + ey, "Trebuchet MS" !== ey && (zM += ", Trebuchet MS"), this.vF = h8(32, 32, ["a", "b", "m"], 200, zM)
	}, this.sh = function(a0, j6) {
		var eq = document.createElement("canvas");
		return eq.width = a0, eq.height = j6, eq
	}, this.getContext = function(canvas, alpha) {
		return canvas.getContext("2d", {
			alpha: alpha
		})
	}, this.getImageData = function(uR, a0, j6) {
		return uR.getImageData(0, 0, a0, j6)
	}, this.qS = function(type, size) {
		return size = size.toFixed(2), 0 === type ? size + zM : 1 === type ? "bold " + size + zM : 2 === type ? "lighter " + size + zM : 3 === type ? "italic " + size + zM : 4 === type ? "oblique " + size + zM : 5 === type ? "small-caps " +
			size + zM : "small-caps bold " + size + zM
	}, this.textAlign = function(hF, id) {
		hF.textAlign = 0 === id ? "left" : 1 === id ? "center" : "right"
	}, this.textBaseline = function(hF, id) {
		hF.textBaseline = 1 === id ? "middle" : 2 === id ? "bottom" : "top"
	}, this.pN = function(e, code, color) {
		color = this.pM(bY.zN) + " solid " + (color || u.mW);
		5 === (code = code || 5) ? e.style.border = color : 4 === code ? e.style.borderLeft = color : 2 === code ? e.style.borderBottom = color : 6 === code ? e.style.borderRight = color : e.style.borderTop = color
	}, this.qk = function(e, ec, ee, a0, j6) {
		e = e.style;
		e.left = this.ql(ec), e.top = this.ql(ee), e.width = this.ql(a0), e.height = this.ql(j6)
	}, this.pC = function(ey) {
		return 1 + ey * r.s.v9()
	}, this.pv = function(m7, g5) {
		return m7 * this.pC(void 0 === g5 ? .5 : g5) * au.pD / au.pH
	}, this.qj = function(m7, g5) {
		return m7 * this.pC(void 0 === g5 ? .5 : g5) * au.pD
	}, this.qT = function(m7, g5, zO) {
		return this.pC(g5) * Math.min(m7 * au.pD, zO * au.a0) / au.pH
	}, this.pM = function(ey) {
		return ey.toFixed(1) + "px"
	}, this.ql = function(ey) {
		return this.zQ(ey).toFixed(1) + "px"
	}, this.zQ = function(ey) {
		return ey / au.pH
	}, this.zR = function(qE, zS) {
		for (var os = "<ul>", eV = qE.length, a6 = 0; a6 < eV; a6++) os += "<li>" + qE[a6] + ": <a href='" + zS[a6] + "' target='_blank'>" + zS[a6] + "</a></li>";
		return os += "</ul>"
	}, this.zT = function(zU) {
		return "<a href='" + zU + "' target='_blank'>" + zU + "</a>"
	}, this.zV = function(e) {
		navigator.clipboard && navigator.clipboard.writeText(e.value)
	}, this.zW = function(e) {
		var e4 = e.textContent;
		b7.wv.zX(e4, "✔") || (1 === e4.length ? e.textContent = "✔" : e.textContent = e4 + " ✔", setTimeout(function() {
			e.textContent = e4
		}, 500))
	}, this.measureText = function(os) {
		return rB.measureText(os).width
	}
}

function yS() {
	this.gi = function(e2) {
		return 0 === e2 ? 1 === a8.w5 && a8.gs : 1 === e2 ? 1 === a8.w5 && !a8.gs : 2 === a8.w5
	}, this.gj = function(player) {
		return 0 !== ab.lT[player] && 2 !== ab.zY[player]
	}, this.zZ = function(player) {
		return player === a8.eF && 2 !== ab.zY[player]
	}, this.za = function(player) {
		return player === a8.eF
	}, this.j0 = function(player) {
		return player >= a8.jc || 2 === ab.zY[player]
	}, this.kQ = function(player) {
		return 0 !== ab.lT[player]
	}, this.oT = function(zb, zc) {
		return zb !== zc
	}, this.fv = function(player, ey) {
		var min;
		return ey = this.zd(player, ey), ab.gY[player] += ey, ab.ze[player] && (min = Math.min(ab.ze[player], ab.gY[player]), ab.ze[player] -= min, ab.gY[player] -= min), ey
	}, this.zd = function(player, ey) {
		var zf = ab.gY[player];
		return ey = Math.min(ey, ab.gK[player] * a8.jj - zf), ey = Math.min(ey, a8.zg - zf), Math.max(ey, 0)
	}, this.oU = function(player, ht, zh, zi) {
		var zf = ab.gY[player],
			ht = bH.ex(zf * (ht + 1), 1024),
			zh = bH.ex(zh * zf, 1024),
			ht = Math.min(ht, zf - zh);
		return 10 === a8.jw && (ht = b1.zk(player, ht)), bK.f4[0] = ht, bK.f4[1] = zh, zi <= ht
	}, this.nv = function(player, nc, nb) {
		var player = ab.gY[player],
			zj = bH.ex(64 * player, 1024),
			player = (nc = Math.min(nc, player - zj), this.zm(nc));
		return zj += player, nc = this.zd(nb, nc -= player), bK.f4[0] = nc, bK.f4[1] = zj, 1 <= nc
	}, this.nx = function(nc, nb) {
		var zl = this.zm(nc);
		return nc = this.zd(nb, nc -= zl), bK.f4[0] = nc, bK.f4[1] = zl, 1 <= nc
	}, this.hs = function(player, zn) {
		return bH.ex(ab.gY[player] * (zn + 1), 1024)
	}, this.zm = function(zo) {
		return bH.ex(Math.max(2142 - bb.jZ(), 0) * zo, 2142)
	}, this.oh = function(player, zh) {
		zh = bH.ex(zh * ab.gY[player], 1024);
		bK.f4[1] = zh, ab.gY[player] -= zh
	}, this.ft = function(player, zp) {
		var fG, fI, ep = ab.gY[player];
		return zp <= ep ? ab.gY[player] -= zp : (ab.gY[player] = 0, fI = ab.ze[player] + (fG = 5 * ((ep = zp - ep) >> 2)), bZ.fw(player, fG - ep, 12), fI <= a8.zq ? ab.ze[player] = fI : (ab.ze[player] = a8.zq, bZ.fw(player, fI - a8.zq, 18))), zp
	}, this.ke = function(player, ht) {
		var gY = ab.gY,
			zf = gY[player],
			ht = bH.ex(zf * (ht + 1), 1024),
			zj = Math.max(bH.ex(zf, 10), 1e3);
		return (ht = Math.min(ht, zf - zj)) < 0 ? (gY[player] = 0, zj = Math.min(1e3, zf + a8.zq - ab.ze[player]), bK.f4[1] = zj, ab.ze[player] += zj - zf, 0) : (bK.f4[1] = zj, 10 === a8.jw && (ht = b1.zk(player, ht)), gY[player] -= zj + ht, ht)
	}, this.oX = function(player) {
		ab.gY[player] -= bK.f4[0] + bK.f4[1]
	}, this.oV = function(player, ik) {
		return (ik = Math.min(ik, a8.eS)) < a8.eS && 0 === ab.lT[ik] && (ik = a8.eS), (bK.eR[0] = ik) === a8.eS || eO(player, ik)
	}, this.oZ = function(player, nb) {
		return 0 !== ab.lT[nb] && !eO(player, nb)
	}, this.zr = function(player, zs) {
		for (var g4, eV = ag.jd, wk = 0, zt = kt, a6 = 0; a6 < eV; a6++)
			if (g4 = zt[a6], aX.vy(g4)) {
				if (player === g4) return !0;
				if (++wk > zs) return !1
			} return !1
	}, this.km = function(g4) {
		var zu = a8.ic ? bd.wf() : ab.gK[kt[0]];
		return zu >= bH.ex(g4 * a8.jM, 100)
	}
}

function yW() {
	this.zv = function(canvas, zw, zx) {
		var a0 = canvas.width,
			j6 = canvas.height,
			eq = b7.pB.sh(a0, j6),
			hF = b7.pB.getContext(eq, !0),
			canvas = (hF.drawImage(canvas, 0, 0), hF.getImageData(0, 0, a0, j6));
		return zw(canvas.data, a0, j6, zx), hF.putImageData(canvas, 0, 0), eq
	}, this.zy = function(ss, a0, j6) {
		for (var ec = a0 - 1; 0 <= ec; ec--)
			for (var ee = j6 - 1; 0 <= ee; ee--) {
				var a6 = 4 * (ec + ee * a0);
				ss[3 + a6] = ss[a6], ss[a6] = ss[1 + a6] = ss[2 + a6] = 255
			}
	}, this.zz = function(ss, a0, j6) {
		for (var ec = a0 - 1; 0 <= ec; ec--)
			for (var ee = j6 - 1; 0 <= ee; ee--) {
				var a6 = 4 * (ec + ee * a0);
				ss[1 + a6] > ss[2 + a6] + 10 && (ss[3 + a6] = ss[a6], ss[1 + a6] = ss[2 + a6])
			}
	}, this.a00 = function(ss, a0, j6, zx) {
		for (var gap = Math.floor(Math.min(a0, j6) * zx), ec = 0; ec < a0; ec++)
			for (var a6, ee = 0; ee < j6; ee++)(ec < gap || ee < gap || a0 - gap <= ec || j6 - gap <= ee) && (ss[3 + (a6 = 4 * (ec + ee * a0))] = 255 - 255 * (ss[1 + a6] - ss[a6]) / (255 - ss[a6]))
	}, this.a01 = function(ss, a0, j6, zx) {
		for (var ec = a0 - 1; 0 <= ec; ec--)
			for (var ee = j6 - 1; 0 <= ee; ee--) {
				var a6 = 4 * (ec + ee * a0);
				ss[a6] = zx[0], ss[1 + a6] = zx[1], ss[2 + a6] = zx[2]
			}
	}, this.a02 = function(ss, a0, j6, zx) {
		for (var gap = Math.floor(a0 * zx), ec = 0; ec < a0; ec++)
			for (var a6, ee = 0; ee < j6; ee++)(ec < gap || ee < gap || a0 - gap <= ec || j6 - gap <= ee) && (ss[a6 = 4 * (ec + ee * a0)] = ss[1 + a6] = ss[2 + a6] = 0)
	}, this.a03 = function(ss, a0, j6) {
		for (var ee, a6, ec = a0 - 1; 0 <= ec; ec--)
			for (ee = j6 - 1; 0 <= ee; ee--) 200 < ss[1 + (a6 = 4 * (ec + ee * a0))] && ss[1 + a6] - 20 > ss[a6] && ss[1 + a6] - 20 > ss[2 + a6] ? ss[a6] + ss[2 + a6] < 40 ? ss[3 + a6] = 0 : (ss[3 + a6] = ss[a6], ss[a6] = 255, ss[1 + a6] = 255,
				ss[2 + a6] = 255) : ss[a6] < 50 && ss[1 + a6] < 50 && ss[2 + a6] < 50 && (ss[a6] + ss[1 + a6] + ss[2 + a6] < 50 ? ss[3 + a6] = 180 : ss[3 + a6] = 180 + Math.floor(75 * (ss[a6] + ss[1 + a6] + ss[2 + a6] - 50) / 100))
	}, this.a04 = function(ss, a0, j6) {
		for (var ee, a6, ec = a0 - 1; 0 <= ec; ec--)
			for (ee = j6 - 1; 0 <= ee; ee--) ss[1 + (a6 = 4 * (ec + ee * a0))] > ss[a6] + 20 && ss[1 + a6] > ss[2 + a6] + 20 && ss[a6] + ss[2] < 40 && (ss[3 + a6] = 255 - ss[1 + a6], ss[a6] = ss[1 + a6] = ss[2 + a6] = ss[a6])
	}, this.z6 = function(ss, a0, j6, zx) {
		for (var hH = a0 >> 1, ec = 0; ec < a0; ec++)
			for (var ee = 0; ee < j6; ee++) Math.sqrt((ec - hH) * (ec - hH) + (ee - hH) * (ee - hH)) > zx * hH && (ss[4 * (ec + ee * a0) + 3] = 0)
	}
}

function yT() {
	this.a05 = function(ey) {
		var a6, a06, a07, a08, a09;
		if (ey < 0) return "-" + this.a05(Math.abs(ey));
		if (ey < 1e3) return ey.toString();
		for (a06 = Math.floor(Math.log(ey + .5) / Math.log(10)) + 1, a07 = Math.floor((a06 - 1) / 3), a09 = (a08 = ey.toString()).substring(a06 - 3, a06), a6 = 1; a6 < a07; a6++) a09 = a08.substring(a06 - 3 * (a6 + 1), a06 - 3 * a6) + " " + a09;
		return a08.substring(0, a06 - 3 * a07) + " " + a09
	}, this.a0A = function(g4, a06) {
		return g4.toFixed(a06) + "%"
	}, this.x0 = function(ey, a0B) {
		return ey.toFixed(bH.oj(Math.floor((void 0 === a0B ? 3 : a0B) - Math.log10(Math.max(ey, 1))), 0, 8))
	}, this.a0C = function(ey, m7, a06) {
		return (ey * m7).toFixed(a06)
	}, this.ww = function(username) {
		var eZ, eK = username.indexOf("[");
		return !(eK < 0) && 1 < (eZ = username.indexOf("]")) - eK && eZ - eK <= 8 ? username.substring(eK + 1, eZ).toUpperCase().trim() : null
	}, __fx.leaderboardFilter.parseClanFromPlayerName = this.ww;
	this.a0D = function(os) {
		for (var eo = Math.floor(.5 * os.length + .5), mE = Math.floor(.5 * (eo - 1)), a6 = 0; a6 < mE; a6++)
			for (var ep = -1; ep < 2; ep += 2) {
				var eq = eo + ep * a6;
				if (" " === os[eq]) return [this.a0E(os.substring(0, eq)), this.a0F(os.substring(eq))]
			}
		return [os.substring(0, eo), os.substring(eo)]
	}, this.a0F = function(os) {
		for (var eV = os.length, a6 = 0; a6 < eV; a6++)
			if (" " !== os[a6]) return os.substring(a6);
		return os
	}, this.a0E = function(os) {
		for (var a6 = os.length - 1; 0 <= a6; a6--)
			if (" " !== os[a6]) return os.substring(0, a6 + 1);
		return os
	}, this.a0G = function(os, a0H) {
		return os.split("(")[0] + "(🧈 " + a0H.toFixed(2) + ")"
	}, this.startsWith = function(os, a0I) {
		return os.substring(0, a0I.length) === a0I
	}, this.zX = function(os, a0I) {
		var eV = os.length;
		return os.substring(eV - a0I.length, eV) === a0I
	}, this.a0J = function(g, a0K, a0L) {
		var os = "",
			eV = g.length - 1;
		a0L = a0L || "";
		for (var a6 = 0; a6 < eV; a6++) os += a0L + g[a6] + a0L + ",", (a6 + 1) % a0K == 0 && (os += "\n");
		return os += a0L + g[eV] + a0L
	}, this.a0M = function(os, hO, hP) {
		return os.replace(new RegExp(hO, "g"), hP)
	}
}

function a0N() {
	this.ih = function(player, eH) {
		aD.uD(player, bI.ed(eH), bI.ef(eH)) && (bb.dZ = !0), a8.jy && this.iR()
	}, this.iR = function() {
		a8.gs = !1;
		for (var a6 = 0; a6 < a8.jc; a6++) 0 !== ab.lT[a6] && 0 === ab.gK[a6] && aD.uJ(a6);
		0 !== ab.lT[a8.eF] ? (bZ.lP[7] = ab.gK[a8.eF], bZ.lP[8] = ab.gY[a8.eF], aM.a0O(), aR.a0P(), a8.gg || aC.lo(ab.i8[a8.eF] - 5, ab.iA[a8.eF] - 5, ab.i9[a8.eF] + 5, ab.iB[a8.eF] + 5), ao.dR()) : aS.show(!1, !1, !1, !0), aI.a0Q(18), aa.a0R(),
			aa.lF(!0), bL.l7.a0S(), aG.qh(), a8.oS = null, bX.a0T = !0, bX.a0U(), a8.jy && r.s.setState(1)
	}
}

function bs() {
	this.eS = 512, this.zg = 15e8, this.a0V = 1e9, this.zq = 5e4, this.a0W = 512, this.fq = 2, this.eF = 0, this.jc = 0, this.w8 = 0, this.k0 = 0, this.w7 = 0, this.tO = 512, this.tT = 512, this.jj = 150, this.jy = !0, this.gg = 0, this.w5 = 0, this
		.jM = 0, this.ly = !1, this.gs = 0, this.a0X = 0, this.ic = !1, this.tV = 0, this.tW = 0, this.jw = 0, this.wm = 0, this.oS = null, this.wN = new uX, this.a0Y = 30, this.w2 = 0, this.wA = 0, this.wM = 0, this.data = new a0Z, this.a0a =
		new a0b, this.a0c = 0, this.a0d = function() {
			this.w8 = this.jc = this.data.humanCount, this.jy = 1 === this.w8 && !__fx.customLobby.isActive(), this.ly = !1, this.gg = this.data.isReplay, this.jw = 0 === this.data.gameMode ? [7, 10, 8][this.data.battleRoyaleMode] : this.data
				.isZombieMode ? 9 : this.data.numberTeams - 2, this.wm = this.data.isContest, this.ic = this.jw < 7 || 9 === this.jw, this.jw = 10 === this.jw && this.jy ? 7 : this.jw, this.jw = 8 === this.jw && 2 !== this.jc ? 7 : this.jw, aw.dR(),
				this.tV = this.data.numberTeams, this.data.teamPlayerCount ? this.tW = +(0 < this.data.teamPlayerCount[0]) : (this.tW = 0, this.ic && this.jy && (this.data.teamPlayerCount = new Uint16Array(9), this.data.teamPlayerCount.fill(1, 1,
					this.tV + 1), a8.a0a.a0e())), this.a0Y = this.jc <= 2 ? 30 : this.jc <= 50 ? 40 : 50, this.a0X = this.gs = __fx.customLobby.isActive() ? __fx.customLobby.gameInfo.spawnSelection : this.data.selectableSpawn, this.oS = this.gs ?
				new a0N : null, this.tO = __fx.customLobby.isActive() ? Math.max(Math.min(__fx.customLobby.gameInfo.botCount, this.data.playerCount), this.jc) : this.data.playerCount,
				this.tT = this.tO, this.k0 = this.tO - this.jc, this.w7 = 0, this.eF = this.data.selectedPlayer, this.w2 = 0, this.wA = 0, this.wM = 0, av.a0f(this.data.spawningSeed), aZ.dR(), ab.dR(), ad.a0g(), b5.nU.oE = [], bc.dR(), this.w5 = 1,
				__fx.donationsTracker.reset(), __fx.leaderboardFilter.reset(), __fx.customLobby.isActive() && __fx.customLobby.hideWindow(), bZ.dR(), a0h(), aX.dS(), aj.a0i(), bX.dR(), aX.dR(), am.dR(), bI.dR(), bJ.dR(), ai.dR(), bN.dR(), bR.a0j(),
				a9.dR(), ad.a2(), aD.dR(), aE.dR(), ag.a0k(), b6.dR(), bd.dR(), bL.dR(), ba.dR(), a0l.putImageData(a0m, 0, 0), aQ.dR(), aN.dR(), aM.dR(), b8.dR(), ar.dR(), aP.dR(), aR.dR(), aH.dR(), aL.dR(), aI.dR(), aK.dR(), aG.dR(), aS.dR(), aA
				.dR(), aB.dR(), fY(), aY.dR(), aa.dR(), b1.dR(), b2.dR(), ay.dR(), this.wN.dR(), bb.a0j(), aC.ln(), 0 === ab.lT[a8.eF] && aS.show(!1, !0), aa.lF(!0), ao.dR(), bb.dZ = !0, this.gg || this.jy && this.gs || r.s.setState(1), this.a0c = 0
		}, this.xY = function(a0o) {
			a8.gg || b6.oQ.a0p.length || (b6.oQ.a0p = b6.a0q.vb()),
				__fx.customLobby.isActive() === false && ax.l7.a0r(),
				this.w5 = 0, bb.a0s(), r.s.setState(0), a0o || bQ.dp.show(), aV.setState(0);
			if (__fx.customLobby.isActive()) __fx.customLobby.rejoinLobby();
			else this.a0c ? n.o(19) : n.o(5, 5)
		}, this.a0t = function() {
			return this.gg ? aH.gh || !b8.a0u : this.jy && (aH.gh || this.gs)
		}, this.a0v = function() {
			return 1 === this.w5 && !this.gs
		}
}

function a0Z() {
	this.mapType = 0, this.mapProceduralIndex = 2, this.mapRealisticIndex = 0, this.mapSeed = 14071, this.mapName = "", this.canvas = null, this.passableWater = 1, this.passableMountains = 1, this.playerCount = 512, this.humanCount = 1, this
		.selectedPlayer = 0, this.gameMode = 0, this.playerMode = 0, this.battleRoyaleMode = 0, this.numberTeams = 0, this.isZombieMode = 0, this.isContest = 0, this.isReplay = 0, this.elo = null, this.colorsType = 0, this.colorsPersonalized = 1,
		this.colorsData = null, this.selectableColor = 1, this.teamPlayerCount = null, this.neutralBots = 0, this.botDifficultyType = 0, this.botDifficultyValue = 0, this.botDifficultyTeam = null, this.botDifficultyData = null, this.spawningType = 0,
		this.spawningSeed = 0, this.spawningData = null, this.selectableSpawn = 1, this.playerNamesType = 0, this.playerNamesData = null, this.selectableName = 1, this.aIncomeType = 0, this.aIncomeValue = 0, this.aIncomeData = null, this
		.tIncomeType = 0, this.tIncomeValue = 32, this.tIncomeData = null, this.iIncomeType = 0, this.iIncomeValue = 64, this.iIncomeData = null, this.sResourcesType = 0, this.sResourcesValue = 0, this.sResourcesData = null
}

function a0b() {
	this.a0e = function() {
		var a0w = a8.data;
		b7.pL.yy(a0w.teamPlayerCount, a0w.playerCount), a0w.numberTeams = b7.pL.yo(a0w.teamPlayerCount, 0), a0w.teamPlayerCount[0] && a0w.teamPlayerCount[7] && (a0w.teamPlayerCount[7] = 0, this.a0e())
	}, this.a0x = function() {
		var a0w = a8.data;
		a0w.mapType < 2 ? bO.a2(bO.a0y(a0w), a0w.mapSeed) : bO.a0z(a0w.canvas)
	}, this.a10 = function() {
		var a0w = a8.data;
		a0w.colorsData || (a0w.colorsData = new Uint32Array(1)), a0w.selectableColor && (a0w.colorsData[0] = bf.l7.rw()), a0w.selectableName && (a0w.playerNamesData || (a0w.playerNamesData = new Array(1)), a0w.playerNamesData[0] = bf.dk.data[122]
			.value)
	}, this.a11 = function() {
		a8.data = new a0Z, a8.data.aIncomeType = 2, a8.data.aIncomeData = new Uint8Array(a8.eS), a8.data.aIncomeData[0] = 64
	}
}

function dL() {
	this.vC = 0, this.gap = 0, this.zN = 0, this.pJ = 0, this.dR = function() {
		this.resize()
	}, this.resize = function() {
		this.vC = .0022 * b7.pB.pC(.5) * au.pD, this.zN = this.vC / au.pH, this.gap = Math.max(Math.floor((r.s.v9() ? .0114 : .01296) * au.pD), 2), this.pJ = this.gap / au.pH
	}
}

function dK() {
	this.a12 = function() {
		return r.s.v9() ? 2 : 1
	}
}

function c3() {
	var ph, ec, ee, a13, a14, a15, e3, player, a16, gap, zoom, o6, a17;

	function a1H(player) {
		for (var a6 = o6.length - 1; 0 <= a6; a6--)
			if (o6[a6] === player) return 1
	}

	function a1F(a1C) {
		var a6, eV;
		if (-1 !== a1C)
			for (eV = ph.length, a6 = 0; a6 < eV; a6++)
				if (ph[a6].uj && ph[a6].ec + 1 === a1C % 4 && ph[a6].ee + 1 === a1C >> 2) return a6;
		return -1
	}

	function a1D(kh, ki) {
		var qi = gap / 2;
		return kh < ec - a13 - 3 * qi || ec + 3 * a13 + 5 * qi < kh || ki < ee - a13 - 3 * qi || ee + 2 * a13 + 3 * qi < ki ? -1 : 4 * (ki < ee - qi ? 0 : ki < ee + a13 + qi ? 1 : 2) + (kh < ec - qi ? 0 : kh < ec + a13 + qi ? 1 : kh < ec + 2 * a13 +
			3 * qi ? 2 : 3)
	}
	this.a18 = function() {
		var a6, ep, a1B = [u.ms, u.n4, u.mU, u.nJ, u.nC];
		for (ph = new Array(9), a6 = 0; a6 < 9; a6++) ph[a6] = {
			id: a6,
			uj: !1,
			kO: 0,
			canvas: [],
			ec: 0,
			ee: 0
		};
		for (ph[0].colors = [0, 1, 2, 3], ph[0].ec = 0, ph[0].ee = 0, ph[1].colors = [0, 1, 4], ph[1].ec = 1, ph[1].ee = 0, ph[2].colors = [0, 2], ph[2].ec = -1, ph[2].ee = 0, ph[3].colors = [0], ph[3].ec = 0, ph[3].ee = 0, ph[4].colors = [0, 2],
			ph[4].ec = 1, ph[4].ee = 1, ph[5].colors = [3], ph[5].ec = 0, ph[5].ee = -1, ph[6].id = 20, ph[6].colors = [0], ph[6].ec = 1, ph[6].ee = -1, ph[7].id = 21, ph[7].colors = [0], ph[7].ec = 0, ph[7].ee = 1, ph[8].id = 16, ph[8]
			.colors = [0], ph[8].ec = 0, ph[8].ee = 0, a6 = 0; a6 < 9; a6++)
			for (ep = 0; ep < ph[a6].colors.length; ep++) ph[a6].canvas.push(function(id, z1) {
				if (id < 20) return b7.canvas.ux(aW.get(3), id, z1);
				var z1 = aW.get(3).height,
					z2 = b7.pB.sh(z1, z1),
					hF = b7.pB.getContext(z2);
				20 === id ? hF.drawImage(aW.get(18), 0, 0) : 21 === id && ae.ss.vD(ae.ug.v1 + ae.ug.vJ, hF, 0, 0, z1);
				return z2
			}(ph[a6].id, a1B[ph[a6].colors[ep]]))
	}, this.a1A = function() {
		return ph
	}, this.dR = function() {
		o6 = [], ec = ee = e3 = 0, a14 = a15 = -1e3, this.resize()
	}, this.resize = function() {
		a13 = Math.floor((r.s.v9() ? .075 : .0468) * au.pD), zoom = a13 / aW.get(3).height, gap = Math.floor(a13 / 3)
	}, this.y1 = function(kh, ki) {
		return !!this.uj() && (bb.dZ = !0, !!ae.ss.gk(kh, ki, player) || (kh = function(kh, ki) {
			a15 = a14 = -1e3;
			var a1E = a1F(a1D(kh, ki));
			if (-1 === a1E) return 0;
			if (1 !== ph[a1E].colors[ph[a1E].kO])
				if (5 === a1E) {
					if (! function() {
							var e4 = performance.now();
							a17 + 4e3 < e4 && (o6 = []);
							a17 = e4
						}(), a1H(player)) return 1;
					o6.push(player), 16 < o6.length && o6.shift()
				} else if (6 === a1E) {
				for (var a6 = o6.length - 1; 0 <= a6; a6--) 0 === ab.lT[o6[a6]] && o6.splice(a6, 1);
				0 < o6.length && (b2.a1I(1, o6, !0) && b5.fs.o5(o6, player), o6 = [])
			} else if (2 === a1E) b5.gt.na(aM.gy(), player);
			else if (3 === a1E) a8.gs && b5.gt.gu(a16);
			else if (0 === a1E)
				if (0 === ph[0].kO) {
					if (a8.a0X && aR.a1J() < 350) return 1;
					b5.gt.h4(aM.gy(), player)
				} else ay.h6(player, aM.gy());
			else if (1 === a1E) bR.a1K(), b5.gt.h2(aM.gy(), a16);
			else {
				if (7 === a1E) return bR.a1L(), ae.ss.show(kh, ki), 2;
				if (4 === a1E) b2.a1I(0, [player], !0) && b5.fs.o2(player);
				else {
					if (8 !== a1E) return 0;
					b5.gt.gx(aM.gy(), a16, player)
				}
			}
			return 1
		}(kh, ki), this.qh(), 2 === kh && (ae.ss.uj = !0), 0 < kh))
	}, this.y3 = function(kh, ki) {
		this.uj() || (a14 = kh, a15 = ki, e3 = performance.now())
	}, __fx.hoveringTooltip.display = function(mouseX, mouseY) {
		var coordX = bI.go(mouseX),
			coordY = bI.gq(mouseY),
			coord = bI.et(coordX, coordY),
			point = bI.eL(coord);
		if (coordX < 0 || coordY < 0) return;
		(function(kh, ki, e9) {
			aX.eQ(e9) || -1 === (kh = bJ.h0.a1Z(kh, ki)) ? aI.a1Y(e9) : aI.a1a(kh)
		}(mouseX, mouseY, point))
	}
	this.click = function(kh, ki, yB) {
		var gn = bI.go(kh),
			gp = bI.gq(ki),
			eH = bI.et(gn, gp),
			e9 = bI.eL(eH);
		if (!bI.gr(gn, gp)) return !1;
		gn = (r.s.v9() ? .025 : .0144) * au.pD, gp = performance.now();
		if (Math.abs(kh - a14) > gn || Math.abs(ki - a15) > gn || e3 + 500 < gp) return !1;
		if (e3 = gp, yB && ! function(kh, ki, e9) {
				aX.eQ(e9) || -1 === (kh = bJ.h0.a1Z(kh, ki)) ? aI.a1Y(e9) : aI.a1a(kh)
			}(kh, ki, e9), aH.gh || this.uj() || !b7.fs.gj(a8.eF) || a8.gg) return this.qh(), !1;
		if (a8.gs) {
			if (!yB) {
				if (!aX.eQ(e9)) return !1;
				a16 = eH, ph[3].uj = !0
			}
		} else if (bJ.h0.nf(eH)) yB ? aI.a1R(55, 0) : bJ.a1P.a1Q = -1;
		else {
			if (yB) return !1;
			bJ.h0.a1S(kh, ki) || (2 === a8.w5 ? aX.g6(e9) && (player = aX.eN(e9), aX.vy(player)) && (ph[0].uj = !0, ph[0].kO = 1, ph[7].uj = !0) : aX.ea(e9) ? (a16 = ah.e6.e8(e9)) && (gn = bI.eL(a16), ph[8].uj = !0, player = aX.eM(gn) ? a8.eS :
				aX.eN(gn)) : (a16 = eH, bJ.h0.h1(a8.eF, eH) && (ph[0].uj = !0, ph[0].kO = 1, ph[1].uj = !0, ph[1].kO = bK.f8[2] ? 0 : 2), aX.gz(e9) || (aX.eM(e9) ? (player = a8.eS, h3(a8.eF) ? (ph[0].uj = !0, ph[0].kO = 0) : h5(a8.eF,
				player) && (ph[0].uj = !0, ph[0].kO = 3)) : (player = aX.eN(e9)) === a8.eF ? (ph[0].uj = !0, ph[0].kO = 1, ph[7].uj = !0) : (ph[0].kO = 1, ph[5].uj = function(player) {
				return aX.vy(player) && !a1H(player) && b2.a1I(1, [player], !1)
			}(player), ph[7].uj = aX.vy(player), eO(player, a8.eF) ? (ph[4].uj = aX.vy(player) && !aa.a1U(player) && b2.a1I(0, [player], !1), ph[6].uj = function(player) {
				if (0 === o6.length) return !1;
				if (performance.now() > a17 + 4e3) return !(o6 = []);
				return !a1H(player) && ! function(player) {
					var a6;
					if (a8.ic)
						for (a6 = o6.length - 1; 0 <= a6; a6--)
							if (!eO(player, o6[a6])) return 1;
					return
				}(player)
			}(player), h7(a8.eF, player) ? (ph[0].kO = 0, ph[0].uj = !0) : h5(a8.eF, player) && (ph[0].kO = 3, ph[0].uj = !0), ph[0].uj = this.a1W()) : (ph[2].uj = !0, ph[0].uj = !0)))))
		}
		return this.a1O(kh, ki)
	}, this.a1O = function(kh, ki) {
		return ec = kh - Math.floor(a13 / 2), ee = ki - Math.floor(a13 / 2), !!this.uj()
	}, this.xh = function(kh, ki) {
		return !!this.uj() && (ae.ss.uj ? !ae.ss.vB(kh, ki) && (ae.ss.uj = !1, bb.dZ = !0) : function(wc, kh, ki) {
			kh = a1D(kh, ki);
			if (0 <= a1F(kh)) return !1;
			if ((1 === kh || 6 === kh) && 0 <= a1F(2)) return !1;
			if ((6 === kh || 9 === kh) && 0 <= a1F(10)) return !1;
			return wc.qh(), bb.dZ = !0
		}(this, kh, ki))
	}, this.qh = function() {
		for (var a6 = ph.length - 1; 0 <= a6; a6--) ph[a6].uj = !1, ph[a6].kO = 0;
		ae.ss.uj = !1
	}, this.uj = function() {
		return this.a1W() || ae.ss.uj
	}, this.a1W = function() {
		for (var eV = ph.length, a6 = 0; a6 < eV; a6++)
			if (ph[a6].uj) return !0;
		return !1
	}, this.rA = function() {
		if (this.uj())
			if (ae.ss.uj) ae.ss.rA();
			else {
				var a6, hF = rB,
					ep = ph,
					eV = ep.length,
					a1e = (a13 + gap) / zoom;
				for (hF.imageSmoothingEnabled = !0, hF.setTransform(zoom, 0, 0, zoom, ec, ee), a6 = 0; a6 < eV; a6++) ep[a6].uj && rB.drawImage(ep[a6].canvas[ep[a6].kO], ep[a6].ec * a1e, ep[a6].ee * a1e);
				hF.imageSmoothingEnabled = !1, hF.setTransform(1, 0, 0, 1, 0, 0)
			}
	}
}

function c4() {
	var j6, canvas, a1f, a1g, a1h, a1i = -1;

	function a1j() {
		var a1k, uR = canvas.getContext("2d", {
			alpha: !0
		});
		uR.clearRect(0, 0, j6, j6), uR.fillStyle = u.mS, uR.fillRect(0, 0, j6, j6), 0 === a1g && (uR.fillStyle = u.mX, uR.fillRect(0, 0, j6, j6)), uR.fillStyle = u.mW, uR.fillRect(0, 0, j6, 1), uR.fillRect(0, 0, 1, j6), uR.fillRect(0, j6 - 1, j6, 1),
			uR.fillRect(j6 - 1, 0, 1, j6), a1k = .9 * j6 / aW.get(0).width, uR.imageSmoothingEnabled = !0, uR.setTransform(a1k, 0, 0, a1k, Math.floor((j6 - a1k * aW.get(0).width) / 2), Math.floor((j6 - a1k * aW.get(0).height) / 2)), uR.drawImage(aW
				.get(0), 0, 0), uR.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a1m(kh, ki) {
		if (!aH.gh) return kh <= j6 + bY.gap && ki >= aM.ee ? 9 : -1;
		if (kh <= 4 * j6 + bY.gap) {
			if (ki >= aM.ee) return 0;
			if (ki >= aM.ee - j6 - a1h * bY.gap) return 2
		} else if (kh <= 7 * j6 + bY.gap && ki >= aM.ee - j6 - a1h * bY.gap) return 1;
		return -1
	}
	this.gh = !1, this.dR = function() {
		a1g = -1, this.gh = !1, a1h = r.s.v9() ? 1.2 : .6, this.resize()
	}, this.resize = function() {
		j6 = aM.j6, (canvas = document.createElement("canvas")).width = j6, canvas.height = j6, a1f = b7.pB.qS(1, (r.s.v9() ? .5 : .45) * j6), a1j()
	}, this.yJ = function() {
		this.gh = !this.gh, this.gh ? (bQ.dm.hideCMPButton(), b8.yI(!1), a8.gg && b8.a0u && b8.yK(!0), this.a1l()) : (a1g = -1, a1j(), !a8.jy || 1 !== a8.w5 || a8.gs || a8.gg || r.s.setState(1)), bb.dZ = !0
	}, this.a1l = function() {
		(a8.jy || a8.gg) && 1 === a8.w5 && (aQ.lF(!0), a8.gs || setTimeout(function() {
			bX.wG()
		}, 0), r.s.setState(0))
	}, this.gk = function(kh, ki) {
		return 0 <= (a1i = a1m(kh, ki)) || !aH.gh || a8.jy || a8.gg || ba.uj || aH.yJ(), a1i
	}, this.xh = function(kh, ki) {
		kh = a1m(kh, ki);
		kh !== a1g && (a1g = kh, this.gh || a1j(), bb.dZ = !0)
	}, this.xi = function(kh, ki) {
		kh = a1m(kh, ki);
		return -1 !== kh && a1i === kh && (this.gh ? a8.ly ? (0 <= kh && b8.yI(!1), !a8.gg) : (0 === kh ? a8.xY() : 1 === kh ? this.yJ() : 2 === kh && n.o(1, 0), !0) : 9 === kh && (this.yJ(), !0))
	}, this.rA = function() {
		var a0;
		this.gh ? (a0 = Math.floor(5.5 * j6), rB.setTransform(1, 0, 0, 1, bY.gap, aM.ee), rB.fillStyle = u.mS, rB.fillRect(0, 0, a0, j6), 0 === a1g ? (rB.fillStyle = u.mX, rB.fillRect(0, 0, 4 * j6, j6)) : 1 === a1g && (rB.fillStyle = u.mX, rB
				.fillRect(4 * j6, 0, Math.floor(1.5 * j6), j6)), rB.fillStyle = u.mW, rB.fillRect(0, 0, a0, 1), rB.fillRect(0, 0, 1, j6), rB.fillRect(4 * j6, 0, 1, j6), rB.fillRect(0, j6 - 1, a0, 1), rB.fillRect(a0 - 1, 0, 1, j6), rB.font =
			a1f, b7.pB.textBaseline(rB, 1), b7.pB.textAlign(rB, 1), rB.fillText(L(18), 2 * j6, .54 * j6), a0 = .4 * j6, aH.a1r(bY.gap + 4 * j6 + (1.5 * j6 - a0) / 2, aM.ee + .3 * j6, a0), a0 = 1, rB.setTransform(1, 0, 0, 1, bY.gap, aM.ee -
				a0 * a1h * bY.gap - a0 * j6), rB.fillStyle = u.mS, rB.fillRect(0, 0, 4 * j6, j6), a1g === a0 + 1 && (rB.fillStyle = u.mX, rB.fillRect(0, 0, 4 * j6, j6)), rB.fillStyle = u.mW, rB.fillRect(0, 0, 4 * j6, 1), rB.fillRect(0, 0, 1,
				j6), rB.fillRect(4 * j6, 0, 1, j6), rB.fillRect(0, j6 - 1, 4 * j6, 1), rB.fillText(L(0 === a0 ? 18 : 19), 2 * j6, .54 * j6), rB.setTransform(1, 0, 0, 1, 0, 0)) : rB.drawImage(canvas, bY.gap, aM.ee)
	}, this.a1q = function(player) {
		return 0 !== ab.lT[player] && 2 !== a8.w5 && aX.vy(player)
	}, this.a1r = function(ec, ee, eV) {
		rB.setTransform(1, 0, 0, 1, ec, ee), rB.lineWidth = bY.vC, rB.strokeStyle = u.mW, rB.beginPath(), rB.moveTo(0, 0), rB.lineTo(eV, eV), rB.moveTo(0, eV), rB.lineTo(eV, 0), rB.stroke()
	}
}

function c5() {
	var a1t, j6, a1u, a1v, a1w, a1x, a1y, a1z, a20;

	function uN() {
		return aM.a2H(aI.a2D()) ? ar.uj ? aM.ee - aM.j6 - 2 * a1u : aM.ee - a1u : b8.a2H(aI.a2G()) ? ar.uj ? b8.uN() - aM.j6 - 2 * a1u : b8.uN() - a1u : ar.uj ? au.j6 - aM.j6 - (bg.a12() + 1) * a1u : au.j6 - bg.a12() * bY.gap
	}

	function a25(e4, os, id, g4, a27, a28, t0, a29, a2A, a2B) {
		var a6, uR, z2, p3, g, a2M = void 0 !== a2A,
			a0 = Math.floor(aL.measureText(os, aI.a1f) + 1.5 * a1v + (a2M ? j6 : 1.5 * a1v));
		if (bb.dZ = !0, a0 + a1u > au.a0 && !a2M && 50 !== id && 20 < os.length) a25(e4, (g = b7.wv.a0D(os))[0], id, g4, a27, a28, t0, a29, a2A, a2B), a25(e4, g[1], id, g4, a27, a28, t0, a29, a2A, a2B);
		else if (g = a0 + (50 === id ? a1w : 0), (z2 = document.createElement("canvas")).width = a0, z2.height = j6, (uR = z2.getContext("2d", {
				alpha: !0
			})).font = aI.a1f, b7.pB.textBaseline(uR, 1), b7.pB.textAlign(uR, 0), uR.clearRect(0, 0, a0, j6), uR.fillStyle = a28, uR.fillRect(0, 0, a0, j6), uR.fillStyle = a27, uR.fillText(os, Math.floor(1.5 * a1v), Math.floor(j6 / 2)), a2M && (uR
				.imageSmoothingEnabled = !0, ae.ss.vD(a2A, uR, a0 - j6, 0, j6)), 0 === (p3 = {
				e3: e4,
				os: os,
				id: id,
				player: g4,
				canvas: z2,
				a27: a27,
				a28: a28,
				a0: a0,
				a2E: g,
				t0: t0,
				a29: a29,
				a2A: a2A,
				a2B: a2B
			}).e3 || 0 < a1t.length && 0 < a1t[0].e3) a1t.unshift(p3);
		else {
			for (a6 = 1; a6 < a1t.length; a6++)
				if (0 < a1t[a6].e3) return void a1t.splice(a6, 0, p3);
			a1t.push(p3)
		}
	}

	function a2T(hH, qi, ep) {
		return "rgb(" + hH + "," + qi + "," + ep + ")"
	}

	function a2N(id, fz) {
		for (var eV = a1t.length, a6 = 0; a6 < eV; a6++) a1t[a6].id === id && fz-- <= 0 && (a1t.splice(a6, 1), a6--, eV--)
	}

	function a2P(id, player) {
		for (var ej = !1, a6 = a1t.length - 1; 0 <= a6; a6--) a1t[a6].id !== id || player !== a8.eS && a1t[a6].player !== player || (a1t.splice(a6, 1), ej = !0);
		return ej
	}

	function a2n(os) {
		a25(340, os, 6, 0, a2T(215, 245, 255), u.mT, -1, !1)
	}
	this.a21 = "", this.dR = function() {
		var self;
		a1z = 0, a1y = r.s.v9() ? 7 : 12, a1x = {
			vw: [0, 0, 0],
			a22: [0, 0, 0],
			ll: [220, 180, 180],
			r8: [0, 0, 0],
			eq: [0, 0, 0]
		}, a1t = [], this.resize(), a8.gs && this.wH(0, 18), bO.sf.sg[bO.eB].name.length && a2n(L(65, [bO.sf.sg[bO.eB].name])), a2n(L(66, [bO.eg - 2 + "x" + (bO.eh - 2)])), a2n(L(67, [aj.a2o])), aj.a2o !== aj.a2p && a2n(L(68, [aj.a2p + " (" +
			b7.wv.a0A(100 * aj.a2p / aj.a2o, 1) + ")"
		])), 0 < aj.a2q && a2n(L(41, [aj.a2q + " (" + b7.wv.a0A(100 * aj.a2q / aj.a2o, 1) + ")"])), 0 < aj.a2r && a2n(L(69, [aj.a2r + " (" + b7.wv.a0A(100 * aj.a2r / aj.a2o, 1) + ")"])), 10 === a8.jw && a25(120, L(70), 6, 0, a2T(235, 255,
			120), u.mT, -1, !1), 0 !== (self = this).a21.length && (a25(200, self.a21, 0, 0, u.mW, u.mT, -1, !1), self.a21 = "")
	}, this.resize = function() {
		var a26, a6;
		if (j6 = (j6 = Math.floor((r.s.v9() ? .031 : .0249) * au.pD)) < 10 ? 10 : j6, this.fontSize = Math.floor(2 * j6 / 3), this.a1f = b7.pB.qS(1, this.fontSize), a1u = bY.gap, a1v = Math.floor(j6 / 5), 0 < a1t.length)
			for (a26 = a1t, a1t = [], a6 = a26.length - 1; 0 <= a6; a6--) a25(a26[a6].e3, a26[a6].os, a26[a6].id, a26[a6].player, a26[a6].a27, a26[a6].a28, a26[a6].t0, a26[a6].a29, a26[a6].a2A, a26[a6].a2B);
		this.a2C()
	}, this.a2C = function() {
		a20 = document.createElement("canvas");
		var os = L(20),
			uR = (a1w = aL.measureText(os, this.a1f) + 5 * a1v, a20.height = j6, a20.width = a1w, a20.getContext("2d", {
				alpha: !0
			}));
		uR.font = this.a1f, b7.pB.textBaseline(uR, 1), b7.pB.textAlign(uR, 1), uR.clearRect(0, 0, a1w, j6), uR.fillStyle = u.v, uR.fillRect(0, 0, a1w, j6), uR.fillStyle = u.mW, uR.fillText(os, Math.floor(a1w / 2), Math.floor(j6 / 2))
	}, this.a2D = function() {
		var eV;
		return ar.uj ? ar.a0 : 0 === (eV = a1t.length) ? 0 : 1 === eV ? a1t[0].a2E : a2F(a1t[0].a2E, a1t[1].a2E)
	}, this.a2G = function() {
		var eV = a1t.length;
		return ar.uj ? eV ? a2F(ar.a0, a1t[0].a2E) : ar.a0 : 0 === eV ? 0 : 1 === eV ? a1t[0].a2E : 2 === eV ? a2F(a1t[0].a2E, a1t[1].a2E) : a2F(a2F(a1t[0].a2E, a1t[1].a2E), a1t[2].a2E)
	}, this.gk = function(ec, ee) {
		for (var lv, a2I, a2J = uN(), a6 = a1t.length - 1; 0 <= a6; a6--)
			if ((a2I = a2J - (a6 + 1) * j6) <= ee && ee < a2I + j6) return 50 === a1t[a6].id ? ec >= au.a0 - a1w - a1u - a1t[a6].a0 && (ec >= au.a0 - a1w - a1u ? b5.fs.o2(a1t[a6].player) : aC.lp(a1t[a6].player, 800, !1, 0), !0) : ec >= au.a0 -
				a1t[a6].a0 - a1u && (736 === a1t[a6].id ? (a2I = a1t[a6].os.split(" "), window.open(a2I[a2I.length - 1], "_blank")) : a1t[a6].a29 && (a1t[a6].a2B && a1t[a6].a2B.eo ? (a2I = a1t[a6].a2B.eH, lv = bI.ed(a2I) - 10, a2I = bI.ef(
					a2I) - 10, aC.lo(lv, a2I, 19 + lv, 19 + a2I)) : a1t[a6].a2B && a1t[a6].a2B.ep ? aC.lq(a1t[a6].player, a1t[a6].a2B.lr) : (aC.lp(a1t[a6].player, 800, !1, 0), 0 <= a1t[a6].t0 && (lv = a1t[a6].t0, a1t[a6].t0 = a1t[a6]
					.player, a1t[a6].player = lv))), !0);
		return !1
	}, this.wT = function(e4, os, id, g4, a27, a28, t0, a29, a2A, a2B) {
		a25(e4, os, id, g4, a27, a28, t0, a29, a2A, a2B)
	}, this.a2L = function(k) {
		a25(300, k, 252, 0, u.mW, u.mT, -1, !1)
	}, this.a0Q = function(id) {
		for (var a6 = a1t.length - 1; 0 <= a6; a6--) a1t[a6].id === id && (a1t[a6].e3 = 1)
	}, this.wH = function(player, id) {
		0 === id ? (aL.ih(player, 0), a2N(423, 0), a25(160, L(21, [ab.a2O[player]]), 423, player, "rgb(10,220,10)", u.mT, -1, !1)) : 1 === id ? (a2P(50, a8.eS), aL.ih(player, 1), a25(360, L(22, [ab.a2O[player]]), 0, player, u.n6, u.mT, -1, !0),
			aC.lp(player, 2700, !1, 0)) : 2 === id ? (aL.ih(player, 2), a25(0, L(23), 0, player, "rgb(10,255,255)", u.mT, -1, !0), aC.lp(player, 2700, !1, 0)) : 3 === id ? (aL.ih(player, 2), a25(0, L(24, [ab.a2O[player]]), 0, player, u.mW, u
			.mT, -1, !0), aC.lp(player, 2700, !1, 0)) : 4 === id ? this.a2Q(1, player, player) : 5 === id ? 2 !== ab.zY[player] && aX.vy(a8.eF) && (function(id, lO) {
			var a6, a2c = 0,
				eV = a1t.length;
			for (a6 = 0; a6 < eV; a6++)
				if (a1t[a6].id === id && lO <= ++a2c) return a1t.splice(a6, 1)
		}(1, 5), aa.a2S(player) ? a25(180, L(25, [ab.a2O[player]]), 1, player, a2T(255, 200, 180), u.mT, -1, !0) : (a2N(573, 0), a25(180, L(26, [ab.a2O[player]]), 573, player, u.n6, u.mT, -1, !0))) : 18 === id ? a25(255, L(27), 18, 0, u.mW, u
			.mT, -1, !1) : 21 === id ? a25(220, L(28), id, 0, u.mW, u.mT, -1, !1) : 22 === id ? this.a2Q(2, player, player) : 59 === id && a25(0, L(29), id, 0, u.nI, u.mT, 0, !1)
	}, this.xP = function(k) {
		a25(200, L(30, [k]), 94, 0, u.mW, u.n2, -1, !1)
	}, this.wO = function(a2U) {
		if (ab.eF === a2U && !ab.jy)
			__fx.wins.count++, window.localStorage.setItem("fx_winCount", __fx.wins.count),
			a25(0, "Your Win Count is now " + __fx.wins.count, 3, a2U, u.mW, u.mT, -1, !0);
		ab.gK[a2U] && (aL.ih(a2U, 2), a8.jc < 100 ? a25(0, L(24, [ab.a2O[a2U]]), 3, a2U, u.mW, u.mT, -1, !0) : a25(0, L(31, [ab.a2O[a2U]]), 3, a2U, u.mW, u.mT, -1, !0))
	}, this.a1Y = function(e9) {
		var a2W, os, a2V = "(" + bI.ed(e9 >> 2) + ", " + bI.ef(e9 >> 2) + ")",
			a29 = !1,
			player = 0;
		aX.eQ(e9) ? aX.eM(e9) ? a2V = L(32, [a2V]) : (player = aX.eN(e9), os = L(33, [b7.uR.zE(ab.wx[player], b7.pB.qS(0, 10), 150)]) + "   ", os = (os += L(34, [b7.wv.a05(ab.gY[player])]) + "   ") + L(35, [b7.wv.a05(ab.gK[player])]) + "   ", a8
				.ic && (a2W = bc.wR[bc.k2[bc.eT[player]]], os += L(36) + ": " + a2W + "   "), b7.fs.j0(player) && (os += L(37) + ": " + a9.jq[a9.il[player]] + "   "), a2V = os = (os += L(38, [player]) + "   ") + L(39, [a2V]), a29 = !0) : a2V = aX
			.ea(e9) ? L(40, [a2V]) + "   #" + aX.eD(e9) : L(41, [a2V]), bb.dZ = !0, a2N(55, 0), a25(220, a2V, 55, player, u.mW, u.mT, -1, a29)
	}, this.a1a = function(a2X) {
		var kM = bJ.l7,
			player = kM.a2Y[a2X] >> 3,
			os = (bb.dZ = !0, a2N(55, 0), L(42, [ab.a2O[player]]) + "   ");
		a25(220, os += L(34, [kM.a2Z[a2X]]), 55, player, u.mW, u.mT, -1, !0)
	}, this.nk = function(nX, a2a, nl) {
		nX === a8.eF ? a25(175, " " + L(43, [ab.a2O[a2a]]) + ": ", 1001, a2a, a2T(200, 255, 210), u.mT, -1, !0, nl) : this.a2b(nX, nl)
	}, this.a2b = function(nX, nl) {
		a2N(1e3, 0), a25(175, ab.a2O[nX] + ": ", 1e3, nX, u.mW, "rgba(5,60,25,0.9)", -1, !0, nl)
	}, this.wU = function() {
		var k;
		a8.wA ? (k = L(44), aL.wS(L(45), 2, 1, 12), a25(0, k, 40, 0, "rgb(10,220,10)", u.mT, -1, !1)) : (k = L(46), aL.wS(L(47), 2, 0, 16), a25(0, k, 41, 0, u.mW, u.mT, -1, !1))
	}, this.uY = function() {
		var wx = ab.wx,
			eY = a8.data;
		a25(300, wx[0] + " [" + a8.wN.ud(eY.elo[0]) + "] vs " + wx[1] + " [" + a8.wN.ud(eY.elo[1]) + "]", 65, 0, u.mN, "rgba(100,255,255,0.75)", -1, !1)
	}, this.a2d = function(k) {
		a25(200, k, 0, 0, "rgb(40,255,200)", "rgba(10,60,40,0.9)", -1, !1)
	}, this.a2e = function(a2f) {
		a25(0, L(a2f ? 48 : 49), 247, 0, u.nH, u.mT, -1, !1)
	}, this.uf = function(uc, ue, a2g) {
		var eY = a8.data,
			wx = ab.wx;
		a25(0, wx[0] + ": " + a8.wN.ud(eY.elo[0]) + " -> " + uc, 66, 0, u.mW, a2g[0], -1, !1), a25(0, wx[1] + ": " + a8.wN.ud(eY.elo[1]) + " -> " + ue, 66, 1, u.mW, a2g[1], -1, !1)
	}, this.o3 = function(player, id) {
		0 === id ? a2P(50, player) ? (a25(128, L(50, [ab.a2O[player]]), 52, player, a2T(180, 255, 180), u.mT, -1, !0), aa.ok(player, 2, 255)) : a25(384, L(51, [ab.a2O[player]]), 51, player, a2T(210, 210, 255), u.mT, -1, !0) : a2P(51, player) ? (
			a25(128, L(52, [ab.a2O[player]]), 52, player, u.mW, "rgba(60,120,10,0.9)", -1, !0), aa.ok(player, 2, 255)) : (a25(384, L(53, [ab.a2O[player]]), 50, player, u.mW, "rgba(90,90,90,0.9)", -1, !0), aa.ok(player, 2, 96))
	}, this.o7 = function(vw, target) {
		var color = a2T(210, 255, 210);
		1 < vw.length ? a25(230, L(54, [vw.length, ab.a2O[target]]), 66, target, color, u.mT, -1, !0) : a25(230, L(55, [ab.a2O[vw[0]], ab.a2O[target]]), 66, vw[0], color, u.mT, target, !0)
	}, this.a2h = function(player, target) {
		a25(230, L(56, [ab.a2O[player], ab.a2O[target]]), 66, player, u.mW, "rgba(75,65,5,0.9)", target, !0)
	}, this.a1R = function(id, fz) {
		a2N(id, fz)
	}, this.wC = function(id, player) {
		a2P(id, void 0 === player ? a8.eS : player)
	}, this.a2i = function(id) {
		for (var a6 = a1t.length - 1; 0 <= a6; a6--)
			if (a1t[a6].id === id) return a1t[a6];
		return null
	}, this.ny = function(a2j, a2k, player) {
		2 !== ab.zY[a8.eF] && (a25(200, 1 === a2j ? L(57, [ab.a2O[player]]) : L(58, [a2j, ab.a2O[player]]), 30, player, "rgb(190,255,190)", u.mT, -1, !0), a2k) && a25(30, 1 === a2k ? L(59) : L(60, [a2k]), 30, 0, u.mW, u.mT, -1, !1)
	}, this.a2m = function(a2j, player) {
		2 !== ab.zY[a8.eF] && (a2N(31, 0), 2 === ab.zY[player] || player >= a8.jc ? a25(150, 1 === a2j ? L(61, [ab.a2O[player]]) : L(62, [ab.a2O[player], a2j]), 31, player, u.mN, "rgba(205,205,205,0.9)", -1, !0) : a25(150, 1 === a2j ? L(63, [ab
			.a2O[player]
		]) : L(64, [ab.a2O[player], a2j]), 31, player, u.mN, "rgba(205,255,205,0.9)", -1, !0))
	}, this.wB = function(bl) {
		for (var eq = bb.jZ(), a6 = 2; 0 <= a6; a6--) 0 < a1x.r8[a6] && (bl || a1x.eq[a6] < eq - 220) && this.a2s(a6)
	}, this.a2s = function(id) {
		var os, eV = a1x.r8[id],
			player = a1x.vw[id];
		a1x.r8[id] = 0, 1 === eV ? (0 === id ? os = L(71, [ab.a2O[player], ab.a2O[a1x.a22[0]]]) : 1 === id ? os = L(72, [ab.a2O[player]]) : 2 === id ? os = L(73, [ab.a2O[player]]) : 3 === id && (os = L(74, [ab.a2O[player]])), a2N(7, 0), a25(a1x
			.ll[id], os, 7, a1x.a22[id], u.mW, u.mT, -1, !0)) : (os = L(0 === id ? 75 : 1 === id ? 76 : 77, [eV]), a2N(7, 0), a25(a1x.ll[id], os, 7, player, u.mW, u.mT, -1, !1))
	}, this.a2Q = function(id, gw, t0) {
		var eq = bb.jZ(),
			eV = a1x.r8[id] + 1;
		a1x.r8[id]++, a1x.vw[id] = gw, a1x.a22[id] = t0, 1 === eV && (a1x.eq[id] = eq), (1 === eV && (a8.w8 < 32 || 2 === a8.w5) || 1 < eV && (a1x.eq[id] < eq - 140 || 2 === a8.w5)) && this.a2s(id)
	}, this.iR = function() {
		for (var hT = (hT = a1t.length - a1y) <= 1 ? 1 : hT * hT, a6 = a1t.length - 1; 0 <= a6; a6--) 0 < a1t[a6].e3 && (a1t[a6].e3 -= hT, a1t[a6].e3 <= 0) && (bb.dZ = !0, a1t.splice(a6, 1));
		! function() {
			var fz, a6;
			if (128 !== a1z && !(++a1z < 128))
				for (fz = 5, a6 = ag.jd - 1; 0 <= a6; a6--) 1 === ab.zY[ag.jf[a6]] && 0 < fz-- && a25(240, L(74, [ab.a2O[ag.jf[a6]]]), 1, ag.jf[a6], u.mN, "rgba(255,255,255,0.75)", -1, !0)
		}(), this.wB(!1)
	}, this.rA = function() {
		for (var tR, ee = uN(), a6 = a1t.length - 1; 0 <= a6; a6--) tR = ee - (a6 + 1) * j6, 50 === a1t[a6].id ? (rB.drawImage(a1t[a6].canvas, au.a0 - a1t[a6].a0 - a1w - a1u, tR), rB.drawImage(a20, au.a0 - a1w - a1u, tR)) : rB.drawImage(a1t[a6]
			.canvas, au.a0 - a1t[a6].a0 - a1u, tR)
	}
}

function c6() {
	var a2u, a2v, a2w, a0, j6, font, os;

	function a30(a31) {
		return a31 < 10 ? "0" + a31 : String(a31)
	}
	this.dR = function() {
		os = L(78)
	}, this.resize = function() {
		a0 = Math.floor((r.s.v9() ? .53 : .36) * au.pD), j6 = Math.floor(.065 * a0), font = b7.pB.qS(1, Math.floor(.9 * j6)), a2w--, this.setTime()
	}, this.iR = function() {
		this.setTime() && (bb.dZ = !0)
	}, this.setTime = function() {
		var e4 = new Date,
			a2y = e4.getUTCMinutes(),
			e4 = e4.getUTCSeconds();
		return a2v = 3600 - 60 * a2y - e4, a2v %= 900, a2u = os + a30(Math.floor(a2v / 60)) + ":" + a30(a2v % 60), a2w !== (a2w = 60 * a2y + e4) && (a0 = aL.measureText(a2u, font), a0 += Math.floor(.4 * j6), !0)
	}, this.rA = function() {
		rB.lineWidth = 1 + Math.floor(j6 / 15), 7 === aV.xL() && ap.a32() + 2 * bY.gap > .5 * (au.j6 - a0) ? rB.translate(au.a0 - j6, Math.floor(ap.a32() + 2 * bY.gap + a0)) : rB.translate(au.a0 - j6, Math.floor(.5 * (au.j6 + a0))), rB.rotate(-
			Math.PI / 2), rB.fillStyle = u.mW, rB.fillRect(0, 0, a0, j6), rB.strokeStyle = u.mN, rB.strokeRect(0, 0, a0, j6 + 10), rB.fillStyle = u.mN, rB.font = font, b7.pB.textBaseline(rB, 1), b7.pB.textAlign(rB, 1), rB.fillText(a2u, Math
			.floor(a0 / 2), Math.floor(.59 * j6)), rB.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function c7() {
	var a1t, a33, a1f, j6, a34;

	function a36(a6) {
		var a38 = !0,
			hO = u.mW,
			a0 = (a1t[a6].ik === a8.eS ? a1t[a6].uR.fillStyle = u.mg : (aX.a39(a1t[a6].ik), a1t[a6].uR.fillStyle = b7.color.mQ(bK.f6[0], bK.f6[1], bK.f6[2], .87), 400 < b7.pL.yi(bK.f6, 0, 2) && (a38 = !1, hO = u.mN)), a1t[a6].canvas.width),
			qU = (a1t[a6].uR.clearRect(0, 0, a0, j6), a1t[a6].uR.fillRect(0, 0, a0, j6), a1t[a6].uR.fillStyle = hO, ! function(uR, a0, j6) {
				uR.fillRect(0, 0, a0, 1), uR.fillRect(0, j6 - 1, a0, 1), uR.fillRect(0, 0, 1, j6), uR.fillRect(a0 - 1, 0, 1, j6)
			}(a1t[a6].uR, a0, j6), a33 + 2 * j6 < a0 && (a1t[a6].uR.fillRect(a0 - a33 - j6, 0, 1, j6), a1t[a6].uR.fillText(ab.a2O[a1t[a6].ik], Math.floor((a0 - a33) / 2), Math.floor(.57 * j6))), 0 !== a1t[a6].id ? 0 : j6);
		a1t[a6].uR.fillText(b7.wv.a05(a1t[a6].il), Math.floor(a0 - a33 / 2 - qU), Math.floor(.57 * j6)),
			function(a6, a0, qU, a38) {
				a1t[a6].uR.fillStyle = a38 ? u.mY : u.mU;
				a38 = Math.floor(a33 * a1t[a6].il / a1t[a6].a3F);
				a1t[a6].uR.fillRect(Math.floor(a0 - a33 - qU), j6 - a34, a38, a34)
			}(a6, a0, qU, a38), 0 === a1t[a6].id ? (a3C(a6, a0, a38, hO), function(a6, a0, a38) {
				a1t[a6].uR.strokeStyle = a38 ? u.ml : u.mu, a1t[a6].uR.fillRect(j6, 0, 1, j6);
				a38 = a0 - j6;
				a1t[a6].uR.beginPath(), a1t[a6].uR.moveTo(Math.floor(.3 * j6 + a38), Math.floor(j6 / 2)), a1t[a6].uR.lineTo(Math.floor(j6 - .3 * j6 + 0 + a38), Math.floor(j6 / 2)), a1t[a6].uR.stroke(), a1t[a6].uR.beginPath(), a1t[a6].uR.moveTo(
					Math.floor(j6 / 2 + a38), Math.floor(.3 * j6)), a1t[a6].uR.lineTo(Math.floor(j6 / 2 + a38), Math.floor(j6 - .3 * j6 + 0)), a1t[a6].uR.stroke()
			}(a6, a0, a38)) : a3C(a6, 2 * j6, a38, hO)
	}

	function a3C(a6, a0, a38, hO) {
		a1t[a6].uR.strokeStyle = a1t[a6].a3G ? u.me : a38 ? u.my : u.mz, a1t[a6].uR.fillStyle = hO, a1t[a6].uR.fillRect(a0 - j6, 0, 1, j6), a1t[a6].uR.lineWidth = Math.max(Math.floor(j6 / 12), 3), a1t[a6].uR.lineCap = "round";
		a38 = .35;
		a0 = j6 + 1, a1t[a6].uR.beginPath(), a1t[a6].uR.moveTo(Math.floor(a0 - a38 * j6 + 0), Math.floor(a38 * j6)), a1t[a6].uR.lineTo(Math.floor(a0 - j6 + a38 * j6), Math.floor(j6 - a38 * j6 + 0)), a1t[a6].uR.stroke(), a1t[a6].uR.beginPath(), a1t[
			a6].uR.moveTo(Math.floor(a0 - j6 + a38 * j6), Math.floor(a38 * j6)), a1t[a6].uR.lineTo(Math.floor(a0 - a38 * j6 + 0), Math.floor(j6 - a38 * j6 + 0)), a1t[a6].uR.stroke()
	}

	function a3Q(eV) {
		for (var il, a6 = eV - 1; 0 <= a6; a6--) il = aY.fj(a8.eF, a6), a1t[a6].il !== il && (a1t[a6].il = il, a1t[a6].a3F = il > a1t[a6].a3F ? il : a1t[a6].a3F, a1t[a6].a37 = !0)
	}

	function a35(a3S) {
		a3S.canvas = document.createElement("canvas"), bO.sl.font = a1f;
		var a0 = a33;
		a3S.ik < a8.eS && 0 === a3S.id && (a0 += Math.floor(bO.sl.measureText(ab.a2O[a3S.ik] + "000").width)), a0 += j6, 0 === a3S.id && (a0 += j6), a3S.canvas.width = a0, a3S.canvas.height = j6, a3S.uR = a3S.canvas.getContext("2d", {
			alpha: !0
		}), a3S.uR.font = a1f, b7.pB.textBaseline(a3S.uR, 1), b7.pB.textAlign(a3S.uR, 1)
	}

	function a3M(a6) {
		return aP.a3U() ? au.a0 - a1t[a6].canvas.width - bY.gap : aP.ec
	}

	function a3N(a6) {
		return Math.floor(2 * bY.gap + (aP.a3U() ? aR.j6 + bY.gap : 0) + aP.j6 + a6 * (1.3 * j6))
	}
	this.dR = function() {
		a1t = [], this.resize()
	}, this.resize = function() {
		a1f = aI.a1f, j6 = aI.fontSize + 5, j6 = Math.floor(1.25 * j6), r.s.v9() && (j6 = Math.floor(1.25 * j6)), a34 = Math.floor(.15 * j6), bO.sl.font = a1f, a33 = Math.floor(bO.sl.measureText("02 000 000 0000").width);
		for (var a6 = a1t.length - 1; 0 <= a6; a6--) a35(a1t[a6]), a36(a6)
	}, this.lF = function() {
		for (var a6 = a1t.length - 1; 0 <= a6; a6--) a1t[a6].a37 && (a1t[a6].a37 = !1, a36(a6))
	}, this.gk = function(kh, ee) {
		if (2 !== a8.w5 && 0 !== ab.lT[a8.eF] && !a8.gg && aX.vy(a8.eF))
			for (var a3H, a3I, a3J, a3K = r.s.v9() ? j6 : 0, a3L = r.s.v9() ? Math.floor(.15 * j6) : 0, a6 = a1t.length - 1; 0 <= a6; a6--)
				if (a3H = a3M(a6), a3I = a3N(a6), a3J = a1t[a6].canvas.width, a3I - a3L <= ee && ee <= a3I + j6 + a3L) {
					if (a3H - a3K <= kh && kh <= a3H + j6 + a3K) return a1t[a6].a3G || (a1t[a6].a37 = !0, a1t[a6].a3G = !0, 0 === a1t[a6].id && b5.gt.ni(a1t[a6].ik)), !0;
					if (0 === a1t[a6].id && a3H + a3J - j6 - a3K <= kh && kh <= a3H + a3J + a3K) return b5.gt.h4(aM.gy(), a1t[a6].ik), !0
				} return !1
	}, this.iR = function() {
		var eV;
		0 !== ab.lT[a8.eF] && (aX.vy(a8.eF) || a8.gg) && (function(eV) {
			if (a1t.length !== eV) return 1;
			for (var a6 = eV - 1; 0 <= a6; a6--)
				if (a1t[a6].id !== aY.fd(a8.eF, a6) || a1t[a6].ik !== aY.fi(a8.eF, a6)) return 1;
			return
		}(eV = aY.fc(a8.eF)) && function(eV) {
			var a6, id, ik, ep, il, a26 = [];
			loop: for (a6 = 0; a6 < eV; a6++) {
				for (id = aY.fd(a8.eF, a6), ik = aY.fi(a8.eF, a6), ep = 0; ep < a1t.length; ep++)
					if (a1t[ep].id === id && a1t[ep].ik === ik) {
						a26.push(a1t.splice(ep, 1)[0]);
						continue loop
					} il = aY.fj(a8.eF, a6), a35(il = {
					ik: ik,
					il: il,
					a3F: il,
					id: id,
					a37: !0,
					a3G: !1,
					canvas: null,
					uR: null
				}), a26.push(il)
			}
			a1t = a26
		}(eV), a3Q(eV))
	}, this.a3T = function(g4) {
		for (var eV = Math.min(a1t.length, aY.fc(a8.eF)), a6 = 0; a6 < eV; a6++)
			if (a1t[a6].ik === g4) return void(a1t = [])
	}, this.rA = function() {
		if (0 !== ab.lT[a8.eF] && (aX.vy(a8.eF) || a8.gg))
			for (var a6 = a1t.length - 1; 0 <= a6; a6--) rB.drawImage(a1t[a6].canvas, a3M(a6), a3N(a6))
	}
}

function c8() {
	var a1t, jk, a3V, a3W, j6, a1f, fontSize, a3X, a3Y, a3Z, a3a, canvas, uR, lg, a3b;

	function rL(a6) {
		return L(0 === a6 ? 79 : 1 === a6 ? 80 : 2 === a6 ? 81 : 82)
	}

	function a3i() {
		rB.drawImage(canvas, bY.gap + (a8.ic ? bY.gap + bd.a3j() : 0), a3k + 2 * bY.gap)
	}

	function a3c() {
		canvas.width = a1t[0].width + a3Z, canvas.height = j6 + a3Z, (uR = canvas.getContext("2d", {
				alpha: !0
			})).clearRect(0, 0, a1t[0].width + a3Z, j6 + a3Z), uR.translate(Math.floor(a3Z / 2), Math.floor(a3Z / 2)), uR.lineWidth = a3Z, uR.fillStyle = 1 === a1t[0].a3h ? u.mb : u.mT, a3l(), uR.fill(), uR.strokeStyle = 1 === a1t[0].a3h ? u.mN : u
			.mW, a3l(), uR.stroke(), b7.pB.textAlign(uR, 1), b7.pB.textBaseline(uR, 1), uR.fillStyle = 1 === a1t[0].a3h ? u.mN : u.mW, uR.font = a1f[0], uR.fillText(rL(a1t[0].a3g), Math.floor(a1t[0].width / 2), Math.floor(.72 * a3X[0] * j6)), uR
			.font = a1f[1], uR.fillText(a1t[0].os, Math.floor(a1t[0].width / 2), Math.floor((a3X[0] + .48 * a3X[1]) * j6))
	}

	function a3l() {
		uR.beginPath(), uR.moveTo(a3a, 0), uR.lineTo(a1t[0].width - a3a, 0), uR.lineTo(a1t[0].width, a3a), uR.lineTo(a1t[0].width, j6 - a3a), uR.lineTo(a1t[0].width - a3a, j6), uR.lineTo(a3a, j6), uR.lineTo(0, j6 - a3a), uR.lineTo(0, a3a), uR
			.closePath()
	}
	this.dR = function() {
		jk = 4, a3V = a3W = lg = 0, a1t = [], a1f = new Array(2), fontSize = new Array(2), (a3X = new Array(2))[0] = .3, a3X[1] = .7, a3Y = new Array(4), canvas = document.createElement("canvas"), a3b = bb.e3 + 2e3, this.resize()
	}, this.resize = function() {
		var a6, a0;
		for (j6 = Math.floor((r.s.v9() ? .0725 : .058) * au.pD), fontSize[0] = Math.floor(.85 * a3X[0] * j6), fontSize[1] = Math.floor(.85 * a3X[1] * j6), a1f[0] = b7.pB.qS(1, fontSize[0]), a1f[1] = b7.pB.qS(1, fontSize[1]), a6 = a3Y.length -
			1; 0 <= a6; a6--) a3Y[a6] = this.measureText(rL(a6) + "000", a1f[0]);
		if (a3Z = Math.floor(1 + .05 * j6), a3a = Math.floor(.2 * j6), 0 < a1t.length) {
			for (a6 = a1t.length - 1; 0 <= a6; a6--) a0 = this.measureText(a1t[a6].os + "00", a1f[1]), a1t[a6].width = a0 < a3Y[a6] ? a3Y[a6] : a0;
			a3c()
		}
	}, this.iR = function() {
		0 !== jk && (4 === jk ? bb.e3 > a3b && (jk = 0, 1 === a8.w5) && aL.wS(bO.sf.sg[bO.eB].name, 3, 1, 9) : (1 === jk ? (0 === a3V && (a3c(), a3V = 1e-4), 1 <= (a3V += .002 * (bb.e3 - lg)) && (a3W = 0, jk = 2, a3V = 1), bb.dZ = !0) : 2 ===
			jk ? ((a3W += (bb.e3 - lg) / 1e3) > a1t[0].ll || 1 < a3W && 1 < a1t.length) && (jk = 3) : 3 === jk && ((a3V -= .002 * (bb.e3 - lg)) <= 0 && (a3V = 0, a1t.shift(), jk = 0 < a1t.length ? 1 : 0), bb.dZ = !0), lg = bb.e3))
	}, this.measureText = function(os, a1f) {
		return rB.font = a1f, Math.floor(rB.measureText(os).width)
	}, this.ih = function(a3f, a6) {
		this.wS(ab.a2O[a3f], a6, 1, 0 === a6 ? 3 : 7)
	}, this.wS = function(os, a3g, a3h, ll) {
		var a0;
		os.length && (a0 = (a0 = this.measureText(os + "00", a1f[1])) < a3Y[a3g] ? a3Y[a3g] : a0, a1t.push({
			os: os,
			width: a0,
			a3g: a3g,
			a3h: a3h,
			ll: ll
		}), 0 === jk) && (a3V = 0, jk = 1, lg = bb.e3)
	}, this.rA = function() {
		0 !== jk && 0 !== a3V && (a3V < 1 ? (rB.globalAlpha = a3V, a3i(), rB.globalAlpha = 1) : a3i())
	}
}

function ci() {
	var j6, canvas, uR, a3m, a3n, a3o, a3p, a37, a3q, a3r, a3s, a3t, a2f = !1,
		z2 = (this.uj = !1, this.a0 = 0, new Array(2));

	function lG() {
		var a0 = ar.a0,
			kM = (a37 = !1, uQ(uR, a0, j6), Math.floor(a0 / 2));
		1 === a3m ? (uR.fillStyle = u.mn, uR.fillRect(kM, 0, kM, j6)) : -1 === a3m && (uR.fillStyle = u.n0, uR.fillRect(0, 0, kM, j6)), uS(uR, a0, j6, 2);
		var kM = (kM = Math.floor(.25 * j6)) < 2 ? 2 : kM,
			a2o = (uR.fillStyle = u.mc, Math.floor((j6 - 4) * a3n[1] / a3o[1]));
		0 < a2o && uR.fillRect(2, j6 - 2 - a2o, kM, a2o), 0 < (a2o = Math.floor((j6 - 4) * a3n[0] / a3o[0])) && uR.fillRect(a0 - 2 - kM, j6 - 2 - a2o, kM, a2o);
		kM = (kM = Math.floor(j6 / 8)) < 2 ? 2 : kM, uU(uR, Math.floor(.4 * j6), 0, j6, kM, .5, !1), uU(uR, Math.floor(a0 - 1.4 * j6), 0, j6, kM, .5, !0), a2o = 1.1 * j6 / z2[0].width;
		uR.imageSmoothingEnabled = !0, uR.setTransform(a2o, 0, 0, a2o, (a0 - a2o * z2[0].width) / 2, -.05 * j6), uR.drawImage(z2[+a2f], 0, 0), uR.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a3u() {
		a3s = bb.jZ(), a37 = !0, a3q = a3m = 0, a3p = [], ar.uj = !1, aI.wC(247), a3n[0] = a3n[1] = 0, aI.a0Q(673)
	}

	function uN() {
		return aM.a2H(aI.a2D()) ? aM.ee - j6 - bY.gap : b8.a2H(aI.a2G()) ? b8.uN() - j6 - bY.gap : au.j6 - j6 - bg.a12() * bY.gap
	}
	this.dS = function() {
		for (var a6 = 0; a6 < 2; a6++) z2[a6] = b7.canvas.ux(aW.get(3), 8 - a6, u.nP), z2[a6] = b7.canvas.z4(z2[a6])
	}, this.dR = function() {
		a3s = -140, a3r = 0, a3t = -1, this.uj = !1, a37 = a2f = !1, a3n = [a3m = a3q = 0, 0], a3o = [1, 1], a3p = [], this.resize()
	}, this.resize = function() {
		j6 = aM.j6, this.a0 = 4 * j6, (canvas = document.createElement("canvas")).width = this.a0, canvas.height = j6, uR = canvas.getContext("2d", {
			alpha: !0
		}), lG()
	}, this.lF = function() {
		a37 && lG()
	}, this.gk = function(ec, ee) {
		var lw;
		return !!this.uj && !(ec < au.a0 - this.a0 - bY.gap || ee < (lw = uN()) || lw + j6 < ee || (a8.gg || b5.gt.no(ec > au.a0 - bY.gap - this.a0 / 2 ? 1 : 0), 0))
	}, this.iR = function() {
		if (0 < a3r) 0 === --a3r && a3u();
		else if (this.uj) 180 == --a3q && 3 * a3n[0] < a3o[0] ? a3u() : a3n[0] >= a3o[0] ? a2f ? bN.vj.w0() : bN.vj.w4() : a3n[1] >= a3o[1] ? a3r = 4 : a3q <= 0 && a3u();
		else if (function() {
				if (0 <= a3t) return 1;
				return
			}()) {
			a2f = ac.a3x(), aI.wT(250, L(83, [ab.a2O[a3t]]), 673, a3t, u.mW, u.mT, -1, !0), a3t = -1, aI.a0Q(257), aI.a2e(a2f), this.uj = !0, a37 = !0, a3q = 360;
			for (var ey, e4 = 0, a6 = ag.jd - 1; 0 <= a6; a6--) aX.vy(ag.jf[a6]) && (e4 += ab.gK[ag.jf[a6]]);
			a2f ? a3o[0] = Math.max(bH.ex(3 * e4, 4), 1) : a8.ic ? 9 === a8.jw && 8 === bc.k2[bd.kq()] ? a3o[0] = Math.max(e4, 1) : (ey = bH.ex(100 * bd.wf(), a8.jM), ey = bH.oj(200 - 2 * ey, 50, 100), ey = bH.ex(ey * e4, 100), a3o[0] = Math.max(
				ey, 1)) : a3o[0] = Math.max(bH.ex(3 * e4, 5), 1), a3o[1] = Math.max(e4 - a3o[0], 1)
		}
	}, this.w6 = function() {
		this.uj && a3n[0] < a3o[0] && a3u()
	}, this.ol = function(player, a40) {
		var a6;
		if (this.uj) {
			for (a6 = a3p.length - 1; 0 <= a6; a6--)
				if (a3p[a6] === player) return;
			var a41 = L(a40 ? 84 : 85, [ab.a2O[player]]);
			aI.wT(450, a41, 257, player, a40 ? u.ml : u.mx, u.mT, -1, !0), a3p.push(player), a37 = !0, a41 = a8.jy ? a3o[0] : ab.gK[player], a40 ? a3n[0] += a41 : a3n[1] += a41, player === a8.eF && (a3m = a40 ? 1 : -1)
		}
	}, this.rA = function() {
		var ee;
		this.uj && (ee = uN(), rB.drawImage(canvas, au.a0 - this.a0 - bY.gap, ee))
	}, this.om = function(player) {
		if (!a8.jy) {
			if (bb.jZ() < a3s + 140) return !1;
			if (bb.jZ() < 535) return !1
		}
		return 0 === a3q && !!b7.fs.gi(1) && !(!b7.fs.gj(player) || 10 <= jN[player] && !b7.fs.zr(player, 9))
	}, this.nt = function(player) {
		a3t = player
	}
}

function c9() {
	var a0, ec, a42, canvas, uR, uj, ht, a0H, a1f, a37, a43 = 11 / 12;

	function a45() {
		var a3E = Math.floor(ht * (a0 - 2 * a42)),
			a48 = 1 + Math.floor(.0625 * aM.j6),
			a49 = 1 + Math.floor(.3 * aM.j6),
			a4A = Math.floor(.55 * aM.j6);
		uR.clearRect(0, 0, a0, aM.j6), uR.fillStyle = u.mS, uR.fillRect(0, 0, a42, aM.j6), uR.fillRect(a42 + a3E, 0, a0 - a42 - a3E, aM.j6), uR.fillStyle = ht < 1 / 3 ? "rgba(" + Math.floor(3 * ht * 130) + ",130,0,0.85)" : ht < 2 / 3 ? "rgba(130," +
			(130 - Math.floor(3 * (ht - 1 / 3) * 130)) + ",0,0.85)" : "rgba(130,0," + Math.floor(3 * (ht - 2 / 3) * 130) + ",0.85)", uR.fillRect(a42, 0, a3E, aM.j6), uR.fillStyle = u.mW, uR.fillRect(0, 0, a0, 1), uR.fillRect(0, aM.j6 - 1, a0, 1), uR
			.fillRect(0, 0, 1, aM.j6), uR.fillRect(a42, 0, 1, aM.j6), uR.fillRect(a42 + a3E, 0, 1, aM.j6), uR.fillRect(a0 - a42, 0, 1, aM.j6), uR.fillRect(a0 - 1, 0, 1, aM.j6), uR.fillRect(Math.floor(.25 * aM.j6) + a49, Math.floor((aM.j6 - a48) / 2),
				aM.j6 - 2 * a49, a48), uR.fillRect(Math.floor(a0 - 1.25 * aM.j6) + a49, Math.floor((aM.j6 - a48) / 2), aM.j6 - 2 * a49 - a49 % 2, a48), uR.fillRect(Math.floor(a0 - 1.25 * aM.j6) + Math.floor((aM.j6 - a48) / 2), a49, a48, aM.j6 - 2 *
				a49 - a49 % 2), a0H = b7.fs.hs(a8.eF, aM.gy()), uR.fillText(b7.wv.a05(a0H) + " (" + b7.wv.a0A(100 * ht, +(ht < .1)) + ")", Math.floor(.5 * a0), a4A)
	}
	this.setAbsolutePercentage = function(newPercentage) {
		ht = newPercentage;
	};
	__fx.keybindFunctions.setAbsolute = this.setAbsolutePercentage;
	__fx.keybindFunctions.setRelative = (arg1) => aM.yF(arg1);

	function a4F(yd) {
		return !(1 < yd && 1 === ht || (1 < yd && yd * ht - ht < 1 / 1024 ? yd = (ht + 1 / 1024) / ht : yd < 1 && ht - yd * ht < 1 / 1024 && (yd = (ht - 1 / 1024) / ht), ht = bH.oj(ht * yd, 1 / 1024, 1), a45(), 0))
	}

	function a4G(kh) {
		return ht !== (ht = bH.oj((kh - ec - a42) / (a0 - 2 * a42), 1 / 1024, 1)) && (a45(), !0)
	}
	this.ee = 0, this.gl = !1, this.dR = function() {
		uj = !a8.gs && !a8.gg, a37 = !1, ht = .5, a0H = 0, this.gl = !1, this.resize()
	}, this.resize = function() {
		r.s.v9() && au.a0 < .8 * au.j6 ? (this.j6 = Math.floor(.066 * au.pD), a0 = au.a0 - 4 * bY.gap - this.j6) : (a0 = Math.floor((r.s.v9() ? .65 : .389) * au.pD), a0 += 12 - a0 % 12, this.j6 = Math.floor(a0 / 12)), a42 = Math.floor(3 * this
			.j6 / 2), a1f = b7.pB.qS(1, Math.floor(.5 * this.j6)), (canvas = document.createElement("canvas")).width = a0, canvas.height = this.j6, (uR = canvas.getContext("2d", {
			alpha: !0
		})).font = a1f, b7.pB.textBaseline(uR, 1), b7.pB.textAlign(uR, 1), this.a44(), a45()
	}, this.a44 = function() {
		ec = r.s.v9() && au.a0 < .8 * au.j6 ? this.j6 + 3 * bY.gap : Math.floor((au.a0 - a0) / 2), this.ee = au.j6 - this.j6 - bg.a12() * bY.gap
	}, this.lF = function() {
		a37 && (a37 = !1, a45())
	}, this.uj = function() {
		return !(!uj || aH.gh && ec < Math.floor(bY.gap + 5.5 * this.j6))
	}, this.a2H = function(a4B) {
		return !!this.uj() && ec + a0 > au.a0 - a4B - bY.gap
	}, this.a0O = function() {
		uj = !a8.gg
	}, this.a3u = function() {
		uj = !1
	}, this.gy = function() {
		return bH.oj(Math.floor(1024 * ht + .5) - 1, 0, 1023)
	}, this.yC = function(kh, ki) {
		return this.uj() && ec < kh && kh < ec + a0 && ki > this.ee
	}, this.gk = function(kh, ki) {
		return !!this.uj() && !!aM.yC(kh, ki) && (aN.m0 = !1, function(wc, kh, ki) {
			if (function(kh, ki) {
					return ec < kh && kh < ec + a42 && ki > aM.ee
				}(kh, ki)) return a4F(a43);
			if (function(kh, ki) {
					return ec + a0 - a42 < kh && kh < ec + a0 && ki > aM.ee
				}(kh, ki)) return a4F(1 / a43);
			return wc.gl = !0, a4G(kh)
		}(this, kh, ki) && (bb.dZ = !0), !0)
	}, this.yF = function(m7) {
		0 !== a8.w5 && this.uj() && a4F(m7) && (bb.dZ = !0)
	}, this.xk = function(deltaY) {
		var m7;
		return !(0 === deltaY || !this.uj()) && a4F(m7 = 0 < deltaY ? (m7 = 400 / (400 + deltaY)) < a43 ? a43 : m7 : 1 / a43 < (m7 = (400 - deltaY) / 400) ? 1 / a43 : m7)
	}, this.xh = function(kh) {
		return !!this.gl && a4G(kh)
	}, this.y8 = function() {
		this.gl = !1
	}, this.iR = function() {
		this.uj() && a0H !== b7.fs.hs(a8.eF, this.gy()) && (a37 = !0)
	}, this.rA = function() {
		this.uj() && rB.drawImage(canvas, ec, this.ee)
	}
}

function cs() {
	var canvas, uR, a4H, font, a4I = 0,
		a4J = !1,
		a4K = [10, 5, 3, 2, 1.5, 1, .75, .5, .25],
		a4L = 5;

	function a4R() {
		if (a4J) {
			var a6, eV = a4K.length,
				a4A = Math.floor(.5 * a4H.j6),
				j6 = eV * a4A,
				ec = Math.floor(Math.floor(a4H.ec) + .3 * a4H.a0 - .5),
				ee = Math.floor(Math.floor(a4H.ee) - j6),
				a0 = Math.floor(.4 * a4H.a0 + 2.5);
			for (rB.fillStyle = u.mS, rB.fillRect(ec, ee, a0, j6), rB.fillStyle = u.mr, rB.fillRect(ec, ee + a4L * a4A, a0, a4A), rB.fillStyle = u.mW, rB.fillRect(ec, ee, 2, j6), rB.fillRect(ec, ee, a0, 2), rB.fillRect(ec + a0 - 2, ee, 2, j6), a6 =
				1; a6 < eV; a6++) rB.fillRect(ec, ee + a6 * a4A, a0, 2);
			for (rB.fillStyle = u.mW, b7.pB.textAlign(rB, 1), b7.pB.textBaseline(rB, 1), rB.font = b7.pB.qS(0, .6 * a4A), ec += .5 * a0, a6 = 0; a6 < eV; a6++) rB.fillText(a4Z(a6), ec, ee + (a6 + .6) * a4A)
		}
		rB.drawImage(canvas, Math.floor(a4H.ec), Math.floor(a4H.ee))
	}

	function lG(wc) {
		var ec, lv, lw, a4A;
		uR.clearRect(0, 0, Math.floor(a4H.a0), Math.floor(a4H.j6)), uR.fillStyle = u.mS, uR.fillRect(0, 0, Math.floor(a4H.a0), Math.floor(a4H.j6)), a8.ly && (uR.fillStyle = u.mr, uR.fillRect(0, 0, Math.floor(.3 * a4H.a0), Math.floor(a4H.j6))), uR
			.fillStyle = u.mW, uR.fillText("Hide UI", .15 * a4H.a0, .5 * a4H.j6), uR.fillRect(Math.floor(.3 * a4H.a0 - .5), 0, 2, Math.floor(a4H.j6)), ec = .5 * a4H.a0, uR.fillText("Replay Speed", ec, .31 * a4H.j6), uR.fillText(a4Z(a4L), ec, .69 *
				a4H.j6), uR.fillRect(Math.floor(.7 * a4H.a0 - .5), 0, 2, Math.floor(a4H.j6)), wc.a0u ? (ec = Math.floor(.02 * a4H.a0), wc = Math.floor(.025 * a4H.a0), lv = Math.floor(.85 * a4H.a0 - ec - .5 * wc), lw = Math.floor(.25 * a4H.j6), a4A =
				Math.floor(a4H.j6) - 2 * lw, uR.fillRect(lv, lw, ec, a4A), uR.fillRect(lv + ec + wc, lw, ec, a4A)) : function() {
				var a0 = Math.floor(.46 * a4H.j6),
					j6 = Math.floor(.23 * a4H.j6),
					ec = Math.floor(.85 * a4H.a0 - .5 * a0 + a0 / 12),
					ee = Math.floor(.5 * a4H.j6 - j6);
				uR.beginPath(), uR.moveTo(ec, ee), uR.lineTo(ec + a0, ee + j6), uR.lineTo(ec, ee + (j6 << 1)), uR.fill()
			}(), uR.fillRect(0, 0, Math.floor(a4H.a0), 2), uR.fillRect(0, 0, 2, Math.floor(a4H.j6)), uR.fillRect(0, Math.floor(a4H.j6) - 2, Math.floor(a4H.a0), 2), uR.fillRect(Math.floor(a4H.a0 - 2), 0, 2, Math.floor(a4H.j6))
	}

	function a4Z(a6) {
		return 5 === a6 ? "Normal" : "" + a4K[a6]
	}
	this.a0u = !1, this.dR = function() {
		a8.gg && (a4L = 5, this.a0u = !1, a4J = !1, a4H = new pj([.3, .3 / 6], [.5, 1]), this.resize())
	}, this.a4M = function() {
		return a4K[a4L]
	}, this.uN = function() {
		return a4H.ee
	}, this.a2H = function(a4B) {
		return !!a8.gg && a4H.ec + a4H.a0 > au.a0 - a4B - bY.gap
	}, this.resize = function() {
		a8.gg && (a4H.resize(), a4H.ee -= (bg.a12() - 1) * bY.gap, font = b7.pB.qS(0, .3 * a4H.j6), (canvas = document.createElement("canvas")).width = Math.floor(a4H.a0), canvas.height = Math.floor(a4H.j6), (uR = canvas.getContext("2d", {
			alpha: !0
		})).font = font, b7.pB.textAlign(uR, 1), b7.pB.textBaseline(uR, 1), lG(this))
	}, this.yI = function(a4N) {
		0 === a8.w5 || n.uj() || a4N !== a8.ly && (a8.ly = a4N, bd.resize(), bb.dZ = !0, a8.gg) && (a4I = bb.e3 + 2e3, lG(this))
	}, this.gk = function(ec, ee) {
		if (!a8.gg) return !1;
		if (ec < a4H.ec || ee < a4H.ee || ec > a4H.ec + a4H.a0) return a4J && function(wc, ec, ee) {
			var eV = a4K.length,
				a4A = Math.floor(.5 * a4H.j6),
				j6 = eV * a4A,
				lv = Math.floor(Math.floor(a4H.ec) + .3 * a4H.a0 - .5),
				j6 = Math.floor(Math.floor(a4H.ee) - j6),
				a0 = Math.floor(.4 * a4H.a0 + 2.5);
			return a4J = !1, bb.dZ = !0, ec < lv || lv + a0 < ec || ee < j6 || (a4L = a4Q(0, Math.floor((ee - j6) / a4A), eV - 1), lG(wc)), !0
		}(this, ec, ee);
		if ((ec -= a4H.ec) < .3 * a4H.a0) a4J = !1, this.yI(!a8.ly);
		else {
			if (ec < .7 * a4H.a0) return a4J = !a4J, bb.dZ = !0;
			this.yK(!1)
		}
		return !0
	}, this.yK = function(a4P) {
		2 === a8.w5 ? (this.yI(!1), n.o(3)) : (a4J = !1, this.a0u = !this.a0u, this.a0u ? (aH.gh && aH.yJ(), r.s.setState(1)) : a4P || aH.a1l(), bb.dZ = !0, lG(this))
	}, this.yL = function() {
		this.a0u = !1, aH.a1l(), bb.dZ = !0, lG(this)
	}, this.y0 = function(ec, ee) {
		return !!a8.ly && (0 <= aH.gk(ec, ee) || (a8.gg ? ((bb.e3 > a4I || !this.gk(ec, ee)) && aN.gk(ec, ee), bb.dZ = !0, a4I = bb.e3 + 2e3) : aN.gk(ec, ee)), !0)
	}, this.iR = function() {
		a8.gg && a8.ly && bb.e3 > a4I - 1e3 && bb.e3 < a4I && (bb.dZ = !0)
	}, this.wD = function() {
		a8.gg && (this.a0u = !1, bb.dZ = !0, lG(this))
	}, this.rA = function() {
		if (a8.gg) {
			if (a8.ly) {
				if (bb.e3 > a4I) return;
				if (bb.e3 > a4I - 1e3) return rB.globalAlpha = a4Q(0, (1e3 - (bb.e3 - (a4I - 1e3))) / 1e3, 1), a4R(), void(rB.globalAlpha = 1)
			}
			a4R()
		}
	}
}

function cA() {
	var a4a, a4b, a0, ec, ee, a4c, a4d;
	this.dR = function() {
		a4a = new Array(2), a4b = new Array(2), this.m0 = !1, a4d = a4c = hw = hu = 0, hv = 1, this.resize()
	}, this.resize = function() {
		a0 = (a0 = Math.floor((r.s.v9() ? .072 : .0502) * au.pD)) < 8 ? 8 : a0;
		for (var a6 = 1; 0 <= a6; a6--) a4a[a6] = document.createElement("canvas"), a4a[a6].width = a0, a4a[a6].height = a0, a4b[a6] = a4a[a6].getContext("2d", {
			alpha: !0
		});
		this.a44(),
			function() {
				for (var a4s = Math.floor(1 + a0 / 20), a6 = 1; 0 <= a6; a6--) a4b[a6].clearRect(0, 0, a0, a0), a4b[a6].fillStyle = u.mP, a4b[a6].beginPath(), a4b[a6].arc(a0 / 2, a0 / 2, a0 / 2 - a4s, 0, 2 * Math.PI), a4b[a6].fill(), a4b[a6]
					.lineWidth = a4s, a4b[a6].fillStyle = u.mW, a4b[a6].strokeStyle = u.mW, a4b[a6].beginPath(), a4b[a6].arc(a0 / 2, a0 / 2, a0 / 2 - a4s, 0, 2 * Math.PI), a4b[a6].stroke(), uU(a4b[a6], 0, 0, a0, a4s, .3, 0 === a6)
			}()
	}, this.uM = function() {
		return -hu / hv
	}, this.uN = function() {
		return -hw / hv
	}, this.mB = function(a4h, hc) {
		hu = hv * a4h - hc
	}, this.mC = function(a4i, hd) {
		hw = hv * a4i - hd
	}, this.gk = function(a4g, a2I) {
		return a8.ly || ! function(a4g, a2I) {
			return Math.pow(a4g - (ec + a0 / 2), 2) + Math.pow(a2I - (ee + a0 / 2), 2) < a0 * a0 / 4 || Math.pow(a4g - (ec + a0 / 2), 2) + Math.pow(a2I - (ee + 2 * a0), 2) < a0 * a0 / 4
		}(a4g, a2I) || bf.dk.data[8].value ? (aC.mE() && (this.m0 = !0, a4c = a4g, a4d = a2I), !1) : a2I < ee + 1.25 * a0 ? this.xk(Math.floor(au.a0 / 2), Math.floor(au.j6 / 2), -200) : this.xk(Math.floor(au.a0 / 2), Math.floor(au.j6 / 2),
			200)
	}, this.xh = function(a4g, a2I) {
		var a4j, a4k, hf, hi;
		return !aC.mE() || (a4j = hu, a4k = hw, hu += hf = a4c - a4g, hw += hi = a4d - a2I, aa.xh(hf, hi), this.a4l(), a4c = a4g, a4d = a2I, a4j !== hu) || a4k !== hw
	}, this.xk = function(kh, ki, deltaY) {
		var m7;
		if (aC.mE()) {
			if (0 < deltaY) m7 = (m7 = 500 / (500 + deltaY)) < .5 ? .5 : m7;
			else {
				if (!(deltaY < 0)) return !1;
				m7 = 2 < (m7 = (500 - deltaY) / 500) ? 2 : m7
			}
			this.a4m(kh, ki, m7), bb.dZ = !0
		}
		return !0
	}, this.a4m = function(ec, ee, e9) {
		var yd;
		e9 = yd = (yd = 1024 < (yd = e9) * hv ? 1024 / hv : yd) * hv < .125 ? .125 / hv : yd, aa.zoom(e9, ec, ee),
			function(yd, kh, ki) {
				hv *= yd, hu = (hu + kh) * yd - kh, hw = (hw + ki) * yd - ki, aN.a4l()
			}(e9, ec, ee)
	}, this.a4l = function() {
		var a4p = au.a0 / 16,
			hM = 0,
			a4q = au.j6 / 16,
			hN = 0;
		hu < -au.a0 + a4p && (hM = -au.a0 + a4p - hu), hu > hv * bO.eg - a4p && (hM = hv * bO.eg - a4p - hu), hw < -au.j6 + a4q && (hN = -au.j6 + a4q - hw), hw > hv * bO.eh - a4q && (hN = hv * bO.eh - a4q - hw), hu += hM, hw += hN, bW.mD(), aa
			.a4r(hM, hN)
	}, this.a44 = function() {
		ec = au.a0 - a0 - bY.gap, ee = Math.floor(au.j6 / 2 - 1.25 * a0)
	}, this.rA = function() {
		bf.dk.data[8].value || (rB.drawImage(a4a[0], ec, ee), rB.drawImage(a4a[1], ec, Math.floor(ee + 3 * a0 / 2)))
	}
}

function cB() {
	var g, a4t, a4u, a4v, gap, a4w, a4x, a4y, a4z, a50, a1f, a51, gb, a52, a3E, a53, a54, a55;

	function a59() {
		a4v = Math.floor(.2 * (r.s.v9() ? .07 : .035) * au.pD), a4v = a2F(r.s.v9() ? 3 : 1, a4v);
		var a5C = au.a0 / (g.length + gap);
		a4v = a4v < a5C ? a5C : a4v, a3E = Math.floor((1 - gap) * a4v), a4t = 0, a5D()
	}

	function a5D() {
		a4t = (a4t = a4t < -20 ? -20 : a4t) > (g.length - 15) * a4v ? (g.length - 15) * a4v : a4t, a4x = Math.floor(a4t / a4v), a4y = (a4y = a4x + Math.floor(au.a0 / a4v)) > g.length - 1 ? g.length - 1 : a4y, a4x = (a4x = a4y < a4x ? a4y : a4x) < 0 ?
			0 : a4x;
		var kM = a4y;
		a4w = a4u / g[kM];
		for (var a6 = a4y - 1; a4x <= a6; a6--) g[a6] > g[kM] && (kM = a6, a4w = a4u / Math.pow(g[a6], a52))
	}

	function a5G(ec) {
		ec = Math.floor((a4t + au.a0 - ec - gap * a4v) / a4v);
		return (ec = ec < -1 ? -1 : -1 === ec ? 0 : ec > g.length - 1 ? -1 : ec) !== a4z && (a4z = ec, -1 === a53 && 0 === a4z && aO.a56 && (a53 = setInterval(a5H, 100)), 1)
	}

	function a5I(a6) {
		var a34 = Math.floor(a4w * Math.pow(g[a6], a52));
		rB.fillRect(a4t + au.a0 - (a6 + 1) * a4v, au.j6 - a34, a3E, a34)
	}

	function a5H() {
		var g4;
		0 !== (a4z = 8 === aV.xL() ? -1 : a4z) ? (a54 = (new Date).getTime(), clearInterval(a53), a53 = -1) : (g4 = g[1] / 864e3, -1 !== a54 && (g4 += ((new Date).getTime() - a54) * g[1] / 864e5, a54 = -1), 0 < g4 && (g[0] += Math.floor(g4), bb
			.dZ = !0))
	}
	this.a56 = !1, this.dR = function() {
		a54 = a53 = -1, a4z = -(a52 = 1), this.a57 = !1, gb = 0, a51 = new Date, a4t = 0, gap = .3, (a55 = []).push({
			fz: "Plateau A",
			eV: 0,
			e: 57
		}), a55.push({
			fz: "Max A",
			eV: 1,
			e: 1
		}), a55.push({
			fz: "Black Friday",
			eV: 15,
			e: 15
		}), a55.push({
			fz: "Max B",
			eV: 19,
			e: 19
		}), a55.push({
			fz: "Max C",
			eV: 44,
			e: 44
		}), a55.push({
			fz: "First Android Version",
			eV: 58,
			e: 58
		}), a55.push({
			fz: "Max D",
			eV: 67,
			e: 67
		}), a55.push({
			fz: "The iFrame Explosion",
			eV: 98,
			e: 99
		}), a55.push({
			fz: "The 155-Day Uptrend",
			eV: 58,
			e: 213
		}), a55.push({
			fz: "Max E",
			eV: 213,
			e: 213
		}), a55.push({
			fz: "Plateau B",
			eV: 214,
			e: 259
		}), a55.push({
			fz: "Turbulent Times",
			eV: 260,
			e: 344
		}), a55.push({
			fz: "Max F",
			eV: 262,
			e: 262
		}), a55.push({
			fz: "Max G",
			eV: 282,
			e: 282
		}), a55.push({
			fz: "Max H",
			eV: 333,
			e: 333
		}), a55.push({
			fz: "The 19-Day Downtrend",
			eV: 283,
			e: 301
		}), a55.push({
			fz: "Plateau C",
			eV: 345,
			e: 385
		}), a55.push({
			fz: "The Alliance Ascent",
			eV: 386,
			e: 395
		}), a55.push({
			fz: "Max I",
			eV: 395,
			e: 395
		}), a55.push({
			fz: "First iOS Version",
			eV: 411,
			e: 411
		}), a55.push({
			fz: "Plateau D",
			eV: 396,
			e: 453
		}), a55.push({
			fz: "The TikTok Revolution",
			eV: 454,
			e: 470
		}), a55.push({
			fz: "Max J",
			eV: 456,
			e: 456
		}), a55.push({
			fz: "Max K",
			eV: 472,
			e: 472
		}), a55.push({
			fz: "Max L",
			eV: 478,
			e: 478
		}), a55.push({
			fz: "YT Drew",
			eV: 471,
			e: 485
		}), a55.push({
			fz: "Plateau E",
			eV: 485,
			e: 600
		}), a55.push({
			fz: "Uptrend A",
			eV: 600,
			e: 613
		}), a55.push({
			fz: "Max M",
			eV: 613,
			e: 613
		}), a55.push({
			fz: "Downtrend A",
			eV: 614,
			e: 635
		}), a55.push({
			fz: "Plateau F",
			eV: 636,
			e: 737
		}), a55.push({
			fz: "End of Record",
			eV: 738,
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
		a4u = Math.floor(.15 * au.j6), a50 = (a50 = Math.floor((r.s.v9() ? .018 : .0137) * au.pD)) < 2 ? 2 : a50, a1f = b7.pB.qS(1, a50), a59()
	}, this.a5A = function(a5B) {
		var a6;
		for (this.a56 = !0, a6 = 0; a6 < a5B.length; a6++) g.unshift(a5B[a6]);
		a59(), bb.dZ = !0
	}, this.a5E = function() {
		a5D()
	}, this.xh = function(ec, ee) {
		ee > au.j6 - .6 * a4u ? this.a57 ? ec !== gb && (a4t += ec - gb, gb = ec, a5D(), a5G(ec), this.a57 = -1 !== a4z, bb.dZ = !0) : a5G(ec) && (bb.dZ = !0) : this.y6()
	}, this.y6 = function() {
		-1 !== a4z && (this.a57 = !1, a4z = -1, bb.dZ = !0)
	}, this.xk = function(ec, deltaY) {
		-1 !== a4z && (a4t += Math.floor(deltaY), a5D(), a5G(ec), bb.dZ = !0)
	}, this.gk = function(ec, ee) {
		this.xh(ec, ee), -1 !== a4z && (gb = ec, this.a57 = !0)
	}, this.y7 = function() {
		-1 !== a4z && (this.a57 = !1)
	}, this.rA = function() {
		rB.fillStyle = u.mZ;
		for (var a5K, month, e4, qV, a5N, a5O, lw, a5P, a5Q, a6 = a4y; a4x <= a6; a6--) a5I(a6);
		this.a56 && 0 === a4x && (rB.fillStyle = u.n0, a5I(0)), -1 !== a4z && (rB.fillStyle = u.mY, a5I(a4z)), -1 !== a4z && (rB.font = a1f, b7.pB.textBaseline(rB, 2), (e4 = new Date).setTime(a51.getTime() - 1e3 * a4z * 60 * 60 * 24), month =
			"month", a5K = "day", "undefined" != typeof Intl && (month = new Intl.DateTimeFormat("en-US", {
				month: "long"
			}).format(e4), a5K = new Intl.DateTimeFormat("en-US", {
				weekday: "long"
			}).format(e4)), a5K = a5K + ", " + e4.getUTCDate() + " " + month + " " + e4.getFullYear(), month = 1 === g[a4z] ? L(86) : L(87), month = b7.wv.a05(g[a4z]) + " " + month, e4 = Math.floor(rB.measureText(a5K).width), qV = Math.floor(
				rB.measureText(month).width), a5N = Math.floor(.5 * (e4 + a50)), a5O = (a5O = a4t + au.a0 - (a4z + 1) * a4v) < a5N ? a5N : a5O > au.a0 - a5N ? au.a0 - a5N : a5O, lw = au.j6 - Math.floor(a4w * Math.pow(g[a4z], a52)), a5P = Math
			.floor(1.1 * a50), a5Q = lw > au.j6 - a5P ? au.j6 - a5P : lw, rB.fillStyle = u.mT, rB.fillRect(au.a0 - qV - a50, a5Q - a5P, qV + a50, a5P), rB.fillRect(a5O - a5N, au.j6 - a5P, e4 + a50, a5P), rB.fillStyle = u.mW, b7.pB.textAlign(
				rB, 2), rB.fillText(month, Math.floor(au.a0 - .5 * a50), a5Q),
			function(lw, a5P) {
				for (var qU, kO = -1, oB = g.length - a4z - 1, a6 = a55.length - 1; 0 <= a6; a6--) oB >= a55[a6].eV && oB <= a55[a6].e && (-1 === kO || a55[a6].e - a55[a6].eV < a55[kO].e - a55[kO].eV) && (kO = a6); - 1 !== kO && (qU = Math
					.floor(rB.measureText(a55[kO].fz).width), rB.fillStyle = u.mT, rB.fillRect(au.a0 - qU - a50, lw, qU + a50, a5P), rB.fillStyle = u.mW, rB.fillText(a55[kO].fz, Math.floor(au.a0 - .5 * a50), lw + a5P))
			}(a5Q - 2 * a5P, a5P), b7.pB.textAlign(rB, 1), rB.fillText(a5K, a5O, au.j6), rB.strokeStyle = u.ma, rB.lineWidth = 1, rB.beginPath(), rB.moveTo(0, lw), rB.lineTo(au.a0, lw), rB.closePath(), rB.stroke())
	}
}

function cC() {
	var a1f, a0, ee, a5S, a5T, canvas, uR, a37, zf, a5U, a5V, a5W, a5X;
	this.ec = 0, this.j6 = 0, this.dR = function() {
		a5T = a8.a0W, a5V = "rgba(0,100,0,0.8)", a5W = "rgba(150,0,0,0.8)", a37 = !(a5U = !0), zf = ab.gY[a8.eF], this.resize()
	}, this.resize = function() {
		a0 = Math.floor((r.s.v9() ? .305 : .24) * au.pD), this.j6 = Math.floor(.5 + .13 * a0), a0 = Math.floor(6 * this.j6), a1f = b7.pB.qS(1, Math.floor(.8 * this.j6)), a5X = Math.floor(.5 * this.j6), bO.sl.font = a1f, ee = bY.gap, a5S = Math
			.floor(1 + .13 * this.j6), (canvas = document.createElement("canvas")).width = a0, canvas.height = this.j6, (uR = canvas.getContext("2d", {
				alpha: !0
			})).font = a1f, b7.pB.textBaseline(uR, 1), b7.pB.textAlign(uR, 1), this.a5Y()
	}, this.a3U = function() {
		return r.s.v9() && au.a0 < 1.2 * au.j6
	}, this.a44 = function() {
		this.a3U() ? this.ec = au.a0 - a0 - bY.gap : this.ec = Math.floor(aQ.a5Z() + (au.a0 - aQ.a5Z() - aR.a0 - a0) / 2 - .5 * bY.gap)
	}, this.lF = function() {
		a37 && (a37 = !1, this.a5Y())
	}, this.a5Y = function() {
		uR.clearRect(0, 0, a0, this.j6), uR.fillStyle = a5U ? a5V : a5W, uR.fillRect(0, 0, a0, this.j6), uR.fillStyle = u.mY, this.a5a(), this.a5b(), uR.fillStyle = ab.gY[a8.eF] >= aZ.jI(a8.eF) ? u.mx : u.mW, uR.fillText(b7.wv.a05(zf), Math
			.floor(a0 / 2), a5X), uR.fillStyle = u.mW, uR.fillRect(0, 0, a0, 1), uR.fillRect(0, 0, 1, this.j6), uR.fillRect(0, this.j6 - 1, a0, 1), uR.fillRect(a0 - 1, 0, 1, this.j6)
	}, this.a5a = function() {
		var eq = bb.jZ() % 100,
			eq = (eq = 9 - bH.ex(eq -= eq % 10, 10), Math.floor(eq * (this.j6 - a5S) / 9));
		uR.fillRect(0, eq, a5S, this.j6 - eq), uR.fillRect(a0 - a5S, eq, a5S, this.j6 - eq)
	}, this.a5b = function() {
		uR.fillRect(a5S, this.j6 - a5S, Math.floor((a0 - 2 * a5S) * ab.gY[a8.eF] / a5T), a5S)
	}, this.iR = function() {
		var g4 = a8.eF;
		b7.fs.gj(g4) && (g4 = ab.gY[g4] - ab.ze[g4], zf !== g4 ? (a5T = a2F(g4, a5T), a5U = zf < g4 && 10 <= g4, zf = g4, a37 = !0) : bb.jZ() % 10 == 9 && (a37 = !0))
	}, this.rA = function() {
		0 === ab.lT[a8.eF] || a8.gs || 2 === ab.zY[a8.eF] || rB.drawImage(canvas, this.ec, ee)
	}
}

function cD() {
	var a5c, a5d, a5e, a5f, a5g, a5h, a5i, a5j, a5k, a5l, a5m, a5n, a5o, a5p, a5q, a5r, a5s, a5t, a5u, a5v, a5w, a5x, position, a5y, a5z, a60, a61, a62 = 1,
		a63 = 1,
		a64 = "";
	var leaderboardHasChanged = true;
	this.playerPos = a8.eF;
	__fx.leaderboardFilter.setUpdateFlag = () => leaderboardHasChanged = true;

	function updateFilteredLb() {
		if (!leaderboardHasChanged) return;
		__fx.leaderboardFilter.filteredLeaderboard = __fx.leaderboardFilter.playersToInclude
			.map(id => jN[id]).sort((a, b) => a - b);
		leaderboardHasChanged = false;
		this.playerPos = __fx.leaderboardFilter.filteredLeaderboard.indexOf(jN[a8.eF]);
	}

	function a66() {
		a5i.clearRect(0, 0, a5c, a3k),
			a5i.fillStyle = u.nB,
			a5i.fillRect(0, 0, a5c, a5n),
			a5i.fillStyle = u.mS,
			a5i.fillRect(0, a5n, a5c, a3k - a5n);
		if (__fx.leaderboardFilter.enabled) updateFilteredLb();
		var playerPos = (__fx.leaderboardFilter.enabled ?
			this.playerPos :
			jN[a8.eF]
		);
		if (__fx.leaderboardFilter.hoveringOverTabs) a5x = -1;
		if (__fx.leaderboardFilter.enabled && a5x >= __fx.leaderboardFilter.filteredLeaderboard.length) a5x = -1;
		playerPos >= position && a68(playerPos - position, u.mr),
			0 !== jN[a8.eF] && 0 === position && a68(0, u.nG),
			-1 !== a5x && a68(a5x, u.mX),
			a5i.fillStyle = u.mS,
			//console.log("drawing", a5x),
			a5i.clearRect(0, a3k - __fx.leaderboardFilter.tabBarOffset, a5c, __fx.leaderboardFilter.tabBarOffset);
		a5i.fillRect(0, a3k - __fx.leaderboardFilter.tabBarOffset, a5c, __fx.leaderboardFilter.tabBarOffset);
		a5i.fillStyle = u.mW,
			a5i.fillRect(0, a5n, a5c, 1),
			a5i.fillRect(0, a3k - __fx.leaderboardFilter.tabBarOffset, a5c, 1),
			__fx.leaderboardFilter.drawTabs(a5i, a5c, a3k - __fx.leaderboardFilter.tabBarOffset, u.mr),
			a5i.fillRect(0, 0, a5c, bY.vC),
			a5i.fillRect(0, 0, bY.vC, a3k),
			a5i.fillRect(a5c - bY.vC, 0, bY.vC, a3k),
			a5i.fillRect(0, a3k - bY.vC, a5c, bY.vC), a5i.font = a5d, b7.pB.textBaseline(a5i, 1), b7.pB.textAlign(a5i, 1), a5i.fillText(a64, Math.floor((a5c + a5n - 22) / 2), Math.floor(a5l + a5e / 2));
		__fx.playerList.drawButton(a5i, 12, 12, a5n - 22);
		var eo, g5 = playerPos < position + a5g - 1 ? 1 : 2;

		if (__fx.leaderboardFilter.enabled) {
			let result = __fx.leaderboardFilter.filteredLeaderboard;
			if (position !== 0 && position >= result.length - a5g)
				position = (result.length > a5g ? result.length : a5g) - a5g;
			//if (position >= result.length) position = result.length - 1;
			for (a5i.font = a5f, b7.pB.textAlign(a5i, 0), eo = a5g - g5; 0 <= eo; eo--) {
				const pos = result[eo + position];
				if (pos !== undefined)
					a69(kt[pos]), a6A(eo, pos, kt[pos]);
			}
			for (b7.pB.textAlign(a5i, 2), eo = a5g - g5; 0 <= eo; eo--) {
				const pos = result[eo + position];
				if (pos !== undefined)
					a69(kt[pos]), a6B(eo, kt[pos]);
			}
		} else {
			for (a5i.font = a5f, b7.pB.textAlign(a5i, 0), eo = a5g - g5; 0 <= eo; eo--)
				a69(kt[eo + position]), a6A(eo, eo + position, kt[eo + position]);
			for (b7.pB.textAlign(a5i, 2), eo = a5g - g5; 0 <= eo; eo--)
				a69(kt[eo + position]), a6B(eo, kt[eo + position]);
		}
		2 == g5 && (a69(a8.eF), b7.pB.textAlign(a5i, 0), a6A(a5g - 1, jN[a8.eF], a8.eF), b7.pB.textAlign(a5i, 2), a6B(a5g - 1, a8.eF)), 0 === position && (g5 = .7 * a5o / aW.get(4).height, a5i.setTransform(g5, 0, 0, g5, Math.floor(a5p + .58 * a5o +
			.5 * g5 * aW.get(4).width), Math.floor(a5l + a5e + .4 * a5o)), a5i.imageSmoothingEnabled = !0, a5i.drawImage(aW.get(4), -Math.floor(aW.get(4).width / 2), -Math.floor(aW.get(4).height / 2)), a5i.setTransform(1, 0, 0, 1, 0, 0))
	}

	function a69(player) {
		a8.ic && (a5i.fillStyle = bc.a6D[bc.k2[bc.eT[player]]])
	}

	function a68(a6, a6E) {
		a5i.fillStyle = a6E, a6 = a5g - 1 < a6 ? a5g - 1 : a6;
		a6E = Math.floor((a6 === a5g - 1 ? 2 : 0 === a6 ? 1.15 : 1) * a5o), a6E = a6 === a5g - 2 ? Math.floor(a5n + 9.15 * a5o) - Math.floor(a5n + 8.15 * a5o) : a6E;
		a5i.fillRect(0, Math.floor(a5n + (a6 + (0 === a6 ? 0 : .15)) * a5o), a5c, a6E)
	}

	function a6A(a6G, wk, a6) {
		a5i.fillText(a5t[wk], a5p, Math.floor(a5l + a5e + (a6G + .5) * a5o)), 1 === ab.zY[a6] && (a5i.font = "italic " + a5f);
		wk = Math.floor(a5l + a5e + (a6G + .5) * a5o);
		a5i.fillText(ab.a2O[a6], a5q, wk), 0 !== ab.zY[a6] && (a5i.font = a5f), a6 < a8.jc && 2 !== ab.zY[a6] || a5i.fillRect(a5q, wk + .35 * a62, a5s[a6], Math.max(1, .1 * a62))
	}

	function a6B(a6G, a6) {
		a5i.fillText(ab.gK[a6], a5r, Math.floor(a5l + a5e + (a6G + .5) * a5o))
	}

	function a6P(ee) {
		return (ee -= bY.gap + a5n) < 0 ? Math.floor(ee / a5o) - 1 : ee < (a5g - 1) * a5o ? Math.floor(ee / a5o) : ee < a3k - a5n ? a5g - 1 : (ee -= a3k - a5n, a5g + Math.floor(ee / a5o))
	}

	function vB(ec, ee) {
		return ec >= bY.gap && ec < bY.gap + a5c && ee >= bY.gap && ee < bY.gap + a3k
	}
	this.dR = function() {
			var a6;
			for (a5z = !1, a61 = a60 = a5y = 0, a5x = -1, a5g = r.s.v9() ? 6 : 10, a63 = (position = 0) === (a63 = bf.dk.data[11].value) ? 10 : 1 === a63 ? 5 : 1, a5w = !1, a5u = new Uint16Array(a5g + 1), a5v = new Uint32Array(a5g + 1), a5k = a8.eS,
				kt = new Uint16Array(a5k), jN = new Uint16Array(a5k), a6 = a5k - 1; 0 <= a6; a6--) kt[a6] = a6, jN[a6] = a6;
			this.resize(!0), a5s = new Uint16Array(a8.eS);
			var a65 = Math.floor(a5c - a5q - a5p - a5j);
			for (a5t = new Array(a8.eS), a5i.font = a5f, a6 = a8.eS - 1; 0 <= a6; a6--) a5t[a6] = a6 + 1 + ".", ab.a2O[a6] = b7.uR.zE(ab.wx[a6], a5f, a65), a5s[a6] = Math.floor(a5i.measureText(ab.a2O[a6]).width);
			a66()
		}, this.resize = function(dR) {
			if (a3k = r.s.v9() ? (a5c = Math.floor(.335 * au.pD), Math.floor(a5g * a5c / 8)) : (a5c = Math.floor(.27 * au.pD), Math.floor(a5g * a5c / 10)), a5c = Math.floor(.97 * a5c), (a5h = document.createElement("canvas")).width = a5c, a5h
				.height = a3k, a5i = a5h.getContext("2d", {
					alpha: !0
				}), a5l = .025 * a5c, a5e = .16 * a5c, a5m = 0 * a5c, a5n = Math.floor(.45 * a5l + a5e), a5o = (a3k - a5e - 2 * a5l - a5m) / a5g,
				a5h.height = a3k += a5o, __fx.leaderboardFilter.tabBarOffset = Math.floor(a5o * 1.3), __fx.leaderboardFilter.verticalClickThreshold = a3k - __fx.leaderboardFilter.tabBarOffset, __fx.leaderboardFilter.windowWidth = a5c,
				a5d = b7.pB.qS(1, Math.floor(.55 * a5e)), a62 = Math.floor((r.s.v9() ? .67 : .72) * a5o), a5f = b7.pB.qS(0, a62), a5i.font = a5f, a5p = Math.floor(.04 * a5c), a5q = Math.floor((r.s.v9() ? .195 : .18) * a5c), a5j = Math.floor(a5i
					.measureText("00920600").width), a5i.font = a5d, a5r = a5c - a5p, !dR) {
				a5i.font = a5f;
				for (var a6 = a8.eS - 1; 0 <= a6; a6--) a5s[a6] = Math.floor(a5i.measureText(ab.a2O[a6]).width);
				a66()
			}
			a64 = b7.uR.zE(L(88), a5d, .96 * a5c)
		}, this.a5Z = function() {
			return a5c
		}, this.lF = function(bl, a67) {
			(a67 || a5w && (bl || bb.jZ() % a63 == 0)) && (a5w = !1, a66())
		}, this.iR = function() {
			! function() {
				for (var eo = a5k - 1; 0 <= eo; eo--) 0 === ab.lT[kt[eo]] && ! function(eo) {
					var a6N = kt[eo];
					a5k--;
					for (var a6 = eo; a6 < a5k; a6++) kt[a6] = kt[a6 + 1], jN[kt[a6]] = a6;
					kt[a5k] = a6N, jN[kt[a5k]] = a5k
				}(eo)
			}();
			for (var a6L, mE = a5k - 1, eo = 0; eo < mE; eo++) ab.gK[kt[eo]] < ab.gK[kt[eo + 1]] && (a6L = kt[eo], kt[eo] = kt[eo + 1], kt[eo + 1] = a6L, jN[kt[eo]] = eo, jN[kt[eo + 1]] = eo + 1);
			! function() {
				for (var e4 = a5w, g5 = (a5w = !0, jN[a8.eF] >= a5g - 1 ? a5g - 2 : a5g - 1), a6 = g5; 0 <= a6; a6--)
					if (a5u[a6] !== kt[a6] || a5v[a6] !== ab.gK[kt[a6]]) return;
				(g5 != a5g - 2 || a5u[a5g] === jN[a8.eF] && a5v[a5g] === ab.gK[a8.eF]) && (a5w = e4)
			}();
			for (var a6 = a5g - 1; 0 <= a6; a6--) a5u[a6] = kt[a6], a5v[a6] = ab.gK[kt[a6]];
			a5u[a5g] = jN[a8.eF], a5v[a5g] = ab.gK[a8.eF];
			leaderboardHasChanged = true;
		}, __fx.leaderboardFilter.scrollToTop = function() {
			position = 0;
		}, this.gk = function(ec, ee) {
			return !!vB(ec, ee) && ((__fx.utils.isPointInRectangle(ec, ee, bY.gap + 12, bY.gap + 12, a5n - 22, a5n - 22) && __fx.playerList.display(ab.wx), true) &&
				!(ee - bY.gap > __fx.leaderboardFilter.verticalClickThreshold && __fx.leaderboardFilter.handleMouseDown(ec - bY.gap)) && (a5y = bb.e3, a5z = !0, a60 = a61 = a6P(ee), bF.yM() && (ec = a4Q(-1, a61, a5g), a5x !== (ec = ec === a5g ? -
					1 : ec)) && (a5x = ec, a66(), bb.dZ = !0)), !0)
		}, __fx.leaderboardFilter.repaintLeaderboard = function() {
			a66(), bb.dZ = !0;
		},
		this.xh = function(ec, ee) {
			if (__fx.utils.isPointInRectangle(ec, ee, bY.gap + 12, bY.gap + 12, a5n - 22, a5n - 22)) {
				__fx.playerList.hoveringOverButton === false && (__fx.playerList.hoveringOverButton = true, a66(), bb.dZ = !0);
			} else {
				__fx.playerList.hoveringOverButton === true && (__fx.playerList.hoveringOverButton = false, a66(), bb.dZ = !0);
			}
			if (__fx.leaderboardFilter.setHovering(
					__fx.utils.isPointInRectangle(ec, ee, bY.gap, bY.gap + __fx.leaderboardFilter.verticalClickThreshold, __fx.leaderboardFilter.windowWidth, __fx.leaderboardFilter.tabBarOffset), ec - bY.gap
				)) return;
			var e4, a6O = a6P(ee);
			return a5z ? (e4 = position, (position = a4Q(0, position += a60 - a6O, a8.eS - a5g)) !== e4 && (a6O = (a6O = a4Q(-1, a60 = a6O, a5g)) !== a5g && vB(ec, ee) ? a6O : -1, a5x = a6O, a66(), bb.dZ = !0), !0) : (a6O = (a6O = a4Q(-1, a6O,
				a5g)) === a5g || !vB(ec, ee) || bF.yM() ? -1 : a6O, a5x !== a6O && (a5x = a6O, a66(), bb.dZ = !0))
		}, this.y7 = function(ec, ee) {
			if (!a5z) return !1;
			a5z = !1;
			var a6O = a6P(ee);
			var isEmptySpace = false;
			return bF.yM() && -1 !== a5x && (a5x = -1, a66(), bb.dZ = !0), bb.e3 - a5y < 350 && a61 === a6O && -1 !== (a6O = (a6O = a4Q(-1, a6O, a5g)) !== a5g && vB(ec, ee) ? a6O : -1) && (ec = (__fx.leaderboardFilter.enabled ? (updateFilteredLb(),
					kt[__fx.leaderboardFilter.filteredLeaderboard[a6O + position] ?? (isEmptySpace = true, jN[a8.eF])]) : kt[a6O + position]), a6O === a5g - 1 && (__fx.leaderboardFilter.enabled ? this.playerPos : jN[a8.eF]) >=
				position + a5g - 1 && (ec = a8.eF), !isEmptySpace && a8.ic && __fx.donationsTracker.displayHistory(ec, ab.wx, a8.jy), 0 !== ab.lT[ec] && !isEmptySpace) && aC.lp(ec, 800, !1, 0), !0
		}, this.xk = function(ec, ee, deltaY) {
			var a6Q;
			return !(a5z || a8.ly || (a6Q = Math.max(Math.floor(Math.abs(deltaY) / 40), 1), !vB(ec, ee)) || (ec = (ec = a4Q(-1, a6P(ee), a5g)) === a5g || bF.yM() ? -1 : ec, 0 < deltaY ? position < a8.eS - a5g && (position += Math.min(a8.eS - a5g -
				position, a6Q), a5x = ec, a66(), bb.dZ = !0) : 0 < position && (position -= Math.min(position, a6Q), a5x = ec, a66(), bb.dZ = !0), 0))
		}, this.rA = function() {
			rB.drawImage(a5h, bY.gap, bY.gap)
		}
}

function cE() {
	var canvas, uR, ec, ee, a34, a6R, gap, a6S, fontSize, a6T, a6U, a6V, a6W, a6X, a6Y, a6Z, a6a, a6b;

	function a6f() {
		uR.clearRect(0, 0, aR.a0, aR.j6), uR.fillStyle = u.mT, uR.fillRect(0, 0, aR.a0, aR.j6), uR.fillStyle = u.mn, e9 = 0 < a6Z ? a6Z : Math.sqrt(a6W[4] / 1e4), uR.fillRect(0, aR.j6 - a34 - 1, Math.floor(e9 * aR.a0), a34), uR.fillStyle = u.mW, uR
			.fillRect(0, 0, aR.a0, 1), uR.fillRect(0, 0, 1, aR.j6), uR.fillRect(aR.a0 - 1, 0, 1, aR.j6), uR.fillRect(0, aR.j6 - 1, aR.a0, 1), uR.fillRect(0, aR.j6 - a34 - 1, aR.a0, 1);
		for (var e9, a6h, e4 = 0, a6 = 0; a6 < a6V.length; a6++) a6X[a6] ? (b7.pB.textAlign(uR, 0), a6h = Math.floor((a6R - a34 + 2 * a6S) * (a6 - e4 + 1) / (a6V.length + 1) - .7 * a6S), uR.fillText(a6V[a6], gap, a6h), b7.pB.textAlign(uR, 2), 5 ===
			a6 && 0 !== ab.lT[a8.eF] && ab.gY[a8.eF] >= aZ.jI(a8.eF) ? (uR.fillStyle = u.nE, uR.fillText(a6d(a6), aR.a0 - gap, a6h), uR.fillStyle = u.mW) : uR.fillText(a6d(a6), aR.a0 - gap, a6h)) : e4++
	}

	function a6d(a6) {
		return a6 < 3 ? a6W[a6].toString() : 3 === a6 || 4 === a6 || 5 === a6 ? b7.wv.a0A(a6W[a6] / 100, 2) : a6 < 7 ? b7.wv.a05(a6W[a6]) : a6 === 7 ? aR.a6i(a6W[7]) : a6 === 8 ? __fx.utils.getMaxTroops(ab.gK, a8.eF) : __fx.utils.getDensity(a8.eF)
	}

	function a6c() {
		ab.gK[a8.eF] !== a6W[6] && (a6W[6] = ab.gK[a8.eF], a6T++)
	}
	this.dR = function() {
		a6Z = a6a = 0, (a6U = new Array(8))[0] = L(89), a6U[1] = a8.jy ? L(90) : L(91), a6U[2] = L(92), a6U[3] = L(93), a6U[4] = L(94), a6U[5] = L(95, 0, "Interest"), a6U[6] = L(96), a6U[7] = L(97),
			a6U.push("Max Troops", "Density"), // add a6U
			(a6V = new Array(a6U.length)).fill(""), (a6W = new Array(a6U.length))[0] = a8.jy ? 0 : a8.jc, a6W[1] = a8.jy ? ag.jd : a8.k0, a6W[2] = a8.w7, a6W[3] = 0, a6W[4] = bH.ex(1e4 * ab.gK[0], Math.max(a8.jM, 1)), a6W[5] = 0 === a8.data
			.iIncomeType ? 700 : 1 === a8.data.iIncomeType ? bH.ex(700 * a8.data.iIncomeValue, 64) : bH.ex(700 * a8.data.iIncomeData[a8.eF], 64), a6W[6] = 0, a6c(), a6W[7] = 0, a6Y = a6d(6), a6X = new Array(a6U.length);
		for (var a6 = a6U.length - 1; 0 <= a6; a6--) a6X[a6] = !0;
		a6b = 0, a6b = a8.jy ? (a6X[0] = !1, a6X[2] = !1, a6X[3] = !1, 3) : (a6X[3] = !1, 1), a6T = 0, this.resize()
	}, this.resize = function() {
		this.a0 = Math.floor((r.s.v9() ? .1646 : .126) * 1.25 * au.pD), this.j6 = Math.floor(1.18 * this.a0), a34 = Math.floor(.04 * this.a0), gap = Math.floor(.035 * this.a0), a6S = .04 * this.a0, a6R = this.j6, this.j6 -= Math.floor(a6b * (this
			.j6 - 2 * a34) / a6U.length), fontSize = Math.floor(.7 * (a6R - a34) / a6U.length);
		var a1f = b7.pB.qS(1, fontSize);
		(canvas = document.createElement("canvas")).width = this.a0, canvas.height = this.j6,
			function(a1f, a0) {
				for (var a6 = 0; a6 < a6V.length; a6++) a6V[a6] = b7.uR.zE(a6U[a6], a1f, a0)
			}((uR = canvas.getContext("2d", {
				alpha: !0
			})).font = a1f, .575 * this.a0), b7.pB.textBaseline(uR, 1), uR.lineWidth = 1, this.a0P(), this.a44(), aP.a44(), a6f()
	}, this.a44 = function() {
		ec = au.a0 - this.a0 - bY.gap
	}, this.a6g = function() {
		ee = bY.gap
	}, this.a0P = function() {
		ee = bY.gap + (aP.a3U() && 0 !== ab.lT[a8.eF] && !a8.gs ? aP.j6 + bY.gap : 0)
	}, this.lF = function(bl) {
		(bl || 100 <= a6T) && (a6T = 0, a6f())
	}, this.a1J = function() {
		return a6W[7]
	}, this.a6i = function(value) {
		var kM = Math.floor(value / 1e3 / 60),
			value = Math.floor((value - 6e4 * kM) / 1e3);
		return value < 10 ? kM + ":0" + value : kM + ":" + value
	}, this.iR = function() {
		var a6r, per;
		a6X[0] && a8.w8 - a8.w7 !== a6W[0] && (a6W[0] = a8.w8 - a8.w7, a6T++), ag.jd - a6W[0] !== a6W[1] && (a6W[1] = ag.jd - a6W[0], a6T++), this.l6(), (a6r = aZ.a6s(a8.eF)) !== a6W[5] && (a6W[5] = a6r, a6T++), a6c(), a6W[7] += bb.a6t, a6r =
			a6d(7), a6Y !== a6r && (a6Y = a6r, a6T += 100), a6r = a8.ic ? bd.wf() : ab.gK[kt[0]], per = bH.ex(1e4 * a6r, Math.max(a8.jM, 1)), a6W[3] = a6r, a6W[4] !== per && (a6T++, a6W[4] = per), 8 === a8.jw && function() {
				for (var a6 = 0; a6 < 2; a6++)
					if (!b7.fs.gj(a6)) return bN.vj.w4(), 1;
				return
			}() || a6W[3] < a8.jM || ! function() {
				for (var a6 = ag.jd - 1; 0 <= a6; a6--)
					if (0 < ab.fy[ag.jf[a6]].length) return;
				return 1
			}() || bN.vj.w4()
	}, this.l6 = function() {
		a6X[2] && a8.w7 !== a6W[2] && (a6W[2] = a8.w7, a6T++)
	}, this.a6u = function(a6) {
		var qi, a6v, e4;
		return 2 !== a8.w5 && (a6 % 2 == 1 && (aQ.lF(1, 1), bb.dZ = !0), a6 === a8.a0Y ? (a6Z = 0, a6f(), !1) : (-1 !== a6 || 0 !== a6a) && (a6v = a6Z, a6Z = a8.gg ? a6 / a8.a0Y : (e4 = performance.now(), 0 <= a6 && (qi = e4 - 392 * a6, a6a =
			0 === a6 || qi < a6a ? qi : a6a), 1 < (a6Z = (e4 - a6a) / (392 * a8.a0Y)) ? 1 : a6Z), a6f(), a6Z !== a6v))
	}, this.rA = function() {
		rB.drawImage(canvas, ec, ee)
	}
}

function cF() {
	var uj, a6w, a0, j6, a4A, a6x, a6y, a3V, canvas, lg, a6z;

	function uN() {
		return Math.floor((au.a0 - a0) / 2) < aM.j6 + 2 * bY.gap ? au.j6 - j6 - 4 * bY.gap - aM.j6 : au.j6 - j6 - 2 * bY.gap
	}
	this.dR = function() {
		a6z = uj = !1, a4A = .61, a6x = .07, a6y = .09, lg = a3V = j6 = 0
	}, this.resize = function() {
		var uR, lv, eq, a74, a75, a1k;
		uj && (a0 = a70(a0 = r.s.v9() ? Math.floor(.69 * au.pD) : Math.floor(.5 * au.pD), a2F(au.a0 - 2 * bY.gap, 10)), a0 = a70(a0, Math.floor(3.57 * a2F(au.j6 - 2 * bY.gap, 3))), j6 = Math.floor(.28 * a0), (canvas = document.createElement(
			"canvas")).width = a0, canvas.height = j6, uR = canvas.getContext("2d", {
			alpha: !0
		}), lv = Math.floor(1 + j6 / 40), uR.clearRect(0, 0, a0, j6), uR.fillStyle = u.mT, uR.fillRect(lv, lv, a0 - 2 * lv, j6 - 2 * lv), uR.lineJoin = "bevel", uR.lineWidth = 2 * lv, uR.strokeStyle = u.mW, uR.strokeRect(lv, lv, a0 - 2 *
			lv, j6 - 2 * lv), uR.imageSmoothingEnabled = !1, eq = aW.get(a6w), a74 = eq.width, a1k = (1 === a6w ? .85 : 21 === a6w ? .666 : .9) * a4A * j6 / (a75 = eq.height), uR.setTransform(a1k, 0, 0, a1k, Math.floor((a0 - a1k * a74) /
			2), Math.floor((j6 - a1k * a75) / 2)), uR.drawImage(eq, 0, 0), uR.setTransform(1, 0, 0, 1, Math.floor(a0 - a6y * j6 - a6x * j6 - lv), Math.floor(lv + a6x * j6)), function(uR, eV) {
			uR.lineWidth = Math.floor(1 + j6 / 80), uR.strokeStyle = u.mW, uR.beginPath(), uR.moveTo(0, 0), uR.lineTo(eV, eV), uR.moveTo(0, eV), uR.lineTo(eV, 0), uR.stroke()
		}(uR, Math.floor(a6y * j6)), uR.setTransform(1, 0, 0, 1, 0, 0))
	}, this.show = function(ey, a72, a3x, a73) {
		uj || a73 && a6z || (a6w = a3x ? 21 : ey ? 1 : 2, uj = a6z = !0, this.resize(), aG.qh(), aM.a3u(), lg = bb.e3, a3V = a72 ? 1 : 0)
	}, this.iR = function() {
		!uj || 1 <= a3V || (a3V = 1 < (a3V += 5e-4 * (bb.e3 - lg)) ? 1 : a3V, lg = bb.e3, bb.dZ = !0)
	}, this.gk = function(ec, ee) {
		return !(!uj || a3V <= 0 || (ec -= Math.floor((au.a0 - a0) / 2), ee -= uN(), ec < 0) || ee < 0 || a0 < ec || j6 < ee || (a0 - j6 / 3 < ec && ee < j6 / 3 && (uj = !1, bb.dZ = !0), 0))
	}, this.rA = function() {
		!uj || a3V <= 0 || (rB.globalAlpha = a3V, rB.drawImage(canvas, Math.floor((au.a0 - a0) / 2), uN()), rB.globalAlpha = 1)
	}
}

function dF() {
	var a77 = [0, 0],
		a78 = [0, 0];

	function a7B(oB) {
		return 3 !== a77[oB] && 1 !== a78[oB] && (a78[oB] = 1, a77[oB]++, bf.ps.pt(119, (a77[0] << 2) + a77[1]), 1)
	}
	this.a79 = new a7A, this.dR = function() {
		var ey = bf.dk.data[119].value;
		a77[0] = ey >> 2, a77[1] = 3 & ey
	}, this.a0j = function() {
		this.a79.dR()
	}, this.iR = function() {
		this.a79.iR()
	}, this.a1K = function() {
		a7B(0) && aI.a2L(L(98))
	}, this.a1L = function() {
		a7B(1) && aI.a2L(L(99))
	}
}

function a7A() {
	var a7C;
	this.dR = function() {
		a7C = !1
	}, this.iR = function() {
		var g4;
		if (function() {
				if (!a7C) {
					if (bb.jZ() % 30 != 9) return;
					if (!b7.fs.km(90)) return;
					a7C = !0
				}
				return 1
			}() && (console.log("HintsStillNeeds calculate"), ! function() {
				var p3 = aI.a2i(956);
				if (p3) {
					if (b7.fs.kQ(p3.player)) return 1;
					aI.a1R(956, 0)
				}
				return
			}() && (-1 === (g4 = (a8.ic ? function() {
				var id = bd.kq(),
					eV = ag.jd;
				if (bc.k2[id])
					for (var vw = ag.jf, eT = bc.eT, a6 = 0; a6 < eV; a6++) {
						var g4 = vw[a6];
						if (eT[g4] !== id) return g4
					} else if (1 < eV) return kt[eV - 1];
				return -1
			} : function() {
				for (var a7K = ag.jd, je = ag.jf, a7L = jN, a6 = 0; a6 < a7K; a6++) {
					var g4 = je[a6];
					if (0 !== a7L[g4]) return g4
				}
				return -1
			})()) ? ! function() {
				var p3 = aI.a2i(957);
				if (p3 && p3.a2B) {
					if (aX.eM(p3.a2B.eH << 2)) return 1;
					aI.a1R(957, 0)
				}
				return
			}() : (aI.wT(0, L(100, [ab.a2O[g4]]), 956, g4, u.mW, u.mT, -1, !0), 0)))) {
			var eV = ai.iE.kc;
			if (0 === eV) ai.iE.l1();
			else
				for (var dk = ai.iE.dk, a6 = 0; a6 < eV; a6++) {
					var eH = dk[a6];
					if (aX.eM(eH << 2)) return void aI.wT(0, L(101, [bI.ed(eH), bI.ef(eH)]), 957, 0, u.mW, u.mT, -1, !0, void 0, {
						eo: 1,
						eH: eH
					})
				}
		}
	}
}

function dG() {
	this.a7M = new a7N, this.dR = function() {
		this.a7M.resize()
	}
}

function a7N() {
	this.resize = function() {
		var a6, a7O = document.head.querySelector("style#ss");
		if (a7O)
			for (a6 = a7O.sheet.cssRules.length - 1; 0 <= a6; a6--) a7O.sheet.deleteRule(0);
		else(a7O = document.createElement("style")).id = "ss", document.head.appendChild(a7O);
		var a4I = "::-webkit-scrollbar",
			a7P = b7.pB.pM(bY.zN),
			h9 = b7.pB.pM(Math.max(b7.pB.pv(.012), 8));
		try {
			a7O.sheet.insertRule(a4I + "{width:" + h9 + ";height:" + h9 + ";}", a7O.sheet.cssRules.length), a7O.sheet.insertRule(a4I + "-thumb{background-color:white;}", a7O.sheet.cssRules.length), a7O.sheet.insertRule(a4I +
				"-track{background:" + u.mS + ";}", a7O.sheet.cssRules.length), a7O.sheet.insertRule(a4I + "-track:horizontal{border-top:" + a7P + " solid white;}", a7O.sheet.cssRules.length), a7O.sheet.insertRule(a4I +
				"-track:vertical{border-left:" + a7P + " solid white;}", a7O.sheet.cssRules.length), a7O.sheet.insertRule(a4I + "-button{display:none;}", a7O.sheet.cssRules.length)
		} catch (e) {
			for (console.log("error 3425: " + e), a6 = a7O.sheet.cssRules.length - 1; 0 <= a6; a6--) a7O.sheet.deleteRule(0)
		}
	}
}

function dE() {
	this.a7Q = !1, this.mM = !1, this.a0T = !1, this.a7R = [0, 0, 0, 0], this.a7S = function() {
		var lv, lw, m9, mA;
		this.a0T = this.a0T || this.mM, (this.mM || this.a7Q && this.a0T) && (lv = bW.a7T[0], lw = bW.a7T[1], m9 = bW.a7T[2], mA = bW.a7T[3], lv = lv < this.a7R[0] ? this.a7R[0] : lv, lw = lw < this.a7R[1] ? this.a7R[1] : lw, m9 = m9 > this.a7R[
				2] ? this.a7R[2] : m9, mA = mA > this.a7R[3] ? this.a7R[3] : mA, this.mM = !1, this.a7Q = !1, lv === this.a7R[0] && lw === this.a7R[1] && m9 === this.a7R[2] && mA === this.a7R[3] ? this.a0U() : lv <= m9 && lw <= mA && a0l
			.putImageData(a0m, 0, 0, lv, lw, m9 - lv + 1, mA - lw + 1))
	}, this.a0U = function() {
		this.a0T && this.a7R[2] >= this.a7R[0] && this.a7R[3] >= this.a7R[1] && a0l.putImageData(a0m, 0, 0, this.a7R[0], this.a7R[1], this.a7R[2] - this.a7R[0] + 1, this.a7R[3] - this.a7R[1] + 1), this.a0T = !1
	}, this.wG = function() {
		this.a7R[2] >= this.a7R[0] && this.a7R[3] >= this.a7R[1] && a0l.putImageData(a0m, 0, 0, this.a7R[0], this.a7R[1], this.a7R[2] - this.a7R[0] + 1, this.a7R[3] - this.a7R[1] + 1), this.a0T = !1
	}, this.dR = function() {
		var ec, ee;
		this.a7Q = !1, this.mM = !1, this.a0T = !1, this.a7R[0] = bO.eg, this.a7R[1] = bO.eh, this.a7R[2] = this.a7R[3] = 0;
		loop: for (ec = 1; ec < bO.eg - 1; ec++)
			for (ee = bO.eh - 2; 1 < ee; ee--)
				if (1 === a7U[aX.tw(ec, ee) + 2]) {
					this.a7R[0] = ec;
					break loop
				} loop: for (ee = 1; ee < bO.eh - 1; ee++)
			for (ec = bO.eg - 2; 1 < ec; ec--)
				if (1 === a7U[aX.tw(ec, ee) + 2]) {
					this.a7R[1] = ee;
					break loop
				} loop: for (ec = bO.eg - 2; 0 < ec; ec--)
			for (ee = bO.eh - 2; 1 < ee; ee--)
				if (1 === a7U[aX.tw(ec, ee) + 2]) {
					this.a7R[2] = ec;
					break loop
				} loop: for (ee = bO.eh - 2; 0 < ee; ee--)
			for (ec = bO.eg - 2; 1 < ec; ec--)
				if (1 === a7U[aX.tw(ec, ee) + 2]) {
					this.a7R[3] = ee;
					break loop
				}
	}
}

function L(value, a7V, ra) {
	var os = "number" == typeof value ? b4.a7W[value] : value;
	if (ra && b4.a7X() && (os = ra), a7V)
		for (var eV = a7V.length, a6 = 0; a6 < eV; a6++)
			for (var eo = 0; eo < 3; eo++) os = os.replace("{" + (10 * eo + a6) + "}", a7V[a6]);
	return os
}

function bt() {
	this.data = new a7Y;
	var a7Z = (new a7a).L84,
		a7b = (this.a7W = a7Z, !1);
	this.dR = function() {
		var eV, g;
		a7b = !1, "en" !== bf.dk.data[12].value.split("-")[0].toLowerCase() ? bf.dk.data[12].value === bf.dk.data[145].value && 0 < bf.dk.data[146].value && (eV = bf.dk.data[146].value, (g = bf.pS.rg(eV, !1)).length === eV) && !!b7.pL.yt(g) &&
			function(g) {
				var eV = g.length,
					a7h = bf.pS.rg(eV, !0);
				if (eV !== a7h.length) return !1;
				if (!b7.pL.yt(a7h)) return !1;
				for (var kM = a7Z.length, a5B = new Array(kM), a7i = kM === eV, fz = Math.min(eV, kM), a6 = 0; a6 < kM; a6++)
					if (a5B[a6] = a7Z[a6], a6 < eV && a7h[a6] === a5B[a6]) a5B[a6] = g[a6];
					else {
						a7i = !1;
						for (var ep = 0; ep < fz; ep++)
							if (a7h[ep] === a5B[a6]) {
								a5B[a6] = g[ep];
								break
							}
					} return b4.a7W = a5B, a7i
			}(g) || (a7b = !0) : b4.a7W = a7Z
	}, this.dT = function() {
		bc.dS(), a9.dS(), ba.dS(), bZ.dS(), aJ.dR(), ap.dS()
	}, this.a7X = function() {
		return this.a7W === a7Z || !a7Z.length
	}, this.a7j = function() {
		var a7k;
		a7b && (a7b = !1, 0 !== a7Z.length) && (a7k = bf.dk.data[12].value, ax.a7l.a7m(0, a7k.slice(0, 20)))
	}, this.a7n = function(g) {
		g.length === a7Z.length && (this.a7W = g, bf.ps.pt(145, bf.dk.data[12].value), bf.ps.pt(146, g.length), bf.pS.rm(g, !1), bf.pS.rm(a7Z, !0), 0 === aV.xL()) && 5 === n.qM && n.l7.a7o()
	}
}

function a7Y() {
	var g = ["aa", "ab", "ace", "ach", "af", "ak", "alz", "am", "ar", "as", "av", "awa", "ay", "az", "ba", "bal", "ban", "bbc", "bci", "be", "bem", "ber", "ber-Latn", "bew", "bg", "bho", "bik", "bm", "bm-Nkoo", "bn", "bo", "br", "bs", "bts", "btx",
		"bua", "ca", "ce", "ceb", "cgg", "ch", "chk", "chm", "ckb", "cnh", "co", "crh", "crs", "cs", "cv", "cy", "da", "de", "din", "doi", "dov", "dv", "dyu", "dz", "ee", "el", "en", "eo", "es", "et", "eu", "fa", "fa-AF", "ff", "fi", "fil", "fj",
		"fo", "fon", "fr", "fur", "fy", "ga", "gaa", "gd", "gl", "gn", "gom", "gu", "gv", "ha", "haw", "he", "hi", "hil", "hmn", "hr", "hrx", "ht", "hu", "hy", "iba", "id", "ig", "ilo", "is", "it", "iw", "ja", "jam", "jv", "jw", "ka", "kac",
		"kek", "kg", "kha", "kk", "kl", "km", "kn", "ko", "kr", "kri", "ktu", "ku", "kv", "ky", "la", "lb", "lg", "li", "lij", "lmo", "ln", "lo", "lt", "ltg", "luo", "lus", "lv", "mad", "mai", "mak", "mam", "mfe", "mg", "mh", "mi", "min", "mk",
		"ml", "mn", "mni-Mtei", "mr", "ms", "ms-Arab", "mt", "mwr", "my", "nb", "ndc-ZW", "ne", "new", "nhe", "nl", "no", "nr", "nso", "nus", "ny", "oc", "om", "or", "os", "pa", "pa-Arab", "pag", "pam", "pap", "pl", "ps", "pt", "pt-PT", "qu",
		"rn", "ro", "rom", "ru", "rw", "sa", "sah", "scn", "sd", "se", "sg", "sh", "shn", "si", "sk", "sl", "sm", "sn", "so", "sq", "sr", "ss", "st", "su", "sus", "sv", "sw", "szl", "ta", "tcy", "te", "tet", "tg", "th", "ti", "tiv", "tk", "tl",
		"tn", "to", "tpi", "tr", "trp", "ts", "tt", "tum", "ty", "tyv", "udm", "ug", "uk", "ur", "uz", "ve", "vec", "vi", "war", "wo", "xh", "yi", "yo", "yua", "yue", "zap", "zh", "zh-CN", "zh-TW", "zu"
	];
	this.a7p = function() {
		for (var a7q = [], eV = g.length, a6 = 0; a6 < eV; a6++) a7q.push(g[a6]);
		for (eV++, a7q.unshift(bf.dk.data[12].ra), a6 = 1; a6 < eV; a6++)
			if (a7q[a6] === a7q[0]) {
				a7q.splice(a6, 1), eV--;
				break
			} try {
			if ("undefined" == typeof Intl) return a7q;
			for (a6 = 0; a6 < eV; a6++) {
				var os = new Intl.DisplayNames([a7q[a6]], {
					type: "language"
				}).of(a7q[a6]);
				os !== a7q[a6] && (a7q[a6] = a7q[a6] + ": " + os)
			}
		} catch (e) {
			console.log("error 3646: " + e)
		}
		return a7q
	}, this.a7s = function(a7t) {
		for (var os = bf.dk.data[12].value, eV = a7t.length, a6 = 0; a6 < eV; a6++)
			if (os === a7t[a6].split(":")[0]) return a6;
		return 0
	}
}

function a7a() {
	this.L84 = ["Very Easy", "Easy", "Normal", "Hard", "Very Hard", "Impossible", "Activated", "Team {0}", "Team {0} has won the game!", "You have earned a participation reward of {10} gold.", "You have earned prize money of {10} gold.",
		"The following clans have won these glorious points:", "Validate the clan results by clicking here: ", "Back", "Error", "Error {10}", "Not Enough Gold!", "You need more gold to perform this action.", "Quit Game", "More", "Accept",
		"You have conquered {0}.", "You have been conquered by {0}.", "Congratulations! You have won the game.", "{0} has won the game.", "{0} has broken the non-aggression pact.", "{0} is attacking you!", "Choose your start position!",
		"You have surrendered!", "The game has ended in a stalemate!", "Error: {10}", "{0} has been immortalized!", "Neutral Land: {0}", "Player: {0}", "Strength: {10}", "Territory: {10}", "Team", "Bot Difficulty", "Index: {10}",
		"Coordinates: {10}", "Mountain: {10}", "Water: {10}", "Ship Owner: {0}", "Message to {0}", "Humanity triumphs! The undead have been beaten back.", "The Resistance", "Mankind's era ends, overrun by the relentless tide of the undead.",
		"The Virus", "If peace is agreed upon, the game ends in a stalemate.", "If peace is agreed upon, the largest territory holder wins the game.", "You have signed a non-aggression pact with {0}.",
		"You have asked {0} to sign a non-aggression pact.", "{0} has accepted the non-aggression pact.", "{0} requests a non-aggression pact.", "You have asked {10} players to attack {1}.", "You have asked {0} to attack {1}.",
		"{0} suggests you attack {1}.", "You have exported 1 resource to {0}.", "You have exported {10} resources to {1}.", "A tax of 1 unit has been deducted.", "A tax of {10} units has been deducted.",
		"A bot ({0}) has supported you with 1 resource.", "A bot ({0}) has supported you with {11} resources.", "{0} has supported you with 1 resource.", "{0} has supported you with {11} resources.", "Map: {10}", "Dimension: {10}",
		"Overall Pixels: {10}", "Land: {10}", "Mountains: {10}", "Full sending is disabled.", "{0} has been conquered by {1}.", "{0} has left the game.", "{0} has surrendered.", "{0} has joined the game.", "{10} players have been conquered.",
		"{10} players have left the game.", "{10} players have surrendered.", "Next Contest: ", "YOU HAVE CONQUERED", "YOU HAVE BEEN CONQUERED BY", "THE GAME HAS BEEN WON BY", "MAP:", "{0} has called the peace vote.", "{0} has voted for peace.",
		"{0} has rejected peace.", "second played", "seconds played", "LEADERBOARD", "Humans", "Players", "Bots", "Spectators", "Threshold", "Percentage", "Growth", "Income", "Time", "Hint: Click on a boat to send it to a new location.",
		"Hint: The top 9 emojis are ordered by usage.", "{0} still needs to be conquered!", "A neutral pixel at position ({10}, {11}) still needs to be conquered!", "Loading", "Joined", "Skipped", "Multiplayer", "Single Player", "other: ",
		"White Arena", "Black Arena", "Island", "Mountains", "Desert", "Swamp", "Snow", "Cliffs", "Pond", "Halo", "Europe", "World", "Caucasia", "Africa", "Middle East", "Scandinavia", "North America", "South America", "Asia", "Australia",
		"Island Kingdom", "Refresh", "Public Profile", "🧈 Gold", "Account Balance: ",
		"Play more multiplayer games to earn gold. Accounts without gold will be deleted after some days of grace. Each day, you will lose 0.50 gold or 0.01% of your balance, whichever amount is higher.",
		"Buttons with yellow font color use a small amount of gold, which is then redirected based on the specific action taken.", "Gold is the fuel that keeps your account running! Keep the balance up!", "Gold Transfer", "Send", "Confirm",
		"Cancel", "You are about to send {10} gold from the Source Account {1}. The transaction fee is {12} gold. The Target Account ({3}) will receive {14} gold.", "Account Name", "Copy", "Password", "Show", "Hide", "Request New Password",
		"Security Tip", "To safeguard your account, never disclose your password to anyone. We will never ask for your password, as we do not require it for any service.",
		"If you have accessed your account through unofficial webpages or apps, your security may be compromised. We recommend changing your password.",
		"If you lose your password or account name, you may lose access to your account. In such a case, we are unable to recover it. Please ensure that you store your account name and password in a safe place.", "Account Options",
		"Log in to a Different Account", "Create New Account", "Delete Account: ", "🗑️ Account Deletion", "Accounts without gold will be deleted automatically after 8 days. To initiate this process, deplete all your gold.", "Saved Accounts",
		"Listed accounts may have been removed in the meantime due to insufficient funds.", "🗑️ Remove From List", "➡️ Login", "1v1 Rating", "Elo: ", "Rank: ", "Played Games: ", "Report Player",
		"You can report up to seven players per day for misconduct or other rule violations.", "No Admin", "Assistant Moderator", "Admin Coordinator", "Senior Admin", "Head Admin", "Admin Statistics", "Points: ", "Status: ",
		"You are allowed to elect up to one admin each week. Negative votes count only half as much as positive votes.", "Username", "Please choose a respectful username.", "Bio", "Upload Bio", "The monthly fee is currently {10} gold.",
		"Enable Auto Renew", "Disable Auto Renew", "Auto Renew is off. The subscription will end in {10} day(s).", "Auto Renew is on. The subscription will renew in {10} day(s).", "Primary Clan Stats", "Clan: ", "Monthly Points: ",
		"Total Points: ", "Won Games: ", "Avg. Points per Game: ", "Secondary Clan Stats", "Clan Leader Statistics", "Clan Leader of {0}", "No Clan Leader", "Elect",
		"You are allowed to elect up to one clan leader each week. Your voting power is based on your monthly clan points.", "You can only elect members of the same clan you have won points for.", "Additional Income", "Options", "Default",
		"Uniform", "Customized", "Mixed", "Team dependent", "Player Count", "Clan Chart", "🛠️ Options", "🛠️ Chart Options", "Search Terms", "Separate search terms with a comma.", "Load Data", "Start Index", "End Index", "Timeframe",
		"More Options", "Y-Axis Compression", "Choose Your Nation's Color!", "National Color", "Red: ", "Green: ", "Blue: ", "Adjust", "Colors", "Random", "Selectable Color", "⏳ Connecting...", "Find Server...", "New Connection...",
		"Custom Scenario", "⚔️ Play", "Map", "Settings", "Game Mode", "Clustered", "Player Names", "Kingdom Names", "Simple Names", "Territorial Income", "Interest Income", "Starting Resources", "More Settings", "Reset Scenario", "Open File...",
		"Save As File...", "My Account", "Game Menu", "Your Kingdom's Name", "Clans", "Clan Members", "1v1 Players", "Admins", "🏆 Leaderboards", "Previous 10", "Next 10", "1v1 Player Ranking", "Clan Ranking", "Clan Member Ranking",
		"Admin Ranking", "1v1 Reports", "Admin Election", "Blockchain", "Clan Leader Election", "Bio Reports", "Ranking", "Player", "Elo", "Clan", "Points", "Leader", "Index", "Seconds Ago", "Accuser", "Accused", "Elector", "Elected", "Sender",
		"Receiver", "Amount", "Elo Deducted", "Bio Removed", "🛠️ List Options", "Clan Name Search", "Username Search", "Quantity", "Account Name Search", "Login", "📜 Logs", "Procedural Map", "Realistic Map", "Custom Map", "Passable Water",
		"Passable Mountains", "Select File", "Preview", "Map Name", "Selectable Name", "▶️ Replay", "🔲 Select All", "📋 Copy", "🗑️ Clear", "▶️ Launch", "Insert the replay link here!", "⚙️ Settings", "🔄 Reset", "Reload Required",
		"A game reload is required to apply the new configuration.", "Information", "Increasing resolution, shrinking minimum font size, and speeding up text rendering can strain your system and hinder gameplay responsiveness.", "Lobby",
		"Proxied Lobby", "Resolution", "Low", "Medium", "High", "Very High", "Minimum Font Size", "Small", "Very Small", "Text Rendering Speed", "Slow", "Fast", "Large UI", "Place Balance Above", "Hide Zoom Buttons", "Font", "Shortcut Keys",
		"Reset", "Language", "Spawning", "Selectable Spawn", "🔑 My Account", "📈 Charts", "🧈 Gold Transfer", "🔗 Links", "ℹ️ Game Version", "🗑️ Delete Data", "Privacy Settings", "Force Restart Game", "☰ Game Menu", "📊 Game Statistics",
		"🏳️ Surrender", "🕊️ Call Peace Vote", "Android App", "iOS App", "Changelog", "Clan Results", "Tutorial", "Terms", "Privacy", "Do you want to delete all locally stored data, like usernames, account data and setting data?",
		"Accounts without gold will be deleted after some days of grace.", "🗑️ Delete", "User Privacy", "Check out our Privacy Policy at:", "Source Account", "Target Account", "Replay Error", "Warning", "Loading...",
		"An enemy ship belonging to {0} is heading towards your shore.", "Initiate Land Attack At Mouse Pointer", "Launch Ship Towards Mouse Pointer", "Increase Percentage Bar", "Decrease Percentage Bar", "Slightly Increase Percentage Bar",
		"Slightly Decrease Percentage Bar", "Switch UI Visibility", "Zoom In", "Zoom Out", "Camera Left", "Camera Right", "Camera Up", "Camera Down", "Avg. Attack Strength", "Land Attacks", "Ships launched", "Bots conquered", "Humans conquered",
		"Attacked by Bots", "Attacked by Humans", "Territorial Loss", "Received Support", "Overall Income", "Additional Costs", "Land War Losses", "Naval Losses", "Transmitted Support", "Overall Expenses", "Mountain Attacks", "Ships landed",
		"Territory", "Numbers", "Statistics", "Neutral", "Red", "Green", "Blue", "Yellow", "Magenta", "Cyan", "White", "Black", "Ship launched!", "Ship selected!", "Ship on the way!", "Maps"
	]
}

function dX() {
	var ec, ee, j6, a7u, a7v, a7w, a7x, a7y, a7z, a0, zU, a80;
	this.uj = !1, this.dR = function(os, a81) {
		if (1 === r.id && 13 <= r.ez && r.ez < 18) return a81 ? void(zU = os) : zU !== os ? void 0 : void r.re.saveString(200, os);
		a81 && (zU = os, (a80 = document.createElement("a")).appendChild(document.createTextNode(zU)), this.uj = !0, a80.title = zU, a80.target = "_blank", a80.href = zU, a80.style.textAlign = "center", a80.style.color = u.mW, a80.style
			.position = "absolute", a80.style.padding = "0px", a80.style.margin = "0px", this.resize(), document.body.appendChild(a80), bb.dZ = !0)
	}, this.qh = function() {
		return !(!this.uj || (document.body.removeChild(a80), this.uj = !1))
	}, this.gk = function(hc, hd) {
		return !!this.uj && ((hc < ec || hd < ee || ec + a0 < hc || ee + j6 < hd || ec + a0 - a7u < hc && hd < ee + a7u) && (bb.dZ = !0, this.uj = !1, document.body.removeChild(a80)), !0)
	}, this.resize = function() {
		var a1f, a82;
		this.uj && (a7y = Math.floor(.8 * (r.s.v9() ? au.a0 > au.j6 ? .6 : .55 : .4) * au.pD), a7u = Math.floor(.15 * a7y), a7v = Math.floor(.35 * a7u), a7w = Math.floor(.5 * a7u), a7x = Math.floor(2.5 * a7w), j6 = a7u + a7v + 3 * a7w, a1f = b7
			.pB.qS(1, a7v / au.pH), a7z = Math.floor(au.pH * aL.measureText(zU, a1f)), a82 = a0 = (a7y < a7z ? a7z : a7y) + 2 * a7x, a0 = Math.min(a0, au.a0 - 2 * (r.s.v9() ? 2 : 1) * bY.gap), a1f = b7.pB.qS(1, a0 / a82 * a7v / au.pH), a7z =
			Math.floor(au.pH * aL.measureText(zU, a1f)), ec = Math.floor((au.a0 - a0) / 2), ee = Math.floor((au.j6 - j6) / 2), a80.style.font = a1f, a80.style.top = Math.floor((ee + 1.4 * a7w + a7u) / au.pH) + "px", a80.style.left = Math
			.floor((ec + (a0 - a7z) / 2) / au.pH) + "px")
	}, this.rA = function() {
		this.uj && (rB.fillStyle = u.mT, rB.fillRect(ec, ee + a7u, a0, j6 - a7u), rB.fillStyle = u.nO, rB.fillRect(ec, ee, a0, a7u), rB.fillStyle = u.mW, rB.lineWidth = bY.vC, rB.strokeStyle = u.mW, rB.strokeRect(ec, ee, a0, j6), rB.fillRect(ec,
				ee + a7u, a0, bY.vC), rB.font = b7.pB.qS(1, .48 * a7u), b7.pB.textAlign(rB, 1), b7.pB.textBaseline(rB, 1), rB.fillText("You are leaving Territorial.io!", Math.floor(ec + (a0 - .5 * a7u) / 2), Math.floor(ee + .55 * a7u)), aH
			.a1r(Math.floor(ec + a0 - .8 * a7u), Math.floor(ee + .25 * a7u), Math.floor(.5 * a7u)), rB.setTransform(1, 0, 0, 1, 0, 0))
	}
}

function dV() {
	var gap, a6U, ec = [0, 0, 0, 0, 0],
		ee = [0, 0, 0, 0, 0],
		m7 = [1, 1, 1, 1, 1],
		ey = [!0, !0, !0, !1, !1],
		eq = (this.fI = [!0, !0, !0, !1, !1], null);
	this.a83 = function(z2, a84) {
		eq = z2, ey = a84, a6U = [bG.a85, bG.xF, bG.a86, bG.a86, bG.a87], this.dR()
	}, this.dR = function() {
		if (aW.qm()) {
			var a6, qU = Math.floor((r.s.v9() ? .261 : .195) * au.pD),
				qV = Math.floor(.9 * qU),
				a4A = Math.floor(.17 * qV);
			if (gap = r.s.v9() ? 2 * bY.gap : bY.gap, m7[0] = qU / eq[0].width, m7[1] = qV / eq[1].width, m7[2] = a4A / eq[2].height, m7[3] = a4A / eq[3].height, m7[4] = a4A / eq[4].height, m7[2] *= 1.7, m7[3] *= 1.07, ec[0] = gap, ec[1] = gap,
				ec[2] = gap, ec[3] = gap, ec[4] = Math.floor(2 * gap + m7[3] * eq[3].width), ee[0] = gap, ee[1] = ee[0] + gap + m7[0] * eq[0].height, ee[2] = ee[1] + gap + m7[1] * eq[1].height, ee[3] = ee[2] + gap + m7[2] * eq[2].height, ee[4] =
				ee[3], !ey[0])
				for (a6 = 0; a6 < 5; a6++) ee[a6] -= m7[0] * eq[0].height + gap;
			if (!ey[1])
				for (a6 = 2; a6 < 5; a6++) ee[a6] -= m7[1] * eq[1].height + gap
		}
	}, this.uj = function() {
		return !(7 === aV.xL() && r.s.v9())
	}, this.gk = function(hc, hd) {
		if (eq && this.uj())
			for (var a6 = ey.length - 1; 0 <= a6; a6--)
				if (ey[a6] && this.fI[a6] && ec[a6] < hc && ee[a6] < hd && hc < ec[a6] + m7[a6] * eq[a6].width && hd < ee[a6] + m7[a6] * eq[a6].height) return n.o(9, n.qM, new a88("You are leaving Territorial.io.", b7.pB.zT(a6U[a6]))), !0;
		return !1
	}, this.rA = function() {
		if (eq && this.uj()) {
			var a6;
			for (rB.imageSmoothingEnabled = !0, a6 = 0; a6 < 5; a6++) ey[a6] && this.fI[a6] && (rB.setTransform(m7[a6], 0, 0, m7[a6], ec[a6], ee[a6]), rB.drawImage(eq[a6], 0, 0));
			rB.setTransform(1, 0, 0, 1, 0, 0)
		}
	}
}

function cG() {
	var a89, a8A, a8B;

	function a8G(a6) {
		var button = aT.ph[a6],
			ec = button.ec,
			ee = button.ee,
			a0 = button.a0,
			j6 = button.j6;
		rB.fillStyle = button.a8E, rB.fillRect(ec, ee, a0, j6), a6 === a89 && (rB.fillStyle = a8B, rB.fillRect(ec, ee, a0, j6)), rB.lineWidth = bY.vC, rB.strokeStyle = a8A, rB.strokeRect(ec, ee, a0, j6),
			function(button) {
				var ec = button.ec,
					ee = button.ee,
					a0 = button.a0,
					j6 = button.j6;
				b7.pB.textAlign(rB, 1), b7.pB.textBaseline(rB, 1), rB.font = button.font, rB.fillStyle = a8A, rB.fillText(button.a2u, Math.floor(ec + a0 / 2), Math.floor(ee + j6 / 2 + .1 * button.fontSize))
			}(button)
	}
	this.a0 = 0, this.j6 = 0, this.ee = 0, this.gap = 0, this.dR = function() {
		a89 = -1, a8A = u.mW, a8B = "rgba(255,255,255,0.16)", this.ph = new Array(7), this.j6 = Math.floor((r.s.v9() ? .123 : .093) * au.pD), this.a0 = Math.floor((r.s.v9() ? 3.96 : 4.2) * this.j6), this.gap = Math.floor(.025 * this.a0);
		var a8C = Math.floor(.26 * this.j6),
			a8D = b7.pB.qS(1, a8C);
		this.ph[0] = {
			ec: 0,
			ee: 0,
			a0: Math.floor(.6 * this.a0 - this.gap / 2),
			j6: this.j6,
			a2u: "Multiplayer",
			font: a8D,
			a8E: "rgba(22,88,22,0.8)",
			fontSize: a8C
		}, a8C = Math.floor(.18 * this.j6), a8D = b7.pB.qS(1, a8C), this.ph[1] = {
			ec: 0,
			ee: 0,
			a0: this.a0 - this.ph[0].a0 - this.gap,
			j6: this.j6,
			a2u: "Single Player",
			font: a8D,
			a8E: "rgba(22,88,88,0.8)",
			fontSize: a8C
		}, this.ph[2] = {
			ec: 0,
			ee: 0,
			a0: this.a0,
			j6: Math.floor(.3 * this.j6),
			a2u: "",
			font: this.ph[1].font,
			a8E: "rgba(100,0,0,0.8)",
			fontSize: this.ph[1].fontSize
		}, this.ph[3] = {
			ec: 0,
			ee: 0,
			a0: this.a0,
			j6: this.j6,
			a2u: "Back",
			font: this.ph[0].font,
			a8E: "rgba(0,0,0,0.8)",
			fontSize: this.ph[0].fontSize
		}, this.ph[4] = {
			ec: 0,
			ee: 0,
			a0: this.a0,
			j6: Math.floor(.3 * this.j6),
			a2u: "The game was updated!",
			font: this.ph[1].font,
			a8E: "rgba(100,0,0,0.8)",
			fontSize: this.ph[1].fontSize
		}, this.ph[5] = {
			ec: 0,
			ee: 0,
			a0: this.ph[0].a0,
			j6: Math.floor(.8 * this.j6),
			a2u: "Reload",
			font: this.ph[0].font,
			a8E: "rgba(0,100,0,0.8)",
			fontSize: this.ph[0].fontSize
		}, this.ph[6] = {
			ec: 0,
			ee: 0,
			a0: this.ph[1].a0,
			j6: this.ph[5].j6,
			a2u: "Back",
			font: this.ph[0].font,
			a8E: "rgba(0,0,0,0.8)",
			fontSize: this.ph[0].fontSize
		}, this.a5E()
	}, this.a5E = function() {
		this.ee = Math.floor(.54 * au.j6), this.ph[0].ec = Math.floor(.5 * au.a0 - .5 * this.a0), this.ph[1].ec = this.ph[0].ec + this.ph[0].a0 + this.gap, this.ph[2].ec = this.ph[3].ec = this.ph[0].ec, this.ph[4].ec = this.ph[5].ec = this.ph[0]
			.ec, this.ph[6].ec = this.ph[1].ec, this.ph[0].ee = Math.floor(.54 * au.j6), this.ph[1].ee = this.ph[0].ee, this.ph[2].ee = Math.floor((au.j6 - this.ph[2].j6 - this.ph[3].j6 - this.gap) / 2), this.ph[3].ee = this.ph[2].ee + this.ph[2]
			.j6 + this.gap, this.ph[4].ee = Math.floor((au.j6 - this.ph[4].j6 - this.ph[5].j6 - this.gap) / 2), this.ph[5].ee = this.ph[6].ee = this.ph[4].ee + this.ph[4].j6 + this.gap
	}, this.a8F = function() {
		a8G(0), a8G(1)
	}, this.a8H = function() {
		a8G(2), a8G(3)
	}, this.a8I = function() {
		a8G(4), a8G(5), a8G(6)
	}, this.xh = function(ec, ee, lF) {
		var a6 = -1;
		return 0 === aV.xL() ? a6 = this.yC(ec, ee, 0, 2) : 3 === aV.xL() ? a6 = this.yC(ec, ee, 3, 1) : 5 === aV.xL() && (a6 = this.yC(ec, ee, 5, 2)), a89 !== a6 && (a89 = a6, lF) && (bb.dZ = !0), -1 !== a6 && (aO.y6(), !0)
	}, this.yC = function(ec, ee, a8J, size) {
		for (var a6 = a8J; a6 < a8J + size; a6++)
			if (ec >= this.ph[a6].ec && ee >= this.ph[a6].ee && ec <= this.ph[a6].ec + this.ph[a6].a0 && ee <= this.ph[a6].ee + this.ph[a6].j6) return a6;
		return -1
	}
}

function a8L() {
	function a8S(a6E) {
		return a6E < 0 ? 0 : 255 < a6E ? 255 : Math.floor(a6E)
	}
	this.a0 = 0, this.j6 = 0, this.uj = !1, this.a8M = 0, this.gap = 0, this.a8N = 0, this.a7u = 0, this.a8O = 0, this.a8P = 0, this.a8Q = 0, this.colors = null, this.dR = function() {
		this.uj = !0, this.a8M = 0, this.resize()
	}, this.resize = function() {
		this.uj && (au.a0 < 1.4 * au.j6 ? this.a0 = Math.floor((r.s.v9() ? .94 : .43) * au.a0) : (this.j6 = Math.floor((r.s.v9() ? .88 : .43) * au.j6), this.a0 = Math.floor(1.4 * this.j6)), this.j6 = this.a0 / 1.4, this.gap = this.a0 / 32, this
			.a7u = Math.floor(.25 * this.j6), this.a8O = (this.j6 - this.a7u - 3 * this.gap) / 2, this.a8P = this.a0 - 3 * this.gap - this.a8O, this.a8Q = (this.j6 - this.a7u - 4 * this.gap) / 3)
	}, this.a8R = function() {
		this.colors = [
			[0, 0, 0],
			[0, 0, 0]
		];
		var os = bf.dk.data[103].value.split("");
		if (os.length < 6)
			for (var ep = 2; 0 <= ep; ep--) this.colors[0][ep] = a8S(256 * Math.random());
		else
			for (var a6 = 2; 0 <= a6; a6--) this.colors[0][a6] = a8S(4 * (10 * parseInt(os[2 * a6]) + parseInt(os[2 * a6 + 1])));
		this.a8T()
	}, this.a8U = function() {
		return [bH.ex(this.colors[0][0], 4), bH.ex(this.colors[0][1], 4), bH.ex(this.colors[0][2], 4)]
	}, this.xk = function(kh, ki, deltaY) {
		var lv = (au.a0 - this.a0) / 2;
		ki -= (au.j6 - this.j6) / 2 + this.a7u, (kh -= lv) < 0 || ki < 0 || kh >= this.a0 || ki >= this.j6 - this.a7u || (lv = Math.floor(3 * ki / (this.j6 - this.a7u)), this.colors[this.a8N][lv] = a8S(this.colors[this.a8N][lv] + (deltaY < 0 ?
			1 : -1) * Math.max(Math.abs(.05 * deltaY), 1)), bb.dZ = !0)
	}, this.gk = function(kh, ki) {
		this.a8M = 0;
		var lv = (au.a0 - this.a0) / 2;
		return ki -= (au.j6 - this.j6) / 2, (kh -= lv) < 0 || ki < 0 || kh >= this.a0 - 1 || ki >= this.j6 - 1 || kh > this.a0 - (.4 * this.a7u + 3 * this.gap) && ki < this.a7u ? (this.uj = !1, !(bb.dZ = !0)) : kh < this.gap || ki < this.gap +
			this.a7u || kh >= this.a0 || ki >= this.j6 - this.gap || (kh < this.gap + this.a8O ? (ki < this.gap + this.a7u + this.a8O && 0 !== this.a8N && (this.a8N = 0, bb.dZ = !0), !0) : kh < this.gap + this.a8O || (kh -= 2 * this.gap + this
				.a8O, ki < this.gap + this.a7u + this.a8Q ? (this.a8M = 1, this.colors[this.a8N][0] = a8S(256 * kh / this.a8P), bb.dZ = !0) : ki < 2 * this.gap + this.a7u + this.a8Q || (ki < 2 * this.gap + this.a7u + 2 * this.a8Q ? (this
					.a8M = 2, this.colors[this.a8N][1] = a8S(256 * kh / this.a8P), bb.dZ = !0) : !(ki >= 3 * this.gap + this.a7u + 2 * this.a8Q) || (this.a8M = 3, this.colors[this.a8N][2] = a8S(256 * kh / this.a8P), bb.dZ = !0))))
	}, this.a8T = function() {
		for (var ep = 2; 0 <= ep; ep--) this.colors[0][ep] = a8S(this.colors[0][ep])
	}, this.a8V = function() {
		for (var ey, os = "", a6 = 0; a6 < 3; a6++)(ey = bH.ex(this.colors[0][a6], 4)) < 10 && (os += "0"), os += ey.toString();
		return os
	}, this.xh = function(kh) {
		0 !== this.a8M && (kh -= 2 * this.gap + this.a8O + (au.a0 - this.a0) / 2, this.colors[this.a8N][this.a8M - 1] = a8S(256 * kh / this.a8P), bb.dZ = !0)
	}, this.y5 = function() {
		0 < this.a8M && (this.a8M = 0, this.a8T(), bf.ps.pt(103, this.a8V()), bb.dZ = !0)
	}, this.rA = function() {
		var lv = (au.a0 - this.a0) / 2,
			lw = (au.j6 - this.j6) / 2;
		rB.setTransform(1, 0, 0, 1, lv, lw), rB.fillStyle = u.mT, rB.fillRect(0, this.a7u, this.a0, this.j6 - this.a7u), rB.fillStyle = u.mf, rB.fillRect(0, 0, this.a0, this.a7u), rB.fillStyle = u.mW, rB.lineWidth = bY.vC, rB.strokeStyle = u.mW,
			rB.strokeRect(-1, -1, this.a0 + 2, this.j6 + 2), rB.fillRect(0, this.a7u, this.a0, bY.vC), rB.font = b7.pB.qS(1, .31 * this.a7u), b7.pB.textBaseline(rB, 1), b7.pB.textAlign(rB, 1), rB.fillText("Choose Your Nation's Color!", Math
				.floor((this.a0 - this.gap - .4 * this.a7u) / 2), Math.floor(.55 * this.a7u)), this.a8W(0), rB.lineWidth = bY.vC, this.a8X(0), this.a8X(1), this.a8X(2), aH.a1r(Math.floor(lv + this.a0 - .4 * this.a7u - this.gap), Math.floor(lw +
				.3 * this.a7u), Math.floor(.4 * this.a7u)), rB.setTransform(1, 0, 0, 1, 0, 0)
	}, this.a8W = function(a6) {
		var hH = this.colors[a6][0],
			qi = this.colors[a6][1],
			a6 = this.colors[a6][2];
		rB.fillStyle = "rgb(" + hH + "," + qi + "," + a6 + ")", rB.fillRect(this.gap, this.a7u + this.gap, this.a8O, 2 * this.a8O + this.gap), rB.lineWidth = bY.vC, rB.strokeStyle = u.mW, rB.strokeRect(this.gap, this.a7u + this.gap, this.a8O, 2 *
			this.a8O + this.gap), rB.fillStyle = hH + qi + a6 < 306 && qi < 150 ? u.mW : u.mN, rB.font = b7.pB.qS(1, .32 * this.a8Q), b7.pB.textAlign(rB, 1), b7.pB.textBaseline(rB, 1), rB.rotate(-Math.PI / 2), rB.fillText("National Color",
			Math.floor(-1.5 * this.gap - this.a7u - this.a8O), Math.floor(this.gap + .5 * this.a8O)), rB.rotate(Math.PI / 2)
	}, this.a8X = function(a6) {
		rB.fillStyle = "rgb(" + (0 === a6 ? 150 : 2 === a6 ? 30 : 0) + "," + (1 === a6 ? 130 : 2 === a6 ? 30 : 0) + "," + (2 === a6 ? 220 : 0) + ")", rB.fillRect(2 * this.gap + this.a8O, this.a7u + this.gap + a6 * (this.gap + this.a8Q), Math
				.floor(this.colors[this.a8N][a6] * this.a8P / 255), this.a8Q), rB.strokeStyle = u.mW, rB.strokeRect(2 * this.gap + this.a8O, this.a7u + this.gap + a6 * (this.gap + this.a8Q), this.a8P, this.a8Q), rB.fillStyle = u.mW, rB.font = b7
			.pB.qS(1, .32 * this.a8Q), b7.pB.textBaseline(rB, 1), b7.pB.textAlign(rB, 0), rB.fillText((0 === a6 ? "Red: " : 1 === a6 ? "Green: " : "Blue: ") + this.colors[0][a6].toString(), 3 * this.gap + this.a8O, Math.floor(this.a7u + this
				.gap + a6 * (this.gap + this.a8Q) + .53 * this.a8Q))
	}
}

function cH() {
	var a8Y, a8Z, a34, a3E, a42, a8a, a8b, a8c, a8d, a1f, fontSize, lg, a8e, a8g, a8f = 0;

	function a8j() {
		return ax.l7.a8k[(a8e + a8f) % ax.l7.a8l]
	}

	function a8h() {
		a8e++, lg = bb.e3, ax.l7.a8m(a8j(), 4) && (a8g = !0, ax.a8n.a8o(a8j()))
	}

	function a8p() {
		0 === a8e ? l.xT(3249) : 1 === a8e && __fx.customLobby.isActive() ? (l.xT(3249), __fx.customLobby.setActive(false)) : (a8e === ax.l7.a8l - 1 && (a8e = -1), a8h())
	}

	function a8w(ee, a4v, a8v) {
		var lv = Math.floor((au.a0 - a3E) / 2) + a8b,
			m9 = lv + Math.floor(a8v * (a3E - 2 * a8b));
		rB.lineWidth = a4v, rB.beginPath(), rB.moveTo(lv, ee), rB.lineTo(m9, ee), rB.lineTo(Math.floor(lv - a8b + a8v * a3E), ee + a34), rB.lineTo(lv - a8b, ee + a34), rB.closePath()
	}
	this.dR = function() {
		aV.setState(6), a8Y = 0, a8Z = 1, a8c = "rgba(0,220,120,0.4)", a8d = "rgba(0,0,0,0.8)", this.resize(), bb.dZ = !0, a8e = 0, a8g = !1, a8h()
	}, this.resize = function() {
		a3E = Math.floor((r.s.v9() ? .5 : .25) * au.pD), a42 = a3E + 12, a34 = Math.floor(.125 * a3E), a8b = 3 * a34, a8a = Math.floor(.225 * a3E), fontSize = Math.floor(.3 * a34), a1f = b7.pB.qS(0, fontSize)
	}, this.a8i = function(eo) {
		a8f = eo
	}, this.xM = function(xH) {
		xH === a8j() && (a8g = !1, a8p())
	}, this.a8q = function(xH) {
		6 !== aV.xL() || a8g || (lg = bb.e3, a8g = !0)
	}, this.gk = function(ec, ee) {
		var lv = Math.floor((au.a0 - a42) / 2),
			lw = Math.floor(.5 * (au.j6 - bY.gap - a34 - a8a)) + a34 + bY.gap;
		return lv < ec && ec < lv + a42 && lw < ee && ee < lw + a8a && (this.yP(), aT.xh(ec, ee, !1), !0)
	}, this.yP = function() {
		ax.l7.xW(3260), __fx.customLobby.setActive(false), n.l7.xV()
	}, this.iR = function() {
		6 === aV.xL() && (a8g ? bb.e3 > lg + 12e3 && l.xT(3250) : bb.e3 > lg + 12e3 && a8p(), 100 < (a8Y += .07 * a8Z * (a8Y < 16 ? 5 + a8Y : 84 < a8Y ? 105 - a8Y : 17)) ? (a8Y = 100, a8Z = -1) : a8Y < 0 && (a8Y = 0, a8Z = 1), a8c = "rgba(0," +
			Math.floor(190 - 1.9 * a8Y) + "," + Math.floor(120 - 1.2 * a8Y) + "," + (.4 + .004 * a8Y) + ")", a8d = "rgba(0," + Math.floor(1.9 * a8Y) + "," + Math.floor(1.2 * a8Y) + "," + (.8 - .004 * a8Y) + ")", bb.dZ = !0)
	}, this.rA = function() {
		var ec = Math.floor((au.a0 - a42) / 2),
			ee = Math.floor(.5 * (au.j6 - bY.gap - a34 - a8a));
		! function(title, ee, a4v, a8v) {
			rB.fillStyle = a8d, a8w(ee, a4v, 1), rB.fill(), rB.fillStyle = a8c, a8w(ee, a4v, a8v), rB.fill(), rB.strokeStyle = u.mW, a8w(ee, a4v, 1), rB.stroke(),
				function(a8y, ee) {
					b7.pB.textAlign(rB, 1), b7.pB.textBaseline(rB, 1), rB.font = a1f, rB.fillStyle = u.mW, rB.fillText(a8y, Math.floor(.5 * au.a0), Math.floor(ee + .58 * a34))
				}(title, ee)
		}(L(102), ee, 3, a8Y / 100),
		function(ec, ee, a0, j6, a2u) {
			rB.fillStyle = u.mR, rB.fillRect(ec, ee, a0, j6), rB.lineWidth = 3, rB.strokeStyle = u.mW, rB.strokeRect(ec, ee, a0, j6);
			var eV = Math.floor(.3 * j6);
			b7.pB.textAlign(rB, 1), b7.pB.textBaseline(rB, 1), rB.font = b7.pB.qS(0, eV), rB.fillStyle = u.mW, rB.fillText(a2u, Math.floor(ec + a0 / 2), Math.floor(ee + j6 / 2 + .1 * eV))
		}(ec, ee + a34 + bY.gap, a42, a8a, L(13))
	}
}

function cI() {
	var e2 = 0;
	this.dR = function() {
		aT.dR(), e2 = 0
	}, this.setState = function(a8z) {
		e2 = a8z
	}, this.xL = function() {
		return e2
	}, this.a90 = function() {
		this.setState(8), ap.xX(), n.rx()
	}, this.yG = function(e) {
		if (!bO.sn) return !1;
		if (!(bb.e3 < 400)) {
			if ("Enter" === e.key || "Escape" === e.key) {
				if (this.a91()) return !0;
				if ("Enter" === e.key) {
					if (0 === e2) return !0;
					if (7 === e2) return !0
				}
			}
			return !1
		}
	}, this.a92 = function() {
		bV.resize()
	}, this.a91 = function() {
		return !!bV.qh()
	}, this.gk = function(ec, ee) {
		!bO.sn || bV.gk(ec, ee) || 6 === e2 && aU.gk(ec, ee) || bU.gk(ec, ee) || (aO.gk(ec, ee), 0 !== e2 && 7 === e2 && ap.gk(ec, ee))
	}, this.xh = function(ec, ee) {
		!aO.a57 && aT.xh(ec, ee, !0) || aO.xh(ec, ee)
	}, this.click = function(ec, ee) {
		aO.y7()
	}, this.xk = function(ec, ee, deltaY) {}, this.a93 = function() {
		aT.a5E(), 0 !== e2 && 7 === e2 && ap.resize(), bb.dZ = !0
	}, this.rA = function() {
		8 !== e2 && 10 !== e2 && (rB.imageSmoothingEnabled = !0, this.uL(), 0 !== e2 && (aO.rA(), aJ.rA(), this.a94(), bU.rA()), 0 !== e2 && (6 === e2 ? aU.rA() : 7 === e2 && ap.rA()), bV.rA(), n.rA())
	}, this.uL = function() {
		var a96, a95;
		if (__fx.makeMainMenuTransparent) rB.clearRect(0, 0, au.a0, au.j6);
		else bO.sn ? (a95 = au.a0 / bO.eg, a96 = au.j6 / bO.eh, rB.setTransform(a95 = a96 < a95 ? a95 : a96, 0, 0, a95, Math.floor((au.a0 - a95 * bO.eg) / 2), Math.floor((au.j6 - a95 * bO.eh) / 2)), rB.drawImage(bO.sp, 0, 0), rB.setTransform(1,
			0, 0, 1, 0, 0), rB.fillStyle = u.mR) : rB.fillStyle = u.mN, rB.fillRect(0, 0, au.a0, au.j6)
	}, this.a94 = function() {
		var ee = Math.floor(.3 * au.j6),
			canvas = aW.a97("territorial.io"),
			hE = (hE = 1.75 * au.j6 / canvas.width) * canvas.width < .98 * au.a0 ? .98 * au.a0 / canvas.width : hE,
			ec = (rB.globalAlpha = .15, rB.imageSmoothingEnabled = !1, Math.floor(.5 * (au.a0 - hE * canvas.width))),
			ec = Math.floor(ec / hE),
			ee = Math.floor(ee - .5 * canvas.height * hE),
			ee = Math.floor(ee / hE);
		rB.setTransform(hE, 0, 0, hE, ec, ee), rB.drawImage(canvas, ec, ee), rB.setTransform(1, 0, 0, 1, 0, 0), rB.globalAlpha = 1, rB.imageSmoothingEnabled = !0
	}
}

function cj() {
	var a7, a9A, a9B, a9C;
	this.a98 = 0, this.a99 = 0, this.dR = function() {
		var canvas, m7;
		7 === aV.xL() && (a7 = bD.a7, a9A = 0, a9B = bb.e3 + 4500, a9C = ax.a2a.a9D() ? 2 : 0, aV.setState(10), rB.imageSmoothingEnabled = !0, aV.uL(), canvas = aW.a97("loading"), m7 = (r.s.v9() ? .396 : .25) * au.pD / canvas.width, rB
			.setTransform(m7, 0, 0, m7, Math.floor((au.a0 - m7 * canvas.width) / 2), Math.floor((au.j6 - m7 * canvas.height) / 2)), rB.imageSmoothingEnabled = !1, rB.drawImage(canvas, 0, 0), rB.setTransform(1, 0, 0, 1, 0, 0))
	}, this.lD = function() {
		0 < a9C && bb.e3 > a9B && (a9C--, a9B += 4500, 0 === bb.a9E) && 0 === bb.jZ() && (0 === a9C && ax.l7.xO < ax.l7.a9F && (ax.l7.xO += ax.l7.a9G), ax.l7.a8m(ax.l7.xO, 5))
	}, this.a9H = function() {
		var g4, a6;
		return 10 === aV.xL() && (g4 = bD.a7, a6 = bD.oB, ax.a2a.a9I(a7), a7 = null, bD.dR(g4), bD.oB = a6, !0)
	}, this.a9J = function() {
		10 === aV.xL() && 2 <= ++a9A && (ax.a2a.a9I(a7), a7 = null)
	}
}

function cg() {
	var a9L, a9M, a9N, a9O, a9P, a9Q, a9R, p6, a9T, a9V, a9W, a9X, a9Y, a9a, a9b, a9c, a9d, a9e, a9S = 48,
		a9Z = [0, 0, 0, 0];

	function a9i(a6, nl) {
		a6 = a9R[a6].getContext("2d", {
			alpha: !0
		});
		a6.clearRect(0, 0, a9S, a9S), ae.ss.vD(nl, a6, 0, 0, a9S)
	}

	function a9h(a6, z2) {
		var a6 = a9R[a6].getContext("2d", {
				alpha: !0
			}),
			zoom = (a6.clearRect(0, 0, a9S, a9S), a9S / z2.width),
			e4 = a9S / z2.height,
			zoom = e4 < zoom ? e4 : zoom;
		a6.imageSmoothingEnabled = !0, a6.setTransform(zoom, 0, 0, zoom, Math.floor((a9S - zoom * z2.width) / 2), Math.floor((a9S - zoom * z2.height) / 2)), a6.drawImage(z2, 0, 0), a6.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a9m(eq, hH, a9p, hF) {
		hF.beginPath(), hF.moveTo(eq, eq), hF.lineTo(eq + Math.cos(a9p) * hH, eq + Math.cos(a9p + 1.5 * Math.PI) * hH), hF.stroke()
	}

	function aA5() {
		if (7 === aV.xL()) {
			for (var hO, z2, hF, e4, eo = -1, a6 = p6.length - 1; 0 <= a6; a6--)
				if (null === p6[a6].canvas) {
					eo = a6;
					break
				} - 1 !== eo && (null !== (hO = a9t(p6[eo].a9x, p6[eo].a9y)) ? p6[eo].canvas = hO : (hO = bO.aA6(p6[eo].a9x, p6[eo].a9y), (z2 = document.createElement("canvas")).width = 128, z2.height = 128, hF = z2.getContext("2d", {
				alpha: !1
			}), e4 = 128 / hO.eh, e4 = Math.max(128 / hO.eg, e4), hF.imageSmoothingEnabled = !0, hF.setTransform(e4, 0, 0, e4, (128 - e4 * hO.eg) / 2, (128 - e4 * hO.eh) / 2), hF.drawImage(hO.sp, 0, 0), p6[eo].canvas = z2), bb.dZ = !0)
		}
	}

	function a9t(a9x, a9y) {
		for (var a6 = p6.length - 1; 0 <= a6; a6--)
			if (null !== p6[a6].canvas && p6[a6].a9x === a9x && p6[a6].a9y === a9y) return p6[a6].canvas;
		return null
	}
	this.dS = function() {
			a9Y = [L(103), L(104), L(105), L(106)]
		}, this.dR = function() {
			var a6;
			for (a9e = 0, a9V = -1, aV.setState(7), p6 = [], this.resize(), a9R = new Array(13), a6 = a9R.length; 0 <= a6; a6--) a9R[a6] = document.createElement("canvas"), a9R[a6].width = a9S, a9R[a6].height = a9S;
			for (a6 = 0; a6 < 7; a6++) ! function(fz) {
				var a9k, hF = a9R[fz - 2].getContext("2d", {
						alpha: !0
					}),
					a9j = 1.5 * Math.PI,
					eq = Math.floor(.5 * a9S),
					hH = Math.floor(.48 * a9S);
				hF.lineWidth = 2, hF.strokeStyle = u.mW, hF.clearRect(0, 0, a9S, a9S);
				for (var a6 = 0; a6 < fz; a6++) a9k = a9j + 2 * Math.PI / fz,
					function(a6, eq, hH, a9j, a9k, hF) {
						hF.fillStyle = bc.a9o[a6], hF.beginPath(), hF.arc(eq, eq, hH, a9j, a9k), hF.lineTo(eq, eq), hF.fill()
					}(a6 + 1, eq, hH, a9j, a9k, hF), 0 !== a6 && a9m(eq, hH, a9j, hF), a9j = a9k;
				a9m(eq, hH, 1.5 * Math.PI, hF),
					function(eq, hH, hF) {
						hF.beginPath(), hF.arc(eq, eq, hH, 0, 2 * Math.PI), hF.stroke()
					}(eq, hH, hF)
			}(a6 + 2);
			a9h(7, aW.get(4)), a9i(8, ae.ug.v1 + ae.ug.vI), a9i(9, ae.ug.v1 + ae.ug.vG), a9i(10, 1024 - ae.ug.uy), a9h(11, aW.get(19)), a9h(12, aW.get(20)), bb.dZ = !0
		}, this.yO = function() {
			this.xX(), ax.l7.xW(3240), __fx.customLobby.setActive(false), aV.setState(0), n.o(5, 5)
		},
		__fx.customLobby.setLeaveFunction(() => this.yO()), this.xX = function() {
			p6 = [], a9R = []
		}, this.a32 = function() {
			return a9X
		}, this.resize = function() {
			var a9q, sb, a4I, a9r;
			for (a9N = [0, 0], a9T = [0, 0, 0, 0], a9d = r.s.v9() ? (a9W = Math.floor(.8 * .4 * au.pD), a9X = Math.floor(.56 * a9W), a9T[0] = bY.gap, au.a0 < au.j6 ? (a9T[1] = a9X + 2 * bY.gap, a9T[2] = au.a0 - 3 * a9T[0], a9T[3] = au.j6 - 3 * bY
					.gap - a9X, a9b = Math.floor(.95 * a9X), a9c = Math.floor((au.a0 - a9W - bY.gap) / 2), Math.floor(bY.gap + a9X / 2)) : (a9T[1] = bY.gap, a9T[2] = au.a0 - 3 * bY.gap - a9W, a9T[3] = au.j6 - 2 * bY.gap, a9b = Math.floor(.8 *
					a9W), a9T[3] - a9X < a9W && (a9b = Math.floor(.8 * (a9T[3] - a9X)), a9b = a2F(a9X, a9b)), a9c = Math.floor(au.a0 - a9W / 2 - bY.gap), a2F(a9d = Math.floor(bY.gap + a9X + (a9T[3] - a9X) / 2), Math.floor(a9X + 2 * bY.gap +
					a9b / 2)))) : (a9W = Math.floor(.2016 * au.pD), a9X = Math.floor(.56 * a9W), a9T[2] = Math.floor(.5 * au.a0), a9T[3] = Math.floor(.5 * au.j6), a9T[1] = Math.floor(.45 * (au.j6 - a9T[3])), a9T[0] = Math.floor((au.a0 - a9T[2]) / 2),
					a9b = Math.floor(.75 * a9X), a9c = Math.floor(au.a0 / 2), Math.floor(a9T[1] + a9T[3] + (au.j6 - a9T[3] - a9T[1]) / 2)), a9a = b7.pB.qS(1, .65 * a9X / 4), a9q = sb = 1; a9q * sb < p6.length;) a9T[3] / (sb + 1) < a9T[2] / (a9q +
				1) ? a9q++ : sb++;
			a4I = (a9T[2] - (a9q - 1) * bY.gap) / a9q, a9r = (a9T[3] - (sb - 1) * bY.gap) / sb, a9L = a4I < a9r ? a4I : a9r, a9M = Math.floor(a9L), a9Q = b7.pB.qS(1, .5 * a9L / 5), a9N[0] = a9q, a9N[1] = sb, a9O = a9T[0] + Math.floor((a9T[2] - a9N[
				0] * a9L - (a9N[0] - 1) * bY.gap) / 2), a9P = a9T[1] + Math.floor((a9T[3] - a9N[1] * a9L - (a9N[1] - 1) * bY.gap) / 2)
		}, this.pt = function(a9s, g4) {
			var a6, e4, canvas, eV = p6.length;
			for (a9Z = a9s, a6 = 0; a6 < g4.length; a6++) canvas = a9t(g4[a6].eB, g4[a6].mapSeed), p6.push({
				a9u: g4[a6].id,
				a9v: g4[a6].a9v,
				a9w: g4[a6].isContest,
				a9x: g4[a6].eB,
				a9y: g4[a6].mapSeed,
				joined: g4[a6].a9z,
				a2z: g4[a6].a8v,
				aA0: g4[a6].aA0,
				canvas: canvas,
				aA1: g4[a6].aA1,
				aA2: g4[a6].aA2,
				aA3: g4[a6].aA3
			});
			for (a6 = eV - 1; 0 <= a6; a6--) p6.shift();
			if (-1 !== a9V)
				for (e4 = a9V, a9V = -1, a6 = p6.length - 1; 0 <= a6; a6--)
					if (p6[a6].a9u === e4) {
						a9V = e4;
						break
					}(p6.length > a9e || p6.length < a9e) && (a9e = p6.length, this.resize()), this.aA4(), bb.dZ = !0
		}, this.aA4 = function() {
			for (var a6 = p6.length - 1; 0 <= a6; a6--) null === p6[a6].canvas && setTimeout(aA5, 0)
		}, this.gk = function(ec, ee) {
			return 4 * ((ec - a9c) * (ec - a9c) + (ee - a9d) * (ee - a9d)) <= a9b * a9b ? (this.yO(), aT.xh(ec, ee, !1), !0) : function(ec, ee) {
				var eo, ep, lv, lw;
				if (0 !== p6.length) {
					var a6 = 0;
					for (lw = a9P, ep = 0; ep < a9N[1]; ep++) {
						for (lv = a9O, eo = 0; eo < a9N[0]; eo++) {
							if (lv < ec && ec < lv + a9L && lw < ee && ee < lw + a9L) return ax.a8n.aA8(p6[a6].a9u), a9V = p6[a6].a9u !== a9V ? p6[a6].a9u : -1, bb.dZ = !0;
							if (++a6 >= p6.length) return !1;
							lv += a9L + bY.gap
						}
						lw += a9L + bY.gap
					}
				}
				return !1
			}(ec, ee)
		}, this.rA = function() {
			var eo, ep, ec, hH, zoom, a6 = 0,
				ee = a9P;
			if (rB.imageSmoothingEnabled = !0, rB.lineWidth = 3, hH = Math.floor(.5 * a9b), rB.fillStyle = u.mR, rB.beginPath(), rB.arc(a9c, a9d, hH, 0, 2 * Math.PI), rB.fill(), rB.strokeStyle = u.mW, rB.beginPath(), rB.arc(a9c, a9d, hH, 0, 2 * Math
					.PI), rB.stroke(), hH = aW.get(0).height, zoom = .6 * a9b / hH, rB.setTransform(zoom, 0, 0, zoom, Math.floor(a9c - .56 * zoom * aW.get(0).width), Math.floor(a9d - .5 * zoom * hH)), rB.drawImage(aW.get(0), 0, 0), rB.setTransform(1,
					0, 0, 1, 0, 0), function() {
					rB.fillStyle = u.mR, rB.fillRect(au.a0 - a9W - bY.gap, bY.gap, a9W, a9X), 0 <= a9V ? (rB.fillStyle = u.mo, rB.fillRect(au.a0 - a9W - bY.gap, bY.gap, a9W, Math.floor(.25 * a9X))) : (rB.fillStyle = u.nF, rB.fillRect(au.a0 - a9W - bY
						.gap, bY.gap + Math.floor(.25 * a9X), a9W, Math.floor(.25 * a9X)));
					rB.strokeStyle = u.mW, rB.strokeRect(au.a0 - a9W - bY.gap, bY.gap, a9W, a9X), rB.fillStyle = u.mW, rB.font = a9a, b7.pB.textBaseline(rB, 1);
					for (var ee, aAC = Math.floor(.04 * a9W), a1u = Math.floor(.08 * a9X), a6 = 3; 0 <= a6; a6--) ee = Math.floor(bY.gap + (a6 + 1) * (a9X + 2 * a1u) / 5 - a1u), b7.pB.textAlign(rB, 0), rB.fillText(a9Y[a6], au.a0 - a9W - bY.gap + aAC,
						ee), b7.pB.textAlign(rB, 2), rB.fillText(b7.wv.a05(a9Z[a6]), au.a0 - bY.gap - aAC, ee)
				}(), 0 !== p6.length)
				for (ep = 0; ep < a9N[1]; ep++) {
					for (ec = a9O, eo = 0; eo < a9N[0]; eo++) {
						if (! function(a6, ec, ee) {
								var zoom, ep, aAD, aAF, aAG;
								null === p6[a6].canvas ? (rB.fillStyle = u.mR, rB.fillRect(ec, ee, a9M, a9M)) : (zoom = a9M / 128, rB.setTransform(zoom, 0, 0, zoom, ec, ee), rB.drawImage(p6[a6].canvas, 0, 0), rB.setTransform(1, 0, 0, 1, 0, 0));
								a9V === p6[a6].a9u ? (function(ec, ee) {
									var qU = Math.floor(.2 * a9M),
										qV = Math.floor(.3 * qU);
									rB.fillStyle = u.mq, rB.fillRect(ec + a9M - qU, ee, qU, qU), rB.fillStyle = u.mN, rB.fillRect(ec + a9M - qU, ee, 2, qU), rB.fillRect(ec + a9M - qU, ee + qU - 2, qU, 2), aH.a1r(ec + a9M - qU + qV, ee + qV,
										qU - 2 * qV), rB.setTransform(1, 0, 0, 1, 0, 0)
								}(ec, ee), rB.lineWidth = 3, rB.fillStyle = u.mq) : rB.fillStyle = u.mP;
								aAF = Math.floor(a9L / 4), rB.fillRect(ec, ee, aAF, aAF), aAG = Math.floor(ee + .8 * a9L), rB.fillRect(ec, aAG, a9M, Math.floor(a9L / 5)),
									function(a6, ec, ee) {
										var zoom;
										p6[a6].a9w && (a6 = aW.get(4), zoom = .5 * a9L / a6.width, rB.setTransform(zoom, 0, 0, zoom, Math.floor(ec + (a9L - zoom * a6.width) / 2), Math.floor(ee + (a9L - zoom * a6.height) / 2)), rB.globalAlpha = .6, rB
											.drawImage(a6, 0, 0), rB.globalAlpha = 1, rB.setTransform(1, 0, 0, 1, 0, 0))
									}(a6, ec, ee);
								var aAI = new Array(p6[a6].aA1);
								if (p6[a6].aA1) {
									for (ep = aAD = 0; ep < p6[a6].aA1; ep++) p6[a6].aA2[ep] = b7.uR.zE(p6[a6].aA2[ep], a9Q, .4 * a9L), aAI[ep] = ("" === p6[a6].aA2[ep] ? L(107) : "[" + p6[a6].aA2[ep] + "]: ") + p6[a6].aA3[ep];
									for (ep = 0; ep < p6[a6].aA1; ep++) aAD = Math.max(aAD, aL.measureText(aAI[ep], a9Q));
									aAD += .05 * a9L, ep = 5 === p6[a6].aA1, aAF = ep ? ee + aAF : Math.max(ee + .8 * a9L - .11 * p6[a6].aA1 * a9L, ee + aAF), aAG = ep ? aAG : Math.min(aAF + .11 * p6[a6].aA1 * a9L + .05 * a9L, aAG), rB.fillRect(ec,
										aAF, aAD, aAG - aAF)
								}
								for (rB.font = a9Q, b7.pB.textBaseline(rB, 1), b7.pB.textAlign(rB, 0), rB.fillStyle = u.nA, rB.fillText(p6[a6].joined.toString(), Math.floor(ec + .22 * a9L), Math.floor(ee + .9 * a9L)), rB.fillStyle = u.mW, ep =
									0; ep < p6[a6].aA1; ep++) rB.fillText(aAI[p6[a6].aA1 - ep - 1], Math.floor(ec + .03 * a9L), Math.floor(ee + .77 * a9L - .11 * ep * a9L));
								b7.pB.textAlign(rB, 2), rB.fillStyle = u.mw, rB.fillText(p6[a6].a2z.toString(), Math.floor(ec + .81 * a9L), Math.floor(ee + .9 * a9L)), rB.strokeStyle = a9V === p6[a6].a9u ? u.mp : u.mY, rB.strokeRect(ec, ee, a9M,
									a9M), aAG = Math.floor(.16 * a9L), zoom = aAG / a9S, rB.setTransform(zoom, 0, 0, zoom, Math.floor(ec + .33 * aAG), Math.floor(ee + .33 * aAG)), a9R.length > p6[a6].a9v && rB.drawImage(a9R[p6[a6].a9v], 0, 0);
								rB.setTransform(zoom, 0, 0, zoom, Math.floor(ec + .15 * aAG), Math.floor(ee + a9L - 1.08 * aAG)), rB.drawImage(a9R[11], 0, 0), rB.setTransform(zoom, 0, 0, zoom, Math.floor(ec + a9L - 1.05 * aAG), Math.floor(ee + a9L -
									1.15 * aAG)), rB.drawImage(a9R[12], 0, 0), rB.setTransform(1, 0, 0, 1, 0, 0)
							}(a6, Math.floor(ec), Math.floor(ee)), ++a6 >= p6.length) return;
						ec += a9L + bY.gap
					}
					ee += a9L + bY.gap
				}
		}
}

function cJ() {
	var aAK, canvas, wR, aAL;

	function aAR(oB, name, aAS, os) {
		wR[oB] = name, canvas[oB] = new Image, canvas[oB].onload = function() {
			! function(oB, aAS) {
				var zw, zx = null;
				7 === aAS ? zw = b7.yV.zz : 8 === aAS ? (zw = b7.yV.a02, zx = .1) : 3 === aAS ? (zw = b7.yV.a00, zx = .06) : 5 === aAS ? zw = b7.yV.a03 : 6 === aAS ? zw = b7.yV.zy : 4 === aAS && (zw = b7.yV.a04);
				canvas[oB] = b7.yV.zv(canvas[oB], zw, zx)
			}(oB, aAS), aAU()
		}, canvas[oB].onerror = function(e) {
			console.error("Error loading image at index", oB, "Error:", e), aAU()
		}, canvas[oB].src = "data:image/png;base64," + os
	}

	function aAU() {
		aAK--, aAO()
	}

	function aAO() {
		0 === aAK && (aAK = -1, aAQ(), bb.dZ = !0, canvas[7] = aAL, canvas[8] = aAL, canvas[9] = aAL, canvas[10] = aAL, 5 === n.qM) && n.aAW().aAX.resize()
	}

	function aAQ() {
		aG.a18(), bU.a83([canvas[8], canvas[16], canvas[9], canvas[9], canvas[10]], [2 !== r.id, 1 !== r.id, !0, !0, !0]), ae.ss = new ui, ae.ss.dR(), ar.dS()
	}
	this.dR = function() {
		if (void 0 === canvas) {
			aAK = 23, canvas = new Array(aAK), wR = new Array(aAK), (aAL = document.createElement("canvas")).width = 1;
			for (var a6 = aAK - (aAL.height = 1); 0 <= a6; a6--) canvas[a6] = aAL;
			aAQ(), aAR(0, "exit", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAFYAAABGBAMAAACkrn5fAAAAHlBMVEUAAAAiJCI4OjdcXltoameIioejpqPExsPY29j///9xarZIAAAAyUlEQVRIx+3WQQqCQBTG8TdOB5DUI+S6nRcoPIFhu1bBHGGO4Any3TYxAkWTv1DSYr71D4b5mOE9kWmszkeC/ZptT6Ocl+xj5qgtbVR1iZn9VE2wU2uO2Jryhm2h2OaKbdZgu/NKrXVK7f6q1JpaqTWFYpvrUtqhPTTYpst0aBOv2Drltlxh392iu0U1t5I4biX13PZvF7+zvOFWihXWlNy+aqZ/M3LcivXcds1xK9kKK3GYAVtYe+8CZ/c/7Br9blSNcgn75O/tE26TasUvH0ImAAAAAElFTkSuQmCC"
					), aAR(1, "victory", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADYAAAAKAQMAAADFMz9IAAAABlBMVEUAAAD///+l2Z/dAAAASUlEQVQI12M4lvj+++efLQzHkoH0jxaGI+yMbcIcZxiOpEHoMyD6xx+GHBB9oIIhA0Q/MGCoSAfSBQYMBskP2z9bAOlEIC1hAADJYSFMvxXXTAAAAABJRU5ErkJggg=="), aAR(2, "defeat", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aAR(3, "orders", 6,
					"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"
					), aAR(4, "crown", 4,
					"iVBORw0KGgoAAAANSUhEUgAAANIAAADSCAIAAACw+wkVAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0xMi0yM1QxNDowNDo0NyswMzozMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1ZmFkNDE3NC03OWNiLTUwNDgtYWIyMi04NThmMGExODUzZTEiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4ZDQ1NTIyYS02MDRlLWYxNDUtYWM3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"
					), aAR(5, "arena", 6, "iVBORw0KGgoAAAANSUhEUgAAACsAAAAKAQMAAAAXYzUQAAAABlBMVEUAAAD///+l2Z/dAAAARklEQVQI12OwqbdXOHyAoabe3uD4AYaURAOLYw4gygZE1dvpAKl/FXZq/g8Y/tUYGAOpY3kGxj4JDMfS7Q3PAKlke4MzCQCHpxoxsfTs8gAAAABJRU5ErkJggg=="),
				aAR(6, "territorial.io", 6,
					"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phjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAA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jz//+c+xZMmS+PWvfx3Lly9PnQXUssWLF8c3vvGN1BmZM3To0Jg1a1bqDBJp3rx5LF++PHbcccfUKZm2dOnS+PrXv546AwAAAAAAAAAAAACAWlYvdQAAAAAAAAAAAAAAAGxLRUVFcfzxx8fhhx8eBxxwQLRv3z6aNm2aOiuv7bDDDrHffvvFfvvtFyeddFJcddVVsWrVqnjppZdi8eLFcd9998Wrr76aOhMA8t7IkSON9uSAAw44II455piYP39+6hQAAAAAAAAAAAAAAGqR4R4AAAAAAAAAAAAAAPJe7969o0+fPtG9e/fo1KlTNGrUKHVSnVZQUBB77rln7LnnntG3b9+49NJL469//Ws899xz8cQTT8Ttt98eH330UepMAMg7/fv3T53APw0ZMsRwDwAAAAAAAAAAAABAHWe4BwAAAAAAAAAAAACAvNOyZcs49dRT49BDD41u3bpF8+bNUydlWkFBQbRp0ybatGkTJ554Ylx77bXxwgsvxJNPPhn33HNPLF26NHUiAOS83r17x9577506g3864ogjon79+rFhw4bUKQAAAAAAAAAAAAAA1BLDPQAAAAAAAAAAAAAA5IX9998/TjnllDj88MNj//33j3r1XBKfq0pKSuKggw6Kgw46KC688MJYtmxZPPnkk3HXXXfFU089lToPAHLSwIEDUyfwb5o2bRpnn312zJw5M3UKAAAAAAAAAAAAAAC1xKcUAQAAAAAAAAAAAADIWd26dYvBgwfHEUccER06dIiCgoLUSVRTQUFBdOjQITp06BDnnHNOrFixIhYsWBCzZ8+ORYsWpc4DgJzRs2fP1Al8QZ8+fQz3AAAAAAAAAAAAAADUYYZ7AAAAAAAAAAAAAADIKR06dIgzzzwzevfuHZ06dTLWU8e0adMmvve978XZZ58dr776asydOzdmzpwZK1asSJ0GAMkccsghsccee6TO4AsOOuig1AkAAAAAAAAAAAAAANSiwtQBAAAAAAAAAAAAAABQv379GD58eCxcuDD++Mc/xsiRI6Nz585Ge+qwgoKC2GeffWLEiBHx5z//OZ588sk477zzoqioKHUaAGx3/fr1S53AlygtLY3evXunzgAAAAAAAAAAAAAAoJbUSx0AAAAAAAAAsK3df//9sdtuu6XOAHLE9OnT44477kidwSaMGzfOgZR1wG233RYzZ85MnUEeuuWWW2KfffZJnUEVvffee16zAagVRx55ZJx99tlx1FFHRdOmTVPnkEj9+vWjV69e0atXrxg/fnw8/PDDMW3atHj++edTpwHAdtG9e/fUCWzC0UcfHfPmzUudAQAAAAAAAAAAAABALTDcAwAAAAAAANQ5Xbp0iT333DN1BpAjdt9999QJbMacOXOivLw8iouLU6ewFZo2bWq4h2rr2bNnDBw4MIqKilKnUEVXXHFF6gQA6pD69evHiBEj4uSTT479998/dQ45plmzZnHaaafFwIEDY8mSJTF79uy48cYbU2cBQK0ybpy7unbtmjoBAAAAAAAAAAAAAIBaUpg6AAAAAAAAAACA7HrxxRfjvvvuS53BVmrXrl2cddZZqTPIM6NGjTLak0dWrVoV48aNS50BQB3QsWPHuOWWW+Lvf/97TJ482WgPm1VUVBQHHXRQXH/99bFy5cqYMmVKlJaWps4CgG1u//33j2bNmqXOYBP23nvv1AkAAAAAAAAAAAAAANQSwz0AAAAAAAAAACQ1bty4WLduXeoMttK5556bOoE80rlz5zjmmGNSZ1AN11xzTVRUVKTOACCPHXPMMfHQQw/F888/H6eddprxFaptjz32iAsvvDBWrFgRs2fPjs6dO6dOAoBt5rDDDkudwGbstttu0bp169QZAAAAAAAAAAAAAADUAsM9AAAAAAAAAAAktXLlyrjjjjtSZ7CVunbtGv3790+dQZ4oKyuLBg0apM6gil588cWYNm1a6gwA8tSgQYNi8eLF8cgjj8Q3v/lN7wHYajvuuGMMGjQolixZEg8++GD07NkzdRIAbLX27dunTmALevTokToBAAAAAAAAAAAAAIBaYLgHAAAAAAAAAIDkxo4dG++//37qDLbSj370o9QJ5IFWrVrFcccdlzqDKtq4cWNceumlqTMAyEPf+9734oUXXojZs2fHN77xjSgoKEidRB1TXFwcxx57bDzxxBMxb968OPLII1MnAUCNfe1rX0udwBZ06tQpdQIAAAAAAAAAAAAAALXAcA8AAAAAAAAAAMmtWbMmbrrpptQZbKVevXpFr169UmeQ48rLy6NRo0apM6iixx9/PO6///7UGQDkkWHDhsUrr7wSN9xwQ+y3336pc8iAoqKiOProo2PevHmxYMECAz4A5KUWLVqkTmALvvrVr6ZOAAAAAAAAAAAAAACgFhju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FpLMnDkzmjZtmp1RdEpLS7MTAAAAAAAAAFhKDbIDAAAAAAAAAACgEAwdOjR23333qKioyE5hMcrKyuKUU06JX/ziF9kpNebggw822lPH3HDDDUZ7AOqhX//610Z7CtT8+fPj5ptvjr59+0ZVVVV2TkEZPnx4PPvss3HddddFx44ds3NYRj169Iju3bvH2LFjs1MAAChSO+ywQ/Ts2TM23njjWGeddWLNNdes80MFy2qVVVaJVVZZJbp06fKtf//ZZ5/FO++8E//6179izJgx8fjjj8f777+fVAnA8tS2bds46KCDomfPnrHRRhtFu3btspOW2P//eLbRRhvFvvvuGxdddFF88sknMW7cuBg7dmzcc889fucEAAAAAAAAAECdVBIR87MjAAAAAAAAAGrSv//971hzzTWzM4raBx98EGuvvXZ2BkCtu+yyy+K4447LzqAa5s6dG926dYu33347O6VGjB49Onr06JGdwQIfffRRdOrUKebNm5edAsASeu+99/w8W4Bmz54dQ4YMiUsvvTQ7paCVl5fHyJEjY/vtt89OYRndcMMNcdRRR2VnUEe89NJLsemmm2ZnFJ1+/frFddddl50BAMtdw4YNY++9946tt946unfvHuutt140b948O6vOmj9/fnz00Ucxbty4GDNmTDz22GPx4osvZmcBsJS6d+8eBx98cGy11VbRtWvXaNCgQXbScjdhwoR44YUX4vHHH4877rjD86mwnMycOTOaNm2anVF0SktLsxMAAAAAAAAAWEqGewAAAAAAAICCY7gnn+EeoFiVl5fHW2+9Fa1bt85OoRpuvvnmOPzww7Mzltmuu+4af/rTn7IzWMivf/3ruOSSS7IzAFhCBx98cNx8883ZGdSwKVOmxGGHHRaPPPJIdkrRuPTSS6N///5RVlaWncJS+vjjj2ONNdbIzqCOMNyTw3APAIWsd+/esdtuu8UWW2wRG2ywQTRp0iQ7qV77z3/+E6+99lq88MILMXLkyHj33XezkwBYhE6dOsWRRx4ZO+20U2ywwQZRUlKSnZTmyy+/jOeffz7uvffeuOmmm6Kqqio7CQqG4Z4chnsAAAAAAAAA6i/DPQAAAAAAAEDBMdyTz3APUMzOOuusGDJkSHYG1fDll19Gp06dYsqUKdkpy+Svf/1rbL311tkZLPDGG29Et27dsjMAWApPPvlkbLPN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ZwAAUIPatm0bd955Zzz22GPxk5/8JDuHeqisrCz22GOPGDNmTFx22WXRsGHD7CSAGtOtW7d45ZVXYu+9985OYRmsscYacffdd8dZZ52VnQIAAAAAAAAAQB1nuAcAAAAAAAAAAGrBxIkT45ZbbsnOoBp23nnn6NSpU3bG/zjyyCOzE1hg1KhR8dRTT2VnALAMDj744OwElkJlZWWccsopMWHChOwUatCbb74ZJ510UnzzzTfZKSzCLrvskp0AAEANOfPMM+ONN96IfffdNxo0aJCdQz3XvHnzOO644+Ktt96KQw45JDsHYJn16dMn/vKXv8QGG2yQnUINaNSoUQwZMiQefPBBI3MAAAAAAAAAAPwgwz0AAAAAAAAAAFBLBg0aFJ999ll2BouxwgorxODBg7MzvuWggw6KLl26ZGcQEbNnz46BAwdmZwCwjHr37p2dwFK46aab4tZbb83OYDm47bbb4qabbsrOYBG23HLL7AQAAJZR796947XXXoszzjgjVl555ewcCsxaa60VN910Uzz22GOx7rrrZucALJWBAwfGjTfeGKusskp2CjXs5z//ebz88sseowAAAAAAAAAA+F6GewAAAAAAAAAAoJbMmDEjbrjhhuwMqmHPPfeMli1bZmf8V//+/bMTWOC2226LN998MzsDgGWw0047xRprrJGdwRJ6/fXX4+ijj87OYDn61a9+FePHj8/O4Ad07NjRwaYAAPVU48aN4/e//338+c9/jm7dumXnUOC22267GD16dAwePDg7BWCJXHvttTFixIho1KhRdgrLSbdu3eKvf/1rbLXVVtkpAAAAAAAAAADUMYZ7AAAAAAAAAACgFg0dOjQmTpyYncFilJeX15lD5XbZZZfYdNNNszOIiM8++ywGDBiQnQHAMvrFL36RncASmjNnTvTv3z+qqqqyU1iOKisr45hjjok5c+Zkp/A9SkpKYu+9987OAABgCe2+++4xbty4OPzww6Nhw4bZORSJlVZaKc4+++x48cUXo2vXrtk5AItUWloa999/fxx55JFRUlKSncNy1rZt23jggQdin332yU4BAAAAAAAAAKAOMdwDAAAAAAAAAAC1qLKyMq644orsDKph//33j8aNG2dnxIknnuiQqDrimmuuienTp2dnALCMevXqlZ3AErrmmmvihRdeyM6gFjz77LNxzTXXZGfwA7ba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XFRVVWXnLFcnnHBC7LfffjF58uTsFBY44ogjshMAKDAbbLBBdgIAAAAAAAAAAAsx3AMAAAAAAAAAAEXq+uuvj9deey07A37QXXfdFW+88UZ2BgB1WIsWLbITWMg777yTnQAAALDM9t9//+wEFjJmzJjYcsst4/77789OqTX3339/bL311jFu3LjsFCKid+/e0axZs+wMAApIhw4dshMAAAAAAAAAAFhIg+wAAAAAAAAAAAAgz/nnnx933nlnlJSUZKfAt0ybNi0GDBiQnQFAHdapU6do2LBhdgYLGTt2bHYCAADAMtlyyy1jk002yc5ggbvuuisOPPDAqKqqyk6pdW+++WZsuumm8fDDD0evXr2yc4raSiutFP369YuLL744OwWoY6ZNmxZTp06NL774Ij7//PP46quvIiJi5syZ0bx584iIaNSoUZSXl8eKK64YK6+8cqy66qrRuHHjzGzqgDXWWCM7AQAAAAAAAACAhRjuAQAAAAAAAACAInb33XfHscceGz/96U+zU+Bbrr322pgyZUp2BgB12DrrrJOdwELmzJljuAcAAKj3jj76aEP3dcD8+fPjiiuuiBNPPDE7JdWcOXNiu+22i3vvvTd233337JyitsceexjugSJWVVUV77zzTvzrX/+KcePGxauvvhrPPPNMTJ8+famut/7668emm24a3bp1i/XWWy822GCDaN++ve9BishKK60U66+/frz55pvZKQAAAAAAAAAAhOEeAAAAAAAAAAAoemeffXY88sgjUVZWlp0CERExYcKEOOOMM7IzAKjjVl999ewEFvLZZ59lJwAAACyTsrKy2HHHHbMzit78+fPjnHPO8TviBaqqqmLPPfeMe+65J/baa6/snKK16aabRocOHeL999/PTgFqyaxZs+LFF1+Mxx9/PEaOHBkffvhhjV37zTff/J/Blg4dOsTee+8dvXv3jk033TRWWmmlGrsfdVPPnj0N9wAAAAAAAAAA1BGl2QEAAAAAAAAAAECuJ598Mh577LHsDPiviy++OCorK7MzAKjjVltttewEFjJlypTsBAAAgGVy5JFHRsuWLbMziprRnh+27777xiOPPJKdUbQaNmwYRx55ZHYGsJxVVVXFyy+/HKecckq0adMmtt9++7joootqdLTnh7z//vtx4YUXxg477BCtWrWKE044IZ599tn45ptvlvu9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222XnUIttWvXLh588MHo0KFDdgq19Pjjj2cnAADUi2nTpmUnFJX9998/tt566+wMAACARrHddttFeXl5dgYAAAAAAAAAG8BwDwAAAAAAAAAANICKioooLXV7TiGaOXNmjB8/Pjvjcy1evDhuueWW7AxqoUWLFjFixIjsDAA20NKlS2Py5MnZGWykr33ta/Hggw86DK0JKC8vj4cffji6dOmSnUItrVu3Lm677bbsDACAenHffffF2rVrszOKRuvWreP000/PzgAAAGgUpaWl8b3vfS87AwAAAAAAAIAN4GQQAAAAAAAAAACoZz/60Y9iv/32y86gBmPHjs1OqJUhQ4bEwoULszOohQMOOCAOP/zw7AwANtCtt96anUA96Nq1a/zhD3+IFi1aZKdQgxYtWsRDDz0UXbt2zU6hDl5++eWYNWtWdgYAQL1YunRpvPHGG9kZReWYY47JTgAAAGg03/nOd7ITAAAAAAAAANgAhnsAAAAAAAAAAKCeDRo0KEpKSrIzWI9nnnkm7rjjjuyMWlmxYkXceOON2RnUQklJSQwePDg7A4ANdOedd8bbb7+dnUE9+M53vhOPPfaY8Z4CVF5eHk8++WR07949O4U6euKJJ7ITAADq1QsvvJCdUFR22WUX4z0AAEDR6Nq1a3YCAAAAAAAAABvAcA8AAAAAAAAAANSj448/3iEMBWrdunUxatSo7Iw6qaioiHfffTc7g1rYe++945e//GV2BgAb6IEHHshOoJ706NHDeE+Badu2bUyaNCm6deuWnUIdrVu3Lm6++ebsDACAevXMM89kJxSdU089NTsBAACgUXTp0iVKSx3nBAAAAAAAANDUbJIdAAAAAAAAAAAAzck555yTnUANpkyZEg899FB2Rp2sWbMmxo8fH0OHDs1OoRbOOuusuP7666O6ujo7BYA6uuyyy+LUU0+NTTfdNDuFetCjR4+YPHly9OrVK5YtW5adU9R23nnneOCBB2L33XfPTmEDvPTSS/Hcc89lZwAA1Kt77rknxo4d6yDlRvSd73wnunfvHlOnTs1O4TO23nrrOPnkk7Mzmp2VK1fGFVdckZ0BAECCzTffPA4//PC49957s1MAAAAAAAAAqAPDPQAAAAAAAAAAUE/69esXu+22W3YG61FdXR2jRo3KztggI0eOjBNPPDE6duyYncIX6NSpUwwePDhGjBiR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qsrOaHSVlZWxZs2a7AxqoW3btlFZWZmdAUAdDR8+PN57773sDApIaWlpdO3aNSorK+Ott96K6dOnx4UXXhh77bVXdlqNysrK4rjjjosbb7wxXn755fjrX/8a/fr1i1133TVKSkqy80h26623ZicAAKS67bbbshOIiK222iruueee6Nq1a3ZKs3DsscfGhRde6Hu+RvLcc89lJwAA/JPhnsK3+eabx+WXXx4PPPBAdOjQITsHAAAAAAAAoOgZ7gEAAAAAAAAAgFqqqKiI0lK33BSiN998My666KLsjBTTpk2LiRMnZmdQS0cffXR84xvfyM4AoA5WrVoVEyZMyM6gQLVo0SK6du0aZ511Vjz33HMxd+7ceOihh2LYsGHRrVu3tK527dpF796947rrrou//OUv8cEHH8Qtt9wSJ5xwQuyyyy4ObuaflixZEqNHj87OAABI9cADD8Tbb7+dnUFEbLvttnHPPff4GepGOvzww+O3v/1tbLrpptkpReOJJ57ITgAA+Kfly5dnJ1BLhx56aDz//PMxZsyYaNWqVXYOAAAAAAAAQNHaJDsAAAAAAAAAAACagh/96Eex3377ZWdQgyuuuCKqq6uzM9KMGDEivv/970fLli2zU/gCrVq1isrKyjj00EOzUwCog/PPPz+OPfbY2HbbbbNTKGAlJSXRoUOH6NChQxx88MFRUVERS5YsiXfeeSfmzp0br732WsyZMydmzJgRL7zwQr18/dqlS5fYbbfdolOnTrHrrrvGV7/61fjKV74S22+/fZSVldXDR0Vzd8cdd8SqVauyMwAA0j366KNxyimnZGcQETvttFP86U9/ih//+McxderU7Jwm57jjjourr746Nt988+yUorFy5UqjzwBAQVm9enV2AnWw5ZZbxjnnnBM/+9nP4vbbb4+xY8fG4sWLs7MAAAAAAAAAiorhHgAAAAAAAAAAqIVBgwZFSUlJdgbrMXv27Bg3blx2RqoZM2bEgw8+GD/+8Y+zU6iFH/zgB9GzZ8+YNGlSdgoAtbRq1aq48cYb45xzzslOoYnZaqutYquttopvfvOb//LyqqqqWLZsWSxZsiSWLl0aH374YVRVVcXHH38ca9eujY8//jgiIlq0aBGtWrWKiIjy8vLYfPPNY/PNN482bdrENttsE5tuumljf0g0I8uXL4+RI0dmZwAAFITx48fHySef7PcABWLbbbeN+++/P04++eS4//77s3OajDPOOCPGjh0bLVu2zE4pKjNmzIg1a9ZkZwAA/JOx9qZphx12iLPOOitOPfXUePLJJ+Puu++OCRMmRHV1dXYaAAAAAAAAQLNnuAcAAAAAAAAAAL7A8ccfH127ds3OoAaXXXZZdkJBGD58eBxyyCHRunXr7BS+QFlZWQwfPtxwD0ATU1FRET/72c9ihx12yE6hGSgrK4stt9wyttxyy+wUitidd94ZCxYsyM4AACgIzz77bMycOTP22muv7BT+11ZbbRW33XZbDB48OC699NLsnII3bty46Nevn/GpBI8++mh2AgDAv1i2bFl2AhuhTZs2ceihh8ahhx4al112WcyYMSOeeeaZePrpp2PSpEkpo5G77rpr7LnnntGpU6fo0KFDvPTSS3HllVc2egcAAAAAAABAQzHcAwAAAAAAAAAAX+Ccc87JTqAGM2fOjPHjx2dnFITZs2fHfffdF8cdd1x2CrWw7777xnHHHRcTJkzITgGgltasWRPjx4+PoUOHZqcAbLSVK1fG6NGjszMAAArKPffcY7inwLRq1Souuuii2H333eOUU06J6urq7KSCs/3228eECRPiP/7jP7JTitKaNWvixhtvzM4AAPgXS5cuzU6gnmy55ZZx4IEHxoEHHhgREZ988km89dZbMXfu3FiwYEEsWLAg3n333Zg3b14sWbIkVq9eHYsXL44PP/wwqqurY8stt/znY2222WaxxRZbRETEl770pWjbtm1sscUWseWWW8bmm28ebdq0ifLy8thmm21iq622iq222uqfr2/VqtW/dE2YMMFwDwAAAAAAANCsGO4BAAAAAAAAAIDP0a9fv9htt92yM6jBRRddlJ1QUIYOHRqHHXZYtGnTJjuFWjj33HMN9wA0MSNHjowTTjghvvrVr2anAGyU++67L958883sDACAgnLllVfGwIEDo7y8PDuFTykpKYmTTjop9t577/j5z38es2bNyk4qGMcee2xcdNFF8eUvfzk7pWjNnDkz5s2bl50BAPAvlixZkp1AA9l0001jl112iV122SU7BQAAAAAAAKBZKc0OAAAAAAAAAACAQlVaWhr9+/fPzqAG06dPj9tvvz07o6C8+eabceedd2ZnUEu77bZbnHnmmdkZANRBdXV1XHLJJdkZABtl+fLlMWTIkOwMAICCs2zZsnj88cezM6jBN77xjZg8eXKce+652Snptt566/jv//7vuOmmm4z2JHvssceyEwAA/o/33nsvOwEAAAAAAAAAmhTDPQAAAAAAAAAAUIOzzz47OnXqlJ3Beqxbty4qKyuzMwpSRUVFLF26NDuDWurfv3+UlZVlZwBQB1dffXU8//zz2RkAG+zOO++MuXPnZmcAABSk3/72t9kJfI4tttgiRo0aFU8//XR07do1O6fRlZaWxpAhQ+Kll16Ko48+2s+Wk1VVVcWtt96anQEA8H8sWrQoOwEAAAAAAAAAmhTDPQAAAAAAAAAAsB5lZWXRr1+/7AxqMGXKlHjooYeyMwrS/Pnz4/bbb8/OoJZ23HHHGDVqVHYGAHVUWVkZ69aty84AqLNly5bFsGHDsjMAAArWpEmTYtasWdkZfIF99903pkyZEjfccENsvfXW2TmNonfv3vHyyy/H8OHDo3379tk5RMTf/va3mDNnTnYGAMD/8Y9//CM7AQAAAAAAAACaFMM9AAAAAAAAAACwHiNHjowddtghO4P1qK6uNnTyBSoqKmLx4sXZGdTSySefHO3atcvOAKAO7rvvvnjiiSeyMwDq7Kabbop58+ZlZwAAFDTD6E1Dq1at4qSTToo5c+bEpZdeGuXl5dlJ9a60tDROP/30mDlzZowfPz7+7d/+LTuJT7nvvvuyEwAA1mvGjBnZCQAAAAAAAADQpBjuAQAAAAAAAACAzygvL4/evXtnZ1CDxx57LCZNmpSdUdAWL14ct9xyS3YGtbTVVlvFmDFjsjMAqKNzzjknVq1alZ0BUGsLFiyI8847LzsDAKDg/eY3v4n3338/O4Na2nrrreNXv/pVvPHGG3H55ZdHhw4dspM22vbbbx9jxoyJt956K8aNGxd77rlndhKf8dFHH8WVV16ZnQEAsF6LFy+Ojz76KDsDAAAAAAAAAJoMwz0AAAAAAAAAAPAZI0aMiPbt22dnsB5r1qyJUaNGZWc0CUOGDImFCxdmZ1BLP/nJT2K33XbLzgCgDmbMmBETJkzIzgCotauvvjpWrFiRnQEAUPDWrFkT9957b3YGdbT11ltHv3794uWXX4777rsvDj/88OykOikrK4u+ffvG448/Hm+88Uacc845sdNOO2VnUYMnn3zS91cAQEEzRgoAAAAAAAAAtWe4BwAAAAAAAAAAPqVdu3ZxwgknZGdQg4kTJ8bUqVOzM5qEFStWxI033pidQS21bt06KisrszMAqKOzzz7bUB7QJLz22msxevTo7AwAgCbjwgsvjFWrVmVnsAG+9KUvxWGHHRb33ntvvPXWW3HttdfGgQcemJ21Xh07doxzzz03HnnkkVi0aFFcccUVccABB0TLli2z0/gCxpwBgEL33nvvZScAAAAAAAAAQJNhuAcAAAAAAAAAAD5l9OjR0bZt2+wM1mP16tUxdOjQ7IwmpaKiIt59993sDGrp0EMPjR49emRnAFAHS5cujUsvvTQ7A+ALVVZWRnV1dXYGAECT8eabb8ajjz6ancFG+spXvhKnnHJKPPbYYzFv3ry455574swzz4xdd901pWfvvfeOgQMHxu233x4vvvhivPbaazFq1Kg46KCD/G6qCZk7d27cdddd2RkAAJ/LcA8AAAAAAAAA1N4m2QEAAAAAAAAAAFAoOnfuHMccc0x2BjV44IEHYtasWdkZTcqaNWti/PjxBo+aiLKyshg+fHgccMAB2SkA1MFFF10UxxxzTOy9997ZKQDrNXny5LjllluyMwAAmpxLLrkk/vM//zNKS0uzU6gH22+/fRxxxBFxxBFHxIUXXhjz5s2LN998M1599dV46aWX4oUXXojp06fHihUrNuo6LVq0iH322Sf22GOP+Ld/+7f46le/GjvuuGN06tQpttpqq3r6aMh0xx13ZCcAAHyhefPmZScAAAAAAAAAQJNhuAcAAAAAAAAAAP7XsGHDok2bNtkZrMfKlStj8ODB2RlN0siRI+PEE0+Mjh07ZqdQCz169Igf//jHcdddd2WnAFAHZ511VjzyyCPRokWL7BSAf/HJJ5/Eueeem50BANAkPfXUUzFlypTYf//9s1OoZyUlJbHTTjvFTjvtFP/xH//xz5evW7culixZEkuXLo2PPvooli1bFsuXL4+1a9fGunXr4uOPP47WrVtHRMRmm20WJSUl8aUvfSnatm0bW2yxRWy++eax+eabZ31YNIKPPvooLr744uwMAIAv9Morr2QnAAAAAAAAAECTYbgHAAAAAAAAAAAiokuXLnHkkUdmZ1CDu+66K15//fXsjCapuro6rr322hgzZkx2CrVQUlIS559/vuEegCZm8uTJcdttt8WJJ56YnQLwL2699dZ45plnsjMAAJqsSy+9NP7jP/4jSkpKslNoBCUl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N96II488Mqqrq7NTAACohdmzZ8f5558f69aty04BvkBVVVWceeaZficCABSVe++9NzsBAAAAAAAAAAqO4R4AAAAAAAAAAJql7t27R69evbIzqMEDDzwQzz//fHYG6zF//vy4/fbbszOog29/+9tx0kknZWcAsJGOOOKImDVrVnYGUEAWL14cP/3pT2PRokXZKQAA1ME111wTd911V3YG8AWuu+46/68CAEXnsssuiwULFmRnAAAAAAAAAEBBMdwDAAAAAAAAAECzNHjw4GjRokV2BuuxcuXKGDx4cHYGn6OioiIWL16cnUEdDBw4MDsBgI20atWqOPLII2PevHnZKUAB+Pjjj6N3797x3HPPZacAALAB+vTpE6+//np2BlCDZ555Jk4//fTsDACARldVVWW8EAAAAAAAAAA+w3APAAAAAAAAAADNTs+ePaNnz57ZGdTgrrvucmBhgVu8eHHccsst2RnUwS677BLnnHNOdgYAG+nNN9+M4447Lj744IPsFCBRVVVVnHnmmfGHP/whOwUAgA20YsWK6N27d6xYsSI7BfiMRYsWxYknnhjV1dXZKQAAKS666KJYuXJldgYAAAAAAAAAFAzDPQAAAAAAAAAANDsVFRVRWurWmEK0fPnyGDJkSHYGtTBkyJBYuHBhdgZ1cPrpp0erVq2yMwDYSE899VScfPLJ8fHHH2enAEkuuOCCuOaaa7IzAADYSFOnTo0hQ4bEunXrslOA/1VVVRUDBgyIV199NTsFACDNvHnz4pFHHsnOAAAAAAAAAICC4XQSAAAAAAAAAACalaOOOir222+/7AxqcMstt8S8efOyM6iFFStWxI033pidQR1sv/32UVlZmZ0BQD247777on///rFmzZrsFKCR/fa3vzV2CgDQjFx22WVx++23Z2cA/+uqq66KCRMmZGcAAKSrrKyM1atXZ2cAAAAAAAAAQEEw3AMAAAAAAAAAQLMycODAKCkpyc5gPZYsWRLDhg3LzqAOKioq4t13383OoA569+4d22+/fXYGAPVg/PjxMXTo0Fi3bl12CtBIbr/99ujbt292BgAA9ezEE0+M5557LjsDit4f//jH+NWvfpWdAQBQEJ5//vl48MEHszMAAAAAAAAAoCAY7gEAAAAAAAAAoNk44YQTomvXrtkZ1ODmm2+ORYsWZWdQB2vWrInx48dnZ1AHbdu2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L14c06ZNiyeffDKamppST6KXO378eKxevTpKS0vjrrvuihMnTqSeBAAAPVZnZ2esXLkyJk+eHLfeemvs2LEjOjs7U88ioa6urti5c2fceeedH4adhFIBAPi07dmzJ+69996YN29ejBo1Ku644454+umn480334wzZ86kngcAAAAAAABADybcAwAAAAAAAABAUl/84hdj0aJFqWfwMXbt2hUbN25MPYNe4Oc//3ns378/9QzO09e//vWYPXt26hkA9FC1tbVx++23x8SJE2PVqlVRW1ubehK9TFVVVfz4xz+OSy65JJYuXRrNzc2pJwEAQK/yy1/+MubNmxcLFiyIX/3qV665M9PQ0BDPPPNMXHnllXH55ZfHunXrUk8CAICIiGhra4snnngibrnllqioqIgRI0bEN7/5zVi3bl3s2LEj/vGPf6Se2Ou0t7dHVVVVbN68OZ577rnUcwAAAAAAAAD+o/qlHgAAAAAAAAAAQN7uu+++6NfP31i6o66urvjpT3+aega9yMMPP+zGfj3MwIEDY/ny5XHttdemngJAD9bY2Bh333133HPPPfG9730vFi9eHNOnT089ix6qs7Mzdu3aFevXr4+nnnoq9RwAAMjC1q1bY+vWrVFUVBRLly6NG264IS699NLUs7gA2tvbY+fOnfHss8/GY489Fh0dHaknAQDA/6mtrS02bdoUmzZt+vBYaWlpLFy4MGbOnBlTp06NSy65JEpKSmLAgAEJl/YMra2t8e6778ahQ4fi73//e7zxxhvx/PPPR2NjY+ppAAAAAAAAABeEO54AAAAAAAAAAJDMVVddFVdeeWXqGXyMbdu2xW9/+9vUM+hFnnjiiViyZElUVFSknsJ5uPrqq+Oaa66JP/zhD6mnANDDdXZ2xkMPPRQPPfRQXHvttXHHHXfEVVddFYWFhamn0QM0NzfH73//+3j00Udj+/btqecAAECWmpubY9myZbFs2bKYP39+3HbbbXH11VfHqFGjUk/j/6GrqysOHjwYL730Ujz++OOxf//+1JMAAOD/7dChQ7F27dqPHOvbt2/MmzcvZs2aFZMnT46JEyfGxRdfHGPGjIkxY8ZEv3753Iqpubk56uvr49ixY1FTUxPvvPNOVFdXx969e2PPnj2p5wEAAAAAAAB8qvL5tRgAAAAAAAAAgG7nvvvui4KCgtQz+Cc6OztjxYoV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"
					), aAR(7, "youtube", 7, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aAR(8,
					"googleplay", 3,
					"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"
					), aAR(9, "discord", 7,
					"iVBORw0KGgoAAAANSUhEUgAAACwAAAAyBAMAAADVdiTZAAAAG1BMVEUA/wBI/0lu/26P/5Cl/6O8/73R/9Hn/+j///+iRuwXAAABJUlEQVQ4y83TvW7CMBQF4BsKdKVIpYxIRaJjVLUSI6JDGSNlCCOq1JC1f+CxFIL92D22E+di/ABciZB8seRj35joVZ3VN1FXBSqhRYgPJEIsSQXrAnmjL2uP5Usm81z83Bec5WM+J9T4vS8Yfzz1yFQ0v2ackKsrxr2G7d4ZPjK1O214z3no+Jdz1/EKTy1NI/w6jmcIID6JJirGe8cYdIdGIcQOwx3j/gEpI6X+qoRkGqrnd6OXFR/NRAcdOWFc6hDPera0Xk/Fozo1ck4bHsSVpg0jYJSlervGW9zWSdQXhhXozlbGek1uY9/s2hRWect7ucnsf5ld7DfosX+kcsv+AdwtDfvHdW877x/u0raB6Oa0qG35rKZhbokg41sKclQEmTr/f+SUPtWxuyYAAAAASUVORK5CYII="
					), aAR(10, "insta", 3, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aAR(11, "emojis",
					4, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aAR(12, "flags", 3,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aAR(13, "bestTeam", 5,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aAR(14, "bestPlayer", 5,
					"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"
					), aAR(15, "zoom", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuBAMAAACllzYEAAAAHlBMVEUAAAAhIyA3ODZTVVJrbWqEhoOkpqO8v7vX2tb///8goTJXAAABaElEQVQ4y32Tu1ODQBDGL8QAdlg5dml8dZTa2TijXQpnIh2TwoQOxwehi2PB0flKYP/b7HFv5nALBn5337d7ewshXZyuKX2PST8egUW76OE7EJFa+BhJ9bSsUWFaeTV3GKHbn8EvlB79bjSv4VO8jUr4VdiHNnK938MHPie0Yh+ZLqmGuNsJ7CNURgewI5qPoRE86GwkJyWIBIfcUfJrmMm0sclDyDnPWmLyADacl8jnRbEGKIoiJRP4EmU2LJmIDfLvAf7z/37mv6IUm08pzbV/rx5f1pPA1Fn/iX3eS3nekAslz7gcGw9bg3uqn6Rup5oH+uaTLpO4r0SmZVuUFE2lfTc+z1qr9+BVtGJqzq1RHNfQdAtnrEW75UwuXOFgvj3crpCyDu6UIpP9fPHZU5XkiYVXvsXIPcc+VwspzY2pPorE/NgCfYK+QJ5+QFA6fjQt2A4IWuIWODixe2ELcuIUNJGL+zQle92exY5pfDIaAAAAAElFTkSuQmCC"
					), aAR(16, "apple", 3,
					"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"
					), aAR(17, "loading", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEEAAAAKAQMAAADRpqGpAAAABlBMVEUAAAD///+l2Z/dAAAATklEQVQI12M48E/OzoinjoGB4cA/O3tjnn8g1iEjY+aeAxCWofGZBijLCMqqNzRKmQdhGRubNINZyeYQ1p9/yXbGMv9yG0AsG2OemtwGAJcsIuxbPF7gAAAAAElFTkSuQmCC"), aAR(18, "target",
					7,
					"iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAJFBMVEXUAADLSwDYWli/eQCzlQGgswDloaGC0wAA/wBk5wDx09P///8NUBuBAAADWElEQVRYw62YvW/aUBDADwghTRakqoJuTBmSBamNSjcyJSMZotINZciQLCxVnQ1EkO0N1ET1iDJkgCViyGD/c7UN8bv37t5Hq96EbH6+j3fv3d2DgJPw52Uqd+y7AJhnP05hI6WTOyfksQ1IPnhWJLwAWUrfLYjfBSJfjIjfBkYaBoQnVAYjYRc08lWHXIBW+jwy0RNQijjErxsQqHJID4xyTpF7MwEVirQtCHxUkYmNEBEAVyVCDbgqEWq2SNcBgQ5GpsrLw+UqSZbPAzZoG2QovdpN/7+R5xaTNjkSSgt/lAiJJaYmkImOUJiSQHCu7CeJnjl/Q7Bdu4kqr6ploKTXLUGSJ8UykON1lDDSkmMGUrKUOSJZC+TdBvHFk2MWSQbSTkuRsUWJpCbKkaE2wIw3/RwRrqx0yKL4SzNDQsOa0LWpZcjU5rxkWSVDxna7sGVRisz4eMUay/op0uPilW2UQ6wVbU0I6owrm7Qqr5jV3AsgZFx5paa+iJCBSBcmPvvUmWoAU7oqKD8KzbGIMkzoF1vcHi0eBTB6+3nAbcMy/U4EM7IfF8Dt0iJkHoNI59AB+VAfhqqnsXwMkiifQ09FXiWkTJCOQJgQs48Z5EVGiPIOdFVk8f+Rvb9Hmv/iiyvCRYxfFzCti/vqk4SRc2yfybGZPmelAwEhI/JyzXmPk39MTIg5V4S5AdzTtwNmh8Wi9onjoswcjbv02Q5/jj3RYrtGh1LAFeMBKbYLUS1BNEkH6Ay/yh7ccNWimSJDtiItn2/wKR6jBgOCkUt9EWvlpci9qbMgcS9lVcy3F2RkVzWvyHW7ZWvcXgBurY6tdmX9ZYqMrFUc7TovR6ZgC8BC6kizTgksamK5hwO5T7w1e5K3yhkyBmOvhM+PaIv4YGr7cD9aLTrYtqm5xEdBs0DmuKCstM1oHuIt4oOWeaIDGTCDxY2yb5TRArjx5XDJTgnbAWaDhOqAWL6+vr5S55eaNPLMXUYeT0J8B6KqjG9DO9JXELuaGhlF546eICS0TJYNZqw2D8mViJv3e26DOEZMpjU0FxFTLbGjvSF50Dni6e9hfvHztGe67Xmw6qB3So/k0mMnst1c+acyceZyP/aI9uiJ53alFvy+/JTa9/7zt8j1Fs4ifwCmXBmOYkld0AAAAABJRU5ErkJggg=="
					), aAR(19, "members", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABSVFGanJkA/wDMz8x4/3ey/7L///+GDHoaAAACZElEQVRIx9WWwYrjMAyGlVCYa6cs5JqGQh5gaObaDYU8QJnOA5SS66RN49dfSZZt2U2WZZeFXc9h2r9fZEmRJcPbLyz4d6GzMdM1/uXcG3PV0KehFVFnlh4Baoxdl8BEEkF7EcwUoN5pJ4HenRBMNV66C4QfxxI2nTKFhsYt5CgZC9FTawDIxbg4UKKUWevAuw1Aq/D7NUq6M9RbQ2zKhkwpKVnK2AWGRrCrc04lEpDfgyg1u8mh3EQqSGLoS5QXY/a4+XSKJIIwkkNQOIlTgFYUcQq59TuQcrwI0PDk+M3Hayh2+RcC1smkl3DDj1ltlMR5old38LutHT04l/BVAVfOSL9lnXelUBKaAltxt2gTv3Ft6w6k4sajdtf6zhLVHUHltzTwkIzvOUGf9PhOJJdVdphWS0YfFnJUCrVgISmdTVWVnVQa19+YV9VWKgohl2+MRUFKjaAXDX0tQCvt0+HPIJWnJajWGV9wPDPutPFhXs9CK+PLr1aJjSF+5aUzpOQY6mwZURWNCRRO9JZq43ikMtnog44v2LlojK1EW6n4zYXz4HqSb/gsty1qaWjAt5o7NAEiL7Jdu2vX7IqHLikEIYdzUJ5CZQQdJJcJ5GSE9i5tC1BNR4oadGub76ChwrZfKn48wTRXsGfrQvHFQr0dmy245o8nMYHGoxsToMZIAoWBA2qOzEMXmVJiK4nO2jn5oXju5yGZpn4Gf/QpNH08D+pn6O3vQqOGulkIX0+1fbXd93VT+dkXQe/SO3F1fkSnUBjgT7cEdVdJodkLTbNkKLr1NH1ApstPrkbnK/39B9e1H85NJPjxrK7zAAAAAElFTkSuQmCC"
					), aAR(20, "hourglass", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABKTEqZm5gA/wDJzMh3/3iz/7L///+iyVF/AAACjklEQVRIx72W3aqyQBSGJwk6dceGTv1C8AJEO60QvACJLkDI02xPrtvf75pJ58cx2iffIqT0aWb9vGuNIrft0hSX8WqZ4Etxg9HM+G4zQVdatOcEdSSrqkr3juFOVdMwQXQUC7YmAyVLUPQZ1PxtJSJ5js7KX7j/+pKkNR5Y0RE9Ij/6JMPFRFfebt0cOmbD7dZOEOwQgn7ssnwOrf8rJAMp8KFSrnwormcQCR8S1HpQgT8qVVXnVCsJS/tQzlV4mMpmJLUCXOi4I2mgmnotOAfqcJPiCUIGNsMMunJdEqMjbP+cQQcOrx+hnZ0BA5XsuTQuPUxwBoLnZj98Oxq/LaiTHNK4G34MAQj7jfGhQqeIfgJQzm7ofELccUZ5CDpQjKBO3LbUr+gZhAo8QhMl8FoCb4IQhkvyUt7JWciBCnhUa5VkJkkexEtxQ3KjPvMlqKD7hk7fdF/bHnlQfoUU4LglgBCElVCP+ztIbQfDdXk7OL5jqH/juE7BA4pBUZr8XTJZMadoKZklKlxriMvSBqGO4m8ejJmuy5AH9aTqq02CbwPQlfeYDH94ziEWilqDW5xniiUWq6VUjs6szFTnat5SHYuXdcnGAcTZrINLrpmZGJnqqXY26WLONJ7rfqm5qfwh1vXckPahAh8HD/Imjzt7xJgACLe3oZ01xYQ1Mo/umWmGprBOjcQ96cyEEtacc89DrDx6PkJQrHSh2kjdgh4ulH0C7YIQuS8P3nYlDa9ecg33OpUF8TqnFyB9UitIVujsALSmqp6g+/5fHKVpxQfQqM6q2ier7X5joFdAMX++YrEyMc6hgP0RkuoVZbvfTqfU6gs/VbZG6M3bmn5fE0pxb6x1Ori4eNbkY3f+AriuYpjQCOoxAAAAAElFTkSuQmCC"
					), aAR(21, "stalemate", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEoAAAAKAQMAAAApRlpeAAAABlBMVEUAAAD///+l2Z/dAAAAX0lEQVQI12P4/afiwJ+G9vnvDzD8/vPjwJ+D/SDmgYQTBw487mnmYYAwv4OZBUDmj/89zfwNDBWJfw78uDv/MJApAWQeODn/MFABR2LPgQMHZ4CYPxJ7/vwBMvkPIDEB8vo+S3L7oMwAAAAASUVORK5CYII="
					), aAR(22, "logo", 8,
					"iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxMAAAsTAQCanBgAAATzaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTEyLTIzVDE0OjQ0OjQ2KzAzOjMwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyZTU0YWVlOS01ZDdhLWQ3NDgtYTRjYS0yODQ1NmQ1ZWFlZDYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MmU1NGFlZTktNWQ3YS1kNzQ4LWE0Y2EtMjg0NTZkNWVhZWQ2IiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6MmU1NGFlZTktNWQ3YS1kNzQ4LWE0Y2EtMjg0NTZkNWVhZWQ2IiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDoyZTU0YWVlOS01ZDdhLWQ3NDgtYTRjYS0yODQ1NmQ1ZWFlZDYiIHN0RXZ0OndoZW49IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4XsEKJAAAL9ElEQVR4Xu1cCXBV1Rn+zn15L/tCAlmQhCCGsJWAEQEdGJVaR7Fqq+MWnY5aSpWxq05nnLZaday1jmPdZpw61akiVK2OraNDq8VKQBbZEZBVCMRANhIS8vbb7z/3XnzKk4KxeSf1fTN33r3n3vdyz/f+5fv/e15UfFGdjVQgFgZ8WYjX/Rw7e0uwfmcPtmxai2WNjYjForAsy73QbKSGQDsOO9wD6+K/IlgwERkZfmT4gJaWFtx43dWIRgcPgQN/lza/L7G+2gbYvgACmX74SJ5g8Vtvoq2tddCQJ0jNnSoyVjAaqngCjTEOxaHGpe/hqSceR35+ATlOTVT5MkgBgXEgUADkj9RHPtfaRo8ejUvmzEFmZha6ug4jHKaVDgIMfAzULhyEXXsjrPq7eAef/Q6bmvZhz57dePTh32Pf3r0oKCyEUmKjZmLgLVC4sDKA5kbYnyx3xlyI61ZWVmHWrPPw8mt/w7UNN6C3t8dol06BC5NBxkDVdwj2hkdI4gogfARCkURDjyoh7ftz52FMTS1CoZA7ah58d19Vfo+7P3AQl6SUUb37YXdshH1gCVSkF1ZuGUJRCxl+v87EWdnZqKmtpTZcilAwaGR2Tt0dCYn+PKie/RSA7yP+zvcQX/sgSctx4qSLvNxcdLS1GSttUn9XMbpndhms6zbDOvt+DpC8hKSxfNkyRKIRYxNJagkMdcHOPQ3WrCehhoynvMnj4KdE7d37MX57/2+0NjQVKSPQ7muDPeICWOc9DZROcXhzXVcSyBOPPYqbbmzA0GGlRsuY1NTCtDyMuhyYcgdU3ggyFuOdOPXctq1b8dSTj2HVihUU1Zmskyl5DMbAW2A8SrcdDjXxVpc8iXkOeQsXvIDrr7kKa1atQk5OjvHkCQaewCiTxulXcIclncB1z0ULF+Deu3+FQlYeIl9MdttEDLAL80/F44jbUfiu3+qOOagaXqqrkKysLHdkcGCALZBWFemmXLkXdvN77piDTVt3oLKqCt3dzMwJOtB0DLwL+wthr7gLyp8PO9rnDkK77qKXX0V9/VR0tLfTUF0XNxypycIUz3agCGrm41D5VUBOqXsC6Ovrw4rly3H7/HkoKixCpuEunRod6MuECnXCXnIz7K6ddOuj7gkWJUwg58+ejTUbPkTVyGocbGkx2qVTQ6AgI4vmT0nzr1tgb3/BGXN5Er5EA7740iu474HfoaurC1GWcyYidQQKfAFKQD/slb9EfMlc2OEOPewpmGCwD9+58ko8+/wCTWrroUPGxcbUxMDjwFuIRbSrqpl/AMqmQQUKddIWCGnSjVm9eiXmz5vLfR9yc3OdkylGavqBx4FMKQvKJomta4He/VAV0+kfAeesa5JlZeU4a+rZ6KZLf7xnT9JKRazB5X1AkFoXToSQlMEKJEQ3/ujPiL1+EeyDq1i5BHX5JxDCJk85E9c13EC92K3HPo+BJE9gDoEerAyorBJYJNJefDXsD5+GffQT9yRdxufDuPETkMFXE7KzeQR6kAQTKIC97iHYH7/hjLmEBQIB+P1mNBrMJVBAt1Z0a3Rshd2+0XFzQizvaF/wWGxMJcwmkETZvlyoSbdDlUxyB2UJyFvwG9LqMptAJg9VOJKvMXcACIcjeOC+e1A4pMgdSS0Mt0BWKnkjoQqcZSCCQMCPkmHDHL1iAIwm0A51QY27RT949+qP1StXUgPu1tnYBJhLoE3Kcsphd+/W3Rq50RgrksbG93S73xQYTCDFc04FrNHfdQeobFjOvbRoIQk0o4wTmEugNFuHTdbPUGyxRqKzs1NXICatUjCTQFkCzKJMnXEt67fMY3qv+UATAn6/3jcFZhIY6QXqfgqV6a1IcAi85+5fI7/ArFUKhrowCTuyV8dADzt2bMeHmzayhEtb4Ikh1Uc8DDXqMt2d0dmY+OfixcjLlbUzZsFACyRh2RTKuZXOobsEeP26NbrNbwqkyasbve6xWZBGavOSY8VGLBbDtm3b4Psf1r9Chvw+RTZZzCmL3OXvekSFwyG9+L1p3z60t7XpVbOyGejCTspQov9YA0sHS6qOurrJX+mDJSElFArqB1atra0Icn8oS8QhQ4px7sxZGFM7Fv5AQJMUjUQxcVIdfjDvNnywYTMW/OUVLF+1Rm+GPBNJgCz99QWwq/IOVJx5DbKZM0TG3PbDudi4fn1SN46T6Hjc1qRYvFYqFrEeeZ98GTJBST7SBpNNnj1LT3HKlHpMmzEDw08bjpqaWoysrtZaMysrE9nZOQge7UPXkS74rQwUDxuq/5Z8lv5tiyutDCSQCjB6BHtmr0V1eRFv1Bm+de4t2Lx5k56451o9R1gj8/ri4mKUlJRoidPZ0YmKigpUkQw5LxMVC/5g9SoUFhXp910851JMmzYdtWPH6c+WzxOIQPeISQr5AviSeI2hFujD9gnPoGZ8vasAgcsuuQi7du1EJBzhxMdq1543fz6GlgxFLd0tm/WxPJTXT/YSJth84AAt7DT36FNEGOPERROhyXF2/zuOdlNmFZhIILdgK9QVbyNWMJb1rzOl9evWoaOjHWfUnIHhwytJVPyEmlCs6pQ6NhJfM/h5Wz4gu7JPcjO55Q8BykYAB/cD7/8DePdNYM1SoOkQz9FijSOQkOW/6pyHoU6/XGvBz1vVZ3BKZpMED/4Y2LaDFtXO17X88qLOZ8pqkzLq0AlTgV2bgMOdPMcx+VsShuW74XVGEiilnF35LYrpK6CqLnQHT4DDbUCAs9rOicoE9+8GhpQDWSRgxxaguAQYMwkopyuvfhdobwFe/RP3lwF5+UAn3VEIEZUk7/e+ENHw8kRVzoleSTznwkwCpfpQGbCrv00SuZWe5XRnpDLx0E2LeON54O8LgZYDQEczr3HXWkf4Ko+NvQkLAbLIS0jIIkvdZMWzIjnfDzFnJoECeZje2wy7YiasC55xqhNmUKZK4JmHgbl3AgxNkNagEOBZiMAjzoPMMHGWidf1E2YRKKk1HoEdYjwKMHhXXwrrnId0T1CWxGnyomFgHPc9i0oxDLgFF1J1xPpgF42BuuA5WA3bYJ1LS5OlHX66rtdEbTjXiU2G3PnAWqBYmO6uOJamh6JMd7JOUDLt+U9DDaP2k58/6JO8zsu+IcbALRuBa6fTOnk8aAiUCdtiHZxwjNYgv/WViVk+zo1RWI71dTJZmRVfZV9DWlOMZXotNMcyGLACzHoy+7KzNXFq1KX6WFXPkTckR28X8BKz5i9+xvfx2BDyBF9MoJAgckL8pWA0ZcEYgAFddVAWZJcCPU3OIvG29XKxM9bLbJiRQ5cjSSRYQ57rVs5mzGItGexgXLvk5GO3ZNo/0o0b36DkoPUVc+wrCPxfJZITSPJ0U3PEbKhp9zHlM6CLJXnWdjLwMmYyyEoDj+BkCNKtLxwF7KTal2QhkkPc1jDyBMlnGKbLjJyjf44Fn6u9jpGX3GA/dVsXmjyO6fHPn0sgL/F9Eufuuhmop6u3kDwqF8gjECHQQPIEx1ugZEP5CcKZd9ICv0l3dH8AfaIuxakgRksWC9tKl2zaDixlbZlTBPz7deAQKwrJMZ7IHQRQ8YXfkCYZSSJxdFv0NENNfwBq8k/cSxzYW95iIH8WKpeuVcoyacb5nDDVf1UN0MrXiUwKO1hKjZvCWNgDdFHLFbGEeofESCzbsBpYsdipErpo4Yf5oWLcnmGLiwpp8j0Zam3JoGILxtuymBHyC8ryGQzyLJ2G1tFS5H9byayI156jfLjJUf5iIdI+k8I6sRnSy01WXIg6EZuW62STSkGIkY8SyxKId7sePpjISgYVD3baCLj/m0Wkio+seEHec936QhLG4jJZDvk/IKE/sFSmdH1dBoQ8DTe3yPiPGuiqX0Ce4GtMniB5FpYm5kfUdzczzr38oqO/0kgKZYdDNsIs1jsoct9+ha8twLOPAH0MYGJd5iyEMhLKnlrIYoMEtkvRzhH5n1+JLaI0Tghlj2caEEvzyPqax7RThaWTwyDUX6Yg7aT9RJrAfiJNYD+RJvAkcdBpoB+HNIEnibLEuj8BaQL7CSsizYA0vjSsWJrAfsHKSjtxv5Cmr59IE9hPpAnsF4D/AAvuaRahtsL8AAAAAElFTkSuQmCC"
					)
		}
	}, this.get = function(oB) {
		return canvas[oB]
	}, this.a97 = function(name) {
		for (var a6 = wR.length - 1; 0 <= a6; a6--)
			if (wR[a6] === name) return canvas[a6];
		return aAL
	}, this.qm = function() {
		return aAK <= 0
	}, this.aAN = function() {
		aAK = 0, aAO()
	}
}

function cK() {
	var aAa, aAb, aAc, aAd, aAe, aAf, aAg, aAh, aAi, aAj, aAY = [
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
		aAZ = [
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

	function aAp(it, mE) {
		for (var a6 = it; a6 < mE; a6++) aAa[a6] = 4 * bH.ex(64 * av.random(), av.value(100)), aAb[a6] = 4 * bH.ex(64 * av.random(), av.value(100)), aAc[a6] = 4 * bH.ex(64 * av.random(), av.value(100))
	}

	function aAo(it, mE) {
		for (var colorsData = a8.data.colorsData, a6 = it; a6 < mE; a6++) {
			var ey = colorsData[a6];
			aAa[a6] = 4 * (ey >> 12), aAb[a6] = 4 * (ey >> 6 & 63), aAc[a6] = 4 * (63 & ey)
		}
	}

	function aB0(e9, aB2) {
		a7U[e9] = 0, a7U[e9 + 1] = 0, a7U[e9 + 2] = aB2, a7U[e9 + 3] = 0, aB3(e9)
	}

	function aB3(e9) {
		var ec;
		bX.mM || (ec = aX.uM(e9), e9 = aX.uN(e9), bX.mM = ec >= bW.a7T[0] && ec <= bW.a7T[2] && e9 >= bW.a7T[1] && e9 <= bW.a7T[3])
	}
	this.eX = new Int32Array(4), this.dS = function() {
		var eX = this.eX;
		eX[0] = -4 * bO.eg, eX[1] = 4, eX[2] = -eX[0], eX[3] = -eX[1]
	}, this.dR = function() {
		if (aAa = new Uint8Array(a8.eS), aAb = new Uint8Array(a8.eS), aAc = new Uint8Array(a8.eS), aAd = new Uint8Array(a8.eS), aAe = new Uint8Array(a8.eS), aAf = new Uint8Array(a8.eS), aAg = new Uint8Array(a8.eS), aAh = new Uint8Array(a8.eS),
			aAi = new Uint8Array(a8.eS), aAj = new Uint8Array(a8.eS), this.a47 = new Uint8Array(a8.eS), a8.ic)
			for (var a6 = a8.eS - 1; 0 <= a6; a6--) {
				var eq = bc.k2[bc.eT[a6]],
					kM = bH.ex((aAZ[eq][3] + 1) * av.random(), av.value(100));
				aAa[a6] = aAY[eq][0] + kM * aAZ[eq][0], aAb[a6] = aAY[eq][1] + kM * aAZ[eq][1], aAc[a6] = aAY[eq][2] + kM * aAZ[eq][2]
			} else 0 === a8.data.colorsType ? a8.data.selectableColor ? (aAo(0, a8.jc), aAp(a8.jc, a8.eS)) : aAp(0, a8.eS) : aAo(0, a8.eS);
		! function() {
			var a6, eY;
			for (a6 = a8.eS - 1; 0 <= a6; a6--) eY = bH.ex(aAa[a6] + aAb[a6] + aAc[a6], 3), aAa[a6] += aAv(eY - aAa[a6], 2), aAb[a6] += aAv(eY - aAb[a6], 2), aAc[a6] += aAv(eY - aAc[a6], 2), aAa[a6] -= aAa[a6] % 4, aAb[a6] -= aAb[a6] % 4, aAc[
				a6] -= aAc[a6] % 4
		}(),
		function() {
			for (var a6 = a8.eS - 1; 0 <= a6; a6--) aAa[a6] += bH.ex(a6, 128), aAb[a6] += bH.ex(a6 % 128, 32), aAc[a6] += bH.ex(a6 % 32, 8), aAd[a6] = a6 % 8
		}(), this.aAs(),
			function() {
				for (var a6 = a8.eS - 1; 0 <= a6; a6--) aAe[a6] = aAa[a6] < 32 ? aAa[a6] + 32 : aAa[a6] - 32, aAf[a6] = aAb[a6] < 32 ? aAb[a6] + 32 : aAb[a6] - 32, aAg[a6] = aAc[a6] < 32 ? aAc[a6] + 32 : aAc[a6] - 32
			}(),
			function() {
				for (var a6 = a8.eS - 1; 0 <= a6; a6--) aAh[a6] = 235 < aAa[a6] ? aAa[a6] - 20 : aAa[a6] + 20, aAi[a6] = 235 < aAb[a6] ? aAb[a6] - 20 : aAb[a6] + 20, aAj[a6] = 235 < aAc[a6] ? aAc[a6] - 20 : aAc[a6] + 20
			}()
	}, this.a39 = function(player) {
		var g = bK.f6;
		return g[0] = aAa[player], g[1] = aAb[player], g[2] = aAc[player], g
	}, this.aAs = function() {
		for (var a6 = a8.eS - 1; 0 <= a6; a6--) this.a47[a6] = aAa[a6] + aAb[a6] + aAc[a6] < 280 ? 0 : 1
	}, this.uM = function(e9) {
		return bH.ex(e9, 4) % bO.eg
	}, this.uN = function(e9) {
		return bH.ex(e9, 4 * bO.eg)
	}, this.tw = function(ec, ee) {
		return Math.floor(4 * (ee * bO.eg + ec))
	}, this.uC = function(e9) {
		var eX = this.eX;
		return this.aAw(e9 + eX[0]) || this.aAw(e9 + eX[1]) || this.aAw(e9 + eX[2]) || this.aAw(e9 + eX[3])
	}, this.eu = function(e9) {
		var eX = this.eX;
		return this.ea(e9 + eX[0]) || this.ea(e9 + eX[1]) || this.ea(e9 + eX[2]) || this.ea(e9 + eX[3])
	}, this.uA = function(e9, player) {
		var eX = this.eX;
		return this.aAx(e9 + eX[0], player) || this.aAx(e9 + eX[1], player) || this.aAx(e9 + eX[2], player) || this.aAx(e9 + eX[3], player)
	}, this.vy = function(player) {
		return player < a8.jc && 2 !== ab.zY[player]
	}, this.g6 = function(e9) {
		return 208 <= a7U[e9 + 3]
	}, this.uH = function(player, e9) {
		return this.g6(e9) && this.aAy(player, e9)
	}, this.aAy = function(player, e9) {
		return player === this.eN(e9)
	}, this.aAz = function(e9) {
		return 208 <= a7U[e9 + 3] && a7U[e9 + 3] < 224
	}, this.io = function(e9) {
		return 224 <= a7U[e9 + 3] && a7U[e9 + 3] < 248
	}, this.uB = function(e9) {
		for (var eX = this.eX, a6 = 3; 0 <= a6; a6--)
			if (this.gz(e9 + eX[a6])) return !0;
		return !1
	}, this.eQ = function(e9) {
		return this.g6(e9) || this.eM(e9)
	}, this.gz = function(e9) {
		return 0 === a7U[e9 + 3] && 2 === a7U[e9 + 2]
	}, this.eM = function(e9) {
		return 0 === a7U[e9 + 3] && 1 === a7U[e9 + 2]
	}, this.t1 = function(e9) {
		return 0 === a7U[e9 + 3] && 3 === a7U[e9 + 2]
	}, this.ea = function(e9) {
		return 0 === a7U[e9 + 3] && 5 <= a7U[e9 + 2]
	}, this.aAw = function(e9) {
		return 0 === a7U[e9 + 3] && 3 <= a7U[e9 + 2]
	}, this.eD = function(e9) {
		return a7U[e9 + 2] - 5
	}, this.aAx = function(e9, player) {
		return this.eM(e9) || this.g6(e9) && player !== this.eN(e9)
	}, this.eN = function(e9) {
		return a7U[e9] % 4 * 128 + a7U[e9 + 1] % 4 * 32 + a7U[e9 + 2] % 4 * 8 + a7U[e9 + 3] % 8
	}, this.uI = function(e9) {
		aB0(e9, 1)
	}, this.aB1 = function(e9) {
		aB0(e9, 2)
	}, this.tx = function(e9, player) {
		a7U[e9] = aAa[player], a7U[e9 + 1] = aAb[player], a7U[e9 + 2] = aAc[player], a7U[e9 + 3] = 208 + aAd[player], aB3(e9)
	}, this.g1 = function(e9, player) {
		a7U[e9] = aAe[player], a7U[e9 + 1] = aAf[player], a7U[e9 + 2] = aAg[player], a7U[e9 + 3] = 224 + aAd[player], aB3(e9)
	}, this.ip = function(e9, player) {
		a7U[e9] = aAh[player], a7U[e9 + 1] = aAi[player], a7U[e9 + 2] = aAj[player], a7U[e9 + 3] = 248 + aAd[player], aB3(e9)
	}
}

function ck() {
	var oB = 0,
		aB4 = new Uint16Array(32);

	function remove(a1C) {
		var a6;
		for (oB -= 2, a6 = a1C; a6 < oB; a6 += 2) aB4[a6] = aB4[a6 + 2], aB4[a6 + 1] = aB4[a6 + 3]
	}
	this.dR = function() {
		oB = 0
	}, this.iR = function() {
		var a6, ik, ht;
		if (0 !== oB)
			if (0 === ab.lT[a8.eF] || aY.aB5(a8.eF) === aY.fc(a8.eF)) oB = 0;
			else
				for (a6 = oB - 2; 0 <= a6; a6 -= 2)(ik = aB4[a6]) < a8.eS && 0 === ab.lT[ik] ? remove(a6) : (ht = aB4[a6 + 1], (ik >= a8.eS && aB6(a8.eF) || ik < a8.eS && aB7(a8.eF, ik)) && (b5.gt.h4(ht, ik), remove(a6)))
	}, this.h6 = function(ik, ht) {
		! function(ik, ht) {
			var a6;
			for (a6 = 0; a6 < oB; a6 += 2)
				if (aB4[a6] === ik) return aB4[a6 + 1] = Math.min(aB4[a6 + 1] + ht, 1023), 1;
			return
		}(ik, ht) && 32 !== oB && (aB4[oB] = ik, aB4[oB + 1] = ht, oB += 2)
	}
}

function cL() {
	function aBE(player) {
		var e4;
		b7.fs.za(player) && (e4 = ab.gY[player] - ab.ze[player] + aY.aBG(player), bZ.fw(player, Math.abs(e4), e4 < 0 ? 18 : 12)), ab.gY[player] = 0, ab.ze[player] = 0
	}

	function aBN() {
		aS.show(!1, !1, !1, !0), aR.a6g(), bN.result.wn()
	}

	function aBB(player, aBM) {
		for (var a6 = aBM.length - 1; 0 <= a6; a6--) aY.aBP(aBM[a6], player)
	}

	function aBD(player) {
		for (var i8 = ab.i8, i9 = ab.i9, iA = ab.iA, iB = ab.iB, lv = i8[player], lw = iA[player], eg = bO.eg, gK = ab.gK, ec = i9[player]; lv <= ec; ec--)
			for (var ee = iB[player]; lw <= ee; ee--) {
				var g4 = 4 * (ee * eg + ec);
				aX.uH(player, g4) && (aX.uI(g4), gK[player]--)
			}
		i8[player] = i9[player] = 0, iA[player] = iB[player] = 0
	}
	this.da = function(g4) {
		var player, e4 = ab.gK[g4];
		bJ.l7.oN[g4] ? e4 && (aBB(player = g4, aY.aBC(player)), aBD(player), aA.fu(player), aY.clear(player), aBE(player), function(player) {
			ab.ts[player] = 0, ab.fy[player] = [], ab.gC[player] = [], ab.gD[player] = [], ab.ev[player] = []
		}(player)) : !e4 && ab.fy[g4].length || this.aBA(g4)
	}, this.aBA = function(player) {
		! function(player) {
			aX.vy(player) && (ab.wj[player] = be.wd.aBL(), a8.w7++);
			var aBM = aY.aBC(player);
			0 === aBM.length ? b7.fs.zZ(player) && aBN() : (aBB(player, aBM), function(player, aBM) {
				var aBR = aBM[function(aBM) {
					var a6, oB = 0;
					for (a6 = aBM.length - 1; 1 <= a6; a6--) ab.gK[aBM[a6]] > ab.gK[aBM[oB]] && (oB = a6);
					return oB
				}(aBM)];
				9 === a8.jw && 1 === bc.eT[player] && av.jU(8) && aw.aBS(aBR);
				if (b7.fs.zZ(player)) aBN(), aI.wH(aBR, 1);
				else {
					for (var a6 = aBM.length - 1; 0 <= a6; a6--)
						if (b7.fs.za(aBM[a6]) && (bZ.lP[4 - b7.fs.j0(player)]++, b7.fs.zZ(aBM[a6]))) return aI.wH(player, 0);
					b7.fs.j0(player) || aI.a2Q(0, player, aBR)
				}
			}(player, aBM))
		}(player), aBD(player), aBE(player),
			function(player) {
				ab.lT[player] = 0, ab.fy[player] = null, ab.gC[player] = null, ab.gD[player] = null, ab.ev[player] = null
			}(player), aA.fu(player), aY.clear(player), bJ.aBJ.aBK(player)
	}
}

function cp() {
	var input;

	function aBT(e) {
		(e = e.target.files) && 0 < e.length && b3.aBW(e[0])
	}

	function aBa(e) {
		var eq = new Image;
		eq.onload = aBb, eq.src = e.target.result
	}

	function aBb(e) {
		var e = e.target,
			canvas = document.createElement("canvas");
		canvas.width = e.width, canvas.height = e.height;
		canvas.getContext("2d").drawImage(e, 0, 0);
		var e = canvas.width,
			j6 = canvas.height;
		e > bO.aBd || j6 > bO.aBd || e < 10 || j6 < 10 ? (e = "Image dimensions must be between 10 and " + bO.aBd + ".", r.re ? r.re.showToast(e) : alert(e)) : 20 === n.qM && n.aAW().aBb(canvas)
	}
	this.dR = function() {
		(input = document.createElement("input")).type = "file", input.setAttribute("accept", ".png, .jpg, .gif, .jpeg"), input.onchange = aBT
	}, this.xX = function() {
		input && (input.onchange = null, input.value = "", input = null)
	}, this.aBU = function() {
		input.click()
	}, this.aBW = function(aBX) {
		var g = aBX.name.split("."),
			g = g[g.length - 1].toLowerCase();
		"gif" !== g && "jpg" !== g && "jpeg" !== g && "png" !== g || ((g = new FileReader).onload = aBa, g.readAsDataURL(aBX))
	}
}

function cn() {
	this.aBf = null, this.dR = function() {
		10 !== a8.jw ? this.aBf = null : this.aBf = new Uint32Array(a8.eS)
	}, this.iR = function() {
		10 === a8.jw && this.aBg()
	}, this.aBg = function() {
		for (var g4, target, a6r, aBf = this.aBf, vw = ag.jf, zf = ab.gY, a6 = ag.jd - 1; 0 <= a6; a6--)(g4 = vw[a6]) >= a8.jc || (target = Math.max(bH.ex(zf[g4], 4), 2048), a6r = Math.max(aZ.a6s(g4), 100), aBf[g4] += bH.ex(a6r * target, 1e4),
			aBf[g4] > target && (aBf[g4] = target))
	}, this.zk = function(player, il) {
		return il > this.aBf[player] ? (il = this.aBf[player], this.aBf[player] = 0) : this.aBf[player] -= il, il
	}
}

function dP() {
	function aBi(e) {
		var g, e = e.target.files;
		e && 0 < e.length && (e = e[0], "json" === (g = e.name.split("."))[g.length - 1].toLowerCase()) && ((g = new FileReader).onload = aBq, g.readAsText(e))
	}

	function aBq(e) {
		var aBu;
		a8.w5 || (e = JSON.parse(e.target.result), aBu = a8.data = new a0Z, aBv(e, aBu, "mapType", 0, 2), aBv(e, aBu, "mapProceduralIndex", 0, 255), aBv(e, aBu, "mapRealisticIndex", 0, 255), aBv(e, aBu, "mapSeed", 0, 16383), function(aBt, aBu, g5,
				max) {
				aBt = aBt[g5];
				aBu[g5] = aC1(aBt) ? aBt.slice(0, max) : aBu[g5]
			}(e, aBu, "mapName", 20), function(aBt, aBu, g5) {
				var aBc;
				2 === aBu.mapType && (!aC1(aBt = aBt[g5]) || aBt.length <= 20 ? aBu.mapType = 0 : ((aBc = new Image).onload = function() {
					b6.aC2.aC3(aBc, 1), aBc.onload = null, aBc = null
				}, aBc.src = aBt))
			}(e, aBu, "canvas"), aBv(e, aBu, "passableWater", 0, 1), aBv(e, aBu, "passableMountains", 0, 1), aBv(e, aBu, "playerCount", 1, 512), aBv(e, aBu, "humanCount", 1, 1), aBv(e, aBu, "selectedPlayer", 0, 0), aBv(e, aBu, "gameMode", 0, 1),
			aBv(e, aBu, "playerMode", 0, 0), aBv(e, aBu, "battleRoyaleMode", 0, 0), aBv(e, aBu, "numberTeams", 0, 8), aBv(e, aBu, "isZombieMode", 0, 0), aBv(e, aBu, "isContest", 0, 0), aBv(e, aBu, "isReplay", 0, 0), aBy(e, aBu, "elo", 16, 2,
				16383), aBv(e, aBu, "colorsType", 0, 1), aBv(e, aBu, "colorsPersonalized", 0, 1), aBy(e, aBu, "colorsData", 32, 512, 262143), aBv(e, aBu, "selectableColor", 0, 1), aBy(e, aBu, "teamPlayerCount", 16, 9, 512), aBv(e, aBu,
				"neutralBots", 0, 1), aBv(e, aBu, "botDifficultyType", 0, 3), aBv(e, aBu, "botDifficultyValue", 0, 15), aBy(e, aBu, "botDifficultyTeam", 8, 9, 15), aBy(e, aBu, "botDifficultyData", 8, 512, 15), aBv(e, aBu, "spawningType", 0, 2),
			aBv(e, aBu, "spawningSeed", 0, 16383), aBy(e, aBu, "spawningData", 16, 1024, 4095), aBv(e, aBu, "selectableSpawn", 0, 1), aBv(e, aBu, "playerNamesType", 0, 2),
			function(aBt, aBu, g5, size, max) {
				var yq = aBt[g5];
				if (Array.isArray(yq)) {
					for (var yr = new Array(size), eV = Math.min(yq.length, size), a6 = 0; a6 < eV; a6++) yr[a6] = aC1(yq[a6]) ? yq[a6].slice(0, max) : "";
					aBu[g5] = yr
				}
			}(e, aBu, "playerNamesData", 512, 20), aBv(e, aBu, "selectableName", 0, 1), aBv(e, aBu, "aIncomeType", 0, 2), aBv(e, aBu, "aIncomeValue", 0, 255), aBy(e, aBu, "aIncomeData", 8, 512, 255), aBv(e, aBu, "tIncomeType", 0, 2), aBv(e, aBu,
				"tIncomeValue", 0, 255), aBy(e, aBu, "tIncomeData", 8, 512, 255), aBv(e, aBu, "iIncomeType", 0, 2), aBv(e, aBu, "iIncomeValue", 0, 255), aBy(e, aBu, "iIncomeData", 8, 512, 255), aBv(e, aBu, "sResourcesType", 0, 2), aBv(e, aBu,
				"sResourcesValue", 0, 2047), aBy(e, aBu, "sResourcesData", 16, 512, 2047), n.rx(), n.l7.aBs[0] = 0, n.o(19))
	}

	function aBv(aBt, aBu, g5, min, max) {
		aBt = aBt[g5];
		aBu[g5] = "number" == typeof aBt && min <= aBt && aBt <= max ? Math.floor(aBt) : aBu[g5]
	}

	function aC1(os) {
		return "string" == typeof os
	}

	function aBy(aBt, aBu, g5, aC4, size, max) {
		var yq = aBt[g5];
		if (Array.isArray(yq)) {
			for (var yr = new(8 === aC4 ? Uint8Array : 16 === aC4 ? Uint16Array : Uint32Array)(size), eV = Math.min(yq.length, size), a6 = 0; a6 < eV; a6++) yr[a6] = bH.oj(yq[a6], 0, max);
			aBu[g5] = yr
		}
	}
	this.aBh = function() {
		var input = document.createElement("input");
		input.type = "file", input.setAttribute("accept", ".json"), input.onchange = aBi, input.click()
	}, this.aBj = function() {
		for (var aBm, a80, a3S = a8.data, keys = Object.keys(a3S), aBk = {}, a6 = 0; a6 < keys.length; a6++) {
			var key = keys[a6];
			a3S[key] instanceof Uint8Array || a3S[key] instanceof Uint16Array || a3S[key] instanceof Uint32Array ? aBk[key] = Array.from(a3S[key]) : aBk[key] = a3S[key]
		}
		aBk.canvas = 2 === aBk.mapType && aBk.canvas ? aBk.canvas.toDataURL() : null, aBm = aBk, aBm = JSON.stringify(aBm, null, 2), aBm = new Blob([aBm], {
			type: "application/json"
		}), (a80 = document.createElement("a")).href = URL.createObjectURL(aBm), a80.download = "tt_scenario.json", a80.click()
	}
}

function cO() {
	var aC5, aC6, size, ik, il, id, aC7;

	function aC8(player) {
		return player < a8.jc ? aC5 * player : aC5 * a8.jc + aC6 * (player - a8.jc)
	}
	this.dR = function() {
		aC5 = a8.jc < 16 ? 12 : 8, aC6 = 4;
		var eV = aC8(a8.eS);
		size = new Uint8Array(a8.eS), ik = new Uint16Array(eV), il = new Uint32Array(eV), id = new Uint16Array(eV), aC7 = new Uint8Array(eV)
	}, this.oi = function(a3f, aC9) {
		var aCA = this.gZ(a3f, aC9),
			aC9 = (this.gX(a3f, aC9, 0), b7.fs.fv(a3f, aCA));
		bZ.fw(a3f, aCA - aC9, 12)
	}, this.clear = function(player) {
		size[player] = 0
	}, this.aBP = function(player, aC9) {
		var aCD, aC9 = function(player, aC9) {
			var a6, kM = aC8(player);
			for (a6 = size[player] - 1; 0 <= a6; a6--)
				if (0 === id[kM + a6] && ik[kM + a6] === aC9) return a6;
			return size[player]
		}(player, aC9);
		aC9 !== size[player] && (aCD = il[aC8(player) + aC9], this.fx(player, aC9), this.ih(player, aCD, a8.eS))
	}, this.iy = function(player, aC9) {
		for (var kM = aC8(player), a6 = size[player] - 1; 0 <= a6; a6--)
			if (0 === id[kM + a6] && ik[kM + a6] === aC9) return !0;
		return !1
	}, this.jG = function(player) {
		return player < a8.jc ? size[player] < aC5 : size[player] < aC6
	}, this.fc = function(player) {
		return size[player]
	}, this.fi = function(player, a6) {
		return ik[aC8(player) + a6]
	}, this.fd = function(player, a6) {
		return id[aC8(player) + a6]
	}, this.aCE = function(player, aCF) {
		for (var kM = aC8(player), a6 = size[player] - 1; 0 <= a6; a6--)
			if (id[kM + a6] === aCF) return a6;
		return -1
	}, this.fj = function(player, a6) {
		return il[aC8(player) + a6]
	}, this.gZ = function(player, aC9) {
		for (var kM = aC8(player), a6 = size[player] - 1; 0 <= a6; a6--)
			if (0 === id[kM + a6] && ik[kM + a6] === aC9) return il[kM + a6];
		return 0
	}, this.aBG = function(player) {
		for (var kM = aC8(player), ey = 0, a6 = size[player] - 1; 0 <= a6; a6--) ey += il[kM + a6];
		return ey
	}, this.aCG = function(player) {
		for (var kM = aC8(player), ey = 0, a6 = size[player] - 1; 0 <= a6; a6--) 0 === id[kM + a6] && (ey += il[kM + a6]);
		return ey
	}, this.aB5 = function(player) {
		for (var kM = aC8(player), fz = 0, a6 = size[player] - 1; 0 <= a6; a6--) 0 < id[kM + a6] && fz++;
		return fz
	}, this.gX = function(player, aC9, aCD) {
		for (var kM = aC8(player), a6 = size[player] - 1; 0 <= a6; a6--) 0 === id[kM + a6] && ik[kM + a6] === aC9 && (il[kM + a6] = aCD)
	}, this.gI = function(player, a6, aCD) {
		il[aC8(player) + a6] = Math.max(aCD, 0)
	}, this.gJ = function(player, a6) {
		aC7[aC8(player) + a6] = 0
	}, this.fk = function(player, a6) {
		return aC7[aC8(player) + a6]
	}, this.ih = function(player, aCD, aC9) {
		b7.fs.za(aC9) && bZ.lP[6 - b7.fs.j0(player)]++;
		for (var kM = aC8(player), a6 = size[player] - 1; 0 <= a6; a6--)
			if (0 === id[kM + a6] && ik[kM + a6] === aC9) return il[kM + a6] += aCD, void(il[kM + a6] = il[kM + a6] > a8.zg ? a8.zg : il[kM + a6]);
		ik[kM + size[player]] = aC9, il[kM + size[player]] = aCD, id[kM + size[player]] = 0, aC7[kM + size[player]] = 1, size[player]++, player < a8.jc && (aC9 === a8.eF ? aI.wH(player, 5) : player === a8.eF && aa.a2S(aC9))
	}, this.aCH = function(player, aCD, aCF) {
		var kM = aC8(player);
		ik[kM + size[player]] = 0, il[kM + size[player]] = aCD, id[kM + size[player]] = aCF, aC7[kM + size[player]] = 0, size[player]++
	}, this.fx = function(player, oB) {
		var eo, kM;
		if (0 !== size[player])
			for (kM = aC8(player), size[player]--, eo = oB; eo < size[player]; eo++) ik[kM + eo] = ik[kM + eo + 1], il[kM + eo] = il[kM + eo + 1], id[kM + eo] = id[kM + eo + 1], aC7[kM + eo] = aC7[kM + eo + 1]
	}, this.aBC = function(player) {
		for (var eo, kM, aBM = [], a6 = ag.jd - 1; 0 <= a6; a6--)
			for (kM = aC8(ag.jf[a6]), eo = size[ag.jf[a6]] - 1; 0 <= eo; eo--)
				if (0 === id[kM + eo] && ik[kM + eo] === player) {
					aBM.push(ag.jf[a6]);
					break
				} return aBM
	}
}

function cP() {
	var aCI;

	function aCK(player) {
		var hH = aCI[bH.ex((a8.eS - 1) * ab.gK[player], a8.jM)],
			jH = (bb.jZ() < 1920 && (hH = Math.max(bH.ex(100 * (13440 - 6 * bb.jZ()), 1920), hH)), aZ.jI(player));
		return ab.gY[player] > jH && (hH -= bH.ex(2 * hH * (ab.gY[player] - jH), jH)), Math.min(Math.max(hH, 0), 700)
	}

	function aCV(m7) {
		for (var gK = ab.gK, jf = ag.jf, a6 = ag.jd - 1; 0 <= a6; a6--) {
			var g4 = jf[a6];
			b7.fs.fv(g4, bH.ex(m7 * gK[g4], 32))
		}
	}

	function aCS() {
		var st = a8.eF;
		bK.f3[0] = ab.gY[st] - ab.ze[st]
	}

	function aCU(oB) {
		var st = a8.eF;
		bZ.lP[oB] += ab.gY[st] - ab.ze[st] - bK.f3[0]
	}
	this.dY = function() {
		for (var eV = a8.eS, a6 = (aCI = new Uint16Array(eV), 0); a6 < eV; a6++) aCI[a6] = 100 + aCJ(bH.ex(25600 * a6, eV - 4), 9)
	}, this.dR = function() {
		0 === a8.data.iIncomeType ? this.a6s = aCK : 1 === a8.data.iIncomeType ? this.a6s = function(player) {
			return bH.ex(a8.data.iIncomeValue * aCK(player), 64)
		} : this.a6s = function(player) {
			return bH.ex(a8.data.iIncomeData[player] * aCK(player), 64)
		}
	}, this.iR = function() {
		if (bb.jZ() % 10 == 9 && (function() {
				aCS();
				for (var jf = ag.jf, gY = ab.gY, a6 = ag.jd - 1; 0 <= a6; a6--) {
					var g4 = jf[a6],
						aCT = bH.ex(aZ.a6s(g4) * gY[g4], 1e4);
					b7.fs.fv(g4, Math.max(aCT, 1))
				}
				aCU(9)
			}(), function() {
				if (0 !== a8.data.aIncomeType) {
					if (aCS(), 1 === a8.data.aIncomeType)
						for (var gK = ab.gK, jf = ag.jf, m7 = a8.data.aIncomeValue, a6 = ag.jd - 1; 0 <= a6; a6--) {
							var g4 = jf[a6];
							b7.fs.fv(g4, bH.ex(m7 * gK[g4], 128))
						} else 2 === a8.data.aIncomeType && function() {
							for (var gK = ab.gK, jf = ag.jf, m7 = a8.data.aIncomeData, a6 = ag.jd - 1; 0 <= a6; a6--) {
								var g4 = jf[a6];
								b7.fs.fv(g4, bH.ex(m7[g4] * gK[g4], 128))
							}
						}();
					aCU(18)
				}
			}(), bb.jZ() % 100 == 99)) {
			if (aCS(), 0 === a8.data.tIncomeType) aCV(32);
			else if (1 === a8.data.tIncomeType) aCV(a8.data.tIncomeValue);
			else
				for (var gK = ab.gK, jf = ag.jf, m7 = a8.data.tIncomeData, a6 = ag.jd - 1; 0 <= a6; a6--) {
					var g4 = jf[a6];
					b7.fs.fv(g4, bH.ex(m7[g4] * gK[g4], 32))
				}
			aCU(8)
		}
	}, this.jI = function(player) {
		return Math.min(100 * ab.gK[player], a8.a0V)
	}, this.na = function(player, nb) {
		b7.fs.fv(nb, bK.f4[0]), bZ.ny(player, nb), aa.aCM(player, bK.f4[0] + bK.f4[1]), aa.nz(nb, bK.f4[0]), b7.fs.oX(player)
	}, this.aCN = function() {
		for (var eV = ag.jd, vw = ag.jf, kM = 0, zf = ab.gY, a6 = 0; a6 < eV; a6++) kM += zf[vw[a6]];
		return kM
	}, this.aCO = function(x3) {
		for (var g4, eV = ag.jd, vw = ag.jf, kM = 0, zf = ab.gY, eT = bc.eT, a6 = 0; a6 < eV; a6++) eT[g4 = vw[a6]] === x3 && (kM += zf[g4]);
		return kM
	}
}

function cR() {
	var aCZ, aCa, aCb, aCc, aCd, aCe, aCf, aCg, aCh, aCi, aCj, aCk, aCl, aCm, aCn, aCo, aCp, aCq, aCs, aCt, a7t, aCu, aCv, aD2, aD3, aCr = null,
		aCx = 0,
		aCy = !1,
		aCz = new Float32Array(4),
		aD0 = 0,
		aD1 = !0,
		a63 = 400;

	function pF() {
		aCh = Math.floor(+au.pD), aCi = Math.floor(.5 * aCh)
	}

	function aD4() {
		var a6, aD9;
		for (rB.font = b7.pB.qS(1, 100 * aCj), aD9 = 80 / Math.floor(rB.measureText(b7.wv.a05(a8.zg)).width), rB.font = b7.pB.qS(1, 100), a6 = a8.eS - 1; 0 <= a6; a6--) aCg[a6] = 100 / Math.floor(rB.measureText(ab.a2O[a6]).width), aCf[a6] = Math.min(
			aD9, aCg[a6])
	}

	function aDA(a6) {
		return !bf.dk.data[7].value || (a6 = ab.gY[a6]) < 1e6 ? 1 : a6 < 1e7 ? aCz[0] : aCz[Math.min(Math.floor(Math.log10(a6)) - 6, 3)]
	}

	function aD8(hF) {
		aCq = !1, aCp = 1, aCn = aCo = 0, aD1 && (b7.pB.textAlign(hF, 1), b7.pB.textBaseline(hF, 1));
		for (var aDG, aDH, a6, aDI, fontSize, aDJ, lv = hu / hv, lw = hw / hv, m9 = (au.a0 + hu) / hv, mA = (au.j6 + hw) / hv, aDK = 0 !== ab.lT[a8.eF] && aX.vy(a8.eF), eo = ag.jd - 1; 0 <= eo; eo--) a6 = ag.jf[eo], (fontSize = Math.floor(aCm * hv *
			aDA(a6) * aCf[a6] * aCd[a6])) < aCl || aCh <= fontSize || aCb[a6] + aCd[a6] > lv && aCb[a6] < m9 && aCc[a6] + aCe[a6] > lw && aCc[a6] < mA && (aDG = Math.floor(au.a0 * (aCb[a6] + aCd[a6] / 2 - lv) / (m9 - lv)), aDH = Math.floor(au
			.j6 * (aCc[a6] + aCe[a6] / 2 - lw) / (mA - lw) - .1 * fontSize), aDI = aX.a47[a6], hF.font = b7.pB.qS(1 === ab.zY[a6] ? 4 : 1, fontSize), hF.fillStyle = aDL(fontSize, aDI % 2), bf.dk.data[7].value ? aDM(hF, a6, fontSize, aDG, aDH,
			aDI) : aDN(a6, fontSize, aDG, aDH, hF), aCq = !0, 0 < a7t[a6] ? function(aDG, aDH, fontSize, a6, hF) {
			0 === jN[a6] ? ae.ug.vK(aCt[a6]) ? (function(aDG, aDH, fontSize, player, nl, hF) {
				for (var tR = aDH, hE = (hF.globalAlpha = aDV(fontSize), aDA(player) * (bf.dk.data[7].value ? aD0 : aCg[player])), tQ = aDG - .5 * fontSize / hE - .9 * fontSize, ep = 0; ep < 2; ep++) hF.fillText(ae.ug.vE(nl), tQ, tR),
					tQ = aDG + .5 * fontSize / hE + .9 * fontSize;
				hF.globalAlpha = 1
			}(aDG, aDH, fontSize, a6, aCt[a6], hF), aDP(aDG, aDH, fontSize, 0, 0, hF)) : ae.ug.vM(aCt[a6]) ? (aDY(aDG, aDH, fontSize, aCt[a6], 0, hF), aDP(aDG, aDH, fontSize, 0, 1, hF)) : (aDY(aDG, aDH, fontSize, aCt[a6], 1, hF), aDP(aDG,
				aDH, fontSize, 1, 0, hF)) : aDY(aDG, aDH, fontSize, aCt[a6], 0, hF)
		}(aDG, aDH, fontSize, a6, hF) : 0 === jN[a6] && aDP(aDG, aDH, fontSize, 0, 0, hF), aDK && (0 < a7t[a6 + a8.eS] || 0 < a7t[a6 + 2 * a8.eS] || 0 < a7t[a6 + 3 * a8.eS] || 0 < a7t[a6 + 4 * a8.eS]) && function(aDG, aDH, fontSize, a6, hF) {
			var eq, fz = -1;
			for (eq = 4; 1 <= eq; eq--) 0 < a7t[a6 + eq * a8.eS] && fz++;
			for (eq = 1; eq < 5; eq++) 0 < a7t[a6 + eq * a8.eS] && (! function(aDG, aDH, fontSize, eq, a6, aDT, e4, hF) {
				var z2;
				if (1 === eq) {
					a6 = aCt[a6 + a8.eS];
					if (!ae.ug.vL(a6)) return function(aDG, aDH, fontSize, nl, aDT, hF) {
						hF.globalAlpha = aDV(fontSize);
						aDG -= .534 * aDT * fontSize, aDT = aDH + 1.59 * fontSize;
						hF.font = b7.pB.qS(0, .785 * fontSize), hF.fillText(ae.ug.vE(nl), aDG, aDT), hF.globalAlpha = 1
					}(aDG, aDH, fontSize, a6, aDT, hF);
					z2 = ae.ss.un[a6 - 1024 + ae.ug.uy]
				} else z2 = 2 === eq ? aG.a1A()[4].canvas[+(e4 < 255)] : (3 === eq ? aG.a1A()[5] : aG.a1A()[6]).canvas[0];
				a6 = ae.ss.uo, e4 = .8 * fontSize / a6, eq = aDG - .5 * e4 * a6 - .534 * aDT * fontSize, aDG = aDH + 1.4 * e4 * a6;
				hF.setTransform(e4, 0, 0, e4, eq, aDG), hF.globalAlpha = aDV(fontSize), hF.drawImage(z2, 0, 0), hF.globalAlpha = 1, hF.setTransform(1, 0, 0, 1, 0, 0)
			}(aDG, aDH, fontSize, eq, a6, fz, a7t[a6 + eq * a8.eS], hF), fz -= 2)
		}(aDG, aDH, fontSize, a6, hF), (aDJ = aCj * fontSize) < aCl || (hF.font = b7.pB.qS(1, aDJ), aDH += Math.floor(.78 * fontSize), bf.dk.data[7].value ? aDN(a6, aDJ, aDG, aDH, hF) : aDM(hF, a6, aDJ, aDG, aDH, aDI)))
	}

	function aDN(a6, fontSize, ec, ee, hF) {
		var ___id = a6;
		var showName = a6 < a8.jc || !__fx.settings.hideBotNames;
		if (showName) hF.fillText(ab.a2O[a6], ec, ee), a6 < a8.jc && 2 !== ab.zY[a6] || (a6 = fontSize / aCg[a6], hF.fillRect(ec - .5 * a6, ee + b7.pB.vF * fontSize, a6, Math.max(1, .1 * fontSize)));
		bf.dk.data[7].value && __fx.settings.showPlayerDensity && (
			__fx.settings.coloredDensity && (hF.fillStyle = __fx.utils.textStyleBasedOnDensity(___id)),
			hF.fillText(__fx.utils.getDensity(___id), ec, showName ? ee + fontSize : ee)
		);
	}

	function aDM(hF, a6, fontSize, aDG, aDH, aDI) {
		var ___id = a6;
		a6 = b7.wv.a05(ab.gY[a6]);
		aDI >> 1 & 1 ? (hF.lineWidth = .05 * fontSize, hF.strokeStyle = aDL(fontSize, aDI % 2), hF.strokeText(a6, aDG, aDH)) : (1 < aDI && (hF.lineWidth = .12 * fontSize, hF.strokeStyle = aDL(fontSize, aDI), hF.strokeText(a6, aDG, aDH)), hF.fillText(
			a6, aDG, aDH));
		bf.dk.data[7].value || __fx.settings.showPlayerDensity && (__fx.settings.coloredDensity && (hF.fillStyle = __fx.utils.textStyleBasedOnDensity(___id)), hF.fillText(__fx.utils.getDensity(___id), aDG, aDH + fontSize))
	}

	function aDP(aDG, aDH, fontSize, aDT, aDU, hF) {
		var a1k = .95 * fontSize / aCv,
			aDG = aDG - .5 * a1k * aCu + .8 * aDT * fontSize,
			aDT = aDH - 1.76 * a1k * aCv - (.35 - b7.pB.vF + .7) * aDU * fontSize;
		hF.setTransform(a1k, 0, 0, a1k, aDG, aDT), hF.globalAlpha = aDV(fontSize), hF.drawImage(aW.get(4), 0, 0), hF.globalAlpha = 1, hF.setTransform(1, 0, 0, 1, 0, 0)
	}

	function aDY(aDG, aDH, fontSize, nl, aDT, hF) {
		var h9, tQ, a1k;
		hF.globalAlpha = aDV(fontSize), ae.ug.vL(nl) ? (h9 = ae.ss.uo, hF.setTransform(a1k = 1.1 * fontSize / h9, 0, 0, a1k, tQ = aDG - .5 * a1k * h9 - .8 * aDT * fontSize, a1k = aDH - 1.55 * a1k * h9), hF.drawImage(ae.ss.un[nl - 1024 + ae.ug.uy], 0,
			0), hF.setTransform(1, 0, 0, 1, 0, 0)) : (tQ = aDG - .8 * aDT * fontSize, a1k = aDH - (.35 - b7.pB.vF + 1) * fontSize, hF.fillText(ae.ug.vE(nl), tQ, a1k)), hF.globalAlpha = 1
	}

	function aDL(fontSize, aDI) {
		return aCi <= fontSize && fontSize < aCh ? bc.aDa[aDI] + aDV(fontSize).toFixed(3) + ")" : bc.aDb[aDI]
	}

	function aDV(fontSize) {
		return aCi <= fontSize && fontSize < aCh ? 1 - (fontSize - aCi) / (aCh - aCi) : 1
	}

	function aDk(hE, a0) {
		return 1 + Math.floor(aCk * hE * a0)
	}

	function aDh(a6) {
		for (var left = aCb[a6], eo = aCb[a6] - ab.i8[a6] - 1; 0 <= eo; eo--)
			if (!aDl(a6, --left, aCc[a6], aCe[a6])) {
				left++;
				break
			} var right = aCb[a6];
		for (eo = ab.i9[a6] - aCb[a6] - aCd[a6]; 0 <= eo; eo--)
			if (!aDl(a6, ++right + aCd[a6] - 1, aCc[a6], aCe[a6])) {
				right--;
				break
			} var ec = Math.floor((left + right) / 2),
			top = aCc[a6];
		for (eo = aCc[a6] - ab.iA[a6] - 1; 0 <= eo; eo--)
			if (!aDm(a6, ec, --top, aCd[a6])) {
				top++;
				break
			} var bottom = aCc[a6];
		for (eo = ab.iB[a6] - aCc[a6] - aCe[a6]; 0 <= eo; eo--)
			if (!aDm(a6, ec, ++bottom + aCe[a6] - 1, aCd[a6])) {
				bottom--;
				break
			} var ee = Math.floor((top + bottom) / 2);
		aDe(a6, ec, ee, aCd[a6], aCe[a6]) && (aCb[a6] = ec, aCc[a6] = ee)
	}

	function aDe(player, ec, ee, a0, j6) {
		eY = Math.floor(.2 * a0);
		for (var eY, eq = ec + a0 - 1; ec <= eq; eq--)
			if (!aDl(player, eq, ee, j6)) return;
		for (eq = ee + j6 - 1 - (eY = (eY = Math.floor(.25 * j6)) < 1 ? 1 : eY); ee + eY <= eq; eq--)
			if (!aDm(player, ec, eq, a0)) return;
		return 1
	}

	function aDl(player, ec, ee, j6) {
		return aX.uH(player, 4 * (ee * bO.eg + ec)) && aX.uH(player, 4 * ((ee + j6 - 1) * bO.eg + ec))
	}

	function aDm(player, ec, ee, a0) {
		return aX.uH(player, 4 * (ee * bO.eg + ec)) && aX.uH(player, 4 * (ee * bO.eg + ec + a0 - 1))
	}
	this.dR = function() {
		if (a63 = 0 === (a63 = bf.dk.data[11].value) ? 280 : 1 === a63 ? 187 : 112, aCq = !1, aCm = .88, aCj = .5, aCk = 1.8, aCl = 12 - 3 * bf.dk.data[9].value, aCa = aCZ = 0, aCb = new Uint16Array(a8.eS), aCc = new Uint16Array(a8.eS), aCd =
			new Uint16Array(a8.eS), aCe = new Uint16Array(a8.eS), aCf = new Float32Array(a8.eS), aCg = new Float32Array(a8.eS), aCt = new Uint16Array(2 * a8.eS), a7t = new Uint8Array(5 * a8.eS), aD2 = new Uint8Array(a8.eS), aD3 = new Uint8Array(
				a8.eS), aD1 || (aCr = aCr || document.createElement("canvas")), pF(), aCo = aCn = 0, aCp = 1, bf.dk.data[7].value) {
			var a6, aD9;
			for (aD4(), rB.font = b7.pB.qS(1, 100), aD9 = 100 / Math.floor(rB.measureText("900 000").width), a6 = a8.eS - 1; 0 <= a6; a6--) aCf[a6] = Math.min(aD9, 2 * aCg[a6]);
			aD0 = aD9, aCz[0] = 100 / (aD9 * Math.floor(rB.measureText("5 000 000").width)), aCz[1] = 100 / (aD9 * Math.floor(rB.measureText("50 000 000").width)), aCz[2] = 100 / (aD9 * Math.floor(rB.measureText("500 000 000").width)), aCz[3] =
				100 / (aD9 * Math.floor(rB.measureText("1 000 000 000").width))
		} else aD4();
		! function() {
			var a6;
			for (a6 = a8.eS - 1; 0 <= a6; a6--) ab.gK[a6] < 12 ? (aCb[a6] = ab.i8[a6] + 1, aCc[a6] = ab.iA[a6] + 1, aCd[a6] = 1, aCe[a6] = 1) : (aCb[a6] = ab.i8[a6], aCc[a6] = ab.iA[a6] + 1, aCd[a6] = 4, aCe[a6] = 2);
			if (a8.gs)
				for (a6 = 0; a6 < a8.jc; a6++) aCd[a6] = 0;
			aCu = aW.get(4).width, aCv = aW.get(4).height
		}()
	}, this.aCM = function(g4, a2j) {
		a2j > 18 * ab.gK[g4] ? (aD3[g4] = 6, aX.a47[g4] = 2 + aX.a47[g4] % 2) : (aD2[g4] = 4, (aX.a47[g4] < 2 || 3 < aX.a47[g4]) && (aX.a47[g4] = 6 + aX.a47[g4] % 2))
	}, this.nz = function(g4, a2j) {
		a2j > 6 * ab.gK[g4] ? (aD3[g4] = 6, aX.a47[g4] = 4 + aX.a47[g4] % 2) : (aD2[g4] = 4, (aX.a47[g4] < 4 || 5 < aX.a47[g4]) && (aX.a47[g4] = 8 + aX.a47[g4] % 2))
	}, this.resize = function() {
		pF(), aD1 || aD8(aCs)
	}, this.a0R = function() {
		for (var a6 = 0; a6 < a8.jc; a6++) ab.i9[a6] - ab.i8[a6] != 3 || ab.iB[a6] - ab.iA[a6] != 3 ? (aCb[a6] = ab.i8[a6] + (ab.i9[a6] !== ab.i8[a6] ? 1 : 0), aCc[a6] = ab.iA[a6], aCd[a6] = 1, aCe[a6] = 1) : (aCb[a6] = ab.i8[a6], aCc[a6] = ab
			.iA[a6] + 1, aCd[a6] = 4, aCe[a6] = 2)
	}, this.ok = function(player, oB, aDB) {
		! function(player, oB, aDB) {
			player += oB * a8.eS;
			0 === oB ? aCt[player] === aDB && 0 < a7t[player] ? a7t[player] = 0 : (aCt[player] = aDB, a7t[player] = ae.ug.vK(aDB) ? 255 : 64) : 1 === oB ? (a7t[player] = 64, aCt[player] = aDB) : a7t[player] = aDB
		}(player, oB, aDB), 2 === a8.w5 && this.lF(!0)
	}, this.rA = function() {
		aD1 ? aD8(rB) : aCq && (1 !== aCp ? (rB.imageSmoothingEnabled = !0, rB.setTransform(aCp, 0, 0, aCp, 0, 0), rB.drawImage(aCr, -aCn / aCp, -aCo / aCp), rB.setTransform(1, 0, 0, 1, 0, 0), rB.imageSmoothingEnabled = !1) : rB.drawImage(aCr, -
			aCn, -aCo))
	}, this.a4r = function(hf, hi) {
		aCn += hf, aCo += hi
	}, this.xh = function(hf, hi) {
		aa.a4r(hf, hi)
	}, this.zoom = function(yd, kh, ki) {
		aCp *= yd, aCn = (aCn + kh) * yd - kh, aCo = (aCo + ki) * yd - ki
	}, this.lF = function(bl) {
		return !aD1 && !(!aCy && !bl && bb.e3 < aCx + (1 === aCp && 0 === aCn && 0 === aCo && (a8.a0t() || a8.gs || 2 === a8.w5) ? 1e3 : a63) || (aCy = !1, aCx = bb.e3, aD8(aCs), 0))
	}, this.aDE = function(a6) {
		return aDA(a6) * aCf[a6]
	}, this.aDF = function(player) {
		return aCf[player]
	}, this.iR = function() {
		bb.jZ() % 10 == 9 && (aCy = a8.a0v() && !a8.a0t()), !a8.a0t() && 4 <= ++aCa && function() {
			var a6, eo, ep;
			for (aCa = 0, ep = 4; 1 <= ep; ep--)
				for (eo = ag.jd - 1; 0 <= eo; eo--) a6 = ag.jf[eo] + ep * a8.eS, 0 < a7t[a6] && a7t[a6] < 255 && a7t[a6]--;
			if (2 !== a8.w5)
				for (eo = ag.jd - 1; 0 <= eo; eo--) a6 = ag.jf[eo], 0 < a7t[a6] && a7t[a6] < 255 && a7t[a6]--
		}();
		var a6, eo, eV = Math.floor(.1 * ag.jd);
		for (eV = (eV = eV < 8 ? 8 : eV) > ag.jd ? ag.jd : eV, a6 = aCZ + eV - 1; aCZ <= a6; a6--) eo = a6 % ag.jd, ! function(a6) {
			var hE = aDA(a6) * aCf[a6];
			0 < aCd[a6] && aDe(a6, aCb[a6], aCc[a6], aCd[a6], aCe[a6]) ? ! function(a6) {
				for (var ec, ee, a0, j6, e9 = !1, ep = 0; ep < 8; ep++) {
					if (a0 = aCd[a6] + 2, j6 = aCe[a6] + 2, a0 > ab.i9[a6] - ab.i8[a6] + 1 || j6 > ab.iB[a6] - ab.iA[a6] + 1) return e9;
					if (ec = aCb[a6] - 1, ee = aCc[a6] - 1, !aDe(a6, ec, ee, a0, j6)) return e9;
					aCb[a6] = ec, aCc[a6] = ee, aCd[a6] = a0, aCe[a6] = j6, e9 = !0
				}
				return e9
			}(a6) && function(a6, hE) {
				for (var ec, ee, a0, j6, e9 = !1, a82 = aCd[a6], m7 = 1 + Math.floor(.02 * a82), ep = 1; ep < 5; ep++) {
					if ((a0 = a82 + ep * m7) > ab.i9[a6] - ab.i8[a6] + 1) return e9;
					if ((j6 = aDk(hE, a0)) > ab.iB[a6] - ab.iA[a6] + 1) return e9;
					ec = ab.i8[a6] + Math.floor(Math.random() * (ab.i9[a6] - ab.i8[a6] + 2 - a0)), ee = ab.iA[a6] + Math.floor(Math.random() * (ab.iB[a6] - ab.iA[a6] + 2 - j6)), aDe(a6, ec, ee, a0, j6) && (aCb[a6] = ec, aCc[a6] = ee, aCd[
						a6] = a0, aCe[a6] = j6, e9 = !0)
				}
				return e9
			}(a6, hE) && aDh(a6) : ! function(a6, hE) {
				var j6, ec = aCb[a6] + 1,
					ee = aCc[a6] + 1,
					a0 = aCd[a6] - 2;
				for (;;) {
					if (a0 < 1) {
						aCd[a6] = 0;
						break
					}
					if (j6 = aDk(hE, a0), aDe(a6, ec, ee, a0, j6)) return aCb[a6] = ec, aCc[a6] = ee, aCd[a6] = a0, aCe[a6] = j6, 1;
					ec++, ee++, a0 -= 2
				}
				return
			}(a6, hE) ? function(a6, hE) {
				var ec, ee, a0, j6, ep, mE, it = ab.i9[a6] - ab.i8[a6] + 1,
					kw = Math.floor(.02 * it);
				for (mE = -6 * (kw = kw < 1 ? 1 : kw), ep = it; mE <= ep; ep -= kw)
					if (j6 = aDk(hE, a0 = 0 < ep ? ep : 1), ec = ab.i8[a6] + Math.floor(Math.random() * (ab.i9[a6] - ab.i8[a6] + 2 - a0)), ee = ab.iA[a6] + Math.floor(Math.random() * (ab.iB[a6] - ab.iA[a6] + 2 - j6)), aDe(a6, ec, ee, a0,
							j6)) return aCb[a6] = ec, aCc[a6] = ee, aCd[a6] = a0, aCe[a6] = j6
			}(a6, hE) : aDh(a6)
		}(ag.jf[eo]);
		aCZ = (aCZ += eV) % ag.jd
	}, this.lA = function() {
		var a6, g4, hO, hP;
		if (bb.jZ() % 4 == 1)
			for (a6 = ag.jd - 1; 0 <= a6; a6--) g4 = ag.jf[a6], aX.a47[g4] < 2 || ((hO = Math.max(aD2[g4] - 1, 0)) === (hP = Math.max(aD3[g4] - 1, 0)) ? 0 === hO && (aX.a47[g4] %= 2) : 0 === hP && aX.a47[g4] < 6 && (aX.a47[g4] += 4), aD2[g4] =
				hO, aD3[g4] = hP)
	}, this.a2S = function(player) {
		var a6 = player + 2 * a8.eS,
			e4 = a7t[a6];
		return 0 < e4 && (aI.wC(50, player), a7t[a6] = 0, 255 === e4)
	}, this.a1U = function(player) {
		return 255 === a7t[player + 2 * a8.eS]
	}
}

function cT() {
	var aDn, aDo;
	this.dR = function() {
		aDn =
			"Abbasid Caliphate;Aceh s;Achaemenid Z;Afsharid z;Aghlabid Emirate;Ahom z;Akkadian Z;Aksumite Z;Akwamu;Alaouite z;Almohad Caliphate;Almoravid z;Angevin Z;Aq Qoyunlu;Armenian Z;Assyria;Ashanti Z;Austrian Z;Austria-Hungary;Ayyubid z;Aztec Z;Aulikara Z;Babylonian Z;Balhae;Banten s;S Banjar;Bamana Z;Bengal s;Benin Z;Kadamba z;Bornu Z;E Brazil;Britannic Z;British Z;British Raj;Bruneian Z;Bukhara Z;Burgundian State;Buyid z;Byzantine Z;Caliphate of Córdoba;Cao Wei;Carthaginian Z;Cebu Rajahnate;Chagatai Khanate;Chalukya z;Chauhan z;Chavín Z;Chenla;Chera z;Chola z;Comanche Z;Congo Free State;Crimean Khanate;Dacian Z;Delhi s;Demak s;Durrani Z;Dutch Z;Egyptian Z;Elamite Z;Exarchate of Africa;Abyssinia;Fatimid Caliphate;First French Z;Frankish Z;Funan;Gallic Z;Gaza Z;Republic of Genoa;German Z;Ghana Z;Ghaznavid z;Ghurid z;Goguryeo;Goryeo;Gorkha Z;Göktürk Khaganate;Golden Horde;S Gowa;Seljuq Z;Gupta Z;Hafsid Y;Han z;Hanseatic League;E Harsha;Hephthalite Z;Hittite Z;Holy Roman Z;Hotak z;Hoysala Z;Hunnic Z;Husainid z;Idrisid z;Ilkhanate;K Israel;K Judah;Inca Z;Italian Z;E Japan;Jin z;Johor Z;Jolof Z;Joseon;Kaabu Z;Kachari Y;Kalmar Union;Kanem Z;Kanva z;Kara-Khanid Khanate;Kazakh Khanate;Khazar Khaganate;Khmer Z;Khilji z;Khwarazmian z;Kievan Rus';Konbaung z;Kong Z;Korean Z;Kushan Z;K Kush;Lakota;Latin Z;Later Lê z;Liao z;Lodi s;Khmer Z;Macedonian Z;Majapahit Z;Mali Z;Malacca Z;Mamluk s;Manchukuo;Maratha Z;Marinid z;Massina Z;Mataram s;Mauretania;Mauryan Z;Median Z;Mlechchha z;Ming z;Mitanni Z;Mongol Z;Mughal Z;Nanda Z;Nguyễn z;North Sea Z;E Nicaea;Numidia;Omani Z;Ottoman Z;Oyo Z;Pagan Z;Pahlavi z;Pala Z;Palmyrene Z;Parthian Z;Pontic Z;Portuguese Z;K Prussia;Ptolemaic Z;Qajar z;Qara Qoyunlu;Qin z;Qing z;Ramnad Sethupathis;Rashidun Caliphate;Rashtrakuta z;Roman Z;Rouran Khaganate;Rozwi Z;Rustamid z;Russian Z;Tsardom of Russia;Saadi z;Safavid z;Saffarid z;Sassanid z;Satavahana z;Samanid Z;Soviet Union;Saudeleur z;Duchy of Savoy;Seleucid Z;Serbian Z;Shu Han;Shang z;Siam Z;Sikh Z;Singhasari;Sokoto Caliphate;Song z;Songhai Z;Spanish Z;Srivijaya Z;Sui z;K Mysore;Shunga Z;S Sulu;Sumer;Sur Z;Swedish Z;Tahirid z;Tang z;Tây Sơn z;S Ternate;E Thessalonica;German Reich;Tibetan Z;Tondo z;S Tidore;Timurid Z;K Tlemcen;E Trebizond;Toltec Z;Toungoo z;Toucouleur Z;Tu'i Tonga Z;Turgesh Khaganate;Umayyad Caliphate;Uyunid Emirate;Uyghur Khaganate;Uzbek Khanate;Vandal Y;Vijayanagara Z;Republic of Venice;Wari Z;Wassoulou Z;Wattasids;Western Roman Z;Eastern Wu;Western Xia z;Xin z;Yuan z;Zand z;Zhou z;Zulu Z;Yugoslavia;Kosovo;Sikkim;Kanem–Bornu Z;Wadai Z;Ethiopian Z;Rozvi Z;Sasanian Z;E Vietnam;Shilluk Y;K Aksum;Gwiriko Y;Toro Y;Malindi Y;K Loango;K Mapungubwe;Ryukyu Y;K Cyprus;K Jerusalem;Garhwal Y;K Nepal;K Cambodia;Champa Y;Hanthawaddy Y;Phayao Y;K Sardinia;K Sicily;K Gwynedd;K Scotland;K Desmond;K Poland;K Hungary;K Croatia;K Bohemia;Albanian Y;K Georgia;K Portugal;Khanate of Sibir;K Romania;Cossack Hetmanate;Duchy of Bouillon;K Ireland;Lordship of Ireland;K Italy;Republic of Pisa;Idrisid z;Almoravid z;Almohad Caliphate;Marinid z;Wattasid z;Saadian z;Republic of Salé;Rif Republic;K Kush;Makuria;Alodia;Ayyubid z;Mamluk s;Egypt Eyalet;K Fazughli;S Sennar;S Darfur;Mahdist State;S Egypt;K Egypt;Emirate of Cyrenaica;K Libya;Republic of Egypt;Republic of the Sudan;United Arab Republic;Libyan Arab Republic;Zirid z;Hafsid z;K Kuku;Regency of Algiers;Gurunsi;Liptako;Tenkodogo;Wogodogo;Yatenga;Bilanga;Bilayanga;Bongandini;Con;Macakoali;Piela;Nungu;K Sine;K Saloum;K Baol;K Cayor;K Waalo;Bundu;Bonoman;Gyaaman;Denkyira;Mankessim Y;K Dahomey;Oyo Z;K Nri;Aro Confederacy;Kwararafa;Biafra;Buganda;Bunyoro;Ankole;Busoga;Tanganyika;Kuba Y;K Luba;K Lunda;Yeke Y;K Ndongo;Kasanje Y;K Matamba;Mbunda Y;Chokwe Y;Kazembe Y;K Butua;Ndebele Y;Mthethwa Z;Bophuthatswana;Ciskei;Transkei;Venda;Rhodesia;Kart z;Nogai Horde;Khanate of Bukhara;Khanate of Khiva;Khamag Mongol;Northern Fujiwara;Kamakura Shogunate;Ashikaga Shogunate;Jaxa;Republic of Ezo;Jiangxi Soviet;Hunan Soviet;Guangzhou Commune;Gojoseon;Alaiye;Beylik of Bafra;Kara Koyunlu;Kars Republic;K Iraq;Arab Federation;Kar-Kiya z;Baduspanids;Marashiyan z;Afrasiyab z;Mihrabanid z;Safavid Iran;Sheikhdom of Kuwait;Bani Khalid Emirate;Emirate of Diriyah;Emirate of Najd;Muscat and Oman;Emirate of Riyadh;S Najd;K Hejaz;Fadhli s;Emirate of Beihan;Emirate of Dhala;S Lahej;Republic of Kuwait;K Cochin;Jaffna Y;Laur Y;Pandya z;Jaunpur s;Jaintia Y;Hyderabad State;Travancore;Udaipur State;Manikya z;Lan Xang;K Vientiane;K Champasak;Lao Issara;K Laos;Pyu States;Ava;Mon Ys;Pegu;K Mrauk U;Taungoo z;Shan States;Arakan;Raktamaritika;Singhanavati;Dvaravati;Ngoenyang;Hariphunchai;Tambralinga;Lavo Y;Langkasuka;Sukhothai Y;S Singora;Ayutthaya Y;Thonburi Y;Lan Na;Pattani Y;Jambi s;Palembang s;S Deli;S Langkat;S Serdang;S Cirebon;K Pajang;K Bali;Bima s;K Larantuka;K Banggai;Luwu;S Bone;Caucasian Albania;Kabardia;Circassia;K Abkhazia;Elisu s;Avar Khanate;Caucasian Imamate;K Imereti;K Kartli;K Kakheti;Crown of Aragon;Emirate of Granada;K Majorca;Crown of Castile;K Haiti;Cocollán;Zapotec Civilization;Mosquito Y;Somoza Regime;Iroquois Confederacy;Cherokee Nation;Vermont Republic;State of Muskogee;K Alo;K Sigave;K Fiji;K Nauru;K Chile;Muisca Confederation;El Stronato;K Chimor;Jungle Republic;Liga Federal;Supreme Junta;Weimar Republic;K Bavaria;Bremen;Frankfurt;Hamburg;K Hanover;Holstein;Lippe;Nassau;Oldenburg;Pomerania;Reuss;Saxe-Altenburg;Saxony;Schleswig;Waldeck;Württemberg;Helvetic Republic;Republic of Florence;Duchy of Urbino;Republic of Cospaia;Duchy of Lucca;Duchy of Mantua;Duchy of Milan;Papal States"
			.split(";"), aDo =
			"Pestilent Dominion;Wretched Realm;Damned Province;Corrupt Zone;Cursed Territory;Blight Nation;Haunted Expanse;Malevolent State;Ruined Empire;Contaminated Land;Epidemic Domain;Forsaken District;Abandoned Wasteland;Necrotic Enclave;Tainted Domain;Decayed Principality;Infested Region;Malignant Territory;Toxic Dominion;Ravaged Sector;Ghostly Realm;Plagued Commonwealth;Afflicted State;Desolate Nation;Apocalyptic Zone;Radiated Province;Deathly District;Pestilence Haven;Doom Territory;Malefic Expanse;Abandoned State;Cursed Haven;Corroded Zone;Hauntland;Noxious Nation;Infected Enclave;Ruinous Domain;Wasteland Woe;Rotten Principality;Voided Land;Vile Dominion;Catastrophic Region;Eerie Expanse;Desolation State;Forsaken Outpost;Contagion District;Damaged Province;Abhorrent Sector;Accursed Nation;Doomstruck Land;Radiant Ruin;Deathly Enclave;Malefic Dominion;Plague District;Infected Haven;Corrupt State;Pestilent Territory;Razed Realm;Haunted Wasteland;Toxic Sector;Cursed Dominion;Decaying Province;Forsaken Enclave;Ruinous Region;Malignant Haven;Infested State;Ghostly Nation;Tainted Territory;Damned District;Radiated Dominion;Desolate Expanse;Apocalyptic Land;Death Zone;Wretched State;Malevolent Haven;Plagued Nation;Noxious Domain;Voided Territory;Eerie Sector;Accursed Province;Necrotic District;Doom Haven;Haunt Realm;Rotten Nation;Forsaken Territory;Infected State;Abhorrent Expanse;Malignant Land;Toxic Dominion;Ruined District;Ghostland;Cursed Sector;Radiant Nation"
			.split(";");
		for (var a2l = ["K ", " Y", "E ", " Z", " z", " s", "S "], aDp = ["Kingdom of ", " Kingdom", "Empire of ", " Empire", " Dynasty", " Sultanate", "Sultanate of "], a6 = aDn.length - 1; 0 <= a6; a6--)
			for (var eo = a2l.length - 1; 0 <= eo; eo--) aDn[a6] = aDn[a6].replace(a2l[eo], aDp[eo]);
		if (__fx.settings.realisticNames) aDn = realisticNames;
	}, this.a0g = function() {
		var eV = a8.jc,
			a2O = ab.a2O,
			wx = ab.wx,
			playerNamesData = a8.data.playerNamesData;
		if (!playerNamesData || playerNamesData.length < eV)
			for (var a6 = 0; a6 < eV; a6++) a2O[a6] = wx[a6] = "Player " + av.iu(1e3);
		else
			for (a6 = 0; a6 < eV; a6++) a2O[a6] = wx[a6] = playerNamesData[a6]
	}, this.a2 = function() {
		if (9 === a8.jw) {
			for (var hH = av.random(), aDv = aDn, aDw = aDo, eV = aDv.length, kM = a8.data.teamPlayerCount[7], a2O = ab.a2O, wx = ab.wx, a6 = kM - 1; a6 >= a8.jc; a6--) a2O[a6] = wx[a6] = aDv[(a6 + hH) % eV];
			for (eV = aDw.length, a6 = kM; a6 < a8.eS; a6++) a2O[a6] = wx[a6] = aDw[a6 % eV]
		} else(2 === a8.data.playerNamesType ? function() {
			for (var eV = a8.eS, a2O = ab.a2O, wx = ab.wx, playerNamesData = a8.data.playerNamesData, a6 = a8.jc; a6 < eV; a6++) a2O[a6] = wx[a6] = playerNamesData[a6]
		} : 1 === a8.data.playerNamesType ? function() {
			for (var a2O = ab.a2O, wx = ab.wx, a6 = a8.jc; a6 < a8.eS; a6++) a2O[a6] = wx[a6] = "Bot " + av.iu(1e3)
		} : function() {
			for (var aDv = aDn, eV = aDv.length, hH = av.random(), a2O = ab.a2O, wx = ab.wx, a6 = a8.jc; a6 < a8.eS; a6++) a2O[a6] = wx[a6] = aDv[(a6 + hH) % eV]
		})()
	}
}

function co() {
	this.aDx = [], this.aDy = [], this.dR = function() {
		this.aDx = [], this.aDy = []
	}, this.iR = function() {
		0 <= this.aDx.length && this.aDz(this.aDx), 0 <= this.aDy.length && this.aDz(this.aDy)
	}, this.aDz = function(g) {
		for (var ep = -1, a6 = g.length - 1; 0 <= a6; a6--)
			if (g[a6].e3--, g[a6].e3 <= 0) {
				ep = a6;
				break
			} for (a6 = ep; 0 <= a6; a6--) g.shift()
	}, this.a1I = function(id, vw, aE0) {
		return this.er(this.aDx, id, vw, aE0)
	}, this.aE1 = function(id, vw, aE0) {
		return this.er(this.aDy, id, vw, aE0)
	}, this.er = function(g, id, vw, aE0) {
		return ! function(g, id, vw) {
			var a6, k1;
			for (a6 = vw.length - 1; 0 <= a6; a6--)
				for (k1 = g.length - 1; 0 <= k1; k1--)
					if (g[k1].player === vw[a6] && id === g[k1].id) return 1;
			return
		}(g, id, vw) && (aE0 && function(g, id, vw) {
			var a6;
			for (a6 = vw.length - 1; 0 <= a6; a6--) g.push({
				player: vw[a6],
				id: id,
				e3: 384
			})
		}(g, id, vw), !0)
	}
}

function cS() {
	this.wx = new Array(a8.eS), this.a2O = new Array(a8.eS), this.zY = new Uint8Array(a8.eS), this.lT = new Uint8Array(a8.eS), this.i8 = new Uint16Array(a8.eS), this.iA = new Uint16Array(a8.eS), this.i9 = new Uint16Array(a8.eS), this.iB =
		new Uint16Array(a8.eS), this.gK = new Uint32Array(a8.eS), this.ts = new Uint32Array(a8.eS), this.gY = new Uint32Array(a8.eS), this.fy = null, this.gC = null, this.gD = null, this.ev = null, this.oW = new Uint16Array(a8.eS), this.iZ =
		new Uint16Array(a8.eS), this.ia = new Uint16Array(a8.eS), this.wj = new Uint16Array(a8.eS), this.wp = new Uint8Array(a8.eS), this.ze = new Uint16Array(a8.eS), this.dR = function() {
			this.wx.fill(""), this.a2O.fill(""), this.zY.fill(0), this.lT.fill(0), this.i8.fill(0), this.iA.fill(0), this.i9.fill(0), this.iB.fill(0), this.gK.fill(0), this.ts.fill(0), this.gY.fill(0), this.fy = new Array(a8.eS), this.gC = new Array(
				a8.eS), this.gD = new Array(a8.eS), this.ev = new Array(a8.eS), this.oW.fill(0), this.iZ.fill(0), this.ia.fill(0), this.wj.fill(0), this.wp.fill(0), this.ze.fill(0)
		}
}

function cm() {
	this.aE4 = function(player) {
		aB.lS(player), a8.w7++, ab.zY[player] = 2, ab.wj[player] = be.wd.aBL(), player === a8.eF && (aS.show(!1, !1), aR.a6g(), bN.result.wn()), aa.a2S(player)
	}
}

function cM() {
	this.jf = null, this.jd = 0, this.a0k = function() {
		for (this.jd = 0, a6 = a8.eS - 1; 0 <= a6; a6--) 0 !== ab.lT[a6] && this.jd++;
		this.jf = new Uint16Array(this.jd);
		for (var eV = 0, a6 = 0; a6 < a8.eS; a6++) 0 !== ab.lT[a6] && (this.jf[eV++] = a6)
	}, this.l9 = function() {
		for (var gK = ab.gK, ts = ab.ts, wp = ab.wp, jf = ag.jf, a6 = ag.jd - 1; 0 <= a6; a6--) {
			var e4, g4 = jf[a6];
			gK[g4] <= bH.ex(ts[g4], 4) ? af.da(g4) : gK[g4] >= ts[g4] ? (e4 = gK[g4], 250 <= (ts[g4] = e4) && (wp[g4] = 1)) : ts[g4] -= Math.max(1, bH.ex(ts[g4] - gK[g4], 1e3))
		}
		this.aE6()
	}, this.aE6 = function() {
		for (var lT = ab.lT, je = this.jf, a7K = this.jd, a6 = a7K - 1; 0 <= a6; a6--) 0 === lT[je[a6]] && (je[a6] = je[--a7K]);
		this.jd = a7K
	}
}

function cU() {
	var aE7;
	this.k5 = null, this.dR = function() {
		aE7 = [], 9 === a8.jw && this.aE8()
	}, this.aE8 = function() {
		var aE9 = [57, 85, 105, 150, 190, 333];
		if (this.k5 = [0, 0, 0, 0, 0, 0], a8.jc <= aE9[0]) this.k5[0] = Math.max(bH.ex(a8.jc * (512 - a8.jc), aE9[0]), 13), a8.k0 = this.k5[0];
		else {
			a8.k0 = a8.eS - a8.jc;
			for (var a6 = 1; a6 < 6; a6++)
				if (a8.jc <= aE9[a6]) {
					this.k5[a6 - 1] = 512 - aE9[a6 - 1] - bH.ex((512 - aE9[a6 - 1]) * (a8.jc - aE9[a6 - 1]), aE9[a6] - aE9[a6 - 1]), this.k5[a6] = 512 - a8.jc - this.k5[a6 - 1];
					break
				}
		}
		a8.data.numberTeams = (0 < a8.jc) + (0 < a8.k0), a8.data.playerCount = a8.tO = a8.jc + a8.k0, a8.data.teamPlayerCount = new Uint16Array([0, 0, 0, 0, 0, 0, 0, a8.jc, a8.k0]), a8.a0a.a0e()
	}, this.aBS = function(player) {
		aE7.push({
			player: player,
			fz: 14 + av.iu(20)
		})
	}, this.iR = function() {
		if (9 === a8.jw)
			for (var a6 = aE7.length - 1; 0 <= a6; a6--) --aE7[a6].fz <= 0 && (aa.ok(aE7[a6].player, 0, ae.ug.v1 + ae.ug.vG), aE7.splice(a6))
	}
}

function d3() {
	function aEN() {
		return {
			eg: bO.eg,
			eh: bO.eh,
			sp: bO.sp,
			sl: bO.sl,
			sm: bO.sm,
			sq: bO.sq,
			eB: bO.eB,
			mapSeed: bO.mapSeed
		}
	}

	function aEF(a6) {
		return 1 !== a6 && bO.aEI(a6) && a6 !== bO.aEO()
	}
	this.aEB = 22, this.aBd = 4096, this.eg = 0, this.eh = 0, this.sp = null, this.sl = null, this.sm = null, this.sq = null, this.eB = 0, this.mapSeed = 0, this.sn = !1, this.so = new aEC, this.sf = new aED, this.a2r = new aEE, this.dR =
function() {
		this.sf.dR()
	}, this.a2 = function(map, a9y) {
		((map %= this.aEB) !== this.eB || aEF(this.eB) && a9y !== this.mapSeed) && (this.sn = !1, this.so.aEG(), av.a0f(map), this.eB = map, this.mapSeed = a9y, aEF(map) && (bO.sf.sg[map].aEH = a9y), this.aEI(this.eB) ? (map = bO.sf.sg[this.eB],
			this.eg = map.a0, this.eh = map.j6, av.a0f(map.aEH), ak.a2([this.eg, this.eh, map.lY, map.lV]), aEK(), aj.aEL(), ak.aEM()) : aEJ())
	}, this.aA6 = function(map, a9y) {
		var fE = aEN(),
			map = (this.a2(map, a9y), this.so.aEG(), aEN());
		return this.eg = fE.eg, this.eh = fE.eh, this.sp = fE.sp, this.sl = fE.sl, this.sm = fE.sm, this.sq = fE.sq, this.eB = fE.eB, this.mapSeed = fE.mapSeed, map
	}, this.a0z = function(canvas) {
		canvas && this.sp !== canvas && (this.eg = canvas.width, this.eh = canvas.height, this.sp = canvas, this.sl = this.sp.getContext("2d", {
			alpha: !1
		}), this.hC = this.sl.getImageData(0, 0, this.eg, this.eh), this.sq = this.hC.data, this.eB = this.aEO(), this.mapSeed = 0, bO.sf.sg[this.eB].name = a8.data.mapName)
	}, this.eA = function(a6) {
		return 3 === a6 || 7 === a6 || 9 === a6 || 21 === a6 || a6 === this.aEO()
	}, this.aEP = function(a6) {
		return 2 === a6 || 7 === a6 || 9 === a6 || 20 === a6
	}, this.aEQ = function(a6) {
		return 1 === a6
	}, this.aEO = function() {
		return this.aEB
	}, this.aEI = function(a6) {
		return void 0 === this.sf.sg[a6].aER
	}, this.a0y = function(p3) {
		return 0 === p3.mapType ? p3.mapProceduralIndex < 10 ? p3.mapProceduralIndex : 10 + p3.mapProceduralIndex : 1 === p3.mapType ? p3.mapRealisticIndex + 10 : void 0
	}, this.aES = function(p3, aET) {
		0 === p3.mapType ? p3.mapProceduralIndex = aET < 10 ? aET : aET - 10 : 1 === p3.mapType && (p3.mapRealisticIndex = aET - 10)
	}
}

function aEC() {
	function aEc() {
		bO.so.iR()
	}

	function aEi(g4, aEh) {
		0 < aEh && (bO.sq[g4] += aEh, bO.sq[g4 + 1] += aEh, bO.sq[g4 + 2] += aEh)
	}

	function gz(g4) {
		return bO.sq[g4 + 2] > bO.sq[g4] && bO.sq[g4 + 2] > bO.sq[g4 + 1]
	}
	this.a53 = -1, this.e2 = 0, this.aEU = 0, this.aEV = 8, this.aEW = 32, this.aEX = 8, this.aEY = 32, this.aEZ = [0, 0], this.a47 = [0, 0, 0, 0], this.i3 = null, this.aEa = !0, this.aEb = !1, this.aEG = function() {
		-1 !== this.a53 && clearTimeout(this.a53), this.a53 = -1, this.i3 = null, ak.aEM()
	}, this.dR = function() {
		7 === aV.xL() || this.aEb || (this.aEa = !0, this.e2 = 0, this.aEU = 1, this.aEZ = [bO.sf.sg[bO.eB].t8[0], bO.sf.sg[bO.eB].t9[0]], this.a47 = [bO.sf.sg[bO.eB].aER[3], bO.sf.sg[bO.eB].aER[4], bO.sf.sg[bO.eB].aER[5], bO.sf.sg[bO.eB].aER[
			6]], this.aEV = bO.sf.sg[bO.eB].aER[7], this.aEW = bO.sf.sg[bO.eB].aER[8], this.aEX = bO.sf.sg[bO.eB].aER[9], this.aEY = bO.sf.sg[bO.eB].aER[10], this.aEa ? this.a53 = setTimeout(aEc, 16) : this.iR())
	}, this.iR = function() {
		if (8 === aV.xL() && aC.lm()) this.a53 = setTimeout(aEc, 16);
		else {
			if (0 === this.e2) {
				var aEH = av.aEd();
				if (av.a0f(bO.sf.sg[bO.eB].aER[2]), ak.a2([bO.eg, bO.eh, bO.sf.sg[bO.eB].aER[0], bO.sf.sg[bO.eB].aER[1]]), av.a0f(aEH), this.i3 = ak.aEe(), this.e2++, this.aEa) return void(this.a53 = setTimeout(aEc, 16))
			}
			for (var g4, eH, aEH = this.aEa ? 10 : 1e6, aEH = bO.eh - this.aEU - 1 < aEH ? bO.eh - this.aEU - 1 : aEH, u5 = this.aEU + aEH, ee = this.aEU; ee < u5; ee++)
				for (var ec = 1; ec < bO.eg - 1; ec++) gz(g4 = 4 * (eH = ec + ee * bO.eg)) ? this.aEf(g4, eH, 1) : (this.aEf(g4, eH, 0), function(ec, ee, g4) {
					return 1 < ec && gz(g4 - 4) || ec < bO.eg - 2 && gz(g4 + 4) || 1 < ee && gz(g4 - 4 * bO.eg) || ee < bO.eh - 2 && gz(g4 + 4 * bO.eg)
				}(ec, ee, g4) && this.aEg(ec, ee));
			this.aEU = u5, this.aEU >= bO.eh - 1 ? (bO.sl.putImageData(bO.sm, 0, 0, 1, 1, bO.eg - 2, bO.eh - 2), bb.dZ = !0, this.aEG()) : this.aEa && (this.a53 = setTimeout(aEc, 16))
		}
	}, this.aEf = function(g4, eH, oB) {
		aEi(g4, Math.floor(this.aEZ[oB] + this.a47[oB] * this.i3[eH] / 1e4) - bO.sq[g4])
	}, this.aEj = function(g4, hH, aEk, oB, a47) {
		aEi(g4, Math.floor(this.aEZ[oB] + (1 - hH / aEk) * a47) - bO.sq[g4])
	}, this.aEg = function(kh, ki) {
		for (var g4, hH, aEk, a4t = kh - this.aEW, aEl = ki - this.aEW, u6 = kh + this.aEW, u5 = ki + this.aEW, a4t = a4t < 1 ? 1 : a4t, u6 = u6 > bO.eg - 2 ? bO.eg - 2 : u6, u5 = u5 > bO.eh - 2 ? bO.eh - 2 : u5, ee = aEl < 1 ? 1 : aEl; ee <=
			u5; ee++)
			for (var ec = a4t; ec <= u6; ec++) gz(g4 = 4 * (ec + ee * bO.eg)) ? (aEk = this.aEV + (this.aEW - this.aEV) * this.i3[ec + bO.eg * ee] / 1e4, Math.abs(kh - ec) > aEk || Math.abs(ki - ee) > aEk || aEk <= (hH = Math.sqrt((kh - ec) * (
				kh - ec) + (ki - ee) * (ki - ee))) || this.aEj(g4, hH, aEk, 1, this.a47[3])) : (aEk = this.aEX + (this.aEY - this.aEX) * this.i3[ec + bO.eg * ee] / 1e4, Math.abs(kh - ec) > aEk || Math.abs(ki - ee) > aEk || aEk <= (hH = Math
				.sqrt((kh - ec) * (kh - ec) + (ki - ee) * (ki - ee))) || this.aEj(g4, hH, aEk, 0, this.a47[2]))
	}
}

function aEK() {
	2 === bO.eB ? aEm([256], [256], [0, 205, 256], [500, 500, 0], [0, 0, 0]) : 7 === bO.eB ? aEm([512], [512], [0, 380, 512], [500, 500, 0], [0, 0, 0]) : 8 === bO.eB ? aEm([410], [410], [0, 120, 210], [0, 80, 640], [0, 0, 0]) : 9 === bO.eB ? aEm([
		512], [512], [0, 70, 180, 200, 290, 420, 512], [500, 500, 0, 0, 500, 500, 0], [0, 0, 0, 0, 0, 0, 0]) : 20 === bO.eB && aEm([512], [512], [0, 380, 512], [500, 500, 0], [0, 0, 0])
}

function aEm(aEn, aEo, aEp, aEq, aEr) {
	for (var ec, ee, aEt, aEu, yd, aEv, he = aEn.length - 1, aEs = bO.eg + bO.eh, eV = (aEs *= aEs, aEp.length), a6 = eV - 1; 0 <= a6; a6--) aEp[a6] *= aEp[a6];
	var aEw = new Array(eV),
		aEx = new Array(eV),
		aEy = new Array(eV),
		ey = ak.aEe();
	if (void 0 === aEr)
		for (aEr = new Array(eV), a6 = eV - 1; 0 <= a6; a6--) aEr[a6] = 0;
	for (a6 = 1; a6 < eV; a6++) aEw[a6] = aEp[a6] - aEp[a6 - 1], aEx[a6] = aEq[a6] - aEq[a6 - 1], aEy[a6] = aEr[a6] - aEr[a6 - 1];
	for (ec = bO.eg - 1; 0 <= ec; ec--)
		for (ee = bO.eh - 1; 0 <= ee; ee--) {
			for (aEt = aEs, a6 = he; 0 <= a6; a6--) aEt = (aEu = (ec - aEn[a6]) * (ec - aEn[a6]) + (ee - aEo[a6]) * (ee - aEo[a6])) < aEt ? aEu : aEt;
			for (yd = aEq[eV - 1], aEv = aEr[eV - 1], a6 = 1; a6 < eV; a6++)
				if (aEt < aEp[a6]) {
					yd = aEq[a6 - 1] + aAv((aEt - aEp[a6 - 1]) * aEx[a6], aEw[a6]), aEv = aEr[a6 - 1] + aAv((aEt - aEp[a6 - 1]) * aEy[a6], aEw[a6]);
					break
				} aEz(bO.eg * ee + ec, yd, aEv, ey)
		}
}

function aEz(oB, yd, aEv, ey) {
	yd < 500 ? ey[oB] = bH.ex(ey[oB] * yd * 2, 1e3) : 500 < yd && (ey[oB] += bH.ex(2 * (1e4 - ey[oB]) * (yd - 500), 1e3)), ey[oB] += bH.ex(aEv * (10 * yd - ey[oB]), 1e3)
}

function cW() {
	var aF0;

	function aFA(z2, hE, ec, ee, globalAlpha) {
		bO.sl.save(), bO.sl.globalAlpha = globalAlpha, bO.sl.imageSmoothingEnabled = !1, bO.sl.scale(hE, hE), bO.sl.drawImage(z2, Math.floor(ec * (bO.eg / hE - z2.width)), Math.floor(ee * (bO.eh / hE - z2.height))), bO.sl.restore()
	}
	this.a2o = 0, this.a2p = 0, this.a2q = 0, this.a2r = 0, this.dR = function() {
		(aF0 = new Array(bO.aEB))[0] = {
			a0: [0, 5e3, 8e3, 1e4],
			hH: [220, 250, 255, 220],
			qi: [190, 220, 0, 0],
			ep: [170, 200, 0, 0]
		}, aF0[1] = {
			a0: [0, 4e3, 5e3, 6e3, 1e4],
			hH: [25, 0, 100, 0, 25],
			qi: [25, 0, 0, 0, 25],
			ep: [25, 0, 0, 0, 25]
		}, aF0[2] = {
			a0: [0, 500, 2500, 2999, 3e3, 3200, 4200, 5200, 5700, 8800, 1e4],
			hH: [15, 15, 70, 40, 48, 48, 252, 40, 40, 20, 30],
			qi: [80, 80, 190, 90, 46, 46, 248, 180, 180, 90, 140],
			ep: [120, 120, 220, 110, 37, 37, 217, 10, 10, 10, 10]
		}, aF0[3] = {
			a0: [0, 400, 1899, 1900, 3200, 4500, 6e3, 7700, 8499, 8500, 9500, 1e4],
			hH: [10, 10, 20, 10, 30, 10, 16, 40, 50, 55, 230, 230],
			qi: [10, 10, 40, 50, 100, 40, 80, 120, 80, 55, 230, 230],
			ep: [80, 80, 200, 10, 60, 10, 16, 40, 50, 55, 230, 230]
		}, aF0[4] = {
			a0: [0, 300, 1400, 1700, 3e3, 4e3, 1e4],
			hH: [10, 10, 20, 10, 10, 170, 212],
			qi: [20, 20, 60, 100, 100, 110, 170],
			ep: [70, 70, 160, 30, 30, 60, 120]
		}, aF0[5] = {
			a0: [0, 1e3, 3e3, 3500, 4e3, 4500, 7e3, 7500, 8e3, 1e4],
			hH: [10, 10, 20, 10, 5, 10, 20, 5, 20, 25],
			qi: [30, 30, 50, 100, 30, 100, 140, 60, 140, 200],
			ep: [80, 80, 200, 10, 5, 10, 20, 5, 20, 25]
		}, aF0[6] = {
			a0: [0, 700, 2650, 3200, 5e3, 8e3, 1e4],
			hH: [10, 10, 60, 255, 255, 200, 200],
			qi: [10, 10, 60, 255, 255, 200, 200],
			ep: [80, 80, 255, 255, 255, 200, 200]
		}, aF0[7] = {
			a0: [0, 400, 1999, 2e3, 3200, 4e3, 4700, 5500, 6500, 9500, 1e4],
			hH: [10, 10, 80, 255, 255, 55, 6, 70, 20, 155, 255],
			qi: [10, 10, 90, 245, 245, 170, 80, 190, 20, 155, 255],
			ep: [80, 80, 255, 235, 235, 55, 26, 10, 20, 155, 255]
		}, aF0[8] = {
			a0: [0, 700, 1300, 1900, 1901, 2500, 3400, 6e3, 1e4],
			hH: [25, 30, 30, 30, 255, 255, 30, 40, 20],
			qi: [25, 30, 150, 150, 245, 245, 80, 150, 70],
			ep: [60, 170, 170, 170, 235, 235, 30, 40, 40]
		}, aF0[9] = {
			a0: [0, 400, 2009, 2010, 3300, 4e3, 5200, 6500, 8e3, 9500, 1e4],
			hH: [10, 10, 80, 255, 255, 55, 23, 36, 20, 155, 255],
			qi: [10, 10, 90, 245, 245, 170, 60, 160, 20, 155, 255],
			ep: [80, 80, 255, 235, 235, 55, 9, 72, 20, 155, 255]
		}, aF0[20] = {
			a0: [0, 5500, 6700, 6999, 7e3, 7300, 7600, 8200, 1e4],
			hH: [5, 5, 70, 70, 255, 255, 252, 10, 8],
			qi: [20, 28, 190, 190, 255, 255, 248, 90, 60],
			ep: [60, 80, 220, 220, 220, 220, 217, 10, 8]
		}, aF0[21] = {
			a0: [0, 1500, 3e3, 4e3, 5e3, 5999, 6e3, 9500, 1e4],
			hH: [12, 30, 10, 16, 40, 50, 55, 170, 170],
			qi: [45, 100, 40, 80, 120, 80, 55, 170, 170],
			ep: [12, 60, 10, 16, 40, 50, 55, 170, 170]
		}
	}, this.aEL = function() {
		var aF9, a6, eo, fE, hC = function() {
				var hC;
				return bO.sp = document.createElement("canvas"), bO.sp.width = bO.eg, bO.sp.height = bO.eh, bO.sl = bO.sp.getContext("2d", {
					alpha: !1
				}), hC = bO.sl.getImageData(0, 0, bO.eg, bO.eh), bO.sq = hC.data, hC
			}(),
			a0 = aF0[bO.eB].a0,
			hH = aF0[bO.eB].hH,
			qi = aF0[bO.eB].qi,
			ep = aF0[bO.eB].ep,
			ey = ak.aEe(),
			eV = a0.length - 2,
			aF4 = new Array(1 + eV),
			aF5 = new Array(1 + eV),
			aF6 = new Array(1 + eV),
			aF7 = new Array(1 + eV);
		for (eo = eV; 0 <= eo; eo--) aF4[eo] = a0[eo + 1] - a0[eo], aF5[eo] = hH[eo + 1] - hH[eo], aF6[eo] = qi[eo + 1] - qi[eo], aF7[eo] = ep[eo + 1] - ep[eo];
		for (a6 = bO.eg * bO.eh - 1; 0 <= a6; a6--)
			for (eo = eV; 0 <= eo; eo--)
				if (ey[a6] >= a0[eo]) {
					fE = ey[a6] - a0[eo], bO.sq[4 * a6] = hH[eo] + aAv(aF5[eo] * fE, aF4[eo]), bO.sq[4 * a6 + 1] = qi[eo] + aAv(aF6[eo] * fE, aF4[eo]), bO.sq[4 * a6 + 2] = ep[eo] + aAv(aF7[eo] * fE, aF4[eo]), bO.sq[4 * a6 + 3] = 255;
					break
				} bO.sl.putImageData(hC, 0, 0), bO.aEQ(bO.eB) && aW.qm() && bO.aEQ(bO.eB) && (hC = aW.a97("arena"), aF9 = aW.a97("territorial.io"), aFA(hC, 5, .5, .5, .1), aFA(aF9, 2, .5, .45, .1)), bO.sn = !0, bb.dZ = !0
	}, this.a0i = function() {
		for (var g4, ec, ee, aFB, aFC, fG, a2p = 0, a0 = bO.eg, j6 = bO.eh, fE = a0 * j6 * 4, aFD = a7U, aFE = bO.sq, a6 = a0 - 1; 0 <= a6; a6--) aFD[(g4 = a6 << 2) + 2] = aFD[fE - g4 - 2] = 3;
		for (fE = 4 * a0, a6 = j6 - 1; 0 <= a6; a6--) aFD[(g4 = a6 * fE) + 2] = aFD[g4 + fE - 2] = 3;
		for (aFB = a0 - 1, aFC = j6 - 1, ee = 1; ee < aFC; ee++)
			for (fE = ee * a0, ec = 1; ec < aFB; ec++) fG = 1 - (aFE[(g4 = fE + ec << 2) + 2] > aFE[g4 + 1] && aFE[g4 + 2] > aFE[g4]), aFD[g4 + 2] = 2 - fG, a2p += fG;
		this.a2o = (a0 - 2) * (j6 - 2), this.a2r = 0, bO.eA(bO.eB) && (bO.a2r.aFF(), bO.a2r.aFG()), this.a2p = a8.jM = a2p - this.a2r, this.a2q = this.a2o - this.a2p - this.a2r
	}
}

function aEJ() {
	var os;
	10 === bO.eB ? os =
		"DYDz2ESNu-0UYCCrS9c3pBUrKHc94BhIBhIJpIIBnMIAAIrKSSpKABmgf9e7X7ecX-5P0baOy191XXX7eegf9mcfUrrxrKppppKpKSrzUMMMSKKKrJcXcXcmgcXnKIKBmnCIJonCKrrSrrSSxSS9XcJnBe9XemmWXeX99chMIAEprrSrrtbrxIrMKBn9eBcecX9X7f99X90e577VX1VcOWX16XX7X999cX7eWyXXccVVX6rUSrrwUrlzpbbrrU6xzztzxzrztzbaOtaOa5-0WV-77e-9119HcXXZecccceXXX7ce9Xcce9e9meeVof919ee9Wzy5XeXYS9KBcXee_He6ce1ee0zxzta5UaX99c1mXcXhEJp9cNHWcTN9BcnAzJoorIBe0c--nIJoonSIBe-OX-NNOXWbcBgzIHX9xHzS9mcCSI9-nBrrorK9VcP-jHe9_BhxzKHcWC9mZp9-3n9fBnS970a6zs7egrIAAIRUKocXX9gx9npKaUxBppABe5OdHpBe-AC9-17TOWABpKI9-7JmnC6zGtxIBmen9egp6aUlyOzbrbbqUzxHXgjKKBc-ZehlxoeeoxObonox9XonAUbzS9efBdCAArHmjISBhEJnAofBUIJgrpocXxIBUoxHVmnBmmXAExoUxABmdAIBgnBonIAC6oxHVgfMHcXcUXAAGxIBgfxJch9c3enCMzSBe9eXomxHeBgmeCSBgpKMp9hzHfIEzHnArSxHX7pSrUHcnCMrUpSa5UIonABrSBccnBopJttzbxpBonHXpIEKMrMSrxpKxzUzltyUtaTOaOaObaT5UzNTOV0c116rMMKSKrxIKpJpKMSKMGxISCrKMSpKMKrSpSpI9xp9_pMMMMSBoxSryTUUxa5P7-0ttbWzzzxzaN5-NOWVN--0Wa5-0X-0VNVN7TOzaOWzL0bbX0y7NN5Ua17V111749c79e1c-V-----Ow7--N57-OzaN0ba156byNNT6q5OzWaT55-OsOX1777Oa55-5T5UX16tzUOyUtzrpzUrSKKSSAoemnKCIAIICI9KHn9CKBhCSHgenSAJnIJxSMMKKSSpKoopKKHpSoorSzxpWxMS-UKISaOxMOxttyOzy5OzbbtyTOzbtaUxyUyTT6porUrSztzzMSp9eceoogeZp9ZxJx9geeeXe9eZgeC9gegemp9gmpKMSonSxKrrbaUMIKJpMKKKpIACBmeccV71XX7V1mmmmhCCCKJompKKJpMKSKSKpKMJpKBeeceenKpzHnBnBmceee-X1117ememfBn9mfCBmgemf9mfBmf9xromcec7Us8He0u99cWtbc-PeCCS9VecZnBnBemfBn9X9c6aOXA997Y99755VXc6tXXmV5Os-ObVN0yN0bzaT-7ec7N70Wa-OV-5eggnHon9f9efCBpMzop97epCKIpSIBpKrrSKKIKKMKMJehzKKErJeABnIAJc717f9eBnAJzrHe7V9d9ef9gmopKUKC9gmcV6tX73eCIJoonIBnBnBgnCHgjJeZfA9megeegfKCICCJnIA9meZf9mfIEMof9XceXe97X-59XdCIKKpKKCJoeVcf97mZmVVV199YJmX7gceY9gpEOxMMJecrSSGzOxSrxprSxzJzUopSrIxKBpUMIpMprSropEMHnBrpprK91AJpJpIICpBopICCJonKBn9mcme9VcX9ee7X7e9ece9Xe19XcX91Xee9Xcce9VVVccefAAABe7emhBnSSKMSIJhCIJpKJppCKKIIIICJgpIBpAIHpBcoooonIKLObpBnKlzrKIKCJpCJpBnBpUzrrxpxSbbwUxzUprpppppJppMMIrrSSRUbWsOwUzUltbzrxzUzSzUbrrTTUUrSbbV6WbaTOzxzyN5TN-T5TOxbtts71-X-70V0sOWsObbaT0sTObw70tbbzbxbzzyOtyUtbyUaOV1-N0cVN-50aOtza6tzlxzUxSrzUzSSxUSzzOzzs5OyOtyOyUztyObaNOtaUrUxrrUSrrUrMSJrSIMSpKISzKUSpSrSSrzSMMxMSrMSpSrUzSSzzrTUMSpprSzMSzUxSSIEUSrzrUSpMKKxpKrKMKBmmrIKBgpKrzs6VOsUa--5ObzyN77-7X7e970V-5Oa5ObzxSxrzzSrKMUw-OV17X7X1X99X97X9X99cXXXXX977OaOVXeeeeecX7cX7X7X177-7-X-71-7XX97X97cX7VVV1--VObs970cVObtzbtyObrzxSomdKKSSMKqTN5NN0xrMIM5UrKKKpEKrSMSMprSrxMMUzrzrzSrSrSrHXenOtxrrxrxzSrrSrUrrSrSxMSxxKJpKKKJnKKrKIUUSrSrKKzKxKrSrSwUxIBnrxpSSpUzyOzzzzyUSxzRUpCBee7ecXce89omegpIBrpxzSrMJnKrMSFT0tbrMKxKL0VObxprSSlXV-11-c-X-WxzxFUaPcX777OzztzrSrMV-V75X96zzMKrUa9e-7V17gc9XeV90Bf957cVOzrMOX17X7X-X7X7V-N-6aUxCKzUUKprcX-UzSrN17WzrxrNX7ecV17WzzbaOtbxraObrOxrbxwUxpUzrzraOy5OVOWtzyOzzxbzVNXccXcXcX1-V197V-ec5Oy5N1--555UyN-N1---VOWX0Wtcc0aUMMyOs----Zc5-TOtsOWX7c0xzLN-NWbyOyUyUzrbxJe9gfTUxAMxrxzlbzbzbq5UKrJnAABnAAICETUtxSrzrpIpKIUSxraOaOVNTObzWa5NOtxxyOyOc-5A9YBmnBfHceX7-XXcX9e9Y9e5OzUbxSyVUX5OcUa1-UMqNNUbyOtsUWtWbWaObtzbyUWy6bzpJmoh9nIUI99oghSUzrrrSHeHohKCJgrKJemgcrS9nry6xSrUMStxzUSzqUrbrUxUSxxrrprUU6zSrbrtzUSUSzxMKxSMprMKIIIoonIBmohAIAHgf9eHeemfI9nA9mf9c9n9ZeXc9d9n9ccX7VZmoceeHVX1Zn9meZegegegfBhABehABonAHnABhCIBemee9eBfBeecgeohCUxzUbzxI9egegfAUUrHmegemecWcfCUp9meX9Beeef9onrSpAAKKKIyOzyUzJnBjSrxSSIBhMSHgcVYKxBmnzrROzpzxzSKKCKUzKBnoUzzbzpJmegfzyUzFObyUzrrzpKUSlzry6sUyUVN-7NOzbzzlzrzUrUSrrURUxzbzsTUsUWts5NOWa5ObzrUxrtyOWWaOzMSJnIAIprMJorKMIrSKMKKpUKCBonKMJnCJpCIKIKMJmpKIMKJpCJpBxBonHomoemmegnHf9f9cX7ce99emecgn9h9eA9nCHgfBnAIBfHh9eXXce9emec7f9ec1me89eeceme89fHeemX77-ceeeemeX9X9eeecV-V9e9Xe7e9eefBnBeefBfHmnBnBnKBpIEpKxMSKJnBpBnBnBmgmeeX9cXXVcX7Xce1eXcXe7ee9eXeeeX9X7V7V77V--XcXee7ec7X9eXXceX9f9eeee997X9Ve7Zee7WaX5X2Be-cee17X--0tsUbtaT0ta5-Oc--7Xe-X7--OVUtbVT--QA9nBmcXV--97X9ememggnBecJceeXme-cXdABeXeX97cnHgeeI9IA9XcVX7eX99e9e9mgeXeXemmceZmXe9ceXemXmggf9mmnAI9X1eIHcXfBghBmf9BemcX9Y9Ve9--JmZeccXA9Xd9cX9VXVVc7-V-Xee_BnJhIIBnJnBmohBgohBcmmf9eHf99Hf9HmommmmV5N-MvxppxrIICWzsOxX--OV5s0i1mopMKppzTOaN-0XXceV--0lJ7-90mzBlV2N7tRof9JqUsOaW7c8bwrrJchpK9-X7PBfHjKogcP0Jd92SMUwUlxMSErHegnrlxI9X7cY99e7hSzxpxSIIUHozogmgecYIExxxrrrKpKrSrMMrrlxtyUtxblxUyTUbyUUSaUy6Wzttbbc5N5N7V7XWaT7V6aZeVWsV9nIA9X2BmcWc7ooc--f9IBomV-0cnICBeXgn90Wc5TOa7-1-5cX---d11---esD---m8D-1VvAYqV-92glC5--NEEiqV-7Hsjk014I4wognBxwOs0Wc-D4y4gcT--0Y8X-0WalAk--0pHX-1Wsy6EV-a7EDhCBtaT9--X3IIV--_VJV0Ndepmzq1-0XeJbD-5XhvrCqTe-07iCnpteV-7iejk-iAtCxEIrrX71-2smknnEUUpze-e-c-1BtMB--2Kbq--YMmzV-sqPmrF7--Culc-HCwyxxcV-DEWXhte-DZ7mzorSr56eX170LG-rUSrSItzOueVc93c-5ZH-rrRP9-2d613nHdRUR6kP7-CZVZUEKUyUe91e-2ZYhnTPV-t8OMny7-1HZrT-DZf16A9mjFUzlsV--Hh_N-1HlyB-CZhCrSpzrkX7cX-2ZibAr-VMdC8brSrzUxSSIBxpHX17c8CrJe7rrUIpSrUxxzSrMIMOs5OVV7X7X7977V-7P19Xcce--8DNHk-LIcPSpN7-0ODtgnMN1-7Zz5USxyX9c--J2As-9J2CSu-08FHSrR7V-0G5xV-OH5vqV-0LEoV0OLiAnMN70D_f4UKIBnSBgzSrSxSSMSxpSpppzc-5TTUMbV716s117X1Xcce-cXXHcX--0Rs7V3dS04nKonpSSkV7----TMGPxrS-V7--MN-c0HMYnBnrIAIrK-OWV75V-tTEHotV-qMoqSMUUbe9HXV-mNcawnr6xtcVe-3aNiUIq1-6aOwMISlc1-6aSe6rROec-8ac9fISzuX-V1tf-1mnBrlWaN-NajMY9ggeoopCTTTTN6aN1HdgkXoohABnK9n9KJmpogeV-0XJenppSrUzJgghomhp9VnxIAAzOxWbbrIBnJmenBegozlWyObxIKBonIGaOVT50xSk6xJpEpIHnBonBoptxpr56xrzzbonCBnCMMSonzxJmopCIJomX7mceHcV7nJxSABhrbxEKCIJhAA9HgenABrUMbqUpSUrprSrbzzp9hABeXce9YAHcoomnBmmnBmmnpzaTTUrzzMpzWWblbyUUSrUrxbbzzblxrUUbrzSrtztzw6btV19ceWXWzq0aU6aTOta0a0V5777Xce7nA97VOa0X-17VUVV0V17-17X7V7-V----1-V-VcX9A9cWbbzyV-U5T5TOa5NNOaOV1Xe9ce99mZee5OtcWbaTTTTTOWe9ZeXcmcXVV38gtRnCMzSw1X6VcV08hu4rq9--tiGRrac-1Qfbg-dax4zrrIKoeBxErUlzSGbs0VP3eXX97XV-9R0KCsV1OlXjprrP7X7-HRQsCpVc2TRgLxJrKBeKKJe7BhIKKBlwOaUrNTUsNNNcNP91V---PS6VgopVN-LbHRrK999ezrxxoy5Tc7-0bJGjF--6Spy-5bU7rSbuXV4tsIYpKSSrSp50aX-177e-2baNMC5-2Otd7nHrpOba7cV2tv2dnICxz-Uk7cc0mUIkRnBpCBpCIJOWa0VNOtc-19UQnBeegmnIISxJns56zaOWtu7TV--URWN--VDLc-eVE7zSrUX7Xc-5WM4BN1DWTIggpBnEKKKESCWV5T5Wa-N0a9VsP6YRn9cmY9JggoggzUKHfA9XmcP9XZfIJhronABfISpxrUrrI9ABnBggrxxoe9fHmeBdCDUUrHf9orUogrzzJfUU6zUzbbbzrty6brbrxxz57OtsN5OsN5V5VT5V57N56yTUtsNN1cNNVV5VNeeeZeWtu77-XX-KgxCqWVV-P8w5qV-uAjtz5c15XwhBooopBonIKKJNN5-N5-6WVN-8ckmzArUOVeV-uDoWxNV--YoA7-TYoYRoxa57-1_P1T--8NKD-9dNS2ACAUta---dQzr-DPM79mmgcpI9chMKCppxxxrSzIbXc0aT1WVOxk7-N-9c0eauZgfAKrSrrSla-5-7n9-V1eVE3nKUwNVcV0eWZinCF5N0TcbkCMSrzr5OVPXCA9VXV-1b0uV0ezUBxUsXc--mhTc--n9_c1DnTIxCCSMKC9eCKClsT5OsN-V7NNV6QJcYxzUSxzSwUa7X9I99Xd9X-BhW8EE6rUw7ceV6fXkApBmf9f9hKGaOWzzzObV1V-PuipRpJ5--6iiarprP77--DrhL-0iv-fN-7jNKjExzXcc-Y1kshKK-5-V-wF2umWs-03EWs-03_Ms-23gdy-qlmyACJmcgfBnCIIrKpICUSIprUa0VOV5N5---V5---wRnFru7-E6kMClX-4lwIAzq9c-A7r-z5V7gdk8monBgfCCCElzbzxsN995-T5-KgiSunBnABmeeIHprrKJxpIISKICJpKprUzOcOzzUTN---0V--50aN1-1-PV7XX-SnCeY9f9mnUSSKzMtaOWa9VX--bBy1gzSxX-e-4nFNEAqTc-6C7Wgs-EC_DBjN-0nVb2N-3n_EYByN--nfWnV1Bx8ZorUaV9-CnqgbKISrNN9-9-8o5aACrSVWXV-C0gPk-jFRwSM6rsW9VV3h23TmfBjOxMUtaX17-6GYfE-0UHSjwfEzbxpUUq17ZcXeV-h8rqr--3odX6MF--8ogzvMJrN--V1xAI4npKwT7cV0Xp-Yf9nBeehKMKrzzSxrSxrUSzzSxrSMzSzzV-T-7V10Wa6VOWVT1mmeeegn9eeeXmcX97V-IJGnCr1--2JVvD-Bp7gzSxw6aeZcV0hHX5merts-EJjUhq7-2pGMvBtV-hJmVz1-1pJofqV-0KQ3c-0KztN-0L5k7-6LYvE--ILYxhTNc-0LZ57-ALu1CaV-4SIqV-hSQ3na--KpjX--ppknVESTPknBgmgn9f9f9onBmenSpMGzxbtbzbaOV6zbX9-NObWV-4TmmV3SToLnBnJnST5Oa-1-0px0YD-0pylvD--L3Ge--q54IV2CWmWnUUz5Pcec-nO-URhBoUy6VX-1qFuQGc-MOcagpR---CcERs-0PQUc3MPs8gehClzSzbzzUzxMr6tyUzzbzaTP0HgmcVXegeeeXeh9eX7e-JqqUEKIMpzz5T7cXX97-bRBpSKoT5X7--M4g1-grMIbBecemgfMxUpzMzObtu7V0zrrq7e9eV-MTaFhOy9VfLnt2-9-17117VcX1-1X97cVXX9177V-VXV9-WaOSMSSSSrrUSKMKxrrrUSxrrUzsOV7--N-tVN--N0bKIKKQCKRnKQCUtrTUtUSxpMprrUUKxSpxrpprMrxF-EcVGxTX" :
		11 === bO.eB ? os =
		"QREc7lR7oVUYGy_KJOJKKKKuK4OKT_K4KG_u_GJJO_3K_KKKL_4KL__KK_4_LKK_MjzuOOK_KKKOKLKKLLUjzji_KKMgyzdMjzgzzzEszzyzzjvuQvieeid_POOvzkzvzy_TvuOK4GKKvyyzzydJQi_OdKKaLOLajdOPuueaYBzydJdPOybvdbjeuvizwzujuQnunl2wBnBE2-EYBz2nk2kFzwBzznBydnwznEYwnnEBnnwkyvwzEgznzzEwwwwznnxK4KGOJ2zl2nzifvwyw-J0GGJ042nvzEvzwznJEnzlG42zg02KKGFzzEzzeT-woKK3EvoKLOJBnBnzE2EznnwnwznznzpJKKKKOOKG_G_LKFwl2zK8K4JK4KKKKKKKKKKKKF_g38EBemXeeeeeemeemgeXeegf9XgeeexCxzzzoenErMroeXeeegfEzSS9eVcghoeemf9YBe9ee9eXghrzzzKBfIUzrbzUzzzbryOxrzzbbsTXe9geY9egeeBeY91cUy6z6xtxbxzbzlzObrx6ztztue5UyT6zzbzbae7UxyOzzbzzbbtzyUyUtzztbyUzzbuecZeBeXeeecgeV--1ViZ-00JJIV379xwOLKKgzyzK2zF5g4ccBgcn9ggepUxAprzztxtyOzbzzbe90f9cXX99V-cAQAOx-PFLqqmemxp9zzttzIAzrrzzxzzze7X9ZeceX5ece---AorF0B4uUghzzae9-6VjJh_UznK---NUXV1NBEpOLYnzlJ--0X1X--Vl4pk-B5KYEc-D29vazJ-HkP9DmexzxxzzzrbztbseeeHeYHceXV-NC5uUF-R5YYCyX-2Vpc0jCF--5lM7-12TuM-hkQrZrS9X7f9e9enrSxrzaUxx9f9zzHhzUxqOaOsObbzSxoqUxyUY999c9Xcecce7eV5NDrSOLauUwzzzzEGK4K_0F2Z6YfEUoefUtzUzMyNNe9ceec0a2zdLQdyjwynxKKFznpGGJ--1-_X-AW0ZpjvnzCKKJ--1309--02HO---WrDV1sGfOOjzzn4KK-0FYN1qP-2W7RtfkF6J8G-geeemf9gemegfEbqUrxEbyTgecOwUbbxEbyTTUac-H3crrjCLEE1KoQBrofHegeecBefBeeegfAACxUHemeeeeegxrSrzxxoeeXXe9ecdAzUomXexzrzroeXeecc711_rI9nUSxxKMSryUzrzUpxKx9cV7cceghrrJnJmhBe9ee9VUrxy0a5-7e7VVX-7XccOVX99eefKKAAMxMIUxzMrxK9XXXXeXceXceee9mxxp9oeV9mf9eHgmeeWsXnHcmfA9oenJf9XcXcOby999exKKzMIJcceYBggghxrI9e9e99pxzpHeccceX110cXe7cXWzrUzUxzzrzrtzbaOcVcceXccce9Xceegcce6emeZe96buXeXoe7TZhBe2Bmc6eIBdC9eC9fHcHcAC9erxHed90C9MTUzoh9ZjJeofIAzHghHzI9nHYACCA9VxIHcfx9gmmnEJrKErJzSC9xrrrtyTOaUa0xSxKroxMSSrIMKqUlc6bztWx51--P7OyOy0tcX997V-NP6WsUaUbaOaX6VTOzzzxxpHnBnBggofCKSpJxUUo6pzzbtzyUzbxSzogfABeceef9mpSzoppI9e7X9nCCKMMK9fEI9ee19mfBgemh9W91WuI9gf9e5eX17N5NUXc0a1nBenUHfSorpMKMrHXh9XgmY9nMJmV1nIISC93fA9gnKBemp9e9XxKoeeeA9fSMzrxrpMSxMMHorIKII9eecgeceeee9gmghrKKCpKCIJonMozKJp6xyUzSppr5OttzzzzWWtyN5ObcV-5OaOWttyTTN5VWWbbzzrrxaOtbyNTUUrrSMMSpxrrSrUxxUUpSzSMKonIOaN6aVcVNOzUrL17ccXccVPeccX7717cXX-5V0zbzJxOboUKrKrrUxxrrSxxrSorIKSrMpUUISxxAESpGxrsVWzP7XXWzrrxVNXoccWcOcX-6xrV6tx0zxzUtbtzq99777WWVUV-50xaV0tsNUbzpUUzp9nUrpIyOzaUy9ge197e6zlbbbzbbyUzommhxonCHeIxxrxrxrUSxrUrrMKoogmmecmeeZcceX7eXHeeemmmn9eedCzHfoeeeZe_IMzIpoxHXKzUJxxUoUUprza0zxxxrUtyOaUUlbxIMKKKoopCIJpJoommeeeX9A9mmn9cce9Xe9ee19eXe17eA9mgnCKpJnBee7XXXcee7X-99XXeee9993cXV0ba5-XV0aOA919HgmeeBeY9mmX9ememef9ggn9ghA9mXcmeecX7gpCCCBnAAAABnCIICIKpJonCABnBgf9hBpBnBnCCCJonBnJnJonCIKprSKIMKKpJpCIKIIIHrSMpJjJxMpz6zHxCrrMMUSprKSIrMrMUUMrSxrSrSrrUUyTUbbtz6zbr6xxxtbtyOtyU56tzyUTUxzrSpxKMU6lWxzqNUSxpUxEMKJxCJnMKEUHhICEMrHxSUMSrMSrSppppMKMSSMKpKBxMKpppKKCBnCBopIKIKCEKCKKMMSpppSSSMMMMSSKKKKpSKKSKSMMMSrSSSMKpSSSppKICppMrUSyTUztbzzbrxaUq6zttbaObaOa5TOa5NOWWa5TT5-N50V7WWbaUbbtaOX-N-7-1-170cTT5ObaOa5OtttttbaOa5N5-1510c5V--0VVcX-1-V51-N7X-WWV55N55550ta6aNNOa5Oa5OaOaOtbaOaOaOaNOa55NNOV50a5-T50WWV-N--7nBf9mcmgcmmmeBgmee7X17eWba11X7VX7X79X97Jc7V7-V7117X7cV7---V1-X7X97--7X111111711-VX77V7-UMMMSMSrN0V5-UKKCMxpprSSSrMSSKprxrSSSMKKSKrMrrSrMKpprSrKrSSCKKppKpoxMUOzaTOzyUaTUttWtzbbyOts-OyUbbztVObyNNOyTV-0WxWWaNNN7X7VXceXXX17-7WWIBnIBonBd9eAA9Vc7NNV1CIK9117-797X7VX1111WbWy0xUzprSSSpprUxrSxxrzTUbqP6zrSKprxzxzzTUUUztzztxzzbtzSSUSMSzprSrrtzJmmfrSrSUSzaTN756xKxCSSIKMMKKpSKpMKprKprMKpSKpprMMMMMKrJxSSrSaNNOtVN6s---0WV17N-V-0aUWbyN0baOaOaNNOWbyOsN70btaUL0xLT6o-UM6lX6brSppSSSUUSrppEF6pSSSMKKCKVUMUL0tba-USSUKSKSSMKrMKpKSKKCKpIKIM6rSSpxMSppKSMKSSSpSrSxrUSlwT777VV---777X7XX19XXX--7V1Hc1--N0VN570c6bzKMUzrSxprK6xMxxrpCKS5NTT6cN0zltaTOa--57-11-V7X7VcX7c7X77977VN-Oa0aTObaUUoOxpKpqP70btyOwUsOw776rS6twUkUOtWaObX6ta0bVcOcWy5N-5T96XWaWccZeWWtaX97cecWzUxxq1X7cVX77VX999750a6VOttw1XecXnIBe9-VZceX7V0zTT-OtWWbrzSpCCUJltWbbbzxzUpoxopxTUUxprS9zMMSKKxGtaUtzV177177cX7X7X997-OtWaNX150a6V6rxUxtbaOV-NN0WV-75-0V77777X711-1X195XccccXZe_on9c29c799ecVOWaN-55NP-T-TUzzzzlzzzsUzxzzrxAqUyUzuA9770V-5UzbzOzSSUrOVOac7WzzxCrSUMJgpIJrKIHgrSJxSrMSrSrSrrSrSrSrrSrSrU55-X77TOe775OxsXX7X15WzMcXccX-Xee77-VX-UzkOzSq7UbzzxzSX5OVNUbaTP6xzrzccccce1XXeccWzzsP7ce-U6rSzSzbzUxxxzxzUwUqXcPVTT99XXce9eeXzS9cXXX9XceXe9e9ce9cece9e9ececeeeeeceexxxxrHee7ece7Ue9omeeXeeeeeeeccX999e9eeXgef9eeXXXeceec5eXefC9eWcPn9WeXeeef9hzSxHcfx9cBe9emee9X_Sp9e9Xe999XWyce7X9ceeeeXerp9eeeceecVeeeeen97d9ec_BemgeemVTOyTNUbttXVe9cce9eeef9e1ee95eeec--3mJ3-01RcfV-NIoOUF8R8uLgf9hIHeec1Xe9fBeh9mfEzzyUrHenxyUyUtzyUxzzbyTTNf9e0a0cWEvKdK_KKKLKOK_aJaPPOOUeKdUddLTyEukyvizjzzzGK43G3322EBkwBzkwwzwzwzwznwoKKJ0K1X2ABrpzzozzzaUWtacme9hxBcXBoeV9--7KZ5R0K1i5QpxUxzUyUzbxztyX9e9oe7eAHXe9eV--KycF0gAC-Bf9rUzta7c-54dtbV-61qbAAy---LztF1oAWqEUzrzxzbeXeecf9V-94pL6xF--Agu7--4xl31226aIBogfABfBf9nxxMyUztttttzbbzbyUtzbsX9f9e99eeec--5HLZ-A28MQry9f055LVqKKPKOaOddaKaKOOd_bizvy_MeOOOK_LPPK42BnJFzszEo0G4aLKOUjuOLO__GKKKKJHKG32K_KOKbnzzdKOLOeOO_-EoJG5KK_KKKGK2wzElGLK4K44JGJKLLLKFnLLOJF23dLLLK43_OK_KOOKFqKOKeK4KG43KKGGGOKKGKKJKKKKG0OKF_FOK_OKKKPLJK_KLK____LKOKKOLLMjidbzzdPPKOKJOG2pOKOKLLKOUu_PUzzzzYwzwydKdaOOKKOOKKLKaOK_OO__aEeOLTdzzEBydaaKdbEnzjfBnuzdPLLO_OLLOK_OLLLUzEnnEnzEnwwnz42zuRzEwwwwznK2nnwzEnEEEnnwzEzvdKKOLO_OOdOUEnwznnzYwnkEEzyEiuUvjzzzvjnyaTyuiz02yyawBkyeQeeOueddaUibuPJi__9gwnyaOOPTvuPJTbeLzEiYuEiaQEeRydiddddaJ-x4K4deadddaa_daaOdaOaOddePaPOaauddeufEeaLiuOfevduazjuzfvieeeuPueefiviiebe_3KvfjfEfiveePivjfiuiE-FGJ--3--4-FFF-FF33F-B-22vjyjeauefeiiuzefujidavuyuivfiuuvfeeuePaPiuvvjiiyyzyivvvvvyziyvzjzEnnEvyviviuvivjjzvjyyzwEii_viuviuo-2vjffdKHPdivgEijjieEigzjvfYyfno3-z2BzvvjeOiivffdideeeieOdeLKbeLuOOOOedaeOeidjgnueaaLOaafeveLyyvivffiiuuiiiiiiiivevfiiieiiviviyyvvvvvvvjiuvvjefeueieieeeddveTefeaieeeeQePevedeffeuieeuaeeeaeee_fiffiieeQeffideufj3323FwEjdyuMeuaveTuQeuLEeudG33_eLVzizvdjfzi_JibeJF44fzeeu2vc3BEfdvdjfy_vvfyEvd_TyfyeTgyY2yzFF-wz2zJGF3F-kz-F22Bn-0GKG43F-2BwzFk3-BoFC4300-EyzjzBo3-l0-zzzwzwzEBk2B-440-04443-EivzjjvzzwwkkBn2-B322BB-zyadY2-B2-nBkk-oF0-o-o2wBnnBnnEsnE2Ezsnvzk2nn32-nB-kk--BBl-2-23-3-BF-B-ysn2-kBBnEBBkn22-B--00-00GKK43GG03JG43KKOGJ_444OOFddF23BJHJGGGJJKOddG-kBKHJ44G-nB-K3-F3-F403JG3GJK45KGdGK8J3G44-3G04J3_LK2B23JK8G3FExKOLK__KGG4KOKG-3K4OHLK_affedaK-G-n2-F-wn3_aO___KaPJ4aOeadaOaLdG3G3GGK5O_OOOGGJFG3FFFF-k-22--n--GJ2K4KK_KKG_KF2n2-2-C-nu22-2-nBn-KKKOK_OPaeOdd_eOK0O_KOLJG44J33-FFF3-F-2-B-B-k2E202--n-wnE2yEEEB2ynkygEfynEvijz2y2GJ2zgzEgwygwyzvyigwwziiiveaaidfuuevfiE22-k-0---F----knBnBnnnnBnBwzBnnEwx-EsnGJEnkCJBBBFkB22nyaLdfeaBknB-EsnBnB-zznzKK2nzznEzx03BknBnBwznByEwzBnzBynnzjzdLJ_OL_aOigwnnBnyEnzEEnlGOJK4FpF-FnBOJGFzywnwkoJKOK_OK____aOJBEBwnEEEwwknwzzzzzzzzzzzEBwnnwzEswwwk-nC3LK2BLKK2wznJK4JK23J4-FzYsCG2lFoJEC332JCaOT_aLPJ8_OOJ34JBFnFwBEK4JF3G48K_4_44HLLPdaPaeOOaLLQiuudeOdaLOOOOOLKOeePPduOaOdGOdGJB3G2FFnBB-nB4K4_GG44GJC3GJK4KOKFwB-kG_F2BknBnnBwnEBzBwwnzwzC3EzwnEjzEEEEE4KK0-zjizwwwwFzzvih-yC02yijEnnnwkF2Ez2CJGGKKdeOKaO_Gbd___Fo-nEB48O_aOG2k2pK3EBzF2042wwwnzznnEEnlK_4F--Bnu7-D5P0Mj4-NFneHn99fHdEpA9e1mrUrMMy6rbyObacVUbsXc-95VQqU-0RC72gfrLTUX9WL7PGHOKOLKaLLO_aOzjzdKK8fyy2yvzzzzjnvEyszn-yvuyji_KjEzfvvdedLOOK_au_K_8KK4O_Oavznwzj2vYyiizdQjjyvjvzjnFJ43FEvyyvysEV2vkG-oJJ-J2vC2nzfvdvcyvB2EgwkznoHKJEKF44K444Fwkzjx4JEwoLK2EGKJ34KOGFCFK2C3GKKKLujnzuK_aK4K2Bl0KK_K__OOd_id_032E-wwwznKK-5koy5rxzzye9XeV0NQGfQzp409Fr2emf9gemeoemhxzoeenrzzzzzzxoeeeeHeeemnrUzzJr6zzzzbyUztttzIzrzrtzaP5Uxy1XXc7TOVNOcXemnCBoeVOX9IHeX9ec9V-7QyMR-O2VLYCrzOcTXeV-7R7oR-42W7vEc-16Tkb---xZJV2sUexOjjEzzlK4KJ--2yzH--10C8--0-gFV-7VNER-038rYV-7WePR--3FiX-8X7VOizvlGJF--GAnc-q7b4qavzwz43KJ--3In9--193W--G5YBk--7uzo-03SVI---Z6nF-JH3JgtV1NZFfOiznCGJ-03ZUnV-NZy-Ok--HUC7-18Epr--G9ncs--8SB3-23innD--1O-0-6lCPTmmnCzzbWa9c--8glJ--3qO1-3XRYCbzK-XlIJjmegemef9efDUzwUzx9fHfBfxyTTTUpsTUxzWttf9eeWtzu7-19Vk6-2lJH2nUze9VKcf22OuK5ObzzuOLKUzviaKzzzfzvwwzEwwwzYBzB0GF5JGaKOJOG__3a_OJBG4-PlNXPmfBnBnBofADUzJzbbbbbzpxzbXe0ccX9Bc6s--1mmx-6lYOwmextzUrP7cc-5BSZbV-45HC2T7-9BdhMxF6JOkqwemmmmf9e19nJemmmenzryUyTTUyUbbbbzbtzue7-qBstqKOOYvEEBo-45TmAqV-1Bzxq-CGcDCxzS9dEMrxowOX7V19X-6YINKaOgnk--leh3lV-cqZnQo-AGhLznASpxpObxa-cXcXV--sj9F--RjYc-9DO8aRk-JRodC5V1Ntt6OKvznCJ--6Flm--Yf48k-BTXJhc-LEJ7aTYC-0BTkwjJhyP7P1LYtQd_KPPLbePLnuafp-yEeddzzEuOiydeKOGdzeaK_jzjjuKKaOaOUEnynBzvnzVyzzEE4FnBwBGGOJBF334G0-3JKJEknBBlKKK-wnCF-RUIqgju-4Yv7daLnB--6voH-EYxyt_ueaYBBE24F-wUjugoqOWc09F4K5OGOOYyzBzElK-1m02NnLNP--32h4-0m0qgnqV-1FPCq--H2Gus--FRXJ--7Gue--38td-6H3zimfGzxLPWaX--3E7C--16gBV2O3CZOuLecn-n3--RX7jgyP--3G5C--18RXV3t3nbP_3_iju_Hz2-B-03XWAgfxyTcV-047KF--Xjy7--GPHJ0W7iC6CSKKIICJnCBemzqUbV6sUa5PX6w1711-V0d4t8OOwwo--7o-P-3ZP3pin4--1CVBV-85mEN0d7rPv9hEIBeXrICxpCAIBtxrtbttztWV--UWc7ec--ZRVOk-3Y_fi--3SWl-1HE1urq7V-06YZF0JYnKBgltzy9c-1GuEq--1Ey3V-87P_R--8B0X--3aep-1HIL9xw7V-08jeF1RZt2BoxCKLV5NOaTeV-LHXk5OUn-3B_KjRnEJxK6xSIBnGsOV5-5-N7e0PZfppdQivevivviuviuvfffiviiiuuivV2vxJG3G400-F2zoG43G3G3G43G3043FJF-B_XHC--1HrHb--1Ml9V0OBPSTykK--mPGuw--0CdCF-3bQrg--_-bGk--c3w7-1J1Tb-nHWSNmnBmnCBnBognAxAACOzzzUbzOzIAAEbaOtbpICxtaNHW9WWttge-Ou9dHce0uXWaOaNTc0qJ_j5Tfuiyfuvyn-43-C4GJJF-ZdZ-CEN--qKF5MivvzoGGJJ--9fZm--4NVG0OHj5Imgmgn9mggggggzbxlyUttxUxrltzzxUp9mcegf9nBx9HzICBnICCIKMbaOWa0c55OWaUlaOaUxxrIJogmqTUpK6aNNOaN0xMUNT1-XXceee7cN575ec0cecV-0P9QF-3hh-D-7_jKnaJ2nyZ-YA_nYBnBnEUttXVOc8aMCmTLLKaaLKPddbjiuievivijivfivy_PPeaeffjyyvjjvzEnzso3-F-3G42l4J-2zvEBGG00LLuJF-3KFK003GFEyxG-nEzvp-B33G_JK--muI9w-5OSJStaOeji--wBzzzKGOK-0JieNwmeCzzaV-TMQgDzvlJJ-GAk2vrxkPe7--MV8o-6At0AC5--OURXy--gjqMEraeV2OUrqueTfVFl22F--jvyN-PNAgydcnF-Yn1WRrSpppMJeYrJnrUKq6ce7WzTUzUUUNVNUtsX7VJece9XXX97c--5440-2I2OHnJsOV-1NxR5-Bn6z2mgeegenBzbzzUbtsN--0_72F--nKlc11OxXDLKKO_OKLQvzwwwzEnnnnKF0RnydBghMMNN--dOfypPMdfibveueeaPaOO_3eafd_J8KOKKaaOaLuLaLvcyEieQevy2l---GFpJFzz-ynwwzzyeiyv-Bx3FEjjzVEvV2s2ufk2G0--3FF2020003JG33F-dC_NYAASKopSbtV--77--QufZ--CxYX-5b-NCbjY3F--sGR7-DRSQ6v4--2ZTFV-OmFuQF--tWp7--Rrk3-2DRQfF-ObG_p_LKK4LQjvvvvjk3BB--2cnkV-0opdF-BuUUE--1SP5b--2fOPV-0qQ8F-JvLKBlV-ttYkOgB--EKfm-GbimObjzjzzK4JOJJ-QEW629fAEU6aT5-Kbx48aOGeQiv-nzVk1K--4-Bei-2c4b_aEF-00fX7--VsoZ--FYHH--7bwK--3KeVV-19ymF-456Wg-0cmm4s--oPB-o--PCDOOk-46F9i--7vjd--oSsBlV-uEMIQY3-0GwSv--1EeMF-06tTc-5Z2ZLk-2HUyYu-0dG4tY--3dhcV-1KhfF-09wIc0ea0y5OddePfiivc-kk---0--hB85hIq---PPqqQ-ACDhYBegf9nBoyOyOtzzxAUzUxrxzxKrqUSHnEyUzzOzbcXXe5e9X97XXXccX9Xee--1UpAF-SFcxhOX-1eB0xgo--Jd31--9KJS-9pBVymefBnKMUUaOVNN72Xdb-LMveiuLKJKMinzzzvfY2BzjEzzY3GK3FK4KOGKF-0Ji17-ueZcLLyvwzYGGK-0KK8igpzza9cc4aecw5eQeefeK3iifeyVyyaPysnzivW-yvivjf3G32JdFG5OJG-3--EB2003-C_GGF-0M4Pc--fYVJ-0L1VIV-1kjSF-0NOQ7--gXeJ--LIdm--AAXh--Kaimk--h2YJ--LYMm--fHOlV-4QMoB-1fQzGbV-OM1DQUKrSV17XV-PsGvQ--0R8xc-Pi9hLee----4n7gV0uuK8Ovwo_F-0SPF7-Tihf5jioG3-rMLqIMSxJfMpp51-Uk7-X7mV-1vH3F-0SiM7--ivJJ-4MU-YL--5j0_5V--MW4m-Ffnz4uebcnu-E0K3--4umFV-1xQQF0KULdhJnCaOX--5ji96o-jMt7YCKBproNN55-KC9-7-Pjp4LPbw---4zuVV-2-p7F-4VdEB-3g5r8awo-6q3GTnIBnBlaOaOV--kXLJ-0NJ5IV7f1wFOePedueiffjEBwB-FFFFFG0F7pWV6CJfCAHcXBnHgpIN5Ox6lbxrJpMSxbpNN7V56rMF5-7-X577V--lo2Z-0O25AV-28oRFJ__7yBm_ICCAEJgcnBdJonCBgegnJpS9XXe7nIKCSSKpxppCpKUrbzKOzaUUoUzKLOttxGVV557-OWtbVWV0a6ryX7X70cX1-cUu-Uy90zaPcXe90XX--AA8ER--Oap9--gnQdkH4b2ThSprSrUSrMSSUSxpMKpUSprMKrMKSpprUMMSrrSrSR6rbr--N--0X71d9-VV7e7WaWu1Zc-cVe95BcZe7917X7cXV7VX9eeX9--Bw-4--LXIak-9oUkasF-KdZHh5--QKOSQF-0f7Ac-DpZnLQC--5ifVV-2M_TF2_g-RhCKoxKSR7-6xX7OVh9-77uqCsLOaOKKK4K45PKaadudaaeddaejyeedeTsz--o-k0-nzuafiueskznG3FB3FG3EBnknEs4_OOGa_K03F-BBzvnywzvvzEBBkk-EQ93ASrF17--hcV8V-0ho3c-1r18a-KLsKtn9ghIKopJxGbzlz5PcOWWV6bZeVXV-erChLbuawo3F-0QgRIV0AS_oTz4F-0iqsc-LrVEayh0F-0jBw7-1raaM0sqwtimmmocCrUzKrUzbxJeYBexrSIoT50xMUUSrzrrxxxrppMMIrI9gnJzzaUOzSrSUUzxtbX7OsU-UOzrUxxSSSpxSrzxzrr57cWue-BcVX-X7X10bqN7e7ce7-7cX7eX7ecccXce9e9997eBhHmhBnBme7791-5119cXV-ATZeR--Qs0X--CxF4-2M-EHrMNVV-1s18b-0M09Rrc-3i33Gcy3-7r1pBmhExpSrcP9-7-3i6ThbzJ-0r2kLmxV-LsT9bywKF-Cl8ajc-5sg76o--RNyP--DBcS--r75Dw--AZP8N-CRYLYIrWcV-AZ_gR-hRb0Q9efBUUzzxrq7Ve9--DIcG--69X3V-2_KXF0CmrNBxUTN7e--DM2x--MBNss1qtbGTeeeiebfeviufifjG-FF-FK-2F-F0-F--6CEoV-2b0EF-pnx7hKlVX--DWBO-IrGX5pJgomd9Beefrr6rUttyNUsWaN9c-iuOLLLPjcnF2--0p_uc--uwAJ-ISZnnCIKWa---QgbdT-0_qJ7CprKy7917--Do60-0MPdwpc0LirO4eLzjezyyzzzyyzjzjzzzvvsFEiyn3OJFKKJFEwwKOKJJKGd_GKKG3JK4KJ-ESx2nSrP79-5j2XKaPVn--_t4Cgjtc-1wYGa--6ZPXV-Ama9N-CTK4nUSXX--2n3-F24thzhrHcXnIqUttxbcd97-3jCxpvh0-1rbiZpEa1-JjETd_azzgznzC_KK4F-0TTz2V-2nrwF-Ctvzgs-Dwy-LEp--Mcags11x3uLKKLPLLLOeNwzBknnwwzECF-0uAGc-ax4e5iii30---6dYeV-2pDWF-0v0pc-uxhu5KvzivnG3GF-0vS9c-Tximavyl4F0GTtRbKpKKKIMKorSKxcP77--50cV1--X-0jSM8x--MlFHs-PyMyriv3J--6njmV-AuIRR--UKqu7wjf1GaaeOdiaPdeeaeadePOdd_OGG3FK43G443G3G-nBB-En2B3P_3HKJKGJJHPdOKJO_aOeOaaQe_K4_F3G3O_8PKOeLOPeOK9TddJ01OaPPu_aOdaO__OKKaK___GOOOaLLLOd_-9PPeaPPefeueOH_Afeeeueuaeaieeeaadd_OdvvivzynwnnwnEnzzzzzznBnBzEEEEzznwzEnwzzzzvizyzuuaveuePv-wnBwwnBnEePaOaPaOLEwBknueaaMwzeeePPujjczvyvwnnnEuuusEnnEEEEzznEBBBkn2BnE2BknknBnBwwn2Bn2B2BBBkkn2--3Bk-k-F3F3J0F-BK8J-0-3Fl43J0JJFC0220-FFB--434_F02-3-FoF-3--ULK1-9jk6__KPzsnC-0rs2uxu7-5z6oLo-0Ua7Y--2yTuFFpzEegnKCAHYSIEIBgmnBen9mhJonKKpKpKIICCBopKMKpCMMMSxxtbbyOVNN50V550VN50VN50WVN-0a--0xLN-V--711-V0R4w-PfBJ-5sCnMpUSzGcVcX--36DPF-a3T2CpX7-21Rkb--7L9iV-3CdyF-D7K1E--E3yyLPB-AsdryprMSrUMUXVXX77X7-0lNuCb-0sh-cpsV-24z4a-0O5skoP--HJcO--8cjcVMwvW_PePffuOedddaOd_OLivedaLOQswwnnBwnnBBEEz2EknBl___JJF2-ddFJBB-kFJF-3Oxo3mryUe9--oNo0k-L_0tBtV-x9UXPVk0Kd_2QCCKJnKMU6Wy6x0a5OtWWaA9f9eX9VNhBeeOaOaK_aOaOOOOOOOLK___aLLLL_aLbzjjjEnnnEEBnEBnBwwzEzFnBzBnnnBwkBOJ3--9Q2JV0hFDWPTj03-0esaIV-4M3pF-DfxqCV-0LPM3-8fbYnBy5-Cq8_WadYzEwLK3--A59FV-CZXbR-2ghDYk--LQk_-0vCsPnTV-0OncZ--gxEe--LXbt-4QGLNnIMaTP9V-4d4NF0DoYGBxBttWe--LdTx--AJjgV-4fDgF-1q1n72bQ0Tq_fzyaLyy__JbzjyiyEvnzoEzz4K44GG440J0GJ--AQaoV-hj4xQW--QUtTs-0QzBZ-2hzuIu--M0W0-3QVpXzUSX9X--r954k-6-LVD--s6udk-U12pBUe--NKbO--B9nkV-55gUGAILAU-ee9eeXeeXeee9eeXeyN9eeeee9XAzbzzzUUtzxzrza1fzrzs7Xe9XmeeiUzrWztzbzzsUztbyUUrztzUzzyUVfzMzzzzzzzzzzyUzzzy1SzSxzrzVczzSpUzbrzzztzzzzrzzy1cXXecXe9zzxzV9eeee99USzzzztzSzzzzzzzzzzWtzMUbUztUSzzzrzzsD2xzxrzbxrzbVeXUzMMzbztzztyUWVX7cX7X7ccX8rtVX2Vc1gVWrVNOta1UbbaT6byOyTMqXggpFemnBnLpThScXXopfJppUhSzt_USUrxSxSzUUKwepzznMzUwefMzSCJXAKRemgegeeoeeeeeeXe99eACMxzUrxzUzzzPmeceeeeXeepzrzzzr9eee9e9ehUrxzrzryUzzzxwg-3sRUlgzK-1wGfBrUXc-1s_20ck-8lARQMsc-6sakWaUYsG--BJEyXtygSR0KGMwzkKK_KK_KJKK4JRnEEEEzEnwznzwzwzzzwzzwzjw3wkznnnkKOKGnEzwEEwzB0wn2vyizz0nEEqPvnzzzwjjEjzEEwznzzEzzwnvz2jjvvzwnkTzzzj2vznzvzyzzyzzwzzwzzwzwzzzEnwnknzfjvuzECfjDzEBBwzEwzEwzwzzE2vfwzk6njvw-nzEEzEzyzvjvLizyyzzzyzzzzzvzzzzzeOPPKd_4aPuwnaLK_aOezjEwznnn2EEnn2wzzEmwznzEn2nwwzznwwnywwzzvzEznwwnDPzzwzzzzvzEvznzjEyjEEnnwzzzzvzvzywviwzzEBwzwzzveznyuzjEzzzwznzjwzjwwztfvzznEEEnzzzzzwn2BwuO_fizzvzzjzjDywzjjEqKfyvzEOfzzyLjzmzzn2hPjjAwzjvjezvnfzzzjAzfjjqKOO___OL_KKKOK_LKLO_KKaKKOaOOLOO_ePLiKKKLKKLKKLOOKa--wN-ww--DBg5N-4latIyc-MYUfaRyCF066q1CJxa5X--5F6mF7z9BugfEUSrSArzxBefBeJcrrzbtzUzHmfUzzzttVX7X7XXX7XXX9--yKGGTsF-2mkw2k-3tQstjx4--BkdsV0DNK7PzGF-6B9ki-9tXkO_K_zznl-0RovXrc--OeZW-IRqTXoeXefUzzzxHYUyWzzzu9XZmZe7-1tmAWzJ-0nbeYV0DRxYTvG--2Dto7-0bYlJ-0nm6v-4DTdBTzyzvzvlJKJK4K-8wxJTrrrzrzOceXce9V-DTg9R-dnsbYExxryUzaeeceec-6bz2Lk-2o5Gnu-1u2YOv3-0oCyAV-iaLAUp--CCXRV2Db2oOOwzvnpKF-ppYW0bVVaOyUzzzrxpxpzPk-2eBMb-8xGoerUUxzry9Xce9XV2ydQ2OK_OjjnBwnJ--pC19-2uliNEyk" :
		12 === bO.eB ? os =
		"JJAf2uP6y-0nEiiuyywnyueuTbfevfvvjivivivjfvivviyvuuyEgzjjzzvviyvizvviuNziyvijvijfvyvgzvvvvfeu0-F-n5a_GG4KJGGG3G3G3FFJFmKGJ4JGGGG3GJJFJG3G3G323G--kLPeduaKGFGGGG443JJJJJJG--B-C0FJK__443-BJ-66wmpBnJopCMJpCCCIIIJoopKKICKCBnCKJgooopMIDOzzSzUzbzzUSyTUxxrrrrrP1XcXXX9Hcn9cceemece7cPIoeX0sWWaOWVNTOcTNNcN0V0V5-N0aOa-0V--N50a5Obyc-M0z3TPOdgBnBF0NOpxpMV7-M2mMiLbinz03F0sTx8mfrNT-2l6QEdMwwp-5XX7UMTP1V1GIuvaNn-5Xfxrpw5XV1GNTEfn4-_XvzjAAA9mfA9ed9fpzyTUzyUaUyOX3n59NTKLLKHPPPO_LK4iidea_O_QeideeaLOLLJG3-0eeddOaPO_OKLKzEznzjgnnzBykknByEYnByug-3332ElJ222-2wBko2BnBnBwwzwx-9Y6j6rrrkccc-E5ctEizpJF-aDYgSMGz-X10G6VyjiyuuPeiuzjivh3G3K3G--k-9JGFAPEIZSKBghKSMIpKpCJnI9gcXeccehHccoeXBeoppKIJoghIHnCJnJmemmecmfA9jyTUzzzbbxbV0WaTT-OtWWWV0zxtyUN6yUzSxrSqTUztaN71190V7-5V15VUy--V-lxHEg--33oL-67Dhyu0--3FoL--7ahw-LGYowfzu-0HFMIfF-aHWWwxxxcXX-E8ZrUdfVl--TIJLzSr17V0wcDLvivjysGK3G4XaJb1zppIJpBccccge7fUxx9eocX7cXX6y7Y99Heggen9nJdAHp9Xnp9IIJfICIBdCKKIIMMJme19eXxxp9X9VVfEMMMSBpooe7XCSBomccxxpHcrKKCMHmXXmcxoeX1mpJe70BrMJmVV--gxExIpJcX71nKCJmhCKKCIJoopCKKKHX8KHd9nKrKBj6xrSrKpz6xSMMSrKppwObaP-UzSCAICIKCIKKKCMMKKCpCMMSrrrKpKprUSprMUSMrSprKrSpSrUrUSxpxprSrMrMprSSSppMKprSprrSrxKSUSqUGbqUbbrxrSxrSrKHXXeggeYBnBgmnBnKCrJnKpIKpBnKCMMrSS9chKKIBeX77EIAE5OxIIKKKIIEKSKSKKSKKMKpKpKKSMSSSSrSzxxxzlzzUzzzzzUxrMMMMSxxxrrxrrxxxxzUzOzrbxzrxzzzw6w6yOtttttyUbbyTTTTTTTTTUtzIrzbzbzbba-71-VVV77V--7711-V1-1---51--1-1-V0cN-N5VN1e-ee7-1mc71Xe9fIBcVV0WbyOzxX-VV7VNN5TUzUu1ce9menBecmf9gxHc7c7V-777---50VP-V-N-0WxppSJpr6zyObzttV6rMKpUyObttbryUbzWaP0sNNOX757X97X7ce9XXXXXVc7-V-X7VX5-V7eeA9menA9fBnCBnIIJoorMIRObpIKMJpppSSSMSoeX71-V7777X97c5V-ccWV0VX77--NN55-N--7U5111cXXenBcc7fABgcX117X7c-gf9emV---1--XXXVX7X17579VVV117Xed9XecXX--WV5Uzz6zyUzrSrUUaNUlxtzXXXee1777X1e-5NOy--WV5OttttaTUzyUrxxtzzzlzMUrzzxaUttbbxWzxpSonBmpCCJpCKCIJpJooeACHpprSxaOV577U6sOWV-NNN70WVOWzwTTT5NUxryUba5NNOba1cc79cXX199X-91X99mhIHfJmXgxxxpHe9XccX997c7X0zV--V-N7P6k49V711-111X-77cX79mmeHeccV1mdbn_Uno-DKNVSo1-O9kaiKKzzEzpK-8_SLEzzzeeeV1Hinzjh3-8_UsM9mjtyTVBHk8AfiyvivizpG43G3GG--0OIzV2mnjMaLEBxn29mc4SSpprSSSUprrKprSSpppKMMSrMrxrKIKHhKHfIKKpIBpCIIJpIJnIKpSKJo1AKKpppxprSprpMKphIKhMUSrCKMRpMKrrSMMMMSKUVUxxUxSJe19efAKKUbKnMxKKUKIKUStaSrUMTUrzbzxxrSzzUy5SSKtbqprTprzSxxSrBXe9ghSrMMUyUzzbySKrUKpUSpSUMtV---D--0aN-X9997977VVe9XD-19XX1-9XcXXXXYxzUttzbV-7VX78by0rUSppKMbs5-V77V77X-X71--17-X-7V-0WWVN-6byTOrJepKpSrpxrUSSIKSKSzrrrs797c1711ObUSxxpSSSSSSy5--7997VV6z_rrSrxpSprs-7VX17XeXVXN-11-TUUSxztyTT5ObzrSSrzbtbbtUKzrxrSxzUrzUzShKhMKrxzzzxyMtzqnAA9mgfAAACKICBnKzbbWWbaOtbaOaTUbtyUyTTTOaOa556zyMxrUtaTUzrxrrrzSzxzbta5N0s-ee997cX97cX7cX7X771-V-aT--V17V7X1--V7Xea6ty5T5Mts5--5-550aT55NU_ySxxta5OVD--0VN5NND-N--8a6a5OsN1og55OVVOta-75OTSqhCMrBmhMbbtzzzzta--NN5-8Us0V-N1eD-XN0VOKppraT18zs0SyOUaOa5OaN1-VcX7X5OSpSxpMSra5NNObV5-N19cVc-W_KMSrrxxztzsND--MJpKMrzb_pyTMzUa5-0a5-X-VOIMMMSBnKKSMrMzprzaQBen1ceeXcccempprtzUUSv9mmfMrxzUMxpUUUrzbztrxyOzUxrrMzbWbJppSvC7gmenA9mgggfABgnBf9nBppUrttbzUzCKrSSxzbaUxPfMSKpKnJhRpIAIIKrSzUMMzxztyTObaTOWWaTTTUbzzrza5ObaTOWbbbUrSrStzyUUzbyN--s5T2rs-1XeXeefBn97VfBnIBemf97cXcX7bWV1111c1eiN7f-ABa6s19n77X7g97cceX7f11UzUppry-N0MMAIKzV4UW_rJoppza55-TMSsNObztaOa6KzV-77N-SKKSUzbaOaOyUtzzzyTUbtzxrsOaObtttSraOWaObzzzzz_ptaUbyMzzyUtbVUyUrUzzzzzUzzxyQMzzUzzzeeeeXee9Xeee9eeeefKMIKcf9ggnABemefCCKzrLf99X1fABgeeXAKSSMKxxzUSrSraMRpSxrQA7X7X9oopBo1N9gnIKCIJmmmnKIKJomn7emfMBc51997cenKMUzPmegmfMMSzzyNA9OzzUUIKMUKrKpSSrUrxza6SrMSrrMSrUUxzrxxxrUSSzSSxSUSxSrSSrSrpUrMMUSprrUUUUSpKrySzSrxzzxpzSppprrzUrSpSSCSRprSMKKpMKrMKKCIIIBohIBonAAABnABmgemhBmmmeenBnA9X9ecceeXX7Xemmcemgef9nA7en9kecee9eXeX1-enBkeX7XeXce92VXX99ceACBn9XX77XVVV--X7XemmgeeXXX997VVc75OVeX9hAAA7eeme9eXe9Xeeee9e9ceemmmmf9meegfHenBmfBnA9mgggemnBggfBnIHmmekeeceX9e9cXXXmoeceeXce9Xce99eXnBpCBpSrSrSrMSxzzxyeeeeemkeemgf9pprUzUHmeXXem99e9eceef1dbs17ecepKrMgg9XeXccX-Xeen7cXeenBmnBghCBgnBACCCMCKJohCCMrzzzyUzzzzqognBmnCKprMSMACKpz_wmoogepCKrMSMStUZkeeeeAH15-11-X9hCKMSRomcgpKzprpprs0z_rKppzrSrzSpIKIBgXmprrUKIKKrttpKzSUBomm97ghJpSyUzSzzzUbzzUtrzfAI9epnHceceemegghUUzxzWbzzrbTopMSta5OVOrzzUSKUUxrsOrpxQCSrIIKSxSrSzSrzUrUUtttztUtbzxxMaOV-sOWV5--NNOUzUzxzxzUUrSxrrUSrrSzrrSxSprSppprSpxrrrUUrbbtzrbbrztzzrbbyTT6bSyOa0aTOaOy5T6aTOzbzpxxxxpzUSxs7XESrKyOUrtaOa17zyUaTOaOSxprKCKgnIAAABnBnKppppppJnHnCMJnCCKMSrSSKKICCKKKKppKo-2AYFDB--MPns--j8uk-0TwQV7mzO6ievyyvFGK3F--qNX0zxzxrXce9c-3mKUw-DOJuzw9-lBkNyuuuviyzjJK43G000-OaPJEprzSKMrrkccc-1997-2C8pDo-uPOqwf9mnbbtyTV-2Jzv--5gXT-CCmSUvvGG--5xsy-0D-rE-4b-qzSqX7--sMmk-0lNEV-IZ0nk-tm6EnFN-Rt3BvgF-5ReOUc-otNAvisG30DRoZzUzzzrwP9eeecc-3uJps0eSSKRrMGzrzrrM-V-eXXeX--2fpn--6MiT-0DoXD--6ULD--E2lg--TGhs--wrkk-0uNAV-npyzx-0bkCEF-6EeL6jG-5bpJQAEbaV0nuubvp-0dya3mhrk--BzMKzF28zMOzrMUP779c-gziXufkG-2byBQrcV-J-IhV490elopIKKJzlX70V---2FCPyV-HVlaxpX7-x0_hzvvGGF-12_CV1o6LCaeB---Vy4s-K15tuR-0cH3EP-AFalyPf--1u44Wxxxr17cc-CFkqTusBG-2cO5jMcV3oE3YuuiB3FF0P7tWrre9-4GLRUh--19rRV-JN8nk-1B7iV-3OQA--cpNzV8oQxrjjizyyw4KKG44-1d-ezGV-_77wzvGF0eJQZmxL0V-C9jlvF09OI0rTX--JoI0k-PTDyyV-40oK--e5AbV7K29M_OLMfgznEB4-IfrEMASpSUSq-7-Nee-ANaSDyx3F0A69npL--1qoP6bvVF-qtlNxCKCUa0V7V0xqOguudaNznk-G3-Lvq2RrOc-2N7SOfvlG-2g3LFmnKUrla-7X--Vg031A1AJgoxMSporMSSr-XV--10aNXeV-y7CVQfz0GF0RIcNptae02XdsiLTezvzyyyzjzGGGGGGGGG3--GRVT-QXt0TTyyzwK4GJ-r5K0genCxtwT-V-yBnotTvg-F-RR4WyVBNuCtdejvYyi-knBLOFJJF3BSAjnMSzUbsX9XeV3t0vf_fzv-GF0wZ8bxrOe9--8AQA--HN1m-CZlGTLRwx-cmONzIxrprppKprUyUts-XccX1e97cXc--_7pw029QbgoonJUROV5-V-iJrguik4--mdjY-0tQAdaRk-BiCss-aMQLTjJ--3jUaV4tUqAvjzx5KGF-YB7rwfzwOeVuOXlO_O__Kbj2vizuviyuuvfeveTiviynvYziefiiefvfiYvjB-444G3F-0-2-kJ304K3GGG3JG34--F3GJ-IBbGxS--3yOw8PPd_GaaiC-Eueibvyvx-304--C-2IBzcggmeenCMSrwOaOzKHmnrUSxzTOu--V7VVV9c-yPFVPuf0-F0gt0ZpKs17-aTPhOiBFxRy2ZmgnJeeXAICBnBenJzSrKKrrSSrKpMKJnBnCKMSMIKMrxSOV0V0zzUKSpppSKSEKIESOV-Oa0sOzUrMKSppSUMMkP77V-0a1--VP-17--71--7-UxSrrrrSJpqOtzzOX770hBcX7V5--XXV11cc717X7X9XX999777X7e-_chDLLiiivYEl33G3-Vock29fSpSKonCMU5OaNV-NNX7c2DaQYtPjzvjfiywGK33G3G-0xDlzpUyX9V5PSx2jyuzVGGK-0CFZWnwNV1uXF0_fBo1IJJoSSJnACCCKppSxyUV-117-N711-6evlav4-JpSyQKUSSSpaX517c-c-yg6luPzk3F0CNJQpy9-iumBnaLKKeudOKG_KLKLLLueLOaQEEjEjyinEyzejjnskBnwC043F2-nn2zE2EEoKGKFASOdporHX8CBhzxraUqUzSlzSX77eeeXBc0V-LhikvW--KmlL-EfebDLTskk-YMe-RrMTV7V2uyCCaPEBC-5q1sjK6a7V-A2Ih-Aq892rMUNP7cc-TlB1tv--ANsVBjV2v6d6aOwnp-7qIGAIJlaNV1imQQOPszivwzE8GGGGJ0vODuRhCrppCBpULN5N7NX90WX-6gppqPk-GqSXfBnqOxtaUemec-5nnTs-YPD2wz6re9-3QGmz__bnno-2PJQD-KhKnTaaTn-nF-0Pg_N-aphUzj4FKhhRbmhUrKHohIzMpxrpKKKSMKSKxrU5N5OaUL--X11777Hf9VX-N7--5P-XHXe-0hhca-WqtqMCppppSJp6ltz5NVXV-X17eV0QUJbjJ-nREfwnBwOtbae-IiGGaLPvEk0-Er7eI9nCKpUa0V--1v_ZSfcl--0T7Zc0TwsLPNzgz8K4--MdCP-8jMTqMno-QTv6BfDUs-CjSgLdjBG--rknYV0vttlfW-0CxT2mcUV6Qv4daeffkn3J3B-EUOXBja1CjifiOvd_LdKKaaOaK--nBw8aOFFeeKbfivzjix3En-2Ennz-n-3-2UYTi-bkAQ5LLKaRzgwnznGJ-MWJCRr5NV0wBylcwF0D6jaola--BJZx--NfgX-6lRkav3--sx_2V7RUnUaK_aLLQjzzz-atBrI9mgmnICCpCKLTOaOzs0aNOWV9c-E9stskaiM_-pIJnKoxxzxzrUrrxzUxzSrUSzSpISxzxbxzzzzrzzrzxbzrzUta-0YBe7mf9eeV--P9eee7XXcecVXeXceA9eeeXX-c7T9Bee997n9X-0wqC2ylF4iQ5frxSUzJzqNX9cX97V1wr6EuslF-YbY3xSUaeX--x1Jxc--uDnn-6S8wKaPedvn-FFB-zea6RfESrSq7-WX-6pPVqNx-dun9rIIKMSrSrSxxBzbts7XeX97XX7N---2MXGF3ilDMnrSppGa50VeXcHjS0jOLKO_LOaK_K_K_LKK_JKK4K4KGPedaOK44KOPaK_3aefffeTzivizzzyuvkBzwzszEEnwnn-nzyzwzv03G00-B2EzBEBwzBwnEE2-ow4SEIJmcccxxrUJnBonSrrztzyTOts-9X7VX7X9-YvBN2wwwwzvvjjzzk0zOXTUyUxzV" :
		13 === bO.eB ? os =
		"C0DX0NP1V--QqeadnzzjynEEzzjjivdivfezjj2BBwzwnEzzzzzEjnnvYBBBBEBnzz-UV-hflzUUSrrUzSxSxzk0a1-V50K-0pMiudevf-zvfeBnyviVF-F33-yzgp3bVV02IKUrHnUzzpHz5UzUzSKrUrzbyNN-OzzxzUUUSrSrrrtzttzWaOaTUzSxxaOaOxrKBnCSKCIMSKKKKIBpIJoonIJopCJpJpCCCBnBggeXn9eccc9X7geXXn9efHfBnABemcXX9eece7XHXeXecegeeVV1ee9eX9ecc70eXcXe9enA9fAABnBnJpMKpKJnBnHmmeeXX7X7cceXXce9eeccXVVVV-VeXe97Xcee9f9eXeXXXXceWVWBc29cX7V-6aOaTOWWV-1XX17-NOtWaNVnBn97X-7cf9mmnBemXgece9I9eXXomgeh9eX99eeeemf9BmmeHgeeegfBggmnHoeABeggnIBggeeeecVI9eeemeXe7cX1-ZmfIKCCIJooonIIBnAAAA9mmgnIIBnBpKCBnCCCKKKMSKJoonIBohBmnABnCABfA9gd9mhBopCIJonABgmnJopCCKJpBnBnBnCJnCCCJnKBoggpIKCKJ-UMSGxrMMKKIIISrKpSKKKKJopCIIKKKCCCBnIBjSrSSpKppqUI9cpKIKrrrKSzyUpKpMxS5UKxMSrSxxxpSrSKpIrHxrSMSzHfrxxzUUUSxrSrSxxxrSrrSrSrrrrrrUUxryOtttzbttyUzzbtzzUzzxzzUxzrTTTTUbyTTTTTUbbxy0byUtzyUzyUzzzzxzrrSrSSSppSSMrRN-OxpSMztzbzzzVUrLUSpprUtxKbxBfrSKJpKKJonICppKHnKKJoopKISppSrMKrSrrUSSpxxMSxprUSMMSSpKMSttzzI9f9hMMMSrKSMKpprKKHnCSSKpMMSSrKKKKKCIIC9gnJonBpKAKJpJpBpKBnCpMKKCKCKpKSSSrSrMMMMKrMSSMKSSSprMMMpUKppSJpKKKKMKSSppIMIpKKMSKSpKMSSSprMrSrMMSSrKppMMKSSMSSSSSprSMKKSKBmgprSSppSIMzxCUzprMUyTObbyUzzzaOaUzzzUtzzzUUqOaUxy0bzzzbbtaTOaTOaOaObaOa5OWbaOtWaOWa555555NNOWaOaObaOa57-6WV0WWV--O97VWWWaObbbtyTUttyTOaNNNHV0V-N---9-V-777579775-0taTOaOaObyNOa5OaOWbbaTTTTTUztWbbbaOVOWaOa5-5N-7X--V-517T7---7-Wa0V-X7ccX7-7-77VV-5-7-5N17X7XV-0VN5-N5TNNNNN50aN-5Oza5OaOtsOWWaOWaOWaOaOaOaOaObaOaObaTTTOtbaTOtaOaOWaOaOaNOaOWWWaNOa5NNNN5-Oa5NN0WaT550WaNNN--N0aN7--0WcefIBf9en9geecmmf9eAAABgee9egfBgmeee7cX7X777cce5TTT-VVX1cX1c7197X977X7Xe79eX15hHX11717-7-V-V71177VXX7X7ce-V-1-1-----117--cXX77ce1-VVV-0u7X777117771177V771-717VV-977X77VVV-7X-OWxpSSMSrMKMSSrSrSy5150WV0V5OzJpKCKCCUzSrSSSrKrSprMKprpMUMMMpKKSpzSxxrUMSSMKpppSCKKSMISMSrMMUUrrSrUKSSpppMpSSSpxrrSKrSpSMKKJhSMKppKKppSKKSSprxtzaUTObbaObzzzbyUby5OtzrtzWsObbbtzttbtztzaTTUs-o-9SuvkpF---4GN0--Akuevkk-0Z-5DzUUzzUMMSrUUrrxzzV0k24nbEF-72uPs-31lfR-X0zvBgpOsN---Fjh-1VahUR-033plvivC44-bVp12CUzzrxpztzzzy2A979eeXd9eXXVGkPch_OLJKKa_OLujjznwwkzo-Eno-q32WRrMKpkV7-V--7jXk2-IvW9e-7xySpV2kZ-vaazk0-HWAOjKHprsWxta7ccV2FavYivl3F2cIsAppKMwN117X-81g-ifoF-L4N9UrkcVDFfPz___bjvjjEB3ByvEGJKK--WQlvV0kn8QjoF0NPnGrScX-E2V6yPuEF3-D6-ISGX-42b3rh-0NYH_ooy-3P8eEOJFGGIB-B-0-2043LaPdaeeiZ30003G002j-03-JGFGJ-4K-03G-3303330NBzB-UzzB3DvzuzByyfiivieivifevefjzyw-D9vlxqX-A58vaOYw-07nF-rFPV4lbM4aaabBn3B-mC6fBmmjSOa5N-25o35o--CiYN-gQSZPTw0--2QiX--66YJ-9FT6CN-BHQ8jadHQyddcyvG2232-F-8Hr8k--dcfk6dIezn9YpIBhC5Oa6y5UrWZmX70C2JVtUzzp4J-mXEjworrq557e-6IQmyv4--dmmEV-JuCMk-9SVlk3KDxRuPiueObi_JGTyycnBk--4-BF-eicPos02KqRDLPefeTiuiviuk-K33F-----6f9qfBnUWV-jMD3iO_aOaPOiwBnBnn--0evOEn5U5c1_T5ktLKKGTvjzzYp-w0Rg9s6ABmeWBmghJonKxCIKIKKSKWa6zzro5Uxltbe9e5OtVOWaN-N6w6y2ABcX17cXV-SWU2PBo-alHDReopsOa-OOYdiPPPgnE00--BsPu--Oo5J-5oKjx-AxeUxtaeeTeeffeuePauuvivijfieiivePgyvvC000000-3-3G35JG-2BF0-30-2FFFF--3hlWISD1-ER5o5evV0-0eu7_RjSSprzrSrcX7X7X7X--6KDt-HirDjBnBnKMba5551-3rQbzaaEBnpFJAmhxnKSSSSKKKKonIKKpKpMKrSKIr5UrNV79V1----V55N-1V1-7-7-X79-IUBriLagwC2-3jm7YKkV7jUvJLaLMeudeP_LPK3PfeaLeaa_F8aaLLOaO__KHdOK8__KeePOdaaieeeiiefifeeddddaaPadOPePPeeiiveueaeeivfeiuyzjvvizEBwwwzzEE2-kkBB2-2-kB-2-B222-B-k22-BB2-B-BB222-k-kF-B22Bk0-F32nyevg220-FF-0--0-F003G-G0-Cl0ab9eefxzzba-AX5ODuklF2RKFUonyUUaPXeV9sgwrddaLaPNn2BnEE0F3RULpn9opxbbbtXVe-Y_1riO_LKfvEink--0BfCIpy1V" :
		14 === bO.eB ? os =
		"EcA20EP9t--46idaPadePOddiaeuuuebieeiiivuO_aRnufezijzzvzjvfuuPKJFJGG3GPKGPOaTiiiedaduus2EYuiedn2nyffdv32--0202EzeRwoG--Ezzjevck20202zeufik43BFBFK0G4-0_J--nyioC03-0002-n22wyddyjfzven3Eyv3JJ20-zynnEyjnnvjizjjejzyy_wznnBn2zvnzyvzBl3GG3G--23FFo0-wzBB8m--ZISrMUUSpzrxxrKrrSKpppKKIACBnAA9mmgfBcee9cXef9geeeXVf9999199ge17V7Hgce7c15ABee99eeXegegegfBgfA9mgomeecXcXgeXceXnBrxSxxzHecefAUUJceccgce0AxBeXXXeceY9nTUJgoepCJnzzzxIBfrMpIJmnpHmc58EJmnrSbrMrUKJnIKxrHgrUzrxKCbtzprzxKISpxzU5Ulzq0a-NOzzxxzSxrprSSpxxrzrtztyUtaOaTObzxpxrUyObaOxMKBn9pMKICCKSKIKKCMKCACBpCACBonIJnKIHhKBpKBpBonCBmnHmgeme1ggeeeX17Xc7VY9e7emdBe97gfBfBfBfBf9e7X7cXeXc19eX-ecXceX9Vf9cee7V-P1e9cecX7e9X7X-0XcX7c97e9V0--O6glDk-BjnBnJpKKMSKrrMSSpSSrxMrSSrMKMprSKzUzzSI9cmgonCKIJppI9YKCKCKKSKKSMMrrUzzzUSMSrUUUSzrzUzryUaUyUyUbxlzzs7-V15X----V---NNccX-ccc0y10WeeeeV--70V6xUztWxMSzbbc6xta11cX9X7V7-X-eHeggnCISpKHX1V1X-7-Oa-N5Xe98HeVVVeeV0X9711-3--XjabvBG-0s7nSrxGc9-BFOunededziszBzG0-G-KF2NDz6rSzzu9d99-0FVIObk153LiReenAUbbxzxzrpxq--e9e9e-A1JTaukCF07J23pq7---cVM--WN3QV1khy_awxF-H4kIRjyV-oCGnvjx3J-16-Ny-U2iSDjyffv33G4F-CWtG2GxSUlV79e--2nbB--6j1s0REhiviizkJG4-4X-vYML77-ZHJ3Pv3-1cZeNponGtV-V4lDIreOiuBl-3-DAESjT9-r4cgTLLKKOaQjzyvgn3FBEB--1pnH-E4zQyafnG--5BKbgN-3Oxws0iCDazIKxKMMIr5OVX1V7759-05hoa-4YPwIzTXc0oS4-OaOaanwnB0-qYoDA9pIrzxzpzpKzzzzUzrWVf9cP1ceceVemcc7cV0H9uMvF-eGU9USSbuX975JYvsOLKOKKK4OaLJKPueTzjEzjzBn2zj3-Bnwn-B_HnzBpIzyNX7V1mi7bfz3J09L-pSKKCSrs5P7VX7-YBjWieueuusF-F03-0dhx_nILN-03vANuaQYl---6b56-jf6VcBknBBn-Bk2BnEBkBkn-BnBkBw-----n2Bk------kn04GKKKaOaO__KKKPLOKLKGKKLKaKKKKKLLKaOOLGKKK3KaKLKOaKaOKKKG3G43G3J33F3G4G4JGznnE2--G-G3334L33G43J-33JG3KG303F433GK3K3GKG3G3k3GKOffaF--GG-FG3---F-3I-3F0-0303F40GGG-G03GG4FF0--FF2-----0---k-G-F3--04343G-G3KG030-0-Gk-2DwkG43F3G0-30-F3F30-00-G30-0-F-3--G33I--03FG3303F3-I0--3F-nDtfefeuvfideeviivfiuviuzwn--B2BBB22--wn9PeLeeLeaPOfjzyvuiveuifhfifiivevefffjiafjiuifeypeeeiivejEivjiivijfiuieiiueuieeeeeafieeeujvifffiuzziviuzivieifiififPivfeifivPvyvijviefivevevafieeaOeueevfeeveeeuiufiaeefifivizizzwmznEzzBnEzBnBnznEzzzzwzwEzwnBnEnAyzzBzzBn-nEnBznEwzzwnBnzzEEzBznnnBznEk--22B2zkzwnnwnzznBnnEzzzmvwEEBkBk-B2znEzEznBn--kBnBEnzBzzw---4--2-n-RB2Dvfzn0n-kB2BnB2nBknBBB2-n-3-KK3JG0304-G43GLJJK_K4JJJKJG3F43G03F3-Fk3-3-k--FLOadeOaOaOOaPOada__aOe_LPaPOK_KOGGKKKKOaOKKJG-K3Gk--nB-FF-3Rk-JGGKaPPeaPPeuieW00-FF3G3FFF--2-J0-GJ43G3JG-0KK2-3G3G-3F0-3G00-F4N2znB-3jEzzBk-ivzzfjEBAzievivivieevivueiuiuufivzzzvivzuivivjvyvzejvjwzzvyvzwnnBzn_ejEBzzEB2-LOKOaMBBzzBnzwzizieveefifieizzzvyzzznyyvzznvjEzzwzBijzjyzznDzzwnnEyznzznEnEEw2yajzDjwBvnznEnzkzEznivvheejwzjefievveyzByvnmeziuvfiyvyzjnzjBwnkzaeO_PO_dLLG4PPvjivjivjiuviyviyzjwzwnE2zBnBnB2-k--4222BzEOOaeiejxPeeuuuuqeuaeeuuefifefefeeffeuuifeveffeueiieuvfiiveufiivvfeuuiuffieeuufuffieyvjiyfeveiuiffifefieevuiivfjivvjwwnBn2BB--BBnnBwn--2-k2BBwzE---0--0B3F-k2-kBB--k---JF-3B---3F03-k2--wkzEn2-B2wEEE2Bn0BB0-kknBkwE-kk22--eUSCSJrLT7V71K0YLtevvyl3KFzwGJ-DWcRRqP-hG7KyLafizivwwG03G0F-acjpSSKy-VX-IJltLePvV---PeSVrBgmoxprMRTTOa77X77-0N3vk7eoElnII93nzSKBooUSX0aNX0a5V-1pfNUugBJ-9iOdUNV-4v1z-Sfs-zBgmX8MKAxy5NOzKbse7V-0U-Fk-1y-lV-4x-6--g6bj-3L4kbaTYn2J-apmECIJlaN--MR8FTPQYEwpGF-2W9GV-62Hz-7i5cMKKGV---y2dwQvz4K-NgIMwmnUzJopKCCKKIJnKKpKSKKSKMKrMMbrWbWtaT6a550VN---X157cV-VX77VVX7ce7V-nZT45OKJLLPzjzzBz2wLJF0I80TwpCpzpOWa5P7eeV-9fnj-3pOZ6JOX-2f5dcs" :
		15 === bO.eB ? os =
		"CoE-7lR-YWRa2AEJenMxJpbqTObaOBcX5NeW_xnVto5UUzzrzUrtxtxrMKMUSSyN1XXV5NNOtaUUxzztzUxxpUSIBpSSyNN1aUrSpCCIJpKs50WVNN--7N6bbzrzxzrrpSMMSSMSzs9X7-X-VVVX99ccVVDUV19D--998a6rztVXaOV1771-78VN0V0V-7V---YV7Xh17XOWWV0V6pTOs-8V7XXpCF5-N-N-N-N0VObSxrSrSUyN-aNOsObrxMABnKUaUs-V1-N5NUzrxUWbzUSxprzCKHenMtzKoopSSSzzxxrMCJmnABegmXOs1ABmnCSKCKIC77gcepzSKBe9XfKrHh9eprxmnKMKLmehKCUrSrII7XnMUSxrUSIMpIABpryURpMbtxrrSrMUWtbzSnKKABgnAAKUxztrMUxrsObWtWzzUttraOtbUtbbVefaOrxxpStySStzVXaNTNN5SJhSry1zzSgmpSM9mmgofKpxryU_rUSxrPXmhMQIKSxrUrrxSxrprKLpMa-2V7Va-OV1XXAI97ee9m8a6TNSxSzzrtyTStbtzyUbzzbtztzzzyObaNObaOyUtzzaOttyUMy-f_zztztztzzxxrSopKprKKMSzrzzxzztttyOtaOaOZnBnBmn9mmmpMzbbzWaTOta5UyObtV9eg7XnBNN-7-ObrTUzztaOaOaOaNOa555-4KCCCBnIBnBnBnBpzzSzzxzba-7--6WV-1--771-VV------71-----NN-5---OaTOaNN---0WWWaNN56bzzbbaTTTTUCKSSprrSrMrrSMKpKSUUrSxzzzttaTNOaOVN---VV--X--1N0WVN5-7-0aN79enKBmVX9e9177-X770Ws7VX-WbVccOa-7OtzaUzy1WbyObaMxyN6UV4rUUy4zzaOaMWxyOzrzxrrTOzUUUrztzUzzzzzaNN--770aSSSztV-6rxzbbs5-NOUzzyMxzUxzV-1X9777e9gf9ege997VX7X9X71MMrV-V75-gnAHommmgf9emem9eefBmenA1AHmmfCC9h9m91AIHegn9emnAABnIBmV1mmegon9f9mXenI9fbV1ge7tzV--cgoon99gc0s76tV99nCLo1977Ebs50Vf-AKJcc-1fMMKr9c7-Aa-1mpBme9c-5OWWV-XV-50a0VVUV---1N18xy11--V1717V-0a0VV117V7-0VcWaN7Oa6aNN--OVV0SrWyUxzVe8UxyNN7X2bVSMVN50bbzWVXhH7aNTSraTObbWV0Us0WVOaN55OaOaOV5-OsND0tbzaUrrtVXX6rrV-X91V0V-N-V7X17X99f17X1XXeemXcgeA9hBce17XpA17fKKCK9e97hSrSHpomf9ABpSxHpKIKHhHhIJhMUhKnKUrKKyICCBnABpAAJpKBnIICA9opBme9hC9nCKQ97-XhJmfIKBhJoXA9empmpHhMTehICIBehIKSRkgomfKQ1971hKxQBpprSghCCJonCKKqpMSpBX17XhSnBopKSgpKopnKpIJpKSppIJprSzzKMTTTUQKMrKrrps5-KpUKKSSpMppSSKrrKMI9fBnBpHnK779nAMrSxzwonBmXXppQAI9fCLmhBop-s1-WV1hKBAJpBofBegp9mefKrpqfABfKzbpIAKMKHpKKBpIBpqmpKKKRnABooppKpLmnKJpCBpKABoonIIJpBpBnIHVX9e9f7ceeceegpSRe7f9mmonCJpKSpSQIIHn99cXee9mgf9Xce97V-5OV511711-V--7X1--MrSTT--VcNUUWV-7971--X77c1-VV-V1---AJXN--N5-7eYWs17Wa---cXcWs2aOVgc1ca0tVVD---V0V--55-1eX7X511V-8V5-ge9pMKpKJoepIIBmegXc-fCBmgfCIABfIBogmnAC1gnBnBfAABgm99ggefBXXccXf7VXe9XX6ba-XXX7c91X7VV7X1VV1-D0s55--6USrMSMSrWWbzs1menB1N7VUsN----2bVemACUSKKBk-VVfICKSpg9777--7hCSJpC-----bsN-OaOa56rJnIKT0a5SrtaUs99150zy50ty-55ObaOzbopHpMWa555Uzs9ef79gf9eopBcgnKRkAJomVa0V1da5-gnIBmWVVVWWzV-VXAMLkVVXNOVza-1hRmVNEtSrrpMSy17VTN1mgX7X2yN56zrMTUtztzSxzMrStbtyMxSppKST-V-UTUraUy1Xe-OaN9nHpKLegA9a1ccX1nIBcXXXcXcefA9gX7VVzs9XVbzyUVef-Obzs91UV-e9WWaUWaUzrUSrUrpzzUUrsUrs7efB999e971ceXX9ec7c4rMyTN11X-SprMMMbVcYa4xzzrIMpry1X-V19ge-zza5OzMUUUKpKps1-1OyTSzKMKnIKKSy1V0WxzT19XX-V-Xcf7gekcaUby19f9mdtyMtbzxtzSrWUzrSyOzzbrtrV9gXf1me-eecaTMs7cX8aTTMxSrMtrxtzrKKs--VXDOxSSSSCMUy-XUs7gV97V6tV6xprV7tVA8ySrVEzzxRopzbVXOVaUzbtzKopxRpMrV5StxzrzUV7TOVgiOtbaUzba-emVOtbaTObtbzbztbs9emgf9fBggf9mnAKRpgmmn9mmn9egge1-0ttV9mmme6a-iUbbzaOV7NSs5O_s8baNUVaMT0brs54SMMUICMaNOzzMsD1eeccXUSs8WVObttVVgfAIV71g7XmkXtaT2rxrSryOyMsAxs8a5UKtWWxpKztyObWs1mmon9Yy-X7N9on8V5OWVaNMMSrStVXVcV0WaST-aN55OVfABda6bUthMSrT17XN1fVU_ttzyUwprs2zzbWa6s1eopAA99eef9ttbyN9gcX0y-VDMptzs9cdV6s8WvKy0zy171OsUxT0V2brBpMs8s51kTTUxzxzxxrV17es1mfA-egeiTTOtV55OtttppSzUMV199-8bbrUVcAtSrs7XX7gnBnA9eTOs1cT5T2WxRpzbtyN9bs9ABkYWbbaShMsOWt_QMIKKxzT18VXTTUT-1hPecVOUVbaUzUU_rSSUVVX8tzzUT-ce9f9VemeeABfB8a5UzbWWWzzbbs6tSrVVWxrV79f755OWtyUs1-0aN-OUKMpry-c17aOzWUIMKprUUIMa-1X918V770aTObyUxIKSIJpCUVNN5--sNOMVN56_pKCJpSJoonKMVNNOa---OVsOptaKMT55NNUrKxxrMMT11115N7s9kc9V9VttMT0UTNO_xU_nJpUs7NUSzzSKKUMUts1e1T-c5TOVNOaOaUy2V50_zSUVX119X7USxs7--OzSCUbbKSzsUxRnCBnCCBnKrCIKJnIKM_pUVN5NN-7T50a5OWV0aNNNOWWxKKMBnAMxpIKKIMaSxs1X6rV-D6V-sT-UUVX1e9Os7zy-5SMUTOtpKySqpCBoe9nCTURnBpyOt_oonBnKttU_zV7a-5-tWWWtxxrqpKTOttSMsOrSxhBpT6bxSxrtUUIKAA9nHpHnBgeecf1ee9XnMxzxrUzUQCUxSs6SompyMs-0rSTUxtTMzzrrrUV1-sSxs777UrrrUMUtzUpMJn9e9ee-VhKgnMzUrynKtWzrzzzUxJpSKJnACKKs0Wba0V--UTOxyUrxzxyUxs-xyUrxzrUzprzUrpzUrrUrSyMrUSrrSUUUSxUaSfMT6xrSzrUrUUby18SrSrxrUpMUTNSUUzSSKSMSrMKhSzTKSpMLpMCSCCJopCIJpJonBonIIHnABggnBnA9nBf9geeg9ecce9cf1e9mm9mecf1eeece9X7cXXfBn97V9eA9cX7XfMQB97cX9997VV7ceXXnKSxxpSKxSxzQMUtxxhUr9Xs1AJmhUzUUSzzKSz1hUU_Sz_xrrSzUMUKrSxprqnH19pSKSpBpQABhMrKSxrKSzMBpxrppIMygpSrBopryKpzKy0nMMzba0rrUMStUSpSrMryMrxzbyUUMUty5-Ortbs78V77X77--Xe79pHfBg997X7X7X77ce-X7-zTOa0VV75TUUzUrrxSrrUrzzwfACKrsObs6TSz_zxrzxrrrtVN5Sy-4W_BQCq0c--5XUc-X5rCBxMa7PVDNUK-nSJp971_ESHe-mocmeKzxIIOxttzsTT-Ota0ee-057TlBpMMMlsOV7Xe---Z41V6NZVgpBmXJgnKMpr6WaNT0c7--3XZyYK57-DXainASrrUs-cXc0D9q9BhrKpMy6e7VHVV-19qEB--1him-7XjEvIohy--0DA35ggnKEGzTOs90X7-DANdhT7-7Xt_vISba9c11AoEBnACBxrSxSa0Wbba7ZmcWXV0Nl-LpUX7--232P--Y4hn-1NmHcmmnUy5--yBtECSKpGaNP197-0YF0nN-QYKBvKofomhMUtzba-1WcBcV17r9ZnpzsX9-4YWUUKaNc-1DHqB03YaRQJjHc9K9Mp9XmrHhrJhromghUxoOVT5OzMxtV5VNT--7VBc--DVec-5DXQxV-9EWOSk-7cyKynBpBnABoopJ5OaTT5NOs-OcVH7zjtnSIAHcgnCBomn9gjzUxrxCBeo6yT5Uc5Wzxru-e-Wy0s0aPc-39Fz7gpKSBcCHgcWggnIpRObztbxHggpoehryP6tbaT-VN-17---ZFFrV-t3OTpa7--GJ2c--GJFN-5GL3xc-9GPigq-T84fLpBpAMHpSBfACoemeoefCACAJrzttaUM5TUa5TUIErr0WWxOtWaOzyNNNN77977KACKBnAC90aTN1VN-7c-eGPvhSrq0ceV-1GRaD-9ZO8jSpKF--7--ZPZE--O6VKyV1O6qJppObVXc-aHHGgonUbVV-1ZZurAs1XHQCRnMzMppopDOVNWbttbYBec3mgce---HWfN-LHY8SS5X--09ahV-tAuEpN--TI4hxDUT7c-PI_QzrqXX-3ZxNzHzV--ZyYEV0dEl0pKsV---J06s--J71N--J8is--JDws-5JFcRs--JKrN0iJQsgnonCCL6xba6yOWXe9e--_6BUV2dHDArSUrz1XXX9-E_ADrICMKoN176X--0I2AV58JkgmgfIIICCTOaT0wNN--PKIxzUTcc-3_KPjIqV-1_MDbCV0yKYtSHpIpCSKHZlzLNV-10V55--5Kcizc-9KeMwq--0MPIV-dMpxrc--_Ul6V0OMzAnSN7-O_Wd6ppSppKMwNP-7X97V7-F_Zn6CzUrMOX9Xc7--_a82V-0OcIV-8OxHk--LW2N-DLaXxTX--4fBH-2_fwzLPV-0QFUV3OQn6xKMSxy0X-ee7-F_tjEBemhT6zzP7N-1_yrzR71uMvlwxIBemeefSu6zp9zTOzq-5TUxxWc9A97-9N1TU5V-0Va0V-8W-ps--NFDs--NFLN0aNK0UKptxxxrUNXXX9997V-DOBAzTX-2aJfQBy--0a2hV-0a3SV08aU0zT9V-taUEntc-5OtESV-eP2MzUSk6e9c-XPIwxMSN7VV-ddFArc-7aafrpUq-e7-TPquRnTTNc-mPxXxrrKlcVV9-3amCbSkV--5oXa-Gat6zSSzrUR7X7ec7-HQgPwxu7-9R1zzP-1tkzEmgj6zzXc-2b3DrLP--Ol2rq-78lqzrHegrzzzKEUTN6seVNcgeX-kbAFvBghCIKIIBpBognIJpMKSSxUSrSSxUrpK--0ogPV0OpIUnBOs-SbSprpUSI9jxa6aPeWzz5XeeV-PSyVwpEsV-CbXszKCCGWbsV7-0bZmzN--bbTv--0uTlV08uUInDTV-OulbqV1tuqQnCMF-5Ue-2bh7jJP--0vJ6V-0vjlV-OwCMqV-OwVCw-0twdKojFTNV3dwdbnUSMzs-PCA91V-HUDFBraV-5UKsSc-DUR5ByP--6rqa-2bsubMc--tyOApa7-yUdojJmnIqOtWV9--bxunV-0zWdVAOzeUnxBmfrrICrUUUUrpHzWVcWX1175X-Xc--UzJs-9VELhk--e0DGpX-2c8yvE5V0P1YAmzTX-Fc9eEBhHgn5Uta5N-OcBY6pSrIAUJgTOa-09We7-GcENbMSppzye9777c-9VzggtV-94IUs-9WO6SNV-95_ss-DWdaSDP-mcR2MBoggxrpUzzKSEzxUqUyX9ecWaNVe79V79c--WkEs-9WoBzNV2u6I8rMJpGaOV7Xc-9WxeRyV197X5onrsN9-1cXrMEc-uXElzMKM575NHe-09AHrpNP--1AZrV-eBC4rX--7ndq-4coH6ETP70HYKWxSMOxxc9XWbkd9V-9Edzk-HZ0xhyPc09Z7pBmpSxpy5O9V79--82Ca--86Zu-2dAgzUcV-PI-Bq--eIQcrX-1dKuADN-H_k1UrXc-9_qWSsV8uMPGmzMTNUUUSEMSxxze7e71c-XHee7-Ha0vzScV--aLfs01aO1woxIC6a-0tuc-DaUtSq7-6dh56pM0X7-7dp2zMSR-X--abWegmjUOWc-EdszfAKSzV5UNe9V1PUQ2nABUzc7-5by5U---cAvN--cHps-5cLGhV-DcONzR7--98tL-4e9eMrR7V-HciUxpX7-udBoSJfErlbuVX-29aVfmxIpGa7P--DdjHRtu-6eW7EKSN11--9XeD-jeZFrBfCpCSxpSrzJ5TUcOzaOXfBh9X9X--1c-1eGYR-5efWrCracV-1fXrV-ufyWxkV-ufAyBoeezUrzV-V-ugwopa7--fJNN-LfPwSpkVV-9iyzs--fqes-ifsnRxzxyXecV0ejZ8nMbe7-9ftmzP-FujbporSIzSpMUISCxzx-VUzrrTc6zy7Xh9ecVWuXX-7mcVHe1--ejc_xc-3ezMzK51-4ezOMKGV7-1g-Dw-Rf-nQAA9gnpMtzzzbttXXX7e-1f-oITV-agD2xzola9X-Ff2bjASrxSr-97VV-4f47MJyP7-9gJYUP--9lWRs-qg_aBfJxrzs117--gavs-PghqUKGX---fCFz-09nVOpqV--9njxk--gyON-Dh4IxL7-2fGYEENV-1ob8V-upTOpa7--hVws-XhbrSpLOcXV1eqiCpKR0yX7--9qk6k-PhjSS9c6y-7fR-rUrR7Xc-ehsTBgrqUscc-PiJ1hASaV-bfaA6AI9MMMHhzpUbzOyOz1X97-1ge7V-1tzIV1uu69nCrtwP-e-9ffCUprUkVXc-5fgVYCM5-V-9vpss-5jH-E--HjT-wxu--XjYHx9xSVN-19yPqognyT--pfugbS9rSrSMSrzpaUpSUMSkVV-VVVPHgccX1XX1c-9jiyz5V0Pz_GnSN1-4g0rMKR-7-HkBVxlu7--kCK70LkGUSpMSrOzuXWse7X9-4g57jrTXV-DkQfwxX--B98T--g9En-1v1y0pKorN7-7--gDm6V-v2vCxNV--l12N-Pl34RxUcX-0gHXnD-7gHhbKrq7X7-TlB1xMxcVcJ1lBSSrSSppzUzxpzT6xSSrKrMJopBmcXcxrMRUSpMKBgc7N1cX97971AMHYSSrMHcce7eVVN77XVX7-Oc1dMSHooe-V-CMKSSKq1VUpkUSrUSCMMMUSzSprKKHexxrSSxSxxyUSzzSUUSpSpSxKKBhUpttx57OaP0WyOaP-9-0V7X5CHcV77X1VVXXV-97cV----0c-7VXcY97X7ece1XABcc9--23yxV3v42inCMKrbVBe-0xXV-A4Ugk-aliIwpIMs----BS4D-2gSBER5V1v6fGpCCptV-X--BTnq-7gVUzKKT-VV--m1DN-qm1FRfpppNVN7N-DmEsxT9-QgZUjCSKEKR6xGWe57N-ZmVV0A8RQxR7--A8TUk-imT5xSTTTd9cV4Q8thxpponSpTN7-X77V--mZcN1immTUMSKCKMR16VUSprGbxkXBcVcX77V7V-TmmkSpUVcV-un7nSrMSxkX797V1ABckpMba99-0go5MN-5gpKjMMX7V-QCSMnV-vCllpk7-Pn_7wppc--6gu_jIIqN7-3gwCEUP1-HgwGzMMMSxlu7X7X1V1vETrmxSrTVX1--C-0D-Eh0RESoxSRN-X09--AFrbk--oIos-aoMTSIKFN5--5h58vIRNNV-2GitV-vH2_psV--oc-s0aoc_xKMSJe9JUUqN5P17VV-XoimSI5OycV-fHxjnk--CB5q-0hHcbN-VhHl6KpASSSKIMxsVWyP77VXV-7-HpEKxUX7-mpKbRoeKSo-NN--CNDi-7hOczxzTcXc--pboN-DpiAwpV-5hTmMpR5X-0QMjrnMN7-1hUQAT7-HqBoxK---DqWZRr--IhdNrKrSzOV5QBeX3e-9hfVIBpUzX17--CfpD-phgbjBmccjMJrzke76zrrMMSrUrpSyc17VVX7X7X7-HqmXSSX---qmvs--qqEN0HqtqSrxKESrNN7Xc1XV-2R4lV-fTzpnk-1hwNUTV4Prr2xMJnIC9EIrJomnqUKKCJeIIMOxp9MKzKSr6XX7--V57OV70WXV-5-N6a--V5fUUEofHchpKMOba7X5UTP7-0hzqEP-2i1rMSX-2vVmOnHpplxk-WcV-9sS7x5-2fXLhnESoxu7T17-2iCDURP-3fYKfrK9fISr6s-57---sq1c-DsqBSTX--DFu5-1iHcjR7Bmt9wxogcf95IIESpAAJegxUJfxI9onJeCrrrUrSUSSrSpMKSpUSrMKrMMMSMSppSKCyUUz5N71-0aP5OzyOzUSrUN6aOX10ty-7-0s-7cV-7X1X1-VX9XX7e9cecge16yX-X7X7BmXXcV-2iHoMUcV4Q_4_nBrpyOzSq5cXX7c-HtGWSpX7--tUGs-5u0pzc-Tu6aUSS-17-Tu7VxACOa---u7iN-5uEYS--5uEcz--auFlSKqNO99-2i_aUGuV0QdwKony7-BicpMJrMSc1-5V0feEApSWcc-5uYrSV-1uf6R--igpMV9vfYUppKHexxMzxxrUROttX1e7cW97HX17--2fYfV-Qf_oq-0Afj_rL7V0vfwMpMaX5V3Ag7opBpKpT575-7--fgPSna-4iqejAoOV-avQIxxrycce-0isQUF-1is_AGc-LvkFzM5X--fjqbr1--Dz_T-6j-zjASq75-1j1jzlc-9wL5ww--2lNpV-flSUxX-3j5MbM5X-Hj6HUJm_prMSk--7X--vlsIpk7-HwadwjOV-1wepR-2jAT6Ia-1fnTTxHnEy0X--Anark-9wvRwtV5QospnoxMSOzr0aNn9X797V-Qp0rq--QpG4o-0QpR0mxlX-4jL0rSq-c0XxPBBfBnEMKKyNNTOVN1e-6jMXUJlz11-EEgqwecX-s5OaSs-AjV-jKppq-17c-9y-hSkV3fsD9ppKIKDNNOVV17-Ty3bxJp0V--9yERww-0Ax-_npV--Ax2Ik-9zfaxkV-vzr2xk7-A-1BRy--3-zvV-w0lpqTc-I-kixr-c-A0MPENV3R55SnBpKkWa0zGVX-nkNrfACJeonMrxSrrrSrT55-IC9e-0ztVNX7X99--35IBV-R5UCqV-35iqV-w6ltpWc-60xjx--A1PugyV-B95ws-E1cpgpV--ki4IV1wAqXpUTUa1ee-4kl7ACOa7-02LhN-02YwN-I2aoBjy7-f2fQUKrScVc--I2gExS-V-b2tvSppo-7X-0kyWUF-1kyZMq7-036Ns-M36nwhr---RFUnqV-BFvKk-03Kgs-A3kyxNV-wI34p57-644wwN-64BcS--04PSN064PVSKSTUF14HcWc--BL4Uk-64ckSV-04jBN7r4jQxHppKKpMJxHe7V1-ecnIIKABoopUSognBnIAUtbotyOyNOsNTUSJnKq0a6ztbttVOzOVOX-5c0a5OV1XX7Ze9jpI977AI97--lSWj-FgMRSmf9zbrpzMKc0bxrKESxrlVXHVUbbpSkV7XccomXX9ZcP7-E4xwwja--lXvjV-wQInrsc0Q5ozSpKEryObbuVgce1c-Q64OwhMWX-0lmZbk-0lpy6P--GtFD-2lu5jKVV0RUb6mp6V-0m9erN-5mBT2BjNOV0wZLzpUk5XVPBZWrmmmmnIJrMSrSSSSKSMUxKpKrSESpbxSSrMOts7-7Ve7cnA9119-Oa0Wba7V---V7---ece-cmKJQBmp9ggzzrSKMMy-OyTTOX7X997X06mLdEBgnABnIIIICCAJnJpCCJnKJ0a5OtWa55Oa0WbaTObcV0WWV--I8QGBxs7-U8RIgpzs7c-29W_w-3mdg6Ctc-0mguE5-ZmlOjKBmmonUUUUbw-OzwN-VHmc1eV-wgZprsc-rANbgnKrUtX17c4UAhBhBenHYBocVgprSCHZnrrUMSxHnIKLOa-0VObaUzxWza0bsNOy1X7Xe9n9cV-1n8XjDN-IBkvzxXc-2BlYi-RnBjzIEMMKppKKF51-1-0V-9--nBzMVXBp7smn9f9XehBnCAIBomnABmceXeZegccZmonAAIBnKSMSrMVc57OyOaVUzWzOzxxzzztxzxxrrSrtbVOWtVN-OVP7V-0aT--RstSq--gtJnqP-3nilrCq7-AniufCAM0bbcV4UEFHBomghIHoonBnCKpKICSKpMxIBnJOtV-OsTOtsN0aUX7VN---6zOa--7fJe1-7nuYnACrtVc0EFVzgfBofKUUaOV0a73zH2ShKICCCCICCIBgnBpBpCICKpKCKRN55N-5N5OV0a0aN5-NNNOWV-NP7-zHTMwnJhpJ5-OVP-5oiBECSkV-0hBVAn9M6V-IIDDgzZc-2IgAR-1pHnrR--2KH6w-4pLvUIOaV-0KUwN92LmEgfBfBgqUSCrKKKBeVUX5-X4JmoocX-57NNmconHdBpJce99pKppppKIKopMrtxxxprKrMUStaN7-6yUza-7X9775ObzzStV--51--N-PcXX7-ILxOwoOV-UMCUghM5N--AMQdSNV0STQGrScX-8ptlrCCCta1-0CTnYnqP-0SVFsrM-70Eq1sfHnA9XcYCppSKKSErrSSCzpUUzKTOWaN0V0WX7VXWa-2KBme0WX19c-4qODnHrVN-2OnhB-Cqb12CCKJ-UcWV-IqjjQSrKAMzTNV7VXc-Nqu9fBnACIHnSLNOWWaOV--hjnFrX--r-vI-1xkFZpprOu97V-zr6zAApICSUpzKUxlyUrwUxKV56a6a7VVXY9_HmmeXVX1X9V4CmRVp9mrMaTUxT-e7c-OrAdfJnKrrSrrsN0X979X9-0rFTQP--MKdX--M_8P-DreVnCCSrzVVNec-AVFgBTV-T02FyV0L0slMs1c-6VTDEc-6V_Ajc-AV_JBtV-D5hsk-b_7iwnSROX1--OPBa-1tQurDN-Ya80xERTNXV" :
		16 === bO.eB ? os =
		"DwCd1sP0j--RaO__ddedddifv2EEznnnyfEeRwyzBBBB2Bn00-17-2fEMK9dCrtzUrrMMqN-X-789V----Sf-T--yfzIrzohrxy6kX6rSk16k7---11J7Z-35CISoOxsUKESpEP6qOV6pJp9mec17cmhpxUSogfBnMMGWxptyUUzc5UrtttzpoTOV6lVVZme-gcfBc5cUrztbV73cWztaEO-1I5dLOfvkygzEyaOdzjzsl2knvg2EW2zEznvzzyzyfyyzzvjuMyzdzjivvvyyinyaTVyydzufvevjgwBoG-znzdiEdbg2vkyjEyiazuK_4OGaJaPjzYnzzjBwnvyfiigEnuP_vjuiaOMdezeififiiEfgzfusnEeO_ivviEuvjzyzivivivg3EjuyjiezjjisnvvEffvznviyviYEYyzjygnBz1_Fl-zivjEzyuwnB2z0434-4G304-44-CGJFKJEK42Bo-38G-340403LK2kl44G_GFn-G402l2x2433432vuvfvY4-l-0-FkF3G-J43G3FJ3-G5J2---20L-Y-8CqLKOzvEjYn3GF5N0A3mrIprrIryT1Wace1XV0F2MKYo-H05ahSVV1R1RHOKefiznn0-z4KUy5MEe17X7Xa17X7X7X7X7e7X7-17Xe1XeX1VXT0aN7X7X9X7V19X7V17-Xec7X-7X77X7VfBctaT-17917-X--7V0V-9Xe19X1cX991hJpKJpKMSKMSKUIMUrMprSrMSrKMSKrKKrMSrSKrMprSrMpKMSMMpMSKrKKCKMUzrxrSUMUKIABceV17-XcX7X7917X9X7X7e--0aN-7V17XcX77eceVX7X17919X1EzyTN5T-c-7X77X7V197XcVXN-7V-17-X18VXD---X7a11--7a17-99177Vce91X7XX1cVXe9XV-N-7a11177VVX12V0V-VX9-N0VVVX1-1171777s0V5-N7V7Va0bVN0VUV-VN-2Vs--a-NTN0WbV50WsN5-N5-N5-N5-OrxzST-VXcc-VN-1N5-V51-15OxUSxUrxSxSJpMs0V-8V5Oa1D18V91191X11-VVX19nCSSKSSSrMrKQKpK7cXXX7Xcs-1X1VXVV7777719-csN7714yUSpUSSryN77c7X0V-16a0VenB5-D0WV9X-a0WWVN-gpC7X-gm10tV0yN7NNN1VV-N1mm-N--s-7WWyN--fLocccAAC9555NUsSpy-Wa555-c--hIJpCCBmg5NN-NNN8_y--N0VD-epnIKCCLVXYWV-919prKSC9cV77-V0Vc11111TTUVVgkf1991D-e1-ceXX7X-WWs9cXXgcUxy10Va1cXei1monICI7g9-XgegmVgem7X6xyUVc8bbta6bbtrzMST--15NAA9egemfABXnBm9n9XmfBpMI9mggfA1eceeegn9eeXe9AIBme7g7Vecg7dV9mgecVfWzzyUzxSvCMtbtbzxtUryOzzttbtaOaTOzs97ea0VenBmN5N-XN9X9XiOa5ObtaNNNNOttVgggnB7e17OVN0WbtT-tWV5MV0ztbaUzMy2aOyStI7fCMtxrzzbKrUyUa5Oa0bUsOa1me7f9cD-1997-VTOWaUV-WWrzzxprWzUrqnBnCKrSSzySSza19Es9aOs-c-WsOaN50V-NObttrSSxzzbtyUbzzUUzUtxrUUTUyULpf7hKyTSBpMzpompqpSxUrSSrKprUSMMUTMxSrKSKrrrppMKMSSprSy50byOSzaKgpxza6zUtbz_zUmgf9mA1egmgf9pMsOzbtzMyTOzzMbttWy2WrKKIKSKSUtVOsUCLnKUtza5SzUxSSrSSzUSrMrUzMttSxxMSSHemgnKzUSzrzxzyUrtbbpSrzKtKrSAMKSs-T---X55UbsN9eem7iObtztyU_rQMKrUSMzzSrxUzzbyUxxyUs18s1UaUprzxMKJhSrMxpps-V-798VUtaOVOVD-XhHDN-6V9XXm7ce7VVtV-951-Ors18Wa-7-177--1-UVcOyUbzMTUbURopIKCIA7f1hMShJonIMTUMUSUKKUMrSrRchMJpSryOxxhIMprSJpxrs---Wa4xxrSprKmpKKxUSrUT5OV7N2a--7-ztVYVXcVV2aOzrzzxrSrbrIMxJogAMSMSUUSrrKJgpQJnAJX97hMMU7fHeX-en99pSrxwopCICBmcXXccXehSrprUxzbztTpKJonKCBfHeXnCLpBmX9XpSzrpKpABeepS9nKnBofKwnBopRpBopCJpKpKKMKIKxzSzzzxKMSSSSKxKSIKtTUWyTObUrrxzrzrbrSzrMSrpzUxySrxxzrrrzzbtztzyMxrUKQKKSSppMKpSKpxprrSrUUSxxrMprrttVD5SrV-a-NN71-cX7791-77VVVVX71-TT6WWbWWWVN-NN8V711-V777X11XVcccceXVXXNNN8V-15-9-VV791dV1-VVX7X1-sNOtrtxtxtySyUVNStUrUrrbUMrppzzrbbry6pKKrMMMrMMCSUUKepKxs0aTTMUUU_rMT-OVN-6T-7-a-777V-5-XMxSSxxrxMU_pzhUxSmpra6QKUbSyOSSnMxSyUKSxCMKUtprySzrxxKttbzbSrbTN0xzUKBpyTSrrMtttzprrSSrMSpprKCILpJhBhIBonKMKLnKICJnBgmmpBm9mnAABgggmeommnAAAJghKKKhKgmpAAJpIJopCIMIMIJpCKJpKUa-s550V2VN50VNT0s5OWs6VT5NNTTTTTMyUSSxQJpJpAA7fBprxpttWbbSSQKSSSMMzSrt_rUUbUbaMyTOVzTOs7777N70V70_pzKKzbbSJpBp11hIKqnKUtIAJmnJnJmnIBnBnJnKKLpBnJhI7e9778V1N5-NT0VOtbaNN9gmmmkfICCACBgonCBpQICBnI1fJo9pSQJohBchKhCKJopSMKSSMrSMCIBomooenABfAIABgnIIMtsOaObbxI9mmon9gnKUwpMJpJpJpBmpSCShMKCMKCBpCK10V7-77X1-cVV-7hKKCMKrppMKSKpIAKtxzxSKpxnHghUySrvCICBfCJpMbnAIBhBgompIIMC9mgfCCKBoonIIICBfIIICBopIIIKKCKKSKMUKpKxpSSxxMUMKKSKxpUpKrSKSKSKnICCJnCA1999-1A9e-7-cXXX17V70a-f7VV-1--7XXm997cXX9AAC9mgoekccXg97XXABmkf9f9fA9emXn9emgmgonKtxgnBfI9nBemef1X9-9gn9meeXA9eemegoefBmgnBnC9gnC9eeggnCJhBpBnKJnKKKKxpIKrRhBhAKBhKSKKKIMKKKF7Z2MkT__44OOaO__O_LLTbYvkyffBkEcw2knyaaiBkyEC-x-nl3-3VQ3QMsc-O-txaOjzzk4K_-7VS-vCSzc7V0J2qEPevjFF3F--6mTV-FGRlV--92TV0kLotbx-a7AuPnIUUoxxzbzrKrpKKMSSSlWxrUsWtzKlzTUyOzbw516xSUzWbsX6wNgc55Xc7mcXmgmeJmofomXXIBcYHcVPXZcVTUceX1d9me17ee9-A0Y6qioC-asBoenIBjSUIBjUSJe9ceV7177eV7fC9gpzzHeeICyUxA9efIrzM0zKaP6kOxIMtxzbxBgef9gfMSxyU6ttaUttzGzryOa-OV1XCJc9VcN7---40ekqQ--NDEDyV--Red-6VumnMUacX--0pcZ3P2fIBnrozKocX7X7poxognBU6zbzojHxISryUWX-U0XV--V9YHX7--6M-k--Do0VDFSy8__bfuePPaEykFkk03C2-3VwCbAMV--0t6o-92oUS0V4FUCSaOQzBn4---ywe-Y13Y5KOjuRyaEBG2F--GW_V0FZtli---3co7-38GgR-93kCEP-1kaQpeNn--L4BWBn5T-BFdZS_ePOvjjjjwk3-FJGF0sL9epCyN9-mkhAhaefdPOOaOd_eO_dPLyiiveeeyEnnEiEwBk2nEnBnEEEnnwwznnF3333GGKJJG3G4KKGJ-94g9CkV--ipW-VWVbABxrMKz5OzJxsNNNVXmXe9c--B49F--PnOV-FqcSV7sQLqmeeppUUSSxtaTU6yT97997eeMC2a-LKOaOaOi_vdPiuzjd_dvijyu_KFJGF33303FC2-oBBB4KLOOaaOiaeduaeeffdiuzzzyyydKKJLfivjjjYBwyuyynzyEnznvszkxFzwzjvEBG0G2zjgyuyYvybvzjyieKbfYBkwzivYvyvyEiviyvfuuuPfePPaadvvvjjeOLP_MdOKKK_UeaPMefvjjYzYknkkzznFzyEjzjfyvvEzjeQfjYvzznzyiyEsywzwzYvEgkG43K4GJJKGJJK3-zjsEzjjvzwyyvvC3J2G3FJ2yjFG04FK4F4K-OKGJGJG0GK43EB4GG2EEzyvvn2yduyvjyinzx33G033Eiw-o-KF2k-GGJeKO_-0PL_JBFGKOF_KOHK4GFxOHKGGFwp08J-yEYnlKKFJBwFJK9eOFHLTdJ-kkn0KKdFPPe_3-B3HeOaJ_2-EeVC-3JKLdi_FHK20dPJFk0O_JBl3KT_3K5LLfjdJeu_Fo3_JiePJF30-l3FGJFoGF-X6dJBfEOtsV0FxOWbo-D6uCS6X1v2zp5_4fu_4ivEdiuPdKJF45aiivivyyiviiijsn-znBkBF235J-GG_-nBl-w44aKKG-KX2_nCErSSSkOWa11XeXLG1g8_OK_OOO_aPuKOdajsydQjznzydLKK_5KaiuyzyvzzzyzjvjidLK3KKGKKKKKaQfefjizjzyvdefiiznyzzyEwznBzwzkn2Eifzjufwyyzjwww--GPO_--zVBnvgEekk3K3GG3JGGFFG2B-333-0--03G3HK4ePeefeQiaOK--3-0-JFKiydeJHKJ2C40GG_ddKFnB2-JF0cWyMmmyTN-ZGfute2---ZAWV0G8Ihi3--8AO7--I0sk-7aWNk-RIFpuEF018vKgpKEM6tWV7XV--L5Mk-NgeYlV6GUzf_eczf24_-k-1C0lB-I5ZZqOynkqK-5YJBIArlX-1Gfu8_yC-6YOlnKIOV---5qJB-DCgdwja-C61_LTvoG-kYgE2KIJnAAMUxzUrOxzTOWaZcV9176qXeX7cVDlqEh_PPeffijjnEBC203FFGJ-mDm3BfEMtyP89-C6VITdTn---2mET-26bSqk--EMts2wUQzuiijiibfV-EYnn3G4LJJGF1szi7nJnr550e--78qw-1FShy-27J7aR-eFczBxKoT7-V-oWi1tLgwk-9FyXENV7H7Of_bisywyoGJG-GZSgYBepxxpyN5X97-gZ3Btfw30yZX6E9mY9eememXeefSzxzT6xzUrMommceKIABhBeMUSxyOWbbbxzHpATTTV5OzxzSy15Ua5O93eme9cXWWbbyVcmVAmK5MiyiajY2Eil3G445J--Hp-s--aMYk-0CdpV2HW8xuvoG-28GGLmemxr6tsV-oczDQis3F11JY8BgnBopr6ztzzNOWX7e7omX-0mZRx_UkRdHRBnKMKpMJppJxponBop6bbzxpxKlbWa0WWWX-UzUUrMzlxrWaWXVd9n9WVVc91e99X7eeVjHcccOe1V--dDLF0OOWLmpy1-6AISazG-5_hMYrq3e-2mvLGeyn04-Ca5w69nUrSq17--QBDVUivzzlJKJJ-qNYawozzyNn97c23mKCO_OLdiffgwnBBBl-J-5OPQhV0wnGIOeeyin0230F5uPAsSSUrHprMSI9BenCHoeXAIrrUUUzTUzyN56rzbV0bxbtcOyOttztcmefBgfBn9ef9X7VXX7X7X7V9IG_jaaeivzB-pFn2KJ09Pe2Rhbzzxxu7cemc-CCRoydz-p--5k5q-ICZKiPvjk34--5npT0dDEw5Oeuaufdeu_PeijB-BBFkoFG2EfswFk3-JLJ-9Ul6xk-7nzgraaOeQfVBB-n-1XVgnghCEpKSIIIMKxML5-0Wc0c5V71-7-C0ccQ-B92pWnABnIBgmxUa-UbtbrzzrtbbueXBee5Pec-C21Ktk6e6I4rJpIBrMM0c-0zzbae91c7Qh2tpO_ddeeTbeeiiduuffeeefydbefjiedeeaijY-nnBwnznEBnnEwk-nveefdbYw3B-2koFFnyjueuTw2FyvfiB-32G0-oGK3-OdveeJFFFo3BoLK0JF-40OOaOa_8KKFB3OKefddFF0--02F-00G2--5cWxzMSV1V0JNHMaB-uYI9RnKMGWWaNe-HJRYn_aayu_jjjeBC-FJFFEjiwC44F2uEcgpJxIIy5-NVV-07cwk-PGjhlV3oZcraOPzkC-5eHK_nABpKKrK55-575TT-e0fHO2qaaabeuauQeiffeQffF-33-kk-BB222n4J3K--9LCls-CAWRtk-1QXrVIK7Wd___4aLywyizYzYEyEBw0JOJOJJ-edEvRpK5Os1V1CKLfOdOyszywkGG4-5etPbKtae-jKWNneePfiuiifiijifiw2yfeii-zefeeeeefYBBn--0033F3F03-G-3F03-4-0GGGKJ-ufB4MHjSzSomcXfMpzS6xKKKKMSsV-10a7V-75Ouec17-6Lbx5JE-PfeifA9eme9AJzrzxztyN57-SVW5uU-0qkprRxMSKSpKSrtV7X7X17--V-58t6-LgVLbBpIKrWzSqV0V7Ve--O0SB8LoLpxJnBgmpICBomogn9oghBnIBpUbWxpMOzzVUsUbaTOa55ObxonKESyUSzrzRUtWztsTUzrMtcVV-V-eX-0Zegee977XX-cemcY9ecV8q__U_OdujEvnBmK30--hDurV-5vfz37hzjz9gemecf9genrI9ggn97gegegoenBgopCJonEJUzpCKKIKonKSKMKKKSMSpUKrbzV0V5NN-77VV-7X-WWVV-N-0aNOWWbsN-0yUUUxzrzSMKrSICpJnIIErL5NOaUSxpSUMSSkOWWaV1-1-55--Vc7X5UxrpUSUxty51-cVXX97VcXZecV9r1ep_LLasznvgyw343F-AZ4Kk6pnU1tLuaOG5K_a_OLLPKeOddYzwwwzEnzEnwzE2E2C-JF3-4id5YIMV7-Cs_ftkIvpQOmnA9nBgf9YBoooofICBeeCBoqUUUxtza6aNUWba6aOaOWba5T5THcV7NLKvdveejzG-33F-5q05bAzy9VCvXK8_eeiyvujin304_-3-0FZT-95mmcgfAACBn9ggeAA9mmnCUtzrprpUSAAIBggecmmggghM6tzNOtttyTTTUbbbxzKa5N0bbbbbbaNTTTTTTUy551ccfAA99XXcWnw5hG_OLKOLKaO_LKOK_POOKdaPOaPOaaUzBnEknwknzE2En2nzEnzeKazEyzzjnwzzznyszgzzzwziyzjvvzjEnueOOdawzEnnwzEEnwwzEEnknEnB0JLJJ__OJ0K_JLK4K4_G8K4445K_48LK_OK4G44K4OKGF1TETamnMTOVc" :
		17 === bO.eB ? os =
		"9mDS-FP-F--0TedPPOXo0HCGSpxrMptUSrUztztbbsUtaTTOzzzzStzSzSrSrSrppT-0btaOaNNUttVOa---56y6aOSrUaN5OzztztaOtTObtaNNUzaOSrSvHogmgfKpKSrCJgnIICMKrSryUWs--17XD--OaUzaOzyObzzztzrrUxUKprrzyUzzzzzzrSrrbzUSzyOaOsOzzzztbzzrAMSKzrUzzUSrUrrMKKSzzxrrxrxrrSrSrUSpMJnCKUV6aSxxUSxrSSMzzzWzz_zzzzzzxrUzxUzzrSzpxpxUSUxrxxSrrMSrSKKMKMSKKxrSKxzxpJmegnKzWzzoeepBpABgohBnBpMSKyOsT5T---OWWt_onKzzS9ehSrUzzzzrzzKKAILmfHnBpUztWsT0WaOaUzzzUrUrSzpxzzrSMSrzzzSKKKKpyTUaOzxzxrxxrxrUzzxzzzzzzzSrxrUrSrSzMSrSSrSrUprMKzUUUrbrbrbrrSMKxKKKpIKKKMKKKIBpKBnJnBhBgnCAIBnBnBnBgonIJoonIJnBnKBen17AKICIKKJgpKKCSSKKCKJpBpKIKBnKKKCACBpKMIKponBgfBnCHoonBnAKCKKCI9nBenBnBgmepCBn9cecegX-9eenHmognBmegefBnBenBnBenBgmonAKICCKKCKKKIKKJnCJnBmfBnBmpBnICIBpIBmpBmnBnABn8aObbaOa0bVOV1n9fCBonIHmonCMpQ9hCAJnJgnCBnBmpBpBgfA9nBmX9eeeXeXcXX9eee77gpKrSrzSrSrJnKKrrrrKJnCBnCBhCIBgemggeggef9eemmeecceAKKrKICJproomgmgeee9X9eXfKMSMAKMzrMyOtxrKCBe7VcfBprrBAIHnKhSKIBp9emgfBnCBpSMSUSxrrzzrKKLmnBmmnABpIKIBmgmnKSpSKUSrPkf9en9nAIKpIBgmXEV9gpB7Ve9VX9XbrUV1cc9V7Ws11chBeaN7tV7AIC7XN1N1777c2V-a5USy117aNN-ceef97Oa-Wzy1N-17WbyMMKSCKrs10WV-Ws978V-5-D5-s-7VcgmfMopCSppIA7XV--1-2bs717V15--a52aN-X1-cVN-X-V-ts-0V0VOV1OaOa1-2WV-sOV--7OV-V--VX-7--7-0yN7--7-X1OWa--1-0WVT--9N7OV--1-NN---V-17V-15Us--V--15NN7----VX1N7---X71--17eX7X7XX1VcX9XXcX9999A77eVeX9A17X9cX7X7X9cX7V7VV---717cV1717X717X-X7X71177X-X71N19--97X-X7-X7c-91X-X-7X7g7XVeX7Ws-177-17-5Oa5NOsOa5OaOV1XmX7eVcOV-95--5-sUWVNT5N--0WWtztaTT6WaOV7-0aOaOzza0aN0a--7VOV7s-s--6V-X---17X1Vc118V5OV7eX7XcXemnCCBfBnBoprSp9gn9cV17ee-9eee7eV4kDJ_aeiwn-FJ-u28mgpMSzsN-XeV5Fop6aeecBBk-F1t5Zdn9xxrs-9-O9QZyeevz-G3G-YcmK6CIIrUrrSrrrqOa9-X9X7X9cV1_beTuOPOPfznwwC3-4-Jh78rBeejprrSrNN--7-T5ITPw30U8E3BgonBzrtWzzaNVeeV8t9XtaOdOyzBwnEBKK-AmPDvCxrr-7X7ByJT4OdKaTizEydLQi_G48_OUdOvEvyuv-zyevvnzyBFzjvyBnzzznE0KKJJJK43JJG3JF0GKK-2BiSRpxxpWX7Xc" :
		18 === bO.eB ? os =
		"DgBy1vR-AV60YBnopk-O_9DCIs4rUUrSSMUrSrSSSMKzypKSSMRpKMSrUKMSpKSSrUrSKIKSueXgnCKBgme9XenIKKMBpSKpKMMxpLppKKpnBoopKMMMMKpMKKKKrSzzza55ObzzUUSxppppCCSSpSSrRopSrrSSSppMMSSrKSzUtpxrxxphSMUMUSrrUzzaOtbaOtbbbaOzWWaN5Os6yN-ee117eme97cX--1117XmmccVaN1-Xy-XD-NT-6sDOa0y-cWtzrrKrrSpptWSxs1W_rMUMMUTUUzrrrrSrSxKSrKKzKSrMSrxxprUUzUyTOa-N-1-X-7--1-VV1D-EUUaOtSs-SyMzy-Xe1XXe999XcefCIKKUUn7X7eXee8aOV11UUUa-X7X0Ss1N1mVcf9ecekgk1AJmnABgn99mn9hIJhKKMB7797ee17y17V79Ve79nFX8s19nAIKI1n9pMKKT5Jp-hFgV1goV1nIF-hB-1kOsN56rSpppMtVX-77c7a5N-D550V-ObbaTTN-OVa----N--7s50y0VTNN-9maOzV17cVeepABnBpKKCBnBoopIKMMS9pKKKKKKIBWV-D-XemgpKBe9gm9eOzbyOa5OWV15NN7-N--V5-OV55-50aOaOa----99e77X9e770V1OVX-ccefABn997Xc77VccgceXegfBnH7cegcVX9ecD-VV-7-XV7Xcs5OaUT155-51XD--UtyUy--zWzzUzrbzyMT5OtztyOaOzKpxxIKKKKpIKKSMIKSKKSzztzbyUxtaUaNN5OyKs-6V0WV0_y-SppSICMKMTTTOtQBpSCMSsSrMSzyTMSprSptSUbzzygfKxUaObrMJpTO_pmpUxraTTOtttVUtaSSptzIAK99eXegfKgpCLmpMrUSpz7fKBoohUttrSrUrrSrSAKKUUra4pSzbaNTObaUyUxopBpSrzbaOyN10baSrrpzKpSSUtSzpUs-75N7cc91cXoX7V7Ws1-5TUbaOaOaSySzzzrzzzUtaN0V971A9eenBeee7Xe9cgcfAA9gggnKJgpgeee9eA9mfBgf9geVVX9fB7X6baOTTNNOtaOty52tzVNN9m7Xcce9715N5ObKt_y-8rMbzs90My6_s4raOUxrrpUMrz_rCMUry-eXUzrpySrxyObrztrzUMUttpztrVMrzrMsURhUxpsOpCUbrzqmenMtzmpzb_mfKzpooXX1pBpxSSKpSMSMKKCMKQKnCBmmeXcc71171-V--XpIIKKnIAAIBnCMMCKprzWV7sObKKrKUMsNN5UyMzzrBpztttWVaTObW_xpI99ghKKMxztaUUbzzzMy6vBgnACUtz_yTMrUzbnIMUtttV-UrUSrSSprMSSMyOWVX-18a0a-0yTOa5NOzrrRoonBpSKBpCKCCKSnCCBhBmme7efMSUSzUUaOyT5OaN-0aUxpoopMSzTN99WbV2VVXX9eYV0WaN-V-OtvKKUSzMrs1797VtpzV6rrSSrzBhKCKMSrT-Wa-V0V-X77ca--UzzzyHpMT-yT-7-sOaObbyTTOzUtsUIMSpSRnMzMT0WsTOs97hIBeX-X7tVVtzVc8WWaUonMzbKUsTUbSxrnMUKBoonJnJgpBpBoptaNOttaT5NUxprCUT1-VObbzrUzzyTUzzzy2zSxxxzry-1-Wrbtbs9zbzV9UV19-fa-taTOpUWxMsN716aUKyUps0xzaNN0VOWbaUzSrzaMrzVcX155OVOV0ztby-199f1XOWa-N-TOWa5UaNUaOa5OaUtzxtaN7egYy-VTOaUrnMwnKtzxpzaICTmoomenCKS9e9hSKxzbrSrSKBgpMKrWs-_yTNMbMyTOzrJnHnKxrKpSMKMSpprKSSMU9fBopKKpcfKSMAIKSrUMMpSSrUzVbrMUUTMympKrSrUUzMBnKSKrSxpJpMrUSSpSKS97cXXXXcXXXX9997ccX7c7X7V11171N-V-VVX1-71117-7-X19997V1mopKrSxpMMKpPeVX7hJfKCCKMMMMMKKpprUa6BpepKAK8V1meommnKMPgpAACReonACBopKSIKMMCKKKKKRpKCKJoprUtbbSSUs4MtaT-78sUxzzwpxxpxrKKSSSUSpUSSSSSKKKSKKMKSKJpKKKIKKKJoopBn9mccgpKICAMIKKKrKCJnIIBopMMzxxrrSxxxrSpSMSpKABofBnBn97710VA112V1171mmgn9k7V51-7XecXpAHhAIBooo-X75NN-XeXnBnKIBnCCKBnB9gpKprryU_ppSzyOWVObrzyTShPfIBnCK9hKCCJpKzrzxprSrSSUrxxqeeehUxzUrrABnIBhMzsOxrxSmgpxnMHnHhMnMICHmpMnHhSyMBhLopC9fIMhBnBnCJommmfAA1nBo97c9nMMrFhBgnBehBgfABfIKSx9X17N1emXABf9gmnJepJmhRmopKCMSUSxrMSrrUSxrrxrSrSrMSSMKKppCKKRognBggogeefI9mpxrr9nBggoog7--N-e999fAa-XfJV17s7XA97XcgecWV7eeAJpKKJoopCKBpKKKrTTMMKSxRpKrSzrzxxrStSrUUUSSpLpCMSKMSzMSSRef7Xce7e9X997-cX9-c-777-11197VXX17X7cgc0V0VNN1VOV-1-WVV-77VcV71-V-71--AJVV7XhMCBmfBnC797g-ACI7-Oa--11-Vc-1XVX9979X17V1-VV7cec9oppnBn1gXo71oome-1nHmgfBpKIBgmmcenIBnBnBnAAAIA9mmonI9egoXmggopCMKKKLpQCIBoopKopJcgnIBp9fACJmge7X77VVa-11-V7-VVVX-V72V7-7-VVV11-V7----V---N78V5NN-V6s9XOy1cepgpQIA9f9e7X777VX7UTUbta1eekXX7X0VcX91c--g7-11emXceeXX9ee99ce9g7cX999XXXX99X7XV-5-V7ceeegeX7X977X77-X7XVV-5-1-7--ecD-9hBX99onAMSKIMJpKSpKrMKJhIMKopST-NOaOrRopIBfIMSSMzxzUpzUUaUaUbttyUaOhBpIJppMKprSxrUrrKMKprRnBn9ggnBms9gnICIK99efBomceXgnIBcXceeeXeefBp9emceececeegmeXXeekee9X9Xf9ecee7X7-5N-a-N--NOWVN--V-1-V1--5---711171--550aN5--0V1-V77-55---------N-7XOta6aN1ggnBmnI7VD-VNN--NN1ghKBpKIKKJpKIIKCKKKCKIKKRnBopKKrKSSIJpIIJoopCIJpKUKSMLpSKKIIJpKKMSnKrUSSppKpMSMKpSKrKp9eepUrpSSKpSprrrzzzSrrzzzrUrzxrUzUzUyTSxnICKCACCCBnABnBgnBmnABnCBnBgmnBgmmmgggggf9meemeXggf9mgemmmenAAABmmmmXhA7cgnIIAIBnBmhBnIBnKKSMSpgnCKRnKKMKKpKSprQMQCIKKCKMKCJpKKpMBohRmnABfB-1V9sQR73q09kCIBed989cCHZpMUMMSMSUOxbpy0bbxSraOaOc7TVP29C9Vc0VBecV--7NVV-N8H9w--c9BgrX-BVhQICKrSsV-1VkNB1Dn9choeAEHp9A9eAKKp9fCI9Xme118BgecX7IKKAKrJce70cXXXcXMSppCzSpJxSMKSKSSrk-0xpxxzba-17Oxta56paOsNNTOyTOa--USkWzMUUzs--VWbrxrrVV-d9e7VHsFGFpA9BnCzzII9X97pxS9XHVZoogqUtzqUyUxx50WsTOXmgcOuVOXc0T4CohpochopxzyN7X7NXV-cNWurX-AW_mQ9horyWa--D6JABqN-51WZ4aN79-1XOJ2Oc-58_IBN-i8hrCBfItza-V2Nd5onEIMLOs-X-0se3gprOX1V5NezHrS9eACprpxy0aN7cVV07h4Zpy1V3shEFnKMUrzcVN7I91V-chgRwP--Xvb6V37jO2mfSxrUba79cV3cjXTpJpJOyTOX7gc--1B70i-6Y102KttXe-4Y2-QBrWV-qBklBoptztf9-7-aBzewzzyPee--YGg2-DspvZoeeeXmeA9mgmogn9fSApra0tzWzy6tzzbzztza-e-1YR0fR--PDnihKtVX-SYi0nMS9VecnMSUzxc7UNN5eV4HE3LxHx9HfA9nBxpaX5TUbzUpKDNUKBh9e5BfCMSFT6zUbaOd9V0aP7OZecWV-dYlL2AAIBmcozMopohpzU---NOaOa6X97-LEHZBzbeV07yFszq9V-cz9FrX-4YxwbHc6s-9FJpByV0d0kXnUT7V--FTac-5FvBCV-XGFeBnEUa1-686HMnJmxCIATUpUzV5--57eV2t6dDnABplyUaN1c--GxMc-9HB5gtV38862nCBopa0taT7V0d8AyppN7-1THOURmocpAKpBc9zSMU0aN551-USL---WZbifBogn9ghCUrLTTTOyOWs7e7V08F5moo5-48NGSmzJmVCKK6ls-0V-1_meQFN19MIGBrKKKKopKzWaUbsX7X77-17c-1P80D09ablQKBxrSSMSxzUSpSrSrSprMMUSVVVVV0baXX997XX7ccXVX17X7c-DQ9vBxX-PblGIMMSrMMMkVVOte97eX7-DUDUCL1-0bwmfD-3c-SvC55-NcAPfppppSrSr1117X171-Ju42Zn9gmd9ceceAMSrSppKrSIBfrKCMUUKk-T9mcV5Ua5Ubz6tX--0aOa1X902cKbrCKKJpHpIJnIKBnCCBfBfEryOttVOu5OaTN5OX0a-7--1---cRyM--P9esnVneG9xnBmn9grKKJnIJpKSKMKJporUonHe2IBmmnCBpCKrSrKpppxrSzUzxxrV5-NNNOV-Ws-XV55UrSrxyOc775-7egoe50Wta7X777N--7VOxrSVWtbzUUSqV6bWaN19cVX99gecemd9ec1xdFn2SrJeCpKrMSrKpSKSKIKKIICCI9XKMKCMSII9comomnAABpCIJpBmrTObs0taT5OsNOzaUSKMUtV-0aXX0WxOzaOV0zr1750zrGWX--XVVV-77X7V0VV-117XXXcHX1V39Nu-nKrUUyP7X9XVFeTW0xrI997KBcXBgnCAJpta50aUpIIBnKSzba-0VVUzbqNX1c--dA_c19eGowgggnCSSGWWWbaUsUUUccee705ejHzrzUUyNA9eXeV19fFvonOaTX-Rf_UfKCBeISJxrT-0WbbVNXe--AcyX--Aenu-lfzAABeconJnUP5UrSpKIpxLV0zML5-V7--1X7-2gTJfAOV-AQx3k--sU3c1TvB1BnKCIKIKCpMSGzr-0VN--751-19-0iur2k0FkOrQBgceZgnKKMMKKSJmXxpSSprMs6rJnrUra5NX7-X10X0aOVN-1cV70c16258gfA9fJmnIMKxzyOaOs-NNNX-7lElAMryXe7-042oc-A4AKhN-7gKbcmpIrX6zrxrMzUVeVX-gocVXV-3MmVV-3NpHV4wNq3mmmrUUrMUTP77-X7--lazYV3RQ6imfrrSprs-1X9-7liMQEOxse70E6TIBmZxlxxKOa77VV0I6vXBefKMIM5Ota50cV-RW4Rw-0RW5cnK5--Om5EABpMKBhSxxs17-0V5X--H5H1-9mCaYBoxbaP70emCc2MSIBepJfIIBmVP7mnCIAACCKIlV50bxqUV6zxxpCKprzzaUKa577cWVNUrOtV17V17V7Xcc--HEP1-0mI5IF-0mLgQF-amT1YIBonIIICBgonGaOaNOWVNOWba-02AS3hKIKIJN0V-5--AByfCsV-BqE5k-6CtMgN-0D4wcDzDLQCCCBpIIAAUJmmfBnAAJonCBoomgggfABpAKCJeecme9IBnKKKrMJrSrzUSKpMKpzrtttbxpMbbqOaUwUxObzrrK6aTTTOa5550Vc155ObWaOs9--0WWbtzyNce9cc-Ne7Vcc90zbcV0ztte90byTOXeXeeeVNXeeV0RupTnClV-hngH2CCCCJpKKKppUUtzbta5-V777-X177XV1wx_ZnIKKaN-V-PnvrYCJooerSo-OzuXVTOV71MEjtggeeeggnIAACJoTUzrMUbbttyN-AEykhD--x0GZrsc-2FY2g-4o9gQCSX-CjFseBonHonBf9en9eegf9XfCIBfBpCKMMHhCCKpCKICIpOtzSMMKKIJxUbbs7VN1---VV5ObbxrKCESzUpISy0bbbse1cX5-XVcXeV6y6aTNNNfBmehCCBee19cVV-0a6bzttyUyTUtzwUtttaNNOWV-1oImQL--AGQ0CNV-x5IkxkV0IIIYXm2V7XXeyUta5UV-46fyV0C78BrT7V0S83qnAyP2IoidnCSprrSxrSzrUMSxpMxzUUSSMMMMSzSSrrSprMSpMSSxrSxxxprrrrrUrxrSUUbtaUUL----WX-5N97X9emVP97719ecX-0aNcgmme6a9eX7199e77gecVX7cXXXXXcXX77X7X9egeeXX9-2oitACsV0hAoJnEbsc1EIX0Bgeen9gf9rSaOzzWyUrzqNX9-0CE-XnxVV-4FqeV0SGIunObe-1p622T7-0JRDc-0JfGc-vK0CgggrUzaT19V-CLDDs-6Ku0CV-ALMbENV-COvBk-bLoRjSrR-cX-8pp72IJoOWV--4T3HV-STYBq--hTbPoN-6pzxnBpT0X-5q4TfCGaNV-xXFHpN7-6N_hh--2NfsB-NqBUQHeCCtzSSSzT1cX11-1CZ-NpprX17-7qMXnCMyN7c-IOb-BnaN-0Owzc2fPAlBgggf9fAHoonAABgnCKCbbaT5OWaOaTOtbaTTOaN-0PiN7-MPkJBf6tV-4fLuV-SgO9lV-phLT7tV-4gqNV-4hl5V3xiFwnA9nAROzqOaOXV-SifanVGKwWFOaOV6zzzzUUy6tztbKta56s-WrzzsN-5T4rKpppSKSKKKM-6Sk2RmmeXgeggnTUbxyTUbyOe-OMnm0a50aOV-NNOyNOxtyN-fRZugenzttuc6MRg2gooef9eemeX7XeeeA9Y9BehCIUzrMUzzbrxzttzztzUzrzqUzzbzzzbbzrzzV-9fA9eeX0XeBeeY9e7-DrA8vSzrOtaXeec-0S7u7-rS8wBhCUbttcec-bSGCgnCzaN9-BrL6QBezxyTPXV4hpYLmgfCtzxzSttX9ce-" :
		19 === bO.eB && (os =
			"EcCx-VQCO1iiqOLOKeeedae_ddadadadOfiveOeLeeeedadaPiuuiePPeeyeeeeOeaPadaeeydPeOedaOPLOeeeOadLOKLKKLJG4G3G4G4G3F-3GJG4G4KKG443G3G3G3G4K3K3K3GKKK3FJ40F33GK0K0K3G3F3F2nBnBnBnB-Bn-04G--BzzwEByvn-wG-BnnB2BkG44K-4KPKQyde_K-G3GKFwGPKO_O_K3J4KG4KKG4KKKJG4KJKK30304LOJG3GKKKKKQvjzuzziviueeaKaKPKKKKKKKKK3K_eOKO_OedaKaLaOevedaOGOeOeeaOaOaOeOjzvjyaPeOKKKOK43K_KKaveJGJ0-JG3G3GF3G3G43KaKF3G4aOedaOFKLK4_eee_dJK33KeaOLOaOjveeKLO_OaOaeKLPeivjeaOeOaJKGKJ4PdadafiyjedLPeueK3F-G30F3G3-3LOaOjeKLPe_O_OeaPfieieeyeaOaPOKOeedeOdada_daOdaKd_O_aOKPOKLKaKdK4LK3LTdaOdKaOK_KLPOaaO_LPKGKKK_KOaLO_aOOaaOdaPOdaO_OaKOdaPOdaPedeOJF--00LaPdeaeOfeyeiuudaueaaPdbeOeuefefuivfifujifieviivifeeid_G-04OF0-03KaPvievjizfeeLJ0-JG-KdOTvfiyviyujffviujeiufeiefivivfivvfeevivveiuueieiefeeiyejffuiuuiviuvfiifiieePeeaieieveuePdaPKJKefefefiuzzvzivviyfvnvjvzEzzjzwzzzBnzwnnk2Bwkn2zzknB-n2BnEBzyzzBzzEwnzznzzzjfzBzwzznziz2zwnBnBBkB--B2EBznEzBwnBnBzzBknEnEByywzzzzzEzz2wnzkzznEBwwEnEnEzznEzzzzzzzzEzwwEEizizizivjvjfznnzyyyvivzzwnyviuizyeyeKbifiuizzvifieeuyviuiuefie_iviiyjzvn3F3Bnw-BnBn2BnBnwnwnwnBkBBk22nEn-EeeieKdeiudaOaOPedaeePeee_KKLPOefzkzEEjzwk2B-k-kBB2yiiuieueeaeeaOOaOvzzzBzvjivjuiuyevieifiedaOeueuivivieuvfyvzvyvvuuvwzzyyvzzvjivvivvjyvznBnn2wzznwoLK-z2BknzEivePPLOOvjBwnEffeuyzefzuuujnkkGG-yzEEzBnEBnnBwnEBnznzzvzzznzvzzEBnzn-k-k-k-2-wB2B-k2-2nBB2kBBwnBw-nB-2Bk22Bw-BkknnBBBBBnBE-znznkkEnE2--kEBknBBkBBk2E-3-2Bk-k2B22BB2k-k-k2BBn-w2-32k-C3F--k-FG0G-22-2-FB--k-2-w-G32En--nB-2kKLePLdFJG3-F0033G043-l3-G3K3JK-32B3G4K4F--B--B--FGLJGJ3F03JLaeKFG--0---BFK--203FGGFG33F2nBFG3FGJ4GJ4K02GKF03-GKKG3K0JFK3G03F--G--l43--Bk--kG-FF3F03G-403G----l0----G--Bn33GJG340JG3-G4KaLKPKG-4-3F3F03-B-------G3FJ00--3KGF--0---03G0032T4mfgmegmeX7fBnJnKIEzzzzbrpzzaObtVOaNX9c9c0JN9cQfjzGG0F4NoWynBpJnKzzzV---Xc1RfMlOOvfvzwEw3GKKF-0gAIV-2OK2-3aoazBjs-pIUdyOaKaKaOfzzvgBnBF---1gInV-4OaA-BexerKESrs-V9V3q6e6dauVn3-0fPHBpMs-c-SiqWQwJ1mtRSUSKKKKKKJOzzxrROc11--TX-X7V7eeV4Meo2avi2kCK--EcNy-OUJfiLKdTzsBk-0kCPrF0fVVRjiveveiueOuveeeeaNn-n22-BG--030303K3F3B6-nnBnBrSr0a---EsTXQudeviviedazk-2-G-030K-4l1tMCkOc-57MIs-E3IhS5P-CYA-DLew--koIyA9emmfACMSrUtbzzzTTObrUtV7ge7X7eeV8QnZxddaebjwnB-30F3xzBZnMKCMzra71-7cV3wA4p_Qzzo4Ffy5yanHpIKSKMKSMSSrKKMofJppMKSKrSpSMKSzrzzrUtaOzsTN1oc5OaUzrHnCTOtaP755N5-T-NUTNN-N-5-5-N-P7X97gn9gmeee9n9meeX97cX7eVeX9cXV"
			), (new sY).sa(os)
}

function aED() {
	this.sg = null, this.aFH = null, this.aFI = null, this.dR = function() {
		var aFJ = [120, 105, 92],
			cos = [12, 12, 60],
			aFK = [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
			aFL = [140, 130, 120],
			aFM = [12, 12, 76],
			aFN = [240, 120, 1024, 30, 19, 30, 70, 8, 20, 3, 9],
			aFO = [130, 117, 106],
			aFP = [12, 12, 68],
			aFQ = [270, 210, 1024, 28, 19, 33, 50, 8, 26, 3, 9];
		this.sg = new Array(bO.aEB + 1), __fx.customLobby.setMapInfo(this.sg), this.sg[0] = {
			name: L(108),
			a0: 230,
			j6: 230,
			lY: 1e3,
			lV: 2e3,
			aEH: 173
		}, this.sg[1] = {
			name: L(109),
			a0: 800,
			j6: 800,
			lY: 100,
			lV: 50,
			aEH: 43
		}, this.sg[2] = {
			name: L(110),
			a0: 512,
			j6: 512,
			lY: 128,
			lV: 32,
			aEH: 0
		}, this.sg[3] = {
			name: L(111) + " 1",
			a0: 960,
			j6: 960,
			lY: 60,
			lV: 8,
			aEH: 0
		}, this.sg[4] = {
			name: L(112),
			a0: 900,
			j6: 900,
			lY: 100,
			lV: 5,
			aEH: 0
		}, this.sg[5] = {
			name: L(113),
			a0: 1e3,
			j6: 1e3,
			lY: 100,
			lV: 40,
			aEH: 0
		}, this.sg[6] = {
			name: L(114),
			a0: 1e3,
			j6: 1e3,
			lY: 100,
			lV: 20,
			aEH: 0
		}, this.sg[7] = {
			name: L(115),
			a0: 1024,
			j6: 1024,
			lY: 128,
			lV: 32,
			aEH: 0
		}, this.sg[8] = {
			name: L(116),
			a0: 820,
			j6: 820,
			lY: 200,
			lV: 100,
			aEH: 0
		}, this.sg[9] = {
			name: L(117),
			a0: 1024,
			j6: 1024,
			lY: 128,
			lV: 32,
			aEH: 0
		}, this.sg[10] = {
			name: L(118),
			t8: aFL,
			t9: aFM,
			aER: aFN
		}, this.sg[11] = {
			name: L(119),
			t8: aFO,
			t9: aFP,
			aER: aFQ
		}, this.sg[12] = {
			name: L(120),
			t8: aFO,
			t9: aFP,
			aER: aFQ
		}, this.sg[13] = {
			name: L(121),
			t8: aFJ,
			t9: cos,
			aER: aFK
		}, this.sg[14] = {
			name: L(122),
			t8: aFJ,
			t9: cos,
			aER: aFK
		}, this.sg[15] = {
			name: L(123),
			t8: aFL,
			t9: aFM,
			aER: aFN
		}, this.sg[16] = {
			name: L(124),
			t8: aFL,
			t9: aFM,
			aER: aFN
		}, this.sg[17] = {
			name: L(125),
			t8: aFJ,
			t9: cos,
			aER: aFK
		}, this.sg[18] = {
			name: L(126),
			t8: aFO,
			t9: aFP,
			aER: aFQ
		}, this.sg[19] = {
			name: L(127),
			t8: aFJ,
			t9: cos,
			aER: aFK
		}, this.sg[20] = {
			name: L(128),
			a0: 1024,
			j6: 1024,
			lY: 128,
			lV: 32,
			aEH: 0
		}, this.sg[21] = {
			name: L(111) + " 2",
			a0: 940,
			j6: 940,
			lY: 80,
			lV: 8,
			aEH: 0
		}, this.sg[bO.aEB] = {
			name: ""
		}, this.aFH = new Uint8Array(12);
		for (var a6 = 0; a6 < 10; a6++) this.aFH[a6] = a6;
		this.aFH[10] = 20, this.aFH[11] = 21, this.aFI = new Uint8Array(10);
		for (a6 = 0; a6 < 10; a6++) this.aFI[a6] = 10 + a6
	}
}

function aEE() {
	this.aFF = function() {
		for (var g4, ec, fE, aFD = a7U, aFE = bO.sq, a0 = bO.eg, aFB = a0 - 1, aFC = bO.eh - 1, fz = 0, ee = 1; ee < aFC; ee++)
			for (fE = ee * a0, ec = 1; ec < aFB; ec++) aFE[g4 = fE + ec << 2] === aFE[1 + g4] && aFE[g4] === aFE[2 + g4] && (fz++, aFD[2 + g4] = 4);
		aj.a2r = fz
	}, this.aFG = function() {
		for (var aFD = a7U, a0 = bO.eg, aFB = a0 - 1, aFC = bO.eh - 1, id = 5, ee = 1; ee < aFC; ee++)
			for (var fE = ee * a0, ec = 1; ec < aFB; ec++) {
				var e9 = 2 + (fE + ec << 2);
				4 === aFD[e9] && (! function(e9, id) {
					var eV = 1,
						aFD = a7U,
						eX = aX.eX,
						yq = [e9];
					aFD[e9] = id;
					for (; eV;) {
						for (var yr = [], a6 = 0; a6 < eV; a6++)
							for (var eK = yq[a6], eY = 3; 0 <= eY; eY--) {
								var eZ = eK + eX[eY];
								4 === aFD[eZ] && (aFD[eZ] = id, yr.push(eZ))
							}
						eV = (yq = yr).length
					}
				}(e9, id), id = Math.max((id + 1) % 256, 5))
			}
	}
}

function a0h() {
	(uP = void 0 === uP ? document.createElement("canvas") : uP).width = bO.eg, uP.height = bO.eh, a0l = uP.getContext("2d", {
		alpha: !0
	}), a0m = a7U = null, a0m = a0l.getImageData(0, 0, bO.eg, bO.eh), a7U = a0m.data, b7.pL.sr(a7U)
}

function cX() {
	var ey, a0, j6, max, aFS, lV, aFU, aFV, aFW, aFX, aFY, aFZ, aFa, aFb, aFT = 1e4;

	function aFi(aFh, lY, eV) {
		var a6;
		for (aFU[0] = aFh, a6 = 1; a6 < eV; a6++) aFU[a6] = aFU[a6 - 1] + lY, lY = aFU[a6] >= aFT ? (aFU[a6] = aFT - 1, -lY) : aFU[a6] < 0 ? (aFU[a6] = 0, -lY) : (lY += 16384 <= av.random() ? lV : -lV) < -aFS ? -aFS : aFS < lY ? aFS : lY
	}

	function aFk(ec, ee, aFl, eV) {
		(aFl ? function(ec, ee, eV) {
			var a6;
			for (a6 = 0; a6 < eV; a6++) ey[ee * a0 + ec + a6] = aFU[a6]
		} : function(ec, ee, eV) {
			var a6;
			for (a6 = 0; a6 < eV; a6++) ey[ee * a0 + ec + a6 * a0] = aFU[a6]
		})(ec, ee, eV)
	}

	function aFo(value, eV) {
		var a6, kw, e9, hT = value - aFU[eV - 1];
		if (0 != hT) {
			for (kw = 1 + bH.ex(Math.abs(hT), eV - 1), kw = hT < 0 ? -kw : kw, aFU[eV - 1] = value, e9 = (e9 = eV - 1 - bH.ex(Math.abs(hT), Math.abs(kw))) < 1 ? 1 : eV - 2 < e9 ? eV - 2 : e9, a6 = eV - 2; e9 <= a6; a6--) aFU[a6] += hT - (eV - 1 -
				a6) * kw;
			(hT < 0 ? function(eV) {
				var a6;
				for (a6 = eV - 2; 1 <= a6; a6--) aFU[a6] < 0 && (aFU[a6] = -aFU[a6] - 1)
			} : function(eV) {
				var a6;
				for (a6 = eV - 2; 1 <= a6; a6--) aFU[a6] >= aFT && (aFU[a6] = 2 * aFT - aFU[a6] - 1)
			})(eV)
		}
	}

	function aFr(yq, yr, eV) {
		for (var a6 = 0; a6 < eV; a6++) yq[a6] = yr[a6]
	}

	function aFs(g) {
		for (var a6 = 0; a6 < g.length - 1; a6++) g[a6] = g[a6 + 1] - g[a6];
		g[g.length - 1] = g[g.length - 3]
	}

	function aFt(a1C, gap, hS) {
		aFV.push(a1C), aFW.push(gap), aFX.push(hS)
	}
	this.a2 = function(zx) {
		! function(zx) {
			var a6;
			for (a0 = zx[0], j6 = zx[1], aFS = zx[2], lV = zx[3], ey = new Int16Array(a0 * j6), max = j6 < a0 ? a0 : j6, aFU = new Int16Array(max), aFV = [], aFW = [], aFX = [], aFY = new Array(a0), aFZ = new Array(j6), a6 = a0 - 1; 0 <=
				a6; a6--) aFY[a6] = !1;
			for (a6 = j6 - 1; 0 <= a6; a6--) aFZ[a6] = !1;
			aFa = new Int16Array(a0), aFb = new Int16Array(j6)
		}(zx),
		function(eV) {
			var aFh = av.random() % aFT,
				lY = av.random() % (2 * aFS + 1) - aFS;
			aFi(aFh, lY, eV)
		}(max), aFr(aFb, aFU, j6), aFk(0, 0, !0, a0);
		var ec, ee, zx = ey[0],
			eV = max,
			lY = av.random() % (2 * aFS + 1) - aFS;
		for (aFi(zx, lY, eV), aFr(aFa, aFU, a0), aFk(0, 0, !1, j6), aFs(aFa), aFs(aFb), aFi(ey[a0 - 1], aFa[a0 - 1], j6), aFk(a0 - 1, 0, !1, j6), aFi(ey[a0 * (j6 - 1)], aFb[j6 - 1], a0), aFo(ey[a0 * j6 - 1], a0), aFk(0, j6 - 1, !0, a0), aFY[a0 -
				1] = aFY[0] = !0, aFZ[j6 - 1] = aFZ[0] = !0, aFt(0, a0, !0), aFt(0, j6, !1), ! function() {
				var aFv, a1C;
				for (;;) {
					if (aFv = function() {
							var a6, aFv = aFV.length - 1;
							for (a6 = aFv - 1; 0 <= a6; a6--) aFW[a6] > aFW[aFv] && (aFv = a6);
							return aFv
						}(), aFW[aFv] < 5) return;
					a1C = aFV[aFv] + bH.ex(aFW[aFv], 2), (aFX[aFv] ? function(ec) {
						var eV, aFy, a6, a8J = 0,
							aFz = 0;
						for (; aFz < j6 - 1;) {
							for (a6 = a8J + 1; a6 < j6; a6++)
								if (aFZ[a6]) {
									aFz = a6;
									break
								} eV = aFz - a8J + 1, aFi(ey[ec + a0 * a8J], 0 === a8J ? aFa[ec] : aFU[aFy - 1] - aFU[aFy - 2], eV), aFo(ey[aFz * a0 + ec], eV), aFk(ec, a8J, !1, eV), aFy = eV, a8J = aFz
						}
						aFY[ec] = !0
					} : function(ee) {
						var eV, aFy, a6, a8J = 0,
							aFz = 0;
						for (; aFz < a0 - 1;) {
							for (a6 = a8J + 1; a6 < a0; a6++)
								if (aFY[a6]) {
									aFz = a6;
									break
								} eV = aFz - a8J + 1, aFi(ey[ee * a0 + a8J], 0 === a8J ? aFb[ee] : aFU[aFy - 1] - aFU[aFy - 2], eV), aFo(ey[ee * a0 + aFz], eV), aFk(a8J, ee, !0, eV), aFy = eV, a8J = aFz
						}
						aFZ[ee] = !0
					})(a1C), aFt(a1C, aFV[aFv] + aFW[aFv] - a1C, aFX[aFv]), aFW[aFv] = a1C - aFV[aFv] + 1
				}
			}(), ec = 0; ec < a0; ec++)
			if (!aFY[ec])
				for (ee = 0; ee < j6; ee++) aFZ[ee] || ! function(ec, ee) {
					var value = ey[ee * a0 + ec - 1] + ey[(ee - 1) * a0 + ec],
						a31 = 2;
					aFY[ec + 1] && (a31++, value += ey[ee * a0 + ec + 1]);
					aFZ[ee + 1] && (a31++, value += ey[(ee + 1) * a0 + ec]);
					ey[ee * a0 + ec] = bH.ex(value, a31)
				}(ec, ee)
	}, this.aEe = function() {
		return ey
	}, this.aEM = function() {
		ey = null
	}
}

function aAv(eo, ep) {
	return 0 <= eo ? bH.ex(eo, ep) : -bH.ex(-eo, ep)
}

function jA(ey) {
	return ey * ey
}

function a2F(eo, ep) {
	return ep < eo ? eo : ep
}

function a70(eo, ep) {
	return eo < ep ? eo : ep
}

function a4Q(eo, ey, ep) {
	return ey < eo ? eo : ep < ey ? ep : ey
}

function aG1(ey, eV) {
	for (var eq = bH.ex(ey + 1, 2), a6 = 0; a6 < eV; a6++) eq = bH.ex(eq + bH.ex(ey, eq), 2);
	return eq
}

function aCJ(ey, eV) {
	return ey < 1 ? 0 : aG1(ey, eV)
}

function aG2(lv, lw, qU, a4A, m9, mA, qV, aG3) {
	return !(lv + qU <= m9 || lw + a4A <= mA || m9 + qV <= lv || mA + aG3 <= lw)
}

function aG4(lv, lw, qU, a4A, m9, mA, qV, aG3) {
	return lv <= m9 && lw <= mA && m9 + qV <= lv + qU && mA + aG3 <= lw + a4A
}

function si(ey) {
	return Math.floor(!!ey * (1 + Math.log2(ey + .5)))
}

function bo() {
	this.ex = function(eo, ep) {
		return Math.floor((eo + .5) / ep)
	}, this.aG5 = function(eo, ep) {
		return Math.floor(eo * (ep + .5))
	}, this.sqrt = function(ey) {
		return ~~Math.sqrt(ey + .5)
	}, this.pow = function(e) {
		return Math.floor(Math.pow(2, e) + .5)
	}, this.oj = function(value, min, max) {
		return Math.min(Math.max(value, min), max)
	}, this.aG6 = function(fE, fG, fI) {
		return Math.max(Math.min(fE, fG), fI)
	}, this.aG7 = function(aG8, aG9, ec, ee) {
		ec -= aG8, aG8 = ee - aG9, ee = 0;
		return 0 == ec ? ee = 0 <= aG8 ? Math.PI : 0 : (ee = Math.atan(aG8 / ec), ee += 0 < ec ? .5 * Math.PI : 1.5 * Math.PI), ee
	}, this.log2 = function(ey) {
		return Math.floor(!!ey * (1 + Math.log2(ey + .5)))
	}, this.log10 = function(ey) {
		return Math.floor(Math.log10(ey + .5))
	}, this.aGB = function(aGC, aGD, aGE, aGF, aGG) {
		return aGE - aGG < aGC && aGC < aGE + aGG && aGF - aGG < aGD && aGD < aGF + aGG
	}, this.tg = function(hM, hN) {
		return hM * hM + hN * hN
	}
}

function d5() {
	this.l7 = new aGH, this.qM = 0;
	var aGI = new Array(29);

	function aGM() {
		for (var eV = aGI.length, a6 = 0; a6 < eV; a6++) aGI[a6] = null
	}
	this.dR = function() {
		for (var aGJ, aGK = document.body.firstChild; aGK;) {
			if (aGJ = aGK.nextSibling, document.body.contains(aGK) && ("DIV" === aGK.tagName || "INPUT" === aGK.tagName || "BUTTON" === aGK.tagName)) try {
				document.body.removeChild(aGK)
			} catch (e) {
				console.log("error 2623: " + e)
			}
			aGK = aGJ
		}
	}, this.o = function(oB, aGL, zx) {
		void 0 === aGL && (aGL = this.qM), bb.dZ = !0, 0 === oB && (0 === aV.xL() ? oB = 5 : r.s.setState(13)), this.qh(), this.qM === oB && (aGL = aGI[oB].aGL, aGI[oB] = null), this.qM = oB;
		var kM = aGI[oB];
		if (!kM || 4 === oB || 7 === oB || 8 === oB || 9 === oB || 10 === oB || 11 === oB || 13 === oB || 15 === oB || 18 === oB || 20 <= oB && oB <= 28) {
			if (0 === oB) return void aGM();
			1 === oB ? kM = new aGN : 2 === oB ? kM = new aGO : 3 === oB ? kM = new aGP : 4 === oB || 9 === oB || 10 === oB || 11 === oB || 13 === oB ? kM = zx : 5 === oB ? kM = new aGQ : 6 === oB ? kM = new aGR : 7 === oB ? kM = new aGS(n.l7
					.aGT) : 8 === oB ? kM = zx : 12 === oB ? kM = new aGU : 14 === oB ? kM = new aGV : 15 === oB ? kM = new aGS(n.l7.aGW) : 16 === oB ? kM = new aGX : 17 === oB ? kM = new aGY : 18 === oB ? kM = new aGZ : 19 === oB ? kM =
				new aGa : 20 === oB ? kM = new aGb : 21 === oB ? kM = new aGc : 22 === oB ? kM = new aGd : 23 === oB ? kM = new aGe : 24 === oB ? kM = new aGf : 25 === oB ? kM = new aGg : 26 === oB ? kM = new aGh : 27 === oB ? kM = new aGi :
				28 === oB && (kM = new aGj), kM.aGL = aGL, aGI[oB] = kM
		}
		kM.show(zx)
	}, this.xS = function() {
		this.uj() && this.aGk(this.aAW().aGL)
	}, this.aGk = function(oB) {
		this.uj() && (aGI[oB] ? (this.qh(), bb.dZ = !0, this.qM = oB, aGI[oB].show()) : this.o(oB))
	}, this.qh = function() {
		this.uj() && aGI[this.qM].qh()
	}, this.rx = function() {
		this.uj() && (aGI[this.qM].qh(), aGM(), this.qM = 0, r.s.setState(13))
	}, this.rA = function() {
		var kM;
		this.uj() && (kM = aGI[this.qM]).rA && kM.rA()
	}, this.resize = function() {
		if (!this.uj()) return !1;
		aGI[this.qM].resize()
	}, this.gk = function(ec, ee) {
		var kM;
		this.uj() && (kM = aGI[this.qM]).gk && kM.gk(ec, ee)
	}, this.xh = function(ec, ee) {
		var kM;
		this.uj() && (kM = aGI[this.qM]).xh && kM.xh(ec, ee)
	}, this.y5 = function() {
		var kM;
		this.uj() && (kM = aGI[this.qM]).y5 && kM.y5()
	}, this.xk = function(kh, ki, deltaY) {
		var kM;
		this.uj() && (kM = aGI[this.qM]).xk && kM.xk(kh, ki, deltaY)
	}, this.yG = function(code) {
		var kM;
		return !!this.uj() && ((kM = aGI[this.qM]).yG && kM.yG(code), !0)
	}, this.iR = function() {
		var kM;
		this.uj() && (kM = aGI[this.qM]) && kM.iR && kM.iR()
	}, this.uj = function() {
		return 0 < this.qM
	}, this.aAW = function() {
		return aGI[this.qM]
	}, this.aGl = function(oB) {
		return aGI[oB]
	}, this.aGm = function() {
		return aGI
	}
}

function aGS(data) {
	var aGn, aGo;
	this.show = function() {
		data.aGp && bE.aHU("account", data.qK), aGn.show(), this.resize()
	}, this.qh = function() {
		aGn.qh()
	}, this.resize = function() {
		aGn.resize(), aGo.resize()
	}, this.yG = function(eq) {
		2 === eq && aGn.qy[0].pS()
	}, aGn = new qr(data.username, [new q("⬅️ " + L(13), function() {
		bE.clear(), n.xS()
	}), new q(data.aGp ? "🔄 " + L(129) : L(130), function() {
		n.o(8, n.aAW().aGL, new qN(25, {
			qO: 0,
			qK: data.qK,
			qL: data.qL
		}))
	}, 0, 0, 1)]), aGo = new p4(aGn.qx, function() {
		var p6 = [];
		p6.push(function() {
				var aH4 = new oo,
					aH5 = (aH4.or(L(176)), new q1({
						value: data.username,
						oB: -1
					}));
				aH5.e.readOnly = !0, aH4.p2(aH5), aH4.p2(new pw([new q(L(142), function(e) {
					return b7.pB.zV(aH5.e), b7.pB.zW(e), !0
				}).button])), data.aGp || aH4.ot(L(177));
				return aH4
			}()),
			function(p6) {
				var aH4, ou, a7i, aHM, aHB;
				data.aGp || ((aH4 = new oo).or(L(178)), (ou = aH4.ot(data.aHL.length + " / 160")).style.textAlign = "center", a7i = !0, (aHM = new rC(0, 1, function(e) {
					e = e.target.value.length;
					ou.textContent = e + " / 160", 160 < e ? a7i && (a7i = !1, aHB.pU(1), aHB.button.style.color = u.mW) : a7i || (a7i = !0, aHB.pU(0), aHB.button.style.color = u.nH)
				})).e.rows = 6, aHM.e.style.fontSize = "1em", aHM.rJ(data.aHL), aH4.p2(aHM), aHB = new q(L(179), function() {
					if (!a7i) return !0;
					n.o(8, n.aAW().aGL, new qN(29, {
						qO: 1,
						os: aHM.rL().substring(0, 160)
					}))
				}, 0, 0, 1), aH4.p2(new pw([aHB.button])), 0 !== data.aHN && (aH4.p2(new pw([new q(L(1 === data.aHN ? 181 : 182), function() {
					n.o(8, n.aAW().aGL, new qN(29, {
						qO: 0,
						os: ""
					}))
				}, 0, 0, 1).button])), aH4.ot(1 === data.aHN ? L(183, [data.aHP - 1]) : L(184, [data.aHP - 1]))), aH4.ot(L(180, [data.aHO])), p6.push(aH4))
			}(p6),
			function(p6) {
				var aH4;
				data.aGp && 0 !== data.aHN && ((aH4 = new oo).or(L(178)), aH4.ov(data.aHL), aH4.p2(new pw([new q(L(165), function(e) {
					return ax.l7.a8g(0) && (b7.pB.zW(e), ax.aH9.aHH({
						qO: 5,
						qK: data.qK,
						qL: data.qL
					})), !0
				}, 0, 0, 1).button])), p6.push(aH4))
			}(p6), p6.push(function() {
				var aH4 = new oo;
				aH4.or(L(131)), aH4.ox(L(132) + b7.wv.a0C(data.s7, .01, 2)), data.aGp || (aH4.ot(L(133)), aH4.ot(L(134)), aH4.ot(L(135)));
				return aH4
			}()), data.aGp && p6.push(function() {
				var aH4 = new oo,
					aH5 = (aH4.or(L(136)), new q1(bf.dk.data[147], 1, void 0, function(e) {
						aH6(e.target.value)
					})),
					aH7 = (aH4.p2(aH5), new q(L(137), function(e) {
						return aH5.e.readOnly && ax.l7.a8g(0) && (b7.pB.zW(e), aH8(), ax.aH9.aHA({
							qO: 0,
							qK: data.qK,
							qL: data.qL,
							value: bH.oj(Math.floor(100 * bf.dk.data[147].value), 0, 4294967295)
						})), !0
					}, 1)),
					aHB = new q(L(138), function(e) {
						return e.textContent === L(138) ? (e.textContent = L(139), aH5.e.readOnly = !0, aH7.pU(0), aH7.button.style.color = u.nH, bf.ps.pt(147, aH5.e.value), aH6(bf.dk.data[147].value)) : aH8(), !0
					}),
					ou = (aH4.p2(new pw([aHB.button])), aH4.ot()),
					aH6 = function(ey) {
						ey = isNaN(ey) ? 0 : Number(ey);
						var ey = Math.max(ey, (data.aHC + 1) / 100),
							aHD = Math.floor(100 * Math.max(1e-4 * ey, data.aHC / 100)) / 100;
						ou.textContent = L(140, [ey.toFixed(2), bf.dk.data[105].value, aHD.toFixed(2), data.qK, (ey - aHD).toFixed(2)])
					},
					aH8 = function() {
						aHB.button.textContent = L(138), aH5.e.readOnly = !1, aH7.pU(1), aH7.button.style.color = u.mW
					};
				return aH6(bf.dk.data[147].value), aH4.p2(new pw([aH7.button])), aH4
			}());
		p6.push(function() {
			var aH4 = new oo,
				aH5 = (aH4.or(L(141)), new q1({
					value: data.qK,
					oB: -1
				}));
			return aH5.e.readOnly = !0, aH4.p2(aH5), aH4.p2(new pw([new q(L(142), function(e) {
				return b7.pB.zV(aH5.e), b7.pB.zW(e), !0
			}).button])), aH4
		}()), data.aGp || (p6.push(function() {
			var aH4 = new oo,
				aHE = (aH4.or(L(143)), new q1(bf.dk.data[106]));
			return aHE.e.readOnly = !0, aHE.e.type = "password", aH4.p2(aHE), aH4.p2(new pw([new q(L(144), function(e) {
				return e.textContent === L(144) ? (e.textContent = L(145), aHE.e.type = "text") : (e.textContent = L(144), aHE.e.type = "password"), !0
			}).button, new q(L(142), function(e) {
				return b7.pB.zV(aHE.e), b7.pB.zW(e), !0
			}).button])), aH4.p2(new pw([new q(L(146), function() {
				n.o(8, n.aAW().aGL, new qN(15))
			}).button])), aH4.or(L(147), "0.8em"), aH4.ot(L(148)), aH4.ot(L(149)), aH4.ot(L(150)), aH4
		}()), p6.push(function() {
			var aH4 = new oo;
			return aH4.or(L(151)), aH4.p2(new pw([new q(L(152), function() {
				n.o(6, n.aAW().aGL)
			}).button])), aH4.p2(new pw([new q(L(153), function() {
				bf.ps.pt(105, ""), n.o(8, n.aAW().aGL, new qN(18))
			}).button])), aH4.p2(new pw([new q(L(154) + bf.dk.data[105].value, function() {
				n.o(4, 0, new p(L(155), L(156), !0, [new q("⬅️ " + L(13), function() {
					n.o(7, n.aGl(7).aGL)
				})]))
			}, u.n5).button])), aH4
		}()), p6.push(function() {
			function aHG(oB) {
				for (var a6 = 0; a6 < 2; a6++) aHF[a6].pU(0 === oB ? u.mh : 0 === a6 ? u.n5 : u.v)
			}
			var p0, aHF, aH4 = new oo;
			aH4.or(L(157)), aH4.ot(L(158)), bf.l7.rq();
			return aHF = [new q(L(159), function() {
				var oB = Math.min(bf.dk.data[117].value, p0.p1.length - 1);
				if (!(oB < 1)) {
					p0.p1[oB].remove(), p0.p1.splice(oB, 1);
					for (var a6 = oB; a6 < p0.p1.length; a6++) p0.p1[a6].name = "" + a6;
					bf.l7.rt(oB), oB = bf.dk.data[117].value, p0.p1[oB].textContent = p0.p1[oB].textContent.replace("⚪", "🟢"), aHG(oB)
				}
			}, u.mh), new q(L(160), function() {
				var oB = Math.min(bf.dk.data[117].value, p0.p1.length - 1);
				oB < 1 || (oB = bf.l7.ru(oB), bf.ps.pt(105, oB.qK), bf.ps.pt(106, oB.password), n.o(8, n.aAW().aGL, new qN(18)))
			}, u.mh)], (p0 = new qn(bf.dk.data[117], aHG)).p1[0].style.marginTop = "0.5em", aH4.oz(p0), aH4.p2(new pw([aHF[1].button])), aH4.p2(new pw([aHF[0].button])), aH4
		}()));
		return p6.push(function() {
				var aH4 = new oo;
				aH4.or(L(161)), aH4.ox(L(162) + b7.wv.a0C(data.s3, .1, 1) + "<br>" + L(163) + (data.s4 + 1) + " / " + data.s6 + "<br>" + L(164) + data.s5), data.aGp && (aH4.p2(new pw([new q(L(165), function(e) {
					return ax.l7.a8g(0) && (b7.pB.zW(e), ax.aH9.aHH({
						qO: 1,
						qK: data.qK,
						qL: data.qL
					})), !0
				}, 0, 0, 1).button])), aH4.ot(L(166)));
				return aH4
			}()),
			function(p6) {
				var aH4 = new oo,
					wy = data.sA,
					aHQ = (aH4.or(L(185)), aH4.ox(L(186) + (wy ? "[" + data.s8 + "]" : "-")), aH4.ox(L(187) + b7.wv.a0C(wy, .001, 2)), aH4.ox(L(163) + (data.sC + 1) + " / " + data.s6), data.sD),
					aHR = (aH4.ox(L(188) + b7.wv.a0C(aHQ, .01, 2)), data.sF);
				aH4.ox(L(189) + aHR), aH4.ox(L(190) + b7.wv.a0C(aHQ / Math.max(aHR, 1), .01, 2)), wy = data.sB, aH4.or(L(191), "0.8em"), aH4.ox("Clan: " + (wy ? "[" + data.s9 + "]" : "-")), aH4.ox(L(187) + b7.wv.a0C(wy, .001, 2)), aHQ = data
					.sE, aH4.ox(L(188) + b7.wv.a0C(aHQ, .01, 2)), aHR = data.sG, aH4.ox(L(189) + aHR), aH4.ox(L(190) + b7.wv.a0C(aHQ / Math.max(aHR, 1), .01, 2)), p6.push(aH4)
			}(p6),
			function(p6) {
				var aH4 = new oo;
				aH4.or(L(192)), aH4.ox(L(173) + data.aHS + "<br>" + L(174) + (data.aHT.length ? L(193, [data.aHT]) : L(194))), data.aGp && (aH4.p2(new pw([new q(L(195), function(e) {
					return ax.l7.a8g(0) && (b7.pB.zW(e), ax.aH9.aHH({
						qO: 4,
						qK: data.qK,
						qL: data.qL
					})), !0
				}, 0, 0, 1).button])), aH4.ot(L(196)), aH4.ot(L(197)));
				p6.push(aH4)
			}(p6), p6.push(function() {
				var aH4 = new oo;
				if (aH4.or(L(172)), aH4.ox(L(173) + data.aHJ + "<br>" + L(163) + (data.aHK + 1) + " / " + data.s6 + "<br>" + L(174) + function(hH) {
						if (40 <= hH) return L(167);
						if (16 <= hH) return L(168);
						if (4 <= hH) return L(169);
						if (1 <= hH) return L(170);
						return L(171)
					}(data.aHK)), data.aGp) {
					aH4.p2(new pw([new q("−", function(e) {
						return ax.l7.a8g(0) && (b7.pB.zW(e), ax.aH9.aHH({
							qO: 3,
							qK: data.qK,
							qL: data.qL
						})), !0
					}, 0, 0, 1).button, new q("+", function(e) {
						return ax.l7.a8g(0) && (b7.pB.zW(e), ax.aH9.aHH({
							qO: 2,
							qK: data.qK,
							qL: data.qL
						})), !0
					}, 0, 0, 1).button]));
					for (var a6 = 0; a6 < 2; a6++) aH4.op[0].py[a6].style.fontSize = "1.6em";
					aH4.ot(L(175))
				}
				return aH4
			}()), p6
	}())
}

function aGd() {
	var aHV, aHW, aHX, p6;

	function aHY() {
		aHa(), 2 !== a8.data.aIncomeType && (a8.data.aIncomeData = null), n.aGm()[19] = null, n.xS()
	}

	function aHa() {
		2 === a8.data.aIncomeType ? (b7.pL.yu(aHX.rL(), a8.data.aIncomeData, 255), b7.pL.max(a8.data.aIncomeData) || (a8.data.aIncomeType = 0)) : 1 !== a8.data.aIncomeType || a8.data.aIncomeValue || (a8.data.aIncomeType = 0)
	}
	this.show = function() {
		aHV.show(), this.resize()
	}, this.qh = function() {
		aHV.qh()
	}, this.resize = function() {
		aHV.resize(), aHW.resize()
	}, this.yG = function(eq) {
		2 === eq && aHV.qy[0].pS()
	}, aHV = new qr(L(198), [new q("⬅️ " + L(13), aHY)]), aHW = new p4(aHV.qx, (function(p6) {
		var aH4 = new oo;
		aH4.or(L(199)), aH4.oz(new qn({
			qq: [L(200), L(201), L(202)],
			value: a8.data.aIncomeType
		}, function(oB) {
			aHa(), 2 !== oB || a8.data.aIncomeData || (a8.data.aIncomeData = new Uint8Array(a8.eS)), a8.data.aIncomeType = oB, n.o(22)
		})), p6.push(aH4)
	}(p6 = []), function(p6) {
		var aH4;
		1 === a8.data.aIncomeType && ((aH4 = new oo).or("Value"), aH4.p2(new q1({
			oB: -1,
			value: a8.data.aIncomeValue
		}, 1, 0, function(e) {
			var value = bH.oj(Math.floor(e.target.value), 0, 255);
			e.target.value = a8.data.aIncomeValue = value
		})), p6.push(aH4))
	}(p6), function(p6) {
		var aH4;
		2 === a8.data.aIncomeType && ((aH4 = new oo).or("Data"), (aHX = new rC(0, 1, 0, 1)).rJ(b7.wv.a0J(a8.data.aIncomeData, 4)), aH4.p2(aHX), p6.push(aH4))
	}(p6), p6))
}

function aGg() {
	var aHV, aHW, aHX;

	function aHY() {
		aHa(), 3 !== a8.data.botDifficultyType || b7.pL.yi(a8.data.botDifficultyData) || (a8.data.botDifficultyType = 0), 3 !== a8.data.botDifficultyType && (a8.data.botDifficultyData = null), n.aGm()[19] = null, n.xS()
	}

	function aHa() {
		3 === a8.data.botDifficultyType && b7.pL.yu(aHX.rL(), a8.data.botDifficultyData, a9.jq.length - 1)
	}

	function aHf(p6, oB) {
		var aH4 = new oo,
			value = (aH4.or(oB < 0 ? L(37) : L(36) + " " + bc.wR[oB % 9]), 0 <= oB && (aH4.ox(L(205) + ": " + a8.data.teamPlayerCount[oB]).style.marginBottom = "1em"), oB < 0 ? a8.data.botDifficultyValue : a8.data.botDifficultyTeam[oB]);
		aH4.oz(new qn({
			qq: a9.jq,
			value: value
		}, function(k1) {
			oB < 0 ? a8.data.botDifficultyValue = k1 : a8.data.botDifficultyTeam[oB] = k1
		})), p6.push(aH4)
	}
	this.show = function() {
		aHV.show(), this.resize()
	}, this.qh = function() {
		aHV.qh()
	}, this.resize = function() {
		aHV.resize(), aHW.resize()
	}, this.yG = function(eq) {
		2 === eq && aHV.qy[0].pS()
	}, aHV = new qr(L(37), [new q("⬅️ " + L(13), aHY)]), aHW = new p4(aHV.qx, function() {
		var p6 = [];
		if (function(p6) {
				var aH4 = new oo,
					qq = (aH4.or(L(199)), [L(201), L(203), L(204), L(202)]),
					value = a8.data.botDifficultyType;
				0 === a8.data.gameMode && (value = Math.min(value, 2), qq.splice(2, 1));
				aH4.oz(new qn({
					qq: qq,
					value: value
				}, function(oB) {
					aHa(), a8.data.botDifficultyType = oB, 0 === a8.data.gameMode && 2 === oB && (a8.data.botDifficultyType = 3), 3 !== a8.data.botDifficultyType || a8.data.botDifficultyData || (a8.data.botDifficultyData =
						new Uint8Array(a8.eS)), 2 !== a8.data.botDifficultyType || a8.data.botDifficultyTeam || (a8.data.botDifficultyTeam = new Uint8Array(9)), n.o(25)
				})), p6.push(aH4)
			}(p6), 0 === a8.data.botDifficultyType) aHf(p6, -1);
		else if (2 === a8.data.botDifficultyType)
			for (var a6 = 0; a6 < a8.data.teamPlayerCount.length; a6++) a8.data.teamPlayerCount[a6] && aHf(p6, a6);
		else 3 === a8.data.botDifficultyType && ! function(p6) {
			var aH4 = new oo;
			aH4.or("Data"), (aHX = new rC(0, 1, 0, 1)).rJ(b7.wv.a0J(a8.data.botDifficultyData, 8)), aH4.p2(aHX), p6.push(aH4)
		}(p6);
		return p6
	}())
}

function aHg(data) {
	var aGn, aHh, aHi, a8O, aHj, aHk, aHl, colors, aHm, aHn, aHo = 0,
		aHp = 0,
		aHq = !1,
		aHr = !1,
		aHs = [1, 5, 60, 240, 1440, 10080, 43200];

	function aIJ(kh, ki) {
		! function(kh, ki) {
			return aHh < kh && kh < aHh + a8O && aHi < ki && ki < aHi + aHj
		}(aHo = kh, aHp = ki) ? (aHq && (bb.dZ = !0), aHq = !1) : (aHq = !0, bb.dZ = !0)
	}
	this.show = function() {
		aHr = bf.dk.data[127].value, aGn.show(), this.resize()
	}, this.qh = function() {
		aGn.qh()
	}, this.resize = function() {
		aGn.resize();
		var eq = au.pH,
			r8 = aGn.r2(),
			aI1 = eq * r8.r6,
			eq = eq * r8.r3;
		aHk = b7.pB.qj(.06), aHl = b7.pB.qj(.04), aHh = b7.pB.qj(.06), aHi = eq + aHk, a8O = au.a0 - aHh - aHl, aHj = aI1 + eq - aHi - aHl
	}, this.rA = function() {
		aGn.rA(),
			function() {
				var a6, aHy, fz, ec, eo, g = data.data,
					aI4 = 1,
					aI5 = .125,
					aI6 = aHr ? 65536 : 0;
				for (a6 = 0; a6 < g.length; a6++)
					for (aHy = g[a6].aHy, fz = aHy.length, aI4 = Math.max(fz, aI4), eo = 0; eo < fz; eo++) aI5 = Math.max(aHy[eo], aI5), aI6 = Math.min(aHy[eo], aI6);
				var lw = aHi + aHj,
					uF = aHj / (aI5 - aI6),
					uE = 1 / (aI4 - 1);
				for (rB.lineWidth = bY.vC, a6 = 0; a6 < g.length; a6++) {
					for (aHy = g[a6].aHy, fz = aHy.length, ec = aHh, rB.beginPath(), rB.moveTo(ec + a8O, lw - uF * (aHy[fz - 1] - aI6)), eo = fz - 2; 0 <= eo; eo--) rB.lineTo(ec + uE * eo * a8O, lw - uF * (aHy[eo] - aI6));
					rB.strokeStyle = colors[a6], rB.stroke()
				}(function(aI6, aI5, lw, uF) {
					rB.font = b7.pB.qS(0, .25 * aHh), b7.pB.textBaseline(rB, 1), b7.pB.textAlign(rB, 2), rB.fillStyle = colors[0];
					for (var ec = .92 * aHh, a6 = 0; a6 < 3; a6++) {
						var ey = aI6 + a6 * (aI5 - aI6) / 2;
						rB.fillText((ey / 1e3).toFixed(3), ec, lw - uF * (ey - aI6))
					}
				})(aI6, aI5, lw, uF),
				function(aI4) {
					var ee = aHi + aHj + .15 * aHl;
					rB.font = b7.pB.qS(0, Math.min(.4 * aHl, .028 * au.a0)), b7.pB.textBaseline(rB, 0), b7.pB.textAlign(rB, 2), rB.fillStyle = colors[0], rB.fillText(b7.yZ.zK(aHm), aHh + a8O, ee), b7.pB.textAlign(rB, 0), rB.fillText(b7.yZ.zK(
						new Date(aHn.getTime() - 6e4 * (aI4 - 1) * aHs[data.aHx])), aHh, ee)
				}(aI4),
				function(aI4, aI6, aI5) {
					if (aHq && !(aI4 < 2)) {
						for (var a4I, oB = (aHo - aHh) / a8O * (aI4 - 1), ku = Math.floor(oB), kv = Math.floor(1 + oB), aI9 = oB - ku, aIA = 1e5, aIB = -1, aIC = -1, aID = aI5 - (aI5 - aI6) * (aHp - aHi) / aHj, g = data.data, a6 = 0; a6 < g
							.length; a6++) {
							var aEx, aHy = g[a6].aHy;
							aHy.length <= kv || (aHy = aHy[ku] + aI9 * (aHy[kv] - aHy[ku]), (aEx = Math.abs(aID - aHy)) < aIA && (aIA = aEx, aIB = a6, aIC = aHy))
						} - 1 !== aIB && (aI5 = aHi + aHj - (aIC - aI6) / (aI5 - aI6) * aHj, rB.lineWidth = .5 * bY.vC, rB.strokeStyle = colors[aIB], rB.beginPath(), rB.moveTo(aHh, aI5), rB.lineTo(aHo, aI5), rB.lineTo(aHo, aHi + aHj), rB
						.stroke(), rB.beginPath(), rB.arc(aHo, aI5, .1 * aHh, 0, 2 * Math.PI), rB.fillStyle = colors[aIB], rB.fill(), aI6 = aHi + aHj + .15 * aHl, b7.pB.textAlign(rB, 1), a4I = aI4 - 2 < oB ? (a4I = aHn.getTime() - 6e4 * aHs[
								data.aHx], new Date(a4I + (oB - (aI4 - 2)) * (aHm.getTime() - a4I))) : new Date(aHn.getTime() - 6e4 * (aI4 - oB - 1) * aHs[data.aHx]), aI4 = b7.yZ.zK(a4I), oB = b7.pB.measureText(aI4), a4I = bH.oj(aHo, aHh +
								.5 * oB, aHh + a8O - .5 * oB), rB.fillStyle = b7.color.mO(70, 50, 20), rB.fillRect(a4I - .52 * oB, aHi + aHj, 1.04 * oB, .55 * aHl), rB.fillStyle = colors[0], rB.fillText(aI4, a4I, aI6), rB.font = b7.pB.qS(0,
								.25 * aHh), b7.pB.textBaseline(rB, 1), b7.pB.textAlign(rB, 2), a4I = .92 * aHh, aI4 = (aIC / 1e3).toFixed(3), oB = b7.pB.measureText(aI4), aI6 = a4I - 1.04 * oB, rB.fillStyle = b7.color.mO(70, 50, 20), rB
							.fillRect(aI6, aI5 - .1625 * aHh, aHh - aI6, .275 * aHh), rB.fillStyle = colors[aIB], rB.fillText(aI4, a4I, aI5))
					}
				}(aI4, aI6, aI5)
			}(), rB.lineWidth = bY.vC, rB.strokeStyle = u.mW, rB.beginPath(), rB.moveTo(aHh, aHi), rB.lineTo(aHh, aHi + aHj), rB.lineTo(aHh + a8O, aHi + aHj), rB.stroke();
		var a6, fontSize = .5 * aHk,
			g = (rB.font = b7.pB.qS(0, fontSize), b7.pB.textBaseline(rB, 1), b7.pB.textAlign(rB, 0), data.data),
			eV = g.length,
			ee = aHi - .5 * aHk,
			os = "";
		for (a6 = 0; a6 < eV; a6++) os += g[a6].name + "  ";
		os = os.trim();
		var aIG = b7.pB.measureText(os),
			ec = .5 * (au.a0 - aIG);
		for (aIG > au.a0 && (ec = 0, rB.font = b7.pB.qS(0, au.a0 / aIG * fontSize)), a6 = 0; a6 < eV; a6++) rB.fillStyle = colors[a6], rB.fillText(g[a6].name, ec, ee), ec += b7.pB.measureText(g[a6].name + "  ")
	}, this.gk = function(kh, ki) {
		aIJ(kh, ki)
	}, this.xh = function(kh, ki) {
		aIJ(kh, ki)
	}, this.yG = function(eq) {
		2 === eq && aGn.qy[0].pS()
	};
	var a6, e4, zI, k1, eY = data.data,
		eV = eY.length,
		max = 1;
	for (a6 = 0; a6 < eV; a6++) max = Math.max(max, eY[a6].aHy.length);
	for (a6 = 0; a6 < eV; a6++)
		for (; eY[a6].aHy.length < max;) eY[a6].aHy.unshift(0);
	e4 = new Date, zI = 6e4 * e4.getTimezoneOffset(), k1 = e4.getTime() - zI, aHm = new Date(k1), 6 === data.aHx ? function(e4, zI) {
		var aI0 = e4.getUTCFullYear(),
			e4 = e4.getUTCMonth() + 1;
		aHn = e4 < 12 ? new Date(Date.UTC(aI0, e4) - zI) : new Date(Date.UTC(aI0 + 1, 0) - zI)
	}(e4, zI) : (zI = 6e4 * aHs[data.aHx], aHn = data.aHx <= 4 ? new Date(k1 + zI - e4.getTime() % zI) : new Date(k1 + zI - (e4.getTime() + 2592e5) % zI)), k1 = b7.color, colors = [u.mW, k1.mO(255, 0, 0), k1.mO(0, 200, 0), k1.mO(80, 80, 255), k1
		.mO(255, 255, 0), k1.mO(255, 0, 255), k1.mO(0, 255, 255), k1.mO(255, 140, 0), k1.mO(128, 128, 128), k1.mO(0, 255, 140)
	], aGn = new qr(L(206) + ", " + ["M1", "M5", "H1", "H4", "D1", "W1", "MN"][data.aHx] + ", " + b7.yZ.zH(aHm), [new q("⬅️ " + L(13), function() {
		n.l7.a7o()
	}), new q(L(207), function() {
		n.o(14)
	})], !1)
}

function aGV() {
	var aGn, aGo, p6;
	this.show = function() {
		aGn.show(), this.resize()
	}, this.qh = function() {
		aGn.qh()
	}, this.resize = function() {
		aGn.resize(), aGo.resize()
	}, this.yG = function(eq) {
		2 === eq && aGn.qy[0].pS()
	}, aGn = new qr(L(208), [new q("⬅️ " + L(13), function() {
		n.aGk(13)
	})]), aGo = new p4(aGn.qx, ((p6 = []).push(function() {
		var aH4 = new oo,
			aHB = (aH4.or(L(209)), aH4.ot(L(210)), new q(L(211), function() {
				bf.ps.pt(130, 0), n.l7.aIO()
			}, 0, 0, 1)),
			aH5 = new q1(bf.dk.data[126], 0, function() {
				aHB.button.click()
			});
		return aH4.p2(aH5), aH5.e.placeholder = "a,b,c", aH5.e.style.marginTop = "0.5em", aH4.p2(new pw([aHB.button])), aH4
	}()), p6.push(function() {
		var aH4 = new oo,
			aHB = new q(L(211), function() {
				bf.ps.pt(130, 1), n.l7.aIO()
			}, 0, 0, 1),
			aIP = new q1(bf.dk.data[129], 1, function() {
				aIP.e.focus()
			}),
			aIQ = new q1(bf.dk.data[128], 1, function() {
				aHB.button.click()
			});
		return aH4.or(L(212)), aH4.p2(aIQ), aIQ.e.style.marginBottom = "0.5em", aH4.or(L(213)), aH4.p2(aIP), aH4.p2(new pw([aHB.button])), aH4
	}()), p6.push(function() {
		var aH4 = new oo;
		return aH4.or(L(214)), bf.dk.data[125].qq = ["M1", "M5", "H1", "H4", "D1", "W1", "MN"], aH4.oz(new qn(bf.dk.data[125])), aH4
	}()), p6.push(function() {
		var aH4 = new oo;
		return aH4.or(L(215)), aH4.p2(new po(bf.dk.data[127], L(216))), aH4
	}()), p6))
}

function aGU() {
	var aGn, aIR, a8O, aIS, a8P, a8Q, colors = [0, 0, 0],
		aIT = -1;

	function a8X(a6) {
		var aIW = aIR.ee + a6 * (bY.gap + a8Q);
		rB.fillStyle = "rgb(" + (0 === a6 ? 150 : 2 === a6 ? 30 : 0) + "," + (1 === a6 ? 130 : 2 === a6 ? 30 : 0) + "," + (2 === a6 ? 220 : 0) + ")", rB.fillRect(aIS, aIW, colors[a6] * a8P, a8Q), rB.strokeStyle = u.mW, rB.strokeRect(aIS, aIW, a8P,
			a8Q), rB.fillStyle = u.mW, rB.font = b7.pB.qS(0, .32 * a8Q), b7.pB.textBaseline(rB, 1), b7.pB.textAlign(rB, 0), rB.fillText(L(0 === a6 ? 219 : 1 === a6 ? 220 : 221) + aIU(a6), aIS + bY.gap, aIW + .53 * a8Q)
	}

	function aIU(a6, aIX) {
		return aIX = aIX || 256, bH.oj(Math.floor(aIX * colors[a6]), 0, aIX - 1)
	}

	function yC(kh, ki) {
		return !(kh < aIS || ki < aIR.ee || kh > aIR.ec + aIR.a0 || ki > aIR.ee + aIR.j6)
	}
	this.show = function() {
		var ey = bf.dk.data[121].value;
		colors[0] = (ey >> 12) / 63, colors[1] = (ey >> 6 & 63) / 63, colors[2] = (63 & ey) / 63, aGn.show(), this.resize()
	}, this.qh = function() {
		bf.ps.pt(121, (aIU(0, 64) << 12) + (aIU(1, 64) << 6) + aIU(2, 64)), aGn.qh()
	}, this.resize = function() {
		aGn.resize(), aIR.resize();
		var eq = au.pH,
			r8 = aGn.r2(),
			aIV = (aIR.ee = Math.max(aIR.ee, eq * r8.r3 + bY.gap), eq * r8.r6 - 2 * bY.gap);
		aIR.j6 = Math.min(aIR.j6, aIV), aIR.a0 = 2 * aIR.j6, aIR.ee = eq * r8.r3 + .5 * (eq * r8.r6 - aIR.j6), aIR.ec = .5 * (au.a0 - aIR.a0), a8O = .25 * aIR.a0, aIS = aIR.ec + a8O + bY.gap, a8P = aIR.a0 - a8O - bY.gap, a8Q = (aIR.j6 - 2 * bY
			.gap) / 3
	}, this.rA = function() {
		var hH, qi, ep;
		aGn.rA(), rB.lineWidth = bY.vC, hH = aIU(0), qi = aIU(1), ep = aIU(2), rB.fillStyle = "rgb(" + hH + "," + qi + "," + ep + ")", rB.fillRect(aIR.ec, aIR.ee, a8O, aIR.j6), rB.strokeStyle = u.mW, rB.strokeRect(aIR.ec, aIR.ee, a8O, aIR.j6), rB
			.fillStyle = hH + qi + ep < 306 && qi < 150 ? u.mW : u.mN, b7.pB.textBaseline(rB, 1), b7.pB.textAlign(rB, 1), rB.font = b7.pB.qS(0, .1 * aIR.j6), rB.rotate(-Math.PI / 2), rB.fillText(L(218), -aIR.ee - .5 * aIR.j6, aIR.ec + .5 * a8O),
			rB.setTransform(1, 0, 0, 1, 0, 0), a8X(0), a8X(1), a8X(2)
	}, this.gk = function(kh, ki) {
		yC(kh, ki) && (aIT = bH.oj(Math.floor((ki - aIR.ee) / (a8Q + .75 * bY.gap)), 0, 2), colors[aIT] = bH.oj((kh - aIS) / a8P, 0, 1), bb.dZ = !0)
	}, this.xh = function(kh) {
		-1 !== aIT && (colors[aIT] = bH.oj((kh - aIS) / a8P, 0, 1), bb.dZ = !0)
	}, this.xk = function(kh, ki, deltaY) {
		yC(kh, ki) && (kh = bH.oj(Math.floor((ki - aIR.ee) / (a8Q + .75 * bY.gap)), 0, 2), colors[kh] = bH.oj(colors[kh] + (1 - 2 * (0 < deltaY)) / 256, 0, 1), bb.dZ = !0)
	}, this.y5 = function() {
		0 <= aIT && (aIT = -1, bb.dZ = !0)
	}, this.yG = function(eq) {
		2 === eq && aGn.qy[0].pS()
	}, aGn = new qr(L(217), [new q("⬅️ " + L(13), function() {
		n.l7.a7o()
	})], !1), aIR = new pj([.5, .25], [.5, .5], 1)
}

function aGc() {
	var aHV, aHW, aHX, ph;

	function aHY() {
		aHa(), 1 !== a8.data.colorsType && (a8.data.colorsData = null), n.aGm()[19] = null, n.xS()
	}

	function aIY() {
		aHa(), n.o(21)
	}

	function aHa() {
		1 === a8.data.gameMode ? a8.a0a.a0e() : 0 === a8.data.gameMode && 1 === a8.data.colorsType && b7.pL.yu(aHX.rL(), a8.data.colorsData, 262143)
	}
	this.show = function() {
		aHV.show(), this.resize()
	}, this.qh = function() {
		aHV.qh()
	}, this.resize = function() {
		aHV.resize(), aHW.resize()
	}, this.yG = function(eq) {
		2 === eq && aHV.qy[0].pS()
	}, ph = [new q("⬅️ " + L(13), aHY)], 1 === a8.data.gameMode && ph.push(new q(L(222), aIY, 1, 1)), aHV = new qr(L(223), ph), aHW = new p4(aHV.qx, (function(p6) {
		var aH4 = new oo;
		aH4.or(L(199)), 0 === a8.data.gameMode && (aH4.oz(new qn({
			qq: [L(224), L(202)],
			value: a8.data.colorsType
		}, function(oB) {
			aHa(), a8.data.colorsType = oB, 1 !== a8.data.colorsType || a8.data.colorsData && a8.data.colorsData.length === a8.eS || (a8.data.colorsData = new Uint32Array(a8.eS)), n.o(21)
		})), aH4.p2(new pz));
		aH4.p2(new po({
			value: a8.data.selectableColor
		}, L(225), function(value) {
			a8.data.selectableColor = value
		})), p6.push(aH4)
	}(ph = []), 0 === a8.data.gameMode ? 1 === a8.data.colorsType && function(p6) {
		var aH4 = new oo;
		aH4.or("Data"), (aHX = new rC(0, 1, 0, 1)).rJ(b7.wv.a0J(a8.data.colorsData, 1)), aH4.p2(aHX), p6.push(aH4)
	}(ph) : (a8.a0a.a0e(), ph.push(function() {
		var aH4 = new oo;
		aH4.or(L(205));
		for (var a6 = 0; a6 < bc.wR.length; a6++) {
			var k1 = (a6 + 1) % bc.wR.length,
				e = aH4.ox((0 == k1 ? "" : "Team ") + bc.wR[k1]);
			a6 && (e.style.marginTop = "0.5em"), aH4.p2(new q1({
				oB: -1,
				value: a8.data.teamPlayerCount[k1]
			}, 1, 0, function(e) {
				aHV.qy[1].pU(0);
				var playerCount = bH.oj(Math.floor(e.target.value), 0, 512);
				e.target.value = playerCount, a8.data.teamPlayerCount[e.target.aIa] = playerCount
			})).e.aIa = k1
		}
		return aH4
	}())), ph))
}

function qN(id, zx) {
	var aGn, aIb;

	function aIf() {
		aIb.p7.innerHTML += "<br>" + L(228)
	}

	function aIe() {
		b9.a2(48), b9.a3(24, Math.floor(bH.pow(24) * Math.random())), b9.a3(24, Math.floor(bH.pow(24) * Math.random())), bD.dR(b9.a7), bf.ps.pt(110, bB.qP.qQ(bB.qP.qR(8))), ax.aH9.aIu()
	}
	this.aIc = !0, this.aId = id, this.show = function() {
		aGn.show(), this.resize(), 15 === id ? (ax.l7.a8m(0, id) ? aIe : aIf)() : 16 === id ? ax.l7.a8m(0, id) ? ax.a7l.aIg(2) : aIf() : 17 === id ? ax.l7.a8m(0, id) ? ax.a7l.aIg(3) : aIf() : 18 === id ? (ax.l7.close(0, 3253), ax.l7.a8m(0, id),
				aIf()) : 20 === id ? ax.l7.a8m(0, id) ? ax.aH9.aIh(zx) : aIf() : 21 === id ? ax.l7.a8m(0, id) ? ax.aIi.aIj(zx.qd, zx.qe, zx.qf) : aIf() : 22 === id ? ax.l7.a8m(0, id) ? ax.aIi.aIk(zx.qd, zx.aIl, zx.aIm) : aIf() : 23 === id ? ax.l7
			.a8m(0, id) ? ax.aIi.aIn(zx.aHx, zx.wr) : aIf() : 24 === id ? ax.l7.a8m(0, id) ? ax.aIi.aIo(zx.aHx, zx.qe, zx.qf) : aIf() : 25 === id ? ax.l7.a8m(0, id) ? ax.aH9.aHH(zx) : aIf() : 28 === id ? ax.l7.a8m(0, id) ? ax.aIi.aIp(zx.qd, zx
				.aIl, zx.aIm) : aIf() : 29 === id && (ax.l7.a8m(0, id) ? ax.aH9.aIq(zx) : aIf())
	}, this.aIr = function() {
		15 === id ? aIe() : 16 === id ? ax.a7l.aIg(2) : 17 === id ? ax.a7l.aIg(3) : 18 === id ? n.o(8, this.aGL, new qN(16)) : 20 === id ? ax.aH9.aIh(zx) : 21 === id ? ax.aIi.aIj(zx.qd, zx.qe, zx.qf) : 22 === id ? ax.aIi.aIk(zx.qd, zx.aIl, zx
			.aIm) : 23 === id ? ax.aIi.aIn(zx.aHx, zx.wr) : 24 === id ? ax.aIi.aIo(zx.aHx, zx.qe, zx.qf) : 25 === id ? ax.aH9.aHH(zx) : 28 === id ? ax.aIi.aIp(zx.qd, zx.aIl, zx.aIm) : 29 === id ? ax.aH9.aIq(zx) : 1e3 === id && (this.aId =
			id = 25, ax.aH9.aHH(zx))
	}, this.aIs = function(code, bl, data) {
		!bl && code !== id || (16 === code ? n.o(7, this.aGL) : 17 === code ? (ax.l7.close(0, 3252), bf.l7.rt(0), bf.dk.data[117].qq && 0 < bf.dk.data[117].qq.length ? (bl = bf.l7.ru(0), bf.ps.pt(105, bl.qK), bf.ps.pt(106, bl.password), n.o(8,
			this.aGL, new qN(16))) : (bf.ps.pt(105, ""), n.l7.a7o())) : 21 === code ? n.o(10, this.aGL, new aIt(data)) : 23 === code ? n.o(13, 0, new aHg({
			data: data,
			aHx: zx.aHx
		})) : 25 === code && (n.l7.aGW.qK = zx.qK, n.o(15, this.aGL)))
	}, this.qh = function() {
		aGn.qh()
	}, this.resize = function() {
		aGn.resize(), aIb.resize()
	}, this.yG = function(eq) {
		2 === eq && aGn.qy[0].pS()
	}, aGn = new qr(L(226), [new q("⬅️ " + L(13), function() {
		n.l7.a7o()
	})]), aIb = new pu(aGn.qx, L(227))
}

function aGa() {
	var aHV, aHW, p6;

	function aIx() {
		var fz;
		1 === a8.data.gameMode ? (a8.data.teamPlayerCount || (a8.data.teamPlayerCount = new Uint16Array([0, 1, 1, 0, 0, 0, 0, 0, 0]), a8.a0a.a0e()), fz = b7.pL.yo(a8.data.teamPlayerCount, 0), a8.data.numberTeams = fz) : (2 === a8.data
			.botDifficultyType && (a8.data.botDifficultyType = 0), 1 === a8.data.spawningType && (a8.data.spawningType = 0))
	}

	function aHY() {
		1 !== a8.data.gameMode && (a8.data.teamPlayerCount = null), aIz(), a8.data.canvas = null, n.o(5, 5)
	}

	function aIz() {
		b6.oQ.dR(), bf.ps.pt(156, b6.a0q.vb())
	}

	function aIv() {
		a8.data.isReplay = 0, aIz(), a8.a0a.a10(), aV.a90(), a8.a0a.a0x(), a8.data.canvas = 2 === a8.data.mapType ? bO.sp : null, a8.a0d(), a8.a0c = 1
	}

	function aJD() {
		aIx();
		for (var g = [aJ2(), aJ3(), aJ4()], a6 = 3; a6 < 6; a6++) aHW.p7.removeChild(aHW.p8[a6].oq), aHW.p8[a6] = g[a6 - 3], aHW.p7.appendChild(aHW.p8[a6].oq);
		aHW.resize()
	}

	function aJ2() {
		var aJE, aH4 = new oo;
		return aH4.or(L(223)), aJE = 0 === a8.data.gameMode ? [L(224), L(202)][a8.data.colorsType] : a8.data.numberTeams + " Team" + (1 === a8.data.numberTeams ? "" : "s"), aH4.ox(aJE), aH4.p2(new pw([new q(L(232), function() {
			n.o(21)
		}).button])), aH4
	}

	function aJ3() {
		var aH4 = new oo,
			g = (aH4.or(L(37)), [L(201) + ": " + a9.jq[a8.data.botDifficultyValue], L(203), L(204), L(202)]);
		return aH4.ox(g[a8.data.botDifficultyType]), aH4.p2(new pw([new q(L(232), function() {
			n.o(25)
		}).button])), aH4
	}

	function aJ4() {
		var aH4 = new oo,
			g = (aH4.or("Spawning"), [L(224), L(234), L(202)]);
		return aH4.ox(g[a8.data.spawningType]), aH4.p2(new pw([new q(L(232), function() {
			n.o(24)
		}).button])), aH4
	}
	this.show = function() {
		aHV.show(), this.resize(), aHV.qx.scrollTop = n.l7.aBs[0]
	}, this.qh = function() {
		n.l7.aBs[0] = aHV.qx.scrollTop, aHV.qh()
	}, this.resize = function() {
		aHV.resize(), aHW.resize()
	}, this.yG = function(eq) {
		2 === eq && aHV.qy[0].pS()
	}, aHV = new qr("🔧 " + L(229), [new q("⬅️ " + L(13), aHY), new q(L(230), aIv)]), aIx(), a8.data.canvas || (2 === a8.data.mapType ? a8.data.canvas = bO.sp : 1 === a8.data.mapType ? a8.data.canvas = bO.aA6(bO.a0y(a8.data), 0).sp : (a8.data
		.mapType = 0, a8.data.passableWater = a8.data.passableMountains = 1, a8.data.canvas = bO.aA6(bO.a0y(a8.data), a8.data.mapSeed).sp)), aHW = new p4(aHV.qx, (function(p6) {
		var aH4 = new oo,
			z2 = (aH4.or(L(231)), a8.data.canvas);
		z2.style.width = "100%", aH4.p2({
			e: z2
		}), aH4.p2(new pw([new q(L(232), function() {
			n.o(20)
		}).button])), p6.push(aH4)
	}(p6 = []), function(p6) {
		var aH4 = new oo;
		aH4.or(L(205)), aH4.p2(new q1({
			oB: -1,
			value: a8.data.playerCount
		}, 1, 0, function(e) {
			var playerCount = bH.oj(Math.floor(e.target.value), 1, 512);
			e.target.value = a8.data.playerCount = playerCount, 1 === a8.data.gameMode && (e = b7.pL.yo(a8.data.teamPlayerCount, 0), a8.a0a.a0e(), b7.pL.yo(a8.data.teamPlayerCount, 0) !== e) && aJD()
		})), p6.push(aH4)
	}(p6), function(p6) {
		var aH4 = new oo;
		aH4.or(L(233)), aH4.oz(new qn({
			qq: ["Battle Royale", "Teams"],
			value: a8.data.gameMode
		}, function(oB) {
			a8.data.gameMode !== oB && (a8.data.gameMode = oB, aJD())
		})), p6.push(aH4)
	}(p6), p6.push(aJ2()), p6.push(aJ3()), p6.push(aJ4()), function(p6) {
		var aH4 = new oo,
			g = (aH4.or(L(235)), [L(236), L(237), L(202)]);
		aH4.ox(g[a8.data.playerNamesType]), aH4.p2(new pw([new q(L(232), function() {
			n.o(23)
		}).button])), p6.push(aH4)
	}(p6), function(p6) {
		var aH4 = new oo,
			g = (aH4.or(L(198)), [L(200), L(201) + ": " + a8.data.aIncomeValue, L(202)]);
		aH4.ox(g[a8.data.aIncomeType]), aH4.p2(new pw([new q(L(232), function() {
			n.o(22)
		}).button])), p6.push(aH4)
	}(p6), function(p6) {
		var aH4 = new oo,
			g = (aH4.or(L(238)), [L(200), L(201) + ": " + a8.data.tIncomeValue, L(202)]);
		aH4.ox(g[a8.data.tIncomeType]), aH4.p2(new pw([new q(L(232), function() {
			n.o(26)
		}).button])), p6.push(aH4)
	}(p6), function(p6) {
		var aH4 = new oo,
			g = (aH4.or(L(239)), [L(200), L(201) + ": " + a8.data.iIncomeValue, L(202)]);
		aH4.ox(g[a8.data.iIncomeType]), aH4.p2(new pw([new q(L(232), function() {
			n.o(27)
		}).button])), p6.push(aH4)
	}(p6), function(p6) {
		var aH4 = new oo,
			g = (aH4.or(L(240)), [L(200), L(201) + ": " + a8.data.sResourcesValue, L(202)]);
		aH4.ox(g[a8.data.sResourcesType]), aH4.p2(new pw([new q(L(232), function() {
			n.o(28)
		}).button])), p6.push(aH4)
	}(p6), function(p6) {
		var aH4 = new oo;
		aH4.or(L(241)), aH4.p2(new pw([new q(L(242), function() {
			n.rx(), a8.a0a.a11(), n.l7.aBs[0] = 0, n.o(19)
		}).button])), aH4.p2(new pw([new q(L(243), function() {
			bj.aBh()
		}).button])), aH4.p2(new pw([new q(L(244), function() {
			return bj.aBj(), !0
		}).button])), p6.push(aH4)
	}(p6), p6))
}

function aGi() {
	var aHV, aHW, aHX, p6;

	function aHY() {
		aHa(), 2 !== a8.data.iIncomeType && (a8.data.iIncomeData = null), n.aGm()[19] = null, n.xS()
	}

	function aHa() {
		2 === a8.data.iIncomeType && b7.pL.yu(aHX.rL(), a8.data.iIncomeData, 255)
	}
	this.show = function() {
		aHV.show(), this.resize()
	}, this.qh = function() {
		aHV.qh()
	}, this.resize = function() {
		aHV.resize(), aHW.resize()
	}, this.yG = function(eq) {
		2 === eq && aHV.qy[0].pS()
	}, aHV = new qr(L(239), [new q("⬅️ " + L(13), aHY)]), aHW = new p4(aHV.qx, (function(p6) {
		var aH4 = new oo;
		aH4.or(L(199)), aH4.oz(new qn({
			qq: [L(200), L(201), L(202)],
			value: a8.data.iIncomeType
		}, function(oB) {
			aHa(), 2 !== oB || a8.data.iIncomeData || (a8.data.iIncomeData = new Uint8Array(a8.eS), a8.data.iIncomeData.fill(32)), a8.data.iIncomeType = oB, n.o(27)
		})), p6.push(aH4)
	}(p6 = []), function(p6) {
		var aH4;
		1 === a8.data.iIncomeType && ((aH4 = new oo).or("Value"), aH4.p2(new q1({
			oB: -1,
			value: a8.data.iIncomeValue
		}, 1, 0, function(e) {
			var value = bH.oj(Math.floor(e.target.value), 0, 255);
			e.target.value = a8.data.iIncomeValue = value
		})), p6.push(aH4))
	}(p6), function(p6) {
		var aH4;
		2 === a8.data.iIncomeType && ((aH4 = new oo).or("Data"), (aHX = new rC(0, 1, 0, 1)).rJ(b7.wv.a0J(a8.data.iIncomeData, 4)), aH4.p2(aHX), p6.push(aH4))
	}(p6), p6))
}

function aGQ() {
	var aJF, aJG, aIR, aH5, aJH;
	this.aAX = new qW, aIR = new pj([.45, .27], [.5, .5], 2 / 3), aJG = [new q("⚔️<br>" + L(105), function() {
			aJI(0)
		}, u.mv), new q("🗡️<br>" + L(229), function() {
			aJI(1)
		}, u.n7), new q("🔑<br>" + L(245), function() {
			aJI(2)
		}, u.nM), new q("☰<br>" + L(246), function() {
			aJI(3)
		}, u.mi), new q("", function() {
			n.o(12)
		}, u.mS, !1),
		new q("FX Client settings", function() {
			__fx.WindowManager.openWindow("settings");
		}, "rgba(0, 0, 20, 0.5)"),
		new q("Join/Create custom lobby", function() {
			__fx.customLobby.showJoinPrompt();
		}, "rgba(20, 9, 77, 0.5)")
	], aH5 = new q1(bf.dk.data[122]);
	for (var a6 = 0; a6 < aJG.length; a6++) aJG[a6].button.style.position = "absolute";

	function aJI(oB) {
		r.s.setState(10), aW.qm() || aW.aAN(), 0 === oB ? n.l7.aJJ() : 1 === oB ? (b6.aC2.sa(bf.dk.data[156].value, 1) || a8.a0a.a11(), n.o(19)) : 2 === oB ? 0 !== r.id || bf.dk.data[140].value ? n.o(8, n.qM, new qN(16)) : n.l7.aJK(n.qM, 16) : 3 ===
			oB && n.o(1)
	}
	aH5.e.style.position = "absolute", aH5.e.style.textAlign = "center", aH5.e.placeholder = L(247), this.show = function() {
		aV.setState(0), r.s.setState(12), this.aAX.show(), aJG[4].pU(b7.color.z9(bf.dk.data[121].value)), this.resize(), document.body.appendChild(aH5.e);
		for (var a6 = 0; a6 < aJG.length; a6++) document.body.appendChild(aJG[a6].button);
		1 !== r.id || r.ez < 5 || (aJH && bb.e3 > aJH + 144e5 ? r.re.setState(14) : aJH = bb.e3)
	}, this.qh = function() {
		this.aAX.qh(), document.body.removeChild(aH5.e);
		for (var a6 = 0; a6 < aJG.length; a6++) document.body.removeChild(aJG[a6].button)
	}, this.resize = function() {
		this.aAX.resize(), aIR.resize();
		var gap = .5 * bY.gap,
			a7u = 10 / 99 * .84 * aIR.a0,
			aJN = .16 * aIR.j6,
			a4p = .19 * aIR.a0,
			ec = aIR.ec + a4p,
			a7u = aIR.ee + a7u + 3 * gap,
			a0 = .5 * (aIR.a0 - gap) - a4p,
			a4p = aIR.a0 - 2 * a4p - aJN - gap,
			a4p = (b7.pB.qk(aH5.e, ec, a7u, a4p, aJN), b7.pB.qk(aJG[4].button, ec + a4p + gap, a7u, aJN, aJN), .5 * (aIR.ee + aIR.j6 - (a7u += aJN + gap) - gap));
		b7.pB.qk(aJG[0].button, ec, a7u, a0, a4p), b7.pB.qk(aJG[1].button, ec + a0 + gap, a7u, a0, a4p), b7.pB.qk(aJG[2].button, ec, a7u + a4p + gap, a0, a4p), b7.pB.qk(aJG[3].button, ec + a0 + gap, a7u + a4p + gap, a0, a4p);
		b7.pB.qk(aJG[5].button, ec, a7u + a4p * 2 + gap * 2, a0 * 2 + gap, a4p / 3);
		b7.pB.qk(aJG[6].button, ec, a7u + a4p * 2.33 + gap * 3, a0 * 2 + gap, a4p / 3);
		for (var a6 = 0; a6 < aJG.length; a6++) aJG[a6].button.style.font = b7.pB.qS(0, b7.pB.zQ(.065 * aIR.j6)), b7.pB.pN(aJG[a6].button, 5);
		aH5.e.style.font = b7.pB.qS(0, b7.pB.zQ(.08 * aIR.j6)), b7.pB.pN(aH5.e, 5)
	}, this.rA = function() {
		if (aV.a94(), aO.rA(), aJ.rA(), bU.rA(), aW.qm()) {
			if (__fx.settings.displayWinCounter) {
				const size = Math.floor(aIR.a0 * 0.03);
				rB.font = b7.pB.qS(1, size);
				rB.fillStyle = "#ffffff";
				const text = "Win count: " + __fx.wins.count;
				const textLength = rB.measureText(text).width;
				rB.textAlign = "left";
				rB.textBaseline = "middle";
				rB.fillText(text, rB.canvas.width - textLength - size / 2, size);
			};
			rB.imageSmoothingEnabled = !1;
			var eq = aW.a97("territorial.io"),
				m7 = .84 * aIR.a0 / eq.width;
			rB.setTransform(m7, 0, 0, m7, aIR.ec + .08 * aIR.a0, aIR.ee), aJF = aJF || b7.yV.zv(eq, b7.yV.a01, [0, 0, 0]);
			for (var ec = -1; ec <= 1; ec += 2)
				for (var ee = -1; ee <= 1; ee += 2) rB.drawImage(aJF, ec, ee);
			rB.drawImage(eq, 0, 0), rB.imageSmoothingEnabled = !0;
			var hP = aW.a97("logo"),
				aJQ = .6666 * m7 * eq.height / hP.height,
				m9 = .5 * au.a0,
				mA = aIR.ee + .5 * m7 * eq.height - .5 * aJQ * hP.height;
			rB.setTransform(aJQ, 0, 0, aJQ, m9 - .6 * m7 * eq.width, mA), rB.drawImage(hP, 0, 0), rB.setTransform(aJQ, 0, 0, aJQ, m9 + .6 * m7 * eq.width - aJQ * hP.width, mA), rB.drawImage(hP, 0, 0), rB.setTransform(1, 0, 0, 1, 0, 0), rB
				.imageSmoothingEnabled = !0
		}
	}
}

function aGX() {
	var aGn, aJR, aJS, qs;

	function qc(a6) {
		n.o(8, n.qM, new qN(21, {
			qd: a6,
			qe: 0,
			qf: 10
		}))
	}
	this.show = function() {
		aGn.show(), this.resize()
	}, this.qh = function() {
		aGn.qh()
	}, this.resize = function() {
		aGn.resize(), aJR.resize()
	}, this.yG = function(eq) {
		2 === eq && aGn.qy[0].pS()
	}, aJS = [new q(L(248), function() {
		qc(1)
	}, 0, 0, 1), new q(L(249), function() {
		qc(2)
	}, 0, 0, 1), new q(L(250), function() {
		qc(0)
	}, 0, 0, 1), new q(L(251), function() {
		qc(3)
	}, 0, 0, 1)], qs = [new q("⬅️ " + L(13), function() {
		n.xS()
	})], aGn = new qr(L(252), qs), aJR = new pg(aJS, aGn.qx)
}

function a88(title, oy, aJT) {
	var aGn, aIb;
	this.show = function() {
		aGn.show(), this.resize()
	}, this.qh = function() {
		aGn.qh()
	}, this.resize = function() {
		aGn.resize(), aIb.resize()
	}, this.yG = function(eq) {
		2 === eq && aGn.qy[0].pS()
	}, aJT = aJT || [new q("⬅️ " + L(13), function() {
		n.xS()
	}, u.n5)], aGn = new qr(title, aJT), aIb = new pu(aGn.qx, oy), b7.pB.textAlign(aGn.qx.style, 1)
}

function aIt(data) {
	var aGn, aJU, eq, qE;

	function aJV(hT) {
		var eV = data.data.length;
		if (eV) {
			for (var qe, max = min = parseInt(data.data[0][0]), a6 = 1; a6 < eV; a6++) var aJc = parseInt(data.data[a6][0]),
				min = Math.min(aJc, min),
				max = Math.max(aJc, max);
			qe = hT < 0 ? min + hT : max + 1, n.o(8, n.aAW().aGL, new qN(21, {
				qd: data.qd,
				qe: qe,
				qf: qe + Math.abs(hT)
			}))
		}
	}
	this.show = function() {
			aGn.show(), this.resize()
		}, this.qh = function() {
			aGn.qh()
		}, this.resize = function() {
			aGn.resize(), aJU.resize()
		}, this.yG = function(eq) {
			2 === eq && aGn.qy[0].pS()
		}, eq = data.data.length ? 0 : 1, eq = [new q("⬅️ " + L(13), function() {
			n.xS()
		}), new q(L(253), function() {
			aJV(-10)
		}, eq, 0, 1), new q(L(254), function() {
			aJV(10)
		}, eq, 0, 1), new q(L(207), function() {
			n.o(11, 10, new aJW({
				qd: data.qd
			}))
		})], qE = [L(255), L(256), L(257), L(258), L(259), L(260), L(261), L(262), L(263)], aGn = new qr(qE[data.qd], eq),
		function() {
			var a6, eY = {
					q8: []
				},
				q8 = eY.q8,
				aJY = data.data,
				eV = aJY.length,
				m7 = [.1, .001, .001, 1, 100, 1, .01, 1, 100][data.qd],
				a06 = [1, 3, 3, 0, 0, 0, 2, 0, 0][data.qd],
				qE = [
					[L(264), L(265) + " ↗", L(266)],
					[L(264), L(267), L(268), L(269) + " ↗"],
					[L(264), L(265) + " ↗", L(268)],
					[L(264), L(265) + " ↗", L(268)],
					[L(270), L(271), L(272) + " ↗", L(273) + " ↗", L(94)],
					[L(270), L(271), L(274) + " ↗", L(275) + " ↗", L(268)],
					[L(270), L(271), L(276) + " ↗", L(277) + " ↗", L(278)],
					[L(270), L(271), L(274) + " ↗", L(275) + " ↗", L(268)],
					[L(270), L(271), L(272) + " ↗", L(273) + " ↗", L(94)]
				];
			if (eY.qE = qE[data.qd], eY.qI = [
					[25, 40, 35],
					[15, 25, 25, 35],
					[25, 40, 35],
					[25, 40, 35],
					[12, 16, 30, 30, 12],
					[12, 16, 30, 30, 12],
					[12, 16, 30, 30, 12],
					[12, 16, 30, 30, 12],
					[12, 16, 30, 30, 12]
				][data.qd], 0 === data.qd)
				for (a6 = 0; a6 < eV; a6++) q8.push([{
					ey: aJY[a6][0] + 1 + ".",
					e4: 0
				}, {
					ey: aJY[a6][1],
					e4: 1,
					qK: aJY[a6][4],
					qL: aJY[a6][3]
				}, {
					ey: (m7 * aJY[a6][2]).toFixed(a06),
					e4: 0
				}]);
			else if (1 === data.qd)
				for (a6 = 0; a6 < eV; a6++) q8.push([{
					ey: aJY[a6][0] + 1 + ".",
					e4: 0
				}, {
					ey: aJY[a6][1],
					e4: 0
				}, {
					ey: (m7 * aJY[a6][2]).toFixed(a06),
					e4: 0
				}, {
					ey: aJY[a6][3],
					e4: 1,
					qK: aJY[a6][5],
					qL: aJY[a6][4]
				}]);
			else if (2 === data.qd || 3 === data.qd)
				for (a6 = 0; a6 < eV; a6++) q8.push([{
					ey: aJY[a6][0] + 1 + ".",
					e4: 0
				}, {
					ey: aJY[a6][1],
					e4: 1,
					qK: aJY[a6][4],
					qL: aJY[a6][3]
				}, {
					ey: (m7 * aJY[a6][2]).toFixed(a06),
					e4: 0
				}]);
			else if (4 === data.qd || 5 === data.qd || 6 === data.qd || 7 === data.qd || 8 === data.qd)
				for (a6 = 0; a6 < eV; a6++) {
					var aJb = aJY[a6][5];
					4 === data.qd || 8 === data.qd ? "100%" === (aJb = (aJb % 64 * 100 / (aJb >> 6)).toFixed(0) + "%") && (4 === data.qd ? aJb += " (" + L(279) + ")" : aJb += " (" + L(280) + ")") : 5 === data.qd ? 32768 <= aJb && (aJb = -(aJb -
						32768)) : aJb = (m7 * aJb).toFixed(a06), q8.push([{
						ey: "" + aJY[a6][0],
						e4: 0
					}, {
						ey: "" + aJY[a6][6],
						e4: 0
					}, {
						ey: aJY[a6][7],
						e4: 1,
						qK: aJY[a6][1],
						qL: aJY[a6][2]
					}, {
						ey: aJY[a6][8],
						e4: 1,
						qK: aJY[a6][3],
						qL: aJY[a6][4]
					}, {
						ey: "" + aJb,
						e4: 0
					}])
				}
			aJU = new q7(aGn.qx, eY)
		}()
}

function aJW(zx) {
	var aGn, aGo, p6;
	this.show = function() {
		aGn.show(), this.resize()
	}, this.qh = function() {
		aGn.qh()
	}, this.resize = function() {
		aGn.resize(), aGo.resize()
	}, this.yG = function(eq) {
		2 === eq && aGn.qy[0].pS()
	}, aGn = new qr(L(281), [new q("⬅️ " + L(13), function() {
		n.aGk(10)
	})]), aGo = new p4(aGn.qx, ((p6 = []).push(function() {
		var aHB, aH4 = new oo,
			aIP = new q1(bf.dk.data[132], 1, function() {
				aHB.button.click()
			}),
			aIQ = new q1(bf.dk.data[131], 1, function() {
				aIP.e.focus()
			});
		aH4.or(L(212)), aH4.p2(aIQ), aIQ.e.style.marginBottom = "0.8em", aH4.or(L(213)), aH4.p2(aIP);
		return aHB = new q(L(211), function() {
			qe = Math.floor(aIQ.e.value), qf = Math.floor(aIP.e.value);
			var qf, qe = {
				ym: Math.min(qe, qf),
				aFv: Math.max(qe, qf)
			};
			n.o(8, n.aGl(10).aGL, new qN(21, {
				qd: zx.qd,
				qe: qe.ym,
				qf: qe.aFv
			}))
		}, 0, 0, 1), aH4.p2(new pw([aHB.button])), aH4
	}()), p6.push(function() {
		var aHB, aH4 = new oo,
			aIP = new q1(bf.dk.data[134], 1, function() {
				aHB.button.click()
			}),
			aIQ = new q1(bf.dk.data[133], 0, function() {
				aIP.e.focus()
			});
		return aH4.or(1 === zx.qd ? L(282) : L(283)), aH4.p2(aIQ), aIQ.e.style.marginBottom = "0.8em", aH4.or(L(284)), aH4.p2(aIP), aHB = new q(L(211), function() {
			var aIl = aIQ.e.value.slice(0, 20),
				aIm = Math.abs(Math.floor(aIP.e.value));
			n.o(8, n.aGl(10).aGL, new qN(22, {
				qd: zx.qd,
				aIl: aIl,
				aIm: aIm
			}))
		}, 0, 0, 1), aH4.p2(new pw([aHB.button])), aH4
	}()), p6.push(function() {
		var aHB, aH4 = new oo,
			aIP = new q1(bf.dk.data[152], 1, function() {
				aHB.button.click()
			}),
			aIQ = new q1(bf.dk.data[151], 0, function() {
				aIP.e.focus()
			});
		return aH4.or(L(285)), aH4.p2(aIQ), aIQ.e.style.marginBottom = "0.8em", aH4.or(L(284)), aH4.p2(aIP), aHB = new q(L(211), function() {
			var aIl = aIQ.e.value.slice(0, 5),
				aIm = Math.abs(Math.floor(aIP.e.value));
			n.o(8, n.aGl(10).aGL, new qN(28, {
				qd: zx.qd,
				aIl: aIl,
				aIm: aIm
			}))
		}, 0, 0, 1), aH4.p2(new pw([aHB.button])), aH4
	}()), p6))
}

function aGR() {
	var aGn, aGo, p6;
	this.show = function() {
		aGn.show(), this.resize()
	}, this.qh = function() {
		aGn.qh()
	}, this.resize = function() {
		aGn.resize(), aGo.resize()
	}, this.yG = function(eq) {
		2 === eq && aGn.qy[0].pS()
	}, aGn = new qr(L(286), [new q("⬅️ " + L(13), function() {
		n.o(7, n.aGl(7).aGL)
	}), new q(L(160), function() {
		bf.ps.pt(105, bC.qP.sP(aGo.p8[0].op[0].e.value, 5)), bf.ps.pt(106, bC.qP.sP(aGo.p8[1].op[0].e.value, 8)), n.o(8, n.aGl(7).aGL, new qN(18))
	})]), aGo = new p4(aGn.qx, ((p6 = []).push(function() {
		var aH4 = new oo;
		return aH4.or(L(141)), aH4.p2(new q1({
			value: "",
			oB: -1
		})), aH4
	}()), p6.push(function() {
		var aH4 = new oo,
			aHE = (aH4.or(L(143)), new q1({
				value: "",
				oB: -1
			}));
		return aHE.e.type = "password", aH4.p2(aHE), aH4.p2(new pw([new q(L(144), function(e) {
			return e.textContent === L(144) ? (e.textContent = L(145), aHE.e.type = "text") : (e.textContent = L(144), aHE.e.type = "password"), !0
		}).button])), aH4
	}()), p6))
}

function aGY() {
	var aGn, aJR, aJS, qs;

	function qc(a6) {
		n.o(8, n.qM, new qN(21, {
			qd: a6,
			qe: 0,
			qf: 10
		}))
	}
	this.show = function() {
		aGn.show(), this.resize()
	}, this.qh = function() {
		aGn.qh()
	}, this.resize = function() {
		aGn.resize(), aJR.resize()
	}, this.yG = function(eq) {
		2 === eq && aGn.qy[0].pS()
	}, aJS = [new q(L(259), function() {
		qc(4)
	}, 0, 0, 1), new q(L(260), function() {
		qc(5)
	}, 0, 0, 1), new q(L(261), function() {
		qc(6)
	}, 0, 0, 1), new q(L(262), function() {
		qc(7)
	}, 0, 0, 1), new q(L(263), function() {
		qc(8)
	}, 0, 0, 1)], qs = [new q("⬅️ " + L(13), function() {
		n.xS()
	})], aGn = new qr(L(287), qs), aJR = new pg(aJS, aGn.qx)
}

function aGH() {
	this.dk = {}, this.qg = ["", "", ""], this.aGW = null, this.aGT = null, this.q5 = 0, this.aBs = [0], this.xV = function() {
			n.o(5, 5)
		}, this.aJJ = function() {
			n.rx(), aU.a8i(bf.dk.data[10].value), aU.dR()
		},
		__fx.customLobby.setJoinFunction(() => {
			n.rx();
			aU.a8i(0);
			aU.dR();
		}), this.a7o = function() {
			n.o(0 === aV.xL() ? 5 : 0)
		}, this.aIO = function() {
			if (1 === bf.dk.data[130].value) n.o(8, n.aAW().aGL, new qN(24, {
				aHx: bf.dk.data[125].value,
				qe: bf.dk.data[128].value,
				qf: bf.dk.data[129].value
			}));
			else {
				for (var g = (g = bf.dk.data[126].value.split(",")).slice(0, 10), a6 = 0; a6 < g.length; a6++) g[a6] = g[a6].trim().slice(0, 7).toUpperCase();
				1 === g.length && 0 === g[0].length && (g = []), n.o(8, n.aAW().aGL, new qN(23, {
					aHx: bf.dk.data[125].value,
					wr: g
				}))
			}
		}, this.aJK = function(aGL, target) {
			n.o(4, aGL, new p("Data Usage Information",
				"Do you want your username and other data to be remembered for the next session?<br>The app might not function correctly if you decline data usage.<br>Please read our privacy policy for more information: <a href='" + bG.aJh +
				"' target='_blank'>" + bG.aJh + "</a>", !1, [new q("⬅️ " + L(13), function() {
					n.o(aGL)
				}), new q("✅ Accept", function() {
					bf.ps.pt(140, 1), 0 === target ? n.o(2, aGL) : n.o(8, aGL, new qN(target))
				})]))
		}, this.aJi = function() {
			for (var a6 = 0; a6 < 3; a6++) this.qg[a6] = bC.sI.sK(bD.oC(5));
			this.qg[1] = "[" + this.qg[1] + "]", 5 === n.qM && n.aAW().aAX.pt(this.qg)
		}
}

function aGb() {
	var aHV, aHW, aJj, p6;

	function aHY() {
		b3.xX(), n.aGm()[19] = null, n.xS()
	}

	function aJq() {
		aJt(), aJr()
	}

	function aJt() {
		aJj.oq.lastChild && aJj.oq.removeChild(aJj.oq.lastChild)
	}

	function aJr() {
		var aJu = bO.a0y(a8.data);
		a8.data.canvas = bO.aA6(aJu, a8.data.mapSeed).sp, aJs()
	}

	function aJs() {
		var z2 = a8.data.canvas;
		z2.style.width = "100%", aJj.oq.appendChild(z2)
	}
	this.aBb = function(z2) {
		a8.data.canvas && aJt(), a8.data.canvas = z2, aJs()
	}, this.show = function() {
		aHV.show(), this.resize()
	}, this.qh = function() {
		aHV.qh()
	}, this.resize = function() {
		aHV.resize(), aHW.resize()
	}, this.yG = function(eq) {
		2 === eq && aHV.qy[0].pS()
	}, aHV = new qr(L(231), [new q("⬅️ " + L(13), aHY)]), 2 === a8.data.mapType && b3.dR(), aHW = new p4(aHV.qx, (function(p6) {
		var aH4 = new oo;
		aH4.or(L(199)), aH4.oz(new qn({
			qq: [L(288), L(289), L(290)],
			value: a8.data.mapType
		}, function(oB) {
			2 === (a8.data.mapType = oB) ? (b3.dR(), a8.data.canvas = null) : (a8.data.passableWater = a8.data.passableMountains = 1, b3.xX()), n.o(20)
		})), 2 <= a8.data.mapType && (aH4.p2(new pz), aH4.p2(new po({
			value: a8.data.passableWater
		}, L(291), function(value) {
			a8.data.passableWater = value
		})), aH4.p2(new po({
			value: a8.data.passableMountains
		}, L(292), function(value) {
			a8.data.passableMountains = value
		})));
		p6.push(aH4)
	}(p6 = []), function(p6) {
		if (0 === a8.data.mapType) {
			for (var aH4 = new oo, qq = (aH4.or(L(231)), []), a6 = 0; a6 < bO.sf.aFH.length; a6++) qq.push(bO.sf.sg[bO.sf.aFH[a6]].name);
			aH4.oz(new qn({
				qq: qq,
				value: a8.data.mapProceduralIndex
			}, function(oB) {
				a8.data.mapProceduralIndex = oB, aJq()
			})), p6.push(aH4)
		}
	}(p6), function(p6) {
		if (1 === a8.data.mapType) {
			for (var aH4 = new oo, qq = (aH4.or(L(231)), []), a6 = 0; a6 < bO.sf.aFI.length; a6++) qq.push(bO.sf.sg[bO.sf.aFI[a6]].name);
			aH4.oz(new qn({
				qq: qq,
				value: a8.data.mapRealisticIndex
			}, function(oB) {
				a8.data.mapRealisticIndex = oB, aJq()
			})), p6.push(aH4)
		}
	}(p6), function(p6) {
		var aH4;
		2 === a8.data.mapType && ((aH4 = new oo).or(L(231)), aH4.p2(new pw([new q(L(293), function() {
			return b3.aBU(), !0
		}).button])), p6.push(aH4))
	}(p6), function(p6) {
		(aJj = new oo).or(L(294)), 2 !== a8.data.mapType ? aJr() : a8.data.canvas && aJs();
		p6.push(aJj)
	}(p6), function(p6) {
		var aH4, aH5, aHB;
		0 === a8.data.mapType && ((aH4 = new oo).or("Seed"), aH5 = new q1({
			oB: -1,
			value: a8.data.mapSeed
		}, 1, 0, function(e) {
			e = Math.abs(Math.floor(e.target.value)) % 16384;
			a8.data.mapSeed !== e && (a8.data.mapSeed = e, aJq())
		}), aHB = new q(L(224), function(e) {
			var aEH = Math.floor(16384 * Math.random());
			if (a8.data.mapSeed !== aEH) return aH5.e.value = a8.data.mapSeed = aEH, aJq(), !0
		}), aH4.p2(aH5), aH4.p2(new pw([aHB.button])), p6.push(aH4))
	}(p6), function(p6) {
		var aH4, aH5;
		2 === a8.data.mapType && ((aH4 = new oo).or(L(295)), aH5 = new q1({
			oB: -1,
			value: a8.data.mapName
		}, 0, 0, function(e) {
			a8.data.mapName = e.target.value = e.target.value.slice(0, 20)
		}), aH4.p2(aH5), p6.push(aH4))
	}(p6), p6))
}

function p(title, oy, aJv, aJT) {
	var aGn, aIb;
	this.show = function() {
		aGn.show(), this.resize()
	}, this.qh = function() {
		aGn.qh()
	}, this.resize = function() {
		aGn.resize(), aIb.resize()
	}, this.yG = function(eq) {
		2 === eq && aGn.qy[0].pS()
	}, aJT = aJT || [new q("⬅️ " + L(13), function() {
		n.xS()
	})], aGn = new qr(title, aJT), aIb = new pu(aGn.qx, oy), aJv && b7.pB.textAlign(aGn.qx.style, 1)
}

function aGe() {
	var aHV, aHW, aHX, p6;

	function aHY() {
		aHa(), 2 === a8.data.playerNamesType && 1 === b7.pL.yi(a8.data.playerNamesData).length && (a8.data.playerNamesType = 0), 2 !== a8.data.playerNamesType && (a8.data.playerNamesData = null), n.aGm()[19] = null, n.xS()
	}

	function aHa() {
		2 === a8.data.playerNamesType && b7.pL.yw(aHX.rL(), a8.data.playerNamesData, 20)
	}
	this.show = function() {
		aHV.show(), this.resize()
	}, this.qh = function() {
		aHV.qh()
	}, this.resize = function() {
		aHV.resize(), aHW.resize()
	}, this.yG = function(eq) {
		2 === eq && aHV.qy[0].pS()
	}, aHV = new qr(L(235), [new q("⬅️ " + L(13), aHY)]), aHW = new p4(aHV.qx, (function(p6) {
		var aH4 = new oo;
		aH4.or(L(199)), aH4.oz(new qn({
			qq: [L(236), L(237), L(202)],
			value: a8.data.playerNamesType
		}, function(oB) {
			aHa(), a8.data.playerNamesType = oB, n.o(23)
		})), aH4.p2(new pz), aH4.p2(new po({
			value: a8.data.selectableName
		}, L(296), function(value) {
			a8.data.selectableName = value
		})), p6.push(aH4)
	}(p6 = []), function(p6) {
		var aH4;
		2 === a8.data.playerNamesType && ((aH4 = new oo).or("Data"), aHX = new rC(0, 1, 0, 1), a8.data.playerNamesData && a8.data.playerNamesData.length === a8.eS || (a8.data.playerNamesData = new Array(a8.eS), a8.data.playerNamesData
			.fill("")), aHX.rJ(b7.wv.a0J(a8.data.playerNamesData, 1, '"')), aH4.p2(aHX), p6.push(aH4))
	}(p6), p6))
}

function aGP() {
	var aHV, rH;

	function aJw() {
		n.rx();
		var os = b6.aK0(rH.rL());
		(a8.w5 && 0 < os.length && os === b6.oQ.a0p || b6.aC2.sa(os)) && b6.aK1()
	}
	this.show = function(aJx) {
		this.aJy(aJx), aHV.show(), this.resize()
	}, this.aJy = function(aJx) {
		0 === a8.w5 ? aJx ? rH.rJ(aJx) : b6.oQ.a0p.length && rH.rJ(b6.oQ.a0p) : (a8.gg || (b6.oQ.a0p = b6.a0q.vb()), rH.rJ(b6.aJz(b6.oQ.a0p)))
	}, this.qh = function() {
		aHV.qh()
	}, this.resize = function() {
		aHV.resize(), rH.resize()
	}, this.yG = function(eq) {
		2 === eq ? aHV.qy[0].pS() : aJw()
	}, aHV = new qr(L(297), [new q("⬅️ " + L(13), function() {
		n.aGk(1)
	}), new q(L(298), function() {
		rH.rM()
	}), new q(L(299), function() {
		rH.rN()
	}), new q(L(300), function() {
		rH.clear()
	}), new q(L(301), function() {
		aJw()
	})]), rH = new rC(L(302)), aHV.qx.appendChild(rH.e)
}

function aGO() {
	var aGn, aGo, p6, a7k, aH4;

	function aK2() {
		var e3;
		a7k !== bf.dk.data[12].value ? (b4.dR(), b4.a7j(), e3 = bb.e3, n.o(4, 1, new p(L(305), L(306), !1, [new q("⬅️ " + L(13), function() {
			n.o(1)
		}), new q("🔄 Reload", function() {
			bb.e3 < e3 + 1500 || r.s.t()
		}, u.v)]))) : n.o(1)
	}
	this.show = function() {
			a7k = bf.dk.data[12].value, aGn.show(), this.resize()
		}, this.qh = function() {
			aGn.qh()
		}, this.resize = function() {
			aGn.resize(), aGo.resize()
		}, this.yG = function(eq) {
			2 === eq && aGn.qy[0].pS()
		}, aGn = new qr(L(303), [new q("⬅️ " + L(13), aK2), new q(L(304), function() {
			n.rx(), bf.ps.rz(), n.o(2)
		})]), p6 = [], (aH4 = new oo).or(L(307)), aH4.ot(L(308)), p6.push(aH4),
		function(p6) {
			var aH4 = new oo,
				g = (aH4.or(L(328)), b4.data.a7p());
			aH4.oz(new qn({
				qq: g,
				value: b4.data.a7s(g)
			}, function(oB) {
				return bf.ps.pt(12, g[oB].split(":")[0]), !0
			})), p6.push(aH4)
		}(p6),
		function(p6) {
			var aH4 = new oo,
				aK5 = (aH4.or(L(326)), []);
			aH4.p2(new pw([new q(L(327), function(e) {
				bT.aK6();
				for (var a6 = 0; a6 < aK5.length; a6++) aK5[a6].e.value = bT.aK7[a6];
				return b7.pB.zW(e), !0
			}).button]));
			for (var a6 = 0; a6 < bT.aK8.length; a6++) {
				aH4.ot(bT.aK8[a6]);
				for (var eo = 0; eo < 2; eo++) {
					var oB = 2 * a6 + eo,
						aH5 = new q1({
							value: bT.aK7[oB],
							oB: -1
						});
					aH5.e.aK9 = oB, aK5.push(aH5), aH5.e.addEventListener("keydown", function(e) {
						e.preventDefault();
						var code = e.code;
						e.target.value = code, bT.aKA(e.target.aK9, code)
					}), eo && (aH5.e.style.marginLeft = "4%"), aH5.e.style.width = "48%", aH4.p2(aH5)
				}
			}
			p6.push(aH4)
		}(p6), (aH4 = new oo).or(L(309)), bf.dk.data[10].qq = [L(309) + " 1", L(310) + " 1", L(309) + " 2", L(310) + " 2"], aH4.oz(new qn(bf.dk.data[10])), p6.push(aH4), (aH4 = new oo).or(L(311)), bf.dk.data[1].qq = [L(312), L(313), L(314), L(315)],
		aH4.oz(new qn(bf.dk.data[1])), p6.push(aH4), (aH4 = new oo).or(L(316)), bf.dk.data[9].qq = [L(313), L(317), L(318)], aH4.oz(new qn(bf.dk.data[9])), p6.push(aH4), (aH4 = new oo).or(L(319)), bf.dk.data[11].qq = [L(320), L(2), L(321)], aH4.oz(
			new qn(bf.dk.data[11])), p6.push(aH4), (aH4 = new oo).or(L(322)), aH4.p2(new po(bf.dk.data[2])), p6.push(aH4), (aH4 = new oo).or(L(323)), aH4.p2(new po(bf.dk.data[7])), p6.push(aH4), (aH4 = new oo).or(L(324)), aH4.p2(new po(bf.dk.data[
			8])), p6.push(aH4), (aH4 = new oo).or(L(325)), aH4.p2(new q1(bf.dk.data[5])), p6.push(aH4), aGo = new p4(aGn.qx, p6)
}

function aGf() {
	var aHV, aHW, aHX, p6;

	function aHY() {
		aHa(), 2 !== a8.data.spawningType || b7.pL.yi(a8.data.spawningData) || (a8.data.spawningType = 0), 2 !== a8.data.spawningType && (a8.data.spawningData = null), n.aGm()[19] = null, n.xS()
	}

	function aHa() {
		2 === a8.data.spawningType && b7.pL.yu(aHX.rL(), a8.data.spawningData, bO.aBd - 1)
	}
	this.show = function() {
		aHV.show(), this.resize()
	}, this.qh = function() {
		aHV.qh()
	}, this.resize = function() {
		aHV.resize(), aHW.resize()
	}, this.yG = function(eq) {
		2 === eq && aHV.qy[0].pS()
	}, aHV = new qr(L(329), [new q("⬅️ " + L(13), aHY)]), aHW = new p4(aHV.qx, (function(p6) {
		var aH4 = new oo,
			qq = (aH4.or(L(199)), [L(224), L(234), L(202)]),
			value = a8.data.spawningType;
		0 === a8.data.gameMode && (qq.splice(1, 1), 0 < value) && (value = 1);
		aH4.oz(new qn({
			qq: qq,
			value: value
		}, function(oB) {
			aHa(), a8.data.spawningType = oB, 0 === a8.data.gameMode && 1 === oB && (a8.data.spawningType = 2), 2 !== a8.data.spawningType || a8.data.spawningData || (a8.data.spawningData = new Uint16Array(2 * a8.eS)), n.o(24)
		})), aH4.p2(new pz), aH4.p2(new po({
			value: a8.data.selectableSpawn
		}, L(330), function(value) {
			a8.data.selectableSpawn = value
		})), p6.push(aH4)
	}(p6 = []), function(p6) {
		var aH4 = new oo;
		aH4.or("Seed"), aH4.p2(new q1({
			oB: -1,
			value: a8.data.spawningSeed
		}, 1, 0, function(e) {
			var value = Math.abs(Math.floor(e.target.value)) % 16384;
			e.target.value = a8.data.spawningSeed = value
		})), p6.push(aH4)
	}(p6), function(p6) {
		var aH4;
		2 === a8.data.spawningType && ((aH4 = new oo).or("Data"), (aHX = new rC(0, 1, 0, 1)).rJ(b7.wv.a0J(a8.data.spawningData, 2)), aH4.p2(aHX), p6.push(aH4))
	}(p6), p6))
}

function aGN() {
	var aGn, aJR, aJS, qs;

	function aKB(id) {
		0 !== r.id || bf.dk.data[140].value ? 0 === id ? n.o(8, 1, new qN(16)) : n.o(2) : n.l7.aJK(n.qM, 0 === id ? 16 : 0)
	}
	this.show = function() {
		r.s.setState(12), aGn.show(), this.resize(), this.iR()
	}, this.qh = function() {
		aGn.qh()
	}, this.resize = function() {
		aGn.resize(), aJR.resize()
	}, this.iR = function() {
		8 === aV.xL() && (2 <= bZ.aKG ? aJS[2].pT === u.mh && aJS[2].pU(0) : aJS[2].pT !== u.mh && aJS[2].pU(u.mh), !a8.gg && aH.a1q(a8.eF) ? aJS[1].pT === u.mh && aJS[1].pU(0) : aJS[1].pT !== u.mh && aJS[1].pU(u.mh), !a8.gg && ar.om(a8.eF) ?
			aJS[0].pT === u.mh && aJS[0].pU(0) : aJS[0].pT !== u.mh && aJS[0].pU(u.mh))
	}, this.yG = function(eq) {
		2 === eq && aGn.qy[0].pS()
	}, aJS = [new q(L(331), function() {
		aKB(0)
	}), new q(L(252), function() {
		n.o(16)
	}), new q(L(287), function() {
		n.o(17)
	}), new q(L(332), function() {
		n.l7.aIO()
	}, 0, 0, 1), new q(L(297), function() {
		n.o(3, 1)
	}), new q(L(333), function() {
		n.o(18)
	}), new q(L(303), function() {
		aKB(1)
	}), new q(L(334), function() {
		n.o(4, 1, new p(L(334), b7.pB.zR([L(343), L(344), "Discord", L(345), L(248), L(346), L(90), L(347), L(348), L(349)], [bG.a85, bG.xF, bG.a86, bG.aKH, bG.aKI, bG.x1, bG.aKJ, bG.aKK, bG.aKL, bG.aJh]), !1, [new q("⬅️ " + L(13),
			function() {
				n.o(1)
			})]))
	}), new q(L(335), function() {
		n.o(4, 1, new p(L(335), de + "<br><a href='" + bG.aKH + "' target='_blank'>" + bG.aKH + "</a>" +
			"<br><br><b>" + "FX Client v" + __fx.version + "<br><a href='https://discord.gg/dyxcwdNKwK' target='_blank'>FX Client Discord server</a>" +
			"<br><a href='https://github.com/fxclient/FXclient' target='_blank'>Github repository</a></b>", !0, [new q("⬅️ " + L(13), function() {
				n.o(1)
			})]))
	}), new q(L(336), function() {
		n.o(4, 1, new p(L(336), L(350) + "<br>" + L(351), !1, [new q("⬅️ " + L(13), function() {
			n.o(1)
		}), new q(L(352), function() {
			r.s.xA(), n.o(1)
		})]))
	}), new q(L(337), function() {
		r.s.xB(), n.o(4, 1, new p(L(353), L(354) + "<a href='" + bG.aJh + "' target='_blank'>" + bG.aJh + "</a>", !1, [new q("⬅️ " + L(13), function() {
			n.o(1)
		})]))
	})], qs = [new q("⬅️ " + L(13), function() {
		n.l7.a7o()
	})], 8 === aV.xL() && (aJS.unshift(new q(L(340), function() {
		2 <= bZ.aKG && (n.rx(), ba.yJ(), bb.dZ = !0)
	}, 0, 1)), aJS.unshift(new q(L(341), function() {
		!a8.gg && aH.a1q(a8.eF) && (b5.gt.nr(), n.rx(), aH.gh) && aH.yJ()
	}, 0, 1)), aJS.unshift(new q(L(342), function() {
		!a8.gg && ar.om(a8.eF) && (b5.gt.nt(), n.rx(), aH.gh) && aH.yJ()
	}, 0, 1))), 1 === r.id && 5 <= r.ez && aJS.push(new q(L(338), function() {
		r.s.xC()
	})), aGn = new qr(L(339), qs), aJR = new pg(aJS, aGn.qx)
}

function aGj() {
	var aHV, aHW, aHX, p6;

	function aHY() {
		aHa(), 2 !== a8.data.sResourcesType && (a8.data.sResourcesData = null), n.aGm()[19] = null, n.xS()
	}

	function aHa() {
		2 === a8.data.sResourcesType && b7.pL.yu(aHX.rL(), a8.data.sResourcesData, 2047)
	}
	this.show = function() {
		aHV.show(), this.resize()
	}, this.qh = function() {
		aHV.qh()
	}, this.resize = function() {
		aHV.resize(), aHW.resize()
	}, this.yG = function(eq) {
		2 === eq && aHV.qy[0].pS()
	}, aHV = new qr(L(240), [new q("⬅️ " + L(13), aHY)]), aHW = new p4(aHV.qx, (function(p6) {
		var aH4 = new oo;
		aH4.or(L(199)), aH4.oz(new qn({
			qq: [L(200), L(201), L(202)],
			value: a8.data.sResourcesType
		}, function(oB) {
			aHa(), 2 !== oB || a8.data.sResourcesData || (a8.data.sResourcesData = new Uint16Array(a8.eS)), a8.data.sResourcesType = oB, n.o(28)
		})), p6.push(aH4)
	}(p6 = []), function(p6) {
		var aH4;
		1 === a8.data.sResourcesType && ((aH4 = new oo).or("Value"), aH4.p2(new q1({
			oB: -1,
			value: a8.data.sResourcesValue
		}, 1, 0, function(e) {
			var value = bH.oj(Math.floor(e.target.value), 0, 2047);
			e.target.value = a8.data.sResourcesValue = value
		})), p6.push(aH4))
	}(p6), function(p6) {
		var aH4;
		2 === a8.data.sResourcesType && ((aH4 = new oo).or("Data"), (aHX = new rC(0, 1, 0, 1)).rJ(b7.wv.a0J(a8.data.sResourcesData, 2)), aH4.p2(aHX), p6.push(aH4))
	}(p6), p6))
}

function aGh() {
	var aHV, aHW, aHX, p6;

	function aHY() {
		aHa(), 2 !== a8.data.tIncomeType && (a8.data.tIncomeData = null), n.aGm()[19] = null, n.xS()
	}

	function aHa() {
		2 === a8.data.tIncomeType && b7.pL.yu(aHX.rL(), a8.data.tIncomeData, 255)
	}
	this.show = function() {
		aHV.show(), this.resize()
	}, this.qh = function() {
		aHV.qh()
	}, this.resize = function() {
		aHV.resize(), aHW.resize()
	}, this.yG = function(eq) {
		2 === eq && aHV.qy[0].pS()
	}, aHV = new qr(L(238), [new q("⬅️ " + L(13), aHY)]), aHW = new p4(aHV.qx, (function(p6) {
		var aH4 = new oo;
		aH4.or(L(199)), aH4.oz(new qn({
			qq: [L(200), L(201), L(202)],
			value: a8.data.tIncomeType
		}, function(oB) {
			aHa(), 2 !== oB || a8.data.tIncomeData || (a8.data.tIncomeData = new Uint8Array(a8.eS), a8.data.tIncomeData.fill(32)), a8.data.tIncomeType = oB, n.o(26)
		})), p6.push(aH4)
	}(p6 = []), function(p6) {
		var aH4;
		1 === a8.data.tIncomeType && ((aH4 = new oo).or("Value"), aH4.p2(new q1({
			oB: -1,
			value: a8.data.tIncomeValue
		}, 1, 0, function(e) {
			var value = bH.oj(Math.floor(e.target.value), 0, 255);
			e.target.value = a8.data.tIncomeValue = value
		})), p6.push(aH4))
	}(p6), function(p6) {
		var aH4;
		2 === a8.data.tIncomeType && ((aH4 = new oo).or("Data"), (aHX = new rC(0, 1, 0, 1)).rJ(b7.wv.a0J(a8.data.tIncomeData, 4)), aH4.p2(aHX), p6.push(aH4))
	}(p6), p6))
}

function aGZ() {
	var aGn, aGo, p6;
	this.show = function() {
		aGn.show(), this.resize()
	}, this.qh = function() {
		aGn.qh()
	}, this.resize = function() {
		aGn.resize(), aGo.resize()
	}, this.yG = function(eq) {
		2 === eq && aGn.qy[0].pS()
	}, aGn = new qr(L(333), [new q("⬅️ " + L(13), function() {
		n.xS()
	})]), aGo = new p4(aGn.qx, ((p6 = []).push(function() {
		function aH8() {
			aKQ.button.textContent = L(138), aKO.e.readOnly = !1, aKP.e.readOnly = !1, aH7.pU(1), aH7.button.style.color = u.mW
		}
		var aH4 = new oo,
			aKN = (aH4.or(L(355)), new q1({
				value: bf.dk.data[105].value,
				oB: -1
			})),
			aKO = (aKN.e.readOnly = !0, aH4.p2(aKN), aH4.or(L(356), "0.8em"), new q1(bf.dk.data[148])),
			aKO = new q1(bf.dk.data[148], 0, void 0, function(e) {
				aH6(bf.dk.data[149].value, e.target.value)
			}),
			aKP = (aH4.p2(aKO), aH4.or(L(278), "0.8em"), new q1(bf.dk.data[149], 1, void 0, function(e) {
				aH6(e.target.value, bf.dk.data[148].value)
			})),
			aKQ = (aH4.p2(aKP), new q(L(138), function(e) {
				return e.textContent === L(138) ? (e.textContent = L(139), aKO.e.readOnly = !0, aKP.e.readOnly = !0, aH7.pU(0), aH7.button.style.color = u.nH, bf.ps.pt(149, aKP.e.value), aH6(bf.dk.data[149].value, bf.dk.data[
					148].value)) : aH8(), !0
			})),
			aH7 = (aH4.p2(new pw([aKQ.button])), new q(L(137), function(e) {
				return aKO.e.readOnly && ax.l7.a8g(0) && (b7.pB.zW(e), aH8(), ax.aH9.aHA({
					qO: 0,
					qK: bf.dk.data[148].value,
					qL: 0,
					value: bH.oj(Math.floor(100 * bf.dk.data[149].value), 0, 4294967295)
				})), !0
			}, 1)),
			ou = (aH4.p2(new pw([aH7.button])), aH4.ot()),
			aH6 = function(ey, os) {
				ey = isNaN(ey) ? 0 : Number(ey);
				var ey = Math.max(ey, (bf.dk.data[150].value + 1) / 100),
					aHD = Math.floor(100 * Math.max(1e-4 * ey, bf.dk.data[150].value / 100)) / 100;
				ou.textContent = L(140, [ey.toFixed(2), bf.dk.data[105].value, aHD.toFixed(2), os, (ey - aHD).toFixed(2)])
			};
		return aH6(bf.dk.data[149].value, bf.dk.data[148].value), aH4
	}()), p6))
}

function bn() {
	"function" != typeof Math.log2 && (Math.log2 = function(ec) {
		return Math.log(ec) / Math.log(2)
	}), "function" != typeof Math.log10 && (Math.log10 = function(ec) {
		return Math.log(ec) / Math.log(10)
	}), "function" != typeof Math.sign && (Math.sign = function(ec) {
		return 0 < ec ? 1 : ec < 0 ? -1 : 0
	})
}

function cY() {
	var a53, aKS, aKT, aKU, aKR = !1;

	function aKV() {
		aKR = !0, a53 = -1, aKS = new Array(4);
		for (var a6 = 3; 0 <= a6; a6--) aKS[a6] = !1;
		var tg = Math.floor(1 + .02 * au.min);
		aKT = new Array(4), (aKU = new Array(4))[1] = aKU[3] = aKT[0] = aKT[2] = 0, aKU[0] = aKT[3] = -tg, aKT[1] = aKU[2] = tg
	}

	function aKW() {
		if (-1 !== a53)
			if (0 !== a8.w5 && aC.mE()) {
				for (var aKX = !1, a6 = 3; 0 <= a6; a6--) aKS[a6] && (aKX = !0, hu += aKT[a6], hw += aKU[a6], aa.xh(aKT[a6], aKU[a6]), aN.a4l());
				aKX ? bb.dZ = !0 : al.m3()
			} else al.m3()
	}
	this.yE = function(oB) {
		0 !== a8.w5 && aC.mE() && (aKR || aKV(), aKS[oB] = !0, -1 === a53) && (a53 = setInterval(aKW, 20), aKW())
	}, this.yH = function(oB) {
		if (0 !== a8.w5 && (aKR || aKV(), aKS[oB] = !1, -1 !== a53)) {
			for (var aKX = !1, a6 = 3; 0 <= a6; a6--) aKX = aKX || aKS[a6];
			aKX || this.m3()
		}
	}, this.m3 = function() {
		if (aKR && -1 !== a53) {
			for (var a6 = 3; 0 <= a6; a6--) aKS[a6] = !1;
			clearInterval(a53), a53 = -1
		}
	}
}

function cZ() {
	this.l7 = new aKY, this.lB = new aKZ, this.nX = new aKa, this.a8n = new aKb, this.a7l = new aKc, this.aH9 = new aKd, this.oA = new aKe, this.aIi = new aKf, this.a2a = new aKg, this.aKh = new aKi, this.aKj = new aKk, this.aKl = new aKm, this.aKn =
		new aKo, this.dR = function() {
			this.l7.dR()
		}
}

function aKY() {
	var aKp, aKr;
	this.a9F = 5, this.a9G = this.a9F - 1, this.a8l = this.a9F + this.a9G, this.a8k = [0, 1, 5, 2, 6, 3, 7, 4, 8], this.aKq = null;

	function du(a6) {
		return aKr[a6].aKR && aKp[a6].du()
	}

	function aKz(xH) {
		aKr[xH].e3 = bb.e3, aKr[xH].aKt = !1
	}
	this.xO = 0, this.xN = 0, this.dR = function() {
		this.aKq = new Array(this.a9F);
		this.aKq[0] = "territorial.io";
		var a6, aEH = av.aEd(0);
		for (av.a0f(0), a6 = 1; a6 < this.a9F; a6++) this.aKq[a6] = aF.vh() + ".territorial.io";
		for (av.a0f(aEH), aKp = new Array(this.a8l), aKr = new Array(this.a8l), a6 = this.a8l - 1; 0 <= a6; a6--) aKr[a6] = {
			aKR: !1,
			e3: 0,
			aKt: !1
		};
		this.a8m(0, 0)
	}, this.aKu = function(a6) {
		return aKp[a6]
	}, this.aKv = function() {
		return this.xN < this.a9F ? this.xN : this.xN - this.a9G
	}, this.iR = function() {
		for (var a6 = this.a8l - 1; 0 <= a6; a6--) this.a8g(a6) && bb.e3 > aKr[a6].e3 + 15e3 && ax.nX.aKw(a6, aKr[a6].aKt);
		!this.a8g(0) && bb.e3 > aKr[0].e3 + 8e3 && (aKr[0].e3 = bb.e3, this.a8m(0, 0))
	}, this.a8m = function(xH, aGL) {
		if (aKr[xH].aKR) {
			if (aKp[xH].du()) return aKp[xH].aKy(aGL), aKp[xH].a8g();
			aKp[xH].qh()
		}
		return this.aKx(xH, aGL), !1
	}, this.aKx = function(xH, aGL) {
		aKr[xH].aKR = !0, aKz(xH), aKp[xH] = new aL0, aKp[xH].dR(xH, aGL)
	}, this.aKy = function(xH, aGL) {
		du(xH) && aKp[xH].aKy(aGL)
	}, this.aL1 = function(xH, aGL) {
		ax.a7l.aL2(xH)
	}, this.a8g = function(a6) {
		return aKr[a6].aKR && aKp[a6].a8g()
	}, this.send = function(xH, a7) {
		a7.length, aKz(xH), aKp[xH].send(a7)
	}, __fx.customLobby.setSendFunction(this.send), this.xy = function(xH) {
		8 === aV.xL() && (aKr[xH].aKt = !0, ax.lB.aL3 = !0)
	}, this.close = function(xH, aL4) {
		du(xH) && aKp[xH].close(aL4)
	}, this.aL5 = function(xH, aL4) {
		l.xT(aL4), du(xH) && aKp[xH].close(aL4)
	}, this.xW = function(aL4) {
		for (var a6 = this.a8l - 1; 0 <= a6; a6--) this.close(a6, aL4)
	}, this.aL6 = function(xH, aL4) {
		for (var a6 = this.a8l - 1; 0 <= a6; a6--) a6 !== xH && this.close(a6, aL4)
	}, this.a0r = function() {
		this.close(this.xO, 3246)
	}, this.aL7 = function(xH, e) {
		aKp[xH].qh(), l.xG(xH, e.code)
	}
}

function aKZ() {
	this.aL3 = !1, this.iR = function() {
		bb.jZ() % 250 != 249 || a8.gg || (ax.a7l.aL8(+(this.aL3 && ab.lT[a8.eF]), ag.jd + bJ.l7.oO), this.aL3 = !1)
	}
}

function aKg() {
	function aLU(aLW) {
		var eY = a8.data,
			aLW = (eY.selectedPlayer = bD.oC(aLW), eY.spawningSeed = bD.oC(14), bD.oC(4)),
			aLW = (aLW < 7 ? (eY.gameMode = 1, eY.numberTeams = aLW + 2) : 9 === aLW ? (eY.gameMode = eY.isZombieMode = 1, eY.numberTeams = 2) : (eY.gameMode = 0, eY.battleRoyaleMode = 7 === aLW ? 0 : 10 === aLW ? 1 : 2), eY.isContest = bD.oC(1), bD
				.oC(6));
		return eY.mapType = bO.aEI(aLW) ? 0 : 1, bO.aES(eY, aLW), eY.mapSeed = bD.oC(14), aLW
	}
	this.aLA = function(xH, a7) {
		bD.dR(a7), 0 === bD.size ? ax.l7.aL5(xH, 3205) : __fx.customLobby.isCustomMessage(a7) || ((0 === bD.oC(1) ? function(xH) {
			var aLE = bD.oC(6);
			0 === aLE ? function(xH) {
					if (0 === xH && 8 !== aV.xL()) {
						n.l7.aJi();
						for (var aLO = bD.oC(12), aLP = bD.oC(6), g = new Array(aLO), a6 = 0; a6 < aLO; a6++) g[a6] = bD.oC(aLP);
						aO.a5A(g)
					}
				}(xH) : 2 === aLE ? ax.aKh.aLG(xH) : 3 === aLE || 4 === aLE ? at.dR() : 9 === aLE ? ax.aKj.aLH(xH) : 10 === aLE ? ax.aKl.aLI() : 11 === aLE ? ax.aKj.aLJ() : 12 === aLE ? ax.aKl.aLK() : 13 === aLE ? ax.aKn.aLL() :
				14 === aLE ? ax.aKn.aLM() : 15 === aLE && ax.aKj.aLN()
		} : function(xH) {
			if (8 !== aV.xL() && !at.a9H()) return;
			if (xH !== ax.l7.xO) ax.l7.aL5(xH, 3244);
			else if (0 === bD.oC(1)) bb.wE.aLX(bD.a7);
			else {
				var a6, xH = bD.oC(2);
				if (0 === xH) {
					var nl, nX = bD.oC(9);
					0 !== ab.lT[nX] && 0 !== ab.lT[a8.eF] && (nl = bD.oC(10), aI.nk(nX, a8.eF, nl), aa.ok(nX, 1, nl))
				} else if (1 === xH) ! function() {
					var nX = bD.oC(9);
					0 !== ab.lT[nX] && 0 !== ab.lT[a8.eF] && b2.aE1(0, [nX], !0) && aI.o3(nX, 1)
				}();
				else if (2 === xH) ! function() {
					var nX = bD.oC(9),
						target = bD.oC(9);
					0 !== ab.lT[nX] && 0 !== ab.lT[target] && 0 !== ab.lT[a8.eF] && b2.aE1(1, [nX], !0) && (aa.ok(nX, 3, 96), aa.ok(target, 4, 96), aI.a2h(nX, target))
				}();
				else if (a4 && !a5) {
					var eV = 540;
					for (b9.a2(17287), b9.a3(1, 0), b9.a3(6, 10), eV = Math.min(b5.nU.oE.length, 540), a6 = 0; a6 < eV; a6++) b9.aLd(32, b5.nU.oE[a6]);
					ax.l7.send(ax.l7.xO, b9.a7)
				}
			}
		})(xH), bb.aLD())
	}, this.a9I = function(a7) {
		if (bD.dR(a7), bD.oB = 1, 3 === bD.oC(6)) {
			bD.oB += 20;
			var eY = a8.data = new a0Z,
				a7 = aLU(9),
				aLV = eY.humanCount = bD.oC(9) + 1;
			eY.selectableSpawn = 1 === eY.gameMode || aLV < 100, eY.colorsData = new Uint32Array(aLV), eY.playerNamesData = new Array(aLV);
			for (var a6 = 0; a6 < aLV; a6++) bD.oB++, eY.colorsData[a6] = bD.oC(18), eY.playerNamesData[a6] = bC.sI.sK(bD.oC(5));
			aV.a90(), bO.a2(a7, eY.mapSeed), a8.a0d()
		} else ! function() {
			bD.oB += 20;
			var eY = a8.data = new a0Z,
				a9x = aLU(1);
			eY.humanCount = 2;
			eY.selectableSpawn = 1, eY.elo = new Uint16Array(2), eY.colorsData = new Uint32Array(2), eY.playerNamesData = new Array(2);
			for (var a6 = 0; a6 < 2; a6++) bD.oB++, eY.colorsData[a6] = bD.oC(18), eY.elo[a6] = bD.oC(14), eY.playerNamesData[a6] = bC.sI.sK(bD.oC(5));
			aV.a90(), bO.a2(a9x, eY.mapSeed), a8.a0d()
		}()
	}, this.a9D = function() {
		bD.oB = 1;
		var aLE = bD.oC(6),
			aLS = bD.oC(10);
		return ax.l7.xN > ax.l7.a9G && (aLS += ax.l7.a9G), ax.l7.xN === aLS ? (ax.l7.xO = aLS, !1) : (ax.l7.close(ax.l7.xN, 3247), ax.l7.xO = aLS, at.a98 = bD.oC(10), at.a99 = bD.oC(3 === aLE ? 9 : 1), ax.l7.a8m(aLS, 5) && ax.nX.aLT(), !0)
	}
}

function aKm() {
	this.aLI = function() {
		bf.l7.rp(), bf.ps.pt(105, bB.qP.qQ(bB.qP.qR(5))), bf.ps.pt(106, bB.qP.qQ(bB.qP.qR(8))), bf.ps.pt(109, bD.oC(30)), bf.ps.pt(108, bf.dk.data[109].value), bf.ps.pt(111, bf.dk.data[109].value + 1), bf.ps.pt(107, 0), bf.ps.pt(110, "")
	}, this.aLK = function() {
		var aLg, aLh, aLi, aLj, aLf;
		bD.size < b9.aLe(29) ? ax.l7.aL5(0, 3254) : (aLf = bD.oC(5), aLg = bD.oC(3), aLh = bD.oC(3), aLi = bD.oC(3), aLj = bD.oC(8), bD.aLk(197 + 16 * (aLf + aLg + aLh + aLi + aLj) + 32 + 32 + 30 + 128 + 32 + 30 + 10 + 32 + 2 + 10 + 5) ? (aLf = {
			qL: bD.oC(30),
			s3: bD.oC(16),
			s4: bD.oC(30),
			s5: bD.oC(30),
			s6: bD.oC(30),
			s7: bD.aLl(32),
			username: bC.sI.sK(aLf),
			s8: bC.sI.sK(aLg),
			s9: bC.sI.sK(aLh),
			sA: bD.aLl(32),
			sB: bD.aLl(32),
			sC: bD.oC(30),
			sD: bD.aLl(32),
			sE: bD.aLl(32),
			sF: bD.aLl(32),
			sG: bD.aLl(32),
			aHJ: bD.aLl(32),
			aHK: bD.aLl(30),
			aHC: bD.aLl(10),
			aHS: bD.aLl(32),
			aHT: bC.sI.sK(aLi),
			aHN: bD.aLl(2),
			aHO: bD.aLl(10),
			aHL: bC.sI.sK(aLj),
			aHP: bD.aLl(5)
		}, bf.ps.pt(150, aLf.aHC), 8 === n.qM && (25 === n.aAW().aId ? (aLf.aGp = !0, n.l7.aGW = aLf, n.aAW().aIs(25, !1)) : (aLf.aGp = !1, aLf.qK = bf.dk.data[105].value, n.l7.aGT = aLf, bf.ps.s2(aLf), n.aAW().aIs(16, !0)))) : ax.l7.aL5(
			0, 3267))
	}
}

function aKo() {
	this.aLL = function() {
		var a6;
		if (bD.size < b9.aLe(39)) ax.l7.aL5(0, 3259);
		else {
			var qd = bD.oC(6),
				eV = bD.oC(10),
				hA = bD.oC(16);
			if (bD.aLk(39 + 16 * hA + eV * (0 === qd ? 111 : 1 === qd ? 101 : 2 === qd || 3 === qd ? 127 : 212))) {
				var data = [];
				if (0 === qd)
					for (a6 = 0; a6 < eV; a6++) data.push([bD.oC(30), bC.sI.sK(bD.oC(5)), bD.oC(16), bD.oC(30), bD.oC(30)]);
				else if (1 === qd)
					for (a6 = 0; a6 < eV; a6++) data.push([bD.oC(16), bC.sI.sK(bD.oC(3)), bD.oC(16), bC.sI.sK(bD.oC(5)), bD.oC(31), bD.oC(30)]);
				else if (2 === qd || 3 === qd)
					for (a6 = 0; a6 < eV; a6++) data.push([bD.oC(30), bC.sI.sK(bD.oC(5)), bD.aLl(32), bD.oC(30), bD.oC(30)]);
				else
					for (a6 = 0; a6 < eV; a6++) data.push([bD.oC(20), bD.oC(30), bD.oC(30), bD.oC(30), bD.oC(30), bD.aLl(32), bD.oC(30), bC.sI.sK(bD.oC(5)), bC.sI.sK(bD.oC(5))]);
				8 === n.qM && n.aAW().aIs(21, !0, {
					qd: qd,
					data: data
				})
			} else ax.l7.aL5(0, 3260)
		}
	}, this.aLM = function() {
		if (bD.size < b9.aLe(29)) ax.l7.aL5(0, 3265);
		else {
			var aLm = bD.oC(4),
				aLn = bD.oC(7),
				aLo = bD.oC(11);
			if (bD.aLk(29 + 16 * aLn + 16 * aLo + 11 * aLm)) {
				for (var data = [], a6 = 0; a6 < aLm; a6++) {
					for (var aLp = bC.sI.sK(bD.oC(3)), aLq = bD.oC(8), aHy = [], eo = 0; eo < aLq; eo++) aHy.push(bD.oC(16));
					data.push({
						name: "[" + aLp + "]",
						aHy: aHy
					})
				}
				8 === n.qM && n.aAW().aIs(23, !0, data)
			} else ax.l7.aL5(0, 3266)
		}
	}
}

function aKi() {
	this.aLG = function(xH) {
		var a6, a9Z, aLr, aLs, aLt;
		if (xH !== ax.l7.xN) ax.l7.close(xH, 3239);
		else if (6 === aV.xL() && ap.dR(), 7 !== aV.xL()) ax.l7.close(xH, 3251);
		else {
			for (a9Z = [0, 0, 0, 0], aLr = bD.oC(6), a6 = 0; a6 < 4; a6++) a9Z[a6] = bD.oC(aLr);
			for (aLs = bD.oC(4), aLt = [], a6 = 0; a6 < aLs; a6++) {
				aLt.push({
					id: bD.oC(5),
					a9v: bD.oC(4),
					isContest: 1 === bD.oC(1),
					eB: bD.oC(6),
					mapSeed: bD.oC(14),
					a9z: bD.oC(aLr),
					aA0: bD.oC(9) + 1,
					a8v: bD.oC(10)
				});
				for (var aA1 = bD.oC(3), aA2 = new Array(aA1), aA3 = new Array(aA1), eo = 0; eo < aA1; eo++) aA3[eo] = bD.oC(9) + 1, aA2[eo] = bC.sI.sK(bD.oC(3));
				aLt[a6].aA1 = aA1, aLt[a6].aA2 = aA2, aLt[a6].aA3 = aA3
			}
			ap.pt(a9Z, aLt)
		}
	}
}

function aKk() {
	this.aLH = function(xH) {
		var aLZ, aLu;
		bD.aLk(70) ? (aLZ = bD.oC(3), aLu = be.aLv.iR(bD.oC(30), bD.oC(30)), ax.a7l.aLw(xH, aLu, aLZ), 0 < aLZ || (0 === xH && 0 === bf.dk.data[105].value.length ? ax.a7l.aIg(0) : ax.aH9.aLx(xH), 4 === ax.l7.aKu(xH).aLy() ? 6 === aV.xL() && ax
			.a8n.a8o(xH) : 5 !== ax.l7.aKu(xH).aLy() || 8 !== aV.xL() && 10 !== aV.xL() || ax.nX.aLT())) : ax.l7.aL5(xH, 3269)
	}, this.aLJ = function() {
		var id = bD.oC(6);
		0 === id ? (aO.a56 || ax.a7l.aIg(1), b4.a7j(), 8 === n.qM && n.aAW().aIr()) : 21 === id ? 8 === n.qM && n.aAW().aIs(17) : 22 === id && (bf.ps.pt(106, bf.dk.data[110].value), bf.ps.pt(110, ""), 8 === n.qM) && n.aAW().aIs(16)
	}, this.aLN = function() {
		var eV = bD.oC(16),
			aLz = bD.oC(16);
		if (bD.aLk(55 + 10 * eV + 16 * aLz)) {
			for (var g = [], a6 = 0; a6 < eV; a6++) g.push(bC.sI.sK(bD.oC(10)));
			b4.a7n(g)
		} else ax.l7.aL5(xH, 3270)
	}
}

function aKa() {
	this.aKw = function(xH, aKt) {
		b9.a2(8), b9.a3(1, 0), b9.a3(6, 4), b9.a3(1, aKt ? 1 : 0), ax.l7.send(xH, b9.a7)
	}, this.aLT = function() {
		b9.a2(58), b9.a3(1, 0), b9.a3(6, 5), b9.a3(8, ax.l7.aKv()), b9.a3(10, at.a98), b9.a3(9, at.a99), b9.a3(10, dg), b9.a3(14, h.dh), ax.l7.send(ax.l7.xO, b9.a7)
	}, this.nY = function(eH) {
		b9.a2(27), b9.a3(1, 1), b9.a3(4, 0), b9.a3(22, eH), ax.l7.send(ax.l7.xO, b9.a7)
	}, this.nZ = function(ht, ik) {
		b9.a2(25), b9.a3(1, 1), b9.a3(4, 1), b9.a3(10, ht), b9.a3(10, ik), ax.l7.send(ax.l7.xO, b9.a7)
	}, this.nd = function(ht, nb) {
		b9.a2(24), b9.a3(1, 1), b9.a3(4, 2), b9.a3(10, ht), b9.a3(9, nb), ax.l7.send(ax.l7.xO, b9.a7)
	}, this.ne = function(ht, eH) {
		b9.a2(37), b9.a3(1, 1), b9.a3(4, 3), b9.a3(10, ht), b9.a3(22, eH), ax.l7.send(ax.l7.xO, b9.a7)
	}, this.nh = function(lr, eH) {
		b9.a2(37), b9.a3(1, 1), b9.a3(4, 4), b9.a3(10, lr), b9.a3(22, eH), ax.l7.send(ax.l7.xO, b9.a7)
	}, this.nj = function(ik) {
		b9.a2(15), b9.a3(1, 1), b9.a3(4, 5), b9.a3(10, ik), ax.l7.send(ax.l7.xO, b9.a7)
	}, this.nn = function(oB) {
		b9.a2(15), b9.a3(1, 1), b9.a3(4, 6), b9.a3(10, oB), ax.l7.send(ax.l7.xO, b9.a7)
	}, this.nq = function(np) {
		b9.a2(6), b9.a3(1, 1), b9.a3(4, 7), b9.a3(1, np), ax.l7.send(ax.l7.xO, b9.a7)
	}, this.ns = function() {
		b9.a2(5), b9.a3(1, 1), b9.a3(4, 8), ax.l7.send(ax.l7.xO, b9.a7)
	}, this.nu = function(ht, eH, ik) {
		b9.a2(47), b9.a3(1, 1), b9.a3(4, 10), b9.a3(10, ht), b9.a3(10, ik), b9.a3(22, eH), ax.l7.send(ax.l7.xO, b9.a7)
	}, this.o1 = function(aM0, aM1) {
		b9.a2(24), b9.a3(1, 1), b9.a3(4, 15), b9.a3(9, aM1), b9.a3(10, aM0), ax.l7.send(ax.l7.xO, b9.a7)
	}, this.o4 = function(a2a) {
		b9.a2(14), b9.a3(1, 1), b9.a3(4, 14), b9.a3(9, a2a), ax.l7.send(ax.l7.xO, b9.a7)
	}, this.o8 = function(aM2, target) {
		var a6, eV = aM2.length;
		for (b9.a2(14 + 9 * eV), b9.a3(1, 1), b9.a3(4, 13), b9.a3(9, target), a6 = 0; a6 < eV; a6++) b9.a3(9, aM2[a6]);
		ax.l7.send(ax.l7.xO, b9.a7)
	}
}

function aKd() {
	this.aM3 = function() {
		b9.a2(39), b9.a3(1, 0), b9.a3(6, 16), ax.a7l.aM4(), ax.l7.send(0, b9.a7)
	}, this.aLx = function(xH) {
		b9.a2(115), b9.a3(1, 0), b9.a3(6, 17), bC.qP.sW(bf.dk.data[105].value, 5), bC.qP.sW(bf.dk.data[106].value, 8), b9.a3(30, bf.dk.data[109].value), ax.l7.send(xH, b9.a7)
	}, this.aIu = function() {
		b9.a2(55), b9.a3(1, 0), b9.a3(6, 18), bC.qP.sV(bf.dk.data[110].value), ax.l7.send(0, b9.a7)
	}, this.aIh = function(username) {
		b9.a2(12 + 16 * username.length), b9.a3(1, 0), b9.a3(6, 20), ax.a7l.aM6(username), ax.l7.send(0, b9.a7)
	}, this.aIq = function(zx) {
		var eV = zx.os.length;
		b9.a2(21 + 16 * eV), b9.a3(1, 0), b9.a3(6, 29), b9.a3(6, zx.qO), b9.a3(8, eV), bB.sI.sV(zx.os), ax.l7.send(0, b9.a7)
	}, this.aHH = function(data) {
		b9.a2(73), b9.a3(1, 0), b9.a3(6, 25), b9.a3(6, data.qO), bC.qP.sW(data.qK, 5), b9.a3(30, data.qL), ax.l7.send(0, b9.a7)
	}, this.aHA = function(data) {
		b9.a2(105), b9.a3(1, 0), b9.a3(6, 27), b9.a3(6, data.qO), bC.qP.sW(data.qK, 5), b9.a3(30, data.qL), b9.aLd(32, data.value), ax.l7.send(0, b9.a7)
	}
}

function aKe() {
	this.o9 = function() {
		var g4, eV = a8.jc,
			vx = bN.result.vx,
			aM7 = vx.length,
			wj = (b9.a2(40 + 16 * eV + aM7 * (33 + 3 * (a8.jw < 7))), b9.a3(1, 1), b9.a3(4, 12), b9.a3(10, aM7), b9.a3(1, +(2 === a8.w2)), b9.a3(24, bN.result.wW), ab.wj);
		for (a6 = 0; a6 < eV; a6++) b9.a3(16, wj[a6]);
		var gK = ab.gK;
		for (a6 = 0; a6 < aM7; a6++) g4 = vx[a6], b9.a3(9, g4), b9.a3(24, gK[g4]);
		if (a8.jw < 7)
			for (var eT = bc.eT, k2 = bc.k2, a6 = 0; a6 < aM7; a6++) b9.a3(3, 7 & k2[eT[vx[a6]]]);
		ax.l7.send(ax.l7.xO, b9.a7)
	}
}

function aKf() {
	this.aIj = function(qd, qe, qf) {
		b9.a2(75), b9.a3(1, 0), b9.a3(6, 21), b9.a3(6, qd), b9.a3(1, +(qe < 0)), b9.a3(1, +(qf < 0)), b9.a3(30, Math.abs(qe)), b9.a3(30, Math.abs(qf)), ax.l7.send(0, b9.a7)
	}, this.aIk = function(qd, aIl, aIm) {
		b9.a2(18 + 16 * aIl.length + 30), b9.a3(1, 0), b9.a3(6, 22), b9.a3(6, qd), ax.a7l.aM6(aIl), b9.a3(30, aIm), ax.l7.send(0, b9.a7)
	}, this.aIp = function(qd, aIl, aIm) {
		b9.a2(73), b9.a3(1, 0), b9.a3(6, 28), b9.a3(6, qd), bC.qP.sW(aIl, 5), b9.a3(30, aIm), ax.l7.send(0, b9.a7)
	}, this.aIn = function(aHx, wr) {
		for (var eV = wr.length, hA = 0, a6 = 0; a6 < eV; a6++) hA += wr[a6].length;
		for (b9.a2(21 + 3 * eV + 16 * hA), b9.a3(1, 0), b9.a3(6, 23), b9.a3(3, aHx), b9.a3(4, eV), b9.a3(7, hA), a6 = 0; a6 < eV; a6++) b9.a3(3, wr[a6].length), bB.sI.sV(wr[a6]);
		ax.l7.send(0, b9.a7)
	}, this.aIo = function(aHx, qe, qf) {
		b9.a2(52), b9.a3(1, 0), b9.a3(6, 24), b9.a3(3, aHx), b9.a3(1, +(qe < 0)), b9.a3(1, +(qf < 0)), b9.a3(20, Math.abs(qe)), b9.a3(20, Math.abs(qf)), ax.l7.send(0, b9.a7)
	}
}

function aKb() {
	this.a8o = function(xH) {
		var username = bf.dk.data[122].value.slice(0, 20),
			username = (b9.a2(22 + 16 * username.length + 18), b9.a3(1, 0), b9.a3(6, 1), b9.a3(10, dg), ax.a7l.aM6(username), b7.color.z7(bf.l7.rw()));
		b9.a3(6, username[0]), b9.a3(6, username[1]), b9.a3(6, username[2]), ax.l7.xN = xH, ax.l7.send(xH, b9.a7)
	}, this.aA8 = function(a9u) {
		return b9.a2(11), b9.a3(1, 0), b9.a3(6, 2), b9.a3(4, a9u), ax.l7.send(ax.l7.xN, b9.a7), !0
	}
}

function aKc() {
	this.aL2 = function(xH) {
		b9.a2(39), b9.a3(1, 0), b9.a3(6, 13), b9.a3(14, h.dh), b9.a3(4, r.id), b9.a3(7, r.ez), b9.a3(1, +a4), b9.a3(1, +a5), b9.a3(5, (new Date).getHours() % 24), ax.l7.send(xH, b9.a7)
	}, this.aLw = function(xH, aLu, aLZ) {
		b9.a2(70), b9.a3(1, 0), b9.a3(6, 14), b9.a3(3, aLZ), b9.a3(30, aLu[0]), b9.a3(30, aLu[1]), ax.l7.send(xH, b9.a7)
	}, this.aIg = function(id) {
		b9.a2(13), b9.a3(1, 0), b9.a3(6, 15), b9.a3(6, id), ax.l7.send(0, b9.a7)
	}, this.a7m = function(id, os) {
		var eV = Math.min(os.length, 63);
		b9.a2(19 + 16 * eV), b9.a3(1, 0), b9.a3(6, 26), b9.a3(6, id), b9.a3(6, eV), bB.sI.sV(os), ax.l7.send(0, b9.a7)
	}, this.aM9 = function(aLS, p3) {
		b9.a2(7 + 26 * p3.length), b9.a3(1, 0), b9.a3(6, 9);
		for (var a6 = 0; a6 < p3.length; a6++) b9.a3(16, p3[a6][0]), b9.a3(10, p3[a6][1]);
		ax.l7.send(aLS, b9.a7)
	}, this.aL8 = function(aMA, aMB) {
		b9.a2(20), b9.a3(1, 0), b9.a3(6, 19), b9.a3(1, aMA), b9.a3(12, aMB), ax.l7.send(ax.l7.xO, b9.a7)
	}, this.aM6 = function(username) {
		b9.a3(5, username.length), bB.sI.sV(username)
	}
}

function aL0() {
	var xH, aGL, aMC, aMD = ["wss://", "/s50/", "/s51/", "/s52/"];

	function aL1() {
		ax.l7.aL1(xH, aGL)
	}

	function aMI(e) {
		ax.a2a.aLA(xH, new Uint8Array(e.data))
	}

	function aMJ() {}

	function aL7(e) {
		ax.l7.aL7(xH, e)
	}
	this.dR = function(oB, aME) {
		xH = oB, aGL = aME;
		oB = aMD[0];
		xH < ax.l7.a9F ? oB += ax.l7.aKq[xH] + aMD[1 + dd] : oB += ax.l7.aKq[0] + "/i" + (1 + dd) + (xH - ax.l7.a9G) + "/", (aMC = new WebSocket(__fx.customLobby.isActive() && xH === 1 ? __fx.customLobby.getSocketURL() : oB)).binaryType =
			"arraybuffer", aMC.onopen = aL1, aMC.onmessage = aMI, aMC.onclose = aL7, aMC.onerror = aMJ
	}, this.aMG = function() {
		return aMC.readyState === aMC.CONNECTING
	}, this.a8g = function() {
		return aMC.readyState === aMC.OPEN
	}, this.du = function() {
		return this.aMG() || this.a8g()
	}, this.aKy = function(aME) {
		aGL = aME
	}, this.aLy = function() {
		return aGL
	}, this.send = function(a7) {
		this.a8g() && aMC.send(a7)
	}, this.close = function(aL4) {
		this.du() && (aMC.close(aL4), this.qh())
	}, this.qh = function() {
		aMC.onopen = null, aMC.onmessage = null, aMC.onclose = null, aMC.onerror = null
	}
}

function dC() {
	var aMK = !1,
		a2v = 0,
		a0 = 0,
		qU = 0,
		gap = 0,
		canvas = null,
		uR = null,
		yj = null;

	function aMM() {
		for (var a9k, aMQ = 0, eV = 0, eq = Math.floor(a0 / 2), hH = Math.floor(qU / 2), a9j = 1.5 * Math.PI, a6 = a8.tV; 0 <= a6; a6--) eV += yj[a6], 0 === yj[a6] && aMQ++;
		if (aMK = !1, uR.clearRect(0, 0, a0, a0), uR.fillStyle = u.mT, uR.fillRect(0, 0, a0, a0), uR.fillStyle = u.mW, uR.fillRect(0, 0, a0, gap), uR.fillRect(0, 0, gap, a0), uR.fillRect(a0 - gap, 0, gap, a0), uR.fillRect(0, a0 - gap, a0, gap), 0 <
			eV)
			if (aMQ === a8.tV) {
				for (a6 = a8.tV; 0 <= a6; a6--)
					if (0 < yj[a6]) {
						! function(a6, eq, hH) {
							uR.fillStyle = bc.a9o[bc.k2[a6]], uR.beginPath(), uR.arc(eq, eq, hH, 0, 2 * Math.PI), uR.fill()
						}(a6, eq, hH);
						break
					}!
				function(eq) {
					var fontSize = eq / 3;
					uR.font = b7.pB.qS(1, fontSize), uR.fillStyle = u.mW, uR.fillText("100%", eq, eq + .1 * fontSize)
				}(eq)
			} else {
				for (a6 = 0; a6 <= a8.tV; a6++) 0 < yj[a6] && (! function(a6, eq, hH, a9j, a9k) {
					uR.fillStyle = bc.a9o[bc.k2[a6]], uR.beginPath(), uR.arc(eq, eq, hH, a9j, a9k), uR.lineTo(eq, eq), uR.fill()
				}(a6, eq, hH, a9j, a9k = a9j + 2 * Math.PI * yj[a6] / eV), function(eq, hH, a9j, a9k) {
					var ey = (a9k - a9j) / (2 * Math.PI),
						fontSize = +hH * Math.min(ey, .37);
					fontSize < 8 || (a9j = (a9j + a9k) / 2, a9k = Math.floor(100 * ey + .5) + "%", hH *= .525 - Math.max(.6 * (ey - .7), 0), uR.font = b7.pB.qS(1, fontSize), uR.fillStyle = u.mW, uR.fillText(a9k, eq + Math.cos(a9j) * hH, eq +
						Math.cos(a9j + 1.5 * Math.PI) * hH))
				}(eq, hH, a9j, a9k), 0 !== a6 && a9m(eq, hH, a9j), a9j = a9k);
				a9m(eq, hH, 1.5 * Math.PI)
			}!
		function(eq, hH) {
			uR.beginPath(), uR.arc(eq, eq, hH, 0, 2 * Math.PI), uR.stroke()
		}(eq, hH)
	}

	function a9m(eq, hH, a9p) {
		uR.beginPath(), uR.moveTo(eq, eq), uR.lineTo(eq + Math.cos(a9p) * hH, eq + Math.cos(a9p + 1.5 * Math.PI) * hH), uR.stroke()
	}
	this.dR = function() {
		if (a8.ic) {
			a2v = 0, yj = new Uint32Array(a8.tV + 1);
			for (var a6 = a8.tV; 0 <= a6; a6--) yj[a6] = 0;
			for (a6 = ag.jd - 1; 0 <= a6; a6--) yj[bc.eT[ag.jf[a6]]] += 1;
			this.resize()
		} else yj = uR = canvas = null
	}, this.a3j = function() {
		return a0
	}, this.resize = function() {
		a8.ic && (a0 = Math.floor(r.s.v9() && !a8.ly ? .18 * au.min : .13 * au.pD), a0 = (a0 *= 1 + (.5 + .2 * r.s.v9()) * a8.ly) + a0 % 2, qU = Math.floor(7 * a0 / 8), (canvas = canvas || document.createElement("canvas")).width = a0, canvas
			.height = a0, uR = canvas.getContext("2d", {
				alpha: !0
			}), gap = Math.max(1, .015 * a0), uR.lineWidth = gap, uR.strokeStyle = u.mW, b7.pB.textAlign(uR, 1), b7.pB.textBaseline(uR, 1), aMM())
	}, this.wf = function() {
		var e4, kp = this.kq();
		return bc.k2[kp] || (kp = function() {
			for (var kp = -1, a6 = a8.tV; 1 <= a6; a6--)(-1 === kp || yj[a6] > yj[kp]) && (kp = a6);
			return kp
		}(), e4 = ab.gK[kt[0]], -1 !== kp && yj[kp] > e4) ? yj[kp] : e4
	}, this.x5 = function() {
		return a2v = 31, this.iR(), this.kq()
	}, this.kq = function() {
		for (var kp = 0, a6 = a8.tV; 0 < a6; a6--) yj[a6] > yj[kp] && (kp = a6);
		return kp
	}, this.kr = function(aMO) {
		for (var fz = 0, je = ag.jf, eT = bc.eT, eV = ag.jd, fA = bK.fA, a6 = 0; a6 < eV; a6++) {
			var g4 = je[a6];
			eT[g4] === aMO && (fA[fz++] = g4)
		}
		bK.f2[0] = fz
	}, this.iR = function() {
		if (a8.ic && 32 <= ++a2v) {
			a2v = 0;
			for (var a6 = a8.tV; 0 <= a6; a6--) yj[a6] = 0;
			for (a6 = ag.jd - 1; 0 <= a6; a6--) yj[bc.eT[ag.jf[a6]]] += ab.gK[ag.jf[a6]];
			aMK = !0
		}
	}, this.lG = function() {
		a8.ic && aMK && aMM()
	}, this.rA = function() {
		a8.ic && (a8.ly ? rB.drawImage(canvas, bY.gap, bY.gap) : rB.drawImage(canvas, bY.gap, a3k + 2 * bY.gap))
	}
}

function cv() {
	function aMV(key) {
		var aJx;
		return "undefined" == typeof URLSearchParams || (aJx = window.location.search, "string" != typeof(aJx = new URLSearchParams(aJx).get(key))) || aJx.length < 1 ? null : aJx
	}
	this.da = function() {
		if (0 !== r.id) return !1;
		if (! function() {
				var value = aMV("account");
				if (!value && !(value = aMV("a"))) return void bE.clear();
				return bE.clear(), n.o(8, n.qM, new qN(1e3, {
					qO: 0,
					qK: value,
					qL: 0
				})), 1
			}()) {
			var value = aMV("replay");
			if (!this.clear()) return !1;
			if (!value) return !1;
			n.o(3, 0, value)
		}
		return !0
	}, this.clear = function() {
		var xE = new URL(window.location.href);
		xE.search = "";
		try {
			return history.replaceState(null, "", xE.toString()), !0
		} catch (e) {
			console.log("error 352: " + e)
		}
		return !1
	}, this.aHU = function(key, value) {
		if (0 === r.id) try {
			var xE = new URL(window.location.href),
				g4 = xE.searchParams;
			g4.set(key, value), xE.search = g4.toString(), history.replaceState(null, "", xE.toString())
		} catch (e) {
			console.log("error 358: " + e)
		}
	}
}

function ca() {
	var aMX, g;
	this.dR = function() {
		for (var a6 = (g = new Uint16Array(101)).length - 1; 0 <= a6; a6--) g[a6] = bH.ex(32768 * a6, 100);
		this.a0f(0)
	}, this.value = function(g4) {
		return g[g4]
	}, this.aEd = function() {
		return bH.ex(aMX - 1, 2)
	}, this.a0f = function(aEH) {
		aMX = 2 * aEH % 32768 + 1
	}, this.random = function() {
		return aMX = 167 * aMX % 32768
	}, this.iu = function(lO) {
		return bH.ex(lO * this.random(), 32768)
	}, this.jU = function(g4) {
		return 0 !== g4 && this.random() < this.value(g4)
	}, this.iD = function(eo, ep) {
		return eo + this.iu(ep - eo)
	}
}

function cr() {
	this.oQ = new aMY, this.a0q = new aMZ, this.aC2 = new aMa, this.dR = function() {
		a8.gg || this.oQ.dR()
	}, this.iR = function() {
		a8.gg || (this.oQ.iR(), 3 !== n.qM) || bb.jZ() % 15 != 5 && 2 !== a8.w5 || n.aAW().aJy()
	}, this.aK1 = function() {
		0 === a8.w5 && aV.a90(), a8.a0a.a0x(), a8.data.canvas = null, ax.l7.close(ax.l7.xO, 3257), ax.l7.xO = 0, a8.data.isReplay = 1, a8.a0d()
	}, this.aK0 = function(os) {
		var a6 = os.indexOf("=");
		return 0 <= a6 ? os.substring(a6 + 1) : os
	}, this.aJz = function(os) {
		return "https://territorial.io/?replay=" + os
	}
}

function aMY() {
	this.aMc = null, this.aMd = null, this.aMe = null, this.aMf = null, this.aMg = null, this.aMh = null, this.a0p = "";
	var aMi = 0;
	this.dR = function() {
		this.aMc = [], this.aMd = [], this.aMe = [], this.aMf = [], this.aMg = [0], this.aMh = [0], aMi = 0, this.a0p = ""
	}, this.oR = function(id, fE, fG, fI) {
		a8.gg || 2 === a8.w5 || (0 === this.aMg[aMi] && (this.aMh[aMi] ? (this.aMg.push(1), this.aMh.push(0), aMi++) : this.aMg[aMi] = 1), this.aMc.push(id), this.aMd.push(fE), this.aMe.push(void 0 === fG ? 0 : fG), this.aMf.push(void 0 === fI ?
			0 : fI), this.aMh[aMi]++)
	}, this.iR = function() {
		0 === this.aMg[aMi] ? this.aMh[aMi]++ : (this.aMg.push(0), this.aMh.push(0), aMi++)
	}
}

function aMa() {
	var aMj = 0;

	function aMn(os, id) {
		aMj || (id ? 1 === id ? aI.a21 = L(358) + ": " + os : n.o(4, 3, new p(L(359), os, 1)) : n.o(4, 3, new p("⚠️ " + L(357), os, 1)))
	}
	this.sa = function(os, aMk) {
		var p3;
		return aMj = aMk, bC.qP.sS(bC.qP.sQ(bC.qP.sO(os))), aI.a21 = "", !(! function() {
			if (bD.size < 10) aMn("File Too Small");
			else {
				var aMp = bD.oC(12),
					aMB = (aMp !== df && aMn("Incompatible Version " + aMp + " " + df, 1), bD.oC(12)),
					aMq = bD.oC(31);
				if (aMq !== bD.size) aMn("Size Error: " + aMq + " " + bD.size);
				else if (function(j6, aMp) {
						for (var g4 = bD.a7, eV = bD.size, aMB = aMp, a6 = 3; a6 < eV; a6++) aMB = aMB + g4[a6] & 4095;
						return aMB === j6 || (aMn("Hash Error: " + aMB + " " + j6 + " " + eV), !1)
					}(aMB, aMp)) return 1
			}
			return
		}() || (aMk = bD, (p3 = a8.data = new a0Z).mapType = aMk.oC(2), p3.mapProceduralIndex = aMk.oC(8), p3.mapRealisticIndex = aMk.oC(8), p3.mapSeed = aMk.oC(14), p3.mapName = aMk.aMs(5), 2 === p3.mapType && aMk.aMt(), p3
			.passableWater = aMk.oC(1), p3.passableMountains = aMk.oC(1), p3.playerCount = aMk.oC(10), p3.humanCount = aMk.oC(10), p3.selectedPlayer = aMk.oC(9), p3.gameMode = aMk.oC(1), p3.playerMode = aMk.oC(2), p3.battleRoyaleMode =
			aMk.oC(2), p3.numberTeams = aMk.oC(4), p3.isZombieMode = aMk.oC(1), p3.isContest = aMk.oC(1), p3.isReplay = aMk.oC(1), p3.elo = aMk.aMu(2, 14, 2), p3.colorsType = aMk.oC(1), p3.colorsPersonalized = aMk.oC(1), p3.colorsData =
			aMk.aMu(10, 18, 512), p3.selectableColor = aMk.oC(1), p3.teamPlayerCount = aMk.aMu(4, 10, 9), p3.neutralBots = aMk.oC(1), p3.botDifficultyType = aMk.oC(2), p3.botDifficultyValue = aMk.oC(4), p3.botDifficultyTeam = aMk.aMu(4,
				4, 9), p3.botDifficultyData = aMk.aMu(10, 4, 512), p3.spawningType = aMk.oC(2), p3.spawningSeed = aMk.oC(14), p3.spawningData = aMk.aMu(11, 12, 1024), p3.selectableSpawn = aMk.oC(1), p3.playerNamesType = aMk.oC(2), p3
			.playerNamesData = aMk.aMv(10, 5, 512), p3.selectableName = aMk.oC(1), p3.aIncomeType = aMk.oC(2), p3.aIncomeValue = aMk.oC(8), p3.aIncomeData = aMk.aMu(10, 8, 512), p3.tIncomeType = aMk.oC(2), p3.tIncomeValue = aMk.oC(8), p3
			.tIncomeData = aMk.aMu(10, 8, 512), p3.iIncomeType = aMk.oC(2), p3.iIncomeValue = aMk.oC(8), p3.iIncomeData = aMk.aMu(10, 8, 512), p3.sResourcesType = aMk.oC(2), p3.sResourcesValue = aMk.oC(11), p3.sResourcesData = aMk.aMu(10,
				11, 512), ! function() {
				var he = bD,
					sb = he.oC(5),
					aMw = he.oC(30),
					aMx = he.oC(30);
				if (aMw + aMx > 8 * he.size) return void aMn("Corrupted File");
				return function(eV) {
						var aN0 = new Uint8Array(eV),
							aN1 = new Uint16Array(eV),
							aN2 = new Uint32Array(eV),
							aN3 = new Uint32Array(eV);
						b6.oQ.aMc = aN0, b6.oQ.aMd = aN1, b6.oQ.aMe = aN2, b6.oQ.aMf = aN3;
						for (var a6 = 0; a6 < eV; a6++) {
							var id = bD.oC(4);
							aN0[a6] = id, aN1[a6] = bD.oC(9), 0 === id ? aN2[a6] = bD.oC(22) : 1 === id ? (aN2[a6] = bD.oC(10), aN3[a6] = bD.oC(10)) : 2 === id ? (aN2[a6] = bD.oC(10), aN3[a6] = bD.oC(9)) : 3 === id || 4 === id ? (aN2[
								a6] = bD.oC(10), aN3[a6] = bD.oC(22)) : 5 === id || 6 === id ? aN2[a6] = bD.oC(10) : 7 === id ? aN2[a6] = bD.oC(1) : 10 === id && (aN2[a6] = bD.oC(20), aN3[a6] = bD.oC(22))
						}
					}(aMw),
					function(eV, sb) {
						var aMg = new Uint8Array(eV),
							aMh = new Array(eV);
						aMh.fill(0), b6.oQ.aMg = aMg, b6.oQ.aMh = aMh;
						for (var a6 = 0; a6 < eV; a6++) aMg[a6] = bD.oC(1), aMh[a6] = bD.oC(sb)
					}(aMx, sb), 1
			}()) || (bD.oB < 8 * bD.size - 13 || bD.oB > 8 * bD.size ? (aMn("Out Of Bounds Error: " + bD.oB + " " + 8 * bD.size), 1) : (b6.oQ.a0p = os, 2 === a8.data.mapType && (aMn("Load base64 image...", 2), 1))))
	}, this.aC3 = function(aBc, aMo) {
		var z2 = document.createElement("canvas"),
			hF = z2.getContext("2d");
		if (z2.width = aBc.width, z2.height = aBc.height, hF.drawImage(aBc, 0, 0), aMj || aMo) return a8.w5 ? void 0 : (a8.data.canvas = z2, a8.data.mapType = 2, n.rx(), void n.o(19));
		b6.aK1()
	}
}

function aMZ() {
	this.vb = function() {
		var sb = function() {
				for (var aMh = b6.oQ.aMh, eV = aMh.length, max = 0, a6 = 0; a6 < eV; a6++) max = Math.max(max, aMh[a6]);
				return si(Math.max(max, 1))
			}(),
			a0 = (p3 = a8.data, (a0 = bA).dR(), a0.a3(12, df), a0.oB += 43, a0.a3(2, p3.mapType), a0.a3(8, p3.mapProceduralIndex), a0.a3(8, p3.mapRealisticIndex), a0.a3(14, p3.mapSeed), a0.aNA(p3.mapName, 5), 2 === p3.mapType && a0.aNB(p3
				.canvas), a0.a3(1, p3.passableWater), a0.a3(1, p3.passableMountains), a0.a3(10, p3.playerCount), a0.a3(10, p3.humanCount), a0.a3(9, p3.selectedPlayer), a0.a3(1, p3.gameMode), a0.a3(2, p3.playerMode), a0.a3(2, p3.battleRoyaleMode),
				a0.a3(4, p3.numberTeams), a0.a3(1, p3.isZombieMode), a0.a3(1, p3.isContest), a0.a3(1, p3.isReplay), a0.dY(p3.elo, 2, 14), a0.a3(1, p3.colorsType), a0.a3(1, p3.colorsPersonalized), a0.dY(p3.colorsData, 10, 18), a0.a3(1, p3
					.selectableColor), a0.dY(p3.teamPlayerCount, 4, 10), a0.a3(1, p3.neutralBots), a0.a3(2, p3.botDifficultyType), a0.a3(4, p3.botDifficultyValue), a0.dY(p3.botDifficultyTeam, 4, 4), a0.dY(p3.botDifficultyData, 10, 4), a0.a3(2, p3
					.spawningType), a0.a3(14, p3.spawningSeed), a0.dY(p3.spawningData, 11, 12), a0.a3(1, p3.selectableSpawn), a0.a3(2, p3.playerNamesType), a0.aNC(p3.playerNamesData, 10, 5), a0.a3(1, p3.selectableName), a0.a3(2, p3.aIncomeType),
				a0.a3(8, p3.aIncomeValue), a0.dY(p3.aIncomeData, 10, 8), a0.a3(2, p3.tIncomeType), a0.a3(8, p3.tIncomeValue), a0.dY(p3.tIncomeData, 10, 8), a0.a3(2, p3.iIncomeType), a0.a3(8, p3.iIncomeValue), a0.dY(p3.iIncomeData, 10, 8), a0.a3(
					2, p3.sResourcesType), a0.a3(11, p3.sResourcesValue), a0.dY(p3.sResourcesData, 10, 11), ! function(sb) {
					var a0 = bA,
						aMc = b6.oQ.aMc,
						fE = b6.oQ.aMd,
						fG = b6.oQ.aMe,
						fI = b6.oQ.aMf,
						eV = aMc.length;
					a0.a3(5, sb), a0.a3(30, eV), a0.a3(30, b6.oQ.aMh.length);
					for (var a6 = 0; a6 < eV; a6++) {
						var eq = aMc[a6];
						a0.a3(4, eq), a0.a3(9, fE[a6]), 0 === eq ? a0.a3(22, fG[a6]) : 1 === eq ? (a0.a3(10, fG[a6]), a0.a3(10, fI[a6])) : 2 === eq ? (a0.a3(10, fG[a6]), a0.a3(9, fI[a6])) : 3 === eq || 4 === eq ? (a0.a3(10, fG[a6]), a0.a3(22, fI[
							a6])) : 5 === eq || 6 === eq ? a0.a3(10, fG[a6]) : 7 === eq ? a0.a3(1, fG[a6]) : 10 === eq && (a0.a3(20, fG[a6]), a0.a3(22, fI[a6]))
					}
				}(sb), ! function(sb) {
					for (var a0 = bA, aMg = b6.oQ.aMg, aMh = b6.oQ.aMh, eV = aMg.length, a6 = 0; a6 < eV; a6++) a0.a3(1, aMg[a6]), a0.a3(sb, aMh[a6])
				}(sb), bA.oB),
			p3 = bH.ex(a0 - 1, 6) + 1,
			sb = (b9.aLe(6 * p3) !== bA.g.length && bA.g.push(0), ! function() {
				var a0 = bA;
				a0.oB = 24, a0.a3(31, a0.g.length), a0.oB = 12, a0.a3(12, function() {
					for (var g = bA.g, eV = g.length, aMB = df, a6 = 3; a6 < eV; a6++) aMB = aMB + g[a6] & 4095;
					return aMB
				}())
			}(), bD.dR(bA.g), bB.qP.qQ(bB.qP.qR(p3)));
		return bD.xX(), bA.dR(), sb
	}
}

function cf() {
	var eq, bl = !1,
		aNE = !1,
		aNF = -1e4,
		aNG = -1,
		aNH = 0;

	function resize(aNL) {
		eq = 0, aW.qm() && (aNJ(aNL) || bl) && (bl = !1, bY.resize(), bS.a7M.resize(), aT.dR(), bU.dR(), aU.resize(), aO.resize(), aJ.resize(), n.resize(), 1 <= a8.w5 ? (aQ.resize(!1), aP.resize(), aR.resize(), aN.resize(), aM.resize(), aI.resize(),
			aH.resize(), b8.resize(), ar.resize(), aK.resize(), aL.resize(), aG.resize(), ba.resize(), aa.resize(), aS.resize(), bd.resize(), aN.a4l()) : (aV.a92(), aV.a93()), bb.dZ = !0)
	}

	function aNI(ey) {
		return ey && 128 < ey ? Math.floor(ey) : 128
	}

	function aNJ(aNL) {
		var a0, j6, aNN, qU, a4A;
		if (!(0 < au.q6)) return qU = aNI(document.documentElement.clientWidth), a4A = aNI(window.visualViewport && 2 !== r.id ? window.visualViewport.height : document.documentElement.clientHeight), a0 = qU, j6 = a4A, aNN = 0 !== r.id || a0 < j6 ?
			700 : 1200, aNN = Math.min(aNN / ((a0 + j6) / 2), 1), aNN = 0 === bf.dk.data[1].value ? 2 * aNN / 3 : Math.min(aNN + (bf.dk.data[1].value - 1) * (1 - aNN) / 2, 1), au.pH = (window.devicePixelRatio || 1) * aNN, __fx.hoveringTooltip
			.canvasPixelScale = au.pH, aNL && !aNE ? (aNE = !0, document.body.removeChild(xg)) : aNE && (aNE = !1, document.body.appendChild(xg)), a0 = Math.floor(.5 + qU * au.pH), j6 = Math.floor(.5 + a4A * au.pH), a0 !== au.a0 || j6 !== au.j6 ?
			(au.a0 = a0, au.j6 = j6, au.min = a70(a0, j6), au.max = a2F(a0, j6), au.pD = bH.ex(a0 + j6, 2), au.r5 = a0 / j6, xg.width = a0, xg.height = j6, xg.style.width = qU + "px", xg.style.height = a4A + "px", aNG = bb.e3 + 1e3, 1) : void 0
	}
	this.a0 = 0, this.j6 = 0, this.min = 0, this.max = 0, this.pD = 0, this.r5 = 1, this.pH = 1, this.q6 = 0, this.dS = function() {
		this.a0 = aNI(document.documentElement.clientWidth) + 2, this.j6 = aNI(document.documentElement.clientHeight) + 2
	}, this.dR = function() {
		eq = 1, xg = document.getElementById("canvasA"), (rB = xg.getContext("2d", {
			alpha: __fx.makeMainMenuTransparent
		})).imageSmoothingEnabled = !1, aNJ(0)
	}, this.iR = function() {
		az.iR(), 50 <= ++eq && resize(0), -1 === aNG || bb.e3 < aNG || (aNG = -1, 2e3 * ++aNH >= bb.e3 + 8e3 ? console.log("error 3748") : r.s.setState(15))
	}, this.dc = function(hT) {
		bl = !0, resize(hT)
	}, this.yN = function() {
		aNF + 1e3 > bb.e3 || (aNF = bb.e3, resize(0))
	}
}

function d9() {
	this.aLv = new aNP, this.wd = new aNQ
}

function aNQ() {
	this.we = function() {
		for (var g4, eV = ag.jd, vw = ag.jf, wj = ab.wj, a9A = this.aBL(), a6 = 0; a6 < eV; a6++) g4 = vw[a6], aX.vy(g4) && (wj[g4] = a9A);
		var oW = ab.oW,
			iZ = ab.iZ,
			ia = ab.ia,
			wp = ab.wp,
			eV = a8.jc;
		for (a6 = 0; a6 < eV; a6++)(0 === wp[a6] || ia[a6] < 1 || 2 * oW[a6] > 3 * (iZ[a6] + ia[a6])) && (wj[a6] = 0);
		var wV = 0;
		for (a6 = 0; a6 < eV; a6++) wV += 0 < wj[a6];
		return wV
	}, this.aBL = function() {
		return Math.min(65535, bb.jZ())
	}
}

function aNP() {
	function aNU(g, ey, k1) {
		for (var a6 = 0; a6 < 256; a6++) g[a6] = (g[a6] + (ey >> (a6 + k1) % 30 & 1)) % 256
	}
	this.iR = function(aNR, aNS) {
		var g = new Uint8Array(256);
		return function(g, aNR, aNS) {
				var a6, aNW = 3 + (4 + aNR) % 32768,
					aNX = 12 + aNS % 32768,
					aNY = 17 + ((aNR & aNS) + (aNR | aNS) + aNR) % 32768;
				for (a6 = 0; a6 < 256; a6++) aNW = 1 + aNW * aNX % aNY, g[a6] = aNW % 256
			}(g, aNR, aNS), aNU(g, aNR, 2), aNU(g, aNS, 7),
			function(g) {
				var a6, ey, oB = 0;
				for (a6 = 0; a6 < 3e4; a6++) ey = g[oB], g[oB] = (ey + a6 + g[(oB + a6) % 256]) % 256, oB = (ey + a6 + oB + (ey & oB)) % 256
			}(g),
			function(g) {
				var a6, a4A = 1,
					aG3 = 1;
				for (a6 = 0; a6 < 256; a6 += 2) a4A = (1 + a4A) * (g[a6] + 1) % 1073741824, aG3 = (1 + aG3) * (g[a6 + 1] + 1) % 1073741824;
				return [a4A, aG3]
			}(g)
	}
}

function cc() {
	var aNZ, aNa, gz, aNb;
	this.dR = function() {
		var a6, ec, ee, aM8, aNc, a0, j6, uR, hC, ss, ey, g4, el, eo, a1P;
		if (function() {
				if (gz = !0, aNb = "rgb(" + bO.sq[0] + "," + bO.sq[1] + "," + bO.sq[2] + ")", bO.aEP(bO.eB)) return 1;
				return gz = !1, 0
			}()) aNa = null;
		else {
			for (aNZ = bH.ex(96, 4), aNc = 1 === bO.eB ? (aM8 = 0, 160) : (aM8 = 128, 32), aNb = "rgb(" + aM8 + "," + aM8 + "," + aM8 + ")", aNa = new Array(4), a6 = 3; 0 <= a6; a6--) {
				if (aNa[a6] = document.createElement("canvas"), a0 = a6 % 2 == 0 ? bO.eg : aNZ, j6 = a6 % 2 == 0 ? aNZ : bO.eh + 2 * aNZ, aNa[a6].width = a0, aNa[a6].height = j6, ss = (hC = (uR = aNa[a6].getContext("2d", {
						alpha: !1
					})).getImageData(0, 0, a0, j6)).data, a6 % 2 == 0)
					for (ee = aNZ - 1; 0 <= ee; ee--)
						for (ey = aNc + Math.floor((ee + 1) * (aM8 - aNc) / (aNZ + 1)), ec = a0 - 1; 0 <= ec; ec--) ss[g4 = 4 * ((0 === a6 ? aNZ - ee - 1 : ee) * a0 + ec)] = ey, ss[g4 + 1] = ey, ss[g4 + 2] = ey, ss[g4 + 3] = 255;
				else {
					for (ec = aNZ - 1; 0 <= ec; ec--)
						for (ey = aNc + Math.floor((ec + 1) * (aM8 - aNc) / (aNZ + 1)), ee = j6 - 1 - aNZ; aNZ <= ee; ee--) ss[g4 = 4 * (ee * a0 + (3 === a6 ? aNZ - ec - 1 : ec))] = ey, ss[g4 + 1] = ey, ss[g4 + 2] = ey, ss[g4 + 3] = 255;
					for (eo = 1; 0 <= eo; eo--)
						for (ec = aNZ - 1; 0 <= ec; ec--)
							for (ee = aNZ - 1; 0 <= ee; ee--) el = (Math.pow(ec * ec + ee * ee, .5) + 1) / (aNZ + 1), ey = aNc + Math.floor((1 < el ? 1 : el) * (aM8 - aNc)), ss[g4 = 4 * ((0 === eo ? aNZ - ee - 1 : ee + eo * (j6 - aNZ)) * a0 + (
								1 === a6 ? ec : aNZ - ec - 1))] = ey, ss[g4 + 1] = ey, ss[g4 + 2] = ey, ss[g4 + 3] = 255
				}
				uR.putImageData(hC, 0, 0)
			}
			a1P = aNc, bO.sl.fillStyle = "rgb(" + a1P + "," + a1P + "," + a1P + ")", bO.sl.fillRect(0, 0, bO.eg, 1), bO.sl.fillRect(0, bO.eh - 1, bO.eg, 1), bO.sl.fillRect(0, 0, 1, bO.eh), bO.sl.fillRect(bO.eg - 1, 0, 1, bO.eh)
		}
	}, this.uL = function() {
		var eo = gz ? 0 : -aNZ;
		aG4(eo, eo, bO.eg - 2 * eo, bO.eh - 2 * eo, bW.aNf, bW.aNg, bW.aNh, bW.aNi) || (rB.fillStyle = aNb, rB.fillRect(0, 0, au.a0, au.j6))
	}, this.rA = function() {
		gz || (aG2(0, -aNZ, bO.eg, aNZ, bW.aNf, bW.aNg, bW.aNh, bW.aNi) && rB.drawImage(aNa[0], bW.aNj, bW.aNk - aNZ), aG2(bO.eg, -aNZ, aNZ, bO.eh + 2 * aNZ, bW.aNf, bW.aNg, bW.aNh, bW.aNi) && rB.drawImage(aNa[1], bW.aNj + bO.eg, bW.aNk - aNZ),
			aG2(0, bO.eh, bO.eg, aNZ, bW.aNf, bW.aNg, bW.aNh, bW.aNi) && rB.drawImage(aNa[2], bW.aNj, bW.aNk + bO.eh), aG2(-aNZ, -aNZ, aNZ, bO.eh + 2 * aNZ, bW.aNf, bW.aNg, bW.aNh, bW.aNi) && rB.drawImage(aNa[3], bW.aNj - aNZ, bW.aNk - aNZ))
	}
}

function cy() {
	this.h0 = new aNl, this.aBJ = new aNm, this.uO = new aNn, this.l7 = new aNo, this.i3 = new aNp, this.a1P = new aNq, this.aNr = new aNs, this.jQ = new aNt, this.kH = new aNu, this.aNv = new aNw, this.dR = function() {
		this.uO.dR(), this.l7.dR(), this.i3.dR(), this.a1P.dR(), this.aNv.dR()
	}, this.rA = function() {
		this.aNv.rA(), this.uO.rA()
	}
}

function aNt() {
	this.iR = function(player) {
		var oN;
		return !!a8.data.passableWater && 0 !== ab.gD[player].length && bJ.l7.oO !== bJ.l7.jt && !((oN = bJ.l7.oN[player]) >= a9.jt[a9.il[player]] || oN === bJ.l7.oa || !b7.fs.oU(player, a9.jr[a9.il[player]], 32, 0) || !ai.iG.iR(player) && !ai.iI
			.iR(player) || ! function(zb) {
				var aNz = bK.f8[1] + bI.hI[bK.f8[2] - 1] << 2;
				if (aX.eM(aNz)) return 1;
				return aNz = aX.eN(aNz), zb !== aNz && !!eO(zb, aNz)
			}(player)) && function(player) {
			return b7.fs.oX(player), bJ.l7.od(player), !0
		}(player)
	}
}

function aNl() {
	function aO7(a6, kh, ki) {
		var aO9, aO8;
		if (!(a6 < 0)) return aO8 = bJ.l7.lu[a6], aO9 = bI.hh(aO8), aO8 = bI.hk(aO8), a6 = 20 * (.9 + .1 * Math.log10(bJ.l7.a2Z[a6])), a6 = Math.max(a6, bI.hx(b7.pB.qj(.02, 1.7))), bH.aGB(bI.hg(kh), bI.hj(ki), aO9, aO8, a6)
	}

	function aO1(aO0) {
		var aOC = 4 + .03 * (1 + 1.5 * r.s.v9()) * au.pD / hv;
		return bI.hl(aO0, bK.f8[1]) < aOC
	}
	this.h1 = function(player, aO0) {
		return !!(a8.data.passableWater && bI.hy(aO0) && bJ.l7.oO !== bJ.l7.jt && bJ.l7.oN[player] !== bJ.l7.oa && 0 !== ab.gD[player].length && bJ.kH.kI(player, aO0) && aO1(aO0))
	}, this.ng = function(player, lr, aO0) {
		return !!(bI.hy(aO0) && this.oe(player, lr) && bJ.kH.og(aO0) && aO1(aO0))
	}, this.oe = function(player, id) {
		for (var aO2, qe = player << 3, qf = qe + bJ.l7.oN[player], aO3 = bJ.l7.aO3, aO4 = bJ.l7.aO4, a6 = qe; a6 < qf; a6++)
			if (id === aO4[aO2 = aO3[a6]]) return bK.f8[3] = aO2, !0;
		return !1
	}, this.nf = function(eH) {
		var a1Q = bJ.a1P.a1Q;
		return !!this.oe(a8.eF, a1Q) && (b5.gt.nf(a1Q, eH), !0)
	}, this.a1S = function(kh, ki) {
		var player = a8.eF,
			eV = bJ.l7.oN[player];
		if (0 === eV) return !1;
		for (var aO3 = bJ.l7.aO3, lu = bJ.l7.lu, qe = player << 3, aO5 = 80, aIB = -1, a6 = qe + eV - 1; qe <= a6; a6--) {
			var aO6 = aO3[a6],
				el = bI.hb(kh, ki, lu[aO6]);
			el < aO5 && (aO5 = el, aIB = aO6)
		}
		return !!aO7(aIB, kh, ki) && (bJ.a1P.a1Q = bJ.l7.aO4[aIB], bi.oc.a1S(), !0)
	}, this.a1Z = function(kh, ki) {
		var eV = bJ.l7.oO;
		if (eV < 1) return -1;
		for (var lu = bJ.l7.lu, aO5 = 80, aIB = -1, a6 = 0; a6 < eV; a6++) {
			var el = bI.hb(kh, ki, lu[a6]);
			el < aO5 && (aO5 = el, aIB = a6)
		}
		return aO7(aIB, kh, ki) ? aIB : -1
	}, this.lt = function(player, id) {
		for (var qe = player << 3, qf = qe + bJ.l7.oN[player], aO4 = bJ.l7.aO4, aO3 = bJ.l7.aO3, a6 = qe; a6 < qf; a6++) {
			var aO6 = aO3[a6];
			if (aO4[aO6] === id) return aO6
		}
		return -1
	}, this.aBG = function(player) {
		for (var qe = player << 3, qf = qe + bJ.l7.oN[player], aO3 = bJ.l7.aO3, a2Z = bJ.l7.a2Z, il = 0, a6 = qe; a6 < qf; a6++) il += a2Z[aO3[a6]];
		return il
	}, this.lz = function(player) {
		return 0 === bJ.l7.oN[player] ? -1 : bJ.l7.aO3[player << 3]
	}
}

function aNm() {
	this.aBK = function(player) {
		for (var aO3 = bJ.l7.aO3, qe = player << 3, a6 = qe + bJ.l7.oN[player] - 1; qe <= a6; a6--) this.aOD(aO3[a6])
	}, this.aOD = function(aOE) {
		var l7 = bJ.l7,
			aOF = l7.oO - 1,
			aOG = l7.a2Y[aOE],
			aOH = l7.aOI[aOE],
			aOJ = l7.lu[aOE];
		l7.oO = aOF, l7.a2Y[aOE] = l7.a2Y[aOF], l7.aOK[aOE] = l7.aOK[aOF], l7.aOL[aOE] = l7.aOL[aOF], l7.lu[aOE] = l7.lu[aOF], l7.aOM[aOE] = l7.aOM[aOF], l7.a2Z[aOE] = l7.a2Z[aOF], l7.aOI[aOE] = l7.aOI[aOF], l7.aO4[aOE] = l7.aO4[aOF], l7.aON[
			aOE] = l7.aON[aOF], l7.aOO[aOE] = l7.aOO[aOF], l7.aOP[aOE] = l7.aOP[aOF], l7.aO3[l7.a2Y[aOE]] = aOE,
			function(a9p) {
				var player = a9p >> 3,
					l7 = bJ.l7,
					eV = l7.oN[player] - 1,
					aOS = (player << 3) + eV;
				l7.oN[player] = eV, aOS !== a9p && (l7.aO3[a9p] = l7.aO3[aOS], l7.a2Y[l7.aO3[a9p]] = a9p)
			}(aOG), bJ.i3.i3[bI.i2(l7.lu[aOE])][l7.aOI[aOE]] = aOE, aOF = bI.i2(aOJ), aOG = aOH, aOF = bJ.i3.i3[aOF], l7 = aOF.pop(), aOG !== aOF.length && (aOF[aOG] = l7, bJ.l7.aOI[l7] = aOG)
	}
}

function aNn() {
	var aOU, uo = 8,
		aOV = new Array(2);

	function aOW(oB) {
		var h9 = uo + 4,
			z2 = b7.pB.sh(h9, h9),
			hF = b7.pB.getContext(z2, !0),
			hC = b7.pB.getImageData(hF, h9, h9),
			ss = hC.data;
		return aOX(ss, h9 + 1, oB), aOX(ss, h9 + 2, oB), aOX(ss, 2 * h9 + 1, oB), aOX(ss, 2 * h9 - 3, oB), aOX(ss, 2 * h9 - 2, oB), aOX(ss, 3 * h9 - 2, oB), aOX(ss, h9 * (h9 - 3) + 1, oB), aOX(ss, h9 * (h9 - 2) + 1, oB), aOX(ss, h9 * (h9 - 2) + 2,
			oB), aOX(ss, h9 * (h9 - 2) - 2, oB), aOX(ss, h9 * (h9 - 1) - 3, oB), aOX(ss, h9 * (h9 - 1) - 2, oB), hF.putImageData(hC, 0, 0), z2
	}

	function aOX(ss, eH, oB) {
		eH *= 4;
		ss[eH] = 255, ss[1 + eH] = 255, ss[2 + eH] = oB, ss[3 + eH] = 255
	}

	function sh(player) {
		var z2 = b7.pB.sh(uo, uo);
		return function(hF, player) {
			var ec, ee, hf, eH, aOZ, a9q, h9 = uo,
				hC = b7.pB.getImageData(hF, h9, h9),
				ss = hC.data,
				kM = (h9 >> 1) - .5,
				aNb = aX.a39(player),
				aOb = b7.pL.yc(aNb, .5);
			b7.pL.ye(aNb, aOb, 300) || b7.pL.yg(aNb, 100);
			for (ee = 0; ee < h9; ee++)
				for (ec = 0; ec < h9; ec++) a9q = (h9 - 1.5) * (h9 - 1.5) / 4, aOZ = (hf = (hf = ec - kM) * hf + (hf = ee - kM) * hf) <= (h9 - 4.5) * (h9 - 4.5) / 4 ? aOb : aNb, ss[eH = 4 * (ee * h9 + ec)] = aOZ[0], ss[1 + eH] = aOZ[1], ss[2 +
					eH] = aOZ[2], ss[3 + eH] = a9q < hf ? 0 : 255;
			hF.putImageData(hC, 0, 0)
		}(b7.pB.getContext(z2, !0), player), z2
	}
	this.dR = function() {
		aOU = new Array(a8.eS), aOV[0] = aOW(255), aOV[1] = aOW(0)
	}, this.rA = function() {
		var a6, player, aOc, aGC, il, he, aOe, aOg, aOh, lu = bJ.l7.lu,
			a2Y = bJ.l7.a2Y,
			a2Z = bJ.l7.a2Z,
			aOO = bJ.l7.aOO,
			aOi = aOU,
			aOj = a8.eF,
			aOk = -1,
			eV = bJ.l7.oO,
			aOl = au.a0,
			aOm = au.j6,
			aOn = bO.eg << 4,
			eK = hv,
			e9 = eK / uo,
			lv = hu / eK,
			lw = hw / eK,
			hf = (aOl + hu) / eK - lv,
			hi = (aOm + hw) / eK - lw,
			hF = rB;
		for (bJ.h0.oe(a8.eF, bJ.a1P.a1Q) && (aOk = bK.f8[3]), hF.imageSmoothingEnabled = eK < 9, b7.pB.textAlign(hF, 1), b7.pB.textBaseline(hF, 1), a6 = 0; a6 < eV; a6++) player = a2Y[a6] >> 3, il = a2Z[a6], aOc = .9 + .1 * Math.log10(il), aGC =
			(he = lu[a6]) % aOn / 16 - aOc, he = aOm * (Math.floor(he / aOn) / 16 - aOc - lw) / hi, aOe = -2 * (aOh = eK * aOc) * (1 + (aOg = +(player === aOj)) / 8), aOg = aOg * aOh / 4, (aOh = aOl * (aGC - lv) / hf) < aOe || he < aOe || aOl +
			aOg < aOh || aOm + aOg < he || (aGC = 2 * aOc * e9, aOe = aOc * eK, void 0 === (aOg = aOi[player]) && (aOi[player] = aOg = sh(player)), player === aOj && (hF.setTransform(aGC, 0, 0, aGC, aOh - 2 * aGC, he - 2 * aGC), hF.drawImage(aOV[
				+(a6 === aOk)], 0, 0)), hF.setTransform(aGC, 0, 0, aGC, aOh, he), hF.drawImage(aOg, 0, 0), (aOc = Math.floor(function(il) {
				if (il < 1e3) return .42;
				if (il < 1e4) return .34;
				if (il < 1e6) return .26;
				if (il < 1e8) return .19;
				return .15
			}(il) * aOe)) < 6) || (hF.setTransform(1, 0, 0, 1, 0, 0), hF.fillStyle = aOO[a6] ? u.my : u.mW, hF.font = b7.pB.qS(1, aOc), hF.fillText(b7.wv.a05(il), aOh + aOe, he + aOe + .1 * aOc));
		hF.imageSmoothingEnabled = !1, hF.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function aNw() {
	var z2;
	this.dR = function() {
		z2 = z2 || bL.l7.aOq(20, bc.aOr[7])
	}, this.rA = function() {
		var mG = hv;
		if (!(5 <= mG)) {
			var aOl = au.a0,
				aOm = au.j6,
				lv = hu / mG,
				lw = hw / mG,
				m9 = (aOl + hu) / mG,
				mA = (aOm + hw) / mG,
				g5 = -20 * mG,
				aOs = .5 * g5,
				aOn = bO.eg << 4,
				eV = bJ.l7.oO,
				lu = bJ.l7.lu,
				aOt = z2,
				hF = rB;
			3 < mG && (hF.globalAlpha = .5 * (5 - mG));
			for (var a6 = 0; a6 < eV; a6++) {
				var he = lu[a6],
					ec = aOl * (he % aOn / 16 - lv) / (m9 - lv) + aOs,
					he = aOm * (Math.floor(he / aOn) / 16 - lw) / (mA - lw) + aOs;
				aOl < ec || aOm < he || ec < g5 || he < g5 || (hF.setTransform(mG, 0, 0, mG, ec, he), hF.drawImage(aOt, 0, 0))
			}
			hF.globalAlpha = 1, hF.setTransform(mG, 0, 0, mG, 0, 0)
		}
	}
}

function aNs() {
	this.iR = function() {
		for (var aO8, aNr, aON = bJ.l7.aON, lu = bJ.l7.lu, aOL = bJ.l7.aOL, a6 = bJ.l7.oO - 1; 0 <= a6; a6--) aO8 = lu[a6], 0 !== (aNr = aON[a6]) && aO8 === aOL[a6] && (! function(a6, aOw, hS) {
			var ik, player = bJ.l7.a2Y[a6] >> 3,
				hS = aOw + bI.hI[hS] << 2,
				a6 = bJ.l7.a2Z[a6];
			if (bZ.aOx(player), aX.eM(hS)) ik = a8.eS;
			else {
				if ((ik = aX.eN(hS)) === player) return hS = b7.fs.fv(player, a6), bZ.fw(player, a6 - hS, 12);
				if (!eO(player, ik)) return b5.jh.nw(player, ik, a6)
			}
			aY.iy(player, ik) || aY.jG(player) ? (ab.fy[player].push(aOw << 2), aY.ih(player, a6, ik), aA.ii(player, !0)) : bZ.fw(player, a6, 12)
		}(a6, bI.i1(aO8), aNr - 1), bJ.aBJ.aOD(a6))
	}, this.aOy = function(player, eH, hS, lr) {
		if (0 !== hS) {
			var aOj = a8.eF;
			if (b7.fs.gj(aOj) && eO(player, aOj) && player !== aOj && 0 !== ab.gD[aOj].length) {
				var aNz = eH + bI.hI[--hS] << 2;
				if (aX.eM(aNz) || eO(player, aX.eN(aNz))) {
					for (var ej = !1, a6 = 0; a6 < 4; a6++)
						if (aNz = eH + bI.hI[a6] << 2, aX.eQ(aNz) && !aX.eM(aNz) && aX.eN(aNz) === aOj) {
							ej = !0;
							break
						} ej && (aI.a1R(719, 0), aI.wT(180, L(360, [ab.a2O[player]]), 719, player, u.mx, u.mT, -1, !0, void 0, {
						ep: 1,
						lr: lr
					}))
				}
			}
		}
	}
}

function aNo() {
	this.aOz = null, this.jt = 512, this.oa = 8, this.oO = 0, this.aP0 = 0, this.a2Y = new Uint16Array(this.jt), this.aOK = new Uint32Array(this.jt), this.aOL = new Uint32Array(this.jt), this.lu = new Uint32Array(this.jt), this.aOM = new Uint16Array(
			this.jt), this.a2Z = new Uint32Array(this.jt), this.aOI = new Uint16Array(this.jt), this.aO4 = new Uint16Array(this.jt), this.aON = new Uint8Array(this.jt), this.aOO = new Uint8Array(this.jt), this.aOP = new Uint32Array(this.jt), this
		.oN = new Uint8Array(a8.eS), this.aO3 = new Uint16Array(this.oa * a8.eS), this.dR = function() {
			this.aP0 = 0, this.oO = 0, this.aOz = new Uint8Array(bO.eg + bO.eh), this.oN.fill(0)
		}, this.od = function(player) {
			var eV = this.oO,
				aP1 = bI.i0(bK.f8[0]),
				aP2 = this.oN[player],
				aP3 = (player << 3) + aP2,
				il = (this.a2Y[eV] = aP3, this.aOK[eV] = aP1, this.lu[eV] = aP1, this.aOL[eV] = bI.i0(bK.f8[1]), this.aOM[eV] = 0, bK.f4[0]);
			il < 60 ? (b7.fs.ft(player, 60 - il), this.a2Z[eV] = 60) : this.a2Z[eV] = il, this.aOI[eV] = bJ.i3.od(eV, bI.i2(aP1)), this.aO4[eV] = this.aP0, this.aON[eV] = bK.f8[2], this.aOO[eV] = 0, this.aOP[eV] = 0, this.aP0 = this.aP0 + 1 & 1023,
				this.aO3[aP3] = eV, this.oN[player] = aP2 + 1, this.oO++, bJ.aNr.aOy(player, bK.f8[1], bK.f8[2], this.aO4[eV])
		}, this.nf = function() {
			var aO2 = bK.f8[3];
			this.aOK[aO2] = this.lu[aO2], this.aOL[aO2] = bI.i0(bK.f8[1]), this.aOM[aO2] = 0, this.aON[aO2] = bK.f8[2], bJ.aNr.aOy(this.a2Y[aO2] >> 3, bK.f8[1], bK.f8[2], this.aO4[aO2])
		}, this.iR = function() {
			bJ.aNr.iR();
			var a6, g4 = a8.eF,
				e4 = bJ.h0.aBG(g4),
				wc = (! function(wc) {
					var a6, aP8, aP9, aPA, aPB, aP1, aPF, aPG, eY, g5, aOK = wc.aOK,
						aOL = wc.aOL,
						lu = wc.lu,
						a2Z = wc.a2Z,
						aOO = wc.aOO,
						aOM = wc.aOM,
						aOI = wc.aOI,
						gK = ab.gK,
						a2Y = wc.a2Y,
						wc = wc.oO,
						aOn = bO.eg << 4;
					for (a6 = wc - 1; 0 <= a6; a6--) aP9 = lu[a6], aP8 = aOL[a6], aP9 !== aP8 && (aP1 = aOK[a6], aPF = aP8 % aOn - (aPB = aP1 % aOn), aPG = ~~((aP8 + .5) / aOn) - (aP1 = ~~((aP1 + .5) / aOn)), eY = ~~Math.sqrt(aPF * aPF + aPG *
						aPG + .5), g5 = 15e4 + 25e3 * bH.log10(a2Z[a6]), g5 += 5e4 * !gK[a2Y[a6] >> 3], aOO[a6] && (g5 = bH.ex(g5, 5)), 65535 <= (g5 = aOM[a6] + Math.max(~~((g5 + .5) / eY), 1)) ? lu[a6] = aPA = aP8 : (aOM[a6] = g5, lu[
						a6] = aPA = aPB + bH.ex(g5 * aPF, 65536) + aOn * (aP1 + bH.ex(g5 * aPG, 65536))), aOI[a6] = bJ.i3.aPI(aOI[a6], aP9, aPA))
				}(this), ! function(wc) {
					if (bb.jZ() % 2 == 1) {
						var a6, k1, kM, ep, eq, aPJ, v8, aPK, gw, hM, lv, lw, aP1, aPL, aPM, aPN, t0, eV = wc.oO,
							lu = wc.lu,
							a2Y = wc.a2Y,
							a2Z = wc.a2Z,
							aOP = wc.aOP,
							aOO = wc.aOO,
							i3 = bJ.i3.i3,
							aPP = i3.length,
							aPQ = bJ.i3.aPQ,
							aOn = bO.eg << 4,
							aPR = a8.ic,
							aMO = bc.eT,
							g5 = (eV - 1) * (bH.ex(bb.jZ(), 2) % 2);
						for (a6 = 0; a6 < eV; a6++)
							for (k1 = Math.abs(a6 - g5), aP1 = lu[k1], kM = bI.i2(aP1), gw = a2Y[k1] >> 3, lv = aP1 % aOn, lw = ~~((aP1 + .5) / aOn), aPN = a2Z[k1], ep = 0; ep < 9; ep++)
								if (!((aPJ = kM + aPQ[ep]) < 0 || aPP <= aPJ))
									for (aPK = i3[aPJ], v8 = aPK.length, eq = 0; eq < v8; eq++) aPL = aPK[eq], t0 = a2Y[aPL] >> 3, gw == t0 || aPR && aMO[gw] === aMO[t0] && aMO[gw] || (t0 = lu[aPL], (hM = lv - t0 % aOn) * hM + (hM = lw - ~~((t0 +
										.5) / aOn)) * hM < 14400 && ((t0 = a2Z[aPL]) <= aPN ? aPM = Math.max(1, bH.ex(t0 + bH.ex(aPN - t0, 10), 10)) : (aPM = Math.max(1, bH.ex(aPN, 10)), aOP[aPL] = Math.min(aOP[aPL] + aPM, 4294967295)),
										a2Z[aPL] = Math.max(t0 - aPM, 0), aOO[aPL] = 4))
					}
				}(this), ! function(wc) {
					if (bb.jZ() % 5 == 3) {
						var a6, il, a2Z = wc.a2Z,
							gK = ab.gK,
							a2Y = wc.a2Y,
							aOP = wc.aOP,
							aOO = wc.aOO,
							eV = wc.oO;
						for (a6 = 0; a6 < eV; a6++) il = a2Z[a6], gK[a2Y[a6] >> 3] ? a2Z[a6] = Math.max(il - Math.max(1, il >> 7), 0) : (a2Z[a6] = Math.max(il - Math.max(1, il >> 11), 0), aOO[a6] || (il = aOP[a6]) && (il = Math.max(il >> 3, 1),
							a2Z[a6] = Math.min(a2Z[a6] + (il << 1), 4294967295), aOP[a6] -= il))
					}
				}(this), this),
				a2Z = wc.a2Z,
				aOO = wc.aOO;
			for (a6 = wc.oO - 1; 0 <= a6; a6--) aOO[a6] = aOO[a6] >> 1, 0 === a2Z[a6] && bJ.aBJ.aOD(a6);
			bZ.fw(g4, e4 - bJ.h0.aBG(g4), 15)
		}
}

function aNp() {
	this.aPS = 32, this.ec = 0, this.ee = 0, this.i4 = 0, this.aPT = 0, this.aPU = 4, this.i3 = null, this.aPQ = new Int16Array(9), this.dR = function() {
		this.i4 = 1 + bH.ex(bO.eg - 1, this.aPS), this.aPT = 1 + bH.ex(bO.eh - 1, this.aPS), this.i3 = new Array(this.i4 * this.aPT), b7.pL.yb(this.i3);
		var ec, ee, aPQ = this.aPQ,
			a0 = this.i4;
		for (ec = -1; ec <= 1; ec++)
			for (ee = -1; ee <= 1; ee++) aPQ[3 * (1 + ee) + 1 + ec] = ee * a0 + ec
	}, this.od = function(aPW, a6) {
		return this.i3[a6].push(aPW), this.i3[a6].length - 1
	}, this.aPI = function(aPX, aP1, aP8) {
		var aPY, aPZ, aP1 = bI.i2(aP1),
			aP8 = bI.i2(aP8);
		return aP1 === aP8 ? aPX : (aPY = this.i3[aP1].pop(), this.i3[aP1].length === aPX ? this.od(aPY, aP8) : (aPZ = this.i3[aP1][aPX], this.i3[aP1][aPX] = aPY, bJ.l7.aOI[aPY] = aPX, this.od(aPZ, aP8)))
	}
}

function aNu() {
	function xR(aP8, aPa) {
		if (! function(aP8, aO0) {
				var hL = bI.i1(aP8),
					aPe = Math.abs(bI.ed(aO0) - bI.ed(hL)),
					hL = Math.abs(bI.ef(aO0) - bI.ef(hL));
				return 0 !== Math.max(aPe, hL) && (function(aP1, aP8, aPe, aPf) {
					var aPh = bI.hh(aP1),
						aP1 = bI.hk(aP1),
						aPj = bI.hh(aP8),
						aP8 = bI.hk(aP8),
						aPj = aPj - aPh,
						aP8 = aP8 - aP1,
						aPn = Math.abs(aPj),
						aPo = Math.abs(aP8),
						aPj = 0 < aPj ? 1 : 3,
						aP8 = 0 < aP8 ? 2 : 0;
					aPo < aPn ? aPr(aPh, aP1, aPh + aPn, aP1 + aPo, aPj, aP8, aPe) : aPr(aP1, aPh, aP1 + aPo, aPh + aPn, aP8, aPj, aPf)
				}(aP8, bI.i0(aO0), aPe, hL), !0)
			}(aP8, aPa)) return !1;
		if (0 === bK.f1[0]) return !!aX.gz(aPa << 2);
		if (! function(aO0) {
				if (aX.gz(aO0 << 2)) return 1;
				return function(aO0) {
					var a6, hS, aOz = bJ.l7.aOz,
						aPv = bI,
						eV = bK.f1[0],
						aPw = 4 * aO0;
					for (a6 = eV - 1; 0 <= a6; a6--) {
						hS = aOz[a6];
						var aPx = aPw;
						if (aPw = aPv.i6(aPw, hS + 2 & 3), aX.gz(aPw)) return bK.f1[0] = a6, bK.f8[1] = aPw >> 2, bK.f8[2] = 1 + hS, bK.f8[4] = aPx, 1
					}
					return
				}(aO0)
			}(aPa)) return !1;
		if (bK.f8[2] && aX.ea(bK.f8[4])) return !1;
		var a6, aPa = bI.i1(aP8),
			ss = a7U,
			aOz = bJ.l7.aOz,
			eV = bK.f1[0] - 1,
			aPw = 4 * aPa,
			hJ = bI.hJ;
		for (a6 = 0; a6 < eV; a6++)
			if (aPw += hJ[aOz[a6]], 0 !== ss[aPw + 3] || 2 !== ss[aPw + 2]) return !!void 0;
		return !!1
	}

	function aPr(aPh, aPi, aPj, aPk, aPp, aPq, aPe) {
		for (var ee, aOz = bJ.l7.aOz, g5 = 0, aPs = 0, j6 = aPk - aPi, a0 = aPj - aPh, aPt = aPh % 16, a6 = 1; a6 <= aPe; a6++) aOz[g5++] = aPp, aOz[g5] = aPq, g5 += (ee = (j6 * (aPt + (a6 << 4)) + .5) / a0 >> 4) - aPs, aPs = ee;
		bK.fD(bK.f1, g5)
	}
	this.kI = function(player, aPa) {
		var hS, hL, gv = bI.hU(player, aPa);
		return gv !== aPa && (hS = bI.hK(gv, aPa), hL = bI.i5(gv, hS), !(!aX.gz(hL << 2) && (hS = bI.hR(gv, aPa, hS), hL = bI.i5(gv, hS), !aX.gz(hL << 2)) || (bK.f8[0] = hL, bK.f8[1] = aPa, bK.f8[2] = 0, hL !== aPa && (!xR(bI.i0(hL), aPa) ||
			0 !== bK.f8[2] && bI.ha(player, bK.f8[1] + bI.hI[bK.f8[2] - 1] << 2)))))
	}, this.og = function(aPa) {
		var aP1 = bJ.l7.lu[bK.f8[3]];
		return bK.f8[1] = aPa, bK.f8[2] = 0, xR(aP1, aPa)
	}
}

function aNq() {
	var uo = 32,
		un = new Array(2);

	function sh(eq) {
		var ec, ee, eH, hi, hf, h9 = uo,
			z2 = b7.pB.sh(h9, h9),
			hF = b7.pB.getContext(z2, !0),
			hC = b7.pB.getImageData(hF, h9, h9),
			ss = hC.data,
			kM = (h9 >> 1) - .5,
			kN = Math.sqrt(kM * kM);
		for (ss.fill(255), ee = 0; ee < h9; ee++)
			for (ec = 0; ec < h9; ec++) hf = ec - kM, hi = ee - kM, eH = 4 * (ee * h9 + ec), hf = 714 * (kN - Math.sqrt(hf * hf + hi * hi)) / kN, ss[2 + eH] = eq, ss[3 + eH] = 255 < hf ? 0 : hf;
		return hF.putImageData(hC, 0, 0), z2
	}
	this.a1Q = -1, this.dR = function() {
		this.a1Q = -1, un[0] || (un[0] = sh(255), un[1] = sh(0))
	}, this.aPz = function(hF, e9, ec, ee, hH, a6) {
		b7.fs.gj(a8.eF) && (hF.setTransform(e9 *= 4 / 3 * .625, 0, 0, e9, ec - (hH *= 4 / 3), ee - hH), hF.drawImage(un[+(bJ.l7.aO4[a6] === this.a1Q)], 0, 0))
	}
}

function dU() {
	this.aK8 = [L(361), L(362), L(363), L(364), L(365), L(366), L(367), L(368), L(369), L(370), L(371), L(372), L(373)];
	var aQ0 = ["Space", "", "KeyB", "", "KeyW", "", "KeyS", "", "KeyD", "", "KeyA", "", "KeyH", "", "NumpadAdd", "", "NumpadSubtract", "", "ArrowLeft", "", "ArrowRight", "", "ArrowUp", "", "ArrowDown", ""];
	this.aK7 = new Array(aQ0.length), this.dR = function() {
		var g = bf.dk.data[155].value.split(";"),
			kM = g.length;
		if (function() {
				for (var eV = aQ0.length, a6 = 0; a6 < eV; a6++) bT.aK7[a6] = aQ0[a6]
			}(), !(kM > aQ0.length))
			for (var a6 = 0; a6 < kM; a6++) g[a6].length && (this.aK7[a6] = g[a6])
	}, this.aKA = function(oB, code) {
		for (var aK7 = this.aK7, aQ2 = aQ0, os = (aK7[oB] = code, ""), eV = aK7.length, aQ3 = [], a6 = 0; a6 < eV; a6++) aQ3.push(aK7[a6] === aQ2[a6] ? "" : aK7[a6]);
		eV--;
		for (a6 = 0; a6 < eV; a6++) os += aQ3[a6] + ";";
		bf.ps.pt(155, os += aQ3[eV])
	}, this.aK6 = function() {
		bf.ps.pt(155, ""), this.dR()
	}, this.eq = function(code, oB) {
		return code === this.aK7[oB] || code === this.aK7[oB + 1]
	}
}

function cQ() {
	this.a3x = function() {
		var aQ6;
		return !(ag.jd < 3 || ab.gK[kt[0]] >= a8.jM >> 1) && (a8.ic ? (aQ6 = aZ.aCN(), !(2 * aZ.aCO(bd.kq()) >= aQ6)) : function() {
			var aQ6 = aZ.aCN();
			if (2 * ab.gY[kt[0]] >= aQ6) return !1;
			return !0
		}())
	}
}

function c1() {
	this.dR = function() {
		if (0 === a8.data.sResourcesType) {
			for (var aP2 = a8.jc, gY = ab.gY, a6 = 0; a6 < aP2; a6++) gY[a6] = 512;
			var aP3 = a8.tO,
				js = a9.js,
				il = a9.il;
			for (a6 = aP2; a6 < aP3; a6++) gY[a6] = js[il[a6]]
		} else(1 === a8.data.sResourcesType ? function() {
			for (var eV = a8.tO, gY = ab.gY, sResourcesValue = a8.data.sResourcesValue, a6 = 0; a6 < eV; a6++) gY[a6] = sResourcesValue
		} : function() {
			for (var eV = a8.tO, gY = ab.gY, sResourcesData = a8.data.sResourcesData, a6 = 0; a6 < eV; a6++) gY[a6] = sResourcesData[a6]
		})();
		bZ.lP[8] = ab.gY[a8.eF]
	}
}

function dH() {
	var aQB = 501,
		aQC = (this.wz = new Uint32Array(aQB), this.zf = new Uint32Array(aQB), this.a6r = new Uint16Array(aQB), this.aKG = 0, 1),
		aQD = 0;

	function aQG(self) {
		self.max.fill(0)
	}

	function aQI(self, a6) {
		self.max[0] = Math.max(self.wz[a6], self.max[0]), self.max[1] = Math.max(self.zf[a6], self.max[1]), self.max[2] = Math.max(self.a6r[a6], self.max[2])
	}
	this.max = [0, 0, 0], this.aQE = 0, this.lP = new Array(21), this.aQF = null, this.dS = function() {
		this.aQF = [L(374), L(375), L(376), L(377), L(378), L(379), L(380), L(381), L(238), L(239), L(382), L(383), L(384), L(385), "", L(386), L(387), L(388), L(198), L(389), L(390)]
	}, this.dR = function() {
		this.aKG = 0, aQC = 1, this.aQE = 0, aQD = 0, aQG(this), this.lP.fill(0)
	}, this.oY = function(player, ht) {
		b7.fs.za(player) && (this.lP[0] += ht + 1, this.lP[1]++, this.lP[12] += bK.f4[1])
	}, this.ny = function(player, nb) {
		__fx.donationsTracker.logDonation(player, nb, bK.f4[0]);
		player === a8.eF && (aI.ny(bK.f4[0], bK.f4[1], nb), this.lP[12] += bK.f4[1], this.lP[16] += bK.f4[0]), nb === a8.eF && (aI.a2m(bK.f4[0], player), this.lP[10] += bK.f4[0])
	}, this.ob = function(player) {
		b7.fs.za(player) && (this.lP[2]++, this.lP[12] += bK.f4[1])
	}, this.on = function(player) {
		b7.fs.za(player) && (this.lP[19]++, this.lP[12] += bK.f4[1])
	}, this.aOx = function(player) {
		b7.fs.za(player) && this.lP[20]++
	}, this.fw = function(player, a0H, oB) {
		b7.fs.za(player) && (this.lP[oB] += a0H)
	}, this.iR = function() {
		var self;
		this.aQE || 0 < aQD-- || ((self = this).wz[self.aKG] = ab.gK[a8.eF], self.zf[self.aKG] = ab.gY[a8.eF], self.a6r[self.aKG] = aZ.a6s(a8.eF), aQI(self, self.aKG), self.aKG++, self.aKG === aQB && function(self) {
			aQG(self), aQI(self, 0), self.aKG = 1 + bH.ex(aQB, 2);
			for (var a6 = 1; a6 < self.aKG; a6++) self.wz[a6] = self.wz[2 * a6], self.zf[a6] = self.zf[2 * a6], self.a6r[a6] = self.a6r[2 * a6], aQI(self, a6);
			aQC *= 2
		}(self), aQD = aQC - 1, ba.lG(), 0 === ab.lT[a8.eF] && (self.aQE = bb.jZ()))
	}
}

function dI() {
	this.a0 = 0, this.j6 = 0, this.qU = 0, this.qV = 0, this.aQK = 0, this.aQL = 0, this.a4A = 0, this.aG3 = 0;
	var aQM = this.aAJ = 0;
	this.aQN = 0, this.aQO = 0, this.aQP = 0, this.a3Z = 0, this.oB = 0, this.a6U = null, this.uj = !1, this.aQQ = -1, this.aQR = !1, this.aQS = [0, 0], this.dS = function() {
		this.a6U = [L(391), L(96, 0, "Balance"), L(95, 0, "Interest"), L(392)]
	}, this.dR = function() {
		this.uj = !1, this.aQQ = -1, this.aQR = !1, this.resize()
	}, this.resize = function() {
		this.a0 = au.a0 < 1.369 * au.j6 ? au.a0 : 1.369 * au.j6;
		var eY = r.s.v9() && au.a0 < au.j6 ? 1 : r.s.v9() ? .8 : au.a0 < au.j6 ? .65 : .59;
		this.a0 = Math.floor(eY * this.a0), this.a0 -= r.s.v9() && au.a0 < au.j6 ? 2 * bY.gap + 2 : 0, this.j6 = Math.floor(this.a0 / 1.369), this.a3Z = Math.floor(this.j6 / 150), this.a3Z = Math.max(this.a3Z, 1.5), this.qU = Math.floor(1 + .02 *
			this.a0), this.qV = Math.floor(1 + .04 * this.a0), this.a4A = this.qV, aQM = Math.floor(.75 * this.a4A), this.aG3 = Math.floor(1 + .075 * this.a0), this.aQN = Math.floor(1 + .1125 * this.a0), this.aQO = Math.floor(this.a0 * (r.s
			.v9() ? .03 : .029)), this.aQO = Math.max(this.aQO, 4), this.aQP = Math.floor(.035 * this.a0), this.aQP = Math.max(this.aQP, 4), this.aAJ = this.j6 - 2 * this.a4A - this.aG3 - this.aQN, this.uj && this.aQT()
	}, this.gk = function(kh, ki) {
		var tR, tQ;
		return !!this.uj && (tQ = kh, tR = ki, kh -= bH.ex(au.a0 - this.a0, 2), ki -= bH.ex(au.j6 - this.j6, 2), kh < 0 || ki < 0 || kh >= this.a0 || ki >= this.j6 || kh >= this.a0 - this.aQN && ki < this.aQN ? -1 !== aH.gk(tQ, tR) || b8.gk(tQ,
			tR) || this.qh() : ki < this.aQN || (ki < this.j6 - this.aG3 ? (this.aQR = !0, this.aQQ = (kh - 2 * this.qU - this.aQK) / this.aQL, 3 !== this.oB && (bb.dZ = !0)) : (tQ = (tQ = Math.floor(kh / (this.a0 / this.a6U.length))) <
			0 ? 0 : tQ >= this.a6U.length ? this.a6U.length - 1 : tQ) !== this.oB && (this.oB = tQ, this.aQT(), bb.dZ = !0)), !0)
	}, this.xh = function(kh, ki) {
		return this.aQS[0] = kh, this.aQS[1] = ki, !(!this.uj || !this.aQR || (kh -= bH.ex(au.a0 - this.a0, 2), ki = this.aQQ, this.aQQ = (kh - 2 * this.qU - this.aQK) / this.aQL, (0 <= this.aQQ && this.aQQ <= 1 || 0 <= ki && ki <= 1) && (bb
			.dZ = !0), 0))
	}, this.y7 = function() {
		this.aQR && (this.aQR = !1)
	}, this.yJ = function() {
		this.uj ? this.qh() : this.show()
	}, this.show = function() {
		bZ.aKG < 2 || (this.uj = !0, this.aQT())
	}, this.qh = function() {
		this.uj = !1, this.aQQ = -1, bb.dZ = !0
	}, this.aQT = function() {
		this.oB < 2 ? this.aQK = aL.measureText(b7.wv.a05(bZ.max[this.oB]), b7.pB.qS(0, this.aQO)) : 2 === this.oB && (this.aQK = aL.measureText(b7.wv.a0A(6, 2), b7.pB.qS(0, this.aQO))), this.aQL = this.a0 - 2 * this.qU - this.aQK - this.qV
	}, this.lG = function() {
		this.uj && this.aQT()
	}, this.rA = function() {
		this.uj && this.a4R()
	}, this.a4R = function() {
		var ec = bH.ex(au.a0 - this.a0, 2),
			ee = bH.ex(au.j6 - this.j6, 2);
		rB.setTransform(1, 0, 0, 1, ec, ee), rB.fillStyle = u.mT, rB.fillRect(0, this.aQN, this.a0, this.j6 - this.aQN), this.aQU(), this.aJP(), rB.strokeRect(0, 0, this.a0, this.j6), b7.pB.textAlign(rB, 2), rB.font = b7.pB.qS(0, this.aQO), 0 ===
			this.oB ? this.aQV(bZ.wz, ec, ee) : 1 === this.oB ? this.aQV(bZ.zf, ec, ee) : 2 === this.oB ? this.aQW(ec, ee) : 3 === this.oB && (this.aQX(ec, ee), this.aQY(ec, ee)), aH.a1r(Math.floor(ec + this.a0 - .725 * this.aQN), Math.floor(ee +
				.275 * this.aQN), Math.floor(.45 * this.aQN)), rB.setTransform(1, 0, 0, 1, 0, 0)
	}, this.aQU = function() {
		var a6, e4;
		for (rB.lineWidth = this.a3Z, b7.pB.textBaseline(rB, 1), b7.pB.textAlign(rB, 1), rB.strokeStyle = u.mW, rB.font = b7.pB.qS(1, this.aQP), e4 = this.a0 / this.a6U.length, rB.fillStyle = u.mp, rB.fillRect(this.oB * e4, this.j6 - this.aG3,
				e4, this.aG3), rB.fillStyle = u.mW, rB.fillRect(0, this.j6 - this.aG3 - .5 * this.a3Z, this.a0, this.a3Z), a6 = 1; a6 <= 3; a6++) rB.fillRect(a6 * e4, this.j6 - this.aG3, this.a3Z, this.aG3);
		for (a6 = this.a6U.length - 1; 0 <= a6; a6--) rB.fillText(b7.uR.zE(this.a6U[a6], 0, .9 * e4), (a6 + .5) * e4, this.j6 - .46 * this.aG3)
	}, this.aJP = function() {
		rB.fillStyle = u.n8, rB.fillRect(0, 0, this.a0, this.aQN), rB.fillStyle = u.mW, rB.fillRect(0, this.aQN - .5 * this.a3Z, this.a0, this.a3Z), rB.font = b7.pB.qS(1, .39 * this.aQN), rB.fillText(b7.uR.zE(L(393), 0, .8 * this.a0), Math.floor(
			this.a0 / 2), Math.floor(.55 * this.aQN))
	}, this.aQV = function(g, ec, ee) {
		var kM = bZ.max[this.oB],
			yd = (rB.setTransform(1, 0, 0, 1, ec + 2 * this.qU + this.aQK, ee + this.a4A + this.aQN), rB.lineWidth = 2, this.aAJ / Math.sqrt(kM));
		rB.beginPath(), rB.moveTo(this.aQL, this.aAJ - yd * Math.sqrt(g[bZ.aKG - 1]));
		for (var a6 = bZ.aKG - 2; 0 <= a6; a6--) rB.lineTo(a6 * this.aQL / (bZ.aKG - 1), this.aAJ - yd * Math.sqrt(g[a6]));
		rB.stroke();
		ec = this.a1r(g, yd, .5);
		ec < .95 && rB.fillText(b7.wv.a05(kM), -this.qU, 0), .05 < Math.abs(ec - .5) && rB.fillText(b7.wv.a05(Math.floor(kM / 4)), -this.qU, Math.floor(this.aAJ / 2)), .05 < ec && rB.fillText("0", -this.qU, this.aAJ)
	}, this.aQW = function(ec, ee) {
		rB.setTransform(1, 0, 0, 1, ec + 2 * this.qU + this.aQK, ee + this.a4A + this.aQN), rB.lineWidth = 2;
		var yd = this.aAJ / Math.max(bZ.max[this.oB], 1);
		rB.beginPath(), rB.moveTo(this.aQL, this.aAJ - yd * bZ.a6r[bZ.aKG - 1]);
		for (var a6 = bZ.aKG - 2; 0 <= a6; a6--) rB.lineTo(a6 * this.aQL / (bZ.aKG - 1), this.aAJ - yd * bZ.a6r[a6]);
		rB.stroke();
		ec = this.a1r(bZ.a6r, yd, 1), ee = bZ.max[this.oB] / 100;
		ec < .95 && rB.fillText(b7.wv.a0A(ee, 2), -this.qU, 0), .05 < Math.abs(ec - .5) && rB.fillText(b7.wv.a0A(ee / 2, 2), -this.qU, Math.floor(this.aAJ / 2)), .05 < ec && rB.fillText(b7.wv.a0A(0, 2), -this.qU, this.aAJ)
	}, this.aQX = function(ec, ee) {
		rB.setTransform(1, 0, 0, 1, ec + .34 * this.a0, ee + 2 * aQM + this.aQN), b7.pB.textAlign(rB, 2);
		for (var a6F = this.j6 - 4 * aQM - this.aG3 - this.aQN, g = [0, 1, 19, 2, 20, 3, 4, 5, 6, 7], a6 = 9; 0 <= a6; a6--) rB.fillText(b7.uR.zE(bZ.aQF[g[a6]], 0, .31 * this.a0), 0, a6 * a6F / 9);
		var ey = bZ.lP;
		for (rB.setTransform(1, 0, 0, 1, ec + .39 * this.a0, ee + 2 * aQM + this.aQN), b7.pB.textAlign(rB, 0), rB.fillText(b7.wv.a0A(100 * ey[0] / (1024 * Math.max(ey[1], 1)), 1), 0, 0), a6 = 8; 1 <= a6; a6--) rB.fillText(ey[g[a6]].toString(), 0,
			a6 * a6F / 9);
		rB.fillText(b7.wv.a0A(100 * (1 - ab.gK[a8.eF] / ey[7]), 0), 0, a6F)
	}, this.aQY = function(ec, ee) {
		rB.setTransform(1, 0, 0, 1, ec + .79 * this.a0, ee + 2 * aQM + this.aQN), b7.pB.textAlign(rB, 2);
		var a6, a6F = this.j6 - 4 * aQM - this.aG3 - this.aQN;
		for (rB.fillStyle = u.mk, a6 = 2; 0 <= a6; a6--) rB.fillText(b7.uR.zE(bZ.aQF[a6 + 8], 0, .31 * this.a0), 0, a6 * a6F / 9);
		rB.fillText(b7.uR.zE(bZ.aQF[18], 0, .31 * this.a0), 0, 3 * a6F / 9), rB.fillStyle = u.mj, rB.fillText(b7.uR.zE(bZ.aQF[11], 0, .31 * this.a0), 0, 4 * a6F / 9), rB.fillStyle = u.mz, rB.fillText(b7.uR.zE(bZ.aQF[13], 0, .31 * this.a0), 0, 5 *
				a6F / 9), rB.fillText(b7.uR.zE(bZ.aQF[15], 0, .31 * this.a0), 0, 6 * a6F / 9), rB.fillText(b7.uR.zE(bZ.aQF[16], 0, .31 * this.a0), 0, 7 * a6F / 9), rB.fillText(b7.uR.zE(bZ.aQF[12], 0, .31 * this.a0), 0, 8 * a6F / 9), rB
			.fillStyle = u.my, rB.fillText(b7.uR.zE(bZ.aQF[17], 0, .31 * this.a0), 0, a6F), rB.fillStyle = u.mk;
		var ey = bZ.lP,
			aJc = ey[8] + ey[9] + ey[10] + ey[18],
			aJc = b7.wv.a05(aJc),
			aIG = rB.measureText(aJc).width,
			ec = (rB.setTransform(1, 0, 0, 1, ec + .83 * this.a0 + aIG, ee + 2 * aQM + this.aQN), rB.fillText(b7.wv.a05(ey[8]), 0, 0), rB.fillText(b7.wv.a05(ey[9]), 0, a6F / 9), rB.fillText(b7.wv.a05(ey[10]), 0, 2 * a6F / 9), rB.fillText(b7.wv
				.a05(ey[18]), 0, 3 * a6F / 9), rB.fillStyle = u.mj, rB.fillText(aJc, 0, 4 * a6F / 9), rB.fillStyle = u.mz, rB.fillText(b7.wv.a05(ey[13]), 0, 5 * a6F / 9), rB.fillText(b7.wv.a05(ey[15]), 0, 6 * a6F / 9), rB.fillText(b7.wv.a05(
				ey[16]), 0, 7 * a6F / 9), rB.fillText(b7.wv.a05(ey[12]), 0, 8 * a6F / 9), ey[12] + ey[13] + ey[15] + ey[16]);
		rB.fillStyle = u.my, rB.fillText(b7.wv.a05(ec), 0, a6F), rB.fillStyle = u.mW
	}, this.a1r = function(g, yd, a52) {
		var a6, e, fE;
		return this.aQQ < 0 || 1 < this.aQQ ? .25 : (a6 = this.aQQ * (bZ.aKG - 1), fE = g[e = Math.floor(a6)], fE += (a6 - e) * (g[e < bZ.aKG - 1 ? e + 1 : e] - fE), rB.strokeStyle = u.mZ, .04 < this.aQQ && this.aQa(0, this.aAJ - yd * Math.pow(
				fE, a52), a6 * this.aQL / (bZ.aKG - 1), this.aAJ - yd * Math.pow(fE, a52)), .04 < fE / bZ.max[this.oB] && this.aQa(a6 * this.aQL / (bZ.aKG - 1), this.aAJ, a6 * this.aQL / (bZ.aKG - 1), this.aAJ - yd * Math.pow(fE, a52)), rB
			.fillStyle = u.n1, rB.beginPath(), rB.arc(a6 * this.aQL / (bZ.aKG - 1), this.aAJ - yd * Math.pow(fE, a52), Math.max(2, .014 * this.j6), 0, 2 * Math.PI), rB.fill(), g = this.aQQ * bb.a6t, g = 0 === ab.lT[a8.eF] ? Math.floor(g * bZ
				.aQE) : Math.floor(g * bb.jZ()), rB.fillStyle = u.mW, rB.fillText(1 === a52 ? b7.wv.a0A(fE / 100, 2) : b7.wv.a05(Math.floor(fE)), -this.qU, this.aAJ - yd * Math.pow(fE, a52)), b7.pB.textAlign(rB, 1), rB.fillText(aR.a6i(g),
				a6 * this.aQL / (bZ.aKG - 1), this.aAJ + this.aQO - (r.s.v9() ? 2 : 0) - this.a3Z), b7.pB.textAlign(rB, 2), yd * Math.pow(fE, a52) / this.aAJ)
	}, this.aQa = function(lv, lw, m9, mA) {
		rB.beginPath(), rB.moveTo(lv, lw), rB.lineTo(m9, mA), rB.stroke()
	}
}

function bp() {
	this.aQb = "https://", this.aQc = this.aQb + "territorial.io/", this.aKH = this.aQc + "changelog", this.aKL = this.aQc + "terms", this.aQd = this.aQc + "cookie_policy", this.aJh = this.aQc + "privacy", this.aKK = this.aQc + "tutorial", this.aKJ =
		this.aQc + "players", this.aKI = this.aQc + "clans", this.x1 = this.aQc + "clan-results", this.a85 = this.aQb + "play.google.com/store/apps/details?id=territorial.io", this.xF = this.aQb + "apps.apple.com/app/id1581110913", this.aQe = this
		.aQb + "www.youtube.com/watch?v=toZTQ8aRdFc", this.a86 = this.aQb + "discord.gg/pthqvpTXmh", this.a87 = this.aQb + "www.instagram.com/davidtschacher/", this.v2 =
		"🇦🇫🇦🇽🇦🇱🇩🇿🇦🇸🇦🇩🇦🇴🇦🇮🇦🇶🇦🇬🇦🇷🇦🇲🇦🇼🇦🇺🇦🇹🇦🇿🇧🇸🇧🇭🇧🇩🇧🇧🇧🇾🇧🇪🇧🇿🇧🇯🇧🇲🇧🇹🇧🇴🇧🇦🇧🇼🇧🇷🇮🇴🇻🇬🇧🇳🇧🇬🇧🇫🇧🇮🇨🇻🇰🇭🇨🇲🇨🇦🇮🇨🇰🇾🇨🇫🇹🇩🇨🇱🇨🇳🇨🇽🇨🇨🇨🇴🇰🇲🇨🇬🇨🇩🇨🇷🇭🇷🇨🇺🇨🇼🇨🇾🇨🇿🇩🇰🇩🇯🇩🇲🇩🇴🇪🇨🇪🇬🇸🇻🇬🇶🇪🇷🇪🇪🇸🇿🇪🇹🇪🇺🇫🇰🇫🇴🇫🇯🇫🇮🇫🇷🇬🇫🇵🇫🇹🇫🇬🇦🇬🇲🇬🇪🇩🇪🇬🇭🇬🇮🇬🇷🇬🇱🇬🇩🇬🇵🇬🇺🇬🇹🇬🇬🇬🇳🇬🇼🇬🇾🇭🇹🇭🇳🇭🇰🇭🇺🇮🇸🇮🇳🇮🇩🇮🇷🇮🇶🇮🇪🇮🇲🇮🇱🇮🇹🇨🇮🇯🇲🇯🇵🇯🇪🇯🇴🇰🇿🇰🇪🇰🇮🇽🇰🇰🇼🇰🇬🇱🇦🇱🇻🇱🇧🇱🇸🇱🇷🇱🇾🇱🇮🇱🇹🇱🇺🇲🇴🇲🇰🇲🇬🇲🇼🇲🇾🇲🇻🇲🇱🇲🇹🇲🇭🇲🇶🇲🇷🇲🇺🇾🇹🇲🇽🇫🇲🇲🇩🇲🇨🇲🇳🇲🇪🇲🇸🇲🇦🇲🇿🇲🇲🇳🇦🇳🇷🇳🇵🇳🇱🇳🇨🇳🇿🇳🇮🇳🇪🇳🇬🇳🇺🇳🇫🇰🇵🇲🇵🇳🇴🇴🇲🇵🇰🇵🇼🇵🇸🇵🇦🇵🇬🇵🇾🇵🇪🇵🇭🇵🇱🇵🇹🇵🇷🇶🇦🇷🇴🇷🇺🇷🇼🇼🇸🇸🇲🇸🇹🇸🇦🇸🇳🇷🇸🇸🇨🇸🇱🇸🇬🇸🇽🇸🇰🇸🇮🇸🇧🇸🇴🇿🇦🇬🇸🇰🇷🇸🇸🇪🇸🇱🇰🇧🇱🇸🇭🇰🇳🇱🇨🇲🇫🇵🇲🇻🇨🇸🇩🇸🇷🇸🇪🇸🇾🇨🇭🇹🇼🇹🇯🇹🇿🇹🇭🇹🇱🇹🇬🇹🇰🇹🇴🇹🇹🇹🇳🇹🇷🇹🇲🇹🇨🇹🇻🇺🇬🇺🇦🇦🇪🇬🇧🇺🇳🇺🇸🇻🇮🇺🇾🇺🇿🇻🇺🇻🇦🇻🇪🇻🇳🇼🇫🇪🇭🇾🇪🇿🇲🇿🇼"
}

function d0() {
	this.l7 = new aQf, this.uO = new aQg, this.dR = function() {
		this.l7.dR()
	}, this.iR = function() {
		0 !== this.l7.a2v && this.l7.a2v--
	}
}

function aQg() {
	this.rA = function() {
		if (0 !== bL.l7.a2v && (rB.globalAlpha = Math.min(bL.l7.a2v / 580, 1), rB.drawImage(bL.l7.aQj, 1 + aN.uM(), 1 + aN.uN()), rB.globalAlpha = 1, a8.gs)) {
			for (var lv = hu / hv, lw = hw / hv, m9 = (au.a0 + hu) / hv, mA = (au.j6 + hw) / hv, g5 = bL.l7.aQk * hv, aQl = bL.l7.aQl, a6 = a8.jc - 1; 0 <= a6; a6--) ! function(a6, g5, lv, lw, m9, mA, aQl) {
				var highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[a6];
				if (highlight) g5 *= 2;
				0 === ab.lT[a6] || 0 === ab.gK[a6] || (m9 = au.a0 * ((ab.i8[a6] + ab.i9[a6] + 1) / 2 - lv) / (m9 - lv) - .5 * g5, lv = au.j6 * ((ab.iA[a6] + ab.iB[a6] + 1) / 2 - lw) / (mA - lw) - .5 * g5, m9 > au.a0) || lv > au.j6 || m9 < -
					g5 || lv < -g5 || (rB.setTransform(highlight ? hv * 2 : hv, 0, 0, highlight ? hv * 2 : hv, m9, lv), rB.drawImage(aQl[a8.ic ? bc.eT[a6] : 1], 0, 0))
			}(a6, g5, lv, lw, m9, mA, aQl);
			rB.setTransform(hv, 0, 0, hv, 0, 0)
		}
	}
}

function aQf() {
	this.aQk = 28, this.a2v = 0, this.aQj = null;
	var aQn = this.aQl = null;

	function aQq(h9, aQr) {
		var ec, ee, eH, hf, z2 = b7.pB.sh(h9, h9),
			hF = b7.pB.getContext(z2, !0),
			hC = b7.pB.getImageData(hF, h9, h9),
			ss = hC.data,
			kM = (h9 >> 1) - .5,
			aQs = .5 + kM;
		for (aQs *= aQs, ee = 0; ee < h9; ee++)
			for (ec = 0; ec < h9; ec++) hf = (hf = ec - kM) * hf + (hf = ee - kM) * hf, ss[eH = 4 * (ee * h9 + ec)] = aQr[0], ss[1 + eH] = aQr[1], ss[2 + eH] = aQr[2], ss[3 + eH] = (aQs - hf) * aQr[3] / aQs;
		return hF.putImageData(hC, 0, 0), z2
	}

	function aPz(a6, hF, z2, h9) {
		var ec, y, highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[a6];
		if (highlight) h9 *= 2;
		0 !== ab.lT[a6] && 0 !== ab.gK[a6] && (ec = ab.i8[a6] + ab.i9[a6] + 1 - h9 - 2 >> 1, y = ab.iA[a6] + ab.iB[a6] + 1 - h9 - 2 >> 1,
			highlight ? hF.drawImage(z2[a8.ic ? bc.eT[a6] : a6 < a8.jc ? 1 : 0], ec, y, h9, h9) :
			hF.drawImage(z2[a8.ic ? bc.eT[a6] : a6 < a8.jc ? 1 : 0], ec, y))
	}
	this.dR = function() {
		var wc;
		this.a2v = 700,
			function(wc) {
				var h9 = wc.aQk;
				if (wc.aQl = [], aQn = [], a8.ic)
					for (var a6 = 0; a6 <= a8.tV; a6++) wc.aQl.push(aQq(h9, bc.aOr[bc.k2[a6]])), aQn.push(aQq(h9 >> 1, bc.aOr[bc.k2[a6]]));
				else wc.aQl.push(aQq(h9, bc.aOr[7])), wc.aQl.push(aQq(h9, bc.aOr[4])), aQn.push(aQq(h9 >> 1, bc.aOr[7]))
			}(this),
			function(wc, aQt) {
				var a6, aQj = wc.aQj,
					hF = b7.pB.getContext(aQj, !0),
					eV = a8.eS,
					h9 = wc.aQk >> 1;
				hF.imageSmoothingEnabled = !1, hF.setTransform(1, 0, 0, 1, 0, 0), aQt && hF.clearRect(0, 0, aQj.width, aQj.height);
				for (a6 = a8.jc; a6 < eV; a6++) aPz(a6, hF, aQn, h9)
			}(this, null !== (wc = this).aQj && wc.aQj.width === bO.eg - 2 && wc.aQj.height === bO.eh - 2 || (wc.aQj = b7.pB.sh(bO.eg - 2, bO.eh - 2), !1)), a8.gs || this.a0S()
	}, this.aOq = aQq, this.a0S = function() {
		for (var eV = a8.jc, h9 = this.aQk, aQl = this.aQl, hF = b7.pB.getContext(this.aQj, !0), a6 = 0; a6 < eV; a6++) aPz(a6, hF, aQl, h9)
	}
}

function d1() {
	function aQu(player) {
		a8.gs ? (af.aBA(player), ag.aE6(), a8.jy && a8.oS.iR()) : b0.aE4(player)
	}
	this.nr = function(player) {
		return !!aH.a1q(player) && (aI.wH(player, player === a8.eF ? 21 : 22), aQu(player), !0)
	}, this.oP = function(player) {
		1 === a8.w5 && 0 !== ab.lT[player] && 2 !== ab.zY[player] && aQu(player), a8.w8--, a8.w7--, aI.wH(player, 4), b7.fs.gi(2) && aR.lF(!0)
	}
}

function dB() {
	this.a9o = ["rgba(90,90,90,0.88)", "rgba(130,12,12,0.88)", "rgba(12,130,12,0.88)", "rgba(12,12,130,0.88)", "rgba(130,130,12,0.88)", "rgba(130,12,130,0.88)", "rgba(12,130,130,0.88)", "rgba(130,130,130,0.88)", "rgba(0,0,0,0.88)"], this.a6D = [
		"rgb(210,200,200)", "rgb(255,120,120)", "rgb(0,230,0)", "rgb(150,150,255)", "rgb(240,240,25)", "rgb(255,70,255)", "rgb(25,240,240)", u.mW, "rgb(170,170,170)"
	], this.aQv = [u.mW, "rgb(255,0,0)", "rgb(0,255,0)", "rgb(0,0,255)", "rgb(255,255,0)", "rgb(255,0,255)", "rgb(0,255,255)", u.mW, u.mN], this.aQw = [u.mN, u.mW, u.mW, u.mW, u.mN, u.mN, u.mN, u.mN, u.mW];
	var aQx = ["255,255,255", "0,0,0", "255,4,4", "200,4,4", "4,255,4", "4,180,4", "255,195,195", "90,3,3", "200,255,200", "3,84,3"],
		aQy = (this.aDa = ["rgba(" + aQx[0] + ",", "rgba(" + aQx[1] + ",", "rgba(" + aQx[2] + ",", "rgba(" + aQx[3] + ",", "rgba(" + aQx[4] + ",", "rgba(" + aQx[5] + ",", "rgba(" + aQx[6] + ",", "rgba(" + aQx[7] + ",", "rgba(" + aQx[8] + ",",
			"rgba(" + aQx[9] + ","
		], this.aDb = ["rgb(" + aQx[0] + ")", "rgb(" + aQx[1] + ")", "rgb(" + aQx[2] + ")", "rgb(" + aQx[3] + ")", "rgb(" + aQx[4] + ")", "rgb(" + aQx[5] + ")", "rgb(" + aQx[6] + ")", "rgb(" + aQx[7] + ")", "rgb(" + aQx[8] + ")", "rgb(" + aQx[
			9] + ")"
		], this.wR = null, this.aOr = [
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
	this.k2 = [0, 1, 2, 3, 4, 5, 6, 7, 8], this.eT = new Uint8Array(a8.eS), this.wr = null, this.aQz = null, this.tb = new Uint16Array(a8.eS), this.tc = new Uint16Array(this.k2.length + 1), this.td = new Uint16Array(this.k2.length), this.dS =
		function() {
			this.wR = [L(394), L(395), L(396), L(397), L(398), L(399), L(400), L(401), L(402)]
		}, this.dR = function() {
			if (this.eT.fill(0), this.aR0(), a8.ic) {
				9 === a8.jw ? this.aR1() : a8.jy ? function() {
					var colorsData = a8.data.colorsData;
					if (!a8.data.selectableColor)
						for (var a6 = a8.jc - 1; 0 <= a6; a6--) colorsData[a6] = av.iu(262144);
					var aRA = 0,
						el = 768,
						aM8 = [4 * (colorsData[0] >> 12), 4 * (colorsData[0] >> 6 & 63), 4 * (63 & colorsData[0])],
						teamPlayerCount = a8.data.teamPlayerCount;
					for (a6 = 0; a6 < 9; a6++)
						if (teamPlayerCount[a6]) {
							for (var eY = 0, ep = 0; ep < 3; ep++) eY += Math.abs(aQy[a6][ep] - aM8[ep]);
							eY < el && (aRA = a6, el = eY)
						} var aRB = new Uint16Array(9);
					for (a6 = 0; a6 < 9; a6++) aRB[a6] = teamPlayerCount[a6];
					var k2 = bc.k2,
						aRC = new Uint8Array(9),
						fz = (k2[0] = 0, 1);
					for (a6 = 1; a6 < 9; a6++) aRB[a6] && (aRC[a6] = fz, k2[fz++] = a6);
					var it = a8.jc,
						eT = bc.eT;
					aRB[aRA] ? (aRB[aRA]--, eT[0] = aRC[aRA]) : it = 0;
					var eq = 0;
					for (a6 = it; a6 < a8.tO; a6++) {
						var k1 = k2[eq];
						if (aRB[k1]) aRB[k1]--, eT[a6] = aRC[k1];
						else if (a6--, 9 <= ++eq) return console.log("error 325")
					}
				}() : this.iR();
				for (var eV = a8.eS, tb = bc.tb, tc = bc.tc, td = bc.td, eT = bc.eT, k2 = bc.k2, tU = k2.length, dk = new Array(tU), a6 = 0; a6 < tU; a6++) dk[a6] = [];
				for (a6 = 0; a6 < eV; a6++) dk[k2[eT[a6]]].push(a6);
				for (a6 = 1; a6 <= tU; a6++) tc[a6] = tc[a6 - 1] + dk[a6 - 1].length;
				for (a6 = 0; a6 < tU; a6++)
					for (var fz = dk[a6].length, kM = tc[a6], k1 = 0; k1 < fz; k1++) tb[k1 + kM] = dk[a6][k1];
				var jc = a8.jc;
				for (a6 = 0; a6 < tU; a6++)
					for (fz = dk[a6].length, kM = tc[a6], k1 = 0; k1 < fz; k1++)
						if (tb[k1 + kM] >= jc) {
							td[a6] = k1;
							break
						}
			}
		}, this.aR0 = function() {
			for (var a6 = this.k2.length - 1; 0 <= a6; a6--) this.k2[a6] = a6;
			this.wr = [], this.aQz = []
		}, this.aR1 = function() {
			for (var a6 = a8.data.teamPlayerCount[7] - 1; 0 <= a6; a6--) this.eT[a6] = 1;
			for (a6 = a8.data.teamPlayerCount[7]; a6 < a8.eS; a6++) this.eT[a6] = 2;
			this.k2[1] = 7, this.k2[2] = 8
		}, this.iR = function() {
			var hO = new Uint8Array(a8.jc),
				hP = new Uint8Array(a8.jc),
				aR4 = new Uint16Array(8),
				aR5 = new Uint16Array(this.k2.length);
			this.aR6(hO, hP, aR4, 1), this.aAn(aR4), this.aR7(aR5, hO, hP), this.aR8(hO, hP, aR5), this.aR9()
		}, this.aR6 = function(hO, hP, aRB, aRD) {
			for (var ep, e, aRE, eV = this.k2.length - aRD, g = new Uint16Array(eV), colorsData = a8.data.colorsData, a6 = a8.jc - 1; 0 <= a6; a6--) {
				for (ep = eV; aRD <= ep; ep--) g[ep - 1] = Math.abs(4 * (colorsData[a6] >> 12) - aQy[ep][0]) + Math.abs(4 * (colorsData[a6] >> 6 & 63) - aQy[ep][1]) + Math.abs(4 * (63 & colorsData[a6]) - aQy[ep][2]);
				for (aRE = 768, ep = eV - 1; 0 <= ep; ep--) g[e = (ep + a6) % eV] < aRE && (aRE = g[e], hO[a6] = e);
				for (aRB[hO[a6]] += 4, aRE = 768, ep = eV - 1; 0 <= ep; ep--) g[e = (ep + a6) % eV] < aRE && e !== hO[a6] && (aRE = g[e], hP[a6] = e);
				aRB[hP[a6]]++
			}
		}, this.aAn = function(aRB) {
			for (var ep, kO, eV = this.k2.length - 1, a6 = eV; 0 <= a6; a6--) this.k2[a6] = a6;
			for (a6 = eV - 1; 0 <= a6; a6--) aRB[a6]++;
			for (a6 = 1; a6 <= eV; a6++) {
				for (kO = 0, ep = 1; ep < eV; ep++) aRB[ep] > aRB[kO] && (kO = ep);
				aRB[kO] = 0, this.k2[a6] = kO + 1
			}
		}, this.aR7 = function(aR5, hO, hP) {
			var a6, ep, aLp, eq, eY, e, m7, qi, aRF = this.k2.length - 1,
				pd = new Uint16Array(aRF),
				aRG = [],
				a4A = Math.max(a8.jc + 1 >> 1, 6);
			loop: for (a6 = 0; a6 < a8.jc; a6++)
				if (null !== (aLp = b7.wv.ww(ab.wx[a6]))) {
					for (ep = this.wr.length - 1; 0 <= ep; ep--)
						if (aLp === this.wr[ep] && this.aQz[ep].length < a4A) {
							this.aQz[ep].push(a6);
							continue loop
						} this.wr.push(aLp), aRG.push(!1), this.aQz.push([a6])
				}
			for (ep = this.wr.length - 1; 0 <= ep; ep--) {
				for (eY = -1, eq = this.wr.length - 1; 0 <= eq; eq--) !aRG[eq] && (-1 === eY || this.aQz[eq].length > this.aQz[eY].length) && (eY = eq);
				for (eq = aRF - 1; 0 <= eq; eq--) pd[eq] = 1;
				for (eq = this.aQz[eY].length - 1; 0 <= eq; eq--) pd[hO[this.aQz[eY][eq]]] += 3, pd[hP[this.aQz[eY][eq]]]++;
				for (a6 = aRF - 1; 0 <= a6; a6--) {
					for (e = eY % aRF, eq = aRF - 1; 0 <= eq; eq--) pd[eq] > pd[e] && (e = eq);
					for (m7 = -1, eq = a8.tV; 0 < eq; eq--)
						if (this.k2[eq] === e + 1) {
							m7 = eq;
							break
						} if (pd[e] = 0, -1 !== m7) {
						for (qi = 0, eq = a8.tV; 0 < eq; eq--) aR5[m7] > aR5[eq] && qi++;
						if (qi !== a8.tV - 1) {
							for (eq = this.aQz[eY].length - 1; 0 <= eq; eq--) aR5[m7]++, this.eT[this.aQz[eY][eq]] = m7;
							break
						}
					}
				}
				aRG[eY] = !0
			}
		}, this.aR8 = function(hO, hP, aR5) {
			for (var a6, he, eV = this.k2.length - 1, border = bH.ex(a8.jc, a8.tV), aRH = (0 < a8.jc % a8.tV && border++, new Uint8Array(1 + eV)), ep = eV; 1 <= ep; ep--) aRH[this.k2[ep]] = ep;
			for (a6 = 0; a6 < a8.jc; a6++) he = aRH[hO[a6] + 1], 0 === this.eT[a6] && he <= a8.tV && aR5[he] < border && (aR5[he]++, this.eT[a6] = he);
			for (a6 = 0; a6 < a8.jc; a6++) he = aRH[hP[a6] + 1], 0 === this.eT[a6] && he <= a8.tV && aR5[he] < border && (aR5[he]++, this.eT[a6] = he);
			for (ep = a8.tV; 1 <= ep; ep--)
				for (a6 = a8.jc - 1; 0 <= a6 && !(aR5[ep] >= border); a6--) 0 === this.eT[a6] && (aR5[ep]++, this.eT[a6] = ep)
		}, this.aR9 = function() {
			for (var a6 = a8.jc; a6 < a8.eS; a6++) this.eT[a6] = 1 + a6 % a8.tV
		}
}

function gL() {
	for (var ec, ee, a6 = fR - 1; 0 <= a6; a6--) ec = bH.ex(fT[a6], 4) % bO.eg, ee = bH.ex(fT[a6], 4 * bO.eg), ab.i8[fM] = ab.i8[fM] > ec ? ec : ab.i8[fM], ab.iA[fM] = ab.iA[fM] > ee ? ee : ab.iA[fM], ab.i9[fM] = ab.i9[fM] < ec ? ec : ab.i9[fM], ab
		.iB[fM] = ab.iB[fM] < ee ? ee : ab.iB[fM]
}

function fg() {
	var eY, g4, a6, eV = ab.fy[fM].length,
		eX = aX.eX;
	loop: for (a6 = eV - 1; 0 <= a6; a6--) {
		for (eY = 3; 0 <= eY; eY--)
			if (g4 = ab.fy[fM][a6] + eX[eY], aX.eM(g4) || aX.g6(g4) && aX.eN(g4) !== fM) {
				aX.ip(ab.fy[fM][a6], fM);
				continue loop
			} ab.fy[fM][a6] = ab.fy[fM][eV - 1], ab.fy[fM].pop(), eV--
	}
}

function fh() {
	var player = fM,
		gC = ab.gC,
		gD = ab.gD,
		ev = ab.ev,
		eV = gC[player].length,
		eX = aX.eX;
	loop: for (var a6 = eV - 1; 0 <= a6; a6--) {
		for (var aRI = !1, aRJ = !1, eY = 3; 0 <= eY; eY--) {
			var g4 = gC[player][a6] + eX[eY];
			if (aX.aAx(g4, player)) continue loop;
			aRI = aRI || aX.gz(g4), aRJ = aRJ || aX.aAw(g4)
		}
		aRI ? gD[player].push(gC[player][a6]) : aRJ ? ev[player].push(gC[player][a6]) : aX.tx(gC[player][a6], player), gC[player][a6] = gC[player][eV - 1], gC[player].pop(), eV--
	}
}

function gA() {
	ab.gK[fQ] -= fR
}

function gB(border) {
	for (var eV = border.length, a6 = eV - 1; 0 <= a6; a6--) aX.uH(fQ, border[a6]) || (border[a6] = border[eV - 1], border.pop(), eV--)
}

function gE(border) {
	for (var eV = border.length, a6 = eV - 1; 0 <= a6; a6--) !aX.uH(fQ, border[a6]) && aX.eQ(border[a6]) && (border[a6] = border[eV - 1], border.pop(), eV--)
}

function gF(border) {
	for (var eY, g4, eV = border.length, eX = aX.eX, a6 = eV - 1; 0 <= a6; a6--)
		for (eY = 3; 0 <= eY; eY--)
			if (g4 = border[a6] + eX[eY], aX.aAx(g4, fQ)) {
				ab.gC[fQ].push(border[a6]), border[a6] = border[eV - 1], border.pop(), eV--;
				break
			}
}

function gG() {
	for (var eY, g4, eX = aX.eX, a6 = fR - 1; 0 <= a6; a6--)
		for (eY = 3; 0 <= eY; eY--) g4 = fT[a6] + eX[eY], aX.aAy(fQ, g4) && aX.aAz(g4) && (ab.gC[fQ].push(g4), aX.g1(g4, fQ))
}

function gH() {
	var ec, ee;
	loop: for (; ab.iA[fQ] < ab.iB[fQ];) {
		for (ec = ab.i9[fQ]; ec >= ab.i8[fQ]; ec--)
			if (aX.uH(fQ, 4 * (ab.iA[fQ] * bO.eg + ec))) break loop;
		ab.iA[fQ]++
	}
	loop: for (; ab.iA[fQ] < ab.iB[fQ];) {
		for (ec = ab.i9[fQ]; ec >= ab.i8[fQ]; ec--)
			if (aX.uH(fQ, 4 * (ab.iB[fQ] * bO.eg + ec))) break loop;
		ab.iB[fQ]--
	}
	loop: for (; ab.i8[fQ] < ab.i9[fQ];) {
		for (ee = ab.iB[fQ]; ee >= ab.iA[fQ]; ee--)
			if (aX.uH(fQ, 4 * (ee * bO.eg + ab.i8[fQ]))) break loop;
		ab.i8[fQ]++
	}
	loop: for (; ab.i8[fQ] < ab.i9[fQ];) {
		for (ee = ab.iB[fQ]; ee >= ab.iA[fQ]; ee--)
			if (aX.uH(fQ, 4 * (ee * bO.eg + ab.i9[fQ]))) break loop;
		ab.i9[fQ]--
	}
}

function eO(player, ik) {
	return 0 === bc.eT[player] || bc.eT[player] !== bc.eT[ik]
}

function h5(player, ik) {
	for (var e, aRK = aY.fc(player), a6 = 0; a6 < aRK; a6++)
		if (0 === aY.fd(player, a6))
			if ((e = aY.fi(player, a6)) === a8.eS) {
				if (ik === a8.eS) return !1;
				if (h3(ik)) return !0
			} else if (b7.fs.kQ(e))
		if (ik === a8.eS) {
			if (h3(e)) return !0
		} else if (h7(ik, e)) return !0;
	return !1
}

function h3(player) {
	for (var a6, g5, eV = ab.gC[player].length, eX = aX.eX, eY = 3; 0 <= eY; eY--)
		for (g5 = eX[eY], a6 = 0; a6 < eV; a6++)
			if (aX.eM(ab.gC[player][a6] + g5)) return !0;
	return !1
}

function aB6(player) {
	for (var a6, g5, eV = ab.gC[player].length, eX = aX.eX, eY = 3; 0 <= eY; eY--)
		for (g5 = eX[eY], a6 = 0; a6 < eV; a6++)
			if (aX.io(ab.gC[player][a6]) && aX.eM(ab.gC[player][a6] + g5)) return !0;
	return !1
}

function h7(zb, zc) {
	for (var a6, e4, g5, g4, aP2 = ab.gC[zb].length, aP3 = ab.gC[zc].length, eX = (aP3 < aP2 && (e4 = zb, zb = zc, zc = e4, e4 = aP2, aP2 = aP3, 0), aX.eX), eY = 3; 0 <= eY; eY--)
		for (g5 = eX[eY], a6 = 0; a6 < aP2; a6++)
			if (g4 = ab.gC[zb][a6] + g5, aX.g6(g4) && aX.eN(g4) === zc) return !0;
	return !1
}

function aB7(zb, zc) {
	for (var a6, g5, g4, aP2 = ab.gC[zb].length, eX = aX.eX, eY = 3; 0 <= eY; eY--)
		for (g5 = eX[eY], a6 = 0; a6 < aP2; a6++)
			if (aX.io(ab.gC[zb][a6]) && (g4 = ab.gC[zb][a6] + g5, aX.g6(g4)) && aX.eN(g4) === zc) return !0;
	return !1
}

function dO() {
	this.oc = new aRL
}

function aRL() {
	this.h2 = function(player) {
		b7.fs.zZ(player) && aI.wT(80, L(403), 637, 0, u.nA, u.mT, -1, !1)
	}, this.a1S = function() {
		aI.wT(80, L(404), 637, 0, u.nA, u.mT, -1, !1)
	}, this.nf = function(player) {
		b7.fs.zZ(player) && aI.wT(80, L(405), 637, 0, u.nA, u.mT, -1, !1)
	}
}

function aRM() {
	this.aRN = 0, this.iR = function() {
		aJ.iR(), aU.iR(), au.iR(), ax.l7.iR(), at.a9J(), bb.dZ && (bb.dZ = !1, aV.rA())
	}
}

function aRO() {
	this.e3 = bb.e3, this.oB = 0, this.aRN = 0, this.a9E = 0, this.aRP = null, this.aRQ = 7, this.a2w = 0, this.dR = function() {
		this.a9E = 0, this.aRP = [], this.oB = 0, this.aRN = 0
	}, this.aLX = function(a7) {
		var a6;
		if (a8.gs) this.a6u(a7);
		else if (this.aRP.push(a7), 2 === a8.w5) {
			for (a6 = 0; a6 < this.aRP.length; a6++) b5.nU.iR(this.aRP[a6]);
			this.aRP = []
		}
	}, this.a6u = function(a7) {
		b5.nU.iR(a7), b6.iR(), aR.a6u(this.a9E), this.a9E === a8.a0Y ? (a8.oS.iR(), this.a9E = 0, this.oB = 0, this.aRN = 0, this.e3 = bb.e3) : (this.a9E++, aa.a0R(), aa.lF(!0), bX.a7S())
	}, this.iR = function() {
		au.iR(), a8.gs ? (bb.dZ = aR.a6u(-1) || bb.dZ, lH()) : (0 !== this.oB || bb.e3 >= this.e3 && (this.e3 += bb.a6t * Math.floor(1 + (bb.e3 - this.e3) / bb.a6t), 2 === a8.w5 ? l5() : this.aRR(), this.oB++, 27 < bb.e3 - this.a2w)) && this
		.aRS(), lC(), bb.dZ && (bb.dZ = !1, uK()), this.a2w = bb.e3
	}, this.aRS = function() {
		bb.dZ = !0, lE(), this.oB = 0
	}, this.aRR = function() {
		var rk, a6;
		if (this.aRN !== 7 * this.a9E) l8(), bX.a7S();
		else {
			rk = !1;
			loop: for (; this.aRT() && (rk = !0, l8(), 2 !== a8.w5) && 0 < this.aRP.length;)
				for (a6 = this.aRQ - 2; 0 <= a6; a6--)
					if (l8(), 2 === a8.w5) break loop;
			rk ? bX.a7S() : (l5(), bX.a0U())
		}
	}, this.aRT = function() {
		return 0 < this.aRP.length && (this.a9E++, b5.nU.iR(this.aRP[0]), this.aRP.shift(), !0)
	}
}

function aRU() {
	var aRV, aRW, aRX, a9E, aRY, oB = 0,
		e3 = bb.e3;

	function aRb() {
		! function() {
			if (!a8.gs) return;
			if (a8.jy) return;
			if (aRY % 7 != 0) aRY++;
			else if (a9E === a8.a0Y) {
				if (!aRe()) return;
				aR.a6u(a9E), a8.oS.iR()
			} else {
				if (!aRe()) return;
				aRY++, a9E++, aa.a0R(), aa.lF(!0)
			}
			return 1
		}() && aRe() && l8()
	}

	function aRc() {
		oB = 0, (a8.gs ? (bb.dZ = aR.a6u(a9E - (aRY % 7 == 0 ? 0 : 1) + aRY % 7 / 7) || bb.dZ, lH) : aH.gh || !b8.a0u ? lH : (bb.dZ = !0, lE))()
	}

	function aRe() {
		var a6, eV, aRf = b6.oQ.aMc,
			fE = b6.oQ.aMd,
			fG = b6.oQ.aMe,
			fI = b6.oQ.aMf,
			aRg = b6.oQ.aMg,
			aRh = b6.oQ.aMh;
		if (!(aRV >= aRh.length)) {
			if (aRh = aRh[aRV], aRg[aRV]) {
				for (eV = aRW + aRh, a6 = aRW; a6 < eV; a6++) b5.nU.oD(aRf[a6], fE[a6], fG[a6], fI[a6]);
				aRW += aRh, aRV++
			} else ++aRX >= aRh && (aRV++, aRX = 0);
			return 1
		}
		aI.xP("Replay file smaller than expected."), b8.yK(!1), a8.w5 = 2
	}
	this.aRN = 0, this.dR = function() {
		aRY = a9E = aRX = aRW = aRV = 0
	}, this.iR = function() {
		var aPP;
		au.iR(), b8.a4M() < 1.7 ? 0 === oB ? bb.e3 >= e3 && (aPP = bb.a6t / b8.a4M(), e3 += aPP * Math.floor(1 + (bb.e3 - e3) / aPP), 2 === a8.w5 || aH.gh || !b8.a0u ? l5() : (aRb(), bX.a7S()), oB++) : aRc() : function() {
			var aPP;
			if (bb.e3 >= e3)
				if (2 === a8.w5 || aH.gh || !b8.a0u) l5(), e3 = bb.e3;
				else {
					for (aPP = bb.a6t / b8.a4M(), 16 < (bb.e3 - e3) / aPP && (e3 = bb.e3 - 16 * aPP); bb.e3 >= e3 && 2 !== a8.w5;) e3 += aPP, aRb();
					bX.a7S()
				} aRc()
		}(), lC(), bb.dZ && (bb.dZ = !1, uK())
	}, this.wF = function() {
		aRV !== b6.oQ.aMh.length && aRV + 1 !== b6.oQ.aMh.length && aI.xP("Replay file larger than expected.")
	}
}

function aRi() {
	var oB = 0,
		e3 = bb.e3;
	this.aRN = 0, this.iR = function() {
		au.iR(), a8.gs ? lH() : 0 === oB ? bb.e3 >= e3 && (e3 += bb.a6t * Math.floor(1 + (bb.e3 - e3) / bb.a6t), 2 === a8.w5 || aH.gh ? l5() : (l8(), bX.a7S()), oB++) : ((aH.gh ? lH : (bb.dZ = !0, lE))(), oB = 0), lC(), bb.dZ && (bb.dZ = !1,
		uK())
	}
}

function dJ() {
	this.wE = null, this.dZ = !1, this.e3 = 0, this.a6t = 56;
	var aRj = 0;

	function aRk() {
		bb.e3 = aRj = performance.now(), bb.wE.iR(), window.requestAnimationFrame(aRk)
	}
	this.dR = function() {
		this.a0s(), window.requestAnimationFrame(aRk), this.e3 = performance.now()
	}, this.a0j = function() {
		a8.gg ? (this.wE = new aRU, this.wE.dR()) : a8.jy ? this.wE = new aRi : (this.wE = new aRO, this.wE.dR())
	}, this.a0s = function() {
		this.wE = new aRM, this.dZ = !0
	}, this.iR = function() {
		this.wE.aRN++
	}, this.jZ = function() {
		return this.wE.aRN
	}, this.aLD = function() {
		var e4 = performance.now();
		e4 < aRj + 1e3 || (this.e3 = e4, this.wE.iR())
	}
}

function cl() {
	var lg = 0,
		aRl = !0;

	function aRn(os) {
		8 !== aV.xL() || 2 !== ab.zY[a8.eF] && (0 !== ab.lT[a8.eF] || a8.gs) || aI.a2d(os)
	}
	this.iR = function() {
		var e4, a2z;
		bb.e3 > lg && (lg = bb.e3 + 2500, e4 = new Date, a2z = e4.getUTCSeconds(), aRl ? a2z < 45 && (aRl = !1) : a2z < 45 || (aRl = !0, (a2z = e4.getUTCMinutes() + 1) % 15 == 0 && aRn(30 === a2z ? "Upcoming Battle Royale Contest!" :
			"Upcoming Alliance Contest!")))
	}
}

function cd() {
	var lv, lw, m9, mA, aRo = 0,
		aRp = 0;

	function aRr() {
		return Math.pow(Math.pow(m9 - lv, 2) + Math.pow(mA - lw, 2), .5)
	}

	function aRq(e) {
		lv = au.pH * e.touches[0].clientX, lw = au.pH * e.touches[0].clientY, m9 = au.pH * e.touches[1].clientX, mA = au.pH * e.touches[1].clientY
	}
	this.xl = function(e) {
		return 1 < e.touches.length ? (aRp = bb.e3, aRo = 3, aRq(e), aG.qh(), !0) : (aRo = 0, !1)
	}, this.xm = function(e) {
		var aEt, hc, hd;
		return 0 !== a8.w5 && 1 < e.touches.length && (aRo = Math.max(aRo - 1, 0), aC.mE() && (aEt = aRr(), aRq(e), e = aRr(), hc = Math.floor((lv + m9) / 2), hd = Math.floor((lw + mA) / 2), aN.a4m(hc, hd, Math.max(.125, e) / Math.max(.125,
			aEt)), bb.dZ = !0), !0)
	}, this.yA = function() {
		var ec, ee;
		return !!(aRo && (aRo = 0, bb.e3 < aRp + 500)) && (ec = (lv + m9) / 2, ee = (lw + mA) / 2, aG.y3(ec, ee), aG.click(ec, ee, !0) && (bb.dZ = !0), !0)
	}
}

function cu() {
	this.size = 0, this.oB = 0, this.a7 = null, this.dR = function(a7) {
		this.oB = 0, this.a7 = a7, this.size = a7.length
	}, this.xX = function() {
		this.a7 = null
	}, this.oC = function(size) {
		for (var ey = 0, a7 = this.a7, mE = this.oB + size - 1, a6 = this.oB; a6 <= mE; a6++) ey |= (a7[a6 >> 3] >> 7 - (7 & a6) & 1) << mE - a6;
		return this.oB += size, this.oB > 8 * this.size && console.error("Unwrapper Overflow"), ey
	}, this.aLl = function(size) {
		var ep = size >> 1;
		return (1 << ep) * this.oC(size - ep) + this.oC(ep)
	}, this.aLk = function(aRs) {
		return this.size === b9.aLe(aRs)
	}, this.aMu = function(aRt, aRu, aRv) {
		var fz = this.oC(aRt);
		if (!fz) return null;
		for (var aRt = Math.max(fz, aRv), g = new(aRu <= 8 ? Uint8Array : aRu <= 16 ? Uint16Array : Uint32Array)(aRt), a6 = 0; a6 < fz; a6++) g[a6] = this.oC(aRu);
		aRv = g[fz - 1];
		return aRv && g.fill(aRv, fz), g
	}, this.aMv = function(aRt, aRw, aRv) {
		var fz = this.oC(aRt);
		if (!fz) return null;
		for (var aRt = Math.max(fz, aRv), g = new Array(aRt), a6 = 0; a6 < fz; a6++) g[a6] = this.aMs(aRw);
		return g.fill(g[fz - 1], fz), g
	}, this.aMs = function(aRt) {
		return bC.sI.sK(this.oC(aRt))
	}, this.aMt = function() {
		var os = bB.qP.qQ(bB.qP.qR(this.oC(30))),
			os = b7.wv.a0M(os, "_", "/");
		os = b7.wv.a0M(os, "-", "+");
		for (var aRx = "";
			(os.length + aRx.length) % 4;) aRx += "=";
		os = "data:image/png;base64," + os + aRx;
		var aBc = new Image;
		aBc.onload = function() {
			b6.aC2.aC3(aBc), aBc.onload = null, aBc = null
		}, aBc.src = os
	}
}

function dD() {
	this.aNj = 0, this.aNk = 0, this.aNf = 0, this.aNg = 0, this.aNh = 0, this.aNi = 0, this.a7T = [0, 0, 0, 0], this.mD = function() {
		this.aNj = aN.uM(), this.aNk = aN.uN(), this.aNf = -this.aNj, this.aNg = -this.aNk, this.aNh = au.a0 / hv, this.aNi = au.j6 / hv, this.a7T[0] = Math.floor(this.aNf), this.a7T[1] = Math.floor(this.aNg), this.a7T[2] = Math.floor(this.a7T[
			0] + this.aNh + 1), this.a7T[3] = Math.floor(this.a7T[1] + this.aNi + 1), bX.a7Q = !0
	}
}

function ce() {
	var a3V, lg;
	this.dR = function() {
		a3V = 1, lg = 0
	}, this.iR = function() {
		0 < a3V && (lg = 0 === lg ? bb.e3 + 16 : lg, a3V = (a3V -= .001 * (bb.e3 - lg)) < 0 ? 0 : a3V, lg = bb.e3, bb.dZ = !0)
	}, this.rA = function() {
		0 < a3V && (rB.fillStyle = "rgba(0,0,0," + a3V + ")", rB.fillRect(0, 0, au.a0, au.j6))
	}
}

function ch() {
	function aS1(map, ec, ee, a0, j6) {
		map >= bO.aEB || (bO.eB === map && (rB.fillStyle = u.n9, rB.fillRect(ec, ee, a0, j6), rB.fillStyle = u.mW), rB.strokeRect(ec, ee, a0, j6), rB.fillText(b7.uR.zE(bO.sf.sg[map].name, 0, .9 * a0), Math.floor(ec + .5 * a0), Math.floor(ee + .55 *
			j6)))
	}
	this.uj = !1, this.aS0 = [0, 0, 0, 0], this.show = function() {
		this.uj = !0, this.resize(), bb.dZ = !0
	}, this.resize = function() {
		var aP2 = bH.ex(bO.aEB + bO.aEB % 2, 2),
			aP2 = au.j6 - aP2 * bY.gap;
		r.s.v9() ? this.aS0[2] = Math.floor(.75 * au.min) : this.aS0[2] = Math.floor(.5 * au.min), this.aS0[3] = Math.floor(1.25 * this.aS0[2]), this.aS0[3] > aP2 && (this.aS0[3] = aP2, this.aS0[2] = Math.floor(aP2 / 1.2)), this.aS0[0] = Math
			.floor((au.a0 - this.aS0[2]) / 2), this.aS0[1] = Math.floor((au.j6 - this.aS0[3]) / 2)
	}, this.xh = function(ec, ee) {
		return !(ec < this.aS0[0] || ee < this.aS0[1] || ec > this.aS0[0] + this.aS0[2] || ee > this.aS0[1] + this.aS0[3])
	}, this.gk = function(ec, ee) {
		var a4A, aP2 = bH.ex(bO.aEB + bO.aEB % 2, 2);
		return bb.dZ = !0, ec < this.aS0[0] || ee < this.aS0[1] || ec > this.aS0[0] + this.aS0[2] || ee > this.aS0[1] + this.aS0[3] ? !(this.uj = !1) : (a4A = Math.floor(.17 * this.aS0[3]), ee < this.aS0[1] + a4A ? ec > this.aS0[0] + this.aS0[
			2] - a4A && (this.uj = !1) : (ee = (ee = Math.floor(aP2 * (ee - this.aS0[1] - a4A - .00576 * au.pD) / (this.aS0[3] - a4A - .01152 * au.pD))) < 0 ? 0 : aP2 - 1 < ee ? aP2 - 1 : ee, ec > this.aS0[0] + this.aS0[2] / 2 && (ee += aP2),
				ee >= bO.aEB || bO.a2(ee, Math.floor(16384 * Math.random()))), !0)
	}, this.rA = function() {
		var a6, lw, a4A = Math.floor(.17 * this.aS0[3]),
			aP2 = bH.ex(bO.aEB + bO.aEB % 2, 2),
			gap = .6 * .01152 * au.pD,
			aG3 = (this.aS0[3] - a4A - (aP2 + 1) * gap) / aP2,
			qU = Math.floor((this.aS0[2] - 3 * gap) / 2);
		for (rB.lineWidth = bY.vC, b7.pB.textAlign(rB, 1), b7.pB.textBaseline(rB, 1), rB.fillStyle = u.mT, rB.fillRect(this.aS0[0], this.aS0[1] + a4A, this.aS0[2], this.aS0[3] - a4A), rB.fillStyle = u.n9, rB.fillRect(this.aS0[0], this.aS0[1],
				this.aS0[2], a4A), rB.strokeStyle = u.mW, rB.strokeRect(this.aS0[0], this.aS0[1], this.aS0[2], this.aS0[3]), rB.fillStyle = u.mW, rB.fillRect(this.aS0[0], this.aS0[1] + a4A, this.aS0[2], 2), rB.font = b7.pB.qS(1, .48 * a4A), rB
			.fillText(L(406), Math.floor(this.aS0[0] + this.aS0[2] / 2), Math.floor(this.aS0[1] + .55 * a4A)), rB.font = b7.pB.qS(1, .48 * aG3), a6 = aP2 - 1; 0 <= a6; a6--) lw = Math.floor(this.aS0[1] + a4A + gap + a6 * (aG3 + gap)), aS1(a6,
			this.aS0[0] + gap, lw, qU, aG3), aS1(a6 + aP2, this.aS0[0] + qU + 2 * gap, lw, qU, aG3);
		aH.a1r(Math.floor(this.aS0[0] + this.aS0[2] - .7 * a4A), Math.floor(this.aS0[1] + .3 * a4A), Math.floor(.4 * a4A)), rB.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function a1() {
	this.size = 0, this.oB = 0, this.a7 = null, this.dR = function(a7) {
		this.oB = 0, this.a7 = a7, this.size = a7.length
	}, this.a2 = function(aRs) {
		return this.dR(new Uint8Array(this.aLe(aRs))), this.a7
	}, this.xX = function() {
		this.a7 = null
	}, this.a3 = function(size, a31) {
		for (var a7 = this.a7, mE = this.oB + size - 1, a6 = this.oB; a6 <= mE; a6++) a7[a6 >> 3] |= (a31 >> mE - a6 & 1) << 7 - (7 & a6);
		this.oB += size, this.oB > 8 * this.size && console.error("Wrapper Overflow")
	}, this.aLd = function(size, a31) {
		var ep = size >> 1,
			eY = 1 << ep;
		this.a3(size - ep, bH.ex(a31, eY)), this.a3(ep, a31 % eY)
	}, this.aS2 = function(size) {
		for (var a7 = this.a7, mE = this.oB + size, a6 = this.oB; a6 < mE; a6++) a7[a6 >> 3] &= 255 ^ 128 >>> (7 & a6)
	}, this.aLe = function(aRs) {
		return aRs + 7 >> 3
	}, this.aS3 = function(g, it, mE, aS4) {
		for (var a6 = it; a6 < mE; a6++) this.a3(aS4, g[a6])
	}
}

function ct() {
	this.dR = function() {
		this.g = [], this.oB = 0
	}, this.a3 = function(aS5, value) {
		for (var g = this.g, mE = this.oB + aS5 - 1, aS6 = 1 + (mE >> 3); g.length < aS6;) g.push(0);
		for (var a6 = this.oB; a6 <= mE; a6++) g[a6 >> 3] |= (value >> mE - a6 & 1) << 7 - (7 & a6);
		this.oB += aS5
	}, this.dY = function(g, aRt, aRu) {
		var aS7 = b7.pL.yz(g);
		this.a3(aRt, aS7);
		for (var a6 = 0; a6 < aS7; a6++) this.a3(aRu, g[a6])
	}, this.aNC = function(g, aRt, aRw) {
		var aS7 = b7.pL.yz(g);
		this.a3(aRt, aS7);
		for (var a6 = 0; a6 < aS7; a6++) this.aNA(g[a6], aRw)
	}, this.aNA = function(os, aRt) {
		var eV = os.length;
		this.a3(aRt, eV);
		for (var a6 = 0; a6 < eV; a6++) this.a3(16, os.charCodeAt(a6))
	}, this.aNB = function(z2) {
		var aS8 = (z2 = z2.toDataURL()).split(",");
		if (aS8.length < 2) console.log("error 266");
		else {
			z2 = b7.wv.a0M(z2 = aS8[aS8.length - 1], "/", "_"), z2 = b7.wv.a0M(z2, "\\+", "-");
			var z2 = b7.wv.a0M(z2, "=", ""),
				sT = bC.qP.sQ(z2),
				eV = sT.length;
			this.a3(30, eV);
			for (var a6 = 0; a6 < eV; a6++) this.a3(6, sT[a6])
		}
	}
}
a(), self.aiCommand746 = function(ey) {
	0 === ey ? bk() : 1 !== ey || !r || 1 !== r.id || r.ez < 14 || bF.f0()
}, setTimeout(bk, 1e4), window.onload = function() {
	bk()
};