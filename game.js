var h, a8, a9, aA, aB, aC, aD, aE, aF, aG, aH, aI, aJ, aK, aL, aM, aN, aO, aP, aQ, aR, aS, aT, aU, aV, aW, aX, aY, aZ, aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, at, au, av, aw, ax, ay, az, b0, b1, b2, b3, b4, b5, b6, b7,
	u, b8, b9, bA, bB, bC, bD, bE, bF, bG, bH, bI, bJ, bK, bL, bM, bN, bO, bP, n, bQ, bR, bS, bT, bU, bV, bW, bX, bY, bZ, ba, bb, bc, bd, r, be, bf, bg, l, bh, bi, bj, dd, de, a4, df, a5, fK, fL, fM, fN, fO, fP, fQ, fR, fS, fT, fU, fV, fW, hu, ht,
	hv, a3j, ks, jM, xf, rA, uO, a7T, a0k, a0l, S = ["⬅️ ", "canvas", "100%", "div", "rgb(", "rgba(", "none", "absolute", "undefined", "auto", "Data", "<br>", "center", "1em", "0.8em", "   ", "territorial.io", "input",
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
	this.dg = 1070, this.j = 19999, this.rVersion = 1, this.dR = function() {
		dd = 2, de = "24 Dec 2024 [1.99.9.9]", a4 = true, a5 = function() {
			try {
				return window.self !== window.top
			} catch (e) {
				return !0
			}
		}(), df = (new Date).getTime() % 1024
	}, this.i = 0
}

function dN() {
	this.id = new di, this.dR = function() {
		this.id.dR()
	}
}

function di() {
	this.dR = function() {
		0 === bf.dj.data[181].value && (bf.dj.dk(180, Math.floor(Math.random() * bH.pow(30))), bf.dj.dk(181, Math.floor((new Date).getTime() / 36e5)))
	}
}

function d6() {
	this.dl = new dm, this.dn = new dp, this.dR = function() {
		r.s.dq()
	}
}

function dm() {
	function e0() {}
	this.dR = function() {}, this.dz = function() {
		return !!e0() && (aiptag.cmd.player.push(function() {
			aiptag.adplayer.startVideoAd()
		}), !0)
	}, this.hideCMPButton = function() {
		"undefined" != typeof aipAPItag && aipAPItag.hideCMPButton && aipAPItag.hideCMPButton()
	}, this.showCMPButton = function() {
		"undefined" != typeof aipAPItag && aipAPItag.showCMPButton && aipAPItag.showCMPButton()
	}, this.showCMPScreen = function() {
		e0() && aipAPItag.showCMPScreen()
	}
}

function dp() {
	this.show = function() {
		return !1
	}
}

function cN() {
	this.e5 = new e6
}

function e6() {
	this.e7 = function(e8) {
		var eB;
		return bO.e9(bO.eA) && a8.data.passableMountains && (eB = aX.eC(e8), this.eD(a8.eE, eB) || this.eF(a8.eE, eB)) && 0 !== (eB = function(ea) {
			for (var eb = bI.ec(ea), ed = bI.ee(ea), max = Math.max(bO.ef, bO.eg) - 2, eh = max * max, ei = !1, ej = 0, ek = 0; ek < max; ek++) {
				var el, eG = function(eb, ed, ek) {
					for (var a6 = 0; a6 <= ek; a6++)
						for (var en = -1; en < 2; en += 2)
							for (var eo = -1; eo < 2; eo += 2)
								for (var ep = 0; ep < 2; ep++) {
									var e8 = function(eb, ed) {
										if (bI.er(eb, ed)) {
											eb = bI.es(eb, ed), ed = bI.eK(eb);
											if (aX.eP(ed) && aX.et(ed)) return eb
										}
										return 0
									}(eb + ep * en * a6 + (1 - ep) * eo * ek, ed + ep * eo * ek + (1 - ep) * en * a6);
									if (e8) return e8
								}
					return 0
				}(eb, ed, ek);
				eG && (el = bI.em(eb, ed, eG)) < eh && (ej = eG, eh = el, ei || (ei = !0, max = Math.floor(Math.sqrt(el)) + 1))
			}
			return ej
		}(bI.eI(e8))) && (e8 = bI.eK(eB), aX.eL(e8) || (e8 = aX.eM(e8)) !== a8.eE && eN(e8, a8.eE)) ? eB : 0
	}, this.eO = function(player, eG) {
		eG = bI.eK(eG);
		if (aX.eP(eG)) {
			if (aX.eL(eG)) bK.eQ[0] = a8.eR;
			else if (aX.eM(eG) !== bK.eQ[0]) return !1;
			for (var eS = function(e8) {
					var eW = aX.eW,
						eS = [];
					loop: for (var eX = 3; 0 <= eX; eX--) {
						var eY = e8 + eW[eX];
						if (aX.eZ(eY)) {
							for (var id = aX.eC(eY), a6 = 0; a6 < eS.length; a6++)
								if (id === eS[a6]) continue loop;
							bK.eV[eS.length] = eY, eS.push(id)
						}
					}
					return eS
				}(eG), eU = eS.length, a6 = 0; a6 < eU; a6++)
				if (this.eD(player, eS[a6]) || this.eF(player, eS[a6])) return bK.eV[0] = bK.eV[a6], !0
		}
		return !1
	}, this.eD = function(player, eB) {
		for (var eu = ab.eu[player], eU = eu.length, ev = Math.max(bH.ew(eU, 12), 1), eW = aX.eW, a6 = 0; a6 < eU; a6 += ev)
			for (var eJ = eu[a6], eX = 3; 0 <= eX; eX--) {
				var eY = eJ + eW[eX];
				if (aX.eZ(eY) && eB === aX.eC(eY)) return !0
			}
		return !1
	}, this.eF = function(player, eB) {
		for (var eu = ab.eu[player], eU = eu.length, eW = aX.eW, a6 = 0; a6 < eU; a6++)
			for (var eJ = eu[a6], eX = 3; 0 <= eX; eX--) {
				var eY = eJ + eW[eX];
				if (aX.eZ(eY) && eB === aX.eC(eY)) return !0
			}
		return !1
	}
}

function cz() {
	this.f0 = new Uint16Array(2), this.f1 = new Uint16Array(2), this.f2 = new Uint32Array(2), this.f3 = new Uint32Array(2), this.f4 = new Uint32Array(2), this.f5 = new Uint8Array(4), this.f6 = new Uint8Array(4), this.eV = new Uint32Array(4), this
		.f7 = new Uint32Array(5), this.eQ = new Uint32Array(8), this.f8 = new Uint16Array(16), this.f9 = new Uint16Array(512), this.fA = new Uint16Array(512), this.fB = new Uint16Array(512), this.fC = function(g, fD) {
			return g[0] = fD, g
		}, this.fE = function(g, fD, fF) {
			return g[0] = fD, g[1] = fF, g
		}, this.fG = function(g, fD, fF, fH) {
			return g[0] = fD, g[1] = fF, g[2] = fH, g
		}, this.fI = function(g, fD, fF, fH, fJ) {
			return g[0] = fD, g[1] = fF, g[2] = fH, g[3] = fJ, g
		}
}

function fX() {
	fQ = 0, fR = 2048, fS = new Uint32Array(4 * fR), fT = 0, fU = new Uint32Array(fR), fV = new Uint8Array(bO.ef * bO.eg)
}

function fY(player) {
	fL = player, fW = !1, fZ(), fa();
	for (var a6 = aY.fb(fL) - 1; 0 <= a6; a6--) 0 === aY.fc(fL, a6) && (fK = a6, fd());
	fW && fe()
}

function fe() {
	ff(), fg()
}

function fd() {
	fP = aY.fh(fL, fK), fM = aY.fi(fL, fK), fN = aY.fj(fL, fK), fk(), (0 !== fQ && (fm(), fn()) ? fo : fl)()
}

function fn() {
	if (!((fO = bH.ew(fM, fQ)) > a8.fp)) {
		if (!fN) return !1;
		var fq = fQ * (1 + a8.fp);
		fM += b7.fr.fs(fL, fq - fM), fO = bH.ew(fM, fQ)
	}
	return !0
}

function fm() {
	for (var a6 = fQ - 1; 0 <= a6; a6--) fV[bH.ew(fS[a6], 4)] = 0
}

function fl() {
	1 === aY.fb(fL) && aA.ft(fL);
	var e3 = b7.fr.fu(fL, fM);
	bZ.fv(fL, fM - e3, 12), aY.fw(fL, fK)
}

function fZ() {
	for (var player = fL, fx = ab.fx, eU = Math.min(fx[player].length, fR), fy = 0, fz = fU, a6 = eU - 1; 0 <= a6; a6--) fz[fy++] = fx[player][a6];
	fT = fy
}

function fa() {
	for (var a6 = ab.fx[fL].length - 1; 0 <= a6; a6--) aX.eP(ab.fx[fL][a6]) && aX.g0(ab.fx[fL][a6], fL);
	ab.fx[fL] = []
}

function fk() {
	fQ = 0, (fP === a8.eR ? g1 : g2)()
}

function g2() {
	for (var g3, g4, a6, eW = aX.eW, eX = 3; 0 <= eX; eX--)
		for (a6 = fT - 1; 0 <= a6; a6--) g3 = fU[a6] + eW[eX], g4 = bH.ew(g3, 4), 0 === fV[g4] && aX.g5(g3) && aX.eM(g3) === fP && (fV[g4] = 1, fS[fQ++] = g3)
}

function g1() {
	for (var g3, g4, a6, eW = aX.eW, eX = 3; 0 <= eX; eX--)
		for (a6 = fT - 1; 0 <= a6; a6--) g3 = fU[a6] + eW[eX], g4 = bH.ew(g3, 4), 0 === fV[g4] && aX.eL(g3) && (fV[g4] = 1, fS[fQ++] = g3)
}

function fo() {
	g6() ? (g7(), fP !== a8.eR && g8()) : fl()
}

function g8() {
	g9(), gA(ab.gB[fP]), gA(ab.gC[fP]), bO.e9(bO.eA) && gA(ab.eu[fP]), gD(ab.fx[fP]), gE(ab.gC[fP]), gE(ab.eu[fP]), gF(), gG()
}

function g7() {
	fW = !0, aY.gH(fL, fK, fM), aY.gI(fL, fK), ab.gJ[fL] += fQ, gK(), gL()
}

function g6() {
	return (fP === a8.eR ? gM : gN)()
}

function gN() {
	var gO = fQ * a8.fp,
		gP = gQ(),
		gR = gS(),
		gP = gO + 2 * gP + gR,
		gU = fO * fQ;
	return gP < gU ? (fM -= gP, bZ.fv(fL, gP, 13), gV(gP - gO, gR), !0) : fN && 0 === gR ? (fM -= gU, gU += b7.fr.fs(fL, gP - gU + 1), bZ.fv(fL, gU, 13), gV(gU - gO, 0), !0) : (fM -= gU, bZ.fv(fL, gU, 13), gV(gU - gO, gR), !1)
}

function gV(gU, gR) {
	if (0 < gR) {
		if (gU <= gR) return bZ.fv(fP, gU, 13), void aY.gW(fP, fL, gR - gU);
		aY.gW(fP, fL, 0), gU -= gR
	}
	gU = bH.ew(gU, 2), gU = Math.min(ab.gX[fP], gU), bZ.fv(fP, gU, 13), ab.gX[fP] -= gU
}

function gS() {
	return aY.gY(fP, fL)
}

function gQ() {
	return bH.ew(fQ * ab.gX[fP], 1 + bH.ew(10 * ab.gJ[fP], 16))
}

function gM() {
	var gZ = fQ * a8.fp;
	return fM -= gZ, bZ.fv(fL, gZ, 13), !0
}

function gL() {
	for (var a6 = fQ - 1; 0 <= a6; a6--) ab.fx[fL].push(fS[a6]), ab.gB[fL].push(fS[a6]), aX.g0(fS[a6], fL)
}

function d4() {
	var ga = 0,
		gb = 0;
	this.gc = function(eb, ed) {
		ga = eb, gb = ed
	}, this.gd = function(ge) {
		a8.gf || aH.gg || (b7.fr.gh(0) || b7.fr.gh(1)) && b7.fr.gi(a8.eE) && (aM.gj(ga, gb) ? aM.gk = !1 : function(ge) {
			var gm = bI.gn(ga),
				go = bI.gp(gb),
				eG = bI.es(gm, go),
				e8 = bI.eK(eG);
			bI.gq(gm, go) && (a8.gr ? aX.eP(e8) && b5.gs.gt(eG) : aX.eZ(e8) ? ge || (gm = ah.e5.e7(e8)) && (go = bI.eK(gm), go = aX.eL(go) ? a8.eR : aX.eM(go), b5.gs.gw(aM.gx(), gm, go)) : aX.gy(e8) || ge ? bJ.gz.h0(a8.eE, eG) && b5.gs
				.h1(aM.gx(), eG) : aX.eL(e8) ? h2(a8.eE) ? b5.gs.h3(aM.gx(), a8.eR) : h4(a8.eE, a8.eR) ? ay.h5(a8.eR, aM.gx()) : bJ.gz.h0(a8.eE, eG) && b5.gs.h1(aM.gx(), eG) : (gm = aX.eM(e8)) !== a8.eE && (eN(gm, a8.eE) ? h6(a8.eE,
					gm) ? b5.gs.h3(aM.gx(), gm) : h4(a8.eE, gm) ? ay.h5(gm, aM.gx()) : bJ.gz.h0(a8.eE, eG) && b5.gs.h1(aM.gx(), eG) : bJ.gz.h0(a8.eE, eG) && b5.gs.h1(aM.gx(), eG)))
		}(ge))
	}
}

function h7(h8, size, h9, hA, font) {
	var a6, hD = .2,
		canvas = document.createElement("canvas"),
		hE = canvas.getContext("2d", {
			alpha: !1
		});
	for (canvas.width = h8, canvas.height = h8, hE.font = size + font, hE.textAlign = "center", hE.textBaseline = "middle", hE.fillStyle = "red", a6 = 0; a6 < h9.length; a6++) hE.fillText(h9[a6], .5 * h8, .5 * h8);
	return -1 < (canvas = function(hB) {
		var a6, hG, eX = hB.data;
		for (a6 = eX.length - 4; 0 <= a6; a6 -= 4)
			if (hG = eX[a6], hA <= hG) return Math.floor(a6 / (4 * h8));
		return -1
	}(hE.getImageData(0, 0, h8, h8))) && (hD = (canvas - .5 * h8 + .1 * size) / size), Math.max(hD, 0)
}

function cx() {
	this.hH = new Int16Array(4), this.hI = new Int16Array(4), this.dR = function() {
		var a6;
		for (this.hH[0] = -bO.ef, this.hH[1] = 1, this.hH[2] = bO.ef, this.hH[3] = -1, a6 = 0; a6 < 4; a6++) this.hI[a6] = 4 * this.hH[a6]
	}, this.hJ = function(gu, hK) {
		var hL = this.ec(hK) - this.ec(gu),
			hK = this.ee(hK) - this.ee(gu),
			gu = hL >>> 31 << 1;
		return 5 + gu + (1 - gu) * (1 - (hK >>> 31 << 1)) * (Math.abs(hL) - Math.abs(hK) >>> 31) & 3
	}, this.hQ = function(gu, hK, hR) {
		return hR % 2 == 0 ? hR + (1 - hR) * (1 - (this.ec(hK) - this.ec(gu) >>> 31 << 1)) + 4 & 3 : hR + (2 - hR) * (1 - (this.ee(hK) - this.ee(gu) >>> 31 << 1)) + 4 & 3
	}, this.hT = function(g3, eG) {
		for (var hK, hU, hW = ab.gC[g3], eU = hW.length, a0 = bO.ef, hX = this.ec(eG), hY = this.ee(eG), ea = hW[0] >> 2, min = this.em(hX, hY, ea), a6 = 1; a6 < eU; a6++)(hU = (hU = hX - (hK = hW[a6] >> 2) % a0) * hU + (hU = hY - ~~((.5 + hK) /
			a0)) * hU) < min && (min = hU, ea = hK);
		return ea
	}, this.hZ = function(player, e8) {
		return !aX.eL(e8) && player === aX.eM(e8)
	}, this.em = function(gm, go, eG) {
		return (gm -= this.ec(eG)) * gm + (go -= this.ee(eG)) * go
	}, this.ha = function(hb, hc, hd) {
		hb = this.hf(hb) - this.hg(hd), hc = this.hi(hc) - this.hj(hd);
		return Math.sqrt(hb * hb + hc * hc)
	}, this.hk = function(gu, hK) {
		var he = this.ec(gu) - this.ec(hK),
			gu = this.ee(gu) - this.ee(hK);
		return Math.sqrt(he * he + gu * gu)
	}, this.hl = function(gu, hK) {
		var he = this.ec(gu) - this.ec(hK),
			gu = this.ee(gu) - this.ee(hK);
		return he * he + gu * gu
	}, this.hm = function(hn, ho, hp, hq) {
		return (hn -= hp) * hn + (ho -= hq) * ho
	}, this.hr = function(g3, hs) {
		return bH.ew(hs * ab.gX[g3], 1e3)
	}, this.hf = function(hb) {
		return 16 * (hb + ht) / hu
	}, this.hi = function(hc) {
		return 16 * (hc + hv) / hu
	}, this.hw = function(eX) {
		return 16 * eX / hu
	}, this.gn = function(hb) {
		return Math.floor((hb + ht) / hu)
	}, this.gp = function(hc) {
		return Math.floor((hc + hv) / hu)
	}, this.gq = function(gm, go) {
		return 1 <= gm && 1 <= go && gm < bO.ef - 1 && go < bO.eg - 1
	}, this.ec = function(eG) {
		return eG % bO.ef
	}, this.ee = function(eG) {
		return bH.ew(eG, bO.ef)
	}, this.es = function(gm, go) {
		return go * bO.ef + gm
	}, this.hx = function(eG) {
		return this.er(this.ec(eG), this.ee(eG))
	}, this.er = function(gm, go) {
		return 0 < gm && gm < bO.ef - 1 && 0 < go && go < bO.eg - 1
	}, this.eK = function(eG) {
		return eG << 2
	}, this.eI = function(e8) {
		return e8 >> 2
	}, this.hy = function(eG) {
		return bO.ef * this.ee(eG) * 256 + (this.ec(eG) << 4)
	}, this.hz = function(eG) {
		return this.hy(eG) + 8 + (bO.ef << 7)
	}, this.i0 = function(hd) {
		return bO.ef * (this.hj(hd) >> 4) + (this.hg(hd) >> 4)
	}, this.i1 = function(hd) {
		hd = this.i0(hd);
		return (this.ec(hd) >> 5) + bJ.i2.i3 * (this.ee(hd) >> 5)
	}, this.hg = function(hd) {
		return hd % (bO.ef << 4)
	}, this.hj = function(hd) {
		return bH.ew(hd, bO.ef << 4)
	}, this.i4 = function(eG, hR) {
		return eG + this.hH[hR]
	}, this.i5 = function(e8, hR) {
		return e8 + this.hI[hR]
	}, this.i6 = function(player) {
		return this.es(ab.i7[player] + ab.i8[player] >> 1, ab.i9[player] + ab.iA[player] >> 1)
	}, this.iB = function(player) {
		return this.es(av.iC(ab.i7[player], ab.i8[player]), av.iC(ab.i9[player], ab.iA[player]))
	}
}

function cb() {
	this.iD = new iE, this.iF = new iG, this.iH = new iI, this.performance = new iJ, this.iK = new iL, this.iM = new iN, this.iO = new iP, this.dR = function() {
		this.iD.dR(), this.iH.dR(), this.performance.dR(), this.iK.dR(), this.iM.dR()
	}, this.iQ = function() {
		this.performance.iQ(), this.iD.iQ()
	}
}

function iL() {
	var iR, iT = new Uint16Array(8);

	function ie(size, player) {
		for (var a6 = ab.fx[player].length - 1; size <= a6; a6--) aX.io(ab.fx[player][a6], player)
	}
	this.dR = function() {
		iR = 0
	}, this.iU = function(player, iV) {
		return bK.eQ[1] = ab.fx[player].length, bK.eQ[0] === a8.eR ? ai.iK.iW(player) : this.iX(player, bK.eQ[0]), (0 !== bK.eQ[1] || 0 !== ab.fx[player].length) && !(!iV && bK.eQ[1] === ab.fx[player].length || (bK.eQ[0] === a8.eR ? ab.iY[
			player]++ : ab.iZ[player]++, 0))
	}, this.ia = function(player) {
		a8.ib && (ai.iM.ic[player] = 1), ie(bK.eQ[1], player), aY.ig(player, bK.f3[0], bK.eQ[0]), aA.ih(player, !1)
	}, this.ii = function(player, ij, eU, ik) {
		var il = bH.ew(12 * ab.gX[player], 1024);
		ik -= ik >= bH.ew(ab.gX[player], 2) ? il : 0, ie(eU, player), aY.ig(player, ik, ij), ab.gX[player] -= ik + il, aA.ih(player, !1)
	}, this.iX = function(player, ij) {
		for (var hR, eW = aX.eW, a6 = ab.gB[player].length - 1; 0 <= a6; a6--)
			if (aX.im(ab.gB[player][a6]))
				for (hR = 3; 0 <= hR; hR--)
					if (aX.g5(ab.gB[player][a6] + eW[hR]) && aX.eM(ab.gB[player][a6] + eW[hR]) === ij) {
						ab.fx[player].push(ab.gB[player][a6]);
						break
					}
	}, this.iW = function(player) {
		for (var eW = aX.eW, a6 = ab.gB[player].length - 1; 0 <= a6; a6--)
			if (aX.im(ab.gB[player][a6]))
				for (var hR = 3; 0 <= hR; hR--)
					if (aX.eL(ab.gB[player][a6] + eW[hR])) {
						ab.fx[player].push(ab.gB[player][a6]);
						break
					}
	}, this.ip = function(player, iq) {
		var a6, en, hR, ir, eU = ab.gB[player].length,
			hS = 256 <= eU ? 12 : 32 <= eU ? 6 : 1,
			is = eU - 1 - av.it(hS),
			eW = aX.eW;
		iR = 0;
		loop: for (a6 = is; 0 <= a6; a6 -= hS)
			for (hR = 3; 0 <= hR; hR--)
				if ((ir = aX.eL(ab.gB[player][a6] + eW[hR]) ? a8.eR : aX.eM(ab.gB[player][a6] + eW[hR])) === a8.eR || aX.g5(ab.gB[player][a6] + eW[hR]) && ir !== player && (iq || eN(player, ir))) {
					for (en = iR - 1; 0 <= en; en--)
						if (iT[en] === ir) continue loop;
					if (iT[iR] = ir, 8 <= ++iR) return !0
				}
		return 0 < iR
	}, this.iu = function(player, iq) {
		var a6, hR, ir, eW = aX.eW;
		for (iR = 0, a6 = ab.gB[player].length - 1; 0 <= a6; a6--)
			for (hR = 3; 0 <= hR; hR--)
				if ((ir = aX.eL(ab.gB[player][a6] + eW[hR]) ? a8.eR : aX.eM(ab.gB[player][a6] + eW[hR])) === a8.eR || aX.g5(ab.gB[player][a6] + eW[hR]) && ir !== player && (iq || eN(player, ir))) return iT[iR++] = ir, !0;
		return !1
	}, this.iv = function() {
		for (var eo, a6 = iR - 1; 0 <= a6; a6--)
			if (iT[a6] === a8.eR) {
				for (iR--, eo = a6; eo < iR; eo++) iT[eo] = iT[eo + 1];
				return !0
			} return !1
	}, this.iw = function(player) {
		for (var eo, a6 = iR - 1; 0 <= a6; a6--)
			if (aY.ix(player, iT[a6]))
				for (iR--, eo = a6; eo < iR; eo++) iT[eo] = iT[eo + 1];
		return 0 === iR
	}, this.iy = function() {
		for (var a6 = iR - 1; 0 <= a6; a6--)
			if (b7.fr.iz(iT[a6])) return !0;
		return !1
	}, this.j0 = function() {
		for (var a6 = iR - 1; 0 <= a6; a6--) b7.fr.iz(iT[a6]) || (iT[a6] = iT[--iR]);
		return 0 < iR
	}, this.j1 = function(player) {
		for (var eo, j2 = iT[0], j3 = ab.gX[j2] + aY.gY(j2, player), a6 = iR - 1; 1 <= a6; a6--)(eo = ab.gX[iT[a6]] + aY.gY(iT[a6], player)) < j3 && (j2 = iT[a6], j3 = eo);
		return j2
	}, this.j4 = function(player) {
		var j5, j6 = iT[0];
		if (1 !== iR)
			for (var j7 = bH.ew(ab.i8[player] + ab.i7[player], 2), j8 = bH.ew(ab.iA[player] + ab.i9[player], 2), ek = j9(j7 - bH.ew(ab.i8[j6] + ab.i7[j6], 2)) + j9(j8 - bH.ew(ab.iA[j6] + ab.i9[j6], 2)), a6 = iR - 1; 1 <= a6; a6--)(j5 = j9(j7 - bH
				.ew(ab.i8[iT[a6]] + ab.i7[iT[a6]], 2)) + j9(j8 - bH.ew(ab.iA[iT[a6]] + ab.i9[iT[a6]], 2))) < ek && (ek = j5, j6 = iT[a6]);
		return j6
	}, this.jA = function() {
		for (var jB = iT, jC = jB[0], gX = ab.gX, jD = gX[jC], a6 = iR - 1; 1 <= a6; a6--) {
			var g3 = jB[a6],
				eo = gX[g3];
			jD < eo && (jC = g3, jD = eo)
		}
		return jC
	}
}

function iN() {
	function jS(player, ij, jI) {
		3 <= jI && 2142 < bb.jY() && (ij === a8.eR || ab.gX[ij] < bH.ew(ab.gX[player], 20)) && a9.jN(player, 20)
	}

	function jV(player, ik, ij, jI) {
		3 <= jI && jI < 6 && bH.ew(ab.gX[player], 8) > ab.gX[ij] && (ik = Math.max(bH.ew(11 * ab.gX[ij], 5), bH.ew(ab.gX[player], 10)));
		jI = ab.fx[player].length;
		ai.iK.iX(player, ij), ai.iK.ii(player, ij, jI, ik)
	}

	function jR(player, ik) {
		var ij = a8.eR,
			eU = ab.fx[player].length;
		ai.iK.iW(player), ab.fx[player].length !== eU && ai.iK.ii(player, ij, eU, ik)
	}
	this.ic = new Uint8Array(a8.eR), this.dR = function() {
		this.ic.fill(0)
	}, this.jE = function(player, ik) {
		var jG, jI, jJ, jK;
		a8.ib && (this.ic[player] = 0), aY.jF(player) && (jG = aZ.jH(player), 3 <= (jI = a9.ik[player]) && jI < 6 && (ik = Math.max(ab.gX[player] - jG, ik)), jJ = ab.gC[player].length, jK = ab.gB[player].length, 30 * ab.gJ[player] > a8.jL && jM[
			player] < 10 && 100 * jK <= jJ && a9.jN(player, 10), a8.ib ? function(player, ik, jI, jG) {
			var ij;
			if (ai.iK.ip(player, !1) || ai.iK.iu(player, !1)) {
				if (ai.iM.ic[player] = 1, !ai.iK.iw(player))
					if (ai.iK.iv()) jR(player, ik), jS(player, a8.eR, jI);
					else {
						if (av.jT(a9.jU[jI])) ij = ai.iK.j1(player);
						else {
							if (ai.iK.iy() && av.jT(a9.jW[jI]) && ai.iK.j0(), 6 === jI) return jV(player, ik, ai.iK.jA(), jI);
							ij = ai.iK.j4(player)
						}
						jV(player, ik, ij, jI), jS(player, ij, jI)
					}
			} else bJ.jP.iQ(player) || ai.iO.iQ(player) || ! function(player, ik, jI, jG) {
				var a6, eo, ep, eS = bc.eS,
					jZ = eS[player];
				if (0 !== jZ) {
					var gX = ab.gX,
						ja = gX[player],
						gJ = ab.gJ;
					if (player < a8.jb && (ik = ja), !(ja < gJ[player] || 5 === jI && ja < jG || 4 === jI && ja < bH.ew(jG, 2))) {
						var eU = ag.jc,
							jd = ag.je,
							jf = (a6 = av.it(eU), ai.iM.ic);
						for (eo = 0; eo < eU; eo++)
							if (ep = jd[(eo + a6) % eU], 1 === jf[ep] && eS[ep] === jZ) return b5.jg.jh(player, ep, ik);
						var ji = a8.ji,
							gC = ab.gC;
						for (eo = 0; eo < eU; eo++)
							if (ep = jd[(eo + a6) % eU], gX[ep] < ji * gJ[ep] && gC[ep].length && eS[ep] === jZ && ep !== player) return b5.jg.jh(player, ep, ik)
					}
				}
			}(player, ik, jI, jG)
		}(player, ik, jI, jG) : (!jK || jJ && (jJ < jK && !av.it(10) || 100 * jK <= jJ && av.it(3) || !av.it(8))) && bJ.jP.iQ(player) || function(player, ik, jI) {
			ai.iK.ip(player, !0) || ai.iK.iu(player, !0) ? ai.iK.iw(player) || (ai.iK.iv() ? jR(player, ik) : av.jT(a9.jU[jI]) ? jV(player, ik, ai.iK.j1(player), jI) : 5 === jI ? jV(player, ik, ai.iK.jA(), jI) : (ai.iK.iy() && av.jT(a9
				.jW[jI]) && ai.iK.j0(), jV(player, ik, 6 === jI ? ai.iK.jA() : ai.iK.j4(player), jI))) : ai.iO.iQ(player)
		}(player, ik, jI))
	}
}

function bw() {
	var jj = new Uint8Array(a8.eR),
		jk = new Uint16Array(a8.eR),
		jl = new Uint16Array(a8.eR),
		jm = new Uint8Array(a8.eR),
		jn = (this.ik = new Uint8Array(a8.eR), new Uint16Array(a8.eR)),
		jo = new Uint16Array(a8.eR);

	function k3(a6) {
		jj[a6] = 1 + bH.ew(jn[a6] * av.random(), 10 * av.value(100))
	}
	this.jp = null, this.jW = [97, 94, 70, 40, 20, 0, 100], this.jq = [500, 450, 400, 300, 80, 50, 100], this.jU = [0, 0, 5, 25, 50, 100, 0], this.jr = [60, 74, 112, 200, 256, 512, 512], this.js = [1, 2, 3, 4, 6, 8, 1], this.jt = [500, 450, 400, 300,
		80, 50, 100
	], this.dS = function() {
		this.jp = [L(0), L(1), L(2), L(3), L(4), L(5), "H Bot"]
	}, this.dR = function() {
		jj.fill(0), jk.fill(0), jl.fill(0), jm.fill(0), this.ik.fill(0), jn.fill(0), jo.fill(0);
		var ju = a8.jb;
		if (9 === a8.jv) this.jw();
		else if (__fx.customLobby.isActive())
			for (a6 = a8.jz - 1; 0 <= a6; a6--) this.ik[a6 + ju] = __fx.customLobby.gameInfo.difficulty;
		else if (a8.jx)
			if (3 === a8.data.botDifficultyType)
				for (a6 = a8.jz - 1; 0 <= a6; a6--) {
					var k0 = a6 + ju;
					this.ik[k0] = a8.data.botDifficultyData[k0]
				} else if (2 === a8.data.botDifficultyType)
					for (a6 = a8.jz - 1; 0 <= a6; a6--) this.ik[k0 = a6 + ju] = a8.data.botDifficultyTeam[bc.k1[bc.eS[k0]]];
				else if (1 === a8.data.botDifficultyType) {
			var k2 = this.jp.length;
			for (a6 = a8.jz - 1; 0 <= a6; a6--) this.ik[a6 + ju] = a6 % k2
		} else
			for (k2 = a8.data.botDifficultyValue, a6 = a8.jz - 1; 0 <= a6; a6--) this.ik[a6 + ju] = k2;
		else
			for (var jy = 8 === a8.jv ? 1 : 0, a6 = a8.jz - 1; 0 <= a6; a6--) this.ik[a6 + ju] = jy;
		for (a6 = 0; a6 < ju; a6++) this.ik[a6] = 6;
		var eU = a8.eR;
		for (a6 = 0; a6 < eU; a6++) this.ik[a6] <= 2 ? (jm[a6] = 5, jn[a6] = jo[a6] = 1040, 0 === this.ik[a6] ? (jk[a6] = 980, jl[a6] = 980) : 1 === this.ik[a6] ? (jk[a6] = 980, jl[a6] = 920, jn[a6] = jo[a6] = 1100) : (jk[a6] = 825, jl[a6] =
			750)) : this.ik[a6] <= 4 ? (jm[a6] = 1 + av.it(20), 3 === this.ik[a6] ? (jk[a6] = jl[a6] = 500, jn[a6] = jo[a6] = 1e3) : (jo[a6] = 250 + av.it(1501), jn[a6] = 500 + av.it(501), jk[a6] = 300 + av.it(201), jl[a6] = 100 + av.it(
			201))) : this.ik[a6] <= 5 ? (jn[a6] = 1e3, jo[a6] = 1e3, jm[a6] = 35 + av.it(16), jk[a6] = 300 + av.it(201), jl[a6] = 50 + av.it(101)) : (jn[a6] = jo[a6] = 800, jm[a6] = 5, jk[a6] = 10, jl[a6] = 250), k3(a6)
	}, this.jw = function() {
		for (var e8 = 0, ju = a8.jb, eo = 0; eo < 6; eo++) {
			for (var a6 = e8 + aw.k4[eo] - 1; e8 <= a6; a6--) this.ik[a6 + ju] = eo;
			e8 += aw.k4[eo]
		}
	}, this.jN = function(g3, value) {
		jj[g3] = Math.min(value, jj[g3])
	}, this.iQ = function(g3) {
		0 == --jj[g3] && ! function(g3) {
			(function(g3) {
				jn[g3] !== jo[g3] && (jn[g3] += jn[g3] < jo[g3] ? 3 : -3);
				jk[g3] !== jl[g3] && (jk[g3] += jk[g3] < jl[g3] ? jm[g3] : -jm[g3], jk[g3] = (Math.abs(jk[g3] - jl[g3]) <= jm[g3] ? jl : jk)[g3]);
				jj[g3] = bH.ew(jn[g3], 10)
			})(g3), ai.iM.jE(g3, bH.ew(jk[g3] * ab.gX[g3], 1e3))
		}(g3)
	}, this.k7 = function(g3, fy) {
		jn[g3] = jo[g3] = fy
	}
}

function iI() {
	var k8 = new Uint16Array(a8.eR);

	function kD(player, kB) {
		for (var eU = bK.f1[0], f8 = bK.f8, kM = -1, kN = a8.eR, a6 = 0; a6 < eU; a6++) {
			var ek, g3 = f8[a6];
			eN(player, g3) && (ek = bI.hl(kB, bI.i6(g3)), -1 === kM || ek < kM) && (kM = ek, kN = g3)
		}
		return kN
	}

	function kF(kC, kB) {
		if (kC === a8.eR) return 0;
		for (var gC = ab.gC[kC], kL = gC.length, eU = Math.min(kL, 10), kN = 0, kM = bI.hl(gC[kN] >> 2, kB), a6 = 0; a6 < eU; a6++) {
			var k0 = av.it(kL),
				ek = bI.hl(gC[k0] >> 2, kB);
			ek < kM && (kM = ek, kN = k0)
		}
		return gC[kN] >> 2
	}

	function kI(player, kB, ij, kQ) {
		var kR;
		(kQ === a8.eR || (kR = bI.i6(ij), kQ = bI.i6(kQ), bI.hl(kB, kR) < bI.hl(kB, kQ))) && (k8[player] = ij)
	}
	this.dR = function() {
		k8.fill(a8.eR)
	}, this.iQ = function(player) {
		var kB, kE, kC, ij = function(player) {
			var ij = k8[player];
			if (ij !== a8.eR) {
				if (b7.fr.kP(ij)) return ij;
				k8[player] = a8.eR
			}
			return a8.eR
		}(player);
		return function(player) {
			for (var jd = ag.je, kL = ag.jc, eU = Math.min(kL, kL < 17 && 5 === av.it(20) ? 1 : 16), g4 = av.it(kL), f8 = bK.f8, gC = ab.gC, fy = 0, a6 = 0; a6 < eU; a6++) {
				var g3 = jd[(a6 + g4) % kL];
				g3 !== player && gC[g3].length && (f8[fy++] = g3)
			}
			bK.f1[0] = fy
		}(player), 0 !== bK.f1[0] && (0 < (kE = kF(kC = kD(player, kB = bI.iB(player)), kB)) && bJ.kG.kH(player, kE) ? (kI(player, kB, kC, ij), !0) : 0 < (kC = function(player, kB) {
			for (var eU = bK.f1[0], f8 = bK.f8, kO = k8, g4 = 0, a6 = 0; a6 < eU; a6++) {
				var g3 = f8[a6],
					g3 = kO[g3];
				g3 !== a8.eR && b7.fr.kP(g3) && player !== g3 && eN(player, g3) && (f8[g4++] = g3)
			}
			return 0 !== (bK.f1[0] = g4) ? kF(kD(player, kB), kB) : 0
		}(player, kB)) && bJ.kG.kH(player, kC) ? (kI(player, kB, aX.eM(kC << 2), ij), !0) : !!(0 < (kE = kF(ij, kB)) && bJ.kG.kH(player, kE)))
	}
}

function iP() {
	function kV(player) {
		for (var eu = ab.eu[player], eU = eu.length, ev = Math.max(bH.ew(eU, 12), 1), eW = aX.eW, hG = av.it(eU), a6 = 0; a6 < eU; a6 += ev)
			for (var eJ = eu[(a6 + hG) % eU], eX = 3; 0 <= eX; eX--) {
				var eY = eJ + eW[eX];
				if (aX.eZ(eY)) return {
					e8: eY,
					id: aX.eC(eY),
					g3: player
				}
			}
		return null
	}

	function ka(player, kc) {
		var ik = b7.fr.kd(player, a9.jt[a9.ik[player]]);
		ab.fx[player].push(kc.e8), aY.ig(player, ik, kc.g3), aA.ih(player, !0)
	}
	this.iQ = function(player) {
		return !!bO.e9(bO.eA) && !!a8.data.passableMountains && 0 !== ab.eu[player].length && function(player) {
			var kU = kV(player);
			if (null === kU) return !1;
			! function(player) {
				for (var je = ag.je, jc = ag.jc, eU = Math.min(jc, 12), g4 = av.it(jc), f8 = bK.f8, eu = ab.eu, fy = 0, a6 = 0; a6 < eU; a6++) {
					var g3 = je[(a6 + g4) % jc];
					g3 !== player && eu[g3].length && eN(player, g3) && (f8[fy++] = g3)
				}
				bK.f1[0] = fy
			}(player);
			var kX = function(eB) {
				for (var eU = bK.f1[0], f8 = bK.f8, a6 = 0; a6 < eU; a6++) {
					var kc = kV(f8[a6]);
					if (null !== kc && kc.id === eB) return kc
				}
				return null
			}(kU.id);
			return null !== kX ? (ka(player, kX), !0) : function(player, eB) {
				var eU = ai.iD.kb;
				if (0 !== eU)
					for (var e8 = ai.iD.dj[av.it(eU)] << 2, eW = aX.eW, eX = av.it(4);;) {
						if (e8 += eW[eX], aX.eZ(e8)) {
							if (aX.eC(e8) === eB) return ka(player, {
								e8: e8,
								g3: a8.eR
							}), !0;
							break
						}
						if (!aX.eL(e8)) break
					}
				return !1
			}(player, kU.id)
		}(player)
	}
}

function iG() {
	this.iQ = function(player) {
		var eG = function(player) {
			var eU = ai.iD.kb;
			if (0 === eU) return -1;
			for (var kL = Math.min(eU, ai.performance.kf ? eU : 10), dj = ai.iD.dj, is = bH.ew(av.random() * eU, av.value(100)), e = is + kL, kg = av.iC(ab.i7[player], ab.i8[player]), kh = av.iC(ab.i9[player], ab.iA[player]), kN = -1, ek = bI
					.hm(0, 0, bO.ef, bO.eg), a6 = is; a6 < e; a6++) {
				var g4 = a6 % eU,
					ki = bI.em(kg, kh, dj[g4]);
				ki < ek && (ek = ki, kN = g4)
			}
			return -1 !== kN ? dj[kN] : -1
		}(player);
		return -1 !== eG && bJ.kG.kH(player, eG)
	}
}

function iJ() {
	this.kf = 0, this.dR = function() {
		this.kf = 0
	}, this.iQ = function() {
		if (!this.kf && bb.jY() % 30 == 7 && b7.fr.kl(80) && (ai.performance.kf = 1)) {
			if (a8.ib) {
				var ko = bd.kp();
				if (bc.k1[ko]) {
					bd.kq(ko);
					var g = bK.f9,
						eU = bK.f1[0];
					if (0 !== eU)
						for (var kr = Math.min(100 + 10 * (eU - 1), 400), a6 = 0; a6 < eU; a6++) a9.k7(g[a6], kr)
				}
			}
			a9.k7(ks[0], 100)
		}
	}
}

function iE() {
	var kt, ku, kv = 300,
		kw = 300,
		kx = (this.kb = 0, this.dj = new Uint32Array(512), !1);
	this.dR = function() {
		kx = !1, ku = kt = 0, this.kb = 0
	}, this.iQ = function() {
		if (function() {
				var eU = ai.iD.kb;
				if (0 === eU) return 1;
				var dj = ai.iD.dj;
				if (bb.jY() % 35 == 6) {
					for (var a6 = eU - 1; 0 <= a6; a6--) aX.eL(dj[a6] << 2) || (eU--, dj[a6] = dj[eU]);
					ai.iD.kb = eU
				}
				return eU < dj.length
			}() && !(kv <= kt)) {
			var a6, a0 = bO.ef,
				l1 = a0 - 2,
				eU = l1 * (bO.eg - 2),
				l2 = kv,
				dj = ai.iD.dj,
				kL = ai.iD.kb,
				l3 = dj.length,
				g4 = Math.min(ku + l2 * ((1 + 19 * ai.performance.kf) * kw), eU);
			for (a6 = ku; a6 < g4; a6 += l2) {
				var e8 = 4 * (a6 % l1 + (bH.ew(a6, l1) + 1) * a0 + 1);
				if (aX.eL(e8) && (dj[kL] = e8 >> 2, ++kL === l3)) {
					a6 += l2;
					break
				}
			}(ku = a6) >= eU && (ku = ++kt), ai.iD.kb = kL
		}
	}, this.l0 = function() {
		kx || (this.dR(), kx = !0)
	}
}

function l4() {
	aI.iQ(), aa.iQ(), aR.l5(), ax.l6.iQ()
}

function l7() {
	ay.iQ(), aB.iQ(), aZ.iQ(), b1.iQ(), aA.iQ(), ai.iQ(), bJ.l6.iQ(), ag.l8(), aQ.iQ(), aw.iQ(), bN.iQ(), bR.iQ(), aa.iQ(), aa.l9(), aR.iQ(), bL.iQ(), aP.iQ(), aK.iQ(), aI.iQ(), b2.iQ(), aM.iQ(), ar.iQ(), bZ.iQ(), bd.iQ(), ax.l6.iQ(), ax.lA.iQ(), n
		.iQ(), b6.iQ(), bb.iQ()
}

function lB() {
	aC.iQ(), aS.iQ(), aL.iQ(), ao.iQ(), b8.iQ(), at.lC()
}

function lD() {
	aQ.lE(!1), aK.lE(), aR.lE(!1), aP.lE(), aM.lE(), ar.lE(), aa.lE(!1), bd.lF()
}

function lG() {
	aa.lE(!1) && (bb.dZ = !0), ax.l6.iQ()
}

function bx() {
	var lH, lI, lJ;

	function lL(lN) {
		for (var a6 = lH - 1; 0 <= a6; a6--) 0 === lJ[lI[a6]] && ab.gJ[lI[a6]] >= lN && fY(lI[a6])
	}

	function lK(player) {
		var e3;
		64 === lJ[player] ? lJ[player] = 6 : (e3 = ab.gJ[player], lJ[player] = e3 < 1e3 ? 3 : e3 < 1e4 ? 2 : e3 < 6e4 ? 1 : 0)
	}
	this.dR = function() {
		lH = 0, lI = new Uint16Array(a8.eR), lJ = new Uint8Array(a8.eR)
	}, this.iQ = function() {
		for (var a6 = lH - 1; 0 <= a6; a6--) 64 === lJ[lI[a6]] ? lK(lI[a6]) : 0 == lJ[lI[a6]]-- && (lK(lI[a6]), fY(lI[a6]));
		16e4 <= ab.gJ[ks[0]] && (lL(16e4), 3e5 <= ab.gJ[ks[0]]) && lL(3e5), b7.fr.kP(a8.eE) && (bZ.lO[7] = Math.max(ab.gJ[a8.eE], bZ.lO[7]))
	}, this.ft = function(player) {
		for (var en, a6 = lH - 1; 0 <= a6; a6--)
			if (player === lI[a6]) {
				for (lH--, en = a6; en < lH; en++) lI[en] = lI[en + 1];
				return
			}
	}, this.ih = function(player, lP) {
		for (var a6 = lH - 1; 0 <= a6; a6--)
			if (player === lI[a6]) return;
		lI[lH++] = player, lJ[player] = lP ? 2 : 64
	}
}

function by() {
	var size, jP;
	this.dR = function() {
		size = a8.jz, jP = new Uint16Array(a8.eR);
		for (var jb = a8.jb, a6 = a8.jz - 1; 0 <= a6; a6--) jP[a6] = jb + a6
	}, this.iQ = function() {
		for (var a6 = size - 1; 0 <= a6; a6--)
			if (0 === ab.lS[jP[a6]]) {
				en = void 0;
				var en = a6;
				size--, jP[en] = jP[size]
			} else a9.iQ(jP[a6])
	}, this.lR = function(g3) {
		jP[size++] = g3
	}
}

function bz() {
	var lU, lV, lW, lX, lY, lZ, la, lb, lc, ld, le, lf, lg, lh = !1,
		li = !1;

	function lj(lk) {
		lf = bb.e2, lW = lX = lV = 0, lY = (lg = 33) / lk, lU = 1 / (lk / lg / 4), lZ = (au.a0 / 2 + ht) / hu, la = (au.j5 / 2 + hv) / hu, lb = hu
	}

	function lr(a6) {
		var lu; - 1 !== a6 && (a6 = bI.i0(bJ.l6.lt[a6]), lu = bI.ec(a6) - 10, a6 = bI.ee(a6) - 10, aC.ln(lu, a6, 19 + lu, 19 + a6))
	}

	function m5(m7) {
		Math.abs(Math.log(le / lb)) < .125 && (le = m7 * lb)
	}

	function m4(lu, lv, m8, m9) {
		lc = (lu + m8 + 1) / 2, ld = (lv + m9 + 1) / 2;
		m8 = au.a0 / (m8 - lu + 1), lu = au.j5 / (m9 - lv + 1);
		le = .9 * (m8 < lu ? m8 : lu)
	}
	this.ll = function() {
		return lh
	}, this.lm = function() {
		lj(1), this.ln(0, 0, bO.ef - 1, bO.eg - 1), a8.gr || a8.gf || this.lo(a8.eE, 3e3, !0, .3)
	}, this.lp = function(player, lq) {
		lr(bJ.gz.ls(player, lq))
	}, this.lo = function(player, lk, lw, zoom) {
		a8.lx || lh && !lw && li || (0 === ab.gJ[player] ? lr(bJ.gz.ly(player)) : (aN.lz = !1, li = lw, lj(lk), function(player) {
			lc = (ab.i7[player] + ab.i8[player] + 1) / 2, ld = (ab.i9[player] + ab.iA[player] + 1) / 2
		}(player), function(zoom, player) {
			var he = ab.i8[player] - ab.i7[player] + 1,
				player = ab.iA[player] - ab.i9[player] + 1,
				en = au.a0 / he,
				eo = au.j5 / player,
				en = (le = en < eo ? en : eo, 0 !== zoom ? zoom : he < 20 && player < 20 ? .5 : .9);
			le *= en, m5(7 / 8)
		}(zoom, player), lh = !0, al.m2()))
	}, this.m3 = function(lk) {
		a8.gf || a8.lx || (aN.lz = !1, li = !1, lj(lk), m4(0, 0, bO.ef - 1, bO.eg - 1), m5(7 / 8), lh = !0, al.m2())
	}, this.ln = function(lu, lv, m8, m9) {
		m4(lu, lv, m8, m9), hu = le, aN.mA(lc, au.a0 / 2), aN.mB(ld, au.j5 / 2), bW.mC(), bb.dZ = !0
	}, this.mD = function() {
		return !(lh && li || (lh = !1))
	}, this.iQ = function() {
		var mG, mH, eX, mK;
		lh && (lV < .5 ? lX < lY && (lX += lY * lU, lW = lV) : 1 - lW < lV && (lX = (lX -= lY * lU) < lY * lU ? lY * lU : lX), lf = lf >= bb.e2 ? bb.e2 - 1 : lf, eX = bb.e2 - lf, lV = 1e3 < eX || 1 < (lV += lX * eX / lg) ? 1 : lV, lf = bb.e2,
			eX = hu, mG = ht, mH = hv, eX = (hu = lb * Math.pow(le / lb, lV)) / eX, mK = 1 - (lb * Math.pow(le / lb, 1 - lV) - lb) / (le - lb), aN.mA(lZ + mK * (lc - lZ), au.a0 / 2), aN.mB(la + mK * (ld - la), au.j5 / 2), aa.zoom(eX, (mG *
				eX - ht) / (1 - eX), (mH * eX - hv) / (1 - eX)), bW.mC(), 1 <= lV && (lh = !1, bX.mL = !0), bb.dZ = !0)
	}
}

function br() {
	var ep = b7.color;
	this.mM = ep.mN(0, 0, 0), this.mO = ep.mP(0, 0, 0, .7), this.mQ = ep.mP(0, 0, 0, .5), this.mR = ep.mP(0, 0, 0, .85), this.mS = ep.mP(0, 0, 0, .75), this.mT = ep.mP(0, 0, 0, .6), this.mU = ep.mP(0, 0, 0, .35), this.mV = ep.mN(255, 255, 255), this
		.mW = ep.mP(255, 255, 255, .3), this.mX = ep.mP(255, 255, 255, .6), this.mY = ep.mP(255, 255, 255, .4), this.mZ = ep.mP(255, 255, 255, .25), this.ma = ep.mP(255, 255, 255, .85), this.mb = ep.mP(255, 255, 255, .75), this.mc = ep.mP(255, 255,
			255, .15), this.md = ep.mN(128, 128, 128), this.me = ep.mP(64, 64, 64, .75), this.mf = ep.mP(88, 88, 88, .83), this.mg = ep.mP(60, 60, 60, .85), this.mh = ep.mP(80, 60, 60, .85), this.mi = ep.mN(30, 255, 30), this.mj = ep.mN(0, 200, 0),
		this.mk = ep.mN(128, 255, 128), this.ml = ep.mP(10, 65, 10, .75), this.mm = ep.mP(0, 255, 0, .6), this.mn = ep.mP(0, 255, 0, .5), this.mo = ep.mP(0, 200, 0, .5), this.v = ep.mP(0, 100, 0, .75), this.mp = ep.mP(0, 60, 0, .8), this.mq = ep.mP(
			0, 255, 0, .3), this.mr = ep.mP(0, 180, 0, .6), this.ms = ep.mP(0, 120, 0, .85), this.mt = ep.mN(0, 120, 0), this.mu = ep.mP(0, 70, 0, .85), this.mv = ep.mN(255, 120, 120), this.mw = ep.mN(255, 160, 160), this.mx = ep.mN(255, 70, 70),
		this.my = ep.mN(230, 0, 0), this.mz = ep.mP(220, 0, 0, .6), this.n0 = ep.mP(255, 100, 100, .8), this.n1 = ep.mP(100, 0, 0, .85), this.n2 = ep.mP(60, 0, 0, .85), this.n3 = ep.mP(200, 0, 0, .6), this.n4 = ep.mP(120, 0, 0, .85), this.n5 = ep.mN(
			255, 70, 10), this.n6 = ep.mP(0, 60, 60, .85), this.n7 = ep.mP(10, 60, 60, .9), this.n8 = ep.mP(0, 96, 96, .75), this.n9 = ep.mN(160, 160, 255), this.nA = ep.mP(0, 40, 90, .75), this.nB = ep.mP(0, 0, 255, .6), this.nC = ep.mN(200, 200,
			255), this.nD = ep.mN(255, 120, 100), this.nE = ep.mP(255, 255, 0, .5), this.nF = ep.mP(255, 255, 150, .2), this.nG = ep.mN(255, 255, 0), this.nH = ep.mN(255, 255, 200), this.nI = ep.mP(200, 200, 0, .6), this.nJ = ep.mP(140, 120, 0, .75),
		this.nK = ep.mP(180, 160, 40, .75), this.nL = ep.mP(70, 50, 20, .85), this.nM = ep.mP(30, 30, 0, .85), this.nN = ep.mP(255, 140, 0, .75), this.nO = ep.mP(0, 0, 0, 0)
}

function cq() {
	this.gs = new nP, this.fr = new nQ, this.nR = new nS, this.nT = new nU, this.jg = new nV
}

function nP() {
	this.gt = function(eG) {
		a8.jx ? b5.nR.gt(a8.eE, eG) : ax.nW.nX(eG)
	}, this.h3 = function(hs, ij) {
		a8.jx ? b5.nR.h3(a8.eE, hs, ij) : ax.nW.nY(hs, ij)
	}, this.nZ = function(hs, na) {
		a8.jx ? b5.nR.nb(a8.eE, hs, na) : ax.nW.nc(hs, na)
	}, this.h1 = function(hs, eG) {
		a8.jx ? b5.nR.h1(a8.eE, hs, eG) : bJ.gz.h0(a8.eE, eG) && ax.nW.nd(hs, eG)
	}, this.ne = function(lq, eG) {
		a8.jx ? b5.nR.ne(a8.eE, lq, eG) : bJ.gz.nf(a8.eE, lq, eG) && ax.nW.ng(lq, eG)
	}, this.nh = function(ij) {
		a8.jx ? b5.nR.nh(a8.eE, ij) : ax.nW.ni(ij)
	}, this.nj = function(nk) {
		a8.jx ? b5.nR.nl(a8.eE, nk) : ax.nW.nm(nk)
	}, this.nn = function(no) {
		a8.jx ? b5.nR.nn(a8.eE, no) : ax.nW.np(no)
	}, this.nq = function() {
		a8.jx ? b5.nR.nq(a8.eE) : ax.nW.nr()
	}, this.ns = function() {
		a8.jx ? b5.nR.ns(a8.eE) : ax.nW.nd(1, 0)
	}, this.gw = function(hs, eG, ij) {
		a8.jx ? b5.nR.gw(a8.eE, hs, eG, ij) : ax.nW.nt(hs, eG, ij)
	}
}

function nV() {
	this.jh = function(player, na, ik) {
		b7.fr.nu(player, ik, na) && (aZ.nZ(player, na), na < a8.jb) && av.random() < av.value(10) && (ai.iM.ic[na] = 0)
	}, this.nv = function(player, na, ik) {
		b7.fr.nw(ik, na) ? (b7.fr.fu(na, bK.f3[0]), bZ.nx(player, na), aa.ny(na, bK.f3[0])) : bZ.fv(player, ik, 12)
	}
}

function nQ() {
	this.nz = function(nk, player) {
		aI.nj(a8.eE, player, nk), ax.nW.o0(nk, player)
	}, this.o1 = function(player) {
		aI.o2(player, 0), ax.nW.o3(player)
	}, this.o4 = function(o5, player) {
		aI.o6(o5, player), ax.nW.o7(o5, player)
	}, this.o8 = function() {
		a8.jx || a8.gf || ax.o9.o8()
	}
}

function nU() {
	this.iQ = function(a7) {
		var id, fD, mD;
		for (bD.dR(a7), bD.oA += 2, mD = 8 * bD.size; bD.oA + 8 <= mD;) id = bD.oB(4), fD = bD.oB(9), 0 === id ? this.oC(id, fD, bD.oB(22)) : 1 === id ? this.oC(id, fD, bD.oB(10), bD.oB(10)) : 2 === id ? this.oC(id, fD, bD.oB(10), bD.oB(9)) :
			3 === id || 4 === id ? this.oC(id, fD, bD.oB(10), bD.oB(22)) : 5 === id || 6 === id ? this.oC(id, fD, bD.oB(10)) : 7 === id ? this.oC(id, fD, bD.oB(1)) : 10 === id ? this.oC(id, fD, bD.oB(20), bD.oB(22)) : this.oC(id, fD)
	}, this.oD = [], this.oE = function() {
		for (var oG = 0, oH = 0, oI = 0, oJ = 0, oK = 0, oL = 0, a6 = 0; a6 < 512; a6++) oG += ab.lS[a6], oH += ab.gJ[a6], oI += ab.gX[a6], oJ += bJ.l6.oM[a6];
		oK += bJ.l6.oN, oL += ag.jc, this.oD.push(oI % 1073741824 * 4 + (oG + oH + oJ + oK + oL) % 4)
	}, this.oC = function(id, fD, fF, fH) {
		0 === id ? b5.nR.gt(fD, fF) : 1 === id ? b5.nR.h3(fD, fF, fH) : 2 === id ? b5.nR.nb(fD, fF, fH) : 3 === id ? b5.nR.h1(fD, fF, fH) : 4 === id ? b5.nR.ne(fD, fF, fH) : 5 === id ? b5.nR.nh(fD, fF) : 6 === id ? b5.nR.nl(fD, fF) : 7 === id ?
			b5.nR.nn(fD, fF) : 8 === id ? b5.nR.nq(fD) : 9 === id ? b5.nR.oO(fD) : 10 === id && b5.nR.gw(fD, fF >> 10, fH, fF % 1024)
	}
}

function nS() {
	this.gt = function(player, eG) {
		b7.fr.gh(0) && b7.fr.gi(player) && bI.hx(eG) && (b6.oP.oQ(0, player, eG), a8.oR.ig(player, eG))
	}, this.h3 = function(player, hs, ij) {
		b7.fr.gh(1) && b7.fr.gi(player) && b7.fr.oS(player, ij) && b7.fr.oT(player, hs, 12, 0) && b7.fr.oU(player, ij) && ((ij = aY.ix(player, bK.eQ[0])) || aY.jF(player)) && (ab.oV[player]++, b6.oP.oQ(1, player, hs, bK.eQ[0]), ai.iK.iU(player,
			ij)) && (b7.fr.oW(player), bZ.oX(player, hs), ai.iK.ia(player))
	}, this.nb = function(player, hs, na) {
		b7.fr.gh(1) && b7.fr.gi(player) && a8.ib && b7.fr.oS(player, na) && b7.fr.oY(player, na) && b7.fr.nu(player, b7.fr.hr(player, hs), na) && (b6.oP.oQ(2, player, hs, na), aZ.nZ(player, na))
	}, this.h1 = function(player, hs, eG) {
		b7.fr.gh(1) && b7.fr.gi(player) && (0 === eG && 1 === hs ? this.ns(player) : bI.hx(eG) && bJ.l6.oN !== bJ.l6.js && bJ.l6.oM[player] !== bJ.l6.oZ && 0 !== ab.gC[player].length && b7.fr.oT(player, hs, 32, 0) && bJ.kG.kH(player, eG) && (bZ
			.oa(player), b6.oP.oQ(3, player, hs, eG), b7.fr.oW(player), bi.ob.h1(player), bJ.l6.oc(player)))
	}, this.ne = function(player, lq, eG) {
		b7.fr.gh(1) && b7.fr.gi(player) && bI.hx(eG) && bJ.gz.od(player, lq) && bJ.kG.oe(eG) && (b6.oP.oQ(4, player, lq, eG), b7.fr.og(player, 8), bZ.fv(player, bK.f3[1], 12), bi.ob.ne(player), bJ.l6.ne())
	}, this.nh = function(player, ij) {
		b7.fr.gh(1) && b7.fr.gi(player) && (ij = Math.min(ij, a8.eR), aY.ix(player, ij)) && (b6.oP.oQ(5, player, ij), aY.oh(player, ij))
	}, this.nl = function(player, nk) {
		(b7.fr.gh(1) || b7.fr.gh(2)) && b7.fr.gi(player) && (nk = bH.oi(nk, 0, 1023), b6.oP.oQ(6, player, nk), aa.oj(player, 0, nk))
	}, this.nn = function(player, no) {
		b7.fr.gh(1) && b7.fr.gi(player) && (b6.oP.oQ(7, player, no), ar.ok(player, no))
	}, this.nq = function(player) {
		(b7.fr.gh(0) || b7.fr.gh(1)) && b7.fr.gi(player) && bM.nq(player) && b6.oP.oQ(8, player)
	}, this.oO = function(player) {
		bM.oO(player), b6.oP.oQ(9, player)
	}, this.ns = function(player) {
		ar.ol(player) && (b6.oP.oQ(3, player, 1, 0), ar.ns(player))
	}, this.gw = function(player, hs, eG, ij) {
		b7.fr.gh(1) && b7.fr.gi(player) && b7.fr.oS(player, ij) && b7.fr.oU(player, ij) && bI.hx(eG) && ah.e5.eO(player, eG) && (aY.ix(player, bK.eQ[0]) || aY.jF(player)) && (b6.oP.oQ(10, player, (hs << 10) + bK.eQ[0], eG), ij = b7.fr.kd(player,
			hs), ab.fx[player].push(bK.eV[0]), aY.ig(player, ij, bK.eQ[0]), aA.ih(player, !0), bZ.om(player))
	}
}

function on() {
	var op;
	this.oo = [], this.op = document.createElement("div"), this.oq = function(or, marginTop) {
		var title = document.createElement("h2");
		return title.textContent = or, title.style.margin = "0", title.style.marginBottom = "0.6em", marginTop && (title.style.marginTop = marginTop), title.style.fontSize = "1.4em", title.style.overflowWrap = "break-word", this.op.appendChild(
			title), title
	}, this.os = function(or, marginBottom) {
		var ot = document.createElement("p");
		return ot.textContent = or, ot.style.fontSize = "0.75em", ot.style.lineHeight = "1.2em", ot.style.marginBottom = marginBottom || "0", this.op.appendChild(ot), ot
	}, this.ou = function(or) {
		var ov = document.createElement("p");
		return ov.textContent = or, ov.style.fontSize = "1em", ov.style.marginBottom = "0", ov.style.whiteSpace = "pre-wrap", ov.style.overflowWrap = "break-word", this.op.appendChild(ov), ov
	}, this.ow = function(ox, fontSize) {
		var op = document.createElement("div");
		return op.innerHTML = ox, op.style.fontSize = fontSize || "1em", op.style.lineHeight = "1.2em", this.op.appendChild(op), op
	}, this.oy = function(oz) {
		for (var p0 = oz.p0, eU = p0.length, a6 = 0; a6 < eU; a6++) this.op.appendChild(p0[a6])
	}, this.p1 = function(p2) {
		return this.oo.push(p2), this.op.appendChild(p2.e), p2
	}, this.resize = function() {
		for (var eU = this.oo.length, a6 = 0; a6 < eU; a6++) this.oo[a6].resize && this.oo[a6].resize()
	}, (op = this.op).style.position = "absolute", op.style.height = "auto", op.style.padding = "0.5em"
}

function p3(p4, p5) {
	var op = document.createElement("div");

	function pE() {
		var a6, pF, j5, g4, eX, p9 = au.pG * op.offsetWidth,
			pH = new Float64Array(function(p9) {
				var a0 = .25 * b7.pA.pB(.6) * au.pC;
				return Math.max(Math.floor(p9 / a0), 1)
			}(p9)),
			pI = bY.pI,
			pJ = (p9 - (pH.length + 1) * bY.gap) / (pH.length * au.pG);
		for (pH.fill(pI), a6 = 0; a6 < p5.length; a6++) pF = (eX = p5[a6].op).style, j5 = b7.pK.min(pH), g4 = pH.indexOf(j5), pF.top = b7.pA.pL(j5), pF.left = b7.pA.pL(pI + g4 * (pJ + pI)), pF.width = b7.pA.pL(pJ), b7.pA.pM(eX, 5), pH[g4] += eX
			.offsetHeight + 3 * pI;
		op.style.height = b7.pA.pL(b7.pK.max(pH) - 2 * pI)
	}
	this.p6 = op, this.p7 = p5, this.resize = function() {
		var a6;
		for (a6 = 0; a6 < p5.length; a6++) p5[a6].resize();
		pE(), pE()
	}, op.style.width = "100%", op.style.maxWidth = "100%", p4.style.lineHeight = "1.5em", p4.style.overflowX = "hidden", p4.style.overflowY = "auto";
	for (var a6 = 0; a6 < p5.length; a6++) op.appendChild(p5[a6].op);
	p4.appendChild(op)
}

function q(title, pN, backgroundColor, pO, pP) {
	var self, pQ = document.createElement("button");

	function pW() {
		if (!bF.pb()) {
			if (!1 !== pO) {
				var pc = b7.color.pd(backgroundColor);
				if (0 < pc[0] && pc[0] < 255 && pc[0] === pc[1] && pc[0] === pc[2]) return
			}
			this.style.backgroundColor = b7.color.pW(backgroundColor, 50)
		}
	}

	function pV() {
		if (pO) {
			var pc = b7.color.pd(backgroundColor);
			if (pc[0] === pc[1] && pc[0] === pc[2]) return
		}
		pN(this) || pe(this)
	}

	function pY() {
		this.style.backgroundColor = backgroundColor
	}

	function pX() {
		pe(this)
	}

	function pe(eX) {
		eX.style.backgroundColor = backgroundColor, eX.blur()
	}
	this.button = pQ, this.pR = pN, this.pS = backgroundColor, this.pU = function(pZ) {
			pZ = 1.1 - Math.min(.01 * title.length, .6) + .2 * pZ;
			pQ.style.fontSize = pZ.toFixed(1) + "em"
		}, this.pT = function(ep) {
			ep ? 1 === ep && (ep = u.mg) : (pO = 0, ep = u.mR), this.pS = backgroundColor = ep, pQ.style.backgroundColor = ep
		}, self = this, pQ.innerHTML = title, pQ.style.color = pP ? u.nG : u.mV, pQ.style.userSelect = "none", pQ.style.outline = "none", pQ.style.overflowWrap = "break-word", self.pT(backgroundColor), pQ.style.border = "none", pQ.style.font =
		"inherit", self.pU(0), pQ.style.padding = "0em 0.3em", pQ.onclick = pV, pQ.addEventListener("mouseover", pW), pQ.addEventListener("mouseout", pX), pQ.addEventListener("focus", pW), pQ.addEventListener("blur", pY)
}

function pf(pg, p4) {
	var op;
	this.resize = function() {
		for (var a6 = 0; a6 < pg.length; a6++) b7.pA.pM(pg[a6].button);
		op.style.gap = op.style.padding = b7.pA.pL(bY.pI)
	}, (op = document.createElement("div")).style.display = "grid", op.style.gridTemplateColumns = "repeat(auto-fill, minmax(9.5em, 1fr))", op.style.overflowY = "auto", op.style.gridAutoRows = "5.3em", op.style.maxHeight = "100%";
	for (var a6 = 0; a6 < pg.length; a6++) pg[a6].pU(1), op.appendChild(pg[a6].button);
	p4.appendChild(op)
}

function pi(pj, pk, pl) {
	this.eb = 0, this.ed = 0, this.a0 = 0, this.j5 = 0, this.resize = function() {
		this.j5 = Math.min(b7.pA.pB(pl || .5) * pj[1] * au.pC, au.j5 - 2 * bY.gap), this.a0 = Math.min(this.j5 * (pj[0] / pj[1]), au.a0 - 2 * bY.gap), this.j5 = pj[1] * this.a0 / pj[0], this.eb = bY.gap + pk[0] * (au.a0 - this.a0 - 2 * bY.gap),
			this.ed = bY.gap + pk[1] * (au.j5 - this.j5 - 2 * bY.gap)
	}, this.pm = function() {
		return this.eb + .5 * this.a0
	}
}

function pn(po, pp, pq) {
	function click() {
		var value = 1 - po.value;
		this.textContent = (value ? "🟩 " : "⬜ ") + pp, void 0 !== po.oA ? bf.pr.ps(po.oA, value) : po.value = value, pq && pq(value)
	}
	var e;
	pp = pp || L(6), this.e = document.createElement("p"), (e = this.e).textContent = (po.value ? "🟩 " : "⬜ ") + pp, e.style.margin = "0", e.style.marginBottom = "0.5em", e.style.cursor = "pointer", e.addEventListener("click", click)
}

function pt(p4, ox) {
	var op = document.createElement("div");
	this.p6 = op, this.resize = function() {
		op.style.padding = b7.pA.pL(bY.pI), op.style.lineHeight = b7.pA.pL(b7.pA.pu(.035))
	}, p4.style.overflowX = "hidden", p4.style.overflowY = "auto", op.innerHTML = ox, p4.appendChild(op)
}

function pv(pw) {
	var op = document.createElement("div");
	this.e = op, this.px = pw, this.resize = function() {
		for (var eU = pw.length, a6 = 1; a6 < eU; a6++) b7.pA.pM(pw[a6], 4)
	};
	var a6, eU = pw.length;
	for (op.style.width = "100%", op.style.height = "2.7em", op.style.marginTop = "0.6em", op.style.border = "inherit", a6 = 0; a6 < eU; a6++) pw[a6].style.verticalAlign = "top", pw[a6].style.width = (100 / eU).toFixed(2) + "%", pw[a6].style.height =
		"100%", pw[a6].style.fontSize = "0.75em", op.appendChild(pw[a6])
}

function py() {
	var e;
	this.e = document.createElement("hr"), this.resize = function() {
		b7.pA.pM(this.e, 8, u.md)
	}, (e = this.e).style.marginBottom = e.style.marginTop = "0.65em", e.style.marginLeft = e.style.marginRight = "-4%", e.style.border = "none"
}

function q0(q1, type, q2, q3) {
	var e;
	this.e = document.createElement("input"), (e = this.e).type = type ? "number" : "text", e.id = "input" + n.l6.q4++, e.value = q1.value, e.style.width = "100%", e.style.userSelect = "none", e.style.outline = "none", e.style.resize = "none", e
		.style.border = "inherit", e.style.font = "inherit", e.style.color = u.mV, e.style.backgroundColor = u.mO, e.style.fontSize = "1em", e.style.padding = "0.1em 0.2em", e.addEventListener("focus", function() {
			au.q5++
		}), e.addEventListener("blur", function() {
			au.q5--, -1 !== q1.oA && bf.pr.ps(q1.oA, e.value)
		}), e.addEventListener("keypress", function(event) {
			"Enter" === event.key && (event.preventDefault(), -1 !== q1.oA && bf.pr.ps(q1.oA, e.value), q2 ? q2() : e.blur())
		}), q3 && e.addEventListener("input", function(e) {
			q3(e)
		})
}

function q6(p4, data) {
	var eU = data.q7.length,
		q8 = document.createElement("div"),
		q9 = document.createElement("div"),
		qA = document.createElement("div"),
		qB = new Array(eU),
		p5 = new Array(eU),
		qC = new Array(data.qD.length),
		qE = b7.color.mP(70, 70, 0, .35);

	function pW() {
		this.style.backgroundColor = b7.color.pW(qE, 160)
	}

	function pX() {
		this.style.backgroundColor = qE
	}

	function pE() {
		var en;
		for (p4.style.font = b7.pA.qR(0, b7.pA.qS(.026, .5, .03)), a6 = 1; a6 < qC.length; a6++) b7.pA.pM(qC[a6], 4);
		if (b7.pA.pM(q8, 2), eU) {
			for (var gv, qT = q8.offsetWidth, qU = qA.offsetWidth, a6 = 0; a6 < qC.length; a6++) gv = .01 * data.qH[a6] * qU, qC[a6].style.width = (100 * gv / qT).toFixed(2) + "%";
			var kL = data.q7[0].length;
			for (a6 = 0; a6 < eU; a6++)
				for (b7.pA.pM(qB[a6], 2), en = 1; en < kL; en++) b7.pA.pM(p5[a6][en], 4)
		}
	}
	this.resize = function() {
			pE(), pE()
		}, p4.style.display = "flex", p4.style.flexDirection = "column", q9.style.overflowX = "hidden", q9.style.overflowY = "auto",
		function() {
			var eX, a6, q7 = data.q7,
				kL = eU ? q7[0].length : 0;
			for (a6 = 0; a6 < eU; a6++) {
				qB[a6] = document.createElement("div"), qB[a6].style.backgroundColor = function(a6) {
					return a6 % 2 == 1 ? b7.color.mP(130, 130, 130, .35) : u.mU
				}(a6), qB[a6].style.width = "100%", qB[a6].style.display = "flex", p5[a6] = new Array(kL);
				for (var en = 0; en < kL; en++) p5[a6][en] = eX = document.createElement("div"), eX.style.display = "flex", eX.style.justifyContent = "center", eX.style.wordBreak = "break-all", eX.style.padding = "0.4em 0em", eX.style.width = data
					.qH[en] + "%", eX.innerHTML = q7[a6][en].ex, 1 === q7[a6][en].e3 && (eX.name = "" + a6, eX.style.color = u.nG, eX.style.backgroundColor = qE, eX.addEventListener("mouseover", pW), eX.addEventListener("mouseout", pX), function(eX,
						qJ, qK) {
						2147483647 !== qK && eX.addEventListener("click", function() {
							b9.a2(30), b9.a3(30, qJ), bD.dR(b9.a7), this.style.backgroundColor = qE, n.o(8, n.qL, new qM(25, {
								qN: 0,
								qJ: bB.qO.qP(bB.qO.qQ(5)),
								qK: qK
							}))
						})
					}(eX, q7[a6][en].qJ, q7[a6][en].qK)), qB[a6].appendChild(eX)
			}
			for (q8.style.display = "flex", q8.style.backgroundColor = b7.color.mP(0, 120, 0, .35), a6 = 0; a6 < qC.length; a6++) qC[a6] = eX = document.createElement("div"), eX.style.display = "flex", eX.style.justifyContent = "center", eX.style
				.wordBreak = "break-all", eX.style.padding = "0.4em 0em", eX.style.width = data.qH[a6] + "%", eX.innerHTML = data.qD[a6], q8.appendChild(eX)
		}();
	for (var a6 = 0; a6 < eU; a6++) qA.appendChild(qB[a6]);
	q9.appendChild(qA), p4.appendChild(q8), p4.appendChild(q9)
}

function qV() {
	var qZ, a6, qW = document.createElement("div"),
		qX = document.createElement("div"),
		qY = document.createElement("div"),
		qA = document.createElement("div"),
		pg = [],
		qD = ["Best 1v1 Player", "Top Clan", "Leading Clan Member"],
		qa = [1, 0, 2];

	function qb(a6) {
		n.o(8, 0, new qM(21, {
			qc: qa[a6],
			qd: 0,
			qe: 10
		}))
	}
	for (this.show = function() {
			this.ps(n.l6.qf), document.body.appendChild(qW)
		}, this.qg = function() {
			document.body.removeChild(qW)
		}, this.ps = function(qf) {
			for (var a6 = 0; a6 < pg.length; a6++) pg[qa[a6]].button.innerHTML = qD[a6] + "<br>" + qf[a6]
		}, this.resize = function() {
			var a6, qh = bY.gap,
				j5 = b7.pA.qi(.085),
				a0 = Math.min(4 * j5, au.a0 - 2 * qh),
				eU = pg.length;
			for (b7.pA.qj(qW, qh, au.j5 - qh - j5, a0, j5), b7.pA.pM(qW), b7.pA.pM(qX, 6), a6 = 0; a6 < eU - 1; a6++) b7.pA.pM(pg[a6].button, 6);
			for (a6 = 0; a6 < eU; a6++) pg[a6].button.style.fontSize = b7.pA.qk(.22 * j5);
			if (!qZ) {
				if (!aW.ql()) return;
				(qZ = aW.get(14)).style.width = "24%", qZ.style.position = "absolute", qX.appendChild(qZ)
			}
			qZ.style.left = b7.pA.pL(0), qZ.style.top = "7%"
		}, qW.style.position = "absolute", qX.style.width = "25%", qX.style.height = "100%", qX.style.backgroundColor = u.mR, qY.style.position = "absolute", qY.style.width = "75%", qY.style.height = "100%", qY.style.backgroundColor = u.mR, qY.style
		.top = qY.style.right = b7.pA.pL(0), qY.style.overflowX = "auto", qY.style.overflowY = "hidden", qY.style.whiteSpace = "nowrap", qA.style.height = qA.style.maxHeight = "100%", pg.push(new q("", function() {
			qb(0)
		}, u.n2)), pg.push(new q("", function() {
			qb(1)
		}, u.mp)), pg.push(new q("", function() {
			qb(2)
		}, u.n6)), a6 = 0; a6 < pg.length; a6++) pg[a6].button.style.height = "100%", qA.appendChild(pg[a6].button);
	qY.appendChild(qA), qW.appendChild(qX), qW.appendChild(qY)
}

function qm(q1, pV) {
	this.p0 = [];
	var qn = this.p0;

	function click() {
		for (var a6 = 0; a6 < qn.length; a6++) qn[a6].textContent = qn[a6].textContent.replace("🟢", "⚪");
		this.textContent = this.textContent.replace("⚪", "🟢");
		var oA = parseInt(this.name);
		void 0 !== q1.oA && bf.pr.ps(q1.oA, oA), pV && pV(oA)
	}
	for (var qo, eU = q1.qp.length, a6 = 0; a6 < eU; a6++)(qo = document.createElement("p")).textContent = "⚪ " + q1.qp[a6], qo.style.margin = "0", qo.name = "" + a6, qo.style.cursor = "pointer", qo.style.fontSize = "1em", qo.addEventListener(
		"click", click), qn.push(qo);
	qn[q1.value].textContent = qn[q1.value].textContent.replace("⚪", "🟢")
}

function qq(title, qr, qs) {
	var qW = document.createElement("div"),
		qt = document.createElement("div"),
		qA = document.createElement("div"),
		qu = document.createElement("div"),
		qv = document.createElement("div");
	this.qw = qA, this.qx = qr, this.show = function() {
			!1 !== qs ? document.body.appendChild(qW) : (document.body.appendChild(qt), document.body.appendChild(qu))
		}, this.qg = function() {
			!1 !== qs ? document.body.removeChild(qW) : (document.body.removeChild(qt), document.body.removeChild(qu))
		}, this.r1 = function() {
			var r2 = b7.pA.pu(.1),
				r3 = b7.pA.pu(.08 + .04 * (au.r4 < 1));
			return {
				r2: r2,
				r3: r3,
				r5: au.j5 / au.pG - r2 - r3
			}
		}, this.resize = function(r6) {
			var eU = qr.length,
				r7 = this.r1(),
				r2 = r7.r2,
				r3 = r7.r3;
			for (qt.style.height = b7.pA.pL(r2), b7.pA.pM(qt, 2), qu.style.top = b7.pA.pL(au.j5 / au.pG - r3), qu.style.height = b7.pA.pL(r3), b7.pA.pM(qu, 8), qA.style.top = b7.pA.pL(r2), qA.style.height = qA.style.maxHeight = b7.pA.pL(r7.r5), qt
				.style.font = b7.pA.qR(0, b7.pA.pu(.02, .3)), qu.style.font = b7.pA.qR(0, b7.pA.pu(.02, .7)), qA.style.font = b7.pA.qR(0, b7.pA.pu(.02, .7)), a6 = 1; a6 < eU; a6++) b7.pA.pM(qr[a6].button, 4);
			for (var r8 = 0, a6 = 0; a6 < eU; a6++) r8 += qr[a6].button.offsetWidth;
			if (r6 && r8 < qu.offsetWidth)
				for (a6 = 0; a6 < eU; a6++) qr[a6].button.style.width = (100 * qr[a6].button.offsetWidth / r8).toFixed(2) + "%";
			else
				for (a6 = 0; a6 < eU; a6++) qr[a6].button.style.width = "auto";
			r6 || this.resize(!0)
		}, this.r9 = function() {
			var r7 = this.r1(),
				ep = au.pG;
			rA.fillStyle = u.mR, rA.fillRect(0, ep * r7.r2, au.a0, ep * r7.r5)
		}, qW.style.position = "absolute", qW.style.top = "0", qW.style.left = "0", qW.style.width = "100%", qW.style.height = "100%", qt.style.position = "absolute", qt.style.top = "0", qt.style.left = "0", qt.style.width = "100%", qt.style
		.display = "flex", qt.style.backgroundColor = u.mR, qu.style.position = "absolute", qu.style.left = "0", qu.style.width = "100%", qu.style.overflowX = "auto", qu.style.overflowY = "hidden", qu.style.whiteSpace = "nowrap", qv.style.height = qv
		.style.maxHeight = "100%", qA.style.position = "absolute", qA.style.width = "100%", qA.style.backgroundColor = u.mR,
		function() {
			for (var a6 = 0; a6 < qr.length; a6++) qr[a6].button.style.height = "100%", qr[a6].button.style.padding = "0.0em 0.9em"
		}();
	for (var a6 = 0; a6 < qr.length; a6++) qv.appendChild(qr[a6].button);
	qt.appendChild(function() {
		var r0 = document.createElement("h1");
		return r0.textContent = title, r0.style.margin = "auto", r0.style.fontSize = 20 < title.length && au.j5 > au.a0 ? "1.8em" : "2.3em", r0
	}()), qu.appendChild(qv), !1 !== qs && (qW.appendChild(qA), qW.appendChild(qt), qW.appendChild(qu))
}

function rB(rC, rD, rE, rF) {
	var rG = document.createElement("textarea"),
		rH = (this.e = rG, !0);

	function rN() {
		rG.select(), document.execCommand("copy")
	}
	this.resize = function() {
			rD && b7.pA.pM(rG, 5)
		}, this.rI = function(rJ) {
			rG.value = rJ
		}, this.rK = function() {
			return rG.value
		}, this.rL = function() {
			rG.select()
		}, this.clear = function() {
			rG.value = ""
		}, this.rM = function() {
			rH && navigator.clipboard ? (rG.select(), navigator.clipboard.writeText(rG.value).catch(function() {
				rH = !1, rN()
			})) : rN()
		}, rG.setAttribute("id", "textArea" + n.l6.q4++), rG.setAttribute("autocomplete", "off"), rC && rG.setAttribute("placeholder", rC), rG.style.top = "0", rG.style.left = "0", rG.style.width = "100%", rG.style.height = "100%", rG.style
		.userSelect = "none", rG.style.outline = "none", rG.style.resize = "none", rG.style.border = "none", rG.style.color = u.mV, rG.style.backgroundColor = u.mO, rF ? (rG.style.fontSize = "1em", rG.rows = 6, rG.style.padding = "0.25em") : (rG
			.style.padding = "0.45em", rG.style.fontSize = "1.2em"), rE && rG.addEventListener("input", function(e) {
			rE(e)
		}), rG.addEventListener("focus", function() {
			au.q5++
		}), rG.addEventListener("blur", function() {
			au.q5--
		})
}

function dA() {
	this.pR = new rO, this.dj = new rP, this.pr = new rQ, this.l6 = new rR, this.dR = function() {
		this.dj.dR(), (new rS).dR()
	}
}

function rP() {
	function rT(a6, type, rZ, ey) {
		bf.dj.data.push({
			oA: a6,
			type: type || 0,
			value: rZ || 0,
			rZ: rZ || 0,
			ey: ey || 0
		})
	}

	function rU(a6, type, rZ, ey) {
		bf.dj.data.push({
			oA: a6,
			type: type,
			value: rZ || "",
			rZ: rZ || "",
			ey: ey || 0
		})
	}

	function rV(mD) {
		for (var a6 = bf.dj.data.length; a6 < mD; a6++) bf.dj.data.push(null)
	}
	this.data = [], this.dR = function() {
		rT(0, 1, 0, 5), rT(1, 1, 1), rT(2, 0), rU(3, 2), rT(4, 1), rU(5, 2, "Trebuchet MS", 1), rT(6, 0), rT(7, 0, 0), rT(8, 0), rT(9, 1, 1), rT(10, 1), rT(11, 1, 1), rU(12, 2, navigator.language), rV(100), rU(100, 2), rU(101, 2), rU(102, 2), rU(
				103, 2), rU(104, 2), rU(105, 2), rU(106, 2), rT(107), rT(108), rT(109), rU(110, 2), rT(111), rT(112), rT(113), rU(114, 2), rT(115), rU(116, 2), rT(117, 1), rU(118, 2, "", 2), rT(119, 1, 0, 1), rU(120, 2), rT(121, 1, ~~(262144 *
				Math.random())), rU(122, 2, "Player " + Math.floor(1e3 * Math.random())), rT(123), rU(124), rT(125, 1), rU(126, 2), rT(127, 0, 1), rT(128), rT(129), rT(130), rT(131), rT(132), rU(133, 2), rT(134, 0, 5), rU(135, 2), rU(136, 2), rT(
				137), rT(138), rT(139), rT(140), rT(141), rT(142), rT(143), rT(144), rU(145, 2), rT(146), rT(147), rU(148, 2), rT(149), rT(150, 0, 1), rU(151, 2), rT(152, 0, 5), rT(153, 1), rT(154, 1), rU(155, 2), rU(156, 2), rV(180), rT(180, 0),
			rT(181, 0)
	}, this.ps = function(oA, value) {
		this.data[oA].value = value
	}, this.dk = function(oA, value) {
		this.ps(oA, value), bf.pR.save(oA, String(value)), bf.pR.save(oA, String(this.data[oA].ey), !0)
	}, this.rW = function() {
		for (var a6 = 0; a6 < this.data.length; a6++) this.data[a6] && (bf.pR.save(a6, String(this.data[a6].value)), bf.pR.save(a6, String(this.data[a6].ey), !0))
	}, this.rX = function(oA) {
		return Number(this.data[oA].value)
	}, this.rY = function(oA) {
		return String(this.data[oA].value)
	}
}

function rO() {
	this.ra = function(oA, ey) {
		return Number(this.rb(oA, ey))
	}, this.rb = function(oA, ey) {
		var ex = null;
		return 0 === r.id ? r.rc && (ex = r.rc.getItem((ey ? "v" : "d") + oA)) : 1 === r.id ? ex = r.rd.loadString((ey ? 1e3 : 2e3) + oA) : 2 === r.id && (ex = r.re[(ey ? "v" : "d") + oA]), ex && 0 !== ex.length ? ex : null
	}, this.rf = function(eU, rg) {
		var g = [],
			rh = rg ? "e" : "l";
		if (0 === r.id) {
			if (r.rc)
				for (a6 = 0; a6 < eU; a6++) g.push(r.rc.getItem(rh + a6))
		} else if (1 === r.id)
			for (var ri = rg ? 5e3 : 3e3, a6 = 0; a6 < eU; a6++) g.push(r.rd.loadString(ri + a6));
		else if (2 === r.id)
			for (a6 = 0; a6 < eU; a6++) g.push(r.re[rh + a6]);
		return g
	}, this.save = function(oA, value, ey) {
		var rj = (ey ? "v" : "d") + oA;
		if (0 === r.id) {
			if (r.rc && bf.dj.data[140].value) try {
				r.rc.setItem(rj, value)
			} catch (e) {
				console.log(e)
			}
		} else 1 === r.id ? r.rd.saveString((ey ? 1e3 : 2e3) + oA, value) : 2 === r.id && (r.re[rj] = value, r.rk.postMessage(rj + " " + value))
	}, this.rl = function(g, rg) {
		var eU = g.length,
			rh = rg ? "e" : "l";
		if (0 === r.id) {
			if (r.rc && bf.dj.data[140].value) try {
				for (a6 = 0; a6 < eU; a6++) r.rc.setItem(rh + a6, g[a6])
			} catch (e) {
				console.log(e)
			}
		} else if (1 === r.id)
			for (var ri = rg ? 5e3 : 3e3, a6 = 0; a6 < eU; a6++) r.rd.saveString(ri + a6, g[a6]);
		else if (2 === r.id)
			for (a6 = 0; a6 < eU; a6++) r.re[rh + a6] = g[a6], r.rk.postMessage(rh + a6 + " " + g[a6])
	}
}

function rS() {
	this.dR = function() {
		! function() {
			var data = bf.dj.data;
			0 === data[2].ey && (au.j5 > au.a0 || 0 !== r.id) && (data[2].value = data[2].rZ = 1);
			0 === data[100].ey && (data[100].value = data[100].rZ = (0 === r.id ? "Player " : 1 === r.id ? "Android User " : "iOS User ") + Math.floor(1e3 * Math.random()))
		}();
		var a6, ex, data = bf.dj.data,
			eU = data.length;
		for (a6 = 0; a6 < eU; a6++) data[a6] && data[a6].ey === bf.pR.ra(a6, !0) && (ex = bf.pR.rb(a6), data[a6].value = null === ex ? data[a6].rZ : 2 === data[a6].type ? ex : Number(ex));
		bf.dj.data[10].value = bf.dj.data[10].rZ
	}
}

function rR() {
	function rr(g) {
		if (0 === g.length) bf.pr.ps(116, "");
		else {
			for (var ru = g[0], a6 = 1; a6 < g.length; a6++) ru += ";" + g[a6];
			bf.pr.ps(116, ru)
		}
	}
	this.ro = function() {
		bf.dj.data[110].value.length && (bf.dj.data[106].value = bf.dj.data[110], bf.pr.ps(110, ""), this.rp())
	}, this.rp = function() {
		var g = bf.dj.data[116].value.split(";");
		for (g.length % 2 == 1 && g.pop(), g.unshift(bf.dj.data[106].value), g.unshift(bf.dj.data[105].value), a6 = 2; a6 < g.length; a6 += 2)
			if (g[a6] === g[0]) {
				g.splice(a6, 2);
				break
			} for (var rq = [], a6 = 0; a6 < g.length; a6 += 2) rq.push(g[a6]);
		rr(g), bf.dj.data[117].value = 0, bf.dj.data[117].qp = rq
	}, this.rs = function(oA) {
		bf.dj.data[117].qp.splice(oA, 1), bf.dj.data[117].value = Math.min(oA, bf.dj.data[117].qp.length - 1);
		var g = bf.dj.data[116].value.split(";");
		g.splice(2 * oA, 2), rr(g)
	}, this.rt = function(oA) {
		var g = bf.dj.data[116].value.split(";");
		return {
			qJ: g[2 * oA],
			password: g[2 * oA + 1]
		}
	}, this.rv = function() {
		var ex = bH.oi(bf.dj.data[121].value, -1, 262143);
		return ex = -1 === ex ? ~~(262144 * Math.random()) : ex
	}
}

function rQ() {
	this.ps = function(oA, value) {
		bf.dj.data[oA].value !== value && (bf.dj.dk(oA, value), 0 === oA ? (n.rw(), b4.dR(), n.o(2)) : 1 === oA ? au.dc(1) : 2 === oA ? au.dc(0) : 5 === oA && (b7.pA.rx(), au.dc(0)))
	}, this.ry = function() {
		for (var data = bf.dj.data, a6 = 0; a6 < 100; a6++) data[a6] && bf.dj.dk(a6, data[a6].rZ);
		b7.pA.rx(), au.dc(1), b4.dR()
	}, this.rz = function() {
		for (var data = bf.dj.data, a6 = 0; a6 < data.length; a6++) data[a6] && bf.dj.ps(a6, data[a6].rZ)
	}, this.s0 = function() {
		for (var eo = bf.dj, a6 = 128; a6 < 135; a6++) eo.dk(a6, eo.data[a6].rZ)
	}, this.s1 = function(data) {
		bf.pr.ps(109, data.qK), bf.pr.ps(107, data.s2), bf.pr.ps(108, data.s3), bf.pr.ps(112, data.s4), bf.pr.ps(111, data.s5), bf.pr.ps(113, data.s6), bf.pr.ps(122, data.username), bf.pr.ps(135, data.s7), bf.pr.ps(136, data.s8), bf.pr.ps(137,
			data.s9), bf.pr.ps(138, data.sA), bf.pr.ps(139, data.sB), bf.pr.ps(141, data.sC), bf.pr.ps(142, data.sD), bf.pr.ps(143, data.sE), bf.pr.ps(144, data.sF)
	}
}

function bv() {
	this.qO = new sG, this.sH = new sI, this.dR = function() {
		this.qO.dR()
	}
}

function sI() {
	this.sJ = function(size) {
		for (var sK = bD, g = [], a6 = 0; a6 < size; a6++) g.push(String.fromCharCode(sK.oB(16)));
		return g.join("")
	}, this.sL = function(or) {
		return 20 < (or = or.trim()).length ? or.substring(0, 20) : or
	}
}

function sG() {
	var sM = new Uint8Array(78);
	this.dR = function() {
		var a6;
		for (sM[50] = 37, a6 = 0; a6 < 10; a6++) sM[a6 + 3] = a6 + 1;
		for (a6 = 0; a6 < 26; a6++) sM[a6 + 20] = a6 + 11, sM[a6 + 52] = a6 + 38
	}, this.sN = function(or) {
		return or.trim().replace(new RegExp("[^a-zA-Z0-9_\\-]", "g"), "-")
	}, this.sO = function(or, size) {
		if ((or = this.sN(or)).length > size) return or.substring(0, size);
		for (; or.length < size;) or = "-" + or;
		return or
	}, this.sP = function(or) {
		for (var sQ = sM, eU = or.length, g = new Uint8Array(eU), a6 = 0; a6 < eU; a6++) g[a6] = sQ[or.charCodeAt(a6) - 45];
		return g
	}, this.sR = function(sS) {
		b9.a2(6 * sS.length), this.sT(sS), bD.dR(b9.a7)
	}, this.sT = function(sS) {
		for (var eU = sS.length, a0 = b9, a6 = 0; a6 < eU; a6++) a0.a3(6, sS[a6])
	}, this.sU = function(or) {
		this.sT(this.sP(or))
	}, this.sV = function(or, size) {
		this.sT(this.sP(this.sO(or, size)))
	}, this.sW = function(or, size) {
		for (var g = this.sP(this.sO(or, size)), ex = 0, m6 = 1, a6 = g.length - 1; 0 <= a6; a6--) ex += m6 * g[a6], m6 *= 64;
		return ex
	}
}

function sX() {
	var a0, j5, sY;

	function sy(gv, eX, sw, sd, sr) {
		eX = sx(gv, eX + 1 + 2 * sd & 3);
		! function(gv, sz) {
			return 1 < Math.abs(gv % a0 - sz % a0) || 1 < Math.abs(t2(gv) - t2(sz))
		}(gv, eX) && 0 === sr[eX << 2] && (sr[eX << 2] = sw)
	}

	function t2(g3) {
		return Math.floor((g3 + .5) / a0) % j5
	}

	function sx(g3, eX) {
		return g3 + sY[eX]
	}
	this.sZ = function(or) {
		var a6, sa, eU, sb, sK = bD;
		for (bC.qO.sR(bC.qO.sP(or)), bO.se.sf[bO.eA].a0 = bO.ef = a0 = sK.oB(12), bO.se.sf[bO.eA].j5 = bO.eg = j5 = sK.oB(12), sY = [-a0, -1, a0, 1], bO.so = document.createElement("canvas"), bO.so.width = bO.ef, bO.so.height = bO.eg, bO.sk = bO
			.so.getContext("2d", {
				alpha: !1
			}), bO.sl = bO.sp = null, bO.sl = bO.sk.getImageData(0, 0, bO.ef, bO.eg), bO.sp = bO.sl.data, b7.pK.sq(bO.sp), eU = sK.oB(12), sa = sK.oB(5), sb = sh(a0 * j5 - 1), a6 = 0; a6 < eU; a6++) ! function(kL, g3, sc, sd) {
			var a6, eX, sK = bD,
				sr = bO.sp,
				ss = g3,
				st = g3,
				su = 0,
				sv = 1 + sc,
				sw = 2 - sc;
			for (sr[g3 << 2] = sv, a6 = 0; a6 < kL; a6++) eX = sK.oB(2), g3 = sx(g3, eX), sr[g3 << 2] === sv ? su % 2 == 1 && sy(st, su + 2 * sd + 3, sw, sd, sr) : sr[g3 << 2] = sv, sy(g3, eX, sw, sd, sr), sy(st, eX, sw, sd, sr), st = g3,
				su = eX;
			sx(g3, 0) === ss ? (sy(g3, 0, sw, sd, sr), sy(ss, 0, sw, sd, sr)) : sx(g3, 1) === ss && (sy(g3, 0, sw, sd, sr), sy(ss, 2, sw, sd, sr));
			0 === kL && (sy(ss, 0, sw, sd, sr), sy(ss, 2, sw, sd, sr))
		}(sK.oB(sa), sK.oB(sb), 1 === sK.oB(1), 1 === sK.oB(1));
		var eb, ed, k0, t3, t4, t5, sr = bO.sp,
			t6 = !0,
			t7 = bO.se.sf[bO.eA].t7,
			t8 = bO.se.sf[bO.eA].t8;
		for (ed = 0; ed < j5; ed++)
			for (t3 = !0, t4 = t6, eb = t5 = 0; eb < a0; eb++) k0 = 4 * ed * a0 + 4 * eb, t5 <= eb && 0 < sr[k0] && (t4 = 2 === sr[k0], t3) && (t3 = !1, t4 !== t6) ? (t6 = t4, t5 = eb + 1, eb = -1) : (t4 ? (sr[k0] = t8[0], sr[1 + k0] = t8[1], sr[
				2 + k0] = t8[2]) : (sr[k0] = t7[0], sr[1 + k0] = t7[1], sr[2 + k0] = t7[2]), sr[3 + k0] = 255);
		bO.sk.putImageData(bO.sl, 0, 0), bO.sm = !0, bO.sn.dR(), bb.dZ = !0
	}
}

function c0() {
	var t9, tA, tB, tC, tD, tE, tF, tG, tH, tI;

	function tK() {
		var tN = a8.tN;
		for (tH = tN; tH < a8.eR; tH++) tJ();
		for (tH = a8.gr ? a8.jb : 0; tH < tN; tH++) {
			if (!tO()) {
				for (var eo = a8.tS = tH; eo < tN; eo++) tH = eo, tJ();
				return
			}
			tR(tE + t9 * tD + bH.ew(tD, 2), tF + tA * tD + bH.ew(tD, 2))
		}
	}

	function tu(player) {
		for (var i7 = ab.i7, i9 = ab.i9, i8 = ab.i8, iA = ab.iA, ed = i9[player]; ed <= iA[player]; ed++)
			for (var eb = i7[player]; eb <= i8[player]; eb++) {
				var e8 = aX.tv(eb, ed);
				aX.g5(e8) && (aX.im(e8) ? aX.g0(e8, player) : aX.tw(e8, player))
			}
	}

	function tt(g, qd, qe) {
		var e3 = g[qd];
		g[qd] = g[qe], g[qe] = e3
	}

	function tO() {
		return function() {
			var a6;
			for (a6 = 0; a6 < 8; a6++)
				if (t9 = bH.ew(tB * av.random(), av.value(100)), tA = bH.ew(tC * av.random(), av.value(100)), u1()) return 1;
			return
		}() || function() {
			var he, hh, en, tQ, eo, tP;
			for (he = bH.ew(tB * av.random(), av.value(100)), hh = bH.ew(tC * av.random(), av.value(100)), en = 40; 1 <= en; en--)
				for (tQ = tC - en; 0 <= tQ; tQ -= 40)
					for (tA = (tQ + hh) % tC, eo = 40; 1 <= eo; eo--)
						for (tP = tB - eo; 0 <= tP; tP -= 40)
							if (t9 = (tP + he) % tB, u1()) return 1;
			return
		}()
	}

	function u1() {
		for (var g3, u3, gap = bH.ew(tD - tG, 2), u4 = tF + tA * tD + gap, u5 = tE + t9 * tD + gap, u2 = u4 + tG - 1; u4 <= u2; u2--)
			for (u3 = u5 + tG - 1; u5 <= u3; u3--)
				if (g3 = aX.tv(u3, u2), !aX.eP(g3) || aX.im(g3)) return;
		return 1
	}

	function tR(tP, tQ) {
		tJ(), u6(tP - 2, tQ - 2)
	}

	function tJ() {
		ab.lS[tH] = 0, ab.gJ[tH] = ab.tr[tH] = 0, ab.fx[tH] = [], ab.gB[tH] = [], ab.gC[tH] = [], ab.eu[tH] = [], ab.i7[tH] = ab.i9[tH] = ab.i8[tH] = ab.iA[tH] = 0
	}

	function u6(tP, tQ) {
		var g3, a6, u7, u8;
		for (ab.lS[tH] = 1, ab.i7[tH] = tP + 10, ab.i9[tH] = tQ + 10, ab.iA[tH] = ab.i8[tH] = 0, u7 = tP; u7 < tP + 4; u7++)
			for (u8 = tQ; u8 < tQ + 4; u8++)(tP < u7 && u7 < tP + 3 || tQ < u8 && u8 < tQ + 3) && (g3 = aX.tv(u7, u8), aX.eP(g3)) && (ab.i7[tH] = Math.min(u7, ab.i7[tH]), ab.i8[tH] = Math.max(u7, ab.i8[tH]), ab.i9[tH] = Math.min(u8, ab.i9[tH]), ab
				.iA[tH] = Math.max(u8, ab.iA[tH]), tI[ab.gJ[tH]] = g3, ab.gJ[tH]++, aX.tw(g3, tH));
		for (ab.tr[tH] = ab.gJ[tH], a6 = ab.gJ[tH] - 1; 0 <= a6; a6--) aX.u9(tI[a6], tH) ? (aX.g0(tI[a6], tH), ab.gB[tH].push(tI[a6])) : aX.uA(tI[a6]) ? (aX.g0(tI[a6], tH), ab.gC[tH].push(tI[a6])) : aX.uB(tI[a6]) && (aX.g0(tI[a6], tH), ab.eu[tH]
			.push(tI[a6]))
	}

	function u0(tP, tQ) {
		for (var g3, u3, u2 = tQ; tQ - 6 < u2; u2--)
			for (u3 = tP; tP - 6 < u3; u3--)
				if (g3 = aX.tv(u3, u2), aX.im(g3)) return;
		return 1
	}
	this.dR = function() {
		if (tI = new Array(12), tG = 6, tD = 10, tB = bH.ew(bO.ef, tD), tC = bH.ew(bO.eg, tD), tE = bH.ew(bO.ef - tD * tB, 2), tF = bH.ew(bO.eg - tD * tC, 2), a8.gr)
			for (var a6 = 0; a6 < a8.jb; a6++) tH = a6, tJ(), ab.lS[tH] = 1;
		(0 === a8.data.spawningType ? tK : 1 === a8.data.spawningType ? (tK(), function() {
			var tT = a8.tU;
			a8.tV || tT++;
			if (!(tT < 3)) {
				for (var data = a8.data, is = (a8.gr ? a8.jb : 0) + data.teamPlayerCount[0], mD = a8.tS, tW = new Uint32Array(tT), tX = new Uint32Array(tT), tY = new Uint16Array(tT), tZ = new Uint16Array(tT), eS = bc.eS, i7 = ab.i7, i9 =
						ab.i9, i8 = ab.i8, iA = ab.iA, fA = bK.fA, fB = bK.fB, a6 = is; a6 < mD; a6++) fA[a6] = i7[a6] + i8[a6] >> 1, fB[a6] = i9[a6] + iA[a6] >> 1;
				for (a6 = is; a6 < mD; a6++) {
					var id = eS[a6];
					tW[id] += fA[a6], tX[id] += fB[a6]
				}
				var k1 = bc.k1;
				for (a6 = 1; a6 < tT; a6++) {
					var fy = Math.max(data.teamPlayerCount[k1[a6]], 1);
					tY[a6] = bH.ew(tW[a6], fy), tZ[a6] = bH.ew(tX[a6], fy)
				}
				var ta = bc.ta,
					tb = bc.tb,
					tc = bc.tc,
					f9 = bK.f9;
				for (a6 = 0; a6 < 512; a6++) f9[a6] = a6;
				for (var hG = 0; hG < 2 + (4 <= tT); hG++)
					for (a6 = is; a6 < mD; a6++) {
						for (var gv = a6, td = f9[gv], te = 1, ek = bH.tf(fA[td] - tY[1], fB[td] - tZ[1]), en = 2; en < tT; en++) {
							var tg = bH.tf(fA[td] - tY[en], fB[td] - tZ[en]);
							tg < ek && (ek = tg, te = en)
						}
						var th = eS[gv];
						if (te !== th) {
							if (2 === hG && 4 <= tT) {
								var ti = Math.max((te + 1) % tT, 1),
									tj = bH.tf(fA[td] - tY[ti], fB[td] - tZ[ti]);
								for (en = 1; en < tT; en++) tg = bH.tf(fA[td] - tY[en], fB[td] - tZ[en]), ek < tg && tg < tj && (tj = tg, ti = en);
								ti !== th && bH.tf(tY[th] - tY[ti], tZ[th] - tZ[ti]) < bH.tf(tY[th] - tY[te], tZ[th] - tZ[te]) && (te = ti)
							}
							var tk = k1[te],
								tl = tb[tk] + (a8.gr ? 0 : tc[tk]),
								sz = ta[tl],
								tm = f9[sz],
								tn = tb[tk + 1];
							ek = bH.tf(fA[tm] - tY[th], fB[tm] - tZ[th]);
							for (var ep = tl + 1; ep < tn; ep++) {
								var to = ta[ep],
									tp = f9[to];
								(tg = bH.tf(fA[tp] - tY[th], fB[tp] - tZ[th])) < ek && (ek = tg, sz = to)
							}
							sz < is || mD <= sz || (tm = f9[sz], tW[th] += fA[tm] - fA[td], tX[th] += fB[tm] - fB[td], tW[te] += fA[td] - fA[tm], tX[te] += fB[td] - fB[tm], fy = data.teamPlayerCount[k1[th]], tY[th] = bH.ew(tW[th], fy),
								tZ[th] = bH.ew(tX[th], fy), fy = data.teamPlayerCount[tk], tY[te] = bH.ew(tW[te], fy), tZ[te] = bH.ew(tX[te], fy), f9[gv] = tm, f9[sz] = td)
						}
					}! function() {
						for (var f9 = bK.f9, i7 = ab.i7, i9 = ab.i9, i8 = ab.i8, iA = ab.iA, gJ = ab.gJ, tr = ab.tr, gB = ab.gB, gC = ab.gC, eu = ab.eu, a6 = 0; a6 < 512; a6++) {
							var ts = f9[a6];
							if (ts !== a6) {
								tt(i7, a6, ts), tt(i9, a6, ts), tt(i8, a6, ts), tt(iA, a6, ts), tt(gJ, a6, ts), tt(tr, a6, ts), tt(gB, a6, ts), tt(gC, a6, ts), tt(eu, a6, ts), tu(a6), tu(ts), f9[a6] = a6;
								for (var j5 = ts, g4 = f9[j5]; g4 !== a6;) g4 = f9[j5 = g4];
								f9[j5] = ts
							}
						}
					}()
			}
		}) : function() {
			var tN = a8.tN;
			for (tH = tN; tH < a8.eR; tH++) tJ();
			for (tH = a8.gr ? a8.jb : 0; tH < tN; tH++)
				if (! function() {
						var spawningData = a8.data.spawningData,
							tP = spawningData[2 * tH] + 1,
							spawningData = spawningData[2 * tH + 1] + 1;
						if (3 < tP && tP < bO.ef - 5 && 3 < spawningData && spawningData < bO.eg - 5 && aX.eP(aX.tv(tP, spawningData)) && u0(tP + 3, spawningData + 3)) return tR(tP + 1, spawningData + 1), 1;
						return
					}()) {
					if (!tO()) {
						for (var eo = a8.tS = tH; eo < tN; eo++) tH = eo, tJ();
						return
					}
					var tP = tE + t9 * tD + bH.ew(tD, 2),
						tQ = tF + tA * tD + bH.ew(tD, 2);
					tR(tP, tQ)
				}
		})(), bZ.lO[7] = ab.gJ[a8.eE]
	}, this.uC = function(ij, uD, uE) {
		var a6, tP, tQ, g3, t9, tA;
		for (tH = ij, a6 = 0; a6 < 20; a6++)
			for (tP = uD + a6; uD - a6 <= tP; tP--)
				for (tQ = uE + a6; uE - a6 <= tQ; tQ--)
					if ((tP === uD + a6 || tP === uD - a6 || tQ === uE + a6 || tQ === uE - a6) && 3 < tP && tP < bO.ef - 5 && 3 < tQ && tQ < bO.eg - 5 && aX.eP(aX.tv(tP, tQ)) && u0(tP + 3, tQ + 3)) {
						if (0 < ab.gJ[tH]) {
							for (tA = t9 = g3 = void 0, t9 = ab.i8[tH]; t9 >= ab.i7[tH]; t9--)
								for (tA = ab.iA[tH]; tA >= ab.i9[tH]; tA--) g3 = 4 * (tA * bO.ef + t9), aX.uG(tH, g3) && (aX.uH(g3), ab.gJ[tH]--);
							tJ()
						}
						return u6(tP - 1, tQ - 1), !0
					} return !1
	}, this.uI = function(ij) {
		tH = ij, tO() ? tR(tE + t9 * tD + bH.ew(tD, 2), tF + tA * tD + bH.ew(tD, 2)) : tJ()
	}
}

function uJ() {
	am.uK(), rA.setTransform(hu, 0, 0, hu, 0, 0), rA.imageSmoothingEnabled = hu < 3, rA.drawImage(bO.so, aN.uL(), aN.uM()), bL.uN.r9(), rA.drawImage(uO, aN.uL(), aN.uM()), am.r9(), bJ.r9(), aa.r9(), (a8.lx ? (bd.r9(), b8) : (aI.r9(), aQ.r9(), aM
	.r9(), b8.r9(), ar.r9(), aR.r9(), aN.r9(), aL.r9(), bd.r9(), aP.r9(), aK.r9(), aH.r9(), aG.r9(), aS.r9(), ba.r9(), ao)).r9(), n.r9()
}

function uP(uQ, a0, j5) {
	uQ.clearRect(0, 0, a0, j5), uQ.fillStyle = u.mS, uQ.fillRect(0, 0, a0, j5)
}

function uR(uQ, a0, j5, uS) {
	uQ.fillStyle = u.mV, uQ.fillRect(0, 0, a0, uS), uQ.fillRect(0, 0, uS, j5), uQ.fillRect(a0 - uS, 0, uS, j5), uQ.fillRect(0, j5 - uS, a0, uS)
}

function uT(uQ, eb, ed, h8, uS, g3, uU) {
	uQ.fillStyle = u.mV;
	var g3 = Math.floor(h8 * g3),
		qU = (g3 += (g3 - uS) % 2, Math.floor((g3 - uS) / 2)),
		h8 = Math.floor((h8 - g3) / 2);
	uQ.fillRect(eb + h8, ed + h8 + qU, g3, uS), uU && uQ.fillRect(eb + h8 + qU, ed + h8, uS, g3)
}

function uW() {
	this.dR = function() {
		8 === a8.jv && aI.uX()
	}, this.uY = function(uZ) {
		var elo = a8.data.elo,
			hS = (elo[uZ] - elo[1 - uZ]) / 10,
			hS = 8 / (1 + Math.pow(2, hS / 32)),
			hS = Math.floor(10 * hS + .5),
			ub = this.uc(elo[uZ] + hS + 1),
			elo = this.uc(elo[1 - uZ] - hS);
		0 === uZ ? aI.ue(ub, elo, ["rgba(10,140,10,0.75)", "rgba(140,10,10,0.75)"]) : aI.ue(elo, ub, ["rgba(140,10,10,0.75)", "rgba(10,140,10,0.75)"])
	}, this.uc = function(elo) {
		return 16e3 === (elo = bH.oi(elo, 0, 16e3)) ? "Unknown" : (elo / 10).toFixed(1)
	}
}

function cV() {
	this.uf = new ug, this.sr = new uh
}

function uh() {
	this.ui = !1;
	this.um = [], this.un = 100;
	var lu, lv, gap, h8, uj, ul, uo = 0,
		up = new Array(9),
		uq = [],
		ur = [],
		us = 0,
		ut = 0,
		uu = 0,
		uv = 0;

	function v6() {
		up.sort(function(en, eo) {
			return eo.jj - en.jj
		});
		for (var or = "" + up[0].nk, a6 = 1; a6 < 9; a6++) or += "," + up[a6].nk;
		for (a6 = 0; a6 < 9; a6++) or += "," + up[a6].jj;
		bf.dj.dk(120, or)
	}
	this.dR = function() {
		for (var qa = [0, 1, 2, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 6], a6 = 0; a6 < qa.length; a6++) {
			var color = 6 === qa[a6] ? u.mr : u.mT;
			this.um.push(b7.canvas.uw(aW.get(3), qa[a6], color))
		}
		for (a6 = 0; a6 < ae.uf.ux; a6++) ur.push(ae.uf.uy - ae.uf.ux + a6);
		for (a6 = 0; a6 < ae.uf.uz; a6++) ur.push(ae.uf.v0 + a6);
		var v1 = ae.uf.v2(bG.v1);
		for (a6 = 0; a6 < v1.length; a6++) ur.push(v1[a6]);
		! function() {
			var a6, g = bf.dj.data[120].value.split(",");
			if (18 !== g.length)
				for (a6 = 0; a6 < 9; a6++) up[a6] = {
					nk: 1015 + a6,
					jj: 0
				};
			else
				for (a6 = 0; a6 < 9; a6++) {
					var ex = parseInt(g[a6]),
						ep = (ex = 0 <= ex && ex < ae.uf.uy ? ex : 0, parseInt(g[a6 + 9]));
					ep = 0 <= ep && ep < 1e3 ? ep : 0, up[a6] = {
						nk: ex,
						jj: ep
					}
				}
		}()
	}, this.show = function(kg, kh, v7) {
		var a6;
		if (us = kg, ut = kh, uo = v7 || 0, this.ui = !0, uq = [], 0 === uo)
			for (a6 = 0; a6 < 9; a6++) uq.push(up[a6].nk);
		else {
			var eo = 49 * uo,
				v7 = eo - 49;
			for (v7 >= ur.length && (uo = 1, v7 = 0, eo = 49), a6 = v7 = (eo = Math.min(eo, ur.length)) - 49; a6 < eo; a6++) uq.push(ur[a6])
		}
		uq.push(1024);
		v7 = uq.length, h8 = Math.floor((r.s.v8() ? .075 : .0468) * au.pC), gap = Math.floor(h8 / 3), (uu = 10 * (uj = h8 + gap)) > au.a0 && (uu = au.a0, gap = (uj = uu / 10) - (h8 = 3 * uj / 4)), ul = bH.ew(v7, 10) + !!(v7 % 10), (uv = ul *
			uj) > au.j5 && (uv = au.j5, gap = (uj = uv / ul) - (h8 = 3 * uj / 4)), v7 = .5 * gap;
		lu = Math.min(Math.max(kg - .5 * uu + v7, v7), au.a0 - uu + v7), lv = Math.min(Math.max(kh - .5 * uv + v7, v7), au.j5 - uv + v7)
	}, this.gj = function(kg, kh, player) {
		if (!this.ui) return !1;
		if (this.vA(kg, kh)) {
			kg = bH.oi(bH.ew(kg - lu + .5 * gap, uj), 0, 9);
			if ((kg += 10 * bH.oi(bH.ew(kh - lv + .5 * gap, uj), 0, 9)) >= uq.length) return aG.qg(), !0;
			kh = uq[kg];
			if (1024 === kh) return this.show(us, ut, uo + 1), !0;
			! function(nk) {
				for (var a6 = 0; a6 < 9; a6++) up[a6].jj = Math.floor(.99 * up[a6].jj);
				for (a6 = 0; a6 < 9; a6++)
					if (nk === up[a6].nk) return up[a6].jj = Math.min(up[a6].jj + 30, 999), v6();
				up.splice(5, 0, {
					nk: nk,
					jj: Math.max(up[4].jj, 30)
				}), up.pop(), v6()
			}(kh), player === a8.eE ? b5.gs.nj(kh) : b5.fr.nz(kh, player)
		}
		return aG.qg(), !0
	}, this.vA = function(kg, kh) {
		return !(kg < lu - .5 * gap || kh < lv - .5 * gap || lu + uu - .5 * gap <= kg || lv + uv - .5 * gap <= kh)
	}, this.r9 = function() {
		rA.fillStyle = u.mS, rA.fillRect(lu - .5 * gap, lv - .5 * gap, uu, uv);
		for (var k0 = .5 * bY.vB, eU = (rA.lineWidth = bY.vB, rA.strokeStyle = rA.fillStyle = u.mV, rA.strokeRect(lu - .5 * gap + k0, lv - .5 * gap + k0, uu - 2 * k0, uv - 2 * k0), rA.imageSmoothingEnabled = !0, uq.length), a6 = 0; a6 < eU; a6++)
			this.vC(uq[a6], rA, lu + a6 % 10 * uj, lv + bH.ew(a6, 10) * uj, h8);
		rA.imageSmoothingEnabled = !1
	}, this.vC = function(nk, hE, eb, ed, h8) {
		var e8;
		nk >= 1024 - ae.uf.ux ? (e8 = h8 / this.un, hE.setTransform(e8, 0, 0, e8, eb, ed), hE.drawImage(this.um[nk - 1024 + ae.uf.ux], 0, 0), hE.setTransform(1, 0, 0, 1, 0, 0)) : (b7.pA.textAlign(hE, 1), b7.pA.textBaseline(hE, 1), hE.font = b7.pA
			.qR(0, .89 * h8), hE.fillText(ae.uf.vD(nk), eb + .5 * h8, ed + (.35 - b7.pA.vE + .56) * h8))
	}
}

function ug() {
	this.emojis = ["🥰", "😎", "😘", "😜", "🤗", "🥳", "😇", "😊", "🥱", "🙄", "🤔", "🥺", "😡", "😭", "😱", "😞", "💀", "👹", "👋", "🙏", "👏", "💪", "🙋‍♂️", "🤦‍♂️", "⬆️", "➡️", "⬇️", "⬅️", "👀", "❤️", "💔", "💥", "🔥", "🪦", "🥇", "🥈", "🥉",
		"🎖️", "🏅", "👑", "🎉", "💯", "✝️", "☪️", "🕉️", "☸️", "✡️", "☦️", "⚛️"
	], this.ux = 13, this.uz = this.emojis.length, this.v0 = 676, this.uy = 1024, this.vF = this.emojis.indexOf("💀"), this.vG = this.vF + 1, this.vH = this.emojis.indexOf("🥇"), this.vI = this.emojis.indexOf("😊"), this.vD = function(ex) {
		return ex < this.v0 ? String.fromCharCode(55356, 56806 + bH.ew(ex, 26), 55356, 56806 + ex % 26) : this.emojis[Math.min(ex - this.v0, this.uz - 1)]
	}, this.v2 = function(or) {
		for (var eU = or.length - 2, g = [], a6 = 0; a6 < eU; a6++) {
			var hN = or.charCodeAt(a6) - 56806,
				hO = or.charCodeAt(a6 + 2) - 56806;
			0 <= hN && hN < 26 && 0 <= hO && hO < 26 && (g.push(26 * hN + hO), a6 += 3)
		}
		return g
	}, this.vJ = function(ex) {
		return ex < this.v0
	}, this.vK = function(ex) {
		return ex >= 1024 - this.ux
	}, this.vL = function(ex) {
		return ex >= this.v0 && ex < this.v0 + this.vG
	}
}

function bu() {
	this.qO = new vM, this.sH = new vN, this.dR = function() {
		this.qO.dR()
	}
}

function vN() {
	this.sU = function(or) {
		for (var eU = or.length, a0 = b9, a6 = 0; a6 < eU; a6++) a0.a3(16, or.charCodeAt(a6))
	}
}

function vM() {
	var vO = new Uint8Array(64);
	this.dR = function() {
		var a6;
		for (vO[0] = 45, vO[37] = 95, a6 = 0; a6 < 10; a6++) vO[a6 + 1] = 48 + a6;
		for (a6 = 0; a6 < 26; a6++) vO[a6 + 11] = 65 + a6, vO[a6 + 38] = 97 + a6
	}, this.qQ = function(vP) {
		for (var sK = bD, sS = new Uint8Array(vP), a6 = 0; a6 < vP; a6++) sS[a6] = sK.oB(6);
		return sS
	}, this.qP = function(sS) {
		for (var eU = sS.length, vQ = vO, g = [], a6 = 0; a6 < eU; a6++) g.push(String.fromCharCode(vQ[sS[a6]]));
		return g.join("")
	}
}

function c2() {
	var vR, vS, vT;
	vR = [32, 65, 191, 913, 931], vS = [64, 127, 688, 930, 1155], vT = new Array(vR.length + 1);
	for (var a6 = 0; a6 < vT.length; a6++) {
		vT[a6] = 0;
		for (var en = a6 - 1; 0 <= en; en--) vT[a6] += vS[en] - vR[en]
	}

	function vZ(ep) {
		for (var a6 = vR.length - 1; 0 <= a6; a6--)
			if (ep >= vR[a6] && ep < vS[a6]) return a6;
		return -1
	}
	this.sL = function(or) {
		return 0 !== (or = or.trim()).indexOf("Bot ") && 0 !== or.indexOf("[Bot] ") && function(or, vW, vX) {
			var eU = (or = or.trim()).length;
			if (eU < vW || vX < eU) return !1;
			for (var ep, vY = 0, a6 = 0; a6 < eU; a6++)
				if (ep = or.charCodeAt(a6), vY += 65 <= ep && ep <= 90 || 1040 <= ep && ep <= 1071 ? 1 : 0, -1 === vZ(ep)) return !1;
			if (3 < vY && vY > Math.floor(eU / 2)) return !1;
			return !0
		}(or, 3, 20)
	}, this.va = function(or) {
		for (var eU = (or = or.trim()).length, g = [], a6 = 0; a6 < eU; a6++) {
			var ep, g3 = vZ(ep = or.charCodeAt(a6));
			g.push(vT[g3] + ep - vR[g3])
		}
		return g
	}, this.sZ = function(g) {
		for (var ep, eo, or = "", eU = g.length, a6 = 0; a6 < eU; a6++)
			for (eo = 1; eo < vT.length; eo++)
				if (g[a6] < vT[eo]) {
					ep = vR[eo - 1] + g[a6] - vT[eo - 1], or += String.fromCharCode(ep);
					break
				} return or
	}, this.vb = function(or) {
		for (var g = this.va(or), result = "", a6 = 0; a6 < g.length; a6++) result = (result += g[a6] < 10 ? "00" : g[a6] < 100 ? "0" : "") + g[a6].toString(10);
		return result
	}, this.vc = function(or) {
		for (var g = new Array(Math.floor(or.length / 3)), a6 = 0; a6 < or.length; a6 += 3) g[Math.floor(a6 / 3)] = parseInt(or.substring(a6, a6 + 3));
		return this.sZ(g)
	}, this.vd = function(or) {
		for (var ex, g = [or.length], a6 = 0; a6 < or.length; a6++) g[a6] = or.charCodeAt(a6) - 48;
		var result = "";
		for (a6 = 0; a6 < or.length; a6++) a6 === or.length - 1 || 51 < 10 * g[a6] + g[a6 + 1] ? result += g[a6].toString() : (ex = 10 * g[a6] + g[a6 + 1], result += String.fromCharCode(ex + (ex < 26 ? 65 : 71)), a6++);
		return result
	}, this.ve = function(or) {
		for (var ep, result = "", a6 = 0; a6 < or.length; a6++) 48 <= (ep = or.charCodeAt(a6)) && ep < 58 ? result += String.fromCharCode(ep) : 65 <= ep && ep < 75 ? result += "0" + (ep - 65).toString() : 75 <= ep && ep < 91 ? result += (ep - 65)
			.toString() : 97 <= ep && ep < 123 && (result += (ep - 71).toString());
		return result
	}, this.vf = function(or) {
		for (var eU = or.length, g = [], a6 = 0; a6 < eU; a6++)(ep = or.charCodeAt(a6)) < 58 ? g.push(or[a6]) : (ep -= ep < 91 ? 65 : 71, g.push(String(bH.ew(ep, 10))), g.push(String(ep - 10 * bH.ew(ep, 10))));
		var eU = g.length - 2,
			ep = 0,
			sS = [];
		for (a6 = 0; a6 < eU; a6 += 3) sS[ep++] = parseInt(g[a6] + g[a6 + 1] + g[a6 + 2]);
		return sS
	}, this.vg = function() {
		for (var hG, vh = "", a6 = 0; a6 < 6; a6++) hG = 48 + av.random() % 36, hG += 58 <= hG ? 39 : 0, vh += String.fromCharCode(hG);
		return vh
	}
}

function d2() {
	this.vi = new vj, this.vk = new vl, this.result = new vm, this.gz = new vn, this.vo = new vp, this.vq = new vr, this.vs = new vt, this.dR = function() {
		this.vo.dR()
	}, this.iQ = function() {
		this.vo.iQ()
	}
}

function vn() {
	this.vu = function() {
		for (var eU = ag.jc, vv = ag.je, vw = [], a6 = 0; a6 < eU; a6++) {
			var g3 = vv[a6];
			aX.vx(g3) && vw.push(g3)
		}
		return vw
	}, this.vy = function() {
		for (var eU = ag.jc, vv = ag.je, e3 = 0, gJ = ab.gJ, a6 = 0; a6 < eU; a6++) e3 += gJ[vv[a6]];
		return e3
	}
}

function vj() {
	function w0() {
		if (2 === a8.w4) return 1;
		ar.w5(), a8.w4 = 2, a8.w6 = a8.w7
	}

	function w2() {
		console.log("endGameHelperB"), bN.vs.w8(), aS.show(1 === a8.w9, !1, 2 === a8.w9), bN.result.w8(), bN.vq.iQ(), aI.wA(!0), aI.wB(247), aI.wB(956), aI.wB(957), aQ.lE(!0), aR.lE(!0), ar.lE(), b8.wC(), a8.gf && bb.wD.wE(), bb.dZ = !0, bX.wF(), r.s
			.setState(0)
	}
	this.vz = function() {
		w0() || (a8.w1 = 2, w2())
	}, this.w3 = function() {
		w0() || (a8.w1 = 1, w2())
	}
}

function vr() {
	this.iQ = function() {
		var wO;
		2 === a8.w1 ? (aI.wG(0, 59), aC.m3(2700)) : a8.jv < 7 ? (wO = bc.k1[bd.kp()], wO = bc.wQ[wO], aL.wR(L(7, [wO]), 2, 1, 12), aI.wS(0, L(8, [wO]), 40, 0, u.mV, u.mS, -1, !1), aC.m3(2700)) : 8 === a8.jv ? (a8.w9 ? aI.wG(a8.wL, 2) : aI.wG(1 -
			a8.eE, 3), a8.wM.uY(a8.wL), aI.wN(a8.wL), aC.lo(a8.wL, 2700, !1, 0)) : 9 === a8.jv ? (aI.wT(), aC.m3(2700)) : (aI.wN(a8.wL), aC.lo(a8.wL, 2700, !1, 0))
	}
}

function vm() {
	this.wU = 0, this.vw = null;
	var wW = this.wV = 0;
	this.wX = 0, this.w8 = function() {
		var wb, g4, e3;
		bN.vo.wY || (bN.vo.wY = !0, a8.jx) || ((wb = this).vw = bN.gz.vu(), wb.wU = be.wc.wd(), a8.jv < 7 && 2 !== a8.w1 ? wb.wV = bd.we() : wb.wV = bN.gz.vy(), 8 === a8.jv && 1 === a8.w1 ? (g4 = 1 - a8.wL, e3 = ab.gJ[g4], ab.gJ[g4] = 0, b5.fr
			.o8(), ab.gJ[g4] = e3) : b5.fr.o8(), wW = .01 * ab.wi[a8.eE] / 50, wb.wX = 0, a8.jv < 7 ? bN.vk.w8(wb.vw) : 7 === a8.jv || 10 === a8.jv ? b7.fr.gi(a8.eE) && (g4 = bN.result.wU * (1 + a8.wl), 2 === a8.w1 ? bN.result.wX += g4 *
			ab.gJ[a8.eE] / bN.result.wV : ks[0] === a8.eE && (bN.result.wX += g4)) : 8 !== a8.jv || 1 !== a8.w9 || 0 === bf.dj.data[107].value || 100 <= (e3 = bf.dj.data[108].value) || (bN.result.wX += .01 * (100 - e3) * 10), this.wa())
	}, this.wa = function() {
		b7.fr.gi(a8.eE) && (.01 <= wW && aI.wS(0, L(9, [wW.toFixed(2)]), 40, 0, u.mk, u.mS, -1, !1), .01 <= bN.result.wX) && aI.wS(0, L(10, [bN.result.wX.toFixed(2)]), 40, 0, u.mk, u.mS, -1, !1)
	}, this.wm = function() {
		var ss, wn;
		a8.jx || bN.vo.wY || (wn = ab, ss = a8.eE, 0 === wn.wo[ss]) || wn.iZ[ss] < 1 || 2 * wn.oV[ss] > 3 * (wn.iY[ss] + wn.iZ[ss]) || (wn = .01 * wn.wi[ss] / 50) < .01 || aI.wS(0, L(9, [wn.toFixed(2)]), 40, 0, u.mk, u.mS, -1, !1)
	}
}

function vp() {
	this.wY = !1, this.dR = function() {
		this.wY = !1
	}, this.iQ = function() {
		7 <= a8.jv || this.wY || bb.jY() % 20 == 11 && b7.fr.kl(90) && (a8.w1 = 1, bN.vs.w8(), bN.result.w8())
	}
}

function vl() {
	function ws(wq) {
		for (var hS = (1 + a8.wl) * bN.result.wU / (1e5 * bN.result.wV), k = "", a6 = 0; a6 < wq.length; a6++) {
			var wx = wq[a6].wy * hS;
			k += "  " + wq[a6].name + ": " + b7.wu.wz(1e5 * wx)
		}
		k.length && (aI.wS(0, L(11), 45, 0, b7.color.mN(225, 240, 255), u.mS, -1, !1), aI.wS(0, k.trim(), 45, 0, b7.color.mN(225, 240, 255), u.mS, -1, !1), a8.gf || aI.wS(700, L(12) + bG.x0, 736, 0, u.mV, u.mp, -1, !1))
	}
	this.w8 = function(vw) {
		var wO = bc.k1[bd.kp()],
			vw = (a8.w9 && b7.fr.gi(a8.eE) && (bN.result.wX += (b7.wu.wv(ab.ww[a8.eE]) ? 2 : 1) * bN.result.wU * (1 + a8.wl) * ab.gJ[a8.eE] / bN.result.wV), function(vv) {
				var wq = [],
					username = ab.ww,
					eU = vv.length;
				loop: for (var a6 = 0; a6 < eU; a6++) {
					var g3 = vv[a6],
						x1 = b7.wu.wv(username[g3]);
					if (x1) {
						for (var en = wq.length - 1; 0 <= en; en--)
							if (wq[en].name === x1) {
								wq[en].wy += ab.gJ[g3];
								continue loop
							} wq.push({
							name: x1,
							wy: ab.gJ[g3],
							x2: bc.eS[g3]
						})
					}
				}
				return wq.sort(function(en, eo) {
					return eo.wy - en.wy
				}), wq
			}(vw));
		vw.length && (2 === a8.w1 ? ws(vw) : ws(function(wq, wO) {
			for (var a6 = wq.length - 1; 0 <= a6; a6--) bc.k1[wq[a6].x2] !== wO && wq.splice(a6, 1);
			return wq
		}(vw, wO)))
	}
}

function vt() {
	this.w8 = function() {
		if (2 === a8.w1) a8.w9 = 2;
		else {
			if (8 === a8.jv) aX.vx(0) ? aX.vx(1) ? a8.wL = +(ab.gJ[1] > ab.gJ[0]) : a8.wL = 0 : a8.wL = 1;
			else {
				if (a8.ib) {
					var ko = bd.x4();
					if (bc.k1[ko]) return void(a8.w9 = +(bc.eS[a8.eE] === ko))
				}
				a8.wL = ks[0]
			}
			a8.w9 = +(a8.wL === a8.eE)
		}
	}
}

function d7() {
	this.id = 0, this.ey = 0, this.rc = null, this.rd = null, this.re = null, this.rk = null, this.s = new x5, this.dR = function() {
		var self, ey;
		self = this, "undefined" == typeof Android || "function" != typeof Android.getVersion || (ey = Android.getVersion()) < 12 || (self.ey = ey, self.id = 1, self.rd = Android),
			function(self) {
				var ey;
				"undefined" != typeof mwIOSdataX && window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.iosCommandA && (self.id = 2, self.re = mwIOSdataX, self.rk = window.webkit.messageHandlers.iosCommandA, ey = self
					.re.version, self.ey = ey ? Number(ey) : 0)
			}(this),
			function(self) {
				var rc;
				if (0 === self.id) {
					try {
						if (!(rc = window.localStorage)) return;
						rc.setItem("tls7", "1"), rc.removeItem("tls7")
					} catch (error) {
						return
					}
					self.rc = rc
				}
			}(this)
	}
}

function x5() {
	this.x9 = function() {
		bf.pr.ry(), bf.pr.rz(), ax.l6.close(0, 3255), 0 === r.id ? r.rc && r.rc.clear() : 1 === r.id ? r.rd.saveString(199, "") : 2 === r.id && r.rk.postMessage("clear")
	}, this.xA = function() {
		2 === r.id ? r.rk.postMessage("showConsentForm") : 1 === r.id ? r.rd.setState(7) : bQ.dl.showCMPScreen()
	}, this.xB = function() {
		this.setState(14)
	}, this.v8 = function() {
		return 1 === bf.dj.rX(2)
	}, this.xC = function() {
		bf.dj.dk(102, "")
	}, this.setState = function(e1) {
		1 === r.id && 5 <= r.ey && r.rd.setState(e1)
	}, this.t = function() {
		var xD;
		1 === r.id && 7 <= r.ey ? r.rd.setState(5) : ((xD = new URL(window.location)).searchParams.set("v", "" + Math.floor(1e3 * Math.random())), window.location.href = xD.toString())
	}, this.dW = function() {
		1 !== r.id || r.ey < 17 || r.rd.saveString(23, document.documentElement.outerHTML)
	}, this.dq = function() {
		0 === r.id ? bQ.dl.dR() : 1 === r.id ? r.rd.prepareAd("1688441405") : 2 === r.id && (0 === r.ey ? r.rk.postMessage("prepare ad 4500876070") : r.rk.postMessage("loadAds 4500876070"))
	}, this.e4 = function(e3) {
		return 0 === r.id ? !!bQ.dl.dz() : 1 === r.id ? 12 <= r.ey && (r.rd.presentAd(e3), !0) : 2 === r.id && (0 === r.ey ? r.rk.postMessage("show ad " + e3) : r.rk.postMessage("showAd"), !0)
	}, this.db = function() {
		2 === r.id && r.ey < 23 && n.o(4, 1, new p("App Update Required", "A new iOS app version with bug fixes has been published.<br>Please download the new Territorial.io app version for iOS:<br><a href='" + bG.xE + "' target='_blank'>" + bG
			.xE + "</a>", !0, [new q("⬅️ " + L(13), function() {
				n.o(0)
			}, u.n4)]))
	}
}

function dM() {
	function xH(e) {
		xQ(e), n.o(4, 5, new p("🚀 New Game Update", "The game has been updated! Please reload the game." +
			"<div style='border: white; border-width: 1px; border-style: solid; margin: 10px; padding: 5px;'><h2>FX Client is not yet compatible with the latest version of the game.</h2><p>Updates should normally be available within a few hours.<br>You can still use FX to play in singleplayer mode.</p></div>",
			!0, [new q("⬅️ " + L(13), function() {
				n.xR()
			}), new q("🔄 Reload", function() {
				r.s.t()
			}, u.v)]))
	}

	function xP(e) {
		xQ(e), n.o(4, 5, new p(L(14), {
			"3249": "No servers found",
			"4705": "Lobby not found",
			"4730": "Kicked from lobby"
		} [e] ?? xJ(e), !0))
	}

	function xJ(e) {
		return 3249 === e || 1006 === e ? "No internet [" + e + "]" : "Unknown error [" + e + "]"
	}

	function xQ(e) {
		! function(e) {
			var e1 = aV.xK();
			0 !== e1 && (6 === e1 ? ax.l6.xV(e) : 7 === e1 ? (ap.xW(), ax.l6.close(ax.l6.xM, 3256)) : 8 === e1 && a8.xX(!0))
		}(e), n.l6.xU()
	}
	this.xF = function(xG, e) {
		xG === 1 && __fx.customLobby.isActive() && aV.xK() !== 6 && __fx.customLobby.setActive(false);
		if (8 === n.qL && 0 === xG)
			if (4211 === e) xH(e);
			else {
				if (4480 === e) return bf.pr.s0(), void n.o(4, 0, new p(L(16), L(17), !0));
				n.o(4, 0, new p(L(14), xJ(e), !0))
			}
		else {
			var e1 = aV.xK();
			if (6 === e1) {
				if (4211 === e) return void xH(e);
				if (4214 !== e) return void aU.xL(xG)
			} else {
				if (7 !== e1) return 8 === e1 ? void(xG !== ax.l6.xN || a8.jx || 1 !== a8.w4 || a8.gf || aI.xO(L(15, [e]))) : void 0;
				if (xG !== ax.l6.xM) return
			}
			xP(e)
		}
	}, this.xS = function(e) {
		8 === aV.xK() ? a8.jx || 1 !== a8.w4 || aI.xO(L(15, [e])) : xP(e)
	}, this.m = function() {
		xQ(3268)
	}
}

function cw() {
	var xY, xZ, xa = -15e3,
		xb = !1;

	function gj(e) {
		xv() || (xb = !0, xw(e, 1), ax.l6.xx(ax.l6.xN), xy(Math.floor(au.pG * e.clientX), Math.floor(au.pG * e.clientY)))
	}

	function xk(e) {
		xa = bb.e2, xw(e, 1), ax.l6.xx(ax.l6.xN), 0 < e.touches.length && (xY = Math.floor(au.pG * e.touches[0].clientX), xZ = Math.floor(au.pG * e.touches[0].clientY), an.xk(e) || xy(xY, xZ))
	}

	function xy(eb, ed) {
		n.gj(eb, ed), 0 === a8.w4 ? aV.gj(eb, ed) : b8.xz(eb, ed) || ba.gj(eb, ed) || aS.gj(eb, ed) || aG.y0(eb, ed) || aK.gj(eb, ed) || 0 <= aH.gj(eb, ed) || bF.y1(eb, ed) || ar.gj(eb, ed) || aG.y2(eb, ed)
	}

	function xg(e) {
		xv() || (xb = !0, xw(e, 1), y3(Math.floor(au.pG * e.clientX), Math.floor(au.pG * e.clientY)))
	}

	function xl(e) {
		xa = bb.e2, xw(e, 1), 0 < e.touches.length && (xY = Math.floor(au.pG * e.touches[0].clientX), xZ = Math.floor(au.pG * e.touches[0].clientY), an.xl(e) || y3(xY, xZ))
	}

	function y3(eb, ed) {
		n.xg(eb, ed), 0 === a8.w4 ? aV.xg(eb, ed) : (bP.gc(eb, ed), ba.xg(eb, ed) || (aH.xg(eb, ed), aG.ui() ? aG.xg(eb, ed) : aM.gk ? aM.xg(eb) && (bb.dZ = !0) : (aQ.xg(eb, ed), aN.lz && aN.xg(eb, ed) && (bb.dZ = !0))))
	}

	function xi(e) {
		xv() || (xw(e, 1), y4(), 0 === a8.w4 ? (aV.click(-1024, -1024), aO.y5()) : (aQ.y6(-1024, -1024), aH.xg(-1024, -1024), aM.y7(), aN.lz = !1))
	}

	function xh(e) {
		xv() || (xw(e, 1), y8(Math.floor(au.pG * e.clientX), Math.floor(au.pG * e.clientY), 2 === e.button), bF.xe && (bF.xe = !1, e.preventDefault()))
	}

	function click(e) {
		xv() || xw(e, 1)
	}

	function xm(e) {
		xa = bb.e2, xw(e, 1), e && e.touches && 0 < e.touches.length && 0 !== a8.w4 ? aN.lz = !1 : an.y9() || (y8(xY, xZ, !1), bF.xe && (bF.xe = !1, e.preventDefault()))
	}

	function xn(e) {
		xa = bb.e2, xw(e, 1), y8(xY, xZ, !1), bF.xe && (bF.xe = !1, e.preventDefault())
	}

	function xo(e) {}

	function xp(e) {}

	function xq(e) {
		xv() || xw(e, 0)
	}

	function y8(eb, ed, yA) {
		y4(), 0 === a8.w4 ? aV.click(eb, ed) : (aQ.y6(eb, ed), ba.y6(), aM.y7(), aN.lz = !1, aG.click(eb, ed, yA) ? bb.dZ = !0 : aH.xh(eb, ed))
	}

	function y4() {
		n.y4()
	}

	function xj(e) {
		var eb, ed, deltaY;
		xv() || (xw(e, 1), ax.l6.xx(ax.l6.xN), eb = Math.floor(au.pG * e.clientX), ed = Math.floor(au.pG * e.clientY), deltaY = e.deltaY, 1 === e.deltaMode && (deltaY *= 16), n.xj(eb, ed, deltaY), 0 === a8.w4 ? aV.xj(eb, ed, deltaY) : aQ.xj(eb, ed,
			deltaY) || (aM.yB(eb, ed) ? aM.xj(deltaY) && (bb.dZ = !0) : aN.xj(eb, ed, deltaY)))
	}

	function xr(e) {
		xw(e, 0)
	}

	function xw(e, id) {
		0 === id && n.ui() || (id = window.innerWidth / document.documentElement.clientWidth) < .999 || 1.001 < id || 0 !== aV.xK() && e.preventDefault()
	}

	function xs(e) {
		if (__fx.keybindHandler(e.key)) return;
		xv() || (e = e.code) && e.length && (bT.ep(e, 18) ? al.yD(3) : bT.ep(e, 22) ? al.yD(0) : bT.ep(e, 20) ? al.yD(1) : bT.ep(e, 24) ? al.yD(2) : bT.ep(e, 10) ? aM.yE(.9375) : bT.ep(e, 8) ? aM.yE(16 / 15) : bT.ep(e, 6) ? aM.yE(7 / 8) : bT.ep(e,
			4) ? aM.yE(8 / 7) : bT.ep(e, 14) ? 0 !== a8.w4 && aN.xj(Math.floor(au.a0 / 2), Math.floor(au.j5 / 2), -200) : bT.ep(e, 16) ? 0 !== a8.w4 && aN.xj(Math.floor(au.a0 / 2), Math.floor(au.j5 / 2), 200) : bT.ep(e, 0) ? a8.w4 && bP.gd(!1) :
			bT.ep(e, 2) && a8.w4 && bP.gd(!0))
	}

	function xt(e) {
		var code;
		xv() || bb.e2 < 400 || (code = e.code) && code.length && ("Enter" === code && n.yF(1) || (8 !== aV.xK() && aV.yF(e) ? bb.dZ = !0 : "Escape" === code ? bF.ez() : bT.ep(code, 18) ? al.yG(3) : bT.ep(code, 22) ? al.yG(0) : bT.ep(code, 20) ? al
			.yG(1) : bT.ep(code, 24) ? al.yG(2) : bT.ep(code, 12) ? b8.yH(!a8.lx) : "Space" === code && a8.w4 && (aH.gg && aH.yI(), a8.gf) && b8.yJ(!1)))
	}

	function xu() {
		"hidden" === document.visibilityState ? 1 === a8.w4 && (a8.gf ? b8.yK() : !a8.jx || aH.gg || a8.gr || aH.yI()) : bb.dZ = !0
	}

	function xv() {
		return xa + 15e3 > bb.e2
	}

	function resize() {
		au.yM()
	}
	this.xc = 0, this.xd = "", this.xe = !1, this.dR = function() {
		xf.addEventListener("mousedown", gj, {
			passive: !1
		}), xf.addEventListener("mousemove", xg, {
			passive: !1
		}), xf.addEventListener("mouseup", xh, {
			passive: !1
		}), xf.addEventListener("click", click, {
			passive: !1
		}), xf.addEventListener("mouseleave", xi, {
			passive: !1
		}), xf.addEventListener("wheel", xj, {
			passive: !1
		}), xf.addEventListener("touchstart", xk, {
			passive: !1
		}), xf.addEventListener("touchmove", xl, {
			passive: !1
		}), xf.addEventListener("touchend", xm, {
			passive: !1
		}), xf.addEventListener("touchcancel", xn, {
			passive: !1
		}), xf.addEventListener("dragover", xo), xf.addEventListener("drop", xp), xf.addEventListener("dblclick", xq), document.addEventListener("contextmenu", xr), document.addEventListener("keydown", xs), document.addEventListener("keyup",
			xt), document.addEventListener("visibilitychange", xu), window.addEventListener("resize", resize)
	}, this.y1 = function(eb, ed) {
		return !!b8.gj(eb, ed) || !!(aQ.gj(eb, ed) || aN.gj(eb, ed) || aM.gj(eb, ed) || aI.gj(eb, ed))
	}, this.yL = xv, this.pb = function() {
		return !xb || 0 < xa
	}, this.ez = function() {
		if (!n.ui()) return 8 === aV.xK() ? a8.lx ? void b8.yH(!1) : ba.ui ? void ba.yI() : void aH.yI() : void(7 === aV.xK() ? ap.yN() : 6 === aV.xK() && aU.yO());
		n.yF(2)
	}
}

function bq() {
	this.pA = new yP, this.pK = new yQ, this.fr = new yR, this.wu = new yS, this.uQ = new yT, this.yU = new yV, this.canvas = new yW, this.color = new yX, this.yY = new yZ, this.dR = function() {
		this.pA.rx()
	}
}

function yQ() {
	this.sq = function(g) {
		g.fill(0)
	}, this.ya = function(g) {
		for (var eU = g.length, a6 = 0; a6 < eU; a6++) g[a6] = []
	}, this.yb = function(hN, yc) {
		for (var hO = bK.f6, a6 = 0; a6 < 3; a6++) hO[a6] = yc * hN[a6];
		return hO
	}, this.yd = function(hN, hO, ye) {
		for (var hS = 0, a6 = 0; a6 < 3; a6++) hS += Math.abs(hN[a6] - hO[a6]);
		return ye <= hS
	}, this.yf = function(hN, yg) {
		for (var a6 = 0; a6 < 3; a6++) hN[a6] = bH.oi(hN[a6] + yg, 0, 255);
		return hN
	}, this.yh = function(g, qd, qe) {
		qe = qe || g.length - 1;
		for (var yi = 0, a6 = qd = qd || 0; a6 <= qe; a6++) yi += g[a6];
		return yi
	}, this.yj = function(g, yk) {
		for (var a6, yl, eU = g.length, ym = [], en = eU - 1; 0 <= en; en--) {
			for (a6 = yl = 0; a6 < eU; a6++) yk(g[a6]) < yk(g[yl]) && (yl = a6);
			eU--, ym.push(g[yl]), g[yl] = g[eU], g.pop()
		}
		return ym
	}, this.min = function(g) {
		var a6, ex, eU = g.length;
		if (0 === eU) return 0;
		for (ex = g[0], a6 = 1; a6 < eU; a6++) ex = Math.min(ex, g[a6]);
		return ex
	}, this.max = function(g) {
		var eU = g.length;
		if (0 === eU) return 0;
		for (var ex = g[0], a6 = 1; a6 < eU; a6++) ex = Math.max(ex, g[a6]);
		return ex
	}, this.yn = function(g, ex) {
		for (var eU = g.length, fy = 0, a6 = 0; a6 < eU; a6++) fy += g[a6] > ex;
		return fy
	}, this.yo = function(yp, yq, min) {
		for (var eU = yq[0], a6 = eU - 1; 0 <= a6; a6--) yp[a6] < min && (yp[a6] = yp[--eU]);
		yq[0] = eU
	}, this.yr = function(g, eU, value) {
		for (var a6 = 0; a6 < eU; a6++) g[a6] -= value
	}, this.ys = function(g) {
		for (var eU = g.length, a6 = 0; a6 < eU; a6++)
			if ("string" != typeof g[a6]) return !1;
		return !0
	}, this.yt = function(or, g, yu) {
		g.fill(0);
		for (var qh = or.split(","), eU = Math.min(qh.length, g.length), a6 = 0; a6 < eU; a6++) g[a6] = Math.min(parseInt(qh[a6]), yu)
	}, this.yv = function(or, g, yw) {
		g.fill("");
		for (var qh = or.split('"'), eU = Math.min(qh.length, 2 * g.length), k0 = 0, a6 = 1; a6 < eU; a6 += 2) g[k0++] = qh[a6].slice(0, yw)
	}, this.yx = function(g, fy) {
		if (0 === fy) g.fill(0);
		else {
			var yi = this.yh(g),
				eU = g.length;
			if (0 === yi) g.fill(bH.ew(fy, eU));
			else
				for (var a6 = 0; a6 < eU; a6++) g[a6] = bH.ew(fy * g[a6], yi);
			if (0 === (yi = this.yh(g))) g[1] = fy;
			else
				for (var k0 = 0; yi++ < fy;) g[k0 = (k0 + 1) % eU] && g[k0]++
		}
	}, this.yy = function(g) {
		if (!g) return 0;
		var eU = g.length;
		if (0 === eU) return 0;
		for (var ex = g[eU - 1], a6 = eU - 2; 0 <= a6; a6--)
			if (g[a6] !== ex) return a6 + 2;
		return 1
	}
}

function yW() {
	this.uw = function(yz, oA, z0) {
		var h8 = yz.height,
			z1 = b7.pA.sg(h8, h8),
			hE = b7.pA.getContext(z1);
		return function(a0, hE, z0) {
			hE.fillStyle = z0, hE.beginPath(), hE.arc(a0 / 2, a0 / 2, .47 * a0, 0, 2 * Math.PI), hE.fill()
		}(h8, hE, z0), hE.drawImage(yz, -oA * h8, 0), z1
	}, this.z3 = function(z4) {
		var hE, hB, h8 = z4.height;
		return z4.width === h8 && (hB = (hE = b7.pA.getContext(z4, !0)).getImageData(0, 0, h8, h8), b7.yU.z5(hB.data, h8, h8, .9), hE.putImageData(hB, 0, 0)), z4
	}
}

function yX() {
	this.z6 = function(ex) {
		return [ex >> 12 & 63, ex >> 6 & 63, 63 & ex]
	}, this.z7 = function(ex) {
		for (var g = this.z6(ex), a6 = 0; a6 < 3; a6++) g[a6] = ~~(4.05 * g[a6]);
		return g
	}, this.z8 = function(ex) {
		ex = this.z7(ex);
		return b7.color.mN(ex[0], ex[1], ex[2])
	}, this.z9 = function(g) {
		for (var a6 = 0; a6 < 3; a6++) g[a6] = ~~(g[a6] / 4.04);
		return (g[0] << 12) + (g[1] << 6) + g[2]
	}, this.mN = function(hG, qh, eo) {
		return "rgb(" + hG + "," + qh + "," + eo + ")"
	}, this.mP = function(hG, qh, eo, en) {
		return "rgba(" + hG + "," + qh + "," + eo + "," + en.toFixed(3) + ")"
	}, this.pd = function(ep) {
		for (var g = ep.split("(")[1].split(","), f5 = (g.length, bK.f5), a6 = 0; a6 < 3; a6++) f5[a6] = parseInt(g[a6]);
		return f5
	}, this.pW = function(zA, eX) {
		for (var g = zA.slice(zA.indexOf("(") + 1, zA.indexOf(")")).split(","), f5 = bK.f5, a6 = 0; a6 < 3; a6++) f5[a6] = bH.oi(parseInt(g[a6].trim(), 10) + eX, 0, 255);
		return 3 === g.length ? this.mN(f5[0], f5[1], f5[2]) : this.mP(f5[0], f5[1], f5[2], parseFloat(g[3].trim()))
	}, this.zB = function(g) {
		for (var or = "#", a6 = 0; a6 < 3; a6++) {
			var hG = g[a6].toString(16);
			or += 1 === hG.length ? "0" + hG : hG
		}
		return or
	}, this.zC = function(or) {
		var hG, qh;
		return or.length < 7 ? u.mM : (hG = parseInt(or.slice(1, 3), 16), qh = parseInt(or.slice(3, 5), 16), or = parseInt(or.slice(5, 7), 16), this.mN(hG, qh, or))
	}
}

function yT() {
	this.zD = function(or, font, maxWidth) {
		if (font && (rA.font = font), rA.measureText(or).width <= maxWidth) return or;
		for (var a6 = or.length - 1; 1 <= a6; a6--)
			if (or = or.substring(0, a6), rA.measureText(or + "...").width <= maxWidth) return or + "...";
		return "..."
	}
}

function yZ() {
	var zF = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	this.zG = function(e2) {
		var zI, or = new Date(e2.getTime() - 6e4 * e2.getTimezoneOffset()).toUTCString();
		return or.length < 12 || (or = or.substring(5, or.length), 0 === (e2 = e2.getTimezoneOffset())) ? or : (zI = (e2 < 0 ? "+" : "-") + bH.ew(Math.abs(e2), 60), 0 == (e2 = Math.abs(e2) % 60) ? or + zI : or + zI + ":" + (e2 < 10 ? "0" : "") +
			e2)
	}, this.zJ = function(e2) {
		var or = e2.toUTCString();
		return or.length < 12 ? or : function(e2) {
			return zF[e2.getUTCDay()]
		}(e2) + ", " + or.substring(5, or.length - 4)
	}
}

function yP() {
	var zL = null;
	this.vE = 0, this.rx = function() {
		var ex = bf.dj.data[5].value;
		zL = "px " + ex, "Trebuchet MS" !== ex && (zL += ", Trebuchet MS"), this.vE = h7(32, 32, ["a", "b", "m"], 200, zL)
	}, this.sg = function(a0, j5) {
		var ep = document.createElement("canvas");
		return ep.width = a0, ep.height = j5, ep
	}, this.getContext = function(canvas, alpha) {
		return canvas.getContext("2d", {
			alpha: alpha
		})
	}, this.getImageData = function(uQ, a0, j5) {
		return uQ.getImageData(0, 0, a0, j5)
	}, this.qR = function(type, size) {
		return size = size.toFixed(2), 0 === type ? size + zL : 1 === type ? "bold " + size + zL : 2 === type ? "lighter " + size + zL : 3 === type ? "italic " + size + zL : 4 === type ? "oblique " + size + zL : 5 === type ? "small-caps " +
			size + zL : "small-caps bold " + size + zL
	}, this.textAlign = function(hE, id) {
		hE.textAlign = 0 === id ? "left" : 1 === id ? "center" : "right"
	}, this.textBaseline = function(hE, id) {
		hE.textBaseline = 1 === id ? "middle" : 2 === id ? "bottom" : "top"
	}, this.pM = function(e, code, color) {
		color = this.pL(bY.zM) + " solid " + (color || u.mV);
		5 === (code = code || 5) ? e.style.border = color : 4 === code ? e.style.borderLeft = color : 2 === code ? e.style.borderBottom = color : 6 === code ? e.style.borderRight = color : e.style.borderTop = color
	}, this.qj = function(e, eb, ed, a0, j5) {
		e = e.style;
		e.left = this.qk(eb), e.top = this.qk(ed), e.width = this.qk(a0), e.height = this.qk(j5)
	}, this.pB = function(ex) {
		return 1 + ex * r.s.v8()
	}, this.pu = function(m6, g4) {
		return m6 * this.pB(void 0 === g4 ? .5 : g4) * au.pC / au.pG
	}, this.qi = function(m6, g4) {
		return m6 * this.pB(void 0 === g4 ? .5 : g4) * au.pC
	}, this.qS = function(m6, g4, zN) {
		return this.pB(g4) * Math.min(m6 * au.pC, zN * au.a0) / au.pG
	}, this.pL = function(ex) {
		return ex.toFixed(1) + "px"
	}, this.qk = function(ex) {
		return this.zP(ex).toFixed(1) + "px"
	}, this.zP = function(ex) {
		return ex / au.pG
	}, this.zQ = function(qD, zR) {
		for (var or = "<ul>", eU = qD.length, a6 = 0; a6 < eU; a6++) or += "<li>" + qD[a6] + ": <a href='" + zR[a6] + "' target='_blank'>" + zR[a6] + "</a></li>";
		return or += "</ul>"
	}, this.zS = function(zT) {
		return "<a href='" + zT + "' target='_blank'>" + zT + "</a>"
	}, this.zU = function(e) {
		navigator.clipboard && navigator.clipboard.writeText(e.value)
	}, this.zV = function(e) {
		var e3 = e.textContent;
		b7.wu.zW(e3, "✔") || (1 === e3.length ? e.textContent = "✔" : e.textContent = e3 + " ✔", setTimeout(function() {
			e.textContent = e3
		}, 500))
	}, this.measureText = function(or) {
		return rA.measureText(or).width
	}
}

function yR() {
	this.gh = function(e1) {
		return 0 === e1 ? 1 === a8.w4 && a8.gr : 1 === e1 ? 1 === a8.w4 && !a8.gr : 2 === a8.w4
	}, this.gi = function(player) {
		return 0 !== ab.lS[player] && 2 !== ab.zX[player]
	}, this.zY = function(player) {
		return player === a8.eE && 2 !== ab.zX[player]
	}, this.zZ = function(player) {
		return player === a8.eE
	}, this.iz = function(player) {
		return player >= a8.jb || 2 === ab.zX[player]
	}, this.kP = function(player) {
		return 0 !== ab.lS[player]
	}, this.oS = function(za, zb) {
		return za !== zb
	}, this.fu = function(player, ex) {
		var min;
		return ex = this.zc(player, ex), ab.gX[player] += ex, ab.zd[player] && (min = Math.min(ab.zd[player], ab.gX[player]), ab.zd[player] -= min, ab.gX[player] -= min), ex
	}, this.zc = function(player, ex) {
		var ze = ab.gX[player];
		return ex = Math.min(ex, ab.gJ[player] * a8.ji - ze), ex = Math.min(ex, a8.zf - ze), Math.max(ex, 0)
	}, this.oT = function(player, hs, zg, zh) {
		var ze = ab.gX[player],
			hs = bH.ew(ze * (hs + 1), 1024),
			zg = bH.ew(zg * ze, 1024),
			hs = Math.min(hs, ze - zg);
		return 10 === a8.jv && (hs = b1.zj(player, hs)), bK.f3[0] = hs, bK.f3[1] = zg, zh <= hs
	}, this.nu = function(player, nb, na) {
		var player = ab.gX[player],
			zi = bH.ew(64 * player, 1024),
			player = (nb = Math.min(nb, player - zi), this.zl(nb));
		return zi += player, nb = this.zc(na, nb -= player), bK.f3[0] = nb, bK.f3[1] = zi, 1 <= nb
	}, this.nw = function(nb, na) {
		var zk = this.zl(nb);
		return nb = this.zc(na, nb -= zk), bK.f3[0] = nb, bK.f3[1] = zk, 1 <= nb
	}, this.hr = function(player, zm) {
		return bH.ew(ab.gX[player] * (zm + 1), 1024)
	}, this.zl = function(zn) {
		return bH.ew(Math.max(2142 - bb.jY(), 0) * zn, 2142)
	}, this.og = function(player, zg) {
		zg = bH.ew(zg * ab.gX[player], 1024);
		bK.f3[1] = zg, ab.gX[player] -= zg
	}, this.fs = function(player, zo) {
		var fF, fH, eo = ab.gX[player];
		return zo <= eo ? ab.gX[player] -= zo : (ab.gX[player] = 0, fH = ab.zd[player] + (fF = 5 * ((eo = zo - eo) >> 2)), bZ.fv(player, fF - eo, 12), fH <= a8.zp ? ab.zd[player] = fH : (ab.zd[player] = a8.zp, bZ.fv(player, fH - a8.zp, 18))), zo
	}, this.kd = function(player, hs) {
		var gX = ab.gX,
			ze = gX[player],
			hs = bH.ew(ze * (hs + 1), 1024),
			zi = Math.max(bH.ew(ze, 10), 1e3);
		return (hs = Math.min(hs, ze - zi)) < 0 ? (gX[player] = 0, zi = Math.min(1e3, ze + a8.zp - ab.zd[player]), bK.f3[1] = zi, ab.zd[player] += zi - ze, 0) : (bK.f3[1] = zi, 10 === a8.jv && (hs = b1.zj(player, hs)), gX[player] -= zi + hs, hs)
	}, this.oW = function(player) {
		ab.gX[player] -= bK.f3[0] + bK.f3[1]
	}, this.oU = function(player, ij) {
		return (ij = Math.min(ij, a8.eR)) < a8.eR && 0 === ab.lS[ij] && (ij = a8.eR), (bK.eQ[0] = ij) === a8.eR || eN(player, ij)
	}, this.oY = function(player, na) {
		return 0 !== ab.lS[na] && !eN(player, na)
	}, this.zq = function(player, zr) {
		for (var g3, eU = ag.jc, wj = 0, zs = ks, a6 = 0; a6 < eU; a6++)
			if (g3 = zs[a6], aX.vx(g3)) {
				if (player === g3) return !0;
				if (++wj > zr) return !1
			} return !1
	}, this.kl = function(g3) {
		var zt = a8.ib ? bd.we() : ab.gJ[ks[0]];
		return zt >= bH.ew(g3 * a8.jL, 100)
	}
}

function yV() {
	this.zu = function(canvas, zv, zw) {
		var a0 = canvas.width,
			j5 = canvas.height,
			ep = b7.pA.sg(a0, j5),
			hE = b7.pA.getContext(ep, !0),
			canvas = (hE.drawImage(canvas, 0, 0), hE.getImageData(0, 0, a0, j5));
		return zv(canvas.data, a0, j5, zw), hE.putImageData(canvas, 0, 0), ep
	}, this.zx = function(sr, a0, j5) {
		for (var eb = a0 - 1; 0 <= eb; eb--)
			for (var ed = j5 - 1; 0 <= ed; ed--) {
				var a6 = 4 * (eb + ed * a0);
				sr[3 + a6] = sr[a6], sr[a6] = sr[1 + a6] = sr[2 + a6] = 255
			}
	}, this.zy = function(sr, a0, j5) {
		for (var eb = a0 - 1; 0 <= eb; eb--)
			for (var ed = j5 - 1; 0 <= ed; ed--) {
				var a6 = 4 * (eb + ed * a0);
				sr[1 + a6] > sr[2 + a6] + 10 && (sr[3 + a6] = sr[a6], sr[1 + a6] = sr[2 + a6])
			}
	}, this.zz = function(sr, a0, j5, zw) {
		for (var gap = Math.floor(Math.min(a0, j5) * zw), eb = 0; eb < a0; eb++)
			for (var a6, ed = 0; ed < j5; ed++)(eb < gap || ed < gap || a0 - gap <= eb || j5 - gap <= ed) && (sr[3 + (a6 = 4 * (eb + ed * a0))] = 255 - 255 * (sr[1 + a6] - sr[a6]) / (255 - sr[a6]))
	}, this.a00 = function(sr, a0, j5, zw) {
		for (var eb = a0 - 1; 0 <= eb; eb--)
			for (var ed = j5 - 1; 0 <= ed; ed--) {
				var a6 = 4 * (eb + ed * a0);
				sr[a6] = zw[0], sr[1 + a6] = zw[1], sr[2 + a6] = zw[2]
			}
	}, this.a01 = function(sr, a0, j5, zw) {
		for (var gap = Math.floor(a0 * zw), eb = 0; eb < a0; eb++)
			for (var a6, ed = 0; ed < j5; ed++)(eb < gap || ed < gap || a0 - gap <= eb || j5 - gap <= ed) && (sr[a6 = 4 * (eb + ed * a0)] = sr[1 + a6] = sr[2 + a6] = 0)
	}, this.a02 = function(sr, a0, j5) {
		for (var ed, a6, eb = a0 - 1; 0 <= eb; eb--)
			for (ed = j5 - 1; 0 <= ed; ed--) 200 < sr[1 + (a6 = 4 * (eb + ed * a0))] && sr[1 + a6] - 20 > sr[a6] && sr[1 + a6] - 20 > sr[2 + a6] ? sr[a6] + sr[2 + a6] < 40 ? sr[3 + a6] = 0 : (sr[3 + a6] = sr[a6], sr[a6] = 255, sr[1 + a6] = 255,
				sr[2 + a6] = 255) : sr[a6] < 50 && sr[1 + a6] < 50 && sr[2 + a6] < 50 && (sr[a6] + sr[1 + a6] + sr[2 + a6] < 50 ? sr[3 + a6] = 180 : sr[3 + a6] = 180 + Math.floor(75 * (sr[a6] + sr[1 + a6] + sr[2 + a6] - 50) / 100))
	}, this.a03 = function(sr, a0, j5) {
		for (var ed, a6, eb = a0 - 1; 0 <= eb; eb--)
			for (ed = j5 - 1; 0 <= ed; ed--) sr[1 + (a6 = 4 * (eb + ed * a0))] > sr[a6] + 20 && sr[1 + a6] > sr[2 + a6] + 20 && sr[a6] + sr[2] < 40 && (sr[3 + a6] = 255 - sr[1 + a6], sr[a6] = sr[1 + a6] = sr[2 + a6] = sr[a6])
	}, this.z5 = function(sr, a0, j5, zw) {
		for (var hG = a0 >> 1, eb = 0; eb < a0; eb++)
			for (var ed = 0; ed < j5; ed++) Math.sqrt((eb - hG) * (eb - hG) + (ed - hG) * (ed - hG)) > zw * hG && (sr[4 * (eb + ed * a0) + 3] = 0)
	}
}

function yS() {
	this.a04 = function(ex) {
		var a6, a05, a06, a07, a08;
		if (ex < 0) return "-" + this.a04(Math.abs(ex));
		if (ex < 1e3) return ex.toString();
		for (a05 = Math.floor(Math.log(ex + .5) / Math.log(10)) + 1, a06 = Math.floor((a05 - 1) / 3), a08 = (a07 = ex.toString()).substring(a05 - 3, a05), a6 = 1; a6 < a06; a6++) a08 = a07.substring(a05 - 3 * (a6 + 1), a05 - 3 * a6) + " " + a08;
		return a07.substring(0, a05 - 3 * a06) + " " + a08
	}, this.a09 = function(g3, a05) {
		return g3.toFixed(a05) + "%"
	}, this.wz = function(ex, a0A) {
		return ex.toFixed(bH.oi(Math.floor((void 0 === a0A ? 3 : a0A) - Math.log10(Math.max(ex, 1))), 0, 8))
	}, this.a0B = function(ex, m6, a05) {
		return (ex * m6).toFixed(a05)
	}, this.wv = function(username) {
		var eY, eJ = username.indexOf("[");
		return !(eJ < 0) && 1 < (eY = username.indexOf("]")) - eJ && eY - eJ <= 8 ? username.substring(eJ + 1, eY).toUpperCase().trim() : null
	}, __fx.leaderboardFilter.parseClanFromPlayerName = this.wv;
	this.a0C = function(or) {
		for (var en = Math.floor(.5 * or.length + .5), mD = Math.floor(.5 * (en - 1)), a6 = 0; a6 < mD; a6++)
			for (var eo = -1; eo < 2; eo += 2) {
				var ep = en + eo * a6;
				if (" " === or[ep]) return [this.a0D(or.substring(0, ep)), this.a0E(or.substring(ep))]
			}
		return [or.substring(0, en), or.substring(en)]
	}, this.a0E = function(or) {
		for (var eU = or.length, a6 = 0; a6 < eU; a6++)
			if (" " !== or[a6]) return or.substring(a6);
		return or
	}, this.a0D = function(or) {
		for (var a6 = or.length - 1; 0 <= a6; a6--)
			if (" " !== or[a6]) return or.substring(0, a6 + 1);
		return or
	}, this.a0F = function(or, a0G) {
		return or.split("(")[0] + "(🧈 " + a0G.toFixed(2) + ")"
	}, this.startsWith = function(or, a0H) {
		return or.substring(0, a0H.length) === a0H
	}, this.zW = function(or, a0H) {
		var eU = or.length;
		return or.substring(eU - a0H.length, eU) === a0H
	}, this.a0I = function(g, a0J, a0K) {
		var or = "",
			eU = g.length - 1;
		a0K = a0K || "";
		for (var a6 = 0; a6 < eU; a6++) or += a0K + g[a6] + a0K + ",", (a6 + 1) % a0J == 0 && (or += "\n");
		return or += a0K + g[eU] + a0K
	}, this.a0L = function(or, hN, hO) {
		return or.replace(new RegExp(hN, "g"), hO)
	}
}

function a0M() {
	this.ig = function(player, eG) {
		aD.uC(player, bI.ec(eG), bI.ee(eG)) && (bb.dZ = !0), a8.jx && this.iQ()
	}, this.iQ = function() {
		a8.gr = !1;
		for (var a6 = 0; a6 < a8.jb; a6++) 0 !== ab.lS[a6] && 0 === ab.gJ[a6] && aD.uI(a6);
		0 !== ab.lS[a8.eE] ? (bZ.lO[7] = ab.gJ[a8.eE], bZ.lO[8] = ab.gX[a8.eE], aM.a0N(), aR.a0O(), a8.gf || aC.ln(ab.i7[a8.eE] - 5, ab.i9[a8.eE] - 5, ab.i8[a8.eE] + 5, ab.iA[a8.eE] + 5), ao.dR()) : aS.show(!1, !1, !1, !0), aI.a0P(18), aa.a0Q(),
			aa.lE(!0), bL.l6.a0R(), aG.qg(), a8.oR = null, bX.a0S = !0, bX.a0T(), a8.jx && r.s.setState(1)
	}
}

function bs() {
	this.eR = 512, this.zf = 15e8, this.a0U = 1e9, this.zp = 5e4, this.a0V = 512, this.fp = 2, this.eE = 0, this.jb = 0, this.w7 = 0, this.jz = 0, this.w6 = 0, this.tN = 512, this.tS = 512, this.ji = 150, this.jx = !0, this.gf = 0, this.w4 = 0, this
		.jL = 0, this.lx = !1, this.gr = 0, this.a0W = 0, this.ib = !1, this.tU = 0, this.tV = 0, this.jv = 0, this.wl = 0, this.oR = null, this.wM = new uW, this.a0X = 30, this.w1 = 0, this.w9 = 0, this.wL = 0, this.data = new a0Y, this.a0Z =
		new a0a, this.a0b = 0, this.a0c = function() {
			this.w7 = this.jb = this.data.humanCount, this.jx = 1 === this.w7 && !__fx.customLobby.isActive(), this.lx = !1, this.gf = this.data.isReplay, this.jv = 0 === this.data.gameMode ? [7, 10, 8][this.data.battleRoyaleMode] : this.data
				.isZombieMode ? 9 : this.data.numberTeams - 2, this.wl = this.data.isContest, this.ib = this.jv < 7 || 9 === this.jv, this.jv = 10 === this.jv && this.jx ? 7 : this.jv, this.jv = 8 === this.jv && 2 !== this.jb ? 7 : this.jv, aw.dR(),
				this.tU = this.data.numberTeams, this.data.teamPlayerCount ? this.tV = +(0 < this.data.teamPlayerCount[0]) : (this.tV = 0, this.ib && this.jx && (this.data.teamPlayerCount = new Uint16Array(9), this.data.teamPlayerCount.fill(1, 1,
					this.tU + 1), a8.a0Z.a0d())), this.a0X = this.jb <= 2 ? 30 : this.jb <= 50 ? 40 : 50, this.a0W = this.gr = __fx.customLobby.isActive() ? __fx.customLobby.gameInfo.spawnSelection : this.data.selectableSpawn, this.oR = this.gr ?
				new a0M : null, this.tN = __fx.customLobby.isActive() ? Math.max(Math.min(__fx.customLobby.gameInfo.botCount, this.data.playerCount), this.jb) : this.data.playerCount,
				this.tS = this.tN, this.jz = this.tN - this.jb, this.w6 = 0, this.eE = this.data.selectedPlayer, this.w1 = 0, this.w9 = 0, this.wL = 0, av.a0e(this.data.spawningSeed), aZ.dR(), ab.dR(), ad.a0f(), b5.nT.oD = [], bc.dR(), this.w4 = 1,
				__fx.donationsTracker.reset(), __fx.leaderboardFilter.reset(), __fx.customLobby.isActive() && __fx.customLobby.hideWindow(), bZ.dR(), a0g(), aX.dS(), aj.a0h(), bX.dR(), aX.dR(), am.dR(), bI.dR(), bJ.dR(), ai.dR(), bN.dR(), bR.a0i(),
				a9.dR(), ad.a2(), aD.dR(), aE.dR(), ag.a0j(), b6.dR(), bd.dR(), bL.dR(), ba.dR(), a0k.putImageData(a0l, 0, 0), aQ.dR(), aN.dR(), aM.dR(), b8.dR(), ar.dR(), aP.dR(), aR.dR(), aH.dR(), aL.dR(), aI.dR(), aK.dR(), aG.dR(), aS.dR(), aA
				.dR(), aB.dR(), fX(), aY.dR(), aa.dR(), b1.dR(), b2.dR(), ay.dR(), this.wM.dR(), bb.a0i(), aC.lm(), 0 === ab.lS[a8.eE] && aS.show(!1, !0), aa.lE(!0), ao.dR(), bb.dZ = !0, this.gf || this.jx && this.gr || r.s.setState(1), this.a0b = 0
		}, this.xX = function(a0n) {
			a8.gf || b6.oP.a0o.length || (b6.oP.a0o = b6.a0p.va()),
				__fx.customLobby.isActive() === false && ax.l6.a0q(),
				this.w4 = 0, bb.a0r(), r.s.setState(0), a0n || bQ.dn.show(), aV.setState(0);
			if (__fx.customLobby.isActive()) __fx.customLobby.rejoinLobby();
			else this.a0b ? n.o(19) : n.o(5, 5)
		}, this.a0s = function() {
			return this.gf ? aH.gg || !b8.a0t : this.jx && (aH.gg || this.gr)
		}, this.a0u = function() {
			return 1 === this.w4 && !this.gr
		}
}

function a0Y() {
	this.mapType = 0, this.mapProceduralIndex = 2, this.mapRealisticIndex = 0, this.mapSeed = 14071, this.mapName = "", this.canvas = null, this.passableWater = 1, this.passableMountains = 1, this.playerCount = 512, this.humanCount = 1, this
		.selectedPlayer = 0, this.gameMode = 0, this.playerMode = 0, this.battleRoyaleMode = 0, this.numberTeams = 0, this.isZombieMode = 0, this.isContest = 0, this.isReplay = 0, this.elo = null, this.colorsType = 0, this.colorsPersonalized = 1,
		this.colorsData = null, this.selectableColor = 1, this.teamPlayerCount = null, this.neutralBots = 0, this.botDifficultyType = 0, this.botDifficultyValue = 0, this.botDifficultyTeam = null, this.botDifficultyData = null, this.spawningType = 0,
		this.spawningSeed = 0, this.spawningData = null, this.selectableSpawn = 1, this.playerNamesType = 0, this.playerNamesData = null, this.selectableName = 1, this.aIncomeType = 0, this.aIncomeValue = 0, this.aIncomeData = null, this
		.tIncomeType = 0, this.tIncomeValue = 32, this.tIncomeData = null, this.iIncomeType = 0, this.iIncomeValue = 64, this.iIncomeData = null, this.sResourcesType = 0, this.sResourcesValue = 0, this.sResourcesData = null
}

function a0a() {
	this.a0d = function() {
		var a0v = a8.data;
		b7.pK.yx(a0v.teamPlayerCount, a0v.playerCount), a0v.numberTeams = b7.pK.yn(a0v.teamPlayerCount, 0), a0v.teamPlayerCount[0] && a0v.teamPlayerCount[7] && (a0v.teamPlayerCount[7] = 0, this.a0d())
	}, this.a0w = function() {
		var a0v = a8.data;
		a0v.mapType < 2 ? bO.a2(bO.a0x(a0v), a0v.mapSeed) : bO.a0y(a0v.canvas)
	}, this.a0z = function() {
		var a0v = a8.data;
		a0v.colorsData || (a0v.colorsData = new Uint32Array(1)), a0v.selectableColor && (a0v.colorsData[0] = bf.l6.rv()), a0v.selectableName && (a0v.playerNamesData || (a0v.playerNamesData = new Array(1)), a0v.playerNamesData[0] = bf.dj.data[122]
			.value)
	}, this.a10 = function() {
		a8.data = new a0Y, a8.data.aIncomeType = 2, a8.data.aIncomeData = new Uint8Array(a8.eR), a8.data.aIncomeData[0] = 64
	}
}

function dL() {
	this.vB = 0, this.gap = 0, this.zM = 0, this.pI = 0, this.dR = function() {
		this.resize()
	}, this.resize = function() {
		this.vB = .0022 * b7.pA.pB(.5) * au.pC, this.zM = this.vB / au.pG, this.gap = Math.max(Math.floor((r.s.v8() ? .0114 : .01296) * au.pC), 2), this.pI = this.gap / au.pG
	}
}

function dK() {
	this.a11 = function() {
		return r.s.v8() ? 2 : 1
	}
}

function c3() {
	var pg, eb, ed, a12, a13, a14, e2, player, a15, gap, zoom, o5, a16;

	function a1G(player) {
		for (var a6 = o5.length - 1; 0 <= a6; a6--)
			if (o5[a6] === player) return 1
	}

	function a1E(a1B) {
		var a6, eU;
		if (-1 !== a1B)
			for (eU = pg.length, a6 = 0; a6 < eU; a6++)
				if (pg[a6].ui && pg[a6].eb + 1 === a1B % 4 && pg[a6].ed + 1 === a1B >> 2) return a6;
		return -1
	}

	function a1C(kg, kh) {
		var qh = gap / 2;
		return kg < eb - a12 - 3 * qh || eb + 3 * a12 + 5 * qh < kg || kh < ed - a12 - 3 * qh || ed + 2 * a12 + 3 * qh < kh ? -1 : 4 * (kh < ed - qh ? 0 : kh < ed + a12 + qh ? 1 : 2) + (kg < eb - qh ? 0 : kg < eb + a12 + qh ? 1 : kg < eb + 2 * a12 +
			3 * qh ? 2 : 3)
	}
	this.a17 = function() {
		var a6, eo, a1A = [u.mr, u.n3, u.mT, u.nI, u.nB];
		for (pg = new Array(9), a6 = 0; a6 < 9; a6++) pg[a6] = {
			id: a6,
			ui: !1,
			kN: 0,
			canvas: [],
			eb: 0,
			ed: 0
		};
		for (pg[0].colors = [0, 1, 2, 3], pg[0].eb = 0, pg[0].ed = 0, pg[1].colors = [0, 1, 4], pg[1].eb = 1, pg[1].ed = 0, pg[2].colors = [0, 2], pg[2].eb = -1, pg[2].ed = 0, pg[3].colors = [0], pg[3].eb = 0, pg[3].ed = 0, pg[4].colors = [0, 2],
			pg[4].eb = 1, pg[4].ed = 1, pg[5].colors = [3], pg[5].eb = 0, pg[5].ed = -1, pg[6].id = 20, pg[6].colors = [0], pg[6].eb = 1, pg[6].ed = -1, pg[7].id = 21, pg[7].colors = [0], pg[7].eb = 0, pg[7].ed = 1, pg[8].id = 16, pg[8]
			.colors = [0], pg[8].eb = 0, pg[8].ed = 0, a6 = 0; a6 < 9; a6++)
			for (eo = 0; eo < pg[a6].colors.length; eo++) pg[a6].canvas.push(function(id, z0) {
				if (id < 20) return b7.canvas.uw(aW.get(3), id, z0);
				var z0 = aW.get(3).height,
					z1 = b7.pA.sg(z0, z0),
					hE = b7.pA.getContext(z1);
				20 === id ? hE.drawImage(aW.get(18), 0, 0) : 21 === id && ae.sr.vC(ae.uf.v0 + ae.uf.vI, hE, 0, 0, z0);
				return z1
			}(pg[a6].id, a1A[pg[a6].colors[eo]]))
	}, this.a19 = function() {
		return pg
	}, this.dR = function() {
		o5 = [], eb = ed = e2 = 0, a13 = a14 = -1e3, this.resize()
	}, this.resize = function() {
		a12 = Math.floor((r.s.v8() ? .075 : .0468) * au.pC), zoom = a12 / aW.get(3).height, gap = Math.floor(a12 / 3)
	}, this.y0 = function(kg, kh) {
		return !!this.ui() && (bb.dZ = !0, !!ae.sr.gj(kg, kh, player) || (kg = function(kg, kh) {
			a14 = a13 = -1e3;
			var a1D = a1E(a1C(kg, kh));
			if (-1 === a1D) return 0;
			if (1 !== pg[a1D].colors[pg[a1D].kN])
				if (5 === a1D) {
					if (! function() {
							var e3 = performance.now();
							a16 + 4e3 < e3 && (o5 = []);
							a16 = e3
						}(), a1G(player)) return 1;
					o5.push(player), 16 < o5.length && o5.shift()
				} else if (6 === a1D) {
				for (var a6 = o5.length - 1; 0 <= a6; a6--) 0 === ab.lS[o5[a6]] && o5.splice(a6, 1);
				0 < o5.length && (b2.a1H(1, o5, !0) && b5.fr.o4(o5, player), o5 = [])
			} else if (2 === a1D) b5.gs.nZ(aM.gx(), player);
			else if (3 === a1D) a8.gr && b5.gs.gt(a15);
			else if (0 === a1D)
				if (0 === pg[0].kN) {
					if (a8.a0W && aR.a1I() < 350) return 1;
					b5.gs.h3(aM.gx(), player)
				} else ay.h5(player, aM.gx());
			else if (1 === a1D) bR.a1J(), b5.gs.h1(aM.gx(), a15);
			else {
				if (7 === a1D) return bR.a1K(), ae.sr.show(kg, kh), 2;
				if (4 === a1D) b2.a1H(0, [player], !0) && b5.fr.o1(player);
				else {
					if (8 !== a1D) return 0;
					b5.gs.gw(aM.gx(), a15, player)
				}
			}
			return 1
		}(kg, kh), this.qg(), 2 === kg && (ae.sr.ui = !0), 0 < kg))
	}, this.y2 = function(kg, kh) {
		this.ui() || (a13 = kg, a14 = kh, e2 = performance.now())
	}, __fx.hoveringTooltip.display = function(mouseX, mouseY) {
		var coordX = bI.gn(mouseX),
			coordY = bI.gp(mouseY),
			coord = bI.es(coordX, coordY),
			point = bI.eK(coord);
		if (coordX < 0 || coordY < 0) return;
		(function(kg, kh, e8) {
			aX.eP(e8) || -1 === (kg = bJ.gz.a1Y(kg, kh)) ? aI.a1X(e8) : aI.a1Z(kg)
		}(mouseX, mouseY, point))
	}
	this.click = function(kg, kh, yA) {
		var gm = bI.gn(kg),
			go = bI.gp(kh),
			eG = bI.es(gm, go),
			e8 = bI.eK(eG);
		if (!bI.gq(gm, go)) return !1;
		gm = (r.s.v8() ? .025 : .0144) * au.pC, go = performance.now();
		if (Math.abs(kg - a13) > gm || Math.abs(kh - a14) > gm || e2 + 500 < go) return !1;
		if (e2 = go, yA && ! function(kg, kh, e8) {
				aX.eP(e8) || -1 === (kg = bJ.gz.a1Y(kg, kh)) ? aI.a1X(e8) : aI.a1Z(kg)
			}(kg, kh, e8), aH.gg || this.ui() || !b7.fr.gi(a8.eE) || a8.gf) return this.qg(), !1;
		if (a8.gr) {
			if (!yA) {
				if (!aX.eP(e8)) return !1;
				a15 = eG, pg[3].ui = !0
			}
		} else if (bJ.gz.ne(eG)) yA ? aI.a1Q(55, 0) : bJ.a1O.a1P = -1;
		else {
			if (yA) return !1;
			bJ.gz.a1R(kg, kh) || (2 === a8.w4 ? aX.g5(e8) && (player = aX.eM(e8), aX.vx(player)) && (pg[0].ui = !0, pg[0].kN = 1, pg[7].ui = !0) : aX.eZ(e8) ? (a15 = ah.e5.e7(e8)) && (gm = bI.eK(a15), pg[8].ui = !0, player = aX.eL(gm) ? a8.eR :
				aX.eM(gm)) : (a15 = eG, bJ.gz.h0(a8.eE, eG) && (pg[0].ui = !0, pg[0].kN = 1, pg[1].ui = !0, pg[1].kN = bK.f7[2] ? 0 : 2), aX.gy(e8) || (aX.eL(e8) ? (player = a8.eR, h2(a8.eE) ? (pg[0].ui = !0, pg[0].kN = 0) : h4(a8.eE,
				player) && (pg[0].ui = !0, pg[0].kN = 3)) : (player = aX.eM(e8)) === a8.eE ? (pg[0].ui = !0, pg[0].kN = 1, pg[7].ui = !0) : (pg[0].kN = 1, pg[5].ui = function(player) {
				return aX.vx(player) && !a1G(player) && b2.a1H(1, [player], !1)
			}(player), pg[7].ui = aX.vx(player), eN(player, a8.eE) ? (pg[4].ui = aX.vx(player) && !aa.a1T(player) && b2.a1H(0, [player], !1), pg[6].ui = function(player) {
				if (0 === o5.length) return !1;
				if (performance.now() > a16 + 4e3) return !(o5 = []);
				return !a1G(player) && ! function(player) {
					var a6;
					if (a8.ib)
						for (a6 = o5.length - 1; 0 <= a6; a6--)
							if (!eN(player, o5[a6])) return 1;
					return
				}(player)
			}(player), h6(a8.eE, player) ? (pg[0].kN = 0, pg[0].ui = !0) : h4(a8.eE, player) && (pg[0].kN = 3, pg[0].ui = !0), pg[0].ui = this.a1V()) : (pg[2].ui = !0, pg[0].ui = !0)))))
		}
		return this.a1N(kg, kh)
	}, this.a1N = function(kg, kh) {
		return eb = kg - Math.floor(a12 / 2), ed = kh - Math.floor(a12 / 2), !!this.ui()
	}, this.xg = function(kg, kh) {
		return !!this.ui() && (ae.sr.ui ? !ae.sr.vA(kg, kh) && (ae.sr.ui = !1, bb.dZ = !0) : function(wb, kg, kh) {
			kg = a1C(kg, kh);
			if (0 <= a1E(kg)) return !1;
			if ((1 === kg || 6 === kg) && 0 <= a1E(2)) return !1;
			if ((6 === kg || 9 === kg) && 0 <= a1E(10)) return !1;
			return wb.qg(), bb.dZ = !0
		}(this, kg, kh))
	}, this.qg = function() {
		for (var a6 = pg.length - 1; 0 <= a6; a6--) pg[a6].ui = !1, pg[a6].kN = 0;
		ae.sr.ui = !1
	}, this.ui = function() {
		return this.a1V() || ae.sr.ui
	}, this.a1V = function() {
		for (var eU = pg.length, a6 = 0; a6 < eU; a6++)
			if (pg[a6].ui) return !0;
		return !1
	}, this.r9 = function() {
		if (this.ui())
			if (ae.sr.ui) ae.sr.r9();
			else {
				var a6, hE = rA,
					eo = pg,
					eU = eo.length,
					a1d = (a12 + gap) / zoom;
				for (hE.imageSmoothingEnabled = !0, hE.setTransform(zoom, 0, 0, zoom, eb, ed), a6 = 0; a6 < eU; a6++) eo[a6].ui && rA.drawImage(eo[a6].canvas[eo[a6].kN], eo[a6].eb * a1d, eo[a6].ed * a1d);
				hE.imageSmoothingEnabled = !1, hE.setTransform(1, 0, 0, 1, 0, 0)
			}
	}
}

function c4() {
	var j5, canvas, a1e, a1f, a1g, a1h = -1;

	function a1i() {
		var a1j, uQ = canvas.getContext("2d", {
			alpha: !0
		});
		uQ.clearRect(0, 0, j5, j5), uQ.fillStyle = u.mR, uQ.fillRect(0, 0, j5, j5), 0 === a1f && (uQ.fillStyle = u.mW, uQ.fillRect(0, 0, j5, j5)), uQ.fillStyle = u.mV, uQ.fillRect(0, 0, j5, 1), uQ.fillRect(0, 0, 1, j5), uQ.fillRect(0, j5 - 1, j5, 1),
			uQ.fillRect(j5 - 1, 0, 1, j5), a1j = .9 * j5 / aW.get(0).width, uQ.imageSmoothingEnabled = !0, uQ.setTransform(a1j, 0, 0, a1j, Math.floor((j5 - a1j * aW.get(0).width) / 2), Math.floor((j5 - a1j * aW.get(0).height) / 2)), uQ.drawImage(aW
				.get(0), 0, 0), uQ.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a1l(kg, kh) {
		if (!aH.gg) return kg <= j5 + bY.gap && kh >= aM.ed ? 9 : -1;
		if (kg <= 4 * j5 + bY.gap) {
			if (kh >= aM.ed) return 0;
			if (kh >= aM.ed - j5 - a1g * bY.gap) return 2
		} else if (kg <= 7 * j5 + bY.gap && kh >= aM.ed - j5 - a1g * bY.gap) return 1;
		return -1
	}
	this.gg = !1, this.dR = function() {
		a1f = -1, this.gg = !1, a1g = r.s.v8() ? 1.2 : .6, this.resize()
	}, this.resize = function() {
		j5 = aM.j5, (canvas = document.createElement("canvas")).width = j5, canvas.height = j5, a1e = b7.pA.qR(1, (r.s.v8() ? .5 : .45) * j5), a1i()
	}, this.yI = function() {
		this.gg = !this.gg, this.gg ? (bQ.dl.hideCMPButton(), b8.yH(!1), a8.gf && b8.a0t && b8.yJ(!0), this.a1k()) : (a1f = -1, a1i(), !a8.jx || 1 !== a8.w4 || a8.gr || a8.gf || r.s.setState(1)), bb.dZ = !0
	}, this.a1k = function() {
		(a8.jx || a8.gf) && 1 === a8.w4 && (aQ.lE(!0), a8.gr || setTimeout(function() {
			bX.wF()
		}, 0), r.s.setState(0))
	}, this.gj = function(kg, kh) {
		return 0 <= (a1h = a1l(kg, kh)) || !aH.gg || a8.jx || a8.gf || ba.ui || aH.yI(), a1h
	}, this.xg = function(kg, kh) {
		kg = a1l(kg, kh);
		kg !== a1f && (a1f = kg, this.gg || a1i(), bb.dZ = !0)
	}, this.xh = function(kg, kh) {
		kg = a1l(kg, kh);
		return -1 !== kg && a1h === kg && (this.gg ? a8.lx ? (0 <= kg && b8.yH(!1), !a8.gf) : (0 === kg ? a8.xX() : 1 === kg ? this.yI() : 2 === kg && n.o(1, 0), !0) : 9 === kg && (this.yI(), !0))
	}, this.r9 = function() {
		var a0;
		this.gg ? (a0 = Math.floor(5.5 * j5), rA.setTransform(1, 0, 0, 1, bY.gap, aM.ed), rA.fillStyle = u.mR, rA.fillRect(0, 0, a0, j5), 0 === a1f ? (rA.fillStyle = u.mW, rA.fillRect(0, 0, 4 * j5, j5)) : 1 === a1f && (rA.fillStyle = u.mW, rA
				.fillRect(4 * j5, 0, Math.floor(1.5 * j5), j5)), rA.fillStyle = u.mV, rA.fillRect(0, 0, a0, 1), rA.fillRect(0, 0, 1, j5), rA.fillRect(4 * j5, 0, 1, j5), rA.fillRect(0, j5 - 1, a0, 1), rA.fillRect(a0 - 1, 0, 1, j5), rA.font =
			a1e, b7.pA.textBaseline(rA, 1), b7.pA.textAlign(rA, 1), rA.fillText(L(18), 2 * j5, .54 * j5), a0 = .4 * j5, aH.a1q(bY.gap + 4 * j5 + (1.5 * j5 - a0) / 2, aM.ed + .3 * j5, a0), a0 = 1, rA.setTransform(1, 0, 0, 1, bY.gap, aM.ed -
				a0 * a1g * bY.gap - a0 * j5), rA.fillStyle = u.mR, rA.fillRect(0, 0, 4 * j5, j5), a1f === a0 + 1 && (rA.fillStyle = u.mW, rA.fillRect(0, 0, 4 * j5, j5)), rA.fillStyle = u.mV, rA.fillRect(0, 0, 4 * j5, 1), rA.fillRect(0, 0, 1,
				j5), rA.fillRect(4 * j5, 0, 1, j5), rA.fillRect(0, j5 - 1, 4 * j5, 1), rA.fillText(L(0 === a0 ? 18 : 19), 2 * j5, .54 * j5), rA.setTransform(1, 0, 0, 1, 0, 0)) : rA.drawImage(canvas, bY.gap, aM.ed)
	}, this.a1p = function(player) {
		return 0 !== ab.lS[player] && 2 !== a8.w4 && aX.vx(player)
	}, this.a1q = function(eb, ed, eU) {
		rA.setTransform(1, 0, 0, 1, eb, ed), rA.lineWidth = bY.vB, rA.strokeStyle = u.mV, rA.beginPath(), rA.moveTo(0, 0), rA.lineTo(eU, eU), rA.moveTo(0, eU), rA.lineTo(eU, 0), rA.stroke()
	}
}

function c5() {
	var a1s, j5, a1t, a1u, a1v, a1w, a1x, a1y, a1z;

	function uM() {
		return aM.a2G(aI.a2C()) ? ar.ui ? aM.ed - aM.j5 - 2 * a1t : aM.ed - a1t : b8.a2G(aI.a2F()) ? ar.ui ? b8.uM() - aM.j5 - 2 * a1t : b8.uM() - a1t : ar.ui ? au.j5 - aM.j5 - (bg.a11() + 1) * a1t : au.j5 - bg.a11() * bY.gap
	}

	function a24(e3, or, id, g3, a26, a27, sz, a28, a29, a2A) {
		var a6, uQ, z1, p2, g, a2L = void 0 !== a29,
			a0 = Math.floor(aL.measureText(or, aI.a1e) + 1.5 * a1u + (a2L ? j5 : 1.5 * a1u));
		if (bb.dZ = !0, a0 + a1t > au.a0 && !a2L && 50 !== id && 20 < or.length) a24(e3, (g = b7.wu.a0C(or))[0], id, g3, a26, a27, sz, a28, a29, a2A), a24(e3, g[1], id, g3, a26, a27, sz, a28, a29, a2A);
		else if (g = a0 + (50 === id ? a1v : 0), (z1 = document.createElement("canvas")).width = a0, z1.height = j5, (uQ = z1.getContext("2d", {
				alpha: !0
			})).font = aI.a1e, b7.pA.textBaseline(uQ, 1), b7.pA.textAlign(uQ, 0), uQ.clearRect(0, 0, a0, j5), uQ.fillStyle = a27, uQ.fillRect(0, 0, a0, j5), uQ.fillStyle = a26, uQ.fillText(or, Math.floor(1.5 * a1u), Math.floor(j5 / 2)), a2L && (uQ
				.imageSmoothingEnabled = !0, ae.sr.vC(a29, uQ, a0 - j5, 0, j5)), 0 === (p2 = {
				e2: e3,
				or: or,
				id: id,
				player: g3,
				canvas: z1,
				a26: a26,
				a27: a27,
				a0: a0,
				a2D: g,
				sz: sz,
				a28: a28,
				a29: a29,
				a2A: a2A
			}).e2 || 0 < a1s.length && 0 < a1s[0].e2) a1s.unshift(p2);
		else {
			for (a6 = 1; a6 < a1s.length; a6++)
				if (0 < a1s[a6].e2) return void a1s.splice(a6, 0, p2);
			a1s.push(p2)
		}
	}

	function a2S(hG, qh, eo) {
		return "rgb(" + hG + "," + qh + "," + eo + ")"
	}

	function a2M(id, fy) {
		for (var eU = a1s.length, a6 = 0; a6 < eU; a6++) a1s[a6].id === id && fy-- <= 0 && (a1s.splice(a6, 1), a6--, eU--)
	}

	function a2O(id, player) {
		for (var ei = !1, a6 = a1s.length - 1; 0 <= a6; a6--) a1s[a6].id !== id || player !== a8.eR && a1s[a6].player !== player || (a1s.splice(a6, 1), ei = !0);
		return ei
	}

	function a2m(or) {
		a24(340, or, 6, 0, a2S(215, 245, 255), u.mS, -1, !1)
	}
	this.a20 = "", this.dR = function() {
		var self;
		a1y = 0, a1x = r.s.v8() ? 7 : 12, a1w = {
			vv: [0, 0, 0],
			a21: [0, 0, 0],
			lk: [220, 180, 180],
			r7: [0, 0, 0],
			ep: [0, 0, 0]
		}, a1s = [], this.resize(), a8.gr && this.wG(0, 18), bO.se.sf[bO.eA].name.length && a2m(L(65, [bO.se.sf[bO.eA].name])), a2m(L(66, [bO.ef - 2 + "x" + (bO.eg - 2)])), a2m(L(67, [aj.a2n])), aj.a2n !== aj.a2o && a2m(L(68, [aj.a2o + " (" +
			b7.wu.a09(100 * aj.a2o / aj.a2n, 1) + ")"
		])), 0 < aj.a2p && a2m(L(41, [aj.a2p + " (" + b7.wu.a09(100 * aj.a2p / aj.a2n, 1) + ")"])), 0 < aj.a2q && a2m(L(69, [aj.a2q + " (" + b7.wu.a09(100 * aj.a2q / aj.a2n, 1) + ")"])), 10 === a8.jv && a24(120, L(70), 6, 0, a2S(235, 255,
			120), u.mS, -1, !1), 0 !== (self = this).a20.length && (a24(200, self.a20, 0, 0, u.mV, u.mS, -1, !1), self.a20 = "")
	}, this.resize = function() {
		var a25, a6;
		if (j5 = (j5 = Math.floor((r.s.v8() ? .031 : .0249) * au.pC)) < 10 ? 10 : j5, this.fontSize = Math.floor(2 * j5 / 3), this.a1e = b7.pA.qR(1, this.fontSize), a1t = bY.gap, a1u = Math.floor(j5 / 5), 0 < a1s.length)
			for (a25 = a1s, a1s = [], a6 = a25.length - 1; 0 <= a6; a6--) a24(a25[a6].e2, a25[a6].or, a25[a6].id, a25[a6].player, a25[a6].a26, a25[a6].a27, a25[a6].sz, a25[a6].a28, a25[a6].a29, a25[a6].a2A);
		this.a2B()
	}, this.a2B = function() {
		a1z = document.createElement("canvas");
		var or = L(20),
			uQ = (a1v = aL.measureText(or, this.a1e) + 5 * a1u, a1z.height = j5, a1z.width = a1v, a1z.getContext("2d", {
				alpha: !0
			}));
		uQ.font = this.a1e, b7.pA.textBaseline(uQ, 1), b7.pA.textAlign(uQ, 1), uQ.clearRect(0, 0, a1v, j5), uQ.fillStyle = u.v, uQ.fillRect(0, 0, a1v, j5), uQ.fillStyle = u.mV, uQ.fillText(or, Math.floor(a1v / 2), Math.floor(j5 / 2))
	}, this.a2C = function() {
		var eU;
		return ar.ui ? ar.a0 : 0 === (eU = a1s.length) ? 0 : 1 === eU ? a1s[0].a2D : a2E(a1s[0].a2D, a1s[1].a2D)
	}, this.a2F = function() {
		var eU = a1s.length;
		return ar.ui ? eU ? a2E(ar.a0, a1s[0].a2D) : ar.a0 : 0 === eU ? 0 : 1 === eU ? a1s[0].a2D : 2 === eU ? a2E(a1s[0].a2D, a1s[1].a2D) : a2E(a2E(a1s[0].a2D, a1s[1].a2D), a1s[2].a2D)
	}, this.gj = function(eb, ed) {
		for (var lu, a2H, a2I = uM(), a6 = a1s.length - 1; 0 <= a6; a6--)
			if ((a2H = a2I - (a6 + 1) * j5) <= ed && ed < a2H + j5) return 50 === a1s[a6].id ? eb >= au.a0 - a1v - a1t - a1s[a6].a0 && (eb >= au.a0 - a1v - a1t ? b5.fr.o1(a1s[a6].player) : aC.lo(a1s[a6].player, 800, !1, 0), !0) : eb >= au.a0 -
				a1s[a6].a0 - a1t && (736 === a1s[a6].id ? (a2H = a1s[a6].or.split(" "), window.open(a2H[a2H.length - 1], "_blank")) : a1s[a6].a28 && (a1s[a6].a2A && a1s[a6].a2A.en ? (a2H = a1s[a6].a2A.eG, lu = bI.ec(a2H) - 10, a2H = bI.ee(
					a2H) - 10, aC.ln(lu, a2H, 19 + lu, 19 + a2H)) : a1s[a6].a2A && a1s[a6].a2A.eo ? aC.lp(a1s[a6].player, a1s[a6].a2A.lq) : (aC.lo(a1s[a6].player, 800, !1, 0), 0 <= a1s[a6].sz && (lu = a1s[a6].sz, a1s[a6].sz = a1s[a6]
					.player, a1s[a6].player = lu))), !0);
		return !1
	}, this.wS = function(e3, or, id, g3, a26, a27, sz, a28, a29, a2A) {
		a24(e3, or, id, g3, a26, a27, sz, a28, a29, a2A)
	}, this.a2K = function(k) {
		a24(300, k, 252, 0, u.mV, u.mS, -1, !1)
	}, this.a0P = function(id) {
		for (var a6 = a1s.length - 1; 0 <= a6; a6--) a1s[a6].id === id && (a1s[a6].e2 = 1)
	}, this.wG = function(player, id) {
		0 === id ? (aL.ig(player, 0), a2M(423, 0), a24(160, L(21, [ab.a2N[player]]), 423, player, "rgb(10,220,10)", u.mS, -1, !1)) : 1 === id ? (a2O(50, a8.eR), aL.ig(player, 1), a24(360, L(22, [ab.a2N[player]]), 0, player, u.n5, u.mS, -1, !0),
			aC.lo(player, 2700, !1, 0)) : 2 === id ? (aL.ig(player, 2), a24(0, L(23), 0, player, "rgb(10,255,255)", u.mS, -1, !0), aC.lo(player, 2700, !1, 0)) : 3 === id ? (aL.ig(player, 2), a24(0, L(24, [ab.a2N[player]]), 0, player, u.mV, u
			.mS, -1, !0), aC.lo(player, 2700, !1, 0)) : 4 === id ? this.a2P(1, player, player) : 5 === id ? 2 !== ab.zX[player] && aX.vx(a8.eE) && (function(id, lN) {
			var a6, a2b = 0,
				eU = a1s.length;
			for (a6 = 0; a6 < eU; a6++)
				if (a1s[a6].id === id && lN <= ++a2b) return a1s.splice(a6, 1)
		}(1, 5), aa.a2R(player) ? a24(180, L(25, [ab.a2N[player]]), 1, player, a2S(255, 200, 180), u.mS, -1, !0) : (a2M(573, 0), a24(180, L(26, [ab.a2N[player]]), 573, player, u.n5, u.mS, -1, !0))) : 18 === id ? a24(255, L(27), 18, 0, u.mV, u
			.mS, -1, !1) : 21 === id ? a24(220, L(28), id, 0, u.mV, u.mS, -1, !1) : 22 === id ? this.a2P(2, player, player) : 59 === id && a24(0, L(29), id, 0, u.nH, u.mS, 0, !1)
	}, this.xO = function(k) {
		a24(200, L(30, [k]), 94, 0, u.mV, u.n1, -1, !1)
	}, this.wN = function(a2T) {
		if (ab.eE === a2T && !ab.a2N)
			__fx.wins.count++, window.localStorage.setItem("fx_winCount", __fx.wins.count),
			a24(0, "Your Win Count is now " + __fx.wins.count, 3, a2T, u.mV, u.mS, -1, !0);
		ab.gJ[a2T] && (aL.ig(a2T, 2), a8.jb < 100 ? a24(0, L(24, [ab.a2N[a2T]]), 3, a2T, u.mV, u.mS, -1, !0) : a24(0, L(31, [ab.a2N[a2T]]), 3, a2T, u.mV, u.mS, -1, !0))
	}, this.a1X = function(e8) {
		var a2V, or, a2U = "(" + bI.ec(e8 >> 2) + ", " + bI.ee(e8 >> 2) + ")",
			a28 = !1,
			player = 0;
		aX.eP(e8) ? aX.eL(e8) ? a2U = L(32, [a2U]) : (player = aX.eM(e8), or = L(33, [b7.uQ.zD(ab.ww[player], b7.pA.qR(0, 10), 150)]) + "   ", or = (or += L(34, [b7.wu.a04(ab.gX[player])]) + "   ") + L(35, [b7.wu.a04(ab.gJ[player])]) + "   ", a8
				.ib && (a2V = bc.wQ[bc.k1[bc.eS[player]]], or += L(36) + ": " + a2V + "   "), b7.fr.iz(player) && (or += L(37) + ": " + a9.jp[a9.ik[player]] + "   "), a2U = or = (or += L(38, [player]) + "   ") + L(39, [a2U]), a28 = !0) : a2U = aX
			.eZ(e8) ? L(40, [a2U]) + "   #" + aX.eC(e8) : L(41, [a2U]), bb.dZ = !0, a2M(55, 0), a24(220, a2U, 55, player, u.mV, u.mS, -1, a28)
	}, this.a1Z = function(a2W) {
		var kL = bJ.l6,
			player = kL.a2X[a2W] >> 3,
			or = (bb.dZ = !0, a2M(55, 0), L(42, [ab.a2N[player]]) + "   ");
		a24(220, or += L(34, [kL.a2Y[a2W]]), 55, player, u.mV, u.mS, -1, !0)
	}, this.nj = function(nW, a2Z, nk) {
		nW === a8.eE ? a24(175, " " + L(43, [ab.a2N[a2Z]]) + ": ", 1001, a2Z, a2S(200, 255, 210), u.mS, -1, !0, nk) : this.a2a(nW, nk)
	}, this.a2a = function(nW, nk) {
		a2M(1e3, 0), a24(175, ab.a2N[nW] + ": ", 1e3, nW, u.mV, "rgba(5,60,25,0.9)", -1, !0, nk)
	}, this.wT = function() {
		var k;
		a8.w9 ? (k = L(44), aL.wR(L(45), 2, 1, 12), a24(0, k, 40, 0, "rgb(10,220,10)", u.mS, -1, !1)) : (k = L(46), aL.wR(L(47), 2, 0, 16), a24(0, k, 41, 0, u.mV, u.mS, -1, !1))
	}, this.uX = function() {
		var ww = ab.ww,
			eX = a8.data;
		a24(300, ww[0] + " [" + a8.wM.uc(eX.elo[0]) + "] vs " + ww[1] + " [" + a8.wM.uc(eX.elo[1]) + "]", 65, 0, u.mM, "rgba(100,255,255,0.75)", -1, !1)
	}, this.a2c = function(k) {
		a24(200, k, 0, 0, "rgb(40,255,200)", "rgba(10,60,40,0.9)", -1, !1)
	}, this.a2d = function(a2e) {
		a24(0, L(a2e ? 48 : 49), 247, 0, u.nG, u.mS, -1, !1)
	}, this.ue = function(ub, ud, a2f) {
		var eX = a8.data,
			ww = ab.ww;
		a24(0, ww[0] + ": " + a8.wM.uc(eX.elo[0]) + " -> " + ub, 66, 0, u.mV, a2f[0], -1, !1), a24(0, ww[1] + ": " + a8.wM.uc(eX.elo[1]) + " -> " + ud, 66, 1, u.mV, a2f[1], -1, !1)
	}, this.o2 = function(player, id) {
		0 === id ? a2O(50, player) ? (a24(128, L(50, [ab.a2N[player]]), 52, player, a2S(180, 255, 180), u.mS, -1, !0), aa.oj(player, 2, 255)) : a24(384, L(51, [ab.a2N[player]]), 51, player, a2S(210, 210, 255), u.mS, -1, !0) : a2O(51, player) ? (
			a24(128, L(52, [ab.a2N[player]]), 52, player, u.mV, "rgba(60,120,10,0.9)", -1, !0), aa.oj(player, 2, 255)) : (a24(384, L(53, [ab.a2N[player]]), 50, player, u.mV, "rgba(90,90,90,0.9)", -1, !0), aa.oj(player, 2, 96))
	}, this.o6 = function(vv, target) {
		var color = a2S(210, 255, 210);
		1 < vv.length ? a24(230, L(54, [vv.length, ab.a2N[target]]), 66, target, color, u.mS, -1, !0) : a24(230, L(55, [ab.a2N[vv[0]], ab.a2N[target]]), 66, vv[0], color, u.mS, target, !0)
	}, this.a2g = function(player, target) {
		a24(230, L(56, [ab.a2N[player], ab.a2N[target]]), 66, player, u.mV, "rgba(75,65,5,0.9)", target, !0)
	}, this.a1Q = function(id, fy) {
		a2M(id, fy)
	}, this.wB = function(id, player) {
		a2O(id, void 0 === player ? a8.eR : player)
	}, this.a2h = function(id) {
		for (var a6 = a1s.length - 1; 0 <= a6; a6--)
			if (a1s[a6].id === id) return a1s[a6];
		return null
	}, this.nx = function(a2i, a2j, player) {
		2 !== ab.zX[a8.eE] && (a24(200, 1 === a2i ? L(57, [ab.a2N[player]]) : L(58, [a2i, ab.a2N[player]]), 30, player, "rgb(190,255,190)", u.mS, -1, !0), a2j) && a24(30, 1 === a2j ? L(59) : L(60, [a2j]), 30, 0, u.mV, u.mS, -1, !1)
	}, this.a2l = function(a2i, player) {
		2 !== ab.zX[a8.eE] && (a2M(31, 0), 2 === ab.zX[player] || player >= a8.jb ? a24(150, 1 === a2i ? L(61, [ab.a2N[player]]) : L(62, [ab.a2N[player], a2i]), 31, player, u.mM, "rgba(205,205,205,0.9)", -1, !0) : a24(150, 1 === a2i ? L(63, [ab
			.a2N[player]
		]) : L(64, [ab.a2N[player], a2i]), 31, player, u.mM, "rgba(205,255,205,0.9)", -1, !0))
	}, this.wA = function(bl) {
		for (var ep = bb.jY(), a6 = 2; 0 <= a6; a6--) 0 < a1w.r7[a6] && (bl || a1w.ep[a6] < ep - 220) && this.a2r(a6)
	}, this.a2r = function(id) {
		var or, eU = a1w.r7[id],
			player = a1w.vv[id];
		a1w.r7[id] = 0, 1 === eU ? (0 === id ? or = L(71, [ab.a2N[player], ab.a2N[a1w.a21[0]]]) : 1 === id ? or = L(72, [ab.a2N[player]]) : 2 === id ? or = L(73, [ab.a2N[player]]) : 3 === id && (or = L(74, [ab.a2N[player]])), a2M(7, 0), a24(a1w
			.lk[id], or, 7, a1w.a21[id], u.mV, u.mS, -1, !0)) : (or = L(0 === id ? 75 : 1 === id ? 76 : 77, [eU]), a2M(7, 0), a24(a1w.lk[id], or, 7, player, u.mV, u.mS, -1, !1))
	}, this.a2P = function(id, gv, sz) {
		var ep = bb.jY(),
			eU = a1w.r7[id] + 1;
		a1w.r7[id]++, a1w.vv[id] = gv, a1w.a21[id] = sz, 1 === eU && (a1w.ep[id] = ep), (1 === eU && (a8.w7 < 32 || 2 === a8.w4) || 1 < eU && (a1w.ep[id] < ep - 140 || 2 === a8.w4)) && this.a2r(id)
	}, this.iQ = function() {
		for (var hS = (hS = a1s.length - a1x) <= 1 ? 1 : hS * hS, a6 = a1s.length - 1; 0 <= a6; a6--) 0 < a1s[a6].e2 && (a1s[a6].e2 -= hS, a1s[a6].e2 <= 0) && (bb.dZ = !0, a1s.splice(a6, 1));
		! function() {
			var fy, a6;
			if (128 !== a1y && !(++a1y < 128))
				for (fy = 5, a6 = ag.jc - 1; 0 <= a6; a6--) 1 === ab.zX[ag.je[a6]] && 0 < fy-- && a24(240, L(74, [ab.a2N[ag.je[a6]]]), 1, ag.je[a6], u.mM, "rgba(255,255,255,0.75)", -1, !0)
		}(), this.wA(!1)
	}, this.r9 = function() {
		for (var tQ, ed = uM(), a6 = a1s.length - 1; 0 <= a6; a6--) tQ = ed - (a6 + 1) * j5, 50 === a1s[a6].id ? (rA.drawImage(a1s[a6].canvas, au.a0 - a1s[a6].a0 - a1v - a1t, tQ), rA.drawImage(a1z, au.a0 - a1v - a1t, tQ)) : rA.drawImage(a1s[a6]
			.canvas, au.a0 - a1s[a6].a0 - a1t, tQ)
	}
}

function c6() {
	var a2t, a2u, a2v, a0, j5, font, or;

	function a2z(a30) {
		return a30 < 10 ? "0" + a30 : String(a30)
	}
	this.dR = function() {
		or = L(78)
	}, this.resize = function() {
		a0 = Math.floor((r.s.v8() ? .53 : .36) * au.pC), j5 = Math.floor(.065 * a0), font = b7.pA.qR(1, Math.floor(.9 * j5)), a2v--, this.setTime()
	}, this.iQ = function() {
		this.setTime() && (bb.dZ = !0)
	}, this.setTime = function() {
		var e3 = new Date,
			a2x = e3.getUTCMinutes(),
			e3 = e3.getUTCSeconds();
		return a2u = 3600 - 60 * a2x - e3, a2u %= 900, a2t = or + a2z(Math.floor(a2u / 60)) + ":" + a2z(a2u % 60), a2v !== (a2v = 60 * a2x + e3) && (a0 = aL.measureText(a2t, font), a0 += Math.floor(.4 * j5), !0)
	}, this.r9 = function() {
		rA.lineWidth = 1 + Math.floor(j5 / 15), 7 === aV.xK() && ap.a31() + 2 * bY.gap > .5 * (au.j5 - a0) ? rA.translate(au.a0 - j5, Math.floor(ap.a31() + 2 * bY.gap + a0)) : rA.translate(au.a0 - j5, Math.floor(.5 * (au.j5 + a0))), rA.rotate(-
			Math.PI / 2), rA.fillStyle = u.mV, rA.fillRect(0, 0, a0, j5), rA.strokeStyle = u.mM, rA.strokeRect(0, 0, a0, j5 + 10), rA.fillStyle = u.mM, rA.font = font, b7.pA.textBaseline(rA, 1), b7.pA.textAlign(rA, 1), rA.fillText(a2t, Math
			.floor(a0 / 2), Math.floor(.59 * j5)), rA.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function c7() {
	var a1s, a32, a1e, j5, a33;

	function a35(a6) {
		var a37 = !0,
			hN = u.mV,
			a0 = (a1s[a6].ij === a8.eR ? a1s[a6].uQ.fillStyle = u.mf : (aX.a38(a1s[a6].ij), a1s[a6].uQ.fillStyle = b7.color.mP(bK.f5[0], bK.f5[1], bK.f5[2], .87), 400 < b7.pK.yh(bK.f5, 0, 2) && (a37 = !1, hN = u.mM)), a1s[a6].canvas.width),
			qT = (a1s[a6].uQ.clearRect(0, 0, a0, j5), a1s[a6].uQ.fillRect(0, 0, a0, j5), a1s[a6].uQ.fillStyle = hN, ! function(uQ, a0, j5) {
				uQ.fillRect(0, 0, a0, 1), uQ.fillRect(0, j5 - 1, a0, 1), uQ.fillRect(0, 0, 1, j5), uQ.fillRect(a0 - 1, 0, 1, j5)
			}(a1s[a6].uQ, a0, j5), a32 + 2 * j5 < a0 && (a1s[a6].uQ.fillRect(a0 - a32 - j5, 0, 1, j5), a1s[a6].uQ.fillText(ab.a2N[a1s[a6].ij], Math.floor((a0 - a32) / 2), Math.floor(.57 * j5))), 0 !== a1s[a6].id ? 0 : j5);
		a1s[a6].uQ.fillText(b7.wu.a04(a1s[a6].ik), Math.floor(a0 - a32 / 2 - qT), Math.floor(.57 * j5)),
			function(a6, a0, qT, a37) {
				a1s[a6].uQ.fillStyle = a37 ? u.mX : u.mT;
				a37 = Math.floor(a32 * a1s[a6].ik / a1s[a6].a3E);
				a1s[a6].uQ.fillRect(Math.floor(a0 - a32 - qT), j5 - a33, a37, a33)
			}(a6, a0, qT, a37), 0 === a1s[a6].id ? (a3B(a6, a0, a37, hN), function(a6, a0, a37) {
				a1s[a6].uQ.strokeStyle = a37 ? u.mk : u.mt, a1s[a6].uQ.fillRect(j5, 0, 1, j5);
				a37 = a0 - j5;
				a1s[a6].uQ.beginPath(), a1s[a6].uQ.moveTo(Math.floor(.3 * j5 + a37), Math.floor(j5 / 2)), a1s[a6].uQ.lineTo(Math.floor(j5 - .3 * j5 + 0 + a37), Math.floor(j5 / 2)), a1s[a6].uQ.stroke(), a1s[a6].uQ.beginPath(), a1s[a6].uQ.moveTo(
					Math.floor(j5 / 2 + a37), Math.floor(.3 * j5)), a1s[a6].uQ.lineTo(Math.floor(j5 / 2 + a37), Math.floor(j5 - .3 * j5 + 0)), a1s[a6].uQ.stroke()
			}(a6, a0, a37)) : a3B(a6, 2 * j5, a37, hN)
	}

	function a3B(a6, a0, a37, hN) {
		a1s[a6].uQ.strokeStyle = a1s[a6].a3F ? u.md : a37 ? u.mx : u.my, a1s[a6].uQ.fillStyle = hN, a1s[a6].uQ.fillRect(a0 - j5, 0, 1, j5), a1s[a6].uQ.lineWidth = Math.max(Math.floor(j5 / 12), 3), a1s[a6].uQ.lineCap = "round";
		a37 = .35;
		a0 = j5 + 1, a1s[a6].uQ.beginPath(), a1s[a6].uQ.moveTo(Math.floor(a0 - a37 * j5 + 0), Math.floor(a37 * j5)), a1s[a6].uQ.lineTo(Math.floor(a0 - j5 + a37 * j5), Math.floor(j5 - a37 * j5 + 0)), a1s[a6].uQ.stroke(), a1s[a6].uQ.beginPath(), a1s[
			a6].uQ.moveTo(Math.floor(a0 - j5 + a37 * j5), Math.floor(a37 * j5)), a1s[a6].uQ.lineTo(Math.floor(a0 - a37 * j5 + 0), Math.floor(j5 - a37 * j5 + 0)), a1s[a6].uQ.stroke()
	}

	function a3P(eU) {
		for (var ik, a6 = eU - 1; 0 <= a6; a6--) ik = aY.fi(a8.eE, a6), a1s[a6].ik !== ik && (a1s[a6].ik = ik, a1s[a6].a3E = ik > a1s[a6].a3E ? ik : a1s[a6].a3E, a1s[a6].a36 = !0)
	}

	function a34(a3R) {
		a3R.canvas = document.createElement("canvas"), bO.sk.font = a1e;
		var a0 = a32;
		a3R.ij < a8.eR && 0 === a3R.id && (a0 += Math.floor(bO.sk.measureText(ab.a2N[a3R.ij] + "000").width)), a0 += j5, 0 === a3R.id && (a0 += j5), a3R.canvas.width = a0, a3R.canvas.height = j5, a3R.uQ = a3R.canvas.getContext("2d", {
			alpha: !0
		}), a3R.uQ.font = a1e, b7.pA.textBaseline(a3R.uQ, 1), b7.pA.textAlign(a3R.uQ, 1)
	}

	function a3L(a6) {
		return aP.a3T() ? au.a0 - a1s[a6].canvas.width - bY.gap : aP.eb
	}

	function a3M(a6) {
		return Math.floor(2 * bY.gap + (aP.a3T() ? aR.j5 + bY.gap : 0) + aP.j5 + a6 * (1.3 * j5))
	}
	this.dR = function() {
		a1s = [], this.resize()
	}, this.resize = function() {
		a1e = aI.a1e, j5 = aI.fontSize + 5, j5 = Math.floor(1.25 * j5), r.s.v8() && (j5 = Math.floor(1.25 * j5)), a33 = Math.floor(.15 * j5), bO.sk.font = a1e, a32 = Math.floor(bO.sk.measureText("02 000 000 0000").width);
		for (var a6 = a1s.length - 1; 0 <= a6; a6--) a34(a1s[a6]), a35(a6)
	}, this.lE = function() {
		for (var a6 = a1s.length - 1; 0 <= a6; a6--) a1s[a6].a36 && (a1s[a6].a36 = !1, a35(a6))
	}, this.gj = function(kg, ed) {
		if (2 !== a8.w4 && 0 !== ab.lS[a8.eE] && !a8.gf && aX.vx(a8.eE))
			for (var a3G, a3H, a3I, a3J = r.s.v8() ? j5 : 0, a3K = r.s.v8() ? Math.floor(.15 * j5) : 0, a6 = a1s.length - 1; 0 <= a6; a6--)
				if (a3G = a3L(a6), a3H = a3M(a6), a3I = a1s[a6].canvas.width, a3H - a3K <= ed && ed <= a3H + j5 + a3K) {
					if (a3G - a3J <= kg && kg <= a3G + j5 + a3J) return a1s[a6].a3F || (a1s[a6].a36 = !0, a1s[a6].a3F = !0, 0 === a1s[a6].id && b5.gs.nh(a1s[a6].ij)), !0;
					if (0 === a1s[a6].id && a3G + a3I - j5 - a3J <= kg && kg <= a3G + a3I + a3J) return b5.gs.h3(aM.gx(), a1s[a6].ij), !0
				} return !1
	}, this.iQ = function() {
		var eU;
		0 !== ab.lS[a8.eE] && (aX.vx(a8.eE) || a8.gf) && (function(eU) {
			if (a1s.length !== eU) return 1;
			for (var a6 = eU - 1; 0 <= a6; a6--)
				if (a1s[a6].id !== aY.fc(a8.eE, a6) || a1s[a6].ij !== aY.fh(a8.eE, a6)) return 1;
			return
		}(eU = aY.fb(a8.eE)) && function(eU) {
			var a6, id, ij, eo, ik, a25 = [];
			loop: for (a6 = 0; a6 < eU; a6++) {
				for (id = aY.fc(a8.eE, a6), ij = aY.fh(a8.eE, a6), eo = 0; eo < a1s.length; eo++)
					if (a1s[eo].id === id && a1s[eo].ij === ij) {
						a25.push(a1s.splice(eo, 1)[0]);
						continue loop
					} ik = aY.fi(a8.eE, a6), a34(ik = {
					ij: ij,
					ik: ik,
					a3E: ik,
					id: id,
					a36: !0,
					a3F: !1,
					canvas: null,
					uQ: null
				}), a25.push(ik)
			}
			a1s = a25
		}(eU), a3P(eU))
	}, this.a3S = function(g3) {
		for (var eU = Math.min(a1s.length, aY.fb(a8.eE)), a6 = 0; a6 < eU; a6++)
			if (a1s[a6].ij === g3) return void(a1s = [])
	}, this.r9 = function() {
		if (0 !== ab.lS[a8.eE] && (aX.vx(a8.eE) || a8.gf))
			for (var a6 = a1s.length - 1; 0 <= a6; a6--) rA.drawImage(a1s[a6].canvas, a3L(a6), a3M(a6))
	}
}

function c8() {
	var a1s, jj, a3U, a3V, j5, a1e, fontSize, a3W, a3X, a3Y, a3Z, canvas, uQ, lf, a3a;

	function rK(a6) {
		return L(0 === a6 ? 79 : 1 === a6 ? 80 : 2 === a6 ? 81 : 82)
	}

	function a3h() {
		rA.drawImage(canvas, bY.gap + (a8.ib ? bY.gap + bd.a3i() : 0), a3j + 2 * bY.gap)
	}

	function a3b() {
		canvas.width = a1s[0].width + a3Y, canvas.height = j5 + a3Y, (uQ = canvas.getContext("2d", {
				alpha: !0
			})).clearRect(0, 0, a1s[0].width + a3Y, j5 + a3Y), uQ.translate(Math.floor(a3Y / 2), Math.floor(a3Y / 2)), uQ.lineWidth = a3Y, uQ.fillStyle = 1 === a1s[0].a3g ? u.ma : u.mS, a3k(), uQ.fill(), uQ.strokeStyle = 1 === a1s[0].a3g ? u.mM : u
			.mV, a3k(), uQ.stroke(), b7.pA.textAlign(uQ, 1), b7.pA.textBaseline(uQ, 1), uQ.fillStyle = 1 === a1s[0].a3g ? u.mM : u.mV, uQ.font = a1e[0], uQ.fillText(rK(a1s[0].a3f), Math.floor(a1s[0].width / 2), Math.floor(.72 * a3W[0] * j5)), uQ
			.font = a1e[1], uQ.fillText(a1s[0].or, Math.floor(a1s[0].width / 2), Math.floor((a3W[0] + .48 * a3W[1]) * j5))
	}

	function a3k() {
		uQ.beginPath(), uQ.moveTo(a3Z, 0), uQ.lineTo(a1s[0].width - a3Z, 0), uQ.lineTo(a1s[0].width, a3Z), uQ.lineTo(a1s[0].width, j5 - a3Z), uQ.lineTo(a1s[0].width - a3Z, j5), uQ.lineTo(a3Z, j5), uQ.lineTo(0, j5 - a3Z), uQ.lineTo(0, a3Z), uQ
			.closePath()
	}
	this.dR = function() {
		jj = 4, a3U = a3V = lf = 0, a1s = [], a1e = new Array(2), fontSize = new Array(2), (a3W = new Array(2))[0] = .3, a3W[1] = .7, a3X = new Array(4), canvas = document.createElement("canvas"), a3a = bb.e2 + 2e3, this.resize()
	}, this.resize = function() {
		var a6, a0;
		for (j5 = Math.floor((r.s.v8() ? .0725 : .058) * au.pC), fontSize[0] = Math.floor(.85 * a3W[0] * j5), fontSize[1] = Math.floor(.85 * a3W[1] * j5), a1e[0] = b7.pA.qR(1, fontSize[0]), a1e[1] = b7.pA.qR(1, fontSize[1]), a6 = a3X.length -
			1; 0 <= a6; a6--) a3X[a6] = this.measureText(rK(a6) + "000", a1e[0]);
		if (a3Y = Math.floor(1 + .05 * j5), a3Z = Math.floor(.2 * j5), 0 < a1s.length) {
			for (a6 = a1s.length - 1; 0 <= a6; a6--) a0 = this.measureText(a1s[a6].or + "00", a1e[1]), a1s[a6].width = a0 < a3X[a6] ? a3X[a6] : a0;
			a3b()
		}
	}, this.iQ = function() {
		0 !== jj && (4 === jj ? bb.e2 > a3a && (jj = 0, 1 === a8.w4) && aL.wR(bO.se.sf[bO.eA].name, 3, 1, 9) : (1 === jj ? (0 === a3U && (a3b(), a3U = 1e-4), 1 <= (a3U += .002 * (bb.e2 - lf)) && (a3V = 0, jj = 2, a3U = 1), bb.dZ = !0) : 2 ===
			jj ? ((a3V += (bb.e2 - lf) / 1e3) > a1s[0].lk || 1 < a3V && 1 < a1s.length) && (jj = 3) : 3 === jj && ((a3U -= .002 * (bb.e2 - lf)) <= 0 && (a3U = 0, a1s.shift(), jj = 0 < a1s.length ? 1 : 0), bb.dZ = !0), lf = bb.e2))
	}, this.measureText = function(or, a1e) {
		return rA.font = a1e, Math.floor(rA.measureText(or).width)
	}, this.ig = function(a3e, a6) {
		this.wR(ab.a2N[a3e], a6, 1, 0 === a6 ? 3 : 7)
	}, this.wR = function(or, a3f, a3g, lk) {
		var a0;
		or.length && (a0 = (a0 = this.measureText(or + "00", a1e[1])) < a3X[a3f] ? a3X[a3f] : a0, a1s.push({
			or: or,
			width: a0,
			a3f: a3f,
			a3g: a3g,
			lk: lk
		}), 0 === jj) && (a3U = 0, jj = 1, lf = bb.e2)
	}, this.r9 = function() {
		0 !== jj && 0 !== a3U && (a3U < 1 ? (rA.globalAlpha = a3U, a3h(), rA.globalAlpha = 1) : a3h())
	}
}

function ci() {
	var j5, canvas, uQ, a3l, a3m, a3n, a3o, a36, a3p, a3q, a3r, a3s, a2e = !1,
		z1 = (this.ui = !1, this.a0 = 0, new Array(2));

	function lF() {
		var a0 = ar.a0,
			kL = (a36 = !1, uP(uQ, a0, j5), Math.floor(a0 / 2));
		1 === a3l ? (uQ.fillStyle = u.mm, uQ.fillRect(kL, 0, kL, j5)) : -1 === a3l && (uQ.fillStyle = u.mz, uQ.fillRect(0, 0, kL, j5)), uR(uQ, a0, j5, 2);
		var kL = (kL = Math.floor(.25 * j5)) < 2 ? 2 : kL,
			a2n = (uQ.fillStyle = u.mb, Math.floor((j5 - 4) * a3m[1] / a3n[1]));
		0 < a2n && uQ.fillRect(2, j5 - 2 - a2n, kL, a2n), 0 < (a2n = Math.floor((j5 - 4) * a3m[0] / a3n[0])) && uQ.fillRect(a0 - 2 - kL, j5 - 2 - a2n, kL, a2n);
		kL = (kL = Math.floor(j5 / 8)) < 2 ? 2 : kL, uT(uQ, Math.floor(.4 * j5), 0, j5, kL, .5, !1), uT(uQ, Math.floor(a0 - 1.4 * j5), 0, j5, kL, .5, !0), a2n = 1.1 * j5 / z1[0].width;
		uQ.imageSmoothingEnabled = !0, uQ.setTransform(a2n, 0, 0, a2n, (a0 - a2n * z1[0].width) / 2, -.05 * j5), uQ.drawImage(z1[+a2e], 0, 0), uQ.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a3t() {
		a3r = bb.jY(), a36 = !0, a3p = a3l = 0, a3o = [], ar.ui = !1, aI.wB(247), a3m[0] = a3m[1] = 0, aI.a0P(673)
	}

	function uM() {
		return aM.a2G(aI.a2C()) ? aM.ed - j5 - bY.gap : b8.a2G(aI.a2F()) ? b8.uM() - j5 - bY.gap : au.j5 - j5 - bg.a11() * bY.gap
	}
	this.dS = function() {
		for (var a6 = 0; a6 < 2; a6++) z1[a6] = b7.canvas.uw(aW.get(3), 8 - a6, u.nO), z1[a6] = b7.canvas.z3(z1[a6])
	}, this.dR = function() {
		a3r = -140, a3q = 0, a3s = -1, this.ui = !1, a36 = a2e = !1, a3m = [a3l = a3p = 0, 0], a3n = [1, 1], a3o = [], this.resize()
	}, this.resize = function() {
		j5 = aM.j5, this.a0 = 4 * j5, (canvas = document.createElement("canvas")).width = this.a0, canvas.height = j5, uQ = canvas.getContext("2d", {
			alpha: !0
		}), lF()
	}, this.lE = function() {
		a36 && lF()
	}, this.gj = function(eb, ed) {
		var lv;
		return !!this.ui && !(eb < au.a0 - this.a0 - bY.gap || ed < (lv = uM()) || lv + j5 < ed || (a8.gf || b5.gs.nn(eb > au.a0 - bY.gap - this.a0 / 2 ? 1 : 0), 0))
	}, this.iQ = function() {
		if (0 < a3q) 0 === --a3q && a3t();
		else if (this.ui) 180 == --a3p && 3 * a3m[0] < a3n[0] ? a3t() : a3m[0] >= a3n[0] ? a2e ? bN.vi.vz() : bN.vi.w3() : a3m[1] >= a3n[1] ? a3q = 4 : a3p <= 0 && a3t();
		else if (function() {
				if (0 <= a3s) return 1;
				return
			}()) {
			a2e = ac.a3w(), aI.wS(250, L(83, [ab.a2N[a3s]]), 673, a3s, u.mV, u.mS, -1, !0), a3s = -1, aI.a0P(257), aI.a2d(a2e), this.ui = !0, a36 = !0, a3p = 360;
			for (var ex, e3 = 0, a6 = ag.jc - 1; 0 <= a6; a6--) aX.vx(ag.je[a6]) && (e3 += ab.gJ[ag.je[a6]]);
			a2e ? a3n[0] = Math.max(bH.ew(3 * e3, 4), 1) : a8.ib ? 9 === a8.jv && 8 === bc.k1[bd.kp()] ? a3n[0] = Math.max(e3, 1) : (ex = bH.ew(100 * bd.we(), a8.jL), ex = bH.oi(200 - 2 * ex, 50, 100), ex = bH.ew(ex * e3, 100), a3n[0] = Math.max(
				ex, 1)) : a3n[0] = Math.max(bH.ew(3 * e3, 5), 1), a3n[1] = Math.max(e3 - a3n[0], 1)
		}
	}, this.w5 = function() {
		this.ui && a3m[0] < a3n[0] && a3t()
	}, this.ok = function(player, a3z) {
		var a6;
		if (this.ui) {
			for (a6 = a3o.length - 1; 0 <= a6; a6--)
				if (a3o[a6] === player) return;
			var a40 = L(a3z ? 84 : 85, [ab.a2N[player]]);
			aI.wS(450, a40, 257, player, a3z ? u.mk : u.mw, u.mS, -1, !0), a3o.push(player), a36 = !0, a40 = a8.jx ? a3n[0] : ab.gJ[player], a3z ? a3m[0] += a40 : a3m[1] += a40, player === a8.eE && (a3l = a3z ? 1 : -1)
		}
	}, this.r9 = function() {
		var ed;
		this.ui && (ed = uM(), rA.drawImage(canvas, au.a0 - this.a0 - bY.gap, ed))
	}, this.ol = function(player) {
		if (!a8.jx) {
			if (bb.jY() < a3r + 140) return !1;
			if (bb.jY() < 535) return !1
		}
		return 0 === a3p && !!b7.fr.gh(1) && !(!b7.fr.gi(player) || 10 <= jM[player] && !b7.fr.zq(player, 9))
	}, this.ns = function(player) {
		a3s = player
	}
}

function c9() {
	var a0, eb, a41, canvas, uQ, ui, hs, a0G, a1e, a36, a42 = 11 / 12;

	function a44() {
		var a3D = Math.floor(hs * (a0 - 2 * a41)),
			a47 = 1 + Math.floor(.0625 * aM.j5),
			a48 = 1 + Math.floor(.3 * aM.j5),
			a49 = Math.floor(.55 * aM.j5);
		uQ.clearRect(0, 0, a0, aM.j5), uQ.fillStyle = u.mR, uQ.fillRect(0, 0, a41, aM.j5), uQ.fillRect(a41 + a3D, 0, a0 - a41 - a3D, aM.j5), uQ.fillStyle = hs < 1 / 3 ? "rgba(" + Math.floor(3 * hs * 130) + ",130,0,0.85)" : hs < 2 / 3 ? "rgba(130," +
			(130 - Math.floor(3 * (hs - 1 / 3) * 130)) + ",0,0.85)" : "rgba(130,0," + Math.floor(3 * (hs - 2 / 3) * 130) + ",0.85)", uQ.fillRect(a41, 0, a3D, aM.j5), uQ.fillStyle = u.mV, uQ.fillRect(0, 0, a0, 1), uQ.fillRect(0, aM.j5 - 1, a0, 1), uQ
			.fillRect(0, 0, 1, aM.j5), uQ.fillRect(a41, 0, 1, aM.j5), uQ.fillRect(a41 + a3D, 0, 1, aM.j5), uQ.fillRect(a0 - a41, 0, 1, aM.j5), uQ.fillRect(a0 - 1, 0, 1, aM.j5), uQ.fillRect(Math.floor(.25 * aM.j5) + a48, Math.floor((aM.j5 - a47) / 2),
				aM.j5 - 2 * a48, a47), uQ.fillRect(Math.floor(a0 - 1.25 * aM.j5) + a48, Math.floor((aM.j5 - a47) / 2), aM.j5 - 2 * a48 - a48 % 2, a47), uQ.fillRect(Math.floor(a0 - 1.25 * aM.j5) + Math.floor((aM.j5 - a47) / 2), a48, a47, aM.j5 - 2 *
				a48 - a48 % 2), a0G = b7.fr.hr(a8.eE, aM.gx()), uQ.fillText(b7.wu.a04(a0G) + " (" + b7.wu.a09(100 * hs, +(hs < .1)) + ")", Math.floor(.5 * a0), a49)
	}
	this.setAbsolutePercentage = function(newPercentage) {
		hs = newPercentage;
	};
	__fx.keybindFunctions.setAbsolute = this.setAbsolutePercentage;
	__fx.keybindFunctions.setRelative = (arg1) => aM.yE(arg1);

	function a4E(yc) {
		return !(1 < yc && 1 === hs || (1 < yc && yc * hs - hs < 1 / 1024 ? yc = (hs + 1 / 1024) / hs : yc < 1 && hs - yc * hs < 1 / 1024 && (yc = (hs - 1 / 1024) / hs), hs = bH.oi(hs * yc, 1 / 1024, 1), a44(), 0))
	}

	function a4F(kg) {
		return hs !== (hs = bH.oi((kg - eb - a41) / (a0 - 2 * a41), 1 / 1024, 1)) && (a44(), !0)
	}
	this.ed = 0, this.gk = !1, this.dR = function() {
		ui = !a8.gr && !a8.gf, a36 = !1, hs = .5, a0G = 0, this.gk = !1, this.resize()
	}, this.resize = function() {
		r.s.v8() && au.a0 < .8 * au.j5 ? (this.j5 = Math.floor(.066 * au.pC), a0 = au.a0 - 4 * bY.gap - this.j5) : (a0 = Math.floor((r.s.v8() ? .65 : .389) * au.pC), a0 += 12 - a0 % 12, this.j5 = Math.floor(a0 / 12)), a41 = Math.floor(3 * this
			.j5 / 2), a1e = b7.pA.qR(1, Math.floor(.5 * this.j5)), (canvas = document.createElement("canvas")).width = a0, canvas.height = this.j5, (uQ = canvas.getContext("2d", {
			alpha: !0
		})).font = a1e, b7.pA.textBaseline(uQ, 1), b7.pA.textAlign(uQ, 1), this.a43(), a44()
	}, this.a43 = function() {
		eb = r.s.v8() && au.a0 < .8 * au.j5 ? this.j5 + 3 * bY.gap : Math.floor((au.a0 - a0) / 2), this.ed = au.j5 - this.j5 - bg.a11() * bY.gap
	}, this.lE = function() {
		a36 && (a36 = !1, a44())
	}, this.ui = function() {
		return !(!ui || aH.gg && eb < Math.floor(bY.gap + 5.5 * this.j5))
	}, this.a2G = function(a4A) {
		return !!this.ui() && eb + a0 > au.a0 - a4A - bY.gap
	}, this.a0N = function() {
		ui = !a8.gf
	}, this.a3t = function() {
		ui = !1
	}, this.gx = function() {
		return bH.oi(Math.floor(1024 * hs + .5) - 1, 0, 1023)
	}, this.yB = function(kg, kh) {
		return this.ui() && eb < kg && kg < eb + a0 && kh > this.ed
	}, this.gj = function(kg, kh) {
		return !!this.ui() && !!aM.yB(kg, kh) && (aN.lz = !1, function(wb, kg, kh) {
			if (function(kg, kh) {
					return eb < kg && kg < eb + a41 && kh > aM.ed
				}(kg, kh)) return a4E(a42);
			if (function(kg, kh) {
					return eb + a0 - a41 < kg && kg < eb + a0 && kh > aM.ed
				}(kg, kh)) return a4E(1 / a42);
			return wb.gk = !0, a4F(kg)
		}(this, kg, kh) && (bb.dZ = !0), !0)
	}, this.yE = function(m6) {
		0 !== a8.w4 && this.ui() && a4E(m6) && (bb.dZ = !0)
	}, this.xj = function(deltaY) {
		var m6;
		return !(0 === deltaY || !this.ui()) && a4E(m6 = 0 < deltaY ? (m6 = 400 / (400 + deltaY)) < a42 ? a42 : m6 : 1 / a42 < (m6 = (400 - deltaY) / 400) ? 1 / a42 : m6)
	}, this.xg = function(kg) {
		return !!this.gk && a4F(kg)
	}, this.y7 = function() {
		this.gk = !1
	}, this.iQ = function() {
		this.ui() && a0G !== b7.fr.hr(a8.eE, this.gx()) && (a36 = !0)
	}, this.r9 = function() {
		this.ui() && rA.drawImage(canvas, eb, this.ed)
	}
}

function cs() {
	var canvas, uQ, a4G, font, a4H = 0,
		a4I = !1,
		a4J = [10, 5, 3, 2, 1.5, 1, .75, .5, .25],
		a4K = 5;

	function a4Q() {
		if (a4I) {
			var a6, eU = a4J.length,
				a49 = Math.floor(.5 * a4G.j5),
				j5 = eU * a49,
				eb = Math.floor(Math.floor(a4G.eb) + .3 * a4G.a0 - .5),
				ed = Math.floor(Math.floor(a4G.ed) - j5),
				a0 = Math.floor(.4 * a4G.a0 + 2.5);
			for (rA.fillStyle = u.mR, rA.fillRect(eb, ed, a0, j5), rA.fillStyle = u.mq, rA.fillRect(eb, ed + a4K * a49, a0, a49), rA.fillStyle = u.mV, rA.fillRect(eb, ed, 2, j5), rA.fillRect(eb, ed, a0, 2), rA.fillRect(eb + a0 - 2, ed, 2, j5), a6 =
				1; a6 < eU; a6++) rA.fillRect(eb, ed + a6 * a49, a0, 2);
			for (rA.fillStyle = u.mV, b7.pA.textAlign(rA, 1), b7.pA.textBaseline(rA, 1), rA.font = b7.pA.qR(0, .6 * a49), eb += .5 * a0, a6 = 0; a6 < eU; a6++) rA.fillText(a4Y(a6), eb, ed + (a6 + .6) * a49)
		}
		rA.drawImage(canvas, Math.floor(a4G.eb), Math.floor(a4G.ed))
	}

	function lF(wb) {
		var eb, lu, lv, a49;
		uQ.clearRect(0, 0, Math.floor(a4G.a0), Math.floor(a4G.j5)), uQ.fillStyle = u.mR, uQ.fillRect(0, 0, Math.floor(a4G.a0), Math.floor(a4G.j5)), a8.lx && (uQ.fillStyle = u.mq, uQ.fillRect(0, 0, Math.floor(.3 * a4G.a0), Math.floor(a4G.j5))), uQ
			.fillStyle = u.mV, uQ.fillText("Hide UI", .15 * a4G.a0, .5 * a4G.j5), uQ.fillRect(Math.floor(.3 * a4G.a0 - .5), 0, 2, Math.floor(a4G.j5)), eb = .5 * a4G.a0, uQ.fillText("Replay Speed", eb, .31 * a4G.j5), uQ.fillText(a4Y(a4K), eb, .69 *
				a4G.j5), uQ.fillRect(Math.floor(.7 * a4G.a0 - .5), 0, 2, Math.floor(a4G.j5)), wb.a0t ? (eb = Math.floor(.02 * a4G.a0), wb = Math.floor(.025 * a4G.a0), lu = Math.floor(.85 * a4G.a0 - eb - .5 * wb), lv = Math.floor(.25 * a4G.j5), a49 =
				Math.floor(a4G.j5) - 2 * lv, uQ.fillRect(lu, lv, eb, a49), uQ.fillRect(lu + eb + wb, lv, eb, a49)) : function() {
				var a0 = Math.floor(.46 * a4G.j5),
					j5 = Math.floor(.23 * a4G.j5),
					eb = Math.floor(.85 * a4G.a0 - .5 * a0 + a0 / 12),
					ed = Math.floor(.5 * a4G.j5 - j5);
				uQ.beginPath(), uQ.moveTo(eb, ed), uQ.lineTo(eb + a0, ed + j5), uQ.lineTo(eb, ed + (j5 << 1)), uQ.fill()
			}(), uQ.fillRect(0, 0, Math.floor(a4G.a0), 2), uQ.fillRect(0, 0, 2, Math.floor(a4G.j5)), uQ.fillRect(0, Math.floor(a4G.j5) - 2, Math.floor(a4G.a0), 2), uQ.fillRect(Math.floor(a4G.a0 - 2), 0, 2, Math.floor(a4G.j5))
	}

	function a4Y(a6) {
		return 5 === a6 ? "Normal" : "" + a4J[a6]
	}
	this.a0t = !1, this.dR = function() {
		a8.gf && (a4K = 5, this.a0t = !1, a4I = !1, a4G = new pi([.3, .3 / 6], [.5, 1]), this.resize())
	}, this.a4L = function() {
		return a4J[a4K]
	}, this.uM = function() {
		return a4G.ed
	}, this.a2G = function(a4A) {
		return !!a8.gf && a4G.eb + a4G.a0 > au.a0 - a4A - bY.gap
	}, this.resize = function() {
		a8.gf && (a4G.resize(), a4G.ed -= (bg.a11() - 1) * bY.gap, font = b7.pA.qR(0, .3 * a4G.j5), (canvas = document.createElement("canvas")).width = Math.floor(a4G.a0), canvas.height = Math.floor(a4G.j5), (uQ = canvas.getContext("2d", {
			alpha: !0
		})).font = font, b7.pA.textAlign(uQ, 1), b7.pA.textBaseline(uQ, 1), lF(this))
	}, this.yH = function(a4M) {
		0 === a8.w4 || n.ui() || a4M !== a8.lx && (a8.lx = a4M, bd.resize(), bb.dZ = !0, a8.gf) && (a4H = bb.e2 + 2e3, lF(this))
	}, this.gj = function(eb, ed) {
		if (!a8.gf) return !1;
		if (eb < a4G.eb || ed < a4G.ed || eb > a4G.eb + a4G.a0) return a4I && function(wb, eb, ed) {
			var eU = a4J.length,
				a49 = Math.floor(.5 * a4G.j5),
				j5 = eU * a49,
				lu = Math.floor(Math.floor(a4G.eb) + .3 * a4G.a0 - .5),
				j5 = Math.floor(Math.floor(a4G.ed) - j5),
				a0 = Math.floor(.4 * a4G.a0 + 2.5);
			return a4I = !1, bb.dZ = !0, eb < lu || lu + a0 < eb || ed < j5 || (a4K = a4P(0, Math.floor((ed - j5) / a49), eU - 1), lF(wb)), !0
		}(this, eb, ed);
		if ((eb -= a4G.eb) < .3 * a4G.a0) a4I = !1, this.yH(!a8.lx);
		else {
			if (eb < .7 * a4G.a0) return a4I = !a4I, bb.dZ = !0;
			this.yJ(!1)
		}
		return !0
	}, this.yJ = function(a4O) {
		2 === a8.w4 ? (this.yH(!1), n.o(3)) : (a4I = !1, this.a0t = !this.a0t, this.a0t ? (aH.gg && aH.yI(), r.s.setState(1)) : a4O || aH.a1k(), bb.dZ = !0, lF(this))
	}, this.yK = function() {
		this.a0t = !1, aH.a1k(), bb.dZ = !0, lF(this)
	}, this.xz = function(eb, ed) {
		return !!a8.lx && (0 <= aH.gj(eb, ed) || (a8.gf ? ((bb.e2 > a4H || !this.gj(eb, ed)) && aN.gj(eb, ed), bb.dZ = !0, a4H = bb.e2 + 2e3) : aN.gj(eb, ed)), !0)
	}, this.iQ = function() {
		a8.gf && a8.lx && bb.e2 > a4H - 1e3 && bb.e2 < a4H && (bb.dZ = !0)
	}, this.wC = function() {
		a8.gf && (this.a0t = !1, bb.dZ = !0, lF(this))
	}, this.r9 = function() {
		if (a8.gf) {
			if (a8.lx) {
				if (bb.e2 > a4H) return;
				if (bb.e2 > a4H - 1e3) return rA.globalAlpha = a4P(0, (1e3 - (bb.e2 - (a4H - 1e3))) / 1e3, 1), a4Q(), void(rA.globalAlpha = 1)
			}
			a4Q()
		}
	}
}

function cA() {
	var a4Z, a4a, a0, eb, ed, a4b, a4c;
	this.dR = function() {
		a4Z = new Array(2), a4a = new Array(2), this.lz = !1, a4c = a4b = hv = ht = 0, hu = 1, this.resize()
	}, this.resize = function() {
		a0 = (a0 = Math.floor((r.s.v8() ? .072 : .0502) * au.pC)) < 8 ? 8 : a0;
		for (var a6 = 1; 0 <= a6; a6--) a4Z[a6] = document.createElement("canvas"), a4Z[a6].width = a0, a4Z[a6].height = a0, a4a[a6] = a4Z[a6].getContext("2d", {
			alpha: !0
		});
		this.a43(),
			function() {
				for (var a4r = Math.floor(1 + a0 / 20), a6 = 1; 0 <= a6; a6--) a4a[a6].clearRect(0, 0, a0, a0), a4a[a6].fillStyle = u.mO, a4a[a6].beginPath(), a4a[a6].arc(a0 / 2, a0 / 2, a0 / 2 - a4r, 0, 2 * Math.PI), a4a[a6].fill(), a4a[a6]
					.lineWidth = a4r, a4a[a6].fillStyle = u.mV, a4a[a6].strokeStyle = u.mV, a4a[a6].beginPath(), a4a[a6].arc(a0 / 2, a0 / 2, a0 / 2 - a4r, 0, 2 * Math.PI), a4a[a6].stroke(), uT(a4a[a6], 0, 0, a0, a4r, .3, 0 === a6)
			}()
	}, this.uL = function() {
		return -ht / hu
	}, this.uM = function() {
		return -hv / hu
	}, this.mA = function(a4g, hb) {
		ht = hu * a4g - hb
	}, this.mB = function(a4h, hc) {
		hv = hu * a4h - hc
	}, this.gj = function(a4f, a2H) {
		return a8.lx || ! function(a4f, a2H) {
			return Math.pow(a4f - (eb + a0 / 2), 2) + Math.pow(a2H - (ed + a0 / 2), 2) < a0 * a0 / 4 || Math.pow(a4f - (eb + a0 / 2), 2) + Math.pow(a2H - (ed + 2 * a0), 2) < a0 * a0 / 4
		}(a4f, a2H) || bf.dj.data[8].value ? (aC.mD() && (this.lz = !0, a4b = a4f, a4c = a2H), !1) : a2H < ed + 1.25 * a0 ? this.xj(Math.floor(au.a0 / 2), Math.floor(au.j5 / 2), -200) : this.xj(Math.floor(au.a0 / 2), Math.floor(au.j5 / 2),
			200)
	}, this.xg = function(a4f, a2H) {
		var a4i, a4j, he, hh;
		return !aC.mD() || (a4i = ht, a4j = hv, ht += he = a4b - a4f, hv += hh = a4c - a2H, aa.xg(he, hh), this.a4k(), a4b = a4f, a4c = a2H, a4i !== ht) || a4j !== hv
	}, this.xj = function(kg, kh, deltaY) {
		var m6;
		if (aC.mD()) {
			if (0 < deltaY) m6 = (m6 = 500 / (500 + deltaY)) < .5 ? .5 : m6;
			else {
				if (!(deltaY < 0)) return !1;
				m6 = 2 < (m6 = (500 - deltaY) / 500) ? 2 : m6
			}
			this.a4l(kg, kh, m6), bb.dZ = !0
		}
		return !0
	}, this.a4l = function(eb, ed, e8) {
		var yc;
		e8 = yc = (yc = 1024 < (yc = e8) * hu ? 1024 / hu : yc) * hu < .125 ? .125 / hu : yc, aa.zoom(e8, eb, ed),
			function(yc, kg, kh) {
				hu *= yc, ht = (ht + kg) * yc - kg, hv = (hv + kh) * yc - kh, aN.a4k()
			}(e8, eb, ed)
	}, this.a4k = function() {
		var a4o = au.a0 / 16,
			hL = 0,
			a4p = au.j5 / 16,
			hM = 0;
		ht < -au.a0 + a4o && (hL = -au.a0 + a4o - ht), ht > hu * bO.ef - a4o && (hL = hu * bO.ef - a4o - ht), hv < -au.j5 + a4p && (hM = -au.j5 + a4p - hv), hv > hu * bO.eg - a4p && (hM = hu * bO.eg - a4p - hv), ht += hL, hv += hM, bW.mC(), aa
			.a4q(hL, hM)
	}, this.a43 = function() {
		eb = au.a0 - a0 - bY.gap, ed = Math.floor(au.j5 / 2 - 1.25 * a0)
	}, this.r9 = function() {
		bf.dj.data[8].value || (rA.drawImage(a4Z[0], eb, ed), rA.drawImage(a4Z[1], eb, Math.floor(ed + 3 * a0 / 2)))
	}
}

function cB() {
	var g, a4s, a4t, a4u, gap, a4v, a4w, a4x, a4y, a4z, a1e, a50, ga, a51, a3D, a52, a53, a54;

	function a58() {
		a4u = Math.floor(.2 * (r.s.v8() ? .07 : .035) * au.pC), a4u = a2E(r.s.v8() ? 3 : 1, a4u);
		var a5B = au.a0 / (g.length + gap);
		a4u = a4u < a5B ? a5B : a4u, a3D = Math.floor((1 - gap) * a4u), a4s = 0, a5C()
	}

	function a5C() {
		a4s = (a4s = a4s < -20 ? -20 : a4s) > (g.length - 15) * a4u ? (g.length - 15) * a4u : a4s, a4w = Math.floor(a4s / a4u), a4x = (a4x = a4w + Math.floor(au.a0 / a4u)) > g.length - 1 ? g.length - 1 : a4x, a4w = (a4w = a4x < a4w ? a4x : a4w) < 0 ?
			0 : a4w;
		var kL = a4x;
		a4v = a4t / g[kL];
		for (var a6 = a4x - 1; a4w <= a6; a6--) g[a6] > g[kL] && (kL = a6, a4v = a4t / Math.pow(g[a6], a51))
	}

	function a5F(eb) {
		eb = Math.floor((a4s + au.a0 - eb - gap * a4u) / a4u);
		return (eb = eb < -1 ? -1 : -1 === eb ? 0 : eb > g.length - 1 ? -1 : eb) !== a4y && (a4y = eb, -1 === a52 && 0 === a4y && aO.a55 && (a52 = setInterval(a5G, 100)), 1)
	}

	function a5H(a6) {
		var a33 = Math.floor(a4v * Math.pow(g[a6], a51));
		rA.fillRect(a4s + au.a0 - (a6 + 1) * a4u, au.j5 - a33, a3D, a33)
	}

	function a5G() {
		var g3;
		0 !== (a4y = 8 === aV.xK() ? -1 : a4y) ? (a53 = (new Date).getTime(), clearInterval(a52), a52 = -1) : (g3 = g[1] / 864e3, -1 !== a53 && (g3 += ((new Date).getTime() - a53) * g[1] / 864e5, a53 = -1), 0 < g3 && (g[0] += Math.floor(g3), bb
			.dZ = !0))
	}
	this.a55 = !1, this.dR = function() {
		a53 = a52 = -1, a4y = -(a51 = 1), this.a56 = !1, ga = 0, a50 = new Date, a4s = 0, gap = .3, (a54 = []).push({
			fy: "Plateau A",
			eU: 0,
			e: 57
		}), a54.push({
			fy: "Max A",
			eU: 1,
			e: 1
		}), a54.push({
			fy: "Black Friday",
			eU: 15,
			e: 15
		}), a54.push({
			fy: "Max B",
			eU: 19,
			e: 19
		}), a54.push({
			fy: "Max C",
			eU: 44,
			e: 44
		}), a54.push({
			fy: "First Android Version",
			eU: 58,
			e: 58
		}), a54.push({
			fy: "Max D",
			eU: 67,
			e: 67
		}), a54.push({
			fy: "The iFrame Explosion",
			eU: 98,
			e: 99
		}), a54.push({
			fy: "The 155-Day Uptrend",
			eU: 58,
			e: 213
		}), a54.push({
			fy: "Max E",
			eU: 213,
			e: 213
		}), a54.push({
			fy: "Plateau B",
			eU: 214,
			e: 259
		}), a54.push({
			fy: "Turbulent Times",
			eU: 260,
			e: 344
		}), a54.push({
			fy: "Max F",
			eU: 262,
			e: 262
		}), a54.push({
			fy: "Max G",
			eU: 282,
			e: 282
		}), a54.push({
			fy: "Max H",
			eU: 333,
			e: 333
		}), a54.push({
			fy: "The 19-Day Downtrend",
			eU: 283,
			e: 301
		}), a54.push({
			fy: "Plateau C",
			eU: 345,
			e: 385
		}), a54.push({
			fy: "The Alliance Ascent",
			eU: 386,
			e: 395
		}), a54.push({
			fy: "Max I",
			eU: 395,
			e: 395
		}), a54.push({
			fy: "First iOS Version",
			eU: 411,
			e: 411
		}), a54.push({
			fy: "Plateau D",
			eU: 396,
			e: 453
		}), a54.push({
			fy: "The TikTok Revolution",
			eU: 454,
			e: 470
		}), a54.push({
			fy: "Max J",
			eU: 456,
			e: 456
		}), a54.push({
			fy: "Max K",
			eU: 472,
			e: 472
		}), a54.push({
			fy: "Max L",
			eU: 478,
			e: 478
		}), a54.push({
			fy: "YT Drew",
			eU: 471,
			e: 485
		}), a54.push({
			fy: "Plateau E",
			eU: 485,
			e: 600
		}), a54.push({
			fy: "Uptrend A",
			eU: 600,
			e: 613
		}), a54.push({
			fy: "Max M",
			eU: 613,
			e: 613
		}), a54.push({
			fy: "Downtrend A",
			eU: 614,
			e: 635
		}), a54.push({
			fy: "Plateau F",
			eU: 636,
			e: 737
		}), a54.push({
			fy: "End of Record",
			eU: 738,
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
		a4t = Math.floor(.15 * au.j5), a4z = (a4z = Math.floor((r.s.v8() ? .018 : .0137) * au.pC)) < 2 ? 2 : a4z, a1e = b7.pA.qR(1, a4z), a58()
	}, this.a59 = function(a5A) {
		var a6;
		for (this.a55 = !0, a6 = 0; a6 < a5A.length; a6++) g.unshift(a5A[a6]);
		a58(), bb.dZ = !0
	}, this.a5D = function() {
		a5C()
	}, this.xg = function(eb, ed) {
		ed > au.j5 - .6 * a4t ? this.a56 ? eb !== ga && (a4s += eb - ga, ga = eb, a5C(), a5F(eb), this.a56 = -1 !== a4y, bb.dZ = !0) : a5F(eb) && (bb.dZ = !0) : this.y5()
	}, this.y5 = function() {
		-1 !== a4y && (this.a56 = !1, a4y = -1, bb.dZ = !0)
	}, this.xj = function(eb, deltaY) {
		-1 !== a4y && (a4s += Math.floor(deltaY), a5C(), a5F(eb), bb.dZ = !0)
	}, this.gj = function(eb, ed) {
		this.xg(eb, ed), -1 !== a4y && (ga = eb, this.a56 = !0)
	}, this.y6 = function() {
		-1 !== a4y && (this.a56 = !1)
	}, this.r9 = function() {
		rA.fillStyle = u.mY;
		for (var a5J, month, e3, qU, a5M, a5N, lv, a5O, a5P, a6 = a4x; a4w <= a6; a6--) a5H(a6);
		this.a55 && 0 === a4w && (rA.fillStyle = u.mz, a5H(0)), -1 !== a4y && (rA.fillStyle = u.mX, a5H(a4y)), -1 !== a4y && (rA.font = a1e, b7.pA.textBaseline(rA, 2), (e3 = new Date).setTime(a50.getTime() - 1e3 * a4y * 60 * 60 * 24), month =
			"month", a5J = "day", "undefined" != typeof Intl && (month = new Intl.DateTimeFormat("en-US", {
				month: "long"
			}).format(e3), a5J = new Intl.DateTimeFormat("en-US", {
				weekday: "long"
			}).format(e3)), a5J = a5J + ", " + e3.getUTCDate() + " " + month + " " + e3.getFullYear(), month = 1 === g[a4y] ? L(86) : L(87), month = b7.wu.a04(g[a4y]) + " " + month, e3 = Math.floor(rA.measureText(a5J).width), qU = Math.floor(
				rA.measureText(month).width), a5M = Math.floor(.5 * (e3 + a4z)), a5N = (a5N = a4s + au.a0 - (a4y + 1) * a4u) < a5M ? a5M : a5N > au.a0 - a5M ? au.a0 - a5M : a5N, lv = au.j5 - Math.floor(a4v * Math.pow(g[a4y], a51)), a5O = Math
			.floor(1.1 * a4z), a5P = lv > au.j5 - a5O ? au.j5 - a5O : lv, rA.fillStyle = u.mS, rA.fillRect(au.a0 - qU - a4z, a5P - a5O, qU + a4z, a5O), rA.fillRect(a5N - a5M, au.j5 - a5O, e3 + a4z, a5O), rA.fillStyle = u.mV, b7.pA.textAlign(
				rA, 2), rA.fillText(month, Math.floor(au.a0 - .5 * a4z), a5P),
			function(lv, a5O) {
				for (var qT, kN = -1, oA = g.length - a4y - 1, a6 = a54.length - 1; 0 <= a6; a6--) oA >= a54[a6].eU && oA <= a54[a6].e && (-1 === kN || a54[a6].e - a54[a6].eU < a54[kN].e - a54[kN].eU) && (kN = a6); - 1 !== kN && (qT = Math
					.floor(rA.measureText(a54[kN].fy).width), rA.fillStyle = u.mS, rA.fillRect(au.a0 - qT - a4z, lv, qT + a4z, a5O), rA.fillStyle = u.mV, rA.fillText(a54[kN].fy, Math.floor(au.a0 - .5 * a4z), lv + a5O))
			}(a5P - 2 * a5O, a5O), b7.pA.textAlign(rA, 1), rA.fillText(a5J, a5N, au.j5), rA.strokeStyle = u.mZ, rA.lineWidth = 1, rA.beginPath(), rA.moveTo(0, lv), rA.lineTo(au.a0, lv), rA.closePath(), rA.stroke())
	}
}

function cC() {
	var a1e, a0, ed, a5R, a5S, canvas, uQ, a36, ze, a5T, a5U, a5V, a5W;
	this.eb = 0, this.j5 = 0, this.dR = function() {
		a5S = a8.a0V, a5U = "rgba(0,100,0,0.8)", a5V = "rgba(150,0,0,0.8)", a36 = !(a5T = !0), ze = ab.gX[a8.eE], this.resize()
	}, this.resize = function() {
		a0 = Math.floor((r.s.v8() ? .305 : .24) * au.pC), this.j5 = Math.floor(.5 + .13 * a0), a0 = Math.floor(6 * this.j5), a1e = b7.pA.qR(1, Math.floor(.8 * this.j5)), a5W = Math.floor(.5 * this.j5), bO.sk.font = a1e, ed = bY.gap, a5R = Math
			.floor(1 + .13 * this.j5), (canvas = document.createElement("canvas")).width = a0, canvas.height = this.j5, (uQ = canvas.getContext("2d", {
				alpha: !0
			})).font = a1e, b7.pA.textBaseline(uQ, 1), b7.pA.textAlign(uQ, 1), this.a5X()
	}, this.a3T = function() {
		return r.s.v8() && au.a0 < 1.2 * au.j5
	}, this.a43 = function() {
		this.a3T() ? this.eb = au.a0 - a0 - bY.gap : this.eb = Math.floor(aQ.a5Y() + (au.a0 - aQ.a5Y() - aR.a0 - a0) / 2 - .5 * bY.gap)
	}, this.lE = function() {
		a36 && (a36 = !1, this.a5X())
	}, this.a5X = function() {
		uQ.clearRect(0, 0, a0, this.j5), uQ.fillStyle = a5T ? a5U : a5V, uQ.fillRect(0, 0, a0, this.j5), uQ.fillStyle = u.mX, this.a5Z(), this.a5a(), uQ.fillStyle = ab.gX[a8.eE] >= aZ.jH(a8.eE) ? u.mw : u.mV, uQ.fillText(b7.wu.a04(ze), Math
			.floor(a0 / 2), a5W), uQ.fillStyle = u.mV, uQ.fillRect(0, 0, a0, 1), uQ.fillRect(0, 0, 1, this.j5), uQ.fillRect(0, this.j5 - 1, a0, 1), uQ.fillRect(a0 - 1, 0, 1, this.j5)
	}, this.a5Z = function() {
		var ep = bb.jY() % 100,
			ep = (ep = 9 - bH.ew(ep -= ep % 10, 10), Math.floor(ep * (this.j5 - a5R) / 9));
		uQ.fillRect(0, ep, a5R, this.j5 - ep), uQ.fillRect(a0 - a5R, ep, a5R, this.j5 - ep)
	}, this.a5a = function() {
		uQ.fillRect(a5R, this.j5 - a5R, Math.floor((a0 - 2 * a5R) * ab.gX[a8.eE] / a5S), a5R)
	}, this.iQ = function() {
		var g3 = a8.eE;
		b7.fr.gi(g3) && (g3 = ab.gX[g3] - ab.zd[g3], ze !== g3 ? (a5S = a2E(g3, a5S), a5T = ze < g3 && 10 <= g3, ze = g3, a36 = !0) : bb.jY() % 10 == 9 && (a36 = !0))
	}, this.r9 = function() {
		0 === ab.lS[a8.eE] || a8.gr || 2 === ab.zX[a8.eE] || rA.drawImage(canvas, this.eb, ed)
	}
}

function cD() {
	var a5b, a5c, a5d, a5e, a5f, a5g, a5h, a5i, a5j, a5k, a5l, a5m, a5n, a5o, a5p, a5q, a5r, a5s, a5t, a5u, a5v, a5w, position, a5x, a5y, a5z, a60, a61 = 1,
		a62 = 1,
		a63 = "";
	var leaderboardHasChanged = true;
	this.playerPos = a8.eE;
	__fx.leaderboardFilter.setUpdateFlag = () => leaderboardHasChanged = true;

	function updateFilteredLb() {
		if (!leaderboardHasChanged) return;
		__fx.leaderboardFilter.filteredLeaderboard = __fx.leaderboardFilter.playersToInclude
			.map(id => jM[id]).sort((a, b) => a - b);
		leaderboardHasChanged = false;
		this.playerPos = __fx.leaderboardFilter.filteredLeaderboard.indexOf(jM[a8.eE]);
	}

	function a65() {
		a5h.clearRect(0, 0, a5b, a3j),
			a5h.fillStyle = u.nA,
			a5h.fillRect(0, 0, a5b, a5m),
			a5h.fillStyle = u.mR,
			a5h.fillRect(0, a5m, a5b, a3j - a5m);
		if (__fx.leaderboardFilter.enabled) updateFilteredLb();
		var playerPos = (__fx.leaderboardFilter.enabled ?
			this.playerPos :
			jM[a8.eE]
		);
		if (__fx.leaderboardFilter.hoveringOverTabs) a5w = -1;
		if (__fx.leaderboardFilter.enabled && a5w >= __fx.leaderboardFilter.filteredLeaderboard.length) a5w = -1;
		playerPos >= position && a67(playerPos - position, u.mq),
			0 !== jM[a8.eE] && 0 === position && a67(0, u.nF),
			-1 !== a5w && a67(a5w, u.mW),
			a5h.fillStyle = u.mR,
			//console.log("drawing", a5w),
			a5h.clearRect(0, a3j - __fx.leaderboardFilter.tabBarOffset, a5b, __fx.leaderboardFilter.tabBarOffset);
		a5h.fillRect(0, a3j - __fx.leaderboardFilter.tabBarOffset, a5b, __fx.leaderboardFilter.tabBarOffset);
		a5h.fillStyle = u.mV,
			a5h.fillRect(0, a5m, a5b, 1),
			a5h.fillRect(0, a3j - __fx.leaderboardFilter.tabBarOffset, a5b, 1),
			__fx.leaderboardFilter.drawTabs(a5h, a5b, a3j - __fx.leaderboardFilter.tabBarOffset, u.mq),
			a5h.fillRect(0, 0, a5b, bY.vB),
			a5h.fillRect(0, 0, bY.vB, a3j),
			a5h.fillRect(a5b - bY.vB, 0, bY.vB, a3j),
			a5h.fillRect(0, a3j - bY.vB, a5b, bY.vB), a5h.font = a5c, b7.pA.textBaseline(a5h, 1), b7.pA.textAlign(a5h, 1), a5h.fillText(a63, Math.floor((a5b + a5m - 22) / 2), Math.floor(a5k + a5d / 2));
		__fx.playerList.drawButton(a5h, 12, 12, a5m - 22);
		var en, g4 = playerPos < position + a5f - 1 ? 1 : 2;

		if (__fx.leaderboardFilter.enabled) {
			let result = __fx.leaderboardFilter.filteredLeaderboard;
			if (position !== 0 && position >= result.length - a5f)
				position = (result.length > a5f ? result.length : a5f) - a5f;
			//if (position >= result.length) position = result.length - 1;
			for (a5h.font = a5e, b7.pA.textAlign(a5h, 0), en = a5f - g4; 0 <= en; en--) {
				const pos = result[en + position];
				if (pos !== undefined)
					a68(ks[pos]), a69(en, pos, ks[pos]);
			}
			for (b7.pA.textAlign(a5h, 2), en = a5f - g4; 0 <= en; en--) {
				const pos = result[en + position];
				if (pos !== undefined)
					a68(ks[pos]), a6A(en, ks[pos]);
			}
		} else {
			for (a5h.font = a5e, b7.pA.textAlign(a5h, 0), en = a5f - g4; 0 <= en; en--)
				a68(ks[en + position]), a69(en, en + position, ks[en + position]);
			for (b7.pA.textAlign(a5h, 2), en = a5f - g4; 0 <= en; en--)
				a68(ks[en + position]), a6A(en, ks[en + position]);
		}
		2 == g4 && (a68(a8.eE), b7.pA.textAlign(a5h, 0), a69(a5f - 1, jM[a8.eE], a8.eE), b7.pA.textAlign(a5h, 2), a6A(a5f - 1, a8.eE)), 0 === position && (g4 = .7 * a5n / aW.get(4).height, a5h.setTransform(g4, 0, 0, g4, Math.floor(a5o + .58 * a5n +
			.5 * g4 * aW.get(4).width), Math.floor(a5k + a5d + .4 * a5n)), a5h.imageSmoothingEnabled = !0, a5h.drawImage(aW.get(4), -Math.floor(aW.get(4).width / 2), -Math.floor(aW.get(4).height / 2)), a5h.setTransform(1, 0, 0, 1, 0, 0))
	}

	function a68(player) {
		a8.ib && (a5h.fillStyle = bc.a6C[bc.k1[bc.eS[player]]])
	}

	function a67(a6, a6D) {
		a5h.fillStyle = a6D, a6 = a5f - 1 < a6 ? a5f - 1 : a6;
		a6D = Math.floor((a6 === a5f - 1 ? 2 : 0 === a6 ? 1.15 : 1) * a5n), a6D = a6 === a5f - 2 ? Math.floor(a5m + 9.15 * a5n) - Math.floor(a5m + 8.15 * a5n) : a6D;
		a5h.fillRect(0, Math.floor(a5m + (a6 + (0 === a6 ? 0 : .15)) * a5n), a5b, a6D)
	}

	function a69(a6F, wj, a6) {
		a5h.fillText(a5s[wj], a5o, Math.floor(a5k + a5d + (a6F + .5) * a5n)), 1 === ab.zX[a6] && (a5h.font = "italic " + a5e);
		wj = Math.floor(a5k + a5d + (a6F + .5) * a5n);
		a5h.fillText(ab.a2N[a6], a5p, wj), 0 !== ab.zX[a6] && (a5h.font = a5e), a6 < a8.jb && 2 !== ab.zX[a6] || a5h.fillRect(a5p, wj + .35 * a61, a5r[a6], Math.max(1, .1 * a61))
	}

	function a6A(a6F, a6) {
		a5h.fillText(ab.gJ[a6], a5q, Math.floor(a5k + a5d + (a6F + .5) * a5n))
	}

	function a6O(ed) {
		return (ed -= bY.gap + a5m) < 0 ? Math.floor(ed / a5n) - 1 : ed < (a5f - 1) * a5n ? Math.floor(ed / a5n) : ed < a3j - a5m ? a5f - 1 : (ed -= a3j - a5m, a5f + Math.floor(ed / a5n))
	}

	function vA(eb, ed) {
		return eb >= bY.gap && eb < bY.gap + a5b && ed >= bY.gap && ed < bY.gap + a3j
	}
	this.dR = function() {
			var a6;
			for (a5y = !1, a60 = a5z = a5x = 0, a5w = -1, a5f = r.s.v8() ? 6 : 10, a62 = (position = 0) === (a62 = bf.dj.data[11].value) ? 10 : 1 === a62 ? 5 : 1, a5v = !1, a5t = new Uint16Array(a5f + 1), a5u = new Uint32Array(a5f + 1), a5j = a8.eR,
				ks = new Uint16Array(a5j), jM = new Uint16Array(a5j), a6 = a5j - 1; 0 <= a6; a6--) ks[a6] = a6, jM[a6] = a6;
			this.resize(!0), a5r = new Uint16Array(a8.eR);
			var a64 = Math.floor(a5b - a5p - a5o - a5i);
			for (a5s = new Array(a8.eR), a5h.font = a5e, a6 = a8.eR - 1; 0 <= a6; a6--) a5s[a6] = a6 + 1 + ".", ab.a2N[a6] = b7.uQ.zD(ab.ww[a6], a5e, a64), a5r[a6] = Math.floor(a5h.measureText(ab.a2N[a6]).width);
			a65()
		}, this.resize = function(dR) {
			if (a3j = r.s.v8() ? (a5b = Math.floor(.335 * au.pC), Math.floor(a5f * a5b / 8)) : (a5b = Math.floor(.27 * au.pC), Math.floor(a5f * a5b / 10)), a5b = Math.floor(.97 * a5b), (a5g = document.createElement("canvas")).width = a5b, a5g
				.height = a3j, a5h = a5g.getContext("2d", {
					alpha: !0
				}), a5k = .025 * a5b, a5d = .16 * a5b, a5l = 0 * a5b, a5m = Math.floor(.45 * a5k + a5d), a5n = (a3j - a5d - 2 * a5k - a5l) / a5f,
				a5g.height = a3j += a5n, __fx.leaderboardFilter.tabBarOffset = Math.floor(a5n * 1.3), __fx.leaderboardFilter.verticalClickThreshold = a3j - __fx.leaderboardFilter.tabBarOffset, __fx.leaderboardFilter.windowWidth = a5b,
				a5c = b7.pA.qR(1, Math.floor(.55 * a5d)), a61 = Math.floor((r.s.v8() ? .67 : .72) * a5n), a5e = b7.pA.qR(0, a61), a5h.font = a5e, a5o = Math.floor(.04 * a5b), a5p = Math.floor((r.s.v8() ? .195 : .18) * a5b), a5i = Math.floor(a5h
					.measureText("00920600").width), a5h.font = a5c, a5q = a5b - a5o, !dR) {
				a5h.font = a5e;
				for (var a6 = a8.eR - 1; 0 <= a6; a6--) a5r[a6] = Math.floor(a5h.measureText(ab.a2N[a6]).width);
				a65()
			}
			a63 = b7.uQ.zD(L(88), a5c, .96 * a5b)
		}, this.a5Y = function() {
			return a5b
		}, this.lE = function(bl, a66) {
			(a66 || a5v && (bl || bb.jY() % a62 == 0)) && (a5v = !1, a65())
		}, this.iQ = function() {
			! function() {
				for (var en = a5j - 1; 0 <= en; en--) 0 === ab.lS[ks[en]] && ! function(en) {
					var a6M = ks[en];
					a5j--;
					for (var a6 = en; a6 < a5j; a6++) ks[a6] = ks[a6 + 1], jM[ks[a6]] = a6;
					ks[a5j] = a6M, jM[ks[a5j]] = a5j
				}(en)
			}();
			for (var a6K, mD = a5j - 1, en = 0; en < mD; en++) ab.gJ[ks[en]] < ab.gJ[ks[en + 1]] && (a6K = ks[en], ks[en] = ks[en + 1], ks[en + 1] = a6K, jM[ks[en]] = en, jM[ks[en + 1]] = en + 1);
			! function() {
				for (var e3 = a5v, g4 = (a5v = !0, jM[a8.eE] >= a5f - 1 ? a5f - 2 : a5f - 1), a6 = g4; 0 <= a6; a6--)
					if (a5t[a6] !== ks[a6] || a5u[a6] !== ab.gJ[ks[a6]]) return;
				(g4 != a5f - 2 || a5t[a5f] === jM[a8.eE] && a5u[a5f] === ab.gJ[a8.eE]) && (a5v = e3)
			}();
			for (var a6 = a5f - 1; 0 <= a6; a6--) a5t[a6] = ks[a6], a5u[a6] = ab.gJ[ks[a6]];
			a5t[a5f] = jM[a8.eE], a5u[a5f] = ab.gJ[a8.eE];
			leaderboardHasChanged = true;
		}, __fx.leaderboardFilter.scrollToTop = function() {
			position = 0;
		}, this.gj = function(eb, ed) {
			return !!vA(eb, ed) && ((__fx.utils.isPointInRectangle(eb, ed, bY.gap + 12, bY.gap + 12, a5m - 22, a5m - 22) && __fx.playerList.display(ab.ww), true) &&
				!(ed - bY.gap > __fx.leaderboardFilter.verticalClickThreshold && __fx.leaderboardFilter.handleMouseDown(eb - bY.gap)) && (a5x = bb.e2, a5y = !0, a5z = a60 = a6O(ed), bF.yL() && (eb = a4P(-1, a60, a5f), a5w !== (eb = eb === a5f ? -
					1 : eb)) && (a5w = eb, a65(), bb.dZ = !0)), !0)
		}, __fx.leaderboardFilter.repaintLeaderboard = function() {
			a65(), bb.dZ = !0;
		},
		this.xg = function(eb, ed) {
			if (__fx.utils.isPointInRectangle(eb, ed, bY.gap + 12, bY.gap + 12, a5m - 22, a5m - 22)) {
				__fx.playerList.hoveringOverButton === false && (__fx.playerList.hoveringOverButton = true, a65(), bb.dZ = !0);
			} else {
				__fx.playerList.hoveringOverButton === true && (__fx.playerList.hoveringOverButton = false, a65(), bb.dZ = !0);
			}
			if (__fx.leaderboardFilter.setHovering(
					__fx.utils.isPointInRectangle(eb, ed, bY.gap, bY.gap + __fx.leaderboardFilter.verticalClickThreshold, __fx.leaderboardFilter.windowWidth, __fx.leaderboardFilter.tabBarOffset), eb - bY.gap
				)) return;
			var e3, a6N = a6O(ed);
			return a5y ? (e3 = position, (position = a4P(0, position += a5z - a6N, a8.eR - a5f)) !== e3 && (a6N = (a6N = a4P(-1, a5z = a6N, a5f)) !== a5f && vA(eb, ed) ? a6N : -1, a5w = a6N, a65(), bb.dZ = !0), !0) : (a6N = (a6N = a4P(-1, a6N,
				a5f)) === a5f || !vA(eb, ed) || bF.yL() ? -1 : a6N, a5w !== a6N && (a5w = a6N, a65(), bb.dZ = !0))
		}, this.y6 = function(eb, ed) {
			if (!a5y) return !1;
			a5y = !1;
			var a6N = a6O(ed);
			var isEmptySpace = false;
			return bF.yL() && -1 !== a5w && (a5w = -1, a65(), bb.dZ = !0), bb.e2 - a5x < 350 && a60 === a6N && -1 !== (a6N = (a6N = a4P(-1, a6N, a5f)) !== a5f && vA(eb, ed) ? a6N : -1) && (eb = (__fx.leaderboardFilter.enabled ? (updateFilteredLb(),
					ks[__fx.leaderboardFilter.filteredLeaderboard[a6N + position] ?? (isEmptySpace = true, jM[a8.eE])]) : ks[a6N + position]), a6N === a5f - 1 && (__fx.leaderboardFilter.enabled ? this.playerPos : jM[a8.eE]) >=
				position + a5f - 1 && (eb = a8.eE), !isEmptySpace && a8.ib && __fx.donationsTracker.displayHistory(eb, ab.ww, a8.jx), 0 !== ab.lS[eb] && !isEmptySpace) && aC.lo(eb, 800, !1, 0), !0
		}, this.xj = function(eb, ed, deltaY) {
			var a6P;
			return !(a5y || a8.lx || (a6P = Math.max(Math.floor(Math.abs(deltaY) / 40), 1), !vA(eb, ed)) || (eb = (eb = a4P(-1, a6O(ed), a5f)) === a5f || bF.yL() ? -1 : eb, 0 < deltaY ? position < a8.eR - a5f && (position += Math.min(a8.eR - a5f -
				position, a6P), a5w = eb, a65(), bb.dZ = !0) : 0 < position && (position -= Math.min(position, a6P), a5w = eb, a65(), bb.dZ = !0), 0))
		}, this.r9 = function() {
			rA.drawImage(a5g, bY.gap, bY.gap)
		}
}

function cE() {
	var canvas, uQ, eb, ed, a33, a6Q, gap, a6R, fontSize, a6S, a6T, a6U, a6V, a6W, a6X, a6Y, a6Z, a6a;

	function a6e() {
		uQ.clearRect(0, 0, aR.a0, aR.j5), uQ.fillStyle = u.mS, uQ.fillRect(0, 0, aR.a0, aR.j5), uQ.fillStyle = u.mm, e8 = 0 < a6Y ? a6Y : Math.sqrt(a6V[4] / 1e4), uQ.fillRect(0, aR.j5 - a33 - 1, Math.floor(e8 * aR.a0), a33), uQ.fillStyle = u.mV, uQ
			.fillRect(0, 0, aR.a0, 1), uQ.fillRect(0, 0, 1, aR.j5), uQ.fillRect(aR.a0 - 1, 0, 1, aR.j5), uQ.fillRect(0, aR.j5 - 1, aR.a0, 1), uQ.fillRect(0, aR.j5 - a33 - 1, aR.a0, 1);
		for (var e8, a6g, e3 = 0, a6 = 0; a6 < a6U.length; a6++) a6W[a6] ? (b7.pA.textAlign(uQ, 0), a6g = Math.floor((a6Q - a33 + 2 * a6R) * (a6 - e3 + 1) / (a6U.length + 1) - .7 * a6R), uQ.fillText(a6U[a6], gap, a6g), b7.pA.textAlign(uQ, 2), 5 ===
			a6 && 0 !== ab.lS[a8.eE] && ab.gX[a8.eE] >= aZ.jH(a8.eE) ? (uQ.fillStyle = u.nD, uQ.fillText(a6c(a6), aR.a0 - gap, a6g), uQ.fillStyle = u.mV) : uQ.fillText(a6c(a6), aR.a0 - gap, a6g)) : e3++
	}

	function a6c(a6) {
		return a6 < 3 ? a6V[a6].toString() : 3 === a6 || 4 === a6 || 5 === a6 ? b7.wu.a09(a6V[a6] / 100, 2) : a6 < 7 ? b7.wu.a04(a6V[a6]) : a6 === 7 ? aR.a6h(a6V[7]) : a6 === 8 ? __fx.utils.getMaxTroops(ab.gJ, a8.eE) : __fx.utils.getDensity(a8.eE)
	}

	function a6b() {
		ab.gJ[a8.eE] !== a6V[6] && (a6V[6] = ab.gJ[a8.eE], a6S++)
	}
	this.dR = function() {
		a6Y = a6Z = 0, (a6T = new Array(8))[0] = L(89), a6T[1] = a8.jx ? L(90) : L(91), a6T[2] = L(92), a6T[3] = L(93), a6T[4] = L(94), a6T[5] = L(95, 0, "Interest"), a6T[6] = L(96), a6T[7] = L(97),
			a6T.push("Max Troops", "Density"), // add a6T
			(a6U = new Array(a6T.length)).fill(""), (a6V = new Array(a6T.length))[0] = a8.jx ? 0 : a8.jb, a6V[1] = a8.jx ? ag.jc : a8.jz, a6V[2] = a8.w6, a6V[3] = 0, a6V[4] = bH.ew(1e4 * ab.gJ[0], Math.max(a8.jL, 1)), a6V[5] = 0 === a8.data
			.iIncomeType ? 700 : 1 === a8.data.iIncomeType ? bH.ew(700 * a8.data.iIncomeValue, 64) : bH.ew(700 * a8.data.iIncomeData[a8.eE], 64), a6V[6] = 0, a6b(), a6V[7] = 0, a6X = a6c(6), a6W = new Array(a6T.length);
		for (var a6 = a6T.length - 1; 0 <= a6; a6--) a6W[a6] = !0;
		a6a = 0, a6a = a8.jx ? (a6W[0] = !1, a6W[2] = !1, a6W[3] = !1, 3) : (a6W[3] = !1, 1), a6S = 0, this.resize()
	}, this.resize = function() {
		this.a0 = Math.floor((r.s.v8() ? .1646 : .126) * 1.25 * au.pC), this.j5 = Math.floor(1.18 * this.a0), a33 = Math.floor(.04 * this.a0), gap = Math.floor(.035 * this.a0), a6R = .04 * this.a0, a6Q = this.j5, this.j5 -= Math.floor(a6a * (this
			.j5 - 2 * a33) / a6T.length), fontSize = Math.floor(.7 * (a6Q - a33) / a6T.length);
		var a1e = b7.pA.qR(1, fontSize);
		(canvas = document.createElement("canvas")).width = this.a0, canvas.height = this.j5,
			function(a1e, a0) {
				for (var a6 = 0; a6 < a6U.length; a6++) a6U[a6] = b7.uQ.zD(a6T[a6], a1e, a0)
			}((uQ = canvas.getContext("2d", {
				alpha: !0
			})).font = a1e, .575 * this.a0), b7.pA.textBaseline(uQ, 1), uQ.lineWidth = 1, this.a0O(), this.a43(), aP.a43(), a6e()
	}, this.a43 = function() {
		eb = au.a0 - this.a0 - bY.gap
	}, this.a6f = function() {
		ed = bY.gap
	}, this.a0O = function() {
		ed = bY.gap + (aP.a3T() && 0 !== ab.lS[a8.eE] && !a8.gr ? aP.j5 + bY.gap : 0)
	}, this.lE = function(bl) {
		(bl || 100 <= a6S) && (a6S = 0, a6e())
	}, this.a1I = function() {
		return a6V[7]
	}, this.a6h = function(value) {
		var kL = Math.floor(value / 1e3 / 60),
			value = Math.floor((value - 6e4 * kL) / 1e3);
		return value < 10 ? kL + ":0" + value : kL + ":" + value
	}, this.iQ = function() {
		var a6q, per;
		a6W[0] && a8.w7 - a8.w6 !== a6V[0] && (a6V[0] = a8.w7 - a8.w6, a6S++), ag.jc - a6V[0] !== a6V[1] && (a6V[1] = ag.jc - a6V[0], a6S++), this.l5(), (a6q = aZ.a6r(a8.eE)) !== a6V[5] && (a6V[5] = a6q, a6S++), a6b(), a6V[7] += bb.a6s, a6q =
			a6c(7), a6X !== a6q && (a6X = a6q, a6S += 100), a6q = a8.ib ? bd.we() : ab.gJ[ks[0]], per = bH.ew(1e4 * a6q, Math.max(a8.jL, 1)), a6V[3] = a6q, a6V[4] !== per && (a6S++, a6V[4] = per), 8 === a8.jv && function() {
				for (var a6 = 0; a6 < 2; a6++)
					if (!b7.fr.gi(a6)) return bN.vi.w3(), 1;
				return
			}() || a6V[3] < a8.jL || ! function() {
				for (var a6 = ag.jc - 1; 0 <= a6; a6--)
					if (0 < ab.fx[ag.je[a6]].length) return;
				return 1
			}() || bN.vi.w3()
	}, this.l5 = function() {
		a6W[2] && a8.w6 !== a6V[2] && (a6V[2] = a8.w6, a6S++)
	}, this.a6t = function(a6) {
		var qh, a6u, e3;
		return 2 !== a8.w4 && (a6 % 2 == 1 && (aQ.lE(1, 1), bb.dZ = !0), a6 === a8.a0X ? (a6Y = 0, a6e(), !1) : (-1 !== a6 || 0 !== a6Z) && (a6u = a6Y, a6Y = a8.gf ? a6 / a8.a0X : (e3 = performance.now(), 0 <= a6 && (qh = e3 - 392 * a6, a6Z =
			0 === a6 || qh < a6Z ? qh : a6Z), 1 < (a6Y = (e3 - a6Z) / (392 * a8.a0X)) ? 1 : a6Y), a6e(), a6Y !== a6u))
	}, this.r9 = function() {
		rA.drawImage(canvas, eb, ed)
	}
}

function cF() {
	var ui, a6v, a0, j5, a49, a6w, a6x, a3U, canvas, lf, a6y;

	function uM() {
		return Math.floor((au.a0 - a0) / 2) < aM.j5 + 2 * bY.gap ? au.j5 - j5 - 4 * bY.gap - aM.j5 : au.j5 - j5 - 2 * bY.gap
	}
	this.dR = function() {
		a6y = ui = !1, a49 = .61, a6w = .07, a6x = .09, lf = a3U = j5 = 0
	}, this.resize = function() {
		var uQ, lu, ep, a73, a74, a1j;
		ui && (a0 = a6z(a0 = r.s.v8() ? Math.floor(.69 * au.pC) : Math.floor(.5 * au.pC), a2E(au.a0 - 2 * bY.gap, 10)), a0 = a6z(a0, Math.floor(3.57 * a2E(au.j5 - 2 * bY.gap, 3))), j5 = Math.floor(.28 * a0), (canvas = document.createElement(
			"canvas")).width = a0, canvas.height = j5, uQ = canvas.getContext("2d", {
			alpha: !0
		}), lu = Math.floor(1 + j5 / 40), uQ.clearRect(0, 0, a0, j5), uQ.fillStyle = u.mS, uQ.fillRect(lu, lu, a0 - 2 * lu, j5 - 2 * lu), uQ.lineJoin = "bevel", uQ.lineWidth = 2 * lu, uQ.strokeStyle = u.mV, uQ.strokeRect(lu, lu, a0 - 2 *
			lu, j5 - 2 * lu), uQ.imageSmoothingEnabled = !1, ep = aW.get(a6v), a73 = ep.width, a1j = (1 === a6v ? .85 : 21 === a6v ? .666 : .9) * a49 * j5 / (a74 = ep.height), uQ.setTransform(a1j, 0, 0, a1j, Math.floor((a0 - a1j * a73) /
			2), Math.floor((j5 - a1j * a74) / 2)), uQ.drawImage(ep, 0, 0), uQ.setTransform(1, 0, 0, 1, Math.floor(a0 - a6x * j5 - a6w * j5 - lu), Math.floor(lu + a6w * j5)), function(uQ, eU) {
			uQ.lineWidth = Math.floor(1 + j5 / 80), uQ.strokeStyle = u.mV, uQ.beginPath(), uQ.moveTo(0, 0), uQ.lineTo(eU, eU), uQ.moveTo(0, eU), uQ.lineTo(eU, 0), uQ.stroke()
		}(uQ, Math.floor(a6x * j5)), uQ.setTransform(1, 0, 0, 1, 0, 0))
	}, this.show = function(ex, a71, a3w, a72) {
		ui || a72 && a6y || (a6v = a3w ? 21 : ex ? 1 : 2, ui = a6y = !0, this.resize(), aG.qg(), aM.a3t(), lf = bb.e2, a3U = a71 ? 1 : 0)
	}, this.iQ = function() {
		!ui || 1 <= a3U || (a3U = 1 < (a3U += 5e-4 * (bb.e2 - lf)) ? 1 : a3U, lf = bb.e2, bb.dZ = !0)
	}, this.gj = function(eb, ed) {
		return !(!ui || a3U <= 0 || (eb -= Math.floor((au.a0 - a0) / 2), ed -= uM(), eb < 0) || ed < 0 || a0 < eb || j5 < ed || (a0 - j5 / 3 < eb && ed < j5 / 3 && (ui = !1, bb.dZ = !0), 0))
	}, this.r9 = function() {
		!ui || a3U <= 0 || (rA.globalAlpha = a3U, rA.drawImage(canvas, Math.floor((au.a0 - a0) / 2), uM()), rA.globalAlpha = 1)
	}
}

function dF() {
	var a76 = [0, 0],
		a77 = [0, 0];

	function a7A(oA) {
		return 3 !== a76[oA] && 1 !== a77[oA] && (a77[oA] = 1, a76[oA]++, bf.pr.ps(119, (a76[0] << 2) + a76[1]), 1)
	}
	this.a78 = new a79, this.dR = function() {
		var ex = bf.dj.data[119].value;
		a76[0] = ex >> 2, a76[1] = 3 & ex
	}, this.a0i = function() {
		this.a78.dR()
	}, this.iQ = function() {
		this.a78.iQ()
	}, this.a1J = function() {
		a7A(0) && aI.a2K(L(98))
	}, this.a1K = function() {
		a7A(1) && aI.a2K(L(99))
	}
}

function a79() {
	var a7B;
	this.dR = function() {
		a7B = !1
	}, this.iQ = function() {
		var g3;
		if (function() {
				if (!a7B) {
					if (bb.jY() % 30 != 9) return;
					if (!b7.fr.kl(90)) return;
					a7B = !0
				}
				return 1
			}() && (console.log("HintsStillNeeds calculate"), ! function() {
				var p2 = aI.a2h(956);
				if (p2) {
					if (b7.fr.kP(p2.player)) return 1;
					aI.a1Q(956, 0)
				}
				return
			}() && (-1 === (g3 = (a8.ib ? function() {
				var id = bd.kp(),
					eU = ag.jc;
				if (bc.k1[id])
					for (var vv = ag.je, eS = bc.eS, a6 = 0; a6 < eU; a6++) {
						var g3 = vv[a6];
						if (eS[g3] !== id) return g3
					} else if (1 < eU) return ks[eU - 1];
				return -1
			} : function() {
				for (var a7J = ag.jc, jd = ag.je, a7K = jM, a6 = 0; a6 < a7J; a6++) {
					var g3 = jd[a6];
					if (0 !== a7K[g3]) return g3
				}
				return -1
			})()) ? ! function() {
				var p2 = aI.a2h(957);
				if (p2 && p2.a2A) {
					if (aX.eL(p2.a2A.eG << 2)) return 1;
					aI.a1Q(957, 0)
				}
				return
			}() : (aI.wS(0, L(100, [ab.a2N[g3]]), 956, g3, u.mV, u.mS, -1, !0), 0)))) {
			var eU = ai.iD.kb;
			if (0 === eU) ai.iD.l0();
			else
				for (var dj = ai.iD.dj, a6 = 0; a6 < eU; a6++) {
					var eG = dj[a6];
					if (aX.eL(eG << 2)) return void aI.wS(0, L(101, [bI.ec(eG), bI.ee(eG)]), 957, 0, u.mV, u.mS, -1, !0, void 0, {
						en: 1,
						eG: eG
					})
				}
		}
	}
}

function dG() {
	this.a7L = new a7M, this.dR = function() {
		this.a7L.resize()
	}
}

function a7M() {
	this.resize = function() {
		var a6, a7N = document.head.querySelector("style#ss");
		if (a7N)
			for (a6 = a7N.sheet.cssRules.length - 1; 0 <= a6; a6--) a7N.sheet.deleteRule(0);
		else(a7N = document.createElement("style")).id = "ss", document.head.appendChild(a7N);
		var a4H = "::-webkit-scrollbar",
			a7O = b7.pA.pL(bY.zM),
			h8 = b7.pA.pL(Math.max(b7.pA.pu(.012), 8));
		try {
			a7N.sheet.insertRule(a4H + "{width:" + h8 + ";height:" + h8 + ";}", a7N.sheet.cssRules.length), a7N.sheet.insertRule(a4H + "-thumb{background-color:white;}", a7N.sheet.cssRules.length), a7N.sheet.insertRule(a4H +
				"-track{background:" + u.mR + ";}", a7N.sheet.cssRules.length), a7N.sheet.insertRule(a4H + "-track:horizontal{border-top:" + a7O + " solid white;}", a7N.sheet.cssRules.length), a7N.sheet.insertRule(a4H +
				"-track:vertical{border-left:" + a7O + " solid white;}", a7N.sheet.cssRules.length), a7N.sheet.insertRule(a4H + "-button{display:none;}", a7N.sheet.cssRules.length)
		} catch (e) {
			for (console.log("error 3425: " + e), a6 = a7N.sheet.cssRules.length - 1; 0 <= a6; a6--) a7N.sheet.deleteRule(0)
		}
	}
}

function dE() {
	this.a7P = !1, this.mL = !1, this.a0S = !1, this.a7Q = [0, 0, 0, 0], this.a7R = function() {
		var lu, lv, m8, m9;
		this.a0S = this.a0S || this.mL, (this.mL || this.a7P && this.a0S) && (lu = bW.a7S[0], lv = bW.a7S[1], m8 = bW.a7S[2], m9 = bW.a7S[3], lu = lu < this.a7Q[0] ? this.a7Q[0] : lu, lv = lv < this.a7Q[1] ? this.a7Q[1] : lv, m8 = m8 > this.a7Q[
				2] ? this.a7Q[2] : m8, m9 = m9 > this.a7Q[3] ? this.a7Q[3] : m9, this.mL = !1, this.a7P = !1, lu === this.a7Q[0] && lv === this.a7Q[1] && m8 === this.a7Q[2] && m9 === this.a7Q[3] ? this.a0T() : lu <= m8 && lv <= m9 && a0k
			.putImageData(a0l, 0, 0, lu, lv, m8 - lu + 1, m9 - lv + 1))
	}, this.a0T = function() {
		this.a0S && this.a7Q[2] >= this.a7Q[0] && this.a7Q[3] >= this.a7Q[1] && a0k.putImageData(a0l, 0, 0, this.a7Q[0], this.a7Q[1], this.a7Q[2] - this.a7Q[0] + 1, this.a7Q[3] - this.a7Q[1] + 1), this.a0S = !1
	}, this.wF = function() {
		this.a7Q[2] >= this.a7Q[0] && this.a7Q[3] >= this.a7Q[1] && a0k.putImageData(a0l, 0, 0, this.a7Q[0], this.a7Q[1], this.a7Q[2] - this.a7Q[0] + 1, this.a7Q[3] - this.a7Q[1] + 1), this.a0S = !1
	}, this.dR = function() {
		var eb, ed;
		this.a7P = !1, this.mL = !1, this.a0S = !1, this.a7Q[0] = bO.ef, this.a7Q[1] = bO.eg, this.a7Q[2] = this.a7Q[3] = 0;
		loop: for (eb = 1; eb < bO.ef - 1; eb++)
			for (ed = bO.eg - 2; 1 < ed; ed--)
				if (1 === a7T[aX.tv(eb, ed) + 2]) {
					this.a7Q[0] = eb;
					break loop
				} loop: for (ed = 1; ed < bO.eg - 1; ed++)
			for (eb = bO.ef - 2; 1 < eb; eb--)
				if (1 === a7T[aX.tv(eb, ed) + 2]) {
					this.a7Q[1] = ed;
					break loop
				} loop: for (eb = bO.ef - 2; 0 < eb; eb--)
			for (ed = bO.eg - 2; 1 < ed; ed--)
				if (1 === a7T[aX.tv(eb, ed) + 2]) {
					this.a7Q[2] = eb;
					break loop
				} loop: for (ed = bO.eg - 2; 0 < ed; ed--)
			for (eb = bO.ef - 2; 1 < eb; eb--)
				if (1 === a7T[aX.tv(eb, ed) + 2]) {
					this.a7Q[3] = ed;
					break loop
				}
	}
}

function L(value, a7U, rZ) {
	var or = "number" == typeof value ? b4.a7V[value] : value;
	if (rZ && b4.a7W() && (or = rZ), a7U)
		for (var eU = a7U.length, a6 = 0; a6 < eU; a6++)
			for (var en = 0; en < 3; en++) or = or.replace("{" + (10 * en + a6) + "}", a7U[a6]);
	return or
}

function bt() {
	this.data = new a7X;
	var a7Y = (new a7Z).L84,
		a7a = (this.a7V = a7Y, !1);
	this.dR = function() {
		var eU, g;
		a7a = !1, "en" !== bf.dj.data[12].value.split("-")[0].toLowerCase() ? bf.dj.data[12].value === bf.dj.data[145].value && 0 < bf.dj.data[146].value && (eU = bf.dj.data[146].value, (g = bf.pR.rf(eU, !1)).length === eU) && !!b7.pK.ys(g) &&
			function(g) {
				var eU = g.length,
					a7g = bf.pR.rf(eU, !0);
				if (eU !== a7g.length) return !1;
				if (!b7.pK.ys(a7g)) return !1;
				for (var kL = a7Y.length, a5A = new Array(kL), a7h = kL === eU, fy = Math.min(eU, kL), a6 = 0; a6 < kL; a6++)
					if (a5A[a6] = a7Y[a6], a6 < eU && a7g[a6] === a5A[a6]) a5A[a6] = g[a6];
					else {
						a7h = !1;
						for (var eo = 0; eo < fy; eo++)
							if (a7g[eo] === a5A[a6]) {
								a5A[a6] = g[eo];
								break
							}
					} return b4.a7V = a5A, a7h
			}(g) || (a7a = !0) : b4.a7V = a7Y
	}, this.dT = function() {
		bc.dS(), a9.dS(), ba.dS(), bZ.dS(), aJ.dR(), ap.dS()
	}, this.a7W = function() {
		return this.a7V === a7Y || !a7Y.length
	}, this.a7i = function() {
		var a7j;
		a7a && (a7a = !1, 0 !== a7Y.length) && (a7j = bf.dj.data[12].value, ax.a7k.a7l(0, a7j.slice(0, 20)))
	}, this.a7m = function(g) {
		g.length === a7Y.length && (this.a7V = g, bf.pr.ps(145, bf.dj.data[12].value), bf.pr.ps(146, g.length), bf.pR.rl(g, !1), bf.pR.rl(a7Y, !0), 0 === aV.xK()) && 5 === n.qL && n.l6.a7n()
	}
}

function a7X() {
	var g = ["aa", "ab", "ace", "ach", "af", "ak", "alz", "am", "ar", "as", "av", "awa", "ay", "az", "ba", "bal", "ban", "bbc", "bci", "be", "bem", "ber", "ber-Latn", "bew", "bg", "bho", "bik", "bm", "bm-Nkoo", "bn", "bo", "br", "bs", "bts", "btx",
		"bua", "ca", "ce", "ceb", "cgg", "ch", "chk", "chm", "ckb", "cnh", "co", "crh", "crs", "cs", "cv", "cy", "da", "de", "din", "doi", "dov", "dv", "dyu", "dz", "ee", "el", "en", "eo", "es", "et", "eu", "fa", "fa-AF", "ff", "fi", "fil", "fj",
		"fo", "fon", "fr", "fur", "fy", "ga", "gaa", "gd", "gl", "gn", "gom", "gu", "gv", "ha", "haw", "he", "hi", "hil", "hmn", "hr", "hrx", "ht", "hu", "hy", "iba", "id", "ig", "ilo", "is", "it", "iw", "ja", "jam", "jv", "jw", "ka", "kac",
		"kek", "kg", "kha", "kk", "kl", "km", "kn", "ko", "kr", "kri", "ktu", "ku", "kv", "ky", "la", "lb", "lg", "li", "lij", "lmo", "ln", "lo", "lt", "ltg", "luo", "lus", "lv", "mad", "mai", "mak", "mam", "mfe", "mg", "mh", "mi", "min", "mk",
		"ml", "mn", "mni-Mtei", "mr", "ms", "ms-Arab", "mt", "mwr", "my", "nb", "ndc-ZW", "ne", "new", "nhe", "nl", "no", "nr", "nso", "nus", "ny", "oc", "om", "or", "os", "pa", "pa-Arab", "pag", "pam", "pap", "pl", "ps", "pt", "pt-PT", "qu",
		"rn", "ro", "rom", "ru", "rw", "sa", "sah", "scn", "sd", "se", "sg", "sh", "shn", "si", "sk", "sl", "sm", "sn", "so", "sq", "sr", "ss", "st", "su", "sus", "sv", "sw", "szl", "ta", "tcy", "te", "tet", "tg", "th", "ti", "tiv", "tk", "tl",
		"tn", "to", "tpi", "tr", "trp", "ts", "tt", "tum", "ty", "tyv", "udm", "ug", "uk", "ur", "uz", "ve", "vec", "vi", "war", "wo", "xh", "yi", "yo", "yua", "yue", "zap", "zh", "zh-CN", "zh-TW", "zu"
	];
	this.a7o = function() {
		for (var a7p = [], eU = g.length, a6 = 0; a6 < eU; a6++) a7p.push(g[a6]);
		for (eU++, a7p.unshift(bf.dj.data[12].rZ), a6 = 1; a6 < eU; a6++)
			if (a7p[a6] === a7p[0]) {
				a7p.splice(a6, 1), eU--;
				break
			} try {
			if ("undefined" == typeof Intl) return a7p;
			for (a6 = 0; a6 < eU; a6++) {
				var or = new Intl.DisplayNames([a7p[a6]], {
					type: "language"
				}).of(a7p[a6]);
				or !== a7p[a6] && (a7p[a6] = a7p[a6] + ": " + or)
			}
		} catch (e) {
			console.log("error 3646: " + e)
		}
		return a7p
	}, this.a7r = function(a7s) {
		for (var or = bf.dj.data[12].value, eU = a7s.length, a6 = 0; a6 < eU; a6++)
			if (or === a7s[a6].split(":")[0]) return a6;
		return 0
	}
}

function a7Z() {
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
	var eb, ed, j5, a7t, a7u, a7v, a7w, a7x, a7y, a0, zT, a7z;
	this.ui = !1, this.dR = function(or, a80) {
		if (1 === r.id && 13 <= r.ey && r.ey < 18) return a80 ? void(zT = or) : zT !== or ? void 0 : void r.rd.saveString(200, or);
		a80 && (zT = or, (a7z = document.createElement("a")).appendChild(document.createTextNode(zT)), this.ui = !0, a7z.title = zT, a7z.target = "_blank", a7z.href = zT, a7z.style.textAlign = "center", a7z.style.color = u.mV, a7z.style
			.position = "absolute", a7z.style.padding = "0px", a7z.style.margin = "0px", this.resize(), document.body.appendChild(a7z), bb.dZ = !0)
	}, this.qg = function() {
		return !(!this.ui || (document.body.removeChild(a7z), this.ui = !1))
	}, this.gj = function(hb, hc) {
		return !!this.ui && ((hb < eb || hc < ed || eb + a0 < hb || ed + j5 < hc || eb + a0 - a7t < hb && hc < ed + a7t) && (bb.dZ = !0, this.ui = !1, document.body.removeChild(a7z)), !0)
	}, this.resize = function() {
		var a1e, a81;
		this.ui && (a7x = Math.floor(.8 * (r.s.v8() ? au.a0 > au.j5 ? .6 : .55 : .4) * au.pC), a7t = Math.floor(.15 * a7x), a7u = Math.floor(.35 * a7t), a7v = Math.floor(.5 * a7t), a7w = Math.floor(2.5 * a7v), j5 = a7t + a7u + 3 * a7v, a1e = b7
			.pA.qR(1, a7u / au.pG), a7y = Math.floor(au.pG * aL.measureText(zT, a1e)), a81 = a0 = (a7x < a7y ? a7y : a7x) + 2 * a7w, a0 = Math.min(a0, au.a0 - 2 * (r.s.v8() ? 2 : 1) * bY.gap), a1e = b7.pA.qR(1, a0 / a81 * a7u / au.pG), a7y =
			Math.floor(au.pG * aL.measureText(zT, a1e)), eb = Math.floor((au.a0 - a0) / 2), ed = Math.floor((au.j5 - j5) / 2), a7z.style.font = a1e, a7z.style.top = Math.floor((ed + 1.4 * a7v + a7t) / au.pG) + "px", a7z.style.left = Math
			.floor((eb + (a0 - a7y) / 2) / au.pG) + "px")
	}, this.r9 = function() {
		this.ui && (rA.fillStyle = u.mS, rA.fillRect(eb, ed + a7t, a0, j5 - a7t), rA.fillStyle = u.nN, rA.fillRect(eb, ed, a0, a7t), rA.fillStyle = u.mV, rA.lineWidth = bY.vB, rA.strokeStyle = u.mV, rA.strokeRect(eb, ed, a0, j5), rA.fillRect(eb,
				ed + a7t, a0, bY.vB), rA.font = b7.pA.qR(1, .48 * a7t), b7.pA.textAlign(rA, 1), b7.pA.textBaseline(rA, 1), rA.fillText("You are leaving Territorial.io!", Math.floor(eb + (a0 - .5 * a7t) / 2), Math.floor(ed + .55 * a7t)), aH
			.a1q(Math.floor(eb + a0 - .8 * a7t), Math.floor(ed + .25 * a7t), Math.floor(.5 * a7t)), rA.setTransform(1, 0, 0, 1, 0, 0))
	}
}

function dV() {
	var gap, a6T, eb = [0, 0, 0, 0, 0],
		ed = [0, 0, 0, 0, 0],
		m6 = [1, 1, 1, 1, 1],
		ex = [!0, !0, !0, !1, !1],
		ep = (this.fH = [!0, !0, !0, !1, !1], null);
	this.a82 = function(z1, a83) {
		ep = z1, ex = a83, a6T = [bG.a84, bG.xE, bG.a85, bG.a85, bG.a86], this.dR()
	}, this.dR = function() {
		if (aW.ql()) {
			var a6, qT = Math.floor((r.s.v8() ? .261 : .195) * au.pC),
				qU = Math.floor(.9 * qT),
				a49 = Math.floor(.17 * qU);
			if (gap = r.s.v8() ? 2 * bY.gap : bY.gap, m6[0] = qT / ep[0].width, m6[1] = qU / ep[1].width, m6[2] = a49 / ep[2].height, m6[3] = a49 / ep[3].height, m6[4] = a49 / ep[4].height, m6[2] *= 1.7, m6[3] *= 1.07, eb[0] = gap, eb[1] = gap,
				eb[2] = gap, eb[3] = gap, eb[4] = Math.floor(2 * gap + m6[3] * ep[3].width), ed[0] = gap, ed[1] = ed[0] + gap + m6[0] * ep[0].height, ed[2] = ed[1] + gap + m6[1] * ep[1].height, ed[3] = ed[2] + gap + m6[2] * ep[2].height, ed[4] =
				ed[3], !ex[0])
				for (a6 = 0; a6 < 5; a6++) ed[a6] -= m6[0] * ep[0].height + gap;
			if (!ex[1])
				for (a6 = 2; a6 < 5; a6++) ed[a6] -= m6[1] * ep[1].height + gap
		}
	}, this.ui = function() {
		return !(7 === aV.xK() && r.s.v8())
	}, this.gj = function(hb, hc) {
		if (ep && this.ui())
			for (var a6 = ex.length - 1; 0 <= a6; a6--)
				if (ex[a6] && this.fH[a6] && eb[a6] < hb && ed[a6] < hc && hb < eb[a6] + m6[a6] * ep[a6].width && hc < ed[a6] + m6[a6] * ep[a6].height) return n.o(9, n.qL, new a87("You are leaving Territorial.io.", b7.pA.zS(a6T[a6]))), !0;
		return !1
	}, this.r9 = function() {
		if (ep && this.ui()) {
			var a6;
			for (rA.imageSmoothingEnabled = !0, a6 = 0; a6 < 5; a6++) ex[a6] && this.fH[a6] && (rA.setTransform(m6[a6], 0, 0, m6[a6], eb[a6], ed[a6]), rA.drawImage(ep[a6], 0, 0));
			rA.setTransform(1, 0, 0, 1, 0, 0)
		}
	}
}

function cG() {
	var a88, a89, a8A;

	function a8F(a6) {
		var button = aT.pg[a6],
			eb = button.eb,
			ed = button.ed,
			a0 = button.a0,
			j5 = button.j5;
		rA.fillStyle = button.a8D, rA.fillRect(eb, ed, a0, j5), a6 === a88 && (rA.fillStyle = a8A, rA.fillRect(eb, ed, a0, j5)), rA.lineWidth = bY.vB, rA.strokeStyle = a89, rA.strokeRect(eb, ed, a0, j5),
			function(button) {
				var eb = button.eb,
					ed = button.ed,
					a0 = button.a0,
					j5 = button.j5;
				b7.pA.textAlign(rA, 1), b7.pA.textBaseline(rA, 1), rA.font = button.font, rA.fillStyle = a89, rA.fillText(button.a2t, Math.floor(eb + a0 / 2), Math.floor(ed + j5 / 2 + .1 * button.fontSize))
			}(button)
	}
	this.a0 = 0, this.j5 = 0, this.ed = 0, this.gap = 0, this.dR = function() {
		a88 = -1, a89 = u.mV, a8A = "rgba(255,255,255,0.16)", this.pg = new Array(7), this.j5 = Math.floor((r.s.v8() ? .123 : .093) * au.pC), this.a0 = Math.floor((r.s.v8() ? 3.96 : 4.2) * this.j5), this.gap = Math.floor(.025 * this.a0);
		var a8B = Math.floor(.26 * this.j5),
			a8C = b7.pA.qR(1, a8B);
		this.pg[0] = {
			eb: 0,
			ed: 0,
			a0: Math.floor(.6 * this.a0 - this.gap / 2),
			j5: this.j5,
			a2t: "Multiplayer",
			font: a8C,
			a8D: "rgba(22,88,22,0.8)",
			fontSize: a8B
		}, a8B = Math.floor(.18 * this.j5), a8C = b7.pA.qR(1, a8B), this.pg[1] = {
			eb: 0,
			ed: 0,
			a0: this.a0 - this.pg[0].a0 - this.gap,
			j5: this.j5,
			a2t: "Single Player",
			font: a8C,
			a8D: "rgba(22,88,88,0.8)",
			fontSize: a8B
		}, this.pg[2] = {
			eb: 0,
			ed: 0,
			a0: this.a0,
			j5: Math.floor(.3 * this.j5),
			a2t: "",
			font: this.pg[1].font,
			a8D: "rgba(100,0,0,0.8)",
			fontSize: this.pg[1].fontSize
		}, this.pg[3] = {
			eb: 0,
			ed: 0,
			a0: this.a0,
			j5: this.j5,
			a2t: "Back",
			font: this.pg[0].font,
			a8D: "rgba(0,0,0,0.8)",
			fontSize: this.pg[0].fontSize
		}, this.pg[4] = {
			eb: 0,
			ed: 0,
			a0: this.a0,
			j5: Math.floor(.3 * this.j5),
			a2t: "The game was updated!",
			font: this.pg[1].font,
			a8D: "rgba(100,0,0,0.8)",
			fontSize: this.pg[1].fontSize
		}, this.pg[5] = {
			eb: 0,
			ed: 0,
			a0: this.pg[0].a0,
			j5: Math.floor(.8 * this.j5),
			a2t: "Reload",
			font: this.pg[0].font,
			a8D: "rgba(0,100,0,0.8)",
			fontSize: this.pg[0].fontSize
		}, this.pg[6] = {
			eb: 0,
			ed: 0,
			a0: this.pg[1].a0,
			j5: this.pg[5].j5,
			a2t: "Back",
			font: this.pg[0].font,
			a8D: "rgba(0,0,0,0.8)",
			fontSize: this.pg[0].fontSize
		}, this.a5D()
	}, this.a5D = function() {
		this.ed = Math.floor(.54 * au.j5), this.pg[0].eb = Math.floor(.5 * au.a0 - .5 * this.a0), this.pg[1].eb = this.pg[0].eb + this.pg[0].a0 + this.gap, this.pg[2].eb = this.pg[3].eb = this.pg[0].eb, this.pg[4].eb = this.pg[5].eb = this.pg[0]
			.eb, this.pg[6].eb = this.pg[1].eb, this.pg[0].ed = Math.floor(.54 * au.j5), this.pg[1].ed = this.pg[0].ed, this.pg[2].ed = Math.floor((au.j5 - this.pg[2].j5 - this.pg[3].j5 - this.gap) / 2), this.pg[3].ed = this.pg[2].ed + this.pg[2]
			.j5 + this.gap, this.pg[4].ed = Math.floor((au.j5 - this.pg[4].j5 - this.pg[5].j5 - this.gap) / 2), this.pg[5].ed = this.pg[6].ed = this.pg[4].ed + this.pg[4].j5 + this.gap
	}, this.a8E = function() {
		a8F(0), a8F(1)
	}, this.a8G = function() {
		a8F(2), a8F(3)
	}, this.a8H = function() {
		a8F(4), a8F(5), a8F(6)
	}, this.xg = function(eb, ed, lE) {
		var a6 = -1;
		return 0 === aV.xK() ? a6 = this.yB(eb, ed, 0, 2) : 3 === aV.xK() ? a6 = this.yB(eb, ed, 3, 1) : 5 === aV.xK() && (a6 = this.yB(eb, ed, 5, 2)), a88 !== a6 && (a88 = a6, lE) && (bb.dZ = !0), -1 !== a6 && (aO.y5(), !0)
	}, this.yB = function(eb, ed, a8I, size) {
		for (var a6 = a8I; a6 < a8I + size; a6++)
			if (eb >= this.pg[a6].eb && ed >= this.pg[a6].ed && eb <= this.pg[a6].eb + this.pg[a6].a0 && ed <= this.pg[a6].ed + this.pg[a6].j5) return a6;
		return -1
	}
}

function a8K() {
	function a8R(a6D) {
		return a6D < 0 ? 0 : 255 < a6D ? 255 : Math.floor(a6D)
	}
	this.a0 = 0, this.j5 = 0, this.ui = !1, this.a8L = 0, this.gap = 0, this.a8M = 0, this.a7t = 0, this.a8N = 0, this.a8O = 0, this.a8P = 0, this.colors = null, this.dR = function() {
		this.ui = !0, this.a8L = 0, this.resize()
	}, this.resize = function() {
		this.ui && (au.a0 < 1.4 * au.j5 ? this.a0 = Math.floor((r.s.v8() ? .94 : .43) * au.a0) : (this.j5 = Math.floor((r.s.v8() ? .88 : .43) * au.j5), this.a0 = Math.floor(1.4 * this.j5)), this.j5 = this.a0 / 1.4, this.gap = this.a0 / 32, this
			.a7t = Math.floor(.25 * this.j5), this.a8N = (this.j5 - this.a7t - 3 * this.gap) / 2, this.a8O = this.a0 - 3 * this.gap - this.a8N, this.a8P = (this.j5 - this.a7t - 4 * this.gap) / 3)
	}, this.a8Q = function() {
		this.colors = [
			[0, 0, 0],
			[0, 0, 0]
		];
		var or = bf.dj.data[103].value.split("");
		if (or.length < 6)
			for (var eo = 2; 0 <= eo; eo--) this.colors[0][eo] = a8R(256 * Math.random());
		else
			for (var a6 = 2; 0 <= a6; a6--) this.colors[0][a6] = a8R(4 * (10 * parseInt(or[2 * a6]) + parseInt(or[2 * a6 + 1])));
		this.a8S()
	}, this.a8T = function() {
		return [bH.ew(this.colors[0][0], 4), bH.ew(this.colors[0][1], 4), bH.ew(this.colors[0][2], 4)]
	}, this.xj = function(kg, kh, deltaY) {
		var lu = (au.a0 - this.a0) / 2;
		kh -= (au.j5 - this.j5) / 2 + this.a7t, (kg -= lu) < 0 || kh < 0 || kg >= this.a0 || kh >= this.j5 - this.a7t || (lu = Math.floor(3 * kh / (this.j5 - this.a7t)), this.colors[this.a8M][lu] = a8R(this.colors[this.a8M][lu] + (deltaY < 0 ?
			1 : -1) * Math.max(Math.abs(.05 * deltaY), 1)), bb.dZ = !0)
	}, this.gj = function(kg, kh) {
		this.a8L = 0;
		var lu = (au.a0 - this.a0) / 2;
		return kh -= (au.j5 - this.j5) / 2, (kg -= lu) < 0 || kh < 0 || kg >= this.a0 - 1 || kh >= this.j5 - 1 || kg > this.a0 - (.4 * this.a7t + 3 * this.gap) && kh < this.a7t ? (this.ui = !1, !(bb.dZ = !0)) : kg < this.gap || kh < this.gap +
			this.a7t || kg >= this.a0 || kh >= this.j5 - this.gap || (kg < this.gap + this.a8N ? (kh < this.gap + this.a7t + this.a8N && 0 !== this.a8M && (this.a8M = 0, bb.dZ = !0), !0) : kg < this.gap + this.a8N || (kg -= 2 * this.gap + this
				.a8N, kh < this.gap + this.a7t + this.a8P ? (this.a8L = 1, this.colors[this.a8M][0] = a8R(256 * kg / this.a8O), bb.dZ = !0) : kh < 2 * this.gap + this.a7t + this.a8P || (kh < 2 * this.gap + this.a7t + 2 * this.a8P ? (this
					.a8L = 2, this.colors[this.a8M][1] = a8R(256 * kg / this.a8O), bb.dZ = !0) : !(kh >= 3 * this.gap + this.a7t + 2 * this.a8P) || (this.a8L = 3, this.colors[this.a8M][2] = a8R(256 * kg / this.a8O), bb.dZ = !0))))
	}, this.a8S = function() {
		for (var eo = 2; 0 <= eo; eo--) this.colors[0][eo] = a8R(this.colors[0][eo])
	}, this.a8U = function() {
		for (var ex, or = "", a6 = 0; a6 < 3; a6++)(ex = bH.ew(this.colors[0][a6], 4)) < 10 && (or += "0"), or += ex.toString();
		return or
	}, this.xg = function(kg) {
		0 !== this.a8L && (kg -= 2 * this.gap + this.a8N + (au.a0 - this.a0) / 2, this.colors[this.a8M][this.a8L - 1] = a8R(256 * kg / this.a8O), bb.dZ = !0)
	}, this.y4 = function() {
		0 < this.a8L && (this.a8L = 0, this.a8S(), bf.pr.ps(103, this.a8U()), bb.dZ = !0)
	}, this.r9 = function() {
		var lu = (au.a0 - this.a0) / 2,
			lv = (au.j5 - this.j5) / 2;
		rA.setTransform(1, 0, 0, 1, lu, lv), rA.fillStyle = u.mS, rA.fillRect(0, this.a7t, this.a0, this.j5 - this.a7t), rA.fillStyle = u.me, rA.fillRect(0, 0, this.a0, this.a7t), rA.fillStyle = u.mV, rA.lineWidth = bY.vB, rA.strokeStyle = u.mV,
			rA.strokeRect(-1, -1, this.a0 + 2, this.j5 + 2), rA.fillRect(0, this.a7t, this.a0, bY.vB), rA.font = b7.pA.qR(1, .31 * this.a7t), b7.pA.textBaseline(rA, 1), b7.pA.textAlign(rA, 1), rA.fillText("Choose Your Nation's Color!", Math
				.floor((this.a0 - this.gap - .4 * this.a7t) / 2), Math.floor(.55 * this.a7t)), this.a8V(0), rA.lineWidth = bY.vB, this.a8W(0), this.a8W(1), this.a8W(2), aH.a1q(Math.floor(lu + this.a0 - .4 * this.a7t - this.gap), Math.floor(lv +
				.3 * this.a7t), Math.floor(.4 * this.a7t)), rA.setTransform(1, 0, 0, 1, 0, 0)
	}, this.a8V = function(a6) {
		var hG = this.colors[a6][0],
			qh = this.colors[a6][1],
			a6 = this.colors[a6][2];
		rA.fillStyle = "rgb(" + hG + "," + qh + "," + a6 + ")", rA.fillRect(this.gap, this.a7t + this.gap, this.a8N, 2 * this.a8N + this.gap), rA.lineWidth = bY.vB, rA.strokeStyle = u.mV, rA.strokeRect(this.gap, this.a7t + this.gap, this.a8N, 2 *
			this.a8N + this.gap), rA.fillStyle = hG + qh + a6 < 306 && qh < 150 ? u.mV : u.mM, rA.font = b7.pA.qR(1, .32 * this.a8P), b7.pA.textAlign(rA, 1), b7.pA.textBaseline(rA, 1), rA.rotate(-Math.PI / 2), rA.fillText("National Color",
			Math.floor(-1.5 * this.gap - this.a7t - this.a8N), Math.floor(this.gap + .5 * this.a8N)), rA.rotate(Math.PI / 2)
	}, this.a8W = function(a6) {
		rA.fillStyle = "rgb(" + (0 === a6 ? 150 : 2 === a6 ? 30 : 0) + "," + (1 === a6 ? 130 : 2 === a6 ? 30 : 0) + "," + (2 === a6 ? 220 : 0) + ")", rA.fillRect(2 * this.gap + this.a8N, this.a7t + this.gap + a6 * (this.gap + this.a8P), Math
				.floor(this.colors[this.a8M][a6] * this.a8O / 255), this.a8P), rA.strokeStyle = u.mV, rA.strokeRect(2 * this.gap + this.a8N, this.a7t + this.gap + a6 * (this.gap + this.a8P), this.a8O, this.a8P), rA.fillStyle = u.mV, rA.font = b7
			.pA.qR(1, .32 * this.a8P), b7.pA.textBaseline(rA, 1), b7.pA.textAlign(rA, 0), rA.fillText((0 === a6 ? "Red: " : 1 === a6 ? "Green: " : "Blue: ") + this.colors[0][a6].toString(), 3 * this.gap + this.a8N, Math.floor(this.a7t + this
				.gap + a6 * (this.gap + this.a8P) + .53 * this.a8P))
	}
}

function cH() {
	var a8X, a8Y, a33, a3D, a41, a8Z, a8a, a8b, a8c, a1e, fontSize, lf, a8d, a8f, a8e = 0;

	function a8i() {
		return ax.l6.a8j[(a8d + a8e) % ax.l6.a8k]
	}

	function a8g() {
		a8d++, lf = bb.e2, ax.l6.a8l(a8i(), 4) && (a8f = !0, ax.a8m.a8n(a8i()))
	}

	function a8o() {
		0 === a8d ? l.xS(3249) : 1 === a8d && __fx.customLobby.isActive() ? (l.xS(3249), __fx.customLobby.setActive(false)) : (a8d === ax.l6.a8k - 1 && (a8d = -1), a8g())
	}

	function a8v(ed, a4u, a8u) {
		var lu = Math.floor((au.a0 - a3D) / 2) + a8a,
			m8 = lu + Math.floor(a8u * (a3D - 2 * a8a));
		rA.lineWidth = a4u, rA.beginPath(), rA.moveTo(lu, ed), rA.lineTo(m8, ed), rA.lineTo(Math.floor(lu - a8a + a8u * a3D), ed + a33), rA.lineTo(lu - a8a, ed + a33), rA.closePath()
	}
	this.dR = function() {
		aV.setState(6), a8X = 0, a8Y = 1, a8b = "rgba(0,220,120,0.4)", a8c = "rgba(0,0,0,0.8)", this.resize(), bb.dZ = !0, a8d = 0, a8f = !1, a8g()
	}, this.resize = function() {
		a3D = Math.floor((r.s.v8() ? .5 : .25) * au.pC), a41 = a3D + 12, a33 = Math.floor(.125 * a3D), a8a = 3 * a33, a8Z = Math.floor(.225 * a3D), fontSize = Math.floor(.3 * a33), a1e = b7.pA.qR(0, fontSize)
	}, this.a8h = function(en) {
		a8e = en
	}, this.xL = function(xG) {
		xG === a8i() && (a8f = !1, a8o())
	}, this.a8p = function(xG) {
		6 !== aV.xK() || a8f || (lf = bb.e2, a8f = !0)
	}, this.gj = function(eb, ed) {
		var lu = Math.floor((au.a0 - a41) / 2),
			lv = Math.floor(.5 * (au.j5 - bY.gap - a33 - a8Z)) + a33 + bY.gap;
		return lu < eb && eb < lu + a41 && lv < ed && ed < lv + a8Z && (this.yO(), aT.xg(eb, ed, !1), !0)
	}, this.yO = function() {
		ax.l6.xV(3260), __fx.customLobby.setActive(false), n.l6.xU()
	}, this.iQ = function() {
		6 === aV.xK() && (a8f ? bb.e2 > lf + 12e3 && l.xS(3250) : bb.e2 > lf + 12e3 && a8o(), 100 < (a8X += .07 * a8Y * (a8X < 16 ? 5 + a8X : 84 < a8X ? 105 - a8X : 17)) ? (a8X = 100, a8Y = -1) : a8X < 0 && (a8X = 0, a8Y = 1), a8b = "rgba(0," +
			Math.floor(190 - 1.9 * a8X) + "," + Math.floor(120 - 1.2 * a8X) + "," + (.4 + .004 * a8X) + ")", a8c = "rgba(0," + Math.floor(1.9 * a8X) + "," + Math.floor(1.2 * a8X) + "," + (.8 - .004 * a8X) + ")", bb.dZ = !0)
	}, this.r9 = function() {
		var eb = Math.floor((au.a0 - a41) / 2),
			ed = Math.floor(.5 * (au.j5 - bY.gap - a33 - a8Z));
		! function(title, ed, a4u, a8u) {
			rA.fillStyle = a8c, a8v(ed, a4u, 1), rA.fill(), rA.fillStyle = a8b, a8v(ed, a4u, a8u), rA.fill(), rA.strokeStyle = u.mV, a8v(ed, a4u, 1), rA.stroke(),
				function(a8x, ed) {
					b7.pA.textAlign(rA, 1), b7.pA.textBaseline(rA, 1), rA.font = a1e, rA.fillStyle = u.mV, rA.fillText(a8x, Math.floor(.5 * au.a0), Math.floor(ed + .58 * a33))
				}(title, ed)
		}(L(102), ed, 3, a8X / 100),
		function(eb, ed, a0, j5, a2t) {
			rA.fillStyle = u.mQ, rA.fillRect(eb, ed, a0, j5), rA.lineWidth = 3, rA.strokeStyle = u.mV, rA.strokeRect(eb, ed, a0, j5);
			var eU = Math.floor(.3 * j5);
			b7.pA.textAlign(rA, 1), b7.pA.textBaseline(rA, 1), rA.font = b7.pA.qR(0, eU), rA.fillStyle = u.mV, rA.fillText(a2t, Math.floor(eb + a0 / 2), Math.floor(ed + j5 / 2 + .1 * eU))
		}(eb, ed + a33 + bY.gap, a41, a8Z, L(13))
	}
}

function cI() {
	var e1 = 0;
	this.dR = function() {
		aT.dR(), e1 = 0
	}, this.setState = function(a8y) {
		e1 = a8y
	}, this.xK = function() {
		return e1
	}, this.a8z = function() {
		this.setState(8), ap.xW(), n.rw()
	}, this.yF = function(e) {
		if (!bO.sm) return !1;
		if (!(bb.e2 < 400)) {
			if ("Enter" === e.key || "Escape" === e.key) {
				if (this.a90()) return !0;
				if ("Enter" === e.key) {
					if (0 === e1) return !0;
					if (7 === e1) return !0
				}
			}
			return !1
		}
	}, this.a91 = function() {
		bV.resize()
	}, this.a90 = function() {
		return !!bV.qg()
	}, this.gj = function(eb, ed) {
		!bO.sm || bV.gj(eb, ed) || 6 === e1 && aU.gj(eb, ed) || bU.gj(eb, ed) || (aO.gj(eb, ed), 0 !== e1 && 7 === e1 && ap.gj(eb, ed))
	}, this.xg = function(eb, ed) {
		!aO.a56 && aT.xg(eb, ed, !0) || aO.xg(eb, ed)
	}, this.click = function(eb, ed) {
		aO.y6()
	}, this.xj = function(eb, ed, deltaY) {}, this.a92 = function() {
		aT.a5D(), 0 !== e1 && 7 === e1 && ap.resize(), bb.dZ = !0
	}, this.r9 = function() {
		8 !== e1 && 10 !== e1 && (rA.imageSmoothingEnabled = !0, this.uK(), 0 !== e1 && (aO.r9(), aJ.r9(), this.a93(), bU.r9()), 0 !== e1 && (6 === e1 ? aU.r9() : 7 === e1 && ap.r9()), bV.r9(), n.r9())
	}, this.uK = function() {
		var a95, a94;
		if (__fx.makeMainMenuTransparent) rA.clearRect(0, 0, au.a0, au.j5);
		else bO.sm ? (a94 = au.a0 / bO.ef, a95 = au.j5 / bO.eg, rA.setTransform(a94 = a95 < a94 ? a94 : a95, 0, 0, a94, Math.floor((au.a0 - a94 * bO.ef) / 2), Math.floor((au.j5 - a94 * bO.eg) / 2)), rA.drawImage(bO.so, 0, 0), rA.setTransform(1,
			0, 0, 1, 0, 0), rA.fillStyle = u.mQ) : rA.fillStyle = u.mM, rA.fillRect(0, 0, au.a0, au.j5)
	}, this.a93 = function() {
		var ed = Math.floor(.3 * au.j5),
			canvas = aW.a96("territorial.io"),
			hD = (hD = 1.75 * au.j5 / canvas.width) * canvas.width < .98 * au.a0 ? .98 * au.a0 / canvas.width : hD,
			eb = (rA.globalAlpha = .15, rA.imageSmoothingEnabled = !1, Math.floor(.5 * (au.a0 - hD * canvas.width))),
			eb = Math.floor(eb / hD),
			ed = Math.floor(ed - .5 * canvas.height * hD),
			ed = Math.floor(ed / hD);
		rA.setTransform(hD, 0, 0, hD, eb, ed), rA.drawImage(canvas, eb, ed), rA.setTransform(1, 0, 0, 1, 0, 0), rA.globalAlpha = 1, rA.imageSmoothingEnabled = !0
	}
}

function cj() {
	var a7, a99, a9A, a9B;
	this.a97 = 0, this.a98 = 0, this.dR = function() {
		var canvas, m6;
		7 === aV.xK() && (a7 = bD.a7, a99 = 0, a9A = bb.e2 + 4500, a9B = ax.a2Z.a9C() ? 2 : 0, aV.setState(10), rA.imageSmoothingEnabled = !0, aV.uK(), canvas = aW.a96("loading"), m6 = (r.s.v8() ? .396 : .25) * au.pC / canvas.width, rA
			.setTransform(m6, 0, 0, m6, Math.floor((au.a0 - m6 * canvas.width) / 2), Math.floor((au.j5 - m6 * canvas.height) / 2)), rA.imageSmoothingEnabled = !1, rA.drawImage(canvas, 0, 0), rA.setTransform(1, 0, 0, 1, 0, 0))
	}, this.lC = function() {
		0 < a9B && bb.e2 > a9A && (a9B--, a9A += 4500, 0 === bb.a9D) && 0 === bb.jY() && (0 === a9B && ax.l6.xN < ax.l6.a9E && (ax.l6.xN += ax.l6.a9F), ax.l6.a8l(ax.l6.xN, 5))
	}, this.a9G = function() {
		var g3, a6;
		return 10 === aV.xK() && (g3 = bD.a7, a6 = bD.oA, ax.a2Z.a9H(a7), a7 = null, bD.dR(g3), bD.oA = a6, !0)
	}, this.a9I = function() {
		10 === aV.xK() && 2 <= ++a99 && (ax.a2Z.a9H(a7), a7 = null)
	}
}

function cg() {
	var a9K, a9L, a9M, a9N, a9O, a9P, a9Q, p5, a9S, a9U, a9V, a9W, a9X, a9Z, a9a, a9b, a9c, a9d, a9R = 48,
		a9Y = [0, 0, 0, 0];

	function a9h(a6, nk) {
		a6 = a9Q[a6].getContext("2d", {
			alpha: !0
		});
		a6.clearRect(0, 0, a9R, a9R), ae.sr.vC(nk, a6, 0, 0, a9R)
	}

	function a9g(a6, z1) {
		var a6 = a9Q[a6].getContext("2d", {
				alpha: !0
			}),
			zoom = (a6.clearRect(0, 0, a9R, a9R), a9R / z1.width),
			e3 = a9R / z1.height,
			zoom = e3 < zoom ? e3 : zoom;
		a6.imageSmoothingEnabled = !0, a6.setTransform(zoom, 0, 0, zoom, Math.floor((a9R - zoom * z1.width) / 2), Math.floor((a9R - zoom * z1.height) / 2)), a6.drawImage(z1, 0, 0), a6.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a9l(ep, hG, a9o, hE) {
		hE.beginPath(), hE.moveTo(ep, ep), hE.lineTo(ep + Math.cos(a9o) * hG, ep + Math.cos(a9o + 1.5 * Math.PI) * hG), hE.stroke()
	}

	function aA4() {
		if (7 === aV.xK()) {
			for (var hN, z1, hE, e3, en = -1, a6 = p5.length - 1; 0 <= a6; a6--)
				if (null === p5[a6].canvas) {
					en = a6;
					break
				} - 1 !== en && (null !== (hN = a9s(p5[en].a9w, p5[en].a9x)) ? p5[en].canvas = hN : (hN = bO.aA5(p5[en].a9w, p5[en].a9x), (z1 = document.createElement("canvas")).width = 128, z1.height = 128, hE = z1.getContext("2d", {
				alpha: !1
			}), e3 = 128 / hN.eg, e3 = Math.max(128 / hN.ef, e3), hE.imageSmoothingEnabled = !0, hE.setTransform(e3, 0, 0, e3, (128 - e3 * hN.ef) / 2, (128 - e3 * hN.eg) / 2), hE.drawImage(hN.so, 0, 0), p5[en].canvas = z1), bb.dZ = !0)
		}
	}

	function a9s(a9w, a9x) {
		for (var a6 = p5.length - 1; 0 <= a6; a6--)
			if (null !== p5[a6].canvas && p5[a6].a9w === a9w && p5[a6].a9x === a9x) return p5[a6].canvas;
		return null
	}
	this.dS = function() {
			a9X = [L(103), L(104), L(105), L(106)]
		}, this.dR = function() {
			var a6;
			for (a9d = 0, a9U = -1, aV.setState(7), p5 = [], this.resize(), a9Q = new Array(13), a6 = a9Q.length; 0 <= a6; a6--) a9Q[a6] = document.createElement("canvas"), a9Q[a6].width = a9R, a9Q[a6].height = a9R;
			for (a6 = 0; a6 < 7; a6++) ! function(fy) {
				var a9j, hE = a9Q[fy - 2].getContext("2d", {
						alpha: !0
					}),
					a9i = 1.5 * Math.PI,
					ep = Math.floor(.5 * a9R),
					hG = Math.floor(.48 * a9R);
				hE.lineWidth = 2, hE.strokeStyle = u.mV, hE.clearRect(0, 0, a9R, a9R);
				for (var a6 = 0; a6 < fy; a6++) a9j = a9i + 2 * Math.PI / fy,
					function(a6, ep, hG, a9i, a9j, hE) {
						hE.fillStyle = bc.a9n[a6], hE.beginPath(), hE.arc(ep, ep, hG, a9i, a9j), hE.lineTo(ep, ep), hE.fill()
					}(a6 + 1, ep, hG, a9i, a9j, hE), 0 !== a6 && a9l(ep, hG, a9i, hE), a9i = a9j;
				a9l(ep, hG, 1.5 * Math.PI, hE),
					function(ep, hG, hE) {
						hE.beginPath(), hE.arc(ep, ep, hG, 0, 2 * Math.PI), hE.stroke()
					}(ep, hG, hE)
			}(a6 + 2);
			a9g(7, aW.get(4)), a9h(8, ae.uf.v0 + ae.uf.vH), a9h(9, ae.uf.v0 + ae.uf.vF), a9h(10, 1024 - ae.uf.ux), a9g(11, aW.get(19)), a9g(12, aW.get(20)), bb.dZ = !0
		}, this.yN = function() {
			this.xW(), ax.l6.xV(3240), __fx.customLobby.setActive(false), aV.setState(0), n.o(5, 5)
		},
		__fx.customLobby.setLeaveFunction(() => this.yN()), this.xW = function() {
			p5 = [], a9Q = []
		}, this.a31 = function() {
			return a9W
		}, this.resize = function() {
			var a9p, sa, a4H, a9q;
			for (a9M = [0, 0], a9S = [0, 0, 0, 0], a9c = r.s.v8() ? (a9V = Math.floor(.8 * .4 * au.pC), a9W = Math.floor(.56 * a9V), a9S[0] = bY.gap, au.a0 < au.j5 ? (a9S[1] = a9W + 2 * bY.gap, a9S[2] = au.a0 - 3 * a9S[0], a9S[3] = au.j5 - 3 * bY
					.gap - a9W, a9a = Math.floor(.95 * a9W), a9b = Math.floor((au.a0 - a9V - bY.gap) / 2), Math.floor(bY.gap + a9W / 2)) : (a9S[1] = bY.gap, a9S[2] = au.a0 - 3 * bY.gap - a9V, a9S[3] = au.j5 - 2 * bY.gap, a9a = Math.floor(.8 *
					a9V), a9S[3] - a9W < a9V && (a9a = Math.floor(.8 * (a9S[3] - a9W)), a9a = a2E(a9W, a9a)), a9b = Math.floor(au.a0 - a9V / 2 - bY.gap), a2E(a9c = Math.floor(bY.gap + a9W + (a9S[3] - a9W) / 2), Math.floor(a9W + 2 * bY.gap +
					a9a / 2)))) : (a9V = Math.floor(.2016 * au.pC), a9W = Math.floor(.56 * a9V), a9S[2] = Math.floor(.5 * au.a0), a9S[3] = Math.floor(.5 * au.j5), a9S[1] = Math.floor(.45 * (au.j5 - a9S[3])), a9S[0] = Math.floor((au.a0 - a9S[2]) / 2),
					a9a = Math.floor(.75 * a9W), a9b = Math.floor(au.a0 / 2), Math.floor(a9S[1] + a9S[3] + (au.j5 - a9S[3] - a9S[1]) / 2)), a9Z = b7.pA.qR(1, .65 * a9W / 4), a9p = sa = 1; a9p * sa < p5.length;) a9S[3] / (sa + 1) < a9S[2] / (a9p +
				1) ? a9p++ : sa++;
			a4H = (a9S[2] - (a9p - 1) * bY.gap) / a9p, a9q = (a9S[3] - (sa - 1) * bY.gap) / sa, a9K = a4H < a9q ? a4H : a9q, a9L = Math.floor(a9K), a9P = b7.pA.qR(1, .5 * a9K / 5), a9M[0] = a9p, a9M[1] = sa, a9N = a9S[0] + Math.floor((a9S[2] - a9M[
				0] * a9K - (a9M[0] - 1) * bY.gap) / 2), a9O = a9S[1] + Math.floor((a9S[3] - a9M[1] * a9K - (a9M[1] - 1) * bY.gap) / 2)
		}, this.ps = function(a9r, g3) {
			var a6, e3, canvas, eU = p5.length;
			for (a9Y = a9r, a6 = 0; a6 < g3.length; a6++) canvas = a9s(g3[a6].eA, g3[a6].mapSeed), p5.push({
				a9t: g3[a6].id,
				a9u: g3[a6].a9u,
				a9v: g3[a6].isContest,
				a9w: g3[a6].eA,
				a9x: g3[a6].mapSeed,
				joined: g3[a6].a9y,
				a2y: g3[a6].a8u,
				a9z: g3[a6].a9z,
				canvas: canvas,
				aA0: g3[a6].aA0,
				aA1: g3[a6].aA1,
				aA2: g3[a6].aA2
			});
			for (a6 = eU - 1; 0 <= a6; a6--) p5.shift();
			if (-1 !== a9U)
				for (e3 = a9U, a9U = -1, a6 = p5.length - 1; 0 <= a6; a6--)
					if (p5[a6].a9t === e3) {
						a9U = e3;
						break
					}(p5.length > a9d || p5.length < a9d) && (a9d = p5.length, this.resize()), this.aA3(), bb.dZ = !0
		}, this.aA3 = function() {
			for (var a6 = p5.length - 1; 0 <= a6; a6--) null === p5[a6].canvas && setTimeout(aA4, 0)
		}, this.gj = function(eb, ed) {
			return 4 * ((eb - a9b) * (eb - a9b) + (ed - a9c) * (ed - a9c)) <= a9a * a9a ? (this.yN(), aT.xg(eb, ed, !1), !0) : function(eb, ed) {
				var en, eo, lu, lv;
				if (0 !== p5.length) {
					var a6 = 0;
					for (lv = a9O, eo = 0; eo < a9M[1]; eo++) {
						for (lu = a9N, en = 0; en < a9M[0]; en++) {
							if (lu < eb && eb < lu + a9K && lv < ed && ed < lv + a9K) return ax.a8m.aA7(p5[a6].a9t), a9U = p5[a6].a9t !== a9U ? p5[a6].a9t : -1, bb.dZ = !0;
							if (++a6 >= p5.length) return !1;
							lu += a9K + bY.gap
						}
						lv += a9K + bY.gap
					}
				}
				return !1
			}(eb, ed)
		}, this.r9 = function() {
			var en, eo, eb, hG, zoom, a6 = 0,
				ed = a9O;
			if (rA.imageSmoothingEnabled = !0, rA.lineWidth = 3, hG = Math.floor(.5 * a9a), rA.fillStyle = u.mQ, rA.beginPath(), rA.arc(a9b, a9c, hG, 0, 2 * Math.PI), rA.fill(), rA.strokeStyle = u.mV, rA.beginPath(), rA.arc(a9b, a9c, hG, 0, 2 * Math
					.PI), rA.stroke(), hG = aW.get(0).height, zoom = .6 * a9a / hG, rA.setTransform(zoom, 0, 0, zoom, Math.floor(a9b - .56 * zoom * aW.get(0).width), Math.floor(a9c - .5 * zoom * hG)), rA.drawImage(aW.get(0), 0, 0), rA.setTransform(1,
					0, 0, 1, 0, 0), function() {
					rA.fillStyle = u.mQ, rA.fillRect(au.a0 - a9V - bY.gap, bY.gap, a9V, a9W), 0 <= a9U ? (rA.fillStyle = u.mn, rA.fillRect(au.a0 - a9V - bY.gap, bY.gap, a9V, Math.floor(.25 * a9W))) : (rA.fillStyle = u.nE, rA.fillRect(au.a0 - a9V - bY
						.gap, bY.gap + Math.floor(.25 * a9W), a9V, Math.floor(.25 * a9W)));
					rA.strokeStyle = u.mV, rA.strokeRect(au.a0 - a9V - bY.gap, bY.gap, a9V, a9W), rA.fillStyle = u.mV, rA.font = a9Z, b7.pA.textBaseline(rA, 1);
					for (var ed, aAB = Math.floor(.04 * a9V), a1t = Math.floor(.08 * a9W), a6 = 3; 0 <= a6; a6--) ed = Math.floor(bY.gap + (a6 + 1) * (a9W + 2 * a1t) / 5 - a1t), b7.pA.textAlign(rA, 0), rA.fillText(a9X[a6], au.a0 - a9V - bY.gap + aAB,
						ed), b7.pA.textAlign(rA, 2), rA.fillText(b7.wu.a04(a9Y[a6]), au.a0 - bY.gap - aAB, ed)
				}(), 0 !== p5.length)
				for (eo = 0; eo < a9M[1]; eo++) {
					for (eb = a9N, en = 0; en < a9M[0]; en++) {
						if (! function(a6, eb, ed) {
								var zoom, eo, aAC, aAE, aAF;
								null === p5[a6].canvas ? (rA.fillStyle = u.mQ, rA.fillRect(eb, ed, a9L, a9L)) : (zoom = a9L / 128, rA.setTransform(zoom, 0, 0, zoom, eb, ed), rA.drawImage(p5[a6].canvas, 0, 0), rA.setTransform(1, 0, 0, 1, 0, 0));
								a9U === p5[a6].a9t ? (function(eb, ed) {
									var qT = Math.floor(.2 * a9L),
										qU = Math.floor(.3 * qT);
									rA.fillStyle = u.mp, rA.fillRect(eb + a9L - qT, ed, qT, qT), rA.fillStyle = u.mM, rA.fillRect(eb + a9L - qT, ed, 2, qT), rA.fillRect(eb + a9L - qT, ed + qT - 2, qT, 2), aH.a1q(eb + a9L - qT + qU, ed + qU,
										qT - 2 * qU), rA.setTransform(1, 0, 0, 1, 0, 0)
								}(eb, ed), rA.lineWidth = 3, rA.fillStyle = u.mp) : rA.fillStyle = u.mO;
								aAE = Math.floor(a9K / 4), rA.fillRect(eb, ed, aAE, aAE), aAF = Math.floor(ed + .8 * a9K), rA.fillRect(eb, aAF, a9L, Math.floor(a9K / 5)),
									function(a6, eb, ed) {
										var zoom;
										p5[a6].a9v && (a6 = aW.get(4), zoom = .5 * a9K / a6.width, rA.setTransform(zoom, 0, 0, zoom, Math.floor(eb + (a9K - zoom * a6.width) / 2), Math.floor(ed + (a9K - zoom * a6.height) / 2)), rA.globalAlpha = .6, rA
											.drawImage(a6, 0, 0), rA.globalAlpha = 1, rA.setTransform(1, 0, 0, 1, 0, 0))
									}(a6, eb, ed);
								var aAH = new Array(p5[a6].aA0);
								if (p5[a6].aA0) {
									for (eo = aAC = 0; eo < p5[a6].aA0; eo++) p5[a6].aA1[eo] = b7.uQ.zD(p5[a6].aA1[eo], a9P, .4 * a9K), aAH[eo] = ("" === p5[a6].aA1[eo] ? L(107) : "[" + p5[a6].aA1[eo] + "]: ") + p5[a6].aA2[eo];
									for (eo = 0; eo < p5[a6].aA0; eo++) aAC = Math.max(aAC, aL.measureText(aAH[eo], a9P));
									aAC += .05 * a9K, eo = 5 === p5[a6].aA0, aAE = eo ? ed + aAE : Math.max(ed + .8 * a9K - .11 * p5[a6].aA0 * a9K, ed + aAE), aAF = eo ? aAF : Math.min(aAE + .11 * p5[a6].aA0 * a9K + .05 * a9K, aAF), rA.fillRect(eb,
										aAE, aAC, aAF - aAE)
								}
								for (rA.font = a9P, b7.pA.textBaseline(rA, 1), b7.pA.textAlign(rA, 0), rA.fillStyle = u.n9, rA.fillText(p5[a6].joined.toString(), Math.floor(eb + .22 * a9K), Math.floor(ed + .9 * a9K)), rA.fillStyle = u.mV, eo =
									0; eo < p5[a6].aA0; eo++) rA.fillText(aAH[p5[a6].aA0 - eo - 1], Math.floor(eb + .03 * a9K), Math.floor(ed + .77 * a9K - .11 * eo * a9K));
								b7.pA.textAlign(rA, 2), rA.fillStyle = u.mv, rA.fillText(p5[a6].a2y.toString(), Math.floor(eb + .81 * a9K), Math.floor(ed + .9 * a9K)), rA.strokeStyle = a9U === p5[a6].a9t ? u.mo : u.mX, rA.strokeRect(eb, ed, a9L,
									a9L), aAF = Math.floor(.16 * a9K), zoom = aAF / a9R, rA.setTransform(zoom, 0, 0, zoom, Math.floor(eb + .33 * aAF), Math.floor(ed + .33 * aAF)), a9Q.length > p5[a6].a9u && rA.drawImage(a9Q[p5[a6].a9u], 0, 0);
								rA.setTransform(zoom, 0, 0, zoom, Math.floor(eb + .15 * aAF), Math.floor(ed + a9K - 1.08 * aAF)), rA.drawImage(a9Q[11], 0, 0), rA.setTransform(zoom, 0, 0, zoom, Math.floor(eb + a9K - 1.05 * aAF), Math.floor(ed + a9K -
									1.15 * aAF)), rA.drawImage(a9Q[12], 0, 0), rA.setTransform(1, 0, 0, 1, 0, 0)
							}(a6, Math.floor(eb), Math.floor(ed)), ++a6 >= p5.length) return;
						eb += a9K + bY.gap
					}
					ed += a9K + bY.gap
				}
		}
}

function cJ() {
	var aAJ, canvas, wQ, aAK;

	function aAQ(oA, name, aAR, or) {
		wQ[oA] = name, canvas[oA] = new Image, canvas[oA].onload = function() {
			! function(oA, aAR) {
				var zv, zw = null;
				7 === aAR ? zv = b7.yU.zy : 8 === aAR ? (zv = b7.yU.a01, zw = .1) : 3 === aAR ? (zv = b7.yU.zz, zw = .06) : 5 === aAR ? zv = b7.yU.a02 : 6 === aAR ? zv = b7.yU.zx : 4 === aAR && (zv = b7.yU.a03);
				canvas[oA] = b7.yU.zu(canvas[oA], zv, zw)
			}(oA, aAR), aAT()
		}, canvas[oA].onerror = function(e) {
			console.error("Error loading image at index", oA, "Error:", e), aAT()
		}, canvas[oA].src = "data:image/png;base64," + or
	}

	function aAT() {
		aAJ--, aAN()
	}

	function aAN() {
		0 === aAJ && (aAJ = -1, aAP(), bb.dZ = !0, canvas[7] = aAK, canvas[8] = aAK, canvas[9] = aAK, canvas[10] = aAK, 5 === n.qL) && n.aAV().aAW.resize()
	}

	function aAP() {
		aG.a17(), bU.a82([canvas[8], canvas[16], canvas[9], canvas[9], canvas[10]], [2 !== r.id, 1 !== r.id, !0, !0, !0]), ae.sr = new uh, ae.sr.dR(), ar.dS()
	}
	this.dR = function() {
		if (void 0 === canvas) {
			aAJ = 23, canvas = new Array(aAJ), wQ = new Array(aAJ), (aAK = document.createElement("canvas")).width = 1;
			for (var a6 = aAJ - (aAK.height = 1); 0 <= a6; a6--) canvas[a6] = aAK;
			aAP(), aAQ(0, "exit", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAFYAAABGBAMAAACkrn5fAAAAHlBMVEUAAAAiJCI4OjdcXltoameIioejpqPExsPY29j///9xarZIAAAAyUlEQVRIx+3WQQqCQBTG8TdOB5DUI+S6nRcoPIFhu1bBHGGO4Any3TYxAkWTv1DSYr71D4b5mOE9kWmszkeC/ZptT6Ocl+xj5qgtbVR1iZn9VE2wU2uO2Jryhm2h2OaKbdZgu/NKrXVK7f6q1JpaqTWFYpvrUtqhPTTYpst0aBOv2Drltlxh392iu0U1t5I4biX13PZvF7+zvOFWihXWlNy+aqZ/M3LcivXcds1xK9kKK3GYAVtYe+8CZ/c/7Br9blSNcgn75O/tE26TasUvH0ImAAAAAElFTkSuQmCC"
					), aAQ(1, "victory", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADYAAAAKAQMAAADFMz9IAAAABlBMVEUAAAD///+l2Z/dAAAASUlEQVQI12M4lvj+++efLQzHkoH0jxaGI+yMbcIcZxiOpEHoMyD6xx+GHBB9oIIhA0Q/MGCoSAfSBQYMBskP2z9bAOlEIC1hAADJYSFMvxXXTAAAAABJRU5ErkJggg=="), aAQ(2, "defeat", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aAQ(3, "orders", 6,
					"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"
					), aAQ(4, "crown", 4,
					"iVBORw0KGgoAAAANSUhEUgAAANIAAADSCAIAAACw+wkVAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0xMi0yM1QxNDowNDo0NyswMzozMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1ZmFkNDE3NC03OWNiLTUwNDgtYWIyMi04NThmMGExODUzZTEiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4ZDQ1NTIyYS02MDRlLWYxNDUtYWM3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"
					), aAQ(5, "arena", 6, "iVBORw0KGgoAAAANSUhEUgAAACsAAAAKAQMAAAAXYzUQAAAABlBMVEUAAAD///+l2Z/dAAAARklEQVQI12OwqbdXOHyAoabe3uD4AYaURAOLYw4gygZE1dvpAKl/FXZq/g8Y/tUYGAOpY3kGxj4JDMfS7Q3PAKlke4MzCQCHpxoxsfTs8gAAAABJRU5ErkJggg=="),
				aAQ(6, "territorial.io", 6,
					"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phjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAA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jz//+c+xZMmS+PWvfx3Lly9PnQXUssWLF8c3vvGN1BmZM3To0Jg1a1bqDBJp3rx5LF++PHbcccfUKZm2dOnS+PrXv546AwAAAAAAAAAAAACAWlYvdQAAAAAAAAAAAAAAAGxLRUVFcfzxx8fhhx8eBxxwQLRv3z6aNm2aOiuv7bDDDrHffvvFfvvtFyeddFJcddVVsWrVqnjppZdi8eLFcd9998Wrr76aOhMA8t7IkSON9uSAAw44II455piYP39+6hQAAAAAAAAAAAAAAGqR4R4AAAAAAAAAAAAAAPJe7969o0+fPtG9e/fo1KlTNGrUKHVSnVZQUBB77rln7LnnntG3b9+49NJL469//Ws899xz8cQTT8Ttt98eH330UepMAMg7/fv3T53APw0ZMsRwDwAAAAAAAAAAAABAHWe4BwAAAAAAAAAAAACAvNOyZcs49dRT49BDD41u3bpF8+bNUydlWkFBQbRp0ybatGkTJ554Ylx77bXxwgsvxJNPPhn33HNPLF26NHUiAOS83r17x9577506g3864ogjon79+rFhw4bUKQAAAAAAAAAAAAAA1BLDPQAAAAAAAAAAAAAA5IX9998/TjnllDj88MNj//33j3r1XBKfq0pKSuKggw6Kgw46KC688MJYtmxZPPnkk3HXXXfFU089lToPAHLSwIEDUyfwb5o2bRpnn312zJw5M3UKAAAAAAAAAAAAAAC1xKcUAQAAAAAAAAAAAADIWd26dYvBgwfHEUccER06dIiCgoLUSVRTQUFBdOjQITp06BDnnHNOrFixIhYsWBCzZ8+ORYsWpc4DgJzRs2fP1Al8QZ8+fQz3AAAAAAAAAAAAAADUYYZ7AAAAAAAAAAAAAADIKR06dIgzzzwzevfuHZ06dTLWU8e0adMmvve978XZZ58dr776asydOzdmzpwZK1asSJ0GAMkccsghsccee6TO4AsOOuig1AkAAAAAAAAAAAAAANSiwtQBAAAAAAAAAAAAAABQv379GD58eCxcuDD++Mc/xsiRI6Nz585Ge+qwgoKC2GeffWLEiBHx5z//OZ588sk477zzoqioKHUaAGx3/fr1S53AlygtLY3evXunzgAAAAAAAAAAAAAAoJbUSx0AAAAAAAAAsK3df//9sdtuu6XOAHLE9OnT44477kidwSaMGzfOgZR1wG233RYzZ85MnUEeuuWWW2KfffZJnUEVvffee16zAagVRx55ZJx99tlx1FFHRdOmTVPnkEj9+vWjV69e0atXrxg/fnw8/PDDMW3atHj++edTpwHAdtG9e/fUCWzC0UcfHfPmzUudAQAAAAAAAAAAAABALTDcAwAAAAAAANQ5Xbp0iT333DN1BpAjdt9999QJbMacOXOivLw8iouLU6ewFZo2bWq4h2rr2bNnDBw4MIqKilKnUEVXXHFF6gQA6pD69evHiBEj4uSTT479998/dQ45plmzZnHaaafFwIEDY8mSJTF79uy48cYbU2cBQK0ybpy7unbtmjoBAAAAAAAAAAAAAIBaUpg6AAAAAAAAAACA7HrxxRfjvvvuS53BVmrXrl2cddZZqTPIM6NGjTLak0dWrVoV48aNS50BQB3QsWPHuOWWW+Lvf/97TJ482WgPm1VUVBQHHXRQXH/99bFy5cqYMmVKlJaWps4CgG1u//33j2bNmqXOYBP23nvv1AkAAAAAAAAAAAAAANQSwz0AAAAAAAAAACQ1bty4WLduXeoMttK5556bOoE80rlz5zjmmGNSZ1AN11xzTVRUVKTOACCPHXPMMfHQQw/F888/H6eddprxFaptjz32iAsvvDBWrFgRs2fPjs6dO6dOAoBt5rDDDkudwGbstttu0bp169QZAAAAAAAAAAAAAADUAsM9AAAAAAAAAAAktXLlyrjjjjtSZ7CVunbtGv3790+dQZ4oKyuLBg0apM6gil588cWYNm1a6gwA8tSgQYNi8eLF8cgjj8Q3v/lN7wHYajvuuGMMGjQolixZEg8++GD07NkzdRIAbLX27dunTmALevTokToBAAAAAAAAAAAAAIBaYLgHAAAAAAAAAIDkxo4dG++//37qDLbSj370o9QJ5IFWrVrFcccdlzqDKtq4cWNceumlqTMAyEPf+9734oUXXojZs2fHN77xjSgoKEidRB1TXFwcxx57bDzxxBMxb968OPLII1MnAUCNfe1rX0udwBZ06tQpdQIAAAAAAAAAAAAAALXAcA8AAAAAAAAAAMmtWbMmbrrpptQZbKVevXpFr169UmeQ48rLy6NRo0apM6iixx9/PO6///7UGQDkkWHDhsUrr7wSN9xwQ+y3336pc8iAoqKiOProo2PevHmxYMECAz4A5KUWLVqkTmALvvrVr6ZOAAAAAAAAAAAAAACgFhju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FpLMnDkzmjZtmp1RdEpLS7MTAAAAAAAAAFhKDbIDAAAAAAAAAACgEAwdOjR23333qKioyE5hMcrKyuKUU06JX/ziF9kpNebggw822lPH3HDDDUZ7AOqhX//610Z7CtT8+fPj5ptvjr59+0ZVVVV2TkEZPnx4PPvss3HddddFx44ds3NYRj169Iju3bvH2LFjs1MAAChSO+ywQ/Ts2TM23njjWGeddWLNNdes80MFy2qVVVaJVVZZJbp06fKtf//ZZ5/FO++8E//6179izJgx8fjjj8f777+fVAnA8tS2bds46KCDomfPnrHRRhtFu3btspOW2P//eLbRRhvFvvvuGxdddFF88sknMW7cuBg7dmzcc889fucEAAAAAAAAAECdVBIR87MjAAAAAAAAAGrSv//971hzzTWzM4raBx98EGuvvXZ2BkCtu+yyy+K4447LzqAa5s6dG926dYu33347O6VGjB49Onr06JGdwQIfffRRdOrUKebNm5edAsASeu+99/w8W4Bmz54dQ4YMiUsvvTQ7paCVl5fHyJEjY/vtt89OYRndcMMNcdRRR2VnUEe89NJLsemmm2ZnFJ1+/frFddddl50BAMtdw4YNY++9946tt946unfvHuutt140b948O6vOmj9/fnz00Ucxbty4GDNmTDz22GPx4osvZmcBsJS6d+8eBx98cGy11VbRtWvXaNCgQXbScjdhwoR44YUX4vHHH4877rjD86mwnMycOTOaNm2anVF0SktLsxMAAAAAAAAAWEqGewAAAAAAAICCY7gnn+EeoFiVl5fHW2+9Fa1bt85OoRpuvvnmOPzww7Mzltmuu+4af/rTn7IzWMivf/3ruOSSS7IzAFhCBx98cNx8883ZGdSwKVOmxGGHHRaPPPJIdkrRuPTSS6N///5RVlaWncJS+vjjj2ONNdbIzqCOMNyTw3APAIWsd+/esdtuu8UWW2wRG2ywQTRp0iQ7qV77z3/+E6+99lq88MILMXLkyHj33XezkwBYhE6dOsWRRx4ZO+20U2ywwQZRUlKSnZTmyy+/jOeffz7uvffeuOmmm6Kqqio7CQqG4Z4chnsAAAAAAAAA6i/DPQAAAAAAAEDBMdyTz3APUMzOOuusGDJkSHYG1fDll19Gp06dYsqUKdkpy+Svf/1rbL311tkZLPDGG29Et27dsjMAWApPPvlkbLPN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ZwAAUIPatm0bd955Zzz22GPxk5/8JDuHeqisrCz22GOPGDNmTFx22WXRsGHD7CSAGtOtW7d45ZVXYu+9985OYRmsscYacffdd8dZZ52VnQIAAAAAAAAAQB1nuAcAAAAAAAAAAGrBxIkT45ZbbsnOoBp23nnn6NSpU3bG/zjyyCOzE1hg1KhR8dRTT2VnALAMDj744OwElkJlZWWccsopMWHChOwUatCbb74ZJ510UnzzzTfZKSzCLrvskp0AAEANOfPMM+ONN96IfffdNxo0aJCdQz3XvHnzOO644+Ktt96KQw45JDsHYJn16dMn/vKXv8QGG2yQnUINaNSoUQwZMiQefPBBI3MAAAAAAAAAAPwgwz0AAAAAAAAAAFBLBg0aFJ999ll2BouxwgorxODBg7MzvuWggw6KLl26ZGcQEbNnz46BAwdmZwCwjHr37p2dwFK46aab4tZbb83OYDm47bbb4qabbsrOYBG23HLL7AQAAJZR796947XXXoszzjgjVl555ewcCsxaa60VN910Uzz22GOx7rrrZucALJWBAwfGjTfeGKusskp2CjXs5z//ebz88sseowAAAAAAAAAA+F6GewAAAAAAAAAAoJbMmDEjbrjhhuwMqmHPPfeMli1bZmf8V//+/bMTWOC2226LN998MzsDgGWw0047xRprrJGdwRJ6/fXX4+ijj87OYDn61a9+FePHj8/O4Ad07NjRwaYAAPVU48aN4/e//338+c9/jm7dumXnUOC22267GD16dAwePDg7BWCJXHvttTFixIho1KhRdgrLSbdu3eKvf/1rbLXVVtkpAAAAAAAAAADUMYZ7AAAAAAAAAACgFg0dOjQmTpyYncFilJeX15lD5XbZZZfYdNNNszOIiM8++ywGDBiQnQHAMvrFL36RncASmjNnTvTv3z+qqqqyU1iOKisr45hjjok5c+Zkp/A9SkpKYu+9987OAABgCe2+++4xbty4OPzww6Nhw4bZORSJlVZaKc4+++x48cUXo2vXrtk5AItUWloa999/fxx55JFRUlKSncNy1rZt23jggQdin332yU4BAAAAAAAAAKAOMdwDAAAAAAAAAAC1qLKyMq644orsDKph//33j8aNG2dnxIknnuiQqDrimmuuienTp2dnALCMevXqlZ3AErrmmmvihRdeyM6gFjz77LNxzTXXZGfwA7ba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XFRVVWXnLFcnnHBC7LfffjF58uTsFBY44ogjshMAKDAbbLBBdgIAAAAAAAAAAAsx3AMAAAAAAAAAAEXq+uuvj9deey07A37QXXfdFW+88UZ2BgB1WIsWLbITWMg777yTnQAAALDM9t9//+wEFjJmzJjYcsst4/77789OqTX3339/bL311jFu3LjsFCKid+/e0axZs+wMAApIhw4dshMAAAAAAAAAAFhIg+wAAAAAAAAAAAAgz/nnnx933nlnlJSUZKfAt0ybNi0GDBiQnQFAHdapU6do2LBhdgYLGTt2bHYCAADAMtlyyy1jk002yc5ggbvuuisOPPDAqKqqyk6pdW+++WZsuumm8fDDD0evXr2yc4raSiutFP369YuLL744OwWoY6ZNmxZTp06NL774Ij7//PP46quvIiJi5syZ0bx584iIaNSoUZSXl8eKK64YK6+8cqy66qrRuHHjzGzqgDXWWCM7AQAAAAAAAACAhRjuAQAAAAAAAACAInb33XfHscceGz/96U+zU+Bbrr322pgyZUp2BgB12DrrrJOdwELmzJljuAcAAKj3jj76aEP3dcD8+fPjiiuuiBNPPDE7JdWcOXNiu+22i3vvvTd233337JyitsceexjugSJWVVUV77zzTvzrX/+KcePGxauvvhrPPPNMTJ8+famut/7668emm24a3bp1i/XWWy822GCDaN++ve9BishKK60U66+/frz55pvZKQAAAAAAAAAAhOEeAAAAAAAAAAAoemeffXY88sgjUVZWlp0CERExYcKEOOOMM7IzAKjjVl999ewEFvLZZ59lJwAAACyTsrKy2HHHHbMzit78+fPjnHPO8TviBaqqqmLPPfeMe+65J/baa6/snKK16aabRocOHeL999/PTgFqyaxZs+LFF1+Mxx9/PEaOHBkffvhhjV37zTff/J/Blg4dOsTee+8dvXv3jk033TRWWmmlGrsfdVPPnj0N9wAAAAAAAAAA1BGl2QEAAAAAAAAAAECuJ598Mh577LHsDPiviy++OCorK7MzAKjjVltttewEFjJlypTsBAAAgGVy5JFHRsuWLbMziprRnh+27777xiOPPJKdUbQaNmwYRx55ZHYGsJxVVVXFyy+/HKecckq0adMmtt9++7joootqdLTnh7z//vtx4YUXxg477BCtWrWKE044IZ599tn45ptvlvu9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222XnUIttWvXLh588MHo0KFDdgq19Pjjj2cnAADUi2nTpmUnFJX9998/tt566+wMAACARrHddttFeXl5dgYAAAAAAAAAG8BwDwAAAAAAAAAANICKioooLXV7TiGaOXNmjB8/Pjvjcy1evDhuueWW7AxqoUWLFjFixIjsDAA20NKlS2Py5MnZGWykr33ta/Hggw86DK0JKC8vj4cffji6dOmSnUItrVu3Lm677bbsDACAenHffffF2rVrszOKRuvWreP000/PzgAAAGgUpaWl8b3vfS87AwAAAAAAAIAN4GQQAAAAAAAAAACoZz/60Y9iv/32y86gBmPHjs1OqJUhQ4bEwoULszOohQMOOCAOP/zw7AwANtCtt96anUA96Nq1a/zhD3+IFi1aZKdQgxYtWsRDDz0UXbt2zU6hDl5++eWYNWtWdgYAQL1YunRpvPHGG9kZReWYY47JTgAAAGg03/nOd7ITAAAAAAAAANgAhnsAAAAAAAAAAKCeDRo0KEpKSrIzWI9nnnkm7rjjjuyMWlmxYkXceOON2RnUQklJSQwePDg7A4ANdOedd8bbb7+dnUE9+M53vhOPPfaY8Z4CVF5eHk8++WR07949O4U6euKJJ7ITAADq1QsvvJCdUFR22WUX4z0AAEDR6Nq1a3YCAAAAAAAAABvAcA8AAAAAAAAAANSj448/3iEMBWrdunUxatSo7Iw6qaioiHfffTc7g1rYe++945e//GV2BgAb6IEHHshOoJ706NHDeE+Badu2bUyaNCm6deuWnUIdrVu3Lm6++ebsDACAevXMM89kJxSdU089NTsBAACgUXTp0iVKSx3nBAAAAAAAANDUbJIdAAAAAAAAAAAAzck555yTnUANpkyZEg899FB2Rp2sWbMmxo8fH0OHDs1OoRbOOuusuP7666O6ujo7BYA6uuyyy+LUU0+NTTfdNDuFetCjR4+YPHly9OrVK5YtW5adU9R23nnneOCBB2L33XfPTmEDvPTSS/Hcc89lZwAA1Kt77rknxo4d6yDlRvSd73wnunfvHlOnTs1O4TO23nrrOPnkk7Mzmp2VK1fGFVdckZ0BAECCzTffPA4//PC49957s1MAAAAAAAAAqAPDPQAAAAAAAAAAUE/69esXu+22W3YG61FdXR2jRo3KztggI0eOjBNPPDE6duyYncIX6NSpUwwePDhGjBiR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qsrOaHSVlZWxZs2a7AxqoW3btlFZWZmdAUAdDR8+PN57773sDApIaWlpdO3aNSorK+Ott96K6dOnx4UXXhh77bVXdlqNysrK4rjjjosbb7wxXn755fjrX/8a/fr1i1133TVKSkqy80h26623ZicAAKS67bbbshOIiK222iruueee6Nq1a3ZKs3DsscfGhRde6Hu+RvLcc89lJwAA/JPhnsK3+eabx+WXXx4PPPBAdOjQITsHAAAAAAAAoOgZ7gEAAAAAAAAAgFqqqKiI0lK33BSiN998My666KLsjBTTpk2LiRMnZmdQS0cffXR84xvfyM4AoA5WrVoVEyZMyM6gQLVo0SK6du0aZ511Vjz33HMxd+7ceOihh2LYsGHRrVu3tK527dpF796947rrrou//OUv8cEHH8Qtt9wSJ5xwQuyyyy4ObuaflixZEqNHj87OAABI9cADD8Tbb7+dnUFEbLvttnHPPff4GepGOvzww+O3v/1tbLrpptkpReOJJ57ITgAA+Kfly5dnJ1BLhx56aDz//PMxZsyYaNWqVXYOAAAAAAAAQNHaJDsAAAAAAAAAAACagh/96Eex3377ZWdQgyuuuCKqq6uzM9KMGDEivv/970fLli2zU/gCrVq1isrKyjj00EOzUwCog/PPPz+OPfbY2HbbbbNTKGAlJSXRoUOH6NChQxx88MFRUVERS5YsiXfeeSfmzp0br732WsyZMydmzJgRL7zwQr18/dqlS5fYbbfdolOnTrHrrrvGV7/61fjKV74S22+/fZSVldXDR0Vzd8cdd8SqVauyMwAA0j366KNxyimnZGcQETvttFP86U9/ih//+McxderU7Jwm57jjjourr746Nt988+yUorFy5UqjzwBAQVm9enV2AnWw5ZZbxjnnnBM/+9nP4vbbb4+xY8fG4sWLs7MAAAAAAAAAiorhHgAAAAAAAAAAqIVBgwZFSUlJdgbrMXv27Bg3blx2RqoZM2bEgw8+GD/+8Y+zU6iFH/zgB9GzZ8+YNGlSdgoAtbRq1aq48cYb45xzzslOoYnZaqutYquttopvfvOb//LyqqqqWLZsWSxZsiSWLl0aH374YVRVVcXHH38ca9eujY8//jgiIlq0aBGtWrWKiIjy8vLYfPPNY/PNN482bdrENttsE5tuumljf0g0I8uXL4+RI0dmZwAAFITx48fHySef7PcABWLbbbeN+++/P04++eS4//77s3OajDPOOCPGjh0bLVu2zE4pKjNmzIg1a9ZkZwAA/JOx9qZphx12iLPOOitOPfXUePLJJ+Puu++OCRMmRHV1dXYaAAAAAAAAQLNnuAcAAAAAAAAAAL7A8ccfH127ds3OoAaXXXZZdkJBGD58eBxyyCHRunXr7BS+QFlZWQwfPtxwD0ATU1FRET/72c9ihx12yE6hGSgrK4stt9wyttxyy+wUitidd94ZCxYsyM4AACgIzz77bMycOTP22muv7BT+11ZbbRW33XZbDB48OC699NLsnII3bty46Nevn/GpBI8++mh2AgDAv1i2bFl2AhuhTZs2ceihh8ahhx4al112WcyYMSOeeeaZePrpp2PSpEkpo5G77rpr7LnnntGpU6fo0KFDvPTSS3HllVc2egcAAAAAAABAQzHcAwAAAAAAAAAAX+Ccc87JTqAGM2fOjPHjx2dnFITZs2fHfffdF8cdd1x2CrWw7777xnHHHRcTJkzITgGgltasWRPjx4+PoUOHZqcAbLSVK1fG6NGjszMAAArKPffcY7inwLRq1Souuuii2H333eOUU06J6urq7KSCs/3228eECRPiP/7jP7JTitKaNWvixhtvzM4AAPgXS5cuzU6gnmy55ZZx4IEHxoEHHhgREZ988km89dZbMXfu3FiwYEEsWLAg3n333Zg3b14sWbIkVq9eHYsXL44PP/wwqqurY8stt/znY2222WaxxRZbRETEl770pWjbtm1sscUWseWWW8bmm28ebdq0ifLy8thmm21iq622iq222uqfr2/VqtW/dE2YMMFwDwAAAAAAANCsGO4BAAAAAAAAAIDP0a9fv9htt92yM6jBRRddlJ1QUIYOHRqHHXZYtGnTJjuFWjj33HMN9wA0MSNHjowTTjghvvrVr2anAGyU++67L958883sDACAgnLllVfGwIEDo7y8PDuFTykpKYmTTjop9t577/j5z38es2bNyk4qGMcee2xcdNFF8eUvfzk7pWjNnDkz5s2bl50BAPAvlixZkp1AA9l0001jl112iV122SU7BQAAAAAAAKBZKc0OAAAAAAAAAACAQlVaWhr9+/fPzqAG06dPj9tvvz07o6C8+eabceedd2ZnUEu77bZbnHnmmdkZANRBdXV1XHLJJdkZABtl+fLlMWTIkOwMAICCs2zZsnj88cezM6jBN77xjZg8eXKce+652Snptt566/jv//7vuOmmm4z2JHvssceyEwAA/o/33nsvOwEAAAAAAAAAmhTDPQAAAAAAAAAAUIOzzz47OnXqlJ3Beqxbty4qKyuzMwpSRUVFLF26NDuDWurfv3+UlZVlZwBQB1dffXU8//zz2RkAG+zOO++MuXPnZmcAABSk3/72t9kJfI4tttgiRo0aFU8//XR07do1O6fRlZaWxpAhQ+Kll16Ko48+2s+Wk1VVVcWtt96anQEA8H8sWrQoOwEAAAAAAAAAmhTDPQAAAAAAAAAAsB5lZWXRr1+/7AxqMGXKlHjooYeyMwrS/Pnz4/bbb8/OoJZ23HHHGDVqVHYGAHVUWVkZ69aty84AqLNly5bFsGHDsjMAAArWpEmTYtasWdkZfIF99903pkyZEjfccENsvfXW2TmNonfv3vHyyy/H8OHDo3379tk5RMTf/va3mDNnTnYGAMD/8Y9//CM7AQAAAAAAAACaFMM9AAAAAAAAAACwHiNHjowddtghO4P1qK6uNnTyBSoqKmLx4sXZGdTSySefHO3atcvOAKAO7rvvvnjiiSeyMwDq7Kabbop58+ZlZwAAFDTD6E1Dq1at4qSTToo5c+bEpZdeGuXl5dlJ9a60tDROP/30mDlzZowfPz7+7d/+LTuJT7nvvvuyEwAA1mvGjBnZCQAAAAAAAADQpBjuAQAAAAAAAACAzygvL4/evXtnZ1CDxx57LCZNmpSdUdAWL14ct9xyS3YGtbTVVlvFmDFjsjMAqKNzzjknVq1alZ0BUGsLFiyI8847LzsDAKDg/eY3v4n3338/O4Na2nrrreNXv/pVvPHGG3H55ZdHhw4dspM22vbbbx9jxoyJt956K8aNGxd77rlndhKf8dFHH8WVV16ZnQEAsF6LFy+Ojz76KDsDAAAAAAAAAJoMwz0AAAAAAAAAAPAZI0aMiPbt22dnsB5r1qyJUaNGZWc0CUOGDImFCxdmZ1BLP/nJT2K33XbLzgCgDmbMmBETJkzIzgCotauvvjpWrFiRnQEAUPDWrFkT9957b3YGdbT11ltHv3794uWXX4777rsvDj/88OykOikrK4u+ffvG448/Hm+88Uacc845sdNOO2VnUYMnn3zS91cAQEEzRgoAAAAAAAAAtWe4BwAAAAAAAAAAPqVdu3ZxwgknZGdQg4kTJ8bUqVOzM5qEFStWxI033pidQS21bt06KisrszMAqKOzzz7bUB7QJLz22msxevTo7AwAgCbjwgsvjFWrVmVnsAG+9KUvxWGHHRb33ntvvPXWW3HttdfGgQcemJ21Xh07doxzzz03HnnkkVi0aFFcccUVccABB0TLli2z0/gCxpwBgEL33nvvZScAAAAAAAAAQJNhuAcAAAAAAAAAAD5l9OjR0bZt2+wM1mP16tUxdOjQ7IwmpaKiIt59993sDGrp0EMPjR49emRnAFAHS5cujUsvvTQ7A+ALVVZWRnV1dXYGAECT8eabb8ajjz6ancFG+spXvhKnnHJKPPbYYzFv3ry455574swzz4xdd901pWfvvfeOgQMHxu233x4vvvhivPbaazFq1Kg46KCD/G6qCZk7d27cdddd2RkAAJ/LcA8AAAAAAAAA1N4m2QEAAAAAAAAAAFAoOnfuHMccc0x2BjV44IEHYtasWdkZTcqaNWti/PjxBo+aiLKyshg+fHgccMAB2SkA1MFFF10UxxxzTOy9997ZKQDrNXny5LjllluyMwAAmpxLLrkk/vM//zNKS0uzU6gH22+/fRxxxBFxxBFHxIUXXhjz5s2LN998M1599dV46aWX4oUXXojp06fHihUrNuo6LVq0iH322Sf22GOP+Ld/+7f46le/GjvuuGN06tQpttpqq3r6aMh0xx13ZCcAAHyhefPmZScAAAAAAAAAQJNhuAcAAAAAAAAAAP7XsGHDok2bNtkZrMfKlStj8ODB2RlN0siRI+PEE0+Mjh07ZqdQCz169Igf//jHcdddd2WnAFAHZ511VjzyyCPRokWL7BSAf/HJJ5/Eueeem50BANAkPfXUUzFlypTYf//9s1OoZyUlJbHTTjvFTjvtFP/xH//xz5evW7culixZEkuXLo2PPvooli1bFsuXL4+1a9fGunXr4uOPP47WrVtHRMRmm20WJSUl8aUvfSnatm0bW2yxRWy++eax+eabZ31YNIKPPvooLr744uwMAIAv9Morr2QnAAAAAAAAAECTYbgHAAAAAAAAAAAiokuXLnHkkUdmZ1CDu+66K15//fXsjCapuro6rr322hgzZkx2CrVQUlIS559/vuEegCZm8uTJcdttt8WJJ56YnQLwL2699dZ45plnsjMAAJqsSy+9NP7jP/4jSkpKslNoBCUl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N96II488Mqqrq7NTAACohdmzZ8f5558f69aty04BvkBVVVWceeaZficCABSVe++9NzsBAAAAAAAAAAqO4R4AAAAAAAAAAJql7t27R69evbIzqMEDDzwQzz//fHYG6zF//vy4/fbbszOog29/+9tx0kknZWcAsJGOOOKImDVrVnYGUEAWL14cP/3pT2PRokXZKQAA1ME111wTd911V3YG8AWuu+46/68CAEXnsssuiwULFmRnAAAAAAAAAEBBMdwDAAAAAAAAAECzNHjw4GjRokV2BuuxcuXKGDx4cHYGn6OioiIWL16cnUEdDBw4MDsBgI20atWqOPLII2PevHnZKUAB+Pjjj6N3797x3HPPZacAALAB+vTpE6+//np2BlCDZ555Jk4//fTsDACARldVVWW8EAAAAAAAAAA+w3APAAAAAAAAAADNTs+ePaNnz57ZGdTgrrvucmBhgVu8eHHccsst2RnUwS677BLnnHNOdgYAG+nNN9+M4447Lj744IPsFCBRVVVVnHnmmfGHP/whOwUAgA20YsWK6N27d6xYsSI7BfiMRYsWxYknnhjV1dXZKQAAKS666KJYuXJldgYAAAAAAAAAFAzDPQAAAAAAAAAANDsVFRVRWurWmEK0fPnyGDJkSHYGtTBkyJBYuHBhdgZ1cPrpp0erVq2yMwDYSE899VScfPLJ8fHHH2enAEkuuOCCuOaaa7IzAADYSFOnTo0hQ4bEunXrslOA/1VVVRUDBgyIV199NTsFACDNvHnz4pFHHsnOAAAAAAAAAICC4XQSAAAAAAAAAACalaOOOir222+/7AxqcMstt8S8efOyM6iFFStWxI033pidQR1sv/32UVlZmZ0BQD247777on///rFmzZrsFKCR/fa3vzV2CgDQjFx22WVx++23Z2cA/+uqq66KCRMmZGcAAKSrrKyM1atXZ2cAAAAAAAAAQEEw3AMAAAAAAAAAQLMycODAKCkpyc5gPZYsWRLDhg3LzqAOKioq4t13383OoA569+4d22+/fXYGAPVg/PjxMXTo0Fi3bl12CtBIbr/99ujbt292BgAA9ezEE0+M5557LjsDit4f//jH+NWvfpWdAQBQEJ5//vl48MEHszMAAAAAAAAAoCAY7gEAAAAAAAAAoNk44YQTomvXrtkZ1ODmm2+ORYsWZWdQB2vWrInx48dnZ1AHbdu2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L14c06ZNiyeffDKamppST6KXO378eKxevTpKS0vjrrvuihMnTqSeBAAAPVZnZ2esXLkyJk+eHLfeemvs2LEjOjs7U88ioa6urti5c2fceeedH4adhFIBAPi07dmzJ+69996YN29ejBo1Ku644454+umn480334wzZ86kngcAAAAAAABADybcAwAAAAAAAABAUl/84hdj0aJFqWfwMXbt2hUbN25MPYNe4Oc//3ns378/9QzO09e//vWYPXt26hkA9FC1tbVx++23x8SJE2PVqlVRW1ubehK9TFVVVfz4xz+OSy65JJYuXRrNzc2pJwEAQK/yy1/+MubNmxcLFiyIX/3qV665M9PQ0BDPPPNMXHnllXH55ZfHunXrUk8CAICIiGhra4snnngibrnllqioqIgRI0bEN7/5zVi3bl3s2LEj/vGPf6Se2Ou0t7dHVVVVbN68OZ577rnUcwAAAAAAAAD+o/qlHgAAAAAAAAAAQN7uu+++6NfP31i6o66urvjpT3+aega9yMMPP+zGfj3MwIEDY/ny5XHttdemngJAD9bY2Bh333133HPPPfG9730vFi9eHNOnT089ix6qs7Mzdu3aFevXr4+nnnoq9RwAAMjC1q1bY+vWrVFUVBRLly6NG264IS699NLUs7gA2tvbY+fOnfHss8/GY489Fh0dHaknAQDA/6mtrS02bdoUmzZt+vBYaWlpLFy4MGbOnBlTp06NSy65JEpKSmLAgAEJl/YMra2t8e6778ahQ4fi73//e7zxxhvx/PPPR2NjY+ppAAAAAAAAABeEO54AAAAAAAAAAJDMVVddFVdeeWXqGXyMbdu2xW9/+9vUM+hFnnjiiViyZElUVFSknsJ5uPrqq+Oaa66JP/zhD6mnANDDdXZ2xkMPPRQPPfRQXHvttXHHHXfEVVddFYWFhamn0QM0NzfH73//+3j00Udj+/btqecAAECWmpubY9myZbFs2bKYP39+3HbbbXH11VfHqFGjUk/j/6GrqysOHjwYL730Ujz++OOxf//+1JMAAOD/7dChQ7F27dqPHOvbt2/MmzcvZs2aFZMnT46JEyfGxRdfHGPGjIkxY8ZEv3753Iqpubk56uvr49ixY1FTUxPvvPNOVFdXx969e2PPnj2p5wEAAAAAAAB8qvL5tRgAAAAAAAAAgG7nvvvui4KCgtQz+Cc6OztjxYoV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"
					), aAQ(7, "youtube", 7, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aAQ(8,
					"googleplay", 3,
					"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"
					), aAQ(9, "discord", 7,
					"iVBORw0KGgoAAAANSUhEUgAAACwAAAAyBAMAAADVdiTZAAAAG1BMVEUA/wBI/0lu/26P/5Cl/6O8/73R/9Hn/+j///+iRuwXAAABJUlEQVQ4y83TvW7CMBQF4BsKdKVIpYxIRaJjVLUSI6JDGSNlCCOq1JC1f+CxFIL92D22E+di/ABciZB8seRj35joVZ3VN1FXBSqhRYgPJEIsSQXrAnmjL2uP5Usm81z83Bec5WM+J9T4vS8Yfzz1yFQ0v2ackKsrxr2G7d4ZPjK1O214z3no+Jdz1/EKTy1NI/w6jmcIID6JJirGe8cYdIdGIcQOwx3j/gEpI6X+qoRkGqrnd6OXFR/NRAcdOWFc6hDPera0Xk/Fozo1ck4bHsSVpg0jYJSlervGW9zWSdQXhhXozlbGek1uY9/s2hRWect7ucnsf5ld7DfosX+kcsv+AdwtDfvHdW877x/u0raB6Oa0qG35rKZhbokg41sKclQEmTr/f+SUPtWxuyYAAAAASUVORK5CYII="
					), aAQ(10, "insta", 3, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aAQ(11, "emojis",
					4, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aAQ(12, "flags", 3,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aAQ(13, "bestTeam", 5,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aAQ(14, "bestPlayer", 5,
					"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"
					), aAQ(15, "zoom", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuBAMAAACllzYEAAAAHlBMVEUAAAAhIyA3ODZTVVJrbWqEhoOkpqO8v7vX2tb///8goTJXAAABaElEQVQ4y32Tu1ODQBDGL8QAdlg5dml8dZTa2TijXQpnIh2TwoQOxwehi2PB0flKYP/b7HFv5nALBn5337d7ewshXZyuKX2PST8egUW76OE7EJFa+BhJ9bSsUWFaeTV3GKHbn8EvlB79bjSv4VO8jUr4VdiHNnK938MHPie0Yh+ZLqmGuNsJ7CNURgewI5qPoRE86GwkJyWIBIfcUfJrmMm0sclDyDnPWmLyADacl8jnRbEGKIoiJRP4EmU2LJmIDfLvAf7z/37mv6IUm08pzbV/rx5f1pPA1Fn/iX3eS3nekAslz7gcGw9bg3uqn6Rup5oH+uaTLpO4r0SmZVuUFE2lfTc+z1qr9+BVtGJqzq1RHNfQdAtnrEW75UwuXOFgvj3crpCyDu6UIpP9fPHZU5XkiYVXvsXIPcc+VwspzY2pPorE/NgCfYK+QJ5+QFA6fjQt2A4IWuIWODixe2ELcuIUNJGL+zQle92exY5pfDIaAAAAAElFTkSuQmCC"
					), aAQ(16, "apple", 3,
					"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"
					), aAQ(17, "loading", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEEAAAAKAQMAAADRpqGpAAAABlBMVEUAAAD///+l2Z/dAAAATklEQVQI12M48E/OzoinjoGB4cA/O3tjnn8g1iEjY+aeAxCWofGZBijLCMqqNzRKmQdhGRubNINZyeYQ1p9/yXbGMv9yG0AsG2OemtwGAJcsIuxbPF7gAAAAAElFTkSuQmCC"), aAQ(18, "target",
					7,
					"iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAJFBMVEXUAADLSwDYWli/eQCzlQGgswDloaGC0wAA/wBk5wDx09P///8NUBuBAAADWElEQVRYw62YvW/aUBDADwghTRakqoJuTBmSBamNSjcyJSMZotINZciQLCxVnQ1EkO0N1ET1iDJkgCViyGD/c7UN8bv37t5Hq96EbH6+j3fv3d2DgJPw52Uqd+y7AJhnP05hI6WTOyfksQ1IPnhWJLwAWUrfLYjfBSJfjIjfBkYaBoQnVAYjYRc08lWHXIBW+jwy0RNQijjErxsQqHJID4xyTpF7MwEVirQtCHxUkYmNEBEAVyVCDbgqEWq2SNcBgQ5GpsrLw+UqSZbPAzZoG2QovdpN/7+R5xaTNjkSSgt/lAiJJaYmkImOUJiSQHCu7CeJnjl/Q7Bdu4kqr6ploKTXLUGSJ8UykON1lDDSkmMGUrKUOSJZC+TdBvHFk2MWSQbSTkuRsUWJpCbKkaE2wIw3/RwRrqx0yKL4SzNDQsOa0LWpZcjU5rxkWSVDxna7sGVRisz4eMUay/op0uPilW2UQ6wVbU0I6owrm7Qqr5jV3AsgZFx5paa+iJCBSBcmPvvUmWoAU7oqKD8KzbGIMkzoF1vcHi0eBTB6+3nAbcMy/U4EM7IfF8Dt0iJkHoNI59AB+VAfhqqnsXwMkiifQ09FXiWkTJCOQJgQs48Z5EVGiPIOdFVk8f+Rvb9Hmv/iiyvCRYxfFzCti/vqk4SRc2yfybGZPmelAwEhI/JyzXmPk39MTIg5V4S5AdzTtwNmh8Wi9onjoswcjbv02Q5/jj3RYrtGh1LAFeMBKbYLUS1BNEkH6Ay/yh7ccNWimSJDtiItn2/wKR6jBgOCkUt9EWvlpci9qbMgcS9lVcy3F2RkVzWvyHW7ZWvcXgBurY6tdmX9ZYqMrFUc7TovR6ZgC8BC6kizTgksamK5hwO5T7w1e5K3yhkyBmOvhM+PaIv4YGr7cD9aLTrYtqm5xEdBs0DmuKCstM1oHuIt4oOWeaIDGTCDxY2yb5TRArjx5XDJTgnbAWaDhOqAWL6+vr5S55eaNPLMXUYeT0J8B6KqjG9DO9JXELuaGhlF546eICS0TJYNZqw2D8mViJv3e26DOEZMpjU0FxFTLbGjvSF50Dni6e9hfvHztGe67Xmw6qB3So/k0mMnst1c+acyceZyP/aI9uiJ53alFvy+/JTa9/7zt8j1Fs4ifwCmXBmOYkld0AAAAABJRU5ErkJggg=="
					), aAQ(19, "members", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABSVFGanJkA/wDMz8x4/3ey/7L///+GDHoaAAACZElEQVRIx9WWwYrjMAyGlVCYa6cs5JqGQh5gaObaDYU8QJnOA5SS66RN49dfSZZt2U2WZZeFXc9h2r9fZEmRJcPbLyz4d6GzMdM1/uXcG3PV0KehFVFnlh4Baoxdl8BEEkF7EcwUoN5pJ4HenRBMNV66C4QfxxI2nTKFhsYt5CgZC9FTawDIxbg4UKKUWevAuw1Aq/D7NUq6M9RbQ2zKhkwpKVnK2AWGRrCrc04lEpDfgyg1u8mh3EQqSGLoS5QXY/a4+XSKJIIwkkNQOIlTgFYUcQq59TuQcrwI0PDk+M3Hayh2+RcC1smkl3DDj1ltlMR5old38LutHT04l/BVAVfOSL9lnXelUBKaAltxt2gTv3Ft6w6k4sajdtf6zhLVHUHltzTwkIzvOUGf9PhOJJdVdphWS0YfFnJUCrVgISmdTVWVnVQa19+YV9VWKgohl2+MRUFKjaAXDX0tQCvt0+HPIJWnJajWGV9wPDPutPFhXs9CK+PLr1aJjSF+5aUzpOQY6mwZURWNCRRO9JZq43ikMtnog44v2LlojK1EW6n4zYXz4HqSb/gsty1qaWjAt5o7NAEiL7Jdu2vX7IqHLikEIYdzUJ5CZQQdJJcJ5GSE9i5tC1BNR4oadGub76ChwrZfKn48wTRXsGfrQvHFQr0dmy245o8nMYHGoxsToMZIAoWBA2qOzEMXmVJiK4nO2jn5oXju5yGZpn4Gf/QpNH08D+pn6O3vQqOGulkIX0+1fbXd93VT+dkXQe/SO3F1fkSnUBjgT7cEdVdJodkLTbNkKLr1NH1ApstPrkbnK/39B9e1H85NJPjxrK7zAAAAAElFTkSuQmCC"
					), aAQ(20, "hourglass", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABKTEqZm5gA/wDJzMh3/3iz/7L///+iyVF/AAACjklEQVRIx72W3aqyQBSGJwk6dceGTv1C8AJEO60QvACJLkDI02xPrtvf75pJ58cx2iffIqT0aWb9vGuNIrft0hSX8WqZ4Etxg9HM+G4zQVdatOcEdSSrqkr3juFOVdMwQXQUC7YmAyVLUPQZ1PxtJSJ5js7KX7j/+pKkNR5Y0RE9Ij/6JMPFRFfebt0cOmbD7dZOEOwQgn7ssnwOrf8rJAMp8KFSrnwormcQCR8S1HpQgT8qVVXnVCsJS/tQzlV4mMpmJLUCXOi4I2mgmnotOAfqcJPiCUIGNsMMunJdEqMjbP+cQQcOrx+hnZ0BA5XsuTQuPUxwBoLnZj98Oxq/LaiTHNK4G34MAQj7jfGhQqeIfgJQzm7ofELccUZ5CDpQjKBO3LbUr+gZhAo8QhMl8FoCb4IQhkvyUt7JWciBCnhUa5VkJkkexEtxQ3KjPvMlqKD7hk7fdF/bHnlQfoUU4LglgBCElVCP+ztIbQfDdXk7OL5jqH/juE7BA4pBUZr8XTJZMadoKZklKlxriMvSBqGO4m8ejJmuy5AH9aTqq02CbwPQlfeYDH94ziEWilqDW5xniiUWq6VUjs6szFTnat5SHYuXdcnGAcTZrINLrpmZGJnqqXY26WLONJ7rfqm5qfwh1vXckPahAh8HD/Imjzt7xJgACLe3oZ01xYQ1Mo/umWmGprBOjcQ96cyEEtacc89DrDx6PkJQrHSh2kjdgh4ulH0C7YIQuS8P3nYlDa9ecg33OpUF8TqnFyB9UitIVujsALSmqp6g+/5fHKVpxQfQqM6q2ier7X5joFdAMX++YrEyMc6hgP0RkuoVZbvfTqfU6gs/VbZG6M3bmn5fE0pxb6x1Ori4eNbkY3f+AriuYpjQCOoxAAAAAElFTkSuQmCC"
					), aAQ(21, "stalemate", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEoAAAAKAQMAAAApRlpeAAAABlBMVEUAAAD///+l2Z/dAAAAX0lEQVQI12P4/afiwJ+G9vnvDzD8/vPjwJ+D/SDmgYQTBw487mnmYYAwv4OZBUDmj/89zfwNDBWJfw78uDv/MJApAWQeODn/MFABR2LPgQMHZ4CYPxJ7/vwBMvkPIDEB8vo+S3L7oMwAAAAASUVORK5CYII="
					), aAQ(22, "logo", 8,
					"iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxMAAAsTAQCanBgAAATzaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTEyLTIzVDE0OjQ0OjQ2KzAzOjMwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyZTU0YWVlOS01ZDdhLWQ3NDgtYTRjYS0yODQ1NmQ1ZWFlZDYiIHhtcE1NOkRvY3Vt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"
					)
		}
	}, this.get = function(oA) {
		return canvas[oA]
	}, this.a96 = function(name) {
		for (var a6 = wQ.length - 1; 0 <= a6; a6--)
			if (wQ[a6] === name) return canvas[a6];
		return aAK
	}, this.ql = function() {
		return aAJ <= 0
	}, this.aAM = function() {
		aAJ = 0, aAN()
	}
}

function cK() {
	var aAZ, aAa, aAb, aAc, aAd, aAe, aAf, aAg, aAh, aAi, aAX = [
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
		aAY = [
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

	function aAo(is, mD) {
		for (var a6 = is; a6 < mD; a6++) aAZ[a6] = 4 * bH.ew(64 * av.random(), av.value(100)), aAa[a6] = 4 * bH.ew(64 * av.random(), av.value(100)), aAb[a6] = 4 * bH.ew(64 * av.random(), av.value(100))
	}

	function aAn(is, mD) {
		for (var colorsData = a8.data.colorsData, a6 = is; a6 < mD; a6++) {
			var ex = colorsData[a6];
			aAZ[a6] = 4 * (ex >> 12), aAa[a6] = 4 * (ex >> 6 & 63), aAb[a6] = 4 * (63 & ex)
		}
	}

	function aAz(e8, aB1) {
		a7T[e8] = 0, a7T[e8 + 1] = 0, a7T[e8 + 2] = aB1, a7T[e8 + 3] = 0, aB2(e8)
	}

	function aB2(e8) {
		var eb;
		bX.mL || (eb = aX.uL(e8), e8 = aX.uM(e8), bX.mL = eb >= bW.a7S[0] && eb <= bW.a7S[2] && e8 >= bW.a7S[1] && e8 <= bW.a7S[3])
	}
	this.eW = new Int32Array(4), this.dS = function() {
		var eW = this.eW;
		eW[0] = -4 * bO.ef, eW[1] = 4, eW[2] = -eW[0], eW[3] = -eW[1]
	}, this.dR = function() {
		if (aAZ = new Uint8Array(a8.eR), aAa = new Uint8Array(a8.eR), aAb = new Uint8Array(a8.eR), aAc = new Uint8Array(a8.eR), aAd = new Uint8Array(a8.eR), aAe = new Uint8Array(a8.eR), aAf = new Uint8Array(a8.eR), aAg = new Uint8Array(a8.eR),
			aAh = new Uint8Array(a8.eR), aAi = new Uint8Array(a8.eR), this.a46 = new Uint8Array(a8.eR), a8.ib)
			for (var a6 = a8.eR - 1; 0 <= a6; a6--) {
				var ep = bc.k1[bc.eS[a6]],
					kL = bH.ew((aAY[ep][3] + 1) * av.random(), av.value(100));
				aAZ[a6] = aAX[ep][0] + kL * aAY[ep][0], aAa[a6] = aAX[ep][1] + kL * aAY[ep][1], aAb[a6] = aAX[ep][2] + kL * aAY[ep][2]
			} else 0 === a8.data.colorsType ? a8.data.selectableColor ? (aAn(0, a8.jb), aAo(a8.jb, a8.eR)) : aAo(0, a8.eR) : aAn(0, a8.eR);
		! function() {
			var a6, eX;
			for (a6 = a8.eR - 1; 0 <= a6; a6--) eX = bH.ew(aAZ[a6] + aAa[a6] + aAb[a6], 3), aAZ[a6] += aAu(eX - aAZ[a6], 2), aAa[a6] += aAu(eX - aAa[a6], 2), aAb[a6] += aAu(eX - aAb[a6], 2), aAZ[a6] -= aAZ[a6] % 4, aAa[a6] -= aAa[a6] % 4, aAb[
				a6] -= aAb[a6] % 4
		}(),
		function() {
			for (var a6 = a8.eR - 1; 0 <= a6; a6--) aAZ[a6] += bH.ew(a6, 128), aAa[a6] += bH.ew(a6 % 128, 32), aAb[a6] += bH.ew(a6 % 32, 8), aAc[a6] = a6 % 8
		}(), this.aAr(),
			function() {
				for (var a6 = a8.eR - 1; 0 <= a6; a6--) aAd[a6] = aAZ[a6] < 32 ? aAZ[a6] + 32 : aAZ[a6] - 32, aAe[a6] = aAa[a6] < 32 ? aAa[a6] + 32 : aAa[a6] - 32, aAf[a6] = aAb[a6] < 32 ? aAb[a6] + 32 : aAb[a6] - 32
			}(),
			function() {
				for (var a6 = a8.eR - 1; 0 <= a6; a6--) aAg[a6] = 235 < aAZ[a6] ? aAZ[a6] - 20 : aAZ[a6] + 20, aAh[a6] = 235 < aAa[a6] ? aAa[a6] - 20 : aAa[a6] + 20, aAi[a6] = 235 < aAb[a6] ? aAb[a6] - 20 : aAb[a6] + 20
			}()
	}, this.a38 = function(player) {
		var g = bK.f5;
		return g[0] = aAZ[player], g[1] = aAa[player], g[2] = aAb[player], g
	}, this.aAr = function() {
		for (var a6 = a8.eR - 1; 0 <= a6; a6--) this.a46[a6] = aAZ[a6] + aAa[a6] + aAb[a6] < 280 ? 0 : 1
	}, this.uL = function(e8) {
		return bH.ew(e8, 4) % bO.ef
	}, this.uM = function(e8) {
		return bH.ew(e8, 4 * bO.ef)
	}, this.tv = function(eb, ed) {
		return Math.floor(4 * (ed * bO.ef + eb))
	}, this.uB = function(e8) {
		var eW = this.eW;
		return this.aAv(e8 + eW[0]) || this.aAv(e8 + eW[1]) || this.aAv(e8 + eW[2]) || this.aAv(e8 + eW[3])
	}, this.et = function(e8) {
		var eW = this.eW;
		return this.eZ(e8 + eW[0]) || this.eZ(e8 + eW[1]) || this.eZ(e8 + eW[2]) || this.eZ(e8 + eW[3])
	}, this.u9 = function(e8, player) {
		var eW = this.eW;
		return this.aAw(e8 + eW[0], player) || this.aAw(e8 + eW[1], player) || this.aAw(e8 + eW[2], player) || this.aAw(e8 + eW[3], player)
	}, this.vx = function(player) {
		return player < a8.jb && 2 !== ab.zX[player]
	}, this.g5 = function(e8) {
		return 208 <= a7T[e8 + 3]
	}, this.uG = function(player, e8) {
		return this.g5(e8) && this.aAx(player, e8)
	}, this.aAx = function(player, e8) {
		return player === this.eM(e8)
	}, this.aAy = function(e8) {
		return 208 <= a7T[e8 + 3] && a7T[e8 + 3] < 224
	}, this.im = function(e8) {
		return 224 <= a7T[e8 + 3] && a7T[e8 + 3] < 248
	}, this.uA = function(e8) {
		for (var eW = this.eW, a6 = 3; 0 <= a6; a6--)
			if (this.gy(e8 + eW[a6])) return !0;
		return !1
	}, this.eP = function(e8) {
		return this.g5(e8) || this.eL(e8)
	}, this.gy = function(e8) {
		return 0 === a7T[e8 + 3] && 2 === a7T[e8 + 2]
	}, this.eL = function(e8) {
		return 0 === a7T[e8 + 3] && 1 === a7T[e8 + 2]
	}, this.t0 = function(e8) {
		return 0 === a7T[e8 + 3] && 3 === a7T[e8 + 2]
	}, this.eZ = function(e8) {
		return 0 === a7T[e8 + 3] && 5 <= a7T[e8 + 2]
	}, this.aAv = function(e8) {
		return 0 === a7T[e8 + 3] && 3 <= a7T[e8 + 2]
	}, this.eC = function(e8) {
		return a7T[e8 + 2] - 5
	}, this.aAw = function(e8, player) {
		return this.eL(e8) || this.g5(e8) && player !== this.eM(e8)
	}, this.eM = function(e8) {
		return a7T[e8] % 4 * 128 + a7T[e8 + 1] % 4 * 32 + a7T[e8 + 2] % 4 * 8 + a7T[e8 + 3] % 8
	}, this.uH = function(e8) {
		aAz(e8, 1)
	}, this.aB0 = function(e8) {
		aAz(e8, 2)
	}, this.tw = function(e8, player) {
		a7T[e8] = aAZ[player], a7T[e8 + 1] = aAa[player], a7T[e8 + 2] = aAb[player], a7T[e8 + 3] = 208 + aAc[player], aB2(e8)
	}, this.g0 = function(e8, player) {
		a7T[e8] = aAd[player], a7T[e8 + 1] = aAe[player], a7T[e8 + 2] = aAf[player], a7T[e8 + 3] = 224 + aAc[player], aB2(e8)
	}, this.io = function(e8, player) {
		a7T[e8] = aAg[player], a7T[e8 + 1] = aAh[player], a7T[e8 + 2] = aAi[player], a7T[e8 + 3] = 248 + aAc[player], aB2(e8)
	}
}

function ck() {
	var oA = 0,
		aB3 = new Uint16Array(32);

	function remove(a1B) {
		var a6;
		for (oA -= 2, a6 = a1B; a6 < oA; a6 += 2) aB3[a6] = aB3[a6 + 2], aB3[a6 + 1] = aB3[a6 + 3]
	}
	this.dR = function() {
		oA = 0
	}, this.iQ = function() {
		var a6, ij, hs;
		if (0 !== oA)
			if (0 === ab.lS[a8.eE] || aY.aB4(a8.eE) === aY.fb(a8.eE)) oA = 0;
			else
				for (a6 = oA - 2; 0 <= a6; a6 -= 2)(ij = aB3[a6]) < a8.eR && 0 === ab.lS[ij] ? remove(a6) : (hs = aB3[a6 + 1], (ij >= a8.eR && aB5(a8.eE) || ij < a8.eR && aB6(a8.eE, ij)) && (b5.gs.h3(hs, ij), remove(a6)))
	}, this.h5 = function(ij, hs) {
		! function(ij, hs) {
			var a6;
			for (a6 = 0; a6 < oA; a6 += 2)
				if (aB3[a6] === ij) return aB3[a6 + 1] = Math.min(aB3[a6 + 1] + hs, 1023), 1;
			return
		}(ij, hs) && 32 !== oA && (aB3[oA] = ij, aB3[oA + 1] = hs, oA += 2)
	}
}

function cL() {
	function aBD(player) {
		var e3;
		b7.fr.zZ(player) && (e3 = ab.gX[player] - ab.zd[player] + aY.aBF(player), bZ.fv(player, Math.abs(e3), e3 < 0 ? 18 : 12)), ab.gX[player] = 0, ab.zd[player] = 0
	}

	function aBM() {
		aS.show(!1, !1, !1, !0), aR.a6f(), bN.result.wm()
	}

	function aBA(player, aBL) {
		for (var a6 = aBL.length - 1; 0 <= a6; a6--) aY.aBO(aBL[a6], player)
	}

	function aBC(player) {
		for (var i7 = ab.i7, i8 = ab.i8, i9 = ab.i9, iA = ab.iA, lu = i7[player], lv = i9[player], ef = bO.ef, gJ = ab.gJ, eb = i8[player]; lu <= eb; eb--)
			for (var ed = iA[player]; lv <= ed; ed--) {
				var g3 = 4 * (ed * ef + eb);
				aX.uG(player, g3) && (aX.uH(g3), gJ[player]--)
			}
		i7[player] = i8[player] = 0, i9[player] = iA[player] = 0
	}
	this.da = function(g3) {
		var player, e3 = ab.gJ[g3];
		bJ.l6.oM[g3] ? e3 && (aBA(player = g3, aY.aBB(player)), aBC(player), aA.ft(player), aY.clear(player), aBD(player), function(player) {
			ab.tr[player] = 0, ab.fx[player] = [], ab.gB[player] = [], ab.gC[player] = [], ab.eu[player] = []
		}(player)) : !e3 && ab.fx[g3].length || this.aB9(g3)
	}, this.aB9 = function(player) {
		! function(player) {
			aX.vx(player) && (ab.wi[player] = be.wc.aBK(), a8.w6++);
			var aBL = aY.aBB(player);
			0 === aBL.length ? b7.fr.zY(player) && aBM() : (aBA(player, aBL), function(player, aBL) {
				var aBQ = aBL[function(aBL) {
					var a6, oA = 0;
					for (a6 = aBL.length - 1; 1 <= a6; a6--) ab.gJ[aBL[a6]] > ab.gJ[aBL[oA]] && (oA = a6);
					return oA
				}(aBL)];
				9 === a8.jv && 1 === bc.eS[player] && av.jT(8) && aw.aBR(aBQ);
				if (b7.fr.zY(player)) aBM(), aI.wG(aBQ, 1);
				else {
					for (var a6 = aBL.length - 1; 0 <= a6; a6--)
						if (b7.fr.zZ(aBL[a6]) && (bZ.lO[4 - b7.fr.iz(player)]++, b7.fr.zY(aBL[a6]))) return aI.wG(player, 0);
					b7.fr.iz(player) || aI.a2P(0, player, aBQ)
				}
			}(player, aBL))
		}(player), aBC(player), aBD(player),
			function(player) {
				ab.lS[player] = 0, ab.fx[player] = null, ab.gB[player] = null, ab.gC[player] = null, ab.eu[player] = null
			}(player), aA.ft(player), aY.clear(player), bJ.aBI.aBJ(player)
	}
}

function cp() {
	var input;

	function aBS(e) {
		(e = e.target.files) && 0 < e.length && b3.aBV(e[0])
	}

	function aBZ(e) {
		var ep = new Image;
		ep.onload = aBa, ep.src = e.target.result
	}

	function aBa(e) {
		var e = e.target,
			canvas = document.createElement("canvas");
		canvas.width = e.width, canvas.height = e.height;
		canvas.getContext("2d").drawImage(e, 0, 0);
		var e = canvas.width,
			j5 = canvas.height;
		e > bO.aBc || j5 > bO.aBc || e < 10 || j5 < 10 ? (e = "Image dimensions must be between 10 and " + bO.aBc + ".", r.rd ? r.rd.showToast(e) : alert(e)) : 20 === n.qL && n.aAV().aBa(canvas)
	}
	this.dR = function() {
		(input = document.createElement("input")).type = "file", input.setAttribute("accept", ".png, .jpg, .gif, .jpeg"), input.onchange = aBS
	}, this.xW = function() {
		input && (input.onchange = null, input.value = "", input = null)
	}, this.aBT = function() {
		input.click()
	}, this.aBV = function(aBW) {
		var g = aBW.name.split("."),
			g = g[g.length - 1].toLowerCase();
		"gif" !== g && "jpg" !== g && "jpeg" !== g && "png" !== g || ((g = new FileReader).onload = aBZ, g.readAsDataURL(aBW))
	}
}

function cn() {
	this.aBe = null, this.dR = function() {
		10 !== a8.jv ? this.aBe = null : this.aBe = new Uint32Array(a8.eR)
	}, this.iQ = function() {
		10 === a8.jv && this.aBf()
	}, this.aBf = function() {
		for (var g3, target, a6q, aBe = this.aBe, vv = ag.je, ze = ab.gX, a6 = ag.jc - 1; 0 <= a6; a6--)(g3 = vv[a6]) >= a8.jb || (target = Math.max(bH.ew(ze[g3], 4), 2048), a6q = Math.max(aZ.a6r(g3), 100), aBe[g3] += bH.ew(a6q * target, 1e4),
			aBe[g3] > target && (aBe[g3] = target))
	}, this.zj = function(player, ik) {
		return ik > this.aBe[player] ? (ik = this.aBe[player], this.aBe[player] = 0) : this.aBe[player] -= ik, ik
	}
}

function dP() {
	function aBh(e) {
		var g, e = e.target.files;
		e && 0 < e.length && (e = e[0], "json" === (g = e.name.split("."))[g.length - 1].toLowerCase()) && ((g = new FileReader).onload = aBp, g.readAsText(e))
	}

	function aBp(e) {
		var aBt;
		a8.w4 || (e = JSON.parse(e.target.result), aBt = a8.data = new a0Y, aBu(e, aBt, "mapType", 0, 2), aBu(e, aBt, "mapProceduralIndex", 0, 255), aBu(e, aBt, "mapRealisticIndex", 0, 255), aBu(e, aBt, "mapSeed", 0, 16383), function(aBs, aBt, g4,
				max) {
				aBs = aBs[g4];
				aBt[g4] = aC0(aBs) ? aBs.slice(0, max) : aBt[g4]
			}(e, aBt, "mapName", 20), function(aBs, aBt, g4) {
				var aBb;
				2 === aBt.mapType && (!aC0(aBs = aBs[g4]) || aBs.length <= 20 ? aBt.mapType = 0 : ((aBb = new Image).onload = function() {
					b6.aC1.aC2(aBb, 1), aBb.onload = null, aBb = null
				}, aBb.src = aBs))
			}(e, aBt, "canvas"), aBu(e, aBt, "passableWater", 0, 1), aBu(e, aBt, "passableMountains", 0, 1), aBu(e, aBt, "playerCount", 1, 512), aBu(e, aBt, "humanCount", 1, 1), aBu(e, aBt, "selectedPlayer", 0, 0), aBu(e, aBt, "gameMode", 0, 1),
			aBu(e, aBt, "playerMode", 0, 0), aBu(e, aBt, "battleRoyaleMode", 0, 0), aBu(e, aBt, "numberTeams", 0, 8), aBu(e, aBt, "isZombieMode", 0, 0), aBu(e, aBt, "isContest", 0, 0), aBu(e, aBt, "isReplay", 0, 0), aBx(e, aBt, "elo", 16, 2,
				16383), aBu(e, aBt, "colorsType", 0, 1), aBu(e, aBt, "colorsPersonalized", 0, 1), aBx(e, aBt, "colorsData", 32, 512, 262143), aBu(e, aBt, "selectableColor", 0, 1), aBx(e, aBt, "teamPlayerCount", 16, 9, 512), aBu(e, aBt,
				"neutralBots", 0, 1), aBu(e, aBt, "botDifficultyType", 0, 3), aBu(e, aBt, "botDifficultyValue", 0, 15), aBx(e, aBt, "botDifficultyTeam", 8, 9, 15), aBx(e, aBt, "botDifficultyData", 8, 512, 15), aBu(e, aBt, "spawningType", 0, 2),
			aBu(e, aBt, "spawningSeed", 0, 16383), aBx(e, aBt, "spawningData", 16, 1024, 4095), aBu(e, aBt, "selectableSpawn", 0, 1), aBu(e, aBt, "playerNamesType", 0, 2),
			function(aBs, aBt, g4, size, max) {
				var yp = aBs[g4];
				if (Array.isArray(yp)) {
					for (var yq = new Array(size), eU = Math.min(yp.length, size), a6 = 0; a6 < eU; a6++) yq[a6] = aC0(yp[a6]) ? yp[a6].slice(0, max) : "";
					aBt[g4] = yq
				}
			}(e, aBt, "playerNamesData", 512, 20), aBu(e, aBt, "selectableName", 0, 1), aBu(e, aBt, "aIncomeType", 0, 2), aBu(e, aBt, "aIncomeValue", 0, 255), aBx(e, aBt, "aIncomeData", 8, 512, 255), aBu(e, aBt, "tIncomeType", 0, 2), aBu(e, aBt,
				"tIncomeValue", 0, 255), aBx(e, aBt, "tIncomeData", 8, 512, 255), aBu(e, aBt, "iIncomeType", 0, 2), aBu(e, aBt, "iIncomeValue", 0, 255), aBx(e, aBt, "iIncomeData", 8, 512, 255), aBu(e, aBt, "sResourcesType", 0, 2), aBu(e, aBt,
				"sResourcesValue", 0, 2047), aBx(e, aBt, "sResourcesData", 16, 512, 2047), n.rw(), n.l6.aBr[0] = 0, n.o(19))
	}

	function aBu(aBs, aBt, g4, min, max) {
		aBs = aBs[g4];
		aBt[g4] = "number" == typeof aBs && min <= aBs && aBs <= max ? Math.floor(aBs) : aBt[g4]
	}

	function aC0(or) {
		return "string" == typeof or
	}

	function aBx(aBs, aBt, g4, aC3, size, max) {
		var yp = aBs[g4];
		if (Array.isArray(yp)) {
			for (var yq = new(8 === aC3 ? Uint8Array : 16 === aC3 ? Uint16Array : Uint32Array)(size), eU = Math.min(yp.length, size), a6 = 0; a6 < eU; a6++) yq[a6] = bH.oi(yp[a6], 0, max);
			aBt[g4] = yq
		}
	}
	this.aBg = function() {
		var input = document.createElement("input");
		input.type = "file", input.setAttribute("accept", ".json"), input.onchange = aBh, input.click()
	}, this.aBi = function() {
		for (var aBl, a7z, a3R = a8.data, keys = Object.keys(a3R), aBj = {}, a6 = 0; a6 < keys.length; a6++) {
			var key = keys[a6];
			a3R[key] instanceof Uint8Array || a3R[key] instanceof Uint16Array || a3R[key] instanceof Uint32Array ? aBj[key] = Array.from(a3R[key]) : aBj[key] = a3R[key]
		}
		aBj.canvas = 2 === aBj.mapType && aBj.canvas ? aBj.canvas.toDataURL() : null, aBl = aBj, aBl = JSON.stringify(aBl, null, 2), aBl = new Blob([aBl], {
			type: "application/json"
		}), (a7z = document.createElement("a")).href = URL.createObjectURL(aBl), a7z.download = "tt_scenario.json", a7z.click()
	}
}

function cO() {
	var aC4, aC5, size, ij, ik, id, aC6;

	function aC7(player) {
		return player < a8.jb ? aC4 * player : aC4 * a8.jb + aC5 * (player - a8.jb)
	}
	this.dR = function() {
		aC4 = a8.jb < 16 ? 12 : 8, aC5 = 4;
		var eU = aC7(a8.eR);
		size = new Uint8Array(a8.eR), ij = new Uint16Array(eU), ik = new Uint32Array(eU), id = new Uint16Array(eU), aC6 = new Uint8Array(eU)
	}, this.oh = function(a3e, aC8) {
		var aC9 = this.gY(a3e, aC8),
			aC8 = (this.gW(a3e, aC8, 0), b7.fr.fu(a3e, aC9));
		bZ.fv(a3e, aC9 - aC8, 12)
	}, this.clear = function(player) {
		size[player] = 0
	}, this.aBO = function(player, aC8) {
		var aCC, aC8 = function(player, aC8) {
			var a6, kL = aC7(player);
			for (a6 = size[player] - 1; 0 <= a6; a6--)
				if (0 === id[kL + a6] && ij[kL + a6] === aC8) return a6;
			return size[player]
		}(player, aC8);
		aC8 !== size[player] && (aCC = ik[aC7(player) + aC8], this.fw(player, aC8), this.ig(player, aCC, a8.eR))
	}, this.ix = function(player, aC8) {
		for (var kL = aC7(player), a6 = size[player] - 1; 0 <= a6; a6--)
			if (0 === id[kL + a6] && ij[kL + a6] === aC8) return !0;
		return !1
	}, this.jF = function(player) {
		return player < a8.jb ? size[player] < aC4 : size[player] < aC5
	}, this.fb = function(player) {
		return size[player]
	}, this.fh = function(player, a6) {
		return ij[aC7(player) + a6]
	}, this.fc = function(player, a6) {
		return id[aC7(player) + a6]
	}, this.aCD = function(player, aCE) {
		for (var kL = aC7(player), a6 = size[player] - 1; 0 <= a6; a6--)
			if (id[kL + a6] === aCE) return a6;
		return -1
	}, this.fi = function(player, a6) {
		return ik[aC7(player) + a6]
	}, this.gY = function(player, aC8) {
		for (var kL = aC7(player), a6 = size[player] - 1; 0 <= a6; a6--)
			if (0 === id[kL + a6] && ij[kL + a6] === aC8) return ik[kL + a6];
		return 0
	}, this.aBF = function(player) {
		for (var kL = aC7(player), ex = 0, a6 = size[player] - 1; 0 <= a6; a6--) ex += ik[kL + a6];
		return ex
	}, this.aCF = function(player) {
		for (var kL = aC7(player), ex = 0, a6 = size[player] - 1; 0 <= a6; a6--) 0 === id[kL + a6] && (ex += ik[kL + a6]);
		return ex
	}, this.aB4 = function(player) {
		for (var kL = aC7(player), fy = 0, a6 = size[player] - 1; 0 <= a6; a6--) 0 < id[kL + a6] && fy++;
		return fy
	}, this.gW = function(player, aC8, aCC) {
		for (var kL = aC7(player), a6 = size[player] - 1; 0 <= a6; a6--) 0 === id[kL + a6] && ij[kL + a6] === aC8 && (ik[kL + a6] = aCC)
	}, this.gH = function(player, a6, aCC) {
		ik[aC7(player) + a6] = Math.max(aCC, 0)
	}, this.gI = function(player, a6) {
		aC6[aC7(player) + a6] = 0
	}, this.fj = function(player, a6) {
		return aC6[aC7(player) + a6]
	}, this.ig = function(player, aCC, aC8) {
		b7.fr.zZ(aC8) && bZ.lO[6 - b7.fr.iz(player)]++;
		for (var kL = aC7(player), a6 = size[player] - 1; 0 <= a6; a6--)
			if (0 === id[kL + a6] && ij[kL + a6] === aC8) return ik[kL + a6] += aCC, void(ik[kL + a6] = ik[kL + a6] > a8.zf ? a8.zf : ik[kL + a6]);
		ij[kL + size[player]] = aC8, ik[kL + size[player]] = aCC, id[kL + size[player]] = 0, aC6[kL + size[player]] = 1, size[player]++, player < a8.jb && (aC8 === a8.eE ? aI.wG(player, 5) : player === a8.eE && aa.a2R(aC8))
	}, this.aCG = function(player, aCC, aCE) {
		var kL = aC7(player);
		ij[kL + size[player]] = 0, ik[kL + size[player]] = aCC, id[kL + size[player]] = aCE, aC6[kL + size[player]] = 0, size[player]++
	}, this.fw = function(player, oA) {
		var en, kL;
		if (0 !== size[player])
			for (kL = aC7(player), size[player]--, en = oA; en < size[player]; en++) ij[kL + en] = ij[kL + en + 1], ik[kL + en] = ik[kL + en + 1], id[kL + en] = id[kL + en + 1], aC6[kL + en] = aC6[kL + en + 1]
	}, this.aBB = function(player) {
		for (var en, kL, aBL = [], a6 = ag.jc - 1; 0 <= a6; a6--)
			for (kL = aC7(ag.je[a6]), en = size[ag.je[a6]] - 1; 0 <= en; en--)
				if (0 === id[kL + en] && ij[kL + en] === player) {
					aBL.push(ag.je[a6]);
					break
				} return aBL
	}
}

function cP() {
	var aCH;

	function aCJ(player) {
		var hG = aCH[bH.ew((a8.eR - 1) * ab.gJ[player], a8.jL)],
			jG = (bb.jY() < 1920 && (hG = Math.max(bH.ew(100 * (13440 - 6 * bb.jY()), 1920), hG)), aZ.jH(player));
		return ab.gX[player] > jG && (hG -= bH.ew(2 * hG * (ab.gX[player] - jG), jG)), Math.min(Math.max(hG, 0), 700)
	}

	function aCU(m6) {
		for (var gJ = ab.gJ, je = ag.je, a6 = ag.jc - 1; 0 <= a6; a6--) {
			var g3 = je[a6];
			b7.fr.fu(g3, bH.ew(m6 * gJ[g3], 32))
		}
	}

	function aCR() {
		var ss = a8.eE;
		bK.f2[0] = ab.gX[ss] - ab.zd[ss]
	}

	function aCT(oA) {
		var ss = a8.eE;
		bZ.lO[oA] += ab.gX[ss] - ab.zd[ss] - bK.f2[0]
	}
	this.dY = function() {
		for (var eU = a8.eR, a6 = (aCH = new Uint16Array(eU), 0); a6 < eU; a6++) aCH[a6] = 100 + aCI(bH.ew(25600 * a6, eU - 4), 9)
	}, this.dR = function() {
		0 === a8.data.iIncomeType ? this.a6r = aCJ : 1 === a8.data.iIncomeType ? this.a6r = function(player) {
			return bH.ew(a8.data.iIncomeValue * aCJ(player), 64)
		} : this.a6r = function(player) {
			return bH.ew(a8.data.iIncomeData[player] * aCJ(player), 64)
		}
	}, this.iQ = function() {
		if (bb.jY() % 10 == 9 && (function() {
				aCR();
				for (var je = ag.je, gX = ab.gX, a6 = ag.jc - 1; 0 <= a6; a6--) {
					var g3 = je[a6],
						aCS = bH.ew(aZ.a6r(g3) * gX[g3], 1e4);
					b7.fr.fu(g3, Math.max(aCS, 1))
				}
				aCT(9)
			}(), function() {
				if (0 !== a8.data.aIncomeType) {
					if (aCR(), 1 === a8.data.aIncomeType)
						for (var gJ = ab.gJ, je = ag.je, m6 = a8.data.aIncomeValue, a6 = ag.jc - 1; 0 <= a6; a6--) {
							var g3 = je[a6];
							b7.fr.fu(g3, bH.ew(m6 * gJ[g3], 128))
						} else 2 === a8.data.aIncomeType && function() {
							for (var gJ = ab.gJ, je = ag.je, m6 = a8.data.aIncomeData, a6 = ag.jc - 1; 0 <= a6; a6--) {
								var g3 = je[a6];
								b7.fr.fu(g3, bH.ew(m6[g3] * gJ[g3], 128))
							}
						}();
					aCT(18)
				}
			}(), bb.jY() % 100 == 99)) {
			if (aCR(), 0 === a8.data.tIncomeType) aCU(32);
			else if (1 === a8.data.tIncomeType) aCU(a8.data.tIncomeValue);
			else
				for (var gJ = ab.gJ, je = ag.je, m6 = a8.data.tIncomeData, a6 = ag.jc - 1; 0 <= a6; a6--) {
					var g3 = je[a6];
					b7.fr.fu(g3, bH.ew(m6[g3] * gJ[g3], 32))
				}
			aCT(8)
		}
	}, this.jH = function(player) {
		return Math.min(100 * ab.gJ[player], a8.a0U)
	}, this.nZ = function(player, na) {
		b7.fr.fu(na, bK.f3[0]), bZ.nx(player, na), aa.aCL(player, bK.f3[0] + bK.f3[1]), aa.ny(na, bK.f3[0]), b7.fr.oW(player)
	}, this.aCM = function() {
		for (var eU = ag.jc, vv = ag.je, kL = 0, ze = ab.gX, a6 = 0; a6 < eU; a6++) kL += ze[vv[a6]];
		return kL
	}, this.aCN = function(x2) {
		for (var g3, eU = ag.jc, vv = ag.je, kL = 0, ze = ab.gX, eS = bc.eS, a6 = 0; a6 < eU; a6++) eS[g3 = vv[a6]] === x2 && (kL += ze[g3]);
		return kL
	}
}

function cR() {
	var aCY, aCZ, aCa, aCb, aCc, aCd, aCe, aCf, aCg, aCh, aCi, aCj, aCk, aCl, aCm, aCn, aCo, aCp, aCr, aCs, a7s, aCt, aCu, aD1, aD2, aCq = null,
		aCw = 0,
		aCx = !1,
		aCy = new Float32Array(4),
		aCz = 0,
		aD0 = !0,
		a62 = 400;

	function pE() {
		aCg = Math.floor(+au.pC), aCh = Math.floor(.5 * aCg)
	}

	function aD3() {
		var a6, aD8;
		for (rA.font = b7.pA.qR(1, 100 * aCi), aD8 = 80 / Math.floor(rA.measureText(b7.wu.a04(a8.zf)).width), rA.font = b7.pA.qR(1, 100), a6 = a8.eR - 1; 0 <= a6; a6--) aCf[a6] = 100 / Math.floor(rA.measureText(ab.a2N[a6]).width), aCe[a6] = Math.min(
			aD8, aCf[a6])
	}

	function aD9(a6) {
		return !bf.dj.data[7].value || (a6 = ab.gX[a6]) < 1e6 ? 1 : a6 < 1e7 ? aCy[0] : aCy[Math.min(Math.floor(Math.log10(a6)) - 6, 3)]
	}

	function aD7(hE) {
		aCp = !1, aCo = 1, aCm = aCn = 0, aD0 && (b7.pA.textAlign(hE, 1), b7.pA.textBaseline(hE, 1));
		for (var aDF, aDG, a6, aDH, fontSize, aDI, lu = ht / hu, lv = hv / hu, m8 = (au.a0 + ht) / hu, m9 = (au.j5 + hv) / hu, aDJ = 0 !== ab.lS[a8.eE] && aX.vx(a8.eE), en = ag.jc - 1; 0 <= en; en--) a6 = ag.je[en], (fontSize = Math.floor(aCl * hu *
			aD9(a6) * aCe[a6] * aCc[a6])) < aCk || aCg <= fontSize || aCa[a6] + aCc[a6] > lu && aCa[a6] < m8 && aCb[a6] + aCd[a6] > lv && aCb[a6] < m9 && (aDF = Math.floor(au.a0 * (aCa[a6] + aCc[a6] / 2 - lu) / (m8 - lu)), aDG = Math.floor(au
			.j5 * (aCb[a6] + aCd[a6] / 2 - lv) / (m9 - lv) - .1 * fontSize), aDH = aX.a46[a6], hE.font = b7.pA.qR(1 === ab.zX[a6] ? 4 : 1, fontSize), hE.fillStyle = aDK(fontSize, aDH % 2), bf.dj.data[7].value ? aDL(hE, a6, fontSize, aDF, aDG,
			aDH) : aDM(a6, fontSize, aDF, aDG, hE), aCp = !0, 0 < a7s[a6] ? function(aDF, aDG, fontSize, a6, hE) {
			0 === jM[a6] ? ae.uf.vJ(aCs[a6]) ? (function(aDF, aDG, fontSize, player, nk, hE) {
				for (var tQ = aDG, hD = (hE.globalAlpha = aDU(fontSize), aD9(player) * (bf.dj.data[7].value ? aCz : aCf[player])), tP = aDF - .5 * fontSize / hD - .9 * fontSize, eo = 0; eo < 2; eo++) hE.fillText(ae.uf.vD(nk), tP, tQ),
					tP = aDF + .5 * fontSize / hD + .9 * fontSize;
				hE.globalAlpha = 1
			}(aDF, aDG, fontSize, a6, aCs[a6], hE), aDO(aDF, aDG, fontSize, 0, 0, hE)) : ae.uf.vL(aCs[a6]) ? (aDX(aDF, aDG, fontSize, aCs[a6], 0, hE), aDO(aDF, aDG, fontSize, 0, 1, hE)) : (aDX(aDF, aDG, fontSize, aCs[a6], 1, hE), aDO(aDF,
				aDG, fontSize, 1, 0, hE)) : aDX(aDF, aDG, fontSize, aCs[a6], 0, hE)
		}(aDF, aDG, fontSize, a6, hE) : 0 === jM[a6] && aDO(aDF, aDG, fontSize, 0, 0, hE), aDJ && (0 < a7s[a6 + a8.eR] || 0 < a7s[a6 + 2 * a8.eR] || 0 < a7s[a6 + 3 * a8.eR] || 0 < a7s[a6 + 4 * a8.eR]) && function(aDF, aDG, fontSize, a6, hE) {
			var ep, fy = -1;
			for (ep = 4; 1 <= ep; ep--) 0 < a7s[a6 + ep * a8.eR] && fy++;
			for (ep = 1; ep < 5; ep++) 0 < a7s[a6 + ep * a8.eR] && (! function(aDF, aDG, fontSize, ep, a6, aDS, e3, hE) {
				var z1;
				if (1 === ep) {
					a6 = aCs[a6 + a8.eR];
					if (!ae.uf.vK(a6)) return function(aDF, aDG, fontSize, nk, aDS, hE) {
						hE.globalAlpha = aDU(fontSize);
						aDF -= .534 * aDS * fontSize, aDS = aDG + 1.59 * fontSize;
						hE.font = b7.pA.qR(0, .785 * fontSize), hE.fillText(ae.uf.vD(nk), aDF, aDS), hE.globalAlpha = 1
					}(aDF, aDG, fontSize, a6, aDS, hE);
					z1 = ae.sr.um[a6 - 1024 + ae.uf.ux]
				} else z1 = 2 === ep ? aG.a19()[4].canvas[+(e3 < 255)] : (3 === ep ? aG.a19()[5] : aG.a19()[6]).canvas[0];
				a6 = ae.sr.un, e3 = .8 * fontSize / a6, ep = aDF - .5 * e3 * a6 - .534 * aDS * fontSize, aDF = aDG + 1.4 * e3 * a6;
				hE.setTransform(e3, 0, 0, e3, ep, aDF), hE.globalAlpha = aDU(fontSize), hE.drawImage(z1, 0, 0), hE.globalAlpha = 1, hE.setTransform(1, 0, 0, 1, 0, 0)
			}(aDF, aDG, fontSize, ep, a6, fy, a7s[a6 + ep * a8.eR], hE), fy -= 2)
		}(aDF, aDG, fontSize, a6, hE), (aDI = aCi * fontSize) < aCk || (hE.font = b7.pA.qR(1, aDI), aDG += Math.floor(.78 * fontSize), bf.dj.data[7].value ? aDM(a6, aDI, aDF, aDG, hE) : aDL(hE, a6, aDI, aDF, aDG, aDH)))
	}

	function aDM(a6, fontSize, eb, ed, hE) {
		var ___id = a6;
		var showName = a6 < a8.jb || !__fx.settings.hideBotNames;
		if (showName) hE.fillText(ab.a2N[a6], eb, ed), a6 < a8.jb && 2 !== ab.zX[a6] || (a6 = fontSize / aCf[a6], hE.fillRect(eb - .5 * a6, ed + b7.pA.vE * fontSize, a6, Math.max(1, .1 * fontSize)));
		bf.dj.data[7].value && __fx.settings.showPlayerDensity && (
			__fx.settings.coloredDensity && (hE.fillStyle = __fx.utils.textStyleBasedOnDensity(___id)),
			hE.fillText(__fx.utils.getDensity(___id), eb, showName ? ed + fontSize : ed)
		);
	}

	function aDL(hE, a6, fontSize, aDF, aDG, aDH) {
		var ___id = a6;
		a6 = b7.wu.a04(ab.gX[a6]);
		aDH >> 1 & 1 ? (hE.lineWidth = .05 * fontSize, hE.strokeStyle = aDK(fontSize, aDH % 2), hE.strokeText(a6, aDF, aDG)) : (1 < aDH && (hE.lineWidth = .12 * fontSize, hE.strokeStyle = aDK(fontSize, aDH), hE.strokeText(a6, aDF, aDG)), hE.fillText(
			a6, aDF, aDG));
		bf.dj.data[7].value || __fx.settings.showPlayerDensity && (__fx.settings.coloredDensity && (hE.fillStyle = __fx.utils.textStyleBasedOnDensity(___id)), hE.fillText(__fx.utils.getDensity(___id), aDF, aDG + fontSize))
	}

	function aDO(aDF, aDG, fontSize, aDS, aDT, hE) {
		var a1j = .95 * fontSize / aCu,
			aDF = aDF - .5 * a1j * aCt + .8 * aDS * fontSize,
			aDS = aDG - 1.76 * a1j * aCu - (.35 - b7.pA.vE + .7) * aDT * fontSize;
		hE.setTransform(a1j, 0, 0, a1j, aDF, aDS), hE.globalAlpha = aDU(fontSize), hE.drawImage(aW.get(4), 0, 0), hE.globalAlpha = 1, hE.setTransform(1, 0, 0, 1, 0, 0)
	}

	function aDX(aDF, aDG, fontSize, nk, aDS, hE) {
		var h8, tP, a1j;
		hE.globalAlpha = aDU(fontSize), ae.uf.vK(nk) ? (h8 = ae.sr.un, hE.setTransform(a1j = 1.1 * fontSize / h8, 0, 0, a1j, tP = aDF - .5 * a1j * h8 - .8 * aDS * fontSize, a1j = aDG - 1.55 * a1j * h8), hE.drawImage(ae.sr.um[nk - 1024 + ae.uf.ux], 0,
			0), hE.setTransform(1, 0, 0, 1, 0, 0)) : (tP = aDF - .8 * aDS * fontSize, a1j = aDG - (.35 - b7.pA.vE + 1) * fontSize, hE.fillText(ae.uf.vD(nk), tP, a1j)), hE.globalAlpha = 1
	}

	function aDK(fontSize, aDH) {
		return aCh <= fontSize && fontSize < aCg ? bc.aDZ[aDH] + aDU(fontSize).toFixed(3) + ")" : bc.aDa[aDH]
	}

	function aDU(fontSize) {
		return aCh <= fontSize && fontSize < aCg ? 1 - (fontSize - aCh) / (aCg - aCh) : 1
	}

	function aDj(hD, a0) {
		return 1 + Math.floor(aCj * hD * a0)
	}

	function aDg(a6) {
		for (var left = aCa[a6], en = aCa[a6] - ab.i7[a6] - 1; 0 <= en; en--)
			if (!aDk(a6, --left, aCb[a6], aCd[a6])) {
				left++;
				break
			} var right = aCa[a6];
		for (en = ab.i8[a6] - aCa[a6] - aCc[a6]; 0 <= en; en--)
			if (!aDk(a6, ++right + aCc[a6] - 1, aCb[a6], aCd[a6])) {
				right--;
				break
			} var eb = Math.floor((left + right) / 2),
			top = aCb[a6];
		for (en = aCb[a6] - ab.i9[a6] - 1; 0 <= en; en--)
			if (!aDl(a6, eb, --top, aCc[a6])) {
				top++;
				break
			} var bottom = aCb[a6];
		for (en = ab.iA[a6] - aCb[a6] - aCd[a6]; 0 <= en; en--)
			if (!aDl(a6, eb, ++bottom + aCd[a6] - 1, aCc[a6])) {
				bottom--;
				break
			} var ed = Math.floor((top + bottom) / 2);
		aDd(a6, eb, ed, aCc[a6], aCd[a6]) && (aCa[a6] = eb, aCb[a6] = ed)
	}

	function aDd(player, eb, ed, a0, j5) {
		eX = Math.floor(.2 * a0);
		for (var eX, ep = eb + a0 - 1; eb <= ep; ep--)
			if (!aDk(player, ep, ed, j5)) return;
		for (ep = ed + j5 - 1 - (eX = (eX = Math.floor(.25 * j5)) < 1 ? 1 : eX); ed + eX <= ep; ep--)
			if (!aDl(player, eb, ep, a0)) return;
		return 1
	}

	function aDk(player, eb, ed, j5) {
		return aX.uG(player, 4 * (ed * bO.ef + eb)) && aX.uG(player, 4 * ((ed + j5 - 1) * bO.ef + eb))
	}

	function aDl(player, eb, ed, a0) {
		return aX.uG(player, 4 * (ed * bO.ef + eb)) && aX.uG(player, 4 * (ed * bO.ef + eb + a0 - 1))
	}
	this.dR = function() {
		if (a62 = 0 === (a62 = bf.dj.data[11].value) ? 280 : 1 === a62 ? 187 : 112, aCp = !1, aCl = .88, aCi = .5, aCj = 1.8, aCk = 12 - 3 * bf.dj.data[9].value, aCZ = aCY = 0, aCa = new Uint16Array(a8.eR), aCb = new Uint16Array(a8.eR), aCc =
			new Uint16Array(a8.eR), aCd = new Uint16Array(a8.eR), aCe = new Float32Array(a8.eR), aCf = new Float32Array(a8.eR), aCs = new Uint16Array(2 * a8.eR), a7s = new Uint8Array(5 * a8.eR), aD1 = new Uint8Array(a8.eR), aD2 = new Uint8Array(
				a8.eR), aD0 || (aCq = aCq || document.createElement("canvas")), pE(), aCn = aCm = 0, aCo = 1, bf.dj.data[7].value) {
			var a6, aD8;
			for (aD3(), rA.font = b7.pA.qR(1, 100), aD8 = 100 / Math.floor(rA.measureText("900 000").width), a6 = a8.eR - 1; 0 <= a6; a6--) aCe[a6] = Math.min(aD8, 2 * aCf[a6]);
			aCz = aD8, aCy[0] = 100 / (aD8 * Math.floor(rA.measureText("5 000 000").width)), aCy[1] = 100 / (aD8 * Math.floor(rA.measureText("50 000 000").width)), aCy[2] = 100 / (aD8 * Math.floor(rA.measureText("500 000 000").width)), aCy[3] =
				100 / (aD8 * Math.floor(rA.measureText("1 000 000 000").width))
		} else aD3();
		! function() {
			var a6;
			for (a6 = a8.eR - 1; 0 <= a6; a6--) ab.gJ[a6] < 12 ? (aCa[a6] = ab.i7[a6] + 1, aCb[a6] = ab.i9[a6] + 1, aCc[a6] = 1, aCd[a6] = 1) : (aCa[a6] = ab.i7[a6], aCb[a6] = ab.i9[a6] + 1, aCc[a6] = 4, aCd[a6] = 2);
			if (a8.gr)
				for (a6 = 0; a6 < a8.jb; a6++) aCc[a6] = 0;
			aCt = aW.get(4).width, aCu = aW.get(4).height
		}()
	}, this.aCL = function(g3, a2i) {
		a2i > 18 * ab.gJ[g3] ? (aD2[g3] = 6, aX.a46[g3] = 2 + aX.a46[g3] % 2) : (aD1[g3] = 4, (aX.a46[g3] < 2 || 3 < aX.a46[g3]) && (aX.a46[g3] = 6 + aX.a46[g3] % 2))
	}, this.ny = function(g3, a2i) {
		a2i > 6 * ab.gJ[g3] ? (aD2[g3] = 6, aX.a46[g3] = 4 + aX.a46[g3] % 2) : (aD1[g3] = 4, (aX.a46[g3] < 4 || 5 < aX.a46[g3]) && (aX.a46[g3] = 8 + aX.a46[g3] % 2))
	}, this.resize = function() {
		pE(), aD0 || aD7(aCr)
	}, this.a0Q = function() {
		for (var a6 = 0; a6 < a8.jb; a6++) ab.i8[a6] - ab.i7[a6] != 3 || ab.iA[a6] - ab.i9[a6] != 3 ? (aCa[a6] = ab.i7[a6] + (ab.i8[a6] !== ab.i7[a6] ? 1 : 0), aCb[a6] = ab.i9[a6], aCc[a6] = 1, aCd[a6] = 1) : (aCa[a6] = ab.i7[a6], aCb[a6] = ab
			.i9[a6] + 1, aCc[a6] = 4, aCd[a6] = 2)
	}, this.oj = function(player, oA, aDA) {
		! function(player, oA, aDA) {
			player += oA * a8.eR;
			0 === oA ? aCs[player] === aDA && 0 < a7s[player] ? a7s[player] = 0 : (aCs[player] = aDA, a7s[player] = ae.uf.vJ(aDA) ? 255 : 64) : 1 === oA ? (a7s[player] = 64, aCs[player] = aDA) : a7s[player] = aDA
		}(player, oA, aDA), 2 === a8.w4 && this.lE(!0)
	}, this.r9 = function() {
		aD0 ? aD7(rA) : aCp && (1 !== aCo ? (rA.imageSmoothingEnabled = !0, rA.setTransform(aCo, 0, 0, aCo, 0, 0), rA.drawImage(aCq, -aCm / aCo, -aCn / aCo), rA.setTransform(1, 0, 0, 1, 0, 0), rA.imageSmoothingEnabled = !1) : rA.drawImage(aCq, -
			aCm, -aCn))
	}, this.a4q = function(he, hh) {
		aCm += he, aCn += hh
	}, this.xg = function(he, hh) {
		aa.a4q(he, hh)
	}, this.zoom = function(yc, kg, kh) {
		aCo *= yc, aCm = (aCm + kg) * yc - kg, aCn = (aCn + kh) * yc - kh
	}, this.lE = function(bl) {
		return !aD0 && !(!aCx && !bl && bb.e2 < aCw + (1 === aCo && 0 === aCm && 0 === aCn && (a8.a0s() || a8.gr || 2 === a8.w4) ? 1e3 : a62) || (aCx = !1, aCw = bb.e2, aD7(aCr), 0))
	}, this.aDD = function(a6) {
		return aD9(a6) * aCe[a6]
	}, this.aDE = function(player) {
		return aCe[player]
	}, this.iQ = function() {
		bb.jY() % 10 == 9 && (aCx = a8.a0u() && !a8.a0s()), !a8.a0s() && 4 <= ++aCZ && function() {
			var a6, en, eo;
			for (aCZ = 0, eo = 4; 1 <= eo; eo--)
				for (en = ag.jc - 1; 0 <= en; en--) a6 = ag.je[en] + eo * a8.eR, 0 < a7s[a6] && a7s[a6] < 255 && a7s[a6]--;
			if (2 !== a8.w4)
				for (en = ag.jc - 1; 0 <= en; en--) a6 = ag.je[en], 0 < a7s[a6] && a7s[a6] < 255 && a7s[a6]--
		}();
		var a6, en, eU = Math.floor(.1 * ag.jc);
		for (eU = (eU = eU < 8 ? 8 : eU) > ag.jc ? ag.jc : eU, a6 = aCY + eU - 1; aCY <= a6; a6--) en = a6 % ag.jc, ! function(a6) {
			var hD = aD9(a6) * aCe[a6];
			0 < aCc[a6] && aDd(a6, aCa[a6], aCb[a6], aCc[a6], aCd[a6]) ? ! function(a6) {
				for (var eb, ed, a0, j5, e8 = !1, eo = 0; eo < 8; eo++) {
					if (a0 = aCc[a6] + 2, j5 = aCd[a6] + 2, a0 > ab.i8[a6] - ab.i7[a6] + 1 || j5 > ab.iA[a6] - ab.i9[a6] + 1) return e8;
					if (eb = aCa[a6] - 1, ed = aCb[a6] - 1, !aDd(a6, eb, ed, a0, j5)) return e8;
					aCa[a6] = eb, aCb[a6] = ed, aCc[a6] = a0, aCd[a6] = j5, e8 = !0
				}
				return e8
			}(a6) && function(a6, hD) {
				for (var eb, ed, a0, j5, e8 = !1, a81 = aCc[a6], m6 = 1 + Math.floor(.02 * a81), eo = 1; eo < 5; eo++) {
					if ((a0 = a81 + eo * m6) > ab.i8[a6] - ab.i7[a6] + 1) return e8;
					if ((j5 = aDj(hD, a0)) > ab.iA[a6] - ab.i9[a6] + 1) return e8;
					eb = ab.i7[a6] + Math.floor(Math.random() * (ab.i8[a6] - ab.i7[a6] + 2 - a0)), ed = ab.i9[a6] + Math.floor(Math.random() * (ab.iA[a6] - ab.i9[a6] + 2 - j5)), aDd(a6, eb, ed, a0, j5) && (aCa[a6] = eb, aCb[a6] = ed, aCc[
						a6] = a0, aCd[a6] = j5, e8 = !0)
				}
				return e8
			}(a6, hD) && aDg(a6) : ! function(a6, hD) {
				var j5, eb = aCa[a6] + 1,
					ed = aCb[a6] + 1,
					a0 = aCc[a6] - 2;
				for (;;) {
					if (a0 < 1) {
						aCc[a6] = 0;
						break
					}
					if (j5 = aDj(hD, a0), aDd(a6, eb, ed, a0, j5)) return aCa[a6] = eb, aCb[a6] = ed, aCc[a6] = a0, aCd[a6] = j5, 1;
					eb++, ed++, a0 -= 2
				}
				return
			}(a6, hD) ? function(a6, hD) {
				var eb, ed, a0, j5, eo, mD, is = ab.i8[a6] - ab.i7[a6] + 1,
					kv = Math.floor(.02 * is);
				for (mD = -6 * (kv = kv < 1 ? 1 : kv), eo = is; mD <= eo; eo -= kv)
					if (j5 = aDj(hD, a0 = 0 < eo ? eo : 1), eb = ab.i7[a6] + Math.floor(Math.random() * (ab.i8[a6] - ab.i7[a6] + 2 - a0)), ed = ab.i9[a6] + Math.floor(Math.random() * (ab.iA[a6] - ab.i9[a6] + 2 - j5)), aDd(a6, eb, ed, a0,
							j5)) return aCa[a6] = eb, aCb[a6] = ed, aCc[a6] = a0, aCd[a6] = j5
			}(a6, hD) : aDg(a6)
		}(ag.je[en]);
		aCY = (aCY += eU) % ag.jc
	}, this.l9 = function() {
		var a6, g3, hN, hO;
		if (bb.jY() % 4 == 1)
			for (a6 = ag.jc - 1; 0 <= a6; a6--) g3 = ag.je[a6], aX.a46[g3] < 2 || ((hN = Math.max(aD1[g3] - 1, 0)) === (hO = Math.max(aD2[g3] - 1, 0)) ? 0 === hN && (aX.a46[g3] %= 2) : 0 === hO && aX.a46[g3] < 6 && (aX.a46[g3] += 4), aD1[g3] =
				hN, aD2[g3] = hO)
	}, this.a2R = function(player) {
		var a6 = player + 2 * a8.eR,
			e3 = a7s[a6];
		return 0 < e3 && (aI.wB(50, player), a7s[a6] = 0, 255 === e3)
	}, this.a1T = function(player) {
		return 255 === a7s[player + 2 * a8.eR]
	}
}

function cT() {
	var aDm, aDn;
	this.dR = function() {
		aDm =
			"Abbasid Caliphate;Aceh s;Achaemenid Z;Afsharid z;Aghlabid Emirate;Ahom z;Akkadian Z;Aksumite Z;Akwamu;Alaouite z;Almohad Caliphate;Almoravid z;Angevin Z;Aq Qoyunlu;Armenian Z;Assyria;Ashanti Z;Austrian Z;Austria-Hungary;Ayyubid z;Aztec Z;Aulikara Z;Babylonian Z;Balhae;Banten s;S Banjar;Bamana Z;Bengal s;Benin Z;Kadamba z;Bornu Z;E Brazil;Britannic Z;British Z;British Raj;Bruneian Z;Bukhara Z;Burgundian State;Buyid z;Byzantine Z;Caliphate of Córdoba;Cao Wei;Carthaginian Z;Cebu Rajahnate;Chagatai Khanate;Chalukya z;Chauhan z;Chavín Z;Chenla;Chera z;Chola z;Comanche Z;Congo Free State;Crimean Khanate;Dacian Z;Delhi s;Demak s;Durrani Z;Dutch Z;Egyptian Z;Elamite Z;Exarchate of Africa;Abyssinia;Fatimid Caliphate;First French Z;Frankish Z;Funan;Gallic Z;Gaza Z;Republic of Genoa;German Z;Ghana Z;Ghaznavid z;Ghurid z;Goguryeo;Goryeo;Gorkha Z;Göktürk Khaganate;Golden Horde;S Gowa;Seljuq Z;Gupta Z;Hafsid Y;Han z;Hanseatic League;E Harsha;Hephthalite Z;Hittite Z;Holy Roman Z;Hotak z;Hoysala Z;Hunnic Z;Husainid z;Idrisid z;Ilkhanate;K Israel;K Judah;Inca Z;Italian Z;E Japan;Jin z;Johor Z;Jolof Z;Joseon;Kaabu Z;Kachari Y;Kalmar Union;Kanem Z;Kanva z;Kara-Khanid Khanate;Kazakh Khanate;Khazar Khaganate;Khmer Z;Khilji z;Khwarazmian z;Kievan Rus';Konbaung z;Kong Z;Korean Z;Kushan Z;K Kush;Lakota;Latin Z;Later Lê z;Liao z;Lodi s;Khmer Z;Macedonian Z;Majapahit Z;Mali Z;Malacca Z;Mamluk s;Manchukuo;Maratha Z;Marinid z;Massina Z;Mataram s;Mauretania;Mauryan Z;Median Z;Mlechchha z;Ming z;Mitanni Z;Mongol Z;Mughal Z;Nanda Z;Nguyễn z;North Sea Z;E Nicaea;Numidia;Omani Z;Ottoman Z;Oyo Z;Pagan Z;Pahlavi z;Pala Z;Palmyrene Z;Parthian Z;Pontic Z;Portuguese Z;K Prussia;Ptolemaic Z;Qajar z;Qara Qoyunlu;Qin z;Qing z;Ramnad Sethupathis;Rashidun Caliphate;Rashtrakuta z;Roman Z;Rouran Khaganate;Rozwi Z;Rustamid z;Russian Z;Tsardom of Russia;Saadi z;Safavid z;Saffarid z;Sassanid z;Satavahana z;Samanid Z;Soviet Union;Saudeleur z;Duchy of Savoy;Seleucid Z;Serbian Z;Shu Han;Shang z;Siam Z;Sikh Z;Singhasari;Sokoto Caliphate;Song z;Songhai Z;Spanish Z;Srivijaya Z;Sui z;K Mysore;Shunga Z;S Sulu;Sumer;Sur Z;Swedish Z;Tahirid z;Tang z;Tây Sơn z;S Ternate;E Thessalonica;German Reich;Tibetan Z;Tondo z;S Tidore;Timurid Z;K Tlemcen;E Trebizond;Toltec Z;Toungoo z;Toucouleur Z;Tu'i Tonga Z;Turgesh Khaganate;Umayyad Caliphate;Uyunid Emirate;Uyghur Khaganate;Uzbek Khanate;Vandal Y;Vijayanagara Z;Republic of Venice;Wari Z;Wassoulou Z;Wattasids;Western Roman Z;Eastern Wu;Western Xia z;Xin z;Yuan z;Zand z;Zhou z;Zulu Z;Yugoslavia;Kosovo;Sikkim;Kanem–Bornu Z;Wadai Z;Ethiopian Z;Rozvi Z;Sasanian Z;E Vietnam;Shilluk Y;K Aksum;Gwiriko Y;Toro Y;Malindi Y;K Loango;K Mapungubwe;Ryukyu Y;K Cyprus;K Jerusalem;Garhwal Y;K Nepal;K Cambodia;Champa Y;Hanthawaddy Y;Phayao Y;K Sardinia;K Sicily;K Gwynedd;K Scotland;K Desmond;K Poland;K Hungary;K Croatia;K Bohemia;Albanian Y;K Georgia;K Portugal;Khanate of Sibir;K Romania;Cossack Hetmanate;Duchy of Bouillon;K Ireland;Lordship of Ireland;K Italy;Republic of Pisa;Idrisid z;Almoravid z;Almohad Caliphate;Marinid z;Wattasid z;Saadian z;Republic of Salé;Rif Republic;K Kush;Makuria;Alodia;Ayyubid z;Mamluk s;Egypt Eyalet;K Fazughli;S Sennar;S Darfur;Mahdist State;S Egypt;K Egypt;Emirate of Cyrenaica;K Libya;Republic of Egypt;Republic of the Sudan;United Arab Republic;Libyan Arab Republic;Zirid z;Hafsid z;K Kuku;Regency of Algiers;Gurunsi;Liptako;Tenkodogo;Wogodogo;Yatenga;Bilanga;Bilayanga;Bongandini;Con;Macakoali;Piela;Nungu;K Sine;K Saloum;K Baol;K Cayor;K Waalo;Bundu;Bonoman;Gyaaman;Denkyira;Mankessim Y;K Dahomey;Oyo Z;K Nri;Aro Confederacy;Kwararafa;Biafra;Buganda;Bunyoro;Ankole;Busoga;Tanganyika;Kuba Y;K Luba;K Lunda;Yeke Y;K Ndongo;Kasanje Y;K Matamba;Mbunda Y;Chokwe Y;Kazembe Y;K Butua;Ndebele Y;Mthethwa Z;Bophuthatswana;Ciskei;Transkei;Venda;Rhodesia;Kart z;Nogai Horde;Khanate of Bukhara;Khanate of Khiva;Khamag Mongol;Northern Fujiwara;Kamakura Shogunate;Ashikaga Shogunate;Jaxa;Republic of Ezo;Jiangxi Soviet;Hunan Soviet;Guangzhou Commune;Gojoseon;Alaiye;Beylik of Bafra;Kara Koyunlu;Kars Republic;K Iraq;Arab Federation;Kar-Kiya z;Baduspanids;Marashiyan z;Afrasiyab z;Mihrabanid z;Safavid Iran;Sheikhdom of Kuwait;Bani Khalid Emirate;Emirate of Diriyah;Emirate of Najd;Muscat and Oman;Emirate of Riyadh;S Najd;K Hejaz;Fadhli s;Emirate of Beihan;Emirate of Dhala;S Lahej;Republic of Kuwait;K Cochin;Jaffna Y;Laur Y;Pandya z;Jaunpur s;Jaintia Y;Hyderabad State;Travancore;Udaipur State;Manikya z;Lan Xang;K Vientiane;K Champasak;Lao Issara;K Laos;Pyu States;Ava;Mon Ys;Pegu;K Mrauk U;Taungoo z;Shan States;Arakan;Raktamaritika;Singhanavati;Dvaravati;Ngoenyang;Hariphunchai;Tambralinga;Lavo Y;Langkasuka;Sukhothai Y;S Singora;Ayutthaya Y;Thonburi Y;Lan Na;Pattani Y;Jambi s;Palembang s;S Deli;S Langkat;S Serdang;S Cirebon;K Pajang;K Bali;Bima s;K Larantuka;K Banggai;Luwu;S Bone;Caucasian Albania;Kabardia;Circassia;K Abkhazia;Elisu s;Avar Khanate;Caucasian Imamate;K Imereti;K Kartli;K Kakheti;Crown of Aragon;Emirate of Granada;K Majorca;Crown of Castile;K Haiti;Cocollán;Zapotec Civilization;Mosquito Y;Somoza Regime;Iroquois Confederacy;Cherokee Nation;Vermont Republic;State of Muskogee;K Alo;K Sigave;K Fiji;K Nauru;K Chile;Muisca Confederation;El Stronato;K Chimor;Jungle Republic;Liga Federal;Supreme Junta;Weimar Republic;K Bavaria;Bremen;Frankfurt;Hamburg;K Hanover;Holstein;Lippe;Nassau;Oldenburg;Pomerania;Reuss;Saxe-Altenburg;Saxony;Schleswig;Waldeck;Württemberg;Helvetic Republic;Republic of Florence;Duchy of Urbino;Republic of Cospaia;Duchy of Lucca;Duchy of Mantua;Duchy of Milan;Papal States"
			.split(";"), aDn =
			"Pestilent Dominion;Wretched Realm;Damned Province;Corrupt Zone;Cursed Territory;Blight Nation;Haunted Expanse;Malevolent State;Ruined Empire;Contaminated Land;Epidemic Domain;Forsaken District;Abandoned Wasteland;Necrotic Enclave;Tainted Domain;Decayed Principality;Infested Region;Malignant Territory;Toxic Dominion;Ravaged Sector;Ghostly Realm;Plagued Commonwealth;Afflicted State;Desolate Nation;Apocalyptic Zone;Radiated Province;Deathly District;Pestilence Haven;Doom Territory;Malefic Expanse;Abandoned State;Cursed Haven;Corroded Zone;Hauntland;Noxious Nation;Infected Enclave;Ruinous Domain;Wasteland Woe;Rotten Principality;Voided Land;Vile Dominion;Catastrophic Region;Eerie Expanse;Desolation State;Forsaken Outpost;Contagion District;Damaged Province;Abhorrent Sector;Accursed Nation;Doomstruck Land;Radiant Ruin;Deathly Enclave;Malefic Dominion;Plague District;Infected Haven;Corrupt State;Pestilent Territory;Razed Realm;Haunted Wasteland;Toxic Sector;Cursed Dominion;Decaying Province;Forsaken Enclave;Ruinous Region;Malignant Haven;Infested State;Ghostly Nation;Tainted Territory;Damned District;Radiated Dominion;Desolate Expanse;Apocalyptic Land;Death Zone;Wretched State;Malevolent Haven;Plagued Nation;Noxious Domain;Voided Territory;Eerie Sector;Accursed Province;Necrotic District;Doom Haven;Haunt Realm;Rotten Nation;Forsaken Territory;Infected State;Abhorrent Expanse;Malignant Land;Toxic Dominion;Ruined District;Ghostland;Cursed Sector;Radiant Nation"
			.split(";");
		for (var a2k = ["K ", " Y", "E ", " Z", " z", " s", "S "], aDo = ["Kingdom of ", " Kingdom", "Empire of ", " Empire", " Dynasty", " Sultanate", "Sultanate of "], a6 = aDm.length - 1; 0 <= a6; a6--)
			for (var en = a2k.length - 1; 0 <= en; en--) aDm[a6] = aDm[a6].replace(a2k[en], aDo[en]);
		if (__fx.settings.realisticNames) aDm = realisticNames;
	}, this.a0f = function() {
		var eU = a8.jb,
			a2N = ab.a2N,
			ww = ab.ww,
			playerNamesData = a8.data.playerNamesData;
		if (!playerNamesData || playerNamesData.length < eU)
			for (var a6 = 0; a6 < eU; a6++) a2N[a6] = ww[a6] = "Player " + av.it(1e3);
		else
			for (a6 = 0; a6 < eU; a6++) a2N[a6] = ww[a6] = playerNamesData[a6]
	}, this.a2 = function() {
		if (9 === a8.jv) {
			for (var hG = av.random(), aDu = aDm, aDv = aDn, eU = aDu.length, kL = a8.data.teamPlayerCount[7], a2N = ab.a2N, ww = ab.ww, a6 = kL - 1; a6 >= a8.jb; a6--) a2N[a6] = ww[a6] = aDu[(a6 + hG) % eU];
			for (eU = aDv.length, a6 = kL; a6 < a8.eR; a6++) a2N[a6] = ww[a6] = aDv[a6 % eU]
		} else(2 === a8.data.playerNamesType ? function() {
			for (var eU = a8.eR, a2N = ab.a2N, ww = ab.ww, playerNamesData = a8.data.playerNamesData, a6 = a8.jb; a6 < eU; a6++) a2N[a6] = ww[a6] = playerNamesData[a6]
		} : 1 === a8.data.playerNamesType ? function() {
			for (var a2N = ab.a2N, ww = ab.ww, a6 = a8.jb; a6 < a8.eR; a6++) a2N[a6] = ww[a6] = "Bot " + av.it(1e3)
		} : function() {
			for (var aDu = aDm, eU = aDu.length, hG = av.random(), a2N = ab.a2N, ww = ab.ww, a6 = a8.jb; a6 < a8.eR; a6++) a2N[a6] = ww[a6] = aDu[(a6 + hG) % eU]
		})()
	}
}

function co() {
	this.aDw = [], this.aDx = [], this.dR = function() {
		this.aDw = [], this.aDx = []
	}, this.iQ = function() {
		0 <= this.aDw.length && this.aDy(this.aDw), 0 <= this.aDx.length && this.aDy(this.aDx)
	}, this.aDy = function(g) {
		for (var eo = -1, a6 = g.length - 1; 0 <= a6; a6--)
			if (g[a6].e2--, g[a6].e2 <= 0) {
				eo = a6;
				break
			} for (a6 = eo; 0 <= a6; a6--) g.shift()
	}, this.a1H = function(id, vv, aDz) {
		return this.eq(this.aDw, id, vv, aDz)
	}, this.aE0 = function(id, vv, aDz) {
		return this.eq(this.aDx, id, vv, aDz)
	}, this.eq = function(g, id, vv, aDz) {
		return ! function(g, id, vv) {
			var a6, k0;
			for (a6 = vv.length - 1; 0 <= a6; a6--)
				for (k0 = g.length - 1; 0 <= k0; k0--)
					if (g[k0].player === vv[a6] && id === g[k0].id) return 1;
			return
		}(g, id, vv) && (aDz && function(g, id, vv) {
			var a6;
			for (a6 = vv.length - 1; 0 <= a6; a6--) g.push({
				player: vv[a6],
				id: id,
				e2: 384
			})
		}(g, id, vv), !0)
	}
}

function cS() {
	this.ww = new Array(a8.eR), this.a2N = new Array(a8.eR), this.zX = new Uint8Array(a8.eR), this.lS = new Uint8Array(a8.eR), this.i7 = new Uint16Array(a8.eR), this.i9 = new Uint16Array(a8.eR), this.i8 = new Uint16Array(a8.eR), this.iA =
		new Uint16Array(a8.eR), this.gJ = new Uint32Array(a8.eR), this.tr = new Uint32Array(a8.eR), this.gX = new Uint32Array(a8.eR), this.fx = null, this.gB = null, this.gC = null, this.eu = null, this.oV = new Uint16Array(a8.eR), this.iY =
		new Uint16Array(a8.eR), this.iZ = new Uint16Array(a8.eR), this.wi = new Uint16Array(a8.eR), this.wo = new Uint8Array(a8.eR), this.zd = new Uint16Array(a8.eR), this.dR = function() {
			this.ww.fill(""), this.a2N.fill(""), this.zX.fill(0), this.lS.fill(0), this.i7.fill(0), this.i9.fill(0), this.i8.fill(0), this.iA.fill(0), this.gJ.fill(0), this.tr.fill(0), this.gX.fill(0), this.fx = new Array(a8.eR), this.gB = new Array(
				a8.eR), this.gC = new Array(a8.eR), this.eu = new Array(a8.eR), this.oV.fill(0), this.iY.fill(0), this.iZ.fill(0), this.wi.fill(0), this.wo.fill(0), this.zd.fill(0)
		}
}

function cm() {
	this.aE3 = function(player) {
		aB.lR(player), a8.w6++, ab.zX[player] = 2, ab.wi[player] = be.wc.aBK(), player === a8.eE && (aS.show(!1, !1), aR.a6f(), bN.result.wm()), aa.a2R(player)
	}
}

function cM() {
	this.je = null, this.jc = 0, this.a0j = function() {
		for (this.jc = 0, a6 = a8.eR - 1; 0 <= a6; a6--) 0 !== ab.lS[a6] && this.jc++;
		this.je = new Uint16Array(this.jc);
		for (var eU = 0, a6 = 0; a6 < a8.eR; a6++) 0 !== ab.lS[a6] && (this.je[eU++] = a6)
	}, this.l8 = function() {
		for (var gJ = ab.gJ, tr = ab.tr, wo = ab.wo, je = ag.je, a6 = ag.jc - 1; 0 <= a6; a6--) {
			var e3, g3 = je[a6];
			gJ[g3] <= bH.ew(tr[g3], 4) ? af.da(g3) : gJ[g3] >= tr[g3] ? (e3 = gJ[g3], 250 <= (tr[g3] = e3) && (wo[g3] = 1)) : tr[g3] -= Math.max(1, bH.ew(tr[g3] - gJ[g3], 1e3))
		}
		this.aE5()
	}, this.aE5 = function() {
		for (var lS = ab.lS, jd = this.je, a7J = this.jc, a6 = a7J - 1; 0 <= a6; a6--) 0 === lS[jd[a6]] && (jd[a6] = jd[--a7J]);
		this.jc = a7J
	}
}

function cU() {
	var aE6;
	this.k4 = null, this.dR = function() {
		aE6 = [], 9 === a8.jv && this.aE7()
	}, this.aE7 = function() {
		var aE8 = [57, 85, 105, 150, 190, 333];
		if (this.k4 = [0, 0, 0, 0, 0, 0], a8.jb <= aE8[0]) this.k4[0] = Math.max(bH.ew(a8.jb * (512 - a8.jb), aE8[0]), 13), a8.jz = this.k4[0];
		else {
			a8.jz = a8.eR - a8.jb;
			for (var a6 = 1; a6 < 6; a6++)
				if (a8.jb <= aE8[a6]) {
					this.k4[a6 - 1] = 512 - aE8[a6 - 1] - bH.ew((512 - aE8[a6 - 1]) * (a8.jb - aE8[a6 - 1]), aE8[a6] - aE8[a6 - 1]), this.k4[a6] = 512 - a8.jb - this.k4[a6 - 1];
					break
				}
		}
		a8.data.numberTeams = (0 < a8.jb) + (0 < a8.jz), a8.data.playerCount = a8.tN = a8.jb + a8.jz, a8.data.teamPlayerCount = new Uint16Array([0, 0, 0, 0, 0, 0, 0, a8.jb, a8.jz]), a8.a0Z.a0d()
	}, this.aBR = function(player) {
		aE6.push({
			player: player,
			fy: 14 + av.it(20)
		})
	}, this.iQ = function() {
		if (9 === a8.jv)
			for (var a6 = aE6.length - 1; 0 <= a6; a6--) --aE6[a6].fy <= 0 && (aa.oj(aE6[a6].player, 0, ae.uf.v0 + ae.uf.vF), aE6.splice(a6))
	}
}

function d3() {
	function aEM() {
		return {
			ef: bO.ef,
			eg: bO.eg,
			so: bO.so,
			sk: bO.sk,
			sl: bO.sl,
			sp: bO.sp,
			eA: bO.eA,
			mapSeed: bO.mapSeed
		}
	}

	function aEE(a6) {
		return 1 !== a6 && bO.aEH(a6) && a6 !== bO.aEN()
	}
	this.aEA = 22, this.aBc = 4096, this.ef = 0, this.eg = 0, this.so = null, this.sk = null, this.sl = null, this.sp = null, this.eA = 0, this.mapSeed = 0, this.sm = !1, this.sn = new aEB, this.se = new aEC, this.a2q = new aED, this.dR =
function() {
		this.se.dR()
	}, this.a2 = function(map, a9x) {
		((map %= this.aEA) !== this.eA || aEE(this.eA) && a9x !== this.mapSeed) && (this.sm = !1, this.sn.aEF(), av.a0e(map), this.eA = map, this.mapSeed = a9x, aEE(map) && (bO.se.sf[map].aEG = a9x), this.aEH(this.eA) ? (map = bO.se.sf[this.eA],
			this.ef = map.a0, this.eg = map.j5, av.a0e(map.aEG), ak.a2([this.ef, this.eg, map.lX, map.lU]), aEJ(), aj.aEK(), ak.aEL()) : aEI())
	}, this.aA5 = function(map, a9x) {
		var fD = aEM(),
			map = (this.a2(map, a9x), this.sn.aEF(), aEM());
		return this.ef = fD.ef, this.eg = fD.eg, this.so = fD.so, this.sk = fD.sk, this.sl = fD.sl, this.sp = fD.sp, this.eA = fD.eA, this.mapSeed = fD.mapSeed, map
	}, this.a0y = function(canvas) {
		canvas && this.so !== canvas && (this.ef = canvas.width, this.eg = canvas.height, this.so = canvas, this.sk = this.so.getContext("2d", {
			alpha: !1
		}), this.hB = this.sk.getImageData(0, 0, this.ef, this.eg), this.sp = this.hB.data, this.eA = this.aEN(), this.mapSeed = 0, bO.se.sf[this.eA].name = a8.data.mapName)
	}, this.e9 = function(a6) {
		return 3 === a6 || 7 === a6 || 9 === a6 || 21 === a6 || a6 === this.aEN()
	}, this.aEO = function(a6) {
		return 2 === a6 || 7 === a6 || 9 === a6 || 20 === a6
	}, this.aEP = function(a6) {
		return 1 === a6
	}, this.aEN = function() {
		return this.aEA
	}, this.aEH = function(a6) {
		return void 0 === this.se.sf[a6].aEQ
	}, this.a0x = function(p2) {
		return 0 === p2.mapType ? p2.mapProceduralIndex < 10 ? p2.mapProceduralIndex : 10 + p2.mapProceduralIndex : 1 === p2.mapType ? p2.mapRealisticIndex + 10 : void 0
	}, this.aER = function(p2, aES) {
		0 === p2.mapType ? p2.mapProceduralIndex = aES < 10 ? aES : aES - 10 : 1 === p2.mapType && (p2.mapRealisticIndex = aES - 10)
	}
}

function aEB() {
	function aEb() {
		bO.sn.iQ()
	}

	function aEh(g3, aEg) {
		0 < aEg && (bO.sp[g3] += aEg, bO.sp[g3 + 1] += aEg, bO.sp[g3 + 2] += aEg)
	}

	function gy(g3) {
		return bO.sp[g3 + 2] > bO.sp[g3] && bO.sp[g3 + 2] > bO.sp[g3 + 1]
	}
	this.a52 = -1, this.e1 = 0, this.aET = 0, this.aEU = 8, this.aEV = 32, this.aEW = 8, this.aEX = 32, this.aEY = [0, 0], this.a46 = [0, 0, 0, 0], this.i2 = null, this.aEZ = !0, this.aEa = !1, this.aEF = function() {
		-1 !== this.a52 && clearTimeout(this.a52), this.a52 = -1, this.i2 = null, ak.aEL()
	}, this.dR = function() {
		7 === aV.xK() || this.aEa || (this.aEZ = !0, this.e1 = 0, this.aET = 1, this.aEY = [bO.se.sf[bO.eA].t7[0], bO.se.sf[bO.eA].t8[0]], this.a46 = [bO.se.sf[bO.eA].aEQ[3], bO.se.sf[bO.eA].aEQ[4], bO.se.sf[bO.eA].aEQ[5], bO.se.sf[bO.eA].aEQ[
			6]], this.aEU = bO.se.sf[bO.eA].aEQ[7], this.aEV = bO.se.sf[bO.eA].aEQ[8], this.aEW = bO.se.sf[bO.eA].aEQ[9], this.aEX = bO.se.sf[bO.eA].aEQ[10], this.aEZ ? this.a52 = setTimeout(aEb, 16) : this.iQ())
	}, this.iQ = function() {
		if (8 === aV.xK() && aC.ll()) this.a52 = setTimeout(aEb, 16);
		else {
			if (0 === this.e1) {
				var aEG = av.aEc();
				if (av.a0e(bO.se.sf[bO.eA].aEQ[2]), ak.a2([bO.ef, bO.eg, bO.se.sf[bO.eA].aEQ[0], bO.se.sf[bO.eA].aEQ[1]]), av.a0e(aEG), this.i2 = ak.aEd(), this.e1++, this.aEZ) return void(this.a52 = setTimeout(aEb, 16))
			}
			for (var g3, eG, aEG = this.aEZ ? 10 : 1e6, aEG = bO.eg - this.aET - 1 < aEG ? bO.eg - this.aET - 1 : aEG, u4 = this.aET + aEG, ed = this.aET; ed < u4; ed++)
				for (var eb = 1; eb < bO.ef - 1; eb++) gy(g3 = 4 * (eG = eb + ed * bO.ef)) ? this.aEe(g3, eG, 1) : (this.aEe(g3, eG, 0), function(eb, ed, g3) {
					return 1 < eb && gy(g3 - 4) || eb < bO.ef - 2 && gy(g3 + 4) || 1 < ed && gy(g3 - 4 * bO.ef) || ed < bO.eg - 2 && gy(g3 + 4 * bO.ef)
				}(eb, ed, g3) && this.aEf(eb, ed));
			this.aET = u4, this.aET >= bO.eg - 1 ? (bO.sk.putImageData(bO.sl, 0, 0, 1, 1, bO.ef - 2, bO.eg - 2), bb.dZ = !0, this.aEF()) : this.aEZ && (this.a52 = setTimeout(aEb, 16))
		}
	}, this.aEe = function(g3, eG, oA) {
		aEh(g3, Math.floor(this.aEY[oA] + this.a46[oA] * this.i2[eG] / 1e4) - bO.sp[g3])
	}, this.aEi = function(g3, hG, aEj, oA, a46) {
		aEh(g3, Math.floor(this.aEY[oA] + (1 - hG / aEj) * a46) - bO.sp[g3])
	}, this.aEf = function(kg, kh) {
		for (var g3, hG, aEj, a4s = kg - this.aEV, aEk = kh - this.aEV, u5 = kg + this.aEV, u4 = kh + this.aEV, a4s = a4s < 1 ? 1 : a4s, u5 = u5 > bO.ef - 2 ? bO.ef - 2 : u5, u4 = u4 > bO.eg - 2 ? bO.eg - 2 : u4, ed = aEk < 1 ? 1 : aEk; ed <=
			u4; ed++)
			for (var eb = a4s; eb <= u5; eb++) gy(g3 = 4 * (eb + ed * bO.ef)) ? (aEj = this.aEU + (this.aEV - this.aEU) * this.i2[eb + bO.ef * ed] / 1e4, Math.abs(kg - eb) > aEj || Math.abs(kh - ed) > aEj || aEj <= (hG = Math.sqrt((kg - eb) * (
				kg - eb) + (kh - ed) * (kh - ed))) || this.aEi(g3, hG, aEj, 1, this.a46[3])) : (aEj = this.aEW + (this.aEX - this.aEW) * this.i2[eb + bO.ef * ed] / 1e4, Math.abs(kg - eb) > aEj || Math.abs(kh - ed) > aEj || aEj <= (hG = Math
				.sqrt((kg - eb) * (kg - eb) + (kh - ed) * (kh - ed))) || this.aEi(g3, hG, aEj, 0, this.a46[2]))
	}
}

function aEJ() {
	2 === bO.eA ? aEl([256], [256], [0, 205, 256], [500, 500, 0], [0, 0, 0]) : 7 === bO.eA ? aEl([512], [512], [0, 380, 512], [500, 500, 0], [0, 0, 0]) : 8 === bO.eA ? aEl([410], [410], [0, 120, 210], [0, 80, 640], [0, 0, 0]) : 9 === bO.eA ? aEl([
		512], [512], [0, 70, 180, 200, 290, 420, 512], [500, 500, 0, 0, 500, 500, 0], [0, 0, 0, 0, 0, 0, 0]) : 20 === bO.eA && aEl([512], [512], [0, 380, 512], [500, 500, 0], [0, 0, 0])
}

function aEl(aEm, aEn, aEo, aEp, aEq) {
	for (var eb, ed, aEs, aEt, yc, aEu, hd = aEm.length - 1, aEr = bO.ef + bO.eg, eU = (aEr *= aEr, aEo.length), a6 = eU - 1; 0 <= a6; a6--) aEo[a6] *= aEo[a6];
	var aEv = new Array(eU),
		aEw = new Array(eU),
		aEx = new Array(eU),
		ex = ak.aEd();
	if (void 0 === aEq)
		for (aEq = new Array(eU), a6 = eU - 1; 0 <= a6; a6--) aEq[a6] = 0;
	for (a6 = 1; a6 < eU; a6++) aEv[a6] = aEo[a6] - aEo[a6 - 1], aEw[a6] = aEp[a6] - aEp[a6 - 1], aEx[a6] = aEq[a6] - aEq[a6 - 1];
	for (eb = bO.ef - 1; 0 <= eb; eb--)
		for (ed = bO.eg - 1; 0 <= ed; ed--) {
			for (aEs = aEr, a6 = hd; 0 <= a6; a6--) aEs = (aEt = (eb - aEm[a6]) * (eb - aEm[a6]) + (ed - aEn[a6]) * (ed - aEn[a6])) < aEs ? aEt : aEs;
			for (yc = aEp[eU - 1], aEu = aEq[eU - 1], a6 = 1; a6 < eU; a6++)
				if (aEs < aEo[a6]) {
					yc = aEp[a6 - 1] + aAu((aEs - aEo[a6 - 1]) * aEw[a6], aEv[a6]), aEu = aEq[a6 - 1] + aAu((aEs - aEo[a6 - 1]) * aEx[a6], aEv[a6]);
					break
				} aEy(bO.ef * ed + eb, yc, aEu, ex)
		}
}

function aEy(oA, yc, aEu, ex) {
	yc < 500 ? ex[oA] = bH.ew(ex[oA] * yc * 2, 1e3) : 500 < yc && (ex[oA] += bH.ew(2 * (1e4 - ex[oA]) * (yc - 500), 1e3)), ex[oA] += bH.ew(aEu * (10 * yc - ex[oA]), 1e3)
}

function cW() {
	var aEz;

	function aF9(z1, hD, eb, ed, globalAlpha) {
		bO.sk.save(), bO.sk.globalAlpha = globalAlpha, bO.sk.imageSmoothingEnabled = !1, bO.sk.scale(hD, hD), bO.sk.drawImage(z1, Math.floor(eb * (bO.ef / hD - z1.width)), Math.floor(ed * (bO.eg / hD - z1.height))), bO.sk.restore()
	}
	this.a2n = 0, this.a2o = 0, this.a2p = 0, this.a2q = 0, this.dR = function() {
		(aEz = new Array(bO.aEA))[0] = {
			a0: [0, 5e3, 8e3, 1e4],
			hG: [220, 250, 255, 220],
			qh: [190, 220, 0, 0],
			eo: [170, 200, 0, 0]
		}, aEz[1] = {
			a0: [0, 4e3, 5e3, 6e3, 1e4],
			hG: [25, 0, 100, 0, 25],
			qh: [25, 0, 0, 0, 25],
			eo: [25, 0, 0, 0, 25]
		}, aEz[2] = {
			a0: [0, 500, 2500, 2999, 3e3, 3200, 4200, 5200, 5700, 8800, 1e4],
			hG: [15, 15, 70, 40, 48, 48, 252, 40, 40, 20, 30],
			qh: [80, 80, 190, 90, 46, 46, 248, 180, 180, 90, 140],
			eo: [120, 120, 220, 110, 37, 37, 217, 10, 10, 10, 10]
		}, aEz[3] = {
			a0: [0, 400, 1899, 1900, 3200, 4500, 6e3, 7700, 8499, 8500, 9500, 1e4],
			hG: [10, 10, 20, 10, 30, 10, 16, 40, 50, 55, 230, 230],
			qh: [10, 10, 40, 50, 100, 40, 80, 120, 80, 55, 230, 230],
			eo: [80, 80, 200, 10, 60, 10, 16, 40, 50, 55, 230, 230]
		}, aEz[4] = {
			a0: [0, 300, 1400, 1700, 3e3, 4e3, 1e4],
			hG: [10, 10, 20, 10, 10, 170, 212],
			qh: [20, 20, 60, 100, 100, 110, 170],
			eo: [70, 70, 160, 30, 30, 60, 120]
		}, aEz[5] = {
			a0: [0, 1e3, 3e3, 3500, 4e3, 4500, 7e3, 7500, 8e3, 1e4],
			hG: [10, 10, 20, 10, 5, 10, 20, 5, 20, 25],
			qh: [30, 30, 50, 100, 30, 100, 140, 60, 140, 200],
			eo: [80, 80, 200, 10, 5, 10, 20, 5, 20, 25]
		}, aEz[6] = {
			a0: [0, 700, 2650, 3200, 5e3, 8e3, 1e4],
			hG: [10, 10, 60, 255, 255, 200, 200],
			qh: [10, 10, 60, 255, 255, 200, 200],
			eo: [80, 80, 255, 255, 255, 200, 200]
		}, aEz[7] = {
			a0: [0, 400, 1999, 2e3, 3200, 4e3, 4700, 5500, 6500, 9500, 1e4],
			hG: [10, 10, 80, 255, 255, 55, 6, 70, 20, 155, 255],
			qh: [10, 10, 90, 245, 245, 170, 80, 190, 20, 155, 255],
			eo: [80, 80, 255, 235, 235, 55, 26, 10, 20, 155, 255]
		}, aEz[8] = {
			a0: [0, 700, 1300, 1900, 1901, 2500, 3400, 6e3, 1e4],
			hG: [25, 30, 30, 30, 255, 255, 30, 40, 20],
			qh: [25, 30, 150, 150, 245, 245, 80, 150, 70],
			eo: [60, 170, 170, 170, 235, 235, 30, 40, 40]
		}, aEz[9] = {
			a0: [0, 400, 2009, 2010, 3300, 4e3, 5200, 6500, 8e3, 9500, 1e4],
			hG: [10, 10, 80, 255, 255, 55, 23, 36, 20, 155, 255],
			qh: [10, 10, 90, 245, 245, 170, 60, 160, 20, 155, 255],
			eo: [80, 80, 255, 235, 235, 55, 9, 72, 20, 155, 255]
		}, aEz[20] = {
			a0: [0, 5500, 6700, 6999, 7e3, 7300, 7600, 8200, 1e4],
			hG: [5, 5, 70, 70, 255, 255, 252, 10, 8],
			qh: [20, 28, 190, 190, 255, 255, 248, 90, 60],
			eo: [60, 80, 220, 220, 220, 220, 217, 10, 8]
		}, aEz[21] = {
			a0: [0, 1500, 3e3, 4e3, 5e3, 5999, 6e3, 9500, 1e4],
			hG: [12, 30, 10, 16, 40, 50, 55, 170, 170],
			qh: [45, 100, 40, 80, 120, 80, 55, 170, 170],
			eo: [12, 60, 10, 16, 40, 50, 55, 170, 170]
		}
	}, this.aEK = function() {
		var aF8, a6, en, fD, hB = function() {
				var hB;
				return bO.so = document.createElement("canvas"), bO.so.width = bO.ef, bO.so.height = bO.eg, bO.sk = bO.so.getContext("2d", {
					alpha: !1
				}), hB = bO.sk.getImageData(0, 0, bO.ef, bO.eg), bO.sp = hB.data, hB
			}(),
			a0 = aEz[bO.eA].a0,
			hG = aEz[bO.eA].hG,
			qh = aEz[bO.eA].qh,
			eo = aEz[bO.eA].eo,
			ex = ak.aEd(),
			eU = a0.length - 2,
			aF3 = new Array(1 + eU),
			aF4 = new Array(1 + eU),
			aF5 = new Array(1 + eU),
			aF6 = new Array(1 + eU);
		for (en = eU; 0 <= en; en--) aF3[en] = a0[en + 1] - a0[en], aF4[en] = hG[en + 1] - hG[en], aF5[en] = qh[en + 1] - qh[en], aF6[en] = eo[en + 1] - eo[en];
		for (a6 = bO.ef * bO.eg - 1; 0 <= a6; a6--)
			for (en = eU; 0 <= en; en--)
				if (ex[a6] >= a0[en]) {
					fD = ex[a6] - a0[en], bO.sp[4 * a6] = hG[en] + aAu(aF4[en] * fD, aF3[en]), bO.sp[4 * a6 + 1] = qh[en] + aAu(aF5[en] * fD, aF3[en]), bO.sp[4 * a6 + 2] = eo[en] + aAu(aF6[en] * fD, aF3[en]), bO.sp[4 * a6 + 3] = 255;
					break
				} bO.sk.putImageData(hB, 0, 0), bO.aEP(bO.eA) && aW.ql() && bO.aEP(bO.eA) && (hB = aW.a96("arena"), aF8 = aW.a96("territorial.io"), aF9(hB, 5, .5, .5, .1), aF9(aF8, 2, .5, .45, .1)), bO.sm = !0, bb.dZ = !0
	}, this.a0h = function() {
		for (var g3, eb, ed, aFA, aFB, fF, a2o = 0, a0 = bO.ef, j5 = bO.eg, fD = a0 * j5 * 4, aFC = a7T, aFD = bO.sp, a6 = a0 - 1; 0 <= a6; a6--) aFC[(g3 = a6 << 2) + 2] = aFC[fD - g3 - 2] = 3;
		for (fD = 4 * a0, a6 = j5 - 1; 0 <= a6; a6--) aFC[(g3 = a6 * fD) + 2] = aFC[g3 + fD - 2] = 3;
		for (aFA = a0 - 1, aFB = j5 - 1, ed = 1; ed < aFB; ed++)
			for (fD = ed * a0, eb = 1; eb < aFA; eb++) fF = 1 - (aFD[(g3 = fD + eb << 2) + 2] > aFD[g3 + 1] && aFD[g3 + 2] > aFD[g3]), aFC[g3 + 2] = 2 - fF, a2o += fF;
		this.a2n = (a0 - 2) * (j5 - 2), this.a2q = 0, bO.e9(bO.eA) && (bO.a2q.aFE(), bO.a2q.aFF()), this.a2o = a8.jL = a2o - this.a2q, this.a2p = this.a2n - this.a2o - this.a2q
	}
}

function aEI() {
	var or;
	10 === bO.eA ? or =
		"DYDz2ESNu-0UYCCrS9c3pBUrKHc94BhIBhIJpIIBnMIAAIrKSSpKABmgf9e7X7ecX-5P0baOy191XXX7eegf9mcfUrrxrKppppKpKSrzUMMMSKKKrJcXcXcmgcXnKIKBmnCIJonCKrrSrrSSxSS9XcJnBe9XemmWXeX99chMIAEprrSrrtbrxIrMKBn9eBcecX9X7f99X90e577VX1VcOWX16XX7X999cX7eWyXXccVVX6rUSrrwUrlzpbbrrU6xzztzxzrztzbaOtaOa5-0WV-77e-9119HcXXZecccceXXX7ce9Xcce9e9meeVof919ee9Wzy5XeXYS9KBcXee_He6ce1ee0zxzta5UaX99c1mXcXhEJp9cNHWcTN9BcnAzJoorIBe0c--nIJoonSIBe-OX-NNOXWbcBgzIHX9xHzS9mcCSI9-nBrrorK9VcP-jHe9_BhxzKHcWC9mZp9-3n9fBnS970a6zs7egrIAAIRUKocXX9gx9npKaUxBppABe5OdHpBe-AC9-17TOWABpKI9-7JmnC6zGtxIBmen9egp6aUlyOzbrbbqUzxHXgjKKBc-ZehlxoeeoxObonox9XonAUbzS9efBdCAArHmjISBhEJnAofBUIJgrpocXxIBUoxHVmnBmmXAExoUxABmdAIBgnBonIAC6oxHVgfMHcXcUXAAGxIBgfxJch9c3enCMzSBe9eXomxHeBgmeCSBgpKMp9hzHfIEzHnArSxHX7pSrUHcnCMrUpSa5UIonABrSBccnBopJttzbxpBonHXpIEKMrMSrxpKxzUzltyUtaTOaOaObaT5UzNTOV0c116rMMKSKrxIKpJpKMSKMGxISCrKMSpKMKrSpSpI9xp9_pMMMMSBoxSryTUUxa5P7-0ttbWzzzxzaN5-NOWVN--0Wa5-0X-0VNVN7TOzaOWzL0bbX0y7NN5Ua17V111749c79e1c-V-----Ow7--N57-OzaN0ba156byNNT6q5OzWaT55-OsOX1777Oa55-5T5UX16tzUOyUtzrpzUrSKKSSAoemnKCIAIICI9KHn9CKBhCSHgenSAJnIJxSMMKKSSpKoopKKHpSoorSzxpWxMS-UKISaOxMOxttyOzy5OzbbtyTOzbtaUxyUyTT6porUrSztzzMSp9eceoogeZp9ZxJx9geeeXe9eZgeC9gegemp9gmpKMSonSxKrrbaUMIKJpMKKKpIACBmeccV71XX7V1mmmmhCCCKJompKKJpMKSKSKpKMJpKBeeceenKpzHnBnBmceee-X1117ememfBn9mfCBmgemf9mfBmf9xromcec7Us8He0u99cWtbc-PeCCS9VecZnBnBemfBn9X9c6aOXA997Y99755VXc6tXXmV5Os-ObVN0yN0bzaT-7ec7N70Wa-OV-5eggnHon9f9efCBpMzop97epCKIpSIBpKrrSKKIKKMKMJehzKKErJeABnIAJc717f9eBnAJzrHe7V9d9ef9gmopKUKC9gmcV6tX73eCIJoonIBnBnBgnCHgjJeZfA9megeegfKCICCJnIA9meZf9mfIEMof9XceXe97X-59XdCIKKpKKCJoeVcf97mZmVVV199YJmX7gceY9gpEOxMMJecrSSGzOxSrxprSxzJzUopSrIxKBpUMIpMprSropEMHnBrpprK91AJpJpIICpBopICCJonKBn9mcme9VcX9ee7X7e9ece9Xe19XcX91Xee9Xcce9VVVccefAAABe7emhBnSSKMSIJhCIJpKJppCKKIIIICJgpIBpAIHpBcoooonIKLObpBnKlzrKIKCJpCJpBnBpUzrrxpxSbbwUxzUprpppppJppMMIrrSSRUbWsOwUzUltbzrxzUzSzUbrrTTUUrSbbV6WbaTOzxzyN5TN-T5TOxbtts71-X-70V0sOWsObbaT0sTObw70tbbzbxbzzyOtyUtbyUaOV1-N0cVN-50aOtza6tzlxzUxSrzUzSSxUSzzOzzs5OyOtyOyUztyObaNOtaUrUxrrUSrrUrMSJrSIMSpKISzKUSpSrSSrzSMMxMSrMSpSrUzSSzzrTUMSpprSzMSzUxSSIEUSrzrUSpMKKxpKrKMKBmmrIKBgpKrzs6VOsUa--5ObzyN77-7X7e970V-5Oa5ObzxSxrzzSrKMUw-OV17X7X1X99X97X9X99cXXXXX977OaOVXeeeeecX7cX7X7X177-7-X-71-7XX97X97cX7VVV1--VObs970cVObtzbtyObrzxSomdKKSSMKqTN5NN0xrMIM5UrKKKpEKrSMSMprSrxMMUzrzrzSrSrSrHXenOtxrrxrxzSrrSrUrrSrSxMSxxKJpKKKJnKKrKIUUSrSrKKzKxKrSrSwUxIBnrxpSSpUzyOzzzzyUSxzRUpCBee7ecXce89omegpIBrpxzSrMJnKrMSFT0tbrMKxKL0VObxprSSlXV-11-c-X-WxzxFUaPcX777OzztzrSrMV-V75X96zzMKrUa9e-7V17gc9XeV90Bf957cVOzrMOX17X7X-X7X7V-N-6aUxCKzUUKprcX-UzSrN17WzrxrNX7ecV17WzzbaOtbxraObrOxrbxwUxpUzrzraOy5OVOWtzyOzzxbzVNXccXcXcX1-V197V-ec5Oy5N1--555UyN-N1---VOWX0Wtcc0aUMMyOs----Zc5-TOtsOWX7c0xzLN-NWbyOyUyUzrbxJe9gfTUxAMxrxzlbzbzbq5UKrJnAABnAAICETUtxSrzrpIpKIUSxraOaOVNTObzWa5NOtxxyOyOc-5A9YBmnBfHceX7-XXcX9e9Y9e5OzUbxSyVUX5OcUa1-UMqNNUbyOtsUWtWbWaObtzbyUWy6bzpJmoh9nIUI99oghSUzrrrSHeHohKCJgrKJemgcrS9nry6xSrUMStxzUSzqUrbrUxUSxxrrprUU6zSrbrtzUSUSzxMKxSMprMKIIIoonIBmohAIAHgf9eHeemfI9nA9mf9c9n9ZeXc9d9n9ccX7VZmoceeHVX1Zn9meZegegegfBhABehABonAHnABhCIBemee9eBfBeecgeohCUxzUbzxI9egegfAUUrHmegemecWcfCUp9meX9Beeef9onrSpAAKKKIyOzyUzJnBjSrxSSIBhMSHgcVYKxBmnzrROzpzxzSKKCKUzKBnoUzzbzpJmegfzyUzFObyUzrrzpKUSlzry6sUyUVN-7NOzbzzlzrzUrUSrrURUxzbzsTUsUWts5NOWa5ObzrUxrtyOWWaOzMSJnIAIprMJorKMIrSKMKKpUKCBonKMJnCJpCIKIKMJmpKIMKJpCJpBxBonHomoemmegnHf9f9cX7ce99emecgn9h9eA9nCHgfBnAIBfHh9eXXce9emec7f9ec1me89eeceme89fHeemX77-ceeeemeX9X9eeecV-V9e9Xe7e9eefBnBeefBfHmnBnBnKBpIEpKxMSKJnBpBnBnBmgmeeX9cXXVcX7Xce1eXcXe7ee9eXeeeX9X7V7V77V--XcXee7ec7X9eXXceX9f9eeee997X9Ve7Zee7WaX5X2Be-cee17X--0tsUbtaT0ta5-Oc--7Xe-X7--OVUtbVT--QA9nBmcXV--97X9ememggnBecJceeXme-cXdABeXeX97cnHgeeI9IA9XcVX7eX99e9e9mgeXeXemmceZmXe9ceXemXmggf9mmnAI9X1eIHcXfBghBmf9BemcX9Y9Ve9--JmZeccXA9Xd9cX9VXVVc7-V-Xee_BnJhIIBnJnBmohBgohBcmmf9eHf99Hf9HmommmmV5N-MvxppxrIICWzsOxX--OV5s0i1mopMKppzTOaN-0XXceV--0lJ7-90mzBlV2N7tRof9JqUsOaW7c8bwrrJchpK9-X7PBfHjKogcP0Jd92SMUwUlxMSErHegnrlxI9X7cY99e7hSzxpxSIIUHozogmgecYIExxxrrrKpKrSrMMrrlxtyUtxblxUyTUbyUUSaUy6Wzttbbc5N5N7V7XWaT7V6aZeVWsV9nIA9X2BmcWc7ooc--f9IBomV-0cnICBeXgn90Wc5TOa7-1-5cX---d11---esD---m8D-1VvAYqV-92glC5--NEEiqV-7Hsjk014I4wognBxwOs0Wc-D4y4gcT--0Y8X-0WalAk--0pHX-1Wsy6EV-a7EDhCBtaT9--X3IIV--_VJV0Ndepmzq1-0XeJbD-5XhvrCqTe-07iCnpteV-7iejk-iAtCxEIrrX71-2smknnEUUpze-e-c-1BtMB--2Kbq--YMmzV-sqPmrF7--Culc-HCwyxxcV-DEWXhte-DZ7mzorSr56eX170LG-rUSrSItzOueVc93c-5ZH-rrRP9-2d613nHdRUR6kP7-CZVZUEKUyUe91e-2ZYhnTPV-t8OMny7-1HZrT-DZf16A9mjFUzlsV--Hh_N-1HlyB-CZhCrSpzrkX7cX-2ZibAr-VMdC8brSrzUxSSIBxpHX17c8CrJe7rrUIpSrUxxzSrMIMOs5OVV7X7X7977V-7P19Xcce--8DNHk-LIcPSpN7-0ODtgnMN1-7Zz5USxyX9c--J2As-9J2CSu-08FHSrR7V-0G5xV-OH5vqV-0LEoV0OLiAnMN70D_f4UKIBnSBgzSrSxSSMSxpSpppzc-5TTUMbV716s117X1Xcce-cXXHcX--0Rs7V3dS04nKonpSSkV7----TMGPxrS-V7--MN-c0HMYnBnrIAIrK-OWV75V-tTEHotV-qMoqSMUUbe9HXV-mNcawnr6xtcVe-3aNiUIq1-6aOwMISlc1-6aSe6rROec-8ac9fISzuX-V1tf-1mnBrlWaN-NajMY9ggeoopCTTTTN6aN1HdgkXoohABnK9n9KJmpogeV-0XJenppSrUzJgghomhp9VnxIAAzOxWbbrIBnJmenBegozlWyObxIKBonIGaOVT50xSk6xJpEpIHnBonBoptxpr56xrzzbonCBnCMMSonzxJmopCIJomX7mceHcV7nJxSABhrbxEKCIJhAA9HgenABrUMbqUpSUrprSrbzzp9hABeXce9YAHcoomnBmmnBmmnpzaTTUrzzMpzWWblbyUUSrUrxbbzzblxrUUbrzSrtztzw6btV19ceWXWzq0aU6aTOta0a0V5777Xce7nA97VOa0X-17VUVV0V17-17X7V7-V----1-V-VcX9A9cWbbzyV-U5T5TOa5NNOaOV1Xe9ce99mZee5OtcWbaTTTTTOWe9ZeXcmcXVV38gtRnCMzSw1X6VcV08hu4rq9--tiGRrac-1Qfbg-dax4zrrIKoeBxErUlzSGbs0VP3eXX97XV-9R0KCsV1OlXjprrP7X7-HRQsCpVc2TRgLxJrKBeKKJe7BhIKKBlwOaUrNTUsNNNcNP91V---PS6VgopVN-LbHRrK999ezrxxoy5Tc7-0bJGjF--6Spy-5bU7rSbuXV4tsIYpKSSrSp50aX-177e-2baNMC5-2Otd7nHrpOba7cV2tv2dnICxz-Uk7cc0mUIkRnBpCBpCIJOWa0VNOtc-19UQnBeegmnIISxJns56zaOWtu7TV--URWN--VDLc-eVE7zSrUX7Xc-5WM4BN1DWTIggpBnEKKKESCWV5T5Wa-N0a9VsP6YRn9cmY9JggoggzUKHfA9XmcP9XZfIJhronABfISpxrUrrI9ABnBggrxxoe9fHmeBdCDUUrHf9orUogrzzJfUU6zUzbbbzrty6brbrxxz57OtsN5OsN5V5VT5V57N56yTUtsNN1cNNVV5VNeeeZeWtu77-XX-KgxCqWVV-P8w5qV-uAjtz5c15XwhBooopBonIKKJNN5-N5-6WVN-8ckmzArUOVeV-uDoWxNV--YoA7-TYoYRoxa57-1_P1T--8NKD-9dNS2ACAUta---dQzr-DPM79mmgcpI9chMKCppxxxrSzIbXc0aT1WVOxk7-N-9c0eauZgfAKrSrrSla-5-7n9-V1eVE3nKUwNVcV0eWZinCF5N0TcbkCMSrzr5OVPXCA9VXV-1b0uV0ezUBxUsXc--mhTc--n9_c1DnTIxCCSMKC9eCKClsT5OsN-V7NNV6QJcYxzUSxzSwUa7X9I99Xd9X-BhW8EE6rUw7ceV6fXkApBmf9f9hKGaOWzzzObV1V-PuipRpJ5--6iiarprP77--DrhL-0iv-fN-7jNKjExzXcc-Y1kshKK-5-V-wF2umWs-03EWs-03_Ms-23gdy-qlmyACJmcgfBnCIIrKpICUSIprUa0VOV5N5---V5---wRnFru7-E6kMClX-4lwIAzq9c-A7r-z5V7gdk8monBgfCCCElzbzxsN995-T5-KgiSunBnABmeeIHprrKJxpIISKICJpKprUzOcOzzUTN---0V--50aN1-1-PV7XX-SnCeY9f9mnUSSKzMtaOWa9VX--bBy1gzSxX-e-4nFNEAqTc-6C7Wgs-EC_DBjN-0nVb2N-3n_EYByN--nfWnV1Bx8ZorUaV9-CnqgbKISrNN9-9-8o5aACrSVWXV-C0gPk-jFRwSM6rsW9VV3h23TmfBjOxMUtaX17-6GYfE-0UHSjwfEzbxpUUq17ZcXeV-h8rqr--3odX6MF--8ogzvMJrN--V1xAI4npKwT7cV0Xp-Yf9nBeehKMKrzzSxrSxrUSzzSxrSMzSzzV-T-7V10Wa6VOWVT1mmeeegn9eeeXmcX97V-IJGnCr1--2JVvD-Bp7gzSxw6aeZcV0hHX5merts-EJjUhq7-2pGMvBtV-hJmVz1-1pJofqV-0KQ3c-0KztN-0L5k7-6LYvE--ILYxhTNc-0LZ57-ALu1CaV-4SIqV-hSQ3na--KpjX--ppknVESTPknBgmgn9f9f9onBmenSpMGzxbtbzbaOV6zbX9-NObWV-4TmmV3SToLnBnJnST5Oa-1-0px0YD-0pylvD--L3Ge--q54IV2CWmWnUUz5Pcec-nO-URhBoUy6VX-1qFuQGc-MOcagpR---CcERs-0PQUc3MPs8gehClzSzbzzUzxMr6tyUzzbzaTP0HgmcVXegeeeXeh9eX7e-JqqUEKIMpzz5T7cXX97-bRBpSKoT5X7--M4g1-grMIbBecemgfMxUpzMzObtu7V0zrrq7e9eV-MTaFhOy9VfLnt2-9-17117VcX1-1X97cVXX9177V-VXV9-WaOSMSSSSrrUSKMKxrrrUSxrrUzsOV7--N-tVN--N0bKIKKQCKRnKQCUtrTUtUSxpMprrUUKxSpxrpprMrxF-EcVGxTX" :
		11 === bO.eA ? or =
		"QREc7lR7oVUYGy_KJOJKKKKuK4OKT_K4KG_u_GJJO_3K_KKKL_4KL__KK_4_LKK_MjzuOOK_KKKOKLKKLLUjzji_KKMgyzdMjzgzzzEszzyzzjvuQvieeid_POOvzkzvzy_TvuOK4GKKvyyzzydJQi_OdKKaLOLajdOPuueaYBzydJdPOybvdbjeuvizwzujuQnunl2wBnBE2-EYBz2nk2kFzwBzznBydnwznEYwnnEBnnwkyvwzEgznzzEwwwwznnxK4KGOJ2zl2nzifvwyw-J0GGJ042nvzEvzwznJEnzlG42zg02KKGFzzEzzeT-woKK3EvoKLOJBnBnzE2EznnwnwznznzpJKKKKOOKG_G_LKFwl2zK8K4JK4KKKKKKKKKKKKF_g38EBemXeeeeeemeemgeXeegf9XgeeexCxzzzoenErMroeXeeegfEzSS9eVcghoeemf9YBe9ee9eXghrzzzKBfIUzrbzUzzzbryOxrzzbbsTXe9geY9egeeBeY91cUy6z6xtxbxzbzlzObrx6ztztue5UyT6zzbzbae7UxyOzzbzzbbtzyUyUtzztbyUzzbuecZeBeXeeecgeV--1ViZ-00JJIV379xwOLKKgzyzK2zF5g4ccBgcn9ggepUxAprzztxtyOzbzzbe90f9cXX99V-cAQAOx-PFLqqmemxp9zzttzIAzrrzzxzzze7X9ZeceX5ece---AorF0B4uUghzzae9-6VjJh_UznK---NUXV1NBEpOLYnzlJ--0X1X--Vl4pk-B5KYEc-D29vazJ-HkP9DmexzxxzzzrbztbseeeHeYHceXV-NC5uUF-R5YYCyX-2Vpc0jCF--5lM7-12TuM-hkQrZrS9X7f9e9enrSxrzaUxx9f9zzHhzUxqOaOsObbzSxoqUxyUY999c9Xcecce7eV5NDrSOLauUwzzzzEGK4K_0F2Z6YfEUoefUtzUzMyNNe9ceec0a2zdLQdyjwynxKKFznpGGJ--1-_X-AW0ZpjvnzCKKJ--1309--02HO---WrDV1sGfOOjzzn4KK-0FYN1qP-2W7RtfkF6J8G-geeemf9gemegfEbqUrxEbyTgecOwUbbxEbyTTUac-H3crrjCLEE1KoQBrofHegeecBefBeeegfAACxUHemeeeeegxrSrzxxoeeXXe9ecdAzUomXexzrzroeXeecc711_rI9nUSxxKMSryUzrzUpxKx9cV7cceghrrJnJmhBe9ee9VUrxy0a5-7e7VVX-7XccOVX99eefKKAAMxMIUxzMrxK9XXXXeXceXceee9mxxp9oeV9mf9eHgmeeWsXnHcmfA9oenJf9XcXcOby999exKKzMIJcceYBggghxrI9e9e99pxzpHeccceX110cXe7cXWzrUzUxzzrzrtzbaOcVcceXccce9Xceegcce6emeZe96buXeXoe7TZhBe2Bmc6eIBdC9eC9fHcHcAC9erxHed90C9MTUzoh9ZjJeofIAzHghHzI9nHYACCA9VxIHcfx9gmmnEJrKErJzSC9xrrrtyTOaUa0xSxKroxMSSrIMKqUlc6bztWx51--P7OyOy0tcX997V-NP6WsUaUbaOaX6VTOzzzxxpHnBnBggofCKSpJxUUo6pzzbtzyUzbxSzogfABeceef9mpSzoppI9e7X9nCCKMMK9fEI9ee19mfBgemh9W91WuI9gf9e5eX17N5NUXc0a1nBenUHfSorpMKMrHXh9XgmY9nMJmV1nIISC93fA9gnKBemp9e9XxKoeeeA9fSMzrxrpMSxMMHorIKII9eecgeceeee9gmghrKKCpKCIJonMozKJp6xyUzSppr5OttzzzzWWtyN5ObcV-5OaOWttyTTN5VWWbbzzrrxaOtbyNTUUrrSMMSpxrrSrUxxUUpSzSMKonIOaN6aVcVNOzUrL17ccXccVPeccX7717cXX-5V0zbzJxOboUKrKrrUxxrrSxxrSorIKSrMpUUISxxAESpGxrsVWzP7XXWzrrxVNXoccWcOcX-6xrV6tx0zxzUtbtzq99777WWVUV-50xaV0tsNUbzpUUzp9nUrpIyOzaUy9ge197e6zlbbbzbbyUzommhxonCHeIxxrxrxrUSxrUrrMKoogmmecmeeZcceX7eXHeeemmmn9eedCzHfoeeeZe_IMzIpoxHXKzUJxxUoUUprza0zxxxrUtyOaUUlbxIMKKKoopCIJpJoommeeeX9A9mmn9cce9Xe9ee19eXe17eA9mgnCKpJnBee7XXXcee7X-99XXeee9993cXV0ba5-XV0aOA919HgmeeBeY9mmX9ememef9ggn9ghA9mXcmeecX7gpCCCBnAAAABnCIICIKpJonCABnBgf9hBpBnBnCCCJonBnJnJonCIKprSKIMKKpJpCIKIIIHrSMpJjJxMpz6zHxCrrMMUSprKSIrMrMUUMrSxrSrSrrUUyTUbbtz6zbr6xxxtbtyOtyU56tzyUTUxzrSpxKMU6lWxzqNUSxpUxEMKJxCJnMKEUHhICEMrHxSUMSrMSrSppppMKMSSMKpKBxMKpppKKCBnCBopIKIKCEKCKKMMSpppSSSMMMMSSKKKKpSKKSKSMMMSrSSSMKpSSSppKICppMrUSyTUztbzzbrxaUq6zttbaObaOa5TOa5NOWWa5TT5-N50V7WWbaUbbtaOX-N-7-1-170cTT5ObaOa5OtttttbaOa5N5-1510c5V--0VVcX-1-V51-N7X-WWV55N55550ta6aNNOa5Oa5OaOaOtbaOaOaOaNOa55NNOV50a5-T50WWV-N--7nBf9mcmgcmmmeBgmee7X17eWba11X7VX7X79X97Jc7V7-V7117X7cV7---V1-X7X97--7X111111711-VX77V7-UMMMSMSrN0V5-UKKCMxpprSSSrMSSKprxrSSSMKKSKrMrrSrMKpprSrKrSSCKKppKpoxMUOzaTOzyUaTUttWtzbbyOts-OyUbbztVObyNNOyTV-0WxWWaNNN7X7VXceXXX17-7WWIBnIBonBd9eAA9Vc7NNV1CIK9117-797X7VX1111WbWy0xUzprSSSpprUxrSxxrzTUbqP6zrSKprxzxzzTUUUztzztxzzbtzSSUSMSzprSrrtzJmmfrSrSUSzaTN756xKxCSSIKMMKKpSKpMKprKprMKpSKpprMMMMMKrJxSSrSaNNOtVN6s---0WV17N-V-0aUWbyN0baOaOaNNOWbyOsN70btaUL0xLT6o-UM6lX6brSppSSSUUSrppEF6pSSSMKKCKVUMUL0tba-USSUKSKSSMKrMKpKSKKCKpIKIM6rSSpxMSppKSMKSSSpSrSxrUSlwT777VV---777X7XX19XXX--7V1Hc1--N0VN570c6bzKMUzrSxprK6xMxxrpCKS5NTT6cN0zltaTOa--57-11-V7X7VcX7c7X77977VN-Oa0aTObaUUoOxpKpqP70btyOwUsOw776rS6twUkUOtWaObX6ta0bVcOcWy5N-5T96XWaWccZeWWtaX97cecWzUxxq1X7cVX77VX999750a6VOttw1XecXnIBe9-VZceX7V0zTT-OtWWbrzSpCCUJltWbbbzxzUpoxopxTUUxprS9zMMSKKxGtaUtzV177177cX7X7X997-OtWaNX150a6V6rxUxtbaOV-NN0WV-75-0V77777X711-1X195XccccXZe_on9c29c799ecVOWaN-55NP-T-TUzzzzlzzzsUzxzzrxAqUyUzuA9770V-5UzbzOzSSUrOVOac7WzzxCrSUMJgpIJrKIHgrSJxSrMSrSrSrrSrSrSrrSrSrU55-X77TOe775OxsXX7X15WzMcXccX-Xee77-VX-UzkOzSq7UbzzxzSX5OVNUbaTP6xzrzccccce1XXeccWzzsP7ce-U6rSzSzbzUxxxzxzUwUqXcPVTT99XXce9eeXzS9cXXX9XceXe9e9ce9cece9e9ececeeeeeceexxxxrHee7ece7Ue9omeeXeeeeeeeccX999e9eeXgef9eeXXXeceec5eXefC9eWcPn9WeXeeef9hzSxHcfx9cBe9emee9X_Sp9e9Xe999XWyce7X9ceeeeXerp9eeeceecVeeeeen97d9ec_BemgeemVTOyTNUbttXVe9cce9eeef9e1ee95eeec--3mJ3-01RcfV-NIoOUF8R8uLgf9hIHeec1Xe9fBeh9mfEzzyUrHenxyUyUtzyUxzzbyTTNf9e0a0cWEvKdK_KKKLKOK_aJaPPOOUeKdUddLTyEukyvizjzzzGK43G3322EBkwBzkwwzwzwzwznwoKKJ0K1X2ABrpzzozzzaUWtacme9hxBcXBoeV9--7KZ5R0K1i5QpxUxzUyUzbxztyX9e9oe7eAHXe9eV--KycF0gAC-Bf9rUzta7c-54dtbV-61qbAAy---LztF1oAWqEUzrzxzbeXeecf9V-94pL6xF--Agu7--4xl31226aIBogfABfBf9nxxMyUztttttzbbzbyUtzbsX9f9e99eeec--5HLZ-A28MQry9f055LVqKKPKOaOddaKaKOOd_bizvy_MeOOOK_LPPK42BnJFzszEo0G4aLKOUjuOLO__GKKKKJHKG32K_KOKbnzzdKOLOeOO_-EoJG5KK_KKKGK2wzElGLK4K44JGJKLLLKFnLLOJF23dLLLK43_OK_KOOKFqKOKeK4KG43KKGGGOKKGKKJKKKKG0OKF_FOK_OKKKPLJK_KLK____LKOKKOLLMjidbzzdPPKOKJOG2pOKOKLLKOUu_PUzzzzYwzwydKdaOOKKOOKKLKaOK_OO__aEeOLTdzzEBydaaKdbEnzjfBnuzdPLLO_OLLOK_OLLLUzEnnEnzEnwwnz42zuRzEwwwwznK2nnwzEnEEEnnwzEzvdKKOLO_OOdOUEnwznnzYwnkEEzyEiuUvjzzzvjnyaTyuiz02yyawBkyeQeeOueddaUibuPJi__9gwnyaOOPTvuPJTbeLzEiYuEiaQEeRydiddddaJ-x4K4deadddaa_daaOdaOaOddePaPOaauddeufEeaLiuOfevduazjuzfvieeeuPueefiviiebe_3KvfjfEfiveePivjfiuiE-FGJ--3--4-FFF-FF33F-B-22vjyjeauefeiiuzefujidavuyuivfiuuvfeeuePaPiuvvjiiyyzyivvvvvyziyvzjzEnnEvyviviuvivjjzvjyyzwEii_viuviuo-2vjffdKHPdivgEijjieEigzjvfYyfno3-z2BzvvjeOiivffdideeeieOdeLKbeLuOOOOedaeOeidjgnueaaLOaafeveLyyvivffiiuuiiiiiiiivevfiiieiiviviyyvvvvvvvjiuvvjefeueieieeeddveTefeaieeeeQePevedeffeuieeuaeeeaeee_fiffiieeQeffideufj3323FwEjdyuMeuaveTuQeuLEeudG33_eLVzizvdjfzi_JibeJF44fzeeu2vc3BEfdvdjfy_vvfyEvd_TyfyeTgyY2yzFF-wz2zJGF3F-kz-F22Bn-0GKG43F-2BwzFk3-BoFC4300-EyzjzBo3-l0-zzzwzwzEBk2B-440-04443-EivzjjvzzwwkkBn2-B322BB-zyadY2-B2-nBkk-oF0-o-o2wBnnBnnEsnE2Ezsnvzk2nn32-nB-kk--BBl-2-23-3-BF-B-ysn2-kBBnEBBkn22-B--00-00GKK43GG03JG43KKOGJ_444OOFddF23BJHJGGGJJKOddG-kBKHJ44G-nB-K3-F3-F403JG3GJK45KGdGK8J3G44-3G04J3_LK2B23JK8G3FExKOLK__KGG4KOKG-3K4OHLK_affedaK-G-n2-F-wn3_aO___KaPJ4aOeadaOaLdG3G3GGK5O_OOOGGJFG3FFFF-k-22--n--GJ2K4KK_KKG_KF2n2-2-C-nu22-2-nBn-KKKOK_OPaeOdd_eOK0O_KOLJG44J33-FFF3-F-2-B-B-k2E202--n-wnE2yEEEB2ynkygEfynEvijz2y2GJ2zgzEgwygwyzvyigwwziiiveaaidfuuevfiE22-k-0---F----knBnBnnnnBnBwzBnnEwx-EsnGJEnkCJBBBFkB22nyaLdfeaBknB-EsnBnB-zznzKK2nzznEzx03BknBnBwznByEwzBnzBynnzjzdLJ_OL_aOigwnnBnyEnzEEnlGOJK4FpF-FnBOJGFzywnwkoJKOK_OK____aOJBEBwnEEEwwknwzzzzzzzzzzzEBwnnwzEswwwk-nC3LK2BLKK2wznJK4JK23J4-FzYsCG2lFoJEC332JCaOT_aLPJ8_OOJ34JBFnFwBEK4JF3G48K_4_44HLLPdaPaeOOaLLQiuudeOdaLOOOOOLKOeePPduOaOdGOdGJB3G2FFnBB-nB4K4_GG44GJC3GJK4KOKFwB-kG_F2BknBnnBwnEBzBwwnzwzC3EzwnEjzEEEEE4KK0-zjizwwwwFzzvih-yC02yijEnnnwkF2Ez2CJGGKKdeOKaO_Gbd___Fo-nEB48O_aOG2k2pK3EBzF2042wwwnzznnEEnlK_4F--Bnu7-D5P0Mj4-NFneHn99fHdEpA9e1mrUrMMy6rbyObacVUbsXc-95VQqU-0RC72gfrLTUX9WL7PGHOKOLKaLLO_aOzjzdKK8fyy2yvzzzzjnvEyszn-yvuyji_KjEzfvvdedLOOK_au_K_8KK4O_Oavznwzj2vYyiizdQjjyvjvzjnFJ43FEvyyvysEV2vkG-oJJ-J2vC2nzfvdvcyvB2EgwkznoHKJEKF44K444Fwkzjx4JEwoLK2EGKJ34KOGFCFK2C3GKKKLujnzuK_aK4K2Bl0KK_K__OOd_id_032E-wwwznKK-5koy5rxzzye9XeV0NQGfQzp409Fr2emf9gemeoemhxzoeenrzzzzzzxoeeeeHeeemnrUzzJr6zzzzbyUztttzIzrzrtzaP5Uxy1XXc7TOVNOcXemnCBoeVOX9IHeX9ec9V-7QyMR-O2VLYCrzOcTXeV-7R7oR-42W7vEc-16Tkb---xZJV2sUexOjjEzzlK4KJ--2yzH--10C8--0-gFV-7VNER-038rYV-7WePR--3FiX-8X7VOizvlGJF--GAnc-q7b4qavzwz43KJ--3In9--193W--G5YBk--7uzo-03SVI---Z6nF-JH3JgtV1NZFfOiznCGJ-03ZUnV-NZy-Ok--HUC7-18Epr--G9ncs--8SB3-23innD--1O-0-6lCPTmmnCzzbWa9c--8glJ--3qO1-3XRYCbzK-XlIJjmegemef9efDUzwUzx9fHfBfxyTTTUpsTUxzWttf9eeWtzu7-19Vk6-2lJH2nUze9VKcf22OuK5ObzzuOLKUzviaKzzzfzvwwzEwwwzYBzB0GF5JGaKOJOG__3a_OJBG4-PlNXPmfBnBnBofADUzJzbbbbbzpxzbXe0ccX9Bc6s--1mmx-6lYOwmextzUrP7cc-5BSZbV-45HC2T7-9BdhMxF6JOkqwemmmmf9e19nJemmmenzryUyTTUyUbbbbzbtzue7-qBstqKOOYvEEBo-45TmAqV-1Bzxq-CGcDCxzS9dEMrxowOX7V19X-6YINKaOgnk--leh3lV-cqZnQo-AGhLznASpxpObxa-cXcXV--sj9F--RjYc-9DO8aRk-JRodC5V1Ntt6OKvznCJ--6Flm--Yf48k-BTXJhc-LEJ7aTYC-0BTkwjJhyP7P1LYtQd_KPPLbePLnuafp-yEeddzzEuOiydeKOGdzeaK_jzjjuKKaOaOUEnynBzvnzVyzzEE4FnBwBGGOJBF334G0-3JKJEknBBlKKK-wnCF-RUIqgju-4Yv7daLnB--6voH-EYxyt_ueaYBBE24F-wUjugoqOWc09F4K5OGOOYyzBzElK-1m02NnLNP--32h4-0m0qgnqV-1FPCq--H2Gus--FRXJ--7Gue--38td-6H3zimfGzxLPWaX--3E7C--16gBV2O3CZOuLecn-n3--RX7jgyP--3G5C--18RXV3t3nbP_3_iju_Hz2-B-03XWAgfxyTcV-047KF--Xjy7--GPHJ0W7iC6CSKKIICJnCBemzqUbV6sUa5PX6w1711-V0d4t8OOwwo--7o-P-3ZP3pin4--1CVBV-85mEN0d7rPv9hEIBeXrICxpCAIBtxrtbttztWV--UWc7ec--ZRVOk-3Y_fi--3SWl-1HE1urq7V-06YZF0JYnKBgltzy9c-1GuEq--1Ey3V-87P_R--8B0X--3aep-1HIL9xw7V-08jeF1RZt2BoxCKLV5NOaTeV-LHXk5OUn-3B_KjRnEJxK6xSIBnGsOV5-5-N7e0PZfppdQivevivviuviuvfffiviiiuuivV2vxJG3G400-F2zoG43G3G3G43G3043FJF-B_XHC--1HrHb--1Ml9V0OBPSTykK--mPGuw--0CdCF-3bQrg--_-bGk--c3w7-1J1Tb-nHWSNmnBmnCBnBognAxAACOzzzUbzOzIAAEbaOtbpICxtaNHW9WWttge-Ou9dHce0uXWaOaNTc0qJ_j5Tfuiyfuvyn-43-C4GJJF-ZdZ-CEN--qKF5MivvzoGGJJ--9fZm--4NVG0OHj5Imgmgn9mggggggzbxlyUttxUxrltzzxUp9mcegf9nBx9HzICBnICCIKMbaOWa0c55OWaUlaOaUxxrIJogmqTUpK6aNNOaN0xMUNT1-XXceee7cN575ec0cecV-0P9QF-3hh-D-7_jKnaJ2nyZ-YA_nYBnBnEUttXVOc8aMCmTLLKaaLKPddbjiuievivijivfivy_PPeaeffjyyvjjvzEnzso3-F-3G42l4J-2zvEBGG00LLuJF-3KFK003GFEyxG-nEzvp-B33G_JK--muI9w-5OSJStaOeji--wBzzzKGOK-0JieNwmeCzzaV-TMQgDzvlJJ-GAk2vrxkPe7--MV8o-6At0AC5--OURXy--gjqMEraeV2OUrqueTfVFl22F--jvyN-PNAgydcnF-Yn1WRrSpppMJeYrJnrUKq6ce7WzTUzUUUNVNUtsX7VJece9XXX97c--5440-2I2OHnJsOV-1NxR5-Bn6z2mgeegenBzbzzUbtsN--0_72F--nKlc11OxXDLKKO_OKLQvzwwwzEnnnnKF0RnydBghMMNN--dOfypPMdfibveueeaPaOO_3eafd_J8KOKKaaOaLuLaLvcyEieQevy2l---GFpJFzz-ynwwzzyeiyv-Bx3FEjjzVEvV2s2ufk2G0--3FF2020003JG33F-dC_NYAASKopSbtV--77--QufZ--CxYX-5b-NCbjY3F--sGR7-DRSQ6v4--2ZTFV-OmFuQF--tWp7--Rrk3-2DRQfF-ObG_p_LKK4LQjvvvvjk3BB--2cnkV-0opdF-BuUUE--1SP5b--2fOPV-0qQ8F-JvLKBlV-ttYkOgB--EKfm-GbimObjzjzzK4JOJJ-QEW629fAEU6aT5-Kbx48aOGeQiv-nzVk1K--4-Bei-2c4b_aEF-00fX7--VsoZ--FYHH--7bwK--3KeVV-19ymF-456Wg-0cmm4s--oPB-o--PCDOOk-46F9i--7vjd--oSsBlV-uEMIQY3-0GwSv--1EeMF-06tTc-5Z2ZLk-2HUyYu-0dG4tY--3dhcV-1KhfF-09wIc0ea0y5OddePfiivc-kk---0--hB85hIq---PPqqQ-ACDhYBegf9nBoyOyOtzzxAUzUxrxzxKrqUSHnEyUzzOzbcXXe5e9X97XXXccX9Xee--1UpAF-SFcxhOX-1eB0xgo--Jd31--9KJS-9pBVymefBnKMUUaOVNN72Xdb-LMveiuLKJKMinzzzvfY2BzjEzzY3GK3FK4KOGKF-0Ji17-ueZcLLyvwzYGGK-0KK8igpzza9cc4aecw5eQeefeK3iifeyVyyaPysnzivW-yvivjf3G32JdFG5OJG-3--EB2003-C_GGF-0M4Pc--fYVJ-0L1VIV-1kjSF-0NOQ7--gXeJ--LIdm--AAXh--Kaimk--h2YJ--LYMm--fHOlV-4QMoB-1fQzGbV-OM1DQUKrSV17XV-PsGvQ--0R8xc-Pi9hLee----4n7gV0uuK8Ovwo_F-0SPF7-Tihf5jioG3-rMLqIMSxJfMpp51-Uk7-X7mV-1vH3F-0SiM7--ivJJ-4MU-YL--5j0_5V--MW4m-Ffnz4uebcnu-E0K3--4umFV-1xQQF0KULdhJnCaOX--5ji96o-jMt7YCKBproNN55-KC9-7-Pjp4LPbw---4zuVV-2-p7F-4VdEB-3g5r8awo-6q3GTnIBnBlaOaOV--kXLJ-0NJ5IV7f1wFOePedueiffjEBwB-FFFFFG0F7pWV6CJfCAHcXBnHgpIN5Ox6lbxrJpMSxbpNN7V56rMF5-7-X577V--lo2Z-0O25AV-28oRFJ__7yBm_ICCAEJgcnBdJonCBgegnJpS9XXe7nIKCSSKpxppCpKUrbzKOzaUUoUzKLOttxGVV557-OWtbVWV0a6ryX7X70cX1-cUu-Uy90zaPcXe90XX--AA8ER--Oap9--gnQdkH4b2ThSprSrUSrMSSUSxpMKpUSprMKrMKSpprUMMSrrSrSR6rbr--N--0X71d9-VV7e7WaWu1Zc-cVe95BcZe7917X7cXV7VX9eeX9--Bw-4--LXIak-9oUkasF-KdZHh5--QKOSQF-0f7Ac-DpZnLQC--5ifVV-2M_TF2_g-RhCKoxKSR7-6xX7OVh9-77uqCsLOaOKKK4K45PKaadudaaeddaejyeedeTsz--o-k0-nzuafiueskznG3FB3FG3EBnknEs4_OOGa_K03F-BBzvnywzvvzEBBkk-EQ93ASrF17--hcV8V-0ho3c-1r18a-KLsKtn9ghIKopJxGbzlz5PcOWWV6bZeVXV-erChLbuawo3F-0QgRIV0AS_oTz4F-0iqsc-LrVEayh0F-0jBw7-1raaM0sqwtimmmocCrUzKrUzbxJeYBexrSIoT50xMUUSrzrrxxxrppMMIrI9gnJzzaUOzSrSUUzxtbX7OsU-UOzrUxxSSSpxSrzxzrr57cWue-BcVX-X7X10bqN7e7ce7-7cX7eX7ecccXce9e9997eBhHmhBnBme7791-5119cXV-ATZeR--Qs0X--CxF4-2M-EHrMNVV-1s18b-0M09Rrc-3i33Gcy3-7r1pBmhExpSrcP9-7-3i6ThbzJ-0r2kLmxV-LsT9bywKF-Cl8ajc-5sg76o--RNyP--DBcS--r75Dw--AZP8N-CRYLYIrWcV-AZ_gR-hRb0Q9efBUUzzxrq7Ve9--DIcG--69X3V-2_KXF0CmrNBxUTN7e--DM2x--MBNss1qtbGTeeeiebfeviufifjG-FF-FK-2F-F0-F--6CEoV-2b0EF-pnx7hKlVX--DWBO-IrGX5pJgomd9Beefrr6rUttyNUsWaN9c-iuOLLLPjcnF2--0p_uc--uwAJ-ISZnnCIKWa---QgbdT-0_qJ7CprKy7917--Do60-0MPdwpc0LirO4eLzjezyyzzzyyzjzjzzzvvsFEiyn3OJFKKJFEwwKOKJJKGd_GKKG3JK4KJ-ESx2nSrP79-5j2XKaPVn--_t4Cgjtc-1wYGa--6ZPXV-Ama9N-CTK4nUSXX--2n3-F24thzhrHcXnIqUttxbcd97-3jCxpvh0-1rbiZpEa1-JjETd_azzgznzC_KK4F-0TTz2V-2nrwF-Ctvzgs-Dwy-LEp--Mcags11x3uLKKLPLLLOeNwzBknnwwzECF-0uAGc-ax4e5iii30---6dYeV-2pDWF-0v0pc-uxhu5KvzivnG3GF-0vS9c-Tximavyl4F0GTtRbKpKKKIMKorSKxcP77--50cV1--X-0jSM8x--MlFHs-PyMyriv3J--6njmV-AuIRR--UKqu7wjf1GaaeOdiaPdeeaeadePOdd_OGG3FK43G443G3G-nBB-En2B3P_3HKJKGJJHPdOKJO_aOeOaaQe_K4_F3G3O_8PKOeLOPeOK9TddJ01OaPPu_aOdaO__OKKaK___GOOOaLLLOd_-9PPeaPPefeueOH_Afeeeueuaeaieeeaadd_OdvvivzynwnnwnEnzzzzzznBnBzEEEEzznwzEnwzzzzvizyzuuaveuePv-wnBwwnBnEePaOaPaOLEwBknueaaMwzeeePPujjczvyvwnnnEuuusEnnEEEEzznEBBBkn2BnE2BknknBnBwwn2Bn2B2BBBkkn2--3Bk-k-F3F3J0F-BK8J-0-3Fl43J0JJFC0220-FFB--434_F02-3-FoF-3--ULK1-9jk6__KPzsnC-0rs2uxu7-5z6oLo-0Ua7Y--2yTuFFpzEegnKCAHYSIEIBgmnBen9mhJonKKpKpKIICCBopKMKpCMMMSxxtbbyOVNN50V550VN50VN50WVN-0a--0xLN-V--711-V0R4w-PfBJ-5sCnMpUSzGcVcX--36DPF-a3T2CpX7-21Rkb--7L9iV-3CdyF-D7K1E--E3yyLPB-AsdryprMSrUMUXVXX77X7-0lNuCb-0sh-cpsV-24z4a-0O5skoP--HJcO--8cjcVMwvW_PePffuOedddaOd_OLivedaLOQswwnnBwnnBBEEz2EknBl___JJF2-ddFJBB-kFJF-3Oxo3mryUe9--oNo0k-L_0tBtV-x9UXPVk0Kd_2QCCKJnKMU6Wy6x0a5OtWWaA9f9eX9VNhBeeOaOaK_aOaOOOOOOOLK___aLLLL_aLbzjjjEnnnEEBnEBnBwwzEzFnBzBnnnBwkBOJ3--9Q2JV0hFDWPTj03-0esaIV-4M3pF-DfxqCV-0LPM3-8fbYnBy5-Cq8_WadYzEwLK3--A59FV-CZXbR-2ghDYk--LQk_-0vCsPnTV-0OncZ--gxEe--LXbt-4QGLNnIMaTP9V-4d4NF0DoYGBxBttWe--LdTx--AJjgV-4fDgF-1q1n72bQ0Tq_fzyaLyy__JbzjyiyEvnzoEzz4K44GG440J0GJ--AQaoV-hj4xQW--QUtTs-0QzBZ-2hzuIu--M0W0-3QVpXzUSX9X--r954k-6-LVD--s6udk-U12pBUe--NKbO--B9nkV-55gUGAILAU-ee9eeXeeXeee9eeXeyN9eeeee9XAzbzzzUUtzxzrza1fzrzs7Xe9XmeeiUzrWztzbzzsUztbyUUrztzUzzyUVfzMzzzzzzzzzzyUzzzy1SzSxzrzVczzSpUzbrzzztzzzzrzzy1cXXecXe9zzxzV9eeee99USzzzztzSzzzzzzzzzzWtzMUbUztUSzzzrzzsD2xzxrzbxrzbVeXUzMMzbztzztyUWVX7cX7X7ccX8rtVX2Vc1gVWrVNOta1UbbaT6byOyTMqXggpFemnBnLpThScXXopfJppUhSzt_USUrxSxSzUUKwepzznMzUwefMzSCJXAKRemgegeeoeeeeeeXe99eACMxzUrxzUzzzPmeceeeeXeepzrzzzr9eee9e9ehUrxzrzryUzzzxwg-3sRUlgzK-1wGfBrUXc-1s_20ck-8lARQMsc-6sakWaUYsG--BJEyXtygSR0KGMwzkKK_KK_KJKK4JRnEEEEzEnwznzwzwzzzwzzwzjw3wkznnnkKOKGnEzwEEwzB0wn2vyizz0nEEqPvnzzzwjjEjzEEwznzzEzzwnvz2jjvvzwnkTzzzj2vznzvzyzzyzzwzzwzzwzwzzzEnwnknzfjvuzECfjDzEBBwzEwzEwzwzzE2vfwzk6njvw-nzEEzEzyzvjvLizyyzzzyzzzzzvzzzzzeOPPKd_4aPuwnaLK_aOezjEwznnn2EEnn2wzzEmwznzEn2nwwzznwwnywwzzvzEznwwnDPzzwzzzzvzEvznzjEyjEEnnwzzzzvzvzywviwzzEBwzwzzveznyuzjEzzzwznzjwzjwwztfvzznEEEnzzzzzwn2BwuO_fizzvzzjzjDywzjjEqKfyvzEOfzzyLjzmzzn2hPjjAwzjvjezvnfzzzjAzfjjqKOO___OL_KKKOK_LKLO_KKaKKOaOOLOO_ePLiKKKLKKLKKLOOKa--wN-ww--DBg5N-4latIyc-MYUfaRyCF066q1CJxa5X--5F6mF7z9BugfEUSrSArzxBefBeJcrrzbtzUzHmfUzzzttVX7X7XXX7XXX9--yKGGTsF-2mkw2k-3tQstjx4--BkdsV0DNK7PzGF-6B9ki-9tXkO_K_zznl-0RovXrc--OeZW-IRqTXoeXefUzzzxHYUyWzzzu9XZmZe7-1tmAWzJ-0nbeYV0DRxYTvG--2Dto7-0bYlJ-0nm6v-4DTdBTzyzvzvlJKJK4K-8wxJTrrrzrzOceXce9V-DTg9R-dnsbYExxryUzaeeceec-6bz2Lk-2o5Gnu-1u2YOv3-0oCyAV-iaLAUp--CCXRV2Db2oOOwzvnpKF-ppYW0bVVaOyUzzzrxpxpzPk-2eBMb-8xGoerUUxzry9Xce9XV2ydQ2OK_OjjnBwnJ--pC19-2uliNEyk" :
		12 === bO.eA ? or =
		"JJAf2uP6y-0nEiiuyywnyueuTbfevfvvjivivivjfvivviyvuuyEgzjjzzvviyvizvviuNziyvijvijfvyvgzvvvvfeu0-F-n5a_GG4KJGGG3G3G3FFJFmKGJ4JGGGG3GJJFJG3G3G323G--kLPeduaKGFGGGG443JJJJJJG--B-C0FJK__443-BJ-66wmpBnJopCMJpCCCIIIJoopKKICKCBnCKJgooopMIDOzzSzUzbzzUSyTUxxrrrrrP1XcXXX9Hcn9cceemece7cPIoeX0sWWaOWVNTOcTNNcN0V0V5-N0aOa-0V--N50a5Obyc-M0z3TPOdgBnBF0NOpxpMV7-M2mMiLbinz03F0sTx8mfrNT-2l6QEdMwwp-5XX7UMTP1V1GIuvaNn-5Xfxrpw5XV1GNTEfn4-_XvzjAAA9mfA9ed9fpzyTUzyUaUyOX3n59NTKLLKHPPPO_LK4iidea_O_QeideeaLOLLJG3-0eeddOaPO_OKLKzEznzjgnnzBykknByEYnByug-3332ElJ222-2wBko2BnBnBwwzwx-9Y6j6rrrkccc-E5ctEizpJF-aDYgSMGz-X10G6VyjiyuuPeiuzjivh3G3K3G--k-9JGFAPEIZSKBghKSMIpKpCJnI9gcXeccehHccoeXBeoppKIJoghIHnCJnJmemmecmfA9jyTUzzzbbxbV0WaTT-OtWWWV0zxtyUN6yUzSxrSqTUztaN71190V7-5V15VUy--V-lxHEg--33oL-67Dhyu0--3FoL--7ahw-LGYowfzu-0HFMIfF-aHWWwxxxcXX-E8ZrUdfVl--TIJLzSr17V0wcDLvivjysGK3G4XaJb1zppIJpBccccge7fUxx9eocX7cXX6y7Y99Heggen9nJdAHp9Xnp9IIJfICIBdCKKIIMMJme19eXxxp9X9VVfEMMMSBpooe7XCSBomccxxpHcrKKCMHmXXmcxoeX1mpJe70BrMJmVV--gxExIpJcX71nKCJmhCKKCIJoopCKKKHX8KHd9nKrKBj6xrSrKpz6xSMMSrKppwObaP-UzSCAICIKCIKKKCMMKKCpCMMSrrrKpKprUSprMUSMrSprKrSpSrUrUSxpxprSrMrMprSSSppMKprSprrSrxKSUSqUGbqUbbrxrSxrSrKHXXeggeYBnBgmnBnKCrJnKpIKpBnKCMMrSS9chKKIBeX77EIAE5OxIIKKKIIEKSKSKKSKKMKpKpKKSMSSSSrSzxxxzlzzUzzzzzUxrMMMMSxxxrrxrrxxxxzUzOzrbxzrxzzzw6w6yOtttttyUbbyTTTTTTTTTUtzIrzbzbzbba-71-VVV77V--7711-V1-1---51--1-1-V0cN-N5VN1e-ee7-1mc71Xe9fIBcVV0WbyOzxX-VV7VNN5TUzUu1ce9menBecmf9gxHc7c7V-777---50VP-V-N-0WxppSJpr6zyObzttV6rMKpUyObttbryUbzWaP0sNNOX757X97X7ce9XXXXXVc7-V-X7VX5-V7eeA9menA9fBnCBnIIJoorMIRObpIKMJpppSSSMSoeX71-V7777X97c5V-ccWV0VX77--NN55-N--7U5111cXXenBcc7fABgcX117X7c-gf9emV---1--XXXVX7X17579VVV117Xed9XecXX--WV5Uzz6zyUzrSrUUaNUlxtzXXXee1777X1e-5NOy--WV5OttttaTUzyUrxxtzzzlzMUrzzxaUttbbxWzxpSonBmpCCJpCKCIJpJooeACHpprSxaOV577U6sOWV-NNN70WVOWzwTTT5NUxryUba5NNOba1cc79cXX199X-91X99mhIHfJmXgxxxpHe9XccX997c7X0zV--V-N7P6k49V711-111X-77cX79mmeHeccV1mdbn_Uno-DKNVSo1-O9kaiKKzzEzpK-8_SLEzzzeeeV1Hinzjh3-8_UsM9mjtyTVBHk8AfiyvivizpG43G3GG--0OIzV2mnjMaLEBxn29mc4SSpprSSSUprrKprSSpppKMMSrMrxrKIKHhKHfIKKpIBpCIIJpIJnIKpSKJo1AKKpppxprSprpMKphIKhMUSrCKMRpMKrrSMMMMSKUVUxxUxSJe19efAKKUbKnMxKKUKIKUStaSrUMTUrzbzxxrSzzUy5SSKtbqprTprzSxxSrBXe9ghSrMMUyUzzbySKrUKpUSpSUMtV---D--0aN-X9997977VVe9XD-19XX1-9XcXXXXYxzUttzbV-7VX78by0rUSppKMbs5-V77V77X-X71--17-X-7V-0WWVN-6byTOrJepKpSrpxrUSSIKSKSzrrrs797c1711ObUSxxpSSSSSSy5--7997VV6z_rrSrxpSprs-7VX17XeXVXN-11-TUUSxztyTT5ObzrSSrzbtbbtUKzrxrSxzUrzUzShKhMKrxzzzxyMtzqnAA9mgfAAACKICBnKzbbWWbaOtbaOaTUbtyUyTTTOaOa556zyMxrUtaTUzrxrrrzSzxzbta5N0s-ee997cX97cX7cX7X771-V-aT--V17V7X1--V7Xea6ty5T5Mts5--5-550aT55NU_ySxxta5OVD--0VN5NND-N--8a6a5OsN1og55OVVOta-75OTSqhCMrBmhMbbtzzzzta--NN5-8Us0V-N1eD-XN0VOKppraT18zs0SyOUaOa5OaN1-VcX7X5OSpSxpMSra5NNObV5-N19cVc-W_KMSrrxxztzsND--MJpKMrzb_pyTMzUa5-0a5-X-VOIMMMSBnKKSMrMzprzaQBen1ceeXcccempprtzUUSv9mmfMrxzUMxpUUUrzbztrxyOzUxrrMzbWbJppSvC7gmenA9mgggfABgnBf9nBppUrttbzUzCKrSSxzbaUxPfMSKpKnJhRpIAIIKrSzUMMzxztyTObaTOWWaTTTUbzzrza5ObaTOWbbbUrSrStzyUUzbyN--s5T2rs-1XeXeefBn97VfBnIBemf97cXcX7bWV1111c1eiN7f-ABa6s19n77X7g97cceX7f11UzUppry-N0MMAIKzV4UW_rJoppza55-TMSsNObztaOa6KzV-77N-SKKSUzbaOaOyUtzzzyTUbtzxrsOaObtttSraOWaObzzzzz_ptaUbyMzzyUtbVUyUrUzzzzzUzzxyQMzzUzzzeeeeXee9Xeee9eeeefKMIKcf9ggnABemefCCKzrLf99X1fABgeeXAKSSMKxxzUSrSraMRpSxrQA7X7X9oopBo1N9gnIKCIJmmmnKIKJomn7emfMBc51997cenKMUzPmegmfMMSzzyNA9OzzUUIKMUKrKpSSrUrxza6SrMSrrMSrUUxzrxxxrUSSzSSxSUSxSrSSrSrpUrMMUSprrUUUUSpKrySzSrxzzxpzSppprrzUrSpSSCSRprSMKKpMKrMKKCIIIBohIBonAAABnABmgemhBmmmeenBnA9X9ecceeXX7Xemmcemgef9nA7en9kecee9eXeX1-enBkeX7XeXce92VXX99ceACBn9XX77XVVV--X7XemmgeeXXX997VVc75OVeX9hAAA7eeme9eXe9Xeeee9e9ceemmmmf9meegfHenBmfBnA9mgggemnBggfBnIHmmekeeceX9e9cXXXmoeceeXce9Xce99eXnBpCBpSrSrSrMSxzzxyeeeeemkeemgf9pprUzUHmeXXem99e9eceef1dbs17ecepKrMgg9XeXccX-Xeen7cXeenBmnBghCBgnBACCCMCKJohCCMrzzzyUzzzzqognBmnCKprMSMACKpz_wmoogepCKrMSMStUZkeeeeAH15-11-X9hCKMSRomcgpKzprpprs0z_rKppzrSrzSpIKIBgXmprrUKIKKrttpKzSUBomm97ghJpSyUzSzzzUbzzUtrzfAI9epnHceceemegghUUzxzWbzzrbTopMSta5OVOrzzUSKUUxrsOrpxQCSrIIKSxSrSzSrzUrUUtttztUtbzxxMaOV-sOWV5--NNOUzUzxzxzUUrSxrrUSrrSzrrSxSprSppprSpxrrrUUrbbtzrbbrztzzrbbyTT6bSyOa0aTOaOy5T6aTOzbzpxxxxpzUSxs7XESrKyOUrtaOa17zyUaTOaOSxprKCKgnIAAABnBnKppppppJnHnCMJnCCKMSrSSKKICCKKKKppKo-2AYFDB--MPns--j8uk-0TwQV7mzO6ievyyvFGK3F--qNX0zxzxrXce9c-3mKUw-DOJuzw9-lBkNyuuuviyzjJK43G000-OaPJEprzSKMrrkccc-1997-2C8pDo-uPOqwf9mnbbtyTV-2Jzv--5gXT-CCmSUvvGG--5xsy-0D-rE-4b-qzSqX7--sMmk-0lNEV-IZ0nk-tm6EnFN-Rt3BvgF-5ReOUc-otNAvisG30DRoZzUzzzrwP9eeecc-3uJps0eSSKRrMGzrzrrM-V-eXXeX--2fpn--6MiT-0DoXD--6ULD--E2lg--TGhs--wrkk-0uNAV-npyzx-0bkCEF-6EeL6jG-5bpJQAEbaV0nuubvp-0dya3mhrk--BzMKzF28zMOzrMUP779c-gziXufkG-2byBQrcV-J-IhV490elopIKKJzlX70V---2FCPyV-HVlaxpX7-x0_hzvvGGF-12_CV1o6LCaeB---Vy4s-K15tuR-0cH3EP-AFalyPf--1u44Wxxxr17cc-CFkqTusBG-2cO5jMcV3oE3YuuiB3FF0P7tWrre9-4GLRUh--19rRV-JN8nk-1B7iV-3OQA--cpNzV8oQxrjjizyyw4KKG44-1d-ezGV-_77wzvGF0eJQZmxL0V-C9jlvF09OI0rTX--JoI0k-PTDyyV-40oK--e5AbV7K29M_OLMfgznEB4-IfrEMASpSUSq-7-Nee-ANaSDyx3F0A69npL--1qoP6bvVF-qtlNxCKCUa0V7V0xqOguudaNznk-G3-Lvq2RrOc-2N7SOfvlG-2g3LFmnKUrla-7X--Vg031A1AJgoxMSporMSSr-XV--10aNXeV-y7CVQfz0GF0RIcNptae02XdsiLTezvzyyyzjzGGGGGGGGG3--GRVT-QXt0TTyyzwK4GJ-r5K0genCxtwT-V-yBnotTvg-F-RR4WyVBNuCtdejvYyi-knBLOFJJF3BSAjnMSzUbsX9XeV3t0vf_fzv-GF0wZ8bxrOe9--8AQA--HN1m-CZlGTLRwx-cmONzIxrprppKprUyUts-XccX1e97cXc--_7pw029QbgoonJUROV5-V-iJrguik4--mdjY-0tQAdaRk-BiCss-aMQLTjJ--3jUaV4tUqAvjzx5KGF-YB7rwfzwOeVuOXlO_O__Kbj2vizuviyuuvfeveTiviynvYziefiiefvfiYvjB-444G3F-0-2-kJ304K3GGG3JG34--F3GJ-IBbGxS--3yOw8PPd_GaaiC-Eueibvyvx-304--C-2IBzcggmeenCMSrwOaOzKHmnrUSxzTOu--V7VVV9c-yPFVPuf0-F0gt0ZpKs17-aTPhOiBFxRy2ZmgnJeeXAICBnBenJzSrKKrrSSrKpMKJnBnCKMSMIKMrxSOV0V0zzUKSpppSKSEKIESOV-Oa0sOzUrMKSppSUMMkP77V-0a1--VP-17--71--7-UxSrrrrSJpqOtzzOX770hBcX7V5--XXV11cc717X7X9XX999777X7e-_chDLLiiivYEl33G3-Vock29fSpSKonCMU5OaNV-NNX7c2DaQYtPjzvjfiywGK33G3G-0xDlzpUyX9V5PSx2jyuzVGGK-0CFZWnwNV1uXF0_fBo1IJJoSSJnACCCKppSxyUV-117-N711-6evlav4-JpSyQKUSSSpaX517c-c-yg6luPzk3F0CNJQpy9-iumBnaLKKeudOKG_KLKLLLueLOaQEEjEjyinEyzejjnskBnwC043F2-nn2zE2EEoKGKFASOdporHX8CBhzxraUqUzSlzSX77eeeXBc0V-LhikvW--KmlL-EfebDLTskk-YMe-RrMTV7V2uyCCaPEBC-5q1sjK6a7V-A2Ih-Aq892rMUNP7cc-TlB1tv--ANsVBjV2v6d6aOwnp-7qIGAIJlaNV1imQQOPszivwzE8GGGGJ0vODuRhCrppCBpULN5N7NX90WX-6gppqPk-GqSXfBnqOxtaUemec-5nnTs-YPD2wz6re9-3QGmz__bnno-2PJQD-KhKnTaaTn-nF-0Pg_N-aphUzj4FKhhRbmhUrKHohIzMpxrpKKKSMKSKxrU5N5OaUL--X11777Hf9VX-N7--5P-XHXe-0hhca-WqtqMCppppSJp6ltz5NVXV-X17eV0QUJbjJ-nREfwnBwOtbae-IiGGaLPvEk0-Er7eI9nCKpUa0V--1v_ZSfcl--0T7Zc0TwsLPNzgz8K4--MdCP-8jMTqMno-QTv6BfDUs-CjSgLdjBG--rknYV0vttlfW-0CxT2mcUV6Qv4daeffkn3J3B-EUOXBja1CjifiOvd_LdKKaaOaK--nBw8aOFFeeKbfivzjix3En-2Ennz-n-3-2UYTi-bkAQ5LLKaRzgwnznGJ-MWJCRr5NV0wBylcwF0D6jaola--BJZx--NfgX-6lRkav3--sx_2V7RUnUaK_aLLQjzzz-atBrI9mgmnICCpCKLTOaOzs0aNOWV9c-E9stskaiM_-pIJnKoxxzxzrUrrxzUxzSrUSzSpISxzxbxzzzzrzzrzxbzrzUta-0YBe7mf9eeV--P9eee7XXcecVXeXceA9eeeXX-c7T9Bee997n9X-0wqC2ylF4iQ5frxSUzJzqNX9cX97V1wr6EuslF-YbY3xSUaeX--x1Jxc--uDnn-6S8wKaPedvn-FFB-zea6RfESrSq7-WX-6pPVqNx-dun9rIIKMSrSrSxxBzbts7XeX97XX7N---2MXGF3ilDMnrSppGa50VeXcHjS0jOLKO_LOaK_K_K_LKK_JKK4K4KGPedaOK44KOPaK_3aefffeTzivizzzyuvkBzwzszEEnwnn-nzyzwzv03G00-B2EzBEBwzBwnEE2-ow4SEIJmcccxxrUJnBonSrrztzyTOts-9X7VX7X9-YvBN2wwwwzvvjjzzk0zOXTUyUxzV" :
		13 === bO.eA ? or =
		"C0DX0NP1V--QqeadnzzjynEEzzjjivdivfezjj2BBwzwnEzzzzzEjnnvYBBBBEBnzz-UV-hflzUUSrrUzSxSxzk0a1-V50K-0pMiudevf-zvfeBnyviVF-F33-yzgp3bVV02IKUrHnUzzpHz5UzUzSKrUrzbyNN-OzzxzUUUSrSrrrtzttzWaOaTUzSxxaOaOxrKBnCSKCIMSKKKKIBpIJoonIJopCJpJpCCCBnBggeXn9eccc9X7geXXn9efHfBnABemcXX9eece7XHXeXecegeeVV1ee9eX9ecc70eXcXe9enA9fAABnBnJpMKpKJnBnHmmeeXX7X7cceXXce9eeccXVVVV-VeXe97Xcee9f9eXeXXXXceWVWBc29cX7V-6aOaTOWWV-1XX17-NOtWaNVnBn97X-7cf9mmnBemXgece9I9eXXomgeh9eX99eeeemf9BmmeHgeeegfBggmnHoeABeggnIBggeeeecVI9eeemeXe7cX1-ZmfIKCCIJooonIIBnAAAA9mmgnIIBnBpKCBnCCCKKKMSKJoonIBohBmnABnCABfA9gd9mhBopCIJonABgmnJopCCKJpBnBnBnCJnCCCJnKBoggpIKCKJ-UMSGxrMMKKIIISrKpSKKKKJopCIIKKKCCCBnIBjSrSSpKppqUI9cpKIKrrrKSzyUpKpMxS5UKxMSrSxxxpSrSKpIrHxrSMSzHfrxxzUUUSxrSrSxxxrSrrSrSrrrrrrUUxryOtttzbttyUzzbtzzUzzxzzUxzrTTTTUbyTTTTTUbbxy0byUtzyUzyUzzzzxzrrSrSSSppSSMrRN-OxpSMztzbzzzVUrLUSpprUtxKbxBfrSKJpKKJonICppKHnKKJoopKISppSrMKrSrrUSSpxxMSxprUSMMSSpKMSttzzI9f9hMMMSrKSMKpprKKHnCSSKpMMSSrKKKKKCIIC9gnJonBpKAKJpJpBpKBnCpMKKCKCKpKSSSrSrMMMMKrMSSMKSSSprMMMpUKppSJpKKKKMKSSppIMIpKKMSKSpKMSSSprMrSrMMSSrKppMMKSSMSSSSSprSMKKSKBmgprSSppSIMzxCUzprMUyTObbyUzzzaOaUzzzUtzzzUUqOaUxy0bzzzbbtaTOaTOaOaObaOa5OWbaOtWaOWa555555NNOWaOaObaOa57-6WV0WWV--O97VWWWaObbbtyTUttyTOaNNNHV0V-N---9-V-777579775-0taTOaOaObyNOa5OaOWbbaTTTTTUztWbbbaOVOWaOa5-5N-7X--V-517T7---7-Wa0V-X7ccX7-7-77VV-5-7-5N17X7XV-0VN5-N5TNNNNN50aN-5Oza5OaOtsOWWaOWaOWaOaOaOaOaObaOaObaTTTOtbaTOtaOaOWaOaOaNOaOWWWaNOa5NNNN5-Oa5NN0WaT550WaNNN--N0aN7--0WcefIBf9en9geecmmf9eAAABgee9egfBgmeee7cX7X777cce5TTT-VVX1cX1c7197X977X7Xe79eX15hHX11717-7-V-V71177VXX7X7ce-V-1-1-----117--cXX77ce1-VVV-0u7X777117771177V771-717VV-977X77VVV-7X-OWxpSSMSrMKMSSrSrSy5150WV0V5OzJpKCKCCUzSrSSSrKrSprMKprpMUMMMpKKSpzSxxrUMSSMKpppSCKKSMISMSrMMUUrrSrUKSSpppMpSSSpxrrSKrSpSMKKJhSMKppKKppSKKSSprxtzaUTObbaObzzzbyUby5OtzrtzWsObbbtzttbtztzaTTUs-o-9SuvkpF---4GN0--Akuevkk-0Z-5DzUUzzUMMSrUUrrxzzV0k24nbEF-72uPs-31lfR-X0zvBgpOsN---Fjh-1VahUR-033plvivC44-bVp12CUzzrxpztzzzy2A979eeXd9eXXVGkPch_OLJKKa_OLujjznwwkzo-Eno-q32WRrMKpkV7-V--7jXk2-IvW9e-7xySpV2kZ-vaazk0-HWAOjKHprsWxta7ccV2FavYivl3F2cIsAppKMwN117X-81g-ifoF-L4N9UrkcVDFfPz___bjvjjEB3ByvEGJKK--WQlvV0kn8QjoF0NPnGrScX-E2V6yPuEF3-D6-ISGX-42b3rh-0NYH_ooy-3P8eEOJFGGIB-B-0-2043LaPdaeeiZ30003G002j-03-JGFGJ-4K-03G-3303330NBzB-UzzB3DvzuzByyfiivieivifevefjzyw-D9vlxqX-A58vaOYw-07nF-rFPV4lbM4aaabBn3B-mC6fBmmjSOa5N-25o35o--CiYN-gQSZPTw0--2QiX--66YJ-9FT6CN-BHQ8jadHQyddcyvG2232-F-8Hr8k--dcfk6dIezn9YpIBhC5Oa6y5UrWZmX70C2JVtUzzp4J-mXEjworrq557e-6IQmyv4--dmmEV-JuCMk-9SVlk3KDxRuPiueObi_JGTyycnBk--4-BF-eicPos02KqRDLPefeTiuiviuk-K33F-----6f9qfBnUWV-jMD3iO_aOaPOiwBnBnn--0evOEn5U5c1_T5ktLKKGTvjzzYp-w0Rg9s6ABmeWBmghJonKxCIKIKKSKWa6zzro5Uxltbe9e5OtVOWaN-N6w6y2ABcX17cXV-SWU2PBo-alHDReopsOa-OOYdiPPPgnE00--BsPu--Oo5J-5oKjx-AxeUxtaeeTeeffeuePauuvivijfieiivePgyvvC000000-3-3G35JG-2BF0-30-2FFFF--3hlWISD1-ER5o5evV0-0eu7_RjSSprzrSrcX7X7X7X--6KDt-HirDjBnBnKMba5551-3rQbzaaEBnpFJAmhxnKSSSSKKKKonIKKpKpMKrSKIr5UrNV79V1----V55N-1V1-7-7-X79-IUBriLagwC2-3jm7YKkV7jUvJLaLMeudeP_LPK3PfeaLeaa_F8aaLLOaO__KHdOK8__KeePOdaaieeeiiefifeeddddaaPadOPePPeeiiveueaeeivfeiuyzjvvizEBwwwzzEE2-kkBB2-2-kB-2-B222-B-k22-BB2-B-BB222-k-kF-B22Bk0-F32nyevg220-FF-0--0-F003G-G0-Cl0ab9eefxzzba-AX5ODuklF2RKFUonyUUaPXeV9sgwrddaLaPNn2BnEE0F3RULpn9opxbbbtXVe-Y_1riO_LKfvEink--0BfCIpy1V" :
		14 === bO.eA ? or =
		"EcA20EP9t--46idaPadePOddiaeuuuebieeiiivuO_aRnufezijzzvzjvfuuPKJFJGG3GPKGPOaTiiiedaduus2EYuiedn2nyffdv32--0202EzeRwoG--Ezzjevck20202zeufik43BFBFK0G4-0_J--nyioC03-0002-n22wyddyjfzven3Eyv3JJ20-zynnEyjnnvjizjjejzyy_wznnBn2zvnzyvzBl3GG3G--23FFo0-wzBB8m--ZISrMUUSpzrxxrKrrSKpppKKIACBnAA9mmgfBcee9cXef9geeeXVf9999199ge17V7Hgce7c15ABee99eeXegegegfBgfA9mgomeecXcXgeXceXnBrxSxxzHecefAUUJceccgce0AxBeXXXeceY9nTUJgoepCJnzzzxIBfrMpIJmnpHmc58EJmnrSbrMrUKJnIKxrHgrUzrxKCbtzprzxKISpxzU5Ulzq0a-NOzzxxzSxrprSSpxxrzrtztyUtaOaTObzxpxrUyObaOxMKBn9pMKICCKSKIKKCMKCACBpCACBonIJnKIHhKBpKBpBonCBmnHmgeme1ggeeeX17Xc7VY9e7emdBe97gfBfBfBfBf9e7X7cXeXc19eX-ecXceX9Vf9cee7V-P1e9cecX7e9X7X-0XcX7c97e9V0--O6glDk-BjnBnJpKKMSKrrMSSpSSrxMrSSrMKMprSKzUzzSI9cmgonCKIJppI9YKCKCKKSKKSMMrrUzzzUSMSrUUUSzrzUzryUaUyUyUbxlzzs7-V15X----V---NNccX-ccc0y10WeeeeV--70V6xUztWxMSzbbc6xta11cX9X7V7-X-eHeggnCISpKHX1V1X-7-Oa-N5Xe98HeVVVeeV0X9711-3--XjabvBG-0s7nSrxGc9-BFOunededziszBzG0-G-KF2NDz6rSzzu9d99-0FVIObk153LiReenAUbbxzxzrpxq--e9e9e-A1JTaukCF07J23pq7---cVM--WN3QV1khy_awxF-H4kIRjyV-oCGnvjx3J-16-Ny-U2iSDjyffv33G4F-CWtG2GxSUlV79e--2nbB--6j1s0REhiviizkJG4-4X-vYML77-ZHJ3Pv3-1cZeNponGtV-V4lDIreOiuBl-3-DAESjT9-r4cgTLLKKOaQjzyvgn3FBEB--1pnH-E4zQyafnG--5BKbgN-3Oxws0iCDazIKxKMMIr5OVX1V7759-05hoa-4YPwIzTXc0oS4-OaOaanwnB0-qYoDA9pIrzxzpzpKzzzzUzrWVf9cP1ceceVemcc7cV0H9uMvF-eGU9USSbuX975JYvsOLKOKKK4OaLJKPueTzjEzjzBn2zj3-Bnwn-B_HnzBpIzyNX7V1mi7bfz3J09L-pSKKCSrs5P7VX7-YBjWieueuusF-F03-0dhx_nILN-03vANuaQYl---6b56-jf6VcBknBBn-Bk2BnEBkBkn-BnBkBw-----n2Bk------kn04GKKKaOaO__KKKPLOKLKGKKLKaKKKKKLLKaOOLGKKK3KaKLKOaKaOKKKG3G43G3J33F3G4G4JGznnE2--G-G3334L33G43J-33JG3KG303F433GK3K3GKG3G3k3GKOffaF--GG-FG3---F-3I-3F0-0303F40GGG-G03GG4FF0--FF2-----0---k-G-F3--04343G-G3KG030-0-Gk-2DwkG43F3G0-30-F3F30-00-G30-0-F-3--G33I--03FG3303F3-I0--3F-nDtfefeuvfideeviivfiuviuzwn--B2BBB22--wn9PeLeeLeaPOfjzyvuiveuifhfifiivevefffjiafjiuifeypeeeiivejEivjiivijfiuieiiueuieeeeeafieeeujvifffiuzziviuzivieifiififPivfeifivPvyvijviefivevevafieeaOeueevfeeveeeuiufiaeefifivizizzwmznEzzBnEzBnBnznEzzzzwzwEzwnBnEnAyzzBzzBn-nEnBznEwzzwnBnzzEEzBznnnBznEk--22B2zkzwnnwnzznBnnEzzzmvwEEBkBk-B2znEzEznBn--kBnBEnzBzzw---4--2-n-RB2Dvfzn0n-kB2BnB2nBknBBB2-n-3-KK3JG0304-G43GLJJK_K4JJJKJG3F43G03F3-Fk3-3-k--FLOadeOaOaOOaPOada__aOe_LPaPOK_KOGGKKKKOaOKKJG-K3Gk--nB-FF-3Rk-JGGKaPPeaPPeuieW00-FF3G3FFF--2-J0-GJ43G3JG-0KK2-3G3G-3F0-3G00-F4N2znB-3jEzzBk-ivzzfjEBAzievivivieevivueiuiuufivzzzvivzuivivjvyvzejvjwzzvyvzwnnBzn_ejEBzzEB2-LOKOaMBBzzBnzwzizieveefifieizzzvyzzznyyvzznvjEzzwzBijzjyzznDzzwnnEyznzznEnEEw2yajzDjwBvnznEnzkzEznivvheejwzjefievveyzByvnmeziuvfiyvyzjnzjBwnkzaeO_PO_dLLG4PPvjivjivjiuviyviyzjwzwnE2zBnBnB2-k--4222BzEOOaeiejxPeeuuuuqeuaeeuuefifefefeeffeuuifeveffeueiieuvfiiveufiivvfeuuiuffieeuufuffieyvjiyfeveiuiffifefieevuiivfjivvjwwnBn2BB--BBnnBwn--2-k2BBwzE---0--0B3F-k2-kBB--k---JF-3B---3F03-k2--wkzEn2-B2wEEE2Bn0BB0-kknBkwE-kk22--eUSCSJrLT7V71K0YLtevvyl3KFzwGJ-DWcRRqP-hG7KyLafizivwwG03G0F-acjpSSKy-VX-IJltLePvV---PeSVrBgmoxprMRTTOa77X77-0N3vk7eoElnII93nzSKBooUSX0aNX0a5V-1pfNUugBJ-9iOdUNV-4v1z-Sfs-zBgmX8MKAxy5NOzKbse7V-0U-Fk-1y-lV-4x-6--g6bj-3L4kbaTYn2J-apmECIJlaN--MR8FTPQYEwpGF-2W9GV-62Hz-7i5cMKKGV---y2dwQvz4K-NgIMwmnUzJopKCCKKIJnKKpKSKKSKMKrMMbrWbWtaT6a550VN---X157cV-VX77VVX7ce7V-nZT45OKJLLPzjzzBz2wLJF0I80TwpCpzpOWa5P7eeV-9fnj-3pOZ6JOX-2f5dcs" :
		15 === bO.eA ? or =
		"CoE-7lR-YWRa2AEJenMxJpbqTObaOBcX5NeW_xnVto5UUzzrzUrtxtxrMKMUSSyN1XXV5NNOtaUUxzztzUxxpUSIBpSSyNN1aUrSpCCIJpKs50WVNN--7N6bbzrzxzrrpSMMSSMSzs9X7-X-VVVX99ccVVDUV19D--998a6rztVXaOV1771-78VN0V0V-7V---YV7Xh17XOWWV0V6pTOs-8V7XXpCF5-N-N-N-N0VObSxrSrSUyN-aNOsObrxMABnKUaUs-V1-N5NUzrxUWbzUSxprzCKHenMtzKoopSSSzzxxrMCJmnABegmXOs1ABmnCSKCKIC77gcepzSKBe9XfKrHh9eprxmnKMKLmehKCUrSrII7XnMUSxrUSIMpIABpryURpMbtxrrSrMUWtbzSnKKABgnAAKUxztrMUxrsObWtWzzUttraOtbUtbbVefaOrxxpStySStzVXaNTNN5SJhSry1zzSgmpSM9mmgofKpxryU_rUSxrPXmhMQIKSxrUrrxSxrprKLpMa-2V7Va-OV1XXAI97ee9m8a6TNSxSzzrtyTStbtzyUbzzbtztzzzyObaNObaOyUtzzaOttyUMy-f_zztztztzzxxrSopKprKKMSzrzzxzztttyOtaOaOZnBnBmn9mmmpMzbbzWaTOta5UyObtV9eg7XnBNN-7-ObrTUzztaOaOaOaNOa555-4KCCCBnIBnBnBnBpzzSzzxzba-7--6WV-1--771-VV------71-----NN-5---OaTOaNN---0WWWaNN56bzzbbaTTTTUCKSSprrSrMrrSMKpKSUUrSxzzzttaTNOaOVN---VV--X--1N0WVN5-7-0aN79enKBmVX9e9177-X770Ws7VX-WbVccOa-7OtzaUzy1WbyObaMxyN6UV4rUUy4zzaOaMWxyOzrzxrrTOzUUUrztzUzzzzzaNN--770aSSSztV-6rxzbbs5-NOUzzyMxzUxzV-1X9777e9gf9ege997VX7X9X71MMrV-V75-gnAHommmgf9emem9eefBmenA1AHmmfCC9h9m91AIHegn9emnAABnIBmV1mmegon9f9mXenI9fbV1ge7tzV--cgoon99gc0s76tV99nCLo1977Ebs50Vf-AKJcc-1fMMKr9c7-Aa-1mpBme9c-5OWWV-XV-50a0VVUV---1N18xy11--V1717V-0a0VV117V7-0VcWaN7Oa6aNN--OVV0SrWyUxzVe8UxyNN7X2bVSMVN50bbzWVXhH7aNTSraTObbWV0Us0WVOaN55OaOaOV5-OsND0tbzaUrrtVXX6rrV-X91V0V-N-V7X17X99f17X1XXeemXcgeA9hBce17XpA17fKKCK9e97hSrSHpomf9ABpSxHpKIKHhHhIJhMUhKnKUrKKyICCBnABpAAJpKBnIICA9opBme9hC9nCKQ97-XhJmfIKBhJoXA9empmpHhMTehICIBehIKSRkgomfKQ1971hKxQBpprSghCCJonCKKqpMSpBX17XhSnBopKSgpKopnKpIJpKSppIJprSzzKMTTTUQKMrKrrps5-KpUKKSSpMppSSKrrKMI9fBnBpHnK779nAMrSxzwonBmXXppQAI9fCLmhBop-s1-WV1hKBAJpBofBegp9mefKrpqfABfKzbpIAKMKHpKKBpIBpqmpKKKRnABooppKpLmnKJpCBpKABoonIIJpBpBnIHVX9e9f7ceeceegpSRe7f9mmonCJpKSpSQIIHn99cXee9mgf9Xce97V-5OV511711-V--7X1--MrSTT--VcNUUWV-7971--X77c1-VV-V1---AJXN--N5-7eYWs17Wa---cXcWs2aOVgc1ca0tVVD---V0V--55-1eX7X511V-8V5-ge9pMKpKJoepIIBmegXc-fCBmgfCIABfIBogmnAC1gnBnBfAABgm99ggefBXXccXf7VXe9XX6ba-XXX7c91X7VV7X1VV1-D0s55--6USrMSMSrWWbzs1menB1N7VUsN----2bVemACUSKKBk-VVfICKSpg9777--7hCSJpC-----bsN-OaOa56rJnIKT0a5SrtaUs99150zy50ty-55ObaOzbopHpMWa555Uzs9ef79gf9eopBcgnKRkAJomVa0V1da5-gnIBmWVVVWWzV-VXAMLkVVXNOVza-1hRmVNEtSrrpMSy17VTN1mgX7X2yN56zrMTUtztzSxzMrStbtyMxSppKST-V-UTUraUy1Xe-OaN9nHpKLegA9a1ccX1nIBcXXXcXcefA9gX7VVzs9XVbzyUVef-Obzs91UV-e9WWaUWaUzrUSrUrpzzUUrsUrs7efB999e971ceXX9ec7c4rMyTN11X-SprMMMbVcYa4xzzrIMpry1X-V19ge-zza5OzMUUUKpKps1-1OyTSzKMKnIKKSy1V0WxzT19XX-V-Xcf7gekcaUby19f9mdtyMtbzxtzSrWUzrSyOzzbrtrV9gXf1me-eecaTMs7cX8aTTMxSrMtrxtzrKKs--VXDOxSSSSCMUy-XUs7gV97V6tV6xprV7tVA8ySrVEzzxRopzbVXOVaUzbtzKopxRpMrV5StxzrzUV7TOVgiOtbaUzba-emVOtbaTObtbzbztbs9emgf9fBggf9mnAKRpgmmn9mmn9egge1-0ttV9mmme6a-iUbbzaOV7NSs5O_s8baNUVaMT0brs54SMMUICMaNOzzMsD1eeccXUSs8WVObttVVgfAIV71g7XmkXtaT2rxrSryOyMsAxs8a5UKtWWxpKztyObWs1mmon9Yy-X7N9on8V5OWVaNMMSrStVXVcV0WaST-aN55OVfABda6bUthMSrT17XN1fVU_ttzyUwprs2zzbWa6s1eopAA99eef9ttbyN9gcX0y-VDMptzs9cdV6s8WvKy0zy171OsUxT0V2brBpMs8s51kTTUxzxzxxrV17es1mfA-egeiTTOtV55OtttppSzUMV199-8bbrUVcAtSrs7XX7gnBnA9eTOs1cT5T2WxRpzbtyN9bs9ABkYWbbaShMsOWt_QMIKKxzT18VXTTUT-1hPecVOUVbaUzUU_rSSUVVX8tzzUT-ce9f9VemeeABfB8a5UzbWWWzzbbs6tSrVVWxrV79f755OWtyUs1-0aN-OUKMpry-c17aOzWUIMKprUUIMa-1X918V770aTObyUxIKSIJpCUVNN5--sNOMVN56_pKCJpSJoonKMVNNOa---OVsOptaKMT55NNUrKxxrMMT11115N7s9kc9V9VttMT0UTNO_xU_nJpUs7NUSzzSKKUMUts1e1T-c5TOVNOaOaUy2V50_zSUVX119X7USxs7--OzSCUbbKSzsUxRnCBnCCBnKrCIKJnIKM_pUVN5NN-7T50a5OWV0aNNNOWWxKKMBnAMxpIKKIMaSxs1X6rV-D6V-sT-UUVX1e9Os7zy-5SMUTOtpKySqpCBoe9nCTURnBpyOt_oonBnKttU_zV7a-5-tWWWtxxrqpKTOttSMsOrSxhBpT6bxSxrtUUIKAA9nHpHnBgeecf1ee9XnMxzxrUzUQCUxSs6SompyMs-0rSTUxtTMzzrrrUV1-sSxs777UrrrUMUtzUpMJn9e9ee-VhKgnMzUrynKtWzrzzzUxJpSKJnACKKs0Wba0V--UTOxyUrxzxyUxs-xyUrxzrUzprzUrpzUrrUrSyMrUSrrSUUUSxUaSfMT6xrSzrUrUUby18SrSrxrUpMUTNSUUzSSKSMSrMKhSzTKSpMLpMCSCCJopCIJpJonBonIIHnABggnBnA9nBf9geeg9ecce9cf1e9mm9mecf1eeece9X7cXXfBn97V9eA9cX7XfMQB97cX9997VV7ceXXnKSxxpSKxSxzQMUtxxhUr9Xs1AJmhUzUUSzzKSz1hUU_Sz_xrrSzUMUKrSxprqnH19pSKSpBpQABhMrKSxrKSzMBpxrppIMygpSrBopryKpzKy0nMMzba0rrUMStUSpSrMryMrxzbyUUMUty5-Ortbs78V77X77--Xe79pHfBg997X7X7X77ce-X7-zTOa0VV75TUUzUrrxSrrUrzzwfACKrsObs6TSz_zxrzxrrrtVN5Sy-4W_BQCq0c--5XUc-X5rCBxMa7PVDNUK-nSJp971_ESHe-mocmeKzxIIOxttzsTT-Ota0ee-057TlBpMMMlsOV7Xe---Z41V6NZVgpBmXJgnKMpr6WaNT0c7--3XZyYK57-DXainASrrUs-cXc0D9q9BhrKpMy6e7VHVV-19qEB--1him-7XjEvIohy--0DA35ggnKEGzTOs90X7-DANdhT7-7Xt_vISba9c11AoEBnACBxrSxSa0Wbba7ZmcWXV0Nl-LpUX7--232P--Y4hn-1NmHcmmnUy5--yBtECSKpGaNP197-0YF0nN-QYKBvKofomhMUtzba-1WcBcV17r9ZnpzsX9-4YWUUKaNc-1DHqB03YaRQJjHc9K9Mp9XmrHhrJhromghUxoOVT5OzMxtV5VNT--7VBc--DVec-5DXQxV-9EWOSk-7cyKynBpBnABoopJ5OaTT5NOs-OcVH7zjtnSIAHcgnCBomn9gjzUxrxCBeo6yT5Uc5Wzxru-e-Wy0s0aPc-39Fz7gpKSBcCHgcWggnIpRObztbxHggpoehryP6tbaT-VN-17---ZFFrV-t3OTpa7--GJ2c--GJFN-5GL3xc-9GPigq-T84fLpBpAMHpSBfACoemeoefCACAJrzttaUM5TUa5TUIErr0WWxOtWaOzyNNNN77977KACKBnAC90aTN1VN-7c-eGPvhSrq0ceV-1GRaD-9ZO8jSpKF--7--ZPZE--O6VKyV1O6qJppObVXc-aHHGgonUbVV-1ZZurAs1XHQCRnMzMppopDOVNWbttbYBec3mgce---HWfN-LHY8SS5X--09ahV-tAuEpN--TI4hxDUT7c-PI_QzrqXX-3ZxNzHzV--ZyYEV0dEl0pKsV---J06s--J71N--J8is--JDws-5JFcRs--JKrN0iJQsgnonCCL6xba6yOWXe9e--_6BUV2dHDArSUrz1XXX9-E_ADrICMKoN176X--0I2AV58JkgmgfIIICCTOaT0wNN--PKIxzUTcc-3_KPjIqV-1_MDbCV0yKYtSHpIpCSKHZlzLNV-10V55--5Kcizc-9KeMwq--0MPIV-dMpxrc--_Ul6V0OMzAnSN7-O_Wd6ppSppKMwNP-7X97V7-F_Zn6CzUrMOX9Xc7--_a82V-0OcIV-8OxHk--LW2N-DLaXxTX--4fBH-2_fwzLPV-0QFUV3OQn6xKMSxy0X-ee7-F_tjEBemhT6zzP7N-1_yrzR71uMvlwxIBemeefSu6zp9zTOzq-5TUxxWc9A97-9N1TU5V-0Va0V-8W-ps--NFDs--NFLN0aNK0UKptxxxrUNXXX9997V-DOBAzTX-2aJfQBy--0a2hV-0a3SV08aU0zT9V-taUEntc-5OtESV-eP2MzUSk6e9c-XPIwxMSN7VV-ddFArc-7aafrpUq-e7-TPquRnTTNc-mPxXxrrKlcVV9-3amCbSkV--5oXa-Gat6zSSzrUR7X7ec7-HQgPwxu7-9R1zzP-1tkzEmgj6zzXc-2b3DrLP--Ol2rq-78lqzrHegrzzzKEUTN6seVNcgeX-kbAFvBghCIKIIBpBognIJpMKSSxUSrSSxUrpK--0ogPV0OpIUnBOs-SbSprpUSI9jxa6aPeWzz5XeeV-PSyVwpEsV-CbXszKCCGWbsV7-0bZmzN--bbTv--0uTlV08uUInDTV-OulbqV1tuqQnCMF-5Ue-2bh7jJP--0vJ6V-0vjlV-OwCMqV-OwVCw-0twdKojFTNV3dwdbnUSMzs-PCA91V-HUDFBraV-5UKsSc-DUR5ByP--6rqa-2bsubMc--tyOApa7-yUdojJmnIqOtWV9--bxunV-0zWdVAOzeUnxBmfrrICrUUUUrpHzWVcWX1175X-Xc--UzJs-9VELhk--e0DGpX-2c8yvE5V0P1YAmzTX-Fc9eEBhHgn5Uta5N-OcBY6pSrIAUJgTOa-09We7-GcENbMSppzye9777c-9VzggtV-94IUs-9WO6SNV-95_ss-DWdaSDP-mcR2MBoggxrpUzzKSEzxUqUyX9ecWaNVe79V79c--WkEs-9WoBzNV2u6I8rMJpGaOV7Xc-9WxeRyV197X5onrsN9-1cXrMEc-uXElzMKM575NHe-09AHrpNP--1AZrV-eBC4rX--7ndq-4coH6ETP70HYKWxSMOxxc9XWbkd9V-9Edzk-HZ0xhyPc09Z7pBmpSxpy5O9V79--82Ca--86Zu-2dAgzUcV-PI-Bq--eIQcrX-1dKuADN-H_k1UrXc-9_qWSsV8uMPGmzMTNUUUSEMSxxze7e71c-XHee7-Ha0vzScV--aLfs01aO1woxIC6a-0tuc-DaUtSq7-6dh56pM0X7-7dp2zMSR-X--abWegmjUOWc-EdszfAKSzV5UNe9V1PUQ2nABUzc7-5by5U---cAvN--cHps-5cLGhV-DcONzR7--98tL-4e9eMrR7V-HciUxpX7-udBoSJfErlbuVX-29aVfmxIpGa7P--DdjHRtu-6eW7EKSN11--9XeD-jeZFrBfCpCSxpSrzJ5TUcOzaOXfBh9X9X--1c-1eGYR-5efWrCracV-1fXrV-ufyWxkV-ufAyBoeezUrzV-V-ugwopa7--fJNN-LfPwSpkVV-9iyzs--fqes-ifsnRxzxyXecV0ejZ8nMbe7-9ftmzP-FujbporSIzSpMUISCxzx-VUzrrTc6zy7Xh9ecVWuXX-7mcVHe1--ejc_xc-3ezMzK51-4ezOMKGV7-1g-Dw-Rf-nQAA9gnpMtzzzbttXXX7e-1f-oITV-agD2xzola9X-Ff2bjASrxSr-97VV-4f47MJyP7-9gJYUP--9lWRs-qg_aBfJxrzs117--gavs-PghqUKGX---fCFz-09nVOpqV--9njxk--gyON-Dh4IxL7-2fGYEENV-1ob8V-upTOpa7--hVws-XhbrSpLOcXV1eqiCpKR0yX7--9qk6k-PhjSS9c6y-7fR-rUrR7Xc-ehsTBgrqUscc-PiJ1hASaV-bfaA6AI9MMMHhzpUbzOyOz1X97-1ge7V-1tzIV1uu69nCrtwP-e-9ffCUprUkVXc-5fgVYCM5-V-9vpss-5jH-E--HjT-wxu--XjYHx9xSVN-19yPqognyT--pfugbS9rSrSMSrzpaUpSUMSkVV-VVVPHgccX1XX1c-9jiyz5V0Pz_GnSN1-4g0rMKR-7-HkBVxlu7--kCK70LkGUSpMSrOzuXWse7X9-4g57jrTXV-DkQfwxX--B98T--g9En-1v1y0pKorN7-7--gDm6V-v2vCxNV--l12N-Pl34RxUcX-0gHXnD-7gHhbKrq7X7-TlB1xMxcVcJ1lBSSrSSppzUzxpzT6xSSrKrMJopBmcXcxrMRUSpMKBgc7N1cX97971AMHYSSrMHcce7eVVN77XVX7-Oc1dMSHooe-V-CMKSSKq1VUpkUSrUSCMMMUSzSprKKHexxrSSxSxxyUSzzSUUSpSpSxKKBhUpttx57OaP0WyOaP-9-0V7X5CHcV77X1VVXXV-97cV----0c-7VXcY97X7ece1XABcc9--23yxV3v42inCMKrbVBe-0xXV-A4Ugk-aliIwpIMs----BS4D-2gSBER5V1v6fGpCCptV-X--BTnq-7gVUzKKT-VV--m1DN-qm1FRfpppNVN7N-DmEsxT9-QgZUjCSKEKR6xGWe57N-ZmVV0A8RQxR7--A8TUk-imT5xSTTTd9cV4Q8thxpponSpTN7-X77V--mZcN1immTUMSKCKMR16VUSprGbxkXBcVcX77V7V-TmmkSpUVcV-un7nSrMSxkX797V1ABckpMba99-0go5MN-5gpKjMMX7V-QCSMnV-vCllpk7-Pn_7wppc--6gu_jIIqN7-3gwCEUP1-HgwGzMMMSxlu7X7X1V1vETrmxSrTVX1--C-0D-Eh0RESoxSRN-X09--AFrbk--oIos-aoMTSIKFN5--5h58vIRNNV-2GitV-vH2_psV--oc-s0aoc_xKMSJe9JUUqN5P17VV-XoimSI5OycV-fHxjnk--CB5q-0hHcbN-VhHl6KpASSSKIMxsVWyP77VXV-7-HpEKxUX7-mpKbRoeKSo-NN--CNDi-7hOczxzTcXc--pboN-DpiAwpV-5hTmMpR5X-0QMjrnMN7-1hUQAT7-HqBoxK---DqWZRr--IhdNrKrSzOV5QBeX3e-9hfVIBpUzX17--CfpD-phgbjBmccjMJrzke76zrrMMSrUrpSyc17VVX7X7X7-HqmXSSX---qmvs--qqEN0HqtqSrxKESrNN7Xc1XV-2R4lV-fTzpnk-1hwNUTV4Prr2xMJnIC9EIrJomnqUKKCJeIIMOxp9MKzKSr6XX7--V57OV70WXV-5-N6a--V5fUUEofHchpKMOba7X5UTP7-0hzqEP-2i1rMSX-2vVmOnHpplxk-WcV-9sS7x5-2fXLhnESoxu7T17-2iCDURP-3fYKfrK9fISr6s-57---sq1c-DsqBSTX--DFu5-1iHcjR7Bmt9wxogcf95IIESpAAJegxUJfxI9onJeCrrrUrSUSSrSpMKSpUSrMKrMMMSMSppSKCyUUz5N71-0aP5OzyOzUSrUN6aOX10ty-7-0s-7cV-7X1X1-VX9XX7e9cecge16yX-X7X7BmXXcV-2iHoMUcV4Q_4_nBrpyOzSq5cXX7c-HtGWSpX7--tUGs-5u0pzc-Tu6aUSS-17-Tu7VxACOa---u7iN-5uEYS--5uEcz--auFlSKqNO99-2i_aUGuV0QdwKony7-BicpMJrMSc1-5V0feEApSWcc-5uYrSV-1uf6R--igpMV9vfYUppKHexxMzxxrUROttX1e7cW97HX17--2fYfV-Qf_oq-0Afj_rL7V0vfwMpMaX5V3Ag7opBpKpT575-7--fgPSna-4iqejAoOV-avQIxxrycce-0isQUF-1is_AGc-LvkFzM5X--fjqbr1--Dz_T-6j-zjASq75-1j1jzlc-9wL5ww--2lNpV-flSUxX-3j5MbM5X-Hj6HUJm_prMSk--7X--vlsIpk7-HwadwjOV-1wepR-2jAT6Ia-1fnTTxHnEy0X--Anark-9wvRwtV5QospnoxMSOzr0aNn9X797V-Qp0rq--QpG4o-0QpR0mxlX-4jL0rSq-c0XxPBBfBnEMKKyNNTOVN1e-6jMXUJlz11-EEgqwecX-s5OaSs-AjV-jKppq-17c-9y-hSkV3fsD9ppKIKDNNOVV17-Ty3bxJp0V--9yERww-0Ax-_npV--Ax2Ik-9zfaxkV-vzr2xk7-A-1BRy--3-zvV-w0lpqTc-I-kixr-c-A0MPENV3R55SnBpKkWa0zGVX-nkNrfACJeonMrxSrrrSrT55-IC9e-0ztVNX7X99--35IBV-R5UCqV-35iqV-w6ltpWc-60xjx--A1PugyV-B95ws-E1cpgpV--ki4IV1wAqXpUTUa1ee-4kl7ACOa7-02LhN-02YwN-I2aoBjy7-f2fQUKrScVc--I2gExS-V-b2tvSppo-7X-0kyWUF-1kyZMq7-036Ns-M36nwhr---RFUnqV-BFvKk-03Kgs-A3kyxNV-wI34p57-644wwN-64BcS--04PSN064PVSKSTUF14HcWc--BL4Uk-64ckSV-04jBN7r4jQxHppKKpMJxHe7V1-ecnIIKABoopUSognBnIAUtbotyOyNOsNTUSJnKq0a6ztbttVOzOVOX-5c0a5OV1XX7Ze9jpI977AI97--lSWj-FgMRSmf9zbrpzMKc0bxrKESxrlVXHVUbbpSkV7XccomXX9ZcP7-E4xwwja--lXvjV-wQInrsc0Q5ozSpKEryObbuVgce1c-Q64OwhMWX-0lmZbk-0lpy6P--GtFD-2lu5jKVV0RUb6mp6V-0m9erN-5mBT2BjNOV0wZLzpUk5XVPBZWrmmmmnIJrMSrSSSSKSMUxKpKrSESpbxSSrMOts7-7Ve7cnA9119-Oa0Wba7V---V7---ece-cmKJQBmp9ggzzrSKMMy-OyTTOX7X997X06mLdEBgnABnIIIICCAJnJpCCJnKJ0a5OtWa55Oa0WbaTObcV0WWV--I8QGBxs7-U8RIgpzs7c-29W_w-3mdg6Ctc-0mguE5-ZmlOjKBmmonUUUUbw-OzwN-VHmc1eV-wgZprsc-rANbgnKrUtX17c4UAhBhBenHYBocVgprSCHZnrrUMSxHnIKLOa-0VObaUzxWza0bsNOy1X7Xe9n9cV-1n8XjDN-IBkvzxXc-2BlYi-RnBjzIEMMKppKKF51-1-0V-9--nBzMVXBp7smn9f9XehBnCAIBomnABmceXeZegccZmonAAIBnKSMSrMVc57OyOaVUzWzOzxxzzztxzxxrrSrtbVOWtVN-OVP7V-0aT--RstSq--gtJnqP-3nilrCq7-AniufCAM0bbcV4UEFHBomghIHoonBnCKpKICSKpMxIBnJOtV-OsTOtsN0aUX7VN---6zOa--7fJe1-7nuYnACrtVc0EFVzgfBofKUUaOV0a73zH2ShKICCCCICCIBgnBpBpCICKpKCKRN55N-5N5OV0a0aN5-NNNOWV-NP7-zHTMwnJhpJ5-OVP-5oiBECSkV-0hBVAn9M6V-IIDDgzZc-2IgAR-1pHnrR--2KH6w-4pLvUIOaV-0KUwN92LmEgfBfBgqUSCrKKKBeVUX5-X4JmoocX-57NNmconHdBpJce99pKppppKIKopMrtxxxprKrMUStaN7-6yUza-7X9775ObzzStV--51--N-PcXX7-ILxOwoOV-UMCUghM5N--AMQdSNV0STQGrScX-8ptlrCCCta1-0CTnYnqP-0SVFsrM-70Eq1sfHnA9XcYCppSKKSErrSSCzpUUzKTOWaN0V0WX7VXWa-2KBme0WX19c-4qODnHrVN-2OnhB-Cqb12CCKJ-UcWV-IqjjQSrKAMzTNV7VXc-Nqu9fBnACIHnSLNOWWaOV--hjnFrX--r-vI-1xkFZpprOu97V-zr6zAApICSUpzKUxlyUrwUxKV56a6a7VVXY9_HmmeXVX1X9V4CmRVp9mrMaTUxT-e7c-OrAdfJnKrrSrrsN0X979X9-0rFTQP--MKdX--M_8P-DreVnCCSrzVVNec-AVFgBTV-T02FyV0L0slMs1c-6VTDEc-6V_Ajc-AV_JBtV-D5hsk-b_7iwnSROX1--OPBa-1tQurDN-Ya80xERTNXV" :
		16 === bO.eA ? or =
		"DwCd1sP0j--RaO__ddedddifv2EEznnnyfEeRwyzBBBB2Bn00-17-2fEMK9dCrtzUrrMMqN-X-789V----Sf-T--yfzIrzohrxy6kX6rSk16k7---11J7Z-35CISoOxsUKESpEP6qOV6pJp9mec17cmhpxUSogfBnMMGWxptyUUzc5UrtttzpoTOV6lVVZme-gcfBc5cUrztbV73cWztaEO-1I5dLOfvkygzEyaOdzjzsl2knvg2EW2zEznvzzyzyfyyzzvjuMyzdzjivvvyyinyaTVyydzufvevjgwBoG-znzdiEdbg2vkyjEyiazuK_4OGaJaPjzYnzzjBwnvyfiigEnuP_vjuiaOMdezeififiiEfgzfusnEeO_ivviEuvjzyzivivivg3EjuyjiezjjisnvvEffvznviyviYEYyzjygnBz1_Fl-zivjEzyuwnB2z0434-4G304-44-CGJFKJEK42Bo-38G-340403LK2kl44G_GFn-G402l2x2433432vuvfvY4-l-0-FkF3G-J43G3FJ3-G5J2---20L-Y-8CqLKOzvEjYn3GF5N0A3mrIprrIryT1Wace1XV0F2MKYo-H05ahSVV1R1RHOKefiznn0-z4KUy5MEe17X7Xa17X7X7X7X7e7X7-17Xe1XeX1VXT0aN7X7X9X7V19X7V17-Xec7X-7X77X7VfBctaT-17917-X--7V0V-9Xe19X1cX991hJpKJpKMSKMSKUIMUrMprSrMSrKMSKrKKrMSrSKrMprSrMpKMSMMpMSKrKKCKMUzrxrSUMUKIABceV17-XcX7X7917X9X7X7e--0aN-7V17XcX77eceVX7X17919X1EzyTN5T-c-7X77X7V197XcVXN-7V-17-X18VXD---X7a11--7a17-99177Vce91X7XX1cVXe9XV-N-7a11177VVX12V0V-VX9-N0VVVX1-1171777s0V5-N7V7Va0bVN0VUV-VN-2Vs--a-NTN0WbV50WsN5-N5-N5-N5-OrxzST-VXcc-VN-1N5-V51-15OxUSxUrxSxSJpMs0V-8V5Oa1D18V91191X11-VVX19nCSSKSSSrMrKQKpK7cXXX7Xcs-1X1VXVV7777719-csN7714yUSpUSSryN77c7X0V-16a0VenB5-D0WV9X-a0WWVN-gpC7X-gm10tV0yN7NNN1VV-N1mm-N--s-7WWyN--fLocccAAC9555NUsSpy-Wa555-c--hIJpCCBmg5NN-NNN8_y--N0VD-epnIKCCLVXYWV-919prKSC9cV77-V0Vc11111TTUVVgkf1991D-e1-ceXX7X-WWs9cXXgcUxy10Va1cXei1monICI7g9-XgegmVgem7X6xyUVc8bbta6bbtrzMST--15NAA9egemfABXnBm9n9XmfBpMI9mggfA1eceeegn9eeXe9AIBme7g7Vecg7dV9mgecVfWzzyUzxSvCMtbtbzxtUryOzzttbtaOaTOzs97ea0VenBmN5N-XN9X9XiOa5ObtaNNNNOttVgggnB7e17OVN0WbtT-tWV5MV0ztbaUzMy2aOyStI7fCMtxrzzbKrUyUa5Oa0bUsOa1me7f9cD-1997-VTOWaUV-WWrzzxprWzUrqnBnCKrSSzySSza19Es9aOs-c-WsOaN50V-NObttrSSxzzbtyUbzzUUzUtxrUUTUyULpf7hKyTSBpMzpompqpSxUrSSrKprUSMMUTMxSrKSKrrrppMKMSSprSy50byOSzaKgpxza6zUtbz_zUmgf9mA1egmgf9pMsOzbtzMyTOzzMbttWy2WrKKIKSKSUtVOsUCLnKUtza5SzUxSSrSSzUSrMrUzMttSxxMSSHemgnKzUSzrzxzyUrtbbpSrzKtKrSAMKSs-T---X55UbsN9eem7iObtztyU_rQMKrUSMzzSrxUzzbyUxxyUs18s1UaUprzxMKJhSrMxpps-V-798VUtaOVOVD-XhHDN-6V9XXm7ce7VVtV-951-Ors18Wa-7-177--1-UVcOyUbzMTUbURopIKCIA7f1hMShJonIMTUMUSUKKUMrSrRchMJpSryOxxhIMprSJpxrs---Wa4xxrSprKmpKKxUSrUT5OV7N2a--7-ztVYVXcVV2aOzrzzxrSrbrIMxJogAMSMSUUSrrKJgpQJnAJX97hMMU7fHeX-en99pSrxwopCICBmcXXccXehSrprUxzbztTpKJonKCBfHeXnCLpBmX9XpSzrpKpABeepS9nKnBofKwnBopRpBopCJpKpKKMKIKxzSzzzxKMSSSSKxKSIKtTUWyTObUrrxzrzrbrSzrMSrpzUxySrxxzrrrzzbtztzyMxrUKQKKSSppMKpSKpxprrSrUUSxxrMprrttVD5SrV-a-NN71-cX7791-77VVVVX71-TT6WWbWWWVN-NN8V711-V777X11XVcccceXVXXNNN8V-15-9-VV791dV1-VVX7X1-sNOtrtxtxtySyUVNStUrUrrbUMrppzzrbbry6pKKrMMMrMMCSUUKepKxs0aTTMUUU_rMT-OVN-6T-7-a-777V-5-XMxSSxxrxMU_pzhUxSmpra6QKUbSyOSSnMxSyUKSxCMKUtprySzrxxKttbzbSrbTN0xzUKBpyTSrrMtttzprrSSrMSpprKCILpJhBhIBonKMKLnKICJnBgmmpBm9mnAABgggmeommnAAAJghKKKhKgmpAAJpIJopCIMIMIJpCKJpKUa-s550V2VN50VNT0s5OWs6VT5NNTTTTTMyUSSxQJpJpAA7fBprxpttWbbSSQKSSSMMzSrt_rUUbUbaMyTOVzTOs7777N70V70_pzKKzbbSJpBp11hIKqnKUtIAJmnJnJmnIBnBnJnKKLpBnJhI7e9778V1N5-NT0VOtbaNN9gmmmkfICCACBgonCBpQICBnI1fJo9pSQJohBchKhCKJopSMKSSMrSMCIBomooenABfAIABgnIIMtsOaObbxI9mmon9gnKUwpMJpJpJpBmpSCShMKCMKCBpCK10V7-77X1-cVV-7hKKCMKrppMKSKpIAKtxzxSKpxnHghUySrvCICBfCJpMbnAIBhBgompIIMC9mgfCCKBoonIIICBfIIICBopIIIKKCKKSKMUKpKxpSSxxMUMKKSKxpUpKrSKSKSKnICCJnCA1999-1A9e-7-cXXX17V70a-f7VV-1--7XXm997cXX9AAC9mgoekccXg97XXABmkf9f9fA9emXn9emgmgonKtxgnBfI9nBemef1X9-9gn9meeXA9eemegoefBmgnBnC9gnC9eeggnCJhBpBnKJnKKKKxpIKrRhBhAKBhKSKKKIMKKKF7Z2MkT__44OOaO__O_LLTbYvkyffBkEcw2knyaaiBkyEC-x-nl3-3VQ3QMsc-O-txaOjzzk4K_-7VS-vCSzc7V0J2qEPevjFF3F--6mTV-FGRlV--92TV0kLotbx-a7AuPnIUUoxxzbzrKrpKKMSSSlWxrUsWtzKlzTUyOzbw516xSUzWbsX6wNgc55Xc7mcXmgmeJmofomXXIBcYHcVPXZcVTUceX1d9me17ee9-A0Y6qioC-asBoenIBjSUIBjUSJe9ceV7177eV7fC9gpzzHeeICyUxA9efIrzM0zKaP6kOxIMtxzbxBgef9gfMSxyU6ttaUttzGzryOa-OV1XCJc9VcN7---40ekqQ--NDEDyV--Red-6VumnMUacX--0pcZ3P2fIBnrozKocX7X7poxognBU6zbzojHxISryUWX-U0XV--V9YHX7--6M-k--Do0VDFSy8__bfuePPaEykFkk03C2-3VwCbAMV--0t6o-92oUS0V4FUCSaOQzBn4---ywe-Y13Y5KOjuRyaEBG2F--GW_V0FZtli---3co7-38GgR-93kCEP-1kaQpeNn--L4BWBn5T-BFdZS_ePOvjjjjwk3-FJGF0sL9epCyN9-mkhAhaefdPOOaOd_eO_dPLyiiveeeyEnnEiEwBk2nEnBnEEEnnwwznnF3333GGKJJG3G4KKGJ-94g9CkV--ipW-VWVbABxrMKz5OzJxsNNNVXmXe9c--B49F--PnOV-FqcSV7sQLqmeeppUUSSxtaTU6yT97997eeMC2a-LKOaOaOi_vdPiuzjd_dvijyu_KFJGF33303FC2-oBBB4KLOOaaOiaeduaeeffdiuzzzyyydKKJLfivjjjYBwyuyynzyEnznvszkxFzwzjvEBG0G2zjgyuyYvybvzjyieKbfYBkwzivYvyvyEiviyvfuuuPfePPaadvvvjjeOLP_MdOKKK_UeaPMefvjjYzYknkkzznFzyEjzjfyvvEzjeQfjYvzznzyiyEsywzwzYvEgkG43K4GJJKGJJK3-zjsEzjjvzwyyvvC3J2G3FJ2yjFG04FK4F4K-OKGJGJG0GK43EB4GG2EEzyvvn2yduyvjyinzx33G033Eiw-o-KF2k-GGJeKO_-0PL_JBFGKOF_KOHK4GFxOHKGGFwp08J-yEYnlKKFJBwFJK9eOFHLTdJ-kkn0KKdFPPe_3-B3HeOaJ_2-EeVC-3JKLdi_FHK20dPJFk0O_JBl3KT_3K5LLfjdJeu_Fo3_JiePJF30-l3FGJFoGF-X6dJBfEOtsV0FxOWbo-D6uCS6X1v2zp5_4fu_4ivEdiuPdKJF45aiivivyyiviiijsn-znBkBF235J-GG_-nBl-w44aKKG-KX2_nCErSSSkOWa11XeXLG1g8_OK_OOO_aPuKOdajsydQjznzydLKK_5KaiuyzyvzzzyzjvjidLK3KKGKKKKKaQfefjizjzyvdefiiznyzzyEwznBzwzkn2Eifzjufwyyzjwww--GPO_--zVBnvgEekk3K3GG3JGGFFG2B-333-0--03G3HK4ePeefeQiaOK--3-0-JFKiydeJHKJ2C40GG_ddKFnB2-JF0cWyMmmyTN-ZGfute2---ZAWV0G8Ihi3--8AO7--I0sk-7aWNk-RIFpuEF018vKgpKEM6tWV7XV--L5Mk-NgeYlV6GUzf_eczf24_-k-1C0lB-I5ZZqOynkqK-5YJBIArlX-1Gfu8_yC-6YOlnKIOV---5qJB-DCgdwja-C61_LTvoG-kYgE2KIJnAAMUxzUrOxzTOWaZcV9176qXeX7cVDlqEh_PPeffijjnEBC203FFGJ-mDm3BfEMtyP89-C6VITdTn---2mET-26bSqk--EMts2wUQzuiijiibfV-EYnn3G4LJJGF1szi7nJnr550e--78qw-1FShy-27J7aR-eFczBxKoT7-V-oWi1tLgwk-9FyXENV7H7Of_bisywyoGJG-GZSgYBepxxpyN5X97-gZ3Btfw30yZX6E9mY9eememXeefSzxzT6xzUrMommceKIABhBeMUSxyOWbbbxzHpATTTV5OzxzSy15Ua5O93eme9cXWWbbyVcmVAmK5MiyiajY2Eil3G445J--Hp-s--aMYk-0CdpV2HW8xuvoG-28GGLmemxr6tsV-oczDQis3F11JY8BgnBopr6ztzzNOWX7e7omX-0mZRx_UkRdHRBnKMKpMJppJxponBop6bbzxpxKlbWa0WWWX-UzUUrMzlxrWaWXVd9n9WVVc91e99X7eeVjHcccOe1V--dDLF0OOWLmpy1-6AISazG-5_hMYrq3e-2mvLGeyn04-Ca5w69nUrSq17--QBDVUivzzlJKJJ-qNYawozzyNn97c23mKCO_OLdiffgwnBBBl-J-5OPQhV0wnGIOeeyin0230F5uPAsSSUrHprMSI9BenCHoeXAIrrUUUzTUzyN56rzbV0bxbtcOyOttztcmefBgfBn9ef9X7VXX7X7X7V9IG_jaaeivzB-pFn2KJ09Pe2Rhbzzxxu7cemc-CCRoydz-p--5k5q-ICZKiPvjk34--5npT0dDEw5Oeuaufdeu_PeijB-BBFkoFG2EfswFk3-JLJ-9Ul6xk-7nzgraaOeQfVBB-n-1XVgnghCEpKSIIIMKxML5-0Wc0c5V71-7-C0ccQ-B92pWnABnIBgmxUa-UbtbrzzrtbbueXBee5Pec-C21Ktk6e6I4rJpIBrMM0c-0zzbae91c7Qh2tpO_ddeeTbeeiiduuffeeefydbefjiedeeaijY-nnBwnznEBnnEwk-nveefdbYw3B-2koFFnyjueuTw2FyvfiB-32G0-oGK3-OdveeJFFFo3BoLK0JF-40OOaOa_8KKFB3OKefddFF0--02F-00G2--5cWxzMSV1V0JNHMaB-uYI9RnKMGWWaNe-HJRYn_aayu_jjjeBC-FJFFEjiwC44F2uEcgpJxIIy5-NVV-07cwk-PGjhlV3oZcraOPzkC-5eHK_nABpKKrK55-575TT-e0fHO2qaaabeuauQeiffeQffF-33-kk-BB222n4J3K--9LCls-CAWRtk-1QXrVIK7Wd___4aLywyizYzYEyEBw0JOJOJJ-edEvRpK5Os1V1CKLfOdOyszywkGG4-5etPbKtae-jKWNneePfiuiifiijifiw2yfeii-zefeeeeefYBBn--0033F3F03-G-3F03-4-0GGGKJ-ufB4MHjSzSomcXfMpzS6xKKKKMSsV-10a7V-75Ouec17-6Lbx5JE-PfeifA9eme9AJzrzxztyN57-SVW5uU-0qkprRxMSKSpKSrtV7X7X17--V-58t6-LgVLbBpIKrWzSqV0V7Ve--O0SB8LoLpxJnBgmpICBomogn9oghBnIBpUbWxpMOzzVUsUbaTOa55ObxonKESyUSzrzRUtWztsTUzrMtcVV-V-eX-0Zegee977XX-cemcY9ecV8q__U_OdujEvnBmK30--hDurV-5vfz37hzjz9gemecf9genrI9ggn97gegegoenBgopCJonEJUzpCKKIKonKSKMKKKSMSpUKrbzV0V5NN-77VV-7X-WWVV-N-0aNOWWbsN-0yUUUxzrzSMKrSICpJnIIErL5NOaUSxpSUMSSkOWWaV1-1-55--Vc7X5UxrpUSUxty51-cVXX97VcXZecV9r1ep_LLasznvgyw343F-AZ4Kk6pnU1tLuaOG5K_a_OLLPKeOddYzwwwzEnzEnwzE2E2C-JF3-4id5YIMV7-Cs_ftkIvpQOmnA9nBgf9YBoooofICBeeCBoqUUUxtza6aNUWba6aOaOWba5T5THcV7NLKvdveejzG-33F-5q05bAzy9VCvXK8_eeiyvujin304_-3-0FZT-95mmcgfAACBn9ggeAA9mmnCUtzrprpUSAAIBggecmmggghM6tzNOtttyTTTUbbbxzKa5N0bbbbbbaNTTTTTTUy551ccfAA99XXcWnw5hG_OLKOLKaO_LKOK_POOKdaPOaPOaaUzBnEknwknzE2En2nzEnzeKazEyzzjnwzzznyszgzzzwziyzjvvzjEnueOOdawzEnnwzEEnwwzEEnknEnB0JLJJ__OJ0K_JLK4K4_G8K4445K_48LK_OK4G44K4OKGF1TETamnMTOVc" :
		17 === bO.eA ? or =
		"9mDS-FP-F--0TedPPOXo0HCGSpxrMptUSrUztztbbsUtaTTOzzzzStzSzSrSrSrppT-0btaOaNNUttVOa---56y6aOSrUaN5OzztztaOtTObtaNNUzaOSrSvHogmgfKpKSrCJgnIICMKrSryUWs--17XD--OaUzaOzyObzzztzrrUxUKprrzyUzzzzzzrSrrbzUSzyOaOsOzzzztbzzrAMSKzrUzzUSrUrrMKKSzzxrrxrxrrSrSrUSpMJnCKUV6aSxxUSxrSSMzzzWzz_zzzzzzxrUzxUzzrSzpxpxUSUxrxxSrrMSrSKKMKMSKKxrSKxzxpJmegnKzWzzoeepBpABgohBnBpMSKyOsT5T---OWWt_onKzzS9ehSrUzzzzrzzKKAILmfHnBpUztWsT0WaOaUzzzUrUrSzpxzzrSMSrzzzSKKKKpyTUaOzxzxrxxrxrUzzxzzzzzzzSrxrUrSrSzMSrSSrSrUprMKzUUUrbrbrbrrSMKxKKKpIKKKMKKKIBpKBnJnBhBgnCAIBnBnBnBgonIJoonIJnBnKBen17AKICIKKJgpKKCSSKKCKJpBpKIKBnKKKCACBpKMIKponBgfBnCHoonBnAKCKKCI9nBenBnBgmepCBn9cecegX-9eenHmognBmegefBnBenBnBenBgmonAKICCKKCKKKIKKJnCJnBmfBnBmpBnICIBpIBmpBmnBnABn8aObbaOa0bVOV1n9fCBonIHmonCMpQ9hCAJnJgnCBnBmpBpBgfA9nBmX9eeeXeXcXX9eee77gpKrSrzSrSrJnKKrrrrKJnCBnCBhCIBgemggeggef9eemmeecceAKKrKICJproomgmgeee9X9eXfKMSMAKMzrMyOtxrKCBe7VcfBprrBAIHnKhSKIBp9emgfBnCBpSMSUSxrrzzrKKLmnBmmnABpIKIBmgmnKSpSKUSrPkf9en9nAIKpIBgmXEV9gpB7Ve9VX9XbrUV1cc9V7Ws11chBeaN7tV7AIC7XN1N1777c2V-a5USy117aNN-ceef97Oa-Wzy1N-17WbyMMKSCKrs10WV-Ws978V-5-D5-s-7VcgmfMopCSppIA7XV--1-2bs717V15--a52aN-X1-cVN-X-V-ts-0V0VOV1OaOa1-2WV-sOV--7OV-V--VX-7--7-0yN7--7-X1OWa--1-0WVT--9N7OV--1-NN---V-17V-15Us--V--15NN7----VX1N7---X71--17eX7X7XX1VcX9XXcX9999A77eVeX9A17X9cX7X7X9cX7V7VV---717cV1717X717X-X7X71177X-X71N19--97X-X7-X7c-91X-X-7X7g7XVeX7Ws-177-17-5Oa5NOsOa5OaOV1XmX7eVcOV-95--5-sUWVNT5N--0WWtztaTT6WaOV7-0aOaOzza0aN0a--7VOV7s-s--6V-X---17X1Vc118V5OV7eX7XcXemnCCBfBnBoprSp9gn9cV17ee-9eee7eV4kDJ_aeiwn-FJ-u28mgpMSzsN-XeV5Fop6aeecBBk-F1t5Zdn9xxrs-9-O9QZyeevz-G3G-YcmK6CIIrUrrSrrrqOa9-X9X7X9cV1_beTuOPOPfznwwC3-4-Jh78rBeejprrSrNN--7-T5ITPw30U8E3BgonBzrtWzzaNVeeV8t9XtaOdOyzBwnEBKK-AmPDvCxrr-7X7ByJT4OdKaTizEydLQi_G48_OUdOvEvyuv-zyevvnzyBFzjvyBnzzznE0KKJJJK43JJG3JF0GKK-2BiSRpxxpWX7Xc" :
		18 === bO.eA ? or =
		"DgBy1vR-AV60YBnopk-O_9DCIs4rUUrSSMUrSrSSSMKzypKSSMRpKMSrUKMSpKSSrUrSKIKSueXgnCKBgme9XenIKKMBpSKpKMMxpLppKKpnBoopKMMMMKpMKKKKrSzzza55ObzzUUSxppppCCSSpSSrRopSrrSSSppMMSSrKSzUtpxrxxphSMUMUSrrUzzaOtbaOtbbbaOzWWaN5Os6yN-ee117eme97cX--1117XmmccVaN1-Xy-XD-NT-6sDOa0y-cWtzrrKrrSpptWSxs1W_rMUMMUTUUzrrrrSrSxKSrKKzKSrMSrxxprUUzUyTOa-N-1-X-7--1-VV1D-EUUaOtSs-SyMzy-Xe1XXe999XcefCIKKUUn7X7eXee8aOV11UUUa-X7X0Ss1N1mVcf9ecekgk1AJmnABgn99mn9hIJhKKMB7797ee17y17V79Ve79nFX8s19nAIKI1n9pMKKT5Jp-hFgV1goV1nIF-hB-1kOsN56rSpppMtVX-77c7a5N-D550V-ObbaTTN-OVa----N--7s50y0VTNN-9maOzV17cVeepABnBpKKCBnBoopIKMMS9pKKKKKKIBWV-D-XemgpKBe9gm9eOzbyOa5OWV15NN7-N--V5-OV55-50aOaOa----99e77X9e770V1OVX-ccefABn997Xc77VccgceXegfBnH7cegcVX9ecD-VV-7-XV7Xcs5OaUT155-51XD--UtyUy--zWzzUzrbzyMT5OtztyOaOzKpxxIKKKKpIKKSMIKSKKSzztzbyUxtaUaNN5OyKs-6V0WV0_y-SppSICMKMTTTOtQBpSCMSsSrMSzyTMSprSptSUbzzygfKxUaObrMJpTO_pmpUxraTTOtttVUtaSSptzIAK99eXegfKgpCLmpMrUSpz7fKBoohUttrSrUrrSrSAKKUUra4pSzbaNTObaUyUxopBpSrzbaOyN10baSrrpzKpSSUtSzpUs-75N7cc91cXoX7V7Ws1-5TUbaOaOaSySzzzrzzzUtaN0V971A9eenBeee7Xe9cgcfAA9gggnKJgpgeee9eA9mfBgf9geVVX9fB7X6baOTTNNOtaOty52tzVNN9m7Xcce9715N5ObKt_y-8rMbzs90My6_s4raOUxrrpUMrz_rCMUry-eXUzrpySrxyObrztrzUMUttpztrVMrzrMsURhUxpsOpCUbrzqmenMtzmpzb_mfKzpooXX1pBpxSSKpSMSMKKCMKQKnCBmmeXcc71171-V--XpIIKKnIAAIBnCMMCKprzWV7sObKKrKUMsNN5UyMzzrBpztttWVaTObW_xpI99ghKKMxztaUUbzzzMy6vBgnACUtz_yTMrUzbnIMUtttV-UrUSrSSprMSSMyOWVX-18a0a-0yTOa5NOzrrRoonBpSKBpCKCCKSnCCBhBmme7efMSUSzUUaOyT5OaN-0aUxpoopMSzTN99WbV2VVXX9eYV0WaN-V-OtvKKUSzMrs1797VtpzV6rrSSrzBhKCKMSrT-Wa-V0V-X77ca--UzzzyHpMT-yT-7-sOaObbyTTOzUtsUIMSpSRnMzMT0WsTOs97hIBeX-X7tVVtzVc8WWaUonMzbKUsTUbSxrnMUKBoonJnJgpBpBoptaNOttaT5NUxprCUT1-VObbzrUzzyTUzzzy2zSxxxzry-1-Wrbtbs9zbzV9UV19-fa-taTOpUWxMsN716aUKyUps0xzaNN0VOWbaUzSrzaMrzVcX155OVOV0ztby-199f1XOWa-N-TOWa5UaNUaOa5OaUtzxtaN7egYy-VTOaUrnMwnKtzxpzaICTmoomenCKS9e9hSKxzbrSrSKBgpMKrWs-_yTNMbMyTOzrJnHnKxrKpSMKMSpprKSSMU9fBopKKpcfKSMAIKSrUMMpSSrUzVbrMUUTMympKrSrUUzMBnKSKrSxpJpMrUSSpSKS97cXXXXcXXXX9997ccX7c7X7V11171N-V-VVX1-71117-7-X19997V1mopKrSxpMMKpPeVX7hJfKCCKMMMMMKKpprUa6BpepKAK8V1meommnKMPgpAACReonACBopKSIKMMCKKKKKRpKCKJoprUtbbSSUs4MtaT-78sUxzzwpxxpxrKKSSSUSpUSSSSSKKKSKKMKSKJpKKKIKKKJoopBn9mccgpKICAMIKKKrKCJnIIBopMMzxxrrSxxxrSpSMSpKABofBnBn97710VA112V1171mmgn9k7V51-7XecXpAHhAIBooo-X75NN-XeXnBnKIBnCCKBnB9gpKprryU_ppSzyOWVObrzyTShPfIBnCK9hKCCJpKzrzxprSrSSUrxxqeeehUxzUrrABnIBhMzsOxrxSmgpxnMHnHhMnMICHmpMnHhSyMBhLopC9fIMhBnBnCJommmfAA1nBo97c9nMMrFhBgnBehBgfABfIKSx9X17N1emXABf9gmnJepJmhRmopKCMSUSxrMSrrUSxrrxrSrSrMSSMKKppCKKRognBggogeefI9mpxrr9nBggoog7--N-e999fAa-XfJV17s7XA97XcgecWV7eeAJpKKJoopCKBpKKKrTTMMKSxRpKrSzrzxxrStSrUUUSSpLpCMSKMSzMSSRef7Xce7e9X997-cX9-c-777-11197VXX17X7cgc0V0VNN1VOV-1-WVV-77VcV71-V-71--AJVV7XhMCBmfBnC797g-ACI7-Oa--11-Vc-1XVX9979X17V1-VV7cec9oppnBn1gXo71oome-1nHmgfBpKIBgmmcenIBnBnBnAAAIA9mmonI9egoXmggopCMKKKLpQCIBoopKopJcgnIBp9fACJmge7X77VVa-11-V7-VVVX-V72V7-7-VVV11-V7----V---N78V5NN-V6s9XOy1cepgpQIA9f9e7X777VX7UTUbta1eekXX7X0VcX91c--g7-11emXceeXX9ee99ce9g7cX999XXXX99X7XV-5-V7ceeegeX7X977X77-X7XVV-5-1-7--ecD-9hBX99onAMSKIMJpKSpKrMKJhIMKopST-NOaOrRopIBfIMSSMzxzUpzUUaUaUbttyUaOhBpIJppMKprSxrUrrKMKprRnBn9ggnBms9gnICIK99efBomceXgnIBcXceeeXeefBp9emceececeegmeXXeekee9X9Xf9ecee7X7-5N-a-N--NOWVN--V-1-V1--5---711171--550aN5--0V1-V77-55---------N-7XOta6aN1ggnBmnI7VD-VNN--NN1ghKBpKIKKJpKIIKCKKKCKIKKRnBopKKrKSSIJpIIJoopCIJpKUKSMLpSKKIIJpKKMSnKrUSSppKpMSMKpSKrKp9eepUrpSSKpSprrrzzzSrrzzzrUrzxrUzUzUyTSxnICKCACCCBnABnBgnBmnABnCBnBgmnBgmmmgggggf9meemeXggf9mgemmmenAAABmmmmXhA7cgnIIAIBnBmhBnIBnKKSMSpgnCKRnKKMKKpKSprQMQCIKKCKMKCJpKKpMBohRmnABfB-1V9sQR73q09kCIBed989cCHZpMUMMSMSUOxbpy0bbxSraOaOc7TVP29C9Vc0VBecV--7NVV-N8H9w--c9BgrX-BVhQICKrSsV-1VkNB1Dn9choeAEHp9A9eAKKp9fCI9Xme118BgecX7IKKAKrJce70cXXXcXMSppCzSpJxSMKSKSSrk-0xpxxzba-17Oxta56paOsNNTOyTOa--USkWzMUUzs--VWbrxrrVV-d9e7VHsFGFpA9BnCzzII9X97pxS9XHVZoogqUtzqUyUxx50WsTOXmgcOuVOXc0T4CohpochopxzyN7X7NXV-cNWurX-AW_mQ9horyWa--D6JABqN-51WZ4aN79-1XOJ2Oc-58_IBN-i8hrCBfItza-V2Nd5onEIMLOs-X-0se3gprOX1V5NezHrS9eACprpxy0aN7cVV07h4Zpy1V3shEFnKMUrzcVN7I91V-chgRwP--Xvb6V37jO2mfSxrUba79cV3cjXTpJpJOyTOX7gc--1B70i-6Y102KttXe-4Y2-QBrWV-qBklBoptztf9-7-aBzewzzyPee--YGg2-DspvZoeeeXmeA9mgmogn9fSApra0tzWzy6tzzbzztza-e-1YR0fR--PDnihKtVX-SYi0nMS9VecnMSUzxc7UNN5eV4HE3LxHx9HfA9nBxpaX5TUbzUpKDNUKBh9e5BfCMSFT6zUbaOd9V0aP7OZecWV-dYlL2AAIBmcozMopohpzU---NOaOa6X97-LEHZBzbeV07yFszq9V-cz9FrX-4YxwbHc6s-9FJpByV0d0kXnUT7V--FTac-5FvBCV-XGFeBnEUa1-686HMnJmxCIATUpUzV5--57eV2t6dDnABplyUaN1c--GxMc-9HB5gtV38862nCBopa0taT7V0d8AyppN7-1THOURmocpAKpBc9zSMU0aN551-USL---WZbifBogn9ghCUrLTTTOyOWs7e7V08F5moo5-48NGSmzJmVCKK6ls-0V-1_meQFN19MIGBrKKKKopKzWaUbsX7X77-17c-1P80D09ablQKBxrSSMSxzUSpSrSrSprMMUSVVVVV0baXX997XX7ccXVX17X7c-DQ9vBxX-PblGIMMSrMMMkVVOte97eX7-DUDUCL1-0bwmfD-3c-SvC55-NcAPfppppSrSr1117X171-Ju42Zn9gmd9ceceAMSrSppKrSIBfrKCMUUKk-T9mcV5Ua5Ubz6tX--0aOa1X902cKbrCKKJpHpIJnIKBnCCBfBfEryOttVOu5OaTN5OX0a-7--1---cRyM--P9esnVneG9xnBmn9grKKJnIJpKSKMKJporUonHe2IBmmnCBpCKrSrKpppxrSzUzxxrV5-NNNOV-Ws-XV55UrSrxyOc775-7egoe50Wta7X777N--7VOxrSVWtbzUUSqV6bWaN19cVX99gecemd9ec1xdFn2SrJeCpKrMSrKpSKSKIKKIICCI9XKMKCMSII9comomnAABpCIJpBmrTObs0taT5OsNOzaUSKMUtV-0aXX0WxOzaOV0zr1750zrGWX--XVVV-77X7V0VV-117XXXcHX1V39Nu-nKrUUyP7X9XVFeTW0xrI997KBcXBgnCAJpta50aUpIIBnKSzba-0VVUzbqNX1c--dA_c19eGowgggnCSSGWWWbaUsUUUccee705ejHzrzUUyNA9eXeV19fFvonOaTX-Rf_UfKCBeISJxrT-0WbbVNXe--AcyX--Aenu-lfzAABeconJnUP5UrSpKIpxLV0zML5-V7--1X7-2gTJfAOV-AQx3k--sU3c1TvB1BnKCIKIKCpMSGzr-0VN--751-19-0iur2k0FkOrQBgceZgnKKMMKKSJmXxpSSprMs6rJnrUra5NX7-X10X0aOVN-1cV70c16258gfA9fJmnIMKxzyOaOs-NNNX-7lElAMryXe7-042oc-A4AKhN-7gKbcmpIrX6zrxrMzUVeVX-gocVXV-3MmVV-3NpHV4wNq3mmmrUUrMUTP77-X7--lazYV3RQ6imfrrSprs-1X9-7liMQEOxse70E6TIBmZxlxxKOa77VV0I6vXBefKMIM5Ota50cV-RW4Rw-0RW5cnK5--Om5EABpMKBhSxxs17-0V5X--H5H1-9mCaYBoxbaP70emCc2MSIBepJfIIBmVP7mnCIAACCKIlV50bxqUV6zxxpCKprzzaUKa577cWVNUrOtV17V17V7Xcc--HEP1-0mI5IF-0mLgQF-amT1YIBonIIICBgonGaOaNOWVNOWba-02AS3hKIKIJN0V-5--AByfCsV-BqE5k-6CtMgN-0D4wcDzDLQCCCBpIIAAUJmmfBnAAJonCBoomgggfABpAKCJeecme9IBnKKKrMJrSrzUSKpMKpzrtttbxpMbbqOaUwUxObzrrK6aTTTOa5550Vc155ObWaOs9--0WWbtzyNce9cc-Ne7Vcc90zbcV0ztte90byTOXeXeeeVNXeeV0RupTnClV-hngH2CCCCJpKKKppUUtzbta5-V777-X177XV1wx_ZnIKKaN-V-PnvrYCJooerSo-OzuXVTOV71MEjtggeeeggnIAACJoTUzrMUbbttyN-AEykhD--x0GZrsc-2FY2g-4o9gQCSX-CjFseBonHonBf9en9eegf9XfCIBfBpCKMMHhCCKpCKICIpOtzSMMKKIJxUbbs7VN1---VV5ObbxrKCESzUpISy0bbbse1cX5-XVcXeV6y6aTNNNfBmehCCBee19cVV-0a6bzttyUyTUtzwUtttaNNOWV-1oImQL--AGQ0CNV-x5IkxkV0IIIYXm2V7XXeyUta5UV-46fyV0C78BrT7V0S83qnAyP2IoidnCSprrSxrSzrUMSxpMxzUUSSMMMMSzSSrrSprMSpMSSxrSxxxprrrrrUrxrSUUbtaUUL----WX-5N97X9emVP97719ecX-0aNcgmme6a9eX7199e77gecVX7cXXXXXcXX77X7X9egeeXX9-2oitACsV0hAoJnEbsc1EIX0Bgeen9gf9rSaOzzWyUrzqNX9-0CE-XnxVV-4FqeV0SGIunObe-1p622T7-0JRDc-0JfGc-vK0CgggrUzaT19V-CLDDs-6Ku0CV-ALMbENV-COvBk-bLoRjSrR-cX-8pp72IJoOWV--4T3HV-STYBq--hTbPoN-6pzxnBpT0X-5q4TfCGaNV-xXFHpN7-6N_hh--2NfsB-NqBUQHeCCtzSSSzT1cX11-1CZ-NpprX17-7qMXnCMyN7c-IOb-BnaN-0Owzc2fPAlBgggf9fAHoonAABgnCKCbbaT5OWaOaTOtbaTTOaN-0PiN7-MPkJBf6tV-4fLuV-SgO9lV-phLT7tV-4gqNV-4hl5V3xiFwnA9nAROzqOaOXV-SifanVGKwWFOaOV6zzzzUUy6tztbKta56s-WrzzsN-5T4rKpppSKSKKKM-6Sk2RmmeXgeggnTUbxyTUbyOe-OMnm0a50aOV-NNOyNOxtyN-fRZugenzttuc6MRg2gooef9eemeX7XeeeA9Y9BehCIUzrMUzzbrxzttzztzUzrzqUzzbzzzbbzrzzV-9fA9eeX0XeBeeY9e7-DrA8vSzrOtaXeec-0S7u7-rS8wBhCUbttcec-bSGCgnCzaN9-BrL6QBezxyTPXV4hpYLmgfCtzxzSttX9ce-" :
		19 === bO.eA && (or =
			"EcCx-VQCO1iiqOLOKeeedae_ddadadadOfiveOeLeeeedadaPiuuiePPeeyeeeeOeaPadaeeydPeOedaOPLOeeeOadLOKLKKLJG4G3G4G4G3F-3GJG4G4KKG443G3G3G3G4K3K3K3GKKK3FJ40F33GK0K0K3G3F3F2nBnBnBnB-Bn-04G--BzzwEByvn-wG-BnnB2BkG44K-4KPKQyde_K-G3GKFwGPKO_O_K3J4KG4KKG4KKKJG4KJKK30304LOJG3GKKKKKQvjzuzziviueeaKaKPKKKKKKKKK3K_eOKO_OedaKaLaOevedaOGOeOeeaOaOaOeOjzvjyaPeOKKKOK43K_KKaveJGJ0-JG3G3GF3G3G43KaKF3G4aOedaOFKLK4_eee_dJK33KeaOLOaOjveeKLO_OaOaeKLPeivjeaOeOaJKGKJ4PdadafiyjedLPeueK3F-G30F3G3-3LOaOjeKLPe_O_OeaPfieieeyeaOaPOKOeedeOdada_daOdaKd_O_aOKPOKLKaKdK4LK3LTdaOdKaOK_KLPOaaO_LPKGKKK_KOaLO_aOOaaOdaPOdaO_OaKOdaPOdaPedeOJF--00LaPdeaeOfeyeiuudaueaaPdbeOeuefefuivfifujifieviivifeeid_G-04OF0-03KaPvievjizfeeLJ0-JG-KdOTvfiyviyujffviujeiufeiefivivfivvfeevivveiuueieiefeeiyejffuiuuiviuvfiifiieePeeaieieveuePdaPKJKefefefiuzzvzivviyfvnvjvzEzzjzwzzzBnzwnnk2Bwkn2zzknB-n2BnEBzyzzBzzEwnzznzzzjfzBzwzznziz2zwnBnBBkB--B2EBznEzBwnBnBzzBknEnEByywzzzzzEzz2wnzkzznEBwwEnEnEzznEzzzzzzzzEzwwEEizizizivjvjfznnzyyyvivzzwnyviuizyeyeKbifiuizzvifieeuyviuiuefie_iviiyjzvn3F3Bnw-BnBn2BnBnwnwnwnBkBBk22nEn-EeeieKdeiudaOaOPedaeePeee_KKLPOefzkzEEjzwk2B-k-kBB2yiiuieueeaeeaOOaOvzzzBzvjivjuiuyevieifiedaOeueuivivieuvfyvzvyvvuuvwzzyyvzzvjivvivvjyvznBnn2wzznwoLK-z2BknzEivePPLOOvjBwnEffeuyzefzuuujnkkGG-yzEEzBnEBnnBwnEBnznzzvzzznzvzzEBnzn-k-k-k-2-wB2B-k2-2nBB2kBBwnBw-nB-2Bk22Bw-BkknnBBBBBnBE-znznkkEnE2--kEBknBBkBBk2E-3-2Bk-k2B22BB2k-k-k2BBn-w2-32k-C3F--k-FG0G-22-2-FB--k-2-w-G32En--nB-2kKLePLdFJG3-F0033G043-l3-G3K3JK-32B3G4K4F--B--B--FGLJGJ3F03JLaeKFG--0---BFK--203FGGFG33F2nBFG3FGJ4GJ4K02GKF03-GKKG3K0JFK3G03F--G--l43--Bk--kG-FF3F03G-403G----l0----G--Bn33GJG340JG3-G4KaLKPKG-4-3F3F03-B-------G3FJ00--3KGF--0---03G0032T4mfgmegmeX7fBnJnKIEzzzzbrpzzaObtVOaNX9c9c0JN9cQfjzGG0F4NoWynBpJnKzzzV---Xc1RfMlOOvfvzwEw3GKKF-0gAIV-2OK2-3aoazBjs-pIUdyOaKaKaOfzzvgBnBF---1gInV-4OaA-BexerKESrs-V9V3q6e6dauVn3-0fPHBpMs-c-SiqWQwJ1mtRSUSKKKKKKJOzzxrROc11--TX-X7V7eeV4Meo2avi2kCK--EcNy-OUJfiLKdTzsBk-0kCPrF0fVVRjiveveiueOuveeeeaNn-n22-BG--030303K3F3B6-nnBnBrSr0a---EsTXQudeviviedazk-2-G-030K-4l1tMCkOc-57MIs-E3IhS5P-CYA-DLew--koIyA9emmfACMSrUtbzzzTTObrUtV7ge7X7eeV8QnZxddaebjwnB-30F3xzBZnMKCMzra71-7cV3wA4p_Qzzo4Ffy5yanHpIKSKMKSMSSrKKMofJppMKSKrSpSMKSzrzzrUtaOzsTN1oc5OaUzrHnCTOtaP755N5-T-NUTNN-N-5-5-N-P7X97gn9gmeee9n9meeX97cX7eVeX9cXV"
			), (new sX).sZ(or)
}

function aEC() {
	this.sf = null, this.aFG = null, this.aFH = null, this.dR = function() {
		var aFI = [120, 105, 92],
			cos = [12, 12, 60],
			aFJ = [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
			aFK = [140, 130, 120],
			aFL = [12, 12, 76],
			aFM = [240, 120, 1024, 30, 19, 30, 70, 8, 20, 3, 9],
			aFN = [130, 117, 106],
			aFO = [12, 12, 68],
			aFP = [270, 210, 1024, 28, 19, 33, 50, 8, 26, 3, 9];
		this.sf = new Array(bO.aEA + 1), __fx.customLobby.setMapInfo(this.sf), this.sf[0] = {
			name: L(108),
			a0: 230,
			j5: 230,
			lX: 1e3,
			lU: 2e3,
			aEG: 173
		}, this.sf[1] = {
			name: L(109),
			a0: 800,
			j5: 800,
			lX: 100,
			lU: 50,
			aEG: 43
		}, this.sf[2] = {
			name: L(110),
			a0: 512,
			j5: 512,
			lX: 128,
			lU: 32,
			aEG: 0
		}, this.sf[3] = {
			name: L(111) + " 1",
			a0: 960,
			j5: 960,
			lX: 60,
			lU: 8,
			aEG: 0
		}, this.sf[4] = {
			name: L(112),
			a0: 900,
			j5: 900,
			lX: 100,
			lU: 5,
			aEG: 0
		}, this.sf[5] = {
			name: L(113),
			a0: 1e3,
			j5: 1e3,
			lX: 100,
			lU: 40,
			aEG: 0
		}, this.sf[6] = {
			name: L(114),
			a0: 1e3,
			j5: 1e3,
			lX: 100,
			lU: 20,
			aEG: 0
		}, this.sf[7] = {
			name: L(115),
			a0: 1024,
			j5: 1024,
			lX: 128,
			lU: 32,
			aEG: 0
		}, this.sf[8] = {
			name: L(116),
			a0: 820,
			j5: 820,
			lX: 200,
			lU: 100,
			aEG: 0
		}, this.sf[9] = {
			name: L(117),
			a0: 1024,
			j5: 1024,
			lX: 128,
			lU: 32,
			aEG: 0
		}, this.sf[10] = {
			name: L(118),
			t7: aFK,
			t8: aFL,
			aEQ: aFM
		}, this.sf[11] = {
			name: L(119),
			t7: aFN,
			t8: aFO,
			aEQ: aFP
		}, this.sf[12] = {
			name: L(120),
			t7: aFN,
			t8: aFO,
			aEQ: aFP
		}, this.sf[13] = {
			name: L(121),
			t7: aFI,
			t8: cos,
			aEQ: aFJ
		}, this.sf[14] = {
			name: L(122),
			t7: aFI,
			t8: cos,
			aEQ: aFJ
		}, this.sf[15] = {
			name: L(123),
			t7: aFK,
			t8: aFL,
			aEQ: aFM
		}, this.sf[16] = {
			name: L(124),
			t7: aFK,
			t8: aFL,
			aEQ: aFM
		}, this.sf[17] = {
			name: L(125),
			t7: aFI,
			t8: cos,
			aEQ: aFJ
		}, this.sf[18] = {
			name: L(126),
			t7: aFN,
			t8: aFO,
			aEQ: aFP
		}, this.sf[19] = {
			name: L(127),
			t7: aFI,
			t8: cos,
			aEQ: aFJ
		}, this.sf[20] = {
			name: L(128),
			a0: 1024,
			j5: 1024,
			lX: 128,
			lU: 32,
			aEG: 0
		}, this.sf[21] = {
			name: L(111) + " 2",
			a0: 940,
			j5: 940,
			lX: 80,
			lU: 8,
			aEG: 0
		}, this.sf[bO.aEA] = {
			name: ""
		}, this.aFG = new Uint8Array(12);
		for (var a6 = 0; a6 < 10; a6++) this.aFG[a6] = a6;
		this.aFG[10] = 20, this.aFG[11] = 21, this.aFH = new Uint8Array(10);
		for (a6 = 0; a6 < 10; a6++) this.aFH[a6] = 10 + a6
	}
}

function aED() {
	this.aFE = function() {
		for (var g3, eb, fD, aFC = a7T, aFD = bO.sp, a0 = bO.ef, aFA = a0 - 1, aFB = bO.eg - 1, fy = 0, ed = 1; ed < aFB; ed++)
			for (fD = ed * a0, eb = 1; eb < aFA; eb++) aFD[g3 = fD + eb << 2] === aFD[1 + g3] && aFD[g3] === aFD[2 + g3] && (fy++, aFC[2 + g3] = 4);
		aj.a2q = fy
	}, this.aFF = function() {
		for (var aFC = a7T, a0 = bO.ef, aFA = a0 - 1, aFB = bO.eg - 1, id = 5, ed = 1; ed < aFB; ed++)
			for (var fD = ed * a0, eb = 1; eb < aFA; eb++) {
				var e8 = 2 + (fD + eb << 2);
				4 === aFC[e8] && (! function(e8, id) {
					var eU = 1,
						aFC = a7T,
						eW = aX.eW,
						yp = [e8];
					aFC[e8] = id;
					for (; eU;) {
						for (var yq = [], a6 = 0; a6 < eU; a6++)
							for (var eJ = yp[a6], eX = 3; 0 <= eX; eX--) {
								var eY = eJ + eW[eX];
								4 === aFC[eY] && (aFC[eY] = id, yq.push(eY))
							}
						eU = (yp = yq).length
					}
				}(e8, id), id = Math.max((id + 1) % 256, 5))
			}
	}
}

function a0g() {
	(uO = void 0 === uO ? document.createElement("canvas") : uO).width = bO.ef, uO.height = bO.eg, a0k = uO.getContext("2d", {
		alpha: !0
	}), a0l = a7T = null, a0l = a0k.getImageData(0, 0, bO.ef, bO.eg), a7T = a0l.data, b7.pK.sq(a7T)
}

function cX() {
	var ex, a0, j5, max, aFR, lU, aFT, aFU, aFV, aFW, aFX, aFY, aFZ, aFa, aFS = 1e4;

	function aFh(aFg, lX, eU) {
		var a6;
		for (aFT[0] = aFg, a6 = 1; a6 < eU; a6++) aFT[a6] = aFT[a6 - 1] + lX, lX = aFT[a6] >= aFS ? (aFT[a6] = aFS - 1, -lX) : aFT[a6] < 0 ? (aFT[a6] = 0, -lX) : (lX += 16384 <= av.random() ? lU : -lU) < -aFR ? -aFR : aFR < lX ? aFR : lX
	}

	function aFj(eb, ed, aFk, eU) {
		(aFk ? function(eb, ed, eU) {
			var a6;
			for (a6 = 0; a6 < eU; a6++) ex[ed * a0 + eb + a6] = aFT[a6]
		} : function(eb, ed, eU) {
			var a6;
			for (a6 = 0; a6 < eU; a6++) ex[ed * a0 + eb + a6 * a0] = aFT[a6]
		})(eb, ed, eU)
	}

	function aFn(value, eU) {
		var a6, kv, e8, hS = value - aFT[eU - 1];
		if (0 != hS) {
			for (kv = 1 + bH.ew(Math.abs(hS), eU - 1), kv = hS < 0 ? -kv : kv, aFT[eU - 1] = value, e8 = (e8 = eU - 1 - bH.ew(Math.abs(hS), Math.abs(kv))) < 1 ? 1 : eU - 2 < e8 ? eU - 2 : e8, a6 = eU - 2; e8 <= a6; a6--) aFT[a6] += hS - (eU - 1 -
				a6) * kv;
			(hS < 0 ? function(eU) {
				var a6;
				for (a6 = eU - 2; 1 <= a6; a6--) aFT[a6] < 0 && (aFT[a6] = -aFT[a6] - 1)
			} : function(eU) {
				var a6;
				for (a6 = eU - 2; 1 <= a6; a6--) aFT[a6] >= aFS && (aFT[a6] = 2 * aFS - aFT[a6] - 1)
			})(eU)
		}
	}

	function aFq(yp, yq, eU) {
		for (var a6 = 0; a6 < eU; a6++) yp[a6] = yq[a6]
	}

	function aFr(g) {
		for (var a6 = 0; a6 < g.length - 1; a6++) g[a6] = g[a6 + 1] - g[a6];
		g[g.length - 1] = g[g.length - 3]
	}

	function aFs(a1B, gap, hR) {
		aFU.push(a1B), aFV.push(gap), aFW.push(hR)
	}
	this.a2 = function(zw) {
		! function(zw) {
			var a6;
			for (a0 = zw[0], j5 = zw[1], aFR = zw[2], lU = zw[3], ex = new Int16Array(a0 * j5), max = j5 < a0 ? a0 : j5, aFT = new Int16Array(max), aFU = [], aFV = [], aFW = [], aFX = new Array(a0), aFY = new Array(j5), a6 = a0 - 1; 0 <=
				a6; a6--) aFX[a6] = !1;
			for (a6 = j5 - 1; 0 <= a6; a6--) aFY[a6] = !1;
			aFZ = new Int16Array(a0), aFa = new Int16Array(j5)
		}(zw),
		function(eU) {
			var aFg = av.random() % aFS,
				lX = av.random() % (2 * aFR + 1) - aFR;
			aFh(aFg, lX, eU)
		}(max), aFq(aFa, aFT, j5), aFj(0, 0, !0, a0);
		var eb, ed, zw = ex[0],
			eU = max,
			lX = av.random() % (2 * aFR + 1) - aFR;
		for (aFh(zw, lX, eU), aFq(aFZ, aFT, a0), aFj(0, 0, !1, j5), aFr(aFZ), aFr(aFa), aFh(ex[a0 - 1], aFZ[a0 - 1], j5), aFj(a0 - 1, 0, !1, j5), aFh(ex[a0 * (j5 - 1)], aFa[j5 - 1], a0), aFn(ex[a0 * j5 - 1], a0), aFj(0, j5 - 1, !0, a0), aFX[a0 -
				1] = aFX[0] = !0, aFY[j5 - 1] = aFY[0] = !0, aFs(0, a0, !0), aFs(0, j5, !1), ! function() {
				var aFu, a1B;
				for (;;) {
					if (aFu = function() {
							var a6, aFu = aFU.length - 1;
							for (a6 = aFu - 1; 0 <= a6; a6--) aFV[a6] > aFV[aFu] && (aFu = a6);
							return aFu
						}(), aFV[aFu] < 5) return;
					a1B = aFU[aFu] + bH.ew(aFV[aFu], 2), (aFW[aFu] ? function(eb) {
						var eU, aFx, a6, a8I = 0,
							aFy = 0;
						for (; aFy < j5 - 1;) {
							for (a6 = a8I + 1; a6 < j5; a6++)
								if (aFY[a6]) {
									aFy = a6;
									break
								} eU = aFy - a8I + 1, aFh(ex[eb + a0 * a8I], 0 === a8I ? aFZ[eb] : aFT[aFx - 1] - aFT[aFx - 2], eU), aFn(ex[aFy * a0 + eb], eU), aFj(eb, a8I, !1, eU), aFx = eU, a8I = aFy
						}
						aFX[eb] = !0
					} : function(ed) {
						var eU, aFx, a6, a8I = 0,
							aFy = 0;
						for (; aFy < a0 - 1;) {
							for (a6 = a8I + 1; a6 < a0; a6++)
								if (aFX[a6]) {
									aFy = a6;
									break
								} eU = aFy - a8I + 1, aFh(ex[ed * a0 + a8I], 0 === a8I ? aFa[ed] : aFT[aFx - 1] - aFT[aFx - 2], eU), aFn(ex[ed * a0 + aFy], eU), aFj(a8I, ed, !0, eU), aFx = eU, a8I = aFy
						}
						aFY[ed] = !0
					})(a1B), aFs(a1B, aFU[aFu] + aFV[aFu] - a1B, aFW[aFu]), aFV[aFu] = a1B - aFU[aFu] + 1
				}
			}(), eb = 0; eb < a0; eb++)
			if (!aFX[eb])
				for (ed = 0; ed < j5; ed++) aFY[ed] || ! function(eb, ed) {
					var value = ex[ed * a0 + eb - 1] + ex[(ed - 1) * a0 + eb],
						a30 = 2;
					aFX[eb + 1] && (a30++, value += ex[ed * a0 + eb + 1]);
					aFY[ed + 1] && (a30++, value += ex[(ed + 1) * a0 + eb]);
					ex[ed * a0 + eb] = bH.ew(value, a30)
				}(eb, ed)
	}, this.aEd = function() {
		return ex
	}, this.aEL = function() {
		ex = null
	}
}

function aAu(en, eo) {
	return 0 <= en ? bH.ew(en, eo) : -bH.ew(-en, eo)
}

function j9(ex) {
	return ex * ex
}

function a2E(en, eo) {
	return eo < en ? en : eo
}

function a6z(en, eo) {
	return en < eo ? en : eo
}

function a4P(en, ex, eo) {
	return ex < en ? en : eo < ex ? eo : ex
}

function aG0(ex, eU) {
	for (var ep = bH.ew(ex + 1, 2), a6 = 0; a6 < eU; a6++) ep = bH.ew(ep + bH.ew(ex, ep), 2);
	return ep
}

function aCI(ex, eU) {
	return ex < 1 ? 0 : aG0(ex, eU)
}

function aG1(lu, lv, qT, a49, m8, m9, qU, aG2) {
	return !(lu + qT <= m8 || lv + a49 <= m9 || m8 + qU <= lu || m9 + aG2 <= lv)
}

function aG3(lu, lv, qT, a49, m8, m9, qU, aG2) {
	return lu <= m8 && lv <= m9 && m8 + qU <= lu + qT && m9 + aG2 <= lv + a49
}

function sh(ex) {
	return Math.floor(!!ex * (1 + Math.log2(ex + .5)))
}

function bo() {
	this.ew = function(en, eo) {
		return Math.floor((en + .5) / eo)
	}, this.aG4 = function(en, eo) {
		return Math.floor(en * (eo + .5))
	}, this.sqrt = function(ex) {
		return ~~Math.sqrt(ex + .5)
	}, this.pow = function(e) {
		return Math.floor(Math.pow(2, e) + .5)
	}, this.oi = function(value, min, max) {
		return Math.min(Math.max(value, min), max)
	}, this.aG5 = function(fD, fF, fH) {
		return Math.max(Math.min(fD, fF), fH)
	}, this.aG6 = function(aG7, aG8, eb, ed) {
		eb -= aG7, aG7 = ed - aG8, ed = 0;
		return 0 == eb ? ed = 0 <= aG7 ? Math.PI : 0 : (ed = Math.atan(aG7 / eb), ed += 0 < eb ? .5 * Math.PI : 1.5 * Math.PI), ed
	}, this.log2 = function(ex) {
		return Math.floor(!!ex * (1 + Math.log2(ex + .5)))
	}, this.log10 = function(ex) {
		return Math.floor(Math.log10(ex + .5))
	}, this.aGA = function(aGB, aGC, aGD, aGE, aGF) {
		return aGD - aGF < aGB && aGB < aGD + aGF && aGE - aGF < aGC && aGC < aGE + aGF
	}, this.tf = function(hL, hM) {
		return hL * hL + hM * hM
	}
}

function d5() {
	this.l6 = new aGG, this.qL = 0;
	var aGH = new Array(29);

	function aGL() {
		for (var eU = aGH.length, a6 = 0; a6 < eU; a6++) aGH[a6] = null
	}
	this.dR = function() {
		for (var aGI, aGJ = document.body.firstChild; aGJ;) {
			if (aGI = aGJ.nextSibling, document.body.contains(aGJ) && ("DIV" === aGJ.tagName || "INPUT" === aGJ.tagName || "BUTTON" === aGJ.tagName)) try {
				document.body.removeChild(aGJ)
			} catch (e) {
				console.log("error 2623: " + e)
			}
			aGJ = aGI
		}
	}, this.o = function(oA, aGK, zw) {
		void 0 === aGK && (aGK = this.qL), bb.dZ = !0, 0 === oA && (0 === aV.xK() ? oA = 5 : r.s.setState(13)), this.qg(), this.qL === oA && (aGK = aGH[oA].aGK, aGH[oA] = null), this.qL = oA;
		var kL = aGH[oA];
		if (!kL || 4 === oA || 7 === oA || 8 === oA || 9 === oA || 10 === oA || 11 === oA || 13 === oA || 15 === oA || 18 === oA || 20 <= oA && oA <= 28) {
			if (0 === oA) return void aGL();
			1 === oA ? kL = new aGM : 2 === oA ? kL = new aGN : 3 === oA ? kL = new aGO : 4 === oA || 9 === oA || 10 === oA || 11 === oA || 13 === oA ? kL = zw : 5 === oA ? kL = new aGP : 6 === oA ? kL = new aGQ : 7 === oA ? kL = new aGR(n.l6
					.aGS) : 8 === oA ? kL = zw : 12 === oA ? kL = new aGT : 14 === oA ? kL = new aGU : 15 === oA ? kL = new aGR(n.l6.aGV) : 16 === oA ? kL = new aGW : 17 === oA ? kL = new aGX : 18 === oA ? kL = new aGY : 19 === oA ? kL =
				new aGZ : 20 === oA ? kL = new aGa : 21 === oA ? kL = new aGb : 22 === oA ? kL = new aGc : 23 === oA ? kL = new aGd : 24 === oA ? kL = new aGe : 25 === oA ? kL = new aGf : 26 === oA ? kL = new aGg : 27 === oA ? kL = new aGh :
				28 === oA && (kL = new aGi), kL.aGK = aGK, aGH[oA] = kL
		}
		kL.show(zw)
	}, this.xR = function() {
		this.ui() && this.aGj(this.aAV().aGK)
	}, this.aGj = function(oA) {
		this.ui() && (aGH[oA] ? (this.qg(), bb.dZ = !0, this.qL = oA, aGH[oA].show()) : this.o(oA))
	}, this.qg = function() {
		this.ui() && aGH[this.qL].qg()
	}, this.rw = function() {
		this.ui() && (aGH[this.qL].qg(), aGL(), this.qL = 0, r.s.setState(13))
	}, this.r9 = function() {
		var kL;
		this.ui() && (kL = aGH[this.qL]).r9 && kL.r9()
	}, this.resize = function() {
		if (!this.ui()) return !1;
		aGH[this.qL].resize()
	}, this.gj = function(eb, ed) {
		var kL;
		this.ui() && (kL = aGH[this.qL]).gj && kL.gj(eb, ed)
	}, this.xg = function(eb, ed) {
		var kL;
		this.ui() && (kL = aGH[this.qL]).xg && kL.xg(eb, ed)
	}, this.y4 = function() {
		var kL;
		this.ui() && (kL = aGH[this.qL]).y4 && kL.y4()
	}, this.xj = function(kg, kh, deltaY) {
		var kL;
		this.ui() && (kL = aGH[this.qL]).xj && kL.xj(kg, kh, deltaY)
	}, this.yF = function(code) {
		var kL;
		return !!this.ui() && ((kL = aGH[this.qL]).yF && kL.yF(code), !0)
	}, this.iQ = function() {
		var kL;
		this.ui() && (kL = aGH[this.qL]) && kL.iQ && kL.iQ()
	}, this.ui = function() {
		return 0 < this.qL
	}, this.aAV = function() {
		return aGH[this.qL]
	}, this.aGk = function(oA) {
		return aGH[oA]
	}, this.aGl = function() {
		return aGH
	}
}

function aGR(data) {
	var aGm, aGn;
	this.show = function() {
		data.aGo && bE.aHT("account", data.qJ), aGm.show(), this.resize()
	}, this.qg = function() {
		aGm.qg()
	}, this.resize = function() {
		aGm.resize(), aGn.resize()
	}, this.yF = function(ep) {
		2 === ep && aGm.qx[0].pR()
	}, aGm = new qq(data.username, [new q("⬅️ " + L(13), function() {
		bE.clear(), n.xR()
	}), new q(data.aGo ? "🔄 " + L(129) : L(130), function() {
		n.o(8, n.aAV().aGK, new qM(25, {
			qN: 0,
			qJ: data.qJ,
			qK: data.qK
		}))
	}, 0, 0, 1)]), aGn = new p3(aGm.qw, function() {
		var p5 = [];
		p5.push(function() {
				var aH3 = new on,
					aH4 = (aH3.oq(L(176)), new q0({
						value: data.username,
						oA: -1
					}));
				aH4.e.readOnly = !0, aH3.p1(aH4), aH3.p1(new pv([new q(L(142), function(e) {
					return b7.pA.zU(aH4.e), b7.pA.zV(e), !0
				}).button])), data.aGo || aH3.os(L(177));
				return aH3
			}()),
			function(p5) {
				var aH3, ot, a7h, aHL, aHA;
				data.aGo || ((aH3 = new on).oq(L(178)), (ot = aH3.os(data.aHK.length + " / 160")).style.textAlign = "center", a7h = !0, (aHL = new rB(0, 1, function(e) {
					e = e.target.value.length;
					ot.textContent = e + " / 160", 160 < e ? a7h && (a7h = !1, aHA.pT(1), aHA.button.style.color = u.mV) : a7h || (a7h = !0, aHA.pT(0), aHA.button.style.color = u.nG)
				})).e.rows = 6, aHL.e.style.fontSize = "1em", aHL.rI(data.aHK), aH3.p1(aHL), aHA = new q(L(179), function() {
					if (!a7h) return !0;
					n.o(8, n.aAV().aGK, new qM(29, {
						qN: 1,
						or: aHL.rK().substring(0, 160)
					}))
				}, 0, 0, 1), aH3.p1(new pv([aHA.button])), 0 !== data.aHM && (aH3.p1(new pv([new q(L(1 === data.aHM ? 181 : 182), function() {
					n.o(8, n.aAV().aGK, new qM(29, {
						qN: 0,
						or: ""
					}))
				}, 0, 0, 1).button])), aH3.os(1 === data.aHM ? L(183, [data.aHO - 1]) : L(184, [data.aHO - 1]))), aH3.os(L(180, [data.aHN])), p5.push(aH3))
			}(p5),
			function(p5) {
				var aH3;
				data.aGo && 0 !== data.aHM && ((aH3 = new on).oq(L(178)), aH3.ou(data.aHK), aH3.p1(new pv([new q(L(165), function(e) {
					return ax.l6.a8f(0) && (b7.pA.zV(e), ax.aH8.aHG({
						qN: 5,
						qJ: data.qJ,
						qK: data.qK
					})), !0
				}, 0, 0, 1).button])), p5.push(aH3))
			}(p5), p5.push(function() {
				var aH3 = new on;
				aH3.oq(L(131)), aH3.ow(L(132) + b7.wu.a0B(data.s6, .01, 2)), data.aGo || (aH3.os(L(133)), aH3.os(L(134)), aH3.os(L(135)));
				return aH3
			}()), data.aGo && p5.push(function() {
				var aH3 = new on,
					aH4 = (aH3.oq(L(136)), new q0(bf.dj.data[147], 1, void 0, function(e) {
						aH5(e.target.value)
					})),
					aH6 = (aH3.p1(aH4), new q(L(137), function(e) {
						return aH4.e.readOnly && ax.l6.a8f(0) && (b7.pA.zV(e), aH7(), ax.aH8.aH9({
							qN: 0,
							qJ: data.qJ,
							qK: data.qK,
							value: bH.oi(Math.floor(100 * bf.dj.data[147].value), 0, 4294967295)
						})), !0
					}, 1)),
					aHA = new q(L(138), function(e) {
						return e.textContent === L(138) ? (e.textContent = L(139), aH4.e.readOnly = !0, aH6.pT(0), aH6.button.style.color = u.nG, bf.pr.ps(147, aH4.e.value), aH5(bf.dj.data[147].value)) : aH7(), !0
					}),
					ot = (aH3.p1(new pv([aHA.button])), aH3.os()),
					aH5 = function(ex) {
						ex = isNaN(ex) ? 0 : Number(ex);
						var ex = Math.max(ex, (data.aHB + 1) / 100),
							aHC = Math.floor(100 * Math.max(1e-4 * ex, data.aHB / 100)) / 100;
						ot.textContent = L(140, [ex.toFixed(2), bf.dj.data[105].value, aHC.toFixed(2), data.qJ, (ex - aHC).toFixed(2)])
					},
					aH7 = function() {
						aHA.button.textContent = L(138), aH4.e.readOnly = !1, aH6.pT(1), aH6.button.style.color = u.mV
					};
				return aH5(bf.dj.data[147].value), aH3.p1(new pv([aH6.button])), aH3
			}());
		p5.push(function() {
			var aH3 = new on,
				aH4 = (aH3.oq(L(141)), new q0({
					value: data.qJ,
					oA: -1
				}));
			return aH4.e.readOnly = !0, aH3.p1(aH4), aH3.p1(new pv([new q(L(142), function(e) {
				return b7.pA.zU(aH4.e), b7.pA.zV(e), !0
			}).button])), aH3
		}()), data.aGo || (p5.push(function() {
			var aH3 = new on,
				aHD = (aH3.oq(L(143)), new q0(bf.dj.data[106]));
			return aHD.e.readOnly = !0, aHD.e.type = "password", aH3.p1(aHD), aH3.p1(new pv([new q(L(144), function(e) {
				return e.textContent === L(144) ? (e.textContent = L(145), aHD.e.type = "text") : (e.textContent = L(144), aHD.e.type = "password"), !0
			}).button, new q(L(142), function(e) {
				return b7.pA.zU(aHD.e), b7.pA.zV(e), !0
			}).button])), aH3.p1(new pv([new q(L(146), function() {
				n.o(8, n.aAV().aGK, new qM(15))
			}).button])), aH3.oq(L(147), "0.8em"), aH3.os(L(148)), aH3.os(L(149)), aH3.os(L(150)), aH3
		}()), p5.push(function() {
			var aH3 = new on;
			return aH3.oq(L(151)), aH3.p1(new pv([new q(L(152), function() {
				n.o(6, n.aAV().aGK)
			}).button])), aH3.p1(new pv([new q(L(153), function() {
				bf.pr.ps(105, ""), n.o(8, n.aAV().aGK, new qM(18))
			}).button])), aH3.p1(new pv([new q(L(154) + bf.dj.data[105].value, function() {
				n.o(4, 0, new p(L(155), L(156), !0, [new q("⬅️ " + L(13), function() {
					n.o(7, n.aGk(7).aGK)
				})]))
			}, u.n4).button])), aH3
		}()), p5.push(function() {
			function aHF(oA) {
				for (var a6 = 0; a6 < 2; a6++) aHE[a6].pT(0 === oA ? u.mg : 0 === a6 ? u.n4 : u.v)
			}
			var oz, aHE, aH3 = new on;
			aH3.oq(L(157)), aH3.os(L(158)), bf.l6.rp();
			return aHE = [new q(L(159), function() {
				var oA = Math.min(bf.dj.data[117].value, oz.p0.length - 1);
				if (!(oA < 1)) {
					oz.p0[oA].remove(), oz.p0.splice(oA, 1);
					for (var a6 = oA; a6 < oz.p0.length; a6++) oz.p0[a6].name = "" + a6;
					bf.l6.rs(oA), oA = bf.dj.data[117].value, oz.p0[oA].textContent = oz.p0[oA].textContent.replace("⚪", "🟢"), aHF(oA)
				}
			}, u.mg), new q(L(160), function() {
				var oA = Math.min(bf.dj.data[117].value, oz.p0.length - 1);
				oA < 1 || (oA = bf.l6.rt(oA), bf.pr.ps(105, oA.qJ), bf.pr.ps(106, oA.password), n.o(8, n.aAV().aGK, new qM(18)))
			}, u.mg)], (oz = new qm(bf.dj.data[117], aHF)).p0[0].style.marginTop = "0.5em", aH3.oy(oz), aH3.p1(new pv([aHE[1].button])), aH3.p1(new pv([aHE[0].button])), aH3
		}()));
		return p5.push(function() {
				var aH3 = new on;
				aH3.oq(L(161)), aH3.ow(L(162) + b7.wu.a0B(data.s2, .1, 1) + "<br>" + L(163) + (data.s3 + 1) + " / " + data.s5 + "<br>" + L(164) + data.s4), data.aGo && (aH3.p1(new pv([new q(L(165), function(e) {
					return ax.l6.a8f(0) && (b7.pA.zV(e), ax.aH8.aHG({
						qN: 1,
						qJ: data.qJ,
						qK: data.qK
					})), !0
				}, 0, 0, 1).button])), aH3.os(L(166)));
				return aH3
			}()),
			function(p5) {
				var aH3 = new on,
					wx = data.s9,
					aHP = (aH3.oq(L(185)), aH3.ow(L(186) + (wx ? "[" + data.s7 + "]" : "-")), aH3.ow(L(187) + b7.wu.a0B(wx, .001, 2)), aH3.ow(L(163) + (data.sB + 1) + " / " + data.s5), data.sC),
					aHQ = (aH3.ow(L(188) + b7.wu.a0B(aHP, .01, 2)), data.sE);
				aH3.ow(L(189) + aHQ), aH3.ow(L(190) + b7.wu.a0B(aHP / Math.max(aHQ, 1), .01, 2)), wx = data.sA, aH3.oq(L(191), "0.8em"), aH3.ow("Clan: " + (wx ? "[" + data.s8 + "]" : "-")), aH3.ow(L(187) + b7.wu.a0B(wx, .001, 2)), aHP = data
					.sD, aH3.ow(L(188) + b7.wu.a0B(aHP, .01, 2)), aHQ = data.sF, aH3.ow(L(189) + aHQ), aH3.ow(L(190) + b7.wu.a0B(aHP / Math.max(aHQ, 1), .01, 2)), p5.push(aH3)
			}(p5),
			function(p5) {
				var aH3 = new on;
				aH3.oq(L(192)), aH3.ow(L(173) + data.aHR + "<br>" + L(174) + (data.aHS.length ? L(193, [data.aHS]) : L(194))), data.aGo && (aH3.p1(new pv([new q(L(195), function(e) {
					return ax.l6.a8f(0) && (b7.pA.zV(e), ax.aH8.aHG({
						qN: 4,
						qJ: data.qJ,
						qK: data.qK
					})), !0
				}, 0, 0, 1).button])), aH3.os(L(196)), aH3.os(L(197)));
				p5.push(aH3)
			}(p5), p5.push(function() {
				var aH3 = new on;
				if (aH3.oq(L(172)), aH3.ow(L(173) + data.aHI + "<br>" + L(163) + (data.aHJ + 1) + " / " + data.s5 + "<br>" + L(174) + function(hG) {
						if (40 <= hG) return L(167);
						if (16 <= hG) return L(168);
						if (4 <= hG) return L(169);
						if (1 <= hG) return L(170);
						return L(171)
					}(data.aHJ)), data.aGo) {
					aH3.p1(new pv([new q("−", function(e) {
						return ax.l6.a8f(0) && (b7.pA.zV(e), ax.aH8.aHG({
							qN: 3,
							qJ: data.qJ,
							qK: data.qK
						})), !0
					}, 0, 0, 1).button, new q("+", function(e) {
						return ax.l6.a8f(0) && (b7.pA.zV(e), ax.aH8.aHG({
							qN: 2,
							qJ: data.qJ,
							qK: data.qK
						})), !0
					}, 0, 0, 1).button]));
					for (var a6 = 0; a6 < 2; a6++) aH3.oo[0].px[a6].style.fontSize = "1.6em";
					aH3.os(L(175))
				}
				return aH3
			}()), p5
	}())
}

function aGc() {
	var aHU, aHV, aHW, p5;

	function aHX() {
		aHZ(), 2 !== a8.data.aIncomeType && (a8.data.aIncomeData = null), n.aGl()[19] = null, n.xR()
	}

	function aHZ() {
		2 === a8.data.aIncomeType ? (b7.pK.yt(aHW.rK(), a8.data.aIncomeData, 255), b7.pK.max(a8.data.aIncomeData) || (a8.data.aIncomeType = 0)) : 1 !== a8.data.aIncomeType || a8.data.aIncomeValue || (a8.data.aIncomeType = 0)
	}
	this.show = function() {
		aHU.show(), this.resize()
	}, this.qg = function() {
		aHU.qg()
	}, this.resize = function() {
		aHU.resize(), aHV.resize()
	}, this.yF = function(ep) {
		2 === ep && aHU.qx[0].pR()
	}, aHU = new qq(L(198), [new q("⬅️ " + L(13), aHX)]), aHV = new p3(aHU.qw, (function(p5) {
		var aH3 = new on;
		aH3.oq(L(199)), aH3.oy(new qm({
			qp: [L(200), L(201), L(202)],
			value: a8.data.aIncomeType
		}, function(oA) {
			aHZ(), 2 !== oA || a8.data.aIncomeData || (a8.data.aIncomeData = new Uint8Array(a8.eR)), a8.data.aIncomeType = oA, n.o(22)
		})), p5.push(aH3)
	}(p5 = []), function(p5) {
		var aH3;
		1 === a8.data.aIncomeType && ((aH3 = new on).oq("Value"), aH3.p1(new q0({
			oA: -1,
			value: a8.data.aIncomeValue
		}, 1, 0, function(e) {
			var value = bH.oi(Math.floor(e.target.value), 0, 255);
			e.target.value = a8.data.aIncomeValue = value
		})), p5.push(aH3))
	}(p5), function(p5) {
		var aH3;
		2 === a8.data.aIncomeType && ((aH3 = new on).oq("Data"), (aHW = new rB(0, 1, 0, 1)).rI(b7.wu.a0I(a8.data.aIncomeData, 4)), aH3.p1(aHW), p5.push(aH3))
	}(p5), p5))
}

function aGf() {
	var aHU, aHV, aHW;

	function aHX() {
		aHZ(), 3 !== a8.data.botDifficultyType || b7.pK.yh(a8.data.botDifficultyData) || (a8.data.botDifficultyType = 0), 3 !== a8.data.botDifficultyType && (a8.data.botDifficultyData = null), n.aGl()[19] = null, n.xR()
	}

	function aHZ() {
		3 === a8.data.botDifficultyType && b7.pK.yt(aHW.rK(), a8.data.botDifficultyData, a9.jp.length - 1)
	}

	function aHe(p5, oA) {
		var aH3 = new on,
			value = (aH3.oq(oA < 0 ? L(37) : L(36) + " " + bc.wQ[oA % 9]), 0 <= oA && (aH3.ow(L(205) + ": " + a8.data.teamPlayerCount[oA]).style.marginBottom = "1em"), oA < 0 ? a8.data.botDifficultyValue : a8.data.botDifficultyTeam[oA]);
		aH3.oy(new qm({
			qp: a9.jp,
			value: value
		}, function(k0) {
			oA < 0 ? a8.data.botDifficultyValue = k0 : a8.data.botDifficultyTeam[oA] = k0
		})), p5.push(aH3)
	}
	this.show = function() {
		aHU.show(), this.resize()
	}, this.qg = function() {
		aHU.qg()
	}, this.resize = function() {
		aHU.resize(), aHV.resize()
	}, this.yF = function(ep) {
		2 === ep && aHU.qx[0].pR()
	}, aHU = new qq(L(37), [new q("⬅️ " + L(13), aHX)]), aHV = new p3(aHU.qw, function() {
		var p5 = [];
		if (function(p5) {
				var aH3 = new on,
					qp = (aH3.oq(L(199)), [L(201), L(203), L(204), L(202)]),
					value = a8.data.botDifficultyType;
				0 === a8.data.gameMode && (value = Math.min(value, 2), qp.splice(2, 1));
				aH3.oy(new qm({
					qp: qp,
					value: value
				}, function(oA) {
					aHZ(), a8.data.botDifficultyType = oA, 0 === a8.data.gameMode && 2 === oA && (a8.data.botDifficultyType = 3), 3 !== a8.data.botDifficultyType || a8.data.botDifficultyData || (a8.data.botDifficultyData =
						new Uint8Array(a8.eR)), 2 !== a8.data.botDifficultyType || a8.data.botDifficultyTeam || (a8.data.botDifficultyTeam = new Uint8Array(9)), n.o(25)
				})), p5.push(aH3)
			}(p5), 0 === a8.data.botDifficultyType) aHe(p5, -1);
		else if (2 === a8.data.botDifficultyType)
			for (var a6 = 0; a6 < a8.data.teamPlayerCount.length; a6++) a8.data.teamPlayerCount[a6] && aHe(p5, a6);
		else 3 === a8.data.botDifficultyType && ! function(p5) {
			var aH3 = new on;
			aH3.oq("Data"), (aHW = new rB(0, 1, 0, 1)).rI(b7.wu.a0I(a8.data.botDifficultyData, 8)), aH3.p1(aHW), p5.push(aH3)
		}(p5);
		return p5
	}())
}

function aHf(data) {
	var aGm, aHg, aHh, a8N, aHi, aHj, aHk, colors, aHl, aHm, aHn = 0,
		aHo = 0,
		aHp = !1,
		aHq = !1,
		aHr = [1, 5, 60, 240, 1440, 10080, 43200];

	function aII(kg, kh) {
		! function(kg, kh) {
			return aHg < kg && kg < aHg + a8N && aHh < kh && kh < aHh + aHi
		}(aHn = kg, aHo = kh) ? (aHp && (bb.dZ = !0), aHp = !1) : (aHp = !0, bb.dZ = !0)
	}
	this.show = function() {
		aHq = bf.dj.data[127].value, aGm.show(), this.resize()
	}, this.qg = function() {
		aGm.qg()
	}, this.resize = function() {
		aGm.resize();
		var ep = au.pG,
			r7 = aGm.r1(),
			aI0 = ep * r7.r5,
			ep = ep * r7.r2;
		aHj = b7.pA.qi(.06), aHk = b7.pA.qi(.04), aHg = b7.pA.qi(.06), aHh = ep + aHj, a8N = au.a0 - aHg - aHk, aHi = aI0 + ep - aHh - aHk
	}, this.r9 = function() {
		aGm.r9(),
			function() {
				var a6, aHx, fy, eb, en, g = data.data,
					aI3 = 1,
					aI4 = .125,
					aI5 = aHq ? 65536 : 0;
				for (a6 = 0; a6 < g.length; a6++)
					for (aHx = g[a6].aHx, fy = aHx.length, aI3 = Math.max(fy, aI3), en = 0; en < fy; en++) aI4 = Math.max(aHx[en], aI4), aI5 = Math.min(aHx[en], aI5);
				var lv = aHh + aHi,
					uE = aHi / (aI4 - aI5),
					uD = 1 / (aI3 - 1);
				for (rA.lineWidth = bY.vB, a6 = 0; a6 < g.length; a6++) {
					for (aHx = g[a6].aHx, fy = aHx.length, eb = aHg, rA.beginPath(), rA.moveTo(eb + a8N, lv - uE * (aHx[fy - 1] - aI5)), en = fy - 2; 0 <= en; en--) rA.lineTo(eb + uD * en * a8N, lv - uE * (aHx[en] - aI5));
					rA.strokeStyle = colors[a6], rA.stroke()
				}(function(aI5, aI4, lv, uE) {
					rA.font = b7.pA.qR(0, .25 * aHg), b7.pA.textBaseline(rA, 1), b7.pA.textAlign(rA, 2), rA.fillStyle = colors[0];
					for (var eb = .92 * aHg, a6 = 0; a6 < 3; a6++) {
						var ex = aI5 + a6 * (aI4 - aI5) / 2;
						rA.fillText((ex / 1e3).toFixed(3), eb, lv - uE * (ex - aI5))
					}
				})(aI5, aI4, lv, uE),
				function(aI3) {
					var ed = aHh + aHi + .15 * aHk;
					rA.font = b7.pA.qR(0, Math.min(.4 * aHk, .028 * au.a0)), b7.pA.textBaseline(rA, 0), b7.pA.textAlign(rA, 2), rA.fillStyle = colors[0], rA.fillText(b7.yY.zJ(aHl), aHg + a8N, ed), b7.pA.textAlign(rA, 0), rA.fillText(b7.yY.zJ(
						new Date(aHm.getTime() - 6e4 * (aI3 - 1) * aHr[data.aHw])), aHg, ed)
				}(aI3),
				function(aI3, aI5, aI4) {
					if (aHp && !(aI3 < 2)) {
						for (var a4H, oA = (aHn - aHg) / a8N * (aI3 - 1), kt = Math.floor(oA), ku = Math.floor(1 + oA), aI8 = oA - kt, aI9 = 1e5, aIA = -1, aIB = -1, aIC = aI4 - (aI4 - aI5) * (aHo - aHh) / aHi, g = data.data, a6 = 0; a6 < g
							.length; a6++) {
							var aEw, aHx = g[a6].aHx;
							aHx.length <= ku || (aHx = aHx[kt] + aI8 * (aHx[ku] - aHx[kt]), (aEw = Math.abs(aIC - aHx)) < aI9 && (aI9 = aEw, aIA = a6, aIB = aHx))
						} - 1 !== aIA && (aI4 = aHh + aHi - (aIB - aI5) / (aI4 - aI5) * aHi, rA.lineWidth = .5 * bY.vB, rA.strokeStyle = colors[aIA], rA.beginPath(), rA.moveTo(aHg, aI4), rA.lineTo(aHn, aI4), rA.lineTo(aHn, aHh + aHi), rA
						.stroke(), rA.beginPath(), rA.arc(aHn, aI4, .1 * aHg, 0, 2 * Math.PI), rA.fillStyle = colors[aIA], rA.fill(), aI5 = aHh + aHi + .15 * aHk, b7.pA.textAlign(rA, 1), a4H = aI3 - 2 < oA ? (a4H = aHm.getTime() - 6e4 * aHr[
								data.aHw], new Date(a4H + (oA - (aI3 - 2)) * (aHl.getTime() - a4H))) : new Date(aHm.getTime() - 6e4 * (aI3 - oA - 1) * aHr[data.aHw]), aI3 = b7.yY.zJ(a4H), oA = b7.pA.measureText(aI3), a4H = bH.oi(aHn, aHg +
								.5 * oA, aHg + a8N - .5 * oA), rA.fillStyle = b7.color.mN(70, 50, 20), rA.fillRect(a4H - .52 * oA, aHh + aHi, 1.04 * oA, .55 * aHk), rA.fillStyle = colors[0], rA.fillText(aI3, a4H, aI5), rA.font = b7.pA.qR(0,
								.25 * aHg), b7.pA.textBaseline(rA, 1), b7.pA.textAlign(rA, 2), a4H = .92 * aHg, aI3 = (aIB / 1e3).toFixed(3), oA = b7.pA.measureText(aI3), aI5 = a4H - 1.04 * oA, rA.fillStyle = b7.color.mN(70, 50, 20), rA
							.fillRect(aI5, aI4 - .1625 * aHg, aHg - aI5, .275 * aHg), rA.fillStyle = colors[aIA], rA.fillText(aI3, a4H, aI4))
					}
				}(aI3, aI5, aI4)
			}(), rA.lineWidth = bY.vB, rA.strokeStyle = u.mV, rA.beginPath(), rA.moveTo(aHg, aHh), rA.lineTo(aHg, aHh + aHi), rA.lineTo(aHg + a8N, aHh + aHi), rA.stroke();
		var a6, fontSize = .5 * aHj,
			g = (rA.font = b7.pA.qR(0, fontSize), b7.pA.textBaseline(rA, 1), b7.pA.textAlign(rA, 0), data.data),
			eU = g.length,
			ed = aHh - .5 * aHj,
			or = "";
		for (a6 = 0; a6 < eU; a6++) or += g[a6].name + "  ";
		or = or.trim();
		var aIF = b7.pA.measureText(or),
			eb = .5 * (au.a0 - aIF);
		for (aIF > au.a0 && (eb = 0, rA.font = b7.pA.qR(0, au.a0 / aIF * fontSize)), a6 = 0; a6 < eU; a6++) rA.fillStyle = colors[a6], rA.fillText(g[a6].name, eb, ed), eb += b7.pA.measureText(g[a6].name + "  ")
	}, this.gj = function(kg, kh) {
		aII(kg, kh)
	}, this.xg = function(kg, kh) {
		aII(kg, kh)
	}, this.yF = function(ep) {
		2 === ep && aGm.qx[0].pR()
	};
	var a6, e3, zH, k0, eX = data.data,
		eU = eX.length,
		max = 1;
	for (a6 = 0; a6 < eU; a6++) max = Math.max(max, eX[a6].aHx.length);
	for (a6 = 0; a6 < eU; a6++)
		for (; eX[a6].aHx.length < max;) eX[a6].aHx.unshift(0);
	e3 = new Date, zH = 6e4 * e3.getTimezoneOffset(), k0 = e3.getTime() - zH, aHl = new Date(k0), 6 === data.aHw ? function(e3, zH) {
		var aHz = e3.getUTCFullYear(),
			e3 = e3.getUTCMonth() + 1;
		aHm = e3 < 12 ? new Date(Date.UTC(aHz, e3) - zH) : new Date(Date.UTC(aHz + 1, 0) - zH)
	}(e3, zH) : (zH = 6e4 * aHr[data.aHw], aHm = data.aHw <= 4 ? new Date(k0 + zH - e3.getTime() % zH) : new Date(k0 + zH - (e3.getTime() + 2592e5) % zH)), k0 = b7.color, colors = [u.mV, k0.mN(255, 0, 0), k0.mN(0, 200, 0), k0.mN(80, 80, 255), k0
		.mN(255, 255, 0), k0.mN(255, 0, 255), k0.mN(0, 255, 255), k0.mN(255, 140, 0), k0.mN(128, 128, 128), k0.mN(0, 255, 140)
	], aGm = new qq(L(206) + ", " + ["M1", "M5", "H1", "H4", "D1", "W1", "MN"][data.aHw] + ", " + b7.yY.zG(aHl), [new q("⬅️ " + L(13), function() {
		n.l6.a7n()
	}), new q(L(207), function() {
		n.o(14)
	})], !1)
}

function aGU() {
	var aGm, aGn, p5;
	this.show = function() {
		aGm.show(), this.resize()
	}, this.qg = function() {
		aGm.qg()
	}, this.resize = function() {
		aGm.resize(), aGn.resize()
	}, this.yF = function(ep) {
		2 === ep && aGm.qx[0].pR()
	}, aGm = new qq(L(208), [new q("⬅️ " + L(13), function() {
		n.aGj(13)
	})]), aGn = new p3(aGm.qw, ((p5 = []).push(function() {
		var aH3 = new on,
			aHA = (aH3.oq(L(209)), aH3.os(L(210)), new q(L(211), function() {
				bf.pr.ps(130, 0), n.l6.aIN()
			}, 0, 0, 1)),
			aH4 = new q0(bf.dj.data[126], 0, function() {
				aHA.button.click()
			});
		return aH3.p1(aH4), aH4.e.placeholder = "a,b,c", aH4.e.style.marginTop = "0.5em", aH3.p1(new pv([aHA.button])), aH3
	}()), p5.push(function() {
		var aH3 = new on,
			aHA = new q(L(211), function() {
				bf.pr.ps(130, 1), n.l6.aIN()
			}, 0, 0, 1),
			aIO = new q0(bf.dj.data[129], 1, function() {
				aIO.e.focus()
			}),
			aIP = new q0(bf.dj.data[128], 1, function() {
				aHA.button.click()
			});
		return aH3.oq(L(212)), aH3.p1(aIP), aIP.e.style.marginBottom = "0.5em", aH3.oq(L(213)), aH3.p1(aIO), aH3.p1(new pv([aHA.button])), aH3
	}()), p5.push(function() {
		var aH3 = new on;
		return aH3.oq(L(214)), bf.dj.data[125].qp = ["M1", "M5", "H1", "H4", "D1", "W1", "MN"], aH3.oy(new qm(bf.dj.data[125])), aH3
	}()), p5.push(function() {
		var aH3 = new on;
		return aH3.oq(L(215)), aH3.p1(new pn(bf.dj.data[127], L(216))), aH3
	}()), p5))
}

function aGT() {
	var aGm, aIQ, a8N, aIR, a8O, a8P, colors = [0, 0, 0],
		aIS = -1;

	function a8W(a6) {
		var aIV = aIQ.ed + a6 * (bY.gap + a8P);
		rA.fillStyle = "rgb(" + (0 === a6 ? 150 : 2 === a6 ? 30 : 0) + "," + (1 === a6 ? 130 : 2 === a6 ? 30 : 0) + "," + (2 === a6 ? 220 : 0) + ")", rA.fillRect(aIR, aIV, colors[a6] * a8O, a8P), rA.strokeStyle = u.mV, rA.strokeRect(aIR, aIV, a8O,
			a8P), rA.fillStyle = u.mV, rA.font = b7.pA.qR(0, .32 * a8P), b7.pA.textBaseline(rA, 1), b7.pA.textAlign(rA, 0), rA.fillText(L(0 === a6 ? 219 : 1 === a6 ? 220 : 221) + aIT(a6), aIR + bY.gap, aIV + .53 * a8P)
	}

	function aIT(a6, aIW) {
		return aIW = aIW || 256, bH.oi(Math.floor(aIW * colors[a6]), 0, aIW - 1)
	}

	function yB(kg, kh) {
		return !(kg < aIR || kh < aIQ.ed || kg > aIQ.eb + aIQ.a0 || kh > aIQ.ed + aIQ.j5)
	}
	this.show = function() {
		var ex = bf.dj.data[121].value;
		colors[0] = (ex >> 12) / 63, colors[1] = (ex >> 6 & 63) / 63, colors[2] = (63 & ex) / 63, aGm.show(), this.resize()
	}, this.qg = function() {
		bf.pr.ps(121, (aIT(0, 64) << 12) + (aIT(1, 64) << 6) + aIT(2, 64)), aGm.qg()
	}, this.resize = function() {
		aGm.resize(), aIQ.resize();
		var ep = au.pG,
			r7 = aGm.r1(),
			aIU = (aIQ.ed = Math.max(aIQ.ed, ep * r7.r2 + bY.gap), ep * r7.r5 - 2 * bY.gap);
		aIQ.j5 = Math.min(aIQ.j5, aIU), aIQ.a0 = 2 * aIQ.j5, aIQ.ed = ep * r7.r2 + .5 * (ep * r7.r5 - aIQ.j5), aIQ.eb = .5 * (au.a0 - aIQ.a0), a8N = .25 * aIQ.a0, aIR = aIQ.eb + a8N + bY.gap, a8O = aIQ.a0 - a8N - bY.gap, a8P = (aIQ.j5 - 2 * bY
			.gap) / 3
	}, this.r9 = function() {
		var hG, qh, eo;
		aGm.r9(), rA.lineWidth = bY.vB, hG = aIT(0), qh = aIT(1), eo = aIT(2), rA.fillStyle = "rgb(" + hG + "," + qh + "," + eo + ")", rA.fillRect(aIQ.eb, aIQ.ed, a8N, aIQ.j5), rA.strokeStyle = u.mV, rA.strokeRect(aIQ.eb, aIQ.ed, a8N, aIQ.j5), rA
			.fillStyle = hG + qh + eo < 306 && qh < 150 ? u.mV : u.mM, b7.pA.textBaseline(rA, 1), b7.pA.textAlign(rA, 1), rA.font = b7.pA.qR(0, .1 * aIQ.j5), rA.rotate(-Math.PI / 2), rA.fillText(L(218), -aIQ.ed - .5 * aIQ.j5, aIQ.eb + .5 * a8N),
			rA.setTransform(1, 0, 0, 1, 0, 0), a8W(0), a8W(1), a8W(2)
	}, this.gj = function(kg, kh) {
		yB(kg, kh) && (aIS = bH.oi(Math.floor((kh - aIQ.ed) / (a8P + .75 * bY.gap)), 0, 2), colors[aIS] = bH.oi((kg - aIR) / a8O, 0, 1), bb.dZ = !0)
	}, this.xg = function(kg) {
		-1 !== aIS && (colors[aIS] = bH.oi((kg - aIR) / a8O, 0, 1), bb.dZ = !0)
	}, this.xj = function(kg, kh, deltaY) {
		yB(kg, kh) && (kg = bH.oi(Math.floor((kh - aIQ.ed) / (a8P + .75 * bY.gap)), 0, 2), colors[kg] = bH.oi(colors[kg] + (1 - 2 * (0 < deltaY)) / 256, 0, 1), bb.dZ = !0)
	}, this.y4 = function() {
		0 <= aIS && (aIS = -1, bb.dZ = !0)
	}, this.yF = function(ep) {
		2 === ep && aGm.qx[0].pR()
	}, aGm = new qq(L(217), [new q("⬅️ " + L(13), function() {
		n.l6.a7n()
	})], !1), aIQ = new pi([.5, .25], [.5, .5], 1)
}

function aGb() {
	var aHU, aHV, aHW, pg;

	function aHX() {
		aHZ(), 1 !== a8.data.colorsType && (a8.data.colorsData = null), n.aGl()[19] = null, n.xR()
	}

	function aIX() {
		aHZ(), n.o(21)
	}

	function aHZ() {
		1 === a8.data.gameMode ? a8.a0Z.a0d() : 0 === a8.data.gameMode && 1 === a8.data.colorsType && b7.pK.yt(aHW.rK(), a8.data.colorsData, 262143)
	}
	this.show = function() {
		aHU.show(), this.resize()
	}, this.qg = function() {
		aHU.qg()
	}, this.resize = function() {
		aHU.resize(), aHV.resize()
	}, this.yF = function(ep) {
		2 === ep && aHU.qx[0].pR()
	}, pg = [new q("⬅️ " + L(13), aHX)], 1 === a8.data.gameMode && pg.push(new q(L(222), aIX, 1, 1)), aHU = new qq(L(223), pg), aHV = new p3(aHU.qw, (function(p5) {
		var aH3 = new on;
		aH3.oq(L(199)), 0 === a8.data.gameMode && (aH3.oy(new qm({
			qp: [L(224), L(202)],
			value: a8.data.colorsType
		}, function(oA) {
			aHZ(), a8.data.colorsType = oA, 1 !== a8.data.colorsType || a8.data.colorsData && a8.data.colorsData.length === a8.eR || (a8.data.colorsData = new Uint32Array(a8.eR)), n.o(21)
		})), aH3.p1(new py));
		aH3.p1(new pn({
			value: a8.data.selectableColor
		}, L(225), function(value) {
			a8.data.selectableColor = value
		})), p5.push(aH3)
	}(pg = []), 0 === a8.data.gameMode ? 1 === a8.data.colorsType && function(p5) {
		var aH3 = new on;
		aH3.oq("Data"), (aHW = new rB(0, 1, 0, 1)).rI(b7.wu.a0I(a8.data.colorsData, 1)), aH3.p1(aHW), p5.push(aH3)
	}(pg) : (a8.a0Z.a0d(), pg.push(function() {
		var aH3 = new on;
		aH3.oq(L(205));
		for (var a6 = 0; a6 < bc.wQ.length; a6++) {
			var k0 = (a6 + 1) % bc.wQ.length,
				e = aH3.ow((0 == k0 ? "" : "Team ") + bc.wQ[k0]);
			a6 && (e.style.marginTop = "0.5em"), aH3.p1(new q0({
				oA: -1,
				value: a8.data.teamPlayerCount[k0]
			}, 1, 0, function(e) {
				aHU.qx[1].pT(0);
				var playerCount = bH.oi(Math.floor(e.target.value), 0, 512);
				e.target.value = playerCount, a8.data.teamPlayerCount[e.target.aIZ] = playerCount
			})).e.aIZ = k0
		}
		return aH3
	}())), pg))
}

function qM(id, zw) {
	var aGm, aIa;

	function aIe() {
		aIa.p6.innerHTML += "<br>" + L(228)
	}

	function aId() {
		b9.a2(48), b9.a3(24, Math.floor(bH.pow(24) * Math.random())), b9.a3(24, Math.floor(bH.pow(24) * Math.random())), bD.dR(b9.a7), bf.pr.ps(110, bB.qO.qP(bB.qO.qQ(8))), ax.aH8.aIt()
	}
	this.aIb = !0, this.aIc = id, this.show = function() {
		aGm.show(), this.resize(), 15 === id ? (ax.l6.a8l(0, id) ? aId : aIe)() : 16 === id ? ax.l6.a8l(0, id) ? ax.a7k.aIf(2) : aIe() : 17 === id ? ax.l6.a8l(0, id) ? ax.a7k.aIf(3) : aIe() : 18 === id ? (ax.l6.close(0, 3253), ax.l6.a8l(0, id),
				aIe()) : 20 === id ? ax.l6.a8l(0, id) ? ax.aH8.aIg(zw) : aIe() : 21 === id ? ax.l6.a8l(0, id) ? ax.aIh.aIi(zw.qc, zw.qd, zw.qe) : aIe() : 22 === id ? ax.l6.a8l(0, id) ? ax.aIh.aIj(zw.qc, zw.aIk, zw.aIl) : aIe() : 23 === id ? ax.l6
			.a8l(0, id) ? ax.aIh.aIm(zw.aHw, zw.wq) : aIe() : 24 === id ? ax.l6.a8l(0, id) ? ax.aIh.aIn(zw.aHw, zw.qd, zw.qe) : aIe() : 25 === id ? ax.l6.a8l(0, id) ? ax.aH8.aHG(zw) : aIe() : 28 === id ? ax.l6.a8l(0, id) ? ax.aIh.aIo(zw.qc, zw
				.aIk, zw.aIl) : aIe() : 29 === id && (ax.l6.a8l(0, id) ? ax.aH8.aIp(zw) : aIe())
	}, this.aIq = function() {
		15 === id ? aId() : 16 === id ? ax.a7k.aIf(2) : 17 === id ? ax.a7k.aIf(3) : 18 === id ? n.o(8, this.aGK, new qM(16)) : 20 === id ? ax.aH8.aIg(zw) : 21 === id ? ax.aIh.aIi(zw.qc, zw.qd, zw.qe) : 22 === id ? ax.aIh.aIj(zw.qc, zw.aIk, zw
			.aIl) : 23 === id ? ax.aIh.aIm(zw.aHw, zw.wq) : 24 === id ? ax.aIh.aIn(zw.aHw, zw.qd, zw.qe) : 25 === id ? ax.aH8.aHG(zw) : 28 === id ? ax.aIh.aIo(zw.qc, zw.aIk, zw.aIl) : 29 === id ? ax.aH8.aIp(zw) : 1e3 === id && (this.aIc =
			id = 25, ax.aH8.aHG(zw))
	}, this.aIr = function(code, bl, data) {
		!bl && code !== id || (16 === code ? n.o(7, this.aGK) : 17 === code ? (ax.l6.close(0, 3252), bf.l6.rs(0), bf.dj.data[117].qp && 0 < bf.dj.data[117].qp.length ? (bl = bf.l6.rt(0), bf.pr.ps(105, bl.qJ), bf.pr.ps(106, bl.password), n.o(8,
			this.aGK, new qM(16))) : (bf.pr.ps(105, ""), n.l6.a7n())) : 21 === code ? n.o(10, this.aGK, new aIs(data)) : 23 === code ? n.o(13, 0, new aHf({
			data: data,
			aHw: zw.aHw
		})) : 25 === code && (n.l6.aGV.qJ = zw.qJ, n.o(15, this.aGK)))
	}, this.qg = function() {
		aGm.qg()
	}, this.resize = function() {
		aGm.resize(), aIa.resize()
	}, this.yF = function(ep) {
		2 === ep && aGm.qx[0].pR()
	}, aGm = new qq(L(226), [new q("⬅️ " + L(13), function() {
		n.l6.a7n()
	})]), aIa = new pt(aGm.qw, L(227))
}

function aGZ() {
	var aHU, aHV, p5;

	function aIw() {
		var fy;
		1 === a8.data.gameMode ? (a8.data.teamPlayerCount || (a8.data.teamPlayerCount = new Uint16Array([0, 1, 1, 0, 0, 0, 0, 0, 0]), a8.a0Z.a0d()), fy = b7.pK.yn(a8.data.teamPlayerCount, 0), a8.data.numberTeams = fy) : (2 === a8.data
			.botDifficultyType && (a8.data.botDifficultyType = 0), 1 === a8.data.spawningType && (a8.data.spawningType = 0))
	}

	function aHX() {
		1 !== a8.data.gameMode && (a8.data.teamPlayerCount = null), aIy(), a8.data.canvas = null, n.o(5, 5)
	}

	function aIy() {
		b6.oP.dR(), bf.pr.ps(156, b6.a0p.va())
	}

	function aIu() {
		a8.data.isReplay = 0, aIy(), a8.a0Z.a0z(), aV.a8z(), a8.a0Z.a0w(), a8.data.canvas = 2 === a8.data.mapType ? bO.so : null, a8.a0c(), a8.a0b = 1
	}

	function aJC() {
		aIw();
		for (var g = [aJ1(), aJ2(), aJ3()], a6 = 3; a6 < 6; a6++) aHV.p6.removeChild(aHV.p7[a6].op), aHV.p7[a6] = g[a6 - 3], aHV.p6.appendChild(aHV.p7[a6].op);
		aHV.resize()
	}

	function aJ1() {
		var aJD, aH3 = new on;
		return aH3.oq(L(223)), aJD = 0 === a8.data.gameMode ? [L(224), L(202)][a8.data.colorsType] : a8.data.numberTeams + " Team" + (1 === a8.data.numberTeams ? "" : "s"), aH3.ow(aJD), aH3.p1(new pv([new q(L(232), function() {
			n.o(21)
		}).button])), aH3
	}

	function aJ2() {
		var aH3 = new on,
			g = (aH3.oq(L(37)), [L(201) + ": " + a9.jp[a8.data.botDifficultyValue], L(203), L(204), L(202)]);
		return aH3.ow(g[a8.data.botDifficultyType]), aH3.p1(new pv([new q(L(232), function() {
			n.o(25)
		}).button])), aH3
	}

	function aJ3() {
		var aH3 = new on,
			g = (aH3.oq("Spawning"), [L(224), L(234), L(202)]);
		return aH3.ow(g[a8.data.spawningType]), aH3.p1(new pv([new q(L(232), function() {
			n.o(24)
		}).button])), aH3
	}
	this.show = function() {
		aHU.show(), this.resize(), aHU.qw.scrollTop = n.l6.aBr[0]
	}, this.qg = function() {
		n.l6.aBr[0] = aHU.qw.scrollTop, aHU.qg()
	}, this.resize = function() {
		aHU.resize(), aHV.resize()
	}, this.yF = function(ep) {
		2 === ep && aHU.qx[0].pR()
	}, aHU = new qq("🔧 " + L(229), [new q("⬅️ " + L(13), aHX), new q(L(230), aIu)]), aIw(), a8.data.canvas || (2 === a8.data.mapType ? a8.data.canvas = bO.so : 1 === a8.data.mapType ? a8.data.canvas = bO.aA5(bO.a0x(a8.data), 0).so : (a8.data
		.mapType = 0, a8.data.passableWater = a8.data.passableMountains = 1, a8.data.canvas = bO.aA5(bO.a0x(a8.data), a8.data.mapSeed).so)), aHV = new p3(aHU.qw, (function(p5) {
		var aH3 = new on,
			z1 = (aH3.oq(L(231)), a8.data.canvas);
		z1.style.width = "100%", aH3.p1({
			e: z1
		}), aH3.p1(new pv([new q(L(232), function() {
			n.o(20)
		}).button])), p5.push(aH3)
	}(p5 = []), function(p5) {
		var aH3 = new on;
		aH3.oq(L(205)), aH3.p1(new q0({
			oA: -1,
			value: a8.data.playerCount
		}, 1, 0, function(e) {
			var playerCount = bH.oi(Math.floor(e.target.value), 1, 512);
			e.target.value = a8.data.playerCount = playerCount, 1 === a8.data.gameMode && (e = b7.pK.yn(a8.data.teamPlayerCount, 0), a8.a0Z.a0d(), b7.pK.yn(a8.data.teamPlayerCount, 0) !== e) && aJC()
		})), p5.push(aH3)
	}(p5), function(p5) {
		var aH3 = new on;
		aH3.oq(L(233)), aH3.oy(new qm({
			qp: ["Battle Royale", "Teams"],
			value: a8.data.gameMode
		}, function(oA) {
			a8.data.gameMode !== oA && (a8.data.gameMode = oA, aJC())
		})), p5.push(aH3)
	}(p5), p5.push(aJ1()), p5.push(aJ2()), p5.push(aJ3()), function(p5) {
		var aH3 = new on,
			g = (aH3.oq(L(235)), [L(236), L(237), L(202)]);
		aH3.ow(g[a8.data.playerNamesType]), aH3.p1(new pv([new q(L(232), function() {
			n.o(23)
		}).button])), p5.push(aH3)
	}(p5), function(p5) {
		var aH3 = new on,
			g = (aH3.oq(L(198)), [L(200), L(201) + ": " + a8.data.aIncomeValue, L(202)]);
		aH3.ow(g[a8.data.aIncomeType]), aH3.p1(new pv([new q(L(232), function() {
			n.o(22)
		}).button])), p5.push(aH3)
	}(p5), function(p5) {
		var aH3 = new on,
			g = (aH3.oq(L(238)), [L(200), L(201) + ": " + a8.data.tIncomeValue, L(202)]);
		aH3.ow(g[a8.data.tIncomeType]), aH3.p1(new pv([new q(L(232), function() {
			n.o(26)
		}).button])), p5.push(aH3)
	}(p5), function(p5) {
		var aH3 = new on,
			g = (aH3.oq(L(239)), [L(200), L(201) + ": " + a8.data.iIncomeValue, L(202)]);
		aH3.ow(g[a8.data.iIncomeType]), aH3.p1(new pv([new q(L(232), function() {
			n.o(27)
		}).button])), p5.push(aH3)
	}(p5), function(p5) {
		var aH3 = new on,
			g = (aH3.oq(L(240)), [L(200), L(201) + ": " + a8.data.sResourcesValue, L(202)]);
		aH3.ow(g[a8.data.sResourcesType]), aH3.p1(new pv([new q(L(232), function() {
			n.o(28)
		}).button])), p5.push(aH3)
	}(p5), function(p5) {
		var aH3 = new on;
		aH3.oq(L(241)), aH3.p1(new pv([new q(L(242), function() {
			n.rw(), a8.a0Z.a10(), n.l6.aBr[0] = 0, n.o(19)
		}).button])), aH3.p1(new pv([new q(L(243), function() {
			bj.aBg()
		}).button])), aH3.p1(new pv([new q(L(244), function() {
			return bj.aBi(), !0
		}).button])), p5.push(aH3)
	}(p5), p5))
}

function aGh() {
	var aHU, aHV, aHW, p5;

	function aHX() {
		aHZ(), 2 !== a8.data.iIncomeType && (a8.data.iIncomeData = null), n.aGl()[19] = null, n.xR()
	}

	function aHZ() {
		2 === a8.data.iIncomeType && b7.pK.yt(aHW.rK(), a8.data.iIncomeData, 255)
	}
	this.show = function() {
		aHU.show(), this.resize()
	}, this.qg = function() {
		aHU.qg()
	}, this.resize = function() {
		aHU.resize(), aHV.resize()
	}, this.yF = function(ep) {
		2 === ep && aHU.qx[0].pR()
	}, aHU = new qq(L(239), [new q("⬅️ " + L(13), aHX)]), aHV = new p3(aHU.qw, (function(p5) {
		var aH3 = new on;
		aH3.oq(L(199)), aH3.oy(new qm({
			qp: [L(200), L(201), L(202)],
			value: a8.data.iIncomeType
		}, function(oA) {
			aHZ(), 2 !== oA || a8.data.iIncomeData || (a8.data.iIncomeData = new Uint8Array(a8.eR), a8.data.iIncomeData.fill(32)), a8.data.iIncomeType = oA, n.o(27)
		})), p5.push(aH3)
	}(p5 = []), function(p5) {
		var aH3;
		1 === a8.data.iIncomeType && ((aH3 = new on).oq("Value"), aH3.p1(new q0({
			oA: -1,
			value: a8.data.iIncomeValue
		}, 1, 0, function(e) {
			var value = bH.oi(Math.floor(e.target.value), 0, 255);
			e.target.value = a8.data.iIncomeValue = value
		})), p5.push(aH3))
	}(p5), function(p5) {
		var aH3;
		2 === a8.data.iIncomeType && ((aH3 = new on).oq("Data"), (aHW = new rB(0, 1, 0, 1)).rI(b7.wu.a0I(a8.data.iIncomeData, 4)), aH3.p1(aHW), p5.push(aH3))
	}(p5), p5))
}

function aGP() {
	var aJE, aJF, aIQ, aH4, aJG;
	this.aAW = new qV, aIQ = new pi([.45, .27], [.5, .5], 2 / 3), aJF = [new q("⚔️<br>" + L(105), function() {
			aJH(0)
		}, u.mu), new q("🗡️<br>" + L(229), function() {
			aJH(1)
		}, u.n6), new q("🔑<br>" + L(245), function() {
			aJH(2)
		}, u.nL), new q("☰<br>" + L(246), function() {
			aJH(3)
		}, u.mh), new q("", function() {
			n.o(12)
		}, u.mR, !1),
		new q("FX Client settings", function() {
			__fx.WindowManager.openWindow("settings");
		}, "rgba(0, 0, 20, 0.5)"),
		new q("Join/Create custom lobby", function() {
			__fx.customLobby.showJoinPrompt();
		}, "rgba(20, 9, 77, 0.5)")
	], aH4 = new q0(bf.dj.data[122]);
	for (var a6 = 0; a6 < aJF.length; a6++) aJF[a6].button.style.position = "absolute";

	function aJH(oA) {
		r.s.setState(10), aW.ql() || aW.aAM(), 0 === oA ? n.l6.aJI() : 1 === oA ? (b6.aC1.sZ(bf.dj.data[156].value, 1) || a8.a0Z.a10(), n.o(19)) : 2 === oA ? 0 !== r.id || bf.dj.data[140].value ? n.o(8, n.qL, new qM(16)) : n.l6.aJJ(n.qL, 16) : 3 ===
			oA && n.o(1)
	}
	aH4.e.style.position = "absolute", aH4.e.style.textAlign = "center", aH4.e.placeholder = L(247), this.show = function() {
		aV.setState(0), r.s.setState(12), this.aAW.show(), aJF[4].pT(b7.color.z8(bf.dj.data[121].value)), this.resize(), document.body.appendChild(aH4.e);
		for (var a6 = 0; a6 < aJF.length; a6++) document.body.appendChild(aJF[a6].button);
		1 !== r.id || r.ey < 5 || (aJG && bb.e2 > aJG + 144e5 ? r.rd.setState(14) : aJG = bb.e2)
	}, this.qg = function() {
		this.aAW.qg(), document.body.removeChild(aH4.e);
		for (var a6 = 0; a6 < aJF.length; a6++) document.body.removeChild(aJF[a6].button)
	}, this.resize = function() {
		this.aAW.resize(), aIQ.resize();
		var gap = .5 * bY.gap,
			a7t = 10 / 99 * .84 * aIQ.a0,
			aJM = .16 * aIQ.j5,
			a4o = .19 * aIQ.a0,
			eb = aIQ.eb + a4o,
			a7t = aIQ.ed + a7t + 3 * gap,
			a0 = .5 * (aIQ.a0 - gap) - a4o,
			a4o = aIQ.a0 - 2 * a4o - aJM - gap,
			a4o = (b7.pA.qj(aH4.e, eb, a7t, a4o, aJM), b7.pA.qj(aJF[4].button, eb + a4o + gap, a7t, aJM, aJM), .5 * (aIQ.ed + aIQ.j5 - (a7t += aJM + gap) - gap));
		b7.pA.qj(aJF[0].button, eb, a7t, a0, a4o), b7.pA.qj(aJF[1].button, eb + a0 + gap, a7t, a0, a4o), b7.pA.qj(aJF[2].button, eb, a7t + a4o + gap, a0, a4o), b7.pA.qj(aJF[3].button, eb + a0 + gap, a7t + a4o + gap, a0, a4o);
		b7.pA.qj(aJF[5].button, eb, a7t + a4o * 2 + gap * 2, a0 * 2 + gap, a4o / 3);
		b7.pA.qj(aJF[6].button, eb, a7t + a4o * 2.33 + gap * 3, a0 * 2 + gap, a4o / 3);
		for (var a6 = 0; a6 < aJF.length; a6++) aJF[a6].button.style.font = b7.pA.qR(0, b7.pA.zP(.065 * aIQ.j5)), b7.pA.pM(aJF[a6].button, 5);
		aH4.e.style.font = b7.pA.qR(0, b7.pA.zP(.08 * aIQ.j5)), b7.pA.pM(aH4.e, 5)
	}, this.r9 = function() {
		if (aV.a93(), aO.r9(), aJ.r9(), bU.r9(), aW.ql()) {
			if (__fx.settings.displayWinCounter) {
				const size = Math.floor(aIQ.a0 * 0.03);
				rA.font = b7.pA.qR(1, size);
				rA.fillStyle = "#ffffff";
				const text = "Win count: " + __fx.wins.count;
				const textLength = rA.measureText(text).width;
				rA.textAlign = "left";
				rA.textBaseline = "middle";
				rA.fillText(text, rA.canvas.width - textLength - size / 2, size);
			};
			rA.imageSmoothingEnabled = !1;
			var ep = aW.a96("territorial.io"),
				m6 = .84 * aIQ.a0 / ep.width;
			rA.setTransform(m6, 0, 0, m6, aIQ.eb + .08 * aIQ.a0, aIQ.ed), aJE = aJE || b7.yU.zu(ep, b7.yU.a00, [0, 0, 0]);
			for (var eb = -1; eb <= 1; eb += 2)
				for (var ed = -1; ed <= 1; ed += 2) rA.drawImage(aJE, eb, ed);
			rA.drawImage(ep, 0, 0), rA.imageSmoothingEnabled = !0;
			var hO = aW.a96("logo"),
				aJP = .6666 * m6 * ep.height / hO.height,
				m8 = .5 * au.a0,
				m9 = aIQ.ed + .5 * m6 * ep.height - .5 * aJP * hO.height;
			rA.setTransform(aJP, 0, 0, aJP, m8 - .6 * m6 * ep.width, m9), rA.drawImage(hO, 0, 0), rA.setTransform(aJP, 0, 0, aJP, m8 + .6 * m6 * ep.width - aJP * hO.width, m9), rA.drawImage(hO, 0, 0), rA.setTransform(1, 0, 0, 1, 0, 0), rA
				.imageSmoothingEnabled = !0
		}
	}
}

function aGW() {
	var aGm, aJQ, aJR, qr;

	function qb(a6) {
		n.o(8, n.qL, new qM(21, {
			qc: a6,
			qd: 0,
			qe: 10
		}))
	}
	this.show = function() {
		aGm.show(), this.resize()
	}, this.qg = function() {
		aGm.qg()
	}, this.resize = function() {
		aGm.resize(), aJQ.resize()
	}, this.yF = function(ep) {
		2 === ep && aGm.qx[0].pR()
	}, aJR = [new q(L(248), function() {
		qb(1)
	}, 0, 0, 1), new q(L(249), function() {
		qb(2)
	}, 0, 0, 1), new q(L(250), function() {
		qb(0)
	}, 0, 0, 1), new q(L(251), function() {
		qb(3)
	}, 0, 0, 1)], qr = [new q("⬅️ " + L(13), function() {
		n.xR()
	})], aGm = new qq(L(252), qr), aJQ = new pf(aJR, aGm.qw)
}

function a87(title, ox, aJS) {
	var aGm, aIa;
	this.show = function() {
		aGm.show(), this.resize()
	}, this.qg = function() {
		aGm.qg()
	}, this.resize = function() {
		aGm.resize(), aIa.resize()
	}, this.yF = function(ep) {
		2 === ep && aGm.qx[0].pR()
	}, aJS = aJS || [new q("⬅️ " + L(13), function() {
		n.xR()
	}, u.n4)], aGm = new qq(title, aJS), aIa = new pt(aGm.qw, ox), b7.pA.textAlign(aGm.qw.style, 1)
}

function aIs(data) {
	var aGm, aJT, ep, qD;

	function aJU(hS) {
		var eU = data.data.length;
		if (eU) {
			for (var qd, max = min = parseInt(data.data[0][0]), a6 = 1; a6 < eU; a6++) var aJb = parseInt(data.data[a6][0]),
				min = Math.min(aJb, min),
				max = Math.max(aJb, max);
			qd = hS < 0 ? min + hS : max + 1, n.o(8, n.aAV().aGK, new qM(21, {
				qc: data.qc,
				qd: qd,
				qe: qd + Math.abs(hS)
			}))
		}
	}
	this.show = function() {
			aGm.show(), this.resize()
		}, this.qg = function() {
			aGm.qg()
		}, this.resize = function() {
			aGm.resize(), aJT.resize()
		}, this.yF = function(ep) {
			2 === ep && aGm.qx[0].pR()
		}, ep = data.data.length ? 0 : 1, ep = [new q("⬅️ " + L(13), function() {
			n.xR()
		}), new q(L(253), function() {
			aJU(-10)
		}, ep, 0, 1), new q(L(254), function() {
			aJU(10)
		}, ep, 0, 1), new q(L(207), function() {
			n.o(11, 10, new aJV({
				qc: data.qc
			}))
		})], qD = [L(255), L(256), L(257), L(258), L(259), L(260), L(261), L(262), L(263)], aGm = new qq(qD[data.qc], ep),
		function() {
			var a6, eX = {
					q7: []
				},
				q7 = eX.q7,
				aJX = data.data,
				eU = aJX.length,
				m6 = [.1, .001, .001, 1, 100, 1, .01, 1, 100][data.qc],
				a05 = [1, 3, 3, 0, 0, 0, 2, 0, 0][data.qc],
				qD = [
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
			if (eX.qD = qD[data.qc], eX.qH = [
					[25, 40, 35],
					[15, 25, 25, 35],
					[25, 40, 35],
					[25, 40, 35],
					[12, 16, 30, 30, 12],
					[12, 16, 30, 30, 12],
					[12, 16, 30, 30, 12],
					[12, 16, 30, 30, 12],
					[12, 16, 30, 30, 12]
				][data.qc], 0 === data.qc)
				for (a6 = 0; a6 < eU; a6++) q7.push([{
					ex: aJX[a6][0] + 1 + ".",
					e3: 0
				}, {
					ex: aJX[a6][1],
					e3: 1,
					qJ: aJX[a6][4],
					qK: aJX[a6][3]
				}, {
					ex: (m6 * aJX[a6][2]).toFixed(a05),
					e3: 0
				}]);
			else if (1 === data.qc)
				for (a6 = 0; a6 < eU; a6++) q7.push([{
					ex: aJX[a6][0] + 1 + ".",
					e3: 0
				}, {
					ex: aJX[a6][1],
					e3: 0
				}, {
					ex: (m6 * aJX[a6][2]).toFixed(a05),
					e3: 0
				}, {
					ex: aJX[a6][3],
					e3: 1,
					qJ: aJX[a6][5],
					qK: aJX[a6][4]
				}]);
			else if (2 === data.qc || 3 === data.qc)
				for (a6 = 0; a6 < eU; a6++) q7.push([{
					ex: aJX[a6][0] + 1 + ".",
					e3: 0
				}, {
					ex: aJX[a6][1],
					e3: 1,
					qJ: aJX[a6][4],
					qK: aJX[a6][3]
				}, {
					ex: (m6 * aJX[a6][2]).toFixed(a05),
					e3: 0
				}]);
			else if (4 === data.qc || 5 === data.qc || 6 === data.qc || 7 === data.qc || 8 === data.qc)
				for (a6 = 0; a6 < eU; a6++) {
					var aJa = aJX[a6][5];
					4 === data.qc || 8 === data.qc ? "100%" === (aJa = (aJa % 64 * 100 / (aJa >> 6)).toFixed(0) + "%") && (4 === data.qc ? aJa += " (" + L(279) + ")" : aJa += " (" + L(280) + ")") : 5 === data.qc ? 32768 <= aJa && (aJa = -(aJa -
						32768)) : aJa = (m6 * aJa).toFixed(a05), q7.push([{
						ex: "" + aJX[a6][0],
						e3: 0
					}, {
						ex: "" + aJX[a6][6],
						e3: 0
					}, {
						ex: aJX[a6][7],
						e3: 1,
						qJ: aJX[a6][1],
						qK: aJX[a6][2]
					}, {
						ex: aJX[a6][8],
						e3: 1,
						qJ: aJX[a6][3],
						qK: aJX[a6][4]
					}, {
						ex: "" + aJa,
						e3: 0
					}])
				}
			aJT = new q6(aGm.qw, eX)
		}()
}

function aJV(zw) {
	var aGm, aGn, p5;
	this.show = function() {
		aGm.show(), this.resize()
	}, this.qg = function() {
		aGm.qg()
	}, this.resize = function() {
		aGm.resize(), aGn.resize()
	}, this.yF = function(ep) {
		2 === ep && aGm.qx[0].pR()
	}, aGm = new qq(L(281), [new q("⬅️ " + L(13), function() {
		n.aGj(10)
	})]), aGn = new p3(aGm.qw, ((p5 = []).push(function() {
		var aHA, aH3 = new on,
			aIO = new q0(bf.dj.data[132], 1, function() {
				aHA.button.click()
			}),
			aIP = new q0(bf.dj.data[131], 1, function() {
				aIO.e.focus()
			});
		aH3.oq(L(212)), aH3.p1(aIP), aIP.e.style.marginBottom = "0.8em", aH3.oq(L(213)), aH3.p1(aIO);
		return aHA = new q(L(211), function() {
			qd = Math.floor(aIP.e.value), qe = Math.floor(aIO.e.value);
			var qe, qd = {
				yl: Math.min(qd, qe),
				aFu: Math.max(qd, qe)
			};
			n.o(8, n.aGk(10).aGK, new qM(21, {
				qc: zw.qc,
				qd: qd.yl,
				qe: qd.aFu
			}))
		}, 0, 0, 1), aH3.p1(new pv([aHA.button])), aH3
	}()), p5.push(function() {
		var aHA, aH3 = new on,
			aIO = new q0(bf.dj.data[134], 1, function() {
				aHA.button.click()
			}),
			aIP = new q0(bf.dj.data[133], 0, function() {
				aIO.e.focus()
			});
		return aH3.oq(1 === zw.qc ? L(282) : L(283)), aH3.p1(aIP), aIP.e.style.marginBottom = "0.8em", aH3.oq(L(284)), aH3.p1(aIO), aHA = new q(L(211), function() {
			var aIk = aIP.e.value.slice(0, 20),
				aIl = Math.abs(Math.floor(aIO.e.value));
			n.o(8, n.aGk(10).aGK, new qM(22, {
				qc: zw.qc,
				aIk: aIk,
				aIl: aIl
			}))
		}, 0, 0, 1), aH3.p1(new pv([aHA.button])), aH3
	}()), p5.push(function() {
		var aHA, aH3 = new on,
			aIO = new q0(bf.dj.data[152], 1, function() {
				aHA.button.click()
			}),
			aIP = new q0(bf.dj.data[151], 0, function() {
				aIO.e.focus()
			});
		return aH3.oq(L(285)), aH3.p1(aIP), aIP.e.style.marginBottom = "0.8em", aH3.oq(L(284)), aH3.p1(aIO), aHA = new q(L(211), function() {
			var aIk = aIP.e.value.slice(0, 5),
				aIl = Math.abs(Math.floor(aIO.e.value));
			n.o(8, n.aGk(10).aGK, new qM(28, {
				qc: zw.qc,
				aIk: aIk,
				aIl: aIl
			}))
		}, 0, 0, 1), aH3.p1(new pv([aHA.button])), aH3
	}()), p5))
}

function aGQ() {
	var aGm, aGn, p5;
	this.show = function() {
		aGm.show(), this.resize()
	}, this.qg = function() {
		aGm.qg()
	}, this.resize = function() {
		aGm.resize(), aGn.resize()
	}, this.yF = function(ep) {
		2 === ep && aGm.qx[0].pR()
	}, aGm = new qq(L(286), [new q("⬅️ " + L(13), function() {
		n.o(7, n.aGk(7).aGK)
	}), new q(L(160), function() {
		bf.pr.ps(105, bC.qO.sO(aGn.p7[0].oo[0].e.value, 5)), bf.pr.ps(106, bC.qO.sO(aGn.p7[1].oo[0].e.value, 8)), n.o(8, n.aGk(7).aGK, new qM(18))
	})]), aGn = new p3(aGm.qw, ((p5 = []).push(function() {
		var aH3 = new on;
		return aH3.oq(L(141)), aH3.p1(new q0({
			value: "",
			oA: -1
		})), aH3
	}()), p5.push(function() {
		var aH3 = new on,
			aHD = (aH3.oq(L(143)), new q0({
				value: "",
				oA: -1
			}));
		return aHD.e.type = "password", aH3.p1(aHD), aH3.p1(new pv([new q(L(144), function(e) {
			return e.textContent === L(144) ? (e.textContent = L(145), aHD.e.type = "text") : (e.textContent = L(144), aHD.e.type = "password"), !0
		}).button])), aH3
	}()), p5))
}

function aGX() {
	var aGm, aJQ, aJR, qr;

	function qb(a6) {
		n.o(8, n.qL, new qM(21, {
			qc: a6,
			qd: 0,
			qe: 10
		}))
	}
	this.show = function() {
		aGm.show(), this.resize()
	}, this.qg = function() {
		aGm.qg()
	}, this.resize = function() {
		aGm.resize(), aJQ.resize()
	}, this.yF = function(ep) {
		2 === ep && aGm.qx[0].pR()
	}, aJR = [new q(L(259), function() {
		qb(4)
	}, 0, 0, 1), new q(L(260), function() {
		qb(5)
	}, 0, 0, 1), new q(L(261), function() {
		qb(6)
	}, 0, 0, 1), new q(L(262), function() {
		qb(7)
	}, 0, 0, 1), new q(L(263), function() {
		qb(8)
	}, 0, 0, 1)], qr = [new q("⬅️ " + L(13), function() {
		n.xR()
	})], aGm = new qq(L(287), qr), aJQ = new pf(aJR, aGm.qw)
}

function aGG() {
	this.dj = {}, this.qf = ["", "", ""], this.aGV = null, this.aGS = null, this.q4 = 0, this.aBr = [0], this.xU = function() {
			n.o(5, 5)
		}, this.aJI = function() {
			n.rw(), aU.a8h(bf.dj.data[10].value), aU.dR()
		},
		__fx.customLobby.setJoinFunction(() => {
			n.rw();
			aU.a8h(0);
			aU.dR();
		}), this.a7n = function() {
			n.o(0 === aV.xK() ? 5 : 0)
		}, this.aIN = function() {
			if (1 === bf.dj.data[130].value) n.o(8, n.aAV().aGK, new qM(24, {
				aHw: bf.dj.data[125].value,
				qd: bf.dj.data[128].value,
				qe: bf.dj.data[129].value
			}));
			else {
				for (var g = (g = bf.dj.data[126].value.split(",")).slice(0, 10), a6 = 0; a6 < g.length; a6++) g[a6] = g[a6].trim().slice(0, 7).toUpperCase();
				1 === g.length && 0 === g[0].length && (g = []), n.o(8, n.aAV().aGK, new qM(23, {
					aHw: bf.dj.data[125].value,
					wq: g
				}))
			}
		}, this.aJJ = function(aGK, target) {
			n.o(4, aGK, new p("Data Usage Information",
				"Do you want your username and other data to be remembered for the next session?<br>The app might not function correctly if you decline data usage.<br>Please read our privacy policy for more information: <a href='" + bG.aJg +
				"' target='_blank'>" + bG.aJg + "</a>", !1, [new q("⬅️ " + L(13), function() {
					n.o(aGK)
				}), new q("✅ Accept", function() {
					bf.pr.ps(140, 1), 0 === target ? n.o(2, aGK) : n.o(8, aGK, new qM(target))
				})]))
		}, this.aJh = function() {
			for (var a6 = 0; a6 < 3; a6++) this.qf[a6] = bC.sH.sJ(bD.oB(5));
			this.qf[1] = "[" + this.qf[1] + "]", 5 === n.qL && n.aAV().aAW.ps(this.qf)
		}
}

function aGa() {
	var aHU, aHV, aJi, p5;

	function aHX() {
		b3.xW(), n.aGl()[19] = null, n.xR()
	}

	function aJp() {
		aJs(), aJq()
	}

	function aJs() {
		aJi.op.lastChild && aJi.op.removeChild(aJi.op.lastChild)
	}

	function aJq() {
		var aJt = bO.a0x(a8.data);
		a8.data.canvas = bO.aA5(aJt, a8.data.mapSeed).so, aJr()
	}

	function aJr() {
		var z1 = a8.data.canvas;
		z1.style.width = "100%", aJi.op.appendChild(z1)
	}
	this.aBa = function(z1) {
		a8.data.canvas && aJs(), a8.data.canvas = z1, aJr()
	}, this.show = function() {
		aHU.show(), this.resize()
	}, this.qg = function() {
		aHU.qg()
	}, this.resize = function() {
		aHU.resize(), aHV.resize()
	}, this.yF = function(ep) {
		2 === ep && aHU.qx[0].pR()
	}, aHU = new qq(L(231), [new q("⬅️ " + L(13), aHX)]), 2 === a8.data.mapType && b3.dR(), aHV = new p3(aHU.qw, (function(p5) {
		var aH3 = new on;
		aH3.oq(L(199)), aH3.oy(new qm({
			qp: [L(288), L(289), L(290)],
			value: a8.data.mapType
		}, function(oA) {
			2 === (a8.data.mapType = oA) ? (b3.dR(), a8.data.canvas = null) : (a8.data.passableWater = a8.data.passableMountains = 1, b3.xW()), n.o(20)
		})), 2 <= a8.data.mapType && (aH3.p1(new py), aH3.p1(new pn({
			value: a8.data.passableWater
		}, L(291), function(value) {
			a8.data.passableWater = value
		})), aH3.p1(new pn({
			value: a8.data.passableMountains
		}, L(292), function(value) {
			a8.data.passableMountains = value
		})));
		p5.push(aH3)
	}(p5 = []), function(p5) {
		if (0 === a8.data.mapType) {
			for (var aH3 = new on, qp = (aH3.oq(L(231)), []), a6 = 0; a6 < bO.se.aFG.length; a6++) qp.push(bO.se.sf[bO.se.aFG[a6]].name);
			aH3.oy(new qm({
				qp: qp,
				value: a8.data.mapProceduralIndex
			}, function(oA) {
				a8.data.mapProceduralIndex = oA, aJp()
			})), p5.push(aH3)
		}
	}(p5), function(p5) {
		if (1 === a8.data.mapType) {
			for (var aH3 = new on, qp = (aH3.oq(L(231)), []), a6 = 0; a6 < bO.se.aFH.length; a6++) qp.push(bO.se.sf[bO.se.aFH[a6]].name);
			aH3.oy(new qm({
				qp: qp,
				value: a8.data.mapRealisticIndex
			}, function(oA) {
				a8.data.mapRealisticIndex = oA, aJp()
			})), p5.push(aH3)
		}
	}(p5), function(p5) {
		var aH3;
		2 === a8.data.mapType && ((aH3 = new on).oq(L(231)), aH3.p1(new pv([new q(L(293), function() {
			return b3.aBT(), !0
		}).button])), p5.push(aH3))
	}(p5), function(p5) {
		(aJi = new on).oq(L(294)), 2 !== a8.data.mapType ? aJq() : a8.data.canvas && aJr();
		p5.push(aJi)
	}(p5), function(p5) {
		var aH3, aH4, aHA;
		0 === a8.data.mapType && ((aH3 = new on).oq("Seed"), aH4 = new q0({
			oA: -1,
			value: a8.data.mapSeed
		}, 1, 0, function(e) {
			e = Math.abs(Math.floor(e.target.value)) % 16384;
			a8.data.mapSeed !== e && (a8.data.mapSeed = e, aJp())
		}), aHA = new q(L(224), function(e) {
			var aEG = Math.floor(16384 * Math.random());
			if (a8.data.mapSeed !== aEG) return aH4.e.value = a8.data.mapSeed = aEG, aJp(), !0
		}), aH3.p1(aH4), aH3.p1(new pv([aHA.button])), p5.push(aH3))
	}(p5), function(p5) {
		var aH3, aH4;
		2 === a8.data.mapType && ((aH3 = new on).oq(L(295)), aH4 = new q0({
			oA: -1,
			value: a8.data.mapName
		}, 0, 0, function(e) {
			a8.data.mapName = e.target.value = e.target.value.slice(0, 20)
		}), aH3.p1(aH4), p5.push(aH3))
	}(p5), p5))
}

function p(title, ox, aJu, aJS) {
	var aGm, aIa;
	this.show = function() {
		aGm.show(), this.resize()
	}, this.qg = function() {
		aGm.qg()
	}, this.resize = function() {
		aGm.resize(), aIa.resize()
	}, this.yF = function(ep) {
		2 === ep && aGm.qx[0].pR()
	}, aJS = aJS || [new q("⬅️ " + L(13), function() {
		n.xR()
	})], aGm = new qq(title, aJS), aIa = new pt(aGm.qw, ox), aJu && b7.pA.textAlign(aGm.qw.style, 1)
}

function aGd() {
	var aHU, aHV, aHW, p5;

	function aHX() {
		aHZ(), 2 === a8.data.playerNamesType && 1 === b7.pK.yh(a8.data.playerNamesData).length && (a8.data.playerNamesType = 0), 2 !== a8.data.playerNamesType && (a8.data.playerNamesData = null), n.aGl()[19] = null, n.xR()
	}

	function aHZ() {
		2 === a8.data.playerNamesType && b7.pK.yv(aHW.rK(), a8.data.playerNamesData, 20)
	}
	this.show = function() {
		aHU.show(), this.resize()
	}, this.qg = function() {
		aHU.qg()
	}, this.resize = function() {
		aHU.resize(), aHV.resize()
	}, this.yF = function(ep) {
		2 === ep && aHU.qx[0].pR()
	}, aHU = new qq(L(235), [new q("⬅️ " + L(13), aHX)]), aHV = new p3(aHU.qw, (function(p5) {
		var aH3 = new on;
		aH3.oq(L(199)), aH3.oy(new qm({
			qp: [L(236), L(237), L(202)],
			value: a8.data.playerNamesType
		}, function(oA) {
			aHZ(), a8.data.playerNamesType = oA, n.o(23)
		})), aH3.p1(new py), aH3.p1(new pn({
			value: a8.data.selectableName
		}, L(296), function(value) {
			a8.data.selectableName = value
		})), p5.push(aH3)
	}(p5 = []), function(p5) {
		var aH3;
		2 === a8.data.playerNamesType && ((aH3 = new on).oq("Data"), aHW = new rB(0, 1, 0, 1), a8.data.playerNamesData && a8.data.playerNamesData.length === a8.eR || (a8.data.playerNamesData = new Array(a8.eR), a8.data.playerNamesData
			.fill("")), aHW.rI(b7.wu.a0I(a8.data.playerNamesData, 1, '"')), aH3.p1(aHW), p5.push(aH3))
	}(p5), p5))
}

function aGO() {
	var aHU, rG;

	function aJv() {
		n.rw();
		var or = b6.aJz(rG.rK());
		(a8.w4 && 0 < or.length && or === b6.oP.a0o || b6.aC1.sZ(or)) && b6.aK0()
	}
	this.show = function(aJw) {
		this.aJx(aJw), aHU.show(), this.resize()
	}, this.aJx = function(aJw) {
		0 === a8.w4 ? aJw ? rG.rI(aJw) : b6.oP.a0o.length && rG.rI(b6.oP.a0o) : (a8.gf || (b6.oP.a0o = b6.a0p.va()), rG.rI(b6.aJy(b6.oP.a0o)))
	}, this.qg = function() {
		aHU.qg()
	}, this.resize = function() {
		aHU.resize(), rG.resize()
	}, this.yF = function(ep) {
		2 === ep ? aHU.qx[0].pR() : aJv()
	}, aHU = new qq(L(297), [new q("⬅️ " + L(13), function() {
		n.aGj(1)
	}), new q(L(298), function() {
		rG.rL()
	}), new q(L(299), function() {
		rG.rM()
	}), new q(L(300), function() {
		rG.clear()
	}), new q(L(301), function() {
		aJv()
	})]), rG = new rB(L(302)), aHU.qw.appendChild(rG.e)
}

function aGN() {
	var aGm, aGn, p5, a7j, aH3;

	function aK1() {
		var e2;
		a7j !== bf.dj.data[12].value ? (b4.dR(), b4.a7i(), e2 = bb.e2, n.o(4, 1, new p(L(305), L(306), !1, [new q("⬅️ " + L(13), function() {
			n.o(1)
		}), new q("🔄 Reload", function() {
			bb.e2 < e2 + 1500 || r.s.t()
		}, u.v)]))) : n.o(1)
	}
	this.show = function() {
			a7j = bf.dj.data[12].value, aGm.show(), this.resize()
		}, this.qg = function() {
			aGm.qg()
		}, this.resize = function() {
			aGm.resize(), aGn.resize()
		}, this.yF = function(ep) {
			2 === ep && aGm.qx[0].pR()
		}, aGm = new qq(L(303), [new q("⬅️ " + L(13), aK1), new q(L(304), function() {
			n.rw(), bf.pr.ry(), n.o(2)
		})]), p5 = [], (aH3 = new on).oq(L(307)), aH3.os(L(308)), p5.push(aH3),
		function(p5) {
			var aH3 = new on,
				g = (aH3.oq(L(328)), b4.data.a7o());
			aH3.oy(new qm({
				qp: g,
				value: b4.data.a7r(g)
			}, function(oA) {
				return bf.pr.ps(12, g[oA].split(":")[0]), !0
			})), p5.push(aH3)
		}(p5),
		function(p5) {
			var aH3 = new on,
				aK4 = (aH3.oq(L(326)), []);
			aH3.p1(new pv([new q(L(327), function(e) {
				bT.aK5();
				for (var a6 = 0; a6 < aK4.length; a6++) aK4[a6].e.value = bT.aK6[a6];
				return b7.pA.zV(e), !0
			}).button]));
			for (var a6 = 0; a6 < bT.aK7.length; a6++) {
				aH3.os(bT.aK7[a6]);
				for (var en = 0; en < 2; en++) {
					var oA = 2 * a6 + en,
						aH4 = new q0({
							value: bT.aK6[oA],
							oA: -1
						});
					aH4.e.aK8 = oA, aK4.push(aH4), aH4.e.addEventListener("keydown", function(e) {
						e.preventDefault();
						var code = e.code;
						e.target.value = code, bT.aK9(e.target.aK8, code)
					}), en && (aH4.e.style.marginLeft = "4%"), aH4.e.style.width = "48%", aH3.p1(aH4)
				}
			}
			p5.push(aH3)
		}(p5), (aH3 = new on).oq(L(309)), bf.dj.data[10].qp = [L(309) + " 1", L(310) + " 1", L(309) + " 2", L(310) + " 2"], aH3.oy(new qm(bf.dj.data[10])), p5.push(aH3), (aH3 = new on).oq(L(311)), bf.dj.data[1].qp = [L(312), L(313), L(314), L(315)],
		aH3.oy(new qm(bf.dj.data[1])), p5.push(aH3), (aH3 = new on).oq(L(316)), bf.dj.data[9].qp = [L(313), L(317), L(318)], aH3.oy(new qm(bf.dj.data[9])), p5.push(aH3), (aH3 = new on).oq(L(319)), bf.dj.data[11].qp = [L(320), L(2), L(321)], aH3.oy(
			new qm(bf.dj.data[11])), p5.push(aH3), (aH3 = new on).oq(L(322)), aH3.p1(new pn(bf.dj.data[2])), p5.push(aH3), (aH3 = new on).oq(L(323)), aH3.p1(new pn(bf.dj.data[7])), p5.push(aH3), (aH3 = new on).oq(L(324)), aH3.p1(new pn(bf.dj.data[
			8])), p5.push(aH3), (aH3 = new on).oq(L(325)), aH3.p1(new q0(bf.dj.data[5])), p5.push(aH3), aGn = new p3(aGm.qw, p5)
}

function aGe() {
	var aHU, aHV, aHW, p5;

	function aHX() {
		aHZ(), 2 !== a8.data.spawningType || b7.pK.yh(a8.data.spawningData) || (a8.data.spawningType = 0), 2 !== a8.data.spawningType && (a8.data.spawningData = null), n.aGl()[19] = null, n.xR()
	}

	function aHZ() {
		2 === a8.data.spawningType && b7.pK.yt(aHW.rK(), a8.data.spawningData, bO.aBc - 1)
	}
	this.show = function() {
		aHU.show(), this.resize()
	}, this.qg = function() {
		aHU.qg()
	}, this.resize = function() {
		aHU.resize(), aHV.resize()
	}, this.yF = function(ep) {
		2 === ep && aHU.qx[0].pR()
	}, aHU = new qq(L(329), [new q("⬅️ " + L(13), aHX)]), aHV = new p3(aHU.qw, (function(p5) {
		var aH3 = new on,
			qp = (aH3.oq(L(199)), [L(224), L(234), L(202)]),
			value = a8.data.spawningType;
		0 === a8.data.gameMode && (qp.splice(1, 1), 0 < value) && (value = 1);
		aH3.oy(new qm({
			qp: qp,
			value: value
		}, function(oA) {
			aHZ(), a8.data.spawningType = oA, 0 === a8.data.gameMode && 1 === oA && (a8.data.spawningType = 2), 2 !== a8.data.spawningType || a8.data.spawningData || (a8.data.spawningData = new Uint16Array(2 * a8.eR)), n.o(24)
		})), aH3.p1(new py), aH3.p1(new pn({
			value: a8.data.selectableSpawn
		}, L(330), function(value) {
			a8.data.selectableSpawn = value
		})), p5.push(aH3)
	}(p5 = []), function(p5) {
		var aH3 = new on;
		aH3.oq("Seed"), aH3.p1(new q0({
			oA: -1,
			value: a8.data.spawningSeed
		}, 1, 0, function(e) {
			var value = Math.abs(Math.floor(e.target.value)) % 16384;
			e.target.value = a8.data.spawningSeed = value
		})), p5.push(aH3)
	}(p5), function(p5) {
		var aH3;
		2 === a8.data.spawningType && ((aH3 = new on).oq("Data"), (aHW = new rB(0, 1, 0, 1)).rI(b7.wu.a0I(a8.data.spawningData, 2)), aH3.p1(aHW), p5.push(aH3))
	}(p5), p5))
}

function aGM() {
	var aGm, aJQ, aJR, qr;

	function aKA(id) {
		0 !== r.id || bf.dj.data[140].value ? 0 === id ? n.o(8, 1, new qM(16)) : n.o(2) : n.l6.aJJ(n.qL, 0 === id ? 16 : 0)
	}
	this.show = function() {
		r.s.setState(12), aGm.show(), this.resize(), this.iQ()
	}, this.qg = function() {
		aGm.qg()
	}, this.resize = function() {
		aGm.resize(), aJQ.resize()
	}, this.iQ = function() {
		8 === aV.xK() && (2 <= bZ.aKF ? aJR[2].pS === u.mg && aJR[2].pT(0) : aJR[2].pS !== u.mg && aJR[2].pT(u.mg), !a8.gf && aH.a1p(a8.eE) ? aJR[1].pS === u.mg && aJR[1].pT(0) : aJR[1].pS !== u.mg && aJR[1].pT(u.mg), !a8.gf && ar.ol(a8.eE) ?
			aJR[0].pS === u.mg && aJR[0].pT(0) : aJR[0].pS !== u.mg && aJR[0].pT(u.mg))
	}, this.yF = function(ep) {
		2 === ep && aGm.qx[0].pR()
	}, aJR = [new q(L(331), function() {
		aKA(0)
	}), new q(L(252), function() {
		n.o(16)
	}), new q(L(287), function() {
		n.o(17)
	}), new q(L(332), function() {
		n.l6.aIN()
	}, 0, 0, 1), new q(L(297), function() {
		n.o(3, 1)
	}), new q(L(333), function() {
		n.o(18)
	}), new q(L(303), function() {
		aKA(1)
	}), new q(L(334), function() {
		n.o(4, 1, new p(L(334), b7.pA.zQ([L(343), L(344), "Discord", L(345), L(248), L(346), L(90), L(347), L(348), L(349)], [bG.a84, bG.xE, bG.a85, bG.aKG, bG.aKH, bG.x0, bG.aKI, bG.aKJ, bG.aKK, bG.aJg]), !1, [new q("⬅️ " + L(13),
			function() {
				n.o(1)
			})]))
	}), new q(L(335), function() {
		n.o(4, 1, new p(L(335), de + "<br><a href='" + bG.aKG + "' target='_blank'>" + bG.aKG + "</a>" +
			"<br><br><b>" + "FX Client v" + __fx.version + "<br><a href='https://discord.gg/dyxcwdNKwK' target='_blank'>FX Client Discord server</a>" +
			"<br><a href='https://github.com/fxclient/FXclient' target='_blank'>Github repository</a></b>", !0, [new q("⬅️ " + L(13), function() {
				n.o(1)
			})]))
	}), new q(L(336), function() {
		n.o(4, 1, new p(L(336), L(350) + "<br>" + L(351), !1, [new q("⬅️ " + L(13), function() {
			n.o(1)
		}), new q(L(352), function() {
			r.s.x9(), n.o(1)
		})]))
	}), new q(L(337), function() {
		r.s.xA(), n.o(4, 1, new p(L(353), L(354) + "<a href='" + bG.aJg + "' target='_blank'>" + bG.aJg + "</a>", !1, [new q("⬅️ " + L(13), function() {
			n.o(1)
		})]))
	})], qr = [new q("⬅️ " + L(13), function() {
		n.l6.a7n()
	})], 8 === aV.xK() && (aJR.unshift(new q(L(340), function() {
		2 <= bZ.aKF && (n.rw(), ba.yI(), bb.dZ = !0)
	}, 0, 1)), aJR.unshift(new q(L(341), function() {
		!a8.gf && aH.a1p(a8.eE) && (b5.gs.nq(), n.rw(), aH.gg) && aH.yI()
	}, 0, 1)), aJR.unshift(new q(L(342), function() {
		!a8.gf && ar.ol(a8.eE) && (b5.gs.ns(), n.rw(), aH.gg) && aH.yI()
	}, 0, 1))), 1 === r.id && 5 <= r.ey && aJR.push(new q(L(338), function() {
		r.s.xB()
	})), aGm = new qq(L(339), qr), aJQ = new pf(aJR, aGm.qw)
}

function aGi() {
	var aHU, aHV, aHW, p5;

	function aHX() {
		aHZ(), 2 !== a8.data.sResourcesType && (a8.data.sResourcesData = null), n.aGl()[19] = null, n.xR()
	}

	function aHZ() {
		2 === a8.data.sResourcesType && b7.pK.yt(aHW.rK(), a8.data.sResourcesData, 2047)
	}
	this.show = function() {
		aHU.show(), this.resize()
	}, this.qg = function() {
		aHU.qg()
	}, this.resize = function() {
		aHU.resize(), aHV.resize()
	}, this.yF = function(ep) {
		2 === ep && aHU.qx[0].pR()
	}, aHU = new qq(L(240), [new q("⬅️ " + L(13), aHX)]), aHV = new p3(aHU.qw, (function(p5) {
		var aH3 = new on;
		aH3.oq(L(199)), aH3.oy(new qm({
			qp: [L(200), L(201), L(202)],
			value: a8.data.sResourcesType
		}, function(oA) {
			aHZ(), 2 !== oA || a8.data.sResourcesData || (a8.data.sResourcesData = new Uint16Array(a8.eR)), a8.data.sResourcesType = oA, n.o(28)
		})), p5.push(aH3)
	}(p5 = []), function(p5) {
		var aH3;
		1 === a8.data.sResourcesType && ((aH3 = new on).oq("Value"), aH3.p1(new q0({
			oA: -1,
			value: a8.data.sResourcesValue
		}, 1, 0, function(e) {
			var value = bH.oi(Math.floor(e.target.value), 0, 2047);
			e.target.value = a8.data.sResourcesValue = value
		})), p5.push(aH3))
	}(p5), function(p5) {
		var aH3;
		2 === a8.data.sResourcesType && ((aH3 = new on).oq("Data"), (aHW = new rB(0, 1, 0, 1)).rI(b7.wu.a0I(a8.data.sResourcesData, 2)), aH3.p1(aHW), p5.push(aH3))
	}(p5), p5))
}

function aGg() {
	var aHU, aHV, aHW, p5;

	function aHX() {
		aHZ(), 2 !== a8.data.tIncomeType && (a8.data.tIncomeData = null), n.aGl()[19] = null, n.xR()
	}

	function aHZ() {
		2 === a8.data.tIncomeType && b7.pK.yt(aHW.rK(), a8.data.tIncomeData, 255)
	}
	this.show = function() {
		aHU.show(), this.resize()
	}, this.qg = function() {
		aHU.qg()
	}, this.resize = function() {
		aHU.resize(), aHV.resize()
	}, this.yF = function(ep) {
		2 === ep && aHU.qx[0].pR()
	}, aHU = new qq(L(238), [new q("⬅️ " + L(13), aHX)]), aHV = new p3(aHU.qw, (function(p5) {
		var aH3 = new on;
		aH3.oq(L(199)), aH3.oy(new qm({
			qp: [L(200), L(201), L(202)],
			value: a8.data.tIncomeType
		}, function(oA) {
			aHZ(), 2 !== oA || a8.data.tIncomeData || (a8.data.tIncomeData = new Uint8Array(a8.eR), a8.data.tIncomeData.fill(32)), a8.data.tIncomeType = oA, n.o(26)
		})), p5.push(aH3)
	}(p5 = []), function(p5) {
		var aH3;
		1 === a8.data.tIncomeType && ((aH3 = new on).oq("Value"), aH3.p1(new q0({
			oA: -1,
			value: a8.data.tIncomeValue
		}, 1, 0, function(e) {
			var value = bH.oi(Math.floor(e.target.value), 0, 255);
			e.target.value = a8.data.tIncomeValue = value
		})), p5.push(aH3))
	}(p5), function(p5) {
		var aH3;
		2 === a8.data.tIncomeType && ((aH3 = new on).oq("Data"), (aHW = new rB(0, 1, 0, 1)).rI(b7.wu.a0I(a8.data.tIncomeData, 4)), aH3.p1(aHW), p5.push(aH3))
	}(p5), p5))
}

function aGY() {
	var aGm, aGn, p5;
	this.show = function() {
		aGm.show(), this.resize()
	}, this.qg = function() {
		aGm.qg()
	}, this.resize = function() {
		aGm.resize(), aGn.resize()
	}, this.yF = function(ep) {
		2 === ep && aGm.qx[0].pR()
	}, aGm = new qq(L(333), [new q("⬅️ " + L(13), function() {
		n.xR()
	})]), aGn = new p3(aGm.qw, ((p5 = []).push(function() {
		function aH7() {
			aKP.button.textContent = L(138), aKN.e.readOnly = !1, aKO.e.readOnly = !1, aH6.pT(1), aH6.button.style.color = u.mV
		}
		var aH3 = new on,
			aKM = (aH3.oq(L(355)), new q0({
				value: bf.dj.data[105].value,
				oA: -1
			})),
			aKN = (aKM.e.readOnly = !0, aH3.p1(aKM), aH3.oq(L(356), "0.8em"), new q0(bf.dj.data[148])),
			aKN = new q0(bf.dj.data[148], 0, void 0, function(e) {
				aH5(bf.dj.data[149].value, e.target.value)
			}),
			aKO = (aH3.p1(aKN), aH3.oq(L(278), "0.8em"), new q0(bf.dj.data[149], 1, void 0, function(e) {
				aH5(e.target.value, bf.dj.data[148].value)
			})),
			aKP = (aH3.p1(aKO), new q(L(138), function(e) {
				return e.textContent === L(138) ? (e.textContent = L(139), aKN.e.readOnly = !0, aKO.e.readOnly = !0, aH6.pT(0), aH6.button.style.color = u.nG, bf.pr.ps(149, aKO.e.value), aH5(bf.dj.data[149].value, bf.dj.data[
					148].value)) : aH7(), !0
			})),
			aH6 = (aH3.p1(new pv([aKP.button])), new q(L(137), function(e) {
				return aKN.e.readOnly && ax.l6.a8f(0) && (b7.pA.zV(e), aH7(), ax.aH8.aH9({
					qN: 0,
					qJ: bf.dj.data[148].value,
					qK: 0,
					value: bH.oi(Math.floor(100 * bf.dj.data[149].value), 0, 4294967295)
				})), !0
			}, 1)),
			ot = (aH3.p1(new pv([aH6.button])), aH3.os()),
			aH5 = function(ex, or) {
				ex = isNaN(ex) ? 0 : Number(ex);
				var ex = Math.max(ex, (bf.dj.data[150].value + 1) / 100),
					aHC = Math.floor(100 * Math.max(1e-4 * ex, bf.dj.data[150].value / 100)) / 100;
				ot.textContent = L(140, [ex.toFixed(2), bf.dj.data[105].value, aHC.toFixed(2), or, (ex - aHC).toFixed(2)])
			};
		return aH5(bf.dj.data[149].value, bf.dj.data[148].value), aH3
	}()), p5))
}

function bn() {
	"function" != typeof Math.log2 && (Math.log2 = function(eb) {
		return Math.log(eb) / Math.log(2)
	}), "function" != typeof Math.log10 && (Math.log10 = function(eb) {
		return Math.log(eb) / Math.log(10)
	}), "function" != typeof Math.sign && (Math.sign = function(eb) {
		return 0 < eb ? 1 : eb < 0 ? -1 : 0
	})
}

function cY() {
	var a52, aKR, aKS, aKT, aKQ = !1;

	function aKU() {
		aKQ = !0, a52 = -1, aKR = new Array(4);
		for (var a6 = 3; 0 <= a6; a6--) aKR[a6] = !1;
		var tf = Math.floor(1 + .02 * au.min);
		aKS = new Array(4), (aKT = new Array(4))[1] = aKT[3] = aKS[0] = aKS[2] = 0, aKT[0] = aKS[3] = -tf, aKS[1] = aKT[2] = tf
	}

	function aKV() {
		if (-1 !== a52)
			if (0 !== a8.w4 && aC.mD()) {
				for (var aKW = !1, a6 = 3; 0 <= a6; a6--) aKR[a6] && (aKW = !0, ht += aKS[a6], hv += aKT[a6], aa.xg(aKS[a6], aKT[a6]), aN.a4k());
				aKW ? bb.dZ = !0 : al.m2()
			} else al.m2()
	}
	this.yD = function(oA) {
		0 !== a8.w4 && aC.mD() && (aKQ || aKU(), aKR[oA] = !0, -1 === a52) && (a52 = setInterval(aKV, 20), aKV())
	}, this.yG = function(oA) {
		if (0 !== a8.w4 && (aKQ || aKU(), aKR[oA] = !1, -1 !== a52)) {
			for (var aKW = !1, a6 = 3; 0 <= a6; a6--) aKW = aKW || aKR[a6];
			aKW || this.m2()
		}
	}, this.m2 = function() {
		if (aKQ && -1 !== a52) {
			for (var a6 = 3; 0 <= a6; a6--) aKR[a6] = !1;
			clearInterval(a52), a52 = -1
		}
	}
}

function cZ() {
	this.l6 = new aKX, this.lA = new aKY, this.nW = new aKZ, this.a8m = new aKa, this.a7k = new aKb, this.aH8 = new aKc, this.o9 = new aKd, this.aIh = new aKe, this.a2Z = new aKf, this.aKg = new aKh, this.aKi = new aKj, this.aKk = new aKl, this.aKm =
		new aKn, this.dR = function() {
			this.l6.dR()
		}
}

function aKX() {
	var aKo, aKq;
	this.a9E = 5, this.a9F = this.a9E - 1, this.a8k = this.a9E + this.a9F, this.a8j = [0, 1, 5, 2, 6, 3, 7, 4, 8], this.aKp = null;

	function dt(a6) {
		return aKq[a6].aKQ && aKo[a6].dt()
	}

	function aKy(xG) {
		aKq[xG].e2 = bb.e2, aKq[xG].aKs = !1
	}
	this.xN = 0, this.xM = 0, this.dR = function() {
		this.aKp = new Array(this.a9E);
		this.aKp[0] = "territorial.io";
		var a6, aEG = av.aEc(0);
		for (av.a0e(0), a6 = 1; a6 < this.a9E; a6++) this.aKp[a6] = aF.vg() + ".territorial.io";
		for (av.a0e(aEG), aKo = new Array(this.a8k), aKq = new Array(this.a8k), a6 = this.a8k - 1; 0 <= a6; a6--) aKq[a6] = {
			aKQ: !1,
			e2: 0,
			aKs: !1
		};
		this.a8l(0, 0)
	}, this.aKt = function(a6) {
		return aKo[a6]
	}, this.aKu = function() {
		return this.xM < this.a9E ? this.xM : this.xM - this.a9F
	}, this.iQ = function() {
		for (var a6 = this.a8k - 1; 0 <= a6; a6--) this.a8f(a6) && bb.e2 > aKq[a6].e2 + 15e3 && ax.nW.aKv(a6, aKq[a6].aKs);
		!this.a8f(0) && bb.e2 > aKq[0].e2 + 8e3 && (aKq[0].e2 = bb.e2, this.a8l(0, 0))
	}, this.a8l = function(xG, aGK) {
		if (aKq[xG].aKQ) {
			if (aKo[xG].dt()) return aKo[xG].aKx(aGK), aKo[xG].a8f();
			aKo[xG].qg()
		}
		return this.aKw(xG, aGK), !1
	}, this.aKw = function(xG, aGK) {
		aKq[xG].aKQ = !0, aKy(xG), aKo[xG] = new aKz, aKo[xG].dR(xG, aGK)
	}, this.aKx = function(xG, aGK) {
		dt(xG) && aKo[xG].aKx(aGK)
	}, this.aL0 = function(xG, aGK) {
		ax.a7k.aL1(xG)
	}, this.a8f = function(a6) {
		return aKq[a6].aKQ && aKo[a6].a8f()
	}, this.send = function(xG, a7) {
		a7.length, aKy(xG), aKo[xG].send(a7)
	}, __fx.customLobby.setSendFunction(this.send), this.xx = function(xG) {
		8 === aV.xK() && (aKq[xG].aKs = !0, ax.lA.aL2 = !0)
	}, this.close = function(xG, aL3) {
		dt(xG) && aKo[xG].close(aL3)
	}, this.aL4 = function(xG, aL3) {
		l.xS(aL3), dt(xG) && aKo[xG].close(aL3)
	}, this.xV = function(aL3) {
		for (var a6 = this.a8k - 1; 0 <= a6; a6--) this.close(a6, aL3)
	}, this.aL5 = function(xG, aL3) {
		for (var a6 = this.a8k - 1; 0 <= a6; a6--) a6 !== xG && this.close(a6, aL3)
	}, this.a0q = function() {
		this.close(this.xN, 3246)
	}, this.aL6 = function(xG, e) {
		aKo[xG].qg(), l.xF(xG, e.code)
	}
}

function aKY() {
	this.aL2 = !1, this.iQ = function() {
		bb.jY() % 250 != 249 || a8.gf || (ax.a7k.aL7(+(this.aL2 && ab.lS[a8.eE]), ag.jc + bJ.l6.oN), this.aL2 = !1)
	}
}

function aKf() {
	function aLT(aLV) {
		var eX = a8.data,
			aLV = (eX.selectedPlayer = bD.oB(aLV), eX.spawningSeed = bD.oB(14), bD.oB(4)),
			aLV = (aLV < 7 ? (eX.gameMode = 1, eX.numberTeams = aLV + 2) : 9 === aLV ? (eX.gameMode = eX.isZombieMode = 1, eX.numberTeams = 2) : (eX.gameMode = 0, eX.battleRoyaleMode = 7 === aLV ? 0 : 10 === aLV ? 1 : 2), eX.isContest = bD.oB(1), bD
				.oB(6));
		return eX.mapType = bO.aEH(aLV) ? 0 : 1, bO.aER(eX, aLV), eX.mapSeed = bD.oB(14), aLV
	}
	this.aL9 = function(xG, a7) {
		bD.dR(a7), 0 === bD.size ? ax.l6.aL4(xG, 3205) : __fx.customLobby.isCustomMessage(a7) || ((0 === bD.oB(1) ? function(xG) {
			var aLD = bD.oB(6);
			0 === aLD ? function(xG) {
					if (0 === xG && 8 !== aV.xK()) {
						n.l6.aJh();
						for (var aLN = bD.oB(12), aLO = bD.oB(6), g = new Array(aLN), a6 = 0; a6 < aLN; a6++) g[a6] = bD.oB(aLO);
						aO.a59(g)
					}
				}(xG) : 2 === aLD ? ax.aKg.aLF(xG) : 3 === aLD || 4 === aLD ? at.dR() : 9 === aLD ? ax.aKi.aLG(xG) : 10 === aLD ? ax.aKk.aLH() : 11 === aLD ? ax.aKi.aLI() : 12 === aLD ? ax.aKk.aLJ() : 13 === aLD ? ax.aKm.aLK() :
				14 === aLD ? ax.aKm.aLL() : 15 === aLD && ax.aKi.aLM()
		} : function(xG) {
			if (8 !== aV.xK() && !at.a9G()) return;
			if (xG !== ax.l6.xN) ax.l6.aL4(xG, 3244);
			else if (0 === bD.oB(1)) bb.wD.aLW(bD.a7);
			else {
				var a6, xG = bD.oB(2);
				if (0 === xG) {
					var nk, nW = bD.oB(9);
					0 !== ab.lS[nW] && 0 !== ab.lS[a8.eE] && (nk = bD.oB(10), aI.nj(nW, a8.eE, nk), aa.oj(nW, 1, nk))
				} else if (1 === xG) ! function() {
					var nW = bD.oB(9);
					0 !== ab.lS[nW] && 0 !== ab.lS[a8.eE] && b2.aE0(0, [nW], !0) && aI.o2(nW, 1)
				}();
				else if (2 === xG) ! function() {
					var nW = bD.oB(9),
						target = bD.oB(9);
					0 !== ab.lS[nW] && 0 !== ab.lS[target] && 0 !== ab.lS[a8.eE] && b2.aE0(1, [nW], !0) && (aa.oj(nW, 3, 96), aa.oj(target, 4, 96), aI.a2g(nW, target))
				}();
				else if (a4 && !a5) {
					var eU = 540;
					for (b9.a2(17287), b9.a3(1, 0), b9.a3(6, 10), eU = Math.min(b5.nT.oD.length, 540), a6 = 0; a6 < eU; a6++) b9.aLc(32, b5.nT.oD[a6]);
					ax.l6.send(ax.l6.xN, b9.a7)
				}
			}
		})(xG), bb.aLC())
	}, this.a9H = function(a7) {
		if (bD.dR(a7), bD.oA = 1, 3 === bD.oB(6)) {
			bD.oA += 20;
			var eX = a8.data = new a0Y,
				a7 = aLT(9),
				aLU = eX.humanCount = bD.oB(9) + 1;
			eX.selectableSpawn = 1 === eX.gameMode || aLU < 100, eX.colorsData = new Uint32Array(aLU), eX.playerNamesData = new Array(aLU);
			for (var a6 = 0; a6 < aLU; a6++) bD.oA++, eX.colorsData[a6] = bD.oB(18), eX.playerNamesData[a6] = bC.sH.sJ(bD.oB(5));
			aV.a8z(), bO.a2(a7, eX.mapSeed), a8.a0c()
		} else ! function() {
			bD.oA += 20;
			var eX = a8.data = new a0Y,
				a9w = aLT(1);
			eX.humanCount = 2;
			eX.selectableSpawn = 1, eX.elo = new Uint16Array(2), eX.colorsData = new Uint32Array(2), eX.playerNamesData = new Array(2);
			for (var a6 = 0; a6 < 2; a6++) bD.oA++, eX.colorsData[a6] = bD.oB(18), eX.elo[a6] = bD.oB(14), eX.playerNamesData[a6] = bC.sH.sJ(bD.oB(5));
			aV.a8z(), bO.a2(a9w, eX.mapSeed), a8.a0c()
		}()
	}, this.a9C = function() {
		bD.oA = 1;
		var aLD = bD.oB(6),
			aLR = bD.oB(10);
		return ax.l6.xM > ax.l6.a9F && (aLR += ax.l6.a9F), ax.l6.xM === aLR ? (ax.l6.xN = aLR, !1) : (ax.l6.close(ax.l6.xM, 3247), ax.l6.xN = aLR, at.a97 = bD.oB(10), at.a98 = bD.oB(3 === aLD ? 9 : 1), ax.l6.a8l(aLR, 5) && ax.nW.aLS(), !0)
	}
}

function aKl() {
	this.aLH = function() {
		bf.l6.ro(), bf.pr.ps(105, bB.qO.qP(bB.qO.qQ(5))), bf.pr.ps(106, bB.qO.qP(bB.qO.qQ(8))), bf.pr.ps(109, bD.oB(30)), bf.pr.ps(108, bf.dj.data[109].value), bf.pr.ps(111, bf.dj.data[109].value + 1), bf.pr.ps(107, 0), bf.pr.ps(110, "")
	}, this.aLJ = function() {
		var aLf, aLg, aLh, aLi, aLe;
		bD.size < b9.aLd(29) ? ax.l6.aL4(0, 3254) : (aLe = bD.oB(5), aLf = bD.oB(3), aLg = bD.oB(3), aLh = bD.oB(3), aLi = bD.oB(8), bD.aLj(197 + 16 * (aLe + aLf + aLg + aLh + aLi) + 32 + 32 + 30 + 128 + 32 + 30 + 10 + 32 + 2 + 10 + 5) ? (aLe = {
			qK: bD.oB(30),
			s2: bD.oB(16),
			s3: bD.oB(30),
			s4: bD.oB(30),
			s5: bD.oB(30),
			s6: bD.aLk(32),
			username: bC.sH.sJ(aLe),
			s7: bC.sH.sJ(aLf),
			s8: bC.sH.sJ(aLg),
			s9: bD.aLk(32),
			sA: bD.aLk(32),
			sB: bD.oB(30),
			sC: bD.aLk(32),
			sD: bD.aLk(32),
			sE: bD.aLk(32),
			sF: bD.aLk(32),
			aHI: bD.aLk(32),
			aHJ: bD.aLk(30),
			aHB: bD.aLk(10),
			aHR: bD.aLk(32),
			aHS: bC.sH.sJ(aLh),
			aHM: bD.aLk(2),
			aHN: bD.aLk(10),
			aHK: bC.sH.sJ(aLi),
			aHO: bD.aLk(5)
		}, bf.pr.ps(150, aLe.aHB), 8 === n.qL && (25 === n.aAV().aIc ? (aLe.aGo = !0, n.l6.aGV = aLe, n.aAV().aIr(25, !1)) : (aLe.aGo = !1, aLe.qJ = bf.dj.data[105].value, n.l6.aGS = aLe, bf.pr.s1(aLe), n.aAV().aIr(16, !0)))) : ax.l6.aL4(
			0, 3267))
	}
}

function aKn() {
	this.aLK = function() {
		var a6;
		if (bD.size < b9.aLd(39)) ax.l6.aL4(0, 3259);
		else {
			var qc = bD.oB(6),
				eU = bD.oB(10),
				h9 = bD.oB(16);
			if (bD.aLj(39 + 16 * h9 + eU * (0 === qc ? 111 : 1 === qc ? 101 : 2 === qc || 3 === qc ? 127 : 212))) {
				var data = [];
				if (0 === qc)
					for (a6 = 0; a6 < eU; a6++) data.push([bD.oB(30), bC.sH.sJ(bD.oB(5)), bD.oB(16), bD.oB(30), bD.oB(30)]);
				else if (1 === qc)
					for (a6 = 0; a6 < eU; a6++) data.push([bD.oB(16), bC.sH.sJ(bD.oB(3)), bD.oB(16), bC.sH.sJ(bD.oB(5)), bD.oB(31), bD.oB(30)]);
				else if (2 === qc || 3 === qc)
					for (a6 = 0; a6 < eU; a6++) data.push([bD.oB(30), bC.sH.sJ(bD.oB(5)), bD.aLk(32), bD.oB(30), bD.oB(30)]);
				else
					for (a6 = 0; a6 < eU; a6++) data.push([bD.oB(20), bD.oB(30), bD.oB(30), bD.oB(30), bD.oB(30), bD.aLk(32), bD.oB(30), bC.sH.sJ(bD.oB(5)), bC.sH.sJ(bD.oB(5))]);
				8 === n.qL && n.aAV().aIr(21, !0, {
					qc: qc,
					data: data
				})
			} else ax.l6.aL4(0, 3260)
		}
	}, this.aLL = function() {
		if (bD.size < b9.aLd(29)) ax.l6.aL4(0, 3265);
		else {
			var aLl = bD.oB(4),
				aLm = bD.oB(7),
				aLn = bD.oB(11);
			if (bD.aLj(29 + 16 * aLm + 16 * aLn + 11 * aLl)) {
				for (var data = [], a6 = 0; a6 < aLl; a6++) {
					for (var aLo = bC.sH.sJ(bD.oB(3)), aLp = bD.oB(8), aHx = [], en = 0; en < aLp; en++) aHx.push(bD.oB(16));
					data.push({
						name: "[" + aLo + "]",
						aHx: aHx
					})
				}
				8 === n.qL && n.aAV().aIr(23, !0, data)
			} else ax.l6.aL4(0, 3266)
		}
	}
}

function aKh() {
	this.aLF = function(xG) {
		var a6, a9Y, aLq, aLr, aLs;
		if (xG !== ax.l6.xM) ax.l6.close(xG, 3239);
		else if (6 === aV.xK() && ap.dR(), 7 !== aV.xK()) ax.l6.close(xG, 3251);
		else {
			for (a9Y = [0, 0, 0, 0], aLq = bD.oB(6), a6 = 0; a6 < 4; a6++) a9Y[a6] = bD.oB(aLq);
			for (aLr = bD.oB(4), aLs = [], a6 = 0; a6 < aLr; a6++) {
				aLs.push({
					id: bD.oB(5),
					a9u: bD.oB(4),
					isContest: 1 === bD.oB(1),
					eA: bD.oB(6),
					mapSeed: bD.oB(14),
					a9y: bD.oB(aLq),
					a9z: bD.oB(9) + 1,
					a8u: bD.oB(10)
				});
				for (var aA0 = bD.oB(3), aA1 = new Array(aA0), aA2 = new Array(aA0), en = 0; en < aA0; en++) aA2[en] = bD.oB(9) + 1, aA1[en] = bC.sH.sJ(bD.oB(3));
				aLs[a6].aA0 = aA0, aLs[a6].aA1 = aA1, aLs[a6].aA2 = aA2
			}
			ap.ps(a9Y, aLs)
		}
	}
}

function aKj() {
	this.aLG = function(xG) {
		var aLY, aLt;
		bD.aLj(70) ? (aLY = bD.oB(3), aLt = be.aLu.iQ(bD.oB(30), bD.oB(30)), ax.a7k.aLv(xG, aLt, aLY), 0 < aLY || (0 === xG && 0 === bf.dj.data[105].value.length ? ax.a7k.aIf(0) : ax.aH8.aLw(xG), 4 === ax.l6.aKt(xG).aLx() ? 6 === aV.xK() && ax
			.a8m.a8n(xG) : 5 !== ax.l6.aKt(xG).aLx() || 8 !== aV.xK() && 10 !== aV.xK() || ax.nW.aLS())) : ax.l6.aL4(xG, 3269)
	}, this.aLI = function() {
		var id = bD.oB(6);
		0 === id ? (aO.a55 || ax.a7k.aIf(1), b4.a7i(), 8 === n.qL && n.aAV().aIq()) : 21 === id ? 8 === n.qL && n.aAV().aIr(17) : 22 === id && (bf.pr.ps(106, bf.dj.data[110].value), bf.pr.ps(110, ""), 8 === n.qL) && n.aAV().aIr(16)
	}, this.aLM = function() {
		var eU = bD.oB(16),
			aLy = bD.oB(16);
		if (bD.aLj(55 + 10 * eU + 16 * aLy)) {
			for (var g = [], a6 = 0; a6 < eU; a6++) g.push(bC.sH.sJ(bD.oB(10)));
			b4.a7m(g)
		} else ax.l6.aL4(xG, 3270)
	}
}

function aKZ() {
	this.aKv = function(xG, aKs) {
		b9.a2(8), b9.a3(1, 0), b9.a3(6, 4), b9.a3(1, aKs ? 1 : 0), ax.l6.send(xG, b9.a7)
	}, this.aLS = function() {
		b9.a2(58), b9.a3(1, 0), b9.a3(6, 5), b9.a3(8, ax.l6.aKu()), b9.a3(10, at.a97), b9.a3(9, at.a98), b9.a3(10, df), b9.a3(14, h.dg), ax.l6.send(ax.l6.xN, b9.a7)
	}, this.nX = function(eG) {
		b9.a2(27), b9.a3(1, 1), b9.a3(4, 0), b9.a3(22, eG), ax.l6.send(ax.l6.xN, b9.a7)
	}, this.nY = function(hs, ij) {
		b9.a2(25), b9.a3(1, 1), b9.a3(4, 1), b9.a3(10, hs), b9.a3(10, ij), ax.l6.send(ax.l6.xN, b9.a7)
	}, this.nc = function(hs, na) {
		b9.a2(24), b9.a3(1, 1), b9.a3(4, 2), b9.a3(10, hs), b9.a3(9, na), ax.l6.send(ax.l6.xN, b9.a7)
	}, this.nd = function(hs, eG) {
		b9.a2(37), b9.a3(1, 1), b9.a3(4, 3), b9.a3(10, hs), b9.a3(22, eG), ax.l6.send(ax.l6.xN, b9.a7)
	}, this.ng = function(lq, eG) {
		b9.a2(37), b9.a3(1, 1), b9.a3(4, 4), b9.a3(10, lq), b9.a3(22, eG), ax.l6.send(ax.l6.xN, b9.a7)
	}, this.ni = function(ij) {
		b9.a2(15), b9.a3(1, 1), b9.a3(4, 5), b9.a3(10, ij), ax.l6.send(ax.l6.xN, b9.a7)
	}, this.nm = function(oA) {
		b9.a2(15), b9.a3(1, 1), b9.a3(4, 6), b9.a3(10, oA), ax.l6.send(ax.l6.xN, b9.a7)
	}, this.np = function(no) {
		b9.a2(6), b9.a3(1, 1), b9.a3(4, 7), b9.a3(1, no), ax.l6.send(ax.l6.xN, b9.a7)
	}, this.nr = function() {
		b9.a2(5), b9.a3(1, 1), b9.a3(4, 8), ax.l6.send(ax.l6.xN, b9.a7)
	}, this.nt = function(hs, eG, ij) {
		b9.a2(47), b9.a3(1, 1), b9.a3(4, 10), b9.a3(10, hs), b9.a3(10, ij), b9.a3(22, eG), ax.l6.send(ax.l6.xN, b9.a7)
	}, this.o0 = function(aLz, aM0) {
		b9.a2(24), b9.a3(1, 1), b9.a3(4, 15), b9.a3(9, aM0), b9.a3(10, aLz), ax.l6.send(ax.l6.xN, b9.a7)
	}, this.o3 = function(a2Z) {
		b9.a2(14), b9.a3(1, 1), b9.a3(4, 14), b9.a3(9, a2Z), ax.l6.send(ax.l6.xN, b9.a7)
	}, this.o7 = function(aM1, target) {
		var a6, eU = aM1.length;
		for (b9.a2(14 + 9 * eU), b9.a3(1, 1), b9.a3(4, 13), b9.a3(9, target), a6 = 0; a6 < eU; a6++) b9.a3(9, aM1[a6]);
		ax.l6.send(ax.l6.xN, b9.a7)
	}
}

function aKc() {
	this.aM2 = function() {
		b9.a2(39), b9.a3(1, 0), b9.a3(6, 16), ax.a7k.aM3(), ax.l6.send(0, b9.a7)
	}, this.aLw = function(xG) {
		b9.a2(115), b9.a3(1, 0), b9.a3(6, 17), bC.qO.sV(bf.dj.data[105].value, 5), bC.qO.sV(bf.dj.data[106].value, 8), b9.a3(30, bf.dj.data[109].value), ax.l6.send(xG, b9.a7)
	}, this.aIt = function() {
		b9.a2(55), b9.a3(1, 0), b9.a3(6, 18), bC.qO.sU(bf.dj.data[110].value), ax.l6.send(0, b9.a7)
	}, this.aIg = function(username) {
		b9.a2(12 + 16 * username.length), b9.a3(1, 0), b9.a3(6, 20), ax.a7k.aM5(username), ax.l6.send(0, b9.a7)
	}, this.aIp = function(zw) {
		var eU = zw.or.length;
		b9.a2(21 + 16 * eU), b9.a3(1, 0), b9.a3(6, 29), b9.a3(6, zw.qN), b9.a3(8, eU), bB.sH.sU(zw.or), ax.l6.send(0, b9.a7)
	}, this.aHG = function(data) {
		b9.a2(73), b9.a3(1, 0), b9.a3(6, 25), b9.a3(6, data.qN), bC.qO.sV(data.qJ, 5), b9.a3(30, data.qK), ax.l6.send(0, b9.a7)
	}, this.aH9 = function(data) {
		b9.a2(105), b9.a3(1, 0), b9.a3(6, 27), b9.a3(6, data.qN), bC.qO.sV(data.qJ, 5), b9.a3(30, data.qK), b9.aLc(32, data.value), ax.l6.send(0, b9.a7)
	}
}

function aKd() {
	this.o8 = function() {
		var g3, eU = a8.jb,
			vw = bN.result.vw,
			aM6 = vw.length,
			wi = (b9.a2(40 + 16 * eU + aM6 * (33 + 3 * (a8.jv < 7))), b9.a3(1, 1), b9.a3(4, 12), b9.a3(10, aM6), b9.a3(1, +(2 === a8.w1)), b9.a3(24, bN.result.wV), ab.wi);
		for (a6 = 0; a6 < eU; a6++) b9.a3(16, wi[a6]);
		var gJ = ab.gJ;
		for (a6 = 0; a6 < aM6; a6++) g3 = vw[a6], b9.a3(9, g3), b9.a3(24, gJ[g3]);
		if (a8.jv < 7)
			for (var eS = bc.eS, k1 = bc.k1, a6 = 0; a6 < aM6; a6++) b9.a3(3, 7 & k1[eS[vw[a6]]]);
		ax.l6.send(ax.l6.xN, b9.a7)
	}
}

function aKe() {
	this.aIi = function(qc, qd, qe) {
		b9.a2(75), b9.a3(1, 0), b9.a3(6, 21), b9.a3(6, qc), b9.a3(1, +(qd < 0)), b9.a3(1, +(qe < 0)), b9.a3(30, Math.abs(qd)), b9.a3(30, Math.abs(qe)), ax.l6.send(0, b9.a7)
	}, this.aIj = function(qc, aIk, aIl) {
		b9.a2(18 + 16 * aIk.length + 30), b9.a3(1, 0), b9.a3(6, 22), b9.a3(6, qc), ax.a7k.aM5(aIk), b9.a3(30, aIl), ax.l6.send(0, b9.a7)
	}, this.aIo = function(qc, aIk, aIl) {
		b9.a2(73), b9.a3(1, 0), b9.a3(6, 28), b9.a3(6, qc), bC.qO.sV(aIk, 5), b9.a3(30, aIl), ax.l6.send(0, b9.a7)
	}, this.aIm = function(aHw, wq) {
		for (var eU = wq.length, h9 = 0, a6 = 0; a6 < eU; a6++) h9 += wq[a6].length;
		for (b9.a2(21 + 3 * eU + 16 * h9), b9.a3(1, 0), b9.a3(6, 23), b9.a3(3, aHw), b9.a3(4, eU), b9.a3(7, h9), a6 = 0; a6 < eU; a6++) b9.a3(3, wq[a6].length), bB.sH.sU(wq[a6]);
		ax.l6.send(0, b9.a7)
	}, this.aIn = function(aHw, qd, qe) {
		b9.a2(52), b9.a3(1, 0), b9.a3(6, 24), b9.a3(3, aHw), b9.a3(1, +(qd < 0)), b9.a3(1, +(qe < 0)), b9.a3(20, Math.abs(qd)), b9.a3(20, Math.abs(qe)), ax.l6.send(0, b9.a7)
	}
}

function aKa() {
	this.a8n = function(xG) {
		var username = bf.dj.data[122].value.slice(0, 20),
			username = (b9.a2(22 + 16 * username.length + 18), b9.a3(1, 0), b9.a3(6, 1), b9.a3(10, df), ax.a7k.aM5(username), b7.color.z6(bf.l6.rv()));
		b9.a3(6, username[0]), b9.a3(6, username[1]), b9.a3(6, username[2]), ax.l6.xM = xG, ax.l6.send(xG, b9.a7)
	}, this.aA7 = function(a9t) {
		return b9.a2(11), b9.a3(1, 0), b9.a3(6, 2), b9.a3(4, a9t), ax.l6.send(ax.l6.xM, b9.a7), !0
	}
}

function aKb() {
	this.aL1 = function(xG) {
		b9.a2(39), b9.a3(1, 0), b9.a3(6, 13), b9.a3(14, h.dg), b9.a3(4, r.id), b9.a3(7, r.ey), b9.a3(1, +a4), b9.a3(1, +a5), b9.a3(5, (new Date).getHours() % 24), ax.l6.send(xG, b9.a7)
	}, this.aLv = function(xG, aLt, aLY) {
		b9.a2(70), b9.a3(1, 0), b9.a3(6, 14), b9.a3(3, aLY), b9.a3(30, aLt[0]), b9.a3(30, aLt[1]), ax.l6.send(xG, b9.a7)
	}, this.aIf = function(id) {
		b9.a2(13), b9.a3(1, 0), b9.a3(6, 15), b9.a3(6, id), ax.l6.send(0, b9.a7)
	}, this.a7l = function(id, or) {
		var eU = Math.min(or.length, 63);
		b9.a2(19 + 16 * eU), b9.a3(1, 0), b9.a3(6, 26), b9.a3(6, id), b9.a3(6, eU), bB.sH.sU(or), ax.l6.send(0, b9.a7)
	}, this.aM8 = function(aLR, p2) {
		b9.a2(7 + 26 * p2.length), b9.a3(1, 0), b9.a3(6, 9);
		for (var a6 = 0; a6 < p2.length; a6++) b9.a3(16, p2[a6][0]), b9.a3(10, p2[a6][1]);
		ax.l6.send(aLR, b9.a7)
	}, this.aL7 = function(aM9, aMA) {
		b9.a2(20), b9.a3(1, 0), b9.a3(6, 19), b9.a3(1, aM9), b9.a3(12, aMA), ax.l6.send(ax.l6.xN, b9.a7)
	}, this.aM5 = function(username) {
		b9.a3(5, username.length), bB.sH.sU(username)
	}
}

function aKz() {
	var xG, aGK, aMB, aMC = ["wss://", "/s50/", "/s51/", "/s52/"];

	function aL0() {
		ax.l6.aL0(xG, aGK)
	}

	function aMH(e) {
		ax.a2Z.aL9(xG, new Uint8Array(e.data))
	}

	function aMI() {}

	function aL6(e) {
		ax.l6.aL6(xG, e)
	}
	this.dR = function(oA, aMD) {
		xG = oA, aGK = aMD;
		oA = aMC[0];
		xG < ax.l6.a9E ? oA += ax.l6.aKp[xG] + aMC[1 + dd] : oA += ax.l6.aKp[0] + "/i" + (1 + dd) + (xG - ax.l6.a9F) + "/", (aMB = new WebSocket(__fx.customLobby.isActive() && xG === 1 ? __fx.customLobby.getSocketURL() : oA)).binaryType =
			"arraybuffer", aMB.onopen = aL0, aMB.onmessage = aMH, aMB.onclose = aL6, aMB.onerror = aMI
	}, this.aMF = function() {
		return aMB.readyState === aMB.CONNECTING
	}, this.a8f = function() {
		return aMB.readyState === aMB.OPEN
	}, this.dt = function() {
		return this.aMF() || this.a8f()
	}, this.aKx = function(aMD) {
		aGK = aMD
	}, this.aLx = function() {
		return aGK
	}, this.send = function(a7) {
		this.a8f() && aMB.send(a7)
	}, this.close = function(aL3) {
		this.dt() && (aMB.close(aL3), this.qg())
	}, this.qg = function() {
		aMB.onopen = null, aMB.onmessage = null, aMB.onclose = null, aMB.onerror = null
	}
}

function dC() {
	var aMJ = !1,
		a2u = 0,
		a0 = 0,
		qT = 0,
		gap = 0,
		canvas = null,
		uQ = null,
		yi = null;

	function aML() {
		for (var a9j, aMP = 0, eU = 0, ep = Math.floor(a0 / 2), hG = Math.floor(qT / 2), a9i = 1.5 * Math.PI, a6 = a8.tU; 0 <= a6; a6--) eU += yi[a6], 0 === yi[a6] && aMP++;
		if (aMJ = !1, uQ.clearRect(0, 0, a0, a0), uQ.fillStyle = u.mS, uQ.fillRect(0, 0, a0, a0), uQ.fillStyle = u.mV, uQ.fillRect(0, 0, a0, gap), uQ.fillRect(0, 0, gap, a0), uQ.fillRect(a0 - gap, 0, gap, a0), uQ.fillRect(0, a0 - gap, a0, gap), 0 <
			eU)
			if (aMP === a8.tU) {
				for (a6 = a8.tU; 0 <= a6; a6--)
					if (0 < yi[a6]) {
						! function(a6, ep, hG) {
							uQ.fillStyle = bc.a9n[bc.k1[a6]], uQ.beginPath(), uQ.arc(ep, ep, hG, 0, 2 * Math.PI), uQ.fill()
						}(a6, ep, hG);
						break
					}!
				function(ep) {
					var fontSize = ep / 3;
					uQ.font = b7.pA.qR(1, fontSize), uQ.fillStyle = u.mV, uQ.fillText("100%", ep, ep + .1 * fontSize)
				}(ep)
			} else {
				for (a6 = 0; a6 <= a8.tU; a6++) 0 < yi[a6] && (! function(a6, ep, hG, a9i, a9j) {
					uQ.fillStyle = bc.a9n[bc.k1[a6]], uQ.beginPath(), uQ.arc(ep, ep, hG, a9i, a9j), uQ.lineTo(ep, ep), uQ.fill()
				}(a6, ep, hG, a9i, a9j = a9i + 2 * Math.PI * yi[a6] / eU), function(ep, hG, a9i, a9j) {
					var ex = (a9j - a9i) / (2 * Math.PI),
						fontSize = +hG * Math.min(ex, .37);
					fontSize < 8 || (a9i = (a9i + a9j) / 2, a9j = Math.floor(100 * ex + .5) + "%", hG *= .525 - Math.max(.6 * (ex - .7), 0), uQ.font = b7.pA.qR(1, fontSize), uQ.fillStyle = u.mV, uQ.fillText(a9j, ep + Math.cos(a9i) * hG, ep +
						Math.cos(a9i + 1.5 * Math.PI) * hG))
				}(ep, hG, a9i, a9j), 0 !== a6 && a9l(ep, hG, a9i), a9i = a9j);
				a9l(ep, hG, 1.5 * Math.PI)
			}!
		function(ep, hG) {
			uQ.beginPath(), uQ.arc(ep, ep, hG, 0, 2 * Math.PI), uQ.stroke()
		}(ep, hG)
	}

	function a9l(ep, hG, a9o) {
		uQ.beginPath(), uQ.moveTo(ep, ep), uQ.lineTo(ep + Math.cos(a9o) * hG, ep + Math.cos(a9o + 1.5 * Math.PI) * hG), uQ.stroke()
	}
	this.dR = function() {
		if (a8.ib) {
			a2u = 0, yi = new Uint32Array(a8.tU + 1);
			for (var a6 = a8.tU; 0 <= a6; a6--) yi[a6] = 0;
			for (a6 = ag.jc - 1; 0 <= a6; a6--) yi[bc.eS[ag.je[a6]]] += 1;
			this.resize()
		} else yi = uQ = canvas = null
	}, this.a3i = function() {
		return a0
	}, this.resize = function() {
		a8.ib && (a0 = Math.floor(r.s.v8() && !a8.lx ? .18 * au.min : .13 * au.pC), a0 = (a0 *= 1 + (.5 + .2 * r.s.v8()) * a8.lx) + a0 % 2, qT = Math.floor(7 * a0 / 8), (canvas = canvas || document.createElement("canvas")).width = a0, canvas
			.height = a0, uQ = canvas.getContext("2d", {
				alpha: !0
			}), gap = Math.max(1, .015 * a0), uQ.lineWidth = gap, uQ.strokeStyle = u.mV, b7.pA.textAlign(uQ, 1), b7.pA.textBaseline(uQ, 1), aML())
	}, this.we = function() {
		var e3, ko = this.kp();
		return bc.k1[ko] || (ko = function() {
			for (var ko = -1, a6 = a8.tU; 1 <= a6; a6--)(-1 === ko || yi[a6] > yi[ko]) && (ko = a6);
			return ko
		}(), e3 = ab.gJ[ks[0]], -1 !== ko && yi[ko] > e3) ? yi[ko] : e3
	}, this.x4 = function() {
		return a2u = 31, this.iQ(), this.kp()
	}, this.kp = function() {
		for (var ko = 0, a6 = a8.tU; 0 < a6; a6--) yi[a6] > yi[ko] && (ko = a6);
		return ko
	}, this.kq = function(aMN) {
		for (var fy = 0, jd = ag.je, eS = bc.eS, eU = ag.jc, f9 = bK.f9, a6 = 0; a6 < eU; a6++) {
			var g3 = jd[a6];
			eS[g3] === aMN && (f9[fy++] = g3)
		}
		bK.f1[0] = fy
	}, this.iQ = function() {
		if (a8.ib && 32 <= ++a2u) {
			a2u = 0;
			for (var a6 = a8.tU; 0 <= a6; a6--) yi[a6] = 0;
			for (a6 = ag.jc - 1; 0 <= a6; a6--) yi[bc.eS[ag.je[a6]]] += ab.gJ[ag.je[a6]];
			aMJ = !0
		}
	}, this.lF = function() {
		a8.ib && aMJ && aML()
	}, this.r9 = function() {
		a8.ib && (a8.lx ? rA.drawImage(canvas, bY.gap, bY.gap) : rA.drawImage(canvas, bY.gap, a3j + 2 * bY.gap))
	}
}

function cv() {
	function aMU(key) {
		var aJw;
		return "undefined" == typeof URLSearchParams || (aJw = window.location.search, "string" != typeof(aJw = new URLSearchParams(aJw).get(key))) || aJw.length < 1 ? null : aJw
	}
	this.da = function() {
		if (0 !== r.id) return !1;
		if (! function() {
				var value = aMU("account");
				if (!value && !(value = aMU("a"))) return void bE.clear();
				return bE.clear(), n.o(8, n.qL, new qM(1e3, {
					qN: 0,
					qJ: value,
					qK: 0
				})), 1
			}()) {
			var value = aMU("replay");
			if (!this.clear()) return !1;
			if (!value) return !1;
			n.o(3, 0, value)
		}
		return !0
	}, this.clear = function() {
		var xD = new URL(window.location.href);
		xD.search = "";
		try {
			return history.replaceState(null, "", xD.toString()), !0
		} catch (e) {
			console.log("error 352: " + e)
		}
		return !1
	}, this.aHT = function(key, value) {
		if (0 === r.id) try {
			var xD = new URL(window.location.href),
				g3 = xD.searchParams;
			g3.set(key, value), xD.search = g3.toString(), history.replaceState(null, "", xD.toString())
		} catch (e) {
			console.log("error 358: " + e)
		}
	}
}

function ca() {
	var aMW, g;
	this.dR = function() {
		for (var a6 = (g = new Uint16Array(101)).length - 1; 0 <= a6; a6--) g[a6] = bH.ew(32768 * a6, 100);
		this.a0e(0)
	}, this.value = function(g3) {
		return g[g3]
	}, this.aEc = function() {
		return bH.ew(aMW - 1, 2)
	}, this.a0e = function(aEG) {
		aMW = 2 * aEG % 32768 + 1
	}, this.random = function() {
		return aMW = 167 * aMW % 32768
	}, this.it = function(lN) {
		return bH.ew(lN * this.random(), 32768)
	}, this.jT = function(g3) {
		return 0 !== g3 && this.random() < this.value(g3)
	}, this.iC = function(en, eo) {
		return en + this.it(eo - en)
	}
}

function cr() {
	this.oP = new aMX, this.a0p = new aMY, this.aC1 = new aMZ, this.dR = function() {
		a8.gf || this.oP.dR()
	}, this.iQ = function() {
		a8.gf || (this.oP.iQ(), 3 !== n.qL) || bb.jY() % 15 != 5 && 2 !== a8.w4 || n.aAV().aJx()
	}, this.aK0 = function() {
		0 === a8.w4 && aV.a8z(), a8.a0Z.a0w(), a8.data.canvas = null, ax.l6.close(ax.l6.xN, 3257), ax.l6.xN = 0, a8.data.isReplay = 1, a8.a0c()
	}, this.aJz = function(or) {
		var a6 = or.indexOf("=");
		return 0 <= a6 ? or.substring(a6 + 1) : or
	}, this.aJy = function(or) {
		return "https://territorial.io/?replay=" + or
	}
}

function aMX() {
	this.aMb = null, this.aMc = null, this.aMd = null, this.aMe = null, this.aMf = null, this.aMg = null, this.a0o = "";
	var aMh = 0;
	this.dR = function() {
		this.aMb = [], this.aMc = [], this.aMd = [], this.aMe = [], this.aMf = [0], this.aMg = [0], aMh = 0, this.a0o = ""
	}, this.oQ = function(id, fD, fF, fH) {
		a8.gf || 2 === a8.w4 || (0 === this.aMf[aMh] && (this.aMg[aMh] ? (this.aMf.push(1), this.aMg.push(0), aMh++) : this.aMf[aMh] = 1), this.aMb.push(id), this.aMc.push(fD), this.aMd.push(void 0 === fF ? 0 : fF), this.aMe.push(void 0 === fH ?
			0 : fH), this.aMg[aMh]++)
	}, this.iQ = function() {
		0 === this.aMf[aMh] ? this.aMg[aMh]++ : (this.aMf.push(0), this.aMg.push(0), aMh++)
	}
}

function aMZ() {
	var aMi = 0;

	function aMm(or, id) {
		aMi || (id ? 1 === id ? aI.a20 = L(358) + ": " + or : n.o(4, 3, new p(L(359), or, 1)) : n.o(4, 3, new p("⚠️ " + L(357), or, 1)))
	}
	this.sZ = function(or, aMj) {
		var p2;
		return aMi = aMj, bC.qO.sR(bC.qO.sP(bC.qO.sN(or))), aI.a20 = "", !(! function() {
			if (bD.size < 10) aMm("File Too Small");
			else {
				var aMo = bD.oB(12),
					aMA = (aMo !== h.rVersion && aMm("Incompatible Version " + aMo + " " + h.rVersion, 1), bD.oB(12)),
					aMp = bD.oB(31);
				if (aMp !== bD.size) aMm("Size Error: " + aMp + " " + bD.size);
				else if (function(j5, aMo) {
						for (var g3 = bD.a7, eU = bD.size, aMA = aMo, a6 = 3; a6 < eU; a6++) aMA = aMA + g3[a6] & 4095;
						return aMA === j5 || (aMm("Hash Error: " + aMA + " " + j5 + " " + eU), !1)
					}(aMA, aMo)) return 1
			}
			return
		}() || (aMj = bD, (p2 = a8.data = new a0Y).mapType = aMj.oB(2), p2.mapProceduralIndex = aMj.oB(8), p2.mapRealisticIndex = aMj.oB(8), p2.mapSeed = aMj.oB(14), p2.mapName = aMj.aMr(5), 2 === p2.mapType && aMj.aMs(), p2
			.passableWater = aMj.oB(1), p2.passableMountains = aMj.oB(1), p2.playerCount = aMj.oB(10), p2.humanCount = aMj.oB(10), p2.selectedPlayer = aMj.oB(9), p2.gameMode = aMj.oB(1), p2.playerMode = aMj.oB(2), p2.battleRoyaleMode =
			aMj.oB(2), p2.numberTeams = aMj.oB(4), p2.isZombieMode = aMj.oB(1), p2.isContest = aMj.oB(1), p2.isReplay = aMj.oB(1), p2.elo = aMj.aMt(2, 14, 2), p2.colorsType = aMj.oB(1), p2.colorsPersonalized = aMj.oB(1), p2.colorsData =
			aMj.aMt(10, 18, 512), p2.selectableColor = aMj.oB(1), p2.teamPlayerCount = aMj.aMt(4, 10, 9), p2.neutralBots = aMj.oB(1), p2.botDifficultyType = aMj.oB(2), p2.botDifficultyValue = aMj.oB(4), p2.botDifficultyTeam = aMj.aMt(4,
				4, 9), p2.botDifficultyData = aMj.aMt(10, 4, 512), p2.spawningType = aMj.oB(2), p2.spawningSeed = aMj.oB(14), p2.spawningData = aMj.aMt(11, 12, 1024), p2.selectableSpawn = aMj.oB(1), p2.playerNamesType = aMj.oB(2), p2
			.playerNamesData = aMj.aMu(10, 5, 512), p2.selectableName = aMj.oB(1), p2.aIncomeType = aMj.oB(2), p2.aIncomeValue = aMj.oB(8), p2.aIncomeData = aMj.aMt(10, 8, 512), p2.tIncomeType = aMj.oB(2), p2.tIncomeValue = aMj.oB(8), p2
			.tIncomeData = aMj.aMt(10, 8, 512), p2.iIncomeType = aMj.oB(2), p2.iIncomeValue = aMj.oB(8), p2.iIncomeData = aMj.aMt(10, 8, 512), p2.sResourcesType = aMj.oB(2), p2.sResourcesValue = aMj.oB(11), p2.sResourcesData = aMj.aMt(10,
				11, 512), ! function() {
				var hd = bD,
					sa = hd.oB(5),
					aMv = hd.oB(30),
					aMw = hd.oB(30);
				if (aMv + aMw > 8 * hd.size) return void aMm("Corrupted File");
				return function(eU) {
						var aMz = new Uint8Array(eU),
							aN0 = new Uint16Array(eU),
							aN1 = new Uint32Array(eU),
							aN2 = new Uint32Array(eU);
						b6.oP.aMb = aMz, b6.oP.aMc = aN0, b6.oP.aMd = aN1, b6.oP.aMe = aN2;
						for (var a6 = 0; a6 < eU; a6++) {
							var id = bD.oB(4);
							aMz[a6] = id, aN0[a6] = bD.oB(9), 0 === id ? aN1[a6] = bD.oB(22) : 1 === id ? (aN1[a6] = bD.oB(10), aN2[a6] = bD.oB(10)) : 2 === id ? (aN1[a6] = bD.oB(10), aN2[a6] = bD.oB(9)) : 3 === id || 4 === id ? (aN1[
								a6] = bD.oB(10), aN2[a6] = bD.oB(22)) : 5 === id || 6 === id ? aN1[a6] = bD.oB(10) : 7 === id ? aN1[a6] = bD.oB(1) : 10 === id && (aN1[a6] = bD.oB(20), aN2[a6] = bD.oB(22))
						}
					}(aMv),
					function(eU, sa) {
						var aMf = new Uint8Array(eU),
							aMg = new Array(eU);
						aMg.fill(0), b6.oP.aMf = aMf, b6.oP.aMg = aMg;
						for (var a6 = 0; a6 < eU; a6++) aMf[a6] = bD.oB(1), aMg[a6] = bD.oB(sa)
					}(aMw, sa), 1
			}()) || (bD.oA < 8 * bD.size - 13 || bD.oA > 8 * bD.size ? (aMm("Out Of Bounds Error: " + bD.oA + " " + 8 * bD.size), 1) : (b6.oP.a0o = or, 2 === a8.data.mapType && (aMm("Load base64 image...", 2), 1))))
	}, this.aC2 = function(aBb, aMn) {
		var z1 = document.createElement("canvas"),
			hE = z1.getContext("2d");
		if (z1.width = aBb.width, z1.height = aBb.height, hE.drawImage(aBb, 0, 0), aMi || aMn) return a8.w4 ? void 0 : (a8.data.canvas = z1, a8.data.mapType = 2, n.rw(), void n.o(19));
		b6.aK0()
	}
}

function aMY() {
	this.va = function() {
		var sa = function() {
				for (var aMg = b6.oP.aMg, eU = aMg.length, max = 0, a6 = 0; a6 < eU; a6++) max = Math.max(max, aMg[a6]);
				return sh(Math.max(max, 1))
			}(),
			a0 = (p2 = a8.data, (a0 = bA).dR(), a0.a3(12, h.rVersion), a0.oA += 43, a0.a3(2, p2.mapType), a0.a3(8, p2.mapProceduralIndex), a0.a3(8, p2.mapRealisticIndex), a0.a3(14, p2.mapSeed), a0.aN9(p2.mapName, 5), 2 === p2.mapType && a0.aNA(p2
				.canvas), a0.a3(1, p2.passableWater), a0.a3(1, p2.passableMountains), a0.a3(10, p2.playerCount), a0.a3(10, p2.humanCount), a0.a3(9, p2.selectedPlayer), a0.a3(1, p2.gameMode), a0.a3(2, p2.playerMode), a0.a3(2, p2
				.battleRoyaleMode), a0.a3(4, p2.numberTeams), a0.a3(1, p2.isZombieMode), a0.a3(1, p2.isContest), a0.a3(1, p2.isReplay), a0.dY(p2.elo, 2, 14), a0.a3(1, p2.colorsType), a0.a3(1, p2.colorsPersonalized), a0.dY(p2.colorsData, 10,
				18), a0.a3(1, p2.selectableColor), a0.dY(p2.teamPlayerCount, 4, 10), a0.a3(1, p2.neutralBots), a0.a3(2, p2.botDifficultyType), a0.a3(4, p2.botDifficultyValue), a0.dY(p2.botDifficultyTeam, 4, 4), a0.dY(p2.botDifficultyData, 10,
				4), a0.a3(2, p2.spawningType), a0.a3(14, p2.spawningSeed), a0.dY(p2.spawningData, 11, 12), a0.a3(1, p2.selectableSpawn), a0.a3(2, p2.playerNamesType), a0.aNB(p2.playerNamesData, 10, 5), a0.a3(1, p2.selectableName), a0.a3(2, p2
				.aIncomeType), a0.a3(8, p2.aIncomeValue), a0.dY(p2.aIncomeData, 10, 8), a0.a3(2, p2.tIncomeType), a0.a3(8, p2.tIncomeValue), a0.dY(p2.tIncomeData, 10, 8), a0.a3(2, p2.iIncomeType), a0.a3(8, p2.iIncomeValue), a0.dY(p2
				.iIncomeData, 10, 8), a0.a3(2, p2.sResourcesType), a0.a3(11, p2.sResourcesValue), a0.dY(p2.sResourcesData, 10, 11), ! function(sa) {
				var a0 = bA,
					aMb = b6.oP.aMb,
					fD = b6.oP.aMc,
					fF = b6.oP.aMd,
					fH = b6.oP.aMe,
					eU = aMb.length;
				a0.a3(5, sa), a0.a3(30, eU), a0.a3(30, b6.oP.aMg.length);
				for (var a6 = 0; a6 < eU; a6++) {
					var ep = aMb[a6];
					a0.a3(4, ep), a0.a3(9, fD[a6]), 0 === ep ? a0.a3(22, fF[a6]) : 1 === ep ? (a0.a3(10, fF[a6]), a0.a3(10, fH[a6])) : 2 === ep ? (a0.a3(10, fF[a6]), a0.a3(9, fH[a6])) : 3 === ep || 4 === ep ? (a0.a3(10, fF[a6]), a0.a3(22, fH[
						a6])) : 5 === ep || 6 === ep ? a0.a3(10, fF[a6]) : 7 === ep ? a0.a3(1, fF[a6]) : 10 === ep && (a0.a3(20, fF[a6]), a0.a3(22, fH[a6]))
				}
			}(sa), ! function(sa) {
				for (var a0 = bA, aMf = b6.oP.aMf, aMg = b6.oP.aMg, eU = aMf.length, a6 = 0; a6 < eU; a6++) a0.a3(1, aMf[a6]), a0.a3(sa, aMg[a6])
			}(sa), bA.oA),
			p2 = bH.ew(a0 - 1, 6) + 1,
			sa = (b9.aLd(6 * p2) !== bA.g.length && bA.g.push(0), ! function() {
				var a0 = bA;
				a0.oA = 24, a0.a3(31, a0.g.length), a0.oA = 12, a0.a3(12, function() {
					for (var g = bA.g, eU = g.length, aMA = h.rVersion, a6 = 3; a6 < eU; a6++) aMA = aMA + g[a6] & 4095;
					return aMA
				}())
			}(), bD.dR(bA.g), bB.qO.qP(bB.qO.qQ(p2)));
		return bD.xW(), bA.dR(), sa
	}
}

function cf() {
	var ep, bl = !1,
		aND = !1,
		aNE = -1e4,
		aNF = -1,
		aNG = 0;

	function resize(aNK) {
		ep = 0, aW.ql() && (aNI(aNK) || bl) && (bl = !1, bY.resize(), bS.a7L.resize(), aT.dR(), bU.dR(), aU.resize(), aO.resize(), aJ.resize(), n.resize(), 1 <= a8.w4 ? (aQ.resize(!1), aP.resize(), aR.resize(), aN.resize(), aM.resize(), aI.resize(),
			aH.resize(), b8.resize(), ar.resize(), aK.resize(), aL.resize(), aG.resize(), ba.resize(), aa.resize(), aS.resize(), bd.resize(), aN.a4k()) : (aV.a91(), aV.a92()), bb.dZ = !0)
	}

	function aNH(ex) {
		return ex && 128 < ex ? Math.floor(ex) : 128
	}

	function aNI(aNK) {
		var a0, j5, aNM, qT, a49;
		if (!(0 < au.q5)) return qT = aNH(document.documentElement.clientWidth), a49 = aNH(window.visualViewport && 2 !== r.id ? window.visualViewport.height : document.documentElement.clientHeight), a0 = qT, j5 = a49, aNM = 0 !== r.id || a0 < j5 ?
			700 : 1200, aNM = Math.min(aNM / ((a0 + j5) / 2), 1), aNM = 0 === bf.dj.data[1].value ? 2 * aNM / 3 : Math.min(aNM + (bf.dj.data[1].value - 1) * (1 - aNM) / 2, 1), au.pG = (window.devicePixelRatio || 1) * aNM, __fx.hoveringTooltip
			.canvasPixelScale = au.pG, aNK && !aND ? (aND = !0, document.body.removeChild(xf)) : aND && (aND = !1, document.body.appendChild(xf)), a0 = Math.floor(.5 + qT * au.pG), j5 = Math.floor(.5 + a49 * au.pG), a0 !== au.a0 || j5 !== au.j5 ?
			(au.a0 = a0, au.j5 = j5, au.min = a6z(a0, j5), au.max = a2E(a0, j5), au.pC = bH.ew(a0 + j5, 2), au.r4 = a0 / j5, xf.width = a0, xf.height = j5, xf.style.width = qT + "px", xf.style.height = a49 + "px", aNF = bb.e2 + 1e3, 1) : void 0
	}
	this.a0 = 0, this.j5 = 0, this.min = 0, this.max = 0, this.pC = 0, this.r4 = 1, this.pG = 1, this.q5 = 0, this.dS = function() {
		this.a0 = aNH(document.documentElement.clientWidth) + 2, this.j5 = aNH(document.documentElement.clientHeight) + 2
	}, this.dR = function() {
		ep = 1, xf = document.getElementById("canvasA"), (rA = xf.getContext("2d", {
			alpha: __fx.makeMainMenuTransparent
		})).imageSmoothingEnabled = !1, aNI(0)
	}, this.iQ = function() {
		az.iQ(), 50 <= ++ep && resize(0), -1 === aNF || bb.e2 < aNF || (aNF = -1, 2e3 * ++aNG >= bb.e2 + 8e3 ? console.log("error 3748") : r.s.setState(15))
	}, this.dc = function(hS) {
		bl = !0, resize(hS)
	}, this.yM = function() {
		aNE + 1e3 > bb.e2 || (aNE = bb.e2, resize(0))
	}
}

function d9() {
	this.aLu = new aNO, this.wc = new aNP
}

function aNP() {
	this.wd = function() {
		for (var g3, eU = ag.jc, vv = ag.je, wi = ab.wi, a99 = this.aBK(), a6 = 0; a6 < eU; a6++) g3 = vv[a6], aX.vx(g3) && (wi[g3] = a99);
		var oV = ab.oV,
			iY = ab.iY,
			iZ = ab.iZ,
			wo = ab.wo,
			eU = a8.jb;
		for (a6 = 0; a6 < eU; a6++)(0 === wo[a6] || iZ[a6] < 1 || 2 * oV[a6] > 3 * (iY[a6] + iZ[a6])) && (wi[a6] = 0);
		var wU = 0;
		for (a6 = 0; a6 < eU; a6++) wU += 0 < wi[a6];
		return wU
	}, this.aBK = function() {
		return Math.min(65535, bb.jY())
	}
}

function aNO() {
	function aNT(g, ex, k0) {
		for (var a6 = 0; a6 < 256; a6++) g[a6] = (g[a6] + (ex >> (a6 + k0) % 30 & 1)) % 256
	}
	this.iQ = function(aNQ, aNR) {
		var g = new Uint8Array(256);
		return function(g, aNQ, aNR) {
				var a6, aNV = 3 + (4 + aNQ) % 32768,
					aNW = 12 + aNR % 32768,
					aNX = 17 + ((aNQ & aNR) + (aNQ | aNR) + aNQ) % 32768;
				for (a6 = 0; a6 < 256; a6++) aNV = 1 + aNV * aNW % aNX, g[a6] = aNV % 256
			}(g, aNQ, aNR), aNT(g, aNQ, 2), aNT(g, aNR, 7),
			function(g) {
				var a6, ex, oA = 0;
				for (a6 = 0; a6 < 3e4; a6++) ex = g[oA], g[oA] = (ex + a6 + g[(oA + a6) % 256]) % 256, oA = (ex + a6 + oA + (ex & oA)) % 256
			}(g),
			function(g) {
				var a6, a49 = 1,
					aG2 = 1;
				for (a6 = 0; a6 < 256; a6 += 2) a49 = (1 + a49) * (g[a6] + 1) % 1073741824, aG2 = (1 + aG2) * (g[a6 + 1] + 1) % 1073741824;
				return [a49, aG2]
			}(g)
	}
}

function cc() {
	var aNY, aNZ, gy, aNa;
	this.dR = function() {
		var a6, eb, ed, aM7, aNb, a0, j5, uQ, hB, sr, ex, g3, ek, en, a1O;
		if (function() {
				if (gy = !0, aNa = "rgb(" + bO.sp[0] + "," + bO.sp[1] + "," + bO.sp[2] + ")", bO.aEO(bO.eA)) return 1;
				return gy = !1, 0
			}()) aNZ = null;
		else {
			for (aNY = bH.ew(96, 4), aNb = 1 === bO.eA ? (aM7 = 0, 160) : (aM7 = 128, 32), aNa = "rgb(" + aM7 + "," + aM7 + "," + aM7 + ")", aNZ = new Array(4), a6 = 3; 0 <= a6; a6--) {
				if (aNZ[a6] = document.createElement("canvas"), a0 = a6 % 2 == 0 ? bO.ef : aNY, j5 = a6 % 2 == 0 ? aNY : bO.eg + 2 * aNY, aNZ[a6].width = a0, aNZ[a6].height = j5, sr = (hB = (uQ = aNZ[a6].getContext("2d", {
						alpha: !1
					})).getImageData(0, 0, a0, j5)).data, a6 % 2 == 0)
					for (ed = aNY - 1; 0 <= ed; ed--)
						for (ex = aNb + Math.floor((ed + 1) * (aM7 - aNb) / (aNY + 1)), eb = a0 - 1; 0 <= eb; eb--) sr[g3 = 4 * ((0 === a6 ? aNY - ed - 1 : ed) * a0 + eb)] = ex, sr[g3 + 1] = ex, sr[g3 + 2] = ex, sr[g3 + 3] = 255;
				else {
					for (eb = aNY - 1; 0 <= eb; eb--)
						for (ex = aNb + Math.floor((eb + 1) * (aM7 - aNb) / (aNY + 1)), ed = j5 - 1 - aNY; aNY <= ed; ed--) sr[g3 = 4 * (ed * a0 + (3 === a6 ? aNY - eb - 1 : eb))] = ex, sr[g3 + 1] = ex, sr[g3 + 2] = ex, sr[g3 + 3] = 255;
					for (en = 1; 0 <= en; en--)
						for (eb = aNY - 1; 0 <= eb; eb--)
							for (ed = aNY - 1; 0 <= ed; ed--) ek = (Math.pow(eb * eb + ed * ed, .5) + 1) / (aNY + 1), ex = aNb + Math.floor((1 < ek ? 1 : ek) * (aM7 - aNb)), sr[g3 = 4 * ((0 === en ? aNY - ed - 1 : ed + en * (j5 - aNY)) * a0 + (
								1 === a6 ? eb : aNY - eb - 1))] = ex, sr[g3 + 1] = ex, sr[g3 + 2] = ex, sr[g3 + 3] = 255
				}
				uQ.putImageData(hB, 0, 0)
			}
			a1O = aNb, bO.sk.fillStyle = "rgb(" + a1O + "," + a1O + "," + a1O + ")", bO.sk.fillRect(0, 0, bO.ef, 1), bO.sk.fillRect(0, bO.eg - 1, bO.ef, 1), bO.sk.fillRect(0, 0, 1, bO.eg), bO.sk.fillRect(bO.ef - 1, 0, 1, bO.eg)
		}
	}, this.uK = function() {
		var en = gy ? 0 : -aNY;
		aG3(en, en, bO.ef - 2 * en, bO.eg - 2 * en, bW.aNe, bW.aNf, bW.aNg, bW.aNh) || (rA.fillStyle = aNa, rA.fillRect(0, 0, au.a0, au.j5))
	}, this.r9 = function() {
		gy || (aG1(0, -aNY, bO.ef, aNY, bW.aNe, bW.aNf, bW.aNg, bW.aNh) && rA.drawImage(aNZ[0], bW.aNi, bW.aNj - aNY), aG1(bO.ef, -aNY, aNY, bO.eg + 2 * aNY, bW.aNe, bW.aNf, bW.aNg, bW.aNh) && rA.drawImage(aNZ[1], bW.aNi + bO.ef, bW.aNj - aNY),
			aG1(0, bO.eg, bO.ef, aNY, bW.aNe, bW.aNf, bW.aNg, bW.aNh) && rA.drawImage(aNZ[2], bW.aNi, bW.aNj + bO.eg), aG1(-aNY, -aNY, aNY, bO.eg + 2 * aNY, bW.aNe, bW.aNf, bW.aNg, bW.aNh) && rA.drawImage(aNZ[3], bW.aNi - aNY, bW.aNj - aNY))
	}
}

function cy() {
	this.gz = new aNk, this.aBI = new aNl, this.uN = new aNm, this.l6 = new aNn, this.i2 = new aNo, this.a1O = new aNp, this.aNq = new aNr, this.jP = new aNs, this.kG = new aNt, this.aNu = new aNv, this.dR = function() {
		this.uN.dR(), this.l6.dR(), this.i2.dR(), this.a1O.dR(), this.aNu.dR()
	}, this.r9 = function() {
		this.aNu.r9(), this.uN.r9()
	}
}

function aNs() {
	this.iQ = function(player) {
		var oM;
		return !!a8.data.passableWater && 0 !== ab.gC[player].length && bJ.l6.oN !== bJ.l6.js && !((oM = bJ.l6.oM[player]) >= a9.js[a9.ik[player]] || oM === bJ.l6.oZ || !b7.fr.oT(player, a9.jq[a9.ik[player]], 32, 0) || !ai.iF.iQ(player) && !ai.iH
			.iQ(player) || ! function(za) {
				var aNy = bK.f7[1] + bI.hH[bK.f7[2] - 1] << 2;
				if (aX.eL(aNy)) return 1;
				return aNy = aX.eM(aNy), za !== aNy && !!eN(za, aNy)
			}(player)) && function(player) {
			return b7.fr.oW(player), bJ.l6.oc(player), !0
		}(player)
	}
}

function aNk() {
	function aO6(a6, kg, kh) {
		var aO8, aO7;
		if (!(a6 < 0)) return aO7 = bJ.l6.lt[a6], aO8 = bI.hg(aO7), aO7 = bI.hj(aO7), a6 = 20 * (.9 + .1 * Math.log10(bJ.l6.a2Y[a6])), a6 = Math.max(a6, bI.hw(b7.pA.qi(.02, 1.7))), bH.aGA(bI.hf(kg), bI.hi(kh), aO8, aO7, a6)
	}

	function aO0(aNz) {
		var aOB = 4 + .03 * (1 + 1.5 * r.s.v8()) * au.pC / hu;
		return bI.hk(aNz, bK.f7[1]) < aOB
	}
	this.h0 = function(player, aNz) {
		return !!(a8.data.passableWater && bI.hx(aNz) && bJ.l6.oN !== bJ.l6.js && bJ.l6.oM[player] !== bJ.l6.oZ && 0 !== ab.gC[player].length && bJ.kG.kH(player, aNz) && aO0(aNz))
	}, this.nf = function(player, lq, aNz) {
		return !!(bI.hx(aNz) && this.od(player, lq) && bJ.kG.oe(aNz) && aO0(aNz))
	}, this.od = function(player, id) {
		for (var aO1, qd = player << 3, qe = qd + bJ.l6.oM[player], aO2 = bJ.l6.aO2, aO3 = bJ.l6.aO3, a6 = qd; a6 < qe; a6++)
			if (id === aO3[aO1 = aO2[a6]]) return bK.f7[3] = aO1, !0;
		return !1
	}, this.ne = function(eG) {
		var a1P = bJ.a1O.a1P;
		return !!this.od(a8.eE, a1P) && (b5.gs.ne(a1P, eG), !0)
	}, this.a1R = function(kg, kh) {
		var player = a8.eE,
			eU = bJ.l6.oM[player];
		if (0 === eU) return !1;
		for (var aO2 = bJ.l6.aO2, lt = bJ.l6.lt, qd = player << 3, aO4 = 80, aIA = -1, a6 = qd + eU - 1; qd <= a6; a6--) {
			var aO5 = aO2[a6],
				ek = bI.ha(kg, kh, lt[aO5]);
			ek < aO4 && (aO4 = ek, aIA = aO5)
		}
		return !!aO6(aIA, kg, kh) && (bJ.a1O.a1P = bJ.l6.aO3[aIA], bi.ob.a1R(), !0)
	}, this.a1Y = function(kg, kh) {
		var eU = bJ.l6.oN;
		if (eU < 1) return -1;
		for (var lt = bJ.l6.lt, aO4 = 80, aIA = -1, a6 = 0; a6 < eU; a6++) {
			var ek = bI.ha(kg, kh, lt[a6]);
			ek < aO4 && (aO4 = ek, aIA = a6)
		}
		return aO6(aIA, kg, kh) ? aIA : -1
	}, this.ls = function(player, id) {
		for (var qd = player << 3, qe = qd + bJ.l6.oM[player], aO3 = bJ.l6.aO3, aO2 = bJ.l6.aO2, a6 = qd; a6 < qe; a6++) {
			var aO5 = aO2[a6];
			if (aO3[aO5] === id) return aO5
		}
		return -1
	}, this.aBF = function(player) {
		for (var qd = player << 3, qe = qd + bJ.l6.oM[player], aO2 = bJ.l6.aO2, a2Y = bJ.l6.a2Y, ik = 0, a6 = qd; a6 < qe; a6++) ik += a2Y[aO2[a6]];
		return ik
	}, this.ly = function(player) {
		return 0 === bJ.l6.oM[player] ? -1 : bJ.l6.aO2[player << 3]
	}
}

function aNl() {
	this.aBJ = function(player) {
		for (var aO2 = bJ.l6.aO2, qd = player << 3, a6 = qd + bJ.l6.oM[player] - 1; qd <= a6; a6--) this.aOC(aO2[a6])
	}, this.aOC = function(aOD) {
		var l6 = bJ.l6,
			aOE = l6.oN - 1,
			aOF = l6.a2X[aOD],
			aOG = l6.aOH[aOD],
			aOI = l6.lt[aOD];
		l6.oN = aOE, l6.a2X[aOD] = l6.a2X[aOE], l6.aOJ[aOD] = l6.aOJ[aOE], l6.aOK[aOD] = l6.aOK[aOE], l6.lt[aOD] = l6.lt[aOE], l6.aOL[aOD] = l6.aOL[aOE], l6.a2Y[aOD] = l6.a2Y[aOE], l6.aOH[aOD] = l6.aOH[aOE], l6.aO3[aOD] = l6.aO3[aOE], l6.aOM[
			aOD] = l6.aOM[aOE], l6.aON[aOD] = l6.aON[aOE], l6.aOO[aOD] = l6.aOO[aOE], l6.aO2[l6.a2X[aOD]] = aOD,
			function(a9o) {
				var player = a9o >> 3,
					l6 = bJ.l6,
					eU = l6.oM[player] - 1,
					aOR = (player << 3) + eU;
				l6.oM[player] = eU, aOR !== a9o && (l6.aO2[a9o] = l6.aO2[aOR], l6.a2X[l6.aO2[a9o]] = a9o)
			}(aOF), bJ.i2.i2[bI.i1(l6.lt[aOD])][l6.aOH[aOD]] = aOD, aOE = bI.i1(aOI), aOF = aOG, aOE = bJ.i2.i2[aOE], l6 = aOE.pop(), aOF !== aOE.length && (aOE[aOF] = l6, bJ.l6.aOH[l6] = aOF)
	}
}

function aNm() {
	var aOT, un = 8,
		aOU = new Array(2);

	function aOV(oA) {
		var h8 = un + 4,
			z1 = b7.pA.sg(h8, h8),
			hE = b7.pA.getContext(z1, !0),
			hB = b7.pA.getImageData(hE, h8, h8),
			sr = hB.data;
		return aOW(sr, h8 + 1, oA), aOW(sr, h8 + 2, oA), aOW(sr, 2 * h8 + 1, oA), aOW(sr, 2 * h8 - 3, oA), aOW(sr, 2 * h8 - 2, oA), aOW(sr, 3 * h8 - 2, oA), aOW(sr, h8 * (h8 - 3) + 1, oA), aOW(sr, h8 * (h8 - 2) + 1, oA), aOW(sr, h8 * (h8 - 2) + 2,
			oA), aOW(sr, h8 * (h8 - 2) - 2, oA), aOW(sr, h8 * (h8 - 1) - 3, oA), aOW(sr, h8 * (h8 - 1) - 2, oA), hE.putImageData(hB, 0, 0), z1
	}

	function aOW(sr, eG, oA) {
		eG *= 4;
		sr[eG] = 255, sr[1 + eG] = 255, sr[2 + eG] = oA, sr[3 + eG] = 255
	}

	function sg(player) {
		var z1 = b7.pA.sg(un, un);
		return function(hE, player) {
			var eb, ed, he, eG, aOY, a9p, h8 = un,
				hB = b7.pA.getImageData(hE, h8, h8),
				sr = hB.data,
				kL = (h8 >> 1) - .5,
				aNa = aX.a38(player),
				aOa = b7.pK.yb(aNa, .5);
			b7.pK.yd(aNa, aOa, 300) || b7.pK.yf(aNa, 100);
			for (ed = 0; ed < h8; ed++)
				for (eb = 0; eb < h8; eb++) a9p = (h8 - 1.5) * (h8 - 1.5) / 4, aOY = (he = (he = eb - kL) * he + (he = ed - kL) * he) <= (h8 - 4.5) * (h8 - 4.5) / 4 ? aOa : aNa, sr[eG = 4 * (ed * h8 + eb)] = aOY[0], sr[1 + eG] = aOY[1], sr[2 +
					eG] = aOY[2], sr[3 + eG] = a9p < he ? 0 : 255;
			hE.putImageData(hB, 0, 0)
		}(b7.pA.getContext(z1, !0), player), z1
	}
	this.dR = function() {
		aOT = new Array(a8.eR), aOU[0] = aOV(255), aOU[1] = aOV(0)
	}, this.r9 = function() {
		var a6, player, aOb, aGB, ik, hd, aOd, aOf, aOg, lt = bJ.l6.lt,
			a2X = bJ.l6.a2X,
			a2Y = bJ.l6.a2Y,
			aON = bJ.l6.aON,
			aOh = aOT,
			aOi = a8.eE,
			aOj = -1,
			eU = bJ.l6.oN,
			aOk = au.a0,
			aOl = au.j5,
			aOm = bO.ef << 4,
			eJ = hu,
			e8 = eJ / un,
			lu = ht / eJ,
			lv = hv / eJ,
			he = (aOk + ht) / eJ - lu,
			hh = (aOl + hv) / eJ - lv,
			hE = rA;
		for (bJ.gz.od(a8.eE, bJ.a1O.a1P) && (aOj = bK.f7[3]), hE.imageSmoothingEnabled = eJ < 9, b7.pA.textAlign(hE, 1), b7.pA.textBaseline(hE, 1), a6 = 0; a6 < eU; a6++) player = a2X[a6] >> 3, ik = a2Y[a6], aOb = .9 + .1 * Math.log10(ik), aGB =
			(hd = lt[a6]) % aOm / 16 - aOb, hd = aOl * (Math.floor(hd / aOm) / 16 - aOb - lv) / hh, aOd = -2 * (aOg = eJ * aOb) * (1 + (aOf = +(player === aOi)) / 8), aOf = aOf * aOg / 4, (aOg = aOk * (aGB - lu) / he) < aOd || hd < aOd || aOk +
			aOf < aOg || aOl + aOf < hd || (aGB = 2 * aOb * e8, aOd = aOb * eJ, void 0 === (aOf = aOh[player]) && (aOh[player] = aOf = sg(player)), player === aOi && (hE.setTransform(aGB, 0, 0, aGB, aOg - 2 * aGB, hd - 2 * aGB), hE.drawImage(aOU[
				+(a6 === aOj)], 0, 0)), hE.setTransform(aGB, 0, 0, aGB, aOg, hd), hE.drawImage(aOf, 0, 0), (aOb = Math.floor(function(ik) {
				if (ik < 1e3) return .42;
				if (ik < 1e4) return .34;
				if (ik < 1e6) return .26;
				if (ik < 1e8) return .19;
				return .15
			}(ik) * aOd)) < 6) || (hE.setTransform(1, 0, 0, 1, 0, 0), hE.fillStyle = aON[a6] ? u.mx : u.mV, hE.font = b7.pA.qR(1, aOb), hE.fillText(b7.wu.a04(ik), aOg + aOd, hd + aOd + .1 * aOb));
		hE.imageSmoothingEnabled = !1, hE.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function aNv() {
	var z1;
	this.dR = function() {
		z1 = z1 || bL.l6.aOp(20, bc.aOq[7])
	}, this.r9 = function() {
		var mF = hu;
		if (!(5 <= mF)) {
			var aOk = au.a0,
				aOl = au.j5,
				lu = ht / mF,
				lv = hv / mF,
				m8 = (aOk + ht) / mF,
				m9 = (aOl + hv) / mF,
				g4 = -20 * mF,
				aOr = .5 * g4,
				aOm = bO.ef << 4,
				eU = bJ.l6.oN,
				lt = bJ.l6.lt,
				aOs = z1,
				hE = rA;
			3 < mF && (hE.globalAlpha = .5 * (5 - mF));
			for (var a6 = 0; a6 < eU; a6++) {
				var hd = lt[a6],
					eb = aOk * (hd % aOm / 16 - lu) / (m8 - lu) + aOr,
					hd = aOl * (Math.floor(hd / aOm) / 16 - lv) / (m9 - lv) + aOr;
				aOk < eb || aOl < hd || eb < g4 || hd < g4 || (hE.setTransform(mF, 0, 0, mF, eb, hd), hE.drawImage(aOs, 0, 0))
			}
			hE.globalAlpha = 1, hE.setTransform(mF, 0, 0, mF, 0, 0)
		}
	}
}

function aNr() {
	this.iQ = function() {
		for (var aO7, aNq, aOM = bJ.l6.aOM, lt = bJ.l6.lt, aOK = bJ.l6.aOK, a6 = bJ.l6.oN - 1; 0 <= a6; a6--) aO7 = lt[a6], 0 !== (aNq = aOM[a6]) && aO7 === aOK[a6] && (! function(a6, aOv, hR) {
			var ij, player = bJ.l6.a2X[a6] >> 3,
				hR = aOv + bI.hH[hR] << 2,
				a6 = bJ.l6.a2Y[a6];
			if (bZ.aOw(player), aX.eL(hR)) ij = a8.eR;
			else {
				if ((ij = aX.eM(hR)) === player) return hR = b7.fr.fu(player, a6), bZ.fv(player, a6 - hR, 12);
				if (!eN(player, ij)) return b5.jg.nv(player, ij, a6)
			}
			aY.ix(player, ij) || aY.jF(player) ? (ab.fx[player].push(aOv << 2), aY.ig(player, a6, ij), aA.ih(player, !0)) : bZ.fv(player, a6, 12)
		}(a6, bI.i0(aO7), aNq - 1), bJ.aBI.aOC(a6))
	}, this.aOx = function(player, eG, hR, lq) {
		if (0 !== hR) {
			var aOi = a8.eE;
			if (b7.fr.gi(aOi) && eN(player, aOi) && player !== aOi && 0 !== ab.gC[aOi].length) {
				var aNy = eG + bI.hH[--hR] << 2;
				if (aX.eL(aNy) || eN(player, aX.eM(aNy))) {
					for (var ei = !1, a6 = 0; a6 < 4; a6++)
						if (aNy = eG + bI.hH[a6] << 2, aX.eP(aNy) && !aX.eL(aNy) && aX.eM(aNy) === aOi) {
							ei = !0;
							break
						} ei && (aI.a1Q(719, 0), aI.wS(180, L(360, [ab.a2N[player]]), 719, player, u.mw, u.mS, -1, !0, void 0, {
						eo: 1,
						lq: lq
					}))
				}
			}
		}
	}
}

function aNn() {
	this.aOy = null, this.js = 512, this.oZ = 8, this.oN = 0, this.aOz = 0, this.a2X = new Uint16Array(this.js), this.aOJ = new Uint32Array(this.js), this.aOK = new Uint32Array(this.js), this.lt = new Uint32Array(this.js), this.aOL = new Uint16Array(
			this.js), this.a2Y = new Uint32Array(this.js), this.aOH = new Uint16Array(this.js), this.aO3 = new Uint16Array(this.js), this.aOM = new Uint8Array(this.js), this.aON = new Uint8Array(this.js), this.aOO = new Uint32Array(this.js), this
		.oM = new Uint8Array(a8.eR), this.aO2 = new Uint16Array(this.oZ * a8.eR), this.dR = function() {
			this.aOz = 0, this.oN = 0, this.aOy = new Uint8Array(bO.ef + bO.eg), this.oM.fill(0)
		}, this.oc = function(player) {
			var eU = this.oN,
				aP0 = bI.hz(bK.f7[0]),
				aP1 = this.oM[player],
				aP2 = (player << 3) + aP1,
				ik = (this.a2X[eU] = aP2, this.aOJ[eU] = aP0, this.lt[eU] = aP0, this.aOK[eU] = bI.hz(bK.f7[1]), this.aOL[eU] = 0, bK.f3[0]);
			ik < 60 ? (b7.fr.fs(player, 60 - ik), this.a2Y[eU] = 60) : this.a2Y[eU] = ik, this.aOH[eU] = bJ.i2.oc(eU, bI.i1(aP0)), this.aO3[eU] = this.aOz, this.aOM[eU] = bK.f7[2], this.aON[eU] = 0, this.aOO[eU] = 0, this.aOz = this.aOz + 1 & 1023,
				this.aO2[aP2] = eU, this.oM[player] = aP1 + 1, this.oN++, bJ.aNq.aOx(player, bK.f7[1], bK.f7[2], this.aO3[eU])
		}, this.ne = function() {
			var aO1 = bK.f7[3];
			this.aOJ[aO1] = this.lt[aO1], this.aOK[aO1] = bI.hz(bK.f7[1]), this.aOL[aO1] = 0, this.aOM[aO1] = bK.f7[2], bJ.aNq.aOx(this.a2X[aO1] >> 3, bK.f7[1], bK.f7[2], this.aO3[aO1])
		}, this.iQ = function() {
			bJ.aNq.iQ();
			var a6, g3 = a8.eE,
				e3 = bJ.gz.aBF(g3),
				wb = (! function(wb) {
					var a6, aP7, aP8, aP9, aPA, aP0, aPE, aPF, eX, g4, aOJ = wb.aOJ,
						aOK = wb.aOK,
						lt = wb.lt,
						a2Y = wb.a2Y,
						aON = wb.aON,
						aOL = wb.aOL,
						aOH = wb.aOH,
						gJ = ab.gJ,
						a2X = wb.a2X,
						wb = wb.oN,
						aOm = bO.ef << 4;
					for (a6 = wb - 1; 0 <= a6; a6--) aP8 = lt[a6], aP7 = aOK[a6], aP8 !== aP7 && (aP0 = aOJ[a6], aPE = aP7 % aOm - (aPA = aP0 % aOm), aPF = ~~((aP7 + .5) / aOm) - (aP0 = ~~((aP0 + .5) / aOm)), eX = ~~Math.sqrt(aPE * aPE + aPF *
						aPF + .5), g4 = 15e4 + 25e3 * bH.log10(a2Y[a6]), g4 += 5e4 * !gJ[a2X[a6] >> 3], aON[a6] && (g4 = bH.ew(g4, 5)), 65535 <= (g4 = aOL[a6] + Math.max(~~((g4 + .5) / eX), 1)) ? lt[a6] = aP9 = aP7 : (aOL[a6] = g4, lt[
						a6] = aP9 = aPA + bH.ew(g4 * aPE, 65536) + aOm * (aP0 + bH.ew(g4 * aPF, 65536))), aOH[a6] = bJ.i2.aPH(aOH[a6], aP8, aP9))
				}(this), ! function(wb) {
					if (bb.jY() % 2 == 1) {
						var a6, k0, kL, eo, ep, aPI, v7, aPJ, gv, hL, lu, lv, aP0, aPK, aPL, aPM, sz, eU = wb.oN,
							lt = wb.lt,
							a2X = wb.a2X,
							a2Y = wb.a2Y,
							aOO = wb.aOO,
							aON = wb.aON,
							i2 = bJ.i2.i2,
							aPO = i2.length,
							aPP = bJ.i2.aPP,
							aOm = bO.ef << 4,
							aPQ = a8.ib,
							aMN = bc.eS,
							g4 = (eU - 1) * (bH.ew(bb.jY(), 2) % 2);
						for (a6 = 0; a6 < eU; a6++)
							for (k0 = Math.abs(a6 - g4), aP0 = lt[k0], kL = bI.i1(aP0), gv = a2X[k0] >> 3, lu = aP0 % aOm, lv = ~~((aP0 + .5) / aOm), aPM = a2Y[k0], eo = 0; eo < 9; eo++)
								if (!((aPI = kL + aPP[eo]) < 0 || aPO <= aPI))
									for (aPJ = i2[aPI], v7 = aPJ.length, ep = 0; ep < v7; ep++) aPK = aPJ[ep], sz = a2X[aPK] >> 3, gv == sz || aPQ && aMN[gv] === aMN[sz] && aMN[gv] || (sz = lt[aPK], (hL = lu - sz % aOm) * hL + (hL = lv - ~~((sz +
										.5) / aOm)) * hL < 14400 && ((sz = a2Y[aPK]) <= aPM ? aPL = Math.max(1, bH.ew(sz + bH.ew(aPM - sz, 10), 10)) : (aPL = Math.max(1, bH.ew(aPM, 10)), aOO[aPK] = Math.min(aOO[aPK] + aPL, 4294967295)),
										a2Y[aPK] = Math.max(sz - aPL, 0), aON[aPK] = 4))
					}
				}(this), ! function(wb) {
					if (bb.jY() % 5 == 3) {
						var a6, ik, a2Y = wb.a2Y,
							gJ = ab.gJ,
							a2X = wb.a2X,
							aOO = wb.aOO,
							aON = wb.aON,
							eU = wb.oN;
						for (a6 = 0; a6 < eU; a6++) ik = a2Y[a6], gJ[a2X[a6] >> 3] ? a2Y[a6] = Math.max(ik - Math.max(1, ik >> 7), 0) : (a2Y[a6] = Math.max(ik - Math.max(1, ik >> 11), 0), aON[a6] || (ik = aOO[a6]) && (ik = Math.max(ik >> 3, 1),
							a2Y[a6] = Math.min(a2Y[a6] + (ik << 1), 4294967295), aOO[a6] -= ik))
					}
				}(this), this),
				a2Y = wb.a2Y,
				aON = wb.aON;
			for (a6 = wb.oN - 1; 0 <= a6; a6--) aON[a6] = aON[a6] >> 1, 0 === a2Y[a6] && bJ.aBI.aOC(a6);
			bZ.fv(g3, e3 - bJ.gz.aBF(g3), 15)
		}
}

function aNo() {
	this.aPR = 32, this.eb = 0, this.ed = 0, this.i3 = 0, this.aPS = 0, this.aPT = 4, this.i2 = null, this.aPP = new Int16Array(9), this.dR = function() {
		this.i3 = 1 + bH.ew(bO.ef - 1, this.aPR), this.aPS = 1 + bH.ew(bO.eg - 1, this.aPR), this.i2 = new Array(this.i3 * this.aPS), b7.pK.ya(this.i2);
		var eb, ed, aPP = this.aPP,
			a0 = this.i3;
		for (eb = -1; eb <= 1; eb++)
			for (ed = -1; ed <= 1; ed++) aPP[3 * (1 + ed) + 1 + eb] = ed * a0 + eb
	}, this.oc = function(aPV, a6) {
		return this.i2[a6].push(aPV), this.i2[a6].length - 1
	}, this.aPH = function(aPW, aP0, aP7) {
		var aPX, aPY, aP0 = bI.i1(aP0),
			aP7 = bI.i1(aP7);
		return aP0 === aP7 ? aPW : (aPX = this.i2[aP0].pop(), this.i2[aP0].length === aPW ? this.oc(aPX, aP7) : (aPY = this.i2[aP0][aPW], this.i2[aP0][aPW] = aPX, bJ.l6.aOH[aPX] = aPW, this.oc(aPY, aP7)))
	}
}

function aNt() {
	function xQ(aP7, aPZ) {
		if (! function(aP7, aNz) {
				var hK = bI.i0(aP7),
					aPd = Math.abs(bI.ec(aNz) - bI.ec(hK)),
					hK = Math.abs(bI.ee(aNz) - bI.ee(hK));
				return 0 !== Math.max(aPd, hK) && (function(aP0, aP7, aPd, aPe) {
					var aPg = bI.hg(aP0),
						aP0 = bI.hj(aP0),
						aPi = bI.hg(aP7),
						aP7 = bI.hj(aP7),
						aPi = aPi - aPg,
						aP7 = aP7 - aP0,
						aPm = Math.abs(aPi),
						aPn = Math.abs(aP7),
						aPi = 0 < aPi ? 1 : 3,
						aP7 = 0 < aP7 ? 2 : 0;
					aPn < aPm ? aPq(aPg, aP0, aPg + aPm, aP0 + aPn, aPi, aP7, aPd) : aPq(aP0, aPg, aP0 + aPn, aPg + aPm, aP7, aPi, aPe)
				}(aP7, bI.hz(aNz), aPd, hK), !0)
			}(aP7, aPZ)) return !1;
		if (0 === bK.f0[0]) return !!aX.gy(aPZ << 2);
		if (! function(aNz) {
				if (aX.gy(aNz << 2)) return 1;
				return function(aNz) {
					var a6, hR, aOy = bJ.l6.aOy,
						aPu = bI,
						eU = bK.f0[0],
						aPv = 4 * aNz;
					for (a6 = eU - 1; 0 <= a6; a6--) {
						hR = aOy[a6];
						var aPw = aPv;
						if (aPv = aPu.i5(aPv, hR + 2 & 3), aX.gy(aPv)) return bK.f0[0] = a6, bK.f7[1] = aPv >> 2, bK.f7[2] = 1 + hR, bK.f7[4] = aPw, 1
					}
					return
				}(aNz)
			}(aPZ)) return !1;
		if (bK.f7[2] && aX.eZ(bK.f7[4])) return !1;
		var a6, aPZ = bI.i0(aP7),
			sr = a7T,
			aOy = bJ.l6.aOy,
			eU = bK.f0[0] - 1,
			aPv = 4 * aPZ,
			hI = bI.hI;
		for (a6 = 0; a6 < eU; a6++)
			if (aPv += hI[aOy[a6]], 0 !== sr[aPv + 3] || 2 !== sr[aPv + 2]) return !!void 0;
		return !!1
	}

	function aPq(aPg, aPh, aPi, aPj, aPo, aPp, aPd) {
		for (var ed, aOy = bJ.l6.aOy, g4 = 0, aPr = 0, j5 = aPj - aPh, a0 = aPi - aPg, aPs = aPg % 16, a6 = 1; a6 <= aPd; a6++) aOy[g4++] = aPo, aOy[g4] = aPp, g4 += (ed = (j5 * (aPs + (a6 << 4)) + .5) / a0 >> 4) - aPr, aPr = ed;
		bK.fC(bK.f0, g4)
	}
	this.kH = function(player, aPZ) {
		var hR, hK, gu = bI.hT(player, aPZ);
		return gu !== aPZ && (hR = bI.hJ(gu, aPZ), hK = bI.i4(gu, hR), !(!aX.gy(hK << 2) && (hR = bI.hQ(gu, aPZ, hR), hK = bI.i4(gu, hR), !aX.gy(hK << 2)) || (bK.f7[0] = hK, bK.f7[1] = aPZ, bK.f7[2] = 0, hK !== aPZ && (!xQ(bI.hz(hK), aPZ) ||
			0 !== bK.f7[2] && bI.hZ(player, bK.f7[1] + bI.hH[bK.f7[2] - 1] << 2)))))
	}, this.oe = function(aPZ) {
		var aP0 = bJ.l6.lt[bK.f7[3]];
		return bK.f7[1] = aPZ, bK.f7[2] = 0, xQ(aP0, aPZ)
	}
}

function aNp() {
	var un = 32,
		um = new Array(2);

	function sg(ep) {
		var eb, ed, eG, hh, he, h8 = un,
			z1 = b7.pA.sg(h8, h8),
			hE = b7.pA.getContext(z1, !0),
			hB = b7.pA.getImageData(hE, h8, h8),
			sr = hB.data,
			kL = (h8 >> 1) - .5,
			kM = Math.sqrt(kL * kL);
		for (sr.fill(255), ed = 0; ed < h8; ed++)
			for (eb = 0; eb < h8; eb++) he = eb - kL, hh = ed - kL, eG = 4 * (ed * h8 + eb), he = 714 * (kM - Math.sqrt(he * he + hh * hh)) / kM, sr[2 + eG] = ep, sr[3 + eG] = 255 < he ? 0 : he;
		return hE.putImageData(hB, 0, 0), z1
	}
	this.a1P = -1, this.dR = function() {
		this.a1P = -1, um[0] || (um[0] = sg(255), um[1] = sg(0))
	}, this.aPy = function(hE, e8, eb, ed, hG, a6) {
		b7.fr.gi(a8.eE) && (hE.setTransform(e8 *= 4 / 3 * .625, 0, 0, e8, eb - (hG *= 4 / 3), ed - hG), hE.drawImage(um[+(bJ.l6.aO3[a6] === this.a1P)], 0, 0))
	}
}

function dU() {
	this.aK7 = [L(361), L(362), L(363), L(364), L(365), L(366), L(367), L(368), L(369), L(370), L(371), L(372), L(373)];
	var aPz = ["Space", "", "KeyB", "", "KeyW", "", "KeyS", "", "KeyD", "", "KeyA", "", "KeyH", "", "NumpadAdd", "", "NumpadSubtract", "", "ArrowLeft", "", "ArrowRight", "", "ArrowUp", "", "ArrowDown", ""];
	this.aK6 = new Array(aPz.length), this.dR = function() {
		var g = bf.dj.data[155].value.split(";"),
			kL = g.length;
		if (function() {
				for (var eU = aPz.length, a6 = 0; a6 < eU; a6++) bT.aK6[a6] = aPz[a6]
			}(), !(kL > aPz.length))
			for (var a6 = 0; a6 < kL; a6++) g[a6].length && (this.aK6[a6] = g[a6])
	}, this.aK9 = function(oA, code) {
		for (var aK6 = this.aK6, aQ1 = aPz, or = (aK6[oA] = code, ""), eU = aK6.length, aQ2 = [], a6 = 0; a6 < eU; a6++) aQ2.push(aK6[a6] === aQ1[a6] ? "" : aK6[a6]);
		eU--;
		for (a6 = 0; a6 < eU; a6++) or += aQ2[a6] + ";";
		bf.pr.ps(155, or += aQ2[eU])
	}, this.aK5 = function() {
		bf.pr.ps(155, ""), this.dR()
	}, this.ep = function(code, oA) {
		return code === this.aK6[oA] || code === this.aK6[oA + 1]
	}
}

function cQ() {
	this.a3w = function() {
		var aQ5;
		return !(ag.jc < 3 || ab.gJ[ks[0]] >= a8.jL >> 1) && (a8.ib ? (aQ5 = aZ.aCM(), !(2 * aZ.aCN(bd.kp()) >= aQ5)) : function() {
			var aQ5 = aZ.aCM();
			if (2 * ab.gX[ks[0]] >= aQ5) return !1;
			return !0
		}())
	}
}

function c1() {
	this.dR = function() {
		if (0 === a8.data.sResourcesType) {
			for (var aP1 = a8.jb, gX = ab.gX, a6 = 0; a6 < aP1; a6++) gX[a6] = 512;
			var aP2 = a8.tN,
				jr = a9.jr,
				ik = a9.ik;
			for (a6 = aP1; a6 < aP2; a6++) gX[a6] = jr[ik[a6]]
		} else(1 === a8.data.sResourcesType ? function() {
			for (var eU = a8.tN, gX = ab.gX, sResourcesValue = a8.data.sResourcesValue, a6 = 0; a6 < eU; a6++) gX[a6] = sResourcesValue
		} : function() {
			for (var eU = a8.tN, gX = ab.gX, sResourcesData = a8.data.sResourcesData, a6 = 0; a6 < eU; a6++) gX[a6] = sResourcesData[a6]
		})();
		bZ.lO[8] = ab.gX[a8.eE]
	}
}

function dH() {
	var aQA = 501,
		aQB = (this.wy = new Uint32Array(aQA), this.ze = new Uint32Array(aQA), this.a6q = new Uint16Array(aQA), this.aKF = 0, 1),
		aQC = 0;

	function aQF(self) {
		self.max.fill(0)
	}

	function aQH(self, a6) {
		self.max[0] = Math.max(self.wy[a6], self.max[0]), self.max[1] = Math.max(self.ze[a6], self.max[1]), self.max[2] = Math.max(self.a6q[a6], self.max[2])
	}
	this.max = [0, 0, 0], this.aQD = 0, this.lO = new Array(21), this.aQE = null, this.dS = function() {
		this.aQE = [L(374), L(375), L(376), L(377), L(378), L(379), L(380), L(381), L(238), L(239), L(382), L(383), L(384), L(385), "", L(386), L(387), L(388), L(198), L(389), L(390)]
	}, this.dR = function() {
		this.aKF = 0, aQB = 1, this.aQD = 0, aQC = 0, aQF(this), this.lO.fill(0)
	}, this.oX = function(player, hs) {
		b7.fr.zZ(player) && (this.lO[0] += hs + 1, this.lO[1]++, this.lO[12] += bK.f3[1])
	}, this.nx = function(player, na) {
		__fx.donationsTracker.logDonation(player, na, bK.f3[0]);
		player === a8.eE && (aI.nx(bK.f3[0], bK.f3[1], na), this.lO[12] += bK.f3[1], this.lO[16] += bK.f3[0]), na === a8.eE && (aI.a2l(bK.f3[0], player), this.lO[10] += bK.f3[0])
	}, this.oa = function(player) {
		b7.fr.zZ(player) && (this.lO[2]++, this.lO[12] += bK.f3[1])
	}, this.om = function(player) {
		b7.fr.zZ(player) && (this.lO[19]++, this.lO[12] += bK.f3[1])
	}, this.aOw = function(player) {
		b7.fr.zZ(player) && this.lO[20]++
	}, this.fv = function(player, a0G, oA) {
		b7.fr.zZ(player) && (this.lO[oA] += a0G)
	}, this.iQ = function() {
		var self;
		this.aQD || 0 < aQC-- || ((self = this).wy[self.aKF] = ab.gJ[a8.eE], self.ze[self.aKF] = ab.gX[a8.eE], self.a6q[self.aKF] = aZ.a6r(a8.eE), aQH(self, self.aKF), self.aKF++, self.aKF === aQA && function(self) {
			aQF(self), aQH(self, 0), self.aKF = 1 + bH.ew(aQA, 2);
			for (var a6 = 1; a6 < self.aKF; a6++) self.wy[a6] = self.wy[2 * a6], self.ze[a6] = self.ze[2 * a6], self.a6q[a6] = self.a6q[2 * a6], aQH(self, a6);
			aQB *= 2
		}(self), aQC = aQB - 1, ba.lF(), 0 === ab.lS[a8.eE] && (self.aQD = bb.jY()))
	}
}

function dI() {
	this.a0 = 0, this.j5 = 0, this.qT = 0, this.qU = 0, this.aQJ = 0, this.aQK = 0, this.a49 = 0, this.aG2 = 0;
	var aQL = this.aAI = 0;
	this.aQM = 0, this.aQN = 0, this.aQO = 0, this.a3Y = 0, this.oA = 0, this.a6T = null, this.ui = !1, this.aQP = -1, this.aQQ = !1, this.aQR = [0, 0], this.dS = function() {
		this.a6T = [L(391), L(96, 0, "Balance"), L(95, 0, "Interest"), L(392)]
	}, this.dR = function() {
		this.ui = !1, this.aQP = -1, this.aQQ = !1, this.resize()
	}, this.resize = function() {
		this.a0 = au.a0 < 1.369 * au.j5 ? au.a0 : 1.369 * au.j5;
		var eX = r.s.v8() && au.a0 < au.j5 ? 1 : r.s.v8() ? .8 : au.a0 < au.j5 ? .65 : .59;
		this.a0 = Math.floor(eX * this.a0), this.a0 -= r.s.v8() && au.a0 < au.j5 ? 2 * bY.gap + 2 : 0, this.j5 = Math.floor(this.a0 / 1.369), this.a3Y = Math.floor(this.j5 / 150), this.a3Y = Math.max(this.a3Y, 1.5), this.qT = Math.floor(1 + .02 *
			this.a0), this.qU = Math.floor(1 + .04 * this.a0), this.a49 = this.qU, aQL = Math.floor(.75 * this.a49), this.aG2 = Math.floor(1 + .075 * this.a0), this.aQM = Math.floor(1 + .1125 * this.a0), this.aQN = Math.floor(this.a0 * (r.s
			.v8() ? .03 : .029)), this.aQN = Math.max(this.aQN, 4), this.aQO = Math.floor(.035 * this.a0), this.aQO = Math.max(this.aQO, 4), this.aAI = this.j5 - 2 * this.a49 - this.aG2 - this.aQM, this.ui && this.aQS()
	}, this.gj = function(kg, kh) {
		var tQ, tP;
		return !!this.ui && (tP = kg, tQ = kh, kg -= bH.ew(au.a0 - this.a0, 2), kh -= bH.ew(au.j5 - this.j5, 2), kg < 0 || kh < 0 || kg >= this.a0 || kh >= this.j5 || kg >= this.a0 - this.aQM && kh < this.aQM ? -1 !== aH.gj(tP, tQ) || b8.gj(tP,
			tQ) || this.qg() : kh < this.aQM || (kh < this.j5 - this.aG2 ? (this.aQQ = !0, this.aQP = (kg - 2 * this.qT - this.aQJ) / this.aQK, 3 !== this.oA && (bb.dZ = !0)) : (tP = (tP = Math.floor(kg / (this.a0 / this.a6T.length))) <
			0 ? 0 : tP >= this.a6T.length ? this.a6T.length - 1 : tP) !== this.oA && (this.oA = tP, this.aQS(), bb.dZ = !0)), !0)
	}, this.xg = function(kg, kh) {
		return this.aQR[0] = kg, this.aQR[1] = kh, !(!this.ui || !this.aQQ || (kg -= bH.ew(au.a0 - this.a0, 2), kh = this.aQP, this.aQP = (kg - 2 * this.qT - this.aQJ) / this.aQK, (0 <= this.aQP && this.aQP <= 1 || 0 <= kh && kh <= 1) && (bb
			.dZ = !0), 0))
	}, this.y6 = function() {
		this.aQQ && (this.aQQ = !1)
	}, this.yI = function() {
		this.ui ? this.qg() : this.show()
	}, this.show = function() {
		bZ.aKF < 2 || (this.ui = !0, this.aQS())
	}, this.qg = function() {
		this.ui = !1, this.aQP = -1, bb.dZ = !0
	}, this.aQS = function() {
		this.oA < 2 ? this.aQJ = aL.measureText(b7.wu.a04(bZ.max[this.oA]), b7.pA.qR(0, this.aQN)) : 2 === this.oA && (this.aQJ = aL.measureText(b7.wu.a09(6, 2), b7.pA.qR(0, this.aQN))), this.aQK = this.a0 - 2 * this.qT - this.aQJ - this.qU
	}, this.lF = function() {
		this.ui && this.aQS()
	}, this.r9 = function() {
		this.ui && this.a4Q()
	}, this.a4Q = function() {
		var eb = bH.ew(au.a0 - this.a0, 2),
			ed = bH.ew(au.j5 - this.j5, 2);
		rA.setTransform(1, 0, 0, 1, eb, ed), rA.fillStyle = u.mS, rA.fillRect(0, this.aQM, this.a0, this.j5 - this.aQM), this.aQT(), this.aJO(), rA.strokeRect(0, 0, this.a0, this.j5), b7.pA.textAlign(rA, 2), rA.font = b7.pA.qR(0, this.aQN), 0 ===
			this.oA ? this.aQU(bZ.wy, eb, ed) : 1 === this.oA ? this.aQU(bZ.ze, eb, ed) : 2 === this.oA ? this.aQV(eb, ed) : 3 === this.oA && (this.aQW(eb, ed), this.aQX(eb, ed)), aH.a1q(Math.floor(eb + this.a0 - .725 * this.aQM), Math.floor(ed +
				.275 * this.aQM), Math.floor(.45 * this.aQM)), rA.setTransform(1, 0, 0, 1, 0, 0)
	}, this.aQT = function() {
		var a6, e3;
		for (rA.lineWidth = this.a3Y, b7.pA.textBaseline(rA, 1), b7.pA.textAlign(rA, 1), rA.strokeStyle = u.mV, rA.font = b7.pA.qR(1, this.aQO), e3 = this.a0 / this.a6T.length, rA.fillStyle = u.mo, rA.fillRect(this.oA * e3, this.j5 - this.aG2,
				e3, this.aG2), rA.fillStyle = u.mV, rA.fillRect(0, this.j5 - this.aG2 - .5 * this.a3Y, this.a0, this.a3Y), a6 = 1; a6 <= 3; a6++) rA.fillRect(a6 * e3, this.j5 - this.aG2, this.a3Y, this.aG2);
		for (a6 = this.a6T.length - 1; 0 <= a6; a6--) rA.fillText(b7.uQ.zD(this.a6T[a6], 0, .9 * e3), (a6 + .5) * e3, this.j5 - .46 * this.aG2)
	}, this.aJO = function() {
		rA.fillStyle = u.n7, rA.fillRect(0, 0, this.a0, this.aQM), rA.fillStyle = u.mV, rA.fillRect(0, this.aQM - .5 * this.a3Y, this.a0, this.a3Y), rA.font = b7.pA.qR(1, .39 * this.aQM), rA.fillText(b7.uQ.zD(L(393), 0, .8 * this.a0), Math.floor(
			this.a0 / 2), Math.floor(.55 * this.aQM))
	}, this.aQU = function(g, eb, ed) {
		var kL = bZ.max[this.oA],
			yc = (rA.setTransform(1, 0, 0, 1, eb + 2 * this.qT + this.aQJ, ed + this.a49 + this.aQM), rA.lineWidth = 2, this.aAI / Math.sqrt(kL));
		rA.beginPath(), rA.moveTo(this.aQK, this.aAI - yc * Math.sqrt(g[bZ.aKF - 1]));
		for (var a6 = bZ.aKF - 2; 0 <= a6; a6--) rA.lineTo(a6 * this.aQK / (bZ.aKF - 1), this.aAI - yc * Math.sqrt(g[a6]));
		rA.stroke();
		eb = this.a1q(g, yc, .5);
		eb < .95 && rA.fillText(b7.wu.a04(kL), -this.qT, 0), .05 < Math.abs(eb - .5) && rA.fillText(b7.wu.a04(Math.floor(kL / 4)), -this.qT, Math.floor(this.aAI / 2)), .05 < eb && rA.fillText("0", -this.qT, this.aAI)
	}, this.aQV = function(eb, ed) {
		rA.setTransform(1, 0, 0, 1, eb + 2 * this.qT + this.aQJ, ed + this.a49 + this.aQM), rA.lineWidth = 2;
		var yc = this.aAI / Math.max(bZ.max[this.oA], 1);
		rA.beginPath(), rA.moveTo(this.aQK, this.aAI - yc * bZ.a6q[bZ.aKF - 1]);
		for (var a6 = bZ.aKF - 2; 0 <= a6; a6--) rA.lineTo(a6 * this.aQK / (bZ.aKF - 1), this.aAI - yc * bZ.a6q[a6]);
		rA.stroke();
		eb = this.a1q(bZ.a6q, yc, 1), ed = bZ.max[this.oA] / 100;
		eb < .95 && rA.fillText(b7.wu.a09(ed, 2), -this.qT, 0), .05 < Math.abs(eb - .5) && rA.fillText(b7.wu.a09(ed / 2, 2), -this.qT, Math.floor(this.aAI / 2)), .05 < eb && rA.fillText(b7.wu.a09(0, 2), -this.qT, this.aAI)
	}, this.aQW = function(eb, ed) {
		rA.setTransform(1, 0, 0, 1, eb + .34 * this.a0, ed + 2 * aQL + this.aQM), b7.pA.textAlign(rA, 2);
		for (var a6E = this.j5 - 4 * aQL - this.aG2 - this.aQM, g = [0, 1, 19, 2, 20, 3, 4, 5, 6, 7], a6 = 9; 0 <= a6; a6--) rA.fillText(b7.uQ.zD(bZ.aQE[g[a6]], 0, .31 * this.a0), 0, a6 * a6E / 9);
		var ex = bZ.lO;
		for (rA.setTransform(1, 0, 0, 1, eb + .39 * this.a0, ed + 2 * aQL + this.aQM), b7.pA.textAlign(rA, 0), rA.fillText(b7.wu.a09(100 * ex[0] / (1024 * Math.max(ex[1], 1)), 1), 0, 0), a6 = 8; 1 <= a6; a6--) rA.fillText(ex[g[a6]].toString(), 0,
			a6 * a6E / 9);
		rA.fillText(b7.wu.a09(100 * (1 - ab.gJ[a8.eE] / ex[7]), 0), 0, a6E)
	}, this.aQX = function(eb, ed) {
		rA.setTransform(1, 0, 0, 1, eb + .79 * this.a0, ed + 2 * aQL + this.aQM), b7.pA.textAlign(rA, 2);
		var a6, a6E = this.j5 - 4 * aQL - this.aG2 - this.aQM;
		for (rA.fillStyle = u.mj, a6 = 2; 0 <= a6; a6--) rA.fillText(b7.uQ.zD(bZ.aQE[a6 + 8], 0, .31 * this.a0), 0, a6 * a6E / 9);
		rA.fillText(b7.uQ.zD(bZ.aQE[18], 0, .31 * this.a0), 0, 3 * a6E / 9), rA.fillStyle = u.mi, rA.fillText(b7.uQ.zD(bZ.aQE[11], 0, .31 * this.a0), 0, 4 * a6E / 9), rA.fillStyle = u.my, rA.fillText(b7.uQ.zD(bZ.aQE[13], 0, .31 * this.a0), 0, 5 *
				a6E / 9), rA.fillText(b7.uQ.zD(bZ.aQE[15], 0, .31 * this.a0), 0, 6 * a6E / 9), rA.fillText(b7.uQ.zD(bZ.aQE[16], 0, .31 * this.a0), 0, 7 * a6E / 9), rA.fillText(b7.uQ.zD(bZ.aQE[12], 0, .31 * this.a0), 0, 8 * a6E / 9), rA
			.fillStyle = u.mx, rA.fillText(b7.uQ.zD(bZ.aQE[17], 0, .31 * this.a0), 0, a6E), rA.fillStyle = u.mj;
		var ex = bZ.lO,
			aJb = ex[8] + ex[9] + ex[10] + ex[18],
			aJb = b7.wu.a04(aJb),
			aIF = rA.measureText(aJb).width,
			eb = (rA.setTransform(1, 0, 0, 1, eb + .83 * this.a0 + aIF, ed + 2 * aQL + this.aQM), rA.fillText(b7.wu.a04(ex[8]), 0, 0), rA.fillText(b7.wu.a04(ex[9]), 0, a6E / 9), rA.fillText(b7.wu.a04(ex[10]), 0, 2 * a6E / 9), rA.fillText(b7.wu
				.a04(ex[18]), 0, 3 * a6E / 9), rA.fillStyle = u.mi, rA.fillText(aJb, 0, 4 * a6E / 9), rA.fillStyle = u.my, rA.fillText(b7.wu.a04(ex[13]), 0, 5 * a6E / 9), rA.fillText(b7.wu.a04(ex[15]), 0, 6 * a6E / 9), rA.fillText(b7.wu.a04(
				ex[16]), 0, 7 * a6E / 9), rA.fillText(b7.wu.a04(ex[12]), 0, 8 * a6E / 9), ex[12] + ex[13] + ex[15] + ex[16]);
		rA.fillStyle = u.mx, rA.fillText(b7.wu.a04(eb), 0, a6E), rA.fillStyle = u.mV
	}, this.a1q = function(g, yc, a51) {
		var a6, e, fD;
		return this.aQP < 0 || 1 < this.aQP ? .25 : (a6 = this.aQP * (bZ.aKF - 1), fD = g[e = Math.floor(a6)], fD += (a6 - e) * (g[e < bZ.aKF - 1 ? e + 1 : e] - fD), rA.strokeStyle = u.mY, .04 < this.aQP && this.aQZ(0, this.aAI - yc * Math.pow(
				fD, a51), a6 * this.aQK / (bZ.aKF - 1), this.aAI - yc * Math.pow(fD, a51)), .04 < fD / bZ.max[this.oA] && this.aQZ(a6 * this.aQK / (bZ.aKF - 1), this.aAI, a6 * this.aQK / (bZ.aKF - 1), this.aAI - yc * Math.pow(fD, a51)), rA
			.fillStyle = u.n0, rA.beginPath(), rA.arc(a6 * this.aQK / (bZ.aKF - 1), this.aAI - yc * Math.pow(fD, a51), Math.max(2, .014 * this.j5), 0, 2 * Math.PI), rA.fill(), g = this.aQP * bb.a6s, g = 0 === ab.lS[a8.eE] ? Math.floor(g * bZ
				.aQD) : Math.floor(g * bb.jY()), rA.fillStyle = u.mV, rA.fillText(1 === a51 ? b7.wu.a09(fD / 100, 2) : b7.wu.a04(Math.floor(fD)), -this.qT, this.aAI - yc * Math.pow(fD, a51)), b7.pA.textAlign(rA, 1), rA.fillText(aR.a6h(g),
				a6 * this.aQK / (bZ.aKF - 1), this.aAI + this.aQN - (r.s.v8() ? 2 : 0) - this.a3Y), b7.pA.textAlign(rA, 2), yc * Math.pow(fD, a51) / this.aAI)
	}, this.aQZ = function(lu, lv, m8, m9) {
		rA.beginPath(), rA.moveTo(lu, lv), rA.lineTo(m8, m9), rA.stroke()
	}
}

function bp() {
	this.aQa = "https://", this.aQb = this.aQa + "territorial.io/", this.aKG = this.aQb + "changelog", this.aKK = this.aQb + "terms", this.aQc = this.aQb + "cookie_policy", this.aJg = this.aQb + "privacy", this.aKJ = this.aQb + "tutorial", this.aKI =
		this.aQb + "players", this.aKH = this.aQb + "clans", this.x0 = this.aQb + "clan-results", this.a84 = this.aQa + "play.google.com/store/apps/details?id=territorial.io", this.xE = this.aQa + "apps.apple.com/app/id1581110913", this.aQd = this
		.aQa + "www.youtube.com/watch?v=toZTQ8aRdFc", this.a85 = this.aQa + "discord.gg/pthqvpTXmh", this.a86 = this.aQa + "www.instagram.com/davidtschacher/", this.v1 =
		"🇦🇫🇦🇽🇦🇱🇩🇿🇦🇸🇦🇩🇦🇴🇦🇮🇦🇶🇦🇬🇦🇷🇦🇲🇦🇼🇦🇺🇦🇹🇦🇿🇧🇸🇧🇭🇧🇩🇧🇧🇧🇾🇧🇪🇧🇿🇧🇯🇧🇲🇧🇹🇧🇴🇧🇦🇧🇼🇧🇷🇮🇴🇻🇬🇧🇳🇧🇬🇧🇫🇧🇮🇨🇻🇰🇭🇨🇲🇨🇦🇮🇨🇰🇾🇨🇫🇹🇩🇨🇱🇨🇳🇨🇽🇨🇨🇨🇴🇰🇲🇨🇬🇨🇩🇨🇷🇭🇷🇨🇺🇨🇼🇨🇾🇨🇿🇩🇰🇩🇯🇩🇲🇩🇴🇪🇨🇪🇬🇸🇻🇬🇶🇪🇷🇪🇪🇸🇿🇪🇹🇪🇺🇫🇰🇫🇴🇫🇯🇫🇮🇫🇷🇬🇫🇵🇫🇹🇫🇬🇦🇬🇲🇬🇪🇩🇪🇬🇭🇬🇮🇬🇷🇬🇱🇬🇩🇬🇵🇬🇺🇬🇹🇬🇬🇬🇳🇬🇼🇬🇾🇭🇹🇭🇳🇭🇰🇭🇺🇮🇸🇮🇳🇮🇩🇮🇷🇮🇶🇮🇪🇮🇲🇮🇱🇮🇹🇨🇮🇯🇲🇯🇵🇯🇪🇯🇴🇰🇿🇰🇪🇰🇮🇽🇰🇰🇼🇰🇬🇱🇦🇱🇻🇱🇧🇱🇸🇱🇷🇱🇾🇱🇮🇱🇹🇱🇺🇲🇴🇲🇰🇲🇬🇲🇼🇲🇾🇲🇻🇲🇱🇲🇹🇲🇭🇲🇶🇲🇷🇲🇺🇾🇹🇲🇽🇫🇲🇲🇩🇲🇨🇲🇳🇲🇪🇲🇸🇲🇦🇲🇿🇲🇲🇳🇦🇳🇷🇳🇵🇳🇱🇳🇨🇳🇿🇳🇮🇳🇪🇳🇬🇳🇺🇳🇫🇰🇵🇲🇵🇳🇴🇴🇲🇵🇰🇵🇼🇵🇸🇵🇦🇵🇬🇵🇾🇵🇪🇵🇭🇵🇱🇵🇹🇵🇷🇶🇦🇷🇴🇷🇺🇷🇼🇼🇸🇸🇲🇸🇹🇸🇦🇸🇳🇷🇸🇸🇨🇸🇱🇸🇬🇸🇽🇸🇰🇸🇮🇸🇧🇸🇴🇿🇦🇬🇸🇰🇷🇸🇸🇪🇸🇱🇰🇧🇱🇸🇭🇰🇳🇱🇨🇲🇫🇵🇲🇻🇨🇸🇩🇸🇷🇸🇪🇸🇾🇨🇭🇹🇼🇹🇯🇹🇿🇹🇭🇹🇱🇹🇬🇹🇰🇹🇴🇹🇹🇹🇳🇹🇷🇹🇲🇹🇨🇹🇻🇺🇬🇺🇦🇦🇪🇬🇧🇺🇳🇺🇸🇻🇮🇺🇾🇺🇿🇻🇺🇻🇦🇻🇪🇻🇳🇼🇫🇪🇭🇾🇪🇿🇲🇿🇼"
}

function d0() {
	this.l6 = new aQe, this.uN = new aQf, this.dR = function() {
		this.l6.dR()
	}, this.iQ = function() {
		0 !== this.l6.a2u && this.l6.a2u--
	}
}

function aQf() {
	this.r9 = function() {
		if (0 !== bL.l6.a2u && (rA.globalAlpha = Math.min(bL.l6.a2u / 580, 1), rA.drawImage(bL.l6.aQi, 1 + aN.uL(), 1 + aN.uM()), rA.globalAlpha = 1, a8.gr)) {
			for (var lu = ht / hu, lv = hv / hu, m8 = (au.a0 + ht) / hu, m9 = (au.j5 + hv) / hu, g4 = bL.l6.aQj * hu, aQk = bL.l6.aQk, a6 = a8.jb - 1; 0 <= a6; a6--) ! function(a6, g4, lu, lv, m8, m9, aQk) {
				var highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[a6];
				if (highlight) g4 *= 2;
				0 === ab.lS[a6] || 0 === ab.gJ[a6] || (m8 = au.a0 * ((ab.i7[a6] + ab.i8[a6] + 1) / 2 - lu) / (m8 - lu) - .5 * g4, lu = au.j5 * ((ab.i9[a6] + ab.iA[a6] + 1) / 2 - lv) / (m9 - lv) - .5 * g4, m8 > au.a0) || lu > au.j5 || m8 < -
					g4 || lu < -g4 || (rA.setTransform(highlight ? hu * 2 : hu, 0, 0, highlight ? hu * 2 : hu, m8, lu), rA.drawImage(aQk[a8.ib ? bc.eS[a6] : 1], 0, 0))
			}(a6, g4, lu, lv, m8, m9, aQk);
			rA.setTransform(hu, 0, 0, hu, 0, 0)
		}
	}
}

function aQe() {
	this.aQj = 28, this.a2u = 0, this.aQi = null;
	var aQm = this.aQk = null;

	function aQp(h8, aQq) {
		var eb, ed, eG, he, z1 = b7.pA.sg(h8, h8),
			hE = b7.pA.getContext(z1, !0),
			hB = b7.pA.getImageData(hE, h8, h8),
			sr = hB.data,
			kL = (h8 >> 1) - .5,
			aQr = .5 + kL;
		for (aQr *= aQr, ed = 0; ed < h8; ed++)
			for (eb = 0; eb < h8; eb++) he = (he = eb - kL) * he + (he = ed - kL) * he, sr[eG = 4 * (ed * h8 + eb)] = aQq[0], sr[1 + eG] = aQq[1], sr[2 + eG] = aQq[2], sr[3 + eG] = (aQr - he) * aQq[3] / aQr;
		return hE.putImageData(hB, 0, 0), z1
	}

	function aPy(a6, hE, z1, h8) {
		var eb, y, highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[a6];
		if (highlight) h8 *= 2;
		0 !== ab.lS[a6] && 0 !== ab.gJ[a6] && (eb = ab.i7[a6] + ab.i8[a6] + 1 - h8 - 2 >> 1, y = ab.i9[a6] + ab.iA[a6] + 1 - h8 - 2 >> 1,
			highlight ? hE.drawImage(z1[a8.ib ? bc.eS[a6] : a6 < a8.jb ? 1 : 0], eb, y, h8, h8) :
			hE.drawImage(z1[a8.ib ? bc.eS[a6] : a6 < a8.jb ? 1 : 0], eb, y))
	}
	this.dR = function() {
		var wb;
		this.a2u = 700,
			function(wb) {
				var h8 = wb.aQj;
				if (wb.aQk = [], aQm = [], a8.ib)
					for (var a6 = 0; a6 <= a8.tU; a6++) wb.aQk.push(aQp(h8, bc.aOq[bc.k1[a6]])), aQm.push(aQp(h8 >> 1, bc.aOq[bc.k1[a6]]));
				else wb.aQk.push(aQp(h8, bc.aOq[7])), wb.aQk.push(aQp(h8, bc.aOq[4])), aQm.push(aQp(h8 >> 1, bc.aOq[7]))
			}(this),
			function(wb, aQs) {
				var a6, aQi = wb.aQi,
					hE = b7.pA.getContext(aQi, !0),
					eU = a8.eR,
					h8 = wb.aQj >> 1;
				hE.imageSmoothingEnabled = !1, hE.setTransform(1, 0, 0, 1, 0, 0), aQs && hE.clearRect(0, 0, aQi.width, aQi.height);
				for (a6 = a8.jb; a6 < eU; a6++) aPy(a6, hE, aQm, h8)
			}(this, null !== (wb = this).aQi && wb.aQi.width === bO.ef - 2 && wb.aQi.height === bO.eg - 2 || (wb.aQi = b7.pA.sg(bO.ef - 2, bO.eg - 2), !1)), a8.gr || this.a0R()
	}, this.aOp = aQp, this.a0R = function() {
		for (var eU = a8.jb, h8 = this.aQj, aQk = this.aQk, hE = b7.pA.getContext(this.aQi, !0), a6 = 0; a6 < eU; a6++) aPy(a6, hE, aQk, h8)
	}
}

function d1() {
	function aQt(player) {
		a8.gr ? (af.aB9(player), ag.aE5(), a8.jx && a8.oR.iQ()) : b0.aE3(player)
	}
	this.nq = function(player) {
		return !!aH.a1p(player) && (aI.wG(player, player === a8.eE ? 21 : 22), aQt(player), !0)
	}, this.oO = function(player) {
		1 === a8.w4 && 0 !== ab.lS[player] && 2 !== ab.zX[player] && aQt(player), a8.w7--, a8.w6--, aI.wG(player, 4), b7.fr.gh(2) && aR.lE(!0)
	}
}

function dB() {
	this.a9n = ["rgba(90,90,90,0.88)", "rgba(130,12,12,0.88)", "rgba(12,130,12,0.88)", "rgba(12,12,130,0.88)", "rgba(130,130,12,0.88)", "rgba(130,12,130,0.88)", "rgba(12,130,130,0.88)", "rgba(130,130,130,0.88)", "rgba(0,0,0,0.88)"], this.a6C = [
		"rgb(210,200,200)", "rgb(255,120,120)", "rgb(0,230,0)", "rgb(150,150,255)", "rgb(240,240,25)", "rgb(255,70,255)", "rgb(25,240,240)", u.mV, "rgb(170,170,170)"
	], this.aQu = [u.mV, "rgb(255,0,0)", "rgb(0,255,0)", "rgb(0,0,255)", "rgb(255,255,0)", "rgb(255,0,255)", "rgb(0,255,255)", u.mV, u.mM], this.aQv = [u.mM, u.mV, u.mV, u.mV, u.mM, u.mM, u.mM, u.mM, u.mV];
	var aQw = ["255,255,255", "0,0,0", "255,4,4", "200,4,4", "4,255,4", "4,180,4", "255,195,195", "90,3,3", "200,255,200", "3,84,3"],
		aQx = (this.aDZ = ["rgba(" + aQw[0] + ",", "rgba(" + aQw[1] + ",", "rgba(" + aQw[2] + ",", "rgba(" + aQw[3] + ",", "rgba(" + aQw[4] + ",", "rgba(" + aQw[5] + ",", "rgba(" + aQw[6] + ",", "rgba(" + aQw[7] + ",", "rgba(" + aQw[8] + ",",
			"rgba(" + aQw[9] + ","
		], this.aDa = ["rgb(" + aQw[0] + ")", "rgb(" + aQw[1] + ")", "rgb(" + aQw[2] + ")", "rgb(" + aQw[3] + ")", "rgb(" + aQw[4] + ")", "rgb(" + aQw[5] + ")", "rgb(" + aQw[6] + ")", "rgb(" + aQw[7] + ")", "rgb(" + aQw[8] + ")", "rgb(" + aQw[
			9] + ")"
		], this.wQ = null, this.aOq = [
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
	this.k1 = [0, 1, 2, 3, 4, 5, 6, 7, 8], this.eS = new Uint8Array(a8.eR), this.wq = null, this.aQy = null, this.ta = new Uint16Array(a8.eR), this.tb = new Uint16Array(this.k1.length + 1), this.tc = new Uint16Array(this.k1.length), this.dS =
		function() {
			this.wQ = [L(394), L(395), L(396), L(397), L(398), L(399), L(400), L(401), L(402)]
		}, this.dR = function() {
			if (this.eS.fill(0), this.aQz(), a8.ib) {
				9 === a8.jv ? this.aR0() : a8.jx ? function() {
					var colorsData = a8.data.colorsData;
					if (!a8.data.selectableColor)
						for (var a6 = a8.jb - 1; 0 <= a6; a6--) colorsData[a6] = av.it(262144);
					var aR9 = 0,
						ek = 768,
						aM7 = [4 * (colorsData[0] >> 12), 4 * (colorsData[0] >> 6 & 63), 4 * (63 & colorsData[0])],
						teamPlayerCount = a8.data.teamPlayerCount;
					for (a6 = 0; a6 < 9; a6++)
						if (teamPlayerCount[a6]) {
							for (var eX = 0, eo = 0; eo < 3; eo++) eX += Math.abs(aQx[a6][eo] - aM7[eo]);
							eX < ek && (aR9 = a6, ek = eX)
						} var aRA = new Uint16Array(9);
					for (a6 = 0; a6 < 9; a6++) aRA[a6] = teamPlayerCount[a6];
					var k1 = bc.k1,
						aRB = new Uint8Array(9),
						fy = (k1[0] = 0, 1);
					for (a6 = 1; a6 < 9; a6++) aRA[a6] && (aRB[a6] = fy, k1[fy++] = a6);
					var is = a8.jb,
						eS = bc.eS;
					aRA[aR9] ? (aRA[aR9]--, eS[0] = aRB[aR9]) : is = 0;
					var ep = 0;
					for (a6 = is; a6 < a8.tN; a6++) {
						var k0 = k1[ep];
						if (aRA[k0]) aRA[k0]--, eS[a6] = aRB[k0];
						else if (a6--, 9 <= ++ep) return console.log("error 325")
					}
				}() : this.iQ();
				for (var eU = a8.eR, ta = bc.ta, tb = bc.tb, tc = bc.tc, eS = bc.eS, k1 = bc.k1, tT = k1.length, dj = new Array(tT), a6 = 0; a6 < tT; a6++) dj[a6] = [];
				for (a6 = 0; a6 < eU; a6++) dj[k1[eS[a6]]].push(a6);
				for (a6 = 1; a6 <= tT; a6++) tb[a6] = tb[a6 - 1] + dj[a6 - 1].length;
				for (a6 = 0; a6 < tT; a6++)
					for (var fy = dj[a6].length, kL = tb[a6], k0 = 0; k0 < fy; k0++) ta[k0 + kL] = dj[a6][k0];
				var jb = a8.jb;
				for (a6 = 0; a6 < tT; a6++)
					for (fy = dj[a6].length, kL = tb[a6], k0 = 0; k0 < fy; k0++)
						if (ta[k0 + kL] >= jb) {
							tc[a6] = k0;
							break
						}
			}
		}, this.aQz = function() {
			for (var a6 = this.k1.length - 1; 0 <= a6; a6--) this.k1[a6] = a6;
			this.wq = [], this.aQy = []
		}, this.aR0 = function() {
			for (var a6 = a8.data.teamPlayerCount[7] - 1; 0 <= a6; a6--) this.eS[a6] = 1;
			for (a6 = a8.data.teamPlayerCount[7]; a6 < a8.eR; a6++) this.eS[a6] = 2;
			this.k1[1] = 7, this.k1[2] = 8
		}, this.iQ = function() {
			var hN = new Uint8Array(a8.jb),
				hO = new Uint8Array(a8.jb),
				aR3 = new Uint16Array(8),
				aR4 = new Uint16Array(this.k1.length);
			this.aR5(hN, hO, aR3, 1), this.aAm(aR3), this.aR6(aR4, hN, hO), this.aR7(hN, hO, aR4), this.aR8()
		}, this.aR5 = function(hN, hO, aRA, aRC) {
			for (var eo, e, aRD, eU = this.k1.length - aRC, g = new Uint16Array(eU), colorsData = a8.data.colorsData, a6 = a8.jb - 1; 0 <= a6; a6--) {
				for (eo = eU; aRC <= eo; eo--) g[eo - 1] = Math.abs(4 * (colorsData[a6] >> 12) - aQx[eo][0]) + Math.abs(4 * (colorsData[a6] >> 6 & 63) - aQx[eo][1]) + Math.abs(4 * (63 & colorsData[a6]) - aQx[eo][2]);
				for (aRD = 768, eo = eU - 1; 0 <= eo; eo--) g[e = (eo + a6) % eU] < aRD && (aRD = g[e], hN[a6] = e);
				for (aRA[hN[a6]] += 4, aRD = 768, eo = eU - 1; 0 <= eo; eo--) g[e = (eo + a6) % eU] < aRD && e !== hN[a6] && (aRD = g[e], hO[a6] = e);
				aRA[hO[a6]]++
			}
		}, this.aAm = function(aRA) {
			for (var eo, kN, eU = this.k1.length - 1, a6 = eU; 0 <= a6; a6--) this.k1[a6] = a6;
			for (a6 = eU - 1; 0 <= a6; a6--) aRA[a6]++;
			for (a6 = 1; a6 <= eU; a6++) {
				for (kN = 0, eo = 1; eo < eU; eo++) aRA[eo] > aRA[kN] && (kN = eo);
				aRA[kN] = 0, this.k1[a6] = kN + 1
			}
		}, this.aR6 = function(aR4, hN, hO) {
			var a6, eo, aLo, ep, eX, e, m6, qh, aRE = this.k1.length - 1,
				pc = new Uint16Array(aRE),
				aRF = [],
				a49 = Math.max(a8.jb + 1 >> 1, 6);
			loop: for (a6 = 0; a6 < a8.jb; a6++)
				if (null !== (aLo = b7.wu.wv(ab.ww[a6]))) {
					for (eo = this.wq.length - 1; 0 <= eo; eo--)
						if (aLo === this.wq[eo] && this.aQy[eo].length < a49) {
							this.aQy[eo].push(a6);
							continue loop
						} this.wq.push(aLo), aRF.push(!1), this.aQy.push([a6])
				}
			for (eo = this.wq.length - 1; 0 <= eo; eo--) {
				for (eX = -1, ep = this.wq.length - 1; 0 <= ep; ep--) !aRF[ep] && (-1 === eX || this.aQy[ep].length > this.aQy[eX].length) && (eX = ep);
				for (ep = aRE - 1; 0 <= ep; ep--) pc[ep] = 1;
				for (ep = this.aQy[eX].length - 1; 0 <= ep; ep--) pc[hN[this.aQy[eX][ep]]] += 3, pc[hO[this.aQy[eX][ep]]]++;
				for (a6 = aRE - 1; 0 <= a6; a6--) {
					for (e = eX % aRE, ep = aRE - 1; 0 <= ep; ep--) pc[ep] > pc[e] && (e = ep);
					for (m6 = -1, ep = a8.tU; 0 < ep; ep--)
						if (this.k1[ep] === e + 1) {
							m6 = ep;
							break
						} if (pc[e] = 0, -1 !== m6) {
						for (qh = 0, ep = a8.tU; 0 < ep; ep--) aR4[m6] > aR4[ep] && qh++;
						if (qh !== a8.tU - 1) {
							for (ep = this.aQy[eX].length - 1; 0 <= ep; ep--) aR4[m6]++, this.eS[this.aQy[eX][ep]] = m6;
							break
						}
					}
				}
				aRF[eX] = !0
			}
		}, this.aR7 = function(hN, hO, aR4) {
			for (var a6, hd, eU = this.k1.length - 1, border = bH.ew(a8.jb, a8.tU), aRG = (0 < a8.jb % a8.tU && border++, new Uint8Array(1 + eU)), eo = eU; 1 <= eo; eo--) aRG[this.k1[eo]] = eo;
			for (a6 = 0; a6 < a8.jb; a6++) hd = aRG[hN[a6] + 1], 0 === this.eS[a6] && hd <= a8.tU && aR4[hd] < border && (aR4[hd]++, this.eS[a6] = hd);
			for (a6 = 0; a6 < a8.jb; a6++) hd = aRG[hO[a6] + 1], 0 === this.eS[a6] && hd <= a8.tU && aR4[hd] < border && (aR4[hd]++, this.eS[a6] = hd);
			for (eo = a8.tU; 1 <= eo; eo--)
				for (a6 = a8.jb - 1; 0 <= a6 && !(aR4[eo] >= border); a6--) 0 === this.eS[a6] && (aR4[eo]++, this.eS[a6] = eo)
		}, this.aR8 = function() {
			for (var a6 = a8.jb; a6 < a8.eR; a6++) this.eS[a6] = 1 + a6 % a8.tU
		}
}

function gK() {
	for (var eb, ed, a6 = fQ - 1; 0 <= a6; a6--) eb = bH.ew(fS[a6], 4) % bO.ef, ed = bH.ew(fS[a6], 4 * bO.ef), ab.i7[fL] = ab.i7[fL] > eb ? eb : ab.i7[fL], ab.i9[fL] = ab.i9[fL] > ed ? ed : ab.i9[fL], ab.i8[fL] = ab.i8[fL] < eb ? eb : ab.i8[fL], ab
		.iA[fL] = ab.iA[fL] < ed ? ed : ab.iA[fL]
}

function ff() {
	var eX, g3, a6, eU = ab.fx[fL].length,
		eW = aX.eW;
	loop: for (a6 = eU - 1; 0 <= a6; a6--) {
		for (eX = 3; 0 <= eX; eX--)
			if (g3 = ab.fx[fL][a6] + eW[eX], aX.eL(g3) || aX.g5(g3) && aX.eM(g3) !== fL) {
				aX.io(ab.fx[fL][a6], fL);
				continue loop
			} ab.fx[fL][a6] = ab.fx[fL][eU - 1], ab.fx[fL].pop(), eU--
	}
}

function fg() {
	var player = fL,
		gB = ab.gB,
		gC = ab.gC,
		eu = ab.eu,
		eU = gB[player].length,
		eW = aX.eW;
	loop: for (var a6 = eU - 1; 0 <= a6; a6--) {
		for (var aRH = !1, aRI = !1, eX = 3; 0 <= eX; eX--) {
			var g3 = gB[player][a6] + eW[eX];
			if (aX.aAw(g3, player)) continue loop;
			aRH = aRH || aX.gy(g3), aRI = aRI || aX.aAv(g3)
		}
		aRH ? gC[player].push(gB[player][a6]) : aRI ? eu[player].push(gB[player][a6]) : aX.tw(gB[player][a6], player), gB[player][a6] = gB[player][eU - 1], gB[player].pop(), eU--
	}
}

function g9() {
	ab.gJ[fP] -= fQ
}

function gA(border) {
	for (var eU = border.length, a6 = eU - 1; 0 <= a6; a6--) aX.uG(fP, border[a6]) || (border[a6] = border[eU - 1], border.pop(), eU--)
}

function gD(border) {
	for (var eU = border.length, a6 = eU - 1; 0 <= a6; a6--) !aX.uG(fP, border[a6]) && aX.eP(border[a6]) && (border[a6] = border[eU - 1], border.pop(), eU--)
}

function gE(border) {
	for (var eX, g3, eU = border.length, eW = aX.eW, a6 = eU - 1; 0 <= a6; a6--)
		for (eX = 3; 0 <= eX; eX--)
			if (g3 = border[a6] + eW[eX], aX.aAw(g3, fP)) {
				ab.gB[fP].push(border[a6]), border[a6] = border[eU - 1], border.pop(), eU--;
				break
			}
}

function gF() {
	for (var eX, g3, eW = aX.eW, a6 = fQ - 1; 0 <= a6; a6--)
		for (eX = 3; 0 <= eX; eX--) g3 = fS[a6] + eW[eX], aX.aAx(fP, g3) && aX.aAy(g3) && (ab.gB[fP].push(g3), aX.g0(g3, fP))
}

function gG() {
	var eb, ed;
	loop: for (; ab.i9[fP] < ab.iA[fP];) {
		for (eb = ab.i8[fP]; eb >= ab.i7[fP]; eb--)
			if (aX.uG(fP, 4 * (ab.i9[fP] * bO.ef + eb))) break loop;
		ab.i9[fP]++
	}
	loop: for (; ab.i9[fP] < ab.iA[fP];) {
		for (eb = ab.i8[fP]; eb >= ab.i7[fP]; eb--)
			if (aX.uG(fP, 4 * (ab.iA[fP] * bO.ef + eb))) break loop;
		ab.iA[fP]--
	}
	loop: for (; ab.i7[fP] < ab.i8[fP];) {
		for (ed = ab.iA[fP]; ed >= ab.i9[fP]; ed--)
			if (aX.uG(fP, 4 * (ed * bO.ef + ab.i7[fP]))) break loop;
		ab.i7[fP]++
	}
	loop: for (; ab.i7[fP] < ab.i8[fP];) {
		for (ed = ab.iA[fP]; ed >= ab.i9[fP]; ed--)
			if (aX.uG(fP, 4 * (ed * bO.ef + ab.i8[fP]))) break loop;
		ab.i8[fP]--
	}
}

function eN(player, ij) {
	return 0 === bc.eS[player] || bc.eS[player] !== bc.eS[ij]
}

function h4(player, ij) {
	for (var e, aRJ = aY.fb(player), a6 = 0; a6 < aRJ; a6++)
		if (0 === aY.fc(player, a6))
			if ((e = aY.fh(player, a6)) === a8.eR) {
				if (ij === a8.eR) return !1;
				if (h2(ij)) return !0
			} else if (b7.fr.kP(e))
		if (ij === a8.eR) {
			if (h2(e)) return !0
		} else if (h6(ij, e)) return !0;
	return !1
}

function h2(player) {
	for (var a6, g4, eU = ab.gB[player].length, eW = aX.eW, eX = 3; 0 <= eX; eX--)
		for (g4 = eW[eX], a6 = 0; a6 < eU; a6++)
			if (aX.eL(ab.gB[player][a6] + g4)) return !0;
	return !1
}

function aB5(player) {
	for (var a6, g4, eU = ab.gB[player].length, eW = aX.eW, eX = 3; 0 <= eX; eX--)
		for (g4 = eW[eX], a6 = 0; a6 < eU; a6++)
			if (aX.im(ab.gB[player][a6]) && aX.eL(ab.gB[player][a6] + g4)) return !0;
	return !1
}

function h6(za, zb) {
	for (var a6, e3, g4, g3, aP1 = ab.gB[za].length, aP2 = ab.gB[zb].length, eW = (aP2 < aP1 && (e3 = za, za = zb, zb = e3, e3 = aP1, aP1 = aP2, 0), aX.eW), eX = 3; 0 <= eX; eX--)
		for (g4 = eW[eX], a6 = 0; a6 < aP1; a6++)
			if (g3 = ab.gB[za][a6] + g4, aX.g5(g3) && aX.eM(g3) === zb) return !0;
	return !1
}

function aB6(za, zb) {
	for (var a6, g4, g3, aP1 = ab.gB[za].length, eW = aX.eW, eX = 3; 0 <= eX; eX--)
		for (g4 = eW[eX], a6 = 0; a6 < aP1; a6++)
			if (aX.im(ab.gB[za][a6]) && (g3 = ab.gB[za][a6] + g4, aX.g5(g3)) && aX.eM(g3) === zb) return !0;
	return !1
}

function dO() {
	this.ob = new aRK
}

function aRK() {
	this.h1 = function(player) {
		b7.fr.zY(player) && aI.wS(80, L(403), 637, 0, u.n9, u.mS, -1, !1)
	}, this.a1R = function() {
		aI.wS(80, L(404), 637, 0, u.n9, u.mS, -1, !1)
	}, this.ne = function(player) {
		b7.fr.zY(player) && aI.wS(80, L(405), 637, 0, u.n9, u.mS, -1, !1)
	}
}

function aRL() {
	this.aRM = 0, this.iQ = function() {
		aJ.iQ(), aU.iQ(), au.iQ(), ax.l6.iQ(), at.a9I(), bb.dZ && (bb.dZ = !1, aV.r9())
	}
}

function aRN() {
	this.e2 = bb.e2, this.oA = 0, this.aRM = 0, this.a9D = 0, this.aRO = null, this.aRP = 7, this.a2v = 0, this.dR = function() {
		this.a9D = 0, this.aRO = [], this.oA = 0, this.aRM = 0
	}, this.aLW = function(a7) {
		var a6;
		if (a8.gr) this.a6t(a7);
		else if (this.aRO.push(a7), 2 === a8.w4) {
			for (a6 = 0; a6 < this.aRO.length; a6++) b5.nT.iQ(this.aRO[a6]);
			this.aRO = []
		}
	}, this.a6t = function(a7) {
		b5.nT.iQ(a7), b6.iQ(), aR.a6t(this.a9D), this.a9D === a8.a0X ? (a8.oR.iQ(), this.a9D = 0, this.oA = 0, this.aRM = 0, this.e2 = bb.e2) : (this.a9D++, aa.a0Q(), aa.lE(!0), bX.a7R())
	}, this.iQ = function() {
		au.iQ(), a8.gr ? (bb.dZ = aR.a6t(-1) || bb.dZ, lG()) : (0 !== this.oA || bb.e2 >= this.e2 && (this.e2 += bb.a6s * Math.floor(1 + (bb.e2 - this.e2) / bb.a6s), 2 === a8.w4 ? l4() : this.aRQ(), this.oA++, 27 < bb.e2 - this.a2v)) && this
		.aRR(), lB(), bb.dZ && (bb.dZ = !1, uJ()), this.a2v = bb.e2
	}, this.aRR = function() {
		bb.dZ = !0, lD(), this.oA = 0
	}, this.aRQ = function() {
		var rj, a6;
		if (this.aRM !== 7 * this.a9D) l7(), bX.a7R();
		else {
			rj = !1;
			loop: for (; this.aRS() && (rj = !0, l7(), 2 !== a8.w4) && 0 < this.aRO.length;)
				for (a6 = this.aRP - 2; 0 <= a6; a6--)
					if (l7(), 2 === a8.w4) break loop;
			rj ? bX.a7R() : (l4(), bX.a0T())
		}
	}, this.aRS = function() {
		return 0 < this.aRO.length && (this.a9D++, b5.nT.iQ(this.aRO[0]), this.aRO.shift(), !0)
	}
}

function aRT() {
	var aRU, aRV, aRW, a9D, aRX, oA = 0,
		e2 = bb.e2;

	function aRa() {
		! function() {
			if (!a8.gr) return;
			if (a8.jx) return;
			if (aRX % 7 != 0) aRX++;
			else if (a9D === a8.a0X) {
				if (!aRd()) return;
				aR.a6t(a9D), a8.oR.iQ()
			} else {
				if (!aRd()) return;
				aRX++, a9D++, aa.a0Q(), aa.lE(!0)
			}
			return 1
		}() && aRd() && l7()
	}

	function aRb() {
		oA = 0, (a8.gr ? (bb.dZ = aR.a6t(a9D - (aRX % 7 == 0 ? 0 : 1) + aRX % 7 / 7) || bb.dZ, lG) : aH.gg || !b8.a0t ? lG : (bb.dZ = !0, lD))()
	}

	function aRd() {
		var a6, eU, aRe = b6.oP.aMb,
			fD = b6.oP.aMc,
			fF = b6.oP.aMd,
			fH = b6.oP.aMe,
			aRf = b6.oP.aMf,
			aRg = b6.oP.aMg;
		if (!(aRU >= aRg.length)) {
			if (aRg = aRg[aRU], aRf[aRU]) {
				for (eU = aRV + aRg, a6 = aRV; a6 < eU; a6++) b5.nT.oC(aRe[a6], fD[a6], fF[a6], fH[a6]);
				aRV += aRg, aRU++
			} else ++aRW >= aRg && (aRU++, aRW = 0);
			return 1
		}
		aI.xO("Replay file smaller than expected."), b8.yJ(!1), a8.w4 = 2
	}
	this.aRM = 0, this.dR = function() {
		aRX = a9D = aRW = aRV = aRU = 0
	}, this.iQ = function() {
		var aPO;
		au.iQ(), b8.a4L() < 1.7 ? 0 === oA ? bb.e2 >= e2 && (aPO = bb.a6s / b8.a4L(), e2 += aPO * Math.floor(1 + (bb.e2 - e2) / aPO), 2 === a8.w4 || aH.gg || !b8.a0t ? l4() : (aRa(), bX.a7R()), oA++) : aRb() : function() {
			var aPO;
			if (bb.e2 >= e2)
				if (2 === a8.w4 || aH.gg || !b8.a0t) l4(), e2 = bb.e2;
				else {
					for (aPO = bb.a6s / b8.a4L(), 16 < (bb.e2 - e2) / aPO && (e2 = bb.e2 - 16 * aPO); bb.e2 >= e2 && 2 !== a8.w4;) e2 += aPO, aRa();
					bX.a7R()
				} aRb()
		}(), lB(), bb.dZ && (bb.dZ = !1, uJ())
	}, this.wE = function() {
		aRU !== b6.oP.aMg.length && aRU + 1 !== b6.oP.aMg.length && aI.xO("Replay file larger than expected.")
	}
}

function aRh() {
	var oA = 0,
		e2 = bb.e2;
	this.aRM = 0, this.iQ = function() {
		au.iQ(), a8.gr ? lG() : 0 === oA ? bb.e2 >= e2 && (e2 += bb.a6s * Math.floor(1 + (bb.e2 - e2) / bb.a6s), 2 === a8.w4 || aH.gg ? l4() : (l7(), bX.a7R()), oA++) : ((aH.gg ? lG : (bb.dZ = !0, lD))(), oA = 0), lB(), bb.dZ && (bb.dZ = !1,
		uJ())
	}
}

function dJ() {
	this.wD = null, this.dZ = !1, this.e2 = 0, this.a6s = 56;
	var aRi = 0;

	function aRj() {
		bb.e2 = aRi = performance.now(), bb.wD.iQ(), window.requestAnimationFrame(aRj)
	}
	this.dR = function() {
		this.a0r(), window.requestAnimationFrame(aRj), this.e2 = performance.now()
	}, this.a0i = function() {
		a8.gf ? (this.wD = new aRT, this.wD.dR()) : a8.jx ? this.wD = new aRh : (this.wD = new aRN, this.wD.dR())
	}, this.a0r = function() {
		this.wD = new aRL, this.dZ = !0
	}, this.iQ = function() {
		this.wD.aRM++
	}, this.jY = function() {
		return this.wD.aRM
	}, this.aLC = function() {
		var e3 = performance.now();
		e3 < aRi + 1e3 || (this.e2 = e3, this.wD.iQ())
	}
}

function cl() {
	var lf = 0,
		aRk = !0;

	function aRm(or) {
		8 !== aV.xK() || 2 !== ab.zX[a8.eE] && (0 !== ab.lS[a8.eE] || a8.gr) || aI.a2c(or)
	}
	this.iQ = function() {
		var e3, a2y;
		bb.e2 > lf && (lf = bb.e2 + 2500, e3 = new Date, a2y = e3.getUTCSeconds(), aRk ? a2y < 45 && (aRk = !1) : a2y < 45 || (aRk = !0, (a2y = e3.getUTCMinutes() + 1) % 15 == 0 && aRm(30 === a2y ? "Upcoming Battle Royale Contest!" :
			"Upcoming Alliance Contest!")))
	}
}

function cd() {
	var lu, lv, m8, m9, aRn = 0,
		aRo = 0;

	function aRq() {
		return Math.pow(Math.pow(m8 - lu, 2) + Math.pow(m9 - lv, 2), .5)
	}

	function aRp(e) {
		lu = au.pG * e.touches[0].clientX, lv = au.pG * e.touches[0].clientY, m8 = au.pG * e.touches[1].clientX, m9 = au.pG * e.touches[1].clientY
	}
	this.xk = function(e) {
		return 1 < e.touches.length ? (aRo = bb.e2, aRn = 3, aRp(e), aG.qg(), !0) : (aRn = 0, !1)
	}, this.xl = function(e) {
		var aEs, hb, hc;
		return 0 !== a8.w4 && 1 < e.touches.length && (aRn = Math.max(aRn - 1, 0), aC.mD() && (aEs = aRq(), aRp(e), e = aRq(), hb = Math.floor((lu + m8) / 2), hc = Math.floor((lv + m9) / 2), aN.a4l(hb, hc, Math.max(.125, e) / Math.max(.125,
			aEs)), bb.dZ = !0), !0)
	}, this.y9 = function() {
		var eb, ed;
		return !!(aRn && (aRn = 0, bb.e2 < aRo + 500)) && (eb = (lu + m8) / 2, ed = (lv + m9) / 2, aG.y2(eb, ed), aG.click(eb, ed, !0) && (bb.dZ = !0), !0)
	}
}

function cu() {
	this.size = 0, this.oA = 0, this.a7 = null, this.dR = function(a7) {
		this.oA = 0, this.a7 = a7, this.size = a7.length
	}, this.xW = function() {
		this.a7 = null
	}, this.oB = function(size) {
		for (var ex = 0, a7 = this.a7, mD = this.oA + size - 1, a6 = this.oA; a6 <= mD; a6++) ex |= (a7[a6 >> 3] >> 7 - (7 & a6) & 1) << mD - a6;
		return this.oA += size, this.oA > 8 * this.size && console.error("Unwrapper Overflow"), ex
	}, this.aLk = function(size) {
		var eo = size >> 1;
		return (1 << eo) * this.oB(size - eo) + this.oB(eo)
	}, this.aLj = function(aRr) {
		return this.size === b9.aLd(aRr)
	}, this.aMt = function(aRs, aRt, aRu) {
		var fy = this.oB(aRs);
		if (!fy) return null;
		for (var aRs = Math.max(fy, aRu), g = new(aRt <= 8 ? Uint8Array : aRt <= 16 ? Uint16Array : Uint32Array)(aRs), a6 = 0; a6 < fy; a6++) g[a6] = this.oB(aRt);
		aRu = g[fy - 1];
		return aRu && g.fill(aRu, fy), g
	}, this.aMu = function(aRs, aRv, aRu) {
		var fy = this.oB(aRs);
		if (!fy) return null;
		for (var aRs = Math.max(fy, aRu), g = new Array(aRs), a6 = 0; a6 < fy; a6++) g[a6] = this.aMr(aRv);
		return g.fill(g[fy - 1], fy), g
	}, this.aMr = function(aRs) {
		return bC.sH.sJ(this.oB(aRs))
	}, this.aMs = function() {
		var or = bB.qO.qP(bB.qO.qQ(this.oB(30))),
			or = b7.wu.a0L(or, "_", "/");
		or = b7.wu.a0L(or, "-", "+");
		for (var aRw = "";
			(or.length + aRw.length) % 4;) aRw += "=";
		or = "data:image/png;base64," + or + aRw;
		var aBb = new Image;
		aBb.onload = function() {
			b6.aC1.aC2(aBb), aBb.onload = null, aBb = null
		}, aBb.src = or
	}
}

function dD() {
	this.aNi = 0, this.aNj = 0, this.aNe = 0, this.aNf = 0, this.aNg = 0, this.aNh = 0, this.a7S = [0, 0, 0, 0], this.mC = function() {
		this.aNi = aN.uL(), this.aNj = aN.uM(), this.aNe = -this.aNi, this.aNf = -this.aNj, this.aNg = au.a0 / hu, this.aNh = au.j5 / hu, this.a7S[0] = Math.floor(this.aNe), this.a7S[1] = Math.floor(this.aNf), this.a7S[2] = Math.floor(this.a7S[
			0] + this.aNg + 1), this.a7S[3] = Math.floor(this.a7S[1] + this.aNh + 1), bX.a7P = !0
	}
}

function ce() {
	var a3U, lf;
	this.dR = function() {
		a3U = 1, lf = 0
	}, this.iQ = function() {
		0 < a3U && (lf = 0 === lf ? bb.e2 + 16 : lf, a3U = (a3U -= .001 * (bb.e2 - lf)) < 0 ? 0 : a3U, lf = bb.e2, bb.dZ = !0)
	}, this.r9 = function() {
		0 < a3U && (rA.fillStyle = "rgba(0,0,0," + a3U + ")", rA.fillRect(0, 0, au.a0, au.j5))
	}
}

function ch() {
	function aS0(map, eb, ed, a0, j5) {
		map >= bO.aEA || (bO.eA === map && (rA.fillStyle = u.n8, rA.fillRect(eb, ed, a0, j5), rA.fillStyle = u.mV), rA.strokeRect(eb, ed, a0, j5), rA.fillText(b7.uQ.zD(bO.se.sf[map].name, 0, .9 * a0), Math.floor(eb + .5 * a0), Math.floor(ed + .55 *
			j5)))
	}
	this.ui = !1, this.aRz = [0, 0, 0, 0], this.show = function() {
		this.ui = !0, this.resize(), bb.dZ = !0
	}, this.resize = function() {
		var aP1 = bH.ew(bO.aEA + bO.aEA % 2, 2),
			aP1 = au.j5 - aP1 * bY.gap;
		r.s.v8() ? this.aRz[2] = Math.floor(.75 * au.min) : this.aRz[2] = Math.floor(.5 * au.min), this.aRz[3] = Math.floor(1.25 * this.aRz[2]), this.aRz[3] > aP1 && (this.aRz[3] = aP1, this.aRz[2] = Math.floor(aP1 / 1.2)), this.aRz[0] = Math
			.floor((au.a0 - this.aRz[2]) / 2), this.aRz[1] = Math.floor((au.j5 - this.aRz[3]) / 2)
	}, this.xg = function(eb, ed) {
		return !(eb < this.aRz[0] || ed < this.aRz[1] || eb > this.aRz[0] + this.aRz[2] || ed > this.aRz[1] + this.aRz[3])
	}, this.gj = function(eb, ed) {
		var a49, aP1 = bH.ew(bO.aEA + bO.aEA % 2, 2);
		return bb.dZ = !0, eb < this.aRz[0] || ed < this.aRz[1] || eb > this.aRz[0] + this.aRz[2] || ed > this.aRz[1] + this.aRz[3] ? !(this.ui = !1) : (a49 = Math.floor(.17 * this.aRz[3]), ed < this.aRz[1] + a49 ? eb > this.aRz[0] + this.aRz[
			2] - a49 && (this.ui = !1) : (ed = (ed = Math.floor(aP1 * (ed - this.aRz[1] - a49 - .00576 * au.pC) / (this.aRz[3] - a49 - .01152 * au.pC))) < 0 ? 0 : aP1 - 1 < ed ? aP1 - 1 : ed, eb > this.aRz[0] + this.aRz[2] / 2 && (ed += aP1),
				ed >= bO.aEA || bO.a2(ed, Math.floor(16384 * Math.random()))), !0)
	}, this.r9 = function() {
		var a6, lv, a49 = Math.floor(.17 * this.aRz[3]),
			aP1 = bH.ew(bO.aEA + bO.aEA % 2, 2),
			gap = .6 * .01152 * au.pC,
			aG2 = (this.aRz[3] - a49 - (aP1 + 1) * gap) / aP1,
			qT = Math.floor((this.aRz[2] - 3 * gap) / 2);
		for (rA.lineWidth = bY.vB, b7.pA.textAlign(rA, 1), b7.pA.textBaseline(rA, 1), rA.fillStyle = u.mS, rA.fillRect(this.aRz[0], this.aRz[1] + a49, this.aRz[2], this.aRz[3] - a49), rA.fillStyle = u.n8, rA.fillRect(this.aRz[0], this.aRz[1],
				this.aRz[2], a49), rA.strokeStyle = u.mV, rA.strokeRect(this.aRz[0], this.aRz[1], this.aRz[2], this.aRz[3]), rA.fillStyle = u.mV, rA.fillRect(this.aRz[0], this.aRz[1] + a49, this.aRz[2], 2), rA.font = b7.pA.qR(1, .48 * a49), rA
			.fillText(L(406), Math.floor(this.aRz[0] + this.aRz[2] / 2), Math.floor(this.aRz[1] + .55 * a49)), rA.font = b7.pA.qR(1, .48 * aG2), a6 = aP1 - 1; 0 <= a6; a6--) lv = Math.floor(this.aRz[1] + a49 + gap + a6 * (aG2 + gap)), aS0(a6,
			this.aRz[0] + gap, lv, qT, aG2), aS0(a6 + aP1, this.aRz[0] + qT + 2 * gap, lv, qT, aG2);
		aH.a1q(Math.floor(this.aRz[0] + this.aRz[2] - .7 * a49), Math.floor(this.aRz[1] + .3 * a49), Math.floor(.4 * a49)), rA.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function a1() {
	this.size = 0, this.oA = 0, this.a7 = null, this.dR = function(a7) {
		this.oA = 0, this.a7 = a7, this.size = a7.length
	}, this.a2 = function(aRr) {
		return this.dR(new Uint8Array(this.aLd(aRr))), this.a7
	}, this.xW = function() {
		this.a7 = null
	}, this.a3 = function(size, a30) {
		for (var a7 = this.a7, mD = this.oA + size - 1, a6 = this.oA; a6 <= mD; a6++) a7[a6 >> 3] |= (a30 >> mD - a6 & 1) << 7 - (7 & a6);
		this.oA += size, this.oA > 8 * this.size && console.error("Wrapper Overflow")
	}, this.aLc = function(size, a30) {
		var eo = size >> 1,
			eX = 1 << eo;
		this.a3(size - eo, bH.ew(a30, eX)), this.a3(eo, a30 % eX)
	}, this.aS1 = function(size) {
		for (var a7 = this.a7, mD = this.oA + size, a6 = this.oA; a6 < mD; a6++) a7[a6 >> 3] &= 255 ^ 128 >>> (7 & a6)
	}, this.aLd = function(aRr) {
		return aRr + 7 >> 3
	}, this.aS2 = function(g, is, mD, aS3) {
		for (var a6 = is; a6 < mD; a6++) this.a3(aS3, g[a6])
	}
}

function ct() {
	this.dR = function() {
		this.g = [], this.oA = 0
	}, this.a3 = function(aS4, value) {
		for (var g = this.g, mD = this.oA + aS4 - 1, aS5 = 1 + (mD >> 3); g.length < aS5;) g.push(0);
		for (var a6 = this.oA; a6 <= mD; a6++) g[a6 >> 3] |= (value >> mD - a6 & 1) << 7 - (7 & a6);
		this.oA += aS4
	}, this.dY = function(g, aRs, aRt) {
		var aS6 = b7.pK.yy(g);
		this.a3(aRs, aS6);
		for (var a6 = 0; a6 < aS6; a6++) this.a3(aRt, g[a6])
	}, this.aNB = function(g, aRs, aRv) {
		var aS6 = b7.pK.yy(g);
		this.a3(aRs, aS6);
		for (var a6 = 0; a6 < aS6; a6++) this.aN9(g[a6], aRv)
	}, this.aN9 = function(or, aRs) {
		var eU = or.length;
		this.a3(aRs, eU);
		for (var a6 = 0; a6 < eU; a6++) this.a3(16, or.charCodeAt(a6))
	}, this.aNA = function(z1) {
		var aS7 = (z1 = z1.toDataURL()).split(",");
		if (aS7.length < 2) console.log("error 266");
		else {
			z1 = b7.wu.a0L(z1 = aS7[aS7.length - 1], "/", "_"), z1 = b7.wu.a0L(z1, "\\+", "-");
			var z1 = b7.wu.a0L(z1, "=", ""),
				sS = bC.qO.sP(z1),
				eU = sS.length;
			this.a3(30, eU);
			for (var a6 = 0; a6 < eU; a6++) this.a3(6, sS[a6])
		}
	}
}
a(), self.aiCommand746 = function(ex) {
	0 === ex ? bk() : 1 !== ex || !r || 1 !== r.id || r.ey < 14 || bF.ez()
}, setTimeout(bk, 1e4), window.onload = function() {
	bk()
};