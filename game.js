function a() {
	var b, c;

	function r() {
		if (b && b.readyState === b.OPEN) {
			var u = new v;
			u.w(1612), u.x(1, 0), u.x(6, 7), u.x(2, m ? m.id : 3), u.x(1, y ? 1 : 0), u.x(1, z ? 1 : 0), u.x(1, e ? e.f : 0);
			for (var a0 = 0; a0 < c.length && a0 < 100; a0++) u.x(16, c.charCodeAt(a0));
			b.send(u.a1), s()
		}
	}

	function s() {
		b && (b.onclose = null, b.onopen = null, b = null)
	}
	window.addEventListener("error", function error(d) {
		window.removeEventListener("error", error);
		return alert("Error:\n" + d.filename + " " + d.lineno + " " + d.colno + " " + d.message);
		window.removeEventListener("error", error), c = d.lineno + " " + d.colno + " " + d.message, e && 1 === e.f && (g.h(), i.j(4, 5, new k("🤖 Beep Boop! An error occurred.", c +
			"<br>Please report this error message to davidtschacher@gmail.com. Please also describe the actions you took before this error occurred.", !0, [new l("🔄 Reload", function() {
				m.n.o()
			}, p.q)]))), (b = new WebSocket("wss://territorial.io/s52/")).onopen = r, b.onclose = function() {
			s()
		}, 0 === d.lineno && 0 === d.colno || (m && 1 === m.id ? m.t.showToast(c) : alert(c))
	})
}
var e, a2, a3, a4, a5, a6, a7, a8, a9, aA, aB, aC, aD, aE, aF, aG, aH, aI, aJ, aK, aL, aM, aN, aO, aP, aQ, aR, aS, aT, aU, aV, aW, aX, aY, aZ, aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, at, au, av, aw, ax, ay, az, b0, b1,
	b2, p, b3, b4, b5, b6, b7, b8, b9, bA, bB, bC, bD, bE, bF, bG, bH, bI, bJ, i, bK, bL, bM, bN, bO, bP, bQ, bR, bS, bT, bU, bV, m, bW, bX, bY, g, bZ, dP, dQ, dR, y, dS, z, eE, eF, eG, eH, eI, eJ, eK, eL, eM, eN, eO, eP, eQ, eR, h8, h7, h9, a22, jx,
	iX, it, ir, wE, kv, ss, a5d, z9, zA;

function ba(bb) {
	e && !bb || (bd(), bB = new be, bA = new bf, b2 = new bg, p = new bh, a2 = new bi, az = new bj, b5 = new bk, b6 = new bl, a3 = new bm, a4 = new bn, a5 = new bo, a6 = new bp, a7 = new bq, a8 = new br, a9 = new bs, aA = new bt, aB = new bu, aC =
		new bv, aD = new bw, aE = new bx, aF = new by, aG = new bz, aH = new c0, aI = new c1, aJ = new c2, aK = new c3, aL = new c4, aM = new c5, aN = new c6, aO = new c7, aP = new c8, aQ = new c9, aR = new cA, aS = new cB, aT = new cC, aU =
		new cD, aV = new cE, aY = new cF, aW = new cG, aX = new cH, aZ = new cI, ap = new cJ, aa = new cK, ac = new cL, ad = new cM, ae = new cN, aq = new cO, ao = new cP, af = new cQ, ab = new cR, ag = new cS, ah = new cT, ai = new cU, an =
		new cV, aj = new cW, ak = new cX, al = new cY, am = new cZ, ar = new ca, at = new cb, au = new cc, av = new cd, aw = new ce, ax = new cf, ay = new cg, b0 = new ch, b1 = new ci, b3 = new cj, b4 = new v, b7 = new ck, b8 = new cl, b9 =
		new cm, bC = new cn, bD = new co, bE = new cp, bF = new cq, bG = new cr, bH = new cs, bI = new ct, bJ = new cu, i = new cv, bK = new cw, m = new cx, e = new cy, bW = new cz, bX = new d0, bU = new d1, bV = new d2, bO = new d3, bP = new d4,
		bL = new d5, bR = new d6, bS = new d7, bT = new d8, bY = new d9, bQ = new dA, g = new dB, bZ = new dC, e.dE(), m.dE(), an.dF(), bX.dE(), az.dE(), az.dG(), bZ.dE(), b2.dE(), aT.dE(), bL.dE(), aq.dE(), b5.dE(), b6.dE(), bI.dE(), i.dE(),
		bM = new dH, an.dE(), m.n.dI(), bT.dE(), bQ.dE(), bN = new dJ, ao.dE(), aV.dK(), bK.dE(), ac.dE(), aP.dE(), ax.dE(), aI.dE(), aZ.dE(), b9.dE(), aR.dE(), bT.dL = !0, setTimeout(function() {
			bI.w(2, 14071)
		}, 0), i.j(5, 5), b8.dM() || m.n.dN(), an.dO(), e.f = 1)
}

function cy() {
	this.dT = 1066, this.dE = function() {
		dP = 2, dR = 32, dQ = "31 Aug 2024 [1.99.6.9]", y = true, z = function() {
			try {
				return window.self !== window.top
			} catch (d) {
				return !0
			}
		}(), dS = (new Date).getTime() % 1024
	}, this.f = 0
}

function dC() {
	this.id = new dV, this.dE = function() {
		this.id.dE()
	}
}

function dV() {
	this.dE = function() {
		0 === bX.dW.data[181].value && (bX.dW.dX(180, Math.floor(Math.random() * bB.pow(30))), bX.dW.dX(181, Math.floor((new Date).getTime() / 36e5)))
	}
}

function cw() {
	this.dY = new dZ, this.da = new db, this.dE = function() {
		m.n.dc()
	}
}

function dZ() {
	function dm() {}
	this.dE = function() {}, this.dl = function() {
		return !!dm() && (aiptag.cmd.player.push(function() {
			aiptag.adplayer.startVideoAd()
		}), !0)
	}, this.hideCMPButton = function() {
		"undefined" != typeof aipAPItag && aipAPItag.hideCMPButton && aipAPItag.hideCMPButton()
	}, this.showCMPButton = function() {
		"undefined" != typeof aipAPItag && aipAPItag.showCMPButton && aipAPItag.showCMPButton()
	}, this.showCMPScreen = function() {
		dm() && aipAPItag.showCMPScreen()
	}
}

function db() {
	var dp = 2e4;
	this.show = function() {
		if (bT.dp < dp) return !1;
		dp = bT.dp + 135e4, 2 === dP && m.n.dr(Math.floor(135e4))
	}
}

function cp() {
	this.dv = new Uint16Array(2), this.dw = new Uint16Array(2), this.dx = new Uint32Array(2), this.dy = new Uint32Array(2), this.dz = new Uint8Array(4), this.e0 = new Uint8Array(4), this.e1 = new Uint32Array(5), this.e2 = new Uint32Array(8), this
		.e3 = new Uint16Array(16), this.e4 = new Uint16Array(512), this.e5 = function(e6, e7) {
			return e6[0] = e7, e6
		}, this.e8 = function(e6, e7, e9) {
			return e6[0] = e7, e6[1] = e9, e6
		}, this.eA = function(e6, e7, e9, eB) {
			return e6[0] = e7, e6[1] = e9, e6[2] = eB, e6
		}, this.eC = function(e6, e7, e9, eB, eD) {
			return e6[0] = e7, e6[1] = e9, e6[2] = eB, e6[3] = eD, e6
		}
}

function eS() {
	eK = 0, eL = 2048, eM = new Uint32Array(4 * eL), eN = 0, eO = new Uint32Array(eL), (eP = new Int32Array(4))[0] = -4 * bI.eT, eP[1] = 4, eP[2] = -eP[0], eP[3] = -eP[1], eQ = new Uint8Array(bI.eT * bI.eU)
}

function eV(player) {
	eF = player, eR = !1, eW(), eX();
	for (var a0 = aU.eY(eF) - 1; 0 <= a0; a0--) 0 === aU.eZ(eF, a0) && (eE = a0, ea());
	eR && eb()
}

function eb() {
	ec(), ed()
}

function ea() {
	eJ = aU.ee(eF, eE), eG = aU.ef(eF, eE), eH = aU.eg(eF, eE), eh(), (0 !== eK && (ej(), ek()) ? el : ei)()
}

function ek() {
	var dq;
	return (eI = bB.em(eG, eK)) > a2.en || !!eH && ((dq = eK * (1 + a2.en)) <= (eG += b2.eo.ep(eF, dq - eG)) || aX.eq[eF] < 5 * bT.er())
}

function ej() {
	for (var a0 = eK - 1; 0 <= a0; a0--) eQ[bB.em(eM[a0], 4)] = 0
}

function ei() {
	var dq;
	1 === aU.eY(eF) && a4.es(eF), eF !== a2.et ? (aX.eu[eF] += eG, aV.ev(eF)) : (dq = aX.eu[eF], aX.eu[eF] += eG, aV.ev(eF), bR.ew[13] -= aX.eu[eF] - dq), aU.ex(eF, eE)
}

function eW() {
	var a0, ey = aX.ez[eF].length;
	for (eN = 0, a0 = (eL < ey ? eL : ey) - 1; 0 <= a0; a0--) eO[eN++] = aX.ez[eF][a0]
}

function eX() {
	for (var a0 = aX.ez[eF].length - 1; 0 <= a0; a0--) aS.f0(aX.ez[eF][a0]) && aS.f1(aX.ez[eF][a0], eF);
	aX.ez[eF] = []
}

function eh() {
	eK = 0, (eJ === a2.f2 ? f3 : f4)()
}

function f4() {
	for (var f5, f6, a0, f7 = 3; 0 <= f7; f7--)
		for (a0 = eN - 1; 0 <= a0; a0--) f5 = eO[a0] + eP[f7], f6 = bB.em(f5, 4), 0 === eQ[f6] && aS.f8(f5) && aS.f9(f5) === eJ && (eQ[f6] = 1, eM[eK++] = f5)
}

function f3() {
	for (var f5, f6, a0, f7 = 3; 0 <= f7; f7--)
		for (a0 = eN - 1; 0 <= a0; a0--) f5 = eO[a0] + eP[f7], f6 = bB.em(f5, 4), 0 === eQ[f6] && aS.fA(f5) && (eQ[f6] = 1, eM[eK++] = f5)
}

function el() {
	fB() ? (fC(), eJ !== a2.f2 && fD()) : ei()
}

function fD() {
	fE(), fF(aX.fG[eJ]), fF(aX.fH[eJ]), fI(aX.ez[eJ]), fJ(aX.fH[eJ]), fJ(aX.fK[eJ]), fL(), fM()
}

function fC() {
	eR = !0, aU.fN(eF, eE, eG), aU.fO(eF, eE), aX.eq[eF] += eK, fP(), fQ()
}

function fB() {
	return (eJ === a2.f2 ? fR : fS)()
}

function fS() {
	var fT = eK * a2.en,
		fU = fV(),
		fW = fX(),
		fU = fT + 2 * fU + fW,
		fZ = eI * eK;
	return fU < fZ ? (eG -= fU, fa(fU - fT, fW), !0) : (eG -= fZ, eH && 0 === fW ? (fa(Math.max(fZ - fT + b2.eo.ep(eF, fU - fZ + 1), 0), 0), !0) : (fa(fZ - fT, fW), !1))
}

function fa(fZ, fW) {
	if (0 < fW) {
		if (!(fW <= fZ)) return aU.fb(eJ, eF, fW - fZ), void(fZ = 0);
		aU.fb(eJ, eF, 0), fZ -= fW
	}
	fZ = bB.em(fZ, 2), aX.eu[eJ] >= fZ ? aX.eu[eJ] -= fZ : aX.eu[eJ] = 0
}

function fX() {
	return aU.fc(eJ, eF)
}

function fV() {
	return bB.em(eK * aX.eu[eJ], 1 + bB.em(10 * aX.eq[eJ], 16))
}

function fR() {
	return eG -= eK * a2.en, !0
}

function fQ() {
	for (var a0 = eK - 1; 0 <= a0; a0--) aX.ez[eF].push(eM[a0]), aX.fG[eF].push(eM[a0]), aS.f1(eM[a0], eF)
}

function cu() {
	var fd = 0,
		fe = 0;
	this.ff = function(fg, fh) {
		fd = fg, fe = fh
	}, this.fi = function(fj) {
		a2.fk || aB.fl || (b2.eo.fm(0) || b2.eo.fm(1)) && b2.eo.fn(a2.et) && (aG.fo(fd, fe) ? aG.fp = !1 : function(fj) {
			var fr = bC.fs(fd),
				ft = bC.fu(fe),
				fv = bC.fw(fr, ft),
				fx = bC.fy(fv);
			bC.fz(fr, ft) && (a2.g0 ? aS.f0(fx) && b0.g1.g2(fv) : aS.g3(fx) || (aS.g4(fx) || fj ? bD.g5.g6(a2.et, fv) && b0.g1.g7(aG.g8(), fv) : aS.fA(fx) ? g9(a2.et) ? b0.g1.gA(aG.g8(), a2.f2) : gB(a2.et, a2.f2) ? ar.gC(a2.f2, aG.g8()) :
				bD.g5.g6(a2.et, fv) && b0.g1.g7(aG.g8(), fv) : (fr = aS.f9(fx)) !== a2.et && (gD(fr, a2.et) ? gE(a2.et, fr) ? b0.g1.gA(aG.g8(), fr) : gB(a2.et, fr) ? ar.gC(fr, aG.g8()) : bD.g5.g6(a2.et, fv) && b0.g1.g7(aG.g8(),
					fv) : bD.g5.g6(a2.et, fv) && b0.g1.g7(aG.g8(), fv))))
		}(fj))
	}
}

function gF(gG, size, gH, gI, font) {
	var a0, gL = .2,
		gM = document.createElement("canvas"),
		gN = gM.getContext("2d", {
			alpha: !1
		});
	for (gM.width = gG, gM.height = gG, gN.font = size + font, gN.textAlign = "center", gN.textBaseline = "middle", gN.fillStyle = "red", a0 = 0; a0 < gH.length; a0++) gN.fillText(gH[a0], .5 * gG, .5 * gG);
	return -1 < (gM = function(gJ) {
		var a0, gP, f7 = gJ.data;
		for (a0 = f7.length - 4; 0 <= a0; a0 -= 4)
			if (gP = f7[a0], gI <= gP) return Math.floor(a0 / (4 * gG));
		return -1
	}(gN.getImageData(0, 0, gG, gG))) && (gL = (gM - .5 * gG + .1 * size) / size), Math.max(gL, 0)
}

function cn() {
	this.gQ = new Int16Array(4), this.gR = new Int16Array(4), this.dE = function() {
		var a0;
		for (this.gQ[0] = -bI.eT, this.gQ[1] = 1, this.gQ[2] = bI.eT, this.gQ[3] = -1, a0 = 0; a0 < 4; a0++) this.gR[a0] = 4 * this.gQ[a0]
	}, this.gS = function(gT, gU) {
		var gV = this.gW(gU) - this.gW(gT),
			gU = this.gY(gU) - this.gY(gT),
			gT = gV >>> 31 << 1;
		return 5 + gT + (1 - gT) * (1 - (gU >>> 31 << 1)) * (Math.abs(gV) - Math.abs(gU) >>> 31) & 3
	}, this.gc = function(gT, gU, gd) {
		return gd % 2 == 0 ? gd + (1 - gd) * (1 - (this.gW(gU) - this.gW(gT) >>> 31 << 1)) + 4 & 3 : gd + (2 - gd) * (1 - (this.gY(gU) - this.gY(gT) >>> 31 << 1)) + 4 & 3
	}, this.gf = function(f5, fv) {
		for (var gU, gg, gi = aX.fH[f5], ey = gi.length, u = bI.eT, gj = this.gW(fv), gk = this.gY(fv), gl = gi[0] >> 2, min = this.gm(gj, gk, gl), a0 = 1; a0 < ey; a0++)(gg = (gg = gj - (gU = gi[a0] >> 2) % u) * gg + (gg = gk - ~~((.5 + gU) /
			u)) * gg) < min && (min = gg, gl = gU);
		return gl
	}, this.gn = function(player, fx) {
		return !aS.fA(fx) && player === aS.f9(fx)
	}, this.gm = function(fr, ft, fv) {
		return (fr -= this.gW(fv)) * fr + (ft -= this.gY(fv)) * ft
	}, this.go = function(gp, gq, gr) {
		gp = this.gt(gp) - this.gu(gr), gq = this.gw(gq) - this.gx(gr);
		return Math.sqrt(gp * gp + gq * gq)
	}, this.gy = function(gT, gU) {
		var gs = this.gW(gT) - this.gW(gU),
			gT = this.gY(gT) - this.gY(gU);
		return Math.sqrt(gs * gs + gT * gT)
	}, this.gz = function(gT, gU) {
		var gs = this.gW(gT) - this.gW(gU),
			gT = this.gY(gT) - this.gY(gU);
		return gs * gs + gT * gT
	}, this.h0 = function(h1, h2, h3, h4) {
		return (h1 -= h3) * h1 + (h2 -= h4) * h2
	}, this.h5 = function(f5, h6) {
		return bB.em(h6 * aX.eu[f5], 1e3)
	}, this.gt = function(gp) {
		return 16 * (gp + h7) / h8
	}, this.gw = function(gq) {
		return 16 * (gq + h9) / h8
	}, this.fs = function(gp) {
		return Math.floor((gp + h7) / h8)
	}, this.fu = function(gq) {
		return Math.floor((gq + h9) / h8)
	}, this.fz = function(fr, ft) {
		return 1 <= fr && 1 <= ft && fr < bI.eT - 1 && ft < bI.eU - 1
	}, this.gW = function(fv) {
		return fv % bI.eT
	}, this.gY = function(fv) {
		return bB.em(fv, bI.eT)
	}, this.fw = function(fr, ft) {
		return ft * bI.eT + fr
	}, this.hA = function(fv) {
		var fr = this.gW(fv),
			fv = this.gY(fv);
		return 0 < fr && fr < bI.eT - 1 && 0 < fv && fv < bI.eU - 1
	}, this.fy = function(fv) {
		return fv << 2
	}, this.hB = function(fv) {
		return bI.eT * this.gY(fv) * 256 + (this.gW(fv) << 4)
	}, this.hC = function(fv) {
		return this.hB(fv) + 8 + (bI.eT << 7)
	}, this.hD = function(gr) {
		return bI.eT * (this.gx(gr) >> 4) + (this.gu(gr) >> 4)
	}, this.hE = function(gr) {
		gr = this.hD(gr);
		return (this.gW(gr) >> 5) + bD.hF.hG * (this.gY(gr) >> 5)
	}, this.gu = function(gr) {
		return gr % (bI.eT << 4)
	}, this.gx = function(gr) {
		return bB.em(gr, bI.eT << 4)
	}, this.hH = function(fv, gd) {
		return fv + this.gQ[gd]
	}, this.hI = function(fx, gd) {
		return fx + this.gR[gd]
	}, this.hJ = function(player) {
		return this.fw(aX.hK[player] + aX.hL[player] >> 1, aX.hM[player] + aX.hN[player] >> 1)
	}, this.hO = function(player) {
		return this.fw(ao.hP(aX.hK[player], aX.hL[player]), ao.hP(aX.hM[player], aX.hN[player]))
	}
}

function cR() {
	this.hQ = new hR, this.hS = new hT, this.hU = new hV, this.performance = new hW, this.hX = new hY, this.hZ = new ha, this.dE = function() {
		this.hQ.dE(), this.hU.dE(), this.performance.dE(), this.hX.dE(), this.hZ.dE()
	}, this.hb = function() {
		this.performance.hb(), this.hQ.hb()
	}
}

function hY() {
	var hc, he = new Uint16Array(8);

	function ho(size, player) {
		for (var a0 = aX.ez[player].length - 1; size <= a0; a0--) aS.hw(aX.ez[player][a0], player)
	}
	this.dE = function() {
		hc = 0
	}, this.hf = function(player, hg) {
		return bE.e2[1] = aX.ez[player].length, bE.e2[0] === a2.f2 ? ab.hX.hh(player) : this.hi(player, bE.e2[0]), (0 !== bE.e2[1] || 0 !== aX.ez[player].length) && !(!hg && bE.e2[1] === aX.ez[player].length || (bE.e2[0] === a2.f2 ? aX.hj[
			player]++ : aX.hk[player]++, 0))
	}, this.hl = function(player) {
		a2.hm && (ab.hZ.hn[player] = 1), ho(bE.e2[1], player), aU.hp(player, bE.dx[0], bE.e2[0]), a4.hq(player, !1)
	}, this.hr = function(player, hs, ey, ht) {
		var hu = bB.em(12 * aX.eu[player], 1024);
		ht -= ht >= bB.em(aX.eu[player], 2) ? hu : 0, ho(ey, player), aU.hp(player, ht, hs), aX.eu[player] -= ht + hu, a4.hq(player, !1)
	}, this.hi = function(player, hs) {
		for (var gd, a0 = aX.fG[player].length - 1; 0 <= a0; a0--)
			if (aS.hv(aX.fG[player][a0]))
				for (gd = 3; 0 <= gd; gd--)
					if (aS.f8(aX.fG[player][a0] + eP[gd]) && aS.f9(aX.fG[player][a0] + eP[gd]) === hs) {
						aX.ez[player].push(aX.fG[player][a0]);
						break
					}
	}, this.hh = function(player) {
		for (var a0 = aX.fG[player].length - 1; 0 <= a0; a0--)
			if (aS.hv(aX.fG[player][a0]))
				for (var gd = 3; 0 <= gd; gd--)
					if (aS.fA(aX.fG[player][a0] + eP[gd])) {
						aX.ez[player].push(aX.fG[player][a0]);
						break
					}
	}, this.hx = function(player, hy) {
		var a0, hz, gd, i0, ey = aX.fG[player].length,
			ge = 256 <= ey ? 12 : 32 <= ey ? 6 : 1,
			i1 = ey - 1 - ao.i2(ge);
		hc = 0;
		loop: for (a0 = i1; 0 <= a0; a0 -= ge)
			for (gd = 3; 0 <= gd; gd--)
				if ((i0 = aS.fA(aX.fG[player][a0] + eP[gd]) ? a2.f2 : aS.f9(aX.fG[player][a0] + eP[gd])) === a2.f2 || aS.f8(aX.fG[player][a0] + eP[gd]) && i0 !== player && (hy || gD(player, i0))) {
					for (hz = hc - 1; 0 <= hz; hz--)
						if (he[hz] === i0) continue loop;
					if (he[hc] = i0, 8 <= ++hc) return !0
				}
		return 0 < hc
	}, this.i3 = function(player, hy) {
		var a0, gd, i0;
		for (hc = 0, a0 = aX.fG[player].length - 1; 0 <= a0; a0--)
			for (gd = 3; 0 <= gd; gd--)
				if ((i0 = aS.fA(aX.fG[player][a0] + eP[gd]) ? a2.f2 : aS.f9(aX.fG[player][a0] + eP[gd])) === a2.f2 || aS.f8(aX.fG[player][a0] + eP[gd]) && i0 !== player && (hy || gD(player, i0))) return he[hc++] = i0, !0;
		return !1
	}, this.i4 = function() {
		for (var i5, a0 = hc - 1; 0 <= a0; a0--)
			if (he[a0] === a2.f2) {
				for (hc--, i5 = a0; i5 < hc; i5++) he[i5] = he[i5 + 1];
				return !0
			} return !1
	}, this.i6 = function(player) {
		for (var i5, a0 = hc - 1; 0 <= a0; a0--)
			if (aU.i7(player, he[a0]))
				for (hc--, i5 = a0; i5 < hc; i5++) he[i5] = he[i5 + 1];
		return 0 === hc
	}, this.i8 = function() {
		for (var a0 = hc - 1; 0 <= a0; a0--)
			if (b2.eo.i9(he[a0])) return !0;
		return !1
	}, this.iA = function() {
		for (var a0 = hc - 1; 0 <= a0; a0--) b2.eo.i9(he[a0]) || (he[a0] = he[--hc]);
		return 0 < hc
	}, this.iB = function(player) {
		for (var i5, iC = he[0], iD = aX.eu[iC] + aU.fc(iC, player), a0 = hc - 1; 1 <= a0; a0--)(i5 = aX.eu[he[a0]] + aU.fc(he[a0], player)) < iD && (iC = he[a0], iD = i5);
		return iC
	}, this.iE = function(player) {
		var iF, iG = he[0];
		if (1 !== hc)
			for (var iH = bB.em(aX.hL[player] + aX.hK[player], 2), iI = bB.em(aX.hN[player] + aX.hM[player], 2), iJ = iK(iH - bB.em(aX.hL[iG] + aX.hK[iG], 2)) + iK(iI - bB.em(aX.hN[iG] + aX.hM[iG], 2)), a0 = hc - 1; 1 <= a0; a0--)(iF = iK(iH - bB
				.em(aX.hL[he[a0]] + aX.hK[he[a0]], 2)) + iK(iI - bB.em(aX.hN[he[a0]] + aX.hM[he[a0]], 2))) < iJ && (iJ = iF, iG = he[a0]);
		return iG
	}, this.iL = function() {
		for (var iM = he, iN = iM[0], eu = aX.eu, iO = eu[iN], a0 = hc - 1; 1 <= a0; a0--) {
			var f5 = iM[a0],
				i5 = eu[f5];
			iO < i5 && (iN = f5, iO = i5)
		}
		return iN
	}
}

function ha() {
	function ie(player, hs, iT) {
		3 <= iT && 2142 < bT.er() && (hs === a2.f2 || aX.eu[hs] < bB.em(aX.eu[player], 20)) && a3.iY(player, 20)
	}

	function ii(player, ht, hs, iT) {
		3 <= iT && iT < 6 && bB.em(aX.eu[player], 8) > aX.eu[hs] && (ht = Math.max(bB.em(11 * aX.eu[hs], 5), bB.em(aX.eu[player], 10)));
		iT = aX.ez[player].length;
		ab.hX.hi(player, hs), ab.hX.hr(player, hs, iT, ht)
	}

	function ic(player, ht) {
		var hs = a2.f2,
			ey = aX.ez[player].length;
		ab.hX.hh(player), aX.ez[player].length !== ey && ab.hX.hr(player, hs, ey, ht)
	}
	this.hn = new Uint8Array(a2.f2), this.dE = function() {
		this.hn.fill(0)
	}, this.iP = function(player, ht) {
		var iR, iT, iU, iV;
		a2.hm && (this.hn[player] = 0), aU.iQ(player) && (iR = aV.iS(player), 3 <= (iT = a3.ht[player]) && iT < 6 && (ht = Math.max(aX.eu[player] - iR, ht)), iU = aX.fH[player].length, iV = aX.fG[player].length, 30 * aX.eq[player] > a2.iW && iX[
			player] < 10 && 100 * iV <= iU && a3.iY(player, 10), a2.hm ? function(player, ht, iT, iR) {
			var hs;
			if (ab.hX.hx(player, !1) || ab.hX.i3(player, !1)) {
				if (ab.hZ.hn[player] = 1, !ab.hX.i6(player))
					if (ab.hX.i4()) ic(player, ht), ie(player, a2.f2, iT);
					else {
						if (ao.ig(a3.ih[iT])) hs = ab.hX.iB(player);
						else {
							if (ab.hX.i8() && ao.ig(a3.ij[iT]) && ab.hX.iA(), 6 === iT) return ii(player, ht, ab.hX.iL(), iT);
							hs = ab.hX.iE(player)
						}
						ii(player, ht, hs, iT), ie(player, hs, iT)
					}
			} else bD.ia.hb(player) || ! function(player, ht, iT, iR) {
				var a0, i5, il, im = bU.im,
					io = im[player];
				if (0 !== io) {
					var eu = aX.eu,
						ip = eu[player],
						eq = aX.eq;
					if (player < a2.iq && (ht = ip), !(ip < eq[player] || 5 === iT && ip < iR || 4 === iT && ip < bB.em(iR, 2))) {
						var ey = ir,
							is = it,
							iu = (a0 = ao.i2(ey), ab.hZ.hn);
						for (i5 = 0; i5 < ey; i5++)
							if (il = is[(i5 + a0) % ey], 1 === iu[il] && im[il] === io) return b0.iv.iw(player, il, ht);
						var ix = a2.ix,
							fH = aX.fH;
						for (i5 = 0; i5 < ey; i5++)
							if (il = is[(i5 + a0) % ey], eu[il] < ix * eq[il] && fH[il].length && im[il] === io && il !== player) return b0.iv.iw(player, il, ht)
					}
				}
			}(player, ht, iT, iR)
		}(player, ht, iT, iR) : (!iV || iU && (iU < iV && !ao.i2(10) || 100 * iV <= iU && ao.i2(3) || !ao.i2(8))) && bD.ia.hb(player) || function(player, ht, iT) {
			!ab.hX.hx(player, !0) && !ab.hX.i3(player, !0) || ab.hX.i6(player) || (ab.hX.i4() ? ic(player, ht) : ao.ig(a3.ih[iT]) ? ii(player, ht, ab.hX.iB(player), iT) : 5 === iT ? ii(player, ht, ab.hX.iL(), iT) : (ab.hX.i8() && ao.ig(a3
				.ij[iT]) && ab.hX.iA(), ii(player, ht, 6 === iT ? ab.hX.iL() : ab.hX.iE(player), iT)))
		}(player, ht, iT))
	}
}

function bm() {
	var iy = new Uint8Array(a2.f2),
		iz = new Uint16Array(a2.f2),
		j0 = new Uint16Array(a2.f2),
		j1 = new Uint8Array(a2.f2),
		j2 = (this.ht = new Uint8Array(a2.f2), new Uint16Array(a2.f2)),
		j3 = new Uint16Array(a2.f2);

	function jH(a0) {
		iy[a0] = 1 + bB.em(j2[a0] * ao.random(), 10 * ao.value(100))
	}
	this.j4 = null, this.ij = [97, 94, 70, 40, 20, 0, 100], this.j5 = [500, 450, 400, 300, 80, 50, 50], this.ih = [0, 0, 5, 25, 50, 100, 0], this.j6 = [60, 74, 112, 200, 256, 512, 512], this.dF = function() {
		this.j4 = [L(0), L(1), L(2), L(3), L(4), L(5), ""]
	}, this.dE = function() {
		iy.fill(0), iz.fill(0), j0.fill(0), j1.fill(0), this.ht.fill(0), j2.fill(0), j3.fill(0);
		var j7 = a2.iq;
		if (ay.j8) {
			if (ay.j9.jA)
				for (a0 = a2.jB - 1; 0 <= a0; a0--) this.ht[a0 + j7] = ay.j9.jA[a0 + 1]
		} else if (9 === a2.jC) this.jD();
		else if (a2.jE)
			if (a2.hm)
				for (a0 = a2.jB - 1; 0 <= a0; a0--) this.ht[a0 + j7] = aQ.jG[bU.im[a0 + j7] - 1].f7;
			else
				for (a0 = a2.jB - 1; 0 <= a0; a0--) this.ht[a0 + j7] = aQ.jG[0].f7;
		else
			for (var jF = 8 === a2.jC ? 1 : 0, a0 = a2.jB - 1; 0 <= a0; a0--) this.ht[a0 + j7] = jF;
		for (a0 = 0; a0 < j7; a0++) this.ht[a0] = 6;
		var ey = a2.f2;
		for (a0 = 0; a0 < ey; a0++) this.ht[a0] <= 2 ? (j1[a0] = 5, j2[a0] = j3[a0] = 1040, 0 === this.ht[a0] ? (iz[a0] = 980, j0[a0] = 980) : 1 === this.ht[a0] ? (iz[a0] = 980, j0[a0] = 920, j2[a0] = j3[a0] = 1100) : (iz[a0] = 825, j0[a0] =
			750)) : this.ht[a0] <= 4 ? (j1[a0] = 1 + ao.i2(20), 3 === this.ht[a0] ? (iz[a0] = j0[a0] = 500, j2[a0] = j3[a0] = 1e3) : (j3[a0] = 250 + ao.i2(1501), j2[a0] = 500 + ao.i2(501), iz[a0] = 300 + ao.i2(201), j0[a0] = 100 + ao.i2(
			201))) : this.ht[a0] <= 5 ? (j2[a0] = 1e3, j3[a0] = 1e3, j1[a0] = 35 + ao.i2(16), iz[a0] = 300 + ao.i2(201), j0[a0] = 50 + ao.i2(101)) : (j2[a0] = j3[a0] = 800, j1[a0] = 5, iz[a0] = 10, j0[a0] = 250), jH(a0)
	}, this.jD = function() {
		for (var a0, fx = 0, j7 = a2.iq, i5 = 0; i5 < 6; i5++) {
			for (a0 = fx + ap.jI[i5] - 1; fx <= a0; a0--) this.ht[a0 + j7] = i5;
			fx += ap.jI[i5]
		}
	}, this.iY = function(f5, value) {
		iy[f5] = Math.min(value, iy[f5])
	}, this.hb = function(f5) {
		0 == --iy[f5] && ! function(f5) {
			(function(f5) {
				j2[f5] !== j3[f5] && (j2[f5] += j2[f5] < j3[f5] ? 3 : -3);
				iz[f5] !== j0[f5] && (iz[f5] += iz[f5] < j0[f5] ? j1[f5] : -j1[f5], iz[f5] = (Math.abs(iz[f5] - j0[f5]) <= j1[f5] ? j0 : iz)[f5]);
				iy[f5] = bB.em(j2[f5], 10)
			})(f5), ab.hZ.iP(f5, bB.em(iz[f5] * aX.eu[f5], 1e3))
		}(f5)
	}, this.jL = function(f5, jM) {
		j2[f5] = j3[f5] = jM
	}
}

function hV() {
	var jN = new Uint16Array(a2.f2);

	function jS(player, jQ) {
		for (var ey = bE.dw[0], e3 = bE.e3, jb = -1, jc = a2.f2, a0 = 0; a0 < ey; a0++) {
			var iJ, f5 = e3[a0];
			gD(player, f5) && (iJ = bC.gz(jQ, bC.hJ(f5)), -1 === jb || iJ < jb) && (jb = iJ, jc = f5)
		}
		return jc
	}

	function jU(jR, jQ) {
		if (jR === a2.f2) return 0;
		for (var fH = aX.fH[jR], ja = fH.length, ey = Math.min(ja, 10), jc = 0, jb = bC.gz(fH[jc] >> 2, jQ), a0 = 0; a0 < ey; a0++) {
			var jd = ao.i2(ja),
				iJ = bC.gz(fH[jd] >> 2, jQ);
			iJ < jb && (jb = iJ, jc = jd)
		}
		return fH[jc] >> 2
	}

	function jX(player, jQ, hs, jg) {
		var jh;
		(jg === a2.f2 || (jh = bC.hJ(hs), jg = bC.hJ(jg), bC.gz(jQ, jh) < bC.gz(jQ, jg))) && (jN[player] = hs)
	}
	this.dE = function() {
		jN.fill(a2.f2)
	}, this.hb = function(player) {
		var jQ, jT, jR, hs = function(player) {
			var hs = jN[player];
			if (hs !== a2.f2) {
				if (b2.eo.jf(hs)) return hs;
				jN[player] = a2.f2
			}
			return a2.f2
		}(player);
		return function(player) {
			for (var is = it, ja = ir, ey = Math.min(ja, ja < 17 && 5 === ao.i2(20) ? 1 : 16), f6 = ao.i2(ja), e3 = bE.e3, fH = aX.fH, jM = 0, a0 = 0; a0 < ey; a0++) {
				var f5 = is[(a0 + f6) % ja];
				f5 !== player && fH[f5].length && (e3[jM++] = f5)
			}
			bE.dw[0] = jM
		}(player), 0 !== bE.dw[0] && (0 < (jT = jU(jR = jS(player, jQ = bC.hO(player)), jQ)) && bD.jV.jW(player, jT) ? (jX(player, jQ, jR, hs), !0) : 0 < (jR = function(player, jQ) {
			for (var ey = bE.dw[0], e3 = bE.e3, je = jN, f6 = 0, a0 = 0; a0 < ey; a0++) {
				var f5 = e3[a0],
					f5 = je[f5];
				f5 !== a2.f2 && b2.eo.jf(f5) && player !== f5 && gD(player, f5) && (e3[f6++] = f5)
			}
			return 0 !== (bE.dw[0] = f6) ? jU(jS(player, jQ), jQ) : 0
		}(player, jQ)) && bD.jV.jW(player, jR) ? (jX(player, jQ, aS.f9(jR << 2), hs), !0) : !!(0 < (jT = jU(hs, jQ)) && bD.jV.jW(player, jT)))
	}
}

function hT() {
	this.hb = function(player) {
		var fv = function(player) {
			var ey = ab.hQ.jk;
			if (0 === ey) return -1;
			for (var ja = Math.min(ey, ab.performance.jl ? ey : 10), dW = ab.hQ.dW, i1 = bB.em(ao.random() * ey, ao.value(100)), d = i1 + ja, jm = ao.hP(aX.hK[player], aX.hL[player]), jn = ao.hP(aX.hM[player], aX.hN[player]), jc = -1, iJ = bC
					.h0(0, 0, bI.eT, bI.eU), a0 = i1; a0 < d; a0++) {
				var f6 = a0 % ey,
					jo = bC.gm(jm, jn, dW[f6]);
				jo < iJ && (iJ = jo, jc = f6)
			}
			return -1 !== jc ? dW[jc] : -1
		}(player);
		return -1 !== fv && bD.jV.jW(player, fv)
	}
}

function hW() {
	this.jl = 0, this.dE = function() {
		this.jl = 0
	}, this.hb = function() {
		if (!this.jl && bT.er() % 30 == 7 && b2.eo.jr(75) && (ab.performance.jl = 1))
			if (a2.hm) {
				bV.ju(bV.jv());
				var e6 = bE.e4,
					ey = bE.dw[0];
				if (0 !== ey)
					for (var jw = Math.min(100 + 10 * (ey - 1), 400), a0 = 0; a0 < ey; a0++) a3.jL(e6[a0], jw)
			} else a3.jL(jx[0], 100)
	}
}

function hR() {
	var jy, jz, k0 = 300,
		k1 = 300;
	this.jk = 0, this.dW = new Uint32Array(512), this.dE = function() {
		jz = jy = 0, this.jk = 0
	}, this.hb = function() {
		if (function() {
				var ey = ab.hQ.jk;
				if (0 === ey) return 1;
				var dW = ab.hQ.dW;
				if (bT.er() % 35 == 6) {
					for (var a0 = ey - 1; 0 <= a0; a0--) aS.fA(dW[a0] << 2) || (ey--, dW[a0] = dW[ey]);
					ab.hQ.jk = ey
				}
				return ey < dW.length
			}() && !(k0 <= jy)) {
			var a0, u = bI.eT,
				k4 = u - 2,
				ey = k4 * (bI.eU - 2),
				k5 = k0,
				dW = ab.hQ.dW,
				ja = ab.hQ.jk,
				k6 = dW.length,
				f6 = Math.min(jz + k5 * ((1 + 19 * ab.performance.jl) * k1), ey);
			for (a0 = jz; a0 < f6; a0 += k5) {
				var fx = 4 * (a0 % k4 + (bB.em(a0, k4) + 1) * u + 1);
				if (aS.fA(fx) && (dW[ja] = fx >> 2, ++ja === k6)) {
					a0 += k5;
					break
				}
			}(jz = a0) >= ey && (jz = ++jy), ab.hQ.jk = ja
		}
	}
}

function k7() {
	aC.hb(), aW.hb(), aL.k8(), aq.k9.hb()
}

function kA() {
	ar.hb(), a5.hb(), aV.hb(), av.hb(), a4.hb(), a6.hb(), ab.hb(), bD.k9.hb(), kB(), aK.hb(), ap.hb(), bH.hb(), bL.hb(), aW.hb(), aW.kC(), aL.hb(), bF.hb(), aJ.hb(), aE.hb(), aC.hb(), aw.hb(), aG.hb(), al.hb(), bR.hb(), bV.hb(), aq.k9.hb(), aq.kD
	.hb(), i.hb(), b1.hb(), bT.hb()
}

function kE() {
	a7.hb(), aM.hb(), aF.hb(), ai.hb(), b3.hb(), am.kF()
}

function kG() {
	aK.kH(!1), aE.kH(), aL.kH(!1), aJ.kH(), aG.kH(), al.kH(), aW.kH(!1), bV.kI()
}

function kJ() {
	aW.kH(!1) && (bT.dL = !0), aq.k9.hb()
}

function bn() {
	var kK, kL, kM, kN, kO;

	function kR(kT) {
		for (var a0 = kK - 1; 0 <= a0; a0--) 0 === kM[kL[a0]] && aX.eq[kL[a0]] >= kT && eV(kL[a0])
	}

	function kQ(player) {
		var dq;
		64 === kM[player] ? kM[player] = 6 : (dq = aX.eq[player], kM[player] = dq < 1e3 ? 3 : dq < 1e4 ? 2 : dq < 6e4 ? 1 : 0)
	}
	this.dE = function() {
		kN = kO = 0, kK = 0, kL = new Uint16Array(a2.f2), kM = new Uint8Array(a2.f2)
	}, this.hb = function() {
		var a0;
		for (kN = bR.ew[13], kO = aX.eu[a2.et], a0 = kK - 1; 0 <= a0; a0--) 64 === kM[kL[a0]] ? kQ(kL[a0]) : 0 == kM[kL[a0]]-- && (kQ(kL[a0]), eV(kL[a0]));
		16e4 <= aX.eq[jx[0]] && (kR(16e4), 3e5 <= aX.eq[jx[0]]) && kR(3e5), aX.eq[a2.et] > bR.ew[7] && (bR.ew[7] = aX.eq[a2.et]), bR.ew[14] += kO - aX.eu[a2.et] + kN - bR.ew[13]
	}, this.es = function(player) {
		for (var hz, a0 = kK - 1; 0 <= a0; a0--)
			if (player === kL[a0]) {
				for (kK--, hz = a0; hz < kK; hz++) kL[hz] = kL[hz + 1];
				return
			}
	}, this.hq = function(player, kU) {
		for (var a0 = kK - 1; 0 <= a0; a0--)
			if (player === kL[a0]) return;
		kL[kK++] = player, kM[player] = kU ? 2 : 64
	}
}

function bo() {
	var size, ia;
	this.dE = function() {
		size = a2.jB, ia = new Uint16Array(a2.f2);
		for (var iq = a2.iq, a0 = a2.jB - 1; 0 <= a0; a0--) ia[a0] = iq + a0
	}, this.hb = function() {
		for (var a0 = size - 1; 0 <= a0; a0--)
			if (0 === aX.kX[ia[a0]]) {
				hz = void 0;
				var hz = a0;
				size--, ia[hz] = ia[size]
			} else a3.hb(ia[a0])
	}, this.kW = function(f5) {
		ia[size++] = f5
	}
}

function bp() {
	var kZ, ka, kK, kL, kM, kb, kc, kd;

	function kg(a0) {
		var hz;
		for (kK--, hz = a0; hz < kK; hz++) kL[hz] = kL[hz + 1], kM[hz] = kM[hz + 1], kb[hz] = kb[hz + 1], kc[hz] = kc[hz + 1], kd[hz] = kd[hz + 1]
	}
	this.dE = function() {
		kZ = 1, kK = 0, ka = 2 * a2.f2, kL = new Uint16Array(ka), kM = new Uint8Array(ka), kb = new Uint16Array(ka), kc = new Uint32Array(ka), kd = new Uint32Array(ka)
	}, this.ke = function(kf, position) {
		kc[kf] = position
	}, this.hb = function() {
		for (var a0 = kK - 1; 0 <= a0; a0--) 0 == kM[a0]-- && (kM[a0] = 2, af.hb(a0, kb[a0], kL[a0], kc[a0], kd[a0]))
	}, this.es = function(player, id) {
		for (var a0 = kK - 1; 0 <= a0; a0--)
			if (player === kL[a0] && id === kb[a0]) return void kg(a0)
	}, this.kh = function(player) {
		for (var a0 = kK - 1; 0 <= a0; a0--) player === kL[a0] && (af.ki(player, kc[a0]), kg(a0))
	}, this.hq = function(player, i1, kj) {
		if (ka <= kK) return 0;
		kL[kK] = player, kM[kK] = 0, kb[kK] = kZ, kc[kK] = i1, kd[kK] = kj;
		player = kZ;
		return kK++, kZ = 2 * ka < ++kZ ? 1 : kZ, player
	}, this.kl = function() {
		if (!(h8 < 40 || 0 === kK)) {
			var hz, fg, fh, a0, fontSize, kp, ht, kq = h7 / h8,
				kr = h9 / h8,
				ks = (an.u + h7) / h8,
				kt = (an.iF + h9) / h8;
			for (b2.ku.textAlign(kv, 1), b2.ku.textBaseline(kv, 1), hz = kK - 1; 0 <= hz; hz--) fg = aS.kw(kc[hz]), fh = aS.kx(kc[hz]), a0 = kL[hz], kq - 1 < fg && fg < ks && kr - 1 < fh && fh < kt && 0 !== aX.kX[a0] && ((fontSize = Math.floor(
				.94 * h8 * aW.ky(a0))) < 6 || (fg = Math.floor(an.u * (fg + .5 - kq) / (ks - kq)), fh = Math.floor(an.iF * (fh + .48 - kr) / (kt - kr)), kv.font = b2.ku.kz(1, fontSize), kv.fillStyle = p.l0, ht = aU.ef(a0, aU.l1(a0, kb[
				hz])), kv.fillText(bX.dW.data[7].value ? b2.l2.l3(ht) : aX.l4[a0], fg, fh), (kp = Math.floor(.5 * fontSize)) < 6) || (kv.font = b2.ku.kz(1, kp), kv.fillText(bX.dW.data[7].value ? aX.l4[a0] : b2.l2.l3(ht), fg, fh + Math
				.floor(.82 * fontSize))))
		}
	}
}

function bq() {
	var l5, l6, l7, l8, l9, lA, lB, lC, lD, lE, lF, lG, lH, lI = !1,
		lJ = !1;

	function lK(lL) {
		lG = bT.dp, l7 = l8 = l6 = 0, l9 = (lH = 33) / lL, l5 = 1 / (lL / lH / 4), lA = (an.u / 2 + h7) / h8, lB = (an.iF / 2 + h9) / h8, lC = h8
	}

	function lY(la) {
		Math.abs(Math.log(lF / lC)) < .125 && (lF = la * lC)
	}

	function lX(kq, kr, ks, kt) {
		lD = (kq + ks + 1) / 2, lE = (kr + kt + 1) / 2;
		ks = an.u / (ks - kq + 1), kq = an.iF / (kt - kr + 1);
		lF = .9 * (ks < kq ? ks : kq)
	}
	this.lM = function() {
		return lI
	}, this.lN = function() {
		lK(1), this.lO(0, 0, bI.eT - 1, bI.eU - 1), a2.g0 || a2.fk || this.lP(a2.et, 3e3, !0, .3)
	}, this.lP = function(player, lL, lQ, zoom) {
		a2.lR || lI && !lQ && lJ || 0 === aX.eq[player] || (aH.lS = !1, lJ = lQ, lK(lL), function(player) {
			lD = (aX.hK[player] + aX.hL[player] + 1) / 2, lE = (aX.hM[player] + aX.hN[player] + 1) / 2
		}(player), function(zoom, player) {
			var gs = aX.hL[player] - aX.hK[player] + 1,
				player = aX.hN[player] - aX.hM[player] + 1,
				hz = an.u / gs,
				i5 = an.iF / player,
				hz = (lF = hz < i5 ? hz : i5, 0 !== zoom ? zoom : gs < 20 && player < 20 ? .5 : .9);
			lF *= hz, lY(7 / 8)
		}(zoom, player), lI = !0, ae.lV())
	}, this.lW = function(lL) {
		a2.fk || a2.lR || (aH.lS = !1, lJ = !1, lK(lL), lX(0, 0, bI.eT - 1, bI.eU - 1), lY(7 / 8), lI = !0, ae.lV())
	}, this.lO = function(kq, kr, ks, kt) {
		lX(kq, kr, ks, kt), h8 = lF, aH.lb(lD, an.u / 2), aH.lc(lE, an.iF / 2), bO.ld()
	}, this.le = function() {
		return !(lI && lJ || (lI = !1))
	}, this.hb = function() {
		var lh, li, f7, ll;
		lI && (l6 < .5 ? l8 < l9 && (l8 += l9 * l5, l7 = l6) : 1 - l7 < l6 && (l8 = (l8 -= l9 * l5) < l9 * l5 ? l9 * l5 : l8), lG = lG >= bT.dp ? bT.dp - 1 : lG, f7 = bT.dp - lG, l6 = 1e3 < f7 || 1 < (l6 += l8 * f7 / lH) ? 1 : l6, lG = bT.dp,
			f7 = h8, lh = h7, li = h9, f7 = (h8 = lC * Math.pow(lF / lC, l6)) / f7, ll = 1 - (lC * Math.pow(lF / lC, 1 - l6) - lC) / (lF - lC), aH.lb(lA + ll * (lD - lA), an.u / 2), aH.lc(lB + ll * (lE - lB), an.iF / 2), aW.zoom(f7, (lh *
				f7 - h7) / (1 - f7), (li * f7 - h9) / (1 - f7)), bO.ld(), 1 <= l6 && (lI = !1, bP.lm = !0), bT.dL = !0)
	}
}

function bh() {
	var il = b2.color;
	this.l0 = il.ln(0, 0, 0), this.lo = il.lp(0, 0, 0, .7), this.lq = il.lp(0, 0, 0, .5), this.lr = il.lp(0, 0, 0, .85), this.ls = il.lp(0, 0, 0, .75), this.lt = il.lp(0, 0, 0, .6), this.lu = il.lp(0, 0, 0, .35), this.lv = il.ln(255, 255, 255), this
		.lw = il.lp(255, 255, 255, .3), this.lx = il.lp(255, 255, 255, .6), this.ly = il.lp(255, 255, 255, .4), this.lz = il.lp(255, 255, 255, .25), this.m0 = il.lp(255, 255, 255, .85), this.m1 = il.lp(255, 255, 255, .75), this.m2 = il.lp(255, 255,
			255, .15), this.m3 = il.ln(128, 128, 128), this.m4 = il.lp(64, 64, 64, .75), this.m5 = il.lp(88, 88, 88, .83), this.m6 = il.lp(60, 60, 60, .85), this.m7 = il.lp(80, 60, 60, .85), this.m8 = il.ln(30, 255, 30), this.m9 = il.ln(0, 200, 0),
		this.mA = il.ln(128, 255, 128), this.mB = il.lp(10, 65, 10, .75), this.mC = il.lp(0, 255, 0, .6), this.mD = il.lp(0, 255, 0, .5), this.mE = il.lp(0, 200, 0, .5), this.q = il.lp(0, 100, 0, .75), this.mF = il.lp(0, 60, 0, .8), this.mG = il.lp(
			0, 255, 0, .3), this.mH = il.lp(0, 180, 0, .6), this.mI = il.lp(0, 120, 0, .85), this.mJ = il.ln(0, 120, 0), this.mK = il.lp(0, 70, 0, .85), this.mL = il.ln(255, 120, 120), this.mM = il.ln(255, 160, 160), this.mN = il.ln(255, 70, 70),
		this.mO = il.ln(230, 0, 0), this.mP = il.lp(220, 0, 0, .6), this.mQ = il.lp(255, 100, 100, .8), this.mR = il.lp(100, 0, 0, .85), this.mS = il.lp(60, 0, 0, .85), this.mT = il.lp(200, 0, 0, .6), this.mU = il.lp(120, 0, 0, .85), this.mV = il.ln(
			255, 70, 10), this.mW = il.lp(0, 60, 60, .85), this.mX = il.lp(10, 60, 60, .9), this.mY = il.lp(0, 96, 96, .75), this.mZ = il.ln(160, 160, 255), this.ma = il.lp(0, 40, 90, .75), this.mb = il.lp(0, 0, 255, .6), this.mc = il.ln(200, 200,
			255), this.md = il.ln(255, 120, 100), this.me = il.lp(255, 255, 0, .5), this.mf = il.lp(255, 255, 150, .2), this.mg = il.ln(255, 255, 0), this.mh = il.ln(255, 255, 200), this.mi = il.lp(200, 200, 0, .6), this.mj = il.lp(140, 120, 0, .75),
		this.mk = il.lp(180, 160, 40, .75), this.ml = il.lp(70, 50, 20, .85), this.mm = il.lp(30, 30, 0, .85), this.mn = il.lp(255, 140, 0, .75), this.mo = il.lp(0, 0, 0, 0)
}

function ch() {
	this.g1 = new mp, this.eo = new mq, this.mr = new ms, this.mt = new mu, this.iv = new mv
}

function mp() {
	this.g2 = function(fv) {
		a2.jE ? b0.mr.g2(a2.et, fv) : aq.mw.mx(fv)
	}, this.gA = function(h6, hs) {
		a2.jE ? b0.mr.gA(a2.et, h6, hs) : aq.mw.my(h6, hs)
	}, this.mz = function(h6, n0) {
		a2.jE ? b0.mr.n1(a2.et, h6, n0) : aq.mw.n2(h6, n0)
	}, this.g7 = function(h6, fv) {
		a2.jE ? b0.mr.g7(a2.et, h6, fv) : bD.g5.g6(a2.et, fv) && aq.mw.n3(h6, fv)
	}, this.n4 = function(n5, fv) {
		a2.jE ? b0.mr.n4(a2.et, n5, fv) : bD.g5.n6(a2.et, n5, fv) && aq.mw.n7(n5, fv)
	}, this.n8 = function(hs) {
		a2.jE ? b0.mr.n8(a2.et, hs) : aq.mw.n9(hs)
	}, this.nA = function(nB) {
		a2.jE ? b0.mr.nC(a2.et, nB) : aq.mw.nD(nB)
	}, this.nE = function(nF) {
		a2.jE ? b0.mr.nE(a2.et, nF) : aq.mw.nG(nF)
	}, this.nH = function() {
		a2.jE ? b0.mr.nH(a2.et) : aq.mw.nI()
	}, this.nJ = function() {
		a2.jE ? b0.mr.nJ(a2.et) : aq.mw.n3(1, 0)
	}
}

function mv() {
	this.iw = function(player, n0, ht) {
		b2.eo.nK(player, ht, n0) && (aV.mz(player, n0), n0 < a2.iq) && ao.random() < ao.value(10) && (ab.hZ.hn[n0] = 0)
	}, this.nL = function(player, n0, ht) {
		b2.eo.nM(ht, n0) && (b2.eo.nN(n0, bE.dx[0]), bR.nO(player, n0), aW.nP(n0, bE.dx[0]))
	}
}

function mq() {
	this.nQ = function(nB, player) {
		aC.nA(a2.et, player, nB), aq.mw.nR(nB, player)
	}, this.nS = function(player) {
		aC.nT(player, 0), aq.mw.nU(player)
	}, this.nV = function(nW, player) {
		aC.nX(nW, player), aq.mw.nY(nW, player)
	}, this.nZ = function() {
		a2.jE || a2.fk || aq.na.nZ()
	}
}

function mu() {
	this.hb = function(a1) {
		var id, e7, le;
		for (b7.dE(a1), b7.kf += 2, le = 8 * b7.size; b7.kf + 8 <= le;) id = b7.nb(4), e7 = b7.nb(9), 0 === id ? this.nc(id, e7, b7.nb(22)) : 1 === id ? this.nc(id, e7, b7.nb(10), b7.nb(10)) : 2 === id ? this.nc(id, e7, b7.nb(10), b7.nb(9)) :
			3 === id || 4 === id ? this.nc(id, e7, b7.nb(10), b7.nb(22)) : 5 === id || 6 === id ? this.nc(id, e7, b7.nb(10)) : 7 === id ? this.nc(id, e7, b7.nb(1)) : this.nc(id, e7)
	}, this.nd = [], this.ne = function() {
		for (var ng = 0, nh = 0, ni = 0, nj = 0, nk = 0, nl = 0, a0 = 0; a0 < 512; a0++) ng += aX.kX[a0], nh += aX.eq[a0], ni += aX.eu[a0], nj += bD.k9.nm[a0];
		nk += bD.k9.nn, nl += ir, this.nd.push(ni % 1073741824 * 4 + (ng + nh + nj + nk + nl) % 4)
	}, this.nc = function(id, e7, e9, eB) {
		0 === id ? b0.mr.g2(e7, e9) : 1 === id ? b0.mr.gA(e7, e9, eB) : 2 === id ? b0.mr.n1(e7, e9, eB) : 3 === id ? b0.mr.g7(e7, e9, eB) : 4 === id ? b0.mr.n4(e7, e9, eB) : 5 === id ? b0.mr.n8(e7, e9) : 6 === id ? b0.mr.nC(e7, e9) : 7 === id ?
			b0.mr.nE(e7, e9) : 8 === id ? b0.mr.nH(e7) : b0.mr.no(e7)
	}
}

function ms() {
	this.g2 = function(player, fv) {
		b2.eo.fm(0) && b2.eo.fn(player) && bC.hA(fv) && (b1.np.nq(0, player, fv), a2.nr.hp(player, fv))
	}, this.gA = function(player, h6, hs) {
		b2.eo.fm(1) && b2.eo.fn(player) && b2.eo.ns(player, hs) && b2.eo.nt(player, h6, 12, 0) && b2.eo.nu(player, hs) && ((hs = aU.i7(player, bE.e2[0])) || aU.iQ(player)) && (aX.nv[player]++, b1.np.nq(1, player, h6, bE.e2[0]), ab.hX.hf(player,
			hs)) && (b2.eo.nw(player), bR.nx(player, h6), ab.hX.hl(player))
	}, this.n1 = function(player, h6, n0) {
		b2.eo.fm(1) && b2.eo.fn(player) && a2.hm && b2.eo.ns(player, n0) && b2.eo.ny(player, n0) && b2.eo.nK(player, b2.eo.h5(player, h6), n0) && (b1.np.nq(2, player, h6, n0), aV.mz(player, n0))
	}, this.g7 = function(player, h6, fv) {
		b2.eo.fm(1) && b2.eo.fn(player) && (0 === fv && 1 === h6 ? this.nJ(player) : bC.hA(fv) && bD.k9.nn !== bD.k9.nz && bD.k9.nm[player] !== bD.k9.o0 && 0 !== aX.fH[player].length && b2.eo.nt(player, h6, 32, 0) && bD.jV.jW(player, fv) && (b1
			.np.nq(3, player, h6, fv), b2.eo.nw(player), bD.k9.o1(player)))
	}, this.n4 = function(player, n5, fv) {
		b2.eo.fm(1) && b2.eo.fn(player) && bC.hA(fv) && bD.g5.o2(player, n5) && bD.jV.o3(fv) && (b1.np.nq(4, player, n5, fv), b2.eo.o4(player, 8), bD.k9.n4())
	}, this.n8 = function(player, hs) {
		b2.eo.fm(1) && b2.eo.fn(player) && (hs = Math.min(hs, a2.f2), aU.i7(player, hs)) && (b1.np.nq(5, player, hs), aU.o5(player, hs))
	}, this.nC = function(player, nB) {
		(b2.eo.fm(1) || b2.eo.fm(2)) && b2.eo.fn(player) && (nB = bB.o6(nB, 0, 1023), b1.np.nq(6, player, nB), aW.o7(player, 0, nB))
	}, this.nE = function(player, nF) {
		b2.eo.fm(1) && b2.eo.fn(player) && (b1.np.nq(7, player, nF), al.o8(player, nF))
	}, this.nH = function(player) {
		(b2.eo.fm(0) || b2.eo.fm(1)) && b2.eo.fn(player) && bG.nH(player) && b1.np.nq(8, player)
	}, this.no = function(player) {
		bG.no(player), b1.np.nq(9, player)
	}, this.nJ = function(player) {
		al.o9(player) && (b1.np.nq(3, player, 1, 0), al.nJ(player))
	}
}

function oA() {
	var oC;
	this.oB = [], this.oC = document.createElement("div"), this.oD = function(oE, marginTop) {
		var title = document.createElement("h2");
		title.textContent = oE, title.style.margin = "0", title.style.marginBottom = "0.6em", marginTop && (title.style.marginTop = marginTop), title.style.fontSize = "1.4em", title.style.overflowWrap = "break-word", this.oC.appendChild(title)
	}, this.oF = function(oE) {
		var oG = document.createElement("p");
		return oG.textContent = oE, oG.style.fontSize = "0.75em", oG.style.lineHeight = "1.2em", oG.style.marginBottom = "0", this.oC.appendChild(oG), oG
	}, this.oH = function(oI, fontSize) {
		var oC = document.createElement("div");
		oC.innerHTML = oI, oC.style.fontSize = fontSize || "1em", oC.style.lineHeight = "1.2em", this.oC.appendChild(oC)
	}, this.oJ = function(oK) {
		for (var oL = oK.oL, ey = oL.length, a0 = 0; a0 < ey; a0++) this.oC.appendChild(oL[a0])
	}, this.oM = function(oN) {
		this.oB.push(oN), this.oC.appendChild(oN.d)
	}, this.resize = function() {
		for (var ey = this.oB.length, a0 = 0; a0 < ey; a0++) this.oB[a0].resize && this.oB[a0].resize()
	}, (oC = this.oC).style.position = "absolute", oC.style.height = "auto", oC.style.padding = "0.5em"
}

function oO(oP, oQ) {
	var a0, oC = document.createElement("div");

	function oX() {
		var a0, oY, iF, f6, f7, oT = an.oZ * oC.offsetWidth,
			oa = new Float64Array(function(oT) {
				var u = .25 * b2.ku.oU(.6) * an.oV;
				return Math.max(Math.floor(oT / u), 1)
			}(oT)),
			ob = bQ.ob,
			oc = (oT - (oa.length + 1) * bQ.gap) / (oa.length * an.oZ);
		for (oa.fill(ob), a0 = 0; a0 < oQ.length; a0++) oY = (f7 = oQ[a0].oC).style, iF = b2.od.min(oa), f6 = oa.indexOf(iF), oY.top = b2.ku.oe(iF), oY.left = b2.ku.oe(ob + f6 * (oc + ob)), oY.width = b2.ku.oe(oc), b2.ku.og(f7, 5), oa[f6] += f7
			.offsetHeight + 3 * ob;
		oC.style.height = b2.ku.oe(b2.od.max(oa) - 2 * ob)
	}
	for (this.oR = oQ, this.resize = function() {
			var a0;
			for (a0 = 0; a0 < oQ.length; a0++) oQ[a0].resize();
			oX(), oX()
		}, oC.style.width = "100%", oC.style.maxWidth = "100%", oP.style.lineHeight = "1.5em", oP.style.overflowX = "hidden", oP.style.overflowY = "auto", a0 = 0; a0 < oQ.length; a0++) oC.appendChild(oQ[a0].oC);
	oP.appendChild(oC)
}

function l(title, oh, backgroundColor, oi, oj) {
	var ok = document.createElement("button");

	function op() {
		if (!1 !== oi) {
			var os = b2.color.ot(backgroundColor);
			if (0 < os[0] && os[0] < 255 && os[0] === os[1] && os[0] === os[2]) return
		}
		this.style.backgroundColor = b2.color.op(backgroundColor, 50)
	}

	function oo() {
		oh(this) || ou(this)
	}

	function or() {
		this.style.backgroundColor = backgroundColor
	}

	function oq() {
		ou(this)
	}

	function ou(f7) {
		f7.style.backgroundColor = backgroundColor, f7.blur()
	}
	this.button = ok, this.ol = oh, this.om = backgroundColor, this.on = function(il) {
			il ? 1 === il && (il = p.m6) : il = p.lr, this.om = backgroundColor = il, ok.style.backgroundColor = il
		}, ok.innerHTML = title, ok.style.color = oj ? p.mg : p.lv, ok.style.userSelect = "none", ok.style.outline = "none", ok.style.overflowWrap = "break-word", this.on(backgroundColor), ok.style.border = "none", ok.style.font = "inherit", ok.style
		.fontSize = "1em", ok.style.padding = "0em 0.3em", ok.onclick = oo, ok.addEventListener("mouseover", op), ok.addEventListener("mouseout", oq), ok.addEventListener("focus", op), ok.addEventListener("blur", or)
}

function ov(ow, oP) {
	var oC, a0;
	for (this.resize = function() {
			for (var a0 = 0; a0 < ow.length; a0++) b2.ku.og(ow[a0].button);
			oC.style.gap = oC.style.padding = b2.ku.oe(bQ.ob)
		}, (oC = document.createElement("div")).style.display = "grid", oC.style.gridTemplateColumns = "repeat(auto-fill, minmax(9.5em, 1fr))", oC.style.overflowY = "auto", oC.style.gridAutoRows = "5.3em", oC.style.maxHeight = "100%", a0 = 0; a0 < ow
		.length; a0++) ow[a0].button.style.fontSize = "1.2em", oC.appendChild(ow[a0].button);
	oP.appendChild(oC)
}

function oy(oz, p0, p1) {
	this.fg = 0, this.fh = 0, this.u = 0, this.iF = 0, this.resize = function() {
		this.iF = Math.min(b2.ku.oU(p1 || .5) * oz[1] * an.oV, an.iF - 2 * bQ.gap), this.u = Math.min(this.iF * (oz[0] / oz[1]), an.u - 2 * bQ.gap), this.iF = oz[1] * this.u / oz[0], this.fg = bQ.gap + p0[0] * (an.u - this.u - 2 * bQ.gap), this
			.fh = bQ.gap + p0[1] * (an.iF - this.iF - 2 * bQ.gap)
	}, this.p2 = function() {
		return this.fg + .5 * this.u
	}
}

function p3(p4, title, ol) {
	function click() {
		var value = 1 - p4.value;
		this.textContent = (value ? "🟢 " : "⚪ ") + title, bX.p5.p6(p4.kf, value), ol(value)
	}
	var d;
	title = title || L(6), ol = ol || function() {}, this.d = document.createElement("p"), (d = this.d).textContent = (p4.value ? "🟢 " : "⚪ ") + title, d.style.margin = "0", d.style.marginBottom = "0.5em", d.style.cursor = "pointer", d
		.addEventListener("click", click)
}

function p7(oP, oI) {
	var oC = document.createElement("div");
	this.p8 = oC, this.resize = function() {
		oC.style.padding = b2.ku.oe(bQ.ob), oC.style.lineHeight = b2.ku.oe(b2.ku.p9(.035))
	}, oP.style.overflowX = "hidden", oP.style.overflowY = "auto", oC.innerHTML = oI, oP.appendChild(oC)
}

function pA(pB) {
	var oC = document.createElement("div");
	this.d = oC, this.pC = pB, this.resize = function() {
		for (var ey = pB.length, a0 = 1; a0 < ey; a0++) b2.ku.og(pB[a0], 4)
	};
	var a0, ey = pB.length;
	for (oC.style.width = "100%", oC.style.height = "2.7em", oC.style.marginTop = "0.6em", oC.style.border = "inherit", a0 = 0; a0 < ey; a0++) pB[a0].style.verticalAlign = "top", pB[a0].style.width = (100 / ey).toFixed(2) + "%", pB[a0].style.height =
		"100%", pB[a0].style.fontSize = "0.75em", oC.appendChild(pB[a0])
}

function pD(p4, type, pE, pF) {
	var d;
	this.d = document.createElement("input"), (d = this.d).type = type ? "number" : "text", d.id = "input" + (p4.title || p4.kf), d.value = p4.value, d.style.width = "100%", d.style.userSelect = "none", d.style.outline = "none", d.style.resize =
		"none", d.style.border = "inherit", d.style.font = "inherit", d.style.color = p.lv, d.style.backgroundColor = p.lo, d.style.fontSize = "1em", d.style.padding = "0.1em 0.2em", -1 !== p4.kf && (d.addEventListener("focus", function() {
			an.pG++
		}), d.addEventListener("blur", function() {
			an.pG--, bX.p5.p6(p4.kf, d.value)
		}), d.addEventListener("keypress", function(event) {
			"Enter" === event.key && (event.preventDefault(), bX.p5.p6(p4.kf, d.value), pE ? pE() : d.blur())
		}), pF) && d.addEventListener("input", function(d) {
			pF(d)
		})
}

function pH(oP, data) {
	var ey = data.pI.length,
		pJ = document.createElement("div"),
		pK = document.createElement("div"),
		pL = document.createElement("div"),
		pM = new Array(ey),
		oQ = new Array(ey),
		pN = new Array(data.pO.length),
		pP = b2.color.lp(70, 70, 0, .35);

	function op() {
		this.style.backgroundColor = b2.color.op(pP, 160)
	}

	function oq() {
		this.style.backgroundColor = pP
	}

	function oX() {
		var hz;
		for (oP.style.font = b2.ku.kz(0, b2.ku.pc(.026, .5, .03)), a0 = 1; a0 < pN.length; a0++) b2.ku.og(pN[a0], 4);
		if (b2.ku.og(pJ, 2), ey) {
			for (var pf, pd = pJ.offsetWidth, pe = pL.offsetWidth, a0 = 0; a0 < pN.length; a0++) pf = .01 * data.pS[a0] * pe, pN[a0].style.width = (100 * pf / pd).toFixed(2) + "%";
			var ja = data.pI[0].length;
			for (a0 = 0; a0 < ey; a0++)
				for (b2.ku.og(pM[a0], 2), hz = 1; hz < ja; hz++) b2.ku.og(oQ[a0][hz], 4)
		}
	}
	this.resize = function() {
			oX(), oX()
		}, oP.style.display = "flex", oP.style.flexDirection = "column", pK.style.overflowX = "hidden", pK.style.overflowY = "auto",
		function() {
			var f7, a0, pI = data.pI,
				ja = ey ? pI[0].length : 0;
			for (a0 = 0; a0 < ey; a0++) {
				pM[a0] = document.createElement("div"), pM[a0].style.backgroundColor = function(a0) {
					return a0 % 2 == 1 ? b2.color.lp(130, 130, 130, .35) : p.lu
				}(a0), pM[a0].style.width = "100%", pM[a0].style.display = "flex", oQ[a0] = new Array(ja);
				for (var hz = 0; hz < ja; hz++) oQ[a0][hz] = f7 = document.createElement("div"), f7.style.display = "flex", f7.style.justifyContent = "center", f7.style.wordBreak = "break-all", f7.style.padding = "0.4em 0em", f7.style.width = data
					.pS[hz] + "%", f7.innerHTML = pI[a0][hz].ds, 1 === pI[a0][hz].dq && (f7.name = "" + a0, f7.style.color = p.mg, f7.style.backgroundColor = pP, f7.addEventListener("mouseover", op), f7.addEventListener("mouseout", oq), function(f7,
						pU, pV) {
						2147483647 !== pV && f7.addEventListener("click", function() {
							b4.w(30), b4.x(30, pU), b7.dE(b4.a1), this.style.backgroundColor = pP, i.j(8, i.pW, new pX(25, {
								pY: 0,
								pU: b5.pZ.pa(b5.pZ.pb(5)),
								pV: pV
							}))
						})
					}(f7, pI[a0][hz].pU, pI[a0][hz].pV)), pM[a0].appendChild(f7)
			}
			for (pJ.style.display = "flex", pJ.style.backgroundColor = b2.color.lp(0, 120, 0, .35), a0 = 0; a0 < pN.length; a0++) pN[a0] = f7 = document.createElement("div"), f7.style.display = "flex", f7.style.justifyContent = "center", f7.style
				.wordBreak = "break-all", f7.style.padding = "0.4em 0em", f7.style.width = data.pS[a0] + "%", f7.innerHTML = data.pO[a0], pJ.appendChild(f7)
		}();
	for (var a0 = 0; a0 < ey; a0++) pL.appendChild(pM[a0]);
	pK.appendChild(pL), oP.appendChild(pJ), oP.appendChild(pK)
}

function pg() {
	var pk, a0, ph = document.createElement("div"),
		pi = document.createElement("div"),
		pj = document.createElement("div"),
		pL = document.createElement("div"),
		ow = [],
		pO = ["Best 1v1 Player", "Top Clan", "Leading Clan Member"],
		pl = [1, 0, 2];

	function pm(a0) {
		i.j(8, 0, new pX(21, {
			pn: pl[a0],
			po: 0,
			pp: 10
		}))
	}
	for (this.show = function() {
			this.p6(i.k9.pq), document.body.appendChild(ph)
		}, this.pr = function() {
			document.body.removeChild(ph)
		}, this.p6 = function(pq) {
			for (var a0 = 0; a0 < ow.length; a0++) ow[pl[a0]].button.innerHTML = pO[a0] + "<br>" + pq[a0]
		}, this.resize = function() {
			var a0, ps = bQ.gap,
				iF = b2.ku.pt(.085),
				u = Math.min(4 * iF, an.u - 2 * ps),
				ey = ow.length;
			for (b2.ku.pu(ph, ps, an.iF - ps - iF, u, iF), b2.ku.og(ph), b2.ku.og(pi, 6), a0 = 0; a0 < ey - 1; a0++) b2.ku.og(ow[a0].button, 6);
			for (a0 = 0; a0 < ey; a0++) ow[a0].button.style.fontSize = b2.ku.pv(.22 * iF);
			if (!pk) {
				if (!aR.pw()) return;
				(pk = aR.get(14)).style.width = "24%", pk.style.position = "absolute", pi.appendChild(pk)
			}
			pk.style.left = b2.ku.oe(0), pk.style.top = "7%"
		}, ph.style.position = "absolute", pi.style.width = "25%", pi.style.height = "100%", pi.style.backgroundColor = p.lr, pj.style.position = "absolute", pj.style.width = "75%", pj.style.height = "100%", pj.style.backgroundColor = p.lr, pj.style
		.top = pj.style.right = b2.ku.oe(0), pj.style.overflowX = "auto", pj.style.overflowY = "hidden", pj.style.whiteSpace = "nowrap", pL.style.height = pL.style.maxHeight = "100%", ow.push(new l("", function() {
			pm(0)
		}, p.mS)), ow.push(new l("", function() {
			pm(1)
		}, p.mF)), ow.push(new l("", function() {
			pm(2)
		}, p.mW)), a0 = 0; a0 < ow.length; a0++) ow[a0].button.style.height = "100%", pL.appendChild(ow[a0].button);
	pj.appendChild(pL), ph.appendChild(pi), ph.appendChild(pj)
}

function px(p4, oo) {
	this.oL = [];
	var py = this.oL;

	function click() {
		for (var a0 = 0; a0 < py.length; a0++) py[a0].textContent = py[a0].textContent.replace("🟢", "⚪");
		this.textContent = this.textContent.replace("⚪", "🟢");
		var kf = parseInt(this.name);
		void 0 !== p4.kf && bX.p5.p6(p4.kf, kf), oo && oo(kf)
	}
	for (var pz, ey = p4.q0.length, a0 = 0; a0 < ey; a0++)(pz = document.createElement("p")).textContent = "⚪ " + p4.q0[a0], pz.style.margin = "0", pz.name = "" + a0, pz.style.cursor = "pointer", pz.style.fontSize = "1em", pz.addEventListener(
		"click", click), py.push(pz);
	py[p4.value].textContent = py[p4.value].textContent.replace("⚪", "🟢")
}

function q1(title, q2, q3) {
	var ph = document.createElement("div"),
		q4 = document.createElement("div"),
		pL = document.createElement("div"),
		q5 = document.createElement("div");
	this.q6 = pL, this.q7 = q2, this.show = function() {
			!1 !== q3 ? document.body.appendChild(ph) : (document.body.appendChild(q4), document.body.appendChild(q5))
		}, this.pr = function() {
			!1 !== q3 ? document.body.removeChild(ph) : (document.body.removeChild(q4), document.body.removeChild(q5))
		}, this.qB = function() {
			var qC = b2.ku.p9(.1),
				qD = b2.ku.p9(.08 + .04 * (an.qE < 1));
			return {
				qC: qC,
				qD: qD,
				qF: an.iF / an.oZ - qC - qD
			}
		}, this.resize = function() {
			var a0, d, ey = q2.length,
				qG = this.qB(),
				qC = qG.qC,
				qD = qG.qD;
			for (q4.style.height = b2.ku.oe(qC), b2.ku.og(q4, 2), q5.style.top = b2.ku.oe(an.iF / an.oZ - qD), q5.style.height = b2.ku.oe(qD), b2.ku.og(q5, 8), pL.style.top = b2.ku.oe(qC), pL.style.height = pL.style.maxHeight = b2.ku.oe(qG.qF), q5
				.style.font = q4.style.font = b2.ku.kz(0, b2.ku.p9(.02, .25)), pL.style.font = b2.ku.kz(0, b2.ku.p9(.02, .4)), a0 = 0; a0 < ey; a0++)(d = q2[a0].button).style.top = "0", d.style.left = (100 * a0 / ey).toFixed(2) + "%", d.style.width =
				(100 / ey).toFixed(2) + "%", d.style.height = "100%", 0 < a0 && b2.ku.og(d, 4)
		}, this.kl = function() {
			var qG = this.qB(),
				il = an.oZ;
			kv.fillStyle = p.lr, kv.fillRect(0, il * qG.qC, an.u, il * qG.qF)
		}, ph.style.position = "absolute", ph.style.top = "0", ph.style.left = "0", ph.style.width = "100%", ph.style.height = "100%", q4.style.position = "absolute", q4.style.top = "0", q4.style.left = "0", q4.style.width = "100%", q4.style
		.display = "flex", q4.style.backgroundColor = p.lr, q5.style.position = "absolute", q5.style.left = "0", q5.style.width = "100%", pL.style.position = "absolute", pL.style.width = "100%", pL.style.backgroundColor = p.lr,
		function() {
			for (var a0 = 0; a0 < q2.length; a0++) q2[a0].button.style.position = "absolute", q2[a0].button.style.fontSize = "1.2em"
		}();
	for (var a0 = 0; a0 < q2.length; a0++) q5.appendChild(q2[a0].button);
	q4.appendChild(function() {
		var qA = document.createElement("h1");
		return qA.textContent = title, qA.style.margin = "auto", qA.style.fontSize = "2.3em", qA
	}()), !1 !== q3 && (ph.appendChild(pL), ph.appendChild(q4), ph.appendChild(q5))
}

function qH(name, placeholder) {
	var qI = document.createElement("textarea"),
		qK = (this.qJ = qI, !0);

	function qQ() {
		qI.select(), document.execCommand("copy")
	}
	this.resize = function() {
			qI.style.padding = b2.ku.oe(bQ.ob)
		}, this.qL = function(qM) {
			qI.value = qM
		}, this.qN = function() {
			return qI.value
		}, this.qO = function() {
			qI.select()
		}, this.clear = function() {
			qI.value = ""
		}, this.qP = function() {
			qK && navigator.clipboard ? (qI.select(), navigator.clipboard.writeText(qI.value).catch(function() {
				qK = !1, qQ()
			})) : qQ()
		}, qI.setAttribute("name", name), qI.setAttribute("id", name + "Field"), qI.setAttribute("autocomplete", "off"), qI.setAttribute("placeholder", placeholder), qI.style.top = "0", qI.style.left = "0", qI.style.width = "100%", qI.style.height =
		"100%", qI.style.userSelect = "none", qI.style.outline = "none", qI.style.resize = "none", qI.style.border = "none", qI.style.color = p.lv, qI.style.backgroundColor = p.lo, qI.style.fontSize = "1.2em"
}

function d0() {
	this.ol = new qR, this.dW = new qS, this.p5 = new qT, this.k9 = new qU, this.dE = function() {
		this.dW.dE(), (new qV).dE()
	}
}

function qS() {
	function qW(a0, type, qc, dt) {
		bX.dW.data.push({
			kf: a0,
			type: type || 0,
			value: qc || 0,
			qc: qc || 0,
			dt: dt || 0
		})
	}

	function qX(a0, type, qc, dt) {
		bX.dW.data.push({
			kf: a0,
			type: type,
			value: qc || "",
			qc: qc || "",
			dt: dt || 0
		})
	}

	function qY(le) {
		for (var a0 = bX.dW.data.length; a0 < le; a0++) bX.dW.data.push(null)
	}
	this.data = [], this.dE = function() {
		qW(0, 1, 0, 5), qW(1, 1, 1), qW(2, 0), qX(3, 2), qW(4, 1), qX(5, 2, "Trebuchet MS", 1), qW(6, 0), qW(7, 0, 0), qW(8, 0), qW(9, 1, 1), qW(10, 1), qW(11, 1, 1), qX(12, 2, navigator.language), qY(100), qX(100, 2), qX(101, 2), qX(102, 2), qX(
			103, 2), qX(104, 2), qX(105, 2), qX(106, 2), qW(107), qW(108), qW(109), qX(110, 2), qW(111), qW(112), qW(113), qX(114, 2), qW(115), qX(116, 2), qW(117, 1), qX(118, 2, "", 2), qW(119, 1, 0, 1), qX(120, 2), qW(121, 1, ~~(262144 *
			Math.random())), qX(122, 2, "Player " + Math.floor(1e3 * Math.random())), qW(123), qX(124), qW(125, 1), qX(126, 2), qW(127, 0, 1), qW(128), qW(129), qW(130), qW(131), qW(132), qX(133, 2), qW(134, 0, 5), qX(135, 2), qX(136, 2), qW(
			137), qW(138), qW(139), qW(140), qW(141), qW(142), qW(143), qW(144), qX(145, 2), qW(146), qW(147), qX(148, 2), qW(149), qW(150, 0, 1), qX(151, 2), qW(152, 0, 5), qY(180), qW(180, 0), qW(181, 0)
	}, this.p6 = function(kf, value) {
		this.data[kf].value = value
	}, this.dX = function(kf, value) {
		this.p6(kf, value), bX.ol.save(kf, String(value)), bX.ol.save(kf, String(this.data[kf].dt), !0)
	}, this.qZ = function() {
		for (var a0 = 0; a0 < this.data.length; a0++) this.data[a0] && (bX.ol.save(a0, String(this.data[a0].value)), bX.ol.save(a0, String(this.data[a0].dt), !0))
	}, this.qa = function(kf) {
		return Number(this.data[kf].value)
	}, this.qb = function(kf) {
		return String(this.data[kf].value)
	}
}

function qR() {
	this.qd = function(kf, dt) {
		return Number(this.qe(kf, dt))
	}, this.qe = function(kf, dt) {
		var ds = null;
		return 0 === m.id ? m.qf && (ds = m.qf.getItem((dt ? "v" : "d") + kf)) : 1 === m.id ? ds = m.t.loadString((dt ? 1e3 : 2e3) + kf) : 2 === m.id && (ds = m.qg[(dt ? "v" : "d") + kf]), ds && 0 !== ds.length ? ds : null
	}, this.qh = function(ey, qi) {
		var e6 = [],
			qj = qi ? "e" : "l";
		if (0 === m.id) {
			if (m.qf)
				for (a0 = 0; a0 < ey; a0++) e6.push(m.qf.getItem(qj + a0))
		} else if (1 === m.id)
			for (var qk = qi ? 5e3 : 3e3, a0 = 0; a0 < ey; a0++) e6.push(m.t.loadString(qk + a0));
		else if (2 === m.id)
			for (a0 = 0; a0 < ey; a0++) e6.push(m.qg[qj + a0]);
		return e6
	}, this.save = function(kf, value, dt) {
		var ql = (dt ? "v" : "d") + kf;
		0 === m.id ? m.qf && bX.dW.data[140].value && m.qf.setItem(ql, value) : 1 === m.id ? m.t.saveString((dt ? 1e3 : 2e3) + kf, value) : 2 === m.id && (m.qg[ql] = value, m.qm.postMessage(ql + " " + value))
	}, this.qn = function(e6, qi) {
		var ey = e6.length,
			qj = qi ? "e" : "l";
		if (0 === m.id) {
			if (m.qf && bX.dW.data[140].value)
				for (a0 = 0; a0 < ey; a0++) m.qf.setItem(qj + a0, e6[a0])
		} else if (1 === m.id)
			for (var qk = qi ? 5e3 : 3e3, a0 = 0; a0 < ey; a0++) m.t.saveString(qk + a0, e6[a0]);
		else if (2 === m.id)
			for (a0 = 0; a0 < ey; a0++) m.qg[qj + a0] = e6[a0], m.qm.postMessage(qj + a0 + " " + e6[a0])
	}
}

function qV() {
	this.dE = function() {
		! function() {
			var data = bX.dW.data;
			0 === data[2].dt && (an.iF > an.u || 0 !== m.id) && (data[2].value = data[2].qc = 1);
			0 === data[100].dt && (data[100].value = data[100].qc = (0 === m.id ? "Player " : 1 === m.id ? "Android User " : "iOS User ") + Math.floor(1e3 * Math.random()))
		}();
		var a0, ds, data = bX.dW.data,
			ey = data.length;
		for (a0 = 0; a0 < ey; a0++) data[a0] && data[a0].dt === bX.ol.qd(a0, !0) && (ds = bX.ol.qe(a0), data[a0].value = null === ds ? data[a0].qc : 2 === data[a0].type ? ds : Number(ds));
		bX.dW.data[10].value = bX.dW.data[10].qc
	}
}

function qU() {
	function qt(e6) {
		if (0 === e6.length) bX.p5.p6(116, "");
		else {
			for (var qw = e6[0], a0 = 1; a0 < e6.length; a0++) qw += ";" + e6[a0];
			bX.p5.p6(116, qw)
		}
	}
	this.qq = function() {
		bX.dW.data[110].value.length && (bX.dW.data[106].value = bX.dW.data[110], bX.p5.p6(110, ""), this.qr())
	}, this.qr = function() {
		var e6 = bX.dW.data[116].value.split(";");
		for (e6.length % 2 == 1 && e6.pop(), e6.unshift(bX.dW.data[106].value), e6.unshift(bX.dW.data[105].value), a0 = 2; a0 < e6.length; a0 += 2)
			if (e6[a0] === e6[0]) {
				e6.splice(a0, 2);
				break
			} for (var qs = [], a0 = 0; a0 < e6.length; a0 += 2) qs.push(e6[a0]);
		qt(e6), bX.dW.data[117].value = 0, bX.dW.data[117].q0 = qs
	}, this.qu = function(kf) {
		bX.dW.data[117].q0.splice(kf, 1), bX.dW.data[117].value = Math.min(kf, bX.dW.data[117].q0.length - 1);
		var e6 = bX.dW.data[116].value.split(";");
		e6.splice(2 * kf, 2), qt(e6)
	}, this.qv = function(kf) {
		var e6 = bX.dW.data[116].value.split(";");
		return {
			pU: e6[2 * kf],
			password: e6[2 * kf + 1]
		}
	}, this.qx = function() {
		var ds = bB.o6(bX.dW.data[121].value, -1, 262143);
		return ds = -1 === ds ? ~~(262144 * Math.random()) : ds
	}
}

function qT() {
	this.p6 = function(kf, value) {
		bX.dW.data[kf].value !== value && (bX.dW.dX(kf, value), 0 === kf ? (i.qy(), az.dE(), i.j(2)) : 1 === kf ? an.dO(1) : 2 === kf ? an.dO(0) : 5 === kf && (b2.ku.qz(), an.dO(0)))
	}, this.r0 = function() {
		for (var data = bX.dW.data, a0 = 0; a0 < 100; a0++) data[a0] && bX.dW.dX(a0, data[a0].qc);
		b2.ku.qz(), an.dO(1), az.dE()
	}, this.r1 = function() {
		for (var data = bX.dW.data, a0 = 0; a0 < data.length; a0++) data[a0] && bX.dW.p6(a0, data[a0].qc)
	}, this.r2 = function() {
		for (var i5 = bX.dW, a0 = 128; a0 < 135; a0++) i5.dX(a0, i5.data[a0].qc)
	}, this.r3 = function(data) {
		bX.p5.p6(109, data.pV), bX.p5.p6(107, data.r4), bX.p5.p6(108, data.r5), bX.p5.p6(112, data.r6), bX.p5.p6(111, data.r7), bX.p5.p6(113, data.r8), bX.p5.p6(122, data.username), bX.p5.p6(135, data.r9), bX.p5.p6(136, data.rA), bX.p5.p6(137,
			data.rB), bX.p5.p6(138, data.rC), bX.p5.p6(139, data.rD), bX.p5.p6(141, data.rE), bX.p5.p6(142, data.rF), bX.p5.p6(143, data.rG), bX.p5.p6(144, data.rH)
	}
}

function bl() {
	this.pZ = new rI, this.rJ = new rK, this.dE = function() {
		this.pZ.dE()
	}
}

function rK() {
	this.rL = function(size) {
		for (var rM = b7, e6 = [], a0 = 0; a0 < size; a0++) e6.push(String.fromCharCode(rM.nb(16)));
		return e6.join("")
	}, this.rN = function(oE) {
		return 20 < (oE = oE.trim()).length ? oE.substring(0, 20) : oE
	}
}

function rI() {
	var rO = new Uint8Array(78);
	this.dE = function() {
		var a0;
		for (rO[50] = 37, a0 = 0; a0 < 10; a0++) rO[a0 + 3] = a0 + 1;
		for (a0 = 0; a0 < 26; a0++) rO[a0 + 20] = a0 + 11, rO[a0 + 52] = a0 + 38
	}, this.rP = function(oE) {
		return oE.trim().replace(new RegExp("[^a-zA-Z0-9_\\-]", "g"), "-")
	}, this.rQ = function(oE, size) {
		if ((oE = this.rP(oE)).length > size) return oE.substring(0, size);
		for (; oE.length < size;) oE = "-" + oE;
		return oE
	}, this.rR = function(oE) {
		for (var rS = rO, ey = oE.length, e6 = new Uint8Array(ey), a0 = 0; a0 < ey; a0++) e6[a0] = rS[oE.charCodeAt(a0) - 45];
		return e6
	}, this.rT = function(rU) {
		b4.w(6 * rU.length), this.rV(rU), b7.dE(b4.a1)
	}, this.rV = function(rU) {
		for (var ey = rU.length, u = b4, a0 = 0; a0 < ey; a0++) u.x(6, rU[a0])
	}, this.rW = function(oE) {
		this.rV(this.rR(oE))
	}, this.rX = function(oE, size) {
		this.rV(this.rR(this.rQ(oE, size)))
	}, this.rY = function(oE, size) {
		for (var e6 = this.rR(this.rQ(oE, size)), ds = 0, lZ = 1, a0 = e6.length - 1; 0 <= a0; a0--) ds += lZ * e6[a0], lZ *= 64;
		return ds
	}
}

function rZ() {
	var u, iF, ra;

	function ry(pf, f7, rw, rf, rr) {
		f7 = rx(pf, f7 + 1 + 2 * rf & 3);
		! function(pf, rz) {
			return 1 < Math.abs(pf % u - rz % u) || 1 < Math.abs(s2(pf) - s2(rz))
		}(pf, f7) && 0 === rr[f7 << 2] && (rr[f7 << 2] = rw)
	}

	function s2(f5) {
		return Math.floor((f5 + .5) / u) % iF
	}

	function rx(f5, f7) {
		return f5 + ra[f7]
	}
	this.rb = function(oE) {
		var a0, rc, ey, rd, rM = b7;
		for (b6.pZ.rT(b6.pZ.rR(oE)), bI.eT = u = rM.nb(12), bI.eU = iF = rM.nb(12), ra = [-u, -1, u, 1], bI.ro = document.createElement("canvas"), bI.ro.width = bI.eT, bI.ro.height = bI.eU, bI.rk = bI.ro.getContext("2d", {
				alpha: !1
			}), bI.rl = bI.rk.getImageData(0, 0, bI.eT, bI.eU), bI.rp = bI.rl.data, b2.od.rq(bI.rp), ey = rM.nb(12), rc = rM.nb(5), rd = rh(u * iF - 1), a0 = 0; a0 < ey; a0++) ! function(ja, f5, re, rf) {
			var a0, f7, rM = b7,
				rr = bI.rp,
				rs = f5,
				rt = f5,
				ru = 0,
				rv = 1 + re,
				rw = 2 - re;
			for (rr[f5 << 2] = rv, a0 = 0; a0 < ja; a0++) f7 = rM.nb(2), f5 = rx(f5, f7), rr[f5 << 2] === rv ? ru % 2 == 1 && ry(rt, ru + 2 * rf + 3, rw, rf, rr) : rr[f5 << 2] = rv, ry(f5, f7, rw, rf, rr), ry(rt, f7, rw, rf, rr), rt = f5,
				ru = f7;
			rx(f5, 0) === rs ? (ry(f5, 0, rw, rf, rr), ry(rs, 0, rw, rf, rr)) : rx(f5, 1) === rs && (ry(f5, 0, rw, rf, rr), ry(rs, 2, rw, rf, rr));
			0 === ja && (ry(rs, 0, rw, rf, rr), ry(rs, 2, rw, rf, rr))
		}(rM.nb(rc), rM.nb(rd), 1 === rM.nb(1), 1 === rM.nb(1));
		var fg, fh, jd, s3, s4, s5, rr = bI.rp,
			s6 = !0,
			s7 = bI.j9.s8[bI.s9].s7,
			sA = bI.j9.s8[bI.s9].sA;
		for (fh = 0; fh < iF; fh++)
			for (s3 = !0, s4 = s6, fg = s5 = 0; fg < u; fg++) jd = 4 * fh * u + 4 * fg, s5 <= fg && 0 < rr[jd] && (s4 = 2 === rr[jd], s3) && (s3 = !1, s4 !== s6) ? (s6 = s4, s5 = fg + 1, fg = -1) : (s4 ? (rr[jd] = sA[0], rr[1 + jd] = sA[1], rr[
				2 + jd] = sA[2]) : (rr[jd] = s7[0], rr[1 + jd] = s7[1], rr[2 + jd] = s7[2]), rr[3 + jd] = 255);
		bI.rk.putImageData(bI.rl, 0, 0), bI.rm = !0, bI.rn.dE(), bT.dL = !0
	}
}

function br() {
	var fg, fh, u, iF, sB, sC, sD, sE, player, e6;

	function sM() {
		return function() {
			var a0;
			for (a0 = 0; a0 < 8; a0++)
				if (fg = bB.em(u * ao.random(), ao.value(100)), fh = bB.em(iF * ao.random(), ao.value(100)), sU()) return 1;
			return
		}() || function() {
			var gs, gv, hz, sK, i5, sJ;
			for (gs = bB.em(u * ao.random(), ao.value(100)), gv = bB.em(iF * ao.random(), ao.value(100)), hz = 40; 1 <= hz; hz--)
				for (sK = iF - hz; 0 <= sK; sK -= 40)
					for (fh = (sK + gv) % iF, i5 = 40; 1 <= i5; i5--)
						for (sJ = u - i5; 0 <= sJ; sJ -= 40)
							if (fg = (sJ + gs) % u, sU()) return 1;
			return
		}()
	}

	function sU() {
		for (var f5, sW, gap = bB.em(sB - sE, 2), sX = sD + fh * sB + gap, sY = sC + fg * sB + gap, sV = sX + sE - 1; sX <= sV; sV--)
			for (sW = sY + sE - 1; sY <= sW; sW--)
				if (f5 = aS.sS(sW, sV), !aS.f0(f5) || aS.hv(f5)) return;
		return 1
	}

	function sN(sJ, sK) {
		sF(), sZ(sJ - 2, sK - 2)
	}

	function sF() {
		aX.kX[player] = 0, aX.eu[player] = 0, aX.eq[player] = aX.sa[player] = 0, aX.ez[player] = [], aX.fG[player] = [], aX.fH[player] = [], aX.fK[player] = [], aX.hK[player] = aX.hM[player] = aX.hL[player] = aX.hN[player] = 0
	}

	function sZ(sJ, sK) {
		var f5, a0, sc, sd;
		for (aX.kX[player] = 1, player < a2.iq ? aX.eu[player] = a2.sb : aX.eu[player] = a3.j6[a3.ht[player]], aX.hK[player] = sJ + 10, aX.hM[player] = sK + 10, aX.hN[player] = aX.hL[player] = 0, sc = sJ; sc < sJ + 4; sc++)
			for (sd = sK; sd < sK + 4; sd++)(sJ < sc && sc < sJ + 3 || sK < sd && sd < sK + 3) && (f5 = aS.sS(sc, sd), aS.f0(f5)) && (aX.hK[player] = sc < aX.hK[player] ? sc : aX.hK[player], aX.hL[player] = sc > aX.hL[player] ? sc : aX.hL[player], aX
				.hM[player] = sd < aX.hM[player] ? sd : aX.hM[player], aX.hN[player] = sd > aX.hN[player] ? sd : aX.hN[player], e6[aX.eq[player]] = f5, aX.eq[player]++, aS.se(f5, player));
		for (aX.sa[player] = aX.eq[player], a0 = aX.eq[player] - 1; 0 <= a0; a0--) aS.sf(e6[a0], player) ? (aS.f1(e6[a0], player), aX.fG[player].push(e6[a0])) : aS.sg(e6[a0]) ? (aS.f1(e6[a0], player), aX.fH[player].push(e6[a0])) : aS.sh(e6[a0]) && (
			aS.f1(e6[a0], player), aX.fK[player].push(e6[a0]))
	}

	function sT(sJ, sK) {
		for (var f5, sW, sV = sK; sK - 6 < sV; sV--)
			for (sW = sJ; sJ - 6 < sW; sW--)
				if (f5 = aS.sS(sW, sV), aS.hv(f5)) return;
		return 1
	}
	this.dE = function() {
		var a0, sJ, sK;
		if (e6 = new Array(12), sE = 6, sB = 10, u = bB.em(bI.eT, sB), iF = bB.em(bI.eU, sB), sC = bB.em(bI.eT - sB * u, 2), sD = bB.em(bI.eU - sB * iF, 2), a2.g0)
			for (a0 = 0; a0 < a2.iq; a0++) player = a0, sF(), aX.kX[player] = 1;
		if (ay.j8 && ay.j9.sG) {
			for (player = 0; player < a2.f2; player++)
				if (1 !== aX.kX[player]) {
					if (player < a2.sL) {
						if (function() {
								var sJ = ay.j9.sG[player] + 1,
									sK = ay.j9.sR[player] + 1;
								if (3 < sJ && sJ < bI.eT - 5 && 3 < sK && sK < bI.eU - 5 && aS.f0(aS.sS(sJ, sK)) && sT(sJ + 3, sK + 3)) return sN(sJ + 1, sK + 1), 1;
								return
							}()) continue;
						if (sM()) {
							sJ = sC + fg * sB + bB.em(sB, 2), sK = sD + fh * sB + bB.em(sB, 2), sN(sJ, sK);
							continue
						}
					}
					sF()
				}
		} else ! function() {
			var sJ, sK;
			for (player = 0; player < a2.f2; player++) 1 !== aX.kX[player] && (player < a2.sL && sM() ? (sJ = sC + fg * sB + bB.em(sB, 2), sK = sD + fh * sB + bB.em(sB, 2), sN(sJ, sK)) : sF())
		}();
		bR.ew[7] = aX.eq[a2.et], bR.ew[8] = aX.eu[a2.et]
	}, this.si = function(hs, sj, sk) {
		var a0, sJ, sK, f5, fg, fh;
		for (player = hs, a0 = 0; a0 < 20; a0++)
			for (sJ = sj + a0; sj - a0 <= sJ; sJ--)
				for (sK = sk + a0; sk - a0 <= sK; sK--)
					if ((sJ === sj + a0 || sJ === sj - a0 || sK === sk + a0 || sK === sk - a0) && 3 < sJ && sJ < bI.eT - 5 && 3 < sK && sK < bI.eU - 5 && aS.f0(aS.sS(sJ, sK)) && sT(sJ + 3, sK + 3)) {
						if (0 < aX.eq[player]) {
							for (fh = fg = f5 = void 0, fg = aX.hL[player]; fg >= aX.hK[player]; fg--)
								for (fh = aX.hN[player]; fh >= aX.hM[player]; fh--) f5 = 4 * (fh * bI.eT + fg), aS.sm(player, f5) && (aS.sn(f5), aX.eq[player]--);
							sF()
						}
						return sZ(sJ - 1, sK - 1), !0
					} return !1
	}, this.so = function(hs) {
		player = hs, sM() ? sN(sC + fg * sB + bB.em(sB, 2), sD + fh * sB + bB.em(sB, 2)) : sF()
	}
}

function sp() {
	ag.sq(), kv.setTransform(h8, 0, 0, h8, 0, 0), kv.imageSmoothingEnabled = h8 < 3, kv.drawImage(bI.ro, aH.kw(), aH.kx()), bF.sr.kl(), kv.drawImage(ss, aH.kw(), aH.kx()), ag.kl(), bD.kl(), aW.kl(), a6.kl(), (a2.lR ? (bV.kl(), b3) : (aC.kl(), aK
	.kl(), aG.kl(), b3.kl(), al.kl(), aL.kl(), aH.kl(), aF.kl(), bV.kl(), aJ.kl(), aE.kl(), aB.kl(), aA.kl(), aM.kl(), bS.kl(), ai)).kl(), i.kl()
}

function st(su, u, iF) {
	su.clearRect(0, 0, u, iF), su.fillStyle = p.ls, su.fillRect(0, 0, u, iF)
}

function sv(su, u, iF, sw) {
	su.fillStyle = p.lv, su.fillRect(0, 0, u, sw), su.fillRect(0, 0, sw, iF), su.fillRect(u - sw, 0, sw, iF), su.fillRect(0, iF - sw, u, sw)
}

function sx(su, fg, fh, gG, sw, f5, sy) {
	su.fillStyle = p.lv;
	var f5 = Math.floor(gG * f5),
		pe = (f5 += (f5 - sw) % 2, Math.floor((f5 - sw) / 2)),
		gG = Math.floor((gG - f5) / 2);
	su.fillRect(fg + gG, fh + gG + pe, f5, sw), sy && su.fillRect(fg + gG + pe, fh + gG, sw, f5)
}

function t0() {
	this.t1 = null, this.dE = function(t1) {
		this.t1 = t1, aC.t2(this.t1)
	}, this.t3 = function(t4) {
		var ge = (this.t1[t4].t5 - this.t1[1 - t4].t5) / 10,
			ge = 8 / (1 + Math.pow(2, ge / 32)),
			ge = Math.floor(10 * ge + .5),
			t7 = this.t8(this.t1[t4].t5 + ge + 1),
			ge = this.t8(this.t1[1 - t4].t5 - ge);
		0 === t4 ? aC.tA(this.t1, t7, ge, ["rgba(10,140,10,0.75)", "rgba(140,10,10,0.75)"]) : aC.tA(this.t1, ge, t7, ["rgba(140,10,10,0.75)", "rgba(10,140,10,0.75)"])
	}, this.t8 = function(t5) {
		return 16e3 <= (t5 = t5 < 0 ? 0 : 16e3 < t5 ? 16e3 : t5) ? "Unknown" : (t5 / 10).toFixed(1)
	}
}

function cK() {
	this.tB = new tC, this.rr = new tD
}

function tD() {
	this.tE = !1;
	this.tI = [], this.tJ = 100;
	var kq, kr, gap, gG, tF, tH, tK = 0,
		tL = new Array(9),
		tM = [],
		tN = [],
		tO = 0,
		tP = 0,
		tQ = 0,
		tR = 0;

	function tc() {
		tL.sort(function(hz, i5) {
			return i5.iy - hz.iy
		});
		for (var oE = "" + tL[0].nB, a0 = 1; a0 < 9; a0++) oE += "," + tL[a0].nB;
		for (a0 = 0; a0 < 9; a0++) oE += "," + tL[a0].iy;
		bX.dW.dX(120, oE)
	}
	this.dE = function() {
		for (var pl = [0, 1, 2, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 6], a0 = 0; a0 < pl.length; a0++) {
			var color = 6 === pl[a0] ? p.mH : p.lt;
			this.tI.push(b2.gM.tS(aR.get(3), pl[a0], color))
		}
		for (a0 = 0; a0 < aa.tB.tT; a0++) tN.push(aa.tB.tU - aa.tB.tT + a0);
		for (a0 = 0; a0 < aa.tB.tV; a0++) tN.push(aa.tB.tW + a0);
		var tX = aa.tB.tY(bA.tX);
		for (a0 = 0; a0 < tX.length; a0++) tN.push(tX[a0]);
		! function() {
			var a0, e6 = bX.dW.data[120].value.split(",");
			if (18 !== e6.length)
				for (a0 = 0; a0 < 9; a0++) tL[a0] = {
					nB: 1015 + a0,
					iy: 0
				};
			else
				for (a0 = 0; a0 < 9; a0++) {
					var ds = parseInt(e6[a0]),
						il = (ds = 0 <= ds && ds < aa.tB.tU ? ds : 0, parseInt(e6[a0 + 9]));
					il = 0 <= il && il < 1e3 ? il : 0, tL[a0] = {
						nB: ds,
						iy: il
					}
				}
		}()
	}, this.show = function(jm, jn, td) {
		var a0;
		if (tO = jm, tP = jn, tK = td || 0, this.tE = !0, tM = [], 0 === tK)
			for (a0 = 0; a0 < 9; a0++) tM.push(tL[a0].nB);
		else {
			var i5 = 49 * tK,
				td = i5 - 49;
			for (td >= tN.length && (tK = 1, td = 0, i5 = 49), a0 = td = (i5 = Math.min(i5, tN.length)) - 49; a0 < i5; a0++) tM.push(tN[a0])
		}
		tM.push(1024);
		td = tM.length, gG = Math.floor((m.n.te() ? .075 : .0468) * an.oV), gap = Math.floor(gG / 3), (tQ = 10 * (tF = gG + gap)) > an.u && (tQ = an.u, gap = (tF = tQ / 10) - (gG = 3 * tF / 4)), tH = bB.em(td, 10) + !!(td % 10), (tR = tH * tF) >
			an.iF && (tR = an.iF, gap = (tF = tR / tH) - (gG = 3 * tF / 4)), td = .5 * gap;
		kq = Math.min(Math.max(jm - .5 * tQ + td, td), an.u - tQ + td), kr = Math.min(Math.max(jn - .5 * tR + td, td), an.iF - tR + td)
	}, this.fo = function(jm, jn, player) {
		if (!this.tE) return !1;
		if (this.tg(jm, jn)) {
			jm = bB.o6(bB.em(jm - kq + .5 * gap, tF), 0, 9);
			if ((jm += 10 * bB.o6(bB.em(jn - kr + .5 * gap, tF), 0, 9)) >= tM.length) return aA.pr(), !0;
			jn = tM[jm];
			if (1024 === jn) return this.show(tO, tP, tK + 1), !0;
			! function(nB) {
				for (var a0 = 0; a0 < 9; a0++) tL[a0].iy = Math.floor(.99 * tL[a0].iy);
				for (a0 = 0; a0 < 9; a0++)
					if (nB === tL[a0].nB) return tL[a0].iy = Math.min(tL[a0].iy + 30, 999), tc();
				tL.splice(5, 0, {
					nB: nB,
					iy: Math.max(tL[4].iy, 30)
				}), tL.pop(), tc()
			}(jn), player === a2.et ? b0.g1.nA(jn) : b0.eo.nQ(jn, player)
		}
		return aA.pr(), !0
	}, this.tg = function(jm, jn) {
		return !(jm < kq - .5 * gap || jn < kr - .5 * gap || kq + tQ - .5 * gap <= jm || kr + tR - .5 * gap <= jn)
	}, this.kl = function() {
		kv.fillStyle = p.ls, kv.fillRect(kq - .5 * gap, kr - .5 * gap, tQ, tR);
		for (var jd = .5 * bQ.th, ey = (kv.lineWidth = bQ.th, kv.strokeStyle = kv.fillStyle = p.lv, kv.strokeRect(kq - .5 * gap + jd, kr - .5 * gap + jd, tQ - 2 * jd, tR - 2 * jd), kv.imageSmoothingEnabled = !0, tM.length), a0 = 0; a0 < ey; a0++)
			this.ti(tM[a0], kv, kq + a0 % 10 * tF, kr + bB.em(a0, 10) * tF, gG);
		kv.imageSmoothingEnabled = !1
	}, this.ti = function(nB, gN, fg, fh, gG) {
		var fx;
		nB >= 1024 - aa.tB.tT ? (fx = gG / this.tJ, gN.setTransform(fx, 0, 0, fx, fg, fh), gN.drawImage(this.tI[nB - 1024 + aa.tB.tT], 0, 0), gN.setTransform(1, 0, 0, 1, 0, 0)) : (b2.ku.textAlign(gN, 1), b2.ku.textBaseline(gN, 1), gN.font = b2.ku
			.kz(0, .89 * gG), gN.fillText(aa.tB.tj(nB), fg + .5 * gG, fh + (.35 - b2.ku.tk + .56) * gG))
	}
}

function tC() {
	this.emojis = ["🥰", "😎", "😘", "😜", "🤗", "🥳", "😇", "😊", "🥱", "🙄", "🤔", "🥺", "😡", "😭", "😱", "😞", "💀", "👹", "👋", "🙏", "👏", "💪", "🙋‍♂️", "🤦‍♂️", "⬆️", "➡️", "⬇️", "⬅️", "👀", "❤️", "💔", "💥", "🔥", "🪦", "🥇", "🥈", "🥉",
		"🎖️", "🏅", "👑", "🎉", "💯", "✝️", "☪️", "🕉️", "☸️", "✡️", "☦️", "⚛️"
	], this.tT = 13, this.tV = this.emojis.length, this.tW = 676, this.tU = 1024, this.tl = this.emojis.indexOf("💀"), this.tm = this.tl + 1, this.tn = this.emojis.indexOf("🥇"), this.to = this.emojis.indexOf("😊"), this.tj = function(ds) {
		return ds < this.tW ? String.fromCharCode(55356, 56806 + bB.em(ds, 26), 55356, 56806 + ds % 26) : this.emojis[Math.min(ds - this.tW, this.tV - 1)]
	}, this.tY = function(oE) {
		for (var ey = oE.length - 2, e6 = [], a0 = 0; a0 < ey; a0++) {
			var gZ = oE.charCodeAt(a0) - 56806,
				ga = oE.charCodeAt(a0 + 2) - 56806;
			0 <= gZ && gZ < 26 && 0 <= ga && ga < 26 && (e6.push(26 * gZ + ga), a0 += 3)
		}
		return e6
	}, this.tp = function(ds) {
		return ds < this.tW
	}, this.tq = function(ds) {
		return ds >= 1024 - this.tT
	}, this.tr = function(ds) {
		return ds >= this.tW && ds < this.tW + this.tm
	}
}

function bk() {
	this.pZ = new ts, this.rJ = new tt, this.dE = function() {
		this.pZ.dE()
	}
}

function tt() {
	this.rW = function(oE) {
		for (var ey = oE.length, u = b4, a0 = 0; a0 < ey; a0++) u.x(16, oE.charCodeAt(a0))
	}
}

function ts() {
	var tu = new Uint8Array(64);
	this.dE = function() {
		var a0;
		for (tu[0] = 45, tu[37] = 95, a0 = 0; a0 < 10; a0++) tu[a0 + 1] = 48 + a0;
		for (a0 = 0; a0 < 26; a0++) tu[a0 + 11] = 65 + a0, tu[a0 + 38] = 97 + a0
	}, this.pb = function(tv) {
		for (var rM = b7, rU = new Uint8Array(tv), a0 = 0; a0 < tv; a0++) rU[a0] = rM.nb(6);
		return rU
	}, this.pa = function(rU) {
		for (var ey = rU.length, tw = tu, e6 = [], a0 = 0; a0 < ey; a0++) e6.push(String.fromCharCode(tw[rU[a0]]));
		return e6.join("")
	}
}

function bs() {
	var tx, ty, tz;
	tx = [32, 65, 191, 913, 931], ty = [64, 127, 688, 930, 1155], tz = new Array(tx.length + 1);
	for (var a0 = 0; a0 < tz.length; a0++) {
		tz[a0] = 0;
		for (var hz = a0 - 1; 0 <= hz; hz--) tz[a0] += ty[hz] - tx[hz]
	}

	function u5(il) {
		for (var a0 = tx.length - 1; 0 <= a0; a0--)
			if (il >= tx[a0] && il < ty[a0]) return a0;
		return -1
	}
	this.rN = function(oE) {
		return 0 !== (oE = oE.trim()).indexOf("Bot ") && 0 !== oE.indexOf("[Bot] ") && function(oE, u2, u3) {
			var ey = (oE = oE.trim()).length;
			if (ey < u2 || u3 < ey) return !1;
			for (var il, u4 = 0, a0 = 0; a0 < ey; a0++)
				if (il = oE.charCodeAt(a0), u4 += 65 <= il && il <= 90 || 1040 <= il && il <= 1071 ? 1 : 0, -1 === u5(il)) return !1;
			if (3 < u4 && u4 > Math.floor(ey / 2)) return !1;
			return !0
		}(oE, 3, 20)
	}, this.u6 = function(oE) {
		for (var ey = (oE = oE.trim()).length, e6 = [], a0 = 0; a0 < ey; a0++) {
			var il, f5 = u5(il = oE.charCodeAt(a0));
			e6.push(tz[f5] + il - tx[f5])
		}
		return e6
	}, this.rb = function(e6) {
		for (var il, i5, oE = "", ey = e6.length, a0 = 0; a0 < ey; a0++)
			for (i5 = 1; i5 < tz.length; i5++)
				if (e6[a0] < tz[i5]) {
					il = tx[i5 - 1] + e6[a0] - tz[i5 - 1], oE += String.fromCharCode(il);
					break
				} return oE
	}, this.u7 = function(oE) {
		for (var e6 = this.u6(oE), result = "", a0 = 0; a0 < e6.length; a0++) result = (result += e6[a0] < 10 ? "00" : e6[a0] < 100 ? "0" : "") + e6[a0].toString(10);
		return result
	}, this.u8 = function(oE) {
		for (var e6 = new Array(Math.floor(oE.length / 3)), a0 = 0; a0 < oE.length; a0 += 3) e6[Math.floor(a0 / 3)] = parseInt(oE.substring(a0, a0 + 3));
		return this.rb(e6)
	}, this.u9 = function(oE) {
		for (var ds, e6 = [oE.length], a0 = 0; a0 < oE.length; a0++) e6[a0] = oE.charCodeAt(a0) - 48;
		var result = "";
		for (a0 = 0; a0 < oE.length; a0++) a0 === oE.length - 1 || 51 < 10 * e6[a0] + e6[a0 + 1] ? result += e6[a0].toString() : (ds = 10 * e6[a0] + e6[a0 + 1], result += String.fromCharCode(ds + (ds < 26 ? 65 : 71)), a0++);
		return result
	}, this.uA = function(oE) {
		for (var il, result = "", a0 = 0; a0 < oE.length; a0++) 48 <= (il = oE.charCodeAt(a0)) && il < 58 ? result += String.fromCharCode(il) : 65 <= il && il < 75 ? result += "0" + (il - 65).toString() : 75 <= il && il < 91 ? result += (il - 65)
			.toString() : 97 <= il && il < 123 && (result += (il - 71).toString());
		return result
	}, this.uB = function(oE) {
		for (var ey = oE.length, e6 = [], a0 = 0; a0 < ey; a0++)(il = oE.charCodeAt(a0)) < 58 ? e6.push(oE[a0]) : (il -= il < 91 ? 65 : 71, e6.push(String(bB.em(il, 10))), e6.push(String(il - 10 * bB.em(il, 10))));
		var ey = e6.length - 2,
			il = 0,
			rU = [];
		for (a0 = 0; a0 < ey; a0 += 3) rU[il++] = parseInt(e6[a0] + e6[a0 + 1] + e6[a0 + 2]);
		return rU
	}, this.uC = function() {
		for (var gP, uD = "", a0 = 0; a0 < 6; a0++) gP = 48 + ao.random() % 36, gP += 58 <= gP ? 39 : 0, uD += String.fromCharCode(gP);
		return uD
	}
}

function cs() {
	this.uE = new uF, this.uG = new uH, this.result = new uI, this.g5 = new uJ, this.uK = new uL, this.uM = new uN, this.uO = new uP, this.dE = function() {
		this.uK.dE()
	}, this.hb = function() {
		this.uK.hb()
	}
}

function uJ() {
	this.uQ = function() {
		for (var ey = ir, t1 = it, uR = [], a0 = 0; a0 < ey; a0++) {
			var f5 = t1[a0];
			aS.uS(f5) && uR.push(f5)
		}
		return uR
	}, this.uT = function() {
		for (var ey = ir, t1 = it, dq = 0, eq = aX.eq, a0 = 0; a0 < ey; a0++) dq += eq[t1[a0]];
		return dq
	}
}

function uF() {
	function uV() {
		if (2 === a2.uZ) return 1;
		al.ua(), a2.uZ = 2, a2.ub = a2.uc
	}

	function uX() {
		bH.uO.ud(), aM.show(1 === a2.ue, !1, 2 === a2.ue), bH.result.ud(), bH.uM.hb(), aC.uf(!0), aC.ug(247, 0), aK.kH(!0), aL.kH(!0), al.kH(), b3.uh(), a2.fk && bT.ui.uj(), bT.dL = !0, bP.uk(), m.n.setState(0)
	}
	this.uU = function() {
		uV() || (a2.uW = 2, uX())
	}, this.uY = function() {
		uV() || (a2.uW = 1, uX())
	}
}

function uN() {
	this.hb = function() {
		var ut;
		2 === a2.uW ? (aC.ul(0, 59), a7.lW(2700)) : a2.jC < 7 ? (ut = bU.uu[bV.jv()], ut = bU.uw[ut], aF.ux(L(7, [ut]), 2, 1, 12), aC.uy(0, L(8, [ut]), 40, 0, p.lv, p.ls, -1, !1), a7.lW(2700)) : 8 === a2.jC ? (a2.ue ? aC.ul(a2.uq, 2) : aC.ul(1 -
			a2.et, 3), a2.ur.t3(a2.uq), aC.us(a2.uq), a7.lP(a2.uq, 2700, !1, 0)) : 9 === a2.jC ? (aC.uz(), a7.lW(2700)) : (aC.us(a2.uq), a7.lP(a2.uq, 2700, !1, 0))
	}
}

function uI() {
	this.v0 = 0, this.uR = null;
	var v2 = this.v1 = 0;
	this.v3 = 0, this.ud = function() {
		var v7, f6, dq;
		bH.uK.v4 || (bH.uK.v4 = !0, a2.jE) || ((v7 = this).uR = bH.g5.uQ(), v7.v0 = bW.v8.v9(), a2.jC < 7 && 2 !== a2.uW ? v7.v1 = bV.vA() : v7.v1 = bH.g5.uT(), 8 === a2.jC && 1 === a2.uW ? (f6 = 1 - a2.uq, dq = aX.eq[f6], aX.eq[f6] = 0, b0.eo
			.nZ(), aX.eq[f6] = dq) : b0.eo.nZ(), v2 = .01 * aX.vE[a2.et] / 50, v7.v3 = 0, a2.jC < 7 ? bH.uG.ud(v7.uR) : 7 === a2.jC || 10 === a2.jC ? b2.eo.fn(a2.et) && (f6 = bH.result.v0 * (1 + a2.vH), 2 === a2.uW ? bH.result.v3 += f6 *
			aX.eq[a2.et] / bH.result.v1 : jx[0] === a2.et && (bH.result.v3 += f6)) : 8 !== a2.jC || 1 !== a2.ue || 0 === bX.dW.data[107].value || 100 <= (dq = bX.dW.data[108].value) || (bH.result.v3 += .01 * (100 - dq) * 10), this.v6())
	}, this.v6 = function() {
		b2.eo.fn(a2.et) && (.01 <= v2 && aC.uy(0, L(9, [v2.toFixed(2)]), 40, 0, p.mA, p.ls, -1, !1), .01 <= bH.result.v3) && aC.uy(0, L(10, [bH.result.v3.toFixed(2)]), 40, 0, p.mA, p.ls, -1, !1)
	}, this.vI = function() {
		var rs, vJ;
		a2.jE || bH.uK.v4 || (vJ = aX, rs = a2.et, 0 === vJ.vK[rs]) || vJ.hk[rs] < 1 || 2 * vJ.nv[rs] > 3 * (vJ.hj[rs] + vJ.hk[rs]) || (vJ = .01 * vJ.vE[rs] / 50) < .01 || aC.uy(0, L(9, [vJ.toFixed(2)]), 40, 0, p.mA, p.ls, -1, !1)
	}
}

function uL() {
	this.v4 = !1, this.dE = function() {
		this.v4 = !1
	}, this.hb = function() {
		7 <= a2.jC || this.v4 || bT.er() % 20 == 11 && b2.eo.jr(90) && (a2.uW = 1, bH.uO.ud(), bH.result.ud())
	}
}

function uH() {
	function vO(vM) {
		for (var ge = (1 + a2.vH) * bH.result.v0 / (1e5 * bH.result.v1), vS = "", a0 = 0; a0 < vM.length; a0++) {
			var vT = vM[a0].vU * ge;
			vS += "  " + vM[a0].name + ": " + b2.l2.vV(1e5 * vT)
		}
		vS.length && (aC.uy(0, L(11), 45, 0, b2.color.ln(225, 240, 255), p.ls, -1, !1), aC.uy(0, vS.trim(), 45, 0, b2.color.ln(225, 240, 255), p.ls, -1, !1), a2.fk || aC.uy(700, L(12) + bA.vW, 736, 0, p.lv, p.mF, -1, !1))
	}
	this.ud = function(uR) {
		var ut = bU.uu[bV.jv()],
			uR = (a2.ue && b2.eo.fn(a2.et) && (bH.result.v3 += (b2.l2.vQ(aX.vR[a2.et]) ? 2 : 1) * bH.result.v0 * (1 + a2.vH) * aX.eq[a2.et] / bH.result.v1), function(t1) {
				var vM = [],
					username = aX.vR,
					ey = t1.length;
				loop: for (var a0 = 0; a0 < ey; a0++) {
					var f5 = t1[a0],
						vX = b2.l2.vQ(username[f5]);
					if (vX) {
						for (var hz = vM.length - 1; 0 <= hz; hz--)
							if (vM[hz].name === vX) {
								vM[hz].vU += aX.eq[f5];
								continue loop
							} vM.push({
							name: vX,
							vU: aX.eq[f5],
							vY: bU.im[f5]
						})
					}
				}
				return vM.sort(function(hz, i5) {
					return i5.vU - hz.vU
				}), vM
			}(uR));
		uR.length && (2 === a2.uW ? vO(uR) : vO(function(vM, ut) {
			for (var a0 = vM.length - 1; 0 <= a0; a0--) bU.uu[vM[a0].vY] !== ut && vM.splice(a0, 1);
			return vM
		}(uR, ut)))
	}
}

function uP() {
	this.ud = function() {
		2 === a2.uW ? a2.ue = 2 : 8 === a2.jC ? (aS.uS(0) ? aS.uS(1) ? a2.uq = +(aX.eq[1] > aX.eq[0]) : a2.uq = 0 : a2.uq = 1, a2.ue = +(a2.uq === a2.et)) : a2.hm ? a2.ue = +(bU.im[a2.et] === bV.va()) : (a2.uq = jx[0], a2.ue = +(a2.uq === a2.et))
	}
}

function cx() {
	this.id = 0, this.dt = 0, this.qf = null, this.t = null, this.qg = null, this.qm = null, this.n = new vb, this.dE = function() {
		var self, dt;
		self = this, "undefined" == typeof Android || "function" != typeof Android.getVersion || (dt = Android.getVersion()) < 12 || (self.dt = dt, self.id = 1, self.t = Android),
			function(self) {
				var dt;
				"undefined" != typeof mwIOSdataX && window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.iosCommandA && (self.id = 2, self.qg = mwIOSdataX, self.qm = window.webkit.messageHandlers.iosCommandA, dt = self
					.qg.version, self.dt = dt ? Number(dt) : 0)
			}(this),
			function(self) {
				var qf;
				if (0 === self.id) {
					try {
						if (!(qf = window.localStorage)) return;
						qf.setItem("tls7", "1"), qf.removeItem("tls7")
					} catch (error) {
						return
					}
					self.qf = qf
				}
			}(this)
	}
}

function vb() {
	this.vf = function() {
		bX.p5.r0(), bX.p5.r1(), aq.k9.close(0, 3255), 0 === m.id ? m.qf && m.qf.clear() : 1 === m.id ? m.t.saveString(199, "") : 2 === m.id && m.qm.postMessage("clear")
	}, this.vg = function() {
		2 === m.id ? m.qm.postMessage("showConsentForm") : 1 === m.id ? m.t.setState(7) : bK.dY.showCMPScreen()
	}, this.vh = function() {
		this.setState(14)
	}, this.vi = function() {
		var oE = bX.dW.qb(101),
			max = ("string" != typeof(oE = "" === oE ? function() {
				{
					if (2 === m.id) return m.qg.password;
					if (1 === m.id) return 12 <= m.dt ? m.t.loadString(22) : ""
				}
				return aT.vl(9)
			}() : oE) && (oE = ""), Math.floor(Math.pow(2, 48))),
			vk = Math.floor(parseInt(a9.uA(oE)));
		return 0 < vk && vk < max ? bX.dW.dX(101, oE) : (vk = Math.floor(1 + (max - 1) * Math.random()), bX.dW.dX(101, oE)), vk
	}, this.te = function() {
		return 1 === bX.dW.qa(2)
	}, this.vm = function() {
		bX.dW.dX(102, "")
	}, this.setState = function(dn) {
		1 === m.id && 5 <= m.dt && m.t.setState(dn)
	}, this.o = function() {
		var vn;
		1 === m.id && 7 <= m.dt ? m.t.setState(5) : ((vn = new URL(window.location)).searchParams.set("v", "" + Math.floor(1e3 * Math.random())), window.location.href = vn.toString())
	}, this.dI = function() {
		1 !== m.id || m.dt < 17 || m.t.saveString(23, document.documentElement.outerHTML)
	}, this.dc = function() {
		0 === m.id ? bK.dY.dE() : 1 === m.id ? m.t.prepareAd("1688441405") : 2 === m.id && (0 === m.dt ? m.qm.postMessage("prepare ad 4500876070") : m.qm.postMessage("loadAds 4500876070"))
	}, this.dr = function(dq) {
		return 0 === m.id ? !!bK.dY.dl() : 1 === m.id ? 12 <= m.dt && (m.t.presentAd(dq), !0) : 2 === m.id && (0 === m.dt ? m.qm.postMessage("show ad " + dq) : m.qm.postMessage("showAd"), !0)
	}, this.dN = function() {
		2 === m.id && m.dt < 23 && i.j(4, 1, new k("App Update Required", "A new iOS app version with bug fixes has been published.<br>Please download the new Territorial.io app version for iOS:<br><a href='" + bA.vo + "' target='_blank'>" + bA
			.vo + "</a>", !0, [new l(L(13), function() {
				i.j(0)
			}, p.mU)]))
	}
}

function dB() {
	function vr(d) {
		vz(d), i.j(4, 5, new k("🚀 New Game Update", "The game has been updated! Please reload the game." +
			"<div style='border: white; border-width: 1px; border-style: solid; margin: 10px; padding: 5px;'><h2>FX Client is not yet compatible with the latest version of the game.</h2><p>Updates should normally be available within a few hours.<br>You can still use FX to play in singleplayer mode.</p></div>",
			!0, [new l(L(13), function() {
				i.w0()
			}), new l("🔄 Reload", function() {
				m.n.o()
			}, p.q)]))
	}

	function vy(title, vS, d) {
		vz(d), i.j(4, 5, new k("⚠️ " + title, vS, !0))
	}

	function vz(d) {
		! function(d) {
			var dn = aP.vt();
			0 !== dn && (6 === dn ? aq.k9.w4(d) : 7 === dn ? (aj.w5(), aq.k9.close(aq.k9.vv, 3256)) : 8 === dn && a2.w6(!0))
		}(d), i.k9.w3()
	}
	this.vp = function(vq, d) {
		if (8 === i.pW && 0 === vq)
			if (4211 === d) vr(d);
			else {
				if (4480 === d) return bX.p5.r2(), void i.j(4, 0, new k(L(16), L(17), !0));
				i.j(4, 0, new k(L(14), L(15, [d]), !0))
			}
		else {
			var dn = aP.vt();
			if (6 === dn) {
				if (4211 === d) return void vr(d);
				if (4214 !== d) return void aO.vu(vq)
			} else {
				if (7 !== dn) return 8 === dn ? void(vq !== aq.k9.vw || a2.jE || 1 !== a2.uZ || a2.fk || aC.vx(L(15, [d]))) : void 0;
				if (vq !== aq.k9.vv) return
			}
			vy("Error", d, d)
		}
	}, this.w1 = function(d) {
		8 === aP.vt() ? a2.jE || 1 !== a2.uZ || aC.vx(L(15, [d])) : vy("Error", d, d)
	}, this.h = function() {
		vz(3268)
	}
}

function cm() {
	var w7, w8, w9 = -15e3,
		wA = !1;

	function fo(d) {
		wU() || (wA = !0, wV(d, 1), aq.k9.wW(aq.k9.vw), wX(Math.floor(an.oZ * d.clientX), Math.floor(an.oZ * d.clientY)))
	}

	function wJ(d) {
		w9 = bT.dp, wV(d, 1), aq.k9.wW(aq.k9.vw), 0 < d.touches.length && (w7 = Math.floor(an.oZ * d.touches[0].clientX), w8 = Math.floor(an.oZ * d.touches[0].clientY), ah.wJ(d) || wX(w7, w8))
	}

	function wX(fg, fh) {
		i.fo(fg, fh), 0 === a2.uZ ? aP.fo(fg, fh) : b3.wY(fg, fh) || bS.fo(fg, fh) || aM.fo(fg, fh) || aA.wZ(fg, fh) || aE.fo(fg, fh) || aB.fo(fg, fh) || b9.wa(fg, fh) || al.fo(fg, fh) || aA.wb(fg, fh)
	}

	function wF(d) {
		wU() || (wA = !0, wV(d, 1), wc(Math.floor(an.oZ * d.clientX), Math.floor(an.oZ * d.clientY)))
	}

	function wK(d) {
		w9 = bT.dp, wV(d, 1), 0 < d.touches.length && (w7 = Math.floor(an.oZ * d.touches[0].clientX), w8 = Math.floor(an.oZ * d.touches[0].clientY), ah.wK(d) || wc(w7, w8))
	}

	function wc(fg, fh) {
		i.wF(fg, fh), 0 === a2.uZ ? aP.wF(fg, fh) : (bJ.ff(fg, fh), bS.wF(fg, fh) || (aB.wF(fg, fh), aA.tE() ? aA.wF(fg, fh) : aG.fp ? aG.wF(fg) && (bT.dL = !0) : (aK.wF(fg, fh), aH.lS && aH.wF(fg, fh) && (bT.dL = !0))))
	}

	function wH(d) {
		wU() || (wV(d, 1), wd(), 0 === a2.uZ ? (aP.click(-1024, -1024), aI.we()) : (aK.wf(-1024, -1024), aB.wF(-1024, -1024), aG.wg(), aH.lS = !1))
	}

	function wG(d) {
		wU() || (wV(d, 1), wh(Math.floor(an.oZ * d.clientX), Math.floor(an.oZ * d.clientY), 2 === d.button), b9.wD && (b9.wD = !1, d.preventDefault()))
	}

	function click(d) {
		wU() || wV(d, 1)
	}

	function wL(d) {
		w9 = bT.dp, wV(d, 1), d && d.touches && 0 < d.touches.length && 0 !== a2.uZ ? aH.lS = !1 : ah.wi() || (wh(w7, w8, !1), b9.wD && (b9.wD = !1, d.preventDefault()))
	}

	function wM(d) {
		w9 = bT.dp, wV(d, 1), wh(w7, w8, !1), b9.wD && (b9.wD = !1, d.preventDefault())
	}

	function wN(d) {
		ax.wN(d)
	}

	function wO(d) {
		ax.wO(d)
	}

	function wP(d) {
		wU() || wV(d, 0)
	}

	function wh(fg, fh, wj) {
		wd(), 0 === a2.uZ ? aP.click(fg, fh) : (aK.wf(fg, fh), bS.wf(), aG.wg(), aH.lS = !1, aA.click(fg, fh, wj) ? bT.dL = !0 : aB.wG(fg, fh))
	}

	function wd() {
		i.wd()
	}

	function wI(d) {
		var fg, fh, deltaY;
		wU() || (wV(d, 1), aq.k9.wW(aq.k9.vw), fg = Math.floor(an.oZ * d.clientX), fh = Math.floor(an.oZ * d.clientY), deltaY = d.deltaY, 1 === d.deltaMode && (deltaY *= 16), i.wI(fg, fh, deltaY), 0 === a2.uZ ? aP.wI(fg, fh, deltaY) : aK.wI(fg, fh,
			deltaY) || (aG.wk(fg, fh) ? aG.wI(deltaY) && (bT.dL = !0) : aH.wI(fg, fh, deltaY)))
	}

	function wQ(d) {
		wV(d, 0)
	}

	function wV(d, id) {
		0 === id && i.tE() || (id = window.innerWidth / document.documentElement.clientWidth) < .999 || 1.001 < id || 0 !== aP.vt() && d.preventDefault()
	}

	function wS(d) {
		if (keybindHandler(d.key)) return;
		wU() || ("ArrowLeft" === d.key ? ae.wm(3) : "ArrowUp" === d.key ? ae.wm(0) : "ArrowRight" === d.key ? ae.wm(1) : "ArrowDown" === d.key ? ae.wm(2) : "a" === d.key ? aG.wn(.9375) : "d" === d.key ? aG.wn(16 / 15) : "s" === d.key ? aG.wn(7 / 8) :
			"w" === d.key ? aG.wn(8 / 7) : "1" === d.key ? aG.wn(.75) : "2" === d.key ? aG.wn(7 / 8) : "3" === d.key ? aG.wn(.9375) : "4" === d.key ? aG.wn(31 / 32) : "5" === d.key ? aG.wn(32 / 31) : "6" === d.key ? aG.wn(16 / 15) : "7" === d
			.key ? aG.wn(8 / 7) : "8" === d.key ? aG.wn(4 / 3) : "+" === d.key ? 0 !== a2.uZ && aH.wI(Math.floor(an.u / 2), Math.floor(an.iF / 2), -200) : "-" === d.key ? 0 !== a2.uZ && aH.wI(Math.floor(an.u / 2), Math.floor(an.iF / 2), 200) :
			"c" === d.key ? 0 !== a2.uZ && bS.wo() : " " === d.key ? a2.uZ && bJ.fi(!1) : "b" === d.key && a2.uZ && bJ.fi(!0))
	}

	function wR(d) {
		wU() || bT.dp < 400 || "Enter" === d.key && i.wp(1) || (8 !== aP.vt() && aP.wp(d) ? bT.dL = !0 : "Escape" === d.key ? b9.du() : "ArrowLeft" === d.key || "a" === d.key ? ae.wq(3) : "ArrowUp" === d.key || "w" === d.key ? ae.wq(0) :
			"ArrowRight" === d.key || "d" === d.key ? ae.wq(1) : "ArrowDown" === d.key || "s" === d.key ? ae.wq(2) : "h" === d.key ? b3.wr(!a2.lR) : " " === d.key && a2.uZ && (aB.fl && aB.ws(), a2.fk) && b3.wt(!1))
	}

	function wT() {
		"hidden" === document.visibilityState ? 1 === a2.uZ && (a2.fk ? b3.wu() : !a2.jE || aB.fl || a2.g0 || aB.ws()) : bT.dL = !0
	}

	function wU() {
		return w9 + 15e3 > bT.dp
	}

	function resize() {
		an.wx()
	}
	this.wB = 0, this.wC = "", this.wD = !1, this.dE = function() {
		wE.addEventListener("mousedown", fo, {
			passive: !1
		}), wE.addEventListener("mousemove", wF, {
			passive: !1
		}), wE.addEventListener("mouseup", wG, {
			passive: !1
		}), wE.addEventListener("click", click, {
			passive: !1
		}), wE.addEventListener("mouseleave", wH, {
			passive: !1
		}), wE.addEventListener("wheel", wI, {
			passive: !1
		}), wE.addEventListener("touchstart", wJ, {
			passive: !1
		}), wE.addEventListener("touchmove", wK, {
			passive: !1
		}), wE.addEventListener("touchend", wL, {
			passive: !1
		}), wE.addEventListener("touchcancel", wM, {
			passive: !1
		}), wE.addEventListener("dragover", wN), wE.addEventListener("drop", wO), wE.addEventListener("dblclick", wP), document.addEventListener("contextmenu", wQ), document.addEventListener("keyup", wR), document.addEventListener("keydown",
			wS), document.addEventListener("visibilitychange", wT), window.addEventListener("resize", resize)
	}, this.wa = function(fg, fh) {
		return !!b3.fo(fg, fh) || !!(aK.fo(fg, fh) || aH.fo(fg, fh) || aG.fo(fg, fh) || aC.fo(fg, fh))
	}, this.wv = wU, this.ww = function() {
		return !wA || 0 < w9
	}, this.du = function() {
		if (!i.tE()) return 8 === aP.vt() ? a2.lR ? void b3.wr(!1) : bS.tE ? void bS.ws() : void aB.ws() : void(7 === aP.vt() ? aj.wy() : 6 === aP.vt() ? aO.wz() : 2 === aP.vt() && aQ.x0());
		i.wp(2)
	}
}

function bg() {
	this.ku = new x1, this.od = new x2, this.eo = new x3, this.l2 = new x4, this.su = new x5, this.x6 = new x7, this.gM = new x8, this.color = new x9, this.xA = new xB, this.dE = function() {
		this.ku.qz()
	}
}

function x2() {
	this.rq = function(e6) {
		e6.fill(0)
	}, this.xC = function(e6) {
		for (var ey = e6.length, a0 = 0; a0 < ey; a0++) e6[a0] = []
	}, this.xD = function(gZ, xE) {
		for (var ga = bE.e0, a0 = 0; a0 < 3; a0++) ga[a0] = xE * gZ[a0];
		return ga
	}, this.xF = function(gZ, ga, xG) {
		for (var ge = 0, a0 = 0; a0 < 3; a0++) ge += Math.abs(gZ[a0] - ga[a0]);
		return xG <= ge
	}, this.xH = function(gZ, xI) {
		for (var a0 = 0; a0 < 3; a0++) gZ[a0] = bB.o6(gZ[a0] + xI, 0, 255);
		return gZ
	}, this.xJ = function(e6, po, pp) {
		var a0, xK = 0;
		for (pp = pp || e6.length - 1, a0 = po = po || 0; a0 <= pp; a0++) xK += e6[a0];
		return xK
	}, this.xL = function(e6, xM) {
		for (var a0, xN, ey = e6.length, xO = [], hz = ey - 1; 0 <= hz; hz--) {
			for (a0 = xN = 0; a0 < ey; a0++) xM(e6[a0]) < xM(e6[xN]) && (xN = a0);
			ey--, xO.push(e6[xN]), e6[xN] = e6[ey], e6.pop()
		}
		return xO
	}, this.min = function(e6) {
		var a0, ds, ey = e6.length;
		if (0 === ey) return 0;
		for (ds = e6[0], a0 = 1; a0 < ey; a0++) ds = Math.min(ds, e6[a0]);
		return ds
	}, this.max = function(e6) {
		var a0, ds, ey = e6.length;
		if (0 === ey) return 0;
		for (ds = e6[0], a0 = 1; a0 < ey; a0++) ds = Math.max(ds, e6[a0]);
		return ds
	}, this.xP = function(xQ, xR, min) {
		for (var ey = xR[0], a0 = ey - 1; 0 <= a0; a0--) xQ[a0] < min && (xQ[a0] = xQ[--ey]);
		xR[0] = ey
	}, this.xS = function(e6, ey, value) {
		for (var a0 = 0; a0 < ey; a0++) e6[a0] -= value
	}, this.xT = function(e6) {
		for (var ey = e6.length, a0 = 0; a0 < ey; a0++)
			if ("string" != typeof e6[a0]) return !1;
		return !0
	}
}

function x8() {
	this.tS = function(xU, kf, xV) {
		var gG = xU.height,
			xW = b2.ku.rg(gG, gG),
			gN = b2.ku.getContext(xW);
		return function(u, gN, xV) {
			gN.fillStyle = xV, gN.beginPath(), gN.arc(u / 2, u / 2, .47 * u, 0, 2 * Math.PI), gN.fill()
		}(gG, gN, xV), gN.drawImage(xU, -kf * gG, 0), xW
	}, this.xY = function(xZ) {
		var gN, gJ, gG = xZ.height;
		return xZ.width === gG && (gJ = (gN = b2.ku.getContext(xZ, !0)).getImageData(0, 0, gG, gG), b2.x6.xa(gJ.data, gG, gG, .9), gN.putImageData(gJ, 0, 0)), xZ
	}
}

function x9() {
	this.xb = function(ds) {
		return [ds >> 12 & 63, ds >> 6 & 63, 63 & ds]
	}, this.xc = function(ds) {
		for (var e6 = this.xb(ds), a0 = 0; a0 < 3; a0++) e6[a0] = ~~(4.05 * e6[a0]);
		return e6
	}, this.xd = function(ds) {
		ds = this.xc(ds);
		return b2.color.ln(ds[0], ds[1], ds[2])
	}, this.xe = function(e6) {
		for (var a0 = 0; a0 < 3; a0++) e6[a0] = ~~(e6[a0] / 4.04);
		return (e6[0] << 12) + (e6[1] << 6) + e6[2]
	}, this.ln = function(gP, ps, i5) {
		return "rgb(" + gP + "," + ps + "," + i5 + ")"
	}, this.lp = function(gP, ps, i5, hz) {
		return "rgba(" + gP + "," + ps + "," + i5 + "," + hz.toFixed(3) + ")"
	}, this.ot = function(il) {
		for (var e6 = il.split("(")[1].split(","), dz = (e6.length, bE.dz), a0 = 0; a0 < 3; a0++) dz[a0] = parseInt(e6[a0]);
		return dz
	}, this.op = function(xf, f7) {
		for (var e6 = xf.slice(xf.indexOf("(") + 1, xf.indexOf(")")).split(","), dz = bE.dz, a0 = 0; a0 < 3; a0++) dz[a0] = bB.o6(parseInt(e6[a0].trim(), 10) + f7, 0, 255);
		return 3 === e6.length ? this.ln(dz[0], dz[1], dz[2]) : this.lp(dz[0], dz[1], dz[2], parseFloat(e6[3].trim()))
	}, this.xg = function(e6) {
		for (var oE = "#", a0 = 0; a0 < 3; a0++) {
			var gP = e6[a0].toString(16);
			oE += 1 === gP.length ? "0" + gP : gP
		}
		return oE
	}, this.xh = function(oE) {
		var gP, ps;
		return oE.length < 7 ? p.l0 : (gP = parseInt(oE.slice(1, 3), 16), ps = parseInt(oE.slice(3, 5), 16), oE = parseInt(oE.slice(5, 7), 16), this.ln(gP, ps, oE))
	}
}

function x5() {
	this.xi = function(oE, font, maxWidth) {
		if (kv.font = font, kv.measureText(oE).width <= maxWidth) return oE;
		for (var a0 = oE.length - 1; 1 <= a0; a0--)
			if (oE = oE.substring(0, a0), kv.measureText(oE + "...").width <= maxWidth) return oE + "...";
		return "..."
	}
}

function xB() {
	var xj = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	this.xk = function(dp) {
		var xm, oE = new Date(dp.getTime() - 6e4 * dp.getTimezoneOffset()).toUTCString();
		return oE.length < 12 || (oE = oE.substring(5, oE.length), 0 === (dp = dp.getTimezoneOffset())) ? oE : (xm = (dp < 0 ? "+" : "-") + bB.em(Math.abs(dp), 60), 0 == (dp = Math.abs(dp) % 60) ? oE + xm : oE + xm + ":" + (dp < 10 ? "0" : "") +
			dp)
	}, this.xn = function(dp) {
		var oE = dp.toUTCString();
		return oE.length < 12 ? oE : function(dp) {
			return xj[dp.getUTCDay()]
		}(dp) + ", " + oE.substring(5, oE.length - 4)
	}
}

function x1() {
	var xp = null;
	this.tk = 0, this.qz = function() {
		var ds = bX.dW.data[5].value;
		xp = "px " + ds, "Trebuchet MS" !== ds && (xp += ", Trebuchet MS"), this.tk = gF(32, 32, ["a", "b", "m"], 200, xp)
	}, this.rg = function(u, iF) {
		var il = document.createElement("canvas");
		return il.width = u, il.height = iF, il
	}, this.getContext = function(gM, alpha) {
		return gM.getContext("2d", {
			alpha: alpha
		})
	}, this.getImageData = function(su, u, iF) {
		return su.getImageData(0, 0, u, iF)
	}, this.kz = function(type, size) {
		return size = size.toFixed(2), 0 === type ? size + xp : 1 === type ? "bold " + size + xp : 2 === type ? "lighter " + size + xp : 3 === type ? "italic " + size + xp : 4 === type ? "oblique " + size + xp : 5 === type ? "small-caps " +
			size + xp : "small-caps bold " + size + xp
	}, this.textAlign = function(gN, id) {
		gN.textAlign = 0 === id ? "left" : 1 === id ? "center" : "right"
	}, this.textBaseline = function(gN, id) {
		gN.textBaseline = 1 === id ? "middle" : 2 === id ? "bottom" : "top"
	}, this.og = function(d, code, color) {
		color = this.oe(bQ.xq) + " solid " + (color || p.lv);
		5 === (code = code || 5) ? d.style.border = color : 4 === code ? d.style.borderLeft = color : 2 === code ? d.style.borderBottom = color : 6 === code ? d.style.borderRight = color : d.style.borderTop = color
	}, this.pu = function(d, fg, fh, u, iF) {
		d = d.style;
		d.left = this.pv(fg), d.top = this.pv(fh), d.width = this.pv(u), d.height = this.pv(iF)
	}, this.oU = function(ds) {
		return 1 + ds * m.n.te()
	}, this.p9 = function(lZ, f6) {
		return lZ * this.oU(void 0 === f6 ? .5 : f6) * an.oV / an.oZ
	}, this.pt = function(lZ, f6) {
		return lZ * this.oU(void 0 === f6 ? .5 : f6) * an.oV
	}, this.pc = function(lZ, f6, xr) {
		return this.oU(f6) * Math.min(lZ * an.oV, xr * an.u) / an.oZ
	}, this.oe = function(ds) {
		return ds.toFixed(1) + "px"
	}, this.pv = function(ds) {
		return this.xt(ds).toFixed(1) + "px"
	}, this.xt = function(ds) {
		return ds / an.oZ
	}, this.xu = function(pO, xv) {
		for (var oE = "<ul>", ey = pO.length, a0 = 0; a0 < ey; a0++) oE += "<li>" + pO[a0] + ": <a href='" + xv[a0] + "' target='_blank'>" + xv[a0] + "</a></li>";
		return oE += "</ul>"
	}, this.xw = function(xx) {
		return "<a href='" + xx + "' target='_blank'>" + xx + "</a>"
	}, this.xy = function(d) {
		navigator.clipboard && navigator.clipboard.writeText(d.value)
	}, this.xz = function(d) {
		var dq = d.innerText;
		b2.l2.y0(dq, "✔") || (1 === dq.length ? d.innerText = "✔" : d.innerText = dq + " ✔", setTimeout(function() {
			d.innerText = dq
		}, 500))
	}, this.measureText = function(oE) {
		return kv.measureText(oE).width
	}
}

function x3() {
	this.fm = function(dn) {
		return 0 === dn ? 1 === a2.uZ && a2.g0 : 1 === dn ? 1 === a2.uZ && !a2.g0 : 2 === a2.uZ
	}, this.fn = function(player) {
		return 0 !== aX.kX[player] && 2 !== aX.y1[player]
	}, this.y2 = function(player) {
		return player === a2.et && 2 !== aX.y1[player]
	}, this.i9 = function(player) {
		return player >= a2.iq || 2 === aX.y1[player]
	}, this.jf = function(player) {
		return 0 !== aX.kX[player]
	}, this.ns = function(y3, y4) {
		return y3 !== y4
	}, this.nN = function(player, ds) {
		return ds = this.y5(player, ds), aX.eu[player] += ds, ds
	}, this.y5 = function(player, ds) {
		var y6 = aX.eu[player];
		return ds = Math.min(ds, aX.eq[player] * a2.ix - y6), ds = Math.min(ds, a2.y7 - y6), Math.max(ds, 0)
	}, this.nt = function(player, h6, y8, y9) {
		var y6 = aX.eu[player],
			h6 = bB.em(y6 * (h6 + 1), 1024),
			y8 = bB.em(y8 * y6, 1024),
			h6 = Math.min(h6, y6 - y8);
		return 10 === a2.jC && (h6 = av.yB(player, h6)), bE.dx[0] = h6, bE.dx[1] = y8, y9 <= h6
	}, this.nK = function(player, n1, n0) {
		var player = aX.eu[player],
			yA = bB.em(64 * player, 1024);
		return n1 = Math.min(n1, player - yA), yA += player = this.yD(n1), n1 = this.y5(n0, n1 -= player), bE.dx[0] = n1, bE.dx[1] = yA, 1 <= n1
	}, this.nM = function(n1, n0) {
		var yC = this.yD(n1);
		return n1 = this.y5(n0, n1 -= yC), bE.dx[0] = n1, bE.dx[1] = yC, 1 <= n1
	}, this.h5 = function(player, yE) {
		return bB.em(aX.eu[player] * (yE + 1), 1024)
	}, this.yD = function(yF) {
		return bB.em(Math.max(2142 - bT.er(), 0) * yF, 2142)
	}, this.o4 = function(player, y8) {
		aX.eu[player] -= bB.em(y8 * aX.eu[player], 1024)
	}, this.ep = function(player, yG) {
		var i5 = aX.eu[player];
		return aX.eu[player] = Math.max(i5 - yG, 0), Math.min(i5, yG)
	}, this.nw = function(player) {
		aX.eu[player] -= bE.dx[0] + bE.dx[1]
	}, this.nu = function(player, hs) {
		return (hs = Math.min(hs, a2.f2)) < a2.f2 && 0 === aX.kX[hs] && (hs = a2.f2), (bE.e2[0] = hs) === a2.f2 || gD(player, hs)
	}, this.ny = function(player, n0) {
		return 0 !== aX.kX[n0] && !gD(player, n0)
	}, this.yH = function(player, yI) {
		for (var f5, ey = ir, vF = 0, yJ = jx, a0 = 0; a0 < ey; a0++)
			if (f5 = yJ[a0], aS.uS(f5)) {
				if (player === f5) return !0;
				if (++vF > yI) return !1
			} return !1
	}, this.jr = function(f5) {
		var yK = a2.hm ? bV.vA() : aX.eq[jx[0]];
		return yK >= bB.em(f5 * a2.iW, 100)
	}
}

function x7() {
	this.yL = function(gM, yM, yN) {
		var u = gM.width,
			iF = gM.height,
			il = b2.ku.rg(u, iF),
			gN = b2.ku.getContext(il, !0),
			gM = (gN.drawImage(gM, 0, 0), gN.getImageData(0, 0, u, iF));
		return yM(gM.data, u, iF, yN), gN.putImageData(gM, 0, 0), il
	}, this.yO = function(rr, u, iF) {
		for (var fg = u - 1; 0 <= fg; fg--)
			for (var fh = iF - 1; 0 <= fh; fh--) {
				var a0 = 4 * (fg + fh * u);
				rr[3 + a0] = rr[a0], rr[a0] = rr[1 + a0] = rr[2 + a0] = 255
			}
	}, this.yP = function(rr, u, iF) {
		for (var fg = u - 1; 0 <= fg; fg--)
			for (var fh = iF - 1; 0 <= fh; fh--) {
				var a0 = 4 * (fg + fh * u);
				rr[1 + a0] > rr[2 + a0] + 10 && (rr[3 + a0] = rr[a0], rr[1 + a0] = rr[2 + a0])
			}
	}, this.yQ = function(rr, u, iF, yN) {
		for (var gap = Math.floor(Math.min(u, iF) * yN), fg = 0; fg < u; fg++)
			for (var a0, fh = 0; fh < iF; fh++)(fg < gap || fh < gap || u - gap <= fg || iF - gap <= fh) && (rr[3 + (a0 = 4 * (fg + fh * u))] = 255 - 255 * (rr[1 + a0] - rr[a0]) / (255 - rr[a0]))
	}, this.yR = function(rr, u, iF, yN) {
		for (var fg = u - 1; 0 <= fg; fg--)
			for (var fh = iF - 1; 0 <= fh; fh--) {
				var a0 = 4 * (fg + fh * u);
				rr[a0] = yN[0], rr[1 + a0] = yN[1], rr[2 + a0] = yN[2]
			}
	}, this.yS = function(rr, u, iF, yN) {
		for (var gap = Math.floor(u * yN), fg = 0; fg < u; fg++)
			for (var a0, fh = 0; fh < iF; fh++)(fg < gap || fh < gap || u - gap <= fg || iF - gap <= fh) && (rr[a0 = 4 * (fg + fh * u)] = rr[1 + a0] = rr[2 + a0] = 0)
	}, this.yT = function(rr, u, iF) {
		for (var fh, a0, fg = u - 1; 0 <= fg; fg--)
			for (fh = iF - 1; 0 <= fh; fh--) 200 < rr[1 + (a0 = 4 * (fg + fh * u))] && rr[1 + a0] - 20 > rr[a0] && rr[1 + a0] - 20 > rr[2 + a0] ? rr[a0] + rr[2 + a0] < 40 ? rr[3 + a0] = 0 : (rr[3 + a0] = rr[a0], rr[a0] = 255, rr[1 + a0] = 255,
				rr[2 + a0] = 255) : rr[a0] < 50 && rr[1 + a0] < 50 && rr[2 + a0] < 50 && (rr[a0] + rr[1 + a0] + rr[2 + a0] < 50 ? rr[3 + a0] = 180 : rr[3 + a0] = 180 + Math.floor(75 * (rr[a0] + rr[1 + a0] + rr[2 + a0] - 50) / 100))
	}, this.yU = function(rr, u, iF) {
		for (var fh, a0, fg = u - 1; 0 <= fg; fg--)
			for (fh = iF - 1; 0 <= fh; fh--) rr[1 + (a0 = 4 * (fg + fh * u))] > rr[a0] + 20 && rr[1 + a0] > rr[2 + a0] + 20 && rr[a0] + rr[2] < 40 && (rr[3 + a0] = 255 - rr[1 + a0], rr[a0] = rr[1 + a0] = rr[2 + a0] = rr[a0])
	}, this.xa = function(rr, u, iF, yN) {
		for (var gP = u >> 1, fg = 0; fg < u; fg++)
			for (var fh = 0; fh < iF; fh++) Math.sqrt((fg - gP) * (fg - gP) + (fh - gP) * (fh - gP)) > yN * gP && (rr[4 * (fg + fh * u) + 3] = 0)
	}
}

function x4() {
	this.l3 = function(ds) {
		var a0, yV, yW, yX, yY;
		if (ds < 0) return "-" + this.l3(Math.abs(ds));
		if (ds < 1e3) return ds.toString();
		for (yV = Math.floor(Math.log(ds + .5) / Math.log(10)) + 1, yW = Math.floor((yV - 1) / 3), yY = (yX = ds.toString()).substring(yV - 3, yV), a0 = 1; a0 < yW; a0++) yY = yX.substring(yV - 3 * (a0 + 1), yV - 3 * a0) + " " + yY;
		return yX.substring(0, yV - 3 * yW) + " " + yY
	}, this.yZ = function(f5, yV) {
		return f5.toFixed(yV) + "%"
	}, this.vV = function(ds, ya) {
		return ds.toFixed(bB.o6(Math.floor((void 0 === ya ? 3 : ya) - Math.log10(Math.max(ds, 1))), 0, 8))
	}, this.yb = function(ds, lZ, yV) {
		return (ds * lZ).toFixed(yV)
	}, this.vQ = function(username) {
		var yd, yc = username.indexOf("[");
		return !(yc < 0) && 1 < (yd = username.indexOf("]")) - yc && yd - yc <= 8 ? username.substring(yc + 1, yd).toUpperCase().trim() : null
	}, leaderboardFilter.parseClanFromPlayerName = this.vQ;
	this.ye = function(oE) {
		for (var hz = Math.floor(.5 * oE.length + .5), le = Math.floor(.5 * (hz - 1)), a0 = 0; a0 < le; a0++)
			for (var i5 = -1; i5 < 2; i5 += 2) {
				var il = hz + i5 * a0;
				if (" " === oE[il]) return [this.yf(oE.substring(0, il)), this.yg(oE.substring(il))]
			}
		return [oE.substring(0, hz), oE.substring(hz)]
	}, this.yg = function(oE) {
		for (var ey = oE.length, a0 = 0; a0 < ey; a0++)
			if (" " !== oE[a0]) return oE.substring(a0);
		return oE
	}, this.yf = function(oE) {
		for (var a0 = oE.length - 1; 0 <= a0; a0--)
			if (" " !== oE[a0]) return oE.substring(0, a0 + 1);
		return oE
	}, this.yh = function(oE, yi) {
		return oE.split("(")[0] + "(🧈 " + yi.toFixed(2) + ")"
	}, this.startsWith = function(oE, yj) {
		return oE.substring(0, yj.length) === yj
	}, this.y0 = function(oE, yj) {
		var ey = oE.length;
		return oE.substring(ey - yj.length, ey) === yj
	}
}

function yk() {
	this.hp = function(player, fv) {
		a8.si(player, bC.gW(fv), bC.gY(fv)) && (bT.dL = !0), a2.jE && this.hb()
	}, this.hb = function() {
		a2.g0 = !1;
		for (var a0 = 0; a0 < a2.iq; a0++) 0 !== aX.kX[a0] && 0 === aX.eq[a0] && a8.so(a0);
		0 !== aX.kX[a2.et] ? (bR.ew[7] = aX.eq[a2.et], bR.ew[8] = aX.eu[a2.et], aG.yl(), aL.ym(), a2.fk || a7.lO(aX.hK[a2.et] - 5, aX.hM[a2.et] - 5, aX.hL[a2.et] + 5, aX.hN[a2.et] + 5), ai.dE()) : aM.show(!1, !1, !1, !0), aC.yn(18), aW.yo(), aW
			.kH(!0), bF.k9.yp(), a2.nr = null, bP.yq = !0, bP.yr(), a2.jE && m.n.setState(1)
	}
}

function bi() {
	this.f2 = 512, this.y7 = 15e8, this.ys = 1e9, this.sb = 512, this.en = 2, this.et = 0, this.iq = 0, this.uc = 0, this.jB = 0, this.ub = 0, this.sL = 512, this.ix = 150, this.jE = !0, this.fk = !1, this.uZ = 0, this.iW = 0, this.lR = !1, this
		.g0 = !1, this.yt = !1, this.hm = !1, this.yu = 0, this.jC = 0, this.vH = !1, this.nr = null, this.ur = null, this.yv = 30, this.uW = 0, this.ue = 0, this.uq = 0, this.yw = function(yx, yy, t1, yz, z0, z1) {
			this.lR = !1, this.fk = z1, this.jC = yz, this.vH = z0, this.hm = this.jC < 7 || 9 === this.jC, this.uc = this.iq = t1.length, this.jE = 1 === this.uc, this.jC = 10 === this.jC && this.jE ? 7 : this.jC, this.jC = 8 === this.jC && 2 !==
				this.iq ? 7 : this.jC, this.yu = 9 === this.jC ? 2 : this.jC + 2, this.yv = this.iq <= 2 ? 30 : this.iq <= 50 ? 40 : 50, ay.j8 && !ay.j9.z2 ? this.yt = this.g0 = !1 : this.yt = this.g0 = this.hm || this.iq < 100, this.nr = this.g0 ?
				new yk : null, this.jE ? this.sL = aQ.z3() : this.sL = this.f2, this.jB = this.sL - this.iq, this.ub = 0, this.et = yy, this.uW = 0, this.ue = 0, this.uq = 0, ao.z4(yx), ap.dE(), aX.dE(t1), b0.mt.nd = [], bU.dE(t1), this.uZ = 1, bR
				.dE(), z5(), ac.z6(), bP.dE(), aV.dE(), aS.dE(t1), ag.dE(), bC.dE(), bD.dE(), ab.dE(), bH.dE(), bL.z7(), a3.dE(), aZ.w(), a8.dE(), z8(), b1.dE(yx, t1, yz, z0), bV.dE(), bF.dE(), bS.dE(), z9.putImageData(zA, 0, 0), aK.dE(), aH.dE(), aG
				.dE(), b3.dE(), al.dE(), aJ.dE(), aL.dE(), aB.dE(), aF.dE(), aC.dE(), aE.dE(), aA.dE(), aM.dE(), a6.dE(), a4.dE(), a5.dE(), eS(), aU.dE(), aW.dE(), av.dE(), aw.dE(), ar.dE(), 8 === this.jC ? (this.ur = new t0, this.ur.dE(t1)) : this
				.ur = null, bT.z7(), a7.lN(), 0 === aX.kX[a2.et] && aM.show(!1, !0), aW.kH(!0), ai.dE(), bT.dL = !0, this.fk || this.jE && this.g0 || m.n.setState(1)
		}, this.w6 = function(zC) {
			aq.k9.zD(), this.uZ = 0, bT.zE(), m.n.setState(0), zC || bK.da.show(), aP.setState(0), i.j(5, 5)
		}, this.zF = function() {
			return this.fk ? aB.fl || !b3.zG : this.jE && (aB.fl || this.g0)
		}, this.zH = function() {
			return 1 === this.uZ && !this.g0
		}
}

function dA() {
	this.th = 0, this.gap = 0, this.xq = 0, this.ob = 0, this.dE = function() {
		this.resize()
	}, this.resize = function() {
		this.th = .0022 * b2.ku.oU(.5) * an.oV, this.xq = this.th / an.oZ, this.gap = Math.max(Math.floor((m.n.te() ? .0114 : .01296) * an.oV), 2), this.ob = this.gap / an.oZ
	}
}

function d9() {
	this.zI = function() {
		return 2 === m.id ? 4 : m.n.te() ? 2 : 1
	}
}

function bt() {
	var ow, fg, fh, zJ, zK, zL, dp, player, zM, gap, zoom, nW, zN;

	function zX(player) {
		for (var a0 = nW.length - 1; 0 <= a0; a0--)
			if (nW[a0] === player) return 1
	}

	function zV(zS) {
		var a0, ey;
		if (-1 !== zS)
			for (ey = ow.length, a0 = 0; a0 < ey; a0++)
				if (ow[a0].tE && ow[a0].fg + 1 === zS % 4 && ow[a0].fh + 1 === zS >> 2) return a0;
		return -1
	}

	function zT(jm, jn) {
		var ps = gap / 2;
		return jm < fg - zJ - 3 * ps || fg + 3 * zJ + 5 * ps < jm || jn < fh - zJ - 3 * ps || fh + 2 * zJ + 3 * ps < jn ? -1 : 4 * (jn < fh - ps ? 0 : jn < fh + zJ + ps ? 1 : 2) + (jm < fg - ps ? 0 : jm < fg + zJ + ps ? 1 : jm < fg + 2 * zJ + 3 *
			ps ? 2 : 3)
	}
	this.zO = function() {
		var a0, i5, zR = [p.mH, p.mT, p.lt, p.mi, p.mb];
		for (ow = new Array(8), a0 = 0; a0 < 8; a0++) ow[a0] = {
			id: a0,
			tE: !1,
			jc: 0,
			gM: [],
			fg: 0,
			fh: 0
		};
		for (ow[0].colors = [0, 1, 2, 3], ow[0].fg = 0, ow[0].fh = 0, ow[1].colors = [0, 1, 4], ow[1].fg = 1, ow[1].fh = 0, ow[2].colors = [0, 2], ow[2].fg = -1, ow[2].fh = 0, ow[3].colors = [0], ow[3].fg = 0, ow[3].fh = 0, ow[4].colors = [0, 2],
			ow[4].fg = 1, ow[4].fh = 1, ow[5].colors = [3], ow[5].fg = 0, ow[5].fh = -1, ow[6].id = 20, ow[6].colors = [0], ow[6].fg = 1, ow[6].fh = -1, ow[7].id = 21, ow[7].colors = [0], ow[7].fg = 0, ow[7].fh = 1, a0 = 0; a0 < 8; a0++)
			for (i5 = 0; i5 < ow[a0].colors.length; i5++) ow[a0].gM.push(function(id, xV) {
				if (id < 20) return b2.gM.tS(aR.get(3), id, xV);
				var xV = aR.get(3).height,
					xW = b2.ku.rg(xV, xV),
					gN = b2.ku.getContext(xW);
				20 === id ? gN.drawImage(aR.get(18), 0, 0) : 21 === id && aa.rr.ti(aa.tB.tW + aa.tB.to, gN, 0, 0, xV);
				return xW
			}(ow[a0].id, zR[ow[a0].colors[i5]]))
	}, this.zQ = function() {
		return ow
	}, this.dE = function() {
		nW = [], fg = fh = dp = 0, zK = zL = -1e3, this.resize()
	}, this.resize = function() {
		zJ = Math.floor((m.n.te() ? .075 : .0468) * an.oV), zoom = zJ / aR.get(3).height, gap = Math.floor(zJ / 3)
	}, this.wZ = function(jm, jn) {
		return !!this.tE() && (bT.dL = !0, !!aa.rr.fo(jm, jn, player) || (jm = function(jm, jn) {
			zL = zK = -1e3;
			var zU = zV(zT(jm, jn));
			if (-1 === zU) return 0;
			if (1 !== ow[zU].colors[ow[zU].jc])
				if (5 === zU) {
					if (! function() {
							var dq = performance.now();
							zN + 4e3 < dq && (nW = []);
							zN = dq
						}(), zX(player)) return 1;
					nW.push(player), 16 < nW.length && nW.shift()
				} else if (6 === zU) {
				for (var a0 = nW.length - 1; 0 <= a0; a0--) 0 === aX.kX[nW[a0]] && nW.splice(a0, 1);
				0 < nW.length && (aw.zY(1, nW, !0) && b0.eo.nV(nW, player), nW = [])
			} else if (2 === zU) b0.g1.mz(aG.g8(), player);
			else if (3 === zU) a2.g0 && b0.g1.g2(zM);
			else if (0 === zU)
				if (0 === ow[0].jc) {
					if (a2.yt && aL.zZ() < 300) return 1;
					b0.g1.gA(aG.g8(), player)
				} else ar.gC(player, aG.g8());
			else if (1 === zU) bL.za(), b0.g1.g7(aG.g8(), zM);
			else {
				if (7 === zU) return bL.zb(), aa.rr.show(jm, jn), 2;
				if (4 !== zU) return 0;
				aw.zY(0, [player], !0) && b0.eo.nS(player)
			}
			return 1
		}(jm, jn), this.pr(), 2 === jm && (aa.rr.tE = !0), 0 < jm))
	}, this.wb = function(jm, jn) {
		this.tE() || (zK = jm, zL = jn, dp = performance.now())
	}, hoveringTooltip.display = function(mouseX, mouseY) {
		var coordX = bC.fs(mouseX),
			coordY = bC.fu(mouseY),
			coord = bC.fw(coordX, coordY),
			point = bC.fy(coord);
		if (coordX < 0 || coordY < 0) return;
		(function(jm, jn, fx) {
			aS.f0(fx) || -1 === (jm = bD.g5.zo(jm, jn)) ? aC.zn(fx) : aC.zp(jm)
		}(mouseX, mouseY, point))
	}
	this.click = function(jm, jn, wj) {
		var fr = bC.fs(jm),
			ft = bC.fu(jn),
			fv = bC.fw(fr, ft),
			fx = bC.fy(fv);
		if (!bC.fz(fr, ft)) return !1;
		fr = (m.n.te() ? .025 : .0144) * an.oV, ft = performance.now();
		if (Math.abs(jm - zK) > fr || Math.abs(jn - zL) > fr || dp + 500 < ft) return !1;
		if (dp = ft, wj && ! function(jm, jn, fx) {
				aS.f0(fx) || -1 === (jm = bD.g5.zo(jm, jn)) ? aC.zn(fx) : aC.zp(jm)
			}(jm, jn, fx), aB.fl || this.tE() || !b2.eo.fn(a2.et) || a2.fk) return this.pr(), !1;
		if (a2.g0) {
			if (!wj) {
				if (!aS.f0(fx)) return !1;
				zM = fv, ow[3].tE = !0
			}
		} else if (bD.g5.n4(fv)) wj || (bD.zf.zg = -1);
		else {
			if (wj) return !1;
			bD.g5.zh(jm, jn) || (2 === a2.uZ ? aS.f8(fx) && (player = aS.f9(fx), aS.uS(player)) && (ow[0].tE = !0, ow[0].jc = 1, ow[7].tE = !0) : aS.g3(fx) || (zM = fv, bD.g5.g6(a2.et, fv) && (ow[0].tE = !0, ow[0].jc = 1, ow[1].tE = !0, ow[1]
				.jc = bE.e1[2] ? 0 : 2), aS.g4(fx)) || (aS.fA(fx) ? (player = a2.f2, g9(a2.et) ? (ow[0].tE = !0, ow[0].jc = 0) : gB(a2.et, player) && (ow[0].tE = !0, ow[0].jc = 3)) : (player = aS.f9(fx)) === a2.et ? (ow[0].tE = !0, ow[0]
				.jc = 1, ow[7].tE = !0) : (ow[0].jc = 1, ow[5].tE = function(player) {
				return aS.uS(player) && !zX(player) && aw.zY(1, [player], !1)
			}(player), ow[7].tE = aS.uS(player), gD(player, a2.et) ? (ow[4].tE = aS.uS(player) && !aW.zj(player) && aw.zY(0, [player], !1), ow[6].tE = function(player) {
				if (0 === nW.length) return !1;
				if (performance.now() > zN + 4e3) return !(nW = []);
				return !zX(player) && ! function(player) {
					var a0;
					if (a2.hm)
						for (a0 = nW.length - 1; 0 <= a0; a0--)
							if (!gD(player, nW[a0])) return 1;
					return
				}(player)
			}(player), gE(a2.et, player) ? (ow[0].jc = 0, ow[0].tE = !0) : gB(a2.et, player) && (ow[0].jc = 3, ow[0].tE = !0), ow[0].tE = this.zl()) : (ow[2].tE = !0, ow[0].tE = !0))))
		}
		return this.ze(jm, jn)
	}, this.ze = function(jm, jn) {
		return fg = jm - Math.floor(zJ / 2), fh = jn - Math.floor(zJ / 2), !!this.tE()
	}, this.wF = function(jm, jn) {
		return !!this.tE() && (aa.rr.tE ? !aa.rr.tg(jm, jn) && (aa.rr.tE = !1, bT.dL = !0) : function(v7, jm, jn) {
			jm = zT(jm, jn);
			if (0 <= zV(jm)) return !1;
			if ((1 === jm || 6 === jm) && 0 <= zV(2)) return !1;
			if ((6 === jm || 9 === jm) && 0 <= zV(10)) return !1;
			return v7.pr(), bT.dL = !0
		}(this, jm, jn))
	}, this.pr = function() {
		for (var a0 = ow.length - 1; 0 <= a0; a0--) ow[a0].tE = !1, ow[a0].jc = 0;
		aa.rr.tE = !1
	}, this.tE = function() {
		return this.zl() || aa.rr.tE
	}, this.zl = function() {
		for (var ey = ow.length, a0 = 0; a0 < ey; a0++)
			if (ow[a0].tE) return !0;
		return !1
	}, this.kl = function() {
		if (this.tE())
			if (aa.rr.tE) aa.rr.kl();
			else {
				var a0, gN = kv,
					i5 = ow,
					ey = i5.length,
					zt = (zJ + gap) / zoom;
				for (gN.imageSmoothingEnabled = !0, gN.setTransform(zoom, 0, 0, zoom, fg, fh), a0 = 0; a0 < ey; a0++) i5[a0].tE && kv.drawImage(i5[a0].gM[i5[a0].jc], i5[a0].fg * zt, i5[a0].fh * zt);
				gN.imageSmoothingEnabled = !1, gN.setTransform(1, 0, 0, 1, 0, 0)
			}
	}
}

function bu() {
	var iF, gM, zu, zv, zw, zx = -1;

	function zy() {
		var zz, su = gM.getContext("2d", {
			alpha: !0
		});
		su.clearRect(0, 0, iF, iF), su.fillStyle = p.lq, su.fillRect(0, 0, iF, iF), 0 === zv && (su.fillStyle = p.lw, su.fillRect(0, 0, iF, iF)), su.fillStyle = p.lv, su.fillRect(0, 0, iF, 1), su.fillRect(0, 0, 1, iF), su.fillRect(0, iF - 1, iF, 1),
			su.fillRect(iF - 1, 0, 1, iF), zz = .9 * iF / aR.get(0).width, su.imageSmoothingEnabled = !0, su.setTransform(zz, 0, 0, zz, Math.floor((iF - zz * aR.get(0).width) / 2), Math.floor((iF - zz * aR.get(0).height) / 2)), su.drawImage(aR.get(
				0), 0, 0), su.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a01(jm, jn) {
		if (!aB.fl) return jm <= iF + bQ.gap && jn >= aG.fh ? 0 : -1;
		if (jm <= 4 * iF + bQ.gap) {
			if (jn >= aG.fh) return 0;
			if (jn >= aG.fh - iF - zw * bQ.gap) return 2
		} else if (jm <= 7 * iF + bQ.gap && jn >= aG.fh - iF - zw * bQ.gap) return 1;
		return -1
	}
	this.fl = !1, this.dE = function() {
		zv = -1, this.fl = !1, zw = m.n.te() ? 1.2 : .6, this.resize()
	}, this.resize = function() {
		iF = aG.iF, (gM = document.createElement("canvas")).width = iF, gM.height = iF, zu = b2.ku.kz(1, (m.n.te() ? .5 : .45) * iF), zy()
	}, this.ws = function() {
		this.fl = !this.fl, this.fl ? (bK.dY.hideCMPButton(), b3.wr(!1), a2.fk && b3.zG && b3.wt(!0), this.a00()) : (zv = -1, zy(), !a2.jE || 1 !== a2.uZ || a2.g0 || a2.fk || m.n.setState(1)), bT.dL = !0
	}, this.a00 = function() {
		(a2.jE || a2.fk) && 1 === a2.uZ && (aK.kH(!0), a2.g0 || setTimeout(function() {
			bP.uk()
		}, 0), m.n.setState(0))
	}, this.fo = function(jm, jn) {
		return 0 <= (zx = a01(jm, jn))
	}, this.wF = function(jm, jn) {
		jm = a01(jm, jn);
		jm !== zv && (zv = jm, this.fl || zy(), bT.dL = !0)
	}, this.wG = function(jm, jn) {
		var jc = a01(jm, jn);
		if (-1 === jc) return !1;
		if (zx !== jc) return !1;
		if (this.fl) {
			if (a2.lR) return 0 <= jc && b3.wr(!1), !a2.fk;
			if (0 === jc) a2.w6();
			else if (1 === jc) this.ws();
			else if (2 === jc) i.j(1, 0);
			else {
				if (! function() {
						if (a2.jE || 1 !== a2.uZ || a2.fk || bS.tE) return 1;
						aB.ws()
					}()) return !1;
				b9.wa(jm, jn) || aA.wb(jm, jn)
			}
			return !0
		}
		return 0 === jc && (this.ws(), !0)
	}, this.kl = function() {
		var u;
		this.fl ? (u = Math.floor(5.5 * iF), kv.setTransform(1, 0, 0, 1, bQ.gap, aG.fh), kv.fillStyle = p.lq, kv.fillRect(0, 0, u, iF), 0 === zv ? (kv.fillStyle = p.lw, kv.fillRect(0, 0, 4 * iF, iF)) : 1 === zv && (kv.fillStyle = p.lw, kv
				.fillRect(4 * iF, 0, Math.floor(1.5 * iF), iF)), kv.fillStyle = p.lv, kv.fillRect(0, 0, u, 1), kv.fillRect(0, 0, 1, iF), kv.fillRect(4 * iF, 0, 1, iF), kv.fillRect(0, iF - 1, u, 1), kv.fillRect(u - 1, 0, 1, iF), kv.font = zu,
			b2.ku.textBaseline(kv, 1), b2.ku.textAlign(kv, 1), kv.fillText(L(18), 2 * iF, .54 * iF), u = .4 * iF, aB.a06(bQ.gap + 4 * iF + (1.5 * iF - u) / 2, aG.fh + .3 * iF, u), u = 1, kv.setTransform(1, 0, 0, 1, bQ.gap, aG.fh - u * zw * bQ
				.gap - u * iF), kv.fillStyle = p.lq, kv.fillRect(0, 0, 4 * iF, iF), zv === u + 1 && (kv.fillStyle = p.lw, kv.fillRect(0, 0, 4 * iF, iF)), kv.fillStyle = p.lv, kv.fillRect(0, 0, 4 * iF, 1), kv.fillRect(0, 0, 1, iF), kv
			.fillRect(4 * iF, 0, 1, iF), kv.fillRect(0, iF - 1, 4 * iF, 1), kv.fillText(L(0 === u ? 18 : 19), 2 * iF, .54 * iF), kv.setTransform(1, 0, 0, 1, 0, 0)) : kv.drawImage(gM, bQ.gap, aG.fh)
	}, this.a05 = function(player) {
		return 0 !== aX.kX[player] && 2 !== a2.uZ && aS.uS(player)
	}, this.a06 = function(fg, fh, ey) {
		kv.setTransform(1, 0, 0, 1, fg, fh), kv.lineWidth = bQ.th, kv.strokeStyle = p.lv, kv.beginPath(), kv.moveTo(0, 0), kv.lineTo(ey, ey), kv.moveTo(0, ey), kv.lineTo(ey, 0), kv.stroke()
	}
}

function bv() {
	var a08, iF, a09, a0A, a0B, a0C, a0D, a0E, a0F;

	function kx() {
		return aG.a0Z(aC.a0V()) ? al.tE ? aG.fh - aG.iF - 2 * a09 : aG.fh - a09 : b3.a0Z(aC.a0Y()) ? al.tE ? b3.kx() - aG.iF - 2 * a09 : b3.kx() - a09 : al.tE ? an.iF - aG.iF - (bY.zI() + 1) * a09 : an.iF - bY.zI() * bQ.gap
	}

	function a0L(dq, oE, id, f5, a0P, a0Q, rz, a0R, a0S, a0T) {
		var a0, su, xW, oN, e6, a0e = void 0 !== a0S,
			u = Math.floor(aF.measureText(oE, aC.zu) + 1.5 * a0A + (a0e ? iF : 1.5 * a0A));
		if (bT.dL = !0, u + a09 > an.u && !a0e && 50 !== id && 20 < oE.length) a0L(dq, (e6 = b2.l2.ye(oE))[0], id, f5, a0P, a0Q, rz, a0R, a0S, a0T), a0L(dq, e6[1], id, f5, a0P, a0Q, rz, a0R, a0S, a0T);
		else if (e6 = u + (50 === id ? a0B : 0), (xW = document.createElement("canvas")).width = u, xW.height = iF, (su = xW.getContext("2d", {
				alpha: !0
			})).font = aC.zu, b2.ku.textBaseline(su, 1), b2.ku.textAlign(su, 0), su.clearRect(0, 0, u, iF), su.fillStyle = a0Q, su.fillRect(0, 0, u, iF), su.fillStyle = a0P, su.fillText(oE, Math.floor(1.5 * a0A), Math.floor(iF / 2)), a0e && (su
				.imageSmoothingEnabled = !0, aa.rr.ti(a0S, su, u - iF, 0, iF)), 0 === (oN = {
				dp: dq,
				oE: oE,
				id: id,
				player: f5,
				gM: xW,
				a0P: a0P,
				a0Q: a0Q,
				u: u,
				a0W: e6,
				rz: rz,
				a0R: a0R,
				a0S: a0S,
				a0T: a0T
			}).dp || 0 < a08.length && 0 < a08[0].dp) a08.unshift(oN);
		else {
			for (a0 = 1; a0 < a08.length; a0++)
				if (0 < a08[a0].dp) return void a08.splice(a0, 0, oN);
			a08.push(oN)
		}
	}

	function a0N(gP, ps, i5) {
		return "rgb(" + gP + "," + ps + "," + i5 + ")"
	}

	function a0f(id, jM) {
		for (var ey = a08.length, a0 = 0; a0 < ey; a0++) a08[a0].id === id && jM-- <= 0 && (a08.splice(a0, 1), a0--, ey--)
	}

	function a0g(id, player) {
		for (var a0y = !1, a0 = a08.length - 1; 0 <= a0; a0--) a08[a0].id !== id || player !== a2.f2 && a08[a0].player !== player || (a08.splice(a0, 1), a0y = !0);
		return a0y
	}

	function a14(oE) {
		a0L(340, oE, 6, 0, a0N(215, 245, 255), p.ls, -1, !1)
	}
	this.a0G = "", this.dE = function() {
		var self;
		a0E = 0, a0D = m.n.te() ? 7 : 12, a0C = {
				t1: [0, 0, 0],
				a0H: [0, 0, 0],
				lL: [220, 180, 180],
				qG: [0, 0, 0],
				il: [0, 0, 0]
			}, a08 = [], this.resize(), a2.g0 && this.ul(0, 18), a14(L(59, [bI.j9.s8[bI.s9].name])), a14(L(60, [bI.eT - 2, bI.eU - 2])), a14(L(61, [ac.a15])), ac.a15 !== ac.a16 && a14(L(62, [ac.a16, b2.l2.yZ(100 * ac.a16 / ac.a15, 1)])), 0 < ac
			.a17 && a14(L(63, [ac.a17, b2.l2.yZ(100 * ac.a17 / ac.a15, 1)])), 0 < ac.a18 && a14(L(64, [ac.a18, b2.l2.yZ(100 * ac.a18 / ac.a15, 1)])), 10 === a2.jC && a0L(120, L(65), 6, 0, a0N(235, 255, 120), p.ls, -1, !1), 0 !== (self = this).a0G
			.length && (a0L(200, self.a0G, 0, 0, p.lv, p.ls, -1, !1), self.a0G = ""), this.a0K()
	}, this.a0K = function() {
		var a0, ey;
		if (ay.j8)
			for (ey = ay.j9.a0M.length, a0 = 0; a0 < ey; a0++) a0L(400, ay.j9.a0M[a0], 6, 0, a0N(255, 255, 255), p.ls, -1, !1)
	}, this.resize = function() {
		var a0O, a0;
		if (iF = (iF = Math.floor((m.n.te() ? .031 : .0249) * an.oV)) < 10 ? 10 : iF, this.fontSize = Math.floor(2 * iF / 3), this.zu = b2.ku.kz(1, this.fontSize), a09 = bQ.gap, a0A = Math.floor(iF / 5), 0 < a08.length)
			for (a0O = a08, a08 = [], a0 = a0O.length - 1; 0 <= a0; a0--) a0L(a0O[a0].dp, a0O[a0].oE, a0O[a0].id, a0O[a0].player, a0O[a0].a0P, a0O[a0].a0Q, a0O[a0].rz, a0O[a0].a0R, a0O[a0].a0S, a0O[a0].a0T);
		this.a0U()
	}, this.a0U = function() {
		a0F = document.createElement("canvas");
		var oE = L(20),
			su = (a0B = aF.measureText(oE, this.zu) + 5 * a0A, a0F.height = iF, a0F.width = a0B, a0F.getContext("2d", {
				alpha: !0
			}));
		su.font = this.zu, b2.ku.textBaseline(su, 1), b2.ku.textAlign(su, 1), su.clearRect(0, 0, a0B, iF), su.fillStyle = p.q, su.fillRect(0, 0, a0B, iF), su.fillStyle = p.lv, su.fillText(oE, Math.floor(a0B / 2), Math.floor(iF / 2))
	}, this.a0V = function() {
		var ey;
		return al.tE ? al.u : 0 === (ey = a08.length) ? 0 : 1 === ey ? a08[0].a0W : a0X(a08[0].a0W, a08[1].a0W)
	}, this.a0Y = function() {
		var ey = a08.length;
		return al.tE ? ey ? a0X(al.u, a08[0].a0W) : al.u : 0 === ey ? 0 : 1 === ey ? a08[0].a0W : 2 === ey ? a0X(a08[0].a0W, a08[1].a0W) : a0X(a0X(a08[0].a0W, a08[1].a0W), a08[2].a0W)
	}, this.fo = function(fg, fh) {
		for (var kq, a0a, a0b = kx(), a0 = a08.length - 1; 0 <= a0; a0--)
			if ((a0a = a0b - (a0 + 1) * iF) <= fh && fh < a0a + iF) return 50 === a08[a0].id ? fg >= an.u - a0B - a09 - a08[a0].u && (fg >= an.u - a0B - a09 ? b0.eo.nS(a08[a0].player) : a7.lP(a08[a0].player, 800, !1, 0), !0) : fg >= an.u - a08[
				a0].u - a09 && (736 === a08[a0].id ? (a0a = a08[a0].oE.split(" "), window.open(a0a[a0a.length - 1], "_blank")) : a08[a0].a0R && (a08[a0].a0T && a08[a0].a0T.fv ? (a0a = a08[a0].a0T.fv, kq = bC.gW(a0a) - 10, a0a = bC.gY(
				a0a) - 10, a7.lO(kq, a0a, 19 + kq, 19 + a0a)) : (a7.lP(a08[a0].player, 800, !1, 0), 0 <= a08[a0].rz && (kq = a08[a0].rz, a08[a0].rz = a08[a0].player, a08[a0].player = kq))), !0);
		return !1
	}, this.uy = function(dq, oE, id, f5, a0P, a0Q, rz, a0R, a0S, a0T) {
		a0L(dq, oE, id, f5, a0P, a0Q, rz, a0R, a0S, a0T)
	}, this.a0d = function(vS) {
		a0L(300, vS, 252, 0, p.lv, p.ls, -1, !1)
	}, this.yn = function(id) {
		for (var a0 = a08.length - 1; 0 <= a0; a0--) a08[a0].id === id && (a08[a0].dp = 1)
	}, this.ul = function(player, id) {
		0 === id ? (bR.ew[player < a2.iq ? 4 : 3]++, aF.hp(player, 0), a0f(423, 0), a0L(160, L(21, [aX.l4[player]]), 423, player, "rgb(10,220,10)", p.ls, -1, !1)) : 1 === id ? (a0g(50, a2.f2), aF.hp(player, 1), a0L(360, L(22, [aX.l4[player]]), 0,
			player, p.mV, p.ls, -1, !0), a7.lP(player, 2700, !1, 0)) : 2 === id ? (aF.hp(player, 2), a0L(0, L(23), 0, player, "rgb(10,255,255)", p.ls, -1, !0), a7.lP(player, 2700, !1, 0)) : 3 === id ? (aF.hp(player, 2), a0L(0, L(24, [aX.l4[
			player]]), 0, player, p.lv, p.ls, -1, !0), a7.lP(player, 2700, !1, 0)) : 4 === id ? this.a0h(1, player, player) : 5 === id ? 2 !== aX.y1[player] && aS.uS(a2.et) && (function(id, kT) {
			var a0, a0r = 0,
				ey = a08.length;
			for (a0 = 0; a0 < ey; a0++)
				if (a08[a0].id === id && kT <= ++a0r) return a08.splice(a0, 1)
		}(1, 5), aW.a0j(player) ? a0L(180, L(25, [aX.l4[player]]), 1, player, a0N(255, 200, 180), p.ls, -1, !0) : (a0f(573, 0), a0L(180, L(26, [aX.l4[player]]), 573, player, p.mV, p.ls, -1, !0))) : 18 === id ? a0L(255, L(27), 18, 0, p.lv, p
			.ls, -1, !1) : 21 === id ? a0L(220, L(28), id, 0, p.lv, p.ls, -1, !1) : 22 === id ? this.a0h(2, player, player) : 59 === id && a0L(0, L(29), id, 0, p.mh, p.ls, 0, !1)
	}, this.vx = function(vS) {
		a0L(200, L(30, [vS]), 94, 0, p.lv, p.mR, -1, !1)
	}, this.us = function(a0k) {
		if (a2.et === a0k && !a2.jE)
			wins_counter++, window.localStorage.setItem("fx_winCount", wins_counter),
			a0L(0, "Your Win Count is now " + wins_counter, 3, a0k, p.lv, p.ls, -1, !0);
		aF.hp(a0k, 2), a2.iq < 100 ? a0L(0, L(24, [aX.l4[a0k]]), 3, a0k, p.lv, p.ls, -1, !0) : a0L(0, L(31, [aX.l4[a0k]]), 3, a0k, p.lv, p.ls, -1, !0)
	}, this.zn = function(fx) {
		var a0l = "(" + bC.gW(fx >> 2) + ", " + bC.gY(fx >> 2) + ")",
			a0R = !1,
			player = 0;
		aS.f0(fx) ? aS.fA(fx) ? a0l = L(32, [a0l]) : (player = aS.f9(fx), a0l = L(33, [b2.su.xi(aX.vR[player], b2.ku.kz(0, 10), 150), b2.l2.l3(aX.eu[player]), b2.l2.l3(aX.eq[player]), a0l]), a0R = !0) : a0l = aS.g3(fx) ? L(34, [a0l]) : L(35, [
			a0l]), bT.dL = !0, a0f(55, 0), a0L(220, a0l, 55, player, p.lv, p.ls, -1, a0R)
	}, this.zp = function(a0m) {
		var ja = bD.k9,
			player = ja.a0n[a0m] >> 3;
		bT.dL = !0, a0f(55, 0), a0L(220, L(36, [aX.l4[player], ja.a0o[a0m]]), 55, player, p.lv, p.ls, -1, !0)
	}, this.nA = function(mw, a0p, nB) {
		mw === a2.et ? a0L(175, " " + L(37, [aX.l4[a0p]]), 1001, a0p, a0N(200, 255, 210), p.ls, -1, !0, nB) : this.a0q(mw, nB)
	}, this.a0q = function(mw, nB) {
		a0f(1e3, 0), a0L(175, aX.l4[mw] + ": ", 1e3, mw, p.lv, "rgba(5,60,25,0.9)", -1, !0, nB)
	}, this.uz = function() {
		var vS;
		a2.ue ? (vS = L(38), aF.ux(L(39), 2, 1, 12), a0L(0, vS, 40, 0, "rgb(10,220,10)", p.ls, -1, !1)) : (vS = L(40), aF.ux(L(41), 2, 0, 16), a0L(0, vS, 41, 0, p.lv, p.ls, -1, !1))
	}, this.t2 = function(t1) {
		a0L(300, t1[0].name + " [" + a2.ur.t8(t1[0].t5) + "] vs " + t1[1].name + " [" + a2.ur.t8(t1[1].t5) + "]", 65, 0, p.l0, "rgba(100,255,255,0.75)", -1, !1)
	}, this.a0s = function(vS) {
		a0L(200, vS, 0, 0, "rgb(40,255,200)", "rgba(10,60,40,0.9)", -1, !1)
	}, this.a0t = function(a0u) {
		a0L(0, L(a0u ? 42 : 43), 247, 0, p.mg, p.ls, -1, !1)
	}, this.tA = function(t1, t7, t9, a0v) {
		a0L(0, t1[0].name + ": " + a2.ur.t8(t1[0].t5) + " -> " + t7, 66, 0, p.lv, a0v[0], -1, !1), a0L(0, t1[1].name + ": " + a2.ur.t8(t1[1].t5) + " -> " + t9, 66, 1, p.lv, a0v[1], -1, !1)
	}, this.nT = function(player, id) {
		0 === id ? a0g(50, player) ? (a0L(128, L(44, [aX.l4[player]]), 52, player, a0N(180, 255, 180), p.ls, -1, !0), aW.o7(player, 2, 255)) : a0L(384, L(45, [aX.l4[player]]), 51, player, a0N(210, 210, 255), p.ls, -1, !0) : a0g(51, player) ? (
			a0L(128, L(46, [aX.l4[player]]), 52, player, p.lv, "rgba(60,120,10,0.9)", -1, !0), aW.o7(player, 2, 255)) : (a0L(384, L(47, [aX.l4[player]]), 50, player, p.lv, "rgba(90,90,90,0.9)", -1, !0), aW.o7(player, 2, 96))
	}, this.nX = function(t1, target) {
		var color = a0N(210, 255, 210);
		1 < t1.length ? a0L(230, L(48, [t1.length, aX.l4[target]]), 66, target, color, p.ls, -1, !0) : a0L(230, L(49, [aX.l4[t1[0]], aX.l4[target]]), 66, t1[0], color, p.ls, target, !0)
	}, this.a0w = function(player, target) {
		a0L(230, L(50, [aX.l4[player], aX.l4[target]]), 66, player, p.lv, "rgba(75,65,5,0.9)", target, !0)
	}, this.a0x = function(id, jM) {
		a0f(id, jM)
	}, this.a0z = function(id) {
		for (var a0 = a08.length - 1; 0 <= a0; a0--)
			if (a08[a0].id === id) return a08[a0];
		return null
	}, this.ug = function(id, player) {
		a0g(id, player)
	}, this.nO = function(a10, a11, player) {
		2 !== aX.y1[a2.et] && (a0L(200, 1 === a10 ? L(51, [aX.l4[player]]) : L(52, [a10, aX.l4[player]]), 30, player, "rgb(190,255,190)", p.ls, -1, !0), a11) && a0L(30, 1 === a11 ? L(53) : L(54, [a11]), 30, 0, p.lv, p.ls, -1, !1)
	}, this.a13 = function(a10, player) {
		2 !== aX.y1[a2.et] && (a0f(31, 0), 2 === aX.y1[player] || player >= a2.iq ? a0L(150, 1 === a10 ? L(55, [aX.l4[player]]) : L(56, [aX.l4[player], a10]), 31, player, p.l0, "rgba(205,205,205,0.9)", -1, !0) : a0L(150, 1 === a10 ? L(57, [aX.l4[
			player]]) : L(58, [aX.l4[player], a10]), 31, player, p.l0, "rgba(205,255,205,0.9)", -1, !0))
	}, this.uf = function(bb) {
		for (var il = bT.er(), a0 = 2; 0 <= a0; a0--) 0 < a0C.qG[a0] && (bb || a0C.il[a0] < il - 220) && this.a19(a0)
	}, this.a19 = function(id) {
		var oE, ey = a0C.qG[id],
			player = a0C.t1[id];
		a0C.qG[id] = 0, 1 === ey ? (0 === id ? oE = L(66, [aX.l4[player], aX.l4[a0C.a0H[0]]]) : 1 === id ? oE = L(67, [aX.l4[player]]) : 2 === id ? oE = L(68, [aX.l4[player]]) : 3 === id && (oE = L(69, [aX.l4[player]])), a0f(7, 0), a0L(a0C.lL[
			id], oE, 7, a0C.a0H[id], p.lv, p.ls, -1, !0)) : (oE = L(0 === id ? 70 : 1 === id ? 71 : 72, [ey]), a0f(7, 0), a0L(a0C.lL[id], oE, 7, player, p.lv, p.ls, -1, !1))
	}, this.a0h = function(id, pf, rz) {
		var il = bT.er(),
			ey = a0C.qG[id] + 1;
		a0C.qG[id]++, a0C.t1[id] = pf, a0C.a0H[id] = rz, 1 === ey && (a0C.il[id] = il), (1 === ey && (a2.uc < 32 || 2 === a2.uZ) || 1 < ey && (a0C.il[id] < il - 140 || 2 === a2.uZ)) && this.a19(id)
	}, this.hb = function() {
		for (var ge = (ge = a08.length - a0D) <= 1 ? 1 : ge * ge, a0 = a08.length - 1; 0 <= a0; a0--) 0 < a08[a0].dp && (a08[a0].dp -= ge, a08[a0].dp <= 0) && (bT.dL = !0, a08.splice(a0, 1));
		! function() {
			var jM, a0;
			if (128 !== a0E && !(++a0E < 128))
				for (jM = 5, a0 = ir - 1; 0 <= a0; a0--) 1 === aX.y1[it[a0]] && 0 < jM-- && a0L(240, L(69, [aX.l4[it[a0]]]), 1, it[a0], p.l0, "rgba(255,255,255,0.75)", -1, !0)
		}(), this.uf(!1)
	}, this.kl = function() {
		for (var sK, fh = kx(), a0 = a08.length - 1; 0 <= a0; a0--) sK = fh - (a0 + 1) * iF, 50 === a08[a0].id ? (kv.drawImage(a08[a0].gM, an.u - a08[a0].u - a0B - a09, sK), kv.drawImage(a0F, an.u - a0B - a09, sK)) : kv.drawImage(a08[a0].gM, an
			.u - a08[a0].u - a09, sK)
	}
}

function bw() {
	var a1B, a1C, a1D, u, iF, font;

	function a1H(a1I) {
		return a1I < 10 ? "0" + a1I : String(a1I)
	}
	this.dE = function() {
		void 0 === u && this.resize(), this.setTime()
	}, this.resize = function() {
		u = Math.floor((m.n.te() ? .53 : .36) * an.oV), iF = Math.floor(.065 * u), font = b2.ku.kz(1, Math.floor(.9 * iF)), a1D--, this.setTime()
	}, this.hb = function() {
		this.setTime() && (bT.dL = !0)
	}, this.setTime = function() {
		var dq = new Date,
			a1F = dq.getUTCMinutes(),
			dq = dq.getUTCSeconds();
		return a1C = 3600 - 60 * a1F - dq, a1C %= 900, a1B = "Next Contest: " + a1H(Math.floor(a1C / 60)) + ":" + a1H(a1C % 60), a1D !== (a1D = 60 * a1F + dq) && (u = aF.measureText(a1B, font), u += Math.floor(.4 * iF), !0)
	}, this.kl = function() {
		kv.lineWidth = 1 + Math.floor(iF / 15), 7 === aP.vt() && aj.a1J() + 2 * bQ.gap > .5 * (an.iF - u) ? kv.translate(an.u - iF, Math.floor(aj.a1J() + 2 * bQ.gap + u)) : kv.translate(an.u - iF, Math.floor(.5 * (an.iF + u))), kv.rotate(-Math
			.PI / 2), kv.fillStyle = p.lv, kv.fillRect(0, 0, u, iF), kv.strokeStyle = p.l0, kv.strokeRect(0, 0, u, iF + 10), kv.fillStyle = p.l0, kv.font = font, b2.ku.textBaseline(kv, 1), b2.ku.textAlign(kv, 1), kv.fillText(a1B, Math.floor(
			u / 2), Math.floor(.59 * iF)), kv.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function bx() {
	var a08, a1K, zu, iF, a1L;

	function a1N(a0) {
		var a1P = !0,
			gZ = p.lv,
			u = (a08[a0].hs === a2.f2 ? a08[a0].su.fillStyle = p.m5 : (aS.a1Q(a08[a0].hs), a08[a0].su.fillStyle = b2.color.lp(bE.dz[0], bE.dz[1], bE.dz[2], .87), 400 < b2.od.xJ(bE.dz, 0, 2) && (a1P = !1, gZ = p.l0)), a08[a0].gM.width),
			pd = (a08[a0].su.clearRect(0, 0, u, iF), a08[a0].su.fillRect(0, 0, u, iF), a08[a0].su.fillStyle = gZ, ! function(su, u, iF) {
				su.fillRect(0, 0, u, 1), su.fillRect(0, iF - 1, u, 1), su.fillRect(0, 0, 1, iF), su.fillRect(u - 1, 0, 1, iF)
			}(a08[a0].su, u, iF), a1K + 2 * iF < u && (a08[a0].su.fillRect(u - a1K - iF, 0, 1, iF), a08[a0].su.fillText(aX.l4[a08[a0].hs], Math.floor((u - a1K) / 2), Math.floor(.57 * iF))), 0 !== a08[a0].id ? 0 : iF);
		a08[a0].su.fillText(b2.l2.l3(a08[a0].ht), Math.floor(u - a1K / 2 - pd), Math.floor(.57 * iF)),
			function(a0, u, pd, a1P) {
				a08[a0].su.fillStyle = a1P ? p.lx : p.lt;
				a1P = Math.floor(a1K * a08[a0].ht / a08[a0].a1W);
				a08[a0].su.fillRect(Math.floor(u - a1K - pd), iF - a1L, a1P, a1L)
			}(a0, u, pd, a1P), 0 === a08[a0].id ? (a1T(a0, u, a1P, gZ), function(a0, u, a1P) {
				a08[a0].su.strokeStyle = a1P ? p.mA : p.mJ, a08[a0].su.fillRect(iF, 0, 1, iF);
				a1P = u - iF;
				a08[a0].su.beginPath(), a08[a0].su.moveTo(Math.floor(.3 * iF + a1P), Math.floor(iF / 2)), a08[a0].su.lineTo(Math.floor(iF - .3 * iF + 0 + a1P), Math.floor(iF / 2)), a08[a0].su.stroke(), a08[a0].su.beginPath(), a08[a0].su.moveTo(
					Math.floor(iF / 2 + a1P), Math.floor(.3 * iF)), a08[a0].su.lineTo(Math.floor(iF / 2 + a1P), Math.floor(iF - .3 * iF + 0)), a08[a0].su.stroke()
			}(a0, u, a1P)) : a1T(a0, 2 * iF, a1P, gZ)
	}

	function a1T(a0, u, a1P, gZ) {
		a08[a0].su.strokeStyle = a08[a0].a1X ? p.m3 : a1P ? p.mN : p.mO, a08[a0].su.fillStyle = gZ, a08[a0].su.fillRect(u - iF, 0, 1, iF), a08[a0].su.lineWidth = Math.max(Math.floor(iF / 12), 3), a08[a0].su.lineCap = "round";
		a1P = .35;
		u = iF + 1, a08[a0].su.beginPath(), a08[a0].su.moveTo(Math.floor(u - a1P * iF + 0), Math.floor(a1P * iF)), a08[a0].su.lineTo(Math.floor(u - iF + a1P * iF), Math.floor(iF - a1P * iF + 0)), a08[a0].su.stroke(), a08[a0].su.beginPath(), a08[a0]
			.su.moveTo(Math.floor(u - iF + a1P * iF), Math.floor(a1P * iF)), a08[a0].su.lineTo(Math.floor(u - a1P * iF + 0), Math.floor(iF - a1P * iF + 0)), a08[a0].su.stroke()
	}

	function a1i(ey) {
		for (var ht, a0 = ey - 1; 0 <= a0; a0--) ht = aU.ef(a2.et, a0), a08[a0].ht !== ht && (a08[a0].ht = ht, a08[a0].a1W = ht > a08[a0].a1W ? ht : a08[a0].a1W, a08[a0].a1O = !0)
	}

	function a1M(a1k) {
		a1k.gM = document.createElement("canvas"), bI.rk.font = zu;
		var u = a1K;
		a1k.hs < a2.f2 && 0 === a1k.id && (u += Math.floor(bI.rk.measureText(aX.l4[a1k.hs] + "000").width)), u += iF, 0 === a1k.id && (u += iF), a1k.gM.width = u, a1k.gM.height = iF, a1k.su = a1k.gM.getContext("2d", {
			alpha: !0
		}), a1k.su.font = zu, b2.ku.textBaseline(a1k.su, 1), b2.ku.textAlign(a1k.su, 1)
	}

	function a1e(a0) {
		return aJ.a1m() ? an.u - a08[a0].gM.width - bQ.gap : aJ.fg
	}

	function a1f(a0) {
		return Math.floor(2 * bQ.gap + (aJ.a1m() ? aL.iF + bQ.gap : 0) + aJ.iF + a0 * (1.3 * iF))
	}
	this.dE = function() {
		a08 = [], this.resize()
	}, this.resize = function() {
		zu = aC.zu, iF = aC.fontSize + 5, iF = Math.floor(1.25 * iF), m.n.te() && (iF = Math.floor(1.25 * iF)), a1L = Math.floor(.15 * iF), bI.rk.font = zu, a1K = Math.floor(bI.rk.measureText("02 000 000 0000").width);
		for (var a0 = a08.length - 1; 0 <= a0; a0--) a1M(a08[a0]), a1N(a0)
	}, this.kH = function() {
		for (var a0 = a08.length - 1; 0 <= a0; a0--) a08[a0].a1O && (a08[a0].a1O = !1, a1N(a0))
	}, this.fo = function(jm, fh) {
		if (2 !== a2.uZ && 0 !== aX.kX[a2.et] && !a2.fk && aS.uS(a2.et))
			for (var a1Z, a1a, a1b, a1c = m.n.te() ? iF : 0, a1d = m.n.te() ? Math.floor(.15 * iF) : 0, a0 = a08.length - 1; 0 <= a0; a0--)
				if (a1Z = a1e(a0), a1a = a1f(a0), a1b = a08[a0].gM.width, a1a - a1d <= fh && fh <= a1a + iF + a1d) {
					if (a1Z - a1c <= jm && jm <= a1Z + iF + a1c) return a08[a0].a1X || (a08[a0].a1O = !0, a08[a0].a1X = !0, 0 === a08[a0].id && b0.g1.n8(a08[a0].hs)), !0;
					if (0 === a08[a0].id && a1Z + a1b - iF - a1c <= jm && jm <= a1Z + a1b + a1c) return b0.g1.gA(aG.g8(), a08[a0].hs), !0
				} return !1
	}, this.hb = function() {
		var ey;
		2 !== a2.uZ && 0 !== aX.kX[a2.et] && !a2.fk && aS.uS(a2.et) && (function(ey) {
			if (a08.length !== ey) return 1;
			for (var a0 = ey - 1; 0 <= a0; a0--)
				if (a08[a0].id !== aU.eZ(a2.et, a0) || a08[a0].hs !== aU.ee(a2.et, a0)) return 1;
			return
		}(ey = aU.eY(a2.et)) && function(ey) {
			var a0, id, hs, i5, ht, a0O = [];
			loop: for (a0 = 0; a0 < ey; a0++) {
				for (id = aU.eZ(a2.et, a0), hs = aU.ee(a2.et, a0), i5 = 0; i5 < a08.length; i5++)
					if (a08[i5].id === id && a08[i5].hs === hs) {
						a0O.push(a08.splice(i5, 1)[0]);
						continue loop
					} ht = aU.ef(a2.et, a0), a1M(ht = {
					hs: hs,
					ht: ht,
					a1W: ht,
					id: id,
					a1O: !0,
					a1X: !1,
					gM: null,
					su: null
				}), a0O.push(ht)
			}
			a08 = a0O
		}(ey), a1i(ey))
	}, this.a1l = function(f5) {
		for (var ey = Math.min(a08.length, aU.eY(a2.et)), a0 = 0; a0 < ey; a0++)
			if (a08[a0].hs === f5) return void(a08 = [])
	}, this.kl = function() {
		if (0 !== aX.kX[a2.et] && aS.uS(a2.et) && !a2.fk)
			for (var a0 = a08.length - 1; 0 <= a0; a0--) kv.drawImage(a08[a0].gM, a1e(a0), a1f(a0))
	}
}

function by() {
	var a08, iy, a1n, a1o, iF, zu, fontSize, a1p, a1q, a1r, a1s, gM, su, lG, a1t;

	function qN(a0) {
		return L(0 === a0 ? 73 : 1 === a0 ? 74 : 2 === a0 ? 75 : 76)
	}

	function a20() {
		kv.drawImage(gM, bQ.gap + (a2.hm ? bQ.gap + bV.a21() : 0), a22 + 2 * bQ.gap)
	}

	function a1u() {
		gM.width = a08[0].width + a1r, gM.height = iF + a1r, (su = gM.getContext("2d", {
				alpha: !0
			})).clearRect(0, 0, a08[0].width + a1r, iF + a1r), su.translate(Math.floor(a1r / 2), Math.floor(a1r / 2)), su.lineWidth = a1r, su.fillStyle = 1 === a08[0].a1z ? p.m0 : p.ls, a23(), su.fill(), su.strokeStyle = 1 === a08[0].a1z ? p.l0 : p
			.lv, a23(), su.stroke(), b2.ku.textAlign(su, 1), b2.ku.textBaseline(su, 1), su.fillStyle = 1 === a08[0].a1z ? p.l0 : p.lv, su.font = zu[0], su.fillText(qN(a08[0].a1y), Math.floor(a08[0].width / 2), Math.floor(.72 * a1p[0] * iF)), su
			.font = zu[1], su.fillText(a08[0].oE, Math.floor(a08[0].width / 2), Math.floor((a1p[0] + .48 * a1p[1]) * iF))
	}

	function a23() {
		su.beginPath(), su.moveTo(a1s, 0), su.lineTo(a08[0].width - a1s, 0), su.lineTo(a08[0].width, a1s), su.lineTo(a08[0].width, iF - a1s), su.lineTo(a08[0].width - a1s, iF), su.lineTo(a1s, iF), su.lineTo(0, iF - a1s), su.lineTo(0, a1s), su
			.closePath()
	}
	this.dE = function() {
		iy = 4, a1n = a1o = lG = 0, a08 = [], zu = new Array(2), fontSize = new Array(2), (a1p = new Array(2))[0] = .3, a1p[1] = .7, a1q = new Array(4), gM = document.createElement("canvas"), a1t = bT.dp + 2e3, this.resize()
	}, this.resize = function() {
		var a0, u;
		for (iF = Math.floor((m.n.te() ? .0725 : .058) * an.oV), fontSize[0] = Math.floor(.85 * a1p[0] * iF), fontSize[1] = Math.floor(.85 * a1p[1] * iF), zu[0] = b2.ku.kz(1, fontSize[0]), zu[1] = b2.ku.kz(1, fontSize[1]), a0 = a1q.length -
			1; 0 <= a0; a0--) a1q[a0] = this.measureText(qN(a0) + "000", zu[0]);
		if (a1r = Math.floor(1 + .05 * iF), a1s = Math.floor(.2 * iF), 0 < a08.length) {
			for (a0 = a08.length - 1; 0 <= a0; a0--) u = this.measureText(a08[a0].oE + "00", zu[1]), a08[a0].width = u < a1q[a0] ? a1q[a0] : u;
			a1u()
		}
	}, this.hb = function() {
		0 !== iy && (4 === iy ? bT.dp > a1t && (iy = 0, 1 === a2.uZ) && aF.ux(bI.j9.s8[bI.s9].name, 3, 1, 9) : (1 === iy ? (0 === a1n && (a1u(), a1n = 1e-4), 1 <= (a1n += .002 * (bT.dp - lG)) && (a1o = 0, iy = 2, a1n = 1), bT.dL = !0) : 2 ===
			iy ? ((a1o += (bT.dp - lG) / 1e3) > a08[0].lL || 1 < a1o && 1 < a08.length) && (iy = 3) : 3 === iy && ((a1n -= .002 * (bT.dp - lG)) <= 0 && (a1n = 0, a08.shift(), iy = 0 < a08.length ? 1 : 0), bT.dL = !0), lG = bT.dp))
	}, this.measureText = function(oE, zu) {
		return kv.font = zu, Math.floor(kv.measureText(oE).width)
	}, this.hp = function(a1x, a0) {
		this.ux(aX.l4[a1x], a0, 1, 0 === a0 ? 3 : 7)
	}, this.ux = function(oE, a1y, a1z, lL) {
		var u = (u = this.measureText(oE + "00", zu[1])) < a1q[a1y] ? a1q[a1y] : u;
		a08.push({
			oE: oE,
			width: u,
			a1y: a1y,
			a1z: a1z,
			lL: lL
		}), 0 === iy && (a1n = 0, iy = 1, lG = bT.dp)
	}, this.kl = function() {
		0 !== iy && 0 !== a1n && (a1n < 1 ? (kv.globalAlpha = a1n, a20(), kv.globalAlpha = 1) : a20())
	}
}

function cY() {
	var iF, gM, su, a24, a25, a26, a27, a1O, a28, a29, a2A, a2B, a0u = !1,
		xW = (this.tE = !1, this.u = 0, new Array(2));

	function kI() {
		var u = al.u,
			ja = (a1O = !1, st(su, u, iF), Math.floor(u / 2));
		1 === a24 ? (su.fillStyle = p.mC, su.fillRect(ja, 0, ja, iF)) : -1 === a24 && (su.fillStyle = p.mP, su.fillRect(0, 0, ja, iF)), sv(su, u, iF, 2);
		var ja = (ja = Math.floor(.25 * iF)) < 2 ? 2 : ja,
			a15 = (su.fillStyle = p.m1, Math.floor((iF - 4) * a25[1] / a26[1]));
		0 < a15 && su.fillRect(2, iF - 2 - a15, ja, a15), 0 < (a15 = Math.floor((iF - 4) * a25[0] / a26[0])) && su.fillRect(u - 2 - ja, iF - 2 - a15, ja, a15);
		ja = (ja = Math.floor(iF / 8)) < 2 ? 2 : ja, sx(su, Math.floor(.4 * iF), 0, iF, ja, .5, !1), sx(su, Math.floor(u - 1.4 * iF), 0, iF, ja, .5, !0), a15 = 1.1 * iF / xW[0].width;
		su.imageSmoothingEnabled = !0, su.setTransform(a15, 0, 0, a15, (u - a15 * xW[0].width) / 2, -.05 * iF), su.drawImage(xW[+a0u], 0, 0), su.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a2C() {
		a2A = bT.er(), a1O = !0, a28 = a24 = 0, a27 = [], al.tE = !1, aC.ug(247, 0), a25[0] = a25[1] = 0, aC.yn(673)
	}

	function kx() {
		return aG.a0Z(aC.a0V()) ? aG.fh - iF - bQ.gap : b3.a0Z(aC.a0Y()) ? b3.kx() - iF - bQ.gap : an.iF - iF - bY.zI() * bQ.gap
	}
	this.dF = function() {
		for (var a0 = 0; a0 < 2; a0++) xW[a0] = b2.gM.tS(aR.get(3), 8 - a0, p.mo), xW[a0] = b2.gM.xY(xW[a0])
	}, this.dE = function() {
		a2A = -140, a29 = 0, a2B = -1, this.tE = !1, a1O = a0u = !1, a25 = [a24 = a28 = 0, 0], a26 = [1, 1], a27 = [], this.resize()
	}, this.resize = function() {
		iF = aG.iF, this.u = 4 * iF, (gM = document.createElement("canvas")).width = this.u, gM.height = iF, su = gM.getContext("2d", {
			alpha: !0
		}), kI()
	}, this.kH = function() {
		a1O && kI()
	}, this.fo = function(fg, fh) {
		var kr;
		return !!this.tE && !(fg < an.u - this.u - bQ.gap || fh < (kr = kx()) || kr + iF < fh || (a2.fk || b0.g1.nE(fg > an.u - bQ.gap - this.u / 2 ? 1 : 0), 0))
	}, this.hb = function() {
		if (0 < a29) 0 === --a29 && a2C();
		else if (this.tE) 180 == --a28 && 3 * a25[0] < a26[0] ? a2C() : a25[0] >= a26[0] ? a0u ? bH.uE.uU() : bH.uE.uY() : a25[1] >= a26[1] ? a29 = 4 : a28 <= 0 && a2C();
		else if (function() {
				if (0 <= a2B) return 1;
				return
			}()) {
			a0u = aY.a2F(), aC.uy(250, L(77, [aX.l4[a2B]]), 673, a2B, p.lv, p.ls, -1, !0), a2B = -1, aC.yn(257), aC.a0t(a0u), this.tE = !0, a1O = !0, a28 = 360;
			for (var ds, dq = 0, a0 = ir - 1; 0 <= a0; a0--) aS.uS(it[a0]) && (dq += aX.eq[it[a0]]);
			a0u ? a26[0] = Math.max(bB.em(3 * dq, 4), 1) : a2.hm ? 9 === a2.jC && 8 === bU.uu[bV.jv()] ? a26[0] = Math.max(dq, 1) : (ds = bB.em(100 * bV.vA(), a2.iW), ds = bB.o6(200 - 2 * ds, 50, 100), ds = bB.em(ds * dq, 100), a26[0] = Math.max(
				ds, 1)) : a26[0] = Math.max(bB.em(3 * dq, 5), 1), a26[1] = Math.max(dq - a26[0], 1)
		}
	}, this.ua = function() {
		this.tE && a25[0] < a26[0] && a2C()
	}, this.o8 = function(player, a2I) {
		var a0;
		if (this.tE) {
			for (a0 = a27.length - 1; 0 <= a0; a0--)
				if (a27[a0] === player) return;
			var a2J = L(a2I ? 78 : 79, [aX.l4[player]]);
			aC.uy(450, a2J, 257, player, a2I ? p.mA : p.mM, p.ls, -1, !0), a27.push(player), a1O = !0, a2J = a2.jE ? a26[0] : aX.eq[player], a2I ? a25[0] += a2J : a25[1] += a2J, player === a2.et && (a24 = a2I ? 1 : -1)
		}
	}, this.kl = function() {
		var fh;
		this.tE && (fh = kx(), kv.drawImage(gM, an.u - this.u - bQ.gap, fh))
	}, this.o9 = function(player) {
		if (!a2.jE) {
			if (bT.er() < a2A + 140) return !1;
			if (bT.er() < 535) return !1
		}
		return 0 === a28 && !!b2.eo.fm(1) && !(!b2.eo.fn(player) || 10 <= iX[player] && !b2.eo.yH(player, 9))
	}, this.nJ = function(player) {
		a2B = player
	}
}

function bz() {
	var u, fg, a2K, gM, su, tE, h6, yi, zu, a1O, a2L = 11 / 12;

	function a2N() {
		var a1V = Math.floor(h6 * (u - 2 * a2K)),
			a2Q = 1 + Math.floor(.0625 * aG.iF),
			a2R = 1 + Math.floor(.3 * aG.iF),
			a2S = Math.floor(.55 * aG.iF);
		su.clearRect(0, 0, u, aG.iF), su.fillStyle = p.lr, su.fillRect(0, 0, a2K, aG.iF), su.fillRect(a2K + a1V, 0, u - a2K - a1V, aG.iF), su.fillStyle = h6 < 1 / 3 ? "rgba(" + Math.floor(3 * h6 * 130) + ",130,0,0.85)" : h6 < 2 / 3 ? "rgba(130," + (
				130 - Math.floor(3 * (h6 - 1 / 3) * 130)) + ",0,0.85)" : "rgba(130,0," + Math.floor(3 * (h6 - 2 / 3) * 130) + ",0.85)", su.fillRect(a2K, 0, a1V, aG.iF), su.fillStyle = p.lv, su.fillRect(0, 0, u, 1), su.fillRect(0, aG.iF - 1, u, 1), su
			.fillRect(0, 0, 1, aG.iF), su.fillRect(a2K, 0, 1, aG.iF), su.fillRect(a2K + a1V, 0, 1, aG.iF), su.fillRect(u - a2K, 0, 1, aG.iF), su.fillRect(u - 1, 0, 1, aG.iF), su.fillRect(Math.floor(.25 * aG.iF) + a2R, Math.floor((aG.iF - a2Q) / 2),
				aG.iF - 2 * a2R, a2Q), su.fillRect(Math.floor(u - 1.25 * aG.iF) + a2R, Math.floor((aG.iF - a2Q) / 2), aG.iF - 2 * a2R - a2R % 2, a2Q), su.fillRect(Math.floor(u - 1.25 * aG.iF) + Math.floor((aG.iF - a2Q) / 2), a2R, a2Q, aG.iF - 2 *
				a2R - a2R % 2), yi = b2.eo.h5(a2.et, aG.g8()), su.fillText(b2.l2.l3(yi) + " (" + b2.l2.yZ(100 * h6, +(h6 < .1)) + ")", Math.floor(.5 * u), a2S)
	}
	this.setAbsolutePercentage = function(newPercentage) {
		h6 = newPercentage;
	};
	keybindFunctions.setAbsolute = this.setAbsolutePercentage;
	keybindFunctions.setRelative = (arg1) => aG.wn(arg1);

	function a2X(xE) {
		return !(1 < xE && 1 === h6 || (1 < xE && xE * h6 - h6 < 1 / 1024 ? xE = (h6 + 1 / 1024) / h6 : xE < 1 && h6 - xE * h6 < 1 / 1024 && (xE = (h6 - 1 / 1024) / h6), h6 = bB.o6(h6 * xE, 1 / 1024, 1), a2N(), 0))
	}

	function a2Y(jm) {
		return h6 !== (h6 = bB.o6((jm - fg - a2K) / (u - 2 * a2K), 1 / 1024, 1)) && (a2N(), !0)
	}
	this.fh = 0, this.fp = !1, this.dE = function() {
		tE = !a2.g0 && !a2.fk, a1O = !1, h6 = .5, yi = 0, this.fp = !1, this.resize()
	}, this.resize = function() {
		m.n.te() && an.u < .8 * an.iF ? (this.iF = Math.floor(.0536 * an.oV), u = an.u - 4 * bQ.gap - this.iF) : (u = Math.floor((m.n.te() ? .65 : .389) * an.oV), u += 12 - u % 12, this.iF = Math.floor(u / 12)), a2K = Math.floor(3 * this.iF / 2),
			zu = b2.ku.kz(1, Math.floor(.5 * this.iF)), (gM = document.createElement("canvas")).width = u, gM.height = this.iF, (su = gM.getContext("2d", {
				alpha: !0
			})).font = zu, b2.ku.textBaseline(su, 1), b2.ku.textAlign(su, 1), this.a2M(), a2N()
	}, this.a2M = function() {
		fg = m.n.te() && an.u < .8 * an.iF ? this.iF + 3 * bQ.gap : Math.floor((an.u - u) / 2), this.fh = an.iF - this.iF - bY.zI() * bQ.gap
	}, this.kH = function() {
		a1O && (a1O = !1, a2N())
	}, this.tE = function() {
		return !(!tE || aB.fl && fg < Math.floor(bQ.gap + 5.5 * this.iF))
	}, this.a0Z = function(a2T) {
		return !!this.tE() && fg + u > an.u - a2T - bQ.gap
	}, this.yl = function() {
		tE = !a2.fk
	}, this.a2C = function() {
		tE = !1
	}, this.g8 = function() {
		return bB.o6(Math.floor(1024 * h6 + .5) - 1, 0, 1023)
	}, this.wk = function(jm, jn) {
		return this.tE() && fg < jm && jm < fg + u && jn > this.fh
	}, this.fo = function(jm, jn) {
		return !!this.tE() && !!aG.wk(jm, jn) && (aH.lS = !1, function(v7, jm, jn) {
			if (function(jm, jn) {
					return fg < jm && jm < fg + a2K && jn > aG.fh
				}(jm, jn)) return a2X(a2L);
			if (function(jm, jn) {
					return fg + u - a2K < jm && jm < fg + u && jn > aG.fh
				}(jm, jn)) return a2X(1 / a2L);
			return v7.fp = !0, a2Y(jm)
		}(this, jm, jn) && (bT.dL = !0), !0)
	}, this.wn = function(lZ) {
		0 !== a2.uZ && this.tE() && a2X(lZ) && (bT.dL = !0)
	}, this.wI = function(deltaY) {
		var lZ;
		return !(0 === deltaY || !this.tE()) && a2X(lZ = 0 < deltaY ? (lZ = 400 / (400 + deltaY)) < a2L ? a2L : lZ : 1 / a2L < (lZ = (400 - deltaY) / 400) ? 1 / a2L : lZ)
	}, this.wF = function(jm) {
		return !!this.fp && a2Y(jm)
	}, this.wg = function() {
		this.fp = !1
	}, this.hb = function() {
		this.tE() && yi !== b2.eo.h5(a2.et, this.g8()) && (a1O = !0)
	}, this.kl = function() {
		this.tE() && kv.drawImage(gM, fg, this.fh)
	}
}

function cj() {
	var gM, su, a2Z, font, a2a = 0,
		a2b = !1,
		a2c = [10, 5, 3, 2, 1.5, 1, .75, .5, .25],
		a2d = 5;

	function a2j() {
		if (a2b) {
			var a0, ey = a2c.length,
				a2S = Math.floor(.5 * a2Z.iF),
				iF = ey * a2S,
				fg = Math.floor(Math.floor(a2Z.fg) + .3 * a2Z.u - .5),
				fh = Math.floor(Math.floor(a2Z.fh) - iF),
				u = Math.floor(.4 * a2Z.u + 2.5);
			for (kv.fillStyle = p.lr, kv.fillRect(fg, fh, u, iF), kv.fillStyle = p.mG, kv.fillRect(fg, fh + a2d * a2S, u, a2S), kv.fillStyle = p.lv, kv.fillRect(fg, fh, 2, iF), kv.fillRect(fg, fh, u, 2), kv.fillRect(fg + u - 2, fh, 2, iF), a0 =
				1; a0 < ey; a0++) kv.fillRect(fg, fh + a0 * a2S, u, 2);
			for (kv.fillStyle = p.lv, b2.ku.textAlign(kv, 1), b2.ku.textBaseline(kv, 1), kv.font = b2.ku.kz(0, .6 * a2S), fg += .5 * u, a0 = 0; a0 < ey; a0++) kv.fillText(a2r(a0), fg, fh + (a0 + .6) * a2S)
		}
		kv.drawImage(gM, Math.floor(a2Z.fg), Math.floor(a2Z.fh))
	}

	function kI(v7) {
		var fg, kq, kr, a2S;
		su.clearRect(0, 0, Math.floor(a2Z.u), Math.floor(a2Z.iF)), su.fillStyle = p.lr, su.fillRect(0, 0, Math.floor(a2Z.u), Math.floor(a2Z.iF)), a2.lR && (su.fillStyle = p.mG, su.fillRect(0, 0, Math.floor(.3 * a2Z.u), Math.floor(a2Z.iF))), su
			.fillStyle = p.lv, su.fillText("Hide UI", .15 * a2Z.u, .5 * a2Z.iF), su.fillRect(Math.floor(.3 * a2Z.u - .5), 0, 2, Math.floor(a2Z.iF)), fg = .5 * a2Z.u, su.fillText("Replay Speed", fg, .31 * a2Z.iF), su.fillText(a2r(a2d), fg, .69 * a2Z
				.iF), su.fillRect(Math.floor(.7 * a2Z.u - .5), 0, 2, Math.floor(a2Z.iF)), v7.zG ? (fg = Math.floor(.02 * a2Z.u), v7 = Math.floor(.025 * a2Z.u), kq = Math.floor(.85 * a2Z.u - fg - .5 * v7), kr = Math.floor(.25 * a2Z.iF), a2S = Math
				.floor(a2Z.iF) - 2 * kr, su.fillRect(kq, kr, fg, a2S), su.fillRect(kq + fg + v7, kr, fg, a2S)) : function() {
				var u = Math.floor(.46 * a2Z.iF),
					iF = Math.floor(.23 * a2Z.iF),
					fg = Math.floor(.85 * a2Z.u - .5 * u + u / 12),
					fh = Math.floor(.5 * a2Z.iF - iF);
				su.beginPath(), su.moveTo(fg, fh), su.lineTo(fg + u, fh + iF), su.lineTo(fg, fh + (iF << 1)), su.fill()
			}(), su.fillRect(0, 0, Math.floor(a2Z.u), 2), su.fillRect(0, 0, 2, Math.floor(a2Z.iF)), su.fillRect(0, Math.floor(a2Z.iF) - 2, Math.floor(a2Z.u), 2), su.fillRect(Math.floor(a2Z.u - 2), 0, 2, Math.floor(a2Z.iF))
	}

	function a2r(a0) {
		return 5 === a0 ? "Normal" : "" + a2c[a0]
	}
	this.zG = !1, this.dE = function() {
		a2.fk && (a2d = 5, this.zG = !1, a2b = !1, a2Z = new oy([.3, .3 / 6], [.5, 1]), this.resize())
	}, this.a2e = function() {
		return a2c[a2d]
	}, this.kx = function() {
		return a2Z.fh
	}, this.a0Z = function(a2T) {
		return !!a2.fk && a2Z.fg + a2Z.u > an.u - a2T - bQ.gap
	}, this.resize = function() {
		a2.fk && (a2Z.resize(), a2Z.fh -= (bY.zI() - 1) * bQ.gap, font = b2.ku.kz(0, .3 * a2Z.iF), (gM = document.createElement("canvas")).width = Math.floor(a2Z.u), gM.height = Math.floor(a2Z.iF), (su = gM.getContext("2d", {
			alpha: !0
		})).font = font, b2.ku.textAlign(su, 1), b2.ku.textBaseline(su, 1), kI(this))
	}, this.wr = function(a2f) {
		0 === a2.uZ || i.tE() || a2f !== a2.lR && (a2.lR = a2f, bV.resize(), bT.dL = !0, a2.fk) && (a2a = bT.dp + 2e3, kI(this))
	}, this.fo = function(fg, fh) {
		if (!a2.fk) return !1;
		if (fg < a2Z.fg || fh < a2Z.fh || fg > a2Z.fg + a2Z.u) return a2b && function(v7, fg, fh) {
			var ey = a2c.length,
				a2S = Math.floor(.5 * a2Z.iF),
				iF = ey * a2S,
				kq = Math.floor(Math.floor(a2Z.fg) + .3 * a2Z.u - .5),
				iF = Math.floor(Math.floor(a2Z.fh) - iF),
				u = Math.floor(.4 * a2Z.u + 2.5);
			return a2b = !1, bT.dL = !0, fg < kq || kq + u < fg || fh < iF || (a2d = a2i(0, Math.floor((fh - iF) / a2S), ey - 1), kI(v7)), !0
		}(this, fg, fh);
		if ((fg -= a2Z.fg) < .3 * a2Z.u) a2b = !1, this.wr(!a2.lR);
		else {
			if (fg < .7 * a2Z.u) return a2b = !a2b, bT.dL = !0;
			this.wt(!1)
		}
		return !0
	}, this.wt = function(a2h) {
		2 === a2.uZ ? (this.wr(!1), i.j(3)) : (a2b = !1, this.zG = !this.zG, this.zG ? (aB.fl && aB.ws(), m.n.setState(1)) : a2h || aB.a00(), bT.dL = !0, kI(this))
	}, this.wu = function() {
		this.zG = !1, aB.a00(), bT.dL = !0, kI(this)
	}, this.wY = function(fg, fh) {
		return !!a2.lR && (aB.fo(fg, fh) || (a2.fk ? ((bT.dp > a2a || !this.fo(fg, fh)) && aH.fo(fg, fh), bT.dL = !0, a2a = bT.dp + 2e3) : aH.fo(fg, fh)), !0)
	}, this.hb = function() {
		a2.fk && a2.lR && bT.dp > a2a - 1e3 && bT.dp < a2a && (bT.dL = !0)
	}, this.uh = function() {
		a2.fk && (this.zG = !1, bT.dL = !0, kI(this))
	}, this.kl = function() {
		if (a2.fk) {
			if (a2.lR) {
				if (bT.dp > a2a) return;
				if (bT.dp > a2a - 1e3) return kv.globalAlpha = a2i(0, (1e3 - (bT.dp - (a2a - 1e3))) / 1e3, 1), a2j(), void(kv.globalAlpha = 1)
			}
			a2j()
		}
	}
}

function c0() {
	var a2s, a2t, u, fg, fh, a2u, a2v;
	this.dE = function() {
		a2s = new Array(2), a2t = new Array(2), this.lS = !1, a2v = a2u = h9 = h7 = 0, h8 = 1, this.resize()
	}, this.resize = function() {
		u = (u = Math.floor((m.n.te() ? .072 : .0502) * an.oV)) < 8 ? 8 : u;
		for (var a0 = 1; 0 <= a0; a0--) a2s[a0] = document.createElement("canvas"), a2s[a0].width = u, a2s[a0].height = u, a2t[a0] = a2s[a0].getContext("2d", {
			alpha: !0
		});
		this.a2M(),
			function() {
				for (var a3A = Math.floor(1 + u / 20), a0 = 1; 0 <= a0; a0--) a2t[a0].clearRect(0, 0, u, u), a2t[a0].fillStyle = p.lo, a2t[a0].beginPath(), a2t[a0].arc(u / 2, u / 2, u / 2 - a3A, 0, 2 * Math.PI), a2t[a0].fill(), a2t[a0]
					.lineWidth = a3A, a2t[a0].fillStyle = p.lv, a2t[a0].strokeStyle = p.lv, a2t[a0].beginPath(), a2t[a0].arc(u / 2, u / 2, u / 2 - a3A, 0, 2 * Math.PI), a2t[a0].stroke(), sx(a2t[a0], 0, 0, u, a3A, .3, 0 === a0)
			}()
	}, this.kw = function() {
		return -h7 / h8
	}, this.kx = function() {
		return -h9 / h8
	}, this.lb = function(a2z, gp) {
		h7 = h8 * a2z - gp
	}, this.lc = function(a30, gq) {
		h9 = h8 * a30 - gq
	}, this.fo = function(a2y, a0a) {
		return a2.lR || ! function(a2y, a0a) {
			return Math.pow(a2y - (fg + u / 2), 2) + Math.pow(a0a - (fh + u / 2), 2) < u * u / 4 || Math.pow(a2y - (fg + u / 2), 2) + Math.pow(a0a - (fh + 2 * u), 2) < u * u / 4
		}(a2y, a0a) || bX.dW.data[8].value ? (a7.le() && (this.lS = !0, a2u = a2y, a2v = a0a), !1) : a0a < fh + 1.25 * u ? this.wI(Math.floor(an.u / 2), Math.floor(an.iF / 2), -200) : this.wI(Math.floor(an.u / 2), Math.floor(an.iF / 2), 200)
	}, this.wF = function(a2y, a0a) {
		var a31, a32, gs, gv;
		return !a7.le() || (a31 = h7, a32 = h9, h7 += gs = a2u - a2y, h9 += gv = a2v - a0a, aW.wF(gs, gv), this.a33(), a2u = a2y, a2v = a0a, a31 !== h7) || a32 !== h9
	}, this.wI = function(jm, jn, deltaY) {
		var lZ;
		if (a7.le()) {
			if (0 < deltaY) lZ = (lZ = 500 / (500 + deltaY)) < .5 ? .5 : lZ;
			else {
				if (!(deltaY < 0)) return !1;
				lZ = 2 < (lZ = (500 - deltaY) / 500) ? 2 : lZ
			}
			this.a34(jm, jn, lZ), bT.dL = !0
		}
		return !0
	}, this.a34 = function(fg, fh, fx) {
		var xE;
		fx = xE = (xE = 1024 < (xE = fx) * h8 ? 1024 / h8 : xE) * h8 < .125 ? .125 / h8 : xE, aW.zoom(fx, fg, fh),
			function(xE, jm, jn) {
				h8 *= xE, h7 = (h7 + jm) * xE - jm, h9 = (h9 + jn) * xE - jn, aH.a33()
			}(fx, fg, fh)
	}, this.a33 = function() {
		var a37 = an.u / 16,
			gV = 0,
			a38 = an.iF / 16,
			gX = 0;
		h7 < -an.u + a37 && (gV = -an.u + a37 - h7), h7 > h8 * bI.eT - a37 && (gV = h8 * bI.eT - a37 - h7), h9 < -an.iF + a38 && (gX = -an.iF + a38 - h9), h9 > h8 * bI.eU - a38 && (gX = h8 * bI.eU - a38 - h9), h7 += gV, h9 += gX, bO.ld(), aW.a39(
			gV, gX)
	}, this.a2M = function() {
		fg = an.u - u - bQ.gap, fh = Math.floor(an.iF / 2 - 1.25 * u)
	}, this.kl = function() {
		bX.dW.data[8].value || (kv.drawImage(a2s[0], fg, fh), kv.drawImage(a2s[1], fg, Math.floor(fh + 3 * u / 2)))
	}
}

function c1() {
	var e6, sC, a3B, a3C, gap, a3D, a3E, a3F, a3G, a3H, zu, a3I, fd, a3J, a1V, a3K, a3L, a3M;

	function a3Q() {
		a3C = Math.floor(.2 * (m.n.te() ? .07 : .035) * an.oV), a3C = a0X(m.n.te() ? 3 : 1, a3C);
		var a3T = an.u / (e6.length + gap);
		a3C = a3C < a3T ? a3T : a3C, a1V = Math.floor((1 - gap) * a3C), sC = 0, a3U()
	}

	function a3U() {
		sC = (sC = sC < -20 ? -20 : sC) > (e6.length - 15) * a3C ? (e6.length - 15) * a3C : sC, a3E = Math.floor(sC / a3C), a3F = (a3F = a3E + Math.floor(an.u / a3C)) > e6.length - 1 ? e6.length - 1 : a3F, a3E = (a3E = a3F < a3E ? a3F : a3E) < 0 ?
			0 : a3E;
		var ja = a3F;
		a3D = a3B / e6[ja];
		for (var a0 = a3F - 1; a3E <= a0; a0--) e6[a0] > e6[ja] && (ja = a0, a3D = a3B / Math.pow(e6[a0], a3J))
	}

	function a3X(fg) {
		fg = Math.floor((sC + an.u - fg - gap * a3C) / a3C);
		return (fg = fg < -1 ? -1 : -1 === fg ? 0 : fg > e6.length - 1 ? -1 : fg) !== a3G && (a3G = fg, -1 === a3K && 0 === a3G && aI.a3N && (a3K = setInterval(a3Y, 100)), 1)
	}

	function a3Z(a0) {
		var a1L = Math.floor(a3D * Math.pow(e6[a0], a3J));
		kv.fillRect(sC + an.u - (a0 + 1) * a3C, an.iF - a1L, a1V, a1L)
	}

	function a3Y() {
		var f5;
		0 !== (a3G = 8 === aP.vt() ? -1 : a3G) ? (a3L = (new Date).getTime(), clearInterval(a3K), a3K = -1) : (f5 = e6[1] / 864e3, -1 !== a3L && (f5 += ((new Date).getTime() - a3L) * e6[1] / 864e5, a3L = -1), 0 < f5 && (e6[0] += Math.floor(f5), bT
			.dL = !0))
	}
	this.a3N = !1, this.dE = function() {
		a3L = a3K = -1, a3G = -(a3J = 1), this.a3O = !1, fd = 0, a3I = new Date, sC = 0, gap = .3, (a3M = []).push({
			jM: "Plateau A",
			ey: 0,
			d: 57
		}), a3M.push({
			jM: "Max A",
			ey: 1,
			d: 1
		}), a3M.push({
			jM: "Black Friday",
			ey: 15,
			d: 15
		}), a3M.push({
			jM: "Max B",
			ey: 19,
			d: 19
		}), a3M.push({
			jM: "Max C",
			ey: 44,
			d: 44
		}), a3M.push({
			jM: "First Android Version",
			ey: 58,
			d: 58
		}), a3M.push({
			jM: "Max D",
			ey: 67,
			d: 67
		}), a3M.push({
			jM: "The iFrame Explosion",
			ey: 98,
			d: 99
		}), a3M.push({
			jM: "The 155-Day Uptrend",
			ey: 58,
			d: 213
		}), a3M.push({
			jM: "Max E",
			ey: 213,
			d: 213
		}), a3M.push({
			jM: "Plateau B",
			ey: 214,
			d: 259
		}), a3M.push({
			jM: "Turbulent Times",
			ey: 260,
			d: 344
		}), a3M.push({
			jM: "Max F",
			ey: 262,
			d: 262
		}), a3M.push({
			jM: "Max G",
			ey: 282,
			d: 282
		}), a3M.push({
			jM: "Max H",
			ey: 333,
			d: 333
		}), a3M.push({
			jM: "The 19-Day Downtrend",
			ey: 283,
			d: 301
		}), a3M.push({
			jM: "Plateau C",
			ey: 345,
			d: 385
		}), a3M.push({
			jM: "The Alliance Ascent",
			ey: 386,
			d: 395
		}), a3M.push({
			jM: "Max I",
			ey: 395,
			d: 395
		}), a3M.push({
			jM: "First iOS Version",
			ey: 411,
			d: 411
		}), a3M.push({
			jM: "Plateau D",
			ey: 396,
			d: 453
		}), a3M.push({
			jM: "The TikTok Revolution",
			ey: 454,
			d: 470
		}), a3M.push({
			jM: "Max J",
			ey: 456,
			d: 456
		}), a3M.push({
			jM: "Max K",
			ey: 472,
			d: 472
		}), a3M.push({
			jM: "Max L",
			ey: 478,
			d: 478
		}), a3M.push({
			jM: "YT Drew",
			ey: 471,
			d: 485
		}), a3M.push({
			jM: "Plateau E",
			ey: 485,
			d: 600
		}), a3M.push({
			jM: "Uptrend A",
			ey: 600,
			d: 613
		}), a3M.push({
			jM: "Max M",
			ey: 613,
			d: 613
		}), a3M.push({
			jM: "Downtrend A",
			ey: 614,
			d: 635
		}), a3M.push({
			jM: "Plateau F",
			ey: 636,
			d: 737
		}), a3M.push({
			jM: "End of Record",
			ey: 738,
			d: 738
		}), e6 = [208644377, 208644377, 208644377, 206964709, 205156594, 250680803, 249089835, 234476552, 252346209, 263196406, 270821533, 291436400, 294907103, 288866179, 297960890, 310165928, 323215738, 326005712, 312078872, 282668674,
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
		a3B = Math.floor(.15 * an.iF), a3H = (a3H = Math.floor((m.n.te() ? .018 : .0137) * an.oV)) < 2 ? 2 : a3H, zu = b2.ku.kz(1, a3H), a3Q()
	}, this.a3R = function(a3S) {
		var a0;
		for (this.a3N = !0, a0 = 0; a0 < a3S.length; a0++) e6.unshift(a3S[a0]);
		a3Q(), bT.dL = !0
	}, this.a3V = function() {
		a3U()
	}, this.wF = function(fg, fh) {
		fh > an.iF - .6 * a3B ? this.a3O ? fg !== fd && (sC += fg - fd, fd = fg, a3U(), a3X(fg), this.a3O = -1 !== a3G, bT.dL = !0) : a3X(fg) && (bT.dL = !0) : this.we()
	}, this.we = function() {
		-1 !== a3G && (this.a3O = !1, a3G = -1, bT.dL = !0)
	}, this.wI = function(fg, deltaY) {
		-1 !== a3G && (sC += Math.floor(deltaY), a3U(), a3X(fg), bT.dL = !0)
	}, this.fo = function(fg, fh) {
		this.wF(fg, fh), -1 !== a3G && (fd = fg, this.a3O = !0)
	}, this.wf = function() {
		-1 !== a3G && (this.a3O = !1)
	}, this.kl = function() {
		kv.fillStyle = p.ly;
		for (var a3b, month, dq, pe, a3e, a3f, kr, a3g, a3h, a0 = a3F; a3E <= a0; a0--) a3Z(a0);
		this.a3N && 0 === a3E && (kv.fillStyle = p.mP, a3Z(0)), -1 !== a3G && (kv.fillStyle = p.lx, a3Z(a3G)), -1 !== a3G && (kv.font = zu, b2.ku.textBaseline(kv, 2), (dq = new Date).setTime(a3I.getTime() - 1e3 * a3G * 60 * 60 * 24), month =
			"month", a3b = "day", "undefined" != typeof Intl && (month = new Intl.DateTimeFormat("en-US", {
				month: "long"
			}).format(dq), a3b = new Intl.DateTimeFormat("en-US", {
				weekday: "long"
			}).format(dq)), a3b = a3b + ", " + dq.getUTCDate() + " " + month + " " + dq.getFullYear(), month = 1 === e6[a3G] ? L(80) : L(81), month = b2.l2.l3(e6[a3G]) + " " + month, dq = Math.floor(kv.measureText(a3b).width), pe = Math
			.floor(kv.measureText(month).width), a3e = Math.floor(.5 * (dq + a3H)), a3f = (a3f = sC + an.u - (a3G + 1) * a3C) < a3e ? a3e : a3f > an.u - a3e ? an.u - a3e : a3f, kr = an.iF - Math.floor(a3D * Math.pow(e6[a3G], a3J)), a3g = Math
			.floor(1.1 * a3H), a3h = kr > an.iF - a3g ? an.iF - a3g : kr, kv.fillStyle = p.ls, kv.fillRect(an.u - pe - a3H, a3h - a3g, pe + a3H, a3g), kv.fillRect(a3f - a3e, an.iF - a3g, dq + a3H, a3g), kv.fillStyle = p.lv, b2.ku.textAlign(
				kv, 2), kv.fillText(month, Math.floor(an.u - .5 * a3H), a3h),
			function(kr, a3g) {
				for (var pd, jc = -1, kf = e6.length - a3G - 1, a0 = a3M.length - 1; 0 <= a0; a0--) kf >= a3M[a0].ey && kf <= a3M[a0].d && (-1 === jc || a3M[a0].d - a3M[a0].ey < a3M[jc].d - a3M[jc].ey) && (jc = a0); - 1 !== jc && (pd = Math
					.floor(kv.measureText(a3M[jc].jM).width), kv.fillStyle = p.ls, kv.fillRect(an.u - pd - a3H, kr, pd + a3H, a3g), kv.fillStyle = p.lv, kv.fillText(a3M[jc].jM, Math.floor(an.u - .5 * a3H), kr + a3g))
			}(a3h - 2 * a3g, a3g), b2.ku.textAlign(kv, 1), kv.fillText(a3b, a3f, an.iF), kv.strokeStyle = p.lz, kv.lineWidth = 1, kv.beginPath(), kv.moveTo(0, kr), kv.lineTo(an.u, kr), kv.closePath(), kv.stroke())
	}
}

function c2() {
	var zu, u, fh, a3j, a3k, gM, su, a1O, y6, a3l, a3m, a3n, a3o;
	this.fg = 0, this.iF = 0, this.dE = function() {
		a3k = a2.sb, a3m = "rgba(0,100,0,0.8)", a3n = "rgba(150,0,0,0.8)", a1O = !(a3l = !0), y6 = aX.eu[a2.et], this.resize()
	}, this.resize = function() {
		u = Math.floor((m.n.te() ? .305 : .24) * an.oV), this.iF = Math.floor(.5 + .13 * u), u = Math.floor(6 * this.iF), zu = b2.ku.kz(1, Math.floor(.8 * this.iF)), a3o = Math.floor(.5 * this.iF), bI.rk.font = zu, fh = bQ.gap, a3j = Math.floor(
			1 + .13 * this.iF), (gM = document.createElement("canvas")).width = u, gM.height = this.iF, (su = gM.getContext("2d", {
			alpha: !0
		})).font = zu, b2.ku.textBaseline(su, 1), b2.ku.textAlign(su, 1), this.a3p()
	}, this.a1m = function() {
		return m.n.te() && an.u < 1.2 * an.iF
	}, this.a2M = function() {
		this.a1m() ? this.fg = an.u - u - bQ.gap : this.fg = Math.floor(aK.a3q() + (an.u - aK.a3q() - aL.u - u) / 2 - .5 * bQ.gap)
	}, this.kH = function() {
		a1O && (a1O = !1, this.a3p())
	}, this.a3p = function() {
		su.clearRect(0, 0, u, this.iF), su.fillStyle = a3l ? a3m : a3n, su.fillRect(0, 0, u, this.iF), su.fillStyle = p.lx, this.a3r(), this.a3s(), su.fillStyle = aX.eu[a2.et] >= aV.iS(a2.et) ? p.mM : p.lv, su.fillText(b2.l2.l3(y6), Math.floor(
			u / 2), a3o), su.fillStyle = p.lv, su.fillRect(0, 0, u, 1), su.fillRect(0, 0, 1, this.iF), su.fillRect(0, this.iF - 1, u, 1), su.fillRect(u - 1, 0, 1, this.iF)
	}, this.a3r = function() {
		var sK = a3u(Math.floor((aV.a3t() - 1) * this.iF / 9), this.iF - a3j);
		su.fillRect(0, sK, a3j, this.iF - sK), su.fillRect(u - a3j, sK, a3j, this.iF - sK)
	}, this.a3s = function() {
		su.fillRect(a3j, this.iF - a3j, Math.floor((u - 2 * a3j) * aX.eu[a2.et] / a3k), a3j)
	}, this.hb = function() {
		0 !== aX.kX[a2.et] && 2 !== aX.y1[a2.et] && y6 !== aX.eu[a2.et] && (a3k = a0X(aX.eu[a2.et], a3k), a3l = aX.eu[a2.et] > y6 && 10 <= aX.eu[a2.et], y6 = aX.eu[a2.et], a1O = !0)
	}, this.kl = function() {
		0 === aX.kX[a2.et] || a2.g0 || 2 === aX.y1[a2.et] || kv.drawImage(gM, this.fg, fh)
	}
}

function c3() {
	var a3v, a3w, a3x, a3y, a3z, a40, a41, a42, a43, a44, a45, a46, a47, a48, a49, a4A, a4B, a4C, a4D, a4E, a4F, a4G, position, a4H, a4I, a4J, a4K, a4L = 1,
		a4M = 1;
	var leaderboardHasChanged = true;
	this.playerPos = a2.et;
	leaderboardFilter.setUpdateFlag = () => leaderboardHasChanged = true;

	function updateFilteredLb() {
		if (!leaderboardHasChanged) return;
		leaderboardFilter.filteredLeaderboard = leaderboardFilter.playersToInclude
			.map(id => iX[id]).sort((a, b) => a - b);
		leaderboardHasChanged = false;
		this.playerPos = leaderboardFilter.filteredLeaderboard.indexOf(iX[a2.et]);
	}

	function a4O() {
		a41.clearRect(0, 0, a3v, a22),
			a41.fillStyle = p.ma,
			a41.fillRect(0, 0, a3v, a46),
			a41.fillStyle = p.lr,
			a41.fillRect(0, a46, a3v, a22 - a46);
		if (leaderboardFilter.enabled) updateFilteredLb();
		var playerPos = (leaderboardFilter.enabled ?
			this.playerPos :
			iX[a2.et]
		);
		if (leaderboardFilter.hoveringOverTabs) a4G = -1;
		if (leaderboardFilter.enabled && a4G >= leaderboardFilter.filteredLeaderboard.length) a4G = -1;
		playerPos >= position && a4Q(playerPos - position, p.mG),
			0 !== iX[a2.et] && 0 === position && a4Q(0, p.mf),
			-1 !== a4G && a4Q(a4G, p.lw),
			a41.fillStyle = p.lr,
			//console.log("drawing", a4G),
			a41.clearRect(0, a22 - leaderboardFilter.tabBarOffset, a3v, leaderboardFilter.tabBarOffset);
		a41.fillRect(0, a22 - leaderboardFilter.tabBarOffset, a3v, leaderboardFilter.tabBarOffset);
		a41.fillStyle = p.lv,
			a41.fillRect(0, a46, a3v, 1),
			a41.fillRect(0, a22 - leaderboardFilter.tabBarOffset, a3v, 1),
			leaderboardFilter.drawTabs(a41, a3v, a22 - leaderboardFilter.tabBarOffset, p.mG),
			a41.fillRect(0, 0, a3v, bQ.th),
			a41.fillRect(0, 0, bQ.th, a22),
			a41.fillRect(a3v - bQ.th, 0, bQ.th, a22),
			a41.fillRect(0, a22 - bQ.th, a3v, bQ.th), a41.font = a3w, b2.ku.textBaseline(a41, 1), b2.ku.textAlign(a41, 1), a41.fillText(L(82), Math.floor((a3v + a46 - 22) / 2), Math.floor(a44 + a3x / 2));
		playerList.drawButton(a41, 12, 12, a46 - 22);
		var hz, f6 = playerPos < position + a3z - 1 ? 1 : 2;

		if (leaderboardFilter.enabled) {
			let result = leaderboardFilter.filteredLeaderboard;
			if (position !== 0 && position >= result.length - a3z)
				position = (result.length > a3z ? result.length : a3z) - a3z;
			//if (position >= result.length) position = result.length - 1;
			for (a41.font = a3y, b2.ku.textAlign(a41, 0), hz = a3z - f6; 0 <= hz; hz--) {
				const pos = result[hz + position];
				if (pos !== undefined)
					a4R(jx[pos]), a4S(hz, pos, jx[pos]);
			}
			for (b2.ku.textAlign(a41, 2), hz = a3z - f6; 0 <= hz; hz--) {
				const pos = result[hz + position];
				if (pos !== undefined)
					a4R(jx[pos]), a4T(hz, jx[pos]);
			}
		} else {
			for (a41.font = a3y, b2.ku.textAlign(a41, 0), hz = a3z - f6; 0 <= hz; hz--)
				a4R(jx[hz + position]), a4S(hz, hz + position, jx[hz + position]);
			for (b2.ku.textAlign(a41, 2), hz = a3z - f6; 0 <= hz; hz--)
				a4R(jx[hz + position]), a4T(hz, jx[hz + position]);
		}
		2 == f6 && (a4R(a2.et), b2.ku.textAlign(a41, 0), a4S(a3z - 1, iX[a2.et], a2.et), b2.ku.textAlign(a41, 2), a4T(a3z - 1, a2.et)), 0 === position && (f6 = .7 * a47 / aR.get(4).height, a41.setTransform(f6, 0, 0, f6, Math.floor(a48 + .58 * a47 +
			.5 * f6 * aR.get(4).width), Math.floor(a44 + a3x + .4 * a47)), a41.imageSmoothingEnabled = !0, a41.drawImage(aR.get(4), -Math.floor(aR.get(4).width / 2), -Math.floor(aR.get(4).height / 2)), a41.setTransform(1, 0, 0, 1, 0, 0))
	}

	function a4R(player) {
		a2.hm && (a41.fillStyle = bU.a4V[bU.uu[bU.im[player]]])
	}

	function a4Q(a0, a4W) {
		a41.fillStyle = a4W, a0 = a3z - 1 < a0 ? a3z - 1 : a0;
		a4W = Math.floor((a0 === a3z - 1 ? 2 : 0 === a0 ? 1.15 : 1) * a47), a4W = a0 === a3z - 2 ? Math.floor(a46 + 9.15 * a47) - Math.floor(a46 + 8.15 * a47) : a4W;
		a41.fillRect(0, Math.floor(a46 + (a0 + (0 === a0 ? 0 : .15)) * a47), a3v, a4W)
	}

	function a4S(a4Y, vF, a0) {
		a41.fillText(a4C[vF], a48, Math.floor(a44 + a3x + (a4Y + .5) * a47)), 1 === aX.y1[a0] && (a41.font = "italic " + a3y);
		vF = Math.floor(a44 + a3x + (a4Y + .5) * a47);
		a41.fillText(aX.l4[a0], a49, vF), 0 !== aX.y1[a0] && (a41.font = a3y), a0 < a2.iq && 2 !== aX.y1[a0] || a41.fillRect(a49, vF + .35 * a4L, a4B[a0], Math.max(1, .1 * a4L))
	}

	function a4T(a4Y, a0) {
		a41.fillText(aX.eq[a0], a4A, Math.floor(a44 + a3x + (a4Y + .5) * a47))
	}

	function a4h(fh) {
		return (fh -= bQ.gap + a46) < 0 ? Math.floor(fh / a47) - 1 : fh < (a3z - 1) * a47 ? Math.floor(fh / a47) : fh < a22 - a46 ? a3z - 1 : (fh -= a22 - a46, a3z + Math.floor(fh / a47))
	}

	function tg(fg, fh) {
		return fg >= bQ.gap && fg < bQ.gap + a3v && fh >= bQ.gap && fh < bQ.gap + a22
	}
	this.dE = function() {
			var a0;
			for (a4I = !1, a4K = a4J = a4H = 0, a4G = -1, a3z = m.n.te() ? 6 : 10, a4M = (position = 0) === (a4M = bX.dW.data[11].value) ? 10 : 1 === a4M ? 5 : 1, a4F = !1, a4D = new Uint16Array(a3z + 1), a4E = new Uint32Array(a3z + 1), a43 = a2.f2,
				jx = new Uint16Array(a43), iX = new Uint16Array(a43), a0 = a43 - 1; 0 <= a0; a0--) jx[a0] = a0, iX[a0] = a0;
			this.resize(!0), a4B = new Uint16Array(a2.f2);
			var a4N = Math.floor(a3v - a49 - a48 - a42);
			for (a4C = new Array(a2.f2), a41.font = a3y, a0 = a2.f2 - 1; 0 <= a0; a0--) a4C[a0] = a0 + 1 + ".", aX.l4[a0] = b2.su.xi(aX.vR[a0], a3y, a4N), a4B[a0] = Math.floor(a41.measureText(aX.l4[a0]).width);
			a4O()
		}, this.resize = function(dE) {
			if (a22 = m.n.te() ? (a3v = Math.floor(.335 * an.oV), Math.floor(a3z * a3v / 8)) : (a3v = Math.floor(.27 * an.oV), Math.floor(a3z * a3v / 10)), a3v = Math.floor(.97 * a3v), (a40 = document.createElement("canvas")).width = a3v, a40
				.height = a22, a41 = a40.getContext("2d", {
					alpha: !0
				}), a44 = .025 * a3v, a3x = .16 * a3v, a45 = 0 * a3v, a46 = Math.floor(.45 * a44 + a3x), a47 = (a22 - a3x - 2 * a44 - a45) / a3z,
				a40.height = a22 += a47, leaderboardFilter.tabBarOffset = Math.floor(a47 * 1.3), leaderboardFilter.verticalClickThreshold = a22 - leaderboardFilter.tabBarOffset, leaderboardFilter.windowWidth = a3v,
				a3w = b2.ku.kz(1, Math.floor(.55 * a3x)), a4L = Math.floor((m.n.te() ? .67 : .72) * a47), a3y = b2.ku.kz(0, a4L), a41.font = a3y, a48 = Math.floor(.04 * a3v), a49 = Math.floor((m.n.te() ? .195 : .18) * a3v), a42 = Math.floor(a41
					.measureText("00920600").width), a41.font = a3w, a4A = a3v - a48, !dE) {
				a41.font = a3y;
				for (var a0 = a2.f2 - 1; 0 <= a0; a0--) a4B[a0] = Math.floor(a41.measureText(aX.l4[a0]).width);
				a4O()
			}
		}, this.a3q = function() {
			return a3v
		}, this.kH = function(bb, a4P) {
			(a4P || a4F && (bb || bT.er() % a4M == 0)) && (a4F = !1, a4O())
		}, this.hb = function() {
			! function() {
				for (var hz = a43 - 1; 0 <= hz; hz--) 0 === aX.kX[jx[hz]] && ! function(hz) {
					var a4f = jx[hz];
					a43--;
					for (var a0 = hz; a0 < a43; a0++) jx[a0] = jx[a0 + 1], iX[jx[a0]] = a0;
					jx[a43] = a4f, iX[jx[a43]] = a43
				}(hz)
			}();
			for (var a4d, le = a43 - 1, hz = 0; hz < le; hz++) aX.eq[jx[hz]] < aX.eq[jx[hz + 1]] && (a4d = jx[hz], jx[hz] = jx[hz + 1], jx[hz + 1] = a4d, iX[jx[hz]] = hz, iX[jx[hz + 1]] = hz + 1);
			! function() {
				for (var dq = a4F, f6 = (a4F = !0, iX[a2.et] >= a3z - 1 ? a3z - 2 : a3z - 1), a0 = f6; 0 <= a0; a0--)
					if (a4D[a0] !== jx[a0] || a4E[a0] !== aX.eq[jx[a0]]) return;
				(f6 != a3z - 2 || a4D[a3z] === iX[a2.et] && a4E[a3z] === aX.eq[a2.et]) && (a4F = dq)
			}();
			for (var a0 = a3z - 1; 0 <= a0; a0--) a4D[a0] = jx[a0], a4E[a0] = aX.eq[jx[a0]];
			a4D[a3z] = iX[a2.et], a4E[a3z] = aX.eq[a2.et];
			leaderboardHasChanged = true;
		}, leaderboardFilter.scrollToTop = function() {
			position = 0;
		}, this.fo = function(fg, fh) {
			return !!tg(fg, fh) && ((utils.isPointInRectangle(fg, fh, bQ.gap + 12, bQ.gap + 12, a46 - 22, a46 - 22) && playerList.display(aX.vR), true) &&
				!(fh - bQ.gap > leaderboardFilter.verticalClickThreshold && leaderboardFilter.handleMouseDown(fg - bQ.gap)) && (a4H = bT.dp, a4I = !0, a4J = a4K = a4h(fh), b9.wv() && (fg = a2i(-1, a4K, a3z), a4G !== (fg = fg === a3z ? -1 :
					fg)) && (a4G = fg, a4O(), bT.dL = !0)), !0)
		}, leaderboardFilter.repaintLeaderboard = function() {
			a4O(), bT.dL = !0;
		},
		this.wF = function(fg, fh) {
			if (utils.isPointInRectangle(fg, fh, bQ.gap + 12, bQ.gap + 12, a46 - 22, a46 - 22)) {
				playerList.hoveringOverButton === false && (playerList.hoveringOverButton = true, a4O(), bT.dL = !0);
			} else {
				playerList.hoveringOverButton === true && (playerList.hoveringOverButton = false, a4O(), bT.dL = !0);
			}
			if (leaderboardFilter.setHovering(
					utils.isPointInRectangle(fg, fh, bQ.gap, bQ.gap + leaderboardFilter.verticalClickThreshold, leaderboardFilter.windowWidth, leaderboardFilter.tabBarOffset), fg - bQ.gap
				)) return;
			var dq, a4g = a4h(fh);
			return a4I ? (dq = position, (position = a2i(0, position += a4J - a4g, a2.f2 - a3z)) !== dq && (a4g = (a4g = a2i(-1, a4J = a4g, a3z)) !== a3z && tg(fg, fh) ? a4g : -1, a4G = a4g, a4O(), bT.dL = !0), !0) : (a4g = (a4g = a2i(-1, a4g,
				a3z)) === a3z || !tg(fg, fh) || b9.wv() ? -1 : a4g, a4G !== a4g && (a4G = a4g, a4O(), bT.dL = !0))
		}, this.wf = function(fg, fh) {
			if (!a4I) return !1;
			a4I = !1;
			var a4g = a4h(fh);
			var isEmptySpace = false;
			return b9.wv() && -1 !== a4G && (a4G = -1, a4O(), bT.dL = !0), bT.dp - a4H < 350 && a4K === a4g && -1 !== (a4g = (a4g = a2i(-1, a4g, a3z)) !== a3z && tg(fg, fh) ? a4g : -1) && (fg = (leaderboardFilter.enabled ? (updateFilteredLb(), jx[
					leaderboardFilter.filteredLeaderboard[a4g + position] ?? (isEmptySpace = true, iX[a2.et])]) : jx[a4g + position]), a4g === a3z - 1 && (leaderboardFilter.enabled ? this.playerPos : iX[a2.et]) >=
				position + a3z - 1 && (fg = a2.et), !isEmptySpace && a2.hm && donationsTracker.displayHistory(fg, aX.vR, a2.jE), 0 !== aX.kX[fg] && !isEmptySpace) && a7.lP(fg, 800, !1, 0), !0
		}, this.wI = function(fg, fh, deltaY) {
			var a4i;
			return !(a4I || a2.lR || (a4i = Math.max(Math.floor(Math.abs(deltaY) / 40), 1), !tg(fg, fh)) || (fg = (fg = a2i(-1, a4h(fh), a3z)) === a3z || b9.wv() ? -1 : fg, 0 < deltaY ? position < a2.f2 - a3z && (position += Math.min(a2.f2 - a3z -
				position, a4i), a4G = fg, a4O(), bT.dL = !0) : 0 < position && (position -= Math.min(position, a4i), a4G = fg, a4O(), bT.dL = !0), 0))
		}, this.kl = function() {
			kv.drawImage(a40, bQ.gap, bQ.gap)
		}
}

function c4() {
	var gM, su, fg, fh, a1L, a4j, gap, a4k, fontSize, a4l, a4m, ew, a4n, a4o, a4p, a4q, a4r;

	function a4u() {
		su.clearRect(0, 0, aL.u, aL.iF), su.fillStyle = p.ls, su.fillRect(0, 0, aL.u, aL.iF), su.fillStyle = p.mC, fx = 0 < a4p ? a4p : Math.sqrt(ew[4] / 1e4), su.fillRect(0, aL.iF - a1L - 1, Math.floor(fx * aL.u), a1L), su.fillStyle = p.lv, su
			.fillRect(0, 0, aL.u, 1), su.fillRect(0, 0, 1, aL.iF), su.fillRect(aL.u - 1, 0, 1, aL.iF), su.fillRect(0, aL.iF - 1, aL.u, 1), su.fillRect(0, aL.iF - a1L - 1, aL.u, 1);
		for (var fx, a4w, dq = 0, a0 = 0; a0 < a4m.length; a0++) a4n[a0] ? (b2.ku.textAlign(su, 0), a4w = Math.floor((a4j - a1L + 2 * a4k) * (a0 - dq + 1) / (a4m.length + 1) - .7 * a4k), su.fillText(a4m[a0], gap, a4w), b2.ku.textAlign(su, 2), 5 ===
			a0 && 0 !== aX.kX[a2.et] && aX.eu[a2.et] >= aV.iS(a2.et) ? (su.fillStyle = p.md, su.fillText(a4t(a0), aL.u - gap, a4w), su.fillStyle = p.lv) : su.fillText(a4t(a0), aL.u - gap, a4w)) : dq++
	}

	function a4t(a0) {
		return a0 < 3 ? ew[a0].toString() : 3 === a0 || 4 === a0 || 5 === a0 ? b2.l2.yZ(ew[a0] / 100, 2) : a0 < 7 ? b2.l2.l3(ew[a0]) : a0 === 7 ? aL.a3t(ew[7]) : a0 === 8 ? utils.getMaxTroops(aX.eq, a2.et) : utils.getDensity(a2.et)
	}

	function a4s() {
		aX.eq[a2.et] !== ew[6] && (ew[6] = aX.eq[a2.et], a4l++)
	}
	this.dE = function() {
		a4p = a4q = 0, (a4m = new Array(8))[0] = L(83), a4m[1] = a2.jE ? L(84) : L(85), a4m[2] = L(86), a4m[3] = L(87), a4m[4] = L(88), a4m[5] = L(89), a4m[6] = L(90), a4m[7] = L(91),
			a4m.push("Max Troops", "Density"), // add a4m
			(ew = new Array(a4m.length))[0] = a2.jE ? 0 : a2.iq, ew[1] = a2.jE ? ir : a2.jB, ew[2] = a2.ub, ew[3] = 0, ew[4] = bB.em(1e4 * aX.eq[0], a2.iW), ew[5] = 700, ew[6] = 0, a4s(), ew[7] = 0, a4o = a4t(6), a4n = new Array(a4m.length);
		for (var a0 = a4m.length - 1; 0 <= a0; a0--) a4n[a0] = !0;
		a4r = 0, a4r = a2.jE ? (a4n[0] = !1, a4n[2] = !1, a4n[3] = !1, 3) : (a4n[3] = !1, 1), a4l = 0, this.resize()
	}, this.resize = function() {
		this.u = Math.floor((m.n.te() ? .1646 : .126) * 1.25 * an.oV), this.iF = Math.floor(1.18 * this.u), a1L = Math.floor(.04 * this.u), gap = Math.floor(.035 * this.u), a4k = .04 * this.u, a4j = this.iF, this.iF -= Math.floor(a4r * (this.iF -
			2 * a1L) / a4m.length), fontSize = Math.floor(.7 * (a4j - a1L) / a4m.length), fontSize = b2.ku.kz(1, fontSize), (gM = document.createElement("canvas")).width = this.u, gM.height = this.iF, (su = gM.getContext("2d", {
			alpha: !0
		})).font = fontSize, b2.ku.textBaseline(su, 1), su.lineWidth = 1, this.ym(), this.a2M(), aJ.a2M(), a4u()
	}, this.a2M = function() {
		fg = an.u - this.u - bQ.gap
	}, this.a4v = function() {
		fh = bQ.gap
	}, this.ym = function() {
		fh = bQ.gap + (aJ.a1m() && 0 !== aX.kX[a2.et] && !a2.g0 ? aJ.iF + bQ.gap : 0)
	}, this.kH = function(bb) {
		(bb || 100 <= a4l) && (a4l = 0, a4u())
	}, this.zZ = function() {
		return ew[7]
	}, this.a3t = function(value) {
		var ja = Math.floor(value / 1e3 / 60),
			value = Math.floor((value - 6e4 * ja) / 1e3);
		return value < 10 ? ja + ":0" + value : ja + ":" + value
	}, this.hb = function() {
		var a55, per;
		a4n[0] && a2.uc - a2.ub !== ew[0] && (ew[0] = a2.uc - a2.ub, a4l++), ir - ew[0] !== ew[1] && (ew[1] = ir - ew[0], a4l++), this.k8(), (a55 = aV.a56(a2.et)) !== ew[5] && (ew[5] = a55, a4l++), a4s(), ew[7] += bT.a57, a55 = a4t(7), a4o !==
			a55 && (a4o = a55, a4l += 100), a55 = a2.hm ? bV.vA() : aX.eq[jx[0]], per = bB.em(1e4 * a55, a2.iW), ew[3] = a55, ew[4] !== per && (a4l++, ew[4] = per), 8 === a2.jC && function() {
				for (var a0 = 0; a0 < 2; a0++)
					if (!b2.eo.fn(a0)) return bH.uE.uY(), 1;
				return
			}() || ew[3] < a2.iW || ! function() {
				for (var a0 = ir - 1; 0 <= a0; a0--)
					if (0 < aX.ez[it[a0]].length) return;
				return 1
			}() || bH.uE.uY()
	}, this.k8 = function() {
		a4n[2] && a2.ub !== ew[2] && (ew[2] = a2.ub, a4l++)
	}, this.a58 = function(a0) {
		var ps, a59, dq;
		return 2 !== a2.uZ && (a0 % 2 == 1 && (aK.kH(1, 1), bT.dL = !0), a0 === a2.yv ? (a4p = 0, a4u(), !1) : (-1 !== a0 || 0 !== a4q) && (a59 = a4p, a4p = a2.fk ? a0 / a2.yv : (dq = performance.now(), 0 <= a0 && (ps = dq - 392 * a0, a4q = 0 ===
			a0 || ps < a4q ? ps : a4q), 1 < (a4p = (dq - a4q) / (392 * a2.yv)) ? 1 : a4p), a4u(), a4p !== a59))
	}, this.kl = function() {
		kv.drawImage(gM, fg, fh)
	}
}

function c5() {
	var tE, a5A, u, iF, a2S, a5B, a5C, a1n, gM, lG, a5D;

	function kx() {
		return Math.floor((an.u - u) / 2) < aG.iF + 2 * bQ.gap ? an.iF - iF - 4 * bQ.gap - aG.iF : an.iF - iF - 2 * bQ.gap
	}
	this.a5E = -1, this.dE = function() {
		a5D = tE = !1, a2S = .61, a5B = .07, a5C = .09, lG = a1n = iF = 0, this.a5E = -1
	}, this.resize = function() {
		var su, kq, il, a5I, a5J, zz;
		tE && (u = a3u(u = m.n.te() ? Math.floor(.69 * an.oV) : Math.floor(.5 * an.oV), a0X(an.u - 2 * bQ.gap, 10)), u = a3u(u, Math.floor(3.57 * a0X(an.iF - 2 * bQ.gap, 3))), iF = Math.floor(.28 * u), (gM = document.createElement("canvas"))
			.width = u, gM.height = iF, su = gM.getContext("2d", {
				alpha: !0
			}), kq = Math.floor(1 + iF / 40), su.clearRect(0, 0, u, iF), su.fillStyle = p.ls, su.fillRect(kq, kq, u - 2 * kq, iF - 2 * kq), su.lineJoin = "bevel", su.lineWidth = 2 * kq, su.strokeStyle = p.lv, su.strokeRect(kq, kq, u - 2 * kq,
				iF - 2 * kq), su.imageSmoothingEnabled = !1, il = aR.get(a5A), a5I = il.width, zz = (1 === a5A ? .85 : 21 === a5A ? .666 : .9) * a2S * iF / (a5J = il.height), su.setTransform(zz, 0, 0, zz, Math.floor((u - zz * a5I) / 2), Math
				.floor((iF - zz * a5J) / 2)), su.drawImage(il, 0, 0), su.setTransform(1, 0, 0, 1, Math.floor(u - a5C * iF - a5B * iF - kq), Math.floor(kq + a5B * iF)),
			function(su, ey) {
				su.lineWidth = Math.floor(1 + iF / 80), su.strokeStyle = p.lv, su.beginPath(), su.moveTo(0, 0), su.lineTo(ey, ey), su.moveTo(0, ey), su.lineTo(ey, 0), su.stroke()
			}(su, Math.floor(a5C * iF)), su.setTransform(1, 0, 0, 1, 0, 0))
	}, this.show = function(ds, a5G, a2F, a5H) {
		tE || a5H && a5D || (a5A = a2F ? 21 : ds ? 1 : 2, tE = a5D = !0, this.resize(), aA.pr(), aG.a2C(), lG = bT.dp, -1 === this.a5E && (this.a5E = bT.er()), a1n = a5G ? 1 : 0)
	}, this.hb = function() {
		!tE || 1 <= a1n || (a1n = 1 < (a1n += 5e-4 * (bT.dp - lG)) ? 1 : a1n, lG = bT.dp, bT.dL = !0)
	}, this.fo = function(fg, fh) {
		return !(!tE || a1n <= 0 || (fg -= Math.floor((an.u - u) / 2), fh -= kx(), fg < 0) || fh < 0 || u < fg || iF < fh || (u - iF / 3 < fg && fh < iF / 3 && (tE = !1, bT.dL = !0), 0))
	}, this.kl = function() {
		!tE || a1n <= 0 || (kv.globalAlpha = a1n, kv.drawImage(gM, Math.floor((an.u - u) / 2), kx()), kv.globalAlpha = 1)
	}
}

function d5() {
	var a5L = [0, 0],
		a5M = [0, 0];

	function a5P(kf) {
		return 3 !== a5L[kf] && 1 !== a5M[kf] && (a5M[kf] = 1, a5L[kf]++, bX.p5.p6(119, (a5L[0] << 2) + a5L[1]), 1)
	}
	this.a5N = new a5O, this.dE = function() {
		var ds = bX.dW.data[119].value;
		a5L[0] = ds >> 2, a5L[1] = 3 & ds
	}, this.z7 = function() {
		this.a5N.dE()
	}, this.hb = function() {
		this.a5N.hb()
	}, this.za = function() {
		a5P(0) && aC.a0d(L(92))
	}, this.zb = function() {
		a5P(1) && aC.a0d(L(93))
	}
}

function a5O() {
	var a5Q;
	this.dE = function() {
		a5Q = !1
	}, this.hb = function() {
		var f5;
		if (function() {
				if (!a5Q) {
					if (bT.er() % 30 != 9) return;
					if (!b2.eo.jr(90)) return;
					a5Q = !0
				}
				return 1
			}() && (! function() {
				var oN = aC.a0z(956);
				if (oN) {
					if (b2.eo.jf(oN.player)) return 1;
					aC.a0x(956, 0)
				}
				return
			}() && (-1 === (f5 = (a2.hm ? function() {
				for (var id = bV.jv(), ey = ir, t1 = it, im = bU.im, a0 = 0; a0 < ey; a0++) {
					var f5 = t1[a0];
					if (im[f5] !== id) return f5
				}
				return -1
			} : function() {
				for (var a5X = ir, is = it, a5Y = iX, a0 = 0; a0 < a5X; a0++) {
					var f5 = is[a0];
					if (0 !== a5Y[f5]) return f5
				}
				return -1
			})()) ? ! function() {
				var oN = aC.a0z(957);
				if (oN && oN.a0T) {
					if (aS.fA(oN.a0T.fv << 2)) return 1;
					aC.a0x(957, 0)
				}
				return
			}() : (aC.uy(0, L(94, [aX.l4[f5]]), 956, f5, p.lv, p.ls, -1, !0), 0)))) {
			var ey = ab.hQ.jk;
			if (0 !== ey)
				for (var dW = ab.hQ.dW, a0 = 0; a0 < ey; a0++) {
					var fv = dW[a0];
					if (aS.fA(fv << 2)) return void aC.uy(0, L(95, [bC.gW(fv), bC.gY(fv)]), 957, 0, p.lv, p.ls, -1, !0, void 0, {
						fv: fv
					})
				}
		}
	}
}

function d4() {
	this.a5Z = !1, this.lm = !1, this.yq = !1, this.a5a = [0, 0, 0, 0], this.a5b = function() {
		var kq, kr, ks, kt;
		this.yq = this.yq || this.lm, (this.lm || this.a5Z && this.yq) && (kq = bO.a5c[0], kr = bO.a5c[1], ks = bO.a5c[2], kt = bO.a5c[3], kq = kq < this.a5a[0] ? this.a5a[0] : kq, kr = kr < this.a5a[1] ? this.a5a[1] : kr, ks = ks > this.a5a[2] ?
			this.a5a[2] : ks, kt = kt > this.a5a[3] ? this.a5a[3] : kt, this.lm = !1, this.a5Z = !1, kq === this.a5a[0] && kr === this.a5a[1] && ks === this.a5a[2] && kt === this.a5a[3] ? this.yr() : kq <= ks && kr <= kt && z9.putImageData(
				zA, 0, 0, kq, kr, ks - kq + 1, kt - kr + 1))
	}, this.yr = function() {
		this.yq && this.a5a[2] >= this.a5a[0] && this.a5a[3] >= this.a5a[1] && z9.putImageData(zA, 0, 0, this.a5a[0], this.a5a[1], this.a5a[2] - this.a5a[0] + 1, this.a5a[3] - this.a5a[1] + 1), this.yq = !1
	}, this.uk = function() {
		this.a5a[2] >= this.a5a[0] && this.a5a[3] >= this.a5a[1] && z9.putImageData(zA, 0, 0, this.a5a[0], this.a5a[1], this.a5a[2] - this.a5a[0] + 1, this.a5a[3] - this.a5a[1] + 1), this.yq = !1
	}, this.dE = function() {
		var fg, fh;
		this.a5Z = !1, this.lm = !1, this.yq = !1, this.a5a[0] = bI.eT, this.a5a[1] = bI.eU, this.a5a[2] = this.a5a[3] = 0;
		loop: for (fg = 1; fg < bI.eT - 1; fg++)
			for (fh = bI.eU - 2; 1 < fh; fh--)
				if (1 === a5d[aS.sS(fg, fh) + 2]) {
					this.a5a[0] = fg;
					break loop
				} loop: for (fh = 1; fh < bI.eU - 1; fh++)
			for (fg = bI.eT - 2; 1 < fg; fg--)
				if (1 === a5d[aS.sS(fg, fh) + 2]) {
					this.a5a[1] = fh;
					break loop
				} loop: for (fg = bI.eT - 2; 0 < fg; fg--)
			for (fh = bI.eU - 2; 1 < fh; fh--)
				if (1 === a5d[aS.sS(fg, fh) + 2]) {
					this.a5a[2] = fg;
					break loop
				} loop: for (fh = bI.eU - 2; 0 < fh; fh--)
			for (fg = bI.eT - 2; 1 < fg; fg--)
				if (1 === a5d[aS.sS(fg, fh) + 2]) {
					this.a5a[3] = fh;
					break loop
				}
	}
}

function L(value, a5e) {
	var oE = "number" == typeof value ? az.a5f[value] : value;
	if (a5e)
		for (var ey = a5e.length, a0 = 0; a0 < ey; a0++)
			for (var hz = 0; hz < 3; hz++) oE = oE.replace("{" + (10 * hz + a0) + "}", a5e[a0]);
	return oE
}

function bj() {
	this.data = new a5g;
	var a5h = (new a5i).L84,
		a5j = (this.a5f = a5h, !1);
	this.dE = function() {
		var ey, e6;
		"en" !== bX.dW.data[12].value.split("-")[0].toLowerCase() ? bX.dW.data[12].value === bX.dW.data[145].value && 0 < bX.dW.data[146].value && (ey = bX.dW.data[146].value, (e6 = bX.ol.qh(ey, !1)).length === ey) && !!b2.od.xT(e6) && function(
			e6) {
			var ey = e6.length,
				a5p = bX.ol.qh(ey, !0);
			if (ey !== a5p.length) return !1;
			if (!b2.od.xT(a5p)) return !1;
			for (var ja = a5h.length, a3S = new Array(ja), a5q = ja === ey, jM = Math.min(ey, ja), a0 = 0; a0 < ja; a0++)
				if (a3S[a0] = a5h[a0], a0 < ey && a5p[a0] === a3S[a0]) a3S[a0] = e6[a0];
				else {
					a5q = !1;
					for (var i5 = 0; i5 < jM; i5++)
						if (a5p[i5] === a3S[a0]) {
							a3S[a0] = e6[i5];
							break
						}
				} return az.a5f = a3S, a5q
		}(e6) || (a5j = !0) : az.a5f = a5h
	}, this.dG = function() {
		bU.dF(), a3.dF(), bS.dF(), bR.dF()
	}, this.a5r = function() {
		var a5s;
		a5j && (a5j = !1, 0 !== a5h.length) && (a5s = bX.dW.data[12].value, aq.a5t.a5u(0, a5s.slice(0, 20)))
	}, this.a5v = function(e6) {
		e6.length === a5h.length && (this.a5f = e6, bX.p5.p6(145, bX.dW.data[12].value), bX.p5.p6(146, e6.length), bX.ol.qn(e6, !1), bX.ol.qn(a5h, !0), 0 === aP.vt()) && 5 === i.pW && i.k9.a5w()
	}
}

function a5g() {
	var e6 = ["aa", "ab", "ace", "ach", "af", "ak", "alz", "am", "ar", "as", "av", "awa", "ay", "az", "ba", "bal", "ban", "bbc", "bci", "be", "bem", "ber", "ber-Latn", "bew", "bg", "bho", "bik", "bm", "bm-Nkoo", "bn", "bo", "br", "bs", "bts", "btx",
		"bua", "ca", "ce", "ceb", "cgg", "ch", "chk", "chm", "ckb", "cnh", "co", "crh", "crs", "cs", "cv", "cy", "da", "de", "din", "doi", "dov", "dv", "dyu", "dz", "ee", "el", "en", "eo", "es", "et", "eu", "fa", "fa-AF", "ff", "fi", "fj", "fo",
		"fon", "fr", "fur", "fy", "ga", "gaa", "gd", "gl", "gn", "gom", "gu", "gv", "ha", "haw", "he", "hi", "hil", "hmn", "hr", "hrx", "ht", "hu", "hy", "iba", "id", "ig", "ilo", "is", "it", "iw", "ja", "jam", "jv", "jw", "ka", "kac", "kek",
		"kg", "kha", "kk", "kl", "km", "kn", "ko", "kr", "kri", "ktu", "ku", "kv", "ky", "la", "lb", "lg", "li", "lij", "lmo", "ln", "lo", "lt", "ltg", "luo", "lus", "lv", "mad", "mai", "mak", "mam", "mfe", "mg", "mh", "mi", "min", "mk", "ml",
		"mn", "mni-Mtei", "mr", "ms", "ms-Arab", "mt", "mwr", "my", "ndc-ZW", "ne", "new", "nhe", "nl", "no", "nr", "nso", "nus", "ny", "oc", "om", "or", "os", "pa", "pa-Arab", "pag", "pam", "pap", "pl", "ps", "pt", "pt-PT", "qu", "rn", "ro",
		"rom", "ru", "rw", "sa", "sah", "scn", "sd", "se", "sg", "shn", "si", "sk", "sl", "sm", "sn", "so", "sq", "sr", "ss", "st", "su", "sus", "sv", "sw", "szl", "ta", "tcy", "te", "tet", "tg", "th", "ti", "tiv", "tk", "tl", "tn", "to", "tpi",
		"tr", "trp", "ts", "tt", "tum", "ty", "tyv", "udm", "ug", "uk", "ur", "uz", "ve", "vec", "vi", "war", "wo", "xh", "yi", "yo", "yua", "yue", "zap", "zh", "zh-CN", "zh-TW", "zu"
	];
	this.a5x = function() {
		for (var a5y = [], ey = e6.length, a0 = 0; a0 < ey; a0++) a5y.push(e6[a0]);
		for (ey++, a5y.unshift(bX.dW.data[12].qc), a0 = 1; a0 < ey; a0++)
			if (a5y[a0] === a5y[0]) {
				a5y.splice(a0, 1), ey--;
				break
			} try {
			if ("undefined" == typeof Intl) return a5y;
			for (a0 = 0; a0 < ey; a0++) {
				var oE = new Intl.DisplayNames([a5y[a0]], {
					type: "language"
				}).of(a5y[a0]);
				oE !== a5y[a0] && (a5y[a0] = a5y[a0] + ": " + oE)
			}
		} catch (d) {
			console.log("error 3646: " + d)
		}
		return a5y
	}, this.a60 = function(a61) {
		for (var oE = bX.dW.data[12].value, ey = a61.length, a0 = 0; a0 < ey; a0++)
			if (oE === a61[a0].split(":")[0]) return a0;
		return 0
	}
}

function a5i() {
	this.L84 = ["Very Easy", "Easy", "Normal", "Hard", "Very Hard", "Impossible", "Enabled", "Team {0}", "Team {0} won the game!", "You have earned a participation reward of {10} gold.", "You have earned prize money of {10} gold.",
		"The following clans have won these glorious points:", "Validate the clan results by clicking here: ", "❌ Back", "⚠️ Error", "Error {10}", "Not Enough Gold!", "You need more gold to perform this action.", "Quit Game", "More", "Accept",
		"You have conquered {0}.", "You have been conquered by {0}.", "Congratulations! You have won the game.", "{0} has won the game.", "{0} has broken the non-aggression pact.", "{0} is attacking you!", "Choose your start position!",
		"You have surrendered!", "The game has ended in a stalemate!", "Error: {20}", "{0} has been immortalized!", "Neutral Land: {0}", "Player: {0}   Balance: {11}   Territory: {12}   Coordinates: {13}", "Mountains: {10}", "Water: {10}",
		"Ship Owner: {0}   Strength: {11}", "Message to {0}: ", "Humanity triumphs! The undead have been beaten back.", "The Resistance", "Mankind's era ends, overrun by the relentless tide of the undead.", "The Virus",
		"If peace is agreed upon, the game ends in a stalemate.", "If peace is agreed upon, the largest territory holder wins the game.", "You have signed a non-aggression pact with {0}.", "You have asked {0} to sign a non-aggression pact.",
		"{0} has accepted the non-aggression pact.", "{0} requests a non-aggression pact.", "You have asked {10} players to attack {1}.", "You have asked {0} to attack {1}.", "{0} suggests you attack {1}.", "You have exported 1 resource to {0}.",
		"You have exported {10} resources to {1}.", "A tax of 1 unit has been deducted.", "A tax of {10} units has been deducted.", "A bot ({0}) has supported you with 1 resource.", "A bot ({0}) has supported you with {11} resources.",
		"{0} has supported you with 1 resource.", "{0} has supported you with {11} resources.", "Map: {10}", "Dimension: {10}x{11}", "Overall Pixels: {10}", "Land: {10} ({11})", "Water: {10} ({11})", "Mountains: {10} ({11})",
		"Full sending is disabled.", "{0} has been conquered by {1}.", "{0} has left the game.", "{0} has surrendered.", "{0} has joined the game.", "{10} players have been conquered.", "{10} players have left the game.",
		"{10} players have surrendered.", "YOU HAVE CONQUERED", "YOU HAVE BEEN CONQUERED BY", "THE GAME HAS BEEN WON BY", "MAP:", "{0} has called the peace vote.", "{0} voted for peace.", "{0} rejected peace.", "second played", "seconds played",
		"LEADERBOARD", "Humans", "Players", "Bots", "Spectators", "Threshold", "Percentage", "Growth", "Income", "Time", "Hint: Click on a boat to send it to a new location.", "Hint: The top 9 emojis are ordered by usage.",
		"{0} still needs to be conquered!", "A neutral pixel at position ({10}, {11}) still needs to be conquered!", "Loading", "Back", "Joined", "Skipped", "Multiplayer", "Singleplayer", "other: ", "Custom Map", "Reset", "Maps", "Start", "You",
		"1 Player", "{10} Players", "White Arena", "Black Arena", "Island", "Mountains", "Desert", "Swamp", "Snow", "Cliffs", "Pond", "Halo", "Europe", "World", "Caucasia", "Africa", "Middle East", "Scandinavia", "North America", "South America",
		"Asia", "Australia", "Island Kingdom", "Refresh", "Public Profile", "🧈 Gold", "Account Balance: ",
		"Play more multiplayer games to earn gold. Depleted accounts will be deleted after 8 days of grace. Each day, you will lose 0.50 gold or 0.01% of your balance, whichever amount is higher.",
		"Buttons with yellow font color use a small amount of gold, which is then redirected based on the specific action taken.", "Gold is the fuel that keeps your account running! Keep the balance up!", "Gold Transfer", "Send", "Confirm",
		"Cancel", "You are about to send {10} gold from the Source Account {1}. The transaction fee is {12} gold. The Target Account ({3}) will receive {14} gold.", "Account Name", "Copy", "Password", "Show", "Hide", "Request New Password",
		"Security Tip", "To safeguard your account, never disclose your password to anyone. We will never ask for your password, as we do not require it for any service.",
		"If you have accessed your account through unofficial webpages or apps, your security may be compromised. We recommend changing your password.",
		"If you lose your password or account name, you may lose access to your account. In such a case, we are unable to recover it. Please ensure that you store your account name and password in a safe place.", "Account Options",
		"Log in to a Different Account", "Create New Account", "Delete Account: ", "🗑️ Account Deletion", "Accounts without gold will be deleted automatically after 8 days. To initiate this process, deplete all your gold.", "Saved Accounts",
		"Listed accounts may have been removed in the meantime due to insufficient funds.", "🗑️ Remove From List", "➡️ Login", "1v1 Rating", "Elo: ", "Rank: ", "Played Games: ", "Report Player",
		"You can report up to seven players per day for misconduct or other rule violations.", "No Admin", "Assistant Moderator", "Admin Coordinator", "Senior Admin", "Head Admin", "Admin Statistics", "Points: ", "Status: ",
		"You are allowed to elect up to one admin each week. Your voting power is halved for negative votes.", "Username", "Please choose a respectful username.", "Primary Clan Stats", "Clan: ", "Monthly Points: ", "Total Points: ",
		"Won Games: ", "Avg. Points per Game: ", "Secondary Clan Stats", "Clan Leader Statistics", "Clan Leader of {0}", "No Clan Leader", "Elect",
		"You are allowed to elect up to one clan leader each week. Your voting power is based on your monthly clan points.", "Clan Chart", "🛠️ Custom", "🛠️ Chart Options", "Search Terms", "Separate search terms with a comma.", "Go",
		"Start Index", "End Index", "Timeframe", "More Options", "Y-Axis Compression", "Choose Your Nation's Color!", "National Color", "Red: ", "Green: ", "Blue: ", "⏳ Connecting...", "Find Server...", "New Connection...", "Single Player",
		"My Account", "Game Menu", "Your Kingdom's Name", "Clans", "Clan Members", "1v1 Players", "Admins", "🏆 Leaderboards", "⬆️ Up", "⬇️ Down", "1v1 Player Ranking", "Clan Ranking", "Clan Member Ranking", "Admin Ranking", "1v1 Reports",
		"Admin Election", "Blockchain", "Clan Leader Election", "Ranking", "Player", "Elo", "Clan", "Points", "Leader", "Index", "Seconds Ago", "Accuser", "Accused", "Elector", "Elected", "Sender", "Receiver", "Amount", "🛠️ List Options",
		"Clan Name Search", "Username Search", "Matches", "Account Name Search", "Login", "📜 Logs", "▶️ Replay", "🔲 Select All", "📋 Copy", "🗑️ Clear", "▶️ Launch", "Insert the replay link here!", "⚙️ Settings", "🔄 Reset", "Reload Required",
		"A game reload is required to apply the new configuration.", "❌ Close", "Information", "Increasing resolution, shrinking minimum font size, and speeding up text rendering can strain your system and hinder gameplay responsiveness.",
		"Lobby", "Proxied Lobby", "Resolution", "Low", "Medium", "High", "Very High", "Minimum Font Size", "Small", "Very Small", "Text Rendering Speed", "Slow", "Fast", "Large UI", "Place Balance Above", "Hide Zoom Buttons", "Font", "Language",
		"🔑 My Account", "📈 Charts", "🧈 Gold Transfer", "🔗 Links", "ℹ️ Game Version", "🗑️ Delete Data", "Privacy Settings", "Force Restart Game", "☰ Game Menu", "📊 Game Statistics", "🏳️ Surrender", "🕊️ Call Peace Vote", "Android App",
		"iOS App", "Changelog", "Clan Results", "Tutorial", "Terms", "Privacy",
		"Do you want to delete all locally stored data, like usernames, account data and setting data? Your account will be deleted automatically after 3 months of inactivity. To prevent the storage of new data, it is recommended to close the game after deletion.",
		"🗑️ Delete", "User Privacy", "Check out our Privacy Policy at:", "Source Account", "Target Account", "An enemy ship belonging to {0} is heading towards your shore.", "Avg. Attack Strength", "Number Attacks", "Ships sent",
		"Bots conquered", "Humans conquered", "Attacked by Bots", "Attacked by Humans", "Territorial Loss", "Territorial Income", "Interest Income", "Received Support", "Overall Income", "Commanding Costs", "Attack Losses", "Defense Losses",
		"Shipping Losses", "Transmitted Support", "Overall Expenses", "Territory", "Balance", "Numbers", "Statistics", "White", "Red", "Green", "Blue", "Yellow", "Magenta", "Cyan", "Black"
	]
}

function dJ() {
	var fg, fh, iF, a62, a63, a64, a65, a66, a67, u, xx, a68;
	this.tE = !1, this.dE = function(oE, a69) {
		if (1 === m.id && 13 <= m.dt && m.dt < 18) return a69 ? void(xx = oE) : xx !== oE ? void 0 : void m.t.saveString(200, oE);
		a69 && (xx = oE, (a68 = document.createElement("a")).appendChild(document.createTextNode(xx)), this.tE = !0, a68.title = xx, a68.target = "_blank", a68.href = xx, a68.style.textAlign = "center", a68.style.color = p.lv, a68.style
			.position = "absolute", a68.style.padding = "0px", a68.style.margin = "0px", this.resize(), document.body.appendChild(a68), bT.dL = !0)
	}, this.pr = function() {
		return !(!this.tE || (document.body.removeChild(a68), this.tE = !1))
	}, this.fo = function(gp, gq) {
		return !!this.tE && ((gp < fg || gq < fh || fg + u < gp || fh + iF < gq || fg + u - a62 < gp && gq < fh + a62) && (bT.dL = !0, this.tE = !1, document.body.removeChild(a68)), !0)
	}, this.resize = function() {
		var zu, a6A;
		this.tE && (a66 = Math.floor(.8 * (m.n.te() ? an.u > an.iF ? .6 : .55 : .4) * an.oV), a62 = Math.floor(.15 * a66), a63 = Math.floor(.35 * a62), a64 = Math.floor(.5 * a62), a65 = Math.floor(2.5 * a64), iF = a62 + a63 + 3 * a64, zu = b2.ku
			.kz(1, a63 / an.oZ), a67 = Math.floor(an.oZ * aF.measureText(xx, zu)), a6A = u = (a66 < a67 ? a67 : a66) + 2 * a65, u = Math.min(u, an.u - 2 * (m.n.te() ? 2 : 1) * bQ.gap), zu = b2.ku.kz(1, u / a6A * a63 / an.oZ), a67 = Math
			.floor(an.oZ * aF.measureText(xx, zu)), fg = Math.floor((an.u - u) / 2), fh = Math.floor((an.iF - iF) / 2), a68.style.font = zu, a68.style.top = Math.floor((fh + 1.4 * a64 + a62) / an.oZ) + "px", a68.style.left = Math.floor((fg +
				(u - a67) / 2) / an.oZ) + "px")
	}, this.kl = function() {
		this.tE && (kv.fillStyle = p.ls, kv.fillRect(fg, fh + a62, u, iF - a62), kv.fillStyle = p.mn, kv.fillRect(fg, fh, u, a62), kv.fillStyle = p.lv, kv.lineWidth = bQ.th, kv.strokeStyle = p.lv, kv.strokeRect(fg, fh, u, iF), kv.fillRect(fg,
			fh + a62, u, bQ.th), kv.font = b2.ku.kz(1, .48 * a62), b2.ku.textAlign(kv, 1), b2.ku.textBaseline(kv, 1), kv.fillText("You are leaving Territorial.io!", Math.floor(fg + (u - .5 * a62) / 2), Math.floor(fh + .55 * a62)), aB.a06(
			Math.floor(fg + u - .8 * a62), Math.floor(fh + .25 * a62), Math.floor(.5 * a62)), kv.setTransform(1, 0, 0, 1, 0, 0))
	}
}

function dH() {
	var gap, a4m, fg = [0, 0, 0, 0, 0],
		fh = [0, 0, 0, 0, 0],
		lZ = [1, 1, 1, 1, 1],
		ds = [!0, !0, !0, !1, !1],
		il = (this.eB = [!0, !0, !0, !1, !1], null);
	this.a6B = function(xW, a6C) {
		il = xW, ds = a6C, a4m = [bA.a6D, bA.vo, bA.a6E, bA.a6E, bA.a6F], this.dE()
	}, this.dE = function() {
		if (aR.pw()) {
			var a0, pd = Math.floor((m.n.te() ? .261 : .195) * an.oV),
				pe = Math.floor(.9 * pd),
				a2S = Math.floor(.17 * pe);
			if (gap = m.n.te() ? 2 * bQ.gap : bQ.gap, lZ[0] = pd / il[0].width, lZ[1] = pe / il[1].width, lZ[2] = a2S / il[2].height, lZ[3] = a2S / il[3].height, lZ[4] = a2S / il[4].height, lZ[2] *= 1.7, lZ[3] *= 1.07, fg[0] = gap, fg[1] = gap,
				fg[2] = gap, fg[3] = gap, fg[4] = Math.floor(2 * gap + lZ[3] * il[3].width), fh[0] = gap, fh[1] = fh[0] + gap + lZ[0] * il[0].height, fh[2] = fh[1] + gap + lZ[1] * il[1].height, fh[3] = fh[2] + gap + lZ[2] * il[2].height, fh[4] =
				fh[3], !ds[0])
				for (a0 = 0; a0 < 5; a0++) fh[a0] -= lZ[0] * il[0].height + gap;
			if (!ds[1])
				for (a0 = 2; a0 < 5; a0++) fh[a0] -= lZ[1] * il[1].height + gap
		}
	}, this.tE = function() {
		return !(7 === aP.vt() && m.n.te())
	}, this.fo = function(gp, gq, a69) {
		if (il && this.tE())
			for (var a0 = ds.length - 1; 0 <= a0; a0--)
				if (ds[a0] && this.eB[a0] && fg[a0] < gp && fh[a0] < gq && gp < fg[a0] + lZ[a0] * il[a0].width && gq < fh[a0] + lZ[a0] * il[a0].height) return i.j(9, i.pW, new a6G("You are leaving Territorial.io.", b2.ku.xw(a4m[a0]))), !0;
		return !1
	}, this.kl = function() {
		if (il && this.tE()) {
			var a0;
			for (kv.imageSmoothingEnabled = !0, a0 = 0; a0 < 5; a0++) ds[a0] && this.eB[a0] && (kv.setTransform(lZ[a0], 0, 0, lZ[a0], fg[a0], fh[a0]), kv.drawImage(il[a0], 0, 0));
			kv.setTransform(1, 0, 0, 1, 0, 0)
		}
	}
}

function c6() {
	var a6H, a6I, a6J;

	function a6O(a0) {
		var button = aN.ow[a0],
			fg = button.fg,
			fh = button.fh,
			u = button.u,
			iF = button.iF;
		kv.fillStyle = button.a6M, kv.fillRect(fg, fh, u, iF), a0 === a6H && (kv.fillStyle = a6J, kv.fillRect(fg, fh, u, iF)), kv.lineWidth = bQ.th, kv.strokeStyle = a6I, kv.strokeRect(fg, fh, u, iF),
			function(button) {
				var fg = button.fg,
					fh = button.fh,
					u = button.u,
					iF = button.iF;
				b2.ku.textAlign(kv, 1), b2.ku.textBaseline(kv, 1), kv.font = button.font, kv.fillStyle = a6I, kv.fillText(button.a1B, Math.floor(fg + u / 2), Math.floor(fh + iF / 2 + .1 * button.fontSize))
			}(button)
	}
	this.u = 0, this.iF = 0, this.fh = 0, this.gap = 0, this.dE = function() {
		a6H = -1, a6I = p.lv, a6J = "rgba(255,255,255,0.16)", this.ow = new Array(7), this.iF = Math.floor((m.n.te() ? .123 : .093) * an.oV), this.u = Math.floor((m.n.te() ? 3.96 : 4.2) * this.iF), this.gap = Math.floor(.025 * this.u);
		var a6K = Math.floor(.26 * this.iF),
			a6L = b2.ku.kz(1, a6K);
		this.ow[0] = {
			fg: 0,
			fh: 0,
			u: Math.floor(.6 * this.u - this.gap / 2),
			iF: this.iF,
			a1B: "Multiplayer",
			font: a6L,
			a6M: "rgba(22,88,22,0.8)",
			fontSize: a6K
		}, a6K = Math.floor(.18 * this.iF), a6L = b2.ku.kz(1, a6K), this.ow[1] = {
			fg: 0,
			fh: 0,
			u: this.u - this.ow[0].u - this.gap,
			iF: this.iF,
			a1B: "Single Player",
			font: a6L,
			a6M: "rgba(22,88,88,0.8)",
			fontSize: a6K
		}, this.ow[2] = {
			fg: 0,
			fh: 0,
			u: this.u,
			iF: Math.floor(.3 * this.iF),
			a1B: "",
			font: this.ow[1].font,
			a6M: "rgba(100,0,0,0.8)",
			fontSize: this.ow[1].fontSize
		}, this.ow[3] = {
			fg: 0,
			fh: 0,
			u: this.u,
			iF: this.iF,
			a1B: "Back",
			font: this.ow[0].font,
			a6M: "rgba(0,0,0,0.8)",
			fontSize: this.ow[0].fontSize
		}, this.ow[4] = {
			fg: 0,
			fh: 0,
			u: this.u,
			iF: Math.floor(.3 * this.iF),
			a1B: "The game was updated!",
			font: this.ow[1].font,
			a6M: "rgba(100,0,0,0.8)",
			fontSize: this.ow[1].fontSize
		}, this.ow[5] = {
			fg: 0,
			fh: 0,
			u: this.ow[0].u,
			iF: Math.floor(.8 * this.iF),
			a1B: "Reload",
			font: this.ow[0].font,
			a6M: "rgba(0,100,0,0.8)",
			fontSize: this.ow[0].fontSize
		}, this.ow[6] = {
			fg: 0,
			fh: 0,
			u: this.ow[1].u,
			iF: this.ow[5].iF,
			a1B: "Back",
			font: this.ow[0].font,
			a6M: "rgba(0,0,0,0.8)",
			fontSize: this.ow[0].fontSize
		}, this.a3V()
	}, this.a3V = function() {
		this.fh = Math.floor(.54 * an.iF), this.ow[0].fg = Math.floor(.5 * an.u - .5 * this.u), this.ow[1].fg = this.ow[0].fg + this.ow[0].u + this.gap, this.ow[2].fg = this.ow[3].fg = this.ow[0].fg, this.ow[4].fg = this.ow[5].fg = this.ow[0].fg,
			this.ow[6].fg = this.ow[1].fg, this.ow[0].fh = Math.floor(.54 * an.iF), this.ow[1].fh = this.ow[0].fh, this.ow[2].fh = Math.floor((an.iF - this.ow[2].iF - this.ow[3].iF - this.gap) / 2), this.ow[3].fh = this.ow[2].fh + this.ow[2].iF +
			this.gap, this.ow[4].fh = Math.floor((an.iF - this.ow[4].iF - this.ow[5].iF - this.gap) / 2), this.ow[5].fh = this.ow[6].fh = this.ow[4].fh + this.ow[4].iF + this.gap
	}, this.a6N = function() {
		a6O(0), a6O(1)
	}, this.a6P = function() {
		a6O(2), a6O(3)
	}, this.a6Q = function() {
		a6O(4), a6O(5), a6O(6)
	}, this.wF = function(fg, fh, kH) {
		var a0 = -1;
		return 0 === aP.vt() ? a0 = this.wk(fg, fh, 0, 2) : 3 === aP.vt() ? a0 = this.wk(fg, fh, 3, 1) : 5 === aP.vt() && (a0 = this.wk(fg, fh, 5, 2)), a6H !== a0 && (a6H = a0, kH) && (bT.dL = !0), -1 !== a0 && (aI.we(), !0)
	}, this.wk = function(fg, fh, a6R, size) {
		for (var a0 = a6R; a0 < a6R + size; a0++)
			if (fg >= this.ow[a0].fg && fh >= this.ow[a0].fh && fg <= this.ow[a0].fg + this.ow[a0].u && fh <= this.ow[a0].fh + this.ow[a0].iF) return a0;
		return -1
	}
}

function a6T() {
	function a6a(a4W) {
		return a4W < 0 ? 0 : 255 < a4W ? 255 : Math.floor(a4W)
	}
	this.u = 0, this.iF = 0, this.tE = !1, this.a6U = 0, this.gap = 0, this.a6V = 0, this.a62 = 0, this.a6W = 0, this.a6X = 0, this.a6Y = 0, this.colors = null, this.dE = function() {
		this.tE = !0, this.a6U = 0, this.resize()
	}, this.resize = function() {
		this.tE && (an.u < 1.4 * an.iF ? this.u = Math.floor((m.n.te() ? .94 : .43) * an.u) : (this.iF = Math.floor((m.n.te() ? .88 : .43) * an.iF), this.u = Math.floor(1.4 * this.iF)), this.iF = this.u / 1.4, this.gap = this.u / 32, this.a62 =
			Math.floor(.25 * this.iF), this.a6W = (this.iF - this.a62 - 3 * this.gap) / 2, this.a6X = this.u - 3 * this.gap - this.a6W, this.a6Y = (this.iF - this.a62 - 4 * this.gap) / 3)
	}, this.a6Z = function() {
		this.colors = [
			[0, 0, 0],
			[0, 0, 0]
		];
		var oE = bX.dW.data[103].value.split("");
		if (oE.length < 6)
			for (var i5 = 2; 0 <= i5; i5--) this.colors[0][i5] = a6a(256 * Math.random());
		else
			for (var a0 = 2; 0 <= a0; a0--) this.colors[0][a0] = a6a(4 * (10 * parseInt(oE[2 * a0]) + parseInt(oE[2 * a0 + 1])));
		this.a6b()
	}, this.a6c = function() {
		return [bB.em(this.colors[0][0], 4), bB.em(this.colors[0][1], 4), bB.em(this.colors[0][2], 4)]
	}, this.wI = function(jm, jn, deltaY) {
		var kq = (an.u - this.u) / 2;
		jn -= (an.iF - this.iF) / 2 + this.a62, (jm -= kq) < 0 || jn < 0 || jm >= this.u || jn >= this.iF - this.a62 || (kq = Math.floor(3 * jn / (this.iF - this.a62)), this.colors[this.a6V][kq] = a6a(this.colors[this.a6V][kq] + (deltaY < 0 ? 1 :
			-1) * Math.max(Math.abs(.05 * deltaY), 1)), bT.dL = !0)
	}, this.fo = function(jm, jn) {
		this.a6U = 0;
		var kq = (an.u - this.u) / 2;
		return jn -= (an.iF - this.iF) / 2, (jm -= kq) < 0 || jn < 0 || jm >= this.u - 1 || jn >= this.iF - 1 || jm > this.u - (.4 * this.a62 + 3 * this.gap) && jn < this.a62 ? (this.tE = !1, !(bT.dL = !0)) : jm < this.gap || jn < this.gap + this
			.a62 || jm >= this.u || jn >= this.iF - this.gap || (jm < this.gap + this.a6W ? (jn < this.gap + this.a62 + this.a6W && 0 !== this.a6V && (this.a6V = 0, bT.dL = !0), !0) : jm < this.gap + this.a6W || (jm -= 2 * this.gap + this.a6W,
				jn < this.gap + this.a62 + this.a6Y ? (this.a6U = 1, this.colors[this.a6V][0] = a6a(256 * jm / this.a6X), bT.dL = !0) : jn < 2 * this.gap + this.a62 + this.a6Y || (jn < 2 * this.gap + this.a62 + 2 * this.a6Y ? (this.a6U = 2,
					this.colors[this.a6V][1] = a6a(256 * jm / this.a6X), bT.dL = !0) : !(jn >= 3 * this.gap + this.a62 + 2 * this.a6Y) || (this.a6U = 3, this.colors[this.a6V][2] = a6a(256 * jm / this.a6X), bT.dL = !0))))
	}, this.a6b = function() {
		for (var i5 = 2; 0 <= i5; i5--) this.colors[0][i5] = a6a(this.colors[0][i5])
	}, this.a6d = function() {
		for (var ds, oE = "", a0 = 0; a0 < 3; a0++)(ds = bB.em(this.colors[0][a0], 4)) < 10 && (oE += "0"), oE += ds.toString();
		return oE
	}, this.wF = function(jm) {
		0 !== this.a6U && (jm -= 2 * this.gap + this.a6W + (an.u - this.u) / 2, this.colors[this.a6V][this.a6U - 1] = a6a(256 * jm / this.a6X), bT.dL = !0)
	}, this.wd = function() {
		0 < this.a6U && (this.a6U = 0, this.a6b(), bX.p5.p6(103, this.a6d()), bT.dL = !0)
	}, this.kl = function() {
		var kq = (an.u - this.u) / 2,
			kr = (an.iF - this.iF) / 2;
		kv.setTransform(1, 0, 0, 1, kq, kr), kv.fillStyle = p.ls, kv.fillRect(0, this.a62, this.u, this.iF - this.a62), kv.fillStyle = p.m4, kv.fillRect(0, 0, this.u, this.a62), kv.fillStyle = p.lv, kv.lineWidth = bQ.th, kv.strokeStyle = p.lv, kv
			.strokeRect(-1, -1, this.u + 2, this.iF + 2), kv.fillRect(0, this.a62, this.u, bQ.th), kv.font = b2.ku.kz(1, .31 * this.a62), b2.ku.textBaseline(kv, 1), b2.ku.textAlign(kv, 1), kv.fillText("Choose Your Nation's Color!", Math.floor((
				this.u - this.gap - .4 * this.a62) / 2), Math.floor(.55 * this.a62)), this.a6e(0), kv.lineWidth = bQ.th, this.a6f(0), this.a6f(1), this.a6f(2), aB.a06(Math.floor(kq + this.u - .4 * this.a62 - this.gap), Math.floor(kr + .3 * this
				.a62), Math.floor(.4 * this.a62)), kv.setTransform(1, 0, 0, 1, 0, 0)
	}, this.a6e = function(a0) {
		var gP = this.colors[a0][0],
			ps = this.colors[a0][1],
			a0 = this.colors[a0][2];
		kv.fillStyle = "rgb(" + gP + "," + ps + "," + a0 + ")", kv.fillRect(this.gap, this.a62 + this.gap, this.a6W, 2 * this.a6W + this.gap), kv.lineWidth = bQ.th, kv.strokeStyle = p.lv, kv.strokeRect(this.gap, this.a62 + this.gap, this.a6W, 2 *
			this.a6W + this.gap), kv.fillStyle = gP + ps + a0 < 306 && ps < 150 ? p.lv : p.l0, kv.font = b2.ku.kz(1, .32 * this.a6Y), b2.ku.textAlign(kv, 1), b2.ku.textBaseline(kv, 1), kv.rotate(-Math.PI / 2), kv.fillText("National Color",
			Math.floor(-1.5 * this.gap - this.a62 - this.a6W), Math.floor(this.gap + .5 * this.a6W)), kv.rotate(Math.PI / 2)
	}, this.a6f = function(a0) {
		kv.fillStyle = "rgb(" + (0 === a0 ? 150 : 2 === a0 ? 30 : 0) + "," + (1 === a0 ? 130 : 2 === a0 ? 30 : 0) + "," + (2 === a0 ? 220 : 0) + ")", kv.fillRect(2 * this.gap + this.a6W, this.a62 + this.gap + a0 * (this.gap + this.a6Y), Math
				.floor(this.colors[this.a6V][a0] * this.a6X / 255), this.a6Y), kv.strokeStyle = p.lv, kv.strokeRect(2 * this.gap + this.a6W, this.a62 + this.gap + a0 * (this.gap + this.a6Y), this.a6X, this.a6Y), kv.fillStyle = p.lv, kv.font = b2
			.ku.kz(1, .32 * this.a6Y), b2.ku.textBaseline(kv, 1), b2.ku.textAlign(kv, 0), kv.fillText((0 === a0 ? "Red: " : 1 === a0 ? "Green: " : "Blue: ") + this.colors[0][a0].toString(), 3 * this.gap + this.a6W, Math.floor(this.a62 + this
				.gap + a0 * (this.gap + this.a6Y) + .53 * this.a6Y))
	}
}

function c7() {
	var a6g, a6h, a1L, a1V, a2K, a6i, a6j, a6k, a6l, zu, fontSize, lG, a6m, a6o, a6n = 0;

	function a6r() {
		return aq.k9.a6s[(a6m + a6n) % aq.k9.a6t]
	}

	function a6p() {
		a6m++, lG = bT.dp, aq.k9.a6u(a6r(), 4) && (a6o = !0, aq.a6v.a6w(a6r()))
	}

	function a6x() {
		0 === a6m ? g.w1(3249) : (a6m === aq.k9.a6t - 1 && (a6m = -1), a6p())
	}

	function a74(fh, a3C, a73) {
		var kq = Math.floor((an.u - a1V) / 2) + a6j,
			ks = kq + Math.floor(a73 * (a1V - 2 * a6j));
		kv.lineWidth = a3C, kv.beginPath(), kv.moveTo(kq, fh), kv.lineTo(ks, fh), kv.lineTo(Math.floor(kq - a6j + a73 * a1V), fh + a1L), kv.lineTo(kq - a6j, fh + a1L), kv.closePath()
	}
	this.dE = function() {
		aP.setState(6), a6g = 0, a6h = 1, a6k = "rgba(0,220,120,0.4)", a6l = "rgba(0,0,0,0.8)", this.resize(), bT.dL = !0, a6m = 0, a6o = !1, a6p()
	}, this.resize = function() {
		a1V = Math.floor((m.n.te() ? .5 : .25) * an.oV), a2K = a1V + 12, a1L = Math.floor(.125 * a1V), a6j = 3 * a1L, a6i = Math.floor(.225 * a1V), fontSize = Math.floor(.3 * a1L), zu = b2.ku.kz(0, fontSize)
	}, this.a6q = function(hz) {
		a6n = hz
	}, this.vu = function(vq) {
		vq === a6r() && (a6o = !1, a6x())
	}, this.a6y = function(vq) {
		6 !== aP.vt() || a6o || (lG = bT.dp, a6o = !0)
	}, this.fo = function(fg, fh) {
		var kq = Math.floor((an.u - a2K) / 2),
			kr = Math.floor(.5 * (an.iF - bQ.gap - a1L - a6i)) + a1L + bQ.gap;
		return kq < fg && fg < kq + a2K && kr < fh && fh < kr + a6i && (this.wz(), aN.wF(fg, fh, !1), !0)
	}, this.wz = function() {
		aq.k9.w4(3260), i.k9.w3()
	}, this.hb = function() {
		6 === aP.vt() && (a6o ? bT.dp > lG + 12e3 && g.w1(3250) : bT.dp > lG + 12e3 && a6x(), 100 < (a6g += .07 * a6h * (a6g < 16 ? 5 + a6g : 84 < a6g ? 105 - a6g : 17)) ? (a6g = 100, a6h = -1) : a6g < 0 && (a6g = 0, a6h = 1), a6k = "rgba(0," +
			Math.floor(190 - 1.9 * a6g) + "," + Math.floor(120 - 1.2 * a6g) + "," + (.4 + .004 * a6g) + ")", a6l = "rgba(0," + Math.floor(1.9 * a6g) + "," + Math.floor(1.2 * a6g) + "," + (.8 - .004 * a6g) + ")", bT.dL = !0)
	}, this.kl = function() {
		var fg = Math.floor((an.u - a2K) / 2),
			fh = Math.floor(.5 * (an.iF - bQ.gap - a1L - a6i));
		! function(title, fh, a3C, a73) {
			kv.fillStyle = a6l, a74(fh, a3C, 1), kv.fill(), kv.fillStyle = a6k, a74(fh, a3C, a73), kv.fill(), kv.strokeStyle = p.lv, a74(fh, a3C, 1), kv.stroke(),
				function(a76, fh) {
					b2.ku.textAlign(kv, 1), b2.ku.textBaseline(kv, 1), kv.font = zu, kv.fillStyle = p.lv, kv.fillText(a76, Math.floor(.5 * an.u), Math.floor(fh + .58 * a1L))
				}(title, fh)
		}(L(96), fh, 3, a6g / 100),
		function(fg, fh, u, iF, a1B) {
			kv.fillStyle = p.lq, kv.fillRect(fg, fh, u, iF), kv.lineWidth = 3, kv.strokeStyle = p.lv, kv.strokeRect(fg, fh, u, iF);
			var ey = Math.floor(.3 * iF);
			b2.ku.textAlign(kv, 1), b2.ku.textBaseline(kv, 1), kv.font = b2.ku.kz(0, ey), kv.fillStyle = p.lv, kv.fillText(a1B, Math.floor(fg + u / 2), Math.floor(fh + iF / 2 + .1 * ey))
		}(fg, fh + a1L + bQ.gap, a2K, a6i, L(97))
	}
}

function c8() {
	var dn = 0;
	this.dE = function() {
		aN.dE(), dn = 0
	}, this.setState = function(a77) {
		dn = a77
	}, this.vt = function() {
		return dn
	}, this.a78 = function() {
		this.setState(8), aj.w5(), i.qy()
	}, this.wp = function(d) {
		if (!bI.rm) return !1;
		if (!(bT.dp < 400)) {
			if ("Enter" === d.key || "Escape" === d.key) {
				if (this.a79()) return !0;
				if ("Enter" === d.key) {
					if (0 === dn) return !0;
					if (7 === dn) return !0
				}
			}
			return !1
		}
	}, this.a7A = function() {
		bN.resize()
	}, this.a79 = function() {
		return !!bN.pr()
	}, this.fo = function(fg, fh) {
		!bI.rm || bN.fo(fg, fh) || 6 === dn && aO.fo(fg, fh) || 2 === dn && aQ.fo(fg, fh) || (aI.fo(fg, fh), 0 !== dn && 7 === dn && aj.fo(fg, fh))
	}, this.wF = function(fg, fh) {
		if (!aI.a3O) {
			if (2 === dn && aQ.wF(fg, fh)) return void aI.we();
			if (aN.wF(fg, fh, !0)) return
		}
		aI.wF(fg, fh)
	}, this.click = function(fg, fh) {
		aI.wf(), bM.fo(fg, fh, !1)
	}, this.wI = function(fg, fh, deltaY) {}, this.a7B = function() {
		aN.a3V(), 0 !== dn && 7 === dn && aj.resize(), bT.dL = !0
	}, this.kl = function() {
		8 !== dn && 10 !== dn && (kv.imageSmoothingEnabled = !0, this.sq(), 0 !== dn && (aI.kl(), aD.kl(), this.a7C(), bM.kl()), 0 !== dn && (2 === dn ? aQ.kl() : 6 === dn ? aO.kl() : 7 === dn && aj.kl()), bN.kl(), i.kl())
	}, this.sq = function() {
		var a7E, a7D;
		if (makeMainMenuTransparent) kv.clearRect(0, 0, an.u, an.iF);
		else bI.rm ? (a7D = an.u / bI.eT, a7E = an.iF / bI.eU, kv.setTransform(a7D = a7E < a7D ? a7D : a7E, 0, 0, a7D, Math.floor((an.u - a7D * bI.eT) / 2), Math.floor((an.iF - a7D * bI.eU) / 2)), kv.drawImage(bI.ro, 0, 0), kv.setTransform(1, 0,
			0, 1, 0, 0), kv.fillStyle = p.lq) : kv.fillStyle = p.l0, kv.fillRect(0, 0, an.u, an.iF)
	}, this.a7C = function() {
		var fh = Math.floor(.3 * an.iF),
			gM = aR.a7F("territorial.io"),
			gL = (gL = 1.75 * an.iF / gM.width) * gM.width < .98 * an.u ? .98 * an.u / gM.width : gL,
			fg = (kv.globalAlpha = .15, kv.imageSmoothingEnabled = !1, Math.floor(.5 * (an.u - gL * gM.width))),
			fg = Math.floor(fg / gL),
			fh = Math.floor(fh - .5 * gM.height * gL),
			fh = Math.floor(fh / gL);
		kv.setTransform(gL, 0, 0, gL, fg, fh), kv.drawImage(gM, fg, fh), kv.setTransform(1, 0, 0, 1, 0, 0), kv.globalAlpha = 1, kv.imageSmoothingEnabled = !0
	}
}

function cZ() {
	var a1, a7I, a7J, a7K;
	this.a7G = 0, this.a7H = 0, this.dE = function() {
		var gM, lZ;
		7 === aP.vt() && (a1 = b7.a1, a7I = 0, a7J = bT.dp + 4500, a7K = aq.a0p.a7L() ? 2 : 0, aP.setState(10), kv.imageSmoothingEnabled = !0, aP.sq(), gM = aR.a7F("loading"), lZ = (m.n.te() ? .396 : .25) * an.oV / gM.width, kv.setTransform(lZ,
			0, 0, lZ, Math.floor((an.u - lZ * gM.width) / 2), Math.floor((an.iF - lZ * gM.height) / 2)), kv.imageSmoothingEnabled = !1, kv.drawImage(gM, 0, 0), kv.setTransform(1, 0, 0, 1, 0, 0))
	}, this.kF = function() {
		0 < a7K && bT.dp > a7J && (a7K--, a7J += 4500, 0 === bT.a7M) && 0 === bT.er() && (0 === a7K && aq.k9.vw < aq.k9.a7N && (aq.k9.vw += aq.k9.a7O), aq.k9.a6u(aq.k9.vw, 5))
	}, this.a7P = function() {
		var f5, a0;
		return 10 === aP.vt() && (f5 = b7.a1, a0 = b7.kf, aq.a0p.a7Q(a1), a1 = null, b7.dE(f5), b7.kf = a0, !0)
	}, this.a7R = function() {
		10 === aP.vt() && 2 <= ++a7I && (aq.a0p.a7Q(a1), a1 = null)
	}
}

function cW() {
	var a7T, a7U, a7V, a7W, a7X, a7Y, a7Z, oQ, a7b, a7d, a7e, a7f, a7i, a7j, a7k, a7l, a7m, a7a = 48,
		a7c = 128,
		a7g = [L(98), L(99), L(100), L(101)],
		a7h = [0, 0, 0, 0];

	function a7q(a0, nB) {
		a0 = a7Z[a0].getContext("2d", {
			alpha: !0
		});
		a0.clearRect(0, 0, a7a, a7a), aa.rr.ti(nB, a0, 0, 0, a7a)
	}

	function a7p(a0, xW) {
		var a0 = a7Z[a0].getContext("2d", {
				alpha: !0
			}),
			zoom = (a0.clearRect(0, 0, a7a, a7a), a7a / xW.width),
			dq = a7a / xW.height,
			zoom = dq < zoom ? dq : zoom;
		a0.imageSmoothingEnabled = !0, a0.setTransform(zoom, 0, 0, zoom, Math.floor((a7a - zoom * xW.width) / 2), Math.floor((a7a - zoom * xW.height) / 2)), a0.drawImage(xW, 0, 0), a0.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a7u(il, gP, a7x, gN) {
		gN.beginPath(), gN.moveTo(il, il), gN.lineTo(il + Math.cos(a7x) * gP, il + Math.cos(a7x + 1.5 * Math.PI) * gP), gN.stroke()
	}

	function a8D() {
		if (7 === aP.vt()) {
			for (var gZ, xW, gN, zoom, dq, hz = -1, a0 = oQ.length - 1; 0 <= a0; a0--)
				if (null === oQ[a0].gM) {
					hz = a0;
					break
				} - 1 !== hz && (null !== (gZ = a81(oQ[hz].a85, oQ[hz].a86)) ? oQ[hz].gM = gZ : (gZ = {
					eT: bI.eT,
					eU: bI.eU,
					ro: bI.ro,
					rk: bI.rk,
					rl: bI.rl,
					rp: bI.rp,
					s9: bI.s9,
					a82: bI.a82
				}, bI.w(oQ[hz].a85, oQ[hz].a86), bI.rn.a8E(), (xW = document.createElement("canvas")).width = a7c, xW.height = a7c, gN = xW.getContext("2d", {
					alpha: !1
				}), (zoom = a7c / bI.eT) < (dq = a7c / bI.eU) && (zoom = dq), gN.imageSmoothingEnabled = !0, gN.setTransform(zoom, 0, 0, zoom, (a7c - zoom * bI.eT) / 2, (a7c - zoom * bI.eU) / 2), gN.drawImage(bI.ro, 0, 0), bI.eT = gZ.eT, bI
				.eU = gZ.eU, bI.ro = gZ.ro, bI.rk = gZ.rk, bI.rl = gZ.rl, bI.rp = gZ.rp, bI.s9 = gZ.s9, bI.a82 = gZ.a82, oQ[hz].gM = xW), bT.dL = !0)
		}
	}

	function a81(a85, a86) {
		for (var a0 = oQ.length - 1; 0 <= a0; a0--)
			if (null !== oQ[a0].gM && oQ[a0].a85 === a85 && oQ[a0].a86 === a86) return oQ[a0].gM;
		return null
	}
	this.dE = function() {
		var a0;
		for (a7m = 0, a7d = -1, aP.setState(7), oQ = [], this.resize(), a7Z = new Array(13), a0 = a7Z.length; 0 <= a0; a0--) a7Z[a0] = document.createElement("canvas"), a7Z[a0].width = a7a, a7Z[a0].height = a7a;
		for (a0 = 0; a0 < 7; a0++) ! function(jM) {
			var a7s, gN = a7Z[jM - 2].getContext("2d", {
					alpha: !0
				}),
				a7r = 1.5 * Math.PI,
				il = Math.floor(.5 * a7a),
				gP = Math.floor(.48 * a7a);
			gN.lineWidth = 2, gN.strokeStyle = p.lv, gN.clearRect(0, 0, a7a, a7a);
			for (var a0 = 0; a0 < jM; a0++) a7s = a7r + 2 * Math.PI / jM,
				function(a0, il, gP, a7r, a7s, gN) {
					gN.fillStyle = bU.a7w[a0], gN.beginPath(), gN.arc(il, il, gP, a7r, a7s), gN.lineTo(il, il), gN.fill()
				}(a0 + 1, il, gP, a7r, a7s, gN), 0 !== a0 && a7u(il, gP, a7r, gN), a7r = a7s;
			a7u(il, gP, 1.5 * Math.PI, gN),
				function(il, gP, gN) {
					gN.beginPath(), gN.arc(il, il, gP, 0, 2 * Math.PI), gN.stroke()
				}(il, gP, gN)
		}(a0 + 2);
		a7p(7, aR.get(4)), a7q(8, aa.tB.tW + aa.tB.tn), a7q(9, aa.tB.tW + aa.tB.tl), a7q(10, 1024 - aa.tB.tT), a7p(11, aR.get(19)), a7p(12, aR.get(20)), bT.dL = !0
	}, this.wy = function() {
		this.w5(), aq.k9.w4(3240), aP.setState(0), i.j(5, 5)
	}, this.w5 = function() {
		oQ = [], a7Z = []
	}, this.a1J = function() {
		return a7f
	}, this.resize = function() {
		var a7y, rc, a2a, a7z;
		for (a7V = [0, 0], a7b = [0, 0, 0, 0], a7l = m.n.te() ? (a7e = Math.floor(.8 * .4 * an.oV), a7f = Math.floor(.56 * a7e), a7b[0] = bQ.gap, an.u < an.iF ? (a7b[1] = a7f + 2 * bQ.gap, a7b[2] = an.u - 3 * a7b[0], a7b[3] = an.iF - 3 * bQ.gap -
				a7f, a7j = Math.floor(.95 * a7f), a7k = Math.floor((an.u - a7e - bQ.gap) / 2), Math.floor(bQ.gap + a7f / 2)) : (a7b[1] = bQ.gap, a7b[2] = an.u - 3 * bQ.gap - a7e, a7b[3] = an.iF - 2 * bQ.gap, a7j = Math.floor(.8 * a7e), a7b[
				3] - a7f < a7e && (a7j = Math.floor(.8 * (a7b[3] - a7f)), a7j = a0X(a7f, a7j)), a7k = Math.floor(an.u - a7e / 2 - bQ.gap), a0X(a7l = Math.floor(bQ.gap + a7f + (a7b[3] - a7f) / 2), Math.floor(a7f + 2 * bQ.gap + a7j / 2)))) : (a7e =
				Math.floor(.2016 * an.oV), a7f = Math.floor(.56 * a7e), a7b[2] = Math.floor(.5 * an.u), a7b[3] = Math.floor(.5 * an.iF), a7b[1] = Math.floor(.45 * (an.iF - a7b[3])), a7b[0] = Math.floor((an.u - a7b[2]) / 2), a7j = Math.floor(.75 *
					a7f), a7k = Math.floor(an.u / 2), Math.floor(a7b[1] + a7b[3] + (an.iF - a7b[3] - a7b[1]) / 2)), a7i = b2.ku.kz(1, .65 * a7f / 4), a7y = rc = 1; a7y * rc < oQ.length;) a7b[3] / (rc + 1) < a7b[2] / (a7y + 1) ? a7y++ : rc++;
		a2a = (a7b[2] - (a7y - 1) * bQ.gap) / a7y, a7z = (a7b[3] - (rc - 1) * bQ.gap) / rc, a7T = a2a < a7z ? a2a : a7z, a7U = Math.floor(a7T), a7Y = b2.ku.kz(1, .5 * a7T / 5), a7V[0] = a7y, a7V[1] = rc, a7W = a7b[0] + Math.floor((a7b[2] - a7V[
			0] * a7T - (a7V[0] - 1) * bQ.gap) / 2), a7X = a7b[1] + Math.floor((a7b[3] - a7V[1] * a7T - (a7V[1] - 1) * bQ.gap) / 2)
	}, this.p6 = function(a80, f5) {
		var a0, dq, gM, ey = oQ.length;
		for (a7h = a80, a0 = 0; a0 < f5.length; a0++) gM = a81(f5[a0].s9, f5[a0].a82), oQ.push({
			a83: f5[a0].id,
			yz: f5[a0].yz,
			z0: f5[a0].a84,
			a85: f5[a0].s9,
			a86: f5[a0].a82,
			joined: f5[a0].a87,
			a1G: f5[a0].a73,
			a88: f5[a0].a88,
			gM: gM,
			a89: f5[a0].a89,
			a8A: f5[a0].a8A,
			a8B: f5[a0].a8B
		});
		for (a0 = ey - 1; 0 <= a0; a0--) oQ.shift();
		if (-1 !== a7d)
			for (dq = a7d, a7d = -1, a0 = oQ.length - 1; 0 <= a0; a0--)
				if (oQ[a0].a83 === dq) {
					a7d = dq;
					break
				}(oQ.length > a7m || oQ.length < a7m) && (a7m = oQ.length, this.resize()), this.a8C(), bT.dL = !0
	}, this.a8C = function() {
		for (var a0 = oQ.length - 1; 0 <= a0; a0--) null === oQ[a0].gM && setTimeout(a8D, 0)
	}, this.fo = function(fg, fh) {
		return 4 * ((fg - a7k) * (fg - a7k) + (fh - a7l) * (fh - a7l)) <= a7j * a7j ? (this.wy(), aN.wF(fg, fh, !1), !0) : function(fg, fh) {
			var hz, i5, kq, kr;
			if (0 !== oQ.length) {
				var a0 = 0;
				for (kr = a7X, i5 = 0; i5 < a7V[1]; i5++) {
					for (kq = a7W, hz = 0; hz < a7V[0]; hz++) {
						if (kq < fg && fg < kq + a7T && kr < fh && fh < kr + a7T) return aq.a6v.a8G(oQ[a0].a83), a7d = oQ[a0].a83 !== a7d ? oQ[a0].a83 : -1, bT.dL = !0;
						if (++a0 >= oQ.length) return !1;
						kq += a7T + bQ.gap
					}
					kr += a7T + bQ.gap
				}
			}
			return !1
		}(fg, fh)
	}, this.kl = function() {
		var hz, i5, fg, gP, zoom, a0 = 0,
			fh = a7X;
		if (kv.imageSmoothingEnabled = !0, kv.lineWidth = 3, gP = Math.floor(.5 * a7j), kv.fillStyle = p.lq, kv.beginPath(), kv.arc(a7k, a7l, gP, 0, 2 * Math.PI), kv.fill(), kv.strokeStyle = p.lv, kv.beginPath(), kv.arc(a7k, a7l, gP, 0, 2 * Math
				.PI), kv.stroke(), gP = aR.get(0).height, zoom = .6 * a7j / gP, kv.setTransform(zoom, 0, 0, zoom, Math.floor(a7k - .56 * zoom * aR.get(0).width), Math.floor(a7l - .5 * zoom * gP)), kv.drawImage(aR.get(0), 0, 0), kv.setTransform(1,
				0, 0, 1, 0, 0), function() {
				kv.fillStyle = p.lq, kv.fillRect(an.u - a7e - bQ.gap, bQ.gap, a7e, a7f), 0 <= a7d ? (kv.fillStyle = p.mD, kv.fillRect(an.u - a7e - bQ.gap, bQ.gap, a7e, Math.floor(.25 * a7f))) : (kv.fillStyle = p.me, kv.fillRect(an.u - a7e - bQ
					.gap, bQ.gap + Math.floor(.25 * a7f), a7e, Math.floor(.25 * a7f)));
				kv.strokeStyle = p.lv, kv.strokeRect(an.u - a7e - bQ.gap, bQ.gap, a7e, a7f), kv.fillStyle = p.lv, kv.font = a7i, b2.ku.textBaseline(kv, 1);
				for (var fh, a8K = Math.floor(.04 * a7e), a09 = Math.floor(.08 * a7f), a0 = 3; 0 <= a0; a0--) fh = Math.floor(bQ.gap + (a0 + 1) * (a7f + 2 * a09) / 5 - a09), b2.ku.textAlign(kv, 0), kv.fillText(a7g[a0], an.u - a7e - bQ.gap + a8K,
					fh), b2.ku.textAlign(kv, 2), kv.fillText(b2.l2.l3(a7h[a0]), an.u - bQ.gap - a8K, fh)
			}(), 0 !== oQ.length)
			for (i5 = 0; i5 < a7V[1]; i5++) {
				for (fg = a7W, hz = 0; hz < a7V[0]; hz++) {
					if (! function(a0, fg, fh) {
							var zoom, i5, a8L, a8N, a8O;
							null === oQ[a0].gM ? (kv.fillStyle = p.lq, kv.fillRect(fg, fh, a7U, a7U)) : (zoom = a7U / a7c, kv.setTransform(zoom, 0, 0, zoom, fg, fh), kv.drawImage(oQ[a0].gM, 0, 0), kv.setTransform(1, 0, 0, 1, 0, 0));
							a7d === oQ[a0].a83 ? (function(fg, fh) {
								var pd = Math.floor(.2 * a7U),
									pe = Math.floor(.3 * pd);
								kv.fillStyle = p.mF, kv.fillRect(fg + a7U - pd, fh, pd, pd), kv.fillStyle = p.l0, kv.fillRect(fg + a7U - pd, fh, 2, pd), kv.fillRect(fg + a7U - pd, fh + pd - 2, pd, 2), aB.a06(fg + a7U - pd + pe, fh + pe,
									pd - 2 * pe), kv.setTransform(1, 0, 0, 1, 0, 0)
							}(fg, fh), kv.lineWidth = 3, kv.fillStyle = p.mF) : kv.fillStyle = p.lo;
							a8N = Math.floor(a7T / 4), kv.fillRect(fg, fh, a8N, a8N), a8O = Math.floor(fh + .8 * a7T), kv.fillRect(fg, a8O, a7U, Math.floor(a7T / 5)),
								function(a0, fg, fh) {
									var zoom;
									oQ[a0].z0 && (a0 = aR.get(4), zoom = .5 * a7T / a0.width, kv.setTransform(zoom, 0, 0, zoom, Math.floor(fg + (a7T - zoom * a0.width) / 2), Math.floor(fh + (a7T - zoom * a0.height) / 2)), kv.globalAlpha = .6, kv
										.drawImage(a0, 0, 0), kv.globalAlpha = 1, kv.setTransform(1, 0, 0, 1, 0, 0))
								}(a0, fg, fh);
							var a8Q = new Array(oQ[a0].a89);
							if (oQ[a0].a89) {
								for (i5 = a8L = 0; i5 < oQ[a0].a89; i5++) oQ[a0].a8A[i5] = b2.su.xi(oQ[a0].a8A[i5], a7Y, .4 * a7T), a8Q[i5] = ("" === oQ[a0].a8A[i5] ? L(102) : "[" + oQ[a0].a8A[i5] + "]: ") + oQ[a0].a8B[i5];
								for (i5 = 0; i5 < oQ[a0].a89; i5++) a8L = Math.max(a8L, aF.measureText(a8Q[i5], a7Y));
								a8L += .05 * a7T, i5 = 5 === oQ[a0].a89, a8N = i5 ? fh + a8N : Math.max(fh + .8 * a7T - .11 * oQ[a0].a89 * a7T, fh + a8N), a8O = i5 ? a8O : Math.min(a8N + .11 * oQ[a0].a89 * a7T + .05 * a7T, a8O), kv.fillRect(fg,
									a8N, a8L, a8O - a8N)
							}
							for (kv.font = a7Y, b2.ku.textBaseline(kv, 1), b2.ku.textAlign(kv, 0), kv.fillStyle = p.mZ, kv.fillText(oQ[a0].joined.toString(), Math.floor(fg + .22 * a7T), Math.floor(fh + .9 * a7T)), kv.fillStyle = p.lv, i5 =
								0; i5 < oQ[a0].a89; i5++) kv.fillText(a8Q[oQ[a0].a89 - i5 - 1], Math.floor(fg + .03 * a7T), Math.floor(fh + .77 * a7T - .11 * i5 * a7T));
							b2.ku.textAlign(kv, 2), kv.fillStyle = p.mL, kv.fillText(oQ[a0].a1G.toString(), Math.floor(fg + .81 * a7T), Math.floor(fh + .9 * a7T)), kv.strokeStyle = a7d === oQ[a0].a83 ? p.mE : p.lx, kv.strokeRect(fg, fh, a7U,
								a7U), a8O = Math.floor(.16 * a7T), zoom = a8O / a7a, kv.setTransform(zoom, 0, 0, zoom, Math.floor(fg + .33 * a8O), Math.floor(fh + .33 * a8O)), a7Z.length > oQ[a0].yz && kv.drawImage(a7Z[oQ[a0].yz], 0, 0);
							kv.setTransform(zoom, 0, 0, zoom, Math.floor(fg + .15 * a8O), Math.floor(fh + a7T - 1.08 * a8O)), kv.drawImage(a7Z[11], 0, 0), kv.setTransform(zoom, 0, 0, zoom, Math.floor(fg + a7T - 1.05 * a8O), Math.floor(fh + a7T -
								1.15 * a8O)), kv.drawImage(a7Z[12], 0, 0), kv.setTransform(1, 0, 0, 1, 0, 0)
						}(a0, Math.floor(fg), Math.floor(fh)), ++a0 >= oQ.length) return;
					fg += a7T + bQ.gap
				}
				fh += a7T + bQ.gap
			}
	}
}

function c9() {
	var a8S = [0, 0, 0, 0];

	function a8h(fg, fh, gG, a8k) {
		kv.fillStyle = p.lv;
		var pd = a0X(2, Math.floor((a8k ? .5 : .35) * gG)),
			a2S = (pd -= pd % 2, a0X(2, Math.floor(.1 * gG))),
			gG = (a2S -= a2S % 2, Math.floor((gG - pd) / 2)),
			ks = Math.floor(gG + (pd - a2S) / 2);
		kv.fillRect(fg + gG, fh + ks, pd, a2S), a8k && kv.fillRect(fg + ks, fh + gG, a2S, pd)
	}

	function a72(fg, fh, u, iF, a4W, xE, a1B, ht, jM) {
		kv.fillStyle = a4W, kv.fillRect(fg, fh, u, iF), 0 <= ht && function(fg, fh, u, iF, ht) {
			kv.fillStyle = "rgba(" + 22 * ht + "," + (110 - 22 * ht) + ",0,0.75)", kv.fillRect(fg, fh, (1 + ht) * u / 6, iF)
		}(fg, fh, u, iF, ht), 0 < jM && function(fg, fh, u, iF, jM) {
			kv.fillStyle = "rgba(255,255,255,0.3)", kv.fillRect(fg, fh, jM * u / a2.f2, iF)
		}(fg, fh, u, iF, jM), kv.strokeStyle = p.lv, kv.strokeRect(fg, fh, u, iF), 0 !== xE && (kv.fillStyle = p.lv, kv.font = b2.ku.kz(1, xE * iF), kv.fillText(a1B, Math.floor(fg + u / 2), Math.floor(fh + .52 * iF)))
	}
	this.jG = [{
		f7: 0,
		jM: 512
	}], this.dE = function() {
		ak.tE = !1, aP.setState(2), this.resize(), bT.dL = !0
	}, this.w5 = function() {}, this.resize = function() {
		a8S[2] = Math.floor((m.n.te() ? .49 : .4) * an.oV), a8S[1] = Math.floor((an.iF - a8S[2] / 6 - this.jG.length * (bQ.gap + a8S[2] / 10)) / 2), a8S[0] = Math.floor((an.u - a8S[2]) / 2), ak.tE && ak.resize()
	}, this.a8T = function(yz) {
		var a0;
		if (6 < yz) this.jG = [{
			f7: 0,
			jM: 512
		}];
		else {
			for (this.jG = [], a0 = 0; a0 < yz + 2; a0++) this.jG.push({
				f7: 0,
				jM: 0
			});
			this.a8U()
		}
		aq.k9.vw = 0
	}, this.a8V = function(a8W, a8X) {
		for (var ey = a8W.length, a0 = 0; a0 < ey; a0++) this.jG[a0].f7 = a8W[a0], this.jG[a0].jM = a8X[a0]
	}, this.a8Y = function(ps) {
		var a0, ey;
		if (1 === ps.t1.length)
			for (ey = this.jG.length, ps.a8W = new Array(ey), ps.a8X = new Array(ey), a0 = 0; a0 < ey; a0++) ps.a8W[a0] = this.jG[a0].f7, ps.a8X[a0] = this.jG[a0].jM
	}, this.x0 = function() {
		bT.dL = !0, ak.tE ? ak.tE = !1 : (this.w5(), aP.setState(0), i.j(5, 5))
	}, this.z3 = function() {
		var a0, jM;
		if (ay.j8) return ay.j9.a8Z;
		for (jM = 0, a0 = this.jG.length - 1; 0 <= a0; a0--) jM += this.jG[a0].jM;
		return jM
	}, this.wF = function(fg, fh) {
		return !(!ak.tE || !ak.wF(fg, fh)) || -1 !== this.wk(fg, fh)
	}, this.a8a = function() {
		var hz;
		aq.k9.vw = 0, aP.a78(), ay.j8 ? ay.a8b() : (hz = (hz = this.jG.length - 2) < 0 ? 7 : hz, a2.yw(Math.floor(16384 * Math.random()), 0, [{
			name: bX.dW.data[122].value,
			a8c: b2.color.xb(bX.k9.qx()),
			a8d: 0
		}], hz, !1, !1))
	}, this.fo = function(fg, fh) {
		if (ak.tE && !ay.j8) return ak.fo(fg, fh);
		var a0, hz, max, pd, fh = this.wk(fg, fh);
		if (-1 === fh) return !1;
		if (0 === fh) this.x0();
		else if (1 === fh) ay.j8 ? (ay.we(), bT.dL = !0) : ak.show();
		else if (100 === fh) ax.a8e();
		else if (2 === fh) this.w5(), this.a8a();
		else {
			if (ay.j8) return !1;
			if (27 === fh) this.jG.length < 8 && (this.jG.push({
				f7: 0,
				jM: a2.f2
			}), this.a8U(), this.resize(), bT.dL = !0);
			else if (a0 = Math.floor((fh - 3) / 3), fh % 3 == 0) 1 < this.jG.length && (this.jG.splice(a0, 1), this.resize(), bT.dL = !0);
			else if (pd = (a8S[2] - a8S[2] / 10 - 2 * bQ.gap) / 2, fh % 3 == 1) 0 === a0 && 1 === this.jG[a0].jM || (fg < a8S[0] + a8S[2] - 1.5 * pd - bQ.gap ? this.jG[a0].f7-- : this.jG[a0].f7++, this.jG[a0].f7 < 0 ? this.jG[a0].f7 = 5 : 5 <
				this.jG[a0].f7 && (this.jG[a0].f7 = 0), bT.dL = !0);
			else {
				for (bT.dL = !0, fh = (fg - (a8S[0] + a8S[2] - pd)) / pd - .5, fh *= fh < 0 ? -fh : fh, fh = 0 === (fh = Math.floor(fh * a2.f2)) ? 1 : fh, max = a2.f2, hz = this.jG.length - 1; 0 <= hz; hz--) a0 !== hz && (max -= this.jG[hz].jM);
				if (fh < 0) {
					if (1 === this.jG[a0].jM) return this.jG[a0].jM = max, !0
				} else if (this.jG[a0].jM === max) return this.jG[a0].jM = 1, !0;
				this.jG[a0].jM += fh, this.jG[a0].jM < 1 ? this.jG[a0].jM = 1 : this.jG[a0].jM > max && (this.jG[a0].jM = max)
			}
		}
		return !0
	}, this.a8U = function() {
		for (var jM = Math.floor(a2.f2 / this.jG.length), a8f = a2.f2 % this.jG.length, a0 = this.jG.length - 1; 0 <= a0; a0--) this.jG[a0].jM = jM;
		this.jG[0].jM += a8f
	}, this.wk = function(fg, fh) {
		var pd = (a8S[2] - 3 * bQ.gap) / 4,
			a2S = a8S[2] / 6;
		if (fg < a8S[0] || fh < a8S[1] || a8S[0] + a8S[2] <= fg) return -1;
		if (fh < a8S[1] + a2S) return fg < a8S[0] + pd ? 0 : fg < a8S[0] + pd + bQ.gap ? -1 : fg < a8S[0] + 2 * pd + bQ.gap ? 100 : fg < a8S[0] + 2 * (pd + bQ.gap) ? -1 : fg < a8S[0] + 3 * pd + 2 * bQ.gap ? 1 : fg < a8S[0] + 3 * (pd + bQ.gap) ? -
			1 : 2;
		for (var kr, a8g = a8S[2] / 10, pd = (a8S[2] - a8g - 2 * bQ.gap) / 2, a0 = 0; a0 < this.jG.length; a0++) {
			if (fh < (kr = a8S[1] + a2S + bQ.gap + a0 * (a8g + bQ.gap))) return -1;
			if (!(kr + a8g < fh)) return fg < a8S[0] + a8g ? 3 + 3 * a0 : fg < a8S[0] + a8g + bQ.gap ? -1 : fg < a8S[0] + a8S[2] - pd - bQ.gap ? 4 + 3 * a0 : fg < a8S[0] + a8S[2] - pd ? -1 : 5 + 3 * a0
		}
		return !(this.jG.length < 8) || fh < (kr = a8S[1] + a2S + bQ.gap + this.jG.length * (a8g + bQ.gap)) || kr + a8g < fh || a8S[0] + a8g < fg ? -1 : 27
	}, this.kl = function() {
		kv.lineWidth = bQ.th, b2.ku.textAlign(kv, 1), b2.ku.textBaseline(kv, 1);
		var pd = (a8S[2] - 3 * bQ.gap) / 4,
			a2S = a8S[2] / 6;
		if (a72(a8S[0], a8S[1], pd, a2S, "rgba(128,0,0,0.75)", .25, L(97), -1, -1), a72(a8S[0] + pd + bQ.gap, a8S[1], pd, a2S, "rgba(128,0,128,0.75)", .16, L(103), -1, -1), a72(a8S[0] + 2 * (pd + bQ.gap), a8S[1], pd, a2S, "rgba(" + (ay.j8 ? 128 :
				0) + ",128,128,0.75)", .25, ay.j8 ? L(104) : L(105), -1, -1), a72(a8S[0] + a8S[2] - pd, a8S[1], pd, a2S, "rgba(0,128,0,0.75)", .25, L(106), -1, -1), !ay.j8) {
			for (var kr, a8g = a8S[2] / 10, pd = (a8S[2] - a8g - 2 * bQ.gap) / 2, a0 = 0; a0 < this.jG.length; a0++) kr = a8S[1] + a2S + bQ.gap + a0 * (a8g + bQ.gap), a72(a8S[0], kr, a8g, a8g, 1 < this.jG.length ? "rgba(128,0,0,0.75)" :
				"rgba(90,90,90,0.75)", 0, null, -1), 1 < this.jG.length && a8h(a8S[0], kr, a8g, !1), a72(a8S[0] + a8g + bQ.gap, kr, pd, a8g, p.ls, .4, this.a8i(a0), this.jG[a0].f7, -1), a72(a8S[0] + a8S[2] - pd, kr, pd, a8g, p.ls, .4, this
				.a8j(a0), -1, this.jG[a0].jM);
			this.jG.length < 8 && (kr = a8S[1] + a2S + bQ.gap + this.jG.length * (a8g + bQ.gap), a72(a8S[0], kr, a8g, a8g, "rgba(0,128,20,0.75)", 0, null, -1, -1), a8h(a8S[0], kr, a8g, !0)), ak.tE && ak.kl()
		}
	}, this.a8i = function(a0) {
		return 0 === a0 && 1 === this.jG[a0].jM ? L(107) : a3.j4[this.jG[a0].f7]
	}, this.a8j = function(a0) {
		return 1 === this.jG[a0].jM ? L(108) : L(109, [this.jG[a0].jM])
	}
}

function cA() {
	var a8n, gM, uw, a8o;

	function a8u(kf, name, a8v, oE) {
		uw[kf] = name, gM[kf] = new Image, gM[kf].onload = function() {
			! function(kf, a8v) {
				var yM, yN = null;
				7 === a8v ? yM = b2.x6.yP : 8 === a8v ? (yM = b2.x6.yS, yN = .1) : 3 === a8v ? (yM = b2.x6.yQ, yN = .06) : 5 === a8v ? yM = b2.x6.yT : 6 === a8v ? yM = b2.x6.yO : 4 === a8v && (yM = b2.x6.yU);
				gM[kf] = b2.x6.yL(gM[kf], yM, yN)
			}(kf, a8v), a8x()
		}, gM[kf].onerror = function(d) {
			console.error("Error loading image at index", kf, "Error:", d), a8x()
		}, gM[kf].src = "data:image/png;base64," + oE
	}

	function a8x() {
		a8n--, a8r()
	}

	function a8r() {
		0 === a8n && (a8n = -1, a8t(), bT.dL = !0, gM[7] = a8o, gM[8] = a8o, gM[9] = a8o, gM[10] = a8o, 5 === i.pW) && i.a8z().a90.resize()
	}

	function a8t() {
		aA.zO(), bM.a6B([gM[8], gM[16], gM[9], gM[9], gM[10]], [2 !== m.id, 1 !== m.id, !0, !0, !0]), aa.rr = new tD, aa.rr.dE(), al.dF()
	}
	this.dE = function() {
		if (void 0 === gM) {
			a8n = 23, gM = new Array(a8n), uw = new Array(a8n), (a8o = document.createElement("canvas")).width = 1;
			for (var a0 = a8n - (a8o.height = 1); 0 <= a0; a0--) gM[a0] = a8o;
			a8t(), a8u(0, "exit", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAFYAAABGBAMAAACkrn5fAAAAHlBMVEUAAAAiJCI4OjdcXltoameIioejpqPExsPY29j///9xarZIAAAAyUlEQVRIx+3WQQqCQBTG8TdOB5DUI+S6nRcoPIFhu1bBHGGO4Any3TYxAkWTv1DSYr71D4b5mOE9kWmszkeC/ZptT6Ocl+xj5qgtbVR1iZn9VE2wU2uO2Jryhm2h2OaKbdZgu/NKrXVK7f6q1JpaqTWFYpvrUtqhPTTYpst0aBOv2Drltlxh392iu0U1t5I4biX13PZvF7+zvOFWihXWlNy+aqZ/M3LcivXcds1xK9kKK3GYAVtYe+8CZ/c/7Br9blSNcgn75O/tE26TasUvH0ImAAAAAElFTkSuQmCC"
					), a8u(1, "victory", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADYAAAAKAQMAAADFMz9IAAAABlBMVEUAAAD///+l2Z/dAAAASUlEQVQI12M4lvj+++efLQzHkoH0jxaGI+yMbcIcZxiOpEHoMyD6xx+GHBB9oIIhA0Q/MGCoSAfSBQYMBskP2z9bAOlEIC1hAADJYSFMvxXXTAAAAABJRU5ErkJggg=="), a8u(2, "defeat", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), a8u(3, "orders", 6,
					"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"
					), a8u(4, "crown", 4,
					"iVBORw0KGgoAAAANSUhEUgAAANIAAADSCAIAAACw+wkVAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0xMi0yM1QxNDowNDo0NyswMzozMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1ZmFkNDE3NC03OWNiLTUwNDgtYWIyMi04NThmMGExODUzZTEiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4ZDQ1NTIyYS02MDRlLWYxNDUtYWM3MC1hYTQzNmJhMTIyNWQiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo3NmYxZWQyOC05MTFlLWJiNDItYjZjOC05N2EyYmU1ZmEzNzkiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NmYxZWQyOC05MTFlLWJiNDItYjZjOC05N2EyYmU1ZmEzNzkiIHN0RXZ0OndoZW49IjIwMjItMTItMjNUMTQ6MDQ6NDcrMDM6MzAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NWZhZDQxNzQtNzljYi01MDQ4LWFiMjItODU4ZjBhMTg1M2UxIiBzdEV2dDp3aGVuPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+jNxzTQAAIABJREFUeF7snXecE0X4/5/ZknbJ3SXXC/2O3qWXoyO9VykCgkgHURRE6dKUjiKC0qX3Lr33zgHXe02vm0125/fH5nK5gALq78v39yPvV+CVnZmd5LKffWbmmWdmEWDw4eN/GMo7wYeP//v4ZOfjHeCTnY93gE92Pt4BPtn5eAf4ZOfjHeCTnY93gE92Pt4BPtn5eAf4ZOfjHeCTnY93gE92Pt4BPtn5eAf4ZOfjHeCTnY93gE92Pt4BPtn5eAf4ZOfjHeCTnY93gE92Pt4BPtn5eAf4ZOfjHeCTnY93gE92Pt4BPtn5eAf4ZOfjHeCTnY93gE92/5APR8Kf64D3/X7/COTbeucf0PhbqHYbNCwc/BMw6Z3r47X47ta3pu7PEPswoEuH0lcfFcQeyE/o413AxxuAfa+3e43pp8y5NWLjzLLZtz/Ztapxv3beBXyv17581u7taPcZzJ/zuS7/AQAAJpo2rpVXYMyd8fTy994lffwNPtm9BRItSOOBDmwKefcAAAMvC/lwQA/bmckJAA7v0j7+Gp/s3hR5DsT1gZVLP+I5pjgVEaSy/bZ10uoX1mW2LE728ff4ZPdGBKRBpQ6wecdgOvQjryyCFHHydnXG/ur/Kfd0kFemj1fjk90bUakD3Ly0Um8vy3NWgpKVzEQAePm8XotXHyctlkeflsz08Sp8sns9wU9h4sjqOqY04L/swNGyUl+O7/HlnO0+2b0JPtm9njrDofXGgYA57wwPEKJoiixXKghA453n4yV8sns9HAekKMA79SV4jId/1Go57PXO8PESPtm9BtoCNaspxfJY3mnyznsJjL1TfLwSn+xeg1QDcj8pwBsJCiHkneTjVfhk9xowgjfRksOWBwDYZ+7eDJ/sXoM5EtIyXzNKQAT9hubQh4BPdq8Bk5CXb7dq70r8KwK8wu4hgrKobwnvJWK6ZKaPV+OT3evRdQRku0cGN+RYvVcWQoRV+5C1ZAAAgdB3C3dCK68iPl6BT3avptIuIFmIHwIAkNseHj0zViVPy0MaYcx7FsMcyxifI0QBgERK2z2yavwGTz72BYG+Gp/sStBmLCjiiw+rbAJ9JTj7E/zy3ZX1y0pzTgtBSt25CJBV91DQHAAsWXUopzVuOxYCXgDHAQBU2AIAQFFwfAdYQ93n+fDJrgjCCX07E1/N+L5ixWruRJPJkJmRurLzfAbb7j5KjylzTFW2n8dJyGHLEd5JJeKEZE1ENjSp12TIT2MCApTuUa1OpzN1/VgShg8dLj7zPce3lgIAoNZG2Bj7ffkyFb0zikhMfjF7xjefDG1St0YZVfkh6sRfL569/2G3NqydFQpM/HrrwqXLIiNKEQRFkFKbIR4hCghSLC+PeQfmWQDYsvmnyd+dK1Hv+4rP2gEA+K+EMgfKe6d6ULFC5fYd437bfqn+D6+QplQqqlmrQaVK1S0Wxlx4lTEkkLRCCN825ZyhpKGqMv2crHb4iAlXO53bc9z79PcQn+ygW3foObwnSf3dT4EBT54y5/HD/nceJLUtK/LKTUrOnf7ddwZtrjH7CCKlJC0vcuMhgpbzTmv+s+UB0Z2xODQ3w+vU95S/+63fBxAP4eKgHr0HF3XFEO+0WgqvFk1NEIrwVoAIwLxOp1m/cXuXju3i2pbQToC/rP/IrTt/VSKEkMeAwxNSpDQXXON5+4bf17S6NT63gXeB9433XXaxe6FuvcaC5hCijLlnOFYHiHAX0GXsB8DK0r0AwGQyliqlYq3Z7lwAeJ6QVb6sFHmcwjAMy7p8KRjjgIBA4T1BiKOUuuBL4JPd+y67skeg12whFB0b885xDgMggiAIwMDxHEEQACQAaFO3B8eM5DnbrLnLOMM5glIIp0vF9KzFxz7qU8ddocGg9wwIQAgZDHqlMojnOQDQFiardgOMcOe/p7zvsnNDiUM4VgcADgdrNpsRQgghiqIVCgXP8wSlKEz8NTh2pEols7JSo8kqnGVhWIcT+nRrotYYAcDhcLwchIIQslotEokEADiOQwVe+e8jPtm5yI9fSomD9DotIgiSdM0tcJxTr9fxPK9UqkjaX5e2KzC6+5gvNq/78WMAIAg0Y962jm0qCJozm008X2IOww3L2kUiEUEUN8TvOe+77FCR2xIRIrudQa9SBkEQLMvSNA2A9NlHU1IZEe363TgORg5tazRaESI4jnObOoSQVxCUcEhRJI70TH5Ped9lp64BKckJlavWIyi502oREkmSsFjthWqTQi4JDfG3s06LxaxUqjDGmHcIE19uWNYJAFarRdAcRRE2xrlx24Wh/ZsG+MscjhKlZVIxM8wz4T3lfZfd/amwYeDyZSv/gKKQdAKhKTMP5o2BJ6MAAPq1hzLRQYP6NDWbjHKFPwD5ycjOdx4kAwDH8f4KCcOwAGC3MwRBEATx/aqDR34CUzdYB6c6NYNflw8uLDS6Py4xOSepqvvo/eV9lx1PQUG+PiX5hT8CjnMCQF6hwdoTnhQNNnefhvYNNSMHiyxWRmgoK1YIf/r8xisddNduJe44WnxY0BvmLj04ZlhrjLHQsbtyM1HTq7jAe8v7LjsAuPQbLJ08f95XHSiScnJOACBc41QXdzZDwpW8UpEqjuNIkrQZE0mSgJJNLUEQykDZketPPROfDYBWT6QAwPMcQRAkgW7cee5Z4L3FJzvQx8DNT9VWxiFXKHR6Hc9j1r9EAW1lWNz/yh+/fKTWmAIDlSXyipCI6Wlz9hw75Z0uoFIFA+CfN53ed9Y76/3EJzsAgKRuMLPjro2LR3Ocf0GhQfLS2oncObD7wK12rap7pfv5SYQ3O/Zd37PQe/126/HgFykiSVIiphetOvhc/FK97ys+2bk4eAKM9X/ZunZ4VLhS8at3bnIPOL0wqVvH4tkIAMgv0JctHSK8N1uZQH/QemYDODXw0fjGkRER3y7845lMc3pdyez3GJ/sikmfC8Mn/P7FuHa1q0cXLM26/WWJXIkYNDpTWGjxWCK3QB8e5mpzHz3V6l6KnCofodAb2S9mry5sA9e/8859n/HJrpjkjpDcEZ6f/bNhEpRNBi/Z5XYCnd4a5hGbXlhoKB0dJLynRYBLeprLnYACtaln0OHsiyXSfYBPdi+T0QYy2gBlA1k+WMMAACgbBD8GWQHcyk4hCFFOnlarM1NOG2tUSyW04BA2tYXwO4D44ugSXSzs+bO4Wh+e+ILaXwPioXd7kMlkAIAx5jgeEQgVLZjFGLtnvQCA5/k/9jOcdxioD2981u7vCH4MdUfCngs3DBo1AGDhHnVNtrrvVyFZ+IfJfuNeNMi9MaMo08er8Mnu71AlAEWCJWObttDglpdLfIBL6A+70jWFuYy86Hwff4FPdn9HQm+QGeCTiT+tX/aZd96rsLMOKgIeTPRO9+GFr2/3euIWg/SA6z3LuiLeXXEDBPAcYAxiMQAAQnDyuqukj78F/3/ymjJnyqxZs2w2W0pKyqJFi8YvG085Kc8CcpO80eVGU+dNlZvkL5/+V6/AROjaDfq1VZmS5rarD9a8Y9vn+mXe/CTt6tD0ax8fXlHGnHsc267eOth1dL+grm0h5CGQdu9K/uolN8knLJzwyq+k1CoXLFnw5MkTnU537dq1Lxd8KWWkL9fw/+jr/41GVmqTBmmCnLQzLyzPOw8AAKYsnrLsu2XC+4CAgOHDhz9+/Fg1VzV3zlwhceKkiVWqVBk0aJCovqjW7lpPnjxZNXcVI/Z4wsRLEE5o2wQqV42pHRfbooHq7u1rrB14HlO0H0GQDp5FCDieZ+0WNt9qMtu/Gt9REaBasOLk4wcJj3pA4ev8w9OmTytXptxnX39mMBhK/1Y6Ly/v16m/qoPUABCkCVp0YNHIL0cKJStUqNCP7ldqfakpfadw4d5TcAAQrA6WMBIAyIrO8s77X8pLSvxf9RqxeMSmTZsEPwXGeN++fZMmTfIqM3PmTHcBjLHValWr1dnZ2c+fP++zrQ9gmDp1qmcBtVp9//79y5cvk07y5U+M3Q/dmsMH5eDnpZ8mX+ybcnlI6pWhCef6fTk86NHlH3Tp+y5ubZRyeXDK5SEpl4ckXxx0aWcnTequptUg6Xyv7FujUi4PfX6qHbYdWLe4b/t6ELvfu37hNWHCBK+vdO/evXPnzpVNLwsYEhISPHMNBkN+fv7t27ePHDniVU/jm40XLVrkLrlt27aJEye+/HH/217/q61dgCFg1bhVfn5+wmFBQUGbNm2qVauWczpnT/s97mKlS5d2vwcAu90OAE6n02w2t9S33At7f/jhB88CAKBUKp1O56Rpk5b96LKRABBzGOqsBkSgrxesqV1JlPBgHyJCJBLZi/j7YRExF69ovv6uDCJo4BiF1Mk6CRHNWyzOnOSr9dt+xTkgW+2fcXFbu27DMQ5LvXuwfVNZr76Hdm5bfXThGfVguOcxzvho/UerVq0qPgbgeV74K1pvap3ePD22VaxnLkJICNerUqVK86vNLze9LKR3OdWle2b3kV+5jCIANGvWrF69eiHzQ76d+a078X8h/3tlF5kXufD0Qr+hLs0JOJ1OjPGnxKeibaLtg7cDwLDNw9q0aeNVxr2moUWLFjO+mQELPPMBAJRKZW5ubqVKlQJ1gUa5vvUkYC/D8lVL6+yrn/boN4AbaQkgVYTfvXG+XuspDTr0/fPk7v4D2tO0yM4yhuAl9vCqoaGhyclJSXmZdw2xXe25nbvWs2NllxE7bKbCm8enBQZFVKlR35y9t0vLsF4dxugcFW8tu3Tk0IHcjlDQWtkvzHP/HgAAgiAwxhzHdarW6crhK1wc515GBAAsy/I8jxDS6/UNDzZ0y24yNbnNyBJ/u0KhMBqN3bt3Z+ex876d55n1v4p3JrvPVnxW3lE+PDw8MzPTjMxHuxx9XOOxZ4Fea3sNnTfUM0UAYxwcHBxzNcZ9SNO0Wq1WqVQAoNVqBdug0+k8T3ELEWMMAAaDgabppk2bfrZ8VNqtFdVr1Jp6bk7uiz9SH94TNg4ryM0syM9t3WclRZO807p18+bRY8YRBLdgze3lPy4RqgoPjwgODilbOvLrJVtWzF7cvk2bVWvKlilbrvOwbZh3XDr4RbXajQiSYu1mOXrQo3uXXn0/Hj9mWLUXMaoRKpZlRSLXbIbJZAIAQVhVq1Y9deqUTqcTiURyudzhcJjNZvfXBijelTsqJ8rrfgMAjDFBEAzDNG3Q1CsLACYvmBwpioyMjMzJyclz5q34agVPvHqp2/9t3o3svpz25YIFC2iaBoCCggKJRNL0ctMh0UN0ymKtlA0sa7VahVkpAGAYRjAAwqIsZVG4JUJIWLIl6Ey4KizLOp1OABD+12q1AQEBAGA0GoXrx7IsAPA8T2HRhs1H7JbC3Oc7ABEkKdYU5mamJcbU7FGpYTOWtY0YOhAQqAugXbc+P6w8t3RxCctJkiTGeOxnIwhxVlSUbNa3kwgC/bx+t0gsjuu57Mbx2ZhnqtRsyPOcIfcC5h2rVq958NwKACaTyd/fXzBgwnc2Go1Q9P0RQg6Hw/POyc7OBiieiwMAZEdGo9HfvzgkVVjey3EcAAjLct1E5kYO/HGgu7NhNBqzsrLEM8V7h+9NjE30LPk/wzuQ3aiVo5YscRkMAJDJZHa7vVy5cquPrz4oObi3t+txIn5+fjabzWw20zTtdDqFzo1YLNbr9TRNlytXTii26eNNZWaXmTlz5qVLlzZt2qRQKPr16xca6goUOX36NKNiAMBgMAgpAECSpHCYmJjYo3FWQeJ2ACBISl2Yl5rwuPOwrWVqqoPKVTu4bcv2HUviP4Hng2HW5Or79z8YN/5ziirenVi4xiqVKi8vb8fuh5UqVrmecff5EPzRgr78fZj0+cTG7WfIAyIeXP7Jpk8sU6EqELQh+xSyUKy4IkLIU2c2m03Q3+PHj3FzHBgYqNfr/fz8Ll++bDKZDh8+HBcXFx4eHhMTc+yTY8KnR2dEO/wdhYWFgi0Xfh+WZe12u9eC3DKpZXYV7Gr4Q0N3ilwuDwkJ6d69e7PEZtMt0x/VfuRR/H+C/2nZlUkv01zV3DNF+N1DQ0Pr169/c81N6O1KT0lJUSgUJpOJ53nhd6Rp+vnz58I659u3b0M3V0lNsGbkyJHz58/fsmWLw+HYuXPngQMHJkyY4HQ691X7LYqtLhhIoTBN08+ePaMoCgBy8zQ1qmMAIAgiIf6hKqJWlxEzOIdRq1F361g9qBkcOQ4AEH0bqlapw9iteXl5brlD0R4Awve/didnzaIlXXu1SeoKSV1BqobAgavMJl2/gSNianQ3aFPP7fu6Wt1WoeHRH8Rahi86sGd7c8GYkSRptVpzcnIEW25j+A1DNjTb3LRly1abN29u0qRJ27Zte/XqxTDMli1bTp8+/WzFM+HTUyumisViYfzkJi8vT/itPK3dsN3DGn5VrDkBsViMMS5Tpky3nd3+/5ddveP1+g7v65lis9mEK2cymVq3bv30/NNzrc4BwPbJ26v9Ua1Lly5CsZycHJvNJjRqDofDEOqyXqM3jRvfbnyl8ZWEQ5IkO3XqVL169Rs3brx48WJ+zS4H9m1d83hthw4fugsImisoKGhU7raIIhLi76vzUnqOOWozF146d2DFjytubgatx1KbUj9Av22fzVlwpGe/8MLCQqFPxrIsQRAEQWRmZgoVshazSiwDsAKALRj2/Amnn23d23MrQsG//r6+5+i9BEmf2zOhYbMOqyerv/5mYZ+e7QCAIAiEkKA5u91+6cTiY/T4nzeMe/Z8yqKF893fwWKx9OzZs2HDhpqpmm0/bgMATajmxvkbderUAQChhrS0NPe2BMePH4cipYl5setdETqdTujhMAwTGOjaGeh/kv8rsuuzu0/FvIr+Nn+McR7k/TL5F0bicsyWSihF07Rerxc6W8IIAACysrKEAizt2h8zJzLnlv5WE20Ti8WCMeZ5Xrg2BEHsP3F49czVtBnKHyc+rTWmUiWX5oRchJBIJKpVq5Zax6xZOVKp8uvdocytp/E1alSnKEpoktLTs27dutW7fsq9Gy8adfxOHhCFnabPRo22kpoTN9yVAQAgDNIXoM3OiS0flpGRERwcLPQXBaOSk5MjaI7jMY/x198s3AKT3OcaqsDesxBzWD129NBvvp0fXapMq94rzu+dWKpc1bFdqL2XZXHNmwpfCWOs1Wrv3L62cN60oYOHtew0ctinJWZ2EUI0TTMM065Wu4zVp68PLwDkPHThQOnSpaxWG8/zHCdsFAQkSZ4/f/6Hr4p9Rs2bN9doNGKxWHBFCVbWaDQKyqtevXiBCO2gh24YGuWIktlkGGMNrVkzfs3fO9X/Gf+97L76+qtFixYJ700mk06na3a02dOnT2fPmg0At7rcysnJkclkWm3xwgOTySR4PUiSNMmLH+3106SfnH+I2tKtAgMkUVHRWq2W5/HG9cuiFQkzxlVFCAWW7lu3X/FWwwCg1+sxxiqVKicnp3aNmJG99rMOnnMYWlY4mpx6OylHgTF2cmTHugkG8kh47MpydUL85IqE5y++/XHiwdOeNbkofR4aNK6MEPqoR+z4mRuXLJrNsqxEImFZNjU1VZAgQmjc4Eo2xlm2bEylyfBiRYkakrpBUjfz9YWTqx6FVWt/btl7uZ9/5Pm9EztV0xHW5xeuKzGAUsHGVcup1bsVLZLt2Ll9zopbYZ5xzABCT4Mkyfr169/fMOwibjdj2iSCuLBh1XMjV7VP7+4REREEQTx4GH/FcO3XcasdouJnkF67dq1q1ap2u92zRc7OzhZumKdPn8KHAABSq/RG0o2aY2oKBcxms9PprL6z+lcdvsoPy3ef+J/wX8pO5BCNnTZ20XKX5gBAKpUCQGRkZNmyZWfDbADQlNLcv3+/aVPX8B5jrNPp9Ho9QRASieTevXsPuz50nx4UDycVK/QrV5ABjSSB9ds0KxOskm3+7XNtTr5gI7+Yf95ztAsAwuAjMzOTJMnw8PCE9Jwopc5SeBUIeYUIU4UIEwCwrD3+0f3OI7YRiFAGhXw5+ZOMzKSDf7HWsNosmLp5NgBcPLq2epT/0aPHSJI4ceIExpiiqPbt29eoUcNms+pStpQuPZ3n+drx8MK7DgCA1OmQOh1sdcecvX5Zk53Z8MNvLuz/nEBPOjVswTmdAGB3iOwF10haIQ9tShCg1+vdzZ/QD0EIcRxnsVjKlyudl6/98qu5ACCV+kn8YPfBp7v3HiUISpO87uEQS/RZSO1Y/NFWwoZK7smCEBI0R9O01epaFdzr0141t7k0BwAkSdrt9mrVqn287OMli4uHgP8J/6XsAMOYMWO80ux2e1hYmE6n+2bmNwvmL3hR8cWuU7tq1qxJUZTgEzGZTELrYDabzjc5LbISlXfwsX9AYQFQNIwaPdjRHYaMmwLGHL3BjjHocgsEzQkQBFFYWCiRSBBCVqtVaIiF/wHAmHMq0OkE5DrEGBsN2qRn97uO3GM15t29c3nFspUp4+CZ95PYXVA28JOI5HJ/O+vAvL1WmbRzCfGNGjfbsGEDAHAcd+HChRUrVsSUlkRyT+tSYpYxZGVB5A3IaeRdlcC5e1C3TPOxkz/+5JOPOwz+LeXJscf3jtdr3MpqEWw85hxGXfo+RFQlCEKj0UilUpZlBZ+I3W53dRI84oZsNovNBu2aRffrXAFj/sZNeXp6sjnftGXaIaUS0oYCAGxpvbblwxZRUVFSqZRhGADQaDQURfE8n5eXd632NaGqNWvWuCr1QCwWd+/eXfeb7tcRLy2n+xf8l7KbtWZW9GfRnilGo1G4RxFCbpu0Y8KOmotrtm3b1rMkwzDff9Xpp6VzzVc7NOgfx/dxGgzFj7zRZ2UhRFrUd3hO6Gcgp13Dc7bmdaIzMzNVKpXghyNJEiGUnJws6Pjp06dx5ewmKw0ACCG9Tv3s0Y0PWo5r02+EWE4P6DHy2Xj9i6vuD3kFDefDiJGf2WxWqTwkL/Oe3X9gv/6DY2MrCLkmk+mDDz7w9/c3m4zMs/3a/GfygKglP3477eS8v5IdANxPhxmPN+9pu3nX3n0R5RqXrtTm7vnlTkYdU7mmMCAgKFmo0smyLELIZrMJZ1kslsLCQgBQKBSJKbmOgrMWJyHyKw1Fj2dBRGsAqFylZuUqNQCgd58hfn5ymhapC/NTUxNXrB1ZqlK/UaNGCJ4jiqL8/f03bdp0ocuFa42vAUCFFxUUMa69IgUEK4gxVigUqgSVZ9a/57+UnYgU2Ww2m82mVCrtdrvwvWma1mq1NE17jphmTvx6/WW627GRZcqW5TjOxrBjB1fbtv03AABAWnUOBrBpHzjtakFnFEmYbehpup9KwUaoeH+Zk6apjHzbhZObsg2R48eOstvtCCGdTmc0GgXNSaXSC5fu1gmlAQDz/P07F2s2GdVxyCjMcynJCbO/6nPsvPdar5eJvks0Gt0CY/z8zjaRLNomb+HWnADHcZGRkXl5RIYtNv7mpkYdZjVu2tpv1mLqa9ZZwl9bgsIacPoWDBjem3gGew4crtHkUwB87dh3Eok0tkotnuf6xWVt/G3z8GFDAAAhlJGR4T73zNlLWLNr/PTEhd/2l0rVOhPJc47nWYrK2j0ERUlFLABGBA0Y46iOGDtpsX9sxaprVy4mScTYHxw8l0BRFALYa/v29lcOu7/LbPI8r9frAUCpVDIMIxhFKDKxsbEl5oj/Pf+l7FiOFfoQnu71nJwcYcSk17sSVc+g7hCoV7/C7LldbTar0F5gAIKUOpg8J6u3ae9D0RoZhEipiNtzJapOg659hjdhGGbfvn0PHj5+cX2Jwl+19udfr93NX/rDjwP69xP6y0L7K5FIfl6//eMPCwCAJKnbN051GradsWgokszKzVqwfMbRI0L1r8HO8ARBcBxnKEzJsn7Qu08zz1zPyd8H+c3bitYBQnqdZvSYIUnnNqZ08iz7Ck79DvIc6NCu29mrf1r0hubdl9w8NS854XHFKrUdDlYpLUhOTqZp2rNHIZVKGtakP+q8kCSp3t17RFdp26RFvw8//LBzs5CMjPSzZ892rHELCCyYQEP2cQDA2Okf3paWhvG8g6bwyH6VAAHGkDgj1q/dU5kMLv0EmipAUSKJRMIwjOe1AwCCICiKSkz8j2cy/kvZ3Ym44+fnJ8whCpAk6e6xmkXWSgdAMRWGDm834c4iXXqKkEWQYs5hdjD55vxLBCUDQG7N8TwOD0ZzNkW2ahXXrFlTocIOHTrUqFFjl1g+d0o9k9nauG4oSUk3bzvQtVOLkJAQAEhMTLx4+XqfOIPSz87amTtXT/Qac4ixaJRhEd9/N/PmjfOHL7m+3mtZteY3juMwxnlpl7TMKJVKZbfbxWIxePiKXe0g5ihaZLcZaJGsVJny1WbBa2UHAOZIMI+Flo3anTl/hGGYhh/OvHpkxvOn9ypWrd3hg5ztZ/bUrd82NCxCIpE4nc7EpNTLly7MndrMyWGOc87+YUdQRJ3KlSsDAMY4JCSkT58+q9eqJ3RLQwRtsbrMFUKUKf8C7zSL/StS4iBpYE3eaQJAc+bPCgqN2L97c8D0nefGmhlJMo4oHnMIJCUlURRlt9tTq6d6Zf1L/klQe7f13co/K2/zt6U1TjvVoXgEKHKIps6a+sUXX6jVagAQ2lYAwBhLJJIJg2qcv3NNk5lBkBQAIIImKKkh87jDni/MvmOMVYFygiTW/X6GIPDR04kIQbPuS2Z+PVG40gKFhYVCL2fh4tU/Tq9hKbwGiEAIWAeRkicHgIaV1HqLSCyW3L99OTC0Uq1mY+w249rV6y5eOHfxBrzVakK7+pTFYpLIVIc3DDD5D+vR/0uEkHvWBAAQQqmpqQCweev+7tX2ckRg/bbT/BT+4z4dvmFvdom6/pYPm0Cnjm0nTvlWW5jnFxC576cuDeO6IESqFPakHIXaKJaJnZVLGS0MxbFaWVB9v+AmuebSlT0clhqNBiGkVqsPHjpxYd9rT6guAAAgAElEQVRkhoWWzUrL/SRNGlSuWjFao3O7pRDvMEkCqvqFNsKcy58SGKj8fePPDzKrjvvsI+FeUqvVglccIbRr1y6vkayYFXf7qVtEagRJkk+aP/mz51uvB3472Q3ZNqROYZ0pU6YAAMMwiYmJew/snfvdXM8y02dM79u3r9tdjjHOzc099eelNQs66Vy+OsyYkllTkpPVC0+OE9EULaJWrz/+8Gm23Q7PloDdH7SVwSmF+/fv1q5Tt7h2gMLCQoIgUlNTzWZTaXIDKhqlesJj/sWTewpl2VrNx3FOxmoxjfpp+IlXDNT+jlq/wKXOBziOsxiy85KPPMyp07zdyKAg1zYAIEypJSQInojrF7b2bKZ7eO9+406zMMZbNv30+XfnX9t39KTjYHC+gJ27dyOCsFnUV4/NaRzX2eEoMfflRmdg63be6Zmi0WgAIC0tzWKxtIhrAQCh9wEB1J8ITgfUrRURWz6yc/s6ZktRhYiQ+FeSKWvxnA0ACIJ0OCyPUsOVKpX72gFAQkLC1JZTcyNy3SmjfhlVy1lr3LhxAOBwOLRa7YoVKxYtLPaavQlvIbvBWwYvabckIiJCONTr9RzHxcfHHz19dMm84ruB4Il5i+aVK1cuJiZGJBKdPHW6agVxi4bRHIcBEbzDaC64yjutgoniODzz+4MAViPLX9wOAGBxVe/Cxtg8pxetVqvNZuN5PiMjw8/PT2WZa7F59xM4p/PpwxtB4VVrNR/jdDA8zw0b1v/oRa9Sr6fTUNg2by8A6AsTSWeClGJ+2Fd5xteThIE5QRDJycmCMwwhBAU/qxTs/ZvnW/ZeDgDKiKig1MbaYmP0RkTegMGbKs3/frXZZOQ49sqh6WERZSJKlfV0uQnsulj662/muw8xxoL7PS0tjabpPXv2zJ9XnOuXB4Ch5XjgC6BMhGLE4Dahwf48jwHzGHOkKNA/sj1gHmM4cSE9PYetVKli6dKlxGLxqVOn9rTcc7v+bXdVJE/qLDqFwjXm5Xleq9Xm5OTsPLRz4bcL3cVey1vITq1Re97rBoPB6XQmJycHBgZ2ha4JFRM8ykLdZdD4TvSPK3+x2WwYAyJEDkuWWX0dAHge6w2W/EL9hq3nTVXgzE+e55UgWEvnBdj0er1CoUAIGQwGoX+dmZnJcZxUKg1l5gn+EQGMsbYw32x11mkxieedfoqAmV+NecwlnRSGyG+DRAc1G8LJP/fSYvmRjf0bt+yOMaYpfuPpyjzniIqKEvyOer2+atWqT+KTB8U9BEAZKc8/+HCegzEBho/69zl507va16J6Di2/gC0bjjgdDkokv3bsu8KcZ01b9/C0QABw6Ga5IcMmChOMGGMhmIWmaaHvf/zc4e++LNEEedFuHDSCqK4f1i9fJtRgtCKEeM6qLNMXIRIhhAClpiZMmzL99h7Qlxi4w5KlS778ssTeMGq1WvBazDw3c/fo3Z5Zf4O3qfgrehzqEdS9WHMAIPgwAcBkMvXY3cPd/AelQe1esP/wfq43b7VaSTpQm76Ld1oRIktHBx04/mDRigvEp3D7i9c8FaRHS1AFSpMWJwUHBwuBkAghjLEw/wgANE0zxuIWViyRPrp7XeIXXKv5WIw5iUzaskm76/9088wKJ2HK1CEA2G7Th0fHCPZGJuYKCvVrV7umO/V6vcPhUKvVN+8k8xgRCEeXi715Yl7dVpMBQc3aMSchqUSlb4C2Muw/CmS7riGhkfMWrKjX5gu/gMiD6zo3ad3bUfRkHwDQmbBwH7pTRCKR4GeRyWQWDRtXEx7vA91f+D3+XAt/QvaxVdnlV0H5MqHfftG3QI0NWccQIQ4s3Z3n7GXKxh45deLu3Rs/jpyz/3zxiYMHDy4+KPLLYowNBkNHccfd8F/LjjNyGo3Gbe3UarXQ9xQOhf4NAMTNhNj4wA33LmpSXxAECUAUPF9NigIRIpWBfk07rVA1gac3gPlb72OFw1BlCXw+/ZvmzVsvWndi/NiRgnOEIAi73Z6eni4469PTUipIXb0ngiTv37pEUZI6LSdj3qlWF3w6YsyTt+7pFhM4HwY8/dyQmXF21wj/wEgAENH8ot2V166e5VmMJEmSJEcO7xFivqUxiSmSZiwakVjO2s216jRAXNI/e3r2nj+h2racu3eu1q3bxGLIadVn9aWDXzdu2cnOuLzHYzomicVit3eNoqinT5/SNI0xvn792hej6wbPu9mkZsPUbZD3QXG1XtybCPcmQvljBbcGrf1kcP1GH1Qkwa5J+l0SUEUeFme1mipWrPrpmMl+nVdsPQYA0OBW/cAaxc5Xd2yfID5hevoNeVPZiSVihJAQCezprxKmoYRHmfduA/7+IRu27dOlJxIEYSm8xloySFEAz/Nhof59h/+UvAtu1vCs9dXEfg8LflhSqlR5nU4nF1mSk5NoWgQAdrvd6XQKEpfJZGvX7/1uKAAAQkTiswe0SNGs+yK7Vbdjx69HD526cxRMJWZM3oKgeIiKlnJGHee0E5Rf9bqN7YwtVytpGecdKY4x9vPzy83Nzc0OigwyY8wZddlimZK1m3v1GoTJHV7l35yng2FFk5VjJ3KtWnYAwLG1e9y4dLhKzQYSiRQAGCd5bNeuxo1ckyEmk0lwGgQGBt69H9+nfVNdTubF66ebNWhfqxWc+sWzYm9SOoMlHA5Ou/3kWeGY4XFA+bGWTG3y5qCYkcBqGjZqbjQZ7W1/uzQXWGTBGBcWForFYofDgYv2ATebze7ZyDfkTft2nY512tVil2cIA8Y4LS1NsHl7du9Jvbd807YDNpsVEGHTPmCMiYigCIK4fD1+95HbKcPh6cce1b2KqT9MDeFCJBKZyWxGmB09qJqIprRpO689i0otDO3cyRUwBwDnzl8indm9mmVzPAkY7t44pwqLqR03DjCs+3nZ0tHXX97h8K3o3hO6Ne/Rs/dgm0Xz8OLyyjXqA8Cfd5Vd+33tHlFBkclnGCYvL2/z1v3TB6YxDlKv03AoqEKN7gihgV/1PvlHcbX/gDJnofYC2L//jMGgF4kVJ7d9XLZCzaDQcIyxjaUuvGjSoH4td8Cz0+nMe/FbrQqMLLQVRfst2/CQpMQymdTpsFv9rQsGL+D9/27lBGKhazuoVinikyFtiCKzoizdC2OOpkUH9v2x49AfK9Y+Dw4OLj4FoaysLIfDQVHU2bNnp34+1Z3197yptTve+XhuYq7gj0UIaTQad6gcSZJZL7Zv33XUaDQQpMSquWM3pyKCEovoq7dfbI2/ffqCV2WvYNLsST/MdvWZtFptQUHB+j8OhCp0beqImlQpbFKlYN1uVxwej+GT9iliEefkCHVBTlrSozpxY4Mja/I8J/X3v5b5bzUHGExpMGLn17q8rEdXfilToSoASERceh4ZGBioVquVSiUAaDQakiQJgsjOzva81yUS6f0b+2s0GWkzqxVqBG94W/8F6W0gvQ30aNZ26x/7Wbup08c7jm8ehAGHhEVKRc6ONS7tPJWuM4sIBBiDSsH2izM7ncAWnvjxULnvv18gVKLVai0Wi3St9Hr160e6/uX8DBbB4Yug+yb3wbRtP84fIKIpgkC69L3Ksv0dDrZr9z6NmzbfvGPP55PHCbaGYZiMjAzB4CGEUmwp3jX+NW8qOwD4/fffBwwYwDAMxpiiKEFzBEGcOXtl6+aNOp2BICXq5M2CKy4wwG/YuHWalnB1o3c9LzNp7qQVs4uD1HieDwoK6tat6959hwP9MvQWEQCa0tMVzI0QWBgKY6AoOjXhbqu+ayhKxPMc67B3j/vwyhN3Nf+QwBQICVE6GCsAmA05UmlVALCzRKkwTlhvJsxdClJjWdarffEPVHEc6AuTRJIAiwVHX4SsFp75/4S7g+Deveu1azdgrNp6bb64fWaJ0+EIiywFAANbpMskTsHBYrVTAAAYbzhdqW/fopB/AISQTCbr3Lmz7LzsCPyl7AQuLwDEg7TtziWzB4lFIjvr0KfvlYe3JilZUFBog5p8VlamzebSgKA5kUh05MiRX798ixCVN21k3bQ93naIeojQf0xKKxjSLSo0SEpLAtQJvyJSAgChwYHdBq/O/fwvo4m8GLVk1PJxy91rsAGgsLCQJMnU1FSM8W+b9876OMPKlLg9EEGkJjwtzEtu238dIsjAQFXblq3v7/7Lgdtb0aUpbNi0XSQSA8C1o99Uq91QGMaGBTIT1pRds3yO0Wg8f/68EPpWs2ZNmUzmcDik+rVSsatPnZ+TmfTsaudhf2i1mkmLRh/b5Vn9P6djYxj4Ud9OXfoQBEnR0gv7JtVr0oaxueYeBTCG47ejB4+Y5hl4IXiSrVZrQUHBzp07f1jqvVj9lRAO6DgK2kZV6t6xAQDwnFWiqCgLqisRi9Zvux4YUonjeADgOG5d/XX3at/zPv9vebW1G/H7iPCkcJ7nEUL5sfm/DS92fJ3pdOZZTjzrMHWcoho5rHd4SCwAVif8ikgpABaLqBETf715xNvr+zeodFGemoOieHGMMULIPyCIQMXxFwJpifFadXabfj8hggwIVH3YtvXjbf+N5gDA4YSwsEidTiOSBlSu/oGgOQDI00na1XceOnQ4MzOjf//+crk8Ozv7+PHjNputXbt2oVKHk3f1h8rGVEl8eh0BKlW6LJdaXPO/5MR1kLTaU7N2/VKlyjkdtrJVO928dLhe07aejhWFzJGSSwrRtZ4ghITYsNjYWHmhyBzi6rH8DTwNxzaBtO2LAT2b2RiWIGWsNUuqrMnY0ZiPm/cbMPbFZC1TJyQzMp0jirdlGbp1aGR8JAC8rBxPXiG7ycsnzxo+S7hdTCZTfHx88IzgEx+deFz9sVAgOzKnVyv4dNqUatVqY0A23SNBcxqdae6Sg4nj30JzygRABGW1WlmWFZyfQgSE+2LHlI8o0MfLxMV/GElSWnVO826LCJJSBCo7tGl9dxtoK7vz/y1VqpTS6TQAgAARHg0oQtCiRv6Pex78sNTljkcIjRo1KiUlZdPW/VP7FseJsHYmLKoSLZHb7Uxcq8ZZm64/GebO/FccPAeO5tNmfje3UuVq0TFxL+7+8fDWpVr1mzkcrhB2BIAxYlnWZrMJv6cQmUEQRGFhIU3THMd1mOq3d8vrZSew9wxwrTY2qhczsFdTJ8frsw4py/S3WG2jRvZYv3Tl4UvFKxAAYM7cOWPHjg0eEgwAFovlyZMnMQtjvvn6G+x+jmUR3rLreLxj65jWbhONEIqOjh42ZBjajB4vcsmOtEOL1m1r1frA4XCw5jS7KRFjZLbYvl928Mjl4qrehMbDwNHcgRDiOM5zdYUQPwcAeQUGVXWWYYXLjylSdPvan826fU+L/DDG7Vu2efjHf6k5KNpCBQCeXN8QFirhi7ziBMI7L5SZN7d4bxH3iGrcZ0P8bXONRfMlHOeUyeX6wiSZIqxV6w93J153n/IvwQiOXgG63XdfTp1VuUqN5t2XXD40Lf7RndgqtTyLvfx7uj0sBEFEU+Gd++vevOk/chycQ5L4vWho/+Z2Fow5JwOiOjdtGpebk0a0PHTwgqvYgB0Dpk+fLnwKAFit1piYGIlE8uy3Z1s/2eoqVEQJ2bU833J28OwGDRq4U4T9EPR6ff/+/S9dunQ97joAdGmnGLRplMPhYM3pVt1DjsN7Dl29fT/1gIc7+01oNQ6OXXuy/fdDGelpwSGuFStuv4xw6LQmuSckTUZDauLTinX60CI/mUy2cvmy8/ddWf8hS5dtZFm7TBGW9OhgSKvitZXXnoeOGP21Z/slXN3Q0NC8vLxLj1V1Yo0Yu752udhqWYkXKtbtX7ZcTPgsgPHuk/4DDvwJKevnbBDNq1ChSrdPDx5e31OrDlMFhwOAyUZHh/J2hoGiHxBjnJWVJczr8Dx/617qz4uXbtyw9hic8Kzzb3BK4cheuPY08djAxH2bRlqsVk3K5uCYkb37DOnUqZe9w8cnTkKrS63m1Jvj1hwACL49nueHlRtm/8O+e2CJCYwSsmt4u2GDacWagyLXlEwmYxim+/Xu1+OuN1sAB8+c1uVmsZZMi/YuQmSp6OB7j99aczU2gew+pN/4qUtdzfqTEf16thaWk5AkKWhOaGf7tjDZHSQAECSZEP9A4R9Srnon7LStWb34VvxFrzr/Pd27gXOtAwAQIiiqONoKA7B2XqvVBAQUb/4gLJUV3p+5p2xURc843I0yzk27WbFu//DwqKKZhf+Sh5/Ct42/PXH5li47o+vIfcd+HwiAVMFhAPBJ+6R5i38cN2aUTCYTHLnuacyAgIAv+hdmPN00eGDvIx+fOLG5RJ1/j6YaPN8Oq9Ye/2RwG4KUWdQ3pYHVpTL54O4Db9//o/yx8hUXV/QszxRtHhIZGRl2MAwGemaWlJ2clRsMBqFPIIAQoihKGFrStAjxIN4PmoEZtERpKdyDSLEyUP7x2I373/TOKab0Fjh64lTqk+1qo1iKE0+edNStW8d9FQFALBav37jvq/6MgyMA4M7Vs4qA0LgeSxmrdvOmtTdvXNz3qvWFLg5Go7MRYKPgrASKgkaLISTQqRAA8Ori2AoBa9Gs3dObm0m6WGFSmkvMxP0jIkwmkxB/Iaw8QkV7r5BEie6LnWE4jkeIcHJccIgI4K/7UvdV6LeS8+1FvPz1PLl0ECZ/0mPhkvVWUz4tlmWkvogqVd5ms+jMos4N9VeuXqtcqaKnc8ff33/t+j1f9rGzDmlhxhnjHQh+BOrilWKvR10DnqXl+CukRpPNpn8i8a+ICLpzl767J/6hrBjpcDg8rZ37oy0WS9OmTTdZNpn8ijuCJWSHAfM8L4y33aSnpwtVIICxQ6PnH1gFSKRJ2YJIsVQqmvTNz7tOeRZ/IwZ8SC9ZMCgzfiuJgKKgS4MsgKzUjPs3ngeJxVK73VY+wtywovbzPiBoTq8tbNRxukweYmf0v/y8bP6ka5ZZHtUZaLgciibXAwAUNhkIGQAG7AQAiPIo5sl9AADUnAYA4IzA2bB2G/azBIUeE6wsSYlCI4on1xgHWb6UKCMjIygoyP37EASRnp4u2BIxzXvqDiGkCFABQiaj/qPBQ/fZf8NWCg1vBM/8ActBHIP8WwOSACKLvioC7ABWCx4OLdSAAgDgTNh0HDgj1NbjDbdA6VKwNQxWbcpJatPl2+lzmnX93mrKv/7nojoNWmPMlwu3lEenE1Ov3UpQymQyO8MEyJh2HxRM7I55HigSA0nt/n3EipXH9vTPT2vv/sDXs/8kOLutr1e2zOB+cYbsEwhRgaW6rf1+85rtOQghT+UghHJycnieF8yW2a845hy8ZGcmzBRFCSNtAafTKYySMMaFGsN3sxZizFs1VwEQQuiLWZu3ezy19w2pcBRmTO5YoCe3nQkLDwspKChoU0dfq4KlbJilXLjrsem4aBd+ABBLpKlJT8vWGol5npKKzp69ZnHHFD4NQCPqgZoGuhyKGAqYB8CAi1cmvwahJCEFVo8CB2BQUegYxlgsVT6/vS2mWol9Q7o3ypz7y/bv504T1nQhhBISEty+nh7NdEJnwA1CgHkOAMLDI5W16+pwXSSpCKFNi9Z6YQDeve4LAAOiQBwKrBp41rXCUrhzCCkK6ANAQEomNIzGlbJhxw1QOAAAI0iYALNmztq5Z59MEVa90QiT/r5c4Q+AMIaYKHNsdNHFxkCRvMEm+fFgSGiwHAB6NExcMrfXjU4/Z7YArrg38XoOHwauafr4UTK9wYqxw2EvlMlU1/9cap1WYq1qdna2ezlfWk6ax/UE8JLdkhlLAhcGjho1iqZph8MhOBiFnlZQUFCU332JtA6Pkd2YgkhRanq+xfwWQQduqi6Bnc2q1G/QePmP3QGAZdm7d+8u3n3y20EJZluxlRZAgB7fu0ZRIgBQlatWp2y1BHfLcywKTWmD/D+EoEAQKwEXO1neDuwERABgdw0IAcbYZDQqVcVL8w0Wum6s9ezZs5GRkYKFE4ISMMYSsbhUpMlqLyG78OjyPO8kCKpx287+4VK9ozkAvP5LioKBoMGWWbJvgAE4oCJR4EDISII6AQAETjoMAIk9IegJEATJcc6yVT7ct+7nuLY93IEq7tGYiOYPXvan/OuuXTUSABwOx5kzp5d+d6Pbh1H5h7MTSmxK83rOHYJDG282b1yNIAhzwbXA6C7fz/r06PGLnTrEEQRht9tZlnUbr/j4+NODvPtD3g6U6xWv175dW6lUEgTh7t0rFIqde44O6daZ4xyY5xApClIpZn6/xz14fnOir4BKFb3g++IYaJ1OV7169c8CAlb+sX9Sj3hzyWhhWiwxGrTlqrbjOO74jlXKfmANAbgdhAY2ASRCyr7AW0Gk9DAbb49d7Rr34eK7nuOcCv8Se9IgBO3q5P6w9/7woeVYllUEhBr1+QRBiEX098t3LRhRQnMEQfDua+50Al9iLuE18A6QRIHDAJzZu2OKnUhUFiQTsO02Ks/glNMAcONb+GXmj6M+nWzSZcoVSqNeK5aUcBdTJD58NaBT78/LlXN1IkmSrFq1+qTPQo+cUNVa92VC39fdDCWxBcPPmx50bPuB1cZi3gGIbNKu24aRy6pWLs0wjKAcoaRCobj99Pbjfi7Xmxtv2R3pfeSk4+T85fPr1q0bHh5OkuSxY0dzMx+f2791dL89gCh91n6EqMUr91+f8E92ZGmzslLvT5Z5psjlcoZh7HZ7716djl0vjKuhKxr7AwDcvXEWAVflg4F+/vJVS3+5sFeBYlshv9YQVAl4KxAkiEv9K80hwn1lq8tWVqpeEwB43snzWCz1QyX3cLA7iIk9kg+c2Kq1RWXdX1S+/tdWc17fFoXzh5cYMSCE9HotEp5f8c/AHFByoAOAY4AtAFTyMvFmJK4CktqoalXsl4b3nbn88PJoYirGWB4Q/ezxnboNW3hGI/95N7hLv6mloou7qgRBCNvoDh7QeTtmAM94edz19zy+DN3jNp7c9ZnOYDHlnQXccu3ST3re/arlw1a1atUqVaqUwWC4f/9+ujX9hzmvmIvzlh0AOGjH/LHzRYxoxE8jbje+fXfMvQaDjMtWf4EQYTe8QIhSBsofvcjz3GXjDQl6ApLAmu3atfZMtFgsJEn6+/vbbLYnmdHdGhcYLMVNrZ2xVf5goIO1Xjl/2RQUDu1qItUAQGLgrYB5oAL+leYAwJ7vtigqMqlx0/YAYChMFkn8AMBmswrxbW4whr5xuTfvXIw35hU8mf7N531sLy2yYVk7AMIYm/U5/qrS3tlvDuaAoEESBazG1c8rkWsHeRvEmaGl9cFPZ1ctnzdu4nSpIsSoTbMzNlpUbLkN9lBPzQEUTwKZTCZlgCziFuR673/3GmzBIOkOj56ml4oOdtjyAIC12/hvTy84f01sFw/6bdDuwbudlZ3C8w5e5hWyAwCT3ARyWPrdUgCQZ4P1BbTq1FuXm8MY4gHg0rUnd99uoZCL2J0QEFrT00sCRSNtk8nEcVyDD6rm6Z5JRa6fWCyRiUQSf2U0xvyy7xfc0M1DwTVdFwDzII0s7rz8MxAJmHPLDgOKjCoFAIxVR5KuTezEYonQ03BjNLMLV9765rPqW44+yc43qQJL7OHA87zVahVOUec8EmQnAiMGAsE/vUNEwcAWuga8nmAWCBEK+ixnHDwq/6efXFG7+djDz3qkJDypXKOeW1s2lrJYLJ4T3zqdzh0Q3qJF3J/L31p2AHB5HvzY5sTqxcMApATlxzst5SoEXbVqNGHmVdNK7EP/Mq+WnSe12sOVZ8906U9NeecwYJqm1uy5nPupd7E3ocYTkaUsR5Kk50gbY8wWbTVMUiKZ2BXGAwC5WamR5RoHhMQAzxvFFcGvMmAnYA4kUQDuJ839C+x53hcSAAB43un28ptMRp7nAwICBSUF+PslJGXt3DDo8rnra5eOJAC6DNyw+ee+MomEIAiGsTEM45apOvdx+epdAEBG5mKO/OeyAwwiIbiSAIcWOBuUaMExrxrz0Bq9dtX8YSMmRcbEFWY/8OwbYIzsdrs7Al4gOztbcLM5nRydDpV3wvMBnvmvh6fg8EVQdtsxa1r/whdrQitPXrTkF93gfnv+fP2f+XrZNWpc2pqXDIAdTAFBSvUGi7q7d5k3RCKT1KmQkZyc7LkCzeFwZGVlkSQpkUiOnjjY+jNWbxEBAEXTSc8fVf6gN+acJEldNc8GIAA7QfrvOnNuEOFp6gSKLHEJQRMEYTDoJRJpqeiwrgPXbFg5yG2wrTbm+K5P2vXeeHDbxzqdK+7VDUm41oLb+HAEb9dt/wt4oAOB8gN7iQ4fAj7PWXvv7t+GjZhUt8WEE1uGFOZnh4S5nJZi0uzVSSUIQtjMAGN87ty5oT3KLo9Pc+e+FQUMy2NM0oGMKVHiFyGRiMsftaW4tmD9S0rIbsDOAcJihZ0DXEt/xQaIjChrtzME5UeQUgKhJ88y7k/yPOlNkWhhypiOeoN25+5jE8cPFxKNRmNeXp7Qzlos5pa1LTqzGCEMAJzTSdOiSnX72sxqp9PB8EEEyQAd+t9oDgA4m5fmEODMjNTQ0AixVMlzJZx/BEEEyEW9hq6ZPKY5SUp4vnjCy2Jz7PltQG5urkxawv2FEAoIiRHeMzjwX5i6l0A0SEqDPdvz+xu5GkopAIDDbqFoqU5T4JZd3Qr5V65cbd68mXDI83x2dragQn9/f63BgYNRyBVXPW/L3SWgIuR6o8WmfUBLQpcs29B/4yC37Hrv742sSHCJuEUFbtnVfFiz867OU6dO9fPzS09Pj5waaY2xrhuzzmmEz79dosvNsmrvAwBNU5t33PDYJvUtqLYZnLU5iuTC5Onp6emCXwcVbdtLkuTW7YdmfJRvKYroNJuMVNFkC8Y8QQHQIf+Z5gCBa8+yYtRclUsXjn9Qr0lgSAWWcTmuBVSBfsMnbR87onnt6uUVkW31GYeEdJPJGBAQSFHU3B9Oz5zaXuFXvJIcY4gq30R4/9bBtK+HA1EosIwfML8AACAASURBVIXuY4SM2X7dAYDjWLFUyTLF27RViLSsO3qrbNkydrtdUJtgrSmKOnr0eIPQ3QoxVRQ59dYYysLPc04N7N3MadcAgFQiDbgKANDhRIf61+uPHj06JCQkMzNTJpOVmlZq6ZKlwlkUxVGfz/h88eLFUBQ7ExQUNGHCBIvFEjhDGf9wIbtZT1Byq+YeQckKNAa6jKvY2xJ+FqyVWADUqGLqzYu/5xoiW8Y1VKlUer0+/llCQV7a5N7pbs0BAEEQjFXLWDQAMOubsUAd+u80B4BZ4L2tXbxtZN2E1gBA0VKKIrWFuf6BQQAg95P0G/nH6b3j1Fojx7EASFgpByD4SnQqVdDWn0cNGfPr52PiwkJc3r6UFw+iq5ScAP9vQQSIw4CzgsMAiEDgVHOVKZp2OhwYc04PHfE8jO6UlpO6Zuf5kN492qlUKozx8ZMXnfb8fk3uJSdyDMt3bhlxFIp3nHhz7IGgN5oBgKBkCJFisdjOQIhacaLjCSjydZQrV06j0YwbN040U7Rg/gIAoGrdrdW5c2ePeiAwMFAkEuXn5w8ZPPiLcwstFjNBKYTujkQievMQTi9EHuajYUwqRaZcf6yx2+0isahShLlzDaMw/SqAEJGXnQYYC3enV5/pTUEkYAyuBhFBUU8L4BUtLAAAUey4wZgvzE33DwwS0eThUw8WzmxfoDEQCIlkpRCiwaPFRAgZDAaOkx8+vL99u14//dDT4eDEUhlJUsKPxtis/1HH7lWQMiAkwBYAoCx7e4VKosvPrdV87PXjcz1LYYBwpW3B8MSdl5ysnQGADjXVwJntTonDzgACwCDRAeN6xszb8eCxy+hyDoMdBQwa0qvM5zrYUlyAIAiMsb+/f5cuXdS/qH8Z/Qs14s6IuLFxxUUAtFqtSCQiSdJms9Vv9wUAWDS3CFpOIPhu4c5z3vMcb4rcjyRJiuNczhGF3K9d3Xy3V9NTcwCAEDIadMKcJklRtpIrBv4ORIJDD8CB01LCyyqJ8nB9kcC9FI1E0ED5M06KIAjGqqvWaHjq02NisXjzrgsyiaRM6TDOYQwoPxgBIgix1xyX8EeZLfZDR/d/Mqzv6kWDL58/LRFLSUqCee7k4d2pztkESvU85b8EESCJAocO/g9t3xkYVdG2fc2csi2bnpDQe28qCKiASLMgzU6TpgKKgCJWRH1UBBFFQZCmqIiigKKIdAQEBEVQegnpPbvZvufsOTPfj7PZbJYg+jzvd/GHzM7p19xzz92GycbqXjLZqCCIoqRp1TKPEJS7Tf06Fxp/UqiOSkaIyJhOBaFl4/gmPxadGRnp/i8gm2E2S8FgiGkBJsa1ad/NI9Zw8CiKYqhSZrO5o94xpSJFNMJQbTabsT9GeXm5IAiiKOq6LooiEewAiCE2CDHJIvDfagFRIITMeXtTTr7SsU29Z6YOUNUrbKEAgDqNugGwmC0V5f+AdkSAWg6mhMVYNOcIqWFu5VeEIXEGKZnC42IZRkPrLiNOHV79xVfbyipCL0wfqKvO9DZP6qobAGraHVEljF0FWxIbDBsy7L6lKzbe0C6dcY0zPT4+Ye3nG4CXYg65OhgCBaBmELHaniinAAScxyyxq8F1iPEQ6wEFRgOp2pcnBrIsigKdt2jzX2fLPl40wlHpM67yvxijflsEu9kSDIa8ZYcSGw412zLS0yy6Ht6tz+FwRBRKXdebNm06bsU4EQDn3OPxGHVGjHstKioKJ99bRBDKND8AxrjP9z9xzut2WGzhIDbG0LUB6Xxz7yef+3jU/bd0bt/0yndqtiYCACF6rKGjNgSNcUwAAqYwfwmNbwymA4Bc7dEHALWs5uk4zGHVIZcPEwSBMeZzFTZs1fe7fd8t+M84VdVSW07SVdff3ASllDEWdJ8fMeqR66/7sm+P+qlNhgGgVFDKHdSWF3vAVUEhp0DzgKvV7yNoaF0EIDDVfJZo/K3uK4qCJIpTZq3UNCx4b9kjEycBKCnIprSGN/m/Aav5NjlIVRgiqsYkISQvL8/4DydcNCrqR7vwBEEwaisRQnRdp1RWvZcN++S/ipC5Eh6XM0I7TVOHTZzR4ca+w+8f9+jDo1Z+duDVZ4c3aZTicoc35QFwJRGvilBV3gBnzFsA6DS+aZhztZykJnuiKuSd1x6c99ZjTz39Cuesw02PsOXfaxoDGAHhV+dcBIr7vK5d361LyomzjntvbA7g6JEDNDURV0zpfwfBaqwSopqiXohSDDEOgi32KQwYqnDNn8xmucLhfen1r0wWccE7y1LTM/74ZWvAD0GU/D7Pf6k318Qvv51v0SQ8UTRtYP9xX3afPtWnpZSWlpYqiiKK4qFDh5bOWiqelk4bEbNGRF4gEDBKhwKQZXnK6HYglOl+KsYBUGv4ga4Cj4QTiQBwyY7TiaRC5ulBdKoUSHZ0L8549773vPvC6LFPzX9v8ZKEhKTJj9732zHHorlD6mZUh/WGO8f8HQOmgIUAgAjMkw2AxjerVr/EuEjH2iGnR12BVlaUGOOQVamhuuY3ag9eE4wFfT7PwNsHX/pzkz2pASXs2w3rTqvjYvtdE+Z0KDEiOQICzQfNA7lOTWoCgKOsiKBGo9VimjxzJWN4aNToQXffr6qKyWz94cuPABBA1zTDSkUIrkjv+qfQTbicUxKhndls+uuPA4Q8zDk33mRpaamRwKYoSkAOKCZFXPnEyvK15U83eppSatRqFUWRc56env7h0mUzxrc3W8O+cF3/2/v6uBl5rRHieoFYiLVG/U0CYDd8tv4et7NuoxZaSAXAODyVZR27dQt43Za4eJfL+dbbH8XZE06fPD7uiVnrVo4Pj9trIlQBFuYHc10Alai9UTXnzHWuxdkaIND/ykvdv2/Hzbf0ZUwTBALAHBeOF/obqKoiihIhIhFMANLqddRCgUAwcDzLe1EbSUisjfBaEGCuV6U2RINUjRAaVhUs9cJDDgAgCpKu60ZMZSikv/fR9zt2VJ7O+9VZmAdAVZWk1LovTrhtyIh+P7+0s7wkP2IZPZ3lOv1m5DRVWNISVcm/mHquxk9RKG8PfBv5iysqa5X+V3Z2tiHeIiom53zjxo3z35oPw1y89d6tdB0doAy48cYbGWOyLB89evT8+fPz3pr31MXq0jG//n6+NiUVAEi7uwnthPReYG6AQHfH9gACRtXgmvNn3xEvLXhi2JOvLff7vVwPej3uho2azp791JARC3t1t9+XkWX0JfwqDGRB6CoIBaHMdRFUIlJctYpDxH/AuVh96ARe/OLzaQPuutfnciYnxgH8mtK2GhzG1ZmQBODJSaNPs5f/PecAAFwHaMztcc0HwRRVN5fDnwNTnYieEJ+a7iwpAkDABw77ePFHry76bJAz5zIAEEqpvPqdqfUaJapqSJZRWpxbdR4IlKDYSua3AYBvUwAdoMTWHTScWMPf/QlgGOriC3+PHFUbiKqqHa+/dfmPH3Wr171Hjx4+n48QYrfbDx8+PO+teUYnEYBiUjaO3bgRG7v+2rXrL13Xj1lfPr6WeJXDv52rhXZ76pAJHUjaFDAfmOcq7AAAQqkoSqUFOclpmahaDrrys+xxvl9+eLlJs4bGpCaaUm7oeuuOXZvi4+PvHDhgpulQjx6962RaUVLzdAZUB4gAEObNA5XANGJKDhNFjIdgje1/JWrMsABQyVpmqzeuXDLvoVGPVrp8APmbh4oBh8ZZCEBKajohxMcS8tSe+K9VdlM6NDf06lU8Ea08WMFCHiInEFMSgPD6nYiQUwCAUL/fP27MmNvv6HP02Hu6HnLlFThzN4IzgMQnJv555PeRj97ldns4B6WCQWuTRPf8UoQta4mUCHCkhK4cjSRlMsBxwEzabOOhXH5uM4SrjUYuCOJHLy39CMtTK1KH7Rx2vvX5U41OlY+uJlWUlQE42u3o0W6x2UpcV8zxrVR/wZUXIR3ugjSMpCSB+UDEqiiJ2rEj9PVTcc+4XQ7ZbLHHJ4U/JZEGDLrtm7XfySZT3XoZAPSQuzJvM8Adurp23Sd7f95318DBnTrVtnwjojHKueIAZ2A6jasf5pAUD/oPOAdcSSkK9VBwceqmZqPHPh4IagAU32VbWrcre0ZDEEQAVLBwzk0mc0gLzX39mR3atwiVQYgtDfGPwSHaQURo1bMHMaeAUB7ycNVF7U3Cz8s1KCWAfFfvHsMfuGfjd9+6y45XZH9j3DMhAogQnxC38M0VL7052ef1u1w1piNFZTIBle1VQWUagCsVR4CAK4i7lQDo3An+o/zSNVIGy1PKVzyxIrb1n0SgcK5TKR4oYKzGYo50uQOsFRGSwHWY0kGkGLERgxBPXLfl8l296xfmXGjVIZyNy3mIs9CEKaPffHnJ40+PNnICDBMGEUzuwh03tE34cMV7z82YXlNRBoAqMUB4yAeAmOzVboZ/yjlAKYG5bsydU1J4KW7i/HmvG+t7KlgFKVEPVVdsvRKCIDCmx6XdnJScMv+tpcuWv7N40UpmJoQIUEpgqhN7wD+HYEHIhaj1JjElgYCrXua6SBObR2xuDeSvn33+pUYp5aUX1xEqA5QzhVATZwqIdPL4GUEwuys9uQUFMavXgKIXoBOkqmxNQgECpQI8gFreOwAQcwdO40kzXJN5teLatIugQd3k3MKqUXIgDQ6FpNwEAHI6SNgRFAah0IM1nFGADquxpYzZYqNClZqpK1Syu1xuixlWmzU3J8eohGqxWC0WC2OMhyoldc+DD/X/4SuhhouJUCjloAIECVwHodXX/1ffuJYxDYCcVhd3OWaOT4mTJSGoMNWXI0jxV+kMAIYFikp2Yo27fBltb3pYSl1BXGHbFagUrfj/a8jJCFWdCgBA5GSueiHIzJVFTInElMS4van5SIeGzSrdGqEywEVTmmxtxKGDCKJ2Zs2KvVNmDDKZZfWK4mjbDxbI0Y9mKMdyIkgKQs5aPDoAQInciFu6kOaSkUwEIDwACAlFJR/WimvQLtrSPW5E331vrTL+T0Z3IOnPgPlhzoy1UhIBShG4DlMN9y2BmpMbtA+Q3N5QUU4WrXrOlCYjSs8unjrr0W3f7+7W83pjE0tFCfr9Prs9XhRFUY7v2SWh2Yb1WdpQVCtKHJQA4J4cgw3EWhfMCDAnfy93AY4aMyYz/mTcAhgG6gpK9p8Vbpp9X+dFy795dMwAZ+43ddrO1NXqsI5oGFZ4zjRKpaN7t77w0m0bVz29K7iM80rOUgEBAQ81m69xUwZUBwiFnFLD/0ZlcD3avghwItu56gEVechLzMlx9FKifqDS3RAAZ5oc10yQ4hgLAuBczc8vat8pNaNe+umz5w3ORWVSQ/WHtgeOUHq2usmA4fwgEkLOmlc3QImlCw+elKuyIiVrJjgS4hPWfLrm7+uhX4N2Lzw7ed6C5eb4Fn7HH0EFNmPILWtBMl+GIIPba3KOIFQOFkKMGk4EBIuIKf249NZPB964qXN6MOjVNVZUVJCWVkdTKlKajHDkfvPHbxfi4m0t2zUzoicEQfD7faIo2Ww2TedtQu8qQmYBC4cSQfOE5T8RAA2chTnH2bU4h+iQIQapv2mimRfaqUfnqFOvHhFoSV4eBQKcdOg0Yc2aZd9v+23w7V3LLyxPqD+ECrEWc8653R4PIL7uQJNJfuXlOVsO5vdsU//+emu4CXKctVmz1ieOHTMJAFDBmm9TvqekRhp2DcgpCDkRLAQYOIE5M9zTXA9qcY0ZRU7kQSeoCIB4Lw5q8NzSdx5zVnolSz1BNtZVYbhLf/902Xcvz5vqrKiMyJEEOwwVghCU6o0oPVNzKEZBsEC0IZBfG/M0kvSQ8OmxMff3Li6ttCS2BRgRqMtRu7czAtGeh9vHgxB4vLBZ4W6Gwy+AcXgbA4Ae3mrSDq4TQmw22VSmqfObo64YK+RgpMNECxICPQDNBcDQuvK1e4tznytpYK+TYmnTPGnZh2/PnrMAAAdPrD/kudfin3rso/lLupSVlladAZoWqqx0JiYmrVr8yCOPzcqT8inJZjwhnp3snfCi7q+ABACU4Ff2uo9lBoRmV3l5USACuM6QeF/cgDr1M954aylQvd9BBIIg/PbbYa+H/fzL2UfG9C8prXQX/pjYcHhMN0mSjW/pK9n91PQvKcX6lS9t/ukbSgUWdpNUg1I6940hl06e/xE/BhFrFQcAcEiJCBaBUBBAKQY1MbFxCv21b8IEj7dax/sTz+fbByBwGiw0MG32vFdGOSu9srUhleKjOUeouOajr6c/P9bldJ+/eCmSQtGuebzXH+IcP+7L26nsjvSvHZxBSoBWI7M/DGIauC6n4obqQhNHDu9PrQcAtiIIKlqtR6NtCAQBwGrByXE4MwKipwF2L0Kn0fj+iyeWfbK90uW7aQH9+WAeBRISUKJUcs4BRqjMGH9u2vA/52w9Ed8nco2aCM9WACDGI+QAq5rjBRsASgoPalOtZ1befoulTdOE3y9Uy1oimLwe/5hHbvpp854bureLtAMghDDGRFFw+pCYvKuSdX3A0tbpRtvmXd946yujT1lZycqPFm7f+ntJ+szzoXsp/n60cSY172ebOPPZ11q36RgJiomBruvXXdf1i6++uXfYvR+v3XFn/64AdeZsSGk6KrqbzWYzJtnLuWVef+iZZ59r1/46KphDwQpViZqUOY9Laqlr/meeff34iV/dr9+53XyU4oq0MwNSHAw/OAQrigexQa27dDRbuj//ykI96AcAzp9/dkrumbkb6baQ+2y8STHUKsGUzKuM5wa0kOFPZ5Vud4RzokgVVQeQkmgqKFH/l/QiznSfH6GQDkCQkwk0znlRN/TtAkLQukViUqJNbi9OHN0vNTm++7fvGjVeRQAVbXFkM26/c/FnH03RAoVEMI15QAaQlGjbsuNYty73PT1z1KRJt10+uT85Ma7VGdefSYOqfaARxDhzqAytagRwHYIFnAH0ovZIC+due5wu+MmxYxdZZNs4rpviGrTvJJ88cZHUDPwH4PG4CSFPTO4xZb1/FG376YbdlZUOAO6qrY5Nsunxqc9PeYLHx9vHDO++TjtFUUMHrwl2j9Rjziuv1G/Q4mqci8aufT8PvK13uzYNG9RNj3GcJyQkGouJQFB9672fxo0f2aJZg6xjH4gmO42K3jNQlrtbDVQ06jCuyw29tu6886GhXddrJylq0xcFO/SgBZ4xqWNUa+NFH2w2grGdJdV+i+dfnJuUWW/EkMFaskuWRHBwpsRwjlBTHL00acbDqqo6HNUvhACD+zT0B7XVm87vUlcR6Z9wrrZZRDBDTOvaLhOApvp37/z+nfkrundLeX3gwIa3pVFKAEiSpKpqSAsOH7Pq9/3h48L099bD8S2wa/0FyawpFUwLuPI3O52sR5eWWze2+OKbPf36fb5myThdZxUeMEGNfaWExior0c9Pxcgin8B9KPhmXtETSfHyrd1TUpq0dOZcNH6yJl/nyF5/55BbU9JSCvLzr3RR6zq70zq598AhBueuBCHE4/E+PGWasKLd5/7TlNTejfH0+s2atGhzfcBboxjl1eCsKOvZq/OcudvXfDiGc27sB2kgEkLx0psbx44fdfONLUqytsiWKkvEFZAtKQXnvhEla+OOjzZv17LbmelH1VdiO4XBu5rnt+p2x7SZzzvLq7WOaDiLCr7YuGn8iHsa1JU4QGPN45yrhUuXfj5i7H1Z2TkRUUcIcvKdCbKaX+xjHi2gt6ISif18MSACQs7YLHHBBCnRgqI7+9+QkZ745nu/Korz1Rf6t2vTMBhUZUkqKCrmnFe6XMlJttff2Z0ztvrQGlH+U0fXfeOtDzVNAzgVzJricBduByGyLKmqNnnmZ0vmjyp3uLu/9iK11jQHEAGB/Gr7AmegUpQzPgFCdZIBIA0l3cY/2BzAhbIGD497PNxMSLDybMh3oay0XJKFGIEXH5/w6+/nP1z+674/DjmLwlFlVwxBDkCS5PfeefXrY61OhiZf0QEA7CTv4meCUIs1pJazGUhq1KxP5+tat7K/MOOexMZjS88u2rfnxMC7b1OC4VnysRmfrVgy01l29h8VAyCEELFpx4cfGzn4y9CB2F8BgLCgc2q7qfMWfBj018jquBI2W9yPG97o1K4xleJla8NIO6GmyqK9b7/27fP/GZmTl1fdTsi7y36ePqbVknUXj+qvFQbaAgLkqw4VwPi+eTWWFIIZYhIHv0Get2dJg7FPLGvZPO3JR+4KBFVCiD8QyMsvMIhuMolr1h36dVDgr6i1bQ3+nrEWvjrnqZdefptzMF2hoi2p0b2chSrzvuOcv/fGgzNe+rx7lyad4/7zpz7rb4xYIEYuYAQxIynkktvkF1fWTbd+smbP+Eem60YQLOeW5E5+x9E1y394+qWHK2tu42ygXgNBj3wGQn2l+zUj9BIgVLJn9qVUDoXUB0dMOH98yp/8HUouRY6NoBd7SKQbatKa6CFf4cVvI+5OKkh1WwwHwmLAkX3x+y3fDR86RFFD3tJfog4EgLTU+LEPXV9Zfi6WcwRM5wAICQd2h9s55zzkq7x8c/87vthAqIVHLhQ+TCm1C4Wv/WfBNTkHQBAEsaYdzoAWLPj917MPjrkpryA/un3XvjOZ6fKZrEqbIOUrD1GcAFeMZVZ0txrQ/TU4x3WIiQADaB22fcRj6nPTBjWqn+IPKHn5BaqmEVTvB/bX6UKntwbnEEO7nR/h4vasyhlT5r39vlEtmnMdhCY2HEapyZHz1aI3RweC6sXTX52omEBMKWETBgAwEBHXVks544lA0qnQo5ZfZg++hTw7qdGCeW/MnvO61+sGwPWgvU6frt1P/bhpx4BBvb3e2JeeWa+hFgqBUMWT5Xf8Hj3fcaa68jYDoERPzuj7+HNvHHvzpTOhcdUHG91Am7fIiOIc8VVeLMvdQwUZAIdmaJZMV3JPfaprgczmg63xTZgeDGmhocPvePnNL956ZZKxFYIBUaQr1uzpf2tLo2C+AUppSVlFjJ7AGMtIT43My8XZuwb2Su+6bfbv/scBVFsGCOEQbpae5vzzcAs4oeaQPw8gnIfM8a30UA31IK+gvH2bajkHgBDxwqlf/QFvq/Y9LlysHnsbfvhdVdTuHdMOHC78KbghVdhVHmxLaTHUckhXyaQgApQKRJRaakHVYrmjtMRMgisXT3Z7Apeyc42adJEdfACoIW2denb/FYkQNWdrIHsA1nUsmV3uslnjDT+jAcaU5CYjKy6uMpsssj3V7nB4FQZTWph5nMOcgWABYucpAIBaDlsTxqRbTRPjg388NGYUJUKnznNFUdy3b3e7duYpj01YuGixEfgvWTJ79e2x5J3PPG4/Y5pQNWgMJCenaLpembsJQDTnopGVU8gurzGbpY7KrjM0lnYA0aryNggRsk4sFQQzFWS/P+D2+QkIIdAZS4yPi7NaIVpKs3cQKjVo8xCAUaMf3bVjh655oy/t8wXXbjh9W8/mkRYARSXlQpUnJgJKaXFpeZ20FIP0lNKS4nyNV3lsoyQlZ8n1UsNGAKYHHZfXiabqSdBXfpTp/tTmE5kWHpYOZ6xpg4UKV3+4b9VXs8pLwgUYGOOMaXFWU0r91Aofhg/vdl3urKCiAThxIudn7zPFuEraveaq5hzXUVXklIUSO9vW3tr3eofTm1tVHjkaWdllW3ed2b8nphm4knYA/Bl4eOCjq9Z8lJSYHD1emeZLbPyAK2/z268+kDNtwTbnO0QpqXZFcB1EqqVCDAAqQ3V0s7772ow7ew5c5ijIiUxGQ4c9IIjitm2b5s99/iljC1RCdV0dOKjn3u377xjaP1iz8i8BBeeMqbSm5y0auq4TQiRRUHSAsiiRHEZE0LnK/zLOE9I0f1CJTFWUUp8/6PL4MtJSAHCuhZRKSU7Qdb1vv75VRwMA59zrU+7sF45wNFpKy51Xcs4ApVRRVVmSAJSUVdisscZnAz3t027uNQQAFa2VeZuiOWeACtaKi6uTGz9ohNaxGqVEAc4DnuLe/RrmZueXVtX98PmVJauOvPXy7ZWucEhL+zb1jP8kJVqDW9/+FhMIaok8QhW5AcDSIDwXc6Wp+L49ObH/rZ38gWB0dLqBpETrT3vOXa2idS20A/DzcTzV+7G589/LjCqkCoCA2FJuLK84cn2zytxTn50J3k9CjmoXspwCPRAdLhEB08ROqb+17/CYszAvRgHSNe2ddz8pKsxb8dG7k6bM1HVdNKW3amfd8cP+P4+dbt66UbSDzuOpVN2nIpzLKyhkjGmaJgiUUKFZo4YcMIaKxxu8qU+TjfvrUlIcOTwGzoJDRJCclW7DKh4DURBKK5zpKUngvOjid6kN+ljjG40aM5m7tkWki8UsPz3n2y+XjyotcwMghJQ7Kq/GOQMutzcjLYVxfuVSPQKJ+Pr0u0tXK5053xAqESC/qIgxFgpplFJBEARK62VmOLLXpTSfACA+vkaQi+a/sPTdtVOfedjpcvl9flkWP1l3KBAMvf5C/wjnotGscdrzsxrISzp97d8V+5seqQeqw1K/inNaM6xvGlrxynOPuj3+S1nZ0VWLDcye+9OPsTpwNWqnHQi+3wNy2/Q1n2+KMbWb7I19Fb8++cidp2asOo+hjInQ3BCrDO6CBeBhi52cZuRvAugRN+c/byypPgtAqMQ0X8TOVLdeoz/+OLlg/pwXZ7+FjD7OnK8feHjQ6qU/tO3YMjrrLqiEtGAxAIHScxcvGYwkhDDGwbTT5y8kxleb/jnnUaKtujliGmVMFQSpVs4ZoISUOyptVovFbCrL3V2v5T1yXOqilT89dM8tRofi0sqMVOr3h9ez/2RPVca4KAp5hSXRw+lKEEI9xTsJlQAUlpQoStWcyxhjLATkFxbVq5vhrzgWZ+1mtZiqn5SIXq/bbKacMVUNEUJWfv6LxSSOGNkjEAhvi4qaZeYBuD3BgFOBidZU0Ak0Dzgg2iDGh7VPzqGW3Ri/Yvzj/d0eP2PsSs4lJ9r+dqPp+AAAIABJREFUWBjTVgNXoR3ABeTfC7PZ7K+5mGK6As78AbXnTS1CRyb95FkJPQApEZxxCByEivZwBgqhkNOhlHBCTMRji4uLFBaloq0iay0Bjyg0nGkfLnxs0tQPnnx87Nz5HxIiZjbIpJTXrZeRfTkn8oI8bj/X3IIgnLtw8crPJgqCx+uNSBEqUIP0MRCj1mSaVmNQWcwypcTvV2w2EwCvTwHg8fpsFjMDzTu7rmnnxyMlAQDIkli/bqLRDQjnxxuIs5n8AdVilgF4fdVloAgh5U6XcfOUEJEyUAl6MMbjqYd8xrJaFEWfz3/lwyqqCsDv/IM06pmUYKtiHVc85zeu+75F66aiKDocjqTEOFVVn5821Gq1cF5dYhTApcvZ0RK3522NNx9IpaTKRkgolDJwzs0NOVDt+FFLOE9KSItr06J+UAkFahaSAkAp2bLzz6L3Yppr4Kq0A/D7VNx7yx2frv0mpt2e0ddTsvfeu286cWIN94AAzOfJtP+VTM4ICHrRIEseCrWUAiAUpjo8QDPYycgGRQApPbdYlJOjOUGoWFlRtPL98dNe+DTObmcZvd1Fe+4b2be4qFSS5IgvweEoE0Xx/OkzV34GA5H3aI8z79ubBVrLjH/ubPW06/FVD6rSMteGH04gAFGApqHMj9kzexm2D39QMZtkQTB7yk863V5JEgBQSj5YscVsDo91SiljzBC9Vov86us77FboGnRg5MguddLsakg3joqIrvNZJce0lZBUyCJCDnAO3QeAEk137RclE4DikqvKxZzc/KZNGjtyvkxOtnOAcEYFq93GHOXBEeNucjgr01MT3lm6+6OFkx1O75XqV5uWLU6fC1f9BqCqeg1Rp7mYntTCvk3CTpm43bxxvnabxiiH3M3+9pJ3Hrt8uVgUhOKScHVrA5xzURQO/xYxrNaOv6MdgB8OYNO7nw0ZOiLaKSTICYKUoIdcc18dV/jMjERL4IFBbe/s36G0TAUoIYV10tbu+eXs+i93rPFepKQYlnohzZjyAMBfcVS8inGy3OGePXPo6Afv6tr9luED6mbWz3jzpbVPPjuU0PCDuVyMUso5J4S4vYEvvj560P8qSKiP7fWevVo3bZwWWb1fzikXTQL1XgZnkTRYAATsiGlVUmqas7xMNCXCH9a4kxOtDy4f5WDtQDk4IAB2/YNlvZ+eemtIYy6311YnVWfMUXh4/y8VrzwTLlFY4fTNnX2/zxcE4HC6CCH2OPOCJfvO60P+suwDp0ag1s6vvL1Dtz/7VB9VrRauoZC+86c/OQKAAK6FFRUpAcBO9Zt5797w4qzRkiRWOJySJImUzn9/b6H1oTK90/XywpCndOYTvRnn5RWOBmYpNdnOuWayt6Tq8ddnrx4/ZTjA9/5y4sixktWLJhWW1GIBBaCGQq2aN7uQddn4s33ruhm//1TKugDcDO+ojDsmTRzeuGF6pSsASLJckmD/bsTYJZ64Dv07uy9fThdF8cy5cBhVBKXlni+OHd9yILqtFlyDdgA+XvXd+KkvOAvyohupaNNDLlXVZDW3XftGXTo3LC0LB99yzotLK1s3z+javV3FgR4/KpuiDwRArr4INfDBW2OnvrBa4q0G396lV9+mZ/86f0OPzoQQs0nWGaggUEpNJmnt6oMblJOUZYGF1jp3erb0mzWzbjAYlotuT+Csdh8AEIpQJaTq8gjl2g33D7n+yw07S62p8ZrirHQD+OXIJZUn1NQFhT/FF77a9N7wu7tUtxESs2o0pmlKqapplJAtO/4q0rqe8E6kpmoR5WUt7FbUdLvg+21/5vP2qC3VgkIpctfIs3xv2d690ha/mkoR+t4/MEE6vWvf9L692tQUhHzfrt+ogJTUJErw9easr1dPKCiuUQs6BjpjsiypagjA+axSJ28JwEKct4UGvzHnUbc3UOkKzwaqqpVVuN9bMOqZOZ8//shkh8NbXu6IEcOE4Ktvj/94ldVrNK5Nu5wluPWG7nuPHoxyScFep3fF5U8lydy6ZerE0X1iNCQAhGDYoG7H/1wnlCUwuEOWBFmWI7pdBJUul8NpBLnAarVkpKdTSn0B5ZVZ9z/5/Jcj7rnlzqEDX5y29OY+3TVNS09LUEPhibms3OMhjSmphJQKpZAS1x/CzHnvvzPt0Z4AzCZp89YzPn9niBRgYAq4HgmBpsQrQF63dvmdgx7M/nOpITsDwZCb3RCz7M3Wh5aUvpmTV9GoQYo/qJhkCcDffEVJFC6cK/vF/SWl5VA8kNNAKMABTggUVYsIY0kUiks9u9U1tPbUbU5FyR5nCSohzrlZFn1iy6CaSGHYY30u1jivwAGgtKy8UYOwLCdE+vP4uRFjB6mqmpVdsn71eH9ANZSEsvIKt8djzLOCIDSoV+/K5TZjTGEtQLy38VuWvT/e4w1c+aCEkOQk2wfLfxzzQB+nqzJmMb5h8+/+DuCxJ64F16ZdXm/Qd/jrzz8zZeq0yGWY7ren3TT58Sc/fHuir2odFwNFCb3+0gg2s8NqxXlZH+5yOS0WGwjhVbY9fyDgcFaiSiELBIKXc3JVVW3dsoXZJM2bM/zukSu+XDHm9iGd1676+oGHh7VpWd/QxASBfvX1ke2uLdTCQQBTBpSSvOCwrvICADab/NbCneeVB7KDN4JdognNwXWo5eAa5DRQE8C/CvxBvrtxxKiJ5riGqaS4tMJpjzMlCIc9rHHV7QMAhbpJPRzc1H3aEz2j22sFAc5cLF7nPERpLgCAQy0FABaCOZNzmGTRCBCqkxb/7Ks//Eh/vQrnAPAfgtvHP971s48mpyQn/Xzo9F51dbUkVssp170+JklCRGOmgiUUKOlxS8eUtOQzF/KXf7J74eujCYEkiueqvBTGe2aMZefmNm3SOJoynPNDe3OoqXSgNGjOU8MU9aoh+G++NHLo6OWDbw8LiwjqpMWfbuTbOz+67aq4Nu0A5PTD4S8OPJ/wittdHaUj2xpIkhC9RrsS/oAqpac1Kpn3lzrtlwOL+vW/C1ERHAWFRTGaAQBZljUtJIpSRnpC186pVot8U+8bD+w5rqohURCMJyWEGBVaECwGESDGQbQZ23pxzt98Z+eF0F3nfd0AAioybw611WfcTokTIScEK0Q7IRXrvBfKb8rYfnj/8Z/nZ6SmpCfH0Z0KEGte5oSW2+9IT4FS24eo9rIyRgg5dPgMpdkxZwCVMvSvPIGwmExMsL7+3o6grTsNqIhaVDGeSEn166VQysz9pr205oXpwxrWTaHQdJgAgGtgIRC6M7DsRfNGvz+8kCREtpqcGfXqiqLw8dp9qxY95vL4NV2/cCnrypdMCLGYTEFFAWBUrkhMsOqJbTOVo4LiTE9LuHL6ikBR1AF9GjC9hqwxyeIb724/VF2u8xr4R7QDcGQ69u/b3vm68A7mAABOqHQl5wghhrk/pGkAnp7c3//iW59h0ndff9Kv/10ADFuUzlj067DHmSklHm+QMX45N791i+aKoi34z8jnX/vs6ceHJCSJilItGPx+BRwACU9hmgdcB1I4w9mLxcW861n37Yjk+3AOQrpa3j7qfY8KZ6H7wXVIiZRcPJ684o5ePZcvneioKPX4lKHihI+V2HApArVA63n81Lo2LWtYzgFwxhlDeFsjSgBU+qRYzgEAGpt+GDG0k6rqVqs8Z/5PQcvNu/0roi/EQYZZu34b2BkdEXQ4+L6VTHx1/ldvvXwPvjGEHYdaZlidTMRdc75n2Vl59RrU37rjt8yMOI8vCEIuX84WRJEQEh9nBoHPr0b4VFBcnJKUJAqCPxgUKM0vdP6qPNZZenfRG6MjfSRJAufGd4wgpOk3Xt8i2gENoKDIGQiqSrX+fA38U9qVdcSCyfO//Pq7KDtILQhpWmlZmc8fIEDjBg0kWUpJtis2MS241avJ8fGJbnelLa170H0+cgjn/PBvWUf/KOAh1G1g79erZVKi7cz5C21atsgvqNh30HH/0PKHHx0R4/Jz6XaQKHc4EerJ35js2LYv72jFUyA1xiLz5PjM6c2tC7OUOwACpkCtgKlOBWt9JG7VpCcnNG+R/uQjtzp1xNGTfl43+lgA+dqQ0vLlbVrGNIMDggBuxJiAnDlfpCE6visC3hQHM9N7CyJd+dmB49qHBY42VLgEOQVVBm0bKboyvpcSx+7AijrKyUenPyBKI0Iag+aNWDoBHDmW1bRRimHAE4XQ1m8PTp814pvNf7zznwc455ezcwyP9obv/yjIc4MjNdMycdQtPp8CgEXxxmyWPvn0UBlblqJNo0IvzrgoCHmFhW63h1BaPzPDav27BFDOsXbDiS27Y9v/Bv+UdgC2/IJ7xg/pLLV87oUrq2UAQElpmc/vB2BIu7zCQgAtmjb9aOEjYx6Z/H1gw33Dhw6/9667Bz/I9aAoWhhjlNI9B84vP/O6g7WBAF5Il6+r81BCyynjbr1wKctqsez+dvKoScvnzr5nz7a9D0+4L3ItDjGmVkxhqNt6x0bmuRzDOQAA6UDWtuzcYvnv9cu0DgAB1xAsAFCJxJ/IJlxO+fAl3t90aAAZuymwi4ABPDIDUuI6vC/77gHXGYHgEXDORYFELLCnzuZtL32FsTwARI4nslHGQbzeutInZfZ/7wkOamxoTIkDLFI+DAC93XKvRMEVBzF0BUEG4+AhipIySNvxDdM5hT+ac2DBkMbMZvOyj7ePH9n31IlzCcmm7rcv2fPtI16fcjHrsiyLu/adv3iuYJ1royFEWY7VsfCOp568TVG0upkZoVAov7DIYpY/XLbry8BxjvRxE/uD43JOrjGnGe6H4tIyi9mSmVGdIR+9HCGELF657/t9Nb7FNfEvaAdg+2oI3c/HJya7q+J7jWWg8X9/IDwPmkyiJAqG7b6wpDg5uXlIBwfZ7ltMPhublt60Vf0Urvsy6tQpLStT1JAZZZw1J+AEALtUHOzwwcrd0yf183r9bq9y14B2L7yxvoEZ9uSE5CRk55VxwEqd4GaQatH792WpfX4MHj4k98yra8p+oKaavOQMahnjbFtgIYOZCqUgMkABBt1nqG9EMnI3dQCEwDD8AtVRdGaTWO4I8qpVHFfdIJTISeDqb94nj9VmtY7ARvyzX531wfsL4ah6BD16yc8BQiM6AyFgjLMg0yubN0lLTEjQdd1kkn749uCb702v0/iw2xvMyc0HyPa957OyXOscB6lQxW9ub9EyUdMY5zwUCpnNZl1XP1y9/8vAn5R6O+GxRvXTjAUvIUSWBFkWPV6FEHi8noZSPWOiM8nSxu+PPDqmR/icwKXRf/fma8W/ox2AbQfwzaoVA26/B4CiBG02c8QjadwugKUfH/RWBl+cNcDjDTqdlZVuf4cOqT+dkAKwbmefJK0a+/6KZcXZ+xPi7QWFhaPv6375zRc2KjtI1bfZ45nTL/6pxSt2TRjV0+P13j2wy469pxo1Tdnx475BA5rn5pcScIkAXIrSyKsQFUBfDS5qDF26dwuZEk3smKo1IeIVswahAChUMKA6A4gY+lO5pf3RPy63b1MfACFhtRUApcS4miDQYBAas0VGAlcqeaCcWNMJD0BMAABevYljBJzL18e9nJkxPqa9FlARTGP+Emh+EAEyMtMSDJsI56xu/ThZwHUdm5tkWVXVhHjL5ayydWUHqZATOUGSeKpZ4wxdZzpjnHN/oHLRiv0lWmfKS+B3MKspNcV+8nSx8RHXrP+9stg9aVJPQ+pHnByCQM9edHt8CgBCyXtLf/5rf+QK/xT/mnZMxEfZ6+5JmOBxVS7+8HN38VaxpgUoKcFqQvCL0i+tix/s0qVJ+zZ1Q2qIEAoQQPBz+6qK77wT7vMH1M+WTWrfpvWJU2caN0u6p+D2Ta71xhkI2E73u3WlXx2L5z4xoUfrVk2XLhivhvSZk1cPHnsLISTebr1iJRMGoSZ+ReV/cNOAO28svJi19sul5X0f2u5dxFFOLHWMomD/BJWhZqqWk5RoY4yrIdSpm2IxiclJcYQgMd7KOF+99uczyn0gNUMBqMiDDgBcMSYHXlXpsRoZ8mWbcCoUCg0Zdn/2iok7S2fFdAiDoDqVocp7q4TURg3raTpb8cFnM56fNPXZtS9Mv/Ps+QuXcyv27jv7tWt9NOdksDtMjzVv0jMlJTnebp+7aLOrwrXB/SMhPsANKrbm36jqxKCi2Kzmxav2f5vzdlBLfsjzfmK8RRAEh7MyId4OICevVJKgacxskua+t+vUy5Er/Av8a9oBOPgcXps9/dnn5+q6tnzNjinjB0b/yhjjDKD+9QULVH1W5/YN3G5Pr+5t3//TqXIrAArtK8eWDPnA/eNebdY05cUZg9PTEhd/9FP0SQj0AvWWNNt9ASXb7fJKgmQym5JSsH/34cFDevEYR8G1QTRNJwRFObktWyZvP0YBzv0lXJCprd6VEuhKZKv9tv40dd2G4wCaNkLfu+aZzVi58bw9DhNnrANgs6Ik2BJ/O9EDxMimjkbPzC9GPng/IaRNqxac7Luyw9WQIBZLkpiYYDt8tPjm1uTCpYIz58sclZVmk7Rzz9ldgXej/R+M2/omjG7YNL1tm1aapr2z5IcLFc32ut6ntDiy9A4GoaohSunJs4UuJTUIPaI967qempxkyHhK6PUdUzjHwaOXzGZk1/j4/xT/9CGjoSTg1KmTZ8/+1aZNx/IKt9Vi8gcUVCk6Hp/i8QEAg3So8pGbT23v1yvlxi4t2Lu5MDcDFQFKibs4dEPvRGzJm5g/a15qAhjoTbY3D/pejHw5SoLHfRPWfn77jGl9kpISX3z989EP37ppw94PVuxdMn+kziDRkhAssSmxRjRHTSSYzk8YO0pRVYDMmf3SJ/eWevUUEAIWYu4sUJHICUSyAfQqvCG3sanvv/82oYixkUbjiSdmbS57K8RqXcxeBXq80+G+e9AdJSWlnHORxHpxrgIKsOvi1lJ6N+eMCuh1W/d3P/zh7oHNtFDwzUW7DmsL3HrD6u6cpWlbLShzueRHZ6zUuXzMO6GYjKdCrjGBRuBye9SQtmvvma0Fn0ComUlZNb/MfX/zhJHdrRZp9/7snw7V6PLP8d/QDsDO1eBjX/jy6215BTxYFU8hy7KiKIxFIoN4ke/GHbs/GnJH1/2HznA0Zf5iAOCMxtUzCz4QJAt//eDfBD9pZ/6iielXxu2UVGvflPjO0PHvLlk9/z8PnTjle/s/HTZ+vlfVmNksd+vWrOTga0GecDYwspI1IFXkI+ZkXjPPAIBI1Dh7nLc4V/U745Mb90l95/uSN8JvnFBwxhUnV5wAiBx/pdrH9LQKjuSUxIqK2jMgDTRoVAdlVyVlbeBUdEwcf1dpmUNTPUlJKcliKaJW0LVCpr4Wtn0laisO1ElPO3jknNWCxs0auTxHxo3o++rb62VziqOyLSUBACAC9KAYzLo+bX2A1111aqrKbOB0eP1pm5wPxJ4acHs8G384lhXoEeYcF43nSYiPD+dJUMJ0xNvNs9/adXJF9KH/Dn+//rsGhvTGtz+XNEmsc3DnhGBQpZSev3iJUnrg1wtL9w8vUVoAaGT7ddKt+xWFvrLj2ZoLT21G9wXlJf5PyzdTXr3hYg1QtOcbbkj9IqsQyUkYdGe/QEAb+dAwu90OguLiEkppYVHx3Dff3VD0HrEkEnMqWIh5qhUaAIBwT+a0RQtfKc75JTMzpaiorM119zw1adLn2fN8Udtl/y30m1M/U0uOe70QRKSlwOUJG6rtNpQ7QAiCAXS9Hl9cXgkam9ZQO5j5oXqThtx7V7tm1lBIIYSnNbjJ5XL3eVwrDdW9KvO01O2vb2vbui2l1CTLCQkJlNI9e/dlZWcfPnz0wCFP9444ERh2wj2YB8qjd3eJAhuS+ewjD9/36uqS3/1TqpsJbcE/3rU47olZX3xb8gGIDsK6Jn25cHqcz6d0aNvasA6u//bggD4tn355656/L+l5LfyX0s7Adz9j1sRu778/rqCwIiXZDsBmtQaCwVCItbTvMWgXJ5QDwok/c0CiVShyS9pKxsiQYf23LPrOQVoTUxIEU82kbok5g60afXHvQ6P73taTMeZ0VhJCAsGgEVpIKRUF4bfff5clgAhcqeSBUmJKqT4DALDW8dsmT3rYWXqqbmbarUM/37b+wfycP+8bOz537rPblfk6j4rLvQpkAnfO8aOHlsuyNe/cD9Nf/vK5SU18AZ1QrP4md9qk7p3a1mvSfuiw4WN61Zm/r2xSRFuqHURHsMWgJlMeGHnfTT1uKsjaU1xamZhgcZedada6Z/ekJzfnfwE5ZuREQHftPtDzpluclZWKqpaWlQFo06ZVmzatHrjvHrPZ9NO2naGvN1hYziHl4dqfS20QL4Wuv74TX7UTVATTAc5Dbh6osCU7l6z+7bBnMggDALVeS+mIqvayWi0G5xhjPx+8FB8vxTeLOem/xv9EOwCnTmePGH/9m3NmLZk/yusLJiYmBIqD9w6+4eTJH8Mdyief/Wu4zQzUtMIn0JyuXfsOv2/45+tnbMp9g4fyAQ7RVv2yNH9m3Ok5Lz2XlJRoFFKIGAgtFrMsm/7zxjx/IFCUV/x14epwOCeVY2bY9vE7Wpi2tm+/sChr954DRa1bYP4HWx4d07tpo3ZLVrwybeosr9x0T/FzoLVkGAAAl29Lf9uqXN60e0V5hbfw0kZBMg3tm1lSoRj3MmZo/aUfH3704e7W1LLPP1myfNUay/5l24pmgqixq1oDXOiXtry+9XTfO+/ufmPX/IvbMjLSZs7ZfHvfpgNulSsqnEPv7pmya9jHl1ZBiFUVAEAsLc29/MT0mampKTd1797rlh6arhvTn9fr9Xq9XW647o6B/e6+dyIwtlba9ar3QmJ6hiAImeIvrOheyBoIha6AisfKH2904UFPKNU4sFHCVkcQnCM9LTyS69VNGXX/jeu/PfLd3uhT/jf4X2m3dT/Um6YOv7P947M+njfnIbvNls9YhcPboKEd5RJICDRIKbYVPxpzoKaz/n37XPjrl05tU49WHM4PdAR4jdUAEYo8t77++php06es+ewLh6MyGOQWMwJBWK30+ScHDRnQvEHz2z5Z85k/NL6cX/9rxaMABzRABNGa2H5pY/ryP3OeyszoWXR595E/sjdtPfXy4ze4verCpdueny6rqrZi5dtqSD99av+mbzd4vX6Hp3pqEwmvm2Gd9uR0q22CxWz+67dNZpP82ddHKl3uvj3SNS3Uuk3HC+dPBRWMu6fez/uPX9e+YYlPuf/eux96QLZalAmPPW+zBEqd1SNNIDwjzaSq0quvvGCPs+Rn7S0vPJhf5Hlx7k+TRzbYc7jgvY+KnnlCuqlrwyGD3w8+OdWvaltLXlX1RICDaOCihfoH133Rq8V/+MYrhArZZ7ffP3JaZjp1uhkBTCZQSpd88M4DIx474p0RM8jD0BMy5dxXZs8LBHzU7wfsYFFlLqgrToaihzeBSJGzht3VhnMuSzKAOKu5z+D3+/TM/H5H9RH/Nf5X2nEBZxaiY2HDH3ecFASq6XqdtNTyCkfD+inica/GTSCKQFDs7QkxWoGjItUAOEtPvPziM0cGj8v31aYViRVHKu+dOXd/psn54QdzKwqPfr/99+Qk++nzBQs+3Pb6C8NEyTRh/NhJj4nz3l6UenKSxYpz/n6NyE5NR7Pm9aY+8ZLNIhXnHkiIj9u8/dSrT3ZxeRRKSXycuOLTnyeM7FmUvQ+ct2nV6brX5goCifaKEoKQBjXo0hRnQeFZs9k8ZdbGxvXFAbfU0XVus8Vxjri4BJ/Po+n8xo7JE2esf/XZ/tbKE4Kpoa4nLXn/P4RCqAqKBkAATYcSrCzJ3eWSrBaz6ctNv/72Z97Y4fUDQb3HdSk7D5YsWPLTtEf7513a/f6iecs+Wqb88jwlEKzWi77bmpIfZAv6Dbht0J13KEFfWeFRjzdos5L772j42eacN1+4N6lur4KC/GFjFxaE7nEoTWuqNGG0TVo385lJFaUXLNZUxgBe8+vTACBpegJoAOCN6b7rOw10VvoBWC2mj9f9PHNKj9XrDrFaNcZ/if9pSRHBzR2xfOGDp8/l3dCpqc/vLyktkyWh98vdOM0AOPQkCI4aGg+XJrad/sbr84uy96bW677vwMHNG7//svDdWlRpLf2+JhPbt2t81611QUzjpm1Zs+ROl8v/w/Y/Dx5xfLRgkCmufnxSc0rFtLTE9V9vys3Le/KJSZTA7dMrCn7z+0pTkuJGTln33os3VlSGRakaUncdyj9ywjt7Rq/2bRqUOzy6FqSCmJDSJnJZxrTKslOiZE5LTdh/6NIHqw6Pu7eOxSQyxpVg8PouPQIBPyHk3NmTRi5WmVPZc7iCEixbMMrhdAeDQbMlxWKvjirggLPkhCBaEuOtF7NLP/1qf1qydPN1qf5gmB+yTPf+WtatS+tePVo7HOV1m96ekpwgW8zLlq5yezxPTX9cVUP+AKso/t3nLkpNiX9kxpeTRjTw+fWcQt+gO24FeHrDXl98OHPmlm9gzbviTTLCzXdap3z17epzJ9ZLkm3hkr3b8ocWBTtEd2pj33HGfSdICLp9dIsnJo2/ORBQGzdqeCm7cPGKfYvfHn193McVNarA/Zf4v6Fd8ll0HAFJwqSxN9/QucXFS1kA3ll+8KeS6ZzGxgsBuDPjlamPDO7UoX3W2Z1mmdVtOjAlOWH0A49eYjdd9nVz+G8AiMV0sa1tv+TYuXXre4oCR9G+ByZufOe1noSAEMI5r5MWP3bqlv690x5+sCc4DwS8hAi2hEbeyixwmCxxkig888o39TItIwa1DQRDhJCU9Lo6Y2dO/0kIEQRSUh48drry/GXdLOP22xob92a1SP5ACIDPr+z4ueiuPgmpSaY4qxjxi7Ru06E6BY7SkuJCr9dt2PPibeKpS+7NOyslCYMHNNV0JgiUAJrOAJQ7PEeOVWSmo22LxBvaJVS6w+t6i9lsLJI4hyCQRWsK7rmr2ajC8XeUAAAgAElEQVR7exSXlHDO4xIaMRYKeIs4R0ZG+povj27Ycn5QH3uLxuHZkHOs31q4ZN5D5eUOc2Kn2XPmB0haRbDlkbLJRocb0z9obf01JCV8/vG7fxxem5Kc6qz0nM4mazae2lH4PGhtoaZ64luD53Tp3CgjPY1xunjFzpdfuGfExJX7jsV2/O/wf0M7ALc+hc/uHzdx+scj7umSniZLorhg2/59R27rW/dAZqLi9eCL/MVVWjYfUW/GwkULygqO7Nh7rGnD9MYNUwXRnF6/m65refmFxgfmHGmpyRaLxePM8nsKpr/0/cszb9V1Rgiat+594cxeQgilRNN0pyvw+frfZRPq1kngHITg4mVXUMGT4ztnJotef4gAnPOktIz0OvVKK1xrvtjmD6jg4X8AZJkCCIVYpUczLp2UIEoiVdVYDYkQIslX5IJwqGqN8AJBIKJASh1hdtqtgsUicA5d57oeLnhPCOEcLRon3tA20+Gq1Koiuzjj3oB27rL3zEV/q+aJxuZHLo+/rDzUrJGpa4dkSaA1Eg8Bk0w//y7/tl4t7ho4wJbUJD7OevrsucivddLTEhISXM6SiqLf9v+atfvA+dlP3dWp6/B+t084henlamOjW6u4gz3S17sDqNCa/lz45ltDn+3SuVGr5s3mzFu/eN74/vd88NsBKEZUzf+M/zPaARg/zLzgtYf7Df/o0yXDikrKP1ixP85qnffWS2azmVKSOSygMivAqZ70yZSv+ve7tST3wIQZ3ycnYuwDN3Ru30DTeWJaB0E0C6IZYEwPAbQ0b7/ZbNq6+2Tn9nV1nRMCzli76+4O+itzsw5GAoFUVXN7AgBUTf/muz8IgdlEQhpnOoIKQJCYaDHIRwgRRarrpFXLJrf27l0nPfVvHA//n6Co6p9//rVz917OwTnXGTckqc/vV4IQBMgSCAHnUENo2yKuYaYVgMUkSFJ1XRvOYLdZgmrICECXRPrFD/mvzrpbEMTE9A6UyoJoAgjnuqYFnMUnBMrMZnnG7K87t7WXOzFnzms7d27f/N2u9fkfGlr13bbpqz9fGAqFcvPyP1y6tFnj9Ju7Nd+668xjY/v/djzrHXr496nhS//v+F+XFNEorwgWFjvnPNNr5pxNjRsmr1m9KBhUjC/tcDo5twGE6nEPNRo7dOiS7DO77HZr57b/r73zjo+qShv/c85t0zIlbdJJAiShBUjoGKpiQ+yI2FDsrr2uu6trL6y9rbuurq4VVFRABUF6J4SEIpCQHpKZJDOZfus57x93MhkCImqyn/f3+b3fD38Md+7cOzn3mec85zlP4a+YM/SHTUfe+7T87pum8vxPLIMVRWEYjDFmWdbVEXz21W8LB5rGlwwABJqmKTSrsamZEPLmvzd6OqM9JVkGhg/L1nXA+XPOOvfsM3sJ0wnz9f/7AqdjNpumTS2bPm1Kr+MYYxyXi8UyzLoNm35cu7W6BRBAm8vtbo+qT6MRBmabRhQgjFBYUpIdAgAsvDjn4aeXzZ0zcmBeMD3VTilRFI1lGYSQu6Nr8Vfbm1vD18/NDoe1iv1HPa0VZ545a9uO8jz/2rrgOADKMcAyjKIoOdlZzz/7zNp1G9967xuEACh89MO28uWx79UH9KW2K/wIit+DadPKLp97sShJCKEEi+WpZ/9WWVVrTwCPnCq73XOvnHnmGVO6XDt4jv/s611zpqV7ukQAQAhqGrva2kMCx2zd4xb46B5garJle3lQU2He3NFGgwEACIVbbrxOfzzu9vaYM+8UwZjVo+oBgGhSJOTW2zXFIEQRw245crLmJ6eC0ZwimFJ6HwVgWINgTMFMz4KQaDI9hXCEeKzWBIEXWIPh7bfe1tMNNU37dMkOCjB6BNfpVXRxESUwm1FOmsloZEYV2QMhVR+tYFidM3tWV4DYU0eu37Dhw/dWmHjYHrpvhOVvJSWDJ4wfO3P6VK+3CwBSkpP++JfHd0Pjj+8c+w1+H30pdgsvsr72yvNdXT5KaXJy0quv/ePtf+38+IM7DxyoNxgAIZh76YUut7+9ebOmiqs37N20vfbW+cUMRhYzDwDfrq9DCEIReecePyUwaFDCrNNnKArMveQ8jFFHp+f4vPbjQQj3quGvyP6QL5rkixCSIh5ZjKUrY4bpFvD/FpTq9kPP32IwO1kumu/NMILFkRffzE5Te0c2nBCEUGpKEmaYJZ9/RQglRPvHO8sBgFKYUGoGgNNKkhWNSpKiaojn8dc/uJ579FKX252UNjo7d4jP5/9h9VoAsNtt23ZUbt5S+e4/njabTaIomc3mz7/86jXT6j1xe2m/k74Uuz/fNvjWm6/nOPb9Dz9Z8+Oue26ZNjg/JRhhk9PHAkDI3xQJtkoRL2aElT9W7d7b+Jdbx/9z8b6IrNU3hcUIFBXar5w/V5a10yaNAwBZkUOhn9k8AACAWE1qWewK+ur110STpR6pAtAF8cS7k/87oURToisdAISwwZQMgAAgwTGQ4/XVKyXHlsY+IQ67HQAIJTt3VXyzbEX5nhYEMCDHaDEQjJE/qAZCzBvPz21r8wpGBwWanD6GUuJxVRLFq1F0y31fFw9PfPXF5zs6O/fu239/6IOq63vf4jfTl2KXWgGlj4BrMux+CMYsgJF+Y0dnZOqkQZPGDQYKLItfe+cHQjR3u5aWZiybPHFK2WkUaFJiIqX02MwgpE+dlBJCVIRwl3uvpkkAiBAlViQqTiX0ASefrHUrMN4W1JfMMRCKfuefpU8NSX1SRoAxG91TZliDPWU4pQR3p/PFlwiKIfA8Bejs9LS5XG+9/R+jEbvcoSQHm5frPGdGMQDUN3esWFXp9ck2G7fqaSWQDdOuBs8Y2PFo70v9HvpS7OIZ/yzcwhQv+aoqGIKyyYM1ot171x8wZsRjCwQhxCDMUKJKES8gIKrsde/FDPs7RQpjHBMCopFeVYmC4YjP19t0Qyi++GnfQyntJXgWs1mP142BMTaZDN1n0V5Jgb+WqEYkWmJGKQCwrJHlLZSSXk0EAIBlWZ7nXnn1LUmWq/YeCYUgK5Pr8CqbPoVAdq9z+4a+FztjB0w5FyQJLrxgYpoz9eKLznO5OuI1AWYEhHAk1KopkiR2RgKtCGG9dPBvAGPEMAxQoBR8fj+hBAACgVAwHJ2gMULH5yefnF/UXKcKhV4OtpNDKY1573iOS0qM5p1aEywswwIAofT4Wq2nCCUaIYpgcJisWZRSiz2XaNLxGjHR4RCMhpdfecPlbt+8udbphM9X9zqlD+h7sZsxBd57+cnMzAxXTwkqxHAGoskBzxGEcMjXoGmSLny9PvuL6O4AAOjo8OjlECVJ8QcDCBAg4I4tdKxjEFi9LpgOpVD1U6vPdyLXfDeKqvUuy/pb4Tg2bmO2NxSgaFBKujOaiaMfEiVVOTYpX1U1XVPyPGdNiJbkSXLYWY4FAEXprb1OBVUJma3ZDGsEoLbkoQghvV9PDJ7nHXbbp4u/vGHu8rAz/p0+oC/FzuCFqWfDv/+1CAAHvXWy1EUpkSMeABTvLzgVdP8IobS1Ndo1W8/AjZ89MUYMxgDg6QpvK28A3cYBcLlD4QjoWoYC8BzMmJiR4jACACHg9mtDCtI7PYEOb3jUoASB75bU49USQieVmZMhqwSg+wvFgwAAVJUc7RRlDTtTHa1tng6vmG6P3mf1lsZ2jxLTaCYjpKaYcPf8bzLz0ycOopQCivZbAoh2S8MY6w4ma4LZak2gtCfX69RARJM4gw1jjlItOWM8pSolGkLoD3c+8MWa3mf/TvpS7Ma+ADMPps6/eLKmygjrqWK/TEyMNEIQQKfHE4lIsqoABQDEMFh/8rKiUQoIo58Ouw8dcQOAomiKQhkGEAKM8ekTc5LsRgAABGYjx3E9qlRVKSEkKIJI2LIJxVv228YXdfEcrFm/OyORpRQQBnuiU++JAAAIIULoui0H122pPV4aTwWHlZl7/hiTie9lz1E5AlT1BrVUZ0ZOTsbaPUkzRnWwWNtVXmkWEACwbI+JSQgNBGX9At6AuGpjA0KgakQjoChgs7L6Qu3M6YUsgxECnmeBUkKjRiHPc0DBZDI6HHb99wlwqgsbSjRAwHJm3uBobpMf2/3ehmd7n/N76Euxu+ES823Xzex99FgQQhhjWVYUVSEaaXW54/3yRgMHAI3NXRijtVtrvF6NUmBZyM0yswy+9KwCWSFmIxsW1UBITnIYAwGREN0NFr26NSlH11sMw6empTKM/gxpQ3Or1Sz8uG/ovKvuyMjIEEXxzTffuHLqgWUrt44dXRD/MBIshuvuXJyVYV306HntnUFBOMXA9ygIgSwrmqYZDdztf/zizhsn8jwbbyp2eAJDB+cs3110y20P2e12AHjooQfvu6x12fe7spI5AEAIhcPRGE+eM8RKSmKMdbNEtzwRAoyR0cAiBGFRXbbmiKSoza1hSQFNA4GHC88uUjWSYBEcNmNEjA6RrgLTnKkCzxsEnnYry5NgNPAPPLZ09WdaqKce/e/lBMbQb4ZhgP5MAXKOYyMRUZQkRVbcHR6WZXRpYxjGYuLdncFWV4Bl0LIf6iMinDbGxjA4O9U6Z3pKTrqVUgiGZTHsMxiYHVXuj5Y1zZjsNBr4j77Y/+ozZWkpmXlDTlcVCQAoUEXqLgqLGDlYE+vcsH3X/puvnrWmZnBGRgYAiKJ4xhmz6ur3mU3GWFY5ACCErrtj8c0LSocVZbvafTWu+h/K9xmDwMfNVyQaSnri0PWQGUqKsgY4cpKTk+64YfITf9v8yP2Teb7HuAyHFc7ozMkfF3vezz773LZlCw0GQ0+5oO6JQlZ6IgwopQhAlFVBoJUHfZt3+0ePSBN4dsmy5jcfG3FmWS5C2GzidEWyfG1tTa0LALbs9mIE583KpZSqKowZmUEIdbd3UEo1TSOEZmWmE0ISHXZK6Qm3EENh6fbry+qWr/tf6rebeTsMdln+dPecLn8EI+RubyeAOjo8CCPd2EcIWcw8Qmjl2mpJljmW04iWYEBJiaYEszBsUJKikmBI0lQFM0x6Vh7CxoxB0xDCCODZ558LBTsXzCszm4z6PEQo3V7e+Pf3d5VNTD5/1qDkjPHO9AJJ7IkVVaV2VYyahnsPHAkz4wcWzysqGqL/Nvbt27fki+UXjd1qNlv0iZxS+v7izXfccIbfH5FE6R/rV7766tjgz/QI5QC1gtIAMn+cLcEAjtjl6rt8U8dOJBq96f5lLz05U+zWN5qG26WS1LyzxowZo6qqyWSSJKl85T3u1kqnlVCqa7veEa8aoRxLfqr1vbPY+/Ado8omFMTq0SIE73+2Zd/B1msvzMMYmc0JvWZSnmOMBpZSuqm8lWdoi0cOhURVoxYzP3JoRrozQZJV/WqKotqtCZjBiQ67wPOaphFKOZZ5+KmlX6+Pv+TvpS+13ZrXgL0xeNtDny68fJSsqnoBHp7nEAKeY9dsrA5HlLrGkKLCzLKsc2aVMYgm2k3bK2ojoWBKAqhgNNksyelmkzkBAFRVYTi7IoUQQh9+/Nk50wflD5i0ecehZeL8dkOJBtwk8e/zS7OnTR5YXdv26KL1BfkHr7+iOCVrGi9EN5riOVLXtPCKwi93twweXEApra+vt9ls86a1HanuGlIQXRtazIbaOk/AHzGZTP9a+93Lr/fIHIFA4p/vg0BIOdIYWr4RgCpAk4FNB247hHoVxdCAcF1s/qsW+A8AhtsXjjra2pXoiH6rpqOu6VOCh4J8dXV1QUGBKIpWq9VhY9pbT7QEAUAIQhFp0+72g7XSmGLnj1/M9/vFir21P9pfwZSGVHS6788L5k2ub2p/9Pn1T91VcPw6QlY0WaWIN40ZmXPkaOCKGUUZTnNji3d3ZfW7n+xnGEhLYew209kzijiOCUUiANDlD1BKDQbBZOBfeGvzhiW9r/k76Uttp1O4BEreZc6YMthuM5RXNh91+VWVBEOq3crNnj6QwSjFYbSk5KzbXxiSzCGRnTGyJSfJs3PPwaGFORzLGY09nT0Yzo749PsfeiYrnb/w3NKjNeXv5e4cl5X7+T4RAFQQpoefm4Y/HpiXabMlBELifY8sT0tlb1k4c2DhdMywSqQtpu0am9sMAlvRMGTYmIusCRZKacWeqrOHrV75Y8Xo4oG6evh2daUsqRecW9rY2MT/s23U7jQEQCCS8uKjjMMK4QggBAzWFKn9jj9hEm2AwQE6XvJ09v/JNXVSWWqKdemKHYWDopaRxxssHJS9Zm/B9FnzVVVNSEj48suvr5pe9eOGinRHdE6IajuEQpEIg9HXa1oWzJvmTLWyLFNRWV2TcHmb8xqJTQMABPDkGXjpS+NLC5MsZuHJF74+d3p+eoqltwMIM5zR9lN1S9agOYebTX7RxOHgrec1LltZnp8mtHsjBgP7z8/2IQR2q6Ao9OLzhgEFnmP+9fGuFUv7LMwuRt+LnU7pK5D5NTx+73nLf6hcta7xmQcnhAIhYFiOQXtr/ZJ57u13PSIIgtvtdrlcn3yy+KoZB2RZ5TheFzuMkSSr1/7h47tvHlc0OCMYirxu+p5X6R8nown/DKcn9DxjCkgDfqr06qXMC0La8CSb8c331lUd8N576zigZPCgvASzWffButu9gVBoyODspVuyB2aIg9Na1m+uHF9aGNsM+OTLbbOmDU9OSlj65rJ7lpdEQKOgOd/6a2/fCqXhNduDX/Z4Ub2gNesFwo5l4/xDly+8VBTFm+795qUnTw9HoucEQ2JSYqLVnrdxv330oGCK2b1l597MRFa/D8uy/oD3qDv4+cr2IYMT584pSUm21h/eXy/lbR7yHa/SXlrx0TJ8zscRASILvOfOLE1v7/QvemPNuJHJ08ZlxypTIcy4utRLZpdubb26qGhIWloaANxxzxOPX1O7etNem4EApRQxX3x3kOOZe24++/G/rWjJDh6ZA3W/qdbEL9KXk2w85XdC5pdgtPDnnDHSbOIeeWnbH++YCkARy5QUO9dVp+orRIRQOBxOTnUKwhGte4zsNvO3P+z++IsdtywYPbwou7rOdVgazucSACD02KJ2AAgoC9Jm4abPmLvuaL52qr/itoXTHXbzG+9s+HFTw8Ir5eFFzoz0LEVRU5LtJpOwZkNFVsKhfeXNYl52vMwBQJu7CwB8Pp9FNmLdfwOM6/bHnZ+/BkfjMqwG5Qbveiw2dBTghKoOAMYtyaubUZ+e3nsFaDEbOjs9lXsPDx6Yu2N7g9NhzHSwlAKDsSiJnd72D79pzc5I+OD1+R5vOCJp6zdVbJxQK6iE192Bx3LL9ySsAOKMi5K2Dj+S6xxU8sZzl73z4foPvvrplvnFnq6I7j3geGHF9sSiMU4A6OzsTEpKOv/cifsbO3y+sMOWAoAsZoFj+dsXzghGxAvOGnHhrb+10sQp0F9iBwDz/KMqZlYFS4RZr40cmOfkOKx7OJuaXS1HXX6/X5IkhJDBYAgERI5BGqVUI3l5qbMueuGdly4fVugEQKv2oQ3FG21hElLgiBcKE8EbQFkpxvML4dwCAIDXl9WsqWyaP4IblIgh5Yabv2v6a+dfRowYesmckRfNLs7PTZl347v33za1cGC+rKoWs2nmlLEHDtc67AkWs4HjmHix0/fQKKUGQNsgPAqMGlCkIvcFd2jgYSCJG5AuNuxjIDk2bhigFVQXKCeUu0BiZFDqCULuOI5RNE0wcK2tzUVZZoyBAlBKW1yu+pbQ2m3+txZdLIqKLyDu3rXzwcYXLp+YO0bZBwDbW2iICIuuLBBY0Ai8sB0iMvhF0tBFnWZIMkUWMPWlh7+9lt57xcWTUpItDz/5dV2T74EbigHA3e45a1SEsGxDQ8OQIUPcbrcvIOckSvv0BgcIbn1g1UdvXVT5YgP63s9xHPRdmNPx9KPYXXLQskETUyvUo2u78kucf31+6c0LpmgaCYuRghyQZamrq6uzs9Plah2TX7urqiY/Jy3daR8x6YUVH8/zdoU4jv1+1epLnvRfosILW7WQRM7MRbUhfrb4+Yav3U/L8KRMAUCwGEwC+15r9KYqjZMkBJ98uQ0h0DRNJQQAjAZh+cpNE0qLxozI9YdCq9btHTe6pzZsutMGAElJSS3OcDEw2yE0AcwqUABgIBGAKg1HGUiE7lA5FtBhEINATihzAFA5u7XYaJQkKX6WlhXtUE3LaRNGZacnEEK27q4Xg16bCWGMKSGEgtkMZpMgigpQoJRJ5IMfbI1aqACgEjpkbQVQAASCQAvSEzKswnWmsDvMbD+sfvvY+QnGc3Z+/EZ5Vc2IIbn3/+GMNrfP13FUwGxOVoosti1ZvPziC2YdOnQoOyuzeu+3wye352QlAYDVajx7ZqZ7j9+wKmAmGEvaeW+kLrstTsf3Kf1l22UfMhwYWbJd8gBAVyrKfDrnH8vWXTV3AiEUY9zY1DFxfMlPTdaqWvv86fXle37Ky3HyPGsyGZd8vbOppf36q6aYjULV/trvtWsrDfOCOIWjIgA0+Gj73WzG1e/2vh+AShlM8d8nLBo6tBAhtO+n5q++233TNWUmo8mZmgIAgsDtqjg4fOjgBnXh2DGjA4HAd0tfnDKseXfV4cKBWQBwtNX778+2PnzXOS6Xu/adQ4Vb0ghQEnXRIRaQFbAG4AONAihA8M/MrToYUOXDrdMnT7EmGFeu3TM43wkAGCOM2LZI8d66xIcevAshePKZ1x689NCmLbsFFgEAxtjd4V6/syMYoffdehZCiGHZHRU1d9c8w56ozEDEL91/bsZry/fq/+WwOimp8uLc7QUDMwHhbbtqtuyovvGyEYS1YJb1eEMTxw7xBbkvt2TNm9rQ0NgSDAUsZoMgsIte2/DK0xdvn1GRrGAAEIHkZNiKW3Yec7O+o7+03TVPZAjdO/3JbrJvUdMNT03v8vl5niWEZGcl7tpdKUpyJg/bd/Gjhufrm9+Kos2/5LQj9a6X/76aUHXh/KkPpq/fe+B9vy/8hOMnCw0PsKHMV1VJ0YS43X0AUClzpnPLRfm7hxQWdnWFF725OjXZetdN0zIzcnTlhxDaUX5gZlnhn9/NeuWFMgAQRZEKRV3hrmBIZBlG1bT8vFRFJRih7OysnePKW71e5092DEAACFAVqBgXEnxymaMA2y6vOW/KbErJlyt2T5s8UO+oGRGVIUVFa1Y577pzodlsRgg98+Qf335xoUGFzESgFAghKUkpU8YhVSH3/XXZ84/MFngYNyr/GeVPd9a9aGP80bQzAABQFG3Nk6dPuvldR5LZr5hzzO5nSv8zfEguzxceOHz0o8+3lI3JvGFusUYIxgyl4LCbN23bH4pIGey2LdvZAdlJFrMBAFxuv0o0yagmUia2XvlZHd4X9JfYycaeJ6QCEsKQaDd9tnTLnLNHU0opBWeqjWEwpaAqpK6xjePY7IwU3cTJH5D67KPzfb7wB4vXO5PNI4cPGDu60LnZ9obxg73C+RkJ0oxZQz/48VBsN8SvmM/L2HDLhAa7LafV3fXSmxumTc44beKo3IEjxWCzfo5B4I/UNQ8uKL1x4TUA0VbHY8eO/eyz+jOGR01+UVQmlA5oaO7MynBcftHcT+Vvsn5KQoDkn/EYnxAWGAHYliG+tCFpqqpazMKSr6tLR2bq77Z3+JUaduL4YlVVFUXheR4Adh9JnTXUSGlPUKDFYIhg9fLZzpf//m12VuqCy8vKxuYtM11yU/UbYWIg3RWSU03Ce19v523Jw20H7i36WOGdKUkph2vdz762dXKp7Q9XjpZkTY+84ji2yx+WZQVj5EyxWROMsqyq3QuU2sb2Qbm2zoogq0YDofpnCuyhv8Tu+X/WP/NhNgWqd9vIaiKirOyu8i+Yb+70RF3wgWBkeGHWyl2JDFKSEq3VdbvsNktWhgEhJMuq0cjfeNXUnMGz1q7fcN2d719/1Zi3xy5uOvoPb+1WZcRTb2OnFJFBNT035smSPCYzK4Njk5566dthhenPP7UwK2eULIdVqT36bRDwgoEQcCRIayv3OlMdLMt2dnaaTCZRYbzegNXEiZEwpXRySdbL72wUBNPLT116zjnTmkY0hbTI/rZD+l9xKgx25rOSYUrZtPYOz4pVeyqqmt58epqnKwSAADM8hwlgVVWampqMRmMgEHA4HIGQihBC6BhHjZFnTULC7OkGA0+vvGXJ4ncuUwsnf1P4yapdbQ/UvwQAEFGWPyBs/uYPK2ajYcOKOr1j/v3pphRb09lT85+4qxghiNWVD0lUwdr000YuWcNoamRGKVO1v552R0cjgLUbG954bu53t+wt7L57NmPE0SzKfqG/bDsAIAlTvg+28d1bl/jZTL8tVF5ZN3VyIQDIsjo4P33lwfNvu/kqn8+nadozz7+28PTyo65I3oB0/SOUyEZHif5aUZR/vvuf7TsOjS9Jm3/xpHBE4nmWwVgjhOfY1/+1mlBYeMUkMaRSSqSITwx3IcToibQIEMOyERnSs/LqO/MHjrpS0zSj0fifj7+6bfbh9Zsr0uzH7K8aDexTb+22GOHRBy5ko8EEvwKTUXjxrZX7D3luvKzAZjXE71EjBCNLRn20OmXMpAsMBgOl9IOPlv/pioZNm3fYzD2xYUjf/dM0ChQARSS5pqFj7TbP+WcNnTi2QC+toqgaz3N2q+GJF1a62jsuOD07NdEoSurxm2MpmXnf7S6YPvOC4SOKLRYLADz858dGO5fpGycIocVf7brz7jMPXnjQ6iYAoAEtM6Vc8OrBVQtP1MO9L+hHsVtWOGpqo2mHGK2A6SrljQtN23bVnD1zuEZIS6unZPT44ae/AwC6M2Xrth1mZX3Vzs8uOHea/qgokU2JYzRNoUQDhFTRf6hqVW2jZ3NF62njCyaU5nMcs2xl5aYdtQsuG5doY9VI763MeBACV5c6amTR0q2FZrPV7ZFvPe/IjxsqMhJ7DwIFMApMu0f8+Juffn0oKlAKwwYljhmRZhBOMJkcaZXOP3v8zoMJNe4sSSFXTEfT5m4AAAkNSURBVKs+cLCOVb29fNK90DS13eNdsa51+mlDJ48vQAgIgRf//v3RVvHe60doqqgoFAAoJceLXdbA0d9XjTr7rLMSExNTU1MBoKGxbcW/Ths2JEdVNYQQg7nUAdb2yfv1RoIa0FlCpqlzfcT8C8Epv5kTjEtfsXNkYHZDIuo2FBSfNmHYgKde2nbpBQafP8JznCgDpZQQojvwjAbe4+ERRp6ONk97rNPhAYgbRYTQwBxbQa79kxUHyyuqEUKyQu+8eiSlonqyeGFgWcxglJPCVB8+ctkUTlE0k1HYvK0qN5UFAEnWZEUT5W7TBkBPtZg3Ozbt/DoogChpotTz2FgWcywWeGZkvnnDlsqcrIxBxS6Gwes37U+1cTzPUEpVjfbe1OqGYdi0lJTr56a89+Wh8sojAIgQcsOlxRFRIYSyrDEWWN1L5gCAYXCaMy0YDGZmZuphLzyPKQVASP9ns5rcO/3RTHeAVCwctof6T+agX8Xu8cVH7LPZ0u+wSigFcNaoCAHCQEKdJCypilo0QG1qrHckJoui2NbWtmTp2ldvr/vsqBAncwDQPeUAUAoCzxgEhlK4/tIR+jvtnnB1vTeWsoAA9lZ3HKyJhMMQnwFj4IHjQP8N5OUdyRuQJwgcxnxz1DOFAX5d/PPvg212ucOiIolibV3t0aMqxqBqICsQH81uEMBhh2EF9uy0nkyf0ydm5GfbjYZo1z+LiQOAYFj5OXkFAIElVQeaSkpG79u3b/jw4RzHLXrhtdEpnOzvAIBDdd7TJo+mWC/hCQRgqNl6/rMHj71GH9OPYgcAf/mo5uiAsvKA6/hUljQH+8lXO46KL5WOn1VUVFRdXX3jnMDSVbVpSQYA4FhsMnIAgBGqb/EdrPNiBAyD6pp8NY2iLEEgAABAAQQesjJh8sSxyUnRopMTkmHevOyS0SN/rlNWOBwJBk82Hf/XwBgnWCwGg3C8yCCAmtq6PXv2xufahSPh9xdvCARBj1dnGHA4ABBMGJloNLAAwHPMpNEZLItBD04OyQCwZuOuu+aoi96D6WVDt2/fvnX73jPH+KArmjNV3+I7rfv6IVDPS8h85IyW7xf0l1Wn09us6XMW/DHz2s/TSU2gZggz8+0Rc2/47I2/jvUFJAAIimTEsPy69lRFkRMsZndLOVXFLbsaOBa6AtLBI6JeRYnngOfhvruvjqU5ZWSkFxUWxL65qqmhUOgkvShPEYQwIIQQ/pkIzl8LoZSA7i7qo1HGGNvtttiyOiJGdpVXxFKMI2Hxzbc/D0WAUqAAKUkwdJANAGw2U+nowtEjCqpqKKVkcDbeu3+/AEH9KgdqOqdOKUUI2i6rSXSYnniocdmt/bU5EaPfxU6n9EV4fcBZXl/o359suee60a9/WMFgUFQiyTQj3TZwQLItMXf0qBKGwWazyWG3AwJFUU8Y7ArQM+3GoJTG595RSsL+ZjHcfmxyGiWaSqh6fCucKAgBIIQQnLK75KToAgfw82KHMKvXZYo/iBFrTS46NukJxYf+6xxvw/XCYDDo12052qqqxOEwr9+4oaqy0uMNd3rCdhtDCeU49rJzihyp2WYTf+tflq7b1usa/UW/i13p65D0AQBAcXG23w9vvf64x+PVtGgGHhw7fBj3BHMQTVVkf/SRUOJxVcZO6zvJ6AFjXc/1C7Sb3m/8DuJ/ZgZjksmWo79mGJ7l4wJdKZBjawtB3M+WYRiE0HOLXvL5A4kO+56qeosZ+jxP7Hj6Xeyml8CP25ZK7e2dnV6AnkwLzPD6YxZD7ZomAiCgxN95SOvOx0EI/9o0x15gjOOVBEIgibIoS8f3jtIICYXCQb0lfF9DKVjMJo5nTYaeCNYYvMAbDb0VXvzP8tdCqUa0nlmCYXlrUhEAIEBGSzrCGCCaqh07BwA4jpMkOTkp8Z333l+7bnN/S17/ip2lCbbVPpiYmMJwvH4jv+ew/lbY36wqIYBokYC4D50qGOP4xqaaRrq6fLGlC6U0FA7HeprrxzDD4H4uOvFrIYT0KjqBECQ67Me2FjcbDMcksMUStn8Vmirq0z0nWI2WdKCUNziMFielFBBoSgQAWJa98pp7a1+AmrLeH+9D+lHs+CBcs8By09WTGMwh/OvKQQDo+XkAAIqiujuiVd7DkYjWvZOI8Qksnv9P0DSiix1CYDIZ9XGgAFnp0fx9Qn71nE40Wa80ZUlIu+dP76/Y3PuEPqQfHShnXAtDCtNZ9mSt3/Q5Vx8hBNDR6RGlaIqeLCuxgYuJFwLEsr8gwQhBnPUShVJKCFC9U/JxeLrCra5ge0cw2N0bt29hMLbbjXarITXZkuQ4sVsHRTnmIKUnXjrEq3mpu+cbAByuqdNfsCwbOyczIx0AgNLYDU54zVgZGjHSdfHskSugx5juc/pR7LAbzr2lOJYY3DOolMqKAgCiJHd0egB6yibEj/oJHgIAAMQXNAEAopGwqChKzzzV0uY7Ut8ZCB4jQIQQQiA62ggiyUCOlV6EAGGAaBJZ39MsRaAdaJxrAgGwYeC7O/thrC9rev5kSiHDmTCk0GkUemxco4E1GrhjpIZCrGZK7PdJ9D8YAADq6hv1F7EhtdusFrMJEOK56JUp7dGOlFKH3WSrB1+ufqDv6Uex41hYs2F3SpJF79xwEnieNQgsQqjN7W9pDegjX7G/xePR9NdmE9Sd2322CJEUODgPyC9c9f9FqG57xeHr3qg7ASlVkHOs7Z/5FcgyIARUg/FjnRaTAAAYw6hhmbqm9wUkhMDb5fN2neCyuqGJEHy0dK8v2l6gX+hH2w4AZpfBgrnFCONoIZNujAaOZTHD4FXralgW2jtDtfUhhEAQQOCh8iYAAMJBzfnxH/o/fh0Fn0dfjHwb/AEABITA5HFpmkaAwtRJ+QhBICj3mnDbO0PffH9458vgGhN/uI/pX7EDgLMmwqC8xEtmF4mSunlHvT73HXX5giEAgMA0qDkvembrhJ5P/R/9QXq3N7jgczBvBU2DwfkJLIM1AmXjc60Jwq7K5vKqoxtfgY5jmvP0Pf0udowEM+4FQxUgBDwHDWfBoUsAAPy5vU78P/7bsBEwuQAAzrwBZAUIAYGDz/vZY6fzP2eprGibBueQAAAAAElFTkSuQmCC"
					), a8u(5, "arena", 6, "iVBORw0KGgoAAAANSUhEUgAAACsAAAAKAQMAAAAXYzUQAAAABlBMVEUAAAD///+l2Z/dAAAARklEQVQI12OwqbdXOHyAoabe3uD4AYaURAOLYw4gygZE1dvpAKl/FXZq/g8Y/tUYGAOpY3kGxj4JDMfS7Q3PAKlke4MzCQCHpxoxsfTs8gAAAABJRU5ErkJggg=="),
				a8u(6, "territorial.io", 6,
					"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phjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAA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jz//+c+xZMmS+PWvfx3Lly9PnQXUssWLF8c3vvGN1BmZM3To0Jg1a1bqDBJp3rx5LF++PHbcccfUKZm2dOnS+PrXv546AwAAAAAAAAAAAACAWlYvdQAAAAAAAAAAAAAAAGxLRUVFcfzxx8fhhx8eBxxwQLRv3z6aNm2aOiuv7bDDDrHffvvFfvvtFyeddFJcddVVsWrVqnjppZdi8eLFcd9998Wrr76aOhMA8t7IkSON9uSAAw44II455piYP39+6hQAAAAAAAAAAAAAAGqR4R4AAAAAAAAAAAAAAPJe7969o0+fPtG9e/fo1KlTNGrUKHVSnVZQUBB77rln7LnnntG3b9+49NJL469//Ws899xz8cQTT8Ttt98eH330UepMAMg7/fv3T53APw0ZMsRwDwAAAAAAAAAAAABAHWe4BwAAAAAAAAAAAACAvNOyZcs49dRT49BDD41u3bpF8+bNUydlWkFBQbRp0ybatGkTJ554Ylx77bXxwgsvxJNPPhn33HNPLF26NHUiAOS83r17x9577506g3864ogjon79+rFhw4bUKQAAAAAAAAAAAAAA1BLDPQAAAAAAAAAAAAAA5IX9998/TjnllDj88MNj//33j3r1XBKfq0pKSuKggw6Kgw46KC688MJYtmxZPPnkk3HXXXfFU089lToPAHLSwIEDUyfwb5o2bRpnn312zJw5M3UKAAAAAAAAAAAAAAC1xKcUAQAAAAAAAAAAAADIWd26dYvBgwfHEUccER06dIiCgoLUSVRTQUFBdOjQITp06BDnnHNOrFixIhYsWBCzZ8+ORYsWpc4DgJzRs2fP1Al8QZ8+fQz3AAAAAAAAAAAAAADUYYZ7AAAAAAAAAAAAAADIKR06dIgzzzwzevfuHZ06dTLWU8e0adMmvve978XZZ58dr776asydOzdmzpwZK1asSJ0GAMkccsghsccee6TO4AsOOuig1AkAAAAAAAAAAAAAANSiwtQBAAAAAAAAAAAAAABQv379GD58eCxcuDD++Mc/xsiRI6Nz585Ge+qwgoKC2GeffWLEiBHx5z//OZ588sk477zzoqioKHUaAGx3/fr1S53AlygtLY3evXunzgAAAAAAAAAAAAAAoJbUSx0AAAAAAAAAsK3df//9sdtuu6XOAHLE9OnT44477kidwSaMGzfOgZR1wG233RYzZ85MnUEeuuWWW2KfffZJnUEVvffee16zAagVRx55ZJx99tlx1FFHRdOmTVPnkEj9+vWjV69e0atXrxg/fnw8/PDDMW3atHj++edTpwHAdtG9e/fUCWzC0UcfHfPmzUudAQAAAAAAAAAAAABALTDcAwAAAAAAANQ5Xbp0iT333DN1BpAjdt9999QJbMacOXOivLw8iouLU6ewFZo2bWq4h2rr2bNnDBw4MIqKilKnUEVXXHFF6gQA6pD69evHiBEj4uSTT479998/dQ45plmzZnHaaafFwIEDY8mSJTF79uy48cYbU2cBQK0ybpy7unbtmjoBAAAAAAAAAAAAAIBaUpg6AAAAAAAAAACA7HrxxRfjvvvuS53BVmrXrl2cddZZqTPIM6NGjTLak0dWrVoV48aNS50BQB3QsWPHuOWWW+Lvf/97TJ482WgPm1VUVBQHHXRQXH/99bFy5cqYMmVKlJaWps4CgG1u//33j2bNmqXOYBP23nvv1AkAAAAAAAAAAAAAANQSwz0AAAAAAAAAACQ1bty4WLduXeoMttK5556bOoE80rlz5zjmmGNSZ1AN11xzTVRUVKTOACCPHXPMMfHQQw/F888/H6eddprxFaptjz32iAsvvDBWrFgRs2fPjs6dO6dOAoBt5rDDDkudwGbstttu0bp169QZAAAAAAAAAAAAAADUAsM9AAAAAAAAAAAktXLlyrjjjjtSZ7CVunbtGv3790+dQZ4oKyuLBg0apM6gil588cWYNm1a6gwA8tSgQYNi8eLF8cgjj8Q3v/lN7wHYajvuuGMMGjQolixZEg8++GD07NkzdRIAbLX27dunTmALevTokToBAAAAAAAAAAAAAIBaYLgHAAAAAAAAAIDkxo4dG++//37qDLbSj370o9QJ5IFWrVrFcccdlzqDKtq4cWNceumlqTMAyEPf+9734oUXXojZs2fHN77xjSgoKEidRB1TXFwcxx57bDzxxBMxb968OPLII1MnAUCNfe1rX0udwBZ06tQpdQIAAAAAAAAAAAAAALXAcA8AAAAAAAAAAMmtWbMmbrrpptQZbKVevXpFr169UmeQ48rLy6NRo0apM6iixx9/PO6///7UGQDkkWHDhsUrr7wSN9xwQ+y3336pc8iAoqKiOProo2PevHmxYMECAz4A5KUWLVqkTmALvvrVr6ZOAAAAAAAAAAAAAACgFhju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FpLMnDkzmjZtmp1RdEpLS7MTAAAAAAAAAFhKDbIDAAAAAAAAAACgEAwdOjR23333qKioyE5hMcrKyuKUU06JX/ziF9kpNebggw822lPH3HDDDUZ7AOqhX//610Z7CtT8+fPj5ptvjr59+0ZVVVV2TkEZPnx4PPvss3HddddFx44ds3NYRj169Iju3bvH2LFjs1MAAChSO+ywQ/Ts2TM23njjWGeddWLNNdes80MFy2qVVVaJVVZZJbp06fKtf//ZZ5/FO++8E//6179izJgx8fjjj8f777+fVAnA8tS2bds46KCDomfPnrHRRhtFu3btspOW2P//eLbRRhvFvvvuGxdddFF88sknMW7cuBg7dmzcc889fucEAAAAAAAAAECdVBIR87MjAAAAAAAAAGrSv//971hzzTWzM4raBx98EGuvvXZ2BkCtu+yyy+K4447LzqAa5s6dG926dYu33347O6VGjB49Onr06JGdwQIfffRRdOrUKebNm5edAsASeu+99/w8W4Bmz54dQ4YMiUsvvTQ7paCVl5fHyJEjY/vtt89OYRndcMMNcdRRR2VnUEe89NJLsemmm2ZnFJ1+/frFddddl50BAMtdw4YNY++9946tt946unfvHuutt140b948O6vOmj9/fnz00Ucxbty4GDNmTDz22GPx4osvZmcBsJS6d+8eBx98cGy11VbRtWvXaNCgQXbScjdhwoR44YUX4vHHH4877rjD86mwnMycOTOaNm2anVF0SktLsxMAAAAAAAAAWEqGewAAAAAAAICCY7gnn+EeoFiVl5fHW2+9Fa1bt85OoRpuvvnmOPzww7Mzltmuu+4af/rTn7IzWMivf/3ruOSSS7IzAFhCBx98cNx8883ZGdSwKVOmxGGHHRaPPPJIdkrRuPTSS6N///5RVlaWncJS+vjjj2ONNdbIzqCOMNyTw3APAIWsd+/esdtuu8UWW2wRG2ywQTRp0iQ7qV77z3/+E6+99lq88MILMXLkyHj33XezkwBYhE6dOsWRRx4ZO+20U2ywwQZRUlKSnZTmyy+/jOeffz7uvffeuOmmm6Kqqio7CQqG4Z4chnsAAAAAAAAA6i/DPQAAAAAAAEDBMdyTz3APUMzOOuusGDJkSHYG1fDll19Gp06dYsqUKdkpy+Svf/1rbL311tkZLPDGG29Et27dsjMAWApPPvlkbLPN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ZwAAUIPatm0bd955Zzz22GPxk5/8JDuHeqisrCz22GOPGDNmTFx22WXRsGHD7CSAGtOtW7d45ZVXYu+9985OYRmsscYacffdd8dZZ52VnQIAAAAAAAAAQB1nuAcAAAAAAAAAAGrBxIkT45ZbbsnOoBp23nnn6NSpU3bG/zjyyCOzE1hg1KhR8dRTT2VnALAMDj744OwElkJlZWWccsopMWHChOwUatCbb74ZJ510UnzzzTfZKSzCLrvskp0AAEANOfPMM+ONN96IfffdNxo0aJCdQz3XvHnzOO644+Ktt96KQw45JDsHYJn16dMn/vKXv8QGG2yQnUINaNSoUQwZMiQefPBBI3MAAAAAAAAAAPwgwz0AAAAAAAAAAFBLBg0aFJ999ll2BouxwgorxODBg7MzvuWggw6KLl26ZGcQEbNnz46BAwdmZwCwjHr37p2dwFK46aab4tZbb83OYDm47bbb4qabbsrOYBG23HLL7AQAAJZR796947XXXoszzjgjVl555ewcCsxaa60VN910Uzz22GOx7rrrZucALJWBAwfGjTfeGKusskp2CjXs5z//ebz88sseowAAAAAAAAAA+F6GewAAAAAAAAAAoJbMmDEjbrjhhuwMqmHPPfeMli1bZmf8V//+/bMTWOC2226LN998MzsDgGWw0047xRprrJGdwRJ6/fXX4+ijj87OYDn61a9+FePHj8/O4Ad07NjRwaYAAPVU48aN4/e//338+c9/jm7dumXnUOC22267GD16dAwePDg7BWCJXHvttTFixIho1KhRdgrLSbdu3eKvf/1rbLXVVtkpAAAAAAAAAADUMYZ7AAAAAAAAAACgFg0dOjQmTpyYncFilJeX15lD5XbZZZfYdNNNszOIiM8++ywGDBiQnQHAMvrFL36RncASmjNnTvTv3z+qqqqyU1iOKisr45hjjok5c+Zkp/A9SkpKYu+9987OAABgCe2+++4xbty4OPzww6Nhw4bZORSJlVZaKc4+++x48cUXo2vXrtk5AItUWloa999/fxx55JFRUlKSncNy1rZt23jggQdin332yU4BAAAAAAAAAKAOMdwDAAAAAAAAAAC1qLKyMq644orsDKph//33j8aNG2dnxIknnuiQqDrimmuuienTp2dnALCMevXqlZ3AErrmmmvihRdeyM6gFjz77LNxzTXXZGfwA7baaqvsBAAAqqlhw4bxhz/8Ie6+++7o0KFDdg5FarPNNovnnnsuBgwYkJ0C8L0aNmwYjz32WOy+++7ZKdSiioqKuOmmm+Lwww/PTgEAAAAAAAAAoI4w3AMAAAAAAAAAALXsN7/5Tbz99tvZGSxGq1at4vTTT09t6NmzZ2y99dapDfyf999/P4YPH56dAcAy6tWrV6y99trZGSyBf/7zn3HqqadmZ1CLTj311HjrrbeyM/geG2+8cXYCAADVsNVWW8U//vGPOOyww6JBgwbZORS58vLyOO+88+Lxxx+Ptm3bZucA/Ffjxo3j2Wefjd69e2enkKBJkyZxzTXXRL9+/bJTAAAAAAAAAACoAwz3AAAAAAAAAABAgosuuig7gWo49NBDo7Q072VWp5xySpSVlaXdn//nggsuiKqqquwMAJbRfvvtl53AEvj666/j5JNP9hhcZKqqquLUU0+NysrK7BS+o2XLlrHVVltlZwAAsAjDhw+PRx55JNZbb73sFPiWbbfdNl5++eXYe++9s1MAomHDhvHoo4/GZpttlp1CokaNGsWll15qvAcAAAAAAAAAAMM9AAAAAAAAAACQ4YYbboixY8dmZ7AYa665Zhx33HEp9+7SpUvssMMOKffm28aMGRPXX399dgYANaBnz57ZCSyBW2+9NZ544onsDBKMGjUq7r333uwMvsdOO+2UnQAAwPdo2bJlPPbYYzF06NBo0qRJdg58r7Zt28btt98el156aXYKUMQaNmwYTzzxhHFiIsJ4DwAAAAAAAAAA/8dwDwAAAAAAAAAAJDn33HNj/vz52RksRt++fVPue/rpp8cKK6yQcm/+n6qqqhg2bFh2BgA1oHPnzvGjH/0oO4Nq+vTTT+OUU07JziDRKaecEtOnT8/O4Dt+/OMfZycAAPAd2223Xbz88sux3XbbZafAYjVo0CCOP/74eOqpp6Jt27bZOUCRKS0tjYceeshoD9/SqFGjuPjii+Oggw7KTgEAAAAAAAAAIInhHgAAAAAAAAAASHLffffFc889l53BYmywwQa1fkhPu3btYrfddqvVe/L9HnvssXjkkUeyMwCoAQcccECUlJRkZ1BNF198sdGWIjdx4sS49tprszP4jq5du2YnAACwkFNPPTUefPDBWHPNNbNTYIn87Gc/ixdffDF69+6dnQIUkVtuuSW233777AzqoCZNmsRVV10VO+64Y3YKAAAAAAAAAAAJDPcAAAAAAAAAAECis88+OyorK7MzWIz+/fvX6v0GDx4czZs3r9V78r/mzJkTQ4YMyc4AoIb06tUrO4Fqev311+Oiiy7KzqAOGDJkSLz//vvZGSykdevWsckmm2RnAAAUvdLS0rjpppvi/PPPj8aNG2fnwFJZY4014v77749+/fplpwBF4LLLLos+ffpkZ1CHrbjiinHTTTfFxhtvnJ0CAAAAAAAAAEAtM9wDAAAAAAAAAACJ/vKXv8Sjjz6ancFibLrpprHTTjvVyr3Ky8tjn332qZV7sWgjR46M1157LTsDgBpQXl7usL16orKy0nAe/1VZWRlXXHFFdgbfsd1222UnAAAUtTZt2sTzzz8fhxxySJSUlGTnwDJp3rx5XHHFFXHJJZdkpwAF7Pjjj49jjz02O4N6oFWrVjFy5Mho2bJldgoAAAAAAAAAALXIcA8AAAAAAAAAACQbPnx4zJ07NzuDRSgpKYkTTzyxVu41aNCgWGWVVWrlXvywzz//PE4//fTsDABqyAEHHBCNGzfOzqAannjiiXj44YezM6hDLrvsshg/fnx2Bgv58Y9/nJ0AAFC0Ntlkk3j++edj8803z06BGlNWVhYnnHBC3HvvvVFa6q3vQM3aZZdd4rzzzjN2R7V17NjRYxIAAAAAAAAAQJHxShEAAAAAAAAAAEg2ZsyYuP/++7MzWIxtttkmevTosVzvUVZWFgcddNByvQfVc8MNN8SkSZOyMwCoIdtuu212AtUwb968OPvss7MzqIMuv/zy7AQW0qVLl+wEAICitMcee8QjjzwSHTp0yE6B5WLPPfeM5557Llq0aJGdAhSITp06xQ033BBNmjTJTqGe6dmzZ1x77bXZGQAAAAAAAAAA1BLDPQAAAAAAAAAAUAecccYZMXPmzOwMFqGsrCwGDBiwXO8xYMCAaNu27XK9B4v34YcfxqBBg7IzAKhBm2yySXYC1fDII4/Eiy++mJ1BHXTdddfFuHHjsjNYoEOHDtGsWbPsDACAotK3b9+47bbbDJpQ8LbYYot45plnDFQBy6y0tDRuu+22aN26dXYK9dQvf/nLOOaYY7IzAAAAAAAAAACoBYZ7AAAAAAAAAACgDnj33Xfj9ttvz85gMXbeeefo1KnTcrv+4YcfvtyuTfVdcsklUVlZmZ0BQA3p0aNHtG/fPjuDxZg7d24MGTIkO4M67IYbbshOYIEGDRrELrvskp0BAFA0Bg4cGFdffXU0adIkOwVqRefOnePJJ5+Mrl27ZqcA9dgNN9wQPXr0yM6gHispKYlzzz03Nt544+wUAAAAAAAAAACWM8M9AAAAAAAAAABQRwwdOjSmTZuWncEiNG7cOAYNGrRcrt2/f//o2LHjcrk21ff666/HZZddlp0BQA36xS9+kZ1ANTzwwAMxbty47AzqsCuvvDI++OCD7AwW6N69e3YCAEBROP/882PEiBHRoEGD7BSoVWuttVY89thjscUWW2SnAPXQYYcdFoccckh2BgWgvLw8/vCHP0RpqaNZAAAAAAAAAAAKmVeHAAAAAAAAAABAHTFlypT4/e9/n53BYuy1117RsmXLGr/ukUceWePXZMnMnz8/zj777OwMAGrYlltumZ3AYnz99ddxzjnnZGdQx1VVVcUf//jH7AwW6NKlS3YCAEDBu+SSS+K0006LkpKS7BRI0aZNm7jvvvuM9wBLpEOHDnHhhRcaWqHGdOvWLa688srsDAAAAAAAAAAAliOvNgIAAAAAAAAAgDpk2LBh8cknn2RnsAjl5eUxaNCgGr1mnz59YsMNN6zRa7Lk/vrXv8Z9992XnQFADSotLY1u3bplZ7AYjz/+eIwbNy47g3rgwgsvjOnTp2dnEBHrrLNOdgIAQEG74YYb4oQTTsjOgHStW7eO++67L7bddtvsFKCeuPHGG2PVVVfNzqDA9O3bN/baa6/sDAAAAAAAAAAAlhPDPQAAAAAAAAAAUIfMmTMnrrrqquwMFqNPnz7RuHHjGrvescceW2PXYunMmzcvzjjjjOwMAGrYbrvtFiuuuGJ2BotQVVUVv/nNb7IzqCdmzZoVDz/8cHYGEbHmmmtGWVlZdgYAQEG64YYb4pe//GV2BtQZrVu3jttvvz222GKL7BSgjhs8eHD89Kc/zc6gADVo0CAuvfTSqKioyE4BAAAAAAAAAGA5MNwDAAAAAAAAAAB1zAUXXBDvvfdedgaL0KpVqxgwYECNXGvHHXeMzTffvEauxdK7995748UXX8zOAKCGbbfddtkJLMbzzz8fzz33XHYG9ciVV14ZVVVV2RlFr1GjRrHNNttkZwAAFJxrr73WaA98j1VXXTXuu+++6N69e3YKUEd17tw5TjnllOwMCli7du3i8ssvz84AAAAAAAAAAGA5MNwDAAAAAAAAAAB1TFVVVVx88cXZGSzGoYceWiPXOfnkk6OkpKRGrsXSmTFjRgwaNCg7A4DloEePHtkJLIaDDllSo0ePjldeeSU7g4jYZJNNshMAAArKJZdcEkceeWR2BtRZrVu3jvvvvz86d+6cnQLUQVdffXWstNJK2RkUuP333z922WWX7AwAAAAAAAAAAGqY4R4AAAAAAAAAAKiDfve738Xrr7+encEirLXWWnH88ccv0zW22GKL6NWrVw0VsbRuvvnmmDBhQnYGADWsYcOGscEGG2RnsAj//Oc/47777svOoB669957sxOIiB/96EfZCQAABeOss86KE044ITsD6rw11lgj7r///mjTpk12ClCHHHvssbHVVltlZ1AEGjRoEBdddFGUljqqBQAAAAAAAACgkHg1CAAAAAAAAAAA1FHnn39+dgKL0bdv32X6+lNPPTXKyspqqIal8Z///CcGDBiQnQHAcrD33ntHkyZNsjNYhLvuuis7gXrqmmuuiRkzZmRnFL2OHTtmJwAAFIRTTjklBg4cmJ0B9cY666wTo0aNisaNG2enAHVARUVFDBo0KDuDIrLeeuvFRRddlJ0BAAAAAAAAAEANMtwDAAAAAAAAAAB11F133RUvvPBCdgaL0KVLlzjwwAOX6mvXX3/92GmnnWq4iCV1+eWXx5w5c7IzAFgOevbsmZ3AIkyfPj0uueSS7AzqqVmzZsUzzzyTnVH0Vl999ewEAIB677DDDosRI0YYeIcl1L179/jTn/6UnQHUAZdeemm0adMmO4Mic+SRR8a6666bnQEAAAAAAAAAQA0x3AMAAAAAAAAAAHXY8OHDo6qqKjuDRejfv/9Sfd3AgQNjhRVWqOEalsSbb74ZF1xwQXYGAMvJxhtvnJ3AIvz5z3+OWbNmZWdQj915553ZCUVvtdVWc8A8AMAy2GGHHeLyyy+PRo0aZadAvbTtttvG9ddfn50BJNpss81i//33z86gCDVr1szzzAAAAAAAAAAABcRwDwAAAAAAAAAA1GFPPPFEPPHEE9kZLMJmm20WO+644xJ9Tdu2bWPPPfdcTkVU14gRI7ITAFiOOnfunJ3AD6iqqoqrr746O4N67o477ojPPvssO6OoNWzYMH7yk59kZwAA1Etdu3aNm2++OZo3b56dAvXaEUccEYMHD87OAJKce+65BvBIs+uuu8Z2222XnQEAAAAAAAAAQA0w3AMAAAAAAAAAAHXcGWecEfPmzcvO4AeUlJTESSedtERfM2jQIAcyJnv++efj9ttvz84AYDnZcccdo7y8PDuDHzB27Nh44YUXsjMoAM8991x2QtHr1q1bdgIAQL1TUVERd999d7Rq1So7BQrC0KFDY++9987OAGrZvvvuG1tvvXV2BkWsrKwszjrrrOwMAAAAAAAAAABqgOEeAAAAAAAAAACo41555ZV48MEHszNYhG222SZ69OhRrc8tLy+P/fbbbzkXsSiVlZVxxhlnZGcAsBz16tUrO4FFeOCBB7ITKBCjRo3KTih6HTt2zE4AAKh37r333lh33XWzM6BgNGrUKK6++uro2rVrdgpQi04//fQoKSnJzqDIbbbZZtG3b9/sDAAAAAAAAAAAlpHhHgAAAAAAAAAAqAcGDRoUs2fPzs7gB5SVlcWAAQOq9bkDBw6MFi1aLOciFuVPf/pTPP3009kZACxH3bp1y07gB8yePTuuvvrq7AwKxB//+Mf44osvsjOKWrt27bITAADqlWuvvdbYLCwHq666atx+++3RuHHj7BSgFhx55JGx0UYbZWdARESceOKJ2QkAAAAAAAAAACwjwz0AAAAAAAAAAFAPvPvuu3HnnXdmZ7AIO++8c3Tq1GmRn1NWVhYHHXRQLRXxfWbPnh0DBw7MzgBgOevcuXN2Aj/g2WefjenTp2dnUCAqKytj7Nix2RlFbbXVVstOAACoN4499tjo27dvdgYUrA022CBuvfXW7AygFpxwwgnZCfBfnTt3jqOOOio7AwAAAAAAAACAZWC4BwAAAAAAAAAA6omBAwc65LwOa9y4cQwaNGiRn3PqqafG6quvXktFfJ9bb7013n777ewMAJaj9u3be7ytw0aOHJmdQIF57rnnshOKmuEeAIDq+elPfxrnnntulJSUZKdAQdtrr73itNNOy84AlqOjjjrKcDt1zvHHH5+dAAAAAAAAAADAMjDcAwAAAAAAAAAA9cSUKVPixhtvzM5gEfbcc89o2bLlD/73ww8/vBZr+K4pU6Y4sA+gCOy6664OQq6jPv300/jjH/+YnUGBueeee2L+/PnZGUVr1VVXzU4AAKjzWrRoETfeeGM0b948OwWKwhlnnBFbb711dgawnPzqV7/KToD/0blz5zjqqKOyMwAAAAAAAAAAWEqGewAAAAAAAAAAoB4ZPHhwfPrpp9kZ/ICVVlopBg4c+L3/7eijj4511lmnlotY2NVXXx0zZszIzgBgOdtkk02yE/gBTz/9dFRVVWVnUGDGjRsX77//fnZG0WrevPkix0sBAIi4+eabo0OHDtkZUDSaNm0av/vd76Jx48bZKUAN69OnT3Tr1i07A77Xsccem50AAAAAAAAAAMBSMtwDAAAAAAAAAAD1yJw5c+Kaa67JzmAR+vTpE+uvv3506tTpWx/9+vXLTitq7733Xpx99tnZGQDUgg022CA7gR/wwAMPZCdQoP7xj39kJxS1jTbaKDsBAKDOGjx4cOy8887ZGVB01l133fjDH/6QnQHUMMMo1GVdunSJvffeOzsDAAAAAAAAAIClYLgHAAAAAAAAAADqmREjRsSECROyM/gBrVu3jvHjx8fbb7/9rY9u3bplpxW1888/P6qqqrIzAKgFHTp0yE7ge3z22Wdx1113ZWdQoEaPHp2dUNTWXnvt7AQAgDqpV69eMWjQoOwMKFr77bdfHHHEEdkZQA3p2bNnbLbZZtkZsEj9+vXLTgAAAAAAAAAAYCkY7gEAAAAAAAAAgHqmqqoqLrnkkuwMqDdefvnl+P3vf5+dAUAt6Nq1a7Ro0SI7g+/x3HPPZSdQwEaNGpWdUNRWX3317AQAgDqnYcOGcc0110STJk2yU6BolZSUxLnnnhvt2rXLTgFqwHHHHRelpY7HoG7baqutYuONN87OAAAAAAAAAABgCXllEgAAAAAAAAAA1ENXXHFF/POf/8zOgDqvqqoqzjzzzOwMAGrJNttsk53AD3j44YezEyhg48ePj4kTJ2ZnFK02bdpkJwAA1DnXX399rLvuutkZUPRatmwZ1113XXYGsIzatGkTO++8c3YGLFaDBg3i5JNPzs4AAAAAAAAAAGAJGe4BAAAAAAAAAIB66oILLshOgDrv0UcfjUcffTQ7A4BastFGG2Un8D2mT58eN998c3YGBe6tt97KTihaK6+8cnYCAECdcsABB8SBBx6YnQEssOOOO8Zxxx2XnQEsgxNOOCGaNWuWnQHV8vOf/zzKy8uzMwAAAAAAAAAAWAKGewAAAAAAAAAAoJ669dZbY/To0dkZUGfNmTMnBg8enJ0BQC1ab731shP4Hq+++mpUVlZmZ1Dgxo8fn51QtAz3AAD8Py1atIgLL7wwysrKslOAhQwdOjTatWuXnQEspT322CM7AaqtvLw8TjjhhOwMAAAAAAAAAACWgOEeAAAAAAAAAACox0aMGBFVVVXZGVAn3XXXXfH6669nZwBQizp06JCdwPd4+umnsxMoAmPGjMlOKFqGewAA/p9rr7022rZtm50BfMeqq64aV155ZXYGsBR22mkng+3UO3vuuWd2AgAAAAAAAAAAS8BwDwAAAAAAAAAA1GMPP/xwPPXUU9kZUOdMmzYtTjvttOwMAGpRu3btolWrVtkZfMf8+fPjrrvuys6gCDz66KNGTZOUl5dnJwAA1Al9+vSJPfbYIzsD+AE///nP48ADD8zOAJbQEUcckZ0AS6xbt26x5ZZbZmcAAAAAAAAAAFBNhnsAAAAAAAAAAKCeGz58eMybNy87A+qU66+/PqZMmZKdAUAt2mabbbIT+B5vv/12vPvuu9kZFIEpU6bEpEmTsjOKUvPmzbMTAADSNWvWLC644IIoLfW2XairSkpK4uyzz46GDRtmpwDVVFZWFr169crOgCVWUlISRx55ZHYGAAAAAAAAAADV5BXAAAAAAAAAAABQzz3//PMxatSo7AyoMz788MMYMmRIdgYAtWzDDTfMTuB7vPTSS9kJFJGPPvooO6EoNW3aNDsBACDdFVdcEe3atcvOABZjrbXWiosuuig7A6imvn37xsorr5ydAUtlp512MuoIAAAAAAAAAFBPeJUHAAAAAAAAAAAUgGHDhsXs2bOzM6BOuOiii6KysjI7A4Batu6662Yn8D0ef/zx7ASKyIQJE7ITilKzZs2yEwAAUvXu3TsOPPDA7Aygmo444ojYeOONszOAathzzz2zE2CptWrVKg4//PDsDAAAAAAAAAAAqsFwDwAAAAAAAAAAFIBx48bFPffck50B6f7+97/HlVdemZ0BQIIOHTpkJ/Ads2bNipEjR2ZnUETee++97ISiVFZWFm3atMnOAABIc9FFF0XDhg2zM4Bqatq0aVx44YXZGcB3XHfddTF58uRvffTu3Ts7C5bJ7rvvnp0AAAAAAAAAAEA1GO4BAAAAAAAAAIACMWTIkPjiiy+yMyDN/Pnz4+yzz87OACBJ+/btsxP4jn/9619RWVmZnUEReeONN7ITila7du2yEwAAUpx++unRrVu37AxgCW2zzTaxzz77ZGcAC6moqIhVV131Wx9lZWXZWbBMevbs6f9jAAAAAAAAAIB6wHAPAAAAAAAAAAAUiIkTJ8Yf//jH7AxI85e//CXuv//+7AwAEnTt2jWaN2+encF3vPbaa9kJFJl//vOf2QlFq2nTptkJAAC1rmXLlnHSSSdlZwBLoaSkJIYNG5adAUCBq6ioiMMOOyw7AwAAAAAAAACAxTDcAwAAAAAAAAAABWTo0KExefLk7AyodV9//XUMHTo0OwOAJJtttll2At/j6aefzk6gyIwbNy7mzp2bnVGUWrVqlZ0AAFDrLr744mjZsmV2BrCUOnfuHAMGDMjOAKDA7b777tkJAAAAAAAAAAAshuEeAAAAAAAAAAAoIDNmzIjrr78+OwNq3b333hujR4/OzgAgyfrrr5+dwHfMnTs37r///uwMitCUKVOyE4pS48aNsxMAAGrVZpttFvvuu292BrCMjj32WD/PALBc9ezZM8rKyrIzAAAAAAAAAABYBMM9AAAAAAAAAABQYM4888z48MMPszOg1syYMSMGDhyYnQFAoo4dO2Yn8B3/+te/Ys6cOdkZFCHDPTmaNm2anQAAUKvOOeecaNSoUXYGsIxWX331GD58eHYGAAWsoqIi+vTpk50BAAAAAAAAAMAiNMgOAAAAAAAAAAAAalZlZWVcfvnlcdFFF2WnQK248cYbjVUBFLk111wzO4HveP3117MTKFK77LJLNG/ePDuj6EycODE7AQCg1uyzzz7Rq1ev7AyghhxxxBFx0UUXGYIFYLnZYYcd4tZbb83OAAAAAAAAAADgBxjuAQAAAAAAAACAAvTb3/42+vbtG+uvv352CixXn3zySQwcODA7A4Bkq6++enYC3/Hqq69mJ1CkJk2alJ0AAECBGzJkSJSUlGRnADVklVVWiTPPPDP69++fnQJAgdpss82yEwAAAAAAAAAAWITS7AAAAAAAAAAAAGD5+M1vfpOdAMvdpZdeGnPmzMnOACBRs2bNYtVVV83O4Dsef/zx7AQAAIAa169fv+jatWt2BlDD+vTpEy1btszOAKBAdezYMbp06ZKdAQAAAAAAAADADzDcAwAAAAAAAAAABerGG2+MMWPGZGfAcjN+/Pi46KKLsjMASLbllltGSUlJdgYLmTRpUrz99tvZGQAAADXupJNOyk4AloOKioo488wzszMAKFAlJSWx3377ZWcAAAAAAAAAAPADDPcAAAAAAAAAAEABO+ecc2L+/PnZGbBcnHPOOdkJANQBXbt2zU7gO4z2AAAAhWjAgAGxzjrrZGcAy0mfPn2iRYsW2RkAFKiePXtmJwAAAAAAAAAA8AMM9wAAAAAAAAAAQAF78MEH45lnnsnOgBr33HPPxR133JGdAUAd0KFDh+wEvuONN97ITgAAAKhRpaWlcfTRR2dnAMtRRUVFDB48ODsDgAK10UYbZScAAAAAAAAAAPADDPcAAAAAAAAAAECBO/PMM6OysjI7A2rMN998E0OHDs3OAKCOWGONNbIT+I5XXnklOwEAAKBGnXrqqbHWWmtlZwDLWZ8+faJx48bZGQAUoJVWWil23HHH7AwAAAAAAAAAAL6H4R4AAAAAAAAAAChwzz77bPz5z3/OzoAa89BDD8Wzzz6bnQFAHdG2bdvsBBYyf/78ePLJJ7MzAAAAakxpaWkcffTR2RnUgsrKypg+fXr85z//iQ8++OBbH5MmTYovvvgiKisrszNZjlq3bh0DBgzIzgCgQG2zzTbZCQAAAAAAAAAAfI8G2QEAAAAAAAAAAMDyd8YZZ8T2228fK6ywQnYKLJNZs2Y5NA+Ab2ndunV2AguZPHlyfPLJJ9kZAAAANeaEE06ItdZaKzuDGlJZWRkfffRRvPfee/H222/HhAkT4u2334433ngj3n///Wpdo0OHDtG1a9fo1KlTrLXWWrHOOutEhw4don379tGoUaPl/CdgeTv44INj+PDh2RkAFKAePXpkJwAAAAAAAAAA8D0M9wAAAAAAAAAAQBF4/fXX4957740DDjggOwWWyS233BLvvvtudgYAdUjLli2zE1jIhAkTshMAAABq1JFHHpmdwDKYP39+vPvuu/Hyyy/Hc889F/fff39MmTJlma75/vvvf+/IT3l5eey+++7Rs2fP2GKLLeJHP/pRlJWVLdO9qH0dOnSIvn37xg033JCdAkCB2WCDDbITAAAAAAAAAAD4HqXZAQAAAAAAAAAAQO0YNGhQzJw5MzsDltrkyZPj9NNPz84AoA5Zf/31Y4UVVsjOYCHvvfdedgIAAECNOeyww2L99dfPzmApjB8/Pi6++OLYZJNNYr311ouDDz44rrvuumUe7VmUGTNmxC233BJHH310bLjhhtGxY8cYPnx4vPLKK1FZWbnc7kvNO+KII7ITAChAq666amy11VbZGQAAAAAAAAAAfIfhHgAAAAAAAAAAKBIffvhh3HLLLdkZsNSuuuqqmDFjRnYGAHXIhhtumJ3Ad/zrX//KTgAAAKgxv/rVr7ITWAJffvlljBw5Mrbeeuvo0qVLnHrqqfHaa6+l9Xz44YcxfPjw2GyzzaJbt25x/fXXx+TJk9N6qL5NN900tt566+wMAApQr169shMAAAAAAAAAAPgOwz0AAAAAAAAAAFBEBg8eHFOnTs3OgCX2zjvvxDnnnJOdAUAd07Fjx+wEvmPMmDHZCQAAADVixx13jE022SQ7g2qYMmVKXHrppdGhQ4fYf//949lnn81O+h/jx4+Po48+OlZfffUYNGhQTJgwITuJRSgpKYn+/ftnZwBQgLp165adAAAAAAAAAADAdxjuAQAAAAAAAACAIjJ9+vS44YYbsjNgiV1wwQVRVVWVnQFAHbP66qtnJ7CQefPmxV//+tfsDAAAgBpx7LHHRklJSXYGizB9+vS48MILY80114yTTz45pk6dmp20WJWVlXH++edHp06dYvDgwTFp0qTsJH7ADjvsEBUVFdkZABSY9dZbLzsBAAAAAAAAAIDvMNwDAAAAAAAAAABFZsiQITFx4sTsDKi20aNHxx/+8IfsDADqoNatW2cnsJBJkybFvHnzsjMAAACW2brrrhu9e/fOzuAHfPPNN3H77bdHly5d4vTTT485c+ZkJy2xqqqqOO+882L99deP3/3udzF37tzsJL6jefPmceqpp2ZnAFBg1l577SgrK8vOAAAAAAAAAABgIYZ7AAAAAAAAAACgyFRWVsZVV12VnQHVUllZGWeeeWZ2BgB1lOGeuuWTTz7JTgAAAKgRv/71r2OFFVbIzuB7jB8/Pn7+85/HQQcdVBA/h86YMSOOOeaY2G677eK1117LzuE79tprr+wEAApM48aNY+edd87OAAAAAAAAAABgIYZ7AAAAAAAAAACgCF1wwQXxzjvvZGfAYj366KPx2GOPZWcAUEetssoq2Qks5MMPP8xOAAAAWGZlZWWx++67Z2fwHd98801cddVVseGGGxbk74yff/75+PGPfxxXXHFFfPPNN9k5LLDeeuvFTjvtlJ0BQIHZfPPNsxMAAAAAAAAAAFiI4R4AAAAAAAAAAChSF110UXYCLNJXX30VgwYNys4AoA4z3FO3TJgwITsBAABgmR1//PHRqlWr7AwW8sknn8R+++0Xxx13XFRVVWXnLFcnnHBC7LfffjF58uTsFBY44ogjshMAKDAbbLBBdgIAAAAAAAAAAAsx3AMAAAAAAAAAAEXq+uuvj9deey07A37QXXfdFW+88UZ2BgB1WIsWLbITWMg777yTnQAAALDM9t9//+wEFjJmzJjYcsst4/77789OqTX3339/bL311jFu3LjsFCKid+/e0axZs+wMAApIhw4dshMAAAAAAAAAAFhIg+wAAAAAAAAAAAAgz/nnnx933nlnlJSUZKfAt0ybNi0GDBiQnQFAHdapU6do2LBhdgYLGTt2bHYCAADAMtlyyy1jk002yc5ggbvuuisOPPDAqKqqyk6pdW+++WZsuumm8fDDD0evXr2yc4raSiutFP369YuLL744OwWoY6ZNmxZTp06NL774Ij7//PP46quvIiJi5syZ0bx584iIaNSoUZSXl8eKK64YK6+8cqy66qrRuHHjzGzqgDXWWCM7AQAAAAAAAACAhRjuAQAAAAAAAACAInb33XfHscceGz/96U+zU+Bbrr322pgyZUp2BgB12DrrrJOdwELmzJljuAcAAKj3jj76aEP3dcD8+fPjiiuuiBNPPDE7JdWcOXNiu+22i3vvvTd233337JyitsceexjugSJWVVUV77zzTvzrX/+KcePGxauvvhrPPPNMTJ8+famut/7668emm24a3bp1i/XWWy822GCDaN++ve9BishKK60U66+/frz55pvZKQAAAAAAAAAAhOEeAAAAAAAAAAAoemeffXY88sgjUVZWlp0CERExYcKEOOOMM7IzAKjjVl999ewEFvLZZ59lJwAAACyTsrKy2HHHHbMzit78+fPjnHPO8TviBaqqqmLPPfeMe+65J/baa6/snKK16aabRocOHeL999/PTgFqyaxZs+LFF1+Mxx9/PEaOHBkffvhhjV37zTff/J/Blg4dOsTee+8dvXv3jk033TRWWmmlGrsfdVPPnj0N9wAAAAAAAAAA1BGl2QEAAAAAAAAAAECuJ598Mh577LHsDPiviy++OCorK7MzAKjjVltttewEFjJlypTsBAAAgGVy5JFHRsuWLbMziprRnh+27777xiOPPJKdUbQaNmwYRx55ZHYGsJxVVVXFyy+/HKecckq0adMmtt9++7joootqdLTnh7z//vtx4YUXxg477BCtWrWKE044IZ599tn45ptvlvu9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222XnUIttWvXLh588MHo0KFDdgq19Pjjj2cnAADUi2nTpmUnFJX9998/tt566+wMAACARrHddttFeXl5dgYAAAAAAAAAG8BwDwAAAAAAAAAANICKioooLXV7TiGaOXNmjB8/Pjvjcy1evDhuueWW7AxqoUWLFjFixIjsDAA20NKlS2Py5MnZGWykr33ta/Hggw86DK0JKC8vj4cffji6dOmSnUItrVu3Lm677bbsDACAenHffffF2rVrszOKRuvWreP000/PzgAAAGgUpaWl8b3vfS87AwAAAAAAAIAN4GQQAAAAAAAAAACoZz/60Y9iv/32y86gBmPHjs1OqJUhQ4bEwoULszOohQMOOCAOP/zw7AwANtCtt96anUA96Nq1a/zhD3+IFi1aZKdQgxYtWsRDDz0UXbt2zU6hDl5++eWYNWtWdgYAQL1YunRpvPHGG9kZReWYY47JTgAAAGg03/nOd7ITAAAAAAAAANgAhnsAAAAAAAAAAKCeDRo0KEpKSrIzWI9nnnkm7rjjjuyMWlmxYkXceOON2RnUQklJSQwePDg7A4ANdOedd8bbb7+dnUE9+M53vhOPPfaY8Z4CVF5eHk8++WR07949O4U6euKJJ7ITAADq1QsvvJCdUFR22WUX4z0AAEDR6Nq1a3YCAAAAAAAAABvAcA8AAAAAAAAAANSj448/3iEMBWrdunUxatSo7Iw6qaioiHfffTc7g1rYe++945e//GV2BgAb6IEHHshOoJ706NHDeE+Badu2bUyaNCm6deuWnUIdrVu3Lm6++ebsDACAevXMM89kJxSdU089NTsBAACgUXTp0iVKSx3nBAAAAAAAANDUbJIdAAAAAAAAAAAAzck555yTnUANpkyZEg899FB2Rp2sWbMmxo8fH0OHDs1OoRbOOuusuP7666O6ujo7BYA6uuyyy+LUU0+NTTfdNDuFetCjR4+YPHly9OrVK5YtW5adU9R23nnneOCBB2L33XfPTmEDvPTSS/Hcc89lZwAA1Kt77rknxo4d6yDlRvSd73wnunfvHlOnTs1O4TO23nrrOPnkk7Mzmp2VK1fGFVdckZ0BAECCzTffPA4//PC49957s1MAAAAAAAAAqAPDPQAAAAAAAAAAUE/69esXu+22W3YG61FdXR2jRo3KztggI0eOjBNPPDE6duyYncIX6NSpUwwePDhGjBiR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qsrOaHSVlZWxZs2a7AxqoW3btlFZWZmdAUAdDR8+PN57773sDApIaWlpdO3aNSorK+Ott96K6dOnx4UXXhh77bVXdlqNysrK4rjjjosbb7wxXn755fjrX/8a/fr1i1133TVKSkqy80h26623ZicAAKS67bbbshOIiK222iruueee6Nq1a3ZKs3DsscfGhRde6Hu+RvLcc89lJwAA/JPhnsK3+eabx+WXXx4PPPBAdOjQITsHAAAAAAAAoOgZ7gEAAAAAAAAAgFqqqKiI0lK33BSiN998My666KLsjBTTpk2LiRMnZmdQS0cffXR84xvfyM4AoA5WrVoVEyZMyM6gQLVo0SK6du0aZ511Vjz33HMxd+7ceOihh2LYsGHRrVu3tK527dpF796947rrrou//OUv8cEHH8Qtt9wSJ5xwQuyyyy4ObuaflixZEqNHj87OAABI9cADD8Tbb7+dnUFEbLvttnHPPff4GepGOvzww+O3v/1tbLrpptkpReOJJ57ITgAA+Kfly5dnJ1BLhx56aDz//PMxZsyYaNWqVXYOAAAAAAAAQNHaJDsAAAAAAAAAAACagh/96Eex3377ZWdQgyuuuCKqq6uzM9KMGDEivv/970fLli2zU/gCrVq1isrKyjj00EOzUwCog/PPPz+OPfbY2HbbbbNTKGAlJSXRoUOH6NChQxx88MFRUVERS5YsiXfeeSfmzp0br732WsyZMydmzJgRL7zwQr18/dqlS5fYbbfdolOnTrHrrrvGV7/61fjKV74S22+/fZSVldXDR0Vzd8cdd8SqVauyMwAA0j366KNxyimnZGcQETvttFP86U9/ih//+McxderU7Jwm57jjjourr746Nt988+yUorFy5UqjzwBAQVm9enV2AnWw5ZZbxjnnnBM/+9nP4vbbb4+xY8fG4sWLs7MAAAAAAAAAiorhHgAAAAAAAAAAqIVBgwZFSUlJdgbrMXv27Bg3blx2RqoZM2bEgw8+GD/+8Y+zU6iFH/zgB9GzZ8+YNGlSdgoAtbRq1aq48cYb45xzzslOoYnZaqutYquttopvfvOb//LyqqqqWLZsWSxZsiSWLl0aH374YVRVVcXHH38ca9eujY8//jgiIlq0aBGtWrWKiIjy8vLYfPPNY/PNN482bdrENttsE5tuumljf0g0I8uXL4+RI0dmZwAAFITx48fHySef7PcABWLbbbeN+++/P04++eS4//77s3OajDPOOCPGjh0bLVu2zE4pKjNmzIg1a9ZkZwAA/JOx9qZphx12iLPOOitOPfXUePLJJ+Puu++OCRMmRHV1dXYaAAAAAAAAQLNnuAcAAAAAAAAAAL7A8ccfH127ds3OoAaXXXZZdkJBGD58eBxyyCHRunXr7BS+QFlZWQwfPtxwD0ATU1FRET/72c9ihx12yE6hGSgrK4stt9wyttxyy+wUitidd94ZCxYsyM4AACgIzz77bMycOTP22muv7BT+11ZbbRW33XZbDB48OC699NLsnII3bty46Nevn/GpBI8++mh2AgDAv1i2bFl2AhuhTZs2ceihh8ahhx4al112WcyYMSOeeeaZePrpp2PSpEkpo5G77rpr7LnnntGpU6fo0KFDvPTSS3HllVc2egcAAAAAAABAQzHcAwAAAAAAAAAAX+Ccc87JTqAGM2fOjPHjx2dnFITZs2fHfffdF8cdd1x2CrWw7777xnHHHRcTJkzITgGgltasWRPjx4+PoUOHZqcAbLSVK1fG6NGjszMAAArKPffcY7inwLRq1Souuuii2H333eOUU06J6urq7KSCs/3228eECRPiP/7jP7JTitKaNWvixhtvzM4AAPgXS5cuzU6gnmy55ZZx4IEHxoEHHhgREZ988km89dZbMXfu3FiwYEEsWLAg3n333Zg3b14sWbIkVq9eHYsXL44PP/wwqqurY8stt/znY2222WaxxRZbRETEl770pWjbtm1sscUWseWWW8bmm28ebdq0ifLy8thmm21iq622iq222uqfr2/VqtW/dE2YMMFwDwAAAAAAANCsGO4BAAAAAAAAAIDP0a9fv9htt92yM6jBRRddlJ1QUIYOHRqHHXZYtGnTJjuFWjj33HMN9wA0MSNHjowTTjghvvrVr2anAGyU++67L958883sDACAgnLllVfGwIEDo7y8PDuFTykpKYmTTjop9t577/j5z38es2bNyk4qGMcee2xcdNFF8eUvfzk7pWjNnDkz5s2bl50BAPAvlixZkp1AA9l0001jl112iV122SU7BQAAAAAAAKBZKc0OAAAAAAAAAACAQlVaWhr9+/fPzqAG06dPj9tvvz07o6C8+eabceedd2ZnUEu77bZbnHnmmdkZANRBdXV1XHLJJdkZABtl+fLlMWTIkOwMAICCs2zZsnj88cezM6jBN77xjZg8eXKce+652Snptt566/jv//7vuOmmm4z2JHvssceyEwAA/o/33nsvOwEAAAAAAAAAmhTDPQAAAAAAAAAAUIOzzz47OnXqlJ3Beqxbty4qKyuzMwpSRUVFLF26NDuDWurfv3+UlZVlZwBQB1dffXU8//zz2RkAG+zOO++MuXPnZmcAABSk3/72t9kJfI4tttgiRo0aFU8//XR07do1O6fRlZaWxpAhQ+Kll16Ko48+2s+Wk1VVVcWtt96anQEA8H8sWrQoOwEAAAAAAAAAmhTDPQAAAAAAAAAAsB5lZWXRr1+/7AxqMGXKlHjooYeyMwrS/Pnz4/bbb8/OoJZ23HHHGDVqVHYGAHVUWVkZ69aty84AqLNly5bFsGHDsjMAAArWpEmTYtasWdkZfIF99903pkyZEjfccENsvfXW2TmNonfv3vHyyy/H8OHDo3379tk5RMTf/va3mDNnTnYGAMD/8Y9//CM7AQAAAAAAAACaFMM9AAAAAAAAAACwHiNHjowddtghO4P1qK6uNnTyBSoqKmLx4sXZGdTSySefHO3atcvOAKAO7rvvvnjiiSeyMwDq7Kabbop58+ZlZwAAFDTD6E1Dq1at4qSTToo5c+bEpZdeGuXl5dlJ9a60tDROP/30mDlzZowfPz7+7d/+LTuJT7nvvvuyEwAA1mvGjBnZCQAAAAAAAADQpBjuAQAAAAAAAACAzygvL4/evXtnZ1CDxx57LCZNmpSdUdAWL14ct9xyS3YGtbTVVlvFmDFjsjMAqKNzzjknVq1alZ0BUGsLFiyI8847LzsDAKDg/eY3v4n3338/O4Na2nrrreNXv/pVvPHGG3H55ZdHhw4dspM22vbbbx9jxoyJt956K8aNGxd77rlndhKf8dFHH8WVV16ZnQEAsF6LFy+Ojz76KDsDAAAAAAAAAJoMwz0AAAAAAAAAAPAZI0aMiPbt22dnsB5r1qyJUaNGZWc0CUOGDImFCxdmZ1BLP/nJT2K33XbLzgCgDmbMmBETJkzIzgCotauvvjpWrFiRnQEAUPDWrFkT9957b3YGdbT11ltHv3794uWXX4777rsvDj/88OykOikrK4u+ffvG448/Hm+88Uacc845sdNOO2VnUYMnn3zS91cAQEEzRgoAAAAAAAAAtWe4BwAAAAAAAAAAPqVdu3ZxwgknZGdQg4kTJ8bUqVOzM5qEFStWxI033pidQS21bt06KisrszMAqKOzzz7bUB7QJLz22msxevTo7AwAgCbjwgsvjFWrVmVnsAG+9KUvxWGHHRb33ntvvPXWW3HttdfGgQcemJ21Xh07doxzzz03HnnkkVi0aFFcccUVccABB0TLli2z0/gCxpwBgEL33nvvZScAAAAAAAAAQJNhuAcAAAAAAAAAAD5l9OjR0bZt2+wM1mP16tUxdOjQ7IwmpaKiIt59993sDGrp0EMPjR49emRnAFAHS5cujUsvvTQ7A+ALVVZWRnV1dXYGAECT8eabb8ajjz6ancFG+spXvhKnnHJKPPbYYzFv3ry455574swzz4xdd901pWfvvfeOgQMHxu233x4vvvhivPbaazFq1Kg46KCD/G6qCZk7d27cdddd2RkAAJ/LcA8AAAAAAAAA1N4m2QEAAAAAAAAAAFAoOnfuHMccc0x2BjV44IEHYtasWdkZTcqaNWti/PjxBo+aiLKyshg+fHgccMAB2SkA1MFFF10UxxxzTOy9997ZKQDrNXny5LjllluyMwAAmpxLLrkk/vM//zNKS0uzU6gH22+/fRxxxBFxxBFHxIUXXhjz5s2LN998M1599dV46aWX4oUXXojp06fHihUrNuo6LVq0iH322Sf22GOP+Ld/+7f46le/GjvuuGN06tQpttpqq3r6aMh0xx13ZCcAAHyhefPmZScAAAAAAAAAQJNhuAcAAAAAAAAAAP7XsGHDok2bNtkZrMfKlStj8ODB2RlN0siRI+PEE0+Mjh07ZqdQCz169Igf//jHcdddd2WnAFAHZ511VjzyyCPRokWL7BSAf/HJJ5/Eueeem50BANAkPfXUUzFlypTYf//9s1OoZyUlJbHTTjvFTjvtFP/xH//xz5evW7culixZEkuXLo2PPvooli1bFsuXL4+1a9fGunXr4uOPP47WrVtHRMRmm20WJSUl8aUvfSnatm0bW2yxRWy++eax+eabZ31YNIKPPvooLr744uwMAIAv9Morr2QnAAAAAAAAAECTYbgHAAAAAAAAAAAiokuXLnHkkUdmZ1CDu+66K15//fXsjCapuro6rr322hgzZkx2CrVQUlIS559/vuEegCZm8uTJcdttt8WJJ56YnQLwL2699dZ45plnsjMAAJqsSy+9NP7jP/4jSkpKslNoBCUl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N96II488Mqqrq7NTAACohdmzZ8f5558f69aty04BvkBVVVWceeaZficCABSVe++9NzsBAAAAAAAAAAqO4R4AAAAAAAAAAJql7t27R69evbIzqMEDDzwQzz//fHYG6zF//vy4/fbbszOog29/+9tx0kknZWcAsJGOOOKImDVrVnYGUEAWL14cP/3pT2PRokXZKQAA1ME111wTd911V3YG8AWuu+46/68CAEXnsssuiwULFmRnAAAAAAAAAEBBMdwDAAAAAAAAAECzNHjw4GjRokV2BuuxcuXKGDx4cHYGn6OioiIWL16cnUEdDBw4MDsBgI20atWqOPLII2PevHnZKUAB+Pjjj6N3797x3HPPZacAALAB+vTpE6+//np2BlCDZ555Jk4//fTsDACARldVVWW8EAAAAAAAAAA+w3APAAAAAAAAAADNTs+ePaNnz57ZGdTgrrvucmBhgVu8eHHccsst2RnUwS677BLnnHNOdgYAG+nNN9+M4447Lj744IPsFCBRVVVVnHnmmfGHP/whOwUAgA20YsWK6N27d6xYsSI7BfiMRYsWxYknnhjV1dXZKQAAKS666KJYuXJldgYAAAAAAAAAFAzDPQAAAAAAAAAANDsVFRVRWurWmEK0fPnyGDJkSHYGtTBkyJBYuHBhdgZ1cPrpp0erVq2yMwDYSE899VScfPLJ8fHHH2enAEkuuOCCuOaaa7IzAADYSFOnTo0hQ4bEunXrslOA/1VVVRUDBgyIV199NTsFACDNvHnz4pFHHsnOAAAAAAAAAICC4XQSAAAAAAAAAACalaOOOir222+/7AxqcMstt8S8efOyM6iFFStWxI033pidQR1sv/32UVlZmZ0BQD247777on///rFmzZrsFKCR/fa3vzV2CgDQjFx22WVx++23Z2cA/+uqq66KCRMmZGcAAKSrrKyM1atXZ2cAAAAAAAAAQEEw3AMAAAAAAAAAQLMycODAKCkpyc5gPZYsWRLDhg3LzqAOKioq4t13383OoA569+4d22+/fXYGAPVg/PjxMXTo0Fi3bl12CtBIbr/99ujbt292BgAA9ezEE0+M5557LjsDit4f//jH+NWvfpWdAQBQEJ5//vl48MEHszMAAAAAAAAAoCAY7gEAAAAAAAAAoNk44YQTomvXrtkZ1ODmm2+ORYsWZWdQB2vWrInx48dnZ1AHbdu2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L14c06ZNiyeffDKamppST6KXO378eKxevTpKS0vjrrvuihMnTqSeBAAAPVZnZ2esXLkyJk+eHLfeemvs2LEjOjs7U88ioa6urti5c2fceeedH4adhFIBAPi07dmzJ+69996YN29ejBo1Ku644454+umn480334wzZ86kngcAAAAAAABADybcAwAAAAAAAABAUl/84hdj0aJFqWfwMXbt2hUbN25MPYNe4Oc//3ns378/9QzO09e//vWYPXt26hkA9FC1tbVx++23x8SJE2PVqlVRW1ubehK9TFVVVfz4xz+OSy65JJYuXRrNzc2pJwEAQK/yy1/+MubNmxcLFiyIX/3qV665M9PQ0BDPPPNMXHnllXH55ZfHunXrUk8CAICIiGhra4snnngibrnllqioqIgRI0bEN7/5zVi3bl3s2LEj/vGPf6Se2Ou0t7dHVVVVbN68OZ577rnUcwAAAAAAAAD+o/qlHgAAAAAAAAAAQN7uu+++6NfP31i6o66urvjpT3+aega9yMMPP+zGfj3MwIEDY/ny5XHttdemngJAD9bY2Bh333133HPPPfG9730vFi9eHNOnT089ix6qs7Mzdu3aFevXr4+nnnoq9RwAAMjC1q1bY+vWrVFUVBRLly6NG264IS699NLUs7gA2tvbY+fOnfHss8/GY489Fh0dHaknAQDA/6mtrS02bdoUmzZt+vBYaWlpLFy4MGbOnBlTp06NSy65JEpKSmLAgAEJl/YMra2t8e6778ahQ4fi73//e7zxxhvx/PPPR2NjY+ppAAAAAAAAABeEO54AAAAAAAAAAJDMVVddFVdeeWXqGXyMbdu2xW9/+9vUM+hFnnjiiViyZElUVFSknsJ5uPrqq+Oaa66JP/zhD6mnANDDdXZ2xkMPPRQPPfRQXHvttXHHHXfEVVddFYWFhamn0QM0NzfH73//+3j00Udj+/btqecAAECWmpubY9myZbFs2bKYP39+3HbbbXH11VfHqFGjUk/j/6GrqysOHjwYL730Ujz++OOxf//+1JMAAOD/7dChQ7F27dqPHOvbt2/MmzcvZs2aFZMnT46JEyfGxRdfHGPGjIkxY8ZEv3753Iqpubk56uvr49ixY1FTUxPvvPNOVFdXx969e2PPnj2p5wEAAAAAAAB8qvL5tRgAAAAAAAAAgG7nvvvui4KCgtQz+Cc6OztjxYoV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"
					), a8u(7, "youtube", 7, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), a8u(8,
					"googleplay", 3,
					"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"
					), a8u(9, "discord", 7,
					"iVBORw0KGgoAAAANSUhEUgAAACwAAAAyBAMAAADVdiTZAAAAG1BMVEUA/wBI/0lu/26P/5Cl/6O8/73R/9Hn/+j///+iRuwXAAABJUlEQVQ4y83TvW7CMBQF4BsKdKVIpYxIRaJjVLUSI6JDGSNlCCOq1JC1f+CxFIL92D22E+di/ABciZB8seRj35joVZ3VN1FXBSqhRYgPJEIsSQXrAnmjL2uP5Usm81z83Bec5WM+J9T4vS8Yfzz1yFQ0v2ackKsrxr2G7d4ZPjK1O214z3no+Jdz1/EKTy1NI/w6jmcIID6JJirGe8cYdIdGIcQOwx3j/gEpI6X+qoRkGqrnd6OXFR/NRAcdOWFc6hDPera0Xk/Fozo1ck4bHsSVpg0jYJSlervGW9zWSdQXhhXozlbGek1uY9/s2hRWect7ucnsf5ld7DfosX+kcsv+AdwtDfvHdW877x/u0raB6Oa0qG35rKZhbokg41sKclQEmTr/f+SUPtWxuyYAAAAASUVORK5CYII="
					), a8u(10, "insta", 3, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), a8u(11, "emojis",
					4, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), a8u(12, "flags", 3,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), a8u(13, "bestTeam", 5,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), a8u(14, "bestPlayer", 5,
					"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"
					), a8u(15, "zoom", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuBAMAAACllzYEAAAAHlBMVEUAAAAhIyA3ODZTVVJrbWqEhoOkpqO8v7vX2tb///8goTJXAAABaElEQVQ4y32Tu1ODQBDGL8QAdlg5dml8dZTa2TijXQpnIh2TwoQOxwehi2PB0flKYP/b7HFv5nALBn5337d7ewshXZyuKX2PST8egUW76OE7EJFa+BhJ9bSsUWFaeTV3GKHbn8EvlB79bjSv4VO8jUr4VdiHNnK938MHPie0Yh+ZLqmGuNsJ7CNURgewI5qPoRE86GwkJyWIBIfcUfJrmMm0sclDyDnPWmLyADacl8jnRbEGKIoiJRP4EmU2LJmIDfLvAf7z/37mv6IUm08pzbV/rx5f1pPA1Fn/iX3eS3nekAslz7gcGw9bg3uqn6Rup5oH+uaTLpO4r0SmZVuUFE2lfTc+z1qr9+BVtGJqzq1RHNfQdAtnrEW75UwuXOFgvj3crpCyDu6UIpP9fPHZU5XkiYVXvsXIPcc+VwspzY2pPorE/NgCfYK+QJ5+QFA6fjQt2A4IWuIWODixe2ELcuIUNJGL+zQle92exY5pfDIaAAAAAElFTkSuQmCC"
					), a8u(16, "apple", 3,
					"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"
					), a8u(17, "loading", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEEAAAAKAQMAAADRpqGpAAAABlBMVEUAAAD///+l2Z/dAAAATklEQVQI12M48E/OzoinjoGB4cA/O3tjnn8g1iEjY+aeAxCWofGZBijLCMqqNzRKmQdhGRubNINZyeYQ1p9/yXbGMv9yG0AsG2OemtwGAJcsIuxbPF7gAAAAAElFTkSuQmCC"), a8u(18, "target",
					7,
					"iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAJFBMVEXUAADLSwDYWli/eQCzlQGgswDloaGC0wAA/wBk5wDx09P///8NUBuBAAADWElEQVRYw62YvW/aUBDADwghTRakqoJuTBmSBamNSjcyJSMZotINZciQLCxVnQ1EkO0N1ET1iDJkgCViyGD/c7UN8bv37t5Hq96EbH6+j3fv3d2DgJPw52Uqd+y7AJhnP05hI6WTOyfksQ1IPnhWJLwAWUrfLYjfBSJfjIjfBkYaBoQnVAYjYRc08lWHXIBW+jwy0RNQijjErxsQqHJID4xyTpF7MwEVirQtCHxUkYmNEBEAVyVCDbgqEWq2SNcBgQ5GpsrLw+UqSZbPAzZoG2QovdpN/7+R5xaTNjkSSgt/lAiJJaYmkImOUJiSQHCu7CeJnjl/Q7Bdu4kqr6ploKTXLUGSJ8UykON1lDDSkmMGUrKUOSJZC+TdBvHFk2MWSQbSTkuRsUWJpCbKkaE2wIw3/RwRrqx0yKL4SzNDQsOa0LWpZcjU5rxkWSVDxna7sGVRisz4eMUay/op0uPilW2UQ6wVbU0I6owrm7Qqr5jV3AsgZFx5paa+iJCBSBcmPvvUmWoAU7oqKD8KzbGIMkzoF1vcHi0eBTB6+3nAbcMy/U4EM7IfF8Dt0iJkHoNI59AB+VAfhqqnsXwMkiifQ09FXiWkTJCOQJgQs48Z5EVGiPIOdFVk8f+Rvb9Hmv/iiyvCRYxfFzCti/vqk4SRc2yfybGZPmelAwEhI/JyzXmPk39MTIg5V4S5AdzTtwNmh8Wi9onjoswcjbv02Q5/jj3RYrtGh1LAFeMBKbYLUS1BNEkH6Ay/yh7ccNWimSJDtiItn2/wKR6jBgOCkUt9EWvlpci9qbMgcS9lVcy3F2RkVzWvyHW7ZWvcXgBurY6tdmX9ZYqMrFUc7TovR6ZgC8BC6kizTgksamK5hwO5T7w1e5K3yhkyBmOvhM+PaIv4YGr7cD9aLTrYtqm5xEdBs0DmuKCstM1oHuIt4oOWeaIDGTCDxY2yb5TRArjx5XDJTgnbAWaDhOqAWL6+vr5S55eaNPLMXUYeT0J8B6KqjG9DO9JXELuaGhlF546eICS0TJYNZqw2D8mViJv3e26DOEZMpjU0FxFTLbGjvSF50Dni6e9hfvHztGe67Xmw6qB3So/k0mMnst1c+acyceZyP/aI9uiJ53alFvy+/JTa9/7zt8j1Fs4ifwCmXBmOYkld0AAAAABJRU5ErkJggg=="
					), a8u(19, "members", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABSVFGanJkA/wDMz8x4/3ey/7L///+GDHoaAAACZElEQVRIx9WWwYrjMAyGlVCYa6cs5JqGQh5gaObaDYU8QJnOA5SS66RN49dfSZZt2U2WZZeFXc9h2r9fZEmRJcPbLyz4d6GzMdM1/uXcG3PV0KehFVFnlh4Baoxdl8BEEkF7EcwUoN5pJ4HenRBMNV66C4QfxxI2nTKFhsYt5CgZC9FTawDIxbg4UKKUWevAuw1Aq/D7NUq6M9RbQ2zKhkwpKVnK2AWGRrCrc04lEpDfgyg1u8mh3EQqSGLoS5QXY/a4+XSKJIIwkkNQOIlTgFYUcQq59TuQcrwI0PDk+M3Hayh2+RcC1smkl3DDj1ltlMR5old38LutHT04l/BVAVfOSL9lnXelUBKaAltxt2gTv3Ft6w6k4sajdtf6zhLVHUHltzTwkIzvOUGf9PhOJJdVdphWS0YfFnJUCrVgISmdTVWVnVQa19+YV9VWKgohl2+MRUFKjaAXDX0tQCvt0+HPIJWnJajWGV9wPDPutPFhXs9CK+PLr1aJjSF+5aUzpOQY6mwZURWNCRRO9JZq43ikMtnog44v2LlojK1EW6n4zYXz4HqSb/gsty1qaWjAt5o7NAEiL7Jdu2vX7IqHLikEIYdzUJ5CZQQdJJcJ5GSE9i5tC1BNR4oadGub76ChwrZfKn48wTRXsGfrQvHFQr0dmy245o8nMYHGoxsToMZIAoWBA2qOzEMXmVJiK4nO2jn5oXju5yGZpn4Gf/QpNH08D+pn6O3vQqOGulkIX0+1fbXd93VT+dkXQe/SO3F1fkSnUBjgT7cEdVdJodkLTbNkKLr1NH1ApstPrkbnK/39B9e1H85NJPjxrK7zAAAAAElFTkSuQmCC"
					), a8u(20, "hourglass", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABKTEqZm5gA/wDJzMh3/3iz/7L///+iyVF/AAACjklEQVRIx72W3aqyQBSGJwk6dceGTv1C8AJEO60QvACJLkDI02xPrtvf75pJ58cx2iffIqT0aWb9vGuNIrft0hSX8WqZ4Etxg9HM+G4zQVdatOcEdSSrqkr3juFOVdMwQXQUC7YmAyVLUPQZ1PxtJSJ5js7KX7j/+pKkNR5Y0RE9Ij/6JMPFRFfebt0cOmbD7dZOEOwQgn7ssnwOrf8rJAMp8KFSrnwormcQCR8S1HpQgT8qVVXnVCsJS/tQzlV4mMpmJLUCXOi4I2mgmnotOAfqcJPiCUIGNsMMunJdEqMjbP+cQQcOrx+hnZ0BA5XsuTQuPUxwBoLnZj98Oxq/LaiTHNK4G34MAQj7jfGhQqeIfgJQzm7ofELccUZ5CDpQjKBO3LbUr+gZhAo8QhMl8FoCb4IQhkvyUt7JWciBCnhUa5VkJkkexEtxQ3KjPvMlqKD7hk7fdF/bHnlQfoUU4LglgBCElVCP+ztIbQfDdXk7OL5jqH/juE7BA4pBUZr8XTJZMadoKZklKlxriMvSBqGO4m8ejJmuy5AH9aTqq02CbwPQlfeYDH94ziEWilqDW5xniiUWq6VUjs6szFTnat5SHYuXdcnGAcTZrINLrpmZGJnqqXY26WLONJ7rfqm5qfwh1vXckPahAh8HD/Imjzt7xJgACLe3oZ01xYQ1Mo/umWmGprBOjcQ96cyEEtacc89DrDx6PkJQrHSh2kjdgh4ulH0C7YIQuS8P3nYlDa9ecg33OpUF8TqnFyB9UitIVujsALSmqp6g+/5fHKVpxQfQqM6q2ier7X5joFdAMX++YrEyMc6hgP0RkuoVZbvfTqfU6gs/VbZG6M3bmn5fE0pxb6x1Ori4eNbkY3f+AriuYpjQCOoxAAAAAElFTkSuQmCC"
					), a8u(21, "stalemate", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEoAAAAKAQMAAAApRlpeAAAABlBMVEUAAAD///+l2Z/dAAAAX0lEQVQI12P4/afiwJ+G9vnvDzD8/vPjwJ+D/SDmgYQTBw487mnmYYAwv4OZBUDmj/89zfwNDBWJfw78uDv/MJApAWQeODn/MFABR2LPgQMHZ4CYPxJ7/vwBMvkPIDEB8vo+S3L7oMwAAAAASUVORK5CYII="
					), a8u(22, "logo", 8,
					"iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxMAAAsTAQCanBgAAATzaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTEyLTIzVDE0OjQ0OjQ2KzAzOjMwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyZTU0YWVlOS01ZDdhLWQ3NDgtYTRjYS0yODQ1NmQ1ZWFlZDYiIHhtcE1NOkRvY3Vt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"
					)
		}
	}, this.get = function(kf) {
		return gM[kf]
	}, this.a7F = function(name) {
		for (var a0 = uw.length - 1; 0 <= a0; a0--)
			if (uw[a0] === name) return gM[a0];
		return a8o
	}, this.pw = function() {
		return a8n <= 0
	}, this.a8q = function() {
		a8n = 0, a8r()
	}
}

function cB() {
	var a94, a95, a96, a97, a98, a99, a9A, a9B, a9C, a9D, a9E, a91 = [224, 224, 224],
		a92 = [
			[172, 172, 172],
			[144, 0, 0],
			[0, 128, 0],
			[0, 0, 144],
			[128, 128, 0],
			[128, 0, 128],
			[0, 128, 128],
			[196, 196, 196],
			[0, 0, 0]
		],
		a93 = [
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

	function a9a(f5, a9c) {
		a5d[f5] = 0, a5d[f5 + 1] = 0, a5d[f5 + 2] = a9c, a5d[f5 + 3] = 0, a9d(f5)
	}

	function a9d(f5) {
		var fg;
		bP.lm || (fg = aS.kw(f5), f5 = aS.kx(f5), bP.lm = fg >= bO.a5c[0] && fg <= bO.a5c[2] && f5 >= bO.a5c[1] && f5 <= bO.a5c[3])
	}
	this.dE = function(t1) {
		if (a94 = new Uint8Array(a2.f2), a95 = new Uint8Array(a2.f2), a96 = new Uint8Array(a2.f2), a97 = new Uint8Array(a2.f2), a98 = new Uint8Array(a2.f2), a99 = new Uint8Array(a2.f2), a9A = new Uint8Array(a2.f2), a9B = new Uint8Array(a2.f2),
			a9C = new Uint8Array(a2.f2), a9D = new Uint8Array(a2.f2), this.a2P = new Uint8Array(a2.f2), (a9E = new Int32Array(4))[0] = -4 * bI.eT, a9E[1] = 4, a9E[2] = -a9E[0], a9E[3] = -a9E[1], a2.hm)
			for (var ja, il, a0 = a2.f2 - 1; 0 <= a0; a0--) il = bU.uu[bU.im[a0]], ja = bB.em((a93[il][3] + 1) * ao.random(), ao.value(100)), a94[a0] = a92[il][0] + ja * a93[il][0], a95[a0] = a92[il][1] + ja * a93[il][1], a96[a0] = a92[il][2] +
				ja * a93[il][2];
		else ay.j8 && ay.j9.a9L ? function(e6) {
			var a0;
			for (a0 = a2.sL - 1; 0 <= a0; a0--) a94[a0] = 4 * e6[a0][0], a95[a0] = 4 * e6[a0][1], a96[a0] = 4 * e6[a0][2]
		}(ay.j9.a9L) : (function() {
			for (var a0 = a2.f2 - 1; a0 >= a2.iq; a0--) a94[a0] = 4 * bB.em(64 * ao.random(), ao.value(100)), a95[a0] = 4 * bB.em(64 * ao.random(), ao.value(100)), a96[a0] = 4 * bB.em(64 * ao.random(), ao.value(100))
		}(), function(t1) {
			for (var a0 = a2.iq - 1; 0 <= a0; a0--) a94[a0] = 4 * t1[a0].a8c[0], a95[a0] = 4 * t1[a0].a8c[1], a96[a0] = 4 * t1[a0].a8c[2]
		}(t1));
		! function() {
			var a0, f7;
			for (a0 = a2.f2 - 1; 0 <= a0; a0--) f7 = bB.em(a94[a0] + a95[a0] + a96[a0], 3), a94[a0] += a9U(f7 - a94[a0], 2), a95[a0] += a9U(f7 - a95[a0], 2), a96[a0] += a9U(f7 - a96[a0], 2), a94[a0] -= a94[a0] % 4, a95[a0] -= a95[a0] % 4, a96[
				a0] -= a96[a0] % 4
		}(),
		function() {
			for (var a0 = a2.f2 - 1; 0 <= a0; a0--) a94[a0] += bB.em(a0, 128), a95[a0] += bB.em(a0 % 128, 32), a96[a0] += bB.em(a0 % 32, 8), a97[a0] = a0 % 8
		}(), this.a9R(),
			function() {
				for (var a0 = a2.f2 - 1; 0 <= a0; a0--) a98[a0] = a94[a0] < 32 ? a94[a0] + 32 : a94[a0] - 32, a99[a0] = a95[a0] < 32 ? a95[a0] + 32 : a95[a0] - 32, a9A[a0] = a96[a0] < 32 ? a96[a0] + 32 : a96[a0] - 32
			}(),
			function() {
				for (var a0 = a2.f2 - 1; 0 <= a0; a0--) a9B[a0] = 235 < a94[a0] ? a94[a0] - 20 : a94[a0] + 20, a9C[a0] = 235 < a95[a0] ? a95[a0] - 20 : a95[a0] + 20, a9D[a0] = 235 < a96[a0] ? a96[a0] - 20 : a96[a0] + 20
			}()
	}, this.a1Q = function(player) {
		var e6 = bE.dz;
		return e6[0] = a94[player], e6[1] = a95[player], e6[2] = a96[player], e6
	}, this.a9R = function() {
		for (var a0 = a2.f2 - 1; 0 <= a0; a0--) this.a2P[a0] = a94[a0] + a95[a0] + a96[a0] < 280 ? 0 : 1
	}, this.kw = function(f5) {
		return bB.em(f5, 4) % bI.eT
	}, this.kx = function(f5) {
		return bB.em(f5, 4 * bI.eT)
	}, this.sS = function(fg, fh) {
		return Math.floor(4 * (fh * bI.eT + fg))
	}, this.sh = function(f5) {
		return this.s0(f5 + a9E[0]) || this.s0(f5 + a9E[1]) || this.s0(f5 + a9E[2]) || this.s0(f5 + a9E[3])
	}, this.sf = function(f5, player) {
		return this.a9V(f5 + a9E[0], player) || this.a9V(f5 + a9E[1], player) || this.a9V(f5 + a9E[2], player) || this.a9V(f5 + a9E[3], player)
	}, this.uS = function(player) {
		return player < a2.iq && 2 !== aX.y1[player]
	}, this.f8 = function(f5) {
		return 208 <= a5d[f5 + 3]
	}, this.sm = function(player, f5) {
		return this.f8(f5) && this.a9W(player, f5)
	}, this.a9W = function(player, f5) {
		return player === this.f9(f5)
	}, this.a9X = function(f5) {
		return 208 <= a5d[f5 + 3] && a5d[f5 + 3] < 224
	}, this.hv = function(f5) {
		return 224 <= a5d[f5 + 3] && a5d[f5 + 3] < 248
	}, this.sg = function(f5) {
		for (var a0 = 3; 0 <= a0; a0--)
			if (this.g4(f5 + a9E[a0])) return !0;
		return !1
	}, this.a9Y = function(f5) {
		return 192 <= a5d[f5 + 3] && a5d[f5 + 3] < 208
	}, this.a9Z = function(f5, player) {
		return this.a9Y(f5) && player === this.f9(f5)
	}, this.f0 = function(f5) {
		return this.f8(f5) || this.fA(f5)
	}, this.g4 = function(f5) {
		return 0 === a5d[f5 + 3] && 2 === a5d[f5 + 2]
	}, this.fA = function(f5) {
		return 0 === a5d[f5 + 3] && 1 === a5d[f5 + 2]
	}, this.s0 = function(f5) {
		return 0 === a5d[f5 + 3] && 3 === a5d[f5 + 2]
	}, this.g3 = function(f5) {
		return this.s0(f5)
	}, this.a9V = function(f5, player) {
		return this.fA(f5) || this.f8(f5) && player !== this.f9(f5)
	}, this.f9 = function(f5) {
		return a5d[f5] % 4 * 128 + a5d[f5 + 1] % 4 * 32 + a5d[f5 + 2] % 4 * 8 + a5d[f5 + 3] % 8
	}, this.sn = function(f5) {
		a9a(f5, 1)
	}, this.a9b = function(f5) {
		a9a(f5, 2)
	}, this.se = function(f5, player) {
		a5d[f5] = a94[player], a5d[f5 + 1] = a95[player], a5d[f5 + 2] = a96[player], a5d[f5 + 3] = 208 + a97[player], a9d(f5)
	}, this.f1 = function(f5, player) {
		a5d[f5] = a98[player], a5d[f5 + 1] = a99[player], a5d[f5 + 2] = a9A[player], a5d[f5 + 3] = 224 + a97[player], a9d(f5)
	}, this.hw = function(f5, player) {
		a5d[f5] = a9B[player], a5d[f5 + 1] = a9C[player], a5d[f5 + 2] = a9D[player], a5d[f5 + 3] = 248 + a97[player], a9d(f5)
	}, this.a9e = function(f5, player) {
		a5d[f5] = a91[0] + a94[player] % 4, a5d[f5 + 1] = a91[1] + a95[player] % 4, a5d[f5 + 2] = a91[2] + a96[player] % 4, a5d[f5 + 3] = 192 + a97[player], a9d(f5)
	}
}

function cC() {
	var uw, ew, ey, a9f, a9g;

	function a9l() {
		for (var a9t = 0, a0 = 1; a0 < 5; a0++) a9t += ew[a0] % 1024;
		return a9t
	}

	function a9k() {
		for (var a0 = 1; a0 < ey - a9g; a0++) ew[a0] = parseInt(ew[a0])
	}

	function a9m() {
		ew[0] = "Player " + Math.floor(1e3 * Math.random()), ew[1] = an.u < an.iF ? Math.floor(1 + Math.random() * (Math.pow(2, 30) - 1)) : 0, ew[2] = 1, ew[3] = 1, ew[4] = an.u < an.iF ? 0 : 1, ew[5] = 0, ew[6] = "000", ew[7] = "0", ew[8] = "0", ew[
			9] = "0", aT.a9n()
	}

	function a9j() {
		for (var a0 = ey - a9g - 1; 0 <= a0; a0--) ew[a0] = a9.uA(ew[a0]);
		ew[0] = a9.u8(ew[0])
	}

	function a9w(name, value, a9x) {
		var xA = new Date,
			a9x = (xA.setTime(xA.getTime() + Math.floor(31536e6 * a9x)), name + "=" + value + ";expires=" + xA.toUTCString() + ";SameSite=Strict;Secure;path=/");
		document.cookie = a9x
	}
	this.dE = function() {
		if (0 === m.id) {
			a9g = 4, uw = [], ey = 10;
			for (var a0 = a9f = 0; a0 < ey; a0++) uw.push("u" + a0);
			ew = new Array(ey), ! function(a9u) {
				for (var hz, f5, a9v = a9u.split(";"), a0 = a9v.length - 1; 0 <= a0; a0--) {
					for (a9v[a0] = a9v[a0].trim(), hz = 2; 0 <= hz; hz--) a9v[a0] = a9v[a0].replace(" ", "");
					3 < a9v[a0].length && (hz = uw.indexOf(a9v[a0].substring(0, 2)), f5 = a9v[a0].indexOf("="), 0 <= hz && 2 === f5 ? ew[hz] = a9v[a0].substring(f5 + 1, a9v[a0].length) : 0 < f5 && a9w(a9v[a0].substring(0, f5), "0", 0))
				}
			}(document.cookie), ew[9] || (ew[9] = "0"), (! function() {
				for (var a0 = ey - 1; 0 <= a0; a0--)
					if (void 0 === ew[a0]) return;
				return 1
			}() || (a9f = 2, a9j(), a9k(), a9l() !== ew[5])) && a9m()
		}
	}, this.a9n = function() {
		if (2 === a9f) {
			ew[1] = 0 === ew[1] ? Math.floor(1 + Math.random() * (Math.pow(2, 30) - 1)) : ew[1], ew[5] = a9l(), ! function() {
				for (var a0 = 1; a0 < ey - a9g; a0++) ew[a0] = ew[a0].toString()
			}(), ! function() {
				ew[0] = a9.u7(ew[0]);
				for (var a0 = ey - a9g - 1; 0 <= a0; a0--) ew[a0] = a9.u9(ew[a0])
			}();
			for (var a0 = ey - 1; 0 <= a0; a0--) a9w(uw[a0], ew[a0], 1);
			a9j(), a9k()
		}
	}, this.a9f = function() {
		return a9f
	}, this.a9r = function(hz) {
		a9f = hz, this.a9n()
	}, this.a9s = function(a0, value) {
		0 === m.id && (ew[a0] = value)
	}, this.vl = function(a0) {
		return 0 !== m.id ? 0 : ew[a0]
	}
}

function ca() {
	var kf = 0,
		a9y = new Uint16Array(32);

	function remove(zS) {
		var a0;
		for (kf -= 2, a0 = zS; a0 < kf; a0 += 2) a9y[a0] = a9y[a0 + 2], a9y[a0 + 1] = a9y[a0 + 3]
	}
	this.dE = function() {
		kf = 0
	}, this.hb = function() {
		var a0, hs, h6;
		if (0 !== kf)
			if (0 === aX.kX[a2.et] || aU.a9z(a2.et) === aU.eY(a2.et)) kf = 0;
			else
				for (a0 = kf - 2; 0 <= a0; a0 -= 2)(hs = a9y[a0]) < a2.f2 && 0 === aX.kX[hs] ? remove(a0) : (h6 = a9y[a0 + 1], (hs >= a2.f2 && aA0(a2.et) || hs < a2.f2 && aA1(a2.et, hs)) && (b0.g1.gA(h6, hs), remove(a0)))
	}, this.gC = function(hs, h6) {
		! function(hs, h6) {
			var a0;
			for (a0 = 0; a0 < kf; a0 += 2)
				if (a9y[a0] === hs) return a9y[a0 + 1] = Math.min(a9y[a0 + 1] + h6, 1023), 1;
			return
		}(hs, h6) && 32 !== kf && (a9y[kf] = hs, a9y[kf + 1] = h6, kf += 2)
	}
}

function aA3(player) {
	aA4(player), aA5(player), aA6(player), a4.es(player), a6.kh(player), aU.clear(player), bD.aA7.aA8(player)
}

function aA4(player) {
	aS.uS(player) && (aX.vE[player] = bW.v8.aA9(), a2.ub++);
	var aAA = aU.aAB(player);
	0 === aAA.length ? b2.eo.y2(player) && aAC() : (aAD(player, aAA), aAE(player, aAA))
}

function aAC() {
	bR.ew[17] += aX.eu[a2.et] + aU.aAF(a2.et), aM.show(!1, !1, !1, !0), aL.a4v(), bH.result.vI()
}

function aAD(player, aAA) {
	for (var a0 = aAA.length - 1; 0 <= a0; a0--) aU.aAG(aAA[a0], player)
}

function aAH(aAA) {
	for (var kf = 0, a0 = aAA.length - 1; 1 <= a0; a0--) aX.eq[aAA[a0]] > aX.eq[aAA[kf]] && (kf = a0);
	return kf
}

function aAE(player, aAA) {
	var a0, a0y, aAI = aAA[aAH(aAA)];
	if (9 === a2.jC && 1 === bU.im[player] && ao.ig(8) && ap.aAJ(aAI), b2.eo.y2(player)) aC.ul(aAI, 1), aAC();
	else {
		for (a0y = !1, a0 = aAA.length - 1; 0 <= a0; a0--)
			if (b2.eo.y2(aAA[a0])) return a0y = !0, void aC.ul(player, 0);
		!a0y && player < a2.iq && 2 !== aX.y1[player] && aC.a0h(0, player, aAI)
	}
}

function aA6(player) {
	aX.kX[player] = aX.eu[player] = 0, aX.ez[player] = null, aX.fG[player] = null, aX.fH[player] = null, aX.fK[player] = null
}

function aA5(player) {
	for (var f5, fh, fg = aX.hL[player]; fg >= aX.hK[player]; fg--)
		for (fh = aX.hN[player]; fh >= aX.hM[player]; fh--) f5 = 4 * (fh * bI.eT + fg), aS.sm(player, f5) && (aS.sn(f5), aX.eq[player]--)
}

function cf() {
	var input;

	function aAK(d) {
		aAM(d.target.files)
	}

	function aAM(files) {
		files && 0 < files.length && ax.aAN(files[0])
	}

	function aAS(d) {
		var il = new Image;
		il.onload = aAT, il.src = d.target.result
	}

	function aAT(d) {
		var aAU, d = d.target,
			u = d.width,
			iF = d.height;
		4096 < u || 4096 < iF || u < 10 || iF < 10 ? (aAU = "Image w & h must be between 10 and 4096.", m.t ? m.t.showToast(aAU) : alert(aAU)) : (ay.we(), bI.s9 = bI.aAR(), bI.a82 = 0, bI.eT = u, bI.eU = iF, bI.ro.width = bI.eT, bI.ro.height = bI.eU,
			bI.rk.drawImage(d, 0, 0), aAU = bI.rk.getImageData(0, 0, bI.eT, bI.eU), bI.rp = aAU.data)
	}

	function aAV(d) {
		d.stopPropagation(), d.preventDefault()
	}

	function aAW() {
		return 0 === aP.vt() || 2 === aP.vt()
	}
	this.dE = function() {
		(input = document.createElement("input")).type = "file", input.setAttribute("accept", ".json, .png, .jpg, .gif, .jpeg"), input.onchange = aAK
	}, this.a8e = function() {
		input.click()
	}, this.aAL = function(d) {
		aAK(d)
	}, this.aAN = function(aAO) {
		var e6 = aAO.name.split("."),
			aAP = e6[e6.length - 1].toLowerCase();
		"json" === aAP ? ay.qe(aAO) : "gif" !== aAP && "jpg" !== aAP && "jpeg" !== aAP && "png" !== aAP || (bI.j9.s8[bI.aAR()].name = e6[0], (aAP = new FileReader).onload = aAS, aAP.readAsDataURL(aAO))
	}, this.wN = function(d) {
		aAW() && (aAV(d), d.dataTransfer.dropEffect = "copy")
	}, this.wO = function(d) {
		aAW() && (aAV(d), aAM(d.dataTransfer.files))
	}
}

function cd() {
	this.aAX = null, this.dE = function() {
		10 !== a2.jC ? this.aAX = null : this.aAX = new Uint32Array(a2.f2)
	}, this.hb = function() {
		10 === a2.jC && this.vz()
	}, this.vz = function() {
		for (var f5, target, a55, aAX = this.aAX, t1 = it, y6 = aX.eu, a0 = ir - 1; 0 <= a0; a0--)(f5 = t1[a0]) >= a2.iq || (target = Math.max(bB.em(y6[f5], 4), 2048), a55 = Math.max(aV.a56(f5), 100), aAX[f5] += bB.em(a55 * target, 1e4), aAX[
			f5] > target && (aAX[f5] = target))
	}, this.yB = function(player, ht) {
		return ht > this.aAX[player] ? (ht = this.aAX[player], this.aAX[player] = 0) : this.aAX[player] -= ht, ht
	}
}

function cg() {
	function aAS(d) {
		ay.j8 = !0, ay.aAd(JSON.parse(d.target.result)), ay.ud()
	}

	function aAj(oE, min, max, aAs) {
		return "string" != typeof oE || oE.length < min ? aAs : oE.length > max ? oE.substring(0, max) : oE
	}

	function aAe(ds, min, max) {
		return ds = "number" == typeof ds ? Math.floor(ds) : min, Math.min(Math.max(ds, min), max)
	}

	function aAh(ds, qc) {
		return "boolean" == typeof ds ? ds : qc
	}

	function aAl(ds, ey, max, aAu) {
		var a0, e6, ja;
		if (!Array.isArray(ds) || ds.length < 1) return null;
		for (e6 = new(8 === aAu ? Uint8Array : Uint16Array)(ey), ja = ds.length, a0 = 0; a0 < ey; a0++) e6[a0] = aAe(ds[a0 % ja], 0, max);
		return e6
	}
	this.j8 = !1, this.j9 = null, this.we = function() {
		this.j8 = !1, this.j9 = null
	}, this.a8b = function() {
		this.j9.a9L && this.j9.aAY && (this.j9.a9L[0] = b2.color.xb(bX.k9.qx())), a2.yw(this.j9.aAZ, 0, this.aAa(), this.j9.yz, !1, !1)
	}, this.aAa = function() {
		return [{
			name: this.j9.aAb ? bX.dW.data[122].value : this.j9.aAc[0],
			a8c: [0, 0, 0],
			a8d: 0
		}]
	}, this.qe = function(aAO) {
		var aAQ = new FileReader;
		aAQ.onload = aAS, aAQ.readAsText(aAO)
	}, this.aAd = function(oN) {
		this.j9 = {}, this.j9.a8Z = aAe(oN.numberPlayers, 1, 512), this.j9.aAf = aAe(oN.modeID, 0, 1), this.j9.s9 = aAe(oN["gMap.mapID"], 0, bI.aAg - 1), this.j9.a86 = aAe(oN.seedMap, 0, 16383), this.j9.aAZ = aAe(oN.seedSpawn, 0, 16383), this.j9
			.z2 = aAh(oN.selectableSpawn, !1), this.j9.aAb = aAh(oN.selectableName, !1), this.j9.aAY = aAh(oN.selectableColor, !1), bI.j9.s8[bI.aAR()].name = this.j9.aAi = aAj(oN.mapName, 1, 25, "Custom Map"), this.j9.a0M = function(ds) {
				var a0, ey;
				if (!Array.isArray(ds) || ds.length < 1) return [];
				for (ey = ds.length, a0 = 0; a0 < ey; a0++) ds[a0] = aAj(ds[a0], 0, 100, "");
				return ds
			}(oN.description), this.j9.sG = aAl(oN.playerX, this.j9.a8Z, 4096, 16), this.j9.sR = aAl(oN.playerY, this.j9.a8Z, 4096, 16), this.j9.aAm = aAl(oN.playerTeam, this.j9.a8Z, 8, 8), this.j9.jA = aAl(oN.playerStrength, this.j9.a8Z, 5, 8),
			this.j9.a9L = function(ds, ey) {
				var a0, e6, ja;
				if (!Array.isArray(ds) || ds.length < 1) return null;
				for (e6 = new Array(ey), ja = ds.length, a0 = 0; a0 < ey; a0++) e6[a0] = aAl(ds[a0 % ja], 3, 63, 8);
				return e6
			}(oN.playerColor, this.j9.a8Z), this.j9.aAc = function(ds, ey) {
				var a0, e6, ja;
				if (!Array.isArray(ds) || ds.length < 1) return null;
				for (e6 = new Array(ey), ja = ds.length, a0 = 0; a0 < ey; a0++) e6[a0] = aAj(ds[a0 % ja], 3, 26, "Bot");
				return e6
			}(oN.playerName, this.j9.a8Z), this.j9.aAp = "string" == typeof oN.mapBase64 ? oN.mapBase64 : "", this.j9.aAb = this.j9.aAb || !this.j9.aAc, this.j9.yz = 0 === this.j9.aAf ? 7 : 2 === this.j9.aAf ? 9 : 6, this.j9.sG = this.j9.sR ?
			this.j9.sG : null
	}, this.ud = function() {
		! function(oE) {
			var gM, gJ, aAr = "data:image/png;base64,";
			if (oE.length <= aAr.length) return;
			ay.j9.s9 = 0, ay.j9.a86 = 0, bI.w(0, 0), oE.substring(0, aAr.length) !== aAr && (oE = aAr + oE);
			return (gM = new Image).onload = function() {
				bI.eT = gM.width, bI.eU = gM.height, 4096 < bI.eT || 4096 < bI.eU || bI.eT < 10 || bI.eU < 10 ? (bI.w(0, 0), alert("Image w & h must be between 10 and 4096.")) : (bI.s9 = bI.aAR(), bI.a82 = 0, bI.ro.width = bI.eT, bI.ro
					.height = bI.eU, bI.rk.drawImage(gM, 0, 0), gJ = bI.rk.getImageData(0, 0, bI.eT, bI.eU), bI.rp = gJ.data)
			}, gM.src = oE, ay.j9.aAp = "", 1
		}(this.j9.aAp) && bI.w(this.j9.s9, this.j9.a86)
	}, this.aAv = function() {
		for (var max = 0, ey = this.j9.a8Z, a0 = 0; a0 < ey; a0++) this.j9.aAm[a0] > max && (max = this.j9.aAm[a0]);
		return Math.max(0, max - 1)
	}
}

function cD() {
	var aAw, aAx, size, hs, ht, id, aAy;

	function aAz(player) {
		return player < a2.iq ? aAw * player : aAw * a2.iq + aAx * (player - a2.iq)
	}
	this.dE = function() {
		aAw = a2.iq < 16 ? 12 : 8, aAx = 4;
		var ey = aAz(a2.f2);
		size = new Uint8Array(a2.f2), hs = new Uint16Array(ey), ht = new Uint32Array(ey), id = new Uint16Array(ey), aAy = new Uint8Array(ey)
	}, this.o5 = function(a1x, aB0) {
		var aB1 = this.fc(a1x, aB0);
		this.fb(a1x, aB0, 0), aB1 = b2.eo.nN(a1x, aB1), a1x === a2.et && (bR.ew[13] -= aB1)
	}, this.clear = function(player) {
		size[player] = 0
	}, this.aAG = function(player, aB0) {
		var aB3, aB0 = function(player, aB0) {
			var a0, ja = aAz(player);
			for (a0 = size[player] - 1; 0 <= a0; a0--)
				if (0 === id[ja + a0] && hs[ja + a0] === aB0) return a0;
			return size[player]
		}(player, aB0);
		aB0 !== size[player] && (aB3 = ht[aAz(player) + aB0], this.ex(player, aB0), this.hp(player, aB3, a2.f2))
	}, this.i7 = function(player, aB0) {
		for (var ja = aAz(player), a0 = size[player] - 1; 0 <= a0; a0--)
			if (0 === id[ja + a0] && hs[ja + a0] === aB0) return !0;
		return !1
	}, this.iQ = function(player) {
		return player < a2.iq ? size[player] < aAw : size[player] < aAx
	}, this.eY = function(player) {
		return size[player]
	}, this.ee = function(player, a0) {
		return hs[aAz(player) + a0]
	}, this.eZ = function(player, a0) {
		return id[aAz(player) + a0]
	}, this.l1 = function(player, aB4) {
		for (var ja = aAz(player), a0 = size[player] - 1; 0 <= a0; a0--)
			if (id[ja + a0] === aB4) return a0;
		return -1
	}, this.ef = function(player, a0) {
		return ht[aAz(player) + a0]
	}, this.fc = function(player, aB0) {
		for (var ja = aAz(player), a0 = size[player] - 1; 0 <= a0; a0--)
			if (0 === id[ja + a0] && hs[ja + a0] === aB0) return ht[ja + a0];
		return 0
	}, this.aAF = function(player) {
		for (var ja = aAz(player), ds = 0, a0 = size[player] - 1; 0 <= a0; a0--) ds += ht[ja + a0];
		return ds
	}, this.aB5 = function(player) {
		for (var ja = aAz(player), ds = 0, a0 = size[player] - 1; 0 <= a0; a0--) 0 === id[ja + a0] && (ds += ht[ja + a0]);
		return ds
	}, this.a9z = function(player) {
		for (var ja = aAz(player), jM = 0, a0 = size[player] - 1; 0 <= a0; a0--) 0 < id[ja + a0] && jM++;
		return jM
	}, this.fb = function(player, aB0, aB3) {
		for (var ja = aAz(player), a0 = size[player] - 1; 0 <= a0; a0--) 0 === id[ja + a0] && hs[ja + a0] === aB0 && (ht[ja + a0] = aB3)
	}, this.fN = function(player, a0, aB3) {
		ht[aAz(player) + a0] = Math.max(aB3, 0)
	}, this.fO = function(player, a0) {
		aAy[aAz(player) + a0] = 0
	}, this.eg = function(player, a0) {
		return aAy[aAz(player) + a0]
	}, this.hp = function(player, aB3, aB0) {
		var a0, ja = aAz(player);
		for (aB0 === a2.et && bR.ew[player < a2.iq ? 6 : 5]++, a0 = size[player] - 1; 0 <= a0; a0--)
			if (0 === id[ja + a0] && hs[ja + a0] === aB0) return ht[ja + a0] += aB3, void(ht[ja + a0] = ht[ja + a0] > a2.y7 ? a2.y7 : ht[ja + a0]);
		hs[ja + size[player]] = aB0, ht[ja + size[player]] = aB3, id[ja + size[player]] = 0, aAy[ja + size[player]] = 1, size[player]++, player < a2.iq && (aB0 === a2.et ? aC.ul(player, 5) : player === a2.et && aW.a0j(aB0))
	}, this.aB6 = function(player, aB3, aB4) {
		var ja = aAz(player);
		aX.kX[player] = 2, hs[ja + size[player]] = 0, ht[ja + size[player]] = aB3, id[ja + size[player]] = aB4, aAy[ja + size[player]] = 0, size[player]++
	}, this.ex = function(player, kf) {
		var hz, ja;
		if (0 !== size[player])
			for (ja = aAz(player), size[player]--, hz = kf; hz < size[player]; hz++) hs[ja + hz] = hs[ja + hz + 1], ht[ja + hz] = ht[ja + hz + 1], id[ja + hz] = id[ja + hz + 1], aAy[ja + hz] = aAy[ja + hz + 1]
	}, this.aAB = function(player) {
		for (var hz, ja, aAA = [], a0 = ir - 1; 0 <= a0; a0--)
			for (ja = aAz(it[a0]), hz = size[it[a0]] - 1; 0 <= hz; hz--)
				if (0 === id[ja + hz] && hs[ja + hz] === player) {
					aAA.push(it[a0]);
					break
				} return aAA
	}
}

function cE() {
	var aB7, aB8, aB9, aBA, aBB, aBC;
	this.dE = function() {
		aB9 = aB7 = 10, aBA = aB8 = 10
	}, this.dK = function() {
		aBC = 512, aBB = new Uint16Array(aBC);
		for (var a0 = 0; a0 < aBC; a0++) aBB[a0] = 100 + aBD(bB.em(25600 * a0, aBC - 4), 9)
	}, this.a3t = function() {
		return aBA
	}, this.hb = function() {
		if (--aB9 <= 0 && (aB9 = aB7, function() {
				var a0, aBI, dq = aX.eu[a2.et];
				for (a2.jE && !a2.hm && 0 !== aX.kX[0] && 0 === aQ.jG[0].f7 && (aX.eu[0] += bB.em(aX.eq[0], 6)), a0 = ir - 1; 0 <= a0; a0--) aBI = bB.em(aV.a56(it[a0]) * aX.eu[it[a0]], 1e4), aX.eu[it[a0]] += aBI < 1 ? 1 : aBI, aV.ev(it[a0]);
				bR.ew[9] += aX.eu[a2.et] - dq
			}(), --aBA <= 0)) {
			aBA = aB8;
			for (var dq = aX.eu[a2.et], a0 = ir - 1; 0 <= a0; a0--) aX.eu[it[a0]] += aX.eq[it[a0]], aV.ev(it[a0]);
			bR.ew[8] += aX.eu[a2.et] - dq
		}
	}, this.a56 = function(player) {
		var gP = aBB[bB.em((aBC - 1) * aX.eq[player], a2.iW)],
			aBH = (bT.er() < 1920 && (gP = gP < (aBH = bB.em(100 * (13440 - 6 * bT.er()), 1920)) ? aBH : gP), this.iS(player));
		return aX.eu[player] > aBH && (gP -= bB.em(2 * gP * (aX.eu[player] - aBH), aBH)), gP < 0 ? 0 : 700 < gP ? 700 : gP
	}, this.iS = function(player) {
		player = 100 * aX.eq[player];
		return player > a2.ys ? a2.ys : player
	}, this.ev = function(player) {
		var ds = aX.eq[player] * a2.ix;
		aX.eu[player] = Math.min(Math.min(aX.eu[player], a2.y7), ds)
	}, this.mz = function(player, n0) {
		b2.eo.nN(n0, bE.dx[0]), bR.nO(player, n0), aW.aBK(player, bE.dx[0] + bE.dx[1]), aW.nP(n0, bE.dx[0]), b2.eo.nw(player)
	}, this.aBL = function() {
		for (var ey = ir, t1 = it, ja = 0, y6 = aX.eu, a0 = 0; a0 < ey; a0++) ja += y6[t1[a0]];
		return ja
	}, this.aBM = function(vY) {
		for (var f5, ey = ir, t1 = it, ja = 0, y6 = aX.eu, im = bU.im, a0 = 0; a0 < ey; a0++) im[f5 = t1[a0]] === vY && (ja += y6[f5]);
		return ja
	}
}

function cG() {
	var aBN, aBO, aBP, aBQ, aBR, aBS, aBT, aBU, aBV, aBW, aBX, aBY, aBZ, aBa, aBb, aBc, aBd, aBe, aBg, aBh, a61, aBi, aBj, aBp, aBq, aBf = null,
		aBl = 0,
		aBm = !1,
		aBn = new Float32Array(4),
		aBo = 0,
		a4M = 400;

	function oX() {
		aBV = Math.floor(+an.oV), aBW = Math.floor(.5 * aBV), aBf.width = an.u, aBf.height = an.iF, aBg = aBf.getContext("2d", {
			alpha: !0
		}), b2.ku.textAlign(aBg, 1), b2.ku.textBaseline(aBg, 1), aBg.imageSmoothingEnabled = !0
	}

	function aBr() {
		var a0, aBw;
		for (kv.font = b2.ku.kz(1, 100 * aBX), aBw = 80 / Math.floor(kv.measureText(b2.l2.l3(a2.y7)).width), kv.font = b2.ku.kz(1, 100), a0 = a2.f2 - 1; 0 <= a0; a0--) aBU[a0] = 100 / Math.floor(kv.measureText(aX.l4[a0]).width), aBT[a0] = Math.min(
			aBw, aBU[a0])
	}

	function aBx(a0) {
		return !bX.dW.data[7].value || aX.eu[a0] < 1e6 ? 1 : aX.eu[a0] < 1e7 ? aBn[0] : aBn[Math.min(Math.floor(Math.log10(aX.eu[a0])) - 6, 3)]
	}

	function aBv(gN) {
		aBe = !1, aBd = 1, aBb = aBc = 0, gN.clearRect(0, 0, an.u, an.iF);
		for (var kn, ko, a0, aC2, fontSize, kp, kq = h7 / h8, kr = h9 / h8, ks = (an.u + h7) / h8, kt = (an.iF + h9) / h8, aC3 = 0 !== aX.kX[a2.et] && aS.uS(a2.et), hz = ir - 1; 0 <= hz; hz--) a0 = it[hz], (fontSize = Math.floor(aBa * h8 * aBx(a0) *
			aBT[a0] * aBR[a0])) < aBZ || aBV <= fontSize || aBP[a0] + aBR[a0] > kq && aBP[a0] < ks && aBQ[a0] + aBS[a0] > kr && aBQ[a0] < kt && (kn = Math.floor(an.u * (aBP[a0] + aBR[a0] / 2 - kq) / (ks - kq)), ko = Math.floor(an.iF * (aBQ[a0] +
			aBS[a0] / 2 - kr) / (kt - kr) - .1 * fontSize), aC2 = aS.a2P[a0], gN.font = b2.ku.kz(1 === aX.y1[a0] ? 4 : 1, fontSize), gN.fillStyle = aC4(fontSize, aC2 % 2), bX.dW.data[7].value ? aC5(gN, a0, fontSize, kn, ko, aC2) : aC6(a0,
			fontSize, kn, ko, gN), aBe = !0, 0 < a61[a0] ? function(kn, ko, fontSize, a0, gN) {
			0 === iX[a0] ? aa.tB.tp(aBh[a0]) ? (function(kn, ko, fontSize, player, nB, gN) {
				for (var sK = ko, gL = (gN.globalAlpha = aCE(fontSize), aBx(player) * (bX.dW.data[7].value ? aBo : aBU[player])), sJ = kn - .5 * fontSize / gL - .9 * fontSize, i5 = 0; i5 < 2; i5++) gN.fillText(aa.tB.tj(nB), sJ, sK),
					sJ = kn + .5 * fontSize / gL + .9 * fontSize;
				gN.globalAlpha = 1
			}(kn, ko, fontSize, a0, aBh[a0], gN), aC8(kn, ko, fontSize, 0, 0, gN)) : aa.tB.tr(aBh[a0]) ? (aCH(kn, ko, fontSize, aBh[a0], 0, gN), aC8(kn, ko, fontSize, 0, 1, gN)) : (aCH(kn, ko, fontSize, aBh[a0], 1, gN), aC8(kn, ko,
				fontSize, 1, 0, gN)) : aCH(kn, ko, fontSize, aBh[a0], 0, gN)
		}(kn, ko, fontSize, a0, gN) : 0 === iX[a0] && aC8(kn, ko, fontSize, 0, 0, gN), aC3 && (0 < a61[a0 + a2.f2] || 0 < a61[a0 + 2 * a2.f2] || 0 < a61[a0 + 3 * a2.f2] || 0 < a61[a0 + 4 * a2.f2]) && function(kn, ko, fontSize, a0, gN) {
			var il, jM = -1;
			for (il = 4; 1 <= il; il--) 0 < a61[a0 + il * a2.f2] && jM++;
			for (il = 1; il < 5; il++) 0 < a61[a0 + il * a2.f2] && (! function(kn, ko, fontSize, il, a0, aCC, dq, gN) {
				var xW;
				if (1 === il) {
					a0 = aBh[a0 + a2.f2];
					if (!aa.tB.tq(a0)) return function(kn, ko, fontSize, nB, aCC, gN) {
						gN.globalAlpha = aCE(fontSize);
						kn -= .534 * aCC * fontSize, aCC = ko + 1.59 * fontSize;
						gN.font = b2.ku.kz(0, .785 * fontSize), gN.fillText(aa.tB.tj(nB), kn, aCC), gN.globalAlpha = 1
					}(kn, ko, fontSize, a0, aCC, gN);
					xW = aa.rr.tI[a0 - 1024 + aa.tB.tT]
				} else xW = 2 === il ? aA.zQ()[4].gM[+(dq < 255)] : (3 === il ? aA.zQ()[5] : aA.zQ()[6]).gM[0];
				a0 = aa.rr.tJ, dq = .8 * fontSize / a0, il = kn - .5 * dq * a0 - .534 * aCC * fontSize, kn = ko + 1.4 * dq * a0;
				gN.setTransform(dq, 0, 0, dq, il, kn), gN.globalAlpha = aCE(fontSize), gN.drawImage(xW, 0, 0), gN.globalAlpha = 1, gN.setTransform(1, 0, 0, 1, 0, 0)
			}(kn, ko, fontSize, il, a0, jM, a61[a0 + il * a2.f2], gN), jM -= 2)
		}(kn, ko, fontSize, a0, gN), (kp = aBX * fontSize) < aBZ || (gN.font = b2.ku.kz(1, kp), ko += Math.floor(.78 * fontSize), bX.dW.data[7].value ? aC6(a0, kp, kn, ko, gN) : aC5(gN, a0, kp, kn, ko, aC2)))
	}

	function aC6(a0, fontSize, fg, fh, gN) {
		var ___id = a0;
		gN.fillText(aX.l4[a0], fg, fh), a0 < a2.iq && 2 !== aX.y1[a0] || (a0 = fontSize / aBU[a0], gN.fillRect(fg - .5 * a0, fh + b2.ku.tk * fontSize, a0, Math.max(1, .1 * fontSize)));
		bX.dW.data[7].value && settings.showPlayerDensity && (settings.coloredDensity && (gN.fillStyle = utils.textStyleBasedOnDensity(___id)), gN.fillText(utils.getDensity(___id), fg, fh + fontSize));
	}

	function aC5(gN, a0, fontSize, kn, ko, aC2) {
		var ___id = a0;
		a0 = b2.l2.l3(aX.eu[a0]);
		aC2 >> 1 & 1 ? (gN.lineWidth = .05 * fontSize, gN.strokeStyle = aC4(fontSize, aC2 % 2), gN.strokeText(a0, kn, ko)) : (1 < aC2 && (gN.lineWidth = .12 * fontSize, gN.strokeStyle = aC4(fontSize, aC2), gN.strokeText(a0, kn, ko)), gN.fillText(a0,
			kn, ko));
		bX.dW.data[7].value || settings.showPlayerDensity && (settings.coloredDensity && (gN.fillStyle = utils.textStyleBasedOnDensity(___id)), gN.fillText(utils.getDensity(___id), kn, ko + fontSize))
	}

	function aC8(kn, ko, fontSize, aCC, aCD, gN) {
		var zz = .95 * fontSize / aBj,
			kn = kn - .5 * zz * aBi + .8 * aCC * fontSize,
			aCC = ko - 1.76 * zz * aBj - (.35 - b2.ku.tk + .7) * aCD * fontSize;
		gN.setTransform(zz, 0, 0, zz, kn, aCC), gN.globalAlpha = aCE(fontSize), gN.drawImage(aR.get(4), 0, 0), gN.globalAlpha = 1, gN.setTransform(1, 0, 0, 1, 0, 0)
	}

	function aCH(kn, ko, fontSize, nB, aCC, gN) {
		var gG, sJ, zz;
		gN.globalAlpha = aCE(fontSize), aa.tB.tq(nB) ? (gG = aa.rr.tJ, gN.setTransform(zz = 1.1 * fontSize / gG, 0, 0, zz, sJ = kn - .5 * zz * gG - .8 * aCC * fontSize, zz = ko - 1.55 * zz * gG), gN.drawImage(aa.rr.tI[nB - 1024 + aa.tB.tT], 0, 0), gN
			.setTransform(1, 0, 0, 1, 0, 0)) : (sJ = kn - .8 * aCC * fontSize, zz = ko - (.35 - b2.ku.tk + 1) * fontSize, gN.fillText(aa.tB.tj(nB), sJ, zz)), gN.globalAlpha = 1
	}

	function aC4(fontSize, aC2) {
		return aBW <= fontSize && fontSize < aBV ? bU.aCJ[aC2] + aCE(fontSize).toFixed(3) + ")" : bU.aCK[aC2]
	}

	function aCE(fontSize) {
		return aBW <= fontSize && fontSize < aBV ? 1 - (fontSize - aBW) / (aBV - aBW) : 1
	}

	function aCT(gL, u) {
		return 1 + Math.floor(aBY * gL * u)
	}

	function aCQ(a0) {
		for (var left = aBP[a0], hz = aBP[a0] - aX.hK[a0] - 1; 0 <= hz; hz--)
			if (!aCU(a0, --left, aBQ[a0], aBS[a0])) {
				left++;
				break
			} var right = aBP[a0];
		for (hz = aX.hL[a0] - aBP[a0] - aBR[a0]; 0 <= hz; hz--)
			if (!aCU(a0, ++right + aBR[a0] - 1, aBQ[a0], aBS[a0])) {
				right--;
				break
			} var fg = Math.floor((left + right) / 2),
			top = aBQ[a0];
		for (hz = aBQ[a0] - aX.hM[a0] - 1; 0 <= hz; hz--)
			if (!aCV(a0, fg, --top, aBR[a0])) {
				top++;
				break
			} var bottom = aBQ[a0];
		for (hz = aX.hN[a0] - aBQ[a0] - aBS[a0]; 0 <= hz; hz--)
			if (!aCV(a0, fg, ++bottom + aBS[a0] - 1, aBR[a0])) {
				bottom--;
				break
			} var fh = Math.floor((top + bottom) / 2);
		aCN(a0, fg, fh, aBR[a0], aBS[a0]) && (aBP[a0] = fg, aBQ[a0] = fh)
	}

	function aCN(player, fg, fh, u, iF) {
		f7 = Math.floor(.2 * u);
		for (var f7, il = fg + u - 1; fg <= il; il--)
			if (!aCU(player, il, fh, iF)) return;
		for (il = fh + iF - 1 - (f7 = (f7 = Math.floor(.25 * iF)) < 1 ? 1 : f7); fh + f7 <= il; il--)
			if (!aCV(player, fg, il, u)) return;
		return 1
	}

	function aCU(player, fg, fh, iF) {
		return aS.sm(player, 4 * (fh * bI.eT + fg)) && aS.sm(player, 4 * ((fh + iF - 1) * bI.eT + fg))
	}

	function aCV(player, fg, fh, u) {
		return aS.sm(player, 4 * (fh * bI.eT + fg)) && aS.sm(player, 4 * (fh * bI.eT + fg + u - 1))
	}
	this.dE = function() {
		if (a4M = 0 === (a4M = bX.dW.data[11].value) ? 280 : 1 === a4M ? 187 : 112, aBe = !1, aBa = .88, aBX = .5, aBY = 1.8, aBZ = 12 - 3 * bX.dW.data[9].value, aBO = aBN = 0, aBP = new Uint16Array(a2.f2), aBQ = new Uint16Array(a2.f2), aBR =
			new Uint16Array(a2.f2), aBS = new Uint16Array(a2.f2), aBT = new Float32Array(a2.f2), aBU = new Float32Array(a2.f2), aBh = new Uint16Array(2 * a2.f2), a61 = new Uint8Array(5 * a2.f2), aBp = new Uint8Array(a2.f2), aBq = new Uint8Array(
				a2.f2), aBf = aBf || document.createElement("canvas"), oX(), aBc = aBb = 0, aBd = 1, bX.dW.data[7].value) {
			var a0, aBw;
			for (aBr(), kv.font = b2.ku.kz(1, 100), aBw = 100 / Math.floor(kv.measureText("900 000").width), a0 = a2.f2 - 1; 0 <= a0; a0--) aBT[a0] = Math.min(aBw, 2 * aBU[a0]);
			aBo = aBw, aBn[0] = 100 / (aBw * Math.floor(kv.measureText("5 000 000").width)), aBn[1] = 100 / (aBw * Math.floor(kv.measureText("50 000 000").width)), aBn[2] = 100 / (aBw * Math.floor(kv.measureText("500 000 000").width)), aBn[3] =
				100 / (aBw * Math.floor(kv.measureText("1 000 000 000").width))
		} else aBr();
		! function() {
			var a0;
			for (a0 = a2.f2 - 1; 0 <= a0; a0--) aX.eq[a0] < 12 ? (aBP[a0] = aX.hK[a0] + 1, aBQ[a0] = aX.hM[a0] + 1, aBR[a0] = 1, aBS[a0] = 1) : (aBP[a0] = aX.hK[a0], aBQ[a0] = aX.hM[a0] + 1, aBR[a0] = 4, aBS[a0] = 2);
			if (a2.g0)
				for (a0 = 0; a0 < a2.iq; a0++) aBR[a0] = 0;
			aBi = aR.get(4).width, aBj = aR.get(4).height
		}()
	}, this.aBK = function(f5, a10) {
		a10 > 18 * aX.eq[f5] ? (aBq[f5] = 6, aS.a2P[f5] = 2 + aS.a2P[f5] % 2) : (aBp[f5] = 4, (aS.a2P[f5] < 2 || 3 < aS.a2P[f5]) && (aS.a2P[f5] = 6 + aS.a2P[f5] % 2))
	}, this.nP = function(f5, a10) {
		a10 > 6 * aX.eq[f5] ? (aBq[f5] = 6, aS.a2P[f5] = 4 + aS.a2P[f5] % 2) : (aBp[f5] = 4, (aS.a2P[f5] < 4 || 5 < aS.a2P[f5]) && (aS.a2P[f5] = 8 + aS.a2P[f5] % 2))
	}, this.resize = function() {
		oX(), aBv(aBg)
	}, this.yo = function() {
		for (var a0 = 0; a0 < a2.iq; a0++) aX.hL[a0] - aX.hK[a0] != 3 || aX.hN[a0] - aX.hM[a0] != 3 ? (aBP[a0] = aX.hK[a0] + (aX.hL[a0] !== aX.hK[a0] ? 1 : 0), aBQ[a0] = aX.hM[a0], aBR[a0] = 1, aBS[a0] = 1) : (aBP[a0] = aX.hK[a0], aBQ[a0] = aX
			.hM[a0] + 1, aBR[a0] = 4, aBS[a0] = 2)
	}, this.o7 = function(player, kf, aBy) {
		! function(player, kf, aBy) {
			player += kf * a2.f2;
			0 === kf ? aBh[player] === aBy && 0 < a61[player] ? a61[player] = 0 : (aBh[player] = aBy, a61[player] = aa.tB.tp(aBy) ? 255 : 64) : 1 === kf ? (a61[player] = 64, aBh[player] = aBy) : a61[player] = aBy
		}(player, kf, aBy), 2 === a2.uZ && this.kH(!0)
	}, this.kl = function() {
		aBe && (1 !== aBd ? (kv.imageSmoothingEnabled = !0, kv.setTransform(aBd, 0, 0, aBd, 0, 0), kv.drawImage(aBf, -aBb / aBd, -aBc / aBd), kv.setTransform(1, 0, 0, 1, 0, 0), kv.imageSmoothingEnabled = !1) : kv.drawImage(aBf, -aBb, -aBc))
	}, this.a39 = function(gs, gv) {
		aBb += gs, aBc += gv
	}, this.wF = function(gs, gv) {
		aW.a39(gs, gv)
	}, this.zoom = function(xE, jm, jn) {
		aBd *= xE, aBb = (aBb + jm) * xE - jm, aBc = (aBc + jn) * xE - jn
	}, this.kH = function(bb) {
		return !(!aBm && !bb && bT.dp < aBl + (1 === aBd && 0 === aBb && 0 === aBc && (a2.zF() || a2.g0 || 2 === a2.uZ) ? 1e3 : a4M) || (aBm = !1, aBl = bT.dp, aBv(aBg), 0))
	}, this.ky = function(a0) {
		return aBx(a0) * aBT[a0]
	}, this.aC1 = function(player) {
		return aBT[player]
	}, this.hb = function() {
		bT.er() % 10 == 9 && (aBm = a2.zH() && !a2.zF()), !a2.zF() && 4 <= ++aBO && function() {
			var a0, hz, i5;
			for (aBO = 0, i5 = 4; 1 <= i5; i5--)
				for (hz = ir - 1; 0 <= hz; hz--) a0 = it[hz] + i5 * a2.f2, 0 < a61[a0] && a61[a0] < 255 && a61[a0]--;
			if (2 !== a2.uZ)
				for (hz = ir - 1; 0 <= hz; hz--) a0 = it[hz], 0 < a61[a0] && a61[a0] < 255 && a61[a0]--
		}();
		for (var ey = Math.floor(.1 * ir), a0 = aBN + (ey = ir < (ey = ey < 8 ? 8 : ey) ? ir : ey) - 1; aBN <= a0; a0--) ! function(a0) {
			var gL = aBx(a0) * aBT[a0];
			0 < aBR[a0] && aCN(a0, aBP[a0], aBQ[a0], aBR[a0], aBS[a0]) ? ! function(a0) {
				for (var fg, fh, u, iF, fx = !1, i5 = 0; i5 < 8; i5++) {
					if (u = aBR[a0] + 2, iF = aBS[a0] + 2, u > aX.hL[a0] - aX.hK[a0] + 1 || iF > aX.hN[a0] - aX.hM[a0] + 1) return fx;
					if (fg = aBP[a0] - 1, fh = aBQ[a0] - 1, !aCN(a0, fg, fh, u, iF)) return fx;
					aBP[a0] = fg, aBQ[a0] = fh, aBR[a0] = u, aBS[a0] = iF, fx = !0
				}
				return fx
			}(a0) && function(a0, gL) {
				for (var fg, fh, u, iF, fx = !1, a6A = aBR[a0], lZ = 1 + Math.floor(.02 * a6A), i5 = 1; i5 < 5; i5++) {
					if ((u = a6A + i5 * lZ) > aX.hL[a0] - aX.hK[a0] + 1) return fx;
					if ((iF = aCT(gL, u)) > aX.hN[a0] - aX.hM[a0] + 1) return fx;
					fg = aX.hK[a0] + Math.floor(Math.random() * (aX.hL[a0] - aX.hK[a0] + 2 - u)), fh = aX.hM[a0] + Math.floor(Math.random() * (aX.hN[a0] - aX.hM[a0] + 2 - iF)), aCN(a0, fg, fh, u, iF) && (aBP[a0] = fg, aBQ[a0] = fh, aBR[
						a0] = u, aBS[a0] = iF, fx = !0)
				}
				return fx
			}(a0, gL) && aCQ(a0) : ! function(a0, gL) {
				var iF, fg = aBP[a0] + 1,
					fh = aBQ[a0] + 1,
					u = aBR[a0] - 2;
				for (;;) {
					if (u < 1) {
						aBR[a0] = 0;
						break
					}
					if (iF = aCT(gL, u), aCN(a0, fg, fh, u, iF)) return aBP[a0] = fg, aBQ[a0] = fh, aBR[a0] = u, aBS[a0] = iF, 1;
					fg++, fh++, u -= 2
				}
				return
			}(a0, gL) ? function(a0, gL) {
				var fg, fh, u, iF, i5, le, i1 = aX.hL[a0] - aX.hK[a0] + 1,
					k0 = Math.floor(.02 * i1);
				for (le = -6 * (k0 = k0 < 1 ? 1 : k0), i5 = i1; le <= i5; i5 -= k0)
					if (iF = aCT(gL, u = 0 < i5 ? i5 : 1), fg = aX.hK[a0] + Math.floor(Math.random() * (aX.hL[a0] - aX.hK[a0] + 2 - u)), fh = aX.hM[a0] + Math.floor(Math.random() * (aX.hN[a0] - aX.hM[a0] + 2 - iF)), aCN(a0, fg, fh, u,
						iF)) return aBP[a0] = fg, aBQ[a0] = fh, aBR[a0] = u, aBS[a0] = iF
			}(a0, gL) : aCQ(a0)
		}(it[a0 % ir]);
		aBN = (aBN + ey) % ir
	}, this.kC = function() {
		var a0, f5, gZ, ga;
		if (bT.er() % 4 == 1)
			for (a0 = ir - 1; 0 <= a0; a0--) f5 = it[a0], aS.a2P[f5] < 2 || ((gZ = Math.max(aBp[f5] - 1, 0)) === (ga = Math.max(aBq[f5] - 1, 0)) ? 0 === gZ && (aS.a2P[f5] %= 2) : 0 === ga && aS.a2P[f5] < 6 && (aS.a2P[f5] += 4), aBp[f5] = gZ, aBq[
				f5] = ga)
	}, this.a0j = function(player) {
		var a0 = player + 2 * a2.f2,
			dq = a61[a0];
		return 0 < dq && (aC.ug(50, player), a61[a0] = 0, 255 === dq)
	}, this.zj = function(player) {
		return 255 === a61[player + 2 * a2.f2]
	}
}

function cI() {
	var uw, aCW;
	this.dE = function() {
		uw = "Abbasid Caliphate;Aceh s;Achaemenid Z;Afsharid z;Aghlabid Emirate;Ahom z;Akkadian Z;Aksumite Z;Akwamu;Alaouite z;Almohad Caliphate;Almoravid z;Angevin Z;Aq Qoyunlu;Armenian Z;Assyria;Ashanti Z;Austrian Z;Austria-Hungary;Ayyubid z;Aztec Z;Aulikara Z;Babylonian Z;Balhae;Banten s;S Banjar;Bamana Z;Bengal s;Benin Z;Kadamba z;Bornu Z;E Brazil;Britannic Z;British Z;British Raj;Bruneian Z;Bukhara Z;Burgundian State;Buyid z;Byzantine Z;Caliphate of Córdoba;Cao Wei;Carthaginian Z;Cebu Rajahnate;Chagatai Khanate;Chalukya z;Chauhan z;Chavín Z;Chenla;Chera z;Chola z;Comanche Z;Congo Free State;Crimean Khanate;Dacian Z;Delhi s;Demak s;Durrani Z;Dutch Z;Egyptian Z;Elamite Z;Exarchate of Africa;Abyssinia;Fatimid Caliphate;First French Z;Frankish Z;Funan;Gallic Z;Gaza Z;Republic of Genoa;German Z;Ghana Z;Ghaznavid z;Ghurid z;Goguryeo;Goryeo;Gorkha Z;Göktürk Khaganate;Golden Horde;S Gowa;Seljuq Z;Gupta Z;Hafsid Y;Han z;Hanseatic League;E Harsha;Hephthalite Z;Hittite Z;Holy Roman Z;Hotak z;Hoysala Z;Hunnic Z;Husainid z;Idrisid z;Ilkhanate;K Israel;K Judah;Inca Z;Italian Z;E Japan;Jin z;Johor Z;Jolof Z;Joseon;Kaabu Z;Kachari Y;Kalmar Union;Kanem Z;Kanva z;Kara-Khanid Khanate;Kazakh Khanate;Khazar Khaganate;Khmer Z;Khilji z;Khwarazmian z;Kievan Rus';Konbaung z;Kong Z;Korean Z;Kushan Z;K Kush;Lakota;Latin Z;Later Lê z;Liao z;Lodi s;Khmer Z;Macedonian Z;Majapahit Z;Mali Z;Malacca Z;Mamluk s;Manchukuo;Maratha Z;Marinid z;Massina Z;Mataram s;Mauretania;Mauryan Z;Median Z;Mlechchha z;Ming z;Mitanni Z;Mongol Z;Mughal Z;Nanda Z;Nguyễn z;North Sea Z;E Nicaea;Numidia;Omani Z;Ottoman Z;Oyo Z;Pagan Z;Pahlavi z;Pala Z;Palmyrene Z;Parthian Z;Pontic Z;Portuguese Z;K Prussia;Ptolemaic Z;Qajar z;Qara Qoyunlu;Qin z;Qing z;Ramnad Sethupathis;Rashidun Caliphate;Rashtrakuta z;Roman Z;Rouran Khaganate;Rozwi Z;Rustamid z;Russian Z;Tsardom of Russia;Saadi z;Safavid z;Saffarid z;Sassanid z;Satavahana z;Samanid Z;Soviet Union;Saudeleur z;Duchy of Savoy;Seleucid Z;Serbian Z;Shu Han;Shang z;Siam Z;Sikh Z;Singhasari;Sokoto Caliphate;Song z;Songhai Z;Spanish Z;Srivijaya Z;Sui z;K Mysore;Shunga Z;S Sulu;Sumer;Sur Z;Swedish Z;Tahirid z;Tang z;Tây Sơn z;S Ternate;E Thessalonica;German Reich;Tibetan Z;Tondo z;S Tidore;Timurid Z;K Tlemcen;E Trebizond;Toltec Z;Toungoo z;Toucouleur Z;Tu'i Tonga Z;Turgesh Khaganate;Umayyad Caliphate;Uyunid Emirate;Uyghur Khaganate;Uzbek Khanate;Vandal Y;Vijayanagara Z;Republic of Venice;Wari Z;Wassoulou Z;Wattasids;Western Roman Z;Eastern Wu;Western Xia z;Xin z;Yuan z;Zand z;Zhou z;Zulu Z;Yugoslavia;Kosovo;Sikkim;Kanem–Bornu Z;Wadai Z;Ethiopian Z;Rozvi Z;Sasanian Z;E Vietnam;Shilluk Y;K Aksum;Gwiriko Y;Toro Y;Malindi Y;K Loango;K Mapungubwe;Ryukyu Y;K Cyprus;K Jerusalem;Garhwal Y;K Nepal;K Cambodia;Champa Y;Hanthawaddy Y;Phayao Y;K Sardinia;K Sicily;K Gwynedd;K Scotland;K Desmond;K Poland;K Hungary;K Croatia;K Bohemia;Albanian Y;K Georgia;K Portugal;Khanate of Sibir;K Romania;Cossack Hetmanate;Duchy of Bouillon;K Ireland;Lordship of Ireland;K Italy;Republic of Pisa;Idrisid z;Almoravid z;Almohad Caliphate;Marinid z;Wattasid z;Saadian z;Republic of Salé;Rif Republic;K Kush;Makuria;Alodia;Ayyubid z;Mamluk s;Egypt Eyalet;K Fazughli;S Sennar;S Darfur;Mahdist State;S Egypt;K Egypt;Emirate of Cyrenaica;K Libya;Republic of Egypt;Republic of the Sudan;United Arab Republic;Libyan Arab Republic;Zirid z;Hafsid z;K Kuku;Regency of Algiers;Gurunsi;Liptako;Tenkodogo;Wogodogo;Yatenga;Bilanga;Bilayanga;Bongandini;Con;Macakoali;Piela;Nungu;K Sine;K Saloum;K Baol;K Cayor;K Waalo;Bundu;Bonoman;Gyaaman;Denkyira;Mankessim Y;K Dahomey;Oyo Z;K Nri;Aro Confederacy;Kwararafa;Biafra;Buganda;Bunyoro;Ankole;Busoga;Tanganyika;Kuba Y;K Luba;K Lunda;Yeke Y;K Ndongo;Kasanje Y;K Matamba;Mbunda Y;Chokwe Y;Kazembe Y;K Butua;Ndebele Y;Mthethwa Z;Bophuthatswana;Ciskei;Transkei;Venda;Rhodesia;Kart z;Nogai Horde;Khanate of Bukhara;Khanate of Khiva;Khamag Mongol;Northern Fujiwara;Kamakura Shogunate;Ashikaga Shogunate;Jaxa;Republic of Ezo;Jiangxi Soviet;Hunan Soviet;Guangzhou Commune;Gojoseon;Alaiye;Beylik of Bafra;Kara Koyunlu;Kars Republic;K Iraq;Arab Federation;Kar-Kiya z;Baduspanids;Marashiyan z;Afrasiyab z;Mihrabanid z;Safavid Iran;Sheikhdom of Kuwait;Bani Khalid Emirate;Emirate of Diriyah;Emirate of Najd;Muscat and Oman;Emirate of Riyadh;S Najd;K Hejaz;Fadhli s;Emirate of Beihan;Emirate of Dhala;S Lahej;Republic of Kuwait;K Cochin;Jaffna Y;Laur Y;Pandya z;Jaunpur s;Jaintia Y;Hyderabad State;Travancore;Udaipur State;Manikya z;Lan Xang;K Vientiane;K Champasak;Lao Issara;K Laos;Pyu States;Ava;Mon Ys;Pegu;K Mrauk U;Taungoo z;Shan States;Arakan;Raktamaritika;Singhanavati;Dvaravati;Ngoenyang;Hariphunchai;Tambralinga;Lavo Y;Langkasuka;Sukhothai Y;S Singora;Ayutthaya Y;Thonburi Y;Lan Na;Pattani Y;Jambi s;Palembang s;S Deli;S Langkat;S Serdang;S Cirebon;K Pajang;K Bali;Bima s;K Larantuka;K Banggai;Luwu;S Bone;Caucasian Albania;Kabardia;Circassia;K Abkhazia;Elisu s;Avar Khanate;Caucasian Imamate;K Imereti;K Kartli;K Kakheti;Crown of Aragon;Emirate of Granada;K Majorca;Crown of Castile;K Haiti;Cocollán;Zapotec Civilization;Mosquito Y;Somoza Regime;Iroquois Confederacy;Cherokee Nation;Vermont Republic;State of Muskogee;K Alo;K Sigave;K Fiji;K Nauru;K Chile;Muisca Confederation;El Stronato;K Chimor;Jungle Republic;Liga Federal;Supreme Junta;Weimar Republic;K Bavaria;Bremen;Frankfurt;Hamburg;K Hanover;Holstein;Lippe;Nassau;Oldenburg;Pomerania;Reuss;Saxe-Altenburg;Saxony;Schleswig;Waldeck;Württemberg;Helvetic Republic;Republic of Florence;Duchy of Urbino;Republic of Cospaia;Duchy of Lucca;Duchy of Mantua;Duchy of Milan;Papal States"
			.split(";");
		var a0, hz, a12 = ["K ", " Y", "E ", " Z", " z", " s", "S "],
			aCX = ["Kingdom of ", " Kingdom", "Empire of ", " Empire", " Dynasty", " Sultanate", "Sultanate of "];
		for (aCW =
			"Pestilent Dominion;Wretched Realm;Damned Province;Corrupt Zone;Cursed Territory;Blight Nation;Haunted Expanse;Malevolent State;Ruined Empire;Contaminated Land;Epidemic Domain;Forsaken District;Abandoned Wasteland;Necrotic Enclave;Tainted Domain;Decayed Principality;Infested Region;Malignant Territory;Toxic Dominion;Ravaged Sector;Ghostly Realm;Plagued Commonwealth;Afflicted State;Desolate Nation;Apocalyptic Zone;Radiated Province;Deathly District;Pestilence Haven;Doom Territory;Malefic Expanse;Abandoned State;Cursed Haven;Corroded Zone;Hauntland;Noxious Nation;Infected Enclave;Ruinous Domain;Wasteland Woe;Rotten Principality;Voided Land;Vile Dominion;Catastrophic Region;Eerie Expanse;Desolation State;Forsaken Outpost;Contagion District;Damaged Province;Abhorrent Sector;Accursed Nation;Doomstruck Land;Radiant Ruin;Deathly Enclave;Malefic Dominion;Plague District;Infected Haven;Corrupt State;Pestilent Territory;Razed Realm;Haunted Wasteland;Toxic Sector;Cursed Dominion;Decaying Province;Forsaken Enclave;Ruinous Region;Malignant Haven;Infested State;Ghostly Nation;Tainted Territory;Damned District;Radiated Dominion;Desolate Expanse;Apocalyptic Land;Death Zone;Wretched State;Malevolent Haven;Plagued Nation;Noxious Domain;Voided Territory;Eerie Sector;Accursed Province;Necrotic District;Doom Haven;Haunt Realm;Rotten Nation;Forsaken Territory;Infected State;Abhorrent Expanse;Malignant Land;Toxic Dominion;Ruined District;Ghostland;Cursed Sector;Radiant Nation"
			.split(";"), a0 = uw.length - 1; 0 <= a0; a0--)
			for (hz = a12.length - 1; 0 <= hz; hz--) uw[a0] = uw[a0].replace(a12[hz], aCX[hz]);
		if (settings.realisticNames) uw = realisticNames;
	}, this.w = function() {
		var a0;
		if (ay.j8 && ay.j9.aAc)
			for (a0 = a2.iq; a0 < a2.f2; a0++) aX.l4[a0] = aX.vR[a0] = ay.j9.aAc[a0 % a2.sL];
		else(9 === a2.jC ? function() {
			var a0, gP = ao.random(),
				ey = uw.length,
				ja = a2.iq + ap.aCc;
			for (a0 = ja - 1; a0 >= a2.iq; a0--) aX.l4[a0] = aX.vR[a0] = uw[(a0 + gP) % ey];
			for (ey = aCW.length, a0 = ja; a0 < a2.f2; a0++) aX.l4[a0] = aX.vR[a0] = aCW[a0 % ey]
		} : a2.jE ? function() {
			var a0, gP = ao.random();
			for (a0 = a2.iq; a0 < a2.f2; a0++) aX.l4[a0] = aX.vR[a0] = uw[(a0 + gP) % a2.f2]
		} : function() {
			var a0, ey = uw.length,
				gP = ao.random();
			for (a0 = a2.iq; a0 < a2.f2; a0++) aX.l4[a0] = aX.vR[a0] = uw[(a0 + gP) % ey]
		})()
	}
}

function ce() {
	this.aCd = [], this.aCe = [], this.dE = function() {
		this.aCd = [], this.aCe = []
	}, this.hb = function() {
		0 <= this.aCd.length && this.aCf(this.aCd), 0 <= this.aCe.length && this.aCf(this.aCe)
	}, this.aCf = function(e6) {
		for (var i5 = -1, a0 = e6.length - 1; 0 <= a0; a0--)
			if (e6[a0].dp--, e6[a0].dp <= 0) {
				i5 = a0;
				break
			} for (a0 = i5; 0 <= a0; a0--) e6.shift()
	}, this.zY = function(id, t1, aCg) {
		return this.aCh(this.aCd, id, t1, aCg)
	}, this.aCi = function(id, t1, aCg) {
		return this.aCh(this.aCe, id, t1, aCg)
	}, this.aCh = function(e6, id, t1, aCg) {
		return ! function(e6, id, t1) {
			var a0, jd;
			for (a0 = t1.length - 1; 0 <= a0; a0--)
				for (jd = e6.length - 1; 0 <= jd; jd--)
					if (e6[jd].player === t1[a0] && id === e6[jd].id) return 1;
			return
		}(e6, id, t1) && (aCg && function(e6, id, t1) {
			var a0;
			for (a0 = t1.length - 1; 0 <= a0; a0--) e6.push({
				player: t1[a0],
				id: id,
				dp: 384
			})
		}(e6, id, t1), !0)
	}
}

function cH() {
	this.vR = new Array(a2.f2), this.l4 = new Array(a2.f2), this.y1 = new Uint8Array(a2.f2), this.kX = new Uint8Array(a2.f2), this.hK = new Uint16Array(a2.f2), this.hM = new Uint16Array(a2.f2), this.hL = new Uint16Array(a2.f2), this.hN =
		new Uint16Array(a2.f2), this.eq = new Uint32Array(a2.f2), this.sa = new Uint32Array(a2.f2), this.eu = new Uint32Array(a2.f2), this.ez = null, this.fG = null, this.fH = null, this.fK = null, this.nv = new Uint16Array(a2.f2), this.hj =
		new Uint16Array(a2.f2), this.hk = new Uint16Array(a2.f2), this.vE = new Uint16Array(a2.f2), this.vK = new Uint8Array(a2.f2), this.dE = function(t1) {
			for (var a0 = t1.length - 1; 0 <= a0; a0--) this.l4[a0] = this.vR[a0] = t1[a0].name, this.y1[a0] = t1[a0].a8d;
			this.kX.fill(0), this.hK.fill(0), this.hM.fill(0), this.hL.fill(0), this.hN.fill(0), this.eq.fill(0), this.sa.fill(0), this.eu.fill(0), donationsTracker.reset(), leaderboardFilter.reset(), this.ez = new Array(a2.f2), this.fG = new Array(
				a2.f2), this.fH = new Array(a2.f2), this.fK = new Array(a2.f2), this.nv.fill(0), this.hj.fill(0), this.hk.fill(0), this.vE.fill(0), this.vK.fill(0)
		}
}

function cc() {
	this.aCl = function(player) {
		a5.kW(player), a2.ub++, aX.y1[player] = 2, aX.vE[player] = bW.v8.aA9(), player === a2.et && (aM.show(!1, !1), aL.a4v(), bH.result.vI()), aW.a0j(player)
	}
}

function z8() {
	for (ir = 0, a0 = a2.f2 - 1; 0 <= a0; a0--) 0 !== aX.kX[a0] && ir++;
	it = new Uint16Array(ir);
	for (var ey = 0, a0 = 0; a0 < a2.f2; a0++) 0 !== aX.kX[a0] && (it[ey++] = a0)
}

function kB() {
	aCm(), aCn()
}

function aCn() {
	for (var a0 = ir - 1; 0 <= a0; a0--) 0 === aX.kX[it[a0]] && aCo(a0)
}

function aCo(a0) {
	ir--;
	for (var hz = a0; hz < ir; hz++) it[hz] = it[hz + 1]
}

function aCm() {
	for (var eq = aX.eq, kX = aX.kX, sa = aX.sa, ez = aX.ez, vK = aX.vK, nm = bD.k9.nm, a0 = ir - 1; 0 <= a0; a0--) {
		var dq, f5 = it[a0];
		eq[f5] <= bB.em(sa[f5], 4) ? 2 === kX[f5] && (0 !== eq[f5] || nm[f5] || ez[f5].length) || aA3(f5) : eq[f5] >= sa[f5] ? (dq = eq[f5], 250 <= (sa[f5] = dq) && (vK[f5] = 1)) : sa[f5] -= Math.max(1, bB.em(sa[f5] - eq[f5], 1e3))
	}
}

function aCp() {
	for (var a9t = 0, a0 = ir - 1; 0 <= a0; a0--) a9t += aX.eu[it[a0]];
	return a9t % 4096
}

function cJ() {
	var aCq;
	this.jI = null, this.dE = function() {
		aCq = [], 9 === a2.jC && this.aCr()
	}, this.aCr = function() {
		var a0, aCs = [57, 85, 105, 150, 190, 333];
		if (this.aCc = 0, this.jI = [0, 0, 0, 0, 0, 0], a2.iq <= aCs[0]) this.jI[0] = Math.max(bB.em(a2.iq * (512 - a2.iq), aCs[0]), 13), a2.jB = this.jI[0];
		else
			for (a2.jB = a2.f2 - a2.iq, a0 = 1; a0 < 6; a0++)
				if (a2.iq <= aCs[a0]) {
					this.jI[a0 - 1] = 512 - aCs[a0 - 1] - bB.em((512 - aCs[a0 - 1]) * (a2.iq - aCs[a0 - 1]), aCs[a0] - aCs[a0 - 1]), this.jI[a0] = 512 - a2.iq - this.jI[a0 - 1];
					break
				} a2.sL = a2.iq + a2.jB
	}, this.aAJ = function(player) {
		aCq.push({
			player: player,
			jM: 14 + ao.i2(20)
		})
	}, this.hb = function() {
		var a0;
		if (9 === a2.jC)
			for (a0 = aCq.length - 1; 0 <= a0; a0--) --aCq[a0].jM <= 0 && (aW.o7(aCq[a0].player, 0, aa.tB.tW + aa.tB.tl), aCq.splice(a0))
	}
}

function ct() {
	function aCy(a0) {
		return void 0 !== bI.j9.s8[a0].aD6
	}

	function aCw(a0) {
		return 1 !== a0 && !aCy(a0) && a0 !== bI.aAR()
	}
	this.aAg = 21, this.eT = 0, this.eU = 0, this.ro = null, this.rk = null, this.rl = null, this.rp = null, this.s9 = 0, this.a82 = 0, this.rm = !1, this.rn = new aCu, this.j9 = new aCv, this.dE = function() {
		this.j9.dE()
	}, this.w = function(map, a86) {
		((map %= this.aAg) !== this.s9 || aCw(this.s9) && a86 !== this.a82) && (this.rm = !1, this.rn.a8E(), ao.z4(map), this.s9 = map, this.a82 = a86, aCw(map) && (bI.j9.s8[map].aCx = a86), aCy(this.s9) ? aCz() : (map = bI.j9.s8[this.s9], this
			.eT = map.u, this.eU = map.iF, ao.z4(map.aCx), ad.w([this.eT, this.eU, map.l8, map.l5]), aD0(), ac.aD1(), ad.aD2()))
	}, this.aD3 = function(a0) {
		return 3 === a0 || 7 === a0 || 9 === a0 || a0 === this.aAR()
	}, this.aD4 = function(a0) {
		return 2 === a0 || 7 === a0 || 9 === a0 || 20 === a0
	}, this.aD5 = function(a0) {
		return 1 === a0
	}, this.aAR = function() {
		return this.aAg
	}
}

function aCu() {
	function aDF() {
		bI.rn.hb()
	}

	function aDL(f5, aDK) {
		0 < aDK && (bI.rp[f5] += aDK, bI.rp[f5 + 1] += aDK, bI.rp[f5 + 2] += aDK)
	}

	function g4(f5) {
		return bI.rp[f5 + 2] > bI.rp[f5] && bI.rp[f5 + 2] > bI.rp[f5 + 1]
	}
	this.a3K = -1, this.dn = 0, this.aD7 = 0, this.aD8 = 8, this.aD9 = 32, this.aDA = 8, this.aDB = 32, this.aDC = [0, 0], this.a2P = [0, 0, 0, 0], this.hF = null, this.aDD = !0, this.aDE = !1, this.a8E = function() {
		-1 !== this.a3K && clearTimeout(this.a3K), this.a3K = -1, this.hF = null, ad.aD2()
	}, this.dE = function() {
		7 === aP.vt() || this.aDE || (this.aDD = !0, this.dn = 0, this.aD7 = 1, this.aDC = [bI.j9.s8[bI.s9].s7[0], bI.j9.s8[bI.s9].sA[0]], this.a2P = [bI.j9.s8[bI.s9].aD6[3], bI.j9.s8[bI.s9].aD6[4], bI.j9.s8[bI.s9].aD6[5], bI.j9.s8[bI.s9].aD6[
			6]], this.aD8 = bI.j9.s8[bI.s9].aD6[7], this.aD9 = bI.j9.s8[bI.s9].aD6[8], this.aDA = bI.j9.s8[bI.s9].aD6[9], this.aDB = bI.j9.s8[bI.s9].aD6[10], this.aDD ? this.a3K = setTimeout(aDF, 16) : this.hb())
	}, this.hb = function() {
		if (8 === aP.vt() && a7.lM()) this.a3K = setTimeout(aDF, 16);
		else {
			if (0 === this.dn) {
				var aCx = ao.aDG();
				if (ao.z4(bI.j9.s8[bI.s9].aD6[2]), ad.w([bI.eT, bI.eU, bI.j9.s8[bI.s9].aD6[0], bI.j9.s8[bI.s9].aD6[1]]), ao.z4(aCx), this.hF = ad.aDH(), this.dn++, this.aDD) return void(this.a3K = setTimeout(aDF, 16))
			}
			for (var f5, fv, aCx = this.aDD ? 10 : 1e6, aCx = bI.eU - this.aD7 - 1 < aCx ? bI.eU - this.aD7 - 1 : aCx, sX = this.aD7 + aCx, fh = this.aD7; fh < sX; fh++)
				for (var fg = 1; fg < bI.eT - 1; fg++) g4(f5 = 4 * (fv = fg + fh * bI.eT)) ? this.aDI(f5, fv, 1) : (this.aDI(f5, fv, 0), function(fg, fh, f5) {
					return 1 < fg && g4(f5 - 4) || fg < bI.eT - 2 && g4(f5 + 4) || 1 < fh && g4(f5 - 4 * bI.eT) || fh < bI.eU - 2 && g4(f5 + 4 * bI.eT)
				}(fg, fh, f5) && this.aDJ(fg, fh));
			this.aD7 = sX, this.aD7 >= bI.eU - 1 ? (bI.rk.putImageData(bI.rl, 0, 0, 1, 1, bI.eT - 2, bI.eU - 2), bT.dL = !0, this.a8E()) : this.aDD && (this.a3K = setTimeout(aDF, 16))
		}
	}, this.aDI = function(f5, fv, kf) {
		aDL(f5, Math.floor(this.aDC[kf] + this.a2P[kf] * this.hF[fv] / 1e4) - bI.rp[f5])
	}, this.aDM = function(f5, gP, aDN, kf, a2P) {
		aDL(f5, Math.floor(this.aDC[kf] + (1 - gP / aDN) * a2P) - bI.rp[f5])
	}, this.aDJ = function(jm, jn) {
		for (var f5, gP, aDN, sC = jm - this.aD9, sD = jn - this.aD9, sY = jm + this.aD9, sX = jn + this.aD9, sC = sC < 1 ? 1 : sC, sY = sY > bI.eT - 2 ? bI.eT - 2 : sY, sX = sX > bI.eU - 2 ? bI.eU - 2 : sX, fh = sD < 1 ? 1 : sD; fh <= sX; fh++)
			for (var fg = sC; fg <= sY; fg++) g4(f5 = 4 * (fg + fh * bI.eT)) ? (aDN = this.aD8 + (this.aD9 - this.aD8) * this.hF[fg + bI.eT * fh] / 1e4, Math.abs(jm - fg) > aDN || Math.abs(jn - fh) > aDN || aDN <= (gP = Math.sqrt((jm - fg) * (
				jm - fg) + (jn - fh) * (jn - fh))) || this.aDM(f5, gP, aDN, 1, this.a2P[3])) : (aDN = this.aDA + (this.aDB - this.aDA) * this.hF[fg + bI.eT * fh] / 1e4, Math.abs(jm - fg) > aDN || Math.abs(jn - fh) > aDN || aDN <= (gP = Math
				.sqrt((jm - fg) * (jm - fg) + (jn - fh) * (jn - fh))) || this.aDM(f5, gP, aDN, 0, this.a2P[2]))
	}
}

function aD0() {
	2 === bI.s9 ? aDO([256], [256], [0, 205, 256], [500, 500, 0], [0, 0, 0]) : 7 === bI.s9 ? aDO([512], [512], [0, 380, 512], [500, 500, 0], [0, 0, 0]) : 8 === bI.s9 ? aDO([410], [410], [0, 120, 210], [0, 80, 640], [0, 0, 0]) : 9 === bI.s9 ? aDO([
		512], [512], [0, 70, 180, 200, 290, 420, 512], [500, 500, 0, 0, 500, 500, 0], [0, 0, 0, 0, 0, 0, 0]) : 20 === bI.s9 && aDO([512], [512], [0, 380, 512], [500, 500, 0], [0, 0, 0])
}

function aDO(aDP, aDQ, aDR, aDS, aDT) {
	for (var fg, fh, aDV, aDW, xE, aDX, gr = aDP.length - 1, aDU = bI.eT + bI.eU, ey = (aDU *= aDU, aDR.length), a0 = ey - 1; 0 <= a0; a0--) aDR[a0] *= aDR[a0];
	var aDY = new Array(ey),
		aDZ = new Array(ey),
		aDa = new Array(ey),
		ds = ad.aDH();
	if (void 0 === aDT)
		for (aDT = new Array(ey), a0 = ey - 1; 0 <= a0; a0--) aDT[a0] = 0;
	for (a0 = 1; a0 < ey; a0++) aDY[a0] = aDR[a0] - aDR[a0 - 1], aDZ[a0] = aDS[a0] - aDS[a0 - 1], aDa[a0] = aDT[a0] - aDT[a0 - 1];
	for (fg = bI.eT - 1; 0 <= fg; fg--)
		for (fh = bI.eU - 1; 0 <= fh; fh--) {
			for (aDV = aDU, a0 = gr; 0 <= a0; a0--) aDV = (aDW = (fg - aDP[a0]) * (fg - aDP[a0]) + (fh - aDQ[a0]) * (fh - aDQ[a0])) < aDV ? aDW : aDV;
			for (xE = aDS[ey - 1], aDX = aDT[ey - 1], a0 = 1; a0 < ey; a0++)
				if (aDV < aDR[a0]) {
					xE = aDS[a0 - 1] + a9U((aDV - aDR[a0 - 1]) * aDZ[a0], aDY[a0]), aDX = aDT[a0 - 1] + a9U((aDV - aDR[a0 - 1]) * aDa[a0], aDY[a0]);
					break
				} aDb(bI.eT * fh + fg, xE, aDX, ds)
		}
}

function aDb(kf, xE, aDX, ds) {
	xE < 500 ? ds[kf] = bB.em(ds[kf] * xE * 2, 1e3) : 500 < xE && (ds[kf] += bB.em(2 * (1e4 - ds[kf]) * (xE - 500), 1e3)), ds[kf] += bB.em(aDX * (10 * xE - ds[kf]), 1e3)
}

function cL() {
	var aDc;

	function aDm(xW, gL, fg, fh, globalAlpha) {
		bI.rk.save(), bI.rk.globalAlpha = globalAlpha, bI.rk.imageSmoothingEnabled = !1, bI.rk.scale(gL, gL), bI.rk.drawImage(xW, Math.floor(fg * (bI.eT / gL - xW.width)), Math.floor(fh * (bI.eU / gL - xW.height))), bI.rk.restore()
	}
	this.a15 = 0, this.a16 = 0, this.a17 = 0, this.a18 = 0, this.dE = function() {
		(aDc = new Array(bI.aAg))[0] = {
			u: [0, 5e3, 8e3, 1e4],
			gP: [220, 250, 255, 220],
			ps: [190, 220, 0, 0],
			i5: [170, 200, 0, 0]
		}, aDc[1] = {
			u: [0, 4e3, 5e3, 6e3, 1e4],
			gP: [25, 0, 100, 0, 25],
			ps: [25, 0, 0, 0, 25],
			i5: [25, 0, 0, 0, 25]
		}, aDc[2] = {
			u: [0, 500, 2500, 2999, 3e3, 3200, 4200, 5200, 5700, 8800, 1e4],
			gP: [15, 15, 70, 40, 48, 48, 252, 40, 40, 20, 30],
			ps: [80, 80, 190, 90, 46, 46, 248, 180, 180, 90, 140],
			i5: [120, 120, 220, 110, 37, 37, 217, 10, 10, 10, 10]
		}, aDc[3] = {
			u: [0, 400, 1800, 2e3, 3200, 4500, 6e3, 7700, 8500, 9500, 1e4],
			gP: [10, 10, 20, 10, 30, 10, 16, 40, 55, 230, 230],
			ps: [10, 10, 40, 50, 100, 40, 80, 120, 55, 230, 230],
			i5: [80, 80, 200, 10, 60, 10, 16, 40, 55, 230, 230]
		}, aDc[4] = {
			u: [0, 300, 1400, 1700, 3e3, 4e3, 1e4],
			gP: [10, 10, 20, 10, 10, 170, 212],
			ps: [20, 20, 60, 100, 100, 110, 170],
			i5: [70, 70, 160, 30, 30, 60, 120]
		}, aDc[5] = {
			u: [0, 1e3, 3e3, 3500, 4e3, 4500, 7e3, 7500, 8e3, 1e4],
			gP: [10, 10, 20, 10, 5, 10, 20, 5, 20, 25],
			ps: [30, 30, 50, 100, 30, 100, 140, 60, 140, 200],
			i5: [80, 80, 200, 10, 5, 10, 20, 5, 20, 25]
		}, aDc[6] = {
			u: [0, 700, 2650, 3200, 5e3, 8e3, 1e4],
			gP: [10, 10, 60, 255, 255, 200, 200],
			ps: [10, 10, 60, 255, 255, 200, 200],
			i5: [80, 80, 255, 255, 255, 200, 200]
		}, aDc[7] = {
			u: [0, 400, 1999, 2e3, 3200, 4e3, 4700, 5500, 6500, 9500, 1e4],
			gP: [10, 10, 80, 255, 255, 55, 6, 70, 20, 155, 255],
			ps: [10, 10, 90, 245, 245, 170, 80, 190, 20, 155, 255],
			i5: [80, 80, 255, 235, 235, 55, 26, 10, 20, 155, 255]
		}, aDc[8] = {
			u: [0, 700, 1300, 1900, 1901, 2500, 3400, 6e3, 1e4],
			gP: [25, 30, 30, 30, 255, 255, 30, 40, 20],
			ps: [25, 30, 150, 150, 245, 245, 80, 150, 70],
			i5: [60, 170, 170, 170, 235, 235, 30, 40, 40]
		}, aDc[9] = {
			u: [0, 400, 2009, 2010, 3300, 4e3, 5200, 6500, 8e3, 9500, 1e4],
			gP: [10, 10, 80, 255, 255, 55, 23, 36, 20, 155, 255],
			ps: [10, 10, 90, 245, 245, 170, 60, 160, 20, 155, 255],
			i5: [80, 80, 255, 235, 235, 55, 9, 72, 20, 155, 255]
		}, aDc[20] = {
			u: [0, 5500, 6700, 6999, 7e3, 7300, 7600, 8200, 1e4],
			gP: [5, 5, 70, 70, 255, 255, 252, 10, 8],
			ps: [20, 28, 190, 190, 255, 255, 248, 90, 60],
			i5: [60, 80, 220, 220, 220, 220, 217, 10, 8]
		}
	}, this.aD1 = function() {
		var aDl, a0, hz, e7, gJ = function() {
				var gJ;
				return bI.ro = document.createElement("canvas"), bI.ro.width = bI.eT, bI.ro.height = bI.eU, bI.rk = bI.ro.getContext("2d", {
					alpha: !1
				}), gJ = bI.rk.getImageData(0, 0, bI.eT, bI.eU), bI.rp = gJ.data, gJ
			}(),
			u = aDc[bI.s9].u,
			gP = aDc[bI.s9].gP,
			ps = aDc[bI.s9].ps,
			i5 = aDc[bI.s9].i5,
			ds = ad.aDH(),
			ey = u.length - 2,
			aDg = new Array(1 + ey),
			aDh = new Array(1 + ey),
			aDi = new Array(1 + ey),
			aDj = new Array(1 + ey);
		for (hz = ey; 0 <= hz; hz--) aDg[hz] = u[hz + 1] - u[hz], aDh[hz] = gP[hz + 1] - gP[hz], aDi[hz] = ps[hz + 1] - ps[hz], aDj[hz] = i5[hz + 1] - i5[hz];
		for (a0 = bI.eT * bI.eU - 1; 0 <= a0; a0--)
			for (hz = ey; 0 <= hz; hz--)
				if (ds[a0] >= u[hz]) {
					e7 = ds[a0] - u[hz], bI.rp[4 * a0] = gP[hz] + a9U(aDh[hz] * e7, aDg[hz]), bI.rp[4 * a0 + 1] = ps[hz] + a9U(aDi[hz] * e7, aDg[hz]), bI.rp[4 * a0 + 2] = i5[hz] + a9U(aDj[hz] * e7, aDg[hz]), bI.rp[4 * a0 + 3] = 255;
					break
				} bI.rk.putImageData(gJ, 0, 0), bI.aD5(bI.s9) && aR.pw() && bI.aD5(bI.s9) && (gJ = aR.a7F("arena"), aDl = aR.a7F("territorial.io"), aDm(gJ, 5, .5, .5, .1), aDm(aDl, 2, .5, .45, .1)), bI.rm = !0, bT.dL = !0
	}, this.z6 = function() {
		for (var f5, fg, fh, aDn, aDo, e9, a16 = 0, u = bI.eT, iF = bI.eU, e7 = u * iF * 4, aDp = a5d, aDq = bI.rp, a0 = u - 1; 0 <= a0; a0--) aDp[(f5 = a0 << 2) + 2] = aDp[e7 - f5 - 2] = 3;
		for (e7 = 4 * u, a0 = iF - 1; 0 <= a0; a0--) aDp[(f5 = a0 * e7) + 2] = aDp[f5 + e7 - 2] = 3;
		for (aDn = u - 1, aDo = iF - 1, fh = 1; fh < aDo; fh++)
			for (e7 = fh * u, fg = 1; fg < aDn; fg++) e9 = 1 - (aDq[(f5 = e7 + fg << 2) + 2] > aDq[f5 + 1] && aDq[f5 + 2] > aDq[f5]), aDp[f5 + 2] = 2 - e9, a16 += e9;
		this.a15 = (u - 2) * (iF - 2), this.a18 = 0, bI.aD3(bI.s9) && function() {
			var f5, fg, fh, e7, aDp = a5d,
				aDq = bI.rp,
				u = bI.eT,
				aDn = u - 1,
				aDo = bI.eU - 1,
				jM = 0;
			for (fh = 1; fh < aDo; fh++)
				for (e7 = fh * u, fg = 1; fg < aDn; fg++) aDq[f5 = e7 + fg << 2] === aDq[1 + f5] && aDq[f5] === aDq[2 + f5] && (jM++, aDp[2 + f5] = 3);
			ac.a18 = jM
		}(), this.a16 = a2.iW = a16 - this.a18, this.a17 = this.a15 - this.a16 - this.a18
	}
}

function aCz() {
	var oE;
	10 === bI.s9 ? oE =
		"DYDz2ESNu-0UYCCrS9c3pBUrKHc94BhIBhIJpIIBnMIAAIrKSSpKABmgf9e7X7ecX-5P0baOy191XXX7eegf9mcfUrrxrKppppKpKSrzUMMMSKKKrJcXcXcmgcXnKIKBmnCIJonCKrrSrrSSxSS9XcJnBe9XemmWXeX99chMIAEprrSrrtbrxIrMKBn9eBcecX9X7f99X90e577VX1VcOWX16XX7X999cX7eWyXXccVVX6rUSrrwUrlzpbbrrU6xzztzxzrztzbaOtaOa5-0WV-77e-9119HcXXZecccceXXX7ce9Xcce9e9meeVof919ee9Wzy5XeXYS9KBcXee_He6ce1ee0zxzta5UaX99c1mXcXhEJp9cNHWcTN9BcnAzJoorIBe0c--nIJoonSIBe-OX-NNOXWbcBgzIHX9xHzS9mcCSI9-nBrrorK9VcP-jHe9_BhxzKHcWC9mZp9-3n9fBnS970a6zs7egrIAAIRUKocXX9gx9npKaUxBppABe5OdHpBe-AC9-17TOWABpKI9-7JmnC6zGtxIBmen9egp6aUlyOzbrbbqUzxHXgjKKBc-ZehlxoeeoxObonox9XonAUbzS9efBdCAArHmjISBhEJnAofBUIJgrpocXxIBUoxHVmnBmmXAExoUxABmdAIBgnBonIAC6oxHVgfMHcXcUXAAGxIBgfxJch9c3enCMzSBe9eXomxHeBgmeCSBgpKMp9hzHfIEzHnArSxHX7pSrUHcnCMrUpSa5UIonABrSBccnBopJttzbxpBonHXpIEKMrMSrxpKxzUzltyUtaTOaOaObaT5UzNTOV0c116rMMKSKrxIKpJpKMSKMGxISCrKMSpKMKrSpSpI9xp9_pMMMMSBoxSryTUUxa5P7-0ttbWzzzxzaN5-NOWVN--0Wa5-0X-0VNVN7TOzaOWzL0bbX0y7NN5Ua17V111749c79e1c-V-----Ow7--N57-OzaN0ba156byNNT6q5OzWaT55-OsOX1777Oa55-5T5UX16tzUOyUtzrpzUrSKKSSAoemnKCIAIICI9KHn9CKBhCSHgenSAJnIJxSMMKKSSpKoopKKHpSoorSzxpWxMS-UKISaOxMOxttyOzy5OzbbtyTOzbtaUxyUyTT6porUrSztzzMSp9eceoogeZp9ZxJx9geeeXe9eZgeC9gegemp9gmpKMSonSxKrrbaUMIKJpMKKKpIACBmeccV71XX7V1mmmmhCCCKJompKKJpMKSKSKpKMJpKBeeceenKpzHnBnBmceee-X1117ememfBn9mfCBmgemf9mfBmf9xromcec7Us8He0u99cWtbc-PeCCS9VecZnBnBemfBn9X9c6aOXA997Y99755VXc6tXXmV5Os-ObVN0yN0bzaT-7ec7N70Wa-OV-5eggnHon9f9efCBpMzop97epCKIpSIBpKrrSKKIKKMKMJehzKKErJeABnIAJc717f9eBnAJzrHe7V9d9ef9gmopKUKC9gmcV6tX73eCIJoonIBnBnBgnCHgjJeZfA9megeegfKCICCJnIA9meZf9mfIEMof9XceXe97X-59XdCIKKpKKCJoeVcf97mZmVVV199YJmX7gceY9gpEOxMMJecrSSGzOxSrxprSxzJzUopSrIxKBpUMIpMprSropEMHnBrpprK91AJpJpIICpBopICCJonKBn9mcme9VcX9ee7X7e9ece9Xe19XcX91Xee9Xcce9VVVccefAAABe7emhBnSSKMSIJhCIJpKJppCKKIIIICJgpIBpAIHpBcoooonIKLObpBnKlzrKIKCJpCJpBnBpUzrrxpxSbbwUxzUprpppppJppMMIrrSSRUbWsOwUzUltbzrxzUzSzUbrrTTUUrSbbV6WbaTOzxzyN5TN-T5TOxbtts71-X-70V0sOWsObbaT0sTObw70tbbzbxbzzyOtyUtbyUaOV1-N0cVN-50aOtza6tzlxzUxSrzUzSSxUSzzOzzs5OyOtyOyUztyObaNOtaUrUxrrUSrrUrMSJrSIMSpKISzKUSpSrSSrzSMMxMSrMSpSrUzSSzzrTUMSpprSzMSzUxSSIEUSrzrUSpMKKxpKrKMKBmmrIKBgpKrzs6VOsUa--5ObzyN77-7X7e970V-5Oa5ObzxSxrzzSrKMUw-OV17X7X1X99X97X9X99cXXXXX977OaOVXeeeeecX7cX7X7X177-7-X-71-7XX97X97cX7VVV1--VObs970cVObtzbtyObrzxSomdKKSSMKqTN5NN0xrMIM5UrKKKpEKrSMSMprSrxMMUzrzrzSrSrSrHXenOtxrrxrxzSrrSrUrrSrSxMSxxKJpKKKJnKKrKIUUSrSrKKzKxKrSrSwUxIBnrxpSSpUzyOzzzzyUSxzRUpCBee7ecXce89omegpIBrpxzSrMJnKrMSFT0tbrMKxKL0VObxprSSlXV-11-c-X-WxzxFUaPcX777OzztzrSrMV-V75X96zzMKrUa9e-7V17gc9XeV90Bf957cVOzrMOX17X7X-X7X7V-N-6aUxCKzUUKprcX-UzSrN17WzrxrNX7ecV17WzzbaOtbxraObrOxrbxwUxpUzrzraOy5OVOWtzyOzzxbzVNXccXcXcX1-V197V-ec5Oy5N1--555UyN-N1---VOWX0Wtcc0aUMMyOs----Zc5-TOtsOWX7c0xzLN-NWbyOyUyUzrbxJe9gfTUxAMxrxzlbzbzbq5UKrJnAABnAAICETUtxSrzrpIpKIUSxraOaOVNTObzWa5NOtxxyOyOc-5A9YBmnBfHceX7-XXcX9e9Y9e5OzUbxSyVUX5OcUa1-UMqNNUbyOtsUWtWbWaObtzbyUWy6bzpJmoh9nIUI99oghSUzrrrSHeHohKCJgrKJemgcrS9nry6xSrUMStxzUSzqUrbrUxUSxxrrprUU6zSrbrtzUSUSzxMKxSMprMKIIIoonIBmohAIAHgf9eHeemfI9nA9mf9c9n9ZeXc9d9n9ccX7VZmoceeHVX1Zn9meZegegegfBhABehABonAHnABhCIBemee9eBfBeecgeohCUxzUbzxI9egegfAUUrHmegemecWcfCUp9meX9Beeef9onrSpAAKKKIyOzyUzJnBjSrxSSIBhMSHgcVYKxBmnzrROzpzxzSKKCKUzKBnoUzzbzpJmegfzyUzFObyUzrrzpKUSlzry6sUyUVN-7NOzbzzlzrzUrUSrrURUxzbzsTUsUWts5NOWa5ObzrUxrtyOWWaOzMSJnIAIprMJorKMIrSKMKKpUKCBonKMJnCJpCIKIKMJmpKIMKJpCJpBxBonHomoemmegnHf9f9cX7ce99emecgn9h9eA9nCHgfBnAIBfHh9eXXce9emec7f9ec1me89eeceme89fHeemX77-ceeeemeX9X9eeecV-V9e9Xe7e9eefBnBeefBfHmnBnBnKBpIEpKxMSKJnBpBnBnBmgmeeX9cXXVcX7Xce1eXcXe7ee9eXeeeX9X7V7V77V--XcXee7ec7X9eXXceX9f9eeee997X9Ve7Zee7WaX5X2Be-cee17X--0tsUbtaT0ta5-Oc--7Xe-X7--OVUtbVT--QA9nBmcXV--97X9ememggnBecJceeXme-cXdABeXeX97cnHgeeI9IA9XcVX7eX99e9e9mgeXeXemmceZmXe9ceXemXmggf9mmnAI9X1eIHcXfBghBmf9BemcX9Y9Ve9--JmZeccXA9Xd9cX9VXVVc7-V-Xee_BnJhIIBnJnBmohBgohBcmmf9eHf99Hf9HmommmmV5N-MvxppxrIICWzsOxX--OV5s0i1mopMKppzTOaN-0XXceV--0lJ7-90mzBlV2N7tRof9JqUsOaW7c8bwrrJchpK9-X7PBfHjKogcP0Jd92SMUwUlxMSErHegnrlxI9X7cY99e7hSzxpxSIIUHozogmgecYIExxxrrrKpKrSrMMrrlxtyUtxblxUyTUbyUUSaUy6Wzttbbc5N5N7V7XWaT7V6aZeVWsV9nIA9X2BmcWc7ooc--f9IBomV-0cnICBeXgn90Wc5TOa7-1-5cX---d11---esD---m8D-1VvAYqV-92glC5--NEEiqV-7Hsjk014I4wognBxwOs0Wc-D4y4gcT--0Y8X-0WalAk--0pHX-1Wsy6EV-a7EDhCBtaT9--X3IIV--_VJV0Ndepmzq1-0XeJbD-5XhvrCqTe-07iCnpteV-7iejk-iAtCxEIrrX71-2smknnEUUpze-e-c-1BtMB--2Kbq--YMmzV-sqPmrF7--Culc-HCwyxxcV-DEWXhte-DZ7mzorSr56eX170LG-rUSrSItzOueVc93c-5ZH-rrRP9-2d613nHdRUR6kP7-CZVZUEKUyUe91e-2ZYhnTPV-t8OMny7-1HZrT-DZf16A9mjFUzlsV--Hh_N-1HlyB-CZhCrSpzrkX7cX-2ZibAr-VMdC8brSrzUxSSIBxpHX17c8CrJe7rrUIpSrUxxzSrMIMOs5OVV7X7X7977V-7P19Xcce--8DNHk-LIcPSpN7-0ODtgnMN1-7Zz5USxyX9c--J2As-9J2CSu-08FHSrR7V-0G5xV-OH5vqV-0LEoV0OLiAnMN70D_f4UKIBnSBgzSrSxSSMSxpSpppzc-5TTUMbV716s117X1Xcce-cXXHcX--0Rs7V3dS04nKonpSSkV7----TMGPxrS-V7--MN-c0HMYnBnrIAIrK-OWV75V-tTEHotV-qMoqSMUUbe9HXV-mNcawnr6xtcVe-3aNiUIq1-6aOwMISlc1-6aSe6rROec-8ac9fISzuX-V1tf-1mnBrlWaN-NajMY9ggeoopCTTTTN6aN1HdgkXoohABnK9n9KJmpogeV-0XJenppSrUzJgghomhp9VnxIAAzOxWbbrIBnJmenBegozlWyObxIKBonIGaOVT50xSk6xJpEpIHnBonBoptxpr56xrzzbonCBnCMMSonzxJmopCIJomX7mceHcV7nJxSABhrbxEKCIJhAA9HgenABrUMbqUpSUrprSrbzzp9hABeXce9YAHcoomnBmmnBmmnpzaTTUrzzMpzWWblbyUUSrUrxbbzzblxrUUbrzSrtztzw6btV19ceWXWzq0aU6aTOta0a0V5777Xce7nA97VOa0X-17VUVV0V17-17X7V7-V----1-V-VcX9A9cWbbzyV-U5T5TOa5NNOaOV1Xe9ce99mZee5OtcWbaTTTTTOWe9ZeXcmcXVV38gtRnCMzSw1X6VcV08hu4rq9--tiGRrac-1Qfbg-dax4zrrIKoeBxErUlzSGbs0VP3eXX97XV-9R0KCsV1OlXjprrP7X7-HRQsCpVc2TRgLxJrKBeKKJe7BhIKKBlwOaUrNTUsNNNcNP91V---PS6VgopVN-LbHRrK999ezrxxoy5Tc7-0bJGjF--6Spy-5bU7rSbuXV4tsIYpKSSrSp50aX-177e-2baNMC5-2Otd7nHrpOba7cV2tv2dnICxz-Uk7cc0mUIkRnBpCBpCIJOWa0VNOtc-19UQnBeegmnIISxJns56zaOWtu7TV--URWN--VDLc-eVE7zSrUX7Xc-5WM4BN1DWTIggpBnEKKKESCWV5T5Wa-N0a9VsP6YRn9cmY9JggoggzUKHfA9XmcP9XZfIJhronABfISpxrUrrI9ABnBggrxxoe9fHmeBdCDUUrHf9orUogrzzJfUU6zUzbbbzrty6brbrxxz57OtsN5OsN5V5VT5V57N56yTUtsNN1cNNVV5VNeeeZeWtu77-XX-KgxCqWVV-P8w5qV-uAjtz5c15XwhBooopBonIKKJNN5-N5-6WVN-8ckmzArUOVeV-uDoWxNV--YoA7-TYoYRoxa57-1_P1T--8NKD-9dNS2ACAUta---dQzr-DPM79mmgcpI9chMKCppxxxrSzIbXc0aT1WVOxk7-N-9c0eauZgfAKrSrrSla-5-7n9-V1eVE3nKUwNVcV0eWZinCF5N0TcbkCMSrzr5OVPXCA9VXV-1b0uV0ezUBxUsXc--mhTc--n9_c1DnTIxCCSMKC9eCKClsT5OsN-V7NNV6QJcYxzUSxzSwUa7X9I99Xd9X-BhW8EE6rUw7ceV6fXkApBmf9f9hKGaOWzzzObV1V-PuipRpJ5--6iiarprP77--DrhL-0iv-fN-7jNKjExzXcc-Y1kshKK-5-V-wF2umWs-03EWs-03_Ms-23gdy-qlmyACJmcgfBnCIIrKpICUSIprUa0VOV5N5---V5---wRnFru7-E6kMClX-4lwIAzq9c-A7r-z5V7gdk8monBgfCCCElzbzxsN995-T5-KgiSunBnABmeeIHprrKJxpIISKICJpKprUzOcOzzUTN---0V--50aN1-1-PV7XX-SnCeY9f9mnUSSKzMtaOWa9VX--bBy1gzSxX-e-4nFNEAqTc-6C7Wgs-EC_DBjN-0nVb2N-3n_EYByN--nfWnV1Bx8ZorUaV9-CnqgbKISrNN9-9-8o5aACrSVWXV-C0gPk-jFRwSM6rsW9VV3h23TmfBjOxMUtaX17-6GYfE-0UHSjwfEzbxpUUq17ZcXeV-h8rqr--3odX6MF--8ogzvMJrN--V1xAI4npKwT7cV0Xp-Yf9nBeehKMKrzzSxrSxrUSzzSxrSMzSzzV-T-7V10Wa6VOWVT1mmeeegn9eeeXmcX97V-IJGnCr1--2JVvD-Bp7gzSxw6aeZcV0hHX5merts-EJjUhq7-2pGMvBtV-hJmVz1-1pJofqV-0KQ3c-0KztN-0L5k7-6LYvE--ILYxhTNc-0LZ57-ALu1CaV-4SIqV-hSQ3na--KpjX--ppknVESTPknBgmgn9f9f9onBmenSpMGzxbtbzbaOV6zbX9-NObWV-4TmmV3SToLnBnJnST5Oa-1-0px0YD-0pylvD--L3Ge--q54IV2CWmWnUUz5Pcec-nO-URhBoUy6VX-1qFuQGc-MOcagpR---CcERs-0PQUc3MPs8gehClzSzbzzUzxMr6tyUzzbzaTP0HgmcVXegeeeXeh9eX7e-JqqUEKIMpzz5T7cXX97-bRBpSKoT5X7--M4g1-grMIbBecemgfMxUpzMzObtu7V0zrrq7e9eV-MTaFhOy9VfLnt2-9-17117VcX1-1X97cVXX9177V-VXV9-WaOSMSSSSrrUSKMKxrrrUSxrrUzsOV7--N-tVN--N0bKIKKQCKRnKQCUtrTUtUSxpMprrUUKxSpxrpprMrxF-EcVGxTX" :
		11 === bI.s9 ? oE =
		"QREc7lR7oVUYGy_KJOJKKKKuK4OKT_K4KG_u_GJJO_3K_KKKL_4KL__KK_4_LKK_MjzuOOK_KKKOKLKKLLUjzji_KKMgyzdMjzgzzzEszzyzzjvuQvieeid_POOvzkzvzy_TvuOK4GKKvyyzzydJQi_OdKKaLOLajdOPuueaYBzydJdPOybvdbjeuvizwzujuQnunl2wBnBE2-EYBz2nk2kFzwBzznBydnwznEYwnnEBnnwkyvwzEgznzzEwwwwznnxK4KGOJ2zl2nzifvwyw-J0GGJ042nvzEvzwznJEnzlG42zg02KKGFzzEzzeT-woKK3EvoKLOJBnBnzE2EznnwnwznznzpJKKKKOOKG_G_LKFwl2zK8K4JK4KKKKKKKKKKKKF_g38EBemXeeeeeemeemgeXeegf9XgeeexCxzzzoenErMroeXeeegfEzSS9eVcghoeemf9YBe9ee9eXghrzzzKBfIUzrbzUzzzbryOxrzzbbsTXe9geY9egeeBeY91cUy6z6xtxbxzbzlzObrx6ztztue5UyT6zzbzbae7UxyOzzbzzbbtzyUyUtzztbyUzzbuecZeBeXeeecgeV--1ViZ-00JJIV379xwOLKKgzyzK2zF5g4ccBgcn9ggepUxAprzztxtyOzbzzbe90f9cXX99V-cAQAOx-PFLqqmemxp9zzttzIAzrrzzxzzze7X9ZeceX5ece---AorF0B4uUghzzae9-6VjJh_UznK---NUXV1NBEpOLYnzlJ--0X1X--Vl4pk-B5KYEc-D29vazJ-HkP9DmexzxxzzzrbztbseeeHeYHceXV-NC5uUF-R5YYCyX-2Vpc0jCF--5lM7-12TuM-hkQrZrS9X7f9e9enrSxrzaUxx9f9zzHhzUxqOaOsObbzSxoqUxyUY999c9Xcecce7eV5NDrSOLauUwzzzzEGK4K_0F2Z6YfEUoefUtzUzMyNNe9ceec0a2zdLQdyjwynxKKFznpGGJ--1-_X-AW0ZpjvnzCKKJ--1309--02HO---WrDV1sGfOOjzzn4KK-0FYN1qP-2W7RtfkF6J8G-geeemf9gemegfEbqUrxEbyTgecOwUbbxEbyTTUac-H3crrjCLEE1KoQBrofHegeecBefBeeegfAACxUHemeeeeegxrSrzxxoeeXXe9ecdAzUomXexzrzroeXeecc711_rI9nUSxxKMSryUzrzUpxKx9cV7cceghrrJnJmhBe9ee9VUrxy0a5-7e7VVX-7XccOVX99eefKKAAMxMIUxzMrxK9XXXXeXceXceee9mxxp9oeV9mf9eHgmeeWsXnHcmfA9oenJf9XcXcOby999exKKzMIJcceYBggghxrI9e9e99pxzpHeccceX110cXe7cXWzrUzUxzzrzrtzbaOcVcceXccce9Xceegcce6emeZe96buXeXoe7TZhBe2Bmc6eIBdC9eC9fHcHcAC9erxHed90C9MTUzoh9ZjJeofIAzHghHzI9nHYACCA9VxIHcfx9gmmnEJrKErJzSC9xrrrtyTOaUa0xSxKroxMSSrIMKqUlc6bztWx51--P7OyOy0tcX997V-NP6WsUaUbaOaX6VTOzzzxxpHnBnBggofCKSpJxUUo6pzzbtzyUzbxSzogfABeceef9mpSzoppI9e7X9nCCKMMK9fEI9ee19mfBgemh9W91WuI9gf9e5eX17N5NUXc0a1nBenUHfSorpMKMrHXh9XgmY9nMJmV1nIISC93fA9gnKBemp9e9XxKoeeeA9fSMzrxrpMSxMMHorIKII9eecgeceeee9gmghrKKCpKCIJonMozKJp6xyUzSppr5OttzzzzWWtyN5ObcV-5OaOWttyTTN5VWWbbzzrrxaOtbyNTUUrrSMMSpxrrSrUxxUUpSzSMKonIOaN6aVcVNOzUrL17ccXccVPeccX7717cXX-5V0zbzJxOboUKrKrrUxxrrSxxrSorIKSrMpUUISxxAESpGxrsVWzP7XXWzrrxVNXoccWcOcX-6xrV6tx0zxzUtbtzq99777WWVUV-50xaV0tsNUbzpUUzp9nUrpIyOzaUy9ge197e6zlbbbzbbyUzommhxonCHeIxxrxrxrUSxrUrrMKoogmmecmeeZcceX7eXHeeemmmn9eedCzHfoeeeZe_IMzIpoxHXKzUJxxUoUUprza0zxxxrUtyOaUUlbxIMKKKoopCIJpJoommeeeX9A9mmn9cce9Xe9ee19eXe17eA9mgnCKpJnBee7XXXcee7X-99XXeee9993cXV0ba5-XV0aOA919HgmeeBeY9mmX9ememef9ggn9ghA9mXcmeecX7gpCCCBnAAAABnCIICIKpJonCABnBgf9hBpBnBnCCCJonBnJnJonCIKprSKIMKKpJpCIKIIIHrSMpJjJxMpz6zHxCrrMMUSprKSIrMrMUUMrSxrSrSrrUUyTUbbtz6zbr6xxxtbtyOtyU56tzyUTUxzrSpxKMU6lWxzqNUSxpUxEMKJxCJnMKEUHhICEMrHxSUMSrMSrSppppMKMSSMKpKBxMKpppKKCBnCBopIKIKCEKCKKMMSpppSSSMMMMSSKKKKpSKKSKSMMMSrSSSMKpSSSppKICppMrUSyTUztbzzbrxaUq6zttbaObaOa5TOa5NOWWa5TT5-N50V7WWbaUbbtaOX-N-7-1-170cTT5ObaOa5OtttttbaOa5N5-1510c5V--0VVcX-1-V51-N7X-WWV55N55550ta6aNNOa5Oa5OaOaOtbaOaOaOaNOa55NNOV50a5-T50WWV-N--7nBf9mcmgcmmmeBgmee7X17eWba11X7VX7X79X97Jc7V7-V7117X7cV7---V1-X7X97--7X111111711-VX77V7-UMMMSMSrN0V5-UKKCMxpprSSSrMSSKprxrSSSMKKSKrMrrSrMKpprSrKrSSCKKppKpoxMUOzaTOzyUaTUttWtzbbyOts-OyUbbztVObyNNOyTV-0WxWWaNNN7X7VXceXXX17-7WWIBnIBonBd9eAA9Vc7NNV1CIK9117-797X7VX1111WbWy0xUzprSSSpprUxrSxxrzTUbqP6zrSKprxzxzzTUUUztzztxzzbtzSSUSMSzprSrrtzJmmfrSrSUSzaTN756xKxCSSIKMMKKpSKpMKprKprMKpSKpprMMMMMKrJxSSrSaNNOtVN6s---0WV17N-V-0aUWbyN0baOaOaNNOWbyOsN70btaUL0xLT6o-UM6lX6brSppSSSUUSrppEF6pSSSMKKCKVUMUL0tba-USSUKSKSSMKrMKpKSKKCKpIKIM6rSSpxMSppKSMKSSSpSrSxrUSlwT777VV---777X7XX19XXX--7V1Hc1--N0VN570c6bzKMUzrSxprK6xMxxrpCKS5NTT6cN0zltaTOa--57-11-V7X7VcX7c7X77977VN-Oa0aTObaUUoOxpKpqP70btyOwUsOw776rS6twUkUOtWaObX6ta0bVcOcWy5N-5T96XWaWccZeWWtaX97cecWzUxxq1X7cVX77VX999750a6VOttw1XecXnIBe9-VZceX7V0zTT-OtWWbrzSpCCUJltWbbbzxzUpoxopxTUUxprS9zMMSKKxGtaUtzV177177cX7X7X997-OtWaNX150a6V6rxUxtbaOV-NN0WV-75-0V77777X711-1X195XccccXZe_on9c29c799ecVOWaN-55NP-T-TUzzzzlzzzsUzxzzrxAqUyUzuA9770V-5UzbzOzSSUrOVOac7WzzxCrSUMJgpIJrKIHgrSJxSrMSrSrSrrSrSrSrrSrSrU55-X77TOe775OxsXX7X15WzMcXccX-Xee77-VX-UzkOzSq7UbzzxzSX5OVNUbaTP6xzrzccccce1XXeccWzzsP7ce-U6rSzSzbzUxxxzxzUwUqXcPVTT99XXce9eeXzS9cXXX9XceXe9e9ce9cece9e9ececeeeeeceexxxxrHee7ece7Ue9omeeXeeeeeeeccX999e9eeXgef9eeXXXeceec5eXefC9eWcPn9WeXeeef9hzSxHcfx9cBe9emee9X_Sp9e9Xe999XWyce7X9ceeeeXerp9eeeceecVeeeeen97d9ec_BemgeemVTOyTNUbttXVe9cce9eeef9e1ee95eeec--3mJ3-01RcfV-NIoOUF8R8uLgf9hIHeec1Xe9fBeh9mfEzzyUrHenxyUyUtzyUxzzbyTTNf9e0a0cWEvKdK_KKKLKOK_aJaPPOOUeKdUddLTyEukyvizjzzzGK43G3322EBkwBzkwwzwzwzwznwoKKJ0K1X2ABrpzzozzzaUWtacme9hxBcXBoeV9--7KZ5R0K1i5QpxUxzUyUzbxztyX9e9oe7eAHXe9eV--KycF0gAC-Bf9rUzta7c-54dtbV-61qbAAy---LztF1oAWqEUzrzxzbeXeecf9V-94pL6xF--Agu7--4xl31226aIBogfABfBf9nxxMyUztttttzbbzbyUtzbsX9f9e99eeec--5HLZ-A28MQry9f055LVqKKPKOaOddaKaKOOd_bizvy_MeOOOK_LPPK42BnJFzszEo0G4aLKOUjuOLO__GKKKKJHKG32K_KOKbnzzdKOLOeOO_-EoJG5KK_KKKGK2wzElGLK4K44JGJKLLLKFnLLOJF23dLLLK43_OK_KOOKFqKOKeK4KG43KKGGGOKKGKKJKKKKG0OKF_FOK_OKKKPLJK_KLK____LKOKKOLLMjidbzzdPPKOKJOG2pOKOKLLKOUu_PUzzzzYwzwydKdaOOKKOOKKLKaOK_OO__aEeOLTdzzEBydaaKdbEnzjfBnuzdPLLO_OLLOK_OLLLUzEnnEnzEnwwnz42zuRzEwwwwznK2nnwzEnEEEnnwzEzvdKKOLO_OOdOUEnwznnzYwnkEEzyEiuUvjzzzvjnyaTyuiz02yyawBkyeQeeOueddaUibuPJi__9gwnyaOOPTvuPJTbeLzEiYuEiaQEeRydiddddaJ-x4K4deadddaa_daaOdaOaOddePaPOaauddeufEeaLiuOfevduazjuzfvieeeuPueefiviiebe_3KvfjfEfiveePivjfiuiE-FGJ--3--4-FFF-FF33F-B-22vjyjeauefeiiuzefujidavuyuivfiuuvfeeuePaPiuvvjiiyyzyivvvvvyziyvzjzEnnEvyviviuvivjjzvjyyzwEii_viuviuo-2vjffdKHPdivgEijjieEigzjvfYyfno3-z2BzvvjeOiivffdideeeieOdeLKbeLuOOOOedaeOeidjgnueaaLOaafeveLyyvivffiiuuiiiiiiiivevfiiieiiviviyyvvvvvvvjiuvvjefeueieieeeddveTefeaieeeeQePevedeffeuieeuaeeeaeee_fiffiieeQeffideufj3323FwEjdyuMeuaveTuQeuLEeudG33_eLVzizvdjfzi_JibeJF44fzeeu2vc3BEfdvdjfy_vvfyEvd_TyfyeTgyY2yzFF-wz2zJGF3F-kz-F22Bn-0GKG43F-2BwzFk3-BoFC4300-EyzjzBo3-l0-zzzwzwzEBk2B-440-04443-EivzjjvzzwwkkBn2-B322BB-zyadY2-B2-nBkk-oF0-o-o2wBnnBnnEsnE2Ezsnvzk2nn32-nB-kk--BBl-2-23-3-BF-B-ysn2-kBBnEBBkn22-B--00-00GKK43GG03JG43KKOGJ_444OOFddF23BJHJGGGJJKOddG-kBKHJ44G-nB-K3-F3-F403JG3GJK45KGdGK8J3G44-3G04J3_LK2B23JK8G3FExKOLK__KGG4KOKG-3K4OHLK_affedaK-G-n2-F-wn3_aO___KaPJ4aOeadaOaLdG3G3GGK5O_OOOGGJFG3FFFF-k-22--n--GJ2K4KK_KKG_KF2n2-2-C-nu22-2-nBn-KKKOK_OPaeOdd_eOK0O_KOLJG44J33-FFF3-F-2-B-B-k2E202--n-wnE2yEEEB2ynkygEfynEvijz2y2GJ2zgzEgwygwyzvyigwwziiiveaaidfuuevfiE22-k-0---F----knBnBnnnnBnBwzBnnEwx-EsnGJEnkCJBBBFkB22nyaLdfeaBknB-EsnBnB-zznzKK2nzznEzx03BknBnBwznByEwzBnzBynnzjzdLJ_OL_aOigwnnBnyEnzEEnlGOJK4FpF-FnBOJGFzywnwkoJKOK_OK____aOJBEBwnEEEwwknwzzzzzzzzzzzEBwnnwzEswwwk-nC3LK2BLKK2wznJK4JK23J4-FzYsCG2lFoJEC332JCaOT_aLPJ8_OOJ34JBFnFwBEK4JF3G48K_4_44HLLPdaPaeOOaLLQiuudeOdaLOOOOOLKOeePPduOaOdGOdGJB3G2FFnBB-nB4K4_GG44GJC3GJK4KOKFwB-kG_F2BknBnnBwnEBzBwwnzwzC3EzwnEjzEEEEE4KK0-zjizwwwwFzzvih-yC02yijEnnnwkF2Ez2CJGGKKdeOKaO_Gbd___Fo-nEB48O_aOG2k2pK3EBzF2042wwwnzznnEEnlK_4F--Bnu7-D5P0Mj4-NFneHn99fHdEpA9e1mrUrMMy6rbyObacVUbsXc-95VQqU-0RC72gfrLTUX9WL7PGHOKOLKaLLO_aOzjzdKK8fyy2yvzzzzjnvEyszn-yvuyji_KjEzfvvdedLOOK_au_K_8KK4O_Oavznwzj2vYyiizdQjjyvjvzjnFJ43FEvyyvysEV2vkG-oJJ-J2vC2nzfvdvcyvB2EgwkznoHKJEKF44K444Fwkzjx4JEwoLK2EGKJ34KOGFCFK2C3GKKKLujnzuK_aK4K2Bl0KK_K__OOd_id_032E-wwwznKK-5koy5rxzzye9XeV0NQGfQzp409Fr2emf9gemeoemhxzoeenrzzzzzzxoeeeeHeeemnrUzzJr6zzzzbyUztttzIzrzrtzaP5Uxy1XXc7TOVNOcXemnCBoeVOX9IHeX9ec9V-7QyMR-O2VLYCrzOcTXeV-7R7oR-42W7vEc-16Tkb---xZJV2sUexOjjEzzlK4KJ--2yzH--10C8--0-gFV-7VNER-038rYV-7WePR--3FiX-8X7VOizvlGJF--GAnc-q7b4qavzwz43KJ--3In9--193W--G5YBk--7uzo-03SVI---Z6nF-JH3JgtV1NZFfOiznCGJ-03ZUnV-NZy-Ok--HUC7-18Epr--G9ncs--8SB3-23innD--1O-0-6lCPTmmnCzzbWa9c--8glJ--3qO1-3XRYCbzK-XlIJjmegemef9efDUzwUzx9fHfBfxyTTTUpsTUxzWttf9eeWtzu7-19Vk6-2lJH2nUze9VKcf22OuK5ObzzuOLKUzviaKzzzfzvwwzEwwwzYBzB0GF5JGaKOJOG__3a_OJBG4-PlNXPmfBnBnBofADUzJzbbbbbzpxzbXe0ccX9Bc6s--1mmx-6lYOwmextzUrP7cc-5BSZbV-45HC2T7-9BdhMxF6JOkqwemmmmf9e19nJemmmenzryUyTTUyUbbbbzbtzue7-qBstqKOOYvEEBo-45TmAqV-1Bzxq-CGcDCxzS9dEMrxowOX7V19X-6YINKaOgnk--leh3lV-cqZnQo-AGhLznASpxpObxa-cXcXV--sj9F--RjYc-9DO8aRk-JRodC5V1Ntt6OKvznCJ--6Flm--Yf48k-BTXJhc-LEJ7aTYC-0BTkwjJhyP7P1LYtQd_KPPLbePLnuafp-yEeddzzEuOiydeKOGdzeaK_jzjjuKKaOaOUEnynBzvnzVyzzEE4FnBwBGGOJBF334G0-3JKJEknBBlKKK-wnCF-RUIqgju-4Yv7daLnB--6voH-EYxyt_ueaYBBE24F-wUjugoqOWc09F4K5OGOOYyzBzElK-1m02NnLNP--32h4-0m0qgnqV-1FPCq--H2Gus--FRXJ--7Gue--38td-6H3zimfGzxLPWaX--3E7C--16gBV2O3CZOuLecn-n3--RX7jgyP--3G5C--18RXV3t3nbP_3_iju_Hz2-B-03XWAgfxyTcV-047KF--Xjy7--GPHJ0W7iC6CSKKIICJnCBemzqUbV6sUa5PX6w1711-V0d4t8OOwwo--7o-P-3ZP3pin4--1CVBV-85mEN0d7rPv9hEIBeXrICxpCAIBtxrtbttztWV--UWc7ec--ZRVOk-3Y_fi--3SWl-1HE1urq7V-06YZF0JYnKBgltzy9c-1GuEq--1Ey3V-87P_R--8B0X--3aep-1HIL9xw7V-08jeF1RZt2BoxCKLV5NOaTeV-LHXk5OUn-3B_KjRnEJxK6xSIBnGsOV5-5-N7e0PZfppdQivevivviuviuvfffiviiiuuivV2vxJG3G400-F2zoG43G3G3G43G3043FJF-B_XHC--1HrHb--1Ml9V0OBPSTykK--mPGuw--0CdCF-3bQrg--_-bGk--c3w7-1J1Tb-nHWSNmnBmnCBnBognAxAACOzzzUbzOzIAAEbaOtbpICxtaNHW9WWttge-Ou9dHce0uXWaOaNTc0qJ_j5Tfuiyfuvyn-43-C4GJJF-ZdZ-CEN--qKF5MivvzoGGJJ--9fZm--4NVG0OHj5Imgmgn9mggggggzbxlyUttxUxrltzzxUp9mcegf9nBx9HzICBnICCIKMbaOWa0c55OWaUlaOaUxxrIJogmqTUpK6aNNOaN0xMUNT1-XXceee7cN575ec0cecV-0P9QF-3hh-D-7_jKnaJ2nyZ-YA_nYBnBnEUttXVOc8aMCmTLLKaaLKPddbjiuievivijivfivy_PPeaeffjyyvjjvzEnzso3-F-3G42l4J-2zvEBGG00LLuJF-3KFK003GFEyxG-nEzvp-B33G_JK--muI9w-5OSJStaOeji--wBzzzKGOK-0JieNwmeCzzaV-TMQgDzvlJJ-GAk2vrxkPe7--MV8o-6At0AC5--OURXy--gjqMEraeV2OUrqueTfVFl22F--jvyN-PNAgydcnF-Yn1WRrSpppMJeYrJnrUKq6ce7WzTUzUUUNVNUtsX7VJece9XXX97c--5440-2I2OHnJsOV-1NxR5-Bn6z2mgeegenBzbzzUbtsN--0_72F--nKlc11OxXDLKKO_OKLQvzwwwzEnnnnKF0RnydBghMMNN--dOfypPMdfibveueeaPaOO_3eafd_J8KOKKaaOaLuLaLvcyEieQevy2l---GFpJFzz-ynwwzzyeiyv-Bx3FEjjzVEvV2s2ufk2G0--3FF2020003JG33F-dC_NYAASKopSbtV--77--QufZ--CxYX-5b-NCbjY3F--sGR7-DRSQ6v4--2ZTFV-OmFuQF--tWp7--Rrk3-2DRQfF-ObG_p_LKK4LQjvvvvjk3BB--2cnkV-0opdF-BuUUE--1SP5b--2fOPV-0qQ8F-JvLKBlV-ttYkOgB--EKfm-GbimObjzjzzK4JOJJ-QEW629fAEU6aT5-Kbx48aOGeQiv-nzVk1K--4-Bei-2c4b_aEF-00fX7--VsoZ--FYHH--7bwK--3KeVV-19ymF-456Wg-0cmm4s--oPB-o--PCDOOk-46F9i--7vjd--oSsBlV-uEMIQY3-0GwSv--1EeMF-06tTc-5Z2ZLk-2HUyYu-0dG4tY--3dhcV-1KhfF-09wIc0ea0y5OddePfiivc-kk---0--hB85hIq---PPqqQ-ACDhYBegf9nBoyOyOtzzxAUzUxrxzxKrqUSHnEyUzzOzbcXXe5e9X97XXXccX9Xee--1UpAF-SFcxhOX-1eB0xgo--Jd31--9KJS-9pBVymefBnKMUUaOVNN72Xdb-LMveiuLKJKMinzzzvfY2BzjEzzY3GK3FK4KOGKF-0Ji17-ueZcLLyvwzYGGK-0KK8igpzza9cc4aecw5eQeefeK3iifeyVyyaPysnzivW-yvivjf3G32JdFG5OJG-3--EB2003-C_GGF-0M4Pc--fYVJ-0L1VIV-1kjSF-0NOQ7--gXeJ--LIdm--AAXh--Kaimk--h2YJ--LYMm--fHOlV-4QMoB-1fQzGbV-OM1DQUKrSV17XV-PsGvQ--0R8xc-Pi9hLee----4n7gV0uuK8Ovwo_F-0SPF7-Tihf5jioG3-rMLqIMSxJfMpp51-Uk7-X7mV-1vH3F-0SiM7--ivJJ-4MU-YL--5j0_5V--MW4m-Ffnz4uebcnu-E0K3--4umFV-1xQQF0KULdhJnCaOX--5ji96o-jMt7YCKBproNN55-KC9-7-Pjp4LPbw---4zuVV-2-p7F-4VdEB-3g5r8awo-6q3GTnIBnBlaOaOV--kXLJ-0NJ5IV7f1wFOePedueiffjEBwB-FFFFFG0F7pWV6CJfCAHcXBnHgpIN5Ox6lbxrJpMSxbpNN7V56rMF5-7-X577V--lo2Z-0O25AV-28oRFJ__7yBm_ICCAEJgcnBdJonCBgegnJpS9XXe7nIKCSSKpxppCpKUrbzKOzaUUoUzKLOttxGVV557-OWtbVWV0a6ryX7X70cX1-cUu-Uy90zaPcXe90XX--AA8ER--Oap9--gnQdkH4b2ThSprSrUSrMSSUSxpMKpUSprMKrMKSpprUMMSrrSrSR6rbr--N--0X71d9-VV7e7WaWu1Zc-cVe95BcZe7917X7cXV7VX9eeX9--Bw-4--LXIak-9oUkasF-KdZHh5--QKOSQF-0f7Ac-DpZnLQC--5ifVV-2M_TF2_g-RhCKoxKSR7-6xX7OVh9-77uqCsLOaOKKK4K45PKaadudaaeddaejyeedeTsz--o-k0-nzuafiueskznG3FB3FG3EBnknEs4_OOGa_K03F-BBzvnywzvvzEBBkk-EQ93ASrF17--hcV8V-0ho3c-1r18a-KLsKtn9ghIKopJxGbzlz5PcOWWV6bZeVXV-erChLbuawo3F-0QgRIV0AS_oTz4F-0iqsc-LrVEayh0F-0jBw7-1raaM0sqwtimmmocCrUzKrUzbxJeYBexrSIoT50xMUUSrzrrxxxrppMMIrI9gnJzzaUOzSrSUUzxtbX7OsU-UOzrUxxSSSpxSrzxzrr57cWue-BcVX-X7X10bqN7e7ce7-7cX7eX7ecccXce9e9997eBhHmhBnBme7791-5119cXV-ATZeR--Qs0X--CxF4-2M-EHrMNVV-1s18b-0M09Rrc-3i33Gcy3-7r1pBmhExpSrcP9-7-3i6ThbzJ-0r2kLmxV-LsT9bywKF-Cl8ajc-5sg76o--RNyP--DBcS--r75Dw--AZP8N-CRYLYIrWcV-AZ_gR-hRb0Q9efBUUzzxrq7Ve9--DIcG--69X3V-2_KXF0CmrNBxUTN7e--DM2x--MBNss1qtbGTeeeiebfeviufifjG-FF-FK-2F-F0-F--6CEoV-2b0EF-pnx7hKlVX--DWBO-IrGX5pJgomd9Beefrr6rUttyNUsWaN9c-iuOLLLPjcnF2--0p_uc--uwAJ-ISZnnCIKWa---QgbdT-0_qJ7CprKy7917--Do60-0MPdwpc0LirO4eLzjezyyzzzyyzjzjzzzvvsFEiyn3OJFKKJFEwwKOKJJKGd_GKKG3JK4KJ-ESx2nSrP79-5j2XKaPVn--_t4Cgjtc-1wYGa--6ZPXV-Ama9N-CTK4nUSXX--2n3-F24thzhrHcXnIqUttxbcd97-3jCxpvh0-1rbiZpEa1-JjETd_azzgznzC_KK4F-0TTz2V-2nrwF-Ctvzgs-Dwy-LEp--Mcags11x3uLKKLPLLLOeNwzBknnwwzECF-0uAGc-ax4e5iii30---6dYeV-2pDWF-0v0pc-uxhu5KvzivnG3GF-0vS9c-Tximavyl4F0GTtRbKpKKKIMKorSKxcP77--50cV1--X-0jSM8x--MlFHs-PyMyriv3J--6njmV-AuIRR--UKqu7wjf1GaaeOdiaPdeeaeadePOdd_OGG3FK43G443G3G-nBB-En2B3P_3HKJKGJJHPdOKJO_aOeOaaQe_K4_F3G3O_8PKOeLOPeOK9TddJ01OaPPu_aOdaO__OKKaK___GOOOaLLLOd_-9PPeaPPefeueOH_Afeeeueuaeaieeeaadd_OdvvivzynwnnwnEnzzzzzznBnBzEEEEzznwzEnwzzzzvizyzuuaveuePv-wnBwwnBnEePaOaPaOLEwBknueaaMwzeeePPujjczvyvwnnnEuuusEnnEEEEzznEBBBkn2BnE2BknknBnBwwn2Bn2B2BBBkkn2--3Bk-k-F3F3J0F-BK8J-0-3Fl43J0JJFC0220-FFB--434_F02-3-FoF-3--ULK1-9jk6__KPzsnC-0rs2uxu7-5z6oLo-0Ua7Y--2yTuFFpzEegnKCAHYSIEIBgmnBen9mhJonKKpKpKIICCBopKMKpCMMMSxxtbbyOVNN50V550VN50VN50WVN-0a--0xLN-V--711-V0R4w-PfBJ-5sCnMpUSzGcVcX--36DPF-a3T2CpX7-21Rkb--7L9iV-3CdyF-D7K1E--E3yyLPB-AsdryprMSrUMUXVXX77X7-0lNuCb-0sh-cpsV-24z4a-0O5skoP--HJcO--8cjcVMwvW_PePffuOedddaOd_OLivedaLOQswwnnBwnnBBEEz2EknBl___JJF2-ddFJBB-kFJF-3Oxo3mryUe9--oNo0k-L_0tBtV-x9UXPVk0Kd_2QCCKJnKMU6Wy6x0a5OtWWaA9f9eX9VNhBeeOaOaK_aOaOOOOOOOLK___aLLLL_aLbzjjjEnnnEEBnEBnBwwzEzFnBzBnnnBwkBOJ3--9Q2JV0hFDWPTj03-0esaIV-4M3pF-DfxqCV-0LPM3-8fbYnBy5-Cq8_WadYzEwLK3--A59FV-CZXbR-2ghDYk--LQk_-0vCsPnTV-0OncZ--gxEe--LXbt-4QGLNnIMaTP9V-4d4NF0DoYGBxBttWe--LdTx--AJjgV-4fDgF-1q1n72bQ0Tq_fzyaLyy__JbzjyiyEvnzoEzz4K44GG440J0GJ--AQaoV-hj4xQW--QUtTs-0QzBZ-2hzuIu--M0W0-3QVpXzUSX9X--r954k-6-LVD--s6udk-U12pBUe--NKbO--B9nkV-55gUGAILAU-ee9eeXeeXeee9eeXeyN9eeeee9XAzbzzzUUtzxzrza1fzrzs7Xe9XmeeiUzrWztzbzzsUztbyUUrztzUzzyUVfzMzzzzzzzzzzyUzzzy1SzSxzrzVczzSpUzbrzzztzzzzrzzy1cXXecXe9zzxzV9eeee99USzzzztzSzzzzzzzzzzWtzMUbUztUSzzzrzzsD2xzxrzbxrzbVeXUzMMzbztzztyUWVX7cX7X7ccX8rtVX2Vc1gVWrVNOta1UbbaT6byOyTMqXggpFemnBnLpThScXXopfJppUhSzt_USUrxSxSzUUKwepzznMzUwefMzSCJXAKRemgegeeoeeeeeeXe99eACMxzUrxzUzzzPmeceeeeXeepzrzzzr9eee9e9ehUrxzrzryUzzzxwg-3sRUlgzK-1wGfBrUXc-1s_20ck-8lARQMsc-6sakWaUYsG--BJEyXtygSR0KGMwzkKK_KK_KJKK4JRnEEEEzEnwznzwzwzzzwzzwzjw3wkznnnkKOKGnEzwEEwzB0wn2vyizz0nEEqPvnzzzwjjEjzEEwznzzEzzwnvz2jjvvzwnkTzzzj2vznzvzyzzyzzwzzwzzwzwzzzEnwnknzfjvuzECfjDzEBBwzEwzEwzwzzE2vfwzk6njvw-nzEEzEzyzvjvLizyyzzzyzzzzzvzzzzzeOPPKd_4aPuwnaLK_aOezjEwznnn2EEnn2wzzEmwznzEn2nwwzznwwnywwzzvzEznwwnDPzzwzzzzvzEvznzjEyjEEnnwzzzzvzvzywviwzzEBwzwzzveznyuzjEzzzwznzjwzjwwztfvzznEEEnzzzzzwn2BwuO_fizzvzzjzjDywzjjEqKfyvzEOfzzyLjzmzzn2hPjjAwzjvjezvnfzzzjAzfjjqKOO___OL_KKKOK_LKLO_KKaKKOaOOLOO_ePLiKKKLKKLKKLOOKa--wN-ww--DBg5N-4latIyc-MYUfaRyCF066q1CJxa5X--5F6mF7z9BugfEUSrSArzxBefBeJcrrzbtzUzHmfUzzzttVX7X7XXX7XXX9--yKGGTsF-2mkw2k-3tQstjx4--BkdsV0DNK7PzGF-6B9ki-9tXkO_K_zznl-0RovXrc--OeZW-IRqTXoeXefUzzzxHYUyWzzzu9XZmZe7-1tmAWzJ-0nbeYV0DRxYTvG--2Dto7-0bYlJ-0nm6v-4DTdBTzyzvzvlJKJK4K-8wxJTrrrzrzOceXce9V-DTg9R-dnsbYExxryUzaeeceec-6bz2Lk-2o5Gnu-1u2YOv3-0oCyAV-iaLAUp--CCXRV2Db2oOOwzvnpKF-ppYW0bVVaOyUzzzrxpxpzPk-2eBMb-8xGoerUUxzry9Xce9XV2ydQ2OK_OjjnBwnJ--pC19-2uliNEyk" :
		12 === bI.s9 ? oE =
		"JJAf2uP6y-0nEiiuyywnyueuTbfevfvvjivivivjfvivviyvuuyEgzjjzzvviyvizvviuNziyvijvijfvyvgzvvvvfeu0-F-n5a_GG4KJGGG3G3G3FFJFmKGJ4JGGGG3GJJFJG3G3G323G--kLPeduaKGFGGGG443JJJJJJG--B-C0FJK__443-BJ-66wmpBnJopCMJpCCCIIIJoopKKICKCBnCKJgooopMIDOzzSzUzbzzUSyTUxxrrrrrP1XcXXX9Hcn9cceemece7cPIoeX0sWWaOWVNTOcTNNcN0V0V5-N0aOa-0V--N50a5Obyc-M0z3TPOdgBnBF0NOpxpMV7-M2mMiLbinz03F0sTx8mfrNT-2l6QEdMwwp-5XX7UMTP1V1GIuvaNn-5Xfxrpw5XV1GNTEfn4-_XvzjAAA9mfA9ed9fpzyTUzyUaUyOX3n59NTKLLKHPPPO_LK4iidea_O_QeideeaLOLLJG3-0eeddOaPO_OKLKzEznzjgnnzBykknByEYnByug-3332ElJ222-2wBko2BnBnBwwzwx-9Y6j6rrrkccc-E5ctEizpJF-aDYgSMGz-X10G6VyjiyuuPeiuzjivh3G3K3G--k-9JGFAPEIZSKBghKSMIpKpCJnI9gcXeccehHccoeXBeoppKIJoghIHnCJnJmemmecmfA9jyTUzzzbbxbV0WaTT-OtWWWV0zxtyUN6yUzSxrSqTUztaN71190V7-5V15VUy--V-lxHEg--33oL-67Dhyu0--3FoL--7ahw-LGYowfzu-0HFMIfF-aHWWwxxxcXX-E8ZrUdfVl--TIJLzSr17V0wcDLvivjysGK3G4XaJb1zppIJpBccccge7fUxx9eocX7cXX6y7Y99Heggen9nJdAHp9Xnp9IIJfICIBdCKKIIMMJme19eXxxp9X9VVfEMMMSBpooe7XCSBomccxxpHcrKKCMHmXXmcxoeX1mpJe70BrMJmVV--gxExIpJcX71nKCJmhCKKCIJoopCKKKHX8KHd9nKrKBj6xrSrKpz6xSMMSrKppwObaP-UzSCAICIKCIKKKCMMKKCpCMMSrrrKpKprUSprMUSMrSprKrSpSrUrUSxpxprSrMrMprSSSppMKprSprrSrxKSUSqUGbqUbbrxrSxrSrKHXXeggeYBnBgmnBnKCrJnKpIKpBnKCMMrSS9chKKIBeX77EIAE5OxIIKKKIIEKSKSKKSKKMKpKpKKSMSSSSrSzxxxzlzzUzzzzzUxrMMMMSxxxrrxrrxxxxzUzOzrbxzrxzzzw6w6yOtttttyUbbyTTTTTTTTTUtzIrzbzbzbba-71-VVV77V--7711-V1-1---51--1-1-V0cN-N5VN1e-ee7-1mc71Xe9fIBcVV0WbyOzxX-VV7VNN5TUzUu1ce9menBecmf9gxHc7c7V-777---50VP-V-N-0WxppSJpr6zyObzttV6rMKpUyObttbryUbzWaP0sNNOX757X97X7ce9XXXXXVc7-V-X7VX5-V7eeA9menA9fBnCBnIIJoorMIRObpIKMJpppSSSMSoeX71-V7777X97c5V-ccWV0VX77--NN55-N--7U5111cXXenBcc7fABgcX117X7c-gf9emV---1--XXXVX7X17579VVV117Xed9XecXX--WV5Uzz6zyUzrSrUUaNUlxtzXXXee1777X1e-5NOy--WV5OttttaTUzyUrxxtzzzlzMUrzzxaUttbbxWzxpSonBmpCCJpCKCIJpJooeACHpprSxaOV577U6sOWV-NNN70WVOWzwTTT5NUxryUba5NNOba1cc79cXX199X-91X99mhIHfJmXgxxxpHe9XccX997c7X0zV--V-N7P6k49V711-111X-77cX79mmeHeccV1mdbn_Uno-DKNVSo1-O9kaiKKzzEzpK-8_SLEzzzeeeV1Hinzjh3-8_UsM9mjtyTVBHk8AfiyvivizpG43G3GG--0OIzV2mnjMaLEBxn29mc4SSpprSSSUprrKprSSpppKMMSrMrxrKIKHhKHfIKKpIBpCIIJpIJnIKpSKJo1AKKpppxprSprpMKphIKhMUSrCKMRpMKrrSMMMMSKUVUxxUxSJe19efAKKUbKnMxKKUKIKUStaSrUMTUrzbzxxrSzzUy5SSKtbqprTprzSxxSrBXe9ghSrMMUyUzzbySKrUKpUSpSUMtV---D--0aN-X9997977VVe9XD-19XX1-9XcXXXXYxzUttzbV-7VX78by0rUSppKMbs5-V77V77X-X71--17-X-7V-0WWVN-6byTOrJepKpSrpxrUSSIKSKSzrrrs797c1711ObUSxxpSSSSSSy5--7997VV6z_rrSrxpSprs-7VX17XeXVXN-11-TUUSxztyTT5ObzrSSrzbtbbtUKzrxrSxzUrzUzShKhMKrxzzzxyMtzqnAA9mgfAAACKICBnKzbbWWbaOtbaOaTUbtyUyTTTOaOa556zyMxrUtaTUzrxrrrzSzxzbta5N0s-ee997cX97cX7cX7X771-V-aT--V17V7X1--V7Xea6ty5T5Mts5--5-550aT55NU_ySxxta5OVD--0VN5NND-N--8a6a5OsN1og55OVVOta-75OTSqhCMrBmhMbbtzzzzta--NN5-8Us0V-N1eD-XN0VOKppraT18zs0SyOUaOa5OaN1-VcX7X5OSpSxpMSra5NNObV5-N19cVc-W_KMSrrxxztzsND--MJpKMrzb_pyTMzUa5-0a5-X-VOIMMMSBnKKSMrMzprzaQBen1ceeXcccempprtzUUSv9mmfMrxzUMxpUUUrzbztrxyOzUxrrMzbWbJppSvC7gmenA9mgggfABgnBf9nBppUrttbzUzCKrSSxzbaUxPfMSKpKnJhRpIAIIKrSzUMMzxztyTObaTOWWaTTTUbzzrza5ObaTOWbbbUrSrStzyUUzbyN--s5T2rs-1XeXeefBn97VfBnIBemf97cXcX7bWV1111c1eiN7f-ABa6s19n77X7g97cceX7f11UzUppry-N0MMAIKzV4UW_rJoppza55-TMSsNObztaOa6KzV-77N-SKKSUzbaOaOyUtzzzyTUbtzxrsOaObtttSraOWaObzzzzz_ptaUbyMzzyUtbVUyUrUzzzzzUzzxyQMzzUzzzeeeeXee9Xeee9eeeefKMIKcf9ggnABemefCCKzrLf99X1fABgeeXAKSSMKxxzUSrSraMRpSxrQA7X7X9oopBo1N9gnIKCIJmmmnKIKJomn7emfMBc51997cenKMUzPmegmfMMSzzyNA9OzzUUIKMUKrKpSSrUrxza6SrMSrrMSrUUxzrxxxrUSSzSSxSUSxSrSSrSrpUrMMUSprrUUUUSpKrySzSrxzzxpzSppprrzUrSpSSCSRprSMKKpMKrMKKCIIIBohIBonAAABnABmgemhBmmmeenBnA9X9ecceeXX7Xemmcemgef9nA7en9kecee9eXeX1-enBkeX7XeXce92VXX99ceACBn9XX77XVVV--X7XemmgeeXXX997VVc75OVeX9hAAA7eeme9eXe9Xeeee9e9ceemmmmf9meegfHenBmfBnA9mgggemnBggfBnIHmmekeeceX9e9cXXXmoeceeXce9Xce99eXnBpCBpSrSrSrMSxzzxyeeeeemkeemgf9pprUzUHmeXXem99e9eceef1dbs17ecepKrMgg9XeXccX-Xeen7cXeenBmnBghCBgnBACCCMCKJohCCMrzzzyUzzzzqognBmnCKprMSMACKpz_wmoogepCKrMSMStUZkeeeeAH15-11-X9hCKMSRomcgpKzprpprs0z_rKppzrSrzSpIKIBgXmprrUKIKKrttpKzSUBomm97ghJpSyUzSzzzUbzzUtrzfAI9epnHceceemegghUUzxzWbzzrbTopMSta5OVOrzzUSKUUxrsOrpxQCSrIIKSxSrSzSrzUrUUtttztUtbzxxMaOV-sOWV5--NNOUzUzxzxzUUrSxrrUSrrSzrrSxSprSppprSpxrrrUUrbbtzrbbrztzzrbbyTT6bSyOa0aTOaOy5T6aTOzbzpxxxxpzUSxs7XESrKyOUrtaOa17zyUaTOaOSxprKCKgnIAAABnBnKppppppJnHnCMJnCCKMSrSSKKICCKKKKppKo-2AYFDB--MPns--j8uk-0TwQV7mzO6ievyyvFGK3F--qNX0zxzxrXce9c-3mKUw-DOJuzw9-lBkNyuuuviyzjJK43G000-OaPJEprzSKMrrkccc-1997-2C8pDo-uPOqwf9mnbbtyTV-2Jzv--5gXT-CCmSUvvGG--5xsy-0D-rE-4b-qzSqX7--sMmk-0lNEV-IZ0nk-tm6EnFN-Rt3BvgF-5ReOUc-otNAvisG30DRoZzUzzzrwP9eeecc-3uJps0eSSKRrMGzrzrrM-V-eXXeX--2fpn--6MiT-0DoXD--6ULD--E2lg--TGhs--wrkk-0uNAV-npyzx-0bkCEF-6EeL6jG-5bpJQAEbaV0nuubvp-0dya3mhrk--BzMKzF28zMOzrMUP779c-gziXufkG-2byBQrcV-J-IhV490elopIKKJzlX70V---2FCPyV-HVlaxpX7-x0_hzvvGGF-12_CV1o6LCaeB---Vy4s-K15tuR-0cH3EP-AFalyPf--1u44Wxxxr17cc-CFkqTusBG-2cO5jMcV3oE3YuuiB3FF0P7tWrre9-4GLRUh--19rRV-JN8nk-1B7iV-3OQA--cpNzV8oQxrjjizyyw4KKG44-1d-ezGV-_77wzvGF0eJQZmxL0V-C9jlvF09OI0rTX--JoI0k-PTDyyV-40oK--e5AbV7K29M_OLMfgznEB4-IfrEMASpSUSq-7-Nee-ANaSDyx3F0A69npL--1qoP6bvVF-qtlNxCKCUa0V7V0xqOguudaNznk-G3-Lvq2RrOc-2N7SOfvlG-2g3LFmnKUrla-7X--Vg031A1AJgoxMSporMSSr-XV--10aNXeV-y7CVQfz0GF0RIcNptae02XdsiLTezvzyyyzjzGGGGGGGGG3--GRVT-QXt0TTyyzwK4GJ-r5K0genCxtwT-V-yBnotTvg-F-RR4WyVBNuCtdejvYyi-knBLOFJJF3BSAjnMSzUbsX9XeV3t0vf_fzv-GF0wZ8bxrOe9--8AQA--HN1m-CZlGTLRwx-cmONzIxrprppKprUyUts-XccX1e97cXc--_7pw029QbgoonJUROV5-V-iJrguik4--mdjY-0tQAdaRk-BiCss-aMQLTjJ--3jUaV4tUqAvjzx5KGF-YB7rwfzwOeVuOXlO_O__Kbj2vizuviyuuvfeveTiviynvYziefiiefvfiYvjB-444G3F-0-2-kJ304K3GGG3JG34--F3GJ-IBbGxS--3yOw8PPd_GaaiC-Eueibvyvx-304--C-2IBzcggmeenCMSrwOaOzKHmnrUSxzTOu--V7VVV9c-yPFVPuf0-F0gt0ZpKs17-aTPhOiBFxRy2ZmgnJeeXAICBnBenJzSrKKrrSSrKpMKJnBnCKMSMIKMrxSOV0V0zzUKSpppSKSEKIESOV-Oa0sOzUrMKSppSUMMkP77V-0a1--VP-17--71--7-UxSrrrrSJpqOtzzOX770hBcX7V5--XXV11cc717X7X9XX999777X7e-_chDLLiiivYEl33G3-Vock29fSpSKonCMU5OaNV-NNX7c2DaQYtPjzvjfiywGK33G3G-0xDlzpUyX9V5PSx2jyuzVGGK-0CFZWnwNV1uXF0_fBo1IJJoSSJnACCCKppSxyUV-117-N711-6evlav4-JpSyQKUSSSpaX517c-c-yg6luPzk3F0CNJQpy9-iumBnaLKKeudOKG_KLKLLLueLOaQEEjEjyinEyzejjnskBnwC043F2-nn2zE2EEoKGKFASOdporHX8CBhzxraUqUzSlzSX77eeeXBc0V-LhikvW--KmlL-EfebDLTskk-YMe-RrMTV7V2uyCCaPEBC-5q1sjK6a7V-A2Ih-Aq892rMUNP7cc-TlB1tv--ANsVBjV2v6d6aOwnp-7qIGAIJlaNV1imQQOPszivwzE8GGGGJ0vODuRhCrppCBpULN5N7NX90WX-6gppqPk-GqSXfBnqOxtaUemec-5nnTs-YPD2wz6re9-3QGmz__bnno-2PJQD-KhKnTaaTn-nF-0Pg_N-aphUzj4FKhhRbmhUrKHohIzMpxrpKKKSMKSKxrU5N5OaUL--X11777Hf9VX-N7--5P-XHXe-0hhca-WqtqMCppppSJp6ltz5NVXV-X17eV0QUJbjJ-nREfwnBwOtbae-IiGGaLPvEk0-Er7eI9nCKpUa0V--1v_ZSfcl--0T7Zc0TwsLPNzgz8K4--MdCP-8jMTqMno-QTv6BfDUs-CjSgLdjBG--rknYV0vttlfW-0CxT2mcUV6Qv4daeffkn3J3B-EUOXBja1CjifiOvd_LdKKaaOaK--nBw8aOFFeeKbfivzjix3En-2Ennz-n-3-2UYTi-bkAQ5LLKaRzgwnznGJ-MWJCRr5NV0wBylcwF0D6jaola--BJZx--NfgX-6lRkav3--sx_2V7RUnUaK_aLLQjzzz-atBrI9mgmnICCpCKLTOaOzs0aNOWV9c-E9stskaiM_-pIJnKoxxzxzrUrrxzUxzSrUSzSpISxzxbxzzzzrzzrzxbzrzUta-0YBe7mf9eeV--P9eee7XXcecVXeXceA9eeeXX-c7T9Bee997n9X-0wqC2ylF4iQ5frxSUzJzqNX9cX97V1wr6EuslF-YbY3xSUaeX--x1Jxc--uDnn-6S8wKaPedvn-FFB-zea6RfESrSq7-WX-6pPVqNx-dun9rIIKMSrSrSxxBzbts7XeX97XX7N---2MXGF3ilDMnrSppGa50VeXcHjS0jOLKO_LOaK_K_K_LKK_JKK4K4KGPedaOK44KOPaK_3aefffeTzivizzzyuvkBzwzszEEnwnn-nzyzwzv03G00-B2EzBEBwzBwnEE2-ow4SEIJmcccxxrUJnBonSrrztzyTOts-9X7VX7X9-YvBN2wwwwzvvjjzzk0zOXTUyUxzV" :
		13 === bI.s9 ? oE =
		"C0DX0NP1V--QqeadnzzjynEEzzjjivdivfezjj2BBwzwnEzzzzzEjnnvYBBBBEBnzz-UV-hflzUUSrrUzSxSxzk0a1-V50K-0pMiudevf-zvfeBnyviVF-F33-yzgp3bVV02IKUrHnUzzpHz5UzUzSKrUrzbyNN-OzzxzUUUSrSrrrtzttzWaOaTUzSxxaOaOxrKBnCSKCIMSKKKKIBpIJoonIJopCJpJpCCCBnBggeXn9eccc9X7geXXn9efHfBnABemcXX9eece7XHXeXecegeeVV1ee9eX9ecc70eXcXe9enA9fAABnBnJpMKpKJnBnHmmeeXX7X7cceXXce9eeccXVVVV-VeXe97Xcee9f9eXeXXXXceWVWBc29cX7V-6aOaTOWWV-1XX17-NOtWaNVnBn97X-7cf9mmnBemXgece9I9eXXomgeh9eX99eeeemf9BmmeHgeeegfBggmnHoeABeggnIBggeeeecVI9eeemeXe7cX1-ZmfIKCCIJooonIIBnAAAA9mmgnIIBnBpKCBnCCCKKKMSKJoonIBohBmnABnCABfA9gd9mhBopCIJonABgmnJopCCKJpBnBnBnCJnCCCJnKBoggpIKCKJ-UMSGxrMMKKIIISrKpSKKKKJopCIIKKKCCCBnIBjSrSSpKppqUI9cpKIKrrrKSzyUpKpMxS5UKxMSrSxxxpSrSKpIrHxrSMSzHfrxxzUUUSxrSrSxxxrSrrSrSrrrrrrUUxryOtttzbttyUzzbtzzUzzxzzUxzrTTTTUbyTTTTTUbbxy0byUtzyUzyUzzzzxzrrSrSSSppSSMrRN-OxpSMztzbzzzVUrLUSpprUtxKbxBfrSKJpKKJonICppKHnKKJoopKISppSrMKrSrrUSSpxxMSxprUSMMSSpKMSttzzI9f9hMMMSrKSMKpprKKHnCSSKpMMSSrKKKKKCIIC9gnJonBpKAKJpJpBpKBnCpMKKCKCKpKSSSrSrMMMMKrMSSMKSSSprMMMpUKppSJpKKKKMKSSppIMIpKKMSKSpKMSSSprMrSrMMSSrKppMMKSSMSSSSSprSMKKSKBmgprSSppSIMzxCUzprMUyTObbyUzzzaOaUzzzUtzzzUUqOaUxy0bzzzbbtaTOaTOaOaObaOa5OWbaOtWaOWa555555NNOWaOaObaOa57-6WV0WWV--O97VWWWaObbbtyTUttyTOaNNNHV0V-N---9-V-777579775-0taTOaOaObyNOa5OaOWbbaTTTTTUztWbbbaOVOWaOa5-5N-7X--V-517T7---7-Wa0V-X7ccX7-7-77VV-5-7-5N17X7XV-0VN5-N5TNNNNN50aN-5Oza5OaOtsOWWaOWaOWaOaOaOaOaObaOaObaTTTOtbaTOtaOaOWaOaOaNOaOWWWaNOa5NNNN5-Oa5NN0WaT550WaNNN--N0aN7--0WcefIBf9en9geecmmf9eAAABgee9egfBgmeee7cX7X777cce5TTT-VVX1cX1c7197X977X7Xe79eX15hHX11717-7-V-V71177VXX7X7ce-V-1-1-----117--cXX77ce1-VVV-0u7X777117771177V771-717VV-977X77VVV-7X-OWxpSSMSrMKMSSrSrSy5150WV0V5OzJpKCKCCUzSrSSSrKrSprMKprpMUMMMpKKSpzSxxrUMSSMKpppSCKKSMISMSrMMUUrrSrUKSSpppMpSSSpxrrSKrSpSMKKJhSMKppKKppSKKSSprxtzaUTObbaObzzzbyUby5OtzrtzWsObbbtzttbtztzaTTUs-o-9SuvkpF---4GN0--Akuevkk-0Z-5DzUUzzUMMSrUUrrxzzV0k24nbEF-72uPs-31lfR-X0zvBgpOsN---Fjh-1VahUR-033plvivC44-bVp12CUzzrxpztzzzy2A979eeXd9eXXVGkPch_OLJKKa_OLujjznwwkzo-Eno-q32WRrMKpkV7-V--7jXk2-IvW9e-7xySpV2kZ-vaazk0-HWAOjKHprsWxta7ccV2FavYivl3F2cIsAppKMwN117X-81g-ifoF-L4N9UrkcVDFfPz___bjvjjEB3ByvEGJKK--WQlvV0kn8QjoF0NPnGrScX-E2V6yPuEF3-D6-ISGX-42b3rh-0NYH_ooy-3P8eEOJFGGIB-B-0-2043LaPdaeeiZ30003G002j-03-JGFGJ-4K-03G-3303330NBzB-UzzB3DvzuzByyfiivieivifevefjzyw-D9vlxqX-A58vaOYw-07nF-rFPV4lbM4aaabBn3B-mC6fBmmjSOa5N-25o35o--CiYN-gQSZPTw0--2QiX--66YJ-9FT6CN-BHQ8jadHQyddcyvG2232-F-8Hr8k--dcfk6dIezn9YpIBhC5Oa6y5UrWZmX70C2JVtUzzp4J-mXEjworrq557e-6IQmyv4--dmmEV-JuCMk-9SVlk3KDxRuPiueObi_JGTyycnBk--4-BF-eicPos02KqRDLPefeTiuiviuk-K33F-----6f9qfBnUWV-jMD3iO_aOaPOiwBnBnn--0evOEn5U5c1_T5ktLKKGTvjzzYp-w0Rg9s6ABmeWBmghJonKxCIKIKKSKWa6zzro5Uxltbe9e5OtVOWaN-N6w6y2ABcX17cXV-SWU2PBo-alHDReopsOa-OOYdiPPPgnE00--BsPu--Oo5J-5oKjx-AxeUxtaeeTeeffeuePauuvivijfieiivePgyvvC000000-3-3G35JG-2BF0-30-2FFFF--3hlWISD1-ER5o5evV0-0eu7_RjSSprzrSrcX7X7X7X--6KDt-HirDjBnBnKMba5551-3rQbzaaEBnpFJAmhxnKSSSSKKKKonIKKpKpMKrSKIr5UrNV79V1----V55N-1V1-7-7-X79-IUBriLagwC2-3jm7YKkV7jUvJLaLMeudeP_LPK3PfeaLeaa_F8aaLLOaO__KHdOK8__KeePOdaaieeeiiefifeeddddaaPadOPePPeeiiveueaeeivfeiuyzjvvizEBwwwzzEE2-kkBB2-2-kB-2-B222-B-k22-BB2-B-BB222-k-kF-B22Bk0-F32nyevg220-FF-0--0-F003G-G0-Cl0ab9eefxzzba-AX5ODuklF2RKFUonyUUaPXeV9sgwrddaLaPNn2BnEE0F3RULpn9opxbbbtXVe-Y_1riO_LKfvEink--0BfCIpy1V" :
		14 === bI.s9 ? oE =
		"EcA20EP9t--46idaPadePOddiaeuuuebieeiiivuO_aRnufezijzzvzjvfuuPKJFJGG3GPKGPOaTiiiedaduus2EYuiedn2nyffdv32--0202EzeRwoG--Ezzjevck20202zeufik43BFBFK0G4-0_J--nyioC03-0002-n22wyddyjfzven3Eyv3JJ20-zynnEyjnnvjizjjejzyy_wznnBn2zvnzyvzBl3GG3G--23FFo0-wzBB8m--ZISrMUUSpzrxxrKrrSKpppKKIACBnAA9mmgfBcee9cXef9geeeXVf9999199ge17V7Hgce7c15ABee99eeXegegegfBgfA9mgomeecXcXgeXceXnBrxSxxzHecefAUUJceccgce0AxBeXXXeceY9nTUJgoepCJnzzzxIBfrMpIJmnpHmc58EJmnrSbrMrUKJnIKxrHgrUzrxKCbtzprzxKISpxzU5Ulzq0a-NOzzxxzSxrprSSpxxrzrtztyUtaOaTObzxpxrUyObaOxMKBn9pMKICCKSKIKKCMKCACBpCACBonIJnKIHhKBpKBpBonCBmnHmgeme1ggeeeX17Xc7VY9e7emdBe97gfBfBfBfBf9e7X7cXeXc19eX-ecXceX9Vf9cee7V-P1e9cecX7e9X7X-0XcX7c97e9V0--O6glDk-BjnBnJpKKMSKrrMSSpSSrxMrSSrMKMprSKzUzzSI9cmgonCKIJppI9YKCKCKKSKKSMMrrUzzzUSMSrUUUSzrzUzryUaUyUyUbxlzzs7-V15X----V---NNccX-ccc0y10WeeeeV--70V6xUztWxMSzbbc6xta11cX9X7V7-X-eHeggnCISpKHX1V1X-7-Oa-N5Xe98HeVVVeeV0X9711-3--XjabvBG-0s7nSrxGc9-BFOunededziszBzG0-G-KF2NDz6rSzzu9d99-0FVIObk153LiReenAUbbxzxzrpxq--e9e9e-A1JTaukCF07J23pq7---cVM--WN3QV1khy_awxF-H4kIRjyV-oCGnvjx3J-16-Ny-U2iSDjyffv33G4F-CWtG2GxSUlV79e--2nbB--6j1s0REhiviizkJG4-4X-vYML77-ZHJ3Pv3-1cZeNponGtV-V4lDIreOiuBl-3-DAESjT9-r4cgTLLKKOaQjzyvgn3FBEB--1pnH-E4zQyafnG--5BKbgN-3Oxws0iCDazIKxKMMIr5OVX1V7759-05hoa-4YPwIzTXc0oS4-OaOaanwnB0-qYoDA9pIrzxzpzpKzzzzUzrWVf9cP1ceceVemcc7cV0H9uMvF-eGU9USSbuX975JYvsOLKOKKK4OaLJKPueTzjEzjzBn2zj3-Bnwn-B_HnzBpIzyNX7V1mi7bfz3J09L-pSKKCSrs5P7VX7-YBjWieueuusF-F03-0dhx_nILN-03vANuaQYl---6b56-jf6VcBknBBn-Bk2BnEBkBkn-BnBkBw-----n2Bk------kn04GKKKaOaO__KKKPLOKLKGKKLKaKKKKKLLKaOOLGKKK3KaKLKOaKaOKKKG3G43G3J33F3G4G4JGznnE2--G-G3334L33G43J-33JG3KG303F433GK3K3GKG3G3k3GKOffaF--GG-FG3---F-3I-3F0-0303F40GGG-G03GG4FF0--FF2-----0---k-G-F3--04343G-G3KG030-0-Gk-2DwkG43F3G0-30-F3F30-00-G30-0-F-3--G33I--03FG3303F3-I0--3F-nDtfefeuvfideeviivfiuviuzwn--B2BBB22--wn9PeLeeLeaPOfjzyvuiveuifhfifiivevefffjiafjiuifeypeeeiivejEivjiivijfiuieiiueuieeeeeafieeeujvifffiuzziviuzivieifiififPivfeifivPvyvijviefivevevafieeaOeueevfeeveeeuiufiaeefifivizizzwmznEzzBnEzBnBnznEzzzzwzwEzwnBnEnAyzzBzzBn-nEnBznEwzzwnBnzzEEzBznnnBznEk--22B2zkzwnnwnzznBnnEzzzmvwEEBkBk-B2znEzEznBn--kBnBEnzBzzw---4--2-n-RB2Dvfzn0n-kB2BnB2nBknBBB2-n-3-KK3JG0304-G43GLJJK_K4JJJKJG3F43G03F3-Fk3-3-k--FLOadeOaOaOOaPOada__aOe_LPaPOK_KOGGKKKKOaOKKJG-K3Gk--nB-FF-3Rk-JGGKaPPeaPPeuieW00-FF3G3FFF--2-J0-GJ43G3JG-0KK2-3G3G-3F0-3G00-F4N2znB-3jEzzBk-ivzzfjEBAzievivivieevivueiuiuufivzzzvivzuivivjvyvzejvjwzzvyvzwnnBzn_ejEBzzEB2-LOKOaMBBzzBnzwzizieveefifieizzzvyzzznyyvzznvjEzzwzBijzjyzznDzzwnnEyznzznEnEEw2yajzDjwBvnznEnzkzEznivvheejwzjefievveyzByvnmeziuvfiyvyzjnzjBwnkzaeO_PO_dLLG4PPvjivjivjiuviyviyzjwzwnE2zBnBnB2-k--4222BzEOOaeiejxPeeuuuuqeuaeeuuefifefefeeffeuuifeveffeueiieuvfiiveufiivvfeuuiuffieeuufuffieyvjiyfeveiuiffifefieevuiivfjivvjwwnBn2BB--BBnnBwn--2-k2BBwzE---0--0B3F-k2-kBB--k---JF-3B---3F03-k2--wkzEn2-B2wEEE2Bn0BB0-kknBkwE-kk22--eUSCSJrLT7V71K0YLtevvyl3KFzwGJ-DWcRRqP-hG7KyLafizivwwG03G0F-acjpSSKy-VX-IJltLePvV---PeSVrBgmoxprMRTTOa77X77-0N3vk7eoElnII93nzSKBooUSX0aNX0a5V-1pfNUugBJ-9iOdUNV-4v1z-Sfs-zBgmX8MKAxy5NOzKbse7V-0U-Fk-1y-lV-4x-6--g6bj-3L4kbaTYn2J-apmECIJlaN--MR8FTPQYEwpGF-2W9GV-62Hz-7i5cMKKGV---y2dwQvz4K-NgIMwmnUzJopKCCKKIJnKKpKSKKSKMKrMMbrWbWtaT6a550VN---X157cV-VX77VVX7ce7V-nZT45OKJLLPzjzzBz2wLJF0I80TwpCpzpOWa5P7eeV-9fnj-3pOZ6JOX-2f5dcs" :
		15 === bI.s9 ? oE =
		"CoE-7lR-YWRa2AEJenMxJpbqTObaOBcX5NeW_xnVto5UUzzrzUrtxtxrMKMUSSyN1XXV5NNOtaUUxzztzUxxpUSIBpSSyNN1aUrSpCCIJpKs50WVNN--7N6bbzrzxzrrpSMMSSMSzs9X7-X-VVVX99ccVVDUV19D--998a6rztVXaOV1771-78VN0V0V-7V---YV7Xh17XOWWV0V6pTOs-8V7XXpCF5-N-N-N-N0VObSxrSrSUyN-aNOsObrxMABnKUaUs-V1-N5NUzrxUWbzUSxprzCKHenMtzKoopSSSzzxxrMCJmnABegmXOs1ABmnCSKCKIC77gcepzSKBe9XfKrHh9eprxmnKMKLmehKCUrSrII7XnMUSxrUSIMpIABpryURpMbtxrrSrMUWtbzSnKKABgnAAKUxztrMUxrsObWtWzzUttraOtbUtbbVefaOrxxpStySStzVXaNTNN5SJhSry1zzSgmpSM9mmgofKpxryU_rUSxrPXmhMQIKSxrUrrxSxrprKLpMa-2V7Va-OV1XXAI97ee9m8a6TNSxSzzrtyTStbtzyUbzzbtztzzzyObaNObaOyUtzzaOttyUMy-f_zztztztzzxxrSopKprKKMSzrzzxzztttyOtaOaOZnBnBmn9mmmpMzbbzWaTOta5UyObtV9eg7XnBNN-7-ObrTUzztaOaOaOaNOa555-4KCCCBnIBnBnBnBpzzSzzxzba-7--6WV-1--771-VV------71-----NN-5---OaTOaNN---0WWWaNN56bzzbbaTTTTUCKSSprrSrMrrSMKpKSUUrSxzzzttaTNOaOVN---VV--X--1N0WVN5-7-0aN79enKBmVX9e9177-X770Ws7VX-WbVccOa-7OtzaUzy1WbyObaMxyN6UV4rUUy4zzaOaMWxyOzrzxrrTOzUUUrztzUzzzzzaNN--770aSSSztV-6rxzbbs5-NOUzzyMxzUxzV-1X9777e9gf9ege997VX7X9X71MMrV-V75-gnAHommmgf9emem9eefBmenA1AHmmfCC9h9m91AIHegn9emnAABnIBmV1mmegon9f9mXenI9fbV1ge7tzV--cgoon99gc0s76tV99nCLo1977Ebs50Vf-AKJcc-1fMMKr9c7-Aa-1mpBme9c-5OWWV-XV-50a0VVUV---1N18xy11--V1717V-0a0VV117V7-0VcWaN7Oa6aNN--OVV0SrWyUxzVe8UxyNN7X2bVSMVN50bbzWVXhH7aNTSraTObbWV0Us0WVOaN55OaOaOV5-OsND0tbzaUrrtVXX6rrV-X91V0V-N-V7X17X99f17X1XXeemXcgeA9hBce17XpA17fKKCK9e97hSrSHpomf9ABpSxHpKIKHhHhIJhMUhKnKUrKKyICCBnABpAAJpKBnIICA9opBme9hC9nCKQ97-XhJmfIKBhJoXA9empmpHhMTehICIBehIKSRkgomfKQ1971hKxQBpprSghCCJonCKKqpMSpBX17XhSnBopKSgpKopnKpIJpKSppIJprSzzKMTTTUQKMrKrrps5-KpUKKSSpMppSSKrrKMI9fBnBpHnK779nAMrSxzwonBmXXppQAI9fCLmhBop-s1-WV1hKBAJpBofBegp9mefKrpqfABfKzbpIAKMKHpKKBpIBpqmpKKKRnABooppKpLmnKJpCBpKABoonIIJpBpBnIHVX9e9f7ceeceegpSRe7f9mmonCJpKSpSQIIHn99cXee9mgf9Xce97V-5OV511711-V--7X1--MrSTT--VcNUUWV-7971--X77c1-VV-V1---AJXN--N5-7eYWs17Wa---cXcWs2aOVgc1ca0tVVD---V0V--55-1eX7X511V-8V5-ge9pMKpKJoepIIBmegXc-fCBmgfCIABfIBogmnAC1gnBnBfAABgm99ggefBXXccXf7VXe9XX6ba-XXX7c91X7VV7X1VV1-D0s55--6USrMSMSrWWbzs1menB1N7VUsN----2bVemACUSKKBk-VVfICKSpg9777--7hCSJpC-----bsN-OaOa56rJnIKT0a5SrtaUs99150zy50ty-55ObaOzbopHpMWa555Uzs9ef79gf9eopBcgnKRkAJomVa0V1da5-gnIBmWVVVWWzV-VXAMLkVVXNOVza-1hRmVNEtSrrpMSy17VTN1mgX7X2yN56zrMTUtztzSxzMrStbtyMxSppKST-V-UTUraUy1Xe-OaN9nHpKLegA9a1ccX1nIBcXXXcXcefA9gX7VVzs9XVbzyUVef-Obzs91UV-e9WWaUWaUzrUSrUrpzzUUrsUrs7efB999e971ceXX9ec7c4rMyTN11X-SprMMMbVcYa4xzzrIMpry1X-V19ge-zza5OzMUUUKpKps1-1OyTSzKMKnIKKSy1V0WxzT19XX-V-Xcf7gekcaUby19f9mdtyMtbzxtzSrWUzrSyOzzbrtrV9gXf1me-eecaTMs7cX8aTTMxSrMtrxtzrKKs--VXDOxSSSSCMUy-XUs7gV97V6tV6xprV7tVA8ySrVEzzxRopzbVXOVaUzbtzKopxRpMrV5StxzrzUV7TOVgiOtbaUzba-emVOtbaTObtbzbztbs9emgf9fBggf9mnAKRpgmmn9mmn9egge1-0ttV9mmme6a-iUbbzaOV7NSs5O_s8baNUVaMT0brs54SMMUICMaNOzzMsD1eeccXUSs8WVObttVVgfAIV71g7XmkXtaT2rxrSryOyMsAxs8a5UKtWWxpKztyObWs1mmon9Yy-X7N9on8V5OWVaNMMSrStVXVcV0WaST-aN55OVfABda6bUthMSrT17XN1fVU_ttzyUwprs2zzbWa6s1eopAA99eef9ttbyN9gcX0y-VDMptzs9cdV6s8WvKy0zy171OsUxT0V2brBpMs8s51kTTUxzxzxxrV17es1mfA-egeiTTOtV55OtttppSzUMV199-8bbrUVcAtSrs7XX7gnBnA9eTOs1cT5T2WxRpzbtyN9bs9ABkYWbbaShMsOWt_QMIKKxzT18VXTTUT-1hPecVOUVbaUzUU_rSSUVVX8tzzUT-ce9f9VemeeABfB8a5UzbWWWzzbbs6tSrVVWxrV79f755OWtyUs1-0aN-OUKMpry-c17aOzWUIMKprUUIMa-1X918V770aTObyUxIKSIJpCUVNN5--sNOMVN56_pKCJpSJoonKMVNNOa---OVsOptaKMT55NNUrKxxrMMT11115N7s9kc9V9VttMT0UTNO_xU_nJpUs7NUSzzSKKUMUts1e1T-c5TOVNOaOaUy2V50_zSUVX119X7USxs7--OzSCUbbKSzsUxRnCBnCCBnKrCIKJnIKM_pUVN5NN-7T50a5OWV0aNNNOWWxKKMBnAMxpIKKIMaSxs1X6rV-D6V-sT-UUVX1e9Os7zy-5SMUTOtpKySqpCBoe9nCTURnBpyOt_oonBnKttU_zV7a-5-tWWWtxxrqpKTOttSMsOrSxhBpT6bxSxrtUUIKAA9nHpHnBgeecf1ee9XnMxzxrUzUQCUxSs6SompyMs-0rSTUxtTMzzrrrUV1-sSxs777UrrrUMUtzUpMJn9e9ee-VhKgnMzUrynKtWzrzzzUxJpSKJnACKKs0Wba0V--UTOxyUrxzxyUxs-xyUrxzrUzprzUrpzUrrUrSyMrUSrrSUUUSxUaSfMT6xrSzrUrUUby18SrSrxrUpMUTNSUUzSSKSMSrMKhSzTKSpMLpMCSCCJopCIJpJonBonIIHnABggnBnA9nBf9geeg9ecce9cf1e9mm9mecf1eeece9X7cXXfBn97V9eA9cX7XfMQB97cX9997VV7ceXXnKSxxpSKxSxzQMUtxxhUr9Xs1AJmhUzUUSzzKSz1hUU_Sz_xrrSzUMUKrSxprqnH19pSKSpBpQABhMrKSxrKSzMBpxrppIMygpSrBopryKpzKy0nMMzba0rrUMStUSpSrMryMrxzbyUUMUty5-Ortbs78V77X77--Xe79pHfBg997X7X7X77ce-X7-zTOa0VV75TUUzUrrxSrrUrzzwfACKrsObs6TSz_zxrzxrrrtVN5Sy-4W_BQCq0c--5XUc-X5rCBxMa7PVDNUK-nSJp971_ESHe-mocmeKzxIIOxttzsTT-Ota0ee-057TlBpMMMlsOV7Xe---Z41V6NZVgpBmXJgnKMpr6WaNT0c7--3XZyYK57-DXainASrrUs-cXc0D9q9BhrKpMy6e7VHVV-19qEB--1him-7XjEvIohy--0DA35ggnKEGzTOs90X7-DANdhT7-7Xt_vISba9c11AoEBnACBxrSxSa0Wbba7ZmcWXV0Nl-LpUX7--232P--Y4hn-1NmHcmmnUy5--yBtECSKpGaNP197-0YF0nN-QYKBvKofomhMUtzba-1WcBcV17r9ZnpzsX9-4YWUUKaNc-1DHqB03YaRQJjHc9K9Mp9XmrHhrJhromghUxoOVT5OzMxtV5VNT--7VBc--DVec-5DXQxV-9EWOSk-7cyKynBpBnABoopJ5OaTT5NOs-OcVH7zjtnSIAHcgnCBomn9gjzUxrxCBeo6yT5Uc5Wzxru-e-Wy0s0aPc-39Fz7gpKSBcCHgcWggnIpRObztbxHggpoehryP6tbaT-VN-17---ZFFrV-t3OTpa7--GJ2c--GJFN-5GL3xc-9GPigq-T84fLpBpAMHpSBfACoemeoefCACAJrzttaUM5TUa5TUIErr0WWxOtWaOzyNNNN77977KACKBnAC90aTN1VN-7c-eGPvhSrq0ceV-1GRaD-9ZO8jSpKF--7--ZPZE--O6VKyV1O6qJppObVXc-aHHGgonUbVV-1ZZurAs1XHQCRnMzMppopDOVNWbttbYBec3mgce---HWfN-LHY8SS5X--09ahV-tAuEpN--TI4hxDUT7c-PI_QzrqXX-3ZxNzHzV--ZyYEV0dEl0pKsV---J06s--J71N--J8is--JDws-5JFcRs--JKrN0iJQsgnonCCL6xba6yOWXe9e--_6BUV2dHDArSUrz1XXX9-E_ADrICMKoN176X--0I2AV58JkgmgfIIICCTOaT0wNN--PKIxzUTcc-3_KPjIqV-1_MDbCV0yKYtSHpIpCSKHZlzLNV-10V55--5Kcizc-9KeMwq--0MPIV-dMpxrc--_Ul6V0OMzAnSN7-O_Wd6ppSppKMwNP-7X97V7-F_Zn6CzUrMOX9Xc7--_a82V-0OcIV-8OxHk--LW2N-DLaXxTX--4fBH-2_fwzLPV-0QFUV3OQn6xKMSxy0X-ee7-F_tjEBemhT6zzP7N-1_yrzR71uMvlwxIBemeefSu6zp9zTOzq-5TUxxWc9A97-9N1TU5V-0Va0V-8W-ps--NFDs--NFLN0aNK0UKptxxxrUNXXX9997V-DOBAzTX-2aJfQBy--0a2hV-0a3SV08aU0zT9V-taUEntc-5OtESV-eP2MzUSk6e9c-XPIwxMSN7VV-ddFArc-7aafrpUq-e7-TPquRnTTNc-mPxXxrrKlcVV9-3amCbSkV--5oXa-Gat6zSSzrUR7X7ec7-HQgPwxu7-9R1zzP-1tkzEmgj6zzXc-2b3DrLP--Ol2rq-78lqzrHegrzzzKEUTN6seVNcgeX-kbAFvBghCIKIIBpBognIJpMKSSxUSrSSxUrpK--0ogPV0OpIUnBOs-SbSprpUSI9jxa6aPeWzz5XeeV-PSyVwpEsV-CbXszKCCGWbsV7-0bZmzN--bbTv--0uTlV08uUInDTV-OulbqV1tuqQnCMF-5Ue-2bh7jJP--0vJ6V-0vjlV-OwCMqV-OwVCw-0twdKojFTNV3dwdbnUSMzs-PCA91V-HUDFBraV-5UKsSc-DUR5ByP--6rqa-2bsubMc--tyOApa7-yUdojJmnIqOtWV9--bxunV-0zWdVAOzeUnxBmfrrICrUUUUrpHzWVcWX1175X-Xc--UzJs-9VELhk--e0DGpX-2c8yvE5V0P1YAmzTX-Fc9eEBhHgn5Uta5N-OcBY6pSrIAUJgTOa-09We7-GcENbMSppzye9777c-9VzggtV-94IUs-9WO6SNV-95_ss-DWdaSDP-mcR2MBoggxrpUzzKSEzxUqUyX9ecWaNVe79V79c--WkEs-9WoBzNV2u6I8rMJpGaOV7Xc-9WxeRyV197X5onrsN9-1cXrMEc-uXElzMKM575NHe-09AHrpNP--1AZrV-eBC4rX--7ndq-4coH6ETP70HYKWxSMOxxc9XWbkd9V-9Edzk-HZ0xhyPc09Z7pBmpSxpy5O9V79--82Ca--86Zu-2dAgzUcV-PI-Bq--eIQcrX-1dKuADN-H_k1UrXc-9_qWSsV8uMPGmzMTNUUUSEMSxxze7e71c-XHee7-Ha0vzScV--aLfs01aO1woxIC6a-0tuc-DaUtSq7-6dh56pM0X7-7dp2zMSR-X--abWegmjUOWc-EdszfAKSzV5UNe9V1PUQ2nABUzc7-5by5U---cAvN--cHps-5cLGhV-DcONzR7--98tL-4e9eMrR7V-HciUxpX7-udBoSJfErlbuVX-29aVfmxIpGa7P--DdjHRtu-6eW7EKSN11--9XeD-jeZFrBfCpCSxpSrzJ5TUcOzaOXfBh9X9X--1c-1eGYR-5efWrCracV-1fXrV-ufyWxkV-ufAyBoeezUrzV-V-ugwopa7--fJNN-LfPwSpkVV-9iyzs--fqes-ifsnRxzxyXecV0ejZ8nMbe7-9ftmzP-FujbporSIzSpMUISCxzx-VUzrrTc6zy7Xh9ecVWuXX-7mcVHe1--ejc_xc-3ezMzK51-4ezOMKGV7-1g-Dw-Rf-nQAA9gnpMtzzzbttXXX7e-1f-oITV-agD2xzola9X-Ff2bjASrxSr-97VV-4f47MJyP7-9gJYUP--9lWRs-qg_aBfJxrzs117--gavs-PghqUKGX---fCFz-09nVOpqV--9njxk--gyON-Dh4IxL7-2fGYEENV-1ob8V-upTOpa7--hVws-XhbrSpLOcXV1eqiCpKR0yX7--9qk6k-PhjSS9c6y-7fR-rUrR7Xc-ehsTBgrqUscc-PiJ1hASaV-bfaA6AI9MMMHhzpUbzOyOz1X97-1ge7V-1tzIV1uu69nCrtwP-e-9ffCUprUkVXc-5fgVYCM5-V-9vpss-5jH-E--HjT-wxu--XjYHx9xSVN-19yPqognyT--pfugbS9rSrSMSrzpaUpSUMSkVV-VVVPHgccX1XX1c-9jiyz5V0Pz_GnSN1-4g0rMKR-7-HkBVxlu7--kCK70LkGUSpMSrOzuXWse7X9-4g57jrTXV-DkQfwxX--B98T--g9En-1v1y0pKorN7-7--gDm6V-v2vCxNV--l12N-Pl34RxUcX-0gHXnD-7gHhbKrq7X7-TlB1xMxcVcJ1lBSSrSSppzUzxpzT6xSSrKrMJopBmcXcxrMRUSpMKBgc7N1cX97971AMHYSSrMHcce7eVVN77XVX7-Oc1dMSHooe-V-CMKSSKq1VUpkUSrUSCMMMUSzSprKKHexxrSSxSxxyUSzzSUUSpSpSxKKBhUpttx57OaP0WyOaP-9-0V7X5CHcV77X1VVXXV-97cV----0c-7VXcY97X7ece1XABcc9--23yxV3v42inCMKrbVBe-0xXV-A4Ugk-aliIwpIMs----BS4D-2gSBER5V1v6fGpCCptV-X--BTnq-7gVUzKKT-VV--m1DN-qm1FRfpppNVN7N-DmEsxT9-QgZUjCSKEKR6xGWe57N-ZmVV0A8RQxR7--A8TUk-imT5xSTTTd9cV4Q8thxpponSpTN7-X77V--mZcN1immTUMSKCKMR16VUSprGbxkXBcVcX77V7V-TmmkSpUVcV-un7nSrMSxkX797V1ABckpMba99-0go5MN-5gpKjMMX7V-QCSMnV-vCllpk7-Pn_7wppc--6gu_jIIqN7-3gwCEUP1-HgwGzMMMSxlu7X7X1V1vETrmxSrTVX1--C-0D-Eh0RESoxSRN-X09--AFrbk--oIos-aoMTSIKFN5--5h58vIRNNV-2GitV-vH2_psV--oc-s0aoc_xKMSJe9JUUqN5P17VV-XoimSI5OycV-fHxjnk--CB5q-0hHcbN-VhHl6KpASSSKIMxsVWyP77VXV-7-HpEKxUX7-mpKbRoeKSo-NN--CNDi-7hOczxzTcXc--pboN-DpiAwpV-5hTmMpR5X-0QMjrnMN7-1hUQAT7-HqBoxK---DqWZRr--IhdNrKrSzOV5QBeX3e-9hfVIBpUzX17--CfpD-phgbjBmccjMJrzke76zrrMMSrUrpSyc17VVX7X7X7-HqmXSSX---qmvs--qqEN0HqtqSrxKESrNN7Xc1XV-2R4lV-fTzpnk-1hwNUTV4Prr2xMJnIC9EIrJomnqUKKCJeIIMOxp9MKzKSr6XX7--V57OV70WXV-5-N6a--V5fUUEofHchpKMOba7X5UTP7-0hzqEP-2i1rMSX-2vVmOnHpplxk-WcV-9sS7x5-2fXLhnESoxu7T17-2iCDURP-3fYKfrK9fISr6s-57---sq1c-DsqBSTX--DFu5-1iHcjR7Bmt9wxogcf95IIESpAAJegxUJfxI9onJeCrrrUrSUSSrSpMKSpUSrMKrMMMSMSppSKCyUUz5N71-0aP5OzyOzUSrUN6aOX10ty-7-0s-7cV-7X1X1-VX9XX7e9cecge16yX-X7X7BmXXcV-2iHoMUcV4Q_4_nBrpyOzSq5cXX7c-HtGWSpX7--tUGs-5u0pzc-Tu6aUSS-17-Tu7VxACOa---u7iN-5uEYS--5uEcz--auFlSKqNO99-2i_aUGuV0QdwKony7-BicpMJrMSc1-5V0feEApSWcc-5uYrSV-1uf6R--igpMV9vfYUppKHexxMzxxrUROttX1e7cW97HX17--2fYfV-Qf_oq-0Afj_rL7V0vfwMpMaX5V3Ag7opBpKpT575-7--fgPSna-4iqejAoOV-avQIxxrycce-0isQUF-1is_AGc-LvkFzM5X--fjqbr1--Dz_T-6j-zjASq75-1j1jzlc-9wL5ww--2lNpV-flSUxX-3j5MbM5X-Hj6HUJm_prMSk--7X--vlsIpk7-HwadwjOV-1wepR-2jAT6Ia-1fnTTxHnEy0X--Anark-9wvRwtV5QospnoxMSOzr0aNn9X797V-Qp0rq--QpG4o-0QpR0mxlX-4jL0rSq-c0XxPBBfBnEMKKyNNTOVN1e-6jMXUJlz11-EEgqwecX-s5OaSs-AjV-jKppq-17c-9y-hSkV3fsD9ppKIKDNNOVV17-Ty3bxJp0V--9yERww-0Ax-_npV--Ax2Ik-9zfaxkV-vzr2xk7-A-1BRy--3-zvV-w0lpqTc-I-kixr-c-A0MPENV3R55SnBpKkWa0zGVX-nkNrfACJeonMrxSrrrSrT55-IC9e-0ztVNX7X99--35IBV-R5UCqV-35iqV-w6ltpWc-60xjx--A1PugyV-B95ws-E1cpgpV--ki4IV1wAqXpUTUa1ee-4kl7ACOa7-02LhN-02YwN-I2aoBjy7-f2fQUKrScVc--I2gExS-V-b2tvSppo-7X-0kyWUF-1kyZMq7-036Ns-M36nwhr---RFUnqV-BFvKk-03Kgs-A3kyxNV-wI34p57-644wwN-64BcS--04PSN064PVSKSTUF14HcWc--BL4Uk-64ckSV-04jBN7r4jQxHppKKpMJxHe7V1-ecnIIKABoopUSognBnIAUtbotyOyNOsNTUSJnKq0a6ztbttVOzOVOX-5c0a5OV1XX7Ze9jpI977AI97--lSWj-FgMRSmf9zbrpzMKc0bxrKESxrlVXHVUbbpSkV7XccomXX9ZcP7-E4xwwja--lXvjV-wQInrsc0Q5ozSpKEryObbuVgce1c-Q64OwhMWX-0lmZbk-0lpy6P--GtFD-2lu5jKVV0RUb6mp6V-0m9erN-5mBT2BjNOV0wZLzpUk5XVPBZWrmmmmnIJrMSrSSSSKSMUxKpKrSESpbxSSrMOts7-7Ve7cnA9119-Oa0Wba7V---V7---ece-cmKJQBmp9ggzzrSKMMy-OyTTOX7X997X06mLdEBgnABnIIIICCAJnJpCCJnKJ0a5OtWa55Oa0WbaTObcV0WWV--I8QGBxs7-U8RIgpzs7c-29W_w-3mdg6Ctc-0mguE5-ZmlOjKBmmonUUUUbw-OzwN-VHmc1eV-wgZprsc-rANbgnKrUtX17c4UAhBhBenHYBocVgprSCHZnrrUMSxHnIKLOa-0VObaUzxWza0bsNOy1X7Xe9n9cV-1n8XjDN-IBkvzxXc-2BlYi-RnBjzIEMMKppKKF51-1-0V-9--nBzMVXBp7smn9f9XehBnCAIBomnABmceXeZegccZmonAAIBnKSMSrMVc57OyOaVUzWzOzxxzzztxzxxrrSrtbVOWtVN-OVP7V-0aT--RstSq--gtJnqP-3nilrCq7-AniufCAM0bbcV4UEFHBomghIHoonBnCKpKICSKpMxIBnJOtV-OsTOtsN0aUX7VN---6zOa--7fJe1-7nuYnACrtVc0EFVzgfBofKUUaOV0a73zH2ShKICCCCICCIBgnBpBpCICKpKCKRN55N-5N5OV0a0aN5-NNNOWV-NP7-zHTMwnJhpJ5-OVP-5oiBECSkV-0hBVAn9M6V-IIDDgzZc-2IgAR-1pHnrR--2KH6w-4pLvUIOaV-0KUwN92LmEgfBfBgqUSCrKKKBeVUX5-X4JmoocX-57NNmconHdBpJce99pKppppKIKopMrtxxxprKrMUStaN7-6yUza-7X9775ObzzStV--51--N-PcXX7-ILxOwoOV-UMCUghM5N--AMQdSNV0STQGrScX-8ptlrCCCta1-0CTnYnqP-0SVFsrM-70Eq1sfHnA9XcYCppSKKSErrSSCzpUUzKTOWaN0V0WX7VXWa-2KBme0WX19c-4qODnHrVN-2OnhB-Cqb12CCKJ-UcWV-IqjjQSrKAMzTNV7VXc-Nqu9fBnACIHnSLNOWWaOV--hjnFrX--r-vI-1xkFZpprOu97V-zr6zAApICSUpzKUxlyUrwUxKV56a6a7VVXY9_HmmeXVX1X9V4CmRVp9mrMaTUxT-e7c-OrAdfJnKrrSrrsN0X979X9-0rFTQP--MKdX--M_8P-DreVnCCSrzVVNec-AVFgBTV-T02FyV0L0slMs1c-6VTDEc-6V_Ajc-AV_JBtV-D5hsk-b_7iwnSROX1--OPBa-1tQurDN-Ya80xERTNXV" :
		16 === bI.s9 ? oE =
		"DwCd1sP0j--RaO__ddedddifv2EEznnnyfEeRwyzBBBB2Bn00-17-2fEMK9dCrtzUrrMMqN-X-789V----Sf-T--yfzIrzohrxy6kX6rSk16k7---11J7Z-35CISoOxsUKESpEP6qOV6pJp9mec17cmhpxUSogfBnMMGWxptyUUzc5UrtttzpoTOV6lVVZme-gcfBc5cUrztbV73cWztaEO-1I5dLOfvkygzEyaOdzjzsl2knvg2EW2zEznvzzyzyfyyzzvjuMyzdzjivvvyyinyaTVyydzufvevjgwBoG-znzdiEdbg2vkyjEyiazuK_4OGaJaPjzYnzzjBwnvyfiigEnuP_vjuiaOMdezeififiiEfgzfusnEeO_ivviEuvjzyzivivivg3EjuyjiezjjisnvvEffvznviyviYEYyzjygnBz1_Fl-zivjEzyuwnB2z0434-4G304-44-CGJFKJEK42Bo-38G-340403LK2kl44G_GFn-G402l2x2433432vuvfvY4-l-0-FkF3G-J43G3FJ3-G5J2---20L-Y-8CqLKOzvEjYn3GF5N0A3mrIprrIryT1Wace1XV0F2MKYo-H05ahSVV1R1RHOKefiznn0-z4KUy5MEe17X7Xa17X7X7X7X7e7X7-17Xe1XeX1VXT0aN7X7X9X7V19X7V17-Xec7X-7X77X7VfBctaT-17917-X--7V0V-9Xe19X1cX991hJpKJpKMSKMSKUIMUrMprSrMSrKMSKrKKrMSrSKrMprSrMpKMSMMpMSKrKKCKMUzrxrSUMUKIABceV17-XcX7X7917X9X7X7e--0aN-7V17XcX77eceVX7X17919X1EzyTN5T-c-7X77X7V197XcVXN-7V-17-X18VXD---X7a11--7a17-99177Vce91X7XX1cVXe9XV-N-7a11177VVX12V0V-VX9-N0VVVX1-1171777s0V5-N7V7Va0bVN0VUV-VN-2Vs--a-NTN0WbV50WsN5-N5-N5-N5-OrxzST-VXcc-VN-1N5-V51-15OxUSxUrxSxSJpMs0V-8V5Oa1D18V91191X11-VVX19nCSSKSSSrMrKQKpK7cXXX7Xcs-1X1VXVV7777719-csN7714yUSpUSSryN77c7X0V-16a0VenB5-D0WV9X-a0WWVN-gpC7X-gm10tV0yN7NNN1VV-N1mm-N--s-7WWyN--fLocccAAC9555NUsSpy-Wa555-c--hIJpCCBmg5NN-NNN8_y--N0VD-epnIKCCLVXYWV-919prKSC9cV77-V0Vc11111TTUVVgkf1991D-e1-ceXX7X-WWs9cXXgcUxy10Va1cXei1monICI7g9-XgegmVgem7X6xyUVc8bbta6bbtrzMST--15NAA9egemfABXnBm9n9XmfBpMI9mggfA1eceeegn9eeXe9AIBme7g7Vecg7dV9mgecVfWzzyUzxSvCMtbtbzxtUryOzzttbtaOaTOzs97ea0VenBmN5N-XN9X9XiOa5ObtaNNNNOttVgggnB7e17OVN0WbtT-tWV5MV0ztbaUzMy2aOyStI7fCMtxrzzbKrUyUa5Oa0bUsOa1me7f9cD-1997-VTOWaUV-WWrzzxprWzUrqnBnCKrSSzySSza19Es9aOs-c-WsOaN50V-NObttrSSxzzbtyUbzzUUzUtxrUUTUyULpf7hKyTSBpMzpompqpSxUrSSrKprUSMMUTMxSrKSKrrrppMKMSSprSy50byOSzaKgpxza6zUtbz_zUmgf9mA1egmgf9pMsOzbtzMyTOzzMbttWy2WrKKIKSKSUtVOsUCLnKUtza5SzUxSSrSSzUSrMrUzMttSxxMSSHemgnKzUSzrzxzyUrtbbpSrzKtKrSAMKSs-T---X55UbsN9eem7iObtztyU_rQMKrUSMzzSrxUzzbyUxxyUs18s1UaUprzxMKJhSrMxpps-V-798VUtaOVOVD-XhHDN-6V9XXm7ce7VVtV-951-Ors18Wa-7-177--1-UVcOyUbzMTUbURopIKCIA7f1hMShJonIMTUMUSUKKUMrSrRchMJpSryOxxhIMprSJpxrs---Wa4xxrSprKmpKKxUSrUT5OV7N2a--7-ztVYVXcVV2aOzrzzxrSrbrIMxJogAMSMSUUSrrKJgpQJnAJX97hMMU7fHeX-en99pSrxwopCICBmcXXccXehSrprUxzbztTpKJonKCBfHeXnCLpBmX9XpSzrpKpABeepS9nKnBofKwnBopRpBopCJpKpKKMKIKxzSzzzxKMSSSSKxKSIKtTUWyTObUrrxzrzrbrSzrMSrpzUxySrxxzrrrzzbtztzyMxrUKQKKSSppMKpSKpxprrSrUUSxxrMprrttVD5SrV-a-NN71-cX7791-77VVVVX71-TT6WWbWWWVN-NN8V711-V777X11XVcccceXVXXNNN8V-15-9-VV791dV1-VVX7X1-sNOtrtxtxtySyUVNStUrUrrbUMrppzzrbbry6pKKrMMMrMMCSUUKepKxs0aTTMUUU_rMT-OVN-6T-7-a-777V-5-XMxSSxxrxMU_pzhUxSmpra6QKUbSyOSSnMxSyUKSxCMKUtprySzrxxKttbzbSrbTN0xzUKBpyTSrrMtttzprrSSrMSpprKCILpJhBhIBonKMKLnKICJnBgmmpBm9mnAABgggmeommnAAAJghKKKhKgmpAAJpIJopCIMIMIJpCKJpKUa-s550V2VN50VNT0s5OWs6VT5NNTTTTTMyUSSxQJpJpAA7fBprxpttWbbSSQKSSSMMzSrt_rUUbUbaMyTOVzTOs7777N70V70_pzKKzbbSJpBp11hIKqnKUtIAJmnJnJmnIBnBnJnKKLpBnJhI7e9778V1N5-NT0VOtbaNN9gmmmkfICCACBgonCBpQICBnI1fJo9pSQJohBchKhCKJopSMKSSMrSMCIBomooenABfAIABgnIIMtsOaObbxI9mmon9gnKUwpMJpJpJpBmpSCShMKCMKCBpCK10V7-77X1-cVV-7hKKCMKrppMKSKpIAKtxzxSKpxnHghUySrvCICBfCJpMbnAIBhBgompIIMC9mgfCCKBoonIIICBfIIICBopIIIKKCKKSKMUKpKxpSSxxMUMKKSKxpUpKrSKSKSKnICCJnCA1999-1A9e-7-cXXX17V70a-f7VV-1--7XXm997cXX9AAC9mgoekccXg97XXABmkf9f9fA9emXn9emgmgonKtxgnBfI9nBemef1X9-9gn9meeXA9eemegoefBmgnBnC9gnC9eeggnCJhBpBnKJnKKKKxpIKrRhBhAKBhKSKKKIMKKKF7Z2MkT__44OOaO__O_LLTbYvkyffBkEcw2knyaaiBkyEC-x-nl3-3VQ3QMsc-O-txaOjzzk4K_-7VS-vCSzc7V0J2qEPevjFF3F--6mTV-FGRlV--92TV0kLotbx-a7AuPnIUUoxxzbzrKrpKKMSSSlWxrUsWtzKlzTUyOzbw516xSUzWbsX6wNgc55Xc7mcXmgmeJmofomXXIBcYHcVPXZcVTUceX1d9me17ee9-A0Y6qioC-asBoenIBjSUIBjUSJe9ceV7177eV7fC9gpzzHeeICyUxA9efIrzM0zKaP6kOxIMtxzbxBgef9gfMSxyU6ttaUttzGzryOa-OV1XCJc9VcN7---40ekqQ--NDEDyV--Red-6VumnMUacX--0pcZ3P2fIBnrozKocX7X7poxognBU6zbzojHxISryUWX-U0XV--V9YHX7--6M-k--Do0VDFSy8__bfuePPaEykFkk03C2-3VwCbAMV--0t6o-92oUS0V4FUCSaOQzBn4---ywe-Y13Y5KOjuRyaEBG2F--GW_V0FZtli---3co7-38GgR-93kCEP-1kaQpeNn--L4BWBn5T-BFdZS_ePOvjjjjwk3-FJGF0sL9epCyN9-mkhAhaefdPOOaOd_eO_dPLyiiveeeyEnnEiEwBk2nEnBnEEEnnwwznnF3333GGKJJG3G4KKGJ-94g9CkV--ipW-VWVbABxrMKz5OzJxsNNNVXmXe9c--B49F--PnOV-FqcSV7sQLqmeeppUUSSxtaTU6yT97997eeMC2a-LKOaOaOi_vdPiuzjd_dvijyu_KFJGF33303FC2-oBBB4KLOOaaOiaeduaeeffdiuzzzyyydKKJLfivjjjYBwyuyynzyEnznvszkxFzwzjvEBG0G2zjgyuyYvybvzjyieKbfYBkwzivYvyvyEiviyvfuuuPfePPaadvvvjjeOLP_MdOKKK_UeaPMefvjjYzYknkkzznFzyEjzjfyvvEzjeQfjYvzznzyiyEsywzwzYvEgkG43K4GJJKGJJK3-zjsEzjjvzwyyvvC3J2G3FJ2yjFG04FK4F4K-OKGJGJG0GK43EB4GG2EEzyvvn2yduyvjyinzx33G033Eiw-o-KF2k-GGJeKO_-0PL_JBFGKOF_KOHK4GFxOHKGGFwp08J-yEYnlKKFJBwFJK9eOFHLTdJ-kkn0KKdFPPe_3-B3HeOaJ_2-EeVC-3JKLdi_FHK20dPJFk0O_JBl3KT_3K5LLfjdJeu_Fo3_JiePJF30-l3FGJFoGF-X6dJBfEOtsV0FxOWbo-D6uCS6X1v2zp5_4fu_4ivEdiuPdKJF45aiivivyyiviiijsn-znBkBF235J-GG_-nBl-w44aKKG-KX2_nCErSSSkOWa11XeXLG1g8_OK_OOO_aPuKOdajsydQjznzydLKK_5KaiuyzyvzzzyzjvjidLK3KKGKKKKKaQfefjizjzyvdefiiznyzzyEwznBzwzkn2Eifzjufwyyzjwww--GPO_--zVBnvgEekk3K3GG3JGGFFG2B-333-0--03G3HK4ePeefeQiaOK--3-0-JFKiydeJHKJ2C40GG_ddKFnB2-JF0cWyMmmyTN-ZGfute2---ZAWV0G8Ihi3--8AO7--I0sk-7aWNk-RIFpuEF018vKgpKEM6tWV7XV--L5Mk-NgeYlV6GUzf_eczf24_-k-1C0lB-I5ZZqOynkqK-5YJBIArlX-1Gfu8_yC-6YOlnKIOV---5qJB-DCgdwja-C61_LTvoG-kYgE2KIJnAAMUxzUrOxzTOWaZcV9176qXeX7cVDlqEh_PPeffijjnEBC203FFGJ-mDm3BfEMtyP89-C6VITdTn---2mET-26bSqk--EMts2wUQzuiijiibfV-EYnn3G4LJJGF1szi7nJnr550e--78qw-1FShy-27J7aR-eFczBxKoT7-V-oWi1tLgwk-9FyXENV7H7Of_bisywyoGJG-GZSgYBepxxpyN5X97-gZ3Btfw30yZX6E9mY9eememXeefSzxzT6xzUrMommceKIABhBeMUSxyOWbbbxzHpATTTV5OzxzSy15Ua5O93eme9cXWWbbyVcmVAmK5MiyiajY2Eil3G445J--Hp-s--aMYk-0CdpV2HW8xuvoG-28GGLmemxr6tsV-oczDQis3F11JY8BgnBopr6ztzzNOWX7e7omX-0mZRx_UkRdHRBnKMKpMJppJxponBop6bbzxpxKlbWa0WWWX-UzUUrMzlxrWaWXVd9n9WVVc91e99X7eeVjHcccOe1V--dDLF0OOWLmpy1-6AISazG-5_hMYrq3e-2mvLGeyn04-Ca5w69nUrSq17--QBDVUivzzlJKJJ-qNYawozzyNn97c23mKCO_OLdiffgwnBBBl-J-5OPQhV0wnGIOeeyin0230F5uPAsSSUrHprMSI9BenCHoeXAIrrUUUzTUzyN56rzbV0bxbtcOyOttztcmefBgfBn9ef9X7VXX7X7X7V9IG_jaaeivzB-pFn2KJ09Pe2Rhbzzxxu7cemc-CCRoydz-p--5k5q-ICZKiPvjk34--5npT0dDEw5Oeuaufdeu_PeijB-BBFkoFG2EfswFk3-JLJ-9Ul6xk-7nzgraaOeQfVBB-n-1XVgnghCEpKSIIIMKxML5-0Wc0c5V71-7-C0ccQ-B92pWnABnIBgmxUa-UbtbrzzrtbbueXBee5Pec-C21Ktk6e6I4rJpIBrMM0c-0zzbae91c7Qh2tpO_ddeeTbeeiiduuffeeefydbefjiedeeaijY-nnBwnznEBnnEwk-nveefdbYw3B-2koFFnyjueuTw2FyvfiB-32G0-oGK3-OdveeJFFFo3BoLK0JF-40OOaOa_8KKFB3OKefddFF0--02F-00G2--5cWxzMSV1V0JNHMaB-uYI9RnKMGWWaNe-HJRYn_aayu_jjjeBC-FJFFEjiwC44F2uEcgpJxIIy5-NVV-07cwk-PGjhlV3oZcraOPzkC-5eHK_nABpKKrK55-575TT-e0fHO2qaaabeuauQeiffeQffF-33-kk-BB222n4J3K--9LCls-CAWRtk-1QXrVIK7Wd___4aLywyizYzYEyEBw0JOJOJJ-edEvRpK5Os1V1CKLfOdOyszywkGG4-5etPbKtae-jKWNneePfiuiifiijifiw2yfeii-zefeeeeefYBBn--0033F3F03-G-3F03-4-0GGGKJ-ufB4MHjSzSomcXfMpzS6xKKKKMSsV-10a7V-75Ouec17-6Lbx5JE-PfeifA9eme9AJzrzxztyN57-SVW5uU-0qkprRxMSKSpKSrtV7X7X17--V-58t6-LgVLbBpIKrWzSqV0V7Ve--O0SB8LoLpxJnBgmpICBomogn9oghBnIBpUbWxpMOzzVUsUbaTOa55ObxonKESyUSzrzRUtWztsTUzrMtcVV-V-eX-0Zegee977XX-cemcY9ecV8q__U_OdujEvnBmK30--hDurV-5vfz37hzjz9gemecf9genrI9ggn97gegegoenBgopCJonEJUzpCKKIKonKSKMKKKSMSpUKrbzV0V5NN-77VV-7X-WWVV-N-0aNOWWbsN-0yUUUxzrzSMKrSICpJnIIErL5NOaUSxpSUMSSkOWWaV1-1-55--Vc7X5UxrpUSUxty51-cVXX97VcXZecV9r1ep_LLasznvgyw343F-AZ4Kk6pnU1tLuaOG5K_a_OLLPKeOddYzwwwzEnzEnwzE2E2C-JF3-4id5YIMV7-Cs_ftkIvpQOmnA9nBgf9YBoooofICBeeCBoqUUUxtza6aNUWba6aOaOWba5T5THcV7NLKvdveejzG-33F-5q05bAzy9VCvXK8_eeiyvujin304_-3-0FZT-95mmcgfAACBn9ggeAA9mmnCUtzrprpUSAAIBggecmmggghM6tzNOtttyTTTUbbbxzKa5N0bbbbbbaNTTTTTTUy551ccfAA99XXcWnw5hG_OLKOLKaO_LKOK_POOKdaPOaPOaaUzBnEknwknzE2En2nzEnzeKazEyzzjnwzzznyszgzzzwziyzjvvzjEnueOOdawzEnnwzEEnwwzEEnknEnB0JLJJ__OJ0K_JLK4K4_G8K4445K_48LK_OK4G44K4OKGF1TETamnMTOVc" :
		17 === bI.s9 ? oE =
		"9mDS-FP-F--0TedPPOXo0HCGSpxrMptUSrUztztbbsUtaTTOzzzzStzSzSrSrSrppT-0btaOaNNUttVOa---56y6aOSrUaN5OzztztaOtTObtaNNUzaOSrSvHogmgfKpKSrCJgnIICMKrSryUWs--17XD--OaUzaOzyObzzztzrrUxUKprrzyUzzzzzzrSrrbzUSzyOaOsOzzzztbzzrAMSKzrUzzUSrUrrMKKSzzxrrxrxrrSrSrUSpMJnCKUV6aSxxUSxrSSMzzzWzz_zzzzzzxrUzxUzzrSzpxpxUSUxrxxSrrMSrSKKMKMSKKxrSKxzxpJmegnKzWzzoeepBpABgohBnBpMSKyOsT5T---OWWt_onKzzS9ehSrUzzzzrzzKKAILmfHnBpUztWsT0WaOaUzzzUrUrSzpxzzrSMSrzzzSKKKKpyTUaOzxzxrxxrxrUzzxzzzzzzzSrxrUrSrSzMSrSSrSrUprMKzUUUrbrbrbrrSMKxKKKpIKKKMKKKIBpKBnJnBhBgnCAIBnBnBnBgonIJoonIJnBnKBen17AKICIKKJgpKKCSSKKCKJpBpKIKBnKKKCACBpKMIKponBgfBnCHoonBnAKCKKCI9nBenBnBgmepCBn9cecegX-9eenHmognBmegefBnBenBnBenBgmonAKICCKKCKKKIKKJnCJnBmfBnBmpBnICIBpIBmpBmnBnABn8aObbaOa0bVOV1n9fCBonIHmonCMpQ9hCAJnJgnCBnBmpBpBgfA9nBmX9eeeXeXcXX9eee77gpKrSrzSrSrJnKKrrrrKJnCBnCBhCIBgemggeggef9eemmeecceAKKrKICJproomgmgeee9X9eXfKMSMAKMzrMyOtxrKCBe7VcfBprrBAIHnKhSKIBp9emgfBnCBpSMSUSxrrzzrKKLmnBmmnABpIKIBmgmnKSpSKUSrPkf9en9nAIKpIBgmXEV9gpB7Ve9VX9XbrUV1cc9V7Ws11chBeaN7tV7AIC7XN1N1777c2V-a5USy117aNN-ceef97Oa-Wzy1N-17WbyMMKSCKrs10WV-Ws978V-5-D5-s-7VcgmfMopCSppIA7XV--1-2bs717V15--a52aN-X1-cVN-X-V-ts-0V0VOV1OaOa1-2WV-sOV--7OV-V--VX-7--7-0yN7--7-X1OWa--1-0WVT--9N7OV--1-NN---V-17V-15Us--V--15NN7----VX1N7---X71--17eX7X7XX1VcX9XXcX9999A77eVeX9A17X9cX7X7X9cX7V7VV---717cV1717X717X-X7X71177X-X71N19--97X-X7-X7c-91X-X-7X7g7XVeX7Ws-177-17-5Oa5NOsOa5OaOV1XmX7eVcOV-95--5-sUWVNT5N--0WWtztaTT6WaOV7-0aOaOzza0aN0a--7VOV7s-s--6V-X---17X1Vc118V5OV7eX7XcXemnCCBfBnBoprSp9gn9cV17ee-9eee7eV4kDJ_aeiwn-FJ-u28mgpMSzsN-XeV5Fop6aeecBBk-F1t5Zdn9xxrs-9-O9QZyeevz-G3G-YcmK6CIIrUrrSrrrqOa9-X9X7X9cV1_beTuOPOPfznwwC3-4-Jh78rBeejprrSrNN--7-T5ITPw30U8E3BgonBzrtWzzaNVeeV8t9XtaOdOyzBwnEBKK-AmPDvCxrr-7X7ByJT4OdKaTizEydLQi_G48_OUdOvEvyuv-zyevvnzyBFzjvyBnzzznE0KKJJJK43JJG3JF0GKK-2BiSRpxxpWX7Xc" :
		18 === bI.s9 ? oE =
		"DgBy1vR-AV60YBnopk-O_9DCIs4rUUrSSMUrSrSSSMKzypKSSMRpKMSrUKMSpKSSrUrSKIKSueXgnCKBgme9XenIKKMBpSKpKMMxpLppKKpnBoopKMMMMKpMKKKKrSzzza55ObzzUUSxppppCCSSpSSrRopSrrSSSppMMSSrKSzUtpxrxxphSMUMUSrrUzzaOtbaOtbbbaOzWWaN5Os6yN-ee117eme97cX--1117XmmccVaN1-Xy-XD-NT-6sDOa0y-cWtzrrKrrSpptWSxs1W_rMUMMUTUUzrrrrSrSxKSrKKzKSrMSrxxprUUzUyTOa-N-1-X-7--1-VV1D-EUUaOtSs-SyMzy-Xe1XXe999XcefCIKKUUn7X7eXee8aOV11UUUa-X7X0Ss1N1mVcf9ecekgk1AJmnABgn99mn9hIJhKKMB7797ee17y17V79Ve79nFX8s19nAIKI1n9pMKKT5Jp-hFgV1goV1nIF-hB-1kOsN56rSpppMtVX-77c7a5N-D550V-ObbaTTN-OVa----N--7s50y0VTNN-9maOzV17cVeepABnBpKKCBnBoopIKMMS9pKKKKKKIBWV-D-XemgpKBe9gm9eOzbyOa5OWV15NN7-N--V5-OV55-50aOaOa----99e77X9e770V1OVX-ccefABn997Xc77VccgceXegfBnH7cegcVX9ecD-VV-7-XV7Xcs5OaUT155-51XD--UtyUy--zWzzUzrbzyMT5OtztyOaOzKpxxIKKKKpIKKSMIKSKKSzztzbyUxtaUaNN5OyKs-6V0WV0_y-SppSICMKMTTTOtQBpSCMSsSrMSzyTMSprSptSUbzzygfKxUaObrMJpTO_pmpUxraTTOtttVUtaSSptzIAK99eXegfKgpCLmpMrUSpz7fKBoohUttrSrUrrSrSAKKUUra4pSzbaNTObaUyUxopBpSrzbaOyN10baSrrpzKpSSUtSzpUs-75N7cc91cXoX7V7Ws1-5TUbaOaOaSySzzzrzzzUtaN0V971A9eenBeee7Xe9cgcfAA9gggnKJgpgeee9eA9mfBgf9geVVX9fB7X6baOTTNNOtaOty52tzVNN9m7Xcce9715N5ObKt_y-8rMbzs90My6_s4raOUxrrpUMrz_rCMUry-eXUzrpySrxyObrztrzUMUttpztrVMrzrMsURhUxpsOpCUbrzqmenMtzmpzb_mfKzpooXX1pBpxSSKpSMSMKKCMKQKnCBmmeXcc71171-V--XpIIKKnIAAIBnCMMCKprzWV7sObKKrKUMsNN5UyMzzrBpztttWVaTObW_xpI99ghKKMxztaUUbzzzMy6vBgnACUtz_yTMrUzbnIMUtttV-UrUSrSSprMSSMyOWVX-18a0a-0yTOa5NOzrrRoonBpSKBpCKCCKSnCCBhBmme7efMSUSzUUaOyT5OaN-0aUxpoopMSzTN99WbV2VVXX9eYV0WaN-V-OtvKKUSzMrs1797VtpzV6rrSSrzBhKCKMSrT-Wa-V0V-X77ca--UzzzyHpMT-yT-7-sOaObbyTTOzUtsUIMSpSRnMzMT0WsTOs97hIBeX-X7tVVtzVc8WWaUonMzbKUsTUbSxrnMUKBoonJnJgpBpBoptaNOttaT5NUxprCUT1-VObbzrUzzyTUzzzy2zSxxxzry-1-Wrbtbs9zbzV9UV19-fa-taTOpUWxMsN716aUKyUps0xzaNN0VOWbaUzSrzaMrzVcX155OVOV0ztby-199f1XOWa-N-TOWa5UaNUaOa5OaUtzxtaN7egYy-VTOaUrnMwnKtzxpzaICTmoomenCKS9e9hSKxzbrSrSKBgpMKrWs-_yTNMbMyTOzrJnHnKxrKpSMKMSpprKSSMU9fBopKKpcfKSMAIKSrUMMpSSrUzVbrMUUTMympKrSrUUzMBnKSKrSxpJpMrUSSpSKS97cXXXXcXXXX9997ccX7c7X7V11171N-V-VVX1-71117-7-X19997V1mopKrSxpMMKpPeVX7hJfKCCKMMMMMKKpprUa6BpepKAK8V1meommnKMPgpAACReonACBopKSIKMMCKKKKKRpKCKJoprUtbbSSUs4MtaT-78sUxzzwpxxpxrKKSSSUSpUSSSSSKKKSKKMKSKJpKKKIKKKJoopBn9mccgpKICAMIKKKrKCJnIIBopMMzxxrrSxxxrSpSMSpKABofBnBn97710VA112V1171mmgn9k7V51-7XecXpAHhAIBooo-X75NN-XeXnBnKIBnCCKBnB9gpKprryU_ppSzyOWVObrzyTShPfIBnCK9hKCCJpKzrzxprSrSSUrxxqeeehUxzUrrABnIBhMzsOxrxSmgpxnMHnHhMnMICHmpMnHhSyMBhLopC9fIMhBnBnCJommmfAA1nBo97c9nMMrFhBgnBehBgfABfIKSx9X17N1emXABf9gmnJepJmhRmopKCMSUSxrMSrrUSxrrxrSrSrMSSMKKppCKKRognBggogeefI9mpxrr9nBggoog7--N-e999fAa-XfJV17s7XA97XcgecWV7eeAJpKKJoopCKBpKKKrTTMMKSxRpKrSzrzxxrStSrUUUSSpLpCMSKMSzMSSRef7Xce7e9X997-cX9-c-777-11197VXX17X7cgc0V0VNN1VOV-1-WVV-77VcV71-V-71--AJVV7XhMCBmfBnC797g-ACI7-Oa--11-Vc-1XVX9979X17V1-VV7cec9oppnBn1gXo71oome-1nHmgfBpKIBgmmcenIBnBnBnAAAIA9mmonI9egoXmggopCMKKKLpQCIBoopKopJcgnIBp9fACJmge7X77VVa-11-V7-VVVX-V72V7-7-VVV11-V7----V---N78V5NN-V6s9XOy1cepgpQIA9f9e7X777VX7UTUbta1eekXX7X0VcX91c--g7-11emXceeXX9ee99ce9g7cX999XXXX99X7XV-5-V7ceeegeX7X977X77-X7XVV-5-1-7--ecD-9hBX99onAMSKIMJpKSpKrMKJhIMKopST-NOaOrRopIBfIMSSMzxzUpzUUaUaUbttyUaOhBpIJppMKprSxrUrrKMKprRnBn9ggnBms9gnICIK99efBomceXgnIBcXceeeXeefBp9emceececeegmeXXeekee9X9Xf9ecee7X7-5N-a-N--NOWVN--V-1-V1--5---711171--550aN5--0V1-V77-55---------N-7XOta6aN1ggnBmnI7VD-VNN--NN1ghKBpKIKKJpKIIKCKKKCKIKKRnBopKKrKSSIJpIIJoopCIJpKUKSMLpSKKIIJpKKMSnKrUSSppKpMSMKpSKrKp9eepUrpSSKpSprrrzzzSrrzzzrUrzxrUzUzUyTSxnICKCACCCBnABnBgnBmnABnCBnBgmnBgmmmgggggf9meemeXggf9mgemmmenAAABmmmmXhA7cgnIIAIBnBmhBnIBnKKSMSpgnCKRnKKMKKpKSprQMQCIKKCKMKCJpKKpMBohRmnABfB-1V9sQR73q09kCIBed989cCHZpMUMMSMSUOxbpy0bbxSraOaOc7TVP29C9Vc0VBecV--7NVV-N8H9w--c9BgrX-BVhQICKrSsV-1VkNB1Dn9choeAEHp9A9eAKKp9fCI9Xme118BgecX7IKKAKrJce70cXXXcXMSppCzSpJxSMKSKSSrk-0xpxxzba-17Oxta56paOsNNTOyTOa--USkWzMUUzs--VWbrxrrVV-d9e7VHsFGFpA9BnCzzII9X97pxS9XHVZoogqUtzqUyUxx50WsTOXmgcOuVOXc0T4CohpochopxzyN7X7NXV-cNWurX-AW_mQ9horyWa--D6JABqN-51WZ4aN79-1XOJ2Oc-58_IBN-i8hrCBfItza-V2Nd5onEIMLOs-X-0se3gprOX1V5NezHrS9eACprpxy0aN7cVV07h4Zpy1V3shEFnKMUrzcVN7I91V-chgRwP--Xvb6V37jO2mfSxrUba79cV3cjXTpJpJOyTOX7gc--1B70i-6Y102KttXe-4Y2-QBrWV-qBklBoptztf9-7-aBzewzzyPee--YGg2-DspvZoeeeXmeA9mgmogn9fSApra0tzWzy6tzzbzztza-e-1YR0fR--PDnihKtVX-SYi0nMS9VecnMSUzxc7UNN5eV4HE3LxHx9HfA9nBxpaX5TUbzUpKDNUKBh9e5BfCMSFT6zUbaOd9V0aP7OZecWV-dYlL2AAIBmcozMopohpzU---NOaOa6X97-LEHZBzbeV07yFszq9V-cz9FrX-4YxwbHc6s-9FJpByV0d0kXnUT7V--FTac-5FvBCV-XGFeBnEUa1-686HMnJmxCIATUpUzV5--57eV2t6dDnABplyUaN1c--GxMc-9HB5gtV38862nCBopa0taT7V0d8AyppN7-1THOURmocpAKpBc9zSMU0aN551-USL---WZbifBogn9ghCUrLTTTOyOWs7e7V08F5moo5-48NGSmzJmVCKK6ls-0V-1_meQFN19MIGBrKKKKopKzWaUbsX7X77-17c-1P80D09ablQKBxrSSMSxzUSpSrSrSprMMUSVVVVV0baXX997XX7ccXVX17X7c-DQ9vBxX-PblGIMMSrMMMkVVOte97eX7-DUDUCL1-0bwmfD-3c-SvC55-NcAPfppppSrSr1117X171-Ju42Zn9gmd9ceceAMSrSppKrSIBfrKCMUUKk-T9mcV5Ua5Ubz6tX--0aOa1X902cKbrCKKJpHpIJnIKBnCCBfBfEryOttVOu5OaTN5OX0a-7--1---cRyM--P9esnVneG9xnBmn9grKKJnIJpKSKMKJporUonHe2IBmmnCBpCKrSrKpppxrSzUzxxrV5-NNNOV-Ws-XV55UrSrxyOc775-7egoe50Wta7X777N--7VOxrSVWtbzUUSqV6bWaN19cVX99gecemd9ec1xdFn2SrJeCpKrMSrKpSKSKIKKIICCI9XKMKCMSII9comomnAABpCIJpBmrTObs0taT5OsNOzaUSKMUtV-0aXX0WxOzaOV0zr1750zrGWX--XVVV-77X7V0VV-117XXXcHX1V39Nu-nKrUUyP7X9XVFeTW0xrI997KBcXBgnCAJpta50aUpIIBnKSzba-0VVUzbqNX1c--dA_c19eGowgggnCSSGWWWbaUsUUUccee705ejHzrzUUyNA9eXeV19fFvonOaTX-Rf_UfKCBeISJxrT-0WbbVNXe--AcyX--Aenu-lfzAABeconJnUP5UrSpKIpxLV0zML5-V7--1X7-2gTJfAOV-AQx3k--sU3c1TvB1BnKCIKIKCpMSGzr-0VN--751-19-0iur2k0FkOrQBgceZgnKKMMKKSJmXxpSSprMs6rJnrUra5NX7-X10X0aOVN-1cV70c16258gfA9fJmnIMKxzyOaOs-NNNX-7lElAMryXe7-042oc-A4AKhN-7gKbcmpIrX6zrxrMzUVeVX-gocVXV-3MmVV-3NpHV4wNq3mmmrUUrMUTP77-X7--lazYV3RQ6imfrrSprs-1X9-7liMQEOxse70E6TIBmZxlxxKOa77VV0I6vXBefKMIM5Ota50cV-RW4Rw-0RW5cnK5--Om5EABpMKBhSxxs17-0V5X--H5H1-9mCaYBoxbaP70emCc2MSIBepJfIIBmVP7mnCIAACCKIlV50bxqUV6zxxpCKprzzaUKa577cWVNUrOtV17V17V7Xcc--HEP1-0mI5IF-0mLgQF-amT1YIBonIIICBgonGaOaNOWVNOWba-02AS3hKIKIJN0V-5--AByfCsV-BqE5k-6CtMgN-0D4wcDzDLQCCCBpIIAAUJmmfBnAAJonCBoomgggfABpAKCJeecme9IBnKKKrMJrSrzUSKpMKpzrtttbxpMbbqOaUwUxObzrrK6aTTTOa5550Vc155ObWaOs9--0WWbtzyNce9cc-Ne7Vcc90zbcV0ztte90byTOXeXeeeVNXeeV0RupTnClV-hngH2CCCCJpKKKppUUtzbta5-V777-X177XV1wx_ZnIKKaN-V-PnvrYCJooerSo-OzuXVTOV71MEjtggeeeggnIAACJoTUzrMUbbttyN-AEykhD--x0GZrsc-2FY2g-4o9gQCSX-CjFseBonHonBf9en9eegf9XfCIBfBpCKMMHhCCKpCKICIpOtzSMMKKIJxUbbs7VN1---VV5ObbxrKCESzUpISy0bbbse1cX5-XVcXeV6y6aTNNNfBmehCCBee19cVV-0a6bzttyUyTUtzwUtttaNNOWV-1oImQL--AGQ0CNV-x5IkxkV0IIIYXm2V7XXeyUta5UV-46fyV0C78BrT7V0S83qnAyP2IoidnCSprrSxrSzrUMSxpMxzUUSSMMMMSzSSrrSprMSpMSSxrSxxxprrrrrUrxrSUUbtaUUL----WX-5N97X9emVP97719ecX-0aNcgmme6a9eX7199e77gecVX7cXXXXXcXX77X7X9egeeXX9-2oitACsV0hAoJnEbsc1EIX0Bgeen9gf9rSaOzzWyUrzqNX9-0CE-XnxVV-4FqeV0SGIunObe-1p622T7-0JRDc-0JfGc-vK0CgggrUzaT19V-CLDDs-6Ku0CV-ALMbENV-COvBk-bLoRjSrR-cX-8pp72IJoOWV--4T3HV-STYBq--hTbPoN-6pzxnBpT0X-5q4TfCGaNV-xXFHpN7-6N_hh--2NfsB-NqBUQHeCCtzSSSzT1cX11-1CZ-NpprX17-7qMXnCMyN7c-IOb-BnaN-0Owzc2fPAlBgggf9fAHoonAABgnCKCbbaT5OWaOaTOtbaTTOaN-0PiN7-MPkJBf6tV-4fLuV-SgO9lV-phLT7tV-4gqNV-4hl5V3xiFwnA9nAROzqOaOXV-SifanVGKwWFOaOV6zzzzUUy6tztbKta56s-WrzzsN-5T4rKpppSKSKKKM-6Sk2RmmeXgeggnTUbxyTUbyOe-OMnm0a50aOV-NNOyNOxtyN-fRZugenzttuc6MRg2gooef9eemeX7XeeeA9Y9BehCIUzrMUzzbrxzttzztzUzrzqUzzbzzzbbzrzzV-9fA9eeX0XeBeeY9e7-DrA8vSzrOtaXeec-0S7u7-rS8wBhCUbttcec-bSGCgnCzaN9-BrL6QBezxyTPXV4hpYLmgfCtzxzSttX9ce-" :
		19 === bI.s9 && (oE =
			"EcCx-VQCO1iiqOLOKeeedae_ddadadadOfiveOeLeeeedadaPiuuiePPeeyeeeeOeaPadaeeydPeOedaOPLOeeeOadLOKLKKLJG4G3G4G4G3F-3GJG4G4KKG443G3G3G3G4K3K3K3GKKK3FJ40F33GK0K0K3G3F3F2nBnBnBnB-Bn-04G--BzzwEByvn-wG-BnnB2BkG44K-4KPKQyde_K-G3GKFwGPKO_O_K3J4KG4KKG4KKKJG4KJKK30304LOJG3GKKKKKQvjzuzziviueeaKaKPKKKKKKKKK3K_eOKO_OedaKaLaOevedaOGOeOeeaOaOaOeOjzvjyaPeOKKKOK43K_KKaveJGJ0-JG3G3GF3G3G43KaKF3G4aOedaOFKLK4_eee_dJK33KeaOLOaOjveeKLO_OaOaeKLPeivjeaOeOaJKGKJ4PdadafiyjedLPeueK3F-G30F3G3-3LOaOjeKLPe_O_OeaPfieieeyeaOaPOKOeedeOdada_daOdaKd_O_aOKPOKLKaKdK4LK3LTdaOdKaOK_KLPOaaO_LPKGKKK_KOaLO_aOOaaOdaPOdaO_OaKOdaPOdaPedeOJF--00LaPdeaeOfeyeiuudaueaaPdbeOeuefefuivfifujifieviivifeeid_G-04OF0-03KaPvievjizfeeLJ0-JG-KdOTvfiyviyujffviujeiufeiefivivfivvfeevivveiuueieiefeeiyejffuiuuiviuvfiifiieePeeaieieveuePdaPKJKefefefiuzzvzivviyfvnvjvzEzzjzwzzzBnzwnnk2Bwkn2zzknB-n2BnEBzyzzBzzEwnzznzzzjfzBzwzznziz2zwnBnBBkB--B2EBznEzBwnBnBzzBknEnEByywzzzzzEzz2wnzkzznEBwwEnEnEzznEzzzzzzzzEzwwEEizizizivjvjfznnzyyyvivzzwnyviuizyeyeKbifiuizzvifieeuyviuiuefie_iviiyjzvn3F3Bnw-BnBn2BnBnwnwnwnBkBBk22nEn-EeeieKdeiudaOaOPedaeePeee_KKLPOefzkzEEjzwk2B-k-kBB2yiiuieueeaeeaOOaOvzzzBzvjivjuiuyevieifiedaOeueuivivieuvfyvzvyvvuuvwzzyyvzzvjivvivvjyvznBnn2wzznwoLK-z2BknzEivePPLOOvjBwnEffeuyzefzuuujnkkGG-yzEEzBnEBnnBwnEBnznzzvzzznzvzzEBnzn-k-k-k-2-wB2B-k2-2nBB2kBBwnBw-nB-2Bk22Bw-BkknnBBBBBnBE-znznkkEnE2--kEBknBBkBBk2E-3-2Bk-k2B22BB2k-k-k2BBn-w2-32k-C3F--k-FG0G-22-2-FB--k-2-w-G32En--nB-2kKLePLdFJG3-F0033G043-l3-G3K3JK-32B3G4K4F--B--B--FGLJGJ3F03JLaeKFG--0---BFK--203FGGFG33F2nBFG3FGJ4GJ4K02GKF03-GKKG3K0JFK3G03F--G--l43--Bk--kG-FF3F03G-403G----l0----G--Bn33GJG340JG3-G4KaLKPKG-4-3F3F03-B-------G3FJ00--3KGF--0---03G0032T4mfgmegmeX7fBnJnKIEzzzzbrpzzaObtVOaNX9c9c0JN9cQfjzGG0F4NoWynBpJnKzzzV---Xc1RfMlOOvfvzwEw3GKKF-0gAIV-2OK2-3aoazBjs-pIUdyOaKaKaOfzzvgBnBF---1gInV-4OaA-BexerKESrs-V9V3q6e6dauVn3-0fPHBpMs-c-SiqWQwJ1mtRSUSKKKKKKJOzzxrROc11--TX-X7V7eeV4Meo2avi2kCK--EcNy-OUJfiLKdTzsBk-0kCPrF0fVVRjiveveiueOuveeeeaNn-n22-BG--030303K3F3B6-nnBnBrSr0a---EsTXQudeviviedazk-2-G-030K-4l1tMCkOc-57MIs-E3IhS5P-CYA-DLew--koIyA9emmfACMSrUtbzzzTTObrUtV7ge7X7eeV8QnZxddaebjwnB-30F3xzBZnMKCMzra71-7cV3wA4p_Qzzo4Ffy5yanHpIKSKMKSMSSrKKMofJppMKSKrSpSMKSzrzzrUtaOzsTN1oc5OaUzrHnCTOtaP755N5-T-NUTNN-N-5-5-N-P7X97gn9gmeee9n9meeX97cX7eVeX9cXV"
			), (new rZ).rb(oE)
}

function aCv() {
	this.s8 = null, this.dE = function() {
		var aDs = [120, 105, 92],
			cos = [12, 12, 60],
			aDt = [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
			aDu = [140, 130, 120],
			aDv = [12, 12, 76],
			aDw = [240, 120, 1024, 30, 19, 30, 70, 8, 20, 3, 9],
			aDx = [130, 117, 106],
			aDy = [12, 12, 68],
			aDz = [270, 210, 1024, 28, 19, 33, 50, 8, 26, 3, 9];
		this.s8 = new Array(bI.aAg + 1), this.s8[0] = {
			name: L(110),
			u: 230,
			iF: 230,
			l8: 1e3,
			l5: 2e3,
			aCx: 173
		}, this.s8[1] = {
			name: L(111),
			u: 800,
			iF: 800,
			l8: 100,
			l5: 50,
			aCx: 43
		}, this.s8[2] = {
			name: L(112),
			u: 512,
			iF: 512,
			l8: 128,
			l5: 32,
			aCx: 0
		}, this.s8[3] = {
			name: L(113),
			u: 960,
			iF: 960,
			l8: 60,
			l5: 8,
			aCx: 0
		}, this.s8[4] = {
			name: L(114),
			u: 900,
			iF: 900,
			l8: 100,
			l5: 5,
			aCx: 0
		}, this.s8[5] = {
			name: L(115),
			u: 1e3,
			iF: 1e3,
			l8: 100,
			l5: 40,
			aCx: 0
		}, this.s8[6] = {
			name: L(116),
			u: 1e3,
			iF: 1e3,
			l8: 100,
			l5: 20,
			aCx: 0
		}, this.s8[7] = {
			name: L(117),
			u: 1024,
			iF: 1024,
			l8: 128,
			l5: 32,
			aCx: 0
		}, this.s8[8] = {
			name: L(118),
			u: 820,
			iF: 820,
			l8: 200,
			l5: 100,
			aCx: 0
		}, this.s8[9] = {
			name: L(119),
			u: 1024,
			iF: 1024,
			l8: 128,
			l5: 32,
			aCx: 0
		}, this.s8[10] = {
			name: L(120),
			s7: aDu,
			sA: aDv,
			aD6: aDw
		}, this.s8[11] = {
			name: L(121),
			s7: aDx,
			sA: aDy,
			aD6: aDz
		}, this.s8[12] = {
			name: L(122),
			s7: aDx,
			sA: aDy,
			aD6: aDz
		}, this.s8[13] = {
			name: L(123),
			s7: aDs,
			sA: cos,
			aD6: aDt
		}, this.s8[14] = {
			name: L(124),
			s7: aDs,
			sA: cos,
			aD6: aDt
		}, this.s8[15] = {
			name: L(125),
			s7: aDu,
			sA: aDv,
			aD6: aDw
		}, this.s8[16] = {
			name: L(126),
			s7: aDu,
			sA: aDv,
			aD6: aDw
		}, this.s8[17] = {
			name: L(127),
			s7: aDs,
			sA: cos,
			aD6: aDt
		}, this.s8[18] = {
			name: L(128),
			s7: aDx,
			sA: aDy,
			aD6: aDz
		}, this.s8[19] = {
			name: L(129),
			s7: aDs,
			sA: cos,
			aD6: aDt
		}, this.s8[20] = {
			name: L(130),
			u: 1024,
			iF: 1024,
			l8: 128,
			l5: 32,
			aCx: 0
		}, this.s8[bI.aAg] = {}
	}
}

function z5() {
	(ss = void 0 === ss ? document.createElement("canvas") : ss).width = bI.eT, ss.height = bI.eU, z9 = ss.getContext("2d", {
		alpha: !0
	}), zA = z9.getImageData(0, 0, bI.eT, bI.eU), a5d = zA.data, b2.od.rq(a5d)
}

function cM() {
	var ds, u, iF, max, aE0, l5, aE2, aE3, aE4, aE5, aE6, aE7, aE8, aE9, aE1 = 1e4;

	function aEG(aEF, l8, ey) {
		var a0;
		for (aE2[0] = aEF, a0 = 1; a0 < ey; a0++) aE2[a0] = aE2[a0 - 1] + l8, l8 = aE2[a0] >= aE1 ? (aE2[a0] = aE1 - 1, -l8) : aE2[a0] < 0 ? (aE2[a0] = 0, -l8) : (l8 += 16384 <= ao.random() ? l5 : -l5) < -aE0 ? -aE0 : aE0 < l8 ? aE0 : l8
	}

	function aEI(fg, fh, aEJ, ey) {
		(aEJ ? function(fg, fh, ey) {
			var a0;
			for (a0 = 0; a0 < ey; a0++) ds[fh * u + fg + a0] = aE2[a0]
		} : function(fg, fh, ey) {
			var a0;
			for (a0 = 0; a0 < ey; a0++) ds[fh * u + fg + a0 * u] = aE2[a0]
		})(fg, fh, ey)
	}

	function aEM(value, ey) {
		var a0, k0, fx, ge = value - aE2[ey - 1];
		if (0 != ge) {
			for (k0 = 1 + bB.em(Math.abs(ge), ey - 1), k0 = ge < 0 ? -k0 : k0, aE2[ey - 1] = value, fx = (fx = ey - 1 - bB.em(Math.abs(ge), Math.abs(k0))) < 1 ? 1 : ey - 2 < fx ? ey - 2 : fx, a0 = ey - 2; fx <= a0; a0--) aE2[a0] += ge - (ey - 1 -
				a0) * k0;
			(ge < 0 ? function(ey) {
				var a0;
				for (a0 = ey - 2; 1 <= a0; a0--) aE2[a0] < 0 && (aE2[a0] = -aE2[a0] - 1)
			} : function(ey) {
				var a0;
				for (a0 = ey - 2; 1 <= a0; a0--) aE2[a0] >= aE1 && (aE2[a0] = 2 * aE1 - aE2[a0] - 1)
			})(ey)
		}
	}

	function aEP(xQ, xR, ey) {
		for (var a0 = 0; a0 < ey; a0++) xQ[a0] = xR[a0]
	}

	function aEQ(e6) {
		for (var a0 = 0; a0 < e6.length - 1; a0++) e6[a0] = e6[a0 + 1] - e6[a0];
		e6[e6.length - 1] = e6[e6.length - 3]
	}

	function aER(zS, gap, gd) {
		aE3.push(zS), aE4.push(gap), aE5.push(gd)
	}
	this.w = function(yN) {
		! function(yN) {
			var a0;
			for (u = yN[0], iF = yN[1], aE0 = yN[2], l5 = yN[3], ds = new Int16Array(u * iF), max = iF < u ? u : iF, aE2 = new Int16Array(max), aE3 = [], aE4 = [], aE5 = [], aE6 = new Array(u), aE7 = new Array(iF), a0 = u - 1; 0 <= a0; a0--) aE6[
				a0] = !1;
			for (a0 = iF - 1; 0 <= a0; a0--) aE7[a0] = !1;
			aE8 = new Int16Array(u), aE9 = new Int16Array(iF)
		}(yN),
		function(ey) {
			var aEF = ao.random() % aE1,
				l8 = ao.random() % (2 * aE0 + 1) - aE0;
			aEG(aEF, l8, ey)
		}(max), aEP(aE9, aE2, iF), aEI(0, 0, !0, u);
		var fg, fh, yN = ds[0],
			ey = max,
			l8 = ao.random() % (2 * aE0 + 1) - aE0;
		for (aEG(yN, l8, ey), aEP(aE8, aE2, u), aEI(0, 0, !1, iF), aEQ(aE8), aEQ(aE9), aEG(ds[u - 1], aE8[u - 1], iF), aEI(u - 1, 0, !1, iF), aEG(ds[u * (iF - 1)], aE9[iF - 1], u), aEM(ds[u * iF - 1], u), aEI(0, iF - 1, !0, u), aE6[u - 1] = aE6[
				0] = !0, aE7[iF - 1] = aE7[0] = !0, aER(0, u, !0), aER(0, iF, !1), ! function() {
				var aET, zS;
				for (;;) {
					if (aET = function() {
							var a0, aET = aE3.length - 1;
							for (a0 = aET - 1; 0 <= a0; a0--) aE4[a0] > aE4[aET] && (aET = a0);
							return aET
						}(), aE4[aET] < 5) return;
					zS = aE3[aET] + bB.em(aE4[aET], 2), (aE5[aET] ? function(fg) {
						var ey, aEW, a0, a6R = 0,
							aEX = 0;
						for (; aEX < iF - 1;) {
							for (a0 = a6R + 1; a0 < iF; a0++)
								if (aE7[a0]) {
									aEX = a0;
									break
								} ey = aEX - a6R + 1, aEG(ds[fg + u * a6R], 0 === a6R ? aE8[fg] : aE2[aEW - 1] - aE2[aEW - 2], ey), aEM(ds[aEX * u + fg], ey), aEI(fg, a6R, !1, ey), aEW = ey, a6R = aEX
						}
						aE6[fg] = !0
					} : function(fh) {
						var ey, aEW, a0, a6R = 0,
							aEX = 0;
						for (; aEX < u - 1;) {
							for (a0 = a6R + 1; a0 < u; a0++)
								if (aE6[a0]) {
									aEX = a0;
									break
								} ey = aEX - a6R + 1, aEG(ds[fh * u + a6R], 0 === a6R ? aE9[fh] : aE2[aEW - 1] - aE2[aEW - 2], ey), aEM(ds[fh * u + aEX], ey), aEI(a6R, fh, !0, ey), aEW = ey, a6R = aEX
						}
						aE7[fh] = !0
					})(zS), aER(zS, aE3[aET] + aE4[aET] - zS, aE5[aET]), aE4[aET] = zS - aE3[aET] + 1
				}
			}(), fg = 0; fg < u; fg++)
			if (!aE6[fg])
				for (fh = 0; fh < iF; fh++) aE7[fh] || ! function(fg, fh) {
					var value = ds[fh * u + fg - 1] + ds[(fh - 1) * u + fg],
						a1I = 2;
					aE6[fg + 1] && (a1I++, value += ds[fh * u + fg + 1]);
					aE7[fh + 1] && (a1I++, value += ds[(fh + 1) * u + fg]);
					ds[fh * u + fg] = bB.em(value, a1I)
				}(fg, fh)
	}, this.aDH = function() {
		return ds
	}, this.aD2 = function() {
		ds = null
	}
}

function a9U(hz, i5) {
	return 0 <= hz ? bB.em(hz, i5) : -bB.em(-hz, i5)
}

function iK(ds) {
	return ds * ds
}

function a0X(hz, i5) {
	return i5 < hz ? hz : i5
}

function a3u(hz, i5) {
	return hz < i5 ? hz : i5
}

function a2i(hz, ds, i5) {
	return ds < hz ? hz : i5 < ds ? i5 : ds
}

function aEZ(ds, ey) {
	for (var il = bB.em(ds + 1, 2), a0 = 0; a0 < ey; a0++) il = bB.em(il + bB.em(ds, il), 2);
	return il
}

function aBD(ds, ey) {
	return ds < 1 ? 0 : aEZ(ds, ey)
}

function aEa(kq, kr, pd, a2S, ks, kt, pe, a8g) {
	return !(kq + pd <= ks || kr + a2S <= kt || ks + pe <= kq || kt + a8g <= kr)
}

function aEb(kq, kr, pd, a2S, ks, kt, pe, a8g) {
	return kq <= ks && kr <= kt && ks + pe <= kq + pd && kt + a8g <= kr + a2S
}

function rh(ds) {
	return Math.floor(!!ds * (1 + Math.log2(ds + .5)))
}

function be() {
	this.em = function(hz, i5) {
		return Math.floor((hz + .5) / i5)
	}, this.aEc = function(hz, i5) {
		return Math.floor(hz * (i5 + .5))
	}, this.sqrt = function(ds) {
		return ~~Math.sqrt(ds + .5)
	}, this.pow = function(d) {
		return Math.floor(Math.pow(2, d) + .5)
	}, this.o6 = function(value, min, max) {
		return Math.min(Math.max(value, min), max)
	}, this.aEd = function(e7, e9, eB) {
		return Math.max(Math.min(e7, e9), eB)
	}, this.aEe = function(aEf, aEg, fg, fh) {
		fg -= aEf, aEf = fh - aEg, fh = 0;
		return 0 == fg ? fh = 0 <= aEf ? Math.PI : 0 : (fh = Math.atan(aEf / fg), fh += 0 < fg ? .5 * Math.PI : 1.5 * Math.PI), fh
	}, this.log2 = function(ds) {
		return Math.floor(!!ds * (1 + Math.log2(ds + .5)))
	}, this.log10 = function(ds) {
		return Math.floor(Math.log10(ds + .5))
	}, this.aEi = function(aEj, aEk, aEl, aEm, aEn) {
		return aEl - aEn < aEj && aEj < aEl + aEn && aEm - aEn < aEk && aEk < aEm + aEn
	}
}

function cv() {
	this.k9 = new aEo, this.pW = 0;
	var aEp = new Array(19);

	function aEt() {
		for (var ey = aEp.length, a0 = 0; a0 < ey; a0++) aEp[a0] = null
	}
	this.dE = function() {
		for (var aEq, aEr = document.body.firstChild; aEr;) aEq = aEr.nextSibling, "DIV" !== aEr.tagName && "INPUT" !== aEr.tagName && "BUTTON" !== aEr.tagName || document.body.removeChild(aEr), aEr = aEq
	}, this.j = function(kf, aEs, yN) {
		void 0 === aEs && (aEs = this.pW), bT.dL = !0, 0 === kf && (0 === aP.vt() ? kf = 5 : m.n.setState(13)), this.pr(), this.pW = kf;
		var ja = aEp[kf];
		if (!ja || 4 === kf || 7 === kf || 8 === kf || 9 === kf || 10 === kf || 11 === kf || 13 === kf || 15 === kf || 18 === kf) {
			if (0 === kf) return void aEt();
			1 === kf ? ja = new aEu : 2 === kf ? ja = new aEv : 3 === kf ? ja = new aEw : 4 === kf || 9 === kf || 10 === kf || 11 === kf || 13 === kf ? ja = yN : 5 === kf ? ja = new aEx : 6 === kf ? ja = new aEy : 7 === kf ? ja = new aEz(i.k9
					.aF0) : 8 === kf ? ja = yN : 12 === kf ? ja = new aF1 : 14 === kf ? ja = new aF2 : 15 === kf ? ja = new aEz(i.k9.aF3) : 16 === kf ? ja = new aF4 : 17 === kf ? ja = new aF5 : 18 === kf && (ja = new aF6), ja.aEs = aEs, aEp[kf] =
				ja
		}
		ja.show(yN)
	}, this.w0 = function() {
		this.tE() && this.aF7(this.a8z().aEs)
	}, this.aF7 = function(kf) {
		this.tE() && (this.pr(), bT.dL = !0, this.pW = kf, aEp[kf] ? aEp[kf].show() : this.j(kf))
	}, this.pr = function() {
		this.tE() && aEp[this.pW].pr()
	}, this.qy = function() {
		this.tE() && (aEp[this.pW].pr(), aEt(), this.pW = 0, m.n.setState(13))
	}, this.kl = function() {
		var ja;
		this.tE() && (ja = aEp[this.pW]).kl && ja.kl()
	}, this.resize = function() {
		if (!this.tE()) return !1;
		aEp[this.pW].resize()
	}, this.fo = function(fg, fh) {
		var ja;
		this.tE() && (ja = aEp[this.pW]).fo && ja.fo(fg, fh)
	}, this.wF = function(fg, fh) {
		var ja;
		this.tE() && (ja = aEp[this.pW]).wF && ja.wF(fg, fh)
	}, this.wd = function() {
		var ja;
		this.tE() && (ja = aEp[this.pW]).wd && ja.wd()
	}, this.wI = function(jm, jn, deltaY) {
		var ja;
		this.tE() && (ja = aEp[this.pW]).wI && ja.wI(jm, jn, deltaY)
	}, this.wp = function(code) {
		var ja;
		return !!this.tE() && ((ja = aEp[this.pW]).wp && ja.wp(code), !0)
	}, this.hb = function() {
		var ja;
		this.tE() && (ja = aEp[this.pW]) && ja.hb && ja.hb()
	}, this.tE = function() {
		return 0 < this.pW
	}, this.a8z = function() {
		return aEp[this.pW]
	}, this.aF8 = function(kf) {
		return aEp[kf]
	}
}

function aEz(data) {
	var aF9, aFA;
	this.show = function() {
		data.aFB && b8.aFj("account", data.pU), aF9.show(), this.resize()
	}, this.pr = function() {
		aF9.pr()
	}, this.resize = function() {
		aF9.resize(), aFA.resize()
	}, this.wp = function(il) {
		2 === il && aF9.q7[0].ol()
	}, aF9 = new q1(data.username, [new l(L(13), function() {
		b8.clear(), i.w0()
	}), new l(data.aFB ? "🔄 " + L(131) : L(132), function() {
		i.j(8, i.a8z().aEs, new pX(25, {
			pY: 0,
			pU: data.pU,
			pV: data.pV
		}))
	}, 0, 0, 1)]), aFA = new oO(aF9.q6, function() {
		var oQ = [];
		oQ.push(function() {
			var aFO = new oA;
			aFO.oD(L(133)), aFO.oH(L(134) + b2.l2.yb(data.r8, .01, 2)), data.aFB || (aFO.oF(L(135)), aFO.oF(L(136)), aFO.oF(L(137)));
			return aFO
		}()), data.aFB && oQ.push(function() {
			var aFO = new oA,
				aFP = (aFO.oD(L(138)), new pD(bX.dW.data[147], 1, void 0, function(d) {
					aFQ(d.target.value)
				})),
				aFR = (aFO.oM(aFP), new l(L(139), function(d) {
					return aFP.d.readOnly && aq.k9.a6o(0) && (b2.ku.xz(d), aFS(), aq.aFT.aFU({
						pY: 0,
						pU: data.pU,
						pV: data.pV,
						value: bB.o6(Math.floor(100 * bX.dW.data[147].value), 0, 4294967295)
					})), !0
				}, 1)),
				aFV = new l(L(140), function(d) {
					return d.innerText === L(140) ? (d.innerText = L(141), aFP.d.readOnly = !0, aFR.on(0), aFR.button.style.color = p.mg, bX.p5.p6(147, aFP.d.value), aFQ(bX.dW.data[147].value)) : aFS(), !0
				}),
				oG = (aFO.oM(new pA([aFV.button])), aFO.oF()),
				aFQ = function(ds) {
					ds = isNaN(ds) ? 0 : Number(ds);
					var ds = Math.max(ds, (data.aFW + 1) / 100),
						aFX = Math.floor(100 * Math.max(1e-4 * ds, data.aFW / 100)) / 100;
					oG.textContent = L(142, [ds.toFixed(2), bX.dW.data[105].value, aFX.toFixed(2), data.pU, (ds - aFX).toFixed(2)])
				},
				aFS = function() {
					aFV.button.innerText = L(140), aFP.d.readOnly = !1, aFR.on(1), aFR.button.style.color = p.lv
				};
			return aFQ(bX.dW.data[147].value), aFO.oM(new pA([aFR.button])), aFO
		}());
		oQ.push(function() {
			var aFO = new oA,
				aFP = (aFO.oD(L(143)), new pD({
					title: data.pU,
					value: data.pU,
					kf: -1
				}));
			return aFP.d.readOnly = !0, aFO.oM(aFP), aFO.oM(new pA([new l(L(144), function(d) {
				return b2.ku.xy(aFP.d), b2.ku.xz(d), !0
			}).button])), aFO
		}()), data.aFB || (oQ.push(function() {
			var aFO = new oA,
				aFY = (aFO.oD(L(145)), new pD(bX.dW.data[106]));
			return aFY.d.readOnly = !0, aFY.d.type = "password", aFO.oM(aFY), aFO.oM(new pA([new l(L(146), function(d) {
				return d.innerText === L(146) ? (d.innerText = L(147), aFY.d.type = "text") : (d.innerText = L(146), aFY.d.type = "password"), !0
			}).button, new l(L(144), function(d) {
				return b2.ku.xy(aFY.d), b2.ku.xz(d), !0
			}).button])), aFO.oM(new pA([new l(L(148), function() {
				i.j(8, i.a8z().aEs, new pX(15))
			}).button])), aFO.oD(L(149), "0.8em"), aFO.oF(L(150)), aFO.oF(L(151)), aFO.oF(L(152)), aFO
		}()), oQ.push(function() {
			var aFO = new oA;
			return aFO.oD(L(153)), aFO.oM(new pA([new l(L(154), function() {
				i.j(6, i.a8z().aEs)
			}).button])), aFO.oM(new pA([new l(L(155), function() {
				bX.p5.p6(105, ""), i.j(8, i.a8z().aEs, new pX(18))
			}).button])), aFO.oM(new pA([new l(L(156) + bX.dW.data[105].value, function() {
				i.j(4, 0, new k(L(157), L(158), !0, [new l(L(13), function() {
					i.j(7, i.aF8(7).aEs)
				})]))
			}, p.mU).button])), aFO
		}()), oQ.push(function() {
			function aFa(kf) {
				for (var a0 = 0; a0 < 2; a0++) aFZ[a0].on(0 === kf ? p.m6 : 0 === a0 ? p.mU : p.q)
			}
			var oK, aFZ, aFO = new oA;
			aFO.oD(L(159)), aFO.oF(L(160)), bX.k9.qr();
			return aFZ = [new l(L(161), function() {
				var kf = Math.min(bX.dW.data[117].value, oK.oL.length - 1);
				if (!(kf < 1)) {
					oK.oL[kf].remove(), oK.oL.splice(kf, 1);
					for (var a0 = kf; a0 < oK.oL.length; a0++) oK.oL[a0].name = "" + a0;
					bX.k9.qu(kf), kf = bX.dW.data[117].value, oK.oL[kf].textContent = oK.oL[kf].textContent.replace("⚪", "🟢"), aFa(kf)
				}
			}, p.m6), new l(L(162), function() {
				var kf = Math.min(bX.dW.data[117].value, oK.oL.length - 1);
				kf < 1 || (kf = bX.k9.qv(kf), bX.p5.p6(105, kf.pU), bX.p5.p6(106, kf.password), i.j(8, i.a8z().aEs, new pX(18)))
			}, p.m6)], (oK = new px(bX.dW.data[117], aFa)).oL[0].style.marginTop = "0.5em", aFO.oJ(oK), aFO.oM(new pA([aFZ[1].button])), aFO.oM(new pA([aFZ[0].button])), aFO
		}()));
		return oQ.push(function() {
				var aFO = new oA,
					aFP = (aFO.oD(L(178)), new pD({
						title: data.username,
						value: data.username,
						kf: -1
					}));
				aFP.d.readOnly = !0, aFO.oM(aFP), aFO.oM(new pA([new l(L(144), function(d) {
					return b2.ku.xy(aFP.d), b2.ku.xz(d), !0
				}).button])), data.aFB || aFO.oF(L(179));
				return aFO
			}()), oQ.push(function() {
				var aFO = new oA;
				aFO.oD(L(163)), aFO.oH(L(164) + b2.l2.yb(data.r4, .1, 1) + "<br>" + L(165) + (data.r5 + 1) + " / " + data.r7 + "<br>" + L(166) + data.r6), data.aFB && (aFO.oM(new pA([new l(L(167), function(d) {
					return aq.k9.a6o(0) && (b2.ku.xz(d), aq.aFT.aFb({
						pY: 1,
						pU: data.pU,
						pV: data.pV
					})), !0
				}, 0, 0, 1).button])), aFO.oF(L(168)));
				return aFO
			}()),
			function(oQ) {
				var aFO = new oA,
					vT = data.rB,
					aFf = (aFO.oD(L(180)), aFO.oH(L(181) + (vT ? "[" + data.r9 + "]" : "-")), aFO.oH(L(182) + b2.l2.yb(vT, .001, 2)), aFO.oH(L(165) + (data.rD + 1) + " / " + data.r7), data.rE),
					aFg = (aFO.oH(L(183) + b2.l2.yb(aFf, .01, 2)), data.rG);
				aFO.oH(L(184) + aFg), aFO.oH(L(185) + b2.l2.yb(aFf / Math.max(aFg, 1), .01, 2)), vT = data.rC, aFO.oD(L(186), "0.8em"), aFO.oH("Clan: " + (vT ? "[" + data.rA + "]" : "-")), aFO.oH(L(182) + b2.l2.yb(vT, .001, 2)), aFf = data
					.rF, aFO.oH(L(183) + b2.l2.yb(aFf, .01, 2)), aFg = data.rH, aFO.oH(L(184) + aFg), aFO.oH(L(185) + b2.l2.yb(aFf / Math.max(aFg, 1), .01, 2)), oQ.push(aFO)
			}(oQ),
			function(oQ) {
				var aFO = new oA;
				aFO.oD(L(187)), aFO.oH(L(175) + data.aFh + "<br>" + L(176) + (data.aFi.length ? L(188, [data.aFi]) : L(189))), data.aFB && (aFO.oM(new pA([new l(L(190), function(d) {
					return aq.k9.a6o(0) && (b2.ku.xz(d), aq.aFT.aFb({
						pY: 4,
						pU: data.pU,
						pV: data.pV
					})), !0
				}, 0, 0, 1).button])), aFO.oF(L(191)));
				oQ.push(aFO)
			}(oQ), oQ.push(function() {
				var aFO = new oA;
				if (aFO.oD(L(174)), aFO.oH(L(175) + data.aFd + "<br>" + L(165) + (data.aFe + 1) + " / " + data.r7 + "<br>" + L(176) + function(gP) {
						if (40 <= gP) return L(169);
						if (16 <= gP) return L(170);
						if (4 <= gP) return L(171);
						if (1 <= gP) return L(172);
						return L(173)
					}(data.aFe)), data.aFB) {
					aFO.oM(new pA([new l("−", function(d) {
						return aq.k9.a6o(0) && (b2.ku.xz(d), aq.aFT.aFb({
							pY: 3,
							pU: data.pU,
							pV: data.pV
						})), !0
					}, 0, 0, 1).button, new l("+", function(d) {
						return aq.k9.a6o(0) && (b2.ku.xz(d), aq.aFT.aFb({
							pY: 2,
							pU: data.pU,
							pV: data.pV
						})), !0
					}, 0, 0, 1).button]));
					for (var a0 = 0; a0 < 2; a0++) aFO.oB[0].pC[a0].style.fontSize = "1.6em";
					aFO.oF(L(177))
				}
				return aFO
			}()), oQ
	}())
}

function aFk(data) {
	var aF9, aFl, aFm, a6W, aFn, aFo, aFp, colors, aFq, aFr, aFs = 0,
		aFt = 0,
		aFu = !1,
		aFv = !1,
		aFw = [1, 5, 60, 240, 1440, 10080, 43200];

	function aGN(jm, jn) {
		! function(jm, jn) {
			return aFl < jm && jm < aFl + a6W && aFm < jn && jn < aFm + aFn
		}(aFs = jm, aFt = jn) ? (aFu && (bT.dL = !0), aFu = !1) : (aFu = !0, bT.dL = !0)
	}
	this.show = function() {
		aFv = bX.dW.data[127].value, aF9.show(), this.resize()
	}, this.pr = function() {
		aF9.pr()
	}, this.resize = function() {
		aF9.resize();
		var il = an.oZ,
			qG = aF9.qB(),
			aG5 = il * qG.qF,
			il = il * qG.qC;
		aFo = b2.ku.pt(.06), aFp = b2.ku.pt(.04), aFl = b2.ku.pt(.06), aFm = il + aFo, a6W = an.u - aFl - aFp, aFn = aG5 + il - aFm - aFp
	}, this.kl = function() {
		aF9.kl(),
			function() {
				var a0, aG2, jM, fg, hz, e6 = data.data,
					aG8 = 1,
					aG9 = .125,
					aGA = aFv ? 65536 : 0;
				for (a0 = 0; a0 < e6.length; a0++)
					for (aG2 = e6[a0].aG2, jM = aG2.length, aG8 = Math.max(jM, aG8), hz = 0; hz < jM; hz++) aG9 = Math.max(aG2[hz], aG9), aGA = Math.min(aG2[hz], aGA);
				var kr = aFm + aFn,
					sk = aFn / (aG9 - aGA),
					sj = 1 / (aG8 - 1);
				for (kv.lineWidth = bQ.th, a0 = 0; a0 < e6.length; a0++) {
					for (aG2 = e6[a0].aG2, jM = aG2.length, fg = aFl, kv.beginPath(), kv.moveTo(fg + a6W, kr - sk * (aG2[jM - 1] - aGA)), hz = jM - 2; 0 <= hz; hz--) kv.lineTo(fg + sj * hz * a6W, kr - sk * (aG2[hz] - aGA));
					kv.strokeStyle = colors[a0], kv.stroke()
				}(function(aGA, aG9, kr, sk) {
					kv.font = b2.ku.kz(0, .25 * aFl), b2.ku.textBaseline(kv, 1), b2.ku.textAlign(kv, 2), kv.fillStyle = colors[0];
					for (var fg = .92 * aFl, a0 = 0; a0 < 3; a0++) {
						var ds = aGA + a0 * (aG9 - aGA) / 2;
						kv.fillText((ds / 1e3).toFixed(3), fg, kr - sk * (ds - aGA))
					}
				})(aGA, aG9, kr, sk),
				function(aG8) {
					var fh = aFm + aFn + .15 * aFp;
					kv.font = b2.ku.kz(0, Math.min(.4 * aFp, .028 * an.u)), b2.ku.textBaseline(kv, 0), b2.ku.textAlign(kv, 2), kv.fillStyle = colors[0], kv.fillText(b2.xA.xn(aFq), aFl + a6W, fh), b2.ku.textAlign(kv, 0), kv.fillText(b2.xA.xn(
						new Date(aFr.getTime() - 6e4 * (aG8 - 1) * aFw[data.aG1])), aFl, fh)
				}(aG8),
				function(aG8, aGA, aG9) {
					if (aFu && !(aG8 < 2)) {
						for (var a2a, kf = (aFs - aFl) / a6W * (aG8 - 1), jy = Math.floor(kf), jz = Math.floor(1 + kf), aGD = kf - jy, aGE = 1e5, aGF = -1, aGG = -1, aGH = aG9 - (aG9 - aGA) * (aFt - aFm) / aFn, e6 = data.data, a0 = 0; a0 < e6
							.length; a0++) {
							var aDZ, aG2 = e6[a0].aG2;
							aG2.length <= jz || (aG2 = aG2[jy] + aGD * (aG2[jz] - aG2[jy]), (aDZ = Math.abs(aGH - aG2)) < aGE && (aGE = aDZ, aGF = a0, aGG = aG2))
						} - 1 !== aGF && (aG9 = aFm + aFn - (aGG - aGA) / (aG9 - aGA) * aFn, kv.lineWidth = .5 * bQ.th, kv.strokeStyle = colors[aGF], kv.beginPath(), kv.moveTo(aFl, aG9), kv.lineTo(aFs, aG9), kv.lineTo(aFs, aFm + aFn), kv
						.stroke(), kv.beginPath(), kv.arc(aFs, aG9, .1 * aFl, 0, 2 * Math.PI), kv.fillStyle = colors[aGF], kv.fill(), aGA = aFm + aFn + .15 * aFp, b2.ku.textAlign(kv, 1), a2a = aG8 - 2 < kf ? (a2a = aFr.getTime() - 6e4 * aFw[
								data.aG1], new Date(a2a + (kf - (aG8 - 2)) * (aFq.getTime() - a2a))) : new Date(aFr.getTime() - 6e4 * (aG8 - kf - 1) * aFw[data.aG1]), aG8 = b2.xA.xn(a2a), kf = b2.ku.measureText(aG8), a2a = bB.o6(aFs, aFl +
								.5 * kf, aFl + a6W - .5 * kf), kv.fillStyle = b2.color.ln(70, 50, 20), kv.fillRect(a2a - .52 * kf, aFm + aFn, 1.04 * kf, .55 * aFp), kv.fillStyle = colors[0], kv.fillText(aG8, a2a, aGA), kv.font = b2.ku.kz(0,
								.25 * aFl), b2.ku.textBaseline(kv, 1), b2.ku.textAlign(kv, 2), a2a = .92 * aFl, aG8 = (aGG / 1e3).toFixed(3), kf = b2.ku.measureText(aG8), aGA = a2a - 1.04 * kf, kv.fillStyle = b2.color.ln(70, 50, 20), kv
							.fillRect(aGA, aG9 - .1625 * aFl, aFl - aGA, .275 * aFl), kv.fillStyle = colors[aGF], kv.fillText(aG8, a2a, aG9))
					}
				}(aG8, aGA, aG9)
			}(), kv.lineWidth = bQ.th, kv.strokeStyle = p.lv, kv.beginPath(), kv.moveTo(aFl, aFm), kv.lineTo(aFl, aFm + aFn), kv.lineTo(aFl + a6W, aFm + aFn), kv.stroke();
		var a0, fontSize = .5 * aFo,
			e6 = (kv.font = b2.ku.kz(0, fontSize), b2.ku.textBaseline(kv, 1), b2.ku.textAlign(kv, 0), data.data),
			ey = e6.length,
			fh = aFm - .5 * aFo,
			oE = "";
		for (a0 = 0; a0 < ey; a0++) oE += e6[a0].name + "  ";
		oE = oE.trim();
		var aGK = b2.ku.measureText(oE),
			fg = .5 * (an.u - aGK);
		for (aGK > an.u && (fg = 0, kv.font = b2.ku.kz(0, an.u / aGK * fontSize)), a0 = 0; a0 < ey; a0++) kv.fillStyle = colors[a0], kv.fillText(e6[a0].name, fg, fh), fg += b2.ku.measureText(e6[a0].name + "  ")
	}, this.fo = function(jm, jn) {
		aGN(jm, jn)
	}, this.wF = function(jm, jn) {
		aGN(jm, jn)
	}, this.wp = function(il) {
		2 === il && aF9.q7[0].ol()
	};
	var a0, dq, xl, jd, f7 = data.data,
		ey = f7.length,
		max = 1;
	for (a0 = 0; a0 < ey; a0++) max = Math.max(max, f7[a0].aG2.length);
	for (a0 = 0; a0 < ey; a0++)
		for (; f7[a0].aG2.length < max;) f7[a0].aG2.unshift(0);
	dq = new Date, xl = 6e4 * dq.getTimezoneOffset(), jd = dq.getTime() - xl, aFq = new Date(jd), 6 === data.aG1 ? function(dq, xl) {
		var aG4 = dq.getUTCFullYear(),
			dq = dq.getUTCMonth() + 1;
		aFr = dq < 12 ? new Date(Date.UTC(aG4, dq) - xl) : new Date(Date.UTC(aG4 + 1, 0) - xl)
	}(dq, xl) : (xl = 6e4 * aFw[data.aG1], aFr = data.aG1 <= 4 ? new Date(jd + xl - dq.getTime() % xl) : new Date(jd + xl - (dq.getTime() + 2592e5) % xl)), jd = b2.color, colors = [p.lv, jd.ln(255, 0, 0), jd.ln(0, 200, 0), jd.ln(80, 80, 255), jd
		.ln(255, 255, 0), jd.ln(255, 0, 255), jd.ln(0, 255, 255), jd.ln(255, 140, 0), jd.ln(128, 128, 128), jd.ln(0, 255, 140)
	], aF9 = new q1(L(192) + ", " + ["M1", "M5", "H1", "H4", "D1", "W1", "MN"][data.aG1] + ", " + b2.xA.xk(aFq), [new l(L(13), function() {
		i.k9.a5w()
	}), new l(L(193), function() {
		i.j(14)
	})], !1)
}

function aF2() {
	var aF9, aFA, oQ;
	this.show = function() {
		aF9.show(), this.resize()
	}, this.pr = function() {
		aF9.pr()
	}, this.resize = function() {
		aF9.resize(), aFA.resize()
	}, this.wp = function(il) {
		2 === il && aF9.q7[0].ol()
	}, aF9 = new q1(L(194), [new l(L(13), function() {
		i.aF7(13)
	})]), aFA = new oO(aF9.q6, ((oQ = []).push(function() {
		var aFO = new oA,
			aFV = (aFO.oD(L(195)), aFO.oF(L(196)), new l(L(197), function() {
				bX.p5.p6(130, 0), i.k9.aGS()
			}, 0, 0, 1)),
			aFP = new pD(bX.dW.data[126], 0, function() {
				aFV.button.click()
			});
		return aFO.oM(aFP), aFP.d.placeholder = "a,b,c", aFP.d.style.marginTop = "0.5em", aFO.oM(new pA([aFV.button])), aFO
	}()), oQ.push(function() {
		var aFO = new oA,
			aFV = new l(L(197), function() {
				bX.p5.p6(130, 1), i.k9.aGS()
			}, 0, 0, 1),
			aGT = new pD(bX.dW.data[129], 1, function() {
				aGT.d.focus()
			}),
			aGU = new pD(bX.dW.data[128], 1, function() {
				aFV.button.click()
			});
		return aFO.oD(L(198)), aFO.oM(aGU), aGU.d.style.marginBottom = "0.5em", aFO.oD(L(199)), aFO.oM(aGT), aFO.oM(new pA([aFV.button])), aFO
	}()), oQ.push(function() {
		var aFO = new oA;
		return aFO.oD(L(200)), bX.dW.data[125].q0 = ["M1", "M5", "H1", "H4", "D1", "W1", "MN"], aFO.oJ(new px(bX.dW.data[125])), aFO
	}()), oQ.push(function() {
		var aFO = new oA;
		return aFO.oD(L(201)), aFO.oM(new p3(bX.dW.data[127], L(202))), aFO
	}()), oQ))
}

function aF1() {
	var aF9, aGV, a6W, aGW, a6X, a6Y, colors = [0, 0, 0],
		aGX = -1;

	function a6f(a0) {
		var aGa = aGV.fh + a0 * (bQ.gap + a6Y);
		kv.fillStyle = "rgb(" + (0 === a0 ? 150 : 2 === a0 ? 30 : 0) + "," + (1 === a0 ? 130 : 2 === a0 ? 30 : 0) + "," + (2 === a0 ? 220 : 0) + ")", kv.fillRect(aGW, aGa, colors[a0] * a6X, a6Y), kv.strokeStyle = p.lv, kv.strokeRect(aGW, aGa, a6X,
			a6Y), kv.fillStyle = p.lv, kv.font = b2.ku.kz(0, .32 * a6Y), b2.ku.textBaseline(kv, 1), b2.ku.textAlign(kv, 0), kv.fillText(L(0 === a0 ? 205 : 1 === a0 ? 206 : 207) + aGY(a0), aGW + bQ.gap, aGa + .53 * a6Y)
	}

	function aGY(a0, aGb) {
		return aGb = aGb || 256, bB.o6(Math.floor(aGb * colors[a0]), 0, aGb - 1)
	}

	function wk(jm, jn) {
		return !(jm < aGW || jn < aGV.fh || jm > aGV.fg + aGV.u || jn > aGV.fh + aGV.iF)
	}
	this.show = function() {
		var ds = bX.dW.data[121].value;
		colors[0] = (ds >> 12) / 63, colors[1] = (ds >> 6 & 63) / 63, colors[2] = (63 & ds) / 63, aF9.show(), this.resize()
	}, this.pr = function() {
		bX.p5.p6(121, (aGY(0, 64) << 12) + (aGY(1, 64) << 6) + aGY(2, 64)), aF9.pr()
	}, this.resize = function() {
		aF9.resize(), aGV.resize();
		var il = an.oZ,
			qG = aF9.qB(),
			aGZ = (aGV.fh = Math.max(aGV.fh, il * qG.qC + bQ.gap), il * qG.qF - 2 * bQ.gap);
		aGV.iF = Math.min(aGV.iF, aGZ), aGV.u = 2 * aGV.iF, aGV.fh = il * qG.qC + .5 * (il * qG.qF - aGV.iF), aGV.fg = .5 * (an.u - aGV.u), a6W = .25 * aGV.u, aGW = aGV.fg + a6W + bQ.gap, a6X = aGV.u - a6W - bQ.gap, a6Y = (aGV.iF - 2 * bQ.gap) /
			3
	}, this.kl = function() {
		var gP, ps, i5;
		aF9.kl(), kv.lineWidth = bQ.th, gP = aGY(0), ps = aGY(1), i5 = aGY(2), kv.fillStyle = "rgb(" + gP + "," + ps + "," + i5 + ")", kv.fillRect(aGV.fg, aGV.fh, a6W, aGV.iF), kv.strokeStyle = p.lv, kv.strokeRect(aGV.fg, aGV.fh, a6W, aGV.iF), kv
			.fillStyle = gP + ps + i5 < 306 && ps < 150 ? p.lv : p.l0, b2.ku.textBaseline(kv, 1), b2.ku.textAlign(kv, 1), kv.font = b2.ku.kz(0, .1 * aGV.iF), kv.rotate(-Math.PI / 2), kv.fillText(L(204), -aGV.fh - .5 * aGV.iF, aGV.fg + .5 * a6W),
			kv.setTransform(1, 0, 0, 1, 0, 0), a6f(0), a6f(1), a6f(2)
	}, this.fo = function(jm, jn) {
		wk(jm, jn) && (aGX = bB.o6(Math.floor((jn - aGV.fh) / (a6Y + .75 * bQ.gap)), 0, 2), colors[aGX] = bB.o6((jm - aGW) / a6X, 0, 1), bT.dL = !0)
	}, this.wF = function(jm) {
		-1 !== aGX && (colors[aGX] = bB.o6((jm - aGW) / a6X, 0, 1), bT.dL = !0)
	}, this.wI = function(jm, jn, deltaY) {
		wk(jm, jn) && (jm = bB.o6(Math.floor((jn - aGV.fh) / (a6Y + .75 * bQ.gap)), 0, 2), colors[jm] = bB.o6(colors[jm] + (1 - 2 * (0 < deltaY)) / 256, 0, 1), bT.dL = !0)
	}, this.wd = function() {
		0 <= aGX && (aGX = -1, bT.dL = !0)
	}, this.wp = function(il) {
		2 === il && aF9.q7[0].ol()
	}, aF9 = new q1(L(203), [new l(L(13), function() {
		i.k9.a5w()
	})], !1), aGV = new oy([.5, .25], [.5, .5], 1)
}

function pX(id, yN) {
	var aF9, aGc;

	function aGg() {
		aGc.p8.innerHTML += "<br>" + L(210)
	}
	this.aGd = !0, this.aGe = id, this.show = function() {
		aF9.show(), this.resize(), 15 === id ? aq.k9.a6u(0, id) ? this.aGf() : aGg() : 16 === id ? aq.k9.a6u(0, id) ? aq.a5t.aGh(2) : aGg() : 17 === id ? aq.k9.a6u(0, id) ? aq.a5t.aGh(3) : aGg() : 18 === id ? (aq.k9.close(0, 3253), aq.k9.a6u(0,
				id), aGg()) : 20 === id ? aq.k9.a6u(0, id) ? aq.aFT.aGi(yN) : aGg() : 21 === id ? aq.k9.a6u(0, id) ? aq.aGj.aGk(yN.pn, yN.po, yN.pp) : aGg() : 22 === id ? aq.k9.a6u(0, id) ? aq.aGj.aGl(yN.pn, yN.aGm, yN.aGn) : aGg() : 23 === id ?
			aq.k9.a6u(0, id) ? aq.aGj.aGo(yN.aG1, yN.vM) : aGg() : 24 === id ? aq.k9.a6u(0, id) ? aq.aGj.aGp(yN.aG1, yN.po, yN.pp) : aGg() : 25 === id ? aq.k9.a6u(0, id) ? aq.aFT.aFb(yN) : aGg() : 28 === id && (aq.k9.a6u(0, id) ? aq.aGj.aGq(yN
				.pn, yN.aGm, yN.aGn) : aGg())
	}, this.aGr = function() {
		15 === id ? this.aGf() : 16 === id ? aq.a5t.aGh(2) : 17 === id ? aq.a5t.aGh(3) : 18 === id ? i.j(8, this.aEs, new pX(16)) : 20 === id ? aq.aFT.aGi(yN) : 21 === id ? aq.aGj.aGk(yN.pn, yN.po, yN.pp) : 22 === id ? aq.aGj.aGl(yN.pn, yN.aGm,
			yN.aGn) : 23 === id ? aq.aGj.aGo(yN.aG1, yN.vM) : 24 === id ? aq.aGj.aGp(yN.aG1, yN.po, yN.pp) : 25 === id ? aq.aFT.aFb(yN) : 28 === id ? aq.aGj.aGq(yN.pn, yN.aGm, yN.aGn) : 1e3 === id && (this.aGe = id = 25, aq.aFT.aFb(yN))
	}, this.aGs = function(code, bb, data) {
		!bb && code !== id || (16 === code ? i.j(7, this.aEs) : 17 === code ? (aq.k9.close(0, 3252), bX.k9.qu(0), bX.dW.data[117].q0 && 0 < bX.dW.data[117].q0.length ? (bb = bX.k9.qv(0), bX.p5.p6(105, bb.pU), bX.p5.p6(106, bb.password), i.j(8,
			this.aEs, new pX(16))) : (bX.p5.p6(105, ""), i.k9.a5w())) : 21 === code ? i.j(10, this.aEs, new aGt(data)) : 23 === code ? i.j(13, 0, new aFk({
			data: data,
			aG1: yN.aG1
		})) : 25 === code && (i.k9.aF3.pU = yN.pU, i.j(15, this.aEs)))
	}, this.aGf = function() {
		b4.w(48), b4.x(24, Math.floor(bB.pow(24) * Math.random())), b4.x(24, Math.floor(bB.pow(24) * Math.random())), b7.dE(b4.a1), bX.p5.p6(110, b5.pZ.pa(b5.pZ.pb(8))), aq.aFT.aGu()
	}, this.pr = function() {
		aF9.pr()
	}, this.resize = function() {
		aF9.resize(), aGc.resize()
	}, this.wp = function(il) {
		2 === il && aF9.q7[0].ol()
	}, aF9 = new q1(L(208), [new l(L(13), function() {
		i.k9.a5w()
	})]), aGc = new p7(aF9.q6, L(209))
}

function aEx() {
	var aGv, aGw, aGV, aFP, aGx;
	this.a90 = new pg, aGV = new oy([.45, .27], [.5, .5], 2 / 3), aGw = [new l("⚔️<br>" + L(100), function() {
			aGy(0)
		}, p.mK), new l("🗡️<br>" + L(211), function() {
			aGy(1)
		}, p.mW), new l("🔑<br>" + L(212), function() {
			aGy(2)
		}, p.ml), new l("☰<br>" + L(213), function() {
			aGy(3)
		}, p.m7), new l("", function() {
			i.j(12)
		}, p.lr, !1),
		new l("FX Client settings", function() {
			WindowManager.openWindow("settings");
		}, "rgba(0, 0, 20, 0.5")
	], aFP = new pD(bX.dW.data[122]);
	for (var a0 = 0; a0 < aGw.length; a0++) aGw[a0].button.style.position = "absolute";

	function aGy(kf) {
		m.n.setState(10), ay.we(), aR.pw() || aR.a8q(), 0 === kf ? i.k9.aGz() : 1 === kf ? i.k9.aH0() : 2 === kf ? 0 !== m.id || bX.dW.data[140].value ? i.j(8, i.pW, new pX(16)) : i.k9.aH1(i.pW, 16) : 3 === kf && i.j(1, i.pW)
	}
	aFP.d.style.position = "absolute", aFP.d.style.textAlign = "center", aFP.d.placeholder = L(214), this.show = function() {
		aP.setState(0), m.n.setState(12), this.a90.show(), aGw[4].on(b2.color.xd(bX.dW.data[121].value)), this.resize(), document.body.appendChild(aFP.d);
		for (var a0 = 0; a0 < aGw.length; a0++) document.body.appendChild(aGw[a0].button);
		1 !== m.id || m.dt < 5 || (aGx && bT.dp > aGx + 144e5 ? m.t.setState(14) : aGx = bT.dp)
	}, this.pr = function() {
		this.a90.pr(), document.body.removeChild(aFP.d);
		for (var a0 = 0; a0 < aGw.length; a0++) document.body.removeChild(aGw[a0].button)
	}, this.resize = function() {
		this.a90.resize(), aGV.resize();
		var gap = .5 * bQ.gap,
			a62 = 10 / 99 * .84 * aGV.u,
			aH4 = .16 * aGV.iF,
			a37 = .19 * aGV.u,
			fg = aGV.fg + a37,
			a62 = aGV.fh + a62 + 3 * gap,
			u = .5 * (aGV.u - gap) - a37,
			a37 = aGV.u - 2 * a37 - aH4 - gap,
			a37 = (b2.ku.pu(aFP.d, fg, a62, a37, aH4), b2.ku.pu(aGw[4].button, fg + a37 + gap, a62, aH4, aH4), .5 * (aGV.fh + aGV.iF - (a62 += aH4 + gap) - gap));
		b2.ku.pu(aGw[0].button, fg, a62, u, a37), b2.ku.pu(aGw[1].button, fg + u + gap, a62, u, a37), b2.ku.pu(aGw[2].button, fg, a62 + a37 + gap, u, a37), b2.ku.pu(aGw[3].button, fg + u + gap, a62 + a37 + gap, u, a37);
		b2.ku.pu(aGw[5].button, fg, a62 + a37 * 2 + gap * 2, u * 2 + gap, a37 / 3);
		for (var a0 = 0; a0 < aGw.length; a0++) aGw[a0].button.style.font = b2.ku.kz(0, b2.ku.xt(.065 * aGV.iF)), b2.ku.og(aGw[a0].button, 5);
		aFP.d.style.font = b2.ku.kz(0, b2.ku.xt(.08 * aGV.iF)), b2.ku.og(aFP.d, 5)
	}, this.kl = function() {
		if (aP.a7C(), aI.kl(), aD.kl(), bM.kl(), aR.pw()) {
			if (settings.displayWinCounter) {
				const size = Math.floor(aGV.u * 0.03);
				kv.font = b2.ku.kz(1, size);
				kv.fillStyle = "#ffffff";
				const text = "Win count: " + wins_counter;
				const textLength = kv.measureText(text).width;
				kv.textAlign = "left";
				kv.textBaseline = "middle";
				kv.fillText(text, kv.canvas.width - textLength - size / 2, size);
			};
			kv.imageSmoothingEnabled = !1;
			var il = aR.a7F("territorial.io"),
				lZ = .84 * aGV.u / il.width;
			kv.setTransform(lZ, 0, 0, lZ, aGV.fg + .08 * aGV.u, aGV.fh), aGv = aGv || b2.x6.yL(il, b2.x6.yR, [0, 0, 0]);
			for (var fg = -1; fg <= 1; fg += 2)
				for (var fh = -1; fh <= 1; fh += 2) kv.drawImage(aGv, fg, fh);
			kv.drawImage(il, 0, 0), kv.imageSmoothingEnabled = !0;
			var ga = aR.a7F("logo"),
				aH7 = .6666 * lZ * il.height / ga.height,
				ks = .5 * an.u,
				kt = aGV.fh + .5 * lZ * il.height - .5 * aH7 * ga.height;
			kv.setTransform(aH7, 0, 0, aH7, ks - .6 * lZ * il.width, kt), kv.drawImage(ga, 0, 0), kv.setTransform(aH7, 0, 0, aH7, ks + .6 * lZ * il.width - aH7 * ga.width, kt), kv.drawImage(ga, 0, 0), kv.setTransform(1, 0, 0, 1, 0, 0), kv
				.imageSmoothingEnabled = !0
		}
	}
}

function aF4() {
	var aF9, aH8, aH9, q2;

	function pm(a0) {
		i.j(8, i.pW, new pX(21, {
			pn: a0,
			po: 0,
			pp: 10
		}))
	}
	this.show = function() {
		aF9.show(), this.resize()
	}, this.pr = function() {
		aF9.pr()
	}, this.resize = function() {
		aF9.resize(), aH8.resize()
	}, this.wp = function(il) {
		2 === il && aF9.q7[0].ol()
	}, aH9 = [new l(L(215), function() {
		pm(1)
	}, 0, 0, 1), new l(L(216), function() {
		pm(2)
	}, 0, 0, 1), new l(L(217), function() {
		pm(0)
	}, 0, 0, 1), new l(L(218), function() {
		pm(3)
	}, 0, 0, 1)], q2 = [new l(L(13), function() {
		i.w0()
	})], aF9 = new q1(L(219), q2), aH8 = new ov(aH9, aF9.q6)
}

function a6G(title, oI, aHA) {
	var aF9, aGc;
	this.show = function() {
		aF9.show(), this.resize()
	}, this.pr = function() {
		aF9.pr()
	}, this.resize = function() {
		aF9.resize(), aGc.resize()
	}, this.wp = function(il) {
		2 === il && aF9.q7[0].ol()
	}, aHA = aHA || [new l(L(13), function() {
		i.w0()
	}, p.mU)], aF9 = new q1(title, aHA), aGc = new p7(aF9.q6, oI), b2.ku.textAlign(aF9.q6.style, 1)
}

function aGt(data) {
	var aF9, aHB, il, pO;

	function aHC(ge) {
		var ey = data.data.length;
		if (ey) {
			for (var po, max = min = parseInt(data.data[0][0]), a0 = 1; a0 < ey; a0++) var aHJ = parseInt(data.data[a0][0]),
				min = Math.min(aHJ, min),
				max = Math.max(aHJ, max);
			i.j(8, 0, new pX(21, {
				pn: data.pn,
				po: po = ge < 0 ? min + ge : max + 1,
				pp: po + Math.abs(ge)
			}))
		}
	}
	this.show = function() {
			aF9.show(), this.resize()
		}, this.pr = function() {
			aF9.pr()
		}, this.resize = function() {
			aF9.resize(), aHB.resize()
		}, this.wp = function(il) {
			2 === il && aF9.q7[0].ol()
		}, il = data.data.length ? 0 : 1, il = [new l(L(13), function() {
			i.w0()
		}), new l(L(220), function() {
			aHC(-10)
		}, il, 0, 1), new l(L(221), function() {
			aHC(10)
		}, il, 0, 1), new l(L(193), function() {
			i.j(11, 10, new aHD({
				pn: data.pn
			}))
		})], pO = [L(222), L(223), L(224), L(225), L(226), L(227), L(228), L(229)], aF9 = new q1(pO[data.pn], il),
		function() {
			var a0, f7 = {
					pI: []
				},
				pI = f7.pI,
				aHF = data.data,
				ey = aHF.length,
				lZ = [.1, .001, .001, 1, 100, 1, .01, 1][data.pn],
				yV = [1, 3, 3, 0, 0, 0, 2, 0][data.pn],
				pO = [
					[L(230), L(231) + " ↗", L(232)],
					[L(230), L(233), L(234), L(235) + " ↗"],
					[L(230), L(231) + " ↗", L(234)],
					[L(230), L(231) + " ↗", L(234)],
					[L(236), L(237), L(238) + " ↗", L(239) + " ↗", L(88)],
					[L(236), L(237), L(240) + " ↗", L(241) + " ↗", L(234)],
					[L(236), L(237), L(242) + " ↗", L(243) + " ↗", L(244)],
					[L(236), L(237), L(240) + " ↗", L(241) + " ↗", L(234)]
				];
			if (f7.pO = pO[data.pn], f7.pS = [
					[25, 40, 35],
					[15, 25, 25, 35],
					[25, 40, 35],
					[25, 40, 35],
					[12, 16, 30, 30, 12],
					[12, 16, 30, 30, 12],
					[12, 16, 30, 30, 12],
					[12, 16, 30, 30, 12]
				][data.pn], 0 === data.pn)
				for (a0 = 0; a0 < ey; a0++) pI.push([{
					ds: aHF[a0][0] + 1 + ".",
					dq: 0
				}, {
					ds: aHF[a0][1],
					dq: 1,
					pU: aHF[a0][4],
					pV: aHF[a0][3]
				}, {
					ds: (lZ * aHF[a0][2]).toFixed(yV),
					dq: 0
				}]);
			else if (1 === data.pn)
				for (a0 = 0; a0 < ey; a0++) pI.push([{
					ds: aHF[a0][0] + 1 + ".",
					dq: 0
				}, {
					ds: aHF[a0][1],
					dq: 0
				}, {
					ds: (lZ * aHF[a0][2]).toFixed(yV),
					dq: 0
				}, {
					ds: aHF[a0][3],
					dq: 1,
					pU: aHF[a0][5],
					pV: aHF[a0][4]
				}]);
			else if (2 === data.pn || 3 === data.pn)
				for (a0 = 0; a0 < ey; a0++) pI.push([{
					ds: aHF[a0][0] + 1 + ".",
					dq: 0
				}, {
					ds: aHF[a0][1],
					dq: 1,
					pU: aHF[a0][4],
					pV: aHF[a0][3]
				}, {
					ds: (lZ * aHF[a0][2]).toFixed(yV),
					dq: 0
				}]);
			else if (4 === data.pn || 5 === data.pn || 6 === data.pn || 7 === data.pn)
				for (a0 = 0; a0 < ey; a0++) {
					var aHI = aHF[a0][5];
					4 === data.pn ? "100%" === (aHI = (aHI % 64 * 100 / (aHI >> 6)).toFixed(0) + "%") && (aHI += " (Elo Deducted)") : 5 === data.pn ? 32768 <= aHI && (aHI = -(aHI - 32768)) : aHI = (lZ * aHI).toFixed(yV), pI.push([{
						ds: "" + aHF[a0][0],
						dq: 0
					}, {
						ds: "" + aHF[a0][6],
						dq: 0
					}, {
						ds: aHF[a0][7],
						dq: 1,
						pU: aHF[a0][1],
						pV: aHF[a0][2]
					}, {
						ds: aHF[a0][8],
						dq: 1,
						pU: aHF[a0][3],
						pV: aHF[a0][4]
					}, {
						ds: "" + aHI,
						dq: 0
					}])
				}
			aHB = new pH(aF9.q6, f7)
		}()
}

function aHD(yN) {
	var aF9, aFA, oQ;
	this.show = function() {
		aF9.show(), this.resize()
	}, this.pr = function() {
		aF9.pr()
	}, this.resize = function() {
		aF9.resize(), aFA.resize()
	}, this.wp = function(il) {
		2 === il && aF9.q7[0].ol()
	}, aF9 = new q1(L(245), [new l(L(13), function() {
		i.aF7(10)
	})]), aFA = new oO(aF9.q6, ((oQ = []).push(function() {
		var aFV, aFO = new oA,
			aGT = new pD(bX.dW.data[132], 1, function() {
				aFV.button.click()
			}),
			aGU = new pD(bX.dW.data[131], 1, function() {
				aGT.d.focus()
			});
		aFO.oD(L(198)), aFO.oM(aGU), aGU.d.style.marginBottom = "0.8em", aFO.oD(L(199)), aFO.oM(aGT);
		return aFV = new l(L(197), function() {
			po = Math.floor(aGU.d.value), pp = Math.floor(aGT.d.value);
			var pp, po = {
				xN: Math.min(po, pp),
				aET: Math.max(po, pp)
			};
			i.j(8, i.aF8(10).aEs, new pX(21, {
				pn: yN.pn,
				po: po.xN,
				pp: po.aET
			}))
		}, 0, 0, 1), aFO.oM(new pA([aFV.button])), aFO
	}()), oQ.push(function() {
		var aFV, aFO = new oA,
			aGT = new pD(bX.dW.data[134], 1, function() {
				aFV.button.click()
			}),
			aGU = new pD(bX.dW.data[133], 0, function() {
				aGT.d.focus()
			});
		return aFO.oD(1 === yN.pn ? L(246) : L(247)), aFO.oM(aGU), aGU.d.style.marginBottom = "0.8em", aFO.oD(L(248)), aFO.oM(aGT), aFV = new l(L(197), function() {
			var aGm = aGU.d.value.slice(0, 20),
				aGn = Math.abs(Math.floor(aGT.d.value));
			i.j(8, i.aF8(10).aEs, new pX(22, {
				pn: yN.pn,
				aGm: aGm,
				aGn: aGn
			}))
		}, 0, 0, 1), aFO.oM(new pA([aFV.button])), aFO
	}()), oQ.push(function() {
		var aFV, aFO = new oA,
			aGT = new pD(bX.dW.data[152], 1, function() {
				aFV.button.click()
			}),
			aGU = new pD(bX.dW.data[151], 0, function() {
				aGT.d.focus()
			});
		return aFO.oD(L(249)), aFO.oM(aGU), aGU.d.style.marginBottom = "0.8em", aFO.oD(L(248)), aFO.oM(aGT), aFV = new l(L(197), function() {
			var aGm = aGU.d.value.slice(0, 5),
				aGn = Math.abs(Math.floor(aGT.d.value));
			i.j(8, i.aF8(10).aEs, new pX(28, {
				pn: yN.pn,
				aGm: aGm,
				aGn: aGn
			}))
		}, 0, 0, 1), aFO.oM(new pA([aFV.button])), aFO
	}()), oQ))
}

function aEy() {
	var aF9, aFA, oQ;
	this.show = function() {
		aF9.show(), this.resize()
	}, this.pr = function() {
		aF9.pr()
	}, this.resize = function() {
		aF9.resize(), aFA.resize()
	}, this.wp = function(il) {
		2 === il && aF9.q7[0].ol()
	}, aF9 = new q1(L(250), [new l(L(13), function() {
		i.j(7, i.aF8(7).aEs)
	}), new l(L(162), function() {
		bX.p5.p6(105, b6.pZ.rQ(aFA.oR[0].oB[0].d.value, 5)), bX.p5.p6(106, b6.pZ.rQ(aFA.oR[1].oB[0].d.value, 8)), i.j(8, i.aF8(7).aEs, new pX(18))
	})]), aFA = new oO(aF9.q6, ((oQ = []).push(function() {
		var aFO = new oA;
		return aFO.oD(L(143)), aFO.oM(new pD({
			title: "AccountName",
			value: "",
			kf: -1
		})), aFO
	}()), oQ.push(function() {
		var aFO = new oA,
			aFY = (aFO.oD(L(145)), new pD({
				title: "Password",
				value: "",
				kf: -1
			}));
		return aFY.d.type = "password", aFO.oM(aFY), aFO.oM(new pA([new l(L(146), function(d) {
			return d.innerText === L(146) ? (d.innerText = L(147), aFY.d.type = "text") : (d.innerText = L(146), aFY.d.type = "password"), !0
		}).button])), aFO
	}()), oQ))
}

function aF5() {
	var aF9, aH8, aH9, q2;

	function pm(a0) {
		i.j(8, i.pW, new pX(21, {
			pn: a0,
			po: 0,
			pp: 10
		}))
	}
	this.show = function() {
		aF9.show(), this.resize()
	}, this.pr = function() {
		aF9.pr()
	}, this.resize = function() {
		aF9.resize(), aH8.resize()
	}, this.wp = function(il) {
		2 === il && aF9.q7[0].ol()
	}, aH9 = [new l(L(226), function() {
		pm(4)
	}, 0, 0, 1), new l(L(227), function() {
		pm(5)
	}, 0, 0, 1), new l(L(228), function() {
		pm(6)
	}, 0, 0, 1), new l(L(229), function() {
		pm(7)
	}, 0, 0, 1)], q2 = [new l(L(13), function() {
		i.w0()
	})], aF9 = new q1(L(251), q2), aH8 = new ov(aH9, aF9.q6)
}

function aEo() {
	this.dW = {}, this.pq = ["", "", ""], this.aF3 = null, this.aF0 = null, this.w3 = function() {
		i.j(5, 5)
	}, this.aH0 = function() {
		i.qy(), aQ.dE()
	}, this.aGz = function() {
		i.qy(), aO.a6q(bX.dW.data[10].value), aO.dE()
	}, this.a5w = function() {
		i.j(0 === aP.vt() ? 5 : 0)
	}, this.aGS = function() {
		if (1 === bX.dW.data[130].value) i.j(8, i.a8z().aEs, new pX(24, {
			aG1: bX.dW.data[125].value,
			po: bX.dW.data[128].value,
			pp: bX.dW.data[129].value
		}));
		else {
			for (var e6 = (e6 = bX.dW.data[126].value.split(",")).slice(0, 10), a0 = 0; a0 < e6.length; a0++) e6[a0] = e6[a0].trim().slice(0, 7).toUpperCase();
			1 === e6.length && 0 === e6[0].length && (e6 = []), i.j(8, i.a8z().aEs, new pX(23, {
				aG1: bX.dW.data[125].value,
				vM: e6
			}))
		}
	}, this.aH1 = function(aEs, target) {
		i.j(4, aEs, new k("Data Usage Information",
			"Do you want your username and other data to be remembered for the next session?<br>The app might not function correctly if you decline data usage.<br>Please read our privacy policy for more information: <a href='" + bA.aHO +
			"' target='_blank'>" + bA.aHO + "</a>", !1, [new l(L(13), function() {
				i.j(aEs)
			}), new l("✅ Accept", function() {
				bX.p5.p6(140, 1), 0 === target ? i.j(2, aEs) : i.j(8, aEs, new pX(target))
			})]))
	}, this.aHP = function() {
		for (var a0 = 0; a0 < 3; a0++) this.pq[a0] = b6.rJ.rL(b7.nb(5));
		this.pq[1] = "[" + this.pq[1] + "]", 5 === i.pW && i.a8z().a90.p6(this.pq)
	}
}

function k(title, oI, aHQ, aHA) {
	var aF9, aGc;
	this.show = function() {
		aF9.show(), this.resize()
	}, this.pr = function() {
		aF9.pr()
	}, this.resize = function() {
		aF9.resize(), aGc.resize()
	}, this.wp = function(il) {
		2 === il && aF9.q7[0].ol()
	}, aHA = aHA || [new l(L(13), function() {
		i.w0()
	}, p.mU)], aF9 = new q1(title, aHA), aGc = new p7(aF9.q6, oI), aHQ && b2.ku.textAlign(aF9.q6.style, 1)
}

function aEw() {
	var aF9, qI;

	function aHR() {
		bK.dY.hideCMPButton(), i.j(0);
		var oE = b1.aHX(qI.qN());
		(0 < oE.length && oE === b1.np.aHU || b1.aHZ.rb(oE)) && b1.aHY()
	}
	this.show = function(aHS) {
		this.aHT(aHS), aF9.show(), this.resize()
	}, this.aHT = function(aHS) {
		0 === a2.uZ ? (aHS = aHS || qI.qN(), qI.qL(aHS)) : (a2.fk || (b1.np.aHU = b1.aHV.u6()), qI.qL(b1.aHW(b1.np.aHU)))
	}, this.pr = function() {
		aF9.pr()
	}, this.resize = function() {
		aF9.resize(), qI.resize()
	}, this.wp = function(il) {
		2 === il ? aF9.q7[0].ol() : aHR()
	}, aF9 = new q1(L(252), [new l(L(13), function() {
		i.w0()
	}), new l(L(253), function() {
		qI.qO()
	}), new l(L(254), function() {
		qI.qP()
	}), new l(L(255), function() {
		qI.clear()
	}), new l(L(256), function() {
		aHR()
	})]), qI = new qH("replayData", L(257)), aF9.q6.appendChild(qI.qJ)
}

function aEv() {
	var aF9, aFA, oQ, a5s, aFO;

	function aHa() {
		var dp;
		a5s !== bX.dW.data[12].value ? (az.dE(), az.a5r(), dp = bT.dp, i.j(4, 1, new k(L(260), L(261), !1, [new l(L(262), function() {
			i.j(1)
		}), new l("🔄 Reload", function() {
			bT.dp < dp + 1500 || m.n.o()
		}, p.q)]))) : i.j(1)
	}
	this.show = function() {
			a5s = bX.dW.data[12].value, aF9.show(), this.resize()
		}, this.pr = function() {
			aF9.pr()
		}, this.resize = function() {
			aF9.resize(), aFA.resize()
		}, this.wp = function(il) {
			2 === il && aF9.q7[0].ol()
		}, aF9 = new q1(L(258), [new l(L(13), aHa), new l(L(259), function() {
			i.qy(), bX.p5.r0(), i.j(2)
		})]), oQ = [], (aFO = new oA).oD(L(263)), aFO.oF(L(264)), oQ.push(aFO),
		function(oQ) {
			var aFO = new oA,
				e6 = (aFO.oD(L(282)), az.data.a5x());
			aFO.oJ(new px({
				q0: e6,
				value: az.data.a60(e6)
			}, function(kf) {
				return bX.p5.p6(12, e6[kf].split(":")[0]), !0
			})), oQ.push(aFO)
		}(oQ), (aFO = new oA).oD(L(265)), bX.dW.data[10].q0 = [L(265) + " 1", L(266) + " 1", L(265) + " 2", L(266) + " 2"], aFO.oJ(new px(bX.dW.data[10])), oQ.push(aFO), (aFO = new oA).oD(L(267)), bX.dW.data[1].q0 = [L(268), L(269), L(270), L(271)],
		aFO.oJ(new px(bX.dW.data[1])), oQ.push(aFO), (aFO = new oA).oD(L(272)), bX.dW.data[9].q0 = [L(269), L(273), L(274)], aFO.oJ(new px(bX.dW.data[9])), oQ.push(aFO), (aFO = new oA).oD(L(275)), bX.dW.data[11].q0 = [L(276), L(2), L(277)], aFO.oJ(
			new px(bX.dW.data[11])), oQ.push(aFO), (aFO = new oA).oD(L(278)), aFO.oM(new p3(bX.dW.data[2])), oQ.push(aFO), (aFO = new oA).oD(L(279)), aFO.oM(new p3(bX.dW.data[7])), oQ.push(aFO), (aFO = new oA).oD(L(280)), aFO.oM(new p3(bX.dW.data[
			8])), oQ.push(aFO), (aFO = new oA).oD(L(281)), aFO.oM(new pD(bX.dW.data[5])), oQ.push(aFO), aFA = new oO(aF9.q6, oQ)
}

function aEu() {
	var aF9, aH8, aH9, q2;

	function aHc(id) {
		0 !== m.id || bX.dW.data[140].value ? 0 === id ? i.j(8, 1, new pX(16)) : i.j(2) : i.k9.aH1(i.pW, 0 === id ? 16 : 0)
	}
	this.show = function() {
		m.n.setState(12), aF9.show(), this.resize(), this.hb()
	}, this.pr = function() {
		aF9.pr()
	}, this.resize = function() {
		aF9.resize(), aH8.resize()
	}, this.hb = function() {
		8 === aP.vt() && (2 <= bR.aHh ? aH9[2].om === p.m6 && aH9[2].on(0) : aH9[2].om !== p.m6 && aH9[2].on(p.m6), !a2.fk && aB.a05(a2.et) ? aH9[1].om === p.m6 && aH9[1].on(0) : aH9[1].om !== p.m6 && aH9[1].on(p.m6), !a2.fk && al.o9(a2.et) ?
			aH9[0].om === p.m6 && aH9[0].on(0) : aH9[0].om !== p.m6 && aH9[0].on(p.m6))
	}, this.wp = function(il) {
		2 === il && aF9.q7[0].ol()
	}, aH9 = [new l(L(283), function() {
		aHc(0)
	}), new l(L(219), function() {
		i.j(16)
	}), new l(L(251), function() {
		i.j(17)
	}), new l(L(284), function() {
		i.k9.aGS()
	}, 0, 0, 1), new l(L(252), function() {
		i.j(3, 1, "")
	}), new l(L(285), function() {
		i.j(18)
	}), new l(L(258), function() {
		aHc(1)
	}), new l(L(286), function() {
		i.j(4, 1, new k(L(286), b2.ku.xu([L(295), L(296), "Discord", L(297), L(215), L(298), L(84), L(299), L(300), L(301)], [bA.a6D, bA.vo, bA.a6E, bA.aHi, bA.aHj, bA.vW, bA.aHk, bA.aHl, bA.aHm, bA.aHO]), !1, [new l(L(13), function() {
			i.j(1)
		}, p.mU)]))
	}), new l(L(287), function() {
		i.j(4, 1, new k(L(287), dQ + "<br><a href='" + bA.aHi + "' target='_blank'>" + bA.aHi + "</a>" +
			"<br><br><b>" + "FX Client v" + fx_version + " " + fx_update + "<br><a href='https://discord.gg/dyxcwdNKwK' target='_blank'>FX Client Discord server</a>" +
			"<br><a href='https://github.com/fxclient/FXclient' target='_blank'>Github repository</a></b>", !0, [new l(L(13), function() {
				i.j(1)
			}, p.mU)]))
	}), new l(L(288), function() {
		i.j(4, 1, new k(L(288), L(302), !1, [new l(L(13), function() {
			i.j(1)
		}), new l(L(303), function() {
			m.n.vf(), i.j(1)
		})]))
	}), new l(L(289), function() {
		m.n.vg(), i.j(4, 1, new k(L(304), L(305) + "<a href='" + bA.aHO + "' target='_blank'>" + bA.aHO + "</a>", !1, [new l(L(13), function() {
			i.j(1)
		}, p.mU)]))
	})], q2 = [new l(L(262), function() {
		i.k9.a5w()
	})], 8 === aP.vt() && (aH9.unshift(new l(L(292), function() {
		2 <= bR.aHh && (i.qy(), bS.ws(), bT.dL = !0)
	}, 0, 1)), aH9.unshift(new l(L(293), function() {
		!a2.fk && aB.a05(a2.et) && (b0.g1.nH(), i.qy(), aB.fl) && aB.ws()
	}, 0, 1)), aH9.unshift(new l(L(294), function() {
		!a2.fk && al.o9(a2.et) && (b0.g1.nJ(), i.qy(), aB.fl) && aB.ws()
	}, 0, 1))), 1 === m.id && 5 <= m.dt && aH9.push(new l(L(290), function() {
		m.n.vh()
	})), aF9 = new q1(L(291), q2), aH8 = new ov(aH9, aF9.q6)
}

function aF6() {
	var aF9, aFA, oQ;
	this.show = function() {
		aF9.show(), this.resize()
	}, this.pr = function() {
		aF9.pr()
	}, this.resize = function() {
		aF9.resize(), aFA.resize()
	}, this.wp = function(il) {
		2 === il && aF9.q7[0].ol()
	}, aF9 = new q1(L(285), [new l(L(13), function() {
		i.w0()
	})]), aFA = new oO(aF9.q6, ((oQ = []).push(function() {
		function aFS() {
			aHr.button.innerText = L(140), aHp.d.readOnly = !1, aHq.d.readOnly = !1, aFR.on(1), aFR.button.style.color = p.lv
		}
		var aFO = new oA,
			aHo = (aFO.oD(L(306)), new pD({
				title: bX.dW.data[105].value,
				value: bX.dW.data[105].value,
				kf: -1
			})),
			aHp = (aHo.d.readOnly = !0, aFO.oM(aHo), aFO.oD(L(307), "0.8em"), new pD(bX.dW.data[148])),
			aHp = new pD(bX.dW.data[148], 0, void 0, function(d) {
				aFQ(bX.dW.data[149].value, d.target.value)
			}),
			aHq = (aFO.oM(aHp), aFO.oD(L(244), "0.8em"), new pD(bX.dW.data[149], 1, void 0, function(d) {
				aFQ(d.target.value, bX.dW.data[148].value)
			})),
			aHr = (aFO.oM(aHq), new l(L(140), function(d) {
				return d.innerText === L(140) ? (d.innerText = L(141), aHp.d.readOnly = !0, aHq.d.readOnly = !0, aFR.on(0), aFR.button.style.color = p.mg, bX.p5.p6(149, aHq.d.value), aFQ(bX.dW.data[149].value, bX.dW.data[148]
					.value)) : aFS(), !0
			})),
			aFR = (aFO.oM(new pA([aHr.button])), new l(L(139), function(d) {
				return aHp.d.readOnly && aq.k9.a6o(0) && (b2.ku.xz(d), aFS(), aq.aFT.aFU({
					pY: 0,
					pU: bX.dW.data[148].value,
					pV: 0,
					value: bB.o6(Math.floor(100 * bX.dW.data[149].value), 0, 4294967295)
				})), !0
			}, 1)),
			oG = (aFO.oM(new pA([aFR.button])), aFO.oF()),
			aFQ = function(ds, oE) {
				ds = isNaN(ds) ? 0 : Number(ds);
				var ds = Math.max(ds, (bX.dW.data[150].value + 1) / 100),
					aFX = Math.floor(100 * Math.max(1e-4 * ds, bX.dW.data[150].value / 100)) / 100;
				oG.textContent = L(142, [ds.toFixed(2), bX.dW.data[105].value, aFX.toFixed(2), oE, (ds - aFX).toFixed(2)])
			};
		return aFQ(bX.dW.data[149].value, bX.dW.data[148].value), aFO
	}()), oQ))
}

function bd() {
	"function" != typeof Math.log2 && (Math.log2 = function(fg) {
		return Math.log(fg) / Math.log(2)
	}), "function" != typeof Math.log10 && (Math.log10 = function(fg) {
		return Math.log(fg) / Math.log(10)
	}), "function" != typeof Math.sign && (Math.sign = function(fg) {
		return 0 < fg ? 1 : fg < 0 ? -1 : 0
	})
}

function cN() {
	var a3K, aHt, aHu, aHv, aHs = !1;

	function aHw() {
		aHs = !0, a3K = -1, aHt = new Array(4);
		for (var a0 = 3; 0 <= a0; a0--) aHt[a0] = !1;
		var aHx = Math.floor(1 + .02 * an.min);
		aHu = new Array(4), (aHv = new Array(4))[1] = aHv[3] = aHu[0] = aHu[2] = 0, aHv[0] = aHu[3] = -aHx, aHu[1] = aHv[2] = aHx
	}

	function aHy() {
		if (-1 !== a3K)
			if (0 !== a2.uZ && a7.le()) {
				for (var aHz = !1, a0 = 3; 0 <= a0; a0--) aHt[a0] && (aHz = !0, h7 += aHu[a0], h9 += aHv[a0], aW.wF(aHu[a0], aHv[a0]), aH.a33());
				aHz ? bT.dL = !0 : ae.lV()
			} else ae.lV()
	}
	this.wm = function(kf) {
		0 !== a2.uZ && a7.le() && (aHs || aHw(), aHt[kf] = !0, -1 === a3K) && (a3K = setInterval(aHy, 20), aHy())
	}, this.wq = function(kf) {
		if (0 !== a2.uZ && (aHs || aHw(), aHt[kf] = !1, -1 !== a3K)) {
			for (var aHz = !1, a0 = 3; 0 <= a0; a0--) aHz = aHz || aHt[a0];
			aHz || this.lV()
		}
	}, this.lV = function() {
		if (aHs && -1 !== a3K) {
			for (var a0 = 3; 0 <= a0; a0--) aHt[a0] = !1;
			clearInterval(a3K), a3K = -1
		}
	}
}

function cO() {
	this.k9 = new aI0, this.kD = new aI1, this.mw = new aI2, this.a6v = new aI3, this.a5t = new aI4, this.aFT = new aI5, this.na = new aI6, this.aGj = new aI7, this.a0p = new aI8, this.aI9 = new aIA, this.aIB = new aIC, this.aID = new aIE, this.aIF =
		new aIG, this.dE = function() {
			this.k9.dE()
		}
}

function aI0() {
	var aIH, aIJ;
	this.a7N = 5, this.a7O = this.a7N - 1, this.a6t = this.a7N + this.a7O, this.a6s = [0, 1, 5, 2, 6, 3, 7, 4, 8], this.aII = null;

	function df(a0) {
		return aIJ[a0].aHs && aIH[a0].df()
	}

	function aIR(vq) {
		aIJ[vq].dp = bT.dp, aIJ[vq].aIL = !1
	}
	this.vw = 0, this.vv = 0, this.dE = function() {
		this.aII = new Array(this.a7N);
		this.aII[0] = "territorial.io";
		var a0, aCx = ao.aDG(0);
		for (ao.z4(0), a0 = 1; a0 < this.a7N; a0++) this.aII[a0] = a9.uC() + ".territorial.io";
		for (ao.z4(aCx), aIH = new Array(this.a6t), aIJ = new Array(this.a6t), a0 = this.a6t - 1; 0 <= a0; a0--) aIJ[a0] = {
			aHs: !1,
			dp: 0,
			aIL: !1
		};
		this.a6u(0, 0)
	}, this.aIM = function(a0) {
		return aIH[a0]
	}, this.aIN = function() {
		return this.vv < this.a7N ? this.vv : this.vv - this.a7O
	}, this.hb = function() {
		for (var a0 = this.a6t - 1; 0 <= a0; a0--) this.a6o(a0) && bT.dp > aIJ[a0].dp + 15e3 && aq.mw.aIO(a0, aIJ[a0].aIL);
		!this.a6o(0) && bT.dp > aIJ[0].dp + 8e3 && (aIJ[0].dp = bT.dp, this.a6u(0, 0))
	}, this.a6u = function(vq, aEs) {
		if (aIJ[vq].aHs) {
			if (aIH[vq].df()) return aIH[vq].aIQ(aEs), aIH[vq].a6o();
			aIH[vq].pr()
		}
		return this.aIP(vq, aEs), !1
	}, this.aIP = function(vq, aEs) {
		aIJ[vq].aHs = !0, aIR(vq), aIH[vq] = new aIS, aIH[vq].dE(vq, aEs)
	}, this.aIQ = function(vq, aEs) {
		df(vq) && aIH[vq].aIQ(aEs)
	}, this.aIT = function(vq, aEs) {
		aq.a5t.aIU(vq)
	}, this.a6o = function(a0) {
		return aIJ[a0].aHs && aIH[a0].a6o()
	}, this.send = function(vq, a1) {
		aIR(vq), aIH[vq].send(a1)
	}, this.wW = function(vq) {
		8 === aP.vt() && (aIJ[vq].aIL = !0, aq.kD.j8 = !0)
	}, this.close = function(vq, aIV) {
		df(vq) && aIH[vq].close(aIV)
	}, this.aIW = function(vq, aIV) {
		g.w1(aIV), df(vq) && aIH[vq].close(aIV)
	}, this.w4 = function(aIV) {
		for (var a0 = this.a6t - 1; 0 <= a0; a0--) this.close(a0, aIV)
	}, this.aIX = function(vq, aIV) {
		for (var a0 = this.a6t - 1; 0 <= a0; a0--) a0 !== vq && this.close(a0, aIV)
	}, this.zD = function() {
		this.close(this.vw, 3246)
	}, this.aIY = function(vq, d) {
		aIH[vq].pr(), g.vp(vq, d.code)
	}
}

function aI1() {
	this.j8 = !1, this.hb = function() {
		bT.er() % 250 != 249 || a2.fk || (aq.a5t.aIZ(+(this.j8 && 0 < aX.kX[a2.et]), ir + bD.k9.nn), this.j8 = !1)
	}
}

function aI8() {
	this.aIb = function(vq, a1) {
		b7.dE(a1), 0 === b7.size ? aq.k9.aIW(vq, 3205) : ((0 === b7.nb(1) ? function(vq) {
			var aIf = b7.nb(6);
			0 === aIf ? function(vq) {
				if (0 === vq && 8 !== aP.vt()) {
					i.k9.aHP();
					for (var aIp = b7.nb(12), aIq = b7.nb(6), e6 = new Array(aIp), a0 = 0; a0 < aIp; a0++) e6[a0] = b7.nb(aIq);
					aI.a3R(e6)
				}
			}(vq) : 2 === aIf ? aq.aI9.aIh(vq) : 3 === aIf || 4 === aIf ? am.dE() : 5 !== aIf && 6 !== aIf && 7 !== aIf && 8 !== aIf && (9 === aIf ? aq.aIB.aIi(vq) : 10 === aIf ? aq.aID.aIj() : 11 === aIf ? aq.aIB.aIk() : 12 ===
				aIf ? aq.aID.aIl() : 13 === aIf ? aq.aIF.aIm() : 14 === aIf ? aq.aIF.aIn() : 15 === aIf && aq.aIB.aIo())
		} : function(vq) {
			if (8 !== aP.vt() && !am.a7P()) return;
			if (vq !== aq.k9.vw) aq.k9.aIW(vq, 3244);
			else if (0 === b7.nb(1)) bT.ui.aIw(b7.a1);
			else {
				var a0, vq = b7.nb(2);
				if (0 === vq) {
					var nB, mw = b7.nb(9);
					0 !== aX.kX[mw] && 0 !== aX.kX[a2.et] && (nB = b7.nb(10), aC.nA(mw, a2.et, nB), aW.o7(mw, 1, nB))
				} else if (1 === vq) ! function() {
					var mw = b7.nb(9);
					0 !== aX.kX[mw] && 0 !== aX.kX[a2.et] && aw.aCi(0, [mw], !0) && aC.nT(mw, 1)
				}();
				else if (2 === vq) ! function() {
					var mw = b7.nb(9),
						target = b7.nb(9);
					0 !== aX.kX[mw] && 0 !== aX.kX[target] && 0 !== aX.kX[a2.et] && aw.aCi(1, [mw], !0) && (aW.o7(mw, 3, 96), aW.o7(target, 4, 96), aC.a0w(mw, target))
				}();
				else if (y && !z) {
					var ey = 540;
					for (b4.w(17287), b4.x(1, 0), b4.x(6, 10), ey = Math.min(b0.mt.nd.length, 540), a0 = 0; a0 < ey; a0++) b4.aJ2(32, b0.mt.nd[a0]);
					aq.k9.send(aq.k9.vw, b4.a1)
				}
			}
		})(vq), bT.aIe())
	}, this.a7Q = function(a1) {
		if (b7.dE(a1), b7.kf = 1, 3 === b7.nb(6)) {
			b7.kf += 20;
			for (var a8d, a8c, name, a1 = b7.nb(9), yx = b7.nb(14), yz = b7.nb(4), a84 = 1 === b7.nb(1), a85 = b7.nb(6), a86 = b7.nb(14), aIv = b7.nb(9) + 1, t1 = [], a0 = 0; a0 < aIv; a0++) a8d = b7.nb(1), a8c = [b7.nb(6), b7.nb(6), b7.nb(6)],
				name = b6.rJ.rL(b7.nb(5)), t1.push({
					name: name,
					a8c: a8c,
					a8d: a8d
				});
			aP.a78(), bI.w(a85, a86), 1 === t1.length && aQ.a8T(yz), a2.yw(yx, a1, t1, yz, a84, !1)
		} else ! function() {
			b7.kf += 20;
			for (var a8d, a8c, t5, name, a7H = b7.nb(1), yx = b7.nb(14), yz = b7.nb(4), a84 = 1 === b7.nb(1), a85 = b7.nb(6), a86 = b7.nb(14), t1 = [], a0 = 0; a0 < 2; a0++) a8d = b7.nb(1), a8c = [b7.nb(6), b7.nb(6), b7.nb(6)], t5 = b7.nb(
				14), name = b6.rJ.rL(b7.nb(5)), t1.push({
					name: name,
					a8c: a8c,
					t5: t5,
					a8d: a8d
				});
			aP.a78(), bI.w(a85, a86), a2.yw(yx, a7H, t1, yz, a84, !1)
		}()
	}, this.a7L = function() {
		b7.kf = 1;
		var aIf = b7.nb(6),
			aIt = b7.nb(10);
		return aq.k9.vv > aq.k9.a7O && (aIt += aq.k9.a7O), aq.k9.vv === aIt ? (aq.k9.vw = aIt, !1) : (aq.k9.close(aq.k9.vv, 3247), aq.k9.vw = aIt, am.a7G = b7.nb(10), am.a7H = b7.nb(3 === aIf ? 9 : 1), aq.k9.a6u(aIt, 5) && aq.mw.aIu(), !0)
	}
}

function aIE() {
	this.aIj = function() {
		bX.k9.qq(), bX.p5.p6(105, b5.pZ.pa(b5.pZ.pb(5))), bX.p5.p6(106, b5.pZ.pa(b5.pZ.pb(8))), bX.p5.p6(109, b7.nb(30)), bX.p5.p6(108, bX.dW.data[109].value), bX.p5.p6(111, bX.dW.data[109].value + 1), bX.p5.p6(107, 0), bX.p5.p6(110, "")
	}, this.aIl = function() {
		var aJ5, aJ6, aJ7, aJ4;
		b7.size < b4.aJ3(21) ? aq.k9.aIW(0, 3254) : (aJ4 = b7.nb(5), aJ5 = b7.nb(3), aJ6 = b7.nb(3), aJ7 = b7.nb(3), b7.aJ8(189 + 16 * (aJ4 + aJ5 + aJ6 + aJ7) + 32 + 32 + 30 + 128 + 32 + 30 + 10 + 32) ? (aJ4 = {
			pV: b7.nb(30),
			r4: b7.nb(16),
			r5: b7.nb(30),
			r6: b7.nb(30),
			r7: b7.nb(30),
			r8: b7.aJ9(32),
			username: b6.rJ.rL(aJ4),
			r9: b6.rJ.rL(aJ5),
			rA: b6.rJ.rL(aJ6),
			rB: b7.aJ9(32),
			rC: b7.aJ9(32),
			rD: b7.nb(30),
			rE: b7.aJ9(32),
			rF: b7.aJ9(32),
			rG: b7.aJ9(32),
			rH: b7.aJ9(32),
			aFd: b7.aJ9(32),
			aFe: b7.aJ9(30),
			aFW: b7.aJ9(10),
			aFh: b7.aJ9(32),
			aFi: b6.rJ.rL(aJ7)
		}, bX.p5.p6(150, aJ4.aFW), 8 === i.pW && (25 === i.a8z().aGe ? (aJ4.aFB = !0, i.k9.aF3 = aJ4, i.a8z().aGs(25, !1)) : (aJ4.aFB = !1, aJ4.pU = bX.dW.data[105].value, i.k9.aF0 = aJ4, bX.p5.r3(aJ4), i.a8z().aGs(16, !0)))) : aq.k9.aIW(
			0, 3267))
	}
}

function aIG() {
	this.aIm = function() {
		var a0;
		if (b7.size < b4.aJ3(39)) aq.k9.aIW(0, 3259);
		else {
			var pn = b7.nb(6),
				ey = b7.nb(10),
				gH = b7.nb(16);
			if (b7.aJ8(39 + 16 * gH + ey * (0 === pn ? 111 : 1 === pn ? 101 : 2 === pn || 3 === pn ? 127 : 212))) {
				var data = [];
				if (0 === pn)
					for (a0 = 0; a0 < ey; a0++) data.push([b7.nb(30), b6.rJ.rL(b7.nb(5)), b7.nb(16), b7.nb(30), b7.nb(30)]);
				else if (1 === pn)
					for (a0 = 0; a0 < ey; a0++) data.push([b7.nb(16), b6.rJ.rL(b7.nb(3)), b7.nb(16), b6.rJ.rL(b7.nb(5)), b7.nb(31), b7.nb(30)]);
				else if (2 === pn || 3 === pn)
					for (a0 = 0; a0 < ey; a0++) data.push([b7.nb(30), b6.rJ.rL(b7.nb(5)), b7.aJ9(32), b7.nb(30), b7.nb(30)]);
				else
					for (a0 = 0; a0 < ey; a0++) data.push([b7.nb(20), b7.nb(30), b7.nb(30), b7.nb(30), b7.nb(30), b7.aJ9(32), b7.nb(30), b6.rJ.rL(b7.nb(5)), b6.rJ.rL(b7.nb(5))]);
				8 === i.pW && i.a8z().aGs(21, !0, {
					pn: pn,
					data: data
				})
			} else aq.k9.aIW(0, 3260)
		}
	}, this.aIn = function() {
		if (b7.size < b4.aJ3(29)) aq.k9.aIW(0, 3265);
		else {
			var aJA = b7.nb(4),
				aJB = b7.nb(7),
				aJC = b7.nb(11);
			if (b7.aJ8(29 + 16 * aJB + 16 * aJC + 11 * aJA)) {
				for (var data = [], a0 = 0; a0 < aJA; a0++) {
					for (var aJD = b6.rJ.rL(b7.nb(3)), aJE = b7.nb(8), aG2 = [], hz = 0; hz < aJE; hz++) aG2.push(b7.nb(16));
					data.push({
						name: "[" + aJD + "]",
						aG2: aG2
					})
				}
				8 === i.pW && i.a8z().aGs(23, !0, data)
			} else aq.k9.aIW(0, 3266)
		}
	}
}

function aIA() {
	this.aIh = function(vq) {
		var a0, a7h, aJF, aJG, aJH;
		if (vq !== aq.k9.vv) aq.k9.close(vq, 3239);
		else if (6 === aP.vt() && aj.dE(), 7 !== aP.vt()) aq.k9.close(vq, 3251);
		else {
			for (a7h = [0, 0, 0, 0], aJF = b7.nb(6), a0 = 0; a0 < 4; a0++) a7h[a0] = b7.nb(aJF);
			for (aJG = b7.nb(4), aJH = [], a0 = 0; a0 < aJG; a0++) {
				aJH.push({
					id: b7.nb(5),
					yz: b7.nb(4),
					a84: 1 === b7.nb(1),
					s9: b7.nb(6),
					a82: b7.nb(14),
					a87: b7.nb(aJF),
					a88: b7.nb(9) + 1,
					a73: b7.nb(10)
				});
				for (var a89 = b7.nb(3), a8A = new Array(a89), a8B = new Array(a89), hz = 0; hz < a89; hz++) a8B[hz] = b7.nb(9) + 1, a8A[hz] = b6.rJ.rL(b7.nb(3));
				aJH[a0].a89 = a89, aJH[a0].a8A = a8A, aJH[a0].a8B = a8B
			}
			aj.p6(a7h, aJH)
		}
	}
}

function aIC() {
	this.aIi = function(vq) {
		var aIy, aJI;
		b7.aJ8(70) ? (aIy = b7.nb(3), aJI = bW.aJJ.hb(b7.nb(30), b7.nb(30)), aq.a5t.aJK(vq, aJI, aIy), 0 < aIy || (0 === vq && 0 === bX.dW.data[105].value.length ? aq.a5t.aGh(0) : aq.aFT.aJL(vq), 4 === aq.k9.aIM(vq).aJM() ? 6 === aP.vt() && aq
			.a6v.a6w(vq) : 5 !== aq.k9.aIM(vq).aJM() || 8 !== aP.vt() && 10 !== aP.vt() || aq.mw.aIu())) : aq.k9.aIW(vq, 3269)
	}, this.aIk = function() {
		var id = b7.nb(6);
		0 === id ? (aI.a3N || aq.a5t.aGh(1), az.a5r(), 8 === i.pW && i.a8z().aGr()) : 21 === id ? 8 === i.pW && i.a8z().aGs(17) : 22 === id && (bX.p5.p6(106, bX.dW.data[110].value), bX.p5.p6(110, ""), 8 === i.pW) && i.a8z().aGs(16)
	}, this.aIo = function() {
		var ey = b7.nb(16),
			aJN = b7.nb(16);
		if (b7.aJ8(55 + 10 * ey + 16 * aJN)) {
			for (var e6 = [], a0 = 0; a0 < ey; a0++) e6.push(b6.rJ.rL(b7.nb(10)));
			az.a5v(e6)
		} else aq.k9.aIW(vq, 3270)
	}
}

function aI2() {
	this.aIO = function(vq, aIL) {
		b4.w(8), b4.x(1, 0), b4.x(6, 4), b4.x(1, aIL ? 1 : 0), aq.k9.send(vq, b4.a1)
	}, this.aIu = function() {
		b4.w(58), b4.x(1, 0), b4.x(6, 5), b4.x(8, aq.k9.aIN()), b4.x(10, am.a7G), b4.x(9, am.a7H), b4.x(10, dS), b4.x(14, e.dT), aq.k9.send(aq.k9.vw, b4.a1)
	}, this.mx = function(fv) {
		b4.w(27), b4.x(1, 1), b4.x(4, 0), b4.x(22, fv), aq.k9.send(aq.k9.vw, b4.a1)
	}, this.my = function(h6, hs) {
		b4.w(25), b4.x(1, 1), b4.x(4, 1), b4.x(10, h6), b4.x(10, hs), aq.k9.send(aq.k9.vw, b4.a1)
	}, this.n2 = function(h6, n0) {
		b4.w(24), b4.x(1, 1), b4.x(4, 2), b4.x(10, h6), b4.x(9, n0), aq.k9.send(aq.k9.vw, b4.a1)
	}, this.n3 = function(h6, fv) {
		b4.w(37), b4.x(1, 1), b4.x(4, 3), b4.x(10, h6), b4.x(22, fv), aq.k9.send(aq.k9.vw, b4.a1)
	}, this.n7 = function(n5, fv) {
		b4.w(37), b4.x(1, 1), b4.x(4, 4), b4.x(10, n5), b4.x(22, fv), aq.k9.send(aq.k9.vw, b4.a1)
	}, this.n9 = function(hs) {
		b4.w(15), b4.x(1, 1), b4.x(4, 5), b4.x(10, hs), aq.k9.send(aq.k9.vw, b4.a1)
	}, this.nD = function(kf) {
		b4.w(15), b4.x(1, 1), b4.x(4, 6), b4.x(10, kf), aq.k9.send(aq.k9.vw, b4.a1)
	}, this.nG = function(nF) {
		b4.w(6), b4.x(1, 1), b4.x(4, 7), b4.x(1, nF), aq.k9.send(aq.k9.vw, b4.a1)
	}, this.nI = function() {
		b4.w(5), b4.x(1, 1), b4.x(4, 8), aq.k9.send(aq.k9.vw, b4.a1)
	}, this.nR = function(aJO, aJP) {
		b4.w(24), b4.x(1, 1), b4.x(4, 15), b4.x(9, aJP), b4.x(10, aJO), aq.k9.send(aq.k9.vw, b4.a1)
	}, this.nU = function(a0p) {
		b4.w(14), b4.x(1, 1), b4.x(4, 14), b4.x(9, a0p), aq.k9.send(aq.k9.vw, b4.a1)
	}, this.nY = function(aJQ, target) {
		var a0, ey = aJQ.length;
		for (b4.w(14 + 9 * ey), b4.x(1, 1), b4.x(4, 13), b4.x(9, target), a0 = 0; a0 < ey; a0++) b4.x(9, aJQ[a0]);
		aq.k9.send(aq.k9.vw, b4.a1)
	}
}

function aI5() {
	this.aJS = function() {
		b4.w(39), b4.x(1, 0), b4.x(6, 16), aq.a5t.aJR(), aq.k9.send(0, b4.a1)
	}, this.aJL = function(vq) {
		b4.w(115), b4.x(1, 0), b4.x(6, 17), b6.pZ.rX(bX.dW.data[105].value, 5), b6.pZ.rX(bX.dW.data[106].value, 8), b4.x(30, bX.dW.data[109].value), aq.k9.send(vq, b4.a1)
	}, this.aGu = function() {
		b4.w(55), b4.x(1, 0), b4.x(6, 18), b6.pZ.rW(bX.dW.data[110].value), aq.k9.send(0, b4.a1)
	}, this.aGi = function(username) {
		b4.w(12 + 16 * username.length), b4.x(1, 0), b4.x(6, 20), aq.a5t.aJU(username), aq.k9.send(0, b4.a1)
	}, this.aFb = function(data) {
		b4.w(73), b4.x(1, 0), b4.x(6, 25), b4.x(6, data.pY), b6.pZ.rX(data.pU, 5), b4.x(30, data.pV), aq.k9.send(0, b4.a1)
	}, this.aFU = function(data) {
		b4.w(105), b4.x(1, 0), b4.x(6, 27), b4.x(6, data.pY), b6.pZ.rX(data.pU, 5), b4.x(30, data.pV), b4.aJ2(32, data.value), aq.k9.send(0, b4.a1)
	}
}

function aI6() {
	this.nZ = function() {
		var f5, ey = a2.iq,
			uR = bH.result.uR,
			aJV = uR.length,
			vE = (b4.w(40 + 16 * ey + aJV * (33 + 3 * (a2.jC < 7))), b4.x(1, 1), b4.x(4, 10), b4.x(10, aJV), b4.x(1, +(2 === a2.uW)), b4.x(24, bH.result.v1), aX.vE);
		for (a0 = 0; a0 < ey; a0++) b4.x(16, vE[a0]);
		var eq = aX.eq;
		for (a0 = 0; a0 < aJV; a0++) f5 = uR[a0], b4.x(9, f5), b4.x(24, eq[f5]);
		if (a2.jC < 7)
			for (var im = bU.im, uu = bU.uu, a0 = 0; a0 < aJV; a0++) b4.x(3, 7 & uu[im[uR[a0]]]);
		aq.k9.send(aq.k9.vw, b4.a1)
	}
}

function aI7() {
	this.aGk = function(pn, po, pp) {
		b4.w(75), b4.x(1, 0), b4.x(6, 21), b4.x(6, pn), b4.x(1, +(po < 0)), b4.x(1, +(pp < 0)), b4.x(30, Math.abs(po)), b4.x(30, Math.abs(pp)), aq.k9.send(0, b4.a1)
	}, this.aGl = function(pn, aGm, aGn) {
		b4.w(18 + 16 * aGm.length + 30), b4.x(1, 0), b4.x(6, 22), b4.x(6, pn), aq.a5t.aJU(aGm), b4.x(30, aGn), aq.k9.send(0, b4.a1)
	}, this.aGq = function(pn, aGm, aGn) {
		b4.w(73), b4.x(1, 0), b4.x(6, 28), b4.x(6, pn), b6.pZ.rX(aGm, 5), b4.x(30, aGn), aq.k9.send(0, b4.a1)
	}, this.aGo = function(aG1, vM) {
		for (var ey = vM.length, gH = 0, a0 = 0; a0 < ey; a0++) gH += vM[a0].length;
		for (b4.w(21 + 3 * ey + 16 * gH), b4.x(1, 0), b4.x(6, 23), b4.x(3, aG1), b4.x(4, ey), b4.x(7, gH), a0 = 0; a0 < ey; a0++) b4.x(3, vM[a0].length), b5.rJ.rW(vM[a0]);
		aq.k9.send(0, b4.a1)
	}, this.aGp = function(aG1, po, pp) {
		b4.w(52), b4.x(1, 0), b4.x(6, 24), b4.x(3, aG1), b4.x(1, +(po < 0)), b4.x(1, +(pp < 0)), b4.x(20, Math.abs(po)), b4.x(20, Math.abs(pp)), aq.k9.send(0, b4.a1)
	}
}

function aI3() {
	this.a6w = function(vq) {
		var username = bX.dW.data[122].value.slice(0, 20),
			username = (b4.w(22 + 16 * username.length + 18), b4.x(1, 0), b4.x(6, 1), b4.x(10, dS), aq.a5t.aJU(username), b2.color.xb(bX.k9.qx()));
		b4.x(6, username[0]), b4.x(6, username[1]), b4.x(6, username[2]), aq.k9.vv = vq, aq.k9.send(vq, b4.a1)
	}, this.a8G = function(a83) {
		return b4.w(11), b4.x(1, 0), b4.x(6, 2), b4.x(4, a83), aq.k9.send(aq.k9.vv, b4.a1), !0
	}
}

function aI4() {
	this.aIU = function(vq) {
		b4.w(39), b4.x(1, 0), b4.x(6, 13), b4.x(14, e.dT), b4.x(4, m.id), b4.x(7, m.dt), b4.x(1, +y), b4.x(1, +z), b4.x(5, (new Date).getHours() % 24), aq.k9.send(vq, b4.a1)
	}, this.aJK = function(vq, aJI, aIy) {
		b4.w(70), b4.x(1, 0), b4.x(6, 14), b4.x(3, aIy), b4.x(30, aJI[0]), b4.x(30, aJI[1]), aq.k9.send(vq, b4.a1)
	}, this.aGh = function(id) {
		b4.w(13), b4.x(1, 0), b4.x(6, 15), b4.x(6, id), aq.k9.send(0, b4.a1)
	}, this.a5u = function(id, oE) {
		var ey = Math.min(oE.length, 63);
		b4.w(19 + 16 * ey), b4.x(1, 0), b4.x(6, 26), b4.x(6, id), b4.x(6, ey), b5.rJ.rW(oE), aq.k9.send(0, b4.a1)
	}, this.aJW = function(aIt, oN) {
		b4.w(7 + 26 * oN.length), b4.x(1, 0), b4.x(6, 9);
		for (var a0 = 0; a0 < oN.length; a0++) b4.x(16, oN[a0][0]), b4.x(10, oN[a0][1]);
		aq.k9.send(aIt, b4.a1)
	}, this.aIZ = function(aJX, a9t) {
		b4.w(20), b4.x(1, 0), b4.x(6, 19), b4.x(1, aJX), b4.x(12, a9t), aq.k9.send(aq.k9.vw, b4.a1)
	}, this.aJU = function(username) {
		b4.x(5, username.length), b5.rJ.rW(username)
	}
}

function aIS() {
	var vq, aEs, b, aJY = ["wss://", "/s50/", "/s51/", "/s52/"];

	function aIT() {
		aq.k9.aIT(vq, aEs)
	}

	function aJd(d) {
		aq.a0p.aIb(vq, new Uint8Array(d.data))
	}

	function aJe() {}

	function aIY(d) {
		aq.k9.aIY(vq, d)
	}
	this.dE = function(kf, aJZ) {
		vq = kf, aEs = aJZ;
		kf = aJY[0];
		vq < aq.k9.a7N ? kf += aq.k9.aII[vq] + aJY[1 + dP] : kf += aq.k9.aII[0] + "/i" + (1 + dP) + (vq - aq.k9.a7O) + "/", (b = new WebSocket(kf)).binaryType = "arraybuffer", b.onopen = aIT, b.onmessage = aJd, b.onclose = aIY, b.onerror = aJe
	}, this.aJb = function() {
		return b.readyState === b.CONNECTING
	}, this.a6o = function() {
		return b.readyState === b.OPEN
	}, this.df = function() {
		return this.aJb() || this.a6o()
	}, this.aIQ = function(aJZ) {
		aEs = aJZ
	}, this.aJM = function() {
		return aEs
	}, this.send = function(a1) {
		this.a6o() && b.send(a1)
	}, this.close = function(aIV) {
		this.df() && (b.close(aIV), this.pr())
	}, this.pr = function() {
		b.onopen = null, b.onmessage = null, b.onclose = null, b.onerror = null
	}
}

function d2() {
	var aJf = !1,
		a1C = 0,
		u = 0,
		pd = 0,
		gap = 0,
		gM = null,
		su = null,
		xK = null;

	function aJh() {
		for (var a7s, aJm = 0, ey = 0, il = Math.floor(u / 2), gP = Math.floor(pd / 2), a7r = 1.5 * Math.PI, a0 = a2.yu; 0 <= a0; a0--) ey += xK[a0], 0 === xK[a0] && aJm++;
		if (aJf = !1, su.clearRect(0, 0, u, u), su.fillStyle = p.ls, su.fillRect(0, 0, u, u), su.fillStyle = p.lv, su.fillRect(0, 0, u, gap), su.fillRect(0, 0, gap, u), su.fillRect(u - gap, 0, gap, u), su.fillRect(0, u - gap, u, gap), 0 < ey)
			if (aJm === a2.yu) {
				for (a0 = a2.yu; 0 <= a0; a0--)
					if (0 < xK[a0]) {
						! function(a0, il, gP) {
							su.fillStyle = bU.a7w[bU.uu[a0]], su.beginPath(), su.arc(il, il, gP, 0, 2 * Math.PI), su.fill()
						}(a0, il, gP);
						break
					}!
				function(il) {
					var fontSize = il / 3;
					su.font = b2.ku.kz(1, fontSize), su.fillStyle = p.lv, su.fillText("100%", il, il + .1 * fontSize)
				}(il)
			} else {
				for (a0 = 0; a0 <= a2.yu; a0++) 0 < xK[a0] && (! function(a0, il, gP, a7r, a7s) {
					su.fillStyle = bU.a7w[bU.uu[a0]], su.beginPath(), su.arc(il, il, gP, a7r, a7s), su.lineTo(il, il), su.fill()
				}(a0, il, gP, a7r, a7s = a7r + 2 * Math.PI * xK[a0] / ey), function(il, gP, a7r, a7s) {
					var ds = (a7s - a7r) / (2 * Math.PI),
						fontSize = +gP * Math.min(ds, .37);
					fontSize < 8 || (a7r = (a7r + a7s) / 2, a7s = Math.floor(100 * ds + .5) + "%", gP *= .525 - Math.max(.6 * (ds - .7), 0), su.font = b2.ku.kz(1, fontSize), su.fillStyle = p.lv, su.fillText(a7s, il + Math.cos(a7r) * gP, il +
						Math.cos(a7r + 1.5 * Math.PI) * gP))
				}(il, gP, a7r, a7s), 0 !== a0 && a7u(il, gP, a7r), a7r = a7s);
				a7u(il, gP, 1.5 * Math.PI)
			}!
		function(il, gP) {
			su.beginPath(), su.arc(il, il, gP, 0, 2 * Math.PI), su.stroke()
		}(il, gP)
	}

	function a7u(il, gP, a7x) {
		su.beginPath(), su.moveTo(il, il), su.lineTo(il + Math.cos(a7x) * gP, il + Math.cos(a7x + 1.5 * Math.PI) * gP), su.stroke()
	}
	this.dE = function() {
		if (a2.hm) {
			var a0;
			for (a1C = 0, xK = new Uint32Array(a2.yu + 1), a0 = a2.yu; 0 <= a0; a0--) xK[a0] = 0;
			for (a0 = ir - 1; 0 <= a0; a0--) xK[bU.im[it[a0]]] += 1;
			this.resize()
		} else xK = su = gM = null
	}, this.a21 = function() {
		return u
	}, this.resize = function() {
		a2.hm && (u = Math.floor(m.n.te() && !a2.lR ? .18 * an.min : .13 * an.oV), u = (u *= 1 + (.5 + .2 * m.n.te()) * a2.lR) + u % 2, pd = Math.floor(7 * u / 8), (gM = gM || document.createElement("canvas")).width = u, gM.height = u, su = gM
			.getContext("2d", {
				alpha: !0
			}), gap = Math.max(1, .015 * u), su.lineWidth = gap, su.strokeStyle = p.lv, b2.ku.textAlign(su, 1), b2.ku.textBaseline(su, 1), aJh())
	}, this.vA = function() {
		return xK[this.jv()]
	}, this.va = function() {
		return a1C = 31, this.hb(), this.jv()
	}, this.jv = function() {
		for (var aJi = 0, a0 = a2.yu; 0 < a0; a0--) xK[a0] > xK[aJi] && (aJi = a0);
		return aJi
	}, this.ju = function(aJj) {
		for (var jM = 0, is = it, im = bU.im, ey = ir, e4 = bE.e4, a0 = 0; a0 < ey; a0++) {
			var f5 = is[a0];
			im[f5] === aJj && (e4[jM++] = f5)
		}
		bE.dw[0] = jM
	}, this.aJk = function() {
		for (var jM = 0, a0 = a2.yu; 0 < a0; a0--) 0 < xK[a0] && jM++;
		return jM
	}, this.hb = function() {
		if (a2.hm && 32 <= ++a1C) {
			var a0;
			for (a1C = 0, a0 = a2.yu; 0 <= a0; a0--) xK[a0] = 0;
			for (a0 = ir - 1; 0 <= a0; a0--) xK[bU.im[it[a0]]] += aX.eq[it[a0]];
			aJf = !0
		}
	}, this.kI = function() {
		a2.hm && aJf && aJh()
	}, this.kl = function() {
		a2.hm && (a2.lR ? kv.drawImage(gM, bQ.gap, bQ.gap) : kv.drawImage(gM, bQ.gap, a22 + 2 * bQ.gap))
	}
}

function cl() {
	function aJr(key) {
		var aHS;
		return "undefined" == typeof URLSearchParams || (aHS = window.location.search, "string" != typeof(aHS = new URLSearchParams(aHS).get(key))) || aHS.length < 1 ? null : aHS
	}
	this.dM = function() {
		if (0 !== m.id) return !1;
		if (! function() {
				var value = aJr("account");
				return b8.clear(), value && (i.j(8, i.pW, new pX(1e3, {
					pY: 0,
					pU: value,
					pV: 0
				})), !0)
			}()) {
			var value = aJr("replay");
			if (!this.clear()) return !1;
			if (!value) return !1;
			i.j(3, 0, value)
		}
		return !0
	}, this.clear = function() {
		var vn = new URL(window.location.href);
		vn.search = "";
		try {
			return history.replaceState(null, "", vn.toString()), !0
		} catch (d) {
			console.log("error 352: " + d)
		}
		return !1
	}, this.aFj = function(key, value) {
		if (0 === m.id) try {
			var vn = new URL(window.location.href),
				f5 = vn.searchParams;
			f5.set(key, value), vn.search = f5.toString(), history.replaceState(null, "", vn.toString())
		} catch (d) {
			console.log("error 358: " + d)
		}
	}
}

function cP() {
	var aJt, e6;
	this.dE = function() {
		for (var a0 = (e6 = new Uint16Array(101)).length - 1; 0 <= a0; a0--) e6[a0] = bB.em(32768 * a0, 100);
		this.z4(0)
	}, this.value = function(f5) {
		return e6[f5]
	}, this.aDG = function() {
		return bB.em(aJt - 1, 2)
	}, this.z4 = function(aCx) {
		aJt = 2 * aCx % 32768 + 1
	}, this.random = function() {
		return aJt = 167 * aJt % 32768
	}, this.i2 = function(kT) {
		return bB.em(kT * this.random(), 32768)
	}, this.ig = function(f5) {
		return 0 !== f5 && this.random() < this.value(f5)
	}, this.hP = function(hz, i5) {
		return hz + this.i2(i5 - hz)
	}
}

function ci() {
	this.np = new aJu, this.aHV = new aJv, this.aHZ = new aJw, this.dE = function(yx, t1, yz, z0) {
		var aJx;
		a2.fk || ((aJx = {}).yy = a2.et, aJx.yx = yx, aJx.t1 = t1, aJx.yz = yz, aJx.z0 = z0, aJx.a85 = bI.s9, aJx.a86 = bI.a82, aQ.a8Y(aJx), this.np.dE(aJx))
	}, this.hb = function() {
		a2.fk || (this.np.hb(), 3 !== i.pW) || bT.er() % 15 != 5 && 2 !== a2.uZ || i.a8z().aHT()
	}, this.aHY = function() {
		var ps = this.np.aJx;
		0 === a2.uZ && aP.a78(), bI.w(ps.a85, ps.a86), 1 === ps.t1.length && (aQ.a8T(ps.yz), aQ.a8V(ps.a8W, ps.a8X)), aq.k9.close(aq.k9.vw, 3257), aq.k9.vw = 0, a2.yw(ps.yx, ps.yy, ps.t1, ps.yz, ps.z0, !0)
	}, this.aHX = function(oE) {
		var a0 = oE.indexOf("=");
		return 0 <= a0 ? oE.substring(a0 + 1) : oE
	}, this.aHW = function(oE) {
		return "https://territorial.io/?replay=" + oE
	}
}

function aJu() {
	this.aJz = null, this.aK0 = null, this.aK1 = null, this.aK2 = null, this.aK3 = null, this.aK4 = null;
	var aK5 = 0;
	this.aJx = null, this.aHU = "", this.dE = function(aJx) {
		this.aJz = [], this.aK0 = [], this.aK1 = [], this.aK2 = [], this.aK3 = [0], this.aK4 = [0], aK5 = 0, this.aJx = aJx, this.aHU = ""
	}, this.nq = function(id, e7, e9, eB) {
		a2.fk || 2 === a2.uZ || (0 === this.aK3[aK5] && (this.aK4[aK5] ? (this.aK3.push(1), this.aK4.push(0), aK5++) : this.aK3[aK5] = 1), this.aJz.push(id), this.aK0.push(e7), this.aK1.push(void 0 === e9 ? 0 : e9), this.aK2.push(void 0 === eB ?
			0 : eB), this.aK4[aK5]++)
	}, this.hb = function() {
		0 === this.aK3[aK5] ? this.aK4[aK5]++ : (this.aK3.push(0), this.aK4.push(0), aK5++)
	}
}

function aJw() {
	function aKB(oE, aKD) {
		aKD ? aC.a0G = "Replay Error: " + oE : i.j(4, 3, new k("⚠️ Replay Error", oE, !0))
	}
	this.rb = function(oE) {
		if (b6.pZ.rT(b6.pZ.rR(b6.pZ.rP(oE))), aC.a0G = "", ! function() {
				if (b7.size < 10) aKB("File Too Small");
				else if (b7.nb(9) !== dR && aKB("Incompatible Version Error", !0), b7.nb(31) !== b7.size) aKB("Size Error");
				else {
					if (function(iF) {
							var a0, f5 = b7.a1,
								ey = b7.size,
								a9t = 0;
							for (a0 = 7; a0 < ey; a0++) a9t = a9t + f5[a0] & 65535;
							return a9t === iF
						}(b7.nb(16))) return 1;
					aKB("Hash Error")
				}
				return
			}()) return !1;
		var aJx;
		(aJx = {}).yy = b7.nb(9), aJx.yx = b7.nb(14), aJx.yz = b7.nb(4), aJx.z0 = 1 === b7.nb(1), aJx.a85 = b7.nb(6), aJx.a86 = b7.nb(14), aJx.aKE = b7.nb(10), b1.np.aJx = aJx,
			function() {
				var a0, a8d, a8c, name, ey = b1.np.aJx.aKE,
					t1 = [];
				for (a0 = 0; a0 < ey; a0++) a8d = b7.nb(1), a8c = [b7.nb(6), b7.nb(6), b7.nb(6)], name = b6.rJ.rL(b7.nb(5)), t1.push({
					name: name,
					a8c: a8c,
					a8d: a8d
				});
				if (b1.np.aJx.t1 = t1, 8 === b1.np.aJx.yz)
					for (a0 = 0; a0 < ey; a0++) t1[a0].t5 = b7.nb(14)
			}();
		var a0, ey, aKF = b1.np.aJx;
		if (1 === aKF.t1.length)
			for (ey = 6 < aKF.yz ? 1 : aKF.yz + 2, aKF.a8W = new Array(ey), aKF.a8X = new Array(ey), a0 = 0; a0 < ey; a0++) aKF.a8W[a0] = b7.nb(3), aKF.a8X[a0] = b7.nb(9) + 1;
		return !! function() {
			var rc = b7.nb(5),
				aKG = b7.nb(30),
				aKH = b7.nb(30);
			if (aKG + aKH > 8 * b7.size) return void aKB("Corrupted File");
			return function(ey) {
					var a0, id, aKK = new Uint8Array(ey),
						aKL = new Uint16Array(ey),
						aKM = new Uint32Array(ey),
						aKN = new Uint32Array(ey);
					for (b1.np.aJz = aKK, b1.np.aK0 = aKL, b1.np.aK1 = aKM, b1.np.aK2 = aKN, a0 = 0; a0 < ey; a0++) aKK[a0] = id = b7.nb(4), aKL[a0] = b7.nb(9), 0 === id ? aKM[a0] = b7.nb(22) : 1 === id ? (aKM[a0] = b7.nb(10), aKN[a0] = b7
						.nb(10)) : 2 === id ? (aKM[a0] = b7.nb(10), aKN[a0] = b7.nb(9)) : 3 === id || 4 === id ? (aKM[a0] = b7.nb(10), aKN[a0] = b7.nb(22)) : 5 === id || 6 === id ? aKM[a0] = b7.nb(10) : 7 === id && (aKM[a0] = b7.nb(1))
				}(aKG),
				function(ey, rc) {
					var a0, aK3 = new Uint8Array(ey),
						aK4 = new Array(ey);
					for (aK4.fill(0), b1.np.aK3 = aK3, b1.np.aK4 = aK4, a0 = 0; a0 < ey; a0++) aK3[a0] = b7.nb(1), aK4[a0] = b7.nb(rc)
				}(aKH, rc), 1
		}() && (b7.kf < 8 * b7.size - 13 || b7.kf > 8 * b7.size ? (aKB("Out Of Bounds Error: " + b7.kf + " " + 8 * b7.size), !1) : (b1.np.aHU = oE, !0))
	}
}

function aJv() {
	this.u6 = function() {
		var aKF, rc = function() {
				var a0, aK4 = b1.np.aK4,
					ey = aK4.length,
					max = 0;
				for (a0 = 0; a0 < ey; a0++) max = Math.max(max, aK4[a0]);
				return rh(Math.max(max, 1))
			}(),
			aKP = function(rc) {
				return 179 + function() {
					var a0, t1 = b1.np.aJx.t1,
						ey = t1.length,
						aKP = 24 * ey;
					for (a0 = 0; a0 < ey; a0++) aKP += 16 * t1[a0].name.length;
					8 === b1.np.aJx.yz && (aKP += 14 * ey);
					return aKP
				}() + (1 === b1.np.aJx.t1.length ? 12 * b1.np.aJx.a8W.length : 0) + function() {
					var a0, aJz = b1.np.aJz,
						ey = aJz.length,
						aKP = 13 * ey,
						aKa = [22, 20, 19, 32, 32, 10, 10, 1, 0, 0];
					for (a0 = 0; a0 < ey; a0++) aKP += aKa[aJz[a0]];
					return aKP
				}() + function(rc) {
					return b1.np.aK4.length * (1 + rc)
				}(rc)
			}(rc);
		b4.w(aKP + (6 - aKP % 6) % 6), aKF = b1.np.aJx, b4.x(9, dR), b4.x(31, b4.size), b4.kf += 16, b4.x(9, aKF.yy), b4.x(14, aKF.yx), b4.x(4, aKF.yz), b4.x(1, aKF.z0), b4.x(6, aKF.a85), b4.x(14, aKF.a86), b4.x(10, aKF.t1.length);
		var a0, t1 = b1.np.aJx.t1,
			ey = t1.length;
		for (a0 = 0; a0 < ey; a0++) b4.x(1, t1[a0].a8d), b4.x(18, (t1[a0].a8c[0] << 12) + (t1[a0].a8c[1] << 6) + t1[a0].a8c[2]), b4.x(5, t1[a0].name.length), b5.rJ.rW(t1[a0].name);
		if (8 === b1.np.aJx.yz)
			for (a0 = 0; a0 < ey; a0++) b4.x(14, t1[a0].t5);
		return function() {
				var a0, aKF = b1.np.aJx;
				if (1 === aKF.t1.length)
					for (a0 = 0; a0 < aKF.a8W.length; a0++) b4.x(3, aKF.a8W[a0]), b4.x(9, aKF.a8X[a0] - 1)
			}(),
			function(rc) {
				var a0, aJz = b1.np.aJz,
					e7 = b1.np.aK0,
					e9 = b1.np.aK1,
					eB = b1.np.aK2,
					ey = aJz.length;
				for (b4.x(5, rc), b4.x(30, ey), b4.x(30, b1.np.aK4.length), a0 = 0; a0 < ey; a0++) b4.x(4, aJz[a0]), b4.x(9, e7[a0]), 0 === aJz[a0] ? b4.x(22, e9[a0]) : 1 === aJz[a0] ? (b4.x(10, e9[a0]), b4.x(10, eB[a0])) : 2 === aJz[a0] ? (b4.x(
					10, e9[a0]), b4.x(9, eB[a0])) : 3 === aJz[a0] || 4 === aJz[a0] ? (b4.x(10, e9[a0]), b4.x(22, eB[a0])) : 5 === aJz[a0] || 6 === aJz[a0] ? b4.x(10, e9[a0]) : 7 === aJz[a0] && b4.x(1, e9[a0])
			}(rc),
			function(rc) {
				var a0, aK3 = b1.np.aK3,
					aK4 = b1.np.aK4,
					ey = aK3.length;
				for (a0 = 0; a0 < ey; a0++) b4.x(1, aK3[a0]), b4.x(rc, aK4[a0])
			}(rc), b4.kf !== aKP && aC.vx("Encoder Index Error: " + b4.kf + " " + aKP), b4.kf = 40, b4.x(16, function() {
				var a0, f5 = b4.a1,
					ey = b4.size,
					a9t = 0;
				for (a0 = 7; a0 < ey; a0++) a9t = a9t + f5[a0] & 65535;
				return a9t
			}()), b7.dE(b4.a1), b5.pZ.pa(b5.pZ.pb(bB.em(aKP - 1, 6) + 1))
	}
}

function cV() {
	var il, bb = !1,
		aKb = !1,
		aKc = -1e4,
		aKd = -1,
		aKe = 0;

	function resize(aKi) {
		il = 0, aR.pw() && (aKg(aKi) || bb) && (bb = !1, bQ.resize(), aN.dE(), bM.dE(), aO.resize(), aI.resize(), aD.resize(), i.resize(), 1 <= a2.uZ ? (aK.resize(!1), aJ.resize(), aL.resize(), aH.resize(), aG.resize(), aC.resize(), aB.resize(), b3
			.resize(), al.resize(), aE.resize(), aF.resize(), aA.resize(), bS.resize(), aW.resize(), aM.resize(), bV.resize(), aH.a33()) : (2 === aP.vt() && aQ.resize(), aP.a7A(), aP.a7B()), bT.dL = !0)
	}

	function aKf(ds) {
		return ds && 128 < ds ? Math.floor(ds) : 128
	}

	function aKg(aKi) {
		var u, iF, aKk, pd, a2S;
		if (!(0 < an.pG)) return pd = aKf(document.documentElement.clientWidth), a2S = aKf(window.visualViewport && 2 !== m.id ? window.visualViewport.height : document.documentElement.clientHeight), u = pd, iF = a2S, aKk = 0 !== m.id || u < iF ?
			700 : 1200, aKk = Math.min(aKk / ((u + iF) / 2), 1), aKk = 0 === bX.dW.data[1].value ? 2 * aKk / 3 : Math.min(aKk + (bX.dW.data[1].value - 1) * (1 - aKk) / 2, 1), an.oZ = (window.devicePixelRatio || 1) * aKk, hoveringTooltip
			.canvasPixelScale = an.oZ, aKi && !aKb ? (aKb = !0, document.body.removeChild(wE)) : aKb && (aKb = !1, document.body.appendChild(wE)), u = Math.floor(.5 + pd * an.oZ), iF = Math.floor(.5 + a2S * an.oZ), u !== an.u || iF !== an.iF ? (
				an.u = u, an.iF = iF, an.min = a3u(u, iF), an.max = a0X(u, iF), an.oV = bB.em(u + iF, 2), an.qE = u / iF, wE.width = u, wE.height = iF, wE.style.width = pd + "px", wE.style.height = a2S + "px", aKd = bT.dp + 1e3, 1) : void 0
	}
	this.u = 0, this.iF = 0, this.min = 0, this.max = 0, this.oV = 0, this.qE = 1, this.oZ = 1, this.pG = 0, this.dF = function() {
		this.u = aKf(document.documentElement.clientWidth) + 2, this.iF = aKf(document.documentElement.clientHeight) + 2
	}, this.dE = function() {
		il = 1, wE = document.getElementById("canvasA"), (kv = wE.getContext("2d", {
			alpha: makeMainMenuTransparent
		})).imageSmoothingEnabled = !1, aKg(0)
	}, this.hb = function() {
		at.hb(), 50 <= ++il && resize(0), -1 === aKd || bT.dp < aKd || (aKd = -1, 2e3 * ++aKe >= bT.dp + 8e3 ? console.log("error 3748") : m.n.setState(15))
	}, this.dO = function(ge) {
		bb = !0, resize(ge)
	}, this.wx = function() {
		aKc + 1e3 > bT.dp || (aKc = bT.dp, resize(0))
	}
}

function cQ() {
	var player, ht, pf, rt, kq, kr, ks, kt, kf, aKm, id;

	function aKs() {
		var hs;
		if (aS.fA(pf)) hs = a2.f2;
		else {
			if ((hs = aS.f9(pf)) === player) return void aKu(!0);
			if (!gD(player, hs)) return function(hs) {
				var max = aX.eq[hs] * a2.ix - aX.eu[hs];
				max <= 0 || (ht -= max = max < ht ? max : ht, player === a2.et && (aC.nO(max, 0, hs), bR.ew[16] += max), hs === a2.et && (aC.a13(max, player), bR.ew[10] += max), aX.eu[hs] += max, aW.nP(hs, max))
			}(hs), void aKu(!0)
		}
		player === a2.et && (bR.ew[13] += ht), a6.es(player, id), aU.ex(player, aKm), aX.ez[player].push(rt), aU.hp(player, ht, hs), a4.hq(player, !0)
	}

	function aKu(aKx) {
		a6.es(player, id), aU.ex(player, aKm), aKx && (aX.eu[player] += ht)
	}

	function aKo() {
		aS.a9Z(pf, player) && aS.a9b(pf)
	}

	function aKn(a0, aB4, a1x, i1, le) {
		if (kf = a0, id = aB4, player = a1x, kq = aS.kw(i1), kr = aS.kx(i1), ks = aS.kw(le), kt = aS.kx(le), rt = pf = aS.sS(kq, kr), -1 !== (aKm = aU.l1(player, id))) return ht = aU.ef(player, aKm), 1;
		aKo(), a6.es(player, id)
	}
	this.hb = function(a0, id, a1x, i1, le) {
		aKn(a0, id, a1x, i1, le) && (aKo(), function() {
			var aKy = bB.em(ht, 128);
			ht -= aKy = aKy < 1 ? 1 : aKy, player === a2.et && (bR.ew[15] += aKy);
			if (ht <= a2.en) return player === a2.et && (bR.ew[15] += ht), void aKu(!1);
			return aU.fN(player, aKm, ht), 1
		}()) && (a0 = aS.sS(kq, kr), pf = Math.abs(ks - kq) >= Math.abs(kt - kr) ? a0 + eP[kq < ks ? 1 : 3] : a0 + eP[kr < kt ? 2 : 0], kq = aS.kw(pf), kr = aS.kx(pf), a6.ke(kf, pf), ! function() {
			if (aS.f0(pf)) return;
			return 1
		}() ? aKs() : aS.g4(pf) && aS.a9e(pf, player))
	}, this.ki = function(a1x, i1) {
		player = a1x, pf = aS.sS(aS.kw(i1), aS.kx(i1)), aKo()
	}
}

function cz() {
	this.aJJ = new aKz, this.v8 = new aL0
}

function aL0() {
	this.v9 = function() {
		for (var f5, ey = ir, t1 = it, vE = aX.vE, a7I = this.aA9(), a0 = 0; a0 < ey; a0++) f5 = t1[a0], aS.uS(f5) && (vE[f5] = a7I);
		var nv = aX.nv,
			hj = aX.hj,
			hk = aX.hk,
			vK = aX.vK,
			ey = a2.iq;
		for (a0 = 0; a0 < ey; a0++)(0 === vK[a0] || hk[a0] < 1 || 2 * nv[a0] > 3 * (hj[a0] + hk[a0])) && (vE[a0] = 0);
		var v0 = 0;
		for (a0 = 0; a0 < ey; a0++) v0 += 0 < vE[a0];
		return v0
	}, this.aA9 = function() {
		return Math.min(65535, bT.er())
	}
}

function aKz() {
	function aL4(e6, ds, jd) {
		for (var a0 = 0; a0 < 256; a0++) e6[a0] = (e6[a0] + (ds >> (a0 + jd) % 30 & 1)) % 256
	}
	this.hb = function(aL1, aL2) {
		var e6 = new Uint8Array(256);
		return function(e6, aL1, aL2) {
				var a0, aL6 = 3 + (4 + aL1) % 32768,
					aL7 = 12 + aL2 % 32768,
					aL8 = 17 + ((aL1 & aL2) + (aL1 | aL2) + aL1) % 32768;
				for (a0 = 0; a0 < 256; a0++) aL6 = 1 + aL6 * aL7 % aL8, e6[a0] = aL6 % 256
			}(e6, aL1, aL2), aL4(e6, aL1, 2), aL4(e6, aL2, 7),
			function(e6) {
				var a0, ds, kf = 0;
				for (a0 = 0; a0 < 3e4; a0++) ds = e6[kf], e6[kf] = (ds + a0 + e6[(kf + a0) % 256]) % 256, kf = (ds + a0 + kf + (ds & kf)) % 256
			}(e6),
			function(e6) {
				var a0, a2S = 1,
					a8g = 1;
				for (a0 = 0; a0 < 256; a0 += 2) a2S = (1 + a2S) * (e6[a0] + 1) % 1073741824, a8g = (1 + a8g) * (e6[a0 + 1] + 1) % 1073741824;
				return [a2S, a8g]
			}(e6)
	}
}

function cS() {
	var aL9, aLA, g4, aLB;
	this.dE = function() {
		var a0, fg, fh, a8c, aLC, u, iF, su, gJ, rr, ds, f5, iJ, hz, zf;
		if (function() {
				if (g4 = !0, aLB = "rgb(" + bI.rp[0] + "," + bI.rp[1] + "," + bI.rp[2] + ")", bI.aD4(bI.s9)) return 1;
				return g4 = !1, 0
			}()) aLA = null;
		else {
			for (aL9 = bB.em(96, 4), aLC = 1 === bI.s9 ? (a8c = 0, 160) : (a8c = 128, 32), aLB = "rgb(" + a8c + "," + a8c + "," + a8c + ")", aLA = new Array(4), a0 = 3; 0 <= a0; a0--) {
				if (aLA[a0] = document.createElement("canvas"), u = a0 % 2 == 0 ? bI.eT : aL9, iF = a0 % 2 == 0 ? aL9 : bI.eU + 2 * aL9, aLA[a0].width = u, aLA[a0].height = iF, rr = (gJ = (su = aLA[a0].getContext("2d", {
						alpha: !1
					})).getImageData(0, 0, u, iF)).data, a0 % 2 == 0)
					for (fh = aL9 - 1; 0 <= fh; fh--)
						for (ds = aLC + Math.floor((fh + 1) * (a8c - aLC) / (aL9 + 1)), fg = u - 1; 0 <= fg; fg--) rr[f5 = 4 * ((0 === a0 ? aL9 - fh - 1 : fh) * u + fg)] = ds, rr[f5 + 1] = ds, rr[f5 + 2] = ds, rr[f5 + 3] = 255;
				else {
					for (fg = aL9 - 1; 0 <= fg; fg--)
						for (ds = aLC + Math.floor((fg + 1) * (a8c - aLC) / (aL9 + 1)), fh = iF - 1 - aL9; aL9 <= fh; fh--) rr[f5 = 4 * (fh * u + (3 === a0 ? aL9 - fg - 1 : fg))] = ds, rr[f5 + 1] = ds, rr[f5 + 2] = ds, rr[f5 + 3] = 255;
					for (hz = 1; 0 <= hz; hz--)
						for (fg = aL9 - 1; 0 <= fg; fg--)
							for (fh = aL9 - 1; 0 <= fh; fh--) iJ = (Math.pow(fg * fg + fh * fh, .5) + 1) / (aL9 + 1), ds = aLC + Math.floor((1 < iJ ? 1 : iJ) * (a8c - aLC)), rr[f5 = 4 * ((0 === hz ? aL9 - fh - 1 : fh + hz * (iF - aL9)) * u + (
								1 === a0 ? fg : aL9 - fg - 1))] = ds, rr[f5 + 1] = ds, rr[f5 + 2] = ds, rr[f5 + 3] = 255
				}
				su.putImageData(gJ, 0, 0)
			}
			zf = aLC, bI.rk.fillStyle = "rgb(" + zf + "," + zf + "," + zf + ")", bI.rk.fillRect(0, 0, bI.eT, 1), bI.rk.fillRect(0, bI.eU - 1, bI.eT, 1), bI.rk.fillRect(0, 0, 1, bI.eU), bI.rk.fillRect(bI.eT - 1, 0, 1, bI.eU)
		}
	}, this.sq = function() {
		var hz = g4 ? 0 : -aL9;
		aEb(hz, hz, bI.eT - 2 * hz, bI.eU - 2 * hz, bO.aLF, bO.aLG, bO.aLH, bO.aLI) || (kv.fillStyle = aLB, kv.fillRect(0, 0, an.u, an.iF))
	}, this.kl = function() {
		g4 || (aEa(0, -aL9, bI.eT, aL9, bO.aLF, bO.aLG, bO.aLH, bO.aLI) && kv.drawImage(aLA[0], bO.aLJ, bO.aLK - aL9), aEa(bI.eT, -aL9, aL9, bI.eU + 2 * aL9, bO.aLF, bO.aLG, bO.aLH, bO.aLI) && kv.drawImage(aLA[1], bO.aLJ + bI.eT, bO.aLK - aL9),
			aEa(0, bI.eU, bI.eT, aL9, bO.aLF, bO.aLG, bO.aLH, bO.aLI) && kv.drawImage(aLA[2], bO.aLJ, bO.aLK + bI.eU), aEa(-aL9, -aL9, aL9, bI.eU + 2 * aL9, bO.aLF, bO.aLG, bO.aLH, bO.aLI) && kv.drawImage(aLA[3], bO.aLJ - aL9, bO.aLK - aL9))
	}
}

function co() {
	this.g5 = new aLL, this.aA7 = new aLM, this.sr = new aLN, this.k9 = new aLO, this.hF = new aLP, this.zf = new aLQ, this.aLR = new aLS, this.ia = new aLT, this.jV = new aLU, this.aLV = new aLW, this.dE = function() {
		this.sr.dE(), this.k9.dE(), this.hF.dE(), this.zf.dE(), this.aLV.dE()
	}, this.kl = function() {
		this.aLV.kl(), this.sr.kl()
	}
}

function aLT() {
	this.hb = function(player) {
		return 0 !== aX.fH[player].length && bD.k9.nn !== bD.k9.nz && bD.k9.nm[player] !== bD.k9.o0 && !!b2.eo.nt(player, player < a2.iq ? 20 : a3.j5[a3.ht[player]], 32, 0) && !(!ab.hS.hb(player) && !ab.hU.hb(player) || ! function(y3) {
			var aLZ = bE.e1[1] + bC.gQ[bE.e1[2] - 1] << 2;
			if (aS.fA(aLZ)) return 1;
			return aLZ = aS.f9(aLZ), y3 !== aLZ && !!gD(y3, aLZ)
		}(player)) && function(player) {
			return b2.eo.nw(player), bD.k9.o1(player), !0
		}(player)
	}
}

function aLL() {
	function aLq(a0, jm, jn) {
		var aLs, aLr;
		if (!(a0 < 0)) return aLr = bD.k9.aLn[a0], aLs = bC.gu(aLr), aLr = bC.gx(aLr), a0 = 20 * (.9 + .1 * Math.log10(bD.k9.a0o[a0])), bB.aEi(bC.gt(jm), bC.gw(jn), aLs, aLr, a0)
	}

	function aLj(aLi) {
		var aLv = 4 + .03 * (1 + 1.5 * m.n.te()) * an.oV / h8;
		return bC.gy(aLi, bE.e1[1]) < aLv
	}
	this.g6 = function(player, aLi) {
		return !!bC.hA(aLi) && bD.k9.nn !== bD.k9.nz && bD.k9.nm[player] !== bD.k9.o0 && 0 !== aX.fH[player].length && !!bD.jV.jW(player, aLi) && !!aLj(aLi)
	}, this.n6 = function(player, n5, aLi) {
		return !!(bC.hA(aLi) && this.o2(player, n5) && bD.jV.o3(aLi) && aLj(aLi))
	}, this.o2 = function(player, id) {
		for (var aLk, po = player << 3, pp = po + bD.k9.nm[player], aLl = bD.k9.aLl, aLm = bD.k9.aLm, a0 = po; a0 < pp; a0++)
			if (id === aLm[aLk = aLl[a0]]) return bE.e1[3] = aLk, !0;
		return !1
	}, this.n4 = function(fv) {
		var zg = bD.zf.zg;
		return !!this.o2(a2.et, zg) && (b0.g1.n4(zg, fv), !0)
	}, this.zh = function(jm, jn) {
		var player = a2.et,
			ey = bD.k9.nm[player];
		if (0 === ey) return !1;
		for (var aLl = bD.k9.aLl, aLn = bD.k9.aLn, po = player << 3, aLo = 80, aGF = -1, a0 = po + ey - 1; po <= a0; a0--) {
			var aLp = aLl[a0],
				iJ = bC.go(jm, jn, aLn[aLp]);
			iJ < aLo && (aLo = iJ, aGF = aLp)
		}
		return !!aLq(aGF, jm, jn) && (bD.zf.zg = bD.k9.aLm[aGF], !0)
	}, this.zo = function(jm, jn) {
		var ey = bD.k9.nn;
		if (ey < 1) return -1;
		for (var aLn = bD.k9.aLn, aLo = 80, aGF = -1, a0 = 0; a0 < ey; a0++) {
			var iJ = bC.go(jm, jn, aLn[a0]);
			iJ < aLo && (aLo = iJ, aGF = a0)
		}
		return aLq(aGF, jm, jn) ? aGF : -1
	}
}

function aLM() {
	this.aA8 = function(player) {
		for (var aLl = bD.k9.aLl, po = player << 3, a0 = po + bD.k9.nm[player] - 1; po <= a0; a0--) this.aLw(aLl[a0])
	}, this.aLw = function(aLx) {
		var k9 = bD.k9,
			aLy = k9.nn - 1,
			aLz = k9.a0n[aLx],
			aM0 = k9.aM1[aLx],
			aM2 = k9.aLn[aLx];
		k9.nn = aLy, k9.a0n[aLx] = k9.a0n[aLy], k9.aM3[aLx] = k9.aM3[aLy], k9.aM4[aLx] = k9.aM4[aLy], k9.aLn[aLx] = k9.aLn[aLy], k9.aM5[aLx] = k9.aM5[aLy], k9.a0o[aLx] = k9.a0o[aLy], k9.aM1[aLx] = k9.aM1[aLy], k9.aLm[aLx] = k9.aLm[aLy], k9.aM6[
				aLx] = k9.aM6[aLy], k9.aM7[aLx] = k9.aM7[aLy], k9.aM8[aLx] = k9.aM8[aLy], k9.aLl[k9.a0n[aLx]] = aLx,
			function(a7x) {
				var player = a7x >> 3,
					k9 = bD.k9,
					ey = k9.nm[player] - 1,
					aMB = (player << 3) + ey;
				k9.nm[player] = ey, aMB !== a7x && (k9.aLl[a7x] = k9.aLl[aMB], k9.a0n[k9.aLl[a7x]] = a7x)
			}(aLz), bD.hF.hF[bC.hE(k9.aLn[aLx])][k9.aM1[aLx]] = aLx, aLy = bC.hE(aM2), aLz = aM0, aLy = bD.hF.hF[aLy], k9 = aLy.pop(), aLz !== aLy.length && (aLy[aLz] = k9, bD.k9.aM1[k9] = aLz)
	}
}

function aLN() {
	var aMD, tJ = 8,
		aME = new Array(2);

	function aMF(kf) {
		var gG = tJ + 4,
			xW = b2.ku.rg(gG, gG),
			gN = b2.ku.getContext(xW, !0),
			gJ = b2.ku.getImageData(gN, gG, gG),
			rr = gJ.data;
		return aMG(rr, gG + 1, kf), aMG(rr, gG + 2, kf), aMG(rr, 2 * gG + 1, kf), aMG(rr, 2 * gG - 3, kf), aMG(rr, 2 * gG - 2, kf), aMG(rr, 3 * gG - 2, kf), aMG(rr, gG * (gG - 3) + 1, kf), aMG(rr, gG * (gG - 2) + 1, kf), aMG(rr, gG * (gG - 2) + 2,
			kf), aMG(rr, gG * (gG - 2) - 2, kf), aMG(rr, gG * (gG - 1) - 3, kf), aMG(rr, gG * (gG - 1) - 2, kf), gN.putImageData(gJ, 0, 0), xW
	}

	function aMG(rr, fv, kf) {
		fv *= 4;
		rr[fv] = 255, rr[1 + fv] = 255, rr[2 + fv] = kf, rr[3 + fv] = 255
	}

	function rg(player) {
		var xW = b2.ku.rg(tJ, tJ);
		return function(gN, player) {
			var fg, fh, gs, fv, aMI, a7y, gG = tJ,
				gJ = b2.ku.getImageData(gN, gG, gG),
				rr = gJ.data,
				ja = (gG >> 1) - .5,
				aLB = aS.a1Q(player),
				aMK = b2.od.xD(aLB, .5);
			b2.od.xF(aLB, aMK, 300) || b2.od.xH(aLB, 100);
			for (fh = 0; fh < gG; fh++)
				for (fg = 0; fg < gG; fg++) a7y = (gG - 1.5) * (gG - 1.5) / 4, aMI = (gs = (gs = fg - ja) * gs + (gs = fh - ja) * gs) <= (gG - 4.5) * (gG - 4.5) / 4 ? aMK : aLB, rr[fv = 4 * (fh * gG + fg)] = aMI[0], rr[1 + fv] = aMI[1], rr[2 +
					fv] = aMI[2], rr[3 + fv] = a7y < gs ? 0 : 255;
			gN.putImageData(gJ, 0, 0)
		}(b2.ku.getContext(xW, !0), player), xW
	}
	this.dE = function() {
		aMD = new Array(a2.f2), aME[0] = aMF(255), aME[1] = aMF(0)
	}, this.kl = function() {
		var a0, player, aML, aEj, ht, gr, aMN, aMP, aMQ, aLn = bD.k9.aLn,
			a0n = bD.k9.a0n,
			a0o = bD.k9.a0o,
			aM7 = bD.k9.aM7,
			aMR = aMD,
			aMS = a2.et,
			aMT = -1,
			ey = bD.k9.nn,
			aMU = an.u,
			aMV = an.iF,
			aMW = bI.eT << 4,
			yc = h8,
			fx = yc / tJ,
			kq = h7 / yc,
			kr = h9 / yc,
			gs = (aMU + h7) / yc - kq,
			gv = (aMV + h9) / yc - kr,
			gN = kv;
		for (bD.g5.o2(a2.et, bD.zf.zg) && (aMT = bE.e1[3]), gN.imageSmoothingEnabled = yc < 9, b2.ku.textAlign(gN, 1), b2.ku.textBaseline(gN, 1), a0 = 0; a0 < ey; a0++) player = a0n[a0] >> 3, ht = a0o[a0], aML = .9 + .1 * Math.log10(ht), aEj = (
				gr = aLn[a0]) % aMW / 16 - aML, gr = aMV * (Math.floor(gr / aMW) / 16 - aML - kr) / gv, aMN = -2 * (aMQ = yc * aML) * (1 + (aMP = +(player === aMS)) / 8), aMP = aMP * aMQ / 4, (aMQ = aMU * (aEj - kq) / gs) < aMN || gr < aMN ||
			aMU + aMP < aMQ || aMV + aMP < gr || (aEj = 2 * aML * fx, aMN = aML * yc, void 0 === (aMP = aMR[player]) && (aMR[player] = aMP = rg(player)), player === aMS && (gN.setTransform(aEj, 0, 0, aEj, aMQ - 2 * aEj, gr - 2 * aEj), gN
				.drawImage(aME[+(a0 === aMT)], 0, 0)), gN.setTransform(aEj, 0, 0, aEj, aMQ, gr), gN.drawImage(aMP, 0, 0), (aML = Math.floor(function(ht) {
				if (ht < 1e3) return .42;
				if (ht < 1e4) return .34;
				if (ht < 1e6) return .26;
				if (ht < 1e8) return .19;
				return .15
			}(ht) * aMN)) < 6) || (gN.setTransform(1, 0, 0, 1, 0, 0), gN.fillStyle = aM7[a0] ? p.mN : p.lv, gN.font = b2.ku.kz(1, aML), gN.fillText(b2.l2.l3(ht), aMQ + aMN, gr + aMN + .1 * aML));
		gN.imageSmoothingEnabled = !1, gN.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function aLW() {
	var xW;
	this.dE = function() {
		xW = xW || bF.k9.aMZ(20, bU.aMa[0])
	}, this.kl = function() {
		var lg = h8;
		if (!(5 <= lg)) {
			var aMU = an.u,
				aMV = an.iF,
				kq = h7 / lg,
				kr = h9 / lg,
				ks = (aMU + h7) / lg,
				kt = (aMV + h9) / lg,
				f6 = -20 * lg,
				aMb = .5 * f6,
				aMW = bI.eT << 4,
				ey = bD.k9.nn,
				aLn = bD.k9.aLn,
				aMc = xW,
				gN = kv;
			3 < lg && (gN.globalAlpha = .5 * (5 - lg));
			for (var a0 = 0; a0 < ey; a0++) {
				var gr = aLn[a0],
					fg = aMU * (gr % aMW / 16 - kq) / (ks - kq) + aMb,
					gr = aMV * (Math.floor(gr / aMW) / 16 - kr) / (kt - kr) + aMb;
				aMU < fg || aMV < gr || fg < f6 || gr < f6 || (gN.setTransform(lg, 0, 0, lg, fg, gr), gN.drawImage(aMc, 0, 0))
			}
			gN.globalAlpha = 1, gN.setTransform(lg, 0, 0, lg, 0, 0)
		}
	}
}

function aLS() {
	this.hb = function() {
		for (var aLr, aLR, aM6 = bD.k9.aM6, aLn = bD.k9.aLn, aM4 = bD.k9.aM4, a0 = bD.k9.nn - 1; 0 <= a0; a0--) aLr = aLn[a0], 0 !== (aLR = aM6[a0]) && aLr === aM4[a0] && (! function(a0, aMf, gd) {
			var hs, player = bD.k9.a0n[a0] >> 3,
				gd = aMf + bC.gQ[gd] << 2,
				a0 = bD.k9.a0o[a0];
			if (aS.fA(gd)) hs = a2.f2;
			else {
				if ((hs = aS.f9(gd)) === player) return b2.eo.nN(player, a0);
				if (!gD(player, hs)) return b0.iv.nL(player, hs, a0)
			}
			player === a2.et && (bR.ew[13] += a0);
			aX.ez[player].push(aMf << 2), aU.hp(player, a0, hs), a4.hq(player, !0)
		}(a0, bC.hD(aLr), aLR - 1), bD.aA7.aLw(a0))
	}, this.aMg = function(player, fv, gd) {
		if (0 !== gd) {
			var aMS = a2.et;
			if (b2.eo.fn(aMS) && gD(player, aMS) && player !== aMS && 0 !== aX.fH[aMS].length) {
				var aLZ = fv + bC.gQ[--gd] << 2;
				if (aS.fA(aLZ) || gD(player, aS.f9(aLZ))) {
					for (var a0y = !1, a0 = 0; a0 < 4; a0++)
						if (aLZ = fv + bC.gQ[a0] << 2, aS.f0(aLZ) && !aS.fA(aLZ) && aS.f9(aLZ) === aMS) {
							a0y = !0;
							break
						} a0y && (aC.a0x(719, 0), aC.uy(180, L(308, [aX.l4[player]]), 719, player, p.mM, p.ls, -1, !0))
				}
			}
		}
	}
}

function aLO() {
	this.aMh = null, this.nz = 512, this.o0 = 8, this.nn = 0, this.kZ = 0, this.a0n = new Uint16Array(this.nz), this.aM3 = new Uint32Array(this.nz), this.aM4 = new Uint32Array(this.nz), this.aLn = new Uint32Array(this.nz), this.aM5 = new Uint16Array(
			this.nz), this.a0o = new Uint32Array(this.nz), this.aM1 = new Uint16Array(this.nz), this.aLm = new Uint16Array(this.nz), this.aM6 = new Uint8Array(this.nz), this.aM7 = new Uint8Array(this.nz), this.aM8 = new Uint32Array(this.nz), this
		.nm = new Uint8Array(a2.f2), this.aLl = new Uint16Array(this.o0 * a2.f2), this.dE = function() {
			this.kZ = 0, this.nn = 0, this.aMh = new Uint8Array(bI.eT + bI.eU), this.nm.fill(0)
		}, this.o1 = function(player) {
			var ey = this.nn,
				aMi = bC.hC(bE.e1[0]),
				aMj = this.nm[player],
				aMk = (player << 3) + aMj,
				ht = (aX.kX[player] = 2, this.a0n[ey] = aMk, this.aM3[ey] = aMi, this.aLn[ey] = aMi, this.aM4[ey] = bC.hC(bE.e1[1]), this.aM5[ey] = 0, bE.dx[0]);
			ht < 60 ? (b2.eo.ep(player, 60 - ht), this.a0o[ey] = 60) : this.a0o[ey] = ht, this.aM1[ey] = bD.hF.o1(ey, bC.hE(aMi)), this.aLm[ey] = this.kZ, this.aM6[ey] = bE.e1[2], this.aM7[ey] = 0, this.aM8[ey] = 0, this.kZ = this.kZ + 1 & 1023, this
				.aLl[aMk] = ey, this.nm[player] = aMj + 1, this.nn++, bD.aLR.aMg(player, bE.e1[1], bE.e1[2])
		}, this.n4 = function() {
			var aLk = bE.e1[3];
			this.aM3[aLk] = this.aLn[aLk], this.aM4[aLk] = bC.hC(bE.e1[1]), this.aM5[aLk] = 0, this.aM6[aLk] = bE.e1[2], bD.aLR.aMg(this.a0n[aLk] >> 3, bE.e1[1], bE.e1[2])
		}, this.hb = function() {
			bD.aLR.hb(),
				function(v7) {
					var a0, aMp, aMq, aMr, aMs, aMi, aMw, aMx, f7, f6, aM3 = v7.aM3,
						aM4 = v7.aM4,
						aLn = v7.aLn,
						a0o = v7.a0o,
						aM7 = v7.aM7,
						aM5 = v7.aM5,
						aM1 = v7.aM1,
						eq = aX.eq,
						a0n = v7.a0n,
						v7 = v7.nn,
						aMW = bI.eT << 4;
					for (a0 = v7 - 1; 0 <= a0; a0--) aMq = aLn[a0], aMp = aM4[a0], aMq !== aMp && (aMi = aM3[a0], aMw = aMp % aMW - (aMs = aMi % aMW), aMx = ~~((aMp + .5) / aMW) - (aMi = ~~((aMi + .5) / aMW)), f7 = ~~Math.sqrt(aMw * aMw + aMx * aMx +
						.5), f6 = 15e4 + 25e3 * bB.log10(a0o[a0]), f6 += 5e4 * !eq[a0n[a0] >> 3], aM7[a0] && (f6 = bB.em(f6, 5)), 65535 <= (f6 = aM5[a0] + Math.max(~~((f6 + .5) / f7), 1)) ? aLn[a0] = aMr = aMp : (aM5[a0] = f6, aLn[a0] = aMr =
						aMs + bB.em(f6 * aMw, 65536) + aMW * (aMi + bB.em(f6 * aMx, 65536))), aM1[a0] = bD.hF.aMz(aM1[a0], aMq, aMr))
				}(this),
				function(v7) {
					if (bT.er() % 2 == 1) {
						var a0, jd, ja, i5, il, aN0, td, aN1, pf, kq, kr, aMi, aN2, gV, aN4, rz, ey = v7.nn,
							aLn = v7.aLn,
							a0n = v7.a0n,
							a0o = v7.a0o,
							aM8 = v7.aM8,
							aM7 = v7.aM7,
							hF = bD.hF.hF,
							aN6 = hF.length,
							aN7 = bD.hF.aN7,
							aMW = bI.eT << 4,
							aN8 = a2.hm,
							aJj = bU.im,
							f6 = (ey - 1) * (bB.em(bT.er(), 2) % 2);
						for (a0 = 0; a0 < ey; a0++)
							for (jd = Math.abs(a0 - f6), aMi = aLn[jd], ja = bC.hE(aMi), pf = a0n[jd] >> 3, kq = aMi % aMW, kr = ~~((aMi + .5) / aMW), aN4 = a0o[jd], i5 = 0; i5 < 9; i5++)
								if (!((aN0 = ja + aN7[i5]) < 0 || aN6 <= aN0))
									for (aN1 = hF[aN0], td = aN1.length, il = 0; il < td; il++) aN2 = aN1[il], rz = a0n[aN2] >> 3, pf == rz || aN8 && aJj[pf] === aJj[rz] || (rz = aLn[aN2], (gV = kq - rz % aMW) * gV + (gV = kr - ~~((rz + .5) / aMW)) *
										gV < 14400 && (rz = a0o[aN2], gV = rz < aN4 ? bB.em(rz + bB.em(aN4 - rz, 10), 10) : bB.em(aN4, 10), gV = Math.max(1, gV), a0o[aN2] = Math.max(rz - gV, 0), aM7[aN2] = 4, aM8[aN2] = Math.min(aM8[aN2] + gV,
											4294967295)))
					}
				}(this),
				function(v7) {
					if (bT.er() % 5 == 3) {
						var a0, ht, a0o = v7.a0o,
							eq = aX.eq,
							a0n = v7.a0n,
							aM8 = v7.aM8,
							aM7 = v7.aM7,
							ey = v7.nn;
						for (a0 = 0; a0 < ey; a0++) ht = a0o[a0], eq[a0n[a0] >> 3] ? a0o[a0] = Math.max(ht - Math.max(1, ht >> 7), 0) : (a0o[a0] = Math.max(ht - Math.max(1, ht >> 11), 0), aM7[a0] || (ht = aM8[a0]) && (ht = Math.max(ht >> 3, 1), a0o[
							a0] = Math.min(a0o[a0] + (ht << 1), 4294967295), aM8[a0] -= ht))
					}
				}(this);
			var a0, v7 = this,
				a0o = v7.a0o,
				aM7 = v7.aM7;
			for (a0 = v7.nn - 1; 0 <= a0; a0--) aM7[a0] = aM7[a0] >> 1, 0 === a0o[a0] && bD.aA7.aLw(a0)
		}
}

function aLP() {
	this.aN9 = 32, this.fg = 0, this.fh = 0, this.hG = 0, this.aNA = 0, this.aNB = 4, this.hF = null, this.aN7 = new Int16Array(9), this.dE = function() {
		this.hG = 1 + bB.em(bI.eT - 1, this.aN9), this.aNA = 1 + bB.em(bI.eU - 1, this.aN9), this.hF = new Array(this.hG * this.aNA), b2.od.xC(this.hF);
		var fg, fh, aN7 = this.aN7,
			u = this.hG;
		for (fg = -1; fg <= 1; fg++)
			for (fh = -1; fh <= 1; fh++) aN7[3 * (1 + fh) + 1 + fg] = fh * u + fg
	}, this.o1 = function(aND, a0) {
		return this.hF[a0].push(aND), this.hF[a0].length - 1
	}, this.aMz = function(aNE, aMi, aMp) {
		var aNF, aNG, aMi = bC.hE(aMi),
			aMp = bC.hE(aMp);
		return aMi === aMp ? aNE : (aNF = this.hF[aMi].pop(), this.hF[aMi].length === aNE ? this.o1(aNF, aMp) : (aNG = this.hF[aMi][aNE], this.hF[aMi][aNE] = aNF, bD.k9.aM1[aNF] = aNE, this.o1(aNG, aMp)))
	}
}

function aLU() {
	function vz(aMp, aNH) {
		if (function(aMp, aLi) {
				var gU = bC.hD(aMp),
					aNK = Math.abs(bC.gW(aLi) - bC.gW(gU)),
					gU = Math.abs(bC.gY(aLi) - bC.gY(gU));
				return 0 !== Math.max(aNK, gU) && (function(aMi, aMp, aNK, aNL) {
					var aNN = bC.gu(aMi),
						aMi = bC.gx(aMi),
						aNP = bC.gu(aMp),
						aMp = bC.gx(aMp),
						aNP = aNP - aNN,
						aMp = aMp - aMi,
						aNT = Math.abs(aNP),
						aNU = Math.abs(aMp),
						aNP = 0 < aNP ? 1 : 3,
						aMp = 0 < aMp ? 2 : 0;
					aNU < aNT ? aNX(aNN, aMi, aNN + aNT, aMi + aNU, aNP, aMp, aNK) : aNX(aMi, aNN, aMi + aNU, aNN + aNT, aMp, aNP, aNL)
				}(aMp, bC.hC(aLi), aNK, gU), !0)
			}(aMp, aNH)) {
			if (0 === bE.dv[0]) return !!aS.g4(aNH << 2);
			if (function(aLi) {
					if (aS.g4(aLi << 2)) return 1;
					return function(aLi) {
						var a0, gd, aMh = bD.k9.aMh,
							aNb = bC,
							ey = bE.dv[0],
							aNc = 4 * aLi;
						for (a0 = ey - 1; 0 <= a0; a0--)
							if (gd = aMh[a0], aNc = aNb.hI(aNc, gd + 2 & 3), aS.g4(aNc)) return bE.dv[0] = a0, bE.e1[1] = aNc >> 2, bE.e1[2] = 1 + gd, 1;
						return
					}(aLi)
				}(aNH)) {
				var a0, aNH = bC.hD(aMp),
					rr = a5d,
					aMh = bD.k9.aMh,
					ey = bE.dv[0] - 1,
					aNc = 4 * aNH,
					gR = bC.gR;
				for (a0 = 0; a0 < ey; a0++)
					if (aNc += gR[aMh[a0]], 0 !== rr[aNc + 3] || 2 !== rr[aNc + 2]) return !!void 0;
				return !!1
			}
		}
		return !1
	}

	function aNX(aNN, aNO, aNP, aNQ, aNV, aNW, aNK) {
		for (var fh, aMh = bD.k9.aMh, f6 = 0, aNY = 0, iF = aNQ - aNO, u = aNP - aNN, aNZ = aNN % 16, a0 = 1; a0 <= aNK; a0++) aMh[f6++] = aNV, aMh[f6] = aNW, f6 += (fh = (iF * (aNZ + (a0 << 4)) + .5) / u >> 4) - aNY, aNY = fh;
		bE.e5(bE.dv, f6)
	}
	this.jW = function(player, aNH) {
		var gd, gU, gT = bC.gf(player, aNH);
		return gT !== aNH && (gd = bC.gS(gT, aNH), gU = bC.hH(gT, gd), !(!aS.g4(gU << 2) && (gd = bC.gc(gT, aNH, gd), gU = bC.hH(gT, gd), aS.s0(gU << 2) || !aS.g4(gU << 2)) || (bE.e1[0] = gU, bE.e1[1] = aNH, bE.e1[2] = 0, !vz(bC.hC(gU), aNH)) ||
			0 !== bE.e1[2] && bC.gn(player, bE.e1[1] + bC.gQ[bE.e1[2] - 1] << 2)))
	}, this.o3 = function(aNH) {
		var aMi = bD.k9.aLn[bE.e1[3]];
		return bE.e1[1] = aNH, bE.e1[2] = 0, vz(aMi, aNH)
	}
}

function aLQ() {
	var tJ = 32,
		tI = new Array(2);

	function rg(il) {
		var fg, fh, fv, gv, gs, gG = tJ,
			xW = b2.ku.rg(gG, gG),
			gN = b2.ku.getContext(xW, !0),
			gJ = b2.ku.getImageData(gN, gG, gG),
			rr = gJ.data,
			ja = (gG >> 1) - .5,
			jb = Math.sqrt(ja * ja);
		for (rr.fill(255), fh = 0; fh < gG; fh++)
			for (fg = 0; fg < gG; fg++) gs = fg - ja, gv = fh - ja, fv = 4 * (fh * gG + fg), gs = 714 * (jb - Math.sqrt(gs * gs + gv * gv)) / jb, rr[2 + fv] = il, rr[3 + fv] = 255 < gs ? 0 : gs;
		return gN.putImageData(gJ, 0, 0), xW
	}
	this.zg = -1, this.dE = function() {
		this.zg = -1, tI[0] || (tI[0] = rg(255), tI[1] = rg(0))
	}, this.aNe = function(gN, fx, fg, fh, gP, a0) {
		b2.eo.fn(a2.et) && (gN.setTransform(fx *= 4 / 3 * .625, 0, 0, fx, fg - (gP *= 4 / 3), fh - gP), gN.drawImage(tI[+(bD.k9.aLm[a0] === this.zg)], 0, 0))
	}
}

function cF() {
	this.a2F = function() {
		var aNh;
		return !(ir < 3 || aX.eq[jx[0]] >= a2.iW >> 1) && (a2.hm ? (aNh = aV.aBL(), !(2 * aV.aBM(bV.jv()) >= aNh)) : function() {
			var aNh = aV.aBL();
			if (2 * aX.eu[jx[0]] >= aNh) return !1;
			return !0
		}())
	}
}

function d6() {
	this.size = 501, this.vU = new Uint32Array(this.size), this.y6 = new Uint32Array(this.size), this.a55 = new Uint16Array(this.size), this.aHh = 0, this.aNj = 1, this.il = 0, this.max = [0, 0, 0], this.ew = 0, this.aNk = null, this.dF =
function() {
		this.aNk = [L(309), L(310), L(311), L(312), L(313), L(314), L(315), L(316), L(317), L(318), L(319), L(320), L(321), L(322), L(323), L(324), L(325), L(326)]
	}, this.dE = function() {
		this.aHh = 0, this.aNj = 1, this.il = 0, this.aNl(), this.aNm()
	}, this.nx = function(player, h6) {
		player === a2.et && (this.ew[0] += h6, this.ew[1]++, this.ew[12] += bE.dx[1], this.ew[13] += bE.dx[0])
	}, this.nO = function(player, n0) {
		donationsTracker.logDonation(player, n0, bE.dx[0]);
		player === a2.et && (aC.nO(bE.dx[0], bE.dx[1], n0), this.ew[12] += bE.dx[1], this.ew[16] += bE.dx[0]), n0 === a2.et && (aC.a13(bE.dx[0], player), this.ew[10] += bE.dx[0])
	}, this.hb = function() {
		0 < this.il-- || this.aNn()
	}, this.aNn = function() {
		0 !== aX.kX[a2.et] && (this.vU[this.aHh] = aX.eq[a2.et], this.y6[this.aHh] = aX.eu[a2.et], this.a55[this.aHh] = aV.a56(a2.et), this.aNo(this.aHh), this.aHh++, this.aHh === this.size && this.aNp(), this.il = this.aNj - 1, bS.kI())
	}, this.aNp = function() {
		this.aNl(), this.aNo(0), this.aHh = 1 + bB.em(this.size, 2);
		for (var a0 = 1; a0 < this.aHh; a0++) this.vU[a0] = this.vU[2 * a0], this.y6[a0] = this.y6[2 * a0], this.a55[a0] = this.a55[2 * a0], this.aNo(a0);
		this.aNj *= 2
	}, this.aNl = function() {
		this.max[0] = this.max[1] = this.max[2] = 0
	}, this.aNm = function() {
		this.ew = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	}, this.aNo = function(a0) {
		this.max[0] = this.vU[a0] > this.max[0] ? this.vU[a0] : this.max[0], this.max[1] = this.y6[a0] > this.max[1] ? this.y6[a0] : this.max[1], this.max[2] = this.a55[a0] > this.max[2] ? this.a55[a0] : this.max[2]
	}
}

function d7() {
	this.u = 0, this.iF = 0, this.pd = 0, this.pe = 0, this.aNq = 0, this.aNr = 0, this.a2S = 0, this.a8g = 0, this.a8R = 0, this.aNs = 0, this.aNt = 0, this.aNu = 0, this.a1r = 0, this.kf = 0, this.a4m = null, this.tE = !1, this.aNv = -1, this
		.aNw = !1, this.aNx = [0, 0], this.dF = function() {
			this.a4m = [L(327), L(328), L(89), L(329)]
		}, this.dE = function() {
			this.tE = !1, this.aNv = -1, this.aNw = !1, this.resize()
		}, this.resize = function() {
			this.u = an.u < 1.369 * an.iF ? an.u : 1.369 * an.iF;
			var f7 = m.n.te() && an.u < an.iF ? 1 : m.n.te() ? .8 : an.u < an.iF ? .65 : .59;
			this.u = Math.floor(f7 * this.u), this.u -= m.n.te() && an.u < an.iF ? 2 * bQ.gap + 2 : 0, this.iF = Math.floor(this.u / 1.369), this.a1r = Math.floor(this.iF / 150), this.a1r = Math.max(this.a1r, 1.5), this.pd = Math.floor(1 + .02 * this
				.u), this.pe = Math.floor(1 + .04 * this.u), this.a2S = this.pe, this.a8g = Math.floor(1 + .075 * this.u), this.aNs = Math.floor(1 + .1125 * this.u), this.aNt = Math.floor(this.u * (m.n.te() ? .03 : .029)), this.aNt = Math.max(
				this.aNt, 4), this.aNu = Math.floor(.035 * this.u), this.aNu = Math.max(this.aNu, 4), this.a8R = this.iF - 2 * this.a2S - this.a8g - this.aNs, this.tE && this.aNy()
		}, this.fo = function(jm, jn) {
			var sK, sJ;
			return !!this.tE && (sJ = jm, sK = jn, jm -= bB.em(an.u - this.u, 2), jn -= bB.em(an.iF - this.iF, 2), jm < 0 || jn < 0 || jm >= this.u || jn >= this.iF || jm >= this.u - this.aNs && jn < this.aNs ? 1 < aB.fo(sJ, sK) || this.pr() : jn <
				this.aNs || (jn < this.iF - this.a8g ? (this.aNw = !0, this.aNv = (jm - 2 * this.pd - this.aNq) / this.aNr, 3 !== this.kf && (bT.dL = !0)) : (sJ = (sJ = Math.floor(jm / (this.u / this.a4m.length))) < 0 ? 0 : sJ >= this.a4m
					.length ? this.a4m.length - 1 : sJ) !== this.kf && (this.kf = sJ, this.aNy(), bT.dL = !0)), !0)
		}, this.wo = function() {
			var aNz = Math.floor((this.aNx[0] + h7) / h8),
				aO0 = Math.floor((this.aNx[1] + h9) / h8);
			aNz < 1 || aO0 < 1 || aNz >= bI.eT - 1 || aO0 >= bI.eU - 1 || console.log(aNz + " " + aO0)
		}, this.wF = function(jm, jn) {
			return this.aNx[0] = jm, this.aNx[1] = jn, !(!this.tE || !this.aNw || (jm -= bB.em(an.u - this.u, 2), jn = this.aNv, this.aNv = (jm - 2 * this.pd - this.aNq) / this.aNr, (0 <= this.aNv && this.aNv <= 1 || 0 <= jn && jn <= 1) && (bT.dL = !
				0), 0))
		}, this.wf = function() {
			this.aNw && (this.aNw = !1)
		}, this.ws = function() {
			this.tE ? this.pr() : this.show()
		}, this.show = function() {
			bR.aHh < 2 || (this.tE = !0, this.aNy())
		}, this.pr = function() {
			this.tE = !1, this.aNv = -1, bT.dL = !0
		}, this.aNy = function() {
			this.kf < 2 ? this.aNq = aF.measureText(b2.l2.l3(bR.max[this.kf]), b2.ku.kz(0, this.aNt)) : 2 === this.kf && (this.aNq = aF.measureText(b2.l2.yZ(6, 2), b2.ku.kz(0, this.aNt))), this.aNr = this.u - 2 * this.pd - this.aNq - this.pe
		}, this.kI = function() {
			this.tE && this.aNy()
		}, this.kl = function() {
			this.tE && this.a2j()
		}, this.a2j = function() {
			var fg = bB.em(an.u - this.u, 2),
				fh = bB.em(an.iF - this.iF, 2);
			kv.setTransform(1, 0, 0, 1, fg, fh), kv.fillStyle = p.ls, kv.fillRect(0, this.aNs, this.u, this.iF - this.aNs), this.aO1(), this.aH6(), kv.strokeRect(0, 0, this.u, this.iF), b2.ku.textAlign(kv, 2), kv.font = b2.ku.kz(0, this.aNt), 0 ===
				this.kf ? this.aO2(bR.vU, fg, fh) : 1 === this.kf ? this.aO2(bR.y6, fg, fh) : 2 === this.kf ? this.aO3(fg, fh) : 3 === this.kf && (this.aO4(fg, fh), this.aO5(fg, fh)), aB.a06(Math.floor(fg + this.u - .725 * this.aNs), Math.floor(fh +
					.275 * this.aNs), Math.floor(.45 * this.aNs)), kv.setTransform(1, 0, 0, 1, 0, 0)
		}, this.aO1 = function() {
			var a0, dq;
			for (kv.lineWidth = this.a1r, b2.ku.textBaseline(kv, 1), b2.ku.textAlign(kv, 1), kv.strokeStyle = p.lv, kv.font = b2.ku.kz(1, this.aNu), dq = this.u / this.a4m.length, kv.fillStyle = p.mE, kv.fillRect(this.kf * dq, this.iF - this.a8g, dq,
					this.a8g), kv.fillStyle = p.lv, kv.fillRect(0, this.iF - this.a8g - .5 * this.a1r, this.u, this.a1r), a0 = 1; a0 <= 3; a0++) kv.fillRect(a0 * dq, this.iF - this.a8g, this.a1r, this.a8g);
			for (a0 = this.a4m.length - 1; 0 <= a0; a0--) kv.fillText(this.a4m[a0], (a0 + .5) * dq, this.iF - .46 * this.a8g)
		}, this.aH6 = function() {
			kv.fillStyle = p.mX, kv.fillRect(0, 0, this.u, this.aNs), kv.fillStyle = p.lv, kv.fillRect(0, this.aNs - .5 * this.a1r, this.u, this.a1r), kv.font = b2.ku.kz(1, .39 * this.aNs), kv.fillText(L(330), Math.floor(this.u / 2), Math.floor(.55 *
				this.aNs))
		}, this.aO2 = function(e6, fg, fh) {
			var ja = bR.max[this.kf],
				xE = (kv.setTransform(1, 0, 0, 1, fg + 2 * this.pd + this.aNq, fh + this.a2S + this.aNs), kv.lineWidth = 2, this.a8R / Math.sqrt(ja));
			kv.beginPath(), kv.moveTo(this.aNr, this.a8R - xE * Math.sqrt(e6[bR.aHh - 1]));
			for (var a0 = bR.aHh - 2; 0 <= a0; a0--) kv.lineTo(a0 * this.aNr / (bR.aHh - 1), this.a8R - xE * Math.sqrt(e6[a0]));
			kv.stroke();
			fg = this.a06(e6, xE, .5);
			fg < .95 && kv.fillText(b2.l2.l3(ja), -this.pd, 0), .05 < Math.abs(fg - .5) && kv.fillText(b2.l2.l3(Math.floor(ja / 4)), -this.pd, Math.floor(this.a8R / 2)), .05 < fg && kv.fillText("0", -this.pd, this.a8R)
		}, this.aO3 = function(fg, fh) {
			kv.setTransform(1, 0, 0, 1, fg + 2 * this.pd + this.aNq, fh + this.a2S + this.aNs), kv.lineWidth = 2;
			var xE = this.a8R / Math.max(bR.max[this.kf], 1);
			kv.beginPath(), kv.moveTo(this.aNr, this.a8R - xE * bR.a55[bR.aHh - 1]);
			for (var a0 = bR.aHh - 2; 0 <= a0; a0--) kv.lineTo(a0 * this.aNr / (bR.aHh - 1), this.a8R - xE * bR.a55[a0]);
			kv.stroke();
			fg = this.a06(bR.a55, xE, 1), fh = bR.max[this.kf] / 100;
			fg < .95 && kv.fillText(b2.l2.yZ(fh, 2), -this.pd, 0), .05 < Math.abs(fg - .5) && kv.fillText(b2.l2.yZ(fh / 2, 2), -this.pd, Math.floor(this.a8R / 2)), .05 < fg && kv.fillText(b2.l2.yZ(0, 2), -this.pd, this.a8R)
		}, this.aO4 = function(fg, fh) {
			kv.setTransform(1, 0, 0, 1, fg + .34 * this.u, fh + 2 * this.a2S + this.aNs), b2.ku.textAlign(kv, 2);
			for (var a4X = this.iF - 4 * this.a2S - this.a8g - this.aNs, a0 = 7; 0 <= a0; a0--) kv.fillText(bR.aNk[a0], 0, a0 * a4X / 7);
			kv.setTransform(1, 0, 0, 1, fg + .39 * this.u, fh + 2 * this.a2S + this.aNs), b2.ku.textAlign(kv, 0);
			fg = bR.ew[1];
			for (kv.fillText(b2.l2.yZ(bR.ew[0] / (10 * (fg < 1 ? 1 : fg)), 1), 0, 0), a0 = 6; 1 <= a0; a0--) kv.fillText(bR.ew[a0].toString(), 0, a0 * a4X / 7);
			kv.fillText(b2.l2.yZ(100 * (1 - aX.eq[a2.et] / bR.ew[7]), 0), 0, a4X)
		}, this.aO5 = function(fg, fh) {
			kv.setTransform(1, 0, 0, 1, fg + .79 * this.u, fh + 2 * this.a2S + this.aNs), b2.ku.textAlign(kv, 2);
			var a0, a4X = this.iF - 4 * this.a2S - this.a8g - this.aNs;
			for (kv.fillStyle = p.m9, a0 = 2; 0 <= a0; a0--) kv.fillText(bR.aNk[a0 + 8], 0, a0 * a4X / 9);
			for (kv.fillStyle = p.m8, kv.fillText(bR.aNk[11], 0, 3 * a4X / 9), kv.fillStyle = p.mO, a0 = 8; 4 <= a0; a0--) kv.fillText(bR.aNk[a0 + 8], 0, a0 * a4X / 9);
			kv.fillStyle = p.mN, kv.fillText(bR.aNk[17], 0, 9 * a4X / 9), kv.fillStyle = p.m9;
			var a0l = b2.l2.l3(bR.ew[8] + bR.ew[9] + bR.ew[10] + bR.ew[11]),
				aGK = kv.measureText(a0l).width,
				fg = (kv.setTransform(1, 0, 0, 1, fg + .83 * this.u + aGK, fh + 2 * this.a2S + this.aNs), kv.fillText(b2.l2.l3(bR.ew[8]), 0, 0), kv.fillText(b2.l2.l3(bR.ew[9]), 0, a4X / 9), kv.fillText(b2.l2.l3(bR.ew[10]), 0, 2 * a4X / 9), kv
					.fillStyle = p.m8, kv.fillText(a0l, 0, 3 * a4X / 9), kv.fillStyle = p.mO, bR.ew[13] - aU.aB5(a2.et)),
				aGK = (kv.fillText(b2.l2.l3(bR.ew[12]), 0, 4 * a4X / 9), kv.fillText(b2.l2.l3(fg), 0, 5 * a4X / 9), kv.fillText(b2.l2.l3(bR.ew[14]), 0, 6 * a4X / 9), kv.fillText(b2.l2.l3(bR.ew[15]), 0, 7 * a4X / 9), kv.fillText(b2.l2.l3(bR.ew[16]),
					0, 8 * a4X / 9), bR.ew[12] + fg + bR.ew[14] + bR.ew[15] + bR.ew[16] + bR.ew[17]);
			kv.fillStyle = p.mN, kv.fillText(b2.l2.l3(aGK), 0, a4X), kv.fillStyle = p.lv
		}, this.a06 = function(e6, xE, a3J) {
			var a0, d, e7;
			return this.aNv < 0 || 1 < this.aNv ? .25 : (a0 = this.aNv * (bR.aHh - 1), e7 = e6[d = Math.floor(a0)], e7 += (a0 - d) * (e6[d < bR.aHh - 1 ? d + 1 : d] - e7), kv.strokeStyle = p.ly, .04 < this.aNv && this.aO8(0, this.a8R - xE * Math.pow(
					e7, a3J), a0 * this.aNr / (bR.aHh - 1), this.a8R - xE * Math.pow(e7, a3J)), .04 < e7 / bR.max[this.kf] && this.aO8(a0 * this.aNr / (bR.aHh - 1), this.a8R, a0 * this.aNr / (bR.aHh - 1), this.a8R - xE * Math.pow(e7, a3J)), kv
				.fillStyle = p.mQ, kv.beginPath(), kv.arc(a0 * this.aNr / (bR.aHh - 1), this.a8R - xE * Math.pow(e7, a3J), Math.max(2, .014 * this.iF), 0, 2 * Math.PI), kv.fill(), e6 = this.aNv * bT.a57, e6 = 0 === aX.kX[a2.et] ? Math.floor(e6 *
					aM.a5E) : Math.floor(e6 * bT.er()), kv.fillStyle = p.lv, kv.fillText(1 === a3J ? b2.l2.yZ(e7 / 100, 2) : b2.l2.l3(Math.floor(e7)), -this.pd, this.a8R - xE * Math.pow(e7, a3J)), b2.ku.textAlign(kv, 1), kv.fillText(aL.a3t(e6),
					a0 * this.aNr / (bR.aHh - 1), this.a8R + this.aNt - (m.n.te() ? 2 : 0) - this.a1r), b2.ku.textAlign(kv, 2), xE * Math.pow(e7, a3J) / this.a8R)
		}, this.aO8 = function(kq, kr, ks, kt) {
			kv.beginPath(), kv.moveTo(kq, kr), kv.lineTo(ks, kt), kv.stroke()
		}
}

function bf() {
	this.aO9 = "https://", this.aOA = this.aO9 + "territorial.io/", this.aHi = this.aOA + "changelog", this.aHm = this.aOA + "terms", this.aOB = this.aOA + "cookie_policy", this.aHO = this.aOA + "privacy", this.aHl = this.aOA + "tutorial", this.aHk =
		this.aOA + "players", this.aHj = this.aOA + "clans", this.vW = this.aOA + "clan-results", this.a6D = this.aO9 + "play.google.com/store/apps/details?id=territorial.io", this.vo = this.aO9 + "apps.apple.com/app/id1581110913", this.aOC = this
		.aO9 + "www.youtube.com/watch?v=toZTQ8aRdFc", this.a6E = this.aO9 + "discord.gg/pthqvpTXmh", this.a6F = this.aO9 + "www.instagram.com/davidtschacher/", this.tX =
		"🇦🇫🇦🇽🇦🇱🇩🇿🇦🇸🇦🇩🇦🇴🇦🇮🇦🇶🇦🇬🇦🇷🇦🇲🇦🇼🇦🇺🇦🇹🇦🇿🇧🇸🇧🇭🇧🇩🇧🇧🇧🇾🇧🇪🇧🇿🇧🇯🇧🇲🇧🇹🇧🇴🇧🇦🇧🇼🇧🇷🇮🇴🇻🇬🇧🇳🇧🇬🇧🇫🇧🇮🇨🇻🇰🇭🇨🇲🇨🇦🇮🇨🇰🇾🇨🇫🇹🇩🇨🇱🇨🇳🇨🇽🇨🇨🇨🇴🇰🇲🇨🇬🇨🇩🇨🇷🇭🇷🇨🇺🇨🇼🇨🇾🇨🇿🇩🇰🇩🇯🇩🇲🇩🇴🇪🇨🇪🇬🇸🇻🇬🇶🇪🇷🇪🇪🇸🇿🇪🇹🇪🇺🇫🇰🇫🇴🇫🇯🇫🇮🇫🇷🇬🇫🇵🇫🇹🇫🇬🇦🇬🇲🇬🇪🇩🇪🇬🇭🇬🇮🇬🇷🇬🇱🇬🇩🇬🇵🇬🇺🇬🇹🇬🇬🇬🇳🇬🇼🇬🇾🇭🇹🇭🇳🇭🇰🇭🇺🇮🇸🇮🇳🇮🇩🇮🇷🇮🇶🇮🇪🇮🇲🇮🇱🇮🇹🇨🇮🇯🇲🇯🇵🇯🇪🇯🇴🇰🇿🇰🇪🇰🇮🇽🇰🇰🇼🇰🇬🇱🇦🇱🇻🇱🇧🇱🇸🇱🇷🇱🇾🇱🇮🇱🇹🇱🇺🇲🇴🇲🇰🇲🇬🇲🇼🇲🇾🇲🇻🇲🇱🇲🇹🇲🇭🇲🇶🇲🇷🇲🇺🇾🇹🇲🇽🇫🇲🇲🇩🇲🇨🇲🇳🇲🇪🇲🇸🇲🇦🇲🇿🇲🇲🇳🇦🇳🇷🇳🇵🇳🇱🇳🇨🇳🇿🇳🇮🇳🇪🇳🇬🇳🇺🇳🇫🇰🇵🇲🇵🇳🇴🇴🇲🇵🇰🇵🇼🇵🇸🇵🇦🇵🇬🇵🇾🇵🇪🇵🇭🇵🇱🇵🇹🇵🇷🇶🇦🇷🇴🇷🇺🇷🇼🇼🇸🇸🇲🇸🇹🇸🇦🇸🇳🇷🇸🇸🇨🇸🇱🇸🇬🇸🇽🇸🇰🇸🇮🇸🇧🇸🇴🇿🇦🇬🇸🇰🇷🇸🇸🇪🇸🇱🇰🇧🇱🇸🇭🇰🇳🇱🇨🇲🇫🇵🇲🇻🇨🇸🇩🇸🇷🇸🇪🇸🇾🇨🇭🇹🇼🇹🇯🇹🇿🇹🇭🇹🇱🇹🇬🇹🇰🇹🇴🇹🇹🇹🇳🇹🇷🇹🇲🇹🇨🇹🇻🇺🇬🇺🇦🇦🇪🇬🇧🇺🇳🇺🇸🇻🇮🇺🇾🇺🇿🇻🇺🇻🇦🇻🇪🇻🇳🇼🇫🇪🇭🇾🇪🇿🇲🇿🇼"
}

function cq() {
	this.k9 = new aOD, this.sr = new aOE, this.dE = function() {
		this.k9.dE()
	}, this.hb = function() {
		0 !== this.k9.a1C && this.k9.a1C--
	}
}

function aOE() {
	this.kl = function() {
		if (0 !== bF.k9.a1C && (kv.globalAlpha = Math.min(bF.k9.a1C / 580, 1), kv.drawImage(bF.k9.aOH, 1 + aH.kw(), 1 + aH.kx()), kv.globalAlpha = 1, a2.g0)) {
			for (var kq = h7 / h8, kr = h9 / h8, ks = (an.u + h7) / h8, kt = (an.iF + h9) / h8, f6 = bF.k9.aOI * h8, aOJ = bF.k9.aOJ, a0 = a2.iq - 1; 0 <= a0; a0--) ! function(a0, f6, kq, kr, ks, kt, aOJ) {
				var highlight = settings.highlightClanSpawns && clanFilter.inOwnClan[a0];
				if (highlight) f6 *= 2;
				0 === aX.kX[a0] || 0 === aX.eq[a0] || (ks = an.u * ((aX.hK[a0] + aX.hL[a0] + 1) / 2 - kq) / (ks - kq) - .5 * f6, kq = an.iF * ((aX.hM[a0] + aX.hN[a0] + 1) / 2 - kr) / (kt - kr) - .5 * f6, ks > an.u) || kq > an.iF || ks < -
					f6 || kq < -f6 || (kv.setTransform(highlight ? h8 * 2 : h8, 0, 0, highlight ? h8 * 2 : h8, ks, kq), kv.drawImage(aOJ[a2.hm ? bU.im[a0] : 1], 0, 0))
			}(a0, f6, kq, kr, ks, kt, aOJ);
			kv.setTransform(h8, 0, 0, h8, 0, 0)
		}
	}
}

function aOD() {
	this.aOI = 28, this.a1C = 0, this.aOH = null;
	var aOL = this.aOJ = null;

	function aOO(gG, aOP) {
		var fg, fh, fv, gs, xW = b2.ku.rg(gG, gG),
			gN = b2.ku.getContext(xW, !0),
			gJ = b2.ku.getImageData(gN, gG, gG),
			rr = gJ.data,
			ja = (gG >> 1) - .5,
			aOQ = .5 + ja;
		for (aOQ *= aOQ, fh = 0; fh < gG; fh++)
			for (fg = 0; fg < gG; fg++) gs = (gs = fg - ja) * gs + (gs = fh - ja) * gs, rr[fv = 4 * (fh * gG + fg)] = aOP[0], rr[1 + fv] = aOP[1], rr[2 + fv] = aOP[2], rr[3 + fv] = (aOQ - gs) * aOP[3] / aOQ;
		return gN.putImageData(gJ, 0, 0), xW
	}

	function aNe(a0, gN, xW, gG) {
		var fg, y, highlight = settings.highlightClanSpawns && clanFilter.inOwnClan[a0];
		if (highlight) gG *= 2;
		0 !== aX.kX[a0] && 0 !== aX.eq[a0] && (fg = aX.hK[a0] + aX.hL[a0] + 1 - gG - 2 >> 1, y = aX.hM[a0] + aX.hN[a0] + 1 - gG - 2 >> 1,
			highlight ? gN.drawImage(xW[a2.hm ? bU.im[a0] : a0 < a2.iq ? 1 : 0], fg, y, gG, gG) :
			gN.drawImage(xW[a2.hm ? bU.im[a0] : a0 < a2.iq ? 1 : 0], fg, y))
	}
	this.dE = function() {
		var v7;
		this.a1C = 700,
			function(v7) {
				var gG = v7.aOI;
				if (v7.aOJ = [], aOL = [], a2.hm)
					for (var a0 = 0; a0 <= a2.yu; a0++) v7.aOJ.push(aOO(gG, bU.aMa[bU.uu[a0]])), aOL.push(aOO(gG >> 1, bU.aMa[bU.uu[a0]]));
				else v7.aOJ.push(aOO(gG, bU.aMa[0])), v7.aOJ.push(aOO(gG, bU.aMa[4])), aOL.push(aOO(gG >> 1, bU.aMa[0]))
			}(this),
			function(v7, aOR) {
				var a0, aOH = v7.aOH,
					gN = b2.ku.getContext(aOH, !0),
					ey = a2.f2,
					gG = v7.aOI >> 1;
				gN.imageSmoothingEnabled = !1, gN.setTransform(1, 0, 0, 1, 0, 0), aOR && gN.clearRect(0, 0, aOH.width, aOH.height);
				for (a0 = a2.iq; a0 < ey; a0++) aNe(a0, gN, aOL, gG)
			}(this, null !== (v7 = this).aOH && v7.aOH.width === bI.eT - 2 && v7.aOH.height === bI.eU - 2 || (v7.aOH = b2.ku.rg(bI.eT - 2, bI.eU - 2), !1)), a2.g0 || this.yp()
	}, this.aMZ = aOO, this.yp = function() {
		for (var ey = a2.iq, gG = this.aOI, aOJ = this.aOJ, gN = b2.ku.getContext(this.aOH, !0), a0 = 0; a0 < ey; a0++) aNe(a0, gN, aOJ, gG)
	}
}

function cr() {
	function aOS(player) {
		a2.g0 ? (aA3(player), aCn(), a2.jE && a2.nr.hb()) : au.aCl(player)
	}
	this.nH = function(player) {
		return !!aB.a05(player) && (aC.ul(player, player === a2.et ? 21 : 22), aOS(player), !0)
	}, this.no = function(player) {
		1 === a2.uZ && 0 !== aX.kX[player] && 2 !== aX.y1[player] && aOS(player), a2.uc--, a2.ub--, aC.ul(player, 4), b2.eo.fm(2) && aL.kH(!0)
	}
}

function d1() {
	this.a7w = ["rgba(130,130,130,0.88)", "rgba(130,12,12,0.88)", "rgba(12,130,12,0.88)", "rgba(12,12,130,0.88)", "rgba(130,130,12,0.88)", "rgba(130,12,130,0.88)", "rgba(12,130,130,0.88)", "rgba(130,130,130,0.88)", "rgba(0,0,0,0.88)"], this.a4V = [p
		.lv, "rgb(255,120,120)", "rgb(0,230,0)", "rgb(150,150,255)", "rgb(240,240,25)", "rgb(255,70,255)", "rgb(25,240,240)", p.lv, "rgb(170,170,170)"
	], this.aOT = [p.lv, "rgb(255,0,0)", "rgb(0,255,0)", "rgb(0,0,255)", "rgb(255,255,0)", "rgb(255,0,255)", "rgb(0,255,255)", p.lv, p.l0], this.aOU = [p.l0, p.lv, p.lv, p.lv, p.l0, p.l0, p.l0, p.l0, p.lv];
	var aOV = ["255,255,255", "0,0,0", "255,4,4", "200,4,4", "4,255,4", "4,180,4", "255,195,195", "90,3,3", "200,255,200", "3,84,3"],
		aOW = (this.aCJ = ["rgba(" + aOV[0] + ",", "rgba(" + aOV[1] + ",", "rgba(" + aOV[2] + ",", "rgba(" + aOV[3] + ",", "rgba(" + aOV[4] + ",", "rgba(" + aOV[5] + ",", "rgba(" + aOV[6] + ",", "rgba(" + aOV[7] + ",", "rgba(" + aOV[8] + ",",
			"rgba(" + aOV[9] + ","
		], this.aCK = ["rgb(" + aOV[0] + ")", "rgb(" + aOV[1] + ")", "rgb(" + aOV[2] + ")", "rgb(" + aOV[3] + ")", "rgb(" + aOV[4] + ")", "rgb(" + aOV[5] + ")", "rgb(" + aOV[6] + ")", "rgb(" + aOV[7] + ")", "rgb(" + aOV[8] + ")", "rgb(" + aOV[
			9] + ")"
		], this.uw = null, this.aMa = [
			[255, 255, 255, 180],
			[255, 0, 0, 180],
			[0, 255, 0, 180],
			[50, 50, 255, 180],
			[255, 255, 0, 180],
			[255, 0, 255, 180],
			[0, 255, 255, 180],
			[255, 255, 255, 180],
			[0, 0, 0, 180]
		], [
			[255, 255, 255],
			[255, 0, 0],
			[0, 255, 0],
			[0, 0, 255],
			[255, 255, 0],
			[255, 0, 255],
			[0, 255, 255],
			[255, 255, 255],
			[0, 0, 0]
		]);
	this.uu = [0, 1, 2, 3, 4, 5, 6, 7, 8], this.im = new Uint8Array(a2.f2), this.vM = null, this.aOX = null, this.dF = function() {
		this.uw = [L(331), L(332), L(333), L(334), L(335), L(336), L(337), L(331), L(338)]
	}, this.dE = function(t1) {
		this.im.fill(0), this.aOY(), a2.hm && (ay.j8 && ay.j9.aAm ? this.a9M() : 9 === a2.jC ? this.aOZ() : this.hb(t1))
	}, this.a9M = function() {
		var a0, ey = a2.sL;
		for (this.uu = [0, 1, 2, 3, 4, 5, 6, 7, 8], a0 = 0; a0 < ey; a0++) this.im[a0] = ay.j9.aAm[a0]
	}, this.aOY = function() {
		for (var a0 = this.uu.length - 1; 0 <= a0; a0--) this.uu[a0] = a0;
		this.vM = [], this.aOX = []
	}, this.aOZ = function() {
		for (var a0 = a2.iq + ap.aCc - 1; 0 <= a0; a0--) this.im[a0] = 1;
		for (a0 = a2.iq + ap.aCc; a0 < a2.f2; a0++) this.im[a0] = 2;
		this.uu[1] = 7, this.uu[2] = 8
	}, this.hb = function(t1) {
		var gZ = new Uint8Array(a2.iq),
			ga = new Uint8Array(a2.iq),
			aOa = new Uint16Array(8),
			aOb = new Uint16Array(this.uu.length);
		this.aOc(t1, gZ, ga, aOa), this.a9K(aOa), a2.jE || this.aOd(aOb, gZ, ga), this.aOe(gZ, ga, aOb), a2.jE ? this.aOf() : this.aOg()
	}, this.aOc = function(t1, gZ, ga, aOh) {
		for (var i5, d, aOi, ey = this.uu.length - 1, e6 = new Uint16Array(ey), a0 = a2.iq - 1; 0 <= a0; a0--) {
			for (i5 = ey; 1 <= i5; i5--) e6[i5 - 1] = Math.abs(4 * t1[a0].a8c[0] - aOW[i5][0]) + Math.abs(4 * t1[a0].a8c[1] - aOW[i5][1]) + Math.abs(4 * t1[a0].a8c[2] - aOW[i5][2]);
			for (aOi = 768, i5 = ey - 1; 0 <= i5; i5--) e6[d = (i5 + a0) % ey] < aOi && (aOi = e6[d], gZ[a0] = d);
			for (aOh[gZ[a0]] += 4, aOi = 768, i5 = ey - 1; 0 <= i5; i5--) e6[d = (i5 + a0) % ey] < aOi && d !== gZ[a0] && (aOi = e6[d], ga[a0] = d);
			aOh[ga[a0]]++
		}
	}, this.a9K = function(aOh) {
		for (var i5, jc, ey = this.uu.length - 1, a0 = ey; 0 <= a0; a0--) this.uu[a0] = a0;
		for (a0 = ey - 1; 0 <= a0; a0--) aOh[a0]++;
		for (a0 = 1; a0 <= ey; a0++) {
			for (jc = 0, i5 = 1; i5 < ey; i5++) aOh[i5] > aOh[jc] && (jc = i5);
			aOh[jc] = 0, this.uu[a0] = jc + 1
		}
	}, this.aOd = function(aOb, gZ, ga) {
		var a0, i5, aJD, il, f7, d, lZ, ps, aOj = this.uu.length - 1,
			os = new Uint16Array(aOj),
			aOk = [],
			a2S = Math.max(a2.iq + 1 >> 1, 6);
		loop: for (a0 = 0; a0 < a2.iq; a0++)
			if (null !== (aJD = b2.l2.vQ(aX.vR[a0]))) {
				for (i5 = this.vM.length - 1; 0 <= i5; i5--)
					if (aJD === this.vM[i5] && this.aOX[i5].length < a2S) {
						this.aOX[i5].push(a0);
						continue loop
					} this.vM.push(aJD), aOk.push(!1), this.aOX.push([a0])
			}
		for (i5 = this.vM.length - 1; 0 <= i5; i5--) {
			for (f7 = -1, il = this.vM.length - 1; 0 <= il; il--) !aOk[il] && (-1 === f7 || this.aOX[il].length > this.aOX[f7].length) && (f7 = il);
			for (il = aOj - 1; 0 <= il; il--) os[il] = 1;
			for (il = this.aOX[f7].length - 1; 0 <= il; il--) os[gZ[this.aOX[f7][il]]] += 3, os[ga[this.aOX[f7][il]]]++;
			for (a0 = aOj - 1; 0 <= a0; a0--) {
				for (d = f7 % aOj, il = aOj - 1; 0 <= il; il--) os[il] > os[d] && (d = il);
				for (lZ = -1, il = a2.yu; 0 < il; il--)
					if (this.uu[il] === d + 1) {
						lZ = il;
						break
					} if (os[d] = 0, -1 !== lZ) {
					for (ps = 0, il = a2.yu; 0 < il; il--) aOb[lZ] > aOb[il] && ps++;
					if (ps !== a2.yu - 1) {
						for (il = this.aOX[f7].length - 1; 0 <= il; il--) aOb[lZ]++, this.im[this.aOX[f7][il]] = lZ;
						break
					}
				}
			}
			aOk[f7] = !0
		}
	}, this.aOe = function(gZ, ga, aOb) {
		for (var a0, gr, ey = this.uu.length - 1, border = bB.em(a2.iq, a2.yu), aOl = (0 < a2.iq % a2.yu && border++, new Uint8Array(1 + ey)), i5 = ey; 1 <= i5; i5--) aOl[this.uu[i5]] = i5;
		for (a0 = 0; a0 < a2.iq; a0++) gr = aOl[gZ[a0] + 1], 0 === this.im[a0] && gr <= a2.yu && aOb[gr] < border && (aOb[gr]++, this.im[a0] = gr);
		for (a0 = 0; a0 < a2.iq; a0++) gr = aOl[ga[a0] + 1], 0 === this.im[a0] && gr <= a2.yu && aOb[gr] < border && (aOb[gr]++, this.im[a0] = gr);
		for (i5 = a2.yu; 1 <= i5; i5--)
			for (a0 = a2.iq - 1; 0 <= a0 && !(aOb[i5] >= border); a0--) 0 === this.im[a0] && (aOb[i5]++, this.im[a0] = i5)
	}, this.aOf = function() {
		var a0, hz, aOh = new Uint16Array(a2.yu);
		for (aOh[a2.yu - 1] = a2.f2, a0 = a2.yu - 2; 0 <= a0; a0--) aOh[a0] = aQ.jG[a0].jM;
		for (aOh[0]--, hz = 0 === aOh[0] ? 1 : 0, a0 = a2.iq; a0 < a2.f2; a0++) this.im[a0] = hz + 1, aOh[hz]--, aOh[hz] <= 0 && hz++
	}, this.aOg = function() {
		for (var a0 = a2.iq; a0 < a2.f2; a0++) this.im[a0] = 1 + a0 % a2.yu
	}
}

function fP() {
	for (var fg, fh, a0 = eK - 1; 0 <= a0; a0--) fg = bB.em(eM[a0], 4) % bI.eT, fh = bB.em(eM[a0], 4 * bI.eT), aX.hK[eF] = aX.hK[eF] > fg ? fg : aX.hK[eF], aX.hM[eF] = aX.hM[eF] > fh ? fh : aX.hM[eF], aX.hL[eF] = aX.hL[eF] < fg ? fg : aX.hL[eF], aX
		.hN[eF] = aX.hN[eF] < fh ? fh : aX.hN[eF]
}

function ec() {
	var f7, f5, a0, ey = aX.ez[eF].length;
	loop: for (a0 = ey - 1; 0 <= a0; a0--) {
		for (f7 = 3; 0 <= f7; f7--)
			if (f5 = aX.ez[eF][a0] + eP[f7], aS.fA(f5) || aS.f8(f5) && aS.f9(f5) !== eF) {
				aS.hw(aX.ez[eF][a0], eF);
				continue loop
			} aX.ez[eF][a0] = aX.ez[eF][ey - 1], aX.ez[eF].pop(), ey--
	}
}

function ed() {
	var f7, f5, aOm, aOn, ey = aX.fG[eF].length;
	loop: for (var a0 = ey - 1; 0 <= a0; a0--) {
		for (aOm = aOn = !1, f7 = 3; 0 <= f7; f7--) {
			if (f5 = aX.fG[eF][a0] + eP[f7], aS.a9V(f5, eF)) continue loop;
			aOm = aOm || aS.g4(f5), aOn = aOn || aS.s0(f5)
		}
		aOm ? aX.fH[eF].push(aX.fG[eF][a0]) : aOn ? aX.fK[eF].push(aX.fG[eF][a0]) : aS.se(aX.fG[eF][a0], eF), aX.fG[eF][a0] = aX.fG[eF][ey - 1], aX.fG[eF].pop(), ey--
	}
}

function fE() {
	aX.eq[eJ] -= eK
}

function fF(border) {
	for (var ey = border.length, a0 = ey - 1; 0 <= a0; a0--) aS.sm(eJ, border[a0]) || (border[a0] = border[ey - 1], border.pop(), ey--)
}

function fI(border) {
	for (var ey = border.length, a0 = ey - 1; 0 <= a0; a0--) !aS.sm(eJ, border[a0]) && aS.f0(border[a0]) && (border[a0] = border[ey - 1], border.pop(), ey--)
}

function fJ(border) {
	for (var f7, f5, ey = border.length, a0 = ey - 1; 0 <= a0; a0--)
		for (f7 = 3; 0 <= f7; f7--)
			if (f5 = border[a0] + eP[f7], aS.a9V(f5, eJ)) {
				aX.fG[eJ].push(border[a0]), border[a0] = border[ey - 1], border.pop(), ey--;
				break
			}
}

function fL() {
	for (var f7, f5, a0 = eK - 1; 0 <= a0; a0--)
		for (f7 = 3; 0 <= f7; f7--) f5 = eM[a0] + eP[f7], aS.a9W(eJ, f5) && aS.a9X(f5) && (aX.fG[eJ].push(f5), aS.f1(f5, eJ))
}

function fM() {
	var fg, fh;
	loop: for (; aX.hM[eJ] < aX.hN[eJ];) {
		for (fg = aX.hL[eJ]; fg >= aX.hK[eJ]; fg--)
			if (aS.sm(eJ, 4 * (aX.hM[eJ] * bI.eT + fg))) break loop;
		aX.hM[eJ]++
	}
	loop: for (; aX.hM[eJ] < aX.hN[eJ];) {
		for (fg = aX.hL[eJ]; fg >= aX.hK[eJ]; fg--)
			if (aS.sm(eJ, 4 * (aX.hN[eJ] * bI.eT + fg))) break loop;
		aX.hN[eJ]--
	}
	loop: for (; aX.hK[eJ] < aX.hL[eJ];) {
		for (fh = aX.hN[eJ]; fh >= aX.hM[eJ]; fh--)
			if (aS.sm(eJ, 4 * (fh * bI.eT + aX.hK[eJ]))) break loop;
		aX.hK[eJ]++
	}
	loop: for (; aX.hK[eJ] < aX.hL[eJ];) {
		for (fh = aX.hN[eJ]; fh >= aX.hM[eJ]; fh--)
			if (aS.sm(eJ, 4 * (fh * bI.eT + aX.hL[eJ]))) break loop;
		aX.hL[eJ]--
	}
}

function gD(player, hs) {
	return 0 === bU.im[player] || bU.im[player] !== bU.im[hs]
}

function gB(player, hs) {
	for (var d, aOo = aU.eY(player), a0 = 0; a0 < aOo; a0++)
		if (0 === aU.eZ(player, a0))
			if ((d = aU.ee(player, a0)) === a2.f2) {
				if (hs === a2.f2) return !1;
				if (g9(hs)) return !0
			} else if (b2.eo.jf(d))
		if (hs === a2.f2) {
			if (g9(d)) return !0
		} else if (gE(hs, d)) return !0;
	return !1
}

function g9(player) {
	for (var a0, f6, ey = aX.fG[player].length, f7 = 3; 0 <= f7; f7--)
		for (f6 = eP[f7], a0 = 0; a0 < ey; a0++)
			if (aS.fA(aX.fG[player][a0] + f6)) return !0;
	return !1
}

function aA0(player) {
	for (var a0, f6, ey = aX.fG[player].length, f7 = 3; 0 <= f7; f7--)
		for (f6 = eP[f7], a0 = 0; a0 < ey; a0++)
			if (aS.hv(aX.fG[player][a0]) && aS.fA(aX.fG[player][a0] + f6)) return !0;
	return !1
}

function gE(y3, y4) {
	var a0, dq, f7, f6, f5, aMj = aX.fG[y3].length,
		aMk = aX.fG[y4].length;
	for (aMk < aMj && (dq = y3, y3 = y4, y4 = dq, dq = aMj, aMj = aMk, 0), f7 = 3; 0 <= f7; f7--)
		for (f6 = eP[f7], a0 = 0; a0 < aMj; a0++)
			if (f5 = aX.fG[y3][a0] + f6, aS.f8(f5) && aS.f9(f5) === y4) return !0;
	return !1
}

function aA1(y3, y4) {
	for (var a0, f6, f5, aMj = aX.fG[y3].length, f7 = 3; 0 <= f7; f7--)
		for (f6 = eP[f7], a0 = 0; a0 < aMj; a0++)
			if (aS.hv(aX.fG[y3][a0]) && (f5 = aX.fG[y3][a0] + f6, aS.f8(f5)) && aS.f9(f5) === y4) return !0;
	return !1
}

function aOp() {
	this.hb = function() {
		aD.hb(), aO.hb(), an.hb(), aq.k9.hb(), am.a7R(), bT.dL && (bT.dL = !1, aP.kl())
	}
}

function aOq() {
	this.dp = bT.dp, this.kf = 0, this.aOr = 0, this.a7M = 0, this.aOs = null, this.aOt = 7, this.a1D = 0, this.dE = function() {
		this.a7M = 0, this.aOs = [], this.kf = 0, this.aOr = 0
	}, this.aIw = function(a1) {
		var a0;
		if (a2.g0) this.a58(a1);
		else if (this.aOs.push(a1), 2 === a2.uZ) {
			for (a0 = 0; a0 < this.aOs.length; a0++) b0.mt.hb(this.aOs[a0]);
			this.aOs = []
		}
	}, this.a58 = function(a1) {
		b0.mt.hb(a1), b1.hb(), aL.a58(this.a7M), this.a7M === a2.yv ? (a2.nr.hb(), this.a7M = 0, this.kf = 0, this.aOr = 0, this.dp = bT.dp) : (this.a7M++, aW.yo(), aW.kH(!0), bP.a5b())
	}, this.hb = function() {
		an.hb(), a2.g0 ? (bT.dL = aL.a58(-1) || bT.dL, kJ()) : (0 !== this.kf || bT.dp >= this.dp && (this.dp += bT.a57 * Math.floor(1 + (bT.dp - this.dp) / bT.a57), 2 === a2.uZ ? k7() : this.aOu(), this.kf++, 27 < bT.dp - this.a1D)) && this
		.aOv(), kE(), bT.dL && (bT.dL = !1, sp()), this.a1D = bT.dp
	}, this.aOv = function() {
		bT.dL = !0, kG(), this.kf = 0
	}, this.aOu = function() {
		var ql, a0;
		if (this.aOr !== 7 * this.a7M) kA(), bP.a5b();
		else {
			ql = !1;
			loop: for (; this.aOw() && (ql = !0, kA(), 2 !== a2.uZ) && 0 < this.aOs.length;)
				for (a0 = this.aOt - 2; 0 <= a0; a0--)
					if (kA(), 2 === a2.uZ) break loop;
			ql ? bP.a5b() : (k7(), bP.yr())
		}
	}, this.aOw = function() {
		return 0 < this.aOs.length && (this.a7M++, b0.mt.hb(this.aOs[0]), this.aOs.shift(), !0)
	}
}

function aOx() {
	var aOy, aOz, aP0, a7M, aP1, kf = 0,
		dp = bT.dp;

	function aP4() {
		! function() {
			if (!a2.g0) return;
			if (a2.jE) return;
			if (aP1 % 7 != 0) aP1++;
			else if (a7M === a2.yv) {
				if (!aP7()) return;
				aL.a58(a7M), a2.nr.hb()
			} else {
				if (!aP7()) return;
				aP1++, a7M++, aW.yo(), aW.kH(!0)
			}
			return 1
		}() && aP7() && kA()
	}

	function aP5() {
		kf = 0, (a2.g0 ? (bT.dL = aL.a58(a7M - (aP1 % 7 == 0 ? 0 : 1) + aP1 % 7 / 7) || bT.dL, kJ) : aB.fl || !b3.zG ? kJ : (bT.dL = !0, kG))()
	}

	function aP7() {
		var a0, ey, aP8 = b1.np.aJz,
			e7 = b1.np.aK0,
			e9 = b1.np.aK1,
			eB = b1.np.aK2,
			aP9 = b1.np.aK3,
			aPA = b1.np.aK4;
		if (!(aOy >= aPA.length)) {
			if (aPA = aPA[aOy], aP9[aOy]) {
				for (ey = aOz + aPA, a0 = aOz; a0 < ey; a0++) b0.mt.nc(aP8[a0], e7[a0], e9[a0], eB[a0]);
				aOz += aPA, aOy++
			} else ++aP0 >= aPA && (aOy++, aP0 = 0);
			return 1
		}
		aC.vx("Replay file smaller than expected."), b3.wt(!1), a2.uZ = 2
	}
	this.aOr = 0, this.dE = function() {
		aP1 = a7M = aP0 = aOz = aOy = 0
	}, this.hb = function() {
		var aN6;
		an.hb(), b3.a2e() < 1.7 ? 0 === kf ? bT.dp >= dp && (aN6 = bT.a57 / b3.a2e(), dp += aN6 * Math.floor(1 + (bT.dp - dp) / aN6), 2 === a2.uZ || aB.fl || !b3.zG ? k7() : (aP4(), bP.a5b()), kf++) : aP5() : function() {
			var aN6;
			if (bT.dp >= dp)
				if (2 === a2.uZ || aB.fl || !b3.zG) k7(), dp = bT.dp;
				else {
					for (aN6 = bT.a57 / b3.a2e(), 16 < (bT.dp - dp) / aN6 && (dp = bT.dp - 16 * aN6); bT.dp >= dp && 2 !== a2.uZ;) dp += aN6, aP4();
					bP.a5b()
				} aP5()
		}(), kE(), bT.dL && (bT.dL = !1, sp())
	}, this.uj = function() {
		aOy !== b1.np.aK4.length && aOy + 1 !== b1.np.aK4.length && aC.vx("Replay file larger than expected.")
	}
}

function aPB() {
	var kf = 0,
		dp = bT.dp;
	this.aOr = 0, this.hb = function() {
		an.hb(), a2.g0 ? kJ() : 0 === kf ? bT.dp >= dp && (dp += bT.a57 * Math.floor(1 + (bT.dp - dp) / bT.a57), 2 === a2.uZ || aB.fl ? k7() : (kA(), bP.a5b()), kf++) : ((aB.fl ? kJ : (bT.dL = !0, kG))(), kf = 0), kE(), bT.dL && (bT.dL = !1,
		sp())
	}
}

function d8() {
	this.ui = null, this.dL = !1, this.dp = 0, this.a57 = 56;
	var aPC = 0;

	function aPD() {
		bT.dp = aPC = performance.now(), bT.ui.hb(), window.requestAnimationFrame(aPD)
	}
	this.dE = function() {
		this.zE(), window.requestAnimationFrame(aPD), this.dp = performance.now()
	}, this.z7 = function() {
		a2.fk ? (this.ui = new aOx, this.ui.dE()) : a2.jE ? this.ui = new aPB : (this.ui = new aOq, this.ui.dE())
	}, this.zE = function() {
		this.ui = new aOp, this.dL = !0
	}, this.hb = function() {
		this.ui.aOr++
	}, this.er = function() {
		return this.ui.aOr
	}, this.aIe = function() {
		var dq = performance.now();
		dq < aPC + 1e3 || (this.dp = dq, this.ui.hb())
	}
}

function cb() {
	var lG = 0,
		aPE = !0;

	function aPG(oE) {
		8 !== aP.vt() || 2 !== aX.y1[a2.et] && (0 !== aX.kX[a2.et] || a2.g0) || aC.a0s(oE)
	}
	this.hb = function() {
		var dq, a1G;
		bT.dp > lG && (lG = bT.dp + 2500, dq = new Date, a1G = dq.getUTCSeconds(), aPE ? a1G < 45 && (aPE = !1) : a1G < 45 || (aPE = !0, (a1G = dq.getUTCMinutes() + 1) % 15 == 0 && aPG(30 === a1G ? "Upcoming Battle Royale Contest!" :
			"Upcoming Alliance Contest!")))
	}
}

function cT() {
	var kq, kr, ks, kt, aPH = 0,
		aPI = 0;

	function aPK() {
		return Math.pow(Math.pow(ks - kq, 2) + Math.pow(kt - kr, 2), .5)
	}

	function aPJ(d) {
		kq = an.oZ * d.touches[0].clientX, kr = an.oZ * d.touches[0].clientY, ks = an.oZ * d.touches[1].clientX, kt = an.oZ * d.touches[1].clientY
	}
	this.wJ = function(d) {
		return 1 < d.touches.length ? (aPI = bT.dp, aPH = 3, aPJ(d), aA.pr(), !0) : (aPH = 0, !1)
	}, this.wK = function(d) {
		var aDV, gp, gq;
		return 0 !== a2.uZ && 1 < d.touches.length && (aPH = Math.max(aPH - 1, 0), a7.le() && (aDV = aPK(), aPJ(d), d = aPK(), gp = Math.floor((kq + ks) / 2), gq = Math.floor((kr + kt) / 2), aH.a34(gp, gq, Math.max(.125, d) / Math.max(.125,
			aDV)), bT.dL = !0), !0)
	}, this.wi = function() {
		var fg, fh;
		return !!(aPH && (aPH = 0, bT.dp < aPI + 500)) && (fg = (kq + ks) / 2, fh = (kr + kt) / 2, aA.wb(fg, fh), aA.click(fg, fh, !0) && (bT.dL = !0), !0)
	}
}

function ck() {
	this.size = 0, this.kf = 0, this.a1 = null, this.dE = function(a1) {
		this.kf = 0, this.a1 = a1, this.size = a1.length
	}, this.w5 = function() {
		this.a1 = null
	}, this.nb = function(size) {
		for (var ds = 0, a1 = this.a1, le = this.kf + size - 1, a0 = this.kf; a0 <= le; a0++) ds |= (a1[a0 >> 3] >> 7 - (7 & a0) & 1) << le - a0;
		return this.kf += size, this.kf > 8 * this.size && console.log("error unwrapper"), ds
	}, this.aJ9 = function(size) {
		var i5 = size >> 1;
		return (1 << i5) * this.nb(size - i5) + this.nb(i5)
	}, this.aPL = function(size) {
		for (var e6 = new Array(size), a0 = 0; a0 < size; a0++) e6[a0] = this.nb(10);
		return a9.rb(e6)
	}, this.aJ8 = function(aKP) {
		return this.size === b4.aJ3(aKP)
	}
}

function d3() {
	this.aLJ = 0, this.aLK = 0, this.aLF = 0, this.aLG = 0, this.aLH = 0, this.aLI = 0, this.a5c = [0, 0, 0, 0], this.ld = function() {
		this.aLJ = aH.kw(), this.aLK = aH.kx(), this.aLF = -this.aLJ, this.aLG = -this.aLK, this.aLH = an.u / h8, this.aLI = an.iF / h8, this.a5c[0] = Math.floor(this.aLF), this.a5c[1] = Math.floor(this.aLG), this.a5c[2] = Math.floor(this.a5c[
			0] + this.aLH + 1), this.a5c[3] = Math.floor(this.a5c[1] + this.aLI + 1), bP.a5Z = !0
	}
}

function cU() {
	var a1n, lG;
	this.dE = function() {
		a1n = 1, lG = 0
	}, this.hb = function() {
		0 < a1n && (lG = 0 === lG ? bT.dp + 16 : lG, a1n = (a1n -= .001 * (bT.dp - lG)) < 0 ? 0 : a1n, lG = bT.dp, bT.dL = !0)
	}, this.kl = function() {
		0 < a1n && (kv.fillStyle = "rgba(0,0,0," + a1n + ")", kv.fillRect(0, 0, an.u, an.iF))
	}
}

function cX() {
	function aPO(map, fg, fh, u, iF) {
		map >= bI.aAg || (bI.s9 === map && (kv.fillStyle = p.mY, kv.fillRect(fg, fh, u, iF), kv.fillStyle = p.lv), kv.strokeRect(fg, fh, u, iF), kv.fillText(bI.j9.s8[map].name, Math.floor(fg + .5 * u), Math.floor(fh + .55 * iF)))
	}
	this.tE = !1, this.a8S = [0, 0, 0, 0], this.show = function() {
		this.tE = !0, this.resize(), bT.dL = !0
	}, this.resize = function() {
		var aMj = bB.em(bI.aAg + bI.aAg % 2, 2),
			aMj = an.iF - aMj * bQ.gap;
		m.n.te() ? this.a8S[2] = Math.floor(.75 * an.min) : this.a8S[2] = Math.floor(.5 * an.min), this.a8S[3] = Math.floor(1.25 * this.a8S[2]), this.a8S[3] > aMj && (this.a8S[3] = aMj, this.a8S[2] = Math.floor(aMj / 1.2)), this.a8S[0] = Math
			.floor((an.u - this.a8S[2]) / 2), this.a8S[1] = Math.floor((an.iF - this.a8S[3]) / 2)
	}, this.wF = function(fg, fh) {
		return !(fg < this.a8S[0] || fh < this.a8S[1] || fg > this.a8S[0] + this.a8S[2] || fh > this.a8S[1] + this.a8S[3])
	}, this.fo = function(fg, fh) {
		var a2S, aMj = bB.em(bI.aAg + bI.aAg % 2, 2);
		return bT.dL = !0, fg < this.a8S[0] || fh < this.a8S[1] || fg > this.a8S[0] + this.a8S[2] || fh > this.a8S[1] + this.a8S[3] ? !(this.tE = !1) : (a2S = Math.floor(.17 * this.a8S[3]), fh < this.a8S[1] + a2S ? fg > this.a8S[0] + this.a8S[
			2] - a2S && (this.tE = !1) : (fh = (fh = Math.floor(aMj * (fh - this.a8S[1] - a2S - .00576 * an.oV) / (this.a8S[3] - a2S - .01152 * an.oV))) < 0 ? 0 : aMj - 1 < fh ? aMj - 1 : fh, fg > this.a8S[0] + this.a8S[2] / 2 && (fh += aMj),
				fh >= bI.aAg || bI.w(fh, Math.floor(16384 * Math.random()))), !0)
	}, this.kl = function() {
		var a0, kr, a2S = Math.floor(.17 * this.a8S[3]),
			aMj = bB.em(bI.aAg + bI.aAg % 2, 2),
			gap = .6 * .01152 * an.oV,
			a8g = (this.a8S[3] - a2S - (aMj + 1) * gap) / aMj,
			pd = Math.floor((this.a8S[2] - 3 * gap) / 2);
		for (kv.lineWidth = bQ.th, b2.ku.textAlign(kv, 1), b2.ku.textBaseline(kv, 1), kv.fillStyle = p.ls, kv.fillRect(this.a8S[0], this.a8S[1] + a2S, this.a8S[2], this.a8S[3] - a2S), kv.fillStyle = p.mY, kv.fillRect(this.a8S[0], this.a8S[1],
				this.a8S[2], a2S), kv.strokeStyle = p.lv, kv.strokeRect(this.a8S[0], this.a8S[1], this.a8S[2], this.a8S[3]), kv.fillStyle = p.lv, kv.fillRect(this.a8S[0], this.a8S[1] + a2S, this.a8S[2], 2), kv.font = b2.ku.kz(1, .48 * a2S), kv
			.fillText("Maps", Math.floor(this.a8S[0] + this.a8S[2] / 2), Math.floor(this.a8S[1] + .55 * a2S)), kv.font = b2.ku.kz(1, .48 * a8g), a0 = aMj - 1; 0 <= a0; a0--) kr = Math.floor(this.a8S[1] + a2S + gap + a0 * (a8g + gap)), aPO(a0,
			this.a8S[0] + gap, kr, pd, a8g), aPO(a0 + aMj, this.a8S[0] + pd + 2 * gap, kr, pd, a8g);
		aB.a06(Math.floor(this.a8S[0] + this.a8S[2] - .7 * a2S), Math.floor(this.a8S[1] + .3 * a2S), Math.floor(.4 * a2S)), kv.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function v() {
	this.size = 0, this.kf = 0, this.a1 = null, this.dE = function(a1) {
		this.kf = 0, this.a1 = a1, this.size = a1.length
	}, this.w = function(aKP) {
		return this.dE(new Uint8Array(this.aJ3(aKP))), this.a1
	}, this.w5 = function() {
		this.a1 = null
	}, this.x = function(size, a1I) {
		for (var a1 = this.a1, le = this.kf + size - 1, a0 = this.kf; a0 <= le; a0++) a1[a0 >> 3] |= (a1I >> le - a0 & 1) << 7 - (7 & a0);
		this.kf += size, this.kf > 8 * this.size && console.log("error wrapper")
	}, this.aJ2 = function(size, a1I) {
		var i5 = size >> 1,
			f7 = 1 << i5;
		this.x(size - i5, bB.em(a1I, f7)), this.x(i5, a1I % f7)
	}, this.aPP = function(size) {
		for (var a1 = this.a1, le = this.kf + size, a0 = this.kf; a0 < le; a0++) a1[a0 >> 3] &= 255 ^ 128 >>> (7 & a0)
	}, this.aJ3 = function(aKP) {
		return aKP + 7 >> 3
	}, this.aPQ = function(e6, i1, le, aPR) {
		for (var a0 = i1; a0 < le; a0++) this.x(aPR, e6[a0])
	}
}
a(), self.aiCommand746 = function(ds) {
	0 === ds ? ba() : 1 !== ds || !m || 1 !== m.id || m.dt < 14 || b9.du()
}, setTimeout(ba, 1e4), window.onload = function() {
	ba()
};