var g, a7, a8, a9, aA, aB, aC, aD, aE, aF, aG, aH, aI, aJ, aK, aL, aM, aN, aO, aP, aQ, aR, aS, aT, aU, aV, aW, aX, aY, aZ, aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, at, au, av, aw, ax, ay, az, b0, b1, b2, b3, b4, b5, b6,
	t, b7, b8, b9, bA, bB, bC, bD, bE, bF, bG, bH, bI, bJ, bK, bL, bM, bN, bO, m, bP, bQ, bR, bS, bT, bU, bV, bW, bX, bY, bZ, ba, bb, bc, q, bd, be, bf, k, bg, bh, da, db, dc, a3, dd, a4, fK, fL, fM, fN, fO, fP, fQ, fR, fS, fT, fU, fV, fW, hv, hu,
	hw, a4V, kx, jN, xo, rF, uW, a8F, a16, a17, S = ["⬅️ ", "canvas", "100%", "div", "rgb(", "rgba(", "none", "absolute", "undefined", "auto", "Data", "<br>", "center", "1em", "0.8em", "   ", "territorial.io",
		"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg==", "hidden", "flex", "0.5em", "' target='_blank'>", "input",
		"</a>", "password", "inherit", "function", "click", "Value", "Enter", "🔄 Reload", "text", "rgba(0,0,0,0.8)", "focus", "break-word", "blur", "Player ", "Back", "1.2em", " / ", "videoad", "top", "tls7", "string", "Trebuchet MS",
		"rgba(140,10,10,0.75)", "rgba(100,0,0,0.8)", "rgba(10,140,10,0.75)", "rgba(0,100,0,0.8)", "rgba(0,", "rgb(10,220,10)", "pointer", "number", "nowrap", "mouseover", "mouseout", "middle", "long", "logo", "loading", "keydown", "italic ", "error",
		"en-US", "data:image/png;base64,", "break-all", "arena", "account", "_blank", "Spawning", "Space", "Single Player", "Seed", "Red: ", "Privacy Settings", "Normal", "National Color", "Multiplayer", "Interest", "Green: ", "Escape", "Clan: ",
		"Choose Your Nation's Color!", "Bot ", "Blue: ", "<a href='", "0px", "000", "0.75em", "0.6em", "0.4em 0em", ",0,0.85)", " solid white;}", " / 160", " -> "
	];

function a() {
	var b, c;

	function v() {
		if (b && b.readyState === b.OPEN) {
			var z = new a0;
			z.a1(1612), z.a2(1, 0), z.a2(6, 7), z.a2(2, q ? q.id : 3), z.a2(1, a3 ? 1 : 0), z.a2(1, a4 ? 1 : 0), z.a2(1, g ? g.h : 0);
			for (var a5 = 0; a5 < c.length && a5 < 100; a5++) z.a2(16, c.charCodeAt(a5));
			console.log("_errorString [" + c + "]"), b.send(z.a6), w()
		}
	}

	function w() {
		b && (b.onclose = null, b.onopen = null, b = null)
	}
	window.addEventListener("error", function d(e) {
		window.removeEventListener("error", d);
		return alert("Error:\n" + e.filename + " " + e.lineno + " " + e.colno + " " + e.message);
		c = "";
		try {
			var j;
			window.removeEventListener("error", d), c = e.lineno + " " + e.colno + "|" + function(e) {
				if (!e.error) return "NoStack";
				for (var y, stack = e.error.stack, x = (console.log("stack[" + stack + "]"), new RegExp(":([0-9]+):([0-9]+)", "g")), result = []; null !== (y = x.exec(stack));) result.push(parseInt(y[1], 10)), result.push(parseInt(y[2],
					10));
				return result.join(" ")
			}(e) + "|" + e.message, g && 1 === g.h && (c = g.i + "|" + c, j = "What happened? Please send us a detailed email to davidtschacher@gmail.com so we can fix this error!", 0 === e.lineno && 0 === e.colno && (j +=
				"<br>This error might be fixed by disabling browser extensions."), j += "<br>Error Message: " + c, k.l(), m.n(4, 5, new o("🤖 Beep Boop! An error occurred.", j, !0, [new p("🔄 Reload", function() {
				q.r.s()
			}, t.u)])))
		} catch (e) {
			c = "SevereError" + e + "|" + c, console.log(c)
		}(b = new WebSocket("wss://territorial.io/s52/")).onopen = v, b.onclose = function() {
			w()
		}
	})
}

function bi(bj) {
	g && !bj || (bl(), bG = new bm, bF = new bn, b6 = new bo, t = new bp, a7 = new bq, b3 = new br, bA = new bs, bB = new bt, a8 = new bu, a9 = new bv, aA = new bw, aB = new bx, aC = new by, aD = new bz, aE = new c0, aF = new c1, aG = new c2, aH =
		new c3, aI = new c4, aJ = new c5, aK = new c6, aL = new c7, aM = new c8, aN = new c9, aO = new cA, aP = new cB, aQ = new cC, aR = new cD, aS = new cE, aT = new cF, aU = new cG, aV = new cH, aW = new cI, ae = new cJ, af = new cK, ag =
		new cL, aX = new cM, aY = new cN, ab = new cO, aZ = new cP, aa = new cQ, ac = new cR, av = new cS, ad = new cT, ai = new cU, aj = new cV, ak = new cW, aw = new cX, au = new cY, ah = new cZ, al = new ca, am = new cb, an = new cc, at =
		new cd, ao = new ce, ap = new cf, aq = new cg, ar = new ch, ax = new ci, ay = new cj, az = new ck, b0 = new cl, b1 = new cm, b2 = new cn, b4 = new co, b5 = new cp, b7 = new cq, b8 = new a0, b9 = new cr, bC = new cs, bD = new ct, bE =
		new cu, bH = new cv, bI = new cw, bJ = new cx, bK = new cy, bL = new cz, bM = new d0, bN = new d1, bO = new d2, m = new d3, bP = new d4, q = new d5, g = new d6, bd = new d7, be = new d8, bb = new d9, bc = new dA, bV = new dB, bW = new dC,
		bQ = new dD, bR = new dE, bY = new dF, bZ = new dG, ba = new dH, bf = new dI, bX = new dJ, k = new dK, bg = new dL, bh = new dM, g.dO(), q.dO(), at.dP(), be.dO(), b3.dO(), b3.dQ(), (bS = new dR).dO(), bg.dO(), b6.dO(), bQ.dO(), aw.dO(),
		bA.dO(), bB.dO(), bN.dO(), m.dO(), bT = new dS, at.dO(), q.r.dT(), ba.dO(), bX.dO(), bR.dO(), bU = new dU, au.dO(), aY.dV(), bP.dO(), ai.dO(), aU.dO(), aN.dO(), ac.dO(), bE.dO(), aV.dO(), ba.dW = !0, setTimeout(function() {
			bN.a1(2, 14071)
		}, 0), m.n(5, 5), bD.dX() || q.r.dY(), at.dZ(), g.h = 1)
}

function d6() {
	this.de = 1070, this.i = 19994, this.dO = function() {
		da = 2, dc = 1, db = "24 Dec 2024 [1.99.9.4]", a3 = true, a4 = function() {
			try {
				return window.self !== window.top
			} catch (e) {
				return !0
			}
		}(), dd = (new Date).getTime() % 1024
	}, this.h = 0
}

function dL() {
	this.id = new dg, this.dO = function() {
		this.id.dO()
	}
}

function dg() {
	this.dO = function() {
		0 === be.dh.data[181].value && (be.dh.di(180, Math.floor(Math.random() * bG.pow(30))), be.dh.di(181, Math.floor((new Date).getTime() / 36e5)))
	}
}

function d4() {
	this.dj = new dk, this.dl = new dm, this.dO = function() {
		q.r.dn()
	}
}

function dk() {
	function dy() {}
	this.dO = function() {}, this.dx = function() {
		return !!dy() && (aiptag.cmd.player.push(function() {
			aiptag.adplayer.startVideoAd()
		}), !0)
	}, this.hideCMPButton = function() {
		"undefined" != typeof aipAPItag && aipAPItag.hideCMPButton && aipAPItag.hideCMPButton()
	}, this.showCMPButton = function() {
		"undefined" != typeof aipAPItag && aipAPItag.showCMPButton && aipAPItag.showCMPButton()
	}, this.showCMPScreen = function() {
		dy() && aipAPItag.showCMPScreen()
	}
}

function dm() {
	this.show = function() {
		return !1
	}
}

function cL() {
	this.e3 = new e4
}

function e4() {
	this.e5 = function(e6) {
		var eA;
		return bN.e7(bN.e8) && a7.data.e9 && (eA = aW.eB(e6), this.eC(a7.eD, eA) || this.eE(a7.eD, eA)) && 0 !== (eA = function(eZ) {
			for (var ea = bH.eb(eZ), ec = bH.ed(eZ), max = Math.max(bN.ee, bN.ef) - 2, eg = max * max, eh = !1, ei = 0, ej = 0; ej < max; ej++) {
				var ek, eF = function(ea, ec, ej) {
					for (var a5 = 0; a5 <= ej; a5++)
						for (var em = -1; em < 2; em += 2)
							for (var en = -1; en < 2; en += 2)
								for (var eo = 0; eo < 2; eo++) {
									var e6 = function(ea, ec) {
										if (bH.eq(ea, ec)) {
											ea = bH.er(ea, ec), ec = bH.eJ(ea);
											if (aW.eO(ec) && aW.es(ec)) return ea
										}
										return 0
									}(ea + eo * em * a5 + (1 - eo) * en * ej, ec + eo * en * ej + (1 - eo) * em * a5);
									if (e6) return e6
								}
					return 0
				}(ea, ec, ej);
				eF && (ek = bH.el(ea, ec, eF)) < eg && (ei = eF, eg = ek, eh || (eh = !0, max = Math.floor(Math.sqrt(ek)) + 1))
			}
			return ei
		}(bH.eH(e6))) && (e6 = bH.eJ(eA), aW.eK(e6) || (e6 = aW.eL(e6)) !== a7.eD && eM(e6, a7.eD)) ? eA : 0
	}, this.eN = function(player, eF) {
		eF = bH.eJ(eF);
		if (aW.eO(eF)) {
			if (aW.eK(eF)) bJ.eP[0] = a7.eQ;
			else if (aW.eL(eF) !== bJ.eP[0]) return !1;
			for (var eR = function(e6) {
					var eV = aW.eV,
						eR = [];
					loop: for (var eW = 3; 0 <= eW; eW--) {
						var eX = e6 + eV[eW];
						if (aW.eY(eX)) {
							for (var id = aW.eB(eX), a5 = 0; a5 < eR.length; a5++)
								if (id === eR[a5]) continue loop;
							bJ.eU[eR.length] = eX, eR.push(id)
						}
					}
					return eR
				}(eF), eT = eR.length, a5 = 0; a5 < eT; a5++)
				if (this.eC(player, eR[a5]) || this.eE(player, eR[a5])) return bJ.eU[0] = bJ.eU[a5], !0
		}
		return !1
	}, this.eC = function(player, eA) {
		for (var et = aa.et[player], eT = et.length, eu = Math.max(bG.ev(eT, 12), 1), eV = aW.eV, a5 = 0; a5 < eT; a5 += eu)
			for (var eI = et[a5], eW = 3; 0 <= eW; eW--) {
				var eX = eI + eV[eW];
				if (aW.eY(eX) && eA === aW.eB(eX)) return !0
			}
		return !1
	}, this.eE = function(player, eA) {
		for (var et = aa.et[player], eT = et.length, eV = aW.eV, a5 = 0; a5 < eT; a5++)
			for (var eI = et[a5], eW = 3; 0 <= eW; eW--) {
				var eX = eI + eV[eW];
				if (aW.eY(eX) && eA === aW.eB(eX)) return !0
			}
		return !1
	}
}

function cx() {
	this.ez = new Uint16Array(2), this.f0 = new Uint16Array(2), this.f1 = new Uint32Array(2), this.f2 = new Uint32Array(2), this.f3 = new Uint32Array(2), this.f4 = new Uint8Array(4), this.f5 = new Uint8Array(4), this.eU = new Uint32Array(4), this
		.f6 = new Uint32Array(5), this.eP = new Uint32Array(8), this.f7 = new Uint16Array(16), this.f8 = new Uint16Array(512), this.f9 = new Uint16Array(512), this.fA = new Uint16Array(512), this.fB = function(fC, fD) {
			return fC[0] = fD, fC
		}, this.fE = function(fC, fD, fF) {
			return fC[0] = fD, fC[1] = fF, fC
		}, this.fG = function(fC, fD, fF, fH) {
			return fC[0] = fD, fC[1] = fF, fC[2] = fH, fC
		}, this.fI = function(fC, fD, fF, fH, fJ) {
			return fC[0] = fD, fC[1] = fF, fC[2] = fH, fC[3] = fJ, fC
		}
}

function fX() {
	fQ = 0, fR = 2048, fS = new Uint32Array(4 * fR), fT = 0, fU = new Uint32Array(fR), fV = new Uint8Array(bN.ee * bN.ef)
}

function fY(player) {
	fL = player, fW = !1, fZ(), fa();
	for (var a5 = aX.fb(fL) - 1; 0 <= a5; a5--) 0 === aX.fc(fL, a5) && (fK = a5, fd());
	fW && fe()
}

function fe() {
	ff(), fg()
}

function fd() {
	fP = aX.fh(fL, fK), fM = aX.fi(fL, fK), fN = aX.fj(fL, fK), fk(), (0 !== fQ && (fm(), fn()) ? fo : fl)()
}

function fn() {
	if (!((fO = bG.ev(fM, fQ)) > a7.fp)) {
		if (!fN) return !1;
		var fq = fQ * (1 + a7.fp);
		fM += b6.fr.fs(fL, fq - fM), fO = bG.ev(fM, fQ)
	}
	return !0
}

function fm() {
	for (var a5 = fQ - 1; 0 <= a5; a5--) fV[bG.ev(fS[a5], 4)] = 0
}

function fl() {
	1 === aX.fb(fL) && a9.ft(fL);
	var e1 = b6.fr.fu(fL, fM);
	bY.fv(fL, fM - e1, 12), aX.fw(fL, fK)
}

function fZ() {
	for (var player = fL, fx = aa.fx, eT = Math.min(fx[player].length, fR), fy = 0, fz = fU, a5 = eT - 1; 0 <= a5; a5--) fz[fy++] = fx[player][a5];
	fT = fy
}

function fa() {
	for (var a5 = aa.fx[fL].length - 1; 0 <= a5; a5--) aW.eO(aa.fx[fL][a5]) && aW.g0(aa.fx[fL][a5], fL);
	aa.fx[fL] = []
}

function fk() {
	fQ = 0, (fP === a7.eQ ? g1 : g2)()
}

function g2() {
	for (var g3, g4, a5, eV = aW.eV, eW = 3; 0 <= eW; eW--)
		for (a5 = fT - 1; 0 <= a5; a5--) g3 = fU[a5] + eV[eW], g4 = bG.ev(g3, 4), 0 === fV[g4] && aW.g5(g3) && aW.eL(g3) === fP && (fV[g4] = 1, fS[fQ++] = g3)
}

function g1() {
	for (var g3, g4, a5, eV = aW.eV, eW = 3; 0 <= eW; eW--)
		for (a5 = fT - 1; 0 <= a5; a5--) g3 = fU[a5] + eV[eW], g4 = bG.ev(g3, 4), 0 === fV[g4] && aW.eK(g3) && (fV[g4] = 1, fS[fQ++] = g3)
}

function fo() {
	g6() ? (g7(), fP !== a7.eQ && g8()) : fl()
}

function g8() {
	g9(), gA(aa.gB[fP]), gA(aa.gC[fP]), bN.e7(bN.e8) && gA(aa.et[fP]), gD(aa.fx[fP]), gE(aa.gC[fP]), gE(aa.et[fP]), gF(), gG()
}

function g7() {
	fW = !0, aX.gH(fL, fK, fM), aX.gI(fL, fK), aa.gJ[fL] += fQ, gK(), gL()
}

function g6() {
	return (fP === a7.eQ ? gM : gN)()
}

function gN() {
	var gO = fQ * a7.fp,
		gP = gQ(),
		gR = gS(),
		gP = gO + 2 * gP + gR,
		gU = fO * fQ;
	return gP < gU ? (fM -= gP, bY.fv(fL, gP, 13), gV(gP - gO, gR), !0) : fN && 0 === gR ? (fM -= gU, gU += b6.fr.fs(fL, gP - gU + 1), bY.fv(fL, gU, 13), gV(gU - gO, 0), !0) : (fM -= gU, bY.fv(fL, gU, 13), gV(gU - gO, gR), !1)
}

function gV(gU, gR) {
	if (0 < gR) {
		if (gU <= gR) return bY.fv(fP, gU, 13), void aX.gW(fP, fL, gR - gU);
		aX.gW(fP, fL, 0), gU -= gR
	}
	gU = bG.ev(gU, 2), gU = Math.min(aa.gX[fP], gU), bY.fv(fP, gU, 13), aa.gX[fP] -= gU
}

function gS() {
	return aX.gY(fP, fL)
}

function gQ() {
	return bG.ev(fQ * aa.gX[fP], 1 + bG.ev(10 * aa.gJ[fP], 16))
}

function gM() {
	var gZ = fQ * a7.fp;
	return fM -= gZ, bY.fv(fL, gZ, 13), !0
}

function gL() {
	for (var a5 = fQ - 1; 0 <= a5; a5--) aa.fx[fL].push(fS[a5]), aa.gB[fL].push(fS[a5]), aW.g0(fS[a5], fL)
}

function d2() {
	var ga = 0,
		gb = 0;
	this.gc = function(ea, ec) {
		ga = ea, gb = ec
	}, this.gd = function(ge) {
		a7.gf || aG.gg || (b6.fr.gh(0) || b6.fr.gh(1)) && b6.fr.gi(a7.eD) && (aL.gj(ga, gb) ? aL.gk = !1 : function(ge) {
			var gm = bH.gn(ga),
				go = bH.gp(gb),
				eF = bH.er(gm, go),
				e6 = bH.eJ(eF);
			bH.gq(gm, go) && (a7.gr ? aW.eO(e6) && b4.gs.gt(eF) : aW.eY(e6) ? ge || (gm = ag.e3.e5(e6)) && (go = bH.eJ(gm), go = aW.eK(go) ? a7.eQ : aW.eL(go), b4.gs.gw(aL.gx(), gm, go)) : aW.gy(e6) || ge ? bI.gz.h0(a7.eD, eF) && b4.gs
				.h1(aL.gx(), eF) : aW.eK(e6) ? h2(a7.eD) ? b4.gs.h3(aL.gx(), a7.eQ) : h4(a7.eD, a7.eQ) ? ax.h5(a7.eQ, aL.gx()) : bI.gz.h0(a7.eD, eF) && b4.gs.h1(aL.gx(), eF) : (gm = aW.eL(e6)) !== a7.eD && (eM(gm, a7.eD) ? h6(a7.eD,
					gm) ? b4.gs.h3(aL.gx(), gm) : h4(a7.eD, gm) ? ax.h5(gm, aL.gx()) : bI.gz.h0(a7.eD, eF) && b4.gs.h1(aL.gx(), eF) : bI.gz.h0(a7.eD, eF) && b4.gs.h1(aL.gx(), eF)))
		}(ge))
	}
}

function h7(h8, size, h9, hA, font) {
	var a5, hD = .2,
		hE = document.createElement("canvas"),
		hF = hE.getContext("2d", {
			alpha: !1
		});
	for (hE.width = h8, hE.height = h8, hF.font = size + font, hF.textAlign = "center", hF.textBaseline = "middle", hF.fillStyle = "red", a5 = 0; a5 < h9.length; a5++) hF.fillText(h9[a5], .5 * h8, .5 * h8);
	return -1 < (hE = function(hB) {
		var a5, hH, eW = hB.data;
		for (a5 = eW.length - 4; 0 <= a5; a5 -= 4)
			if (hH = eW[a5], hA <= hH) return Math.floor(a5 / (4 * h8));
		return -1
	}(hF.getImageData(0, 0, h8, h8))) && (hD = (hE - .5 * h8 + .1 * size) / size), Math.max(hD, 0)
}

function cv() {
	this.hI = new Int16Array(4), this.hJ = new Int16Array(4), this.dO = function() {
		var a5;
		for (this.hI[0] = -bN.ee, this.hI[1] = 1, this.hI[2] = bN.ee, this.hI[3] = -1, a5 = 0; a5 < 4; a5++) this.hJ[a5] = 4 * this.hI[a5]
	}, this.hK = function(gu, hL) {
		var hM = this.eb(hL) - this.eb(gu),
			hL = this.ed(hL) - this.ed(gu),
			gu = hM >>> 31 << 1;
		return 5 + gu + (1 - gu) * (1 - (hL >>> 31 << 1)) * (Math.abs(hM) - Math.abs(hL) >>> 31) & 3
	}, this.hR = function(gu, hL, hS) {
		return hS % 2 == 0 ? hS + (1 - hS) * (1 - (this.eb(hL) - this.eb(gu) >>> 31 << 1)) + 4 & 3 : hS + (2 - hS) * (1 - (this.ed(hL) - this.ed(gu) >>> 31 << 1)) + 4 & 3
	}, this.hU = function(g3, eF) {
		for (var hL, hV, hX = aa.gC[g3], eT = hX.length, z = bN.ee, hY = this.eb(eF), hZ = this.ed(eF), eZ = hX[0] >> 2, min = this.el(hY, hZ, eZ), a5 = 1; a5 < eT; a5++)(hV = (hV = hY - (hL = hX[a5] >> 2) % z) * hV + (hV = hZ - ~~((.5 + hL) /
			z)) * hV) < min && (min = hV, eZ = hL);
		return eZ
	}, this.ha = function(player, e6) {
		return !aW.eK(e6) && player === aW.eL(e6)
	}, this.el = function(gm, go, eF) {
		return (gm -= this.eb(eF)) * gm + (go -= this.ed(eF)) * go
	}, this.hb = function(hc, hd, he) {
		hc = this.hg(hc) - this.hh(he), hd = this.hj(hd) - this.hk(he);
		return Math.sqrt(hc * hc + hd * hd)
	}, this.hl = function(gu, hL) {
		var hf = this.eb(gu) - this.eb(hL),
			gu = this.ed(gu) - this.ed(hL);
		return Math.sqrt(hf * hf + gu * gu)
	}, this.hm = function(gu, hL) {
		var hf = this.eb(gu) - this.eb(hL),
			gu = this.ed(gu) - this.ed(hL);
		return hf * hf + gu * gu
	}, this.hn = function(ho, hp, hq, hr) {
		return (ho -= hq) * ho + (hp -= hr) * hp
	}, this.hs = function(g3, ht) {
		return bG.ev(ht * aa.gX[g3], 1e3)
	}, this.hg = function(hc) {
		return 16 * (hc + hu) / hv
	}, this.hj = function(hd) {
		return 16 * (hd + hw) / hv
	}, this.hx = function(eW) {
		return 16 * eW / hv
	}, this.gn = function(hc) {
		return Math.floor((hc + hu) / hv)
	}, this.gp = function(hd) {
		return Math.floor((hd + hw) / hv)
	}, this.gq = function(gm, go) {
		return 1 <= gm && 1 <= go && gm < bN.ee - 1 && go < bN.ef - 1
	}, this.eb = function(eF) {
		return eF % bN.ee
	}, this.ed = function(eF) {
		return bG.ev(eF, bN.ee)
	}, this.er = function(gm, go) {
		return go * bN.ee + gm
	}, this.hy = function(eF) {
		return this.eq(this.eb(eF), this.ed(eF))
	}, this.eq = function(gm, go) {
		return 0 < gm && gm < bN.ee - 1 && 0 < go && go < bN.ef - 1
	}, this.eJ = function(eF) {
		return eF << 2
	}, this.eH = function(e6) {
		return e6 >> 2
	}, this.hz = function(eF) {
		return bN.ee * this.ed(eF) * 256 + (this.eb(eF) << 4)
	}, this.i0 = function(eF) {
		return this.hz(eF) + 8 + (bN.ee << 7)
	}, this.i1 = function(he) {
		return bN.ee * (this.hk(he) >> 4) + (this.hh(he) >> 4)
	}, this.i2 = function(he) {
		he = this.i1(he);
		return (this.eb(he) >> 5) + bI.i3.i4 * (this.ed(he) >> 5)
	}, this.hh = function(he) {
		return he % (bN.ee << 4)
	}, this.hk = function(he) {
		return bG.ev(he, bN.ee << 4)
	}, this.i5 = function(eF, hS) {
		return eF + this.hI[hS]
	}, this.i6 = function(e6, hS) {
		return e6 + this.hJ[hS]
	}, this.i7 = function(player) {
		return this.er(aa.i8[player] + aa.i9[player] >> 1, aa.iA[player] + aa.iB[player] >> 1)
	}, this.iC = function(player) {
		return this.er(au.iD(aa.i8[player], aa.i9[player]), au.iD(aa.iA[player], aa.iB[player]))
	}
}

function cZ() {
	this.iE = new iF, this.iG = new iH, this.iI = new iJ, this.performance = new iK, this.iL = new iM, this.iN = new iO, this.iP = new iQ, this.dO = function() {
		this.iE.dO(), this.iI.dO(), this.performance.dO(), this.iL.dO(), this.iN.dO()
	}, this.iR = function() {
		this.performance.iR(), this.iE.iR()
	}
}

function iM() {
	var iS, iU = new Uint16Array(8);

	function ig(size, player) {
		for (var a5 = aa.fx[player].length - 1; size <= a5; a5--) aW.ip(aa.fx[player][a5], player)
	}
	this.dO = function() {
		iS = 0
	}, this.iV = function(player, iW) {
		return bJ.eP[1] = aa.fx[player].length, bJ.eP[0] === a7.eQ ? ah.iL.iX(player) : this.iY(player, bJ.eP[0]), (0 !== bJ.eP[1] || 0 !== aa.fx[player].length) && !(!iW && bJ.eP[1] === aa.fx[player].length || (bJ.eP[0] === a7.eQ ? aa.iZ[
			player]++ : aa.ia[player]++, 0))
	}, this.ib = function(player) {
		a7.ic && (ah.iN.ie[player] = 1), ig(bJ.eP[1], player), aX.ih(player, bJ.f2[0], bJ.eP[0]), a9.ii(player, !1)
	}, this.ij = function(player, ik, eT, il) {
		var im = bG.ev(12 * aa.gX[player], 1024);
		il -= il >= bG.ev(aa.gX[player], 2) ? im : 0, ig(eT, player), aX.ih(player, il, ik), aa.gX[player] -= il + im, a9.ii(player, !1)
	}, this.iY = function(player, ik) {
		for (var hS, eV = aW.eV, a5 = aa.gB[player].length - 1; 0 <= a5; a5--)
			if (aW.io(aa.gB[player][a5]))
				for (hS = 3; 0 <= hS; hS--)
					if (aW.g5(aa.gB[player][a5] + eV[hS]) && aW.eL(aa.gB[player][a5] + eV[hS]) === ik) {
						aa.fx[player].push(aa.gB[player][a5]);
						break
					}
	}, this.iX = function(player) {
		for (var eV = aW.eV, a5 = aa.gB[player].length - 1; 0 <= a5; a5--)
			if (aW.io(aa.gB[player][a5]))
				for (var hS = 3; 0 <= hS; hS--)
					if (aW.eK(aa.gB[player][a5] + eV[hS])) {
						aa.fx[player].push(aa.gB[player][a5]);
						break
					}
	}, this.iq = function(player, ir) {
		var a5, em, hS, is, eT = aa.gB[player].length,
			hT = 256 <= eT ? 12 : 32 <= eT ? 6 : 1,
			it = eT - 1 - au.iu(hT),
			eV = aW.eV;
		iS = 0;
		loop: for (a5 = it; 0 <= a5; a5 -= hT)
			for (hS = 3; 0 <= hS; hS--)
				if ((is = aW.eK(aa.gB[player][a5] + eV[hS]) ? a7.eQ : aW.eL(aa.gB[player][a5] + eV[hS])) === a7.eQ || aW.g5(aa.gB[player][a5] + eV[hS]) && is !== player && (ir || eM(player, is))) {
					for (em = iS - 1; 0 <= em; em--)
						if (iU[em] === is) continue loop;
					if (iU[iS] = is, 8 <= ++iS) return !0
				}
		return 0 < iS
	}, this.iv = function(player, ir) {
		var a5, hS, is, eV = aW.eV;
		for (iS = 0, a5 = aa.gB[player].length - 1; 0 <= a5; a5--)
			for (hS = 3; 0 <= hS; hS--)
				if ((is = aW.eK(aa.gB[player][a5] + eV[hS]) ? a7.eQ : aW.eL(aa.gB[player][a5] + eV[hS])) === a7.eQ || aW.g5(aa.gB[player][a5] + eV[hS]) && is !== player && (ir || eM(player, is))) return iU[iS++] = is, !0;
		return !1
	}, this.iw = function() {
		for (var en, a5 = iS - 1; 0 <= a5; a5--)
			if (iU[a5] === a7.eQ) {
				for (iS--, en = a5; en < iS; en++) iU[en] = iU[en + 1];
				return !0
			} return !1
	}, this.ix = function(player) {
		for (var en, a5 = iS - 1; 0 <= a5; a5--)
			if (aX.iy(player, iU[a5]))
				for (iS--, en = a5; en < iS; en++) iU[en] = iU[en + 1];
		return 0 === iS
	}, this.iz = function() {
		for (var a5 = iS - 1; 0 <= a5; a5--)
			if (b6.fr.j0(iU[a5])) return !0;
		return !1
	}, this.j1 = function() {
		for (var a5 = iS - 1; 0 <= a5; a5--) b6.fr.j0(iU[a5]) || (iU[a5] = iU[--iS]);
		return 0 < iS
	}, this.j2 = function(player) {
		for (var en, j3 = iU[0], j4 = aa.gX[j3] + aX.gY(j3, player), a5 = iS - 1; 1 <= a5; a5--)(en = aa.gX[iU[a5]] + aX.gY(iU[a5], player)) < j4 && (j3 = iU[a5], j4 = en);
		return j3
	}, this.j5 = function(player) {
		var j6, j7 = iU[0];
		if (1 !== iS)
			for (var j8 = bG.ev(aa.i9[player] + aa.i8[player], 2), j9 = bG.ev(aa.iB[player] + aa.iA[player], 2), ej = jA(j8 - bG.ev(aa.i9[j7] + aa.i8[j7], 2)) + jA(j9 - bG.ev(aa.iB[j7] + aa.iA[j7], 2)), a5 = iS - 1; 1 <= a5; a5--)(j6 = jA(j8 - bG
				.ev(aa.i9[iU[a5]] + aa.i8[iU[a5]], 2)) + jA(j9 - bG.ev(aa.iB[iU[a5]] + aa.iA[iU[a5]], 2))) < ej && (ej = j6, j7 = iU[a5]);
		return j7
	}, this.jB = function() {
		for (var jC = iU, jD = jC[0], gX = aa.gX, jE = gX[jD], a5 = iS - 1; 1 <= a5; a5--) {
			var g3 = jC[a5],
				en = gX[g3];
			jE < en && (jD = g3, jE = en)
		}
		return jD
	}
}

function iO() {
	function jT(player, ik, jJ) {
		3 <= jJ && 2142 < ba.jZ() && (ik === a7.eQ || aa.gX[ik] < bG.ev(aa.gX[player], 20)) && a8.jO(player, 20)
	}

	function jW(player, il, ik, jJ) {
		3 <= jJ && jJ < 6 && bG.ev(aa.gX[player], 8) > aa.gX[ik] && (il = Math.max(bG.ev(11 * aa.gX[ik], 5), bG.ev(aa.gX[player], 10)));
		jJ = aa.fx[player].length;
		ah.iL.iY(player, ik), ah.iL.ij(player, ik, jJ, il)
	}

	function jS(player, il) {
		var ik = a7.eQ,
			eT = aa.fx[player].length;
		ah.iL.iX(player), aa.fx[player].length !== eT && ah.iL.ij(player, ik, eT, il)
	}
	this.ie = new Uint8Array(a7.eQ), this.dO = function() {
		this.ie.fill(0)
	}, this.jF = function(player, il) {
		var jH, jJ, jK, jL;
		a7.ic && (this.ie[player] = 0), aX.jG(player) && (jH = aY.jI(player), 3 <= (jJ = a8.il[player]) && jJ < 6 && (il = Math.max(aa.gX[player] - jH, il)), jK = aa.gC[player].length, jL = aa.gB[player].length, 30 * aa.gJ[player] > a7.jM && jN[
			player] < 10 && 100 * jL <= jK && a8.jO(player, 10), a7.ic ? function(player, il, jJ, jH) {
			var ik;
			if (ah.iL.iq(player, !1) || ah.iL.iv(player, !1)) {
				if (ah.iN.ie[player] = 1, !ah.iL.ix(player))
					if (ah.iL.iw()) jS(player, il), jT(player, a7.eQ, jJ);
					else {
						if (au.jU(a8.jV[jJ])) ik = ah.iL.j2(player);
						else {
							if (ah.iL.iz() && au.jU(a8.jX[jJ]) && ah.iL.j1(), 6 === jJ) return jW(player, il, ah.iL.jB(), jJ);
							ik = ah.iL.j5(player)
						}
						jW(player, il, ik, jJ), jT(player, ik, jJ)
					}
			} else bI.jQ.iR(player) || ah.iP.iR(player) || ! function(player, il, jJ, jH) {
				var a5, en, eo, eR = bb.eR,
					ja = eR[player];
				if (0 !== ja) {
					var gX = aa.gX,
						jb = gX[player],
						gJ = aa.gJ;
					if (player < a7.jc && (il = jb), !(jb < gJ[player] || 5 === jJ && jb < jH || 4 === jJ && jb < bG.ev(jH, 2))) {
						var eT = af.jd,
							je = af.jf,
							jg = (a5 = au.iu(eT), ah.iN.ie);
						for (en = 0; en < eT; en++)
							if (eo = je[(en + a5) % eT], 1 === jg[eo] && eR[eo] === ja) return b4.jh.ji(player, eo, il);
						var jj = a7.jj,
							gC = aa.gC;
						for (en = 0; en < eT; en++)
							if (eo = je[(en + a5) % eT], gX[eo] < jj * gJ[eo] && gC[eo].length && eR[eo] === ja && eo !== player) return b4.jh.ji(player, eo, il)
					}
				}
			}(player, il, jJ, jH)
		}(player, il, jJ, jH) : (!jL || jK && (jK < jL && !au.iu(10) || 100 * jL <= jK && au.iu(3) || !au.iu(8))) && bI.jQ.iR(player) || function(player, il, jJ) {
			ah.iL.iq(player, !0) || ah.iL.iv(player, !0) ? ah.iL.ix(player) || (ah.iL.iw() ? jS(player, il) : au.jU(a8.jV[jJ]) ? jW(player, il, ah.iL.j2(player), jJ) : 5 === jJ ? jW(player, il, ah.iL.jB(), jJ) : (ah.iL.iz() && au.jU(a8
				.jX[jJ]) && ah.iL.j1(), jW(player, il, 6 === jJ ? ah.iL.jB() : ah.iL.j5(player), jJ))) : ah.iP.iR(player)
		}(player, il, jJ))
	}
}

function bu() {
	var jk = new Uint8Array(a7.eQ),
		jl = new Uint16Array(a7.eQ),
		jm = new Uint16Array(a7.eQ),
		jn = new Uint8Array(a7.eQ),
		jo = (this.il = new Uint8Array(a7.eQ), new Uint16Array(a7.eQ)),
		jp = new Uint16Array(a7.eQ);

	function k8(a5) {
		jk[a5] = 1 + bG.ev(jo[a5] * au.random(), 10 * au.value(100))
	}
	this.jq = null, this.jX = [97, 94, 70, 40, 20, 0, 100], this.jr = [500, 450, 400, 300, 80, 50, 100], this.jV = [0, 0, 5, 25, 50, 100, 0], this.js = [60, 74, 112, 200, 256, 512, 512], this.jt = [1, 2, 3, 4, 6, 8, 1], this.ju = [500, 450, 400, 300,
		80, 50, 100
	], this.dP = function() {
		this.jq = [L(0), L(1), L(2), L(3), L(4), L(5), "H Bot"]
	}, this.dO = function() {
		jk.fill(0), jl.fill(0), jm.fill(0), jn.fill(0), this.il.fill(0), jo.fill(0), jp.fill(0);
		var jv = a7.jc;
		if (9 === a7.jw) this.jx();
		else if (__fx.customLobby.isActive())
			for (a5 = a7.k0 - 1; 0 <= a5; a5--) this.il[a5 + jv] = __fx.customLobby.gameInfo.difficulty;
		else if (a7.jy)
			if (3 === a7.data.k1)
				for (a5 = a7.k0 - 1; 0 <= a5; a5--) {
					var k2 = a5 + jv;
					this.il[k2] = a7.data.k3[k2]
				} else if (2 === a7.data.k1)
					for (a5 = a7.k0 - 1; 0 <= a5; a5--) this.il[k2 = a5 + jv] = a7.data.k4[bb.k5[bb.eR[k2]]];
				else if (1 === a7.data.k1) {
			var k6 = this.jq.length;
			for (a5 = a7.k0 - 1; 0 <= a5; a5--) this.il[a5 + jv] = a5 % k6
		} else
			for (k6 = a7.data.k7, a5 = a7.k0 - 1; 0 <= a5; a5--) this.il[a5 + jv] = k6;
		else
			for (var jz = 8 === a7.jw ? 1 : 0, a5 = a7.k0 - 1; 0 <= a5; a5--) this.il[a5 + jv] = jz;
		for (a5 = 0; a5 < jv; a5++) this.il[a5] = 6;
		var eT = a7.eQ;
		for (a5 = 0; a5 < eT; a5++) this.il[a5] <= 2 ? (jn[a5] = 5, jo[a5] = jp[a5] = 1040, 0 === this.il[a5] ? (jl[a5] = 980, jm[a5] = 980) : 1 === this.il[a5] ? (jl[a5] = 980, jm[a5] = 920, jo[a5] = jp[a5] = 1100) : (jl[a5] = 825, jm[a5] =
			750)) : this.il[a5] <= 4 ? (jn[a5] = 1 + au.iu(20), 3 === this.il[a5] ? (jl[a5] = jm[a5] = 500, jo[a5] = jp[a5] = 1e3) : (jp[a5] = 250 + au.iu(1501), jo[a5] = 500 + au.iu(501), jl[a5] = 300 + au.iu(201), jm[a5] = 100 + au.iu(
			201))) : this.il[a5] <= 5 ? (jo[a5] = 1e3, jp[a5] = 1e3, jn[a5] = 35 + au.iu(16), jl[a5] = 300 + au.iu(201), jm[a5] = 50 + au.iu(101)) : (jo[a5] = jp[a5] = 800, jn[a5] = 5, jl[a5] = 10, jm[a5] = 250), k8(a5)
	}, this.jx = function() {
		for (var e6 = 0, jv = a7.jc, en = 0; en < 6; en++) {
			for (var a5 = e6 + av.k9[en] - 1; e6 <= a5; a5--) this.il[a5 + jv] = en;
			e6 += av.k9[en]
		}
	}, this.jO = function(g3, value) {
		jk[g3] = Math.min(value, jk[g3])
	}, this.iR = function(g3) {
		0 == --jk[g3] && ! function(g3) {
			(function(g3) {
				jo[g3] !== jp[g3] && (jo[g3] += jo[g3] < jp[g3] ? 3 : -3);
				jl[g3] !== jm[g3] && (jl[g3] += jl[g3] < jm[g3] ? jn[g3] : -jn[g3], jl[g3] = (Math.abs(jl[g3] - jm[g3]) <= jn[g3] ? jm : jl)[g3]);
				jk[g3] = bG.ev(jo[g3], 10)
			})(g3), ah.iN.jF(g3, bG.ev(jl[g3] * aa.gX[g3], 1e3))
		}(g3)
	}, this.kC = function(g3, fy) {
		jo[g3] = jp[g3] = fy
	}
}

function iJ() {
	var kD = new Uint16Array(a7.eQ);

	function kI(player, kG) {
		for (var eT = bJ.f0[0], f7 = bJ.f7, kR = -1, kS = a7.eQ, a5 = 0; a5 < eT; a5++) {
			var ej, g3 = f7[a5];
			eM(player, g3) && (ej = bH.hm(kG, bH.i7(g3)), -1 === kR || ej < kR) && (kR = ej, kS = g3)
		}
		return kS
	}

	function kK(kH, kG) {
		if (kH === a7.eQ) return 0;
		for (var gC = aa.gC[kH], kQ = gC.length, eT = Math.min(kQ, 10), kS = 0, kR = bH.hm(gC[kS] >> 2, kG), a5 = 0; a5 < eT; a5++) {
			var k2 = au.iu(kQ),
				ej = bH.hm(gC[k2] >> 2, kG);
			ej < kR && (kR = ej, kS = k2)
		}
		return gC[kS] >> 2
	}

	function kN(player, kG, ik, kV) {
		var kW;
		(kV === a7.eQ || (kW = bH.i7(ik), kV = bH.i7(kV), bH.hm(kG, kW) < bH.hm(kG, kV))) && (kD[player] = ik)
	}
	this.dO = function() {
		kD.fill(a7.eQ)
	}, this.iR = function(player) {
		var kG, kJ, kH, ik = function(player) {
			var ik = kD[player];
			if (ik !== a7.eQ) {
				if (b6.fr.kU(ik)) return ik;
				kD[player] = a7.eQ
			}
			return a7.eQ
		}(player);
		return function(player) {
			for (var je = af.jf, kQ = af.jd, eT = Math.min(kQ, kQ < 17 && 5 === au.iu(20) ? 1 : 16), g4 = au.iu(kQ), f7 = bJ.f7, gC = aa.gC, fy = 0, a5 = 0; a5 < eT; a5++) {
				var g3 = je[(a5 + g4) % kQ];
				g3 !== player && gC[g3].length && (f7[fy++] = g3)
			}
			bJ.f0[0] = fy
		}(player), 0 !== bJ.f0[0] && (0 < (kJ = kK(kH = kI(player, kG = bH.iC(player)), kG)) && bI.kL.kM(player, kJ) ? (kN(player, kG, kH, ik), !0) : 0 < (kH = function(player, kG) {
			for (var eT = bJ.f0[0], f7 = bJ.f7, kT = kD, g4 = 0, a5 = 0; a5 < eT; a5++) {
				var g3 = f7[a5],
					g3 = kT[g3];
				g3 !== a7.eQ && b6.fr.kU(g3) && player !== g3 && eM(player, g3) && (f7[g4++] = g3)
			}
			return 0 !== (bJ.f0[0] = g4) ? kK(kI(player, kG), kG) : 0
		}(player, kG)) && bI.kL.kM(player, kH) ? (kN(player, kG, aW.eL(kH << 2), ik), !0) : !!(0 < (kJ = kK(ik, kG)) && bI.kL.kM(player, kJ)))
	}
}

function iQ() {
	function ka(player) {
		for (var et = aa.et[player], eT = et.length, eu = Math.max(bG.ev(eT, 12), 1), eV = aW.eV, hH = au.iu(eT), a5 = 0; a5 < eT; a5 += eu)
			for (var eI = et[(a5 + hH) % eT], eW = 3; 0 <= eW; eW--) {
				var eX = eI + eV[eW];
				if (aW.eY(eX)) return {
					e6: eX,
					id: aW.eB(eX),
					g3: player
				}
			}
		return null
	}

	function kf(player, kh) {
		var il = b6.fr.ki(player, a8.ju[a8.il[player]]);
		aa.fx[player].push(kh.e6), aX.ih(player, il, kh.g3), a9.ii(player, !0)
	}
	this.iR = function(player) {
		return !!bN.e7(bN.e8) && !!a7.data.e9 && 0 !== aa.et[player].length && function(player) {
			var kZ = ka(player);
			if (null === kZ) return !1;
			! function(player) {
				for (var jf = af.jf, jd = af.jd, eT = Math.min(jd, 12), g4 = au.iu(jd), f7 = bJ.f7, et = aa.et, fy = 0, a5 = 0; a5 < eT; a5++) {
					var g3 = jf[(a5 + g4) % jd];
					g3 !== player && et[g3].length && eM(player, g3) && (f7[fy++] = g3)
				}
				bJ.f0[0] = fy
			}(player);
			var kc = function(eA) {
				for (var eT = bJ.f0[0], f7 = bJ.f7, a5 = 0; a5 < eT; a5++) {
					var kh = ka(f7[a5]);
					if (null !== kh && kh.id === eA) return kh
				}
				return null
			}(kZ.id);
			return null !== kc ? (kf(player, kc), !0) : function(player, eA) {
				var eT = ah.iE.kg;
				if (0 !== eT)
					for (var e6 = ah.iE.dh[au.iu(eT)] << 2, eV = aW.eV, eW = au.iu(4);;) {
						if (e6 += eV[eW], aW.eY(e6)) {
							if (aW.eB(e6) === eA) return kf(player, {
								e6: e6,
								g3: a7.eQ
							}), !0;
							break
						}
						if (!aW.eK(e6)) break
					}
				return !1
			}(player, kZ.id)
		}(player)
	}
}

function iH() {
	this.iR = function(player) {
		var eF = function(player) {
			var eT = ah.iE.kg;
			if (0 === eT) return -1;
			for (var kQ = Math.min(eT, ah.performance.kk ? eT : 10), dh = ah.iE.dh, it = bG.ev(au.random() * eT, au.value(100)), e = it + kQ, kl = au.iD(aa.i8[player], aa.i9[player]), km = au.iD(aa.iA[player], aa.iB[player]), kS = -1, ej = bH
					.hn(0, 0, bN.ee, bN.ef), a5 = it; a5 < e; a5++) {
				var g4 = a5 % eT,
					kn = bH.el(kl, km, dh[g4]);
				kn < ej && (ej = kn, kS = g4)
			}
			return -1 !== kS ? dh[kS] : -1
		}(player);
		return -1 !== eF && bI.kL.kM(player, eF)
	}
}

function iK() {
	this.kk = 0, this.dO = function() {
		this.kk = 0
	}, this.iR = function() {
		if (!this.kk && ba.jZ() % 30 == 7 && b6.fr.kq(80) && (ah.performance.kk = 1)) {
			if (a7.ic) {
				var kt = bc.ku();
				if (bb.k5[kt]) {
					bc.kv(kt);
					var fC = bJ.f8,
						eT = bJ.f0[0];
					if (0 !== eT)
						for (var kw = Math.min(100 + 10 * (eT - 1), 400), a5 = 0; a5 < eT; a5++) a8.kC(fC[a5], kw)
				}
			}
			a8.kC(kx[0], 100)
		}
	}
}

function iF() {
	var ky, kz, l0 = 300,
		l1 = 300,
		l2 = (this.kg = 0, this.dh = new Uint32Array(512), !1);
	this.dO = function() {
		l2 = !1, kz = ky = 0, this.kg = 0
	}, this.iR = function() {
		if (function() {
				var eT = ah.iE.kg;
				if (0 === eT) return 1;
				var dh = ah.iE.dh;
				if (ba.jZ() % 35 == 6) {
					for (var a5 = eT - 1; 0 <= a5; a5--) aW.eK(dh[a5] << 2) || (eT--, dh[a5] = dh[eT]);
					ah.iE.kg = eT
				}
				return eT < dh.length
			}() && !(l0 <= ky)) {
			var a5, z = bN.ee,
				l6 = z - 2,
				eT = l6 * (bN.ef - 2),
				l7 = l0,
				dh = ah.iE.dh,
				kQ = ah.iE.kg,
				l8 = dh.length,
				g4 = Math.min(kz + l7 * ((1 + 19 * ah.performance.kk) * l1), eT);
			for (a5 = kz; a5 < g4; a5 += l7) {
				var e6 = 4 * (a5 % l6 + (bG.ev(a5, l6) + 1) * z + 1);
				if (aW.eK(e6) && (dh[kQ] = e6 >> 2, ++kQ === l8)) {
					a5 += l7;
					break
				}
			}(kz = a5) >= eT && (kz = ++ky), ah.iE.kg = kQ
		}
	}, this.l5 = function() {
		l2 || (this.dO(), l2 = !0)
	}
}

function l9() {
	aH.iR(), aZ.iR(), aQ.lA(), aw.lB.iR()
}

function lC() {
	ax.iR(), aA.iR(), aY.iR(), b0.iR(), a9.iR(), ah.iR(), bI.lB.iR(), af.lD(), aP.iR(), av.iR(), bM.iR(), bQ.iR(), aZ.iR(), aZ.lE(), aQ.iR(), bK.iR(), aO.iR(), aJ.iR(), aH.iR(), b1.iR(), aL.iR(), aq.iR(), bY.iR(), bc.iR(), aw.lB.iR(), aw.lF.iR(), m
		.iR(), b5.iR(), ba.iR()
}

function lG() {
	aB.iR(), aR.iR(), aK.iR(), an.iR(), b7.iR(), ar.lH()
}

function lI() {
	aP.lJ(!1), aJ.lJ(), aQ.lJ(!1), aO.lJ(), aL.lJ(), aq.lJ(), aZ.lJ(!1), bc.lK()
}

function lL() {
	aZ.lJ(!1) && (ba.dW = !0), aw.lB.iR()
}

function bv() {
	var lM, lN, lO;

	function lQ(lS) {
		for (var a5 = lM - 1; 0 <= a5; a5--) 0 === lO[lN[a5]] && aa.gJ[lN[a5]] >= lS && fY(lN[a5])
	}

	function lP(player) {
		var e1;
		64 === lO[player] ? lO[player] = 6 : (e1 = aa.gJ[player], lO[player] = e1 < 1e3 ? 3 : e1 < 1e4 ? 2 : e1 < 6e4 ? 1 : 0)
	}
	this.dO = function() {
		lM = 0, lN = new Uint16Array(a7.eQ), lO = new Uint8Array(a7.eQ)
	}, this.iR = function() {
		for (var a5 = lM - 1; 0 <= a5; a5--) 64 === lO[lN[a5]] ? lP(lN[a5]) : 0 == lO[lN[a5]]-- && (lP(lN[a5]), fY(lN[a5]));
		16e4 <= aa.gJ[kx[0]] && (lQ(16e4), 3e5 <= aa.gJ[kx[0]]) && lQ(3e5), b6.fr.kU(a7.eD) && (bY.lT[7] = Math.max(aa.gJ[a7.eD], bY.lT[7]))
	}, this.ft = function(player) {
		for (var em, a5 = lM - 1; 0 <= a5; a5--)
			if (player === lN[a5]) {
				for (lM--, em = a5; em < lM; em++) lN[em] = lN[em + 1];
				return
			}
	}, this.ii = function(player, lU) {
		for (var a5 = lM - 1; 0 <= a5; a5--)
			if (player === lN[a5]) return;
		lN[lM++] = player, lO[player] = lU ? 2 : 64
	}
}

function bw() {
	var size, jQ;
	this.dO = function() {
		size = a7.k0, jQ = new Uint16Array(a7.eQ);
		for (var jc = a7.jc, a5 = a7.k0 - 1; 0 <= a5; a5--) jQ[a5] = jc + a5
	}, this.iR = function() {
		for (var a5 = size - 1; 0 <= a5; a5--)
			if (0 === aa.lX[jQ[a5]]) {
				em = void 0;
				var em = a5;
				size--, jQ[em] = jQ[size]
			} else a8.iR(jQ[a5])
	}, this.lW = function(g3) {
		jQ[size++] = g3
	}
}

function bx() {
	var lZ, la, lb, lc, ld, le, lf, lg, lh, li, lj, lk, ll, lm = !1,
		ln = !1;

	function lo(lp) {
		lk = ba.e0, lb = lc = la = 0, ld = (ll = 33) / lp, lZ = 1 / (lp / ll / 4), le = (at.z / 2 + hu) / hv, lf = (at.j6 / 2 + hw) / hv, lg = hv
	}

	function lw(a5) {
		var lz; - 1 !== a5 && (a5 = bH.i1(bI.lB.ly[a5]), lz = bH.eb(a5) - 10, a5 = bH.ed(a5) - 10, aB.ls(lz, a5, 19 + lz, 19 + a5))
	}

	function mA(mC) {
		Math.abs(Math.log(lj / lg)) < .125 && (lj = mC * lg)
	}

	function m9(lz, m0, mD, mE) {
		lh = (lz + mD + 1) / 2, li = (m0 + mE + 1) / 2;
		mD = at.z / (mD - lz + 1), lz = at.j6 / (mE - m0 + 1);
		lj = .9 * (mD < lz ? mD : lz)
	}
	this.lq = function() {
		return lm
	}, this.lr = function() {
		lo(1), this.ls(0, 0, bN.ee - 1, bN.ef - 1), a7.gr || a7.gf || this.lt(a7.eD, 3e3, !0, .3)
	}, this.lu = function(player, lv) {
		lw(bI.gz.lx(player, lv))
	}, this.lt = function(player, lp, m1, zoom) {
		a7.m2 || lm && !m1 && ln || (0 === aa.gJ[player] ? lw(bI.gz.m3(player)) : (aM.m4 = !1, ln = m1, lo(lp), function(player) {
			lh = (aa.i8[player] + aa.i9[player] + 1) / 2, li = (aa.iA[player] + aa.iB[player] + 1) / 2
		}(player), function(zoom, player) {
			var hf = aa.i9[player] - aa.i8[player] + 1,
				player = aa.iB[player] - aa.iA[player] + 1,
				em = at.z / hf,
				en = at.j6 / player,
				em = (lj = em < en ? em : en, 0 !== zoom ? zoom : hf < 20 && player < 20 ? .5 : .9);
			lj *= em, mA(7 / 8)
		}(zoom, player), lm = !0, ak.m7()))
	}, this.m8 = function(lp) {
		a7.gf || a7.m2 || (aM.m4 = !1, ln = !1, lo(lp), m9(0, 0, bN.ee - 1, bN.ef - 1), mA(7 / 8), lm = !0, ak.m7())
	}, this.ls = function(lz, m0, mD, mE) {
		m9(lz, m0, mD, mE), hv = lj, aM.mF(lh, at.z / 2), aM.mG(li, at.j6 / 2), bV.mH(), ba.dW = !0
	}, this.mI = function() {
		return !(lm && ln || (lm = !1))
	}, this.iR = function() {
		var mL, mM, eW, mP;
		lm && (la < .5 ? lc < ld && (lc += ld * lZ, lb = la) : 1 - lb < la && (lc = (lc -= ld * lZ) < ld * lZ ? ld * lZ : lc), lk = lk >= ba.e0 ? ba.e0 - 1 : lk, eW = ba.e0 - lk, la = 1e3 < eW || 1 < (la += lc * eW / ll) ? 1 : la, lk = ba.e0,
			eW = hv, mL = hu, mM = hw, eW = (hv = lg * Math.pow(lj / lg, la)) / eW, mP = 1 - (lg * Math.pow(lj / lg, 1 - la) - lg) / (lj - lg), aM.mF(le + mP * (lh - le), at.z / 2), aM.mG(lf + mP * (li - lf), at.j6 / 2), aZ.zoom(eW, (mL *
				eW - hu) / (1 - eW), (mM * eW - hw) / (1 - eW)), bV.mH(), 1 <= la && (lm = !1, bW.mQ = !0), ba.dW = !0)
	}
}

function bp() {
	var eo = b6.color;
	this.mR = eo.mS(0, 0, 0), this.mT = eo.mU(0, 0, 0, .7), this.mV = eo.mU(0, 0, 0, .5), this.mW = eo.mU(0, 0, 0, .85), this.mX = eo.mU(0, 0, 0, .75), this.mY = eo.mU(0, 0, 0, .6), this.mZ = eo.mU(0, 0, 0, .35), this.ma = eo.mS(255, 255, 255), this
		.mb = eo.mU(255, 255, 255, .3), this.mc = eo.mU(255, 255, 255, .6), this.md = eo.mU(255, 255, 255, .4), this.me = eo.mU(255, 255, 255, .25), this.mf = eo.mU(255, 255, 255, .85), this.mg = eo.mU(255, 255, 255, .75), this.mh = eo.mU(255, 255,
			255, .15), this.mi = eo.mS(128, 128, 128), this.mj = eo.mU(64, 64, 64, .75), this.mk = eo.mU(88, 88, 88, .83), this.ml = eo.mU(60, 60, 60, .85), this.mm = eo.mU(80, 60, 60, .85), this.mn = eo.mS(30, 255, 30), this.mo = eo.mS(0, 200, 0),
		this.mp = eo.mS(128, 255, 128), this.mq = eo.mU(10, 65, 10, .75), this.mr = eo.mU(0, 255, 0, .6), this.ms = eo.mU(0, 255, 0, .5), this.mt = eo.mU(0, 200, 0, .5), this.u = eo.mU(0, 100, 0, .75), this.mu = eo.mU(0, 60, 0, .8), this.mv = eo.mU(
			0, 255, 0, .3), this.mw = eo.mU(0, 180, 0, .6), this.mx = eo.mU(0, 120, 0, .85), this.my = eo.mS(0, 120, 0), this.mz = eo.mU(0, 70, 0, .85), this.n0 = eo.mS(255, 120, 120), this.n1 = eo.mS(255, 160, 160), this.n2 = eo.mS(255, 70, 70),
		this.n3 = eo.mS(230, 0, 0), this.n4 = eo.mU(220, 0, 0, .6), this.n5 = eo.mU(255, 100, 100, .8), this.n6 = eo.mU(100, 0, 0, .85), this.n7 = eo.mU(60, 0, 0, .85), this.n8 = eo.mU(200, 0, 0, .6), this.n9 = eo.mU(120, 0, 0, .85), this.nA = eo.mS(
			255, 70, 10), this.nB = eo.mU(0, 60, 60, .85), this.nC = eo.mU(10, 60, 60, .9), this.nD = eo.mU(0, 96, 96, .75), this.nE = eo.mS(160, 160, 255), this.nF = eo.mU(0, 40, 90, .75), this.nG = eo.mU(0, 0, 255, .6), this.nH = eo.mS(200, 200,
			255), this.nI = eo.mS(255, 120, 100), this.nJ = eo.mU(255, 255, 0, .5), this.nK = eo.mU(255, 255, 150, .2), this.nL = eo.mS(255, 255, 0), this.nM = eo.mS(255, 255, 200), this.nN = eo.mU(200, 200, 0, .6), this.nO = eo.mU(140, 120, 0, .75),
		this.nP = eo.mU(180, 160, 40, .75), this.nQ = eo.mU(70, 50, 20, .85), this.nR = eo.mU(30, 30, 0, .85), this.nS = eo.mU(255, 140, 0, .75), this.nT = eo.mU(0, 0, 0, 0)
}

function co() {
	this.gs = new nU, this.fr = new nV, this.nW = new nX, this.nY = new nZ, this.jh = new na
}

function nU() {
	this.gt = function(eF) {
		a7.jy ? b4.nW.gt(a7.eD, eF) : aw.nb.nc(eF)
	}, this.h3 = function(ht, ik) {
		a7.jy ? b4.nW.h3(a7.eD, ht, ik) : aw.nb.nd(ht, ik)
	}, this.ne = function(ht, nf) {
		a7.jy ? b4.nW.ng(a7.eD, ht, nf) : aw.nb.nh(ht, nf)
	}, this.h1 = function(ht, eF) {
		a7.jy ? b4.nW.h1(a7.eD, ht, eF) : bI.gz.h0(a7.eD, eF) && aw.nb.ni(ht, eF)
	}, this.nj = function(lv, eF) {
		a7.jy ? b4.nW.nj(a7.eD, lv, eF) : bI.gz.nk(a7.eD, lv, eF) && aw.nb.nl(lv, eF)
	}, this.nm = function(ik) {
		a7.jy ? b4.nW.nm(a7.eD, ik) : aw.nb.nn(ik)
	}, this.no = function(np) {
		a7.jy ? b4.nW.nq(a7.eD, np) : aw.nb.nr(np)
	}, this.ns = function(nt) {
		a7.jy ? b4.nW.ns(a7.eD, nt) : aw.nb.nu(nt)
	}, this.nv = function() {
		a7.jy ? b4.nW.nv(a7.eD) : aw.nb.nw()
	}, this.nx = function() {
		a7.jy ? b4.nW.nx(a7.eD) : aw.nb.ni(1, 0)
	}, this.gw = function(ht, eF, ik) {
		a7.jy ? b4.nW.gw(a7.eD, ht, eF, ik) : aw.nb.ny(ht, eF, ik)
	}
}

function na() {
	this.ji = function(player, nf, il) {
		b6.fr.nz(player, il, nf) && (aY.ne(player, nf), nf < a7.jc) && au.random() < au.value(10) && (ah.iN.ie[nf] = 0)
	}, this.o0 = function(player, nf, il) {
		b6.fr.o1(il, nf) ? (b6.fr.fu(nf, bJ.f2[0]), bY.o2(player, nf), aZ.o3(nf, bJ.f2[0])) : bY.fv(player, il, 12)
	}
}

function nV() {
	this.o4 = function(np, player) {
		aH.no(a7.eD, player, np), aw.nb.o5(np, player)
	}, this.o6 = function(player) {
		aH.o7(player, 0), aw.nb.o8(player)
	}, this.o9 = function(oA, player) {
		aH.oB(oA, player), aw.nb.oC(oA, player)
	}, this.oD = function() {
		a7.jy || a7.gf || aw.oE.oD()
	}
}

function nZ() {
	this.iR = function(a6) {
		var id, fD, mI;
		for (bC.dO(a6), bC.oF += 2, mI = 8 * bC.size; bC.oF + 8 <= mI;) id = bC.oG(4), fD = bC.oG(9), 0 === id ? this.oH(id, fD, bC.oG(22)) : 1 === id ? this.oH(id, fD, bC.oG(10), bC.oG(10)) : 2 === id ? this.oH(id, fD, bC.oG(10), bC.oG(9)) :
			3 === id || 4 === id ? this.oH(id, fD, bC.oG(10), bC.oG(22)) : 5 === id || 6 === id ? this.oH(id, fD, bC.oG(10)) : 7 === id ? this.oH(id, fD, bC.oG(1)) : 10 === id ? this.oH(id, fD, bC.oG(20), bC.oG(22)) : this.oH(id, fD)
	}, this.oI = [], this.oJ = function() {
		for (var oL = 0, oM = 0, oN = 0, oO = 0, oP = 0, oQ = 0, a5 = 0; a5 < 512; a5++) oL += aa.lX[a5], oM += aa.gJ[a5], oN += aa.gX[a5], oO += bI.lB.oR[a5];
		oP += bI.lB.oS, oQ += af.jd, this.oI.push(oN % 1073741824 * 4 + (oL + oM + oO + oP + oQ) % 4)
	}, this.oH = function(id, fD, fF, fH) {
		0 === id ? b4.nW.gt(fD, fF) : 1 === id ? b4.nW.h3(fD, fF, fH) : 2 === id ? b4.nW.ng(fD, fF, fH) : 3 === id ? b4.nW.h1(fD, fF, fH) : 4 === id ? b4.nW.nj(fD, fF, fH) : 5 === id ? b4.nW.nm(fD, fF) : 6 === id ? b4.nW.nq(fD, fF) : 7 === id ?
			b4.nW.ns(fD, fF) : 8 === id ? b4.nW.nv(fD) : 9 === id ? b4.nW.oT(fD) : 10 === id && b4.nW.gw(fD, fF >> 10, fH, fF % 1024)
	}
}

function nX() {
	this.gt = function(player, eF) {
		b6.fr.gh(0) && b6.fr.gi(player) && bH.hy(eF) && (b5.oU.oV(0, player, eF), a7.oW.ih(player, eF))
	}, this.h3 = function(player, ht, ik) {
		b6.fr.gh(1) && b6.fr.gi(player) && b6.fr.oX(player, ik) && b6.fr.oY(player, ht, 12, 0) && b6.fr.oZ(player, ik) && ((ik = aX.iy(player, bJ.eP[0])) || aX.jG(player)) && (aa.oa[player]++, b5.oU.oV(1, player, ht, bJ.eP[0]), ah.iL.iV(player,
			ik)) && (b6.fr.ob(player), bY.oc(player, ht), ah.iL.ib(player))
	}, this.ng = function(player, ht, nf) {
		b6.fr.gh(1) && b6.fr.gi(player) && a7.ic && b6.fr.oX(player, nf) && b6.fr.od(player, nf) && b6.fr.nz(player, b6.fr.hs(player, ht), nf) && (b5.oU.oV(2, player, ht, nf), aY.ne(player, nf))
	}, this.h1 = function(player, ht, eF) {
		b6.fr.gh(1) && b6.fr.gi(player) && (0 === eF && 1 === ht ? this.nx(player) : bH.hy(eF) && bI.lB.oS !== bI.lB.jt && bI.lB.oR[player] !== bI.lB.oe && 0 !== aa.gC[player].length && b6.fr.oY(player, ht, 32, 0) && bI.kL.kM(player, eF) && (bY
			.og(player), b5.oU.oV(3, player, ht, eF), b6.fr.ob(player), bh.oh.h1(player), bI.lB.oi(player)))
	}, this.nj = function(player, lv, eF) {
		b6.fr.gh(1) && b6.fr.gi(player) && bH.hy(eF) && bI.gz.oj(player, lv) && bI.kL.ok(eF) && (b5.oU.oV(4, player, lv, eF), b6.fr.ol(player, 8), bY.fv(player, bJ.f2[1], 12), bh.oh.nj(player), bI.lB.nj())
	}, this.nm = function(player, ik) {
		b6.fr.gh(1) && b6.fr.gi(player) && (ik = Math.min(ik, a7.eQ), aX.iy(player, ik)) && (b5.oU.oV(5, player, ik), aX.om(player, ik))
	}, this.nq = function(player, np) {
		(b6.fr.gh(1) || b6.fr.gh(2)) && b6.fr.gi(player) && (np = bG.on(np, 0, 1023), b5.oU.oV(6, player, np), aZ.oo(player, 0, np))
	}, this.ns = function(player, nt) {
		b6.fr.gh(1) && b6.fr.gi(player) && (b5.oU.oV(7, player, nt), aq.op(player, nt))
	}, this.nv = function(player) {
		(b6.fr.gh(0) || b6.fr.gh(1)) && b6.fr.gi(player) && bL.nv(player) && b5.oU.oV(8, player)
	}, this.oT = function(player) {
		bL.oT(player), b5.oU.oV(9, player)
	}, this.nx = function(player) {
		aq.oq(player) && (b5.oU.oV(3, player, 1, 0), aq.nx(player))
	}, this.gw = function(player, ht, eF, ik) {
		b6.fr.gh(1) && b6.fr.gi(player) && b6.fr.oX(player, ik) && b6.fr.oZ(player, ik) && bH.hy(eF) && ag.e3.eN(player, eF) && (aX.iy(player, bJ.eP[0]) || aX.jG(player)) && (b5.oU.oV(10, player, (ht << 10) + bJ.eP[0], eF), ik = b6.fr.ki(player,
			ht), aa.fx[player].push(bJ.eU[0]), aX.ih(player, ik, bJ.eP[0]), a9.ii(player, !0), bY.or(player))
	}
}

function os() {
	var ou;
	this.ot = [], this.ou = document.createElement("div"), this.ov = function(ow, marginTop) {
		var title = document.createElement("h2");
		return title.textContent = ow, title.style.margin = "0", title.style.marginBottom = "0.6em", marginTop && (title.style.marginTop = marginTop), title.style.fontSize = "1.4em", title.style.overflowWrap = "break-word", this.ou.appendChild(
			title), title
	}, this.ox = function(ow, marginBottom) {
		var oy = document.createElement("p");
		return oy.textContent = ow, oy.style.fontSize = "0.75em", oy.style.lineHeight = "1.2em", oy.style.marginBottom = marginBottom || "0", this.ou.appendChild(oy), oy
	}, this.oz = function(ow) {
		var p0 = document.createElement("p");
		return p0.textContent = ow, p0.style.fontSize = "1em", p0.style.marginBottom = "0", p0.style.whiteSpace = "pre-wrap", p0.style.overflowWrap = "break-word", this.ou.appendChild(p0), p0
	}, this.p1 = function(p2, fontSize) {
		var ou = document.createElement("div");
		return ou.innerHTML = p2, ou.style.fontSize = fontSize || "1em", ou.style.lineHeight = "1.2em", this.ou.appendChild(ou), ou
	}, this.p3 = function(p4) {
		for (var p5 = p4.p5, eT = p5.length, a5 = 0; a5 < eT; a5++) this.ou.appendChild(p5[a5])
	}, this.p6 = function(p7) {
		return this.ot.push(p7), this.ou.appendChild(p7.e), p7
	}, this.resize = function() {
		for (var eT = this.ot.length, a5 = 0; a5 < eT; a5++) this.ot[a5].resize && this.ot[a5].resize()
	}, (ou = this.ou).style.position = "absolute", ou.style.height = "auto", ou.style.padding = "0.5em"
}

function p8(p9, pA) {
	var ou = document.createElement("div");

	function pJ() {
		var a5, pK, j6, g4, eW, pE = at.pL * ou.offsetWidth,
			pM = new Float64Array(function(pE) {
				var z = .25 * b6.pF.pG(.6) * at.pH;
				return Math.max(Math.floor(pE / z), 1)
			}(pE)),
			pN = bX.pN,
			pO = (pE - (pM.length + 1) * bX.gap) / (pM.length * at.pL);
		for (pM.fill(pN), a5 = 0; a5 < pA.length; a5++) pK = (eW = pA[a5].ou).style, j6 = b6.pP.min(pM), g4 = pM.indexOf(j6), pK.top = b6.pF.pQ(j6), pK.left = b6.pF.pQ(pN + g4 * (pO + pN)), pK.width = b6.pF.pQ(pO), b6.pF.pR(eW, 5), pM[g4] += eW
			.offsetHeight + 3 * pN;
		ou.style.height = b6.pF.pQ(b6.pP.max(pM) - 2 * pN)
	}
	this.pB = ou, this.pC = pA, this.resize = function() {
		var a5;
		for (a5 = 0; a5 < pA.length; a5++) pA[a5].resize();
		pJ(), pJ()
	}, ou.style.width = "100%", ou.style.maxWidth = "100%", p9.style.lineHeight = "1.5em", p9.style.overflowX = "hidden", p9.style.overflowY = "auto";
	for (var a5 = 0; a5 < pA.length; a5++) ou.appendChild(pA[a5].ou);
	p9.appendChild(ou)
}

function p(title, pS, backgroundColor, pT, pU) {
	var self, pV = document.createElement("button");

	function pb() {
		if (!bE.pg()) {
			if (!1 !== pT) {
				var ph = b6.color.pi(backgroundColor);
				if (0 < ph[0] && ph[0] < 255 && ph[0] === ph[1] && ph[0] === ph[2]) return
			}
			this.style.backgroundColor = b6.color.pb(backgroundColor, 50)
		}
	}

	function pa() {
		if (pT) {
			var ph = b6.color.pi(backgroundColor);
			if (ph[0] === ph[1] && ph[0] === ph[2]) return
		}
		pS(this) || pj(this)
	}

	function pd() {
		this.style.backgroundColor = backgroundColor
	}

	function pc() {
		pj(this)
	}

	function pj(eW) {
		eW.style.backgroundColor = backgroundColor, eW.blur()
	}
	this.button = pV, this.pW = pS, this.pX = backgroundColor, this.pZ = function(pe) {
			pe = 1.1 - Math.min(.01 * title.length, .6) + .2 * pe;
			pV.style.fontSize = pe.toFixed(1) + "em"
		}, this.pY = function(eo) {
			eo ? 1 === eo && (eo = t.ml) : (pT = 0, eo = t.mW), this.pX = backgroundColor = eo, pV.style.backgroundColor = eo
		}, self = this, pV.innerHTML = title, pV.style.color = pU ? t.nL : t.ma, pV.style.userSelect = "none", pV.style.outline = "none", pV.style.overflowWrap = "break-word", self.pY(backgroundColor), pV.style.border = "none", pV.style.font =
		"inherit", self.pZ(0), pV.style.padding = "0em 0.3em", pV.onclick = pa, pV.addEventListener("mouseover", pb), pV.addEventListener("mouseout", pc), pV.addEventListener("focus", pb), pV.addEventListener("blur", pd)
}

function pk(pl, p9) {
	var ou;
	this.resize = function() {
		for (var a5 = 0; a5 < pl.length; a5++) b6.pF.pR(pl[a5].button);
		ou.style.gap = ou.style.padding = b6.pF.pQ(bX.pN)
	}, (ou = document.createElement("div")).style.display = "grid", ou.style.gridTemplateColumns = "repeat(auto-fill, minmax(9.5em, 1fr))", ou.style.overflowY = "auto", ou.style.gridAutoRows = "5.3em", ou.style.maxHeight = "100%";
	for (var a5 = 0; a5 < pl.length; a5++) pl[a5].pZ(1), ou.appendChild(pl[a5].button);
	p9.appendChild(ou)
}

function pn(po, pp, pq) {
	this.ea = 0, this.ec = 0, this.z = 0, this.j6 = 0, this.resize = function() {
		this.j6 = Math.min(b6.pF.pG(pq || .5) * po[1] * at.pH, at.j6 - 2 * bX.gap), this.z = Math.min(this.j6 * (po[0] / po[1]), at.z - 2 * bX.gap), this.j6 = po[1] * this.z / po[0], this.ea = bX.gap + pp[0] * (at.z - this.z - 2 * bX.gap), this
			.ec = bX.gap + pp[1] * (at.j6 - this.j6 - 2 * bX.gap)
	}, this.pr = function() {
		return this.ea + .5 * this.z
	}
}

function ps(pt, pu, pv) {
	function click() {
		var value = 1 - pt.value;
		this.textContent = (value ? "🟩 " : "⬜ ") + pu, void 0 !== pt.oF ? be.pw.px(pt.oF, value) : pt.value = value, pv && pv(value)
	}
	var e;
	pu = pu || L(6), this.e = document.createElement("p"), (e = this.e).textContent = (pt.value ? "🟩 " : "⬜ ") + pu, e.style.margin = "0", e.style.marginBottom = "0.5em", e.style.cursor = "pointer", e.addEventListener("click", click)
}

function py(p9, p2) {
	var ou = document.createElement("div");
	this.pB = ou, this.resize = function() {
		ou.style.padding = b6.pF.pQ(bX.pN), ou.style.lineHeight = b6.pF.pQ(b6.pF.pz(.035))
	}, p9.style.overflowX = "hidden", p9.style.overflowY = "auto", ou.innerHTML = p2, p9.appendChild(ou)
}

function q0(q1) {
	var ou = document.createElement("div");
	this.e = ou, this.q2 = q1, this.resize = function() {
		for (var eT = q1.length, a5 = 1; a5 < eT; a5++) b6.pF.pR(q1[a5], 4)
	};
	var a5, eT = q1.length;
	for (ou.style.width = "100%", ou.style.height = "2.7em", ou.style.marginTop = "0.6em", ou.style.border = "inherit", a5 = 0; a5 < eT; a5++) q1[a5].style.verticalAlign = "top", q1[a5].style.width = (100 / eT).toFixed(2) + "%", q1[a5].style.height =
		"100%", q1[a5].style.fontSize = "0.75em", ou.appendChild(q1[a5])
}

function q3() {
	var e;
	this.e = document.createElement("hr"), this.resize = function() {
		b6.pF.pR(this.e, 8, t.mi)
	}, (e = this.e).style.marginBottom = e.style.marginTop = "0.65em", e.style.marginLeft = e.style.marginRight = "-4%", e.style.border = "none"
}

function q5(q6, type, q7, q8) {
	var e;
	this.e = document.createElement("input"), (e = this.e).type = type ? "number" : "text", e.id = "input" + m.lB.q9++, e.value = q6.value, e.style.width = "100%", e.style.userSelect = "none", e.style.outline = "none", e.style.resize = "none", e
		.style.border = "inherit", e.style.font = "inherit", e.style.color = t.ma, e.style.backgroundColor = t.mT, e.style.fontSize = "1em", e.style.padding = "0.1em 0.2em", e.addEventListener("focus", function() {
			at.qA++
		}), e.addEventListener("blur", function() {
			at.qA--, -1 !== q6.oF && be.pw.px(q6.oF, e.value)
		}), e.addEventListener("keypress", function(event) {
			"Enter" === event.key && (event.preventDefault(), -1 !== q6.oF && be.pw.px(q6.oF, e.value), q7 ? q7() : e.blur())
		}), q8 && e.addEventListener("input", function(e) {
			q8(e)
		})
}

function qB(p9, data) {
	var eT = data.qC.length,
		qD = document.createElement("div"),
		qE = document.createElement("div"),
		qF = document.createElement("div"),
		qG = new Array(eT),
		pA = new Array(eT),
		qH = new Array(data.qI.length),
		qJ = b6.color.mU(70, 70, 0, .35);

	function pb() {
		this.style.backgroundColor = b6.color.pb(qJ, 160)
	}

	function pc() {
		this.style.backgroundColor = qJ
	}

	function pJ() {
		var em;
		for (p9.style.font = b6.pF.qW(0, b6.pF.qX(.026, .5, .03)), a5 = 1; a5 < qH.length; a5++) b6.pF.pR(qH[a5], 4);
		if (b6.pF.pR(qD, 2), eT) {
			for (var gv, qY = qD.offsetWidth, qZ = qF.offsetWidth, a5 = 0; a5 < qH.length; a5++) gv = .01 * data.qM[a5] * qZ, qH[a5].style.width = (100 * gv / qY).toFixed(2) + "%";
			var kQ = data.qC[0].length;
			for (a5 = 0; a5 < eT; a5++)
				for (b6.pF.pR(qG[a5], 2), em = 1; em < kQ; em++) b6.pF.pR(pA[a5][em], 4)
		}
	}
	this.resize = function() {
			pJ(), pJ()
		}, p9.style.display = "flex", p9.style.flexDirection = "column", qE.style.overflowX = "hidden", qE.style.overflowY = "auto",
		function() {
			var eW, a5, qC = data.qC,
				kQ = eT ? qC[0].length : 0;
			for (a5 = 0; a5 < eT; a5++) {
				qG[a5] = document.createElement("div"), qG[a5].style.backgroundColor = function(a5) {
					return a5 % 2 == 1 ? b6.color.mU(130, 130, 130, .35) : t.mZ
				}(a5), qG[a5].style.width = "100%", qG[a5].style.display = "flex", pA[a5] = new Array(kQ);
				for (var em = 0; em < kQ; em++) pA[a5][em] = eW = document.createElement("div"), eW.style.display = "flex", eW.style.justifyContent = "center", eW.style.wordBreak = "break-all", eW.style.padding = "0.4em 0em", eW.style.width = data
					.qM[em] + "%", eW.innerHTML = qC[a5][em].ew, 1 === qC[a5][em].e1 && (eW.name = "" + a5, eW.style.color = t.nL, eW.style.backgroundColor = qJ, eW.addEventListener("mouseover", pb), eW.addEventListener("mouseout", pc), function(eW,
						qO, qP) {
						2147483647 !== qP && eW.addEventListener("click", function() {
							b8.a1(30), b8.a2(30, qO), bC.dO(b8.a6), this.style.backgroundColor = qJ, m.n(8, m.qQ, new qR(25, {
								qS: 0,
								qO: bA.qT.qU(bA.qT.qV(5)),
								qP: qP
							}))
						})
					}(eW, qC[a5][em].qO, qC[a5][em].qP)), qG[a5].appendChild(eW)
			}
			for (qD.style.display = "flex", qD.style.backgroundColor = b6.color.mU(0, 120, 0, .35), a5 = 0; a5 < qH.length; a5++) qH[a5] = eW = document.createElement("div"), eW.style.display = "flex", eW.style.justifyContent = "center", eW.style
				.wordBreak = "break-all", eW.style.padding = "0.4em 0em", eW.style.width = data.qM[a5] + "%", eW.innerHTML = data.qI[a5], qD.appendChild(eW)
		}();
	for (var a5 = 0; a5 < eT; a5++) qF.appendChild(qG[a5]);
	qE.appendChild(qF), p9.appendChild(qD), p9.appendChild(qE)
}

function qa() {
	var qe, a5, qb = document.createElement("div"),
		qc = document.createElement("div"),
		qd = document.createElement("div"),
		qF = document.createElement("div"),
		pl = [],
		qI = ["Best 1v1 Player", "Top Clan", "Leading Clan Member"],
		qf = [1, 0, 2];

	function qg(a5) {
		m.n(8, 0, new qR(21, {
			qh: qf[a5],
			qi: 0,
			qj: 10
		}))
	}
	for (this.show = function() {
			this.px(m.lB.qk), document.body.appendChild(qb)
		}, this.ql = function() {
			document.body.removeChild(qb)
		}, this.px = function(qk) {
			for (var a5 = 0; a5 < pl.length; a5++) pl[qf[a5]].button.innerHTML = qI[a5] + "<br>" + qk[a5]
		}, this.resize = function() {
			var a5, qm = bX.gap,
				j6 = b6.pF.qn(.085),
				z = Math.min(4 * j6, at.z - 2 * qm),
				eT = pl.length;
			for (b6.pF.qo(qb, qm, at.j6 - qm - j6, z, j6), b6.pF.pR(qb), b6.pF.pR(qc, 6), a5 = 0; a5 < eT - 1; a5++) b6.pF.pR(pl[a5].button, 6);
			for (a5 = 0; a5 < eT; a5++) pl[a5].button.style.fontSize = b6.pF.qp(.22 * j6);
			if (!qe) {
				if (!aV.qq()) return;
				(qe = aV.get(14)).style.width = "24%", qe.style.position = "absolute", qc.appendChild(qe)
			}
			qe.style.left = b6.pF.pQ(0), qe.style.top = "7%"
		}, qb.style.position = "absolute", qc.style.width = "25%", qc.style.height = "100%", qc.style.backgroundColor = t.mW, qd.style.position = "absolute", qd.style.width = "75%", qd.style.height = "100%", qd.style.backgroundColor = t.mW, qd.style
		.top = qd.style.right = b6.pF.pQ(0), qd.style.overflowX = "auto", qd.style.overflowY = "hidden", qd.style.whiteSpace = "nowrap", qF.style.height = qF.style.maxHeight = "100%", pl.push(new p("", function() {
			qg(0)
		}, t.n7)), pl.push(new p("", function() {
			qg(1)
		}, t.mu)), pl.push(new p("", function() {
			qg(2)
		}, t.nB)), a5 = 0; a5 < pl.length; a5++) pl[a5].button.style.height = "100%", qF.appendChild(pl[a5].button);
	qd.appendChild(qF), qb.appendChild(qc), qb.appendChild(qd)
}

function qr(q6, pa) {
	this.p5 = [];
	var qs = this.p5;

	function click() {
		for (var a5 = 0; a5 < qs.length; a5++) qs[a5].textContent = qs[a5].textContent.replace("🟢", "⚪");
		this.textContent = this.textContent.replace("⚪", "🟢");
		var oF = parseInt(this.name);
		void 0 !== q6.oF && be.pw.px(q6.oF, oF), pa && pa(oF)
	}
	for (var qt, eT = q6.qu.length, a5 = 0; a5 < eT; a5++)(qt = document.createElement("p")).textContent = "⚪ " + q6.qu[a5], qt.style.margin = "0", qt.name = "" + a5, qt.style.cursor = "pointer", qt.style.fontSize = "1em", qt.addEventListener(
		"click", click), qs.push(qt);
	qs[q6.value].textContent = qs[q6.value].textContent.replace("⚪", "🟢")
}

function qv(title, qw, qx) {
	var qb = document.createElement("div"),
		qy = document.createElement("div"),
		qF = document.createElement("div"),
		qz = document.createElement("div"),
		r0 = document.createElement("div");
	this.r1 = qF, this.r2 = qw, this.show = function() {
			!1 !== qx ? document.body.appendChild(qb) : (document.body.appendChild(qy), document.body.appendChild(qz))
		}, this.ql = function() {
			!1 !== qx ? document.body.removeChild(qb) : (document.body.removeChild(qy), document.body.removeChild(qz))
		}, this.r6 = function() {
			var r7 = b6.pF.pz(.1),
				r8 = b6.pF.pz(.08 + .04 * (at.r9 < 1));
			return {
				r7: r7,
				r8: r8,
				rA: at.j6 / at.pL - r7 - r8
			}
		}, this.resize = function(rB) {
			var eT = qw.length,
				rC = this.r6(),
				r7 = rC.r7,
				r8 = rC.r8;
			for (qy.style.height = b6.pF.pQ(r7), b6.pF.pR(qy, 2), qz.style.top = b6.pF.pQ(at.j6 / at.pL - r8), qz.style.height = b6.pF.pQ(r8), b6.pF.pR(qz, 8), qF.style.top = b6.pF.pQ(r7), qF.style.height = qF.style.maxHeight = b6.pF.pQ(rC.rA), qy
				.style.font = b6.pF.qW(0, b6.pF.pz(.02, .3)), qz.style.font = b6.pF.qW(0, b6.pF.pz(.02, .7)), qF.style.font = b6.pF.qW(0, b6.pF.pz(.02, .7)), a5 = 1; a5 < eT; a5++) b6.pF.pR(qw[a5].button, 4);
			for (var rD = 0, a5 = 0; a5 < eT; a5++) rD += qw[a5].button.offsetWidth;
			if (rB && rD < qz.offsetWidth)
				for (a5 = 0; a5 < eT; a5++) qw[a5].button.style.width = (100 * qw[a5].button.offsetWidth / rD).toFixed(2) + "%";
			else
				for (a5 = 0; a5 < eT; a5++) qw[a5].button.style.width = "auto";
			rB || this.resize(!0)
		}, this.rE = function() {
			var rC = this.r6(),
				eo = at.pL;
			rF.fillStyle = t.mW, rF.fillRect(0, eo * rC.r7, at.z, eo * rC.rA)
		}, qb.style.position = "absolute", qb.style.top = "0", qb.style.left = "0", qb.style.width = "100%", qb.style.height = "100%", qy.style.position = "absolute", qy.style.top = "0", qy.style.left = "0", qy.style.width = "100%", qy.style
		.display = "flex", qy.style.backgroundColor = t.mW, qz.style.position = "absolute", qz.style.left = "0", qz.style.width = "100%", qz.style.overflowX = "auto", qz.style.overflowY = "hidden", qz.style.whiteSpace = "nowrap", r0.style.height = r0
		.style.maxHeight = "100%", qF.style.position = "absolute", qF.style.width = "100%", qF.style.backgroundColor = t.mW,
		function() {
			for (var a5 = 0; a5 < qw.length; a5++) qw[a5].button.style.height = "100%", qw[a5].button.style.padding = "0.0em 0.9em"
		}();
	for (var a5 = 0; a5 < qw.length; a5++) r0.appendChild(qw[a5].button);
	qy.appendChild(function() {
		var r5 = document.createElement("h1");
		return r5.textContent = title, r5.style.margin = "auto", r5.style.fontSize = 20 < title.length && at.j6 > at.z ? "1.8em" : "2.3em", r5
	}()), qz.appendChild(r0), !1 !== qx && (qb.appendChild(qF), qb.appendChild(qy), qb.appendChild(qz))
}

function rG(rH, rI, rJ, rK) {
	var rL = document.createElement("textarea"),
		rM = (this.e = rL, !0);

	function rS() {
		rL.select(), document.execCommand("copy")
	}
	this.resize = function() {
			rI && b6.pF.pR(rL, 5)
		}, this.rN = function(rO) {
			rL.value = rO
		}, this.rP = function() {
			return rL.value
		}, this.rQ = function() {
			rL.select()
		}, this.clear = function() {
			rL.value = ""
		}, this.rR = function() {
			rM && navigator.clipboard ? (rL.select(), navigator.clipboard.writeText(rL.value).catch(function() {
				rM = !1, rS()
			})) : rS()
		}, rL.setAttribute("id", "textArea" + m.lB.q9++), rL.setAttribute("autocomplete", "off"), rH && rL.setAttribute("placeholder", rH), rL.style.top = "0", rL.style.left = "0", rL.style.width = "100%", rL.style.height = "100%", rL.style
		.userSelect = "none", rL.style.outline = "none", rL.style.resize = "none", rL.style.border = "none", rL.style.color = t.ma, rL.style.backgroundColor = t.mT, rK ? (rL.style.fontSize = "1em", rL.rows = 6, rL.style.padding = "0.25em") : (rL
			.style.padding = "0.45em", rL.style.fontSize = "1.2em"), rJ && rL.addEventListener("input", function(e) {
			rJ(e)
		}), rL.addEventListener("focus", function() {
			at.qA++
		}), rL.addEventListener("blur", function() {
			at.qA--
		})
}

function d8() {
	this.pW = new rT, this.dh = new rU, this.pw = new rV, this.lB = new rW, this.dO = function() {
		this.dh.dO(), (new rX).dO()
	}
}

function rU() {
	function rY(a5, type, re, ex) {
		be.dh.data.push({
			oF: a5,
			type: type || 0,
			value: re || 0,
			re: re || 0,
			ex: ex || 0
		})
	}

	function rZ(a5, type, re, ex) {
		be.dh.data.push({
			oF: a5,
			type: type,
			value: re || "",
			re: re || "",
			ex: ex || 0
		})
	}

	function ra(mI) {
		for (var a5 = be.dh.data.length; a5 < mI; a5++) be.dh.data.push(null)
	}
	this.data = [], this.dO = function() {
		rY(0, 1, 0, 5), rY(1, 1, 1), rY(2, 0), rZ(3, 2), rY(4, 1), rZ(5, 2, "Trebuchet MS", 1), rY(6, 0), rY(7, 0, 0), rY(8, 0), rY(9, 1, 1), rY(10, 1), rY(11, 1, 1), rZ(12, 2, navigator.language), ra(100), rZ(100, 2), rZ(101, 2), rZ(102, 2), rZ(
				103, 2), rZ(104, 2), rZ(105, 2), rZ(106, 2), rY(107), rY(108), rY(109), rZ(110, 2), rY(111), rY(112), rY(113), rZ(114, 2), rY(115), rZ(116, 2), rY(117, 1), rZ(118, 2, "", 2), rY(119, 1, 0, 1), rZ(120, 2), rY(121, 1, ~~(262144 *
				Math.random())), rZ(122, 2, "Player " + Math.floor(1e3 * Math.random())), rY(123), rZ(124), rY(125, 1), rZ(126, 2), rY(127, 0, 1), rY(128), rY(129), rY(130), rY(131), rY(132), rZ(133, 2), rY(134, 0, 5), rZ(135, 2), rZ(136, 2), rY(
				137), rY(138), rY(139), rY(140), rY(141), rY(142), rY(143), rY(144), rZ(145, 2), rY(146), rY(147), rZ(148, 2), rY(149), rY(150, 0, 1), rZ(151, 2), rY(152, 0, 5), rY(153, 1), rY(154, 1), rZ(155, 2), rZ(156, 2), ra(180), rY(180, 0),
			rY(181, 0)
	}, this.px = function(oF, value) {
		this.data[oF].value = value
	}, this.di = function(oF, value) {
		this.px(oF, value), be.pW.save(oF, String(value)), be.pW.save(oF, String(this.data[oF].ex), !0)
	}, this.rb = function() {
		for (var a5 = 0; a5 < this.data.length; a5++) this.data[a5] && (be.pW.save(a5, String(this.data[a5].value)), be.pW.save(a5, String(this.data[a5].ex), !0))
	}, this.rc = function(oF) {
		return Number(this.data[oF].value)
	}, this.rd = function(oF) {
		return String(this.data[oF].value)
	}
}

function rT() {
	this.rf = function(oF, ex) {
		return Number(this.rg(oF, ex))
	}, this.rg = function(oF, ex) {
		var ew = null;
		return 0 === q.id ? q.rh && (ew = q.rh.getItem((ex ? "v" : "d") + oF)) : 1 === q.id ? ew = q.ri.loadString((ex ? 1e3 : 2e3) + oF) : 2 === q.id && (ew = q.rj[(ex ? "v" : "d") + oF]), ew && 0 !== ew.length ? ew : null
	}, this.rk = function(eT, rl) {
		var fC = [],
			rm = rl ? "e" : "l";
		if (0 === q.id) {
			if (q.rh)
				for (a5 = 0; a5 < eT; a5++) fC.push(q.rh.getItem(rm + a5))
		} else if (1 === q.id)
			for (var rn = rl ? 5e3 : 3e3, a5 = 0; a5 < eT; a5++) fC.push(q.ri.loadString(rn + a5));
		else if (2 === q.id)
			for (a5 = 0; a5 < eT; a5++) fC.push(q.rj[rm + a5]);
		return fC
	}, this.save = function(oF, value, ex) {
		var ro = (ex ? "v" : "d") + oF;
		0 === q.id ? q.rh && be.dh.data[140].value && q.rh.setItem(ro, value) : 1 === q.id ? q.ri.saveString((ex ? 1e3 : 2e3) + oF, value) : 2 === q.id && (q.rj[ro] = value, q.rp.postMessage(ro + " " + value))
	}, this.rq = function(fC, rl) {
		var eT = fC.length,
			rm = rl ? "e" : "l";
		if (0 === q.id) {
			if (q.rh && be.dh.data[140].value)
				for (a5 = 0; a5 < eT; a5++) q.rh.setItem(rm + a5, fC[a5])
		} else if (1 === q.id)
			for (var rn = rl ? 5e3 : 3e3, a5 = 0; a5 < eT; a5++) q.ri.saveString(rn + a5, fC[a5]);
		else if (2 === q.id)
			for (a5 = 0; a5 < eT; a5++) q.rj[rm + a5] = fC[a5], q.rp.postMessage(rm + a5 + " " + fC[a5])
	}
}

function rX() {
	this.dO = function() {
		! function() {
			var data = be.dh.data;
			0 === data[2].ex && (at.j6 > at.z || 0 !== q.id) && (data[2].value = data[2].re = 1);
			0 === data[100].ex && (data[100].value = data[100].re = (0 === q.id ? "Player " : 1 === q.id ? "Android User " : "iOS User ") + Math.floor(1e3 * Math.random()))
		}();
		var a5, ew, data = be.dh.data,
			eT = data.length;
		for (a5 = 0; a5 < eT; a5++) data[a5] && data[a5].ex === be.pW.rf(a5, !0) && (ew = be.pW.rg(a5), data[a5].value = null === ew ? data[a5].re : 2 === data[a5].type ? ew : Number(ew));
		be.dh.data[10].value = be.dh.data[10].re
	}
}

function rW() {
	function rw(fC) {
		if (0 === fC.length) be.pw.px(116, "");
		else {
			for (var rz = fC[0], a5 = 1; a5 < fC.length; a5++) rz += ";" + fC[a5];
			be.pw.px(116, rz)
		}
	}
	this.rt = function() {
		be.dh.data[110].value.length && (be.dh.data[106].value = be.dh.data[110], be.pw.px(110, ""), this.ru())
	}, this.ru = function() {
		var fC = be.dh.data[116].value.split(";");
		for (fC.length % 2 == 1 && fC.pop(), fC.unshift(be.dh.data[106].value), fC.unshift(be.dh.data[105].value), a5 = 2; a5 < fC.length; a5 += 2)
			if (fC[a5] === fC[0]) {
				fC.splice(a5, 2);
				break
			} for (var rv = [], a5 = 0; a5 < fC.length; a5 += 2) rv.push(fC[a5]);
		rw(fC), be.dh.data[117].value = 0, be.dh.data[117].qu = rv
	}, this.rx = function(oF) {
		be.dh.data[117].qu.splice(oF, 1), be.dh.data[117].value = Math.min(oF, be.dh.data[117].qu.length - 1);
		var fC = be.dh.data[116].value.split(";");
		fC.splice(2 * oF, 2), rw(fC)
	}, this.ry = function(oF) {
		var fC = be.dh.data[116].value.split(";");
		return {
			qO: fC[2 * oF],
			password: fC[2 * oF + 1]
		}
	}, this.s0 = function() {
		var ew = bG.on(be.dh.data[121].value, -1, 262143);
		return ew = -1 === ew ? ~~(262144 * Math.random()) : ew
	}
}

function rV() {
	this.px = function(oF, value) {
		be.dh.data[oF].value !== value && (be.dh.di(oF, value), 0 === oF ? (m.s1(), b3.dO(), m.n(2)) : 1 === oF ? at.dZ(1) : 2 === oF ? at.dZ(0) : 5 === oF && (b6.pF.s2(), at.dZ(0)))
	}, this.s3 = function() {
		for (var data = be.dh.data, a5 = 0; a5 < 100; a5++) data[a5] && be.dh.di(a5, data[a5].re);
		b6.pF.s2(), at.dZ(1), b3.dO()
	}, this.s4 = function() {
		for (var data = be.dh.data, a5 = 0; a5 < data.length; a5++) data[a5] && be.dh.px(a5, data[a5].re)
	}, this.s5 = function() {
		for (var en = be.dh, a5 = 128; a5 < 135; a5++) en.di(a5, en.data[a5].re)
	}, this.s6 = function(data) {
		be.pw.px(109, data.qP), be.pw.px(107, data.s7), be.pw.px(108, data.s8), be.pw.px(112, data.s9), be.pw.px(111, data.sA), be.pw.px(113, data.sB), be.pw.px(122, data.username), be.pw.px(135, data.sC), be.pw.px(136, data.sD), be.pw.px(137,
			data.sE), be.pw.px(138, data.sF), be.pw.px(139, data.sG), be.pw.px(141, data.sH), be.pw.px(142, data.sI), be.pw.px(143, data.sJ), be.pw.px(144, data.sK)
	}
}

function bt() {
	this.qT = new sL, this.sM = new sN, this.dO = function() {
		this.qT.dO()
	}
}

function sN() {
	this.sO = function(size) {
		for (var sP = bC, fC = [], a5 = 0; a5 < size; a5++) fC.push(String.fromCharCode(sP.oG(16)));
		return fC.join("")
	}, this.sQ = function(ow) {
		return 20 < (ow = ow.trim()).length ? ow.substring(0, 20) : ow
	}
}

function sL() {
	var sR = new Uint8Array(78);
	this.dO = function() {
		var a5;
		for (sR[50] = 37, a5 = 0; a5 < 10; a5++) sR[a5 + 3] = a5 + 1;
		for (a5 = 0; a5 < 26; a5++) sR[a5 + 20] = a5 + 11, sR[a5 + 52] = a5 + 38
	}, this.sS = function(ow) {
		return ow.trim().replace(new RegExp("[^a-zA-Z0-9_\\-]", "g"), "-")
	}, this.sT = function(ow, size) {
		if ((ow = this.sS(ow)).length > size) return ow.substring(0, size);
		for (; ow.length < size;) ow = "-" + ow;
		return ow
	}, this.sU = function(ow) {
		for (var sV = sR, eT = ow.length, fC = new Uint8Array(eT), a5 = 0; a5 < eT; a5++) fC[a5] = sV[ow.charCodeAt(a5) - 45];
		return fC
	}, this.sW = function(sX) {
		b8.a1(6 * sX.length), this.sY(sX), bC.dO(b8.a6)
	}, this.sY = function(sX) {
		for (var eT = sX.length, z = b8, a5 = 0; a5 < eT; a5++) z.a2(6, sX[a5])
	}, this.sZ = function(ow) {
		this.sY(this.sU(ow))
	}, this.sa = function(ow, size) {
		this.sY(this.sU(this.sT(ow, size)))
	}, this.sb = function(ow, size) {
		for (var fC = this.sU(this.sT(ow, size)), ew = 0, mB = 1, a5 = fC.length - 1; 0 <= a5; a5--) ew += mB * fC[a5], mB *= 64;
		return ew
	}
}

function sc() {
	var z, j6, sd;

	function t3(gv, eW, t1, si, sw) {
		eW = t2(gv, eW + 1 + 2 * si & 3);
		! function(gv, t4) {
			return 1 < Math.abs(gv % z - t4 % z) || 1 < Math.abs(t7(gv) - t7(t4))
		}(gv, eW) && 0 === sw[eW << 2] && (sw[eW << 2] = t1)
	}

	function t7(g3) {
		return Math.floor((g3 + .5) / z) % j6
	}

	function t2(g3, eW) {
		return g3 + sd[eW]
	}
	this.se = function(ow) {
		var a5, sf, eT, sg, sP = bC;
		for (bB.qT.sW(bB.qT.sU(ow)), bN.sj.sk[bN.e8].z = bN.ee = z = sP.oG(12), bN.sj.sk[bN.e8].j6 = bN.ef = j6 = sP.oG(12), sd = [-z, -1, z, 1], bN.st = document.createElement("canvas"), bN.st.width = bN.ee, bN.st.height = bN.ef, bN.sp = bN.st
			.getContext("2d", {
				alpha: !1
			}), bN.sq = bN.sp.getImageData(0, 0, bN.ee, bN.ef), bN.su = bN.sq.data, b6.pP.sv(bN.su), eT = sP.oG(12), sf = sP.oG(5), sg = sm(z * j6 - 1), a5 = 0; a5 < eT; a5++) ! function(kQ, g3, sh, si) {
			var a5, eW, sP = bC,
				sw = bN.su,
				sx = g3,
				sy = g3,
				sz = 0,
				t0 = 1 + sh,
				t1 = 2 - sh;
			for (sw[g3 << 2] = t0, a5 = 0; a5 < kQ; a5++) eW = sP.oG(2), g3 = t2(g3, eW), sw[g3 << 2] === t0 ? sz % 2 == 1 && t3(sy, sz + 2 * si + 3, t1, si, sw) : sw[g3 << 2] = t0, t3(g3, eW, t1, si, sw), t3(sy, eW, t1, si, sw), sy = g3,
				sz = eW;
			t2(g3, 0) === sx ? (t3(g3, 0, t1, si, sw), t3(sx, 0, t1, si, sw)) : t2(g3, 1) === sx && (t3(g3, 0, t1, si, sw), t3(sx, 2, t1, si, sw));
			0 === kQ && (t3(sx, 0, t1, si, sw), t3(sx, 2, t1, si, sw))
		}(sP.oG(sf), sP.oG(sg), 1 === sP.oG(1), 1 === sP.oG(1));
		var ea, ec, k2, t8, t9, tA, sw = bN.su,
			tB = !0,
			tC = bN.sj.sk[bN.e8].tC,
			tD = bN.sj.sk[bN.e8].tD;
		for (ec = 0; ec < j6; ec++)
			for (t8 = !0, t9 = tB, ea = tA = 0; ea < z; ea++) k2 = 4 * ec * z + 4 * ea, tA <= ea && 0 < sw[k2] && (t9 = 2 === sw[k2], t8) && (t8 = !1, t9 !== tB) ? (tB = t9, tA = ea + 1, ea = -1) : (t9 ? (sw[k2] = tD[0], sw[1 + k2] = tD[1], sw[
				2 + k2] = tD[2]) : (sw[k2] = tC[0], sw[1 + k2] = tC[1], sw[2 + k2] = tC[2]), sw[3 + k2] = 255);
		bN.sp.putImageData(bN.sq, 0, 0), bN.sr = !0, bN.ss.dO(), ba.dW = !0
	}
}

function by() {
	var tE, tF, tG, tH, tI, tJ, tK, tL, tM, tN;

	function tQ() {
		var tT = a7.tT;
		for (tM = tT; tM < a7.eQ; tM++) tO();
		for (tM = a7.gr ? a7.jc : 0; tM < tT; tM++) {
			if (!tU()) {
				for (var en = a7.tY = tM; en < tT; en++) tM = en, tO();
				return
			}
			tX(tJ + tE * tI + bG.ev(tI, 2), tK + tF * tI + bG.ev(tI, 2))
		}
	}

	function u1(player) {
		for (var i8 = aa.i8, iA = aa.iA, i9 = aa.i9, iB = aa.iB, ec = iA[player]; ec <= iB[player]; ec++)
			for (var ea = i8[player]; ea <= i9[player]; ea++) {
				var e6 = aW.u2(ea, ec);
				aW.g5(e6) && (aW.io(e6) ? aW.g0(e6, player) : aW.u3(e6, player))
			}
	}

	function u0(fC, qi, qj) {
		var e1 = fC[qi];
		fC[qi] = fC[qj], fC[qj] = e1
	}

	function tU() {
		return function() {
			var a5;
			for (a5 = 0; a5 < 8; a5++)
				if (tE = bG.ev(tG * au.random(), au.value(100)), tF = bG.ev(tH * au.random(), au.value(100)), u9()) return 1;
			return
		}() || function() {
			var hf, hi, em, tW, en, tV;
			for (hf = bG.ev(tG * au.random(), au.value(100)), hi = bG.ev(tH * au.random(), au.value(100)), em = 40; 1 <= em; em--)
				for (tW = tH - em; 0 <= tW; tW -= 40)
					for (tF = (tW + hi) % tH, en = 40; 1 <= en; en--)
						for (tV = tG - en; 0 <= tV; tV -= 40)
							if (tE = (tV + hf) % tG, u9()) return 1;
			return
		}()
	}

	function u9() {
		for (var g3, uB, gap = bG.ev(tI - tL, 2), uC = tK + tF * tI + gap, uD = tJ + tE * tI + gap, uA = uC + tL - 1; uC <= uA; uA--)
			for (uB = uD + tL - 1; uD <= uB; uB--)
				if (g3 = aW.u2(uB, uA), !aW.eO(g3) || aW.io(g3)) return;
		return 1
	}

	function tX(tV, tW) {
		tO(), uE(tV - 2, tW - 2)
	}

	function tO() {
		aa.lX[tM] = 0, aa.gJ[tM] = aa.ty[tM] = 0, aa.fx[tM] = [], aa.gB[tM] = [], aa.gC[tM] = [], aa.et[tM] = [], aa.i8[tM] = aa.iA[tM] = aa.i9[tM] = aa.iB[tM] = 0
	}

	function uE(tV, tW) {
		var g3, a5, uF, uG;
		for (aa.lX[tM] = 1, aa.i8[tM] = tV + 10, aa.iA[tM] = tW + 10, aa.iB[tM] = aa.i9[tM] = 0, uF = tV; uF < tV + 4; uF++)
			for (uG = tW; uG < tW + 4; uG++)(tV < uF && uF < tV + 3 || tW < uG && uG < tW + 3) && (g3 = aW.u2(uF, uG), aW.eO(g3)) && (aa.i8[tM] = Math.min(uF, aa.i8[tM]), aa.i9[tM] = Math.max(uF, aa.i9[tM]), aa.iA[tM] = Math.min(uG, aa.iA[tM]), aa
				.iB[tM] = Math.max(uG, aa.iB[tM]), tN[aa.gJ[tM]] = g3, aa.gJ[tM]++, aW.u3(g3, tM));
		for (aa.ty[tM] = aa.gJ[tM], a5 = aa.gJ[tM] - 1; 0 <= a5; a5--) aW.uH(tN[a5], tM) ? (aW.g0(tN[a5], tM), aa.gB[tM].push(tN[a5])) : aW.uI(tN[a5]) ? (aW.g0(tN[a5], tM), aa.gC[tM].push(tN[a5])) : aW.uJ(tN[a5]) && (aW.g0(tN[a5], tM), aa.et[tM]
			.push(tN[a5]))
	}

	function u8(tV, tW) {
		for (var g3, uB, uA = tW; tW - 6 < uA; uA--)
			for (uB = tV; tV - 6 < uB; uB--)
				if (g3 = aW.u2(uB, uA), aW.io(g3)) return;
		return 1
	}
	this.dO = function() {
		if (tN = new Array(12), tL = 6, tI = 10, tG = bG.ev(bN.ee, tI), tH = bG.ev(bN.ef, tI), tJ = bG.ev(bN.ee - tI * tG, 2), tK = bG.ev(bN.ef - tI * tH, 2), a7.gr)
			for (var a5 = 0; a5 < a7.jc; a5++) tM = a5, tO(), aa.lX[tM] = 1;
		(0 === a7.data.tP ? tQ : 1 === a7.data.tP ? (tQ(), function() {
			var tZ = a7.ta;
			a7.tb || tZ++;
			if (!(tZ < 3)) {
				for (var data = a7.data, it = (a7.gr ? a7.jc : 0) + data.tc[0], mI = a7.tY, td = new Uint32Array(tZ), te = new Uint32Array(tZ), tf = new Uint16Array(tZ), tg = new Uint16Array(tZ), eR = bb.eR, i8 = aa.i8, iA = aa.iA, i9 =
						aa.i9, iB = aa.iB, f9 = bJ.f9, fA = bJ.fA, a5 = it; a5 < mI; a5++) f9[a5] = i8[a5] + i9[a5] >> 1, fA[a5] = iA[a5] + iB[a5] >> 1;
				for (a5 = it; a5 < mI; a5++) {
					var id = eR[a5];
					td[id] += f9[a5], te[id] += fA[a5]
				}
				var k5 = bb.k5;
				for (a5 = 1; a5 < tZ; a5++) {
					var fy = Math.max(data.tc[k5[a5]], 1);
					tf[a5] = bG.ev(td[a5], fy), tg[a5] = bG.ev(te[a5], fy)
				}
				var th = bb.th,
					ti = bb.ti,
					tj = bb.tj,
					f8 = bJ.f8;
				for (a5 = 0; a5 < 512; a5++) f8[a5] = a5;
				for (var hH = 0; hH < 2 + (4 <= tZ); hH++)
					for (a5 = it; a5 < mI; a5++) {
						for (var gv = a5, tk = f8[gv], tl = 1, ej = bG.tm(f9[tk] - tf[1], fA[tk] - tg[1]), em = 2; em < tZ; em++) {
							var tn = bG.tm(f9[tk] - tf[em], fA[tk] - tg[em]);
							tn < ej && (ej = tn, tl = em)
						}
						var to = eR[gv];
						if (tl !== to) {
							if (2 === hH && 4 <= tZ) {
								var tp = Math.max((tl + 1) % tZ, 1),
									tq = bG.tm(f9[tk] - tf[tp], fA[tk] - tg[tp]);
								for (em = 1; em < tZ; em++) tn = bG.tm(f9[tk] - tf[em], fA[tk] - tg[em]), ej < tn && tn < tq && (tq = tn, tp = em);
								tp !== to && bG.tm(tf[to] - tf[tp], tg[to] - tg[tp]) < bG.tm(tf[to] - tf[tl], tg[to] - tg[tl]) && (tl = tp)
							}
							var tr = k5[tl],
								ts = ti[tr] + (a7.gr ? 0 : tj[tr]),
								t4 = th[ts],
								tt = f8[t4],
								tu = ti[tr + 1];
							ej = bG.tm(f9[tt] - tf[to], fA[tt] - tg[to]);
							for (var eo = ts + 1; eo < tu; eo++) {
								var tv = th[eo],
									tw = f8[tv];
								(tn = bG.tm(f9[tw] - tf[to], fA[tw] - tg[to])) < ej && (ej = tn, t4 = tv)
							}
							t4 < it || mI <= t4 || (tt = f8[t4], td[to] += f9[tt] - f9[tk], te[to] += fA[tt] - fA[tk], td[tl] += f9[tk] - f9[tt], te[tl] += fA[tk] - fA[tt], fy = data.tc[k5[to]], tf[to] = bG.ev(td[to], fy), tg[to] = bG.ev(
								te[to], fy), fy = data.tc[tr], tf[tl] = bG.ev(td[tl], fy), tg[tl] = bG.ev(te[tl], fy), f8[gv] = tt, f8[t4] = tk)
						}
					}! function() {
						for (var f8 = bJ.f8, i8 = aa.i8, iA = aa.iA, i9 = aa.i9, iB = aa.iB, gJ = aa.gJ, ty = aa.ty, gB = aa.gB, gC = aa.gC, et = aa.et, a5 = 0; a5 < 512; a5++) {
							var tz = f8[a5];
							if (tz !== a5) {
								u0(i8, a5, tz), u0(iA, a5, tz), u0(i9, a5, tz), u0(iB, a5, tz), u0(gJ, a5, tz), u0(ty, a5, tz), u0(gB, a5, tz), u0(gC, a5, tz), u0(et, a5, tz), u1(a5), u1(tz), f8[a5] = a5;
								for (var j6 = tz, g4 = f8[j6]; g4 !== a5;) g4 = f8[j6 = g4];
								f8[j6] = tz
							}
						}
					}()
			}
		}) : function() {
			var tT = a7.tT;
			for (tM = tT; tM < a7.eQ; tM++) tO();
			for (tM = a7.gr ? a7.jc : 0; tM < tT; tM++)
				if (! function() {
						var u7 = a7.data.u7,
							tV = u7[2 * tM] + 1,
							u7 = u7[2 * tM + 1] + 1;
						if (3 < tV && tV < bN.ee - 5 && 3 < u7 && u7 < bN.ef - 5 && aW.eO(aW.u2(tV, u7)) && u8(tV + 3, u7 + 3)) return tX(tV + 1, u7 + 1), 1;
						return
					}()) {
					if (!tU()) {
						for (var en = a7.tY = tM; en < tT; en++) tM = en, tO();
						return
					}
					var tV = tJ + tE * tI + bG.ev(tI, 2),
						tW = tK + tF * tI + bG.ev(tI, 2);
					tX(tV, tW)
				}
		})(), bY.lT[7] = aa.gJ[a7.eD]
	}, this.uK = function(ik, uL, uM) {
		var a5, tV, tW, g3, tE, tF;
		for (tM = ik, a5 = 0; a5 < 20; a5++)
			for (tV = uL + a5; uL - a5 <= tV; tV--)
				for (tW = uM + a5; uM - a5 <= tW; tW--)
					if ((tV === uL + a5 || tV === uL - a5 || tW === uM + a5 || tW === uM - a5) && 3 < tV && tV < bN.ee - 5 && 3 < tW && tW < bN.ef - 5 && aW.eO(aW.u2(tV, tW)) && u8(tV + 3, tW + 3)) {
						if (0 < aa.gJ[tM]) {
							for (tF = tE = g3 = void 0, tE = aa.i9[tM]; tE >= aa.i8[tM]; tE--)
								for (tF = aa.iB[tM]; tF >= aa.iA[tM]; tF--) g3 = 4 * (tF * bN.ee + tE), aW.uO(tM, g3) && (aW.uP(g3), aa.gJ[tM]--);
							tO()
						}
						return uE(tV - 1, tW - 1), !0
					} return !1
	}, this.uQ = function(ik) {
		tM = ik, tU() ? tX(tJ + tE * tI + bG.ev(tI, 2), tK + tF * tI + bG.ev(tI, 2)) : tO()
	}
}

function uR() {
	al.uS(), rF.setTransform(hv, 0, 0, hv, 0, 0), rF.imageSmoothingEnabled = hv < 3, rF.drawImage(bN.st, aM.uT(), aM.uU()), bK.uV.rE(), rF.drawImage(uW, aM.uT(), aM.uU()), al.rE(), bI.rE(), aZ.rE(), (a7.m2 ? (bc.rE(), b7) : (aH.rE(), aP.rE(), aL
	.rE(), b7.rE(), aq.rE(), aQ.rE(), aM.rE(), aK.rE(), bc.rE(), aO.rE(), aJ.rE(), aG.rE(), aF.rE(), aR.rE(), bZ.rE(), an)).rE(), m.rE()
}

function uX(uY, z, j6) {
	uY.clearRect(0, 0, z, j6), uY.fillStyle = t.mX, uY.fillRect(0, 0, z, j6)
}

function uZ(uY, z, j6, ua) {
	uY.fillStyle = t.ma, uY.fillRect(0, 0, z, ua), uY.fillRect(0, 0, ua, j6), uY.fillRect(z - ua, 0, ua, j6), uY.fillRect(0, j6 - ua, z, ua)
}

function ub(uY, ea, ec, h8, ua, g3, uc) {
	uY.fillStyle = t.ma;
	var g3 = Math.floor(h8 * g3),
		qZ = (g3 += (g3 - ua) % 2, Math.floor((g3 - ua) / 2)),
		h8 = Math.floor((h8 - g3) / 2);
	uY.fillRect(ea + h8, ec + h8 + qZ, g3, ua), uc && uY.fillRect(ea + h8 + qZ, ec + h8, ua, g3)
}

function ue() {
	this.dO = function() {
		8 === a7.jw && aH.uf()
	}, this.ug = function(uh) {
		var ui = a7.data.ui,
			hT = (ui[uh] - ui[1 - uh]) / 10,
			hT = 8 / (1 + Math.pow(2, hT / 32)),
			hT = Math.floor(10 * hT + .5),
			uk = this.ul(ui[uh] + hT + 1),
			ui = this.ul(ui[1 - uh] - hT);
		0 === uh ? aH.un(uk, ui, ["rgba(10,140,10,0.75)", "rgba(140,10,10,0.75)"]) : aH.un(ui, uk, ["rgba(140,10,10,0.75)", "rgba(10,140,10,0.75)"])
	}, this.ul = function(ui) {
		return 16e3 === (ui = bG.on(ui, 0, 16e3)) ? "Unknown" : (ui / 10).toFixed(1)
	}
}

function cT() {
	this.uo = new up, this.sw = new uq
}

function uq() {
	this.ur = !1;
	this.uv = [], this.uw = 100;
	var lz, m0, gap, h8, us, uu, ux = 0,
		uy = new Array(9),
		uz = [],
		v0 = [],
		v1 = 0,
		v2 = 0,
		v3 = 0,
		v4 = 0;

	function vF() {
		uy.sort(function(em, en) {
			return en.jk - em.jk
		});
		for (var ow = "" + uy[0].np, a5 = 1; a5 < 9; a5++) ow += "," + uy[a5].np;
		for (a5 = 0; a5 < 9; a5++) ow += "," + uy[a5].jk;
		be.dh.di(120, ow)
	}
	this.dO = function() {
		for (var qf = [0, 1, 2, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 6], a5 = 0; a5 < qf.length; a5++) {
			var color = 6 === qf[a5] ? t.mw : t.mY;
			this.uv.push(b6.hE.v5(aV.get(3), qf[a5], color))
		}
		for (a5 = 0; a5 < ad.uo.v6; a5++) v0.push(ad.uo.v7 - ad.uo.v6 + a5);
		for (a5 = 0; a5 < ad.uo.v8; a5++) v0.push(ad.uo.v9 + a5);
		var vA = ad.uo.vB(bF.vA);
		for (a5 = 0; a5 < vA.length; a5++) v0.push(vA[a5]);
		! function() {
			var a5, fC = be.dh.data[120].value.split(",");
			if (18 !== fC.length)
				for (a5 = 0; a5 < 9; a5++) uy[a5] = {
					np: 1015 + a5,
					jk: 0
				};
			else
				for (a5 = 0; a5 < 9; a5++) {
					var ew = parseInt(fC[a5]),
						eo = (ew = 0 <= ew && ew < ad.uo.v7 ? ew : 0, parseInt(fC[a5 + 9]));
					eo = 0 <= eo && eo < 1e3 ? eo : 0, uy[a5] = {
						np: ew,
						jk: eo
					}
				}
		}()
	}, this.show = function(kl, km, vG) {
		var a5;
		if (v1 = kl, v2 = km, ux = vG || 0, this.ur = !0, uz = [], 0 === ux)
			for (a5 = 0; a5 < 9; a5++) uz.push(uy[a5].np);
		else {
			var en = 49 * ux,
				vG = en - 49;
			for (vG >= v0.length && (ux = 1, vG = 0, en = 49), a5 = vG = (en = Math.min(en, v0.length)) - 49; a5 < en; a5++) uz.push(v0[a5])
		}
		uz.push(1024);
		vG = uz.length, h8 = Math.floor((q.r.vH() ? .075 : .0468) * at.pH), gap = Math.floor(h8 / 3), (v3 = 10 * (us = h8 + gap)) > at.z && (v3 = at.z, gap = (us = v3 / 10) - (h8 = 3 * us / 4)), uu = bG.ev(vG, 10) + !!(vG % 10), (v4 = uu * us) >
			at.j6 && (v4 = at.j6, gap = (us = v4 / uu) - (h8 = 3 * us / 4)), vG = .5 * gap;
		lz = Math.min(Math.max(kl - .5 * v3 + vG, vG), at.z - v3 + vG), m0 = Math.min(Math.max(km - .5 * v4 + vG, vG), at.j6 - v4 + vG)
	}, this.gj = function(kl, km, player) {
		if (!this.ur) return !1;
		if (this.vJ(kl, km)) {
			kl = bG.on(bG.ev(kl - lz + .5 * gap, us), 0, 9);
			if ((kl += 10 * bG.on(bG.ev(km - m0 + .5 * gap, us), 0, 9)) >= uz.length) return aF.ql(), !0;
			km = uz[kl];
			if (1024 === km) return this.show(v1, v2, ux + 1), !0;
			! function(np) {
				for (var a5 = 0; a5 < 9; a5++) uy[a5].jk = Math.floor(.99 * uy[a5].jk);
				for (a5 = 0; a5 < 9; a5++)
					if (np === uy[a5].np) return uy[a5].jk = Math.min(uy[a5].jk + 30, 999), vF();
				uy.splice(5, 0, {
					np: np,
					jk: Math.max(uy[4].jk, 30)
				}), uy.pop(), vF()
			}(km), player === a7.eD ? b4.gs.no(km) : b4.fr.o4(km, player)
		}
		return aF.ql(), !0
	}, this.vJ = function(kl, km) {
		return !(kl < lz - .5 * gap || km < m0 - .5 * gap || lz + v3 - .5 * gap <= kl || m0 + v4 - .5 * gap <= km)
	}, this.rE = function() {
		rF.fillStyle = t.mX, rF.fillRect(lz - .5 * gap, m0 - .5 * gap, v3, v4);
		for (var k2 = .5 * bX.vK, eT = (rF.lineWidth = bX.vK, rF.strokeStyle = rF.fillStyle = t.ma, rF.strokeRect(lz - .5 * gap + k2, m0 - .5 * gap + k2, v3 - 2 * k2, v4 - 2 * k2), rF.imageSmoothingEnabled = !0, uz.length), a5 = 0; a5 < eT; a5++)
			this.vL(uz[a5], rF, lz + a5 % 10 * us, m0 + bG.ev(a5, 10) * us, h8);
		rF.imageSmoothingEnabled = !1
	}, this.vL = function(np, hF, ea, ec, h8) {
		var e6;
		np >= 1024 - ad.uo.v6 ? (e6 = h8 / this.uw, hF.setTransform(e6, 0, 0, e6, ea, ec), hF.drawImage(this.uv[np - 1024 + ad.uo.v6], 0, 0), hF.setTransform(1, 0, 0, 1, 0, 0)) : (b6.pF.textAlign(hF, 1), b6.pF.textBaseline(hF, 1), hF.font = b6.pF
			.qW(0, .89 * h8), hF.fillText(ad.uo.vM(np), ea + .5 * h8, ec + (.35 - b6.pF.vN + .56) * h8))
	}
}

function up() {
	this.emojis = ["🥰", "😎", "😘", "😜", "🤗", "🥳", "😇", "😊", "🥱", "🙄", "🤔", "🥺", "😡", "😭", "😱", "😞", "💀", "👹", "👋", "🙏", "👏", "💪", "🙋‍♂️", "🤦‍♂️", "⬆️", "➡️", "⬇️", "⬅️", "👀", "❤️", "💔", "💥", "🔥", "🪦", "🥇", "🥈", "🥉",
		"🎖️", "🏅", "👑", "🎉", "💯", "✝️", "☪️", "🕉️", "☸️", "✡️", "☦️", "⚛️"
	], this.v6 = 13, this.v8 = this.emojis.length, this.v9 = 676, this.v7 = 1024, this.vO = this.emojis.indexOf("💀"), this.vP = this.vO + 1, this.vQ = this.emojis.indexOf("🥇"), this.vR = this.emojis.indexOf("😊"), this.vM = function(ew) {
		return ew < this.v9 ? String.fromCharCode(55356, 56806 + bG.ev(ew, 26), 55356, 56806 + ew % 26) : this.emojis[Math.min(ew - this.v9, this.v8 - 1)]
	}, this.vB = function(ow) {
		for (var eT = ow.length - 2, fC = [], a5 = 0; a5 < eT; a5++) {
			var hO = ow.charCodeAt(a5) - 56806,
				hP = ow.charCodeAt(a5 + 2) - 56806;
			0 <= hO && hO < 26 && 0 <= hP && hP < 26 && (fC.push(26 * hO + hP), a5 += 3)
		}
		return fC
	}, this.vS = function(ew) {
		return ew < this.v9
	}, this.vT = function(ew) {
		return ew >= 1024 - this.v6
	}, this.vU = function(ew) {
		return ew >= this.v9 && ew < this.v9 + this.vP
	}
}

function bs() {
	this.qT = new vV, this.sM = new vW, this.dO = function() {
		this.qT.dO()
	}
}

function vW() {
	this.sZ = function(ow) {
		for (var eT = ow.length, z = b8, a5 = 0; a5 < eT; a5++) z.a2(16, ow.charCodeAt(a5))
	}
}

function vV() {
	var vX = new Uint8Array(64);
	this.dO = function() {
		var a5;
		for (vX[0] = 45, vX[37] = 95, a5 = 0; a5 < 10; a5++) vX[a5 + 1] = 48 + a5;
		for (a5 = 0; a5 < 26; a5++) vX[a5 + 11] = 65 + a5, vX[a5 + 38] = 97 + a5
	}, this.qV = function(vY) {
		for (var sP = bC, sX = new Uint8Array(vY), a5 = 0; a5 < vY; a5++) sX[a5] = sP.oG(6);
		return sX
	}, this.qU = function(sX) {
		for (var eT = sX.length, vZ = vX, fC = [], a5 = 0; a5 < eT; a5++) fC.push(String.fromCharCode(vZ[sX[a5]]));
		return fC.join("")
	}
}

function c0() {
	var va, vb, vc;
	va = [32, 65, 191, 913, 931], vb = [64, 127, 688, 930, 1155], vc = new Array(va.length + 1);
	for (var a5 = 0; a5 < vc.length; a5++) {
		vc[a5] = 0;
		for (var em = a5 - 1; 0 <= em; em--) vc[a5] += vb[em] - va[em]
	}

	function vi(eo) {
		for (var a5 = va.length - 1; 0 <= a5; a5--)
			if (eo >= va[a5] && eo < vb[a5]) return a5;
		return -1
	}
	this.sQ = function(ow) {
		return 0 !== (ow = ow.trim()).indexOf("Bot ") && 0 !== ow.indexOf("[Bot] ") && function(ow, vf, vg) {
			var eT = (ow = ow.trim()).length;
			if (eT < vf || vg < eT) return !1;
			for (var eo, vh = 0, a5 = 0; a5 < eT; a5++)
				if (eo = ow.charCodeAt(a5), vh += 65 <= eo && eo <= 90 || 1040 <= eo && eo <= 1071 ? 1 : 0, -1 === vi(eo)) return !1;
			if (3 < vh && vh > Math.floor(eT / 2)) return !1;
			return !0
		}(ow, 3, 20)
	}, this.vj = function(ow) {
		for (var eT = (ow = ow.trim()).length, fC = [], a5 = 0; a5 < eT; a5++) {
			var eo, g3 = vi(eo = ow.charCodeAt(a5));
			fC.push(vc[g3] + eo - va[g3])
		}
		return fC
	}, this.se = function(fC) {
		for (var eo, en, ow = "", eT = fC.length, a5 = 0; a5 < eT; a5++)
			for (en = 1; en < vc.length; en++)
				if (fC[a5] < vc[en]) {
					eo = va[en - 1] + fC[a5] - vc[en - 1], ow += String.fromCharCode(eo);
					break
				} return ow
	}, this.vk = function(ow) {
		for (var fC = this.vj(ow), result = "", a5 = 0; a5 < fC.length; a5++) result = (result += fC[a5] < 10 ? "00" : fC[a5] < 100 ? "0" : "") + fC[a5].toString(10);
		return result
	}, this.vl = function(ow) {
		for (var fC = new Array(Math.floor(ow.length / 3)), a5 = 0; a5 < ow.length; a5 += 3) fC[Math.floor(a5 / 3)] = parseInt(ow.substring(a5, a5 + 3));
		return this.se(fC)
	}, this.vm = function(ow) {
		for (var ew, fC = [ow.length], a5 = 0; a5 < ow.length; a5++) fC[a5] = ow.charCodeAt(a5) - 48;
		var result = "";
		for (a5 = 0; a5 < ow.length; a5++) a5 === ow.length - 1 || 51 < 10 * fC[a5] + fC[a5 + 1] ? result += fC[a5].toString() : (ew = 10 * fC[a5] + fC[a5 + 1], result += String.fromCharCode(ew + (ew < 26 ? 65 : 71)), a5++);
		return result
	}, this.vn = function(ow) {
		for (var eo, result = "", a5 = 0; a5 < ow.length; a5++) 48 <= (eo = ow.charCodeAt(a5)) && eo < 58 ? result += String.fromCharCode(eo) : 65 <= eo && eo < 75 ? result += "0" + (eo - 65).toString() : 75 <= eo && eo < 91 ? result += (eo - 65)
			.toString() : 97 <= eo && eo < 123 && (result += (eo - 71).toString());
		return result
	}, this.vo = function(ow) {
		for (var eT = ow.length, fC = [], a5 = 0; a5 < eT; a5++)(eo = ow.charCodeAt(a5)) < 58 ? fC.push(ow[a5]) : (eo -= eo < 91 ? 65 : 71, fC.push(String(bG.ev(eo, 10))), fC.push(String(eo - 10 * bG.ev(eo, 10))));
		var eT = fC.length - 2,
			eo = 0,
			sX = [];
		for (a5 = 0; a5 < eT; a5 += 3) sX[eo++] = parseInt(fC[a5] + fC[a5 + 1] + fC[a5 + 2]);
		return sX
	}, this.vp = function() {
		for (var hH, vq = "", a5 = 0; a5 < 6; a5++) hH = 48 + au.random() % 36, hH += 58 <= hH ? 39 : 0, vq += String.fromCharCode(hH);
		return vq
	}
}

function d0() {
	this.vr = new vs, this.vt = new vu, this.result = new vv, this.gz = new vw, this.vx = new vy, this.vz = new w0, this.w1 = new w2, this.dO = function() {
		this.vx.dO()
	}, this.iR = function() {
		this.vx.iR()
	}
}

function vw() {
	this.w3 = function() {
		for (var eT = af.jd, w4 = af.jf, w5 = [], a5 = 0; a5 < eT; a5++) {
			var g3 = w4[a5];
			aW.w6(g3) && w5.push(g3)
		}
		return w5
	}, this.w7 = function() {
		for (var eT = af.jd, w4 = af.jf, e1 = 0, gJ = aa.gJ, a5 = 0; a5 < eT; a5++) e1 += gJ[w4[a5]];
		return e1
	}
}

function vs() {
	function w9() {
		if (2 === a7.wD) return 1;
		aq.wE(), a7.wD = 2, a7.wF = a7.wG
	}

	function wB() {
		console.log("endGameHelperB"), bM.w1.wH(), aR.show(1 === a7.wI, !1, 2 === a7.wI), bM.result.wH(), bM.vz.iR(), aH.wJ(!0), aH.wK(247), aH.wK(956), aH.wK(957), aP.lJ(!0), aQ.lJ(!0), aq.lJ(), b7.wL(), a7.gf && ba.wM.wN(), ba.dW = !0, bW.wO(), q.r
			.setState(0)
	}
	this.w8 = function() {
		w9() || (a7.wA = 2, wB())
	}, this.wC = function() {
		w9() || (a7.wA = 1, wB())
	}
}

function w0() {
	this.iR = function() {
		var wX;
		2 === a7.wA ? (aH.wP(0, 59), aB.m8(2700)) : a7.jw < 7 ? (wX = bb.k5[bc.ku()], wX = bb.wZ[wX], aK.wa(L(7, [wX]), 2, 1, 12), aH.wb(0, L(8, [wX]), 40, 0, t.ma, t.mX, -1, !1), aB.m8(2700)) : 8 === a7.jw ? (a7.wI ? aH.wP(a7.wU, 2) : aH.wP(1 -
			a7.eD, 3), a7.wV.ug(a7.wU), aH.wW(a7.wU), aB.lt(a7.wU, 2700, !1, 0)) : 9 === a7.jw ? (aH.wc(), aB.m8(2700)) : (aH.wW(a7.wU), aB.lt(a7.wU, 2700, !1, 0))
	}
}

function vv() {
	this.wd = 0, this.w5 = null;
	var wf = this.we = 0;
	this.wg = 0, this.wH = function() {
		var wk, g4, e1;
		bM.vx.wh || (bM.vx.wh = !0, a7.jy) || ((wk = this).w5 = bM.gz.w3(), wk.wd = bd.wl.wm(), a7.jw < 7 && 2 !== a7.wA ? wk.we = bc.wn() : wk.we = bM.gz.w7(), 8 === a7.jw && 1 === a7.wA ? (g4 = 1 - a7.wU, e1 = aa.gJ[g4], aa.gJ[g4] = 0, b4.fr
			.oD(), aa.gJ[g4] = e1) : b4.fr.oD(), wf = .01 * aa.wr[a7.eD] / 50, wk.wg = 0, a7.jw < 7 ? bM.vt.wH(wk.w5) : 7 === a7.jw || 10 === a7.jw ? b6.fr.gi(a7.eD) && (g4 = bM.result.wd * (1 + a7.wu), 2 === a7.wA ? bM.result.wg += g4 *
			aa.gJ[a7.eD] / bM.result.we : kx[0] === a7.eD && (bM.result.wg += g4)) : 8 !== a7.jw || 1 !== a7.wI || 0 === be.dh.data[107].value || 100 <= (e1 = be.dh.data[108].value) || (bM.result.wg += .01 * (100 - e1) * 10), this.wj())
	}, this.wj = function() {
		b6.fr.gi(a7.eD) && (.01 <= wf && aH.wb(0, L(9, [wf.toFixed(2)]), 40, 0, t.mp, t.mX, -1, !1), .01 <= bM.result.wg) && aH.wb(0, L(10, [bM.result.wg.toFixed(2)]), 40, 0, t.mp, t.mX, -1, !1)
	}, this.wv = function() {
		var sx, ww;
		a7.jy || bM.vx.wh || (ww = aa, sx = a7.eD, 0 === ww.wx[sx]) || ww.ia[sx] < 1 || 2 * ww.oa[sx] > 3 * (ww.iZ[sx] + ww.ia[sx]) || (ww = .01 * ww.wr[sx] / 50) < .01 || aH.wb(0, L(9, [ww.toFixed(2)]), 40, 0, t.mp, t.mX, -1, !1)
	}
}

function vy() {
	this.wh = !1, this.dO = function() {
		this.wh = !1
	}, this.iR = function() {
		7 <= a7.jw || this.wh || ba.jZ() % 20 == 11 && b6.fr.kq(90) && (a7.wA = 1, bM.w1.wH(), bM.result.wH())
	}
}

function vu() {
	function x1(wz) {
		for (var hT = (1 + a7.wu) * bM.result.wd / (1e5 * bM.result.we), j = "", a5 = 0; a5 < wz.length; a5++) {
			var x6 = wz[a5].x7 * hT;
			j += "  " + wz[a5].name + ": " + b6.x3.x8(1e5 * x6)
		}
		j.length && (aH.wb(0, L(11), 45, 0, b6.color.mS(225, 240, 255), t.mX, -1, !1), aH.wb(0, j.trim(), 45, 0, b6.color.mS(225, 240, 255), t.mX, -1, !1), a7.gf || aH.wb(700, L(12) + bF.x9, 736, 0, t.ma, t.mu, -1, !1))
	}
	this.wH = function(w5) {
		var wX = bb.k5[bc.ku()],
			w5 = (a7.wI && b6.fr.gi(a7.eD) && (bM.result.wg += (b6.x3.x4(aa.x5[a7.eD]) ? 2 : 1) * bM.result.wd * (1 + a7.wu) * aa.gJ[a7.eD] / bM.result.we), function(w4) {
				var wz = [],
					username = aa.x5,
					eT = w4.length;
				loop: for (var a5 = 0; a5 < eT; a5++) {
					var g3 = w4[a5],
						xA = b6.x3.x4(username[g3]);
					if (xA) {
						for (var em = wz.length - 1; 0 <= em; em--)
							if (wz[em].name === xA) {
								wz[em].x7 += aa.gJ[g3];
								continue loop
							} wz.push({
							name: xA,
							x7: aa.gJ[g3],
							xB: bb.eR[g3]
						})
					}
				}
				return wz.sort(function(em, en) {
					return en.x7 - em.x7
				}), wz
			}(w5));
		w5.length && (2 === a7.wA ? x1(w5) : x1(function(wz, wX) {
			for (var a5 = wz.length - 1; 0 <= a5; a5--) bb.k5[wz[a5].xB] !== wX && wz.splice(a5, 1);
			return wz
		}(w5, wX)))
	}
}

function w2() {
	this.wH = function() {
		if (2 === a7.wA) a7.wI = 2;
		else {
			if (8 === a7.jw) aW.w6(0) ? aW.w6(1) ? a7.wU = +(aa.gJ[1] > aa.gJ[0]) : a7.wU = 0 : a7.wU = 1;
			else {
				if (a7.ic) {
					var kt = bc.xD();
					if (bb.k5[kt]) return void(a7.wI = +(bb.eR[a7.eD] === kt))
				}
				a7.wU = kx[0]
			}
			a7.wI = +(a7.wU === a7.eD)
		}
	}
}

function d5() {
	this.id = 0, this.ex = 0, this.rh = null, this.ri = null, this.rj = null, this.rp = null, this.r = new xE, this.dO = function() {
		var self, ex;
		self = this, "undefined" == typeof Android || "function" != typeof Android.getVersion || (ex = Android.getVersion()) < 12 || (self.ex = ex, self.id = 1, self.ri = Android),
			function(self) {
				var ex;
				"undefined" != typeof mwIOSdataX && window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.iosCommandA && (self.id = 2, self.rj = mwIOSdataX, self.rp = window.webkit.messageHandlers.iosCommandA, ex = self
					.rj.version, self.ex = ex ? Number(ex) : 0)
			}(this),
			function(self) {
				var rh;
				if (0 === self.id) {
					try {
						if (!(rh = window.localStorage)) return;
						rh.setItem("tls7", "1"), rh.removeItem("tls7")
					} catch (error) {
						return
					}
					self.rh = rh
				}
			}(this)
	}
}

function xE() {
	this.xI = function() {
		be.pw.s3(), be.pw.s4(), aw.lB.close(0, 3255), 0 === q.id ? q.rh && q.rh.clear() : 1 === q.id ? q.ri.saveString(199, "") : 2 === q.id && q.rp.postMessage("clear")
	}, this.xJ = function() {
		2 === q.id ? q.rp.postMessage("showConsentForm") : 1 === q.id ? q.ri.setState(7) : bP.dj.showCMPScreen()
	}, this.xK = function() {
		this.setState(14)
	}, this.vH = function() {
		return 1 === be.dh.rc(2)
	}, this.xL = function() {
		be.dh.di(102, "")
	}, this.setState = function(dz) {
		1 === q.id && 5 <= q.ex && q.ri.setState(dz)
	}, this.s = function() {
		var xM;
		1 === q.id && 7 <= q.ex ? q.ri.setState(5) : ((xM = new URL(window.location)).searchParams.set("v", "" + Math.floor(1e3 * Math.random())), window.location.href = xM.toString())
	}, this.dT = function() {
		1 !== q.id || q.ex < 17 || q.ri.saveString(23, document.documentElement.outerHTML)
	}, this.dn = function() {
		0 === q.id ? bP.dj.dO() : 1 === q.id ? q.ri.prepareAd("1688441405") : 2 === q.id && (0 === q.ex ? q.rp.postMessage("prepare ad 4500876070") : q.rp.postMessage("loadAds 4500876070"))
	}, this.e2 = function(e1) {
		return 0 === q.id ? !!bP.dj.dx() : 1 === q.id ? 12 <= q.ex && (q.ri.presentAd(e1), !0) : 2 === q.id && (0 === q.ex ? q.rp.postMessage("show ad " + e1) : q.rp.postMessage("showAd"), !0)
	}, this.dY = function() {
		2 === q.id && q.ex < 23 && m.n(4, 1, new o("App Update Required", "A new iOS app version with bug fixes has been published.<br>Please download the new Territorial.io app version for iOS:<br><a href='" + bF.xN + "' target='_blank'>" + bF
			.xN + "</a>", !0, [new p("⬅️ " + L(13), function() {
				m.n(0)
			}, t.n9)]))
	}
}

function dK() {
	function xQ(e) {
		xZ(e), m.n(4, 5, new o("🚀 New Game Update", "The game has been updated! Please reload the game." +
			"<div style='border: white; border-width: 1px; border-style: solid; margin: 10px; padding: 5px;'><h2>FX Client is not yet compatible with the latest version of the game.</h2><p>Updates should normally be available within a few hours.<br>You can still use FX to play in singleplayer mode.</p></div>",
			!0, [new p("⬅️ " + L(13), function() {
				m.xa()
			}), new p("🔄 Reload", function() {
				q.r.s()
			}, t.u)]))
	}

	function xY(e) {
		xZ(e), m.n(4, 5, new o(L(14), {
			"3249": "No servers found",
			"4705": "Lobby not found",
			"4730": "Kicked from lobby"
		} [e] ?? xS(e), !0))
	}

	function xS(e) {
		return 3249 === e || 1006 === e ? "No internet [" + e + "]" : "Unknown error [" + e + "]"
	}

	function xZ(e) {
		! function(e) {
			var dz = aU.xT();
			0 !== dz && (6 === dz ? aw.lB.xe(e) : 7 === dz ? (ao.xf(), aw.lB.close(aw.lB.xV, 3256)) : 8 === dz && a7.xg(!0))
		}(e), m.lB.xd()
	}
	this.xO = function(xP, e) {
		xP === 1 && __fx.customLobby.isActive() && aU.xT() !== 6 && __fx.customLobby.setActive(false);
		if (8 === m.qQ && 0 === xP)
			if (4211 === e) xQ(e);
			else {
				if (4480 === e) return be.pw.s5(), void m.n(4, 0, new o(L(16), L(17), !0));
				m.n(4, 0, new o(L(14), xS(e), !0))
			}
		else {
			var dz = aU.xT();
			if (6 === dz) {
				if (4211 === e) return void xQ(e);
				if (4214 !== e) return void aT.xU(xP)
			} else {
				if (7 !== dz) return 8 === dz ? void(xP !== aw.lB.xW || a7.jy || 1 !== a7.wD || a7.gf || aH.xX(L(15, [e]))) : void 0;
				if (xP !== aw.lB.xV) return
			}
			xY(e)
		}
	}, this.xb = function(e) {
		8 === aU.xT() ? a7.jy || 1 !== a7.wD || aH.xX(L(15, [e])) : xY(e)
	}, this.l = function() {
		xZ(3268)
	}
}

function cu() {
	var xh, xi, xj = -15e3,
		xk = !1;

	function gj(e) {
		y4() || (xk = !0, y5(e, 1), aw.lB.y6(aw.lB.xW), y7(Math.floor(at.pL * e.clientX), Math.floor(at.pL * e.clientY)))
	}

	function xt(e) {
		xj = ba.e0, y5(e, 1), aw.lB.y6(aw.lB.xW), 0 < e.touches.length && (xh = Math.floor(at.pL * e.touches[0].clientX), xi = Math.floor(at.pL * e.touches[0].clientY), am.xt(e) || y7(xh, xi))
	}

	function y7(ea, ec) {
		m.gj(ea, ec), 0 === a7.wD ? aU.gj(ea, ec) : b7.y8(ea, ec) || bZ.gj(ea, ec) || aR.gj(ea, ec) || aF.y9(ea, ec) || aJ.gj(ea, ec) || 0 <= aG.gj(ea, ec) || bE.yA(ea, ec) || aq.gj(ea, ec) || aF.yB(ea, ec)
	}

	function xp(e) {
		y4() || (xk = !0, y5(e, 1), yC(Math.floor(at.pL * e.clientX), Math.floor(at.pL * e.clientY)))
	}

	function xu(e) {
		xj = ba.e0, y5(e, 1), 0 < e.touches.length && (xh = Math.floor(at.pL * e.touches[0].clientX), xi = Math.floor(at.pL * e.touches[0].clientY), am.xu(e) || yC(xh, xi))
	}

	function yC(ea, ec) {
		m.xp(ea, ec), 0 === a7.wD ? aU.xp(ea, ec) : (bO.gc(ea, ec), bZ.xp(ea, ec) || (aG.xp(ea, ec), aF.ur() ? aF.xp(ea, ec) : aL.gk ? aL.xp(ea) && (ba.dW = !0) : (aP.xp(ea, ec), aM.m4 && aM.xp(ea, ec) && (ba.dW = !0))))
	}

	function xr(e) {
		y4() || (y5(e, 1), yD(), 0 === a7.wD ? (aU.click(-1024, -1024), aN.yE()) : (aP.yF(-1024, -1024), aG.xp(-1024, -1024), aL.yG(), aM.m4 = !1))
	}

	function xq(e) {
		y4() || (y5(e, 1), yH(Math.floor(at.pL * e.clientX), Math.floor(at.pL * e.clientY), 2 === e.button), bE.xn && (bE.xn = !1, e.preventDefault()))
	}

	function click(e) {
		y4() || y5(e, 1)
	}

	function xv(e) {
		xj = ba.e0, y5(e, 1), e && e.touches && 0 < e.touches.length && 0 !== a7.wD ? aM.m4 = !1 : am.yI() || (yH(xh, xi, !1), bE.xn && (bE.xn = !1, e.preventDefault()))
	}

	function xw(e) {
		xj = ba.e0, y5(e, 1), yH(xh, xi, !1), bE.xn && (bE.xn = !1, e.preventDefault())
	}

	function xx(e) {}

	function xy(e) {}

	function xz(e) {
		y4() || y5(e, 0)
	}

	function yH(ea, ec, yJ) {
		yD(), 0 === a7.wD ? aU.click(ea, ec) : (aP.yF(ea, ec), bZ.yF(), aL.yG(), aM.m4 = !1, aF.click(ea, ec, yJ) ? ba.dW = !0 : aG.xq(ea, ec))
	}

	function yD() {
		m.yD()
	}

	function xs(e) {
		var ea, ec, deltaY;
		y4() || (y5(e, 1), aw.lB.y6(aw.lB.xW), ea = Math.floor(at.pL * e.clientX), ec = Math.floor(at.pL * e.clientY), deltaY = e.deltaY, 1 === e.deltaMode && (deltaY *= 16), m.xs(ea, ec, deltaY), 0 === a7.wD ? aU.xs(ea, ec, deltaY) : aP.xs(ea, ec,
			deltaY) || (aL.yK(ea, ec) ? aL.xs(deltaY) && (ba.dW = !0) : aM.xs(ea, ec, deltaY)))
	}

	function y0(e) {
		y5(e, 0)
	}

	function y5(e, id) {
		0 === id && m.ur() || (id = window.innerWidth / document.documentElement.clientWidth) < .999 || 1.001 < id || 0 !== aU.xT() && e.preventDefault()
	}

	function y1(e) {
		if (__fx.keybindHandler(e.key)) return;
		y4() || (e = e.code) && e.length && (bS.eo(e, 18) ? ak.yM(3) : bS.eo(e, 22) ? ak.yM(0) : bS.eo(e, 20) ? ak.yM(1) : bS.eo(e, 24) ? ak.yM(2) : bS.eo(e, 10) ? aL.yN(.9375) : bS.eo(e, 8) ? aL.yN(16 / 15) : bS.eo(e, 6) ? aL.yN(7 / 8) : bS.eo(e,
			4) ? aL.yN(8 / 7) : bS.eo(e, 14) ? 0 !== a7.wD && aM.xs(Math.floor(at.z / 2), Math.floor(at.j6 / 2), -200) : bS.eo(e, 16) ? 0 !== a7.wD && aM.xs(Math.floor(at.z / 2), Math.floor(at.j6 / 2), 200) : bS.eo(e, 0) ? a7.wD && bO.gd(!1) : bS
			.eo(e, 2) && a7.wD && bO.gd(!0))
	}

	function y2(e) {
		var code;
		y4() || ba.e0 < 400 || (code = e.code) && code.length && ("Enter" === code && m.yO(1) || (8 !== aU.xT() && aU.yO(e) ? ba.dW = !0 : "Escape" === code ? bE.ey() : bS.eo(code, 18) ? ak.yP(3) : bS.eo(code, 22) ? ak.yP(0) : bS.eo(code, 20) ? ak
			.yP(1) : bS.eo(code, 24) ? ak.yP(2) : bS.eo(code, 12) ? b7.yQ(!a7.m2) : "Space" === code ? a7.wD && (aG.gg && aG.yR(), a7.gf) && b7.yS(!1) : "Semicolon" === code && 10 < yT++ && console.log(yU)))
	}
	this.xl = 0, this.xm = "", this.xn = !1, this.dO = function() {
		xo.addEventListener("mousedown", gj, {
			passive: !1
		}), xo.addEventListener("mousemove", xp, {
			passive: !1
		}), xo.addEventListener("mouseup", xq, {
			passive: !1
		}), xo.addEventListener("click", click, {
			passive: !1
		}), xo.addEventListener("mouseleave", xr, {
			passive: !1
		}), xo.addEventListener("wheel", xs, {
			passive: !1
		}), xo.addEventListener("touchstart", xt, {
			passive: !1
		}), xo.addEventListener("touchmove", xu, {
			passive: !1
		}), xo.addEventListener("touchend", xv, {
			passive: !1
		}), xo.addEventListener("touchcancel", xw, {
			passive: !1
		}), xo.addEventListener("dragover", xx), xo.addEventListener("drop", xy), xo.addEventListener("dblclick", xz), document.addEventListener("contextmenu", y0), document.addEventListener("keydown", y1), document.addEventListener("keyup",
			y2), document.addEventListener("visibilitychange", y3), window.addEventListener("resize", resize)
	}, this.yA = function(ea, ec) {
		return !!b7.gj(ea, ec) || !!(aP.gj(ea, ec) || aM.gj(ea, ec) || aL.gj(ea, ec) || aH.gj(ea, ec))
	};
	var yT = 0;

	function y3() {
		"hidden" === document.visibilityState ? 1 === a7.wD && (a7.gf ? b7.yV() : !a7.jy || aG.gg || a7.gr || aG.yR()) : ba.dW = !0
	}

	function y4() {
		return xj + 15e3 > ba.e0
	}

	function resize() {
		at.yX()
	}
	this.yW = y4, this.pg = function() {
		return !xk || 0 < xj
	}, this.ey = function() {
		if (!m.ur()) return 8 === aU.xT() ? a7.m2 ? void b7.yQ(!1) : bZ.ur ? void bZ.yR() : void aG.yR() : void(7 === aU.xT() ? ao.yY() : 6 === aU.xT() && aT.yZ());
		m.yO(2)
	}
}

function bo() {
	this.pF = new ya, this.pP = new yb, this.fr = new yc, this.x3 = new yd, this.uY = new ye, this.yf = new yg, this.hE = new yh, this.color = new yi, this.yj = new yk, this.dO = function() {
		this.pF.s2()
	}
}

function yb() {
	this.sv = function(fC) {
		fC.fill(0)
	}, this.yl = function(fC) {
		for (var eT = fC.length, a5 = 0; a5 < eT; a5++) fC[a5] = []
	}, this.ym = function(hO, yn) {
		for (var hP = bJ.f5, a5 = 0; a5 < 3; a5++) hP[a5] = yn * hO[a5];
		return hP
	}, this.yo = function(hO, hP, yp) {
		for (var hT = 0, a5 = 0; a5 < 3; a5++) hT += Math.abs(hO[a5] - hP[a5]);
		return yp <= hT
	}, this.yq = function(hO, yr) {
		for (var a5 = 0; a5 < 3; a5++) hO[a5] = bG.on(hO[a5] + yr, 0, 255);
		return hO
	}, this.ys = function(fC, qi, qj) {
		qj = qj || fC.length - 1;
		for (var yt = 0, a5 = qi = qi || 0; a5 <= qj; a5++) yt += fC[a5];
		return yt
	}, this.yu = function(fC, yv) {
		for (var a5, yw, eT = fC.length, yx = [], em = eT - 1; 0 <= em; em--) {
			for (a5 = yw = 0; a5 < eT; a5++) yv(fC[a5]) < yv(fC[yw]) && (yw = a5);
			eT--, yx.push(fC[yw]), fC[yw] = fC[eT], fC.pop()
		}
		return yx
	}, this.min = function(fC) {
		var a5, ew, eT = fC.length;
		if (0 === eT) return 0;
		for (ew = fC[0], a5 = 1; a5 < eT; a5++) ew = Math.min(ew, fC[a5]);
		return ew
	}, this.max = function(fC) {
		var eT = fC.length;
		if (0 === eT) return 0;
		for (var ew = fC[0], a5 = 1; a5 < eT; a5++) ew = Math.max(ew, fC[a5]);
		return ew
	}, this.yy = function(fC, ew) {
		for (var eT = fC.length, fy = 0, a5 = 0; a5 < eT; a5++) fy += fC[a5] > ew;
		return fy
	}, this.yz = function(z0, z1, min) {
		for (var eT = z1[0], a5 = eT - 1; 0 <= a5; a5--) z0[a5] < min && (z0[a5] = z0[--eT]);
		z1[0] = eT
	}, this.z2 = function(fC, eT, value) {
		for (var a5 = 0; a5 < eT; a5++) fC[a5] -= value
	}, this.z3 = function(fC) {
		for (var eT = fC.length, a5 = 0; a5 < eT; a5++)
			if ("string" != typeof fC[a5]) return !1;
		return !0
	}, this.z4 = function(ow, fC, z5) {
		fC.fill(0);
		for (var qm = ow.split(","), eT = Math.min(qm.length, fC.length), a5 = 0; a5 < eT; a5++) fC[a5] = Math.min(parseInt(qm[a5]), z5)
	}, this.z6 = function(ow, fC, z7) {
		fC.fill("");
		for (var qm = ow.split('"'), eT = Math.min(qm.length, 2 * fC.length), k2 = 0, a5 = 1; a5 < eT; a5 += 2) fC[k2++] = qm[a5].slice(0, z7)
	}, this.z8 = function(fC, fy) {
		if (0 === fy) fC.fill(0);
		else {
			var yt = this.ys(fC),
				eT = fC.length;
			if (0 === yt) fC.fill(bG.ev(fy, eT));
			else
				for (var a5 = 0; a5 < eT; a5++) fC[a5] = bG.ev(fy * fC[a5], yt);
			if (0 === (yt = this.ys(fC))) fC[1] = fy;
			else
				for (var k2 = 0; yt++ < fy;) fC[k2 = (k2 + 1) % eT] && fC[k2]++
		}
	}, this.z9 = function(fC) {
		if (!fC) return 0;
		var eT = fC.length;
		if (0 === eT) return 0;
		for (var ew = fC[eT - 1], a5 = eT - 2; 0 <= a5; a5--)
			if (fC[a5] !== ew) return a5 + 2;
		return 1
	}
}

function yh() {
	this.v5 = function(zA, oF, zB) {
		var h8 = zA.height,
			zC = b6.pF.sl(h8, h8),
			hF = b6.pF.getContext(zC);
		return function(z, hF, zB) {
			hF.fillStyle = zB, hF.beginPath(), hF.arc(z / 2, z / 2, .47 * z, 0, 2 * Math.PI), hF.fill()
		}(h8, hF, zB), hF.drawImage(zA, -oF * h8, 0), zC
	}, this.zE = function(zF) {
		var hF, hB, h8 = zF.height;
		return zF.width === h8 && (hB = (hF = b6.pF.getContext(zF, !0)).getImageData(0, 0, h8, h8), b6.yf.zG(hB.data, h8, h8, .9), hF.putImageData(hB, 0, 0)), zF
	}
}

function yi() {
	this.zH = function(ew) {
		return [ew >> 12 & 63, ew >> 6 & 63, 63 & ew]
	}, this.zI = function(ew) {
		for (var fC = this.zH(ew), a5 = 0; a5 < 3; a5++) fC[a5] = ~~(4.05 * fC[a5]);
		return fC
	}, this.zJ = function(ew) {
		ew = this.zI(ew);
		return b6.color.mS(ew[0], ew[1], ew[2])
	}, this.zK = function(fC) {
		for (var a5 = 0; a5 < 3; a5++) fC[a5] = ~~(fC[a5] / 4.04);
		return (fC[0] << 12) + (fC[1] << 6) + fC[2]
	}, this.mS = function(hH, qm, en) {
		return "rgb(" + hH + "," + qm + "," + en + ")"
	}, this.mU = function(hH, qm, en, em) {
		return "rgba(" + hH + "," + qm + "," + en + "," + em.toFixed(3) + ")"
	}, this.pi = function(eo) {
		for (var fC = eo.split("(")[1].split(","), f4 = (fC.length, bJ.f4), a5 = 0; a5 < 3; a5++) f4[a5] = parseInt(fC[a5]);
		return f4
	}, this.pb = function(zL, eW) {
		for (var fC = zL.slice(zL.indexOf("(") + 1, zL.indexOf(")")).split(","), f4 = bJ.f4, a5 = 0; a5 < 3; a5++) f4[a5] = bG.on(parseInt(fC[a5].trim(), 10) + eW, 0, 255);
		return 3 === fC.length ? this.mS(f4[0], f4[1], f4[2]) : this.mU(f4[0], f4[1], f4[2], parseFloat(fC[3].trim()))
	}, this.zM = function(fC) {
		for (var ow = "#", a5 = 0; a5 < 3; a5++) {
			var hH = fC[a5].toString(16);
			ow += 1 === hH.length ? "0" + hH : hH
		}
		return ow
	}, this.zN = function(ow) {
		var hH, qm;
		return ow.length < 7 ? t.mR : (hH = parseInt(ow.slice(1, 3), 16), qm = parseInt(ow.slice(3, 5), 16), ow = parseInt(ow.slice(5, 7), 16), this.mS(hH, qm, ow))
	}
}

function ye() {
	this.zO = function(ow, font, maxWidth) {
		if (font && (rF.font = font), rF.measureText(ow).width <= maxWidth) return ow;
		for (var a5 = ow.length - 1; 1 <= a5; a5--)
			if (ow = ow.substring(0, a5), rF.measureText(ow + "...").width <= maxWidth) return ow + "...";
		return "..."
	}
}

function yk() {
	var zQ = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	this.zR = function(e0) {
		var zT, ow = new Date(e0.getTime() - 6e4 * e0.getTimezoneOffset()).toUTCString();
		return ow.length < 12 || (ow = ow.substring(5, ow.length), 0 === (e0 = e0.getTimezoneOffset())) ? ow : (zT = (e0 < 0 ? "+" : "-") + bG.ev(Math.abs(e0), 60), 0 == (e0 = Math.abs(e0) % 60) ? ow + zT : ow + zT + ":" + (e0 < 10 ? "0" : "") +
			e0)
	}, this.zU = function(e0) {
		var ow = e0.toUTCString();
		return ow.length < 12 ? ow : function(e0) {
			return zQ[e0.getUTCDay()]
		}(e0) + ", " + ow.substring(5, ow.length - 4)
	}
}

function ya() {
	var zW = null;
	this.vN = 0, this.s2 = function() {
		var ew = be.dh.data[5].value;
		zW = "px " + ew, "Trebuchet MS" !== ew && (zW += ", Trebuchet MS"), this.vN = h7(32, 32, ["a", "b", "m"], 200, zW)
	}, this.sl = function(z, j6) {
		var eo = document.createElement("canvas");
		return eo.width = z, eo.height = j6, eo
	}, this.getContext = function(hE, alpha) {
		return hE.getContext("2d", {
			alpha: alpha
		})
	}, this.getImageData = function(uY, z, j6) {
		return uY.getImageData(0, 0, z, j6)
	}, this.qW = function(type, size) {
		return size = size.toFixed(2), 0 === type ? size + zW : 1 === type ? "bold " + size + zW : 2 === type ? "lighter " + size + zW : 3 === type ? "italic " + size + zW : 4 === type ? "oblique " + size + zW : 5 === type ? "small-caps " +
			size + zW : "small-caps bold " + size + zW
	}, this.textAlign = function(hF, id) {
		hF.textAlign = 0 === id ? "left" : 1 === id ? "center" : "right"
	}, this.textBaseline = function(hF, id) {
		hF.textBaseline = 1 === id ? "middle" : 2 === id ? "bottom" : "top"
	}, this.pR = function(e, code, color) {
		color = this.pQ(bX.zX) + " solid " + (color || t.ma);
		5 === (code = code || 5) ? e.style.border = color : 4 === code ? e.style.borderLeft = color : 2 === code ? e.style.borderBottom = color : 6 === code ? e.style.borderRight = color : e.style.borderTop = color
	}, this.qo = function(e, ea, ec, z, j6) {
		e = e.style;
		e.left = this.qp(ea), e.top = this.qp(ec), e.width = this.qp(z), e.height = this.qp(j6)
	}, this.pG = function(ew) {
		return 1 + ew * q.r.vH()
	}, this.pz = function(mB, g4) {
		return mB * this.pG(void 0 === g4 ? .5 : g4) * at.pH / at.pL
	}, this.qn = function(mB, g4) {
		return mB * this.pG(void 0 === g4 ? .5 : g4) * at.pH
	}, this.qX = function(mB, g4, zY) {
		return this.pG(g4) * Math.min(mB * at.pH, zY * at.z) / at.pL
	}, this.pQ = function(ew) {
		return ew.toFixed(1) + "px"
	}, this.qp = function(ew) {
		return this.za(ew).toFixed(1) + "px"
	}, this.za = function(ew) {
		return ew / at.pL
	}, this.zb = function(qI, zc) {
		for (var ow = "<ul>", eT = qI.length, a5 = 0; a5 < eT; a5++) ow += "<li>" + qI[a5] + ": <a href='" + zc[a5] + "' target='_blank'>" + zc[a5] + "</a></li>";
		return ow += "</ul>"
	}, this.zd = function(ze) {
		return "<a href='" + ze + "' target='_blank'>" + ze + "</a>"
	}, this.zf = function(e) {
		navigator.clipboard && navigator.clipboard.writeText(e.value)
	}, this.zg = function(e) {
		var e1 = e.textContent;
		b6.x3.zh(e1, "✔") || (1 === e1.length ? e.textContent = "✔" : e.textContent = e1 + " ✔", setTimeout(function() {
			e.textContent = e1
		}, 500))
	}, this.measureText = function(ow) {
		return rF.measureText(ow).width
	}
}

function yc() {
	this.gh = function(dz) {
		return 0 === dz ? 1 === a7.wD && a7.gr : 1 === dz ? 1 === a7.wD && !a7.gr : 2 === a7.wD
	}, this.gi = function(player) {
		return 0 !== aa.lX[player] && 2 !== aa.zi[player]
	}, this.zj = function(player) {
		return player === a7.eD && 2 !== aa.zi[player]
	}, this.zk = function(player) {
		return player === a7.eD
	}, this.j0 = function(player) {
		return player >= a7.jc || 2 === aa.zi[player]
	}, this.kU = function(player) {
		return 0 !== aa.lX[player]
	}, this.oX = function(zl, zm) {
		return zl !== zm
	}, this.fu = function(player, ew) {
		var min;
		return ew = this.zn(player, ew), aa.gX[player] += ew, aa.zo[player] && (min = Math.min(aa.zo[player], aa.gX[player]), aa.zo[player] -= min, aa.gX[player] -= min), ew
	}, this.zn = function(player, ew) {
		var zp = aa.gX[player];
		return ew = Math.min(ew, aa.gJ[player] * a7.jj - zp), ew = Math.min(ew, a7.zq - zp), Math.max(ew, 0)
	}, this.oY = function(player, ht, zr, zs) {
		var zp = aa.gX[player],
			ht = bG.ev(zp * (ht + 1), 1024),
			zr = bG.ev(zr * zp, 1024),
			ht = Math.min(ht, zp - zr);
		return 10 === a7.jw && (ht = b0.zu(player, ht)), bJ.f2[0] = ht, bJ.f2[1] = zr, zs <= ht
	}, this.nz = function(player, ng, nf) {
		var player = aa.gX[player],
			zt = bG.ev(64 * player, 1024),
			player = (ng = Math.min(ng, player - zt), this.zw(ng));
		return zt += player, ng = this.zn(nf, ng -= player), bJ.f2[0] = ng, bJ.f2[1] = zt, 1 <= ng
	}, this.o1 = function(ng, nf) {
		var zv = this.zw(ng);
		return ng = this.zn(nf, ng -= zv), bJ.f2[0] = ng, bJ.f2[1] = zv, 1 <= ng
	}, this.hs = function(player, zx) {
		return bG.ev(aa.gX[player] * (zx + 1), 1024)
	}, this.zw = function(zy) {
		return bG.ev(Math.max(2142 - ba.jZ(), 0) * zy, 2142)
	}, this.ol = function(player, zr) {
		zr = bG.ev(zr * aa.gX[player], 1024);
		bJ.f2[1] = zr, aa.gX[player] -= zr
	}, this.fs = function(player, zz) {
		var fF, fH, en = aa.gX[player];
		return zz <= en ? aa.gX[player] -= zz : (aa.gX[player] = 0, fH = aa.zo[player] + (fF = 5 * ((en = zz - en) >> 2)), bY.fv(player, fF - en, 12), fH <= a7.a00 ? aa.zo[player] = fH : (aa.zo[player] = a7.a00, bY.fv(player, fH - a7.a00, 18))),
			zz
	}, this.ki = function(player, ht) {
		var gX = aa.gX,
			zp = gX[player],
			ht = bG.ev(zp * (ht + 1), 1024),
			zt = Math.max(bG.ev(zp, 10), 1e3);
		return (ht = Math.min(ht, zp - zt)) < 0 ? (gX[player] = 0, zt = Math.min(1e3, zp + a7.a00 - aa.zo[player]), bJ.f2[1] = zt, aa.zo[player] += zt - zp, 0) : (bJ.f2[1] = zt, 10 === a7.jw && (ht = b0.zu(player, ht)), gX[player] -= zt + ht, ht)
	}, this.ob = function(player) {
		aa.gX[player] -= bJ.f2[0] + bJ.f2[1]
	}, this.oZ = function(player, ik) {
		return (ik = Math.min(ik, a7.eQ)) < a7.eQ && 0 === aa.lX[ik] && (ik = a7.eQ), (bJ.eP[0] = ik) === a7.eQ || eM(player, ik)
	}, this.od = function(player, nf) {
		return 0 !== aa.lX[nf] && !eM(player, nf)
	}, this.a01 = function(player, a02) {
		for (var g3, eT = af.jd, ws = 0, a03 = kx, a5 = 0; a5 < eT; a5++)
			if (g3 = a03[a5], aW.w6(g3)) {
				if (player === g3) return !0;
				if (++ws > a02) return !1
			} return !1
	}, this.kq = function(g3) {
		var a04 = a7.ic ? bc.wn() : aa.gJ[kx[0]];
		return a04 >= bG.ev(g3 * a7.jM, 100)
	}
}

function yg() {
	this.a05 = function(hE, a06, a07) {
		var z = hE.width,
			j6 = hE.height,
			eo = b6.pF.sl(z, j6),
			hF = b6.pF.getContext(eo, !0),
			hE = (hF.drawImage(hE, 0, 0), hF.getImageData(0, 0, z, j6));
		return a06(hE.data, z, j6, a07), hF.putImageData(hE, 0, 0), eo
	}, this.a08 = function(sw, z, j6) {
		for (var ea = z - 1; 0 <= ea; ea--)
			for (var ec = j6 - 1; 0 <= ec; ec--) {
				var a5 = 4 * (ea + ec * z);
				sw[3 + a5] = sw[a5], sw[a5] = sw[1 + a5] = sw[2 + a5] = 255
			}
	}, this.a09 = function(sw, z, j6) {
		for (var ea = z - 1; 0 <= ea; ea--)
			for (var ec = j6 - 1; 0 <= ec; ec--) {
				var a5 = 4 * (ea + ec * z);
				sw[1 + a5] > sw[2 + a5] + 10 && (sw[3 + a5] = sw[a5], sw[1 + a5] = sw[2 + a5])
			}
	}, this.a0A = function(sw, z, j6, a07) {
		for (var gap = Math.floor(Math.min(z, j6) * a07), ea = 0; ea < z; ea++)
			for (var a5, ec = 0; ec < j6; ec++)(ea < gap || ec < gap || z - gap <= ea || j6 - gap <= ec) && (sw[3 + (a5 = 4 * (ea + ec * z))] = 255 - 255 * (sw[1 + a5] - sw[a5]) / (255 - sw[a5]))
	}, this.a0B = function(sw, z, j6, a07) {
		for (var ea = z - 1; 0 <= ea; ea--)
			for (var ec = j6 - 1; 0 <= ec; ec--) {
				var a5 = 4 * (ea + ec * z);
				sw[a5] = a07[0], sw[1 + a5] = a07[1], sw[2 + a5] = a07[2]
			}
	}, this.a0C = function(sw, z, j6, a07) {
		for (var gap = Math.floor(z * a07), ea = 0; ea < z; ea++)
			for (var a5, ec = 0; ec < j6; ec++)(ea < gap || ec < gap || z - gap <= ea || j6 - gap <= ec) && (sw[a5 = 4 * (ea + ec * z)] = sw[1 + a5] = sw[2 + a5] = 0)
	}, this.a0D = function(sw, z, j6) {
		for (var ec, a5, ea = z - 1; 0 <= ea; ea--)
			for (ec = j6 - 1; 0 <= ec; ec--) 200 < sw[1 + (a5 = 4 * (ea + ec * z))] && sw[1 + a5] - 20 > sw[a5] && sw[1 + a5] - 20 > sw[2 + a5] ? sw[a5] + sw[2 + a5] < 40 ? sw[3 + a5] = 0 : (sw[3 + a5] = sw[a5], sw[a5] = 255, sw[1 + a5] = 255,
				sw[2 + a5] = 255) : sw[a5] < 50 && sw[1 + a5] < 50 && sw[2 + a5] < 50 && (sw[a5] + sw[1 + a5] + sw[2 + a5] < 50 ? sw[3 + a5] = 180 : sw[3 + a5] = 180 + Math.floor(75 * (sw[a5] + sw[1 + a5] + sw[2 + a5] - 50) / 100))
	}, this.a0E = function(sw, z, j6) {
		for (var ec, a5, ea = z - 1; 0 <= ea; ea--)
			for (ec = j6 - 1; 0 <= ec; ec--) sw[1 + (a5 = 4 * (ea + ec * z))] > sw[a5] + 20 && sw[1 + a5] > sw[2 + a5] + 20 && sw[a5] + sw[2] < 40 && (sw[3 + a5] = 255 - sw[1 + a5], sw[a5] = sw[1 + a5] = sw[2 + a5] = sw[a5])
	}, this.zG = function(sw, z, j6, a07) {
		for (var hH = z >> 1, ea = 0; ea < z; ea++)
			for (var ec = 0; ec < j6; ec++) Math.sqrt((ea - hH) * (ea - hH) + (ec - hH) * (ec - hH)) > a07 * hH && (sw[4 * (ea + ec * z) + 3] = 0)
	}
}

function yd() {
	this.a0F = function(ew) {
		var a5, a0G, a0H, a0I, a0J;
		if (ew < 0) return "-" + this.a0F(Math.abs(ew));
		if (ew < 1e3) return ew.toString();
		for (a0G = Math.floor(Math.log(ew + .5) / Math.log(10)) + 1, a0H = Math.floor((a0G - 1) / 3), a0J = (a0I = ew.toString()).substring(a0G - 3, a0G), a5 = 1; a5 < a0H; a5++) a0J = a0I.substring(a0G - 3 * (a5 + 1), a0G - 3 * a5) + " " + a0J;
		return a0I.substring(0, a0G - 3 * a0H) + " " + a0J
	}, this.a0K = function(g3, a0G) {
		return g3.toFixed(a0G) + "%"
	}, this.x8 = function(ew, a0L) {
		return ew.toFixed(bG.on(Math.floor((void 0 === a0L ? 3 : a0L) - Math.log10(Math.max(ew, 1))), 0, 8))
	}, this.a0M = function(ew, mB, a0G) {
		return (ew * mB).toFixed(a0G)
	}, this.x4 = function(username) {
		var eX, eI = username.indexOf("[");
		return !(eI < 0) && 1 < (eX = username.indexOf("]")) - eI && eX - eI <= 8 ? username.substring(eI + 1, eX).toUpperCase().trim() : null
	}, __fx.leaderboardFilter.parseClanFromPlayerName = this.x4;
	this.a0N = function(ow) {
		for (var em = Math.floor(.5 * ow.length + .5), mI = Math.floor(.5 * (em - 1)), a5 = 0; a5 < mI; a5++)
			for (var en = -1; en < 2; en += 2) {
				var eo = em + en * a5;
				if (" " === ow[eo]) return [this.a0O(ow.substring(0, eo)), this.a0P(ow.substring(eo))]
			}
		return [ow.substring(0, em), ow.substring(em)]
	}, this.a0P = function(ow) {
		for (var eT = ow.length, a5 = 0; a5 < eT; a5++)
			if (" " !== ow[a5]) return ow.substring(a5);
		return ow
	}, this.a0O = function(ow) {
		for (var a5 = ow.length - 1; 0 <= a5; a5--)
			if (" " !== ow[a5]) return ow.substring(0, a5 + 1);
		return ow
	}, this.a0Q = function(ow, a0R) {
		return ow.split("(")[0] + "(🧈 " + a0R.toFixed(2) + ")"
	}, this.startsWith = function(ow, a0S) {
		return ow.substring(0, a0S.length) === a0S
	}, this.zh = function(ow, a0S) {
		var eT = ow.length;
		return ow.substring(eT - a0S.length, eT) === a0S
	}, this.a0T = function(fC, a0U, a0V) {
		var ow = "",
			eT = fC.length - 1;
		a0V = a0V || "";
		for (var a5 = 0; a5 < eT; a5++) ow += a0V + fC[a5] + a0V + ",", (a5 + 1) % a0U == 0 && (ow += "\n");
		return ow += a0V + fC[eT] + a0V
	}, this.a0W = function(ow, hO, hP) {
		return ow.replace(new RegExp(hO, "g"), hP)
	}
}

function a0X() {
	this.ih = function(player, eF) {
		aC.uK(player, bH.eb(eF), bH.ed(eF)) && (ba.dW = !0), a7.jy && this.iR()
	}, this.iR = function() {
		a7.gr = !1;
		for (var a5 = 0; a5 < a7.jc; a5++) 0 !== aa.lX[a5] && 0 === aa.gJ[a5] && aC.uQ(a5);
		0 !== aa.lX[a7.eD] ? (bY.lT[7] = aa.gJ[a7.eD], bY.lT[8] = aa.gX[a7.eD], aL.a0Y(), aQ.a0Z(), a7.gf || aB.ls(aa.i8[a7.eD] - 5, aa.iA[a7.eD] - 5, aa.i9[a7.eD] + 5, aa.iB[a7.eD] + 5), an.dO()) : aR.show(!1, !1, !1, !0), aH.a0a(18), aZ.a0b(),
			aZ.lJ(!0), bK.lB.a0c(), aF.ql(), a7.oW = null, bW.a0d = !0, bW.a0e(), a7.jy && q.r.setState(1)
	}
}

function bq() {
	this.eQ = 512, this.zq = 15e8, this.a0f = 1e9, this.a00 = 5e4, this.a0g = 512, this.fp = 2, this.eD = 0, this.jc = 0, this.wG = 0, this.k0 = 0, this.wF = 0, this.tT = 512, this.tY = 512, this.jj = 150, this.jy = !0, this.gf = 0, this.wD = 0, this
		.jM = 0, this.m2 = !1, this.gr = 0, this.a0h = 0, this.ic = !1, this.ta = 0, this.tb = 0, this.jw = 0, this.wu = 0, this.oW = null, this.wV = new ue, this.a0i = 30, this.wA = 0, this.wI = 0, this.wU = 0, this.data = new a0j, this.a0k =
		new a0l, this.a0m = 0, this.a0n = function() {
			this.wG = this.jc = this.data.a0o, this.jy = 1 === this.wG && !__fx.customLobby.isActive(), this.m2 = !1, this.gf = this.data.a0p, this.jw = 0 === this.data.a0q ? [7, 10, 8][this.data.a0r] : this.data.a0s ? 9 : this.data.a0t - 2, this
				.wu = this.data.a0u, this.ic = this.jw < 7 || 9 === this.jw, this.jw = 10 === this.jw && this.jy ? 7 : this.jw, this.jw = 8 === this.jw && 2 !== this.jc ? 7 : this.jw, av.dO(), this.ta = this.data.a0t, this.data.tc ? this.tb = +(0 <
					this.data.tc[0]) : (this.tb = 0, this.ic && this.jy && (this.data.tc = new Uint16Array(9), this.data.tc.fill(1, 1, this.ta + 1), a7.a0k.a0v())), this.a0i = this.jc <= 2 ? 30 : this.jc <= 50 ? 40 : 50, this.a0h = this.gr = __fx
				.customLobby.isActive() ? __fx.customLobby.gameInfo.spawnSelection : this.data.a0w, this.oW = this.gr ? new a0X : null, this.tT = __fx.customLobby.isActive() ? Math.max(Math.min(__fx.customLobby.gameInfo.botCount, this.data.a0x), this
					.jc) : this.data.a0x,
				this.tY = this.tT, this.k0 = this.tT - this.jc, this.wF = 0, this.eD = this.data.a0y, this.wA = 0, this.wI = 0, this.wU = 0, au.a0z(this.data.a10), aY.dO(), aa.dO(), ac.a11(), b4.nY.oI = [], bb.dO(), this.wD = 1, bY.dO(), a12(), aW
				.dP(), ai.a13(), bW.dO(), aW.dO(), al.dO(), bH.dO(), bI.dO(), ah.dO(), bM.dO(), bQ.a14(), a8.dO(), ac.a1(), aC.dO(), aD.dO(), af.a15(), b5.dO(), bc.dO(), bK.dO(), bZ.dO(), a16.putImageData(a17, 0, 0), aP.dO(), aM.dO(), aL.dO(), b7
				.dO(), aq.dO(), aO.dO(), aQ.dO(), aG.dO(), aK.dO(), aH.dO(), aJ.dO(), aF.dO(), aR.dO(), a9.dO(), aA.dO(), fX(), aX.dO(), aZ.dO(), b0.dO(), b1.dO(), ax.dO(), this.wV.dO(), ba.a14(), aB.lr(), 0 === aa.lX[a7.eD] && aR.show(!1, !0), aZ
				.lJ(!0), an.dO(), ba.dW = !0, this.gf || this.jy && this.gr || q.r.setState(1), this.a0m = 0
		}, this.xg = function(a19) {
			a7.gf || b5.oU.a1A.length || (b5.oU.a1A = b5.a1B.vj()),
				__fx.customLobby.isActive() === false && aw.lB.a1C(),
				this.wD = 0, ba.a1D(), q.r.setState(0), a19 || bP.dl.show(), aU.setState(0);
			if (__fx.customLobby.isActive()) __fx.customLobby.rejoinLobby();
			else this.a0m ? m.n(19) : m.n(5, 5)
		}, this.a1E = function() {
			return this.gf ? aG.gg || !b7.a1F : this.jy && (aG.gg || this.gr)
		}, this.a1G = function() {
			return 1 === this.wD && !this.gr
		}
}

function a0j() {
	this.a1H = 0, this.a1I = 2, this.a1J = 0, this.a1K = 14071, this.a1L = "", this.hE = null, this.a1M = 1, this.e9 = 1, this.a0x = 512, this.a0o = 1, this.a0y = 0, this.a0q = 0, this.a1N = 0, this.a0r = 0, this.a0t = 0, this.a0s = 0, this.a0u = 0,
		this.a0p = 0, this.ui = null, this.a1O = 0, this.a1P = 1, this.a1Q = null, this.a1R = 1, this.tc = null, this.a1S = 0, this.k1 = 0, this.k7 = 0, this.k4 = null, this.k3 = null, this.tP = 0, this.a10 = 0, this.u7 = null, this.a0w = 1, this
		.a1T = 0, this.a1U = null, this.a1V = 1, this.a1W = 0, this.a1X = 0, this.a1Y = null, this.a1Z = 0, this.a1a = 32, this.a1b = null, this.a1c = 0, this.a1d = 64, this.a1e = null, this.a1f = 0, this.a1g = 0, this.a1h = null
}

function a0l() {
	this.a0v = function() {
		var a1i = a7.data;
		b6.pP.z8(a1i.tc, a1i.a0x), a1i.a0t = b6.pP.yy(a1i.tc, 0), a1i.tc[0] && a1i.tc[7] && (a1i.tc[7] = 0, this.a0v())
	}, this.a1j = function() {
		var a1i = a7.data;
		a1i.a1H < 2 ? bN.a1(bN.a1k(a1i), a1i.a1K) : bN.a1l(a1i.hE)
	}, this.a1m = function() {
		var a1i = a7.data;
		a1i.a1R && (a1i.a1Q || (a1i.a1Q = new Uint32Array(1)), a1i.a1Q[0] = be.lB.s0()), a1i.a1V && (a1i.a1U || (a1i.a1U = new Array(1)), a1i.a1U[0] = be.dh.data[122].value)
	}
}

function dJ() {
	this.vK = 0, this.gap = 0, this.zX = 0, this.pN = 0, this.dO = function() {
		this.resize()
	}, this.resize = function() {
		this.vK = .0022 * b6.pF.pG(.5) * at.pH, this.zX = this.vK / at.pL, this.gap = Math.max(Math.floor((q.r.vH() ? .0114 : .01296) * at.pH), 2), this.pN = this.gap / at.pL
	}
}

function dI() {
	this.a1n = function() {
		return q.r.vH() ? 2 : 1
	}
}

function c1() {
	var pl, ea, ec, a1o, a1p, a1q, e0, player, a1r, gap, zoom, oA, a1s;

	function a22(player) {
		for (var a5 = oA.length - 1; 0 <= a5; a5--)
			if (oA[a5] === player) return 1
	}

	function a20(a1x) {
		var a5, eT;
		if (-1 !== a1x)
			for (eT = pl.length, a5 = 0; a5 < eT; a5++)
				if (pl[a5].ur && pl[a5].ea + 1 === a1x % 4 && pl[a5].ec + 1 === a1x >> 2) return a5;
		return -1
	}

	function a1y(kl, km) {
		var qm = gap / 2;
		return kl < ea - a1o - 3 * qm || ea + 3 * a1o + 5 * qm < kl || km < ec - a1o - 3 * qm || ec + 2 * a1o + 3 * qm < km ? -1 : 4 * (km < ec - qm ? 0 : km < ec + a1o + qm ? 1 : 2) + (kl < ea - qm ? 0 : kl < ea + a1o + qm ? 1 : kl < ea + 2 * a1o +
			3 * qm ? 2 : 3)
	}
	this.a1t = function() {
		var a5, en, a1w = [t.mw, t.n8, t.mY, t.nN, t.nG];
		for (pl = new Array(9), a5 = 0; a5 < 9; a5++) pl[a5] = {
			id: a5,
			ur: !1,
			kS: 0,
			hE: [],
			ea: 0,
			ec: 0
		};
		for (pl[0].colors = [0, 1, 2, 3], pl[0].ea = 0, pl[0].ec = 0, pl[1].colors = [0, 1, 4], pl[1].ea = 1, pl[1].ec = 0, pl[2].colors = [0, 2], pl[2].ea = -1, pl[2].ec = 0, pl[3].colors = [0], pl[3].ea = 0, pl[3].ec = 0, pl[4].colors = [0, 2],
			pl[4].ea = 1, pl[4].ec = 1, pl[5].colors = [3], pl[5].ea = 0, pl[5].ec = -1, pl[6].id = 20, pl[6].colors = [0], pl[6].ea = 1, pl[6].ec = -1, pl[7].id = 21, pl[7].colors = [0], pl[7].ea = 0, pl[7].ec = 1, pl[8].id = 16, pl[8]
			.colors = [0], pl[8].ea = 0, pl[8].ec = 0, a5 = 0; a5 < 9; a5++)
			for (en = 0; en < pl[a5].colors.length; en++) pl[a5].hE.push(function(id, zB) {
				if (id < 20) return b6.hE.v5(aV.get(3), id, zB);
				var zB = aV.get(3).height,
					zC = b6.pF.sl(zB, zB),
					hF = b6.pF.getContext(zC);
				20 === id ? hF.drawImage(aV.get(18), 0, 0) : 21 === id && ad.sw.vL(ad.uo.v9 + ad.uo.vR, hF, 0, 0, zB);
				return zC
			}(pl[a5].id, a1w[pl[a5].colors[en]]))
	}, this.a1v = function() {
		return pl
	}, this.dO = function() {
		oA = [], ea = ec = e0 = 0, a1p = a1q = -1e3, this.resize()
	}, this.resize = function() {
		a1o = Math.floor((q.r.vH() ? .075 : .0468) * at.pH), zoom = a1o / aV.get(3).height, gap = Math.floor(a1o / 3)
	}, this.y9 = function(kl, km) {
		return !!this.ur() && (ba.dW = !0, !!ad.sw.gj(kl, km, player) || (kl = function(kl, km) {
			a1q = a1p = -1e3;
			var a1z = a20(a1y(kl, km));
			if (-1 === a1z) return 0;
			if (1 !== pl[a1z].colors[pl[a1z].kS])
				if (5 === a1z) {
					if (! function() {
							var e1 = performance.now();
							a1s + 4e3 < e1 && (oA = []);
							a1s = e1
						}(), a22(player)) return 1;
					oA.push(player), 16 < oA.length && oA.shift()
				} else if (6 === a1z) {
				for (var a5 = oA.length - 1; 0 <= a5; a5--) 0 === aa.lX[oA[a5]] && oA.splice(a5, 1);
				0 < oA.length && (b1.a23(1, oA, !0) && b4.fr.o9(oA, player), oA = [])
			} else if (2 === a1z) b4.gs.ne(aL.gx(), player);
			else if (3 === a1z) a7.gr && b4.gs.gt(a1r);
			else if (0 === a1z)
				if (0 === pl[0].kS) {
					if (a7.a0h && aQ.a24() < 350) return 1;
					b4.gs.h3(aL.gx(), player)
				} else ax.h5(player, aL.gx());
			else if (1 === a1z) bQ.a25(), b4.gs.h1(aL.gx(), a1r);
			else {
				if (7 === a1z) return bQ.a26(), ad.sw.show(kl, km), 2;
				if (4 === a1z) b1.a23(0, [player], !0) && b4.fr.o6(player);
				else {
					if (8 !== a1z) return 0;
					b4.gs.gw(aL.gx(), a1r, player)
				}
			}
			return 1
		}(kl, km), this.ql(), 2 === kl && (ad.sw.ur = !0), 0 < kl))
	}, this.yB = function(kl, km) {
		this.ur() || (a1p = kl, a1q = km, e0 = performance.now())
	}, __fx.hoveringTooltip.display = function(mouseX, mouseY) {
		var coordX = bH.gn(mouseX),
			coordY = bH.gp(mouseY),
			coord = bH.er(coordX, coordY),
			point = bH.eJ(coord);
		if (coordX < 0 || coordY < 0) return;
		(function(kl, km, e6) {
			aW.eO(e6) || -1 === (kl = bI.gz.a2K(kl, km)) ? aH.a2J(e6) : aH.a2L(kl)
		}(mouseX, mouseY, point))
	}
	this.click = function(kl, km, yJ) {
		var gm = bH.gn(kl),
			go = bH.gp(km),
			eF = bH.er(gm, go),
			e6 = bH.eJ(eF);
		if (!bH.gq(gm, go)) return !1;
		gm = (q.r.vH() ? .025 : .0144) * at.pH, go = performance.now();
		if (Math.abs(kl - a1p) > gm || Math.abs(km - a1q) > gm || e0 + 500 < go) return !1;
		if (e0 = go, yJ && ! function(kl, km, e6) {
				aW.eO(e6) || -1 === (kl = bI.gz.a2K(kl, km)) ? aH.a2J(e6) : aH.a2L(kl)
			}(kl, km, e6), aG.gg || this.ur() || !b6.fr.gi(a7.eD) || a7.gf) return this.ql(), !1;
		if (a7.gr) {
			if (!yJ) {
				if (!aW.eO(e6)) return !1;
				a1r = eF, pl[3].ur = !0
			}
		} else if (bI.gz.nj(eF)) yJ ? aH.a2C(55, 0) : bI.a2A.a2B = -1;
		else {
			if (yJ) return !1;
			bI.gz.a2D(kl, km) || (2 === a7.wD ? aW.g5(e6) && (player = aW.eL(e6), aW.w6(player)) && (pl[0].ur = !0, pl[0].kS = 1, pl[7].ur = !0) : aW.eY(e6) ? (a1r = ag.e3.e5(e6)) && (gm = bH.eJ(a1r), pl[8].ur = !0, player = aW.eK(gm) ? a7.eQ :
				aW.eL(gm)) : (a1r = eF, bI.gz.h0(a7.eD, eF) && (pl[0].ur = !0, pl[0].kS = 1, pl[1].ur = !0, pl[1].kS = bJ.f6[2] ? 0 : 2), aW.gy(e6) || (aW.eK(e6) ? (player = a7.eQ, h2(a7.eD) ? (pl[0].ur = !0, pl[0].kS = 0) : h4(a7.eD,
				player) && (pl[0].ur = !0, pl[0].kS = 3)) : (player = aW.eL(e6)) === a7.eD ? (pl[0].ur = !0, pl[0].kS = 1, pl[7].ur = !0) : (pl[0].kS = 1, pl[5].ur = function(player) {
				return aW.w6(player) && !a22(player) && b1.a23(1, [player], !1)
			}(player), pl[7].ur = aW.w6(player), eM(player, a7.eD) ? (pl[4].ur = aW.w6(player) && !aZ.a2F(player) && b1.a23(0, [player], !1), pl[6].ur = function(player) {
				if (0 === oA.length) return !1;
				if (performance.now() > a1s + 4e3) return !(oA = []);
				return !a22(player) && ! function(player) {
					var a5;
					if (a7.ic)
						for (a5 = oA.length - 1; 0 <= a5; a5--)
							if (!eM(player, oA[a5])) return 1;
					return
				}(player)
			}(player), h6(a7.eD, player) ? (pl[0].kS = 0, pl[0].ur = !0) : h4(a7.eD, player) && (pl[0].kS = 3, pl[0].ur = !0), pl[0].ur = this.a2H()) : (pl[2].ur = !0, pl[0].ur = !0)))))
		}
		return this.a29(kl, km)
	}, this.a29 = function(kl, km) {
		return ea = kl - Math.floor(a1o / 2), ec = km - Math.floor(a1o / 2), !!this.ur()
	}, this.xp = function(kl, km) {
		return !!this.ur() && (ad.sw.ur ? !ad.sw.vJ(kl, km) && (ad.sw.ur = !1, ba.dW = !0) : function(wk, kl, km) {
			kl = a1y(kl, km);
			if (0 <= a20(kl)) return !1;
			if ((1 === kl || 6 === kl) && 0 <= a20(2)) return !1;
			if ((6 === kl || 9 === kl) && 0 <= a20(10)) return !1;
			return wk.ql(), ba.dW = !0
		}(this, kl, km))
	}, this.ql = function() {
		for (var a5 = pl.length - 1; 0 <= a5; a5--) pl[a5].ur = !1, pl[a5].kS = 0;
		ad.sw.ur = !1
	}, this.ur = function() {
		return this.a2H() || ad.sw.ur
	}, this.a2H = function() {
		for (var eT = pl.length, a5 = 0; a5 < eT; a5++)
			if (pl[a5].ur) return !0;
		return !1
	}, this.rE = function() {
		if (this.ur())
			if (ad.sw.ur) ad.sw.rE();
			else {
				var a5, hF = rF,
					en = pl,
					eT = en.length,
					a2P = (a1o + gap) / zoom;
				for (hF.imageSmoothingEnabled = !0, hF.setTransform(zoom, 0, 0, zoom, ea, ec), a5 = 0; a5 < eT; a5++) en[a5].ur && rF.drawImage(en[a5].hE[en[a5].kS], en[a5].ea * a2P, en[a5].ec * a2P);
				hF.imageSmoothingEnabled = !1, hF.setTransform(1, 0, 0, 1, 0, 0)
			}
	}
}

function c2() {
	var j6, hE, a2Q, a2R, a2S, a2T = -1;

	function a2U() {
		var a2V, uY = hE.getContext("2d", {
			alpha: !0
		});
		uY.clearRect(0, 0, j6, j6), uY.fillStyle = t.mW, uY.fillRect(0, 0, j6, j6), 0 === a2R && (uY.fillStyle = t.mb, uY.fillRect(0, 0, j6, j6)), uY.fillStyle = t.ma, uY.fillRect(0, 0, j6, 1), uY.fillRect(0, 0, 1, j6), uY.fillRect(0, j6 - 1, j6, 1),
			uY.fillRect(j6 - 1, 0, 1, j6), a2V = .9 * j6 / aV.get(0).width, uY.imageSmoothingEnabled = !0, uY.setTransform(a2V, 0, 0, a2V, Math.floor((j6 - a2V * aV.get(0).width) / 2), Math.floor((j6 - a2V * aV.get(0).height) / 2)), uY.drawImage(aV
				.get(0), 0, 0), uY.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a2X(kl, km) {
		if (!aG.gg) return kl <= j6 + bX.gap && km >= aL.ec ? 9 : -1;
		if (kl <= 4 * j6 + bX.gap) {
			if (km >= aL.ec) return 0;
			if (km >= aL.ec - j6 - a2S * bX.gap) return 2
		} else if (kl <= 7 * j6 + bX.gap && km >= aL.ec - j6 - a2S * bX.gap) return 1;
		return -1
	}
	this.gg = !1, this.dO = function() {
		a2R = -1, this.gg = !1, a2S = q.r.vH() ? 1.2 : .6, this.resize()
	}, this.resize = function() {
		j6 = aL.j6, (hE = document.createElement("canvas")).width = j6, hE.height = j6, a2Q = b6.pF.qW(1, (q.r.vH() ? .5 : .45) * j6), a2U()
	}, this.yR = function() {
		this.gg = !this.gg, this.gg ? (bP.dj.hideCMPButton(), b7.yQ(!1), a7.gf && b7.a1F && b7.yS(!0), this.a2W()) : (a2R = -1, a2U(), !a7.jy || 1 !== a7.wD || a7.gr || a7.gf || q.r.setState(1)), ba.dW = !0
	}, this.a2W = function() {
		(a7.jy || a7.gf) && 1 === a7.wD && (aP.lJ(!0), a7.gr || setTimeout(function() {
			bW.wO()
		}, 0), q.r.setState(0))
	}, this.gj = function(kl, km) {
		return 0 <= (a2T = a2X(kl, km)) || !aG.gg || a7.jy || a7.gf || bZ.ur || aG.yR(), a2T
	}, this.xp = function(kl, km) {
		kl = a2X(kl, km);
		kl !== a2R && (a2R = kl, this.gg || a2U(), ba.dW = !0)
	}, this.xq = function(kl, km) {
		kl = a2X(kl, km);
		return -1 !== kl && a2T === kl && (this.gg ? a7.m2 ? (0 <= kl && b7.yQ(!1), !a7.gf) : (0 === kl ? a7.xg() : 1 === kl ? this.yR() : 2 === kl && m.n(1, 0), !0) : 9 === kl && (this.yR(), !0))
	}, this.rE = function() {
		var z;
		this.gg ? (z = Math.floor(5.5 * j6), rF.setTransform(1, 0, 0, 1, bX.gap, aL.ec), rF.fillStyle = t.mW, rF.fillRect(0, 0, z, j6), 0 === a2R ? (rF.fillStyle = t.mb, rF.fillRect(0, 0, 4 * j6, j6)) : 1 === a2R && (rF.fillStyle = t.mb, rF
				.fillRect(4 * j6, 0, Math.floor(1.5 * j6), j6)), rF.fillStyle = t.ma, rF.fillRect(0, 0, z, 1), rF.fillRect(0, 0, 1, j6), rF.fillRect(4 * j6, 0, 1, j6), rF.fillRect(0, j6 - 1, z, 1), rF.fillRect(z - 1, 0, 1, j6), rF.font = a2Q,
			b6.pF.textBaseline(rF, 1), b6.pF.textAlign(rF, 1), rF.fillText(L(18), 2 * j6, .54 * j6), z = .4 * j6, aG.a2c(bX.gap + 4 * j6 + (1.5 * j6 - z) / 2, aL.ec + .3 * j6, z), z = 1, rF.setTransform(1, 0, 0, 1, bX.gap, aL.ec - z * a2S *
				bX.gap - z * j6), rF.fillStyle = t.mW, rF.fillRect(0, 0, 4 * j6, j6), a2R === z + 1 && (rF.fillStyle = t.mb, rF.fillRect(0, 0, 4 * j6, j6)), rF.fillStyle = t.ma, rF.fillRect(0, 0, 4 * j6, 1), rF.fillRect(0, 0, 1, j6), rF
			.fillRect(4 * j6, 0, 1, j6), rF.fillRect(0, j6 - 1, 4 * j6, 1), rF.fillText(L(0 === z ? 18 : 19), 2 * j6, .54 * j6), rF.setTransform(1, 0, 0, 1, 0, 0)) : rF.drawImage(hE, bX.gap, aL.ec)
	}, this.a2b = function(player) {
		return 0 !== aa.lX[player] && 2 !== a7.wD && aW.w6(player)
	}, this.a2c = function(ea, ec, eT) {
		rF.setTransform(1, 0, 0, 1, ea, ec), rF.lineWidth = bX.vK, rF.strokeStyle = t.ma, rF.beginPath(), rF.moveTo(0, 0), rF.lineTo(eT, eT), rF.moveTo(0, eT), rF.lineTo(eT, 0), rF.stroke()
	}
}

function c3() {
	var a2e, j6, a2f, a2g, a2h, a2i, a2j, a2k, a2l;

	function uU() {
		return aL.a32(aH.a2y()) ? aq.ur ? aL.ec - aL.j6 - 2 * a2f : aL.ec - a2f : b7.a32(aH.a31()) ? aq.ur ? b7.uU() - aL.j6 - 2 * a2f : b7.uU() - a2f : aq.ur ? at.j6 - aL.j6 - (bf.a1n() + 1) * a2f : at.j6 - bf.a1n() * bX.gap
	}

	function a2q(e1, ow, id, g3, a2s, a2t, t4, a2u, a2v, a2w) {
		var a5, uY, zC, p7, fC, a37 = void 0 !== a2v,
			z = Math.floor(aK.measureText(ow, aH.a2Q) + 1.5 * a2g + (a37 ? j6 : 1.5 * a2g));
		if (ba.dW = !0, z + a2f > at.z && !a37 && 50 !== id && 20 < ow.length) a2q(e1, (fC = b6.x3.a0N(ow))[0], id, g3, a2s, a2t, t4, a2u, a2v, a2w), a2q(e1, fC[1], id, g3, a2s, a2t, t4, a2u, a2v, a2w);
		else if (fC = z + (50 === id ? a2h : 0), (zC = document.createElement("canvas")).width = z, zC.height = j6, (uY = zC.getContext("2d", {
				alpha: !0
			})).font = aH.a2Q, b6.pF.textBaseline(uY, 1), b6.pF.textAlign(uY, 0), uY.clearRect(0, 0, z, j6), uY.fillStyle = a2t, uY.fillRect(0, 0, z, j6), uY.fillStyle = a2s, uY.fillText(ow, Math.floor(1.5 * a2g), Math.floor(j6 / 2)), a37 && (uY
				.imageSmoothingEnabled = !0, ad.sw.vL(a2v, uY, z - j6, 0, j6)), 0 === (p7 = {
				e0: e1,
				ow: ow,
				id: id,
				player: g3,
				hE: zC,
				a2s: a2s,
				a2t: a2t,
				z: z,
				a2z: fC,
				t4: t4,
				a2u: a2u,
				a2v: a2v,
				a2w: a2w
			}).e0 || 0 < a2e.length && 0 < a2e[0].e0) a2e.unshift(p7);
		else {
			for (a5 = 1; a5 < a2e.length; a5++)
				if (0 < a2e[a5].e0) return void a2e.splice(a5, 0, p7);
			a2e.push(p7)
		}
	}

	function a3E(hH, qm, en) {
		return "rgb(" + hH + "," + qm + "," + en + ")"
	}

	function a38(id, fy) {
		for (var eT = a2e.length, a5 = 0; a5 < eT; a5++) a2e[a5].id === id && fy-- <= 0 && (a2e.splice(a5, 1), a5--, eT--)
	}

	function a3A(id, player) {
		for (var eh = !1, a5 = a2e.length - 1; 0 <= a5; a5--) a2e[a5].id !== id || player !== a7.eQ && a2e[a5].player !== player || (a2e.splice(a5, 1), eh = !0);
		return eh
	}

	function a3Y(ow) {
		a2q(340, ow, 6, 0, a3E(215, 245, 255), t.mX, -1, !1)
	}
	this.a2m = "", this.dO = function() {
		var self;
		a2k = 0, a2j = q.r.vH() ? 7 : 12, a2i = {
			w4: [0, 0, 0],
			a2n: [0, 0, 0],
			lp: [220, 180, 180],
			rC: [0, 0, 0],
			eo: [0, 0, 0]
		}, a2e = [], this.resize(), a7.gr && this.wP(0, 18), bN.sj.sk[bN.e8].name.length && a3Y(L(65, [bN.sj.sk[bN.e8].name])), a3Y(L(66, [bN.ee - 2 + "x" + (bN.ef - 2)])), a3Y(L(67, [ai.a3Z])), ai.a3Z !== ai.a3a && a3Y(L(68, [ai.a3a + " (" +
			b6.x3.a0K(100 * ai.a3a / ai.a3Z, 1) + ")"
		])), 0 < ai.a3b && a3Y(L(41, [ai.a3b + " (" + b6.x3.a0K(100 * ai.a3b / ai.a3Z, 1) + ")"])), 0 < ai.a3c && a3Y(L(69, [ai.a3c + " (" + b6.x3.a0K(100 * ai.a3c / ai.a3Z, 1) + ")"])), 10 === a7.jw && a2q(120, L(70), 6, 0, a3E(235, 255,
			120), t.mX, -1, !1), 0 !== (self = this).a2m.length && (a2q(200, self.a2m, 0, 0, t.ma, t.mX, -1, !1), self.a2m = "")
	}, this.resize = function() {
		var a2r, a5;
		if (j6 = (j6 = Math.floor((q.r.vH() ? .031 : .0249) * at.pH)) < 10 ? 10 : j6, this.fontSize = Math.floor(2 * j6 / 3), this.a2Q = b6.pF.qW(1, this.fontSize), a2f = bX.gap, a2g = Math.floor(j6 / 5), 0 < a2e.length)
			for (a2r = a2e, a2e = [], a5 = a2r.length - 1; 0 <= a5; a5--) a2q(a2r[a5].e0, a2r[a5].ow, a2r[a5].id, a2r[a5].player, a2r[a5].a2s, a2r[a5].a2t, a2r[a5].t4, a2r[a5].a2u, a2r[a5].a2v, a2r[a5].a2w);
		this.a2x()
	}, this.a2x = function() {
		a2l = document.createElement("canvas");
		var ow = L(20),
			uY = (a2h = aK.measureText(ow, this.a2Q) + 5 * a2g, a2l.height = j6, a2l.width = a2h, a2l.getContext("2d", {
				alpha: !0
			}));
		uY.font = this.a2Q, b6.pF.textBaseline(uY, 1), b6.pF.textAlign(uY, 1), uY.clearRect(0, 0, a2h, j6), uY.fillStyle = t.u, uY.fillRect(0, 0, a2h, j6), uY.fillStyle = t.ma, uY.fillText(ow, Math.floor(a2h / 2), Math.floor(j6 / 2))
	}, this.a2y = function() {
		var eT;
		return aq.ur ? aq.z : 0 === (eT = a2e.length) ? 0 : 1 === eT ? a2e[0].a2z : a30(a2e[0].a2z, a2e[1].a2z)
	}, this.a31 = function() {
		var eT = a2e.length;
		return aq.ur ? eT ? a30(aq.z, a2e[0].a2z) : aq.z : 0 === eT ? 0 : 1 === eT ? a2e[0].a2z : 2 === eT ? a30(a2e[0].a2z, a2e[1].a2z) : a30(a30(a2e[0].a2z, a2e[1].a2z), a2e[2].a2z)
	}, this.gj = function(ea, ec) {
		for (var lz, a33, a34 = uU(), a5 = a2e.length - 1; 0 <= a5; a5--)
			if ((a33 = a34 - (a5 + 1) * j6) <= ec && ec < a33 + j6) return 50 === a2e[a5].id ? ea >= at.z - a2h - a2f - a2e[a5].z && (ea >= at.z - a2h - a2f ? b4.fr.o6(a2e[a5].player) : aB.lt(a2e[a5].player, 800, !1, 0), !0) : ea >= at.z - a2e[
				a5].z - a2f && (736 === a2e[a5].id ? (a33 = a2e[a5].ow.split(" "), window.open(a33[a33.length - 1], "_blank")) : a2e[a5].a2u && (a2e[a5].a2w && a2e[a5].a2w.em ? (a33 = a2e[a5].a2w.eF, lz = bH.eb(a33) - 10, a33 = bH.ed(
				a33) - 10, aB.ls(lz, a33, 19 + lz, 19 + a33)) : a2e[a5].a2w && a2e[a5].a2w.en ? aB.lu(a2e[a5].player, a2e[a5].a2w.lv) : (aB.lt(a2e[a5].player, 800, !1, 0), 0 <= a2e[a5].t4 && (lz = a2e[a5].t4, a2e[a5].t4 = a2e[a5]
				.player, a2e[a5].player = lz))), !0);
		return !1
	}, this.wb = function(e1, ow, id, g3, a2s, a2t, t4, a2u, a2v, a2w) {
		a2q(e1, ow, id, g3, a2s, a2t, t4, a2u, a2v, a2w)
	}, this.a36 = function(j) {
		a2q(300, j, 252, 0, t.ma, t.mX, -1, !1)
	}, this.a0a = function(id) {
		for (var a5 = a2e.length - 1; 0 <= a5; a5--) a2e[a5].id === id && (a2e[a5].e0 = 1)
	}, this.wP = function(player, id) {
		0 === id ? (aK.ih(player, 0), a38(423, 0), a2q(160, L(21, [aa.a39[player]]), 423, player, "rgb(10,220,10)", t.mX, -1, !1)) : 1 === id ? (a3A(50, a7.eQ), aK.ih(player, 1), a2q(360, L(22, [aa.a39[player]]), 0, player, t.nA, t.mX, -1, !0),
			aB.lt(player, 2700, !1, 0)) : 2 === id ? (aK.ih(player, 2), a2q(0, L(23), 0, player, "rgb(10,255,255)", t.mX, -1, !0), aB.lt(player, 2700, !1, 0)) : 3 === id ? (aK.ih(player, 2), a2q(0, L(24, [aa.a39[player]]), 0, player, t.ma, t
			.mX, -1, !0), aB.lt(player, 2700, !1, 0)) : 4 === id ? this.a3B(1, player, player) : 5 === id ? 2 !== aa.zi[player] && aW.w6(a7.eD) && (function(id, lS) {
			var a5, a3N = 0,
				eT = a2e.length;
			for (a5 = 0; a5 < eT; a5++)
				if (a2e[a5].id === id && lS <= ++a3N) return a2e.splice(a5, 1)
		}(1, 5), aZ.a3D(player) ? a2q(180, L(25, [aa.a39[player]]), 1, player, a3E(255, 200, 180), t.mX, -1, !0) : (a38(573, 0), a2q(180, L(26, [aa.a39[player]]), 573, player, t.nA, t.mX, -1, !0))) : 18 === id ? a2q(255, L(27), 18, 0, t.ma, t
			.mX, -1, !1) : 21 === id ? a2q(220, L(28), id, 0, t.ma, t.mX, -1, !1) : 22 === id ? this.a3B(2, player, player) : 59 === id && a2q(0, L(29), id, 0, t.nM, t.mX, 0, !1)
	}, this.xX = function(j) {
		a2q(200, L(30, [j]), 94, 0, t.ma, t.n6, -1, !1)
	}, this.wW = function(a3F) {
		if (a7.eD === a3F && !a7.jy)
			__fx.wins.count++, window.localStorage.setItem("fx_winCount", __fx.wins.count),
			a2q(0, "Your Win Count is now " + __fx.wins.count, 3, a3F, t.ma, t.mX, -1, !0);
		aa.gJ[a3F] && (aK.ih(a3F, 2), a7.jc < 100 ? a2q(0, L(24, [aa.a39[a3F]]), 3, a3F, t.ma, t.mX, -1, !0) : a2q(0, L(31, [aa.a39[a3F]]), 3, a3F, t.ma, t.mX, -1, !0))
	}, this.a2J = function(e6) {
		var a3H, ow, a3G = "(" + bH.eb(e6 >> 2) + ", " + bH.ed(e6 >> 2) + ")",
			a2u = !1,
			player = 0;
		aW.eO(e6) ? aW.eK(e6) ? a3G = L(32, [a3G]) : (player = aW.eL(e6), ow = L(33, [b6.uY.zO(aa.x5[player], b6.pF.qW(0, 10), 150)]) + "   ", ow = (ow += L(34, [b6.x3.a0F(aa.gX[player])]) + "   ") + L(35, [b6.x3.a0F(aa.gJ[player])]) + "   ", a7
				.ic && (a3H = bb.wZ[bb.k5[bb.eR[player]]], ow += L(36) + ": " + a3H + "   "), b6.fr.j0(player) && (ow += L(37) + ": " + a8.jq[a8.il[player]] + "   "), a3G = ow = (ow += L(38, [player]) + "   ") + L(39, [a3G]), a2u = !0) : a3G = aW
			.eY(e6) ? L(40, [a3G]) + "   #" + aW.eB(e6) : L(41, [a3G]), ba.dW = !0, a38(55, 0), a2q(220, a3G, 55, player, t.ma, t.mX, -1, a2u)
	}, this.a2L = function(a3I) {
		var kQ = bI.lB,
			player = kQ.a3J[a3I] >> 3,
			ow = (ba.dW = !0, a38(55, 0), L(42, [aa.a39[player]]) + "   ");
		a2q(220, ow += L(34, [kQ.a3K[a3I]]), 55, player, t.ma, t.mX, -1, !0)
	}, this.no = function(nb, a3L, np) {
		nb === a7.eD ? a2q(175, " " + L(43, [aa.a39[a3L]]) + ": ", 1001, a3L, a3E(200, 255, 210), t.mX, -1, !0, np) : this.a3M(nb, np)
	}, this.a3M = function(nb, np) {
		a38(1e3, 0), a2q(175, aa.a39[nb] + ": ", 1e3, nb, t.ma, "rgba(5,60,25,0.9)", -1, !0, np)
	}, this.wc = function() {
		var j;
		a7.wI ? (j = L(44), aK.wa(L(45), 2, 1, 12), a2q(0, j, 40, 0, "rgb(10,220,10)", t.mX, -1, !1)) : (j = L(46), aK.wa(L(47), 2, 0, 16), a2q(0, j, 41, 0, t.ma, t.mX, -1, !1))
	}, this.uf = function() {
		var x5 = aa.x5,
			eW = a7.data;
		a2q(300, x5[0] + " [" + a7.wV.ul(eW.ui[0]) + "] vs " + x5[1] + " [" + a7.wV.ul(eW.ui[1]) + "]", 65, 0, t.mR, "rgba(100,255,255,0.75)", -1, !1)
	}, this.a3O = function(j) {
		a2q(200, j, 0, 0, "rgb(40,255,200)", "rgba(10,60,40,0.9)", -1, !1)
	}, this.a3P = function(a3Q) {
		a2q(0, L(a3Q ? 48 : 49), 247, 0, t.nL, t.mX, -1, !1)
	}, this.un = function(uk, um, a3R) {
		var eW = a7.data,
			x5 = aa.x5;
		a2q(0, x5[0] + ": " + a7.wV.ul(eW.ui[0]) + " -> " + uk, 66, 0, t.ma, a3R[0], -1, !1), a2q(0, x5[1] + ": " + a7.wV.ul(eW.ui[1]) + " -> " + um, 66, 1, t.ma, a3R[1], -1, !1)
	}, this.o7 = function(player, id) {
		0 === id ? a3A(50, player) ? (a2q(128, L(50, [aa.a39[player]]), 52, player, a3E(180, 255, 180), t.mX, -1, !0), aZ.oo(player, 2, 255)) : a2q(384, L(51, [aa.a39[player]]), 51, player, a3E(210, 210, 255), t.mX, -1, !0) : a3A(51, player) ? (
			a2q(128, L(52, [aa.a39[player]]), 52, player, t.ma, "rgba(60,120,10,0.9)", -1, !0), aZ.oo(player, 2, 255)) : (a2q(384, L(53, [aa.a39[player]]), 50, player, t.ma, "rgba(90,90,90,0.9)", -1, !0), aZ.oo(player, 2, 96))
	}, this.oB = function(w4, target) {
		var color = a3E(210, 255, 210);
		1 < w4.length ? a2q(230, L(54, [w4.length, aa.a39[target]]), 66, target, color, t.mX, -1, !0) : a2q(230, L(55, [aa.a39[w4[0]], aa.a39[target]]), 66, w4[0], color, t.mX, target, !0)
	}, this.a3S = function(player, target) {
		a2q(230, L(56, [aa.a39[player], aa.a39[target]]), 66, player, t.ma, "rgba(75,65,5,0.9)", target, !0)
	}, this.a2C = function(id, fy) {
		a38(id, fy)
	}, this.wK = function(id, player) {
		a3A(id, void 0 === player ? a7.eQ : player)
	}, this.a3T = function(id) {
		for (var a5 = a2e.length - 1; 0 <= a5; a5--)
			if (a2e[a5].id === id) return a2e[a5];
		return null
	}, this.o2 = function(a3U, a3V, player) {
		2 !== aa.zi[a7.eD] && (a2q(200, 1 === a3U ? L(57, [aa.a39[player]]) : L(58, [a3U, aa.a39[player]]), 30, player, "rgb(190,255,190)", t.mX, -1, !0), a3V) && a2q(30, 1 === a3V ? L(59) : L(60, [a3V]), 30, 0, t.ma, t.mX, -1, !1)
	}, this.a3X = function(a3U, player) {
		2 !== aa.zi[a7.eD] && (a38(31, 0), 2 === aa.zi[player] || player >= a7.jc ? a2q(150, 1 === a3U ? L(61, [aa.a39[player]]) : L(62, [aa.a39[player], a3U]), 31, player, t.mR, "rgba(205,205,205,0.9)", -1, !0) : a2q(150, 1 === a3U ? L(63, [aa
			.a39[player]
		]) : L(64, [aa.a39[player], a3U]), 31, player, t.mR, "rgba(205,255,205,0.9)", -1, !0))
	}, this.wJ = function(bj) {
		for (var eo = ba.jZ(), a5 = 2; 0 <= a5; a5--) 0 < a2i.rC[a5] && (bj || a2i.eo[a5] < eo - 220) && this.a3d(a5)
	}, this.a3d = function(id) {
		var ow, eT = a2i.rC[id],
			player = a2i.w4[id];
		a2i.rC[id] = 0, 1 === eT ? (0 === id ? ow = L(71, [aa.a39[player], aa.a39[a2i.a2n[0]]]) : 1 === id ? ow = L(72, [aa.a39[player]]) : 2 === id ? ow = L(73, [aa.a39[player]]) : 3 === id && (ow = L(74, [aa.a39[player]])), a38(7, 0), a2q(a2i
			.lp[id], ow, 7, a2i.a2n[id], t.ma, t.mX, -1, !0)) : (ow = L(0 === id ? 75 : 1 === id ? 76 : 77, [eT]), a38(7, 0), a2q(a2i.lp[id], ow, 7, player, t.ma, t.mX, -1, !1))
	}, this.a3B = function(id, gv, t4) {
		var eo = ba.jZ(),
			eT = a2i.rC[id] + 1;
		a2i.rC[id]++, a2i.w4[id] = gv, a2i.a2n[id] = t4, 1 === eT && (a2i.eo[id] = eo), (1 === eT && (a7.wG < 32 || 2 === a7.wD) || 1 < eT && (a2i.eo[id] < eo - 140 || 2 === a7.wD)) && this.a3d(id)
	}, this.iR = function() {
		for (var hT = (hT = a2e.length - a2j) <= 1 ? 1 : hT * hT, a5 = a2e.length - 1; 0 <= a5; a5--) 0 < a2e[a5].e0 && (a2e[a5].e0 -= hT, a2e[a5].e0 <= 0) && (ba.dW = !0, a2e.splice(a5, 1));
		! function() {
			var fy, a5;
			if (128 !== a2k && !(++a2k < 128))
				for (fy = 5, a5 = af.jd - 1; 0 <= a5; a5--) 1 === aa.zi[af.jf[a5]] && 0 < fy-- && a2q(240, L(74, [aa.a39[af.jf[a5]]]), 1, af.jf[a5], t.mR, "rgba(255,255,255,0.75)", -1, !0)
		}(), this.wJ(!1)
	}, this.rE = function() {
		for (var tW, ec = uU(), a5 = a2e.length - 1; 0 <= a5; a5--) tW = ec - (a5 + 1) * j6, 50 === a2e[a5].id ? (rF.drawImage(a2e[a5].hE, at.z - a2e[a5].z - a2h - a2f, tW), rF.drawImage(a2l, at.z - a2h - a2f, tW)) : rF.drawImage(a2e[a5].hE, at
			.z - a2e[a5].z - a2f, tW)
	}
}

function c4() {
	var a3f, a3g, a3h, z, j6, font, ow;

	function a3l(a3m) {
		return a3m < 10 ? "0" + a3m : String(a3m)
	}
	this.dO = function() {
		ow = L(78)
	}, this.resize = function() {
		z = Math.floor((q.r.vH() ? .53 : .36) * at.pH), j6 = Math.floor(.065 * z), font = b6.pF.qW(1, Math.floor(.9 * j6)), a3h--, this.setTime()
	}, this.iR = function() {
		this.setTime() && (ba.dW = !0)
	}, this.setTime = function() {
		var e1 = new Date,
			a3j = e1.getUTCMinutes(),
			e1 = e1.getUTCSeconds();
		return a3g = 3600 - 60 * a3j - e1, a3g %= 900, a3f = ow + a3l(Math.floor(a3g / 60)) + ":" + a3l(a3g % 60), a3h !== (a3h = 60 * a3j + e1) && (z = aK.measureText(a3f, font), z += Math.floor(.4 * j6), !0)
	}, this.rE = function() {
		rF.lineWidth = 1 + Math.floor(j6 / 15), 7 === aU.xT() && ao.a3n() + 2 * bX.gap > .5 * (at.j6 - z) ? rF.translate(at.z - j6, Math.floor(ao.a3n() + 2 * bX.gap + z)) : rF.translate(at.z - j6, Math.floor(.5 * (at.j6 + z))), rF.rotate(-Math
			.PI / 2), rF.fillStyle = t.ma, rF.fillRect(0, 0, z, j6), rF.strokeStyle = t.mR, rF.strokeRect(0, 0, z, j6 + 10), rF.fillStyle = t.mR, rF.font = font, b6.pF.textBaseline(rF, 1), b6.pF.textAlign(rF, 1), rF.fillText(a3f, Math.floor(
			z / 2), Math.floor(.59 * j6)), rF.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function c5() {
	var a2e, a3o, a2Q, j6, a3p;

	function a3r(a5) {
		var a3t = !0,
			hO = t.ma,
			z = (a2e[a5].ik === a7.eQ ? a2e[a5].uY.fillStyle = t.mk : (aW.a3u(a2e[a5].ik), a2e[a5].uY.fillStyle = b6.color.mU(bJ.f4[0], bJ.f4[1], bJ.f4[2], .87), 400 < b6.pP.ys(bJ.f4, 0, 2) && (a3t = !1, hO = t.mR)), a2e[a5].hE.width),
			qY = (a2e[a5].uY.clearRect(0, 0, z, j6), a2e[a5].uY.fillRect(0, 0, z, j6), a2e[a5].uY.fillStyle = hO, ! function(uY, z, j6) {
				uY.fillRect(0, 0, z, 1), uY.fillRect(0, j6 - 1, z, 1), uY.fillRect(0, 0, 1, j6), uY.fillRect(z - 1, 0, 1, j6)
			}(a2e[a5].uY, z, j6), a3o + 2 * j6 < z && (a2e[a5].uY.fillRect(z - a3o - j6, 0, 1, j6), a2e[a5].uY.fillText(aa.a39[a2e[a5].ik], Math.floor((z - a3o) / 2), Math.floor(.57 * j6))), 0 !== a2e[a5].id ? 0 : j6);
		a2e[a5].uY.fillText(b6.x3.a0F(a2e[a5].il), Math.floor(z - a3o / 2 - qY), Math.floor(.57 * j6)),
			function(a5, z, qY, a3t) {
				a2e[a5].uY.fillStyle = a3t ? t.mc : t.mY;
				a3t = Math.floor(a3o * a2e[a5].il / a2e[a5].a40);
				a2e[a5].uY.fillRect(Math.floor(z - a3o - qY), j6 - a3p, a3t, a3p)
			}(a5, z, qY, a3t), 0 === a2e[a5].id ? (a3x(a5, z, a3t, hO), function(a5, z, a3t) {
				a2e[a5].uY.strokeStyle = a3t ? t.mp : t.my, a2e[a5].uY.fillRect(j6, 0, 1, j6);
				a3t = z - j6;
				a2e[a5].uY.beginPath(), a2e[a5].uY.moveTo(Math.floor(.3 * j6 + a3t), Math.floor(j6 / 2)), a2e[a5].uY.lineTo(Math.floor(j6 - .3 * j6 + 0 + a3t), Math.floor(j6 / 2)), a2e[a5].uY.stroke(), a2e[a5].uY.beginPath(), a2e[a5].uY.moveTo(
					Math.floor(j6 / 2 + a3t), Math.floor(.3 * j6)), a2e[a5].uY.lineTo(Math.floor(j6 / 2 + a3t), Math.floor(j6 - .3 * j6 + 0)), a2e[a5].uY.stroke()
			}(a5, z, a3t)) : a3x(a5, 2 * j6, a3t, hO)
	}

	function a3x(a5, z, a3t, hO) {
		a2e[a5].uY.strokeStyle = a2e[a5].a41 ? t.mi : a3t ? t.n2 : t.n3, a2e[a5].uY.fillStyle = hO, a2e[a5].uY.fillRect(z - j6, 0, 1, j6), a2e[a5].uY.lineWidth = Math.max(Math.floor(j6 / 12), 3), a2e[a5].uY.lineCap = "round";
		a3t = .35;
		z = j6 + 1, a2e[a5].uY.beginPath(), a2e[a5].uY.moveTo(Math.floor(z - a3t * j6 + 0), Math.floor(a3t * j6)), a2e[a5].uY.lineTo(Math.floor(z - j6 + a3t * j6), Math.floor(j6 - a3t * j6 + 0)), a2e[a5].uY.stroke(), a2e[a5].uY.beginPath(), a2e[a5]
			.uY.moveTo(Math.floor(z - j6 + a3t * j6), Math.floor(a3t * j6)), a2e[a5].uY.lineTo(Math.floor(z - a3t * j6 + 0), Math.floor(j6 - a3t * j6 + 0)), a2e[a5].uY.stroke()
	}

	function a4B(eT) {
		for (var il, a5 = eT - 1; 0 <= a5; a5--) il = aX.fi(a7.eD, a5), a2e[a5].il !== il && (a2e[a5].il = il, a2e[a5].a40 = il > a2e[a5].a40 ? il : a2e[a5].a40, a2e[a5].a3s = !0)
	}

	function a3q(a4D) {
		a4D.hE = document.createElement("canvas"), bN.sp.font = a2Q;
		var z = a3o;
		a4D.ik < a7.eQ && 0 === a4D.id && (z += Math.floor(bN.sp.measureText(aa.a39[a4D.ik] + "000").width)), z += j6, 0 === a4D.id && (z += j6), a4D.hE.width = z, a4D.hE.height = j6, a4D.uY = a4D.hE.getContext("2d", {
			alpha: !0
		}), a4D.uY.font = a2Q, b6.pF.textBaseline(a4D.uY, 1), b6.pF.textAlign(a4D.uY, 1)
	}

	function a47(a5) {
		return aO.a4F() ? at.z - a2e[a5].hE.width - bX.gap : aO.ea
	}

	function a48(a5) {
		return Math.floor(2 * bX.gap + (aO.a4F() ? aQ.j6 + bX.gap : 0) + aO.j6 + a5 * (1.3 * j6))
	}
	this.dO = function() {
		a2e = [], this.resize()
	}, this.resize = function() {
		a2Q = aH.a2Q, j6 = aH.fontSize + 5, j6 = Math.floor(1.25 * j6), q.r.vH() && (j6 = Math.floor(1.25 * j6)), a3p = Math.floor(.15 * j6), bN.sp.font = a2Q, a3o = Math.floor(bN.sp.measureText("02 000 000 0000").width);
		for (var a5 = a2e.length - 1; 0 <= a5; a5--) a3q(a2e[a5]), a3r(a5)
	}, this.lJ = function() {
		for (var a5 = a2e.length - 1; 0 <= a5; a5--) a2e[a5].a3s && (a2e[a5].a3s = !1, a3r(a5))
	}, this.gj = function(kl, ec) {
		if (2 !== a7.wD && 0 !== aa.lX[a7.eD] && !a7.gf && aW.w6(a7.eD))
			for (var a42, a43, a44, a45 = q.r.vH() ? j6 : 0, a46 = q.r.vH() ? Math.floor(.15 * j6) : 0, a5 = a2e.length - 1; 0 <= a5; a5--)
				if (a42 = a47(a5), a43 = a48(a5), a44 = a2e[a5].hE.width, a43 - a46 <= ec && ec <= a43 + j6 + a46) {
					if (a42 - a45 <= kl && kl <= a42 + j6 + a45) return a2e[a5].a41 || (a2e[a5].a3s = !0, a2e[a5].a41 = !0, 0 === a2e[a5].id && b4.gs.nm(a2e[a5].ik)), !0;
					if (0 === a2e[a5].id && a42 + a44 - j6 - a45 <= kl && kl <= a42 + a44 + a45) return b4.gs.h3(aL.gx(), a2e[a5].ik), !0
				} return !1
	}, this.iR = function() {
		var eT;
		0 !== aa.lX[a7.eD] && (aW.w6(a7.eD) || a7.gf) && (function(eT) {
			if (a2e.length !== eT) return 1;
			for (var a5 = eT - 1; 0 <= a5; a5--)
				if (a2e[a5].id !== aX.fc(a7.eD, a5) || a2e[a5].ik !== aX.fh(a7.eD, a5)) return 1;
			return
		}(eT = aX.fb(a7.eD)) && function(eT) {
			var a5, id, ik, en, il, a2r = [];
			loop: for (a5 = 0; a5 < eT; a5++) {
				for (id = aX.fc(a7.eD, a5), ik = aX.fh(a7.eD, a5), en = 0; en < a2e.length; en++)
					if (a2e[en].id === id && a2e[en].ik === ik) {
						a2r.push(a2e.splice(en, 1)[0]);
						continue loop
					} il = aX.fi(a7.eD, a5), a3q(il = {
					ik: ik,
					il: il,
					a40: il,
					id: id,
					a3s: !0,
					a41: !1,
					hE: null,
					uY: null
				}), a2r.push(il)
			}
			a2e = a2r
		}(eT), a4B(eT))
	}, this.a4E = function(g3) {
		for (var eT = Math.min(a2e.length, aX.fb(a7.eD)), a5 = 0; a5 < eT; a5++)
			if (a2e[a5].ik === g3) return void(a2e = [])
	}, this.rE = function() {
		if (0 !== aa.lX[a7.eD] && (aW.w6(a7.eD) || a7.gf))
			for (var a5 = a2e.length - 1; 0 <= a5; a5--) rF.drawImage(a2e[a5].hE, a47(a5), a48(a5))
	}
}

function c6() {
	var a2e, jk, a4G, a4H, j6, a2Q, fontSize, a4I, a4J, a4K, a4L, hE, uY, lk, a4M;

	function rP(a5) {
		return L(0 === a5 ? 79 : 1 === a5 ? 80 : 2 === a5 ? 81 : 82)
	}

	function a4T() {
		rF.drawImage(hE, bX.gap + (a7.ic ? bX.gap + bc.a4U() : 0), a4V + 2 * bX.gap)
	}

	function a4N() {
		hE.width = a2e[0].width + a4K, hE.height = j6 + a4K, (uY = hE.getContext("2d", {
				alpha: !0
			})).clearRect(0, 0, a2e[0].width + a4K, j6 + a4K), uY.translate(Math.floor(a4K / 2), Math.floor(a4K / 2)), uY.lineWidth = a4K, uY.fillStyle = 1 === a2e[0].a4S ? t.mf : t.mX, a4W(), uY.fill(), uY.strokeStyle = 1 === a2e[0].a4S ? t.mR : t
			.ma, a4W(), uY.stroke(), b6.pF.textAlign(uY, 1), b6.pF.textBaseline(uY, 1), uY.fillStyle = 1 === a2e[0].a4S ? t.mR : t.ma, uY.font = a2Q[0], uY.fillText(rP(a2e[0].a4R), Math.floor(a2e[0].width / 2), Math.floor(.72 * a4I[0] * j6)), uY
			.font = a2Q[1], uY.fillText(a2e[0].ow, Math.floor(a2e[0].width / 2), Math.floor((a4I[0] + .48 * a4I[1]) * j6))
	}

	function a4W() {
		uY.beginPath(), uY.moveTo(a4L, 0), uY.lineTo(a2e[0].width - a4L, 0), uY.lineTo(a2e[0].width, a4L), uY.lineTo(a2e[0].width, j6 - a4L), uY.lineTo(a2e[0].width - a4L, j6), uY.lineTo(a4L, j6), uY.lineTo(0, j6 - a4L), uY.lineTo(0, a4L), uY
			.closePath()
	}
	this.dO = function() {
		jk = 4, a4G = a4H = lk = 0, a2e = [], a2Q = new Array(2), fontSize = new Array(2), (a4I = new Array(2))[0] = .3, a4I[1] = .7, a4J = new Array(4), hE = document.createElement("canvas"), a4M = ba.e0 + 2e3, this.resize()
	}, this.resize = function() {
		var a5, z;
		for (j6 = Math.floor((q.r.vH() ? .0725 : .058) * at.pH), fontSize[0] = Math.floor(.85 * a4I[0] * j6), fontSize[1] = Math.floor(.85 * a4I[1] * j6), a2Q[0] = b6.pF.qW(1, fontSize[0]), a2Q[1] = b6.pF.qW(1, fontSize[1]), a5 = a4J.length -
			1; 0 <= a5; a5--) a4J[a5] = this.measureText(rP(a5) + "000", a2Q[0]);
		if (a4K = Math.floor(1 + .05 * j6), a4L = Math.floor(.2 * j6), 0 < a2e.length) {
			for (a5 = a2e.length - 1; 0 <= a5; a5--) z = this.measureText(a2e[a5].ow + "00", a2Q[1]), a2e[a5].width = z < a4J[a5] ? a4J[a5] : z;
			a4N()
		}
	}, this.iR = function() {
		0 !== jk && (4 === jk ? ba.e0 > a4M && (jk = 0, 1 === a7.wD) && aK.wa(bN.sj.sk[bN.e8].name, 3, 1, 9) : (1 === jk ? (0 === a4G && (a4N(), a4G = 1e-4), 1 <= (a4G += .002 * (ba.e0 - lk)) && (a4H = 0, jk = 2, a4G = 1), ba.dW = !0) : 2 ===
			jk ? ((a4H += (ba.e0 - lk) / 1e3) > a2e[0].lp || 1 < a4H && 1 < a2e.length) && (jk = 3) : 3 === jk && ((a4G -= .002 * (ba.e0 - lk)) <= 0 && (a4G = 0, a2e.shift(), jk = 0 < a2e.length ? 1 : 0), ba.dW = !0), lk = ba.e0))
	}, this.measureText = function(ow, a2Q) {
		return rF.font = a2Q, Math.floor(rF.measureText(ow).width)
	}, this.ih = function(a4Q, a5) {
		this.wa(aa.a39[a4Q], a5, 1, 0 === a5 ? 3 : 7)
	}, this.wa = function(ow, a4R, a4S, lp) {
		var z;
		ow.length && (z = (z = this.measureText(ow + "00", a2Q[1])) < a4J[a4R] ? a4J[a4R] : z, a2e.push({
			ow: ow,
			width: z,
			a4R: a4R,
			a4S: a4S,
			lp: lp
		}), 0 === jk) && (a4G = 0, jk = 1, lk = ba.e0)
	}, this.rE = function() {
		0 !== jk && 0 !== a4G && (a4G < 1 ? (rF.globalAlpha = a4G, a4T(), rF.globalAlpha = 1) : a4T())
	}
}

function cg() {
	var j6, hE, uY, a4X, a4Y, a4Z, a4a, a3s, a4b, a4c, a4d, a4e, a3Q = !1,
		zC = (this.ur = !1, this.z = 0, new Array(2));

	function lK() {
		var z = aq.z,
			kQ = (a3s = !1, uX(uY, z, j6), Math.floor(z / 2));
		1 === a4X ? (uY.fillStyle = t.mr, uY.fillRect(kQ, 0, kQ, j6)) : -1 === a4X && (uY.fillStyle = t.n4, uY.fillRect(0, 0, kQ, j6)), uZ(uY, z, j6, 2);
		var kQ = (kQ = Math.floor(.25 * j6)) < 2 ? 2 : kQ,
			a3Z = (uY.fillStyle = t.mg, Math.floor((j6 - 4) * a4Y[1] / a4Z[1]));
		0 < a3Z && uY.fillRect(2, j6 - 2 - a3Z, kQ, a3Z), 0 < (a3Z = Math.floor((j6 - 4) * a4Y[0] / a4Z[0])) && uY.fillRect(z - 2 - kQ, j6 - 2 - a3Z, kQ, a3Z);
		kQ = (kQ = Math.floor(j6 / 8)) < 2 ? 2 : kQ, ub(uY, Math.floor(.4 * j6), 0, j6, kQ, .5, !1), ub(uY, Math.floor(z - 1.4 * j6), 0, j6, kQ, .5, !0), a3Z = 1.1 * j6 / zC[0].width;
		uY.imageSmoothingEnabled = !0, uY.setTransform(a3Z, 0, 0, a3Z, (z - a3Z * zC[0].width) / 2, -.05 * j6), uY.drawImage(zC[+a3Q], 0, 0), uY.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a4f() {
		a4d = ba.jZ(), a3s = !0, a4b = a4X = 0, a4a = [], aq.ur = !1, aH.wK(247), a4Y[0] = a4Y[1] = 0, aH.a0a(673)
	}

	function uU() {
		return aL.a32(aH.a2y()) ? aL.ec - j6 - bX.gap : b7.a32(aH.a31()) ? b7.uU() - j6 - bX.gap : at.j6 - j6 - bf.a1n() * bX.gap
	}
	this.dP = function() {
		for (var a5 = 0; a5 < 2; a5++) zC[a5] = b6.hE.v5(aV.get(3), 8 - a5, t.nT), zC[a5] = b6.hE.zE(zC[a5])
	}, this.dO = function() {
		a4d = -140, a4c = 0, a4e = -1, this.ur = !1, a3s = a3Q = !1, a4Y = [a4X = a4b = 0, 0], a4Z = [1, 1], a4a = [], this.resize()
	}, this.resize = function() {
		j6 = aL.j6, this.z = 4 * j6, (hE = document.createElement("canvas")).width = this.z, hE.height = j6, uY = hE.getContext("2d", {
			alpha: !0
		}), lK()
	}, this.lJ = function() {
		a3s && lK()
	}, this.gj = function(ea, ec) {
		var m0;
		return !!this.ur && !(ea < at.z - this.z - bX.gap || ec < (m0 = uU()) || m0 + j6 < ec || (a7.gf || b4.gs.ns(ea > at.z - bX.gap - this.z / 2 ? 1 : 0), 0))
	}, this.iR = function() {
		if (0 < a4c) 0 === --a4c && a4f();
		else if (this.ur) 180 == --a4b && 3 * a4Y[0] < a4Z[0] ? a4f() : a4Y[0] >= a4Z[0] ? a3Q ? bM.vr.w8() : bM.vr.wC() : a4Y[1] >= a4Z[1] ? a4c = 4 : a4b <= 0 && a4f();
		else if (function() {
				if (0 <= a4e) return 1;
				return
			}()) {
			a3Q = ab.a4i(), aH.wb(250, L(83, [aa.a39[a4e]]), 673, a4e, t.ma, t.mX, -1, !0), a4e = -1, aH.a0a(257), aH.a3P(a3Q), this.ur = !0, a3s = !0, a4b = 360;
			for (var ew, e1 = 0, a5 = af.jd - 1; 0 <= a5; a5--) aW.w6(af.jf[a5]) && (e1 += aa.gJ[af.jf[a5]]);
			a3Q ? a4Z[0] = Math.max(bG.ev(3 * e1, 4), 1) : a7.ic ? 9 === a7.jw && 8 === bb.k5[bc.ku()] ? a4Z[0] = Math.max(e1, 1) : (ew = bG.ev(100 * bc.wn(), a7.jM), ew = bG.on(200 - 2 * ew, 50, 100), ew = bG.ev(ew * e1, 100), a4Z[0] = Math.max(
				ew, 1)) : a4Z[0] = Math.max(bG.ev(3 * e1, 5), 1), a4Z[1] = Math.max(e1 - a4Z[0], 1)
		}
	}, this.wE = function() {
		this.ur && a4Y[0] < a4Z[0] && a4f()
	}, this.op = function(player, a4l) {
		var a5;
		if (this.ur) {
			for (a5 = a4a.length - 1; 0 <= a5; a5--)
				if (a4a[a5] === player) return;
			var a4m = L(a4l ? 84 : 85, [aa.a39[player]]);
			aH.wb(450, a4m, 257, player, a4l ? t.mp : t.n1, t.mX, -1, !0), a4a.push(player), a3s = !0, a4m = a7.jy ? a4Z[0] : aa.gJ[player], a4l ? a4Y[0] += a4m : a4Y[1] += a4m, player === a7.eD && (a4X = a4l ? 1 : -1)
		}
	}, this.rE = function() {
		var ec;
		this.ur && (ec = uU(), rF.drawImage(hE, at.z - this.z - bX.gap, ec))
	}, this.oq = function(player) {
		if (!a7.jy) {
			if (ba.jZ() < a4d + 140) return !1;
			if (ba.jZ() < 535) return !1
		}
		return 0 === a4b && !!b6.fr.gh(1) && !(!b6.fr.gi(player) || 10 <= jN[player] && !b6.fr.a01(player, 9))
	}, this.nx = function(player) {
		a4e = player
	}
}

function c7() {
	var z, ea, a4n, hE, uY, ur, ht, a0R, a2Q, a3s, a4o = 11 / 12;

	function a4q() {
		var a3z = Math.floor(ht * (z - 2 * a4n)),
			a4t = 1 + Math.floor(.0625 * aL.j6),
			a4u = 1 + Math.floor(.3 * aL.j6),
			a4v = Math.floor(.55 * aL.j6);
		uY.clearRect(0, 0, z, aL.j6), uY.fillStyle = t.mW, uY.fillRect(0, 0, a4n, aL.j6), uY.fillRect(a4n + a3z, 0, z - a4n - a3z, aL.j6), uY.fillStyle = ht < 1 / 3 ? "rgba(" + Math.floor(3 * ht * 130) + ",130,0,0.85)" : ht < 2 / 3 ? "rgba(130," + (
				130 - Math.floor(3 * (ht - 1 / 3) * 130)) + ",0,0.85)" : "rgba(130,0," + Math.floor(3 * (ht - 2 / 3) * 130) + ",0.85)", uY.fillRect(a4n, 0, a3z, aL.j6), uY.fillStyle = t.ma, uY.fillRect(0, 0, z, 1), uY.fillRect(0, aL.j6 - 1, z, 1), uY
			.fillRect(0, 0, 1, aL.j6), uY.fillRect(a4n, 0, 1, aL.j6), uY.fillRect(a4n + a3z, 0, 1, aL.j6), uY.fillRect(z - a4n, 0, 1, aL.j6), uY.fillRect(z - 1, 0, 1, aL.j6), uY.fillRect(Math.floor(.25 * aL.j6) + a4u, Math.floor((aL.j6 - a4t) / 2),
				aL.j6 - 2 * a4u, a4t), uY.fillRect(Math.floor(z - 1.25 * aL.j6) + a4u, Math.floor((aL.j6 - a4t) / 2), aL.j6 - 2 * a4u - a4u % 2, a4t), uY.fillRect(Math.floor(z - 1.25 * aL.j6) + Math.floor((aL.j6 - a4t) / 2), a4u, a4t, aL.j6 - 2 *
				a4u - a4u % 2), a0R = b6.fr.hs(a7.eD, aL.gx()), uY.fillText(b6.x3.a0F(a0R) + " (" + b6.x3.a0K(100 * ht, +(ht < .1)) + ")", Math.floor(.5 * z), a4v)
	}
	this.setAbsolutePercentage = function(newPercentage) {
		ht = newPercentage;
	};
	__fx.keybindFunctions.setAbsolute = this.setAbsolutePercentage;
	__fx.keybindFunctions.setRelative = (arg1) => aL.yN(arg1);

	function a50(yn) {
		return !(1 < yn && 1 === ht || (1 < yn && yn * ht - ht < 1 / 1024 ? yn = (ht + 1 / 1024) / ht : yn < 1 && ht - yn * ht < 1 / 1024 && (yn = (ht - 1 / 1024) / ht), ht = bG.on(ht * yn, 1 / 1024, 1), a4q(), 0))
	}

	function a51(kl) {
		return ht !== (ht = bG.on((kl - ea - a4n) / (z - 2 * a4n), 1 / 1024, 1)) && (a4q(), !0)
	}
	this.ec = 0, this.gk = !1, this.dO = function() {
		ur = !a7.gr && !a7.gf, a3s = !1, ht = .5, a0R = 0, this.gk = !1, this.resize()
	}, this.resize = function() {
		q.r.vH() && at.z < .8 * at.j6 ? (this.j6 = Math.floor(.066 * at.pH), z = at.z - 4 * bX.gap - this.j6) : (z = Math.floor((q.r.vH() ? .65 : .389) * at.pH), z += 12 - z % 12, this.j6 = Math.floor(z / 12)), a4n = Math.floor(3 * this.j6 / 2),
			a2Q = b6.pF.qW(1, Math.floor(.5 * this.j6)), (hE = document.createElement("canvas")).width = z, hE.height = this.j6, (uY = hE.getContext("2d", {
				alpha: !0
			})).font = a2Q, b6.pF.textBaseline(uY, 1), b6.pF.textAlign(uY, 1), this.a4p(), a4q()
	}, this.a4p = function() {
		ea = q.r.vH() && at.z < .8 * at.j6 ? this.j6 + 3 * bX.gap : Math.floor((at.z - z) / 2), this.ec = at.j6 - this.j6 - bf.a1n() * bX.gap
	}, this.lJ = function() {
		a3s && (a3s = !1, a4q())
	}, this.ur = function() {
		return !(!ur || aG.gg && ea < Math.floor(bX.gap + 5.5 * this.j6))
	}, this.a32 = function(a4w) {
		return !!this.ur() && ea + z > at.z - a4w - bX.gap
	}, this.a0Y = function() {
		ur = !a7.gf
	}, this.a4f = function() {
		ur = !1
	}, this.gx = function() {
		return bG.on(Math.floor(1024 * ht + .5) - 1, 0, 1023)
	}, this.yK = function(kl, km) {
		return this.ur() && ea < kl && kl < ea + z && km > this.ec
	}, this.gj = function(kl, km) {
		return !!this.ur() && !!aL.yK(kl, km) && (aM.m4 = !1, function(wk, kl, km) {
			if (function(kl, km) {
					return ea < kl && kl < ea + a4n && km > aL.ec
				}(kl, km)) return a50(a4o);
			if (function(kl, km) {
					return ea + z - a4n < kl && kl < ea + z && km > aL.ec
				}(kl, km)) return a50(1 / a4o);
			return wk.gk = !0, a51(kl)
		}(this, kl, km) && (ba.dW = !0), !0)
	}, this.yN = function(mB) {
		0 !== a7.wD && this.ur() && a50(mB) && (ba.dW = !0)
	}, this.xs = function(deltaY) {
		var mB;
		return !(0 === deltaY || !this.ur()) && a50(mB = 0 < deltaY ? (mB = 400 / (400 + deltaY)) < a4o ? a4o : mB : 1 / a4o < (mB = (400 - deltaY) / 400) ? 1 / a4o : mB)
	}, this.xp = function(kl) {
		return !!this.gk && a51(kl)
	}, this.yG = function() {
		this.gk = !1
	}, this.iR = function() {
		this.ur() && a0R !== b6.fr.hs(a7.eD, this.gx()) && (a3s = !0)
	}, this.rE = function() {
		this.ur() && rF.drawImage(hE, ea, this.ec)
	}
}

function cq() {
	var hE, uY, a52, font, a53 = 0,
		a54 = !1,
		a55 = [10, 5, 3, 2, 1.5, 1, .75, .5, .25],
		a56 = 5;

	function a5C() {
		if (a54) {
			var a5, eT = a55.length,
				a4v = Math.floor(.5 * a52.j6),
				j6 = eT * a4v,
				ea = Math.floor(Math.floor(a52.ea) + .3 * a52.z - .5),
				ec = Math.floor(Math.floor(a52.ec) - j6),
				z = Math.floor(.4 * a52.z + 2.5);
			for (rF.fillStyle = t.mW, rF.fillRect(ea, ec, z, j6), rF.fillStyle = t.mv, rF.fillRect(ea, ec + a56 * a4v, z, a4v), rF.fillStyle = t.ma, rF.fillRect(ea, ec, 2, j6), rF.fillRect(ea, ec, z, 2), rF.fillRect(ea + z - 2, ec, 2, j6), a5 =
				1; a5 < eT; a5++) rF.fillRect(ea, ec + a5 * a4v, z, 2);
			for (rF.fillStyle = t.ma, b6.pF.textAlign(rF, 1), b6.pF.textBaseline(rF, 1), rF.font = b6.pF.qW(0, .6 * a4v), ea += .5 * z, a5 = 0; a5 < eT; a5++) rF.fillText(a5K(a5), ea, ec + (a5 + .6) * a4v)
		}
		rF.drawImage(hE, Math.floor(a52.ea), Math.floor(a52.ec))
	}

	function lK(wk) {
		var ea, lz, m0, a4v;
		uY.clearRect(0, 0, Math.floor(a52.z), Math.floor(a52.j6)), uY.fillStyle = t.mW, uY.fillRect(0, 0, Math.floor(a52.z), Math.floor(a52.j6)), a7.m2 && (uY.fillStyle = t.mv, uY.fillRect(0, 0, Math.floor(.3 * a52.z), Math.floor(a52.j6))), uY
			.fillStyle = t.ma, uY.fillText("Hide UI", .15 * a52.z, .5 * a52.j6), uY.fillRect(Math.floor(.3 * a52.z - .5), 0, 2, Math.floor(a52.j6)), ea = .5 * a52.z, uY.fillText("Replay Speed", ea, .31 * a52.j6), uY.fillText(a5K(a56), ea, .69 * a52
				.j6), uY.fillRect(Math.floor(.7 * a52.z - .5), 0, 2, Math.floor(a52.j6)), wk.a1F ? (ea = Math.floor(.02 * a52.z), wk = Math.floor(.025 * a52.z), lz = Math.floor(.85 * a52.z - ea - .5 * wk), m0 = Math.floor(.25 * a52.j6), a4v = Math
				.floor(a52.j6) - 2 * m0, uY.fillRect(lz, m0, ea, a4v), uY.fillRect(lz + ea + wk, m0, ea, a4v)) : function() {
				var z = Math.floor(.46 * a52.j6),
					j6 = Math.floor(.23 * a52.j6),
					ea = Math.floor(.85 * a52.z - .5 * z + z / 12),
					ec = Math.floor(.5 * a52.j6 - j6);
				uY.beginPath(), uY.moveTo(ea, ec), uY.lineTo(ea + z, ec + j6), uY.lineTo(ea, ec + (j6 << 1)), uY.fill()
			}(), uY.fillRect(0, 0, Math.floor(a52.z), 2), uY.fillRect(0, 0, 2, Math.floor(a52.j6)), uY.fillRect(0, Math.floor(a52.j6) - 2, Math.floor(a52.z), 2), uY.fillRect(Math.floor(a52.z - 2), 0, 2, Math.floor(a52.j6))
	}

	function a5K(a5) {
		return 5 === a5 ? "Normal" : "" + a55[a5]
	}
	this.a1F = !1, this.dO = function() {
		a7.gf && (a56 = 5, this.a1F = !1, a54 = !1, a52 = new pn([.3, .3 / 6], [.5, 1]), this.resize())
	}, this.a57 = function() {
		return a55[a56]
	}, this.uU = function() {
		return a52.ec
	}, this.a32 = function(a4w) {
		return !!a7.gf && a52.ea + a52.z > at.z - a4w - bX.gap
	}, this.resize = function() {
		a7.gf && (a52.resize(), a52.ec -= (bf.a1n() - 1) * bX.gap, font = b6.pF.qW(0, .3 * a52.j6), (hE = document.createElement("canvas")).width = Math.floor(a52.z), hE.height = Math.floor(a52.j6), (uY = hE.getContext("2d", {
			alpha: !0
		})).font = font, b6.pF.textAlign(uY, 1), b6.pF.textBaseline(uY, 1), lK(this))
	}, this.yQ = function(a58) {
		0 === a7.wD || m.ur() || a58 !== a7.m2 && (a7.m2 = a58, bc.resize(), ba.dW = !0, a7.gf) && (a53 = ba.e0 + 2e3, lK(this))
	}, this.gj = function(ea, ec) {
		if (!a7.gf) return !1;
		if (ea < a52.ea || ec < a52.ec || ea > a52.ea + a52.z) return a54 && function(wk, ea, ec) {
			var eT = a55.length,
				a4v = Math.floor(.5 * a52.j6),
				j6 = eT * a4v,
				lz = Math.floor(Math.floor(a52.ea) + .3 * a52.z - .5),
				j6 = Math.floor(Math.floor(a52.ec) - j6),
				z = Math.floor(.4 * a52.z + 2.5);
			return a54 = !1, ba.dW = !0, ea < lz || lz + z < ea || ec < j6 || (a56 = a5B(0, Math.floor((ec - j6) / a4v), eT - 1), lK(wk)), !0
		}(this, ea, ec);
		if ((ea -= a52.ea) < .3 * a52.z) a54 = !1, this.yQ(!a7.m2);
		else {
			if (ea < .7 * a52.z) return a54 = !a54, ba.dW = !0;
			this.yS(!1)
		}
		return !0
	}, this.yS = function(a5A) {
		2 === a7.wD ? (this.yQ(!1), m.n(3)) : (a54 = !1, this.a1F = !this.a1F, this.a1F ? (aG.gg && aG.yR(), q.r.setState(1)) : a5A || aG.a2W(), ba.dW = !0, lK(this))
	}, this.yV = function() {
		this.a1F = !1, aG.a2W(), ba.dW = !0, lK(this)
	}, this.y8 = function(ea, ec) {
		return !!a7.m2 && (0 <= aG.gj(ea, ec) || (a7.gf ? ((ba.e0 > a53 || !this.gj(ea, ec)) && aM.gj(ea, ec), ba.dW = !0, a53 = ba.e0 + 2e3) : aM.gj(ea, ec)), !0)
	}, this.iR = function() {
		a7.gf && a7.m2 && ba.e0 > a53 - 1e3 && ba.e0 < a53 && (ba.dW = !0)
	}, this.wL = function() {
		a7.gf && (this.a1F = !1, ba.dW = !0, lK(this))
	}, this.rE = function() {
		if (a7.gf) {
			if (a7.m2) {
				if (ba.e0 > a53) return;
				if (ba.e0 > a53 - 1e3) return rF.globalAlpha = a5B(0, (1e3 - (ba.e0 - (a53 - 1e3))) / 1e3, 1), a5C(), void(rF.globalAlpha = 1)
			}
			a5C()
		}
	}
}

function c8() {
	var a5L, a5M, z, ea, ec, a5N, a5O;
	this.dO = function() {
		a5L = new Array(2), a5M = new Array(2), this.m4 = !1, a5O = a5N = hw = hu = 0, hv = 1, this.resize()
	}, this.resize = function() {
		z = (z = Math.floor((q.r.vH() ? .072 : .0502) * at.pH)) < 8 ? 8 : z;
		for (var a5 = 1; 0 <= a5; a5--) a5L[a5] = document.createElement("canvas"), a5L[a5].width = z, a5L[a5].height = z, a5M[a5] = a5L[a5].getContext("2d", {
			alpha: !0
		});
		this.a4p(),
			function() {
				for (var a5d = Math.floor(1 + z / 20), a5 = 1; 0 <= a5; a5--) a5M[a5].clearRect(0, 0, z, z), a5M[a5].fillStyle = t.mT, a5M[a5].beginPath(), a5M[a5].arc(z / 2, z / 2, z / 2 - a5d, 0, 2 * Math.PI), a5M[a5].fill(), a5M[a5]
					.lineWidth = a5d, a5M[a5].fillStyle = t.ma, a5M[a5].strokeStyle = t.ma, a5M[a5].beginPath(), a5M[a5].arc(z / 2, z / 2, z / 2 - a5d, 0, 2 * Math.PI), a5M[a5].stroke(), ub(a5M[a5], 0, 0, z, a5d, .3, 0 === a5)
			}()
	}, this.uT = function() {
		return -hu / hv
	}, this.uU = function() {
		return -hw / hv
	}, this.mF = function(a5S, hc) {
		hu = hv * a5S - hc
	}, this.mG = function(a5T, hd) {
		hw = hv * a5T - hd
	}, this.gj = function(a5R, a33) {
		return a7.m2 || ! function(a5R, a33) {
			return Math.pow(a5R - (ea + z / 2), 2) + Math.pow(a33 - (ec + z / 2), 2) < z * z / 4 || Math.pow(a5R - (ea + z / 2), 2) + Math.pow(a33 - (ec + 2 * z), 2) < z * z / 4
		}(a5R, a33) || be.dh.data[8].value ? (aB.mI() && (this.m4 = !0, a5N = a5R, a5O = a33), !1) : a33 < ec + 1.25 * z ? this.xs(Math.floor(at.z / 2), Math.floor(at.j6 / 2), -200) : this.xs(Math.floor(at.z / 2), Math.floor(at.j6 / 2), 200)
	}, this.xp = function(a5R, a33) {
		var a5U, a5V, hf, hi;
		return !aB.mI() || (a5U = hu, a5V = hw, hu += hf = a5N - a5R, hw += hi = a5O - a33, aZ.xp(hf, hi), this.a5W(), a5N = a5R, a5O = a33, a5U !== hu) || a5V !== hw
	}, this.xs = function(kl, km, deltaY) {
		var mB;
		if (aB.mI()) {
			if (0 < deltaY) mB = (mB = 500 / (500 + deltaY)) < .5 ? .5 : mB;
			else {
				if (!(deltaY < 0)) return !1;
				mB = 2 < (mB = (500 - deltaY) / 500) ? 2 : mB
			}
			this.a5X(kl, km, mB), ba.dW = !0
		}
		return !0
	}, this.a5X = function(ea, ec, e6) {
		var yn;
		e6 = yn = (yn = 1024 < (yn = e6) * hv ? 1024 / hv : yn) * hv < .125 ? .125 / hv : yn, aZ.zoom(e6, ea, ec),
			function(yn, kl, km) {
				hv *= yn, hu = (hu + kl) * yn - kl, hw = (hw + km) * yn - km, aM.a5W()
			}(e6, ea, ec)
	}, this.a5W = function() {
		var a5a = at.z / 16,
			hM = 0,
			a5b = at.j6 / 16,
			hN = 0;
		hu < -at.z + a5a && (hM = -at.z + a5a - hu), hu > hv * bN.ee - a5a && (hM = hv * bN.ee - a5a - hu), hw < -at.j6 + a5b && (hN = -at.j6 + a5b - hw), hw > hv * bN.ef - a5b && (hN = hv * bN.ef - a5b - hw), hu += hM, hw += hN, bV.mH(), aZ.a5c(
			hM, hN)
	}, this.a4p = function() {
		ea = at.z - z - bX.gap, ec = Math.floor(at.j6 / 2 - 1.25 * z)
	}, this.rE = function() {
		be.dh.data[8].value || (rF.drawImage(a5L[0], ea, ec), rF.drawImage(a5L[1], ea, Math.floor(ec + 3 * z / 2)))
	}
}

function c9() {
	var fC, a5e, a5f, a5g, gap, a5h, a5i, a5j, a5k, a5l, a2Q, a5m, ga, a5n, a3z, a5o, a5p, a5q;

	function a5u() {
		a5g = Math.floor(.2 * (q.r.vH() ? .07 : .035) * at.pH), a5g = a30(q.r.vH() ? 3 : 1, a5g);
		var a5x = at.z / (fC.length + gap);
		a5g = a5g < a5x ? a5x : a5g, a3z = Math.floor((1 - gap) * a5g), a5e = 0, a5y()
	}

	function a5y() {
		a5e = (a5e = a5e < -20 ? -20 : a5e) > (fC.length - 15) * a5g ? (fC.length - 15) * a5g : a5e, a5i = Math.floor(a5e / a5g), a5j = (a5j = a5i + Math.floor(at.z / a5g)) > fC.length - 1 ? fC.length - 1 : a5j, a5i = (a5i = a5j < a5i ? a5j : a5i) <
			0 ? 0 : a5i;
		var kQ = a5j;
		a5h = a5f / fC[kQ];
		for (var a5 = a5j - 1; a5i <= a5; a5--) fC[a5] > fC[kQ] && (kQ = a5, a5h = a5f / Math.pow(fC[a5], a5n))
	}

	function a61(ea) {
		ea = Math.floor((a5e + at.z - ea - gap * a5g) / a5g);
		return (ea = ea < -1 ? -1 : -1 === ea ? 0 : ea > fC.length - 1 ? -1 : ea) !== a5k && (a5k = ea, -1 === a5o && 0 === a5k && aN.a5r && (a5o = setInterval(a62, 100)), 1)
	}

	function a63(a5) {
		var a3p = Math.floor(a5h * Math.pow(fC[a5], a5n));
		rF.fillRect(a5e + at.z - (a5 + 1) * a5g, at.j6 - a3p, a3z, a3p)
	}

	function a62() {
		var g3;
		0 !== (a5k = 8 === aU.xT() ? -1 : a5k) ? (a5p = (new Date).getTime(), clearInterval(a5o), a5o = -1) : (g3 = fC[1] / 864e3, -1 !== a5p && (g3 += ((new Date).getTime() - a5p) * fC[1] / 864e5, a5p = -1), 0 < g3 && (fC[0] += Math.floor(g3), ba
			.dW = !0))
	}
	this.a5r = !1, this.dO = function() {
		a5p = a5o = -1, a5k = -(a5n = 1), this.a5s = !1, ga = 0, a5m = new Date, a5e = 0, gap = .3, (a5q = []).push({
			fy: "Plateau A",
			eT: 0,
			e: 57
		}), a5q.push({
			fy: "Max A",
			eT: 1,
			e: 1
		}), a5q.push({
			fy: "Black Friday",
			eT: 15,
			e: 15
		}), a5q.push({
			fy: "Max B",
			eT: 19,
			e: 19
		}), a5q.push({
			fy: "Max C",
			eT: 44,
			e: 44
		}), a5q.push({
			fy: "First Android Version",
			eT: 58,
			e: 58
		}), a5q.push({
			fy: "Max D",
			eT: 67,
			e: 67
		}), a5q.push({
			fy: "The iFrame Explosion",
			eT: 98,
			e: 99
		}), a5q.push({
			fy: "The 155-Day Uptrend",
			eT: 58,
			e: 213
		}), a5q.push({
			fy: "Max E",
			eT: 213,
			e: 213
		}), a5q.push({
			fy: "Plateau B",
			eT: 214,
			e: 259
		}), a5q.push({
			fy: "Turbulent Times",
			eT: 260,
			e: 344
		}), a5q.push({
			fy: "Max F",
			eT: 262,
			e: 262
		}), a5q.push({
			fy: "Max G",
			eT: 282,
			e: 282
		}), a5q.push({
			fy: "Max H",
			eT: 333,
			e: 333
		}), a5q.push({
			fy: "The 19-Day Downtrend",
			eT: 283,
			e: 301
		}), a5q.push({
			fy: "Plateau C",
			eT: 345,
			e: 385
		}), a5q.push({
			fy: "The Alliance Ascent",
			eT: 386,
			e: 395
		}), a5q.push({
			fy: "Max I",
			eT: 395,
			e: 395
		}), a5q.push({
			fy: "First iOS Version",
			eT: 411,
			e: 411
		}), a5q.push({
			fy: "Plateau D",
			eT: 396,
			e: 453
		}), a5q.push({
			fy: "The TikTok Revolution",
			eT: 454,
			e: 470
		}), a5q.push({
			fy: "Max J",
			eT: 456,
			e: 456
		}), a5q.push({
			fy: "Max K",
			eT: 472,
			e: 472
		}), a5q.push({
			fy: "Max L",
			eT: 478,
			e: 478
		}), a5q.push({
			fy: "YT Drew",
			eT: 471,
			e: 485
		}), a5q.push({
			fy: "Plateau E",
			eT: 485,
			e: 600
		}), a5q.push({
			fy: "Uptrend A",
			eT: 600,
			e: 613
		}), a5q.push({
			fy: "Max M",
			eT: 613,
			e: 613
		}), a5q.push({
			fy: "Downtrend A",
			eT: 614,
			e: 635
		}), a5q.push({
			fy: "Plateau F",
			eT: 636,
			e: 737
		}), a5q.push({
			fy: "End of Record",
			eT: 738,
			e: 738
		}), fC = [208644377, 208644377, 208644377, 206964709, 205156594, 250680803, 249089835, 234476552, 252346209, 263196406, 270821533, 291436400, 294907103, 288866179, 297960890, 310165928, 323215738, 326005712, 312078872, 282668674,
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
		a5f = Math.floor(.15 * at.j6), a5l = (a5l = Math.floor((q.r.vH() ? .018 : .0137) * at.pH)) < 2 ? 2 : a5l, a2Q = b6.pF.qW(1, a5l), a5u()
	}, this.a5v = function(a5w) {
		var a5;
		for (this.a5r = !0, a5 = 0; a5 < a5w.length; a5++) fC.unshift(a5w[a5]);
		a5u(), ba.dW = !0
	}, this.a5z = function() {
		a5y()
	}, this.xp = function(ea, ec) {
		ec > at.j6 - .6 * a5f ? this.a5s ? ea !== ga && (a5e += ea - ga, ga = ea, a5y(), a61(ea), this.a5s = -1 !== a5k, ba.dW = !0) : a61(ea) && (ba.dW = !0) : this.yE()
	}, this.yE = function() {
		-1 !== a5k && (this.a5s = !1, a5k = -1, ba.dW = !0)
	}, this.xs = function(ea, deltaY) {
		-1 !== a5k && (a5e += Math.floor(deltaY), a5y(), a61(ea), ba.dW = !0)
	}, this.gj = function(ea, ec) {
		this.xp(ea, ec), -1 !== a5k && (ga = ea, this.a5s = !0)
	}, this.yF = function() {
		-1 !== a5k && (this.a5s = !1)
	}, this.rE = function() {
		rF.fillStyle = t.md;
		for (var a65, month, e1, qZ, a68, a69, m0, a6A, a6B, a5 = a5j; a5i <= a5; a5--) a63(a5);
		this.a5r && 0 === a5i && (rF.fillStyle = t.n4, a63(0)), -1 !== a5k && (rF.fillStyle = t.mc, a63(a5k)), -1 !== a5k && (rF.font = a2Q, b6.pF.textBaseline(rF, 2), (e1 = new Date).setTime(a5m.getTime() - 1e3 * a5k * 60 * 60 * 24), month =
			"month", a65 = "day", "undefined" != typeof Intl && (month = new Intl.DateTimeFormat("en-US", {
				month: "long"
			}).format(e1), a65 = new Intl.DateTimeFormat("en-US", {
				weekday: "long"
			}).format(e1)), a65 = a65 + ", " + e1.getUTCDate() + " " + month + " " + e1.getFullYear(), month = 1 === fC[a5k] ? L(86) : L(87), month = b6.x3.a0F(fC[a5k]) + " " + month, e1 = Math.floor(rF.measureText(a65).width), qZ = Math
			.floor(rF.measureText(month).width), a68 = Math.floor(.5 * (e1 + a5l)), a69 = (a69 = a5e + at.z - (a5k + 1) * a5g) < a68 ? a68 : a69 > at.z - a68 ? at.z - a68 : a69, m0 = at.j6 - Math.floor(a5h * Math.pow(fC[a5k], a5n)), a6A =
			Math.floor(1.1 * a5l), a6B = m0 > at.j6 - a6A ? at.j6 - a6A : m0, rF.fillStyle = t.mX, rF.fillRect(at.z - qZ - a5l, a6B - a6A, qZ + a5l, a6A), rF.fillRect(a69 - a68, at.j6 - a6A, e1 + a5l, a6A), rF.fillStyle = t.ma, b6.pF
			.textAlign(rF, 2), rF.fillText(month, Math.floor(at.z - .5 * a5l), a6B),
			function(m0, a6A) {
				for (var qY, kS = -1, oF = fC.length - a5k - 1, a5 = a5q.length - 1; 0 <= a5; a5--) oF >= a5q[a5].eT && oF <= a5q[a5].e && (-1 === kS || a5q[a5].e - a5q[a5].eT < a5q[kS].e - a5q[kS].eT) && (kS = a5); - 1 !== kS && (qY = Math
					.floor(rF.measureText(a5q[kS].fy).width), rF.fillStyle = t.mX, rF.fillRect(at.z - qY - a5l, m0, qY + a5l, a6A), rF.fillStyle = t.ma, rF.fillText(a5q[kS].fy, Math.floor(at.z - .5 * a5l), m0 + a6A))
			}(a6B - 2 * a6A, a6A), b6.pF.textAlign(rF, 1), rF.fillText(a65, a69, at.j6), rF.strokeStyle = t.me, rF.lineWidth = 1, rF.beginPath(), rF.moveTo(0, m0), rF.lineTo(at.z, m0), rF.closePath(), rF.stroke())
	}
}

function cA() {
	var a2Q, z, ec, a6D, a6E, hE, uY, a3s, zp, a6F, a6G, a6H, a6I;
	this.ea = 0, this.j6 = 0, this.dO = function() {
		a6E = a7.a0g, a6G = "rgba(0,100,0,0.8)", a6H = "rgba(150,0,0,0.8)", a3s = !(a6F = !0), zp = aa.gX[a7.eD], this.resize()
	}, this.resize = function() {
		z = Math.floor((q.r.vH() ? .305 : .24) * at.pH), this.j6 = Math.floor(.5 + .13 * z), z = Math.floor(6 * this.j6), a2Q = b6.pF.qW(1, Math.floor(.8 * this.j6)), a6I = Math.floor(.5 * this.j6), bN.sp.font = a2Q, ec = bX.gap, a6D = Math
			.floor(1 + .13 * this.j6), (hE = document.createElement("canvas")).width = z, hE.height = this.j6, (uY = hE.getContext("2d", {
				alpha: !0
			})).font = a2Q, b6.pF.textBaseline(uY, 1), b6.pF.textAlign(uY, 1), this.a6J()
	}, this.a4F = function() {
		return q.r.vH() && at.z < 1.2 * at.j6
	}, this.a4p = function() {
		this.a4F() ? this.ea = at.z - z - bX.gap : this.ea = Math.floor(aP.a6K() + (at.z - aP.a6K() - aQ.z - z) / 2 - .5 * bX.gap)
	}, this.lJ = function() {
		a3s && (a3s = !1, this.a6J())
	}, this.a6J = function() {
		uY.clearRect(0, 0, z, this.j6), uY.fillStyle = a6F ? a6G : a6H, uY.fillRect(0, 0, z, this.j6), uY.fillStyle = t.mc, this.a6L(), this.a6M(), uY.fillStyle = aa.gX[a7.eD] >= aY.jI(a7.eD) ? t.n1 : t.ma, uY.fillText(b6.x3.a0F(zp), Math.floor(
			z / 2), a6I), uY.fillStyle = t.ma, uY.fillRect(0, 0, z, 1), uY.fillRect(0, 0, 1, this.j6), uY.fillRect(0, this.j6 - 1, z, 1), uY.fillRect(z - 1, 0, 1, this.j6)
	}, this.a6L = function() {
		var eo = ba.jZ() % 100,
			eo = (eo = 9 - bG.ev(eo -= eo % 10, 10), Math.floor(eo * (this.j6 - a6D) / 9));
		uY.fillRect(0, eo, a6D, this.j6 - eo), uY.fillRect(z - a6D, eo, a6D, this.j6 - eo)
	}, this.a6M = function() {
		uY.fillRect(a6D, this.j6 - a6D, Math.floor((z - 2 * a6D) * aa.gX[a7.eD] / a6E), a6D)
	}, this.iR = function() {
		var g3 = a7.eD;
		b6.fr.gi(g3) && (g3 = aa.gX[g3] - aa.zo[g3], zp !== g3 ? (a6E = a30(g3, a6E), a6F = zp < g3 && 10 <= g3, zp = g3, a3s = !0) : ba.jZ() % 10 == 9 && (a3s = !0))
	}, this.rE = function() {
		0 === aa.lX[a7.eD] || a7.gr || 2 === aa.zi[a7.eD] || rF.drawImage(hE, this.ea, ec)
	}
}

function cB() {
	var a6N, a6O, a6P, a6Q, a6R, a6S, a6T, a6U, a6V, a6W, a6X, a6Y, a6Z, a6a, a6b, a6c, a6d, a6e, a6f, a6g, a6h, a6i, position, a6j, a6k, a6l, a6m, a6n = 1,
		a6o = 1,
		a6p = "";
	var leaderboardHasChanged = true;
	this.playerPos = a7.eD;
	__fx.leaderboardFilter.setUpdateFlag = () => leaderboardHasChanged = true;

	function updateFilteredLb() {
		if (!leaderboardHasChanged) return;
		__fx.leaderboardFilter.filteredLeaderboard = __fx.leaderboardFilter.playersToInclude
			.map(id => jN[id]).sort((a, b) => a - b);
		leaderboardHasChanged = false;
		this.playerPos = __fx.leaderboardFilter.filteredLeaderboard.indexOf(jN[a7.eD]);
	}

	function a6r() {
		a6T.clearRect(0, 0, a6N, a4V),
			a6T.fillStyle = t.nF,
			a6T.fillRect(0, 0, a6N, a6Y),
			a6T.fillStyle = t.mW,
			a6T.fillRect(0, a6Y, a6N, a4V - a6Y);
		if (__fx.leaderboardFilter.enabled) updateFilteredLb();
		var playerPos = (__fx.leaderboardFilter.enabled ?
			this.playerPos :
			jN[a7.eD]
		);
		if (__fx.leaderboardFilter.hoveringOverTabs) a6i = -1;
		if (__fx.leaderboardFilter.enabled && a6i >= __fx.leaderboardFilter.filteredLeaderboard.length) a6i = -1;
		playerPos >= position && a6t(playerPos - position, t.mv),
			0 !== jN[a7.eD] && 0 === position && a6t(0, t.nK),
			-1 !== a6i && a6t(a6i, t.mb),
			a6T.fillStyle = t.mW,
			//console.log("drawing", a6i),
			a6T.clearRect(0, a4V - __fx.leaderboardFilter.tabBarOffset, a6N, __fx.leaderboardFilter.tabBarOffset);
		a6T.fillRect(0, a4V - __fx.leaderboardFilter.tabBarOffset, a6N, __fx.leaderboardFilter.tabBarOffset);
		a6T.fillStyle = t.ma,
			a6T.fillRect(0, a6Y, a6N, 1),
			a6T.fillRect(0, a4V - __fx.leaderboardFilter.tabBarOffset, a6N, 1),
			__fx.leaderboardFilter.drawTabs(a6T, a6N, a4V - __fx.leaderboardFilter.tabBarOffset, t.mv),
			a6T.fillRect(0, 0, a6N, bX.vK),
			a6T.fillRect(0, 0, bX.vK, a4V),
			a6T.fillRect(a6N - bX.vK, 0, bX.vK, a4V),
			a6T.fillRect(0, a4V - bX.vK, a6N, bX.vK), a6T.font = a6O, b6.pF.textBaseline(a6T, 1), b6.pF.textAlign(a6T, 1), a6T.fillText(a6p, Math.floor((a6N + a6Y - 22) / 2), Math.floor(a6W + a6P / 2));
		__fx.playerList.drawButton(a6T, 12, 12, a6Y - 22);
		var em, g4 = playerPos < position + a6R - 1 ? 1 : 2;

		if (__fx.leaderboardFilter.enabled) {
			let result = __fx.leaderboardFilter.filteredLeaderboard;
			if (position !== 0 && position >= result.length - a6R)
				position = (result.length > a6R ? result.length : a6R) - a6R;
			//if (position >= result.length) position = result.length - 1;
			for (a6T.font = a6Q, b6.pF.textAlign(a6T, 0), em = a6R - g4; 0 <= em; em--) {
				const pos = result[em + position];
				if (pos !== undefined)
					a6u(kx[pos]), a6v(em, pos, kx[pos]);
			}
			for (b6.pF.textAlign(a6T, 2), em = a6R - g4; 0 <= em; em--) {
				const pos = result[em + position];
				if (pos !== undefined)
					a6u(kx[pos]), a6w(em, kx[pos]);
			}
		} else {
			for (a6T.font = a6Q, b6.pF.textAlign(a6T, 0), em = a6R - g4; 0 <= em; em--)
				a6u(kx[em + position]), a6v(em, em + position, kx[em + position]);
			for (b6.pF.textAlign(a6T, 2), em = a6R - g4; 0 <= em; em--)
				a6u(kx[em + position]), a6w(em, kx[em + position]);
		}
		2 == g4 && (a6u(a7.eD), b6.pF.textAlign(a6T, 0), a6v(a6R - 1, jN[a7.eD], a7.eD), b6.pF.textAlign(a6T, 2), a6w(a6R - 1, a7.eD)), 0 === position && (g4 = .7 * a6Z / aV.get(4).height, a6T.setTransform(g4, 0, 0, g4, Math.floor(a6a + .58 * a6Z +
			.5 * g4 * aV.get(4).width), Math.floor(a6W + a6P + .4 * a6Z)), a6T.imageSmoothingEnabled = !0, a6T.drawImage(aV.get(4), -Math.floor(aV.get(4).width / 2), -Math.floor(aV.get(4).height / 2)), a6T.setTransform(1, 0, 0, 1, 0, 0))
	}

	function a6u(player) {
		a7.ic && (a6T.fillStyle = bb.a6y[bb.k5[bb.eR[player]]])
	}

	function a6t(a5, a6z) {
		a6T.fillStyle = a6z, a5 = a6R - 1 < a5 ? a6R - 1 : a5;
		a6z = Math.floor((a5 === a6R - 1 ? 2 : 0 === a5 ? 1.15 : 1) * a6Z), a6z = a5 === a6R - 2 ? Math.floor(a6Y + 9.15 * a6Z) - Math.floor(a6Y + 8.15 * a6Z) : a6z;
		a6T.fillRect(0, Math.floor(a6Y + (a5 + (0 === a5 ? 0 : .15)) * a6Z), a6N, a6z)
	}

	function a6v(a71, ws, a5) {
		a6T.fillText(a6e[ws], a6a, Math.floor(a6W + a6P + (a71 + .5) * a6Z)), 1 === aa.zi[a5] && (a6T.font = "italic " + a6Q);
		ws = Math.floor(a6W + a6P + (a71 + .5) * a6Z);
		a6T.fillText(aa.a39[a5], a6b, ws), 0 !== aa.zi[a5] && (a6T.font = a6Q), a5 < a7.jc && 2 !== aa.zi[a5] || a6T.fillRect(a6b, ws + .35 * a6n, a6d[a5], Math.max(1, .1 * a6n))
	}

	function a6w(a71, a5) {
		a6T.fillText(aa.gJ[a5], a6c, Math.floor(a6W + a6P + (a71 + .5) * a6Z))
	}

	function a7A(ec) {
		return (ec -= bX.gap + a6Y) < 0 ? Math.floor(ec / a6Z) - 1 : ec < (a6R - 1) * a6Z ? Math.floor(ec / a6Z) : ec < a4V - a6Y ? a6R - 1 : (ec -= a4V - a6Y, a6R + Math.floor(ec / a6Z))
	}

	function vJ(ea, ec) {
		return ea >= bX.gap && ea < bX.gap + a6N && ec >= bX.gap && ec < bX.gap + a4V
	}
	this.dO = function() {
			var a5;
			for (a6k = !1, a6m = a6l = a6j = 0, a6i = -1, a6R = q.r.vH() ? 6 : 10, a6o = (position = 0) === (a6o = be.dh.data[11].value) ? 10 : 1 === a6o ? 5 : 1, a6h = !1, a6f = new Uint16Array(a6R + 1), a6g = new Uint32Array(a6R + 1), a6V = a7.eQ,
				kx = new Uint16Array(a6V), jN = new Uint16Array(a6V), a5 = a6V - 1; 0 <= a5; a5--) kx[a5] = a5, jN[a5] = a5;
			this.resize(!0), a6d = new Uint16Array(a7.eQ);
			var a6q = Math.floor(a6N - a6b - a6a - a6U);
			for (a6e = new Array(a7.eQ), a6T.font = a6Q, a5 = a7.eQ - 1; 0 <= a5; a5--) a6e[a5] = a5 + 1 + ".", aa.a39[a5] = b6.uY.zO(aa.x5[a5], a6Q, a6q), a6d[a5] = Math.floor(a6T.measureText(aa.a39[a5]).width);
			a6r()
		}, this.resize = function(dO) {
			if (a4V = q.r.vH() ? (a6N = Math.floor(.335 * at.pH), Math.floor(a6R * a6N / 8)) : (a6N = Math.floor(.27 * at.pH), Math.floor(a6R * a6N / 10)), a6N = Math.floor(.97 * a6N), (a6S = document.createElement("canvas")).width = a6N, a6S
				.height = a4V, a6T = a6S.getContext("2d", {
					alpha: !0
				}), a6W = .025 * a6N, a6P = .16 * a6N, a6X = 0 * a6N, a6Y = Math.floor(.45 * a6W + a6P), a6Z = (a4V - a6P - 2 * a6W - a6X) / a6R,
				a6S.height = a4V += a6Z, __fx.leaderboardFilter.tabBarOffset = Math.floor(a6Z * 1.3), __fx.leaderboardFilter.verticalClickThreshold = a4V - __fx.leaderboardFilter.tabBarOffset, __fx.leaderboardFilter.windowWidth = a6N,
				a6O = b6.pF.qW(1, Math.floor(.55 * a6P)), a6n = Math.floor((q.r.vH() ? .67 : .72) * a6Z), a6Q = b6.pF.qW(0, a6n), a6T.font = a6Q, a6a = Math.floor(.04 * a6N), a6b = Math.floor((q.r.vH() ? .195 : .18) * a6N), a6U = Math.floor(a6T
					.measureText("00920600").width), a6T.font = a6O, a6c = a6N - a6a, !dO) {
				a6T.font = a6Q;
				for (var a5 = a7.eQ - 1; 0 <= a5; a5--) a6d[a5] = Math.floor(a6T.measureText(aa.a39[a5]).width);
				a6r()
			}
			a6p = b6.uY.zO(L(88), a6O, .96 * a6N)
		}, this.a6K = function() {
			return a6N
		}, this.lJ = function(bj, a6s) {
			(a6s || a6h && (bj || ba.jZ() % a6o == 0)) && (a6h = !1, a6r())
		}, this.iR = function() {
			! function() {
				for (var em = a6V - 1; 0 <= em; em--) 0 === aa.lX[kx[em]] && ! function(em) {
					var a78 = kx[em];
					a6V--;
					for (var a5 = em; a5 < a6V; a5++) kx[a5] = kx[a5 + 1], jN[kx[a5]] = a5;
					kx[a6V] = a78, jN[kx[a6V]] = a6V
				}(em)
			}();
			for (var a76, mI = a6V - 1, em = 0; em < mI; em++) aa.gJ[kx[em]] < aa.gJ[kx[em + 1]] && (a76 = kx[em], kx[em] = kx[em + 1], kx[em + 1] = a76, jN[kx[em]] = em, jN[kx[em + 1]] = em + 1);
			! function() {
				for (var e1 = a6h, g4 = (a6h = !0, jN[a7.eD] >= a6R - 1 ? a6R - 2 : a6R - 1), a5 = g4; 0 <= a5; a5--)
					if (a6f[a5] !== kx[a5] || a6g[a5] !== aa.gJ[kx[a5]]) return;
				(g4 != a6R - 2 || a6f[a6R] === jN[a7.eD] && a6g[a6R] === aa.gJ[a7.eD]) && (a6h = e1)
			}();
			for (var a5 = a6R - 1; 0 <= a5; a5--) a6f[a5] = kx[a5], a6g[a5] = aa.gJ[kx[a5]];
			a6f[a6R] = jN[a7.eD], a6g[a6R] = aa.gJ[a7.eD];
			leaderboardHasChanged = true;
		}, __fx.leaderboardFilter.scrollToTop = function() {
			position = 0;
		}, this.gj = function(ea, ec) {
			return !!vJ(ea, ec) && ((__fx.utils.isPointInRectangle(ea, ec, bX.gap + 12, bX.gap + 12, a6Y - 22, a6Y - 22) && __fx.playerList.display(aa.x5), true) &&
				!(ec - bX.gap > __fx.leaderboardFilter.verticalClickThreshold && __fx.leaderboardFilter.handleMouseDown(ea - bX.gap)) && (a6j = ba.e0, a6k = !0, a6l = a6m = a7A(ec), bE.yW() && (ea = a5B(-1, a6m, a6R), a6i !== (ea = ea === a6R ? -
					1 : ea)) && (a6i = ea, a6r(), ba.dW = !0)), !0)
		}, __fx.leaderboardFilter.repaintLeaderboard = function() {
			a6r(), ba.dW = !0;
		},
		this.xp = function(ea, ec) {
			if (__fx.utils.isPointInRectangle(ea, ec, bX.gap + 12, bX.gap + 12, a6Y - 22, a6Y - 22)) {
				__fx.playerList.hoveringOverButton === false && (__fx.playerList.hoveringOverButton = true, a6r(), ba.dW = !0);
			} else {
				__fx.playerList.hoveringOverButton === true && (__fx.playerList.hoveringOverButton = false, a6r(), ba.dW = !0);
			}
			if (__fx.leaderboardFilter.setHovering(
					__fx.utils.isPointInRectangle(ea, ec, bX.gap, bX.gap + __fx.leaderboardFilter.verticalClickThreshold, __fx.leaderboardFilter.windowWidth, __fx.leaderboardFilter.tabBarOffset), ea - bX.gap
				)) return;
			var e1, a79 = a7A(ec);
			return a6k ? (e1 = position, (position = a5B(0, position += a6l - a79, a7.eQ - a6R)) !== e1 && (a79 = (a79 = a5B(-1, a6l = a79, a6R)) !== a6R && vJ(ea, ec) ? a79 : -1, a6i = a79, a6r(), ba.dW = !0), !0) : (a79 = (a79 = a5B(-1, a79,
				a6R)) === a6R || !vJ(ea, ec) || bE.yW() ? -1 : a79, a6i !== a79 && (a6i = a79, a6r(), ba.dW = !0))
		}, this.yF = function(ea, ec) {
			if (!a6k) return !1;
			a6k = !1;
			var a79 = a7A(ec);
			var isEmptySpace = false;
			return bE.yW() && -1 !== a6i && (a6i = -1, a6r(), ba.dW = !0), ba.e0 - a6j < 350 && a6m === a79 && -1 !== (a79 = (a79 = a5B(-1, a79, a6R)) !== a6R && vJ(ea, ec) ? a79 : -1) && (ea = (__fx.leaderboardFilter.enabled ? (updateFilteredLb(),
					kx[__fx.leaderboardFilter.filteredLeaderboard[a79 + position] ?? (isEmptySpace = true, jN[a7.eD])]) : kx[a79 + position]), a79 === a6R - 1 && (__fx.leaderboardFilter.enabled ? this.playerPos : jN[a7.eD]) >=
				position + a6R - 1 && (ea = a7.eD), !isEmptySpace && a7.ic && __fx.donationsTracker.displayHistory(ea, aa.x5, a7.jy), 0 !== aa.lX[ea] && !isEmptySpace) && aB.lt(ea, 800, !1, 0), !0
		}, this.xs = function(ea, ec, deltaY) {
			var a7B;
			return !(a6k || a7.m2 || (a7B = Math.max(Math.floor(Math.abs(deltaY) / 40), 1), !vJ(ea, ec)) || (ea = (ea = a5B(-1, a7A(ec), a6R)) === a6R || bE.yW() ? -1 : ea, 0 < deltaY ? position < a7.eQ - a6R && (position += Math.min(a7.eQ - a6R -
				position, a7B), a6i = ea, a6r(), ba.dW = !0) : 0 < position && (position -= Math.min(position, a7B), a6i = ea, a6r(), ba.dW = !0), 0))
		}, this.rE = function() {
			rF.drawImage(a6S, bX.gap, bX.gap)
		}
}

function cC() {
	var hE, uY, ea, ec, a3p, a7C, gap, a7D, fontSize, a7E, a7F, a7G, a7H, a7I, a7J, a7K, a7L, a7M;

	function a7Q() {
		uY.clearRect(0, 0, aQ.z, aQ.j6), uY.fillStyle = t.mX, uY.fillRect(0, 0, aQ.z, aQ.j6), uY.fillStyle = t.mr, e6 = 0 < a7K ? a7K : Math.sqrt(a7H[4] / 1e4), uY.fillRect(0, aQ.j6 - a3p - 1, Math.floor(e6 * aQ.z), a3p), uY.fillStyle = t.ma, uY
			.fillRect(0, 0, aQ.z, 1), uY.fillRect(0, 0, 1, aQ.j6), uY.fillRect(aQ.z - 1, 0, 1, aQ.j6), uY.fillRect(0, aQ.j6 - 1, aQ.z, 1), uY.fillRect(0, aQ.j6 - a3p - 1, aQ.z, 1);
		for (var e6, a7S, e1 = 0, a5 = 0; a5 < a7G.length; a5++) a7I[a5] ? (b6.pF.textAlign(uY, 0), a7S = Math.floor((a7C - a3p + 2 * a7D) * (a5 - e1 + 1) / (a7G.length + 1) - .7 * a7D), uY.fillText(a7G[a5], gap, a7S), b6.pF.textAlign(uY, 2), 5 ===
			a5 && 0 !== aa.lX[a7.eD] && aa.gX[a7.eD] >= aY.jI(a7.eD) ? (uY.fillStyle = t.nI, uY.fillText(a7O(a5), aQ.z - gap, a7S), uY.fillStyle = t.ma) : uY.fillText(a7O(a5), aQ.z - gap, a7S)) : e1++
	}

	function a7O(a5) {
		return a5 < 3 ? a7H[a5].toString() : 3 === a5 || 4 === a5 || 5 === a5 ? b6.x3.a0K(a7H[a5] / 100, 2) : a5 < 7 ? b6.x3.a0F(a7H[a5]) : a5 === 7 ? aQ.a7T(a7H[7]) : a5 === 8 ? __fx.utils.getMaxTroops(aa.gJ, a7.eD) : __fx.utils.getDensity(a7.eD)
	}

	function a7N() {
		aa.gJ[a7.eD] !== a7H[6] && (a7H[6] = aa.gJ[a7.eD], a7E++)
	}
	this.dO = function() {
		a7K = a7L = 0, (a7F = new Array(8))[0] = L(89), a7F[1] = a7.jy ? L(90) : L(91), a7F[2] = L(92), a7F[3] = L(93), a7F[4] = L(94), a7F[5] = L(95, 0, "Interest"), a7F[6] = L(96), a7F[7] = L(97),
			a7F.push("Max Troops", "Density"), // add a7F
			(a7G = new Array(a7F.length)).fill(""), (a7H = new Array(a7F.length))[0] = a7.jy ? 0 : a7.jc, a7H[1] = a7.jy ? af.jd : a7.k0, a7H[2] = a7.wF, a7H[3] = 0, a7H[4] = bG.ev(1e4 * aa.gJ[0], Math.max(a7.jM, 1)), a7H[5] = 0 === a7.data.a1c ?
			700 : 1 === a7.data.a1c ? bG.ev(700 * a7.data.a1d, 64) : bG.ev(700 * a7.data.a1e[a7.eD], 64), a7H[6] = 0, a7N(), a7H[7] = 0, a7J = a7O(6), a7I = new Array(a7F.length);
		for (var a5 = a7F.length - 1; 0 <= a5; a5--) a7I[a5] = !0;
		a7M = 0, a7M = a7.jy ? (a7I[0] = !1, a7I[2] = !1, a7I[3] = !1, 3) : (a7I[3] = !1, 1), a7E = 0, this.resize()
	}, this.resize = function() {
		this.z = Math.floor((q.r.vH() ? .1646 : .126) * 1.25 * at.pH), this.j6 = Math.floor(1.18 * this.z), a3p = Math.floor(.04 * this.z), gap = Math.floor(.035 * this.z), a7D = .04 * this.z, a7C = this.j6, this.j6 -= Math.floor(a7M * (this.j6 -
			2 * a3p) / a7F.length), fontSize = Math.floor(.7 * (a7C - a3p) / a7F.length);
		var a2Q = b6.pF.qW(1, fontSize);
		(hE = document.createElement("canvas")).width = this.z, hE.height = this.j6,
			function(a2Q, z) {
				for (var a5 = 0; a5 < a7G.length; a5++) a7G[a5] = b6.uY.zO(a7F[a5], a2Q, z)
			}((uY = hE.getContext("2d", {
				alpha: !0
			})).font = a2Q, .575 * this.z), b6.pF.textBaseline(uY, 1), uY.lineWidth = 1, this.a0Z(), this.a4p(), aO.a4p(), a7Q()
	}, this.a4p = function() {
		ea = at.z - this.z - bX.gap
	}, this.a7R = function() {
		ec = bX.gap
	}, this.a0Z = function() {
		ec = bX.gap + (aO.a4F() && 0 !== aa.lX[a7.eD] && !a7.gr ? aO.j6 + bX.gap : 0)
	}, this.lJ = function(bj) {
		(bj || 100 <= a7E) && (a7E = 0, a7Q())
	}, this.a24 = function() {
		return a7H[7]
	}, this.a7T = function(value) {
		var kQ = Math.floor(value / 1e3 / 60),
			value = Math.floor((value - 6e4 * kQ) / 1e3);
		return value < 10 ? kQ + ":0" + value : kQ + ":" + value
	}, this.iR = function() {
		var a7c, per;
		a7I[0] && a7.wG - a7.wF !== a7H[0] && (a7H[0] = a7.wG - a7.wF, a7E++), af.jd - a7H[0] !== a7H[1] && (a7H[1] = af.jd - a7H[0], a7E++), this.lA(), (a7c = aY.a7d(a7.eD)) !== a7H[5] && (a7H[5] = a7c, a7E++), a7N(), a7H[7] += ba.a7e, a7c =
			a7O(7), a7J !== a7c && (a7J = a7c, a7E += 100), a7c = a7.ic ? bc.wn() : aa.gJ[kx[0]], per = bG.ev(1e4 * a7c, Math.max(a7.jM, 1)), a7H[3] = a7c, a7H[4] !== per && (a7E++, a7H[4] = per), 8 === a7.jw && function() {
				for (var a5 = 0; a5 < 2; a5++)
					if (!b6.fr.gi(a5)) return bM.vr.wC(), 1;
				return
			}() || a7H[3] < a7.jM || ! function() {
				for (var a5 = af.jd - 1; 0 <= a5; a5--)
					if (0 < aa.fx[af.jf[a5]].length) return;
				return 1
			}() || bM.vr.wC()
	}, this.lA = function() {
		a7I[2] && a7.wF !== a7H[2] && (a7H[2] = a7.wF, a7E++)
	}, this.a7f = function(a5) {
		var qm, a7g, e1;
		return 2 !== a7.wD && (a5 % 2 == 1 && (aP.lJ(1, 1), ba.dW = !0), a5 === a7.a0i ? (a7K = 0, a7Q(), !1) : (-1 !== a5 || 0 !== a7L) && (a7g = a7K, a7K = a7.gf ? a5 / a7.a0i : (e1 = performance.now(), 0 <= a5 && (qm = e1 - 392 * a5, a7L =
			0 === a5 || qm < a7L ? qm : a7L), 1 < (a7K = (e1 - a7L) / (392 * a7.a0i)) ? 1 : a7K), a7Q(), a7K !== a7g))
	}, this.rE = function() {
		rF.drawImage(hE, ea, ec)
	}
}

function cD() {
	var ur, a7h, z, j6, a4v, a7i, a7j, a4G, hE, lk, a7k;

	function uU() {
		return Math.floor((at.z - z) / 2) < aL.j6 + 2 * bX.gap ? at.j6 - j6 - 4 * bX.gap - aL.j6 : at.j6 - j6 - 2 * bX.gap
	}
	this.dO = function() {
		a7k = ur = !1, a4v = .61, a7i = .07, a7j = .09, lk = a4G = j6 = 0
	}, this.resize = function() {
		var uY, lz, eo, a7p, a7q, a2V;
		ur && (z = a7l(z = q.r.vH() ? Math.floor(.69 * at.pH) : Math.floor(.5 * at.pH), a30(at.z - 2 * bX.gap, 10)), z = a7l(z, Math.floor(3.57 * a30(at.j6 - 2 * bX.gap, 3))), j6 = Math.floor(.28 * z), (hE = document.createElement("canvas"))
			.width = z, hE.height = j6, uY = hE.getContext("2d", {
				alpha: !0
			}), lz = Math.floor(1 + j6 / 40), uY.clearRect(0, 0, z, j6), uY.fillStyle = t.mX, uY.fillRect(lz, lz, z - 2 * lz, j6 - 2 * lz), uY.lineJoin = "bevel", uY.lineWidth = 2 * lz, uY.strokeStyle = t.ma, uY.strokeRect(lz, lz, z - 2 * lz,
				j6 - 2 * lz), uY.imageSmoothingEnabled = !1, eo = aV.get(a7h), a7p = eo.width, a2V = (1 === a7h ? .85 : 21 === a7h ? .666 : .9) * a4v * j6 / (a7q = eo.height), uY.setTransform(a2V, 0, 0, a2V, Math.floor((z - a2V * a7p) / 2),
				Math.floor((j6 - a2V * a7q) / 2)), uY.drawImage(eo, 0, 0), uY.setTransform(1, 0, 0, 1, Math.floor(z - a7j * j6 - a7i * j6 - lz), Math.floor(lz + a7i * j6)),
			function(uY, eT) {
				uY.lineWidth = Math.floor(1 + j6 / 80), uY.strokeStyle = t.ma, uY.beginPath(), uY.moveTo(0, 0), uY.lineTo(eT, eT), uY.moveTo(0, eT), uY.lineTo(eT, 0), uY.stroke()
			}(uY, Math.floor(a7j * j6)), uY.setTransform(1, 0, 0, 1, 0, 0))
	}, this.show = function(ew, a7n, a4i, a7o) {
		ur || a7o && a7k || (a7h = a4i ? 21 : ew ? 1 : 2, ur = a7k = !0, this.resize(), aF.ql(), aL.a4f(), lk = ba.e0, a4G = a7n ? 1 : 0)
	}, this.iR = function() {
		!ur || 1 <= a4G || (a4G = 1 < (a4G += 5e-4 * (ba.e0 - lk)) ? 1 : a4G, lk = ba.e0, ba.dW = !0)
	}, this.gj = function(ea, ec) {
		return !(!ur || a4G <= 0 || (ea -= Math.floor((at.z - z) / 2), ec -= uU(), ea < 0) || ec < 0 || z < ea || j6 < ec || (z - j6 / 3 < ea && ec < j6 / 3 && (ur = !1, ba.dW = !0), 0))
	}, this.rE = function() {
		!ur || a4G <= 0 || (rF.globalAlpha = a4G, rF.drawImage(hE, Math.floor((at.z - z) / 2), uU()), rF.globalAlpha = 1)
	}
}

function dD() {
	var a7s = [0, 0],
		a7t = [0, 0];

	function a7w(oF) {
		return 3 !== a7s[oF] && 1 !== a7t[oF] && (a7t[oF] = 1, a7s[oF]++, be.pw.px(119, (a7s[0] << 2) + a7s[1]), 1)
	}
	this.a7u = new a7v, this.dO = function() {
		var ew = be.dh.data[119].value;
		a7s[0] = ew >> 2, a7s[1] = 3 & ew
	}, this.a14 = function() {
		this.a7u.dO()
	}, this.iR = function() {
		this.a7u.iR()
	}, this.a25 = function() {
		a7w(0) && aH.a36(L(98))
	}, this.a26 = function() {
		a7w(1) && aH.a36(L(99))
	}
}

function a7v() {
	var a7x;
	this.dO = function() {
		a7x = !1
	}, this.iR = function() {
		var g3;
		if (function() {
				if (!a7x) {
					if (ba.jZ() % 30 != 9) return;
					if (!b6.fr.kq(90)) return;
					a7x = !0
				}
				return 1
			}() && (console.log("HintsStillNeeds calculate"), ! function() {
				var p7 = aH.a3T(956);
				if (p7) {
					if (b6.fr.kU(p7.player)) return 1;
					aH.a2C(956, 0)
				}
				return
			}() && (-1 === (g3 = (a7.ic ? function() {
				var id = bc.ku(),
					eT = af.jd;
				if (bb.k5[id])
					for (var w4 = af.jf, eR = bb.eR, a5 = 0; a5 < eT; a5++) {
						var g3 = w4[a5];
						if (eR[g3] !== id) return g3
					} else if (1 < eT) return kx[eT - 1];
				return -1
			} : function() {
				for (var a85 = af.jd, je = af.jf, a86 = jN, a5 = 0; a5 < a85; a5++) {
					var g3 = je[a5];
					if (0 !== a86[g3]) return g3
				}
				return -1
			})()) ? ! function() {
				var p7 = aH.a3T(957);
				if (p7 && p7.a2w) {
					if (aW.eK(p7.a2w.eF << 2)) return 1;
					aH.a2C(957, 0)
				}
				return
			}() : (aH.wb(0, L(100, [aa.a39[g3]]), 956, g3, t.ma, t.mX, -1, !0), 0)))) {
			var eT = ah.iE.kg;
			if (0 === eT) ah.iE.l5();
			else
				for (var dh = ah.iE.dh, a5 = 0; a5 < eT; a5++) {
					var eF = dh[a5];
					if (aW.eK(eF << 2)) return void aH.wb(0, L(101, [bH.eb(eF), bH.ed(eF)]), 957, 0, t.ma, t.mX, -1, !0, void 0, {
						em: 1,
						eF: eF
					})
				}
		}
	}
}

function dE() {
	this.a87 = new a88, this.dO = function() {
		this.a87.resize()
	}
}

function a88() {
	this.resize = function() {
		var a5, a89 = document.head.querySelector("style#ss");
		if (a89)
			for (a5 = a89.sheet.cssRules.length - 1; 0 <= a5; a5--) a89.sheet.deleteRule(0);
		else(a89 = document.createElement("style")).id = "ss", document.head.appendChild(a89);
		var a53 = "::-webkit-scrollbar",
			a8A = b6.pF.pQ(bX.zX),
			h8 = b6.pF.pQ(Math.max(b6.pF.pz(.012), 8));
		try {
			a89.sheet.insertRule(a53 + "{width:" + h8 + ";height:" + h8 + ";}", a89.sheet.cssRules.length), a89.sheet.insertRule(a53 + "-thumb{background-color:white;}", a89.sheet.cssRules.length), a89.sheet.insertRule(a53 +
				"-track{background:" + t.mW + ";}", a89.sheet.cssRules.length), a89.sheet.insertRule(a53 + "-track:horizontal{border-top:" + a8A + " solid white;}", a89.sheet.cssRules.length), a89.sheet.insertRule(a53 +
				"-track:vertical{border-left:" + a8A + " solid white;}", a89.sheet.cssRules.length), a89.sheet.insertRule(a53 + "-button{display:none;}", a89.sheet.cssRules.length)
		} catch (e) {
			for (console.log("error 3425: " + e), a5 = a89.sheet.cssRules.length - 1; 0 <= a5; a5--) a89.sheet.deleteRule(0)
		}
	}
}

function dC() {
	this.a8B = !1, this.mQ = !1, this.a0d = !1, this.a8C = [0, 0, 0, 0], this.a8D = function() {
		var lz, m0, mD, mE;
		this.a0d = this.a0d || this.mQ, (this.mQ || this.a8B && this.a0d) && (lz = bV.a8E[0], m0 = bV.a8E[1], mD = bV.a8E[2], mE = bV.a8E[3], lz = lz < this.a8C[0] ? this.a8C[0] : lz, m0 = m0 < this.a8C[1] ? this.a8C[1] : m0, mD = mD > this.a8C[
				2] ? this.a8C[2] : mD, mE = mE > this.a8C[3] ? this.a8C[3] : mE, this.mQ = !1, this.a8B = !1, lz === this.a8C[0] && m0 === this.a8C[1] && mD === this.a8C[2] && mE === this.a8C[3] ? this.a0e() : lz <= mD && m0 <= mE && a16
			.putImageData(a17, 0, 0, lz, m0, mD - lz + 1, mE - m0 + 1))
	}, this.a0e = function() {
		this.a0d && this.a8C[2] >= this.a8C[0] && this.a8C[3] >= this.a8C[1] && a16.putImageData(a17, 0, 0, this.a8C[0], this.a8C[1], this.a8C[2] - this.a8C[0] + 1, this.a8C[3] - this.a8C[1] + 1), this.a0d = !1
	}, this.wO = function() {
		this.a8C[2] >= this.a8C[0] && this.a8C[3] >= this.a8C[1] && a16.putImageData(a17, 0, 0, this.a8C[0], this.a8C[1], this.a8C[2] - this.a8C[0] + 1, this.a8C[3] - this.a8C[1] + 1), this.a0d = !1
	}, this.dO = function() {
		var ea, ec;
		this.a8B = !1, this.mQ = !1, this.a0d = !1, this.a8C[0] = bN.ee, this.a8C[1] = bN.ef, this.a8C[2] = this.a8C[3] = 0;
		loop: for (ea = 1; ea < bN.ee - 1; ea++)
			for (ec = bN.ef - 2; 1 < ec; ec--)
				if (1 === a8F[aW.u2(ea, ec) + 2]) {
					this.a8C[0] = ea;
					break loop
				} loop: for (ec = 1; ec < bN.ef - 1; ec++)
			for (ea = bN.ee - 2; 1 < ea; ea--)
				if (1 === a8F[aW.u2(ea, ec) + 2]) {
					this.a8C[1] = ec;
					break loop
				} loop: for (ea = bN.ee - 2; 0 < ea; ea--)
			for (ec = bN.ef - 2; 1 < ec; ec--)
				if (1 === a8F[aW.u2(ea, ec) + 2]) {
					this.a8C[2] = ea;
					break loop
				} loop: for (ec = bN.ef - 2; 0 < ec; ec--)
			for (ea = bN.ee - 2; 1 < ea; ea--)
				if (1 === a8F[aW.u2(ea, ec) + 2]) {
					this.a8C[3] = ec;
					break loop
				}
	}
}

function L(value, a8G, re) {
	var ow = "number" == typeof value ? b3.a8H[value] : value;
	if (re && b3.a8I() && (ow = re), a8G)
		for (var eT = a8G.length, a5 = 0; a5 < eT; a5++)
			for (var em = 0; em < 3; em++) ow = ow.replace("{" + (10 * em + a5) + "}", a8G[a5]);
	return ow
}

function br() {
	this.data = new a8J;
	var a8K = (new a8L).L84,
		a8M = (this.a8H = a8K, !1);
	this.dO = function() {
		var eT, fC;
		a8M = !1, "en" !== be.dh.data[12].value.split("-")[0].toLowerCase() ? be.dh.data[12].value === be.dh.data[145].value && 0 < be.dh.data[146].value && (eT = be.dh.data[146].value, (fC = be.pW.rk(eT, !1)).length === eT) && !!b6.pP.z3(fC) &&
			function(fC) {
				var eT = fC.length,
					a8S = be.pW.rk(eT, !0);
				if (eT !== a8S.length) return !1;
				if (!b6.pP.z3(a8S)) return !1;
				for (var kQ = a8K.length, a5w = new Array(kQ), a8T = kQ === eT, fy = Math.min(eT, kQ), a5 = 0; a5 < kQ; a5++)
					if (a5w[a5] = a8K[a5], a5 < eT && a8S[a5] === a5w[a5]) a5w[a5] = fC[a5];
					else {
						a8T = !1;
						for (var en = 0; en < fy; en++)
							if (a8S[en] === a5w[a5]) {
								a5w[a5] = fC[en];
								break
							}
					} return b3.a8H = a5w, a8T
			}(fC) || (a8M = !0) : b3.a8H = a8K
	}, this.dQ = function() {
		bb.dP(), a8.dP(), bZ.dP(), bY.dP(), aI.dO(), ao.dP()
	}, this.a8I = function() {
		return this.a8H === a8K || !a8K.length
	}, this.a8U = function() {
		var a8V;
		a8M && (a8M = !1, 0 !== a8K.length) && (a8V = be.dh.data[12].value, aw.a8W.a8X(0, a8V.slice(0, 20)))
	}, this.a8Y = function(fC) {
		fC.length === a8K.length && (this.a8H = fC, be.pw.px(145, be.dh.data[12].value), be.pw.px(146, fC.length), be.pW.rq(fC, !1), be.pW.rq(a8K, !0), 0 === aU.xT()) && 5 === m.qQ && m.lB.a8Z()
	}
}

function a8J() {
	var fC = ["aa", "ab", "ace", "ach", "af", "ak", "alz", "am", "ar", "as", "av", "awa", "ay", "az", "ba", "bal", "ban", "bbc", "bci", "be", "bem", "ber", "ber-Latn", "bew", "bg", "bho", "bik", "bm", "bm-Nkoo", "bn", "bo", "br", "bs", "bts", "btx",
		"bua", "ca", "ce", "ceb", "cgg", "ch", "chk", "chm", "ckb", "cnh", "co", "crh", "crs", "cs", "cv", "cy", "da", "de", "din", "doi", "dov", "dv", "dyu", "dz", "ee", "el", "en", "eo", "es", "et", "eu", "fa", "fa-AF", "ff", "fi", "fil", "fj",
		"fo", "fon", "fr", "fur", "fy", "ga", "gaa", "gd", "gl", "gn", "gom", "gu", "gv", "ha", "haw", "he", "hi", "hil", "hmn", "hr", "hrx", "ht", "hu", "hy", "iba", "id", "ig", "ilo", "is", "it", "iw", "ja", "jam", "jv", "jw", "ka", "kac",
		"kek", "kg", "kha", "kk", "kl", "km", "kn", "ko", "kr", "kri", "ktu", "ku", "kv", "ky", "la", "lb", "lg", "li", "lij", "lmo", "ln", "lo", "lt", "ltg", "luo", "lus", "lv", "mad", "mai", "mak", "mam", "mfe", "mg", "mh", "mi", "min", "mk",
		"ml", "mn", "mni-Mtei", "mr", "ms", "ms-Arab", "mt", "mwr", "my", "nb", "ndc-ZW", "ne", "new", "nhe", "nl", "no", "nr", "nso", "nus", "ny", "oc", "om", "or", "os", "pa", "pa-Arab", "pag", "pam", "pap", "pl", "ps", "pt", "pt-PT", "qu",
		"rn", "ro", "rom", "ru", "rw", "sa", "sah", "scn", "sd", "se", "sg", "sh", "shn", "si", "sk", "sl", "sm", "sn", "so", "sq", "sr", "ss", "st", "su", "sus", "sv", "sw", "szl", "ta", "tcy", "te", "tet", "tg", "th", "ti", "tiv", "tk", "tl",
		"tn", "to", "tpi", "tr", "trp", "ts", "tt", "tum", "ty", "tyv", "udm", "ug", "uk", "ur", "uz", "ve", "vec", "vi", "war", "wo", "xh", "yi", "yo", "yua", "yue", "zap", "zh", "zh-CN", "zh-TW", "zu"
	];
	this.a8a = function() {
		for (var a8b = [], eT = fC.length, a5 = 0; a5 < eT; a5++) a8b.push(fC[a5]);
		for (eT++, a8b.unshift(be.dh.data[12].re), a5 = 1; a5 < eT; a5++)
			if (a8b[a5] === a8b[0]) {
				a8b.splice(a5, 1), eT--;
				break
			} try {
			if ("undefined" == typeof Intl) return a8b;
			for (a5 = 0; a5 < eT; a5++) {
				var ow = new Intl.DisplayNames([a8b[a5]], {
					type: "language"
				}).of(a8b[a5]);
				ow !== a8b[a5] && (a8b[a5] = a8b[a5] + ": " + ow)
			}
		} catch (e) {
			console.log("error 3646: " + e)
		}
		return a8b
	}, this.a8d = function(a8e) {
		for (var ow = be.dh.data[12].value, eT = a8e.length, a5 = 0; a5 < eT; a5++)
			if (ow === a8e[a5].split(":")[0]) return a5;
		return 0
	}
}

function a8L() {
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
		"Custom Scenario", "⚔️ Play", "Map", "Settings", "Game Mode", "Clustered", "Player Names", "Kingdom Names", "Simple Names", "Territorial Income", "Interest Income", "Starting Resources", "My Account", "Game Menu", "Your Kingdom's Name",
		"Clans", "Clan Members", "1v1 Players", "Admins", "🏆 Leaderboards", "Previous 10", "Next 10", "1v1 Player Ranking", "Clan Ranking", "Clan Member Ranking", "Admin Ranking", "1v1 Reports", "Admin Election", "Blockchain",
		"Clan Leader Election", "Bio Reports", "Ranking", "Player", "Elo", "Clan", "Points", "Leader", "Index", "Seconds Ago", "Accuser", "Accused", "Elector", "Elected", "Sender", "Receiver", "Amount", "Elo Deducted", "Bio Removed",
		"🛠️ List Options", "Clan Name Search", "Username Search", "Quantity", "Account Name Search", "Login", "📜 Logs", "Procedural Map", "Realistic Map", "Custom Map", "Passable Water", "Passable Mountains", "Select File", "Preview",
		"Map Name", "Selectable Name", "▶️ Replay", "🔲 Select All", "📋 Copy", "🗑️ Clear", "▶️ Launch", "Insert the replay link here!", "⚙️ Settings", "🔄 Reset", "Reload Required", "A game reload is required to apply the new configuration.",
		"Information", "Increasing resolution, shrinking minimum font size, and speeding up text rendering can strain your system and hinder gameplay responsiveness.", "Lobby", "Proxied Lobby", "Resolution", "Low", "Medium", "High", "Very High",
		"Minimum Font Size", "Small", "Very Small", "Text Rendering Speed", "Slow", "Fast", "Large UI", "Place Balance Above", "Hide Zoom Buttons", "Font", "Shortcut Keys", "Reset", "Language", "Spawning", "Selectable Spawn", "🔑 My Account",
		"📈 Charts", "🧈 Gold Transfer", "🔗 Links", "ℹ️ Game Version", "🗑️ Delete Data", "Privacy Settings", "Force Restart Game", "☰ Game Menu", "📊 Game Statistics", "🏳️ Surrender", "🕊️ Call Peace Vote", "Android App", "iOS App",
		"Changelog", "Clan Results", "Tutorial", "Terms", "Privacy", "Do you want to delete all locally stored data, like usernames, account data and setting data?", "Accounts without gold will be deleted after some days of grace.", "🗑️ Delete",
		"User Privacy", "Check out our Privacy Policy at:", "Source Account", "Target Account", "Replay Error", "Warning", "Loading...", "An enemy ship belonging to {0} is heading towards your shore.", "Initiate Land Attack At Mouse Pointer",
		"Launch Ship Towards Mouse Pointer", "Increase Percentage Bar", "Decrease Percentage Bar", "Slightly Increase Percentage Bar", "Slightly Decrease Percentage Bar", "Switch UI Visibility", "Zoom In", "Zoom Out", "Camera Left",
		"Camera Right", "Camera Up", "Camera Down", "Avg. Attack Strength", "Land Attacks", "Ships launched", "Bots conquered", "Humans conquered", "Attacked by Bots", "Attacked by Humans", "Territorial Loss", "Received Support",
		"Overall Income", "Additional Costs", "Land War Losses", "Naval Losses", "Transmitted Support", "Overall Expenses", "Mountain Attacks", "Ships landed", "Territory", "Numbers", "Statistics", "Neutral", "Red", "Green", "Blue", "Yellow",
		"Magenta", "Cyan", "White", "Black", "Ship launched!", "Ship selected!", "Ship on the way!", "Maps"
	]
}

function dU() {
	var ea, ec, j6, a8f, a8g, a8h, a8i, a8j, a8k, z, ze, a8l;
	this.ur = !1, this.dO = function(ow, a8m) {
		if (1 === q.id && 13 <= q.ex && q.ex < 18) return a8m ? void(ze = ow) : ze !== ow ? void 0 : void q.ri.saveString(200, ow);
		a8m && (ze = ow, (a8l = document.createElement("a")).appendChild(document.createTextNode(ze)), this.ur = !0, a8l.title = ze, a8l.target = "_blank", a8l.href = ze, a8l.style.textAlign = "center", a8l.style.color = t.ma, a8l.style
			.position = "absolute", a8l.style.padding = "0px", a8l.style.margin = "0px", this.resize(), document.body.appendChild(a8l), ba.dW = !0)
	}, this.ql = function() {
		return !(!this.ur || (document.body.removeChild(a8l), this.ur = !1))
	}, this.gj = function(hc, hd) {
		return !!this.ur && ((hc < ea || hd < ec || ea + z < hc || ec + j6 < hd || ea + z - a8f < hc && hd < ec + a8f) && (ba.dW = !0, this.ur = !1, document.body.removeChild(a8l)), !0)
	}, this.resize = function() {
		var a2Q, a8n;
		this.ur && (a8j = Math.floor(.8 * (q.r.vH() ? at.z > at.j6 ? .6 : .55 : .4) * at.pH), a8f = Math.floor(.15 * a8j), a8g = Math.floor(.35 * a8f), a8h = Math.floor(.5 * a8f), a8i = Math.floor(2.5 * a8h), j6 = a8f + a8g + 3 * a8h, a2Q = b6.pF
			.qW(1, a8g / at.pL), a8k = Math.floor(at.pL * aK.measureText(ze, a2Q)), a8n = z = (a8j < a8k ? a8k : a8j) + 2 * a8i, z = Math.min(z, at.z - 2 * (q.r.vH() ? 2 : 1) * bX.gap), a2Q = b6.pF.qW(1, z / a8n * a8g / at.pL), a8k = Math
			.floor(at.pL * aK.measureText(ze, a2Q)), ea = Math.floor((at.z - z) / 2), ec = Math.floor((at.j6 - j6) / 2), a8l.style.font = a2Q, a8l.style.top = Math.floor((ec + 1.4 * a8h + a8f) / at.pL) + "px", a8l.style.left = Math.floor((
				ea + (z - a8k) / 2) / at.pL) + "px")
	}, this.rE = function() {
		this.ur && (rF.fillStyle = t.mX, rF.fillRect(ea, ec + a8f, z, j6 - a8f), rF.fillStyle = t.nS, rF.fillRect(ea, ec, z, a8f), rF.fillStyle = t.ma, rF.lineWidth = bX.vK, rF.strokeStyle = t.ma, rF.strokeRect(ea, ec, z, j6), rF.fillRect(ea,
			ec + a8f, z, bX.vK), rF.font = b6.pF.qW(1, .48 * a8f), b6.pF.textAlign(rF, 1), b6.pF.textBaseline(rF, 1), rF.fillText("You are leaving Territorial.io!", Math.floor(ea + (z - .5 * a8f) / 2), Math.floor(ec + .55 * a8f)), aG.a2c(
			Math.floor(ea + z - .8 * a8f), Math.floor(ec + .25 * a8f), Math.floor(.5 * a8f)), rF.setTransform(1, 0, 0, 1, 0, 0))
	}
}

function dS() {
	var gap, a7F, ea = [0, 0, 0, 0, 0],
		ec = [0, 0, 0, 0, 0],
		mB = [1, 1, 1, 1, 1],
		ew = [!0, !0, !0, !1, !1],
		eo = (this.fH = [!0, !0, !0, !1, !1], null);
	this.a8o = function(zC, a8p) {
		eo = zC, ew = a8p, a7F = [bF.a8q, bF.xN, bF.a8r, bF.a8r, bF.a8s], this.dO()
	}, this.dO = function() {
		if (aV.qq()) {
			var a5, qY = Math.floor((q.r.vH() ? .261 : .195) * at.pH),
				qZ = Math.floor(.9 * qY),
				a4v = Math.floor(.17 * qZ);
			if (gap = q.r.vH() ? 2 * bX.gap : bX.gap, mB[0] = qY / eo[0].width, mB[1] = qZ / eo[1].width, mB[2] = a4v / eo[2].height, mB[3] = a4v / eo[3].height, mB[4] = a4v / eo[4].height, mB[2] *= 1.7, mB[3] *= 1.07, ea[0] = gap, ea[1] = gap,
				ea[2] = gap, ea[3] = gap, ea[4] = Math.floor(2 * gap + mB[3] * eo[3].width), ec[0] = gap, ec[1] = ec[0] + gap + mB[0] * eo[0].height, ec[2] = ec[1] + gap + mB[1] * eo[1].height, ec[3] = ec[2] + gap + mB[2] * eo[2].height, ec[4] =
				ec[3], !ew[0])
				for (a5 = 0; a5 < 5; a5++) ec[a5] -= mB[0] * eo[0].height + gap;
			if (!ew[1])
				for (a5 = 2; a5 < 5; a5++) ec[a5] -= mB[1] * eo[1].height + gap
		}
	}, this.ur = function() {
		return !(7 === aU.xT() && q.r.vH())
	}, this.gj = function(hc, hd) {
		if (eo && this.ur())
			for (var a5 = ew.length - 1; 0 <= a5; a5--)
				if (ew[a5] && this.fH[a5] && ea[a5] < hc && ec[a5] < hd && hc < ea[a5] + mB[a5] * eo[a5].width && hd < ec[a5] + mB[a5] * eo[a5].height) return m.n(9, m.qQ, new a8t("You are leaving Territorial.io.", b6.pF.zd(a7F[a5]))), !0;
		return !1
	}, this.rE = function() {
		if (eo && this.ur()) {
			var a5;
			for (rF.imageSmoothingEnabled = !0, a5 = 0; a5 < 5; a5++) ew[a5] && this.fH[a5] && (rF.setTransform(mB[a5], 0, 0, mB[a5], ea[a5], ec[a5]), rF.drawImage(eo[a5], 0, 0));
			rF.setTransform(1, 0, 0, 1, 0, 0)
		}
	}
}

function cE() {
	var a8u, a8v, a8w;

	function a91(a5) {
		var button = aS.pl[a5],
			ea = button.ea,
			ec = button.ec,
			z = button.z,
			j6 = button.j6;
		rF.fillStyle = button.a8z, rF.fillRect(ea, ec, z, j6), a5 === a8u && (rF.fillStyle = a8w, rF.fillRect(ea, ec, z, j6)), rF.lineWidth = bX.vK, rF.strokeStyle = a8v, rF.strokeRect(ea, ec, z, j6),
			function(button) {
				var ea = button.ea,
					ec = button.ec,
					z = button.z,
					j6 = button.j6;
				b6.pF.textAlign(rF, 1), b6.pF.textBaseline(rF, 1), rF.font = button.font, rF.fillStyle = a8v, rF.fillText(button.a3f, Math.floor(ea + z / 2), Math.floor(ec + j6 / 2 + .1 * button.fontSize))
			}(button)
	}
	this.z = 0, this.j6 = 0, this.ec = 0, this.gap = 0, this.dO = function() {
		a8u = -1, a8v = t.ma, a8w = "rgba(255,255,255,0.16)", this.pl = new Array(7), this.j6 = Math.floor((q.r.vH() ? .123 : .093) * at.pH), this.z = Math.floor((q.r.vH() ? 3.96 : 4.2) * this.j6), this.gap = Math.floor(.025 * this.z);
		var a8x = Math.floor(.26 * this.j6),
			a8y = b6.pF.qW(1, a8x);
		this.pl[0] = {
			ea: 0,
			ec: 0,
			z: Math.floor(.6 * this.z - this.gap / 2),
			j6: this.j6,
			a3f: "Multiplayer",
			font: a8y,
			a8z: "rgba(22,88,22,0.8)",
			fontSize: a8x
		}, a8x = Math.floor(.18 * this.j6), a8y = b6.pF.qW(1, a8x), this.pl[1] = {
			ea: 0,
			ec: 0,
			z: this.z - this.pl[0].z - this.gap,
			j6: this.j6,
			a3f: "Single Player",
			font: a8y,
			a8z: "rgba(22,88,88,0.8)",
			fontSize: a8x
		}, this.pl[2] = {
			ea: 0,
			ec: 0,
			z: this.z,
			j6: Math.floor(.3 * this.j6),
			a3f: "",
			font: this.pl[1].font,
			a8z: "rgba(100,0,0,0.8)",
			fontSize: this.pl[1].fontSize
		}, this.pl[3] = {
			ea: 0,
			ec: 0,
			z: this.z,
			j6: this.j6,
			a3f: "Back",
			font: this.pl[0].font,
			a8z: "rgba(0,0,0,0.8)",
			fontSize: this.pl[0].fontSize
		}, this.pl[4] = {
			ea: 0,
			ec: 0,
			z: this.z,
			j6: Math.floor(.3 * this.j6),
			a3f: "The game was updated!",
			font: this.pl[1].font,
			a8z: "rgba(100,0,0,0.8)",
			fontSize: this.pl[1].fontSize
		}, this.pl[5] = {
			ea: 0,
			ec: 0,
			z: this.pl[0].z,
			j6: Math.floor(.8 * this.j6),
			a3f: "Reload",
			font: this.pl[0].font,
			a8z: "rgba(0,100,0,0.8)",
			fontSize: this.pl[0].fontSize
		}, this.pl[6] = {
			ea: 0,
			ec: 0,
			z: this.pl[1].z,
			j6: this.pl[5].j6,
			a3f: "Back",
			font: this.pl[0].font,
			a8z: "rgba(0,0,0,0.8)",
			fontSize: this.pl[0].fontSize
		}, this.a5z()
	}, this.a5z = function() {
		this.ec = Math.floor(.54 * at.j6), this.pl[0].ea = Math.floor(.5 * at.z - .5 * this.z), this.pl[1].ea = this.pl[0].ea + this.pl[0].z + this.gap, this.pl[2].ea = this.pl[3].ea = this.pl[0].ea, this.pl[4].ea = this.pl[5].ea = this.pl[0].ea,
			this.pl[6].ea = this.pl[1].ea, this.pl[0].ec = Math.floor(.54 * at.j6), this.pl[1].ec = this.pl[0].ec, this.pl[2].ec = Math.floor((at.j6 - this.pl[2].j6 - this.pl[3].j6 - this.gap) / 2), this.pl[3].ec = this.pl[2].ec + this.pl[2].j6 +
			this.gap, this.pl[4].ec = Math.floor((at.j6 - this.pl[4].j6 - this.pl[5].j6 - this.gap) / 2), this.pl[5].ec = this.pl[6].ec = this.pl[4].ec + this.pl[4].j6 + this.gap
	}, this.a90 = function() {
		a91(0), a91(1)
	}, this.a92 = function() {
		a91(2), a91(3)
	}, this.a93 = function() {
		a91(4), a91(5), a91(6)
	}, this.xp = function(ea, ec, lJ) {
		var a5 = -1;
		return 0 === aU.xT() ? a5 = this.yK(ea, ec, 0, 2) : 3 === aU.xT() ? a5 = this.yK(ea, ec, 3, 1) : 5 === aU.xT() && (a5 = this.yK(ea, ec, 5, 2)), a8u !== a5 && (a8u = a5, lJ) && (ba.dW = !0), -1 !== a5 && (aN.yE(), !0)
	}, this.yK = function(ea, ec, a94, size) {
		for (var a5 = a94; a5 < a94 + size; a5++)
			if (ea >= this.pl[a5].ea && ec >= this.pl[a5].ec && ea <= this.pl[a5].ea + this.pl[a5].z && ec <= this.pl[a5].ec + this.pl[a5].j6) return a5;
		return -1
	}
}

function a96() {
	function a9D(a6z) {
		return a6z < 0 ? 0 : 255 < a6z ? 255 : Math.floor(a6z)
	}
	this.z = 0, this.j6 = 0, this.ur = !1, this.a97 = 0, this.gap = 0, this.a98 = 0, this.a8f = 0, this.a99 = 0, this.a9A = 0, this.a9B = 0, this.colors = null, this.dO = function() {
		this.ur = !0, this.a97 = 0, this.resize()
	}, this.resize = function() {
		this.ur && (at.z < 1.4 * at.j6 ? this.z = Math.floor((q.r.vH() ? .94 : .43) * at.z) : (this.j6 = Math.floor((q.r.vH() ? .88 : .43) * at.j6), this.z = Math.floor(1.4 * this.j6)), this.j6 = this.z / 1.4, this.gap = this.z / 32, this.a8f =
			Math.floor(.25 * this.j6), this.a99 = (this.j6 - this.a8f - 3 * this.gap) / 2, this.a9A = this.z - 3 * this.gap - this.a99, this.a9B = (this.j6 - this.a8f - 4 * this.gap) / 3)
	}, this.a9C = function() {
		this.colors = [
			[0, 0, 0],
			[0, 0, 0]
		];
		var ow = be.dh.data[103].value.split("");
		if (ow.length < 6)
			for (var en = 2; 0 <= en; en--) this.colors[0][en] = a9D(256 * Math.random());
		else
			for (var a5 = 2; 0 <= a5; a5--) this.colors[0][a5] = a9D(4 * (10 * parseInt(ow[2 * a5]) + parseInt(ow[2 * a5 + 1])));
		this.a9E()
	}, this.a9F = function() {
		return [bG.ev(this.colors[0][0], 4), bG.ev(this.colors[0][1], 4), bG.ev(this.colors[0][2], 4)]
	}, this.xs = function(kl, km, deltaY) {
		var lz = (at.z - this.z) / 2;
		km -= (at.j6 - this.j6) / 2 + this.a8f, (kl -= lz) < 0 || km < 0 || kl >= this.z || km >= this.j6 - this.a8f || (lz = Math.floor(3 * km / (this.j6 - this.a8f)), this.colors[this.a98][lz] = a9D(this.colors[this.a98][lz] + (deltaY < 0 ? 1 :
			-1) * Math.max(Math.abs(.05 * deltaY), 1)), ba.dW = !0)
	}, this.gj = function(kl, km) {
		this.a97 = 0;
		var lz = (at.z - this.z) / 2;
		return km -= (at.j6 - this.j6) / 2, (kl -= lz) < 0 || km < 0 || kl >= this.z - 1 || km >= this.j6 - 1 || kl > this.z - (.4 * this.a8f + 3 * this.gap) && km < this.a8f ? (this.ur = !1, !(ba.dW = !0)) : kl < this.gap || km < this.gap + this
			.a8f || kl >= this.z || km >= this.j6 - this.gap || (kl < this.gap + this.a99 ? (km < this.gap + this.a8f + this.a99 && 0 !== this.a98 && (this.a98 = 0, ba.dW = !0), !0) : kl < this.gap + this.a99 || (kl -= 2 * this.gap + this.a99,
				km < this.gap + this.a8f + this.a9B ? (this.a97 = 1, this.colors[this.a98][0] = a9D(256 * kl / this.a9A), ba.dW = !0) : km < 2 * this.gap + this.a8f + this.a9B || (km < 2 * this.gap + this.a8f + 2 * this.a9B ? (this.a97 = 2,
					this.colors[this.a98][1] = a9D(256 * kl / this.a9A), ba.dW = !0) : !(km >= 3 * this.gap + this.a8f + 2 * this.a9B) || (this.a97 = 3, this.colors[this.a98][2] = a9D(256 * kl / this.a9A), ba.dW = !0))))
	}, this.a9E = function() {
		for (var en = 2; 0 <= en; en--) this.colors[0][en] = a9D(this.colors[0][en])
	}, this.a9G = function() {
		for (var ew, ow = "", a5 = 0; a5 < 3; a5++)(ew = bG.ev(this.colors[0][a5], 4)) < 10 && (ow += "0"), ow += ew.toString();
		return ow
	}, this.xp = function(kl) {
		0 !== this.a97 && (kl -= 2 * this.gap + this.a99 + (at.z - this.z) / 2, this.colors[this.a98][this.a97 - 1] = a9D(256 * kl / this.a9A), ba.dW = !0)
	}, this.yD = function() {
		0 < this.a97 && (this.a97 = 0, this.a9E(), be.pw.px(103, this.a9G()), ba.dW = !0)
	}, this.rE = function() {
		var lz = (at.z - this.z) / 2,
			m0 = (at.j6 - this.j6) / 2;
		rF.setTransform(1, 0, 0, 1, lz, m0), rF.fillStyle = t.mX, rF.fillRect(0, this.a8f, this.z, this.j6 - this.a8f), rF.fillStyle = t.mj, rF.fillRect(0, 0, this.z, this.a8f), rF.fillStyle = t.ma, rF.lineWidth = bX.vK, rF.strokeStyle = t.ma, rF
			.strokeRect(-1, -1, this.z + 2, this.j6 + 2), rF.fillRect(0, this.a8f, this.z, bX.vK), rF.font = b6.pF.qW(1, .31 * this.a8f), b6.pF.textBaseline(rF, 1), b6.pF.textAlign(rF, 1), rF.fillText("Choose Your Nation's Color!", Math.floor((
				this.z - this.gap - .4 * this.a8f) / 2), Math.floor(.55 * this.a8f)), this.a9H(0), rF.lineWidth = bX.vK, this.a9I(0), this.a9I(1), this.a9I(2), aG.a2c(Math.floor(lz + this.z - .4 * this.a8f - this.gap), Math.floor(m0 + .3 * this
				.a8f), Math.floor(.4 * this.a8f)), rF.setTransform(1, 0, 0, 1, 0, 0)
	}, this.a9H = function(a5) {
		var hH = this.colors[a5][0],
			qm = this.colors[a5][1],
			a5 = this.colors[a5][2];
		rF.fillStyle = "rgb(" + hH + "," + qm + "," + a5 + ")", rF.fillRect(this.gap, this.a8f + this.gap, this.a99, 2 * this.a99 + this.gap), rF.lineWidth = bX.vK, rF.strokeStyle = t.ma, rF.strokeRect(this.gap, this.a8f + this.gap, this.a99, 2 *
			this.a99 + this.gap), rF.fillStyle = hH + qm + a5 < 306 && qm < 150 ? t.ma : t.mR, rF.font = b6.pF.qW(1, .32 * this.a9B), b6.pF.textAlign(rF, 1), b6.pF.textBaseline(rF, 1), rF.rotate(-Math.PI / 2), rF.fillText("National Color",
			Math.floor(-1.5 * this.gap - this.a8f - this.a99), Math.floor(this.gap + .5 * this.a99)), rF.rotate(Math.PI / 2)
	}, this.a9I = function(a5) {
		rF.fillStyle = "rgb(" + (0 === a5 ? 150 : 2 === a5 ? 30 : 0) + "," + (1 === a5 ? 130 : 2 === a5 ? 30 : 0) + "," + (2 === a5 ? 220 : 0) + ")", rF.fillRect(2 * this.gap + this.a99, this.a8f + this.gap + a5 * (this.gap + this.a9B), Math
				.floor(this.colors[this.a98][a5] * this.a9A / 255), this.a9B), rF.strokeStyle = t.ma, rF.strokeRect(2 * this.gap + this.a99, this.a8f + this.gap + a5 * (this.gap + this.a9B), this.a9A, this.a9B), rF.fillStyle = t.ma, rF.font = b6
			.pF.qW(1, .32 * this.a9B), b6.pF.textBaseline(rF, 1), b6.pF.textAlign(rF, 0), rF.fillText((0 === a5 ? "Red: " : 1 === a5 ? "Green: " : "Blue: ") + this.colors[0][a5].toString(), 3 * this.gap + this.a99, Math.floor(this.a8f + this
				.gap + a5 * (this.gap + this.a9B) + .53 * this.a9B))
	}
}

function cF() {
	var a9J, a9K, a3p, a3z, a4n, a9L, a9M, a9N, a9O, a2Q, fontSize, lk, a9P, a9R, a9Q = 0;

	function a9U() {
		return aw.lB.a9V[(a9P + a9Q) % aw.lB.a9W]
	}

	function a9S() {
		a9P++, lk = ba.e0, aw.lB.a9X(a9U(), 4) && (a9R = !0, aw.a9Y.a9Z(a9U()))
	}

	function a9a() {
		0 === a9P ? k.xb(3249) : 1 === a9P && __fx.customLobby.isActive() ? (k.xb(3249), __fx.customLobby.setActive(false)) : (a9P === aw.lB.a9W - 1 && (a9P = -1), a9S())
	}

	function a9h(ec, a5g, a9g) {
		var lz = Math.floor((at.z - a3z) / 2) + a9M,
			mD = lz + Math.floor(a9g * (a3z - 2 * a9M));
		rF.lineWidth = a5g, rF.beginPath(), rF.moveTo(lz, ec), rF.lineTo(mD, ec), rF.lineTo(Math.floor(lz - a9M + a9g * a3z), ec + a3p), rF.lineTo(lz - a9M, ec + a3p), rF.closePath()
	}
	this.dO = function() {
		aU.setState(6), a9J = 0, a9K = 1, a9N = "rgba(0,220,120,0.4)", a9O = "rgba(0,0,0,0.8)", this.resize(), ba.dW = !0, a9P = 0, a9R = !1, a9S()
	}, this.resize = function() {
		a3z = Math.floor((q.r.vH() ? .5 : .25) * at.pH), a4n = a3z + 12, a3p = Math.floor(.125 * a3z), a9M = 3 * a3p, a9L = Math.floor(.225 * a3z), fontSize = Math.floor(.3 * a3p), a2Q = b6.pF.qW(0, fontSize)
	}, this.a9T = function(em) {
		a9Q = em
	}, this.xU = function(xP) {
		xP === a9U() && (a9R = !1, a9a())
	}, this.a9b = function(xP) {
		6 !== aU.xT() || a9R || (lk = ba.e0, a9R = !0)
	}, this.gj = function(ea, ec) {
		var lz = Math.floor((at.z - a4n) / 2),
			m0 = Math.floor(.5 * (at.j6 - bX.gap - a3p - a9L)) + a3p + bX.gap;
		return lz < ea && ea < lz + a4n && m0 < ec && ec < m0 + a9L && (this.yZ(), aS.xp(ea, ec, !1), !0)
	}, this.yZ = function() {
		aw.lB.xe(3260), __fx.customLobby.setActive(false), m.lB.xd()
	}, this.iR = function() {
		6 === aU.xT() && (a9R ? ba.e0 > lk + 12e3 && k.xb(3250) : ba.e0 > lk + 12e3 && a9a(), 100 < (a9J += .07 * a9K * (a9J < 16 ? 5 + a9J : 84 < a9J ? 105 - a9J : 17)) ? (a9J = 100, a9K = -1) : a9J < 0 && (a9J = 0, a9K = 1), a9N = "rgba(0," +
			Math.floor(190 - 1.9 * a9J) + "," + Math.floor(120 - 1.2 * a9J) + "," + (.4 + .004 * a9J) + ")", a9O = "rgba(0," + Math.floor(1.9 * a9J) + "," + Math.floor(1.2 * a9J) + "," + (.8 - .004 * a9J) + ")", ba.dW = !0)
	}, this.rE = function() {
		var ea = Math.floor((at.z - a4n) / 2),
			ec = Math.floor(.5 * (at.j6 - bX.gap - a3p - a9L));
		! function(title, ec, a5g, a9g) {
			rF.fillStyle = a9O, a9h(ec, a5g, 1), rF.fill(), rF.fillStyle = a9N, a9h(ec, a5g, a9g), rF.fill(), rF.strokeStyle = t.ma, a9h(ec, a5g, 1), rF.stroke(),
				function(a9j, ec) {
					b6.pF.textAlign(rF, 1), b6.pF.textBaseline(rF, 1), rF.font = a2Q, rF.fillStyle = t.ma, rF.fillText(a9j, Math.floor(.5 * at.z), Math.floor(ec + .58 * a3p))
				}(title, ec)
		}(L(102), ec, 3, a9J / 100),
		function(ea, ec, z, j6, a3f) {
			rF.fillStyle = t.mV, rF.fillRect(ea, ec, z, j6), rF.lineWidth = 3, rF.strokeStyle = t.ma, rF.strokeRect(ea, ec, z, j6);
			var eT = Math.floor(.3 * j6);
			b6.pF.textAlign(rF, 1), b6.pF.textBaseline(rF, 1), rF.font = b6.pF.qW(0, eT), rF.fillStyle = t.ma, rF.fillText(a3f, Math.floor(ea + z / 2), Math.floor(ec + j6 / 2 + .1 * eT))
		}(ea, ec + a3p + bX.gap, a4n, a9L, L(13))
	}
}

function cG() {
	var dz = 0;
	this.dO = function() {
		aS.dO(), dz = 0
	}, this.setState = function(a9k) {
		dz = a9k
	}, this.xT = function() {
		return dz
	}, this.a9l = function() {
		this.setState(8), ao.xf(), m.s1()
	}, this.yO = function(e) {
		if (!bN.sr) return !1;
		if (!(ba.e0 < 400)) {
			if ("Enter" === e.key || "Escape" === e.key) {
				if (this.a9m()) return !0;
				if ("Enter" === e.key) {
					if (0 === dz) return !0;
					if (7 === dz) return !0
				}
			}
			return !1
		}
	}, this.a9n = function() {
		bU.resize()
	}, this.a9m = function() {
		return !!bU.ql()
	}, this.gj = function(ea, ec) {
		!bN.sr || bU.gj(ea, ec) || 6 === dz && aT.gj(ea, ec) || bT.gj(ea, ec) || (aN.gj(ea, ec), 0 !== dz && 7 === dz && ao.gj(ea, ec))
	}, this.xp = function(ea, ec) {
		!aN.a5s && aS.xp(ea, ec, !0) || aN.xp(ea, ec)
	}, this.click = function(ea, ec) {
		aN.yF()
	}, this.xs = function(ea, ec, deltaY) {}, this.a9o = function() {
		aS.a5z(), 0 !== dz && 7 === dz && ao.resize(), ba.dW = !0
	}, this.rE = function() {
		8 !== dz && 10 !== dz && (rF.imageSmoothingEnabled = !0, this.uS(), 0 !== dz && (aN.rE(), aI.rE(), this.a9p(), bT.rE()), 0 !== dz && (6 === dz ? aT.rE() : 7 === dz && ao.rE()), bU.rE(), m.rE())
	}, this.uS = function() {
		var a9r, a9q;
		if (__fx.makeMainMenuTransparent) rF.clearRect(0, 0, at.z, at.j6);
		else bN.sr ? (a9q = at.z / bN.ee, a9r = at.j6 / bN.ef, rF.setTransform(a9q = a9r < a9q ? a9q : a9r, 0, 0, a9q, Math.floor((at.z - a9q * bN.ee) / 2), Math.floor((at.j6 - a9q * bN.ef) / 2)), rF.drawImage(bN.st, 0, 0), rF.setTransform(1, 0,
			0, 1, 0, 0), rF.fillStyle = t.mV) : rF.fillStyle = t.mR, rF.fillRect(0, 0, at.z, at.j6)
	}, this.a9p = function() {
		var ec = Math.floor(.3 * at.j6),
			hE = aV.a9s("territorial.io"),
			hD = (hD = 1.75 * at.j6 / hE.width) * hE.width < .98 * at.z ? .98 * at.z / hE.width : hD,
			ea = (rF.globalAlpha = .15, rF.imageSmoothingEnabled = !1, Math.floor(.5 * (at.z - hD * hE.width))),
			ea = Math.floor(ea / hD),
			ec = Math.floor(ec - .5 * hE.height * hD),
			ec = Math.floor(ec / hD);
		rF.setTransform(hD, 0, 0, hD, ea, ec), rF.drawImage(hE, ea, ec), rF.setTransform(1, 0, 0, 1, 0, 0), rF.globalAlpha = 1, rF.imageSmoothingEnabled = !0
	}
}

function ch() {
	var a6, a9v, a9w, a9x;
	this.a9t = 0, this.a9u = 0, this.dO = function() {
		var hE, mB;
		7 === aU.xT() && (a6 = bC.a6, a9v = 0, a9w = ba.e0 + 4500, a9x = aw.a3L.a9y() ? 2 : 0, aU.setState(10), rF.imageSmoothingEnabled = !0, aU.uS(), hE = aV.a9s("loading"), mB = (q.r.vH() ? .396 : .25) * at.pH / hE.width, rF.setTransform(mB,
			0, 0, mB, Math.floor((at.z - mB * hE.width) / 2), Math.floor((at.j6 - mB * hE.height) / 2)), rF.imageSmoothingEnabled = !1, rF.drawImage(hE, 0, 0), rF.setTransform(1, 0, 0, 1, 0, 0))
	}, this.lH = function() {
		0 < a9x && ba.e0 > a9w && (a9x--, a9w += 4500, 0 === ba.a9z) && 0 === ba.jZ() && (0 === a9x && aw.lB.xW < aw.lB.aA0 && (aw.lB.xW += aw.lB.aA1), aw.lB.a9X(aw.lB.xW, 5))
	}, this.aA2 = function() {
		var g3, a5;
		return 10 === aU.xT() && (g3 = bC.a6, a5 = bC.oF, aw.a3L.aA3(a6), a6 = null, bC.dO(g3), bC.oF = a5, !0)
	}, this.aA4 = function() {
		10 === aU.xT() && 2 <= ++a9v && (aw.a3L.aA3(a6), a6 = null)
	}
}

function ce() {
	var aA6, aA7, aA8, aA9, aAA, aAB, aAC, pA, aAE, aAG, aAH, aAI, aAJ, aAL, aAM, aAN, aAO, aAP, aAD = 48,
		aAK = [0, 0, 0, 0];

	function aAT(a5, np) {
		a5 = aAC[a5].getContext("2d", {
			alpha: !0
		});
		a5.clearRect(0, 0, aAD, aAD), ad.sw.vL(np, a5, 0, 0, aAD)
	}

	function aAS(a5, zC) {
		var a5 = aAC[a5].getContext("2d", {
				alpha: !0
			}),
			zoom = (a5.clearRect(0, 0, aAD, aAD), aAD / zC.width),
			e1 = aAD / zC.height,
			zoom = e1 < zoom ? e1 : zoom;
		a5.imageSmoothingEnabled = !0, a5.setTransform(zoom, 0, 0, zoom, Math.floor((aAD - zoom * zC.width) / 2), Math.floor((aAD - zoom * zC.height) / 2)), a5.drawImage(zC, 0, 0), a5.setTransform(1, 0, 0, 1, 0, 0)
	}

	function aAX(eo, hH, aAa, hF) {
		hF.beginPath(), hF.moveTo(eo, eo), hF.lineTo(eo + Math.cos(aAa) * hH, eo + Math.cos(aAa + 1.5 * Math.PI) * hH), hF.stroke()
	}

	function aAq() {
		if (7 === aU.xT()) {
			for (var hO, zC, hF, e1, em = -1, a5 = pA.length - 1; 0 <= a5; a5--)
				if (null === pA[a5].hE) {
					em = a5;
					break
				} - 1 !== em && (null !== (hO = aAe(pA[em].aAi, pA[em].aAj)) ? pA[em].hE = hO : (hO = bN.aAr(pA[em].aAi, pA[em].aAj), (zC = document.createElement("canvas")).width = 128, zC.height = 128, hF = zC.getContext("2d", {
				alpha: !1
			}), e1 = 128 / hO.ef, e1 = Math.max(128 / hO.ee, e1), hF.imageSmoothingEnabled = !0, hF.setTransform(e1, 0, 0, e1, (128 - e1 * hO.ee) / 2, (128 - e1 * hO.ef) / 2), hF.drawImage(hO.st, 0, 0), pA[em].hE = zC), ba.dW = !0)
		}
	}

	function aAe(aAi, aAj) {
		for (var a5 = pA.length - 1; 0 <= a5; a5--)
			if (null !== pA[a5].hE && pA[a5].aAi === aAi && pA[a5].aAj === aAj) return pA[a5].hE;
		return null
	}
	this.dP = function() {
			aAJ = [L(103), L(104), L(105), L(106)]
		}, this.dO = function() {
			var a5;
			for (aAP = 0, aAG = -1, aU.setState(7), pA = [], this.resize(), aAC = new Array(13), a5 = aAC.length; 0 <= a5; a5--) aAC[a5] = document.createElement("canvas"), aAC[a5].width = aAD, aAC[a5].height = aAD;
			for (a5 = 0; a5 < 7; a5++) ! function(fy) {
				var aAV, hF = aAC[fy - 2].getContext("2d", {
						alpha: !0
					}),
					aAU = 1.5 * Math.PI,
					eo = Math.floor(.5 * aAD),
					hH = Math.floor(.48 * aAD);
				hF.lineWidth = 2, hF.strokeStyle = t.ma, hF.clearRect(0, 0, aAD, aAD);
				for (var a5 = 0; a5 < fy; a5++) aAV = aAU + 2 * Math.PI / fy,
					function(a5, eo, hH, aAU, aAV, hF) {
						hF.fillStyle = bb.aAZ[a5], hF.beginPath(), hF.arc(eo, eo, hH, aAU, aAV), hF.lineTo(eo, eo), hF.fill()
					}(a5 + 1, eo, hH, aAU, aAV, hF), 0 !== a5 && aAX(eo, hH, aAU, hF), aAU = aAV;
				aAX(eo, hH, 1.5 * Math.PI, hF),
					function(eo, hH, hF) {
						hF.beginPath(), hF.arc(eo, eo, hH, 0, 2 * Math.PI), hF.stroke()
					}(eo, hH, hF)
			}(a5 + 2);
			aAS(7, aV.get(4)), aAT(8, ad.uo.v9 + ad.uo.vQ), aAT(9, ad.uo.v9 + ad.uo.vO), aAT(10, 1024 - ad.uo.v6), aAS(11, aV.get(19)), aAS(12, aV.get(20)), ba.dW = !0
		}, this.yY = function() {
			this.xf(), aw.lB.xe(3240), __fx.customLobby.setActive(false), aU.setState(0), m.n(5, 5)
		},
		__fx.customLobby.setLeaveFunction(() => this.yY()), this.xf = function() {
			pA = [], aAC = []
		}, this.a3n = function() {
			return aAI
		}, this.resize = function() {
			var aAb, sf, a53, aAc;
			for (aA8 = [0, 0], aAE = [0, 0, 0, 0], aAO = q.r.vH() ? (aAH = Math.floor(.8 * .4 * at.pH), aAI = Math.floor(.56 * aAH), aAE[0] = bX.gap, at.z < at.j6 ? (aAE[1] = aAI + 2 * bX.gap, aAE[2] = at.z - 3 * aAE[0], aAE[3] = at.j6 - 3 * bX.gap -
					aAI, aAM = Math.floor(.95 * aAI), aAN = Math.floor((at.z - aAH - bX.gap) / 2), Math.floor(bX.gap + aAI / 2)) : (aAE[1] = bX.gap, aAE[2] = at.z - 3 * bX.gap - aAH, aAE[3] = at.j6 - 2 * bX.gap, aAM = Math.floor(.8 * aAH), aAE[
					3] - aAI < aAH && (aAM = Math.floor(.8 * (aAE[3] - aAI)), aAM = a30(aAI, aAM)), aAN = Math.floor(at.z - aAH / 2 - bX.gap), a30(aAO = Math.floor(bX.gap + aAI + (aAE[3] - aAI) / 2), Math.floor(aAI + 2 * bX.gap + aAM / 2)))) : (aAH =
					Math.floor(.2016 * at.pH), aAI = Math.floor(.56 * aAH), aAE[2] = Math.floor(.5 * at.z), aAE[3] = Math.floor(.5 * at.j6), aAE[1] = Math.floor(.45 * (at.j6 - aAE[3])), aAE[0] = Math.floor((at.z - aAE[2]) / 2), aAM = Math.floor(.75 *
						aAI), aAN = Math.floor(at.z / 2), Math.floor(aAE[1] + aAE[3] + (at.j6 - aAE[3] - aAE[1]) / 2)), aAL = b6.pF.qW(1, .65 * aAI / 4), aAb = sf = 1; aAb * sf < pA.length;) aAE[3] / (sf + 1) < aAE[2] / (aAb + 1) ? aAb++ : sf++;
			a53 = (aAE[2] - (aAb - 1) * bX.gap) / aAb, aAc = (aAE[3] - (sf - 1) * bX.gap) / sf, aA6 = a53 < aAc ? a53 : aAc, aA7 = Math.floor(aA6), aAB = b6.pF.qW(1, .5 * aA6 / 5), aA8[0] = aAb, aA8[1] = sf, aA9 = aAE[0] + Math.floor((aAE[2] - aA8[
				0] * aA6 - (aA8[0] - 1) * bX.gap) / 2), aAA = aAE[1] + Math.floor((aAE[3] - aA8[1] * aA6 - (aA8[1] - 1) * bX.gap) / 2)
		}, this.px = function(aAd, g3) {
			var a5, e1, hE, eT = pA.length;
			for (aAK = aAd, a5 = 0; a5 < g3.length; a5++) hE = aAe(g3[a5].e8, g3[a5].a1K), pA.push({
				aAf: g3[a5].id,
				aAg: g3[a5].aAg,
				aAh: g3[a5].a0u,
				aAi: g3[a5].e8,
				aAj: g3[a5].a1K,
				joined: g3[a5].aAk,
				a3k: g3[a5].a9g,
				aAl: g3[a5].aAl,
				hE: hE,
				aAm: g3[a5].aAm,
				aAn: g3[a5].aAn,
				aAo: g3[a5].aAo
			});
			for (a5 = eT - 1; 0 <= a5; a5--) pA.shift();
			if (-1 !== aAG)
				for (e1 = aAG, aAG = -1, a5 = pA.length - 1; 0 <= a5; a5--)
					if (pA[a5].aAf === e1) {
						aAG = e1;
						break
					}(pA.length > aAP || pA.length < aAP) && (aAP = pA.length, this.resize()), this.aAp(), ba.dW = !0
		}, this.aAp = function() {
			for (var a5 = pA.length - 1; 0 <= a5; a5--) null === pA[a5].hE && setTimeout(aAq, 0)
		}, this.gj = function(ea, ec) {
			return 4 * ((ea - aAN) * (ea - aAN) + (ec - aAO) * (ec - aAO)) <= aAM * aAM ? (this.yY(), aS.xp(ea, ec, !1), !0) : function(ea, ec) {
				var em, en, lz, m0;
				if (0 !== pA.length) {
					var a5 = 0;
					for (m0 = aAA, en = 0; en < aA8[1]; en++) {
						for (lz = aA9, em = 0; em < aA8[0]; em++) {
							if (lz < ea && ea < lz + aA6 && m0 < ec && ec < m0 + aA6) return aw.a9Y.aAt(pA[a5].aAf), aAG = pA[a5].aAf !== aAG ? pA[a5].aAf : -1, ba.dW = !0;
							if (++a5 >= pA.length) return !1;
							lz += aA6 + bX.gap
						}
						m0 += aA6 + bX.gap
					}
				}
				return !1
			}(ea, ec)
		}, this.rE = function() {
			var em, en, ea, hH, zoom, a5 = 0,
				ec = aAA;
			if (rF.imageSmoothingEnabled = !0, rF.lineWidth = 3, hH = Math.floor(.5 * aAM), rF.fillStyle = t.mV, rF.beginPath(), rF.arc(aAN, aAO, hH, 0, 2 * Math.PI), rF.fill(), rF.strokeStyle = t.ma, rF.beginPath(), rF.arc(aAN, aAO, hH, 0, 2 * Math
					.PI), rF.stroke(), hH = aV.get(0).height, zoom = .6 * aAM / hH, rF.setTransform(zoom, 0, 0, zoom, Math.floor(aAN - .56 * zoom * aV.get(0).width), Math.floor(aAO - .5 * zoom * hH)), rF.drawImage(aV.get(0), 0, 0), rF.setTransform(1,
					0, 0, 1, 0, 0), function() {
					rF.fillStyle = t.mV, rF.fillRect(at.z - aAH - bX.gap, bX.gap, aAH, aAI), 0 <= aAG ? (rF.fillStyle = t.ms, rF.fillRect(at.z - aAH - bX.gap, bX.gap, aAH, Math.floor(.25 * aAI))) : (rF.fillStyle = t.nJ, rF.fillRect(at.z - aAH - bX
						.gap, bX.gap + Math.floor(.25 * aAI), aAH, Math.floor(.25 * aAI)));
					rF.strokeStyle = t.ma, rF.strokeRect(at.z - aAH - bX.gap, bX.gap, aAH, aAI), rF.fillStyle = t.ma, rF.font = aAL, b6.pF.textBaseline(rF, 1);
					for (var ec, aAx = Math.floor(.04 * aAH), a2f = Math.floor(.08 * aAI), a5 = 3; 0 <= a5; a5--) ec = Math.floor(bX.gap + (a5 + 1) * (aAI + 2 * a2f) / 5 - a2f), b6.pF.textAlign(rF, 0), rF.fillText(aAJ[a5], at.z - aAH - bX.gap + aAx,
						ec), b6.pF.textAlign(rF, 2), rF.fillText(b6.x3.a0F(aAK[a5]), at.z - bX.gap - aAx, ec)
				}(), 0 !== pA.length)
				for (en = 0; en < aA8[1]; en++) {
					for (ea = aA9, em = 0; em < aA8[0]; em++) {
						if (! function(a5, ea, ec) {
								var zoom, en, aAy, aB0, aB1;
								null === pA[a5].hE ? (rF.fillStyle = t.mV, rF.fillRect(ea, ec, aA7, aA7)) : (zoom = aA7 / 128, rF.setTransform(zoom, 0, 0, zoom, ea, ec), rF.drawImage(pA[a5].hE, 0, 0), rF.setTransform(1, 0, 0, 1, 0, 0));
								aAG === pA[a5].aAf ? (function(ea, ec) {
									var qY = Math.floor(.2 * aA7),
										qZ = Math.floor(.3 * qY);
									rF.fillStyle = t.mu, rF.fillRect(ea + aA7 - qY, ec, qY, qY), rF.fillStyle = t.mR, rF.fillRect(ea + aA7 - qY, ec, 2, qY), rF.fillRect(ea + aA7 - qY, ec + qY - 2, qY, 2), aG.a2c(ea + aA7 - qY + qZ, ec + qZ,
										qY - 2 * qZ), rF.setTransform(1, 0, 0, 1, 0, 0)
								}(ea, ec), rF.lineWidth = 3, rF.fillStyle = t.mu) : rF.fillStyle = t.mT;
								aB0 = Math.floor(aA6 / 4), rF.fillRect(ea, ec, aB0, aB0), aB1 = Math.floor(ec + .8 * aA6), rF.fillRect(ea, aB1, aA7, Math.floor(aA6 / 5)),
									function(a5, ea, ec) {
										var zoom;
										pA[a5].aAh && (a5 = aV.get(4), zoom = .5 * aA6 / a5.width, rF.setTransform(zoom, 0, 0, zoom, Math.floor(ea + (aA6 - zoom * a5.width) / 2), Math.floor(ec + (aA6 - zoom * a5.height) / 2)), rF.globalAlpha = .6, rF
											.drawImage(a5, 0, 0), rF.globalAlpha = 1, rF.setTransform(1, 0, 0, 1, 0, 0))
									}(a5, ea, ec);
								var aB3 = new Array(pA[a5].aAm);
								if (pA[a5].aAm) {
									for (en = aAy = 0; en < pA[a5].aAm; en++) pA[a5].aAn[en] = b6.uY.zO(pA[a5].aAn[en], aAB, .4 * aA6), aB3[en] = ("" === pA[a5].aAn[en] ? L(107) : "[" + pA[a5].aAn[en] + "]: ") + pA[a5].aAo[en];
									for (en = 0; en < pA[a5].aAm; en++) aAy = Math.max(aAy, aK.measureText(aB3[en], aAB));
									aAy += .05 * aA6, en = 5 === pA[a5].aAm, aB0 = en ? ec + aB0 : Math.max(ec + .8 * aA6 - .11 * pA[a5].aAm * aA6, ec + aB0), aB1 = en ? aB1 : Math.min(aB0 + .11 * pA[a5].aAm * aA6 + .05 * aA6, aB1), rF.fillRect(ea,
										aB0, aAy, aB1 - aB0)
								}
								for (rF.font = aAB, b6.pF.textBaseline(rF, 1), b6.pF.textAlign(rF, 0), rF.fillStyle = t.nE, rF.fillText(pA[a5].joined.toString(), Math.floor(ea + .22 * aA6), Math.floor(ec + .9 * aA6)), rF.fillStyle = t.ma, en =
									0; en < pA[a5].aAm; en++) rF.fillText(aB3[pA[a5].aAm - en - 1], Math.floor(ea + .03 * aA6), Math.floor(ec + .77 * aA6 - .11 * en * aA6));
								b6.pF.textAlign(rF, 2), rF.fillStyle = t.n0, rF.fillText(pA[a5].a3k.toString(), Math.floor(ea + .81 * aA6), Math.floor(ec + .9 * aA6)), rF.strokeStyle = aAG === pA[a5].aAf ? t.mt : t.mc, rF.strokeRect(ea, ec, aA7,
									aA7), aB1 = Math.floor(.16 * aA6), zoom = aB1 / aAD, rF.setTransform(zoom, 0, 0, zoom, Math.floor(ea + .33 * aB1), Math.floor(ec + .33 * aB1)), aAC.length > pA[a5].aAg && rF.drawImage(aAC[pA[a5].aAg], 0, 0);
								rF.setTransform(zoom, 0, 0, zoom, Math.floor(ea + .15 * aB1), Math.floor(ec + aA6 - 1.08 * aB1)), rF.drawImage(aAC[11], 0, 0), rF.setTransform(zoom, 0, 0, zoom, Math.floor(ea + aA6 - 1.05 * aB1), Math.floor(ec + aA6 -
									1.15 * aB1)), rF.drawImage(aAC[12], 0, 0), rF.setTransform(1, 0, 0, 1, 0, 0)
							}(a5, Math.floor(ea), Math.floor(ec)), ++a5 >= pA.length) return;
						ea += aA6 + bX.gap
					}
					ec += aA6 + bX.gap
				}
		}
}

function cH() {
	var aB5, hE, wZ, aB6;

	function aBC(oF, name, aBD, ow) {
		wZ[oF] = name, hE[oF] = new Image, hE[oF].onload = function() {
			! function(oF, aBD) {
				var a06, a07 = null;
				7 === aBD ? a06 = b6.yf.a09 : 8 === aBD ? (a06 = b6.yf.a0C, a07 = .1) : 3 === aBD ? (a06 = b6.yf.a0A, a07 = .06) : 5 === aBD ? a06 = b6.yf.a0D : 6 === aBD ? a06 = b6.yf.a08 : 4 === aBD && (a06 = b6.yf.a0E);
				hE[oF] = b6.yf.a05(hE[oF], a06, a07)
			}(oF, aBD), aBF()
		}, hE[oF].onerror = function(e) {
			console.error("Error loading image at index", oF, "Error:", e), aBF()
		}, hE[oF].src = "data:image/png;base64," + ow
	}

	function aBF() {
		aB5--, aB9()
	}

	function aB9() {
		0 === aB5 && (aB5 = -1, aBB(), ba.dW = !0, hE[7] = aB6, hE[8] = aB6, hE[9] = aB6, hE[10] = aB6, 5 === m.qQ) && m.aBH().aBI.resize()
	}

	function aBB() {
		aF.a1t(), bT.a8o([hE[8], hE[16], hE[9], hE[9], hE[10]], [2 !== q.id, 1 !== q.id, !0, !0, !0]), ad.sw = new uq, ad.sw.dO(), aq.dP()
	}
	this.dO = function() {
		if (void 0 === hE) {
			aB5 = 23, hE = new Array(aB5), wZ = new Array(aB5), (aB6 = document.createElement("canvas")).width = 1;
			for (var a5 = aB5 - (aB6.height = 1); 0 <= a5; a5--) hE[a5] = aB6;
			aBB(), aBC(0, "exit", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAFYAAABGBAMAAACkrn5fAAAAHlBMVEUAAAAiJCI4OjdcXltoameIioejpqPExsPY29j///9xarZIAAAAyUlEQVRIx+3WQQqCQBTG8TdOB5DUI+S6nRcoPIFhu1bBHGGO4Any3TYxAkWTv1DSYr71D4b5mOE9kWmszkeC/ZptT6Ocl+xj5qgtbVR1iZn9VE2wU2uO2Jryhm2h2OaKbdZgu/NKrXVK7f6q1JpaqTWFYpvrUtqhPTTYpst0aBOv2Drltlxh392iu0U1t5I4biX13PZvF7+zvOFWihXWlNy+aqZ/M3LcivXcds1xK9kKK3GYAVtYe+8CZ/c/7Br9blSNcgn75O/tE26TasUvH0ImAAAAAElFTkSuQmCC"
					), aBC(1, "victory", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADYAAAAKAQMAAADFMz9IAAAABlBMVEUAAAD///+l2Z/dAAAASUlEQVQI12M4lvj+++efLQzHkoH0jxaGI+yMbcIcZxiOpEHoMyD6xx+GHBB9oIIhA0Q/MGCoSAfSBQYMBskP2z9bAOlEIC1hAADJYSFMvxXXTAAAAABJRU5ErkJggg=="), aBC(2, "defeat", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aBC(3, "orders", 6,
					"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"
					), aBC(4, "crown", 4,
					"iVBORw0KGgoAAAANSUhEUgAAANIAAADSCAIAAACw+wkVAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0xMi0yM1QxNDowNDo0NyswMzozMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1ZmFkNDE3NC03OWNiLTUwNDgtYWIyMi04NThmMGExODUzZTEiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4ZDQ1NTIyYS02MDRlLWYxNDUtYWM3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"
					), aBC(5, "arena", 6, "iVBORw0KGgoAAAANSUhEUgAAACsAAAAKAQMAAAAXYzUQAAAABlBMVEUAAAD///+l2Z/dAAAARklEQVQI12OwqbdXOHyAoabe3uD4AYaURAOLYw4gygZE1dvpAKl/FXZq/g8Y/tUYGAOpY3kGxj4JDMfS7Q3PAKlke4MzCQCHpxoxsfTs8gAAAABJRU5ErkJggg=="),
				aBC(6, "territorial.io", 6,
					"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phjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAA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jz//+c+xZMmS+PWvfx3Lly9PnQXUssWLF8c3vvGN1BmZM3To0Jg1a1bqDBJp3rx5LF++PHbcccfUKZm2dOnS+PrXv546AwAAAAAAAAAAAACAWlYvdQAAAAAAAAAAAAAAAGxLRUVFcfzxx8fhhx8eBxxwQLRv3z6aNm2aOiuv7bDDDrHffvvFfvvtFyeddFJcddVVsWrVqnjppZdi8eLFcd9998Wrr76aOhMA8t7IkSON9uSAAw44II455piYP39+6hQAAAAAAAAAAAAAAGqR4R4AAAAAAAAAAAAAAPJe7969o0+fPtG9e/fo1KlTNGrUKHVSnVZQUBB77rln7LnnntG3b9+49NJL469//Ws899xz8cQTT8Ttt98eH330UepMAMg7/fv3T53APw0ZMsRwDwAAAAAAAAAAAABAHWe4BwAAAAAAAAAAAACAvNOyZcs49dRT49BDD41u3bpF8+bNUydlWkFBQbRp0ybatGkTJ554Ylx77bXxwgsvxJNPPhn33HNPLF26NHUiAOS83r17x9577506g3864ogjon79+rFhw4bUKQAAAAAAAAAAAAAA1BLDPQAAAAAAAAAAAAAA5IX9998/TjnllDj88MNj//33j3r1XBKfq0pKSuKggw6Kgw46KC688MJYtmxZPPnkk3HXXXfFU089lToPAHLSwIEDUyfwb5o2bRpnn312zJw5M3UKAAAAAAAAAAAAAAC1xKcUAQAAAAAAAAAAAADIWd26dYvBgwfHEUccER06dIiCgoLUSVRTQUFBdOjQITp06BDnnHNOrFixIhYsWBCzZ8+ORYsWpc4DgJzRs2fP1Al8QZ8+fQz3AAAAAAAAAAAAAADUYYZ7AAAAAAAAAAAAAADIKR06dIgzzzwzevfuHZ06dTLWU8e0adMmvve978XZZ58dr776asydOzdmzpwZK1asSJ0GAMkccsghsccee6TO4AsOOuig1AkAAAAAAAAAAAAAANSiwtQBAAAAAAAAAAAAAABQv379GD58eCxcuDD++Mc/xsiRI6Nz585Ge+qwgoKC2GeffWLEiBHx5z//OZ588sk477zzoqioKHUaAGx3/fr1S53AlygtLY3evXunzgAAAAAAAAAAAAAAoJbUSx0AAAAAAAAAsK3df//9sdtuu6XOAHLE9OnT44477kidwSaMGzfOgZR1wG233RYzZ85MnUEeuuWWW2KfffZJnUEVvffee16zAagVRx55ZJx99tlx1FFHRdOmTVPnkEj9+vWjV69e0atXrxg/fnw8/PDDMW3atHj++edTpwHAdtG9e/fUCWzC0UcfHfPmzUudAQAAAAAAAAAAAABALTDcAwAAAAAAANQ5Xbp0iT333DN1BpAjdt9999QJbMacOXOivLw8iouLU6ewFZo2bWq4h2rr2bNnDBw4MIqKilKnUEVXXHFF6gQA6pD69evHiBEj4uSTT479998/dQ45plmzZnHaaafFwIEDY8mSJTF79uy48cYbU2cBQK0ybpy7unbtmjoBAAAAAAAAAAAAAIBaUpg6AAAAAAAAAACA7HrxxRfjvvvuS53BVmrXrl2cddZZqTPIM6NGjTLak0dWrVoV48aNS50BQB3QsWPHuOWWW+Lvf/97TJ482WgPm1VUVBQHHXRQXH/99bFy5cqYMmVKlJaWps4CgG1u//33j2bNmqXOYBP23nvv1AkAAAAAAAAAAAAAANQSwz0AAAAAAAAAACQ1bty4WLduXeoMttK5556bOoE80rlz5zjmmGNSZ1AN11xzTVRUVKTOACCPHXPMMfHQQw/F888/H6eddprxFaptjz32iAsvvDBWrFgRs2fPjs6dO6dOAoBt5rDDDkudwGbstttu0bp169QZAAAAAAAAAAAAAADUAsM9AAAAAAAAAAAktXLlyrjjjjtSZ7CVunbtGv3790+dQZ4oKyuLBg0apM6gil588cWYNm1a6gwA8tSgQYNi8eLF8cgjj8Q3v/lN7wHYajvuuGMMGjQolixZEg8++GD07NkzdRIAbLX27dunTmALevTokToBAAAAAAAAAAAAAIBaYLgHAAAAAAAAAIDkxo4dG++//37qDLbSj370o9QJ5IFWrVrFcccdlzqDKtq4cWNceumlqTMAyEPf+9734oUXXojZs2fHN77xjSgoKEidRB1TXFwcxx57bDzxxBMxb968OPLII1MnAUCNfe1rX0udwBZ06tQpdQIAAAAAAAAAAAAAALXAcA8AAAAAAAAAAMmtWbMmbrrpptQZbKVevXpFr169UmeQ48rLy6NRo0apM6iixx9/PO6///7UGQDkkWHDhsUrr7wSN9xwQ+y3336pc8iAoqKiOProo2PevHmxYMECAz4A5KUWLVqkTmALvvrVr6ZOAAAAAAAAAAAAAACgFhju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FpLMnDkzmjZtmp1RdEpLS7MTAAAAAAAAAFhKDbIDAAAAAAAAAACgEAwdOjR23333qKioyE5hMcrKyuKUU06JX/ziF9kpNebggw822lPH3HDDDUZ7AOqhX//610Z7CtT8+fPj5ptvjr59+0ZVVVV2TkEZPnx4PPvss3HddddFx44ds3NYRj169Iju3bvH2LFjs1MAAChSO+ywQ/Ts2TM23njjWGeddWLNNdes80MFy2qVVVaJVVZZJbp06fKtf//ZZ5/FO++8E//6179izJgx8fjjj8f777+fVAnA8tS2bds46KCDomfPnrHRRhtFu3btspOW2P//eLbRRhvFvvvuGxdddFF88sknMW7cuBg7dmzcc889fucEAAAAAAAAAECdVBIR87MjAAAAAAAAAGrSv//971hzzTWzM4raBx98EGuvvXZ2BkCtu+yyy+K4447LzqAa5s6dG926dYu33347O6VGjB49Onr06JGdwQIfffRRdOrUKebNm5edAsASeu+99/w8W4Bmz54dQ4YMiUsvvTQ7paCVl5fHyJEjY/vtt89OYRndcMMNcdRRR2VnUEe89NJLsemmm2ZnFJ1+/frFddddl50BAMtdw4YNY++9946tt946unfvHuutt140b948O6vOmj9/fnz00Ucxbty4GDNmTDz22GPx4osvZmcBsJS6d+8eBx98cGy11VbRtWvXaNCgQXbScjdhwoR44YUX4vHHH4877rjD86mwnMycOTOaNm2anVF0SktLsxMAAAAAAAAAWEqGewAAAAAAAICCY7gnn+EeoFiVl5fHW2+9Fa1bt85OoRpuvvnmOPzww7Mzltmuu+4af/rTn7IzWMivf/3ruOSSS7IzAFhCBx98cNx8883ZGdSwKVOmxGGHHRaPPPJIdkrRuPTSS6N///5RVlaWncJS+vjjj2ONNdbIzqCOMNyTw3APAIWsd+/esdtuu8UWW2wRG2ywQTRp0iQ7qV77z3/+E6+99lq88MILMXLkyHj33XezkwBYhE6dOsWRRx4ZO+20U2ywwQZRUlKSnZTmyy+/jOeffz7uvffeuOmmm6Kqqio7CQqG4Z4chnsAAAAAAAAA6i/DPQAAAAAAAEDBMdyTz3APUMzOOuusGDJkSHYG1fDll19Gp06dYsqUKdkpy+Svf/1rbL311tkZLPDGG29Et27dsjMAWApPPvlkbLPN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ZwAAUIPatm0bd955Zzz22GPxk5/8JDuHeqisrCz22GOPGDNmTFx22WXRsGHD7CSAGtOtW7d45ZVXYu+9985OYRmsscYacffdd8dZZ52VnQIAAAAAAAAAQB1nuAcAAAAAAAAAAGrBxIkT45ZbbsnOoBp23nnn6NSpU3bG/zjyyCOzE1hg1KhR8dRTT2VnALAMDj744OwElkJlZWWccsopMWHChOwUatCbb74ZJ510UnzzzTfZKSzCLrvskp0AAEANOfPMM+ONN96IfffdNxo0aJCdQz3XvHnzOO644+Ktt96KQw45JDsHYJn16dMn/vKXv8QGG2yQnUINaNSoUQwZMiQefPBBI3MAAAAAAAAAAPwgwz0AAAAAAAAAAFBLBg0aFJ999ll2BouxwgorxODBg7MzvuWggw6KLl26ZGcQEbNnz46BAwdmZwCwjHr37p2dwFK46aab4tZbb83OYDm47bbb4qabbsrOYBG23HLL7AQAAJZR796947XXXoszzjgjVl555ewcCsxaa60VN910Uzz22GOx7rrrZucALJWBAwfGjTfeGKusskp2CjXs5z//ebz88sseowAAAAAAAAAA+F6GewAAAAAAAAAAoJbMmDEjbrjhhuwMqmHPPfeMli1bZmf8V//+/bMTWOC2226LN998MzsDgGWw0047xRprrJGdwRJ6/fXX4+ijj87OYDn61a9+FePHj8/O4Ad07NjRwaYAAPVU48aN4/e//338+c9/jm7dumXnUOC22267GD16dAwePDg7BWCJXHvttTFixIho1KhRdgrLSbdu3eKvf/1rbLXVVtkpAAAAAAAAAADUMYZ7AAAAAAAAAACgFg0dOjQmTpyYncFilJeX15lD5XbZZZfYdNNNszOIiM8++ywGDBiQnQHAMvrFL36RncASmjNnTvTv3z+qqqqyU1iOKisr45hjjok5c+Zkp/A9SkpKYu+9987OAABgCe2+++4xbty4OPzww6Nhw4bZORSJlVZaKc4+++x48cUXo2vXrtk5AItUWloa999/fxx55JFRUlKSncNy1rZt23jggQdin332yU4BAAAAAAAAAKAOMdwDAAAAAAAAAAC1qLKyMq644orsDKph//33j8aNG2dnxIknnuiQqDrimmuuienTp2dnALCMevXqlZ3AErrmmmvihRdeyM6gFjz77LNxzTXXZGfwA7ba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XFRVVWXnLFcnnHBC7LfffjF58uTsFBY44ogjshMAKDAbbLBBdgIAAAAAAAAAAAsx3AMAAAAAAAAAAEXq+uuvj9deey07A37QXXfdFW+88UZ2BgB1WIsWLbITWMg777yTnQAAALDM9t9//+wEFjJmzJjYcsst4/77789OqTX3339/bL311jFu3LjsFCKid+/e0axZs+wMAApIhw4dshMAAAAAAAAAAFhIg+wAAAAAAAAAAAAgz/nnnx933nlnlJSUZKfAt0ybNi0GDBiQnQFAHdapU6do2LBhdgYLGTt2bHYCAADAMtlyyy1jk002yc5ggbvuuisOPPDAqKqqyk6pdW+++WZsuumm8fDDD0evXr2yc4raSiutFP369YuLL744OwWoY6ZNmxZTp06NL774Ij7//PP46quvIiJi5syZ0bx584iIaNSoUZSXl8eKK64YK6+8cqy66qrRuHHjzGzqgDXWWCM7AQAAAAAAAACAhRjuAQAAAAAAAACAInb33XfHscceGz/96U+zU+Bbrr322pgyZUp2BgB12DrrrJOdwELmzJljuAcAAKj3jj76aEP3dcD8+fPjiiuuiBNPPDE7JdWcOXNiu+22i3vvvTd233337JyitsceexjugSJWVVUV77zzTvzrX/+KcePGxauvvhrPPPNMTJ8+famut/7668emm24a3bp1i/XWWy822GCDaN++ve9BishKK60U66+/frz55pvZKQAAAAAAAAAAhOEeAAAAAAAAAAAoemeffXY88sgjUVZWlp0CERExYcKEOOOMM7IzAKjjVl999ewEFvLZZ59lJwAAACyTsrKy2HHHHbMzit78+fPjnHPO8TviBaqqqmLPPfeMe+65J/baa6/snKK16aabRocOHeL999/PTgFqyaxZs+LFF1+Mxx9/PEaOHBkffvhhjV37zTff/J/Blg4dOsTee+8dvXv3jk033TRWWmmlGrsfdVPPnj0N9wAAAAAAAAAA1BGl2QEAAAAAAAAAAECuJ598Mh577LHsDPiviy++OCorK7MzAKjjVltttewEFjJlypTsBAAAgGVy5JFHRsuWLbMziprRnh+27777xiOPPJKdUbQaNmwYRx55ZHYGsJxVVVXFyy+/HKecckq0adMmtt9++7joootqdLTnh7z//vtx4YUXxg477BCtWrWKE044IZ599tn45ptvlvu9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222XnUIttWvXLh588MHo0KFDdgq19Pjjj2cnAADUi2nTpmUnFJX9998/tt566+wMAACARrHddttFeXl5dgYAAAAAAAAAG8BwDwAAAAAAAAAANICKioooLXV7TiGaOXNmjB8/Pjvjcy1evDhuueWW7AxqoUWLFjFixIjsDAA20NKlS2Py5MnZGWykr33ta/Hggw86DK0JKC8vj4cffji6dOmSnUItrVu3Lm677bbsDACAenHffffF2rVrszOKRuvWreP000/PzgAAAGgUpaWl8b3vfS87AwAAAAAAAIAN4GQQAAAAAAAAAACoZz/60Y9iv/32y86gBmPHjs1OqJUhQ4bEwoULszOohQMOOCAOP/zw7AwANtCtt96anUA96Nq1a/zhD3+IFi1aZKdQgxYtWsRDDz0UXbt2zU6hDl5++eWYNWtWdgYAQL1YunRpvPHGG9kZReWYY47JTgAAAGg03/nOd7ITAAAAAAAAANgAhnsAAAAAAAAAAKCeDRo0KEpKSrIzWI9nnnkm7rjjjuyMWlmxYkXceOON2RnUQklJSQwePDg7A4ANdOedd8bbb7+dnUE9+M53vhOPPfaY8Z4CVF5eHk8++WR07949O4U6euKJJ7ITAADq1QsvvJCdUFR22WUX4z0AAEDR6Nq1a3YCAAAAAAAAABvAcA8AAAAAAAAAANSj448/3iEMBWrdunUxatSo7Iw6qaioiHfffTc7g1rYe++945e//GV2BgAb6IEHHshOoJ706NHDeE+Badu2bUyaNCm6deuWnUIdrVu3Lm6++ebsDACAevXMM89kJxSdU089NTsBAACgUXTp0iVKSx3nBAAAAAAAANDUbJIdAAAAAAAAAAAAzck555yTnUANpkyZEg899FB2Rp2sWbMmxo8fH0OHDs1OoRbOOuusuP7666O6ujo7BYA6uuyyy+LUU0+NTTfdNDuFetCjR4+YPHly9OrVK5YtW5adU9R23nnneOCBB2L33XfPTmEDvPTSS/Hcc89lZwAA1Kt77rknxo4d6yDlRvSd73wnunfvHlOnTs1O4TO23nrrOPnkk7Mzmp2VK1fGFVdckZ0BAECCzTffPA4//PC49957s1MAAAAAAAAAqAPDPQAAAAAAAAAAUE/69esXu+22W3YG61FdXR2jRo3KztggI0eOjBNPPDE6duyYncIX6NSpUwwePDhGjBiR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qsrOaHSVlZWxZs2a7AxqoW3btlFZWZmdAUAdDR8+PN57773sDApIaWlpdO3aNSorK+Ott96K6dOnx4UXXhh77bVXdlqNysrK4rjjjosbb7wxXn755fjrX/8a/fr1i1133TVKSkqy80h26623ZicAAKS67bbbshOIiK222iruueee6Nq1a3ZKs3DsscfGhRde6Hu+RvLcc89lJwAA/JPhnsK3+eabx+WXXx4PPPBAdOjQITsHAAAAAAAAoOgZ7gEAAAAAAAAAgFqqqKiI0lK33BSiN998My666KLsjBTTpk2LiRMnZmdQS0cffXR84xvfyM4AoA5WrVoVEyZMyM6gQLVo0SK6du0aZ511Vjz33HMxd+7ceOihh2LYsGHRrVu3tK527dpF796947rrrou//OUv8cEHH8Qtt9wSJ5xwQuyyyy4ObuaflixZEqNHj87OAABI9cADD8Tbb7+dnUFEbLvttnHPPff4GepGOvzww+O3v/1tbLrpptkpReOJJ57ITgAA+Kfly5dnJ1BLhx56aDz//PMxZsyYaNWqVXYOAAAAAAAAQNHaJDsAAAAAAAAAAACagh/96Eex3377ZWdQgyuuuCKqq6uzM9KMGDEivv/970fLli2zU/gCrVq1isrKyjj00EOzUwCog/PPPz+OPfbY2HbbbbNTKGAlJSXRoUOH6NChQxx88MFRUVERS5YsiXfeeSfmzp0br732WsyZMydmzJgRL7zwQr18/dqlS5fYbbfdolOnTrHrrrvGV7/61fjKV74S22+/fZSVldXDR0Vzd8cdd8SqVauyMwAA0j366KNxyimnZGcQETvttFP86U9/ih//+McxderU7Jwm57jjjourr746Nt988+yUorFy5UqjzwBAQVm9enV2AnWw5ZZbxjnnnBM/+9nP4vbbb4+xY8fG4sWLs7MAAAAAAAAAiorhHgAAAAAAAAAAqIVBgwZFSUlJdgbrMXv27Bg3blx2RqoZM2bEgw8+GD/+8Y+zU6iFH/zgB9GzZ8+YNGlSdgoAtbRq1aq48cYb45xzzslOoYnZaqutYquttopvfvOb//LyqqqqWLZsWSxZsiSWLl0aH374YVRVVcXHH38ca9eujY8//jgiIlq0aBGtWrWKiIjy8vLYfPPNY/PNN482bdrENttsE5tuumljf0g0I8uXL4+RI0dmZwAAFITx48fHySef7PcABWLbbbeN+++/P04++eS4//77s3OajDPOOCPGjh0bLVu2zE4pKjNmzIg1a9ZkZwAA/JOx9qZphx12iLPOOitOPfXUePLJJ+Puu++OCRMmRHV1dXYaAAAAAAAAQLNnuAcAAAAAAAAAAL7A8ccfH127ds3OoAaXXXZZdkJBGD58eBxyyCHRunXr7BS+QFlZWQwfPtxwD0ATU1FRET/72c9ihx12yE6hGSgrK4stt9wyttxyy+wUitidd94ZCxYsyM4AACgIzz77bMycOTP22muv7BT+11ZbbRW33XZbDB48OC699NLsnII3bty46Nevn/GpBI8++mh2AgDAv1i2bFl2AhuhTZs2ceihh8ahhx4al112WcyYMSOeeeaZePrpp2PSpEkpo5G77rpr7LnnntGpU6fo0KFDvPTSS3HllVc2egcAAAAAAABAQzHcAwAAAAAAAAAAX+Ccc87JTqAGM2fOjPHjx2dnFITZs2fHfffdF8cdd1x2CrWw7777xnHHHRcTJkzITgGgltasWRPjx4+PoUOHZqcAbLSVK1fG6NGjszMAAArKPffcY7inwLRq1Souuuii2H333eOUU06J6urq7KSCs/3228eECRPiP/7jP7JTitKaNWvixhtvzM4AAPgXS5cuzU6gnmy55ZZx4IEHxoEHHhgREZ988km89dZbMXfu3FiwYEEsWLAg3n333Zg3b14sWbIkVq9eHYsXL44PP/wwqqurY8stt/znY2222WaxxRZbRETEl770pWjbtm1sscUWseWWW8bmm28ebdq0ifLy8thmm21iq622iq222uqfr2/VqtW/dE2YMMFwDwAAAAAAANCsGO4BAAAAAAAAAIDP0a9fv9htt92yM6jBRRddlJ1QUIYOHRqHHXZYtGnTJjuFWjj33HMN9wA0MSNHjowTTjghvvrVr2anAGyU++67L958883sDACAgnLllVfGwIEDo7y8PDuFTykpKYmTTjop9t577/j5z38es2bNyk4qGMcee2xcdNFF8eUvfzk7pWjNnDkz5s2bl50BAPAvlixZkp1AA9l0001jl112iV122SU7BQAAAAAAAKBZKc0OAAAAAAAAAACAQlVaWhr9+/fPzqAG06dPj9tvvz07o6C8+eabceedd2ZnUEu77bZbnHnmmdkZANRBdXV1XHLJJdkZABtl+fLlMWTIkOwMAICCs2zZsnj88cezM6jBN77xjZg8eXKce+652Snptt566/jv//7vuOmmm4z2JHvssceyEwAA/o/33nsvOwEAAAAAAAAAmhTDPQAAAAAAAAAAUIOzzz47OnXqlJ3Beqxbty4qKyuzMwpSRUVFLF26NDuDWurfv3+UlZVlZwBQB1dffXU8//zz2RkAG+zOO++MuXPnZmcAABSk3/72t9kJfI4tttgiRo0aFU8//XR07do1O6fRlZaWxpAhQ+Kll16Ko48+2s+Wk1VVVcWtt96anQEA8H8sWrQoOwEAAAAAAAAAmhTDPQAAAAAAAAAAsB5lZWXRr1+/7AxqMGXKlHjooYeyMwrS/Pnz4/bbb8/OoJZ23HHHGDVqVHYGAHVUWVkZ69aty84AqLNly5bFsGHDsjMAAArWpEmTYtasWdkZfIF99903pkyZEjfccENsvfXW2TmNonfv3vHyyy/H8OHDo3379tk5RMTf/va3mDNnTnYGAMD/8Y9//CM7AQAAAAAAAACaFMM9AAAAAAAAAACwHiNHjowddtghO4P1qK6uNnTyBSoqKmLx4sXZGdTSySefHO3atcvOAKAO7rvvvnjiiSeyMwDq7Kabbop58+ZlZwAAFDTD6E1Dq1at4qSTToo5c+bEpZdeGuXl5dlJ9a60tDROP/30mDlzZowfPz7+7d/+LTuJT7nvvvuyEwAA1mvGjBnZCQAAAAAAAADQpBjuAQAAAAAAAACAzygvL4/evXtnZ1CDxx57LCZNmpSdUdAWL14ct9xyS3YGtbTVVlvFmDFjsjMAqKNzzjknVq1alZ0BUGsLFiyI8847LzsDAKDg/eY3v4n3338/O4Na2nrrreNXv/pVvPHGG3H55ZdHhw4dspM22vbbbx9jxoyJt956K8aNGxd77rlndhKf8dFHH8WVV16ZnQEAsF6LFy+Ojz76KDsDAAAAAAAAAJoMwz0AAAAAAAAAAPAZI0aMiPbt22dnsB5r1qyJUaNGZWc0CUOGDImFCxdmZ1BLP/nJT2K33XbLzgCgDmbMmBETJkzIzgCotauvvjpWrFiRnQEAUPDWrFkT9957b3YGdbT11ltHv3794uWXX4777rsvDj/88OykOikrK4u+ffvG448/Hm+88Uacc845sdNOO2VnUYMnn3zS91cAQEEzRgoAAAAAAAAAtWe4BwAAAAAAAAAAPqVdu3ZxwgknZGdQg4kTJ8bUqVOzM5qEFStWxI033pidQS21bt06KisrszMAqKOzzz7bUB7QJLz22msxevTo7AwAgCbjwgsvjFWrVmVnsAG+9KUvxWGHHRb33ntvvPXWW3HttdfGgQcemJ21Xh07doxzzz03HnnkkVi0aFFcccUVccABB0TLli2z0/gCxpwBgEL33nvvZScAAAAAAAAAQJNhuAcAAAAAAAAAAD5l9OjR0bZt2+wM1mP16tUxdOjQ7IwmpaKiIt59993sDGrp0EMPjR49emRnAFAHS5cujUsvvTQ7A+ALVVZWRnV1dXYGAECT8eabb8ajjz6ancFG+spXvhKnnHJKPPbYYzFv3ry455574swzz4xdd901pWfvvfeOgQMHxu233x4vvvhivPbaazFq1Kg46KCD/G6qCZk7d27cdddd2RkAAJ/LcA8AAAAAAAAA1N4m2QEAAAAAAAAAAFAoOnfuHMccc0x2BjV44IEHYtasWdkZTcqaNWti/PjxBo+aiLKyshg+fHgccMAB2SkA1MFFF10UxxxzTOy9997ZKQDrNXny5LjllluyMwAAmpxLLrkk/vM//zNKS0uzU6gH22+/fRxxxBFxxBFHxIUXXhjz5s2LN998M1599dV46aWX4oUXXojp06fHihUrNuo6LVq0iH322Sf22GOP+Ld/+7f46le/GjvuuGN06tQpttpqq3r6aMh0xx13ZCcAAHyhefPmZScAAAAAAAAAQJNhuAcAAAAAAAAAAP7XsGHDok2bNtkZrMfKlStj8ODB2RlN0siRI+PEE0+Mjh07ZqdQCz169Igf//jHcdddd2WnAFAHZ511VjzyyCPRokWL7BSAf/HJJ5/Eueeem50BANAkPfXUUzFlypTYf//9s1OoZyUlJbHTTjvFTjvtFP/xH//xz5evW7culixZEkuXLo2PPvooli1bFsuXL4+1a9fGunXr4uOPP47WrVtHRMRmm20WJSUl8aUvfSnatm0bW2yxRWy++eax+eabZ31YNIKPPvooLr744uwMAIAv9Morr2QnAAAAAAAAAECTYbgHAAAAAAAAAAAiokuXLnHkkUdmZ1CDu+66K15//fXsjCapuro6rr322hgzZkx2CrVQUlIS559/vuEegCZm8uTJcdttt8WJJ56YnQLwL2699dZ45plnsjMAAJqsSy+9NP7jP/4jSkpKslNoBCUl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N96II488Mqqrq7NTAACohdmzZ8f5558f69aty04BvkBVVVWceeaZficCABSVe++9NzsBAAAAAAAAAAqO4R4AAAAAAAAAAJql7t27R69evbIzqMEDDzwQzz//fHYG6zF//vy4/fbbszOog29/+9tx0kknZWcAsJGOOOKImDVrVnYGUEAWL14cP/3pT2PRokXZKQAA1ME111wTd911V3YG8AWuu+46/68CAEXnsssuiwULFmRnAAAAAAAAAEBBMdwDAAAAAAAAAECzNHjw4GjRokV2BuuxcuXKGDx4cHYGn6OioiIWL16cnUEdDBw4MDsBgI20atWqOPLII2PevHnZKUAB+Pjjj6N3797x3HPPZacAALAB+vTpE6+//np2BlCDZ555Jk4//fTsDACARldVVWW8EAAAAAAAAAA+w3APAAAAAAAAAADNTs+ePaNnz57ZGdTgrrvucmBhgVu8eHHccsst2RnUwS677BLnnHNOdgYAG+nNN9+M4447Lj744IPsFCBRVVVVnHnmmfGHP/whOwUAgA20YsWK6N27d6xYsSI7BfiMRYsWxYknnhjV1dXZKQAAKS666KJYuXJldgYAAAAAAAAAFAzDPQAAAAAAAAAANDsVFRVRWurWmEK0fPnyGDJkSHYGtTBkyJBYuHBhdgZ1cPrpp0erVq2yMwDYSE899VScfPLJ8fHHH2enAEkuuOCCuOaaa7IzAADYSFOnTo0hQ4bEunXrslOA/1VVVRUDBgyIV199NTsFACDNvHnz4pFHHsnOAAAAAAAAAICC4XQSAAAAAAAAAACalaOOOir222+/7AxqcMstt8S8efOyM6iFFStWxI033pidQR1sv/32UVlZmZ0BQD247777on///rFmzZrsFKCR/fa3vzV2CgDQjFx22WVx++23Z2cA/+uqq66KCRMmZGcAAKSrrKyM1atXZ2cAAAAAAAAAQEEw3AMAAAAAAAAAQLMycODAKCkpyc5gPZYsWRLDhg3LzqAOKioq4t13383OoA569+4d22+/fXYGAPVg/PjxMXTo0Fi3bl12CtBIbr/99ujbt292BgAA9ezEE0+M5557LjsDit4f//jH+NWvfpWdAQBQEJ5//vl48MEHszMAAAAAAAAAoCAY7gEAAAAAAAAAoNk44YQTomvXrtkZ1ODmm2+ORYsWZWdQB2vWrInx48dnZ1AHbdu2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L14c06ZNiyeffDKamppST6KXO378eKxevTpKS0vjrrvuihMnTqSeBAAAPVZnZ2esXLkyJk+eHLfeemvs2LEjOjs7U88ioa6urti5c2fceeedH4adhFIBAPi07dmzJ+69996YN29ejBo1Ku644454+umn480334wzZ86kngcAAAAAAABADybcAwAAAAAAAABAUl/84hdj0aJFqWfwMXbt2hUbN25MPYNe4Oc//3ns378/9QzO09e//vWYPXt26hkA9FC1tbVx++23x8SJE2PVqlVRW1ubehK9TFVVVfz4xz+OSy65JJYuXRrNzc2pJwEAQK/yy1/+MubNmxcLFiyIX/3qV665M9PQ0BDPPPNMXHnllXH55ZfHunXrUk8CAICIiGhra4snnngibrnllqioqIgRI0bEN7/5zVi3bl3s2LEj/vGPf6Se2Ou0t7dHVVVVbN68OZ577rnUcwAAAAAAAAD+o/qlHgAAAAAAAAAAQN7uu+++6NfP31i6o66urvjpT3+aega9yMMPP+zGfj3MwIEDY/ny5XHttdemngJAD9bY2Bh333133HPPPfG9730vFi9eHNOnT089ix6qs7Mzdu3aFevXr4+nnnoq9RwAAMjC1q1bY+vWrVFUVBRLly6NG264IS699NLUs7gA2tvbY+fOnfHss8/GY489Fh0dHaknAQDA/6mtrS02bdoUmzZt+vBYaWlpLFy4MGbOnBlTp06NSy65JEpKSmLAgAEJl/YMra2t8e6778ahQ4fi73//e7zxxhvx/PPPR2NjY+ppAAAAAAAAABeEO54AAAAAAAAAAJDMVVddFVdeeWXqGXyMbdu2xW9/+9vUM+hFnnjiiViyZElUVFSknsJ5uPrqq+Oaa66JP/zhD6mnANDDdXZ2xkMPPRQPPfRQXHvttXHHHXfEVVddFYWFhamn0QM0NzfH73//+3j00Udj+/btqecAAECWmpubY9myZbFs2bKYP39+3HbbbXH11VfHqFGjUk/j/6GrqysOHjwYL730Ujz++OOxf//+1JMAAOD/7dChQ7F27dqPHOvbt2/MmzcvZs2aFZMnT46JEyfGxRdfHGPGjIkxY8ZEv3753Iqpubk56uvr49ixY1FTUxPvvPNOVFdXx969e2PPnj2p5wEAAAAAAAB8qvL5tRgAAAAAAAAAgG7nvvvui4KCgtQz+Cc6OztjxYoVqWfQCz344IOxYcOG1DM4DwUFBbFs2TLhHgD+o7Zs2RJbtmyJ8ePHx/e///247rrrorS0NPUsuqHKysr4zW9+Ew8++GA0NzenngMAAPy3V155JV555ZUoKCiIxYsXx/XXXx9XXHFFFBUVpZ7GJ1RVVRUvvPBCbNiwIf7yl7+kngMAABdcR0dHbN26NbZu3fpPn581a1aUl5dHaWlpjB49OsaMGRPFxcUxatSoGD58eIwYMSKGDBkSAwcO/JSXfzLnzp2L1tbWaGxsjMbGxmhqaor6+vo4efJkHD9+PGpqauLtt9+O3bt3R2NjY+q5AAAAAAAAAN1Gn4joSj0CAAAAAAAAAAAAAIC8XX/99bF48eJYsGBBDB06NPUcEjp58mS89NJLsX79+vjTn/6Ueg5kbdy4cTF48ODUM7JTW1sbbW1tqWeQ2JAhQ6KkpCT1jOycPXs2ampqUs+AHqt///7xne98J6655pqYO3duXHTRRakn8T+0t7fH/v3749VXX41nnnkmtm3blnoSdGuux9JoamqKEydOpJ6RpYKCAnH1RA4fPhwdHR2pZwDnobCwMMrKymLs2LExevToGDFiRAwbNiyGDx8effv2jaFDh8aAAQOisLAwBg0aFP369YuIiH79+kVhYeG/fO2urq5obW398HFLS0u0t7dHa2trtLW1xdmzZ6O5uTlaWlqioaEh6uvr4/jx43H48GExHgAAAAAAAIB/k3APAAAAAAAAAAAAAADdRlFRUSxZsiS++tWvxuzZs6N///6pJ/EpaGtri+3bt8fmzZtjzZo1blQJAAA9XEFBQdx0002xaNGiuOyyy2LixInRp0+f1LOy09DQEK+//nq8/PLLsWHDhjh69GjqSQAAAAAAAAAAAADdinAPAAAAAAAAAAAAAADd0oQJE+L222+PRYsWxfTp06Nv376pJ/EfdO7cudi9e3e88MIL8fjjj8exY8dSTwIAAC6QGTNmxI033hhz5syJGTNmxMiRI1NP6pU++OCDqKys/DDWs3nz5tSTAAAAAAAAAAAAALo14R4AAAAAAAAAAAAAALq9yZMnx7e+9a1YsGBBzJo1KwYMGJB6Ev+Gtra22Lt3b7z44ovxi1/8Impra1NPAgAAEvjKV74SCxcujM9//vNRXl4eY8eOTT2pR6qrq4uDBw/Gnj174s9//nM899xz0dnZmXoWAAAAAAAAAAAAQI8h3AMAAAAAAAAAAAAAQI8yevTouPXWW2P+/Pkxe/bsGDlyZOpJ/Av19fWxc+fOePHFF+Ppp5+OxsbG1JMAAIBuZsaMGbFw4cKoqKiI8vLymDRpUgwbNiz1rG6lqakpqqqq4m9/+1u88cYb8cc//jHeeuut1LMAAAAAAAAAAAAAejThHgAAAAAAAAAAAAAAerTrrrsuFi1aFJdddllMmTIlBgwYkHpS1trb22Pfvn3x2muvxZYtW+L5559PPQkAAOiB5s6dG3PmzIlp06ZFWVlZfOYzn4lx48b1+u98H3zwQdTW1sa7774bb7/9duzbty927doVe/bsST0NAAAAAAAAAAAAoNcR7gEAAAAAAAAAAAAAoNcoKiqKG2+8Mb785S/HzJkzY/LkydGvX7/Us3q1jo6OqK6ujt27d8fWrVvj17/+ddTX16eeBQAA9FJz586NioqKmDRpUowfPz5KSkri4osvjjFjxkRRUVH06dMn9cR/qb29Perq6uL48eNx/PjxOHLkSNTU1MShQ4di7969UVlZmXoiAAAAAAAAAAAAQDaEewAAAAAAAAAAAAAA6LWKioria1/7WsybNy+mT58e06ZNi+Li4tSzerSWlpY4cOBAvPnmm7Fjx4743e9+FydOnEg9CwAAIAoLC2P69OkxZcqUKCkpidGjR8dFF10UxcXFMXz48Bg2bFgMHjw4Bg0aFIMHD47+/fvH4MGDo6CgIAoLCz/xeU6fPh1dXV1x9uzZaGtri9OnT8fp06ejpaUlTp8+Ha2trdHU1BQnTpyIurq6eP/99+PIkSNRXV0d1dXVF/AdAAAAAAAAAAAAAOB8CPcAAAAAAAAAAAAAAJCVWbNmxfz582PGjBlRXl4eEyZMiFGjRqWe1S21tLTE4cOH48CBA/HWW2/Fq6++Gi+//HLqWQAAABdM3759Y+LEiR85VldXF42NjWkGAQAAAAAAAAAAAHDBCPcAAAAAAAAAAAAAAJC9srKy+NKXvhTTpk2Lz372szFhwoQYN25cjBw5Mvr06ZN63gXX2toaR44ciffeey8OHToU+/bti+3bt8frr7+eehoAAAAAAAAAAAAAAAAAXBDCPQAAAAAAAAAAAAAA8DGKi4vj8ssvj0svvTRKS0ujpKQkxowZE6NHj45Ro0ZFcXFx6omfyLlz56K+vj4aGhri/fffj6NHj0ZNTU0cPnw4du3aFZWVlaknAgAAAAAAAAAAAAAAAMCnSrgHAAAAAAAAAAAAAAD+TUVFRVFeXh4TJkz4SNSnqKgohg0bFkOHDo2hQ4fGkCFDorCwMAYNGhT9+/eP/v37x6BBg6JPnz6f+FxdXV1x+vTp6OjoiDNnzkRbW1u0trbGqVOnorW1NVpaWqKpqSnq6uqioaEh6urqoqamJg4ePBgHDhy4gO8CAAAAAAAAAAAAAAAAAPQ8wj0AAAAAAAAAAAAAAJBYWVnZxz7X0tISx44d+xTXAAAAAAAAAAAAAAAAAEDvJ9wDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQFYKUg8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgE+TcA8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWRHuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACArwj0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZEW4BwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICsCPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkBXhHgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACyItwDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQFaEewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIinAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFkR7gEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgK8I9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGRFuAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACArAj3AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJAV4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsiLcAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBWhHsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyIpwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABZEe4BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICvCPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABkRbgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgKwI9wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACQFeEeAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALIi3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAVoR7AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMiKcA8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWRHuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACArwj0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZEW4BwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICsCPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkBXhHgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACyItwDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQFaEewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIinAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFkR7gEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgK8I9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGRFuAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACArAj3AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJAV4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsiLcAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBWhHsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyIpwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABZEe4BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICvCPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABkRbgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgKwI9wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACQFeEeAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALIi3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAVoR7AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMiKcA8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWRHuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACArwj0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZEW4BwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICsCPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkBXhHgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACyItwDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQFaEewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIinAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFkR7gEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgK8I9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGRFuAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACArAj3AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJAV4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsiLcAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBWhHsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyIpwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABZEe4BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICvCPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABkRbgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgKwI9wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACQFeEeAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALIi3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAVoR7AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMiKcA8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWRHuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACArwj0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZEW4BwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICsCPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkBXhHgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACyItwDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQFaEewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIinAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFkR7gEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgK8I9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGRFuAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACArAj3AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJAV4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsiLcAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBWhHsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyIpwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABZEe4BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICvCPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABkRbgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgKwI9wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACQFeEeAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALIi3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAVoR7AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMiKcA8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWRHuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACArwj0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZEW4BwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICsCPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkBXhHgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACyItwDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQFaEewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIinAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFkR7gEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgK8I9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGRFuAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACArAj3AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJAV4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsiLcAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBWhHsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyIpwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABZEe4BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICvCPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABkRbgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgKwI9wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACQFeEeAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALIi3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAVoR7AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMiKcA8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWRHuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACArwj0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZEW4BwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICsCPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkBXhHgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACyItwDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQFaEewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIinAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFkR7gEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgK8I9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGRFuAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACArAj3AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJAV4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsiLcAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBW/guPa8fbi/a0LQAAAABJRU5ErkJggg=="
					), aBC(7, "youtube", 7, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aBC(8,
					"googleplay", 3,
					"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"
					), aBC(9, "discord", 7,
					"iVBORw0KGgoAAAANSUhEUgAAACwAAAAyBAMAAADVdiTZAAAAG1BMVEUA/wBI/0lu/26P/5Cl/6O8/73R/9Hn/+j///+iRuwXAAABJUlEQVQ4y83TvW7CMBQF4BsKdKVIpYxIRaJjVLUSI6JDGSNlCCOq1JC1f+CxFIL92D22E+di/ABciZB8seRj35joVZ3VN1FXBSqhRYgPJEIsSQXrAnmjL2uP5Usm81z83Bec5WM+J9T4vS8Yfzz1yFQ0v2ackKsrxr2G7d4ZPjK1O214z3no+Jdz1/EKTy1NI/w6jmcIID6JJirGe8cYdIdGIcQOwx3j/gEpI6X+qoRkGqrnd6OXFR/NRAcdOWFc6hDPera0Xk/Fozo1ck4bHsSVpg0jYJSlervGW9zWSdQXhhXozlbGek1uY9/s2hRWect7ucnsf5ld7DfosX+kcsv+AdwtDfvHdW877x/u0raB6Oa0qG35rKZhbokg41sKclQEmTr/f+SUPtWxuyYAAAAASUVORK5CYII="
					), aBC(10, "insta", 3, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aBC(11, "emojis",
					4, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aBC(12, "flags", 3,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aBC(13, "bestTeam", 5,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aBC(14, "bestPlayer", 5,
					"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"
					), aBC(15, "zoom", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuBAMAAACllzYEAAAAHlBMVEUAAAAhIyA3ODZTVVJrbWqEhoOkpqO8v7vX2tb///8goTJXAAABaElEQVQ4y32Tu1ODQBDGL8QAdlg5dml8dZTa2TijXQpnIh2TwoQOxwehi2PB0flKYP/b7HFv5nALBn5337d7ewshXZyuKX2PST8egUW76OE7EJFa+BhJ9bSsUWFaeTV3GKHbn8EvlB79bjSv4VO8jUr4VdiHNnK938MHPie0Yh+ZLqmGuNsJ7CNURgewI5qPoRE86GwkJyWIBIfcUfJrmMm0sclDyDnPWmLyADacl8jnRbEGKIoiJRP4EmU2LJmIDfLvAf7z/37mv6IUm08pzbV/rx5f1pPA1Fn/iX3eS3nekAslz7gcGw9bg3uqn6Rup5oH+uaTLpO4r0SmZVuUFE2lfTc+z1qr9+BVtGJqzq1RHNfQdAtnrEW75UwuXOFgvj3crpCyDu6UIpP9fPHZU5XkiYVXvsXIPcc+VwspzY2pPorE/NgCfYK+QJ5+QFA6fjQt2A4IWuIWODixe2ELcuIUNJGL+zQle92exY5pfDIaAAAAAElFTkSuQmCC"
					), aBC(16, "apple", 3,
					"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"
					), aBC(17, "loading", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEEAAAAKAQMAAADRpqGpAAAABlBMVEUAAAD///+l2Z/dAAAATklEQVQI12M48E/OzoinjoGB4cA/O3tjnn8g1iEjY+aeAxCWofGZBijLCMqqNzRKmQdhGRubNINZyeYQ1p9/yXbGMv9yG0AsG2OemtwGAJcsIuxbPF7gAAAAAElFTkSuQmCC"), aBC(18, "target",
					7,
					"iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAJFBMVEXUAADLSwDYWli/eQCzlQGgswDloaGC0wAA/wBk5wDx09P///8NUBuBAAADWElEQVRYw62YvW/aUBDADwghTRakqoJuTBmSBamNSjcyJSMZotINZciQLCxVnQ1EkO0N1ET1iDJkgCViyGD/c7UN8bv37t5Hq96EbH6+j3fv3d2DgJPw52Uqd+y7AJhnP05hI6WTOyfksQ1IPnhWJLwAWUrfLYjfBSJfjIjfBkYaBoQnVAYjYRc08lWHXIBW+jwy0RNQijjErxsQqHJID4xyTpF7MwEVirQtCHxUkYmNEBEAVyVCDbgqEWq2SNcBgQ5GpsrLw+UqSZbPAzZoG2QovdpN/7+R5xaTNjkSSgt/lAiJJaYmkImOUJiSQHCu7CeJnjl/Q7Bdu4kqr6ploKTXLUGSJ8UykON1lDDSkmMGUrKUOSJZC+TdBvHFk2MWSQbSTkuRsUWJpCbKkaE2wIw3/RwRrqx0yKL4SzNDQsOa0LWpZcjU5rxkWSVDxna7sGVRisz4eMUay/op0uPilW2UQ6wVbU0I6owrm7Qqr5jV3AsgZFx5paa+iJCBSBcmPvvUmWoAU7oqKD8KzbGIMkzoF1vcHi0eBTB6+3nAbcMy/U4EM7IfF8Dt0iJkHoNI59AB+VAfhqqnsXwMkiifQ09FXiWkTJCOQJgQs48Z5EVGiPIOdFVk8f+Rvb9Hmv/iiyvCRYxfFzCti/vqk4SRc2yfybGZPmelAwEhI/JyzXmPk39MTIg5V4S5AdzTtwNmh8Wi9onjoswcjbv02Q5/jj3RYrtGh1LAFeMBKbYLUS1BNEkH6Ay/yh7ccNWimSJDtiItn2/wKR6jBgOCkUt9EWvlpci9qbMgcS9lVcy3F2RkVzWvyHW7ZWvcXgBurY6tdmX9ZYqMrFUc7TovR6ZgC8BC6kizTgksamK5hwO5T7w1e5K3yhkyBmOvhM+PaIv4YGr7cD9aLTrYtqm5xEdBs0DmuKCstM1oHuIt4oOWeaIDGTCDxY2yb5TRArjx5XDJTgnbAWaDhOqAWL6+vr5S55eaNPLMXUYeT0J8B6KqjG9DO9JXELuaGhlF546eICS0TJYNZqw2D8mViJv3e26DOEZMpjU0FxFTLbGjvSF50Dni6e9hfvHztGe67Xmw6qB3So/k0mMnst1c+acyceZyP/aI9uiJ53alFvy+/JTa9/7zt8j1Fs4ifwCmXBmOYkld0AAAAABJRU5ErkJggg=="
					), aBC(19, "members", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABSVFGanJkA/wDMz8x4/3ey/7L///+GDHoaAAACZElEQVRIx9WWwYrjMAyGlVCYa6cs5JqGQh5gaObaDYU8QJnOA5SS66RN49dfSZZt2U2WZZeFXc9h2r9fZEmRJcPbLyz4d6GzMdM1/uXcG3PV0KehFVFnlh4Baoxdl8BEEkF7EcwUoN5pJ4HenRBMNV66C4QfxxI2nTKFhsYt5CgZC9FTawDIxbg4UKKUWevAuw1Aq/D7NUq6M9RbQ2zKhkwpKVnK2AWGRrCrc04lEpDfgyg1u8mh3EQqSGLoS5QXY/a4+XSKJIIwkkNQOIlTgFYUcQq59TuQcrwI0PDk+M3Hayh2+RcC1smkl3DDj1ltlMR5old38LutHT04l/BVAVfOSL9lnXelUBKaAltxt2gTv3Ft6w6k4sajdtf6zhLVHUHltzTwkIzvOUGf9PhOJJdVdphWS0YfFnJUCrVgISmdTVWVnVQa19+YV9VWKgohl2+MRUFKjaAXDX0tQCvt0+HPIJWnJajWGV9wPDPutPFhXs9CK+PLr1aJjSF+5aUzpOQY6mwZURWNCRRO9JZq43ikMtnog44v2LlojK1EW6n4zYXz4HqSb/gsty1qaWjAt5o7NAEiL7Jdu2vX7IqHLikEIYdzUJ5CZQQdJJcJ5GSE9i5tC1BNR4oadGub76ChwrZfKn48wTRXsGfrQvHFQr0dmy245o8nMYHGoxsToMZIAoWBA2qOzEMXmVJiK4nO2jn5oXju5yGZpn4Gf/QpNH08D+pn6O3vQqOGulkIX0+1fbXd93VT+dkXQe/SO3F1fkSnUBjgT7cEdVdJodkLTbNkKLr1NH1ApstPrkbnK/39B9e1H85NJPjxrK7zAAAAAElFTkSuQmCC"
					), aBC(20, "hourglass", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABKTEqZm5gA/wDJzMh3/3iz/7L///+iyVF/AAACjklEQVRIx72W3aqyQBSGJwk6dceGTv1C8AJEO60QvACJLkDI02xPrtvf75pJ58cx2iffIqT0aWb9vGuNIrft0hSX8WqZ4Etxg9HM+G4zQVdatOcEdSSrqkr3juFOVdMwQXQUC7YmAyVLUPQZ1PxtJSJ5js7KX7j/+pKkNR5Y0RE9Ij/6JMPFRFfebt0cOmbD7dZOEOwQgn7ssnwOrf8rJAMp8KFSrnwormcQCR8S1HpQgT8qVVXnVCsJS/tQzlV4mMpmJLUCXOi4I2mgmnotOAfqcJPiCUIGNsMMunJdEqMjbP+cQQcOrx+hnZ0BA5XsuTQuPUxwBoLnZj98Oxq/LaiTHNK4G34MAQj7jfGhQqeIfgJQzm7ofELccUZ5CDpQjKBO3LbUr+gZhAo8QhMl8FoCb4IQhkvyUt7JWciBCnhUa5VkJkkexEtxQ3KjPvMlqKD7hk7fdF/bHnlQfoUU4LglgBCElVCP+ztIbQfDdXk7OL5jqH/juE7BA4pBUZr8XTJZMadoKZklKlxriMvSBqGO4m8ejJmuy5AH9aTqq02CbwPQlfeYDH94ziEWilqDW5xniiUWq6VUjs6szFTnat5SHYuXdcnGAcTZrINLrpmZGJnqqXY26WLONJ7rfqm5qfwh1vXckPahAh8HD/Imjzt7xJgACLe3oZ01xYQ1Mo/umWmGprBOjcQ96cyEEtacc89DrDx6PkJQrHSh2kjdgh4ulH0C7YIQuS8P3nYlDa9ecg33OpUF8TqnFyB9UitIVujsALSmqp6g+/5fHKVpxQfQqM6q2ier7X5joFdAMX++YrEyMc6hgP0RkuoVZbvfTqfU6gs/VbZG6M3bmn5fE0pxb6x1Ori4eNbkY3f+AriuYpjQCOoxAAAAAElFTkSuQmCC"
					), aBC(21, "stalemate", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEoAAAAKAQMAAAApRlpeAAAABlBMVEUAAAD///+l2Z/dAAAAX0lEQVQI12P4/afiwJ+G9vnvDzD8/vPjwJ+D/SDmgYQTBw487mnmYYAwv4OZBUDmj/89zfwNDBWJfw78uDv/MJApAWQeODn/MFABR2LPgQMHZ4CYPxJ7/vwBMvkPIDEB8vo+S3L7oMwAAAAASUVORK5CYII="
					), aBC(22, "logo", 8,
					"iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxMAAAsTAQCanBgAAATzaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTEyLTIzVDE0OjQ0OjQ2KzAzOjMwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyZTU0YWVlOS01ZDdhLWQ3NDgtYTRjYS0yODQ1NmQ1ZWFlZDYiIHhtcE1NOkRvY3Vt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"
					)
		}
	}, this.get = function(oF) {
		return hE[oF]
	}, this.a9s = function(name) {
		for (var a5 = wZ.length - 1; 0 <= a5; a5--)
			if (wZ[a5] === name) return hE[a5];
		return aB6
	}, this.qq = function() {
		return aB5 <= 0
	}, this.aB8 = function() {
		aB5 = 0, aB9()
	}
}

function cI() {
	var aBL, aBM, aBN, aBO, aBP, aBQ, aBR, aBS, aBT, aBU, aBJ = [
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
		aBK = [
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

	function aBa(it, mI) {
		for (var a5 = it; a5 < mI; a5++) aBL[a5] = 4 * bG.ev(64 * au.random(), au.value(100)), aBM[a5] = 4 * bG.ev(64 * au.random(), au.value(100)), aBN[a5] = 4 * bG.ev(64 * au.random(), au.value(100))
	}

	function aBZ(it, mI) {
		for (var a1Q = a7.data.a1Q, a5 = it; a5 < mI; a5++) {
			var ew = a1Q[a5];
			aBL[a5] = 4 * (ew >> 12), aBM[a5] = 4 * (ew >> 6 & 63), aBN[a5] = 4 * (63 & ew)
		}
	}

	function aBl(e6, aBn) {
		a8F[e6] = 0, a8F[e6 + 1] = 0, a8F[e6 + 2] = aBn, a8F[e6 + 3] = 0, aBo(e6)
	}

	function aBo(e6) {
		var ea;
		bW.mQ || (ea = aW.uT(e6), e6 = aW.uU(e6), bW.mQ = ea >= bV.a8E[0] && ea <= bV.a8E[2] && e6 >= bV.a8E[1] && e6 <= bV.a8E[3])
	}
	this.eV = new Int32Array(4), this.dP = function() {
		var eV = this.eV;
		eV[0] = -4 * bN.ee, eV[1] = 4, eV[2] = -eV[0], eV[3] = -eV[1]
	}, this.dO = function() {
		if (aBL = new Uint8Array(a7.eQ), aBM = new Uint8Array(a7.eQ), aBN = new Uint8Array(a7.eQ), aBO = new Uint8Array(a7.eQ), aBP = new Uint8Array(a7.eQ), aBQ = new Uint8Array(a7.eQ), aBR = new Uint8Array(a7.eQ), aBS = new Uint8Array(a7.eQ),
			aBT = new Uint8Array(a7.eQ), aBU = new Uint8Array(a7.eQ), this.a4s = new Uint8Array(a7.eQ), a7.ic)
			for (var a5 = a7.eQ - 1; 0 <= a5; a5--) {
				var eo = bb.k5[bb.eR[a5]],
					kQ = bG.ev((aBK[eo][3] + 1) * au.random(), au.value(100));
				aBL[a5] = aBJ[eo][0] + kQ * aBK[eo][0], aBM[a5] = aBJ[eo][1] + kQ * aBK[eo][1], aBN[a5] = aBJ[eo][2] + kQ * aBK[eo][2]
			} else 0 === a7.data.a1O ? a7.data.a1R ? (aBZ(0, a7.jc), aBa(a7.jc, a7.eQ)) : aBa(0, a7.eQ) : aBZ(0, a7.eQ);
		! function() {
			var a5, eW;
			for (a5 = a7.eQ - 1; 0 <= a5; a5--) eW = bG.ev(aBL[a5] + aBM[a5] + aBN[a5], 3), aBL[a5] += aBg(eW - aBL[a5], 2), aBM[a5] += aBg(eW - aBM[a5], 2), aBN[a5] += aBg(eW - aBN[a5], 2), aBL[a5] -= aBL[a5] % 4, aBM[a5] -= aBM[a5] % 4, aBN[
				a5] -= aBN[a5] % 4
		}(),
		function() {
			for (var a5 = a7.eQ - 1; 0 <= a5; a5--) aBL[a5] += bG.ev(a5, 128), aBM[a5] += bG.ev(a5 % 128, 32), aBN[a5] += bG.ev(a5 % 32, 8), aBO[a5] = a5 % 8
		}(), this.aBd(),
			function() {
				for (var a5 = a7.eQ - 1; 0 <= a5; a5--) aBP[a5] = aBL[a5] < 32 ? aBL[a5] + 32 : aBL[a5] - 32, aBQ[a5] = aBM[a5] < 32 ? aBM[a5] + 32 : aBM[a5] - 32, aBR[a5] = aBN[a5] < 32 ? aBN[a5] + 32 : aBN[a5] - 32
			}(),
			function() {
				for (var a5 = a7.eQ - 1; 0 <= a5; a5--) aBS[a5] = 235 < aBL[a5] ? aBL[a5] - 20 : aBL[a5] + 20, aBT[a5] = 235 < aBM[a5] ? aBM[a5] - 20 : aBM[a5] + 20, aBU[a5] = 235 < aBN[a5] ? aBN[a5] - 20 : aBN[a5] + 20
			}()
	}, this.a3u = function(player) {
		var fC = bJ.f4;
		return fC[0] = aBL[player], fC[1] = aBM[player], fC[2] = aBN[player], fC
	}, this.aBd = function() {
		for (var a5 = a7.eQ - 1; 0 <= a5; a5--) this.a4s[a5] = aBL[a5] + aBM[a5] + aBN[a5] < 280 ? 0 : 1
	}, this.uT = function(e6) {
		return bG.ev(e6, 4) % bN.ee
	}, this.uU = function(e6) {
		return bG.ev(e6, 4 * bN.ee)
	}, this.u2 = function(ea, ec) {
		return Math.floor(4 * (ec * bN.ee + ea))
	}, this.uJ = function(e6) {
		var eV = this.eV;
		return this.aBh(e6 + eV[0]) || this.aBh(e6 + eV[1]) || this.aBh(e6 + eV[2]) || this.aBh(e6 + eV[3])
	}, this.es = function(e6) {
		var eV = this.eV;
		return this.eY(e6 + eV[0]) || this.eY(e6 + eV[1]) || this.eY(e6 + eV[2]) || this.eY(e6 + eV[3])
	}, this.uH = function(e6, player) {
		var eV = this.eV;
		return this.aBi(e6 + eV[0], player) || this.aBi(e6 + eV[1], player) || this.aBi(e6 + eV[2], player) || this.aBi(e6 + eV[3], player)
	}, this.w6 = function(player) {
		return player < a7.jc && 2 !== aa.zi[player]
	}, this.g5 = function(e6) {
		return 208 <= a8F[e6 + 3]
	}, this.uO = function(player, e6) {
		return this.g5(e6) && this.aBj(player, e6)
	}, this.aBj = function(player, e6) {
		return player === this.eL(e6)
	}, this.aBk = function(e6) {
		return 208 <= a8F[e6 + 3] && a8F[e6 + 3] < 224
	}, this.io = function(e6) {
		return 224 <= a8F[e6 + 3] && a8F[e6 + 3] < 248
	}, this.uI = function(e6) {
		for (var eV = this.eV, a5 = 3; 0 <= a5; a5--)
			if (this.gy(e6 + eV[a5])) return !0;
		return !1
	}, this.eO = function(e6) {
		return this.g5(e6) || this.eK(e6)
	}, this.gy = function(e6) {
		return 0 === a8F[e6 + 3] && 2 === a8F[e6 + 2]
	}, this.eK = function(e6) {
		return 0 === a8F[e6 + 3] && 1 === a8F[e6 + 2]
	}, this.t5 = function(e6) {
		return 0 === a8F[e6 + 3] && 3 === a8F[e6 + 2]
	}, this.eY = function(e6) {
		return 0 === a8F[e6 + 3] && 5 <= a8F[e6 + 2]
	}, this.aBh = function(e6) {
		return 0 === a8F[e6 + 3] && 3 <= a8F[e6 + 2]
	}, this.eB = function(e6) {
		return a8F[e6 + 2] - 5
	}, this.aBi = function(e6, player) {
		return this.eK(e6) || this.g5(e6) && player !== this.eL(e6)
	}, this.eL = function(e6) {
		return a8F[e6] % 4 * 128 + a8F[e6 + 1] % 4 * 32 + a8F[e6 + 2] % 4 * 8 + a8F[e6 + 3] % 8
	}, this.uP = function(e6) {
		aBl(e6, 1)
	}, this.aBm = function(e6) {
		aBl(e6, 2)
	}, this.u3 = function(e6, player) {
		a8F[e6] = aBL[player], a8F[e6 + 1] = aBM[player], a8F[e6 + 2] = aBN[player], a8F[e6 + 3] = 208 + aBO[player], aBo(e6)
	}, this.g0 = function(e6, player) {
		a8F[e6] = aBP[player], a8F[e6 + 1] = aBQ[player], a8F[e6 + 2] = aBR[player], a8F[e6 + 3] = 224 + aBO[player], aBo(e6)
	}, this.ip = function(e6, player) {
		a8F[e6] = aBS[player], a8F[e6 + 1] = aBT[player], a8F[e6 + 2] = aBU[player], a8F[e6 + 3] = 248 + aBO[player], aBo(e6)
	}
}

function ci() {
	var oF = 0,
		aBp = new Uint16Array(32);

	function remove(a1x) {
		var a5;
		for (oF -= 2, a5 = a1x; a5 < oF; a5 += 2) aBp[a5] = aBp[a5 + 2], aBp[a5 + 1] = aBp[a5 + 3]
	}
	this.dO = function() {
		oF = 0
	}, this.iR = function() {
		var a5, ik, ht;
		if (0 !== oF)
			if (0 === aa.lX[a7.eD] || aX.aBq(a7.eD) === aX.fb(a7.eD)) oF = 0;
			else
				for (a5 = oF - 2; 0 <= a5; a5 -= 2)(ik = aBp[a5]) < a7.eQ && 0 === aa.lX[ik] ? remove(a5) : (ht = aBp[a5 + 1], (ik >= a7.eQ && aBr(a7.eD) || ik < a7.eQ && aBs(a7.eD, ik)) && (b4.gs.h3(ht, ik), remove(a5)))
	}, this.h5 = function(ik, ht) {
		! function(ik, ht) {
			var a5;
			for (a5 = 0; a5 < oF; a5 += 2)
				if (aBp[a5] === ik) return aBp[a5 + 1] = Math.min(aBp[a5 + 1] + ht, 1023), 1;
			return
		}(ik, ht) && 32 !== oF && (aBp[oF] = ik, aBp[oF + 1] = ht, oF += 2)
	}
}

function cJ() {
	function aBz(player) {
		var e1;
		b6.fr.zk(player) && (e1 = aa.gX[player] - aa.zo[player] + aX.aC1(player), bY.fv(player, Math.abs(e1), e1 < 0 ? 18 : 12)), aa.gX[player] = 0, aa.zo[player] = 0
	}

	function aC8() {
		aR.show(!1, !1, !1, !0), aQ.a7R(), bM.result.wv()
	}

	function aBw(player, aC7) {
		for (var a5 = aC7.length - 1; 0 <= a5; a5--) aX.aCA(aC7[a5], player)
	}

	function aBy(player) {
		for (var i8 = aa.i8, i9 = aa.i9, iA = aa.iA, iB = aa.iB, lz = i8[player], m0 = iA[player], ee = bN.ee, gJ = aa.gJ, ea = i9[player]; lz <= ea; ea--)
			for (var ec = iB[player]; m0 <= ec; ec--) {
				var g3 = 4 * (ec * ee + ea);
				aW.uO(player, g3) && (aW.uP(g3), gJ[player]--)
			}
		i8[player] = i9[player] = 0, iA[player] = iB[player] = 0
	}
	this.dX = function(g3) {
		var player, e1 = aa.gJ[g3];
		bI.lB.oR[g3] ? e1 && (aBw(player = g3, aX.aBx(player)), aBy(player), a9.ft(player), aX.clear(player), aBz(player), function(player) {
			aa.ty[player] = 0, aa.fx[player] = [], aa.gB[player] = [], aa.gC[player] = [], aa.et[player] = []
		}(player)) : !e1 && aa.fx[g3].length || this.aBv(g3)
	}, this.aBv = function(player) {
		! function(player) {
			aW.w6(player) && (aa.wr[player] = bd.wl.aC6(), a7.wF++);
			var aC7 = aX.aBx(player);
			0 === aC7.length ? b6.fr.zj(player) && aC8() : (aBw(player, aC7), function(player, aC7) {
				var aCC = aC7[function(aC7) {
					var a5, oF = 0;
					for (a5 = aC7.length - 1; 1 <= a5; a5--) aa.gJ[aC7[a5]] > aa.gJ[aC7[oF]] && (oF = a5);
					return oF
				}(aC7)];
				9 === a7.jw && 1 === bb.eR[player] && au.jU(8) && av.aCD(aCC);
				if (b6.fr.zj(player)) aC8(), aH.wP(aCC, 1);
				else {
					for (var a5 = aC7.length - 1; 0 <= a5; a5--)
						if (b6.fr.zk(aC7[a5]) && (bY.lT[4 - b6.fr.j0(player)]++, b6.fr.zj(aC7[a5]))) return aH.wP(player, 0);
					b6.fr.j0(player) || aH.a3B(0, player, aCC)
				}
			}(player, aC7))
		}(player), aBy(player), aBz(player),
			function(player) {
				aa.lX[player] = 0, aa.fx[player] = null, aa.gB[player] = null, aa.gC[player] = null, aa.et[player] = null
			}(player), a9.ft(player), aX.clear(player), bI.aC4.aC5(player)
	}
}

function cn() {
	var input;

	function aCE(e) {
		(e = e.target.files) && 0 < e.length && b2.aCH(e[0])
	}

	function aCL(e) {
		var eo = new Image;
		eo.onload = aCM, eo.src = e.target.result
	}

	function aCM(e) {
		var e = e.target,
			hE = document.createElement("canvas");
		hE.width = e.width, hE.height = e.height;
		hE.getContext("2d").drawImage(e, 0, 0);
		var e = hE.width,
			j6 = hE.height;
		e > bN.aCO || j6 > bN.aCO || e < 10 || j6 < 10 ? (e = "Image dimensions must be between 10 and " + bN.aCO + ".", q.ri ? q.ri.showToast(e) : alert(e)) : 20 === m.qQ && m.aBH().aCM(hE)
	}
	this.dO = function() {
		(input = document.createElement("input")).type = "file", input.setAttribute("accept", ".png, .jpg, .gif, .jpeg"), input.onchange = aCE
	}, this.xf = function() {
		input && (input.onchange = null, input.value = "", input = null)
	}, this.aCF = function() {
		input.click()
	}, this.aCH = function(aCI) {
		var fC = aCI.name.split("."),
			fC = fC[fC.length - 1].toLowerCase();
		"gif" !== fC && "jpg" !== fC && "jpeg" !== fC && "png" !== fC || ((fC = new FileReader).onload = aCL, fC.readAsDataURL(aCI))
	}
}

function cl() {
	this.aCQ = null, this.dO = function() {
		10 !== a7.jw ? this.aCQ = null : this.aCQ = new Uint32Array(a7.eQ)
	}, this.iR = function() {
		10 === a7.jw && this.aCR()
	}, this.aCR = function() {
		for (var g3, target, a7c, aCQ = this.aCQ, w4 = af.jf, zp = aa.gX, a5 = af.jd - 1; 0 <= a5; a5--)(g3 = w4[a5]) >= a7.jc || (target = Math.max(bG.ev(zp[g3], 4), 2048), a7c = Math.max(aY.a7d(g3), 100), aCQ[g3] += bG.ev(a7c * target, 1e4),
			aCQ[g3] > target && (aCQ[g3] = target))
	}, this.zu = function(player, il) {
		return il > this.aCQ[player] ? (il = this.aCQ[player], this.aCQ[player] = 0) : this.aCQ[player] -= il, il
	}
}

function cM() {
	var aCS, aCT, size, ik, il, id, aCU;

	function aCV(player) {
		return player < a7.jc ? aCS * player : aCS * a7.jc + aCT * (player - a7.jc)
	}
	this.dO = function() {
		aCS = a7.jc < 16 ? 12 : 8, aCT = 4;
		var eT = aCV(a7.eQ);
		size = new Uint8Array(a7.eQ), ik = new Uint16Array(eT), il = new Uint32Array(eT), id = new Uint16Array(eT), aCU = new Uint8Array(eT)
	}, this.om = function(a4Q, aCW) {
		var aCX = this.gY(a4Q, aCW),
			aCW = (this.gW(a4Q, aCW, 0), b6.fr.fu(a4Q, aCX));
		bY.fv(a4Q, aCX - aCW, 12)
	}, this.clear = function(player) {
		size[player] = 0
	}, this.aCA = function(player, aCW) {
		var aCa, aCW = function(player, aCW) {
			var a5, kQ = aCV(player);
			for (a5 = size[player] - 1; 0 <= a5; a5--)
				if (0 === id[kQ + a5] && ik[kQ + a5] === aCW) return a5;
			return size[player]
		}(player, aCW);
		aCW !== size[player] && (aCa = il[aCV(player) + aCW], this.fw(player, aCW), this.ih(player, aCa, a7.eQ))
	}, this.iy = function(player, aCW) {
		for (var kQ = aCV(player), a5 = size[player] - 1; 0 <= a5; a5--)
			if (0 === id[kQ + a5] && ik[kQ + a5] === aCW) return !0;
		return !1
	}, this.jG = function(player) {
		return player < a7.jc ? size[player] < aCS : size[player] < aCT
	}, this.fb = function(player) {
		return size[player]
	}, this.fh = function(player, a5) {
		return ik[aCV(player) + a5]
	}, this.fc = function(player, a5) {
		return id[aCV(player) + a5]
	}, this.aCb = function(player, aCc) {
		for (var kQ = aCV(player), a5 = size[player] - 1; 0 <= a5; a5--)
			if (id[kQ + a5] === aCc) return a5;
		return -1
	}, this.fi = function(player, a5) {
		return il[aCV(player) + a5]
	}, this.gY = function(player, aCW) {
		for (var kQ = aCV(player), a5 = size[player] - 1; 0 <= a5; a5--)
			if (0 === id[kQ + a5] && ik[kQ + a5] === aCW) return il[kQ + a5];
		return 0
	}, this.aC1 = function(player) {
		for (var kQ = aCV(player), ew = 0, a5 = size[player] - 1; 0 <= a5; a5--) ew += il[kQ + a5];
		return ew
	}, this.aCd = function(player) {
		for (var kQ = aCV(player), ew = 0, a5 = size[player] - 1; 0 <= a5; a5--) 0 === id[kQ + a5] && (ew += il[kQ + a5]);
		return ew
	}, this.aBq = function(player) {
		for (var kQ = aCV(player), fy = 0, a5 = size[player] - 1; 0 <= a5; a5--) 0 < id[kQ + a5] && fy++;
		return fy
	}, this.gW = function(player, aCW, aCa) {
		for (var kQ = aCV(player), a5 = size[player] - 1; 0 <= a5; a5--) 0 === id[kQ + a5] && ik[kQ + a5] === aCW && (il[kQ + a5] = aCa)
	}, this.gH = function(player, a5, aCa) {
		il[aCV(player) + a5] = Math.max(aCa, 0)
	}, this.gI = function(player, a5) {
		aCU[aCV(player) + a5] = 0
	}, this.fj = function(player, a5) {
		return aCU[aCV(player) + a5]
	}, this.ih = function(player, aCa, aCW) {
		b6.fr.zk(aCW) && bY.lT[6 - b6.fr.j0(player)]++;
		for (var kQ = aCV(player), a5 = size[player] - 1; 0 <= a5; a5--)
			if (0 === id[kQ + a5] && ik[kQ + a5] === aCW) return il[kQ + a5] += aCa, void(il[kQ + a5] = il[kQ + a5] > a7.zq ? a7.zq : il[kQ + a5]);
		ik[kQ + size[player]] = aCW, il[kQ + size[player]] = aCa, id[kQ + size[player]] = 0, aCU[kQ + size[player]] = 1, size[player]++, player < a7.jc && (aCW === a7.eD ? aH.wP(player, 5) : player === a7.eD && aZ.a3D(aCW))
	}, this.aCe = function(player, aCa, aCc) {
		var kQ = aCV(player);
		ik[kQ + size[player]] = 0, il[kQ + size[player]] = aCa, id[kQ + size[player]] = aCc, aCU[kQ + size[player]] = 0, size[player]++
	}, this.fw = function(player, oF) {
		var em, kQ;
		if (0 !== size[player])
			for (kQ = aCV(player), size[player]--, em = oF; em < size[player]; em++) ik[kQ + em] = ik[kQ + em + 1], il[kQ + em] = il[kQ + em + 1], id[kQ + em] = id[kQ + em + 1], aCU[kQ + em] = aCU[kQ + em + 1]
	}, this.aBx = function(player) {
		for (var em, kQ, aC7 = [], a5 = af.jd - 1; 0 <= a5; a5--)
			for (kQ = aCV(af.jf[a5]), em = size[af.jf[a5]] - 1; 0 <= em; em--)
				if (0 === id[kQ + em] && ik[kQ + em] === player) {
					aC7.push(af.jf[a5]);
					break
				} return aC7
	}
}

function cN() {
	var aCf;

	function aCh(player) {
		var hH = aCf[bG.ev((a7.eQ - 1) * aa.gJ[player], a7.jM)],
			jH = (ba.jZ() < 1920 && (hH = Math.max(bG.ev(100 * (13440 - 6 * ba.jZ()), 1920), hH)), aY.jI(player));
		return aa.gX[player] > jH && (hH -= bG.ev(2 * hH * (aa.gX[player] - jH), jH)), Math.min(Math.max(hH, 0), 700)
	}

	function aCs(mB) {
		for (var gJ = aa.gJ, jf = af.jf, a5 = af.jd - 1; 0 <= a5; a5--) {
			var g3 = jf[a5];
			b6.fr.fu(g3, bG.ev(mB * gJ[g3], 32))
		}
	}

	function aCp() {
		var sx = a7.eD;
		bJ.f1[0] = aa.gX[sx] - aa.zo[sx]
	}

	function aCr(oF) {
		var sx = a7.eD;
		bY.lT[oF] += aa.gX[sx] - aa.zo[sx] - bJ.f1[0]
	}
	this.dV = function() {
		for (var eT = a7.eQ, a5 = (aCf = new Uint16Array(eT), 0); a5 < eT; a5++) aCf[a5] = 100 + aCg(bG.ev(25600 * a5, eT - 4), 9)
	}, this.dO = function() {
		0 === a7.data.a1c ? this.a7d = aCh : 1 === a7.data.a1c ? this.a7d = function(player) {
			return bG.ev(a7.data.a1d * aCh(player), 64)
		} : this.a7d = function(player) {
			return bG.ev(a7.data.a1e[player] * aCh(player), 64)
		}
	}, this.iR = function() {
		if (ba.jZ() % 10 == 9 && (function() {
				aCp();
				for (var jf = af.jf, gX = aa.gX, a5 = af.jd - 1; 0 <= a5; a5--) {
					var g3 = jf[a5],
						aCq = bG.ev(aY.a7d(g3) * gX[g3], 1e4);
					b6.fr.fu(g3, Math.max(aCq, 1))
				}
				aCr(9)
			}(), function() {
				if (0 !== a7.data.a1W) {
					if (aCp(), 1 === a7.data.a1W)
						for (var gJ = aa.gJ, jf = af.jf, mB = a7.data.a1X, a5 = af.jd - 1; 0 <= a5; a5--) {
							var g3 = jf[a5];
							b6.fr.fu(g3, bG.ev(mB * gJ[g3], 128))
						} else 2 === a7.data.a1W && function() {
							for (var gJ = aa.gJ, jf = af.jf, mB = a7.data.a1Y, a5 = af.jd - 1; 0 <= a5; a5--) {
								var g3 = jf[a5];
								b6.fr.fu(g3, bG.ev(mB[g3] * gJ[g3], 128))
							}
						}();
					aCr(18)
				}
			}(), ba.jZ() % 100 == 99)) {
			if (aCp(), 0 === a7.data.a1Z) aCs(32);
			else if (1 === a7.data.a1Z) aCs(a7.data.a1a);
			else
				for (var gJ = aa.gJ, jf = af.jf, mB = a7.data.a1b, a5 = af.jd - 1; 0 <= a5; a5--) {
					var g3 = jf[a5];
					b6.fr.fu(g3, bG.ev(mB[g3] * gJ[g3], 32))
				}
			aCr(8)
		}
	}, this.jI = function(player) {
		return Math.min(100 * aa.gJ[player], a7.a0f)
	}, this.ne = function(player, nf) {
		b6.fr.fu(nf, bJ.f2[0]), bY.o2(player, nf), aZ.aCj(player, bJ.f2[0] + bJ.f2[1]), aZ.o3(nf, bJ.f2[0]), b6.fr.ob(player)
	}, this.aCk = function() {
		for (var eT = af.jd, w4 = af.jf, kQ = 0, zp = aa.gX, a5 = 0; a5 < eT; a5++) kQ += zp[w4[a5]];
		return kQ
	}, this.aCl = function(xB) {
		for (var g3, eT = af.jd, w4 = af.jf, kQ = 0, zp = aa.gX, eR = bb.eR, a5 = 0; a5 < eT; a5++) eR[g3 = w4[a5]] === xB && (kQ += zp[g3]);
		return kQ
	}
}

function cP() {
	var aCw, aCx, aCy, aCz, aD0, aD1, aD2, aD3, aD4, aD5, aD6, aD7, aD8, aD9, aDA, aDB, aDC, aDD, aDF, aDG, a8e, aDH, aDI, aDP, aDQ, aDE = null,
		aDK = 0,
		aDL = !1,
		aDM = new Float32Array(4),
		aDN = 0,
		aDO = !0,
		a6o = 400;

	function pJ() {
		aD4 = Math.floor(+at.pH), aD5 = Math.floor(.5 * aD4)
	}

	function aDR() {
		var a5, aDW;
		for (rF.font = b6.pF.qW(1, 100 * aD6), aDW = 80 / Math.floor(rF.measureText(b6.x3.a0F(a7.zq)).width), rF.font = b6.pF.qW(1, 100), a5 = a7.eQ - 1; 0 <= a5; a5--) aD3[a5] = 100 / Math.floor(rF.measureText(aa.a39[a5]).width), aD2[a5] = Math.min(
			aDW, aD3[a5])
	}

	function aDX(a5) {
		return !be.dh.data[7].value || (a5 = aa.gX[a5]) < 1e6 ? 1 : a5 < 1e7 ? aDM[0] : aDM[Math.min(Math.floor(Math.log10(a5)) - 6, 3)]
	}

	function aDV(hF) {
		aDD = !1, aDC = 1, aDA = aDB = 0, aDO && (b6.pF.textAlign(hF, 1), b6.pF.textBaseline(hF, 1));
		for (var aDd, aDe, a5, aDf, fontSize, aDg, lz = hu / hv, m0 = hw / hv, mD = (at.z + hu) / hv, mE = (at.j6 + hw) / hv, aDh = 0 !== aa.lX[a7.eD] && aW.w6(a7.eD), em = af.jd - 1; 0 <= em; em--) a5 = af.jf[em], (fontSize = Math.floor(aD9 * hv *
			aDX(a5) * aD2[a5] * aD0[a5])) < aD8 || aD4 <= fontSize || aCy[a5] + aD0[a5] > lz && aCy[a5] < mD && aCz[a5] + aD1[a5] > m0 && aCz[a5] < mE && (aDd = Math.floor(at.z * (aCy[a5] + aD0[a5] / 2 - lz) / (mD - lz)), aDe = Math.floor(at.j6 *
				(aCz[a5] + aD1[a5] / 2 - m0) / (mE - m0) - .1 * fontSize), aDf = aW.a4s[a5], hF.font = b6.pF.qW(1 === aa.zi[a5] ? 4 : 1, fontSize), hF.fillStyle = aDi(fontSize, aDf % 2), be.dh.data[7].value ? aDj(hF, a5, fontSize, aDd, aDe,
			aDf) : aDk(a5, fontSize, aDd, aDe, hF), aDD = !0, 0 < a8e[a5] ? function(aDd, aDe, fontSize, a5, hF) {
				0 === jN[a5] ? ad.uo.vS(aDG[a5]) ? (function(aDd, aDe, fontSize, player, np, hF) {
					for (var tW = aDe, hD = (hF.globalAlpha = aDs(fontSize), aDX(player) * (be.dh.data[7].value ? aDN : aD3[player])), tV = aDd - .5 * fontSize / hD - .9 * fontSize, en = 0; en < 2; en++) hF.fillText(ad.uo.vM(np), tV, tW),
						tV = aDd + .5 * fontSize / hD + .9 * fontSize;
					hF.globalAlpha = 1
				}(aDd, aDe, fontSize, a5, aDG[a5], hF), aDm(aDd, aDe, fontSize, 0, 0, hF)) : ad.uo.vU(aDG[a5]) ? (aDv(aDd, aDe, fontSize, aDG[a5], 0, hF), aDm(aDd, aDe, fontSize, 0, 1, hF)) : (aDv(aDd, aDe, fontSize, aDG[a5], 1, hF), aDm(aDd,
					aDe, fontSize, 1, 0, hF)) : aDv(aDd, aDe, fontSize, aDG[a5], 0, hF)
			}(aDd, aDe, fontSize, a5, hF) : 0 === jN[a5] && aDm(aDd, aDe, fontSize, 0, 0, hF), aDh && (0 < a8e[a5 + a7.eQ] || 0 < a8e[a5 + 2 * a7.eQ] || 0 < a8e[a5 + 3 * a7.eQ] || 0 < a8e[a5 + 4 * a7.eQ]) && function(aDd, aDe, fontSize, a5, hF) {
				var eo, fy = -1;
				for (eo = 4; 1 <= eo; eo--) 0 < a8e[a5 + eo * a7.eQ] && fy++;
				for (eo = 1; eo < 5; eo++) 0 < a8e[a5 + eo * a7.eQ] && (! function(aDd, aDe, fontSize, eo, a5, aDq, e1, hF) {
					var zC;
					if (1 === eo) {
						a5 = aDG[a5 + a7.eQ];
						if (!ad.uo.vT(a5)) return function(aDd, aDe, fontSize, np, aDq, hF) {
							hF.globalAlpha = aDs(fontSize);
							aDd -= .534 * aDq * fontSize, aDq = aDe + 1.59 * fontSize;
							hF.font = b6.pF.qW(0, .785 * fontSize), hF.fillText(ad.uo.vM(np), aDd, aDq), hF.globalAlpha = 1
						}(aDd, aDe, fontSize, a5, aDq, hF);
						zC = ad.sw.uv[a5 - 1024 + ad.uo.v6]
					} else zC = 2 === eo ? aF.a1v()[4].hE[+(e1 < 255)] : (3 === eo ? aF.a1v()[5] : aF.a1v()[6]).hE[0];
					a5 = ad.sw.uw, e1 = .8 * fontSize / a5, eo = aDd - .5 * e1 * a5 - .534 * aDq * fontSize, aDd = aDe + 1.4 * e1 * a5;
					hF.setTransform(e1, 0, 0, e1, eo, aDd), hF.globalAlpha = aDs(fontSize), hF.drawImage(zC, 0, 0), hF.globalAlpha = 1, hF.setTransform(1, 0, 0, 1, 0, 0)
				}(aDd, aDe, fontSize, eo, a5, fy, a8e[a5 + eo * a7.eQ], hF), fy -= 2)
			}(aDd, aDe, fontSize, a5, hF), (aDg = aD6 * fontSize) < aD8 || (hF.font = b6.pF.qW(1, aDg), aDe += Math.floor(.78 * fontSize), be.dh.data[7].value ? aDk(a5, aDg, aDd, aDe, hF) : aDj(hF, a5, aDg, aDd, aDe, aDf)))
	}

	function aDk(a5, fontSize, ea, ec, hF) {
		var ___id = a5;
		var showName = a5 < a7.jc || !__fx.settings.hideBotNames;
		if (showName) hF.fillText(aa.a39[a5], ea, ec), a5 < a7.jc && 2 !== aa.zi[a5] || (a5 = fontSize / aD3[a5], hF.fillRect(ea - .5 * a5, ec + b6.pF.vN * fontSize, a5, Math.max(1, .1 * fontSize)));
		be.dh.data[7].value && __fx.settings.showPlayerDensity && (
			__fx.settings.coloredDensity && (hF.fillStyle = __fx.utils.textStyleBasedOnDensity(___id)),
			hF.fillText(__fx.utils.getDensity(___id), ea, showName ? ec + fontSize : ec)
		);
	}

	function aDj(hF, a5, fontSize, aDd, aDe, aDf) {
		var ___id = a5;
		a5 = b6.x3.a0F(aa.gX[a5]);
		aDf >> 1 & 1 ? (hF.lineWidth = .05 * fontSize, hF.strokeStyle = aDi(fontSize, aDf % 2), hF.strokeText(a5, aDd, aDe)) : (1 < aDf && (hF.lineWidth = .12 * fontSize, hF.strokeStyle = aDi(fontSize, aDf), hF.strokeText(a5, aDd, aDe)), hF.fillText(
			a5, aDd, aDe));
		be.dh.data[7].value || __fx.settings.showPlayerDensity && (__fx.settings.coloredDensity && (hF.fillStyle = __fx.utils.textStyleBasedOnDensity(___id)), hF.fillText(__fx.utils.getDensity(___id), aDd, aDe + fontSize))
	}

	function aDm(aDd, aDe, fontSize, aDq, aDr, hF) {
		var a2V = .95 * fontSize / aDI,
			aDd = aDd - .5 * a2V * aDH + .8 * aDq * fontSize,
			aDq = aDe - 1.76 * a2V * aDI - (.35 - b6.pF.vN + .7) * aDr * fontSize;
		hF.setTransform(a2V, 0, 0, a2V, aDd, aDq), hF.globalAlpha = aDs(fontSize), hF.drawImage(aV.get(4), 0, 0), hF.globalAlpha = 1, hF.setTransform(1, 0, 0, 1, 0, 0)
	}

	function aDv(aDd, aDe, fontSize, np, aDq, hF) {
		var h8, tV, a2V;
		hF.globalAlpha = aDs(fontSize), ad.uo.vT(np) ? (h8 = ad.sw.uw, hF.setTransform(a2V = 1.1 * fontSize / h8, 0, 0, a2V, tV = aDd - .5 * a2V * h8 - .8 * aDq * fontSize, a2V = aDe - 1.55 * a2V * h8), hF.drawImage(ad.sw.uv[np - 1024 + ad.uo.v6], 0,
			0), hF.setTransform(1, 0, 0, 1, 0, 0)) : (tV = aDd - .8 * aDq * fontSize, a2V = aDe - (.35 - b6.pF.vN + 1) * fontSize, hF.fillText(ad.uo.vM(np), tV, a2V)), hF.globalAlpha = 1
	}

	function aDi(fontSize, aDf) {
		return aD5 <= fontSize && fontSize < aD4 ? bb.aDx[aDf] + aDs(fontSize).toFixed(3) + ")" : bb.aDy[aDf]
	}

	function aDs(fontSize) {
		return aD5 <= fontSize && fontSize < aD4 ? 1 - (fontSize - aD5) / (aD4 - aD5) : 1
	}

	function aE7(hD, z) {
		return 1 + Math.floor(aD7 * hD * z)
	}

	function aE4(a5) {
		for (var left = aCy[a5], em = aCy[a5] - aa.i8[a5] - 1; 0 <= em; em--)
			if (!aE8(a5, --left, aCz[a5], aD1[a5])) {
				left++;
				break
			} var right = aCy[a5];
		for (em = aa.i9[a5] - aCy[a5] - aD0[a5]; 0 <= em; em--)
			if (!aE8(a5, ++right + aD0[a5] - 1, aCz[a5], aD1[a5])) {
				right--;
				break
			} var ea = Math.floor((left + right) / 2),
			top = aCz[a5];
		for (em = aCz[a5] - aa.iA[a5] - 1; 0 <= em; em--)
			if (!aE9(a5, ea, --top, aD0[a5])) {
				top++;
				break
			} var bottom = aCz[a5];
		for (em = aa.iB[a5] - aCz[a5] - aD1[a5]; 0 <= em; em--)
			if (!aE9(a5, ea, ++bottom + aD1[a5] - 1, aD0[a5])) {
				bottom--;
				break
			} var ec = Math.floor((top + bottom) / 2);
		aE1(a5, ea, ec, aD0[a5], aD1[a5]) && (aCy[a5] = ea, aCz[a5] = ec)
	}

	function aE1(player, ea, ec, z, j6) {
		eW = Math.floor(.2 * z);
		for (var eW, eo = ea + z - 1; ea <= eo; eo--)
			if (!aE8(player, eo, ec, j6)) return;
		for (eo = ec + j6 - 1 - (eW = (eW = Math.floor(.25 * j6)) < 1 ? 1 : eW); ec + eW <= eo; eo--)
			if (!aE9(player, ea, eo, z)) return;
		return 1
	}

	function aE8(player, ea, ec, j6) {
		return aW.uO(player, 4 * (ec * bN.ee + ea)) && aW.uO(player, 4 * ((ec + j6 - 1) * bN.ee + ea))
	}

	function aE9(player, ea, ec, z) {
		return aW.uO(player, 4 * (ec * bN.ee + ea)) && aW.uO(player, 4 * (ec * bN.ee + ea + z - 1))
	}
	this.dO = function() {
		if (a6o = 0 === (a6o = be.dh.data[11].value) ? 280 : 1 === a6o ? 187 : 112, aDD = !1, aD9 = .88, aD6 = .5, aD7 = 1.8, aD8 = 12 - 3 * be.dh.data[9].value, aCx = aCw = 0, aCy = new Uint16Array(a7.eQ), aCz = new Uint16Array(a7.eQ), aD0 =
			new Uint16Array(a7.eQ), aD1 = new Uint16Array(a7.eQ), aD2 = new Float32Array(a7.eQ), aD3 = new Float32Array(a7.eQ), aDG = new Uint16Array(2 * a7.eQ), a8e = new Uint8Array(5 * a7.eQ), aDP = new Uint8Array(a7.eQ), aDQ = new Uint8Array(
				a7.eQ), aDO || (aDE = aDE || document.createElement("canvas")), pJ(), aDB = aDA = 0, aDC = 1, be.dh.data[7].value) {
			var a5, aDW;
			for (aDR(), rF.font = b6.pF.qW(1, 100), aDW = 100 / Math.floor(rF.measureText("900 000").width), a5 = a7.eQ - 1; 0 <= a5; a5--) aD2[a5] = Math.min(aDW, 2 * aD3[a5]);
			aDN = aDW, aDM[0] = 100 / (aDW * Math.floor(rF.measureText("5 000 000").width)), aDM[1] = 100 / (aDW * Math.floor(rF.measureText("50 000 000").width)), aDM[2] = 100 / (aDW * Math.floor(rF.measureText("500 000 000").width)), aDM[3] =
				100 / (aDW * Math.floor(rF.measureText("1 000 000 000").width))
		} else aDR();
		! function() {
			var a5;
			for (a5 = a7.eQ - 1; 0 <= a5; a5--) aa.gJ[a5] < 12 ? (aCy[a5] = aa.i8[a5] + 1, aCz[a5] = aa.iA[a5] + 1, aD0[a5] = 1, aD1[a5] = 1) : (aCy[a5] = aa.i8[a5], aCz[a5] = aa.iA[a5] + 1, aD0[a5] = 4, aD1[a5] = 2);
			if (a7.gr)
				for (a5 = 0; a5 < a7.jc; a5++) aD0[a5] = 0;
			aDH = aV.get(4).width, aDI = aV.get(4).height
		}()
	}, this.aCj = function(g3, a3U) {
		a3U > 18 * aa.gJ[g3] ? (aDQ[g3] = 6, aW.a4s[g3] = 2 + aW.a4s[g3] % 2) : (aDP[g3] = 4, (aW.a4s[g3] < 2 || 3 < aW.a4s[g3]) && (aW.a4s[g3] = 6 + aW.a4s[g3] % 2))
	}, this.o3 = function(g3, a3U) {
		a3U > 6 * aa.gJ[g3] ? (aDQ[g3] = 6, aW.a4s[g3] = 4 + aW.a4s[g3] % 2) : (aDP[g3] = 4, (aW.a4s[g3] < 4 || 5 < aW.a4s[g3]) && (aW.a4s[g3] = 8 + aW.a4s[g3] % 2))
	}, this.resize = function() {
		pJ(), aDO || aDV(aDF)
	}, this.a0b = function() {
		for (var a5 = 0; a5 < a7.jc; a5++) aa.i9[a5] - aa.i8[a5] != 3 || aa.iB[a5] - aa.iA[a5] != 3 ? (aCy[a5] = aa.i8[a5] + (aa.i9[a5] !== aa.i8[a5] ? 1 : 0), aCz[a5] = aa.iA[a5], aD0[a5] = 1, aD1[a5] = 1) : (aCy[a5] = aa.i8[a5], aCz[a5] = aa
			.iA[a5] + 1, aD0[a5] = 4, aD1[a5] = 2)
	}, this.oo = function(player, oF, aDY) {
		! function(player, oF, aDY) {
			player += oF * a7.eQ;
			0 === oF ? aDG[player] === aDY && 0 < a8e[player] ? a8e[player] = 0 : (aDG[player] = aDY, a8e[player] = ad.uo.vS(aDY) ? 255 : 64) : 1 === oF ? (a8e[player] = 64, aDG[player] = aDY) : a8e[player] = aDY
		}(player, oF, aDY), 2 === a7.wD && this.lJ(!0)
	}, this.rE = function() {
		aDO ? aDV(rF) : aDD && (1 !== aDC ? (rF.imageSmoothingEnabled = !0, rF.setTransform(aDC, 0, 0, aDC, 0, 0), rF.drawImage(aDE, -aDA / aDC, -aDB / aDC), rF.setTransform(1, 0, 0, 1, 0, 0), rF.imageSmoothingEnabled = !1) : rF.drawImage(aDE, -
			aDA, -aDB))
	}, this.a5c = function(hf, hi) {
		aDA += hf, aDB += hi
	}, this.xp = function(hf, hi) {
		aZ.a5c(hf, hi)
	}, this.zoom = function(yn, kl, km) {
		aDC *= yn, aDA = (aDA + kl) * yn - kl, aDB = (aDB + km) * yn - km
	}, this.lJ = function(bj) {
		return !aDO && !(!aDL && !bj && ba.e0 < aDK + (1 === aDC && 0 === aDA && 0 === aDB && (a7.a1E() || a7.gr || 2 === a7.wD) ? 1e3 : a6o) || (aDL = !1, aDK = ba.e0, aDV(aDF), 0))
	}, this.aDb = function(a5) {
		return aDX(a5) * aD2[a5]
	}, this.aDc = function(player) {
		return aD2[player]
	}, this.iR = function() {
		ba.jZ() % 10 == 9 && (aDL = a7.a1G() && !a7.a1E()), !a7.a1E() && 4 <= ++aCx && function() {
			var a5, em, en;
			for (aCx = 0, en = 4; 1 <= en; en--)
				for (em = af.jd - 1; 0 <= em; em--) a5 = af.jf[em] + en * a7.eQ, 0 < a8e[a5] && a8e[a5] < 255 && a8e[a5]--;
			if (2 !== a7.wD)
				for (em = af.jd - 1; 0 <= em; em--) a5 = af.jf[em], 0 < a8e[a5] && a8e[a5] < 255 && a8e[a5]--
		}();
		var a5, em, eT = Math.floor(.1 * af.jd);
		for (eT = (eT = eT < 8 ? 8 : eT) > af.jd ? af.jd : eT, a5 = aCw + eT - 1; aCw <= a5; a5--) em = a5 % af.jd, ! function(a5) {
			var hD = aDX(a5) * aD2[a5];
			0 < aD0[a5] && aE1(a5, aCy[a5], aCz[a5], aD0[a5], aD1[a5]) ? ! function(a5) {
				for (var ea, ec, z, j6, e6 = !1, en = 0; en < 8; en++) {
					if (z = aD0[a5] + 2, j6 = aD1[a5] + 2, z > aa.i9[a5] - aa.i8[a5] + 1 || j6 > aa.iB[a5] - aa.iA[a5] + 1) return e6;
					if (ea = aCy[a5] - 1, ec = aCz[a5] - 1, !aE1(a5, ea, ec, z, j6)) return e6;
					aCy[a5] = ea, aCz[a5] = ec, aD0[a5] = z, aD1[a5] = j6, e6 = !0
				}
				return e6
			}(a5) && function(a5, hD) {
				for (var ea, ec, z, j6, e6 = !1, a8n = aD0[a5], mB = 1 + Math.floor(.02 * a8n), en = 1; en < 5; en++) {
					if ((z = a8n + en * mB) > aa.i9[a5] - aa.i8[a5] + 1) return e6;
					if ((j6 = aE7(hD, z)) > aa.iB[a5] - aa.iA[a5] + 1) return e6;
					ea = aa.i8[a5] + Math.floor(Math.random() * (aa.i9[a5] - aa.i8[a5] + 2 - z)), ec = aa.iA[a5] + Math.floor(Math.random() * (aa.iB[a5] - aa.iA[a5] + 2 - j6)), aE1(a5, ea, ec, z, j6) && (aCy[a5] = ea, aCz[a5] = ec, aD0[
						a5] = z, aD1[a5] = j6, e6 = !0)
				}
				return e6
			}(a5, hD) && aE4(a5) : ! function(a5, hD) {
				var j6, ea = aCy[a5] + 1,
					ec = aCz[a5] + 1,
					z = aD0[a5] - 2;
				for (;;) {
					if (z < 1) {
						aD0[a5] = 0;
						break
					}
					if (j6 = aE7(hD, z), aE1(a5, ea, ec, z, j6)) return aCy[a5] = ea, aCz[a5] = ec, aD0[a5] = z, aD1[a5] = j6, 1;
					ea++, ec++, z -= 2
				}
				return
			}(a5, hD) ? function(a5, hD) {
				var ea, ec, z, j6, en, mI, it = aa.i9[a5] - aa.i8[a5] + 1,
					l0 = Math.floor(.02 * it);
				for (mI = -6 * (l0 = l0 < 1 ? 1 : l0), en = it; mI <= en; en -= l0)
					if (j6 = aE7(hD, z = 0 < en ? en : 1), ea = aa.i8[a5] + Math.floor(Math.random() * (aa.i9[a5] - aa.i8[a5] + 2 - z)), ec = aa.iA[a5] + Math.floor(Math.random() * (aa.iB[a5] - aa.iA[a5] + 2 - j6)), aE1(a5, ea, ec, z,
						j6)) return aCy[a5] = ea, aCz[a5] = ec, aD0[a5] = z, aD1[a5] = j6
			}(a5, hD) : aE4(a5)
		}(af.jf[em]);
		aCw = (aCw += eT) % af.jd
	}, this.lE = function() {
		var a5, g3, hO, hP;
		if (ba.jZ() % 4 == 1)
			for (a5 = af.jd - 1; 0 <= a5; a5--) g3 = af.jf[a5], aW.a4s[g3] < 2 || ((hO = Math.max(aDP[g3] - 1, 0)) === (hP = Math.max(aDQ[g3] - 1, 0)) ? 0 === hO && (aW.a4s[g3] %= 2) : 0 === hP && aW.a4s[g3] < 6 && (aW.a4s[g3] += 4), aDP[g3] =
				hO, aDQ[g3] = hP)
	}, this.a3D = function(player) {
		var a5 = player + 2 * a7.eQ,
			e1 = a8e[a5];
		return 0 < e1 && (aH.wK(50, player), a8e[a5] = 0, 255 === e1)
	}, this.a2F = function(player) {
		return 255 === a8e[player + 2 * a7.eQ]
	}
}

function cR() {
	var aEA, aEB;
	this.dO = function() {
		aEA =
			"Abbasid Caliphate;Aceh s;Achaemenid Z;Afsharid z;Aghlabid Emirate;Ahom z;Akkadian Z;Aksumite Z;Akwamu;Alaouite z;Almohad Caliphate;Almoravid z;Angevin Z;Aq Qoyunlu;Armenian Z;Assyria;Ashanti Z;Austrian Z;Austria-Hungary;Ayyubid z;Aztec Z;Aulikara Z;Babylonian Z;Balhae;Banten s;S Banjar;Bamana Z;Bengal s;Benin Z;Kadamba z;Bornu Z;E Brazil;Britannic Z;British Z;British Raj;Bruneian Z;Bukhara Z;Burgundian State;Buyid z;Byzantine Z;Caliphate of Córdoba;Cao Wei;Carthaginian Z;Cebu Rajahnate;Chagatai Khanate;Chalukya z;Chauhan z;Chavín Z;Chenla;Chera z;Chola z;Comanche Z;Congo Free State;Crimean Khanate;Dacian Z;Delhi s;Demak s;Durrani Z;Dutch Z;Egyptian Z;Elamite Z;Exarchate of Africa;Abyssinia;Fatimid Caliphate;First French Z;Frankish Z;Funan;Gallic Z;Gaza Z;Republic of Genoa;German Z;Ghana Z;Ghaznavid z;Ghurid z;Goguryeo;Goryeo;Gorkha Z;Göktürk Khaganate;Golden Horde;S Gowa;Seljuq Z;Gupta Z;Hafsid Y;Han z;Hanseatic League;E Harsha;Hephthalite Z;Hittite Z;Holy Roman Z;Hotak z;Hoysala Z;Hunnic Z;Husainid z;Idrisid z;Ilkhanate;K Israel;K Judah;Inca Z;Italian Z;E Japan;Jin z;Johor Z;Jolof Z;Joseon;Kaabu Z;Kachari Y;Kalmar Union;Kanem Z;Kanva z;Kara-Khanid Khanate;Kazakh Khanate;Khazar Khaganate;Khmer Z;Khilji z;Khwarazmian z;Kievan Rus';Konbaung z;Kong Z;Korean Z;Kushan Z;K Kush;Lakota;Latin Z;Later Lê z;Liao z;Lodi s;Khmer Z;Macedonian Z;Majapahit Z;Mali Z;Malacca Z;Mamluk s;Manchukuo;Maratha Z;Marinid z;Massina Z;Mataram s;Mauretania;Mauryan Z;Median Z;Mlechchha z;Ming z;Mitanni Z;Mongol Z;Mughal Z;Nanda Z;Nguyễn z;North Sea Z;E Nicaea;Numidia;Omani Z;Ottoman Z;Oyo Z;Pagan Z;Pahlavi z;Pala Z;Palmyrene Z;Parthian Z;Pontic Z;Portuguese Z;K Prussia;Ptolemaic Z;Qajar z;Qara Qoyunlu;Qin z;Qing z;Ramnad Sethupathis;Rashidun Caliphate;Rashtrakuta z;Roman Z;Rouran Khaganate;Rozwi Z;Rustamid z;Russian Z;Tsardom of Russia;Saadi z;Safavid z;Saffarid z;Sassanid z;Satavahana z;Samanid Z;Soviet Union;Saudeleur z;Duchy of Savoy;Seleucid Z;Serbian Z;Shu Han;Shang z;Siam Z;Sikh Z;Singhasari;Sokoto Caliphate;Song z;Songhai Z;Spanish Z;Srivijaya Z;Sui z;K Mysore;Shunga Z;S Sulu;Sumer;Sur Z;Swedish Z;Tahirid z;Tang z;Tây Sơn z;S Ternate;E Thessalonica;German Reich;Tibetan Z;Tondo z;S Tidore;Timurid Z;K Tlemcen;E Trebizond;Toltec Z;Toungoo z;Toucouleur Z;Tu'i Tonga Z;Turgesh Khaganate;Umayyad Caliphate;Uyunid Emirate;Uyghur Khaganate;Uzbek Khanate;Vandal Y;Vijayanagara Z;Republic of Venice;Wari Z;Wassoulou Z;Wattasids;Western Roman Z;Eastern Wu;Western Xia z;Xin z;Yuan z;Zand z;Zhou z;Zulu Z;Yugoslavia;Kosovo;Sikkim;Kanem–Bornu Z;Wadai Z;Ethiopian Z;Rozvi Z;Sasanian Z;E Vietnam;Shilluk Y;K Aksum;Gwiriko Y;Toro Y;Malindi Y;K Loango;K Mapungubwe;Ryukyu Y;K Cyprus;K Jerusalem;Garhwal Y;K Nepal;K Cambodia;Champa Y;Hanthawaddy Y;Phayao Y;K Sardinia;K Sicily;K Gwynedd;K Scotland;K Desmond;K Poland;K Hungary;K Croatia;K Bohemia;Albanian Y;K Georgia;K Portugal;Khanate of Sibir;K Romania;Cossack Hetmanate;Duchy of Bouillon;K Ireland;Lordship of Ireland;K Italy;Republic of Pisa;Idrisid z;Almoravid z;Almohad Caliphate;Marinid z;Wattasid z;Saadian z;Republic of Salé;Rif Republic;K Kush;Makuria;Alodia;Ayyubid z;Mamluk s;Egypt Eyalet;K Fazughli;S Sennar;S Darfur;Mahdist State;S Egypt;K Egypt;Emirate of Cyrenaica;K Libya;Republic of Egypt;Republic of the Sudan;United Arab Republic;Libyan Arab Republic;Zirid z;Hafsid z;K Kuku;Regency of Algiers;Gurunsi;Liptako;Tenkodogo;Wogodogo;Yatenga;Bilanga;Bilayanga;Bongandini;Con;Macakoali;Piela;Nungu;K Sine;K Saloum;K Baol;K Cayor;K Waalo;Bundu;Bonoman;Gyaaman;Denkyira;Mankessim Y;K Dahomey;Oyo Z;K Nri;Aro Confederacy;Kwararafa;Biafra;Buganda;Bunyoro;Ankole;Busoga;Tanganyika;Kuba Y;K Luba;K Lunda;Yeke Y;K Ndongo;Kasanje Y;K Matamba;Mbunda Y;Chokwe Y;Kazembe Y;K Butua;Ndebele Y;Mthethwa Z;Bophuthatswana;Ciskei;Transkei;Venda;Rhodesia;Kart z;Nogai Horde;Khanate of Bukhara;Khanate of Khiva;Khamag Mongol;Northern Fujiwara;Kamakura Shogunate;Ashikaga Shogunate;Jaxa;Republic of Ezo;Jiangxi Soviet;Hunan Soviet;Guangzhou Commune;Gojoseon;Alaiye;Beylik of Bafra;Kara Koyunlu;Kars Republic;K Iraq;Arab Federation;Kar-Kiya z;Baduspanids;Marashiyan z;Afrasiyab z;Mihrabanid z;Safavid Iran;Sheikhdom of Kuwait;Bani Khalid Emirate;Emirate of Diriyah;Emirate of Najd;Muscat and Oman;Emirate of Riyadh;S Najd;K Hejaz;Fadhli s;Emirate of Beihan;Emirate of Dhala;S Lahej;Republic of Kuwait;K Cochin;Jaffna Y;Laur Y;Pandya z;Jaunpur s;Jaintia Y;Hyderabad State;Travancore;Udaipur State;Manikya z;Lan Xang;K Vientiane;K Champasak;Lao Issara;K Laos;Pyu States;Ava;Mon Ys;Pegu;K Mrauk U;Taungoo z;Shan States;Arakan;Raktamaritika;Singhanavati;Dvaravati;Ngoenyang;Hariphunchai;Tambralinga;Lavo Y;Langkasuka;Sukhothai Y;S Singora;Ayutthaya Y;Thonburi Y;Lan Na;Pattani Y;Jambi s;Palembang s;S Deli;S Langkat;S Serdang;S Cirebon;K Pajang;K Bali;Bima s;K Larantuka;K Banggai;Luwu;S Bone;Caucasian Albania;Kabardia;Circassia;K Abkhazia;Elisu s;Avar Khanate;Caucasian Imamate;K Imereti;K Kartli;K Kakheti;Crown of Aragon;Emirate of Granada;K Majorca;Crown of Castile;K Haiti;Cocollán;Zapotec Civilization;Mosquito Y;Somoza Regime;Iroquois Confederacy;Cherokee Nation;Vermont Republic;State of Muskogee;K Alo;K Sigave;K Fiji;K Nauru;K Chile;Muisca Confederation;El Stronato;K Chimor;Jungle Republic;Liga Federal;Supreme Junta;Weimar Republic;K Bavaria;Bremen;Frankfurt;Hamburg;K Hanover;Holstein;Lippe;Nassau;Oldenburg;Pomerania;Reuss;Saxe-Altenburg;Saxony;Schleswig;Waldeck;Württemberg;Helvetic Republic;Republic of Florence;Duchy of Urbino;Republic of Cospaia;Duchy of Lucca;Duchy of Mantua;Duchy of Milan;Papal States"
			.split(";"), aEB =
			"Pestilent Dominion;Wretched Realm;Damned Province;Corrupt Zone;Cursed Territory;Blight Nation;Haunted Expanse;Malevolent State;Ruined Empire;Contaminated Land;Epidemic Domain;Forsaken District;Abandoned Wasteland;Necrotic Enclave;Tainted Domain;Decayed Principality;Infested Region;Malignant Territory;Toxic Dominion;Ravaged Sector;Ghostly Realm;Plagued Commonwealth;Afflicted State;Desolate Nation;Apocalyptic Zone;Radiated Province;Deathly District;Pestilence Haven;Doom Territory;Malefic Expanse;Abandoned State;Cursed Haven;Corroded Zone;Hauntland;Noxious Nation;Infected Enclave;Ruinous Domain;Wasteland Woe;Rotten Principality;Voided Land;Vile Dominion;Catastrophic Region;Eerie Expanse;Desolation State;Forsaken Outpost;Contagion District;Damaged Province;Abhorrent Sector;Accursed Nation;Doomstruck Land;Radiant Ruin;Deathly Enclave;Malefic Dominion;Plague District;Infected Haven;Corrupt State;Pestilent Territory;Razed Realm;Haunted Wasteland;Toxic Sector;Cursed Dominion;Decaying Province;Forsaken Enclave;Ruinous Region;Malignant Haven;Infested State;Ghostly Nation;Tainted Territory;Damned District;Radiated Dominion;Desolate Expanse;Apocalyptic Land;Death Zone;Wretched State;Malevolent Haven;Plagued Nation;Noxious Domain;Voided Territory;Eerie Sector;Accursed Province;Necrotic District;Doom Haven;Haunt Realm;Rotten Nation;Forsaken Territory;Infected State;Abhorrent Expanse;Malignant Land;Toxic Dominion;Ruined District;Ghostland;Cursed Sector;Radiant Nation"
			.split(";");
		for (var a3W = ["K ", " Y", "E ", " Z", " z", " s", "S "], aEC = ["Kingdom of ", " Kingdom", "Empire of ", " Empire", " Dynasty", " Sultanate", "Sultanate of "], a5 = aEA.length - 1; 0 <= a5; a5--)
			for (var em = a3W.length - 1; 0 <= em; em--) aEA[a5] = aEA[a5].replace(a3W[em], aEC[em]);
		if (__fx.settings.realisticNames) aEA = realisticNames;
	}, this.a11 = function() {
		var eT = a7.jc,
			a39 = aa.a39,
			x5 = aa.x5,
			a1U = a7.data.a1U;
		if (!a1U || a1U.length < eT)
			for (var a5 = 0; a5 < eT; a5++) a39[a5] = x5[a5] = "Player " + au.iu(1e3);
		else
			for (a5 = 0; a5 < eT; a5++) a39[a5] = x5[a5] = a1U[a5]
	}, this.a1 = function() {
		if (9 === a7.jw) {
			for (var hH = au.random(), aEI = aEA, aEJ = aEB, eT = aEI.length, kQ = a7.data.tc[7], a39 = aa.a39, x5 = aa.x5, a5 = kQ - 1; a5 >= a7.jc; a5--) a39[a5] = x5[a5] = aEI[(a5 + hH) % eT];
			for (eT = aEJ.length, a5 = kQ; a5 < a7.eQ; a5++) a39[a5] = x5[a5] = aEJ[a5 % eT]
		} else(2 === a7.data.a1T ? function() {
			for (var eT = a7.eQ, a39 = aa.a39, x5 = aa.x5, a1U = a7.data.a1U, a5 = a7.jc; a5 < eT; a5++) a39[a5] = x5[a5] = a1U[a5]
		} : 1 === a7.data.a1T ? function() {
			for (var a39 = aa.a39, x5 = aa.x5, a5 = a7.jc; a5 < a7.eQ; a5++) a39[a5] = x5[a5] = "Bot " + au.iu(1e3)
		} : function() {
			for (var aEI = aEA, eT = aEI.length, hH = au.random(), a39 = aa.a39, x5 = aa.x5, a5 = a7.jc; a5 < a7.eQ; a5++) a39[a5] = x5[a5] = aEI[(a5 + hH) % eT]
		})()
	}
}

function cm() {
	this.aEK = [], this.aEL = [], this.dO = function() {
		this.aEK = [], this.aEL = []
	}, this.iR = function() {
		0 <= this.aEK.length && this.aEM(this.aEK), 0 <= this.aEL.length && this.aEM(this.aEL)
	}, this.aEM = function(fC) {
		for (var en = -1, a5 = fC.length - 1; 0 <= a5; a5--)
			if (fC[a5].e0--, fC[a5].e0 <= 0) {
				en = a5;
				break
			} for (a5 = en; 0 <= a5; a5--) fC.shift()
	}, this.a23 = function(id, w4, aEN) {
		return this.ep(this.aEK, id, w4, aEN)
	}, this.aEO = function(id, w4, aEN) {
		return this.ep(this.aEL, id, w4, aEN)
	}, this.ep = function(fC, id, w4, aEN) {
		return ! function(fC, id, w4) {
			var a5, k2;
			for (a5 = w4.length - 1; 0 <= a5; a5--)
				for (k2 = fC.length - 1; 0 <= k2; k2--)
					if (fC[k2].player === w4[a5] && id === fC[k2].id) return 1;
			return
		}(fC, id, w4) && (aEN && function(fC, id, w4) {
			var a5;
			for (a5 = w4.length - 1; 0 <= a5; a5--) fC.push({
				player: w4[a5],
				id: id,
				e0: 384
			})
		}(fC, id, w4), !0)
	}
}

function cQ() {
	this.x5 = new Array(a7.eQ), this.a39 = new Array(a7.eQ), this.zi = new Uint8Array(a7.eQ), this.lX = new Uint8Array(a7.eQ), this.i8 = new Uint16Array(a7.eQ), this.iA = new Uint16Array(a7.eQ), this.i9 = new Uint16Array(a7.eQ), this.iB =
		new Uint16Array(a7.eQ), this.gJ = new Uint32Array(a7.eQ), this.ty = new Uint32Array(a7.eQ), this.gX = new Uint32Array(a7.eQ), this.fx = null, this.gB = null, this.gC = null, this.et = null, this.oa = new Uint16Array(a7.eQ), this.iZ =
		new Uint16Array(a7.eQ), this.ia = new Uint16Array(a7.eQ), this.wr = new Uint16Array(a7.eQ), this.wx = new Uint8Array(a7.eQ), this.zo = new Uint16Array(a7.eQ), this.dO = function() {
			this.x5.fill(""), this.a39.fill(""), this.zi.fill(0), this.lX.fill(0), this.i8.fill(0), this.iA.fill(0), this.i9.fill(0), this.iB.fill(0), this.gJ.fill(0), this.ty.fill(0), this.gX.fill(0), __fx.donationsTracker.reset(), __fx
				.leaderboardFilter.reset(), __fx.customLobby.isActive() && __fx.customLobby.hideWindow(), this.fx = new Array(a7.eQ), this.gB = new Array(a7.eQ), this.gC = new Array(a7.eQ), this.et = new Array(a7.eQ), this.oa.fill(0), this.iZ.fill(
				0), this.ia.fill(0), this.wr.fill(0), this.wx.fill(0), this.zo.fill(0)
		}
}

function ck() {
	this.aER = function(player) {
		aA.lW(player), a7.wF++, aa.zi[player] = 2, aa.wr[player] = bd.wl.aC6(), player === a7.eD && (aR.show(!1, !1), aQ.a7R(), bM.result.wv()), aZ.a3D(player)
	}
}

function cK() {
	this.jf = null, this.jd = 0, this.a15 = function() {
		for (this.jd = 0, a5 = a7.eQ - 1; 0 <= a5; a5--) 0 !== aa.lX[a5] && this.jd++;
		this.jf = new Uint16Array(this.jd);
		for (var eT = 0, a5 = 0; a5 < a7.eQ; a5++) 0 !== aa.lX[a5] && (this.jf[eT++] = a5)
	}, this.lD = function() {
		for (var gJ = aa.gJ, ty = aa.ty, wx = aa.wx, jf = af.jf, a5 = af.jd - 1; 0 <= a5; a5--) {
			var e1, g3 = jf[a5];
			gJ[g3] <= bG.ev(ty[g3], 4) ? ae.dX(g3) : gJ[g3] >= ty[g3] ? (e1 = gJ[g3], 250 <= (ty[g3] = e1) && (wx[g3] = 1)) : ty[g3] -= Math.max(1, bG.ev(ty[g3] - gJ[g3], 1e3))
		}
		this.aET()
	}, this.aET = function() {
		for (var lX = aa.lX, je = this.jf, a85 = this.jd, a5 = a85 - 1; 0 <= a5; a5--) 0 === lX[je[a5]] && (je[a5] = je[--a85]);
		this.jd = a85
	}
}

function cS() {
	var aEU;
	this.k9 = null, this.dO = function() {
		aEU = [], 9 === a7.jw && this.aEV()
	}, this.aEV = function() {
		var aEW = [57, 85, 105, 150, 190, 333];
		if (this.k9 = [0, 0, 0, 0, 0, 0], a7.jc <= aEW[0]) this.k9[0] = Math.max(bG.ev(a7.jc * (512 - a7.jc), aEW[0]), 13), a7.k0 = this.k9[0];
		else {
			a7.k0 = a7.eQ - a7.jc;
			for (var a5 = 1; a5 < 6; a5++)
				if (a7.jc <= aEW[a5]) {
					this.k9[a5 - 1] = 512 - aEW[a5 - 1] - bG.ev((512 - aEW[a5 - 1]) * (a7.jc - aEW[a5 - 1]), aEW[a5] - aEW[a5 - 1]), this.k9[a5] = 512 - a7.jc - this.k9[a5 - 1];
					break
				}
		}
		a7.data.a0t = (0 < a7.jc) + (0 < a7.k0), a7.data.a0x = a7.tT = a7.jc + a7.k0, a7.data.tc = new Uint16Array([0, 0, 0, 0, 0, 0, 0, a7.jc, a7.k0]), a7.a0k.a0v()
	}, this.aCD = function(player) {
		aEU.push({
			player: player,
			fy: 14 + au.iu(20)
		})
	}, this.iR = function() {
		if (9 === a7.jw)
			for (var a5 = aEU.length - 1; 0 <= a5; a5--) --aEU[a5].fy <= 0 && (aZ.oo(aEU[a5].player, 0, ad.uo.v9 + ad.uo.vO), aEU.splice(a5))
	}
}

function d1() {
	function aEk() {
		return {
			ee: bN.ee,
			ef: bN.ef,
			st: bN.st,
			sp: bN.sp,
			sq: bN.sq,
			su: bN.su,
			e8: bN.e8,
			a1K: bN.a1K
		}
	}

	function aEc(a5) {
		return 1 !== a5 && bN.aEf(a5) && a5 !== bN.aEl()
	}
	this.aEY = 22, this.aCO = 4096, this.ee = 0, this.ef = 0, this.st = null, this.sp = null, this.sq = null, this.su = null, this.e8 = 0, this.a1K = 0, this.sr = !1, this.ss = new aEZ, this.sj = new aEa, this.a3c = new aEb, this.dO = function() {
		this.sj.dO()
	}, this.a1 = function(map, aAj) {
		((map %= this.aEY) !== this.e8 || aEc(this.e8) && aAj !== this.a1K) && (this.sr = !1, this.ss.aEd(), au.a0z(map), this.e8 = map, this.a1K = aAj, aEc(map) && (bN.sj.sk[map].aEe = aAj), this.aEf(this.e8) ? (map = bN.sj.sk[this.e8], this
			.ee = map.z, this.ef = map.j6, au.a0z(map.aEe), aj.a1([this.ee, this.ef, map.lc, map.lZ]), aEh(), ai.aEi(), aj.aEj()) : aEg())
	}, this.aAr = function(map, aAj) {
		var fD = aEk(),
			map = (this.a1(map, aAj), this.ss.aEd(), aEk());
		return this.ee = fD.ee, this.ef = fD.ef, this.st = fD.st, this.sp = fD.sp, this.sq = fD.sq, this.su = fD.su, this.e8 = fD.e8, this.a1K = fD.a1K, map
	}, this.a1l = function(hE) {
		hE && this.st !== hE && (this.ee = hE.width, this.ef = hE.height, this.st = hE, this.sp = this.st.getContext("2d", {
			alpha: !1
		}), this.hB = this.sp.getImageData(0, 0, this.ee, this.ef), this.su = this.hB.data, this.e8 = this.aEl(), this.a1K = 0, bN.sj.sk[this.e8].name = a7.data.a1L)
	}, this.e7 = function(a5) {
		return 3 === a5 || 7 === a5 || 9 === a5 || 21 === a5 || a5 === this.aEl()
	}, this.aEm = function(a5) {
		return 2 === a5 || 7 === a5 || 9 === a5 || 20 === a5
	}, this.aEn = function(a5) {
		return 1 === a5
	}, this.aEl = function() {
		return this.aEY
	}, this.aEf = function(a5) {
		return void 0 === this.sj.sk[a5].aEo
	}, this.a1k = function(p7) {
		return 0 === p7.a1H ? p7.a1I < 10 ? p7.a1I : 10 + p7.a1I : 1 === p7.a1H ? p7.a1J + 10 : void 0
	}, this.aEp = function(p7, aEq) {
		0 === p7.a1H ? p7.a1I = aEq < 10 ? aEq : aEq - 10 : 1 === p7.a1H && (p7.a1J = aEq - 10)
	}
}

function aEZ() {
	function aEz() {
		bN.ss.iR()
	}

	function aF5(g3, aF4) {
		0 < aF4 && (bN.su[g3] += aF4, bN.su[g3 + 1] += aF4, bN.su[g3 + 2] += aF4)
	}

	function gy(g3) {
		return bN.su[g3 + 2] > bN.su[g3] && bN.su[g3 + 2] > bN.su[g3 + 1]
	}
	this.a5o = -1, this.dz = 0, this.aEr = 0, this.aEs = 8, this.aEt = 32, this.aEu = 8, this.aEv = 32, this.aEw = [0, 0], this.a4s = [0, 0, 0, 0], this.i3 = null, this.aEx = !0, this.aEy = !1, this.aEd = function() {
		-1 !== this.a5o && clearTimeout(this.a5o), this.a5o = -1, this.i3 = null, aj.aEj()
	}, this.dO = function() {
		7 === aU.xT() || this.aEy || (this.aEx = !0, this.dz = 0, this.aEr = 1, this.aEw = [bN.sj.sk[bN.e8].tC[0], bN.sj.sk[bN.e8].tD[0]], this.a4s = [bN.sj.sk[bN.e8].aEo[3], bN.sj.sk[bN.e8].aEo[4], bN.sj.sk[bN.e8].aEo[5], bN.sj.sk[bN.e8].aEo[
			6]], this.aEs = bN.sj.sk[bN.e8].aEo[7], this.aEt = bN.sj.sk[bN.e8].aEo[8], this.aEu = bN.sj.sk[bN.e8].aEo[9], this.aEv = bN.sj.sk[bN.e8].aEo[10], this.aEx ? this.a5o = setTimeout(aEz, 16) : this.iR())
	}, this.iR = function() {
		if (8 === aU.xT() && aB.lq()) this.a5o = setTimeout(aEz, 16);
		else {
			if (0 === this.dz) {
				var aEe = au.aF0();
				if (au.a0z(bN.sj.sk[bN.e8].aEo[2]), aj.a1([bN.ee, bN.ef, bN.sj.sk[bN.e8].aEo[0], bN.sj.sk[bN.e8].aEo[1]]), au.a0z(aEe), this.i3 = aj.aF1(), this.dz++, this.aEx) return void(this.a5o = setTimeout(aEz, 16))
			}
			for (var g3, eF, aEe = this.aEx ? 10 : 1e6, aEe = bN.ef - this.aEr - 1 < aEe ? bN.ef - this.aEr - 1 : aEe, uC = this.aEr + aEe, ec = this.aEr; ec < uC; ec++)
				for (var ea = 1; ea < bN.ee - 1; ea++) gy(g3 = 4 * (eF = ea + ec * bN.ee)) ? this.aF2(g3, eF, 1) : (this.aF2(g3, eF, 0), function(ea, ec, g3) {
					return 1 < ea && gy(g3 - 4) || ea < bN.ee - 2 && gy(g3 + 4) || 1 < ec && gy(g3 - 4 * bN.ee) || ec < bN.ef - 2 && gy(g3 + 4 * bN.ee)
				}(ea, ec, g3) && this.aF3(ea, ec));
			this.aEr = uC, this.aEr >= bN.ef - 1 ? (bN.sp.putImageData(bN.sq, 0, 0, 1, 1, bN.ee - 2, bN.ef - 2), ba.dW = !0, this.aEd()) : this.aEx && (this.a5o = setTimeout(aEz, 16))
		}
	}, this.aF2 = function(g3, eF, oF) {
		aF5(g3, Math.floor(this.aEw[oF] + this.a4s[oF] * this.i3[eF] / 1e4) - bN.su[g3])
	}, this.aF6 = function(g3, hH, aF7, oF, a4s) {
		aF5(g3, Math.floor(this.aEw[oF] + (1 - hH / aF7) * a4s) - bN.su[g3])
	}, this.aF3 = function(kl, km) {
		for (var g3, hH, aF7, a5e = kl - this.aEt, aF8 = km - this.aEt, uD = kl + this.aEt, uC = km + this.aEt, a5e = a5e < 1 ? 1 : a5e, uD = uD > bN.ee - 2 ? bN.ee - 2 : uD, uC = uC > bN.ef - 2 ? bN.ef - 2 : uC, ec = aF8 < 1 ? 1 : aF8; ec <=
			uC; ec++)
			for (var ea = a5e; ea <= uD; ea++) gy(g3 = 4 * (ea + ec * bN.ee)) ? (aF7 = this.aEs + (this.aEt - this.aEs) * this.i3[ea + bN.ee * ec] / 1e4, Math.abs(kl - ea) > aF7 || Math.abs(km - ec) > aF7 || aF7 <= (hH = Math.sqrt((kl - ea) * (
				kl - ea) + (km - ec) * (km - ec))) || this.aF6(g3, hH, aF7, 1, this.a4s[3])) : (aF7 = this.aEu + (this.aEv - this.aEu) * this.i3[ea + bN.ee * ec] / 1e4, Math.abs(kl - ea) > aF7 || Math.abs(km - ec) > aF7 || aF7 <= (hH = Math
				.sqrt((kl - ea) * (kl - ea) + (km - ec) * (km - ec))) || this.aF6(g3, hH, aF7, 0, this.a4s[2]))
	}
}

function aEh() {
	2 === bN.e8 ? aF9([256], [256], [0, 205, 256], [500, 500, 0], [0, 0, 0]) : 7 === bN.e8 ? aF9([512], [512], [0, 380, 512], [500, 500, 0], [0, 0, 0]) : 8 === bN.e8 ? aF9([410], [410], [0, 120, 210], [0, 80, 640], [0, 0, 0]) : 9 === bN.e8 ? aF9([
		512], [512], [0, 70, 180, 200, 290, 420, 512], [500, 500, 0, 0, 500, 500, 0], [0, 0, 0, 0, 0, 0, 0]) : 20 === bN.e8 && aF9([512], [512], [0, 380, 512], [500, 500, 0], [0, 0, 0])
}

function aF9(aFA, aFB, aFC, aFD, aFE) {
	for (var ea, ec, aFG, aFH, yn, aFI, he = aFA.length - 1, aFF = bN.ee + bN.ef, eT = (aFF *= aFF, aFC.length), a5 = eT - 1; 0 <= a5; a5--) aFC[a5] *= aFC[a5];
	var aFJ = new Array(eT),
		aFK = new Array(eT),
		aFL = new Array(eT),
		ew = aj.aF1();
	if (void 0 === aFE)
		for (aFE = new Array(eT), a5 = eT - 1; 0 <= a5; a5--) aFE[a5] = 0;
	for (a5 = 1; a5 < eT; a5++) aFJ[a5] = aFC[a5] - aFC[a5 - 1], aFK[a5] = aFD[a5] - aFD[a5 - 1], aFL[a5] = aFE[a5] - aFE[a5 - 1];
	for (ea = bN.ee - 1; 0 <= ea; ea--)
		for (ec = bN.ef - 1; 0 <= ec; ec--) {
			for (aFG = aFF, a5 = he; 0 <= a5; a5--) aFG = (aFH = (ea - aFA[a5]) * (ea - aFA[a5]) + (ec - aFB[a5]) * (ec - aFB[a5])) < aFG ? aFH : aFG;
			for (yn = aFD[eT - 1], aFI = aFE[eT - 1], a5 = 1; a5 < eT; a5++)
				if (aFG < aFC[a5]) {
					yn = aFD[a5 - 1] + aBg((aFG - aFC[a5 - 1]) * aFK[a5], aFJ[a5]), aFI = aFE[a5 - 1] + aBg((aFG - aFC[a5 - 1]) * aFL[a5], aFJ[a5]);
					break
				} aFM(bN.ee * ec + ea, yn, aFI, ew)
		}
}

function aFM(oF, yn, aFI, ew) {
	yn < 500 ? ew[oF] = bG.ev(ew[oF] * yn * 2, 1e3) : 500 < yn && (ew[oF] += bG.ev(2 * (1e4 - ew[oF]) * (yn - 500), 1e3)), ew[oF] += bG.ev(aFI * (10 * yn - ew[oF]), 1e3)
}

function cU() {
	var aFN;

	function aFX(zC, hD, ea, ec, globalAlpha) {
		bN.sp.save(), bN.sp.globalAlpha = globalAlpha, bN.sp.imageSmoothingEnabled = !1, bN.sp.scale(hD, hD), bN.sp.drawImage(zC, Math.floor(ea * (bN.ee / hD - zC.width)), Math.floor(ec * (bN.ef / hD - zC.height))), bN.sp.restore()
	}
	this.a3Z = 0, this.a3a = 0, this.a3b = 0, this.a3c = 0, this.dO = function() {
		(aFN = new Array(bN.aEY))[0] = {
			z: [0, 5e3, 8e3, 1e4],
			hH: [220, 250, 255, 220],
			qm: [190, 220, 0, 0],
			en: [170, 200, 0, 0]
		}, aFN[1] = {
			z: [0, 4e3, 5e3, 6e3, 1e4],
			hH: [25, 0, 100, 0, 25],
			qm: [25, 0, 0, 0, 25],
			en: [25, 0, 0, 0, 25]
		}, aFN[2] = {
			z: [0, 500, 2500, 2999, 3e3, 3200, 4200, 5200, 5700, 8800, 1e4],
			hH: [15, 15, 70, 40, 48, 48, 252, 40, 40, 20, 30],
			qm: [80, 80, 190, 90, 46, 46, 248, 180, 180, 90, 140],
			en: [120, 120, 220, 110, 37, 37, 217, 10, 10, 10, 10]
		}, aFN[3] = {
			z: [0, 400, 1899, 1900, 3200, 4500, 6e3, 7700, 8499, 8500, 9500, 1e4],
			hH: [10, 10, 20, 10, 30, 10, 16, 40, 50, 55, 230, 230],
			qm: [10, 10, 40, 50, 100, 40, 80, 120, 80, 55, 230, 230],
			en: [80, 80, 200, 10, 60, 10, 16, 40, 50, 55, 230, 230]
		}, aFN[4] = {
			z: [0, 300, 1400, 1700, 3e3, 4e3, 1e4],
			hH: [10, 10, 20, 10, 10, 170, 212],
			qm: [20, 20, 60, 100, 100, 110, 170],
			en: [70, 70, 160, 30, 30, 60, 120]
		}, aFN[5] = {
			z: [0, 1e3, 3e3, 3500, 4e3, 4500, 7e3, 7500, 8e3, 1e4],
			hH: [10, 10, 20, 10, 5, 10, 20, 5, 20, 25],
			qm: [30, 30, 50, 100, 30, 100, 140, 60, 140, 200],
			en: [80, 80, 200, 10, 5, 10, 20, 5, 20, 25]
		}, aFN[6] = {
			z: [0, 700, 2650, 3200, 5e3, 8e3, 1e4],
			hH: [10, 10, 60, 255, 255, 200, 200],
			qm: [10, 10, 60, 255, 255, 200, 200],
			en: [80, 80, 255, 255, 255, 200, 200]
		}, aFN[7] = {
			z: [0, 400, 1999, 2e3, 3200, 4e3, 4700, 5500, 6500, 9500, 1e4],
			hH: [10, 10, 80, 255, 255, 55, 6, 70, 20, 155, 255],
			qm: [10, 10, 90, 245, 245, 170, 80, 190, 20, 155, 255],
			en: [80, 80, 255, 235, 235, 55, 26, 10, 20, 155, 255]
		}, aFN[8] = {
			z: [0, 700, 1300, 1900, 1901, 2500, 3400, 6e3, 1e4],
			hH: [25, 30, 30, 30, 255, 255, 30, 40, 20],
			qm: [25, 30, 150, 150, 245, 245, 80, 150, 70],
			en: [60, 170, 170, 170, 235, 235, 30, 40, 40]
		}, aFN[9] = {
			z: [0, 400, 2009, 2010, 3300, 4e3, 5200, 6500, 8e3, 9500, 1e4],
			hH: [10, 10, 80, 255, 255, 55, 23, 36, 20, 155, 255],
			qm: [10, 10, 90, 245, 245, 170, 60, 160, 20, 155, 255],
			en: [80, 80, 255, 235, 235, 55, 9, 72, 20, 155, 255]
		}, aFN[20] = {
			z: [0, 5500, 6700, 6999, 7e3, 7300, 7600, 8200, 1e4],
			hH: [5, 5, 70, 70, 255, 255, 252, 10, 8],
			qm: [20, 28, 190, 190, 255, 255, 248, 90, 60],
			en: [60, 80, 220, 220, 220, 220, 217, 10, 8]
		}, aFN[21] = {
			z: [0, 1500, 3e3, 4e3, 5e3, 5999, 6e3, 9500, 1e4],
			hH: [12, 30, 10, 16, 40, 50, 55, 170, 170],
			qm: [45, 100, 40, 80, 120, 80, 55, 170, 170],
			en: [12, 60, 10, 16, 40, 50, 55, 170, 170]
		}
	}, this.aEi = function() {
		var aFW, a5, em, fD, hB = function() {
				var hB;
				return bN.st = document.createElement("canvas"), bN.st.width = bN.ee, bN.st.height = bN.ef, bN.sp = bN.st.getContext("2d", {
					alpha: !1
				}), hB = bN.sp.getImageData(0, 0, bN.ee, bN.ef), bN.su = hB.data, hB
			}(),
			z = aFN[bN.e8].z,
			hH = aFN[bN.e8].hH,
			qm = aFN[bN.e8].qm,
			en = aFN[bN.e8].en,
			ew = aj.aF1(),
			eT = z.length - 2,
			aFR = new Array(1 + eT),
			aFS = new Array(1 + eT),
			aFT = new Array(1 + eT),
			aFU = new Array(1 + eT);
		for (em = eT; 0 <= em; em--) aFR[em] = z[em + 1] - z[em], aFS[em] = hH[em + 1] - hH[em], aFT[em] = qm[em + 1] - qm[em], aFU[em] = en[em + 1] - en[em];
		for (a5 = bN.ee * bN.ef - 1; 0 <= a5; a5--)
			for (em = eT; 0 <= em; em--)
				if (ew[a5] >= z[em]) {
					fD = ew[a5] - z[em], bN.su[4 * a5] = hH[em] + aBg(aFS[em] * fD, aFR[em]), bN.su[4 * a5 + 1] = qm[em] + aBg(aFT[em] * fD, aFR[em]), bN.su[4 * a5 + 2] = en[em] + aBg(aFU[em] * fD, aFR[em]), bN.su[4 * a5 + 3] = 255;
					break
				} bN.sp.putImageData(hB, 0, 0), bN.aEn(bN.e8) && aV.qq() && bN.aEn(bN.e8) && (hB = aV.a9s("arena"), aFW = aV.a9s("territorial.io"), aFX(hB, 5, .5, .5, .1), aFX(aFW, 2, .5, .45, .1)), bN.sr = !0, ba.dW = !0
	}, this.a13 = function() {
		for (var g3, ea, ec, aFY, aFZ, fF, a3a = 0, z = bN.ee, j6 = bN.ef, fD = z * j6 * 4, aFa = a8F, aFb = bN.su, a5 = z - 1; 0 <= a5; a5--) aFa[(g3 = a5 << 2) + 2] = aFa[fD - g3 - 2] = 3;
		for (fD = 4 * z, a5 = j6 - 1; 0 <= a5; a5--) aFa[(g3 = a5 * fD) + 2] = aFa[g3 + fD - 2] = 3;
		for (aFY = z - 1, aFZ = j6 - 1, ec = 1; ec < aFZ; ec++)
			for (fD = ec * z, ea = 1; ea < aFY; ea++) fF = 1 - (aFb[(g3 = fD + ea << 2) + 2] > aFb[g3 + 1] && aFb[g3 + 2] > aFb[g3]), aFa[g3 + 2] = 2 - fF, a3a += fF;
		this.a3Z = (z - 2) * (j6 - 2), this.a3c = 0, bN.e7(bN.e8) && (bN.a3c.aFc(), bN.a3c.aFd()), this.a3a = a7.jM = a3a - this.a3c, this.a3b = this.a3Z - this.a3a - this.a3c
	}
}

function aEg() {
	var ow;
	10 === bN.e8 ? ow =
		"DYDz2ESNu-0UYCCrS9c3pBUrKHc94BhIBhIJpIIBnMIAAIrKSSpKABmgf9e7X7ecX-5P0baOy191XXX7eegf9mcfUrrxrKppppKpKSrzUMMMSKKKrJcXcXcmgcXnKIKBmnCIJonCKrrSrrSSxSS9XcJnBe9XemmWXeX99chMIAEprrSrrtbrxIrMKBn9eBcecX9X7f99X90e577VX1VcOWX16XX7X999cX7eWyXXccVVX6rUSrrwUrlzpbbrrU6xzztzxzrztzbaOtaOa5-0WV-77e-9119HcXXZecccceXXX7ce9Xcce9e9meeVof919ee9Wzy5XeXYS9KBcXee_He6ce1ee0zxzta5UaX99c1mXcXhEJp9cNHWcTN9BcnAzJoorIBe0c--nIJoonSIBe-OX-NNOXWbcBgzIHX9xHzS9mcCSI9-nBrrorK9VcP-jHe9_BhxzKHcWC9mZp9-3n9fBnS970a6zs7egrIAAIRUKocXX9gx9npKaUxBppABe5OdHpBe-AC9-17TOWABpKI9-7JmnC6zGtxIBmen9egp6aUlyOzbrbbqUzxHXgjKKBc-ZehlxoeeoxObonox9XonAUbzS9efBdCAArHmjISBhEJnAofBUIJgrpocXxIBUoxHVmnBmmXAExoUxABmdAIBgnBonIAC6oxHVgfMHcXcUXAAGxIBgfxJch9c3enCMzSBe9eXomxHeBgmeCSBgpKMp9hzHfIEzHnArSxHX7pSrUHcnCMrUpSa5UIonABrSBccnBopJttzbxpBonHXpIEKMrMSrxpKxzUzltyUtaTOaOaObaT5UzNTOV0c116rMMKSKrxIKpJpKMSKMGxISCrKMSpKMKrSpSpI9xp9_pMMMMSBoxSryTUUxa5P7-0ttbWzzzxzaN5-NOWVN--0Wa5-0X-0VNVN7TOzaOWzL0bbX0y7NN5Ua17V111749c79e1c-V-----Ow7--N57-OzaN0ba156byNNT6q5OzWaT55-OsOX1777Oa55-5T5UX16tzUOyUtzrpzUrSKKSSAoemnKCIAIICI9KHn9CKBhCSHgenSAJnIJxSMMKKSSpKoopKKHpSoorSzxpWxMS-UKISaOxMOxttyOzy5OzbbtyTOzbtaUxyUyTT6porUrSztzzMSp9eceoogeZp9ZxJx9geeeXe9eZgeC9gegemp9gmpKMSonSxKrrbaUMIKJpMKKKpIACBmeccV71XX7V1mmmmhCCCKJompKKJpMKSKSKpKMJpKBeeceenKpzHnBnBmceee-X1117ememfBn9mfCBmgemf9mfBmf9xromcec7Us8He0u99cWtbc-PeCCS9VecZnBnBemfBn9X9c6aOXA997Y99755VXc6tXXmV5Os-ObVN0yN0bzaT-7ec7N70Wa-OV-5eggnHon9f9efCBpMzop97epCKIpSIBpKrrSKKIKKMKMJehzKKErJeABnIAJc717f9eBnAJzrHe7V9d9ef9gmopKUKC9gmcV6tX73eCIJoonIBnBnBgnCHgjJeZfA9megeegfKCICCJnIA9meZf9mfIEMof9XceXe97X-59XdCIKKpKKCJoeVcf97mZmVVV199YJmX7gceY9gpEOxMMJecrSSGzOxSrxprSxzJzUopSrIxKBpUMIpMprSropEMHnBrpprK91AJpJpIICpBopICCJonKBn9mcme9VcX9ee7X7e9ece9Xe19XcX91Xee9Xcce9VVVccefAAABe7emhBnSSKMSIJhCIJpKJppCKKIIIICJgpIBpAIHpBcoooonIKLObpBnKlzrKIKCJpCJpBnBpUzrrxpxSbbwUxzUprpppppJppMMIrrSSRUbWsOwUzUltbzrxzUzSzUbrrTTUUrSbbV6WbaTOzxzyN5TN-T5TOxbtts71-X-70V0sOWsObbaT0sTObw70tbbzbxbzzyOtyUtbyUaOV1-N0cVN-50aOtza6tzlxzUxSrzUzSSxUSzzOzzs5OyOtyOyUztyObaNOtaUrUxrrUSrrUrMSJrSIMSpKISzKUSpSrSSrzSMMxMSrMSpSrUzSSzzrTUMSpprSzMSzUxSSIEUSrzrUSpMKKxpKrKMKBmmrIKBgpKrzs6VOsUa--5ObzyN77-7X7e970V-5Oa5ObzxSxrzzSrKMUw-OV17X7X1X99X97X9X99cXXXXX977OaOVXeeeeecX7cX7X7X177-7-X-71-7XX97X97cX7VVV1--VObs970cVObtzbtyObrzxSomdKKSSMKqTN5NN0xrMIM5UrKKKpEKrSMSMprSrxMMUzrzrzSrSrSrHXenOtxrrxrxzSrrSrUrrSrSxMSxxKJpKKKJnKKrKIUUSrSrKKzKxKrSrSwUxIBnrxpSSpUzyOzzzzyUSxzRUpCBee7ecXce89omegpIBrpxzSrMJnKrMSFT0tbrMKxKL0VObxprSSlXV-11-c-X-WxzxFUaPcX777OzztzrSrMV-V75X96zzMKrUa9e-7V17gc9XeV90Bf957cVOzrMOX17X7X-X7X7V-N-6aUxCKzUUKprcX-UzSrN17WzrxrNX7ecV17WzzbaOtbxraObrOxrbxwUxpUzrzraOy5OVOWtzyOzzxbzVNXccXcXcX1-V197V-ec5Oy5N1--555UyN-N1---VOWX0Wtcc0aUMMyOs----Zc5-TOtsOWX7c0xzLN-NWbyOyUyUzrbxJe9gfTUxAMxrxzlbzbzbq5UKrJnAABnAAICETUtxSrzrpIpKIUSxraOaOVNTObzWa5NOtxxyOyOc-5A9YBmnBfHceX7-XXcX9e9Y9e5OzUbxSyVUX5OcUa1-UMqNNUbyOtsUWtWbWaObtzbyUWy6bzpJmoh9nIUI99oghSUzrrrSHeHohKCJgrKJemgcrS9nry6xSrUMStxzUSzqUrbrUxUSxxrrprUU6zSrbrtzUSUSzxMKxSMprMKIIIoonIBmohAIAHgf9eHeemfI9nA9mf9c9n9ZeXc9d9n9ccX7VZmoceeHVX1Zn9meZegegegfBhABehABonAHnABhCIBemee9eBfBeecgeohCUxzUbzxI9egegfAUUrHmegemecWcfCUp9meX9Beeef9onrSpAAKKKIyOzyUzJnBjSrxSSIBhMSHgcVYKxBmnzrROzpzxzSKKCKUzKBnoUzzbzpJmegfzyUzFObyUzrrzpKUSlzry6sUyUVN-7NOzbzzlzrzUrUSrrURUxzbzsTUsUWts5NOWa5ObzrUxrtyOWWaOzMSJnIAIprMJorKMIrSKMKKpUKCBonKMJnCJpCIKIKMJmpKIMKJpCJpBxBonHomoemmegnHf9f9cX7ce99emecgn9h9eA9nCHgfBnAIBfHh9eXXce9emec7f9ec1me89eeceme89fHeemX77-ceeeemeX9X9eeecV-V9e9Xe7e9eefBnBeefBfHmnBnBnKBpIEpKxMSKJnBpBnBnBmgmeeX9cXXVcX7Xce1eXcXe7ee9eXeeeX9X7V7V77V--XcXee7ec7X9eXXceX9f9eeee997X9Ve7Zee7WaX5X2Be-cee17X--0tsUbtaT0ta5-Oc--7Xe-X7--OVUtbVT--QA9nBmcXV--97X9ememggnBecJceeXme-cXdABeXeX97cnHgeeI9IA9XcVX7eX99e9e9mgeXeXemmceZmXe9ceXemXmggf9mmnAI9X1eIHcXfBghBmf9BemcX9Y9Ve9--JmZeccXA9Xd9cX9VXVVc7-V-Xee_BnJhIIBnJnBmohBgohBcmmf9eHf99Hf9HmommmmV5N-MvxppxrIICWzsOxX--OV5s0i1mopMKppzTOaN-0XXceV--0lJ7-90mzBlV2N7tRof9JqUsOaW7c8bwrrJchpK9-X7PBfHjKogcP0Jd92SMUwUlxMSErHegnrlxI9X7cY99e7hSzxpxSIIUHozogmgecYIExxxrrrKpKrSrMMrrlxtyUtxblxUyTUbyUUSaUy6Wzttbbc5N5N7V7XWaT7V6aZeVWsV9nIA9X2BmcWc7ooc--f9IBomV-0cnICBeXgn90Wc5TOa7-1-5cX---d11---esD---m8D-1VvAYqV-92glC5--NEEiqV-7Hsjk014I4wognBxwOs0Wc-D4y4gcT--0Y8X-0WalAk--0pHX-1Wsy6EV-a7EDhCBtaT9--X3IIV--_VJV0Ndepmzq1-0XeJbD-5XhvrCqTe-07iCnpteV-7iejk-iAtCxEIrrX71-2smknnEUUpze-e-c-1BtMB--2Kbq--YMmzV-sqPmrF7--Culc-HCwyxxcV-DEWXhte-DZ7mzorSr56eX170LG-rUSrSItzOueVc93c-5ZH-rrRP9-2d613nHdRUR6kP7-CZVZUEKUyUe91e-2ZYhnTPV-t8OMny7-1HZrT-DZf16A9mjFUzlsV--Hh_N-1HlyB-CZhCrSpzrkX7cX-2ZibAr-VMdC8brSrzUxSSIBxpHX17c8CrJe7rrUIpSrUxxzSrMIMOs5OVV7X7X7977V-7P19Xcce--8DNHk-LIcPSpN7-0ODtgnMN1-7Zz5USxyX9c--J2As-9J2CSu-08FHSrR7V-0G5xV-OH5vqV-0LEoV0OLiAnMN70D_f4UKIBnSBgzSrSxSSMSxpSpppzc-5TTUMbV716s117X1Xcce-cXXHcX--0Rs7V3dS04nKonpSSkV7----TMGPxrS-V7--MN-c0HMYnBnrIAIrK-OWV75V-tTEHotV-qMoqSMUUbe9HXV-mNcawnr6xtcVe-3aNiUIq1-6aOwMISlc1-6aSe6rROec-8ac9fISzuX-V1tf-1mnBrlWaN-NajMY9ggeoopCTTTTN6aN1HdgkXoohABnK9n9KJmpogeV-0XJenppSrUzJgghomhp9VnxIAAzOxWbbrIBnJmenBegozlWyObxIKBonIGaOVT50xSk6xJpEpIHnBonBoptxpr56xrzzbonCBnCMMSonzxJmopCIJomX7mceHcV7nJxSABhrbxEKCIJhAA9HgenABrUMbqUpSUrprSrbzzp9hABeXce9YAHcoomnBmmnBmmnpzaTTUrzzMpzWWblbyUUSrUrxbbzzblxrUUbrzSrtztzw6btV19ceWXWzq0aU6aTOta0a0V5777Xce7nA97VOa0X-17VUVV0V17-17X7V7-V----1-V-VcX9A9cWbbzyV-U5T5TOa5NNOaOV1Xe9ce99mZee5OtcWbaTTTTTOWe9ZeXcmcXVV38gtRnCMzSw1X6VcV08hu4rq9--tiGRrac-1Qfbg-dax4zrrIKoeBxErUlzSGbs0VP3eXX97XV-9R0KCsV1OlXjprrP7X7-HRQsCpVc2TRgLxJrKBeKKJe7BhIKKBlwOaUrNTUsNNNcNP91V---PS6VgopVN-LbHRrK999ezrxxoy5Tc7-0bJGjF--6Spy-5bU7rSbuXV4tsIYpKSSrSp50aX-177e-2baNMC5-2Otd7nHrpOba7cV2tv2dnICxz-Uk7cc0mUIkRnBpCBpCIJOWa0VNOtc-19UQnBeegmnIISxJns56zaOWtu7TV--URWN--VDLc-eVE7zSrUX7Xc-5WM4BN1DWTIggpBnEKKKESCWV5T5Wa-N0a9VsP6YRn9cmY9JggoggzUKHfA9XmcP9XZfIJhronABfISpxrUrrI9ABnBggrxxoe9fHmeBdCDUUrHf9orUogrzzJfUU6zUzbbbzrty6brbrxxz57OtsN5OsN5V5VT5V57N56yTUtsNN1cNNVV5VNeeeZeWtu77-XX-KgxCqWVV-P8w5qV-uAjtz5c15XwhBooopBonIKKJNN5-N5-6WVN-8ckmzArUOVeV-uDoWxNV--YoA7-TYoYRoxa57-1_P1T--8NKD-9dNS2ACAUta---dQzr-DPM79mmgcpI9chMKCppxxxrSzIbXc0aT1WVOxk7-N-9c0eauZgfAKrSrrSla-5-7n9-V1eVE3nKUwNVcV0eWZinCF5N0TcbkCMSrzr5OVPXCA9VXV-1b0uV0ezUBxUsXc--mhTc--n9_c1DnTIxCCSMKC9eCKClsT5OsN-V7NNV6QJcYxzUSxzSwUa7X9I99Xd9X-BhW8EE6rUw7ceV6fXkApBmf9f9hKGaOWzzzObV1V-PuipRpJ5--6iiarprP77--DrhL-0iv-fN-7jNKjExzXcc-Y1kshKK-5-V-wF2umWs-03EWs-03_Ms-23gdy-qlmyACJmcgfBnCIIrKpICUSIprUa0VOV5N5---V5---wRnFru7-E6kMClX-4lwIAzq9c-A7r-z5V7gdk8monBgfCCCElzbzxsN995-T5-KgiSunBnABmeeIHprrKJxpIISKICJpKprUzOcOzzUTN---0V--50aN1-1-PV7XX-SnCeY9f9mnUSSKzMtaOWa9VX--bBy1gzSxX-e-4nFNEAqTc-6C7Wgs-EC_DBjN-0nVb2N-3n_EYByN--nfWnV1Bx8ZorUaV9-CnqgbKISrNN9-9-8o5aACrSVWXV-C0gPk-jFRwSM6rsW9VV3h23TmfBjOxMUtaX17-6GYfE-0UHSjwfEzbxpUUq17ZcXeV-h8rqr--3odX6MF--8ogzvMJrN--V1xAI4npKwT7cV0Xp-Yf9nBeehKMKrzzSxrSxrUSzzSxrSMzSzzV-T-7V10Wa6VOWVT1mmeeegn9eeeXmcX97V-IJGnCr1--2JVvD-Bp7gzSxw6aeZcV0hHX5merts-EJjUhq7-2pGMvBtV-hJmVz1-1pJofqV-0KQ3c-0KztN-0L5k7-6LYvE--ILYxhTNc-0LZ57-ALu1CaV-4SIqV-hSQ3na--KpjX--ppknVESTPknBgmgn9f9f9onBmenSpMGzxbtbzbaOV6zbX9-NObWV-4TmmV3SToLnBnJnST5Oa-1-0px0YD-0pylvD--L3Ge--q54IV2CWmWnUUz5Pcec-nO-URhBoUy6VX-1qFuQGc-MOcagpR---CcERs-0PQUc3MPs8gehClzSzbzzUzxMr6tyUzzbzaTP0HgmcVXegeeeXeh9eX7e-JqqUEKIMpzz5T7cXX97-bRBpSKoT5X7--M4g1-grMIbBecemgfMxUpzMzObtu7V0zrrq7e9eV-MTaFhOy9VfLnt2-9-17117VcX1-1X97cVXX9177V-VXV9-WaOSMSSSSrrUSKMKxrrrUSxrrUzsOV7--N-tVN--N0bKIKKQCKRnKQCUtrTUtUSxpMprrUUKxSpxrpprMrxF-EcVGxTX" :
		11 === bN.e8 ? ow =
		"QREc7lR7oVUYGy_KJOJKKKKuK4OKT_K4KG_u_GJJO_3K_KKKL_4KL__KK_4_LKK_MjzuOOK_KKKOKLKKLLUjzji_KKMgyzdMjzgzzzEszzyzzjvuQvieeid_POOvzkzvzy_TvuOK4GKKvyyzzydJQi_OdKKaLOLajdOPuueaYBzydJdPOybvdbjeuvizwzujuQnunl2wBnBE2-EYBz2nk2kFzwBzznBydnwznEYwnnEBnnwkyvwzEgznzzEwwwwznnxK4KGOJ2zl2nzifvwyw-J0GGJ042nvzEvzwznJEnzlG42zg02KKGFzzEzzeT-woKK3EvoKLOJBnBnzE2EznnwnwznznzpJKKKKOOKG_G_LKFwl2zK8K4JK4KKKKKKKKKKKKF_g38EBemXeeeeeemeemgeXeegf9XgeeexCxzzzoenErMroeXeeegfEzSS9eVcghoeemf9YBe9ee9eXghrzzzKBfIUzrbzUzzzbryOxrzzbbsTXe9geY9egeeBeY91cUy6z6xtxbxzbzlzObrx6ztztue5UyT6zzbzbae7UxyOzzbzzbbtzyUyUtzztbyUzzbuecZeBeXeeecgeV--1ViZ-00JJIV379xwOLKKgzyzK2zF5g4ccBgcn9ggepUxAprzztxtyOzbzzbe90f9cXX99V-cAQAOx-PFLqqmemxp9zzttzIAzrrzzxzzze7X9ZeceX5ece---AorF0B4uUghzzae9-6VjJh_UznK---NUXV1NBEpOLYnzlJ--0X1X--Vl4pk-B5KYEc-D29vazJ-HkP9DmexzxxzzzrbztbseeeHeYHceXV-NC5uUF-R5YYCyX-2Vpc0jCF--5lM7-12TuM-hkQrZrS9X7f9e9enrSxrzaUxx9f9zzHhzUxqOaOsObbzSxoqUxyUY999c9Xcecce7eV5NDrSOLauUwzzzzEGK4K_0F2Z6YfEUoefUtzUzMyNNe9ceec0a2zdLQdyjwynxKKFznpGGJ--1-_X-AW0ZpjvnzCKKJ--1309--02HO---WrDV1sGfOOjzzn4KK-0FYN1qP-2W7RtfkF6J8G-geeemf9gemegfEbqUrxEbyTgecOwUbbxEbyTTUac-H3crrjCLEE1KoQBrofHegeecBefBeeegfAACxUHemeeeeegxrSrzxxoeeXXe9ecdAzUomXexzrzroeXeecc711_rI9nUSxxKMSryUzrzUpxKx9cV7cceghrrJnJmhBe9ee9VUrxy0a5-7e7VVX-7XccOVX99eefKKAAMxMIUxzMrxK9XXXXeXceXceee9mxxp9oeV9mf9eHgmeeWsXnHcmfA9oenJf9XcXcOby999exKKzMIJcceYBggghxrI9e9e99pxzpHeccceX110cXe7cXWzrUzUxzzrzrtzbaOcVcceXccce9Xceegcce6emeZe96buXeXoe7TZhBe2Bmc6eIBdC9eC9fHcHcAC9erxHed90C9MTUzoh9ZjJeofIAzHghHzI9nHYACCA9VxIHcfx9gmmnEJrKErJzSC9xrrrtyTOaUa0xSxKroxMSSrIMKqUlc6bztWx51--P7OyOy0tcX997V-NP6WsUaUbaOaX6VTOzzzxxpHnBnBggofCKSpJxUUo6pzzbtzyUzbxSzogfABeceef9mpSzoppI9e7X9nCCKMMK9fEI9ee19mfBgemh9W91WuI9gf9e5eX17N5NUXc0a1nBenUHfSorpMKMrHXh9XgmY9nMJmV1nIISC93fA9gnKBemp9e9XxKoeeeA9fSMzrxrpMSxMMHorIKII9eecgeceeee9gmghrKKCpKCIJonMozKJp6xyUzSppr5OttzzzzWWtyN5ObcV-5OaOWttyTTN5VWWbbzzrrxaOtbyNTUUrrSMMSpxrrSrUxxUUpSzSMKonIOaN6aVcVNOzUrL17ccXccVPeccX7717cXX-5V0zbzJxOboUKrKrrUxxrrSxxrSorIKSrMpUUISxxAESpGxrsVWzP7XXWzrrxVNXoccWcOcX-6xrV6tx0zxzUtbtzq99777WWVUV-50xaV0tsNUbzpUUzp9nUrpIyOzaUy9ge197e6zlbbbzbbyUzommhxonCHeIxxrxrxrUSxrUrrMKoogmmecmeeZcceX7eXHeeemmmn9eedCzHfoeeeZe_IMzIpoxHXKzUJxxUoUUprza0zxxxrUtyOaUUlbxIMKKKoopCIJpJoommeeeX9A9mmn9cce9Xe9ee19eXe17eA9mgnCKpJnBee7XXXcee7X-99XXeee9993cXV0ba5-XV0aOA919HgmeeBeY9mmX9ememef9ggn9ghA9mXcmeecX7gpCCCBnAAAABnCIICIKpJonCABnBgf9hBpBnBnCCCJonBnJnJonCIKprSKIMKKpJpCIKIIIHrSMpJjJxMpz6zHxCrrMMUSprKSIrMrMUUMrSxrSrSrrUUyTUbbtz6zbr6xxxtbtyOtyU56tzyUTUxzrSpxKMU6lWxzqNUSxpUxEMKJxCJnMKEUHhICEMrHxSUMSrMSrSppppMKMSSMKpKBxMKpppKKCBnCBopIKIKCEKCKKMMSpppSSSMMMMSSKKKKpSKKSKSMMMSrSSSMKpSSSppKICppMrUSyTUztbzzbrxaUq6zttbaObaOa5TOa5NOWWa5TT5-N50V7WWbaUbbtaOX-N-7-1-170cTT5ObaOa5OtttttbaOa5N5-1510c5V--0VVcX-1-V51-N7X-WWV55N55550ta6aNNOa5Oa5OaOaOtbaOaOaOaNOa55NNOV50a5-T50WWV-N--7nBf9mcmgcmmmeBgmee7X17eWba11X7VX7X79X97Jc7V7-V7117X7cV7---V1-X7X97--7X111111711-VX77V7-UMMMSMSrN0V5-UKKCMxpprSSSrMSSKprxrSSSMKKSKrMrrSrMKpprSrKrSSCKKppKpoxMUOzaTOzyUaTUttWtzbbyOts-OyUbbztVObyNNOyTV-0WxWWaNNN7X7VXceXXX17-7WWIBnIBonBd9eAA9Vc7NNV1CIK9117-797X7VX1111WbWy0xUzprSSSpprUxrSxxrzTUbqP6zrSKprxzxzzTUUUztzztxzzbtzSSUSMSzprSrrtzJmmfrSrSUSzaTN756xKxCSSIKMMKKpSKpMKprKprMKpSKpprMMMMMKrJxSSrSaNNOtVN6s---0WV17N-V-0aUWbyN0baOaOaNNOWbyOsN70btaUL0xLT6o-UM6lX6brSppSSSUUSrppEF6pSSSMKKCKVUMUL0tba-USSUKSKSSMKrMKpKSKKCKpIKIM6rSSpxMSppKSMKSSSpSrSxrUSlwT777VV---777X7XX19XXX--7V1Hc1--N0VN570c6bzKMUzrSxprK6xMxxrpCKS5NTT6cN0zltaTOa--57-11-V7X7VcX7c7X77977VN-Oa0aTObaUUoOxpKpqP70btyOwUsOw776rS6twUkUOtWaObX6ta0bVcOcWy5N-5T96XWaWccZeWWtaX97cecWzUxxq1X7cVX77VX999750a6VOttw1XecXnIBe9-VZceX7V0zTT-OtWWbrzSpCCUJltWbbbzxzUpoxopxTUUxprS9zMMSKKxGtaUtzV177177cX7X7X997-OtWaNX150a6V6rxUxtbaOV-NN0WV-75-0V77777X711-1X195XccccXZe_on9c29c799ecVOWaN-55NP-T-TUzzzzlzzzsUzxzzrxAqUyUzuA9770V-5UzbzOzSSUrOVOac7WzzxCrSUMJgpIJrKIHgrSJxSrMSrSrSrrSrSrSrrSrSrU55-X77TOe775OxsXX7X15WzMcXccX-Xee77-VX-UzkOzSq7UbzzxzSX5OVNUbaTP6xzrzccccce1XXeccWzzsP7ce-U6rSzSzbzUxxxzxzUwUqXcPVTT99XXce9eeXzS9cXXX9XceXe9e9ce9cece9e9ececeeeeeceexxxxrHee7ece7Ue9omeeXeeeeeeeccX999e9eeXgef9eeXXXeceec5eXefC9eWcPn9WeXeeef9hzSxHcfx9cBe9emee9X_Sp9e9Xe999XWyce7X9ceeeeXerp9eeeceecVeeeeen97d9ec_BemgeemVTOyTNUbttXVe9cce9eeef9e1ee95eeec--3mJ3-01RcfV-NIoOUF8R8uLgf9hIHeec1Xe9fBeh9mfEzzyUrHenxyUyUtzyUxzzbyTTNf9e0a0cWEvKdK_KKKLKOK_aJaPPOOUeKdUddLTyEukyvizjzzzGK43G3322EBkwBzkwwzwzwzwznwoKKJ0K1X2ABrpzzozzzaUWtacme9hxBcXBoeV9--7KZ5R0K1i5QpxUxzUyUzbxztyX9e9oe7eAHXe9eV--KycF0gAC-Bf9rUzta7c-54dtbV-61qbAAy---LztF1oAWqEUzrzxzbeXeecf9V-94pL6xF--Agu7--4xl31226aIBogfABfBf9nxxMyUztttttzbbzbyUtzbsX9f9e99eeec--5HLZ-A28MQry9f055LVqKKPKOaOddaKaKOOd_bizvy_MeOOOK_LPPK42BnJFzszEo0G4aLKOUjuOLO__GKKKKJHKG32K_KOKbnzzdKOLOeOO_-EoJG5KK_KKKGK2wzElGLK4K44JGJKLLLKFnLLOJF23dLLLK43_OK_KOOKFqKOKeK4KG43KKGGGOKKGKKJKKKKG0OKF_FOK_OKKKPLJK_KLK____LKOKKOLLMjidbzzdPPKOKJOG2pOKOKLLKOUu_PUzzzzYwzwydKdaOOKKOOKKLKaOK_OO__aEeOLTdzzEBydaaKdbEnzjfBnuzdPLLO_OLLOK_OLLLUzEnnEnzEnwwnz42zuRzEwwwwznK2nnwzEnEEEnnwzEzvdKKOLO_OOdOUEnwznnzYwnkEEzyEiuUvjzzzvjnyaTyuiz02yyawBkyeQeeOueddaUibuPJi__9gwnyaOOPTvuPJTbeLzEiYuEiaQEeRydiddddaJ-x4K4deadddaa_daaOdaOaOddePaPOaauddeufEeaLiuOfevduazjuzfvieeeuPueefiviiebe_3KvfjfEfiveePivjfiuiE-FGJ--3--4-FFF-FF33F-B-22vjyjeauefeiiuzefujidavuyuivfiuuvfeeuePaPiuvvjiiyyzyivvvvvyziyvzjzEnnEvyviviuvivjjzvjyyzwEii_viuviuo-2vjffdKHPdivgEijjieEigzjvfYyfno3-z2BzvvjeOiivffdideeeieOdeLKbeLuOOOOedaeOeidjgnueaaLOaafeveLyyvivffiiuuiiiiiiiivevfiiieiiviviyyvvvvvvvjiuvvjefeueieieeeddveTefeaieeeeQePevedeffeuieeuaeeeaeee_fiffiieeQeffideufj3323FwEjdyuMeuaveTuQeuLEeudG33_eLVzizvdjfzi_JibeJF44fzeeu2vc3BEfdvdjfy_vvfyEvd_TyfyeTgyY2yzFF-wz2zJGF3F-kz-F22Bn-0GKG43F-2BwzFk3-BoFC4300-EyzjzBo3-l0-zzzwzwzEBk2B-440-04443-EivzjjvzzwwkkBn2-B322BB-zyadY2-B2-nBkk-oF0-o-o2wBnnBnnEsnE2Ezsnvzk2nn32-nB-kk--BBl-2-23-3-BF-B-ysn2-kBBnEBBkn22-B--00-00GKK43GG03JG43KKOGJ_444OOFddF23BJHJGGGJJKOddG-kBKHJ44G-nB-K3-F3-F403JG3GJK45KGdGK8J3G44-3G04J3_LK2B23JK8G3FExKOLK__KGG4KOKG-3K4OHLK_affedaK-G-n2-F-wn3_aO___KaPJ4aOeadaOaLdG3G3GGK5O_OOOGGJFG3FFFF-k-22--n--GJ2K4KK_KKG_KF2n2-2-C-nu22-2-nBn-KKKOK_OPaeOdd_eOK0O_KOLJG44J33-FFF3-F-2-B-B-k2E202--n-wnE2yEEEB2ynkygEfynEvijz2y2GJ2zgzEgwygwyzvyigwwziiiveaaidfuuevfiE22-k-0---F----knBnBnnnnBnBwzBnnEwx-EsnGJEnkCJBBBFkB22nyaLdfeaBknB-EsnBnB-zznzKK2nzznEzx03BknBnBwznByEwzBnzBynnzjzdLJ_OL_aOigwnnBnyEnzEEnlGOJK4FpF-FnBOJGFzywnwkoJKOK_OK____aOJBEBwnEEEwwknwzzzzzzzzzzzEBwnnwzEswwwk-nC3LK2BLKK2wznJK4JK23J4-FzYsCG2lFoJEC332JCaOT_aLPJ8_OOJ34JBFnFwBEK4JF3G48K_4_44HLLPdaPaeOOaLLQiuudeOdaLOOOOOLKOeePPduOaOdGOdGJB3G2FFnBB-nB4K4_GG44GJC3GJK4KOKFwB-kG_F2BknBnnBwnEBzBwwnzwzC3EzwnEjzEEEEE4KK0-zjizwwwwFzzvih-yC02yijEnnnwkF2Ez2CJGGKKdeOKaO_Gbd___Fo-nEB48O_aOG2k2pK3EBzF2042wwwnzznnEEnlK_4F--Bnu7-D5P0Mj4-NFneHn99fHdEpA9e1mrUrMMy6rbyObacVUbsXc-95VQqU-0RC72gfrLTUX9WL7PGHOKOLKaLLO_aOzjzdKK8fyy2yvzzzzjnvEyszn-yvuyji_KjEzfvvdedLOOK_au_K_8KK4O_Oavznwzj2vYyiizdQjjyvjvzjnFJ43FEvyyvysEV2vkG-oJJ-J2vC2nzfvdvcyvB2EgwkznoHKJEKF44K444Fwkzjx4JEwoLK2EGKJ34KOGFCFK2C3GKKKLujnzuK_aK4K2Bl0KK_K__OOd_id_032E-wwwznKK-5koy5rxzzye9XeV0NQGfQzp409Fr2emf9gemeoemhxzoeenrzzzzzzxoeeeeHeeemnrUzzJr6zzzzbyUztttzIzrzrtzaP5Uxy1XXc7TOVNOcXemnCBoeVOX9IHeX9ec9V-7QyMR-O2VLYCrzOcTXeV-7R7oR-42W7vEc-16Tkb---xZJV2sUexOjjEzzlK4KJ--2yzH--10C8--0-gFV-7VNER-038rYV-7WePR--3FiX-8X7VOizvlGJF--GAnc-q7b4qavzwz43KJ--3In9--193W--G5YBk--7uzo-03SVI---Z6nF-JH3JgtV1NZFfOiznCGJ-03ZUnV-NZy-Ok--HUC7-18Epr--G9ncs--8SB3-23innD--1O-0-6lCPTmmnCzzbWa9c--8glJ--3qO1-3XRYCbzK-XlIJjmegemef9efDUzwUzx9fHfBfxyTTTUpsTUxzWttf9eeWtzu7-19Vk6-2lJH2nUze9VKcf22OuK5ObzzuOLKUzviaKzzzfzvwwzEwwwzYBzB0GF5JGaKOJOG__3a_OJBG4-PlNXPmfBnBnBofADUzJzbbbbbzpxzbXe0ccX9Bc6s--1mmx-6lYOwmextzUrP7cc-5BSZbV-45HC2T7-9BdhMxF6JOkqwemmmmf9e19nJemmmenzryUyTTUyUbbbbzbtzue7-qBstqKOOYvEEBo-45TmAqV-1Bzxq-CGcDCxzS9dEMrxowOX7V19X-6YINKaOgnk--leh3lV-cqZnQo-AGhLznASpxpObxa-cXcXV--sj9F--RjYc-9DO8aRk-JRodC5V1Ntt6OKvznCJ--6Flm--Yf48k-BTXJhc-LEJ7aTYC-0BTkwjJhyP7P1LYtQd_KPPLbePLnuafp-yEeddzzEuOiydeKOGdzeaK_jzjjuKKaOaOUEnynBzvnzVyzzEE4FnBwBGGOJBF334G0-3JKJEknBBlKKK-wnCF-RUIqgju-4Yv7daLnB--6voH-EYxyt_ueaYBBE24F-wUjugoqOWc09F4K5OGOOYyzBzElK-1m02NnLNP--32h4-0m0qgnqV-1FPCq--H2Gus--FRXJ--7Gue--38td-6H3zimfGzxLPWaX--3E7C--16gBV2O3CZOuLecn-n3--RX7jgyP--3G5C--18RXV3t3nbP_3_iju_Hz2-B-03XWAgfxyTcV-047KF--Xjy7--GPHJ0W7iC6CSKKIICJnCBemzqUbV6sUa5PX6w1711-V0d4t8OOwwo--7o-P-3ZP3pin4--1CVBV-85mEN0d7rPv9hEIBeXrICxpCAIBtxrtbttztWV--UWc7ec--ZRVOk-3Y_fi--3SWl-1HE1urq7V-06YZF0JYnKBgltzy9c-1GuEq--1Ey3V-87P_R--8B0X--3aep-1HIL9xw7V-08jeF1RZt2BoxCKLV5NOaTeV-LHXk5OUn-3B_KjRnEJxK6xSIBnGsOV5-5-N7e0PZfppdQivevivviuviuvfffiviiiuuivV2vxJG3G400-F2zoG43G3G3G43G3043FJF-B_XHC--1HrHb--1Ml9V0OBPSTykK--mPGuw--0CdCF-3bQrg--_-bGk--c3w7-1J1Tb-nHWSNmnBmnCBnBognAxAACOzzzUbzOzIAAEbaOtbpICxtaNHW9WWttge-Ou9dHce0uXWaOaNTc0qJ_j5Tfuiyfuvyn-43-C4GJJF-ZdZ-CEN--qKF5MivvzoGGJJ--9fZm--4NVG0OHj5Imgmgn9mggggggzbxlyUttxUxrltzzxUp9mcegf9nBx9HzICBnICCIKMbaOWa0c55OWaUlaOaUxxrIJogmqTUpK6aNNOaN0xMUNT1-XXceee7cN575ec0cecV-0P9QF-3hh-D-7_jKnaJ2nyZ-YA_nYBnBnEUttXVOc8aMCmTLLKaaLKPddbjiuievivijivfivy_PPeaeffjyyvjjvzEnzso3-F-3G42l4J-2zvEBGG00LLuJF-3KFK003GFEyxG-nEzvp-B33G_JK--muI9w-5OSJStaOeji--wBzzzKGOK-0JieNwmeCzzaV-TMQgDzvlJJ-GAk2vrxkPe7--MV8o-6At0AC5--OURXy--gjqMEraeV2OUrqueTfVFl22F--jvyN-PNAgydcnF-Yn1WRrSpppMJeYrJnrUKq6ce7WzTUzUUUNVNUtsX7VJece9XXX97c--5440-2I2OHnJsOV-1NxR5-Bn6z2mgeegenBzbzzUbtsN--0_72F--nKlc11OxXDLKKO_OKLQvzwwwzEnnnnKF0RnydBghMMNN--dOfypPMdfibveueeaPaOO_3eafd_J8KOKKaaOaLuLaLvcyEieQevy2l---GFpJFzz-ynwwzzyeiyv-Bx3FEjjzVEvV2s2ufk2G0--3FF2020003JG33F-dC_NYAASKopSbtV--77--QufZ--CxYX-5b-NCbjY3F--sGR7-DRSQ6v4--2ZTFV-OmFuQF--tWp7--Rrk3-2DRQfF-ObG_p_LKK4LQjvvvvjk3BB--2cnkV-0opdF-BuUUE--1SP5b--2fOPV-0qQ8F-JvLKBlV-ttYkOgB--EKfm-GbimObjzjzzK4JOJJ-QEW629fAEU6aT5-Kbx48aOGeQiv-nzVk1K--4-Bei-2c4b_aEF-00fX7--VsoZ--FYHH--7bwK--3KeVV-19ymF-456Wg-0cmm4s--oPB-o--PCDOOk-46F9i--7vjd--oSsBlV-uEMIQY3-0GwSv--1EeMF-06tTc-5Z2ZLk-2HUyYu-0dG4tY--3dhcV-1KhfF-09wIc0ea0y5OddePfiivc-kk---0--hB85hIq---PPqqQ-ACDhYBegf9nBoyOyOtzzxAUzUxrxzxKrqUSHnEyUzzOzbcXXe5e9X97XXXccX9Xee--1UpAF-SFcxhOX-1eB0xgo--Jd31--9KJS-9pBVymefBnKMUUaOVNN72Xdb-LMveiuLKJKMinzzzvfY2BzjEzzY3GK3FK4KOGKF-0Ji17-ueZcLLyvwzYGGK-0KK8igpzza9cc4aecw5eQeefeK3iifeyVyyaPysnzivW-yvivjf3G32JdFG5OJG-3--EB2003-C_GGF-0M4Pc--fYVJ-0L1VIV-1kjSF-0NOQ7--gXeJ--LIdm--AAXh--Kaimk--h2YJ--LYMm--fHOlV-4QMoB-1fQzGbV-OM1DQUKrSV17XV-PsGvQ--0R8xc-Pi9hLee----4n7gV0uuK8Ovwo_F-0SPF7-Tihf5jioG3-rMLqIMSxJfMpp51-Uk7-X7mV-1vH3F-0SiM7--ivJJ-4MU-YL--5j0_5V--MW4m-Ffnz4uebcnu-E0K3--4umFV-1xQQF0KULdhJnCaOX--5ji96o-jMt7YCKBproNN55-KC9-7-Pjp4LPbw---4zuVV-2-p7F-4VdEB-3g5r8awo-6q3GTnIBnBlaOaOV--kXLJ-0NJ5IV7f1wFOePedueiffjEBwB-FFFFFG0F7pWV6CJfCAHcXBnHgpIN5Ox6lbxrJpMSxbpNN7V56rMF5-7-X577V--lo2Z-0O25AV-28oRFJ__7yBm_ICCAEJgcnBdJonCBgegnJpS9XXe7nIKCSSKpxppCpKUrbzKOzaUUoUzKLOttxGVV557-OWtbVWV0a6ryX7X70cX1-cUu-Uy90zaPcXe90XX--AA8ER--Oap9--gnQdkH4b2ThSprSrUSrMSSUSxpMKpUSprMKrMKSpprUMMSrrSrSR6rbr--N--0X71d9-VV7e7WaWu1Zc-cVe95BcZe7917X7cXV7VX9eeX9--Bw-4--LXIak-9oUkasF-KdZHh5--QKOSQF-0f7Ac-DpZnLQC--5ifVV-2M_TF2_g-RhCKoxKSR7-6xX7OVh9-77uqCsLOaOKKK4K45PKaadudaaeddaejyeedeTsz--o-k0-nzuafiueskznG3FB3FG3EBnknEs4_OOGa_K03F-BBzvnywzvvzEBBkk-EQ93ASrF17--hcV8V-0ho3c-1r18a-KLsKtn9ghIKopJxGbzlz5PcOWWV6bZeVXV-erChLbuawo3F-0QgRIV0AS_oTz4F-0iqsc-LrVEayh0F-0jBw7-1raaM0sqwtimmmocCrUzKrUzbxJeYBexrSIoT50xMUUSrzrrxxxrppMMIrI9gnJzzaUOzSrSUUzxtbX7OsU-UOzrUxxSSSpxSrzxzrr57cWue-BcVX-X7X10bqN7e7ce7-7cX7eX7ecccXce9e9997eBhHmhBnBme7791-5119cXV-ATZeR--Qs0X--CxF4-2M-EHrMNVV-1s18b-0M09Rrc-3i33Gcy3-7r1pBmhExpSrcP9-7-3i6ThbzJ-0r2kLmxV-LsT9bywKF-Cl8ajc-5sg76o--RNyP--DBcS--r75Dw--AZP8N-CRYLYIrWcV-AZ_gR-hRb0Q9efBUUzzxrq7Ve9--DIcG--69X3V-2_KXF0CmrNBxUTN7e--DM2x--MBNss1qtbGTeeeiebfeviufifjG-FF-FK-2F-F0-F--6CEoV-2b0EF-pnx7hKlVX--DWBO-IrGX5pJgomd9Beefrr6rUttyNUsWaN9c-iuOLLLPjcnF2--0p_uc--uwAJ-ISZnnCIKWa---QgbdT-0_qJ7CprKy7917--Do60-0MPdwpc0LirO4eLzjezyyzzzyyzjzjzzzvvsFEiyn3OJFKKJFEwwKOKJJKGd_GKKG3JK4KJ-ESx2nSrP79-5j2XKaPVn--_t4Cgjtc-1wYGa--6ZPXV-Ama9N-CTK4nUSXX--2n3-F24thzhrHcXnIqUttxbcd97-3jCxpvh0-1rbiZpEa1-JjETd_azzgznzC_KK4F-0TTz2V-2nrwF-Ctvzgs-Dwy-LEp--Mcags11x3uLKKLPLLLOeNwzBknnwwzECF-0uAGc-ax4e5iii30---6dYeV-2pDWF-0v0pc-uxhu5KvzivnG3GF-0vS9c-Tximavyl4F0GTtRbKpKKKIMKorSKxcP77--50cV1--X-0jSM8x--MlFHs-PyMyriv3J--6njmV-AuIRR--UKqu7wjf1GaaeOdiaPdeeaeadePOdd_OGG3FK43G443G3G-nBB-En2B3P_3HKJKGJJHPdOKJO_aOeOaaQe_K4_F3G3O_8PKOeLOPeOK9TddJ01OaPPu_aOdaO__OKKaK___GOOOaLLLOd_-9PPeaPPefeueOH_Afeeeueuaeaieeeaadd_OdvvivzynwnnwnEnzzzzzznBnBzEEEEzznwzEnwzzzzvizyzuuaveuePv-wnBwwnBnEePaOaPaOLEwBknueaaMwzeeePPujjczvyvwnnnEuuusEnnEEEEzznEBBBkn2BnE2BknknBnBwwn2Bn2B2BBBkkn2--3Bk-k-F3F3J0F-BK8J-0-3Fl43J0JJFC0220-FFB--434_F02-3-FoF-3--ULK1-9jk6__KPzsnC-0rs2uxu7-5z6oLo-0Ua7Y--2yTuFFpzEegnKCAHYSIEIBgmnBen9mhJonKKpKpKIICCBopKMKpCMMMSxxtbbyOVNN50V550VN50VN50WVN-0a--0xLN-V--711-V0R4w-PfBJ-5sCnMpUSzGcVcX--36DPF-a3T2CpX7-21Rkb--7L9iV-3CdyF-D7K1E--E3yyLPB-AsdryprMSrUMUXVXX77X7-0lNuCb-0sh-cpsV-24z4a-0O5skoP--HJcO--8cjcVMwvW_PePffuOedddaOd_OLivedaLOQswwnnBwnnBBEEz2EknBl___JJF2-ddFJBB-kFJF-3Oxo3mryUe9--oNo0k-L_0tBtV-x9UXPVk0Kd_2QCCKJnKMU6Wy6x0a5OtWWaA9f9eX9VNhBeeOaOaK_aOaOOOOOOOLK___aLLLL_aLbzjjjEnnnEEBnEBnBwwzEzFnBzBnnnBwkBOJ3--9Q2JV0hFDWPTj03-0esaIV-4M3pF-DfxqCV-0LPM3-8fbYnBy5-Cq8_WadYzEwLK3--A59FV-CZXbR-2ghDYk--LQk_-0vCsPnTV-0OncZ--gxEe--LXbt-4QGLNnIMaTP9V-4d4NF0DoYGBxBttWe--LdTx--AJjgV-4fDgF-1q1n72bQ0Tq_fzyaLyy__JbzjyiyEvnzoEzz4K44GG440J0GJ--AQaoV-hj4xQW--QUtTs-0QzBZ-2hzuIu--M0W0-3QVpXzUSX9X--r954k-6-LVD--s6udk-U12pBUe--NKbO--B9nkV-55gUGAILAU-ee9eeXeeXeee9eeXeyN9eeeee9XAzbzzzUUtzxzrza1fzrzs7Xe9XmeeiUzrWztzbzzsUztbyUUrztzUzzyUVfzMzzzzzzzzzzyUzzzy1SzSxzrzVczzSpUzbrzzztzzzzrzzy1cXXecXe9zzxzV9eeee99USzzzztzSzzzzzzzzzzWtzMUbUztUSzzzrzzsD2xzxrzbxrzbVeXUzMMzbztzztyUWVX7cX7X7ccX8rtVX2Vc1gVWrVNOta1UbbaT6byOyTMqXggpFemnBnLpThScXXopfJppUhSzt_USUrxSxSzUUKwepzznMzUwefMzSCJXAKRemgegeeoeeeeeeXe99eACMxzUrxzUzzzPmeceeeeXeepzrzzzr9eee9e9ehUrxzrzryUzzzxwg-3sRUlgzK-1wGfBrUXc-1s_20ck-8lARQMsc-6sakWaUYsG--BJEyXtygSR0KGMwzkKK_KK_KJKK4JRnEEEEzEnwznzwzwzzzwzzwzjw3wkznnnkKOKGnEzwEEwzB0wn2vyizz0nEEqPvnzzzwjjEjzEEwznzzEzzwnvz2jjvvzwnkTzzzj2vznzvzyzzyzzwzzwzzwzwzzzEnwnknzfjvuzECfjDzEBBwzEwzEwzwzzE2vfwzk6njvw-nzEEzEzyzvjvLizyyzzzyzzzzzvzzzzzeOPPKd_4aPuwnaLK_aOezjEwznnn2EEnn2wzzEmwznzEn2nwwzznwwnywwzzvzEznwwnDPzzwzzzzvzEvznzjEyjEEnnwzzzzvzvzywviwzzEBwzwzzveznyuzjEzzzwznzjwzjwwztfvzznEEEnzzzzzwn2BwuO_fizzvzzjzjDywzjjEqKfyvzEOfzzyLjzmzzn2hPjjAwzjvjezvnfzzzjAzfjjqKOO___OL_KKKOK_LKLO_KKaKKOaOOLOO_ePLiKKKLKKLKKLOOKa--wN-ww--DBg5N-4latIyc-MYUfaRyCF066q1CJxa5X--5F6mF7z9BugfEUSrSArzxBefBeJcrrzbtzUzHmfUzzzttVX7X7XXX7XXX9--yKGGTsF-2mkw2k-3tQstjx4--BkdsV0DNK7PzGF-6B9ki-9tXkO_K_zznl-0RovXrc--OeZW-IRqTXoeXefUzzzxHYUyWzzzu9XZmZe7-1tmAWzJ-0nbeYV0DRxYTvG--2Dto7-0bYlJ-0nm6v-4DTdBTzyzvzvlJKJK4K-8wxJTrrrzrzOceXce9V-DTg9R-dnsbYExxryUzaeeceec-6bz2Lk-2o5Gnu-1u2YOv3-0oCyAV-iaLAUp--CCXRV2Db2oOOwzvnpKF-ppYW0bVVaOyUzzzrxpxpzPk-2eBMb-8xGoerUUxzry9Xce9XV2ydQ2OK_OjjnBwnJ--pC19-2uliNEyk" :
		12 === bN.e8 ? ow =
		"JJAf2uP6y-0nEiiuyywnyueuTbfevfvvjivivivjfvivviyvuuyEgzjjzzvviyvizvviuNziyvijvijfvyvgzvvvvfeu0-F-n5a_GG4KJGGG3G3G3FFJFmKGJ4JGGGG3GJJFJG3G3G323G--kLPeduaKGFGGGG443JJJJJJG--B-C0FJK__443-BJ-66wmpBnJopCMJpCCCIIIJoopKKICKCBnCKJgooopMIDOzzSzUzbzzUSyTUxxrrrrrP1XcXXX9Hcn9cceemece7cPIoeX0sWWaOWVNTOcTNNcN0V0V5-N0aOa-0V--N50a5Obyc-M0z3TPOdgBnBF0NOpxpMV7-M2mMiLbinz03F0sTx8mfrNT-2l6QEdMwwp-5XX7UMTP1V1GIuvaNn-5Xfxrpw5XV1GNTEfn4-_XvzjAAA9mfA9ed9fpzyTUzyUaUyOX3n59NTKLLKHPPPO_LK4iidea_O_QeideeaLOLLJG3-0eeddOaPO_OKLKzEznzjgnnzBykknByEYnByug-3332ElJ222-2wBko2BnBnBwwzwx-9Y6j6rrrkccc-E5ctEizpJF-aDYgSMGz-X10G6VyjiyuuPeiuzjivh3G3K3G--k-9JGFAPEIZSKBghKSMIpKpCJnI9gcXeccehHccoeXBeoppKIJoghIHnCJnJmemmecmfA9jyTUzzzbbxbV0WaTT-OtWWWV0zxtyUN6yUzSxrSqTUztaN71190V7-5V15VUy--V-lxHEg--33oL-67Dhyu0--3FoL--7ahw-LGYowfzu-0HFMIfF-aHWWwxxxcXX-E8ZrUdfVl--TIJLzSr17V0wcDLvivjysGK3G4XaJb1zppIJpBccccge7fUxx9eocX7cXX6y7Y99Heggen9nJdAHp9Xnp9IIJfICIBdCKKIIMMJme19eXxxp9X9VVfEMMMSBpooe7XCSBomccxxpHcrKKCMHmXXmcxoeX1mpJe70BrMJmVV--gxExIpJcX71nKCJmhCKKCIJoopCKKKHX8KHd9nKrKBj6xrSrKpz6xSMMSrKppwObaP-UzSCAICIKCIKKKCMMKKCpCMMSrrrKpKprUSprMUSMrSprKrSpSrUrUSxpxprSrMrMprSSSppMKprSprrSrxKSUSqUGbqUbbrxrSxrSrKHXXeggeYBnBgmnBnKCrJnKpIKpBnKCMMrSS9chKKIBeX77EIAE5OxIIKKKIIEKSKSKKSKKMKpKpKKSMSSSSrSzxxxzlzzUzzzzzUxrMMMMSxxxrrxrrxxxxzUzOzrbxzrxzzzw6w6yOtttttyUbbyTTTTTTTTTUtzIrzbzbzbba-71-VVV77V--7711-V1-1---51--1-1-V0cN-N5VN1e-ee7-1mc71Xe9fIBcVV0WbyOzxX-VV7VNN5TUzUu1ce9menBecmf9gxHc7c7V-777---50VP-V-N-0WxppSJpr6zyObzttV6rMKpUyObttbryUbzWaP0sNNOX757X97X7ce9XXXXXVc7-V-X7VX5-V7eeA9menA9fBnCBnIIJoorMIRObpIKMJpppSSSMSoeX71-V7777X97c5V-ccWV0VX77--NN55-N--7U5111cXXenBcc7fABgcX117X7c-gf9emV---1--XXXVX7X17579VVV117Xed9XecXX--WV5Uzz6zyUzrSrUUaNUlxtzXXXee1777X1e-5NOy--WV5OttttaTUzyUrxxtzzzlzMUrzzxaUttbbxWzxpSonBmpCCJpCKCIJpJooeACHpprSxaOV577U6sOWV-NNN70WVOWzwTTT5NUxryUba5NNOba1cc79cXX199X-91X99mhIHfJmXgxxxpHe9XccX997c7X0zV--V-N7P6k49V711-111X-77cX79mmeHeccV1mdbn_Uno-DKNVSo1-O9kaiKKzzEzpK-8_SLEzzzeeeV1Hinzjh3-8_UsM9mjtyTVBHk8AfiyvivizpG43G3GG--0OIzV2mnjMaLEBxn29mc4SSpprSSSUprrKprSSpppKMMSrMrxrKIKHhKHfIKKpIBpCIIJpIJnIKpSKJo1AKKpppxprSprpMKphIKhMUSrCKMRpMKrrSMMMMSKUVUxxUxSJe19efAKKUbKnMxKKUKIKUStaSrUMTUrzbzxxrSzzUy5SSKtbqprTprzSxxSrBXe9ghSrMMUyUzzbySKrUKpUSpSUMtV---D--0aN-X9997977VVe9XD-19XX1-9XcXXXXYxzUttzbV-7VX78by0rUSppKMbs5-V77V77X-X71--17-X-7V-0WWVN-6byTOrJepKpSrpxrUSSIKSKSzrrrs797c1711ObUSxxpSSSSSSy5--7997VV6z_rrSrxpSprs-7VX17XeXVXN-11-TUUSxztyTT5ObzrSSrzbtbbtUKzrxrSxzUrzUzShKhMKrxzzzxyMtzqnAA9mgfAAACKICBnKzbbWWbaOtbaOaTUbtyUyTTTOaOa556zyMxrUtaTUzrxrrrzSzxzbta5N0s-ee997cX97cX7cX7X771-V-aT--V17V7X1--V7Xea6ty5T5Mts5--5-550aT55NU_ySxxta5OVD--0VN5NND-N--8a6a5OsN1og55OVVOta-75OTSqhCMrBmhMbbtzzzzta--NN5-8Us0V-N1eD-XN0VOKppraT18zs0SyOUaOa5OaN1-VcX7X5OSpSxpMSra5NNObV5-N19cVc-W_KMSrrxxztzsND--MJpKMrzb_pyTMzUa5-0a5-X-VOIMMMSBnKKSMrMzprzaQBen1ceeXcccempprtzUUSv9mmfMrxzUMxpUUUrzbztrxyOzUxrrMzbWbJppSvC7gmenA9mgggfABgnBf9nBppUrttbzUzCKrSSxzbaUxPfMSKpKnJhRpIAIIKrSzUMMzxztyTObaTOWWaTTTUbzzrza5ObaTOWbbbUrSrStzyUUzbyN--s5T2rs-1XeXeefBn97VfBnIBemf97cXcX7bWV1111c1eiN7f-ABa6s19n77X7g97cceX7f11UzUppry-N0MMAIKzV4UW_rJoppza55-TMSsNObztaOa6KzV-77N-SKKSUzbaOaOyUtzzzyTUbtzxrsOaObtttSraOWaObzzzzz_ptaUbyMzzyUtbVUyUrUzzzzzUzzxyQMzzUzzzeeeeXee9Xeee9eeeefKMIKcf9ggnABemefCCKzrLf99X1fABgeeXAKSSMKxxzUSrSraMRpSxrQA7X7X9oopBo1N9gnIKCIJmmmnKIKJomn7emfMBc51997cenKMUzPmegmfMMSzzyNA9OzzUUIKMUKrKpSSrUrxza6SrMSrrMSrUUxzrxxxrUSSzSSxSUSxSrSSrSrpUrMMUSprrUUUUSpKrySzSrxzzxpzSppprrzUrSpSSCSRprSMKKpMKrMKKCIIIBohIBonAAABnABmgemhBmmmeenBnA9X9ecceeXX7Xemmcemgef9nA7en9kecee9eXeX1-enBkeX7XeXce92VXX99ceACBn9XX77XVVV--X7XemmgeeXXX997VVc75OVeX9hAAA7eeme9eXe9Xeeee9e9ceemmmmf9meegfHenBmfBnA9mgggemnBggfBnIHmmekeeceX9e9cXXXmoeceeXce9Xce99eXnBpCBpSrSrSrMSxzzxyeeeeemkeemgf9pprUzUHmeXXem99e9eceef1dbs17ecepKrMgg9XeXccX-Xeen7cXeenBmnBghCBgnBACCCMCKJohCCMrzzzyUzzzzqognBmnCKprMSMACKpz_wmoogepCKrMSMStUZkeeeeAH15-11-X9hCKMSRomcgpKzprpprs0z_rKppzrSrzSpIKIBgXmprrUKIKKrttpKzSUBomm97ghJpSyUzSzzzUbzzUtrzfAI9epnHceceemegghUUzxzWbzzrbTopMSta5OVOrzzUSKUUxrsOrpxQCSrIIKSxSrSzSrzUrUUtttztUtbzxxMaOV-sOWV5--NNOUzUzxzxzUUrSxrrUSrrSzrrSxSprSppprSpxrrrUUrbbtzrbbrztzzrbbyTT6bSyOa0aTOaOy5T6aTOzbzpxxxxpzUSxs7XESrKyOUrtaOa17zyUaTOaOSxprKCKgnIAAABnBnKppppppJnHnCMJnCCKMSrSSKKICCKKKKppKo-2AYFDB--MPns--j8uk-0TwQV7mzO6ievyyvFGK3F--qNX0zxzxrXce9c-3mKUw-DOJuzw9-lBkNyuuuviyzjJK43G000-OaPJEprzSKMrrkccc-1997-2C8pDo-uPOqwf9mnbbtyTV-2Jzv--5gXT-CCmSUvvGG--5xsy-0D-rE-4b-qzSqX7--sMmk-0lNEV-IZ0nk-tm6EnFN-Rt3BvgF-5ReOUc-otNAvisG30DRoZzUzzzrwP9eeecc-3uJps0eSSKRrMGzrzrrM-V-eXXeX--2fpn--6MiT-0DoXD--6ULD--E2lg--TGhs--wrkk-0uNAV-npyzx-0bkCEF-6EeL6jG-5bpJQAEbaV0nuubvp-0dya3mhrk--BzMKzF28zMOzrMUP779c-gziXufkG-2byBQrcV-J-IhV490elopIKKJzlX70V---2FCPyV-HVlaxpX7-x0_hzvvGGF-12_CV1o6LCaeB---Vy4s-K15tuR-0cH3EP-AFalyPf--1u44Wxxxr17cc-CFkqTusBG-2cO5jMcV3oE3YuuiB3FF0P7tWrre9-4GLRUh--19rRV-JN8nk-1B7iV-3OQA--cpNzV8oQxrjjizyyw4KKG44-1d-ezGV-_77wzvGF0eJQZmxL0V-C9jlvF09OI0rTX--JoI0k-PTDyyV-40oK--e5AbV7K29M_OLMfgznEB4-IfrEMASpSUSq-7-Nee-ANaSDyx3F0A69npL--1qoP6bvVF-qtlNxCKCUa0V7V0xqOguudaNznk-G3-Lvq2RrOc-2N7SOfvlG-2g3LFmnKUrla-7X--Vg031A1AJgoxMSporMSSr-XV--10aNXeV-y7CVQfz0GF0RIcNptae02XdsiLTezvzyyyzjzGGGGGGGGG3--GRVT-QXt0TTyyzwK4GJ-r5K0genCxtwT-V-yBnotTvg-F-RR4WyVBNuCtdejvYyi-knBLOFJJF3BSAjnMSzUbsX9XeV3t0vf_fzv-GF0wZ8bxrOe9--8AQA--HN1m-CZlGTLRwx-cmONzIxrprppKprUyUts-XccX1e97cXc--_7pw029QbgoonJUROV5-V-iJrguik4--mdjY-0tQAdaRk-BiCss-aMQLTjJ--3jUaV4tUqAvjzx5KGF-YB7rwfzwOeVuOXlO_O__Kbj2vizuviyuuvfeveTiviynvYziefiiefvfiYvjB-444G3F-0-2-kJ304K3GGG3JG34--F3GJ-IBbGxS--3yOw8PPd_GaaiC-Eueibvyvx-304--C-2IBzcggmeenCMSrwOaOzKHmnrUSxzTOu--V7VVV9c-yPFVPuf0-F0gt0ZpKs17-aTPhOiBFxRy2ZmgnJeeXAICBnBenJzSrKKrrSSrKpMKJnBnCKMSMIKMrxSOV0V0zzUKSpppSKSEKIESOV-Oa0sOzUrMKSppSUMMkP77V-0a1--VP-17--71--7-UxSrrrrSJpqOtzzOX770hBcX7V5--XXV11cc717X7X9XX999777X7e-_chDLLiiivYEl33G3-Vock29fSpSKonCMU5OaNV-NNX7c2DaQYtPjzvjfiywGK33G3G-0xDlzpUyX9V5PSx2jyuzVGGK-0CFZWnwNV1uXF0_fBo1IJJoSSJnACCCKppSxyUV-117-N711-6evlav4-JpSyQKUSSSpaX517c-c-yg6luPzk3F0CNJQpy9-iumBnaLKKeudOKG_KLKLLLueLOaQEEjEjyinEyzejjnskBnwC043F2-nn2zE2EEoKGKFASOdporHX8CBhzxraUqUzSlzSX77eeeXBc0V-LhikvW--KmlL-EfebDLTskk-YMe-RrMTV7V2uyCCaPEBC-5q1sjK6a7V-A2Ih-Aq892rMUNP7cc-TlB1tv--ANsVBjV2v6d6aOwnp-7qIGAIJlaNV1imQQOPszivwzE8GGGGJ0vODuRhCrppCBpULN5N7NX90WX-6gppqPk-GqSXfBnqOxtaUemec-5nnTs-YPD2wz6re9-3QGmz__bnno-2PJQD-KhKnTaaTn-nF-0Pg_N-aphUzj4FKhhRbmhUrKHohIzMpxrpKKKSMKSKxrU5N5OaUL--X11777Hf9VX-N7--5P-XHXe-0hhca-WqtqMCppppSJp6ltz5NVXV-X17eV0QUJbjJ-nREfwnBwOtbae-IiGGaLPvEk0-Er7eI9nCKpUa0V--1v_ZSfcl--0T7Zc0TwsLPNzgz8K4--MdCP-8jMTqMno-QTv6BfDUs-CjSgLdjBG--rknYV0vttlfW-0CxT2mcUV6Qv4daeffkn3J3B-EUOXBja1CjifiOvd_LdKKaaOaK--nBw8aOFFeeKbfivzjix3En-2Ennz-n-3-2UYTi-bkAQ5LLKaRzgwnznGJ-MWJCRr5NV0wBylcwF0D6jaola--BJZx--NfgX-6lRkav3--sx_2V7RUnUaK_aLLQjzzz-atBrI9mgmnICCpCKLTOaOzs0aNOWV9c-E9stskaiM_-pIJnKoxxzxzrUrrxzUxzSrUSzSpISxzxbxzzzzrzzrzxbzrzUta-0YBe7mf9eeV--P9eee7XXcecVXeXceA9eeeXX-c7T9Bee997n9X-0wqC2ylF4iQ5frxSUzJzqNX9cX97V1wr6EuslF-YbY3xSUaeX--x1Jxc--uDnn-6S8wKaPedvn-FFB-zea6RfESrSq7-WX-6pPVqNx-dun9rIIKMSrSrSxxBzbts7XeX97XX7N---2MXGF3ilDMnrSppGa50VeXcHjS0jOLKO_LOaK_K_K_LKK_JKK4K4KGPedaOK44KOPaK_3aefffeTzivizzzyuvkBzwzszEEnwnn-nzyzwzv03G00-B2EzBEBwzBwnEE2-ow4SEIJmcccxxrUJnBonSrrztzyTOts-9X7VX7X9-YvBN2wwwwzvvjjzzk0zOXTUyUxzV" :
		13 === bN.e8 ? ow =
		"C0DX0NP1V--QqeadnzzjynEEzzjjivdivfezjj2BBwzwnEzzzzzEjnnvYBBBBEBnzz-UV-hflzUUSrrUzSxSxzk0a1-V50K-0pMiudevf-zvfeBnyviVF-F33-yzgp3bVV02IKUrHnUzzpHz5UzUzSKrUrzbyNN-OzzxzUUUSrSrrrtzttzWaOaTUzSxxaOaOxrKBnCSKCIMSKKKKIBpIJoonIJopCJpJpCCCBnBggeXn9eccc9X7geXXn9efHfBnABemcXX9eece7XHXeXecegeeVV1ee9eX9ecc70eXcXe9enA9fAABnBnJpMKpKJnBnHmmeeXX7X7cceXXce9eeccXVVVV-VeXe97Xcee9f9eXeXXXXceWVWBc29cX7V-6aOaTOWWV-1XX17-NOtWaNVnBn97X-7cf9mmnBemXgece9I9eXXomgeh9eX99eeeemf9BmmeHgeeegfBggmnHoeABeggnIBggeeeecVI9eeemeXe7cX1-ZmfIKCCIJooonIIBnAAAA9mmgnIIBnBpKCBnCCCKKKMSKJoonIBohBmnABnCABfA9gd9mhBopCIJonABgmnJopCCKJpBnBnBnCJnCCCJnKBoggpIKCKJ-UMSGxrMMKKIIISrKpSKKKKJopCIIKKKCCCBnIBjSrSSpKppqUI9cpKIKrrrKSzyUpKpMxS5UKxMSrSxxxpSrSKpIrHxrSMSzHfrxxzUUUSxrSrSxxxrSrrSrSrrrrrrUUxryOtttzbttyUzzbtzzUzzxzzUxzrTTTTUbyTTTTTUbbxy0byUtzyUzyUzzzzxzrrSrSSSppSSMrRN-OxpSMztzbzzzVUrLUSpprUtxKbxBfrSKJpKKJonICppKHnKKJoopKISppSrMKrSrrUSSpxxMSxprUSMMSSpKMSttzzI9f9hMMMSrKSMKpprKKHnCSSKpMMSSrKKKKKCIIC9gnJonBpKAKJpJpBpKBnCpMKKCKCKpKSSSrSrMMMMKrMSSMKSSSprMMMpUKppSJpKKKKMKSSppIMIpKKMSKSpKMSSSprMrSrMMSSrKppMMKSSMSSSSSprSMKKSKBmgprSSppSIMzxCUzprMUyTObbyUzzzaOaUzzzUtzzzUUqOaUxy0bzzzbbtaTOaTOaOaObaOa5OWbaOtWaOWa555555NNOWaOaObaOa57-6WV0WWV--O97VWWWaObbbtyTUttyTOaNNNHV0V-N---9-V-777579775-0taTOaOaObyNOa5OaOWbbaTTTTTUztWbbbaOVOWaOa5-5N-7X--V-517T7---7-Wa0V-X7ccX7-7-77VV-5-7-5N17X7XV-0VN5-N5TNNNNN50aN-5Oza5OaOtsOWWaOWaOWaOaOaOaOaObaOaObaTTTOtbaTOtaOaOWaOaOaNOaOWWWaNOa5NNNN5-Oa5NN0WaT550WaNNN--N0aN7--0WcefIBf9en9geecmmf9eAAABgee9egfBgmeee7cX7X777cce5TTT-VVX1cX1c7197X977X7Xe79eX15hHX11717-7-V-V71177VXX7X7ce-V-1-1-----117--cXX77ce1-VVV-0u7X777117771177V771-717VV-977X77VVV-7X-OWxpSSMSrMKMSSrSrSy5150WV0V5OzJpKCKCCUzSrSSSrKrSprMKprpMUMMMpKKSpzSxxrUMSSMKpppSCKKSMISMSrMMUUrrSrUKSSpppMpSSSpxrrSKrSpSMKKJhSMKppKKppSKKSSprxtzaUTObbaObzzzbyUby5OtzrtzWsObbbtzttbtztzaTTUs-o-9SuvkpF---4GN0--Akuevkk-0Z-5DzUUzzUMMSrUUrrxzzV0k24nbEF-72uPs-31lfR-X0zvBgpOsN---Fjh-1VahUR-033plvivC44-bVp12CUzzrxpztzzzy2A979eeXd9eXXVGkPch_OLJKKa_OLujjznwwkzo-Eno-q32WRrMKpkV7-V--7jXk2-IvW9e-7xySpV2kZ-vaazk0-HWAOjKHprsWxta7ccV2FavYivl3F2cIsAppKMwN117X-81g-ifoF-L4N9UrkcVDFfPz___bjvjjEB3ByvEGJKK--WQlvV0kn8QjoF0NPnGrScX-E2V6yPuEF3-D6-ISGX-42b3rh-0NYH_ooy-3P8eEOJFGGIB-B-0-2043LaPdaeeiZ30003G002j-03-JGFGJ-4K-03G-3303330NBzB-UzzB3DvzuzByyfiivieivifevefjzyw-D9vlxqX-A58vaOYw-07nF-rFPV4lbM4aaabBn3B-mC6fBmmjSOa5N-25o35o--CiYN-gQSZPTw0--2QiX--66YJ-9FT6CN-BHQ8jadHQyddcyvG2232-F-8Hr8k--dcfk6dIezn9YpIBhC5Oa6y5UrWZmX70C2JVtUzzp4J-mXEjworrq557e-6IQmyv4--dmmEV-JuCMk-9SVlk3KDxRuPiueObi_JGTyycnBk--4-BF-eicPos02KqRDLPefeTiuiviuk-K33F-----6f9qfBnUWV-jMD3iO_aOaPOiwBnBnn--0evOEn5U5c1_T5ktLKKGTvjzzYp-w0Rg9s6ABmeWBmghJonKxCIKIKKSKWa6zzro5Uxltbe9e5OtVOWaN-N6w6y2ABcX17cXV-SWU2PBo-alHDReopsOa-OOYdiPPPgnE00--BsPu--Oo5J-5oKjx-AxeUxtaeeTeeffeuePauuvivijfieiivePgyvvC000000-3-3G35JG-2BF0-30-2FFFF--3hlWISD1-ER5o5evV0-0eu7_RjSSprzrSrcX7X7X7X--6KDt-HirDjBnBnKMba5551-3rQbzaaEBnpFJAmhxnKSSSSKKKKonIKKpKpMKrSKIr5UrNV79V1----V55N-1V1-7-7-X79-IUBriLagwC2-3jm7YKkV7jUvJLaLMeudeP_LPK3PfeaLeaa_F8aaLLOaO__KHdOK8__KeePOdaaieeeiiefifeeddddaaPadOPePPeeiiveueaeeivfeiuyzjvvizEBwwwzzEE2-kkBB2-2-kB-2-B222-B-k22-BB2-B-BB222-k-kF-B22Bk0-F32nyevg220-FF-0--0-F003G-G0-Cl0ab9eefxzzba-AX5ODuklF2RKFUonyUUaPXeV9sgwrddaLaPNn2BnEE0F3RULpn9opxbbbtXVe-Y_1riO_LKfvEink--0BfCIpy1V" :
		14 === bN.e8 ? ow =
		"EcA20EP9t--46idaPadePOddiaeuuuebieeiiivuO_aRnufezijzzvzjvfuuPKJFJGG3GPKGPOaTiiiedaduus2EYuiedn2nyffdv32--0202EzeRwoG--Ezzjevck20202zeufik43BFBFK0G4-0_J--nyioC03-0002-n22wyddyjfzven3Eyv3JJ20-zynnEyjnnvjizjjejzyy_wznnBn2zvnzyvzBl3GG3G--23FFo0-wzBB8m--ZISrMUUSpzrxxrKrrSKpppKKIACBnAA9mmgfBcee9cXef9geeeXVf9999199ge17V7Hgce7c15ABee99eeXegegegfBgfA9mgomeecXcXgeXceXnBrxSxxzHecefAUUJceccgce0AxBeXXXeceY9nTUJgoepCJnzzzxIBfrMpIJmnpHmc58EJmnrSbrMrUKJnIKxrHgrUzrxKCbtzprzxKISpxzU5Ulzq0a-NOzzxxzSxrprSSpxxrzrtztyUtaOaTObzxpxrUyObaOxMKBn9pMKICCKSKIKKCMKCACBpCACBonIJnKIHhKBpKBpBonCBmnHmgeme1ggeeeX17Xc7VY9e7emdBe97gfBfBfBfBf9e7X7cXeXc19eX-ecXceX9Vf9cee7V-P1e9cecX7e9X7X-0XcX7c97e9V0--O6glDk-BjnBnJpKKMSKrrMSSpSSrxMrSSrMKMprSKzUzzSI9cmgonCKIJppI9YKCKCKKSKKSMMrrUzzzUSMSrUUUSzrzUzryUaUyUyUbxlzzs7-V15X----V---NNccX-ccc0y10WeeeeV--70V6xUztWxMSzbbc6xta11cX9X7V7-X-eHeggnCISpKHX1V1X-7-Oa-N5Xe98HeVVVeeV0X9711-3--XjabvBG-0s7nSrxGc9-BFOunededziszBzG0-G-KF2NDz6rSzzu9d99-0FVIObk153LiReenAUbbxzxzrpxq--e9e9e-A1JTaukCF07J23pq7---cVM--WN3QV1khy_awxF-H4kIRjyV-oCGnvjx3J-16-Ny-U2iSDjyffv33G4F-CWtG2GxSUlV79e--2nbB--6j1s0REhiviizkJG4-4X-vYML77-ZHJ3Pv3-1cZeNponGtV-V4lDIreOiuBl-3-DAESjT9-r4cgTLLKKOaQjzyvgn3FBEB--1pnH-E4zQyafnG--5BKbgN-3Oxws0iCDazIKxKMMIr5OVX1V7759-05hoa-4YPwIzTXc0oS4-OaOaanwnB0-qYoDA9pIrzxzpzpKzzzzUzrWVf9cP1ceceVemcc7cV0H9uMvF-eGU9USSbuX975JYvsOLKOKKK4OaLJKPueTzjEzjzBn2zj3-Bnwn-B_HnzBpIzyNX7V1mi7bfz3J09L-pSKKCSrs5P7VX7-YBjWieueuusF-F03-0dhx_nILN-03vANuaQYl---6b56-jf6VcBknBBn-Bk2BnEBkBkn-BnBkBw-----n2Bk------kn04GKKKaOaO__KKKPLOKLKGKKLKaKKKKKLLKaOOLGKKK3KaKLKOaKaOKKKG3G43G3J33F3G4G4JGznnE2--G-G3334L33G43J-33JG3KG303F433GK3K3GKG3G3k3GKOffaF--GG-FG3---F-3I-3F0-0303F40GGG-G03GG4FF0--FF2-----0---k-G-F3--04343G-G3KG030-0-Gk-2DwkG43F3G0-30-F3F30-00-G30-0-F-3--G33I--03FG3303F3-I0--3F-nDtfefeuvfideeviivfiuviuzwn--B2BBB22--wn9PeLeeLeaPOfjzyvuiveuifhfifiivevefffjiafjiuifeypeeeiivejEivjiivijfiuieiiueuieeeeeafieeeujvifffiuzziviuzivieifiififPivfeifivPvyvijviefivevevafieeaOeueevfeeveeeuiufiaeefifivizizzwmznEzzBnEzBnBnznEzzzzwzwEzwnBnEnAyzzBzzBn-nEnBznEwzzwnBnzzEEzBznnnBznEk--22B2zkzwnnwnzznBnnEzzzmvwEEBkBk-B2znEzEznBn--kBnBEnzBzzw---4--2-n-RB2Dvfzn0n-kB2BnB2nBknBBB2-n-3-KK3JG0304-G43GLJJK_K4JJJKJG3F43G03F3-Fk3-3-k--FLOadeOaOaOOaPOada__aOe_LPaPOK_KOGGKKKKOaOKKJG-K3Gk--nB-FF-3Rk-JGGKaPPeaPPeuieW00-FF3G3FFF--2-J0-GJ43G3JG-0KK2-3G3G-3F0-3G00-F4N2znB-3jEzzBk-ivzzfjEBAzievivivieevivueiuiuufivzzzvivzuivivjvyvzejvjwzzvyvzwnnBzn_ejEBzzEB2-LOKOaMBBzzBnzwzizieveefifieizzzvyzzznyyvzznvjEzzwzBijzjyzznDzzwnnEyznzznEnEEw2yajzDjwBvnznEnzkzEznivvheejwzjefievveyzByvnmeziuvfiyvyzjnzjBwnkzaeO_PO_dLLG4PPvjivjivjiuviyviyzjwzwnE2zBnBnB2-k--4222BzEOOaeiejxPeeuuuuqeuaeeuuefifefefeeffeuuifeveffeueiieuvfiiveufiivvfeuuiuffieeuufuffieyvjiyfeveiuiffifefieevuiivfjivvjwwnBn2BB--BBnnBwn--2-k2BBwzE---0--0B3F-k2-kBB--k---JF-3B---3F03-k2--wkzEn2-B2wEEE2Bn0BB0-kknBkwE-kk22--eUSCSJrLT7V71K0YLtevvyl3KFzwGJ-DWcRRqP-hG7KyLafizivwwG03G0F-acjpSSKy-VX-IJltLePvV---PeSVrBgmoxprMRTTOa77X77-0N3vk7eoElnII93nzSKBooUSX0aNX0a5V-1pfNUugBJ-9iOdUNV-4v1z-Sfs-zBgmX8MKAxy5NOzKbse7V-0U-Fk-1y-lV-4x-6--g6bj-3L4kbaTYn2J-apmECIJlaN--MR8FTPQYEwpGF-2W9GV-62Hz-7i5cMKKGV---y2dwQvz4K-NgIMwmnUzJopKCCKKIJnKKpKSKKSKMKrMMbrWbWtaT6a550VN---X157cV-VX77VVX7ce7V-nZT45OKJLLPzjzzBz2wLJF0I80TwpCpzpOWa5P7eeV-9fnj-3pOZ6JOX-2f5dcs" :
		15 === bN.e8 ? ow =
		"CoE-7lR-YWRa2AEJenMxJpbqTObaOBcX5NeW_xnVto5UUzzrzUrtxtxrMKMUSSyN1XXV5NNOtaUUxzztzUxxpUSIBpSSyNN1aUrSpCCIJpKs50WVNN--7N6bbzrzxzrrpSMMSSMSzs9X7-X-VVVX99ccVVDUV19D--998a6rztVXaOV1771-78VN0V0V-7V---YV7Xh17XOWWV0V6pTOs-8V7XXpCF5-N-N-N-N0VObSxrSrSUyN-aNOsObrxMABnKUaUs-V1-N5NUzrxUWbzUSxprzCKHenMtzKoopSSSzzxxrMCJmnABegmXOs1ABmnCSKCKIC77gcepzSKBe9XfKrHh9eprxmnKMKLmehKCUrSrII7XnMUSxrUSIMpIABpryURpMbtxrrSrMUWtbzSnKKABgnAAKUxztrMUxrsObWtWzzUttraOtbUtbbVefaOrxxpStySStzVXaNTNN5SJhSry1zzSgmpSM9mmgofKpxryU_rUSxrPXmhMQIKSxrUrrxSxrprKLpMa-2V7Va-OV1XXAI97ee9m8a6TNSxSzzrtyTStbtzyUbzzbtztzzzyObaNObaOyUtzzaOttyUMy-f_zztztztzzxxrSopKprKKMSzrzzxzztttyOtaOaOZnBnBmn9mmmpMzbbzWaTOta5UyObtV9eg7XnBNN-7-ObrTUzztaOaOaOaNOa555-4KCCCBnIBnBnBnBpzzSzzxzba-7--6WV-1--771-VV------71-----NN-5---OaTOaNN---0WWWaNN56bzzbbaTTTTUCKSSprrSrMrrSMKpKSUUrSxzzzttaTNOaOVN---VV--X--1N0WVN5-7-0aN79enKBmVX9e9177-X770Ws7VX-WbVccOa-7OtzaUzy1WbyObaMxyN6UV4rUUy4zzaOaMWxyOzrzxrrTOzUUUrztzUzzzzzaNN--770aSSSztV-6rxzbbs5-NOUzzyMxzUxzV-1X9777e9gf9ege997VX7X9X71MMrV-V75-gnAHommmgf9emem9eefBmenA1AHmmfCC9h9m91AIHegn9emnAABnIBmV1mmegon9f9mXenI9fbV1ge7tzV--cgoon99gc0s76tV99nCLo1977Ebs50Vf-AKJcc-1fMMKr9c7-Aa-1mpBme9c-5OWWV-XV-50a0VVUV---1N18xy11--V1717V-0a0VV117V7-0VcWaN7Oa6aNN--OVV0SrWyUxzVe8UxyNN7X2bVSMVN50bbzWVXhH7aNTSraTObbWV0Us0WVOaN55OaOaOV5-OsND0tbzaUrrtVXX6rrV-X91V0V-N-V7X17X99f17X1XXeemXcgeA9hBce17XpA17fKKCK9e97hSrSHpomf9ABpSxHpKIKHhHhIJhMUhKnKUrKKyICCBnABpAAJpKBnIICA9opBme9hC9nCKQ97-XhJmfIKBhJoXA9empmpHhMTehICIBehIKSRkgomfKQ1971hKxQBpprSghCCJonCKKqpMSpBX17XhSnBopKSgpKopnKpIJpKSppIJprSzzKMTTTUQKMrKrrps5-KpUKKSSpMppSSKrrKMI9fBnBpHnK779nAMrSxzwonBmXXppQAI9fCLmhBop-s1-WV1hKBAJpBofBegp9mefKrpqfABfKzbpIAKMKHpKKBpIBpqmpKKKRnABooppKpLmnKJpCBpKABoonIIJpBpBnIHVX9e9f7ceeceegpSRe7f9mmonCJpKSpSQIIHn99cXee9mgf9Xce97V-5OV511711-V--7X1--MrSTT--VcNUUWV-7971--X77c1-VV-V1---AJXN--N5-7eYWs17Wa---cXcWs2aOVgc1ca0tVVD---V0V--55-1eX7X511V-8V5-ge9pMKpKJoepIIBmegXc-fCBmgfCIABfIBogmnAC1gnBnBfAABgm99ggefBXXccXf7VXe9XX6ba-XXX7c91X7VV7X1VV1-D0s55--6USrMSMSrWWbzs1menB1N7VUsN----2bVemACUSKKBk-VVfICKSpg9777--7hCSJpC-----bsN-OaOa56rJnIKT0a5SrtaUs99150zy50ty-55ObaOzbopHpMWa555Uzs9ef79gf9eopBcgnKRkAJomVa0V1da5-gnIBmWVVVWWzV-VXAMLkVVXNOVza-1hRmVNEtSrrpMSy17VTN1mgX7X2yN56zrMTUtztzSxzMrStbtyMxSppKST-V-UTUraUy1Xe-OaN9nHpKLegA9a1ccX1nIBcXXXcXcefA9gX7VVzs9XVbzyUVef-Obzs91UV-e9WWaUWaUzrUSrUrpzzUUrsUrs7efB999e971ceXX9ec7c4rMyTN11X-SprMMMbVcYa4xzzrIMpry1X-V19ge-zza5OzMUUUKpKps1-1OyTSzKMKnIKKSy1V0WxzT19XX-V-Xcf7gekcaUby19f9mdtyMtbzxtzSrWUzrSyOzzbrtrV9gXf1me-eecaTMs7cX8aTTMxSrMtrxtzrKKs--VXDOxSSSSCMUy-XUs7gV97V6tV6xprV7tVA8ySrVEzzxRopzbVXOVaUzbtzKopxRpMrV5StxzrzUV7TOVgiOtbaUzba-emVOtbaTObtbzbztbs9emgf9fBggf9mnAKRpgmmn9mmn9egge1-0ttV9mmme6a-iUbbzaOV7NSs5O_s8baNUVaMT0brs54SMMUICMaNOzzMsD1eeccXUSs8WVObttVVgfAIV71g7XmkXtaT2rxrSryOyMsAxs8a5UKtWWxpKztyObWs1mmon9Yy-X7N9on8V5OWVaNMMSrStVXVcV0WaST-aN55OVfABda6bUthMSrT17XN1fVU_ttzyUwprs2zzbWa6s1eopAA99eef9ttbyN9gcX0y-VDMptzs9cdV6s8WvKy0zy171OsUxT0V2brBpMs8s51kTTUxzxzxxrV17es1mfA-egeiTTOtV55OtttppSzUMV199-8bbrUVcAtSrs7XX7gnBnA9eTOs1cT5T2WxRpzbtyN9bs9ABkYWbbaShMsOWt_QMIKKxzT18VXTTUT-1hPecVOUVbaUzUU_rSSUVVX8tzzUT-ce9f9VemeeABfB8a5UzbWWWzzbbs6tSrVVWxrV79f755OWtyUs1-0aN-OUKMpry-c17aOzWUIMKprUUIMa-1X918V770aTObyUxIKSIJpCUVNN5--sNOMVN56_pKCJpSJoonKMVNNOa---OVsOptaKMT55NNUrKxxrMMT11115N7s9kc9V9VttMT0UTNO_xU_nJpUs7NUSzzSKKUMUts1e1T-c5TOVNOaOaUy2V50_zSUVX119X7USxs7--OzSCUbbKSzsUxRnCBnCCBnKrCIKJnIKM_pUVN5NN-7T50a5OWV0aNNNOWWxKKMBnAMxpIKKIMaSxs1X6rV-D6V-sT-UUVX1e9Os7zy-5SMUTOtpKySqpCBoe9nCTURnBpyOt_oonBnKttU_zV7a-5-tWWWtxxrqpKTOttSMsOrSxhBpT6bxSxrtUUIKAA9nHpHnBgeecf1ee9XnMxzxrUzUQCUxSs6SompyMs-0rSTUxtTMzzrrrUV1-sSxs777UrrrUMUtzUpMJn9e9ee-VhKgnMzUrynKtWzrzzzUxJpSKJnACKKs0Wba0V--UTOxyUrxzxyUxs-xyUrxzrUzprzUrpzUrrUrSyMrUSrrSUUUSxUaSfMT6xrSzrUrUUby18SrSrxrUpMUTNSUUzSSKSMSrMKhSzTKSpMLpMCSCCJopCIJpJonBonIIHnABggnBnA9nBf9geeg9ecce9cf1e9mm9mecf1eeece9X7cXXfBn97V9eA9cX7XfMQB97cX9997VV7ceXXnKSxxpSKxSxzQMUtxxhUr9Xs1AJmhUzUUSzzKSz1hUU_Sz_xrrSzUMUKrSxprqnH19pSKSpBpQABhMrKSxrKSzMBpxrppIMygpSrBopryKpzKy0nMMzba0rrUMStUSpSrMryMrxzbyUUMUty5-Ortbs78V77X77--Xe79pHfBg997X7X7X77ce-X7-zTOa0VV75TUUzUrrxSrrUrzzwfACKrsObs6TSz_zxrzxrrrtVN5Sy-4W_BQCq0c--5XUc-X5rCBxMa7PVDNUK-nSJp971_ESHe-mocmeKzxIIOxttzsTT-Ota0ee-057TlBpMMMlsOV7Xe---Z41V6NZVgpBmXJgnKMpr6WaNT0c7--3XZyYK57-DXainASrrUs-cXc0D9q9BhrKpMy6e7VHVV-19qEB--1him-7XjEvIohy--0DA35ggnKEGzTOs90X7-DANdhT7-7Xt_vISba9c11AoEBnACBxrSxSa0Wbba7ZmcWXV0Nl-LpUX7--232P--Y4hn-1NmHcmmnUy5--yBtECSKpGaNP197-0YF0nN-QYKBvKofomhMUtzba-1WcBcV17r9ZnpzsX9-4YWUUKaNc-1DHqB03YaRQJjHc9K9Mp9XmrHhrJhromghUxoOVT5OzMxtV5VNT--7VBc--DVec-5DXQxV-9EWOSk-7cyKynBpBnABoopJ5OaTT5NOs-OcVH7zjtnSIAHcgnCBomn9gjzUxrxCBeo6yT5Uc5Wzxru-e-Wy0s0aPc-39Fz7gpKSBcCHgcWggnIpRObztbxHggpoehryP6tbaT-VN-17---ZFFrV-t3OTpa7--GJ2c--GJFN-5GL3xc-9GPigq-T84fLpBpAMHpSBfACoemeoefCACAJrzttaUM5TUa5TUIErr0WWxOtWaOzyNNNN77977KACKBnAC90aTN1VN-7c-eGPvhSrq0ceV-1GRaD-9ZO8jSpKF--7--ZPZE--O6VKyV1O6qJppObVXc-aHHGgonUbVV-1ZZurAs1XHQCRnMzMppopDOVNWbttbYBec3mgce---HWfN-LHY8SS5X--09ahV-tAuEpN--TI4hxDUT7c-PI_QzrqXX-3ZxNzHzV--ZyYEV0dEl0pKsV---J06s--J71N--J8is--JDws-5JFcRs--JKrN0iJQsgnonCCL6xba6yOWXe9e--_6BUV2dHDArSUrz1XXX9-E_ADrICMKoN176X--0I2AV58JkgmgfIIICCTOaT0wNN--PKIxzUTcc-3_KPjIqV-1_MDbCV0yKYtSHpIpCSKHZlzLNV-10V55--5Kcizc-9KeMwq--0MPIV-dMpxrc--_Ul6V0OMzAnSN7-O_Wd6ppSppKMwNP-7X97V7-F_Zn6CzUrMOX9Xc7--_a82V-0OcIV-8OxHk--LW2N-DLaXxTX--4fBH-2_fwzLPV-0QFUV3OQn6xKMSxy0X-ee7-F_tjEBemhT6zzP7N-1_yrzR71uMvlwxIBemeefSu6zp9zTOzq-5TUxxWc9A97-9N1TU5V-0Va0V-8W-ps--NFDs--NFLN0aNK0UKptxxxrUNXXX9997V-DOBAzTX-2aJfQBy--0a2hV-0a3SV08aU0zT9V-taUEntc-5OtESV-eP2MzUSk6e9c-XPIwxMSN7VV-ddFArc-7aafrpUq-e7-TPquRnTTNc-mPxXxrrKlcVV9-3amCbSkV--5oXa-Gat6zSSzrUR7X7ec7-HQgPwxu7-9R1zzP-1tkzEmgj6zzXc-2b3DrLP--Ol2rq-78lqzrHegrzzzKEUTN6seVNcgeX-kbAFvBghCIKIIBpBognIJpMKSSxUSrSSxUrpK--0ogPV0OpIUnBOs-SbSprpUSI9jxa6aPeWzz5XeeV-PSyVwpEsV-CbXszKCCGWbsV7-0bZmzN--bbTv--0uTlV08uUInDTV-OulbqV1tuqQnCMF-5Ue-2bh7jJP--0vJ6V-0vjlV-OwCMqV-OwVCw-0twdKojFTNV3dwdbnUSMzs-PCA91V-HUDFBraV-5UKsSc-DUR5ByP--6rqa-2bsubMc--tyOApa7-yUdojJmnIqOtWV9--bxunV-0zWdVAOzeUnxBmfrrICrUUUUrpHzWVcWX1175X-Xc--UzJs-9VELhk--e0DGpX-2c8yvE5V0P1YAmzTX-Fc9eEBhHgn5Uta5N-OcBY6pSrIAUJgTOa-09We7-GcENbMSppzye9777c-9VzggtV-94IUs-9WO6SNV-95_ss-DWdaSDP-mcR2MBoggxrpUzzKSEzxUqUyX9ecWaNVe79V79c--WkEs-9WoBzNV2u6I8rMJpGaOV7Xc-9WxeRyV197X5onrsN9-1cXrMEc-uXElzMKM575NHe-09AHrpNP--1AZrV-eBC4rX--7ndq-4coH6ETP70HYKWxSMOxxc9XWbkd9V-9Edzk-HZ0xhyPc09Z7pBmpSxpy5O9V79--82Ca--86Zu-2dAgzUcV-PI-Bq--eIQcrX-1dKuADN-H_k1UrXc-9_qWSsV8uMPGmzMTNUUUSEMSxxze7e71c-XHee7-Ha0vzScV--aLfs01aO1woxIC6a-0tuc-DaUtSq7-6dh56pM0X7-7dp2zMSR-X--abWegmjUOWc-EdszfAKSzV5UNe9V1PUQ2nABUzc7-5by5U---cAvN--cHps-5cLGhV-DcONzR7--98tL-4e9eMrR7V-HciUxpX7-udBoSJfErlbuVX-29aVfmxIpGa7P--DdjHRtu-6eW7EKSN11--9XeD-jeZFrBfCpCSxpSrzJ5TUcOzaOXfBh9X9X--1c-1eGYR-5efWrCracV-1fXrV-ufyWxkV-ufAyBoeezUrzV-V-ugwopa7--fJNN-LfPwSpkVV-9iyzs--fqes-ifsnRxzxyXecV0ejZ8nMbe7-9ftmzP-FujbporSIzSpMUISCxzx-VUzrrTc6zy7Xh9ecVWuXX-7mcVHe1--ejc_xc-3ezMzK51-4ezOMKGV7-1g-Dw-Rf-nQAA9gnpMtzzzbttXXX7e-1f-oITV-agD2xzola9X-Ff2bjASrxSr-97VV-4f47MJyP7-9gJYUP--9lWRs-qg_aBfJxrzs117--gavs-PghqUKGX---fCFz-09nVOpqV--9njxk--gyON-Dh4IxL7-2fGYEENV-1ob8V-upTOpa7--hVws-XhbrSpLOcXV1eqiCpKR0yX7--9qk6k-PhjSS9c6y-7fR-rUrR7Xc-ehsTBgrqUscc-PiJ1hASaV-bfaA6AI9MMMHhzpUbzOyOz1X97-1ge7V-1tzIV1uu69nCrtwP-e-9ffCUprUkVXc-5fgVYCM5-V-9vpss-5jH-E--HjT-wxu--XjYHx9xSVN-19yPqognyT--pfugbS9rSrSMSrzpaUpSUMSkVV-VVVPHgccX1XX1c-9jiyz5V0Pz_GnSN1-4g0rMKR-7-HkBVxlu7--kCK70LkGUSpMSrOzuXWse7X9-4g57jrTXV-DkQfwxX--B98T--g9En-1v1y0pKorN7-7--gDm6V-v2vCxNV--l12N-Pl34RxUcX-0gHXnD-7gHhbKrq7X7-TlB1xMxcVcJ1lBSSrSSppzUzxpzT6xSSrKrMJopBmcXcxrMRUSpMKBgc7N1cX97971AMHYSSrMHcce7eVVN77XVX7-Oc1dMSHooe-V-CMKSSKq1VUpkUSrUSCMMMUSzSprKKHexxrSSxSxxyUSzzSUUSpSpSxKKBhUpttx57OaP0WyOaP-9-0V7X5CHcV77X1VVXXV-97cV----0c-7VXcY97X7ece1XABcc9--23yxV3v42inCMKrbVBe-0xXV-A4Ugk-aliIwpIMs----BS4D-2gSBER5V1v6fGpCCptV-X--BTnq-7gVUzKKT-VV--m1DN-qm1FRfpppNVN7N-DmEsxT9-QgZUjCSKEKR6xGWe57N-ZmVV0A8RQxR7--A8TUk-imT5xSTTTd9cV4Q8thxpponSpTN7-X77V--mZcN1immTUMSKCKMR16VUSprGbxkXBcVcX77V7V-TmmkSpUVcV-un7nSrMSxkX797V1ABckpMba99-0go5MN-5gpKjMMX7V-QCSMnV-vCllpk7-Pn_7wppc--6gu_jIIqN7-3gwCEUP1-HgwGzMMMSxlu7X7X1V1vETrmxSrTVX1--C-0D-Eh0RESoxSRN-X09--AFrbk--oIos-aoMTSIKFN5--5h58vIRNNV-2GitV-vH2_psV--oc-s0aoc_xKMSJe9JUUqN5P17VV-XoimSI5OycV-fHxjnk--CB5q-0hHcbN-VhHl6KpASSSKIMxsVWyP77VXV-7-HpEKxUX7-mpKbRoeKSo-NN--CNDi-7hOczxzTcXc--pboN-DpiAwpV-5hTmMpR5X-0QMjrnMN7-1hUQAT7-HqBoxK---DqWZRr--IhdNrKrSzOV5QBeX3e-9hfVIBpUzX17--CfpD-phgbjBmccjMJrzke76zrrMMSrUrpSyc17VVX7X7X7-HqmXSSX---qmvs--qqEN0HqtqSrxKESrNN7Xc1XV-2R4lV-fTzpnk-1hwNUTV4Prr2xMJnIC9EIrJomnqUKKCJeIIMOxp9MKzKSr6XX7--V57OV70WXV-5-N6a--V5fUUEofHchpKMOba7X5UTP7-0hzqEP-2i1rMSX-2vVmOnHpplxk-WcV-9sS7x5-2fXLhnESoxu7T17-2iCDURP-3fYKfrK9fISr6s-57---sq1c-DsqBSTX--DFu5-1iHcjR7Bmt9wxogcf95IIESpAAJegxUJfxI9onJeCrrrUrSUSSrSpMKSpUSrMKrMMMSMSppSKCyUUz5N71-0aP5OzyOzUSrUN6aOX10ty-7-0s-7cV-7X1X1-VX9XX7e9cecge16yX-X7X7BmXXcV-2iHoMUcV4Q_4_nBrpyOzSq5cXX7c-HtGWSpX7--tUGs-5u0pzc-Tu6aUSS-17-Tu7VxACOa---u7iN-5uEYS--5uEcz--auFlSKqNO99-2i_aUGuV0QdwKony7-BicpMJrMSc1-5V0feEApSWcc-5uYrSV-1uf6R--igpMV9vfYUppKHexxMzxxrUROttX1e7cW97HX17--2fYfV-Qf_oq-0Afj_rL7V0vfwMpMaX5V3Ag7opBpKpT575-7--fgPSna-4iqejAoOV-avQIxxrycce-0isQUF-1is_AGc-LvkFzM5X--fjqbr1--Dz_T-6j-zjASq75-1j1jzlc-9wL5ww--2lNpV-flSUxX-3j5MbM5X-Hj6HUJm_prMSk--7X--vlsIpk7-HwadwjOV-1wepR-2jAT6Ia-1fnTTxHnEy0X--Anark-9wvRwtV5QospnoxMSOzr0aNn9X797V-Qp0rq--QpG4o-0QpR0mxlX-4jL0rSq-c0XxPBBfBnEMKKyNNTOVN1e-6jMXUJlz11-EEgqwecX-s5OaSs-AjV-jKppq-17c-9y-hSkV3fsD9ppKIKDNNOVV17-Ty3bxJp0V--9yERww-0Ax-_npV--Ax2Ik-9zfaxkV-vzr2xk7-A-1BRy--3-zvV-w0lpqTc-I-kixr-c-A0MPENV3R55SnBpKkWa0zGVX-nkNrfACJeonMrxSrrrSrT55-IC9e-0ztVNX7X99--35IBV-R5UCqV-35iqV-w6ltpWc-60xjx--A1PugyV-B95ws-E1cpgpV--ki4IV1wAqXpUTUa1ee-4kl7ACOa7-02LhN-02YwN-I2aoBjy7-f2fQUKrScVc--I2gExS-V-b2tvSppo-7X-0kyWUF-1kyZMq7-036Ns-M36nwhr---RFUnqV-BFvKk-03Kgs-A3kyxNV-wI34p57-644wwN-64BcS--04PSN064PVSKSTUF14HcWc--BL4Uk-64ckSV-04jBN7r4jQxHppKKpMJxHe7V1-ecnIIKABoopUSognBnIAUtbotyOyNOsNTUSJnKq0a6ztbttVOzOVOX-5c0a5OV1XX7Ze9jpI977AI97--lSWj-FgMRSmf9zbrpzMKc0bxrKESxrlVXHVUbbpSkV7XccomXX9ZcP7-E4xwwja--lXvjV-wQInrsc0Q5ozSpKEryObbuVgce1c-Q64OwhMWX-0lmZbk-0lpy6P--GtFD-2lu5jKVV0RUb6mp6V-0m9erN-5mBT2BjNOV0wZLzpUk5XVPBZWrmmmmnIJrMSrSSSSKSMUxKpKrSESpbxSSrMOts7-7Ve7cnA9119-Oa0Wba7V---V7---ece-cmKJQBmp9ggzzrSKMMy-OyTTOX7X997X06mLdEBgnABnIIIICCAJnJpCCJnKJ0a5OtWa55Oa0WbaTObcV0WWV--I8QGBxs7-U8RIgpzs7c-29W_w-3mdg6Ctc-0mguE5-ZmlOjKBmmonUUUUbw-OzwN-VHmc1eV-wgZprsc-rANbgnKrUtX17c4UAhBhBenHYBocVgprSCHZnrrUMSxHnIKLOa-0VObaUzxWza0bsNOy1X7Xe9n9cV-1n8XjDN-IBkvzxXc-2BlYi-RnBjzIEMMKppKKF51-1-0V-9--nBzMVXBp7smn9f9XehBnCAIBomnABmceXeZegccZmonAAIBnKSMSrMVc57OyOaVUzWzOzxxzzztxzxxrrSrtbVOWtVN-OVP7V-0aT--RstSq--gtJnqP-3nilrCq7-AniufCAM0bbcV4UEFHBomghIHoonBnCKpKICSKpMxIBnJOtV-OsTOtsN0aUX7VN---6zOa--7fJe1-7nuYnACrtVc0EFVzgfBofKUUaOV0a73zH2ShKICCCCICCIBgnBpBpCICKpKCKRN55N-5N5OV0a0aN5-NNNOWV-NP7-zHTMwnJhpJ5-OVP-5oiBECSkV-0hBVAn9M6V-IIDDgzZc-2IgAR-1pHnrR--2KH6w-4pLvUIOaV-0KUwN92LmEgfBfBgqUSCrKKKBeVUX5-X4JmoocX-57NNmconHdBpJce99pKppppKIKopMrtxxxprKrMUStaN7-6yUza-7X9775ObzzStV--51--N-PcXX7-ILxOwoOV-UMCUghM5N--AMQdSNV0STQGrScX-8ptlrCCCta1-0CTnYnqP-0SVFsrM-70Eq1sfHnA9XcYCppSKKSErrSSCzpUUzKTOWaN0V0WX7VXWa-2KBme0WX19c-4qODnHrVN-2OnhB-Cqb12CCKJ-UcWV-IqjjQSrKAMzTNV7VXc-Nqu9fBnACIHnSLNOWWaOV--hjnFrX--r-vI-1xkFZpprOu97V-zr6zAApICSUpzKUxlyUrwUxKV56a6a7VVXY9_HmmeXVX1X9V4CmRVp9mrMaTUxT-e7c-OrAdfJnKrrSrrsN0X979X9-0rFTQP--MKdX--M_8P-DreVnCCSrzVVNec-AVFgBTV-T02FyV0L0slMs1c-6VTDEc-6V_Ajc-AV_JBtV-D5hsk-b_7iwnSROX1--OPBa-1tQurDN-Ya80xERTNXV" :
		16 === bN.e8 ? ow =
		"DwCd1sP0j--RaO__ddedddifv2EEznnnyfEeRwyzBBBB2Bn00-17-2fEMK9dCrtzUrrMMqN-X-789V----Sf-T--yfzIrzohrxy6kX6rSk16k7---11J7Z-35CISoOxsUKESpEP6qOV6pJp9mec17cmhpxUSogfBnMMGWxptyUUzc5UrtttzpoTOV6lVVZme-gcfBc5cUrztbV73cWztaEO-1I5dLOfvkygzEyaOdzjzsl2knvg2EW2zEznvzzyzyfyyzzvjuMyzdzjivvvyyinyaTVyydzufvevjgwBoG-znzdiEdbg2vkyjEyiazuK_4OGaJaPjzYnzzjBwnvyfiigEnuP_vjuiaOMdezeififiiEfgzfusnEeO_ivviEuvjzyzivivivg3EjuyjiezjjisnvvEffvznviyviYEYyzjygnBz1_Fl-zivjEzyuwnB2z0434-4G304-44-CGJFKJEK42Bo-38G-340403LK2kl44G_GFn-G402l2x2433432vuvfvY4-l-0-FkF3G-J43G3FJ3-G5J2---20L-Y-8CqLKOzvEjYn3GF5N0A3mrIprrIryT1Wace1XV0F2MKYo-H05ahSVV1R1RHOKefiznn0-z4KUy5MEe17X7Xa17X7X7X7X7e7X7-17Xe1XeX1VXT0aN7X7X9X7V19X7V17-Xec7X-7X77X7VfBctaT-17917-X--7V0V-9Xe19X1cX991hJpKJpKMSKMSKUIMUrMprSrMSrKMSKrKKrMSrSKrMprSrMpKMSMMpMSKrKKCKMUzrxrSUMUKIABceV17-XcX7X7917X9X7X7e--0aN-7V17XcX77eceVX7X17919X1EzyTN5T-c-7X77X7V197XcVXN-7V-17-X18VXD---X7a11--7a17-99177Vce91X7XX1cVXe9XV-N-7a11177VVX12V0V-VX9-N0VVVX1-1171777s0V5-N7V7Va0bVN0VUV-VN-2Vs--a-NTN0WbV50WsN5-N5-N5-N5-OrxzST-VXcc-VN-1N5-V51-15OxUSxUrxSxSJpMs0V-8V5Oa1D18V91191X11-VVX19nCSSKSSSrMrKQKpK7cXXX7Xcs-1X1VXVV7777719-csN7714yUSpUSSryN77c7X0V-16a0VenB5-D0WV9X-a0WWVN-gpC7X-gm10tV0yN7NNN1VV-N1mm-N--s-7WWyN--fLocccAAC9555NUsSpy-Wa555-c--hIJpCCBmg5NN-NNN8_y--N0VD-epnIKCCLVXYWV-919prKSC9cV77-V0Vc11111TTUVVgkf1991D-e1-ceXX7X-WWs9cXXgcUxy10Va1cXei1monICI7g9-XgegmVgem7X6xyUVc8bbta6bbtrzMST--15NAA9egemfABXnBm9n9XmfBpMI9mggfA1eceeegn9eeXe9AIBme7g7Vecg7dV9mgecVfWzzyUzxSvCMtbtbzxtUryOzzttbtaOaTOzs97ea0VenBmN5N-XN9X9XiOa5ObtaNNNNOttVgggnB7e17OVN0WbtT-tWV5MV0ztbaUzMy2aOyStI7fCMtxrzzbKrUyUa5Oa0bUsOa1me7f9cD-1997-VTOWaUV-WWrzzxprWzUrqnBnCKrSSzySSza19Es9aOs-c-WsOaN50V-NObttrSSxzzbtyUbzzUUzUtxrUUTUyULpf7hKyTSBpMzpompqpSxUrSSrKprUSMMUTMxSrKSKrrrppMKMSSprSy50byOSzaKgpxza6zUtbz_zUmgf9mA1egmgf9pMsOzbtzMyTOzzMbttWy2WrKKIKSKSUtVOsUCLnKUtza5SzUxSSrSSzUSrMrUzMttSxxMSSHemgnKzUSzrzxzyUrtbbpSrzKtKrSAMKSs-T---X55UbsN9eem7iObtztyU_rQMKrUSMzzSrxUzzbyUxxyUs18s1UaUprzxMKJhSrMxpps-V-798VUtaOVOVD-XhHDN-6V9XXm7ce7VVtV-951-Ors18Wa-7-177--1-UVcOyUbzMTUbURopIKCIA7f1hMShJonIMTUMUSUKKUMrSrRchMJpSryOxxhIMprSJpxrs---Wa4xxrSprKmpKKxUSrUT5OV7N2a--7-ztVYVXcVV2aOzrzzxrSrbrIMxJogAMSMSUUSrrKJgpQJnAJX97hMMU7fHeX-en99pSrxwopCICBmcXXccXehSrprUxzbztTpKJonKCBfHeXnCLpBmX9XpSzrpKpABeepS9nKnBofKwnBopRpBopCJpKpKKMKIKxzSzzzxKMSSSSKxKSIKtTUWyTObUrrxzrzrbrSzrMSrpzUxySrxxzrrrzzbtztzyMxrUKQKKSSppMKpSKpxprrSrUUSxxrMprrttVD5SrV-a-NN71-cX7791-77VVVVX71-TT6WWbWWWVN-NN8V711-V777X11XVcccceXVXXNNN8V-15-9-VV791dV1-VVX7X1-sNOtrtxtxtySyUVNStUrUrrbUMrppzzrbbry6pKKrMMMrMMCSUUKepKxs0aTTMUUU_rMT-OVN-6T-7-a-777V-5-XMxSSxxrxMU_pzhUxSmpra6QKUbSyOSSnMxSyUKSxCMKUtprySzrxxKttbzbSrbTN0xzUKBpyTSrrMtttzprrSSrMSpprKCILpJhBhIBonKMKLnKICJnBgmmpBm9mnAABgggmeommnAAAJghKKKhKgmpAAJpIJopCIMIMIJpCKJpKUa-s550V2VN50VNT0s5OWs6VT5NNTTTTTMyUSSxQJpJpAA7fBprxpttWbbSSQKSSSMMzSrt_rUUbUbaMyTOVzTOs7777N70V70_pzKKzbbSJpBp11hIKqnKUtIAJmnJnJmnIBnBnJnKKLpBnJhI7e9778V1N5-NT0VOtbaNN9gmmmkfICCACBgonCBpQICBnI1fJo9pSQJohBchKhCKJopSMKSSMrSMCIBomooenABfAIABgnIIMtsOaObbxI9mmon9gnKUwpMJpJpJpBmpSCShMKCMKCBpCK10V7-77X1-cVV-7hKKCMKrppMKSKpIAKtxzxSKpxnHghUySrvCICBfCJpMbnAIBhBgompIIMC9mgfCCKBoonIIICBfIIICBopIIIKKCKKSKMUKpKxpSSxxMUMKKSKxpUpKrSKSKSKnICCJnCA1999-1A9e-7-cXXX17V70a-f7VV-1--7XXm997cXX9AAC9mgoekccXg97XXABmkf9f9fA9emXn9emgmgonKtxgnBfI9nBemef1X9-9gn9meeXA9eemegoefBmgnBnC9gnC9eeggnCJhBpBnKJnKKKKxpIKrRhBhAKBhKSKKKIMKKKF7Z2MkT__44OOaO__O_LLTbYvkyffBkEcw2knyaaiBkyEC-x-nl3-3VQ3QMsc-O-txaOjzzk4K_-7VS-vCSzc7V0J2qEPevjFF3F--6mTV-FGRlV--92TV0kLotbx-a7AuPnIUUoxxzbzrKrpKKMSSSlWxrUsWtzKlzTUyOzbw516xSUzWbsX6wNgc55Xc7mcXmgmeJmofomXXIBcYHcVPXZcVTUceX1d9me17ee9-A0Y6qioC-asBoenIBjSUIBjUSJe9ceV7177eV7fC9gpzzHeeICyUxA9efIrzM0zKaP6kOxIMtxzbxBgef9gfMSxyU6ttaUttzGzryOa-OV1XCJc9VcN7---40ekqQ--NDEDyV--Red-6VumnMUacX--0pcZ3P2fIBnrozKocX7X7poxognBU6zbzojHxISryUWX-U0XV--V9YHX7--6M-k--Do0VDFSy8__bfuePPaEykFkk03C2-3VwCbAMV--0t6o-92oUS0V4FUCSaOQzBn4---ywe-Y13Y5KOjuRyaEBG2F--GW_V0FZtli---3co7-38GgR-93kCEP-1kaQpeNn--L4BWBn5T-BFdZS_ePOvjjjjwk3-FJGF0sL9epCyN9-mkhAhaefdPOOaOd_eO_dPLyiiveeeyEnnEiEwBk2nEnBnEEEnnwwznnF3333GGKJJG3G4KKGJ-94g9CkV--ipW-VWVbABxrMKz5OzJxsNNNVXmXe9c--B49F--PnOV-FqcSV7sQLqmeeppUUSSxtaTU6yT97997eeMC2a-LKOaOaOi_vdPiuzjd_dvijyu_KFJGF33303FC2-oBBB4KLOOaaOiaeduaeeffdiuzzzyyydKKJLfivjjjYBwyuyynzyEnznvszkxFzwzjvEBG0G2zjgyuyYvybvzjyieKbfYBkwzivYvyvyEiviyvfuuuPfePPaadvvvjjeOLP_MdOKKK_UeaPMefvjjYzYknkkzznFzyEjzjfyvvEzjeQfjYvzznzyiyEsywzwzYvEgkG43K4GJJKGJJK3-zjsEzjjvzwyyvvC3J2G3FJ2yjFG04FK4F4K-OKGJGJG0GK43EB4GG2EEzyvvn2yduyvjyinzx33G033Eiw-o-KF2k-GGJeKO_-0PL_JBFGKOF_KOHK4GFxOHKGGFwp08J-yEYnlKKFJBwFJK9eOFHLTdJ-kkn0KKdFPPe_3-B3HeOaJ_2-EeVC-3JKLdi_FHK20dPJFk0O_JBl3KT_3K5LLfjdJeu_Fo3_JiePJF30-l3FGJFoGF-X6dJBfEOtsV0FxOWbo-D6uCS6X1v2zp5_4fu_4ivEdiuPdKJF45aiivivyyiviiijsn-znBkBF235J-GG_-nBl-w44aKKG-KX2_nCErSSSkOWa11XeXLG1g8_OK_OOO_aPuKOdajsydQjznzydLKK_5KaiuyzyvzzzyzjvjidLK3KKGKKKKKaQfefjizjzyvdefiiznyzzyEwznBzwzkn2Eifzjufwyyzjwww--GPO_--zVBnvgEekk3K3GG3JGGFFG2B-333-0--03G3HK4ePeefeQiaOK--3-0-JFKiydeJHKJ2C40GG_ddKFnB2-JF0cWyMmmyTN-ZGfute2---ZAWV0G8Ihi3--8AO7--I0sk-7aWNk-RIFpuEF018vKgpKEM6tWV7XV--L5Mk-NgeYlV6GUzf_eczf24_-k-1C0lB-I5ZZqOynkqK-5YJBIArlX-1Gfu8_yC-6YOlnKIOV---5qJB-DCgdwja-C61_LTvoG-kYgE2KIJnAAMUxzUrOxzTOWaZcV9176qXeX7cVDlqEh_PPeffijjnEBC203FFGJ-mDm3BfEMtyP89-C6VITdTn---2mET-26bSqk--EMts2wUQzuiijiibfV-EYnn3G4LJJGF1szi7nJnr550e--78qw-1FShy-27J7aR-eFczBxKoT7-V-oWi1tLgwk-9FyXENV7H7Of_bisywyoGJG-GZSgYBepxxpyN5X97-gZ3Btfw30yZX6E9mY9eememXeefSzxzT6xzUrMommceKIABhBeMUSxyOWbbbxzHpATTTV5OzxzSy15Ua5O93eme9cXWWbbyVcmVAmK5MiyiajY2Eil3G445J--Hp-s--aMYk-0CdpV2HW8xuvoG-28GGLmemxr6tsV-oczDQis3F11JY8BgnBopr6ztzzNOWX7e7omX-0mZRx_UkRdHRBnKMKpMJppJxponBop6bbzxpxKlbWa0WWWX-UzUUrMzlxrWaWXVd9n9WVVc91e99X7eeVjHcccOe1V--dDLF0OOWLmpy1-6AISazG-5_hMYrq3e-2mvLGeyn04-Ca5w69nUrSq17--QBDVUivzzlJKJJ-qNYawozzyNn97c23mKCO_OLdiffgwnBBBl-J-5OPQhV0wnGIOeeyin0230F5uPAsSSUrHprMSI9BenCHoeXAIrrUUUzTUzyN56rzbV0bxbtcOyOttztcmefBgfBn9ef9X7VXX7X7X7V9IG_jaaeivzB-pFn2KJ09Pe2Rhbzzxxu7cemc-CCRoydz-p--5k5q-ICZKiPvjk34--5npT0dDEw5Oeuaufdeu_PeijB-BBFkoFG2EfswFk3-JLJ-9Ul6xk-7nzgraaOeQfVBB-n-1XVgnghCEpKSIIIMKxML5-0Wc0c5V71-7-C0ccQ-B92pWnABnIBgmxUa-UbtbrzzrtbbueXBee5Pec-C21Ktk6e6I4rJpIBrMM0c-0zzbae91c7Qh2tpO_ddeeTbeeiiduuffeeefydbefjiedeeaijY-nnBwnznEBnnEwk-nveefdbYw3B-2koFFnyjueuTw2FyvfiB-32G0-oGK3-OdveeJFFFo3BoLK0JF-40OOaOa_8KKFB3OKefddFF0--02F-00G2--5cWxzMSV1V0JNHMaB-uYI9RnKMGWWaNe-HJRYn_aayu_jjjeBC-FJFFEjiwC44F2uEcgpJxIIy5-NVV-07cwk-PGjhlV3oZcraOPzkC-5eHK_nABpKKrK55-575TT-e0fHO2qaaabeuauQeiffeQffF-33-kk-BB222n4J3K--9LCls-CAWRtk-1QXrVIK7Wd___4aLywyizYzYEyEBw0JOJOJJ-edEvRpK5Os1V1CKLfOdOyszywkGG4-5etPbKtae-jKWNneePfiuiifiijifiw2yfeii-zefeeeeefYBBn--0033F3F03-G-3F03-4-0GGGKJ-ufB4MHjSzSomcXfMpzS6xKKKKMSsV-10a7V-75Ouec17-6Lbx5JE-PfeifA9eme9AJzrzxztyN57-SVW5uU-0qkprRxMSKSpKSrtV7X7X17--V-58t6-LgVLbBpIKrWzSqV0V7Ve--O0SB8LoLpxJnBgmpICBomogn9oghBnIBpUbWxpMOzzVUsUbaTOa55ObxonKESyUSzrzRUtWztsTUzrMtcVV-V-eX-0Zegee977XX-cemcY9ecV8q__U_OdujEvnBmK30--hDurV-5vfz37hzjz9gemecf9genrI9ggn97gegegoenBgopCJonEJUzpCKKIKonKSKMKKKSMSpUKrbzV0V5NN-77VV-7X-WWVV-N-0aNOWWbsN-0yUUUxzrzSMKrSICpJnIIErL5NOaUSxpSUMSSkOWWaV1-1-55--Vc7X5UxrpUSUxty51-cVXX97VcXZecV9r1ep_LLasznvgyw343F-AZ4Kk6pnU1tLuaOG5K_a_OLLPKeOddYzwwwzEnzEnwzE2E2C-JF3-4id5YIMV7-Cs_ftkIvpQOmnA9nBgf9YBoooofICBeeCBoqUUUxtza6aNUWba6aOaOWba5T5THcV7NLKvdveejzG-33F-5q05bAzy9VCvXK8_eeiyvujin304_-3-0FZT-95mmcgfAACBn9ggeAA9mmnCUtzrprpUSAAIBggecmmggghM6tzNOtttyTTTUbbbxzKa5N0bbbbbbaNTTTTTTUy551ccfAA99XXcWnw5hG_OLKOLKaO_LKOK_POOKdaPOaPOaaUzBnEknwknzE2En2nzEnzeKazEyzzjnwzzznyszgzzzwziyzjvvzjEnueOOdawzEnnwzEEnwwzEEnknEnB0JLJJ__OJ0K_JLK4K4_G8K4445K_48LK_OK4G44K4OKGF1TETamnMTOVc" :
		17 === bN.e8 ? ow =
		"9mDS-FP-F--0TedPPOXo0HCGSpxrMptUSrUztztbbsUtaTTOzzzzStzSzSrSrSrppT-0btaOaNNUttVOa---56y6aOSrUaN5OzztztaOtTObtaNNUzaOSrSvHogmgfKpKSrCJgnIICMKrSryUWs--17XD--OaUzaOzyObzzztzrrUxUKprrzyUzzzzzzrSrrbzUSzyOaOsOzzzztbzzrAMSKzrUzzUSrUrrMKKSzzxrrxrxrrSrSrUSpMJnCKUV6aSxxUSxrSSMzzzWzz_zzzzzzxrUzxUzzrSzpxpxUSUxrxxSrrMSrSKKMKMSKKxrSKxzxpJmegnKzWzzoeepBpABgohBnBpMSKyOsT5T---OWWt_onKzzS9ehSrUzzzzrzzKKAILmfHnBpUztWsT0WaOaUzzzUrUrSzpxzzrSMSrzzzSKKKKpyTUaOzxzxrxxrxrUzzxzzzzzzzSrxrUrSrSzMSrSSrSrUprMKzUUUrbrbrbrrSMKxKKKpIKKKMKKKIBpKBnJnBhBgnCAIBnBnBnBgonIJoonIJnBnKBen17AKICIKKJgpKKCSSKKCKJpBpKIKBnKKKCACBpKMIKponBgfBnCHoonBnAKCKKCI9nBenBnBgmepCBn9cecegX-9eenHmognBmegefBnBenBnBenBgmonAKICCKKCKKKIKKJnCJnBmfBnBmpBnICIBpIBmpBmnBnABn8aObbaOa0bVOV1n9fCBonIHmonCMpQ9hCAJnJgnCBnBmpBpBgfA9nBmX9eeeXeXcXX9eee77gpKrSrzSrSrJnKKrrrrKJnCBnCBhCIBgemggeggef9eemmeecceAKKrKICJproomgmgeee9X9eXfKMSMAKMzrMyOtxrKCBe7VcfBprrBAIHnKhSKIBp9emgfBnCBpSMSUSxrrzzrKKLmnBmmnABpIKIBmgmnKSpSKUSrPkf9en9nAIKpIBgmXEV9gpB7Ve9VX9XbrUV1cc9V7Ws11chBeaN7tV7AIC7XN1N1777c2V-a5USy117aNN-ceef97Oa-Wzy1N-17WbyMMKSCKrs10WV-Ws978V-5-D5-s-7VcgmfMopCSppIA7XV--1-2bs717V15--a52aN-X1-cVN-X-V-ts-0V0VOV1OaOa1-2WV-sOV--7OV-V--VX-7--7-0yN7--7-X1OWa--1-0WVT--9N7OV--1-NN---V-17V-15Us--V--15NN7----VX1N7---X71--17eX7X7XX1VcX9XXcX9999A77eVeX9A17X9cX7X7X9cX7V7VV---717cV1717X717X-X7X71177X-X71N19--97X-X7-X7c-91X-X-7X7g7XVeX7Ws-177-17-5Oa5NOsOa5OaOV1XmX7eVcOV-95--5-sUWVNT5N--0WWtztaTT6WaOV7-0aOaOzza0aN0a--7VOV7s-s--6V-X---17X1Vc118V5OV7eX7XcXemnCCBfBnBoprSp9gn9cV17ee-9eee7eV4kDJ_aeiwn-FJ-u28mgpMSzsN-XeV5Fop6aeecBBk-F1t5Zdn9xxrs-9-O9QZyeevz-G3G-YcmK6CIIrUrrSrrrqOa9-X9X7X9cV1_beTuOPOPfznwwC3-4-Jh78rBeejprrSrNN--7-T5ITPw30U8E3BgonBzrtWzzaNVeeV8t9XtaOdOyzBwnEBKK-AmPDvCxrr-7X7ByJT4OdKaTizEydLQi_G48_OUdOvEvyuv-zyevvnzyBFzjvyBnzzznE0KKJJJK43JJG3JF0GKK-2BiSRpxxpWX7Xc" :
		18 === bN.e8 ? ow =
		"DgBy1vR-AV60YBnopk-O_9DCIs4rUUrSSMUrSrSSSMKzypKSSMRpKMSrUKMSpKSSrUrSKIKSueXgnCKBgme9XenIKKMBpSKpKMMxpLppKKpnBoopKMMMMKpMKKKKrSzzza55ObzzUUSxppppCCSSpSSrRopSrrSSSppMMSSrKSzUtpxrxxphSMUMUSrrUzzaOtbaOtbbbaOzWWaN5Os6yN-ee117eme97cX--1117XmmccVaN1-Xy-XD-NT-6sDOa0y-cWtzrrKrrSpptWSxs1W_rMUMMUTUUzrrrrSrSxKSrKKzKSrMSrxxprUUzUyTOa-N-1-X-7--1-VV1D-EUUaOtSs-SyMzy-Xe1XXe999XcefCIKKUUn7X7eXee8aOV11UUUa-X7X0Ss1N1mVcf9ecekgk1AJmnABgn99mn9hIJhKKMB7797ee17y17V79Ve79nFX8s19nAIKI1n9pMKKT5Jp-hFgV1goV1nIF-hB-1kOsN56rSpppMtVX-77c7a5N-D550V-ObbaTTN-OVa----N--7s50y0VTNN-9maOzV17cVeepABnBpKKCBnBoopIKMMS9pKKKKKKIBWV-D-XemgpKBe9gm9eOzbyOa5OWV15NN7-N--V5-OV55-50aOaOa----99e77X9e770V1OVX-ccefABn997Xc77VccgceXegfBnH7cegcVX9ecD-VV-7-XV7Xcs5OaUT155-51XD--UtyUy--zWzzUzrbzyMT5OtztyOaOzKpxxIKKKKpIKKSMIKSKKSzztzbyUxtaUaNN5OyKs-6V0WV0_y-SppSICMKMTTTOtQBpSCMSsSrMSzyTMSprSptSUbzzygfKxUaObrMJpTO_pmpUxraTTOtttVUtaSSptzIAK99eXegfKgpCLmpMrUSpz7fKBoohUttrSrUrrSrSAKKUUra4pSzbaNTObaUyUxopBpSrzbaOyN10baSrrpzKpSSUtSzpUs-75N7cc91cXoX7V7Ws1-5TUbaOaOaSySzzzrzzzUtaN0V971A9eenBeee7Xe9cgcfAA9gggnKJgpgeee9eA9mfBgf9geVVX9fB7X6baOTTNNOtaOty52tzVNN9m7Xcce9715N5ObKt_y-8rMbzs90My6_s4raOUxrrpUMrz_rCMUry-eXUzrpySrxyObrztrzUMUttpztrVMrzrMsURhUxpsOpCUbrzqmenMtzmpzb_mfKzpooXX1pBpxSSKpSMSMKKCMKQKnCBmmeXcc71171-V--XpIIKKnIAAIBnCMMCKprzWV7sObKKrKUMsNN5UyMzzrBpztttWVaTObW_xpI99ghKKMxztaUUbzzzMy6vBgnACUtz_yTMrUzbnIMUtttV-UrUSrSSprMSSMyOWVX-18a0a-0yTOa5NOzrrRoonBpSKBpCKCCKSnCCBhBmme7efMSUSzUUaOyT5OaN-0aUxpoopMSzTN99WbV2VVXX9eYV0WaN-V-OtvKKUSzMrs1797VtpzV6rrSSrzBhKCKMSrT-Wa-V0V-X77ca--UzzzyHpMT-yT-7-sOaObbyTTOzUtsUIMSpSRnMzMT0WsTOs97hIBeX-X7tVVtzVc8WWaUonMzbKUsTUbSxrnMUKBoonJnJgpBpBoptaNOttaT5NUxprCUT1-VObbzrUzzyTUzzzy2zSxxxzry-1-Wrbtbs9zbzV9UV19-fa-taTOpUWxMsN716aUKyUps0xzaNN0VOWbaUzSrzaMrzVcX155OVOV0ztby-199f1XOWa-N-TOWa5UaNUaOa5OaUtzxtaN7egYy-VTOaUrnMwnKtzxpzaICTmoomenCKS9e9hSKxzbrSrSKBgpMKrWs-_yTNMbMyTOzrJnHnKxrKpSMKMSpprKSSMU9fBopKKpcfKSMAIKSrUMMpSSrUzVbrMUUTMympKrSrUUzMBnKSKrSxpJpMrUSSpSKS97cXXXXcXXXX9997ccX7c7X7V11171N-V-VVX1-71117-7-X19997V1mopKrSxpMMKpPeVX7hJfKCCKMMMMMKKpprUa6BpepKAK8V1meommnKMPgpAACReonACBopKSIKMMCKKKKKRpKCKJoprUtbbSSUs4MtaT-78sUxzzwpxxpxrKKSSSUSpUSSSSSKKKSKKMKSKJpKKKIKKKJoopBn9mccgpKICAMIKKKrKCJnIIBopMMzxxrrSxxxrSpSMSpKABofBnBn97710VA112V1171mmgn9k7V51-7XecXpAHhAIBooo-X75NN-XeXnBnKIBnCCKBnB9gpKprryU_ppSzyOWVObrzyTShPfIBnCK9hKCCJpKzrzxprSrSSUrxxqeeehUxzUrrABnIBhMzsOxrxSmgpxnMHnHhMnMICHmpMnHhSyMBhLopC9fIMhBnBnCJommmfAA1nBo97c9nMMrFhBgnBehBgfABfIKSx9X17N1emXABf9gmnJepJmhRmopKCMSUSxrMSrrUSxrrxrSrSrMSSMKKppCKKRognBggogeefI9mpxrr9nBggoog7--N-e999fAa-XfJV17s7XA97XcgecWV7eeAJpKKJoopCKBpKKKrTTMMKSxRpKrSzrzxxrStSrUUUSSpLpCMSKMSzMSSRef7Xce7e9X997-cX9-c-777-11197VXX17X7cgc0V0VNN1VOV-1-WVV-77VcV71-V-71--AJVV7XhMCBmfBnC797g-ACI7-Oa--11-Vc-1XVX9979X17V1-VV7cec9oppnBn1gXo71oome-1nHmgfBpKIBgmmcenIBnBnBnAAAIA9mmonI9egoXmggopCMKKKLpQCIBoopKopJcgnIBp9fACJmge7X77VVa-11-V7-VVVX-V72V7-7-VVV11-V7----V---N78V5NN-V6s9XOy1cepgpQIA9f9e7X777VX7UTUbta1eekXX7X0VcX91c--g7-11emXceeXX9ee99ce9g7cX999XXXX99X7XV-5-V7ceeegeX7X977X77-X7XVV-5-1-7--ecD-9hBX99onAMSKIMJpKSpKrMKJhIMKopST-NOaOrRopIBfIMSSMzxzUpzUUaUaUbttyUaOhBpIJppMKprSxrUrrKMKprRnBn9ggnBms9gnICIK99efBomceXgnIBcXceeeXeefBp9emceececeegmeXXeekee9X9Xf9ecee7X7-5N-a-N--NOWVN--V-1-V1--5---711171--550aN5--0V1-V77-55---------N-7XOta6aN1ggnBmnI7VD-VNN--NN1ghKBpKIKKJpKIIKCKKKCKIKKRnBopKKrKSSIJpIIJoopCIJpKUKSMLpSKKIIJpKKMSnKrUSSppKpMSMKpSKrKp9eepUrpSSKpSprrrzzzSrrzzzrUrzxrUzUzUyTSxnICKCACCCBnABnBgnBmnABnCBnBgmnBgmmmgggggf9meemeXggf9mgemmmenAAABmmmmXhA7cgnIIAIBnBmhBnIBnKKSMSpgnCKRnKKMKKpKSprQMQCIKKCKMKCJpKKpMBohRmnABfB-1V9sQR73q09kCIBed989cCHZpMUMMSMSUOxbpy0bbxSraOaOc7TVP29C9Vc0VBecV--7NVV-N8H9w--c9BgrX-BVhQICKrSsV-1VkNB1Dn9choeAEHp9A9eAKKp9fCI9Xme118BgecX7IKKAKrJce70cXXXcXMSppCzSpJxSMKSKSSrk-0xpxxzba-17Oxta56paOsNNTOyTOa--USkWzMUUzs--VWbrxrrVV-d9e7VHsFGFpA9BnCzzII9X97pxS9XHVZoogqUtzqUyUxx50WsTOXmgcOuVOXc0T4CohpochopxzyN7X7NXV-cNWurX-AW_mQ9horyWa--D6JABqN-51WZ4aN79-1XOJ2Oc-58_IBN-i8hrCBfItza-V2Nd5onEIMLOs-X-0se3gprOX1V5NezHrS9eACprpxy0aN7cVV07h4Zpy1V3shEFnKMUrzcVN7I91V-chgRwP--Xvb6V37jO2mfSxrUba79cV3cjXTpJpJOyTOX7gc--1B70i-6Y102KttXe-4Y2-QBrWV-qBklBoptztf9-7-aBzewzzyPee--YGg2-DspvZoeeeXmeA9mgmogn9fSApra0tzWzy6tzzbzztza-e-1YR0fR--PDnihKtVX-SYi0nMS9VecnMSUzxc7UNN5eV4HE3LxHx9HfA9nBxpaX5TUbzUpKDNUKBh9e5BfCMSFT6zUbaOd9V0aP7OZecWV-dYlL2AAIBmcozMopohpzU---NOaOa6X97-LEHZBzbeV07yFszq9V-cz9FrX-4YxwbHc6s-9FJpByV0d0kXnUT7V--FTac-5FvBCV-XGFeBnEUa1-686HMnJmxCIATUpUzV5--57eV2t6dDnABplyUaN1c--GxMc-9HB5gtV38862nCBopa0taT7V0d8AyppN7-1THOURmocpAKpBc9zSMU0aN551-USL---WZbifBogn9ghCUrLTTTOyOWs7e7V08F5moo5-48NGSmzJmVCKK6ls-0V-1_meQFN19MIGBrKKKKopKzWaUbsX7X77-17c-1P80D09ablQKBxrSSMSxzUSpSrSrSprMMUSVVVVV0baXX997XX7ccXVX17X7c-DQ9vBxX-PblGIMMSrMMMkVVOte97eX7-DUDUCL1-0bwmfD-3c-SvC55-NcAPfppppSrSr1117X171-Ju42Zn9gmd9ceceAMSrSppKrSIBfrKCMUUKk-T9mcV5Ua5Ubz6tX--0aOa1X902cKbrCKKJpHpIJnIKBnCCBfBfEryOttVOu5OaTN5OX0a-7--1---cRyM--P9esnVneG9xnBmn9grKKJnIJpKSKMKJporUonHe2IBmmnCBpCKrSrKpppxrSzUzxxrV5-NNNOV-Ws-XV55UrSrxyOc775-7egoe50Wta7X777N--7VOxrSVWtbzUUSqV6bWaN19cVX99gecemd9ec1xdFn2SrJeCpKrMSrKpSKSKIKKIICCI9XKMKCMSII9comomnAABpCIJpBmrTObs0taT5OsNOzaUSKMUtV-0aXX0WxOzaOV0zr1750zrGWX--XVVV-77X7V0VV-117XXXcHX1V39Nu-nKrUUyP7X9XVFeTW0xrI997KBcXBgnCAJpta50aUpIIBnKSzba-0VVUzbqNX1c--dA_c19eGowgggnCSSGWWWbaUsUUUccee705ejHzrzUUyNA9eXeV19fFvonOaTX-Rf_UfKCBeISJxrT-0WbbVNXe--AcyX--Aenu-lfzAABeconJnUP5UrSpKIpxLV0zML5-V7--1X7-2gTJfAOV-AQx3k--sU3c1TvB1BnKCIKIKCpMSGzr-0VN--751-19-0iur2k0FkOrQBgceZgnKKMMKKSJmXxpSSprMs6rJnrUra5NX7-X10X0aOVN-1cV70c16258gfA9fJmnIMKxzyOaOs-NNNX-7lElAMryXe7-042oc-A4AKhN-7gKbcmpIrX6zrxrMzUVeVX-gocVXV-3MmVV-3NpHV4wNq3mmmrUUrMUTP77-X7--lazYV3RQ6imfrrSprs-1X9-7liMQEOxse70E6TIBmZxlxxKOa77VV0I6vXBefKMIM5Ota50cV-RW4Rw-0RW5cnK5--Om5EABpMKBhSxxs17-0V5X--H5H1-9mCaYBoxbaP70emCc2MSIBepJfIIBmVP7mnCIAACCKIlV50bxqUV6zxxpCKprzzaUKa577cWVNUrOtV17V17V7Xcc--HEP1-0mI5IF-0mLgQF-amT1YIBonIIICBgonGaOaNOWVNOWba-02AS3hKIKIJN0V-5--AByfCsV-BqE5k-6CtMgN-0D4wcDzDLQCCCBpIIAAUJmmfBnAAJonCBoomgggfABpAKCJeecme9IBnKKKrMJrSrzUSKpMKpzrtttbxpMbbqOaUwUxObzrrK6aTTTOa5550Vc155ObWaOs9--0WWbtzyNce9cc-Ne7Vcc90zbcV0ztte90byTOXeXeeeVNXeeV0RupTnClV-hngH2CCCCJpKKKppUUtzbta5-V777-X177XV1wx_ZnIKKaN-V-PnvrYCJooerSo-OzuXVTOV71MEjtggeeeggnIAACJoTUzrMUbbttyN-AEykhD--x0GZrsc-2FY2g-4o9gQCSX-CjFseBonHonBf9en9eegf9XfCIBfBpCKMMHhCCKpCKICIpOtzSMMKKIJxUbbs7VN1---VV5ObbxrKCESzUpISy0bbbse1cX5-XVcXeV6y6aTNNNfBmehCCBee19cVV-0a6bzttyUyTUtzwUtttaNNOWV-1oImQL--AGQ0CNV-x5IkxkV0IIIYXm2V7XXeyUta5UV-46fyV0C78BrT7V0S83qnAyP2IoidnCSprrSxrSzrUMSxpMxzUUSSMMMMSzSSrrSprMSpMSSxrSxxxprrrrrUrxrSUUbtaUUL----WX-5N97X9emVP97719ecX-0aNcgmme6a9eX7199e77gecVX7cXXXXXcXX77X7X9egeeXX9-2oitACsV0hAoJnEbsc1EIX0Bgeen9gf9rSaOzzWyUrzqNX9-0CE-XnxVV-4FqeV0SGIunObe-1p622T7-0JRDc-0JfGc-vK0CgggrUzaT19V-CLDDs-6Ku0CV-ALMbENV-COvBk-bLoRjSrR-cX-8pp72IJoOWV--4T3HV-STYBq--hTbPoN-6pzxnBpT0X-5q4TfCGaNV-xXFHpN7-6N_hh--2NfsB-NqBUQHeCCtzSSSzT1cX11-1CZ-NpprX17-7qMXnCMyN7c-IOb-BnaN-0Owzc2fPAlBgggf9fAHoonAABgnCKCbbaT5OWaOaTOtbaTTOaN-0PiN7-MPkJBf6tV-4fLuV-SgO9lV-phLT7tV-4gqNV-4hl5V3xiFwnA9nAROzqOaOXV-SifanVGKwWFOaOV6zzzzUUy6tztbKta56s-WrzzsN-5T4rKpppSKSKKKM-6Sk2RmmeXgeggnTUbxyTUbyOe-OMnm0a50aOV-NNOyNOxtyN-fRZugenzttuc6MRg2gooef9eemeX7XeeeA9Y9BehCIUzrMUzzbrxzttzztzUzrzqUzzbzzzbbzrzzV-9fA9eeX0XeBeeY9e7-DrA8vSzrOtaXeec-0S7u7-rS8wBhCUbttcec-bSGCgnCzaN9-BrL6QBezxyTPXV4hpYLmgfCtzxzSttX9ce-" :
		19 === bN.e8 && (ow =
			"EcCx-VQCO1iiqOLOKeeedae_ddadadadOfiveOeLeeeedadaPiuuiePPeeyeeeeOeaPadaeeydPeOedaOPLOeeeOadLOKLKKLJG4G3G4G4G3F-3GJG4G4KKG443G3G3G3G4K3K3K3GKKK3FJ40F33GK0K0K3G3F3F2nBnBnBnB-Bn-04G--BzzwEByvn-wG-BnnB2BkG44K-4KPKQyde_K-G3GKFwGPKO_O_K3J4KG4KKG4KKKJG4KJKK30304LOJG3GKKKKKQvjzuzziviueeaKaKPKKKKKKKKK3K_eOKO_OedaKaLaOevedaOGOeOeeaOaOaOeOjzvjyaPeOKKKOK43K_KKaveJGJ0-JG3G3GF3G3G43KaKF3G4aOedaOFKLK4_eee_dJK33KeaOLOaOjveeKLO_OaOaeKLPeivjeaOeOaJKGKJ4PdadafiyjedLPeueK3F-G30F3G3-3LOaOjeKLPe_O_OeaPfieieeyeaOaPOKOeedeOdada_daOdaKd_O_aOKPOKLKaKdK4LK3LTdaOdKaOK_KLPOaaO_LPKGKKK_KOaLO_aOOaaOdaPOdaO_OaKOdaPOdaPedeOJF--00LaPdeaeOfeyeiuudaueaaPdbeOeuefefuivfifujifieviivifeeid_G-04OF0-03KaPvievjizfeeLJ0-JG-KdOTvfiyviyujffviujeiufeiefivivfivvfeevivveiuueieiefeeiyejffuiuuiviuvfiifiieePeeaieieveuePdaPKJKefefefiuzzvzivviyfvnvjvzEzzjzwzzzBnzwnnk2Bwkn2zzknB-n2BnEBzyzzBzzEwnzznzzzjfzBzwzznziz2zwnBnBBkB--B2EBznEzBwnBnBzzBknEnEByywzzzzzEzz2wnzkzznEBwwEnEnEzznEzzzzzzzzEzwwEEizizizivjvjfznnzyyyvivzzwnyviuizyeyeKbifiuizzvifieeuyviuiuefie_iviiyjzvn3F3Bnw-BnBn2BnBnwnwnwnBkBBk22nEn-EeeieKdeiudaOaOPedaeePeee_KKLPOefzkzEEjzwk2B-k-kBB2yiiuieueeaeeaOOaOvzzzBzvjivjuiuyevieifiedaOeueuivivieuvfyvzvyvvuuvwzzyyvzzvjivvivvjyvznBnn2wzznwoLK-z2BknzEivePPLOOvjBwnEffeuyzefzuuujnkkGG-yzEEzBnEBnnBwnEBnznzzvzzznzvzzEBnzn-k-k-k-2-wB2B-k2-2nBB2kBBwnBw-nB-2Bk22Bw-BkknnBBBBBnBE-znznkkEnE2--kEBknBBkBBk2E-3-2Bk-k2B22BB2k-k-k2BBn-w2-32k-C3F--k-FG0G-22-2-FB--k-2-w-G32En--nB-2kKLePLdFJG3-F0033G043-l3-G3K3JK-32B3G4K4F--B--B--FGLJGJ3F03JLaeKFG--0---BFK--203FGGFG33F2nBFG3FGJ4GJ4K02GKF03-GKKG3K0JFK3G03F--G--l43--Bk--kG-FF3F03G-403G----l0----G--Bn33GJG340JG3-G4KaLKPKG-4-3F3F03-B-------G3FJ00--3KGF--0---03G0032T4mfgmegmeX7fBnJnKIEzzzzbrpzzaObtVOaNX9c9c0JN9cQfjzGG0F4NoWynBpJnKzzzV---Xc1RfMlOOvfvzwEw3GKKF-0gAIV-2OK2-3aoazBjs-pIUdyOaKaKaOfzzvgBnBF---1gInV-4OaA-BexerKESrs-V9V3q6e6dauVn3-0fPHBpMs-c-SiqWQwJ1mtRSUSKKKKKKJOzzxrROc11--TX-X7V7eeV4Meo2avi2kCK--EcNy-OUJfiLKdTzsBk-0kCPrF0fVVRjiveveiueOuveeeeaNn-n22-BG--030303K3F3B6-nnBnBrSr0a---EsTXQudeviviedazk-2-G-030K-4l1tMCkOc-57MIs-E3IhS5P-CYA-DLew--koIyA9emmfACMSrUtbzzzTTObrUtV7ge7X7eeV8QnZxddaebjwnB-30F3xzBZnMKCMzra71-7cV3wA4p_Qzzo4Ffy5yanHpIKSKMKSMSSrKKMofJppMKSKrSpSMKSzrzzrUtaOzsTN1oc5OaUzrHnCTOtaP755N5-T-NUTNN-N-5-5-N-P7X97gn9gmeee9n9meeX97cX7eVeX9cXV"
			), (new sc).se(ow)
}

function aEa() {
	this.sk = null, this.aFe = null, this.aFf = null, this.dO = function() {
		var aFg = [120, 105, 92],
			cos = [12, 12, 60],
			aFh = [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
			aFi = [140, 130, 120],
			aFj = [12, 12, 76],
			aFk = [240, 120, 1024, 30, 19, 30, 70, 8, 20, 3, 9],
			aFl = [130, 117, 106],
			aFm = [12, 12, 68],
			aFn = [270, 210, 1024, 28, 19, 33, 50, 8, 26, 3, 9];
		this.sk = new Array(bN.aEY + 1), __fx.customLobby.setMapInfo(this.sk), this.sk[0] = {
			name: L(108),
			z: 230,
			j6: 230,
			lc: 1e3,
			lZ: 2e3,
			aEe: 173
		}, this.sk[1] = {
			name: L(109),
			z: 800,
			j6: 800,
			lc: 100,
			lZ: 50,
			aEe: 43
		}, this.sk[2] = {
			name: L(110),
			z: 512,
			j6: 512,
			lc: 128,
			lZ: 32,
			aEe: 0
		}, this.sk[3] = {
			name: L(111) + " 1",
			z: 960,
			j6: 960,
			lc: 60,
			lZ: 8,
			aEe: 0
		}, this.sk[4] = {
			name: L(112),
			z: 900,
			j6: 900,
			lc: 100,
			lZ: 5,
			aEe: 0
		}, this.sk[5] = {
			name: L(113),
			z: 1e3,
			j6: 1e3,
			lc: 100,
			lZ: 40,
			aEe: 0
		}, this.sk[6] = {
			name: L(114),
			z: 1e3,
			j6: 1e3,
			lc: 100,
			lZ: 20,
			aEe: 0
		}, this.sk[7] = {
			name: L(115),
			z: 1024,
			j6: 1024,
			lc: 128,
			lZ: 32,
			aEe: 0
		}, this.sk[8] = {
			name: L(116),
			z: 820,
			j6: 820,
			lc: 200,
			lZ: 100,
			aEe: 0
		}, this.sk[9] = {
			name: L(117),
			z: 1024,
			j6: 1024,
			lc: 128,
			lZ: 32,
			aEe: 0
		}, this.sk[10] = {
			name: L(118),
			tC: aFi,
			tD: aFj,
			aEo: aFk
		}, this.sk[11] = {
			name: L(119),
			tC: aFl,
			tD: aFm,
			aEo: aFn
		}, this.sk[12] = {
			name: L(120),
			tC: aFl,
			tD: aFm,
			aEo: aFn
		}, this.sk[13] = {
			name: L(121),
			tC: aFg,
			tD: cos,
			aEo: aFh
		}, this.sk[14] = {
			name: L(122),
			tC: aFg,
			tD: cos,
			aEo: aFh
		}, this.sk[15] = {
			name: L(123),
			tC: aFi,
			tD: aFj,
			aEo: aFk
		}, this.sk[16] = {
			name: L(124),
			tC: aFi,
			tD: aFj,
			aEo: aFk
		}, this.sk[17] = {
			name: L(125),
			tC: aFg,
			tD: cos,
			aEo: aFh
		}, this.sk[18] = {
			name: L(126),
			tC: aFl,
			tD: aFm,
			aEo: aFn
		}, this.sk[19] = {
			name: L(127),
			tC: aFg,
			tD: cos,
			aEo: aFh
		}, this.sk[20] = {
			name: L(128),
			z: 1024,
			j6: 1024,
			lc: 128,
			lZ: 32,
			aEe: 0
		}, this.sk[21] = {
			name: L(111) + " 2",
			z: 940,
			j6: 940,
			lc: 80,
			lZ: 8,
			aEe: 0
		}, this.sk[bN.aEY] = {
			name: ""
		}, this.aFe = new Uint8Array(12);
		for (var a5 = 0; a5 < 10; a5++) this.aFe[a5] = a5;
		this.aFe[10] = 20, this.aFe[11] = 21, this.aFf = new Uint8Array(10);
		for (a5 = 0; a5 < 10; a5++) this.aFf[a5] = 10 + a5
	}
}

function aEb() {
	this.aFc = function() {
		for (var g3, ea, fD, aFa = a8F, aFb = bN.su, z = bN.ee, aFY = z - 1, aFZ = bN.ef - 1, fy = 0, ec = 1; ec < aFZ; ec++)
			for (fD = ec * z, ea = 1; ea < aFY; ea++) aFb[g3 = fD + ea << 2] === aFb[1 + g3] && aFb[g3] === aFb[2 + g3] && (fy++, aFa[2 + g3] = 4);
		ai.a3c = fy
	}, this.aFd = function() {
		for (var aFa = a8F, z = bN.ee, aFY = z - 1, aFZ = bN.ef - 1, id = 5, ec = 1; ec < aFZ; ec++)
			for (var fD = ec * z, ea = 1; ea < aFY; ea++) {
				var e6 = 2 + (fD + ea << 2);
				4 === aFa[e6] && (! function(e6, id) {
					var eT = 1,
						aFa = a8F,
						eV = aW.eV,
						z0 = [e6];
					aFa[e6] = id;
					for (; eT;) {
						for (var z1 = [], a5 = 0; a5 < eT; a5++)
							for (var eI = z0[a5], eW = 3; 0 <= eW; eW--) {
								var eX = eI + eV[eW];
								4 === aFa[eX] && (aFa[eX] = id, z1.push(eX))
							}
						eT = (z0 = z1).length
					}
				}(e6, id), id = Math.max((id + 1) % 256, 5))
			}
	}
}

function a12() {
	(uW = void 0 === uW ? document.createElement("canvas") : uW).width = bN.ee, uW.height = bN.ef, a16 = uW.getContext("2d", {
		alpha: !0
	}), a17 = a16.getImageData(0, 0, bN.ee, bN.ef), a8F = a17.data, b6.pP.sv(a8F)
}

function cV() {
	var ew, z, j6, max, aFp, lZ, aFr, aFs, aFt, aFu, aFv, aFw, aFx, aFy, aFq = 1e4;

	function aG5(aG4, lc, eT) {
		var a5;
		for (aFr[0] = aG4, a5 = 1; a5 < eT; a5++) aFr[a5] = aFr[a5 - 1] + lc, lc = aFr[a5] >= aFq ? (aFr[a5] = aFq - 1, -lc) : aFr[a5] < 0 ? (aFr[a5] = 0, -lc) : (lc += 16384 <= au.random() ? lZ : -lZ) < -aFp ? -aFp : aFp < lc ? aFp : lc
	}

	function aG7(ea, ec, aG8, eT) {
		(aG8 ? function(ea, ec, eT) {
			var a5;
			for (a5 = 0; a5 < eT; a5++) ew[ec * z + ea + a5] = aFr[a5]
		} : function(ea, ec, eT) {
			var a5;
			for (a5 = 0; a5 < eT; a5++) ew[ec * z + ea + a5 * z] = aFr[a5]
		})(ea, ec, eT)
	}

	function aGB(value, eT) {
		var a5, l0, e6, hT = value - aFr[eT - 1];
		if (0 != hT) {
			for (l0 = 1 + bG.ev(Math.abs(hT), eT - 1), l0 = hT < 0 ? -l0 : l0, aFr[eT - 1] = value, e6 = (e6 = eT - 1 - bG.ev(Math.abs(hT), Math.abs(l0))) < 1 ? 1 : eT - 2 < e6 ? eT - 2 : e6, a5 = eT - 2; e6 <= a5; a5--) aFr[a5] += hT - (eT - 1 -
				a5) * l0;
			(hT < 0 ? function(eT) {
				var a5;
				for (a5 = eT - 2; 1 <= a5; a5--) aFr[a5] < 0 && (aFr[a5] = -aFr[a5] - 1)
			} : function(eT) {
				var a5;
				for (a5 = eT - 2; 1 <= a5; a5--) aFr[a5] >= aFq && (aFr[a5] = 2 * aFq - aFr[a5] - 1)
			})(eT)
		}
	}

	function aGE(z0, z1, eT) {
		for (var a5 = 0; a5 < eT; a5++) z0[a5] = z1[a5]
	}

	function aGF(fC) {
		for (var a5 = 0; a5 < fC.length - 1; a5++) fC[a5] = fC[a5 + 1] - fC[a5];
		fC[fC.length - 1] = fC[fC.length - 3]
	}

	function aGG(a1x, gap, hS) {
		aFs.push(a1x), aFt.push(gap), aFu.push(hS)
	}
	this.a1 = function(a07) {
		! function(a07) {
			var a5;
			for (z = a07[0], j6 = a07[1], aFp = a07[2], lZ = a07[3], ew = new Int16Array(z * j6), max = j6 < z ? z : j6, aFr = new Int16Array(max), aFs = [], aFt = [], aFu = [], aFv = new Array(z), aFw = new Array(j6), a5 = z - 1; 0 <= a5; a5--)
				aFv[a5] = !1;
			for (a5 = j6 - 1; 0 <= a5; a5--) aFw[a5] = !1;
			aFx = new Int16Array(z), aFy = new Int16Array(j6)
		}(a07),
		function(eT) {
			var aG4 = au.random() % aFq,
				lc = au.random() % (2 * aFp + 1) - aFp;
			aG5(aG4, lc, eT)
		}(max), aGE(aFy, aFr, j6), aG7(0, 0, !0, z);
		var ea, ec, a07 = ew[0],
			eT = max,
			lc = au.random() % (2 * aFp + 1) - aFp;
		for (aG5(a07, lc, eT), aGE(aFx, aFr, z), aG7(0, 0, !1, j6), aGF(aFx), aGF(aFy), aG5(ew[z - 1], aFx[z - 1], j6), aG7(z - 1, 0, !1, j6), aG5(ew[z * (j6 - 1)], aFy[j6 - 1], z), aGB(ew[z * j6 - 1], z), aG7(0, j6 - 1, !0, z), aFv[z - 1] = aFv[
				0] = !0, aFw[j6 - 1] = aFw[0] = !0, aGG(0, z, !0), aGG(0, j6, !1), ! function() {
				var aGI, a1x;
				for (;;) {
					if (aGI = function() {
							var a5, aGI = aFs.length - 1;
							for (a5 = aGI - 1; 0 <= a5; a5--) aFt[a5] > aFt[aGI] && (aGI = a5);
							return aGI
						}(), aFt[aGI] < 5) return;
					a1x = aFs[aGI] + bG.ev(aFt[aGI], 2), (aFu[aGI] ? function(ea) {
						var eT, aGL, a5, a94 = 0,
							aGM = 0;
						for (; aGM < j6 - 1;) {
							for (a5 = a94 + 1; a5 < j6; a5++)
								if (aFw[a5]) {
									aGM = a5;
									break
								} eT = aGM - a94 + 1, aG5(ew[ea + z * a94], 0 === a94 ? aFx[ea] : aFr[aGL - 1] - aFr[aGL - 2], eT), aGB(ew[aGM * z + ea], eT), aG7(ea, a94, !1, eT), aGL = eT, a94 = aGM
						}
						aFv[ea] = !0
					} : function(ec) {
						var eT, aGL, a5, a94 = 0,
							aGM = 0;
						for (; aGM < z - 1;) {
							for (a5 = a94 + 1; a5 < z; a5++)
								if (aFv[a5]) {
									aGM = a5;
									break
								} eT = aGM - a94 + 1, aG5(ew[ec * z + a94], 0 === a94 ? aFy[ec] : aFr[aGL - 1] - aFr[aGL - 2], eT), aGB(ew[ec * z + aGM], eT), aG7(a94, ec, !0, eT), aGL = eT, a94 = aGM
						}
						aFw[ec] = !0
					})(a1x), aGG(a1x, aFs[aGI] + aFt[aGI] - a1x, aFu[aGI]), aFt[aGI] = a1x - aFs[aGI] + 1
				}
			}(), ea = 0; ea < z; ea++)
			if (!aFv[ea])
				for (ec = 0; ec < j6; ec++) aFw[ec] || ! function(ea, ec) {
					var value = ew[ec * z + ea - 1] + ew[(ec - 1) * z + ea],
						a3m = 2;
					aFv[ea + 1] && (a3m++, value += ew[ec * z + ea + 1]);
					aFw[ec + 1] && (a3m++, value += ew[(ec + 1) * z + ea]);
					ew[ec * z + ea] = bG.ev(value, a3m)
				}(ea, ec)
	}, this.aF1 = function() {
		return ew
	}, this.aEj = function() {
		ew = null
	}
}

function aBg(em, en) {
	return 0 <= em ? bG.ev(em, en) : -bG.ev(-em, en)
}

function jA(ew) {
	return ew * ew
}

function a30(em, en) {
	return en < em ? em : en
}

function a7l(em, en) {
	return em < en ? em : en
}

function a5B(em, ew, en) {
	return ew < em ? em : en < ew ? en : ew
}

function aGO(ew, eT) {
	for (var eo = bG.ev(ew + 1, 2), a5 = 0; a5 < eT; a5++) eo = bG.ev(eo + bG.ev(ew, eo), 2);
	return eo
}

function aCg(ew, eT) {
	return ew < 1 ? 0 : aGO(ew, eT)
}

function aGP(lz, m0, qY, a4v, mD, mE, qZ, aGQ) {
	return !(lz + qY <= mD || m0 + a4v <= mE || mD + qZ <= lz || mE + aGQ <= m0)
}

function aGR(lz, m0, qY, a4v, mD, mE, qZ, aGQ) {
	return lz <= mD && m0 <= mE && mD + qZ <= lz + qY && mE + aGQ <= m0 + a4v
}

function sm(ew) {
	return Math.floor(!!ew * (1 + Math.log2(ew + .5)))
}

function bm() {
	this.ev = function(em, en) {
		return Math.floor((em + .5) / en)
	}, this.aGS = function(em, en) {
		return Math.floor(em * (en + .5))
	}, this.sqrt = function(ew) {
		return ~~Math.sqrt(ew + .5)
	}, this.pow = function(e) {
		return Math.floor(Math.pow(2, e) + .5)
	}, this.on = function(value, min, max) {
		return Math.min(Math.max(value, min), max)
	}, this.aGT = function(fD, fF, fH) {
		return Math.max(Math.min(fD, fF), fH)
	}, this.aGU = function(aGV, aGW, ea, ec) {
		ea -= aGV, aGV = ec - aGW, ec = 0;
		return 0 == ea ? ec = 0 <= aGV ? Math.PI : 0 : (ec = Math.atan(aGV / ea), ec += 0 < ea ? .5 * Math.PI : 1.5 * Math.PI), ec
	}, this.log2 = function(ew) {
		return Math.floor(!!ew * (1 + Math.log2(ew + .5)))
	}, this.log10 = function(ew) {
		return Math.floor(Math.log10(ew + .5))
	}, this.aGY = function(aGZ, aGa, aGb, aGc, aGd) {
		return aGb - aGd < aGZ && aGZ < aGb + aGd && aGc - aGd < aGa && aGa < aGc + aGd
	}, this.tm = function(hM, hN) {
		return hM * hM + hN * hN
	}
}

function d3() {
	this.lB = new aGe, this.qQ = 0;
	var aGf = new Array(29);

	function aGj() {
		for (var eT = aGf.length, a5 = 0; a5 < eT; a5++) aGf[a5] = null
	}
	this.dO = function() {
		for (var aGg, aGh = document.body.firstChild; aGh;) {
			if (aGg = aGh.nextSibling, document.body.contains(aGh) && ("DIV" === aGh.tagName || "INPUT" === aGh.tagName || "BUTTON" === aGh.tagName)) try {
				document.body.removeChild(aGh)
			} catch (e) {
				console.log("error 2623: " + e)
			}
			aGh = aGg
		}
	}, this.n = function(oF, aGi, a07) {
		void 0 === aGi && (aGi = this.qQ), ba.dW = !0, 0 === oF && (0 === aU.xT() ? oF = 5 : q.r.setState(13)), this.ql(), this.qQ === oF && (aGi = aGf[oF].aGi, aGf[oF] = null), this.qQ = oF;
		var kQ = aGf[oF];
		if (!kQ || 4 === oF || 7 === oF || 8 === oF || 9 === oF || 10 === oF || 11 === oF || 13 === oF || 15 === oF || 18 === oF || 20 <= oF && oF <= 28) {
			if (0 === oF) return void aGj();
			1 === oF ? kQ = new aGk : 2 === oF ? kQ = new aGl : 3 === oF ? kQ = new aGm : 4 === oF || 9 === oF || 10 === oF || 11 === oF || 13 === oF ? kQ = a07 : 5 === oF ? kQ = new aGn : 6 === oF ? kQ = new aGo : 7 === oF ? kQ = new aGp(m.lB
					.aGq) : 8 === oF ? kQ = a07 : 12 === oF ? kQ = new aGr : 14 === oF ? kQ = new aGs : 15 === oF ? kQ = new aGp(m.lB.aGt) : 16 === oF ? kQ = new aGu : 17 === oF ? kQ = new aGv : 18 === oF ? kQ = new aGw : 19 === oF ? kQ =
				new aGx : 20 === oF ? kQ = new aGy : 21 === oF ? kQ = new aGz : 22 === oF ? kQ = new aH0 : 23 === oF ? kQ = new aH1 : 24 === oF ? kQ = new aH2 : 25 === oF ? kQ = new aH3 : 26 === oF ? kQ = new aH4 : 27 === oF ? kQ = new aH5 :
				28 === oF && (kQ = new aH6), kQ.aGi = aGi, aGf[oF] = kQ
		}
		kQ.show(a07)
	}, this.xa = function() {
		this.ur() && this.aH7(this.aBH().aGi)
	}, this.aH7 = function(oF) {
		this.ur() && (aGf[oF] ? (this.ql(), ba.dW = !0, this.qQ = oF, aGf[oF].show()) : this.n(oF))
	}, this.ql = function() {
		this.ur() && aGf[this.qQ].ql()
	}, this.s1 = function() {
		this.ur() && (aGf[this.qQ].ql(), aGj(), this.qQ = 0, q.r.setState(13))
	}, this.rE = function() {
		var kQ;
		this.ur() && (kQ = aGf[this.qQ]).rE && kQ.rE()
	}, this.resize = function() {
		if (!this.ur()) return !1;
		aGf[this.qQ].resize()
	}, this.gj = function(ea, ec) {
		var kQ;
		this.ur() && (kQ = aGf[this.qQ]).gj && kQ.gj(ea, ec)
	}, this.xp = function(ea, ec) {
		var kQ;
		this.ur() && (kQ = aGf[this.qQ]).xp && kQ.xp(ea, ec)
	}, this.yD = function() {
		var kQ;
		this.ur() && (kQ = aGf[this.qQ]).yD && kQ.yD()
	}, this.xs = function(kl, km, deltaY) {
		var kQ;
		this.ur() && (kQ = aGf[this.qQ]).xs && kQ.xs(kl, km, deltaY)
	}, this.yO = function(code) {
		var kQ;
		return !!this.ur() && ((kQ = aGf[this.qQ]).yO && kQ.yO(code), !0)
	}, this.iR = function() {
		var kQ;
		this.ur() && (kQ = aGf[this.qQ]) && kQ.iR && kQ.iR()
	}, this.ur = function() {
		return 0 < this.qQ
	}, this.aBH = function() {
		return aGf[this.qQ]
	}, this.aH8 = function(oF) {
		return aGf[oF]
	}, this.aH9 = function() {
		return aGf
	}
}

function aGp(data) {
	var aHA, aHB;
	this.show = function() {
		data.aHC && bD.aHr("account", data.qO), aHA.show(), this.resize()
	}, this.ql = function() {
		aHA.ql()
	}, this.resize = function() {
		aHA.resize(), aHB.resize()
	}, this.yO = function(eo) {
		2 === eo && aHA.r2[0].pW()
	}, aHA = new qv(data.username, [new p("⬅️ " + L(13), function() {
		bD.clear(), m.xa()
	}), new p(data.aHC ? "🔄 " + L(129) : L(130), function() {
		m.n(8, m.aBH().aGi, new qR(25, {
			qS: 0,
			qO: data.qO,
			qP: data.qP
		}))
	}, 0, 0, 1)]), aHB = new p8(aHA.r1, function() {
		var pA = [];
		pA.push(function() {
				var aHR = new os,
					aHS = (aHR.ov(L(176)), new q5({
						value: data.username,
						oF: -1
					}));
				aHS.e.readOnly = !0, aHR.p6(aHS), aHR.p6(new q0([new p(L(142), function(e) {
					return b6.pF.zf(aHS.e), b6.pF.zg(e), !0
				}).button])), data.aHC || aHR.ox(L(177));
				return aHR
			}()),
			function(pA) {
				var aHR, oy, a8T, aHj, aHY;
				data.aHC || ((aHR = new os).ov(L(178)), (oy = aHR.ox(data.aHi.length + " / 160")).style.textAlign = "center", a8T = !0, (aHj = new rG(0, 1, function(e) {
					e = e.target.value.length;
					oy.textContent = e + " / 160", 160 < e ? a8T && (a8T = !1, aHY.pY(1), aHY.button.style.color = t.ma) : a8T || (a8T = !0, aHY.pY(0), aHY.button.style.color = t.nL)
				})).e.rows = 6, aHj.e.style.fontSize = "1em", aHj.rN(data.aHi), aHR.p6(aHj), aHY = new p(L(179), function() {
					if (!a8T) return !0;
					m.n(8, m.aBH().aGi, new qR(29, {
						qS: 1,
						ow: aHj.rP().substring(0, 160)
					}))
				}, 0, 0, 1), aHR.p6(new q0([aHY.button])), 0 !== data.aHk && (aHR.p6(new q0([new p(L(1 === data.aHk ? 181 : 182), function() {
					m.n(8, m.aBH().aGi, new qR(29, {
						qS: 0,
						ow: ""
					}))
				}, 0, 0, 1).button])), aHR.ox(1 === data.aHk ? L(183, [data.aHm - 1]) : L(184, [data.aHm - 1]))), aHR.ox(L(180, [data.aHl])), pA.push(aHR))
			}(pA),
			function(pA) {
				var aHR;
				data.aHC && 0 !== data.aHk && ((aHR = new os).ov(L(178)), aHR.oz(data.aHi), aHR.p6(new q0([new p(L(165), function(e) {
					return aw.lB.a9R(0) && (b6.pF.zg(e), aw.aHW.aHe({
						qS: 5,
						qO: data.qO,
						qP: data.qP
					})), !0
				}, 0, 0, 1).button])), pA.push(aHR))
			}(pA), pA.push(function() {
				var aHR = new os;
				aHR.ov(L(131)), aHR.p1(L(132) + b6.x3.a0M(data.sB, .01, 2)), data.aHC || (aHR.ox(L(133)), aHR.ox(L(134)), aHR.ox(L(135)));
				return aHR
			}()), data.aHC && pA.push(function() {
				var aHR = new os,
					aHS = (aHR.ov(L(136)), new q5(be.dh.data[147], 1, void 0, function(e) {
						aHT(e.target.value)
					})),
					aHU = (aHR.p6(aHS), new p(L(137), function(e) {
						return aHS.e.readOnly && aw.lB.a9R(0) && (b6.pF.zg(e), aHV(), aw.aHW.aHX({
							qS: 0,
							qO: data.qO,
							qP: data.qP,
							value: bG.on(Math.floor(100 * be.dh.data[147].value), 0, 4294967295)
						})), !0
					}, 1)),
					aHY = new p(L(138), function(e) {
						return e.textContent === L(138) ? (e.textContent = L(139), aHS.e.readOnly = !0, aHU.pY(0), aHU.button.style.color = t.nL, be.pw.px(147, aHS.e.value), aHT(be.dh.data[147].value)) : aHV(), !0
					}),
					oy = (aHR.p6(new q0([aHY.button])), aHR.ox()),
					aHT = function(ew) {
						ew = isNaN(ew) ? 0 : Number(ew);
						var ew = Math.max(ew, (data.aHZ + 1) / 100),
							aHa = Math.floor(100 * Math.max(1e-4 * ew, data.aHZ / 100)) / 100;
						oy.textContent = L(140, [ew.toFixed(2), be.dh.data[105].value, aHa.toFixed(2), data.qO, (ew - aHa).toFixed(2)])
					},
					aHV = function() {
						aHY.button.textContent = L(138), aHS.e.readOnly = !1, aHU.pY(1), aHU.button.style.color = t.ma
					};
				return aHT(be.dh.data[147].value), aHR.p6(new q0([aHU.button])), aHR
			}());
		pA.push(function() {
			var aHR = new os,
				aHS = (aHR.ov(L(141)), new q5({
					value: data.qO,
					oF: -1
				}));
			return aHS.e.readOnly = !0, aHR.p6(aHS), aHR.p6(new q0([new p(L(142), function(e) {
				return b6.pF.zf(aHS.e), b6.pF.zg(e), !0
			}).button])), aHR
		}()), data.aHC || (pA.push(function() {
			var aHR = new os,
				aHb = (aHR.ov(L(143)), new q5(be.dh.data[106]));
			return aHb.e.readOnly = !0, aHb.e.type = "password", aHR.p6(aHb), aHR.p6(new q0([new p(L(144), function(e) {
				return e.textContent === L(144) ? (e.textContent = L(145), aHb.e.type = "text") : (e.textContent = L(144), aHb.e.type = "password"), !0
			}).button, new p(L(142), function(e) {
				return b6.pF.zf(aHb.e), b6.pF.zg(e), !0
			}).button])), aHR.p6(new q0([new p(L(146), function() {
				m.n(8, m.aBH().aGi, new qR(15))
			}).button])), aHR.ov(L(147), "0.8em"), aHR.ox(L(148)), aHR.ox(L(149)), aHR.ox(L(150)), aHR
		}()), pA.push(function() {
			var aHR = new os;
			return aHR.ov(L(151)), aHR.p6(new q0([new p(L(152), function() {
				m.n(6, m.aBH().aGi)
			}).button])), aHR.p6(new q0([new p(L(153), function() {
				be.pw.px(105, ""), m.n(8, m.aBH().aGi, new qR(18))
			}).button])), aHR.p6(new q0([new p(L(154) + be.dh.data[105].value, function() {
				m.n(4, 0, new o(L(155), L(156), !0, [new p("⬅️ " + L(13), function() {
					m.n(7, m.aH8(7).aGi)
				})]))
			}, t.n9).button])), aHR
		}()), pA.push(function() {
			function aHd(oF) {
				for (var a5 = 0; a5 < 2; a5++) aHc[a5].pY(0 === oF ? t.ml : 0 === a5 ? t.n9 : t.u)
			}
			var p4, aHc, aHR = new os;
			aHR.ov(L(157)), aHR.ox(L(158)), be.lB.ru();
			return aHc = [new p(L(159), function() {
				var oF = Math.min(be.dh.data[117].value, p4.p5.length - 1);
				if (!(oF < 1)) {
					p4.p5[oF].remove(), p4.p5.splice(oF, 1);
					for (var a5 = oF; a5 < p4.p5.length; a5++) p4.p5[a5].name = "" + a5;
					be.lB.rx(oF), oF = be.dh.data[117].value, p4.p5[oF].textContent = p4.p5[oF].textContent.replace("⚪", "🟢"), aHd(oF)
				}
			}, t.ml), new p(L(160), function() {
				var oF = Math.min(be.dh.data[117].value, p4.p5.length - 1);
				oF < 1 || (oF = be.lB.ry(oF), be.pw.px(105, oF.qO), be.pw.px(106, oF.password), m.n(8, m.aBH().aGi, new qR(18)))
			}, t.ml)], (p4 = new qr(be.dh.data[117], aHd)).p5[0].style.marginTop = "0.5em", aHR.p3(p4), aHR.p6(new q0([aHc[1].button])), aHR.p6(new q0([aHc[0].button])), aHR
		}()));
		return pA.push(function() {
				var aHR = new os;
				aHR.ov(L(161)), aHR.p1(L(162) + b6.x3.a0M(data.s7, .1, 1) + "<br>" + L(163) + (data.s8 + 1) + " / " + data.sA + "<br>" + L(164) + data.s9), data.aHC && (aHR.p6(new q0([new p(L(165), function(e) {
					return aw.lB.a9R(0) && (b6.pF.zg(e), aw.aHW.aHe({
						qS: 1,
						qO: data.qO,
						qP: data.qP
					})), !0
				}, 0, 0, 1).button])), aHR.ox(L(166)));
				return aHR
			}()),
			function(pA) {
				var aHR = new os,
					x6 = data.sE,
					aHn = (aHR.ov(L(185)), aHR.p1(L(186) + (x6 ? "[" + data.sC + "]" : "-")), aHR.p1(L(187) + b6.x3.a0M(x6, .001, 2)), aHR.p1(L(163) + (data.sG + 1) + " / " + data.sA), data.sH),
					aHo = (aHR.p1(L(188) + b6.x3.a0M(aHn, .01, 2)), data.sJ);
				aHR.p1(L(189) + aHo), aHR.p1(L(190) + b6.x3.a0M(aHn / Math.max(aHo, 1), .01, 2)), x6 = data.sF, aHR.ov(L(191), "0.8em"), aHR.p1("Clan: " + (x6 ? "[" + data.sD + "]" : "-")), aHR.p1(L(187) + b6.x3.a0M(x6, .001, 2)), aHn = data
					.sI, aHR.p1(L(188) + b6.x3.a0M(aHn, .01, 2)), aHo = data.sK, aHR.p1(L(189) + aHo), aHR.p1(L(190) + b6.x3.a0M(aHn / Math.max(aHo, 1), .01, 2)), pA.push(aHR)
			}(pA),
			function(pA) {
				var aHR = new os;
				aHR.ov(L(192)), aHR.p1(L(173) + data.aHp + "<br>" + L(174) + (data.aHq.length ? L(193, [data.aHq]) : L(194))), data.aHC && (aHR.p6(new q0([new p(L(195), function(e) {
					return aw.lB.a9R(0) && (b6.pF.zg(e), aw.aHW.aHe({
						qS: 4,
						qO: data.qO,
						qP: data.qP
					})), !0
				}, 0, 0, 1).button])), aHR.ox(L(196)), aHR.ox(L(197)));
				pA.push(aHR)
			}(pA), pA.push(function() {
				var aHR = new os;
				if (aHR.ov(L(172)), aHR.p1(L(173) + data.aHg + "<br>" + L(163) + (data.aHh + 1) + " / " + data.sA + "<br>" + L(174) + function(hH) {
						if (40 <= hH) return L(167);
						if (16 <= hH) return L(168);
						if (4 <= hH) return L(169);
						if (1 <= hH) return L(170);
						return L(171)
					}(data.aHh)), data.aHC) {
					aHR.p6(new q0([new p("−", function(e) {
						return aw.lB.a9R(0) && (b6.pF.zg(e), aw.aHW.aHe({
							qS: 3,
							qO: data.qO,
							qP: data.qP
						})), !0
					}, 0, 0, 1).button, new p("+", function(e) {
						return aw.lB.a9R(0) && (b6.pF.zg(e), aw.aHW.aHe({
							qS: 2,
							qO: data.qO,
							qP: data.qP
						})), !0
					}, 0, 0, 1).button]));
					for (var a5 = 0; a5 < 2; a5++) aHR.ot[0].q2[a5].style.fontSize = "1.6em";
					aHR.ox(L(175))
				}
				return aHR
			}()), pA
	}())
}

function aH0() {
	var aHs, aHt, aHv, pA, aHu = a7.data;

	function aHw() {
		aHy(), 2 !== aHu.a1W && (aHu.a1Y = null), m.aH9()[19] = null, m.xa()
	}

	function aHy() {
		2 === aHu.a1W ? (b6.pP.z4(aHv.rP(), aHu.a1Y, 255), b6.pP.max(aHu.a1Y) || (aHu.a1W = 0)) : 1 !== aHu.a1W || aHu.a1X || (aHu.a1W = 0)
	}
	this.show = function() {
		aHs.show(), this.resize()
	}, this.ql = function() {
		aHs.ql()
	}, this.resize = function() {
		aHs.resize(), aHt.resize()
	}, this.yO = function(eo) {
		2 === eo && aHs.r2[0].pW()
	}, aHs = new qv(L(198), [new p("⬅️ " + L(13), aHw)]), aHt = new p8(aHs.r1, (function(pA) {
		var aHR = new os;
		aHR.ov(L(199)), aHR.p3(new qr({
			qu: [L(200), L(201), L(202)],
			value: aHu.a1W
		}, function(oF) {
			aHy(), 2 !== oF || aHu.a1Y || (aHu.a1Y = new Uint8Array(a7.eQ)), aHu.a1W = oF, m.n(22)
		})), pA.push(aHR)
	}(pA = []), function(pA) {
		var aHR;
		1 === aHu.a1W && ((aHR = new os).ov("Value"), aHR.p6(new q5({
			oF: -1,
			value: aHu.a1X
		}, 1, 0, function(e) {
			var value = bG.on(Math.floor(e.target.value), 0, 255);
			e.target.value = aHu.a1X = value
		})), pA.push(aHR))
	}(pA), function(pA) {
		var aHR;
		2 === aHu.a1W && ((aHR = new os).ov("Data"), (aHv = new rG(0, 1, 0, 1)).rN(b6.x3.a0T(aHu.a1Y, 4)), aHR.p6(aHv), pA.push(aHR))
	}(pA), pA))
}

function aH3() {
	var aHs, aHt, aHv, aHu = a7.data;

	function aHw() {
		aHy(), 3 !== aHu.k1 || b6.pP.ys(aHu.k3) || (aHu.k1 = 0), 3 !== aHu.k1 && (aHu.k3 = null), m.aH9()[19] = null, m.xa()
	}

	function aHy() {
		3 === aHu.k1 && b6.pP.z4(aHv.rP(), aHu.k3, a8.jq.length - 1)
	}

	function aI3(pA, oF) {
		var aHR = new os,
			value = (aHR.ov(oF < 0 ? L(37) : L(36) + " " + bb.wZ[oF % 9]), 0 <= oF && (aHR.p1(L(205) + ": " + aHu.tc[oF]).style.marginBottom = "1em"), oF < 0 ? aHu.k7 : aHu.k4[oF]);
		aHR.p3(new qr({
			qu: a8.jq,
			value: value
		}, function(k2) {
			oF < 0 ? aHu.k7 = k2 : aHu.k4[oF] = k2
		})), pA.push(aHR)
	}
	this.show = function() {
		aHs.show(), this.resize()
	}, this.ql = function() {
		aHs.ql()
	}, this.resize = function() {
		aHs.resize(), aHt.resize()
	}, this.yO = function(eo) {
		2 === eo && aHs.r2[0].pW()
	}, aHs = new qv(L(37), [new p("⬅️ " + L(13), aHw)]), aHt = new p8(aHs.r1, function() {
		var pA = [];
		if (function(pA) {
				var aHR = new os,
					qu = (aHR.ov(L(199)), [L(201), L(203), L(204), L(202)]),
					value = aHu.k1;
				0 === aHu.a0q && (value = Math.min(value, 2), qu.splice(2, 1));
				aHR.p3(new qr({
					qu: qu,
					value: value
				}, function(oF) {
					aHy(), aHu.k1 = oF, 0 === aHu.a0q && 2 === oF && (aHu.k1 = 3), 3 !== aHu.k1 || aHu.k3 || (aHu.k3 = new Uint8Array(a7.eQ)), 2 !== aHu.k1 || aHu.k4 || (aHu.k4 = new Uint8Array(9)), m.n(25)
				})), pA.push(aHR)
			}(pA), 0 === aHu.k1) aI3(pA, -1);
		else if (2 === aHu.k1)
			for (var a5 = 0; a5 < aHu.tc.length; a5++) aHu.tc[a5] && aI3(pA, a5);
		else 3 === aHu.k1 && ! function(pA) {
			var aHR = new os;
			aHR.ov("Data"), (aHv = new rG(0, 1, 0, 1)).rN(b6.x3.a0T(aHu.k3, 8)), aHR.p6(aHv), pA.push(aHR)
		}(pA);
		return pA
	}())
}

function aI4(data) {
	var aHA, aI5, aI6, a99, aI7, aI8, aI9, colors, aIA, aIB, aIC = 0,
		aID = 0,
		aIE = !1,
		aIF = !1,
		aIG = [1, 5, 60, 240, 1440, 10080, 43200];

	function aIh(kl, km) {
		! function(kl, km) {
			return aI5 < kl && kl < aI5 + a99 && aI6 < km && km < aI6 + aI7
		}(aIC = kl, aID = km) ? (aIE && (ba.dW = !0), aIE = !1) : (aIE = !0, ba.dW = !0)
	}
	this.show = function() {
		aIF = be.dh.data[127].value, aHA.show(), this.resize()
	}, this.ql = function() {
		aHA.ql()
	}, this.resize = function() {
		aHA.resize();
		var eo = at.pL,
			rC = aHA.r6(),
			aIP = eo * rC.rA,
			eo = eo * rC.r7;
		aI8 = b6.pF.qn(.06), aI9 = b6.pF.qn(.04), aI5 = b6.pF.qn(.06), aI6 = eo + aI8, a99 = at.z - aI5 - aI9, aI7 = aIP + eo - aI6 - aI9
	}, this.rE = function() {
		aHA.rE(),
			function() {
				var a5, aIM, fy, ea, em, fC = data.data,
					aIS = 1,
					aIT = .125,
					aIU = aIF ? 65536 : 0;
				for (a5 = 0; a5 < fC.length; a5++)
					for (aIM = fC[a5].aIM, fy = aIM.length, aIS = Math.max(fy, aIS), em = 0; em < fy; em++) aIT = Math.max(aIM[em], aIT), aIU = Math.min(aIM[em], aIU);
				var m0 = aI6 + aI7,
					uM = aI7 / (aIT - aIU),
					uL = 1 / (aIS - 1);
				for (rF.lineWidth = bX.vK, a5 = 0; a5 < fC.length; a5++) {
					for (aIM = fC[a5].aIM, fy = aIM.length, ea = aI5, rF.beginPath(), rF.moveTo(ea + a99, m0 - uM * (aIM[fy - 1] - aIU)), em = fy - 2; 0 <= em; em--) rF.lineTo(ea + uL * em * a99, m0 - uM * (aIM[em] - aIU));
					rF.strokeStyle = colors[a5], rF.stroke()
				}(function(aIU, aIT, m0, uM) {
					rF.font = b6.pF.qW(0, .25 * aI5), b6.pF.textBaseline(rF, 1), b6.pF.textAlign(rF, 2), rF.fillStyle = colors[0];
					for (var ea = .92 * aI5, a5 = 0; a5 < 3; a5++) {
						var ew = aIU + a5 * (aIT - aIU) / 2;
						rF.fillText((ew / 1e3).toFixed(3), ea, m0 - uM * (ew - aIU))
					}
				})(aIU, aIT, m0, uM),
				function(aIS) {
					var ec = aI6 + aI7 + .15 * aI9;
					rF.font = b6.pF.qW(0, Math.min(.4 * aI9, .028 * at.z)), b6.pF.textBaseline(rF, 0), b6.pF.textAlign(rF, 2), rF.fillStyle = colors[0], rF.fillText(b6.yj.zU(aIA), aI5 + a99, ec), b6.pF.textAlign(rF, 0), rF.fillText(b6.yj.zU(
						new Date(aIB.getTime() - 6e4 * (aIS - 1) * aIG[data.aIL])), aI5, ec)
				}(aIS),
				function(aIS, aIU, aIT) {
					if (aIE && !(aIS < 2)) {
						for (var a53, oF = (aIC - aI5) / a99 * (aIS - 1), ky = Math.floor(oF), kz = Math.floor(1 + oF), aIX = oF - ky, aIY = 1e5, aIZ = -1, aIa = -1, aIb = aIT - (aIT - aIU) * (aID - aI6) / aI7, fC = data.data, a5 = 0; a5 < fC
							.length; a5++) {
							var aFK, aIM = fC[a5].aIM;
							aIM.length <= kz || (aIM = aIM[ky] + aIX * (aIM[kz] - aIM[ky]), (aFK = Math.abs(aIb - aIM)) < aIY && (aIY = aFK, aIZ = a5, aIa = aIM))
						} - 1 !== aIZ && (aIT = aI6 + aI7 - (aIa - aIU) / (aIT - aIU) * aI7, rF.lineWidth = .5 * bX.vK, rF.strokeStyle = colors[aIZ], rF.beginPath(), rF.moveTo(aI5, aIT), rF.lineTo(aIC, aIT), rF.lineTo(aIC, aI6 + aI7), rF
						.stroke(), rF.beginPath(), rF.arc(aIC, aIT, .1 * aI5, 0, 2 * Math.PI), rF.fillStyle = colors[aIZ], rF.fill(), aIU = aI6 + aI7 + .15 * aI9, b6.pF.textAlign(rF, 1), a53 = aIS - 2 < oF ? (a53 = aIB.getTime() - 6e4 * aIG[
								data.aIL], new Date(a53 + (oF - (aIS - 2)) * (aIA.getTime() - a53))) : new Date(aIB.getTime() - 6e4 * (aIS - oF - 1) * aIG[data.aIL]), aIS = b6.yj.zU(a53), oF = b6.pF.measureText(aIS), a53 = bG.on(aIC, aI5 +
								.5 * oF, aI5 + a99 - .5 * oF), rF.fillStyle = b6.color.mS(70, 50, 20), rF.fillRect(a53 - .52 * oF, aI6 + aI7, 1.04 * oF, .55 * aI9), rF.fillStyle = colors[0], rF.fillText(aIS, a53, aIU), rF.font = b6.pF.qW(0,
								.25 * aI5), b6.pF.textBaseline(rF, 1), b6.pF.textAlign(rF, 2), a53 = .92 * aI5, aIS = (aIa / 1e3).toFixed(3), oF = b6.pF.measureText(aIS), aIU = a53 - 1.04 * oF, rF.fillStyle = b6.color.mS(70, 50, 20), rF
							.fillRect(aIU, aIT - .1625 * aI5, aI5 - aIU, .275 * aI5), rF.fillStyle = colors[aIZ], rF.fillText(aIS, a53, aIT))
					}
				}(aIS, aIU, aIT)
			}(), rF.lineWidth = bX.vK, rF.strokeStyle = t.ma, rF.beginPath(), rF.moveTo(aI5, aI6), rF.lineTo(aI5, aI6 + aI7), rF.lineTo(aI5 + a99, aI6 + aI7), rF.stroke();
		var a5, fontSize = .5 * aI8,
			fC = (rF.font = b6.pF.qW(0, fontSize), b6.pF.textBaseline(rF, 1), b6.pF.textAlign(rF, 0), data.data),
			eT = fC.length,
			ec = aI6 - .5 * aI8,
			ow = "";
		for (a5 = 0; a5 < eT; a5++) ow += fC[a5].name + "  ";
		ow = ow.trim();
		var aIe = b6.pF.measureText(ow),
			ea = .5 * (at.z - aIe);
		for (aIe > at.z && (ea = 0, rF.font = b6.pF.qW(0, at.z / aIe * fontSize)), a5 = 0; a5 < eT; a5++) rF.fillStyle = colors[a5], rF.fillText(fC[a5].name, ea, ec), ea += b6.pF.measureText(fC[a5].name + "  ")
	}, this.gj = function(kl, km) {
		aIh(kl, km)
	}, this.xp = function(kl, km) {
		aIh(kl, km)
	}, this.yO = function(eo) {
		2 === eo && aHA.r2[0].pW()
	};
	var a5, e1, zS, k2, eW = data.data,
		eT = eW.length,
		max = 1;
	for (a5 = 0; a5 < eT; a5++) max = Math.max(max, eW[a5].aIM.length);
	for (a5 = 0; a5 < eT; a5++)
		for (; eW[a5].aIM.length < max;) eW[a5].aIM.unshift(0);
	e1 = new Date, zS = 6e4 * e1.getTimezoneOffset(), k2 = e1.getTime() - zS, aIA = new Date(k2), 6 === data.aIL ? function(e1, zS) {
		var aIO = e1.getUTCFullYear(),
			e1 = e1.getUTCMonth() + 1;
		aIB = e1 < 12 ? new Date(Date.UTC(aIO, e1) - zS) : new Date(Date.UTC(aIO + 1, 0) - zS)
	}(e1, zS) : (zS = 6e4 * aIG[data.aIL], aIB = data.aIL <= 4 ? new Date(k2 + zS - e1.getTime() % zS) : new Date(k2 + zS - (e1.getTime() + 2592e5) % zS)), k2 = b6.color, colors = [t.ma, k2.mS(255, 0, 0), k2.mS(0, 200, 0), k2.mS(80, 80, 255), k2
		.mS(255, 255, 0), k2.mS(255, 0, 255), k2.mS(0, 255, 255), k2.mS(255, 140, 0), k2.mS(128, 128, 128), k2.mS(0, 255, 140)
	], aHA = new qv(L(206) + ", " + ["M1", "M5", "H1", "H4", "D1", "W1", "MN"][data.aIL] + ", " + b6.yj.zR(aIA), [new p("⬅️ " + L(13), function() {
		m.lB.a8Z()
	}), new p(L(207), function() {
		m.n(14)
	})], !1)
}

function aGs() {
	var aHA, aHB, pA;
	this.show = function() {
		aHA.show(), this.resize()
	}, this.ql = function() {
		aHA.ql()
	}, this.resize = function() {
		aHA.resize(), aHB.resize()
	}, this.yO = function(eo) {
		2 === eo && aHA.r2[0].pW()
	}, aHA = new qv(L(208), [new p("⬅️ " + L(13), function() {
		m.aH7(13)
	})]), aHB = new p8(aHA.r1, ((pA = []).push(function() {
		var aHR = new os,
			aHY = (aHR.ov(L(209)), aHR.ox(L(210)), new p(L(211), function() {
				be.pw.px(130, 0), m.lB.aIm()
			}, 0, 0, 1)),
			aHS = new q5(be.dh.data[126], 0, function() {
				aHY.button.click()
			});
		return aHR.p6(aHS), aHS.e.placeholder = "a,b,c", aHS.e.style.marginTop = "0.5em", aHR.p6(new q0([aHY.button])), aHR
	}()), pA.push(function() {
		var aHR = new os,
			aHY = new p(L(211), function() {
				be.pw.px(130, 1), m.lB.aIm()
			}, 0, 0, 1),
			aIn = new q5(be.dh.data[129], 1, function() {
				aIn.e.focus()
			}),
			aIo = new q5(be.dh.data[128], 1, function() {
				aHY.button.click()
			});
		return aHR.ov(L(212)), aHR.p6(aIo), aIo.e.style.marginBottom = "0.5em", aHR.ov(L(213)), aHR.p6(aIn), aHR.p6(new q0([aHY.button])), aHR
	}()), pA.push(function() {
		var aHR = new os;
		return aHR.ov(L(214)), be.dh.data[125].qu = ["M1", "M5", "H1", "H4", "D1", "W1", "MN"], aHR.p3(new qr(be.dh.data[125])), aHR
	}()), pA.push(function() {
		var aHR = new os;
		return aHR.ov(L(215)), aHR.p6(new ps(be.dh.data[127], L(216))), aHR
	}()), pA))
}

function aGr() {
	var aHA, aIp, a99, aIq, a9A, a9B, colors = [0, 0, 0],
		aIr = -1;

	function a9I(a5) {
		var aIu = aIp.ec + a5 * (bX.gap + a9B);
		rF.fillStyle = "rgb(" + (0 === a5 ? 150 : 2 === a5 ? 30 : 0) + "," + (1 === a5 ? 130 : 2 === a5 ? 30 : 0) + "," + (2 === a5 ? 220 : 0) + ")", rF.fillRect(aIq, aIu, colors[a5] * a9A, a9B), rF.strokeStyle = t.ma, rF.strokeRect(aIq, aIu, a9A,
			a9B), rF.fillStyle = t.ma, rF.font = b6.pF.qW(0, .32 * a9B), b6.pF.textBaseline(rF, 1), b6.pF.textAlign(rF, 0), rF.fillText(L(0 === a5 ? 219 : 1 === a5 ? 220 : 221) + aIs(a5), aIq + bX.gap, aIu + .53 * a9B)
	}

	function aIs(a5, aIv) {
		return aIv = aIv || 256, bG.on(Math.floor(aIv * colors[a5]), 0, aIv - 1)
	}

	function yK(kl, km) {
		return !(kl < aIq || km < aIp.ec || kl > aIp.ea + aIp.z || km > aIp.ec + aIp.j6)
	}
	this.show = function() {
		var ew = be.dh.data[121].value;
		colors[0] = (ew >> 12) / 63, colors[1] = (ew >> 6 & 63) / 63, colors[2] = (63 & ew) / 63, aHA.show(), this.resize()
	}, this.ql = function() {
		be.pw.px(121, (aIs(0, 64) << 12) + (aIs(1, 64) << 6) + aIs(2, 64)), aHA.ql()
	}, this.resize = function() {
		aHA.resize(), aIp.resize();
		var eo = at.pL,
			rC = aHA.r6(),
			aIt = (aIp.ec = Math.max(aIp.ec, eo * rC.r7 + bX.gap), eo * rC.rA - 2 * bX.gap);
		aIp.j6 = Math.min(aIp.j6, aIt), aIp.z = 2 * aIp.j6, aIp.ec = eo * rC.r7 + .5 * (eo * rC.rA - aIp.j6), aIp.ea = .5 * (at.z - aIp.z), a99 = .25 * aIp.z, aIq = aIp.ea + a99 + bX.gap, a9A = aIp.z - a99 - bX.gap, a9B = (aIp.j6 - 2 * bX.gap) /
			3
	}, this.rE = function() {
		var hH, qm, en;
		aHA.rE(), rF.lineWidth = bX.vK, hH = aIs(0), qm = aIs(1), en = aIs(2), rF.fillStyle = "rgb(" + hH + "," + qm + "," + en + ")", rF.fillRect(aIp.ea, aIp.ec, a99, aIp.j6), rF.strokeStyle = t.ma, rF.strokeRect(aIp.ea, aIp.ec, a99, aIp.j6), rF
			.fillStyle = hH + qm + en < 306 && qm < 150 ? t.ma : t.mR, b6.pF.textBaseline(rF, 1), b6.pF.textAlign(rF, 1), rF.font = b6.pF.qW(0, .1 * aIp.j6), rF.rotate(-Math.PI / 2), rF.fillText(L(218), -aIp.ec - .5 * aIp.j6, aIp.ea + .5 * a99),
			rF.setTransform(1, 0, 0, 1, 0, 0), a9I(0), a9I(1), a9I(2)
	}, this.gj = function(kl, km) {
		yK(kl, km) && (aIr = bG.on(Math.floor((km - aIp.ec) / (a9B + .75 * bX.gap)), 0, 2), colors[aIr] = bG.on((kl - aIq) / a9A, 0, 1), ba.dW = !0)
	}, this.xp = function(kl) {
		-1 !== aIr && (colors[aIr] = bG.on((kl - aIq) / a9A, 0, 1), ba.dW = !0)
	}, this.xs = function(kl, km, deltaY) {
		yK(kl, km) && (kl = bG.on(Math.floor((km - aIp.ec) / (a9B + .75 * bX.gap)), 0, 2), colors[kl] = bG.on(colors[kl] + (1 - 2 * (0 < deltaY)) / 256, 0, 1), ba.dW = !0)
	}, this.yD = function() {
		0 <= aIr && (aIr = -1, ba.dW = !0)
	}, this.yO = function(eo) {
		2 === eo && aHA.r2[0].pW()
	}, aHA = new qv(L(217), [new p("⬅️ " + L(13), function() {
		m.lB.a8Z()
	})], !1), aIp = new pn([.5, .25], [.5, .5], 1)
}

function aGz() {
	var aHs, aHt, aHv, pl, aHu = a7.data;

	function aHw() {
		aHy(), 1 !== aHu.a1O && (aHu.a1Q = null), m.aH9()[19] = null, m.xa()
	}

	function aIw() {
		aHy(), m.n(21)
	}

	function aHy() {
		1 === aHu.a0q ? a7.a0k.a0v() : 0 === aHu.a0q && 1 === aHu.a1O && b6.pP.z4(aHv.rP(), aHu.a1Q, 262143)
	}
	this.show = function() {
		aHs.show(), this.resize()
	}, this.ql = function() {
		aHs.ql()
	}, this.resize = function() {
		aHs.resize(), aHt.resize()
	}, this.yO = function(eo) {
		2 === eo && aHs.r2[0].pW()
	}, pl = [new p("⬅️ " + L(13), aHw)], 1 === aHu.a0q && pl.push(new p(L(222), aIw, 1, 1)), aHs = new qv(L(223), pl), aHt = new p8(aHs.r1, (function(pA) {
		var aHR = new os;
		aHR.ov(L(199)), 0 === aHu.a0q && (aHR.p3(new qr({
			qu: [L(224), L(202)],
			value: aHu.a1O
		}, function(oF) {
			aHy(), aHu.a1O = oF, 1 !== aHu.a1O || aHu.a1Q && aHu.a1Q.length === a7.eQ || (aHu.a1Q = new Uint32Array(a7.eQ)), m.n(21)
		})), aHR.p6(new q3));
		aHR.p6(new ps({
			value: aHu.a1R
		}, L(225), function(value) {
			aHu.a1R = value
		})), pA.push(aHR)
	}(pl = []), 0 === aHu.a0q ? 1 === aHu.a1O && function(pA) {
		var aHR = new os;
		aHR.ov("Data"), (aHv = new rG(0, 1, 0, 1)).rN(b6.x3.a0T(aHu.a1Q, 1)), aHR.p6(aHv), pA.push(aHR)
	}(pl) : (a7.a0k.a0v(), pl.push(function() {
		var aHR = new os;
		aHR.ov(L(205));
		for (var a5 = 0; a5 < bb.wZ.length; a5++) {
			var k2 = (a5 + 1) % bb.wZ.length,
				e = aHR.p1((0 == k2 ? "" : "Team ") + bb.wZ[k2]);
			a5 && (e.style.marginTop = "0.5em"), aHR.p6(new q5({
				oF: -1,
				value: aHu.tc[k2]
			}, 1, 0, function(e) {
				aHs.r2[1].pY(0);
				var a0x = bG.on(Math.floor(e.target.value), 0, 512);
				e.target.value = a0x, aHu.tc[e.target.aIy] = a0x
			})).e.aIy = k2
		}
		return aHR
	}())), pl))
}

function qR(id, a07) {
	var aHA, aIz;

	function aJ3() {
		aIz.pB.innerHTML += "<br>" + L(228)
	}

	function aJ2() {
		b8.a1(48), b8.a2(24, Math.floor(bG.pow(24) * Math.random())), b8.a2(24, Math.floor(bG.pow(24) * Math.random())), bC.dO(b8.a6), be.pw.px(110, bA.qT.qU(bA.qT.qV(8))), aw.aHW.aJI()
	}
	this.aJ0 = !0, this.aJ1 = id, this.show = function() {
		aHA.show(), this.resize(), 15 === id ? (aw.lB.a9X(0, id) ? aJ2 : aJ3)() : 16 === id ? aw.lB.a9X(0, id) ? aw.a8W.aJ4(2) : aJ3() : 17 === id ? aw.lB.a9X(0, id) ? aw.a8W.aJ4(3) : aJ3() : 18 === id ? (aw.lB.close(0, 3253), aw.lB.a9X(0, id),
				aJ3()) : 20 === id ? aw.lB.a9X(0, id) ? aw.aHW.aJ5(a07) : aJ3() : 21 === id ? aw.lB.a9X(0, id) ? aw.aJ6.aJ7(a07.qh, a07.qi, a07.qj) : aJ3() : 22 === id ? aw.lB.a9X(0, id) ? aw.aJ6.aJ8(a07.qh, a07.aJ9, a07.aJA) : aJ3() : 23 ===
			id ? aw.lB.a9X(0, id) ? aw.aJ6.aJB(a07.aIL, a07.wz) : aJ3() : 24 === id ? aw.lB.a9X(0, id) ? aw.aJ6.aJC(a07.aIL, a07.qi, a07.qj) : aJ3() : 25 === id ? aw.lB.a9X(0, id) ? aw.aHW.aHe(a07) : aJ3() : 28 === id ? aw.lB.a9X(0, id) ? aw.aJ6
			.aJD(a07.qh, a07.aJ9, a07.aJA) : aJ3() : 29 === id && (aw.lB.a9X(0, id) ? aw.aHW.aJE(a07) : aJ3())
	}, this.aJF = function() {
		15 === id ? aJ2() : 16 === id ? aw.a8W.aJ4(2) : 17 === id ? aw.a8W.aJ4(3) : 18 === id ? m.n(8, this.aGi, new qR(16)) : 20 === id ? aw.aHW.aJ5(a07) : 21 === id ? aw.aJ6.aJ7(a07.qh, a07.qi, a07.qj) : 22 === id ? aw.aJ6.aJ8(a07.qh, a07.aJ9,
			a07.aJA) : 23 === id ? aw.aJ6.aJB(a07.aIL, a07.wz) : 24 === id ? aw.aJ6.aJC(a07.aIL, a07.qi, a07.qj) : 25 === id ? aw.aHW.aHe(a07) : 28 === id ? aw.aJ6.aJD(a07.qh, a07.aJ9, a07.aJA) : 29 === id ? aw.aHW.aJE(a07) : 1e3 === id && (
			this.aJ1 = id = 25, aw.aHW.aHe(a07))
	}, this.aJG = function(code, bj, data) {
		!bj && code !== id || (16 === code ? m.n(7, this.aGi) : 17 === code ? (aw.lB.close(0, 3252), be.lB.rx(0), be.dh.data[117].qu && 0 < be.dh.data[117].qu.length ? (bj = be.lB.ry(0), be.pw.px(105, bj.qO), be.pw.px(106, bj.password), m.n(8,
			this.aGi, new qR(16))) : (be.pw.px(105, ""), m.lB.a8Z())) : 21 === code ? m.n(10, this.aGi, new aJH(data)) : 23 === code ? m.n(13, 0, new aI4({
			data: data,
			aIL: a07.aIL
		})) : 25 === code && (m.lB.aGt.qO = a07.qO, m.n(15, this.aGi)))
	}, this.ql = function() {
		aHA.ql()
	}, this.resize = function() {
		aHA.resize(), aIz.resize()
	}, this.yO = function(eo) {
		2 === eo && aHA.r2[0].pW()
	}, aHA = new qv(L(226), [new p("⬅️ " + L(13), function() {
		m.lB.a8Z()
	})]), aIz = new py(aHA.r1, L(227))
}

function aGx() {
	var aHs, aHt, pA, aHu = a7.data;

	function aJL() {
		var fy;
		1 === aHu.a0q ? (aHu.tc || (aHu.tc = new Uint16Array([0, 1, 1, 0, 0, 0, 0, 0, 0]), a7.a0k.a0v()), fy = b6.pP.yy(aHu.tc, 0), aHu.a0t = fy) : (2 === aHu.k1 && (aHu.k1 = 0), 1 === aHu.tP && (aHu.tP = 0))
	}

	function aHw() {
		m.lB.aJN[0] = aHs.r1.scrollTop, 1 !== aHu.a0q && (aHu.tc = null), aJO(), aHu.hE = null, m.n(5, 5)
	}

	function aJO() {
		b5.oU.dO(), be.pw.px(156, b5.a1B.vj())
	}

	function aJJ() {
		aHu.a0p = 0, aJO(), a7.a0k.a1m(), aU.a9l(), a7.a0k.a1j(), aHu.hE = 2 === aHu.a1H ? bN.st : null, a7.a0n(), a7.a0m = 1
	}

	function aJb() {
		aJL();
		for (var fC = [aJR(), aJS(), aJT()], a5 = 3; a5 < 6; a5++) aHt.pB.removeChild(aHt.pC[a5].ou), aHt.pC[a5] = fC[a5 - 3], aHt.pB.appendChild(aHt.pC[a5].ou);
		aHt.resize()
	}

	function aJR() {
		var aJc, aHR = new os;
		return aHR.ov(L(223)), aJc = 0 === aHu.a0q ? [L(224), L(202)][aHu.a1O] : aHu.a0t + " Team" + (1 === aHu.a0t ? "" : "s"), aHR.p1(aJc), aHR.p6(new q0([new p(L(232), function() {
			m.n(21)
		}).button])), aHR
	}

	function aJS() {
		var aHR = new os,
			fC = (aHR.ov(L(37)), [L(201) + ": " + a8.jq[aHu.k7], L(203), L(204), L(202)]);
		return aHR.p1(fC[aHu.k1]), aHR.p6(new q0([new p(L(232), function() {
			m.n(25)
		}).button])), aHR
	}

	function aJT() {
		var aHR = new os,
			fC = (aHR.ov("Spawning"), [L(224), L(234), L(202)]);
		return aHR.p1(fC[aHu.tP]), aHR.p6(new q0([new p(L(232), function() {
			m.n(24)
		}).button])), aHR
	}
	this.show = function() {
		aHs.show(), this.resize(), aHs.r1.scrollTop = m.lB.aJN[0]
	}, this.ql = function() {
		aHs.ql()
	}, this.resize = function() {
		aHs.resize(), aHt.resize()
	}, this.yO = function(eo) {
		2 === eo && aHs.r2[0].pW()
	}, aHs = new qv("🔧 " + L(229), [new p("⬅️ " + L(13), aHw), new p(L(230), aJJ)]), aJL(), aHu.hE || (2 === aHu.a1H ? aHu.hE = bN.st : 1 === aHu.a1H ? aHu.hE = bN.aAr(bN.a1k(aHu), 0).st : (aHu.a1H = 0, aHu.a1M = aHu.e9 = 1, aHu.hE = bN.aAr(bN
		.a1k(aHu), aHu.a1K).st)), aHt = new p8(aHs.r1, (function(pA) {
		var aHR = new os,
			zC = (aHR.ov(L(231)), aHu.hE);
		zC.style.width = "100%", aHR.p6({
			e: zC
		}), aHR.p6(new q0([new p(L(232), function() {
			m.n(20)
		}).button])), pA.push(aHR)
	}(pA = []), function(pA) {
		var aHR = new os;
		aHR.ov(L(205)), aHR.p6(new q5({
			oF: -1,
			value: aHu.a0x
		}, 1, 0, function(e) {
			var a0x = bG.on(Math.floor(e.target.value), 1, 512);
			e.target.value = aHu.a0x = a0x, 1 === aHu.a0q && (e = b6.pP.yy(aHu.tc, 0), a7.a0k.a0v(), b6.pP.yy(aHu.tc, 0) !== e) && aJb()
		})), pA.push(aHR)
	}(pA), function(pA) {
		var aHR = new os;
		aHR.ov(L(233)), aHR.p3(new qr({
			qu: ["Battle Royale", "Teams"],
			value: aHu.a0q
		}, function(oF) {
			aHu.a0q !== oF && (aHu.a0q = oF, aJb())
		})), pA.push(aHR)
	}(pA), pA.push(aJR()), pA.push(aJS()), pA.push(aJT()), function(pA) {
		var aHR = new os,
			fC = (aHR.ov(L(235)), [L(236), L(237), L(202)]);
		aHR.p1(fC[aHu.a1T]), aHR.p6(new q0([new p(L(232), function() {
			m.n(23)
		}).button])), pA.push(aHR)
	}(pA), function(pA) {
		var aHR = new os,
			fC = (aHR.ov(L(198)), [L(200), L(201) + ": " + aHu.a1X, L(202)]);
		aHR.p1(fC[aHu.a1W]), aHR.p6(new q0([new p(L(232), function() {
			m.n(22)
		}).button])), pA.push(aHR)
	}(pA), function(pA) {
		var aHR = new os,
			fC = (aHR.ov(L(238)), [L(200), L(201) + ": " + aHu.a1a, L(202)]);
		aHR.p1(fC[aHu.a1Z]), aHR.p6(new q0([new p(L(232), function() {
			m.n(26)
		}).button])), pA.push(aHR)
	}(pA), function(pA) {
		var aHR = new os,
			fC = (aHR.ov(L(239)), [L(200), L(201) + ": " + aHu.a1d, L(202)]);
		aHR.p1(fC[aHu.a1c]), aHR.p6(new q0([new p(L(232), function() {
			m.n(27)
		}).button])), pA.push(aHR)
	}(pA), function(pA) {
		var aHR = new os,
			fC = (aHR.ov(L(240)), [L(200), L(201) + ": " + aHu.a1g, L(202)]);
		aHR.p1(fC[aHu.a1f]), aHR.p6(new q0([new p(L(232), function() {
			m.n(28)
		}).button])), pA.push(aHR)
	}(pA), pA))
}

function aH5() {
	var aHs, aHt, aHv, pA, aHu = a7.data;

	function aHw() {
		aHy(), 2 !== aHu.a1c && (aHu.a1e = null), m.aH9()[19] = null, m.xa()
	}

	function aHy() {
		2 === aHu.a1c && b6.pP.z4(aHv.rP(), aHu.a1e, 255)
	}
	this.show = function() {
		aHs.show(), this.resize()
	}, this.ql = function() {
		aHs.ql()
	}, this.resize = function() {
		aHs.resize(), aHt.resize()
	}, this.yO = function(eo) {
		2 === eo && aHs.r2[0].pW()
	}, aHs = new qv(L(239), [new p("⬅️ " + L(13), aHw)]), aHt = new p8(aHs.r1, (function(pA) {
		var aHR = new os;
		aHR.ov(L(199)), aHR.p3(new qr({
			qu: [L(200), L(201), L(202)],
			value: aHu.a1c
		}, function(oF) {
			aHy(), 2 !== oF || aHu.a1e || (aHu.a1e = new Uint8Array(a7.eQ), aHu.a1e.fill(32)), aHu.a1c = oF, m.n(27)
		})), pA.push(aHR)
	}(pA = []), function(pA) {
		var aHR;
		1 === aHu.a1c && ((aHR = new os).ov("Value"), aHR.p6(new q5({
			oF: -1,
			value: aHu.a1d
		}, 1, 0, function(e) {
			var value = bG.on(Math.floor(e.target.value), 0, 255);
			e.target.value = aHu.a1d = value
		})), pA.push(aHR))
	}(pA), function(pA) {
		var aHR;
		2 === aHu.a1c && ((aHR = new os).ov("Data"), (aHv = new rG(0, 1, 0, 1)).rN(b6.x3.a0T(aHu.a1e, 4)), aHR.p6(aHv), pA.push(aHR))
	}(pA), pA))
}

function aGn() {
	var aJd, aJe, aIp, aHS, aJf;
	this.aBI = new qa, aIp = new pn([.45, .27], [.5, .5], 2 / 3), aJe = [new p("⚔️<br>" + L(105), function() {
			aJg(0)
		}, t.mz), new p("🗡️<br>" + L(229), function() {
			aJg(1)
		}, t.nB), new p("🔑<br>" + L(241), function() {
			aJg(2)
		}, t.nQ), new p("☰<br>" + L(242), function() {
			aJg(3)
		}, t.mm), new p("", function() {
			m.n(12)
		}, t.mW, !1),
		new p("FX Client settings", function() {
			__fx.WindowManager.openWindow("settings");
		}, "rgba(0, 0, 20, 0.5)"),
		new p("Join/Create custom lobby", function() {
			__fx.customLobby.showJoinPrompt();
		}, "rgba(20, 9, 77, 0.5)")
	], aHS = new q5(be.dh.data[122]);
	for (var a5 = 0; a5 < aJe.length; a5++) aJe[a5].button.style.position = "absolute";

	function aJg(oF) {
		q.r.setState(10), aV.qq() || aV.aB8(), 0 === oF ? m.lB.aJh() : 1 === oF ? (a7.data = new a0j, b5.aJi.se(be.dh.data[156].value, 1) || (a7.data.a1W = 2, a7.data.a1Y = new Uint8Array(a7.eQ), a7.data.a1Y[0] = 64), m.n(19)) : 2 === oF ? 0 !== q
			.id || be.dh.data[140].value ? m.n(8, m.qQ, new qR(16)) : m.lB.aJj(m.qQ, 16) : 3 === oF && m.n(1)
	}
	aHS.e.style.position = "absolute", aHS.e.style.textAlign = "center", aHS.e.placeholder = L(243), this.show = function() {
		aU.setState(0), q.r.setState(12), this.aBI.show(), aJe[4].pY(b6.color.zJ(be.dh.data[121].value)), this.resize(), document.body.appendChild(aHS.e);
		for (var a5 = 0; a5 < aJe.length; a5++) document.body.appendChild(aJe[a5].button);
		1 !== q.id || q.ex < 5 || (aJf && ba.e0 > aJf + 144e5 ? q.ri.setState(14) : aJf = ba.e0)
	}, this.ql = function() {
		this.aBI.ql(), document.body.removeChild(aHS.e);
		for (var a5 = 0; a5 < aJe.length; a5++) document.body.removeChild(aJe[a5].button)
	}, this.resize = function() {
		this.aBI.resize(), aIp.resize();
		var gap = .5 * bX.gap,
			a8f = 10 / 99 * .84 * aIp.z,
			aJm = .16 * aIp.j6,
			a5a = .19 * aIp.z,
			ea = aIp.ea + a5a,
			a8f = aIp.ec + a8f + 3 * gap,
			z = .5 * (aIp.z - gap) - a5a,
			a5a = aIp.z - 2 * a5a - aJm - gap,
			a5a = (b6.pF.qo(aHS.e, ea, a8f, a5a, aJm), b6.pF.qo(aJe[4].button, ea + a5a + gap, a8f, aJm, aJm), .5 * (aIp.ec + aIp.j6 - (a8f += aJm + gap) - gap));
		b6.pF.qo(aJe[0].button, ea, a8f, z, a5a), b6.pF.qo(aJe[1].button, ea + z + gap, a8f, z, a5a), b6.pF.qo(aJe[2].button, ea, a8f + a5a + gap, z, a5a), b6.pF.qo(aJe[3].button, ea + z + gap, a8f + a5a + gap, z, a5a);
		b6.pF.qo(aJe[5].button, ea, a8f + a5a * 2 + gap * 2, z * 2 + gap, a5a / 3);
		b6.pF.qo(aJe[6].button, ea, a8f + a5a * 2.33 + gap * 3, z * 2 + gap, a5a / 3);
		for (var a5 = 0; a5 < aJe.length; a5++) aJe[a5].button.style.font = b6.pF.qW(0, b6.pF.za(.065 * aIp.j6)), b6.pF.pR(aJe[a5].button, 5);
		aHS.e.style.font = b6.pF.qW(0, b6.pF.za(.08 * aIp.j6)), b6.pF.pR(aHS.e, 5)
	}, this.rE = function() {
		if (aU.a9p(), aN.rE(), aI.rE(), bT.rE(), aV.qq()) {
			if (__fx.settings.displayWinCounter) {
				const size = Math.floor(aIp.z * 0.03);
				rF.font = b6.pF.qW(1, size);
				rF.fillStyle = "#ffffff";
				const text = "Win count: " + __fx.wins.count;
				const textLength = rF.measureText(text).width;
				rF.textAlign = "left";
				rF.textBaseline = "middle";
				rF.fillText(text, rF.canvas.width - textLength - size / 2, size);
			};
			rF.imageSmoothingEnabled = !1;
			var eo = aV.a9s("territorial.io"),
				mB = .84 * aIp.z / eo.width;
			rF.setTransform(mB, 0, 0, mB, aIp.ea + .08 * aIp.z, aIp.ec), aJd = aJd || b6.yf.a05(eo, b6.yf.a0B, [0, 0, 0]);
			for (var ea = -1; ea <= 1; ea += 2)
				for (var ec = -1; ec <= 1; ec += 2) rF.drawImage(aJd, ea, ec);
			rF.drawImage(eo, 0, 0), rF.imageSmoothingEnabled = !0;
			var hP = aV.a9s("logo"),
				aJp = .6666 * mB * eo.height / hP.height,
				mD = .5 * at.z,
				mE = aIp.ec + .5 * mB * eo.height - .5 * aJp * hP.height;
			rF.setTransform(aJp, 0, 0, aJp, mD - .6 * mB * eo.width, mE), rF.drawImage(hP, 0, 0), rF.setTransform(aJp, 0, 0, aJp, mD + .6 * mB * eo.width - aJp * hP.width, mE), rF.drawImage(hP, 0, 0), rF.setTransform(1, 0, 0, 1, 0, 0), rF
				.imageSmoothingEnabled = !0
		}
	}
}

function aGu() {
	var aHA, aJq, aJr, qw;

	function qg(a5) {
		m.n(8, m.qQ, new qR(21, {
			qh: a5,
			qi: 0,
			qj: 10
		}))
	}
	this.show = function() {
		aHA.show(), this.resize()
	}, this.ql = function() {
		aHA.ql()
	}, this.resize = function() {
		aHA.resize(), aJq.resize()
	}, this.yO = function(eo) {
		2 === eo && aHA.r2[0].pW()
	}, aJr = [new p(L(244), function() {
		qg(1)
	}, 0, 0, 1), new p(L(245), function() {
		qg(2)
	}, 0, 0, 1), new p(L(246), function() {
		qg(0)
	}, 0, 0, 1), new p(L(247), function() {
		qg(3)
	}, 0, 0, 1)], qw = [new p("⬅️ " + L(13), function() {
		m.xa()
	})], aHA = new qv(L(248), qw), aJq = new pk(aJr, aHA.r1)
}

function a8t(title, p2, aJs) {
	var aHA, aIz;
	this.show = function() {
		aHA.show(), this.resize()
	}, this.ql = function() {
		aHA.ql()
	}, this.resize = function() {
		aHA.resize(), aIz.resize()
	}, this.yO = function(eo) {
		2 === eo && aHA.r2[0].pW()
	}, aJs = aJs || [new p("⬅️ " + L(13), function() {
		m.xa()
	}, t.n9)], aHA = new qv(title, aJs), aIz = new py(aHA.r1, p2), b6.pF.textAlign(aHA.r1.style, 1)
}

function aJH(data) {
	var aHA, aJt, eo, qI;

	function aJu(hT) {
		var eT = data.data.length;
		if (eT) {
			for (var qi, max = min = parseInt(data.data[0][0]), a5 = 1; a5 < eT; a5++) var aK1 = parseInt(data.data[a5][0]),
				min = Math.min(aK1, min),
				max = Math.max(aK1, max);
			qi = hT < 0 ? min + hT : max + 1, m.n(8, m.aBH().aGi, new qR(21, {
				qh: data.qh,
				qi: qi,
				qj: qi + Math.abs(hT)
			}))
		}
	}
	this.show = function() {
			aHA.show(), this.resize()
		}, this.ql = function() {
			aHA.ql()
		}, this.resize = function() {
			aHA.resize(), aJt.resize()
		}, this.yO = function(eo) {
			2 === eo && aHA.r2[0].pW()
		}, eo = data.data.length ? 0 : 1, eo = [new p("⬅️ " + L(13), function() {
			m.xa()
		}), new p(L(249), function() {
			aJu(-10)
		}, eo, 0, 1), new p(L(250), function() {
			aJu(10)
		}, eo, 0, 1), new p(L(207), function() {
			m.n(11, 10, new aJv({
				qh: data.qh
			}))
		})], qI = [L(251), L(252), L(253), L(254), L(255), L(256), L(257), L(258), L(259)], aHA = new qv(qI[data.qh], eo),
		function() {
			var a5, eW = {
					qC: []
				},
				qC = eW.qC,
				aJx = data.data,
				eT = aJx.length,
				mB = [.1, .001, .001, 1, 100, 1, .01, 1, 100][data.qh],
				a0G = [1, 3, 3, 0, 0, 0, 2, 0, 0][data.qh],
				qI = [
					[L(260), L(261) + " ↗", L(262)],
					[L(260), L(263), L(264), L(265) + " ↗"],
					[L(260), L(261) + " ↗", L(264)],
					[L(260), L(261) + " ↗", L(264)],
					[L(266), L(267), L(268) + " ↗", L(269) + " ↗", L(94)],
					[L(266), L(267), L(270) + " ↗", L(271) + " ↗", L(264)],
					[L(266), L(267), L(272) + " ↗", L(273) + " ↗", L(274)],
					[L(266), L(267), L(270) + " ↗", L(271) + " ↗", L(264)],
					[L(266), L(267), L(268) + " ↗", L(269) + " ↗", L(94)]
				];
			if (eW.qI = qI[data.qh], eW.qM = [
					[25, 40, 35],
					[15, 25, 25, 35],
					[25, 40, 35],
					[25, 40, 35],
					[12, 16, 30, 30, 12],
					[12, 16, 30, 30, 12],
					[12, 16, 30, 30, 12],
					[12, 16, 30, 30, 12],
					[12, 16, 30, 30, 12]
				][data.qh], 0 === data.qh)
				for (a5 = 0; a5 < eT; a5++) qC.push([{
					ew: aJx[a5][0] + 1 + ".",
					e1: 0
				}, {
					ew: aJx[a5][1],
					e1: 1,
					qO: aJx[a5][4],
					qP: aJx[a5][3]
				}, {
					ew: (mB * aJx[a5][2]).toFixed(a0G),
					e1: 0
				}]);
			else if (1 === data.qh)
				for (a5 = 0; a5 < eT; a5++) qC.push([{
					ew: aJx[a5][0] + 1 + ".",
					e1: 0
				}, {
					ew: aJx[a5][1],
					e1: 0
				}, {
					ew: (mB * aJx[a5][2]).toFixed(a0G),
					e1: 0
				}, {
					ew: aJx[a5][3],
					e1: 1,
					qO: aJx[a5][5],
					qP: aJx[a5][4]
				}]);
			else if (2 === data.qh || 3 === data.qh)
				for (a5 = 0; a5 < eT; a5++) qC.push([{
					ew: aJx[a5][0] + 1 + ".",
					e1: 0
				}, {
					ew: aJx[a5][1],
					e1: 1,
					qO: aJx[a5][4],
					qP: aJx[a5][3]
				}, {
					ew: (mB * aJx[a5][2]).toFixed(a0G),
					e1: 0
				}]);
			else if (4 === data.qh || 5 === data.qh || 6 === data.qh || 7 === data.qh || 8 === data.qh)
				for (a5 = 0; a5 < eT; a5++) {
					var aK0 = aJx[a5][5];
					4 === data.qh || 8 === data.qh ? "100%" === (aK0 = (aK0 % 64 * 100 / (aK0 >> 6)).toFixed(0) + "%") && (4 === data.qh ? aK0 += " (" + L(275) + ")" : aK0 += " (" + L(276) + ")") : 5 === data.qh ? 32768 <= aK0 && (aK0 = -(aK0 -
						32768)) : aK0 = (mB * aK0).toFixed(a0G), qC.push([{
						ew: "" + aJx[a5][0],
						e1: 0
					}, {
						ew: "" + aJx[a5][6],
						e1: 0
					}, {
						ew: aJx[a5][7],
						e1: 1,
						qO: aJx[a5][1],
						qP: aJx[a5][2]
					}, {
						ew: aJx[a5][8],
						e1: 1,
						qO: aJx[a5][3],
						qP: aJx[a5][4]
					}, {
						ew: "" + aK0,
						e1: 0
					}])
				}
			aJt = new qB(aHA.r1, eW)
		}()
}

function aJv(a07) {
	var aHA, aHB, pA;
	this.show = function() {
		aHA.show(), this.resize()
	}, this.ql = function() {
		aHA.ql()
	}, this.resize = function() {
		aHA.resize(), aHB.resize()
	}, this.yO = function(eo) {
		2 === eo && aHA.r2[0].pW()
	}, aHA = new qv(L(277), [new p("⬅️ " + L(13), function() {
		m.aH7(10)
	})]), aHB = new p8(aHA.r1, ((pA = []).push(function() {
		var aHY, aHR = new os,
			aIn = new q5(be.dh.data[132], 1, function() {
				aHY.button.click()
			}),
			aIo = new q5(be.dh.data[131], 1, function() {
				aIn.e.focus()
			});
		aHR.ov(L(212)), aHR.p6(aIo), aIo.e.style.marginBottom = "0.8em", aHR.ov(L(213)), aHR.p6(aIn);
		return aHY = new p(L(211), function() {
			qi = Math.floor(aIo.e.value), qj = Math.floor(aIn.e.value);
			var qj, qi = {
				yw: Math.min(qi, qj),
				aGI: Math.max(qi, qj)
			};
			m.n(8, m.aH8(10).aGi, new qR(21, {
				qh: a07.qh,
				qi: qi.yw,
				qj: qi.aGI
			}))
		}, 0, 0, 1), aHR.p6(new q0([aHY.button])), aHR
	}()), pA.push(function() {
		var aHY, aHR = new os,
			aIn = new q5(be.dh.data[134], 1, function() {
				aHY.button.click()
			}),
			aIo = new q5(be.dh.data[133], 0, function() {
				aIn.e.focus()
			});
		return aHR.ov(1 === a07.qh ? L(278) : L(279)), aHR.p6(aIo), aIo.e.style.marginBottom = "0.8em", aHR.ov(L(280)), aHR.p6(aIn), aHY = new p(L(211), function() {
			var aJ9 = aIo.e.value.slice(0, 20),
				aJA = Math.abs(Math.floor(aIn.e.value));
			m.n(8, m.aH8(10).aGi, new qR(22, {
				qh: a07.qh,
				aJ9: aJ9,
				aJA: aJA
			}))
		}, 0, 0, 1), aHR.p6(new q0([aHY.button])), aHR
	}()), pA.push(function() {
		var aHY, aHR = new os,
			aIn = new q5(be.dh.data[152], 1, function() {
				aHY.button.click()
			}),
			aIo = new q5(be.dh.data[151], 0, function() {
				aIn.e.focus()
			});
		return aHR.ov(L(281)), aHR.p6(aIo), aIo.e.style.marginBottom = "0.8em", aHR.ov(L(280)), aHR.p6(aIn), aHY = new p(L(211), function() {
			var aJ9 = aIo.e.value.slice(0, 5),
				aJA = Math.abs(Math.floor(aIn.e.value));
			m.n(8, m.aH8(10).aGi, new qR(28, {
				qh: a07.qh,
				aJ9: aJ9,
				aJA: aJA
			}))
		}, 0, 0, 1), aHR.p6(new q0([aHY.button])), aHR
	}()), pA))
}

function aGo() {
	var aHA, aHB, pA;
	this.show = function() {
		aHA.show(), this.resize()
	}, this.ql = function() {
		aHA.ql()
	}, this.resize = function() {
		aHA.resize(), aHB.resize()
	}, this.yO = function(eo) {
		2 === eo && aHA.r2[0].pW()
	}, aHA = new qv(L(282), [new p("⬅️ " + L(13), function() {
		m.n(7, m.aH8(7).aGi)
	}), new p(L(160), function() {
		be.pw.px(105, bB.qT.sT(aHB.pC[0].ot[0].e.value, 5)), be.pw.px(106, bB.qT.sT(aHB.pC[1].ot[0].e.value, 8)), m.n(8, m.aH8(7).aGi, new qR(18))
	})]), aHB = new p8(aHA.r1, ((pA = []).push(function() {
		var aHR = new os;
		return aHR.ov(L(141)), aHR.p6(new q5({
			value: "",
			oF: -1
		})), aHR
	}()), pA.push(function() {
		var aHR = new os,
			aHb = (aHR.ov(L(143)), new q5({
				value: "",
				oF: -1
			}));
		return aHb.e.type = "password", aHR.p6(aHb), aHR.p6(new q0([new p(L(144), function(e) {
			return e.textContent === L(144) ? (e.textContent = L(145), aHb.e.type = "text") : (e.textContent = L(144), aHb.e.type = "password"), !0
		}).button])), aHR
	}()), pA))
}

function aGv() {
	var aHA, aJq, aJr, qw;

	function qg(a5) {
		m.n(8, m.qQ, new qR(21, {
			qh: a5,
			qi: 0,
			qj: 10
		}))
	}
	this.show = function() {
		aHA.show(), this.resize()
	}, this.ql = function() {
		aHA.ql()
	}, this.resize = function() {
		aHA.resize(), aJq.resize()
	}, this.yO = function(eo) {
		2 === eo && aHA.r2[0].pW()
	}, aJr = [new p(L(255), function() {
		qg(4)
	}, 0, 0, 1), new p(L(256), function() {
		qg(5)
	}, 0, 0, 1), new p(L(257), function() {
		qg(6)
	}, 0, 0, 1), new p(L(258), function() {
		qg(7)
	}, 0, 0, 1), new p(L(259), function() {
		qg(8)
	}, 0, 0, 1)], qw = [new p("⬅️ " + L(13), function() {
		m.xa()
	})], aHA = new qv(L(283), qw), aJq = new pk(aJr, aHA.r1)
}

function aGe() {
	this.dh = {}, this.qk = ["", "", ""], this.aGt = null, this.aGq = null, this.q9 = 0, this.aJN = [0], this.xd = function() {
			m.n(5, 5)
		}, this.aJh = function() {
			m.s1(), aT.a9T(be.dh.data[10].value), aT.dO()
		},
		__fx.customLobby.setJoinFunction(() => {
			m.s1();
			aT.a9T(0);
			aT.dO();
		}), this.a8Z = function() {
			m.n(0 === aU.xT() ? 5 : 0)
		}, this.aIm = function() {
			if (1 === be.dh.data[130].value) m.n(8, m.aBH().aGi, new qR(24, {
				aIL: be.dh.data[125].value,
				qi: be.dh.data[128].value,
				qj: be.dh.data[129].value
			}));
			else {
				for (var fC = (fC = be.dh.data[126].value.split(",")).slice(0, 10), a5 = 0; a5 < fC.length; a5++) fC[a5] = fC[a5].trim().slice(0, 7).toUpperCase();
				1 === fC.length && 0 === fC[0].length && (fC = []), m.n(8, m.aBH().aGi, new qR(23, {
					aIL: be.dh.data[125].value,
					wz: fC
				}))
			}
		}, this.aJj = function(aGi, target) {
			m.n(4, aGi, new o("Data Usage Information",
				"Do you want your username and other data to be remembered for the next session?<br>The app might not function correctly if you decline data usage.<br>Please read our privacy policy for more information: <a href='" + bF.aK6 +
				"' target='_blank'>" + bF.aK6 + "</a>", !1, [new p("⬅️ " + L(13), function() {
					m.n(aGi)
				}), new p("✅ Accept", function() {
					be.pw.px(140, 1), 0 === target ? m.n(2, aGi) : m.n(8, aGi, new qR(target))
				})]))
		}, this.aK7 = function() {
			for (var a5 = 0; a5 < 3; a5++) this.qk[a5] = bB.sM.sO(bC.oG(5));
			this.qk[1] = "[" + this.qk[1] + "]", 5 === m.qQ && m.aBH().aBI.px(this.qk)
		}
}

function aGy() {
	var aHs, aHt, aK8, pA, aHu = a7.data;

	function aHw() {
		b2.xf(), m.aH9()[19] = null, m.xa()
	}

	function aKF() {
		aKI(), aKG()
	}

	function aKI() {
		aK8.ou.lastChild && aK8.ou.removeChild(aK8.ou.lastChild)
	}

	function aKG() {
		var aKJ = bN.a1k(aHu);
		aHu.hE = bN.aAr(aKJ, aHu.a1K).st, aKH()
	}

	function aKH() {
		var zC = aHu.hE;
		zC.style.width = "100%", aK8.ou.appendChild(zC)
	}
	this.aCM = function(zC) {
		aHu.hE && aKI(), aHu.hE = zC, aKH()
	}, this.show = function() {
		aHs.show(), this.resize()
	}, this.ql = function() {
		aHs.ql()
	}, this.resize = function() {
		aHs.resize(), aHt.resize()
	}, this.yO = function(eo) {
		2 === eo && aHs.r2[0].pW()
	}, aHs = new qv(L(231), [new p("⬅️ " + L(13), aHw)]), 2 === aHu.a1H && b2.dO(), aHt = new p8(aHs.r1, (function(pA) {
		var aHR = new os;
		aHR.ov(L(199)), aHR.p3(new qr({
			qu: [L(284), L(285), L(286)],
			value: aHu.a1H
		}, function(oF) {
			2 === (aHu.a1H = oF) ? (b2.dO(), aHu.hE = null) : (aHu.a1M = aHu.e9 = 1, b2.xf()), m.n(20)
		})), 2 <= aHu.a1H && (aHR.p6(new q3), aHR.p6(new ps({
			value: aHu.a1M
		}, L(287), function(value) {
			aHu.a1M = value
		})), aHR.p6(new ps({
			value: aHu.e9
		}, L(288), function(value) {
			aHu.e9 = value
		})));
		pA.push(aHR)
	}(pA = []), function(pA) {
		if (0 === aHu.a1H) {
			for (var aHR = new os, qu = (aHR.ov(L(231)), []), a5 = 0; a5 < bN.sj.aFe.length; a5++) qu.push(bN.sj.sk[bN.sj.aFe[a5]].name);
			aHR.p3(new qr({
				qu: qu,
				value: aHu.a1I
			}, function(oF) {
				aHu.a1I = oF, aKF()
			})), pA.push(aHR)
		}
	}(pA), function(pA) {
		if (1 === aHu.a1H) {
			for (var aHR = new os, qu = (aHR.ov(L(231)), []), a5 = 0; a5 < bN.sj.aFf.length; a5++) qu.push(bN.sj.sk[bN.sj.aFf[a5]].name);
			aHR.p3(new qr({
				qu: qu,
				value: aHu.a1J
			}, function(oF) {
				aHu.a1J = oF, aKF()
			})), pA.push(aHR)
		}
	}(pA), function(pA) {
		var aHR;
		2 === aHu.a1H && ((aHR = new os).ov(L(231)), aHR.p6(new q0([new p(L(289), function() {
			return b2.aCF(), !0
		}).button])), pA.push(aHR))
	}(pA), function(pA) {
		(aK8 = new os).ov(L(290)), 2 !== aHu.a1H ? aKG() : aHu.hE && aKH();
		pA.push(aK8)
	}(pA), function(pA) {
		var aHR, aHS, aHY;
		0 === aHu.a1H && ((aHR = new os).ov("Seed"), aHS = new q5({
			oF: -1,
			value: aHu.a1K
		}, 1, 0, function(e) {
			e = Math.abs(Math.floor(e.target.value)) % 16384;
			aHu.a1K !== e && (aHu.a1K = e, aKF())
		}), aHY = new p(L(224), function(e) {
			var aEe = Math.floor(16384 * Math.random());
			if (aHu.a1K !== aEe) return aHS.e.value = aHu.a1K = aEe, aKF(), !0
		}), aHR.p6(aHS), aHR.p6(new q0([aHY.button])), pA.push(aHR))
	}(pA), function(pA) {
		var aHR, aHS;
		2 === aHu.a1H && ((aHR = new os).ov(L(291)), aHS = new q5({
			oF: -1,
			value: aHu.a1L
		}, 0, 0, function(e) {
			aHu.a1L = e.target.value = e.target.value.slice(0, 20)
		}), aHR.p6(aHS), pA.push(aHR))
	}(pA), pA))
}

function o(title, p2, aKK, aJs) {
	var aHA, aIz;
	this.show = function() {
		aHA.show(), this.resize()
	}, this.ql = function() {
		aHA.ql()
	}, this.resize = function() {
		aHA.resize(), aIz.resize()
	}, this.yO = function(eo) {
		2 === eo && aHA.r2[0].pW()
	}, aJs = aJs || [new p("⬅️ " + L(13), function() {
		m.xa()
	})], aHA = new qv(title, aJs), aIz = new py(aHA.r1, p2), aKK && b6.pF.textAlign(aHA.r1.style, 1)
}

function aH1() {
	var aHs, aHt, aHv, pA, aHu = a7.data;

	function aHw() {
		aHy(), 2 === aHu.a1T && 1 === b6.pP.ys(aHu.a1U).length && (aHu.a1T = 0), 2 !== aHu.a1T && (aHu.a1U = null), m.aH9()[19] = null, m.xa()
	}

	function aHy() {
		2 === aHu.a1T && b6.pP.z6(aHv.rP(), aHu.a1U, 20)
	}
	this.show = function() {
		aHs.show(), this.resize()
	}, this.ql = function() {
		aHs.ql()
	}, this.resize = function() {
		aHs.resize(), aHt.resize()
	}, this.yO = function(eo) {
		2 === eo && aHs.r2[0].pW()
	}, aHs = new qv(L(235), [new p("⬅️ " + L(13), aHw)]), aHt = new p8(aHs.r1, (function(pA) {
		var aHR = new os;
		aHR.ov(L(199)), aHR.p3(new qr({
			qu: [L(236), L(237), L(202)],
			value: aHu.a1T
		}, function(oF) {
			aHy(), aHu.a1T = oF, m.n(23)
		})), aHR.p6(new q3), aHR.p6(new ps({
			value: aHu.a1V
		}, L(292), function(value) {
			aHu.a1V = value
		})), pA.push(aHR)
	}(pA = []), function(pA) {
		var aHR;
		2 === aHu.a1T && ((aHR = new os).ov("Data"), aHv = new rG(0, 1, 0, 1), aHu.a1U && aHu.a1U.length === a7.eQ || (aHu.a1U = new Array(a7.eQ), aHu.a1U.fill("")), aHv.rN(b6.x3.a0T(aHu.a1U, 1, '"')), aHR.p6(aHv), pA.push(aHR))
	}(pA), pA))
}

function aGm() {
	var aHs, rL;

	function aKL() {
		m.s1();
		var ow = b5.aKP(rL.rP());
		(a7.wD && 0 < ow.length && ow === b5.oU.a1A || b5.aJi.se(ow)) && b5.aKQ()
	}
	this.show = function(aKM) {
		this.aKN(aKM), aHs.show(), this.resize()
	}, this.aKN = function(aKM) {
		0 === a7.wD ? aKM ? rL.rN(aKM) : b5.oU.a1A.length && rL.rN(b5.oU.a1A) : (a7.gf || (b5.oU.a1A = b5.a1B.vj()), rL.rN(b5.aKO(b5.oU.a1A)))
	}, this.ql = function() {
		aHs.ql()
	}, this.resize = function() {
		aHs.resize(), rL.resize()
	}, this.yO = function(eo) {
		2 === eo ? aHs.r2[0].pW() : aKL()
	}, aHs = new qv(L(293), [new p("⬅️ " + L(13), function() {
		m.aH7(1)
	}), new p(L(294), function() {
		rL.rQ()
	}), new p(L(295), function() {
		rL.rR()
	}), new p(L(296), function() {
		rL.clear()
	}), new p(L(297), function() {
		aKL()
	})]), rL = new rG(L(298)), aHs.r1.appendChild(rL.e)
}

function aGl() {
	var aHA, aHB, pA, a8V, aHR;

	function aKR() {
		var e0;
		a8V !== be.dh.data[12].value ? (b3.dO(), b3.a8U(), e0 = ba.e0, m.n(4, 1, new o(L(301), L(302), !1, [new p("⬅️ " + L(13), function() {
			m.n(1)
		}), new p("🔄 Reload", function() {
			ba.e0 < e0 + 1500 || q.r.s()
		}, t.u)]))) : m.n(1)
	}
	this.show = function() {
			a8V = be.dh.data[12].value, aHA.show(), this.resize()
		}, this.ql = function() {
			aHA.ql()
		}, this.resize = function() {
			aHA.resize(), aHB.resize()
		}, this.yO = function(eo) {
			2 === eo && aHA.r2[0].pW()
		}, aHA = new qv(L(299), [new p("⬅️ " + L(13), aKR), new p(L(300), function() {
			m.s1(), be.pw.s3(), m.n(2)
		})]), pA = [], (aHR = new os).ov(L(303)), aHR.ox(L(304)), pA.push(aHR),
		function(pA) {
			var aHR = new os,
				fC = (aHR.ov(L(324)), b3.data.a8a());
			aHR.p3(new qr({
				qu: fC,
				value: b3.data.a8d(fC)
			}, function(oF) {
				return be.pw.px(12, fC[oF].split(":")[0]), !0
			})), pA.push(aHR)
		}(pA),
		function(pA) {
			var aHR = new os,
				aKU = (aHR.ov(L(322)), []);
			aHR.p6(new q0([new p(L(323), function(e) {
				bS.aKV();
				for (var a5 = 0; a5 < aKU.length; a5++) aKU[a5].e.value = bS.aKW[a5];
				return b6.pF.zg(e), !0
			}).button]));
			for (var a5 = 0; a5 < bS.aKX.length; a5++) {
				aHR.ox(bS.aKX[a5]);
				for (var em = 0; em < 2; em++) {
					var oF = 2 * a5 + em,
						aHS = new q5({
							value: bS.aKW[oF],
							oF: -1
						});
					aHS.e.aKY = oF, aKU.push(aHS), aHS.e.addEventListener("keydown", function(e) {
						e.preventDefault();
						var code = e.code;
						e.target.value = code, bS.aKZ(e.target.aKY, code)
					}), em && (aHS.e.style.marginLeft = "4%"), aHS.e.style.width = "48%", aHR.p6(aHS)
				}
			}
			pA.push(aHR)
		}(pA), (aHR = new os).ov(L(305)), be.dh.data[10].qu = [L(305) + " 1", L(306) + " 1", L(305) + " 2", L(306) + " 2"], aHR.p3(new qr(be.dh.data[10])), pA.push(aHR), (aHR = new os).ov(L(307)), be.dh.data[1].qu = [L(308), L(309), L(310), L(311)],
		aHR.p3(new qr(be.dh.data[1])), pA.push(aHR), (aHR = new os).ov(L(312)), be.dh.data[9].qu = [L(309), L(313), L(314)], aHR.p3(new qr(be.dh.data[9])), pA.push(aHR), (aHR = new os).ov(L(315)), be.dh.data[11].qu = [L(316), L(2), L(317)], aHR.p3(
			new qr(be.dh.data[11])), pA.push(aHR), (aHR = new os).ov(L(318)), aHR.p6(new ps(be.dh.data[2])), pA.push(aHR), (aHR = new os).ov(L(319)), aHR.p6(new ps(be.dh.data[7])), pA.push(aHR), (aHR = new os).ov(L(320)), aHR.p6(new ps(be.dh.data[
			8])), pA.push(aHR), (aHR = new os).ov(L(321)), aHR.p6(new q5(be.dh.data[5])), pA.push(aHR), aHB = new p8(aHA.r1, pA)
}

function aH2() {
	var aHs, aHt, aHv, pA, aHu = a7.data;

	function aHw() {
		aHy(), 2 !== aHu.tP || b6.pP.ys(aHu.u7) || (aHu.tP = 0), 2 !== aHu.tP && (aHu.u7 = null), m.aH9()[19] = null, m.xa()
	}

	function aHy() {
		2 === aHu.tP && b6.pP.z4(aHv.rP(), aHu.u7, bN.aCO - 1)
	}
	this.show = function() {
		aHs.show(), this.resize()
	}, this.ql = function() {
		aHs.ql()
	}, this.resize = function() {
		aHs.resize(), aHt.resize()
	}, this.yO = function(eo) {
		2 === eo && aHs.r2[0].pW()
	}, aHs = new qv(L(325), [new p("⬅️ " + L(13), aHw)]), aHt = new p8(aHs.r1, (function(pA) {
		var aHR = new os,
			qu = (aHR.ov(L(199)), [L(224), L(234), L(202)]),
			value = aHu.tP;
		0 === aHu.a0q && (qu.splice(1, 1), 0 < value) && (value = 1);
		aHR.p3(new qr({
			qu: qu,
			value: value
		}, function(oF) {
			aHy(), aHu.tP = oF, 0 === aHu.a0q && 1 === oF && (aHu.tP = 2), 2 !== aHu.tP || aHu.u7 || (aHu.u7 = new Uint16Array(2 * a7.eQ)), m.n(24)
		})), aHR.p6(new q3), aHR.p6(new ps({
			value: aHu.a0w
		}, L(326), function(value) {
			aHu.a0w = value
		})), pA.push(aHR)
	}(pA = []), function(pA) {
		var aHR = new os;
		aHR.ov("Seed"), aHR.p6(new q5({
			oF: -1,
			value: aHu.a10
		}, 1, 0, function(e) {
			var value = Math.abs(Math.floor(e.target.value)) % 16384;
			e.target.value = aHu.a10 = value
		})), pA.push(aHR)
	}(pA), function(pA) {
		var aHR;
		2 === aHu.tP && ((aHR = new os).ov("Data"), (aHv = new rG(0, 1, 0, 1)).rN(b6.x3.a0T(aHu.u7, 2)), aHR.p6(aHv), pA.push(aHR))
	}(pA), pA))
}

function aGk() {
	var aHA, aJq, aJr, qw;

	function aKa(id) {
		0 !== q.id || be.dh.data[140].value ? 0 === id ? m.n(8, 1, new qR(16)) : m.n(2) : m.lB.aJj(m.qQ, 0 === id ? 16 : 0)
	}
	this.show = function() {
		q.r.setState(12), aHA.show(), this.resize(), this.iR()
	}, this.ql = function() {
		aHA.ql()
	}, this.resize = function() {
		aHA.resize(), aJq.resize()
	}, this.iR = function() {
		8 === aU.xT() && (2 <= bY.aKf ? aJr[2].pX === t.ml && aJr[2].pY(0) : aJr[2].pX !== t.ml && aJr[2].pY(t.ml), !a7.gf && aG.a2b(a7.eD) ? aJr[1].pX === t.ml && aJr[1].pY(0) : aJr[1].pX !== t.ml && aJr[1].pY(t.ml), !a7.gf && aq.oq(a7.eD) ?
			aJr[0].pX === t.ml && aJr[0].pY(0) : aJr[0].pX !== t.ml && aJr[0].pY(t.ml))
	}, this.yO = function(eo) {
		2 === eo && aHA.r2[0].pW()
	}, aJr = [new p(L(327), function() {
		aKa(0)
	}), new p(L(248), function() {
		m.n(16)
	}), new p(L(283), function() {
		m.n(17)
	}), new p(L(328), function() {
		m.lB.aIm()
	}, 0, 0, 1), new p(L(293), function() {
		m.n(3, 1)
	}), new p(L(329), function() {
		m.n(18)
	}), new p(L(299), function() {
		aKa(1)
	}), new p(L(330), function() {
		m.n(4, 1, new o(L(330), b6.pF.zb([L(339), L(340), "Discord", L(341), L(244), L(342), L(90), L(343), L(344), L(345)], [bF.a8q, bF.xN, bF.a8r, bF.aKg, bF.aKh, bF.x9, bF.aKi, bF.aKj, bF.aKk, bF.aK6]), !1, [new p("⬅️ " + L(13),
			function() {
				m.n(1)
			})]))
	}), new p(L(331), function() {
		m.n(4, 1, new o(L(331), db + "<br><a href='" + bF.aKg + "' target='_blank'>" + bF.aKg + "</a>" +
			"<br><br><b>" + "FX Client v" + __fx.version + "<br><a href='https://discord.gg/dyxcwdNKwK' target='_blank'>FX Client Discord server</a>" +
			"<br><a href='https://github.com/fxclient/FXclient' target='_blank'>Github repository</a></b>", !0, [new p("⬅️ " + L(13), function() {
				m.n(1)
			})]))
	}), new p(L(332), function() {
		m.n(4, 1, new o(L(332), L(346) + "<br>" + L(347), !1, [new p("⬅️ " + L(13), function() {
			m.n(1)
		}), new p(L(348), function() {
			q.r.xI(), m.n(1)
		})]))
	}), new p(L(333), function() {
		q.r.xJ(), m.n(4, 1, new o(L(349), L(350) + "<a href='" + bF.aK6 + "' target='_blank'>" + bF.aK6 + "</a>", !1, [new p("⬅️ " + L(13), function() {
			m.n(1)
		})]))
	})], qw = [new p("⬅️ " + L(13), function() {
		m.lB.a8Z()
	})], 8 === aU.xT() && (aJr.unshift(new p(L(336), function() {
		2 <= bY.aKf && (m.s1(), bZ.yR(), ba.dW = !0)
	}, 0, 1)), aJr.unshift(new p(L(337), function() {
		!a7.gf && aG.a2b(a7.eD) && (b4.gs.nv(), m.s1(), aG.gg) && aG.yR()
	}, 0, 1)), aJr.unshift(new p(L(338), function() {
		!a7.gf && aq.oq(a7.eD) && (b4.gs.nx(), m.s1(), aG.gg) && aG.yR()
	}, 0, 1))), 1 === q.id && 5 <= q.ex && aJr.push(new p(L(334), function() {
		q.r.xK()
	})), aHA = new qv(L(335), qw), aJq = new pk(aJr, aHA.r1)
}

function aH6() {
	var aHs, aHt, aHv, pA, aHu = a7.data;

	function aHw() {
		aHy(), 2 !== aHu.a1f && (aHu.a1h = null), m.aH9()[19] = null, m.xa()
	}

	function aHy() {
		2 === aHu.a1f && b6.pP.z4(aHv.rP(), aHu.a1h, 2047)
	}
	this.show = function() {
		aHs.show(), this.resize()
	}, this.ql = function() {
		aHs.ql()
	}, this.resize = function() {
		aHs.resize(), aHt.resize()
	}, this.yO = function(eo) {
		2 === eo && aHs.r2[0].pW()
	}, aHs = new qv(L(240), [new p("⬅️ " + L(13), aHw)]), aHt = new p8(aHs.r1, (function(pA) {
		var aHR = new os;
		aHR.ov(L(199)), aHR.p3(new qr({
			qu: [L(200), L(201), L(202)],
			value: aHu.a1f
		}, function(oF) {
			aHy(), 2 !== oF || aHu.a1h || (aHu.a1h = new Uint16Array(a7.eQ)), aHu.a1f = oF, m.n(28)
		})), pA.push(aHR)
	}(pA = []), function(pA) {
		var aHR;
		1 === aHu.a1f && ((aHR = new os).ov("Value"), aHR.p6(new q5({
			oF: -1,
			value: aHu.a1g
		}, 1, 0, function(e) {
			var value = bG.on(Math.floor(e.target.value), 0, 2047);
			e.target.value = aHu.a1g = value
		})), pA.push(aHR))
	}(pA), function(pA) {
		var aHR;
		2 === aHu.a1f && ((aHR = new os).ov("Data"), (aHv = new rG(0, 1, 0, 1)).rN(b6.x3.a0T(aHu.a1h, 2)), aHR.p6(aHv), pA.push(aHR))
	}(pA), pA))
}

function aH4() {
	var aHs, aHt, aHv, pA, aHu = a7.data;

	function aHw() {
		aHy(), 2 !== aHu.a1Z && (aHu.a1b = null), m.aH9()[19] = null, m.xa()
	}

	function aHy() {
		2 === aHu.a1Z && b6.pP.z4(aHv.rP(), aHu.a1b, 255)
	}
	this.show = function() {
		aHs.show(), this.resize()
	}, this.ql = function() {
		aHs.ql()
	}, this.resize = function() {
		aHs.resize(), aHt.resize()
	}, this.yO = function(eo) {
		2 === eo && aHs.r2[0].pW()
	}, aHs = new qv(L(238), [new p("⬅️ " + L(13), aHw)]), aHt = new p8(aHs.r1, (function(pA) {
		var aHR = new os;
		aHR.ov(L(199)), aHR.p3(new qr({
			qu: [L(200), L(201), L(202)],
			value: aHu.a1Z
		}, function(oF) {
			aHy(), 2 !== oF || aHu.a1b || (aHu.a1b = new Uint8Array(a7.eQ), aHu.a1b.fill(32)), aHu.a1Z = oF, m.n(26)
		})), pA.push(aHR)
	}(pA = []), function(pA) {
		var aHR;
		1 === aHu.a1Z && ((aHR = new os).ov("Value"), aHR.p6(new q5({
			oF: -1,
			value: aHu.a1a
		}, 1, 0, function(e) {
			var value = bG.on(Math.floor(e.target.value), 0, 255);
			e.target.value = aHu.a1a = value
		})), pA.push(aHR))
	}(pA), function(pA) {
		var aHR;
		2 === aHu.a1Z && ((aHR = new os).ov("Data"), (aHv = new rG(0, 1, 0, 1)).rN(b6.x3.a0T(aHu.a1b, 4)), aHR.p6(aHv), pA.push(aHR))
	}(pA), pA))
}

function aGw() {
	var aHA, aHB, pA;
	this.show = function() {
		aHA.show(), this.resize()
	}, this.ql = function() {
		aHA.ql()
	}, this.resize = function() {
		aHA.resize(), aHB.resize()
	}, this.yO = function(eo) {
		2 === eo && aHA.r2[0].pW()
	}, aHA = new qv(L(329), [new p("⬅️ " + L(13), function() {
		m.xa()
	})]), aHB = new p8(aHA.r1, ((pA = []).push(function() {
		function aHV() {
			aKp.button.textContent = L(138), aKn.e.readOnly = !1, aKo.e.readOnly = !1, aHU.pY(1), aHU.button.style.color = t.ma
		}
		var aHR = new os,
			aKm = (aHR.ov(L(351)), new q5({
				value: be.dh.data[105].value,
				oF: -1
			})),
			aKn = (aKm.e.readOnly = !0, aHR.p6(aKm), aHR.ov(L(352), "0.8em"), new q5(be.dh.data[148])),
			aKn = new q5(be.dh.data[148], 0, void 0, function(e) {
				aHT(be.dh.data[149].value, e.target.value)
			}),
			aKo = (aHR.p6(aKn), aHR.ov(L(274), "0.8em"), new q5(be.dh.data[149], 1, void 0, function(e) {
				aHT(e.target.value, be.dh.data[148].value)
			})),
			aKp = (aHR.p6(aKo), new p(L(138), function(e) {
				return e.textContent === L(138) ? (e.textContent = L(139), aKn.e.readOnly = !0, aKo.e.readOnly = !0, aHU.pY(0), aHU.button.style.color = t.nL, be.pw.px(149, aKo.e.value), aHT(be.dh.data[149].value, be.dh.data[
					148].value)) : aHV(), !0
			})),
			aHU = (aHR.p6(new q0([aKp.button])), new p(L(137), function(e) {
				return aKn.e.readOnly && aw.lB.a9R(0) && (b6.pF.zg(e), aHV(), aw.aHW.aHX({
					qS: 0,
					qO: be.dh.data[148].value,
					qP: 0,
					value: bG.on(Math.floor(100 * be.dh.data[149].value), 0, 4294967295)
				})), !0
			}, 1)),
			oy = (aHR.p6(new q0([aHU.button])), aHR.ox()),
			aHT = function(ew, ow) {
				ew = isNaN(ew) ? 0 : Number(ew);
				var ew = Math.max(ew, (be.dh.data[150].value + 1) / 100),
					aHa = Math.floor(100 * Math.max(1e-4 * ew, be.dh.data[150].value / 100)) / 100;
				oy.textContent = L(140, [ew.toFixed(2), be.dh.data[105].value, aHa.toFixed(2), ow, (ew - aHa).toFixed(2)])
			};
		return aHT(be.dh.data[149].value, be.dh.data[148].value), aHR
	}()), pA))
}

function bl() {
	"function" != typeof Math.log2 && (Math.log2 = function(ea) {
		return Math.log(ea) / Math.log(2)
	}), "function" != typeof Math.log10 && (Math.log10 = function(ea) {
		return Math.log(ea) / Math.log(10)
	}), "function" != typeof Math.sign && (Math.sign = function(ea) {
		return 0 < ea ? 1 : ea < 0 ? -1 : 0
	})
}

function cW() {
	var a5o, aKr, aKs, aKt, aKq = !1;

	function aKu() {
		aKq = !0, a5o = -1, aKr = new Array(4);
		for (var a5 = 3; 0 <= a5; a5--) aKr[a5] = !1;
		var tm = Math.floor(1 + .02 * at.min);
		aKs = new Array(4), (aKt = new Array(4))[1] = aKt[3] = aKs[0] = aKs[2] = 0, aKt[0] = aKs[3] = -tm, aKs[1] = aKt[2] = tm
	}

	function aKv() {
		if (-1 !== a5o)
			if (0 !== a7.wD && aB.mI()) {
				for (var aKw = !1, a5 = 3; 0 <= a5; a5--) aKr[a5] && (aKw = !0, hu += aKs[a5], hw += aKt[a5], aZ.xp(aKs[a5], aKt[a5]), aM.a5W());
				aKw ? ba.dW = !0 : ak.m7()
			} else ak.m7()
	}
	this.yM = function(oF) {
		0 !== a7.wD && aB.mI() && (aKq || aKu(), aKr[oF] = !0, -1 === a5o) && (a5o = setInterval(aKv, 20), aKv())
	}, this.yP = function(oF) {
		if (0 !== a7.wD && (aKq || aKu(), aKr[oF] = !1, -1 !== a5o)) {
			for (var aKw = !1, a5 = 3; 0 <= a5; a5--) aKw = aKw || aKr[a5];
			aKw || this.m7()
		}
	}, this.m7 = function() {
		if (aKq && -1 !== a5o) {
			for (var a5 = 3; 0 <= a5; a5--) aKr[a5] = !1;
			clearInterval(a5o), a5o = -1
		}
	}
}

function cX() {
	this.lB = new aKx, this.lF = new aKy, this.nb = new aKz, this.a9Y = new aL0, this.a8W = new aL1, this.aHW = new aL2, this.oE = new aL3, this.aJ6 = new aL4, this.a3L = new aL5, this.aL6 = new aL7, this.aL8 = new aL9, this.aLA = new aLB, this.aLC =
		new aLD, this.dO = function() {
			this.lB.dO()
		}
}

function aKx() {
	var aLE, aLG;
	this.aA0 = 5, this.aA1 = this.aA0 - 1, this.a9W = this.aA0 + this.aA1, this.a9V = [0, 1, 5, 2, 6, 3, 7, 4, 8], this.aLF = null;

	function dr(a5) {
		return aLG[a5].aKq && aLE[a5].dr()
	}

	function aLO(xP) {
		aLG[xP].e0 = ba.e0, aLG[xP].aLI = !1
	}
	this.xW = 0, this.xV = 0, this.dO = function() {
		this.aLF = new Array(this.aA0);
		this.aLF[0] = "territorial.io";
		var a5, aEe = au.aF0(0);
		for (au.a0z(0), a5 = 1; a5 < this.aA0; a5++) this.aLF[a5] = aE.vp() + ".territorial.io";
		for (au.a0z(aEe), aLE = new Array(this.a9W), aLG = new Array(this.a9W), a5 = this.a9W - 1; 0 <= a5; a5--) aLG[a5] = {
			aKq: !1,
			e0: 0,
			aLI: !1
		};
		this.a9X(0, 0)
	}, this.aLJ = function(a5) {
		return aLE[a5]
	}, this.aLK = function() {
		return this.xV < this.aA0 ? this.xV : this.xV - this.aA1
	}, this.iR = function() {
		for (var a5 = this.a9W - 1; 0 <= a5; a5--) this.a9R(a5) && ba.e0 > aLG[a5].e0 + 15e3 && aw.nb.aLL(a5, aLG[a5].aLI);
		!this.a9R(0) && ba.e0 > aLG[0].e0 + 8e3 && (aLG[0].e0 = ba.e0, this.a9X(0, 0))
	}, this.a9X = function(xP, aGi) {
		if (aLG[xP].aKq) {
			if (aLE[xP].dr()) return aLE[xP].aLN(aGi), aLE[xP].a9R();
			aLE[xP].ql()
		}
		return this.aLM(xP, aGi), !1
	}, this.aLM = function(xP, aGi) {
		aLG[xP].aKq = !0, aLO(xP), aLE[xP] = new aLP, aLE[xP].dO(xP, aGi)
	}, this.aLN = function(xP, aGi) {
		dr(xP) && aLE[xP].aLN(aGi)
	}, this.aLQ = function(xP, aGi) {
		aw.a8W.aLR(xP)
	}, this.a9R = function(a5) {
		return aLG[a5].aKq && aLE[a5].a9R()
	}, this.send = function(xP, a6) {
		a6.length, aLO(xP), aLE[xP].send(a6)
	}, __fx.customLobby.setSendFunction(this.send), this.y6 = function(xP) {
		8 === aU.xT() && (aLG[xP].aLI = !0, aw.lF.aLS = !0)
	}, this.close = function(xP, aLT) {
		dr(xP) && aLE[xP].close(aLT)
	}, this.aLU = function(xP, aLT) {
		k.xb(aLT), dr(xP) && aLE[xP].close(aLT)
	}, this.xe = function(aLT) {
		for (var a5 = this.a9W - 1; 0 <= a5; a5--) this.close(a5, aLT)
	}, this.aLV = function(xP, aLT) {
		for (var a5 = this.a9W - 1; 0 <= a5; a5--) a5 !== xP && this.close(a5, aLT)
	}, this.a1C = function() {
		this.close(this.xW, 3246)
	}, this.aLW = function(xP, e) {
		aLE[xP].ql(), k.xO(xP, e.code)
	}
}

function aKy() {
	this.aLS = !1, this.iR = function() {
		ba.jZ() % 250 != 249 || a7.gf || (aw.a8W.aLX(+(this.aLS && aa.lX[a7.eD]), af.jd + bI.lB.oS), this.aLS = !1)
	}
}

function aL5() {
	function aLt(aLv) {
		var eW = a7.data,
			aLv = (eW.a0y = bC.oG(aLv), eW.a10 = bC.oG(14), bC.oG(4)),
			aLv = (aLv < 7 ? (eW.a0q = 1, eW.a0t = aLv + 2) : 9 === aLv ? (eW.a0q = eW.a0s = 1, eW.a0t = 2) : (eW.a0q = 0, eW.a0r = 7 === aLv ? 0 : 10 === aLv ? 1 : 2), eW.a0u = bC.oG(1), bC.oG(6));
		return eW.a1H = bN.aEf(aLv) ? 0 : 1, bN.aEp(eW, aLv), eW.a1K = bC.oG(14), aLv
	}
	this.aLZ = function(xP, a6) {
		bC.dO(a6), 0 === bC.size ? aw.lB.aLU(xP, 3205) : __fx.customLobby.isCustomMessage(a6) || ((0 === bC.oG(1) ? function(xP) {
			var aLd = bC.oG(6);
			0 === aLd ? function(xP) {
					if (0 === xP && 8 !== aU.xT()) {
						m.lB.aK7();
						for (var aLn = bC.oG(12), aLo = bC.oG(6), fC = new Array(aLn), a5 = 0; a5 < aLn; a5++) fC[a5] = bC.oG(aLo);
						aN.a5v(fC)
					}
				}(xP) : 2 === aLd ? aw.aL6.aLf(xP) : 3 === aLd || 4 === aLd ? ar.dO() : 9 === aLd ? aw.aL8.aLg(xP) : 10 === aLd ? aw.aLA.aLh() : 11 === aLd ? aw.aL8.aLi() : 12 === aLd ? aw.aLA.aLj() : 13 === aLd ? aw.aLC.aLk() :
				14 === aLd ? aw.aLC.aLl() : 15 === aLd && aw.aL8.aLm()
		} : function(xP) {
			if (8 !== aU.xT() && !ar.aA2()) return;
			if (xP !== aw.lB.xW) aw.lB.aLU(xP, 3244);
			else if (0 === bC.oG(1)) ba.wM.aLw(bC.a6);
			else {
				var a5, xP = bC.oG(2);
				if (0 === xP) {
					var np, nb = bC.oG(9);
					0 !== aa.lX[nb] && 0 !== aa.lX[a7.eD] && (np = bC.oG(10), aH.no(nb, a7.eD, np), aZ.oo(nb, 1, np))
				} else if (1 === xP) ! function() {
					var nb = bC.oG(9);
					0 !== aa.lX[nb] && 0 !== aa.lX[a7.eD] && b1.aEO(0, [nb], !0) && aH.o7(nb, 1)
				}();
				else if (2 === xP) ! function() {
					var nb = bC.oG(9),
						target = bC.oG(9);
					0 !== aa.lX[nb] && 0 !== aa.lX[target] && 0 !== aa.lX[a7.eD] && b1.aEO(1, [nb], !0) && (aZ.oo(nb, 3, 96), aZ.oo(target, 4, 96), aH.a3S(nb, target))
				}();
				else if (a3 && !a4) {
					var eT = 540;
					for (b8.a1(17287), b8.a2(1, 0), b8.a2(6, 10), eT = Math.min(b4.nY.oI.length, 540), a5 = 0; a5 < eT; a5++) b8.aM2(32, b4.nY.oI[a5]);
					aw.lB.send(aw.lB.xW, b8.a6)
				}
			}
		})(xP), ba.aLc())
	}, this.aA3 = function(a6) {
		if (bC.dO(a6), bC.oF = 1, 3 === bC.oG(6)) {
			bC.oF += 20;
			var eW = a7.data = new a0j,
				a6 = aLt(9),
				aLu = eW.a0o = bC.oG(9) + 1;
			eW.a0w = 1 === eW.a0q || aLu < 100, eW.a1Q = new Uint32Array(aLu), eW.a1U = new Array(aLu);
			for (var a5 = 0; a5 < aLu; a5++) bC.oF++, eW.a1Q[a5] = bC.oG(18), eW.a1U[a5] = bB.sM.sO(bC.oG(5));
			aU.a9l(), bN.a1(a6, eW.a1K), a7.a0n()
		} else ! function() {
			bC.oF += 20;
			var eW = a7.data = new a0j,
				aAi = aLt(1);
			eW.a0o = 2;
			eW.a0w = 1, eW.ui = new Uint16Array(2), eW.a1Q = new Uint32Array(2), eW.a1U = new Array(2);
			for (var a5 = 0; a5 < 2; a5++) bC.oF++, eW.a1Q[a5] = bC.oG(18), eW.ui[a5] = bC.oG(14), eW.a1U[a5] = bB.sM.sO(bC.oG(5));
			aU.a9l(), bN.a1(aAi, eW.a1K), a7.a0n()
		}()
	}, this.a9y = function() {
		bC.oF = 1;
		var aLd = bC.oG(6),
			aLr = bC.oG(10);
		return aw.lB.xV > aw.lB.aA1 && (aLr += aw.lB.aA1), aw.lB.xV === aLr ? (aw.lB.xW = aLr, !1) : (aw.lB.close(aw.lB.xV, 3247), aw.lB.xW = aLr, ar.a9t = bC.oG(10), ar.a9u = bC.oG(3 === aLd ? 9 : 1), aw.lB.a9X(aLr, 5) && aw.nb.aLs(), !0)
	}
}

function aLB() {
	this.aLh = function() {
		be.lB.rt(), be.pw.px(105, bA.qT.qU(bA.qT.qV(5))), be.pw.px(106, bA.qT.qU(bA.qT.qV(8))), be.pw.px(109, bC.oG(30)), be.pw.px(108, be.dh.data[109].value), be.pw.px(111, be.dh.data[109].value + 1), be.pw.px(107, 0), be.pw.px(110, "")
	}, this.aLj = function() {
		var aM5, aM6, aM7, aM8, aM4;
		bC.size < b8.aM3(29) ? aw.lB.aLU(0, 3254) : (aM4 = bC.oG(5), aM5 = bC.oG(3), aM6 = bC.oG(3), aM7 = bC.oG(3), aM8 = bC.oG(8), bC.aM9(197 + 16 * (aM4 + aM5 + aM6 + aM7 + aM8) + 32 + 32 + 30 + 128 + 32 + 30 + 10 + 32 + 2 + 10 + 5) ? (aM4 = {
			qP: bC.oG(30),
			s7: bC.oG(16),
			s8: bC.oG(30),
			s9: bC.oG(30),
			sA: bC.oG(30),
			sB: bC.aMA(32),
			username: bB.sM.sO(aM4),
			sC: bB.sM.sO(aM5),
			sD: bB.sM.sO(aM6),
			sE: bC.aMA(32),
			sF: bC.aMA(32),
			sG: bC.oG(30),
			sH: bC.aMA(32),
			sI: bC.aMA(32),
			sJ: bC.aMA(32),
			sK: bC.aMA(32),
			aHg: bC.aMA(32),
			aHh: bC.aMA(30),
			aHZ: bC.aMA(10),
			aHp: bC.aMA(32),
			aHq: bB.sM.sO(aM7),
			aHk: bC.aMA(2),
			aHl: bC.aMA(10),
			aHi: bB.sM.sO(aM8),
			aHm: bC.aMA(5)
		}, be.pw.px(150, aM4.aHZ), 8 === m.qQ && (25 === m.aBH().aJ1 ? (aM4.aHC = !0, m.lB.aGt = aM4, m.aBH().aJG(25, !1)) : (aM4.aHC = !1, aM4.qO = be.dh.data[105].value, m.lB.aGq = aM4, be.pw.s6(aM4), m.aBH().aJG(16, !0)))) : aw.lB.aLU(
			0, 3267))
	}
}

function aLD() {
	this.aLk = function() {
		var a5;
		if (bC.size < b8.aM3(39)) aw.lB.aLU(0, 3259);
		else {
			var qh = bC.oG(6),
				eT = bC.oG(10),
				h9 = bC.oG(16);
			if (bC.aM9(39 + 16 * h9 + eT * (0 === qh ? 111 : 1 === qh ? 101 : 2 === qh || 3 === qh ? 127 : 212))) {
				var data = [];
				if (0 === qh)
					for (a5 = 0; a5 < eT; a5++) data.push([bC.oG(30), bB.sM.sO(bC.oG(5)), bC.oG(16), bC.oG(30), bC.oG(30)]);
				else if (1 === qh)
					for (a5 = 0; a5 < eT; a5++) data.push([bC.oG(16), bB.sM.sO(bC.oG(3)), bC.oG(16), bB.sM.sO(bC.oG(5)), bC.oG(31), bC.oG(30)]);
				else if (2 === qh || 3 === qh)
					for (a5 = 0; a5 < eT; a5++) data.push([bC.oG(30), bB.sM.sO(bC.oG(5)), bC.aMA(32), bC.oG(30), bC.oG(30)]);
				else
					for (a5 = 0; a5 < eT; a5++) data.push([bC.oG(20), bC.oG(30), bC.oG(30), bC.oG(30), bC.oG(30), bC.aMA(32), bC.oG(30), bB.sM.sO(bC.oG(5)), bB.sM.sO(bC.oG(5))]);
				8 === m.qQ && m.aBH().aJG(21, !0, {
					qh: qh,
					data: data
				})
			} else aw.lB.aLU(0, 3260)
		}
	}, this.aLl = function() {
		if (bC.size < b8.aM3(29)) aw.lB.aLU(0, 3265);
		else {
			var aMB = bC.oG(4),
				aMC = bC.oG(7),
				aMD = bC.oG(11);
			if (bC.aM9(29 + 16 * aMC + 16 * aMD + 11 * aMB)) {
				for (var data = [], a5 = 0; a5 < aMB; a5++) {
					for (var aME = bB.sM.sO(bC.oG(3)), aMF = bC.oG(8), aIM = [], em = 0; em < aMF; em++) aIM.push(bC.oG(16));
					data.push({
						name: "[" + aME + "]",
						aIM: aIM
					})
				}
				8 === m.qQ && m.aBH().aJG(23, !0, data)
			} else aw.lB.aLU(0, 3266)
		}
	}
}

function aL7() {
	this.aLf = function(xP) {
		var a5, aAK, aMG, aMH, aMI;
		if (xP !== aw.lB.xV) aw.lB.close(xP, 3239);
		else if (6 === aU.xT() && ao.dO(), 7 !== aU.xT()) aw.lB.close(xP, 3251);
		else {
			for (aAK = [0, 0, 0, 0], aMG = bC.oG(6), a5 = 0; a5 < 4; a5++) aAK[a5] = bC.oG(aMG);
			for (aMH = bC.oG(4), aMI = [], a5 = 0; a5 < aMH; a5++) {
				aMI.push({
					id: bC.oG(5),
					aAg: bC.oG(4),
					a0u: 1 === bC.oG(1),
					e8: bC.oG(6),
					a1K: bC.oG(14),
					aAk: bC.oG(aMG),
					aAl: bC.oG(9) + 1,
					a9g: bC.oG(10)
				});
				for (var aAm = bC.oG(3), aAn = new Array(aAm), aAo = new Array(aAm), em = 0; em < aAm; em++) aAo[em] = bC.oG(9) + 1, aAn[em] = bB.sM.sO(bC.oG(3));
				aMI[a5].aAm = aAm, aMI[a5].aAn = aAn, aMI[a5].aAo = aAo
			}
			ao.px(aAK, aMI)
		}
	}
}

function aL9() {
	this.aLg = function(xP) {
		var aLy, aMJ;
		bC.aM9(70) ? (aLy = bC.oG(3), aMJ = bd.aMK.iR(bC.oG(30), bC.oG(30)), aw.a8W.aML(xP, aMJ, aLy), 0 < aLy || (0 === xP && 0 === be.dh.data[105].value.length ? aw.a8W.aJ4(0) : aw.aHW.aMM(xP), 4 === aw.lB.aLJ(xP).aMN() ? 6 === aU.xT() && aw
			.a9Y.a9Z(xP) : 5 !== aw.lB.aLJ(xP).aMN() || 8 !== aU.xT() && 10 !== aU.xT() || aw.nb.aLs())) : aw.lB.aLU(xP, 3269)
	}, this.aLi = function() {
		var id = bC.oG(6);
		0 === id ? (aN.a5r || aw.a8W.aJ4(1), b3.a8U(), 8 === m.qQ && m.aBH().aJF()) : 21 === id ? 8 === m.qQ && m.aBH().aJG(17) : 22 === id && (be.pw.px(106, be.dh.data[110].value), be.pw.px(110, ""), 8 === m.qQ) && m.aBH().aJG(16)
	}, this.aLm = function() {
		var eT = bC.oG(16),
			aMO = bC.oG(16);
		if (bC.aM9(55 + 10 * eT + 16 * aMO)) {
			for (var fC = [], a5 = 0; a5 < eT; a5++) fC.push(bB.sM.sO(bC.oG(10)));
			b3.a8Y(fC)
		} else aw.lB.aLU(xP, 3270)
	}
}

function aKz() {
	this.aLL = function(xP, aLI) {
		b8.a1(8), b8.a2(1, 0), b8.a2(6, 4), b8.a2(1, aLI ? 1 : 0), aw.lB.send(xP, b8.a6)
	}, this.aLs = function() {
		b8.a1(58), b8.a2(1, 0), b8.a2(6, 5), b8.a2(8, aw.lB.aLK()), b8.a2(10, ar.a9t), b8.a2(9, ar.a9u), b8.a2(10, dd), b8.a2(14, g.de), aw.lB.send(aw.lB.xW, b8.a6)
	}, this.nc = function(eF) {
		b8.a1(27), b8.a2(1, 1), b8.a2(4, 0), b8.a2(22, eF), aw.lB.send(aw.lB.xW, b8.a6)
	}, this.nd = function(ht, ik) {
		b8.a1(25), b8.a2(1, 1), b8.a2(4, 1), b8.a2(10, ht), b8.a2(10, ik), aw.lB.send(aw.lB.xW, b8.a6)
	}, this.nh = function(ht, nf) {
		b8.a1(24), b8.a2(1, 1), b8.a2(4, 2), b8.a2(10, ht), b8.a2(9, nf), aw.lB.send(aw.lB.xW, b8.a6)
	}, this.ni = function(ht, eF) {
		b8.a1(37), b8.a2(1, 1), b8.a2(4, 3), b8.a2(10, ht), b8.a2(22, eF), aw.lB.send(aw.lB.xW, b8.a6)
	}, this.nl = function(lv, eF) {
		b8.a1(37), b8.a2(1, 1), b8.a2(4, 4), b8.a2(10, lv), b8.a2(22, eF), aw.lB.send(aw.lB.xW, b8.a6)
	}, this.nn = function(ik) {
		b8.a1(15), b8.a2(1, 1), b8.a2(4, 5), b8.a2(10, ik), aw.lB.send(aw.lB.xW, b8.a6)
	}, this.nr = function(oF) {
		b8.a1(15), b8.a2(1, 1), b8.a2(4, 6), b8.a2(10, oF), aw.lB.send(aw.lB.xW, b8.a6)
	}, this.nu = function(nt) {
		b8.a1(6), b8.a2(1, 1), b8.a2(4, 7), b8.a2(1, nt), aw.lB.send(aw.lB.xW, b8.a6)
	}, this.nw = function() {
		b8.a1(5), b8.a2(1, 1), b8.a2(4, 8), aw.lB.send(aw.lB.xW, b8.a6)
	}, this.ny = function(ht, eF, ik) {
		b8.a1(47), b8.a2(1, 1), b8.a2(4, 10), b8.a2(10, ht), b8.a2(10, ik), b8.a2(22, eF), aw.lB.send(aw.lB.xW, b8.a6)
	}, this.o5 = function(aMP, aMQ) {
		b8.a1(24), b8.a2(1, 1), b8.a2(4, 15), b8.a2(9, aMQ), b8.a2(10, aMP), aw.lB.send(aw.lB.xW, b8.a6)
	}, this.o8 = function(a3L) {
		b8.a1(14), b8.a2(1, 1), b8.a2(4, 14), b8.a2(9, a3L), aw.lB.send(aw.lB.xW, b8.a6)
	}, this.oC = function(aMR, target) {
		var a5, eT = aMR.length;
		for (b8.a1(14 + 9 * eT), b8.a2(1, 1), b8.a2(4, 13), b8.a2(9, target), a5 = 0; a5 < eT; a5++) b8.a2(9, aMR[a5]);
		aw.lB.send(aw.lB.xW, b8.a6)
	}
}

function aL2() {
	this.aMS = function() {
		b8.a1(39), b8.a2(1, 0), b8.a2(6, 16), aw.a8W.aMT(), aw.lB.send(0, b8.a6)
	}, this.aMM = function(xP) {
		b8.a1(115), b8.a2(1, 0), b8.a2(6, 17), bB.qT.sa(be.dh.data[105].value, 5), bB.qT.sa(be.dh.data[106].value, 8), b8.a2(30, be.dh.data[109].value), aw.lB.send(xP, b8.a6)
	}, this.aJI = function() {
		b8.a1(55), b8.a2(1, 0), b8.a2(6, 18), bB.qT.sZ(be.dh.data[110].value), aw.lB.send(0, b8.a6)
	}, this.aJ5 = function(username) {
		b8.a1(12 + 16 * username.length), b8.a2(1, 0), b8.a2(6, 20), aw.a8W.aMV(username), aw.lB.send(0, b8.a6)
	}, this.aJE = function(a07) {
		var eT = a07.ow.length;
		b8.a1(21 + 16 * eT), b8.a2(1, 0), b8.a2(6, 29), b8.a2(6, a07.qS), b8.a2(8, eT), bA.sM.sZ(a07.ow), aw.lB.send(0, b8.a6)
	}, this.aHe = function(data) {
		b8.a1(73), b8.a2(1, 0), b8.a2(6, 25), b8.a2(6, data.qS), bB.qT.sa(data.qO, 5), b8.a2(30, data.qP), aw.lB.send(0, b8.a6)
	}, this.aHX = function(data) {
		b8.a1(105), b8.a2(1, 0), b8.a2(6, 27), b8.a2(6, data.qS), bB.qT.sa(data.qO, 5), b8.a2(30, data.qP), b8.aM2(32, data.value), aw.lB.send(0, b8.a6)
	}
}

function aL3() {
	this.oD = function() {
		var g3, eT = a7.jc,
			w5 = bM.result.w5,
			aMW = w5.length,
			wr = (b8.a1(40 + 16 * eT + aMW * (33 + 3 * (a7.jw < 7))), b8.a2(1, 1), b8.a2(4, 12), b8.a2(10, aMW), b8.a2(1, +(2 === a7.wA)), b8.a2(24, bM.result.we), aa.wr);
		for (a5 = 0; a5 < eT; a5++) b8.a2(16, wr[a5]);
		var gJ = aa.gJ;
		for (a5 = 0; a5 < aMW; a5++) g3 = w5[a5], b8.a2(9, g3), b8.a2(24, gJ[g3]);
		if (a7.jw < 7)
			for (var eR = bb.eR, k5 = bb.k5, a5 = 0; a5 < aMW; a5++) b8.a2(3, 7 & k5[eR[w5[a5]]]);
		aw.lB.send(aw.lB.xW, b8.a6)
	}
}

function aL4() {
	this.aJ7 = function(qh, qi, qj) {
		b8.a1(75), b8.a2(1, 0), b8.a2(6, 21), b8.a2(6, qh), b8.a2(1, +(qi < 0)), b8.a2(1, +(qj < 0)), b8.a2(30, Math.abs(qi)), b8.a2(30, Math.abs(qj)), aw.lB.send(0, b8.a6)
	}, this.aJ8 = function(qh, aJ9, aJA) {
		b8.a1(18 + 16 * aJ9.length + 30), b8.a2(1, 0), b8.a2(6, 22), b8.a2(6, qh), aw.a8W.aMV(aJ9), b8.a2(30, aJA), aw.lB.send(0, b8.a6)
	}, this.aJD = function(qh, aJ9, aJA) {
		b8.a1(73), b8.a2(1, 0), b8.a2(6, 28), b8.a2(6, qh), bB.qT.sa(aJ9, 5), b8.a2(30, aJA), aw.lB.send(0, b8.a6)
	}, this.aJB = function(aIL, wz) {
		for (var eT = wz.length, h9 = 0, a5 = 0; a5 < eT; a5++) h9 += wz[a5].length;
		for (b8.a1(21 + 3 * eT + 16 * h9), b8.a2(1, 0), b8.a2(6, 23), b8.a2(3, aIL), b8.a2(4, eT), b8.a2(7, h9), a5 = 0; a5 < eT; a5++) b8.a2(3, wz[a5].length), bA.sM.sZ(wz[a5]);
		aw.lB.send(0, b8.a6)
	}, this.aJC = function(aIL, qi, qj) {
		b8.a1(52), b8.a2(1, 0), b8.a2(6, 24), b8.a2(3, aIL), b8.a2(1, +(qi < 0)), b8.a2(1, +(qj < 0)), b8.a2(20, Math.abs(qi)), b8.a2(20, Math.abs(qj)), aw.lB.send(0, b8.a6)
	}
}

function aL0() {
	this.a9Z = function(xP) {
		var username = be.dh.data[122].value.slice(0, 20),
			username = (b8.a1(22 + 16 * username.length + 18), b8.a2(1, 0), b8.a2(6, 1), b8.a2(10, dd), aw.a8W.aMV(username), b6.color.zH(be.lB.s0()));
		b8.a2(6, username[0]), b8.a2(6, username[1]), b8.a2(6, username[2]), aw.lB.xV = xP, aw.lB.send(xP, b8.a6)
	}, this.aAt = function(aAf) {
		return b8.a1(11), b8.a2(1, 0), b8.a2(6, 2), b8.a2(4, aAf), aw.lB.send(aw.lB.xV, b8.a6), !0
	}
}

function aL1() {
	this.aLR = function(xP) {
		b8.a1(39), b8.a2(1, 0), b8.a2(6, 13), b8.a2(14, g.de), b8.a2(4, q.id), b8.a2(7, q.ex), b8.a2(1, +a3), b8.a2(1, +a4), b8.a2(5, (new Date).getHours() % 24), aw.lB.send(xP, b8.a6)
	}, this.aML = function(xP, aMJ, aLy) {
		b8.a1(70), b8.a2(1, 0), b8.a2(6, 14), b8.a2(3, aLy), b8.a2(30, aMJ[0]), b8.a2(30, aMJ[1]), aw.lB.send(xP, b8.a6)
	}, this.aJ4 = function(id) {
		b8.a1(13), b8.a2(1, 0), b8.a2(6, 15), b8.a2(6, id), aw.lB.send(0, b8.a6)
	}, this.a8X = function(id, ow) {
		var eT = Math.min(ow.length, 63);
		b8.a1(19 + 16 * eT), b8.a2(1, 0), b8.a2(6, 26), b8.a2(6, id), b8.a2(6, eT), bA.sM.sZ(ow), aw.lB.send(0, b8.a6)
	}, this.aMY = function(aLr, p7) {
		b8.a1(7 + 26 * p7.length), b8.a2(1, 0), b8.a2(6, 9);
		for (var a5 = 0; a5 < p7.length; a5++) b8.a2(16, p7[a5][0]), b8.a2(10, p7[a5][1]);
		aw.lB.send(aLr, b8.a6)
	}, this.aLX = function(aMZ, aMa) {
		b8.a1(20), b8.a2(1, 0), b8.a2(6, 19), b8.a2(1, aMZ), b8.a2(12, aMa), aw.lB.send(aw.lB.xW, b8.a6)
	}, this.aMV = function(username) {
		b8.a2(5, username.length), bA.sM.sZ(username)
	}
}

function aLP() {
	var xP, aGi, aMb, aMc = ["wss://", "/s50/", "/s51/", "/s52/"];

	function aLQ() {
		aw.lB.aLQ(xP, aGi)
	}

	function aMh(e) {
		aw.a3L.aLZ(xP, new Uint8Array(e.data))
	}

	function aMi() {}

	function aLW(e) {
		aw.lB.aLW(xP, e)
	}
	this.dO = function(oF, aMd) {
		xP = oF, aGi = aMd;
		oF = aMc[0];
		xP < aw.lB.aA0 ? oF += aw.lB.aLF[xP] + aMc[1 + da] : oF += aw.lB.aLF[0] + "/i" + (1 + da) + (xP - aw.lB.aA1) + "/", (aMb = new WebSocket(__fx.customLobby.isActive() && xP === 1 ? __fx.customLobby.getSocketURL() : oF)).binaryType =
			"arraybuffer", aMb.onopen = aLQ, aMb.onmessage = aMh, aMb.onclose = aLW, aMb.onerror = aMi
	}, this.aMf = function() {
		return aMb.readyState === aMb.CONNECTING
	}, this.a9R = function() {
		return aMb.readyState === aMb.OPEN
	}, this.dr = function() {
		return this.aMf() || this.a9R()
	}, this.aLN = function(aMd) {
		aGi = aMd
	}, this.aMN = function() {
		return aGi
	}, this.send = function(a6) {
		this.a9R() && aMb.send(a6)
	}, this.close = function(aLT) {
		this.dr() && (aMb.close(aLT), this.ql())
	}, this.ql = function() {
		aMb.onopen = null, aMb.onmessage = null, aMb.onclose = null, aMb.onerror = null
	}
}

function dA() {
	var aMj = !1,
		a3g = 0,
		z = 0,
		qY = 0,
		gap = 0,
		hE = null,
		uY = null,
		yt = null;

	function aMl() {
		for (var aAV, aMp = 0, eT = 0, eo = Math.floor(z / 2), hH = Math.floor(qY / 2), aAU = 1.5 * Math.PI, a5 = a7.ta; 0 <= a5; a5--) eT += yt[a5], 0 === yt[a5] && aMp++;
		if (aMj = !1, uY.clearRect(0, 0, z, z), uY.fillStyle = t.mX, uY.fillRect(0, 0, z, z), uY.fillStyle = t.ma, uY.fillRect(0, 0, z, gap), uY.fillRect(0, 0, gap, z), uY.fillRect(z - gap, 0, gap, z), uY.fillRect(0, z - gap, z, gap), 0 < eT)
			if (aMp === a7.ta) {
				for (a5 = a7.ta; 0 <= a5; a5--)
					if (0 < yt[a5]) {
						! function(a5, eo, hH) {
							uY.fillStyle = bb.aAZ[bb.k5[a5]], uY.beginPath(), uY.arc(eo, eo, hH, 0, 2 * Math.PI), uY.fill()
						}(a5, eo, hH);
						break
					}!
				function(eo) {
					var fontSize = eo / 3;
					uY.font = b6.pF.qW(1, fontSize), uY.fillStyle = t.ma, uY.fillText("100%", eo, eo + .1 * fontSize)
				}(eo)
			} else {
				for (a5 = 0; a5 <= a7.ta; a5++) 0 < yt[a5] && (! function(a5, eo, hH, aAU, aAV) {
					uY.fillStyle = bb.aAZ[bb.k5[a5]], uY.beginPath(), uY.arc(eo, eo, hH, aAU, aAV), uY.lineTo(eo, eo), uY.fill()
				}(a5, eo, hH, aAU, aAV = aAU + 2 * Math.PI * yt[a5] / eT), function(eo, hH, aAU, aAV) {
					var ew = (aAV - aAU) / (2 * Math.PI),
						fontSize = +hH * Math.min(ew, .37);
					fontSize < 8 || (aAU = (aAU + aAV) / 2, aAV = Math.floor(100 * ew + .5) + "%", hH *= .525 - Math.max(.6 * (ew - .7), 0), uY.font = b6.pF.qW(1, fontSize), uY.fillStyle = t.ma, uY.fillText(aAV, eo + Math.cos(aAU) * hH, eo +
						Math.cos(aAU + 1.5 * Math.PI) * hH))
				}(eo, hH, aAU, aAV), 0 !== a5 && aAX(eo, hH, aAU), aAU = aAV);
				aAX(eo, hH, 1.5 * Math.PI)
			}!
		function(eo, hH) {
			uY.beginPath(), uY.arc(eo, eo, hH, 0, 2 * Math.PI), uY.stroke()
		}(eo, hH)
	}

	function aAX(eo, hH, aAa) {
		uY.beginPath(), uY.moveTo(eo, eo), uY.lineTo(eo + Math.cos(aAa) * hH, eo + Math.cos(aAa + 1.5 * Math.PI) * hH), uY.stroke()
	}
	this.dO = function() {
		if (a7.ic) {
			a3g = 0, yt = new Uint32Array(a7.ta + 1);
			for (var a5 = a7.ta; 0 <= a5; a5--) yt[a5] = 0;
			for (a5 = af.jd - 1; 0 <= a5; a5--) yt[bb.eR[af.jf[a5]]] += 1;
			this.resize()
		} else yt = uY = hE = null
	}, this.a4U = function() {
		return z
	}, this.resize = function() {
		a7.ic && (z = Math.floor(q.r.vH() && !a7.m2 ? .18 * at.min : .13 * at.pH), z = (z *= 1 + (.5 + .2 * q.r.vH()) * a7.m2) + z % 2, qY = Math.floor(7 * z / 8), (hE = hE || document.createElement("canvas")).width = z, hE.height = z, uY = hE
			.getContext("2d", {
				alpha: !0
			}), gap = Math.max(1, .015 * z), uY.lineWidth = gap, uY.strokeStyle = t.ma, b6.pF.textAlign(uY, 1), b6.pF.textBaseline(uY, 1), aMl())
	}, this.wn = function() {
		var e1, kt = this.ku();
		return bb.k5[kt] || (kt = function() {
			for (var kt = -1, a5 = a7.ta; 1 <= a5; a5--)(-1 === kt || yt[a5] > yt[kt]) && (kt = a5);
			return kt
		}(), e1 = aa.gJ[kx[0]], -1 !== kt && yt[kt] > e1) ? yt[kt] : e1
	}, this.xD = function() {
		return a3g = 31, this.iR(), this.ku()
	}, this.ku = function() {
		for (var kt = 0, a5 = a7.ta; 0 < a5; a5--) yt[a5] > yt[kt] && (kt = a5);
		return kt
	}, this.kv = function(aMn) {
		for (var fy = 0, je = af.jf, eR = bb.eR, eT = af.jd, f8 = bJ.f8, a5 = 0; a5 < eT; a5++) {
			var g3 = je[a5];
			eR[g3] === aMn && (f8[fy++] = g3)
		}
		bJ.f0[0] = fy
	}, this.iR = function() {
		if (a7.ic && 32 <= ++a3g) {
			a3g = 0;
			for (var a5 = a7.ta; 0 <= a5; a5--) yt[a5] = 0;
			for (a5 = af.jd - 1; 0 <= a5; a5--) yt[bb.eR[af.jf[a5]]] += aa.gJ[af.jf[a5]];
			aMj = !0
		}
	}, this.lK = function() {
		a7.ic && aMj && aMl()
	}, this.rE = function() {
		a7.ic && (a7.m2 ? rF.drawImage(hE, bX.gap, bX.gap) : rF.drawImage(hE, bX.gap, a4V + 2 * bX.gap))
	}
}

function ct() {
	function aMu(key) {
		var aKM;
		return "undefined" == typeof URLSearchParams || (aKM = window.location.search, "string" != typeof(aKM = new URLSearchParams(aKM).get(key))) || aKM.length < 1 ? null : aKM
	}
	this.dX = function() {
		if (0 !== q.id) return !1;
		if (! function() {
				var value = aMu("account");
				if (!value && !(value = aMu("a"))) return void bD.clear();
				return bD.clear(), m.n(8, m.qQ, new qR(1e3, {
					qS: 0,
					qO: value,
					qP: 0
				})), 1
			}()) {
			var value = aMu("replay");
			if (!this.clear()) return !1;
			if (!value) return !1;
			m.n(3, 0, value)
		}
		return !0
	}, this.clear = function() {
		var xM = new URL(window.location.href);
		xM.search = "";
		try {
			return history.replaceState(null, "", xM.toString()), !0
		} catch (e) {
			console.log("error 352: " + e)
		}
		return !1
	}, this.aHr = function(key, value) {
		if (0 === q.id) try {
			var xM = new URL(window.location.href),
				g3 = xM.searchParams;
			g3.set(key, value), xM.search = g3.toString(), history.replaceState(null, "", xM.toString())
		} catch (e) {
			console.log("error 358: " + e)
		}
	}
}

function cY() {
	var aMw, fC;
	this.dO = function() {
		for (var a5 = (fC = new Uint16Array(101)).length - 1; 0 <= a5; a5--) fC[a5] = bG.ev(32768 * a5, 100);
		this.a0z(0)
	}, this.value = function(g3) {
		return fC[g3]
	}, this.aF0 = function() {
		return bG.ev(aMw - 1, 2)
	}, this.a0z = function(aEe) {
		aMw = 2 * aEe % 32768 + 1
	}, this.random = function() {
		return aMw = 167 * aMw % 32768
	}, this.iu = function(lS) {
		return bG.ev(lS * this.random(), 32768)
	}, this.jU = function(g3) {
		return 0 !== g3 && this.random() < this.value(g3)
	}, this.iD = function(em, en) {
		return em + this.iu(en - em)
	}
}

function cp() {
	this.oU = new aMx, this.a1B = new aMy, this.aJi = new aMz, this.dO = function() {
		a7.gf || this.oU.dO()
	}, this.iR = function() {
		a7.gf || (this.oU.iR(), 3 !== m.qQ) || ba.jZ() % 15 != 5 && 2 !== a7.wD || m.aBH().aKN()
	}, this.aKQ = function() {
		0 === a7.wD && aU.a9l(), a7.a0k.a1j(), a7.data.hE = null, aw.lB.close(aw.lB.xW, 3257), aw.lB.xW = 0, a7.data.a0p = 1, a7.a0n()
	}, this.aKP = function(ow) {
		var a5 = ow.indexOf("=");
		return 0 <= a5 ? ow.substring(a5 + 1) : ow
	}, this.aKO = function(ow) {
		return "https://territorial.io/?replay=" + ow
	}
}

function aMx() {
	this.aN1 = null, this.aN2 = null, this.aN3 = null, this.aN4 = null, this.aN5 = null, this.aN6 = null, this.a1A = "";
	var aN7 = 0;
	this.dO = function() {
		this.aN1 = [], this.aN2 = [], this.aN3 = [], this.aN4 = [], this.aN5 = [0], this.aN6 = [0], aN7 = 0, this.a1A = ""
	}, this.oV = function(id, fD, fF, fH) {
		a7.gf || 2 === a7.wD || (0 === this.aN5[aN7] && (this.aN6[aN7] ? (this.aN5.push(1), this.aN6.push(0), aN7++) : this.aN5[aN7] = 1), this.aN1.push(id), this.aN2.push(fD), this.aN3.push(void 0 === fF ? 0 : fF), this.aN4.push(void 0 === fH ?
			0 : fH), this.aN6[aN7]++)
	}, this.iR = function() {
		0 === this.aN5[aN7] ? this.aN6[aN7]++ : (this.aN5.push(0), this.aN6.push(0), aN7++)
	}
}

function aMz() {
	var aN8 = 0;

	function aNC(ow, id) {
		aN8 || (id ? 1 === id ? aH.a2m = L(354) + ": " + ow : m.n(4, 3, new o(L(355), ow, 1)) : m.n(4, 3, new o("⚠️ " + L(353), ow, 1)))
	}
	this.se = function(ow, aN9) {
		var p7;
		return aN8 = aN9, bB.qT.sW(bB.qT.sU(bB.qT.sS(ow))), aH.a2m = "", !(! function() {
			if (bC.size < 10) aNC("File Too Small");
			else {
				var aNE = bC.oG(12),
					aMa = (aNE !== dc && aNC("Incompatible Version " + aNE + " " + dc, 1), bC.oG(12)),
					aNF = bC.oG(31);
				if (aNF !== bC.size) aNC("Size Error: " + aNF + " " + bC.size);
				else if (function(j6, aNE) {
						for (var g3 = bC.a6, eT = bC.size, aMa = aNE, a5 = 3; a5 < eT; a5++) aMa = aMa + g3[a5] & 4095;
						return aMa === j6 || (aNC("Hash Error: " + aMa + " " + j6 + " " + eT), !1)
					}(aMa, aNE)) return 1
			}
			return
		}() || (aN9 = bC, (p7 = a7.data = new a0j).a1H = aN9.oG(2), p7.a1I = aN9.oG(8), p7.a1J = aN9.oG(8), p7.a1K = aN9.oG(14), p7.a1L = aN9.aNH(5), 2 === p7.a1H && aN9.aNI(), p7.a1M = aN9.oG(1), p7.e9 = aN9.oG(1), p7.a0x = aN9.oG(10),
			p7.a0o = aN9.oG(10), p7.a0y = aN9.oG(9), p7.a0q = aN9.oG(1), p7.a1N = aN9.oG(2), p7.a0r = aN9.oG(2), p7.a0t = aN9.oG(4), p7.a0s = aN9.oG(1), p7.a0u = aN9.oG(1), p7.a0p = aN9.oG(1), p7.ui = aN9.aNJ(2, 14, 2), p7.a1O = aN9.oG(
			1), p7.a1P = aN9.oG(1), p7.a1Q = aN9.aNJ(10, 18, 512), p7.a1R = aN9.oG(1), p7.tc = aN9.aNJ(4, 10, 9), p7.a1S = aN9.oG(1), p7.k1 = aN9.oG(2), p7.k7 = aN9.oG(4), p7.k4 = aN9.aNJ(4, 4, 9), p7.k3 = aN9.aNJ(10, 4, 512), p7.tP = aN9
			.oG(2), p7.a10 = aN9.oG(14), p7.u7 = aN9.aNJ(11, 12, 1024), p7.a0w = aN9.oG(1), p7.a1T = aN9.oG(2), p7.a1U = aN9.aNK(10, 5, 512), p7.a1V = aN9.oG(1), p7.a1W = aN9.oG(2), p7.a1X = aN9.oG(8), p7.a1Y = aN9.aNJ(10, 8, 512), p7
			.a1Z = aN9.oG(2), p7.a1a = aN9.oG(8), p7.a1b = aN9.aNJ(10, 8, 512), p7.a1c = aN9.oG(2), p7.a1d = aN9.oG(8), p7.a1e = aN9.aNJ(10, 8, 512), p7.a1f = aN9.oG(2), p7.a1g = aN9.oG(11), p7.a1h = aN9.aNJ(10, 11, 512), ! function() {
				var he = bC,
					sf = he.oG(5),
					aNL = he.oG(30),
					aNM = he.oG(30);
				if (aNL + aNM > 8 * he.size) return void aNC("Corrupted File");
				return function(eT) {
						var aNP = new Uint8Array(eT),
							aNQ = new Uint16Array(eT),
							aNR = new Uint32Array(eT),
							aNS = new Uint32Array(eT);
						b5.oU.aN1 = aNP, b5.oU.aN2 = aNQ, b5.oU.aN3 = aNR, b5.oU.aN4 = aNS;
						for (var a5 = 0; a5 < eT; a5++) {
							var id = bC.oG(4);
							aNP[a5] = id, aNQ[a5] = bC.oG(9), 0 === id ? aNR[a5] = bC.oG(22) : 1 === id ? (aNR[a5] = bC.oG(10), aNS[a5] = bC.oG(10)) : 2 === id ? (aNR[a5] = bC.oG(10), aNS[a5] = bC.oG(9)) : 3 === id || 4 === id ? (aNR[
								a5] = bC.oG(10), aNS[a5] = bC.oG(22)) : 5 === id || 6 === id ? aNR[a5] = bC.oG(10) : 7 === id ? aNR[a5] = bC.oG(1) : 10 === id && (aNR[a5] = bC.oG(20), aNS[a5] = bC.oG(22))
						}
					}(aNL),
					function(eT, sf) {
						var aN5 = new Uint8Array(eT),
							aN6 = new Array(eT);
						aN6.fill(0), b5.oU.aN5 = aN5, b5.oU.aN6 = aN6;
						for (var a5 = 0; a5 < eT; a5++) aN5[a5] = bC.oG(1), aN6[a5] = bC.oG(sf)
					}(aNM, sf), 1
			}()) || (bC.oF < 8 * bC.size - 13 || bC.oF > 8 * bC.size ? (aNC("Out Of Bounds Error: " + bC.oF + " " + 8 * bC.size), 1) : (b5.oU.a1A = ow, 2 === a7.data.a1H && (aNC("Load base64 image...", 2), 1))))
	}, this.aND = function(aCN) {
		var zC = document.createElement("canvas"),
			hF = zC.getContext("2d");
		zC.width = aCN.width, zC.height = aCN.height, hF.drawImage(aCN, 0, 0), aN8 ? (a7.data.hE = zC, a7.data.a1H = 2, m.s1(), m.n(19)) : b5.aKQ()
	}
}

function aMy() {
	this.vj = function() {
		var sf = function() {
				for (var aN6 = b5.oU.aN6, eT = aN6.length, max = 0, a5 = 0; a5 < eT; a5++) max = Math.max(max, aN6[a5]);
				return sm(Math.max(max, 1))
			}(),
			z = (p7 = a7.data, (z = b9).dO(), z.a2(12, dc), z.oF += 43, z.a2(2, p7.a1H), z.a2(8, p7.a1I), z.a2(8, p7.a1J), z.a2(14, p7.a1K), z.aNZ(p7.a1L, 5), 2 === p7.a1H && z.aNa(p7.hE), z.a2(1, p7.a1M), z.a2(1, p7.e9), z.a2(10, p7.a0x), z.a2(
					10, p7.a0o), z.a2(9, p7.a0y), z.a2(1, p7.a0q), z.a2(2, p7.a1N), z.a2(2, p7.a0r), z.a2(4, p7.a0t), z.a2(1, p7.a0s), z.a2(1, p7.a0u), z.a2(1, p7.a0p), z.dV(p7.ui, 2, 14), z.a2(1, p7.a1O), z.a2(1, p7.a1P), z.dV(p7.a1Q, 10, 18), z
				.a2(1, p7.a1R), z.dV(p7.tc, 4, 10), z.a2(1, p7.a1S), z.a2(2, p7.k1), z.a2(4, p7.k7), z.dV(p7.k4, 4, 4), z.dV(p7.k3, 10, 4), z.a2(2, p7.tP), z.a2(14, p7.a10), z.dV(p7.u7, 11, 12), z.a2(1, p7.a0w), z.a2(2, p7.a1T), z.aNb(p7.a1U, 10,
					5), z.a2(1, p7.a1V), z.a2(2, p7.a1W), z.a2(8, p7.a1X), z.dV(p7.a1Y, 10, 8), z.a2(2, p7.a1Z), z.a2(8, p7.a1a), z.dV(p7.a1b, 10, 8), z.a2(2, p7.a1c), z.a2(8, p7.a1d), z.dV(p7.a1e, 10, 8), z.a2(2, p7.a1f), z.a2(11, p7.a1g), z.dV(
					p7.a1h, 10, 11), ! function(sf) {
					var z = b9,
						aN1 = b5.oU.aN1,
						fD = b5.oU.aN2,
						fF = b5.oU.aN3,
						fH = b5.oU.aN4,
						eT = aN1.length;
					z.a2(5, sf), z.a2(30, eT), z.a2(30, b5.oU.aN6.length);
					for (var a5 = 0; a5 < eT; a5++) {
						var eo = aN1[a5];
						z.a2(4, eo), z.a2(9, fD[a5]), 0 === eo ? z.a2(22, fF[a5]) : 1 === eo ? (z.a2(10, fF[a5]), z.a2(10, fH[a5])) : 2 === eo ? (z.a2(10, fF[a5]), z.a2(9, fH[a5])) : 3 === eo || 4 === eo ? (z.a2(10, fF[a5]), z.a2(22, fH[a5])) :
							5 === eo || 6 === eo ? z.a2(10, fF[a5]) : 7 === eo ? z.a2(1, fF[a5]) : 10 === eo && (z.a2(20, fF[a5]), z.a2(22, fH[a5]))
					}
				}(sf), ! function(sf) {
					for (var z = b9, aN5 = b5.oU.aN5, aN6 = b5.oU.aN6, eT = aN5.length, a5 = 0; a5 < eT; a5++) z.a2(1, aN5[a5]), z.a2(sf, aN6[a5])
				}(sf), b9.oF),
			p7 = bG.ev(z - 1, 6) + 1,
			sf = (b8.aM3(6 * p7) !== b9.fC.length && b9.fC.push(0), ! function() {
				var z = b9;
				z.oF = 24, z.a2(31, z.fC.length), z.oF = 12, z.a2(12, function() {
					for (var fC = b9.fC, eT = fC.length, aMa = dc, a5 = 3; a5 < eT; a5++) aMa = aMa + fC[a5] & 4095;
					return aMa
				}())
			}(), bC.dO(b9.fC), bA.qT.qU(bA.qT.qV(p7)));
		return bC.xf(), b9.dO(), sf
	}
}

function cd() {
	var eo, bj = !1,
		aNd = !1,
		aNe = -1e4,
		aNf = -1,
		aNg = 0;

	function resize(aNk) {
		eo = 0, aV.qq() && (aNi(aNk) || bj) && (bj = !1, bX.resize(), bR.a87.resize(), aS.dO(), bT.dO(), aT.resize(), aN.resize(), aI.resize(), m.resize(), 1 <= a7.wD ? (aP.resize(!1), aO.resize(), aQ.resize(), aM.resize(), aL.resize(), aH.resize(),
			aG.resize(), b7.resize(), aq.resize(), aJ.resize(), aK.resize(), aF.resize(), bZ.resize(), aZ.resize(), aR.resize(), bc.resize(), aM.a5W()) : (aU.a9n(), aU.a9o()), ba.dW = !0)
	}

	function aNh(ew) {
		return ew && 128 < ew ? Math.floor(ew) : 128
	}

	function aNi(aNk) {
		var z, j6, aNm, qY, a4v;
		if (!(0 < at.qA)) return qY = aNh(document.documentElement.clientWidth), a4v = aNh(window.visualViewport && 2 !== q.id ? window.visualViewport.height : document.documentElement.clientHeight), z = qY, j6 = a4v, aNm = 0 !== q.id || z < j6 ?
			700 : 1200, aNm = Math.min(aNm / ((z + j6) / 2), 1), aNm = 0 === be.dh.data[1].value ? 2 * aNm / 3 : Math.min(aNm + (be.dh.data[1].value - 1) * (1 - aNm) / 2, 1), at.pL = (window.devicePixelRatio || 1) * aNm, __fx.hoveringTooltip
			.canvasPixelScale = at.pL, aNk && !aNd ? (aNd = !0, document.body.removeChild(xo)) : aNd && (aNd = !1, document.body.appendChild(xo)), z = Math.floor(.5 + qY * at.pL), j6 = Math.floor(.5 + a4v * at.pL), z !== at.z || j6 !== at.j6 ? (
				at.z = z, at.j6 = j6, at.min = a7l(z, j6), at.max = a30(z, j6), at.pH = bG.ev(z + j6, 2), at.r9 = z / j6, xo.width = z, xo.height = j6, xo.style.width = qY + "px", xo.style.height = a4v + "px", aNf = ba.e0 + 1e3, 1) : void 0
	}
	this.z = 0, this.j6 = 0, this.min = 0, this.max = 0, this.pH = 0, this.r9 = 1, this.pL = 1, this.qA = 0, this.dP = function() {
		this.z = aNh(document.documentElement.clientWidth) + 2, this.j6 = aNh(document.documentElement.clientHeight) + 2
	}, this.dO = function() {
		eo = 1, xo = document.getElementById("canvasA"), (rF = xo.getContext("2d", {
			alpha: __fx.makeMainMenuTransparent
		})).imageSmoothingEnabled = !1, aNi(0)
	}, this.iR = function() {
		ay.iR(), 50 <= ++eo && resize(0), -1 === aNf || ba.e0 < aNf || (aNf = -1, 2e3 * ++aNg >= ba.e0 + 8e3 ? console.log("error 3748") : q.r.setState(15))
	}, this.dZ = function(hT) {
		bj = !0, resize(hT)
	}, this.yX = function() {
		aNe + 1e3 > ba.e0 || (aNe = ba.e0, resize(0))
	}
}

function d7() {
	this.aMK = new aNo, this.wl = new aNp
}

function aNp() {
	this.wm = function() {
		for (var g3, eT = af.jd, w4 = af.jf, wr = aa.wr, a9v = this.aC6(), a5 = 0; a5 < eT; a5++) g3 = w4[a5], aW.w6(g3) && (wr[g3] = a9v);
		var oa = aa.oa,
			iZ = aa.iZ,
			ia = aa.ia,
			wx = aa.wx,
			eT = a7.jc;
		for (a5 = 0; a5 < eT; a5++)(0 === wx[a5] || ia[a5] < 1 || 2 * oa[a5] > 3 * (iZ[a5] + ia[a5])) && (wr[a5] = 0);
		var wd = 0;
		for (a5 = 0; a5 < eT; a5++) wd += 0 < wr[a5];
		return wd
	}, this.aC6 = function() {
		return Math.min(65535, ba.jZ())
	}
}

function aNo() {
	function aNt(fC, ew, k2) {
		for (var a5 = 0; a5 < 256; a5++) fC[a5] = (fC[a5] + (ew >> (a5 + k2) % 30 & 1)) % 256
	}
	this.iR = function(aNq, aNr) {
		var fC = new Uint8Array(256);
		return function(fC, aNq, aNr) {
				var a5, aNv = 3 + (4 + aNq) % 32768,
					aNw = 12 + aNr % 32768,
					aNx = 17 + ((aNq & aNr) + (aNq | aNr) + aNq) % 32768;
				for (a5 = 0; a5 < 256; a5++) aNv = 1 + aNv * aNw % aNx, fC[a5] = aNv % 256
			}(fC, aNq, aNr), aNt(fC, aNq, 2), aNt(fC, aNr, 7),
			function(fC) {
				var a5, ew, oF = 0;
				for (a5 = 0; a5 < 3e4; a5++) ew = fC[oF], fC[oF] = (ew + a5 + fC[(oF + a5) % 256]) % 256, oF = (ew + a5 + oF + (ew & oF)) % 256
			}(fC),
			function(fC) {
				var a5, a4v = 1,
					aGQ = 1;
				for (a5 = 0; a5 < 256; a5 += 2) a4v = (1 + a4v) * (fC[a5] + 1) % 1073741824, aGQ = (1 + aGQ) * (fC[a5 + 1] + 1) % 1073741824;
				return [a4v, aGQ]
			}(fC)
	}
}

function ca() {
	var aNy, aNz, gy, aO0;
	this.dO = function() {
		var a5, ea, ec, aMX, aO1, z, j6, uY, hB, sw, ew, g3, ej, em, a2A;
		if (function() {
				if (gy = !0, aO0 = "rgb(" + bN.su[0] + "," + bN.su[1] + "," + bN.su[2] + ")", bN.aEm(bN.e8)) return 1;
				return gy = !1, 0
			}()) aNz = null;
		else {
			for (aNy = bG.ev(96, 4), aO1 = 1 === bN.e8 ? (aMX = 0, 160) : (aMX = 128, 32), aO0 = "rgb(" + aMX + "," + aMX + "," + aMX + ")", aNz = new Array(4), a5 = 3; 0 <= a5; a5--) {
				if (aNz[a5] = document.createElement("canvas"), z = a5 % 2 == 0 ? bN.ee : aNy, j6 = a5 % 2 == 0 ? aNy : bN.ef + 2 * aNy, aNz[a5].width = z, aNz[a5].height = j6, sw = (hB = (uY = aNz[a5].getContext("2d", {
						alpha: !1
					})).getImageData(0, 0, z, j6)).data, a5 % 2 == 0)
					for (ec = aNy - 1; 0 <= ec; ec--)
						for (ew = aO1 + Math.floor((ec + 1) * (aMX - aO1) / (aNy + 1)), ea = z - 1; 0 <= ea; ea--) sw[g3 = 4 * ((0 === a5 ? aNy - ec - 1 : ec) * z + ea)] = ew, sw[g3 + 1] = ew, sw[g3 + 2] = ew, sw[g3 + 3] = 255;
				else {
					for (ea = aNy - 1; 0 <= ea; ea--)
						for (ew = aO1 + Math.floor((ea + 1) * (aMX - aO1) / (aNy + 1)), ec = j6 - 1 - aNy; aNy <= ec; ec--) sw[g3 = 4 * (ec * z + (3 === a5 ? aNy - ea - 1 : ea))] = ew, sw[g3 + 1] = ew, sw[g3 + 2] = ew, sw[g3 + 3] = 255;
					for (em = 1; 0 <= em; em--)
						for (ea = aNy - 1; 0 <= ea; ea--)
							for (ec = aNy - 1; 0 <= ec; ec--) ej = (Math.pow(ea * ea + ec * ec, .5) + 1) / (aNy + 1), ew = aO1 + Math.floor((1 < ej ? 1 : ej) * (aMX - aO1)), sw[g3 = 4 * ((0 === em ? aNy - ec - 1 : ec + em * (j6 - aNy)) * z + (
								1 === a5 ? ea : aNy - ea - 1))] = ew, sw[g3 + 1] = ew, sw[g3 + 2] = ew, sw[g3 + 3] = 255
				}
				uY.putImageData(hB, 0, 0)
			}
			a2A = aO1, bN.sp.fillStyle = "rgb(" + a2A + "," + a2A + "," + a2A + ")", bN.sp.fillRect(0, 0, bN.ee, 1), bN.sp.fillRect(0, bN.ef - 1, bN.ee, 1), bN.sp.fillRect(0, 0, 1, bN.ef), bN.sp.fillRect(bN.ee - 1, 0, 1, bN.ef)
		}
	}, this.uS = function() {
		var em = gy ? 0 : -aNy;
		aGR(em, em, bN.ee - 2 * em, bN.ef - 2 * em, bV.aO4, bV.aO5, bV.aO6, bV.aO7) || (rF.fillStyle = aO0, rF.fillRect(0, 0, at.z, at.j6))
	}, this.rE = function() {
		gy || (aGP(0, -aNy, bN.ee, aNy, bV.aO4, bV.aO5, bV.aO6, bV.aO7) && rF.drawImage(aNz[0], bV.aO8, bV.aO9 - aNy), aGP(bN.ee, -aNy, aNy, bN.ef + 2 * aNy, bV.aO4, bV.aO5, bV.aO6, bV.aO7) && rF.drawImage(aNz[1], bV.aO8 + bN.ee, bV.aO9 - aNy),
			aGP(0, bN.ef, bN.ee, aNy, bV.aO4, bV.aO5, bV.aO6, bV.aO7) && rF.drawImage(aNz[2], bV.aO8, bV.aO9 + bN.ef), aGP(-aNy, -aNy, aNy, bN.ef + 2 * aNy, bV.aO4, bV.aO5, bV.aO6, bV.aO7) && rF.drawImage(aNz[3], bV.aO8 - aNy, bV.aO9 - aNy))
	}
}

function cw() {
	this.gz = new aOA, this.aC4 = new aOB, this.uV = new aOC, this.lB = new aOD, this.i3 = new aOE, this.a2A = new aOF, this.aOG = new aOH, this.jQ = new aOI, this.kL = new aOJ, this.aOK = new aOL, this.dO = function() {
		this.uV.dO(), this.lB.dO(), this.i3.dO(), this.a2A.dO(), this.aOK.dO()
	}, this.rE = function() {
		this.aOK.rE(), this.uV.rE()
	}
}

function aOI() {
	this.iR = function(player) {
		var oR;
		return !!a7.data.a1M && 0 !== aa.gC[player].length && bI.lB.oS !== bI.lB.jt && !((oR = bI.lB.oR[player]) >= a8.jt[a8.il[player]] || oR === bI.lB.oe || !b6.fr.oY(player, a8.jr[a8.il[player]], 32, 0) || !ah.iG.iR(player) && !ah.iI.iR(
			player) || ! function(zl) {
			var aOO = bJ.f6[1] + bH.hI[bJ.f6[2] - 1] << 2;
			if (aW.eK(aOO)) return 1;
			return aOO = aW.eL(aOO), zl !== aOO && !!eM(zl, aOO)
		}(player)) && function(player) {
			return b6.fr.ob(player), bI.lB.oi(player), !0
		}(player)
	}
}

function aOA() {
	function aOW(a5, kl, km) {
		var aOY, aOX;
		if (!(a5 < 0)) return aOX = bI.lB.ly[a5], aOY = bH.hh(aOX), aOX = bH.hk(aOX), a5 = 20 * (.9 + .1 * Math.log10(bI.lB.a3K[a5])), a5 = Math.max(a5, bH.hx(b6.pF.qn(.02, 1.7))), bG.aGY(bH.hg(kl), bH.hj(km), aOY, aOX, a5)
	}

	function aOQ(aOP) {
		var aOb = 4 + .03 * (1 + 1.5 * q.r.vH()) * at.pH / hv;
		return bH.hl(aOP, bJ.f6[1]) < aOb
	}
	this.h0 = function(player, aOP) {
		return !!(a7.data.a1M && bH.hy(aOP) && bI.lB.oS !== bI.lB.jt && bI.lB.oR[player] !== bI.lB.oe && 0 !== aa.gC[player].length && bI.kL.kM(player, aOP) && aOQ(aOP))
	}, this.nk = function(player, lv, aOP) {
		return !!(bH.hy(aOP) && this.oj(player, lv) && bI.kL.ok(aOP) && aOQ(aOP))
	}, this.oj = function(player, id) {
		for (var aOR, qi = player << 3, qj = qi + bI.lB.oR[player], aOS = bI.lB.aOS, aOT = bI.lB.aOT, a5 = qi; a5 < qj; a5++)
			if (id === aOT[aOR = aOS[a5]]) return bJ.f6[3] = aOR, !0;
		return !1
	}, this.nj = function(eF) {
		var a2B = bI.a2A.a2B;
		return !!this.oj(a7.eD, a2B) && (b4.gs.nj(a2B, eF), !0)
	}, this.a2D = function(kl, km) {
		var player = a7.eD,
			eT = bI.lB.oR[player];
		if (0 === eT) return !1;
		for (var aOS = bI.lB.aOS, ly = bI.lB.ly, qi = player << 3, aOU = 80, aIZ = -1, a5 = qi + eT - 1; qi <= a5; a5--) {
			var aOV = aOS[a5],
				ej = bH.hb(kl, km, ly[aOV]);
			ej < aOU && (aOU = ej, aIZ = aOV)
		}
		return !!aOW(aIZ, kl, km) && (bI.a2A.a2B = bI.lB.aOT[aIZ], bh.oh.a2D(), !0)
	}, this.a2K = function(kl, km) {
		var eT = bI.lB.oS;
		if (eT < 1) return -1;
		for (var ly = bI.lB.ly, aOU = 80, aIZ = -1, a5 = 0; a5 < eT; a5++) {
			var ej = bH.hb(kl, km, ly[a5]);
			ej < aOU && (aOU = ej, aIZ = a5)
		}
		return aOW(aIZ, kl, km) ? aIZ : -1
	}, this.lx = function(player, id) {
		for (var qi = player << 3, qj = qi + bI.lB.oR[player], aOT = bI.lB.aOT, aOS = bI.lB.aOS, a5 = qi; a5 < qj; a5++) {
			var aOV = aOS[a5];
			if (aOT[aOV] === id) return aOV
		}
		return -1
	}, this.aC1 = function(player) {
		for (var qi = player << 3, qj = qi + bI.lB.oR[player], aOS = bI.lB.aOS, a3K = bI.lB.a3K, il = 0, a5 = qi; a5 < qj; a5++) il += a3K[aOS[a5]];
		return il
	}, this.m3 = function(player) {
		return 0 === bI.lB.oR[player] ? -1 : bI.lB.aOS[player << 3]
	}
}

function aOB() {
	this.aC5 = function(player) {
		for (var aOS = bI.lB.aOS, qi = player << 3, a5 = qi + bI.lB.oR[player] - 1; qi <= a5; a5--) this.aOc(aOS[a5])
	}, this.aOc = function(aOd) {
		var lB = bI.lB,
			aOe = lB.oS - 1,
			aOf = lB.a3J[aOd],
			aOg = lB.aOh[aOd],
			aOi = lB.ly[aOd];
		lB.oS = aOe, lB.a3J[aOd] = lB.a3J[aOe], lB.aOj[aOd] = lB.aOj[aOe], lB.aOk[aOd] = lB.aOk[aOe], lB.ly[aOd] = lB.ly[aOe], lB.aOl[aOd] = lB.aOl[aOe], lB.a3K[aOd] = lB.a3K[aOe], lB.aOh[aOd] = lB.aOh[aOe], lB.aOT[aOd] = lB.aOT[aOe], lB.aOm[
			aOd] = lB.aOm[aOe], lB.aOn[aOd] = lB.aOn[aOe], lB.aOo[aOd] = lB.aOo[aOe], lB.aOS[lB.a3J[aOd]] = aOd,
			function(aAa) {
				var player = aAa >> 3,
					lB = bI.lB,
					eT = lB.oR[player] - 1,
					aOr = (player << 3) + eT;
				lB.oR[player] = eT, aOr !== aAa && (lB.aOS[aAa] = lB.aOS[aOr], lB.a3J[lB.aOS[aAa]] = aAa)
			}(aOf), bI.i3.i3[bH.i2(lB.ly[aOd])][lB.aOh[aOd]] = aOd, aOe = bH.i2(aOi), aOf = aOg, aOe = bI.i3.i3[aOe], lB = aOe.pop(), aOf !== aOe.length && (aOe[aOf] = lB, bI.lB.aOh[lB] = aOf)
	}
}

function aOC() {
	var aOt, uw = 8,
		aOu = new Array(2);

	function aOv(oF) {
		var h8 = uw + 4,
			zC = b6.pF.sl(h8, h8),
			hF = b6.pF.getContext(zC, !0),
			hB = b6.pF.getImageData(hF, h8, h8),
			sw = hB.data;
		return aOw(sw, h8 + 1, oF), aOw(sw, h8 + 2, oF), aOw(sw, 2 * h8 + 1, oF), aOw(sw, 2 * h8 - 3, oF), aOw(sw, 2 * h8 - 2, oF), aOw(sw, 3 * h8 - 2, oF), aOw(sw, h8 * (h8 - 3) + 1, oF), aOw(sw, h8 * (h8 - 2) + 1, oF), aOw(sw, h8 * (h8 - 2) + 2,
			oF), aOw(sw, h8 * (h8 - 2) - 2, oF), aOw(sw, h8 * (h8 - 1) - 3, oF), aOw(sw, h8 * (h8 - 1) - 2, oF), hF.putImageData(hB, 0, 0), zC
	}

	function aOw(sw, eF, oF) {
		eF *= 4;
		sw[eF] = 255, sw[1 + eF] = 255, sw[2 + eF] = oF, sw[3 + eF] = 255
	}

	function sl(player) {
		var zC = b6.pF.sl(uw, uw);
		return function(hF, player) {
			var ea, ec, hf, eF, aOy, aAb, h8 = uw,
				hB = b6.pF.getImageData(hF, h8, h8),
				sw = hB.data,
				kQ = (h8 >> 1) - .5,
				aO0 = aW.a3u(player),
				aP0 = b6.pP.ym(aO0, .5);
			b6.pP.yo(aO0, aP0, 300) || b6.pP.yq(aO0, 100);
			for (ec = 0; ec < h8; ec++)
				for (ea = 0; ea < h8; ea++) aAb = (h8 - 1.5) * (h8 - 1.5) / 4, aOy = (hf = (hf = ea - kQ) * hf + (hf = ec - kQ) * hf) <= (h8 - 4.5) * (h8 - 4.5) / 4 ? aP0 : aO0, sw[eF = 4 * (ec * h8 + ea)] = aOy[0], sw[1 + eF] = aOy[1], sw[2 +
					eF] = aOy[2], sw[3 + eF] = aAb < hf ? 0 : 255;
			hF.putImageData(hB, 0, 0)
		}(b6.pF.getContext(zC, !0), player), zC
	}
	this.dO = function() {
		aOt = new Array(a7.eQ), aOu[0] = aOv(255), aOu[1] = aOv(0)
	}, this.rE = function() {
		var a5, player, aP1, aGZ, il, he, aP3, aP5, aP6, ly = bI.lB.ly,
			a3J = bI.lB.a3J,
			a3K = bI.lB.a3K,
			aOn = bI.lB.aOn,
			aP7 = aOt,
			aP8 = a7.eD,
			aP9 = -1,
			eT = bI.lB.oS,
			aPA = at.z,
			aPB = at.j6,
			aPC = bN.ee << 4,
			eI = hv,
			e6 = eI / uw,
			lz = hu / eI,
			m0 = hw / eI,
			hf = (aPA + hu) / eI - lz,
			hi = (aPB + hw) / eI - m0,
			hF = rF;
		for (bI.gz.oj(a7.eD, bI.a2A.a2B) && (aP9 = bJ.f6[3]), hF.imageSmoothingEnabled = eI < 9, b6.pF.textAlign(hF, 1), b6.pF.textBaseline(hF, 1), a5 = 0; a5 < eT; a5++) player = a3J[a5] >> 3, il = a3K[a5], aP1 = .9 + .1 * Math.log10(il), aGZ =
			(he = ly[a5]) % aPC / 16 - aP1, he = aPB * (Math.floor(he / aPC) / 16 - aP1 - m0) / hi, aP3 = -2 * (aP6 = eI * aP1) * (1 + (aP5 = +(player === aP8)) / 8), aP5 = aP5 * aP6 / 4, (aP6 = aPA * (aGZ - lz) / hf) < aP3 || he < aP3 || aPA +
			aP5 < aP6 || aPB + aP5 < he || (aGZ = 2 * aP1 * e6, aP3 = aP1 * eI, void 0 === (aP5 = aP7[player]) && (aP7[player] = aP5 = sl(player)), player === aP8 && (hF.setTransform(aGZ, 0, 0, aGZ, aP6 - 2 * aGZ, he - 2 * aGZ), hF.drawImage(aOu[
				+(a5 === aP9)], 0, 0)), hF.setTransform(aGZ, 0, 0, aGZ, aP6, he), hF.drawImage(aP5, 0, 0), (aP1 = Math.floor(function(il) {
				if (il < 1e3) return .42;
				if (il < 1e4) return .34;
				if (il < 1e6) return .26;
				if (il < 1e8) return .19;
				return .15
			}(il) * aP3)) < 6) || (hF.setTransform(1, 0, 0, 1, 0, 0), hF.fillStyle = aOn[a5] ? t.n2 : t.ma, hF.font = b6.pF.qW(1, aP1), hF.fillText(b6.x3.a0F(il), aP6 + aP3, he + aP3 + .1 * aP1));
		hF.imageSmoothingEnabled = !1, hF.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function aOL() {
	var zC;
	this.dO = function() {
		zC = zC || bK.lB.aPF(20, bb.aPG[7])
	}, this.rE = function() {
		var mK = hv;
		if (!(5 <= mK)) {
			var aPA = at.z,
				aPB = at.j6,
				lz = hu / mK,
				m0 = hw / mK,
				mD = (aPA + hu) / mK,
				mE = (aPB + hw) / mK,
				g4 = -20 * mK,
				aPH = .5 * g4,
				aPC = bN.ee << 4,
				eT = bI.lB.oS,
				ly = bI.lB.ly,
				aPI = zC,
				hF = rF;
			3 < mK && (hF.globalAlpha = .5 * (5 - mK));
			for (var a5 = 0; a5 < eT; a5++) {
				var he = ly[a5],
					ea = aPA * (he % aPC / 16 - lz) / (mD - lz) + aPH,
					he = aPB * (Math.floor(he / aPC) / 16 - m0) / (mE - m0) + aPH;
				aPA < ea || aPB < he || ea < g4 || he < g4 || (hF.setTransform(mK, 0, 0, mK, ea, he), hF.drawImage(aPI, 0, 0))
			}
			hF.globalAlpha = 1, hF.setTransform(mK, 0, 0, mK, 0, 0)
		}
	}
}

function aOH() {
	this.iR = function() {
		for (var aOX, aOG, aOm = bI.lB.aOm, ly = bI.lB.ly, aOk = bI.lB.aOk, a5 = bI.lB.oS - 1; 0 <= a5; a5--) aOX = ly[a5], 0 !== (aOG = aOm[a5]) && aOX === aOk[a5] && (! function(a5, aPL, hS) {
			var ik, player = bI.lB.a3J[a5] >> 3,
				hS = aPL + bH.hI[hS] << 2,
				a5 = bI.lB.a3K[a5];
			if (bY.aPM(player), aW.eK(hS)) ik = a7.eQ;
			else {
				if ((ik = aW.eL(hS)) === player) return hS = b6.fr.fu(player, a5), bY.fv(player, a5 - hS, 12);
				if (!eM(player, ik)) return b4.jh.o0(player, ik, a5)
			}
			aX.iy(player, ik) || aX.jG(player) ? (aa.fx[player].push(aPL << 2), aX.ih(player, a5, ik), a9.ii(player, !0)) : bY.fv(player, a5, 12)
		}(a5, bH.i1(aOX), aOG - 1), bI.aC4.aOc(a5))
	}, this.aPN = function(player, eF, hS, lv) {
		if (0 !== hS) {
			var aP8 = a7.eD;
			if (b6.fr.gi(aP8) && eM(player, aP8) && player !== aP8 && 0 !== aa.gC[aP8].length) {
				var aOO = eF + bH.hI[--hS] << 2;
				if (aW.eK(aOO) || eM(player, aW.eL(aOO))) {
					for (var eh = !1, a5 = 0; a5 < 4; a5++)
						if (aOO = eF + bH.hI[a5] << 2, aW.eO(aOO) && !aW.eK(aOO) && aW.eL(aOO) === aP8) {
							eh = !0;
							break
						} eh && (aH.a2C(719, 0), aH.wb(180, L(356, [aa.a39[player]]), 719, player, t.n1, t.mX, -1, !0, void 0, {
						en: 1,
						lv: lv
					}))
				}
			}
		}
	}
}

function aOD() {
	this.aPO = null, this.jt = 512, this.oe = 8, this.oS = 0, this.aPP = 0, this.a3J = new Uint16Array(this.jt), this.aOj = new Uint32Array(this.jt), this.aOk = new Uint32Array(this.jt), this.ly = new Uint32Array(this.jt), this.aOl = new Uint16Array(
			this.jt), this.a3K = new Uint32Array(this.jt), this.aOh = new Uint16Array(this.jt), this.aOT = new Uint16Array(this.jt), this.aOm = new Uint8Array(this.jt), this.aOn = new Uint8Array(this.jt), this.aOo = new Uint32Array(this.jt), this
		.oR = new Uint8Array(a7.eQ), this.aOS = new Uint16Array(this.oe * a7.eQ), this.dO = function() {
			this.aPP = 0, this.oS = 0, this.aPO = new Uint8Array(bN.ee + bN.ef), this.oR.fill(0)
		}, this.oi = function(player) {
			var eT = this.oS,
				aPQ = bH.i0(bJ.f6[0]),
				aPR = this.oR[player],
				aPS = (player << 3) + aPR,
				il = (this.a3J[eT] = aPS, this.aOj[eT] = aPQ, this.ly[eT] = aPQ, this.aOk[eT] = bH.i0(bJ.f6[1]), this.aOl[eT] = 0, bJ.f2[0]);
			il < 60 ? (b6.fr.fs(player, 60 - il), this.a3K[eT] = 60) : this.a3K[eT] = il, this.aOh[eT] = bI.i3.oi(eT, bH.i2(aPQ)), this.aOT[eT] = this.aPP, this.aOm[eT] = bJ.f6[2], this.aOn[eT] = 0, this.aOo[eT] = 0, this.aPP = this.aPP + 1 & 1023,
				this.aOS[aPS] = eT, this.oR[player] = aPR + 1, this.oS++, bI.aOG.aPN(player, bJ.f6[1], bJ.f6[2], this.aOT[eT])
		}, this.nj = function() {
			var aOR = bJ.f6[3];
			this.aOj[aOR] = this.ly[aOR], this.aOk[aOR] = bH.i0(bJ.f6[1]), this.aOl[aOR] = 0, this.aOm[aOR] = bJ.f6[2], bI.aOG.aPN(this.a3J[aOR] >> 3, bJ.f6[1], bJ.f6[2], this.aOT[aOR])
		}, this.iR = function() {
			bI.aOG.iR();
			var a5, g3 = a7.eD,
				e1 = bI.gz.aC1(g3),
				wk = (! function(wk) {
					var a5, aPX, aPY, aPZ, aPa, aPQ, aPe, aPf, eW, g4, aOj = wk.aOj,
						aOk = wk.aOk,
						ly = wk.ly,
						a3K = wk.a3K,
						aOn = wk.aOn,
						aOl = wk.aOl,
						aOh = wk.aOh,
						gJ = aa.gJ,
						a3J = wk.a3J,
						wk = wk.oS,
						aPC = bN.ee << 4;
					for (a5 = wk - 1; 0 <= a5; a5--) aPY = ly[a5], aPX = aOk[a5], aPY !== aPX && (aPQ = aOj[a5], aPe = aPX % aPC - (aPa = aPQ % aPC), aPf = ~~((aPX + .5) / aPC) - (aPQ = ~~((aPQ + .5) / aPC)), eW = ~~Math.sqrt(aPe * aPe + aPf *
						aPf + .5), g4 = 15e4 + 25e3 * bG.log10(a3K[a5]), g4 += 5e4 * !gJ[a3J[a5] >> 3], aOn[a5] && (g4 = bG.ev(g4, 5)), 65535 <= (g4 = aOl[a5] + Math.max(~~((g4 + .5) / eW), 1)) ? ly[a5] = aPZ = aPX : (aOl[a5] = g4, ly[
						a5] = aPZ = aPa + bG.ev(g4 * aPe, 65536) + aPC * (aPQ + bG.ev(g4 * aPf, 65536))), aOh[a5] = bI.i3.aPh(aOh[a5], aPY, aPZ))
				}(this), ! function(wk) {
					if (ba.jZ() % 2 == 1) {
						var a5, k2, kQ, en, eo, aPi, vG, aPj, gv, hM, lz, m0, aPQ, aPk, aPl, aPm, t4, eT = wk.oS,
							ly = wk.ly,
							a3J = wk.a3J,
							a3K = wk.a3K,
							aOo = wk.aOo,
							aOn = wk.aOn,
							i3 = bI.i3.i3,
							aPo = i3.length,
							aPp = bI.i3.aPp,
							aPC = bN.ee << 4,
							aPq = a7.ic,
							aMn = bb.eR,
							g4 = (eT - 1) * (bG.ev(ba.jZ(), 2) % 2);
						for (a5 = 0; a5 < eT; a5++)
							for (k2 = Math.abs(a5 - g4), aPQ = ly[k2], kQ = bH.i2(aPQ), gv = a3J[k2] >> 3, lz = aPQ % aPC, m0 = ~~((aPQ + .5) / aPC), aPm = a3K[k2], en = 0; en < 9; en++)
								if (!((aPi = kQ + aPp[en]) < 0 || aPo <= aPi))
									for (aPj = i3[aPi], vG = aPj.length, eo = 0; eo < vG; eo++) aPk = aPj[eo], t4 = a3J[aPk] >> 3, gv == t4 || aPq && aMn[gv] === aMn[t4] && aMn[gv] || (t4 = ly[aPk], (hM = lz - t4 % aPC) * hM + (hM = m0 - ~~((t4 +
										.5) / aPC)) * hM < 14400 && ((t4 = a3K[aPk]) <= aPm ? aPl = Math.max(1, bG.ev(t4 + bG.ev(aPm - t4, 10), 10)) : (aPl = Math.max(1, bG.ev(aPm, 10)), aOo[aPk] = Math.min(aOo[aPk] + aPl, 4294967295)),
										a3K[aPk] = Math.max(t4 - aPl, 0), aOn[aPk] = 4))
					}
				}(this), ! function(wk) {
					if (ba.jZ() % 5 == 3) {
						var a5, il, a3K = wk.a3K,
							gJ = aa.gJ,
							a3J = wk.a3J,
							aOo = wk.aOo,
							aOn = wk.aOn,
							eT = wk.oS;
						for (a5 = 0; a5 < eT; a5++) il = a3K[a5], gJ[a3J[a5] >> 3] ? a3K[a5] = Math.max(il - Math.max(1, il >> 7), 0) : (a3K[a5] = Math.max(il - Math.max(1, il >> 11), 0), aOn[a5] || (il = aOo[a5]) && (il = Math.max(il >> 3, 1),
							a3K[a5] = Math.min(a3K[a5] + (il << 1), 4294967295), aOo[a5] -= il))
					}
				}(this), this),
				a3K = wk.a3K,
				aOn = wk.aOn;
			for (a5 = wk.oS - 1; 0 <= a5; a5--) aOn[a5] = aOn[a5] >> 1, 0 === a3K[a5] && bI.aC4.aOc(a5);
			bY.fv(g3, e1 - bI.gz.aC1(g3), 15)
		}
}

function aOE() {
	this.aPr = 32, this.ea = 0, this.ec = 0, this.i4 = 0, this.aPs = 0, this.aPt = 4, this.i3 = null, this.aPp = new Int16Array(9), this.dO = function() {
		this.i4 = 1 + bG.ev(bN.ee - 1, this.aPr), this.aPs = 1 + bG.ev(bN.ef - 1, this.aPr), this.i3 = new Array(this.i4 * this.aPs), b6.pP.yl(this.i3);
		var ea, ec, aPp = this.aPp,
			z = this.i4;
		for (ea = -1; ea <= 1; ea++)
			for (ec = -1; ec <= 1; ec++) aPp[3 * (1 + ec) + 1 + ea] = ec * z + ea
	}, this.oi = function(aPv, a5) {
		return this.i3[a5].push(aPv), this.i3[a5].length - 1
	}, this.aPh = function(aPw, aPQ, aPX) {
		var aPx, aPy, aPQ = bH.i2(aPQ),
			aPX = bH.i2(aPX);
		return aPQ === aPX ? aPw : (aPx = this.i3[aPQ].pop(), this.i3[aPQ].length === aPw ? this.oi(aPx, aPX) : (aPy = this.i3[aPQ][aPw], this.i3[aPQ][aPw] = aPx, bI.lB.aOh[aPx] = aPw, this.oi(aPy, aPX)))
	}
}

function aOJ() {
	function xZ(aPX, aPz) {
		if (! function(aPX, aOP) {
				var hL = bH.i1(aPX),
					aQ3 = Math.abs(bH.eb(aOP) - bH.eb(hL)),
					hL = Math.abs(bH.ed(aOP) - bH.ed(hL));
				return 0 !== Math.max(aQ3, hL) && (function(aPQ, aPX, aQ3, aQ4) {
					var aQ6 = bH.hh(aPQ),
						aPQ = bH.hk(aPQ),
						aQ8 = bH.hh(aPX),
						aPX = bH.hk(aPX),
						aQ8 = aQ8 - aQ6,
						aPX = aPX - aPQ,
						aQC = Math.abs(aQ8),
						aQD = Math.abs(aPX),
						aQ8 = 0 < aQ8 ? 1 : 3,
						aPX = 0 < aPX ? 2 : 0;
					aQD < aQC ? aQG(aQ6, aPQ, aQ6 + aQC, aPQ + aQD, aQ8, aPX, aQ3) : aQG(aPQ, aQ6, aPQ + aQD, aQ6 + aQC, aPX, aQ8, aQ4)
				}(aPX, bH.i0(aOP), aQ3, hL), !0)
			}(aPX, aPz)) return !1;
		if (0 === bJ.ez[0]) return !!aW.gy(aPz << 2);
		if (! function(aOP) {
				if (aW.gy(aOP << 2)) return 1;
				return function(aOP) {
					var a5, hS, aPO = bI.lB.aPO,
						aQK = bH,
						eT = bJ.ez[0],
						aQL = 4 * aOP;
					for (a5 = eT - 1; 0 <= a5; a5--) {
						hS = aPO[a5];
						var aQM = aQL;
						if (aQL = aQK.i6(aQL, hS + 2 & 3), aW.gy(aQL)) return bJ.ez[0] = a5, bJ.f6[1] = aQL >> 2, bJ.f6[2] = 1 + hS, bJ.f6[4] = aQM, 1
					}
					return
				}(aOP)
			}(aPz)) return !1;
		if (bJ.f6[2] && aW.eY(bJ.f6[4])) return !1;
		var a5, aPz = bH.i1(aPX),
			sw = a8F,
			aPO = bI.lB.aPO,
			eT = bJ.ez[0] - 1,
			aQL = 4 * aPz,
			hJ = bH.hJ;
		for (a5 = 0; a5 < eT; a5++)
			if (aQL += hJ[aPO[a5]], 0 !== sw[aQL + 3] || 2 !== sw[aQL + 2]) return !!void 0;
		return !!1
	}

	function aQG(aQ6, aQ7, aQ8, aQ9, aQE, aQF, aQ3) {
		for (var ec, aPO = bI.lB.aPO, g4 = 0, aQH = 0, j6 = aQ9 - aQ7, z = aQ8 - aQ6, aQI = aQ6 % 16, a5 = 1; a5 <= aQ3; a5++) aPO[g4++] = aQE, aPO[g4] = aQF, g4 += (ec = (j6 * (aQI + (a5 << 4)) + .5) / z >> 4) - aQH, aQH = ec;
		bJ.fB(bJ.ez, g4)
	}
	this.kM = function(player, aPz) {
		var hS, hL, gu = bH.hU(player, aPz);
		return gu !== aPz && (hS = bH.hK(gu, aPz), hL = bH.i5(gu, hS), !(!aW.gy(hL << 2) && (hS = bH.hR(gu, aPz, hS), hL = bH.i5(gu, hS), !aW.gy(hL << 2)) || (bJ.f6[0] = hL, bJ.f6[1] = aPz, bJ.f6[2] = 0, hL !== aPz && (!xZ(bH.i0(hL), aPz) ||
			0 !== bJ.f6[2] && bH.ha(player, bJ.f6[1] + bH.hI[bJ.f6[2] - 1] << 2)))))
	}, this.ok = function(aPz) {
		var aPQ = bI.lB.ly[bJ.f6[3]];
		return bJ.f6[1] = aPz, bJ.f6[2] = 0, xZ(aPQ, aPz)
	}
}

function aOF() {
	var uw = 32,
		uv = new Array(2);

	function sl(eo) {
		var ea, ec, eF, hi, hf, h8 = uw,
			zC = b6.pF.sl(h8, h8),
			hF = b6.pF.getContext(zC, !0),
			hB = b6.pF.getImageData(hF, h8, h8),
			sw = hB.data,
			kQ = (h8 >> 1) - .5,
			kR = Math.sqrt(kQ * kQ);
		for (sw.fill(255), ec = 0; ec < h8; ec++)
			for (ea = 0; ea < h8; ea++) hf = ea - kQ, hi = ec - kQ, eF = 4 * (ec * h8 + ea), hf = 714 * (kR - Math.sqrt(hf * hf + hi * hi)) / kR, sw[2 + eF] = eo, sw[3 + eF] = 255 < hf ? 0 : hf;
		return hF.putImageData(hB, 0, 0), zC
	}
	this.a2B = -1, this.dO = function() {
		this.a2B = -1, uv[0] || (uv[0] = sl(255), uv[1] = sl(0))
	}, this.aQO = function(hF, e6, ea, ec, hH, a5) {
		b6.fr.gi(a7.eD) && (hF.setTransform(e6 *= 4 / 3 * .625, 0, 0, e6, ea - (hH *= 4 / 3), ec - hH), hF.drawImage(uv[+(bI.lB.aOT[a5] === this.a2B)], 0, 0))
	}
}

function dR() {
	this.aKX = [L(357), L(358), L(359), L(360), L(361), L(362), L(363), L(364), L(365), L(366), L(367), L(368), L(369)];
	var aQP = ["Space", "", "KeyB", "", "KeyW", "", "KeyS", "", "KeyD", "", "KeyA", "", "KeyH", "", "NumpadAdd", "", "NumpadSubtract", "", "ArrowLeft", "", "ArrowRight", "", "ArrowUp", "", "ArrowDown", ""];
	this.aKW = new Array(aQP.length), this.dO = function() {
		var fC = be.dh.data[155].value.split(";"),
			kQ = fC.length;
		if (function() {
				for (var eT = aQP.length, a5 = 0; a5 < eT; a5++) bS.aKW[a5] = aQP[a5]
			}(), !(kQ > aQP.length))
			for (var a5 = 0; a5 < kQ; a5++) fC[a5].length && (this.aKW[a5] = fC[a5])
	}, this.aKZ = function(oF, code) {
		for (var aKW = this.aKW, aQR = aQP, ow = (aKW[oF] = code, ""), eT = aKW.length, aQS = [], a5 = 0; a5 < eT; a5++) aQS.push(aKW[a5] === aQR[a5] ? "" : aKW[a5]);
		eT--;
		for (a5 = 0; a5 < eT; a5++) ow += aQS[a5] + ";";
		be.pw.px(155, ow += aQS[eT])
	}, this.aKV = function() {
		be.pw.px(155, ""), this.dO()
	}, this.eo = function(code, oF) {
		return code === this.aKW[oF] || code === this.aKW[oF + 1]
	}
}

function cO() {
	this.a4i = function() {
		var aQV;
		return !(af.jd < 3 || aa.gJ[kx[0]] >= a7.jM >> 1) && (a7.ic ? (aQV = aY.aCk(), !(2 * aY.aCl(bc.ku()) >= aQV)) : function() {
			var aQV = aY.aCk();
			if (2 * aa.gX[kx[0]] >= aQV) return !1;
			return !0
		}())
	}
}

function bz() {
	this.dO = function() {
		if (0 === a7.data.a1f) {
			for (var aPR = a7.jc, gX = aa.gX, a5 = 0; a5 < aPR; a5++) gX[a5] = 512;
			var aPS = a7.tT,
				js = a8.js,
				il = a8.il;
			for (a5 = aPR; a5 < aPS; a5++) gX[a5] = js[il[a5]]
		} else(1 === a7.data.a1f ? function() {
			for (var eT = a7.tT, gX = aa.gX, a1g = a7.data.a1g, a5 = 0; a5 < eT; a5++) gX[a5] = a1g
		} : function() {
			for (var eT = a7.tT, gX = aa.gX, a1h = a7.data.a1h, a5 = 0; a5 < eT; a5++) gX[a5] = a1h[a5]
		})();
		bY.lT[8] = aa.gX[a7.eD]
	}
}

function dF() {
	var aQa = 501,
		aQb = (this.x7 = new Uint32Array(aQa), this.zp = new Uint32Array(aQa), this.a7c = new Uint16Array(aQa), this.aKf = 0, 1),
		aQc = 0;

	function aQf(self) {
		self.max.fill(0)
	}

	function aQh(self, a5) {
		self.max[0] = Math.max(self.x7[a5], self.max[0]), self.max[1] = Math.max(self.zp[a5], self.max[1]), self.max[2] = Math.max(self.a7c[a5], self.max[2])
	}
	this.max = [0, 0, 0], this.aQd = 0, this.lT = new Array(21), this.aQe = null, this.dP = function() {
		this.aQe = [L(370), L(371), L(372), L(373), L(374), L(375), L(376), L(377), L(238), L(239), L(378), L(379), L(380), L(381), "", L(382), L(383), L(384), L(198), L(385), L(386)]
	}, this.dO = function() {
		this.aKf = 0, aQb = 1, this.aQd = 0, aQc = 0, aQf(this), this.lT.fill(0)
	}, this.oc = function(player, ht) {
		b6.fr.zk(player) && (this.lT[0] += ht + 1, this.lT[1]++, this.lT[12] += bJ.f2[1])
	}, this.o2 = function(player, nf) {
		__fx.donationsTracker.logDonation(player, nf, bJ.f2[0]);
		player === a7.eD && (aH.o2(bJ.f2[0], bJ.f2[1], nf), this.lT[12] += bJ.f2[1], this.lT[16] += bJ.f2[0]), nf === a7.eD && (aH.a3X(bJ.f2[0], player), this.lT[10] += bJ.f2[0])
	}, this.og = function(player) {
		b6.fr.zk(player) && (this.lT[2]++, this.lT[12] += bJ.f2[1])
	}, this.or = function(player) {
		b6.fr.zk(player) && (this.lT[19]++, this.lT[12] += bJ.f2[1])
	}, this.aPM = function(player) {
		b6.fr.zk(player) && this.lT[20]++
	}, this.fv = function(player, a0R, oF) {
		b6.fr.zk(player) && (this.lT[oF] += a0R)
	}, this.iR = function() {
		var self;
		this.aQd || 0 < aQc-- || ((self = this).x7[self.aKf] = aa.gJ[a7.eD], self.zp[self.aKf] = aa.gX[a7.eD], self.a7c[self.aKf] = aY.a7d(a7.eD), aQh(self, self.aKf), self.aKf++, self.aKf === aQa && function(self) {
			aQf(self), aQh(self, 0), self.aKf = 1 + bG.ev(aQa, 2);
			for (var a5 = 1; a5 < self.aKf; a5++) self.x7[a5] = self.x7[2 * a5], self.zp[a5] = self.zp[2 * a5], self.a7c[a5] = self.a7c[2 * a5], aQh(self, a5);
			aQb *= 2
		}(self), aQc = aQb - 1, bZ.lK(), 0 === aa.lX[a7.eD] && (self.aQd = ba.jZ()))
	}
}

function dG() {
	this.z = 0, this.j6 = 0, this.qY = 0, this.qZ = 0, this.aQj = 0, this.aQk = 0, this.a4v = 0, this.aGQ = 0;
	var aQl = this.aB4 = 0;
	this.aQm = 0, this.aQn = 0, this.aQo = 0, this.a4K = 0, this.oF = 0, this.a7F = null, this.ur = !1, this.aQp = -1, this.aQq = !1, this.aQr = [0, 0], this.dP = function() {
		this.a7F = [L(387), L(96, 0, "Balance"), L(95, 0, "Interest"), L(388)]
	}, this.dO = function() {
		this.ur = !1, this.aQp = -1, this.aQq = !1, this.resize()
	}, this.resize = function() {
		this.z = at.z < 1.369 * at.j6 ? at.z : 1.369 * at.j6;
		var eW = q.r.vH() && at.z < at.j6 ? 1 : q.r.vH() ? .8 : at.z < at.j6 ? .65 : .59;
		this.z = Math.floor(eW * this.z), this.z -= q.r.vH() && at.z < at.j6 ? 2 * bX.gap + 2 : 0, this.j6 = Math.floor(this.z / 1.369), this.a4K = Math.floor(this.j6 / 150), this.a4K = Math.max(this.a4K, 1.5), this.qY = Math.floor(1 + .02 * this
			.z), this.qZ = Math.floor(1 + .04 * this.z), this.a4v = this.qZ, aQl = Math.floor(.75 * this.a4v), this.aGQ = Math.floor(1 + .075 * this.z), this.aQm = Math.floor(1 + .1125 * this.z), this.aQn = Math.floor(this.z * (q.r.vH() ?
			.03 : .029)), this.aQn = Math.max(this.aQn, 4), this.aQo = Math.floor(.035 * this.z), this.aQo = Math.max(this.aQo, 4), this.aB4 = this.j6 - 2 * this.a4v - this.aGQ - this.aQm, this.ur && this.aQs()
	}, this.gj = function(kl, km) {
		var tW, tV;
		return !!this.ur && (tV = kl, tW = km, kl -= bG.ev(at.z - this.z, 2), km -= bG.ev(at.j6 - this.j6, 2), kl < 0 || km < 0 || kl >= this.z || km >= this.j6 || kl >= this.z - this.aQm && km < this.aQm ? -1 !== aG.gj(tV, tW) || b7.gj(tV,
			tW) || this.ql() : km < this.aQm || (km < this.j6 - this.aGQ ? (this.aQq = !0, this.aQp = (kl - 2 * this.qY - this.aQj) / this.aQk, 3 !== this.oF && (ba.dW = !0)) : (tV = (tV = Math.floor(kl / (this.z / this.a7F.length))) < 0 ?
				0 : tV >= this.a7F.length ? this.a7F.length - 1 : tV) !== this.oF && (this.oF = tV, this.aQs(), ba.dW = !0)), !0)
	}, this.xp = function(kl, km) {
		return this.aQr[0] = kl, this.aQr[1] = km, !(!this.ur || !this.aQq || (kl -= bG.ev(at.z - this.z, 2), km = this.aQp, this.aQp = (kl - 2 * this.qY - this.aQj) / this.aQk, (0 <= this.aQp && this.aQp <= 1 || 0 <= km && km <= 1) && (ba.dW = !
			0), 0))
	}, this.yF = function() {
		this.aQq && (this.aQq = !1)
	}, this.yR = function() {
		this.ur ? this.ql() : this.show()
	}, this.show = function() {
		bY.aKf < 2 || (this.ur = !0, this.aQs())
	}, this.ql = function() {
		this.ur = !1, this.aQp = -1, ba.dW = !0
	}, this.aQs = function() {
		this.oF < 2 ? this.aQj = aK.measureText(b6.x3.a0F(bY.max[this.oF]), b6.pF.qW(0, this.aQn)) : 2 === this.oF && (this.aQj = aK.measureText(b6.x3.a0K(6, 2), b6.pF.qW(0, this.aQn))), this.aQk = this.z - 2 * this.qY - this.aQj - this.qZ
	}, this.lK = function() {
		this.ur && this.aQs()
	}, this.rE = function() {
		this.ur && this.a5C()
	}, this.a5C = function() {
		var ea = bG.ev(at.z - this.z, 2),
			ec = bG.ev(at.j6 - this.j6, 2);
		rF.setTransform(1, 0, 0, 1, ea, ec), rF.fillStyle = t.mX, rF.fillRect(0, this.aQm, this.z, this.j6 - this.aQm), this.aQt(), this.aJo(), rF.strokeRect(0, 0, this.z, this.j6), b6.pF.textAlign(rF, 2), rF.font = b6.pF.qW(0, this.aQn), 0 ===
			this.oF ? this.aQu(bY.x7, ea, ec) : 1 === this.oF ? this.aQu(bY.zp, ea, ec) : 2 === this.oF ? this.aQv(ea, ec) : 3 === this.oF && (this.aQw(ea, ec), this.aQx(ea, ec)), aG.a2c(Math.floor(ea + this.z - .725 * this.aQm), Math.floor(ec +
				.275 * this.aQm), Math.floor(.45 * this.aQm)), rF.setTransform(1, 0, 0, 1, 0, 0)
	}, this.aQt = function() {
		var a5, e1;
		for (rF.lineWidth = this.a4K, b6.pF.textBaseline(rF, 1), b6.pF.textAlign(rF, 1), rF.strokeStyle = t.ma, rF.font = b6.pF.qW(1, this.aQo), e1 = this.z / this.a7F.length, rF.fillStyle = t.mt, rF.fillRect(this.oF * e1, this.j6 - this.aGQ, e1,
				this.aGQ), rF.fillStyle = t.ma, rF.fillRect(0, this.j6 - this.aGQ - .5 * this.a4K, this.z, this.a4K), a5 = 1; a5 <= 3; a5++) rF.fillRect(a5 * e1, this.j6 - this.aGQ, this.a4K, this.aGQ);
		for (a5 = this.a7F.length - 1; 0 <= a5; a5--) rF.fillText(b6.uY.zO(this.a7F[a5], 0, .9 * e1), (a5 + .5) * e1, this.j6 - .46 * this.aGQ)
	}, this.aJo = function() {
		rF.fillStyle = t.nC, rF.fillRect(0, 0, this.z, this.aQm), rF.fillStyle = t.ma, rF.fillRect(0, this.aQm - .5 * this.a4K, this.z, this.a4K), rF.font = b6.pF.qW(1, .39 * this.aQm), rF.fillText(b6.uY.zO(L(389), 0, .8 * this.z), Math.floor(
			this.z / 2), Math.floor(.55 * this.aQm))
	}, this.aQu = function(fC, ea, ec) {
		var kQ = bY.max[this.oF],
			yn = (rF.setTransform(1, 0, 0, 1, ea + 2 * this.qY + this.aQj, ec + this.a4v + this.aQm), rF.lineWidth = 2, this.aB4 / Math.sqrt(kQ));
		rF.beginPath(), rF.moveTo(this.aQk, this.aB4 - yn * Math.sqrt(fC[bY.aKf - 1]));
		for (var a5 = bY.aKf - 2; 0 <= a5; a5--) rF.lineTo(a5 * this.aQk / (bY.aKf - 1), this.aB4 - yn * Math.sqrt(fC[a5]));
		rF.stroke();
		ea = this.a2c(fC, yn, .5);
		ea < .95 && rF.fillText(b6.x3.a0F(kQ), -this.qY, 0), .05 < Math.abs(ea - .5) && rF.fillText(b6.x3.a0F(Math.floor(kQ / 4)), -this.qY, Math.floor(this.aB4 / 2)), .05 < ea && rF.fillText("0", -this.qY, this.aB4)
	}, this.aQv = function(ea, ec) {
		rF.setTransform(1, 0, 0, 1, ea + 2 * this.qY + this.aQj, ec + this.a4v + this.aQm), rF.lineWidth = 2;
		var yn = this.aB4 / Math.max(bY.max[this.oF], 1);
		rF.beginPath(), rF.moveTo(this.aQk, this.aB4 - yn * bY.a7c[bY.aKf - 1]);
		for (var a5 = bY.aKf - 2; 0 <= a5; a5--) rF.lineTo(a5 * this.aQk / (bY.aKf - 1), this.aB4 - yn * bY.a7c[a5]);
		rF.stroke();
		ea = this.a2c(bY.a7c, yn, 1), ec = bY.max[this.oF] / 100;
		ea < .95 && rF.fillText(b6.x3.a0K(ec, 2), -this.qY, 0), .05 < Math.abs(ea - .5) && rF.fillText(b6.x3.a0K(ec / 2, 2), -this.qY, Math.floor(this.aB4 / 2)), .05 < ea && rF.fillText(b6.x3.a0K(0, 2), -this.qY, this.aB4)
	}, this.aQw = function(ea, ec) {
		rF.setTransform(1, 0, 0, 1, ea + .34 * this.z, ec + 2 * aQl + this.aQm), b6.pF.textAlign(rF, 2);
		for (var a70 = this.j6 - 4 * aQl - this.aGQ - this.aQm, fC = [0, 1, 19, 2, 20, 3, 4, 5, 6, 7], a5 = 9; 0 <= a5; a5--) rF.fillText(b6.uY.zO(bY.aQe[fC[a5]], 0, .31 * this.z), 0, a5 * a70 / 9);
		var ew = bY.lT;
		for (rF.setTransform(1, 0, 0, 1, ea + .39 * this.z, ec + 2 * aQl + this.aQm), b6.pF.textAlign(rF, 0), rF.fillText(b6.x3.a0K(100 * ew[0] / (1024 * Math.max(ew[1], 1)), 1), 0, 0), a5 = 8; 1 <= a5; a5--) rF.fillText(ew[fC[a5]].toString(), 0,
			a5 * a70 / 9);
		rF.fillText(b6.x3.a0K(100 * (1 - aa.gJ[a7.eD] / ew[7]), 0), 0, a70)
	}, this.aQx = function(ea, ec) {
		rF.setTransform(1, 0, 0, 1, ea + .79 * this.z, ec + 2 * aQl + this.aQm), b6.pF.textAlign(rF, 2);
		var a5, a70 = this.j6 - 4 * aQl - this.aGQ - this.aQm;
		for (rF.fillStyle = t.mo, a5 = 2; 0 <= a5; a5--) rF.fillText(b6.uY.zO(bY.aQe[a5 + 8], 0, .31 * this.z), 0, a5 * a70 / 9);
		rF.fillText(b6.uY.zO(bY.aQe[18], 0, .31 * this.z), 0, 3 * a70 / 9), rF.fillStyle = t.mn, rF.fillText(b6.uY.zO(bY.aQe[11], 0, .31 * this.z), 0, 4 * a70 / 9), rF.fillStyle = t.n3, rF.fillText(b6.uY.zO(bY.aQe[13], 0, .31 * this.z), 0, 5 *
				a70 / 9), rF.fillText(b6.uY.zO(bY.aQe[15], 0, .31 * this.z), 0, 6 * a70 / 9), rF.fillText(b6.uY.zO(bY.aQe[16], 0, .31 * this.z), 0, 7 * a70 / 9), rF.fillText(b6.uY.zO(bY.aQe[12], 0, .31 * this.z), 0, 8 * a70 / 9), rF.fillStyle = t
			.n2, rF.fillText(b6.uY.zO(bY.aQe[17], 0, .31 * this.z), 0, a70), rF.fillStyle = t.mo;
		var ew = bY.lT,
			aK1 = ew[8] + ew[9] + ew[10] + ew[18],
			aK1 = b6.x3.a0F(aK1),
			aIe = rF.measureText(aK1).width,
			ea = (rF.setTransform(1, 0, 0, 1, ea + .83 * this.z + aIe, ec + 2 * aQl + this.aQm), rF.fillText(b6.x3.a0F(ew[8]), 0, 0), rF.fillText(b6.x3.a0F(ew[9]), 0, a70 / 9), rF.fillText(b6.x3.a0F(ew[10]), 0, 2 * a70 / 9), rF.fillText(b6.x3
				.a0F(ew[18]), 0, 3 * a70 / 9), rF.fillStyle = t.mn, rF.fillText(aK1, 0, 4 * a70 / 9), rF.fillStyle = t.n3, rF.fillText(b6.x3.a0F(ew[13]), 0, 5 * a70 / 9), rF.fillText(b6.x3.a0F(ew[15]), 0, 6 * a70 / 9), rF.fillText(b6.x3.a0F(
				ew[16]), 0, 7 * a70 / 9), rF.fillText(b6.x3.a0F(ew[12]), 0, 8 * a70 / 9), ew[12] + ew[13] + ew[15] + ew[16]);
		rF.fillStyle = t.n2, rF.fillText(b6.x3.a0F(ea), 0, a70), rF.fillStyle = t.ma
	}, this.a2c = function(fC, yn, a5n) {
		var a5, e, fD;
		return this.aQp < 0 || 1 < this.aQp ? .25 : (a5 = this.aQp * (bY.aKf - 1), fD = fC[e = Math.floor(a5)], fD += (a5 - e) * (fC[e < bY.aKf - 1 ? e + 1 : e] - fD), rF.strokeStyle = t.md, .04 < this.aQp && this.aQz(0, this.aB4 - yn * Math.pow(
				fD, a5n), a5 * this.aQk / (bY.aKf - 1), this.aB4 - yn * Math.pow(fD, a5n)), .04 < fD / bY.max[this.oF] && this.aQz(a5 * this.aQk / (bY.aKf - 1), this.aB4, a5 * this.aQk / (bY.aKf - 1), this.aB4 - yn * Math.pow(fD, a5n)), rF
			.fillStyle = t.n5, rF.beginPath(), rF.arc(a5 * this.aQk / (bY.aKf - 1), this.aB4 - yn * Math.pow(fD, a5n), Math.max(2, .014 * this.j6), 0, 2 * Math.PI), rF.fill(), fC = this.aQp * ba.a7e, fC = 0 === aa.lX[a7.eD] ? Math.floor(fC *
				bY.aQd) : Math.floor(fC * ba.jZ()), rF.fillStyle = t.ma, rF.fillText(1 === a5n ? b6.x3.a0K(fD / 100, 2) : b6.x3.a0F(Math.floor(fD)), -this.qY, this.aB4 - yn * Math.pow(fD, a5n)), b6.pF.textAlign(rF, 1), rF.fillText(aQ.a7T(fC),
				a5 * this.aQk / (bY.aKf - 1), this.aB4 + this.aQn - (q.r.vH() ? 2 : 0) - this.a4K), b6.pF.textAlign(rF, 2), yn * Math.pow(fD, a5n) / this.aB4)
	}, this.aQz = function(lz, m0, mD, mE) {
		rF.beginPath(), rF.moveTo(lz, m0), rF.lineTo(mD, mE), rF.stroke()
	}
}

function bn() {
	this.aR0 = "https://", this.aR1 = this.aR0 + "territorial.io/", this.aKg = this.aR1 + "changelog", this.aKk = this.aR1 + "terms", this.aR2 = this.aR1 + "cookie_policy", this.aK6 = this.aR1 + "privacy", this.aKj = this.aR1 + "tutorial", this.aKi =
		this.aR1 + "players", this.aKh = this.aR1 + "clans", this.x9 = this.aR1 + "clan-results", this.a8q = this.aR0 + "play.google.com/store/apps/details?id=territorial.io", this.xN = this.aR0 + "apps.apple.com/app/id1581110913", this.aR3 = this
		.aR0 + "www.youtube.com/watch?v=toZTQ8aRdFc", this.a8r = this.aR0 + "discord.gg/pthqvpTXmh", this.a8s = this.aR0 + "www.instagram.com/davidtschacher/", this.vA =
		"🇦🇫🇦🇽🇦🇱🇩🇿🇦🇸🇦🇩🇦🇴🇦🇮🇦🇶🇦🇬🇦🇷🇦🇲🇦🇼🇦🇺🇦🇹🇦🇿🇧🇸🇧🇭🇧🇩🇧🇧🇧🇾🇧🇪🇧🇿🇧🇯🇧🇲🇧🇹🇧🇴🇧🇦🇧🇼🇧🇷🇮🇴🇻🇬🇧🇳🇧🇬🇧🇫🇧🇮🇨🇻🇰🇭🇨🇲🇨🇦🇮🇨🇰🇾🇨🇫🇹🇩🇨🇱🇨🇳🇨🇽🇨🇨🇨🇴🇰🇲🇨🇬🇨🇩🇨🇷🇭🇷🇨🇺🇨🇼🇨🇾🇨🇿🇩🇰🇩🇯🇩🇲🇩🇴🇪🇨🇪🇬🇸🇻🇬🇶🇪🇷🇪🇪🇸🇿🇪🇹🇪🇺🇫🇰🇫🇴🇫🇯🇫🇮🇫🇷🇬🇫🇵🇫🇹🇫🇬🇦🇬🇲🇬🇪🇩🇪🇬🇭🇬🇮🇬🇷🇬🇱🇬🇩🇬🇵🇬🇺🇬🇹🇬🇬🇬🇳🇬🇼🇬🇾🇭🇹🇭🇳🇭🇰🇭🇺🇮🇸🇮🇳🇮🇩🇮🇷🇮🇶🇮🇪🇮🇲🇮🇱🇮🇹🇨🇮🇯🇲🇯🇵🇯🇪🇯🇴🇰🇿🇰🇪🇰🇮🇽🇰🇰🇼🇰🇬🇱🇦🇱🇻🇱🇧🇱🇸🇱🇷🇱🇾🇱🇮🇱🇹🇱🇺🇲🇴🇲🇰🇲🇬🇲🇼🇲🇾🇲🇻🇲🇱🇲🇹🇲🇭🇲🇶🇲🇷🇲🇺🇾🇹🇲🇽🇫🇲🇲🇩🇲🇨🇲🇳🇲🇪🇲🇸🇲🇦🇲🇿🇲🇲🇳🇦🇳🇷🇳🇵🇳🇱🇳🇨🇳🇿🇳🇮🇳🇪🇳🇬🇳🇺🇳🇫🇰🇵🇲🇵🇳🇴🇴🇲🇵🇰🇵🇼🇵🇸🇵🇦🇵🇬🇵🇾🇵🇪🇵🇭🇵🇱🇵🇹🇵🇷🇶🇦🇷🇴🇷🇺🇷🇼🇼🇸🇸🇲🇸🇹🇸🇦🇸🇳🇷🇸🇸🇨🇸🇱🇸🇬🇸🇽🇸🇰🇸🇮🇸🇧🇸🇴🇿🇦🇬🇸🇰🇷🇸🇸🇪🇸🇱🇰🇧🇱🇸🇭🇰🇳🇱🇨🇲🇫🇵🇲🇻🇨🇸🇩🇸🇷🇸🇪🇸🇾🇨🇭🇹🇼🇹🇯🇹🇿🇹🇭🇹🇱🇹🇬🇹🇰🇹🇴🇹🇹🇹🇳🇹🇷🇹🇲🇹🇨🇹🇻🇺🇬🇺🇦🇦🇪🇬🇧🇺🇳🇺🇸🇻🇮🇺🇾🇺🇿🇻🇺🇻🇦🇻🇪🇻🇳🇼🇫🇪🇭🇾🇪🇿🇲🇿🇼"
}

function cy() {
	this.lB = new aR4, this.uV = new aR5, this.dO = function() {
		this.lB.dO()
	}, this.iR = function() {
		0 !== this.lB.a3g && this.lB.a3g--
	}
}

function aR5() {
	this.rE = function() {
		if (0 !== bK.lB.a3g && (rF.globalAlpha = Math.min(bK.lB.a3g / 580, 1), rF.drawImage(bK.lB.aR8, 1 + aM.uT(), 1 + aM.uU()), rF.globalAlpha = 1, a7.gr)) {
			for (var lz = hu / hv, m0 = hw / hv, mD = (at.z + hu) / hv, mE = (at.j6 + hw) / hv, g4 = bK.lB.aR9 * hv, aRA = bK.lB.aRA, a5 = a7.jc - 1; 0 <= a5; a5--) ! function(a5, g4, lz, m0, mD, mE, aRA) {
				var highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[a5];
				if (highlight) g4 *= 2;
				0 === aa.lX[a5] || 0 === aa.gJ[a5] || (mD = at.z * ((aa.i8[a5] + aa.i9[a5] + 1) / 2 - lz) / (mD - lz) - .5 * g4, lz = at.j6 * ((aa.iA[a5] + aa.iB[a5] + 1) / 2 - m0) / (mE - m0) - .5 * g4, mD > at.z) || lz > at.j6 || mD < -
					g4 || lz < -g4 || (rF.setTransform(highlight ? hv * 2 : hv, 0, 0, highlight ? hv * 2 : hv, mD, lz), rF.drawImage(aRA[a7.ic ? bb.eR[a5] : 1], 0, 0))
			}(a5, g4, lz, m0, mD, mE, aRA);
			rF.setTransform(hv, 0, 0, hv, 0, 0)
		}
	}
}

function aR4() {
	this.aR9 = 28, this.a3g = 0, this.aR8 = null;
	var aRC = this.aRA = null;

	function aRF(h8, aRG) {
		var ea, ec, eF, hf, zC = b6.pF.sl(h8, h8),
			hF = b6.pF.getContext(zC, !0),
			hB = b6.pF.getImageData(hF, h8, h8),
			sw = hB.data,
			kQ = (h8 >> 1) - .5,
			aRH = .5 + kQ;
		for (aRH *= aRH, ec = 0; ec < h8; ec++)
			for (ea = 0; ea < h8; ea++) hf = (hf = ea - kQ) * hf + (hf = ec - kQ) * hf, sw[eF = 4 * (ec * h8 + ea)] = aRG[0], sw[1 + eF] = aRG[1], sw[2 + eF] = aRG[2], sw[3 + eF] = (aRH - hf) * aRG[3] / aRH;
		return hF.putImageData(hB, 0, 0), zC
	}

	function aQO(a5, hF, zC, h8) {
		var ea, y, highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[a5];
		if (highlight) h8 *= 2;
		0 !== aa.lX[a5] && 0 !== aa.gJ[a5] && (ea = aa.i8[a5] + aa.i9[a5] + 1 - h8 - 2 >> 1, y = aa.iA[a5] + aa.iB[a5] + 1 - h8 - 2 >> 1,
			highlight ? hF.drawImage(zC[a7.ic ? bb.eR[a5] : a5 < a7.jc ? 1 : 0], ea, y, h8, h8) :
			hF.drawImage(zC[a7.ic ? bb.eR[a5] : a5 < a7.jc ? 1 : 0], ea, y))
	}
	this.dO = function() {
		var wk;
		this.a3g = 700,
			function(wk) {
				var h8 = wk.aR9;
				if (wk.aRA = [], aRC = [], a7.ic)
					for (var a5 = 0; a5 <= a7.ta; a5++) wk.aRA.push(aRF(h8, bb.aPG[bb.k5[a5]])), aRC.push(aRF(h8 >> 1, bb.aPG[bb.k5[a5]]));
				else wk.aRA.push(aRF(h8, bb.aPG[7])), wk.aRA.push(aRF(h8, bb.aPG[4])), aRC.push(aRF(h8 >> 1, bb.aPG[7]))
			}(this),
			function(wk, aRI) {
				var a5, aR8 = wk.aR8,
					hF = b6.pF.getContext(aR8, !0),
					eT = a7.eQ,
					h8 = wk.aR9 >> 1;
				hF.imageSmoothingEnabled = !1, hF.setTransform(1, 0, 0, 1, 0, 0), aRI && hF.clearRect(0, 0, aR8.width, aR8.height);
				for (a5 = a7.jc; a5 < eT; a5++) aQO(a5, hF, aRC, h8)
			}(this, null !== (wk = this).aR8 && wk.aR8.width === bN.ee - 2 && wk.aR8.height === bN.ef - 2 || (wk.aR8 = b6.pF.sl(bN.ee - 2, bN.ef - 2), !1)), a7.gr || this.a0c()
	}, this.aPF = aRF, this.a0c = function() {
		for (var eT = a7.jc, h8 = this.aR9, aRA = this.aRA, hF = b6.pF.getContext(this.aR8, !0), a5 = 0; a5 < eT; a5++) aQO(a5, hF, aRA, h8)
	}
}

function cz() {
	function aRJ(player) {
		a7.gr ? (ae.aBv(player), af.aET(), a7.jy && a7.oW.iR()) : az.aER(player)
	}
	this.nv = function(player) {
		return !!aG.a2b(player) && (aH.wP(player, player === a7.eD ? 21 : 22), aRJ(player), !0)
	}, this.oT = function(player) {
		1 === a7.wD && 0 !== aa.lX[player] && 2 !== aa.zi[player] && aRJ(player), a7.wG--, a7.wF--, aH.wP(player, 4), b6.fr.gh(2) && aQ.lJ(!0)
	}
}

function d9() {
	this.aAZ = ["rgba(90,90,90,0.88)", "rgba(130,12,12,0.88)", "rgba(12,130,12,0.88)", "rgba(12,12,130,0.88)", "rgba(130,130,12,0.88)", "rgba(130,12,130,0.88)", "rgba(12,130,130,0.88)", "rgba(130,130,130,0.88)", "rgba(0,0,0,0.88)"], this.a6y = [
		"rgb(210,200,200)", "rgb(255,120,120)", "rgb(0,230,0)", "rgb(150,150,255)", "rgb(240,240,25)", "rgb(255,70,255)", "rgb(25,240,240)", t.ma, "rgb(170,170,170)"
	], this.aRK = [t.ma, "rgb(255,0,0)", "rgb(0,255,0)", "rgb(0,0,255)", "rgb(255,255,0)", "rgb(255,0,255)", "rgb(0,255,255)", t.ma, t.mR], this.aRL = [t.mR, t.ma, t.ma, t.ma, t.mR, t.mR, t.mR, t.mR, t.ma];
	var aRM = ["255,255,255", "0,0,0", "255,4,4", "200,4,4", "4,255,4", "4,180,4", "255,195,195", "90,3,3", "200,255,200", "3,84,3"],
		aRN = (this.aDx = ["rgba(" + aRM[0] + ",", "rgba(" + aRM[1] + ",", "rgba(" + aRM[2] + ",", "rgba(" + aRM[3] + ",", "rgba(" + aRM[4] + ",", "rgba(" + aRM[5] + ",", "rgba(" + aRM[6] + ",", "rgba(" + aRM[7] + ",", "rgba(" + aRM[8] + ",",
			"rgba(" + aRM[9] + ","
		], this.aDy = ["rgb(" + aRM[0] + ")", "rgb(" + aRM[1] + ")", "rgb(" + aRM[2] + ")", "rgb(" + aRM[3] + ")", "rgb(" + aRM[4] + ")", "rgb(" + aRM[5] + ")", "rgb(" + aRM[6] + ")", "rgb(" + aRM[7] + ")", "rgb(" + aRM[8] + ")", "rgb(" + aRM[
			9] + ")"
		], this.wZ = null, this.aPG = [
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
	this.k5 = [0, 1, 2, 3, 4, 5, 6, 7, 8], this.eR = new Uint8Array(a7.eQ), this.wz = null, this.aRO = null, this.th = new Uint16Array(a7.eQ), this.ti = new Uint16Array(this.k5.length + 1), this.tj = new Uint16Array(this.k5.length), this.dP =
		function() {
			this.wZ = [L(390), L(391), L(392), L(393), L(394), L(395), L(396), L(397), L(398)]
		}, this.dO = function() {
			if (this.eR.fill(0), this.aRP(), a7.ic) {
				9 === a7.jw ? this.aRQ() : a7.jy ? function() {
					var a1Q = a7.data.a1Q;
					if (!a7.data.a1R && 1 !== a7.data.a1O)
						for (var a5 = a7.jc - 1; 0 <= a5; a5--) a1Q[a5] = au.iu(262144);
					var aRZ = 0,
						ej = 768,
						aMX = [4 * (a1Q[0] >> 12), 4 * (a1Q[0] >> 6 & 63), 4 * (63 & a1Q[0])];
					for (a5 = 0; a5 < 9; a5++) {
						for (var eW = 0, en = 0; en < 3; en++) eW += Math.abs(aRN[a5][en] - aMX[en]);
						eW < ej && (aRZ = a5, ej = eW)
					}
					var tc = a7.data.tc,
						aRa = new Uint16Array(9);
					for (a5 = 0; a5 < 9; a5++) aRa[a5] = tc[a5];
					var k5 = bb.k5,
						aRb = new Uint8Array(9),
						fy = (k5[0] = 0, 1);
					for (a5 = 1; a5 < 9; a5++) aRa[a5] && (aRb[a5] = fy, k5[fy++] = a5);
					var it = a7.jc,
						eR = bb.eR;
					aRa[aRZ] ? (aRa[aRZ]--, eR[0] = aRb[aRZ]) : it = 0;
					var eo = 0;
					for (a5 = it; a5 < a7.tT; a5++) {
						var k2 = k5[eo];
						if (aRa[k2]) aRa[k2]--, eR[a5] = aRb[k2];
						else if (a5--, 9 <= ++eo) return console.log("error 325")
					}
				}() : this.iR();
				for (var eT = a7.eQ, th = bb.th, ti = bb.ti, tj = bb.tj, eR = bb.eR, k5 = bb.k5, tZ = k5.length, dh = new Array(tZ), a5 = 0; a5 < tZ; a5++) dh[a5] = [];
				for (a5 = 0; a5 < eT; a5++) dh[k5[eR[a5]]].push(a5);
				for (a5 = 1; a5 <= tZ; a5++) ti[a5] = ti[a5 - 1] + dh[a5 - 1].length;
				for (a5 = 0; a5 < tZ; a5++)
					for (var fy = dh[a5].length, kQ = ti[a5], k2 = 0; k2 < fy; k2++) th[k2 + kQ] = dh[a5][k2];
				var jc = a7.jc;
				for (a5 = 0; a5 < tZ; a5++)
					for (fy = dh[a5].length, kQ = ti[a5], k2 = 0; k2 < fy; k2++)
						if (th[k2 + kQ] >= jc) {
							tj[a5] = k2;
							break
						}
			}
		}, this.aRP = function() {
			for (var a5 = this.k5.length - 1; 0 <= a5; a5--) this.k5[a5] = a5;
			this.wz = [], this.aRO = []
		}, this.aRQ = function() {
			for (var a5 = a7.data.tc[7] - 1; 0 <= a5; a5--) this.eR[a5] = 1;
			for (a5 = a7.data.tc[7]; a5 < a7.eQ; a5++) this.eR[a5] = 2;
			this.k5[1] = 7, this.k5[2] = 8
		}, this.iR = function() {
			var hO = new Uint8Array(a7.jc),
				hP = new Uint8Array(a7.jc),
				aRT = new Uint16Array(8),
				aRU = new Uint16Array(this.k5.length);
			this.aRV(hO, hP, aRT, 1), this.aBY(aRT), this.aRW(aRU, hO, hP), this.aRX(hO, hP, aRU), this.aRY()
		}, this.aRV = function(hO, hP, aRa, aRc) {
			for (var en, e, aRd, eT = this.k5.length - aRc, fC = new Uint16Array(eT), a1Q = a7.data.a1Q, a5 = a7.jc - 1; 0 <= a5; a5--) {
				for (en = eT; aRc <= en; en--) fC[en - 1] = Math.abs(4 * (a1Q[a5] >> 12) - aRN[en][0]) + Math.abs(4 * (a1Q[a5] >> 6 & 63) - aRN[en][1]) + Math.abs(4 * (63 & a1Q[a5]) - aRN[en][2]);
				for (aRd = 768, en = eT - 1; 0 <= en; en--) fC[e = (en + a5) % eT] < aRd && (aRd = fC[e], hO[a5] = e);
				for (aRa[hO[a5]] += 4, aRd = 768, en = eT - 1; 0 <= en; en--) fC[e = (en + a5) % eT] < aRd && e !== hO[a5] && (aRd = fC[e], hP[a5] = e);
				aRa[hP[a5]]++
			}
		}, this.aBY = function(aRa) {
			for (var en, kS, eT = this.k5.length - 1, a5 = eT; 0 <= a5; a5--) this.k5[a5] = a5;
			for (a5 = eT - 1; 0 <= a5; a5--) aRa[a5]++;
			for (a5 = 1; a5 <= eT; a5++) {
				for (kS = 0, en = 1; en < eT; en++) aRa[en] > aRa[kS] && (kS = en);
				aRa[kS] = 0, this.k5[a5] = kS + 1
			}
		}, this.aRW = function(aRU, hO, hP) {
			var a5, en, aME, eo, eW, e, mB, qm, aRe = this.k5.length - 1,
				ph = new Uint16Array(aRe),
				aRf = [],
				a4v = Math.max(a7.jc + 1 >> 1, 6);
			loop: for (a5 = 0; a5 < a7.jc; a5++)
				if (null !== (aME = b6.x3.x4(aa.x5[a5]))) {
					for (en = this.wz.length - 1; 0 <= en; en--)
						if (aME === this.wz[en] && this.aRO[en].length < a4v) {
							this.aRO[en].push(a5);
							continue loop
						} this.wz.push(aME), aRf.push(!1), this.aRO.push([a5])
				}
			for (en = this.wz.length - 1; 0 <= en; en--) {
				for (eW = -1, eo = this.wz.length - 1; 0 <= eo; eo--) !aRf[eo] && (-1 === eW || this.aRO[eo].length > this.aRO[eW].length) && (eW = eo);
				for (eo = aRe - 1; 0 <= eo; eo--) ph[eo] = 1;
				for (eo = this.aRO[eW].length - 1; 0 <= eo; eo--) ph[hO[this.aRO[eW][eo]]] += 3, ph[hP[this.aRO[eW][eo]]]++;
				for (a5 = aRe - 1; 0 <= a5; a5--) {
					for (e = eW % aRe, eo = aRe - 1; 0 <= eo; eo--) ph[eo] > ph[e] && (e = eo);
					for (mB = -1, eo = a7.ta; 0 < eo; eo--)
						if (this.k5[eo] === e + 1) {
							mB = eo;
							break
						} if (ph[e] = 0, -1 !== mB) {
						for (qm = 0, eo = a7.ta; 0 < eo; eo--) aRU[mB] > aRU[eo] && qm++;
						if (qm !== a7.ta - 1) {
							for (eo = this.aRO[eW].length - 1; 0 <= eo; eo--) aRU[mB]++, this.eR[this.aRO[eW][eo]] = mB;
							break
						}
					}
				}
				aRf[eW] = !0
			}
		}, this.aRX = function(hO, hP, aRU) {
			for (var a5, he, eT = this.k5.length - 1, border = bG.ev(a7.jc, a7.ta), aRg = (0 < a7.jc % a7.ta && border++, new Uint8Array(1 + eT)), en = eT; 1 <= en; en--) aRg[this.k5[en]] = en;
			for (a5 = 0; a5 < a7.jc; a5++) he = aRg[hO[a5] + 1], 0 === this.eR[a5] && he <= a7.ta && aRU[he] < border && (aRU[he]++, this.eR[a5] = he);
			for (a5 = 0; a5 < a7.jc; a5++) he = aRg[hP[a5] + 1], 0 === this.eR[a5] && he <= a7.ta && aRU[he] < border && (aRU[he]++, this.eR[a5] = he);
			for (en = a7.ta; 1 <= en; en--)
				for (a5 = a7.jc - 1; 0 <= a5 && !(aRU[en] >= border); a5--) 0 === this.eR[a5] && (aRU[en]++, this.eR[a5] = en)
		}, this.aRY = function() {
			for (var a5 = a7.jc; a5 < a7.eQ; a5++) this.eR[a5] = 1 + a5 % a7.ta
		}
}

function gK() {
	for (var ea, ec, a5 = fQ - 1; 0 <= a5; a5--) ea = bG.ev(fS[a5], 4) % bN.ee, ec = bG.ev(fS[a5], 4 * bN.ee), aa.i8[fL] = aa.i8[fL] > ea ? ea : aa.i8[fL], aa.iA[fL] = aa.iA[fL] > ec ? ec : aa.iA[fL], aa.i9[fL] = aa.i9[fL] < ea ? ea : aa.i9[fL], aa
		.iB[fL] = aa.iB[fL] < ec ? ec : aa.iB[fL]
}

function ff() {
	var eW, g3, a5, eT = aa.fx[fL].length,
		eV = aW.eV;
	loop: for (a5 = eT - 1; 0 <= a5; a5--) {
		for (eW = 3; 0 <= eW; eW--)
			if (g3 = aa.fx[fL][a5] + eV[eW], aW.eK(g3) || aW.g5(g3) && aW.eL(g3) !== fL) {
				aW.ip(aa.fx[fL][a5], fL);
				continue loop
			} aa.fx[fL][a5] = aa.fx[fL][eT - 1], aa.fx[fL].pop(), eT--
	}
}

function fg() {
	var player = fL,
		gB = aa.gB,
		gC = aa.gC,
		et = aa.et,
		eT = gB[player].length,
		eV = aW.eV;
	loop: for (var a5 = eT - 1; 0 <= a5; a5--) {
		for (var aRh = !1, aRi = !1, eW = 3; 0 <= eW; eW--) {
			var g3 = gB[player][a5] + eV[eW];
			if (aW.aBi(g3, player)) continue loop;
			aRh = aRh || aW.gy(g3), aRi = aRi || aW.aBh(g3)
		}
		aRh ? gC[player].push(gB[player][a5]) : aRi ? et[player].push(gB[player][a5]) : aW.u3(gB[player][a5], player), gB[player][a5] = gB[player][eT - 1], gB[player].pop(), eT--
	}
}

function g9() {
	aa.gJ[fP] -= fQ
}

function gA(border) {
	for (var eT = border.length, a5 = eT - 1; 0 <= a5; a5--) aW.uO(fP, border[a5]) || (border[a5] = border[eT - 1], border.pop(), eT--)
}

function gD(border) {
	for (var eT = border.length, a5 = eT - 1; 0 <= a5; a5--) !aW.uO(fP, border[a5]) && aW.eO(border[a5]) && (border[a5] = border[eT - 1], border.pop(), eT--)
}

function gE(border) {
	for (var eW, g3, eT = border.length, eV = aW.eV, a5 = eT - 1; 0 <= a5; a5--)
		for (eW = 3; 0 <= eW; eW--)
			if (g3 = border[a5] + eV[eW], aW.aBi(g3, fP)) {
				aa.gB[fP].push(border[a5]), border[a5] = border[eT - 1], border.pop(), eT--;
				break
			}
}

function gF() {
	for (var eW, g3, eV = aW.eV, a5 = fQ - 1; 0 <= a5; a5--)
		for (eW = 3; 0 <= eW; eW--) g3 = fS[a5] + eV[eW], aW.aBj(fP, g3) && aW.aBk(g3) && (aa.gB[fP].push(g3), aW.g0(g3, fP))
}

function gG() {
	var ea, ec;
	loop: for (; aa.iA[fP] < aa.iB[fP];) {
		for (ea = aa.i9[fP]; ea >= aa.i8[fP]; ea--)
			if (aW.uO(fP, 4 * (aa.iA[fP] * bN.ee + ea))) break loop;
		aa.iA[fP]++
	}
	loop: for (; aa.iA[fP] < aa.iB[fP];) {
		for (ea = aa.i9[fP]; ea >= aa.i8[fP]; ea--)
			if (aW.uO(fP, 4 * (aa.iB[fP] * bN.ee + ea))) break loop;
		aa.iB[fP]--
	}
	loop: for (; aa.i8[fP] < aa.i9[fP];) {
		for (ec = aa.iB[fP]; ec >= aa.iA[fP]; ec--)
			if (aW.uO(fP, 4 * (ec * bN.ee + aa.i8[fP]))) break loop;
		aa.i8[fP]++
	}
	loop: for (; aa.i8[fP] < aa.i9[fP];) {
		for (ec = aa.iB[fP]; ec >= aa.iA[fP]; ec--)
			if (aW.uO(fP, 4 * (ec * bN.ee + aa.i9[fP]))) break loop;
		aa.i9[fP]--
	}
}

function eM(player, ik) {
	return 0 === bb.eR[player] || bb.eR[player] !== bb.eR[ik]
}

function h4(player, ik) {
	for (var e, aRj = aX.fb(player), a5 = 0; a5 < aRj; a5++)
		if (0 === aX.fc(player, a5))
			if ((e = aX.fh(player, a5)) === a7.eQ) {
				if (ik === a7.eQ) return !1;
				if (h2(ik)) return !0
			} else if (b6.fr.kU(e))
		if (ik === a7.eQ) {
			if (h2(e)) return !0
		} else if (h6(ik, e)) return !0;
	return !1
}

function h2(player) {
	for (var a5, g4, eT = aa.gB[player].length, eV = aW.eV, eW = 3; 0 <= eW; eW--)
		for (g4 = eV[eW], a5 = 0; a5 < eT; a5++)
			if (aW.eK(aa.gB[player][a5] + g4)) return !0;
	return !1
}

function aBr(player) {
	for (var a5, g4, eT = aa.gB[player].length, eV = aW.eV, eW = 3; 0 <= eW; eW--)
		for (g4 = eV[eW], a5 = 0; a5 < eT; a5++)
			if (aW.io(aa.gB[player][a5]) && aW.eK(aa.gB[player][a5] + g4)) return !0;
	return !1
}

function h6(zl, zm) {
	for (var a5, e1, g4, g3, aPR = aa.gB[zl].length, aPS = aa.gB[zm].length, eV = (aPS < aPR && (e1 = zl, zl = zm, zm = e1, e1 = aPR, aPR = aPS, 0), aW.eV), eW = 3; 0 <= eW; eW--)
		for (g4 = eV[eW], a5 = 0; a5 < aPR; a5++)
			if (g3 = aa.gB[zl][a5] + g4, aW.g5(g3) && aW.eL(g3) === zm) return !0;
	return !1
}

function aBs(zl, zm) {
	for (var a5, g4, g3, aPR = aa.gB[zl].length, eV = aW.eV, eW = 3; 0 <= eW; eW--)
		for (g4 = eV[eW], a5 = 0; a5 < aPR; a5++)
			if (aW.io(aa.gB[zl][a5]) && (g3 = aa.gB[zl][a5] + g4, aW.g5(g3)) && aW.eL(g3) === zm) return !0;
	return !1
}

function dM() {
	this.oh = new aRk
}

function aRk() {
	this.h1 = function(player) {
		b6.fr.zj(player) && aH.wb(80, L(399), 637, 0, t.nE, t.mX, -1, !1)
	}, this.a2D = function() {
		aH.wb(80, L(400), 637, 0, t.nE, t.mX, -1, !1)
	}, this.nj = function(player) {
		b6.fr.zj(player) && aH.wb(80, L(401), 637, 0, t.nE, t.mX, -1, !1)
	}
}

function aRl() {
	this.aRm = 0, this.iR = function() {
		aI.iR(), aT.iR(), at.iR(), aw.lB.iR(), ar.aA4(), ba.dW && (ba.dW = !1, aU.rE())
	}
}

function aRn() {
	this.e0 = ba.e0, this.oF = 0, this.aRm = 0, this.a9z = 0, this.aRo = null, this.aRp = 7, this.a3h = 0, this.dO = function() {
		this.a9z = 0, this.aRo = [], this.oF = 0, this.aRm = 0
	}, this.aLw = function(a6) {
		var a5;
		if (a7.gr) this.a7f(a6);
		else if (this.aRo.push(a6), 2 === a7.wD) {
			for (a5 = 0; a5 < this.aRo.length; a5++) b4.nY.iR(this.aRo[a5]);
			this.aRo = []
		}
	}, this.a7f = function(a6) {
		b4.nY.iR(a6), b5.iR(), aQ.a7f(this.a9z), this.a9z === a7.a0i ? (a7.oW.iR(), this.a9z = 0, this.oF = 0, this.aRm = 0, this.e0 = ba.e0) : (this.a9z++, aZ.a0b(), aZ.lJ(!0), bW.a8D())
	}, this.iR = function() {
		at.iR(), a7.gr ? (ba.dW = aQ.a7f(-1) || ba.dW, lL()) : (0 !== this.oF || ba.e0 >= this.e0 && (this.e0 += ba.a7e * Math.floor(1 + (ba.e0 - this.e0) / ba.a7e), 2 === a7.wD ? l9() : this.aRq(), this.oF++, 27 < ba.e0 - this.a3h)) && this
		.aRr(), lG(), ba.dW && (ba.dW = !1, uR()), this.a3h = ba.e0
	}, this.aRr = function() {
		ba.dW = !0, lI(), this.oF = 0
	}, this.aRq = function() {
		var ro, a5;
		if (this.aRm !== 7 * this.a9z) lC(), bW.a8D();
		else {
			ro = !1;
			loop: for (; this.aRs() && (ro = !0, lC(), 2 !== a7.wD) && 0 < this.aRo.length;)
				for (a5 = this.aRp - 2; 0 <= a5; a5--)
					if (lC(), 2 === a7.wD) break loop;
			ro ? bW.a8D() : (l9(), bW.a0e())
		}
	}, this.aRs = function() {
		return 0 < this.aRo.length && (this.a9z++, b4.nY.iR(this.aRo[0]), this.aRo.shift(), !0)
	}
}

function aRt() {
	var aRu, aRv, aRw, a9z, aRx, oF = 0,
		e0 = ba.e0;

	function aS0() {
		! function() {
			if (!a7.gr) return;
			if (a7.jy) return;
			if (aRx % 7 != 0) aRx++;
			else if (a9z === a7.a0i) {
				if (!aS3()) return;
				aQ.a7f(a9z), a7.oW.iR()
			} else {
				if (!aS3()) return;
				aRx++, a9z++, aZ.a0b(), aZ.lJ(!0)
			}
			return 1
		}() && aS3() && lC()
	}

	function aS1() {
		oF = 0, (a7.gr ? (ba.dW = aQ.a7f(a9z - (aRx % 7 == 0 ? 0 : 1) + aRx % 7 / 7) || ba.dW, lL) : aG.gg || !b7.a1F ? lL : (ba.dW = !0, lI))()
	}

	function aS3() {
		var a5, eT, aS4 = b5.oU.aN1,
			fD = b5.oU.aN2,
			fF = b5.oU.aN3,
			fH = b5.oU.aN4,
			aS5 = b5.oU.aN5,
			aS6 = b5.oU.aN6;
		if (!(aRu >= aS6.length)) {
			if (aS6 = aS6[aRu], aS5[aRu]) {
				for (eT = aRv + aS6, a5 = aRv; a5 < eT; a5++) b4.nY.oH(aS4[a5], fD[a5], fF[a5], fH[a5]);
				aRv += aS6, aRu++
			} else ++aRw >= aS6 && (aRu++, aRw = 0);
			return 1
		}
		aH.xX("Replay file smaller than expected."), b7.yS(!1), a7.wD = 2
	}
	this.aRm = 0, this.dO = function() {
		aRx = a9z = aRw = aRv = aRu = 0
	}, this.iR = function() {
		var aPo;
		at.iR(), b7.a57() < 1.7 ? 0 === oF ? ba.e0 >= e0 && (aPo = ba.a7e / b7.a57(), e0 += aPo * Math.floor(1 + (ba.e0 - e0) / aPo), 2 === a7.wD || aG.gg || !b7.a1F ? l9() : (aS0(), bW.a8D()), oF++) : aS1() : function() {
			var aPo;
			if (ba.e0 >= e0)
				if (2 === a7.wD || aG.gg || !b7.a1F) l9(), e0 = ba.e0;
				else {
					for (aPo = ba.a7e / b7.a57(), 16 < (ba.e0 - e0) / aPo && (e0 = ba.e0 - 16 * aPo); ba.e0 >= e0 && 2 !== a7.wD;) e0 += aPo, aS0();
					bW.a8D()
				} aS1()
		}(), lG(), ba.dW && (ba.dW = !1, uR())
	}, this.wN = function() {
		aRu !== b5.oU.aN6.length && aRu + 1 !== b5.oU.aN6.length && aH.xX("Replay file larger than expected.")
	}
}

function aS7() {
	var oF = 0,
		e0 = ba.e0;
	this.aRm = 0, this.iR = function() {
		at.iR(), a7.gr ? lL() : 0 === oF ? ba.e0 >= e0 && (e0 += ba.a7e * Math.floor(1 + (ba.e0 - e0) / ba.a7e), 2 === a7.wD || aG.gg ? l9() : (lC(), bW.a8D()), oF++) : ((aG.gg ? lL : (ba.dW = !0, lI))(), oF = 0), lG(), ba.dW && (ba.dW = !1,
		uR())
	}
}

function dH() {
	this.wM = null, this.dW = !1, this.e0 = 0, this.a7e = 56;
	var aS8 = 0;

	function aS9() {
		ba.e0 = aS8 = performance.now(), ba.wM.iR(), window.requestAnimationFrame(aS9)
	}
	this.dO = function() {
		this.a1D(), window.requestAnimationFrame(aS9), this.e0 = performance.now()
	}, this.a14 = function() {
		a7.gf ? (this.wM = new aRt, this.wM.dO()) : a7.jy ? this.wM = new aS7 : (this.wM = new aRn, this.wM.dO())
	}, this.a1D = function() {
		this.wM = new aRl, this.dW = !0
	}, this.iR = function() {
		this.wM.aRm++
	}, this.jZ = function() {
		return this.wM.aRm
	}, this.aLc = function() {
		var e1 = performance.now();
		e1 < aS8 + 1e3 || (this.e0 = e1, this.wM.iR())
	}
}

function cj() {
	var lk = 0,
		aSA = !0;

	function aSC(ow) {
		8 !== aU.xT() || 2 !== aa.zi[a7.eD] && (0 !== aa.lX[a7.eD] || a7.gr) || aH.a3O(ow)
	}
	this.iR = function() {
		var e1, a3k;
		ba.e0 > lk && (lk = ba.e0 + 2500, e1 = new Date, a3k = e1.getUTCSeconds(), aSA ? a3k < 45 && (aSA = !1) : a3k < 45 || (aSA = !0, (a3k = e1.getUTCMinutes() + 1) % 15 == 0 && aSC(30 === a3k ? "Upcoming Battle Royale Contest!" :
			"Upcoming Alliance Contest!")))
	}
}

function cb() {
	var lz, m0, mD, mE, aSD = 0,
		aSE = 0;

	function aSG() {
		return Math.pow(Math.pow(mD - lz, 2) + Math.pow(mE - m0, 2), .5)
	}

	function aSF(e) {
		lz = at.pL * e.touches[0].clientX, m0 = at.pL * e.touches[0].clientY, mD = at.pL * e.touches[1].clientX, mE = at.pL * e.touches[1].clientY
	}
	this.xt = function(e) {
		return 1 < e.touches.length ? (aSE = ba.e0, aSD = 3, aSF(e), aF.ql(), !0) : (aSD = 0, !1)
	}, this.xu = function(e) {
		var aFG, hc, hd;
		return 0 !== a7.wD && 1 < e.touches.length && (aSD = Math.max(aSD - 1, 0), aB.mI() && (aFG = aSG(), aSF(e), e = aSG(), hc = Math.floor((lz + mD) / 2), hd = Math.floor((m0 + mE) / 2), aM.a5X(hc, hd, Math.max(.125, e) / Math.max(.125,
			aFG)), ba.dW = !0), !0)
	}, this.yI = function() {
		var ea, ec;
		return !!(aSD && (aSD = 0, ba.e0 < aSE + 500)) && (ea = (lz + mD) / 2, ec = (m0 + mE) / 2, aF.yB(ea, ec), aF.click(ea, ec, !0) && (ba.dW = !0), !0)
	}
}

function cs() {
	this.size = 0, this.oF = 0, this.a6 = null, this.dO = function(a6) {
		this.oF = 0, this.a6 = a6, this.size = a6.length
	}, this.xf = function() {
		this.a6 = null
	}, this.oG = function(size) {
		for (var ew = 0, a6 = this.a6, mI = this.oF + size - 1, a5 = this.oF; a5 <= mI; a5++) ew |= (a6[a5 >> 3] >> 7 - (7 & a5) & 1) << mI - a5;
		return this.oF += size, this.oF > 8 * this.size && console.error("Unwrapper Overflow"), ew
	}, this.aMA = function(size) {
		var en = size >> 1;
		return (1 << en) * this.oG(size - en) + this.oG(en)
	}, this.aM9 = function(aSH) {
		return this.size === b8.aM3(aSH)
	}, this.aNJ = function(aSI, aSJ, aSK) {
		var fy = this.oG(aSI);
		if (!fy) return null;
		for (var aSI = Math.max(fy, aSK), fC = new(aSJ <= 8 ? Uint8Array : aSJ <= 16 ? Uint16Array : Uint32Array)(aSI), a5 = 0; a5 < fy; a5++) fC[a5] = this.oG(aSJ);
		aSK = fC[fy - 1];
		return aSK && fC.fill(aSK, fy), fC
	}, this.aNK = function(aSI, aSL, aSK) {
		var fy = this.oG(aSI);
		if (!fy) return null;
		for (var aSI = Math.max(fy, aSK), fC = new Array(aSI), a5 = 0; a5 < fy; a5++) fC[a5] = this.aNH(aSL);
		return fC.fill(fC[fy - 1], fy), fC
	}, this.aNH = function(aSI) {
		return bB.sM.sO(this.oG(aSI))
	}, this.aNI = function() {
		var ow = bA.qT.qU(bA.qT.qV(this.oG(30))),
			ow = b6.x3.a0W(ow, "_", "/");
		ow = b6.x3.a0W(ow, "-", "+");
		for (var aSM = "";
			(ow.length + aSM.length) % 4;) aSM += "=";
		ow = "data:image/png;base64," + ow + aSM;
		var aCN = new Image;
		aCN.onload = function() {
			b5.aJi.aND(aCN)
		}, aCN.src = ow
	}
}

function dB() {
	this.aO8 = 0, this.aO9 = 0, this.aO4 = 0, this.aO5 = 0, this.aO6 = 0, this.aO7 = 0, this.a8E = [0, 0, 0, 0], this.mH = function() {
		this.aO8 = aM.uT(), this.aO9 = aM.uU(), this.aO4 = -this.aO8, this.aO5 = -this.aO9, this.aO6 = at.z / hv, this.aO7 = at.j6 / hv, this.a8E[0] = Math.floor(this.aO4), this.a8E[1] = Math.floor(this.aO5), this.a8E[2] = Math.floor(this.a8E[
			0] + this.aO6 + 1), this.a8E[3] = Math.floor(this.a8E[1] + this.aO7 + 1), bW.a8B = !0
	}
}

function cc() {
	var a4G, lk;
	this.dO = function() {
		a4G = 1, lk = 0
	}, this.iR = function() {
		0 < a4G && (lk = 0 === lk ? ba.e0 + 16 : lk, a4G = (a4G -= .001 * (ba.e0 - lk)) < 0 ? 0 : a4G, lk = ba.e0, ba.dW = !0)
	}, this.rE = function() {
		0 < a4G && (rF.fillStyle = "rgba(0,0,0," + a4G + ")", rF.fillRect(0, 0, at.z, at.j6))
	}
}

function cf() {
	function aSQ(map, ea, ec, z, j6) {
		map >= bN.aEY || (bN.e8 === map && (rF.fillStyle = t.nD, rF.fillRect(ea, ec, z, j6), rF.fillStyle = t.ma), rF.strokeRect(ea, ec, z, j6), rF.fillText(b6.uY.zO(bN.sj.sk[map].name, 0, .9 * z), Math.floor(ea + .5 * z), Math.floor(ec + .55 * j6)))
	}
	this.ur = !1, this.aSP = [0, 0, 0, 0], this.show = function() {
		this.ur = !0, this.resize(), ba.dW = !0
	}, this.resize = function() {
		var aPR = bG.ev(bN.aEY + bN.aEY % 2, 2),
			aPR = at.j6 - aPR * bX.gap;
		q.r.vH() ? this.aSP[2] = Math.floor(.75 * at.min) : this.aSP[2] = Math.floor(.5 * at.min), this.aSP[3] = Math.floor(1.25 * this.aSP[2]), this.aSP[3] > aPR && (this.aSP[3] = aPR, this.aSP[2] = Math.floor(aPR / 1.2)), this.aSP[0] = Math
			.floor((at.z - this.aSP[2]) / 2), this.aSP[1] = Math.floor((at.j6 - this.aSP[3]) / 2)
	}, this.xp = function(ea, ec) {
		return !(ea < this.aSP[0] || ec < this.aSP[1] || ea > this.aSP[0] + this.aSP[2] || ec > this.aSP[1] + this.aSP[3])
	}, this.gj = function(ea, ec) {
		var a4v, aPR = bG.ev(bN.aEY + bN.aEY % 2, 2);
		return ba.dW = !0, ea < this.aSP[0] || ec < this.aSP[1] || ea > this.aSP[0] + this.aSP[2] || ec > this.aSP[1] + this.aSP[3] ? !(this.ur = !1) : (a4v = Math.floor(.17 * this.aSP[3]), ec < this.aSP[1] + a4v ? ea > this.aSP[0] + this.aSP[
			2] - a4v && (this.ur = !1) : (ec = (ec = Math.floor(aPR * (ec - this.aSP[1] - a4v - .00576 * at.pH) / (this.aSP[3] - a4v - .01152 * at.pH))) < 0 ? 0 : aPR - 1 < ec ? aPR - 1 : ec, ea > this.aSP[0] + this.aSP[2] / 2 && (ec += aPR),
				ec >= bN.aEY || bN.a1(ec, Math.floor(16384 * Math.random()))), !0)
	}, this.rE = function() {
		var a5, m0, a4v = Math.floor(.17 * this.aSP[3]),
			aPR = bG.ev(bN.aEY + bN.aEY % 2, 2),
			gap = .6 * .01152 * at.pH,
			aGQ = (this.aSP[3] - a4v - (aPR + 1) * gap) / aPR,
			qY = Math.floor((this.aSP[2] - 3 * gap) / 2);
		for (rF.lineWidth = bX.vK, b6.pF.textAlign(rF, 1), b6.pF.textBaseline(rF, 1), rF.fillStyle = t.mX, rF.fillRect(this.aSP[0], this.aSP[1] + a4v, this.aSP[2], this.aSP[3] - a4v), rF.fillStyle = t.nD, rF.fillRect(this.aSP[0], this.aSP[1],
				this.aSP[2], a4v), rF.strokeStyle = t.ma, rF.strokeRect(this.aSP[0], this.aSP[1], this.aSP[2], this.aSP[3]), rF.fillStyle = t.ma, rF.fillRect(this.aSP[0], this.aSP[1] + a4v, this.aSP[2], 2), rF.font = b6.pF.qW(1, .48 * a4v), rF
			.fillText(L(402), Math.floor(this.aSP[0] + this.aSP[2] / 2), Math.floor(this.aSP[1] + .55 * a4v)), rF.font = b6.pF.qW(1, .48 * aGQ), a5 = aPR - 1; 0 <= a5; a5--) m0 = Math.floor(this.aSP[1] + a4v + gap + a5 * (aGQ + gap)), aSQ(a5,
			this.aSP[0] + gap, m0, qY, aGQ), aSQ(a5 + aPR, this.aSP[0] + qY + 2 * gap, m0, qY, aGQ);
		aG.a2c(Math.floor(this.aSP[0] + this.aSP[2] - .7 * a4v), Math.floor(this.aSP[1] + .3 * a4v), Math.floor(.4 * a4v)), rF.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function a0() {
	this.size = 0, this.oF = 0, this.a6 = null, this.dO = function(a6) {
		this.oF = 0, this.a6 = a6, this.size = a6.length
	}, this.a1 = function(aSH) {
		return this.dO(new Uint8Array(this.aM3(aSH))), this.a6
	}, this.xf = function() {
		this.a6 = null
	}, this.a2 = function(size, a3m) {
		for (var a6 = this.a6, mI = this.oF + size - 1, a5 = this.oF; a5 <= mI; a5++) a6[a5 >> 3] |= (a3m >> mI - a5 & 1) << 7 - (7 & a5);
		this.oF += size, this.oF > 8 * this.size && console.error("Wrapper Overflow")
	}, this.aM2 = function(size, a3m) {
		var en = size >> 1,
			eW = 1 << en;
		this.a2(size - en, bG.ev(a3m, eW)), this.a2(en, a3m % eW)
	}, this.aSR = function(size) {
		for (var a6 = this.a6, mI = this.oF + size, a5 = this.oF; a5 < mI; a5++) a6[a5 >> 3] &= 255 ^ 128 >>> (7 & a5)
	}, this.aM3 = function(aSH) {
		return aSH + 7 >> 3
	}, this.aSS = function(fC, it, mI, aST) {
		for (var a5 = it; a5 < mI; a5++) this.a2(aST, fC[a5])
	}
}

function cr() {
	this.dO = function() {
		this.fC = [], this.oF = 0
	}, this.a2 = function(aSU, value) {
		for (var fC = this.fC, mI = this.oF + aSU - 1, aSV = 1 + (mI >> 3); fC.length < aSV;) fC.push(0);
		for (var a5 = this.oF; a5 <= mI; a5++) fC[a5 >> 3] |= (value >> mI - a5 & 1) << 7 - (7 & a5);
		this.oF += aSU
	}, this.dV = function(fC, aSI, aSJ) {
		var aSW = b6.pP.z9(fC);
		this.a2(aSI, aSW);
		for (var a5 = 0; a5 < aSW; a5++) this.a2(aSJ, fC[a5])
	}, this.aNb = function(fC, aSI, aSL) {
		var aSW = b6.pP.z9(fC);
		this.a2(aSI, aSW);
		for (var a5 = 0; a5 < aSW; a5++) this.aNZ(fC[a5], aSL)
	}, this.aNZ = function(ow, aSI) {
		var eT = ow.length;
		this.a2(aSI, eT);
		for (var a5 = 0; a5 < eT; a5++) this.a2(16, ow.charCodeAt(a5))
	}, this.aNa = function(zC) {
		var aSX = (zC = zC.toDataURL()).split(",");
		if (aSX.length < 2) console.log("error 266");
		else {
			zC = b6.x3.a0W(zC = aSX[aSX.length - 1], "/", "_"), zC = b6.x3.a0W(zC, "\\+", "-");
			var zC = b6.x3.a0W(zC, "=", ""),
				sX = bB.qT.sU(zC),
				eT = sX.length;
			this.a2(30, eT);
			for (var a5 = 0; a5 < eT; a5++) this.a2(6, sX[a5])
		}
	}
}
a(), self.aiCommand746 = function(ew) {
	0 === ew ? bi() : 1 !== ew || !q || 1 !== q.id || q.ex < 14 || bE.ey()
}, setTimeout(bi, 1e4), window.onload = function() {
	bi()
};