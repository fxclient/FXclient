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
	b2, p, b3, b4, b5, b6, b7, b8, b9, bA, bB, bC, bD, bE, bF, bG, bH, bI, bJ, i, bK, bL, bM, bN, bO, bP, bQ, bR, bS, bT, bU, bV, bW, m, bX, bY, bZ, g, ba, dR, dS, dT, y, dU, z, eG, eH, eI, eJ, eK, eL, eM, eN, eO, eP, eQ, eR, eS, eT, hA, h9, hB, a27,
	jz, iZ, iv, it, wK, kx, sy, a5m, zE, zF;

function bb(bc) {
	e && !bc || (be(), bB = new bf, bA = new bg, b2 = new bh, p = new bi, a2 = new bj, az = new bk, b5 = new bl, b6 = new bm, a3 = new bn, a4 = new bo, a5 = new bp, a6 = new bq, a7 = new br, a8 = new bs, a9 = new bt, aA = new bu, aB = new bv, aC =
		new bw, aD = new bx, aE = new by, aF = new bz, aG = new c0, aH = new c1, aI = new c2, aJ = new c3, aK = new c4, aL = new c5, aM = new c6, aN = new c7, aO = new c8, aP = new c9, aQ = new cA, aR = new cB, aS = new cC, aT = new cD, aU =
		new cE, aV = new cF, aY = new cG, aW = new cH, aX = new cI, aZ = new cJ, ap = new cK, aa = new cL, ac = new cM, ad = new cN, ae = new cO, aq = new cP, ao = new cQ, af = new cR, ab = new cS, ag = new cT, ah = new cU, ai = new cV, an =
		new cW, aj = new cX, ak = new cY, al = new cZ, am = new ca, ar = new cb, at = new cc, au = new cd, av = new ce, aw = new cf, ax = new cg, ay = new ch, b0 = new ci, b1 = new cj, b3 = new ck, b4 = new v, b7 = new cl, b8 = new cm, b9 =
		new cn, bC = new co, bD = new cp, bE = new cq, bF = new cr, bG = new cs, bH = new ct, bI = new cu, bJ = new cv, i = new cw, bK = new cx, m = new cy, e = new cz, bX = new d0, bY = new d1, bV = new d2, bW = new d3, bP = new d4, bQ = new d5,
		bL = new d6, bM = new d7, bS = new d8, bT = new d9, bU = new dA, bZ = new dB, bR = new dC, g = new dD, ba = new dE, e.dG(), m.dG(), an.dH(), bY.dG(), az.dG(), az.dI(), ba.dG(), b2.dG(), aT.dG(), bL.dG(), aq.dG(), b5.dG(), b6.dG(), bI
	.dG(), i.dG(), bN = new dJ, an.dG(), m.n.dK(), bU.dG(), bR.dG(), bM.dG(), bO = new dL, ao.dG(), aV.dM(), bK.dG(), ac.dG(), aP.dG(), ax.dG(), aI.dG(), aZ.dG(), b9.dG(), aR.dG(), bU.dN = !0, setTimeout(function() {
			bI.w(2, 14071)
		}, 0), i.j(5, 5), b8.dO() || m.n.dP(), an.dQ(), e.f = 1)
}

function cz() {
	this.dV = 1066, this.dG = function() {
		dR = 2, dT = 32, dS = "3 Sep 2024 [1.99.7.2]", y = true, z = function() {
			try {
				return window.self !== window.top
			} catch (d) {
				return !0
			}
		}(), dU = (new Date).getTime() % 1024
	}, this.f = 0
}

function dE() {
	this.id = new dX, this.dG = function() {
		this.id.dG()
	}
}

function dX() {
	this.dG = function() {
		0 === bY.dY.data[181].value && (bY.dY.dZ(180, Math.floor(Math.random() * bB.pow(30))), bY.dY.dZ(181, Math.floor((new Date).getTime() / 36e5)))
	}
}

function cx() {
	this.da = new db, this.dc = new dd, this.dG = function() {
		m.n.de()
	}
}

function db() {
	function dp() {}
	this.dG = function() {}, this.dn = function() {
		return !!dp() && (aiptag.cmd.player.push(function() {
			aiptag.adplayer.startVideoAd()
		}), !0)
	}, this.hideCMPButton = function() {
		"undefined" != typeof aipAPItag && aipAPItag.hideCMPButton && aipAPItag.hideCMPButton()
	}, this.showCMPButton = function() {
		"undefined" != typeof aipAPItag && aipAPItag.showCMPButton && aipAPItag.showCMPButton()
	}, this.showCMPScreen = function() {
		dp() && aipAPItag.showCMPScreen()
	}
}

function dd() {
	var dr = 2e4;
	this.show = function() {
		if (bU.dr < dr) return !1;
		dr = bU.dr + 135e4, 2 === dR && m.n.dt(Math.floor(135e4))
	}
}

function cq() {
	this.dx = new Uint16Array(2), this.dy = new Uint16Array(2), this.dz = new Uint32Array(2), this.e0 = new Uint32Array(2), this.e1 = new Uint8Array(4), this.e2 = new Uint8Array(4), this.e3 = new Uint32Array(5), this.e4 = new Uint32Array(8), this
		.e5 = new Uint16Array(16), this.e6 = new Uint16Array(512), this.e7 = function(e8, e9) {
			return e8[0] = e9, e8
		}, this.eA = function(e8, e9, eB) {
			return e8[0] = e9, e8[1] = eB, e8
		}, this.eC = function(e8, e9, eB, eD) {
			return e8[0] = e9, e8[1] = eB, e8[2] = eD, e8
		}, this.eE = function(e8, e9, eB, eD, eF) {
			return e8[0] = e9, e8[1] = eB, e8[2] = eD, e8[3] = eF, e8
		}
}

function eU() {
	eM = 0, eN = 2048, eO = new Uint32Array(4 * eN), eP = 0, eQ = new Uint32Array(eN), (eR = new Int32Array(4))[0] = -4 * bI.eV, eR[1] = 4, eR[2] = -eR[0], eR[3] = -eR[1], eS = new Uint8Array(bI.eV * bI.eW)
}

function eX(player) {
	eH = player, eT = !1, eY(), eZ();
	for (var a0 = aU.ea(eH) - 1; 0 <= a0; a0--) 0 === aU.eb(eH, a0) && (eG = a0, ec());
	eT && ed()
}

function ed() {
	ee(), ef()
}

function ec() {
	eL = aU.eg(eH, eG), eI = aU.eh(eH, eG), eJ = aU.ei(eH, eG), ej(), (0 !== eM && (el(), em()) ? en : ek)()
}

function em() {
	var ds;
	return (eK = bB.eo(eI, eM)) > a2.ep || !!eJ && ((ds = eM * (1 + a2.ep)) <= (eI += b2.eq.er(eH, ds - eI)) || aX.es[eH] < 5 * bU.et())
}

function el() {
	for (var a0 = eM - 1; 0 <= a0; a0--) eS[bB.eo(eO[a0], 4)] = 0
}

function ek() {
	var ds;
	1 === aU.ea(eH) && a4.eu(eH), eH !== a2.ev ? (aX.ew[eH] += eI, aV.ex(eH)) : (ds = aX.ew[eH], aX.ew[eH] += eI, aV.ex(eH), bS.ey[13] -= aX.ew[eH] - ds), aU.ez(eH, eG)
}

function eY() {
	var a0, f0 = aX.f1[eH].length;
	for (eP = 0, a0 = (eN < f0 ? eN : f0) - 1; 0 <= a0; a0--) eQ[eP++] = aX.f1[eH][a0]
}

function eZ() {
	for (var a0 = aX.f1[eH].length - 1; 0 <= a0; a0--) aS.f2(aX.f1[eH][a0]) && aS.f3(aX.f1[eH][a0], eH);
	aX.f1[eH] = []
}

function ej() {
	eM = 0, (eL === a2.f4 ? f5 : f6)()
}

function f6() {
	for (var f7, f8, a0, f9 = 3; 0 <= f9; f9--)
		for (a0 = eP - 1; 0 <= a0; a0--) f7 = eQ[a0] + eR[f9], f8 = bB.eo(f7, 4), 0 === eS[f8] && aS.fA(f7) && aS.fB(f7) === eL && (eS[f8] = 1, eO[eM++] = f7)
}

function f5() {
	for (var f7, f8, a0, f9 = 3; 0 <= f9; f9--)
		for (a0 = eP - 1; 0 <= a0; a0--) f7 = eQ[a0] + eR[f9], f8 = bB.eo(f7, 4), 0 === eS[f8] && aS.fC(f7) && (eS[f8] = 1, eO[eM++] = f7)
}

function en() {
	fD() ? (fE(), eL !== a2.f4 && fF()) : ek()
}

function fF() {
	fG(), fH(aX.fI[eL]), fH(aX.fJ[eL]), fK(aX.f1[eL]), fL(aX.fJ[eL]), fL(aX.fM[eL]), fN(), fO()
}

function fE() {
	eT = !0, aU.fP(eH, eG, eI), aU.fQ(eH, eG), aX.es[eH] += eM, fR(), fS()
}

function fD() {
	return (eL === a2.f4 ? fT : fU)()
}

function fU() {
	var fV = eM * a2.ep,
		fW = fX(),
		fY = fZ(),
		fW = fV + 2 * fW + fY,
		fb = eK * eM;
	return fW < fb ? (eI -= fW, fc(fW - fV, fY), !0) : (eI -= fb, eJ && 0 === fY ? (fc(Math.max(fb - fV + b2.eq.er(eH, fW - fb + 1), 0), 0), !0) : (fc(fb - fV, fY), !1))
}

function fc(fb, fY) {
	if (0 < fY) {
		if (!(fY <= fb)) return aU.fd(eL, eH, fY - fb), void(fb = 0);
		aU.fd(eL, eH, 0), fb -= fY
	}
	fb = bB.eo(fb, 2), aX.ew[eL] >= fb ? aX.ew[eL] -= fb : aX.ew[eL] = 0
}

function fZ() {
	return aU.fe(eL, eH)
}

function fX() {
	return bB.eo(eM * aX.ew[eL], 1 + bB.eo(10 * aX.es[eL], 16))
}

function fT() {
	return eI -= eM * a2.ep, !0
}

function fS() {
	for (var a0 = eM - 1; 0 <= a0; a0--) aX.f1[eH].push(eO[a0]), aX.fI[eH].push(eO[a0]), aS.f3(eO[a0], eH)
}

function cv() {
	var ff = 0,
		fg = 0;
	this.fh = function(fi, fj) {
		ff = fi, fg = fj
	}, this.fk = function(fl) {
		a2.fm || aB.fn || (b2.eq.fo(0) || b2.eq.fo(1)) && b2.eq.fp(a2.ev) && (aG.fq(ff, fg) ? aG.fr = !1 : function(fl) {
			var ft = bC.fu(ff),
				fv = bC.fw(fg),
				fx = bC.fy(ft, fv),
				fz = bC.g0(fx);
			bC.g1(ft, fv) && (a2.g2 ? aS.f2(fz) && b0.g3.g4(fx) : aS.g5(fz) || (aS.g6(fz) || fl ? bD.g7.g8(a2.ev, fx) && b0.g3.g9(aG.gA(), fx) : aS.fC(fz) ? gB(a2.ev) ? b0.g3.gC(aG.gA(), a2.f4) : gD(a2.ev, a2.f4) ? ar.gE(a2.f4, aG.gA()) :
				bD.g7.g8(a2.ev, fx) && b0.g3.g9(aG.gA(), fx) : (ft = aS.fB(fz)) !== a2.ev && (gF(ft, a2.ev) ? gG(a2.ev, ft) ? b0.g3.gC(aG.gA(), ft) : gD(a2.ev, ft) ? ar.gE(ft, aG.gA()) : bD.g7.g8(a2.ev, fx) && b0.g3.g9(aG.gA(),
					fx) : bD.g7.g8(a2.ev, fx) && b0.g3.g9(aG.gA(), fx))))
		}(fl))
	}
}

function gH(gI, size, gJ, gK, font) {
	var a0, gN = .2,
		gO = document.createElement("canvas"),
		gP = gO.getContext("2d", {
			alpha: !1
		});
	for (gO.width = gI, gO.height = gI, gP.font = size + font, gP.textAlign = "center", gP.textBaseline = "middle", gP.fillStyle = "red", a0 = 0; a0 < gJ.length; a0++) gP.fillText(gJ[a0], .5 * gI, .5 * gI);
	return -1 < (gO = function(gL) {
		var a0, gR, f9 = gL.data;
		for (a0 = f9.length - 4; 0 <= a0; a0 -= 4)
			if (gR = f9[a0], gK <= gR) return Math.floor(a0 / (4 * gI));
		return -1
	}(gP.getImageData(0, 0, gI, gI))) && (gN = (gO - .5 * gI + .1 * size) / size), Math.max(gN, 0)
}

function co() {
	this.gS = new Int16Array(4), this.gT = new Int16Array(4), this.dG = function() {
		var a0;
		for (this.gS[0] = -bI.eV, this.gS[1] = 1, this.gS[2] = bI.eV, this.gS[3] = -1, a0 = 0; a0 < 4; a0++) this.gT[a0] = 4 * this.gS[a0]
	}, this.gU = function(gV, gW) {
		var gX = this.gY(gW) - this.gY(gV),
			gW = this.ga(gW) - this.ga(gV),
			gV = gX >>> 31 << 1;
		return 5 + gV + (1 - gV) * (1 - (gW >>> 31 << 1)) * (Math.abs(gX) - Math.abs(gW) >>> 31) & 3
	}, this.ge = function(gV, gW, gf) {
		return gf % 2 == 0 ? gf + (1 - gf) * (1 - (this.gY(gW) - this.gY(gV) >>> 31 << 1)) + 4 & 3 : gf + (2 - gf) * (1 - (this.ga(gW) - this.ga(gV) >>> 31 << 1)) + 4 & 3
	}, this.gh = function(f7, fx) {
		for (var gW, gi, gk = aX.fJ[f7], f0 = gk.length, u = bI.eV, gl = this.gY(fx), gm = this.ga(fx), gn = gk[0] >> 2, min = this.go(gl, gm, gn), a0 = 1; a0 < f0; a0++)(gi = (gi = gl - (gW = gk[a0] >> 2) % u) * gi + (gi = gm - ~~((.5 + gW) /
			u)) * gi) < min && (min = gi, gn = gW);
		return gn
	}, this.gp = function(player, fz) {
		return !aS.fC(fz) && player === aS.fB(fz)
	}, this.go = function(ft, fv, fx) {
		return (ft -= this.gY(fx)) * ft + (fv -= this.ga(fx)) * fv
	}, this.gq = function(gr, gs, gt) {
		gr = this.gv(gr) - this.gw(gt), gs = this.gy(gs) - this.gz(gt);
		return Math.sqrt(gr * gr + gs * gs)
	}, this.h0 = function(gV, gW) {
		var gu = this.gY(gV) - this.gY(gW),
			gV = this.ga(gV) - this.ga(gW);
		return Math.sqrt(gu * gu + gV * gV)
	}, this.h1 = function(gV, gW) {
		var gu = this.gY(gV) - this.gY(gW),
			gV = this.ga(gV) - this.ga(gW);
		return gu * gu + gV * gV
	}, this.h2 = function(h3, h4, h5, h6) {
		return (h3 -= h5) * h3 + (h4 -= h6) * h4
	}, this.h7 = function(f7, h8) {
		return bB.eo(h8 * aX.ew[f7], 1e3)
	}, this.gv = function(gr) {
		return 16 * (gr + h9) / hA
	}, this.gy = function(gs) {
		return 16 * (gs + hB) / hA
	}, this.fu = function(gr) {
		return Math.floor((gr + h9) / hA)
	}, this.fw = function(gs) {
		return Math.floor((gs + hB) / hA)
	}, this.g1 = function(ft, fv) {
		return 1 <= ft && 1 <= fv && ft < bI.eV - 1 && fv < bI.eW - 1
	}, this.gY = function(fx) {
		return fx % bI.eV
	}, this.ga = function(fx) {
		return bB.eo(fx, bI.eV)
	}, this.fy = function(ft, fv) {
		return fv * bI.eV + ft
	}, this.hC = function(fx) {
		var ft = this.gY(fx),
			fx = this.ga(fx);
		return 0 < ft && ft < bI.eV - 1 && 0 < fx && fx < bI.eW - 1
	}, this.g0 = function(fx) {
		return fx << 2
	}, this.hD = function(fx) {
		return bI.eV * this.ga(fx) * 256 + (this.gY(fx) << 4)
	}, this.hE = function(fx) {
		return this.hD(fx) + 8 + (bI.eV << 7)
	}, this.hF = function(gt) {
		return bI.eV * (this.gz(gt) >> 4) + (this.gw(gt) >> 4)
	}, this.hG = function(gt) {
		gt = this.hF(gt);
		return (this.gY(gt) >> 5) + bD.hH.hI * (this.ga(gt) >> 5)
	}, this.gw = function(gt) {
		return gt % (bI.eV << 4)
	}, this.gz = function(gt) {
		return bB.eo(gt, bI.eV << 4)
	}, this.hJ = function(fx, gf) {
		return fx + this.gS[gf]
	}, this.hK = function(fz, gf) {
		return fz + this.gT[gf]
	}, this.hL = function(player) {
		return this.fy(aX.hM[player] + aX.hN[player] >> 1, aX.hO[player] + aX.hP[player] >> 1)
	}, this.hQ = function(player) {
		return this.fy(ao.hR(aX.hM[player], aX.hN[player]), ao.hR(aX.hO[player], aX.hP[player]))
	}
}

function cS() {
	this.hS = new hT, this.hU = new hV, this.hW = new hX, this.performance = new hY, this.hZ = new ha, this.hb = new hc, this.dG = function() {
		this.hS.dG(), this.hW.dG(), this.performance.dG(), this.hZ.dG(), this.hb.dG()
	}, this.hd = function() {
		this.performance.hd(), this.hS.hd()
	}
}

function ha() {
	var he, hg = new Uint16Array(8);

	function hq(size, player) {
		for (var a0 = aX.f1[player].length - 1; size <= a0; a0--) aS.hy(aX.f1[player][a0], player)
	}
	this.dG = function() {
		he = 0
	}, this.hh = function(player, hi) {
		return bE.e4[1] = aX.f1[player].length, bE.e4[0] === a2.f4 ? ab.hZ.hj(player) : this.hk(player, bE.e4[0]), (0 !== bE.e4[1] || 0 !== aX.f1[player].length) && !(!hi && bE.e4[1] === aX.f1[player].length || (bE.e4[0] === a2.f4 ? aX.hl[
			player]++ : aX.hm[player]++, 0))
	}, this.hn = function(player) {
		a2.ho && (ab.hb.hp[player] = 1), hq(bE.e4[1], player), aU.hr(player, bE.dz[0], bE.e4[0]), a4.hs(player, !1)
	}, this.ht = function(player, hu, f0, hv) {
		var hw = bB.eo(12 * aX.ew[player], 1024);
		hv -= hv >= bB.eo(aX.ew[player], 2) ? hw : 0, hq(f0, player), aU.hr(player, hv, hu), aX.ew[player] -= hv + hw, a4.hs(player, !1)
	}, this.hk = function(player, hu) {
		for (var gf, a0 = aX.fI[player].length - 1; 0 <= a0; a0--)
			if (aS.hx(aX.fI[player][a0]))
				for (gf = 3; 0 <= gf; gf--)
					if (aS.fA(aX.fI[player][a0] + eR[gf]) && aS.fB(aX.fI[player][a0] + eR[gf]) === hu) {
						aX.f1[player].push(aX.fI[player][a0]);
						break
					}
	}, this.hj = function(player) {
		for (var a0 = aX.fI[player].length - 1; 0 <= a0; a0--)
			if (aS.hx(aX.fI[player][a0]))
				for (var gf = 3; 0 <= gf; gf--)
					if (aS.fC(aX.fI[player][a0] + eR[gf])) {
						aX.f1[player].push(aX.fI[player][a0]);
						break
					}
	}, this.hz = function(player, i0) {
		var a0, i1, gf, i2, f0 = aX.fI[player].length,
			gg = 256 <= f0 ? 12 : 32 <= f0 ? 6 : 1,
			i3 = f0 - 1 - ao.i4(gg);
		he = 0;
		loop: for (a0 = i3; 0 <= a0; a0 -= gg)
			for (gf = 3; 0 <= gf; gf--)
				if ((i2 = aS.fC(aX.fI[player][a0] + eR[gf]) ? a2.f4 : aS.fB(aX.fI[player][a0] + eR[gf])) === a2.f4 || aS.fA(aX.fI[player][a0] + eR[gf]) && i2 !== player && (i0 || gF(player, i2))) {
					for (i1 = he - 1; 0 <= i1; i1--)
						if (hg[i1] === i2) continue loop;
					if (hg[he] = i2, 8 <= ++he) return !0
				}
		return 0 < he
	}, this.i5 = function(player, i0) {
		var a0, gf, i2;
		for (he = 0, a0 = aX.fI[player].length - 1; 0 <= a0; a0--)
			for (gf = 3; 0 <= gf; gf--)
				if ((i2 = aS.fC(aX.fI[player][a0] + eR[gf]) ? a2.f4 : aS.fB(aX.fI[player][a0] + eR[gf])) === a2.f4 || aS.fA(aX.fI[player][a0] + eR[gf]) && i2 !== player && (i0 || gF(player, i2))) return hg[he++] = i2, !0;
		return !1
	}, this.i6 = function() {
		for (var i7, a0 = he - 1; 0 <= a0; a0--)
			if (hg[a0] === a2.f4) {
				for (he--, i7 = a0; i7 < he; i7++) hg[i7] = hg[i7 + 1];
				return !0
			} return !1
	}, this.i8 = function(player) {
		for (var i7, a0 = he - 1; 0 <= a0; a0--)
			if (aU.i9(player, hg[a0]))
				for (he--, i7 = a0; i7 < he; i7++) hg[i7] = hg[i7 + 1];
		return 0 === he
	}, this.iA = function() {
		for (var a0 = he - 1; 0 <= a0; a0--)
			if (b2.eq.iB(hg[a0])) return !0;
		return !1
	}, this.iC = function() {
		for (var a0 = he - 1; 0 <= a0; a0--) b2.eq.iB(hg[a0]) || (hg[a0] = hg[--he]);
		return 0 < he
	}, this.iD = function(player) {
		for (var i7, iE = hg[0], iF = aX.ew[iE] + aU.fe(iE, player), a0 = he - 1; 1 <= a0; a0--)(i7 = aX.ew[hg[a0]] + aU.fe(hg[a0], player)) < iF && (iE = hg[a0], iF = i7);
		return iE
	}, this.iG = function(player) {
		var iH, iI = hg[0];
		if (1 !== he)
			for (var iJ = bB.eo(aX.hN[player] + aX.hM[player], 2), iK = bB.eo(aX.hP[player] + aX.hO[player], 2), iL = iM(iJ - bB.eo(aX.hN[iI] + aX.hM[iI], 2)) + iM(iK - bB.eo(aX.hP[iI] + aX.hO[iI], 2)), a0 = he - 1; 1 <= a0; a0--)(iH = iM(iJ - bB
				.eo(aX.hN[hg[a0]] + aX.hM[hg[a0]], 2)) + iM(iK - bB.eo(aX.hP[hg[a0]] + aX.hO[hg[a0]], 2))) < iL && (iL = iH, iI = hg[a0]);
		return iI
	}, this.iN = function() {
		for (var iO = hg, iP = iO[0], ew = aX.ew, iQ = ew[iP], a0 = he - 1; 1 <= a0; a0--) {
			var f7 = iO[a0],
				i7 = ew[f7];
			iQ < i7 && (iP = f7, iQ = i7)
		}
		return iP
	}
}

function hc() {
	function ih(player, hu, iV) {
		3 <= iV && 2142 < bU.et() && (hu === a2.f4 || aX.ew[hu] < bB.eo(aX.ew[player], 20)) && a3.ia(player, 20)
	}

	function ik(player, hv, hu, iV) {
		3 <= iV && iV < 6 && bB.eo(aX.ew[player], 8) > aX.ew[hu] && (hv = Math.max(bB.eo(11 * aX.ew[hu], 5), bB.eo(aX.ew[player], 10)));
		iV = aX.f1[player].length;
		ab.hZ.hk(player, hu), ab.hZ.ht(player, hu, iV, hv)
	}

	function ig(player, hv) {
		var hu = a2.f4,
			f0 = aX.f1[player].length;
		ab.hZ.hj(player), aX.f1[player].length !== f0 && ab.hZ.ht(player, hu, f0, hv)
	}
	this.hp = new Uint8Array(a2.f4), this.dG = function() {
		this.hp.fill(0)
	}, this.iR = function(player, hv) {
		var iT, iV, iW, iX;
		a2.ho && (this.hp[player] = 0), aU.iS(player) && (iT = aV.iU(player), 3 <= (iV = a3.hv[player]) && iV < 6 && (hv = Math.max(aX.ew[player] - iT, hv)), iW = aX.fJ[player].length, iX = aX.fI[player].length, 30 * aX.es[player] > a2.iY && iZ[
			player] < 10 && 100 * iX <= iW && a3.ia(player, 10), a2.ho ? function(player, hv, iV, iT) {
			var hu;
			if (ab.hZ.hz(player, !1) || ab.hZ.i5(player, !1)) {
				if (ab.hb.hp[player] = 1, !ab.hZ.i8(player))
					if (ab.hZ.i6()) ig(player, hv), ih(player, a2.f4, iV);
					else {
						if (ao.ii(a3.ij[iV])) hu = ab.hZ.iD(player);
						else {
							if (ab.hZ.iA() && ao.ii(a3.il[iV]) && ab.hZ.iC(), 6 === iV) return ik(player, hv, ab.hZ.iN(), iV);
							hu = ab.hZ.iG(player)
						}
						ik(player, hv, hu, iV), ih(player, hu, iV)
					}
			} else bD.ic.hd(player) || ! function(player, hv, iV, iT) {
				var a0, i7, io, ip = bV.ip,
					iq = ip[player];
				if (0 !== iq) {
					var ew = aX.ew,
						ir = ew[player],
						es = aX.es;
					if (player < a2.is && (hv = ir), !(ir < es[player] || 5 === iV && ir < iT || 4 === iV && ir < bB.eo(iT, 2))) {
						var f0 = it,
							iu = iv,
							iw = (a0 = ao.i4(f0), ab.hb.hp);
						for (i7 = 0; i7 < f0; i7++)
							if (io = iu[(i7 + a0) % f0], 1 === iw[io] && ip[io] === iq) return b0.ix.iy(player, io, hv);
						var iz = a2.iz,
							fJ = aX.fJ;
						for (i7 = 0; i7 < f0; i7++)
							if (io = iu[(i7 + a0) % f0], ew[io] < iz * es[io] && fJ[io].length && ip[io] === iq && io !== player) return b0.ix.iy(player, io, hv)
					}
				}
			}(player, hv, iV, iT)
		}(player, hv, iV, iT) : (!iX || iW && (iW < iX && !ao.i4(10) || 100 * iX <= iW && ao.i4(3) || !ao.i4(8))) && bD.ic.hd(player) || function(player, hv, iV) {
			!ab.hZ.hz(player, !0) && !ab.hZ.i5(player, !0) || ab.hZ.i8(player) || (ab.hZ.i6() ? ig(player, hv) : ao.ii(a3.ij[iV]) ? ik(player, hv, ab.hZ.iD(player), iV) : 5 === iV ? ik(player, hv, ab.hZ.iN(), iV) : (ab.hZ.iA() && ao.ii(a3
				.il[iV]) && ab.hZ.iC(), ik(player, hv, 6 === iV ? ab.hZ.iN() : ab.hZ.iG(player), iV)))
		}(player, hv, iV))
	}
}

function bn() {
	var j0 = new Uint8Array(a2.f4),
		j1 = new Uint16Array(a2.f4),
		j2 = new Uint16Array(a2.f4),
		j3 = new Uint8Array(a2.f4),
		j4 = (this.hv = new Uint8Array(a2.f4), new Uint16Array(a2.f4)),
		j5 = new Uint16Array(a2.f4);

	function jJ(a0) {
		j0[a0] = 1 + bB.eo(j4[a0] * ao.random(), 10 * ao.value(100))
	}
	this.j6 = null, this.il = [97, 94, 70, 40, 20, 0, 100], this.j7 = [500, 450, 400, 300, 80, 50, 50], this.ij = [0, 0, 5, 25, 50, 100, 0], this.j8 = [60, 74, 112, 200, 256, 512, 512], this.dH = function() {
		this.j6 = [L(0), L(1), L(2), L(3), L(4), L(5), ""]
	}, this.dG = function() {
		j0.fill(0), j1.fill(0), j2.fill(0), j3.fill(0), this.hv.fill(0), j4.fill(0), j5.fill(0);
		var j9 = a2.is;
		if (ay.jA) {
			if (ay.jB.jC)
				for (a0 = a2.jD - 1; 0 <= a0; a0--) this.hv[a0 + j9] = ay.jB.jC[a0 + 1]
		} else if (9 === a2.jE) this.jF();
		else if (a2.jG)
			if (a2.ho)
				for (a0 = a2.jD - 1; 0 <= a0; a0--) this.hv[a0 + j9] = aQ.jI[bV.ip[a0 + j9] - 1].f9;
			else
				for (a0 = a2.jD - 1; 0 <= a0; a0--) this.hv[a0 + j9] = aQ.jI[0].f9;
		else
			for (var jH = 8 === a2.jE ? 1 : 0, a0 = a2.jD - 1; 0 <= a0; a0--) this.hv[a0 + j9] = jH;
		for (a0 = 0; a0 < j9; a0++) this.hv[a0] = 6;
		var f0 = a2.f4;
		for (a0 = 0; a0 < f0; a0++) this.hv[a0] <= 2 ? (j3[a0] = 5, j4[a0] = j5[a0] = 1040, 0 === this.hv[a0] ? (j1[a0] = 980, j2[a0] = 980) : 1 === this.hv[a0] ? (j1[a0] = 980, j2[a0] = 920, j4[a0] = j5[a0] = 1100) : (j1[a0] = 825, j2[a0] =
			750)) : this.hv[a0] <= 4 ? (j3[a0] = 1 + ao.i4(20), 3 === this.hv[a0] ? (j1[a0] = j2[a0] = 500, j4[a0] = j5[a0] = 1e3) : (j5[a0] = 250 + ao.i4(1501), j4[a0] = 500 + ao.i4(501), j1[a0] = 300 + ao.i4(201), j2[a0] = 100 + ao.i4(
			201))) : this.hv[a0] <= 5 ? (j4[a0] = 1e3, j5[a0] = 1e3, j3[a0] = 35 + ao.i4(16), j1[a0] = 300 + ao.i4(201), j2[a0] = 50 + ao.i4(101)) : (j4[a0] = j5[a0] = 800, j3[a0] = 5, j1[a0] = 10, j2[a0] = 250), jJ(a0)
	}, this.jF = function() {
		for (var a0, fz = 0, j9 = a2.is, i7 = 0; i7 < 6; i7++) {
			for (a0 = fz + ap.jK[i7] - 1; fz <= a0; a0--) this.hv[a0 + j9] = i7;
			fz += ap.jK[i7]
		}
	}, this.ia = function(f7, value) {
		j0[f7] = Math.min(value, j0[f7])
	}, this.hd = function(f7) {
		0 == --j0[f7] && ! function(f7) {
			(function(f7) {
				j4[f7] !== j5[f7] && (j4[f7] += j4[f7] < j5[f7] ? 3 : -3);
				j1[f7] !== j2[f7] && (j1[f7] += j1[f7] < j2[f7] ? j3[f7] : -j3[f7], j1[f7] = (Math.abs(j1[f7] - j2[f7]) <= j3[f7] ? j2 : j1)[f7]);
				j0[f7] = bB.eo(j4[f7], 10)
			})(f7), ab.hb.iR(f7, bB.eo(j1[f7] * aX.ew[f7], 1e3))
		}(f7)
	}, this.jN = function(f7, jO) {
		j4[f7] = j5[f7] = jO
	}
}

function hX() {
	var jP = new Uint16Array(a2.f4);

	function jU(player, jS) {
		for (var f0 = bE.dy[0], e5 = bE.e5, jd = -1, je = a2.f4, a0 = 0; a0 < f0; a0++) {
			var iL, f7 = e5[a0];
			gF(player, f7) && (iL = bC.h1(jS, bC.hL(f7)), -1 === jd || iL < jd) && (jd = iL, je = f7)
		}
		return je
	}

	function jW(jT, jS) {
		if (jT === a2.f4) return 0;
		for (var fJ = aX.fJ[jT], jc = fJ.length, f0 = Math.min(jc, 10), je = 0, jd = bC.h1(fJ[je] >> 2, jS), a0 = 0; a0 < f0; a0++) {
			var jf = ao.i4(jc),
				iL = bC.h1(fJ[jf] >> 2, jS);
			iL < jd && (jd = iL, je = jf)
		}
		return fJ[je] >> 2
	}

	function jZ(player, jS, hu, ji) {
		var jj;
		(ji === a2.f4 || (jj = bC.hL(hu), ji = bC.hL(ji), bC.h1(jS, jj) < bC.h1(jS, ji))) && (jP[player] = hu)
	}
	this.dG = function() {
		jP.fill(a2.f4)
	}, this.hd = function(player) {
		var jS, jV, jT, hu = function(player) {
			var hu = jP[player];
			if (hu !== a2.f4) {
				if (b2.eq.jh(hu)) return hu;
				jP[player] = a2.f4
			}
			return a2.f4
		}(player);
		return function(player) {
			for (var iu = iv, jc = it, f0 = Math.min(jc, jc < 17 && 5 === ao.i4(20) ? 1 : 16), f8 = ao.i4(jc), e5 = bE.e5, fJ = aX.fJ, jO = 0, a0 = 0; a0 < f0; a0++) {
				var f7 = iu[(a0 + f8) % jc];
				f7 !== player && fJ[f7].length && (e5[jO++] = f7)
			}
			bE.dy[0] = jO
		}(player), 0 !== bE.dy[0] && (0 < (jV = jW(jT = jU(player, jS = bC.hQ(player)), jS)) && bD.jX.jY(player, jV) ? (jZ(player, jS, jT, hu), !0) : 0 < (jT = function(player, jS) {
			for (var f0 = bE.dy[0], e5 = bE.e5, jg = jP, f8 = 0, a0 = 0; a0 < f0; a0++) {
				var f7 = e5[a0],
					f7 = jg[f7];
				f7 !== a2.f4 && b2.eq.jh(f7) && player !== f7 && gF(player, f7) && (e5[f8++] = f7)
			}
			return 0 !== (bE.dy[0] = f8) ? jW(jU(player, jS), jS) : 0
		}(player, jS)) && bD.jX.jY(player, jT) ? (jZ(player, jS, aS.fB(jT << 2), hu), !0) : !!(0 < (jV = jW(hu, jS)) && bD.jX.jY(player, jV)))
	}
}

function hV() {
	this.hd = function(player) {
		var fx = function(player) {
			var f0 = ab.hS.jm;
			if (0 === f0) return -1;
			for (var jc = Math.min(f0, ab.performance.jn ? f0 : 10), dY = ab.hS.dY, i3 = bB.eo(ao.random() * f0, ao.value(100)), d = i3 + jc, jo = ao.hR(aX.hM[player], aX.hN[player]), jp = ao.hR(aX.hO[player], aX.hP[player]), je = -1, iL = bC
					.h2(0, 0, bI.eV, bI.eW), a0 = i3; a0 < d; a0++) {
				var f8 = a0 % f0,
					jq = bC.go(jo, jp, dY[f8]);
				jq < iL && (iL = jq, je = f8)
			}
			return -1 !== je ? dY[je] : -1
		}(player);
		return -1 !== fx && bD.jX.jY(player, fx)
	}
}

function hY() {
	this.jn = 0, this.dG = function() {
		this.jn = 0
	}, this.hd = function() {
		if (!this.jn && bU.et() % 30 == 7 && b2.eq.jt(75) && (ab.performance.jn = 1))
			if (a2.ho) {
				bW.jw(bW.jx());
				var e8 = bE.e6,
					f0 = bE.dy[0];
				if (0 !== f0)
					for (var jy = Math.min(100 + 10 * (f0 - 1), 400), a0 = 0; a0 < f0; a0++) a3.jN(e8[a0], jy)
			} else a3.jN(jz[0], 100)
	}
}

function hT() {
	var k0, k1, k2 = 300,
		k3 = 300;
	this.jm = 0, this.dY = new Uint32Array(512), this.dG = function() {
		k1 = k0 = 0, this.jm = 0
	}, this.hd = function() {
		if (function() {
				var f0 = ab.hS.jm;
				if (0 === f0) return 1;
				var dY = ab.hS.dY;
				if (bU.et() % 35 == 6) {
					for (var a0 = f0 - 1; 0 <= a0; a0--) aS.fC(dY[a0] << 2) || (f0--, dY[a0] = dY[f0]);
					ab.hS.jm = f0
				}
				return f0 < dY.length
			}() && !(k2 <= k0)) {
			var a0, u = bI.eV,
				k6 = u - 2,
				f0 = k6 * (bI.eW - 2),
				k7 = k2,
				dY = ab.hS.dY,
				jc = ab.hS.jm,
				k8 = dY.length,
				f8 = Math.min(k1 + k7 * ((1 + 19 * ab.performance.jn) * k3), f0);
			for (a0 = k1; a0 < f8; a0 += k7) {
				var fz = 4 * (a0 % k6 + (bB.eo(a0, k6) + 1) * u + 1);
				if (aS.fC(fz) && (dY[jc] = fz >> 2, ++jc === k8)) {
					a0 += k7;
					break
				}
			}(k1 = a0) >= f0 && (k1 = ++k0), ab.hS.jm = jc
		}
	}
}

function k9() {
	aC.hd(), aW.hd(), aL.kA(), aq.kB.hd()
}

function kC() {
	ar.hd(), a5.hd(), aV.hd(), av.hd(), a4.hd(), a6.hd(), ab.hd(), bD.kB.hd(), kD(), aK.hd(), ap.hd(), bH.hd(), bL.hd(), aW.hd(), aW.kE(), aL.hd(), bF.hd(), aJ.hd(), aE.hd(), aC.hd(), aw.hd(), aG.hd(), al.hd(), bS.hd(), bW.hd(), aq.kB.hd(), aq.kF
	.hd(), i.hd(), b1.hd(), bU.hd()
}

function kG() {
	a7.hd(), aM.hd(), aF.hd(), ai.hd(), b3.hd(), am.kH()
}

function kI() {
	aK.kJ(!1), aE.kJ(), aL.kJ(!1), aJ.kJ(), aG.kJ(), al.kJ(), aW.kJ(!1), bW.kK()
}

function kL() {
	aW.kJ(!1) && (bU.dN = !0), aq.kB.hd()
}

function bo() {
	var kM, kN, kO, kP, kQ;

	function kT(kV) {
		for (var a0 = kM - 1; 0 <= a0; a0--) 0 === kO[kN[a0]] && aX.es[kN[a0]] >= kV && eX(kN[a0])
	}

	function kS(player) {
		var ds;
		64 === kO[player] ? kO[player] = 6 : (ds = aX.es[player], kO[player] = ds < 1e3 ? 3 : ds < 1e4 ? 2 : ds < 6e4 ? 1 : 0)
	}
	this.dG = function() {
		kP = kQ = 0, kM = 0, kN = new Uint16Array(a2.f4), kO = new Uint8Array(a2.f4)
	}, this.hd = function() {
		var a0;
		for (kP = bS.ey[13], kQ = aX.ew[a2.ev], a0 = kM - 1; 0 <= a0; a0--) 64 === kO[kN[a0]] ? kS(kN[a0]) : 0 == kO[kN[a0]]-- && (kS(kN[a0]), eX(kN[a0]));
		16e4 <= aX.es[jz[0]] && (kT(16e4), 3e5 <= aX.es[jz[0]]) && kT(3e5), aX.es[a2.ev] > bS.ey[7] && (bS.ey[7] = aX.es[a2.ev]), bS.ey[14] += kQ - aX.ew[a2.ev] + kP - bS.ey[13]
	}, this.eu = function(player) {
		for (var i1, a0 = kM - 1; 0 <= a0; a0--)
			if (player === kN[a0]) {
				for (kM--, i1 = a0; i1 < kM; i1++) kN[i1] = kN[i1 + 1];
				return
			}
	}, this.hs = function(player, kW) {
		for (var a0 = kM - 1; 0 <= a0; a0--)
			if (player === kN[a0]) return;
		kN[kM++] = player, kO[player] = kW ? 2 : 64
	}
}

function bp() {
	var size, ic;
	this.dG = function() {
		size = a2.jD, ic = new Uint16Array(a2.f4);
		for (var is = a2.is, a0 = a2.jD - 1; 0 <= a0; a0--) ic[a0] = is + a0
	}, this.hd = function() {
		for (var a0 = size - 1; 0 <= a0; a0--)
			if (0 === aX.kZ[ic[a0]]) {
				i1 = void 0;
				var i1 = a0;
				size--, ic[i1] = ic[size]
			} else a3.hd(ic[a0])
	}, this.kY = function(f7) {
		ic[size++] = f7
	}
}

function bq() {
	var kb, kc, kM, kN, kO, kd, ke, kf;

	function ki(a0) {
		var i1;
		for (kM--, i1 = a0; i1 < kM; i1++) kN[i1] = kN[i1 + 1], kO[i1] = kO[i1 + 1], kd[i1] = kd[i1 + 1], ke[i1] = ke[i1 + 1], kf[i1] = kf[i1 + 1]
	}
	this.dG = function() {
		kb = 1, kM = 0, kc = 2 * a2.f4, kN = new Uint16Array(kc), kO = new Uint8Array(kc), kd = new Uint16Array(kc), ke = new Uint32Array(kc), kf = new Uint32Array(kc)
	}, this.kg = function(kh, position) {
		ke[kh] = position
	}, this.hd = function() {
		for (var a0 = kM - 1; 0 <= a0; a0--) 0 == kO[a0]-- && (kO[a0] = 2, af.hd(a0, kd[a0], kN[a0], ke[a0], kf[a0]))
	}, this.eu = function(player, id) {
		for (var a0 = kM - 1; 0 <= a0; a0--)
			if (player === kN[a0] && id === kd[a0]) return void ki(a0)
	}, this.kj = function(player) {
		for (var a0 = kM - 1; 0 <= a0; a0--) player === kN[a0] && (af.kk(player, ke[a0]), ki(a0))
	}, this.hs = function(player, i3, kl) {
		if (kc <= kM) return 0;
		kN[kM] = player, kO[kM] = 0, kd[kM] = kb, ke[kM] = i3, kf[kM] = kl;
		player = kb;
		return kM++, kb = 2 * kc < ++kb ? 1 : kb, player
	}, this.kn = function() {
		if (!(hA < 40 || 0 === kM)) {
			var i1, fi, fj, a0, fontSize, kr, hv, ks = h9 / hA,
				kt = hB / hA,
				ku = (an.u + h9) / hA,
				kv = (an.iH + hB) / hA;
			for (b2.kw.textAlign(kx, 1), b2.kw.textBaseline(kx, 1), i1 = kM - 1; 0 <= i1; i1--) fi = aS.ky(ke[i1]), fj = aS.kz(ke[i1]), a0 = kN[i1], ks - 1 < fi && fi < ku && kt - 1 < fj && fj < kv && 0 !== aX.kZ[a0] && ((fontSize = Math.floor(
				.94 * hA * aW.l0(a0))) < 6 || (fi = Math.floor(an.u * (fi + .5 - ks) / (ku - ks)), fj = Math.floor(an.iH * (fj + .48 - kt) / (kv - kt)), kx.font = b2.kw.l1(1, fontSize), kx.fillStyle = p.l2, hv = aU.eh(a0, aU.l3(a0, kd[
				i1])), kx.fillText(bY.dY.data[7].value ? b2.l4.l5(hv) : aX.l6[a0], fi, fj), (kr = Math.floor(.5 * fontSize)) < 6) || (kx.font = b2.kw.l1(1, kr), kx.fillText(bY.dY.data[7].value ? aX.l6[a0] : b2.l4.l5(hv), fi, fj + Math
				.floor(.82 * fontSize))))
		}
	}
}

function br() {
	var l7, l8, l9, lA, lB, lC, lD, lE, lF, lG, lH, lI, lJ, lK = !1,
		lL = !1;

	function lM(lN) {
		lI = bU.dr, l9 = lA = l8 = 0, lB = (lJ = 33) / lN, l7 = 1 / (lN / lJ / 4), lC = (an.u / 2 + h9) / hA, lD = (an.iH / 2 + hB) / hA, lE = hA
	}

	function la(lc) {
		Math.abs(Math.log(lH / lE)) < .125 && (lH = lc * lE)
	}

	function lZ(ks, kt, ku, kv) {
		lF = (ks + ku + 1) / 2, lG = (kt + kv + 1) / 2;
		ku = an.u / (ku - ks + 1), ks = an.iH / (kv - kt + 1);
		lH = .9 * (ku < ks ? ku : ks)
	}
	this.lO = function() {
		return lK
	}, this.lP = function() {
		lM(1), this.lQ(0, 0, bI.eV - 1, bI.eW - 1), a2.g2 || a2.fm || this.lR(a2.ev, 3e3, !0, .3)
	}, this.lR = function(player, lN, lS, zoom) {
		a2.lT || lK && !lS && lL || 0 === aX.es[player] || (aH.lU = !1, lL = lS, lM(lN), function(player) {
			lF = (aX.hM[player] + aX.hN[player] + 1) / 2, lG = (aX.hO[player] + aX.hP[player] + 1) / 2
		}(player), function(zoom, player) {
			var gu = aX.hN[player] - aX.hM[player] + 1,
				player = aX.hP[player] - aX.hO[player] + 1,
				i1 = an.u / gu,
				i7 = an.iH / player,
				i1 = (lH = i1 < i7 ? i1 : i7, 0 !== zoom ? zoom : gu < 20 && player < 20 ? .5 : .9);
			lH *= i1, la(7 / 8)
		}(zoom, player), lK = !0, ae.lX())
	}, this.lY = function(lN) {
		a2.fm || a2.lT || (aH.lU = !1, lL = !1, lM(lN), lZ(0, 0, bI.eV - 1, bI.eW - 1), la(7 / 8), lK = !0, ae.lX())
	}, this.lQ = function(ks, kt, ku, kv) {
		lZ(ks, kt, ku, kv), hA = lH, aH.ld(lF, an.u / 2), aH.le(lG, an.iH / 2), bP.lf()
	}, this.lg = function() {
		return !(lK && lL || (lK = !1))
	}, this.hd = function() {
		var lj, lk, f9, ln;
		lK && (l8 < .5 ? lA < lB && (lA += lB * l7, l9 = l8) : 1 - l9 < l8 && (lA = (lA -= lB * l7) < lB * l7 ? lB * l7 : lA), lI = lI >= bU.dr ? bU.dr - 1 : lI, f9 = bU.dr - lI, l8 = 1e3 < f9 || 1 < (l8 += lA * f9 / lJ) ? 1 : l8, lI = bU.dr,
			f9 = hA, lj = h9, lk = hB, f9 = (hA = lE * Math.pow(lH / lE, l8)) / f9, ln = 1 - (lE * Math.pow(lH / lE, 1 - l8) - lE) / (lH - lE), aH.ld(lC + ln * (lF - lC), an.u / 2), aH.le(lD + ln * (lG - lD), an.iH / 2), aW.zoom(f9, (lj *
				f9 - h9) / (1 - f9), (lk * f9 - hB) / (1 - f9)), bP.lf(), 1 <= l8 && (lK = !1, bQ.lo = !0), bU.dN = !0)
	}
}

function bi() {
	var io = b2.color;
	this.l2 = io.lp(0, 0, 0), this.lq = io.lr(0, 0, 0, .7), this.ls = io.lr(0, 0, 0, .5), this.lt = io.lr(0, 0, 0, .85), this.lu = io.lr(0, 0, 0, .75), this.lv = io.lr(0, 0, 0, .6), this.lw = io.lr(0, 0, 0, .35), this.lx = io.lp(255, 255, 255), this
		.ly = io.lr(255, 255, 255, .3), this.lz = io.lr(255, 255, 255, .6), this.m0 = io.lr(255, 255, 255, .4), this.m1 = io.lr(255, 255, 255, .25), this.m2 = io.lr(255, 255, 255, .85), this.m3 = io.lr(255, 255, 255, .75), this.m4 = io.lr(255, 255,
			255, .15), this.m5 = io.lp(128, 128, 128), this.m6 = io.lr(64, 64, 64, .75), this.m7 = io.lr(88, 88, 88, .83), this.m8 = io.lr(60, 60, 60, .85), this.m9 = io.lr(80, 60, 60, .85), this.mA = io.lp(30, 255, 30), this.mB = io.lp(0, 200, 0),
		this.mC = io.lp(128, 255, 128), this.mD = io.lr(10, 65, 10, .75), this.mE = io.lr(0, 255, 0, .6), this.mF = io.lr(0, 255, 0, .5), this.mG = io.lr(0, 200, 0, .5), this.q = io.lr(0, 100, 0, .75), this.mH = io.lr(0, 60, 0, .8), this.mI = io.lr(
			0, 255, 0, .3), this.mJ = io.lr(0, 180, 0, .6), this.mK = io.lr(0, 120, 0, .85), this.mL = io.lp(0, 120, 0), this.mM = io.lr(0, 70, 0, .85), this.mN = io.lp(255, 120, 120), this.mO = io.lp(255, 160, 160), this.mP = io.lp(255, 70, 70),
		this.mQ = io.lp(230, 0, 0), this.mR = io.lr(220, 0, 0, .6), this.mS = io.lr(255, 100, 100, .8), this.mT = io.lr(100, 0, 0, .85), this.mU = io.lr(60, 0, 0, .85), this.mV = io.lr(200, 0, 0, .6), this.mW = io.lr(120, 0, 0, .85), this.mX = io.lp(
			255, 70, 10), this.mY = io.lr(0, 60, 60, .85), this.mZ = io.lr(10, 60, 60, .9), this.ma = io.lr(0, 96, 96, .75), this.mb = io.lp(160, 160, 255), this.mc = io.lr(0, 40, 90, .75), this.md = io.lr(0, 0, 255, .6), this.me = io.lp(200, 200,
			255), this.mf = io.lp(255, 120, 100), this.mg = io.lr(255, 255, 0, .5), this.mh = io.lr(255, 255, 150, .2), this.mi = io.lp(255, 255, 0), this.mj = io.lp(255, 255, 200), this.mk = io.lr(200, 200, 0, .6), this.ml = io.lr(140, 120, 0, .75),
		this.mm = io.lr(180, 160, 40, .75), this.mn = io.lr(70, 50, 20, .85), this.mo = io.lr(30, 30, 0, .85), this.mp = io.lr(255, 140, 0, .75), this.mq = io.lr(0, 0, 0, 0)
}

function ci() {
	this.g3 = new mr, this.eq = new ms, this.mt = new mu, this.mv = new mw, this.ix = new mx
}

function mr() {
	this.g4 = function(fx) {
		a2.jG ? b0.mt.g4(a2.ev, fx) : aq.my.mz(fx)
	}, this.gC = function(h8, hu) {
		a2.jG ? b0.mt.gC(a2.ev, h8, hu) : aq.my.n0(h8, hu)
	}, this.n1 = function(h8, n2) {
		a2.jG ? b0.mt.n3(a2.ev, h8, n2) : aq.my.n4(h8, n2)
	}, this.g9 = function(h8, fx) {
		a2.jG ? b0.mt.g9(a2.ev, h8, fx) : bD.g7.g8(a2.ev, fx) && aq.my.n5(h8, fx)
	}, this.n6 = function(n7, fx) {
		a2.jG ? b0.mt.n6(a2.ev, n7, fx) : bD.g7.n8(a2.ev, n7, fx) && aq.my.n9(n7, fx)
	}, this.nA = function(hu) {
		a2.jG ? b0.mt.nA(a2.ev, hu) : aq.my.nB(hu)
	}, this.nC = function(nD) {
		a2.jG ? b0.mt.nE(a2.ev, nD) : aq.my.nF(nD)
	}, this.nG = function(nH) {
		a2.jG ? b0.mt.nG(a2.ev, nH) : aq.my.nI(nH)
	}, this.nJ = function() {
		a2.jG ? b0.mt.nJ(a2.ev) : aq.my.nK()
	}, this.nL = function() {
		a2.jG ? b0.mt.nL(a2.ev) : aq.my.n5(1, 0)
	}
}

function mx() {
	this.iy = function(player, n2, hv) {
		b2.eq.nM(player, hv, n2) && (aV.n1(player, n2), n2 < a2.is) && ao.random() < ao.value(10) && (ab.hb.hp[n2] = 0)
	}, this.nN = function(player, n2, hv) {
		b2.eq.nO(hv, n2) && (b2.eq.nP(n2, bE.dz[0]), bS.nQ(player, n2), aW.nR(n2, bE.dz[0]))
	}
}

function ms() {
	this.nS = function(nD, player) {
		aC.nC(a2.ev, player, nD), aq.my.nT(nD, player)
	}, this.nU = function(player) {
		aC.nV(player, 0), aq.my.nW(player)
	}, this.nX = function(nY, player) {
		aC.nZ(nY, player), aq.my.na(nY, player)
	}, this.nb = function() {
		a2.jG || a2.fm || aq.nc.nb()
	}
}

function mw() {
	this.hd = function(a1) {
		var id, e9, lg;
		for (b7.dG(a1), b7.kh += 2, lg = 8 * b7.size; b7.kh + 8 <= lg;) id = b7.nd(4), e9 = b7.nd(9), 0 === id ? this.ne(id, e9, b7.nd(22)) : 1 === id ? this.ne(id, e9, b7.nd(10), b7.nd(10)) : 2 === id ? this.ne(id, e9, b7.nd(10), b7.nd(9)) :
			3 === id || 4 === id ? this.ne(id, e9, b7.nd(10), b7.nd(22)) : 5 === id || 6 === id ? this.ne(id, e9, b7.nd(10)) : 7 === id ? this.ne(id, e9, b7.nd(1)) : this.ne(id, e9)
	}, this.nf = [], this.ng = function() {
		for (var ni = 0, nj = 0, nk = 0, nl = 0, nm = 0, nn = 0, a0 = 0; a0 < 512; a0++) ni += aX.kZ[a0], nj += aX.es[a0], nk += aX.ew[a0], nl += bD.kB.no[a0];
		nm += bD.kB.np, nn += it, this.nf.push(nk % 1073741824 * 4 + (ni + nj + nl + nm + nn) % 4)
	}, this.ne = function(id, e9, eB, eD) {
		0 === id ? b0.mt.g4(e9, eB) : 1 === id ? b0.mt.gC(e9, eB, eD) : 2 === id ? b0.mt.n3(e9, eB, eD) : 3 === id ? b0.mt.g9(e9, eB, eD) : 4 === id ? b0.mt.n6(e9, eB, eD) : 5 === id ? b0.mt.nA(e9, eB) : 6 === id ? b0.mt.nE(e9, eB) : 7 === id ?
			b0.mt.nG(e9, eB) : 8 === id ? b0.mt.nJ(e9) : b0.mt.nq(e9)
	}
}

function mu() {
	this.g4 = function(player, fx) {
		b2.eq.fo(0) && b2.eq.fp(player) && bC.hC(fx) && (b1.nr.ns(0, player, fx), a2.nt.hr(player, fx))
	}, this.gC = function(player, h8, hu) {
		b2.eq.fo(1) && b2.eq.fp(player) && b2.eq.nu(player, hu) && b2.eq.nv(player, h8, 12, 0) && b2.eq.nw(player, hu) && ((hu = aU.i9(player, bE.e4[0])) || aU.iS(player)) && (aX.nx[player]++, b1.nr.ns(1, player, h8, bE.e4[0]), ab.hZ.hh(player,
			hu)) && (b2.eq.ny(player), bS.nz(player, h8), ab.hZ.hn(player))
	}, this.n3 = function(player, h8, n2) {
		b2.eq.fo(1) && b2.eq.fp(player) && a2.ho && b2.eq.nu(player, n2) && b2.eq.o0(player, n2) && b2.eq.nM(player, b2.eq.h7(player, h8), n2) && (b1.nr.ns(2, player, h8, n2), aV.n1(player, n2))
	}, this.g9 = function(player, h8, fx) {
		b2.eq.fo(1) && b2.eq.fp(player) && (0 === fx && 1 === h8 ? this.nL(player) : bC.hC(fx) && bD.kB.np !== bD.kB.o1 && bD.kB.no[player] !== bD.kB.o2 && 0 !== aX.fJ[player].length && b2.eq.nv(player, h8, 32, 0) && bD.jX.jY(player, fx) && (b1
			.nr.ns(3, player, h8, fx), b2.eq.ny(player), bD.kB.o3(player)))
	}, this.n6 = function(player, n7, fx) {
		b2.eq.fo(1) && b2.eq.fp(player) && bC.hC(fx) && bD.g7.o4(player, n7) && bD.jX.o5(fx) && (b1.nr.ns(4, player, n7, fx), b2.eq.o6(player, 8), bD.kB.n6())
	}, this.nA = function(player, hu) {
		b2.eq.fo(1) && b2.eq.fp(player) && (hu = Math.min(hu, a2.f4), aU.i9(player, hu)) && (b1.nr.ns(5, player, hu), aU.o7(player, hu))
	}, this.nE = function(player, nD) {
		(b2.eq.fo(1) || b2.eq.fo(2)) && b2.eq.fp(player) && (nD = bB.o8(nD, 0, 1023), b1.nr.ns(6, player, nD), aW.o9(player, 0, nD))
	}, this.nG = function(player, nH) {
		b2.eq.fo(1) && b2.eq.fp(player) && (b1.nr.ns(7, player, nH), al.oA(player, nH))
	}, this.nJ = function(player) {
		(b2.eq.fo(0) || b2.eq.fo(1)) && b2.eq.fp(player) && bG.nJ(player) && b1.nr.ns(8, player)
	}, this.nq = function(player) {
		bG.nq(player), b1.nr.ns(9, player)
	}, this.nL = function(player) {
		al.oB(player) && (b1.nr.ns(3, player, 1, 0), al.nL(player))
	}
}

function oC() {
	var oE;
	this.oD = [], this.oE = document.createElement("div"), this.oF = function(oG, marginTop) {
		var title = document.createElement("h2");
		title.textContent = oG, title.style.margin = "0", title.style.marginBottom = "0.6em", marginTop && (title.style.marginTop = marginTop), title.style.fontSize = "1.4em", title.style.overflowWrap = "break-word", this.oE.appendChild(title)
	}, this.oH = function(oG) {
		var oI = document.createElement("p");
		return oI.textContent = oG, oI.style.fontSize = "0.75em", oI.style.lineHeight = "1.2em", oI.style.marginBottom = "0", this.oE.appendChild(oI), oI
	}, this.oJ = function(oK, fontSize) {
		var oE = document.createElement("div");
		oE.innerHTML = oK, oE.style.fontSize = fontSize || "1em", oE.style.lineHeight = "1.2em", this.oE.appendChild(oE)
	}, this.oL = function(oM) {
		for (var oN = oM.oN, f0 = oN.length, a0 = 0; a0 < f0; a0++) this.oE.appendChild(oN[a0])
	}, this.oO = function(oP) {
		this.oD.push(oP), this.oE.appendChild(oP.d)
	}, this.resize = function() {
		for (var f0 = this.oD.length, a0 = 0; a0 < f0; a0++) this.oD[a0].resize && this.oD[a0].resize()
	}, (oE = this.oE).style.position = "absolute", oE.style.height = "auto", oE.style.padding = "0.5em"
}

function oQ(oR, oS) {
	var a0, oE = document.createElement("div");

	function oZ() {
		var a0, oa, iH, f8, f9, oV = an.ob * oE.offsetWidth,
			oc = new Float64Array(function(oV) {
				var u = .25 * b2.kw.oW(.6) * an.oX;
				return Math.max(Math.floor(oV / u), 1)
			}(oV)),
			od = bR.od,
			oe = (oV - (oc.length + 1) * bR.gap) / (oc.length * an.ob);
		for (oc.fill(od), a0 = 0; a0 < oS.length; a0++) oa = (f9 = oS[a0].oE).style, iH = b2.og.min(oc), f8 = oc.indexOf(iH), oa.top = b2.kw.oh(iH), oa.left = b2.kw.oh(od + f8 * (oe + od)), oa.width = b2.kw.oh(oe), b2.kw.oi(f9, 5), oc[f8] += f9
			.offsetHeight + 3 * od;
		oE.style.height = b2.kw.oh(b2.og.max(oc) - 2 * od)
	}
	for (this.oT = oS, this.resize = function() {
			var a0;
			for (a0 = 0; a0 < oS.length; a0++) oS[a0].resize();
			oZ(), oZ()
		}, oE.style.width = "100%", oE.style.maxWidth = "100%", oR.style.lineHeight = "1.5em", oR.style.overflowX = "hidden", oR.style.overflowY = "auto", a0 = 0; a0 < oS.length; a0++) oE.appendChild(oS[a0].oE);
	oR.appendChild(oE)
}

function l(title, oj, backgroundColor, ok, ol) {
	var om = document.createElement("button");

	function or() {
		if (!b9.ou()) {
			if (!1 !== ok) {
				var ov = b2.color.ow(backgroundColor);
				if (0 < ov[0] && ov[0] < 255 && ov[0] === ov[1] && ov[0] === ov[2]) return
			}
			this.style.backgroundColor = b2.color.or(backgroundColor, 50)
		}
	}

	function oq() {
		oj(this) || ox(this)
	}

	function ot() {
		this.style.backgroundColor = backgroundColor
	}

	function os() {
		ox(this)
	}

	function ox(f9) {
		f9.style.backgroundColor = backgroundColor, f9.blur()
	}
	this.button = om, this.on = oj, this.oo = backgroundColor, this.op = function(io) {
			io ? 1 === io && (io = p.m8) : io = p.lt, this.oo = backgroundColor = io, om.style.backgroundColor = io
		}, om.innerHTML = title, om.style.color = ol ? p.mi : p.lx, om.style.userSelect = "none", om.style.outline = "none", om.style.overflowWrap = "break-word", this.op(backgroundColor), om.style.border = "none", om.style.font = "inherit", om.style
		.fontSize = "1em", om.style.padding = "0em 0.3em", om.onclick = oq, om.addEventListener("mouseover", or), om.addEventListener("mouseout", os), om.addEventListener("focus", or), om.addEventListener("blur", ot)
}

function oy(oz, oR) {
	var oE, a0;
	for (this.resize = function() {
			for (var a0 = 0; a0 < oz.length; a0++) b2.kw.oi(oz[a0].button);
			oE.style.gap = oE.style.padding = b2.kw.oh(bR.od)
		}, (oE = document.createElement("div")).style.display = "grid", oE.style.gridTemplateColumns = "repeat(auto-fill, minmax(9.5em, 1fr))", oE.style.overflowY = "auto", oE.style.gridAutoRows = "5.3em", oE.style.maxHeight = "100%", a0 = 0; a0 < oz
		.length; a0++) oz[a0].button.style.fontSize = "1.2em", oE.appendChild(oz[a0].button);
	oR.appendChild(oE)
}

function p1(p2, p3, p4) {
	this.fi = 0, this.fj = 0, this.u = 0, this.iH = 0, this.resize = function() {
		this.iH = Math.min(b2.kw.oW(p4 || .5) * p2[1] * an.oX, an.iH - 2 * bR.gap), this.u = Math.min(this.iH * (p2[0] / p2[1]), an.u - 2 * bR.gap), this.iH = p2[1] * this.u / p2[0], this.fi = bR.gap + p3[0] * (an.u - this.u - 2 * bR.gap), this
			.fj = bR.gap + p3[1] * (an.iH - this.iH - 2 * bR.gap)
	}, this.p5 = function() {
		return this.fi + .5 * this.u
	}
}

function p6(p7, title, on) {
	function click() {
		var value = 1 - p7.value;
		this.textContent = (value ? "🟢 " : "⚪ ") + title, bY.p8.p9(p7.kh, value), on(value)
	}
	var d;
	title = title || L(6), on = on || function() {}, this.d = document.createElement("p"), (d = this.d).textContent = (p7.value ? "🟢 " : "⚪ ") + title, d.style.margin = "0", d.style.marginBottom = "0.5em", d.style.cursor = "pointer", d
		.addEventListener("click", click)
}

function pA(oR, oK) {
	var oE = document.createElement("div");
	this.pB = oE, this.resize = function() {
		oE.style.padding = b2.kw.oh(bR.od), oE.style.lineHeight = b2.kw.oh(b2.kw.pC(.035))
	}, oR.style.overflowX = "hidden", oR.style.overflowY = "auto", oE.innerHTML = oK, oR.appendChild(oE)
}

function pD(pE) {
	var oE = document.createElement("div");
	this.d = oE, this.pF = pE, this.resize = function() {
		for (var f0 = pE.length, a0 = 1; a0 < f0; a0++) b2.kw.oi(pE[a0], 4)
	};
	var a0, f0 = pE.length;
	for (oE.style.width = "100%", oE.style.height = "2.7em", oE.style.marginTop = "0.6em", oE.style.border = "inherit", a0 = 0; a0 < f0; a0++) pE[a0].style.verticalAlign = "top", pE[a0].style.width = (100 / f0).toFixed(2) + "%", pE[a0].style.height =
		"100%", pE[a0].style.fontSize = "0.75em", oE.appendChild(pE[a0])
}

function pG(p7, type, pH, pI) {
	var d;
	this.d = document.createElement("input"), (d = this.d).type = type ? "number" : "text", d.id = "input" + (p7.title || p7.kh), d.value = p7.value, d.style.width = "100%", d.style.userSelect = "none", d.style.outline = "none", d.style.resize =
		"none", d.style.border = "inherit", d.style.font = "inherit", d.style.color = p.lx, d.style.backgroundColor = p.lq, d.style.fontSize = "1em", d.style.padding = "0.1em 0.2em", -1 !== p7.kh && (d.addEventListener("focus", function() {
			an.pJ++
		}), d.addEventListener("blur", function() {
			an.pJ--, bY.p8.p9(p7.kh, d.value)
		}), d.addEventListener("keypress", function(event) {
			"Enter" === event.key && (event.preventDefault(), bY.p8.p9(p7.kh, d.value), pH ? pH() : d.blur())
		}), pI) && d.addEventListener("input", function(d) {
			pI(d)
		})
}

function pK(oR, data) {
	var f0 = data.pL.length,
		pM = document.createElement("div"),
		pN = document.createElement("div"),
		pO = document.createElement("div"),
		pP = new Array(f0),
		oS = new Array(f0),
		pQ = new Array(data.pR.length),
		pS = b2.color.lr(70, 70, 0, .35);

	function or() {
		this.style.backgroundColor = b2.color.or(pS, 160)
	}

	function os() {
		this.style.backgroundColor = pS
	}

	function oZ() {
		var i1;
		for (oR.style.font = b2.kw.l1(0, b2.kw.pf(.026, .5, .03)), a0 = 1; a0 < pQ.length; a0++) b2.kw.oi(pQ[a0], 4);
		if (b2.kw.oi(pM, 2), f0) {
			for (var pi, pg = pM.offsetWidth, ph = pO.offsetWidth, a0 = 0; a0 < pQ.length; a0++) pi = .01 * data.pV[a0] * ph, pQ[a0].style.width = (100 * pi / pg).toFixed(2) + "%";
			var jc = data.pL[0].length;
			for (a0 = 0; a0 < f0; a0++)
				for (b2.kw.oi(pP[a0], 2), i1 = 1; i1 < jc; i1++) b2.kw.oi(oS[a0][i1], 4)
		}
	}
	this.resize = function() {
			oZ(), oZ()
		}, oR.style.display = "flex", oR.style.flexDirection = "column", pN.style.overflowX = "hidden", pN.style.overflowY = "auto",
		function() {
			var f9, a0, pL = data.pL,
				jc = f0 ? pL[0].length : 0;
			for (a0 = 0; a0 < f0; a0++) {
				pP[a0] = document.createElement("div"), pP[a0].style.backgroundColor = function(a0) {
					return a0 % 2 == 1 ? b2.color.lr(130, 130, 130, .35) : p.lw
				}(a0), pP[a0].style.width = "100%", pP[a0].style.display = "flex", oS[a0] = new Array(jc);
				for (var i1 = 0; i1 < jc; i1++) oS[a0][i1] = f9 = document.createElement("div"), f9.style.display = "flex", f9.style.justifyContent = "center", f9.style.wordBreak = "break-all", f9.style.padding = "0.4em 0em", f9.style.width = data
					.pV[i1] + "%", f9.innerHTML = pL[a0][i1].du, 1 === pL[a0][i1].ds && (f9.name = "" + a0, f9.style.color = p.mi, f9.style.backgroundColor = pS, f9.addEventListener("mouseover", or), f9.addEventListener("mouseout", os), function(f9,
						pX, pY) {
						2147483647 !== pY && f9.addEventListener("click", function() {
							b4.w(30), b4.x(30, pX), b7.dG(b4.a1), this.style.backgroundColor = pS, i.j(8, i.pZ, new pa(25, {
								pb: 0,
								pX: b5.pc.pd(b5.pc.pe(5)),
								pY: pY
							}))
						})
					}(f9, pL[a0][i1].pX, pL[a0][i1].pY)), pP[a0].appendChild(f9)
			}
			for (pM.style.display = "flex", pM.style.backgroundColor = b2.color.lr(0, 120, 0, .35), a0 = 0; a0 < pQ.length; a0++) pQ[a0] = f9 = document.createElement("div"), f9.style.display = "flex", f9.style.justifyContent = "center", f9.style
				.wordBreak = "break-all", f9.style.padding = "0.4em 0em", f9.style.width = data.pV[a0] + "%", f9.innerHTML = data.pR[a0], pM.appendChild(f9)
		}();
	for (var a0 = 0; a0 < f0; a0++) pO.appendChild(pP[a0]);
	pN.appendChild(pO), oR.appendChild(pM), oR.appendChild(pN)
}

function pj() {
	var pn, a0, pk = document.createElement("div"),
		pl = document.createElement("div"),
		pm = document.createElement("div"),
		pO = document.createElement("div"),
		oz = [],
		pR = ["Best 1v1 Player", "Top Clan", "Leading Clan Member"],
		po = [1, 0, 2];

	function pp(a0) {
		i.j(8, 0, new pa(21, {
			pq: po[a0],
			pr: 0,
			ps: 10
		}))
	}
	for (this.show = function() {
			this.p9(i.kB.pt), document.body.appendChild(pk)
		}, this.pu = function() {
			document.body.removeChild(pk)
		}, this.p9 = function(pt) {
			for (var a0 = 0; a0 < oz.length; a0++) oz[po[a0]].button.innerHTML = pR[a0] + "<br>" + pt[a0]
		}, this.resize = function() {
			var a0, pv = bR.gap,
				iH = b2.kw.pw(.085),
				u = Math.min(4 * iH, an.u - 2 * pv),
				f0 = oz.length;
			for (b2.kw.px(pk, pv, an.iH - pv - iH, u, iH), b2.kw.oi(pk), b2.kw.oi(pl, 6), a0 = 0; a0 < f0 - 1; a0++) b2.kw.oi(oz[a0].button, 6);
			for (a0 = 0; a0 < f0; a0++) oz[a0].button.style.fontSize = b2.kw.py(.22 * iH);
			if (!pn) {
				if (!aR.pz()) return;
				(pn = aR.get(14)).style.width = "24%", pn.style.position = "absolute", pl.appendChild(pn)
			}
			pn.style.left = b2.kw.oh(0), pn.style.top = "7%"
		}, pk.style.position = "absolute", pl.style.width = "25%", pl.style.height = "100%", pl.style.backgroundColor = p.lt, pm.style.position = "absolute", pm.style.width = "75%", pm.style.height = "100%", pm.style.backgroundColor = p.lt, pm.style
		.top = pm.style.right = b2.kw.oh(0), pm.style.overflowX = "auto", pm.style.overflowY = "hidden", pm.style.whiteSpace = "nowrap", pO.style.height = pO.style.maxHeight = "100%", oz.push(new l("", function() {
			pp(0)
		}, p.mU)), oz.push(new l("", function() {
			pp(1)
		}, p.mH)), oz.push(new l("", function() {
			pp(2)
		}, p.mY)), a0 = 0; a0 < oz.length; a0++) oz[a0].button.style.height = "100%", pO.appendChild(oz[a0].button);
	pm.appendChild(pO), pk.appendChild(pl), pk.appendChild(pm)
}

function q0(p7, oq) {
	this.oN = [];
	var q1 = this.oN;

	function click() {
		for (var a0 = 0; a0 < q1.length; a0++) q1[a0].textContent = q1[a0].textContent.replace("🟢", "⚪");
		this.textContent = this.textContent.replace("⚪", "🟢");
		var kh = parseInt(this.name);
		void 0 !== p7.kh && bY.p8.p9(p7.kh, kh), oq && oq(kh)
	}
	for (var q2, f0 = p7.q3.length, a0 = 0; a0 < f0; a0++)(q2 = document.createElement("p")).textContent = "⚪ " + p7.q3[a0], q2.style.margin = "0", q2.name = "" + a0, q2.style.cursor = "pointer", q2.style.fontSize = "1em", q2.addEventListener(
		"click", click), q1.push(q2);
	q1[p7.value].textContent = q1[p7.value].textContent.replace("⚪", "🟢")
}

function q4(title, q5, q6) {
	var pk = document.createElement("div"),
		q7 = document.createElement("div"),
		pO = document.createElement("div"),
		q8 = document.createElement("div"),
		q9 = document.createElement("div");
	this.qA = pO, this.qB = q5, this.show = function() {
			!1 !== q6 ? document.body.appendChild(pk) : (document.body.appendChild(q7), document.body.appendChild(q8))
		}, this.pu = function() {
			!1 !== q6 ? document.body.removeChild(pk) : (document.body.removeChild(q7), document.body.removeChild(q8))
		}, this.qF = function() {
			var qG = b2.kw.pC(.1),
				qH = b2.kw.pC(.08 + .04 * (an.qI < 1));
			return {
				qG: qG,
				qH: qH,
				qJ: an.iH / an.ob - qG - qH
			}
		}, this.resize = function(qK) {
			var f0 = q5.length,
				qL = this.qF(),
				qG = qL.qG,
				qH = qL.qH;
			for (q7.style.height = b2.kw.oh(qG), b2.kw.oi(q7, 2), q8.style.top = b2.kw.oh(an.iH / an.ob - qH), q8.style.height = b2.kw.oh(qH), b2.kw.oi(q8, 8), pO.style.top = b2.kw.oh(qG), pO.style.height = pO.style.maxHeight = b2.kw.oh(qL.qJ), q7
				.style.font = b2.kw.l1(0, b2.kw.pC(.02, .3)), q8.style.font = b2.kw.l1(0, b2.kw.pC(.02, .7)), pO.style.font = b2.kw.l1(0, b2.kw.pC(.02, .7)), a0 = 1; a0 < f0; a0++) b2.kw.oi(q5[a0].button, 4);
			for (var qM = 0, a0 = 0; a0 < f0; a0++) qM += q5[a0].button.offsetWidth;
			if (qK && qM < q8.offsetWidth)
				for (a0 = 0; a0 < f0; a0++) q5[a0].button.style.width = (100 * q5[a0].button.offsetWidth / qM).toFixed(2) + "%";
			else
				for (a0 = 0; a0 < f0; a0++) q5[a0].button.style.width = "auto";
			qK || this.resize(!0)
		}, this.kn = function() {
			var qL = this.qF(),
				io = an.ob;
			kx.fillStyle = p.lt, kx.fillRect(0, io * qL.qG, an.u, io * qL.qJ)
		}, pk.style.position = "absolute", pk.style.top = "0", pk.style.left = "0", pk.style.width = "100%", pk.style.height = "100%", q7.style.position = "absolute", q7.style.top = "0", q7.style.left = "0", q7.style.width = "100%", q7.style
		.display = "flex", q7.style.backgroundColor = p.lt, q8.style.position = "absolute", q8.style.left = "0", q8.style.width = "100%", q8.style.overflowX = "auto", q8.style.overflowY = "hidden", q8.style.whiteSpace = "nowrap", q9.style.height = q9
		.style.maxHeight = "100%", pO.style.position = "absolute", pO.style.width = "100%", pO.style.backgroundColor = p.lt,
		function() {
			for (var a0 = 0; a0 < q5.length; a0++) q5[a0].button.style.height = "100%", q5[a0].button.style.padding = "0.0em 0.9em"
		}();
	for (var a0 = 0; a0 < q5.length; a0++) q9.appendChild(q5[a0].button);
	q7.appendChild(function() {
		var qE = document.createElement("h1");
		return qE.textContent = title, qE.style.margin = "auto", qE.style.fontSize = "2.3em", qE
	}()), q8.appendChild(q9), !1 !== q6 && (pk.appendChild(pO), pk.appendChild(q7), pk.appendChild(q8))
}

function qN(name, placeholder) {
	var qO = document.createElement("textarea"),
		qQ = (this.qP = qO, !0);

	function qW() {
		qO.select(), document.execCommand("copy")
	}
	this.resize = function() {
			qO.style.padding = b2.kw.oh(bR.od)
		}, this.qR = function(qS) {
			qO.value = qS
		}, this.qT = function() {
			return qO.value
		}, this.qU = function() {
			qO.select()
		}, this.clear = function() {
			qO.value = ""
		}, this.qV = function() {
			qQ && navigator.clipboard ? (qO.select(), navigator.clipboard.writeText(qO.value).catch(function() {
				qQ = !1, qW()
			})) : qW()
		}, qO.setAttribute("name", name), qO.setAttribute("id", name + "Field"), qO.setAttribute("autocomplete", "off"), qO.setAttribute("placeholder", placeholder), qO.style.top = "0", qO.style.left = "0", qO.style.width = "100%", qO.style.height =
		"100%", qO.style.userSelect = "none", qO.style.outline = "none", qO.style.resize = "none", qO.style.border = "none", qO.style.color = p.lx, qO.style.backgroundColor = p.lq, qO.style.fontSize = "1.2em"
}

function d1() {
	this.on = new qX, this.dY = new qY, this.p8 = new qZ, this.kB = new qa, this.dG = function() {
		this.dY.dG(), (new qb).dG()
	}
}

function qY() {
	function qc(a0, type, qi, dv) {
		bY.dY.data.push({
			kh: a0,
			type: type || 0,
			value: qi || 0,
			qi: qi || 0,
			dv: dv || 0
		})
	}

	function qd(a0, type, qi, dv) {
		bY.dY.data.push({
			kh: a0,
			type: type,
			value: qi || "",
			qi: qi || "",
			dv: dv || 0
		})
	}

	function qe(lg) {
		for (var a0 = bY.dY.data.length; a0 < lg; a0++) bY.dY.data.push(null)
	}
	this.data = [], this.dG = function() {
		qc(0, 1, 0, 5), qc(1, 1, 1), qc(2, 0), qd(3, 2), qc(4, 1), qd(5, 2, "Trebuchet MS", 1), qc(6, 0), qc(7, 0, 0), qc(8, 0), qc(9, 1, 1), qc(10, 1), qc(11, 1, 1), qd(12, 2, navigator.language), qe(100), qd(100, 2), qd(101, 2), qd(102, 2), qd(
			103, 2), qd(104, 2), qd(105, 2), qd(106, 2), qc(107), qc(108), qc(109), qd(110, 2), qc(111), qc(112), qc(113), qd(114, 2), qc(115), qd(116, 2), qc(117, 1), qd(118, 2, "", 2), qc(119, 1, 0, 1), qd(120, 2), qc(121, 1, ~~(262144 *
			Math.random())), qd(122, 2, "Player " + Math.floor(1e3 * Math.random())), qc(123), qd(124), qc(125, 1), qd(126, 2), qc(127, 0, 1), qc(128), qc(129), qc(130), qc(131), qc(132), qd(133, 2), qc(134, 0, 5), qd(135, 2), qd(136, 2), qc(
			137), qc(138), qc(139), qc(140), qc(141), qc(142), qc(143), qc(144), qd(145, 2), qc(146), qc(147), qd(148, 2), qc(149), qc(150, 0, 1), qd(151, 2), qc(152, 0, 5), qe(180), qc(180, 0), qc(181, 0)
	}, this.p9 = function(kh, value) {
		this.data[kh].value = value
	}, this.dZ = function(kh, value) {
		this.p9(kh, value), bY.on.save(kh, String(value)), bY.on.save(kh, String(this.data[kh].dv), !0)
	}, this.qf = function() {
		for (var a0 = 0; a0 < this.data.length; a0++) this.data[a0] && (bY.on.save(a0, String(this.data[a0].value)), bY.on.save(a0, String(this.data[a0].dv), !0))
	}, this.qg = function(kh) {
		return Number(this.data[kh].value)
	}, this.qh = function(kh) {
		return String(this.data[kh].value)
	}
}

function qX() {
	this.qj = function(kh, dv) {
		return Number(this.qk(kh, dv))
	}, this.qk = function(kh, dv) {
		var du = null;
		return 0 === m.id ? m.ql && (du = m.ql.getItem((dv ? "v" : "d") + kh)) : 1 === m.id ? du = m.t.loadString((dv ? 1e3 : 2e3) + kh) : 2 === m.id && (du = m.qm[(dv ? "v" : "d") + kh]), du && 0 !== du.length ? du : null
	}, this.qn = function(f0, qo) {
		var e8 = [],
			qp = qo ? "e" : "l";
		if (0 === m.id) {
			if (m.ql)
				for (a0 = 0; a0 < f0; a0++) e8.push(m.ql.getItem(qp + a0))
		} else if (1 === m.id)
			for (var qq = qo ? 5e3 : 3e3, a0 = 0; a0 < f0; a0++) e8.push(m.t.loadString(qq + a0));
		else if (2 === m.id)
			for (a0 = 0; a0 < f0; a0++) e8.push(m.qm[qp + a0]);
		return e8
	}, this.save = function(kh, value, dv) {
		var qr = (dv ? "v" : "d") + kh;
		0 === m.id ? m.ql && bY.dY.data[140].value && m.ql.setItem(qr, value) : 1 === m.id ? m.t.saveString((dv ? 1e3 : 2e3) + kh, value) : 2 === m.id && (m.qm[qr] = value, m.qs.postMessage(qr + " " + value))
	}, this.qt = function(e8, qo) {
		var f0 = e8.length,
			qp = qo ? "e" : "l";
		if (0 === m.id) {
			if (m.ql && bY.dY.data[140].value)
				for (a0 = 0; a0 < f0; a0++) m.ql.setItem(qp + a0, e8[a0])
		} else if (1 === m.id)
			for (var qq = qo ? 5e3 : 3e3, a0 = 0; a0 < f0; a0++) m.t.saveString(qq + a0, e8[a0]);
		else if (2 === m.id)
			for (a0 = 0; a0 < f0; a0++) m.qm[qp + a0] = e8[a0], m.qs.postMessage(qp + a0 + " " + e8[a0])
	}
}

function qb() {
	this.dG = function() {
		! function() {
			var data = bY.dY.data;
			0 === data[2].dv && (an.iH > an.u || 0 !== m.id) && (data[2].value = data[2].qi = 1);
			0 === data[100].dv && (data[100].value = data[100].qi = (0 === m.id ? "Player " : 1 === m.id ? "Android User " : "iOS User ") + Math.floor(1e3 * Math.random()))
		}();
		var a0, du, data = bY.dY.data,
			f0 = data.length;
		for (a0 = 0; a0 < f0; a0++) data[a0] && data[a0].dv === bY.on.qj(a0, !0) && (du = bY.on.qk(a0), data[a0].value = null === du ? data[a0].qi : 2 === data[a0].type ? du : Number(du));
		bY.dY.data[10].value = bY.dY.data[10].qi
	}
}

function qa() {
	function qz(e8) {
		if (0 === e8.length) bY.p8.p9(116, "");
		else {
			for (var r2 = e8[0], a0 = 1; a0 < e8.length; a0++) r2 += ";" + e8[a0];
			bY.p8.p9(116, r2)
		}
	}
	this.qw = function() {
		bY.dY.data[110].value.length && (bY.dY.data[106].value = bY.dY.data[110], bY.p8.p9(110, ""), this.qx())
	}, this.qx = function() {
		var e8 = bY.dY.data[116].value.split(";");
		for (e8.length % 2 == 1 && e8.pop(), e8.unshift(bY.dY.data[106].value), e8.unshift(bY.dY.data[105].value), a0 = 2; a0 < e8.length; a0 += 2)
			if (e8[a0] === e8[0]) {
				e8.splice(a0, 2);
				break
			} for (var qy = [], a0 = 0; a0 < e8.length; a0 += 2) qy.push(e8[a0]);
		qz(e8), bY.dY.data[117].value = 0, bY.dY.data[117].q3 = qy
	}, this.r0 = function(kh) {
		bY.dY.data[117].q3.splice(kh, 1), bY.dY.data[117].value = Math.min(kh, bY.dY.data[117].q3.length - 1);
		var e8 = bY.dY.data[116].value.split(";");
		e8.splice(2 * kh, 2), qz(e8)
	}, this.r1 = function(kh) {
		var e8 = bY.dY.data[116].value.split(";");
		return {
			pX: e8[2 * kh],
			password: e8[2 * kh + 1]
		}
	}, this.r3 = function() {
		var du = bB.o8(bY.dY.data[121].value, -1, 262143);
		return du = -1 === du ? ~~(262144 * Math.random()) : du
	}
}

function qZ() {
	this.p9 = function(kh, value) {
		bY.dY.data[kh].value !== value && (bY.dY.dZ(kh, value), 0 === kh ? (i.r4(), az.dG(), i.j(2)) : 1 === kh ? an.dQ(1) : 2 === kh ? an.dQ(0) : 5 === kh && (b2.kw.r5(), an.dQ(0)))
	}, this.r6 = function() {
		for (var data = bY.dY.data, a0 = 0; a0 < 100; a0++) data[a0] && bY.dY.dZ(a0, data[a0].qi);
		b2.kw.r5(), an.dQ(1), az.dG()
	}, this.r7 = function() {
		for (var data = bY.dY.data, a0 = 0; a0 < data.length; a0++) data[a0] && bY.dY.p9(a0, data[a0].qi)
	}, this.r8 = function() {
		for (var i7 = bY.dY, a0 = 128; a0 < 135; a0++) i7.dZ(a0, i7.data[a0].qi)
	}, this.r9 = function(data) {
		bY.p8.p9(109, data.pY), bY.p8.p9(107, data.rA), bY.p8.p9(108, data.rB), bY.p8.p9(112, data.rC), bY.p8.p9(111, data.rD), bY.p8.p9(113, data.rE), bY.p8.p9(122, data.username), bY.p8.p9(135, data.rF), bY.p8.p9(136, data.rG), bY.p8.p9(137,
			data.rH), bY.p8.p9(138, data.rI), bY.p8.p9(139, data.rJ), bY.p8.p9(141, data.rK), bY.p8.p9(142, data.rL), bY.p8.p9(143, data.rM), bY.p8.p9(144, data.rN)
	}
}

function bm() {
	this.pc = new rO, this.rP = new rQ, this.dG = function() {
		this.pc.dG()
	}
}

function rQ() {
	this.rR = function(size) {
		for (var rS = b7, e8 = [], a0 = 0; a0 < size; a0++) e8.push(String.fromCharCode(rS.nd(16)));
		return e8.join("")
	}, this.rT = function(oG) {
		return 20 < (oG = oG.trim()).length ? oG.substring(0, 20) : oG
	}
}

function rO() {
	var rU = new Uint8Array(78);
	this.dG = function() {
		var a0;
		for (rU[50] = 37, a0 = 0; a0 < 10; a0++) rU[a0 + 3] = a0 + 1;
		for (a0 = 0; a0 < 26; a0++) rU[a0 + 20] = a0 + 11, rU[a0 + 52] = a0 + 38
	}, this.rV = function(oG) {
		return oG.trim().replace(new RegExp("[^a-zA-Z0-9_\\-]", "g"), "-")
	}, this.rW = function(oG, size) {
		if ((oG = this.rV(oG)).length > size) return oG.substring(0, size);
		for (; oG.length < size;) oG = "-" + oG;
		return oG
	}, this.rX = function(oG) {
		for (var rY = rU, f0 = oG.length, e8 = new Uint8Array(f0), a0 = 0; a0 < f0; a0++) e8[a0] = rY[oG.charCodeAt(a0) - 45];
		return e8
	}, this.rZ = function(ra) {
		b4.w(6 * ra.length), this.rb(ra), b7.dG(b4.a1)
	}, this.rb = function(ra) {
		for (var f0 = ra.length, u = b4, a0 = 0; a0 < f0; a0++) u.x(6, ra[a0])
	}, this.rc = function(oG) {
		this.rb(this.rX(oG))
	}, this.rd = function(oG, size) {
		this.rb(this.rX(this.rW(oG, size)))
	}, this.re = function(oG, size) {
		for (var e8 = this.rX(this.rW(oG, size)), du = 0, lb = 1, a0 = e8.length - 1; 0 <= a0; a0--) du += lb * e8[a0], lb *= 64;
		return du
	}
}

function rf() {
	var u, iH, rg;

	function s4(pi, f9, s2, rl, rx) {
		f9 = s3(pi, f9 + 1 + 2 * rl & 3);
		! function(pi, s5) {
			return 1 < Math.abs(pi % u - s5 % u) || 1 < Math.abs(s8(pi) - s8(s5))
		}(pi, f9) && 0 === rx[f9 << 2] && (rx[f9 << 2] = s2)
	}

	function s8(f7) {
		return Math.floor((f7 + .5) / u) % iH
	}

	function s3(f7, f9) {
		return f7 + rg[f9]
	}
	this.rh = function(oG) {
		var a0, ri, f0, rj, rS = b7;
		for (b6.pc.rZ(b6.pc.rX(oG)), bI.eV = u = rS.nd(12), bI.eW = iH = rS.nd(12), rg = [-u, -1, u, 1], bI.ru = document.createElement("canvas"), bI.ru.width = bI.eV, bI.ru.height = bI.eW, bI.rq = bI.ru.getContext("2d", {
				alpha: !1
			}), bI.rr = bI.rq.getImageData(0, 0, bI.eV, bI.eW), bI.rv = bI.rr.data, b2.og.rw(bI.rv), f0 = rS.nd(12), ri = rS.nd(5), rj = rn(u * iH - 1), a0 = 0; a0 < f0; a0++) ! function(jc, f7, rk, rl) {
			var a0, f9, rS = b7,
				rx = bI.rv,
				ry = f7,
				rz = f7,
				s0 = 0,
				s1 = 1 + rk,
				s2 = 2 - rk;
			for (rx[f7 << 2] = s1, a0 = 0; a0 < jc; a0++) f9 = rS.nd(2), f7 = s3(f7, f9), rx[f7 << 2] === s1 ? s0 % 2 == 1 && s4(rz, s0 + 2 * rl + 3, s2, rl, rx) : rx[f7 << 2] = s1, s4(f7, f9, s2, rl, rx), s4(rz, f9, s2, rl, rx), rz = f7,
				s0 = f9;
			s3(f7, 0) === ry ? (s4(f7, 0, s2, rl, rx), s4(ry, 0, s2, rl, rx)) : s3(f7, 1) === ry && (s4(f7, 0, s2, rl, rx), s4(ry, 2, s2, rl, rx));
			0 === jc && (s4(ry, 0, s2, rl, rx), s4(ry, 2, s2, rl, rx))
		}(rS.nd(ri), rS.nd(rj), 1 === rS.nd(1), 1 === rS.nd(1));
		var fi, fj, jf, s9, sA, sB, rx = bI.rv,
			sC = !0,
			sD = bI.jB.sE[bI.sF].sD,
			sG = bI.jB.sE[bI.sF].sG;
		for (fj = 0; fj < iH; fj++)
			for (s9 = !0, sA = sC, fi = sB = 0; fi < u; fi++) jf = 4 * fj * u + 4 * fi, sB <= fi && 0 < rx[jf] && (sA = 2 === rx[jf], s9) && (s9 = !1, sA !== sC) ? (sC = sA, sB = fi + 1, fi = -1) : (sA ? (rx[jf] = sG[0], rx[1 + jf] = sG[1], rx[
				2 + jf] = sG[2]) : (rx[jf] = sD[0], rx[1 + jf] = sD[1], rx[2 + jf] = sD[2]), rx[3 + jf] = 255);
		bI.rq.putImageData(bI.rr, 0, 0), bI.rs = !0, bI.rt.dG(), bU.dN = !0
	}
}

function bs() {
	var fi, fj, u, iH, sH, sI, sJ, sK, player, e8;

	function sS() {
		return function() {
			var a0;
			for (a0 = 0; a0 < 8; a0++)
				if (fi = bB.eo(u * ao.random(), ao.value(100)), fj = bB.eo(iH * ao.random(), ao.value(100)), sa()) return 1;
			return
		}() || function() {
			var gu, gx, i1, sQ, i7, sP;
			for (gu = bB.eo(u * ao.random(), ao.value(100)), gx = bB.eo(iH * ao.random(), ao.value(100)), i1 = 40; 1 <= i1; i1--)
				for (sQ = iH - i1; 0 <= sQ; sQ -= 40)
					for (fj = (sQ + gx) % iH, i7 = 40; 1 <= i7; i7--)
						for (sP = u - i7; 0 <= sP; sP -= 40)
							if (fi = (sP + gu) % u, sa()) return 1;
			return
		}()
	}

	function sa() {
		for (var f7, sc, gap = bB.eo(sH - sK, 2), sd = sJ + fj * sH + gap, se = sI + fi * sH + gap, sb = sd + sK - 1; sd <= sb; sb--)
			for (sc = se + sK - 1; se <= sc; sc--)
				if (f7 = aS.sY(sc, sb), !aS.f2(f7) || aS.hx(f7)) return;
		return 1
	}

	function sT(sP, sQ) {
		sL(), sf(sP - 2, sQ - 2)
	}

	function sL() {
		aX.kZ[player] = 0, aX.ew[player] = 0, aX.es[player] = aX.sg[player] = 0, aX.f1[player] = [], aX.fI[player] = [], aX.fJ[player] = [], aX.fM[player] = [], aX.hM[player] = aX.hO[player] = aX.hN[player] = aX.hP[player] = 0
	}

	function sf(sP, sQ) {
		var f7, a0, si, sj;
		for (aX.kZ[player] = 1, player < a2.is ? aX.ew[player] = a2.sh : aX.ew[player] = a3.j8[a3.hv[player]], aX.hM[player] = sP + 10, aX.hO[player] = sQ + 10, aX.hP[player] = aX.hN[player] = 0, si = sP; si < sP + 4; si++)
			for (sj = sQ; sj < sQ + 4; sj++)(sP < si && si < sP + 3 || sQ < sj && sj < sQ + 3) && (f7 = aS.sY(si, sj), aS.f2(f7)) && (aX.hM[player] = si < aX.hM[player] ? si : aX.hM[player], aX.hN[player] = si > aX.hN[player] ? si : aX.hN[player], aX
				.hO[player] = sj < aX.hO[player] ? sj : aX.hO[player], aX.hP[player] = sj > aX.hP[player] ? sj : aX.hP[player], e8[aX.es[player]] = f7, aX.es[player]++, aS.sk(f7, player));
		for (aX.sg[player] = aX.es[player], a0 = aX.es[player] - 1; 0 <= a0; a0--) aS.sl(e8[a0], player) ? (aS.f3(e8[a0], player), aX.fI[player].push(e8[a0])) : aS.sm(e8[a0]) ? (aS.f3(e8[a0], player), aX.fJ[player].push(e8[a0])) : aS.sn(e8[a0]) && (
			aS.f3(e8[a0], player), aX.fM[player].push(e8[a0]))
	}

	function sZ(sP, sQ) {
		for (var f7, sc, sb = sQ; sQ - 6 < sb; sb--)
			for (sc = sP; sP - 6 < sc; sc--)
				if (f7 = aS.sY(sc, sb), aS.hx(f7)) return;
		return 1
	}
	this.dG = function() {
		var a0, sP, sQ;
		if (e8 = new Array(12), sK = 6, sH = 10, u = bB.eo(bI.eV, sH), iH = bB.eo(bI.eW, sH), sI = bB.eo(bI.eV - sH * u, 2), sJ = bB.eo(bI.eW - sH * iH, 2), a2.g2)
			for (a0 = 0; a0 < a2.is; a0++) player = a0, sL(), aX.kZ[player] = 1;
		if (ay.jA && ay.jB.sM) {
			for (player = 0; player < a2.f4; player++)
				if (1 !== aX.kZ[player]) {
					if (player < a2.sR) {
						if (function() {
								var sP = ay.jB.sM[player] + 1,
									sQ = ay.jB.sX[player] + 1;
								if (3 < sP && sP < bI.eV - 5 && 3 < sQ && sQ < bI.eW - 5 && aS.f2(aS.sY(sP, sQ)) && sZ(sP + 3, sQ + 3)) return sT(sP + 1, sQ + 1), 1;
								return
							}()) continue;
						if (sS()) {
							sP = sI + fi * sH + bB.eo(sH, 2), sQ = sJ + fj * sH + bB.eo(sH, 2), sT(sP, sQ);
							continue
						}
					}
					sL()
				}
		} else ! function() {
			var sP, sQ;
			for (player = 0; player < a2.f4; player++) 1 !== aX.kZ[player] && (player < a2.sR && sS() ? (sP = sI + fi * sH + bB.eo(sH, 2), sQ = sJ + fj * sH + bB.eo(sH, 2), sT(sP, sQ)) : sL())
		}();
		bS.ey[7] = aX.es[a2.ev], bS.ey[8] = aX.ew[a2.ev]
	}, this.so = function(hu, sp, sq) {
		var a0, sP, sQ, f7, fi, fj;
		for (player = hu, a0 = 0; a0 < 20; a0++)
			for (sP = sp + a0; sp - a0 <= sP; sP--)
				for (sQ = sq + a0; sq - a0 <= sQ; sQ--)
					if ((sP === sp + a0 || sP === sp - a0 || sQ === sq + a0 || sQ === sq - a0) && 3 < sP && sP < bI.eV - 5 && 3 < sQ && sQ < bI.eW - 5 && aS.f2(aS.sY(sP, sQ)) && sZ(sP + 3, sQ + 3)) {
						if (0 < aX.es[player]) {
							for (fj = fi = f7 = void 0, fi = aX.hN[player]; fi >= aX.hM[player]; fi--)
								for (fj = aX.hP[player]; fj >= aX.hO[player]; fj--) f7 = 4 * (fj * bI.eV + fi), aS.ss(player, f7) && (aS.st(f7), aX.es[player]--);
							sL()
						}
						return sf(sP - 1, sQ - 1), !0
					} return !1
	}, this.su = function(hu) {
		player = hu, sS() ? sT(sI + fi * sH + bB.eo(sH, 2), sJ + fj * sH + bB.eo(sH, 2)) : sL()
	}
}

function sv() {
	ag.sw(), kx.setTransform(hA, 0, 0, hA, 0, 0), kx.imageSmoothingEnabled = hA < 3, kx.drawImage(bI.ru, aH.ky(), aH.kz()), bF.sx.kn(), kx.drawImage(sy, aH.ky(), aH.kz()), ag.kn(), bD.kn(), aW.kn(), a6.kn(), (a2.lT ? (bW.kn(), b3) : (aC.kn(), aK
	.kn(), aG.kn(), b3.kn(), al.kn(), aL.kn(), aH.kn(), aF.kn(), bW.kn(), aJ.kn(), aE.kn(), aB.kn(), aA.kn(), aM.kn(), bT.kn(), ai)).kn(), i.kn()
}

function sz(t0, u, iH) {
	t0.clearRect(0, 0, u, iH), t0.fillStyle = p.lu, t0.fillRect(0, 0, u, iH)
}

function t1(t0, u, iH, t2) {
	t0.fillStyle = p.lx, t0.fillRect(0, 0, u, t2), t0.fillRect(0, 0, t2, iH), t0.fillRect(u - t2, 0, t2, iH), t0.fillRect(0, iH - t2, u, t2)
}

function t3(t0, fi, fj, gI, t2, f7, t4) {
	t0.fillStyle = p.lx;
	var f7 = Math.floor(gI * f7),
		ph = (f7 += (f7 - t2) % 2, Math.floor((f7 - t2) / 2)),
		gI = Math.floor((gI - f7) / 2);
	t0.fillRect(fi + gI, fj + gI + ph, f7, t2), t4 && t0.fillRect(fi + gI + ph, fj + gI, t2, f7)
}

function t6() {
	this.t7 = null, this.dG = function(t7) {
		this.t7 = t7, aC.t8(this.t7)
	}, this.t9 = function(tA) {
		var gg = (this.t7[tA].tB - this.t7[1 - tA].tB) / 10,
			gg = 8 / (1 + Math.pow(2, gg / 32)),
			gg = Math.floor(10 * gg + .5),
			tD = this.tE(this.t7[tA].tB + gg + 1),
			gg = this.tE(this.t7[1 - tA].tB - gg);
		0 === tA ? aC.tG(this.t7, tD, gg, ["rgba(10,140,10,0.75)", "rgba(140,10,10,0.75)"]) : aC.tG(this.t7, gg, tD, ["rgba(140,10,10,0.75)", "rgba(10,140,10,0.75)"])
	}, this.tE = function(tB) {
		return 16e3 <= (tB = tB < 0 ? 0 : 16e3 < tB ? 16e3 : tB) ? "Unknown" : (tB / 10).toFixed(1)
	}
}

function cL() {
	this.tH = new tI, this.rx = new tJ
}

function tJ() {
	this.tK = !1;
	this.tO = [], this.tP = 100;
	var ks, kt, gap, gI, tL, tN, tQ = 0,
		tR = new Array(9),
		tS = [],
		tT = [],
		tU = 0,
		tV = 0,
		tW = 0,
		tX = 0;

	function ti() {
		tR.sort(function(i1, i7) {
			return i7.j0 - i1.j0
		});
		for (var oG = "" + tR[0].nD, a0 = 1; a0 < 9; a0++) oG += "," + tR[a0].nD;
		for (a0 = 0; a0 < 9; a0++) oG += "," + tR[a0].j0;
		bY.dY.dZ(120, oG)
	}
	this.dG = function() {
		for (var po = [0, 1, 2, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 6], a0 = 0; a0 < po.length; a0++) {
			var color = 6 === po[a0] ? p.mJ : p.lv;
			this.tO.push(b2.gO.tY(aR.get(3), po[a0], color))
		}
		for (a0 = 0; a0 < aa.tH.tZ; a0++) tT.push(aa.tH.ta - aa.tH.tZ + a0);
		for (a0 = 0; a0 < aa.tH.tb; a0++) tT.push(aa.tH.tc + a0);
		var td = aa.tH.te(bA.td);
		for (a0 = 0; a0 < td.length; a0++) tT.push(td[a0]);
		! function() {
			var a0, e8 = bY.dY.data[120].value.split(",");
			if (18 !== e8.length)
				for (a0 = 0; a0 < 9; a0++) tR[a0] = {
					nD: 1015 + a0,
					j0: 0
				};
			else
				for (a0 = 0; a0 < 9; a0++) {
					var du = parseInt(e8[a0]),
						io = (du = 0 <= du && du < aa.tH.ta ? du : 0, parseInt(e8[a0 + 9]));
					io = 0 <= io && io < 1e3 ? io : 0, tR[a0] = {
						nD: du,
						j0: io
					}
				}
		}()
	}, this.show = function(jo, jp, tj) {
		var a0;
		if (tU = jo, tV = jp, tQ = tj || 0, this.tK = !0, tS = [], 0 === tQ)
			for (a0 = 0; a0 < 9; a0++) tS.push(tR[a0].nD);
		else {
			var i7 = 49 * tQ,
				tj = i7 - 49;
			for (tj >= tT.length && (tQ = 1, tj = 0, i7 = 49), a0 = tj = (i7 = Math.min(i7, tT.length)) - 49; a0 < i7; a0++) tS.push(tT[a0])
		}
		tS.push(1024);
		tj = tS.length, gI = Math.floor((m.n.tk() ? .075 : .0468) * an.oX), gap = Math.floor(gI / 3), (tW = 10 * (tL = gI + gap)) > an.u && (tW = an.u, gap = (tL = tW / 10) - (gI = 3 * tL / 4)), tN = bB.eo(tj, 10) + !!(tj % 10), (tX = tN * tL) >
			an.iH && (tX = an.iH, gap = (tL = tX / tN) - (gI = 3 * tL / 4)), tj = .5 * gap;
		ks = Math.min(Math.max(jo - .5 * tW + tj, tj), an.u - tW + tj), kt = Math.min(Math.max(jp - .5 * tX + tj, tj), an.iH - tX + tj)
	}, this.fq = function(jo, jp, player) {
		if (!this.tK) return !1;
		if (this.tm(jo, jp)) {
			jo = bB.o8(bB.eo(jo - ks + .5 * gap, tL), 0, 9);
			if ((jo += 10 * bB.o8(bB.eo(jp - kt + .5 * gap, tL), 0, 9)) >= tS.length) return aA.pu(), !0;
			jp = tS[jo];
			if (1024 === jp) return this.show(tU, tV, tQ + 1), !0;
			! function(nD) {
				for (var a0 = 0; a0 < 9; a0++) tR[a0].j0 = Math.floor(.99 * tR[a0].j0);
				for (a0 = 0; a0 < 9; a0++)
					if (nD === tR[a0].nD) return tR[a0].j0 = Math.min(tR[a0].j0 + 30, 999), ti();
				tR.splice(5, 0, {
					nD: nD,
					j0: Math.max(tR[4].j0, 30)
				}), tR.pop(), ti()
			}(jp), player === a2.ev ? b0.g3.nC(jp) : b0.eq.nS(jp, player)
		}
		return aA.pu(), !0
	}, this.tm = function(jo, jp) {
		return !(jo < ks - .5 * gap || jp < kt - .5 * gap || ks + tW - .5 * gap <= jo || kt + tX - .5 * gap <= jp)
	}, this.kn = function() {
		kx.fillStyle = p.lu, kx.fillRect(ks - .5 * gap, kt - .5 * gap, tW, tX);
		for (var jf = .5 * bR.tn, f0 = (kx.lineWidth = bR.tn, kx.strokeStyle = kx.fillStyle = p.lx, kx.strokeRect(ks - .5 * gap + jf, kt - .5 * gap + jf, tW - 2 * jf, tX - 2 * jf), kx.imageSmoothingEnabled = !0, tS.length), a0 = 0; a0 < f0; a0++)
			this.to(tS[a0], kx, ks + a0 % 10 * tL, kt + bB.eo(a0, 10) * tL, gI);
		kx.imageSmoothingEnabled = !1
	}, this.to = function(nD, gP, fi, fj, gI) {
		var fz;
		nD >= 1024 - aa.tH.tZ ? (fz = gI / this.tP, gP.setTransform(fz, 0, 0, fz, fi, fj), gP.drawImage(this.tO[nD - 1024 + aa.tH.tZ], 0, 0), gP.setTransform(1, 0, 0, 1, 0, 0)) : (b2.kw.textAlign(gP, 1), b2.kw.textBaseline(gP, 1), gP.font = b2.kw
			.l1(0, .89 * gI), gP.fillText(aa.tH.tp(nD), fi + .5 * gI, fj + (.35 - b2.kw.tq + .56) * gI))
	}
}

function tI() {
	this.emojis = ["🥰", "😎", "😘", "😜", "🤗", "🥳", "😇", "😊", "🥱", "🙄", "🤔", "🥺", "😡", "😭", "😱", "😞", "💀", "👹", "👋", "🙏", "👏", "💪", "🙋‍♂️", "🤦‍♂️", "⬆️", "➡️", "⬇️", "⬅️", "👀", "❤️", "💔", "💥", "🔥", "🪦", "🥇", "🥈", "🥉",
		"🎖️", "🏅", "👑", "🎉", "💯", "✝️", "☪️", "🕉️", "☸️", "✡️", "☦️", "⚛️"
	], this.tZ = 13, this.tb = this.emojis.length, this.tc = 676, this.ta = 1024, this.tr = this.emojis.indexOf("💀"), this.ts = this.tr + 1, this.tt = this.emojis.indexOf("🥇"), this.tu = this.emojis.indexOf("😊"), this.tp = function(du) {
		return du < this.tc ? String.fromCharCode(55356, 56806 + bB.eo(du, 26), 55356, 56806 + du % 26) : this.emojis[Math.min(du - this.tc, this.tb - 1)]
	}, this.te = function(oG) {
		for (var f0 = oG.length - 2, e8 = [], a0 = 0; a0 < f0; a0++) {
			var gb = oG.charCodeAt(a0) - 56806,
				gc = oG.charCodeAt(a0 + 2) - 56806;
			0 <= gb && gb < 26 && 0 <= gc && gc < 26 && (e8.push(26 * gb + gc), a0 += 3)
		}
		return e8
	}, this.tv = function(du) {
		return du < this.tc
	}, this.tw = function(du) {
		return du >= 1024 - this.tZ
	}, this.tx = function(du) {
		return du >= this.tc && du < this.tc + this.ts
	}
}

function bl() {
	this.pc = new ty, this.rP = new tz, this.dG = function() {
		this.pc.dG()
	}
}

function tz() {
	this.rc = function(oG) {
		for (var f0 = oG.length, u = b4, a0 = 0; a0 < f0; a0++) u.x(16, oG.charCodeAt(a0))
	}
}

function ty() {
	var u0 = new Uint8Array(64);
	this.dG = function() {
		var a0;
		for (u0[0] = 45, u0[37] = 95, a0 = 0; a0 < 10; a0++) u0[a0 + 1] = 48 + a0;
		for (a0 = 0; a0 < 26; a0++) u0[a0 + 11] = 65 + a0, u0[a0 + 38] = 97 + a0
	}, this.pe = function(u1) {
		for (var rS = b7, ra = new Uint8Array(u1), a0 = 0; a0 < u1; a0++) ra[a0] = rS.nd(6);
		return ra
	}, this.pd = function(ra) {
		for (var f0 = ra.length, u2 = u0, e8 = [], a0 = 0; a0 < f0; a0++) e8.push(String.fromCharCode(u2[ra[a0]]));
		return e8.join("")
	}
}

function bt() {
	var u3, u4, u5;
	u3 = [32, 65, 191, 913, 931], u4 = [64, 127, 688, 930, 1155], u5 = new Array(u3.length + 1);
	for (var a0 = 0; a0 < u5.length; a0++) {
		u5[a0] = 0;
		for (var i1 = a0 - 1; 0 <= i1; i1--) u5[a0] += u4[i1] - u3[i1]
	}

	function uB(io) {
		for (var a0 = u3.length - 1; 0 <= a0; a0--)
			if (io >= u3[a0] && io < u4[a0]) return a0;
		return -1
	}
	this.rT = function(oG) {
		return 0 !== (oG = oG.trim()).indexOf("Bot ") && 0 !== oG.indexOf("[Bot] ") && function(oG, u8, u9) {
			var f0 = (oG = oG.trim()).length;
			if (f0 < u8 || u9 < f0) return !1;
			for (var io, uA = 0, a0 = 0; a0 < f0; a0++)
				if (io = oG.charCodeAt(a0), uA += 65 <= io && io <= 90 || 1040 <= io && io <= 1071 ? 1 : 0, -1 === uB(io)) return !1;
			if (3 < uA && uA > Math.floor(f0 / 2)) return !1;
			return !0
		}(oG, 3, 20)
	}, this.uC = function(oG) {
		for (var f0 = (oG = oG.trim()).length, e8 = [], a0 = 0; a0 < f0; a0++) {
			var io, f7 = uB(io = oG.charCodeAt(a0));
			e8.push(u5[f7] + io - u3[f7])
		}
		return e8
	}, this.rh = function(e8) {
		for (var io, i7, oG = "", f0 = e8.length, a0 = 0; a0 < f0; a0++)
			for (i7 = 1; i7 < u5.length; i7++)
				if (e8[a0] < u5[i7]) {
					io = u3[i7 - 1] + e8[a0] - u5[i7 - 1], oG += String.fromCharCode(io);
					break
				} return oG
	}, this.uD = function(oG) {
		for (var e8 = this.uC(oG), result = "", a0 = 0; a0 < e8.length; a0++) result = (result += e8[a0] < 10 ? "00" : e8[a0] < 100 ? "0" : "") + e8[a0].toString(10);
		return result
	}, this.uE = function(oG) {
		for (var e8 = new Array(Math.floor(oG.length / 3)), a0 = 0; a0 < oG.length; a0 += 3) e8[Math.floor(a0 / 3)] = parseInt(oG.substring(a0, a0 + 3));
		return this.rh(e8)
	}, this.uF = function(oG) {
		for (var du, e8 = [oG.length], a0 = 0; a0 < oG.length; a0++) e8[a0] = oG.charCodeAt(a0) - 48;
		var result = "";
		for (a0 = 0; a0 < oG.length; a0++) a0 === oG.length - 1 || 51 < 10 * e8[a0] + e8[a0 + 1] ? result += e8[a0].toString() : (du = 10 * e8[a0] + e8[a0 + 1], result += String.fromCharCode(du + (du < 26 ? 65 : 71)), a0++);
		return result
	}, this.uG = function(oG) {
		for (var io, result = "", a0 = 0; a0 < oG.length; a0++) 48 <= (io = oG.charCodeAt(a0)) && io < 58 ? result += String.fromCharCode(io) : 65 <= io && io < 75 ? result += "0" + (io - 65).toString() : 75 <= io && io < 91 ? result += (io - 65)
			.toString() : 97 <= io && io < 123 && (result += (io - 71).toString());
		return result
	}, this.uH = function(oG) {
		for (var f0 = oG.length, e8 = [], a0 = 0; a0 < f0; a0++)(io = oG.charCodeAt(a0)) < 58 ? e8.push(oG[a0]) : (io -= io < 91 ? 65 : 71, e8.push(String(bB.eo(io, 10))), e8.push(String(io - 10 * bB.eo(io, 10))));
		var f0 = e8.length - 2,
			io = 0,
			ra = [];
		for (a0 = 0; a0 < f0; a0 += 3) ra[io++] = parseInt(e8[a0] + e8[a0 + 1] + e8[a0 + 2]);
		return ra
	}, this.uI = function() {
		for (var gR, uJ = "", a0 = 0; a0 < 6; a0++) gR = 48 + ao.random() % 36, gR += 58 <= gR ? 39 : 0, uJ += String.fromCharCode(gR);
		return uJ
	}
}

function ct() {
	this.uK = new uL, this.uM = new uN, this.result = new uO, this.g7 = new uP, this.uQ = new uR, this.uS = new uT, this.uU = new uV, this.dG = function() {
		this.uQ.dG()
	}, this.hd = function() {
		this.uQ.hd()
	}
}

function uP() {
	this.uW = function() {
		for (var f0 = it, t7 = iv, uX = [], a0 = 0; a0 < f0; a0++) {
			var f7 = t7[a0];
			aS.uY(f7) && uX.push(f7)
		}
		return uX
	}, this.uZ = function() {
		for (var f0 = it, t7 = iv, ds = 0, es = aX.es, a0 = 0; a0 < f0; a0++) ds += es[t7[a0]];
		return ds
	}
}

function uL() {
	function ub() {
		if (2 === a2.uf) return 1;
		al.ug(), a2.uf = 2, a2.uh = a2.ui
	}

	function ud() {
		bH.uU.uj(), aM.show(1 === a2.uk, !1, 2 === a2.uk), bH.result.uj(), bH.uS.hd(), aC.ul(!0), aC.um(247, 0), aK.kJ(!0), aL.kJ(!0), al.kJ(), b3.un(), a2.fm && bU.uo.up(), bU.dN = !0, bQ.uq(), m.n.setState(0)
	}
	this.ua = function() {
		ub() || (a2.uc = 2, ud())
	}, this.ue = function() {
		ub() || (a2.uc = 1, ud())
	}
}

function uT() {
	this.hd = function() {
		var uz;
		2 === a2.uc ? (aC.ur(0, 59), a7.lY(2700)) : a2.jE < 7 ? (uz = bV.v0[bW.jx()], uz = bV.v2[uz], aF.v3(L(7, [uz]), 2, 1, 12), aC.v4(0, L(8, [uz]), 40, 0, p.lx, p.lu, -1, !1), a7.lY(2700)) : 8 === a2.jE ? (a2.uk ? aC.ur(a2.uw, 2) : aC.ur(1 -
			a2.ev, 3), a2.ux.t9(a2.uw), aC.uy(a2.uw), a7.lR(a2.uw, 2700, !1, 0)) : 9 === a2.jE ? (aC.v5(), a7.lY(2700)) : (aC.uy(a2.uw), a7.lR(a2.uw, 2700, !1, 0))
	}
}

function uO() {
	this.v6 = 0, this.uX = null;
	var v8 = this.v7 = 0;
	this.v9 = 0, this.uj = function() {
		var vD, f8, ds;
		bH.uQ.vA || (bH.uQ.vA = !0, a2.jG) || ((vD = this).uX = bH.g7.uW(), vD.v6 = bX.vE.vF(), a2.jE < 7 && 2 !== a2.uc ? vD.v7 = bW.vG() : vD.v7 = bH.g7.uZ(), 8 === a2.jE && 1 === a2.uc ? (f8 = 1 - a2.uw, ds = aX.es[f8], aX.es[f8] = 0, b0.eq
			.nb(), aX.es[f8] = ds) : b0.eq.nb(), v8 = .01 * aX.vK[a2.ev] / 50, vD.v9 = 0, a2.jE < 7 ? bH.uM.uj(vD.uX) : 7 === a2.jE || 10 === a2.jE ? b2.eq.fp(a2.ev) && (f8 = bH.result.v6 * (1 + a2.vN), 2 === a2.uc ? bH.result.v9 += f8 *
			aX.es[a2.ev] / bH.result.v7 : jz[0] === a2.ev && (bH.result.v9 += f8)) : 8 !== a2.jE || 1 !== a2.uk || 0 === bY.dY.data[107].value || 100 <= (ds = bY.dY.data[108].value) || (bH.result.v9 += .01 * (100 - ds) * 10), this.vC())
	}, this.vC = function() {
		b2.eq.fp(a2.ev) && (.01 <= v8 && aC.v4(0, L(9, [v8.toFixed(2)]), 40, 0, p.mC, p.lu, -1, !1), .01 <= bH.result.v9) && aC.v4(0, L(10, [bH.result.v9.toFixed(2)]), 40, 0, p.mC, p.lu, -1, !1)
	}, this.vO = function() {
		var ry, vP;
		a2.jG || bH.uQ.vA || (vP = aX, ry = a2.ev, 0 === vP.vQ[ry]) || vP.hm[ry] < 1 || 2 * vP.nx[ry] > 3 * (vP.hl[ry] + vP.hm[ry]) || (vP = .01 * vP.vK[ry] / 50) < .01 || aC.v4(0, L(9, [vP.toFixed(2)]), 40, 0, p.mC, p.lu, -1, !1)
	}
}

function uR() {
	this.vA = !1, this.dG = function() {
		this.vA = !1
	}, this.hd = function() {
		7 <= a2.jE || this.vA || bU.et() % 20 == 11 && b2.eq.jt(90) && (a2.uc = 1, bH.uU.uj(), bH.result.uj())
	}
}

function uN() {
	function vU(vS) {
		for (var gg = (1 + a2.vN) * bH.result.v6 / (1e5 * bH.result.v7), vY = "", a0 = 0; a0 < vS.length; a0++) {
			var vZ = vS[a0].va * gg;
			vY += "  " + vS[a0].name + ": " + b2.l4.vb(1e5 * vZ)
		}
		vY.length && (aC.v4(0, L(11), 45, 0, b2.color.lp(225, 240, 255), p.lu, -1, !1), aC.v4(0, vY.trim(), 45, 0, b2.color.lp(225, 240, 255), p.lu, -1, !1), a2.fm || aC.v4(700, L(12) + bA.vc, 736, 0, p.lx, p.mH, -1, !1))
	}
	this.uj = function(uX) {
		var uz = bV.v0[bW.jx()],
			uX = (a2.uk && b2.eq.fp(a2.ev) && (bH.result.v9 += (b2.l4.vW(aX.vX[a2.ev]) ? 2 : 1) * bH.result.v6 * (1 + a2.vN) * aX.es[a2.ev] / bH.result.v7), function(t7) {
				var vS = [],
					username = aX.vX,
					f0 = t7.length;
				loop: for (var a0 = 0; a0 < f0; a0++) {
					var f7 = t7[a0],
						vd = b2.l4.vW(username[f7]);
					if (vd) {
						for (var i1 = vS.length - 1; 0 <= i1; i1--)
							if (vS[i1].name === vd) {
								vS[i1].va += aX.es[f7];
								continue loop
							} vS.push({
							name: vd,
							va: aX.es[f7],
							ve: bV.ip[f7]
						})
					}
				}
				return vS.sort(function(i1, i7) {
					return i7.va - i1.va
				}), vS
			}(uX));
		uX.length && (2 === a2.uc ? vU(uX) : vU(function(vS, uz) {
			for (var a0 = vS.length - 1; 0 <= a0; a0--) bV.v0[vS[a0].ve] !== uz && vS.splice(a0, 1);
			return vS
		}(uX, uz)))
	}
}

function uV() {
	this.uj = function() {
		2 === a2.uc ? a2.uk = 2 : 8 === a2.jE ? (aS.uY(0) ? aS.uY(1) ? a2.uw = +(aX.es[1] > aX.es[0]) : a2.uw = 0 : a2.uw = 1, a2.uk = +(a2.uw === a2.ev)) : a2.ho ? a2.uk = +(bV.ip[a2.ev] === bW.vg()) : (a2.uw = jz[0], a2.uk = +(a2.uw === a2.ev))
	}
}

function cy() {
	this.id = 0, this.dv = 0, this.ql = null, this.t = null, this.qm = null, this.qs = null, this.n = new vh, this.dG = function() {
		var self, dv;
		self = this, "undefined" == typeof Android || "function" != typeof Android.getVersion || (dv = Android.getVersion()) < 12 || (self.dv = dv, self.id = 1, self.t = Android),
			function(self) {
				var dv;
				"undefined" != typeof mwIOSdataX && window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.iosCommandA && (self.id = 2, self.qm = mwIOSdataX, self.qs = window.webkit.messageHandlers.iosCommandA, dv = self
					.qm.version, self.dv = dv ? Number(dv) : 0)
			}(this),
			function(self) {
				var ql;
				if (0 === self.id) {
					try {
						if (!(ql = window.localStorage)) return;
						ql.setItem("tls7", "1"), ql.removeItem("tls7")
					} catch (error) {
						return
					}
					self.ql = ql
				}
			}(this)
	}
}

function vh() {
	this.vl = function() {
		bY.p8.r6(), bY.p8.r7(), aq.kB.close(0, 3255), 0 === m.id ? m.ql && m.ql.clear() : 1 === m.id ? m.t.saveString(199, "") : 2 === m.id && m.qs.postMessage("clear")
	}, this.vm = function() {
		2 === m.id ? m.qs.postMessage("showConsentForm") : 1 === m.id ? m.t.setState(7) : bK.da.showCMPScreen()
	}, this.vn = function() {
		this.setState(14)
	}, this.vo = function() {
		var oG = bY.dY.qh(101),
			max = ("string" != typeof(oG = "" === oG ? function() {
				{
					if (2 === m.id) return m.qm.password;
					if (1 === m.id) return 12 <= m.dv ? m.t.loadString(22) : ""
				}
				return aT.vr(9)
			}() : oG) && (oG = ""), Math.floor(Math.pow(2, 48))),
			vq = Math.floor(parseInt(a9.uG(oG)));
		return 0 < vq && vq < max ? bY.dY.dZ(101, oG) : (vq = Math.floor(1 + (max - 1) * Math.random()), bY.dY.dZ(101, oG)), vq
	}, this.tk = function() {
		return 1 === bY.dY.qg(2)
	}, this.vs = function() {
		bY.dY.dZ(102, "")
	}, this.setState = function(dq) {
		1 === m.id && 5 <= m.dv && m.t.setState(dq)
	}, this.o = function() {
		var vt;
		1 === m.id && 7 <= m.dv ? m.t.setState(5) : ((vt = new URL(window.location)).searchParams.set("v", "" + Math.floor(1e3 * Math.random())), window.location.href = vt.toString())
	}, this.dK = function() {
		1 !== m.id || m.dv < 17 || m.t.saveString(23, document.documentElement.outerHTML)
	}, this.de = function() {
		0 === m.id ? bK.da.dG() : 1 === m.id ? m.t.prepareAd("1688441405") : 2 === m.id && (0 === m.dv ? m.qs.postMessage("prepare ad 4500876070") : m.qs.postMessage("loadAds 4500876070"))
	}, this.dt = function(ds) {
		return 0 === m.id ? !!bK.da.dn() : 1 === m.id ? 12 <= m.dv && (m.t.presentAd(ds), !0) : 2 === m.id && (0 === m.dv ? m.qs.postMessage("show ad " + ds) : m.qs.postMessage("showAd"), !0)
	}, this.dP = function() {
		2 === m.id && m.dv < 23 && i.j(4, 1, new k("App Update Required", "A new iOS app version with bug fixes has been published.<br>Please download the new Territorial.io app version for iOS:<br><a href='" + bA.vu + "' target='_blank'>" + bA
			.vu + "</a>", !0, [new l(L(13), function() {
				i.j(0)
			}, p.mW)]))
	}
}

function dD() {
	function vx(d) {
		w5(d), i.j(4, 5, new k("🚀 New Game Update", "The game has been updated! Please reload the game." +
			"<div style='border: white; border-width: 1px; border-style: solid; margin: 10px; padding: 5px;'><h2>FX Client is not yet compatible with the latest version of the game.</h2><p>Updates should normally be available within a few hours.<br>You can still use FX to play in singleplayer mode.</p></div>",
			!0, [new l(L(13), function() {
				i.w6()
			}), new l("🔄 Reload", function() {
				m.n.o()
			}, p.q)]))
	}

	function w4(title, vY, d) {
		w5(d), i.j(4, 5, new k("⚠️ " + title, vY, !0))
	}

	function w5(d) {
		! function(d) {
			var dq = aP.vz();
			0 !== dq && (6 === dq ? aq.kB.wA(d) : 7 === dq ? (aj.wB(), aq.kB.close(aq.kB.w1, 3256)) : 8 === dq && a2.wC(!0))
		}(d), i.kB.w9()
	}
	this.vv = function(vw, d) {
		if (8 === i.pZ && 0 === vw)
			if (4211 === d) vx(d);
			else {
				if (4480 === d) return bY.p8.r8(), void i.j(4, 0, new k(L(16), L(17), !0));
				i.j(4, 0, new k(L(14), L(15, [d]), !0))
			}
		else {
			var dq = aP.vz();
			if (6 === dq) {
				if (4211 === d) return void vx(d);
				if (4214 !== d) return void aO.w0(vw)
			} else {
				if (7 !== dq) return 8 === dq ? void(vw !== aq.kB.w2 || a2.jG || 1 !== a2.uf || a2.fm || aC.w3(L(15, [d]))) : void 0;
				if (vw !== aq.kB.w1) return
			}
			w4("Error", d, d)
		}
	}, this.w7 = function(d) {
		8 === aP.vz() ? a2.jG || 1 !== a2.uf || aC.w3(L(15, [d])) : w4("Error", d, d)
	}, this.h = function() {
		w5(3268)
	}
}

function cn() {
	var wD, wE, wF = -15e3,
		wG = !1;

	function fq(d) {
		wa() || (wG = !0, wb(d, 1), aq.kB.wc(aq.kB.w2), wd(Math.floor(an.ob * d.clientX), Math.floor(an.ob * d.clientY)))
	}

	function wP(d) {
		wF = bU.dr, wb(d, 1), aq.kB.wc(aq.kB.w2), 0 < d.touches.length && (wD = Math.floor(an.ob * d.touches[0].clientX), wE = Math.floor(an.ob * d.touches[0].clientY), ah.wP(d) || wd(wD, wE))
	}

	function wd(fi, fj) {
		i.fq(fi, fj), 0 === a2.uf ? aP.fq(fi, fj) : b3.we(fi, fj) || bT.fq(fi, fj) || aM.fq(fi, fj) || aA.wf(fi, fj) || aE.fq(fi, fj) || aB.fq(fi, fj) || b9.wg(fi, fj) || al.fq(fi, fj) || aA.wh(fi, fj)
	}

	function wL(d) {
		wa() || (wG = !0, wb(d, 1), wi(Math.floor(an.ob * d.clientX), Math.floor(an.ob * d.clientY)))
	}

	function wQ(d) {
		wF = bU.dr, wb(d, 1), 0 < d.touches.length && (wD = Math.floor(an.ob * d.touches[0].clientX), wE = Math.floor(an.ob * d.touches[0].clientY), ah.wQ(d) || wi(wD, wE))
	}

	function wi(fi, fj) {
		i.wL(fi, fj), 0 === a2.uf ? aP.wL(fi, fj) : (bJ.fh(fi, fj), bT.wL(fi, fj) || (aB.wL(fi, fj), aA.tK() ? aA.wL(fi, fj) : aG.fr ? aG.wL(fi) && (bU.dN = !0) : (aK.wL(fi, fj), aH.lU && aH.wL(fi, fj) && (bU.dN = !0))))
	}

	function wN(d) {
		wa() || (wb(d, 1), wj(), 0 === a2.uf ? (aP.click(-1024, -1024), aI.wk()) : (aK.wl(-1024, -1024), aB.wL(-1024, -1024), aG.wm(), aH.lU = !1))
	}

	function wM(d) {
		wa() || (wb(d, 1), wn(Math.floor(an.ob * d.clientX), Math.floor(an.ob * d.clientY), 2 === d.button), b9.wJ && (b9.wJ = !1, d.preventDefault()))
	}

	function click(d) {
		wa() || wb(d, 1)
	}

	function wR(d) {
		wF = bU.dr, wb(d, 1), d && d.touches && 0 < d.touches.length && 0 !== a2.uf ? aH.lU = !1 : ah.wo() || (wn(wD, wE, !1), b9.wJ && (b9.wJ = !1, d.preventDefault()))
	}

	function wS(d) {
		wF = bU.dr, wb(d, 1), wn(wD, wE, !1), b9.wJ && (b9.wJ = !1, d.preventDefault())
	}

	function wT(d) {
		ax.wT(d)
	}

	function wU(d) {
		ax.wU(d)
	}

	function wV(d) {
		wa() || wb(d, 0)
	}

	function wn(fi, fj, wp) {
		wj(), 0 === a2.uf ? aP.click(fi, fj) : (aK.wl(fi, fj), bT.wl(), aG.wm(), aH.lU = !1, aA.click(fi, fj, wp) ? bU.dN = !0 : aB.wM(fi, fj))
	}

	function wj() {
		i.wj()
	}

	function wO(d) {
		var fi, fj, deltaY;
		wa() || (wb(d, 1), aq.kB.wc(aq.kB.w2), fi = Math.floor(an.ob * d.clientX), fj = Math.floor(an.ob * d.clientY), deltaY = d.deltaY, 1 === d.deltaMode && (deltaY *= 16), i.wO(fi, fj, deltaY), 0 === a2.uf ? aP.wO(fi, fj, deltaY) : aK.wO(fi, fj,
			deltaY) || (aG.wq(fi, fj) ? aG.wO(deltaY) && (bU.dN = !0) : aH.wO(fi, fj, deltaY)))
	}

	function wW(d) {
		wb(d, 0)
	}

	function wb(d, id) {
		0 === id && i.tK() || (id = window.innerWidth / document.documentElement.clientWidth) < .999 || 1.001 < id || 0 !== aP.vz() && d.preventDefault()
	}

	function wY(d) {
		if (keybindHandler(d.key)) return;
		wa() || ("ArrowLeft" === d.key ? ae.ws(3) : "ArrowUp" === d.key ? ae.ws(0) : "ArrowRight" === d.key ? ae.ws(1) : "ArrowDown" === d.key ? ae.ws(2) : "a" === d.key ? aG.wt(.9375) : "d" === d.key ? aG.wt(16 / 15) : "s" === d.key ? aG.wt(7 / 8) :
			"w" === d.key ? aG.wt(8 / 7) : "1" === d.key ? aG.wt(.75) : "2" === d.key ? aG.wt(7 / 8) : "3" === d.key ? aG.wt(.9375) : "4" === d.key ? aG.wt(31 / 32) : "5" === d.key ? aG.wt(32 / 31) : "6" === d.key ? aG.wt(16 / 15) : "7" === d
			.key ? aG.wt(8 / 7) : "8" === d.key ? aG.wt(4 / 3) : "+" === d.key ? 0 !== a2.uf && aH.wO(Math.floor(an.u / 2), Math.floor(an.iH / 2), -200) : "-" === d.key ? 0 !== a2.uf && aH.wO(Math.floor(an.u / 2), Math.floor(an.iH / 2), 200) :
			"c" === d.key ? 0 !== a2.uf && bT.wu() : " " === d.key ? a2.uf && bJ.fk(!1) : "b" === d.key && a2.uf && bJ.fk(!0))
	}

	function wX(d) {
		wa() || bU.dr < 400 || "Enter" === d.key && i.wv(1) || (8 !== aP.vz() && aP.wv(d) ? bU.dN = !0 : "Escape" === d.key ? b9.dw() : "ArrowLeft" === d.key || "a" === d.key ? ae.ww(3) : "ArrowUp" === d.key || "w" === d.key ? ae.ww(0) :
			"ArrowRight" === d.key || "d" === d.key ? ae.ww(1) : "ArrowDown" === d.key || "s" === d.key ? ae.ww(2) : "h" === d.key ? b3.wx(!a2.lT) : " " === d.key && a2.uf && (aB.fn && aB.wy(), a2.fm) && b3.wz(!1))
	}

	function wZ() {
		"hidden" === document.visibilityState ? 1 === a2.uf && (a2.fm ? b3.x0() : !a2.jG || aB.fn || a2.g2 || aB.wy()) : bU.dN = !0
	}

	function wa() {
		return wF + 15e3 > bU.dr
	}

	function resize() {
		an.x2()
	}
	this.wH = 0, this.wI = "", this.wJ = !1, this.dG = function() {
		wK.addEventListener("mousedown", fq, {
			passive: !1
		}), wK.addEventListener("mousemove", wL, {
			passive: !1
		}), wK.addEventListener("mouseup", wM, {
			passive: !1
		}), wK.addEventListener("click", click, {
			passive: !1
		}), wK.addEventListener("mouseleave", wN, {
			passive: !1
		}), wK.addEventListener("wheel", wO, {
			passive: !1
		}), wK.addEventListener("touchstart", wP, {
			passive: !1
		}), wK.addEventListener("touchmove", wQ, {
			passive: !1
		}), wK.addEventListener("touchend", wR, {
			passive: !1
		}), wK.addEventListener("touchcancel", wS, {
			passive: !1
		}), wK.addEventListener("dragover", wT), wK.addEventListener("drop", wU), wK.addEventListener("dblclick", wV), document.addEventListener("contextmenu", wW), document.addEventListener("keyup", wX), document.addEventListener("keydown",
			wY), document.addEventListener("visibilitychange", wZ), window.addEventListener("resize", resize)
	}, this.wg = function(fi, fj) {
		return !!b3.fq(fi, fj) || !!(aK.fq(fi, fj) || aH.fq(fi, fj) || aG.fq(fi, fj) || aC.fq(fi, fj))
	}, this.x1 = wa, this.ou = function() {
		return !wG || 0 < wF
	}, this.dw = function() {
		if (!i.tK()) return 8 === aP.vz() ? a2.lT ? void b3.wx(!1) : bT.tK ? void bT.wy() : void aB.wy() : void(7 === aP.vz() ? aj.x3() : 6 === aP.vz() ? aO.x4() : 2 === aP.vz() && aQ.x5());
		i.wv(2)
	}
}

function bh() {
	this.kw = new x6, this.og = new x7, this.eq = new x8, this.l4 = new x9, this.t0 = new xA, this.xB = new xC, this.gO = new xD, this.color = new xE, this.xF = new xG, this.dG = function() {
		this.kw.r5()
	}
}

function x7() {
	this.rw = function(e8) {
		e8.fill(0)
	}, this.xH = function(e8) {
		for (var f0 = e8.length, a0 = 0; a0 < f0; a0++) e8[a0] = []
	}, this.xI = function(gb, xJ) {
		for (var gc = bE.e2, a0 = 0; a0 < 3; a0++) gc[a0] = xJ * gb[a0];
		return gc
	}, this.xK = function(gb, gc, xL) {
		for (var gg = 0, a0 = 0; a0 < 3; a0++) gg += Math.abs(gb[a0] - gc[a0]);
		return xL <= gg
	}, this.xM = function(gb, xN) {
		for (var a0 = 0; a0 < 3; a0++) gb[a0] = bB.o8(gb[a0] + xN, 0, 255);
		return gb
	}, this.xO = function(e8, pr, ps) {
		var a0, xP = 0;
		for (ps = ps || e8.length - 1, a0 = pr = pr || 0; a0 <= ps; a0++) xP += e8[a0];
		return xP
	}, this.xQ = function(e8, xR) {
		for (var a0, xS, f0 = e8.length, xT = [], i1 = f0 - 1; 0 <= i1; i1--) {
			for (a0 = xS = 0; a0 < f0; a0++) xR(e8[a0]) < xR(e8[xS]) && (xS = a0);
			f0--, xT.push(e8[xS]), e8[xS] = e8[f0], e8.pop()
		}
		return xT
	}, this.min = function(e8) {
		var a0, du, f0 = e8.length;
		if (0 === f0) return 0;
		for (du = e8[0], a0 = 1; a0 < f0; a0++) du = Math.min(du, e8[a0]);
		return du
	}, this.max = function(e8) {
		var a0, du, f0 = e8.length;
		if (0 === f0) return 0;
		for (du = e8[0], a0 = 1; a0 < f0; a0++) du = Math.max(du, e8[a0]);
		return du
	}, this.xU = function(xV, xW, min) {
		for (var f0 = xW[0], a0 = f0 - 1; 0 <= a0; a0--) xV[a0] < min && (xV[a0] = xV[--f0]);
		xW[0] = f0
	}, this.xX = function(e8, f0, value) {
		for (var a0 = 0; a0 < f0; a0++) e8[a0] -= value
	}, this.xY = function(e8) {
		for (var f0 = e8.length, a0 = 0; a0 < f0; a0++)
			if ("string" != typeof e8[a0]) return !1;
		return !0
	}
}

function xD() {
	this.tY = function(xZ, kh, xa) {
		var gI = xZ.height,
			xb = b2.kw.rm(gI, gI),
			gP = b2.kw.getContext(xb);
		return function(u, gP, xa) {
			gP.fillStyle = xa, gP.beginPath(), gP.arc(u / 2, u / 2, .47 * u, 0, 2 * Math.PI), gP.fill()
		}(gI, gP, xa), gP.drawImage(xZ, -kh * gI, 0), xb
	}, this.xd = function(xe) {
		var gP, gL, gI = xe.height;
		return xe.width === gI && (gL = (gP = b2.kw.getContext(xe, !0)).getImageData(0, 0, gI, gI), b2.xB.xf(gL.data, gI, gI, .9), gP.putImageData(gL, 0, 0)), xe
	}
}

function xE() {
	this.xg = function(du) {
		return [du >> 12 & 63, du >> 6 & 63, 63 & du]
	}, this.xh = function(du) {
		for (var e8 = this.xg(du), a0 = 0; a0 < 3; a0++) e8[a0] = ~~(4.05 * e8[a0]);
		return e8
	}, this.xi = function(du) {
		du = this.xh(du);
		return b2.color.lp(du[0], du[1], du[2])
	}, this.xj = function(e8) {
		for (var a0 = 0; a0 < 3; a0++) e8[a0] = ~~(e8[a0] / 4.04);
		return (e8[0] << 12) + (e8[1] << 6) + e8[2]
	}, this.lp = function(gR, pv, i7) {
		return "rgb(" + gR + "," + pv + "," + i7 + ")"
	}, this.lr = function(gR, pv, i7, i1) {
		return "rgba(" + gR + "," + pv + "," + i7 + "," + i1.toFixed(3) + ")"
	}, this.ow = function(io) {
		for (var e8 = io.split("(")[1].split(","), e1 = (e8.length, bE.e1), a0 = 0; a0 < 3; a0++) e1[a0] = parseInt(e8[a0]);
		return e1
	}, this.or = function(xk, f9) {
		for (var e8 = xk.slice(xk.indexOf("(") + 1, xk.indexOf(")")).split(","), e1 = bE.e1, a0 = 0; a0 < 3; a0++) e1[a0] = bB.o8(parseInt(e8[a0].trim(), 10) + f9, 0, 255);
		return 3 === e8.length ? this.lp(e1[0], e1[1], e1[2]) : this.lr(e1[0], e1[1], e1[2], parseFloat(e8[3].trim()))
	}, this.xl = function(e8) {
		for (var oG = "#", a0 = 0; a0 < 3; a0++) {
			var gR = e8[a0].toString(16);
			oG += 1 === gR.length ? "0" + gR : gR
		}
		return oG
	}, this.xm = function(oG) {
		var gR, pv;
		return oG.length < 7 ? p.l2 : (gR = parseInt(oG.slice(1, 3), 16), pv = parseInt(oG.slice(3, 5), 16), oG = parseInt(oG.slice(5, 7), 16), this.lp(gR, pv, oG))
	}
}

function xA() {
	this.xn = function(oG, font, maxWidth) {
		if (kx.font = font, kx.measureText(oG).width <= maxWidth) return oG;
		for (var a0 = oG.length - 1; 1 <= a0; a0--)
			if (oG = oG.substring(0, a0), kx.measureText(oG + "...").width <= maxWidth) return oG + "...";
		return "..."
	}
}

function xG() {
	var xo = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	this.xp = function(dr) {
		var xr, oG = new Date(dr.getTime() - 6e4 * dr.getTimezoneOffset()).toUTCString();
		return oG.length < 12 || (oG = oG.substring(5, oG.length), 0 === (dr = dr.getTimezoneOffset())) ? oG : (xr = (dr < 0 ? "+" : "-") + bB.eo(Math.abs(dr), 60), 0 == (dr = Math.abs(dr) % 60) ? oG + xr : oG + xr + ":" + (dr < 10 ? "0" : "") +
			dr)
	}, this.xs = function(dr) {
		var oG = dr.toUTCString();
		return oG.length < 12 ? oG : function(dr) {
			return xo[dr.getUTCDay()]
		}(dr) + ", " + oG.substring(5, oG.length - 4)
	}
}

function x6() {
	var xu = null;
	this.tq = 0, this.r5 = function() {
		var du = bY.dY.data[5].value;
		xu = "px " + du, "Trebuchet MS" !== du && (xu += ", Trebuchet MS"), this.tq = gH(32, 32, ["a", "b", "m"], 200, xu)
	}, this.rm = function(u, iH) {
		var io = document.createElement("canvas");
		return io.width = u, io.height = iH, io
	}, this.getContext = function(gO, alpha) {
		return gO.getContext("2d", {
			alpha: alpha
		})
	}, this.getImageData = function(t0, u, iH) {
		return t0.getImageData(0, 0, u, iH)
	}, this.l1 = function(type, size) {
		return size = size.toFixed(2), 0 === type ? size + xu : 1 === type ? "bold " + size + xu : 2 === type ? "lighter " + size + xu : 3 === type ? "italic " + size + xu : 4 === type ? "oblique " + size + xu : 5 === type ? "small-caps " +
			size + xu : "small-caps bold " + size + xu
	}, this.textAlign = function(gP, id) {
		gP.textAlign = 0 === id ? "left" : 1 === id ? "center" : "right"
	}, this.textBaseline = function(gP, id) {
		gP.textBaseline = 1 === id ? "middle" : 2 === id ? "bottom" : "top"
	}, this.oi = function(d, code, color) {
		color = this.oh(bR.xv) + " solid " + (color || p.lx);
		5 === (code = code || 5) ? d.style.border = color : 4 === code ? d.style.borderLeft = color : 2 === code ? d.style.borderBottom = color : 6 === code ? d.style.borderRight = color : d.style.borderTop = color
	}, this.px = function(d, fi, fj, u, iH) {
		d = d.style;
		d.left = this.py(fi), d.top = this.py(fj), d.width = this.py(u), d.height = this.py(iH)
	}, this.oW = function(du) {
		return 1 + du * m.n.tk()
	}, this.pC = function(lb, f8) {
		return lb * this.oW(void 0 === f8 ? .5 : f8) * an.oX / an.ob
	}, this.pw = function(lb, f8) {
		return lb * this.oW(void 0 === f8 ? .5 : f8) * an.oX
	}, this.pf = function(lb, f8, xw) {
		return this.oW(f8) * Math.min(lb * an.oX, xw * an.u) / an.ob
	}, this.oh = function(du) {
		return du.toFixed(1) + "px"
	}, this.py = function(du) {
		return this.xy(du).toFixed(1) + "px"
	}, this.xy = function(du) {
		return du / an.ob
	}, this.xz = function(pR, y0) {
		for (var oG = "<ul>", f0 = pR.length, a0 = 0; a0 < f0; a0++) oG += "<li>" + pR[a0] + ": <a href='" + y0[a0] + "' target='_blank'>" + y0[a0] + "</a></li>";
		return oG += "</ul>"
	}, this.y1 = function(y2) {
		return "<a href='" + y2 + "' target='_blank'>" + y2 + "</a>"
	}, this.y3 = function(d) {
		navigator.clipboard && navigator.clipboard.writeText(d.value)
	}, this.y4 = function(d) {
		var ds = d.innerText;
		b2.l4.y5(ds, "✔") || (1 === ds.length ? d.innerText = "✔" : d.innerText = ds + " ✔", setTimeout(function() {
			d.innerText = ds
		}, 500))
	}, this.measureText = function(oG) {
		return kx.measureText(oG).width
	}
}

function x8() {
	this.fo = function(dq) {
		return 0 === dq ? 1 === a2.uf && a2.g2 : 1 === dq ? 1 === a2.uf && !a2.g2 : 2 === a2.uf
	}, this.fp = function(player) {
		return 0 !== aX.kZ[player] && 2 !== aX.y6[player]
	}, this.y7 = function(player) {
		return player === a2.ev && 2 !== aX.y6[player]
	}, this.iB = function(player) {
		return player >= a2.is || 2 === aX.y6[player]
	}, this.jh = function(player) {
		return 0 !== aX.kZ[player]
	}, this.nu = function(y8, y9) {
		return y8 !== y9
	}, this.nP = function(player, du) {
		return du = this.yA(player, du), aX.ew[player] += du, du
	}, this.yA = function(player, du) {
		var yB = aX.ew[player];
		return du = Math.min(du, aX.es[player] * a2.iz - yB), du = Math.min(du, a2.yC - yB), Math.max(du, 0)
	}, this.nv = function(player, h8, yD, yE) {
		var yB = aX.ew[player],
			h8 = bB.eo(yB * (h8 + 1), 1024),
			yD = bB.eo(yD * yB, 1024),
			h8 = Math.min(h8, yB - yD);
		return 10 === a2.jE && (h8 = av.yG(player, h8)), bE.dz[0] = h8, bE.dz[1] = yD, yE <= h8
	}, this.nM = function(player, n3, n2) {
		var player = aX.ew[player],
			yF = bB.eo(64 * player, 1024);
		return n3 = Math.min(n3, player - yF), yF += player = this.yI(n3), n3 = this.yA(n2, n3 -= player), bE.dz[0] = n3, bE.dz[1] = yF, 1 <= n3
	}, this.nO = function(n3, n2) {
		var yH = this.yI(n3);
		return n3 = this.yA(n2, n3 -= yH), bE.dz[0] = n3, bE.dz[1] = yH, 1 <= n3
	}, this.h7 = function(player, yJ) {
		return bB.eo(aX.ew[player] * (yJ + 1), 1024)
	}, this.yI = function(yK) {
		return bB.eo(Math.max(2142 - bU.et(), 0) * yK, 2142)
	}, this.o6 = function(player, yD) {
		aX.ew[player] -= bB.eo(yD * aX.ew[player], 1024)
	}, this.er = function(player, yL) {
		var i7 = aX.ew[player];
		return aX.ew[player] = Math.max(i7 - yL, 0), Math.min(i7, yL)
	}, this.ny = function(player) {
		aX.ew[player] -= bE.dz[0] + bE.dz[1]
	}, this.nw = function(player, hu) {
		return (hu = Math.min(hu, a2.f4)) < a2.f4 && 0 === aX.kZ[hu] && (hu = a2.f4), (bE.e4[0] = hu) === a2.f4 || gF(player, hu)
	}, this.o0 = function(player, n2) {
		return 0 !== aX.kZ[n2] && !gF(player, n2)
	}, this.yM = function(player, yN) {
		for (var f7, f0 = it, vL = 0, yO = jz, a0 = 0; a0 < f0; a0++)
			if (f7 = yO[a0], aS.uY(f7)) {
				if (player === f7) return !0;
				if (++vL > yN) return !1
			} return !1
	}, this.jt = function(f7) {
		var yP = a2.ho ? bW.vG() : aX.es[jz[0]];
		return yP >= bB.eo(f7 * a2.iY, 100)
	}
}

function xC() {
	this.yQ = function(gO, yR, yS) {
		var u = gO.width,
			iH = gO.height,
			io = b2.kw.rm(u, iH),
			gP = b2.kw.getContext(io, !0),
			gO = (gP.drawImage(gO, 0, 0), gP.getImageData(0, 0, u, iH));
		return yR(gO.data, u, iH, yS), gP.putImageData(gO, 0, 0), io
	}, this.yT = function(rx, u, iH) {
		for (var fi = u - 1; 0 <= fi; fi--)
			for (var fj = iH - 1; 0 <= fj; fj--) {
				var a0 = 4 * (fi + fj * u);
				rx[3 + a0] = rx[a0], rx[a0] = rx[1 + a0] = rx[2 + a0] = 255
			}
	}, this.yU = function(rx, u, iH) {
		for (var fi = u - 1; 0 <= fi; fi--)
			for (var fj = iH - 1; 0 <= fj; fj--) {
				var a0 = 4 * (fi + fj * u);
				rx[1 + a0] > rx[2 + a0] + 10 && (rx[3 + a0] = rx[a0], rx[1 + a0] = rx[2 + a0])
			}
	}, this.yV = function(rx, u, iH, yS) {
		for (var gap = Math.floor(Math.min(u, iH) * yS), fi = 0; fi < u; fi++)
			for (var a0, fj = 0; fj < iH; fj++)(fi < gap || fj < gap || u - gap <= fi || iH - gap <= fj) && (rx[3 + (a0 = 4 * (fi + fj * u))] = 255 - 255 * (rx[1 + a0] - rx[a0]) / (255 - rx[a0]))
	}, this.yW = function(rx, u, iH, yS) {
		for (var fi = u - 1; 0 <= fi; fi--)
			for (var fj = iH - 1; 0 <= fj; fj--) {
				var a0 = 4 * (fi + fj * u);
				rx[a0] = yS[0], rx[1 + a0] = yS[1], rx[2 + a0] = yS[2]
			}
	}, this.yX = function(rx, u, iH, yS) {
		for (var gap = Math.floor(u * yS), fi = 0; fi < u; fi++)
			for (var a0, fj = 0; fj < iH; fj++)(fi < gap || fj < gap || u - gap <= fi || iH - gap <= fj) && (rx[a0 = 4 * (fi + fj * u)] = rx[1 + a0] = rx[2 + a0] = 0)
	}, this.yY = function(rx, u, iH) {
		for (var fj, a0, fi = u - 1; 0 <= fi; fi--)
			for (fj = iH - 1; 0 <= fj; fj--) 200 < rx[1 + (a0 = 4 * (fi + fj * u))] && rx[1 + a0] - 20 > rx[a0] && rx[1 + a0] - 20 > rx[2 + a0] ? rx[a0] + rx[2 + a0] < 40 ? rx[3 + a0] = 0 : (rx[3 + a0] = rx[a0], rx[a0] = 255, rx[1 + a0] = 255,
				rx[2 + a0] = 255) : rx[a0] < 50 && rx[1 + a0] < 50 && rx[2 + a0] < 50 && (rx[a0] + rx[1 + a0] + rx[2 + a0] < 50 ? rx[3 + a0] = 180 : rx[3 + a0] = 180 + Math.floor(75 * (rx[a0] + rx[1 + a0] + rx[2 + a0] - 50) / 100))
	}, this.yZ = function(rx, u, iH) {
		for (var fj, a0, fi = u - 1; 0 <= fi; fi--)
			for (fj = iH - 1; 0 <= fj; fj--) rx[1 + (a0 = 4 * (fi + fj * u))] > rx[a0] + 20 && rx[1 + a0] > rx[2 + a0] + 20 && rx[a0] + rx[2] < 40 && (rx[3 + a0] = 255 - rx[1 + a0], rx[a0] = rx[1 + a0] = rx[2 + a0] = rx[a0])
	}, this.xf = function(rx, u, iH, yS) {
		for (var gR = u >> 1, fi = 0; fi < u; fi++)
			for (var fj = 0; fj < iH; fj++) Math.sqrt((fi - gR) * (fi - gR) + (fj - gR) * (fj - gR)) > yS * gR && (rx[4 * (fi + fj * u) + 3] = 0)
	}
}

function x9() {
	this.l5 = function(du) {
		var a0, ya, yb, yc, yd;
		if (du < 0) return "-" + this.l5(Math.abs(du));
		if (du < 1e3) return du.toString();
		for (ya = Math.floor(Math.log(du + .5) / Math.log(10)) + 1, yb = Math.floor((ya - 1) / 3), yd = (yc = du.toString()).substring(ya - 3, ya), a0 = 1; a0 < yb; a0++) yd = yc.substring(ya - 3 * (a0 + 1), ya - 3 * a0) + " " + yd;
		return yc.substring(0, ya - 3 * yb) + " " + yd
	}, this.ye = function(f7, ya) {
		return f7.toFixed(ya) + "%"
	}, this.vb = function(du, yf) {
		return du.toFixed(bB.o8(Math.floor((void 0 === yf ? 3 : yf) - Math.log10(Math.max(du, 1))), 0, 8))
	}, this.yg = function(du, lb, ya) {
		return (du * lb).toFixed(ya)
	}, this.vW = function(username) {
		var yi, yh = username.indexOf("[");
		return !(yh < 0) && 1 < (yi = username.indexOf("]")) - yh && yi - yh <= 8 ? username.substring(yh + 1, yi).toUpperCase().trim() : null
	}, leaderboardFilter.parseClanFromPlayerName = this.vW;
	this.yj = function(oG) {
		for (var i1 = Math.floor(.5 * oG.length + .5), lg = Math.floor(.5 * (i1 - 1)), a0 = 0; a0 < lg; a0++)
			for (var i7 = -1; i7 < 2; i7 += 2) {
				var io = i1 + i7 * a0;
				if (" " === oG[io]) return [this.yk(oG.substring(0, io)), this.yl(oG.substring(io))]
			}
		return [oG.substring(0, i1), oG.substring(i1)]
	}, this.yl = function(oG) {
		for (var f0 = oG.length, a0 = 0; a0 < f0; a0++)
			if (" " !== oG[a0]) return oG.substring(a0);
		return oG
	}, this.yk = function(oG) {
		for (var a0 = oG.length - 1; 0 <= a0; a0--)
			if (" " !== oG[a0]) return oG.substring(0, a0 + 1);
		return oG
	}, this.ym = function(oG, yn) {
		return oG.split("(")[0] + "(🧈 " + yn.toFixed(2) + ")"
	}, this.startsWith = function(oG, yo) {
		return oG.substring(0, yo.length) === yo
	}, this.y5 = function(oG, yo) {
		var f0 = oG.length;
		return oG.substring(f0 - yo.length, f0) === yo
	}
}

function yp() {
	this.hr = function(player, fx) {
		a8.so(player, bC.gY(fx), bC.ga(fx)) && (bU.dN = !0), a2.jG && this.hd()
	}, this.hd = function() {
		a2.g2 = !1;
		for (var a0 = 0; a0 < a2.is; a0++) 0 !== aX.kZ[a0] && 0 === aX.es[a0] && a8.su(a0);
		0 !== aX.kZ[a2.ev] ? (bS.ey[7] = aX.es[a2.ev], bS.ey[8] = aX.ew[a2.ev], aG.yq(), aL.yr(), a2.fm || a7.lQ(aX.hM[a2.ev] - 5, aX.hO[a2.ev] - 5, aX.hN[a2.ev] + 5, aX.hP[a2.ev] + 5), ai.dG()) : aM.show(!1, !1, !1, !0), aC.ys(18), aW.yt(), aW
			.kJ(!0), bF.kB.yu(), a2.nt = null, bQ.yv = !0, bQ.yw(), a2.jG && m.n.setState(1)
	}
}

function bj() {
	this.f4 = 512, this.yC = 15e8, this.yx = 1e9, this.sh = 512, this.ep = 2, this.ev = 0, this.is = 0, this.ui = 0, this.jD = 0, this.uh = 0, this.sR = 512, this.iz = 150, this.jG = !0, this.fm = !1, this.uf = 0, this.iY = 0, this.lT = !1, this
		.g2 = !1, this.yy = !1, this.ho = !1, this.yz = 0, this.jE = 0, this.vN = !1, this.nt = null, this.ux = null, this.z0 = 30, this.uc = 0, this.uk = 0, this.uw = 0, this.z1 = function(z2, z3, t7, z4, z5, z6) {
			this.lT = !1, this.fm = z6, this.jE = z4, this.vN = z5, this.ho = this.jE < 7 || 9 === this.jE, this.ui = this.is = t7.length, this.jG = 1 === this.ui, this.jE = 10 === this.jE && this.jG ? 7 : this.jE, this.jE = 8 === this.jE && 2 !==
				this.is ? 7 : this.jE, this.yz = 9 === this.jE ? 2 : this.jE + 2, this.z0 = this.is <= 2 ? 30 : this.is <= 50 ? 40 : 50, ay.jA && !ay.jB.z7 ? this.yy = this.g2 = !1 : this.yy = this.g2 = this.ho || this.is < 100, this.nt = this.g2 ?
				new yp : null, this.jG ? this.sR = aQ.z8() : this.sR = this.f4, this.jD = this.sR - this.is, this.uh = 0, this.ev = z3, this.uc = 0, this.uk = 0, this.uw = 0, ao.z9(z2), ap.dG(), aX.dG(t7), b0.mv.nf = [], bV.dG(t7), this.uf = 1, bS
				.dG(), zA(), ac.zB(), bQ.dG(), aV.dG(), aS.dG(t7), ag.dG(), bC.dG(), bD.dG(), ab.dG(), bH.dG(), bL.zC(), a3.dG(), aZ.w(), a8.dG(), zD(), b1.dG(z2, t7, z4, z5), bW.dG(), bF.dG(), bT.dG(), zE.putImageData(zF, 0, 0), aK.dG(), aH.dG(), aG
				.dG(), b3.dG(), al.dG(), aJ.dG(), aL.dG(), aB.dG(), aF.dG(), aC.dG(), aE.dG(), aA.dG(), aM.dG(), a6.dG(), a4.dG(), a5.dG(), eU(), aU.dG(), aW.dG(), av.dG(), aw.dG(), ar.dG(), 8 === this.jE ? (this.ux = new t6, this.ux.dG(t7)) : this
				.ux = null, bU.zC(), a7.lP(), 0 === aX.kZ[a2.ev] && aM.show(!1, !0), aW.kJ(!0), ai.dG(), bU.dN = !0, this.fm || this.jG && this.g2 || m.n.setState(1)
		}, this.wC = function(zH) {
			aq.kB.zI(), this.uf = 0, bU.zJ(), m.n.setState(0), zH || bK.dc.show(), aP.setState(0), i.j(5, 5)
		}, this.zK = function() {
			return this.fm ? aB.fn || !b3.zL : this.jG && (aB.fn || this.g2)
		}, this.zM = function() {
			return 1 === this.uf && !this.g2
		}
}

function dC() {
	this.tn = 0, this.gap = 0, this.xv = 0, this.od = 0, this.dG = function() {
		this.resize()
	}, this.resize = function() {
		this.tn = .0022 * b2.kw.oW(.5) * an.oX, this.xv = this.tn / an.ob, this.gap = Math.max(Math.floor((m.n.tk() ? .0114 : .01296) * an.oX), 2), this.od = this.gap / an.ob
	}
}

function dB() {
	this.zN = function() {
		return 2 === m.id ? 4 : m.n.tk() ? 2 : 1
	}
}

function bu() {
	var oz, fi, fj, zO, zP, zQ, dr, player, zR, gap, zoom, nY, zS;

	function zc(player) {
		for (var a0 = nY.length - 1; 0 <= a0; a0--)
			if (nY[a0] === player) return 1
	}

	function za(zX) {
		var a0, f0;
		if (-1 !== zX)
			for (f0 = oz.length, a0 = 0; a0 < f0; a0++)
				if (oz[a0].tK && oz[a0].fi + 1 === zX % 4 && oz[a0].fj + 1 === zX >> 2) return a0;
		return -1
	}

	function zY(jo, jp) {
		var pv = gap / 2;
		return jo < fi - zO - 3 * pv || fi + 3 * zO + 5 * pv < jo || jp < fj - zO - 3 * pv || fj + 2 * zO + 3 * pv < jp ? -1 : 4 * (jp < fj - pv ? 0 : jp < fj + zO + pv ? 1 : 2) + (jo < fi - pv ? 0 : jo < fi + zO + pv ? 1 : jo < fi + 2 * zO + 3 *
			pv ? 2 : 3)
	}
	this.zT = function() {
		var a0, i7, zW = [p.mJ, p.mV, p.lv, p.mk, p.md];
		for (oz = new Array(8), a0 = 0; a0 < 8; a0++) oz[a0] = {
			id: a0,
			tK: !1,
			je: 0,
			gO: [],
			fi: 0,
			fj: 0
		};
		for (oz[0].colors = [0, 1, 2, 3], oz[0].fi = 0, oz[0].fj = 0, oz[1].colors = [0, 1, 4], oz[1].fi = 1, oz[1].fj = 0, oz[2].colors = [0, 2], oz[2].fi = -1, oz[2].fj = 0, oz[3].colors = [0], oz[3].fi = 0, oz[3].fj = 0, oz[4].colors = [0, 2],
			oz[4].fi = 1, oz[4].fj = 1, oz[5].colors = [3], oz[5].fi = 0, oz[5].fj = -1, oz[6].id = 20, oz[6].colors = [0], oz[6].fi = 1, oz[6].fj = -1, oz[7].id = 21, oz[7].colors = [0], oz[7].fi = 0, oz[7].fj = 1, a0 = 0; a0 < 8; a0++)
			for (i7 = 0; i7 < oz[a0].colors.length; i7++) oz[a0].gO.push(function(id, xa) {
				if (id < 20) return b2.gO.tY(aR.get(3), id, xa);
				var xa = aR.get(3).height,
					xb = b2.kw.rm(xa, xa),
					gP = b2.kw.getContext(xb);
				20 === id ? gP.drawImage(aR.get(18), 0, 0) : 21 === id && aa.rx.to(aa.tH.tc + aa.tH.tu, gP, 0, 0, xa);
				return xb
			}(oz[a0].id, zW[oz[a0].colors[i7]]))
	}, this.zV = function() {
		return oz
	}, this.dG = function() {
		nY = [], fi = fj = dr = 0, zP = zQ = -1e3, this.resize()
	}, this.resize = function() {
		zO = Math.floor((m.n.tk() ? .075 : .0468) * an.oX), zoom = zO / aR.get(3).height, gap = Math.floor(zO / 3)
	}, this.wf = function(jo, jp) {
		return !!this.tK() && (bU.dN = !0, !!aa.rx.fq(jo, jp, player) || (jo = function(jo, jp) {
			zQ = zP = -1e3;
			var zZ = za(zY(jo, jp));
			if (-1 === zZ) return 0;
			if (1 !== oz[zZ].colors[oz[zZ].je])
				if (5 === zZ) {
					if (! function() {
							var ds = performance.now();
							zS + 4e3 < ds && (nY = []);
							zS = ds
						}(), zc(player)) return 1;
					nY.push(player), 16 < nY.length && nY.shift()
				} else if (6 === zZ) {
				for (var a0 = nY.length - 1; 0 <= a0; a0--) 0 === aX.kZ[nY[a0]] && nY.splice(a0, 1);
				0 < nY.length && (aw.zd(1, nY, !0) && b0.eq.nX(nY, player), nY = [])
			} else if (2 === zZ) b0.g3.n1(aG.gA(), player);
			else if (3 === zZ) a2.g2 && b0.g3.g4(zR);
			else if (0 === zZ)
				if (0 === oz[0].je) {
					if (a2.yy && aL.ze() < 300) return 1;
					b0.g3.gC(aG.gA(), player)
				} else ar.gE(player, aG.gA());
			else if (1 === zZ) bL.zf(), b0.g3.g9(aG.gA(), zR);
			else {
				if (7 === zZ) return bL.zg(), aa.rx.show(jo, jp), 2;
				if (4 !== zZ) return 0;
				aw.zd(0, [player], !0) && b0.eq.nU(player)
			}
			return 1
		}(jo, jp), this.pu(), 2 === jo && (aa.rx.tK = !0), 0 < jo))
	}, this.wh = function(jo, jp) {
		this.tK() || (zP = jo, zQ = jp, dr = performance.now())
	}, hoveringTooltip.display = function(mouseX, mouseY) {
		var coordX = bC.fu(mouseX),
			coordY = bC.fw(mouseY),
			coord = bC.fy(coordX, coordY),
			point = bC.g0(coord);
		if (coordX < 0 || coordY < 0) return;
		(function(jo, jp, fz) {
			aS.f2(fz) || -1 === (jo = bD.g7.zt(jo, jp)) ? aC.zs(fz) : aC.zu(jo)
		}(mouseX, mouseY, point))
	}
	this.click = function(jo, jp, wp) {
		var ft = bC.fu(jo),
			fv = bC.fw(jp),
			fx = bC.fy(ft, fv),
			fz = bC.g0(fx);
		if (!bC.g1(ft, fv)) return !1;
		ft = (m.n.tk() ? .025 : .0144) * an.oX, fv = performance.now();
		if (Math.abs(jo - zP) > ft || Math.abs(jp - zQ) > ft || dr + 500 < fv) return !1;
		if (dr = fv, wp && ! function(jo, jp, fz) {
				aS.f2(fz) || -1 === (jo = bD.g7.zt(jo, jp)) ? aC.zs(fz) : aC.zu(jo)
			}(jo, jp, fz), aB.fn || this.tK() || !b2.eq.fp(a2.ev) || a2.fm) return this.pu(), !1;
		if (a2.g2) {
			if (!wp) {
				if (!aS.f2(fz)) return !1;
				zR = fx, oz[3].tK = !0
			}
		} else if (bD.g7.n6(fx)) wp || (bD.zk.zl = -1);
		else {
			if (wp) return !1;
			bD.g7.zm(jo, jp) || (2 === a2.uf ? aS.fA(fz) && (player = aS.fB(fz), aS.uY(player)) && (oz[0].tK = !0, oz[0].je = 1, oz[7].tK = !0) : aS.g5(fz) || (zR = fx, bD.g7.g8(a2.ev, fx) && (oz[0].tK = !0, oz[0].je = 1, oz[1].tK = !0, oz[1]
				.je = bE.e3[2] ? 0 : 2), aS.g6(fz)) || (aS.fC(fz) ? (player = a2.f4, gB(a2.ev) ? (oz[0].tK = !0, oz[0].je = 0) : gD(a2.ev, player) && (oz[0].tK = !0, oz[0].je = 3)) : (player = aS.fB(fz)) === a2.ev ? (oz[0].tK = !0, oz[0]
				.je = 1, oz[7].tK = !0) : (oz[0].je = 1, oz[5].tK = function(player) {
				return aS.uY(player) && !zc(player) && aw.zd(1, [player], !1)
			}(player), oz[7].tK = aS.uY(player), gF(player, a2.ev) ? (oz[4].tK = aS.uY(player) && !aW.zo(player) && aw.zd(0, [player], !1), oz[6].tK = function(player) {
				if (0 === nY.length) return !1;
				if (performance.now() > zS + 4e3) return !(nY = []);
				return !zc(player) && ! function(player) {
					var a0;
					if (a2.ho)
						for (a0 = nY.length - 1; 0 <= a0; a0--)
							if (!gF(player, nY[a0])) return 1;
					return
				}(player)
			}(player), gG(a2.ev, player) ? (oz[0].je = 0, oz[0].tK = !0) : gD(a2.ev, player) && (oz[0].je = 3, oz[0].tK = !0), oz[0].tK = this.zq()) : (oz[2].tK = !0, oz[0].tK = !0))))
		}
		return this.zj(jo, jp)
	}, this.zj = function(jo, jp) {
		return fi = jo - Math.floor(zO / 2), fj = jp - Math.floor(zO / 2), !!this.tK()
	}, this.wL = function(jo, jp) {
		return !!this.tK() && (aa.rx.tK ? !aa.rx.tm(jo, jp) && (aa.rx.tK = !1, bU.dN = !0) : function(vD, jo, jp) {
			jo = zY(jo, jp);
			if (0 <= za(jo)) return !1;
			if ((1 === jo || 6 === jo) && 0 <= za(2)) return !1;
			if ((6 === jo || 9 === jo) && 0 <= za(10)) return !1;
			return vD.pu(), bU.dN = !0
		}(this, jo, jp))
	}, this.pu = function() {
		for (var a0 = oz.length - 1; 0 <= a0; a0--) oz[a0].tK = !1, oz[a0].je = 0;
		aa.rx.tK = !1
	}, this.tK = function() {
		return this.zq() || aa.rx.tK
	}, this.zq = function() {
		for (var f0 = oz.length, a0 = 0; a0 < f0; a0++)
			if (oz[a0].tK) return !0;
		return !1
	}, this.kn = function() {
		if (this.tK())
			if (aa.rx.tK) aa.rx.kn();
			else {
				var a0, gP = kx,
					i7 = oz,
					f0 = i7.length,
					zy = (zO + gap) / zoom;
				for (gP.imageSmoothingEnabled = !0, gP.setTransform(zoom, 0, 0, zoom, fi, fj), a0 = 0; a0 < f0; a0++) i7[a0].tK && kx.drawImage(i7[a0].gO[i7[a0].je], i7[a0].fi * zy, i7[a0].fj * zy);
				gP.imageSmoothingEnabled = !1, gP.setTransform(1, 0, 0, 1, 0, 0)
			}
	}
}

function bv() {
	var iH, gO, zz, a00, a01, a02 = -1;

	function a03() {
		var a04, t0 = gO.getContext("2d", {
			alpha: !0
		});
		t0.clearRect(0, 0, iH, iH), t0.fillStyle = p.ls, t0.fillRect(0, 0, iH, iH), 0 === a00 && (t0.fillStyle = p.ly, t0.fillRect(0, 0, iH, iH)), t0.fillStyle = p.lx, t0.fillRect(0, 0, iH, 1), t0.fillRect(0, 0, 1, iH), t0.fillRect(0, iH - 1, iH, 1),
			t0.fillRect(iH - 1, 0, 1, iH), a04 = .9 * iH / aR.get(0).width, t0.imageSmoothingEnabled = !0, t0.setTransform(a04, 0, 0, a04, Math.floor((iH - a04 * aR.get(0).width) / 2), Math.floor((iH - a04 * aR.get(0).height) / 2)), t0.drawImage(aR
				.get(0), 0, 0), t0.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a06(jo, jp) {
		if (!aB.fn) return jo <= iH + bR.gap && jp >= aG.fj ? 0 : -1;
		if (jo <= 4 * iH + bR.gap) {
			if (jp >= aG.fj) return 0;
			if (jp >= aG.fj - iH - a01 * bR.gap) return 2
		} else if (jo <= 7 * iH + bR.gap && jp >= aG.fj - iH - a01 * bR.gap) return 1;
		return -1
	}
	this.fn = !1, this.dG = function() {
		a00 = -1, this.fn = !1, a01 = m.n.tk() ? 1.2 : .6, this.resize()
	}, this.resize = function() {
		iH = aG.iH, (gO = document.createElement("canvas")).width = iH, gO.height = iH, zz = b2.kw.l1(1, (m.n.tk() ? .5 : .45) * iH), a03()
	}, this.wy = function() {
		this.fn = !this.fn, this.fn ? (bK.da.hideCMPButton(), b3.wx(!1), a2.fm && b3.zL && b3.wz(!0), this.a05()) : (a00 = -1, a03(), !a2.jG || 1 !== a2.uf || a2.g2 || a2.fm || m.n.setState(1)), bU.dN = !0
	}, this.a05 = function() {
		(a2.jG || a2.fm) && 1 === a2.uf && (aK.kJ(!0), a2.g2 || setTimeout(function() {
			bQ.uq()
		}, 0), m.n.setState(0))
	}, this.fq = function(jo, jp) {
		return 0 <= (a02 = a06(jo, jp))
	}, this.wL = function(jo, jp) {
		jo = a06(jo, jp);
		jo !== a00 && (a00 = jo, this.fn || a03(), bU.dN = !0)
	}, this.wM = function(jo, jp) {
		var je = a06(jo, jp);
		if (-1 === je) return !1;
		if (a02 !== je) return !1;
		if (this.fn) {
			if (a2.lT) return 0 <= je && b3.wx(!1), !a2.fm;
			if (0 === je) a2.wC();
			else if (1 === je) this.wy();
			else if (2 === je) i.j(1, 0);
			else {
				if (! function() {
						if (a2.jG || 1 !== a2.uf || a2.fm || bT.tK) return 1;
						aB.wy()
					}()) return !1;
				b9.wg(jo, jp) || aA.wh(jo, jp)
			}
			return !0
		}
		return 0 === je && (this.wy(), !0)
	}, this.kn = function() {
		var u;
		this.fn ? (u = Math.floor(5.5 * iH), kx.setTransform(1, 0, 0, 1, bR.gap, aG.fj), kx.fillStyle = p.ls, kx.fillRect(0, 0, u, iH), 0 === a00 ? (kx.fillStyle = p.ly, kx.fillRect(0, 0, 4 * iH, iH)) : 1 === a00 && (kx.fillStyle = p.ly, kx
				.fillRect(4 * iH, 0, Math.floor(1.5 * iH), iH)), kx.fillStyle = p.lx, kx.fillRect(0, 0, u, 1), kx.fillRect(0, 0, 1, iH), kx.fillRect(4 * iH, 0, 1, iH), kx.fillRect(0, iH - 1, u, 1), kx.fillRect(u - 1, 0, 1, iH), kx.font = zz,
			b2.kw.textBaseline(kx, 1), b2.kw.textAlign(kx, 1), kx.fillText(L(18), 2 * iH, .54 * iH), u = .4 * iH, aB.a0B(bR.gap + 4 * iH + (1.5 * iH - u) / 2, aG.fj + .3 * iH, u), u = 1, kx.setTransform(1, 0, 0, 1, bR.gap, aG.fj - u * a01 *
				bR.gap - u * iH), kx.fillStyle = p.ls, kx.fillRect(0, 0, 4 * iH, iH), a00 === u + 1 && (kx.fillStyle = p.ly, kx.fillRect(0, 0, 4 * iH, iH)), kx.fillStyle = p.lx, kx.fillRect(0, 0, 4 * iH, 1), kx.fillRect(0, 0, 1, iH), kx
			.fillRect(4 * iH, 0, 1, iH), kx.fillRect(0, iH - 1, 4 * iH, 1), kx.fillText(L(0 === u ? 18 : 19), 2 * iH, .54 * iH), kx.setTransform(1, 0, 0, 1, 0, 0)) : kx.drawImage(gO, bR.gap, aG.fj)
	}, this.a0A = function(player) {
		return 0 !== aX.kZ[player] && 2 !== a2.uf && aS.uY(player)
	}, this.a0B = function(fi, fj, f0) {
		kx.setTransform(1, 0, 0, 1, fi, fj), kx.lineWidth = bR.tn, kx.strokeStyle = p.lx, kx.beginPath(), kx.moveTo(0, 0), kx.lineTo(f0, f0), kx.moveTo(0, f0), kx.lineTo(f0, 0), kx.stroke()
	}
}

function bw() {
	var a0D, iH, a0E, a0F, a0G, a0H, a0I, a0J, a0K;

	function kz() {
		return aG.a0e(aC.a0a()) ? al.tK ? aG.fj - aG.iH - 2 * a0E : aG.fj - a0E : b3.a0e(aC.a0d()) ? al.tK ? b3.kz() - aG.iH - 2 * a0E : b3.kz() - a0E : al.tK ? an.iH - aG.iH - (bZ.zN() + 1) * a0E : an.iH - bZ.zN() * bR.gap
	}

	function a0Q(ds, oG, id, f7, a0U, a0V, s5, a0W, a0X, a0Y) {
		var a0, t0, xb, oP, e8, a0j = void 0 !== a0X,
			u = Math.floor(aF.measureText(oG, aC.zz) + 1.5 * a0F + (a0j ? iH : 1.5 * a0F));
		if (bU.dN = !0, u + a0E > an.u && !a0j && 50 !== id && 20 < oG.length) a0Q(ds, (e8 = b2.l4.yj(oG))[0], id, f7, a0U, a0V, s5, a0W, a0X, a0Y), a0Q(ds, e8[1], id, f7, a0U, a0V, s5, a0W, a0X, a0Y);
		else if (e8 = u + (50 === id ? a0G : 0), (xb = document.createElement("canvas")).width = u, xb.height = iH, (t0 = xb.getContext("2d", {
				alpha: !0
			})).font = aC.zz, b2.kw.textBaseline(t0, 1), b2.kw.textAlign(t0, 0), t0.clearRect(0, 0, u, iH), t0.fillStyle = a0V, t0.fillRect(0, 0, u, iH), t0.fillStyle = a0U, t0.fillText(oG, Math.floor(1.5 * a0F), Math.floor(iH / 2)), a0j && (t0
				.imageSmoothingEnabled = !0, aa.rx.to(a0X, t0, u - iH, 0, iH)), 0 === (oP = {
				dr: ds,
				oG: oG,
				id: id,
				player: f7,
				gO: xb,
				a0U: a0U,
				a0V: a0V,
				u: u,
				a0b: e8,
				s5: s5,
				a0W: a0W,
				a0X: a0X,
				a0Y: a0Y
			}).dr || 0 < a0D.length && 0 < a0D[0].dr) a0D.unshift(oP);
		else {
			for (a0 = 1; a0 < a0D.length; a0++)
				if (0 < a0D[a0].dr) return void a0D.splice(a0, 0, oP);
			a0D.push(oP)
		}
	}

	function a0S(gR, pv, i7) {
		return "rgb(" + gR + "," + pv + "," + i7 + ")"
	}

	function a0k(id, jO) {
		for (var f0 = a0D.length, a0 = 0; a0 < f0; a0++) a0D[a0].id === id && jO-- <= 0 && (a0D.splice(a0, 1), a0--, f0--)
	}

	function a0l(id, player) {
		for (var a13 = !1, a0 = a0D.length - 1; 0 <= a0; a0--) a0D[a0].id !== id || player !== a2.f4 && a0D[a0].player !== player || (a0D.splice(a0, 1), a13 = !0);
		return a13
	}

	function a19(oG) {
		a0Q(340, oG, 6, 0, a0S(215, 245, 255), p.lu, -1, !1)
	}
	this.a0L = "", this.dG = function() {
		var self;
		a0J = 0, a0I = m.n.tk() ? 7 : 12, a0H = {
				t7: [0, 0, 0],
				a0M: [0, 0, 0],
				lN: [220, 180, 180],
				qL: [0, 0, 0],
				io: [0, 0, 0]
			}, a0D = [], this.resize(), a2.g2 && this.ur(0, 18), a19(L(59, [bI.jB.sE[bI.sF].name])), a19(L(60, [bI.eV - 2, bI.eW - 2])), a19(L(61, [ac.a1A])), ac.a1A !== ac.a1B && a19(L(62, [ac.a1B, b2.l4.ye(100 * ac.a1B / ac.a1A, 1)])), 0 < ac
			.a1C && a19(L(63, [ac.a1C, b2.l4.ye(100 * ac.a1C / ac.a1A, 1)])), 0 < ac.a1D && a19(L(64, [ac.a1D, b2.l4.ye(100 * ac.a1D / ac.a1A, 1)])), 10 === a2.jE && a0Q(120, L(65), 6, 0, a0S(235, 255, 120), p.lu, -1, !1), 0 !== (self = this).a0L
			.length && (a0Q(200, self.a0L, 0, 0, p.lx, p.lu, -1, !1), self.a0L = ""), this.a0P()
	}, this.a0P = function() {
		var a0, f0;
		if (ay.jA)
			for (f0 = ay.jB.a0R.length, a0 = 0; a0 < f0; a0++) a0Q(400, ay.jB.a0R[a0], 6, 0, a0S(255, 255, 255), p.lu, -1, !1)
	}, this.resize = function() {
		var a0T, a0;
		if (iH = (iH = Math.floor((m.n.tk() ? .031 : .0249) * an.oX)) < 10 ? 10 : iH, this.fontSize = Math.floor(2 * iH / 3), this.zz = b2.kw.l1(1, this.fontSize), a0E = bR.gap, a0F = Math.floor(iH / 5), 0 < a0D.length)
			for (a0T = a0D, a0D = [], a0 = a0T.length - 1; 0 <= a0; a0--) a0Q(a0T[a0].dr, a0T[a0].oG, a0T[a0].id, a0T[a0].player, a0T[a0].a0U, a0T[a0].a0V, a0T[a0].s5, a0T[a0].a0W, a0T[a0].a0X, a0T[a0].a0Y);
		this.a0Z()
	}, this.a0Z = function() {
		a0K = document.createElement("canvas");
		var oG = L(20),
			t0 = (a0G = aF.measureText(oG, this.zz) + 5 * a0F, a0K.height = iH, a0K.width = a0G, a0K.getContext("2d", {
				alpha: !0
			}));
		t0.font = this.zz, b2.kw.textBaseline(t0, 1), b2.kw.textAlign(t0, 1), t0.clearRect(0, 0, a0G, iH), t0.fillStyle = p.q, t0.fillRect(0, 0, a0G, iH), t0.fillStyle = p.lx, t0.fillText(oG, Math.floor(a0G / 2), Math.floor(iH / 2))
	}, this.a0a = function() {
		var f0;
		return al.tK ? al.u : 0 === (f0 = a0D.length) ? 0 : 1 === f0 ? a0D[0].a0b : a0c(a0D[0].a0b, a0D[1].a0b)
	}, this.a0d = function() {
		var f0 = a0D.length;
		return al.tK ? f0 ? a0c(al.u, a0D[0].a0b) : al.u : 0 === f0 ? 0 : 1 === f0 ? a0D[0].a0b : 2 === f0 ? a0c(a0D[0].a0b, a0D[1].a0b) : a0c(a0c(a0D[0].a0b, a0D[1].a0b), a0D[2].a0b)
	}, this.fq = function(fi, fj) {
		for (var ks, a0f, a0g = kz(), a0 = a0D.length - 1; 0 <= a0; a0--)
			if ((a0f = a0g - (a0 + 1) * iH) <= fj && fj < a0f + iH) return 50 === a0D[a0].id ? fi >= an.u - a0G - a0E - a0D[a0].u && (fi >= an.u - a0G - a0E ? b0.eq.nU(a0D[a0].player) : a7.lR(a0D[a0].player, 800, !1, 0), !0) : fi >= an.u - a0D[
				a0].u - a0E && (736 === a0D[a0].id ? (a0f = a0D[a0].oG.split(" "), window.open(a0f[a0f.length - 1], "_blank")) : a0D[a0].a0W && (a0D[a0].a0Y && a0D[a0].a0Y.fx ? (a0f = a0D[a0].a0Y.fx, ks = bC.gY(a0f) - 10, a0f = bC.ga(
				a0f) - 10, a7.lQ(ks, a0f, 19 + ks, 19 + a0f)) : (a7.lR(a0D[a0].player, 800, !1, 0), 0 <= a0D[a0].s5 && (ks = a0D[a0].s5, a0D[a0].s5 = a0D[a0].player, a0D[a0].player = ks))), !0);
		return !1
	}, this.v4 = function(ds, oG, id, f7, a0U, a0V, s5, a0W, a0X, a0Y) {
		a0Q(ds, oG, id, f7, a0U, a0V, s5, a0W, a0X, a0Y)
	}, this.a0i = function(vY) {
		a0Q(300, vY, 252, 0, p.lx, p.lu, -1, !1)
	}, this.ys = function(id) {
		for (var a0 = a0D.length - 1; 0 <= a0; a0--) a0D[a0].id === id && (a0D[a0].dr = 1)
	}, this.ur = function(player, id) {
		0 === id ? (bS.ey[player < a2.is ? 4 : 3]++, aF.hr(player, 0), a0k(423, 0), a0Q(160, L(21, [aX.l6[player]]), 423, player, "rgb(10,220,10)", p.lu, -1, !1)) : 1 === id ? (a0l(50, a2.f4), aF.hr(player, 1), a0Q(360, L(22, [aX.l6[player]]), 0,
			player, p.mX, p.lu, -1, !0), a7.lR(player, 2700, !1, 0)) : 2 === id ? (aF.hr(player, 2), a0Q(0, L(23), 0, player, "rgb(10,255,255)", p.lu, -1, !0), a7.lR(player, 2700, !1, 0)) : 3 === id ? (aF.hr(player, 2), a0Q(0, L(24, [aX.l6[
			player]]), 0, player, p.lx, p.lu, -1, !0), a7.lR(player, 2700, !1, 0)) : 4 === id ? this.a0m(1, player, player) : 5 === id ? 2 !== aX.y6[player] && aS.uY(a2.ev) && (function(id, kV) {
			var a0, a0w = 0,
				f0 = a0D.length;
			for (a0 = 0; a0 < f0; a0++)
				if (a0D[a0].id === id && kV <= ++a0w) return a0D.splice(a0, 1)
		}(1, 5), aW.a0o(player) ? a0Q(180, L(25, [aX.l6[player]]), 1, player, a0S(255, 200, 180), p.lu, -1, !0) : (a0k(573, 0), a0Q(180, L(26, [aX.l6[player]]), 573, player, p.mX, p.lu, -1, !0))) : 18 === id ? a0Q(255, L(27), 18, 0, p.lx, p
			.lu, -1, !1) : 21 === id ? a0Q(220, L(28), id, 0, p.lx, p.lu, -1, !1) : 22 === id ? this.a0m(2, player, player) : 59 === id && a0Q(0, L(29), id, 0, p.mj, p.lu, 0, !1)
	}, this.w3 = function(vY) {
		a0Q(200, L(30, [vY]), 94, 0, p.lx, p.mT, -1, !1)
	}, this.uy = function(a0p) {
		if (a2.ev === a0p && !a2.jG)
			wins_counter++, window.localStorage.setItem("fx_winCount", wins_counter),
			a0Q(0, "Your Win Count is now " + wins_counter, 3, a0p, p.lx, p.lu, -1, !0);
		aF.hr(a0p, 2), a2.is < 100 ? a0Q(0, L(24, [aX.l6[a0p]]), 3, a0p, p.lx, p.lu, -1, !0) : a0Q(0, L(31, [aX.l6[a0p]]), 3, a0p, p.lx, p.lu, -1, !0)
	}, this.zs = function(fz) {
		var a0q = "(" + bC.gY(fz >> 2) + ", " + bC.ga(fz >> 2) + ")",
			a0W = !1,
			player = 0;
		aS.f2(fz) ? aS.fC(fz) ? a0q = L(32, [a0q]) : (player = aS.fB(fz), a0q = L(33, [b2.t0.xn(aX.vX[player], b2.kw.l1(0, 10), 150), b2.l4.l5(aX.ew[player]), b2.l4.l5(aX.es[player]), a0q]), a0W = !0) : a0q = aS.g5(fz) ? L(34, [a0q]) : L(35, [
			a0q]), bU.dN = !0, a0k(55, 0), a0Q(220, a0q, 55, player, p.lx, p.lu, -1, a0W)
	}, this.zu = function(a0r) {
		var jc = bD.kB,
			player = jc.a0s[a0r] >> 3;
		bU.dN = !0, a0k(55, 0), a0Q(220, L(36, [aX.l6[player], jc.a0t[a0r]]), 55, player, p.lx, p.lu, -1, !0)
	}, this.nC = function(my, a0u, nD) {
		my === a2.ev ? a0Q(175, " " + L(37, [aX.l6[a0u]]), 1001, a0u, a0S(200, 255, 210), p.lu, -1, !0, nD) : this.a0v(my, nD)
	}, this.a0v = function(my, nD) {
		a0k(1e3, 0), a0Q(175, aX.l6[my] + ": ", 1e3, my, p.lx, "rgba(5,60,25,0.9)", -1, !0, nD)
	}, this.v5 = function() {
		var vY;
		a2.uk ? (vY = L(38), aF.v3(L(39), 2, 1, 12), a0Q(0, vY, 40, 0, "rgb(10,220,10)", p.lu, -1, !1)) : (vY = L(40), aF.v3(L(41), 2, 0, 16), a0Q(0, vY, 41, 0, p.lx, p.lu, -1, !1))
	}, this.t8 = function(t7) {
		a0Q(300, t7[0].name + " [" + a2.ux.tE(t7[0].tB) + "] vs " + t7[1].name + " [" + a2.ux.tE(t7[1].tB) + "]", 65, 0, p.l2, "rgba(100,255,255,0.75)", -1, !1)
	}, this.a0x = function(vY) {
		a0Q(200, vY, 0, 0, "rgb(40,255,200)", "rgba(10,60,40,0.9)", -1, !1)
	}, this.a0y = function(a0z) {
		a0Q(0, L(a0z ? 42 : 43), 247, 0, p.mi, p.lu, -1, !1)
	}, this.tG = function(t7, tD, tF, a10) {
		a0Q(0, t7[0].name + ": " + a2.ux.tE(t7[0].tB) + " -> " + tD, 66, 0, p.lx, a10[0], -1, !1), a0Q(0, t7[1].name + ": " + a2.ux.tE(t7[1].tB) + " -> " + tF, 66, 1, p.lx, a10[1], -1, !1)
	}, this.nV = function(player, id) {
		0 === id ? a0l(50, player) ? (a0Q(128, L(44, [aX.l6[player]]), 52, player, a0S(180, 255, 180), p.lu, -1, !0), aW.o9(player, 2, 255)) : a0Q(384, L(45, [aX.l6[player]]), 51, player, a0S(210, 210, 255), p.lu, -1, !0) : a0l(51, player) ? (
			a0Q(128, L(46, [aX.l6[player]]), 52, player, p.lx, "rgba(60,120,10,0.9)", -1, !0), aW.o9(player, 2, 255)) : (a0Q(384, L(47, [aX.l6[player]]), 50, player, p.lx, "rgba(90,90,90,0.9)", -1, !0), aW.o9(player, 2, 96))
	}, this.nZ = function(t7, target) {
		var color = a0S(210, 255, 210);
		1 < t7.length ? a0Q(230, L(48, [t7.length, aX.l6[target]]), 66, target, color, p.lu, -1, !0) : a0Q(230, L(49, [aX.l6[t7[0]], aX.l6[target]]), 66, t7[0], color, p.lu, target, !0)
	}, this.a11 = function(player, target) {
		a0Q(230, L(50, [aX.l6[player], aX.l6[target]]), 66, player, p.lx, "rgba(75,65,5,0.9)", target, !0)
	}, this.a12 = function(id, jO) {
		a0k(id, jO)
	}, this.a14 = function(id) {
		for (var a0 = a0D.length - 1; 0 <= a0; a0--)
			if (a0D[a0].id === id) return a0D[a0];
		return null
	}, this.um = function(id, player) {
		a0l(id, player)
	}, this.nQ = function(a15, a16, player) {
		2 !== aX.y6[a2.ev] && (a0Q(200, 1 === a15 ? L(51, [aX.l6[player]]) : L(52, [a15, aX.l6[player]]), 30, player, "rgb(190,255,190)", p.lu, -1, !0), a16) && a0Q(30, 1 === a16 ? L(53) : L(54, [a16]), 30, 0, p.lx, p.lu, -1, !1)
	}, this.a18 = function(a15, player) {
		2 !== aX.y6[a2.ev] && (a0k(31, 0), 2 === aX.y6[player] || player >= a2.is ? a0Q(150, 1 === a15 ? L(55, [aX.l6[player]]) : L(56, [aX.l6[player], a15]), 31, player, p.l2, "rgba(205,205,205,0.9)", -1, !0) : a0Q(150, 1 === a15 ? L(57, [aX.l6[
			player]]) : L(58, [aX.l6[player], a15]), 31, player, p.l2, "rgba(205,255,205,0.9)", -1, !0))
	}, this.ul = function(bc) {
		for (var io = bU.et(), a0 = 2; 0 <= a0; a0--) 0 < a0H.qL[a0] && (bc || a0H.io[a0] < io - 220) && this.a1E(a0)
	}, this.a1E = function(id) {
		var oG, f0 = a0H.qL[id],
			player = a0H.t7[id];
		a0H.qL[id] = 0, 1 === f0 ? (0 === id ? oG = L(66, [aX.l6[player], aX.l6[a0H.a0M[0]]]) : 1 === id ? oG = L(67, [aX.l6[player]]) : 2 === id ? oG = L(68, [aX.l6[player]]) : 3 === id && (oG = L(69, [aX.l6[player]])), a0k(7, 0), a0Q(a0H.lN[
			id], oG, 7, a0H.a0M[id], p.lx, p.lu, -1, !0)) : (oG = L(0 === id ? 70 : 1 === id ? 71 : 72, [f0]), a0k(7, 0), a0Q(a0H.lN[id], oG, 7, player, p.lx, p.lu, -1, !1))
	}, this.a0m = function(id, pi, s5) {
		var io = bU.et(),
			f0 = a0H.qL[id] + 1;
		a0H.qL[id]++, a0H.t7[id] = pi, a0H.a0M[id] = s5, 1 === f0 && (a0H.io[id] = io), (1 === f0 && (a2.ui < 32 || 2 === a2.uf) || 1 < f0 && (a0H.io[id] < io - 140 || 2 === a2.uf)) && this.a1E(id)
	}, this.hd = function() {
		for (var gg = (gg = a0D.length - a0I) <= 1 ? 1 : gg * gg, a0 = a0D.length - 1; 0 <= a0; a0--) 0 < a0D[a0].dr && (a0D[a0].dr -= gg, a0D[a0].dr <= 0) && (bU.dN = !0, a0D.splice(a0, 1));
		! function() {
			var jO, a0;
			if (128 !== a0J && !(++a0J < 128))
				for (jO = 5, a0 = it - 1; 0 <= a0; a0--) 1 === aX.y6[iv[a0]] && 0 < jO-- && a0Q(240, L(69, [aX.l6[iv[a0]]]), 1, iv[a0], p.l2, "rgba(255,255,255,0.75)", -1, !0)
		}(), this.ul(!1)
	}, this.kn = function() {
		for (var sQ, fj = kz(), a0 = a0D.length - 1; 0 <= a0; a0--) sQ = fj - (a0 + 1) * iH, 50 === a0D[a0].id ? (kx.drawImage(a0D[a0].gO, an.u - a0D[a0].u - a0G - a0E, sQ), kx.drawImage(a0K, an.u - a0G - a0E, sQ)) : kx.drawImage(a0D[a0].gO, an
			.u - a0D[a0].u - a0E, sQ)
	}
}

function bx() {
	var a1G, a1H, a1I, u, iH, font, oG;

	function a1M(a1N) {
		return a1N < 10 ? "0" + a1N : String(a1N)
	}
	this.dG = function() {
		oG = L(73)
	}, this.resize = function() {
		u = Math.floor((m.n.tk() ? .53 : .36) * an.oX), iH = Math.floor(.065 * u), font = b2.kw.l1(1, Math.floor(.9 * iH)), a1I--, this.setTime()
	}, this.hd = function() {
		this.setTime() && (bU.dN = !0)
	}, this.setTime = function() {
		var ds = new Date,
			a1K = ds.getUTCMinutes(),
			ds = ds.getUTCSeconds();
		return a1H = 3600 - 60 * a1K - ds, a1H %= 900, a1G = oG + a1M(Math.floor(a1H / 60)) + ":" + a1M(a1H % 60), a1I !== (a1I = 60 * a1K + ds) && (u = aF.measureText(a1G, font), u += Math.floor(.4 * iH), !0)
	}, this.kn = function() {
		kx.lineWidth = 1 + Math.floor(iH / 15), 7 === aP.vz() && aj.a1O() + 2 * bR.gap > .5 * (an.iH - u) ? kx.translate(an.u - iH, Math.floor(aj.a1O() + 2 * bR.gap + u)) : kx.translate(an.u - iH, Math.floor(.5 * (an.iH + u))), kx.rotate(-Math
			.PI / 2), kx.fillStyle = p.lx, kx.fillRect(0, 0, u, iH), kx.strokeStyle = p.l2, kx.strokeRect(0, 0, u, iH + 10), kx.fillStyle = p.l2, kx.font = font, b2.kw.textBaseline(kx, 1), b2.kw.textAlign(kx, 1), kx.fillText(a1G, Math.floor(
			u / 2), Math.floor(.59 * iH)), kx.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function by() {
	var a0D, a1P, zz, iH, a1Q;

	function a1S(a0) {
		var a1U = !0,
			gb = p.lx,
			u = (a0D[a0].hu === a2.f4 ? a0D[a0].t0.fillStyle = p.m7 : (aS.a1V(a0D[a0].hu), a0D[a0].t0.fillStyle = b2.color.lr(bE.e1[0], bE.e1[1], bE.e1[2], .87), 400 < b2.og.xO(bE.e1, 0, 2) && (a1U = !1, gb = p.l2)), a0D[a0].gO.width),
			pg = (a0D[a0].t0.clearRect(0, 0, u, iH), a0D[a0].t0.fillRect(0, 0, u, iH), a0D[a0].t0.fillStyle = gb, ! function(t0, u, iH) {
				t0.fillRect(0, 0, u, 1), t0.fillRect(0, iH - 1, u, 1), t0.fillRect(0, 0, 1, iH), t0.fillRect(u - 1, 0, 1, iH)
			}(a0D[a0].t0, u, iH), a1P + 2 * iH < u && (a0D[a0].t0.fillRect(u - a1P - iH, 0, 1, iH), a0D[a0].t0.fillText(aX.l6[a0D[a0].hu], Math.floor((u - a1P) / 2), Math.floor(.57 * iH))), 0 !== a0D[a0].id ? 0 : iH);
		a0D[a0].t0.fillText(b2.l4.l5(a0D[a0].hv), Math.floor(u - a1P / 2 - pg), Math.floor(.57 * iH)),
			function(a0, u, pg, a1U) {
				a0D[a0].t0.fillStyle = a1U ? p.lz : p.lv;
				a1U = Math.floor(a1P * a0D[a0].hv / a0D[a0].a1b);
				a0D[a0].t0.fillRect(Math.floor(u - a1P - pg), iH - a1Q, a1U, a1Q)
			}(a0, u, pg, a1U), 0 === a0D[a0].id ? (a1Y(a0, u, a1U, gb), function(a0, u, a1U) {
				a0D[a0].t0.strokeStyle = a1U ? p.mC : p.mL, a0D[a0].t0.fillRect(iH, 0, 1, iH);
				a1U = u - iH;
				a0D[a0].t0.beginPath(), a0D[a0].t0.moveTo(Math.floor(.3 * iH + a1U), Math.floor(iH / 2)), a0D[a0].t0.lineTo(Math.floor(iH - .3 * iH + 0 + a1U), Math.floor(iH / 2)), a0D[a0].t0.stroke(), a0D[a0].t0.beginPath(), a0D[a0].t0.moveTo(
					Math.floor(iH / 2 + a1U), Math.floor(.3 * iH)), a0D[a0].t0.lineTo(Math.floor(iH / 2 + a1U), Math.floor(iH - .3 * iH + 0)), a0D[a0].t0.stroke()
			}(a0, u, a1U)) : a1Y(a0, 2 * iH, a1U, gb)
	}

	function a1Y(a0, u, a1U, gb) {
		a0D[a0].t0.strokeStyle = a0D[a0].a1c ? p.m5 : a1U ? p.mP : p.mQ, a0D[a0].t0.fillStyle = gb, a0D[a0].t0.fillRect(u - iH, 0, 1, iH), a0D[a0].t0.lineWidth = Math.max(Math.floor(iH / 12), 3), a0D[a0].t0.lineCap = "round";
		a1U = .35;
		u = iH + 1, a0D[a0].t0.beginPath(), a0D[a0].t0.moveTo(Math.floor(u - a1U * iH + 0), Math.floor(a1U * iH)), a0D[a0].t0.lineTo(Math.floor(u - iH + a1U * iH), Math.floor(iH - a1U * iH + 0)), a0D[a0].t0.stroke(), a0D[a0].t0.beginPath(), a0D[a0]
			.t0.moveTo(Math.floor(u - iH + a1U * iH), Math.floor(a1U * iH)), a0D[a0].t0.lineTo(Math.floor(u - a1U * iH + 0), Math.floor(iH - a1U * iH + 0)), a0D[a0].t0.stroke()
	}

	function a1n(f0) {
		for (var hv, a0 = f0 - 1; 0 <= a0; a0--) hv = aU.eh(a2.ev, a0), a0D[a0].hv !== hv && (a0D[a0].hv = hv, a0D[a0].a1b = hv > a0D[a0].a1b ? hv : a0D[a0].a1b, a0D[a0].a1T = !0)
	}

	function a1R(a1p) {
		a1p.gO = document.createElement("canvas"), bI.rq.font = zz;
		var u = a1P;
		a1p.hu < a2.f4 && 0 === a1p.id && (u += Math.floor(bI.rq.measureText(aX.l6[a1p.hu] + "000").width)), u += iH, 0 === a1p.id && (u += iH), a1p.gO.width = u, a1p.gO.height = iH, a1p.t0 = a1p.gO.getContext("2d", {
			alpha: !0
		}), a1p.t0.font = zz, b2.kw.textBaseline(a1p.t0, 1), b2.kw.textAlign(a1p.t0, 1)
	}

	function a1j(a0) {
		return aJ.a1r() ? an.u - a0D[a0].gO.width - bR.gap : aJ.fi
	}

	function a1k(a0) {
		return Math.floor(2 * bR.gap + (aJ.a1r() ? aL.iH + bR.gap : 0) + aJ.iH + a0 * (1.3 * iH))
	}
	this.dG = function() {
		a0D = [], this.resize()
	}, this.resize = function() {
		zz = aC.zz, iH = aC.fontSize + 5, iH = Math.floor(1.25 * iH), m.n.tk() && (iH = Math.floor(1.25 * iH)), a1Q = Math.floor(.15 * iH), bI.rq.font = zz, a1P = Math.floor(bI.rq.measureText("02 000 000 0000").width);
		for (var a0 = a0D.length - 1; 0 <= a0; a0--) a1R(a0D[a0]), a1S(a0)
	}, this.kJ = function() {
		for (var a0 = a0D.length - 1; 0 <= a0; a0--) a0D[a0].a1T && (a0D[a0].a1T = !1, a1S(a0))
	}, this.fq = function(jo, fj) {
		if (2 !== a2.uf && 0 !== aX.kZ[a2.ev] && !a2.fm && aS.uY(a2.ev))
			for (var a1e, a1f, a1g, a1h = m.n.tk() ? iH : 0, a1i = m.n.tk() ? Math.floor(.15 * iH) : 0, a0 = a0D.length - 1; 0 <= a0; a0--)
				if (a1e = a1j(a0), a1f = a1k(a0), a1g = a0D[a0].gO.width, a1f - a1i <= fj && fj <= a1f + iH + a1i) {
					if (a1e - a1h <= jo && jo <= a1e + iH + a1h) return a0D[a0].a1c || (a0D[a0].a1T = !0, a0D[a0].a1c = !0, 0 === a0D[a0].id && b0.g3.nA(a0D[a0].hu)), !0;
					if (0 === a0D[a0].id && a1e + a1g - iH - a1h <= jo && jo <= a1e + a1g + a1h) return b0.g3.gC(aG.gA(), a0D[a0].hu), !0
				} return !1
	}, this.hd = function() {
		var f0;
		2 !== a2.uf && 0 !== aX.kZ[a2.ev] && !a2.fm && aS.uY(a2.ev) && (function(f0) {
			if (a0D.length !== f0) return 1;
			for (var a0 = f0 - 1; 0 <= a0; a0--)
				if (a0D[a0].id !== aU.eb(a2.ev, a0) || a0D[a0].hu !== aU.eg(a2.ev, a0)) return 1;
			return
		}(f0 = aU.ea(a2.ev)) && function(f0) {
			var a0, id, hu, i7, hv, a0T = [];
			loop: for (a0 = 0; a0 < f0; a0++) {
				for (id = aU.eb(a2.ev, a0), hu = aU.eg(a2.ev, a0), i7 = 0; i7 < a0D.length; i7++)
					if (a0D[i7].id === id && a0D[i7].hu === hu) {
						a0T.push(a0D.splice(i7, 1)[0]);
						continue loop
					} hv = aU.eh(a2.ev, a0), a1R(hv = {
					hu: hu,
					hv: hv,
					a1b: hv,
					id: id,
					a1T: !0,
					a1c: !1,
					gO: null,
					t0: null
				}), a0T.push(hv)
			}
			a0D = a0T
		}(f0), a1n(f0))
	}, this.a1q = function(f7) {
		for (var f0 = Math.min(a0D.length, aU.ea(a2.ev)), a0 = 0; a0 < f0; a0++)
			if (a0D[a0].hu === f7) return void(a0D = [])
	}, this.kn = function() {
		if (0 !== aX.kZ[a2.ev] && aS.uY(a2.ev) && !a2.fm)
			for (var a0 = a0D.length - 1; 0 <= a0; a0--) kx.drawImage(a0D[a0].gO, a1j(a0), a1k(a0))
	}
}

function bz() {
	var a0D, j0, a1s, a1t, iH, zz, fontSize, a1u, a1v, a1w, a1x, gO, t0, lI, a1y;

	function qT(a0) {
		return L(0 === a0 ? 74 : 1 === a0 ? 75 : 2 === a0 ? 76 : 77)
	}

	function a25() {
		kx.drawImage(gO, bR.gap + (a2.ho ? bR.gap + bW.a26() : 0), a27 + 2 * bR.gap)
	}

	function a1z() {
		gO.width = a0D[0].width + a1w, gO.height = iH + a1w, (t0 = gO.getContext("2d", {
				alpha: !0
			})).clearRect(0, 0, a0D[0].width + a1w, iH + a1w), t0.translate(Math.floor(a1w / 2), Math.floor(a1w / 2)), t0.lineWidth = a1w, t0.fillStyle = 1 === a0D[0].a24 ? p.m2 : p.lu, a28(), t0.fill(), t0.strokeStyle = 1 === a0D[0].a24 ? p.l2 : p
			.lx, a28(), t0.stroke(), b2.kw.textAlign(t0, 1), b2.kw.textBaseline(t0, 1), t0.fillStyle = 1 === a0D[0].a24 ? p.l2 : p.lx, t0.font = zz[0], t0.fillText(qT(a0D[0].a23), Math.floor(a0D[0].width / 2), Math.floor(.72 * a1u[0] * iH)), t0
			.font = zz[1], t0.fillText(a0D[0].oG, Math.floor(a0D[0].width / 2), Math.floor((a1u[0] + .48 * a1u[1]) * iH))
	}

	function a28() {
		t0.beginPath(), t0.moveTo(a1x, 0), t0.lineTo(a0D[0].width - a1x, 0), t0.lineTo(a0D[0].width, a1x), t0.lineTo(a0D[0].width, iH - a1x), t0.lineTo(a0D[0].width - a1x, iH), t0.lineTo(a1x, iH), t0.lineTo(0, iH - a1x), t0.lineTo(0, a1x), t0
			.closePath()
	}
	this.dG = function() {
		j0 = 4, a1s = a1t = lI = 0, a0D = [], zz = new Array(2), fontSize = new Array(2), (a1u = new Array(2))[0] = .3, a1u[1] = .7, a1v = new Array(4), gO = document.createElement("canvas"), a1y = bU.dr + 2e3, this.resize()
	}, this.resize = function() {
		var a0, u;
		for (iH = Math.floor((m.n.tk() ? .0725 : .058) * an.oX), fontSize[0] = Math.floor(.85 * a1u[0] * iH), fontSize[1] = Math.floor(.85 * a1u[1] * iH), zz[0] = b2.kw.l1(1, fontSize[0]), zz[1] = b2.kw.l1(1, fontSize[1]), a0 = a1v.length -
			1; 0 <= a0; a0--) a1v[a0] = this.measureText(qT(a0) + "000", zz[0]);
		if (a1w = Math.floor(1 + .05 * iH), a1x = Math.floor(.2 * iH), 0 < a0D.length) {
			for (a0 = a0D.length - 1; 0 <= a0; a0--) u = this.measureText(a0D[a0].oG + "00", zz[1]), a0D[a0].width = u < a1v[a0] ? a1v[a0] : u;
			a1z()
		}
	}, this.hd = function() {
		0 !== j0 && (4 === j0 ? bU.dr > a1y && (j0 = 0, 1 === a2.uf) && aF.v3(bI.jB.sE[bI.sF].name, 3, 1, 9) : (1 === j0 ? (0 === a1s && (a1z(), a1s = 1e-4), 1 <= (a1s += .002 * (bU.dr - lI)) && (a1t = 0, j0 = 2, a1s = 1), bU.dN = !0) : 2 ===
			j0 ? ((a1t += (bU.dr - lI) / 1e3) > a0D[0].lN || 1 < a1t && 1 < a0D.length) && (j0 = 3) : 3 === j0 && ((a1s -= .002 * (bU.dr - lI)) <= 0 && (a1s = 0, a0D.shift(), j0 = 0 < a0D.length ? 1 : 0), bU.dN = !0), lI = bU.dr))
	}, this.measureText = function(oG, zz) {
		return kx.font = zz, Math.floor(kx.measureText(oG).width)
	}, this.hr = function(a22, a0) {
		this.v3(aX.l6[a22], a0, 1, 0 === a0 ? 3 : 7)
	}, this.v3 = function(oG, a23, a24, lN) {
		var u = (u = this.measureText(oG + "00", zz[1])) < a1v[a23] ? a1v[a23] : u;
		a0D.push({
			oG: oG,
			width: u,
			a23: a23,
			a24: a24,
			lN: lN
		}), 0 === j0 && (a1s = 0, j0 = 1, lI = bU.dr)
	}, this.kn = function() {
		0 !== j0 && 0 !== a1s && (a1s < 1 ? (kx.globalAlpha = a1s, a25(), kx.globalAlpha = 1) : a25())
	}
}

function cZ() {
	var iH, gO, t0, a29, a2A, a2B, a2C, a1T, a2D, a2E, a2F, a2G, a0z = !1,
		xb = (this.tK = !1, this.u = 0, new Array(2));

	function kK() {
		var u = al.u,
			jc = (a1T = !1, sz(t0, u, iH), Math.floor(u / 2));
		1 === a29 ? (t0.fillStyle = p.mE, t0.fillRect(jc, 0, jc, iH)) : -1 === a29 && (t0.fillStyle = p.mR, t0.fillRect(0, 0, jc, iH)), t1(t0, u, iH, 2);
		var jc = (jc = Math.floor(.25 * iH)) < 2 ? 2 : jc,
			a1A = (t0.fillStyle = p.m3, Math.floor((iH - 4) * a2A[1] / a2B[1]));
		0 < a1A && t0.fillRect(2, iH - 2 - a1A, jc, a1A), 0 < (a1A = Math.floor((iH - 4) * a2A[0] / a2B[0])) && t0.fillRect(u - 2 - jc, iH - 2 - a1A, jc, a1A);
		jc = (jc = Math.floor(iH / 8)) < 2 ? 2 : jc, t3(t0, Math.floor(.4 * iH), 0, iH, jc, .5, !1), t3(t0, Math.floor(u - 1.4 * iH), 0, iH, jc, .5, !0), a1A = 1.1 * iH / xb[0].width;
		t0.imageSmoothingEnabled = !0, t0.setTransform(a1A, 0, 0, a1A, (u - a1A * xb[0].width) / 2, -.05 * iH), t0.drawImage(xb[+a0z], 0, 0), t0.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a2H() {
		a2F = bU.et(), a1T = !0, a2D = a29 = 0, a2C = [], al.tK = !1, aC.um(247, 0), a2A[0] = a2A[1] = 0, aC.ys(673)
	}

	function kz() {
		return aG.a0e(aC.a0a()) ? aG.fj - iH - bR.gap : b3.a0e(aC.a0d()) ? b3.kz() - iH - bR.gap : an.iH - iH - bZ.zN() * bR.gap
	}
	this.dH = function() {
		for (var a0 = 0; a0 < 2; a0++) xb[a0] = b2.gO.tY(aR.get(3), 8 - a0, p.mq), xb[a0] = b2.gO.xd(xb[a0])
	}, this.dG = function() {
		a2F = -140, a2E = 0, a2G = -1, this.tK = !1, a1T = a0z = !1, a2A = [a29 = a2D = 0, 0], a2B = [1, 1], a2C = [], this.resize()
	}, this.resize = function() {
		iH = aG.iH, this.u = 4 * iH, (gO = document.createElement("canvas")).width = this.u, gO.height = iH, t0 = gO.getContext("2d", {
			alpha: !0
		}), kK()
	}, this.kJ = function() {
		a1T && kK()
	}, this.fq = function(fi, fj) {
		var kt;
		return !!this.tK && !(fi < an.u - this.u - bR.gap || fj < (kt = kz()) || kt + iH < fj || (a2.fm || b0.g3.nG(fi > an.u - bR.gap - this.u / 2 ? 1 : 0), 0))
	}, this.hd = function() {
		if (0 < a2E) 0 === --a2E && a2H();
		else if (this.tK) 180 == --a2D && 3 * a2A[0] < a2B[0] ? a2H() : a2A[0] >= a2B[0] ? a0z ? bH.uK.ua() : bH.uK.ue() : a2A[1] >= a2B[1] ? a2E = 4 : a2D <= 0 && a2H();
		else if (function() {
				if (0 <= a2G) return 1;
				return
			}()) {
			a0z = aY.a2K(), aC.v4(250, L(78, [aX.l6[a2G]]), 673, a2G, p.lx, p.lu, -1, !0), a2G = -1, aC.ys(257), aC.a0y(a0z), this.tK = !0, a1T = !0, a2D = 360;
			for (var du, ds = 0, a0 = it - 1; 0 <= a0; a0--) aS.uY(iv[a0]) && (ds += aX.es[iv[a0]]);
			a0z ? a2B[0] = Math.max(bB.eo(3 * ds, 4), 1) : a2.ho ? 9 === a2.jE && 8 === bV.v0[bW.jx()] ? a2B[0] = Math.max(ds, 1) : (du = bB.eo(100 * bW.vG(), a2.iY), du = bB.o8(200 - 2 * du, 50, 100), du = bB.eo(du * ds, 100), a2B[0] = Math.max(
				du, 1)) : a2B[0] = Math.max(bB.eo(3 * ds, 5), 1), a2B[1] = Math.max(ds - a2B[0], 1)
		}
	}, this.ug = function() {
		this.tK && a2A[0] < a2B[0] && a2H()
	}, this.oA = function(player, a2N) {
		var a0;
		if (this.tK) {
			for (a0 = a2C.length - 1; 0 <= a0; a0--)
				if (a2C[a0] === player) return;
			var a2O = L(a2N ? 79 : 80, [aX.l6[player]]);
			aC.v4(450, a2O, 257, player, a2N ? p.mC : p.mO, p.lu, -1, !0), a2C.push(player), a1T = !0, a2O = a2.jG ? a2B[0] : aX.es[player], a2N ? a2A[0] += a2O : a2A[1] += a2O, player === a2.ev && (a29 = a2N ? 1 : -1)
		}
	}, this.kn = function() {
		var fj;
		this.tK && (fj = kz(), kx.drawImage(gO, an.u - this.u - bR.gap, fj))
	}, this.oB = function(player) {
		if (!a2.jG) {
			if (bU.et() < a2F + 140) return !1;
			if (bU.et() < 535) return !1
		}
		return 0 === a2D && !!b2.eq.fo(1) && !(!b2.eq.fp(player) || 10 <= iZ[player] && !b2.eq.yM(player, 9))
	}, this.nL = function(player) {
		a2G = player
	}
}

function c0() {
	var u, fi, a2P, gO, t0, tK, h8, yn, zz, a1T, a2Q = 11 / 12;

	function a2S() {
		var a1a = Math.floor(h8 * (u - 2 * a2P)),
			a2V = 1 + Math.floor(.0625 * aG.iH),
			a2W = 1 + Math.floor(.3 * aG.iH),
			a2X = Math.floor(.55 * aG.iH);
		t0.clearRect(0, 0, u, aG.iH), t0.fillStyle = p.lt, t0.fillRect(0, 0, a2P, aG.iH), t0.fillRect(a2P + a1a, 0, u - a2P - a1a, aG.iH), t0.fillStyle = h8 < 1 / 3 ? "rgba(" + Math.floor(3 * h8 * 130) + ",130,0,0.85)" : h8 < 2 / 3 ? "rgba(130," + (
				130 - Math.floor(3 * (h8 - 1 / 3) * 130)) + ",0,0.85)" : "rgba(130,0," + Math.floor(3 * (h8 - 2 / 3) * 130) + ",0.85)", t0.fillRect(a2P, 0, a1a, aG.iH), t0.fillStyle = p.lx, t0.fillRect(0, 0, u, 1), t0.fillRect(0, aG.iH - 1, u, 1), t0
			.fillRect(0, 0, 1, aG.iH), t0.fillRect(a2P, 0, 1, aG.iH), t0.fillRect(a2P + a1a, 0, 1, aG.iH), t0.fillRect(u - a2P, 0, 1, aG.iH), t0.fillRect(u - 1, 0, 1, aG.iH), t0.fillRect(Math.floor(.25 * aG.iH) + a2W, Math.floor((aG.iH - a2V) / 2),
				aG.iH - 2 * a2W, a2V), t0.fillRect(Math.floor(u - 1.25 * aG.iH) + a2W, Math.floor((aG.iH - a2V) / 2), aG.iH - 2 * a2W - a2W % 2, a2V), t0.fillRect(Math.floor(u - 1.25 * aG.iH) + Math.floor((aG.iH - a2V) / 2), a2W, a2V, aG.iH - 2 *
				a2W - a2W % 2), yn = b2.eq.h7(a2.ev, aG.gA()), t0.fillText(b2.l4.l5(yn) + " (" + b2.l4.ye(100 * h8, +(h8 < .1)) + ")", Math.floor(.5 * u), a2X)
	}
	this.setAbsolutePercentage = function(newPercentage) {
		h8 = newPercentage;
	};
	keybindFunctions.setAbsolute = this.setAbsolutePercentage;
	keybindFunctions.setRelative = (arg1) => aG.wt(arg1);

	function a2c(xJ) {
		return !(1 < xJ && 1 === h8 || (1 < xJ && xJ * h8 - h8 < 1 / 1024 ? xJ = (h8 + 1 / 1024) / h8 : xJ < 1 && h8 - xJ * h8 < 1 / 1024 && (xJ = (h8 - 1 / 1024) / h8), h8 = bB.o8(h8 * xJ, 1 / 1024, 1), a2S(), 0))
	}

	function a2d(jo) {
		return h8 !== (h8 = bB.o8((jo - fi - a2P) / (u - 2 * a2P), 1 / 1024, 1)) && (a2S(), !0)
	}
	this.fj = 0, this.fr = !1, this.dG = function() {
		tK = !a2.g2 && !a2.fm, a1T = !1, h8 = .5, yn = 0, this.fr = !1, this.resize()
	}, this.resize = function() {
		m.n.tk() && an.u < .8 * an.iH ? (this.iH = Math.floor(.0536 * an.oX), u = an.u - 4 * bR.gap - this.iH) : (u = Math.floor((m.n.tk() ? .65 : .389) * an.oX), u += 12 - u % 12, this.iH = Math.floor(u / 12)), a2P = Math.floor(3 * this.iH / 2),
			zz = b2.kw.l1(1, Math.floor(.5 * this.iH)), (gO = document.createElement("canvas")).width = u, gO.height = this.iH, (t0 = gO.getContext("2d", {
				alpha: !0
			})).font = zz, b2.kw.textBaseline(t0, 1), b2.kw.textAlign(t0, 1), this.a2R(), a2S()
	}, this.a2R = function() {
		fi = m.n.tk() && an.u < .8 * an.iH ? this.iH + 3 * bR.gap : Math.floor((an.u - u) / 2), this.fj = an.iH - this.iH - bZ.zN() * bR.gap
	}, this.kJ = function() {
		a1T && (a1T = !1, a2S())
	}, this.tK = function() {
		return !(!tK || aB.fn && fi < Math.floor(bR.gap + 5.5 * this.iH))
	}, this.a0e = function(a2Y) {
		return !!this.tK() && fi + u > an.u - a2Y - bR.gap
	}, this.yq = function() {
		tK = !a2.fm
	}, this.a2H = function() {
		tK = !1
	}, this.gA = function() {
		return bB.o8(Math.floor(1024 * h8 + .5) - 1, 0, 1023)
	}, this.wq = function(jo, jp) {
		return this.tK() && fi < jo && jo < fi + u && jp > this.fj
	}, this.fq = function(jo, jp) {
		return !!this.tK() && !!aG.wq(jo, jp) && (aH.lU = !1, function(vD, jo, jp) {
			if (function(jo, jp) {
					return fi < jo && jo < fi + a2P && jp > aG.fj
				}(jo, jp)) return a2c(a2Q);
			if (function(jo, jp) {
					return fi + u - a2P < jo && jo < fi + u && jp > aG.fj
				}(jo, jp)) return a2c(1 / a2Q);
			return vD.fr = !0, a2d(jo)
		}(this, jo, jp) && (bU.dN = !0), !0)
	}, this.wt = function(lb) {
		0 !== a2.uf && this.tK() && a2c(lb) && (bU.dN = !0)
	}, this.wO = function(deltaY) {
		var lb;
		return !(0 === deltaY || !this.tK()) && a2c(lb = 0 < deltaY ? (lb = 400 / (400 + deltaY)) < a2Q ? a2Q : lb : 1 / a2Q < (lb = (400 - deltaY) / 400) ? 1 / a2Q : lb)
	}, this.wL = function(jo) {
		return !!this.fr && a2d(jo)
	}, this.wm = function() {
		this.fr = !1
	}, this.hd = function() {
		this.tK() && yn !== b2.eq.h7(a2.ev, this.gA()) && (a1T = !0)
	}, this.kn = function() {
		this.tK() && kx.drawImage(gO, fi, this.fj)
	}
}

function ck() {
	var gO, t0, a2e, font, a2f = 0,
		a2g = !1,
		a2h = [10, 5, 3, 2, 1.5, 1, .75, .5, .25],
		a2i = 5;

	function a2o() {
		if (a2g) {
			var a0, f0 = a2h.length,
				a2X = Math.floor(.5 * a2e.iH),
				iH = f0 * a2X,
				fi = Math.floor(Math.floor(a2e.fi) + .3 * a2e.u - .5),
				fj = Math.floor(Math.floor(a2e.fj) - iH),
				u = Math.floor(.4 * a2e.u + 2.5);
			for (kx.fillStyle = p.lt, kx.fillRect(fi, fj, u, iH), kx.fillStyle = p.mI, kx.fillRect(fi, fj + a2i * a2X, u, a2X), kx.fillStyle = p.lx, kx.fillRect(fi, fj, 2, iH), kx.fillRect(fi, fj, u, 2), kx.fillRect(fi + u - 2, fj, 2, iH), a0 =
				1; a0 < f0; a0++) kx.fillRect(fi, fj + a0 * a2X, u, 2);
			for (kx.fillStyle = p.lx, b2.kw.textAlign(kx, 1), b2.kw.textBaseline(kx, 1), kx.font = b2.kw.l1(0, .6 * a2X), fi += .5 * u, a0 = 0; a0 < f0; a0++) kx.fillText(a2w(a0), fi, fj + (a0 + .6) * a2X)
		}
		kx.drawImage(gO, Math.floor(a2e.fi), Math.floor(a2e.fj))
	}

	function kK(vD) {
		var fi, ks, kt, a2X;
		t0.clearRect(0, 0, Math.floor(a2e.u), Math.floor(a2e.iH)), t0.fillStyle = p.lt, t0.fillRect(0, 0, Math.floor(a2e.u), Math.floor(a2e.iH)), a2.lT && (t0.fillStyle = p.mI, t0.fillRect(0, 0, Math.floor(.3 * a2e.u), Math.floor(a2e.iH))), t0
			.fillStyle = p.lx, t0.fillText("Hide UI", .15 * a2e.u, .5 * a2e.iH), t0.fillRect(Math.floor(.3 * a2e.u - .5), 0, 2, Math.floor(a2e.iH)), fi = .5 * a2e.u, t0.fillText("Replay Speed", fi, .31 * a2e.iH), t0.fillText(a2w(a2i), fi, .69 * a2e
				.iH), t0.fillRect(Math.floor(.7 * a2e.u - .5), 0, 2, Math.floor(a2e.iH)), vD.zL ? (fi = Math.floor(.02 * a2e.u), vD = Math.floor(.025 * a2e.u), ks = Math.floor(.85 * a2e.u - fi - .5 * vD), kt = Math.floor(.25 * a2e.iH), a2X = Math
				.floor(a2e.iH) - 2 * kt, t0.fillRect(ks, kt, fi, a2X), t0.fillRect(ks + fi + vD, kt, fi, a2X)) : function() {
				var u = Math.floor(.46 * a2e.iH),
					iH = Math.floor(.23 * a2e.iH),
					fi = Math.floor(.85 * a2e.u - .5 * u + u / 12),
					fj = Math.floor(.5 * a2e.iH - iH);
				t0.beginPath(), t0.moveTo(fi, fj), t0.lineTo(fi + u, fj + iH), t0.lineTo(fi, fj + (iH << 1)), t0.fill()
			}(), t0.fillRect(0, 0, Math.floor(a2e.u), 2), t0.fillRect(0, 0, 2, Math.floor(a2e.iH)), t0.fillRect(0, Math.floor(a2e.iH) - 2, Math.floor(a2e.u), 2), t0.fillRect(Math.floor(a2e.u - 2), 0, 2, Math.floor(a2e.iH))
	}

	function a2w(a0) {
		return 5 === a0 ? "Normal" : "" + a2h[a0]
	}
	this.zL = !1, this.dG = function() {
		a2.fm && (a2i = 5, this.zL = !1, a2g = !1, a2e = new p1([.3, .3 / 6], [.5, 1]), this.resize())
	}, this.a2j = function() {
		return a2h[a2i]
	}, this.kz = function() {
		return a2e.fj
	}, this.a0e = function(a2Y) {
		return !!a2.fm && a2e.fi + a2e.u > an.u - a2Y - bR.gap
	}, this.resize = function() {
		a2.fm && (a2e.resize(), a2e.fj -= (bZ.zN() - 1) * bR.gap, font = b2.kw.l1(0, .3 * a2e.iH), (gO = document.createElement("canvas")).width = Math.floor(a2e.u), gO.height = Math.floor(a2e.iH), (t0 = gO.getContext("2d", {
			alpha: !0
		})).font = font, b2.kw.textAlign(t0, 1), b2.kw.textBaseline(t0, 1), kK(this))
	}, this.wx = function(a2k) {
		0 === a2.uf || i.tK() || a2k !== a2.lT && (a2.lT = a2k, bW.resize(), bU.dN = !0, a2.fm) && (a2f = bU.dr + 2e3, kK(this))
	}, this.fq = function(fi, fj) {
		if (!a2.fm) return !1;
		if (fi < a2e.fi || fj < a2e.fj || fi > a2e.fi + a2e.u) return a2g && function(vD, fi, fj) {
			var f0 = a2h.length,
				a2X = Math.floor(.5 * a2e.iH),
				iH = f0 * a2X,
				ks = Math.floor(Math.floor(a2e.fi) + .3 * a2e.u - .5),
				iH = Math.floor(Math.floor(a2e.fj) - iH),
				u = Math.floor(.4 * a2e.u + 2.5);
			return a2g = !1, bU.dN = !0, fi < ks || ks + u < fi || fj < iH || (a2i = a2n(0, Math.floor((fj - iH) / a2X), f0 - 1), kK(vD)), !0
		}(this, fi, fj);
		if ((fi -= a2e.fi) < .3 * a2e.u) a2g = !1, this.wx(!a2.lT);
		else {
			if (fi < .7 * a2e.u) return a2g = !a2g, bU.dN = !0;
			this.wz(!1)
		}
		return !0
	}, this.wz = function(a2m) {
		2 === a2.uf ? (this.wx(!1), i.j(3)) : (a2g = !1, this.zL = !this.zL, this.zL ? (aB.fn && aB.wy(), m.n.setState(1)) : a2m || aB.a05(), bU.dN = !0, kK(this))
	}, this.x0 = function() {
		this.zL = !1, aB.a05(), bU.dN = !0, kK(this)
	}, this.we = function(fi, fj) {
		return !!a2.lT && (aB.fq(fi, fj) || (a2.fm ? ((bU.dr > a2f || !this.fq(fi, fj)) && aH.fq(fi, fj), bU.dN = !0, a2f = bU.dr + 2e3) : aH.fq(fi, fj)), !0)
	}, this.hd = function() {
		a2.fm && a2.lT && bU.dr > a2f - 1e3 && bU.dr < a2f && (bU.dN = !0)
	}, this.un = function() {
		a2.fm && (this.zL = !1, bU.dN = !0, kK(this))
	}, this.kn = function() {
		if (a2.fm) {
			if (a2.lT) {
				if (bU.dr > a2f) return;
				if (bU.dr > a2f - 1e3) return kx.globalAlpha = a2n(0, (1e3 - (bU.dr - (a2f - 1e3))) / 1e3, 1), a2o(), void(kx.globalAlpha = 1)
			}
			a2o()
		}
	}
}

function c1() {
	var a2x, a2y, u, fi, fj, a2z, a30;
	this.dG = function() {
		a2x = new Array(2), a2y = new Array(2), this.lU = !1, a30 = a2z = hB = h9 = 0, hA = 1, this.resize()
	}, this.resize = function() {
		u = (u = Math.floor((m.n.tk() ? .072 : .0502) * an.oX)) < 8 ? 8 : u;
		for (var a0 = 1; 0 <= a0; a0--) a2x[a0] = document.createElement("canvas"), a2x[a0].width = u, a2x[a0].height = u, a2y[a0] = a2x[a0].getContext("2d", {
			alpha: !0
		});
		this.a2R(),
			function() {
				for (var a3F = Math.floor(1 + u / 20), a0 = 1; 0 <= a0; a0--) a2y[a0].clearRect(0, 0, u, u), a2y[a0].fillStyle = p.lq, a2y[a0].beginPath(), a2y[a0].arc(u / 2, u / 2, u / 2 - a3F, 0, 2 * Math.PI), a2y[a0].fill(), a2y[a0]
					.lineWidth = a3F, a2y[a0].fillStyle = p.lx, a2y[a0].strokeStyle = p.lx, a2y[a0].beginPath(), a2y[a0].arc(u / 2, u / 2, u / 2 - a3F, 0, 2 * Math.PI), a2y[a0].stroke(), t3(a2y[a0], 0, 0, u, a3F, .3, 0 === a0)
			}()
	}, this.ky = function() {
		return -h9 / hA
	}, this.kz = function() {
		return -hB / hA
	}, this.ld = function(a34, gr) {
		h9 = hA * a34 - gr
	}, this.le = function(a35, gs) {
		hB = hA * a35 - gs
	}, this.fq = function(a33, a0f) {
		return a2.lT || ! function(a33, a0f) {
			return Math.pow(a33 - (fi + u / 2), 2) + Math.pow(a0f - (fj + u / 2), 2) < u * u / 4 || Math.pow(a33 - (fi + u / 2), 2) + Math.pow(a0f - (fj + 2 * u), 2) < u * u / 4
		}(a33, a0f) || bY.dY.data[8].value ? (a7.lg() && (this.lU = !0, a2z = a33, a30 = a0f), !1) : a0f < fj + 1.25 * u ? this.wO(Math.floor(an.u / 2), Math.floor(an.iH / 2), -200) : this.wO(Math.floor(an.u / 2), Math.floor(an.iH / 2), 200)
	}, this.wL = function(a33, a0f) {
		var a36, a37, gu, gx;
		return !a7.lg() || (a36 = h9, a37 = hB, h9 += gu = a2z - a33, hB += gx = a30 - a0f, aW.wL(gu, gx), this.a38(), a2z = a33, a30 = a0f, a36 !== h9) || a37 !== hB
	}, this.wO = function(jo, jp, deltaY) {
		var lb;
		if (a7.lg()) {
			if (0 < deltaY) lb = (lb = 500 / (500 + deltaY)) < .5 ? .5 : lb;
			else {
				if (!(deltaY < 0)) return !1;
				lb = 2 < (lb = (500 - deltaY) / 500) ? 2 : lb
			}
			this.a39(jo, jp, lb), bU.dN = !0
		}
		return !0
	}, this.a39 = function(fi, fj, fz) {
		var xJ;
		fz = xJ = (xJ = 1024 < (xJ = fz) * hA ? 1024 / hA : xJ) * hA < .125 ? .125 / hA : xJ, aW.zoom(fz, fi, fj),
			function(xJ, jo, jp) {
				hA *= xJ, h9 = (h9 + jo) * xJ - jo, hB = (hB + jp) * xJ - jp, aH.a38()
			}(fz, fi, fj)
	}, this.a38 = function() {
		var a3C = an.u / 16,
			gX = 0,
			a3D = an.iH / 16,
			gZ = 0;
		h9 < -an.u + a3C && (gX = -an.u + a3C - h9), h9 > hA * bI.eV - a3C && (gX = hA * bI.eV - a3C - h9), hB < -an.iH + a3D && (gZ = -an.iH + a3D - hB), hB > hA * bI.eW - a3D && (gZ = hA * bI.eW - a3D - hB), h9 += gX, hB += gZ, bP.lf(), aW.a3E(
			gX, gZ)
	}, this.a2R = function() {
		fi = an.u - u - bR.gap, fj = Math.floor(an.iH / 2 - 1.25 * u)
	}, this.kn = function() {
		bY.dY.data[8].value || (kx.drawImage(a2x[0], fi, fj), kx.drawImage(a2x[1], fi, Math.floor(fj + 3 * u / 2)))
	}
}

function c2() {
	var e8, sI, a3G, a3H, gap, a3I, a3J, a3K, a3L, a3M, zz, a3N, ff, a3O, a1a, a3P, a3Q, a3R;

	function a3V() {
		a3H = Math.floor(.2 * (m.n.tk() ? .07 : .035) * an.oX), a3H = a0c(m.n.tk() ? 3 : 1, a3H);
		var a3Y = an.u / (e8.length + gap);
		a3H = a3H < a3Y ? a3Y : a3H, a1a = Math.floor((1 - gap) * a3H), sI = 0, a3Z()
	}

	function a3Z() {
		sI = (sI = sI < -20 ? -20 : sI) > (e8.length - 15) * a3H ? (e8.length - 15) * a3H : sI, a3J = Math.floor(sI / a3H), a3K = (a3K = a3J + Math.floor(an.u / a3H)) > e8.length - 1 ? e8.length - 1 : a3K, a3J = (a3J = a3K < a3J ? a3K : a3J) < 0 ?
			0 : a3J;
		var jc = a3K;
		a3I = a3G / e8[jc];
		for (var a0 = a3K - 1; a3J <= a0; a0--) e8[a0] > e8[jc] && (jc = a0, a3I = a3G / Math.pow(e8[a0], a3O))
	}

	function a3c(fi) {
		fi = Math.floor((sI + an.u - fi - gap * a3H) / a3H);
		return (fi = fi < -1 ? -1 : -1 === fi ? 0 : fi > e8.length - 1 ? -1 : fi) !== a3L && (a3L = fi, -1 === a3P && 0 === a3L && aI.a3S && (a3P = setInterval(a3d, 100)), 1)
	}

	function a3e(a0) {
		var a1Q = Math.floor(a3I * Math.pow(e8[a0], a3O));
		kx.fillRect(sI + an.u - (a0 + 1) * a3H, an.iH - a1Q, a1a, a1Q)
	}

	function a3d() {
		var f7;
		0 !== (a3L = 8 === aP.vz() ? -1 : a3L) ? (a3Q = (new Date).getTime(), clearInterval(a3P), a3P = -1) : (f7 = e8[1] / 864e3, -1 !== a3Q && (f7 += ((new Date).getTime() - a3Q) * e8[1] / 864e5, a3Q = -1), 0 < f7 && (e8[0] += Math.floor(f7), bU
			.dN = !0))
	}
	this.a3S = !1, this.dG = function() {
		a3Q = a3P = -1, a3L = -(a3O = 1), this.a3T = !1, ff = 0, a3N = new Date, sI = 0, gap = .3, (a3R = []).push({
			jO: "Plateau A",
			f0: 0,
			d: 57
		}), a3R.push({
			jO: "Max A",
			f0: 1,
			d: 1
		}), a3R.push({
			jO: "Black Friday",
			f0: 15,
			d: 15
		}), a3R.push({
			jO: "Max B",
			f0: 19,
			d: 19
		}), a3R.push({
			jO: "Max C",
			f0: 44,
			d: 44
		}), a3R.push({
			jO: "First Android Version",
			f0: 58,
			d: 58
		}), a3R.push({
			jO: "Max D",
			f0: 67,
			d: 67
		}), a3R.push({
			jO: "The iFrame Explosion",
			f0: 98,
			d: 99
		}), a3R.push({
			jO: "The 155-Day Uptrend",
			f0: 58,
			d: 213
		}), a3R.push({
			jO: "Max E",
			f0: 213,
			d: 213
		}), a3R.push({
			jO: "Plateau B",
			f0: 214,
			d: 259
		}), a3R.push({
			jO: "Turbulent Times",
			f0: 260,
			d: 344
		}), a3R.push({
			jO: "Max F",
			f0: 262,
			d: 262
		}), a3R.push({
			jO: "Max G",
			f0: 282,
			d: 282
		}), a3R.push({
			jO: "Max H",
			f0: 333,
			d: 333
		}), a3R.push({
			jO: "The 19-Day Downtrend",
			f0: 283,
			d: 301
		}), a3R.push({
			jO: "Plateau C",
			f0: 345,
			d: 385
		}), a3R.push({
			jO: "The Alliance Ascent",
			f0: 386,
			d: 395
		}), a3R.push({
			jO: "Max I",
			f0: 395,
			d: 395
		}), a3R.push({
			jO: "First iOS Version",
			f0: 411,
			d: 411
		}), a3R.push({
			jO: "Plateau D",
			f0: 396,
			d: 453
		}), a3R.push({
			jO: "The TikTok Revolution",
			f0: 454,
			d: 470
		}), a3R.push({
			jO: "Max J",
			f0: 456,
			d: 456
		}), a3R.push({
			jO: "Max K",
			f0: 472,
			d: 472
		}), a3R.push({
			jO: "Max L",
			f0: 478,
			d: 478
		}), a3R.push({
			jO: "YT Drew",
			f0: 471,
			d: 485
		}), a3R.push({
			jO: "Plateau E",
			f0: 485,
			d: 600
		}), a3R.push({
			jO: "Uptrend A",
			f0: 600,
			d: 613
		}), a3R.push({
			jO: "Max M",
			f0: 613,
			d: 613
		}), a3R.push({
			jO: "Downtrend A",
			f0: 614,
			d: 635
		}), a3R.push({
			jO: "Plateau F",
			f0: 636,
			d: 737
		}), a3R.push({
			jO: "End of Record",
			f0: 738,
			d: 738
		}), e8 = [208644377, 208644377, 208644377, 206964709, 205156594, 250680803, 249089835, 234476552, 252346209, 263196406, 270821533, 291436400, 294907103, 288866179, 297960890, 310165928, 323215738, 326005712, 312078872, 282668674,
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
		a3G = Math.floor(.15 * an.iH), a3M = (a3M = Math.floor((m.n.tk() ? .018 : .0137) * an.oX)) < 2 ? 2 : a3M, zz = b2.kw.l1(1, a3M), a3V()
	}, this.a3W = function(a3X) {
		var a0;
		for (this.a3S = !0, a0 = 0; a0 < a3X.length; a0++) e8.unshift(a3X[a0]);
		a3V(), bU.dN = !0
	}, this.a3a = function() {
		a3Z()
	}, this.wL = function(fi, fj) {
		fj > an.iH - .6 * a3G ? this.a3T ? fi !== ff && (sI += fi - ff, ff = fi, a3Z(), a3c(fi), this.a3T = -1 !== a3L, bU.dN = !0) : a3c(fi) && (bU.dN = !0) : this.wk()
	}, this.wk = function() {
		-1 !== a3L && (this.a3T = !1, a3L = -1, bU.dN = !0)
	}, this.wO = function(fi, deltaY) {
		-1 !== a3L && (sI += Math.floor(deltaY), a3Z(), a3c(fi), bU.dN = !0)
	}, this.fq = function(fi, fj) {
		this.wL(fi, fj), -1 !== a3L && (ff = fi, this.a3T = !0)
	}, this.wl = function() {
		-1 !== a3L && (this.a3T = !1)
	}, this.kn = function() {
		kx.fillStyle = p.m0;
		for (var a3g, month, ds, ph, a3j, a3k, kt, a3l, a3m, a0 = a3K; a3J <= a0; a0--) a3e(a0);
		this.a3S && 0 === a3J && (kx.fillStyle = p.mR, a3e(0)), -1 !== a3L && (kx.fillStyle = p.lz, a3e(a3L)), -1 !== a3L && (kx.font = zz, b2.kw.textBaseline(kx, 2), (ds = new Date).setTime(a3N.getTime() - 1e3 * a3L * 60 * 60 * 24), month =
			"month", a3g = "day", "undefined" != typeof Intl && (month = new Intl.DateTimeFormat("en-US", {
				month: "long"
			}).format(ds), a3g = new Intl.DateTimeFormat("en-US", {
				weekday: "long"
			}).format(ds)), a3g = a3g + ", " + ds.getUTCDate() + " " + month + " " + ds.getFullYear(), month = 1 === e8[a3L] ? L(81) : L(82), month = b2.l4.l5(e8[a3L]) + " " + month, ds = Math.floor(kx.measureText(a3g).width), ph = Math
			.floor(kx.measureText(month).width), a3j = Math.floor(.5 * (ds + a3M)), a3k = (a3k = sI + an.u - (a3L + 1) * a3H) < a3j ? a3j : a3k > an.u - a3j ? an.u - a3j : a3k, kt = an.iH - Math.floor(a3I * Math.pow(e8[a3L], a3O)), a3l = Math
			.floor(1.1 * a3M), a3m = kt > an.iH - a3l ? an.iH - a3l : kt, kx.fillStyle = p.lu, kx.fillRect(an.u - ph - a3M, a3m - a3l, ph + a3M, a3l), kx.fillRect(a3k - a3j, an.iH - a3l, ds + a3M, a3l), kx.fillStyle = p.lx, b2.kw.textAlign(
				kx, 2), kx.fillText(month, Math.floor(an.u - .5 * a3M), a3m),
			function(kt, a3l) {
				for (var pg, je = -1, kh = e8.length - a3L - 1, a0 = a3R.length - 1; 0 <= a0; a0--) kh >= a3R[a0].f0 && kh <= a3R[a0].d && (-1 === je || a3R[a0].d - a3R[a0].f0 < a3R[je].d - a3R[je].f0) && (je = a0); - 1 !== je && (pg = Math
					.floor(kx.measureText(a3R[je].jO).width), kx.fillStyle = p.lu, kx.fillRect(an.u - pg - a3M, kt, pg + a3M, a3l), kx.fillStyle = p.lx, kx.fillText(a3R[je].jO, Math.floor(an.u - .5 * a3M), kt + a3l))
			}(a3m - 2 * a3l, a3l), b2.kw.textAlign(kx, 1), kx.fillText(a3g, a3k, an.iH), kx.strokeStyle = p.m1, kx.lineWidth = 1, kx.beginPath(), kx.moveTo(0, kt), kx.lineTo(an.u, kt), kx.closePath(), kx.stroke())
	}
}

function c3() {
	var zz, u, fj, a3o, a3p, gO, t0, a1T, yB, a3q, a3r, a3s, a3t;
	this.fi = 0, this.iH = 0, this.dG = function() {
		a3p = a2.sh, a3r = "rgba(0,100,0,0.8)", a3s = "rgba(150,0,0,0.8)", a1T = !(a3q = !0), yB = aX.ew[a2.ev], this.resize()
	}, this.resize = function() {
		u = Math.floor((m.n.tk() ? .305 : .24) * an.oX), this.iH = Math.floor(.5 + .13 * u), u = Math.floor(6 * this.iH), zz = b2.kw.l1(1, Math.floor(.8 * this.iH)), a3t = Math.floor(.5 * this.iH), bI.rq.font = zz, fj = bR.gap, a3o = Math.floor(
			1 + .13 * this.iH), (gO = document.createElement("canvas")).width = u, gO.height = this.iH, (t0 = gO.getContext("2d", {
			alpha: !0
		})).font = zz, b2.kw.textBaseline(t0, 1), b2.kw.textAlign(t0, 1), this.a3u()
	}, this.a1r = function() {
		return m.n.tk() && an.u < 1.2 * an.iH
	}, this.a2R = function() {
		this.a1r() ? this.fi = an.u - u - bR.gap : this.fi = Math.floor(aK.a3v() + (an.u - aK.a3v() - aL.u - u) / 2 - .5 * bR.gap)
	}, this.kJ = function() {
		a1T && (a1T = !1, this.a3u())
	}, this.a3u = function() {
		t0.clearRect(0, 0, u, this.iH), t0.fillStyle = a3q ? a3r : a3s, t0.fillRect(0, 0, u, this.iH), t0.fillStyle = p.lz, this.a3w(), this.a3x(), t0.fillStyle = aX.ew[a2.ev] >= aV.iU(a2.ev) ? p.mO : p.lx, t0.fillText(b2.l4.l5(yB), Math.floor(
			u / 2), a3t), t0.fillStyle = p.lx, t0.fillRect(0, 0, u, 1), t0.fillRect(0, 0, 1, this.iH), t0.fillRect(0, this.iH - 1, u, 1), t0.fillRect(u - 1, 0, 1, this.iH)
	}, this.a3w = function() {
		var sQ = a3z(Math.floor((aV.a3y() - 1) * this.iH / 9), this.iH - a3o);
		t0.fillRect(0, sQ, a3o, this.iH - sQ), t0.fillRect(u - a3o, sQ, a3o, this.iH - sQ)
	}, this.a3x = function() {
		t0.fillRect(a3o, this.iH - a3o, Math.floor((u - 2 * a3o) * aX.ew[a2.ev] / a3p), a3o)
	}, this.hd = function() {
		0 !== aX.kZ[a2.ev] && 2 !== aX.y6[a2.ev] && yB !== aX.ew[a2.ev] && (a3p = a0c(aX.ew[a2.ev], a3p), a3q = aX.ew[a2.ev] > yB && 10 <= aX.ew[a2.ev], yB = aX.ew[a2.ev], a1T = !0)
	}, this.kn = function() {
		0 === aX.kZ[a2.ev] || a2.g2 || 2 === aX.y6[a2.ev] || kx.drawImage(gO, this.fi, fj)
	}
}

function c4() {
	var a40, a41, a42, a43, a44, a45, a46, a47, a48, a49, a4A, a4B, a4C, a4D, a4E, a4F, a4G, a4H, a4I, a4J, a4K, a4L, position, a4M, a4N, a4O, a4P, a4Q = 1,
		a4R = 1;
	var leaderboardHasChanged = true;
	this.playerPos = a2.ev;
	leaderboardFilter.setUpdateFlag = () => leaderboardHasChanged = true;

	function updateFilteredLb() {
		if (!leaderboardHasChanged) return;
		leaderboardFilter.filteredLeaderboard = leaderboardFilter.playersToInclude
			.map(id => iZ[id]).sort((a, b) => a - b);
		leaderboardHasChanged = false;
		this.playerPos = leaderboardFilter.filteredLeaderboard.indexOf(iZ[a2.ev]);
	}

	function a4T() {
		a46.clearRect(0, 0, a40, a27),
			a46.fillStyle = p.mc,
			a46.fillRect(0, 0, a40, a4B),
			a46.fillStyle = p.lt,
			a46.fillRect(0, a4B, a40, a27 - a4B);
		if (leaderboardFilter.enabled) updateFilteredLb();
		var playerPos = (leaderboardFilter.enabled ?
			this.playerPos :
			iZ[a2.ev]
		);
		if (leaderboardFilter.hoveringOverTabs) a4L = -1;
		if (leaderboardFilter.enabled && a4L >= leaderboardFilter.filteredLeaderboard.length) a4L = -1;
		playerPos >= position && a4V(playerPos - position, p.mI),
			0 !== iZ[a2.ev] && 0 === position && a4V(0, p.mh),
			-1 !== a4L && a4V(a4L, p.ly),
			a46.fillStyle = p.lt,
			//console.log("drawing", a4L),
			a46.clearRect(0, a27 - leaderboardFilter.tabBarOffset, a40, leaderboardFilter.tabBarOffset);
		a46.fillRect(0, a27 - leaderboardFilter.tabBarOffset, a40, leaderboardFilter.tabBarOffset);
		a46.fillStyle = p.lx,
			a46.fillRect(0, a4B, a40, 1),
			a46.fillRect(0, a27 - leaderboardFilter.tabBarOffset, a40, 1),
			leaderboardFilter.drawTabs(a46, a40, a27 - leaderboardFilter.tabBarOffset, p.mI),
			a46.fillRect(0, 0, a40, bR.tn),
			a46.fillRect(0, 0, bR.tn, a27),
			a46.fillRect(a40 - bR.tn, 0, bR.tn, a27),
			a46.fillRect(0, a27 - bR.tn, a40, bR.tn), a46.font = a41, b2.kw.textBaseline(a46, 1), b2.kw.textAlign(a46, 1), a46.fillText(L(83), Math.floor((a40 + a4B - 22) / 2), Math.floor(a49 + a42 / 2));
		playerList.drawButton(a46, 12, 12, a4B - 22);
		var i1, f8 = playerPos < position + a44 - 1 ? 1 : 2;

		if (leaderboardFilter.enabled) {
			let result = leaderboardFilter.filteredLeaderboard;
			if (position !== 0 && position >= result.length - a44)
				position = (result.length > a44 ? result.length : a44) - a44;
			//if (position >= result.length) position = result.length - 1;
			for (a46.font = a43, b2.kw.textAlign(a46, 0), i1 = a44 - f8; 0 <= i1; i1--) {
				const pos = result[i1 + position];
				if (pos !== undefined)
					a4W(jz[pos]), a4X(i1, pos, jz[pos]);
			}
			for (b2.kw.textAlign(a46, 2), i1 = a44 - f8; 0 <= i1; i1--) {
				const pos = result[i1 + position];
				if (pos !== undefined)
					a4W(jz[pos]), a4Y(i1, jz[pos]);
			}
		} else {
			for (a46.font = a43, b2.kw.textAlign(a46, 0), i1 = a44 - f8; 0 <= i1; i1--)
				a4W(jz[i1 + position]), a4X(i1, i1 + position, jz[i1 + position]);
			for (b2.kw.textAlign(a46, 2), i1 = a44 - f8; 0 <= i1; i1--)
				a4W(jz[i1 + position]), a4Y(i1, jz[i1 + position]);
		}
		2 == f8 && (a4W(a2.ev), b2.kw.textAlign(a46, 0), a4X(a44 - 1, iZ[a2.ev], a2.ev), b2.kw.textAlign(a46, 2), a4Y(a44 - 1, a2.ev)), 0 === position && (f8 = .7 * a4C / aR.get(4).height, a46.setTransform(f8, 0, 0, f8, Math.floor(a4D + .58 * a4C +
			.5 * f8 * aR.get(4).width), Math.floor(a49 + a42 + .4 * a4C)), a46.imageSmoothingEnabled = !0, a46.drawImage(aR.get(4), -Math.floor(aR.get(4).width / 2), -Math.floor(aR.get(4).height / 2)), a46.setTransform(1, 0, 0, 1, 0, 0))
	}

	function a4W(player) {
		a2.ho && (a46.fillStyle = bV.a4a[bV.v0[bV.ip[player]]])
	}

	function a4V(a0, a4b) {
		a46.fillStyle = a4b, a0 = a44 - 1 < a0 ? a44 - 1 : a0;
		a4b = Math.floor((a0 === a44 - 1 ? 2 : 0 === a0 ? 1.15 : 1) * a4C), a4b = a0 === a44 - 2 ? Math.floor(a4B + 9.15 * a4C) - Math.floor(a4B + 8.15 * a4C) : a4b;
		a46.fillRect(0, Math.floor(a4B + (a0 + (0 === a0 ? 0 : .15)) * a4C), a40, a4b)
	}

	function a4X(a4d, vL, a0) {
		a46.fillText(a4H[vL], a4D, Math.floor(a49 + a42 + (a4d + .5) * a4C)), 1 === aX.y6[a0] && (a46.font = "italic " + a43);
		vL = Math.floor(a49 + a42 + (a4d + .5) * a4C);
		a46.fillText(aX.l6[a0], a4E, vL), 0 !== aX.y6[a0] && (a46.font = a43), a0 < a2.is && 2 !== aX.y6[a0] || a46.fillRect(a4E, vL + .35 * a4Q, a4G[a0], Math.max(1, .1 * a4Q))
	}

	function a4Y(a4d, a0) {
		a46.fillText(aX.es[a0], a4F, Math.floor(a49 + a42 + (a4d + .5) * a4C))
	}

	function a4m(fj) {
		return (fj -= bR.gap + a4B) < 0 ? Math.floor(fj / a4C) - 1 : fj < (a44 - 1) * a4C ? Math.floor(fj / a4C) : fj < a27 - a4B ? a44 - 1 : (fj -= a27 - a4B, a44 + Math.floor(fj / a4C))
	}

	function tm(fi, fj) {
		return fi >= bR.gap && fi < bR.gap + a40 && fj >= bR.gap && fj < bR.gap + a27
	}
	this.dG = function() {
			var a0;
			for (a4N = !1, a4P = a4O = a4M = 0, a4L = -1, a44 = m.n.tk() ? 6 : 10, a4R = (position = 0) === (a4R = bY.dY.data[11].value) ? 10 : 1 === a4R ? 5 : 1, a4K = !1, a4I = new Uint16Array(a44 + 1), a4J = new Uint32Array(a44 + 1), a48 = a2.f4,
				jz = new Uint16Array(a48), iZ = new Uint16Array(a48), a0 = a48 - 1; 0 <= a0; a0--) jz[a0] = a0, iZ[a0] = a0;
			this.resize(!0), a4G = new Uint16Array(a2.f4);
			var a4S = Math.floor(a40 - a4E - a4D - a47);
			for (a4H = new Array(a2.f4), a46.font = a43, a0 = a2.f4 - 1; 0 <= a0; a0--) a4H[a0] = a0 + 1 + ".", aX.l6[a0] = b2.t0.xn(aX.vX[a0], a43, a4S), a4G[a0] = Math.floor(a46.measureText(aX.l6[a0]).width);
			a4T()
		}, this.resize = function(dG) {
			if (a27 = m.n.tk() ? (a40 = Math.floor(.335 * an.oX), Math.floor(a44 * a40 / 8)) : (a40 = Math.floor(.27 * an.oX), Math.floor(a44 * a40 / 10)), a40 = Math.floor(.97 * a40), (a45 = document.createElement("canvas")).width = a40, a45
				.height = a27, a46 = a45.getContext("2d", {
					alpha: !0
				}), a49 = .025 * a40, a42 = .16 * a40, a4A = 0 * a40, a4B = Math.floor(.45 * a49 + a42), a4C = (a27 - a42 - 2 * a49 - a4A) / a44,
				a45.height = a27 += a4C, leaderboardFilter.tabBarOffset = Math.floor(a4C * 1.3), leaderboardFilter.verticalClickThreshold = a27 - leaderboardFilter.tabBarOffset, leaderboardFilter.windowWidth = a40,
				a41 = b2.kw.l1(1, Math.floor(.55 * a42)), a4Q = Math.floor((m.n.tk() ? .67 : .72) * a4C), a43 = b2.kw.l1(0, a4Q), a46.font = a43, a4D = Math.floor(.04 * a40), a4E = Math.floor((m.n.tk() ? .195 : .18) * a40), a47 = Math.floor(a46
					.measureText("00920600").width), a46.font = a41, a4F = a40 - a4D, !dG) {
				a46.font = a43;
				for (var a0 = a2.f4 - 1; 0 <= a0; a0--) a4G[a0] = Math.floor(a46.measureText(aX.l6[a0]).width);
				a4T()
			}
		}, this.a3v = function() {
			return a40
		}, this.kJ = function(bc, a4U) {
			(a4U || a4K && (bc || bU.et() % a4R == 0)) && (a4K = !1, a4T())
		}, this.hd = function() {
			! function() {
				for (var i1 = a48 - 1; 0 <= i1; i1--) 0 === aX.kZ[jz[i1]] && ! function(i1) {
					var a4k = jz[i1];
					a48--;
					for (var a0 = i1; a0 < a48; a0++) jz[a0] = jz[a0 + 1], iZ[jz[a0]] = a0;
					jz[a48] = a4k, iZ[jz[a48]] = a48
				}(i1)
			}();
			for (var a4i, lg = a48 - 1, i1 = 0; i1 < lg; i1++) aX.es[jz[i1]] < aX.es[jz[i1 + 1]] && (a4i = jz[i1], jz[i1] = jz[i1 + 1], jz[i1 + 1] = a4i, iZ[jz[i1]] = i1, iZ[jz[i1 + 1]] = i1 + 1);
			! function() {
				for (var ds = a4K, f8 = (a4K = !0, iZ[a2.ev] >= a44 - 1 ? a44 - 2 : a44 - 1), a0 = f8; 0 <= a0; a0--)
					if (a4I[a0] !== jz[a0] || a4J[a0] !== aX.es[jz[a0]]) return;
				(f8 != a44 - 2 || a4I[a44] === iZ[a2.ev] && a4J[a44] === aX.es[a2.ev]) && (a4K = ds)
			}();
			for (var a0 = a44 - 1; 0 <= a0; a0--) a4I[a0] = jz[a0], a4J[a0] = aX.es[jz[a0]];
			a4I[a44] = iZ[a2.ev], a4J[a44] = aX.es[a2.ev];
			leaderboardHasChanged = true;
		}, leaderboardFilter.scrollToTop = function() {
			position = 0;
		}, this.fq = function(fi, fj) {
			return !!tm(fi, fj) && ((utils.isPointInRectangle(fi, fj, bR.gap + 12, bR.gap + 12, a4B - 22, a4B - 22) && playerList.display(aX.vX), true) &&
				!(fj - bR.gap > leaderboardFilter.verticalClickThreshold && leaderboardFilter.handleMouseDown(fi - bR.gap)) && (a4M = bU.dr, a4N = !0, a4O = a4P = a4m(fj), b9.x1() && (fi = a2n(-1, a4P, a44), a4L !== (fi = fi === a44 ? -1 :
					fi)) && (a4L = fi, a4T(), bU.dN = !0)), !0)
		}, leaderboardFilter.repaintLeaderboard = function() {
			a4T(), bU.dN = !0;
		},
		this.wL = function(fi, fj) {
			if (utils.isPointInRectangle(fi, fj, bR.gap + 12, bR.gap + 12, a4B - 22, a4B - 22)) {
				playerList.hoveringOverButton === false && (playerList.hoveringOverButton = true, a4T(), bU.dN = !0);
			} else {
				playerList.hoveringOverButton === true && (playerList.hoveringOverButton = false, a4T(), bU.dN = !0);
			}
			if (leaderboardFilter.setHovering(
					utils.isPointInRectangle(fi, fj, bR.gap, bR.gap + leaderboardFilter.verticalClickThreshold, leaderboardFilter.windowWidth, leaderboardFilter.tabBarOffset), fi - bR.gap
				)) return;
			var ds, a4l = a4m(fj);
			return a4N ? (ds = position, (position = a2n(0, position += a4O - a4l, a2.f4 - a44)) !== ds && (a4l = (a4l = a2n(-1, a4O = a4l, a44)) !== a44 && tm(fi, fj) ? a4l : -1, a4L = a4l, a4T(), bU.dN = !0), !0) : (a4l = (a4l = a2n(-1, a4l,
				a44)) === a44 || !tm(fi, fj) || b9.x1() ? -1 : a4l, a4L !== a4l && (a4L = a4l, a4T(), bU.dN = !0))
		}, this.wl = function(fi, fj) {
			if (!a4N) return !1;
			a4N = !1;
			var a4l = a4m(fj);
			var isEmptySpace = false;
			return b9.x1() && -1 !== a4L && (a4L = -1, a4T(), bU.dN = !0), bU.dr - a4M < 350 && a4P === a4l && -1 !== (a4l = (a4l = a2n(-1, a4l, a44)) !== a44 && tm(fi, fj) ? a4l : -1) && (fi = (leaderboardFilter.enabled ? (updateFilteredLb(), jz[
					leaderboardFilter.filteredLeaderboard[a4l + position] ?? (isEmptySpace = true, iZ[a2.ev])]) : jz[a4l + position]), a4l === a44 - 1 && (leaderboardFilter.enabled ? this.playerPos : iZ[a2.ev]) >=
				position + a44 - 1 && (fi = a2.ev), !isEmptySpace && a2.ho && donationsTracker.displayHistory(fi, aX.vX, a2.jG), 0 !== aX.kZ[fi] && !isEmptySpace) && a7.lR(fi, 800, !1, 0), !0
		}, this.wO = function(fi, fj, deltaY) {
			var a4n;
			return !(a4N || a2.lT || (a4n = Math.max(Math.floor(Math.abs(deltaY) / 40), 1), !tm(fi, fj)) || (fi = (fi = a2n(-1, a4m(fj), a44)) === a44 || b9.x1() ? -1 : fi, 0 < deltaY ? position < a2.f4 - a44 && (position += Math.min(a2.f4 - a44 -
				position, a4n), a4L = fi, a4T(), bU.dN = !0) : 0 < position && (position -= Math.min(position, a4n), a4L = fi, a4T(), bU.dN = !0), 0))
		}, this.kn = function() {
			kx.drawImage(a45, bR.gap, bR.gap)
		}
}

function c5() {
	var gO, t0, fi, fj, a1Q, a4o, gap, a4p, fontSize, a4q, a4r, ey, a4s, a4t, a4u, a4v, a4w;

	function a4z() {
		t0.clearRect(0, 0, aL.u, aL.iH), t0.fillStyle = p.lu, t0.fillRect(0, 0, aL.u, aL.iH), t0.fillStyle = p.mE, fz = 0 < a4u ? a4u : Math.sqrt(ey[4] / 1e4), t0.fillRect(0, aL.iH - a1Q - 1, Math.floor(fz * aL.u), a1Q), t0.fillStyle = p.lx, t0
			.fillRect(0, 0, aL.u, 1), t0.fillRect(0, 0, 1, aL.iH), t0.fillRect(aL.u - 1, 0, 1, aL.iH), t0.fillRect(0, aL.iH - 1, aL.u, 1), t0.fillRect(0, aL.iH - a1Q - 1, aL.u, 1);
		for (var fz, a51, ds = 0, a0 = 0; a0 < a4r.length; a0++) a4s[a0] ? (b2.kw.textAlign(t0, 0), a51 = Math.floor((a4o - a1Q + 2 * a4p) * (a0 - ds + 1) / (a4r.length + 1) - .7 * a4p), t0.fillText(a4r[a0], gap, a51), b2.kw.textAlign(t0, 2), 5 ===
			a0 && 0 !== aX.kZ[a2.ev] && aX.ew[a2.ev] >= aV.iU(a2.ev) ? (t0.fillStyle = p.mf, t0.fillText(a4y(a0), aL.u - gap, a51), t0.fillStyle = p.lx) : t0.fillText(a4y(a0), aL.u - gap, a51)) : ds++
	}

	function a4y(a0) {
		return a0 < 3 ? ey[a0].toString() : 3 === a0 || 4 === a0 || 5 === a0 ? b2.l4.ye(ey[a0] / 100, 2) : a0 < 7 ? b2.l4.l5(ey[a0]) : a0 === 7 ? aL.a3y(ey[7]) : a0 === 8 ? utils.getMaxTroops(aX.es, a2.ev) : utils.getDensity(a2.ev)
	}

	function a4x() {
		aX.es[a2.ev] !== ey[6] && (ey[6] = aX.es[a2.ev], a4q++)
	}
	this.dG = function() {
		a4u = a4v = 0, (a4r = new Array(8))[0] = L(84), a4r[1] = a2.jG ? L(85) : L(86), a4r[2] = L(87), a4r[3] = L(88), a4r[4] = L(89), a4r[5] = L(90), a4r[6] = L(91), a4r[7] = L(92),
			a4r.push("Max Troops", "Density"), // add a4r
			(ey = new Array(a4r.length))[0] = a2.jG ? 0 : a2.is, ey[1] = a2.jG ? it : a2.jD, ey[2] = a2.uh, ey[3] = 0, ey[4] = bB.eo(1e4 * aX.es[0], a2.iY), ey[5] = 700, ey[6] = 0, a4x(), ey[7] = 0, a4t = a4y(6), a4s = new Array(a4r.length);
		for (var a0 = a4r.length - 1; 0 <= a0; a0--) a4s[a0] = !0;
		a4w = 0, a4w = a2.jG ? (a4s[0] = !1, a4s[2] = !1, a4s[3] = !1, 3) : (a4s[3] = !1, 1), a4q = 0, this.resize()
	}, this.resize = function() {
		this.u = Math.floor((m.n.tk() ? .1646 : .126) * 1.25 * an.oX), this.iH = Math.floor(1.18 * this.u), a1Q = Math.floor(.04 * this.u), gap = Math.floor(.035 * this.u), a4p = .04 * this.u, a4o = this.iH, this.iH -= Math.floor(a4w * (this.iH -
			2 * a1Q) / a4r.length), fontSize = Math.floor(.7 * (a4o - a1Q) / a4r.length), fontSize = b2.kw.l1(1, fontSize), (gO = document.createElement("canvas")).width = this.u, gO.height = this.iH, (t0 = gO.getContext("2d", {
			alpha: !0
		})).font = fontSize, b2.kw.textBaseline(t0, 1), t0.lineWidth = 1, this.yr(), this.a2R(), aJ.a2R(), a4z()
	}, this.a2R = function() {
		fi = an.u - this.u - bR.gap
	}, this.a50 = function() {
		fj = bR.gap
	}, this.yr = function() {
		fj = bR.gap + (aJ.a1r() && 0 !== aX.kZ[a2.ev] && !a2.g2 ? aJ.iH + bR.gap : 0)
	}, this.kJ = function(bc) {
		(bc || 100 <= a4q) && (a4q = 0, a4z())
	}, this.ze = function() {
		return ey[7]
	}, this.a3y = function(value) {
		var jc = Math.floor(value / 1e3 / 60),
			value = Math.floor((value - 6e4 * jc) / 1e3);
		return value < 10 ? jc + ":0" + value : jc + ":" + value
	}, this.hd = function() {
		var a5A, per;
		a4s[0] && a2.ui - a2.uh !== ey[0] && (ey[0] = a2.ui - a2.uh, a4q++), it - ey[0] !== ey[1] && (ey[1] = it - ey[0], a4q++), this.kA(), (a5A = aV.a5B(a2.ev)) !== ey[5] && (ey[5] = a5A, a4q++), a4x(), ey[7] += bU.a5C, a5A = a4y(7), a4t !==
			a5A && (a4t = a5A, a4q += 100), a5A = a2.ho ? bW.vG() : aX.es[jz[0]], per = bB.eo(1e4 * a5A, a2.iY), ey[3] = a5A, ey[4] !== per && (a4q++, ey[4] = per), 8 === a2.jE && function() {
				for (var a0 = 0; a0 < 2; a0++)
					if (!b2.eq.fp(a0)) return bH.uK.ue(), 1;
				return
			}() || ey[3] < a2.iY || ! function() {
				for (var a0 = it - 1; 0 <= a0; a0--)
					if (0 < aX.f1[iv[a0]].length) return;
				return 1
			}() || bH.uK.ue()
	}, this.kA = function() {
		a4s[2] && a2.uh !== ey[2] && (ey[2] = a2.uh, a4q++)
	}, this.a5D = function(a0) {
		var pv, a5E, ds;
		return 2 !== a2.uf && (a0 % 2 == 1 && (aK.kJ(1, 1), bU.dN = !0), a0 === a2.z0 ? (a4u = 0, a4z(), !1) : (-1 !== a0 || 0 !== a4v) && (a5E = a4u, a4u = a2.fm ? a0 / a2.z0 : (ds = performance.now(), 0 <= a0 && (pv = ds - 392 * a0, a4v = 0 ===
			a0 || pv < a4v ? pv : a4v), 1 < (a4u = (ds - a4v) / (392 * a2.z0)) ? 1 : a4u), a4z(), a4u !== a5E))
	}, this.kn = function() {
		kx.drawImage(gO, fi, fj)
	}
}

function c6() {
	var tK, a5F, u, iH, a2X, a5G, a5H, a1s, gO, lI, a5I;

	function kz() {
		return Math.floor((an.u - u) / 2) < aG.iH + 2 * bR.gap ? an.iH - iH - 4 * bR.gap - aG.iH : an.iH - iH - 2 * bR.gap
	}
	this.a5J = -1, this.dG = function() {
		a5I = tK = !1, a2X = .61, a5G = .07, a5H = .09, lI = a1s = iH = 0, this.a5J = -1
	}, this.resize = function() {
		var t0, ks, io, a5N, a5O, a04;
		tK && (u = a3z(u = m.n.tk() ? Math.floor(.69 * an.oX) : Math.floor(.5 * an.oX), a0c(an.u - 2 * bR.gap, 10)), u = a3z(u, Math.floor(3.57 * a0c(an.iH - 2 * bR.gap, 3))), iH = Math.floor(.28 * u), (gO = document.createElement("canvas"))
			.width = u, gO.height = iH, t0 = gO.getContext("2d", {
				alpha: !0
			}), ks = Math.floor(1 + iH / 40), t0.clearRect(0, 0, u, iH), t0.fillStyle = p.lu, t0.fillRect(ks, ks, u - 2 * ks, iH - 2 * ks), t0.lineJoin = "bevel", t0.lineWidth = 2 * ks, t0.strokeStyle = p.lx, t0.strokeRect(ks, ks, u - 2 * ks,
				iH - 2 * ks), t0.imageSmoothingEnabled = !1, io = aR.get(a5F), a5N = io.width, a04 = (1 === a5F ? .85 : 21 === a5F ? .666 : .9) * a2X * iH / (a5O = io.height), t0.setTransform(a04, 0, 0, a04, Math.floor((u - a04 * a5N) / 2),
				Math.floor((iH - a04 * a5O) / 2)), t0.drawImage(io, 0, 0), t0.setTransform(1, 0, 0, 1, Math.floor(u - a5H * iH - a5G * iH - ks), Math.floor(ks + a5G * iH)),
			function(t0, f0) {
				t0.lineWidth = Math.floor(1 + iH / 80), t0.strokeStyle = p.lx, t0.beginPath(), t0.moveTo(0, 0), t0.lineTo(f0, f0), t0.moveTo(0, f0), t0.lineTo(f0, 0), t0.stroke()
			}(t0, Math.floor(a5H * iH)), t0.setTransform(1, 0, 0, 1, 0, 0))
	}, this.show = function(du, a5L, a2K, a5M) {
		tK || a5M && a5I || (a5F = a2K ? 21 : du ? 1 : 2, tK = a5I = !0, this.resize(), aA.pu(), aG.a2H(), lI = bU.dr, -1 === this.a5J && (this.a5J = bU.et()), a1s = a5L ? 1 : 0)
	}, this.hd = function() {
		!tK || 1 <= a1s || (a1s = 1 < (a1s += 5e-4 * (bU.dr - lI)) ? 1 : a1s, lI = bU.dr, bU.dN = !0)
	}, this.fq = function(fi, fj) {
		return !(!tK || a1s <= 0 || (fi -= Math.floor((an.u - u) / 2), fj -= kz(), fi < 0) || fj < 0 || u < fi || iH < fj || (u - iH / 3 < fi && fj < iH / 3 && (tK = !1, bU.dN = !0), 0))
	}, this.kn = function() {
		!tK || a1s <= 0 || (kx.globalAlpha = a1s, kx.drawImage(gO, Math.floor((an.u - u) / 2), kz()), kx.globalAlpha = 1)
	}
}

function d6() {
	var a5Q = [0, 0],
		a5R = [0, 0];

	function a5U(kh) {
		return 3 !== a5Q[kh] && 1 !== a5R[kh] && (a5R[kh] = 1, a5Q[kh]++, bY.p8.p9(119, (a5Q[0] << 2) + a5Q[1]), 1)
	}
	this.a5S = new a5T, this.dG = function() {
		var du = bY.dY.data[119].value;
		a5Q[0] = du >> 2, a5Q[1] = 3 & du
	}, this.zC = function() {
		this.a5S.dG()
	}, this.hd = function() {
		this.a5S.hd()
	}, this.zf = function() {
		a5U(0) && aC.a0i(L(93))
	}, this.zg = function() {
		a5U(1) && aC.a0i(L(94))
	}
}

function a5T() {
	var a5V;
	this.dG = function() {
		a5V = !1
	}, this.hd = function() {
		var f7;
		if (function() {
				if (!a5V) {
					if (bU.et() % 30 != 9) return;
					if (!b2.eq.jt(90)) return;
					a5V = !0
				}
				return 1
			}() && (! function() {
				var oP = aC.a14(956);
				if (oP) {
					if (b2.eq.jh(oP.player)) return 1;
					aC.a12(956, 0)
				}
				return
			}() && (-1 === (f7 = (a2.ho ? function() {
				for (var id = bW.jx(), f0 = it, t7 = iv, ip = bV.ip, a0 = 0; a0 < f0; a0++) {
					var f7 = t7[a0];
					if (ip[f7] !== id) return f7
				}
				return -1
			} : function() {
				for (var a5c = it, iu = iv, a5d = iZ, a0 = 0; a0 < a5c; a0++) {
					var f7 = iu[a0];
					if (0 !== a5d[f7]) return f7
				}
				return -1
			})()) ? ! function() {
				var oP = aC.a14(957);
				if (oP && oP.a0Y) {
					if (aS.fC(oP.a0Y.fx << 2)) return 1;
					aC.a12(957, 0)
				}
				return
			}() : (aC.v4(0, L(95, [aX.l6[f7]]), 956, f7, p.lx, p.lu, -1, !0), 0)))) {
			var f0 = ab.hS.jm;
			if (0 !== f0)
				for (var dY = ab.hS.dY, a0 = 0; a0 < f0; a0++) {
					var fx = dY[a0];
					if (aS.fC(fx << 2)) return void aC.v4(0, L(96, [bC.gY(fx), bC.ga(fx)]), 957, 0, p.lx, p.lu, -1, !0, void 0, {
						fx: fx
					})
				}
		}
	}
}

function d7() {
	this.a5e = new a5f, this.dG = function() {
		this.a5e.resize()
	}
}

function a5f() {
	this.resize = function() {
		var a0, a5g = document.head.querySelector("style#ss");
		if (a5g)
			for (a0 = a5g.sheet.cssRules.length - 1; 0 <= a0; a0--) a5g.sheet.deleteRule(0);
		else(a5g = document.createElement("style")).id = "ss", document.head.appendChild(a5g);
		var a2f = "::-webkit-scrollbar",
			a5h = b2.kw.oh(bR.xv),
			gI = b2.kw.oh(Math.max(b2.kw.pC(.012), 8));
		try {
			a5g.sheet.insertRule(a2f + "{width:" + gI + ";height:" + gI + ";}", a5g.sheet.cssRules.length), a5g.sheet.insertRule(a2f + "-thumb{background-color:white;}", a5g.sheet.cssRules.length), a5g.sheet.insertRule(a2f +
				"-track{background:" + p.lt + ";}", a5g.sheet.cssRules.length), a5g.sheet.insertRule(a2f + "-track:horizontal{border-top:" + a5h + " solid white;}", a5g.sheet.cssRules.length), a5g.sheet.insertRule(a2f +
				"-track:vertical{border-left:" + a5h + " solid white;}", a5g.sheet.cssRules.length), a5g.sheet.insertRule(a2f + "-button{display:none;}", a5g.sheet.cssRules.length)
		} catch (d) {
			for (console.log("error 3425: " + d), a0 = a5g.sheet.cssRules.length - 1; 0 <= a0; a0--) a5g.sheet.deleteRule(0)
		}
	}
}

function d5() {
	this.a5i = !1, this.lo = !1, this.yv = !1, this.a5j = [0, 0, 0, 0], this.a5k = function() {
		var ks, kt, ku, kv;
		this.yv = this.yv || this.lo, (this.lo || this.a5i && this.yv) && (ks = bP.a5l[0], kt = bP.a5l[1], ku = bP.a5l[2], kv = bP.a5l[3], ks = ks < this.a5j[0] ? this.a5j[0] : ks, kt = kt < this.a5j[1] ? this.a5j[1] : kt, ku = ku > this.a5j[2] ?
			this.a5j[2] : ku, kv = kv > this.a5j[3] ? this.a5j[3] : kv, this.lo = !1, this.a5i = !1, ks === this.a5j[0] && kt === this.a5j[1] && ku === this.a5j[2] && kv === this.a5j[3] ? this.yw() : ks <= ku && kt <= kv && zE.putImageData(
				zF, 0, 0, ks, kt, ku - ks + 1, kv - kt + 1))
	}, this.yw = function() {
		this.yv && this.a5j[2] >= this.a5j[0] && this.a5j[3] >= this.a5j[1] && zE.putImageData(zF, 0, 0, this.a5j[0], this.a5j[1], this.a5j[2] - this.a5j[0] + 1, this.a5j[3] - this.a5j[1] + 1), this.yv = !1
	}, this.uq = function() {
		this.a5j[2] >= this.a5j[0] && this.a5j[3] >= this.a5j[1] && zE.putImageData(zF, 0, 0, this.a5j[0], this.a5j[1], this.a5j[2] - this.a5j[0] + 1, this.a5j[3] - this.a5j[1] + 1), this.yv = !1
	}, this.dG = function() {
		var fi, fj;
		this.a5i = !1, this.lo = !1, this.yv = !1, this.a5j[0] = bI.eV, this.a5j[1] = bI.eW, this.a5j[2] = this.a5j[3] = 0;
		loop: for (fi = 1; fi < bI.eV - 1; fi++)
			for (fj = bI.eW - 2; 1 < fj; fj--)
				if (1 === a5m[aS.sY(fi, fj) + 2]) {
					this.a5j[0] = fi;
					break loop
				} loop: for (fj = 1; fj < bI.eW - 1; fj++)
			for (fi = bI.eV - 2; 1 < fi; fi--)
				if (1 === a5m[aS.sY(fi, fj) + 2]) {
					this.a5j[1] = fj;
					break loop
				} loop: for (fi = bI.eV - 2; 0 < fi; fi--)
			for (fj = bI.eW - 2; 1 < fj; fj--)
				if (1 === a5m[aS.sY(fi, fj) + 2]) {
					this.a5j[2] = fi;
					break loop
				} loop: for (fj = bI.eW - 2; 0 < fj; fj--)
			for (fi = bI.eV - 2; 1 < fi; fi--)
				if (1 === a5m[aS.sY(fi, fj) + 2]) {
					this.a5j[3] = fj;
					break loop
				}
	}
}

function L(value, a5n) {
	var oG = "number" == typeof value ? az.a5o[value] : value;
	if (a5n)
		for (var f0 = a5n.length, a0 = 0; a0 < f0; a0++)
			for (var i1 = 0; i1 < 3; i1++) oG = oG.replace("{" + (10 * i1 + a0) + "}", a5n[a0]);
	return oG
}

function bk() {
	this.data = new a5p;
	var a5q = (new a5r).L84,
		a5s = (this.a5o = a5q, !1);
	this.dG = function() {
		var f0, e8;
		a5s = !1, "en" !== bY.dY.data[12].value.split("-")[0].toLowerCase() ? bY.dY.data[12].value === bY.dY.data[145].value && 0 < bY.dY.data[146].value && (f0 = bY.dY.data[146].value, (e8 = bY.on.qn(f0, !1)).length === f0) && !!b2.og.xY(e8) &&
			function(e8) {
				var f0 = e8.length,
					a5y = bY.on.qn(f0, !0);
				if (f0 !== a5y.length) return !1;
				if (!b2.og.xY(a5y)) return !1;
				for (var jc = a5q.length, a3X = new Array(jc), a5z = jc === f0, jO = Math.min(f0, jc), a0 = 0; a0 < jc; a0++)
					if (a3X[a0] = a5q[a0], a0 < f0 && a5y[a0] === a3X[a0]) a3X[a0] = e8[a0];
					else {
						a5z = !1;
						for (var i7 = 0; i7 < jO; i7++)
							if (a5y[i7] === a3X[a0]) {
								a3X[a0] = e8[i7];
								break
							}
					} return az.a5o = a3X, a5z
			}(e8) || (a5s = !0) : az.a5o = a5q
	}, this.dI = function() {
		bV.dH(), a3.dH(), bT.dH(), bS.dH(), aD.dG(), aj.dH()
	}, this.a60 = function() {
		var a61;
		a5s && (a5s = !1, 0 !== a5q.length) && (a61 = bY.dY.data[12].value, aq.a62.a63(0, a61.slice(0, 20)))
	}, this.a64 = function(e8) {
		e8.length === a5q.length && (this.a5o = e8, bY.p8.p9(145, bY.dY.data[12].value), bY.p8.p9(146, e8.length), bY.on.qt(e8, !1), bY.on.qt(a5q, !0), 0 === aP.vz()) && 5 === i.pZ && i.kB.a65()
	}
}

function a5p() {
	var e8 = ["aa", "ab", "ace", "ach", "af", "ak", "alz", "am", "ar", "as", "av", "awa", "ay", "az", "ba", "bal", "ban", "bbc", "bci", "be", "bem", "ber", "ber-Latn", "bew", "bg", "bho", "bik", "bm", "bm-Nkoo", "bn", "bo", "br", "bs", "bts", "btx",
		"bua", "ca", "ce", "ceb", "cgg", "ch", "chk", "chm", "ckb", "cnh", "co", "crh", "crs", "cs", "cv", "cy", "da", "de", "din", "doi", "dov", "dv", "dyu", "dz", "ee", "el", "en", "eo", "es", "et", "eu", "fa", "fa-AF", "ff", "fi", "fil", "fj",
		"fo", "fon", "fr", "fur", "fy", "ga", "gaa", "gd", "gl", "gn", "gom", "gu", "gv", "ha", "haw", "he", "hi", "hil", "hmn", "hr", "hrx", "ht", "hu", "hy", "iba", "id", "ig", "ilo", "is", "it", "iw", "ja", "jam", "jv", "jw", "ka", "kac",
		"kek", "kg", "kha", "kk", "kl", "km", "kn", "ko", "kr", "kri", "ktu", "ku", "kv", "ky", "la", "lb", "lg", "li", "lij", "lmo", "ln", "lo", "lt", "ltg", "luo", "lus", "lv", "mad", "mai", "mak", "mam", "mfe", "mg", "mh", "mi", "min", "mk",
		"ml", "mn", "mni-Mtei", "mr", "ms", "ms-Arab", "mt", "mwr", "my", "nb", "ndc-ZW", "ne", "new", "nhe", "nl", "no", "nr", "nso", "nus", "ny", "oc", "om", "or", "os", "pa", "pa-Arab", "pag", "pam", "pap", "pl", "ps", "pt", "pt-PT", "qu",
		"rn", "ro", "rom", "ru", "rw", "sa", "sah", "scn", "sd", "se", "sg", "shn", "si", "sk", "sl", "sm", "sn", "so", "sq", "sr", "ss", "st", "su", "sus", "sv", "sw", "szl", "ta", "tcy", "te", "tet", "tg", "th", "ti", "tiv", "tk", "tl", "tn",
		"to", "tpi", "tr", "trp", "ts", "tt", "tum", "ty", "tyv", "udm", "ug", "uk", "ur", "uz", "ve", "vec", "vi", "war", "wo", "xh", "yi", "yo", "yua", "yue", "zap", "zh", "zh-CN", "zh-TW", "zu"
	];
	this.a66 = function() {
		for (var a67 = [], f0 = e8.length, a0 = 0; a0 < f0; a0++) a67.push(e8[a0]);
		for (f0++, a67.unshift(bY.dY.data[12].qi), a0 = 1; a0 < f0; a0++)
			if (a67[a0] === a67[0]) {
				a67.splice(a0, 1), f0--;
				break
			} try {
			if ("undefined" == typeof Intl) return a67;
			for (a0 = 0; a0 < f0; a0++) {
				var oG = new Intl.DisplayNames([a67[a0]], {
					type: "language"
				}).of(a67[a0]);
				oG !== a67[a0] && (a67[a0] = a67[a0] + ": " + oG)
			}
		} catch (d) {
			console.log("error 3646: " + d)
		}
		return a67
	}, this.a69 = function(a6A) {
		for (var oG = bY.dY.data[12].value, f0 = a6A.length, a0 = 0; a0 < f0; a0++)
			if (oG === a6A[a0].split(":")[0]) return a0;
		return 0
	}
}

function a5r() {
	this.L84 = ["Very Easy", "Easy", "Normal", "Hard", "Very Hard", "Impossible", "Activated", "Team {0}", "Team {0} won the game!", "You have earned a participation reward of {10} gold.", "You have earned prize money of {10} gold.",
		"The following clans have won these glorious points:", "Validate the clan results by clicking here: ", "❌ Back", "⚠️ Error", "Error {10}", "Not Enough Gold!", "You need more gold to perform this action.", "Quit Game", "More", "Accept",
		"You have conquered {0}.", "You have been conquered by {0}.", "Congratulations! You have won the game.", "{0} has won the game.", "{0} has broken the non-aggression pact.", "{0} is attacking you!", "Choose your start position!",
		"You have surrendered!", "The game has ended in a stalemate!", "Error: {20}", "{0} has been immortalized!", "Neutral Land: {0}", "Player: {0}   Balance: {11}   Territory: {12}   Coordinates: {13}", "Mountains: {10}", "Water: {10}",
		"Ship Owner: {0}   Strength: {11}", "Message to {0}: ", "Humanity triumphs! The undead have been beaten back.", "The Resistance", "Mankind's era ends, overrun by the relentless tide of the undead.", "The Virus",
		"If peace is agreed upon, the game ends in a stalemate.", "If peace is agreed upon, the largest territory holder wins the game.", "You have signed a non-aggression pact with {0}.", "You have asked {0} to sign a non-aggression pact.",
		"{0} has accepted the non-aggression pact.", "{0} requests a non-aggression pact.", "You have asked {10} players to attack {1}.", "You have asked {0} to attack {1}.", "{0} suggests you attack {1}.", "You have exported 1 resource to {0}.",
		"You have exported {10} resources to {1}.", "A tax of 1 unit has been deducted.", "A tax of {10} units has been deducted.", "A bot ({0}) has supported you with 1 resource.", "A bot ({0}) has supported you with {11} resources.",
		"{0} has supported you with 1 resource.", "{0} has supported you with {11} resources.", "Map: {10}", "Dimension: {10}x{11}", "Overall Pixels: {10}", "Land: {10} ({11})", "Water: {10} ({11})", "Mountains: {10} ({11})",
		"Full sending is disabled.", "{0} has been conquered by {1}.", "{0} has left the game.", "{0} has surrendered.", "{0} has joined the game.", "{10} players have been conquered.", "{10} players have left the game.",
		"{10} players have surrendered.", "Next Contest: ", "YOU HAVE CONQUERED", "YOU HAVE BEEN CONQUERED BY", "THE GAME HAS BEEN WON BY", "MAP:", "{0} has called the peace vote.", "{0} voted for peace.", "{0} rejected peace.", "second played",
		"seconds played", "LEADERBOARD", "Humans", "Players", "Bots", "Spectators", "Threshold", "Percentage", "Growth", "Income", "Time", "Hint: Click on a boat to send it to a new location.", "Hint: The top 9 emojis are ordered by usage.",
		"{0} still needs to be conquered!", "A neutral pixel at position ({10}, {11}) still needs to be conquered!", "Loading", "Back", "Joined", "Skipped", "Multiplayer", "Single Player", "other: ", "Custom Map", "Reset", "Maps", "Start", "You",
		"1 Player", "{10} Players", "White Arena", "Black Arena", "Island", "Mountains", "Desert", "Swamp", "Snow", "Cliffs", "Pond", "Halo", "Europe", "World", "Caucasia", "Africa", "Middle East", "Scandinavia", "North America", "South America",
		"Asia", "Australia", "Island Kingdom", "Refresh", "Public Profile", "🧈 Gold", "Account Balance: ",
		"Play more multiplayer games to earn gold. Accounts without gold will be deleted after some days of grace. Each day, you will lose 0.50 gold or 0.01% of your balance, whichever amount is higher.",
		"Buttons with yellow font color use a small amount of gold, which is then redirected based on the specific action taken.", "Gold is the fuel that keeps your account running! Keep the balance up!", "Gold Transfer", "Send", "Confirm",
		"Cancel", "You are about to send {10} gold from the Source Account {1}. The transaction fee is {12} gold. The Target Account ({3}) will receive {14} gold.", "Account Name", "Copy", "Password", "Show", "Hide", "Request New Password",
		"Security Tip", "To safeguard your account, never disclose your password to anyone. We will never ask for your password, as we do not require it for any service.",
		"If you have accessed your account through unofficial webpages or apps, your security may be compromised. We recommend changing your password.",
		"If you lose your password or account name, you may lose access to your account. In such a case, we are unable to recover it. Please ensure that you store your account name and password in a safe place.", "Account Options",
		"Log in to a Different Account", "Create New Account", "Delete Account: ", "🗑️ Account Deletion", "Accounts without gold will be deleted automatically after 8 days. To initiate this process, deplete all your gold.", "Saved Accounts",
		"Listed accounts may have been removed in the meantime due to insufficient funds.", "🗑️ Remove From List", "➡️ Login", "1v1 Rating", "Elo: ", "Rank: ", "Played Games: ", "Report Player",
		"You can report up to seven players per day for misconduct or other rule violations.", "No Admin", "Assistant Moderator", "Admin Coordinator", "Senior Admin", "Head Admin", "Admin Statistics", "Points: ", "Status: ",
		"You are allowed to elect up to one admin each week. Negative votes count only half as much as positive votes.", "Username", "Please choose a respectful username.", "Primary Clan Stats", "Clan: ", "Monthly Points: ", "Total Points: ",
		"Won Games: ", "Avg. Points per Game: ", "Secondary Clan Stats", "Clan Leader Statistics", "Clan Leader of {0}", "No Clan Leader", "Elect",
		"You are allowed to elect up to one clan leader each week. Your voting power is based on your monthly clan points.", "You can only elect members of the same clan you have won points for.", "Clan Chart", "🛠️ Options", "🛠️ Chart Options",
		"Search Terms", "Separate search terms with a comma.", "Load Data", "Start Index", "End Index", "Timeframe", "More Options", "Y-Axis Compression", "Choose Your Nation's Color!", "National Color", "Red: ", "Green: ", "Blue: ",
		"⏳ Connecting...", "Find Server...", "New Connection...", "My Account", "Game Menu", "Your Kingdom's Name", "Clans", "Clan Members", "1v1 Players", "Admins", "🏆 Leaderboards", "Previous 10", "Next 10", "1v1 Player Ranking",
		"Clan Ranking", "Clan Member Ranking", "Admin Ranking", "1v1 Reports", "Admin Election", "Blockchain", "Clan Leader Election", "Ranking", "Player", "Elo", "Clan", "Points", "Leader", "Index", "Seconds Ago", "Accuser", "Accused",
		"Elector", "Elected", "Sender", "Receiver", "Amount", "🛠️ List Options", "Clan Name Search", "Username Search", "Quantity", "Account Name Search", "Login", "📜 Logs", "▶️ Replay", "🔲 Select All", "📋 Copy", "🗑️ Clear", "▶️ Launch",
		"Insert the replay link here!", "⚙️ Settings", "🔄 Reset", "Reload Required", "A game reload is required to apply the new configuration.", "❌ Close", "Information",
		"Increasing resolution, shrinking minimum font size, and speeding up text rendering can strain your system and hinder gameplay responsiveness.", "Lobby", "Proxied Lobby", "Resolution", "Low", "Medium", "High", "Very High",
		"Minimum Font Size", "Small", "Very Small", "Text Rendering Speed", "Slow", "Fast", "Large UI", "Place Balance Above", "Hide Zoom Buttons", "Font", "Language", "🔑 My Account", "📈 Charts", "🧈 Gold Transfer", "🔗 Links",
		"ℹ️ Game Version", "🗑️ Delete Data", "Privacy Settings", "Force Restart Game", "☰ Game Menu", "📊 Game Statistics", "🏳️ Surrender", "🕊️ Call Peace Vote", "Android App", "iOS App", "Changelog", "Clan Results", "Tutorial", "Terms",
		"Privacy", "Do you want to delete all locally stored data, like usernames, account data and setting data?", "Accounts without gold will be deleted after some days of grace.", "🗑️ Delete", "User Privacy",
		"Check out our Privacy Policy at:", "Source Account", "Target Account", "An enemy ship belonging to {0} is heading towards your shore.", "Avg. Attack Strength", "Number Attacks", "Ships sent", "Bots conquered", "Humans conquered",
		"Attacked by Bots", "Attacked by Humans", "Territorial Loss", "Territorial Income", "Interest Income", "Received Support", "Overall Income", "Commanding Costs", "Attack Losses", "Defense Losses", "Shipping Losses", "Transmitted Support",
		"Overall Expenses", "Territory", "Balance", "Numbers", "Statistics", "White", "Red", "Green", "Blue", "Yellow", "Magenta", "Cyan", "Black"
	]
}

function dL() {
	var fi, fj, iH, a6B, a6C, a6D, a6E, a6F, a6G, u, y2, a6H;
	this.tK = !1, this.dG = function(oG, a6I) {
		if (1 === m.id && 13 <= m.dv && m.dv < 18) return a6I ? void(y2 = oG) : y2 !== oG ? void 0 : void m.t.saveString(200, oG);
		a6I && (y2 = oG, (a6H = document.createElement("a")).appendChild(document.createTextNode(y2)), this.tK = !0, a6H.title = y2, a6H.target = "_blank", a6H.href = y2, a6H.style.textAlign = "center", a6H.style.color = p.lx, a6H.style
			.position = "absolute", a6H.style.padding = "0px", a6H.style.margin = "0px", this.resize(), document.body.appendChild(a6H), bU.dN = !0)
	}, this.pu = function() {
		return !(!this.tK || (document.body.removeChild(a6H), this.tK = !1))
	}, this.fq = function(gr, gs) {
		return !!this.tK && ((gr < fi || gs < fj || fi + u < gr || fj + iH < gs || fi + u - a6B < gr && gs < fj + a6B) && (bU.dN = !0, this.tK = !1, document.body.removeChild(a6H)), !0)
	}, this.resize = function() {
		var zz, a6J;
		this.tK && (a6F = Math.floor(.8 * (m.n.tk() ? an.u > an.iH ? .6 : .55 : .4) * an.oX), a6B = Math.floor(.15 * a6F), a6C = Math.floor(.35 * a6B), a6D = Math.floor(.5 * a6B), a6E = Math.floor(2.5 * a6D), iH = a6B + a6C + 3 * a6D, zz = b2.kw
			.l1(1, a6C / an.ob), a6G = Math.floor(an.ob * aF.measureText(y2, zz)), a6J = u = (a6F < a6G ? a6G : a6F) + 2 * a6E, u = Math.min(u, an.u - 2 * (m.n.tk() ? 2 : 1) * bR.gap), zz = b2.kw.l1(1, u / a6J * a6C / an.ob), a6G = Math
			.floor(an.ob * aF.measureText(y2, zz)), fi = Math.floor((an.u - u) / 2), fj = Math.floor((an.iH - iH) / 2), a6H.style.font = zz, a6H.style.top = Math.floor((fj + 1.4 * a6D + a6B) / an.ob) + "px", a6H.style.left = Math.floor((fi +
				(u - a6G) / 2) / an.ob) + "px")
	}, this.kn = function() {
		this.tK && (kx.fillStyle = p.lu, kx.fillRect(fi, fj + a6B, u, iH - a6B), kx.fillStyle = p.mp, kx.fillRect(fi, fj, u, a6B), kx.fillStyle = p.lx, kx.lineWidth = bR.tn, kx.strokeStyle = p.lx, kx.strokeRect(fi, fj, u, iH), kx.fillRect(fi,
			fj + a6B, u, bR.tn), kx.font = b2.kw.l1(1, .48 * a6B), b2.kw.textAlign(kx, 1), b2.kw.textBaseline(kx, 1), kx.fillText("You are leaving Territorial.io!", Math.floor(fi + (u - .5 * a6B) / 2), Math.floor(fj + .55 * a6B)), aB.a0B(
			Math.floor(fi + u - .8 * a6B), Math.floor(fj + .25 * a6B), Math.floor(.5 * a6B)), kx.setTransform(1, 0, 0, 1, 0, 0))
	}
}

function dJ() {
	var gap, a4r, fi = [0, 0, 0, 0, 0],
		fj = [0, 0, 0, 0, 0],
		lb = [1, 1, 1, 1, 1],
		du = [!0, !0, !0, !1, !1],
		io = (this.eD = [!0, !0, !0, !1, !1], null);
	this.a6K = function(xb, a6L) {
		io = xb, du = a6L, a4r = [bA.a6M, bA.vu, bA.a6N, bA.a6N, bA.a6O], this.dG()
	}, this.dG = function() {
		if (aR.pz()) {
			var a0, pg = Math.floor((m.n.tk() ? .261 : .195) * an.oX),
				ph = Math.floor(.9 * pg),
				a2X = Math.floor(.17 * ph);
			if (gap = m.n.tk() ? 2 * bR.gap : bR.gap, lb[0] = pg / io[0].width, lb[1] = ph / io[1].width, lb[2] = a2X / io[2].height, lb[3] = a2X / io[3].height, lb[4] = a2X / io[4].height, lb[2] *= 1.7, lb[3] *= 1.07, fi[0] = gap, fi[1] = gap,
				fi[2] = gap, fi[3] = gap, fi[4] = Math.floor(2 * gap + lb[3] * io[3].width), fj[0] = gap, fj[1] = fj[0] + gap + lb[0] * io[0].height, fj[2] = fj[1] + gap + lb[1] * io[1].height, fj[3] = fj[2] + gap + lb[2] * io[2].height, fj[4] =
				fj[3], !du[0])
				for (a0 = 0; a0 < 5; a0++) fj[a0] -= lb[0] * io[0].height + gap;
			if (!du[1])
				for (a0 = 2; a0 < 5; a0++) fj[a0] -= lb[1] * io[1].height + gap
		}
	}, this.tK = function() {
		return !(7 === aP.vz() && m.n.tk())
	}, this.fq = function(gr, gs) {
		if (io && this.tK())
			for (var a0 = du.length - 1; 0 <= a0; a0--)
				if (du[a0] && this.eD[a0] && fi[a0] < gr && fj[a0] < gs && gr < fi[a0] + lb[a0] * io[a0].width && gs < fj[a0] + lb[a0] * io[a0].height) return i.j(9, i.pZ, new a6P("You are leaving Territorial.io.", b2.kw.y1(a4r[a0]))), !0;
		return !1
	}, this.kn = function() {
		if (io && this.tK()) {
			var a0;
			for (kx.imageSmoothingEnabled = !0, a0 = 0; a0 < 5; a0++) du[a0] && this.eD[a0] && (kx.setTransform(lb[a0], 0, 0, lb[a0], fi[a0], fj[a0]), kx.drawImage(io[a0], 0, 0));
			kx.setTransform(1, 0, 0, 1, 0, 0)
		}
	}
}

function c7() {
	var a6Q, a6R, a6S;

	function a6X(a0) {
		var button = aN.oz[a0],
			fi = button.fi,
			fj = button.fj,
			u = button.u,
			iH = button.iH;
		kx.fillStyle = button.a6V, kx.fillRect(fi, fj, u, iH), a0 === a6Q && (kx.fillStyle = a6S, kx.fillRect(fi, fj, u, iH)), kx.lineWidth = bR.tn, kx.strokeStyle = a6R, kx.strokeRect(fi, fj, u, iH),
			function(button) {
				var fi = button.fi,
					fj = button.fj,
					u = button.u,
					iH = button.iH;
				b2.kw.textAlign(kx, 1), b2.kw.textBaseline(kx, 1), kx.font = button.font, kx.fillStyle = a6R, kx.fillText(button.a1G, Math.floor(fi + u / 2), Math.floor(fj + iH / 2 + .1 * button.fontSize))
			}(button)
	}
	this.u = 0, this.iH = 0, this.fj = 0, this.gap = 0, this.dG = function() {
		a6Q = -1, a6R = p.lx, a6S = "rgba(255,255,255,0.16)", this.oz = new Array(7), this.iH = Math.floor((m.n.tk() ? .123 : .093) * an.oX), this.u = Math.floor((m.n.tk() ? 3.96 : 4.2) * this.iH), this.gap = Math.floor(.025 * this.u);
		var a6T = Math.floor(.26 * this.iH),
			a6U = b2.kw.l1(1, a6T);
		this.oz[0] = {
			fi: 0,
			fj: 0,
			u: Math.floor(.6 * this.u - this.gap / 2),
			iH: this.iH,
			a1G: "Multiplayer",
			font: a6U,
			a6V: "rgba(22,88,22,0.8)",
			fontSize: a6T
		}, a6T = Math.floor(.18 * this.iH), a6U = b2.kw.l1(1, a6T), this.oz[1] = {
			fi: 0,
			fj: 0,
			u: this.u - this.oz[0].u - this.gap,
			iH: this.iH,
			a1G: "Single Player",
			font: a6U,
			a6V: "rgba(22,88,88,0.8)",
			fontSize: a6T
		}, this.oz[2] = {
			fi: 0,
			fj: 0,
			u: this.u,
			iH: Math.floor(.3 * this.iH),
			a1G: "",
			font: this.oz[1].font,
			a6V: "rgba(100,0,0,0.8)",
			fontSize: this.oz[1].fontSize
		}, this.oz[3] = {
			fi: 0,
			fj: 0,
			u: this.u,
			iH: this.iH,
			a1G: "Back",
			font: this.oz[0].font,
			a6V: "rgba(0,0,0,0.8)",
			fontSize: this.oz[0].fontSize
		}, this.oz[4] = {
			fi: 0,
			fj: 0,
			u: this.u,
			iH: Math.floor(.3 * this.iH),
			a1G: "The game was updated!",
			font: this.oz[1].font,
			a6V: "rgba(100,0,0,0.8)",
			fontSize: this.oz[1].fontSize
		}, this.oz[5] = {
			fi: 0,
			fj: 0,
			u: this.oz[0].u,
			iH: Math.floor(.8 * this.iH),
			a1G: "Reload",
			font: this.oz[0].font,
			a6V: "rgba(0,100,0,0.8)",
			fontSize: this.oz[0].fontSize
		}, this.oz[6] = {
			fi: 0,
			fj: 0,
			u: this.oz[1].u,
			iH: this.oz[5].iH,
			a1G: "Back",
			font: this.oz[0].font,
			a6V: "rgba(0,0,0,0.8)",
			fontSize: this.oz[0].fontSize
		}, this.a3a()
	}, this.a3a = function() {
		this.fj = Math.floor(.54 * an.iH), this.oz[0].fi = Math.floor(.5 * an.u - .5 * this.u), this.oz[1].fi = this.oz[0].fi + this.oz[0].u + this.gap, this.oz[2].fi = this.oz[3].fi = this.oz[0].fi, this.oz[4].fi = this.oz[5].fi = this.oz[0].fi,
			this.oz[6].fi = this.oz[1].fi, this.oz[0].fj = Math.floor(.54 * an.iH), this.oz[1].fj = this.oz[0].fj, this.oz[2].fj = Math.floor((an.iH - this.oz[2].iH - this.oz[3].iH - this.gap) / 2), this.oz[3].fj = this.oz[2].fj + this.oz[2].iH +
			this.gap, this.oz[4].fj = Math.floor((an.iH - this.oz[4].iH - this.oz[5].iH - this.gap) / 2), this.oz[5].fj = this.oz[6].fj = this.oz[4].fj + this.oz[4].iH + this.gap
	}, this.a6W = function() {
		a6X(0), a6X(1)
	}, this.a6Y = function() {
		a6X(2), a6X(3)
	}, this.a6Z = function() {
		a6X(4), a6X(5), a6X(6)
	}, this.wL = function(fi, fj, kJ) {
		var a0 = -1;
		return 0 === aP.vz() ? a0 = this.wq(fi, fj, 0, 2) : 3 === aP.vz() ? a0 = this.wq(fi, fj, 3, 1) : 5 === aP.vz() && (a0 = this.wq(fi, fj, 5, 2)), a6Q !== a0 && (a6Q = a0, kJ) && (bU.dN = !0), -1 !== a0 && (aI.wk(), !0)
	}, this.wq = function(fi, fj, a6a, size) {
		for (var a0 = a6a; a0 < a6a + size; a0++)
			if (fi >= this.oz[a0].fi && fj >= this.oz[a0].fj && fi <= this.oz[a0].fi + this.oz[a0].u && fj <= this.oz[a0].fj + this.oz[a0].iH) return a0;
		return -1
	}
}

function a6c() {
	function a6j(a4b) {
		return a4b < 0 ? 0 : 255 < a4b ? 255 : Math.floor(a4b)
	}
	this.u = 0, this.iH = 0, this.tK = !1, this.a6d = 0, this.gap = 0, this.a6e = 0, this.a6B = 0, this.a6f = 0, this.a6g = 0, this.a6h = 0, this.colors = null, this.dG = function() {
		this.tK = !0, this.a6d = 0, this.resize()
	}, this.resize = function() {
		this.tK && (an.u < 1.4 * an.iH ? this.u = Math.floor((m.n.tk() ? .94 : .43) * an.u) : (this.iH = Math.floor((m.n.tk() ? .88 : .43) * an.iH), this.u = Math.floor(1.4 * this.iH)), this.iH = this.u / 1.4, this.gap = this.u / 32, this.a6B =
			Math.floor(.25 * this.iH), this.a6f = (this.iH - this.a6B - 3 * this.gap) / 2, this.a6g = this.u - 3 * this.gap - this.a6f, this.a6h = (this.iH - this.a6B - 4 * this.gap) / 3)
	}, this.a6i = function() {
		this.colors = [
			[0, 0, 0],
			[0, 0, 0]
		];
		var oG = bY.dY.data[103].value.split("");
		if (oG.length < 6)
			for (var i7 = 2; 0 <= i7; i7--) this.colors[0][i7] = a6j(256 * Math.random());
		else
			for (var a0 = 2; 0 <= a0; a0--) this.colors[0][a0] = a6j(4 * (10 * parseInt(oG[2 * a0]) + parseInt(oG[2 * a0 + 1])));
		this.a6k()
	}, this.a6l = function() {
		return [bB.eo(this.colors[0][0], 4), bB.eo(this.colors[0][1], 4), bB.eo(this.colors[0][2], 4)]
	}, this.wO = function(jo, jp, deltaY) {
		var ks = (an.u - this.u) / 2;
		jp -= (an.iH - this.iH) / 2 + this.a6B, (jo -= ks) < 0 || jp < 0 || jo >= this.u || jp >= this.iH - this.a6B || (ks = Math.floor(3 * jp / (this.iH - this.a6B)), this.colors[this.a6e][ks] = a6j(this.colors[this.a6e][ks] + (deltaY < 0 ? 1 :
			-1) * Math.max(Math.abs(.05 * deltaY), 1)), bU.dN = !0)
	}, this.fq = function(jo, jp) {
		this.a6d = 0;
		var ks = (an.u - this.u) / 2;
		return jp -= (an.iH - this.iH) / 2, (jo -= ks) < 0 || jp < 0 || jo >= this.u - 1 || jp >= this.iH - 1 || jo > this.u - (.4 * this.a6B + 3 * this.gap) && jp < this.a6B ? (this.tK = !1, !(bU.dN = !0)) : jo < this.gap || jp < this.gap + this
			.a6B || jo >= this.u || jp >= this.iH - this.gap || (jo < this.gap + this.a6f ? (jp < this.gap + this.a6B + this.a6f && 0 !== this.a6e && (this.a6e = 0, bU.dN = !0), !0) : jo < this.gap + this.a6f || (jo -= 2 * this.gap + this.a6f,
				jp < this.gap + this.a6B + this.a6h ? (this.a6d = 1, this.colors[this.a6e][0] = a6j(256 * jo / this.a6g), bU.dN = !0) : jp < 2 * this.gap + this.a6B + this.a6h || (jp < 2 * this.gap + this.a6B + 2 * this.a6h ? (this.a6d = 2,
					this.colors[this.a6e][1] = a6j(256 * jo / this.a6g), bU.dN = !0) : !(jp >= 3 * this.gap + this.a6B + 2 * this.a6h) || (this.a6d = 3, this.colors[this.a6e][2] = a6j(256 * jo / this.a6g), bU.dN = !0))))
	}, this.a6k = function() {
		for (var i7 = 2; 0 <= i7; i7--) this.colors[0][i7] = a6j(this.colors[0][i7])
	}, this.a6m = function() {
		for (var du, oG = "", a0 = 0; a0 < 3; a0++)(du = bB.eo(this.colors[0][a0], 4)) < 10 && (oG += "0"), oG += du.toString();
		return oG
	}, this.wL = function(jo) {
		0 !== this.a6d && (jo -= 2 * this.gap + this.a6f + (an.u - this.u) / 2, this.colors[this.a6e][this.a6d - 1] = a6j(256 * jo / this.a6g), bU.dN = !0)
	}, this.wj = function() {
		0 < this.a6d && (this.a6d = 0, this.a6k(), bY.p8.p9(103, this.a6m()), bU.dN = !0)
	}, this.kn = function() {
		var ks = (an.u - this.u) / 2,
			kt = (an.iH - this.iH) / 2;
		kx.setTransform(1, 0, 0, 1, ks, kt), kx.fillStyle = p.lu, kx.fillRect(0, this.a6B, this.u, this.iH - this.a6B), kx.fillStyle = p.m6, kx.fillRect(0, 0, this.u, this.a6B), kx.fillStyle = p.lx, kx.lineWidth = bR.tn, kx.strokeStyle = p.lx, kx
			.strokeRect(-1, -1, this.u + 2, this.iH + 2), kx.fillRect(0, this.a6B, this.u, bR.tn), kx.font = b2.kw.l1(1, .31 * this.a6B), b2.kw.textBaseline(kx, 1), b2.kw.textAlign(kx, 1), kx.fillText("Choose Your Nation's Color!", Math.floor((
				this.u - this.gap - .4 * this.a6B) / 2), Math.floor(.55 * this.a6B)), this.a6n(0), kx.lineWidth = bR.tn, this.a6o(0), this.a6o(1), this.a6o(2), aB.a0B(Math.floor(ks + this.u - .4 * this.a6B - this.gap), Math.floor(kt + .3 * this
				.a6B), Math.floor(.4 * this.a6B)), kx.setTransform(1, 0, 0, 1, 0, 0)
	}, this.a6n = function(a0) {
		var gR = this.colors[a0][0],
			pv = this.colors[a0][1],
			a0 = this.colors[a0][2];
		kx.fillStyle = "rgb(" + gR + "," + pv + "," + a0 + ")", kx.fillRect(this.gap, this.a6B + this.gap, this.a6f, 2 * this.a6f + this.gap), kx.lineWidth = bR.tn, kx.strokeStyle = p.lx, kx.strokeRect(this.gap, this.a6B + this.gap, this.a6f, 2 *
			this.a6f + this.gap), kx.fillStyle = gR + pv + a0 < 306 && pv < 150 ? p.lx : p.l2, kx.font = b2.kw.l1(1, .32 * this.a6h), b2.kw.textAlign(kx, 1), b2.kw.textBaseline(kx, 1), kx.rotate(-Math.PI / 2), kx.fillText("National Color",
			Math.floor(-1.5 * this.gap - this.a6B - this.a6f), Math.floor(this.gap + .5 * this.a6f)), kx.rotate(Math.PI / 2)
	}, this.a6o = function(a0) {
		kx.fillStyle = "rgb(" + (0 === a0 ? 150 : 2 === a0 ? 30 : 0) + "," + (1 === a0 ? 130 : 2 === a0 ? 30 : 0) + "," + (2 === a0 ? 220 : 0) + ")", kx.fillRect(2 * this.gap + this.a6f, this.a6B + this.gap + a0 * (this.gap + this.a6h), Math
				.floor(this.colors[this.a6e][a0] * this.a6g / 255), this.a6h), kx.strokeStyle = p.lx, kx.strokeRect(2 * this.gap + this.a6f, this.a6B + this.gap + a0 * (this.gap + this.a6h), this.a6g, this.a6h), kx.fillStyle = p.lx, kx.font = b2
			.kw.l1(1, .32 * this.a6h), b2.kw.textBaseline(kx, 1), b2.kw.textAlign(kx, 0), kx.fillText((0 === a0 ? "Red: " : 1 === a0 ? "Green: " : "Blue: ") + this.colors[0][a0].toString(), 3 * this.gap + this.a6f, Math.floor(this.a6B + this
				.gap + a0 * (this.gap + this.a6h) + .53 * this.a6h))
	}
}

function c8() {
	var a6p, a6q, a1Q, a1a, a2P, a6r, a6s, a6t, a6u, zz, fontSize, lI, a6v, a6x, a6w = 0;

	function a70() {
		return aq.kB.a71[(a6v + a6w) % aq.kB.a72]
	}

	function a6y() {
		a6v++, lI = bU.dr, aq.kB.a73(a70(), 4) && (a6x = !0, aq.a74.a75(a70()))
	}

	function a76() {
		0 === a6v ? g.w7(3249) : (a6v === aq.kB.a72 - 1 && (a6v = -1), a6y())
	}

	function a7D(fj, a3H, a7C) {
		var ks = Math.floor((an.u - a1a) / 2) + a6s,
			ku = ks + Math.floor(a7C * (a1a - 2 * a6s));
		kx.lineWidth = a3H, kx.beginPath(), kx.moveTo(ks, fj), kx.lineTo(ku, fj), kx.lineTo(Math.floor(ks - a6s + a7C * a1a), fj + a1Q), kx.lineTo(ks - a6s, fj + a1Q), kx.closePath()
	}
	this.dG = function() {
		aP.setState(6), a6p = 0, a6q = 1, a6t = "rgba(0,220,120,0.4)", a6u = "rgba(0,0,0,0.8)", this.resize(), bU.dN = !0, a6v = 0, a6x = !1, a6y()
	}, this.resize = function() {
		a1a = Math.floor((m.n.tk() ? .5 : .25) * an.oX), a2P = a1a + 12, a1Q = Math.floor(.125 * a1a), a6s = 3 * a1Q, a6r = Math.floor(.225 * a1a), fontSize = Math.floor(.3 * a1Q), zz = b2.kw.l1(0, fontSize)
	}, this.a6z = function(i1) {
		a6w = i1
	}, this.w0 = function(vw) {
		vw === a70() && (a6x = !1, a76())
	}, this.a77 = function(vw) {
		6 !== aP.vz() || a6x || (lI = bU.dr, a6x = !0)
	}, this.fq = function(fi, fj) {
		var ks = Math.floor((an.u - a2P) / 2),
			kt = Math.floor(.5 * (an.iH - bR.gap - a1Q - a6r)) + a1Q + bR.gap;
		return ks < fi && fi < ks + a2P && kt < fj && fj < kt + a6r && (this.x4(), aN.wL(fi, fj, !1), !0)
	}, this.x4 = function() {
		aq.kB.wA(3260), i.kB.w9()
	}, this.hd = function() {
		6 === aP.vz() && (a6x ? bU.dr > lI + 12e3 && g.w7(3250) : bU.dr > lI + 12e3 && a76(), 100 < (a6p += .07 * a6q * (a6p < 16 ? 5 + a6p : 84 < a6p ? 105 - a6p : 17)) ? (a6p = 100, a6q = -1) : a6p < 0 && (a6p = 0, a6q = 1), a6t = "rgba(0," +
			Math.floor(190 - 1.9 * a6p) + "," + Math.floor(120 - 1.2 * a6p) + "," + (.4 + .004 * a6p) + ")", a6u = "rgba(0," + Math.floor(1.9 * a6p) + "," + Math.floor(1.2 * a6p) + "," + (.8 - .004 * a6p) + ")", bU.dN = !0)
	}, this.kn = function() {
		var fi = Math.floor((an.u - a2P) / 2),
			fj = Math.floor(.5 * (an.iH - bR.gap - a1Q - a6r));
		! function(title, fj, a3H, a7C) {
			kx.fillStyle = a6u, a7D(fj, a3H, 1), kx.fill(), kx.fillStyle = a6t, a7D(fj, a3H, a7C), kx.fill(), kx.strokeStyle = p.lx, a7D(fj, a3H, 1), kx.stroke(),
				function(a7F, fj) {
					b2.kw.textAlign(kx, 1), b2.kw.textBaseline(kx, 1), kx.font = zz, kx.fillStyle = p.lx, kx.fillText(a7F, Math.floor(.5 * an.u), Math.floor(fj + .58 * a1Q))
				}(title, fj)
		}(L(97), fj, 3, a6p / 100),
		function(fi, fj, u, iH, a1G) {
			kx.fillStyle = p.ls, kx.fillRect(fi, fj, u, iH), kx.lineWidth = 3, kx.strokeStyle = p.lx, kx.strokeRect(fi, fj, u, iH);
			var f0 = Math.floor(.3 * iH);
			b2.kw.textAlign(kx, 1), b2.kw.textBaseline(kx, 1), kx.font = b2.kw.l1(0, f0), kx.fillStyle = p.lx, kx.fillText(a1G, Math.floor(fi + u / 2), Math.floor(fj + iH / 2 + .1 * f0))
		}(fi, fj + a1Q + bR.gap, a2P, a6r, L(98))
	}
}

function c9() {
	var dq = 0;
	this.dG = function() {
		aN.dG(), dq = 0
	}, this.setState = function(a7G) {
		dq = a7G
	}, this.vz = function() {
		return dq
	}, this.a7H = function() {
		this.setState(8), aj.wB(), i.r4()
	}, this.wv = function(d) {
		if (!bI.rs) return !1;
		if (!(bU.dr < 400)) {
			if ("Enter" === d.key || "Escape" === d.key) {
				if (this.a7I()) return !0;
				if ("Enter" === d.key) {
					if (0 === dq) return !0;
					if (7 === dq) return !0
				}
			}
			return !1
		}
	}, this.a7J = function() {
		bO.resize()
	}, this.a7I = function() {
		return !!bO.pu()
	}, this.fq = function(fi, fj) {
		!bI.rs || bO.fq(fi, fj) || 6 === dq && aO.fq(fi, fj) || 2 === dq && aQ.fq(fi, fj) || bN.fq(fi, fj) || (aI.fq(fi, fj), 0 !== dq && 7 === dq && aj.fq(fi, fj))
	}, this.wL = function(fi, fj) {
		if (!aI.a3T) {
			if (2 === dq && aQ.wL(fi, fj)) return void aI.wk();
			if (aN.wL(fi, fj, !0)) return
		}
		aI.wL(fi, fj)
	}, this.click = function(fi, fj) {
		aI.wl()
	}, this.wO = function(fi, fj, deltaY) {}, this.a7K = function() {
		aN.a3a(), 0 !== dq && 7 === dq && aj.resize(), bU.dN = !0
	}, this.kn = function() {
		8 !== dq && 10 !== dq && (kx.imageSmoothingEnabled = !0, this.sw(), 0 !== dq && (aI.kn(), aD.kn(), this.a7L(), bN.kn()), 0 !== dq && (2 === dq ? aQ.kn() : 6 === dq ? aO.kn() : 7 === dq && aj.kn()), bO.kn(), i.kn())
	}, this.sw = function() {
		var a7N, a7M;
		if (makeMainMenuTransparent) kx.clearRect(0, 0, an.u, an.iH);
		else bI.rs ? (a7M = an.u / bI.eV, a7N = an.iH / bI.eW, kx.setTransform(a7M = a7N < a7M ? a7M : a7N, 0, 0, a7M, Math.floor((an.u - a7M * bI.eV) / 2), Math.floor((an.iH - a7M * bI.eW) / 2)), kx.drawImage(bI.ru, 0, 0), kx.setTransform(1, 0,
			0, 1, 0, 0), kx.fillStyle = p.ls) : kx.fillStyle = p.l2, kx.fillRect(0, 0, an.u, an.iH)
	}, this.a7L = function() {
		var fj = Math.floor(.3 * an.iH),
			gO = aR.a7O("territorial.io"),
			gN = (gN = 1.75 * an.iH / gO.width) * gO.width < .98 * an.u ? .98 * an.u / gO.width : gN,
			fi = (kx.globalAlpha = .15, kx.imageSmoothingEnabled = !1, Math.floor(.5 * (an.u - gN * gO.width))),
			fi = Math.floor(fi / gN),
			fj = Math.floor(fj - .5 * gO.height * gN),
			fj = Math.floor(fj / gN);
		kx.setTransform(gN, 0, 0, gN, fi, fj), kx.drawImage(gO, fi, fj), kx.setTransform(1, 0, 0, 1, 0, 0), kx.globalAlpha = 1, kx.imageSmoothingEnabled = !0
	}
}

function ca() {
	var a1, a7R, a7S, a7T;
	this.a7P = 0, this.a7Q = 0, this.dG = function() {
		var gO, lb;
		7 === aP.vz() && (a1 = b7.a1, a7R = 0, a7S = bU.dr + 4500, a7T = aq.a0u.a7U() ? 2 : 0, aP.setState(10), kx.imageSmoothingEnabled = !0, aP.sw(), gO = aR.a7O("loading"), lb = (m.n.tk() ? .396 : .25) * an.oX / gO.width, kx.setTransform(lb,
			0, 0, lb, Math.floor((an.u - lb * gO.width) / 2), Math.floor((an.iH - lb * gO.height) / 2)), kx.imageSmoothingEnabled = !1, kx.drawImage(gO, 0, 0), kx.setTransform(1, 0, 0, 1, 0, 0))
	}, this.kH = function() {
		0 < a7T && bU.dr > a7S && (a7T--, a7S += 4500, 0 === bU.a7V) && 0 === bU.et() && (0 === a7T && aq.kB.w2 < aq.kB.a7W && (aq.kB.w2 += aq.kB.a7X), aq.kB.a73(aq.kB.w2, 5))
	}, this.a7Y = function() {
		var f7, a0;
		return 10 === aP.vz() && (f7 = b7.a1, a0 = b7.kh, aq.a0u.a7Z(a1), a1 = null, b7.dG(f7), b7.kh = a0, !0)
	}, this.a7a = function() {
		10 === aP.vz() && 2 <= ++a7R && (aq.a0u.a7Z(a1), a1 = null)
	}
}

function cX() {
	var a7c, a7d, a7e, a7f, a7g, a7h, a7i, oS, a7k, a7m, a7n, a7o, a7p, a7r, a7s, a7t, a7u, a7v, a7j = 48,
		a7q = [0, 0, 0, 0];

	function a7z(a0, nD) {
		a0 = a7i[a0].getContext("2d", {
			alpha: !0
		});
		a0.clearRect(0, 0, a7j, a7j), aa.rx.to(nD, a0, 0, 0, a7j)
	}

	function a7y(a0, xb) {
		var a0 = a7i[a0].getContext("2d", {
				alpha: !0
			}),
			zoom = (a0.clearRect(0, 0, a7j, a7j), a7j / xb.width),
			ds = a7j / xb.height,
			zoom = ds < zoom ? ds : zoom;
		a0.imageSmoothingEnabled = !0, a0.setTransform(zoom, 0, 0, zoom, Math.floor((a7j - zoom * xb.width) / 2), Math.floor((a7j - zoom * xb.height) / 2)), a0.drawImage(xb, 0, 0), a0.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a83(io, gR, a86, gP) {
		gP.beginPath(), gP.moveTo(io, io), gP.lineTo(io + Math.cos(a86) * gR, io + Math.cos(a86 + 1.5 * Math.PI) * gR), gP.stroke()
	}

	function a8M() {
		if (7 === aP.vz()) {
			for (var gb, xb, gP, zoom, ds, i1 = -1, a0 = oS.length - 1; 0 <= a0; a0--)
				if (null === oS[a0].gO) {
					i1 = a0;
					break
				} - 1 !== i1 && (null !== (gb = a8A(oS[i1].a8E, oS[i1].a8F)) ? oS[i1].gO = gb : (gb = {
					eV: bI.eV,
					eW: bI.eW,
					ru: bI.ru,
					rq: bI.rq,
					rr: bI.rr,
					rv: bI.rv,
					sF: bI.sF,
					a8B: bI.a8B
				}, bI.w(oS[i1].a8E, oS[i1].a8F), bI.rt.a8N(), (xb = document.createElement("canvas")).width = 128, xb.height = 128, gP = xb.getContext("2d", {
					alpha: !1
				}), (zoom = 128 / bI.eV) < (ds = 128 / bI.eW) && (zoom = ds), gP.imageSmoothingEnabled = !0, gP.setTransform(zoom, 0, 0, zoom, (128 - zoom * bI.eV) / 2, (128 - zoom * bI.eW) / 2), gP.drawImage(bI.ru, 0, 0), bI.eV = gb.eV, bI
				.eW = gb.eW, bI.ru = gb.ru, bI.rq = gb.rq, bI.rr = gb.rr, bI.rv = gb.rv, bI.sF = gb.sF, bI.a8B = gb.a8B, oS[i1].gO = xb), bU.dN = !0)
		}
	}

	function a8A(a8E, a8F) {
		for (var a0 = oS.length - 1; 0 <= a0; a0--)
			if (null !== oS[a0].gO && oS[a0].a8E === a8E && oS[a0].a8F === a8F) return oS[a0].gO;
		return null
	}
	this.dH = function() {
		a7p = [L(99), L(100), L(101), L(102)]
	}, this.dG = function() {
		var a0;
		for (a7v = 0, a7m = -1, aP.setState(7), oS = [], this.resize(), a7i = new Array(13), a0 = a7i.length; 0 <= a0; a0--) a7i[a0] = document.createElement("canvas"), a7i[a0].width = a7j, a7i[a0].height = a7j;
		for (a0 = 0; a0 < 7; a0++) ! function(jO) {
			var a81, gP = a7i[jO - 2].getContext("2d", {
					alpha: !0
				}),
				a80 = 1.5 * Math.PI,
				io = Math.floor(.5 * a7j),
				gR = Math.floor(.48 * a7j);
			gP.lineWidth = 2, gP.strokeStyle = p.lx, gP.clearRect(0, 0, a7j, a7j);
			for (var a0 = 0; a0 < jO; a0++) a81 = a80 + 2 * Math.PI / jO,
				function(a0, io, gR, a80, a81, gP) {
					gP.fillStyle = bV.a85[a0], gP.beginPath(), gP.arc(io, io, gR, a80, a81), gP.lineTo(io, io), gP.fill()
				}(a0 + 1, io, gR, a80, a81, gP), 0 !== a0 && a83(io, gR, a80, gP), a80 = a81;
			a83(io, gR, 1.5 * Math.PI, gP),
				function(io, gR, gP) {
					gP.beginPath(), gP.arc(io, io, gR, 0, 2 * Math.PI), gP.stroke()
				}(io, gR, gP)
		}(a0 + 2);
		a7y(7, aR.get(4)), a7z(8, aa.tH.tc + aa.tH.tt), a7z(9, aa.tH.tc + aa.tH.tr), a7z(10, 1024 - aa.tH.tZ), a7y(11, aR.get(19)), a7y(12, aR.get(20)), bU.dN = !0
	}, this.x3 = function() {
		this.wB(), aq.kB.wA(3240), aP.setState(0), i.j(5, 5)
	}, this.wB = function() {
		oS = [], a7i = []
	}, this.a1O = function() {
		return a7o
	}, this.resize = function() {
		var a87, ri, a2f, a88;
		for (a7e = [0, 0], a7k = [0, 0, 0, 0], a7u = m.n.tk() ? (a7n = Math.floor(.8 * .4 * an.oX), a7o = Math.floor(.56 * a7n), a7k[0] = bR.gap, an.u < an.iH ? (a7k[1] = a7o + 2 * bR.gap, a7k[2] = an.u - 3 * a7k[0], a7k[3] = an.iH - 3 * bR.gap -
				a7o, a7s = Math.floor(.95 * a7o), a7t = Math.floor((an.u - a7n - bR.gap) / 2), Math.floor(bR.gap + a7o / 2)) : (a7k[1] = bR.gap, a7k[2] = an.u - 3 * bR.gap - a7n, a7k[3] = an.iH - 2 * bR.gap, a7s = Math.floor(.8 * a7n), a7k[
				3] - a7o < a7n && (a7s = Math.floor(.8 * (a7k[3] - a7o)), a7s = a0c(a7o, a7s)), a7t = Math.floor(an.u - a7n / 2 - bR.gap), a0c(a7u = Math.floor(bR.gap + a7o + (a7k[3] - a7o) / 2), Math.floor(a7o + 2 * bR.gap + a7s / 2)))) : (a7n =
				Math.floor(.2016 * an.oX), a7o = Math.floor(.56 * a7n), a7k[2] = Math.floor(.5 * an.u), a7k[3] = Math.floor(.5 * an.iH), a7k[1] = Math.floor(.45 * (an.iH - a7k[3])), a7k[0] = Math.floor((an.u - a7k[2]) / 2), a7s = Math.floor(.75 *
					a7o), a7t = Math.floor(an.u / 2), Math.floor(a7k[1] + a7k[3] + (an.iH - a7k[3] - a7k[1]) / 2)), a7r = b2.kw.l1(1, .65 * a7o / 4), a87 = ri = 1; a87 * ri < oS.length;) a7k[3] / (ri + 1) < a7k[2] / (a87 + 1) ? a87++ : ri++;
		a2f = (a7k[2] - (a87 - 1) * bR.gap) / a87, a88 = (a7k[3] - (ri - 1) * bR.gap) / ri, a7c = a2f < a88 ? a2f : a88, a7d = Math.floor(a7c), a7h = b2.kw.l1(1, .5 * a7c / 5), a7e[0] = a87, a7e[1] = ri, a7f = a7k[0] + Math.floor((a7k[2] - a7e[
			0] * a7c - (a7e[0] - 1) * bR.gap) / 2), a7g = a7k[1] + Math.floor((a7k[3] - a7e[1] * a7c - (a7e[1] - 1) * bR.gap) / 2)
	}, this.p9 = function(a89, f7) {
		var a0, ds, gO, f0 = oS.length;
		for (a7q = a89, a0 = 0; a0 < f7.length; a0++) gO = a8A(f7[a0].sF, f7[a0].a8B), oS.push({
			a8C: f7[a0].id,
			z4: f7[a0].z4,
			z5: f7[a0].a8D,
			a8E: f7[a0].sF,
			a8F: f7[a0].a8B,
			joined: f7[a0].a8G,
			a1L: f7[a0].a7C,
			a8H: f7[a0].a8H,
			gO: gO,
			a8I: f7[a0].a8I,
			a8J: f7[a0].a8J,
			a8K: f7[a0].a8K
		});
		for (a0 = f0 - 1; 0 <= a0; a0--) oS.shift();
		if (-1 !== a7m)
			for (ds = a7m, a7m = -1, a0 = oS.length - 1; 0 <= a0; a0--)
				if (oS[a0].a8C === ds) {
					a7m = ds;
					break
				}(oS.length > a7v || oS.length < a7v) && (a7v = oS.length, this.resize()), this.a8L(), bU.dN = !0
	}, this.a8L = function() {
		for (var a0 = oS.length - 1; 0 <= a0; a0--) null === oS[a0].gO && setTimeout(a8M, 0)
	}, this.fq = function(fi, fj) {
		return 4 * ((fi - a7t) * (fi - a7t) + (fj - a7u) * (fj - a7u)) <= a7s * a7s ? (this.x3(), aN.wL(fi, fj, !1), !0) : function(fi, fj) {
			var i1, i7, ks, kt;
			if (0 !== oS.length) {
				var a0 = 0;
				for (kt = a7g, i7 = 0; i7 < a7e[1]; i7++) {
					for (ks = a7f, i1 = 0; i1 < a7e[0]; i1++) {
						if (ks < fi && fi < ks + a7c && kt < fj && fj < kt + a7c) return aq.a74.a8P(oS[a0].a8C), a7m = oS[a0].a8C !== a7m ? oS[a0].a8C : -1, bU.dN = !0;
						if (++a0 >= oS.length) return !1;
						ks += a7c + bR.gap
					}
					kt += a7c + bR.gap
				}
			}
			return !1
		}(fi, fj)
	}, this.kn = function() {
		var i1, i7, fi, gR, zoom, a0 = 0,
			fj = a7g;
		if (kx.imageSmoothingEnabled = !0, kx.lineWidth = 3, gR = Math.floor(.5 * a7s), kx.fillStyle = p.ls, kx.beginPath(), kx.arc(a7t, a7u, gR, 0, 2 * Math.PI), kx.fill(), kx.strokeStyle = p.lx, kx.beginPath(), kx.arc(a7t, a7u, gR, 0, 2 * Math
				.PI), kx.stroke(), gR = aR.get(0).height, zoom = .6 * a7s / gR, kx.setTransform(zoom, 0, 0, zoom, Math.floor(a7t - .56 * zoom * aR.get(0).width), Math.floor(a7u - .5 * zoom * gR)), kx.drawImage(aR.get(0), 0, 0), kx.setTransform(1,
				0, 0, 1, 0, 0), function() {
				kx.fillStyle = p.ls, kx.fillRect(an.u - a7n - bR.gap, bR.gap, a7n, a7o), 0 <= a7m ? (kx.fillStyle = p.mF, kx.fillRect(an.u - a7n - bR.gap, bR.gap, a7n, Math.floor(.25 * a7o))) : (kx.fillStyle = p.mg, kx.fillRect(an.u - a7n - bR
					.gap, bR.gap + Math.floor(.25 * a7o), a7n, Math.floor(.25 * a7o)));
				kx.strokeStyle = p.lx, kx.strokeRect(an.u - a7n - bR.gap, bR.gap, a7n, a7o), kx.fillStyle = p.lx, kx.font = a7r, b2.kw.textBaseline(kx, 1);
				for (var fj, a8T = Math.floor(.04 * a7n), a0E = Math.floor(.08 * a7o), a0 = 3; 0 <= a0; a0--) fj = Math.floor(bR.gap + (a0 + 1) * (a7o + 2 * a0E) / 5 - a0E), b2.kw.textAlign(kx, 0), kx.fillText(a7p[a0], an.u - a7n - bR.gap + a8T,
					fj), b2.kw.textAlign(kx, 2), kx.fillText(b2.l4.l5(a7q[a0]), an.u - bR.gap - a8T, fj)
			}(), 0 !== oS.length)
			for (i7 = 0; i7 < a7e[1]; i7++) {
				for (fi = a7f, i1 = 0; i1 < a7e[0]; i1++) {
					if (! function(a0, fi, fj) {
							var zoom, i7, a8U, a8W, a8X;
							null === oS[a0].gO ? (kx.fillStyle = p.ls, kx.fillRect(fi, fj, a7d, a7d)) : (zoom = a7d / 128, kx.setTransform(zoom, 0, 0, zoom, fi, fj), kx.drawImage(oS[a0].gO, 0, 0), kx.setTransform(1, 0, 0, 1, 0, 0));
							a7m === oS[a0].a8C ? (function(fi, fj) {
								var pg = Math.floor(.2 * a7d),
									ph = Math.floor(.3 * pg);
								kx.fillStyle = p.mH, kx.fillRect(fi + a7d - pg, fj, pg, pg), kx.fillStyle = p.l2, kx.fillRect(fi + a7d - pg, fj, 2, pg), kx.fillRect(fi + a7d - pg, fj + pg - 2, pg, 2), aB.a0B(fi + a7d - pg + ph, fj + ph,
									pg - 2 * ph), kx.setTransform(1, 0, 0, 1, 0, 0)
							}(fi, fj), kx.lineWidth = 3, kx.fillStyle = p.mH) : kx.fillStyle = p.lq;
							a8W = Math.floor(a7c / 4), kx.fillRect(fi, fj, a8W, a8W), a8X = Math.floor(fj + .8 * a7c), kx.fillRect(fi, a8X, a7d, Math.floor(a7c / 5)),
								function(a0, fi, fj) {
									var zoom;
									oS[a0].z5 && (a0 = aR.get(4), zoom = .5 * a7c / a0.width, kx.setTransform(zoom, 0, 0, zoom, Math.floor(fi + (a7c - zoom * a0.width) / 2), Math.floor(fj + (a7c - zoom * a0.height) / 2)), kx.globalAlpha = .6, kx
										.drawImage(a0, 0, 0), kx.globalAlpha = 1, kx.setTransform(1, 0, 0, 1, 0, 0))
								}(a0, fi, fj);
							var a8Z = new Array(oS[a0].a8I);
							if (oS[a0].a8I) {
								for (i7 = a8U = 0; i7 < oS[a0].a8I; i7++) oS[a0].a8J[i7] = b2.t0.xn(oS[a0].a8J[i7], a7h, .4 * a7c), a8Z[i7] = ("" === oS[a0].a8J[i7] ? L(103) : "[" + oS[a0].a8J[i7] + "]: ") + oS[a0].a8K[i7];
								for (i7 = 0; i7 < oS[a0].a8I; i7++) a8U = Math.max(a8U, aF.measureText(a8Z[i7], a7h));
								a8U += .05 * a7c, i7 = 5 === oS[a0].a8I, a8W = i7 ? fj + a8W : Math.max(fj + .8 * a7c - .11 * oS[a0].a8I * a7c, fj + a8W), a8X = i7 ? a8X : Math.min(a8W + .11 * oS[a0].a8I * a7c + .05 * a7c, a8X), kx.fillRect(fi,
									a8W, a8U, a8X - a8W)
							}
							for (kx.font = a7h, b2.kw.textBaseline(kx, 1), b2.kw.textAlign(kx, 0), kx.fillStyle = p.mb, kx.fillText(oS[a0].joined.toString(), Math.floor(fi + .22 * a7c), Math.floor(fj + .9 * a7c)), kx.fillStyle = p.lx, i7 =
								0; i7 < oS[a0].a8I; i7++) kx.fillText(a8Z[oS[a0].a8I - i7 - 1], Math.floor(fi + .03 * a7c), Math.floor(fj + .77 * a7c - .11 * i7 * a7c));
							b2.kw.textAlign(kx, 2), kx.fillStyle = p.mN, kx.fillText(oS[a0].a1L.toString(), Math.floor(fi + .81 * a7c), Math.floor(fj + .9 * a7c)), kx.strokeStyle = a7m === oS[a0].a8C ? p.mG : p.lz, kx.strokeRect(fi, fj, a7d,
								a7d), a8X = Math.floor(.16 * a7c), zoom = a8X / a7j, kx.setTransform(zoom, 0, 0, zoom, Math.floor(fi + .33 * a8X), Math.floor(fj + .33 * a8X)), a7i.length > oS[a0].z4 && kx.drawImage(a7i[oS[a0].z4], 0, 0);
							kx.setTransform(zoom, 0, 0, zoom, Math.floor(fi + .15 * a8X), Math.floor(fj + a7c - 1.08 * a8X)), kx.drawImage(a7i[11], 0, 0), kx.setTransform(zoom, 0, 0, zoom, Math.floor(fi + a7c - 1.05 * a8X), Math.floor(fj + a7c -
								1.15 * a8X)), kx.drawImage(a7i[12], 0, 0), kx.setTransform(1, 0, 0, 1, 0, 0)
						}(a0, Math.floor(fi), Math.floor(fj)), ++a0 >= oS.length) return;
					fi += a7c + bR.gap
				}
				fj += a7c + bR.gap
			}
	}
}

function cA() {
	var a8b = [0, 0, 0, 0];

	function a8q(fi, fj, gI, a8t) {
		kx.fillStyle = p.lx;
		var pg = a0c(2, Math.floor((a8t ? .5 : .35) * gI)),
			a2X = (pg -= pg % 2, a0c(2, Math.floor(.1 * gI))),
			gI = (a2X -= a2X % 2, Math.floor((gI - pg) / 2)),
			ku = Math.floor(gI + (pg - a2X) / 2);
		kx.fillRect(fi + gI, fj + ku, pg, a2X), a8t && kx.fillRect(fi + ku, fj + gI, a2X, pg)
	}

	function a7B(fi, fj, u, iH, a4b, xJ, a1G, hv, jO) {
		kx.fillStyle = a4b, kx.fillRect(fi, fj, u, iH), 0 <= hv && function(fi, fj, u, iH, hv) {
			kx.fillStyle = "rgba(" + 22 * hv + "," + (110 - 22 * hv) + ",0,0.75)", kx.fillRect(fi, fj, (1 + hv) * u / 6, iH)
		}(fi, fj, u, iH, hv), 0 < jO && function(fi, fj, u, iH, jO) {
			kx.fillStyle = "rgba(255,255,255,0.3)", kx.fillRect(fi, fj, jO * u / a2.f4, iH)
		}(fi, fj, u, iH, jO), kx.strokeStyle = p.lx, kx.strokeRect(fi, fj, u, iH), 0 !== xJ && (kx.fillStyle = p.lx, kx.font = b2.kw.l1(1, xJ * iH), kx.fillText(a1G, Math.floor(fi + u / 2), Math.floor(fj + .52 * iH)))
	}
	this.jI = [{
		f9: 0,
		jO: 512
	}], this.dG = function() {
		ak.tK = !1, aP.setState(2), this.resize(), bU.dN = !0
	}, this.wB = function() {}, this.resize = function() {
		a8b[2] = Math.floor((m.n.tk() ? .49 : .4) * an.oX), a8b[1] = Math.floor((an.iH - a8b[2] / 6 - this.jI.length * (bR.gap + a8b[2] / 10)) / 2), a8b[0] = Math.floor((an.u - a8b[2]) / 2), ak.tK && ak.resize()
	}, this.a8c = function(z4) {
		var a0;
		if (6 < z4) this.jI = [{
			f9: 0,
			jO: 512
		}];
		else {
			for (this.jI = [], a0 = 0; a0 < z4 + 2; a0++) this.jI.push({
				f9: 0,
				jO: 0
			});
			this.a8d()
		}
		aq.kB.w2 = 0
	}, this.a8e = function(a8f, a8g) {
		for (var f0 = a8f.length, a0 = 0; a0 < f0; a0++) this.jI[a0].f9 = a8f[a0], this.jI[a0].jO = a8g[a0]
	}, this.a8h = function(pv) {
		var a0, f0;
		if (1 === pv.t7.length)
			for (f0 = this.jI.length, pv.a8f = new Array(f0), pv.a8g = new Array(f0), a0 = 0; a0 < f0; a0++) pv.a8f[a0] = this.jI[a0].f9, pv.a8g[a0] = this.jI[a0].jO
	}, this.x5 = function() {
		bU.dN = !0, ak.tK ? ak.tK = !1 : (this.wB(), aP.setState(0), i.j(5, 5))
	}, this.z8 = function() {
		var a0, jO;
		if (ay.jA) return ay.jB.a8i;
		for (jO = 0, a0 = this.jI.length - 1; 0 <= a0; a0--) jO += this.jI[a0].jO;
		return jO
	}, this.wL = function(fi, fj) {
		return !(!ak.tK || !ak.wL(fi, fj)) || -1 !== this.wq(fi, fj)
	}, this.a8j = function() {
		var i1;
		aq.kB.w2 = 0, aP.a7H(), ay.jA ? ay.a8k() : (i1 = (i1 = this.jI.length - 2) < 0 ? 7 : i1, a2.z1(Math.floor(16384 * Math.random()), 0, [{
			name: bY.dY.data[122].value,
			a8l: b2.color.xg(bY.kB.r3()),
			a8m: 0
		}], i1, !1, !1))
	}, this.fq = function(fi, fj) {
		if (ak.tK && !ay.jA) return ak.fq(fi, fj);
		var a0, i1, max, pg, fj = this.wq(fi, fj);
		if (-1 === fj) return !1;
		if (0 === fj) this.x5();
		else if (1 === fj) ay.jA ? (ay.wk(), bU.dN = !0) : ak.show();
		else if (100 === fj) ax.a8n();
		else if (2 === fj) this.wB(), this.a8j();
		else {
			if (ay.jA) return !1;
			if (27 === fj) this.jI.length < 8 && (this.jI.push({
				f9: 0,
				jO: a2.f4
			}), this.a8d(), this.resize(), bU.dN = !0);
			else if (a0 = Math.floor((fj - 3) / 3), fj % 3 == 0) 1 < this.jI.length && (this.jI.splice(a0, 1), this.resize(), bU.dN = !0);
			else if (pg = (a8b[2] - a8b[2] / 10 - 2 * bR.gap) / 2, fj % 3 == 1) 0 === a0 && 1 === this.jI[a0].jO || (fi < a8b[0] + a8b[2] - 1.5 * pg - bR.gap ? this.jI[a0].f9-- : this.jI[a0].f9++, this.jI[a0].f9 < 0 ? this.jI[a0].f9 = 5 : 5 <
				this.jI[a0].f9 && (this.jI[a0].f9 = 0), bU.dN = !0);
			else {
				for (bU.dN = !0, fj = (fi - (a8b[0] + a8b[2] - pg)) / pg - .5, fj *= fj < 0 ? -fj : fj, fj = 0 === (fj = Math.floor(fj * a2.f4)) ? 1 : fj, max = a2.f4, i1 = this.jI.length - 1; 0 <= i1; i1--) a0 !== i1 && (max -= this.jI[i1].jO);
				if (fj < 0) {
					if (1 === this.jI[a0].jO) return this.jI[a0].jO = max, !0
				} else if (this.jI[a0].jO === max) return this.jI[a0].jO = 1, !0;
				this.jI[a0].jO += fj, this.jI[a0].jO < 1 ? this.jI[a0].jO = 1 : this.jI[a0].jO > max && (this.jI[a0].jO = max)
			}
		}
		return !0
	}, this.a8d = function() {
		for (var jO = Math.floor(a2.f4 / this.jI.length), a8o = a2.f4 % this.jI.length, a0 = this.jI.length - 1; 0 <= a0; a0--) this.jI[a0].jO = jO;
		this.jI[0].jO += a8o
	}, this.wq = function(fi, fj) {
		var pg = (a8b[2] - 3 * bR.gap) / 4,
			a2X = a8b[2] / 6;
		if (fi < a8b[0] || fj < a8b[1] || a8b[0] + a8b[2] <= fi) return -1;
		if (fj < a8b[1] + a2X) return fi < a8b[0] + pg ? 0 : fi < a8b[0] + pg + bR.gap ? -1 : fi < a8b[0] + 2 * pg + bR.gap ? 100 : fi < a8b[0] + 2 * (pg + bR.gap) ? -1 : fi < a8b[0] + 3 * pg + 2 * bR.gap ? 1 : fi < a8b[0] + 3 * (pg + bR.gap) ? -
			1 : 2;
		for (var kt, a8p = a8b[2] / 10, pg = (a8b[2] - a8p - 2 * bR.gap) / 2, a0 = 0; a0 < this.jI.length; a0++) {
			if (fj < (kt = a8b[1] + a2X + bR.gap + a0 * (a8p + bR.gap))) return -1;
			if (!(kt + a8p < fj)) return fi < a8b[0] + a8p ? 3 + 3 * a0 : fi < a8b[0] + a8p + bR.gap ? -1 : fi < a8b[0] + a8b[2] - pg - bR.gap ? 4 + 3 * a0 : fi < a8b[0] + a8b[2] - pg ? -1 : 5 + 3 * a0
		}
		return !(this.jI.length < 8) || fj < (kt = a8b[1] + a2X + bR.gap + this.jI.length * (a8p + bR.gap)) || kt + a8p < fj || a8b[0] + a8p < fi ? -1 : 27
	}, this.kn = function() {
		kx.lineWidth = bR.tn, b2.kw.textAlign(kx, 1), b2.kw.textBaseline(kx, 1);
		var pg = (a8b[2] - 3 * bR.gap) / 4,
			a2X = a8b[2] / 6;
		if (a7B(a8b[0], a8b[1], pg, a2X, "rgba(128,0,0,0.75)", .25, L(98), -1, -1), a7B(a8b[0] + pg + bR.gap, a8b[1], pg, a2X, "rgba(128,0,128,0.75)", .16, L(104), -1, -1), a7B(a8b[0] + 2 * (pg + bR.gap), a8b[1], pg, a2X, "rgba(" + (ay.jA ? 128 :
				0) + ",128,128,0.75)", .25, ay.jA ? L(105) : L(106), -1, -1), a7B(a8b[0] + a8b[2] - pg, a8b[1], pg, a2X, "rgba(0,128,0,0.75)", .25, L(107), -1, -1), !ay.jA) {
			for (var kt, a8p = a8b[2] / 10, pg = (a8b[2] - a8p - 2 * bR.gap) / 2, a0 = 0; a0 < this.jI.length; a0++) kt = a8b[1] + a2X + bR.gap + a0 * (a8p + bR.gap), a7B(a8b[0], kt, a8p, a8p, 1 < this.jI.length ? "rgba(128,0,0,0.75)" :
				"rgba(90,90,90,0.75)", 0, null, -1), 1 < this.jI.length && a8q(a8b[0], kt, a8p, !1), a7B(a8b[0] + a8p + bR.gap, kt, pg, a8p, p.lu, .4, this.a8r(a0), this.jI[a0].f9, -1), a7B(a8b[0] + a8b[2] - pg, kt, pg, a8p, p.lu, .4, this
				.a8s(a0), -1, this.jI[a0].jO);
			this.jI.length < 8 && (kt = a8b[1] + a2X + bR.gap + this.jI.length * (a8p + bR.gap), a7B(a8b[0], kt, a8p, a8p, "rgba(0,128,20,0.75)", 0, null, -1, -1), a8q(a8b[0], kt, a8p, !0)), ak.tK && ak.kn()
		}
	}, this.a8r = function(a0) {
		return 0 === a0 && 1 === this.jI[a0].jO ? L(108) : a3.j6[this.jI[a0].f9]
	}, this.a8s = function(a0) {
		return 1 === this.jI[a0].jO ? L(109) : L(110, [this.jI[a0].jO])
	}
}

function cB() {
	var a8w, gO, v2, a8x;

	function a93(kh, name, a94, oG) {
		v2[kh] = name, gO[kh] = new Image, gO[kh].onload = function() {
			! function(kh, a94) {
				var yR, yS = null;
				7 === a94 ? yR = b2.xB.yU : 8 === a94 ? (yR = b2.xB.yX, yS = .1) : 3 === a94 ? (yR = b2.xB.yV, yS = .06) : 5 === a94 ? yR = b2.xB.yY : 6 === a94 ? yR = b2.xB.yT : 4 === a94 && (yR = b2.xB.yZ);
				gO[kh] = b2.xB.yQ(gO[kh], yR, yS)
			}(kh, a94), a96()
		}, gO[kh].onerror = function(d) {
			console.error("Error loading image at index", kh, "Error:", d), a96()
		}, gO[kh].src = "data:image/png;base64," + oG
	}

	function a96() {
		a8w--, a90()
	}

	function a90() {
		0 === a8w && (a8w = -1, a92(), bU.dN = !0, gO[7] = a8x, gO[8] = a8x, gO[9] = a8x, gO[10] = a8x, 5 === i.pZ) && i.a98().a99.resize()
	}

	function a92() {
		aA.zT(), bN.a6K([gO[8], gO[16], gO[9], gO[9], gO[10]], [2 !== m.id, 1 !== m.id, !0, !0, !0]), aa.rx = new tJ, aa.rx.dG(), al.dH()
	}
	this.dG = function() {
		if (void 0 === gO) {
			a8w = 23, gO = new Array(a8w), v2 = new Array(a8w), (a8x = document.createElement("canvas")).width = 1;
			for (var a0 = a8w - (a8x.height = 1); 0 <= a0; a0--) gO[a0] = a8x;
			a92(), a93(0, "exit", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAFYAAABGBAMAAACkrn5fAAAAHlBMVEUAAAAiJCI4OjdcXltoameIioejpqPExsPY29j///9xarZIAAAAyUlEQVRIx+3WQQqCQBTG8TdOB5DUI+S6nRcoPIFhu1bBHGGO4Any3TYxAkWTv1DSYr71D4b5mOE9kWmszkeC/ZptT6Ocl+xj5qgtbVR1iZn9VE2wU2uO2Jryhm2h2OaKbdZgu/NKrXVK7f6q1JpaqTWFYpvrUtqhPTTYpst0aBOv2Drltlxh392iu0U1t5I4biX13PZvF7+zvOFWihXWlNy+aqZ/M3LcivXcds1xK9kKK3GYAVtYe+8CZ/c/7Br9blSNcgn75O/tE26TasUvH0ImAAAAAElFTkSuQmCC"
					), a93(1, "victory", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADYAAAAKAQMAAADFMz9IAAAABlBMVEUAAAD///+l2Z/dAAAASUlEQVQI12M4lvj+++efLQzHkoH0jxaGI+yMbcIcZxiOpEHoMyD6xx+GHBB9oIIhA0Q/MGCoSAfSBQYMBskP2z9bAOlEIC1hAADJYSFMvxXXTAAAAABJRU5ErkJggg=="), a93(2, "defeat", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), a93(3, "orders", 6,
					"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"
					), a93(4, "crown", 4,
					"iVBORw0KGgoAAAANSUhEUgAAANIAAADSCAIAAACw+wkVAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0xMi0yM1QxNDowNDo0NyswMzozMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1ZmFkNDE3NC03OWNiLTUwNDgtYWIyMi04NThmMGExODUzZTEiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4ZDQ1NTIyYS02MDRlLWYxNDUtYWM3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"
					), a93(5, "arena", 6, "iVBORw0KGgoAAAANSUhEUgAAACsAAAAKAQMAAAAXYzUQAAAABlBMVEUAAAD///+l2Z/dAAAARklEQVQI12OwqbdXOHyAoabe3uD4AYaURAOLYw4gygZE1dvpAKl/FXZq/g8Y/tUYGAOpY3kGxj4JDMfS7Q3PAKlke4MzCQCHpxoxsfTs8gAAAABJRU5ErkJggg=="),
				a93(6, "territorial.io", 6,
					"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phjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAA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jz//+c+xZMmS+PWvfx3Lly9PnQXUssWLF8c3vvGN1BmZM3To0Jg1a1bqDBJp3rx5LF++PHbcccfUKZm2dOnS+PrXv546AwAAAAAAAAAAAACAWlYvdQAAAAAAAAAAAAAAAGxLRUVFcfzxx8fhhx8eBxxwQLRv3z6aNm2aOiuv7bDDDrHffvvFfvvtFyeddFJcddVVsWrVqnjppZdi8eLFcd9998Wrr76aOhMA8t7IkSON9uSAAw44II455piYP39+6hQAAAAAAAAAAAAAAGqR4R4AAAAAAAAAAAAAAPJe7969o0+fPtG9e/fo1KlTNGrUKHVSnVZQUBB77rln7LnnntG3b9+49NJL469//Ws899xz8cQTT8Ttt98eH330UepMAMg7/fv3T53APw0ZMsRwDwAAAAAAAAAAAABAHWe4BwAAAAAAAAAAAACAvNOyZcs49dRT49BDD41u3bpF8+bNUydlWkFBQbRp0ybatGkTJ554Ylx77bXxwgsvxJNPPhn33HNPLF26NHUiAOS83r17x9577506g3864ogjon79+rFhw4bUKQAAAAAAAAAAAAAA1BLDPQAAAAAAAAAAAAAA5IX9998/TjnllDj88MNj//33j3r1XBKfq0pKSuKggw6Kgw46KC688MJYtmxZPPnkk3HXXXfFU089lToPAHLSwIEDUyfwb5o2bRpnn312zJw5M3UKAAAAAAAAAAAAAAC1xKcUAQAAAAAAAAAAAADIWd26dYvBgwfHEUccER06dIiCgoLUSVRTQUFBdOjQITp06BDnnHNOrFixIhYsWBCzZ8+ORYsWpc4DgJzRs2fP1Al8QZ8+fQz3AAAAAAAAAAAAAADUYYZ7AAAAAAAAAAAAAADIKR06dIgzzzwzevfuHZ06dTLWU8e0adMmvve978XZZ58dr776asydOzdmzpwZK1asSJ0GAMkccsghsccee6TO4AsOOuig1AkAAAAAAAAAAAAAANSiwtQBAAAAAAAAAAAAAABQv379GD58eCxcuDD++Mc/xsiRI6Nz585Ge+qwgoKC2GeffWLEiBHx5z//OZ588sk477zzoqioKHUaAGx3/fr1S53AlygtLY3evXunzgAAAAAAAAAAAAAAoJbUSx0AAAAAAAAAsK3df//9sdtuu6XOAHLE9OnT44477kidwSaMGzfOgZR1wG233RYzZ85MnUEeuuWWW2KfffZJnUEVvffee16zAagVRx55ZJx99tlx1FFHRdOmTVPnkEj9+vWjV69e0atXrxg/fnw8/PDDMW3atHj++edTpwHAdtG9e/fUCWzC0UcfHfPmzUudAQAAAAAAAAAAAABALTDcAwAAAAAAANQ5Xbp0iT333DN1BpAjdt9999QJbMacOXOivLw8iouLU6ewFZo2bWq4h2rr2bNnDBw4MIqKilKnUEVXXHFF6gQA6pD69evHiBEj4uSTT479998/dQ45plmzZnHaaafFwIEDY8mSJTF79uy48cYbU2cBQK0ybpy7unbtmjoBAAAAAAAAAAAAAIBaUpg6AAAAAAAAAACA7HrxxRfjvvvuS53BVmrXrl2cddZZqTPIM6NGjTLak0dWrVoV48aNS50BQB3QsWPHuOWWW+Lvf/97TJ482WgPm1VUVBQHHXRQXH/99bFy5cqYMmVKlJaWps4CgG1u//33j2bNmqXOYBP23nvv1AkAAAAAAAAAAAAAANQSwz0AAAAAAAAAACQ1bty4WLduXeoMttK5556bOoE80rlz5zjmmGNSZ1AN11xzTVRUVKTOACCPHXPMMfHQQw/F888/H6eddprxFaptjz32iAsvvDBWrFgRs2fPjs6dO6dOAoBt5rDDDkudwGbstttu0bp169QZAAAAAAAAAAAAAADUAsM9AAAAAAAAAAAktXLlyrjjjjtSZ7CVunbtGv3790+dQZ4oKyuLBg0apM6gil588cWYNm1a6gwA8tSgQYNi8eLF8cgjj8Q3v/lN7wHYajvuuGMMGjQolixZEg8++GD07NkzdRIAbLX27dunTmALevTokToBAAAAAAAAAAAAAIBaYLgHAAAAAAAAAIDkxo4dG++//37qDLbSj370o9QJ5IFWrVrFcccdlzqDKtq4cWNceumlqTMAyEPf+9734oUXXojZs2fHN77xjSgoKEidRB1TXFwcxx57bDzxxBMxb968OPLII1MnAUCNfe1rX0udwBZ06tQpdQIAAAAAAAAAAAAAALXAcA8AAAAAAAAAAMmtWbMmbrrpptQZbKVevXpFr169UmeQ48rLy6NRo0apM6iixx9/PO6///7UGQDkkWHDhsUrr7wSN9xwQ+y3336pc8iAoqKiOProo2PevHmxYMECAz4A5KUWLVqkTmALvvrVr6ZOAAAAAAAAAAAAAACgFhju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FpLMnDkzmjZtmp1RdEpLS7MTAAAAAAAAAFhKDbIDAAAAAAAAAACgEAwdOjR23333qKioyE5hMcrKyuKUU06JX/ziF9kpNebggw822lPH3HDDDUZ7AOqhX//610Z7CtT8+fPj5ptvjr59+0ZVVVV2TkEZPnx4PPvss3HddddFx44ds3NYRj169Iju3bvH2LFjs1MAAChSO+ywQ/Ts2TM23njjWGeddWLNNdes80MFy2qVVVaJVVZZJbp06fKtf//ZZ5/FO++8E//6179izJgx8fjjj8f777+fVAnA8tS2bds46KCDomfPnrHRRhtFu3btspOW2P//eLbRRhvFvvvuGxdddFF88sknMW7cuBg7dmzcc889fucEAAAAAAAAAECdVBIR87MjAAAAAAAAAGrSv//971hzzTWzM4raBx98EGuvvXZ2BkCtu+yyy+K4447LzqAa5s6dG926dYu33347O6VGjB49Onr06JGdwQIfffRRdOrUKebNm5edAsASeu+99/w8W4Bmz54dQ4YMiUsvvTQ7paCVl5fHyJEjY/vtt89OYRndcMMNcdRRR2VnUEe89NJLsemmm2ZnFJ1+/frFddddl50BAMtdw4YNY++9946tt946unfvHuutt140b948O6vOmj9/fnz00Ucxbty4GDNmTDz22GPx4osvZmcBsJS6d+8eBx98cGy11VbRtWvXaNCgQXbScjdhwoR44YUX4vHHH4877rjD86mwnMycOTOaNm2anVF0SktLsxMAAAAAAAAAWEqGewAAAAAAAICCY7gnn+EeoFiVl5fHW2+9Fa1bt85OoRpuvvnmOPzww7Mzltmuu+4af/rTn7IzWMivf/3ruOSSS7IzAFhCBx98cNx8883ZGdSwKVOmxGGHHRaPPPJIdkrRuPTSS6N///5RVlaWncJS+vjjj2ONNdbIzqCOMNyTw3APAIWsd+/esdtuu8UWW2wRG2ywQTRp0iQ7qV77z3/+E6+99lq88MILMXLkyHj33XezkwBYhE6dOsWRRx4ZO+20U2ywwQZRUlKSnZTmyy+/jOeffz7uvffeuOmmm6Kqqio7CQqG4Z4chnsAAAAAAAAA6i/DPQAAAAAAAEDBMdyTz3APUMzOOuusGDJkSHYG1fDll19Gp06dYsqUKdkpy+Svf/1rbL311tkZLPDGG29Et27dsjMAWApPPvlkbLPN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ZwAAUIPatm0bd955Zzz22GPxk5/8JDuHeqisrCz22GOPGDNmTFx22WXRsGHD7CSAGtOtW7d45ZVXYu+9985OYRmsscYacffdd8dZZ52VnQIAAAAAAAAAQB1nuAcAAAAAAAAAAGrBxIkT45ZbbsnOoBp23nnn6NSpU3bG/zjyyCOzE1hg1KhR8dRTT2VnALAMDj744OwElkJlZWWccsopMWHChOwUatCbb74ZJ510UnzzzTfZKSzCLrvskp0AAEANOfPMM+ONN96IfffdNxo0aJCdQz3XvHnzOO644+Ktt96KQw45JDsHYJn16dMn/vKXv8QGG2yQnUINaNSoUQwZMiQefPBBI3MAAAAAAAAAAPwgwz0AAAAAAAAAAFBLBg0aFJ999ll2BouxwgorxODBg7MzvuWggw6KLl26ZGcQEbNnz46BAwdmZwCwjHr37p2dwFK46aab4tZbb83OYDm47bbb4qabbsrOYBG23HLL7AQAAJZR796947XXXoszzjgjVl555ewcCsxaa60VN910Uzz22GOx7rrrZucALJWBAwfGjTfeGKusskp2CjXs5z//ebz88sseowAAAAAAAAAA+F6GewAAAAAAAAAAoJbMmDEjbrjhhuwMqmHPPfeMli1bZmf8V//+/bMTWOC2226LN998MzsDgGWw0047xRprrJGdwRJ6/fXX4+ijj87OYDn61a9+FePHj8/O4Ad07NjRwaYAAPVU48aN4/e//338+c9/jm7dumXnUOC22267GD16dAwePDg7BWCJXHvttTFixIho1KhRdgrLSbdu3eKvf/1rbLXVVtkpAAAAAAAAAADUMYZ7AAAAAAAAAACgFg0dOjQmTpyYncFilJeX15lD5XbZZZfYdNNNszOIiM8++ywGDBiQnQHAMvrFL36RncASmjNnTvTv3z+qqqqyU1iOKisr45hjjok5c+Zkp/A9SkpKYu+9987OAABgCe2+++4xbty4OPzww6Nhw4bZORSJlVZaKc4+++x48cUXo2vXrtk5AItUWloa999/fxx55JFRUlKSncNy1rZt23jggQdin332yU4BAAAAAAAAAKAOMdwDAAAAAAAAAAC1qLKyMq644orsDKph//33j8aNG2dnxIknnuiQqDrimmuuienTp2dnALCMevXqlZ3AErrmmmvihRdeyM6gFjz77LNxzTXXZGfwA7ba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XFRVVWXnLFcnnHBC7LfffjF58uTsFBY44ogjshMAKDAbbLBBdgIAAAAAAAAAAAsx3AMAAAAAAAAAAEXq+uuvj9deey07A37QXXfdFW+88UZ2BgB1WIsWLbITWMg777yTnQAAALDM9t9//+wEFjJmzJjYcsst4/77789OqTX3339/bL311jFu3LjsFCKid+/e0axZs+wMAApIhw4dshMAAAAAAAAAAFhIg+wAAAAAAAAAAAAgz/nnnx933nlnlJSUZKfAt0ybNi0GDBiQnQFAHdapU6do2LBhdgYLGTt2bHYCAADAMtlyyy1jk002yc5ggbvuuisOPPDAqKqqyk6pdW+++WZsuumm8fDDD0evXr2yc4raSiutFP369YuLL744OwWoY6ZNmxZTp06NL774Ij7//PP46quvIiJi5syZ0bx584iIaNSoUZSXl8eKK64YK6+8cqy66qrRuHHjzGzqgDXWWCM7AQAAAAAAAACAhRjuAQAAAAAAAACAInb33XfHscceGz/96U+zU+Bbrr322pgyZUp2BgB12DrrrJOdwELmzJljuAcAAKj3jj76aEP3dcD8+fPjiiuuiBNPPDE7JdWcOXNiu+22i3vvvTd233337JyitsceexjugSJWVVUV77zzTvzrX/+KcePGxauvvhrPPPNMTJ8+famut/7668emm24a3bp1i/XWWy822GCDaN++ve9BishKK60U66+/frz55pvZKQAAAAAAAAAAhOEeAAAAAAAAAAAoemeffXY88sgjUVZWlp0CERExYcKEOOOMM7IzAKjjVl999ewEFvLZZ59lJwAAACyTsrKy2HHHHbMzit78+fPjnHPO8TviBaqqqmLPPfeMe+65J/baa6/snKK16aabRocOHeL999/PTgFqyaxZs+LFF1+Mxx9/PEaOHBkffvhhjV37zTff/J/Blg4dOsTee+8dvXv3jk033TRWWmmlGrsfdVPPnj0N9wAAAAAAAAAA1BGl2QEAAAAAAAAAAECuJ598Mh577LHsDPiviy++OCorK7MzAKjjVltttewEFjJlypTsBAAAgGVy5JFHRsuWLbMziprRnh+27777xiOPPJKdUbQaNmwYRx55ZHYGsJxVVVXFyy+/HKecckq0adMmtt9++7joootqdLTnh7z//vtx4YUXxg477BCtWrWKE044IZ599tn45ptvlvu9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222XnUIttWvXLh588MHo0KFDdgq19Pjjj2cnAADUi2nTpmUnFJX9998/tt566+wMAACARrHddttFeXl5dgYAAAAAAAAAG8BwDwAAAAAAAAAANICKioooLXV7TiGaOXNmjB8/Pjvjcy1evDhuueWW7AxqoUWLFjFixIjsDAA20NKlS2Py5MnZGWykr33ta/Hggw86DK0JKC8vj4cffji6dOmSnUItrVu3Lm677bbsDACAenHffffF2rVrszOKRuvWreP000/PzgAAAGgUpaWl8b3vfS87AwAAAAAAAIAN4GQQAAAAAAAAAACoZz/60Y9iv/32y86gBmPHjs1OqJUhQ4bEwoULszOohQMOOCAOP/zw7AwANtCtt96anUA96Nq1a/zhD3+IFi1aZKdQgxYtWsRDDz0UXbt2zU6hDl5++eWYNWtWdgYAQL1YunRpvPHGG9kZReWYY47JTgAAAGg03/nOd7ITAAAAAAAAANgAhnsAAAAAAAAAAKCeDRo0KEpKSrIzWI9nnnkm7rjjjuyMWlmxYkXceOON2RnUQklJSQwePDg7A4ANdOedd8bbb7+dnUE9+M53vhOPPfaY8Z4CVF5eHk8++WR07949O4U6euKJJ7ITAADq1QsvvJCdUFR22WUX4z0AAEDR6Nq1a3YCAAAAAAAAABvAcA8AAAAAAAAAANSj448/3iEMBWrdunUxatSo7Iw6qaioiHfffTc7g1rYe++945e//GV2BgAb6IEHHshOoJ706NHDeE+Badu2bUyaNCm6deuWnUIdrVu3Lm6++ebsDACAevXMM89kJxSdU089NTsBAACgUXTp0iVKSx3nBAAAAAAAANDUbJIdAAAAAAAAAAAAzck555yTnUANpkyZEg899FB2Rp2sWbMmxo8fH0OHDs1OoRbOOuusuP7666O6ujo7BYA6uuyyy+LUU0+NTTfdNDuFetCjR4+YPHly9OrVK5YtW5adU9R23nnneOCBB2L33XfPTmEDvPTSS/Hcc89lZwAA1Kt77rknxo4d6yDlRvSd73wnunfvHlOnTs1O4TO23nrrOPnkk7Mzmp2VK1fGFVdckZ0BAECCzTffPA4//PC49957s1MAAAAAAAAAqAPDPQAAAAAAAAAAUE/69esXu+22W3YG61FdXR2jRo3KztggI0eOjBNPPDE6duyYncIX6NSpUwwePDhGjBiR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qsrOaHSVlZWxZs2a7AxqoW3btlFZWZmdAUAdDR8+PN57773sDApIaWlpdO3aNSorK+Ott96K6dOnx4UXXhh77bVXdlqNysrK4rjjjosbb7wxXn755fjrX/8a/fr1i1133TVKSkqy80h26623ZicAAKS67bbbshOIiK222iruueee6Nq1a3ZKs3DsscfGhRde6Hu+RvLcc89lJwAA/JPhnsK3+eabx+WXXx4PPPBAdOjQITsHAAAAAAAAoOgZ7gEAAAAAAAAAgFqqqKiI0lK33BSiN998My666KLsjBTTpk2LiRMnZmdQS0cffXR84xvfyM4AoA5WrVoVEyZMyM6gQLVo0SK6du0aZ511Vjz33HMxd+7ceOihh2LYsGHRrVu3tK527dpF796947rrrou//OUv8cEHH8Qtt9wSJ5xwQuyyyy4ObuaflixZEqNHj87OAABI9cADD8Tbb7+dnUFEbLvttnHPPff4GepGOvzww+O3v/1tbLrpptkpReOJJ57ITgAA+Kfly5dnJ1BLhx56aDz//PMxZsyYaNWqVXYOAAAAAAAAQNHaJDsAAAAAAAAAAACagh/96Eex3377ZWdQgyuuuCKqq6uzM9KMGDEivv/970fLli2zU/gCrVq1isrKyjj00EOzUwCog/PPPz+OPfbY2HbbbbNTKGAlJSXRoUOH6NChQxx88MFRUVERS5YsiXfeeSfmzp0br732WsyZMydmzJgRL7zwQr18/dqlS5fYbbfdolOnTrHrrrvGV7/61fjKV74S22+/fZSVldXDR0Vzd8cdd8SqVauyMwAA0j366KNxyimnZGcQETvttFP86U9/ih//+McxderU7Jwm57jjjourr746Nt988+yUorFy5UqjzwBAQVm9enV2AnWw5ZZbxjnnnBM/+9nP4vbbb4+xY8fG4sWLs7MAAAAAAAAAiorhHgAAAAAAAAAAqIVBgwZFSUlJdgbrMXv27Bg3blx2RqoZM2bEgw8+GD/+8Y+zU6iFH/zgB9GzZ8+YNGlSdgoAtbRq1aq48cYb45xzzslOoYnZaqutYquttopvfvOb//LyqqqqWLZsWSxZsiSWLl0aH374YVRVVcXHH38ca9eujY8//jgiIlq0aBGtWrWKiIjy8vLYfPPNY/PNN482bdrENttsE5tuumljf0g0I8uXL4+RI0dmZwAAFITx48fHySef7PcABWLbbbeN+++/P04++eS4//77s3OajDPOOCPGjh0bLVu2zE4pKjNmzIg1a9ZkZwAA/JOx9qZphx12iLPOOitOPfXUePLJJ+Puu++OCRMmRHV1dXYaAAAAAAAAQLNnuAcAAAAAAAAAAL7A8ccfH127ds3OoAaXXXZZdkJBGD58eBxyyCHRunXr7BS+QFlZWQwfPtxwD0ATU1FRET/72c9ihx12yE6hGSgrK4stt9wyttxyy+wUitidd94ZCxYsyM4AACgIzz77bMycOTP22muv7BT+11ZbbRW33XZbDB48OC699NLsnII3bty46Nevn/GpBI8++mh2AgDAv1i2bFl2AhuhTZs2ceihh8ahhx4al112WcyYMSOeeeaZePrpp2PSpEkpo5G77rpr7LnnntGpU6fo0KFDvPTSS3HllVc2egcAAAAAAABAQzHcAwAAAAAAAAAAX+Ccc87JTqAGM2fOjPHjx2dnFITZs2fHfffdF8cdd1x2CrWw7777xnHHHRcTJkzITgGgltasWRPjx4+PoUOHZqcAbLSVK1fG6NGjszMAAArKPffcY7inwLRq1Souuuii2H333eOUU06J6urq7KSCs/3228eECRPiP/7jP7JTitKaNWvixhtvzM4AAPgXS5cuzU6gnmy55ZZx4IEHxoEHHhgREZ988km89dZbMXfu3FiwYEEsWLAg3n333Zg3b14sWbIkVq9eHYsXL44PP/wwqqurY8stt/znY2222WaxxRZbRETEl770pWjbtm1sscUWseWWW8bmm28ebdq0ifLy8thmm21iq622iq222uqfr2/VqtW/dE2YMMFwDwAAAAAAANCsGO4BAAAAAAAAAIDP0a9fv9htt92yM6jBRRddlJ1QUIYOHRqHHXZYtGnTJjuFWjj33HMN9wA0MSNHjowTTjghvvrVr2anAGyU++67L958883sDACAgnLllVfGwIEDo7y8PDuFTykpKYmTTjop9t577/j5z38es2bNyk4qGMcee2xcdNFF8eUvfzk7pWjNnDkz5s2bl50BAPAvlixZkp1AA9l0001jl112iV122SU7BQAAAAAAAKBZKc0OAAAAAAAAAACAQlVaWhr9+/fPzqAG06dPj9tvvz07o6C8+eabceedd2ZnUEu77bZbnHnmmdkZANRBdXV1XHLJJdkZABtl+fLlMWTIkOwMAICCs2zZsnj88cezM6jBN77xjZg8eXKce+652Snptt566/jv//7vuOmmm4z2JHvssceyEwAA/o/33nsvOwEAAAAAAAAAmhTDPQAAAAAAAAAAUIOzzz47OnXqlJ3Beqxbty4qKyuzMwpSRUVFLF26NDuDWurfv3+UlZVlZwBQB1dffXU8//zz2RkAG+zOO++MuXPnZmcAABSk3/72t9kJfI4tttgiRo0aFU8//XR07do1O6fRlZaWxpAhQ+Kll16Ko48+2s+Wk1VVVcWtt96anQEA8H8sWrQoOwEAAAAAAAAAmhTDPQAAAAAAAAAAsB5lZWXRr1+/7AxqMGXKlHjooYeyMwrS/Pnz4/bbb8/OoJZ23HHHGDVqVHYGAHVUWVkZ69aty84AqLNly5bFsGHDsjMAAArWpEmTYtasWdkZfIF99903pkyZEjfccENsvfXW2TmNonfv3vHyyy/H8OHDo3379tk5RMTf/va3mDNnTnYGAMD/8Y9//CM7AQAAAAAAAACaFMM9AAAAAAAAAACwHiNHjowddtghO4P1qK6uNnTyBSoqKmLx4sXZGdTSySefHO3atcvOAKAO7rvvvnjiiSeyMwDq7Kabbop58+ZlZwAAFDTD6E1Dq1at4qSTToo5c+bEpZdeGuXl5dlJ9a60tDROP/30mDlzZowfPz7+7d/+LTuJT7nvvvuyEwAA1mvGjBnZCQAAAAAAAADQpBjuAQAAAAAAAACAzygvL4/evXtnZ1CDxx57LCZNmpSdUdAWL14ct9xyS3YGtbTVVlvFmDFjsjMAqKNzzjknVq1alZ0BUGsLFiyI8847LzsDAKDg/eY3v4n3338/O4Na2nrrreNXv/pVvPHGG3H55ZdHhw4dspM22vbbbx9jxoyJt956K8aNGxd77rlndhKf8dFHH8WVV16ZnQEAsF6LFy+Ojz76KDsDAAAAAAAAAJoMwz0AAAAAAAAAAPAZI0aMiPbt22dnsB5r1qyJUaNGZWc0CUOGDImFCxdmZ1BLP/nJT2K33XbLzgCgDmbMmBETJkzIzgCotauvvjpWrFiRnQEAUPDWrFkT9957b3YGdbT11ltHv3794uWXX4777rsvDj/88OykOikrK4u+ffvG448/Hm+88Uacc845sdNOO2VnUYMnn3zS91cAQEEzRgoAAAAAAAAAtWe4BwAAAAAAAAAAPqVdu3ZxwgknZGdQg4kTJ8bUqVOzM5qEFStWxI033pidQS21bt06KisrszMAqKOzzz7bUB7QJLz22msxevTo7AwAgCbjwgsvjFWrVmVnsAG+9KUvxWGHHRb33ntvvPXWW3HttdfGgQcemJ21Xh07doxzzz03HnnkkVi0aFFcccUVccABB0TLli2z0/gCxpwBgEL33nvvZScAAAAAAAAAQJNhuAcAAAAAAAAAAD5l9OjR0bZt2+wM1mP16tUxdOjQ7IwmpaKiIt59993sDGrp0EMPjR49emRnAFAHS5cujUsvvTQ7A+ALVVZWRnV1dXYGAECT8eabb8ajjz6ancFG+spXvhKnnHJKPPbYYzFv3ry455574swzz4xdd901pWfvvfeOgQMHxu233x4vvvhivPbaazFq1Kg46KCD/G6qCZk7d27cdddd2RkAAJ/LcA8AAAAAAAAA1N4m2QEAAAAAAAAAAFAoOnfuHMccc0x2BjV44IEHYtasWdkZTcqaNWti/PjxBo+aiLKyshg+fHgccMAB2SkA1MFFF10UxxxzTOy9997ZKQDrNXny5LjllluyMwAAmpxLLrkk/vM//zNKS0uzU6gH22+/fRxxxBFxxBFHxIUXXhjz5s2LN998M1599dV46aWX4oUXXojp06fHihUrNuo6LVq0iH322Sf22GOP+Ld/+7f46le/GjvuuGN06tQpttpqq3r6aMh0xx13ZCcAAHyhefPmZScAAAAAAAAAQJNhuAcAAAAAAAAAAP7XsGHDok2bNtkZrMfKlStj8ODB2RlN0siRI+PEE0+Mjh07ZqdQCz169Igf//jHcdddd2WnAFAHZ511VjzyyCPRokWL7BSAf/HJJ5/Eueeem50BANAkPfXUUzFlypTYf//9s1OoZyUlJbHTTjvFTjvtFP/xH//xz5evW7culixZEkuXLo2PPvooli1bFsuXL4+1a9fGunXr4uOPP47WrVtHRMRmm20WJSUl8aUvfSnatm0bW2yxRWy++eax+eabZ31YNIKPPvooLr744uwMAIAv9Morr2QnAAAAAAAAAECTYbgHAAAAAAAAAAAiokuXLnHkkUdmZ1CDu+66K15//fXsjCapuro6rr322hgzZkx2CrVQUlIS559/vuEegCZm8uTJcdttt8WJJ56YnQLwL2699dZ45plnsjMAAJqsSy+9NP7jP/4jSkpKslNoBCUl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N96II488Mqqrq7NTAACohdmzZ8f5558f69aty04BvkBVVVWceeaZficCABSVe++9NzsBAAAAAAAAAAqO4R4AAAAAAAAAAJql7t27R69evbIzqMEDDzwQzz//fHYG6zF//vy4/fbbszOog29/+9tx0kknZWcAsJGOOOKImDVrVnYGUEAWL14cP/3pT2PRokXZKQAA1ME111wTd911V3YG8AWuu+46/68CAEXnsssuiwULFmRnAAAAAAAAAEBBMdwDAAAAAAAAAECzNHjw4GjRokV2BuuxcuXKGDx4cHYGn6OioiIWL16cnUEdDBw4MDsBgI20atWqOPLII2PevHnZKUAB+Pjjj6N3797x3HPPZacAALAB+vTpE6+//np2BlCDZ555Jk4//fTsDACARldVVWW8EAAAAAAAAAA+w3APAAAAAAAAAADNTs+ePaNnz57ZGdTgrrvucmBhgVu8eHHccsst2RnUwS677BLnnHNOdgYAG+nNN9+M4447Lj744IPsFCBRVVVVnHnmmfGHP/whOwUAgA20YsWK6N27d6xYsSI7BfiMRYsWxYknnhjV1dXZKQAAKS666KJYuXJldgYAAAAAAAAAFAzDPQAAAAAAAAAANDsVFRVRWurWmEK0fPnyGDJkSHYGtTBkyJBYuHBhdgZ1cPrpp0erVq2yMwDYSE899VScfPLJ8fHHH2enAEkuuOCCuOaaa7IzAADYSFOnTo0hQ4bEunXrslOA/1VVVRUDBgyIV199NTsFACDNvHnz4pFHHsnOAAAAAAAAAICC4XQSAAAAAAAAAACalaOOOir222+/7AxqcMstt8S8efOyM6iFFStWxI033pidQR1sv/32UVlZmZ0BQD247777on///rFmzZrsFKCR/fa3vzV2CgDQjFx22WVx++23Z2cA/+uqq66KCRMmZGcAAKSrrKyM1atXZ2cAAAAAAAAAQEEw3AMAAAAAAAAAQLMycODAKCkpyc5gPZYsWRLDhg3LzqAOKioq4t13383OoA569+4d22+/fXYGAPVg/PjxMXTo0Fi3bl12CtBIbr/99ujbt292BgAA9ezEE0+M5557LjsDit4f//jH+NWvfpWdAQBQEJ5//vl48MEHszMAAAAAAAAAoCAY7gEAAAAAAAAAoNk44YQTomvXrtkZ1ODmm2+ORYsWZWdQB2vWrInx48dnZ1AHbdu2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L14c06ZNiyeffDKamppST6KXO378eKxevTpKS0vjrrvuihMnTqSeBAAAPVZnZ2esXLkyJk+eHLfeemvs2LEjOjs7U88ioa6urti5c2fceeedH4adhFIBAPi07dmzJ+69996YN29ejBo1Ku644454+umn480334wzZ86kngcAAAAAAABADybcAwAAAAAAAABAUl/84hdj0aJFqWfwMXbt2hUbN25MPYNe4Oc//3ns378/9QzO09e//vWYPXt26hkA9FC1tbVx++23x8SJE2PVqlVRW1ubehK9TFVVVfz4xz+OSy65JJYuXRrNzc2pJwEAQK/yy1/+MubNmxcLFiyIX/3qV665M9PQ0BDPPPNMXHnllXH55ZfHunXrUk8CAICIiGhra4snnngibrnllqioqIgRI0bEN7/5zVi3bl3s2LEj/vGPf6Se2Ou0t7dHVVVVbN68OZ577rnUcwAAAAAAAAD+o/qlHgAAAAAAAAAAQN7uu+++6NfP31i6o66urvjpT3+aega9yMMPP+zGfj3MwIEDY/ny5XHttdemngJAD9bY2Bh333133HPPPfG9730vFi9eHNOnT089ix6qs7Mzdu3aFevXr4+nnnoq9RwAAMjC1q1bY+vWrVFUVBRLly6NG264IS699NLUs7gA2tvbY+fOnfHss8/GY489Fh0dHaknAQDA/6mtrS02bdoUmzZt+vBYaWlpLFy4MGbOnBlTp06NSy65JEpKSmLAgAEJl/YMra2t8e6778ahQ4fi73//e7zxxhvx/PPPR2NjY+ppAAAAAAAAABeEO54AAAAAAAAAAJDMVVddFVdeeWXqGXyMbdu2xW9/+9vUM+hFnnjiiViyZElUVFSknsJ5uPrqq+Oaa66JP/zhD6mnANDDdXZ2xkMPPRQPPfRQXHvttXHHHXfEVVddFYWFhamn0QM0NzfH73//+3j00Udj+/btqecAAECWmpubY9myZbFs2bKYP39+3HbbbXH11VfHqFGjUk/j/6GrqysOHjwYL730Ujz++OOxf//+1JMAAOD/7dChQ7F27dqPHOvbt2/MmzcvZs2aFZMnT46JEyfGxRdfHGPGjIkxY8ZEv3753Iqpubk56uvr49ixY1FTUxPvvPNOVFdXx969e2PPnj2p5wEAAAAAAAB8qvL5tRgAAAAAAAAAgG7nvvvui4KCgtQz+Cc6OztjxYoVqWfQCz344IOxYcOG1DM4DwUFBbFs2TLhHgD+o7Zs2RJbtmyJ8ePHx/e///247rrrorS0NPUsuqHKysr4zW9+Ew8++GA0NzenngMAAPy3V155JV555ZUoKCiIxYsXx/XXXx9XXHFFFBUVpZ7GJ1RVVRUvvPBCbNiwIf7yl7+kngMAABdcR0dHbN26NbZu3fpPn581a1aUl5dHaWlpjB49OsaMGRPFxcUxatSoGD58eIwYMSKGDBkSAwcO/JSXfzLnzp2L1tbWaGxsjMbGxmhqaor6+vo4efJkHD9+PGpqauLtt9+O3bt3R2NjY+q5AAAAAAAAAN1Gn4joSj0CAAAAAAAAAAAAAIC8XX/99bF48eJYsGBBDB06NPUcEjp58mS89NJLsX79+vjTn/6Ueg5kbdy4cTF48ODUM7JTW1sbbW1tqWeQ2JAhQ6KkpCT1jOycPXs2ampqUs+AHqt///7xne98J6655pqYO3duXHTRRakn8T+0t7fH/v3749VXX41nnnkmtm3blnoSdGuux9JoamqKEydOpJ6RpYKCAnH1RA4fPhwdHR2pZwDnobCwMMrKymLs2LExevToGDFiRAwbNiyGDx8effv2jaFDh8aAAQOisLAwBg0aFP369YuIiH79+kVhYeG/fO2urq5obW398HFLS0u0t7dHa2trtLW1xdmzZ6O5uTlaWlqioaEh6uvr4/jx43H48GExHgAAAAAAAIB/k3APAAAAAAAAAAAAAADdRlFRUSxZsiS++tWvxuzZs6N///6pJ/EpaGtri+3bt8fmzZtjzZo1blQJAAA9XEFBQdx0002xaNGiuOyyy2LixInRp0+f1LOy09DQEK+//nq8/PLLsWHDhjh69GjqSQAAAAAAAAAAAADdinAPAAAAAAAAAAAAAADd0oQJE+L222+PRYsWxfTp06Nv376pJ/EfdO7cudi9e3e88MIL8fjjj8exY8dSTwIAAC6QGTNmxI033hhz5syJGTNmxMiRI1NP6pU++OCDqKys/DDWs3nz5tSTAAAAAAAAAAAAALo14R4AAAAAAAAAAAAAALq9yZMnx7e+9a1YsGBBzJo1KwYMGJB6Ev+Gtra22Lt3b7z44ovxi1/8Impra1NPAgAAEvjKV74SCxcujM9//vNRXl4eY8eOTT2pR6qrq4uDBw/Gnj174s9//nM899xz0dnZmXoWAAAAAAAAAAAAQI8h3AMAAAAAAAAAAAAAQI8yevTouPXWW2P+/Pkxe/bsGDlyZOpJ/Av19fWxc+fOePHFF+Ppp5+OxsbG1JMAAIBuZsaMGbFw4cKoqKiI8vLymDRpUgwbNiz1rG6lqakpqqqq4m9/+1u88cYb8cc//jHeeuut1LMAAAAAAAAAAAAAejThHgAAAAAAAAAAAAAAerTrrrsuFi1aFJdddllMmTIlBgwYkHpS1trb22Pfvn3x2muvxZYtW+L5559PPQkAAOiB5s6dG3PmzIlp06ZFWVlZfOYzn4lx48b1+u98H3zwQdTW1sa7774bb7/9duzbty927doVe/bsST0NAAAAAAAAAAAAoNcR7gEAAAAAAAAAAAAAoNcoKiqKG2+8Mb785S/HzJkzY/LkydGvX7/Us3q1jo6OqK6ujt27d8fWrVvj17/+ddTX16eeBQAA9FJz586NioqKmDRpUowfPz5KSkri4osvjjFjxkRRUVH06dMn9cR/qb29Perq6uL48eNx/PjxOHLkSNTU1MShQ4di7969UVlZmXoiAAAAAAAAAAAAQDaEewAAAAAAAAAAAAAA6LWKioria1/7WsybNy+mT58e06ZNi+Li4tSzerSWlpY4cOBAvPnmm7Fjx4743e9+FydOnEg9CwAAIAoLC2P69OkxZcqUKCkpidGjR8dFF10UxcXFMXz48Bg2bFgMHjw4Bg0aFIMHD47+/fvH4MGDo6CgIAoLCz/xeU6fPh1dXV1x9uzZaGtri9OnT8fp06ejpaUlTp8+Ha2trdHU1BQnTpyIurq6eP/99+PIkSNRXV0d1dXVF/AdAAAAAAAAAAAAAOB8CPcAAAAAAAAAAAAAAJCVWbNmxfz582PGjBlRXl4eEyZMiFGjRqWe1S21tLTE4cOH48CBA/HWW2/Fq6++Gi+//HLqWQAAABdM3759Y+LEiR85VldXF42NjWkGAQAAAAAAAAAAAHDBCPcAAAAAAAAAAAAAAJC9srKy+NKXvhTTpk2Lz372szFhwoQYN25cjBw5Mvr06ZN63gXX2toaR44ciffeey8OHToU+/bti+3bt8frr7+eehoAAAAAAAAAAAAAAAAAXBDCPQAAAAAAAAAAAAAA8DGKi4vj8ssvj0svvTRKS0ujpKQkxowZE6NHj45Ro0ZFcXFx6omfyLlz56K+vj4aGhri/fffj6NHj0ZNTU0cPnw4du3aFZWVlaknAgAAAAAAAAAAAAAAAMCnSrgHAAAAAAAAAAAAAAD+TUVFRVFeXh4TJkz4SNSnqKgohg0bFkOHDo2hQ4fGkCFDorCwMAYNGhT9+/eP/v37x6BBg6JPnz6f+FxdXV1x+vTp6OjoiDNnzkRbW1u0trbGqVOnorW1NVpaWqKpqSnq6uqioaEh6urqoqamJg4ePBgHDhy4gO8CAAAAAAAAAAAAAAAAAPQ8wj0AAAAAAAAAAAAAAJBYWVnZxz7X0tISx44d+xTXAAAAAAAAAAAAAAAAAEDvJ9wDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQFYKUg8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgE+TcA8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWRHuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACArwj0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZEW4BwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICsCPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkBXhHgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACyItwDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQFaEewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIinAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFkR7gEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgK8I9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGRFuAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACArAj3AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJAV4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsiLcAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBWhHsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyIpwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABZEe4BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICvCPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABkRbgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgKwI9wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACQFeEeAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALIi3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAVoR7AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMiKcA8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWRHuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACArwj0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZEW4BwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICsCPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkBXhHgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACyItwDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQFaEewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIinAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFkR7gEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgK8I9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGRFuAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACArAj3AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJAV4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsiLcAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBWhHsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyIpwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABZEe4BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICvCPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABkRbgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgKwI9wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACQFeEeAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALIi3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAVoR7AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMiKcA8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWRHuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACArwj0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZEW4BwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICsCPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkBXhHgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACyItwDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQFaEewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIinAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFkR7gEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgK8I9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGRFuAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACArAj3AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJAV4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsiLcAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBWhHsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyIpwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABZEe4BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICvCPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABkRbgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgKwI9wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACQFeEeAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALIi3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAVoR7AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMiKcA8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWRHuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACArwj0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZEW4BwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICsCPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkBXhHgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACyItwDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQFaEewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIinAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFkR7gEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgK8I9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGRFuAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACArAj3AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJAV4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsiLcAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBWhHsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyIpwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABZEe4BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICvCPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABkRbgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgKwI9wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACQFeEeAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALIi3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAVoR7AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMiKcA8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWRHuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACArwj0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZEW4BwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICsCPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkBXhHgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACyItwDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQFaEewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIinAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFkR7gEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgK8I9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGRFuAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACArAj3AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJAV4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsiLcAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBWhHsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyIpwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABZEe4BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICvCPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABkRbgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgKwI9wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACQFeEeAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALIi3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAVoR7AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMiKcA8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWRHuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACArwj0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZEW4BwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICsCPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkBXhHgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACyItwDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQFaEewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIinAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFkR7gEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgK8I9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGRFuAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACArAj3AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJAV4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsiLcAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBW/guPa8fbi/a0LQAAAABJRU5ErkJggg=="
					), a93(7, "youtube", 7, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), a93(8,
					"googleplay", 3,
					"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"
					), a93(9, "discord", 7,
					"iVBORw0KGgoAAAANSUhEUgAAACwAAAAyBAMAAADVdiTZAAAAG1BMVEUA/wBI/0lu/26P/5Cl/6O8/73R/9Hn/+j///+iRuwXAAABJUlEQVQ4y83TvW7CMBQF4BsKdKVIpYxIRaJjVLUSI6JDGSNlCCOq1JC1f+CxFIL92D22E+di/ABciZB8seRj35joVZ3VN1FXBSqhRYgPJEIsSQXrAnmjL2uP5Usm81z83Bec5WM+J9T4vS8Yfzz1yFQ0v2ackKsrxr2G7d4ZPjK1O214z3no+Jdz1/EKTy1NI/w6jmcIID6JJirGe8cYdIdGIcQOwx3j/gEpI6X+qoRkGqrnd6OXFR/NRAcdOWFc6hDPera0Xk/Fozo1ck4bHsSVpg0jYJSlervGW9zWSdQXhhXozlbGek1uY9/s2hRWect7ucnsf5ld7DfosX+kcsv+AdwtDfvHdW877x/u0raB6Oa0qG35rKZhbokg41sKclQEmTr/f+SUPtWxuyYAAAAASUVORK5CYII="
					), a93(10, "insta", 3, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), a93(11, "emojis",
					4, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), a93(12, "flags", 3,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), a93(13, "bestTeam", 5,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), a93(14, "bestPlayer", 5,
					"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"
					), a93(15, "zoom", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuBAMAAACllzYEAAAAHlBMVEUAAAAhIyA3ODZTVVJrbWqEhoOkpqO8v7vX2tb///8goTJXAAABaElEQVQ4y32Tu1ODQBDGL8QAdlg5dml8dZTa2TijXQpnIh2TwoQOxwehi2PB0flKYP/b7HFv5nALBn5337d7ewshXZyuKX2PST8egUW76OE7EJFa+BhJ9bSsUWFaeTV3GKHbn8EvlB79bjSv4VO8jUr4VdiHNnK938MHPie0Yh+ZLqmGuNsJ7CNURgewI5qPoRE86GwkJyWIBIfcUfJrmMm0sclDyDnPWmLyADacl8jnRbEGKIoiJRP4EmU2LJmIDfLvAf7z/37mv6IUm08pzbV/rx5f1pPA1Fn/iX3eS3nekAslz7gcGw9bg3uqn6Rup5oH+uaTLpO4r0SmZVuUFE2lfTc+z1qr9+BVtGJqzq1RHNfQdAtnrEW75UwuXOFgvj3crpCyDu6UIpP9fPHZU5XkiYVXvsXIPcc+VwspzY2pPorE/NgCfYK+QJ5+QFA6fjQt2A4IWuIWODixe2ELcuIUNJGL+zQle92exY5pfDIaAAAAAElFTkSuQmCC"
					), a93(16, "apple", 3,
					"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"
					), a93(17, "loading", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEEAAAAKAQMAAADRpqGpAAAABlBMVEUAAAD///+l2Z/dAAAATklEQVQI12M48E/OzoinjoGB4cA/O3tjnn8g1iEjY+aeAxCWofGZBijLCMqqNzRKmQdhGRubNINZyeYQ1p9/yXbGMv9yG0AsG2OemtwGAJcsIuxbPF7gAAAAAElFTkSuQmCC"), a93(18, "target",
					7,
					"iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAJFBMVEXUAADLSwDYWli/eQCzlQGgswDloaGC0wAA/wBk5wDx09P///8NUBuBAAADWElEQVRYw62YvW/aUBDADwghTRakqoJuTBmSBamNSjcyJSMZotINZciQLCxVnQ1EkO0N1ET1iDJkgCViyGD/c7UN8bv37t5Hq96EbH6+j3fv3d2DgJPw52Uqd+y7AJhnP05hI6WTOyfksQ1IPnhWJLwAWUrfLYjfBSJfjIjfBkYaBoQnVAYjYRc08lWHXIBW+jwy0RNQijjErxsQqHJID4xyTpF7MwEVirQtCHxUkYmNEBEAVyVCDbgqEWq2SNcBgQ5GpsrLw+UqSZbPAzZoG2QovdpN/7+R5xaTNjkSSgt/lAiJJaYmkImOUJiSQHCu7CeJnjl/Q7Bdu4kqr6ploKTXLUGSJ8UykON1lDDSkmMGUrKUOSJZC+TdBvHFk2MWSQbSTkuRsUWJpCbKkaE2wIw3/RwRrqx0yKL4SzNDQsOa0LWpZcjU5rxkWSVDxna7sGVRisz4eMUay/op0uPilW2UQ6wVbU0I6owrm7Qqr5jV3AsgZFx5paa+iJCBSBcmPvvUmWoAU7oqKD8KzbGIMkzoF1vcHi0eBTB6+3nAbcMy/U4EM7IfF8Dt0iJkHoNI59AB+VAfhqqnsXwMkiifQ09FXiWkTJCOQJgQs48Z5EVGiPIOdFVk8f+Rvb9Hmv/iiyvCRYxfFzCti/vqk4SRc2yfybGZPmelAwEhI/JyzXmPk39MTIg5V4S5AdzTtwNmh8Wi9onjoswcjbv02Q5/jj3RYrtGh1LAFeMBKbYLUS1BNEkH6Ay/yh7ccNWimSJDtiItn2/wKR6jBgOCkUt9EWvlpci9qbMgcS9lVcy3F2RkVzWvyHW7ZWvcXgBurY6tdmX9ZYqMrFUc7TovR6ZgC8BC6kizTgksamK5hwO5T7w1e5K3yhkyBmOvhM+PaIv4YGr7cD9aLTrYtqm5xEdBs0DmuKCstM1oHuIt4oOWeaIDGTCDxY2yb5TRArjx5XDJTgnbAWaDhOqAWL6+vr5S55eaNPLMXUYeT0J8B6KqjG9DO9JXELuaGhlF546eICS0TJYNZqw2D8mViJv3e26DOEZMpjU0FxFTLbGjvSF50Dni6e9hfvHztGe67Xmw6qB3So/k0mMnst1c+acyceZyP/aI9uiJ53alFvy+/JTa9/7zt8j1Fs4ifwCmXBmOYkld0AAAAABJRU5ErkJggg=="
					), a93(19, "members", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABSVFGanJkA/wDMz8x4/3ey/7L///+GDHoaAAACZElEQVRIx9WWwYrjMAyGlVCYa6cs5JqGQh5gaObaDYU8QJnOA5SS66RN49dfSZZt2U2WZZeFXc9h2r9fZEmRJcPbLyz4d6GzMdM1/uXcG3PV0KehFVFnlh4Baoxdl8BEEkF7EcwUoN5pJ4HenRBMNV66C4QfxxI2nTKFhsYt5CgZC9FTawDIxbg4UKKUWevAuw1Aq/D7NUq6M9RbQ2zKhkwpKVnK2AWGRrCrc04lEpDfgyg1u8mh3EQqSGLoS5QXY/a4+XSKJIIwkkNQOIlTgFYUcQq59TuQcrwI0PDk+M3Hayh2+RcC1smkl3DDj1ltlMR5old38LutHT04l/BVAVfOSL9lnXelUBKaAltxt2gTv3Ft6w6k4sajdtf6zhLVHUHltzTwkIzvOUGf9PhOJJdVdphWS0YfFnJUCrVgISmdTVWVnVQa19+YV9VWKgohl2+MRUFKjaAXDX0tQCvt0+HPIJWnJajWGV9wPDPutPFhXs9CK+PLr1aJjSF+5aUzpOQY6mwZURWNCRRO9JZq43ikMtnog44v2LlojK1EW6n4zYXz4HqSb/gsty1qaWjAt5o7NAEiL7Jdu2vX7IqHLikEIYdzUJ5CZQQdJJcJ5GSE9i5tC1BNR4oadGub76ChwrZfKn48wTRXsGfrQvHFQr0dmy245o8nMYHGoxsToMZIAoWBA2qOzEMXmVJiK4nO2jn5oXju5yGZpn4Gf/QpNH08D+pn6O3vQqOGulkIX0+1fbXd93VT+dkXQe/SO3F1fkSnUBjgT7cEdVdJodkLTbNkKLr1NH1ApstPrkbnK/39B9e1H85NJPjxrK7zAAAAAElFTkSuQmCC"
					), a93(20, "hourglass", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABKTEqZm5gA/wDJzMh3/3iz/7L///+iyVF/AAACjklEQVRIx72W3aqyQBSGJwk6dceGTv1C8AJEO60QvACJLkDI02xPrtvf75pJ58cx2iffIqT0aWb9vGuNIrft0hSX8WqZ4Etxg9HM+G4zQVdatOcEdSSrqkr3juFOVdMwQXQUC7YmAyVLUPQZ1PxtJSJ5js7KX7j/+pKkNR5Y0RE9Ij/6JMPFRFfebt0cOmbD7dZOEOwQgn7ssnwOrf8rJAMp8KFSrnwormcQCR8S1HpQgT8qVVXnVCsJS/tQzlV4mMpmJLUCXOi4I2mgmnotOAfqcJPiCUIGNsMMunJdEqMjbP+cQQcOrx+hnZ0BA5XsuTQuPUxwBoLnZj98Oxq/LaiTHNK4G34MAQj7jfGhQqeIfgJQzm7ofELccUZ5CDpQjKBO3LbUr+gZhAo8QhMl8FoCb4IQhkvyUt7JWciBCnhUa5VkJkkexEtxQ3KjPvMlqKD7hk7fdF/bHnlQfoUU4LglgBCElVCP+ztIbQfDdXk7OL5jqH/juE7BA4pBUZr8XTJZMadoKZklKlxriMvSBqGO4m8ejJmuy5AH9aTqq02CbwPQlfeYDH94ziEWilqDW5xniiUWq6VUjs6szFTnat5SHYuXdcnGAcTZrINLrpmZGJnqqXY26WLONJ7rfqm5qfwh1vXckPahAh8HD/Imjzt7xJgACLe3oZ01xYQ1Mo/umWmGprBOjcQ96cyEEtacc89DrDx6PkJQrHSh2kjdgh4ulH0C7YIQuS8P3nYlDa9ecg33OpUF8TqnFyB9UitIVujsALSmqp6g+/5fHKVpxQfQqM6q2ier7X5joFdAMX++YrEyMc6hgP0RkuoVZbvfTqfU6gs/VbZG6M3bmn5fE0pxb6x1Ori4eNbkY3f+AriuYpjQCOoxAAAAAElFTkSuQmCC"
					), a93(21, "stalemate", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEoAAAAKAQMAAAApRlpeAAAABlBMVEUAAAD///+l2Z/dAAAAX0lEQVQI12P4/afiwJ+G9vnvDzD8/vPjwJ+D/SDmgYQTBw487mnmYYAwv4OZBUDmj/89zfwNDBWJfw78uDv/MJApAWQeODn/MFABR2LPgQMHZ4CYPxJ7/vwBMvkPIDEB8vo+S3L7oMwAAAAASUVORK5CYII="
					), a93(22, "logo", 8,
					"iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxMAAAsTAQCanBgAAATzaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTEyLTIzVDE0OjQ0OjQ2KzAzOjMwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyZTU0YWVlOS01ZDdhLWQ3NDgtYTRjYS0yODQ1NmQ1ZWFlZDYiIHhtcE1NOkRvY3Vt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"
					)
		}
	}, this.get = function(kh) {
		return gO[kh]
	}, this.a7O = function(name) {
		for (var a0 = v2.length - 1; 0 <= a0; a0--)
			if (v2[a0] === name) return gO[a0];
		return a8x
	}, this.pz = function() {
		return a8w <= 0
	}, this.a8z = function() {
		a8w = 0, a90()
	}
}

function cC() {
	var a9D, a9E, a9F, a9G, a9H, a9I, a9J, a9K, a9L, a9M, a9N, a9A = [224, 224, 224],
		a9B = [
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
		a9C = [
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

	function a9j(f7, a9l) {
		a5m[f7] = 0, a5m[f7 + 1] = 0, a5m[f7 + 2] = a9l, a5m[f7 + 3] = 0, a9m(f7)
	}

	function a9m(f7) {
		var fi;
		bQ.lo || (fi = aS.ky(f7), f7 = aS.kz(f7), bQ.lo = fi >= bP.a5l[0] && fi <= bP.a5l[2] && f7 >= bP.a5l[1] && f7 <= bP.a5l[3])
	}
	this.dG = function(t7) {
		if (a9D = new Uint8Array(a2.f4), a9E = new Uint8Array(a2.f4), a9F = new Uint8Array(a2.f4), a9G = new Uint8Array(a2.f4), a9H = new Uint8Array(a2.f4), a9I = new Uint8Array(a2.f4), a9J = new Uint8Array(a2.f4), a9K = new Uint8Array(a2.f4),
			a9L = new Uint8Array(a2.f4), a9M = new Uint8Array(a2.f4), this.a2U = new Uint8Array(a2.f4), (a9N = new Int32Array(4))[0] = -4 * bI.eV, a9N[1] = 4, a9N[2] = -a9N[0], a9N[3] = -a9N[1], a2.ho)
			for (var jc, io, a0 = a2.f4 - 1; 0 <= a0; a0--) io = bV.v0[bV.ip[a0]], jc = bB.eo((a9C[io][3] + 1) * ao.random(), ao.value(100)), a9D[a0] = a9B[io][0] + jc * a9C[io][0], a9E[a0] = a9B[io][1] + jc * a9C[io][1], a9F[a0] = a9B[io][2] +
				jc * a9C[io][2];
		else ay.jA && ay.jB.a9U ? function(e8) {
			var a0;
			for (a0 = a2.sR - 1; 0 <= a0; a0--) a9D[a0] = 4 * e8[a0][0], a9E[a0] = 4 * e8[a0][1], a9F[a0] = 4 * e8[a0][2]
		}(ay.jB.a9U) : (function() {
			for (var a0 = a2.f4 - 1; a0 >= a2.is; a0--) a9D[a0] = 4 * bB.eo(64 * ao.random(), ao.value(100)), a9E[a0] = 4 * bB.eo(64 * ao.random(), ao.value(100)), a9F[a0] = 4 * bB.eo(64 * ao.random(), ao.value(100))
		}(), function(t7) {
			for (var a0 = a2.is - 1; 0 <= a0; a0--) a9D[a0] = 4 * t7[a0].a8l[0], a9E[a0] = 4 * t7[a0].a8l[1], a9F[a0] = 4 * t7[a0].a8l[2]
		}(t7));
		! function() {
			var a0, f9;
			for (a0 = a2.f4 - 1; 0 <= a0; a0--) f9 = bB.eo(a9D[a0] + a9E[a0] + a9F[a0], 3), a9D[a0] += a9d(f9 - a9D[a0], 2), a9E[a0] += a9d(f9 - a9E[a0], 2), a9F[a0] += a9d(f9 - a9F[a0], 2), a9D[a0] -= a9D[a0] % 4, a9E[a0] -= a9E[a0] % 4, a9F[
				a0] -= a9F[a0] % 4
		}(),
		function() {
			for (var a0 = a2.f4 - 1; 0 <= a0; a0--) a9D[a0] += bB.eo(a0, 128), a9E[a0] += bB.eo(a0 % 128, 32), a9F[a0] += bB.eo(a0 % 32, 8), a9G[a0] = a0 % 8
		}(), this.a9a(),
			function() {
				for (var a0 = a2.f4 - 1; 0 <= a0; a0--) a9H[a0] = a9D[a0] < 32 ? a9D[a0] + 32 : a9D[a0] - 32, a9I[a0] = a9E[a0] < 32 ? a9E[a0] + 32 : a9E[a0] - 32, a9J[a0] = a9F[a0] < 32 ? a9F[a0] + 32 : a9F[a0] - 32
			}(),
			function() {
				for (var a0 = a2.f4 - 1; 0 <= a0; a0--) a9K[a0] = 235 < a9D[a0] ? a9D[a0] - 20 : a9D[a0] + 20, a9L[a0] = 235 < a9E[a0] ? a9E[a0] - 20 : a9E[a0] + 20, a9M[a0] = 235 < a9F[a0] ? a9F[a0] - 20 : a9F[a0] + 20
			}()
	}, this.a1V = function(player) {
		var e8 = bE.e1;
		return e8[0] = a9D[player], e8[1] = a9E[player], e8[2] = a9F[player], e8
	}, this.a9a = function() {
		for (var a0 = a2.f4 - 1; 0 <= a0; a0--) this.a2U[a0] = a9D[a0] + a9E[a0] + a9F[a0] < 280 ? 0 : 1
	}, this.ky = function(f7) {
		return bB.eo(f7, 4) % bI.eV
	}, this.kz = function(f7) {
		return bB.eo(f7, 4 * bI.eV)
	}, this.sY = function(fi, fj) {
		return Math.floor(4 * (fj * bI.eV + fi))
	}, this.sn = function(f7) {
		return this.s6(f7 + a9N[0]) || this.s6(f7 + a9N[1]) || this.s6(f7 + a9N[2]) || this.s6(f7 + a9N[3])
	}, this.sl = function(f7, player) {
		return this.a9e(f7 + a9N[0], player) || this.a9e(f7 + a9N[1], player) || this.a9e(f7 + a9N[2], player) || this.a9e(f7 + a9N[3], player)
	}, this.uY = function(player) {
		return player < a2.is && 2 !== aX.y6[player]
	}, this.fA = function(f7) {
		return 208 <= a5m[f7 + 3]
	}, this.ss = function(player, f7) {
		return this.fA(f7) && this.a9f(player, f7)
	}, this.a9f = function(player, f7) {
		return player === this.fB(f7)
	}, this.a9g = function(f7) {
		return 208 <= a5m[f7 + 3] && a5m[f7 + 3] < 224
	}, this.hx = function(f7) {
		return 224 <= a5m[f7 + 3] && a5m[f7 + 3] < 248
	}, this.sm = function(f7) {
		for (var a0 = 3; 0 <= a0; a0--)
			if (this.g6(f7 + a9N[a0])) return !0;
		return !1
	}, this.a9h = function(f7) {
		return 192 <= a5m[f7 + 3] && a5m[f7 + 3] < 208
	}, this.a9i = function(f7, player) {
		return this.a9h(f7) && player === this.fB(f7)
	}, this.f2 = function(f7) {
		return this.fA(f7) || this.fC(f7)
	}, this.g6 = function(f7) {
		return 0 === a5m[f7 + 3] && 2 === a5m[f7 + 2]
	}, this.fC = function(f7) {
		return 0 === a5m[f7 + 3] && 1 === a5m[f7 + 2]
	}, this.s6 = function(f7) {
		return 0 === a5m[f7 + 3] && 3 === a5m[f7 + 2]
	}, this.g5 = function(f7) {
		return this.s6(f7)
	}, this.a9e = function(f7, player) {
		return this.fC(f7) || this.fA(f7) && player !== this.fB(f7)
	}, this.fB = function(f7) {
		return a5m[f7] % 4 * 128 + a5m[f7 + 1] % 4 * 32 + a5m[f7 + 2] % 4 * 8 + a5m[f7 + 3] % 8
	}, this.st = function(f7) {
		a9j(f7, 1)
	}, this.a9k = function(f7) {
		a9j(f7, 2)
	}, this.sk = function(f7, player) {
		a5m[f7] = a9D[player], a5m[f7 + 1] = a9E[player], a5m[f7 + 2] = a9F[player], a5m[f7 + 3] = 208 + a9G[player], a9m(f7)
	}, this.f3 = function(f7, player) {
		a5m[f7] = a9H[player], a5m[f7 + 1] = a9I[player], a5m[f7 + 2] = a9J[player], a5m[f7 + 3] = 224 + a9G[player], a9m(f7)
	}, this.hy = function(f7, player) {
		a5m[f7] = a9K[player], a5m[f7 + 1] = a9L[player], a5m[f7 + 2] = a9M[player], a5m[f7 + 3] = 248 + a9G[player], a9m(f7)
	}, this.a9n = function(f7, player) {
		a5m[f7] = a9A[0] + a9D[player] % 4, a5m[f7 + 1] = a9A[1] + a9E[player] % 4, a5m[f7 + 2] = a9A[2] + a9F[player] % 4, a5m[f7 + 3] = 192 + a9G[player], a9m(f7)
	}
}

function cD() {
	var v2, ey, f0, a9o, a9p;

	function a9u() {
		for (var aA2 = 0, a0 = 1; a0 < 5; a0++) aA2 += ey[a0] % 1024;
		return aA2
	}

	function a9t() {
		for (var a0 = 1; a0 < f0 - a9p; a0++) ey[a0] = parseInt(ey[a0])
	}

	function a9v() {
		ey[0] = "Player " + Math.floor(1e3 * Math.random()), ey[1] = an.u < an.iH ? Math.floor(1 + Math.random() * (Math.pow(2, 30) - 1)) : 0, ey[2] = 1, ey[3] = 1, ey[4] = an.u < an.iH ? 0 : 1, ey[5] = 0, ey[6] = "000", ey[7] = "0", ey[8] = "0", ey[
			9] = "0", aT.a9w()
	}

	function a9s() {
		for (var a0 = f0 - a9p - 1; 0 <= a0; a0--) ey[a0] = a9.uG(ey[a0]);
		ey[0] = a9.uE(ey[0])
	}

	function aA5(name, value, aA6) {
		var xF = new Date,
			aA6 = (xF.setTime(xF.getTime() + Math.floor(31536e6 * aA6)), name + "=" + value + ";expires=" + xF.toUTCString() + ";SameSite=Strict;Secure;path=/");
		document.cookie = aA6
	}
	this.dG = function() {
		if (0 === m.id) {
			a9p = 4, v2 = [], f0 = 10;
			for (var a0 = a9o = 0; a0 < f0; a0++) v2.push("u" + a0);
			ey = new Array(f0), ! function(aA3) {
				for (var i1, f7, aA4 = aA3.split(";"), a0 = aA4.length - 1; 0 <= a0; a0--) {
					for (aA4[a0] = aA4[a0].trim(), i1 = 2; 0 <= i1; i1--) aA4[a0] = aA4[a0].replace(" ", "");
					3 < aA4[a0].length && (i1 = v2.indexOf(aA4[a0].substring(0, 2)), f7 = aA4[a0].indexOf("="), 0 <= i1 && 2 === f7 ? ey[i1] = aA4[a0].substring(f7 + 1, aA4[a0].length) : 0 < f7 && aA5(aA4[a0].substring(0, f7), "0", 0))
				}
			}(document.cookie), ey[9] || (ey[9] = "0"), (! function() {
				for (var a0 = f0 - 1; 0 <= a0; a0--)
					if (void 0 === ey[a0]) return;
				return 1
			}() || (a9o = 2, a9s(), a9t(), a9u() !== ey[5])) && a9v()
		}
	}, this.a9w = function() {
		if (2 === a9o) {
			ey[1] = 0 === ey[1] ? Math.floor(1 + Math.random() * (Math.pow(2, 30) - 1)) : ey[1], ey[5] = a9u(), ! function() {
				for (var a0 = 1; a0 < f0 - a9p; a0++) ey[a0] = ey[a0].toString()
			}(), ! function() {
				ey[0] = a9.uD(ey[0]);
				for (var a0 = f0 - a9p - 1; 0 <= a0; a0--) ey[a0] = a9.uF(ey[a0])
			}();
			for (var a0 = f0 - 1; 0 <= a0; a0--) aA5(v2[a0], ey[a0], 1);
			a9s(), a9t()
		}
	}, this.a9o = function() {
		return a9o
	}, this.aA0 = function(i1) {
		a9o = i1, this.a9w()
	}, this.aA1 = function(a0, value) {
		0 === m.id && (ey[a0] = value)
	}, this.vr = function(a0) {
		return 0 !== m.id ? 0 : ey[a0]
	}
}

function cb() {
	var kh = 0,
		aA7 = new Uint16Array(32);

	function remove(zX) {
		var a0;
		for (kh -= 2, a0 = zX; a0 < kh; a0 += 2) aA7[a0] = aA7[a0 + 2], aA7[a0 + 1] = aA7[a0 + 3]
	}
	this.dG = function() {
		kh = 0
	}, this.hd = function() {
		var a0, hu, h8;
		if (0 !== kh)
			if (0 === aX.kZ[a2.ev] || aU.aA8(a2.ev) === aU.ea(a2.ev)) kh = 0;
			else
				for (a0 = kh - 2; 0 <= a0; a0 -= 2)(hu = aA7[a0]) < a2.f4 && 0 === aX.kZ[hu] ? remove(a0) : (h8 = aA7[a0 + 1], (hu >= a2.f4 && aA9(a2.ev) || hu < a2.f4 && aAA(a2.ev, hu)) && (b0.g3.gC(h8, hu), remove(a0)))
	}, this.gE = function(hu, h8) {
		! function(hu, h8) {
			var a0;
			for (a0 = 0; a0 < kh; a0 += 2)
				if (aA7[a0] === hu) return aA7[a0 + 1] = Math.min(aA7[a0 + 1] + h8, 1023), 1;
			return
		}(hu, h8) && 32 !== kh && (aA7[kh] = hu, aA7[kh + 1] = h8, kh += 2)
	}
}

function aAC(player) {
	aAD(player), aAE(player), aAF(player), a4.eu(player), a6.kj(player), aU.clear(player), bD.aAG.aAH(player)
}

function aAD(player) {
	aS.uY(player) && (aX.vK[player] = bX.vE.aAI(), a2.uh++);
	var aAJ = aU.aAK(player);
	0 === aAJ.length ? b2.eq.y7(player) && aAL() : (aAM(player, aAJ), aAN(player, aAJ))
}

function aAL() {
	bS.ey[17] += aX.ew[a2.ev] + aU.aAO(a2.ev), aM.show(!1, !1, !1, !0), aL.a50(), bH.result.vO()
}

function aAM(player, aAJ) {
	for (var a0 = aAJ.length - 1; 0 <= a0; a0--) aU.aAP(aAJ[a0], player)
}

function aAQ(aAJ) {
	for (var kh = 0, a0 = aAJ.length - 1; 1 <= a0; a0--) aX.es[aAJ[a0]] > aX.es[aAJ[kh]] && (kh = a0);
	return kh
}

function aAN(player, aAJ) {
	var a0, a13, aAR = aAJ[aAQ(aAJ)];
	if (9 === a2.jE && 1 === bV.ip[player] && ao.ii(8) && ap.aAS(aAR), b2.eq.y7(player)) aC.ur(aAR, 1), aAL();
	else {
		for (a13 = !1, a0 = aAJ.length - 1; 0 <= a0; a0--)
			if (b2.eq.y7(aAJ[a0])) return a13 = !0, void aC.ur(player, 0);
		!a13 && player < a2.is && 2 !== aX.y6[player] && aC.a0m(0, player, aAR)
	}
}

function aAF(player) {
	aX.kZ[player] = aX.ew[player] = 0, aX.f1[player] = null, aX.fI[player] = null, aX.fJ[player] = null, aX.fM[player] = null
}

function aAE(player) {
	for (var f7, fj, fi = aX.hN[player]; fi >= aX.hM[player]; fi--)
		for (fj = aX.hP[player]; fj >= aX.hO[player]; fj--) f7 = 4 * (fj * bI.eV + fi), aS.ss(player, f7) && (aS.st(f7), aX.es[player]--)
}

function cg() {
	var input;

	function aAT(d) {
		aAV(d.target.files)
	}

	function aAV(files) {
		files && 0 < files.length && ax.aAW(files[0])
	}

	function aAb(d) {
		var io = new Image;
		io.onload = aAc, io.src = d.target.result
	}

	function aAc(d) {
		var aAd, d = d.target,
			u = d.width,
			iH = d.height;
		4096 < u || 4096 < iH || u < 10 || iH < 10 ? (aAd = "Image w & h must be between 10 and 4096.", m.t ? m.t.showToast(aAd) : alert(aAd)) : (ay.wk(), bI.sF = bI.aAa(), bI.a8B = 0, bI.eV = u, bI.eW = iH, bI.ru.width = bI.eV, bI.ru.height = bI.eW,
			bI.rq.drawImage(d, 0, 0), aAd = bI.rq.getImageData(0, 0, bI.eV, bI.eW), bI.rv = aAd.data)
	}

	function aAe(d) {
		d.stopPropagation(), d.preventDefault()
	}

	function aAf() {
		return 0 === aP.vz() || 2 === aP.vz()
	}
	this.dG = function() {
		(input = document.createElement("input")).type = "file", input.setAttribute("accept", ".json, .png, .jpg, .gif, .jpeg"), input.onchange = aAT
	}, this.a8n = function() {
		input.click()
	}, this.aAU = function(d) {
		aAT(d)
	}, this.aAW = function(aAX) {
		var e8 = aAX.name.split("."),
			aAY = e8[e8.length - 1].toLowerCase();
		"json" === aAY ? ay.qk(aAX) : "gif" !== aAY && "jpg" !== aAY && "jpeg" !== aAY && "png" !== aAY || (bI.jB.sE[bI.aAa()].name = e8[0], (aAY = new FileReader).onload = aAb, aAY.readAsDataURL(aAX))
	}, this.wT = function(d) {
		aAf() && (aAe(d), d.dataTransfer.dropEffect = "copy")
	}, this.wU = function(d) {
		aAf() && (aAe(d), aAV(d.dataTransfer.files))
	}
}

function ce() {
	this.aAg = null, this.dG = function() {
		10 !== a2.jE ? this.aAg = null : this.aAg = new Uint32Array(a2.f4)
	}, this.hd = function() {
		10 === a2.jE && this.w5()
	}, this.w5 = function() {
		for (var f7, target, a5A, aAg = this.aAg, t7 = iv, yB = aX.ew, a0 = it - 1; 0 <= a0; a0--)(f7 = t7[a0]) >= a2.is || (target = Math.max(bB.eo(yB[f7], 4), 2048), a5A = Math.max(aV.a5B(f7), 100), aAg[f7] += bB.eo(a5A * target, 1e4), aAg[
			f7] > target && (aAg[f7] = target))
	}, this.yG = function(player, hv) {
		return hv > this.aAg[player] ? (hv = this.aAg[player], this.aAg[player] = 0) : this.aAg[player] -= hv, hv
	}
}

function ch() {
	function aAb(d) {
		ay.jA = !0, ay.aAm(JSON.parse(d.target.result)), ay.uj()
	}

	function aAs(oG, min, max, aB1) {
		return "string" != typeof oG || oG.length < min ? aB1 : oG.length > max ? oG.substring(0, max) : oG
	}

	function aAn(du, min, max) {
		return du = "number" == typeof du ? Math.floor(du) : min, Math.min(Math.max(du, min), max)
	}

	function aAq(du, qi) {
		return "boolean" == typeof du ? du : qi
	}

	function aAu(du, f0, max, aB3) {
		var a0, e8, jc;
		if (!Array.isArray(du) || du.length < 1) return null;
		for (e8 = new(8 === aB3 ? Uint8Array : Uint16Array)(f0), jc = du.length, a0 = 0; a0 < f0; a0++) e8[a0] = aAn(du[a0 % jc], 0, max);
		return e8
	}
	this.jA = !1, this.jB = null, this.wk = function() {
		this.jA = !1, this.jB = null
	}, this.a8k = function() {
		this.jB.a9U && this.jB.aAh && (this.jB.a9U[0] = b2.color.xg(bY.kB.r3())), a2.z1(this.jB.aAi, 0, this.aAj(), this.jB.z4, !1, !1)
	}, this.aAj = function() {
		return [{
			name: this.jB.aAk ? bY.dY.data[122].value : this.jB.aAl[0],
			a8l: [0, 0, 0],
			a8m: 0
		}]
	}, this.qk = function(aAX) {
		var aAZ = new FileReader;
		aAZ.onload = aAb, aAZ.readAsText(aAX)
	}, this.aAm = function(oP) {
		this.jB = {}, this.jB.a8i = aAn(oP.numberPlayers, 1, 512), this.jB.aAo = aAn(oP.modeID, 0, 1), this.jB.sF = aAn(oP["gMap.mapID"], 0, bI.aAp - 1), this.jB.a8F = aAn(oP.seedMap, 0, 16383), this.jB.aAi = aAn(oP.seedSpawn, 0, 16383), this.jB
			.z7 = aAq(oP.selectableSpawn, !1), this.jB.aAk = aAq(oP.selectableName, !1), this.jB.aAh = aAq(oP.selectableColor, !1), bI.jB.sE[bI.aAa()].name = this.jB.aAr = aAs(oP.mapName, 1, 25, "Custom Map"), this.jB.a0R = function(du) {
				var a0, f0;
				if (!Array.isArray(du) || du.length < 1) return [];
				for (f0 = du.length, a0 = 0; a0 < f0; a0++) du[a0] = aAs(du[a0], 0, 100, "");
				return du
			}(oP.description), this.jB.sM = aAu(oP.playerX, this.jB.a8i, 4096, 16), this.jB.sX = aAu(oP.playerY, this.jB.a8i, 4096, 16), this.jB.aAv = aAu(oP.playerTeam, this.jB.a8i, 8, 8), this.jB.jC = aAu(oP.playerStrength, this.jB.a8i, 5, 8),
			this.jB.a9U = function(du, f0) {
				var a0, e8, jc;
				if (!Array.isArray(du) || du.length < 1) return null;
				for (e8 = new Array(f0), jc = du.length, a0 = 0; a0 < f0; a0++) e8[a0] = aAu(du[a0 % jc], 3, 63, 8);
				return e8
			}(oP.playerColor, this.jB.a8i), this.jB.aAl = function(du, f0) {
				var a0, e8, jc;
				if (!Array.isArray(du) || du.length < 1) return null;
				for (e8 = new Array(f0), jc = du.length, a0 = 0; a0 < f0; a0++) e8[a0] = aAs(du[a0 % jc], 3, 26, "Bot");
				return e8
			}(oP.playerName, this.jB.a8i), this.jB.aAy = "string" == typeof oP.mapBase64 ? oP.mapBase64 : "", this.jB.aAk = this.jB.aAk || !this.jB.aAl, this.jB.z4 = 0 === this.jB.aAo ? 7 : 2 === this.jB.aAo ? 9 : 6, this.jB.sM = this.jB.sX ?
			this.jB.sM : null
	}, this.uj = function() {
		! function(oG) {
			var gO, gL, aB0 = "data:image/png;base64,";
			if (oG.length <= aB0.length) return;
			ay.jB.sF = 0, ay.jB.a8F = 0, bI.w(0, 0), oG.substring(0, aB0.length) !== aB0 && (oG = aB0 + oG);
			return (gO = new Image).onload = function() {
				bI.eV = gO.width, bI.eW = gO.height, 4096 < bI.eV || 4096 < bI.eW || bI.eV < 10 || bI.eW < 10 ? (bI.w(0, 0), alert("Image w & h must be between 10 and 4096.")) : (bI.sF = bI.aAa(), bI.a8B = 0, bI.ru.width = bI.eV, bI.ru
					.height = bI.eW, bI.rq.drawImage(gO, 0, 0), gL = bI.rq.getImageData(0, 0, bI.eV, bI.eW), bI.rv = gL.data)
			}, gO.src = oG, ay.jB.aAy = "", 1
		}(this.jB.aAy) && bI.w(this.jB.sF, this.jB.a8F)
	}, this.aB4 = function() {
		for (var max = 0, f0 = this.jB.a8i, a0 = 0; a0 < f0; a0++) this.jB.aAv[a0] > max && (max = this.jB.aAv[a0]);
		return Math.max(0, max - 1)
	}
}

function cE() {
	var aB5, aB6, size, hu, hv, id, aB7;

	function aB8(player) {
		return player < a2.is ? aB5 * player : aB5 * a2.is + aB6 * (player - a2.is)
	}
	this.dG = function() {
		aB5 = a2.is < 16 ? 12 : 8, aB6 = 4;
		var f0 = aB8(a2.f4);
		size = new Uint8Array(a2.f4), hu = new Uint16Array(f0), hv = new Uint32Array(f0), id = new Uint16Array(f0), aB7 = new Uint8Array(f0)
	}, this.o7 = function(a22, aB9) {
		var aBA = this.fe(a22, aB9);
		this.fd(a22, aB9, 0), aBA = b2.eq.nP(a22, aBA), a22 === a2.ev && (bS.ey[13] -= aBA)
	}, this.clear = function(player) {
		size[player] = 0
	}, this.aAP = function(player, aB9) {
		var aBC, aB9 = function(player, aB9) {
			var a0, jc = aB8(player);
			for (a0 = size[player] - 1; 0 <= a0; a0--)
				if (0 === id[jc + a0] && hu[jc + a0] === aB9) return a0;
			return size[player]
		}(player, aB9);
		aB9 !== size[player] && (aBC = hv[aB8(player) + aB9], this.ez(player, aB9), this.hr(player, aBC, a2.f4))
	}, this.i9 = function(player, aB9) {
		for (var jc = aB8(player), a0 = size[player] - 1; 0 <= a0; a0--)
			if (0 === id[jc + a0] && hu[jc + a0] === aB9) return !0;
		return !1
	}, this.iS = function(player) {
		return player < a2.is ? size[player] < aB5 : size[player] < aB6
	}, this.ea = function(player) {
		return size[player]
	}, this.eg = function(player, a0) {
		return hu[aB8(player) + a0]
	}, this.eb = function(player, a0) {
		return id[aB8(player) + a0]
	}, this.l3 = function(player, aBD) {
		for (var jc = aB8(player), a0 = size[player] - 1; 0 <= a0; a0--)
			if (id[jc + a0] === aBD) return a0;
		return -1
	}, this.eh = function(player, a0) {
		return hv[aB8(player) + a0]
	}, this.fe = function(player, aB9) {
		for (var jc = aB8(player), a0 = size[player] - 1; 0 <= a0; a0--)
			if (0 === id[jc + a0] && hu[jc + a0] === aB9) return hv[jc + a0];
		return 0
	}, this.aAO = function(player) {
		for (var jc = aB8(player), du = 0, a0 = size[player] - 1; 0 <= a0; a0--) du += hv[jc + a0];
		return du
	}, this.aBE = function(player) {
		for (var jc = aB8(player), du = 0, a0 = size[player] - 1; 0 <= a0; a0--) 0 === id[jc + a0] && (du += hv[jc + a0]);
		return du
	}, this.aA8 = function(player) {
		for (var jc = aB8(player), jO = 0, a0 = size[player] - 1; 0 <= a0; a0--) 0 < id[jc + a0] && jO++;
		return jO
	}, this.fd = function(player, aB9, aBC) {
		for (var jc = aB8(player), a0 = size[player] - 1; 0 <= a0; a0--) 0 === id[jc + a0] && hu[jc + a0] === aB9 && (hv[jc + a0] = aBC)
	}, this.fP = function(player, a0, aBC) {
		hv[aB8(player) + a0] = Math.max(aBC, 0)
	}, this.fQ = function(player, a0) {
		aB7[aB8(player) + a0] = 0
	}, this.ei = function(player, a0) {
		return aB7[aB8(player) + a0]
	}, this.hr = function(player, aBC, aB9) {
		var a0, jc = aB8(player);
		for (aB9 === a2.ev && bS.ey[player < a2.is ? 6 : 5]++, a0 = size[player] - 1; 0 <= a0; a0--)
			if (0 === id[jc + a0] && hu[jc + a0] === aB9) return hv[jc + a0] += aBC, void(hv[jc + a0] = hv[jc + a0] > a2.yC ? a2.yC : hv[jc + a0]);
		hu[jc + size[player]] = aB9, hv[jc + size[player]] = aBC, id[jc + size[player]] = 0, aB7[jc + size[player]] = 1, size[player]++, player < a2.is && (aB9 === a2.ev ? aC.ur(player, 5) : player === a2.ev && aW.a0o(aB9))
	}, this.aBF = function(player, aBC, aBD) {
		var jc = aB8(player);
		aX.kZ[player] = 2, hu[jc + size[player]] = 0, hv[jc + size[player]] = aBC, id[jc + size[player]] = aBD, aB7[jc + size[player]] = 0, size[player]++
	}, this.ez = function(player, kh) {
		var i1, jc;
		if (0 !== size[player])
			for (jc = aB8(player), size[player]--, i1 = kh; i1 < size[player]; i1++) hu[jc + i1] = hu[jc + i1 + 1], hv[jc + i1] = hv[jc + i1 + 1], id[jc + i1] = id[jc + i1 + 1], aB7[jc + i1] = aB7[jc + i1 + 1]
	}, this.aAK = function(player) {
		for (var i1, jc, aAJ = [], a0 = it - 1; 0 <= a0; a0--)
			for (jc = aB8(iv[a0]), i1 = size[iv[a0]] - 1; 0 <= i1; i1--)
				if (0 === id[jc + i1] && hu[jc + i1] === player) {
					aAJ.push(iv[a0]);
					break
				} return aAJ
	}
}

function cF() {
	var aBG, aBH, aBI, aBJ, aBK, aBL;
	this.dG = function() {
		aBI = aBG = 10, aBJ = aBH = 10
	}, this.dM = function() {
		aBL = 512, aBK = new Uint16Array(aBL);
		for (var a0 = 0; a0 < aBL; a0++) aBK[a0] = 100 + aBM(bB.eo(25600 * a0, aBL - 4), 9)
	}, this.a3y = function() {
		return aBJ
	}, this.hd = function() {
		if (--aBI <= 0 && (aBI = aBG, function() {
				var a0, aBR, ds = aX.ew[a2.ev];
				for (a2.jG && !a2.ho && 0 !== aX.kZ[0] && 0 === aQ.jI[0].f9 && (aX.ew[0] += bB.eo(aX.es[0], 6)), a0 = it - 1; 0 <= a0; a0--) aBR = bB.eo(aV.a5B(iv[a0]) * aX.ew[iv[a0]], 1e4), aX.ew[iv[a0]] += aBR < 1 ? 1 : aBR, aV.ex(iv[a0]);
				bS.ey[9] += aX.ew[a2.ev] - ds
			}(), --aBJ <= 0)) {
			aBJ = aBH;
			for (var ds = aX.ew[a2.ev], a0 = it - 1; 0 <= a0; a0--) aX.ew[iv[a0]] += aX.es[iv[a0]], aV.ex(iv[a0]);
			bS.ey[8] += aX.ew[a2.ev] - ds
		}
	}, this.a5B = function(player) {
		var gR = aBK[bB.eo((aBL - 1) * aX.es[player], a2.iY)],
			aBQ = (bU.et() < 1920 && (gR = gR < (aBQ = bB.eo(100 * (13440 - 6 * bU.et()), 1920)) ? aBQ : gR), this.iU(player));
		return aX.ew[player] > aBQ && (gR -= bB.eo(2 * gR * (aX.ew[player] - aBQ), aBQ)), gR < 0 ? 0 : 700 < gR ? 700 : gR
	}, this.iU = function(player) {
		player = 100 * aX.es[player];
		return player > a2.yx ? a2.yx : player
	}, this.ex = function(player) {
		var du = aX.es[player] * a2.iz;
		aX.ew[player] = Math.min(Math.min(aX.ew[player], a2.yC), du)
	}, this.n1 = function(player, n2) {
		b2.eq.nP(n2, bE.dz[0]), bS.nQ(player, n2), aW.aBT(player, bE.dz[0] + bE.dz[1]), aW.nR(n2, bE.dz[0]), b2.eq.ny(player)
	}, this.aBU = function() {
		for (var f0 = it, t7 = iv, jc = 0, yB = aX.ew, a0 = 0; a0 < f0; a0++) jc += yB[t7[a0]];
		return jc
	}, this.aBV = function(ve) {
		for (var f7, f0 = it, t7 = iv, jc = 0, yB = aX.ew, ip = bV.ip, a0 = 0; a0 < f0; a0++) ip[f7 = t7[a0]] === ve && (jc += yB[f7]);
		return jc
	}
}

function cH() {
	var aBW, aBX, aBY, aBZ, aBa, aBb, aBc, aBd, aBe, aBf, aBg, aBh, aBi, aBj, aBk, aBl, aBm, aBn, aBp, aBq, a6A, aBr, aBs, aBy, aBz, aBo = null,
		aBu = 0,
		aBv = !1,
		aBw = new Float32Array(4),
		aBx = 0,
		a4R = 400;

	function oZ() {
		aBe = Math.floor(+an.oX), aBf = Math.floor(.5 * aBe), aBo.width = an.u, aBo.height = an.iH, aBp = aBo.getContext("2d", {
			alpha: !0
		}), b2.kw.textAlign(aBp, 1), b2.kw.textBaseline(aBp, 1), aBp.imageSmoothingEnabled = !0
	}

	function aC0() {
		var a0, aC5;
		for (kx.font = b2.kw.l1(1, 100 * aBg), aC5 = 80 / Math.floor(kx.measureText(b2.l4.l5(a2.yC)).width), kx.font = b2.kw.l1(1, 100), a0 = a2.f4 - 1; 0 <= a0; a0--) aBd[a0] = 100 / Math.floor(kx.measureText(aX.l6[a0]).width), aBc[a0] = Math.min(
			aC5, aBd[a0])
	}

	function aC6(a0) {
		return !bY.dY.data[7].value || aX.ew[a0] < 1e6 ? 1 : aX.ew[a0] < 1e7 ? aBw[0] : aBw[Math.min(Math.floor(Math.log10(aX.ew[a0])) - 6, 3)]
	}

	function aC4(gP) {
		aBn = !1, aBm = 1, aBk = aBl = 0, gP.clearRect(0, 0, an.u, an.iH);
		for (var kp, kq, a0, aCB, fontSize, kr, ks = h9 / hA, kt = hB / hA, ku = (an.u + h9) / hA, kv = (an.iH + hB) / hA, aCC = 0 !== aX.kZ[a2.ev] && aS.uY(a2.ev), i1 = it - 1; 0 <= i1; i1--) a0 = iv[i1], (fontSize = Math.floor(aBj * hA * aC6(a0) *
			aBc[a0] * aBa[a0])) < aBi || aBe <= fontSize || aBY[a0] + aBa[a0] > ks && aBY[a0] < ku && aBZ[a0] + aBb[a0] > kt && aBZ[a0] < kv && (kp = Math.floor(an.u * (aBY[a0] + aBa[a0] / 2 - ks) / (ku - ks)), kq = Math.floor(an.iH * (aBZ[a0] +
			aBb[a0] / 2 - kt) / (kv - kt) - .1 * fontSize), aCB = aS.a2U[a0], gP.font = b2.kw.l1(1 === aX.y6[a0] ? 4 : 1, fontSize), gP.fillStyle = aCD(fontSize, aCB % 2), bY.dY.data[7].value ? aCE(gP, a0, fontSize, kp, kq, aCB) : aCF(a0,
			fontSize, kp, kq, gP), aBn = !0, 0 < a6A[a0] ? function(kp, kq, fontSize, a0, gP) {
			0 === iZ[a0] ? aa.tH.tv(aBq[a0]) ? (function(kp, kq, fontSize, player, nD, gP) {
				for (var sQ = kq, gN = (gP.globalAlpha = aCN(fontSize), aC6(player) * (bY.dY.data[7].value ? aBx : aBd[player])), sP = kp - .5 * fontSize / gN - .9 * fontSize, i7 = 0; i7 < 2; i7++) gP.fillText(aa.tH.tp(nD), sP, sQ),
					sP = kp + .5 * fontSize / gN + .9 * fontSize;
				gP.globalAlpha = 1
			}(kp, kq, fontSize, a0, aBq[a0], gP), aCH(kp, kq, fontSize, 0, 0, gP)) : aa.tH.tx(aBq[a0]) ? (aCQ(kp, kq, fontSize, aBq[a0], 0, gP), aCH(kp, kq, fontSize, 0, 1, gP)) : (aCQ(kp, kq, fontSize, aBq[a0], 1, gP), aCH(kp, kq,
				fontSize, 1, 0, gP)) : aCQ(kp, kq, fontSize, aBq[a0], 0, gP)
		}(kp, kq, fontSize, a0, gP) : 0 === iZ[a0] && aCH(kp, kq, fontSize, 0, 0, gP), aCC && (0 < a6A[a0 + a2.f4] || 0 < a6A[a0 + 2 * a2.f4] || 0 < a6A[a0 + 3 * a2.f4] || 0 < a6A[a0 + 4 * a2.f4]) && function(kp, kq, fontSize, a0, gP) {
			var io, jO = -1;
			for (io = 4; 1 <= io; io--) 0 < a6A[a0 + io * a2.f4] && jO++;
			for (io = 1; io < 5; io++) 0 < a6A[a0 + io * a2.f4] && (! function(kp, kq, fontSize, io, a0, aCL, ds, gP) {
				var xb;
				if (1 === io) {
					a0 = aBq[a0 + a2.f4];
					if (!aa.tH.tw(a0)) return function(kp, kq, fontSize, nD, aCL, gP) {
						gP.globalAlpha = aCN(fontSize);
						kp -= .534 * aCL * fontSize, aCL = kq + 1.59 * fontSize;
						gP.font = b2.kw.l1(0, .785 * fontSize), gP.fillText(aa.tH.tp(nD), kp, aCL), gP.globalAlpha = 1
					}(kp, kq, fontSize, a0, aCL, gP);
					xb = aa.rx.tO[a0 - 1024 + aa.tH.tZ]
				} else xb = 2 === io ? aA.zV()[4].gO[+(ds < 255)] : (3 === io ? aA.zV()[5] : aA.zV()[6]).gO[0];
				a0 = aa.rx.tP, ds = .8 * fontSize / a0, io = kp - .5 * ds * a0 - .534 * aCL * fontSize, kp = kq + 1.4 * ds * a0;
				gP.setTransform(ds, 0, 0, ds, io, kp), gP.globalAlpha = aCN(fontSize), gP.drawImage(xb, 0, 0), gP.globalAlpha = 1, gP.setTransform(1, 0, 0, 1, 0, 0)
			}(kp, kq, fontSize, io, a0, jO, a6A[a0 + io * a2.f4], gP), jO -= 2)
		}(kp, kq, fontSize, a0, gP), (kr = aBg * fontSize) < aBi || (gP.font = b2.kw.l1(1, kr), kq += Math.floor(.78 * fontSize), bY.dY.data[7].value ? aCF(a0, kr, kp, kq, gP) : aCE(gP, a0, kr, kp, kq, aCB)))
	}

	function aCF(a0, fontSize, fi, fj, gP) {
		var ___id = a0;
		gP.fillText(aX.l6[a0], fi, fj), a0 < a2.is && 2 !== aX.y6[a0] || (a0 = fontSize / aBd[a0], gP.fillRect(fi - .5 * a0, fj + b2.kw.tq * fontSize, a0, Math.max(1, .1 * fontSize)));
		bY.dY.data[7].value && settings.showPlayerDensity && (settings.coloredDensity && (gP.fillStyle = utils.textStyleBasedOnDensity(___id)), gP.fillText(utils.getDensity(___id), fi, fj + fontSize));
	}

	function aCE(gP, a0, fontSize, kp, kq, aCB) {
		var ___id = a0;
		a0 = b2.l4.l5(aX.ew[a0]);
		aCB >> 1 & 1 ? (gP.lineWidth = .05 * fontSize, gP.strokeStyle = aCD(fontSize, aCB % 2), gP.strokeText(a0, kp, kq)) : (1 < aCB && (gP.lineWidth = .12 * fontSize, gP.strokeStyle = aCD(fontSize, aCB), gP.strokeText(a0, kp, kq)), gP.fillText(a0,
			kp, kq));
		bY.dY.data[7].value || settings.showPlayerDensity && (settings.coloredDensity && (gP.fillStyle = utils.textStyleBasedOnDensity(___id)), gP.fillText(utils.getDensity(___id), kp, kq + fontSize))
	}

	function aCH(kp, kq, fontSize, aCL, aCM, gP) {
		var a04 = .95 * fontSize / aBs,
			kp = kp - .5 * a04 * aBr + .8 * aCL * fontSize,
			aCL = kq - 1.76 * a04 * aBs - (.35 - b2.kw.tq + .7) * aCM * fontSize;
		gP.setTransform(a04, 0, 0, a04, kp, aCL), gP.globalAlpha = aCN(fontSize), gP.drawImage(aR.get(4), 0, 0), gP.globalAlpha = 1, gP.setTransform(1, 0, 0, 1, 0, 0)
	}

	function aCQ(kp, kq, fontSize, nD, aCL, gP) {
		var gI, sP, a04;
		gP.globalAlpha = aCN(fontSize), aa.tH.tw(nD) ? (gI = aa.rx.tP, gP.setTransform(a04 = 1.1 * fontSize / gI, 0, 0, a04, sP = kp - .5 * a04 * gI - .8 * aCL * fontSize, a04 = kq - 1.55 * a04 * gI), gP.drawImage(aa.rx.tO[nD - 1024 + aa.tH.tZ], 0,
			0), gP.setTransform(1, 0, 0, 1, 0, 0)) : (sP = kp - .8 * aCL * fontSize, a04 = kq - (.35 - b2.kw.tq + 1) * fontSize, gP.fillText(aa.tH.tp(nD), sP, a04)), gP.globalAlpha = 1
	}

	function aCD(fontSize, aCB) {
		return aBf <= fontSize && fontSize < aBe ? bV.aCS[aCB] + aCN(fontSize).toFixed(3) + ")" : bV.aCT[aCB]
	}

	function aCN(fontSize) {
		return aBf <= fontSize && fontSize < aBe ? 1 - (fontSize - aBf) / (aBe - aBf) : 1
	}

	function aCc(gN, u) {
		return 1 + Math.floor(aBh * gN * u)
	}

	function aCZ(a0) {
		for (var left = aBY[a0], i1 = aBY[a0] - aX.hM[a0] - 1; 0 <= i1; i1--)
			if (!aCd(a0, --left, aBZ[a0], aBb[a0])) {
				left++;
				break
			} var right = aBY[a0];
		for (i1 = aX.hN[a0] - aBY[a0] - aBa[a0]; 0 <= i1; i1--)
			if (!aCd(a0, ++right + aBa[a0] - 1, aBZ[a0], aBb[a0])) {
				right--;
				break
			} var fi = Math.floor((left + right) / 2),
			top = aBZ[a0];
		for (i1 = aBZ[a0] - aX.hO[a0] - 1; 0 <= i1; i1--)
			if (!aCe(a0, fi, --top, aBa[a0])) {
				top++;
				break
			} var bottom = aBZ[a0];
		for (i1 = aX.hP[a0] - aBZ[a0] - aBb[a0]; 0 <= i1; i1--)
			if (!aCe(a0, fi, ++bottom + aBb[a0] - 1, aBa[a0])) {
				bottom--;
				break
			} var fj = Math.floor((top + bottom) / 2);
		aCW(a0, fi, fj, aBa[a0], aBb[a0]) && (aBY[a0] = fi, aBZ[a0] = fj)
	}

	function aCW(player, fi, fj, u, iH) {
		f9 = Math.floor(.2 * u);
		for (var f9, io = fi + u - 1; fi <= io; io--)
			if (!aCd(player, io, fj, iH)) return;
		for (io = fj + iH - 1 - (f9 = (f9 = Math.floor(.25 * iH)) < 1 ? 1 : f9); fj + f9 <= io; io--)
			if (!aCe(player, fi, io, u)) return;
		return 1
	}

	function aCd(player, fi, fj, iH) {
		return aS.ss(player, 4 * (fj * bI.eV + fi)) && aS.ss(player, 4 * ((fj + iH - 1) * bI.eV + fi))
	}

	function aCe(player, fi, fj, u) {
		return aS.ss(player, 4 * (fj * bI.eV + fi)) && aS.ss(player, 4 * (fj * bI.eV + fi + u - 1))
	}
	this.dG = function() {
		if (a4R = 0 === (a4R = bY.dY.data[11].value) ? 280 : 1 === a4R ? 187 : 112, aBn = !1, aBj = .88, aBg = .5, aBh = 1.8, aBi = 12 - 3 * bY.dY.data[9].value, aBX = aBW = 0, aBY = new Uint16Array(a2.f4), aBZ = new Uint16Array(a2.f4), aBa =
			new Uint16Array(a2.f4), aBb = new Uint16Array(a2.f4), aBc = new Float32Array(a2.f4), aBd = new Float32Array(a2.f4), aBq = new Uint16Array(2 * a2.f4), a6A = new Uint8Array(5 * a2.f4), aBy = new Uint8Array(a2.f4), aBz = new Uint8Array(
				a2.f4), aBo = aBo || document.createElement("canvas"), oZ(), aBl = aBk = 0, aBm = 1, bY.dY.data[7].value) {
			var a0, aC5;
			for (aC0(), kx.font = b2.kw.l1(1, 100), aC5 = 100 / Math.floor(kx.measureText("900 000").width), a0 = a2.f4 - 1; 0 <= a0; a0--) aBc[a0] = Math.min(aC5, 2 * aBd[a0]);
			aBx = aC5, aBw[0] = 100 / (aC5 * Math.floor(kx.measureText("5 000 000").width)), aBw[1] = 100 / (aC5 * Math.floor(kx.measureText("50 000 000").width)), aBw[2] = 100 / (aC5 * Math.floor(kx.measureText("500 000 000").width)), aBw[3] =
				100 / (aC5 * Math.floor(kx.measureText("1 000 000 000").width))
		} else aC0();
		! function() {
			var a0;
			for (a0 = a2.f4 - 1; 0 <= a0; a0--) aX.es[a0] < 12 ? (aBY[a0] = aX.hM[a0] + 1, aBZ[a0] = aX.hO[a0] + 1, aBa[a0] = 1, aBb[a0] = 1) : (aBY[a0] = aX.hM[a0], aBZ[a0] = aX.hO[a0] + 1, aBa[a0] = 4, aBb[a0] = 2);
			if (a2.g2)
				for (a0 = 0; a0 < a2.is; a0++) aBa[a0] = 0;
			aBr = aR.get(4).width, aBs = aR.get(4).height
		}()
	}, this.aBT = function(f7, a15) {
		a15 > 18 * aX.es[f7] ? (aBz[f7] = 6, aS.a2U[f7] = 2 + aS.a2U[f7] % 2) : (aBy[f7] = 4, (aS.a2U[f7] < 2 || 3 < aS.a2U[f7]) && (aS.a2U[f7] = 6 + aS.a2U[f7] % 2))
	}, this.nR = function(f7, a15) {
		a15 > 6 * aX.es[f7] ? (aBz[f7] = 6, aS.a2U[f7] = 4 + aS.a2U[f7] % 2) : (aBy[f7] = 4, (aS.a2U[f7] < 4 || 5 < aS.a2U[f7]) && (aS.a2U[f7] = 8 + aS.a2U[f7] % 2))
	}, this.resize = function() {
		oZ(), aC4(aBp)
	}, this.yt = function() {
		for (var a0 = 0; a0 < a2.is; a0++) aX.hN[a0] - aX.hM[a0] != 3 || aX.hP[a0] - aX.hO[a0] != 3 ? (aBY[a0] = aX.hM[a0] + (aX.hN[a0] !== aX.hM[a0] ? 1 : 0), aBZ[a0] = aX.hO[a0], aBa[a0] = 1, aBb[a0] = 1) : (aBY[a0] = aX.hM[a0], aBZ[a0] = aX
			.hO[a0] + 1, aBa[a0] = 4, aBb[a0] = 2)
	}, this.o9 = function(player, kh, aC7) {
		! function(player, kh, aC7) {
			player += kh * a2.f4;
			0 === kh ? aBq[player] === aC7 && 0 < a6A[player] ? a6A[player] = 0 : (aBq[player] = aC7, a6A[player] = aa.tH.tv(aC7) ? 255 : 64) : 1 === kh ? (a6A[player] = 64, aBq[player] = aC7) : a6A[player] = aC7
		}(player, kh, aC7), 2 === a2.uf && this.kJ(!0)
	}, this.kn = function() {
		aBn && (1 !== aBm ? (kx.imageSmoothingEnabled = !0, kx.setTransform(aBm, 0, 0, aBm, 0, 0), kx.drawImage(aBo, -aBk / aBm, -aBl / aBm), kx.setTransform(1, 0, 0, 1, 0, 0), kx.imageSmoothingEnabled = !1) : kx.drawImage(aBo, -aBk, -aBl))
	}, this.a3E = function(gu, gx) {
		aBk += gu, aBl += gx
	}, this.wL = function(gu, gx) {
		aW.a3E(gu, gx)
	}, this.zoom = function(xJ, jo, jp) {
		aBm *= xJ, aBk = (aBk + jo) * xJ - jo, aBl = (aBl + jp) * xJ - jp
	}, this.kJ = function(bc) {
		return !(!aBv && !bc && bU.dr < aBu + (1 === aBm && 0 === aBk && 0 === aBl && (a2.zK() || a2.g2 || 2 === a2.uf) ? 1e3 : a4R) || (aBv = !1, aBu = bU.dr, aC4(aBp), 0))
	}, this.l0 = function(a0) {
		return aC6(a0) * aBc[a0]
	}, this.aCA = function(player) {
		return aBc[player]
	}, this.hd = function() {
		bU.et() % 10 == 9 && (aBv = a2.zM() && !a2.zK()), !a2.zK() && 4 <= ++aBX && function() {
			var a0, i1, i7;
			for (aBX = 0, i7 = 4; 1 <= i7; i7--)
				for (i1 = it - 1; 0 <= i1; i1--) a0 = iv[i1] + i7 * a2.f4, 0 < a6A[a0] && a6A[a0] < 255 && a6A[a0]--;
			if (2 !== a2.uf)
				for (i1 = it - 1; 0 <= i1; i1--) a0 = iv[i1], 0 < a6A[a0] && a6A[a0] < 255 && a6A[a0]--
		}();
		for (var f0 = Math.floor(.1 * it), a0 = aBW + (f0 = it < (f0 = f0 < 8 ? 8 : f0) ? it : f0) - 1; aBW <= a0; a0--) ! function(a0) {
			var gN = aC6(a0) * aBc[a0];
			0 < aBa[a0] && aCW(a0, aBY[a0], aBZ[a0], aBa[a0], aBb[a0]) ? ! function(a0) {
				for (var fi, fj, u, iH, fz = !1, i7 = 0; i7 < 8; i7++) {
					if (u = aBa[a0] + 2, iH = aBb[a0] + 2, u > aX.hN[a0] - aX.hM[a0] + 1 || iH > aX.hP[a0] - aX.hO[a0] + 1) return fz;
					if (fi = aBY[a0] - 1, fj = aBZ[a0] - 1, !aCW(a0, fi, fj, u, iH)) return fz;
					aBY[a0] = fi, aBZ[a0] = fj, aBa[a0] = u, aBb[a0] = iH, fz = !0
				}
				return fz
			}(a0) && function(a0, gN) {
				for (var fi, fj, u, iH, fz = !1, a6J = aBa[a0], lb = 1 + Math.floor(.02 * a6J), i7 = 1; i7 < 5; i7++) {
					if ((u = a6J + i7 * lb) > aX.hN[a0] - aX.hM[a0] + 1) return fz;
					if ((iH = aCc(gN, u)) > aX.hP[a0] - aX.hO[a0] + 1) return fz;
					fi = aX.hM[a0] + Math.floor(Math.random() * (aX.hN[a0] - aX.hM[a0] + 2 - u)), fj = aX.hO[a0] + Math.floor(Math.random() * (aX.hP[a0] - aX.hO[a0] + 2 - iH)), aCW(a0, fi, fj, u, iH) && (aBY[a0] = fi, aBZ[a0] = fj, aBa[
						a0] = u, aBb[a0] = iH, fz = !0)
				}
				return fz
			}(a0, gN) && aCZ(a0) : ! function(a0, gN) {
				var iH, fi = aBY[a0] + 1,
					fj = aBZ[a0] + 1,
					u = aBa[a0] - 2;
				for (;;) {
					if (u < 1) {
						aBa[a0] = 0;
						break
					}
					if (iH = aCc(gN, u), aCW(a0, fi, fj, u, iH)) return aBY[a0] = fi, aBZ[a0] = fj, aBa[a0] = u, aBb[a0] = iH, 1;
					fi++, fj++, u -= 2
				}
				return
			}(a0, gN) ? function(a0, gN) {
				var fi, fj, u, iH, i7, lg, i3 = aX.hN[a0] - aX.hM[a0] + 1,
					k2 = Math.floor(.02 * i3);
				for (lg = -6 * (k2 = k2 < 1 ? 1 : k2), i7 = i3; lg <= i7; i7 -= k2)
					if (iH = aCc(gN, u = 0 < i7 ? i7 : 1), fi = aX.hM[a0] + Math.floor(Math.random() * (aX.hN[a0] - aX.hM[a0] + 2 - u)), fj = aX.hO[a0] + Math.floor(Math.random() * (aX.hP[a0] - aX.hO[a0] + 2 - iH)), aCW(a0, fi, fj, u,
						iH)) return aBY[a0] = fi, aBZ[a0] = fj, aBa[a0] = u, aBb[a0] = iH
			}(a0, gN) : aCZ(a0)
		}(iv[a0 % it]);
		aBW = (aBW + f0) % it
	}, this.kE = function() {
		var a0, f7, gb, gc;
		if (bU.et() % 4 == 1)
			for (a0 = it - 1; 0 <= a0; a0--) f7 = iv[a0], aS.a2U[f7] < 2 || ((gb = Math.max(aBy[f7] - 1, 0)) === (gc = Math.max(aBz[f7] - 1, 0)) ? 0 === gb && (aS.a2U[f7] %= 2) : 0 === gc && aS.a2U[f7] < 6 && (aS.a2U[f7] += 4), aBy[f7] = gb, aBz[
				f7] = gc)
	}, this.a0o = function(player) {
		var a0 = player + 2 * a2.f4,
			ds = a6A[a0];
		return 0 < ds && (aC.um(50, player), a6A[a0] = 0, 255 === ds)
	}, this.zo = function(player) {
		return 255 === a6A[player + 2 * a2.f4]
	}
}

function cJ() {
	var v2, aCf;
	this.dG = function() {
		v2 = "Abbasid Caliphate;Aceh s;Achaemenid Z;Afsharid z;Aghlabid Emirate;Ahom z;Akkadian Z;Aksumite Z;Akwamu;Alaouite z;Almohad Caliphate;Almoravid z;Angevin Z;Aq Qoyunlu;Armenian Z;Assyria;Ashanti Z;Austrian Z;Austria-Hungary;Ayyubid z;Aztec Z;Aulikara Z;Babylonian Z;Balhae;Banten s;S Banjar;Bamana Z;Bengal s;Benin Z;Kadamba z;Bornu Z;E Brazil;Britannic Z;British Z;British Raj;Bruneian Z;Bukhara Z;Burgundian State;Buyid z;Byzantine Z;Caliphate of Córdoba;Cao Wei;Carthaginian Z;Cebu Rajahnate;Chagatai Khanate;Chalukya z;Chauhan z;Chavín Z;Chenla;Chera z;Chola z;Comanche Z;Congo Free State;Crimean Khanate;Dacian Z;Delhi s;Demak s;Durrani Z;Dutch Z;Egyptian Z;Elamite Z;Exarchate of Africa;Abyssinia;Fatimid Caliphate;First French Z;Frankish Z;Funan;Gallic Z;Gaza Z;Republic of Genoa;German Z;Ghana Z;Ghaznavid z;Ghurid z;Goguryeo;Goryeo;Gorkha Z;Göktürk Khaganate;Golden Horde;S Gowa;Seljuq Z;Gupta Z;Hafsid Y;Han z;Hanseatic League;E Harsha;Hephthalite Z;Hittite Z;Holy Roman Z;Hotak z;Hoysala Z;Hunnic Z;Husainid z;Idrisid z;Ilkhanate;K Israel;K Judah;Inca Z;Italian Z;E Japan;Jin z;Johor Z;Jolof Z;Joseon;Kaabu Z;Kachari Y;Kalmar Union;Kanem Z;Kanva z;Kara-Khanid Khanate;Kazakh Khanate;Khazar Khaganate;Khmer Z;Khilji z;Khwarazmian z;Kievan Rus';Konbaung z;Kong Z;Korean Z;Kushan Z;K Kush;Lakota;Latin Z;Later Lê z;Liao z;Lodi s;Khmer Z;Macedonian Z;Majapahit Z;Mali Z;Malacca Z;Mamluk s;Manchukuo;Maratha Z;Marinid z;Massina Z;Mataram s;Mauretania;Mauryan Z;Median Z;Mlechchha z;Ming z;Mitanni Z;Mongol Z;Mughal Z;Nanda Z;Nguyễn z;North Sea Z;E Nicaea;Numidia;Omani Z;Ottoman Z;Oyo Z;Pagan Z;Pahlavi z;Pala Z;Palmyrene Z;Parthian Z;Pontic Z;Portuguese Z;K Prussia;Ptolemaic Z;Qajar z;Qara Qoyunlu;Qin z;Qing z;Ramnad Sethupathis;Rashidun Caliphate;Rashtrakuta z;Roman Z;Rouran Khaganate;Rozwi Z;Rustamid z;Russian Z;Tsardom of Russia;Saadi z;Safavid z;Saffarid z;Sassanid z;Satavahana z;Samanid Z;Soviet Union;Saudeleur z;Duchy of Savoy;Seleucid Z;Serbian Z;Shu Han;Shang z;Siam Z;Sikh Z;Singhasari;Sokoto Caliphate;Song z;Songhai Z;Spanish Z;Srivijaya Z;Sui z;K Mysore;Shunga Z;S Sulu;Sumer;Sur Z;Swedish Z;Tahirid z;Tang z;Tây Sơn z;S Ternate;E Thessalonica;German Reich;Tibetan Z;Tondo z;S Tidore;Timurid Z;K Tlemcen;E Trebizond;Toltec Z;Toungoo z;Toucouleur Z;Tu'i Tonga Z;Turgesh Khaganate;Umayyad Caliphate;Uyunid Emirate;Uyghur Khaganate;Uzbek Khanate;Vandal Y;Vijayanagara Z;Republic of Venice;Wari Z;Wassoulou Z;Wattasids;Western Roman Z;Eastern Wu;Western Xia z;Xin z;Yuan z;Zand z;Zhou z;Zulu Z;Yugoslavia;Kosovo;Sikkim;Kanem–Bornu Z;Wadai Z;Ethiopian Z;Rozvi Z;Sasanian Z;E Vietnam;Shilluk Y;K Aksum;Gwiriko Y;Toro Y;Malindi Y;K Loango;K Mapungubwe;Ryukyu Y;K Cyprus;K Jerusalem;Garhwal Y;K Nepal;K Cambodia;Champa Y;Hanthawaddy Y;Phayao Y;K Sardinia;K Sicily;K Gwynedd;K Scotland;K Desmond;K Poland;K Hungary;K Croatia;K Bohemia;Albanian Y;K Georgia;K Portugal;Khanate of Sibir;K Romania;Cossack Hetmanate;Duchy of Bouillon;K Ireland;Lordship of Ireland;K Italy;Republic of Pisa;Idrisid z;Almoravid z;Almohad Caliphate;Marinid z;Wattasid z;Saadian z;Republic of Salé;Rif Republic;K Kush;Makuria;Alodia;Ayyubid z;Mamluk s;Egypt Eyalet;K Fazughli;S Sennar;S Darfur;Mahdist State;S Egypt;K Egypt;Emirate of Cyrenaica;K Libya;Republic of Egypt;Republic of the Sudan;United Arab Republic;Libyan Arab Republic;Zirid z;Hafsid z;K Kuku;Regency of Algiers;Gurunsi;Liptako;Tenkodogo;Wogodogo;Yatenga;Bilanga;Bilayanga;Bongandini;Con;Macakoali;Piela;Nungu;K Sine;K Saloum;K Baol;K Cayor;K Waalo;Bundu;Bonoman;Gyaaman;Denkyira;Mankessim Y;K Dahomey;Oyo Z;K Nri;Aro Confederacy;Kwararafa;Biafra;Buganda;Bunyoro;Ankole;Busoga;Tanganyika;Kuba Y;K Luba;K Lunda;Yeke Y;K Ndongo;Kasanje Y;K Matamba;Mbunda Y;Chokwe Y;Kazembe Y;K Butua;Ndebele Y;Mthethwa Z;Bophuthatswana;Ciskei;Transkei;Venda;Rhodesia;Kart z;Nogai Horde;Khanate of Bukhara;Khanate of Khiva;Khamag Mongol;Northern Fujiwara;Kamakura Shogunate;Ashikaga Shogunate;Jaxa;Republic of Ezo;Jiangxi Soviet;Hunan Soviet;Guangzhou Commune;Gojoseon;Alaiye;Beylik of Bafra;Kara Koyunlu;Kars Republic;K Iraq;Arab Federation;Kar-Kiya z;Baduspanids;Marashiyan z;Afrasiyab z;Mihrabanid z;Safavid Iran;Sheikhdom of Kuwait;Bani Khalid Emirate;Emirate of Diriyah;Emirate of Najd;Muscat and Oman;Emirate of Riyadh;S Najd;K Hejaz;Fadhli s;Emirate of Beihan;Emirate of Dhala;S Lahej;Republic of Kuwait;K Cochin;Jaffna Y;Laur Y;Pandya z;Jaunpur s;Jaintia Y;Hyderabad State;Travancore;Udaipur State;Manikya z;Lan Xang;K Vientiane;K Champasak;Lao Issara;K Laos;Pyu States;Ava;Mon Ys;Pegu;K Mrauk U;Taungoo z;Shan States;Arakan;Raktamaritika;Singhanavati;Dvaravati;Ngoenyang;Hariphunchai;Tambralinga;Lavo Y;Langkasuka;Sukhothai Y;S Singora;Ayutthaya Y;Thonburi Y;Lan Na;Pattani Y;Jambi s;Palembang s;S Deli;S Langkat;S Serdang;S Cirebon;K Pajang;K Bali;Bima s;K Larantuka;K Banggai;Luwu;S Bone;Caucasian Albania;Kabardia;Circassia;K Abkhazia;Elisu s;Avar Khanate;Caucasian Imamate;K Imereti;K Kartli;K Kakheti;Crown of Aragon;Emirate of Granada;K Majorca;Crown of Castile;K Haiti;Cocollán;Zapotec Civilization;Mosquito Y;Somoza Regime;Iroquois Confederacy;Cherokee Nation;Vermont Republic;State of Muskogee;K Alo;K Sigave;K Fiji;K Nauru;K Chile;Muisca Confederation;El Stronato;K Chimor;Jungle Republic;Liga Federal;Supreme Junta;Weimar Republic;K Bavaria;Bremen;Frankfurt;Hamburg;K Hanover;Holstein;Lippe;Nassau;Oldenburg;Pomerania;Reuss;Saxe-Altenburg;Saxony;Schleswig;Waldeck;Württemberg;Helvetic Republic;Republic of Florence;Duchy of Urbino;Republic of Cospaia;Duchy of Lucca;Duchy of Mantua;Duchy of Milan;Papal States"
			.split(";");
		var a0, i1, a17 = ["K ", " Y", "E ", " Z", " z", " s", "S "],
			aCg = ["Kingdom of ", " Kingdom", "Empire of ", " Empire", " Dynasty", " Sultanate", "Sultanate of "];
		for (aCf =
			"Pestilent Dominion;Wretched Realm;Damned Province;Corrupt Zone;Cursed Territory;Blight Nation;Haunted Expanse;Malevolent State;Ruined Empire;Contaminated Land;Epidemic Domain;Forsaken District;Abandoned Wasteland;Necrotic Enclave;Tainted Domain;Decayed Principality;Infested Region;Malignant Territory;Toxic Dominion;Ravaged Sector;Ghostly Realm;Plagued Commonwealth;Afflicted State;Desolate Nation;Apocalyptic Zone;Radiated Province;Deathly District;Pestilence Haven;Doom Territory;Malefic Expanse;Abandoned State;Cursed Haven;Corroded Zone;Hauntland;Noxious Nation;Infected Enclave;Ruinous Domain;Wasteland Woe;Rotten Principality;Voided Land;Vile Dominion;Catastrophic Region;Eerie Expanse;Desolation State;Forsaken Outpost;Contagion District;Damaged Province;Abhorrent Sector;Accursed Nation;Doomstruck Land;Radiant Ruin;Deathly Enclave;Malefic Dominion;Plague District;Infected Haven;Corrupt State;Pestilent Territory;Razed Realm;Haunted Wasteland;Toxic Sector;Cursed Dominion;Decaying Province;Forsaken Enclave;Ruinous Region;Malignant Haven;Infested State;Ghostly Nation;Tainted Territory;Damned District;Radiated Dominion;Desolate Expanse;Apocalyptic Land;Death Zone;Wretched State;Malevolent Haven;Plagued Nation;Noxious Domain;Voided Territory;Eerie Sector;Accursed Province;Necrotic District;Doom Haven;Haunt Realm;Rotten Nation;Forsaken Territory;Infected State;Abhorrent Expanse;Malignant Land;Toxic Dominion;Ruined District;Ghostland;Cursed Sector;Radiant Nation"
			.split(";"), a0 = v2.length - 1; 0 <= a0; a0--)
			for (i1 = a17.length - 1; 0 <= i1; i1--) v2[a0] = v2[a0].replace(a17[i1], aCg[i1]);
		if (settings.realisticNames) v2 = realisticNames;
	}, this.w = function() {
		var a0;
		if (ay.jA && ay.jB.aAl)
			for (a0 = a2.is; a0 < a2.f4; a0++) aX.l6[a0] = aX.vX[a0] = ay.jB.aAl[a0 % a2.sR];
		else(9 === a2.jE ? function() {
			var a0, gR = ao.random(),
				f0 = v2.length,
				jc = a2.is + ap.aCl;
			for (a0 = jc - 1; a0 >= a2.is; a0--) aX.l6[a0] = aX.vX[a0] = v2[(a0 + gR) % f0];
			for (f0 = aCf.length, a0 = jc; a0 < a2.f4; a0++) aX.l6[a0] = aX.vX[a0] = aCf[a0 % f0]
		} : a2.jG ? function() {
			var a0, gR = ao.random();
			for (a0 = a2.is; a0 < a2.f4; a0++) aX.l6[a0] = aX.vX[a0] = v2[(a0 + gR) % a2.f4]
		} : function() {
			var a0, f0 = v2.length,
				gR = ao.random();
			for (a0 = a2.is; a0 < a2.f4; a0++) aX.l6[a0] = aX.vX[a0] = v2[(a0 + gR) % f0]
		})()
	}
}

function cf() {
	this.aCm = [], this.aCn = [], this.dG = function() {
		this.aCm = [], this.aCn = []
	}, this.hd = function() {
		0 <= this.aCm.length && this.aCo(this.aCm), 0 <= this.aCn.length && this.aCo(this.aCn)
	}, this.aCo = function(e8) {
		for (var i7 = -1, a0 = e8.length - 1; 0 <= a0; a0--)
			if (e8[a0].dr--, e8[a0].dr <= 0) {
				i7 = a0;
				break
			} for (a0 = i7; 0 <= a0; a0--) e8.shift()
	}, this.zd = function(id, t7, aCp) {
		return this.aCq(this.aCm, id, t7, aCp)
	}, this.aCr = function(id, t7, aCp) {
		return this.aCq(this.aCn, id, t7, aCp)
	}, this.aCq = function(e8, id, t7, aCp) {
		return ! function(e8, id, t7) {
			var a0, jf;
			for (a0 = t7.length - 1; 0 <= a0; a0--)
				for (jf = e8.length - 1; 0 <= jf; jf--)
					if (e8[jf].player === t7[a0] && id === e8[jf].id) return 1;
			return
		}(e8, id, t7) && (aCp && function(e8, id, t7) {
			var a0;
			for (a0 = t7.length - 1; 0 <= a0; a0--) e8.push({
				player: t7[a0],
				id: id,
				dr: 384
			})
		}(e8, id, t7), !0)
	}
}

function cI() {
	this.vX = new Array(a2.f4), this.l6 = new Array(a2.f4), this.y6 = new Uint8Array(a2.f4), this.kZ = new Uint8Array(a2.f4), this.hM = new Uint16Array(a2.f4), this.hO = new Uint16Array(a2.f4), this.hN = new Uint16Array(a2.f4), this.hP =
		new Uint16Array(a2.f4), this.es = new Uint32Array(a2.f4), this.sg = new Uint32Array(a2.f4), this.ew = new Uint32Array(a2.f4), this.f1 = null, this.fI = null, this.fJ = null, this.fM = null, this.nx = new Uint16Array(a2.f4), this.hl =
		new Uint16Array(a2.f4), this.hm = new Uint16Array(a2.f4), this.vK = new Uint16Array(a2.f4), this.vQ = new Uint8Array(a2.f4), this.dG = function(t7) {
			for (var a0 = t7.length - 1; 0 <= a0; a0--) this.l6[a0] = this.vX[a0] = t7[a0].name, this.y6[a0] = t7[a0].a8m;
			this.kZ.fill(0), this.hM.fill(0), this.hO.fill(0), this.hN.fill(0), this.hP.fill(0), this.es.fill(0), this.sg.fill(0), this.ew.fill(0), donationsTracker.reset(), leaderboardFilter.reset(), this.f1 = new Array(a2.f4), this.fI = new Array(
				a2.f4), this.fJ = new Array(a2.f4), this.fM = new Array(a2.f4), this.nx.fill(0), this.hl.fill(0), this.hm.fill(0), this.vK.fill(0), this.vQ.fill(0)
		}
}

function cd() {
	this.aCu = function(player) {
		a5.kY(player), a2.uh++, aX.y6[player] = 2, aX.vK[player] = bX.vE.aAI(), player === a2.ev && (aM.show(!1, !1), aL.a50(), bH.result.vO()), aW.a0o(player)
	}
}

function zD() {
	for (it = 0, a0 = a2.f4 - 1; 0 <= a0; a0--) 0 !== aX.kZ[a0] && it++;
	iv = new Uint16Array(it);
	for (var f0 = 0, a0 = 0; a0 < a2.f4; a0++) 0 !== aX.kZ[a0] && (iv[f0++] = a0)
}

function kD() {
	aCv(), aCw()
}

function aCw() {
	for (var a0 = it - 1; 0 <= a0; a0--) 0 === aX.kZ[iv[a0]] && aCx(a0)
}

function aCx(a0) {
	it--;
	for (var i1 = a0; i1 < it; i1++) iv[i1] = iv[i1 + 1]
}

function aCv() {
	for (var es = aX.es, kZ = aX.kZ, sg = aX.sg, f1 = aX.f1, vQ = aX.vQ, no = bD.kB.no, a0 = it - 1; 0 <= a0; a0--) {
		var ds, f7 = iv[a0];
		es[f7] <= bB.eo(sg[f7], 4) ? 2 === kZ[f7] && (0 !== es[f7] || no[f7] || f1[f7].length) || aAC(f7) : es[f7] >= sg[f7] ? (ds = es[f7], 250 <= (sg[f7] = ds) && (vQ[f7] = 1)) : sg[f7] -= Math.max(1, bB.eo(sg[f7] - es[f7], 1e3))
	}
}

function aCy() {
	for (var aA2 = 0, a0 = it - 1; 0 <= a0; a0--) aA2 += aX.ew[iv[a0]];
	return aA2 % 4096
}

function cK() {
	var aCz;
	this.jK = null, this.dG = function() {
		aCz = [], 9 === a2.jE && this.aD0()
	}, this.aD0 = function() {
		var a0, aD1 = [57, 85, 105, 150, 190, 333];
		if (this.aCl = 0, this.jK = [0, 0, 0, 0, 0, 0], a2.is <= aD1[0]) this.jK[0] = Math.max(bB.eo(a2.is * (512 - a2.is), aD1[0]), 13), a2.jD = this.jK[0];
		else
			for (a2.jD = a2.f4 - a2.is, a0 = 1; a0 < 6; a0++)
				if (a2.is <= aD1[a0]) {
					this.jK[a0 - 1] = 512 - aD1[a0 - 1] - bB.eo((512 - aD1[a0 - 1]) * (a2.is - aD1[a0 - 1]), aD1[a0] - aD1[a0 - 1]), this.jK[a0] = 512 - a2.is - this.jK[a0 - 1];
					break
				} a2.sR = a2.is + a2.jD
	}, this.aAS = function(player) {
		aCz.push({
			player: player,
			jO: 14 + ao.i4(20)
		})
	}, this.hd = function() {
		var a0;
		if (9 === a2.jE)
			for (a0 = aCz.length - 1; 0 <= a0; a0--) --aCz[a0].jO <= 0 && (aW.o9(aCz[a0].player, 0, aa.tH.tc + aa.tH.tr), aCz.splice(a0))
	}
}

function cu() {
	function aD7(a0) {
		return void 0 !== bI.jB.sE[a0].aDF
	}

	function aD5(a0) {
		return 1 !== a0 && !aD7(a0) && a0 !== bI.aAa()
	}
	this.aAp = 21, this.eV = 0, this.eW = 0, this.ru = null, this.rq = null, this.rr = null, this.rv = null, this.sF = 0, this.a8B = 0, this.rs = !1, this.rt = new aD3, this.jB = new aD4, this.dG = function() {
		this.jB.dG()
	}, this.w = function(map, a8F) {
		((map %= this.aAp) !== this.sF || aD5(this.sF) && a8F !== this.a8B) && (this.rs = !1, this.rt.a8N(), ao.z9(map), this.sF = map, this.a8B = a8F, aD5(map) && (bI.jB.sE[map].aD6 = a8F), aD7(this.sF) ? aD8() : (map = bI.jB.sE[this.sF], this
			.eV = map.u, this.eW = map.iH, ao.z9(map.aD6), ad.w([this.eV, this.eW, map.lA, map.l7]), aD9(), ac.aDA(), ad.aDB()))
	}, this.aDC = function(a0) {
		return 3 === a0 || 7 === a0 || 9 === a0 || a0 === this.aAa()
	}, this.aDD = function(a0) {
		return 2 === a0 || 7 === a0 || 9 === a0 || 20 === a0
	}, this.aDE = function(a0) {
		return 1 === a0
	}, this.aAa = function() {
		return this.aAp
	}
}

function aD3() {
	function aDO() {
		bI.rt.hd()
	}

	function aDU(f7, aDT) {
		0 < aDT && (bI.rv[f7] += aDT, bI.rv[f7 + 1] += aDT, bI.rv[f7 + 2] += aDT)
	}

	function g6(f7) {
		return bI.rv[f7 + 2] > bI.rv[f7] && bI.rv[f7 + 2] > bI.rv[f7 + 1]
	}
	this.a3P = -1, this.dq = 0, this.aDG = 0, this.aDH = 8, this.aDI = 32, this.aDJ = 8, this.aDK = 32, this.aDL = [0, 0], this.a2U = [0, 0, 0, 0], this.hH = null, this.aDM = !0, this.aDN = !1, this.a8N = function() {
		-1 !== this.a3P && clearTimeout(this.a3P), this.a3P = -1, this.hH = null, ad.aDB()
	}, this.dG = function() {
		7 === aP.vz() || this.aDN || (this.aDM = !0, this.dq = 0, this.aDG = 1, this.aDL = [bI.jB.sE[bI.sF].sD[0], bI.jB.sE[bI.sF].sG[0]], this.a2U = [bI.jB.sE[bI.sF].aDF[3], bI.jB.sE[bI.sF].aDF[4], bI.jB.sE[bI.sF].aDF[5], bI.jB.sE[bI.sF].aDF[
			6]], this.aDH = bI.jB.sE[bI.sF].aDF[7], this.aDI = bI.jB.sE[bI.sF].aDF[8], this.aDJ = bI.jB.sE[bI.sF].aDF[9], this.aDK = bI.jB.sE[bI.sF].aDF[10], this.aDM ? this.a3P = setTimeout(aDO, 16) : this.hd())
	}, this.hd = function() {
		if (8 === aP.vz() && a7.lO()) this.a3P = setTimeout(aDO, 16);
		else {
			if (0 === this.dq) {
				var aD6 = ao.aDP();
				if (ao.z9(bI.jB.sE[bI.sF].aDF[2]), ad.w([bI.eV, bI.eW, bI.jB.sE[bI.sF].aDF[0], bI.jB.sE[bI.sF].aDF[1]]), ao.z9(aD6), this.hH = ad.aDQ(), this.dq++, this.aDM) return void(this.a3P = setTimeout(aDO, 16))
			}
			for (var f7, fx, aD6 = this.aDM ? 10 : 1e6, aD6 = bI.eW - this.aDG - 1 < aD6 ? bI.eW - this.aDG - 1 : aD6, sd = this.aDG + aD6, fj = this.aDG; fj < sd; fj++)
				for (var fi = 1; fi < bI.eV - 1; fi++) g6(f7 = 4 * (fx = fi + fj * bI.eV)) ? this.aDR(f7, fx, 1) : (this.aDR(f7, fx, 0), function(fi, fj, f7) {
					return 1 < fi && g6(f7 - 4) || fi < bI.eV - 2 && g6(f7 + 4) || 1 < fj && g6(f7 - 4 * bI.eV) || fj < bI.eW - 2 && g6(f7 + 4 * bI.eV)
				}(fi, fj, f7) && this.aDS(fi, fj));
			this.aDG = sd, this.aDG >= bI.eW - 1 ? (bI.rq.putImageData(bI.rr, 0, 0, 1, 1, bI.eV - 2, bI.eW - 2), bU.dN = !0, this.a8N()) : this.aDM && (this.a3P = setTimeout(aDO, 16))
		}
	}, this.aDR = function(f7, fx, kh) {
		aDU(f7, Math.floor(this.aDL[kh] + this.a2U[kh] * this.hH[fx] / 1e4) - bI.rv[f7])
	}, this.aDV = function(f7, gR, aDW, kh, a2U) {
		aDU(f7, Math.floor(this.aDL[kh] + (1 - gR / aDW) * a2U) - bI.rv[f7])
	}, this.aDS = function(jo, jp) {
		for (var f7, gR, aDW, sI = jo - this.aDI, sJ = jp - this.aDI, se = jo + this.aDI, sd = jp + this.aDI, sI = sI < 1 ? 1 : sI, se = se > bI.eV - 2 ? bI.eV - 2 : se, sd = sd > bI.eW - 2 ? bI.eW - 2 : sd, fj = sJ < 1 ? 1 : sJ; fj <= sd; fj++)
			for (var fi = sI; fi <= se; fi++) g6(f7 = 4 * (fi + fj * bI.eV)) ? (aDW = this.aDH + (this.aDI - this.aDH) * this.hH[fi + bI.eV * fj] / 1e4, Math.abs(jo - fi) > aDW || Math.abs(jp - fj) > aDW || aDW <= (gR = Math.sqrt((jo - fi) * (
				jo - fi) + (jp - fj) * (jp - fj))) || this.aDV(f7, gR, aDW, 1, this.a2U[3])) : (aDW = this.aDJ + (this.aDK - this.aDJ) * this.hH[fi + bI.eV * fj] / 1e4, Math.abs(jo - fi) > aDW || Math.abs(jp - fj) > aDW || aDW <= (gR = Math
				.sqrt((jo - fi) * (jo - fi) + (jp - fj) * (jp - fj))) || this.aDV(f7, gR, aDW, 0, this.a2U[2]))
	}
}

function aD9() {
	2 === bI.sF ? aDX([256], [256], [0, 205, 256], [500, 500, 0], [0, 0, 0]) : 7 === bI.sF ? aDX([512], [512], [0, 380, 512], [500, 500, 0], [0, 0, 0]) : 8 === bI.sF ? aDX([410], [410], [0, 120, 210], [0, 80, 640], [0, 0, 0]) : 9 === bI.sF ? aDX([
		512], [512], [0, 70, 180, 200, 290, 420, 512], [500, 500, 0, 0, 500, 500, 0], [0, 0, 0, 0, 0, 0, 0]) : 20 === bI.sF && aDX([512], [512], [0, 380, 512], [500, 500, 0], [0, 0, 0])
}

function aDX(aDY, aDZ, aDa, aDb, aDc) {
	for (var fi, fj, aDe, aDf, xJ, aDg, gt = aDY.length - 1, aDd = bI.eV + bI.eW, f0 = (aDd *= aDd, aDa.length), a0 = f0 - 1; 0 <= a0; a0--) aDa[a0] *= aDa[a0];
	var aDh = new Array(f0),
		aDi = new Array(f0),
		aDj = new Array(f0),
		du = ad.aDQ();
	if (void 0 === aDc)
		for (aDc = new Array(f0), a0 = f0 - 1; 0 <= a0; a0--) aDc[a0] = 0;
	for (a0 = 1; a0 < f0; a0++) aDh[a0] = aDa[a0] - aDa[a0 - 1], aDi[a0] = aDb[a0] - aDb[a0 - 1], aDj[a0] = aDc[a0] - aDc[a0 - 1];
	for (fi = bI.eV - 1; 0 <= fi; fi--)
		for (fj = bI.eW - 1; 0 <= fj; fj--) {
			for (aDe = aDd, a0 = gt; 0 <= a0; a0--) aDe = (aDf = (fi - aDY[a0]) * (fi - aDY[a0]) + (fj - aDZ[a0]) * (fj - aDZ[a0])) < aDe ? aDf : aDe;
			for (xJ = aDb[f0 - 1], aDg = aDc[f0 - 1], a0 = 1; a0 < f0; a0++)
				if (aDe < aDa[a0]) {
					xJ = aDb[a0 - 1] + a9d((aDe - aDa[a0 - 1]) * aDi[a0], aDh[a0]), aDg = aDc[a0 - 1] + a9d((aDe - aDa[a0 - 1]) * aDj[a0], aDh[a0]);
					break
				} aDk(bI.eV * fj + fi, xJ, aDg, du)
		}
}

function aDk(kh, xJ, aDg, du) {
	xJ < 500 ? du[kh] = bB.eo(du[kh] * xJ * 2, 1e3) : 500 < xJ && (du[kh] += bB.eo(2 * (1e4 - du[kh]) * (xJ - 500), 1e3)), du[kh] += bB.eo(aDg * (10 * xJ - du[kh]), 1e3)
}

function cM() {
	var aDl;

	function aDv(xb, gN, fi, fj, globalAlpha) {
		bI.rq.save(), bI.rq.globalAlpha = globalAlpha, bI.rq.imageSmoothingEnabled = !1, bI.rq.scale(gN, gN), bI.rq.drawImage(xb, Math.floor(fi * (bI.eV / gN - xb.width)), Math.floor(fj * (bI.eW / gN - xb.height))), bI.rq.restore()
	}
	this.a1A = 0, this.a1B = 0, this.a1C = 0, this.a1D = 0, this.dG = function() {
		(aDl = new Array(bI.aAp))[0] = {
			u: [0, 5e3, 8e3, 1e4],
			gR: [220, 250, 255, 220],
			pv: [190, 220, 0, 0],
			i7: [170, 200, 0, 0]
		}, aDl[1] = {
			u: [0, 4e3, 5e3, 6e3, 1e4],
			gR: [25, 0, 100, 0, 25],
			pv: [25, 0, 0, 0, 25],
			i7: [25, 0, 0, 0, 25]
		}, aDl[2] = {
			u: [0, 500, 2500, 2999, 3e3, 3200, 4200, 5200, 5700, 8800, 1e4],
			gR: [15, 15, 70, 40, 48, 48, 252, 40, 40, 20, 30],
			pv: [80, 80, 190, 90, 46, 46, 248, 180, 180, 90, 140],
			i7: [120, 120, 220, 110, 37, 37, 217, 10, 10, 10, 10]
		}, aDl[3] = {
			u: [0, 400, 1800, 2e3, 3200, 4500, 6e3, 7700, 8500, 9500, 1e4],
			gR: [10, 10, 20, 10, 30, 10, 16, 40, 55, 230, 230],
			pv: [10, 10, 40, 50, 100, 40, 80, 120, 55, 230, 230],
			i7: [80, 80, 200, 10, 60, 10, 16, 40, 55, 230, 230]
		}, aDl[4] = {
			u: [0, 300, 1400, 1700, 3e3, 4e3, 1e4],
			gR: [10, 10, 20, 10, 10, 170, 212],
			pv: [20, 20, 60, 100, 100, 110, 170],
			i7: [70, 70, 160, 30, 30, 60, 120]
		}, aDl[5] = {
			u: [0, 1e3, 3e3, 3500, 4e3, 4500, 7e3, 7500, 8e3, 1e4],
			gR: [10, 10, 20, 10, 5, 10, 20, 5, 20, 25],
			pv: [30, 30, 50, 100, 30, 100, 140, 60, 140, 200],
			i7: [80, 80, 200, 10, 5, 10, 20, 5, 20, 25]
		}, aDl[6] = {
			u: [0, 700, 2650, 3200, 5e3, 8e3, 1e4],
			gR: [10, 10, 60, 255, 255, 200, 200],
			pv: [10, 10, 60, 255, 255, 200, 200],
			i7: [80, 80, 255, 255, 255, 200, 200]
		}, aDl[7] = {
			u: [0, 400, 1999, 2e3, 3200, 4e3, 4700, 5500, 6500, 9500, 1e4],
			gR: [10, 10, 80, 255, 255, 55, 6, 70, 20, 155, 255],
			pv: [10, 10, 90, 245, 245, 170, 80, 190, 20, 155, 255],
			i7: [80, 80, 255, 235, 235, 55, 26, 10, 20, 155, 255]
		}, aDl[8] = {
			u: [0, 700, 1300, 1900, 1901, 2500, 3400, 6e3, 1e4],
			gR: [25, 30, 30, 30, 255, 255, 30, 40, 20],
			pv: [25, 30, 150, 150, 245, 245, 80, 150, 70],
			i7: [60, 170, 170, 170, 235, 235, 30, 40, 40]
		}, aDl[9] = {
			u: [0, 400, 2009, 2010, 3300, 4e3, 5200, 6500, 8e3, 9500, 1e4],
			gR: [10, 10, 80, 255, 255, 55, 23, 36, 20, 155, 255],
			pv: [10, 10, 90, 245, 245, 170, 60, 160, 20, 155, 255],
			i7: [80, 80, 255, 235, 235, 55, 9, 72, 20, 155, 255]
		}, aDl[20] = {
			u: [0, 5500, 6700, 6999, 7e3, 7300, 7600, 8200, 1e4],
			gR: [5, 5, 70, 70, 255, 255, 252, 10, 8],
			pv: [20, 28, 190, 190, 255, 255, 248, 90, 60],
			i7: [60, 80, 220, 220, 220, 220, 217, 10, 8]
		}
	}, this.aDA = function() {
		var aDu, a0, i1, e9, gL = function() {
				var gL;
				return bI.ru = document.createElement("canvas"), bI.ru.width = bI.eV, bI.ru.height = bI.eW, bI.rq = bI.ru.getContext("2d", {
					alpha: !1
				}), gL = bI.rq.getImageData(0, 0, bI.eV, bI.eW), bI.rv = gL.data, gL
			}(),
			u = aDl[bI.sF].u,
			gR = aDl[bI.sF].gR,
			pv = aDl[bI.sF].pv,
			i7 = aDl[bI.sF].i7,
			du = ad.aDQ(),
			f0 = u.length - 2,
			aDp = new Array(1 + f0),
			aDq = new Array(1 + f0),
			aDr = new Array(1 + f0),
			aDs = new Array(1 + f0);
		for (i1 = f0; 0 <= i1; i1--) aDp[i1] = u[i1 + 1] - u[i1], aDq[i1] = gR[i1 + 1] - gR[i1], aDr[i1] = pv[i1 + 1] - pv[i1], aDs[i1] = i7[i1 + 1] - i7[i1];
		for (a0 = bI.eV * bI.eW - 1; 0 <= a0; a0--)
			for (i1 = f0; 0 <= i1; i1--)
				if (du[a0] >= u[i1]) {
					e9 = du[a0] - u[i1], bI.rv[4 * a0] = gR[i1] + a9d(aDq[i1] * e9, aDp[i1]), bI.rv[4 * a0 + 1] = pv[i1] + a9d(aDr[i1] * e9, aDp[i1]), bI.rv[4 * a0 + 2] = i7[i1] + a9d(aDs[i1] * e9, aDp[i1]), bI.rv[4 * a0 + 3] = 255;
					break
				} bI.rq.putImageData(gL, 0, 0), bI.aDE(bI.sF) && aR.pz() && bI.aDE(bI.sF) && (gL = aR.a7O("arena"), aDu = aR.a7O("territorial.io"), aDv(gL, 5, .5, .5, .1), aDv(aDu, 2, .5, .45, .1)), bI.rs = !0, bU.dN = !0
	}, this.zB = function() {
		for (var f7, fi, fj, aDw, aDx, eB, a1B = 0, u = bI.eV, iH = bI.eW, e9 = u * iH * 4, aDy = a5m, aDz = bI.rv, a0 = u - 1; 0 <= a0; a0--) aDy[(f7 = a0 << 2) + 2] = aDy[e9 - f7 - 2] = 3;
		for (e9 = 4 * u, a0 = iH - 1; 0 <= a0; a0--) aDy[(f7 = a0 * e9) + 2] = aDy[f7 + e9 - 2] = 3;
		for (aDw = u - 1, aDx = iH - 1, fj = 1; fj < aDx; fj++)
			for (e9 = fj * u, fi = 1; fi < aDw; fi++) eB = 1 - (aDz[(f7 = e9 + fi << 2) + 2] > aDz[f7 + 1] && aDz[f7 + 2] > aDz[f7]), aDy[f7 + 2] = 2 - eB, a1B += eB;
		this.a1A = (u - 2) * (iH - 2), this.a1D = 0, bI.aDC(bI.sF) && function() {
			var f7, fi, fj, e9, aDy = a5m,
				aDz = bI.rv,
				u = bI.eV,
				aDw = u - 1,
				aDx = bI.eW - 1,
				jO = 0;
			for (fj = 1; fj < aDx; fj++)
				for (e9 = fj * u, fi = 1; fi < aDw; fi++) aDz[f7 = e9 + fi << 2] === aDz[1 + f7] && aDz[f7] === aDz[2 + f7] && (jO++, aDy[2 + f7] = 3);
			ac.a1D = jO
		}(), this.a1B = a2.iY = a1B - this.a1D, this.a1C = this.a1A - this.a1B - this.a1D
	}
}

function aD8() {
	var oG;
	10 === bI.sF ? oG =
		"DYDz2ESNu-0UYCCrS9c3pBUrKHc94BhIBhIJpIIBnMIAAIrKSSpKABmgf9e7X7ecX-5P0baOy191XXX7eegf9mcfUrrxrKppppKpKSrzUMMMSKKKrJcXcXcmgcXnKIKBmnCIJonCKrrSrrSSxSS9XcJnBe9XemmWXeX99chMIAEprrSrrtbrxIrMKBn9eBcecX9X7f99X90e577VX1VcOWX16XX7X999cX7eWyXXccVVX6rUSrrwUrlzpbbrrU6xzztzxzrztzbaOtaOa5-0WV-77e-9119HcXXZecccceXXX7ce9Xcce9e9meeVof919ee9Wzy5XeXYS9KBcXee_He6ce1ee0zxzta5UaX99c1mXcXhEJp9cNHWcTN9BcnAzJoorIBe0c--nIJoonSIBe-OX-NNOXWbcBgzIHX9xHzS9mcCSI9-nBrrorK9VcP-jHe9_BhxzKHcWC9mZp9-3n9fBnS970a6zs7egrIAAIRUKocXX9gx9npKaUxBppABe5OdHpBe-AC9-17TOWABpKI9-7JmnC6zGtxIBmen9egp6aUlyOzbrbbqUzxHXgjKKBc-ZehlxoeeoxObonox9XonAUbzS9efBdCAArHmjISBhEJnAofBUIJgrpocXxIBUoxHVmnBmmXAExoUxABmdAIBgnBonIAC6oxHVgfMHcXcUXAAGxIBgfxJch9c3enCMzSBe9eXomxHeBgmeCSBgpKMp9hzHfIEzHnArSxHX7pSrUHcnCMrUpSa5UIonABrSBccnBopJttzbxpBonHXpIEKMrMSrxpKxzUzltyUtaTOaOaObaT5UzNTOV0c116rMMKSKrxIKpJpKMSKMGxISCrKMSpKMKrSpSpI9xp9_pMMMMSBoxSryTUUxa5P7-0ttbWzzzxzaN5-NOWVN--0Wa5-0X-0VNVN7TOzaOWzL0bbX0y7NN5Ua17V111749c79e1c-V-----Ow7--N57-OzaN0ba156byNNT6q5OzWaT55-OsOX1777Oa55-5T5UX16tzUOyUtzrpzUrSKKSSAoemnKCIAIICI9KHn9CKBhCSHgenSAJnIJxSMMKKSSpKoopKKHpSoorSzxpWxMS-UKISaOxMOxttyOzy5OzbbtyTOzbtaUxyUyTT6porUrSztzzMSp9eceoogeZp9ZxJx9geeeXe9eZgeC9gegemp9gmpKMSonSxKrrbaUMIKJpMKKKpIACBmeccV71XX7V1mmmmhCCCKJompKKJpMKSKSKpKMJpKBeeceenKpzHnBnBmceee-X1117ememfBn9mfCBmgemf9mfBmf9xromcec7Us8He0u99cWtbc-PeCCS9VecZnBnBemfBn9X9c6aOXA997Y99755VXc6tXXmV5Os-ObVN0yN0bzaT-7ec7N70Wa-OV-5eggnHon9f9efCBpMzop97epCKIpSIBpKrrSKKIKKMKMJehzKKErJeABnIAJc717f9eBnAJzrHe7V9d9ef9gmopKUKC9gmcV6tX73eCIJoonIBnBnBgnCHgjJeZfA9megeegfKCICCJnIA9meZf9mfIEMof9XceXe97X-59XdCIKKpKKCJoeVcf97mZmVVV199YJmX7gceY9gpEOxMMJecrSSGzOxSrxprSxzJzUopSrIxKBpUMIpMprSropEMHnBrpprK91AJpJpIICpBopICCJonKBn9mcme9VcX9ee7X7e9ece9Xe19XcX91Xee9Xcce9VVVccefAAABe7emhBnSSKMSIJhCIJpKJppCKKIIIICJgpIBpAIHpBcoooonIKLObpBnKlzrKIKCJpCJpBnBpUzrrxpxSbbwUxzUprpppppJppMMIrrSSRUbWsOwUzUltbzrxzUzSzUbrrTTUUrSbbV6WbaTOzxzyN5TN-T5TOxbtts71-X-70V0sOWsObbaT0sTObw70tbbzbxbzzyOtyUtbyUaOV1-N0cVN-50aOtza6tzlxzUxSrzUzSSxUSzzOzzs5OyOtyOyUztyObaNOtaUrUxrrUSrrUrMSJrSIMSpKISzKUSpSrSSrzSMMxMSrMSpSrUzSSzzrTUMSpprSzMSzUxSSIEUSrzrUSpMKKxpKrKMKBmmrIKBgpKrzs6VOsUa--5ObzyN77-7X7e970V-5Oa5ObzxSxrzzSrKMUw-OV17X7X1X99X97X9X99cXXXXX977OaOVXeeeeecX7cX7X7X177-7-X-71-7XX97X97cX7VVV1--VObs970cVObtzbtyObrzxSomdKKSSMKqTN5NN0xrMIM5UrKKKpEKrSMSMprSrxMMUzrzrzSrSrSrHXenOtxrrxrxzSrrSrUrrSrSxMSxxKJpKKKJnKKrKIUUSrSrKKzKxKrSrSwUxIBnrxpSSpUzyOzzzzyUSxzRUpCBee7ecXce89omegpIBrpxzSrMJnKrMSFT0tbrMKxKL0VObxprSSlXV-11-c-X-WxzxFUaPcX777OzztzrSrMV-V75X96zzMKrUa9e-7V17gc9XeV90Bf957cVOzrMOX17X7X-X7X7V-N-6aUxCKzUUKprcX-UzSrN17WzrxrNX7ecV17WzzbaOtbxraObrOxrbxwUxpUzrzraOy5OVOWtzyOzzxbzVNXccXcXcX1-V197V-ec5Oy5N1--555UyN-N1---VOWX0Wtcc0aUMMyOs----Zc5-TOtsOWX7c0xzLN-NWbyOyUyUzrbxJe9gfTUxAMxrxzlbzbzbq5UKrJnAABnAAICETUtxSrzrpIpKIUSxraOaOVNTObzWa5NOtxxyOyOc-5A9YBmnBfHceX7-XXcX9e9Y9e5OzUbxSyVUX5OcUa1-UMqNNUbyOtsUWtWbWaObtzbyUWy6bzpJmoh9nIUI99oghSUzrrrSHeHohKCJgrKJemgcrS9nry6xSrUMStxzUSzqUrbrUxUSxxrrprUU6zSrbrtzUSUSzxMKxSMprMKIIIoonIBmohAIAHgf9eHeemfI9nA9mf9c9n9ZeXc9d9n9ccX7VZmoceeHVX1Zn9meZegegegfBhABehABonAHnABhCIBemee9eBfBeecgeohCUxzUbzxI9egegfAUUrHmegemecWcfCUp9meX9Beeef9onrSpAAKKKIyOzyUzJnBjSrxSSIBhMSHgcVYKxBmnzrROzpzxzSKKCKUzKBnoUzzbzpJmegfzyUzFObyUzrrzpKUSlzry6sUyUVN-7NOzbzzlzrzUrUSrrURUxzbzsTUsUWts5NOWa5ObzrUxrtyOWWaOzMSJnIAIprMJorKMIrSKMKKpUKCBonKMJnCJpCIKIKMJmpKIMKJpCJpBxBonHomoemmegnHf9f9cX7ce99emecgn9h9eA9nCHgfBnAIBfHh9eXXce9emec7f9ec1me89eeceme89fHeemX77-ceeeemeX9X9eeecV-V9e9Xe7e9eefBnBeefBfHmnBnBnKBpIEpKxMSKJnBpBnBnBmgmeeX9cXXVcX7Xce1eXcXe7ee9eXeeeX9X7V7V77V--XcXee7ec7X9eXXceX9f9eeee997X9Ve7Zee7WaX5X2Be-cee17X--0tsUbtaT0ta5-Oc--7Xe-X7--OVUtbVT--QA9nBmcXV--97X9ememggnBecJceeXme-cXdABeXeX97cnHgeeI9IA9XcVX7eX99e9e9mgeXeXemmceZmXe9ceXemXmggf9mmnAI9X1eIHcXfBghBmf9BemcX9Y9Ve9--JmZeccXA9Xd9cX9VXVVc7-V-Xee_BnJhIIBnJnBmohBgohBcmmf9eHf99Hf9HmommmmV5N-MvxppxrIICWzsOxX--OV5s0i1mopMKppzTOaN-0XXceV--0lJ7-90mzBlV2N7tRof9JqUsOaW7c8bwrrJchpK9-X7PBfHjKogcP0Jd92SMUwUlxMSErHegnrlxI9X7cY99e7hSzxpxSIIUHozogmgecYIExxxrrrKpKrSrMMrrlxtyUtxblxUyTUbyUUSaUy6Wzttbbc5N5N7V7XWaT7V6aZeVWsV9nIA9X2BmcWc7ooc--f9IBomV-0cnICBeXgn90Wc5TOa7-1-5cX---d11---esD---m8D-1VvAYqV-92glC5--NEEiqV-7Hsjk014I4wognBxwOs0Wc-D4y4gcT--0Y8X-0WalAk--0pHX-1Wsy6EV-a7EDhCBtaT9--X3IIV--_VJV0Ndepmzq1-0XeJbD-5XhvrCqTe-07iCnpteV-7iejk-iAtCxEIrrX71-2smknnEUUpze-e-c-1BtMB--2Kbq--YMmzV-sqPmrF7--Culc-HCwyxxcV-DEWXhte-DZ7mzorSr56eX170LG-rUSrSItzOueVc93c-5ZH-rrRP9-2d613nHdRUR6kP7-CZVZUEKUyUe91e-2ZYhnTPV-t8OMny7-1HZrT-DZf16A9mjFUzlsV--Hh_N-1HlyB-CZhCrSpzrkX7cX-2ZibAr-VMdC8brSrzUxSSIBxpHX17c8CrJe7rrUIpSrUxxzSrMIMOs5OVV7X7X7977V-7P19Xcce--8DNHk-LIcPSpN7-0ODtgnMN1-7Zz5USxyX9c--J2As-9J2CSu-08FHSrR7V-0G5xV-OH5vqV-0LEoV0OLiAnMN70D_f4UKIBnSBgzSrSxSSMSxpSpppzc-5TTUMbV716s117X1Xcce-cXXHcX--0Rs7V3dS04nKonpSSkV7----TMGPxrS-V7--MN-c0HMYnBnrIAIrK-OWV75V-tTEHotV-qMoqSMUUbe9HXV-mNcawnr6xtcVe-3aNiUIq1-6aOwMISlc1-6aSe6rROec-8ac9fISzuX-V1tf-1mnBrlWaN-NajMY9ggeoopCTTTTN6aN1HdgkXoohABnK9n9KJmpogeV-0XJenppSrUzJgghomhp9VnxIAAzOxWbbrIBnJmenBegozlWyObxIKBonIGaOVT50xSk6xJpEpIHnBonBoptxpr56xrzzbonCBnCMMSonzxJmopCIJomX7mceHcV7nJxSABhrbxEKCIJhAA9HgenABrUMbqUpSUrprSrbzzp9hABeXce9YAHcoomnBmmnBmmnpzaTTUrzzMpzWWblbyUUSrUrxbbzzblxrUUbrzSrtztzw6btV19ceWXWzq0aU6aTOta0a0V5777Xce7nA97VOa0X-17VUVV0V17-17X7V7-V----1-V-VcX9A9cWbbzyV-U5T5TOa5NNOaOV1Xe9ce99mZee5OtcWbaTTTTTOWe9ZeXcmcXVV38gtRnCMzSw1X6VcV08hu4rq9--tiGRrac-1Qfbg-dax4zrrIKoeBxErUlzSGbs0VP3eXX97XV-9R0KCsV1OlXjprrP7X7-HRQsCpVc2TRgLxJrKBeKKJe7BhIKKBlwOaUrNTUsNNNcNP91V---PS6VgopVN-LbHRrK999ezrxxoy5Tc7-0bJGjF--6Spy-5bU7rSbuXV4tsIYpKSSrSp50aX-177e-2baNMC5-2Otd7nHrpOba7cV2tv2dnICxz-Uk7cc0mUIkRnBpCBpCIJOWa0VNOtc-19UQnBeegmnIISxJns56zaOWtu7TV--URWN--VDLc-eVE7zSrUX7Xc-5WM4BN1DWTIggpBnEKKKESCWV5T5Wa-N0a9VsP6YRn9cmY9JggoggzUKHfA9XmcP9XZfIJhronABfISpxrUrrI9ABnBggrxxoe9fHmeBdCDUUrHf9orUogrzzJfUU6zUzbbbzrty6brbrxxz57OtsN5OsN5V5VT5V57N56yTUtsNN1cNNVV5VNeeeZeWtu77-XX-KgxCqWVV-P8w5qV-uAjtz5c15XwhBooopBonIKKJNN5-N5-6WVN-8ckmzArUOVeV-uDoWxNV--YoA7-TYoYRoxa57-1_P1T--8NKD-9dNS2ACAUta---dQzr-DPM79mmgcpI9chMKCppxxxrSzIbXc0aT1WVOxk7-N-9c0eauZgfAKrSrrSla-5-7n9-V1eVE3nKUwNVcV0eWZinCF5N0TcbkCMSrzr5OVPXCA9VXV-1b0uV0ezUBxUsXc--mhTc--n9_c1DnTIxCCSMKC9eCKClsT5OsN-V7NNV6QJcYxzUSxzSwUa7X9I99Xd9X-BhW8EE6rUw7ceV6fXkApBmf9f9hKGaOWzzzObV1V-PuipRpJ5--6iiarprP77--DrhL-0iv-fN-7jNKjExzXcc-Y1kshKK-5-V-wF2umWs-03EWs-03_Ms-23gdy-qlmyACJmcgfBnCIIrKpICUSIprUa0VOV5N5---V5---wRnFru7-E6kMClX-4lwIAzq9c-A7r-z5V7gdk8monBgfCCCElzbzxsN995-T5-KgiSunBnABmeeIHprrKJxpIISKICJpKprUzOcOzzUTN---0V--50aN1-1-PV7XX-SnCeY9f9mnUSSKzMtaOWa9VX--bBy1gzSxX-e-4nFNEAqTc-6C7Wgs-EC_DBjN-0nVb2N-3n_EYByN--nfWnV1Bx8ZorUaV9-CnqgbKISrNN9-9-8o5aACrSVWXV-C0gPk-jFRwSM6rsW9VV3h23TmfBjOxMUtaX17-6GYfE-0UHSjwfEzbxpUUq17ZcXeV-h8rqr--3odX6MF--8ogzvMJrN--V1xAI4npKwT7cV0Xp-Yf9nBeehKMKrzzSxrSxrUSzzSxrSMzSzzV-T-7V10Wa6VOWVT1mmeeegn9eeeXmcX97V-IJGnCr1--2JVvD-Bp7gzSxw6aeZcV0hHX5merts-EJjUhq7-2pGMvBtV-hJmVz1-1pJofqV-0KQ3c-0KztN-0L5k7-6LYvE--ILYxhTNc-0LZ57-ALu1CaV-4SIqV-hSQ3na--KpjX--ppknVESTPknBgmgn9f9f9onBmenSpMGzxbtbzbaOV6zbX9-NObWV-4TmmV3SToLnBnJnST5Oa-1-0px0YD-0pylvD--L3Ge--q54IV2CWmWnUUz5Pcec-nO-URhBoUy6VX-1qFuQGc-MOcagpR---CcERs-0PQUc3MPs8gehClzSzbzzUzxMr6tyUzzbzaTP0HgmcVXegeeeXeh9eX7e-JqqUEKIMpzz5T7cXX97-bRBpSKoT5X7--M4g1-grMIbBecemgfMxUpzMzObtu7V0zrrq7e9eV-MTaFhOy9VfLnt2-9-17117VcX1-1X97cVXX9177V-VXV9-WaOSMSSSSrrUSKMKxrrrUSxrrUzsOV7--N-tVN--N0bKIKKQCKRnKQCUtrTUtUSxpMprrUUKxSpxrpprMrxF-EcVGxTX" :
		11 === bI.sF ? oG =
		"QREc7lR7oVUYGy_KJOJKKKKuK4OKT_K4KG_u_GJJO_3K_KKKL_4KL__KK_4_LKK_MjzuOOK_KKKOKLKKLLUjzji_KKMgyzdMjzgzzzEszzyzzjvuQvieeid_POOvzkzvzy_TvuOK4GKKvyyzzydJQi_OdKKaLOLajdOPuueaYBzydJdPOybvdbjeuvizwzujuQnunl2wBnBE2-EYBz2nk2kFzwBzznBydnwznEYwnnEBnnwkyvwzEgznzzEwwwwznnxK4KGOJ2zl2nzifvwyw-J0GGJ042nvzEvzwznJEnzlG42zg02KKGFzzEzzeT-woKK3EvoKLOJBnBnzE2EznnwnwznznzpJKKKKOOKG_G_LKFwl2zK8K4JK4KKKKKKKKKKKKF_g38EBemXeeeeeemeemgeXeegf9XgeeexCxzzzoenErMroeXeeegfEzSS9eVcghoeemf9YBe9ee9eXghrzzzKBfIUzrbzUzzzbryOxrzzbbsTXe9geY9egeeBeY91cUy6z6xtxbxzbzlzObrx6ztztue5UyT6zzbzbae7UxyOzzbzzbbtzyUyUtzztbyUzzbuecZeBeXeeecgeV--1ViZ-00JJIV379xwOLKKgzyzK2zF5g4ccBgcn9ggepUxAprzztxtyOzbzzbe90f9cXX99V-cAQAOx-PFLqqmemxp9zzttzIAzrrzzxzzze7X9ZeceX5ece---AorF0B4uUghzzae9-6VjJh_UznK---NUXV1NBEpOLYnzlJ--0X1X--Vl4pk-B5KYEc-D29vazJ-HkP9DmexzxxzzzrbztbseeeHeYHceXV-NC5uUF-R5YYCyX-2Vpc0jCF--5lM7-12TuM-hkQrZrS9X7f9e9enrSxrzaUxx9f9zzHhzUxqOaOsObbzSxoqUxyUY999c9Xcecce7eV5NDrSOLauUwzzzzEGK4K_0F2Z6YfEUoefUtzUzMyNNe9ceec0a2zdLQdyjwynxKKFznpGGJ--1-_X-AW0ZpjvnzCKKJ--1309--02HO---WrDV1sGfOOjzzn4KK-0FYN1qP-2W7RtfkF6J8G-geeemf9gemegfEbqUrxEbyTgecOwUbbxEbyTTUac-H3crrjCLEE1KoQBrofHegeecBefBeeegfAACxUHemeeeeegxrSrzxxoeeXXe9ecdAzUomXexzrzroeXeecc711_rI9nUSxxKMSryUzrzUpxKx9cV7cceghrrJnJmhBe9ee9VUrxy0a5-7e7VVX-7XccOVX99eefKKAAMxMIUxzMrxK9XXXXeXceXceee9mxxp9oeV9mf9eHgmeeWsXnHcmfA9oenJf9XcXcOby999exKKzMIJcceYBggghxrI9e9e99pxzpHeccceX110cXe7cXWzrUzUxzzrzrtzbaOcVcceXccce9Xceegcce6emeZe96buXeXoe7TZhBe2Bmc6eIBdC9eC9fHcHcAC9erxHed90C9MTUzoh9ZjJeofIAzHghHzI9nHYACCA9VxIHcfx9gmmnEJrKErJzSC9xrrrtyTOaUa0xSxKroxMSSrIMKqUlc6bztWx51--P7OyOy0tcX997V-NP6WsUaUbaOaX6VTOzzzxxpHnBnBggofCKSpJxUUo6pzzbtzyUzbxSzogfABeceef9mpSzoppI9e7X9nCCKMMK9fEI9ee19mfBgemh9W91WuI9gf9e5eX17N5NUXc0a1nBenUHfSorpMKMrHXh9XgmY9nMJmV1nIISC93fA9gnKBemp9e9XxKoeeeA9fSMzrxrpMSxMMHorIKII9eecgeceeee9gmghrKKCpKCIJonMozKJp6xyUzSppr5OttzzzzWWtyN5ObcV-5OaOWttyTTN5VWWbbzzrrxaOtbyNTUUrrSMMSpxrrSrUxxUUpSzSMKonIOaN6aVcVNOzUrL17ccXccVPeccX7717cXX-5V0zbzJxOboUKrKrrUxxrrSxxrSorIKSrMpUUISxxAESpGxrsVWzP7XXWzrrxVNXoccWcOcX-6xrV6tx0zxzUtbtzq99777WWVUV-50xaV0tsNUbzpUUzp9nUrpIyOzaUy9ge197e6zlbbbzbbyUzommhxonCHeIxxrxrxrUSxrUrrMKoogmmecmeeZcceX7eXHeeemmmn9eedCzHfoeeeZe_IMzIpoxHXKzUJxxUoUUprza0zxxxrUtyOaUUlbxIMKKKoopCIJpJoommeeeX9A9mmn9cce9Xe9ee19eXe17eA9mgnCKpJnBee7XXXcee7X-99XXeee9993cXV0ba5-XV0aOA919HgmeeBeY9mmX9ememef9ggn9ghA9mXcmeecX7gpCCCBnAAAABnCIICIKpJonCABnBgf9hBpBnBnCCCJonBnJnJonCIKprSKIMKKpJpCIKIIIHrSMpJjJxMpz6zHxCrrMMUSprKSIrMrMUUMrSxrSrSrrUUyTUbbtz6zbr6xxxtbtyOtyU56tzyUTUxzrSpxKMU6lWxzqNUSxpUxEMKJxCJnMKEUHhICEMrHxSUMSrMSrSppppMKMSSMKpKBxMKpppKKCBnCBopIKIKCEKCKKMMSpppSSSMMMMSSKKKKpSKKSKSMMMSrSSSMKpSSSppKICppMrUSyTUztbzzbrxaUq6zttbaObaOa5TOa5NOWWa5TT5-N50V7WWbaUbbtaOX-N-7-1-170cTT5ObaOa5OtttttbaOa5N5-1510c5V--0VVcX-1-V51-N7X-WWV55N55550ta6aNNOa5Oa5OaOaOtbaOaOaOaNOa55NNOV50a5-T50WWV-N--7nBf9mcmgcmmmeBgmee7X17eWba11X7VX7X79X97Jc7V7-V7117X7cV7---V1-X7X97--7X111111711-VX77V7-UMMMSMSrN0V5-UKKCMxpprSSSrMSSKprxrSSSMKKSKrMrrSrMKpprSrKrSSCKKppKpoxMUOzaTOzyUaTUttWtzbbyOts-OyUbbztVObyNNOyTV-0WxWWaNNN7X7VXceXXX17-7WWIBnIBonBd9eAA9Vc7NNV1CIK9117-797X7VX1111WbWy0xUzprSSSpprUxrSxxrzTUbqP6zrSKprxzxzzTUUUztzztxzzbtzSSUSMSzprSrrtzJmmfrSrSUSzaTN756xKxCSSIKMMKKpSKpMKprKprMKpSKpprMMMMMKrJxSSrSaNNOtVN6s---0WV17N-V-0aUWbyN0baOaOaNNOWbyOsN70btaUL0xLT6o-UM6lX6brSppSSSUUSrppEF6pSSSMKKCKVUMUL0tba-USSUKSKSSMKrMKpKSKKCKpIKIM6rSSpxMSppKSMKSSSpSrSxrUSlwT777VV---777X7XX19XXX--7V1Hc1--N0VN570c6bzKMUzrSxprK6xMxxrpCKS5NTT6cN0zltaTOa--57-11-V7X7VcX7c7X77977VN-Oa0aTObaUUoOxpKpqP70btyOwUsOw776rS6twUkUOtWaObX6ta0bVcOcWy5N-5T96XWaWccZeWWtaX97cecWzUxxq1X7cVX77VX999750a6VOttw1XecXnIBe9-VZceX7V0zTT-OtWWbrzSpCCUJltWbbbzxzUpoxopxTUUxprS9zMMSKKxGtaUtzV177177cX7X7X997-OtWaNX150a6V6rxUxtbaOV-NN0WV-75-0V77777X711-1X195XccccXZe_on9c29c799ecVOWaN-55NP-T-TUzzzzlzzzsUzxzzrxAqUyUzuA9770V-5UzbzOzSSUrOVOac7WzzxCrSUMJgpIJrKIHgrSJxSrMSrSrSrrSrSrSrrSrSrU55-X77TOe775OxsXX7X15WzMcXccX-Xee77-VX-UzkOzSq7UbzzxzSX5OVNUbaTP6xzrzccccce1XXeccWzzsP7ce-U6rSzSzbzUxxxzxzUwUqXcPVTT99XXce9eeXzS9cXXX9XceXe9e9ce9cece9e9ececeeeeeceexxxxrHee7ece7Ue9omeeXeeeeeeeccX999e9eeXgef9eeXXXeceec5eXefC9eWcPn9WeXeeef9hzSxHcfx9cBe9emee9X_Sp9e9Xe999XWyce7X9ceeeeXerp9eeeceecVeeeeen97d9ec_BemgeemVTOyTNUbttXVe9cce9eeef9e1ee95eeec--3mJ3-01RcfV-NIoOUF8R8uLgf9hIHeec1Xe9fBeh9mfEzzyUrHenxyUyUtzyUxzzbyTTNf9e0a0cWEvKdK_KKKLKOK_aJaPPOOUeKdUddLTyEukyvizjzzzGK43G3322EBkwBzkwwzwzwzwznwoKKJ0K1X2ABrpzzozzzaUWtacme9hxBcXBoeV9--7KZ5R0K1i5QpxUxzUyUzbxztyX9e9oe7eAHXe9eV--KycF0gAC-Bf9rUzta7c-54dtbV-61qbAAy---LztF1oAWqEUzrzxzbeXeecf9V-94pL6xF--Agu7--4xl31226aIBogfABfBf9nxxMyUztttttzbbzbyUtzbsX9f9e99eeec--5HLZ-A28MQry9f055LVqKKPKOaOddaKaKOOd_bizvy_MeOOOK_LPPK42BnJFzszEo0G4aLKOUjuOLO__GKKKKJHKG32K_KOKbnzzdKOLOeOO_-EoJG5KK_KKKGK2wzElGLK4K44JGJKLLLKFnLLOJF23dLLLK43_OK_KOOKFqKOKeK4KG43KKGGGOKKGKKJKKKKG0OKF_FOK_OKKKPLJK_KLK____LKOKKOLLMjidbzzdPPKOKJOG2pOKOKLLKOUu_PUzzzzYwzwydKdaOOKKOOKKLKaOK_OO__aEeOLTdzzEBydaaKdbEnzjfBnuzdPLLO_OLLOK_OLLLUzEnnEnzEnwwnz42zuRzEwwwwznK2nnwzEnEEEnnwzEzvdKKOLO_OOdOUEnwznnzYwnkEEzyEiuUvjzzzvjnyaTyuiz02yyawBkyeQeeOueddaUibuPJi__9gwnyaOOPTvuPJTbeLzEiYuEiaQEeRydiddddaJ-x4K4deadddaa_daaOdaOaOddePaPOaauddeufEeaLiuOfevduazjuzfvieeeuPueefiviiebe_3KvfjfEfiveePivjfiuiE-FGJ--3--4-FFF-FF33F-B-22vjyjeauefeiiuzefujidavuyuivfiuuvfeeuePaPiuvvjiiyyzyivvvvvyziyvzjzEnnEvyviviuvivjjzvjyyzwEii_viuviuo-2vjffdKHPdivgEijjieEigzjvfYyfno3-z2BzvvjeOiivffdideeeieOdeLKbeLuOOOOedaeOeidjgnueaaLOaafeveLyyvivffiiuuiiiiiiiivevfiiieiiviviyyvvvvvvvjiuvvjefeueieieeeddveTefeaieeeeQePevedeffeuieeuaeeeaeee_fiffiieeQeffideufj3323FwEjdyuMeuaveTuQeuLEeudG33_eLVzizvdjfzi_JibeJF44fzeeu2vc3BEfdvdjfy_vvfyEvd_TyfyeTgyY2yzFF-wz2zJGF3F-kz-F22Bn-0GKG43F-2BwzFk3-BoFC4300-EyzjzBo3-l0-zzzwzwzEBk2B-440-04443-EivzjjvzzwwkkBn2-B322BB-zyadY2-B2-nBkk-oF0-o-o2wBnnBnnEsnE2Ezsnvzk2nn32-nB-kk--BBl-2-23-3-BF-B-ysn2-kBBnEBBkn22-B--00-00GKK43GG03JG43KKOGJ_444OOFddF23BJHJGGGJJKOddG-kBKHJ44G-nB-K3-F3-F403JG3GJK45KGdGK8J3G44-3G04J3_LK2B23JK8G3FExKOLK__KGG4KOKG-3K4OHLK_affedaK-G-n2-F-wn3_aO___KaPJ4aOeadaOaLdG3G3GGK5O_OOOGGJFG3FFFF-k-22--n--GJ2K4KK_KKG_KF2n2-2-C-nu22-2-nBn-KKKOK_OPaeOdd_eOK0O_KOLJG44J33-FFF3-F-2-B-B-k2E202--n-wnE2yEEEB2ynkygEfynEvijz2y2GJ2zgzEgwygwyzvyigwwziiiveaaidfuuevfiE22-k-0---F----knBnBnnnnBnBwzBnnEwx-EsnGJEnkCJBBBFkB22nyaLdfeaBknB-EsnBnB-zznzKK2nzznEzx03BknBnBwznByEwzBnzBynnzjzdLJ_OL_aOigwnnBnyEnzEEnlGOJK4FpF-FnBOJGFzywnwkoJKOK_OK____aOJBEBwnEEEwwknwzzzzzzzzzzzEBwnnwzEswwwk-nC3LK2BLKK2wznJK4JK23J4-FzYsCG2lFoJEC332JCaOT_aLPJ8_OOJ34JBFnFwBEK4JF3G48K_4_44HLLPdaPaeOOaLLQiuudeOdaLOOOOOLKOeePPduOaOdGOdGJB3G2FFnBB-nB4K4_GG44GJC3GJK4KOKFwB-kG_F2BknBnnBwnEBzBwwnzwzC3EzwnEjzEEEEE4KK0-zjizwwwwFzzvih-yC02yijEnnnwkF2Ez2CJGGKKdeOKaO_Gbd___Fo-nEB48O_aOG2k2pK3EBzF2042wwwnzznnEEnlK_4F--Bnu7-D5P0Mj4-NFneHn99fHdEpA9e1mrUrMMy6rbyObacVUbsXc-95VQqU-0RC72gfrLTUX9WL7PGHOKOLKaLLO_aOzjzdKK8fyy2yvzzzzjnvEyszn-yvuyji_KjEzfvvdedLOOK_au_K_8KK4O_Oavznwzj2vYyiizdQjjyvjvzjnFJ43FEvyyvysEV2vkG-oJJ-J2vC2nzfvdvcyvB2EgwkznoHKJEKF44K444Fwkzjx4JEwoLK2EGKJ34KOGFCFK2C3GKKKLujnzuK_aK4K2Bl0KK_K__OOd_id_032E-wwwznKK-5koy5rxzzye9XeV0NQGfQzp409Fr2emf9gemeoemhxzoeenrzzzzzzxoeeeeHeeemnrUzzJr6zzzzbyUztttzIzrzrtzaP5Uxy1XXc7TOVNOcXemnCBoeVOX9IHeX9ec9V-7QyMR-O2VLYCrzOcTXeV-7R7oR-42W7vEc-16Tkb---xZJV2sUexOjjEzzlK4KJ--2yzH--10C8--0-gFV-7VNER-038rYV-7WePR--3FiX-8X7VOizvlGJF--GAnc-q7b4qavzwz43KJ--3In9--193W--G5YBk--7uzo-03SVI---Z6nF-JH3JgtV1NZFfOiznCGJ-03ZUnV-NZy-Ok--HUC7-18Epr--G9ncs--8SB3-23innD--1O-0-6lCPTmmnCzzbWa9c--8glJ--3qO1-3XRYCbzK-XlIJjmegemef9efDUzwUzx9fHfBfxyTTTUpsTUxzWttf9eeWtzu7-19Vk6-2lJH2nUze9VKcf22OuK5ObzzuOLKUzviaKzzzfzvwwzEwwwzYBzB0GF5JGaKOJOG__3a_OJBG4-PlNXPmfBnBnBofADUzJzbbbbbzpxzbXe0ccX9Bc6s--1mmx-6lYOwmextzUrP7cc-5BSZbV-45HC2T7-9BdhMxF6JOkqwemmmmf9e19nJemmmenzryUyTTUyUbbbbzbtzue7-qBstqKOOYvEEBo-45TmAqV-1Bzxq-CGcDCxzS9dEMrxowOX7V19X-6YINKaOgnk--leh3lV-cqZnQo-AGhLznASpxpObxa-cXcXV--sj9F--RjYc-9DO8aRk-JRodC5V1Ntt6OKvznCJ--6Flm--Yf48k-BTXJhc-LEJ7aTYC-0BTkwjJhyP7P1LYtQd_KPPLbePLnuafp-yEeddzzEuOiydeKOGdzeaK_jzjjuKKaOaOUEnynBzvnzVyzzEE4FnBwBGGOJBF334G0-3JKJEknBBlKKK-wnCF-RUIqgju-4Yv7daLnB--6voH-EYxyt_ueaYBBE24F-wUjugoqOWc09F4K5OGOOYyzBzElK-1m02NnLNP--32h4-0m0qgnqV-1FPCq--H2Gus--FRXJ--7Gue--38td-6H3zimfGzxLPWaX--3E7C--16gBV2O3CZOuLecn-n3--RX7jgyP--3G5C--18RXV3t3nbP_3_iju_Hz2-B-03XWAgfxyTcV-047KF--Xjy7--GPHJ0W7iC6CSKKIICJnCBemzqUbV6sUa5PX6w1711-V0d4t8OOwwo--7o-P-3ZP3pin4--1CVBV-85mEN0d7rPv9hEIBeXrICxpCAIBtxrtbttztWV--UWc7ec--ZRVOk-3Y_fi--3SWl-1HE1urq7V-06YZF0JYnKBgltzy9c-1GuEq--1Ey3V-87P_R--8B0X--3aep-1HIL9xw7V-08jeF1RZt2BoxCKLV5NOaTeV-LHXk5OUn-3B_KjRnEJxK6xSIBnGsOV5-5-N7e0PZfppdQivevivviuviuvfffiviiiuuivV2vxJG3G400-F2zoG43G3G3G43G3043FJF-B_XHC--1HrHb--1Ml9V0OBPSTykK--mPGuw--0CdCF-3bQrg--_-bGk--c3w7-1J1Tb-nHWSNmnBmnCBnBognAxAACOzzzUbzOzIAAEbaOtbpICxtaNHW9WWttge-Ou9dHce0uXWaOaNTc0qJ_j5Tfuiyfuvyn-43-C4GJJF-ZdZ-CEN--qKF5MivvzoGGJJ--9fZm--4NVG0OHj5Imgmgn9mggggggzbxlyUttxUxrltzzxUp9mcegf9nBx9HzICBnICCIKMbaOWa0c55OWaUlaOaUxxrIJogmqTUpK6aNNOaN0xMUNT1-XXceee7cN575ec0cecV-0P9QF-3hh-D-7_jKnaJ2nyZ-YA_nYBnBnEUttXVOc8aMCmTLLKaaLKPddbjiuievivijivfivy_PPeaeffjyyvjjvzEnzso3-F-3G42l4J-2zvEBGG00LLuJF-3KFK003GFEyxG-nEzvp-B33G_JK--muI9w-5OSJStaOeji--wBzzzKGOK-0JieNwmeCzzaV-TMQgDzvlJJ-GAk2vrxkPe7--MV8o-6At0AC5--OURXy--gjqMEraeV2OUrqueTfVFl22F--jvyN-PNAgydcnF-Yn1WRrSpppMJeYrJnrUKq6ce7WzTUzUUUNVNUtsX7VJece9XXX97c--5440-2I2OHnJsOV-1NxR5-Bn6z2mgeegenBzbzzUbtsN--0_72F--nKlc11OxXDLKKO_OKLQvzwwwzEnnnnKF0RnydBghMMNN--dOfypPMdfibveueeaPaOO_3eafd_J8KOKKaaOaLuLaLvcyEieQevy2l---GFpJFzz-ynwwzzyeiyv-Bx3FEjjzVEvV2s2ufk2G0--3FF2020003JG33F-dC_NYAASKopSbtV--77--QufZ--CxYX-5b-NCbjY3F--sGR7-DRSQ6v4--2ZTFV-OmFuQF--tWp7--Rrk3-2DRQfF-ObG_p_LKK4LQjvvvvjk3BB--2cnkV-0opdF-BuUUE--1SP5b--2fOPV-0qQ8F-JvLKBlV-ttYkOgB--EKfm-GbimObjzjzzK4JOJJ-QEW629fAEU6aT5-Kbx48aOGeQiv-nzVk1K--4-Bei-2c4b_aEF-00fX7--VsoZ--FYHH--7bwK--3KeVV-19ymF-456Wg-0cmm4s--oPB-o--PCDOOk-46F9i--7vjd--oSsBlV-uEMIQY3-0GwSv--1EeMF-06tTc-5Z2ZLk-2HUyYu-0dG4tY--3dhcV-1KhfF-09wIc0ea0y5OddePfiivc-kk---0--hB85hIq---PPqqQ-ACDhYBegf9nBoyOyOtzzxAUzUxrxzxKrqUSHnEyUzzOzbcXXe5e9X97XXXccX9Xee--1UpAF-SFcxhOX-1eB0xgo--Jd31--9KJS-9pBVymefBnKMUUaOVNN72Xdb-LMveiuLKJKMinzzzvfY2BzjEzzY3GK3FK4KOGKF-0Ji17-ueZcLLyvwzYGGK-0KK8igpzza9cc4aecw5eQeefeK3iifeyVyyaPysnzivW-yvivjf3G32JdFG5OJG-3--EB2003-C_GGF-0M4Pc--fYVJ-0L1VIV-1kjSF-0NOQ7--gXeJ--LIdm--AAXh--Kaimk--h2YJ--LYMm--fHOlV-4QMoB-1fQzGbV-OM1DQUKrSV17XV-PsGvQ--0R8xc-Pi9hLee----4n7gV0uuK8Ovwo_F-0SPF7-Tihf5jioG3-rMLqIMSxJfMpp51-Uk7-X7mV-1vH3F-0SiM7--ivJJ-4MU-YL--5j0_5V--MW4m-Ffnz4uebcnu-E0K3--4umFV-1xQQF0KULdhJnCaOX--5ji96o-jMt7YCKBproNN55-KC9-7-Pjp4LPbw---4zuVV-2-p7F-4VdEB-3g5r8awo-6q3GTnIBnBlaOaOV--kXLJ-0NJ5IV7f1wFOePedueiffjEBwB-FFFFFG0F7pWV6CJfCAHcXBnHgpIN5Ox6lbxrJpMSxbpNN7V56rMF5-7-X577V--lo2Z-0O25AV-28oRFJ__7yBm_ICCAEJgcnBdJonCBgegnJpS9XXe7nIKCSSKpxppCpKUrbzKOzaUUoUzKLOttxGVV557-OWtbVWV0a6ryX7X70cX1-cUu-Uy90zaPcXe90XX--AA8ER--Oap9--gnQdkH4b2ThSprSrUSrMSSUSxpMKpUSprMKrMKSpprUMMSrrSrSR6rbr--N--0X71d9-VV7e7WaWu1Zc-cVe95BcZe7917X7cXV7VX9eeX9--Bw-4--LXIak-9oUkasF-KdZHh5--QKOSQF-0f7Ac-DpZnLQC--5ifVV-2M_TF2_g-RhCKoxKSR7-6xX7OVh9-77uqCsLOaOKKK4K45PKaadudaaeddaejyeedeTsz--o-k0-nzuafiueskznG3FB3FG3EBnknEs4_OOGa_K03F-BBzvnywzvvzEBBkk-EQ93ASrF17--hcV8V-0ho3c-1r18a-KLsKtn9ghIKopJxGbzlz5PcOWWV6bZeVXV-erChLbuawo3F-0QgRIV0AS_oTz4F-0iqsc-LrVEayh0F-0jBw7-1raaM0sqwtimmmocCrUzKrUzbxJeYBexrSIoT50xMUUSrzrrxxxrppMMIrI9gnJzzaUOzSrSUUzxtbX7OsU-UOzrUxxSSSpxSrzxzrr57cWue-BcVX-X7X10bqN7e7ce7-7cX7eX7ecccXce9e9997eBhHmhBnBme7791-5119cXV-ATZeR--Qs0X--CxF4-2M-EHrMNVV-1s18b-0M09Rrc-3i33Gcy3-7r1pBmhExpSrcP9-7-3i6ThbzJ-0r2kLmxV-LsT9bywKF-Cl8ajc-5sg76o--RNyP--DBcS--r75Dw--AZP8N-CRYLYIrWcV-AZ_gR-hRb0Q9efBUUzzxrq7Ve9--DIcG--69X3V-2_KXF0CmrNBxUTN7e--DM2x--MBNss1qtbGTeeeiebfeviufifjG-FF-FK-2F-F0-F--6CEoV-2b0EF-pnx7hKlVX--DWBO-IrGX5pJgomd9Beefrr6rUttyNUsWaN9c-iuOLLLPjcnF2--0p_uc--uwAJ-ISZnnCIKWa---QgbdT-0_qJ7CprKy7917--Do60-0MPdwpc0LirO4eLzjezyyzzzyyzjzjzzzvvsFEiyn3OJFKKJFEwwKOKJJKGd_GKKG3JK4KJ-ESx2nSrP79-5j2XKaPVn--_t4Cgjtc-1wYGa--6ZPXV-Ama9N-CTK4nUSXX--2n3-F24thzhrHcXnIqUttxbcd97-3jCxpvh0-1rbiZpEa1-JjETd_azzgznzC_KK4F-0TTz2V-2nrwF-Ctvzgs-Dwy-LEp--Mcags11x3uLKKLPLLLOeNwzBknnwwzECF-0uAGc-ax4e5iii30---6dYeV-2pDWF-0v0pc-uxhu5KvzivnG3GF-0vS9c-Tximavyl4F0GTtRbKpKKKIMKorSKxcP77--50cV1--X-0jSM8x--MlFHs-PyMyriv3J--6njmV-AuIRR--UKqu7wjf1GaaeOdiaPdeeaeadePOdd_OGG3FK43G443G3G-nBB-En2B3P_3HKJKGJJHPdOKJO_aOeOaaQe_K4_F3G3O_8PKOeLOPeOK9TddJ01OaPPu_aOdaO__OKKaK___GOOOaLLLOd_-9PPeaPPefeueOH_Afeeeueuaeaieeeaadd_OdvvivzynwnnwnEnzzzzzznBnBzEEEEzznwzEnwzzzzvizyzuuaveuePv-wnBwwnBnEePaOaPaOLEwBknueaaMwzeeePPujjczvyvwnnnEuuusEnnEEEEzznEBBBkn2BnE2BknknBnBwwn2Bn2B2BBBkkn2--3Bk-k-F3F3J0F-BK8J-0-3Fl43J0JJFC0220-FFB--434_F02-3-FoF-3--ULK1-9jk6__KPzsnC-0rs2uxu7-5z6oLo-0Ua7Y--2yTuFFpzEegnKCAHYSIEIBgmnBen9mhJonKKpKpKIICCBopKMKpCMMMSxxtbbyOVNN50V550VN50VN50WVN-0a--0xLN-V--711-V0R4w-PfBJ-5sCnMpUSzGcVcX--36DPF-a3T2CpX7-21Rkb--7L9iV-3CdyF-D7K1E--E3yyLPB-AsdryprMSrUMUXVXX77X7-0lNuCb-0sh-cpsV-24z4a-0O5skoP--HJcO--8cjcVMwvW_PePffuOedddaOd_OLivedaLOQswwnnBwnnBBEEz2EknBl___JJF2-ddFJBB-kFJF-3Oxo3mryUe9--oNo0k-L_0tBtV-x9UXPVk0Kd_2QCCKJnKMU6Wy6x0a5OtWWaA9f9eX9VNhBeeOaOaK_aOaOOOOOOOLK___aLLLL_aLbzjjjEnnnEEBnEBnBwwzEzFnBzBnnnBwkBOJ3--9Q2JV0hFDWPTj03-0esaIV-4M3pF-DfxqCV-0LPM3-8fbYnBy5-Cq8_WadYzEwLK3--A59FV-CZXbR-2ghDYk--LQk_-0vCsPnTV-0OncZ--gxEe--LXbt-4QGLNnIMaTP9V-4d4NF0DoYGBxBttWe--LdTx--AJjgV-4fDgF-1q1n72bQ0Tq_fzyaLyy__JbzjyiyEvnzoEzz4K44GG440J0GJ--AQaoV-hj4xQW--QUtTs-0QzBZ-2hzuIu--M0W0-3QVpXzUSX9X--r954k-6-LVD--s6udk-U12pBUe--NKbO--B9nkV-55gUGAILAU-ee9eeXeeXeee9eeXeyN9eeeee9XAzbzzzUUtzxzrza1fzrzs7Xe9XmeeiUzrWztzbzzsUztbyUUrztzUzzyUVfzMzzzzzzzzzzyUzzzy1SzSxzrzVczzSpUzbrzzztzzzzrzzy1cXXecXe9zzxzV9eeee99USzzzztzSzzzzzzzzzzWtzMUbUztUSzzzrzzsD2xzxrzbxrzbVeXUzMMzbztzztyUWVX7cX7X7ccX8rtVX2Vc1gVWrVNOta1UbbaT6byOyTMqXggpFemnBnLpThScXXopfJppUhSzt_USUrxSxSzUUKwepzznMzUwefMzSCJXAKRemgegeeoeeeeeeXe99eACMxzUrxzUzzzPmeceeeeXeepzrzzzr9eee9e9ehUrxzrzryUzzzxwg-3sRUlgzK-1wGfBrUXc-1s_20ck-8lARQMsc-6sakWaUYsG--BJEyXtygSR0KGMwzkKK_KK_KJKK4JRnEEEEzEnwznzwzwzzzwzzwzjw3wkznnnkKOKGnEzwEEwzB0wn2vyizz0nEEqPvnzzzwjjEjzEEwznzzEzzwnvz2jjvvzwnkTzzzj2vznzvzyzzyzzwzzwzzwzwzzzEnwnknzfjvuzECfjDzEBBwzEwzEwzwzzE2vfwzk6njvw-nzEEzEzyzvjvLizyyzzzyzzzzzvzzzzzeOPPKd_4aPuwnaLK_aOezjEwznnn2EEnn2wzzEmwznzEn2nwwzznwwnywwzzvzEznwwnDPzzwzzzzvzEvznzjEyjEEnnwzzzzvzvzywviwzzEBwzwzzveznyuzjEzzzwznzjwzjwwztfvzznEEEnzzzzzwn2BwuO_fizzvzzjzjDywzjjEqKfyvzEOfzzyLjzmzzn2hPjjAwzjvjezvnfzzzjAzfjjqKOO___OL_KKKOK_LKLO_KKaKKOaOOLOO_ePLiKKKLKKLKKLOOKa--wN-ww--DBg5N-4latIyc-MYUfaRyCF066q1CJxa5X--5F6mF7z9BugfEUSrSArzxBefBeJcrrzbtzUzHmfUzzzttVX7X7XXX7XXX9--yKGGTsF-2mkw2k-3tQstjx4--BkdsV0DNK7PzGF-6B9ki-9tXkO_K_zznl-0RovXrc--OeZW-IRqTXoeXefUzzzxHYUyWzzzu9XZmZe7-1tmAWzJ-0nbeYV0DRxYTvG--2Dto7-0bYlJ-0nm6v-4DTdBTzyzvzvlJKJK4K-8wxJTrrrzrzOceXce9V-DTg9R-dnsbYExxryUzaeeceec-6bz2Lk-2o5Gnu-1u2YOv3-0oCyAV-iaLAUp--CCXRV2Db2oOOwzvnpKF-ppYW0bVVaOyUzzzrxpxpzPk-2eBMb-8xGoerUUxzry9Xce9XV2ydQ2OK_OjjnBwnJ--pC19-2uliNEyk" :
		12 === bI.sF ? oG =
		"JJAf2uP6y-0nEiiuyywnyueuTbfevfvvjivivivjfvivviyvuuyEgzjjzzvviyvizvviuNziyvijvijfvyvgzvvvvfeu0-F-n5a_GG4KJGGG3G3G3FFJFmKGJ4JGGGG3GJJFJG3G3G323G--kLPeduaKGFGGGG443JJJJJJG--B-C0FJK__443-BJ-66wmpBnJopCMJpCCCIIIJoopKKICKCBnCKJgooopMIDOzzSzUzbzzUSyTUxxrrrrrP1XcXXX9Hcn9cceemece7cPIoeX0sWWaOWVNTOcTNNcN0V0V5-N0aOa-0V--N50a5Obyc-M0z3TPOdgBnBF0NOpxpMV7-M2mMiLbinz03F0sTx8mfrNT-2l6QEdMwwp-5XX7UMTP1V1GIuvaNn-5Xfxrpw5XV1GNTEfn4-_XvzjAAA9mfA9ed9fpzyTUzyUaUyOX3n59NTKLLKHPPPO_LK4iidea_O_QeideeaLOLLJG3-0eeddOaPO_OKLKzEznzjgnnzBykknByEYnByug-3332ElJ222-2wBko2BnBnBwwzwx-9Y6j6rrrkccc-E5ctEizpJF-aDYgSMGz-X10G6VyjiyuuPeiuzjivh3G3K3G--k-9JGFAPEIZSKBghKSMIpKpCJnI9gcXeccehHccoeXBeoppKIJoghIHnCJnJmemmecmfA9jyTUzzzbbxbV0WaTT-OtWWWV0zxtyUN6yUzSxrSqTUztaN71190V7-5V15VUy--V-lxHEg--33oL-67Dhyu0--3FoL--7ahw-LGYowfzu-0HFMIfF-aHWWwxxxcXX-E8ZrUdfVl--TIJLzSr17V0wcDLvivjysGK3G4XaJb1zppIJpBccccge7fUxx9eocX7cXX6y7Y99Heggen9nJdAHp9Xnp9IIJfICIBdCKKIIMMJme19eXxxp9X9VVfEMMMSBpooe7XCSBomccxxpHcrKKCMHmXXmcxoeX1mpJe70BrMJmVV--gxExIpJcX71nKCJmhCKKCIJoopCKKKHX8KHd9nKrKBj6xrSrKpz6xSMMSrKppwObaP-UzSCAICIKCIKKKCMMKKCpCMMSrrrKpKprUSprMUSMrSprKrSpSrUrUSxpxprSrMrMprSSSppMKprSprrSrxKSUSqUGbqUbbrxrSxrSrKHXXeggeYBnBgmnBnKCrJnKpIKpBnKCMMrSS9chKKIBeX77EIAE5OxIIKKKIIEKSKSKKSKKMKpKpKKSMSSSSrSzxxxzlzzUzzzzzUxrMMMMSxxxrrxrrxxxxzUzOzrbxzrxzzzw6w6yOtttttyUbbyTTTTTTTTTUtzIrzbzbzbba-71-VVV77V--7711-V1-1---51--1-1-V0cN-N5VN1e-ee7-1mc71Xe9fIBcVV0WbyOzxX-VV7VNN5TUzUu1ce9menBecmf9gxHc7c7V-777---50VP-V-N-0WxppSJpr6zyObzttV6rMKpUyObttbryUbzWaP0sNNOX757X97X7ce9XXXXXVc7-V-X7VX5-V7eeA9menA9fBnCBnIIJoorMIRObpIKMJpppSSSMSoeX71-V7777X97c5V-ccWV0VX77--NN55-N--7U5111cXXenBcc7fABgcX117X7c-gf9emV---1--XXXVX7X17579VVV117Xed9XecXX--WV5Uzz6zyUzrSrUUaNUlxtzXXXee1777X1e-5NOy--WV5OttttaTUzyUrxxtzzzlzMUrzzxaUttbbxWzxpSonBmpCCJpCKCIJpJooeACHpprSxaOV577U6sOWV-NNN70WVOWzwTTT5NUxryUba5NNOba1cc79cXX199X-91X99mhIHfJmXgxxxpHe9XccX997c7X0zV--V-N7P6k49V711-111X-77cX79mmeHeccV1mdbn_Uno-DKNVSo1-O9kaiKKzzEzpK-8_SLEzzzeeeV1Hinzjh3-8_UsM9mjtyTVBHk8AfiyvivizpG43G3GG--0OIzV2mnjMaLEBxn29mc4SSpprSSSUprrKprSSpppKMMSrMrxrKIKHhKHfIKKpIBpCIIJpIJnIKpSKJo1AKKpppxprSprpMKphIKhMUSrCKMRpMKrrSMMMMSKUVUxxUxSJe19efAKKUbKnMxKKUKIKUStaSrUMTUrzbzxxrSzzUy5SSKtbqprTprzSxxSrBXe9ghSrMMUyUzzbySKrUKpUSpSUMtV---D--0aN-X9997977VVe9XD-19XX1-9XcXXXXYxzUttzbV-7VX78by0rUSppKMbs5-V77V77X-X71--17-X-7V-0WWVN-6byTOrJepKpSrpxrUSSIKSKSzrrrs797c1711ObUSxxpSSSSSSy5--7997VV6z_rrSrxpSprs-7VX17XeXVXN-11-TUUSxztyTT5ObzrSSrzbtbbtUKzrxrSxzUrzUzShKhMKrxzzzxyMtzqnAA9mgfAAACKICBnKzbbWWbaOtbaOaTUbtyUyTTTOaOa556zyMxrUtaTUzrxrrrzSzxzbta5N0s-ee997cX97cX7cX7X771-V-aT--V17V7X1--V7Xea6ty5T5Mts5--5-550aT55NU_ySxxta5OVD--0VN5NND-N--8a6a5OsN1og55OVVOta-75OTSqhCMrBmhMbbtzzzzta--NN5-8Us0V-N1eD-XN0VOKppraT18zs0SyOUaOa5OaN1-VcX7X5OSpSxpMSra5NNObV5-N19cVc-W_KMSrrxxztzsND--MJpKMrzb_pyTMzUa5-0a5-X-VOIMMMSBnKKSMrMzprzaQBen1ceeXcccempprtzUUSv9mmfMrxzUMxpUUUrzbztrxyOzUxrrMzbWbJppSvC7gmenA9mgggfABgnBf9nBppUrttbzUzCKrSSxzbaUxPfMSKpKnJhRpIAIIKrSzUMMzxztyTObaTOWWaTTTUbzzrza5ObaTOWbbbUrSrStzyUUzbyN--s5T2rs-1XeXeefBn97VfBnIBemf97cXcX7bWV1111c1eiN7f-ABa6s19n77X7g97cceX7f11UzUppry-N0MMAIKzV4UW_rJoppza55-TMSsNObztaOa6KzV-77N-SKKSUzbaOaOyUtzzzyTUbtzxrsOaObtttSraOWaObzzzzz_ptaUbyMzzyUtbVUyUrUzzzzzUzzxyQMzzUzzzeeeeXee9Xeee9eeeefKMIKcf9ggnABemefCCKzrLf99X1fABgeeXAKSSMKxxzUSrSraMRpSxrQA7X7X9oopBo1N9gnIKCIJmmmnKIKJomn7emfMBc51997cenKMUzPmegmfMMSzzyNA9OzzUUIKMUKrKpSSrUrxza6SrMSrrMSrUUxzrxxxrUSSzSSxSUSxSrSSrSrpUrMMUSprrUUUUSpKrySzSrxzzxpzSppprrzUrSpSSCSRprSMKKpMKrMKKCIIIBohIBonAAABnABmgemhBmmmeenBnA9X9ecceeXX7Xemmcemgef9nA7en9kecee9eXeX1-enBkeX7XeXce92VXX99ceACBn9XX77XVVV--X7XemmgeeXXX997VVc75OVeX9hAAA7eeme9eXe9Xeeee9e9ceemmmmf9meegfHenBmfBnA9mgggemnBggfBnIHmmekeeceX9e9cXXXmoeceeXce9Xce99eXnBpCBpSrSrSrMSxzzxyeeeeemkeemgf9pprUzUHmeXXem99e9eceef1dbs17ecepKrMgg9XeXccX-Xeen7cXeenBmnBghCBgnBACCCMCKJohCCMrzzzyUzzzzqognBmnCKprMSMACKpz_wmoogepCKrMSMStUZkeeeeAH15-11-X9hCKMSRomcgpKzprpprs0z_rKppzrSrzSpIKIBgXmprrUKIKKrttpKzSUBomm97ghJpSyUzSzzzUbzzUtrzfAI9epnHceceemegghUUzxzWbzzrbTopMSta5OVOrzzUSKUUxrsOrpxQCSrIIKSxSrSzSrzUrUUtttztUtbzxxMaOV-sOWV5--NNOUzUzxzxzUUrSxrrUSrrSzrrSxSprSppprSpxrrrUUrbbtzrbbrztzzrbbyTT6bSyOa0aTOaOy5T6aTOzbzpxxxxpzUSxs7XESrKyOUrtaOa17zyUaTOaOSxprKCKgnIAAABnBnKppppppJnHnCMJnCCKMSrSSKKICCKKKKppKo-2AYFDB--MPns--j8uk-0TwQV7mzO6ievyyvFGK3F--qNX0zxzxrXce9c-3mKUw-DOJuzw9-lBkNyuuuviyzjJK43G000-OaPJEprzSKMrrkccc-1997-2C8pDo-uPOqwf9mnbbtyTV-2Jzv--5gXT-CCmSUvvGG--5xsy-0D-rE-4b-qzSqX7--sMmk-0lNEV-IZ0nk-tm6EnFN-Rt3BvgF-5ReOUc-otNAvisG30DRoZzUzzzrwP9eeecc-3uJps0eSSKRrMGzrzrrM-V-eXXeX--2fpn--6MiT-0DoXD--6ULD--E2lg--TGhs--wrkk-0uNAV-npyzx-0bkCEF-6EeL6jG-5bpJQAEbaV0nuubvp-0dya3mhrk--BzMKzF28zMOzrMUP779c-gziXufkG-2byBQrcV-J-IhV490elopIKKJzlX70V---2FCPyV-HVlaxpX7-x0_hzvvGGF-12_CV1o6LCaeB---Vy4s-K15tuR-0cH3EP-AFalyPf--1u44Wxxxr17cc-CFkqTusBG-2cO5jMcV3oE3YuuiB3FF0P7tWrre9-4GLRUh--19rRV-JN8nk-1B7iV-3OQA--cpNzV8oQxrjjizyyw4KKG44-1d-ezGV-_77wzvGF0eJQZmxL0V-C9jlvF09OI0rTX--JoI0k-PTDyyV-40oK--e5AbV7K29M_OLMfgznEB4-IfrEMASpSUSq-7-Nee-ANaSDyx3F0A69npL--1qoP6bvVF-qtlNxCKCUa0V7V0xqOguudaNznk-G3-Lvq2RrOc-2N7SOfvlG-2g3LFmnKUrla-7X--Vg031A1AJgoxMSporMSSr-XV--10aNXeV-y7CVQfz0GF0RIcNptae02XdsiLTezvzyyyzjzGGGGGGGGG3--GRVT-QXt0TTyyzwK4GJ-r5K0genCxtwT-V-yBnotTvg-F-RR4WyVBNuCtdejvYyi-knBLOFJJF3BSAjnMSzUbsX9XeV3t0vf_fzv-GF0wZ8bxrOe9--8AQA--HN1m-CZlGTLRwx-cmONzIxrprppKprUyUts-XccX1e97cXc--_7pw029QbgoonJUROV5-V-iJrguik4--mdjY-0tQAdaRk-BiCss-aMQLTjJ--3jUaV4tUqAvjzx5KGF-YB7rwfzwOeVuOXlO_O__Kbj2vizuviyuuvfeveTiviynvYziefiiefvfiYvjB-444G3F-0-2-kJ304K3GGG3JG34--F3GJ-IBbGxS--3yOw8PPd_GaaiC-Eueibvyvx-304--C-2IBzcggmeenCMSrwOaOzKHmnrUSxzTOu--V7VVV9c-yPFVPuf0-F0gt0ZpKs17-aTPhOiBFxRy2ZmgnJeeXAICBnBenJzSrKKrrSSrKpMKJnBnCKMSMIKMrxSOV0V0zzUKSpppSKSEKIESOV-Oa0sOzUrMKSppSUMMkP77V-0a1--VP-17--71--7-UxSrrrrSJpqOtzzOX770hBcX7V5--XXV11cc717X7X9XX999777X7e-_chDLLiiivYEl33G3-Vock29fSpSKonCMU5OaNV-NNX7c2DaQYtPjzvjfiywGK33G3G-0xDlzpUyX9V5PSx2jyuzVGGK-0CFZWnwNV1uXF0_fBo1IJJoSSJnACCCKppSxyUV-117-N711-6evlav4-JpSyQKUSSSpaX517c-c-yg6luPzk3F0CNJQpy9-iumBnaLKKeudOKG_KLKLLLueLOaQEEjEjyinEyzejjnskBnwC043F2-nn2zE2EEoKGKFASOdporHX8CBhzxraUqUzSlzSX77eeeXBc0V-LhikvW--KmlL-EfebDLTskk-YMe-RrMTV7V2uyCCaPEBC-5q1sjK6a7V-A2Ih-Aq892rMUNP7cc-TlB1tv--ANsVBjV2v6d6aOwnp-7qIGAIJlaNV1imQQOPszivwzE8GGGGJ0vODuRhCrppCBpULN5N7NX90WX-6gppqPk-GqSXfBnqOxtaUemec-5nnTs-YPD2wz6re9-3QGmz__bnno-2PJQD-KhKnTaaTn-nF-0Pg_N-aphUzj4FKhhRbmhUrKHohIzMpxrpKKKSMKSKxrU5N5OaUL--X11777Hf9VX-N7--5P-XHXe-0hhca-WqtqMCppppSJp6ltz5NVXV-X17eV0QUJbjJ-nREfwnBwOtbae-IiGGaLPvEk0-Er7eI9nCKpUa0V--1v_ZSfcl--0T7Zc0TwsLPNzgz8K4--MdCP-8jMTqMno-QTv6BfDUs-CjSgLdjBG--rknYV0vttlfW-0CxT2mcUV6Qv4daeffkn3J3B-EUOXBja1CjifiOvd_LdKKaaOaK--nBw8aOFFeeKbfivzjix3En-2Ennz-n-3-2UYTi-bkAQ5LLKaRzgwnznGJ-MWJCRr5NV0wBylcwF0D6jaola--BJZx--NfgX-6lRkav3--sx_2V7RUnUaK_aLLQjzzz-atBrI9mgmnICCpCKLTOaOzs0aNOWV9c-E9stskaiM_-pIJnKoxxzxzrUrrxzUxzSrUSzSpISxzxbxzzzzrzzrzxbzrzUta-0YBe7mf9eeV--P9eee7XXcecVXeXceA9eeeXX-c7T9Bee997n9X-0wqC2ylF4iQ5frxSUzJzqNX9cX97V1wr6EuslF-YbY3xSUaeX--x1Jxc--uDnn-6S8wKaPedvn-FFB-zea6RfESrSq7-WX-6pPVqNx-dun9rIIKMSrSrSxxBzbts7XeX97XX7N---2MXGF3ilDMnrSppGa50VeXcHjS0jOLKO_LOaK_K_K_LKK_JKK4K4KGPedaOK44KOPaK_3aefffeTzivizzzyuvkBzwzszEEnwnn-nzyzwzv03G00-B2EzBEBwzBwnEE2-ow4SEIJmcccxxrUJnBonSrrztzyTOts-9X7VX7X9-YvBN2wwwwzvvjjzzk0zOXTUyUxzV" :
		13 === bI.sF ? oG =
		"C0DX0NP1V--QqeadnzzjynEEzzjjivdivfezjj2BBwzwnEzzzzzEjnnvYBBBBEBnzz-UV-hflzUUSrrUzSxSxzk0a1-V50K-0pMiudevf-zvfeBnyviVF-F33-yzgp3bVV02IKUrHnUzzpHz5UzUzSKrUrzbyNN-OzzxzUUUSrSrrrtzttzWaOaTUzSxxaOaOxrKBnCSKCIMSKKKKIBpIJoonIJopCJpJpCCCBnBggeXn9eccc9X7geXXn9efHfBnABemcXX9eece7XHXeXecegeeVV1ee9eX9ecc70eXcXe9enA9fAABnBnJpMKpKJnBnHmmeeXX7X7cceXXce9eeccXVVVV-VeXe97Xcee9f9eXeXXXXceWVWBc29cX7V-6aOaTOWWV-1XX17-NOtWaNVnBn97X-7cf9mmnBemXgece9I9eXXomgeh9eX99eeeemf9BmmeHgeeegfBggmnHoeABeggnIBggeeeecVI9eeemeXe7cX1-ZmfIKCCIJooonIIBnAAAA9mmgnIIBnBpKCBnCCCKKKMSKJoonIBohBmnABnCABfA9gd9mhBopCIJonABgmnJopCCKJpBnBnBnCJnCCCJnKBoggpIKCKJ-UMSGxrMMKKIIISrKpSKKKKJopCIIKKKCCCBnIBjSrSSpKppqUI9cpKIKrrrKSzyUpKpMxS5UKxMSrSxxxpSrSKpIrHxrSMSzHfrxxzUUUSxrSrSxxxrSrrSrSrrrrrrUUxryOtttzbttyUzzbtzzUzzxzzUxzrTTTTUbyTTTTTUbbxy0byUtzyUzyUzzzzxzrrSrSSSppSSMrRN-OxpSMztzbzzzVUrLUSpprUtxKbxBfrSKJpKKJonICppKHnKKJoopKISppSrMKrSrrUSSpxxMSxprUSMMSSpKMSttzzI9f9hMMMSrKSMKpprKKHnCSSKpMMSSrKKKKKCIIC9gnJonBpKAKJpJpBpKBnCpMKKCKCKpKSSSrSrMMMMKrMSSMKSSSprMMMpUKppSJpKKKKMKSSppIMIpKKMSKSpKMSSSprMrSrMMSSrKppMMKSSMSSSSSprSMKKSKBmgprSSppSIMzxCUzprMUyTObbyUzzzaOaUzzzUtzzzUUqOaUxy0bzzzbbtaTOaTOaOaObaOa5OWbaOtWaOWa555555NNOWaOaObaOa57-6WV0WWV--O97VWWWaObbbtyTUttyTOaNNNHV0V-N---9-V-777579775-0taTOaOaObyNOa5OaOWbbaTTTTTUztWbbbaOVOWaOa5-5N-7X--V-517T7---7-Wa0V-X7ccX7-7-77VV-5-7-5N17X7XV-0VN5-N5TNNNNN50aN-5Oza5OaOtsOWWaOWaOWaOaOaOaOaObaOaObaTTTOtbaTOtaOaOWaOaOaNOaOWWWaNOa5NNNN5-Oa5NN0WaT550WaNNN--N0aN7--0WcefIBf9en9geecmmf9eAAABgee9egfBgmeee7cX7X777cce5TTT-VVX1cX1c7197X977X7Xe79eX15hHX11717-7-V-V71177VXX7X7ce-V-1-1-----117--cXX77ce1-VVV-0u7X777117771177V771-717VV-977X77VVV-7X-OWxpSSMSrMKMSSrSrSy5150WV0V5OzJpKCKCCUzSrSSSrKrSprMKprpMUMMMpKKSpzSxxrUMSSMKpppSCKKSMISMSrMMUUrrSrUKSSpppMpSSSpxrrSKrSpSMKKJhSMKppKKppSKKSSprxtzaUTObbaObzzzbyUby5OtzrtzWsObbbtzttbtztzaTTUs-o-9SuvkpF---4GN0--Akuevkk-0Z-5DzUUzzUMMSrUUrrxzzV0k24nbEF-72uPs-31lfR-X0zvBgpOsN---Fjh-1VahUR-033plvivC44-bVp12CUzzrxpztzzzy2A979eeXd9eXXVGkPch_OLJKKa_OLujjznwwkzo-Eno-q32WRrMKpkV7-V--7jXk2-IvW9e-7xySpV2kZ-vaazk0-HWAOjKHprsWxta7ccV2FavYivl3F2cIsAppKMwN117X-81g-ifoF-L4N9UrkcVDFfPz___bjvjjEB3ByvEGJKK--WQlvV0kn8QjoF0NPnGrScX-E2V6yPuEF3-D6-ISGX-42b3rh-0NYH_ooy-3P8eEOJFGGIB-B-0-2043LaPdaeeiZ30003G002j-03-JGFGJ-4K-03G-3303330NBzB-UzzB3DvzuzByyfiivieivifevefjzyw-D9vlxqX-A58vaOYw-07nF-rFPV4lbM4aaabBn3B-mC6fBmmjSOa5N-25o35o--CiYN-gQSZPTw0--2QiX--66YJ-9FT6CN-BHQ8jadHQyddcyvG2232-F-8Hr8k--dcfk6dIezn9YpIBhC5Oa6y5UrWZmX70C2JVtUzzp4J-mXEjworrq557e-6IQmyv4--dmmEV-JuCMk-9SVlk3KDxRuPiueObi_JGTyycnBk--4-BF-eicPos02KqRDLPefeTiuiviuk-K33F-----6f9qfBnUWV-jMD3iO_aOaPOiwBnBnn--0evOEn5U5c1_T5ktLKKGTvjzzYp-w0Rg9s6ABmeWBmghJonKxCIKIKKSKWa6zzro5Uxltbe9e5OtVOWaN-N6w6y2ABcX17cXV-SWU2PBo-alHDReopsOa-OOYdiPPPgnE00--BsPu--Oo5J-5oKjx-AxeUxtaeeTeeffeuePauuvivijfieiivePgyvvC000000-3-3G35JG-2BF0-30-2FFFF--3hlWISD1-ER5o5evV0-0eu7_RjSSprzrSrcX7X7X7X--6KDt-HirDjBnBnKMba5551-3rQbzaaEBnpFJAmhxnKSSSSKKKKonIKKpKpMKrSKIr5UrNV79V1----V55N-1V1-7-7-X79-IUBriLagwC2-3jm7YKkV7jUvJLaLMeudeP_LPK3PfeaLeaa_F8aaLLOaO__KHdOK8__KeePOdaaieeeiiefifeeddddaaPadOPePPeeiiveueaeeivfeiuyzjvvizEBwwwzzEE2-kkBB2-2-kB-2-B222-B-k22-BB2-B-BB222-k-kF-B22Bk0-F32nyevg220-FF-0--0-F003G-G0-Cl0ab9eefxzzba-AX5ODuklF2RKFUonyUUaPXeV9sgwrddaLaPNn2BnEE0F3RULpn9opxbbbtXVe-Y_1riO_LKfvEink--0BfCIpy1V" :
		14 === bI.sF ? oG =
		"EcA20EP9t--46idaPadePOddiaeuuuebieeiiivuO_aRnufezijzzvzjvfuuPKJFJGG3GPKGPOaTiiiedaduus2EYuiedn2nyffdv32--0202EzeRwoG--Ezzjevck20202zeufik43BFBFK0G4-0_J--nyioC03-0002-n22wyddyjfzven3Eyv3JJ20-zynnEyjnnvjizjjejzyy_wznnBn2zvnzyvzBl3GG3G--23FFo0-wzBB8m--ZISrMUUSpzrxxrKrrSKpppKKIACBnAA9mmgfBcee9cXef9geeeXVf9999199ge17V7Hgce7c15ABee99eeXegegegfBgfA9mgomeecXcXgeXceXnBrxSxxzHecefAUUJceccgce0AxBeXXXeceY9nTUJgoepCJnzzzxIBfrMpIJmnpHmc58EJmnrSbrMrUKJnIKxrHgrUzrxKCbtzprzxKISpxzU5Ulzq0a-NOzzxxzSxrprSSpxxrzrtztyUtaOaTObzxpxrUyObaOxMKBn9pMKICCKSKIKKCMKCACBpCACBonIJnKIHhKBpKBpBonCBmnHmgeme1ggeeeX17Xc7VY9e7emdBe97gfBfBfBfBf9e7X7cXeXc19eX-ecXceX9Vf9cee7V-P1e9cecX7e9X7X-0XcX7c97e9V0--O6glDk-BjnBnJpKKMSKrrMSSpSSrxMrSSrMKMprSKzUzzSI9cmgonCKIJppI9YKCKCKKSKKSMMrrUzzzUSMSrUUUSzrzUzryUaUyUyUbxlzzs7-V15X----V---NNccX-ccc0y10WeeeeV--70V6xUztWxMSzbbc6xta11cX9X7V7-X-eHeggnCISpKHX1V1X-7-Oa-N5Xe98HeVVVeeV0X9711-3--XjabvBG-0s7nSrxGc9-BFOunededziszBzG0-G-KF2NDz6rSzzu9d99-0FVIObk153LiReenAUbbxzxzrpxq--e9e9e-A1JTaukCF07J23pq7---cVM--WN3QV1khy_awxF-H4kIRjyV-oCGnvjx3J-16-Ny-U2iSDjyffv33G4F-CWtG2GxSUlV79e--2nbB--6j1s0REhiviizkJG4-4X-vYML77-ZHJ3Pv3-1cZeNponGtV-V4lDIreOiuBl-3-DAESjT9-r4cgTLLKKOaQjzyvgn3FBEB--1pnH-E4zQyafnG--5BKbgN-3Oxws0iCDazIKxKMMIr5OVX1V7759-05hoa-4YPwIzTXc0oS4-OaOaanwnB0-qYoDA9pIrzxzpzpKzzzzUzrWVf9cP1ceceVemcc7cV0H9uMvF-eGU9USSbuX975JYvsOLKOKKK4OaLJKPueTzjEzjzBn2zj3-Bnwn-B_HnzBpIzyNX7V1mi7bfz3J09L-pSKKCSrs5P7VX7-YBjWieueuusF-F03-0dhx_nILN-03vANuaQYl---6b56-jf6VcBknBBn-Bk2BnEBkBkn-BnBkBw-----n2Bk------kn04GKKKaOaO__KKKPLOKLKGKKLKaKKKKKLLKaOOLGKKK3KaKLKOaKaOKKKG3G43G3J33F3G4G4JGznnE2--G-G3334L33G43J-33JG3KG303F433GK3K3GKG3G3k3GKOffaF--GG-FG3---F-3I-3F0-0303F40GGG-G03GG4FF0--FF2-----0---k-G-F3--04343G-G3KG030-0-Gk-2DwkG43F3G0-30-F3F30-00-G30-0-F-3--G33I--03FG3303F3-I0--3F-nDtfefeuvfideeviivfiuviuzwn--B2BBB22--wn9PeLeeLeaPOfjzyvuiveuifhfifiivevefffjiafjiuifeypeeeiivejEivjiivijfiuieiiueuieeeeeafieeeujvifffiuzziviuzivieifiififPivfeifivPvyvijviefivevevafieeaOeueevfeeveeeuiufiaeefifivizizzwmznEzzBnEzBnBnznEzzzzwzwEzwnBnEnAyzzBzzBn-nEnBznEwzzwnBnzzEEzBznnnBznEk--22B2zkzwnnwnzznBnnEzzzmvwEEBkBk-B2znEzEznBn--kBnBEnzBzzw---4--2-n-RB2Dvfzn0n-kB2BnB2nBknBBB2-n-3-KK3JG0304-G43GLJJK_K4JJJKJG3F43G03F3-Fk3-3-k--FLOadeOaOaOOaPOada__aOe_LPaPOK_KOGGKKKKOaOKKJG-K3Gk--nB-FF-3Rk-JGGKaPPeaPPeuieW00-FF3G3FFF--2-J0-GJ43G3JG-0KK2-3G3G-3F0-3G00-F4N2znB-3jEzzBk-ivzzfjEBAzievivivieevivueiuiuufivzzzvivzuivivjvyvzejvjwzzvyvzwnnBzn_ejEBzzEB2-LOKOaMBBzzBnzwzizieveefifieizzzvyzzznyyvzznvjEzzwzBijzjyzznDzzwnnEyznzznEnEEw2yajzDjwBvnznEnzkzEznivvheejwzjefievveyzByvnmeziuvfiyvyzjnzjBwnkzaeO_PO_dLLG4PPvjivjivjiuviyviyzjwzwnE2zBnBnB2-k--4222BzEOOaeiejxPeeuuuuqeuaeeuuefifefefeeffeuuifeveffeueiieuvfiiveufiivvfeuuiuffieeuufuffieyvjiyfeveiuiffifefieevuiivfjivvjwwnBn2BB--BBnnBwn--2-k2BBwzE---0--0B3F-k2-kBB--k---JF-3B---3F03-k2--wkzEn2-B2wEEE2Bn0BB0-kknBkwE-kk22--eUSCSJrLT7V71K0YLtevvyl3KFzwGJ-DWcRRqP-hG7KyLafizivwwG03G0F-acjpSSKy-VX-IJltLePvV---PeSVrBgmoxprMRTTOa77X77-0N3vk7eoElnII93nzSKBooUSX0aNX0a5V-1pfNUugBJ-9iOdUNV-4v1z-Sfs-zBgmX8MKAxy5NOzKbse7V-0U-Fk-1y-lV-4x-6--g6bj-3L4kbaTYn2J-apmECIJlaN--MR8FTPQYEwpGF-2W9GV-62Hz-7i5cMKKGV---y2dwQvz4K-NgIMwmnUzJopKCCKKIJnKKpKSKKSKMKrMMbrWbWtaT6a550VN---X157cV-VX77VVX7ce7V-nZT45OKJLLPzjzzBz2wLJF0I80TwpCpzpOWa5P7eeV-9fnj-3pOZ6JOX-2f5dcs" :
		15 === bI.sF ? oG =
		"CoE-7lR-YWRa2AEJenMxJpbqTObaOBcX5NeW_xnVto5UUzzrzUrtxtxrMKMUSSyN1XXV5NNOtaUUxzztzUxxpUSIBpSSyNN1aUrSpCCIJpKs50WVNN--7N6bbzrzxzrrpSMMSSMSzs9X7-X-VVVX99ccVVDUV19D--998a6rztVXaOV1771-78VN0V0V-7V---YV7Xh17XOWWV0V6pTOs-8V7XXpCF5-N-N-N-N0VObSxrSrSUyN-aNOsObrxMABnKUaUs-V1-N5NUzrxUWbzUSxprzCKHenMtzKoopSSSzzxxrMCJmnABegmXOs1ABmnCSKCKIC77gcepzSKBe9XfKrHh9eprxmnKMKLmehKCUrSrII7XnMUSxrUSIMpIABpryURpMbtxrrSrMUWtbzSnKKABgnAAKUxztrMUxrsObWtWzzUttraOtbUtbbVefaOrxxpStySStzVXaNTNN5SJhSry1zzSgmpSM9mmgofKpxryU_rUSxrPXmhMQIKSxrUrrxSxrprKLpMa-2V7Va-OV1XXAI97ee9m8a6TNSxSzzrtyTStbtzyUbzzbtztzzzyObaNObaOyUtzzaOttyUMy-f_zztztztzzxxrSopKprKKMSzrzzxzztttyOtaOaOZnBnBmn9mmmpMzbbzWaTOta5UyObtV9eg7XnBNN-7-ObrTUzztaOaOaOaNOa555-4KCCCBnIBnBnBnBpzzSzzxzba-7--6WV-1--771-VV------71-----NN-5---OaTOaNN---0WWWaNN56bzzbbaTTTTUCKSSprrSrMrrSMKpKSUUrSxzzzttaTNOaOVN---VV--X--1N0WVN5-7-0aN79enKBmVX9e9177-X770Ws7VX-WbVccOa-7OtzaUzy1WbyObaMxyN6UV4rUUy4zzaOaMWxyOzrzxrrTOzUUUrztzUzzzzzaNN--770aSSSztV-6rxzbbs5-NOUzzyMxzUxzV-1X9777e9gf9ege997VX7X9X71MMrV-V75-gnAHommmgf9emem9eefBmenA1AHmmfCC9h9m91AIHegn9emnAABnIBmV1mmegon9f9mXenI9fbV1ge7tzV--cgoon99gc0s76tV99nCLo1977Ebs50Vf-AKJcc-1fMMKr9c7-Aa-1mpBme9c-5OWWV-XV-50a0VVUV---1N18xy11--V1717V-0a0VV117V7-0VcWaN7Oa6aNN--OVV0SrWyUxzVe8UxyNN7X2bVSMVN50bbzWVXhH7aNTSraTObbWV0Us0WVOaN55OaOaOV5-OsND0tbzaUrrtVXX6rrV-X91V0V-N-V7X17X99f17X1XXeemXcgeA9hBce17XpA17fKKCK9e97hSrSHpomf9ABpSxHpKIKHhHhIJhMUhKnKUrKKyICCBnABpAAJpKBnIICA9opBme9hC9nCKQ97-XhJmfIKBhJoXA9empmpHhMTehICIBehIKSRkgomfKQ1971hKxQBpprSghCCJonCKKqpMSpBX17XhSnBopKSgpKopnKpIJpKSppIJprSzzKMTTTUQKMrKrrps5-KpUKKSSpMppSSKrrKMI9fBnBpHnK779nAMrSxzwonBmXXppQAI9fCLmhBop-s1-WV1hKBAJpBofBegp9mefKrpqfABfKzbpIAKMKHpKKBpIBpqmpKKKRnABooppKpLmnKJpCBpKABoonIIJpBpBnIHVX9e9f7ceeceegpSRe7f9mmonCJpKSpSQIIHn99cXee9mgf9Xce97V-5OV511711-V--7X1--MrSTT--VcNUUWV-7971--X77c1-VV-V1---AJXN--N5-7eYWs17Wa---cXcWs2aOVgc1ca0tVVD---V0V--55-1eX7X511V-8V5-ge9pMKpKJoepIIBmegXc-fCBmgfCIABfIBogmnAC1gnBnBfAABgm99ggefBXXccXf7VXe9XX6ba-XXX7c91X7VV7X1VV1-D0s55--6USrMSMSrWWbzs1menB1N7VUsN----2bVemACUSKKBk-VVfICKSpg9777--7hCSJpC-----bsN-OaOa56rJnIKT0a5SrtaUs99150zy50ty-55ObaOzbopHpMWa555Uzs9ef79gf9eopBcgnKRkAJomVa0V1da5-gnIBmWVVVWWzV-VXAMLkVVXNOVza-1hRmVNEtSrrpMSy17VTN1mgX7X2yN56zrMTUtztzSxzMrStbtyMxSppKST-V-UTUraUy1Xe-OaN9nHpKLegA9a1ccX1nIBcXXXcXcefA9gX7VVzs9XVbzyUVef-Obzs91UV-e9WWaUWaUzrUSrUrpzzUUrsUrs7efB999e971ceXX9ec7c4rMyTN11X-SprMMMbVcYa4xzzrIMpry1X-V19ge-zza5OzMUUUKpKps1-1OyTSzKMKnIKKSy1V0WxzT19XX-V-Xcf7gekcaUby19f9mdtyMtbzxtzSrWUzrSyOzzbrtrV9gXf1me-eecaTMs7cX8aTTMxSrMtrxtzrKKs--VXDOxSSSSCMUy-XUs7gV97V6tV6xprV7tVA8ySrVEzzxRopzbVXOVaUzbtzKopxRpMrV5StxzrzUV7TOVgiOtbaUzba-emVOtbaTObtbzbztbs9emgf9fBggf9mnAKRpgmmn9mmn9egge1-0ttV9mmme6a-iUbbzaOV7NSs5O_s8baNUVaMT0brs54SMMUICMaNOzzMsD1eeccXUSs8WVObttVVgfAIV71g7XmkXtaT2rxrSryOyMsAxs8a5UKtWWxpKztyObWs1mmon9Yy-X7N9on8V5OWVaNMMSrStVXVcV0WaST-aN55OVfABda6bUthMSrT17XN1fVU_ttzyUwprs2zzbWa6s1eopAA99eef9ttbyN9gcX0y-VDMptzs9cdV6s8WvKy0zy171OsUxT0V2brBpMs8s51kTTUxzxzxxrV17es1mfA-egeiTTOtV55OtttppSzUMV199-8bbrUVcAtSrs7XX7gnBnA9eTOs1cT5T2WxRpzbtyN9bs9ABkYWbbaShMsOWt_QMIKKxzT18VXTTUT-1hPecVOUVbaUzUU_rSSUVVX8tzzUT-ce9f9VemeeABfB8a5UzbWWWzzbbs6tSrVVWxrV79f755OWtyUs1-0aN-OUKMpry-c17aOzWUIMKprUUIMa-1X918V770aTObyUxIKSIJpCUVNN5--sNOMVN56_pKCJpSJoonKMVNNOa---OVsOptaKMT55NNUrKxxrMMT11115N7s9kc9V9VttMT0UTNO_xU_nJpUs7NUSzzSKKUMUts1e1T-c5TOVNOaOaUy2V50_zSUVX119X7USxs7--OzSCUbbKSzsUxRnCBnCCBnKrCIKJnIKM_pUVN5NN-7T50a5OWV0aNNNOWWxKKMBnAMxpIKKIMaSxs1X6rV-D6V-sT-UUVX1e9Os7zy-5SMUTOtpKySqpCBoe9nCTURnBpyOt_oonBnKttU_zV7a-5-tWWWtxxrqpKTOttSMsOrSxhBpT6bxSxrtUUIKAA9nHpHnBgeecf1ee9XnMxzxrUzUQCUxSs6SompyMs-0rSTUxtTMzzrrrUV1-sSxs777UrrrUMUtzUpMJn9e9ee-VhKgnMzUrynKtWzrzzzUxJpSKJnACKKs0Wba0V--UTOxyUrxzxyUxs-xyUrxzrUzprzUrpzUrrUrSyMrUSrrSUUUSxUaSfMT6xrSzrUrUUby18SrSrxrUpMUTNSUUzSSKSMSrMKhSzTKSpMLpMCSCCJopCIJpJonBonIIHnABggnBnA9nBf9geeg9ecce9cf1e9mm9mecf1eeece9X7cXXfBn97V9eA9cX7XfMQB97cX9997VV7ceXXnKSxxpSKxSxzQMUtxxhUr9Xs1AJmhUzUUSzzKSz1hUU_Sz_xrrSzUMUKrSxprqnH19pSKSpBpQABhMrKSxrKSzMBpxrppIMygpSrBopryKpzKy0nMMzba0rrUMStUSpSrMryMrxzbyUUMUty5-Ortbs78V77X77--Xe79pHfBg997X7X7X77ce-X7-zTOa0VV75TUUzUrrxSrrUrzzwfACKrsObs6TSz_zxrzxrrrtVN5Sy-4W_BQCq0c--5XUc-X5rCBxMa7PVDNUK-nSJp971_ESHe-mocmeKzxIIOxttzsTT-Ota0ee-057TlBpMMMlsOV7Xe---Z41V6NZVgpBmXJgnKMpr6WaNT0c7--3XZyYK57-DXainASrrUs-cXc0D9q9BhrKpMy6e7VHVV-19qEB--1him-7XjEvIohy--0DA35ggnKEGzTOs90X7-DANdhT7-7Xt_vISba9c11AoEBnACBxrSxSa0Wbba7ZmcWXV0Nl-LpUX7--232P--Y4hn-1NmHcmmnUy5--yBtECSKpGaNP197-0YF0nN-QYKBvKofomhMUtzba-1WcBcV17r9ZnpzsX9-4YWUUKaNc-1DHqB03YaRQJjHc9K9Mp9XmrHhrJhromghUxoOVT5OzMxtV5VNT--7VBc--DVec-5DXQxV-9EWOSk-7cyKynBpBnABoopJ5OaTT5NOs-OcVH7zjtnSIAHcgnCBomn9gjzUxrxCBeo6yT5Uc5Wzxru-e-Wy0s0aPc-39Fz7gpKSBcCHgcWggnIpRObztbxHggpoehryP6tbaT-VN-17---ZFFrV-t3OTpa7--GJ2c--GJFN-5GL3xc-9GPigq-T84fLpBpAMHpSBfACoemeoefCACAJrzttaUM5TUa5TUIErr0WWxOtWaOzyNNNN77977KACKBnAC90aTN1VN-7c-eGPvhSrq0ceV-1GRaD-9ZO8jSpKF--7--ZPZE--O6VKyV1O6qJppObVXc-aHHGgonUbVV-1ZZurAs1XHQCRnMzMppopDOVNWbttbYBec3mgce---HWfN-LHY8SS5X--09ahV-tAuEpN--TI4hxDUT7c-PI_QzrqXX-3ZxNzHzV--ZyYEV0dEl0pKsV---J06s--J71N--J8is--JDws-5JFcRs--JKrN0iJQsgnonCCL6xba6yOWXe9e--_6BUV2dHDArSUrz1XXX9-E_ADrICMKoN176X--0I2AV58JkgmgfIIICCTOaT0wNN--PKIxzUTcc-3_KPjIqV-1_MDbCV0yKYtSHpIpCSKHZlzLNV-10V55--5Kcizc-9KeMwq--0MPIV-dMpxrc--_Ul6V0OMzAnSN7-O_Wd6ppSppKMwNP-7X97V7-F_Zn6CzUrMOX9Xc7--_a82V-0OcIV-8OxHk--LW2N-DLaXxTX--4fBH-2_fwzLPV-0QFUV3OQn6xKMSxy0X-ee7-F_tjEBemhT6zzP7N-1_yrzR71uMvlwxIBemeefSu6zp9zTOzq-5TUxxWc9A97-9N1TU5V-0Va0V-8W-ps--NFDs--NFLN0aNK0UKptxxxrUNXXX9997V-DOBAzTX-2aJfQBy--0a2hV-0a3SV08aU0zT9V-taUEntc-5OtESV-eP2MzUSk6e9c-XPIwxMSN7VV-ddFArc-7aafrpUq-e7-TPquRnTTNc-mPxXxrrKlcVV9-3amCbSkV--5oXa-Gat6zSSzrUR7X7ec7-HQgPwxu7-9R1zzP-1tkzEmgj6zzXc-2b3DrLP--Ol2rq-78lqzrHegrzzzKEUTN6seVNcgeX-kbAFvBghCIKIIBpBognIJpMKSSxUSrSSxUrpK--0ogPV0OpIUnBOs-SbSprpUSI9jxa6aPeWzz5XeeV-PSyVwpEsV-CbXszKCCGWbsV7-0bZmzN--bbTv--0uTlV08uUInDTV-OulbqV1tuqQnCMF-5Ue-2bh7jJP--0vJ6V-0vjlV-OwCMqV-OwVCw-0twdKojFTNV3dwdbnUSMzs-PCA91V-HUDFBraV-5UKsSc-DUR5ByP--6rqa-2bsubMc--tyOApa7-yUdojJmnIqOtWV9--bxunV-0zWdVAOzeUnxBmfrrICrUUUUrpHzWVcWX1175X-Xc--UzJs-9VELhk--e0DGpX-2c8yvE5V0P1YAmzTX-Fc9eEBhHgn5Uta5N-OcBY6pSrIAUJgTOa-09We7-GcENbMSppzye9777c-9VzggtV-94IUs-9WO6SNV-95_ss-DWdaSDP-mcR2MBoggxrpUzzKSEzxUqUyX9ecWaNVe79V79c--WkEs-9WoBzNV2u6I8rMJpGaOV7Xc-9WxeRyV197X5onrsN9-1cXrMEc-uXElzMKM575NHe-09AHrpNP--1AZrV-eBC4rX--7ndq-4coH6ETP70HYKWxSMOxxc9XWbkd9V-9Edzk-HZ0xhyPc09Z7pBmpSxpy5O9V79--82Ca--86Zu-2dAgzUcV-PI-Bq--eIQcrX-1dKuADN-H_k1UrXc-9_qWSsV8uMPGmzMTNUUUSEMSxxze7e71c-XHee7-Ha0vzScV--aLfs01aO1woxIC6a-0tuc-DaUtSq7-6dh56pM0X7-7dp2zMSR-X--abWegmjUOWc-EdszfAKSzV5UNe9V1PUQ2nABUzc7-5by5U---cAvN--cHps-5cLGhV-DcONzR7--98tL-4e9eMrR7V-HciUxpX7-udBoSJfErlbuVX-29aVfmxIpGa7P--DdjHRtu-6eW7EKSN11--9XeD-jeZFrBfCpCSxpSrzJ5TUcOzaOXfBh9X9X--1c-1eGYR-5efWrCracV-1fXrV-ufyWxkV-ufAyBoeezUrzV-V-ugwopa7--fJNN-LfPwSpkVV-9iyzs--fqes-ifsnRxzxyXecV0ejZ8nMbe7-9ftmzP-FujbporSIzSpMUISCxzx-VUzrrTc6zy7Xh9ecVWuXX-7mcVHe1--ejc_xc-3ezMzK51-4ezOMKGV7-1g-Dw-Rf-nQAA9gnpMtzzzbttXXX7e-1f-oITV-agD2xzola9X-Ff2bjASrxSr-97VV-4f47MJyP7-9gJYUP--9lWRs-qg_aBfJxrzs117--gavs-PghqUKGX---fCFz-09nVOpqV--9njxk--gyON-Dh4IxL7-2fGYEENV-1ob8V-upTOpa7--hVws-XhbrSpLOcXV1eqiCpKR0yX7--9qk6k-PhjSS9c6y-7fR-rUrR7Xc-ehsTBgrqUscc-PiJ1hASaV-bfaA6AI9MMMHhzpUbzOyOz1X97-1ge7V-1tzIV1uu69nCrtwP-e-9ffCUprUkVXc-5fgVYCM5-V-9vpss-5jH-E--HjT-wxu--XjYHx9xSVN-19yPqognyT--pfugbS9rSrSMSrzpaUpSUMSkVV-VVVPHgccX1XX1c-9jiyz5V0Pz_GnSN1-4g0rMKR-7-HkBVxlu7--kCK70LkGUSpMSrOzuXWse7X9-4g57jrTXV-DkQfwxX--B98T--g9En-1v1y0pKorN7-7--gDm6V-v2vCxNV--l12N-Pl34RxUcX-0gHXnD-7gHhbKrq7X7-TlB1xMxcVcJ1lBSSrSSppzUzxpzT6xSSrKrMJopBmcXcxrMRUSpMKBgc7N1cX97971AMHYSSrMHcce7eVVN77XVX7-Oc1dMSHooe-V-CMKSSKq1VUpkUSrUSCMMMUSzSprKKHexxrSSxSxxyUSzzSUUSpSpSxKKBhUpttx57OaP0WyOaP-9-0V7X5CHcV77X1VVXXV-97cV----0c-7VXcY97X7ece1XABcc9--23yxV3v42inCMKrbVBe-0xXV-A4Ugk-aliIwpIMs----BS4D-2gSBER5V1v6fGpCCptV-X--BTnq-7gVUzKKT-VV--m1DN-qm1FRfpppNVN7N-DmEsxT9-QgZUjCSKEKR6xGWe57N-ZmVV0A8RQxR7--A8TUk-imT5xSTTTd9cV4Q8thxpponSpTN7-X77V--mZcN1immTUMSKCKMR16VUSprGbxkXBcVcX77V7V-TmmkSpUVcV-un7nSrMSxkX797V1ABckpMba99-0go5MN-5gpKjMMX7V-QCSMnV-vCllpk7-Pn_7wppc--6gu_jIIqN7-3gwCEUP1-HgwGzMMMSxlu7X7X1V1vETrmxSrTVX1--C-0D-Eh0RESoxSRN-X09--AFrbk--oIos-aoMTSIKFN5--5h58vIRNNV-2GitV-vH2_psV--oc-s0aoc_xKMSJe9JUUqN5P17VV-XoimSI5OycV-fHxjnk--CB5q-0hHcbN-VhHl6KpASSSKIMxsVWyP77VXV-7-HpEKxUX7-mpKbRoeKSo-NN--CNDi-7hOczxzTcXc--pboN-DpiAwpV-5hTmMpR5X-0QMjrnMN7-1hUQAT7-HqBoxK---DqWZRr--IhdNrKrSzOV5QBeX3e-9hfVIBpUzX17--CfpD-phgbjBmccjMJrzke76zrrMMSrUrpSyc17VVX7X7X7-HqmXSSX---qmvs--qqEN0HqtqSrxKESrNN7Xc1XV-2R4lV-fTzpnk-1hwNUTV4Prr2xMJnIC9EIrJomnqUKKCJeIIMOxp9MKzKSr6XX7--V57OV70WXV-5-N6a--V5fUUEofHchpKMOba7X5UTP7-0hzqEP-2i1rMSX-2vVmOnHpplxk-WcV-9sS7x5-2fXLhnESoxu7T17-2iCDURP-3fYKfrK9fISr6s-57---sq1c-DsqBSTX--DFu5-1iHcjR7Bmt9wxogcf95IIESpAAJegxUJfxI9onJeCrrrUrSUSSrSpMKSpUSrMKrMMMSMSppSKCyUUz5N71-0aP5OzyOzUSrUN6aOX10ty-7-0s-7cV-7X1X1-VX9XX7e9cecge16yX-X7X7BmXXcV-2iHoMUcV4Q_4_nBrpyOzSq5cXX7c-HtGWSpX7--tUGs-5u0pzc-Tu6aUSS-17-Tu7VxACOa---u7iN-5uEYS--5uEcz--auFlSKqNO99-2i_aUGuV0QdwKony7-BicpMJrMSc1-5V0feEApSWcc-5uYrSV-1uf6R--igpMV9vfYUppKHexxMzxxrUROttX1e7cW97HX17--2fYfV-Qf_oq-0Afj_rL7V0vfwMpMaX5V3Ag7opBpKpT575-7--fgPSna-4iqejAoOV-avQIxxrycce-0isQUF-1is_AGc-LvkFzM5X--fjqbr1--Dz_T-6j-zjASq75-1j1jzlc-9wL5ww--2lNpV-flSUxX-3j5MbM5X-Hj6HUJm_prMSk--7X--vlsIpk7-HwadwjOV-1wepR-2jAT6Ia-1fnTTxHnEy0X--Anark-9wvRwtV5QospnoxMSOzr0aNn9X797V-Qp0rq--QpG4o-0QpR0mxlX-4jL0rSq-c0XxPBBfBnEMKKyNNTOVN1e-6jMXUJlz11-EEgqwecX-s5OaSs-AjV-jKppq-17c-9y-hSkV3fsD9ppKIKDNNOVV17-Ty3bxJp0V--9yERww-0Ax-_npV--Ax2Ik-9zfaxkV-vzr2xk7-A-1BRy--3-zvV-w0lpqTc-I-kixr-c-A0MPENV3R55SnBpKkWa0zGVX-nkNrfACJeonMrxSrrrSrT55-IC9e-0ztVNX7X99--35IBV-R5UCqV-35iqV-w6ltpWc-60xjx--A1PugyV-B95ws-E1cpgpV--ki4IV1wAqXpUTUa1ee-4kl7ACOa7-02LhN-02YwN-I2aoBjy7-f2fQUKrScVc--I2gExS-V-b2tvSppo-7X-0kyWUF-1kyZMq7-036Ns-M36nwhr---RFUnqV-BFvKk-03Kgs-A3kyxNV-wI34p57-644wwN-64BcS--04PSN064PVSKSTUF14HcWc--BL4Uk-64ckSV-04jBN7r4jQxHppKKpMJxHe7V1-ecnIIKABoopUSognBnIAUtbotyOyNOsNTUSJnKq0a6ztbttVOzOVOX-5c0a5OV1XX7Ze9jpI977AI97--lSWj-FgMRSmf9zbrpzMKc0bxrKESxrlVXHVUbbpSkV7XccomXX9ZcP7-E4xwwja--lXvjV-wQInrsc0Q5ozSpKEryObbuVgce1c-Q64OwhMWX-0lmZbk-0lpy6P--GtFD-2lu5jKVV0RUb6mp6V-0m9erN-5mBT2BjNOV0wZLzpUk5XVPBZWrmmmmnIJrMSrSSSSKSMUxKpKrSESpbxSSrMOts7-7Ve7cnA9119-Oa0Wba7V---V7---ece-cmKJQBmp9ggzzrSKMMy-OyTTOX7X997X06mLdEBgnABnIIIICCAJnJpCCJnKJ0a5OtWa55Oa0WbaTObcV0WWV--I8QGBxs7-U8RIgpzs7c-29W_w-3mdg6Ctc-0mguE5-ZmlOjKBmmonUUUUbw-OzwN-VHmc1eV-wgZprsc-rANbgnKrUtX17c4UAhBhBenHYBocVgprSCHZnrrUMSxHnIKLOa-0VObaUzxWza0bsNOy1X7Xe9n9cV-1n8XjDN-IBkvzxXc-2BlYi-RnBjzIEMMKppKKF51-1-0V-9--nBzMVXBp7smn9f9XehBnCAIBomnABmceXeZegccZmonAAIBnKSMSrMVc57OyOaVUzWzOzxxzzztxzxxrrSrtbVOWtVN-OVP7V-0aT--RstSq--gtJnqP-3nilrCq7-AniufCAM0bbcV4UEFHBomghIHoonBnCKpKICSKpMxIBnJOtV-OsTOtsN0aUX7VN---6zOa--7fJe1-7nuYnACrtVc0EFVzgfBofKUUaOV0a73zH2ShKICCCCICCIBgnBpBpCICKpKCKRN55N-5N5OV0a0aN5-NNNOWV-NP7-zHTMwnJhpJ5-OVP-5oiBECSkV-0hBVAn9M6V-IIDDgzZc-2IgAR-1pHnrR--2KH6w-4pLvUIOaV-0KUwN92LmEgfBfBgqUSCrKKKBeVUX5-X4JmoocX-57NNmconHdBpJce99pKppppKIKopMrtxxxprKrMUStaN7-6yUza-7X9775ObzzStV--51--N-PcXX7-ILxOwoOV-UMCUghM5N--AMQdSNV0STQGrScX-8ptlrCCCta1-0CTnYnqP-0SVFsrM-70Eq1sfHnA9XcYCppSKKSErrSSCzpUUzKTOWaN0V0WX7VXWa-2KBme0WX19c-4qODnHrVN-2OnhB-Cqb12CCKJ-UcWV-IqjjQSrKAMzTNV7VXc-Nqu9fBnACIHnSLNOWWaOV--hjnFrX--r-vI-1xkFZpprOu97V-zr6zAApICSUpzKUxlyUrwUxKV56a6a7VVXY9_HmmeXVX1X9V4CmRVp9mrMaTUxT-e7c-OrAdfJnKrrSrrsN0X979X9-0rFTQP--MKdX--M_8P-DreVnCCSrzVVNec-AVFgBTV-T02FyV0L0slMs1c-6VTDEc-6V_Ajc-AV_JBtV-D5hsk-b_7iwnSROX1--OPBa-1tQurDN-Ya80xERTNXV" :
		16 === bI.sF ? oG =
		"DwCd1sP0j--RaO__ddedddifv2EEznnnyfEeRwyzBBBB2Bn00-17-2fEMK9dCrtzUrrMMqN-X-789V----Sf-T--yfzIrzohrxy6kX6rSk16k7---11J7Z-35CISoOxsUKESpEP6qOV6pJp9mec17cmhpxUSogfBnMMGWxptyUUzc5UrtttzpoTOV6lVVZme-gcfBc5cUrztbV73cWztaEO-1I5dLOfvkygzEyaOdzjzsl2knvg2EW2zEznvzzyzyfyyzzvjuMyzdzjivvvyyinyaTVyydzufvevjgwBoG-znzdiEdbg2vkyjEyiazuK_4OGaJaPjzYnzzjBwnvyfiigEnuP_vjuiaOMdezeififiiEfgzfusnEeO_ivviEuvjzyzivivivg3EjuyjiezjjisnvvEffvznviyviYEYyzjygnBz1_Fl-zivjEzyuwnB2z0434-4G304-44-CGJFKJEK42Bo-38G-340403LK2kl44G_GFn-G402l2x2433432vuvfvY4-l-0-FkF3G-J43G3FJ3-G5J2---20L-Y-8CqLKOzvEjYn3GF5N0A3mrIprrIryT1Wace1XV0F2MKYo-H05ahSVV1R1RHOKefiznn0-z4KUy5MEe17X7Xa17X7X7X7X7e7X7-17Xe1XeX1VXT0aN7X7X9X7V19X7V17-Xec7X-7X77X7VfBctaT-17917-X--7V0V-9Xe19X1cX991hJpKJpKMSKMSKUIMUrMprSrMSrKMSKrKKrMSrSKrMprSrMpKMSMMpMSKrKKCKMUzrxrSUMUKIABceV17-XcX7X7917X9X7X7e--0aN-7V17XcX77eceVX7X17919X1EzyTN5T-c-7X77X7V197XcVXN-7V-17-X18VXD---X7a11--7a17-99177Vce91X7XX1cVXe9XV-N-7a11177VVX12V0V-VX9-N0VVVX1-1171777s0V5-N7V7Va0bVN0VUV-VN-2Vs--a-NTN0WbV50WsN5-N5-N5-N5-OrxzST-VXcc-VN-1N5-V51-15OxUSxUrxSxSJpMs0V-8V5Oa1D18V91191X11-VVX19nCSSKSSSrMrKQKpK7cXXX7Xcs-1X1VXVV7777719-csN7714yUSpUSSryN77c7X0V-16a0VenB5-D0WV9X-a0WWVN-gpC7X-gm10tV0yN7NNN1VV-N1mm-N--s-7WWyN--fLocccAAC9555NUsSpy-Wa555-c--hIJpCCBmg5NN-NNN8_y--N0VD-epnIKCCLVXYWV-919prKSC9cV77-V0Vc11111TTUVVgkf1991D-e1-ceXX7X-WWs9cXXgcUxy10Va1cXei1monICI7g9-XgegmVgem7X6xyUVc8bbta6bbtrzMST--15NAA9egemfABXnBm9n9XmfBpMI9mggfA1eceeegn9eeXe9AIBme7g7Vecg7dV9mgecVfWzzyUzxSvCMtbtbzxtUryOzzttbtaOaTOzs97ea0VenBmN5N-XN9X9XiOa5ObtaNNNNOttVgggnB7e17OVN0WbtT-tWV5MV0ztbaUzMy2aOyStI7fCMtxrzzbKrUyUa5Oa0bUsOa1me7f9cD-1997-VTOWaUV-WWrzzxprWzUrqnBnCKrSSzySSza19Es9aOs-c-WsOaN50V-NObttrSSxzzbtyUbzzUUzUtxrUUTUyULpf7hKyTSBpMzpompqpSxUrSSrKprUSMMUTMxSrKSKrrrppMKMSSprSy50byOSzaKgpxza6zUtbz_zUmgf9mA1egmgf9pMsOzbtzMyTOzzMbttWy2WrKKIKSKSUtVOsUCLnKUtza5SzUxSSrSSzUSrMrUzMttSxxMSSHemgnKzUSzrzxzyUrtbbpSrzKtKrSAMKSs-T---X55UbsN9eem7iObtztyU_rQMKrUSMzzSrxUzzbyUxxyUs18s1UaUprzxMKJhSrMxpps-V-798VUtaOVOVD-XhHDN-6V9XXm7ce7VVtV-951-Ors18Wa-7-177--1-UVcOyUbzMTUbURopIKCIA7f1hMShJonIMTUMUSUKKUMrSrRchMJpSryOxxhIMprSJpxrs---Wa4xxrSprKmpKKxUSrUT5OV7N2a--7-ztVYVXcVV2aOzrzzxrSrbrIMxJogAMSMSUUSrrKJgpQJnAJX97hMMU7fHeX-en99pSrxwopCICBmcXXccXehSrprUxzbztTpKJonKCBfHeXnCLpBmX9XpSzrpKpABeepS9nKnBofKwnBopRpBopCJpKpKKMKIKxzSzzzxKMSSSSKxKSIKtTUWyTObUrrxzrzrbrSzrMSrpzUxySrxxzrrrzzbtztzyMxrUKQKKSSppMKpSKpxprrSrUUSxxrMprrttVD5SrV-a-NN71-cX7791-77VVVVX71-TT6WWbWWWVN-NN8V711-V777X11XVcccceXVXXNNN8V-15-9-VV791dV1-VVX7X1-sNOtrtxtxtySyUVNStUrUrrbUMrppzzrbbry6pKKrMMMrMMCSUUKepKxs0aTTMUUU_rMT-OVN-6T-7-a-777V-5-XMxSSxxrxMU_pzhUxSmpra6QKUbSyOSSnMxSyUKSxCMKUtprySzrxxKttbzbSrbTN0xzUKBpyTSrrMtttzprrSSrMSpprKCILpJhBhIBonKMKLnKICJnBgmmpBm9mnAABgggmeommnAAAJghKKKhKgmpAAJpIJopCIMIMIJpCKJpKUa-s550V2VN50VNT0s5OWs6VT5NNTTTTTMyUSSxQJpJpAA7fBprxpttWbbSSQKSSSMMzSrt_rUUbUbaMyTOVzTOs7777N70V70_pzKKzbbSJpBp11hIKqnKUtIAJmnJnJmnIBnBnJnKKLpBnJhI7e9778V1N5-NT0VOtbaNN9gmmmkfICCACBgonCBpQICBnI1fJo9pSQJohBchKhCKJopSMKSSMrSMCIBomooenABfAIABgnIIMtsOaObbxI9mmon9gnKUwpMJpJpJpBmpSCShMKCMKCBpCK10V7-77X1-cVV-7hKKCMKrppMKSKpIAKtxzxSKpxnHghUySrvCICBfCJpMbnAIBhBgompIIMC9mgfCCKBoonIIICBfIIICBopIIIKKCKKSKMUKpKxpSSxxMUMKKSKxpUpKrSKSKSKnICCJnCA1999-1A9e-7-cXXX17V70a-f7VV-1--7XXm997cXX9AAC9mgoekccXg97XXABmkf9f9fA9emXn9emgmgonKtxgnBfI9nBemef1X9-9gn9meeXA9eemegoefBmgnBnC9gnC9eeggnCJhBpBnKJnKKKKxpIKrRhBhAKBhKSKKKIMKKKF7Z2MkT__44OOaO__O_LLTbYvkyffBkEcw2knyaaiBkyEC-x-nl3-3VQ3QMsc-O-txaOjzzk4K_-7VS-vCSzc7V0J2qEPevjFF3F--6mTV-FGRlV--92TV0kLotbx-a7AuPnIUUoxxzbzrKrpKKMSSSlWxrUsWtzKlzTUyOzbw516xSUzWbsX6wNgc55Xc7mcXmgmeJmofomXXIBcYHcVPXZcVTUceX1d9me17ee9-A0Y6qioC-asBoenIBjSUIBjUSJe9ceV7177eV7fC9gpzzHeeICyUxA9efIrzM0zKaP6kOxIMtxzbxBgef9gfMSxyU6ttaUttzGzryOa-OV1XCJc9VcN7---40ekqQ--NDEDyV--Red-6VumnMUacX--0pcZ3P2fIBnrozKocX7X7poxognBU6zbzojHxISryUWX-U0XV--V9YHX7--6M-k--Do0VDFSy8__bfuePPaEykFkk03C2-3VwCbAMV--0t6o-92oUS0V4FUCSaOQzBn4---ywe-Y13Y5KOjuRyaEBG2F--GW_V0FZtli---3co7-38GgR-93kCEP-1kaQpeNn--L4BWBn5T-BFdZS_ePOvjjjjwk3-FJGF0sL9epCyN9-mkhAhaefdPOOaOd_eO_dPLyiiveeeyEnnEiEwBk2nEnBnEEEnnwwznnF3333GGKJJG3G4KKGJ-94g9CkV--ipW-VWVbABxrMKz5OzJxsNNNVXmXe9c--B49F--PnOV-FqcSV7sQLqmeeppUUSSxtaTU6yT97997eeMC2a-LKOaOaOi_vdPiuzjd_dvijyu_KFJGF33303FC2-oBBB4KLOOaaOiaeduaeeffdiuzzzyyydKKJLfivjjjYBwyuyynzyEnznvszkxFzwzjvEBG0G2zjgyuyYvybvzjyieKbfYBkwzivYvyvyEiviyvfuuuPfePPaadvvvjjeOLP_MdOKKK_UeaPMefvjjYzYknkkzznFzyEjzjfyvvEzjeQfjYvzznzyiyEsywzwzYvEgkG43K4GJJKGJJK3-zjsEzjjvzwyyvvC3J2G3FJ2yjFG04FK4F4K-OKGJGJG0GK43EB4GG2EEzyvvn2yduyvjyinzx33G033Eiw-o-KF2k-GGJeKO_-0PL_JBFGKOF_KOHK4GFxOHKGGFwp08J-yEYnlKKFJBwFJK9eOFHLTdJ-kkn0KKdFPPe_3-B3HeOaJ_2-EeVC-3JKLdi_FHK20dPJFk0O_JBl3KT_3K5LLfjdJeu_Fo3_JiePJF30-l3FGJFoGF-X6dJBfEOtsV0FxOWbo-D6uCS6X1v2zp5_4fu_4ivEdiuPdKJF45aiivivyyiviiijsn-znBkBF235J-GG_-nBl-w44aKKG-KX2_nCErSSSkOWa11XeXLG1g8_OK_OOO_aPuKOdajsydQjznzydLKK_5KaiuyzyvzzzyzjvjidLK3KKGKKKKKaQfefjizjzyvdefiiznyzzyEwznBzwzkn2Eifzjufwyyzjwww--GPO_--zVBnvgEekk3K3GG3JGGFFG2B-333-0--03G3HK4ePeefeQiaOK--3-0-JFKiydeJHKJ2C40GG_ddKFnB2-JF0cWyMmmyTN-ZGfute2---ZAWV0G8Ihi3--8AO7--I0sk-7aWNk-RIFpuEF018vKgpKEM6tWV7XV--L5Mk-NgeYlV6GUzf_eczf24_-k-1C0lB-I5ZZqOynkqK-5YJBIArlX-1Gfu8_yC-6YOlnKIOV---5qJB-DCgdwja-C61_LTvoG-kYgE2KIJnAAMUxzUrOxzTOWaZcV9176qXeX7cVDlqEh_PPeffijjnEBC203FFGJ-mDm3BfEMtyP89-C6VITdTn---2mET-26bSqk--EMts2wUQzuiijiibfV-EYnn3G4LJJGF1szi7nJnr550e--78qw-1FShy-27J7aR-eFczBxKoT7-V-oWi1tLgwk-9FyXENV7H7Of_bisywyoGJG-GZSgYBepxxpyN5X97-gZ3Btfw30yZX6E9mY9eememXeefSzxzT6xzUrMommceKIABhBeMUSxyOWbbbxzHpATTTV5OzxzSy15Ua5O93eme9cXWWbbyVcmVAmK5MiyiajY2Eil3G445J--Hp-s--aMYk-0CdpV2HW8xuvoG-28GGLmemxr6tsV-oczDQis3F11JY8BgnBopr6ztzzNOWX7e7omX-0mZRx_UkRdHRBnKMKpMJppJxponBop6bbzxpxKlbWa0WWWX-UzUUrMzlxrWaWXVd9n9WVVc91e99X7eeVjHcccOe1V--dDLF0OOWLmpy1-6AISazG-5_hMYrq3e-2mvLGeyn04-Ca5w69nUrSq17--QBDVUivzzlJKJJ-qNYawozzyNn97c23mKCO_OLdiffgwnBBBl-J-5OPQhV0wnGIOeeyin0230F5uPAsSSUrHprMSI9BenCHoeXAIrrUUUzTUzyN56rzbV0bxbtcOyOttztcmefBgfBn9ef9X7VXX7X7X7V9IG_jaaeivzB-pFn2KJ09Pe2Rhbzzxxu7cemc-CCRoydz-p--5k5q-ICZKiPvjk34--5npT0dDEw5Oeuaufdeu_PeijB-BBFkoFG2EfswFk3-JLJ-9Ul6xk-7nzgraaOeQfVBB-n-1XVgnghCEpKSIIIMKxML5-0Wc0c5V71-7-C0ccQ-B92pWnABnIBgmxUa-UbtbrzzrtbbueXBee5Pec-C21Ktk6e6I4rJpIBrMM0c-0zzbae91c7Qh2tpO_ddeeTbeeiiduuffeeefydbefjiedeeaijY-nnBwnznEBnnEwk-nveefdbYw3B-2koFFnyjueuTw2FyvfiB-32G0-oGK3-OdveeJFFFo3BoLK0JF-40OOaOa_8KKFB3OKefddFF0--02F-00G2--5cWxzMSV1V0JNHMaB-uYI9RnKMGWWaNe-HJRYn_aayu_jjjeBC-FJFFEjiwC44F2uEcgpJxIIy5-NVV-07cwk-PGjhlV3oZcraOPzkC-5eHK_nABpKKrK55-575TT-e0fHO2qaaabeuauQeiffeQffF-33-kk-BB222n4J3K--9LCls-CAWRtk-1QXrVIK7Wd___4aLywyizYzYEyEBw0JOJOJJ-edEvRpK5Os1V1CKLfOdOyszywkGG4-5etPbKtae-jKWNneePfiuiifiijifiw2yfeii-zefeeeeefYBBn--0033F3F03-G-3F03-4-0GGGKJ-ufB4MHjSzSomcXfMpzS6xKKKKMSsV-10a7V-75Ouec17-6Lbx5JE-PfeifA9eme9AJzrzxztyN57-SVW5uU-0qkprRxMSKSpKSrtV7X7X17--V-58t6-LgVLbBpIKrWzSqV0V7Ve--O0SB8LoLpxJnBgmpICBomogn9oghBnIBpUbWxpMOzzVUsUbaTOa55ObxonKESyUSzrzRUtWztsTUzrMtcVV-V-eX-0Zegee977XX-cemcY9ecV8q__U_OdujEvnBmK30--hDurV-5vfz37hzjz9gemecf9genrI9ggn97gegegoenBgopCJonEJUzpCKKIKonKSKMKKKSMSpUKrbzV0V5NN-77VV-7X-WWVV-N-0aNOWWbsN-0yUUUxzrzSMKrSICpJnIIErL5NOaUSxpSUMSSkOWWaV1-1-55--Vc7X5UxrpUSUxty51-cVXX97VcXZecV9r1ep_LLasznvgyw343F-AZ4Kk6pnU1tLuaOG5K_a_OLLPKeOddYzwwwzEnzEnwzE2E2C-JF3-4id5YIMV7-Cs_ftkIvpQOmnA9nBgf9YBoooofICBeeCBoqUUUxtza6aNUWba6aOaOWba5T5THcV7NLKvdveejzG-33F-5q05bAzy9VCvXK8_eeiyvujin304_-3-0FZT-95mmcgfAACBn9ggeAA9mmnCUtzrprpUSAAIBggecmmggghM6tzNOtttyTTTUbbbxzKa5N0bbbbbbaNTTTTTTUy551ccfAA99XXcWnw5hG_OLKOLKaO_LKOK_POOKdaPOaPOaaUzBnEknwknzE2En2nzEnzeKazEyzzjnwzzznyszgzzzwziyzjvvzjEnueOOdawzEnnwzEEnwwzEEnknEnB0JLJJ__OJ0K_JLK4K4_G8K4445K_48LK_OK4G44K4OKGF1TETamnMTOVc" :
		17 === bI.sF ? oG =
		"9mDS-FP-F--0TedPPOXo0HCGSpxrMptUSrUztztbbsUtaTTOzzzzStzSzSrSrSrppT-0btaOaNNUttVOa---56y6aOSrUaN5OzztztaOtTObtaNNUzaOSrSvHogmgfKpKSrCJgnIICMKrSryUWs--17XD--OaUzaOzyObzzztzrrUxUKprrzyUzzzzzzrSrrbzUSzyOaOsOzzzztbzzrAMSKzrUzzUSrUrrMKKSzzxrrxrxrrSrSrUSpMJnCKUV6aSxxUSxrSSMzzzWzz_zzzzzzxrUzxUzzrSzpxpxUSUxrxxSrrMSrSKKMKMSKKxrSKxzxpJmegnKzWzzoeepBpABgohBnBpMSKyOsT5T---OWWt_onKzzS9ehSrUzzzzrzzKKAILmfHnBpUztWsT0WaOaUzzzUrUrSzpxzzrSMSrzzzSKKKKpyTUaOzxzxrxxrxrUzzxzzzzzzzSrxrUrSrSzMSrSSrSrUprMKzUUUrbrbrbrrSMKxKKKpIKKKMKKKIBpKBnJnBhBgnCAIBnBnBnBgonIJoonIJnBnKBen17AKICIKKJgpKKCSSKKCKJpBpKIKBnKKKCACBpKMIKponBgfBnCHoonBnAKCKKCI9nBenBnBgmepCBn9cecegX-9eenHmognBmegefBnBenBnBenBgmonAKICCKKCKKKIKKJnCJnBmfBnBmpBnICIBpIBmpBmnBnABn8aObbaOa0bVOV1n9fCBonIHmonCMpQ9hCAJnJgnCBnBmpBpBgfA9nBmX9eeeXeXcXX9eee77gpKrSrzSrSrJnKKrrrrKJnCBnCBhCIBgemggeggef9eemmeecceAKKrKICJproomgmgeee9X9eXfKMSMAKMzrMyOtxrKCBe7VcfBprrBAIHnKhSKIBp9emgfBnCBpSMSUSxrrzzrKKLmnBmmnABpIKIBmgmnKSpSKUSrPkf9en9nAIKpIBgmXEV9gpB7Ve9VX9XbrUV1cc9V7Ws11chBeaN7tV7AIC7XN1N1777c2V-a5USy117aNN-ceef97Oa-Wzy1N-17WbyMMKSCKrs10WV-Ws978V-5-D5-s-7VcgmfMopCSppIA7XV--1-2bs717V15--a52aN-X1-cVN-X-V-ts-0V0VOV1OaOa1-2WV-sOV--7OV-V--VX-7--7-0yN7--7-X1OWa--1-0WVT--9N7OV--1-NN---V-17V-15Us--V--15NN7----VX1N7---X71--17eX7X7XX1VcX9XXcX9999A77eVeX9A17X9cX7X7X9cX7V7VV---717cV1717X717X-X7X71177X-X71N19--97X-X7-X7c-91X-X-7X7g7XVeX7Ws-177-17-5Oa5NOsOa5OaOV1XmX7eVcOV-95--5-sUWVNT5N--0WWtztaTT6WaOV7-0aOaOzza0aN0a--7VOV7s-s--6V-X---17X1Vc118V5OV7eX7XcXemnCCBfBnBoprSp9gn9cV17ee-9eee7eV4kDJ_aeiwn-FJ-u28mgpMSzsN-XeV5Fop6aeecBBk-F1t5Zdn9xxrs-9-O9QZyeevz-G3G-YcmK6CIIrUrrSrrrqOa9-X9X7X9cV1_beTuOPOPfznwwC3-4-Jh78rBeejprrSrNN--7-T5ITPw30U8E3BgonBzrtWzzaNVeeV8t9XtaOdOyzBwnEBKK-AmPDvCxrr-7X7ByJT4OdKaTizEydLQi_G48_OUdOvEvyuv-zyevvnzyBFzjvyBnzzznE0KKJJJK43JJG3JF0GKK-2BiSRpxxpWX7Xc" :
		18 === bI.sF ? oG =
		"DgBy1vR-AV60YBnopk-O_9DCIs4rUUrSSMUrSrSSSMKzypKSSMRpKMSrUKMSpKSSrUrSKIKSueXgnCKBgme9XenIKKMBpSKpKMMxpLppKKpnBoopKMMMMKpMKKKKrSzzza55ObzzUUSxppppCCSSpSSrRopSrrSSSppMMSSrKSzUtpxrxxphSMUMUSrrUzzaOtbaOtbbbaOzWWaN5Os6yN-ee117eme97cX--1117XmmccVaN1-Xy-XD-NT-6sDOa0y-cWtzrrKrrSpptWSxs1W_rMUMMUTUUzrrrrSrSxKSrKKzKSrMSrxxprUUzUyTOa-N-1-X-7--1-VV1D-EUUaOtSs-SyMzy-Xe1XXe999XcefCIKKUUn7X7eXee8aOV11UUUa-X7X0Ss1N1mVcf9ecekgk1AJmnABgn99mn9hIJhKKMB7797ee17y17V79Ve79nFX8s19nAIKI1n9pMKKT5Jp-hFgV1goV1nIF-hB-1kOsN56rSpppMtVX-77c7a5N-D550V-ObbaTTN-OVa----N--7s50y0VTNN-9maOzV17cVeepABnBpKKCBnBoopIKMMS9pKKKKKKIBWV-D-XemgpKBe9gm9eOzbyOa5OWV15NN7-N--V5-OV55-50aOaOa----99e77X9e770V1OVX-ccefABn997Xc77VccgceXegfBnH7cegcVX9ecD-VV-7-XV7Xcs5OaUT155-51XD--UtyUy--zWzzUzrbzyMT5OtztyOaOzKpxxIKKKKpIKKSMIKSKKSzztzbyUxtaUaNN5OyKs-6V0WV0_y-SppSICMKMTTTOtQBpSCMSsSrMSzyTMSprSptSUbzzygfKxUaObrMJpTO_pmpUxraTTOtttVUtaSSptzIAK99eXegfKgpCLmpMrUSpz7fKBoohUttrSrUrrSrSAKKUUra4pSzbaNTObaUyUxopBpSrzbaOyN10baSrrpzKpSSUtSzpUs-75N7cc91cXoX7V7Ws1-5TUbaOaOaSySzzzrzzzUtaN0V971A9eenBeee7Xe9cgcfAA9gggnKJgpgeee9eA9mfBgf9geVVX9fB7X6baOTTNNOtaOty52tzVNN9m7Xcce9715N5ObKt_y-8rMbzs90My6_s4raOUxrrpUMrz_rCMUry-eXUzrpySrxyObrztrzUMUttpztrVMrzrMsURhUxpsOpCUbrzqmenMtzmpzb_mfKzpooXX1pBpxSSKpSMSMKKCMKQKnCBmmeXcc71171-V--XpIIKKnIAAIBnCMMCKprzWV7sObKKrKUMsNN5UyMzzrBpztttWVaTObW_xpI99ghKKMxztaUUbzzzMy6vBgnACUtz_yTMrUzbnIMUtttV-UrUSrSSprMSSMyOWVX-18a0a-0yTOa5NOzrrRoonBpSKBpCKCCKSnCCBhBmme7efMSUSzUUaOyT5OaN-0aUxpoopMSzTN99WbV2VVXX9eYV0WaN-V-OtvKKUSzMrs1797VtpzV6rrSSrzBhKCKMSrT-Wa-V0V-X77ca--UzzzyHpMT-yT-7-sOaObbyTTOzUtsUIMSpSRnMzMT0WsTOs97hIBeX-X7tVVtzVc8WWaUonMzbKUsTUbSxrnMUKBoonJnJgpBpBoptaNOttaT5NUxprCUT1-VObbzrUzzyTUzzzy2zSxxxzry-1-Wrbtbs9zbzV9UV19-fa-taTOpUWxMsN716aUKyUps0xzaNN0VOWbaUzSrzaMrzVcX155OVOV0ztby-199f1XOWa-N-TOWa5UaNUaOa5OaUtzxtaN7egYy-VTOaUrnMwnKtzxpzaICTmoomenCKS9e9hSKxzbrSrSKBgpMKrWs-_yTNMbMyTOzrJnHnKxrKpSMKMSpprKSSMU9fBopKKpcfKSMAIKSrUMMpSSrUzVbrMUUTMympKrSrUUzMBnKSKrSxpJpMrUSSpSKS97cXXXXcXXXX9997ccX7c7X7V11171N-V-VVX1-71117-7-X19997V1mopKrSxpMMKpPeVX7hJfKCCKMMMMMKKpprUa6BpepKAK8V1meommnKMPgpAACReonACBopKSIKMMCKKKKKRpKCKJoprUtbbSSUs4MtaT-78sUxzzwpxxpxrKKSSSUSpUSSSSSKKKSKKMKSKJpKKKIKKKJoopBn9mccgpKICAMIKKKrKCJnIIBopMMzxxrrSxxxrSpSMSpKABofBnBn97710VA112V1171mmgn9k7V51-7XecXpAHhAIBooo-X75NN-XeXnBnKIBnCCKBnB9gpKprryU_ppSzyOWVObrzyTShPfIBnCK9hKCCJpKzrzxprSrSSUrxxqeeehUxzUrrABnIBhMzsOxrxSmgpxnMHnHhMnMICHmpMnHhSyMBhLopC9fIMhBnBnCJommmfAA1nBo97c9nMMrFhBgnBehBgfABfIKSx9X17N1emXABf9gmnJepJmhRmopKCMSUSxrMSrrUSxrrxrSrSrMSSMKKppCKKRognBggogeefI9mpxrr9nBggoog7--N-e999fAa-XfJV17s7XA97XcgecWV7eeAJpKKJoopCKBpKKKrTTMMKSxRpKrSzrzxxrStSrUUUSSpLpCMSKMSzMSSRef7Xce7e9X997-cX9-c-777-11197VXX17X7cgc0V0VNN1VOV-1-WVV-77VcV71-V-71--AJVV7XhMCBmfBnC797g-ACI7-Oa--11-Vc-1XVX9979X17V1-VV7cec9oppnBn1gXo71oome-1nHmgfBpKIBgmmcenIBnBnBnAAAIA9mmonI9egoXmggopCMKKKLpQCIBoopKopJcgnIBp9fACJmge7X77VVa-11-V7-VVVX-V72V7-7-VVV11-V7----V---N78V5NN-V6s9XOy1cepgpQIA9f9e7X777VX7UTUbta1eekXX7X0VcX91c--g7-11emXceeXX9ee99ce9g7cX999XXXX99X7XV-5-V7ceeegeX7X977X77-X7XVV-5-1-7--ecD-9hBX99onAMSKIMJpKSpKrMKJhIMKopST-NOaOrRopIBfIMSSMzxzUpzUUaUaUbttyUaOhBpIJppMKprSxrUrrKMKprRnBn9ggnBms9gnICIK99efBomceXgnIBcXceeeXeefBp9emceececeegmeXXeekee9X9Xf9ecee7X7-5N-a-N--NOWVN--V-1-V1--5---711171--550aN5--0V1-V77-55---------N-7XOta6aN1ggnBmnI7VD-VNN--NN1ghKBpKIKKJpKIIKCKKKCKIKKRnBopKKrKSSIJpIIJoopCIJpKUKSMLpSKKIIJpKKMSnKrUSSppKpMSMKpSKrKp9eepUrpSSKpSprrrzzzSrrzzzrUrzxrUzUzUyTSxnICKCACCCBnABnBgnBmnABnCBnBgmnBgmmmgggggf9meemeXggf9mgemmmenAAABmmmmXhA7cgnIIAIBnBmhBnIBnKKSMSpgnCKRnKKMKKpKSprQMQCIKKCKMKCJpKKpMBohRmnABfB-1V9sQR73q09kCIBed989cCHZpMUMMSMSUOxbpy0bbxSraOaOc7TVP29C9Vc0VBecV--7NVV-N8H9w--c9BgrX-BVhQICKrSsV-1VkNB1Dn9choeAEHp9A9eAKKp9fCI9Xme118BgecX7IKKAKrJce70cXXXcXMSppCzSpJxSMKSKSSrk-0xpxxzba-17Oxta56paOsNNTOyTOa--USkWzMUUzs--VWbrxrrVV-d9e7VHsFGFpA9BnCzzII9X97pxS9XHVZoogqUtzqUyUxx50WsTOXmgcOuVOXc0T4CohpochopxzyN7X7NXV-cNWurX-AW_mQ9horyWa--D6JABqN-51WZ4aN79-1XOJ2Oc-58_IBN-i8hrCBfItza-V2Nd5onEIMLOs-X-0se3gprOX1V5NezHrS9eACprpxy0aN7cVV07h4Zpy1V3shEFnKMUrzcVN7I91V-chgRwP--Xvb6V37jO2mfSxrUba79cV3cjXTpJpJOyTOX7gc--1B70i-6Y102KttXe-4Y2-QBrWV-qBklBoptztf9-7-aBzewzzyPee--YGg2-DspvZoeeeXmeA9mgmogn9fSApra0tzWzy6tzzbzztza-e-1YR0fR--PDnihKtVX-SYi0nMS9VecnMSUzxc7UNN5eV4HE3LxHx9HfA9nBxpaX5TUbzUpKDNUKBh9e5BfCMSFT6zUbaOd9V0aP7OZecWV-dYlL2AAIBmcozMopohpzU---NOaOa6X97-LEHZBzbeV07yFszq9V-cz9FrX-4YxwbHc6s-9FJpByV0d0kXnUT7V--FTac-5FvBCV-XGFeBnEUa1-686HMnJmxCIATUpUzV5--57eV2t6dDnABplyUaN1c--GxMc-9HB5gtV38862nCBopa0taT7V0d8AyppN7-1THOURmocpAKpBc9zSMU0aN551-USL---WZbifBogn9ghCUrLTTTOyOWs7e7V08F5moo5-48NGSmzJmVCKK6ls-0V-1_meQFN19MIGBrKKKKopKzWaUbsX7X77-17c-1P80D09ablQKBxrSSMSxzUSpSrSrSprMMUSVVVVV0baXX997XX7ccXVX17X7c-DQ9vBxX-PblGIMMSrMMMkVVOte97eX7-DUDUCL1-0bwmfD-3c-SvC55-NcAPfppppSrSr1117X171-Ju42Zn9gmd9ceceAMSrSppKrSIBfrKCMUUKk-T9mcV5Ua5Ubz6tX--0aOa1X902cKbrCKKJpHpIJnIKBnCCBfBfEryOttVOu5OaTN5OX0a-7--1---cRyM--P9esnVneG9xnBmn9grKKJnIJpKSKMKJporUonHe2IBmmnCBpCKrSrKpppxrSzUzxxrV5-NNNOV-Ws-XV55UrSrxyOc775-7egoe50Wta7X777N--7VOxrSVWtbzUUSqV6bWaN19cVX99gecemd9ec1xdFn2SrJeCpKrMSrKpSKSKIKKIICCI9XKMKCMSII9comomnAABpCIJpBmrTObs0taT5OsNOzaUSKMUtV-0aXX0WxOzaOV0zr1750zrGWX--XVVV-77X7V0VV-117XXXcHX1V39Nu-nKrUUyP7X9XVFeTW0xrI997KBcXBgnCAJpta50aUpIIBnKSzba-0VVUzbqNX1c--dA_c19eGowgggnCSSGWWWbaUsUUUccee705ejHzrzUUyNA9eXeV19fFvonOaTX-Rf_UfKCBeISJxrT-0WbbVNXe--AcyX--Aenu-lfzAABeconJnUP5UrSpKIpxLV0zML5-V7--1X7-2gTJfAOV-AQx3k--sU3c1TvB1BnKCIKIKCpMSGzr-0VN--751-19-0iur2k0FkOrQBgceZgnKKMMKKSJmXxpSSprMs6rJnrUra5NX7-X10X0aOVN-1cV70c16258gfA9fJmnIMKxzyOaOs-NNNX-7lElAMryXe7-042oc-A4AKhN-7gKbcmpIrX6zrxrMzUVeVX-gocVXV-3MmVV-3NpHV4wNq3mmmrUUrMUTP77-X7--lazYV3RQ6imfrrSprs-1X9-7liMQEOxse70E6TIBmZxlxxKOa77VV0I6vXBefKMIM5Ota50cV-RW4Rw-0RW5cnK5--Om5EABpMKBhSxxs17-0V5X--H5H1-9mCaYBoxbaP70emCc2MSIBepJfIIBmVP7mnCIAACCKIlV50bxqUV6zxxpCKprzzaUKa577cWVNUrOtV17V17V7Xcc--HEP1-0mI5IF-0mLgQF-amT1YIBonIIICBgonGaOaNOWVNOWba-02AS3hKIKIJN0V-5--AByfCsV-BqE5k-6CtMgN-0D4wcDzDLQCCCBpIIAAUJmmfBnAAJonCBoomgggfABpAKCJeecme9IBnKKKrMJrSrzUSKpMKpzrtttbxpMbbqOaUwUxObzrrK6aTTTOa5550Vc155ObWaOs9--0WWbtzyNce9cc-Ne7Vcc90zbcV0ztte90byTOXeXeeeVNXeeV0RupTnClV-hngH2CCCCJpKKKppUUtzbta5-V777-X177XV1wx_ZnIKKaN-V-PnvrYCJooerSo-OzuXVTOV71MEjtggeeeggnIAACJoTUzrMUbbttyN-AEykhD--x0GZrsc-2FY2g-4o9gQCSX-CjFseBonHonBf9en9eegf9XfCIBfBpCKMMHhCCKpCKICIpOtzSMMKKIJxUbbs7VN1---VV5ObbxrKCESzUpISy0bbbse1cX5-XVcXeV6y6aTNNNfBmehCCBee19cVV-0a6bzttyUyTUtzwUtttaNNOWV-1oImQL--AGQ0CNV-x5IkxkV0IIIYXm2V7XXeyUta5UV-46fyV0C78BrT7V0S83qnAyP2IoidnCSprrSxrSzrUMSxpMxzUUSSMMMMSzSSrrSprMSpMSSxrSxxxprrrrrUrxrSUUbtaUUL----WX-5N97X9emVP97719ecX-0aNcgmme6a9eX7199e77gecVX7cXXXXXcXX77X7X9egeeXX9-2oitACsV0hAoJnEbsc1EIX0Bgeen9gf9rSaOzzWyUrzqNX9-0CE-XnxVV-4FqeV0SGIunObe-1p622T7-0JRDc-0JfGc-vK0CgggrUzaT19V-CLDDs-6Ku0CV-ALMbENV-COvBk-bLoRjSrR-cX-8pp72IJoOWV--4T3HV-STYBq--hTbPoN-6pzxnBpT0X-5q4TfCGaNV-xXFHpN7-6N_hh--2NfsB-NqBUQHeCCtzSSSzT1cX11-1CZ-NpprX17-7qMXnCMyN7c-IOb-BnaN-0Owzc2fPAlBgggf9fAHoonAABgnCKCbbaT5OWaOaTOtbaTTOaN-0PiN7-MPkJBf6tV-4fLuV-SgO9lV-phLT7tV-4gqNV-4hl5V3xiFwnA9nAROzqOaOXV-SifanVGKwWFOaOV6zzzzUUy6tztbKta56s-WrzzsN-5T4rKpppSKSKKKM-6Sk2RmmeXgeggnTUbxyTUbyOe-OMnm0a50aOV-NNOyNOxtyN-fRZugenzttuc6MRg2gooef9eemeX7XeeeA9Y9BehCIUzrMUzzbrxzttzztzUzrzqUzzbzzzbbzrzzV-9fA9eeX0XeBeeY9e7-DrA8vSzrOtaXeec-0S7u7-rS8wBhCUbttcec-bSGCgnCzaN9-BrL6QBezxyTPXV4hpYLmgfCtzxzSttX9ce-" :
		19 === bI.sF && (oG =
			"EcCx-VQCO1iiqOLOKeeedae_ddadadadOfiveOeLeeeedadaPiuuiePPeeyeeeeOeaPadaeeydPeOedaOPLOeeeOadLOKLKKLJG4G3G4G4G3F-3GJG4G4KKG443G3G3G3G4K3K3K3GKKK3FJ40F33GK0K0K3G3F3F2nBnBnBnB-Bn-04G--BzzwEByvn-wG-BnnB2BkG44K-4KPKQyde_K-G3GKFwGPKO_O_K3J4KG4KKG4KKKJG4KJKK30304LOJG3GKKKKKQvjzuzziviueeaKaKPKKKKKKKKK3K_eOKO_OedaKaLaOevedaOGOeOeeaOaOaOeOjzvjyaPeOKKKOK43K_KKaveJGJ0-JG3G3GF3G3G43KaKF3G4aOedaOFKLK4_eee_dJK33KeaOLOaOjveeKLO_OaOaeKLPeivjeaOeOaJKGKJ4PdadafiyjedLPeueK3F-G30F3G3-3LOaOjeKLPe_O_OeaPfieieeyeaOaPOKOeedeOdada_daOdaKd_O_aOKPOKLKaKdK4LK3LTdaOdKaOK_KLPOaaO_LPKGKKK_KOaLO_aOOaaOdaPOdaO_OaKOdaPOdaPedeOJF--00LaPdeaeOfeyeiuudaueaaPdbeOeuefefuivfifujifieviivifeeid_G-04OF0-03KaPvievjizfeeLJ0-JG-KdOTvfiyviyujffviujeiufeiefivivfivvfeevivveiuueieiefeeiyejffuiuuiviuvfiifiieePeeaieieveuePdaPKJKefefefiuzzvzivviyfvnvjvzEzzjzwzzzBnzwnnk2Bwkn2zzknB-n2BnEBzyzzBzzEwnzznzzzjfzBzwzznziz2zwnBnBBkB--B2EBznEzBwnBnBzzBknEnEByywzzzzzEzz2wnzkzznEBwwEnEnEzznEzzzzzzzzEzwwEEizizizivjvjfznnzyyyvivzzwnyviuizyeyeKbifiuizzvifieeuyviuiuefie_iviiyjzvn3F3Bnw-BnBn2BnBnwnwnwnBkBBk22nEn-EeeieKdeiudaOaOPedaeePeee_KKLPOefzkzEEjzwk2B-k-kBB2yiiuieueeaeeaOOaOvzzzBzvjivjuiuyevieifiedaOeueuivivieuvfyvzvyvvuuvwzzyyvzzvjivvivvjyvznBnn2wzznwoLK-z2BknzEivePPLOOvjBwnEffeuyzefzuuujnkkGG-yzEEzBnEBnnBwnEBnznzzvzzznzvzzEBnzn-k-k-k-2-wB2B-k2-2nBB2kBBwnBw-nB-2Bk22Bw-BkknnBBBBBnBE-znznkkEnE2--kEBknBBkBBk2E-3-2Bk-k2B22BB2k-k-k2BBn-w2-32k-C3F--k-FG0G-22-2-FB--k-2-w-G32En--nB-2kKLePLdFJG3-F0033G043-l3-G3K3JK-32B3G4K4F--B--B--FGLJGJ3F03JLaeKFG--0---BFK--203FGGFG33F2nBFG3FGJ4GJ4K02GKF03-GKKG3K0JFK3G03F--G--l43--Bk--kG-FF3F03G-403G----l0----G--Bn33GJG340JG3-G4KaLKPKG-4-3F3F03-B-------G3FJ00--3KGF--0---03G0032T4mfgmegmeX7fBnJnKIEzzzzbrpzzaObtVOaNX9c9c0JN9cQfjzGG0F4NoWynBpJnKzzzV---Xc1RfMlOOvfvzwEw3GKKF-0gAIV-2OK2-3aoazBjs-pIUdyOaKaKaOfzzvgBnBF---1gInV-4OaA-BexerKESrs-V9V3q6e6dauVn3-0fPHBpMs-c-SiqWQwJ1mtRSUSKKKKKKJOzzxrROc11--TX-X7V7eeV4Meo2avi2kCK--EcNy-OUJfiLKdTzsBk-0kCPrF0fVVRjiveveiueOuveeeeaNn-n22-BG--030303K3F3B6-nnBnBrSr0a---EsTXQudeviviedazk-2-G-030K-4l1tMCkOc-57MIs-E3IhS5P-CYA-DLew--koIyA9emmfACMSrUtbzzzTTObrUtV7ge7X7eeV8QnZxddaebjwnB-30F3xzBZnMKCMzra71-7cV3wA4p_Qzzo4Ffy5yanHpIKSKMKSMSSrKKMofJppMKSKrSpSMKSzrzzrUtaOzsTN1oc5OaUzrHnCTOtaP755N5-T-NUTNN-N-5-5-N-P7X97gn9gmeee9n9meeX97cX7eVeX9cXV"
			), (new rf).rh(oG)
}

function aD4() {
	this.sE = null, this.dG = function() {
		var aE1 = [120, 105, 92],
			cos = [12, 12, 60],
			aE2 = [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
			aE3 = [140, 130, 120],
			aE4 = [12, 12, 76],
			aE5 = [240, 120, 1024, 30, 19, 30, 70, 8, 20, 3, 9],
			aE6 = [130, 117, 106],
			aE7 = [12, 12, 68],
			aE8 = [270, 210, 1024, 28, 19, 33, 50, 8, 26, 3, 9];
		this.sE = new Array(bI.aAp + 1), this.sE[0] = {
			name: L(111),
			u: 230,
			iH: 230,
			lA: 1e3,
			l7: 2e3,
			aD6: 173
		}, this.sE[1] = {
			name: L(112),
			u: 800,
			iH: 800,
			lA: 100,
			l7: 50,
			aD6: 43
		}, this.sE[2] = {
			name: L(113),
			u: 512,
			iH: 512,
			lA: 128,
			l7: 32,
			aD6: 0
		}, this.sE[3] = {
			name: L(114),
			u: 960,
			iH: 960,
			lA: 60,
			l7: 8,
			aD6: 0
		}, this.sE[4] = {
			name: L(115),
			u: 900,
			iH: 900,
			lA: 100,
			l7: 5,
			aD6: 0
		}, this.sE[5] = {
			name: L(116),
			u: 1e3,
			iH: 1e3,
			lA: 100,
			l7: 40,
			aD6: 0
		}, this.sE[6] = {
			name: L(117),
			u: 1e3,
			iH: 1e3,
			lA: 100,
			l7: 20,
			aD6: 0
		}, this.sE[7] = {
			name: L(118),
			u: 1024,
			iH: 1024,
			lA: 128,
			l7: 32,
			aD6: 0
		}, this.sE[8] = {
			name: L(119),
			u: 820,
			iH: 820,
			lA: 200,
			l7: 100,
			aD6: 0
		}, this.sE[9] = {
			name: L(120),
			u: 1024,
			iH: 1024,
			lA: 128,
			l7: 32,
			aD6: 0
		}, this.sE[10] = {
			name: L(121),
			sD: aE3,
			sG: aE4,
			aDF: aE5
		}, this.sE[11] = {
			name: L(122),
			sD: aE6,
			sG: aE7,
			aDF: aE8
		}, this.sE[12] = {
			name: L(123),
			sD: aE6,
			sG: aE7,
			aDF: aE8
		}, this.sE[13] = {
			name: L(124),
			sD: aE1,
			sG: cos,
			aDF: aE2
		}, this.sE[14] = {
			name: L(125),
			sD: aE1,
			sG: cos,
			aDF: aE2
		}, this.sE[15] = {
			name: L(126),
			sD: aE3,
			sG: aE4,
			aDF: aE5
		}, this.sE[16] = {
			name: L(127),
			sD: aE3,
			sG: aE4,
			aDF: aE5
		}, this.sE[17] = {
			name: L(128),
			sD: aE1,
			sG: cos,
			aDF: aE2
		}, this.sE[18] = {
			name: L(129),
			sD: aE6,
			sG: aE7,
			aDF: aE8
		}, this.sE[19] = {
			name: L(130),
			sD: aE1,
			sG: cos,
			aDF: aE2
		}, this.sE[20] = {
			name: L(131),
			u: 1024,
			iH: 1024,
			lA: 128,
			l7: 32,
			aD6: 0
		}, this.sE[bI.aAp] = {}
	}
}

function zA() {
	(sy = void 0 === sy ? document.createElement("canvas") : sy).width = bI.eV, sy.height = bI.eW, zE = sy.getContext("2d", {
		alpha: !0
	}), zF = zE.getImageData(0, 0, bI.eV, bI.eW), a5m = zF.data, b2.og.rw(a5m)
}

function cN() {
	var du, u, iH, max, aE9, l7, aEB, aEC, aED, aEE, aEF, aEG, aEH, aEI, aEA = 1e4;

	function aEP(aEO, lA, f0) {
		var a0;
		for (aEB[0] = aEO, a0 = 1; a0 < f0; a0++) aEB[a0] = aEB[a0 - 1] + lA, lA = aEB[a0] >= aEA ? (aEB[a0] = aEA - 1, -lA) : aEB[a0] < 0 ? (aEB[a0] = 0, -lA) : (lA += 16384 <= ao.random() ? l7 : -l7) < -aE9 ? -aE9 : aE9 < lA ? aE9 : lA
	}

	function aER(fi, fj, aES, f0) {
		(aES ? function(fi, fj, f0) {
			var a0;
			for (a0 = 0; a0 < f0; a0++) du[fj * u + fi + a0] = aEB[a0]
		} : function(fi, fj, f0) {
			var a0;
			for (a0 = 0; a0 < f0; a0++) du[fj * u + fi + a0 * u] = aEB[a0]
		})(fi, fj, f0)
	}

	function aEV(value, f0) {
		var a0, k2, fz, gg = value - aEB[f0 - 1];
		if (0 != gg) {
			for (k2 = 1 + bB.eo(Math.abs(gg), f0 - 1), k2 = gg < 0 ? -k2 : k2, aEB[f0 - 1] = value, fz = (fz = f0 - 1 - bB.eo(Math.abs(gg), Math.abs(k2))) < 1 ? 1 : f0 - 2 < fz ? f0 - 2 : fz, a0 = f0 - 2; fz <= a0; a0--) aEB[a0] += gg - (f0 - 1 -
				a0) * k2;
			(gg < 0 ? function(f0) {
				var a0;
				for (a0 = f0 - 2; 1 <= a0; a0--) aEB[a0] < 0 && (aEB[a0] = -aEB[a0] - 1)
			} : function(f0) {
				var a0;
				for (a0 = f0 - 2; 1 <= a0; a0--) aEB[a0] >= aEA && (aEB[a0] = 2 * aEA - aEB[a0] - 1)
			})(f0)
		}
	}

	function aEY(xV, xW, f0) {
		for (var a0 = 0; a0 < f0; a0++) xV[a0] = xW[a0]
	}

	function aEZ(e8) {
		for (var a0 = 0; a0 < e8.length - 1; a0++) e8[a0] = e8[a0 + 1] - e8[a0];
		e8[e8.length - 1] = e8[e8.length - 3]
	}

	function aEa(zX, gap, gf) {
		aEC.push(zX), aED.push(gap), aEE.push(gf)
	}
	this.w = function(yS) {
		! function(yS) {
			var a0;
			for (u = yS[0], iH = yS[1], aE9 = yS[2], l7 = yS[3], du = new Int16Array(u * iH), max = iH < u ? u : iH, aEB = new Int16Array(max), aEC = [], aED = [], aEE = [], aEF = new Array(u), aEG = new Array(iH), a0 = u - 1; 0 <= a0; a0--) aEF[
				a0] = !1;
			for (a0 = iH - 1; 0 <= a0; a0--) aEG[a0] = !1;
			aEH = new Int16Array(u), aEI = new Int16Array(iH)
		}(yS),
		function(f0) {
			var aEO = ao.random() % aEA,
				lA = ao.random() % (2 * aE9 + 1) - aE9;
			aEP(aEO, lA, f0)
		}(max), aEY(aEI, aEB, iH), aER(0, 0, !0, u);
		var fi, fj, yS = du[0],
			f0 = max,
			lA = ao.random() % (2 * aE9 + 1) - aE9;
		for (aEP(yS, lA, f0), aEY(aEH, aEB, u), aER(0, 0, !1, iH), aEZ(aEH), aEZ(aEI), aEP(du[u - 1], aEH[u - 1], iH), aER(u - 1, 0, !1, iH), aEP(du[u * (iH - 1)], aEI[iH - 1], u), aEV(du[u * iH - 1], u), aER(0, iH - 1, !0, u), aEF[u - 1] = aEF[
				0] = !0, aEG[iH - 1] = aEG[0] = !0, aEa(0, u, !0), aEa(0, iH, !1), ! function() {
				var aEc, zX;
				for (;;) {
					if (aEc = function() {
							var a0, aEc = aEC.length - 1;
							for (a0 = aEc - 1; 0 <= a0; a0--) aED[a0] > aED[aEc] && (aEc = a0);
							return aEc
						}(), aED[aEc] < 5) return;
					zX = aEC[aEc] + bB.eo(aED[aEc], 2), (aEE[aEc] ? function(fi) {
						var f0, aEf, a0, a6a = 0,
							aEg = 0;
						for (; aEg < iH - 1;) {
							for (a0 = a6a + 1; a0 < iH; a0++)
								if (aEG[a0]) {
									aEg = a0;
									break
								} f0 = aEg - a6a + 1, aEP(du[fi + u * a6a], 0 === a6a ? aEH[fi] : aEB[aEf - 1] - aEB[aEf - 2], f0), aEV(du[aEg * u + fi], f0), aER(fi, a6a, !1, f0), aEf = f0, a6a = aEg
						}
						aEF[fi] = !0
					} : function(fj) {
						var f0, aEf, a0, a6a = 0,
							aEg = 0;
						for (; aEg < u - 1;) {
							for (a0 = a6a + 1; a0 < u; a0++)
								if (aEF[a0]) {
									aEg = a0;
									break
								} f0 = aEg - a6a + 1, aEP(du[fj * u + a6a], 0 === a6a ? aEI[fj] : aEB[aEf - 1] - aEB[aEf - 2], f0), aEV(du[fj * u + aEg], f0), aER(a6a, fj, !0, f0), aEf = f0, a6a = aEg
						}
						aEG[fj] = !0
					})(zX), aEa(zX, aEC[aEc] + aED[aEc] - zX, aEE[aEc]), aED[aEc] = zX - aEC[aEc] + 1
				}
			}(), fi = 0; fi < u; fi++)
			if (!aEF[fi])
				for (fj = 0; fj < iH; fj++) aEG[fj] || ! function(fi, fj) {
					var value = du[fj * u + fi - 1] + du[(fj - 1) * u + fi],
						a1N = 2;
					aEF[fi + 1] && (a1N++, value += du[fj * u + fi + 1]);
					aEG[fj + 1] && (a1N++, value += du[(fj + 1) * u + fi]);
					du[fj * u + fi] = bB.eo(value, a1N)
				}(fi, fj)
	}, this.aDQ = function() {
		return du
	}, this.aDB = function() {
		du = null
	}
}

function a9d(i1, i7) {
	return 0 <= i1 ? bB.eo(i1, i7) : -bB.eo(-i1, i7)
}

function iM(du) {
	return du * du
}

function a0c(i1, i7) {
	return i7 < i1 ? i1 : i7
}

function a3z(i1, i7) {
	return i1 < i7 ? i1 : i7
}

function a2n(i1, du, i7) {
	return du < i1 ? i1 : i7 < du ? i7 : du
}

function aEi(du, f0) {
	for (var io = bB.eo(du + 1, 2), a0 = 0; a0 < f0; a0++) io = bB.eo(io + bB.eo(du, io), 2);
	return io
}

function aBM(du, f0) {
	return du < 1 ? 0 : aEi(du, f0)
}

function aEj(ks, kt, pg, a2X, ku, kv, ph, a8p) {
	return !(ks + pg <= ku || kt + a2X <= kv || ku + ph <= ks || kv + a8p <= kt)
}

function aEk(ks, kt, pg, a2X, ku, kv, ph, a8p) {
	return ks <= ku && kt <= kv && ku + ph <= ks + pg && kv + a8p <= kt + a2X
}

function rn(du) {
	return Math.floor(!!du * (1 + Math.log2(du + .5)))
}

function bf() {
	this.eo = function(i1, i7) {
		return Math.floor((i1 + .5) / i7)
	}, this.aEl = function(i1, i7) {
		return Math.floor(i1 * (i7 + .5))
	}, this.sqrt = function(du) {
		return ~~Math.sqrt(du + .5)
	}, this.pow = function(d) {
		return Math.floor(Math.pow(2, d) + .5)
	}, this.o8 = function(value, min, max) {
		return Math.min(Math.max(value, min), max)
	}, this.aEm = function(e9, eB, eD) {
		return Math.max(Math.min(e9, eB), eD)
	}, this.aEn = function(aEo, aEp, fi, fj) {
		fi -= aEo, aEo = fj - aEp, fj = 0;
		return 0 == fi ? fj = 0 <= aEo ? Math.PI : 0 : (fj = Math.atan(aEo / fi), fj += 0 < fi ? .5 * Math.PI : 1.5 * Math.PI), fj
	}, this.log2 = function(du) {
		return Math.floor(!!du * (1 + Math.log2(du + .5)))
	}, this.log10 = function(du) {
		return Math.floor(Math.log10(du + .5))
	}, this.aEr = function(aEs, aEt, aEu, aEv, aEw) {
		return aEu - aEw < aEs && aEs < aEu + aEw && aEv - aEw < aEt && aEt < aEv + aEw
	}
}

function cw() {
	this.kB = new aEx, this.pZ = 0;
	var aEy = new Array(19);

	function aF2() {
		for (var f0 = aEy.length, a0 = 0; a0 < f0; a0++) aEy[a0] = null
	}
	this.dG = function() {
		for (var aEz, aF0 = document.body.firstChild; aF0;) aEz = aF0.nextSibling, "DIV" !== aF0.tagName && "INPUT" !== aF0.tagName && "BUTTON" !== aF0.tagName || document.body.removeChild(aF0), aF0 = aEz
	}, this.j = function(kh, aF1, yS) {
		void 0 === aF1 && (aF1 = this.pZ), bU.dN = !0, 0 === kh && (0 === aP.vz() ? kh = 5 : m.n.setState(13)), this.pu(), this.pZ = kh;
		var jc = aEy[kh];
		if (!jc || 4 === kh || 7 === kh || 8 === kh || 9 === kh || 10 === kh || 11 === kh || 13 === kh || 15 === kh || 18 === kh) {
			if (0 === kh) return void aF2();
			1 === kh ? jc = new aF3 : 2 === kh ? jc = new aF4 : 3 === kh ? jc = new aF5 : 4 === kh || 9 === kh || 10 === kh || 11 === kh || 13 === kh ? jc = yS : 5 === kh ? jc = new aF6 : 6 === kh ? jc = new aF7 : 7 === kh ? jc = new aF8(i.kB
					.aF9) : 8 === kh ? jc = yS : 12 === kh ? jc = new aFA : 14 === kh ? jc = new aFB : 15 === kh ? jc = new aF8(i.kB.aFC) : 16 === kh ? jc = new aFD : 17 === kh ? jc = new aFE : 18 === kh && (jc = new aFF), jc.aF1 = aF1, aEy[kh] =
				jc
		}
		jc.show(yS)
	}, this.w6 = function() {
		this.tK() && this.aFG(this.a98().aF1)
	}, this.aFG = function(kh) {
		this.tK() && (this.pu(), bU.dN = !0, this.pZ = kh, aEy[kh] ? aEy[kh].show() : this.j(kh))
	}, this.pu = function() {
		this.tK() && aEy[this.pZ].pu()
	}, this.r4 = function() {
		this.tK() && (aEy[this.pZ].pu(), aF2(), this.pZ = 0, m.n.setState(13))
	}, this.kn = function() {
		var jc;
		this.tK() && (jc = aEy[this.pZ]).kn && jc.kn()
	}, this.resize = function() {
		if (!this.tK()) return !1;
		aEy[this.pZ].resize()
	}, this.fq = function(fi, fj) {
		var jc;
		this.tK() && (jc = aEy[this.pZ]).fq && jc.fq(fi, fj)
	}, this.wL = function(fi, fj) {
		var jc;
		this.tK() && (jc = aEy[this.pZ]).wL && jc.wL(fi, fj)
	}, this.wj = function() {
		var jc;
		this.tK() && (jc = aEy[this.pZ]).wj && jc.wj()
	}, this.wO = function(jo, jp, deltaY) {
		var jc;
		this.tK() && (jc = aEy[this.pZ]).wO && jc.wO(jo, jp, deltaY)
	}, this.wv = function(code) {
		var jc;
		return !!this.tK() && ((jc = aEy[this.pZ]).wv && jc.wv(code), !0)
	}, this.hd = function() {
		var jc;
		this.tK() && (jc = aEy[this.pZ]) && jc.hd && jc.hd()
	}, this.tK = function() {
		return 0 < this.pZ
	}, this.a98 = function() {
		return aEy[this.pZ]
	}, this.aFH = function(kh) {
		return aEy[kh]
	}
}

function aF8(data) {
	var aFI, aFJ;
	this.show = function() {
		data.aFK && b8.aFs("account", data.pX), aFI.show(), this.resize()
	}, this.pu = function() {
		aFI.pu()
	}, this.resize = function() {
		aFI.resize(), aFJ.resize()
	}, this.wv = function(io) {
		2 === io && aFI.qB[0].on()
	}, aFI = new q4(data.username, [new l(L(13), function() {
		b8.clear(), i.w6()
	}), new l(data.aFK ? "🔄 " + L(132) : L(133), function() {
		i.j(8, i.a98().aF1, new pa(25, {
			pb: 0,
			pX: data.pX,
			pY: data.pY
		}))
	}, 0, 0, 1)]), aFJ = new oQ(aFI.qA, function() {
		var oS = [];
		oS.push(function() {
			var aFX = new oC;
			aFX.oF(L(134)), aFX.oJ(L(135) + b2.l4.yg(data.rE, .01, 2)), data.aFK || (aFX.oH(L(136)), aFX.oH(L(137)), aFX.oH(L(138)));
			return aFX
		}()), data.aFK && oS.push(function() {
			var aFX = new oC,
				aFY = (aFX.oF(L(139)), new pG(bY.dY.data[147], 1, void 0, function(d) {
					aFZ(d.target.value)
				})),
				aFa = (aFX.oO(aFY), new l(L(140), function(d) {
					return aFY.d.readOnly && aq.kB.a6x(0) && (b2.kw.y4(d), aFb(), aq.aFc.aFd({
						pb: 0,
						pX: data.pX,
						pY: data.pY,
						value: bB.o8(Math.floor(100 * bY.dY.data[147].value), 0, 4294967295)
					})), !0
				}, 1)),
				aFe = new l(L(141), function(d) {
					return d.innerText === L(141) ? (d.innerText = L(142), aFY.d.readOnly = !0, aFa.op(0), aFa.button.style.color = p.mi, bY.p8.p9(147, aFY.d.value), aFZ(bY.dY.data[147].value)) : aFb(), !0
				}),
				oI = (aFX.oO(new pD([aFe.button])), aFX.oH()),
				aFZ = function(du) {
					du = isNaN(du) ? 0 : Number(du);
					var du = Math.max(du, (data.aFf + 1) / 100),
						aFg = Math.floor(100 * Math.max(1e-4 * du, data.aFf / 100)) / 100;
					oI.textContent = L(143, [du.toFixed(2), bY.dY.data[105].value, aFg.toFixed(2), data.pX, (du - aFg).toFixed(2)])
				},
				aFb = function() {
					aFe.button.innerText = L(141), aFY.d.readOnly = !1, aFa.op(1), aFa.button.style.color = p.lx
				};
			return aFZ(bY.dY.data[147].value), aFX.oO(new pD([aFa.button])), aFX
		}());
		oS.push(function() {
			var aFX = new oC,
				aFY = (aFX.oF(L(144)), new pG({
					title: data.pX,
					value: data.pX,
					kh: -1
				}));
			return aFY.d.readOnly = !0, aFX.oO(aFY), aFX.oO(new pD([new l(L(145), function(d) {
				return b2.kw.y3(aFY.d), b2.kw.y4(d), !0
			}).button])), aFX
		}()), data.aFK || (oS.push(function() {
			var aFX = new oC,
				aFh = (aFX.oF(L(146)), new pG(bY.dY.data[106]));
			return aFh.d.readOnly = !0, aFh.d.type = "password", aFX.oO(aFh), aFX.oO(new pD([new l(L(147), function(d) {
				return d.innerText === L(147) ? (d.innerText = L(148), aFh.d.type = "text") : (d.innerText = L(147), aFh.d.type = "password"), !0
			}).button, new l(L(145), function(d) {
				return b2.kw.y3(aFh.d), b2.kw.y4(d), !0
			}).button])), aFX.oO(new pD([new l(L(149), function() {
				i.j(8, i.a98().aF1, new pa(15))
			}).button])), aFX.oF(L(150), "0.8em"), aFX.oH(L(151)), aFX.oH(L(152)), aFX.oH(L(153)), aFX
		}()), oS.push(function() {
			var aFX = new oC;
			return aFX.oF(L(154)), aFX.oO(new pD([new l(L(155), function() {
				i.j(6, i.a98().aF1)
			}).button])), aFX.oO(new pD([new l(L(156), function() {
				bY.p8.p9(105, ""), i.j(8, i.a98().aF1, new pa(18))
			}).button])), aFX.oO(new pD([new l(L(157) + bY.dY.data[105].value, function() {
				i.j(4, 0, new k(L(158), L(159), !0, [new l(L(13), function() {
					i.j(7, i.aFH(7).aF1)
				})]))
			}, p.mW).button])), aFX
		}()), oS.push(function() {
			function aFj(kh) {
				for (var a0 = 0; a0 < 2; a0++) aFi[a0].op(0 === kh ? p.m8 : 0 === a0 ? p.mW : p.q)
			}
			var oM, aFi, aFX = new oC;
			aFX.oF(L(160)), aFX.oH(L(161)), bY.kB.qx();
			return aFi = [new l(L(162), function() {
				var kh = Math.min(bY.dY.data[117].value, oM.oN.length - 1);
				if (!(kh < 1)) {
					oM.oN[kh].remove(), oM.oN.splice(kh, 1);
					for (var a0 = kh; a0 < oM.oN.length; a0++) oM.oN[a0].name = "" + a0;
					bY.kB.r0(kh), kh = bY.dY.data[117].value, oM.oN[kh].textContent = oM.oN[kh].textContent.replace("⚪", "🟢"), aFj(kh)
				}
			}, p.m8), new l(L(163), function() {
				var kh = Math.min(bY.dY.data[117].value, oM.oN.length - 1);
				kh < 1 || (kh = bY.kB.r1(kh), bY.p8.p9(105, kh.pX), bY.p8.p9(106, kh.password), i.j(8, i.a98().aF1, new pa(18)))
			}, p.m8)], (oM = new q0(bY.dY.data[117], aFj)).oN[0].style.marginTop = "0.5em", aFX.oL(oM), aFX.oO(new pD([aFi[1].button])), aFX.oO(new pD([aFi[0].button])), aFX
		}()));
		return oS.push(function() {
				var aFX = new oC,
					aFY = (aFX.oF(L(179)), new pG({
						title: data.username,
						value: data.username,
						kh: -1
					}));
				aFY.d.readOnly = !0, aFX.oO(aFY), aFX.oO(new pD([new l(L(145), function(d) {
					return b2.kw.y3(aFY.d), b2.kw.y4(d), !0
				}).button])), data.aFK || aFX.oH(L(180));
				return aFX
			}()), oS.push(function() {
				var aFX = new oC;
				aFX.oF(L(164)), aFX.oJ(L(165) + b2.l4.yg(data.rA, .1, 1) + "<br>" + L(166) + (data.rB + 1) + " / " + data.rD + "<br>" + L(167) + data.rC), data.aFK && (aFX.oO(new pD([new l(L(168), function(d) {
					return aq.kB.a6x(0) && (b2.kw.y4(d), aq.aFc.aFk({
						pb: 1,
						pX: data.pX,
						pY: data.pY
					})), !0
				}, 0, 0, 1).button])), aFX.oH(L(169)));
				return aFX
			}()),
			function(oS) {
				var aFX = new oC,
					vZ = data.rH,
					aFo = (aFX.oF(L(181)), aFX.oJ(L(182) + (vZ ? "[" + data.rF + "]" : "-")), aFX.oJ(L(183) + b2.l4.yg(vZ, .001, 2)), aFX.oJ(L(166) + (data.rJ + 1) + " / " + data.rD), data.rK),
					aFp = (aFX.oJ(L(184) + b2.l4.yg(aFo, .01, 2)), data.rM);
				aFX.oJ(L(185) + aFp), aFX.oJ(L(186) + b2.l4.yg(aFo / Math.max(aFp, 1), .01, 2)), vZ = data.rI, aFX.oF(L(187), "0.8em"), aFX.oJ("Clan: " + (vZ ? "[" + data.rG + "]" : "-")), aFX.oJ(L(183) + b2.l4.yg(vZ, .001, 2)), aFo = data
					.rL, aFX.oJ(L(184) + b2.l4.yg(aFo, .01, 2)), aFp = data.rN, aFX.oJ(L(185) + aFp), aFX.oJ(L(186) + b2.l4.yg(aFo / Math.max(aFp, 1), .01, 2)), oS.push(aFX)
			}(oS),
			function(oS) {
				var aFX = new oC;
				aFX.oF(L(188)), aFX.oJ(L(176) + data.aFq + "<br>" + L(177) + (data.aFr.length ? L(189, [data.aFr]) : L(190))), data.aFK && (aFX.oO(new pD([new l(L(191), function(d) {
					return aq.kB.a6x(0) && (b2.kw.y4(d), aq.aFc.aFk({
						pb: 4,
						pX: data.pX,
						pY: data.pY
					})), !0
				}, 0, 0, 1).button])), aFX.oH(L(192)), aFX.oH(L(193)));
				oS.push(aFX)
			}(oS), oS.push(function() {
				var aFX = new oC;
				if (aFX.oF(L(175)), aFX.oJ(L(176) + data.aFm + "<br>" + L(166) + (data.aFn + 1) + " / " + data.rD + "<br>" + L(177) + function(gR) {
						if (40 <= gR) return L(170);
						if (16 <= gR) return L(171);
						if (4 <= gR) return L(172);
						if (1 <= gR) return L(173);
						return L(174)
					}(data.aFn)), data.aFK) {
					aFX.oO(new pD([new l("−", function(d) {
						return aq.kB.a6x(0) && (b2.kw.y4(d), aq.aFc.aFk({
							pb: 3,
							pX: data.pX,
							pY: data.pY
						})), !0
					}, 0, 0, 1).button, new l("+", function(d) {
						return aq.kB.a6x(0) && (b2.kw.y4(d), aq.aFc.aFk({
							pb: 2,
							pX: data.pX,
							pY: data.pY
						})), !0
					}, 0, 0, 1).button]));
					for (var a0 = 0; a0 < 2; a0++) aFX.oD[0].pF[a0].style.fontSize = "1.6em";
					aFX.oH(L(178))
				}
				return aFX
			}()), oS
	}())
}

function aFt(data) {
	var aFI, aFu, aFv, a6f, aFw, aFx, aFy, colors, aFz, aG0, aG1 = 0,
		aG2 = 0,
		aG3 = !1,
		aG4 = !1,
		aG5 = [1, 5, 60, 240, 1440, 10080, 43200];

	function aGW(jo, jp) {
		! function(jo, jp) {
			return aFu < jo && jo < aFu + a6f && aFv < jp && jp < aFv + aFw
		}(aG1 = jo, aG2 = jp) ? (aG3 && (bU.dN = !0), aG3 = !1) : (aG3 = !0, bU.dN = !0)
	}
	this.show = function() {
		aG4 = bY.dY.data[127].value, aFI.show(), this.resize()
	}, this.pu = function() {
		aFI.pu()
	}, this.resize = function() {
		aFI.resize();
		var io = an.ob,
			qL = aFI.qF(),
			aGE = io * qL.qJ,
			io = io * qL.qG;
		aFx = b2.kw.pw(.06), aFy = b2.kw.pw(.04), aFu = b2.kw.pw(.06), aFv = io + aFx, a6f = an.u - aFu - aFy, aFw = aGE + io - aFv - aFy
	}, this.kn = function() {
		aFI.kn(),
			function() {
				var a0, aGB, jO, fi, i1, e8 = data.data,
					aGH = 1,
					aGI = .125,
					aGJ = aG4 ? 65536 : 0;
				for (a0 = 0; a0 < e8.length; a0++)
					for (aGB = e8[a0].aGB, jO = aGB.length, aGH = Math.max(jO, aGH), i1 = 0; i1 < jO; i1++) aGI = Math.max(aGB[i1], aGI), aGJ = Math.min(aGB[i1], aGJ);
				var kt = aFv + aFw,
					sq = aFw / (aGI - aGJ),
					sp = 1 / (aGH - 1);
				for (kx.lineWidth = bR.tn, a0 = 0; a0 < e8.length; a0++) {
					for (aGB = e8[a0].aGB, jO = aGB.length, fi = aFu, kx.beginPath(), kx.moveTo(fi + a6f, kt - sq * (aGB[jO - 1] - aGJ)), i1 = jO - 2; 0 <= i1; i1--) kx.lineTo(fi + sp * i1 * a6f, kt - sq * (aGB[i1] - aGJ));
					kx.strokeStyle = colors[a0], kx.stroke()
				}(function(aGJ, aGI, kt, sq) {
					kx.font = b2.kw.l1(0, .25 * aFu), b2.kw.textBaseline(kx, 1), b2.kw.textAlign(kx, 2), kx.fillStyle = colors[0];
					for (var fi = .92 * aFu, a0 = 0; a0 < 3; a0++) {
						var du = aGJ + a0 * (aGI - aGJ) / 2;
						kx.fillText((du / 1e3).toFixed(3), fi, kt - sq * (du - aGJ))
					}
				})(aGJ, aGI, kt, sq),
				function(aGH) {
					var fj = aFv + aFw + .15 * aFy;
					kx.font = b2.kw.l1(0, Math.min(.4 * aFy, .028 * an.u)), b2.kw.textBaseline(kx, 0), b2.kw.textAlign(kx, 2), kx.fillStyle = colors[0], kx.fillText(b2.xF.xs(aFz), aFu + a6f, fj), b2.kw.textAlign(kx, 0), kx.fillText(b2.xF.xs(
						new Date(aG0.getTime() - 6e4 * (aGH - 1) * aG5[data.aGA])), aFu, fj)
				}(aGH),
				function(aGH, aGJ, aGI) {
					if (aG3 && !(aGH < 2)) {
						for (var a2f, kh = (aG1 - aFu) / a6f * (aGH - 1), k0 = Math.floor(kh), k1 = Math.floor(1 + kh), aGM = kh - k0, aGN = 1e5, aGO = -1, aGP = -1, aGQ = aGI - (aGI - aGJ) * (aG2 - aFv) / aFw, e8 = data.data, a0 = 0; a0 < e8
							.length; a0++) {
							var aDi, aGB = e8[a0].aGB;
							aGB.length <= k1 || (aGB = aGB[k0] + aGM * (aGB[k1] - aGB[k0]), (aDi = Math.abs(aGQ - aGB)) < aGN && (aGN = aDi, aGO = a0, aGP = aGB))
						} - 1 !== aGO && (aGI = aFv + aFw - (aGP - aGJ) / (aGI - aGJ) * aFw, kx.lineWidth = .5 * bR.tn, kx.strokeStyle = colors[aGO], kx.beginPath(), kx.moveTo(aFu, aGI), kx.lineTo(aG1, aGI), kx.lineTo(aG1, aFv + aFw), kx
						.stroke(), kx.beginPath(), kx.arc(aG1, aGI, .1 * aFu, 0, 2 * Math.PI), kx.fillStyle = colors[aGO], kx.fill(), aGJ = aFv + aFw + .15 * aFy, b2.kw.textAlign(kx, 1), a2f = aGH - 2 < kh ? (a2f = aG0.getTime() - 6e4 * aG5[
								data.aGA], new Date(a2f + (kh - (aGH - 2)) * (aFz.getTime() - a2f))) : new Date(aG0.getTime() - 6e4 * (aGH - kh - 1) * aG5[data.aGA]), aGH = b2.xF.xs(a2f), kh = b2.kw.measureText(aGH), a2f = bB.o8(aG1, aFu +
								.5 * kh, aFu + a6f - .5 * kh), kx.fillStyle = b2.color.lp(70, 50, 20), kx.fillRect(a2f - .52 * kh, aFv + aFw, 1.04 * kh, .55 * aFy), kx.fillStyle = colors[0], kx.fillText(aGH, a2f, aGJ), kx.font = b2.kw.l1(0,
								.25 * aFu), b2.kw.textBaseline(kx, 1), b2.kw.textAlign(kx, 2), a2f = .92 * aFu, aGH = (aGP / 1e3).toFixed(3), kh = b2.kw.measureText(aGH), aGJ = a2f - 1.04 * kh, kx.fillStyle = b2.color.lp(70, 50, 20), kx
							.fillRect(aGJ, aGI - .1625 * aFu, aFu - aGJ, .275 * aFu), kx.fillStyle = colors[aGO], kx.fillText(aGH, a2f, aGI))
					}
				}(aGH, aGJ, aGI)
			}(), kx.lineWidth = bR.tn, kx.strokeStyle = p.lx, kx.beginPath(), kx.moveTo(aFu, aFv), kx.lineTo(aFu, aFv + aFw), kx.lineTo(aFu + a6f, aFv + aFw), kx.stroke();
		var a0, fontSize = .5 * aFx,
			e8 = (kx.font = b2.kw.l1(0, fontSize), b2.kw.textBaseline(kx, 1), b2.kw.textAlign(kx, 0), data.data),
			f0 = e8.length,
			fj = aFv - .5 * aFx,
			oG = "";
		for (a0 = 0; a0 < f0; a0++) oG += e8[a0].name + "  ";
		oG = oG.trim();
		var aGT = b2.kw.measureText(oG),
			fi = .5 * (an.u - aGT);
		for (aGT > an.u && (fi = 0, kx.font = b2.kw.l1(0, an.u / aGT * fontSize)), a0 = 0; a0 < f0; a0++) kx.fillStyle = colors[a0], kx.fillText(e8[a0].name, fi, fj), fi += b2.kw.measureText(e8[a0].name + "  ")
	}, this.fq = function(jo, jp) {
		aGW(jo, jp)
	}, this.wL = function(jo, jp) {
		aGW(jo, jp)
	}, this.wv = function(io) {
		2 === io && aFI.qB[0].on()
	};
	var a0, ds, xq, jf, f9 = data.data,
		f0 = f9.length,
		max = 1;
	for (a0 = 0; a0 < f0; a0++) max = Math.max(max, f9[a0].aGB.length);
	for (a0 = 0; a0 < f0; a0++)
		for (; f9[a0].aGB.length < max;) f9[a0].aGB.unshift(0);
	ds = new Date, xq = 6e4 * ds.getTimezoneOffset(), jf = ds.getTime() - xq, aFz = new Date(jf), 6 === data.aGA ? function(ds, xq) {
		var aGD = ds.getUTCFullYear(),
			ds = ds.getUTCMonth() + 1;
		aG0 = ds < 12 ? new Date(Date.UTC(aGD, ds) - xq) : new Date(Date.UTC(aGD + 1, 0) - xq)
	}(ds, xq) : (xq = 6e4 * aG5[data.aGA], aG0 = data.aGA <= 4 ? new Date(jf + xq - ds.getTime() % xq) : new Date(jf + xq - (ds.getTime() + 2592e5) % xq)), jf = b2.color, colors = [p.lx, jf.lp(255, 0, 0), jf.lp(0, 200, 0), jf.lp(80, 80, 255), jf
		.lp(255, 255, 0), jf.lp(255, 0, 255), jf.lp(0, 255, 255), jf.lp(255, 140, 0), jf.lp(128, 128, 128), jf.lp(0, 255, 140)
	], aFI = new q4(L(194) + ", " + ["M1", "M5", "H1", "H4", "D1", "W1", "MN"][data.aGA] + ", " + b2.xF.xp(aFz), [new l(L(13), function() {
		i.kB.a65()
	}), new l(L(195), function() {
		i.j(14)
	})], !1)
}

function aFB() {
	var aFI, aFJ, oS;
	this.show = function() {
		aFI.show(), this.resize()
	}, this.pu = function() {
		aFI.pu()
	}, this.resize = function() {
		aFI.resize(), aFJ.resize()
	}, this.wv = function(io) {
		2 === io && aFI.qB[0].on()
	}, aFI = new q4(L(196), [new l(L(13), function() {
		i.aFG(13)
	})]), aFJ = new oQ(aFI.qA, ((oS = []).push(function() {
		var aFX = new oC,
			aFe = (aFX.oF(L(197)), aFX.oH(L(198)), new l(L(199), function() {
				bY.p8.p9(130, 0), i.kB.aGb()
			}, 0, 0, 1)),
			aFY = new pG(bY.dY.data[126], 0, function() {
				aFe.button.click()
			});
		return aFX.oO(aFY), aFY.d.placeholder = "a,b,c", aFY.d.style.marginTop = "0.5em", aFX.oO(new pD([aFe.button])), aFX
	}()), oS.push(function() {
		var aFX = new oC,
			aFe = new l(L(199), function() {
				bY.p8.p9(130, 1), i.kB.aGb()
			}, 0, 0, 1),
			aGc = new pG(bY.dY.data[129], 1, function() {
				aGc.d.focus()
			}),
			aGd = new pG(bY.dY.data[128], 1, function() {
				aFe.button.click()
			});
		return aFX.oF(L(200)), aFX.oO(aGd), aGd.d.style.marginBottom = "0.5em", aFX.oF(L(201)), aFX.oO(aGc), aFX.oO(new pD([aFe.button])), aFX
	}()), oS.push(function() {
		var aFX = new oC;
		return aFX.oF(L(202)), bY.dY.data[125].q3 = ["M1", "M5", "H1", "H4", "D1", "W1", "MN"], aFX.oL(new q0(bY.dY.data[125])), aFX
	}()), oS.push(function() {
		var aFX = new oC;
		return aFX.oF(L(203)), aFX.oO(new p6(bY.dY.data[127], L(204))), aFX
	}()), oS))
}

function aFA() {
	var aFI, aGe, a6f, aGf, a6g, a6h, colors = [0, 0, 0],
		aGg = -1;

	function a6o(a0) {
		var aGj = aGe.fj + a0 * (bR.gap + a6h);
		kx.fillStyle = "rgb(" + (0 === a0 ? 150 : 2 === a0 ? 30 : 0) + "," + (1 === a0 ? 130 : 2 === a0 ? 30 : 0) + "," + (2 === a0 ? 220 : 0) + ")", kx.fillRect(aGf, aGj, colors[a0] * a6g, a6h), kx.strokeStyle = p.lx, kx.strokeRect(aGf, aGj, a6g,
			a6h), kx.fillStyle = p.lx, kx.font = b2.kw.l1(0, .32 * a6h), b2.kw.textBaseline(kx, 1), b2.kw.textAlign(kx, 0), kx.fillText(L(0 === a0 ? 207 : 1 === a0 ? 208 : 209) + aGh(a0), aGf + bR.gap, aGj + .53 * a6h)
	}

	function aGh(a0, aGk) {
		return aGk = aGk || 256, bB.o8(Math.floor(aGk * colors[a0]), 0, aGk - 1)
	}

	function wq(jo, jp) {
		return !(jo < aGf || jp < aGe.fj || jo > aGe.fi + aGe.u || jp > aGe.fj + aGe.iH)
	}
	this.show = function() {
		var du = bY.dY.data[121].value;
		colors[0] = (du >> 12) / 63, colors[1] = (du >> 6 & 63) / 63, colors[2] = (63 & du) / 63, aFI.show(), this.resize()
	}, this.pu = function() {
		bY.p8.p9(121, (aGh(0, 64) << 12) + (aGh(1, 64) << 6) + aGh(2, 64)), aFI.pu()
	}, this.resize = function() {
		aFI.resize(), aGe.resize();
		var io = an.ob,
			qL = aFI.qF(),
			aGi = (aGe.fj = Math.max(aGe.fj, io * qL.qG + bR.gap), io * qL.qJ - 2 * bR.gap);
		aGe.iH = Math.min(aGe.iH, aGi), aGe.u = 2 * aGe.iH, aGe.fj = io * qL.qG + .5 * (io * qL.qJ - aGe.iH), aGe.fi = .5 * (an.u - aGe.u), a6f = .25 * aGe.u, aGf = aGe.fi + a6f + bR.gap, a6g = aGe.u - a6f - bR.gap, a6h = (aGe.iH - 2 * bR.gap) /
			3
	}, this.kn = function() {
		var gR, pv, i7;
		aFI.kn(), kx.lineWidth = bR.tn, gR = aGh(0), pv = aGh(1), i7 = aGh(2), kx.fillStyle = "rgb(" + gR + "," + pv + "," + i7 + ")", kx.fillRect(aGe.fi, aGe.fj, a6f, aGe.iH), kx.strokeStyle = p.lx, kx.strokeRect(aGe.fi, aGe.fj, a6f, aGe.iH), kx
			.fillStyle = gR + pv + i7 < 306 && pv < 150 ? p.lx : p.l2, b2.kw.textBaseline(kx, 1), b2.kw.textAlign(kx, 1), kx.font = b2.kw.l1(0, .1 * aGe.iH), kx.rotate(-Math.PI / 2), kx.fillText(L(206), -aGe.fj - .5 * aGe.iH, aGe.fi + .5 * a6f),
			kx.setTransform(1, 0, 0, 1, 0, 0), a6o(0), a6o(1), a6o(2)
	}, this.fq = function(jo, jp) {
		wq(jo, jp) && (aGg = bB.o8(Math.floor((jp - aGe.fj) / (a6h + .75 * bR.gap)), 0, 2), colors[aGg] = bB.o8((jo - aGf) / a6g, 0, 1), bU.dN = !0)
	}, this.wL = function(jo) {
		-1 !== aGg && (colors[aGg] = bB.o8((jo - aGf) / a6g, 0, 1), bU.dN = !0)
	}, this.wO = function(jo, jp, deltaY) {
		wq(jo, jp) && (jo = bB.o8(Math.floor((jp - aGe.fj) / (a6h + .75 * bR.gap)), 0, 2), colors[jo] = bB.o8(colors[jo] + (1 - 2 * (0 < deltaY)) / 256, 0, 1), bU.dN = !0)
	}, this.wj = function() {
		0 <= aGg && (aGg = -1, bU.dN = !0)
	}, this.wv = function(io) {
		2 === io && aFI.qB[0].on()
	}, aFI = new q4(L(205), [new l(L(13), function() {
		i.kB.a65()
	})], !1), aGe = new p1([.5, .25], [.5, .5], 1)
}

function pa(id, yS) {
	var aFI, aGl;

	function aGp() {
		aGl.pB.innerHTML += "<br>" + L(212)
	}
	this.aGm = !0, this.aGn = id, this.show = function() {
		aFI.show(), this.resize(), 15 === id ? aq.kB.a73(0, id) ? this.aGo() : aGp() : 16 === id ? aq.kB.a73(0, id) ? aq.a62.aGq(2) : aGp() : 17 === id ? aq.kB.a73(0, id) ? aq.a62.aGq(3) : aGp() : 18 === id ? (aq.kB.close(0, 3253), aq.kB.a73(0,
				id), aGp()) : 20 === id ? aq.kB.a73(0, id) ? aq.aFc.aGr(yS) : aGp() : 21 === id ? aq.kB.a73(0, id) ? aq.aGs.aGt(yS.pq, yS.pr, yS.ps) : aGp() : 22 === id ? aq.kB.a73(0, id) ? aq.aGs.aGu(yS.pq, yS.aGv, yS.aGw) : aGp() : 23 === id ?
			aq.kB.a73(0, id) ? aq.aGs.aGx(yS.aGA, yS.vS) : aGp() : 24 === id ? aq.kB.a73(0, id) ? aq.aGs.aGy(yS.aGA, yS.pr, yS.ps) : aGp() : 25 === id ? aq.kB.a73(0, id) ? aq.aFc.aFk(yS) : aGp() : 28 === id && (aq.kB.a73(0, id) ? aq.aGs.aGz(yS
				.pq, yS.aGv, yS.aGw) : aGp())
	}, this.aH0 = function() {
		15 === id ? this.aGo() : 16 === id ? aq.a62.aGq(2) : 17 === id ? aq.a62.aGq(3) : 18 === id ? i.j(8, this.aF1, new pa(16)) : 20 === id ? aq.aFc.aGr(yS) : 21 === id ? aq.aGs.aGt(yS.pq, yS.pr, yS.ps) : 22 === id ? aq.aGs.aGu(yS.pq, yS.aGv,
			yS.aGw) : 23 === id ? aq.aGs.aGx(yS.aGA, yS.vS) : 24 === id ? aq.aGs.aGy(yS.aGA, yS.pr, yS.ps) : 25 === id ? aq.aFc.aFk(yS) : 28 === id ? aq.aGs.aGz(yS.pq, yS.aGv, yS.aGw) : 1e3 === id && (this.aGn = id = 25, aq.aFc.aFk(yS))
	}, this.aH1 = function(code, bc, data) {
		!bc && code !== id || (16 === code ? i.j(7, this.aF1) : 17 === code ? (aq.kB.close(0, 3252), bY.kB.r0(0), bY.dY.data[117].q3 && 0 < bY.dY.data[117].q3.length ? (bc = bY.kB.r1(0), bY.p8.p9(105, bc.pX), bY.p8.p9(106, bc.password), i.j(8,
			this.aF1, new pa(16))) : (bY.p8.p9(105, ""), i.kB.a65())) : 21 === code ? i.j(10, this.aF1, new aH2(data)) : 23 === code ? i.j(13, 0, new aFt({
			data: data,
			aGA: yS.aGA
		})) : 25 === code && (i.kB.aFC.pX = yS.pX, i.j(15, this.aF1)))
	}, this.aGo = function() {
		b4.w(48), b4.x(24, Math.floor(bB.pow(24) * Math.random())), b4.x(24, Math.floor(bB.pow(24) * Math.random())), b7.dG(b4.a1), bY.p8.p9(110, b5.pc.pd(b5.pc.pe(8))), aq.aFc.aH3()
	}, this.pu = function() {
		aFI.pu()
	}, this.resize = function() {
		aFI.resize(), aGl.resize()
	}, this.wv = function(io) {
		2 === io && aFI.qB[0].on()
	}, aFI = new q4(L(210), [new l(L(13), function() {
		i.kB.a65()
	})]), aGl = new pA(aFI.qA, L(211))
}

function aF6() {
	var aH4, aH5, aGe, aFY, aH6;
	this.a99 = new pj, aGe = new p1([.45, .27], [.5, .5], 2 / 3), aH5 = [new l("⚔️<br>" + L(101), function() {
			aH7(0)
		}, p.mM), new l("🗡️<br>" + L(102), function() {
			aH7(1)
		}, p.mY), new l("🔑<br>" + L(213), function() {
			aH7(2)
		}, p.mn), new l("☰<br>" + L(214), function() {
			aH7(3)
		}, p.m9), new l("", function() {
			i.j(12)
		}, p.lt, !1),
		new l("FX Client settings", function() {
			WindowManager.openWindow("settings");
		}, "rgba(0, 0, 20, 0.5")
	], aFY = new pG(bY.dY.data[122]);
	for (var a0 = 0; a0 < aH5.length; a0++) aH5[a0].button.style.position = "absolute";

	function aH7(kh) {
		m.n.setState(10), ay.wk(), aR.pz() || aR.a8z(), 0 === kh ? i.kB.aH8() : 1 === kh ? i.kB.aH9() : 2 === kh ? 0 !== m.id || bY.dY.data[140].value ? i.j(8, i.pZ, new pa(16)) : i.kB.aHA(i.pZ, 16) : 3 === kh && i.j(1, i.pZ)
	}
	aFY.d.style.position = "absolute", aFY.d.style.textAlign = "center", aFY.d.placeholder = L(215), this.show = function() {
		aP.setState(0), m.n.setState(12), this.a99.show(), aH5[4].op(b2.color.xi(bY.dY.data[121].value)), this.resize(), document.body.appendChild(aFY.d);
		for (var a0 = 0; a0 < aH5.length; a0++) document.body.appendChild(aH5[a0].button);
		1 !== m.id || m.dv < 5 || (aH6 && bU.dr > aH6 + 144e5 ? m.t.setState(14) : aH6 = bU.dr)
	}, this.pu = function() {
		this.a99.pu(), document.body.removeChild(aFY.d);
		for (var a0 = 0; a0 < aH5.length; a0++) document.body.removeChild(aH5[a0].button)
	}, this.resize = function() {
		this.a99.resize(), aGe.resize();
		var gap = .5 * bR.gap,
			a6B = 10 / 99 * .84 * aGe.u,
			aHD = .16 * aGe.iH,
			a3C = .19 * aGe.u,
			fi = aGe.fi + a3C,
			a6B = aGe.fj + a6B + 3 * gap,
			u = .5 * (aGe.u - gap) - a3C,
			a3C = aGe.u - 2 * a3C - aHD - gap,
			a3C = (b2.kw.px(aFY.d, fi, a6B, a3C, aHD), b2.kw.px(aH5[4].button, fi + a3C + gap, a6B, aHD, aHD), .5 * (aGe.fj + aGe.iH - (a6B += aHD + gap) - gap));
		b2.kw.px(aH5[0].button, fi, a6B, u, a3C), b2.kw.px(aH5[1].button, fi + u + gap, a6B, u, a3C), b2.kw.px(aH5[2].button, fi, a6B + a3C + gap, u, a3C), b2.kw.px(aH5[3].button, fi + u + gap, a6B + a3C + gap, u, a3C);
		b2.kw.px(aH5[5].button, fi, a6B + a3C * 2 + gap * 2, u * 2 + gap, a3C / 3);
		for (var a0 = 0; a0 < aH5.length; a0++) aH5[a0].button.style.font = b2.kw.l1(0, b2.kw.xy(.065 * aGe.iH)), b2.kw.oi(aH5[a0].button, 5);
		aFY.d.style.font = b2.kw.l1(0, b2.kw.xy(.08 * aGe.iH)), b2.kw.oi(aFY.d, 5)
	}, this.kn = function() {
		if (aP.a7L(), aI.kn(), aD.kn(), bN.kn(), aR.pz()) {
			if (settings.displayWinCounter) {
				const size = Math.floor(aGe.u * 0.03);
				kx.font = b2.kw.l1(1, size);
				kx.fillStyle = "#ffffff";
				const text = "Win count: " + wins_counter;
				const textLength = kx.measureText(text).width;
				kx.textAlign = "left";
				kx.textBaseline = "middle";
				kx.fillText(text, kx.canvas.width - textLength - size / 2, size);
			};
			kx.imageSmoothingEnabled = !1;
			var io = aR.a7O("territorial.io"),
				lb = .84 * aGe.u / io.width;
			kx.setTransform(lb, 0, 0, lb, aGe.fi + .08 * aGe.u, aGe.fj), aH4 = aH4 || b2.xB.yQ(io, b2.xB.yW, [0, 0, 0]);
			for (var fi = -1; fi <= 1; fi += 2)
				for (var fj = -1; fj <= 1; fj += 2) kx.drawImage(aH4, fi, fj);
			kx.drawImage(io, 0, 0), kx.imageSmoothingEnabled = !0;
			var gc = aR.a7O("logo"),
				aHG = .6666 * lb * io.height / gc.height,
				ku = .5 * an.u,
				kv = aGe.fj + .5 * lb * io.height - .5 * aHG * gc.height;
			kx.setTransform(aHG, 0, 0, aHG, ku - .6 * lb * io.width, kv), kx.drawImage(gc, 0, 0), kx.setTransform(aHG, 0, 0, aHG, ku + .6 * lb * io.width - aHG * gc.width, kv), kx.drawImage(gc, 0, 0), kx.setTransform(1, 0, 0, 1, 0, 0), kx
				.imageSmoothingEnabled = !0
		}
	}
}

function aFD() {
	var aFI, aHH, aHI, q5;

	function pp(a0) {
		i.j(8, i.pZ, new pa(21, {
			pq: a0,
			pr: 0,
			ps: 10
		}))
	}
	this.show = function() {
		aFI.show(), this.resize()
	}, this.pu = function() {
		aFI.pu()
	}, this.resize = function() {
		aFI.resize(), aHH.resize()
	}, this.wv = function(io) {
		2 === io && aFI.qB[0].on()
	}, aHI = [new l(L(216), function() {
		pp(1)
	}, 0, 0, 1), new l(L(217), function() {
		pp(2)
	}, 0, 0, 1), new l(L(218), function() {
		pp(0)
	}, 0, 0, 1), new l(L(219), function() {
		pp(3)
	}, 0, 0, 1)], q5 = [new l(L(13), function() {
		i.w6()
	})], aFI = new q4(L(220), q5), aHH = new oy(aHI, aFI.qA)
}

function a6P(title, oK, aHJ) {
	var aFI, aGl;
	this.show = function() {
		aFI.show(), this.resize()
	}, this.pu = function() {
		aFI.pu()
	}, this.resize = function() {
		aFI.resize(), aGl.resize()
	}, this.wv = function(io) {
		2 === io && aFI.qB[0].on()
	}, aHJ = aHJ || [new l(L(13), function() {
		i.w6()
	}, p.mW)], aFI = new q4(title, aHJ), aGl = new pA(aFI.qA, oK), b2.kw.textAlign(aFI.qA.style, 1)
}

function aH2(data) {
	var aFI, aHK, io, pR;

	function aHL(gg) {
		var f0 = data.data.length;
		if (f0) {
			for (var pr, max = min = parseInt(data.data[0][0]), a0 = 1; a0 < f0; a0++) var aHS = parseInt(data.data[a0][0]),
				min = Math.min(aHS, min),
				max = Math.max(aHS, max);
			i.j(8, 0, new pa(21, {
				pq: data.pq,
				pr: pr = gg < 0 ? min + gg : max + 1,
				ps: pr + Math.abs(gg)
			}))
		}
	}
	this.show = function() {
			aFI.show(), this.resize()
		}, this.pu = function() {
			aFI.pu()
		}, this.resize = function() {
			aFI.resize(), aHK.resize()
		}, this.wv = function(io) {
			2 === io && aFI.qB[0].on()
		}, io = data.data.length ? 0 : 1, io = [new l(L(13), function() {
			i.w6()
		}), new l(L(221), function() {
			aHL(-10)
		}, io, 0, 1), new l(L(222), function() {
			aHL(10)
		}, io, 0, 1), new l(L(195), function() {
			i.j(11, 10, new aHM({
				pq: data.pq
			}))
		})], pR = [L(223), L(224), L(225), L(226), L(227), L(228), L(229), L(230)], aFI = new q4(pR[data.pq], io),
		function() {
			var a0, f9 = {
					pL: []
				},
				pL = f9.pL,
				aHO = data.data,
				f0 = aHO.length,
				lb = [.1, .001, .001, 1, 100, 1, .01, 1][data.pq],
				ya = [1, 3, 3, 0, 0, 0, 2, 0][data.pq],
				pR = [
					[L(231), L(232) + " ↗", L(233)],
					[L(231), L(234), L(235), L(236) + " ↗"],
					[L(231), L(232) + " ↗", L(235)],
					[L(231), L(232) + " ↗", L(235)],
					[L(237), L(238), L(239) + " ↗", L(240) + " ↗", L(89)],
					[L(237), L(238), L(241) + " ↗", L(242) + " ↗", L(235)],
					[L(237), L(238), L(243) + " ↗", L(244) + " ↗", L(245)],
					[L(237), L(238), L(241) + " ↗", L(242) + " ↗", L(235)]
				];
			if (f9.pR = pR[data.pq], f9.pV = [
					[25, 40, 35],
					[15, 25, 25, 35],
					[25, 40, 35],
					[25, 40, 35],
					[12, 16, 30, 30, 12],
					[12, 16, 30, 30, 12],
					[12, 16, 30, 30, 12],
					[12, 16, 30, 30, 12]
				][data.pq], 0 === data.pq)
				for (a0 = 0; a0 < f0; a0++) pL.push([{
					du: aHO[a0][0] + 1 + ".",
					ds: 0
				}, {
					du: aHO[a0][1],
					ds: 1,
					pX: aHO[a0][4],
					pY: aHO[a0][3]
				}, {
					du: (lb * aHO[a0][2]).toFixed(ya),
					ds: 0
				}]);
			else if (1 === data.pq)
				for (a0 = 0; a0 < f0; a0++) pL.push([{
					du: aHO[a0][0] + 1 + ".",
					ds: 0
				}, {
					du: aHO[a0][1],
					ds: 0
				}, {
					du: (lb * aHO[a0][2]).toFixed(ya),
					ds: 0
				}, {
					du: aHO[a0][3],
					ds: 1,
					pX: aHO[a0][5],
					pY: aHO[a0][4]
				}]);
			else if (2 === data.pq || 3 === data.pq)
				for (a0 = 0; a0 < f0; a0++) pL.push([{
					du: aHO[a0][0] + 1 + ".",
					ds: 0
				}, {
					du: aHO[a0][1],
					ds: 1,
					pX: aHO[a0][4],
					pY: aHO[a0][3]
				}, {
					du: (lb * aHO[a0][2]).toFixed(ya),
					ds: 0
				}]);
			else if (4 === data.pq || 5 === data.pq || 6 === data.pq || 7 === data.pq)
				for (a0 = 0; a0 < f0; a0++) {
					var aHR = aHO[a0][5];
					4 === data.pq ? "100%" === (aHR = (aHR % 64 * 100 / (aHR >> 6)).toFixed(0) + "%") && (aHR += " (Elo Deducted)") : 5 === data.pq ? 32768 <= aHR && (aHR = -(aHR - 32768)) : aHR = (lb * aHR).toFixed(ya), pL.push([{
						du: "" + aHO[a0][0],
						ds: 0
					}, {
						du: "" + aHO[a0][6],
						ds: 0
					}, {
						du: aHO[a0][7],
						ds: 1,
						pX: aHO[a0][1],
						pY: aHO[a0][2]
					}, {
						du: aHO[a0][8],
						ds: 1,
						pX: aHO[a0][3],
						pY: aHO[a0][4]
					}, {
						du: "" + aHR,
						ds: 0
					}])
				}
			aHK = new pK(aFI.qA, f9)
		}()
}

function aHM(yS) {
	var aFI, aFJ, oS;
	this.show = function() {
		aFI.show(), this.resize()
	}, this.pu = function() {
		aFI.pu()
	}, this.resize = function() {
		aFI.resize(), aFJ.resize()
	}, this.wv = function(io) {
		2 === io && aFI.qB[0].on()
	}, aFI = new q4(L(246), [new l(L(13), function() {
		i.aFG(10)
	})]), aFJ = new oQ(aFI.qA, ((oS = []).push(function() {
		var aFe, aFX = new oC,
			aGc = new pG(bY.dY.data[132], 1, function() {
				aFe.button.click()
			}),
			aGd = new pG(bY.dY.data[131], 1, function() {
				aGc.d.focus()
			});
		aFX.oF(L(200)), aFX.oO(aGd), aGd.d.style.marginBottom = "0.8em", aFX.oF(L(201)), aFX.oO(aGc);
		return aFe = new l(L(199), function() {
			pr = Math.floor(aGd.d.value), ps = Math.floor(aGc.d.value);
			var ps, pr = {
				xS: Math.min(pr, ps),
				aEc: Math.max(pr, ps)
			};
			i.j(8, i.aFH(10).aF1, new pa(21, {
				pq: yS.pq,
				pr: pr.xS,
				ps: pr.aEc
			}))
		}, 0, 0, 1), aFX.oO(new pD([aFe.button])), aFX
	}()), oS.push(function() {
		var aFe, aFX = new oC,
			aGc = new pG(bY.dY.data[134], 1, function() {
				aFe.button.click()
			}),
			aGd = new pG(bY.dY.data[133], 0, function() {
				aGc.d.focus()
			});
		return aFX.oF(1 === yS.pq ? L(247) : L(248)), aFX.oO(aGd), aGd.d.style.marginBottom = "0.8em", aFX.oF(L(249)), aFX.oO(aGc), aFe = new l(L(199), function() {
			var aGv = aGd.d.value.slice(0, 20),
				aGw = Math.abs(Math.floor(aGc.d.value));
			i.j(8, i.aFH(10).aF1, new pa(22, {
				pq: yS.pq,
				aGv: aGv,
				aGw: aGw
			}))
		}, 0, 0, 1), aFX.oO(new pD([aFe.button])), aFX
	}()), oS.push(function() {
		var aFe, aFX = new oC,
			aGc = new pG(bY.dY.data[152], 1, function() {
				aFe.button.click()
			}),
			aGd = new pG(bY.dY.data[151], 0, function() {
				aGc.d.focus()
			});
		return aFX.oF(L(250)), aFX.oO(aGd), aGd.d.style.marginBottom = "0.8em", aFX.oF(L(249)), aFX.oO(aGc), aFe = new l(L(199), function() {
			var aGv = aGd.d.value.slice(0, 5),
				aGw = Math.abs(Math.floor(aGc.d.value));
			i.j(8, i.aFH(10).aF1, new pa(28, {
				pq: yS.pq,
				aGv: aGv,
				aGw: aGw
			}))
		}, 0, 0, 1), aFX.oO(new pD([aFe.button])), aFX
	}()), oS))
}

function aF7() {
	var aFI, aFJ, oS;
	this.show = function() {
		aFI.show(), this.resize()
	}, this.pu = function() {
		aFI.pu()
	}, this.resize = function() {
		aFI.resize(), aFJ.resize()
	}, this.wv = function(io) {
		2 === io && aFI.qB[0].on()
	}, aFI = new q4(L(251), [new l(L(13), function() {
		i.j(7, i.aFH(7).aF1)
	}), new l(L(163), function() {
		bY.p8.p9(105, b6.pc.rW(aFJ.oT[0].oD[0].d.value, 5)), bY.p8.p9(106, b6.pc.rW(aFJ.oT[1].oD[0].d.value, 8)), i.j(8, i.aFH(7).aF1, new pa(18))
	})]), aFJ = new oQ(aFI.qA, ((oS = []).push(function() {
		var aFX = new oC;
		return aFX.oF(L(144)), aFX.oO(new pG({
			title: "AccountName",
			value: "",
			kh: -1
		})), aFX
	}()), oS.push(function() {
		var aFX = new oC,
			aFh = (aFX.oF(L(146)), new pG({
				title: "Password",
				value: "",
				kh: -1
			}));
		return aFh.d.type = "password", aFX.oO(aFh), aFX.oO(new pD([new l(L(147), function(d) {
			return d.innerText === L(147) ? (d.innerText = L(148), aFh.d.type = "text") : (d.innerText = L(147), aFh.d.type = "password"), !0
		}).button])), aFX
	}()), oS))
}

function aFE() {
	var aFI, aHH, aHI, q5;

	function pp(a0) {
		i.j(8, i.pZ, new pa(21, {
			pq: a0,
			pr: 0,
			ps: 10
		}))
	}
	this.show = function() {
		aFI.show(), this.resize()
	}, this.pu = function() {
		aFI.pu()
	}, this.resize = function() {
		aFI.resize(), aHH.resize()
	}, this.wv = function(io) {
		2 === io && aFI.qB[0].on()
	}, aHI = [new l(L(227), function() {
		pp(4)
	}, 0, 0, 1), new l(L(228), function() {
		pp(5)
	}, 0, 0, 1), new l(L(229), function() {
		pp(6)
	}, 0, 0, 1), new l(L(230), function() {
		pp(7)
	}, 0, 0, 1)], q5 = [new l(L(13), function() {
		i.w6()
	})], aFI = new q4(L(252), q5), aHH = new oy(aHI, aFI.qA)
}

function aEx() {
	this.dY = {}, this.pt = ["", "", ""], this.aFC = null, this.aF9 = null, this.w9 = function() {
		i.j(5, 5)
	}, this.aH9 = function() {
		i.r4(), aQ.dG()
	}, this.aH8 = function() {
		i.r4(), aO.a6z(bY.dY.data[10].value), aO.dG()
	}, this.a65 = function() {
		i.j(0 === aP.vz() ? 5 : 0)
	}, this.aGb = function() {
		if (1 === bY.dY.data[130].value) i.j(8, i.a98().aF1, new pa(24, {
			aGA: bY.dY.data[125].value,
			pr: bY.dY.data[128].value,
			ps: bY.dY.data[129].value
		}));
		else {
			for (var e8 = (e8 = bY.dY.data[126].value.split(",")).slice(0, 10), a0 = 0; a0 < e8.length; a0++) e8[a0] = e8[a0].trim().slice(0, 7).toUpperCase();
			1 === e8.length && 0 === e8[0].length && (e8 = []), i.j(8, i.a98().aF1, new pa(23, {
				aGA: bY.dY.data[125].value,
				vS: e8
			}))
		}
	}, this.aHA = function(aF1, target) {
		i.j(4, aF1, new k("Data Usage Information",
			"Do you want your username and other data to be remembered for the next session?<br>The app might not function correctly if you decline data usage.<br>Please read our privacy policy for more information: <a href='" + bA.aHX +
			"' target='_blank'>" + bA.aHX + "</a>", !1, [new l(L(13), function() {
				i.j(aF1)
			}), new l("✅ Accept", function() {
				bY.p8.p9(140, 1), 0 === target ? i.j(2, aF1) : i.j(8, aF1, new pa(target))
			})]))
	}, this.aHY = function() {
		for (var a0 = 0; a0 < 3; a0++) this.pt[a0] = b6.rP.rR(b7.nd(5));
		this.pt[1] = "[" + this.pt[1] + "]", 5 === i.pZ && i.a98().a99.p9(this.pt)
	}
}

function k(title, oK, aHZ, aHJ) {
	var aFI, aGl;
	this.show = function() {
		aFI.show(), this.resize()
	}, this.pu = function() {
		aFI.pu()
	}, this.resize = function() {
		aFI.resize(), aGl.resize()
	}, this.wv = function(io) {
		2 === io && aFI.qB[0].on()
	}, aHJ = aHJ || [new l(L(13), function() {
		i.w6()
	}, p.mW)], aFI = new q4(title, aHJ), aGl = new pA(aFI.qA, oK), aHZ && b2.kw.textAlign(aFI.qA.style, 1)
}

function aF5() {
	var aFI, qO;

	function aHa() {
		bK.da.hideCMPButton(), i.j(0);
		var oG = b1.aHg(qO.qT());
		(0 < oG.length && oG === b1.nr.aHd || b1.aHi.rh(oG)) && b1.aHh()
	}
	this.show = function(aHb) {
		this.aHc(aHb), aFI.show(), this.resize()
	}, this.aHc = function(aHb) {
		0 === a2.uf ? (aHb = aHb || qO.qT(), qO.qR(aHb)) : (a2.fm || (b1.nr.aHd = b1.aHe.uC()), qO.qR(b1.aHf(b1.nr.aHd)))
	}, this.pu = function() {
		aFI.pu()
	}, this.resize = function() {
		aFI.resize(), qO.resize()
	}, this.wv = function(io) {
		2 === io ? aFI.qB[0].on() : aHa()
	}, aFI = new q4(L(253), [new l(L(13), function() {
		i.w6()
	}), new l(L(254), function() {
		qO.qU()
	}), new l(L(255), function() {
		qO.qV()
	}), new l(L(256), function() {
		qO.clear()
	}), new l(L(257), function() {
		aHa()
	})]), qO = new qN("replayData", L(258)), aFI.qA.appendChild(qO.qP)
}

function aF4() {
	var aFI, aFJ, oS, a61, aFX;

	function aHj() {
		var dr;
		a61 !== bY.dY.data[12].value ? (az.dG(), az.a60(), dr = bU.dr, i.j(4, 1, new k(L(261), L(262), !1, [new l(L(263), function() {
			i.j(1)
		}), new l("🔄 Reload", function() {
			bU.dr < dr + 1500 || m.n.o()
		}, p.q)]))) : i.j(1)
	}
	this.show = function() {
			a61 = bY.dY.data[12].value, aFI.show(), this.resize()
		}, this.pu = function() {
			aFI.pu()
		}, this.resize = function() {
			aFI.resize(), aFJ.resize()
		}, this.wv = function(io) {
			2 === io && aFI.qB[0].on()
		}, aFI = new q4(L(259), [new l(L(13), aHj), new l(L(260), function() {
			i.r4(), bY.p8.r6(), i.j(2)
		})]), oS = [], (aFX = new oC).oF(L(264)), aFX.oH(L(265)), oS.push(aFX),
		function(oS) {
			var aFX = new oC,
				e8 = (aFX.oF(L(283)), az.data.a66());
			aFX.oL(new q0({
				q3: e8,
				value: az.data.a69(e8)
			}, function(kh) {
				return bY.p8.p9(12, e8[kh].split(":")[0]), !0
			})), oS.push(aFX)
		}(oS), (aFX = new oC).oF(L(266)), bY.dY.data[10].q3 = [L(266) + " 1", L(267) + " 1", L(266) + " 2", L(267) + " 2"], aFX.oL(new q0(bY.dY.data[10])), oS.push(aFX), (aFX = new oC).oF(L(268)), bY.dY.data[1].q3 = [L(269), L(270), L(271), L(272)],
		aFX.oL(new q0(bY.dY.data[1])), oS.push(aFX), (aFX = new oC).oF(L(273)), bY.dY.data[9].q3 = [L(270), L(274), L(275)], aFX.oL(new q0(bY.dY.data[9])), oS.push(aFX), (aFX = new oC).oF(L(276)), bY.dY.data[11].q3 = [L(277), L(2), L(278)], aFX.oL(
			new q0(bY.dY.data[11])), oS.push(aFX), (aFX = new oC).oF(L(279)), aFX.oO(new p6(bY.dY.data[2])), oS.push(aFX), (aFX = new oC).oF(L(280)), aFX.oO(new p6(bY.dY.data[7])), oS.push(aFX), (aFX = new oC).oF(L(281)), aFX.oO(new p6(bY.dY.data[
			8])), oS.push(aFX), (aFX = new oC).oF(L(282)), aFX.oO(new pG(bY.dY.data[5])), oS.push(aFX), aFJ = new oQ(aFI.qA, oS)
}

function aF3() {
	var aFI, aHH, aHI, q5;

	function aHl(id) {
		0 !== m.id || bY.dY.data[140].value ? 0 === id ? i.j(8, 1, new pa(16)) : i.j(2) : i.kB.aHA(i.pZ, 0 === id ? 16 : 0)
	}
	this.show = function() {
		m.n.setState(12), aFI.show(), this.resize(), this.hd()
	}, this.pu = function() {
		aFI.pu()
	}, this.resize = function() {
		aFI.resize(), aHH.resize()
	}, this.hd = function() {
		8 === aP.vz() && (2 <= bS.aHq ? aHI[2].oo === p.m8 && aHI[2].op(0) : aHI[2].oo !== p.m8 && aHI[2].op(p.m8), !a2.fm && aB.a0A(a2.ev) ? aHI[1].oo === p.m8 && aHI[1].op(0) : aHI[1].oo !== p.m8 && aHI[1].op(p.m8), !a2.fm && al.oB(a2.ev) ?
			aHI[0].oo === p.m8 && aHI[0].op(0) : aHI[0].oo !== p.m8 && aHI[0].op(p.m8))
	}, this.wv = function(io) {
		2 === io && aFI.qB[0].on()
	}, aHI = [new l(L(284), function() {
		aHl(0)
	}), new l(L(220), function() {
		i.j(16)
	}), new l(L(252), function() {
		i.j(17)
	}), new l(L(285), function() {
		i.kB.aGb()
	}, 0, 0, 1), new l(L(253), function() {
		i.j(3, 1, "")
	}), new l(L(286), function() {
		i.j(18)
	}), new l(L(259), function() {
		aHl(1)
	}), new l(L(287), function() {
		i.j(4, 1, new k(L(287), b2.kw.xz([L(296), L(297), "Discord", L(298), L(216), L(299), L(85), L(300), L(301), L(302)], [bA.a6M, bA.vu, bA.a6N, bA.aHr, bA.aHs, bA.vc, bA.aHt, bA.aHu, bA.aHv, bA.aHX]), !1, [new l(L(13), function() {
			i.j(1)
		}, p.mW)]))
	}), new l(L(288), function() {
		i.j(4, 1, new k(L(288), dS + "<br><a href='" + bA.aHr + "' target='_blank'>" + bA.aHr + "</a>" +
			"<br><br><b>" + "FX Client v" + fx_version + " " + fx_update + "<br><a href='https://discord.gg/dyxcwdNKwK' target='_blank'>FX Client Discord server</a>" +
			"<br><a href='https://github.com/fxclient/FXclient' target='_blank'>Github repository</a></b>", !0, [new l(L(13), function() {
				i.j(1)
			}, p.mW)]))
	}), new l(L(289), function() {
		i.j(4, 1, new k(L(289), L(303) + "<br>" + L(304), !1, [new l(L(13), function() {
			i.j(1)
		}), new l(L(305), function() {
			m.n.vl(), i.j(1)
		})]))
	}), new l(L(290), function() {
		m.n.vm(), i.j(4, 1, new k(L(306), L(307) + "<a href='" + bA.aHX + "' target='_blank'>" + bA.aHX + "</a>", !1, [new l(L(13), function() {
			i.j(1)
		}, p.mW)]))
	})], q5 = [new l(L(263), function() {
		i.kB.a65()
	})], 8 === aP.vz() && (aHI.unshift(new l(L(293), function() {
		2 <= bS.aHq && (i.r4(), bT.wy(), bU.dN = !0)
	}, 0, 1)), aHI.unshift(new l(L(294), function() {
		!a2.fm && aB.a0A(a2.ev) && (b0.g3.nJ(), i.r4(), aB.fn) && aB.wy()
	}, 0, 1)), aHI.unshift(new l(L(295), function() {
		!a2.fm && al.oB(a2.ev) && (b0.g3.nL(), i.r4(), aB.fn) && aB.wy()
	}, 0, 1))), 1 === m.id && 5 <= m.dv && aHI.push(new l(L(291), function() {
		m.n.vn()
	})), aFI = new q4(L(292), q5), aHH = new oy(aHI, aFI.qA)
}

function aFF() {
	var aFI, aFJ, oS;
	this.show = function() {
		aFI.show(), this.resize()
	}, this.pu = function() {
		aFI.pu()
	}, this.resize = function() {
		aFI.resize(), aFJ.resize()
	}, this.wv = function(io) {
		2 === io && aFI.qB[0].on()
	}, aFI = new q4(L(286), [new l(L(13), function() {
		i.w6()
	})]), aFJ = new oQ(aFI.qA, ((oS = []).push(function() {
		function aFb() {
			aI0.button.innerText = L(141), aHy.d.readOnly = !1, aHz.d.readOnly = !1, aFa.op(1), aFa.button.style.color = p.lx
		}
		var aFX = new oC,
			aHx = (aFX.oF(L(308)), new pG({
				title: bY.dY.data[105].value,
				value: bY.dY.data[105].value,
				kh: -1
			})),
			aHy = (aHx.d.readOnly = !0, aFX.oO(aHx), aFX.oF(L(309), "0.8em"), new pG(bY.dY.data[148])),
			aHy = new pG(bY.dY.data[148], 0, void 0, function(d) {
				aFZ(bY.dY.data[149].value, d.target.value)
			}),
			aHz = (aFX.oO(aHy), aFX.oF(L(245), "0.8em"), new pG(bY.dY.data[149], 1, void 0, function(d) {
				aFZ(d.target.value, bY.dY.data[148].value)
			})),
			aI0 = (aFX.oO(aHz), new l(L(141), function(d) {
				return d.innerText === L(141) ? (d.innerText = L(142), aHy.d.readOnly = !0, aHz.d.readOnly = !0, aFa.op(0), aFa.button.style.color = p.mi, bY.p8.p9(149, aHz.d.value), aFZ(bY.dY.data[149].value, bY.dY.data[148]
					.value)) : aFb(), !0
			})),
			aFa = (aFX.oO(new pD([aI0.button])), new l(L(140), function(d) {
				return aHy.d.readOnly && aq.kB.a6x(0) && (b2.kw.y4(d), aFb(), aq.aFc.aFd({
					pb: 0,
					pX: bY.dY.data[148].value,
					pY: 0,
					value: bB.o8(Math.floor(100 * bY.dY.data[149].value), 0, 4294967295)
				})), !0
			}, 1)),
			oI = (aFX.oO(new pD([aFa.button])), aFX.oH()),
			aFZ = function(du, oG) {
				du = isNaN(du) ? 0 : Number(du);
				var du = Math.max(du, (bY.dY.data[150].value + 1) / 100),
					aFg = Math.floor(100 * Math.max(1e-4 * du, bY.dY.data[150].value / 100)) / 100;
				oI.textContent = L(143, [du.toFixed(2), bY.dY.data[105].value, aFg.toFixed(2), oG, (du - aFg).toFixed(2)])
			};
		return aFZ(bY.dY.data[149].value, bY.dY.data[148].value), aFX
	}()), oS))
}

function be() {
	"function" != typeof Math.log2 && (Math.log2 = function(fi) {
		return Math.log(fi) / Math.log(2)
	}), "function" != typeof Math.log10 && (Math.log10 = function(fi) {
		return Math.log(fi) / Math.log(10)
	}), "function" != typeof Math.sign && (Math.sign = function(fi) {
		return 0 < fi ? 1 : fi < 0 ? -1 : 0
	})
}

function cO() {
	var a3P, aI2, aI3, aI4, aI1 = !1;

	function aI5() {
		aI1 = !0, a3P = -1, aI2 = new Array(4);
		for (var a0 = 3; 0 <= a0; a0--) aI2[a0] = !1;
		var aI6 = Math.floor(1 + .02 * an.min);
		aI3 = new Array(4), (aI4 = new Array(4))[1] = aI4[3] = aI3[0] = aI3[2] = 0, aI4[0] = aI3[3] = -aI6, aI3[1] = aI4[2] = aI6
	}

	function aI7() {
		if (-1 !== a3P)
			if (0 !== a2.uf && a7.lg()) {
				for (var aI8 = !1, a0 = 3; 0 <= a0; a0--) aI2[a0] && (aI8 = !0, h9 += aI3[a0], hB += aI4[a0], aW.wL(aI3[a0], aI4[a0]), aH.a38());
				aI8 ? bU.dN = !0 : ae.lX()
			} else ae.lX()
	}
	this.ws = function(kh) {
		0 !== a2.uf && a7.lg() && (aI1 || aI5(), aI2[kh] = !0, -1 === a3P) && (a3P = setInterval(aI7, 20), aI7())
	}, this.ww = function(kh) {
		if (0 !== a2.uf && (aI1 || aI5(), aI2[kh] = !1, -1 !== a3P)) {
			for (var aI8 = !1, a0 = 3; 0 <= a0; a0--) aI8 = aI8 || aI2[a0];
			aI8 || this.lX()
		}
	}, this.lX = function() {
		if (aI1 && -1 !== a3P) {
			for (var a0 = 3; 0 <= a0; a0--) aI2[a0] = !1;
			clearInterval(a3P), a3P = -1
		}
	}
}

function cP() {
	this.kB = new aI9, this.kF = new aIA, this.my = new aIB, this.a74 = new aIC, this.a62 = new aID, this.aFc = new aIE, this.nc = new aIF, this.aGs = new aIG, this.a0u = new aIH, this.aII = new aIJ, this.aIK = new aIL, this.aIM = new aIN, this.aIO =
		new aIP, this.dG = function() {
			this.kB.dG()
		}
}

function aI9() {
	var aIQ, aIS;
	this.a7W = 5, this.a7X = this.a7W - 1, this.a72 = this.a7W + this.a7X, this.a71 = [0, 1, 5, 2, 6, 3, 7, 4, 8], this.aIR = null;

	function dh(a0) {
		return aIS[a0].aI1 && aIQ[a0].dh()
	}

	function aIa(vw) {
		aIS[vw].dr = bU.dr, aIS[vw].aIU = !1
	}
	this.w2 = 0, this.w1 = 0, this.dG = function() {
		this.aIR = new Array(this.a7W);
		this.aIR[0] = "territorial.io";
		var a0, aD6 = ao.aDP(0);
		for (ao.z9(0), a0 = 1; a0 < this.a7W; a0++) this.aIR[a0] = a9.uI() + ".territorial.io";
		for (ao.z9(aD6), aIQ = new Array(this.a72), aIS = new Array(this.a72), a0 = this.a72 - 1; 0 <= a0; a0--) aIS[a0] = {
			aI1: !1,
			dr: 0,
			aIU: !1
		};
		this.a73(0, 0)
	}, this.aIV = function(a0) {
		return aIQ[a0]
	}, this.aIW = function() {
		return this.w1 < this.a7W ? this.w1 : this.w1 - this.a7X
	}, this.hd = function() {
		for (var a0 = this.a72 - 1; 0 <= a0; a0--) this.a6x(a0) && bU.dr > aIS[a0].dr + 15e3 && aq.my.aIX(a0, aIS[a0].aIU);
		!this.a6x(0) && bU.dr > aIS[0].dr + 8e3 && (aIS[0].dr = bU.dr, this.a73(0, 0))
	}, this.a73 = function(vw, aF1) {
		if (aIS[vw].aI1) {
			if (aIQ[vw].dh()) return aIQ[vw].aIZ(aF1), aIQ[vw].a6x();
			aIQ[vw].pu()
		}
		return this.aIY(vw, aF1), !1
	}, this.aIY = function(vw, aF1) {
		aIS[vw].aI1 = !0, aIa(vw), aIQ[vw] = new aIb, aIQ[vw].dG(vw, aF1)
	}, this.aIZ = function(vw, aF1) {
		dh(vw) && aIQ[vw].aIZ(aF1)
	}, this.aIc = function(vw, aF1) {
		aq.a62.aId(vw)
	}, this.a6x = function(a0) {
		return aIS[a0].aI1 && aIQ[a0].a6x()
	}, this.send = function(vw, a1) {
		aIa(vw), aIQ[vw].send(a1)
	}, this.wc = function(vw) {
		8 === aP.vz() && (aIS[vw].aIU = !0, aq.kF.jA = !0)
	}, this.close = function(vw, aIe) {
		dh(vw) && aIQ[vw].close(aIe)
	}, this.aIf = function(vw, aIe) {
		g.w7(aIe), dh(vw) && aIQ[vw].close(aIe)
	}, this.wA = function(aIe) {
		for (var a0 = this.a72 - 1; 0 <= a0; a0--) this.close(a0, aIe)
	}, this.aIg = function(vw, aIe) {
		for (var a0 = this.a72 - 1; 0 <= a0; a0--) a0 !== vw && this.close(a0, aIe)
	}, this.zI = function() {
		this.close(this.w2, 3246)
	}, this.aIh = function(vw, d) {
		aIQ[vw].pu(), g.vv(vw, d.code)
	}
}

function aIA() {
	this.jA = !1, this.hd = function() {
		bU.et() % 250 != 249 || a2.fm || (aq.a62.aIi(+(this.jA && 0 < aX.kZ[a2.ev]), it + bD.kB.np), this.jA = !1)
	}
}

function aIH() {
	this.aIk = function(vw, a1) {
		b7.dG(a1), 0 === b7.size ? aq.kB.aIf(vw, 3205) : ((0 === b7.nd(1) ? function(vw) {
			var aIo = b7.nd(6);
			0 === aIo ? function(vw) {
				if (0 === vw && 8 !== aP.vz()) {
					i.kB.aHY();
					for (var aIy = b7.nd(12), aIz = b7.nd(6), e8 = new Array(aIy), a0 = 0; a0 < aIy; a0++) e8[a0] = b7.nd(aIz);
					aI.a3W(e8)
				}
			}(vw) : 2 === aIo ? aq.aII.aIq(vw) : 3 === aIo || 4 === aIo ? am.dG() : 5 !== aIo && 6 !== aIo && 7 !== aIo && 8 !== aIo && (9 === aIo ? aq.aIK.aIr(vw) : 10 === aIo ? aq.aIM.aIs() : 11 === aIo ? aq.aIK.aIt() : 12 ===
				aIo ? aq.aIM.aIu() : 13 === aIo ? aq.aIO.aIv() : 14 === aIo ? aq.aIO.aIw() : 15 === aIo && aq.aIK.aIx())
		} : function(vw) {
			if (8 !== aP.vz() && !am.a7Y()) return;
			if (vw !== aq.kB.w2) aq.kB.aIf(vw, 3244);
			else if (0 === b7.nd(1)) bU.uo.aJ5(b7.a1);
			else {
				var a0, vw = b7.nd(2);
				if (0 === vw) {
					var nD, my = b7.nd(9);
					0 !== aX.kZ[my] && 0 !== aX.kZ[a2.ev] && (nD = b7.nd(10), aC.nC(my, a2.ev, nD), aW.o9(my, 1, nD))
				} else if (1 === vw) ! function() {
					var my = b7.nd(9);
					0 !== aX.kZ[my] && 0 !== aX.kZ[a2.ev] && aw.aCr(0, [my], !0) && aC.nV(my, 1)
				}();
				else if (2 === vw) ! function() {
					var my = b7.nd(9),
						target = b7.nd(9);
					0 !== aX.kZ[my] && 0 !== aX.kZ[target] && 0 !== aX.kZ[a2.ev] && aw.aCr(1, [my], !0) && (aW.o9(my, 3, 96), aW.o9(target, 4, 96), aC.a11(my, target))
				}();
				else if (y && !z) {
					var f0 = 540;
					for (b4.w(17287), b4.x(1, 0), b4.x(6, 10), f0 = Math.min(b0.mv.nf.length, 540), a0 = 0; a0 < f0; a0++) b4.aJB(32, b0.mv.nf[a0]);
					aq.kB.send(aq.kB.w2, b4.a1)
				}
			}
		})(vw), bU.aIn())
	}, this.a7Z = function(a1) {
		if (b7.dG(a1), b7.kh = 1, 3 === b7.nd(6)) {
			b7.kh += 20;
			for (var a8m, a8l, name, a1 = b7.nd(9), z2 = b7.nd(14), z4 = b7.nd(4), a8D = 1 === b7.nd(1), a8E = b7.nd(6), a8F = b7.nd(14), aJ4 = b7.nd(9) + 1, t7 = [], a0 = 0; a0 < aJ4; a0++) a8m = b7.nd(1), a8l = [b7.nd(6), b7.nd(6), b7.nd(6)],
				name = b6.rP.rR(b7.nd(5)), t7.push({
					name: name,
					a8l: a8l,
					a8m: a8m
				});
			aP.a7H(), bI.w(a8E, a8F), 1 === t7.length && aQ.a8c(z4), a2.z1(z2, a1, t7, z4, a8D, !1)
		} else ! function() {
			b7.kh += 20;
			for (var a8m, a8l, tB, name, a7Q = b7.nd(1), z2 = b7.nd(14), z4 = b7.nd(4), a8D = 1 === b7.nd(1), a8E = b7.nd(6), a8F = b7.nd(14), t7 = [], a0 = 0; a0 < 2; a0++) a8m = b7.nd(1), a8l = [b7.nd(6), b7.nd(6), b7.nd(6)], tB = b7.nd(
				14), name = b6.rP.rR(b7.nd(5)), t7.push({
					name: name,
					a8l: a8l,
					tB: tB,
					a8m: a8m
				});
			aP.a7H(), bI.w(a8E, a8F), a2.z1(z2, a7Q, t7, z4, a8D, !1)
		}()
	}, this.a7U = function() {
		b7.kh = 1;
		var aIo = b7.nd(6),
			aJ2 = b7.nd(10);
		return aq.kB.w1 > aq.kB.a7X && (aJ2 += aq.kB.a7X), aq.kB.w1 === aJ2 ? (aq.kB.w2 = aJ2, !1) : (aq.kB.close(aq.kB.w1, 3247), aq.kB.w2 = aJ2, am.a7P = b7.nd(10), am.a7Q = b7.nd(3 === aIo ? 9 : 1), aq.kB.a73(aJ2, 5) && aq.my.aJ3(), !0)
	}
}

function aIN() {
	this.aIs = function() {
		bY.kB.qw(), bY.p8.p9(105, b5.pc.pd(b5.pc.pe(5))), bY.p8.p9(106, b5.pc.pd(b5.pc.pe(8))), bY.p8.p9(109, b7.nd(30)), bY.p8.p9(108, bY.dY.data[109].value), bY.p8.p9(111, bY.dY.data[109].value + 1), bY.p8.p9(107, 0), bY.p8.p9(110, "")
	}, this.aIu = function() {
		var aJE, aJF, aJG, aJD;
		b7.size < b4.aJC(21) ? aq.kB.aIf(0, 3254) : (aJD = b7.nd(5), aJE = b7.nd(3), aJF = b7.nd(3), aJG = b7.nd(3), b7.aJH(189 + 16 * (aJD + aJE + aJF + aJG) + 32 + 32 + 30 + 128 + 32 + 30 + 10 + 32) ? (aJD = {
			pY: b7.nd(30),
			rA: b7.nd(16),
			rB: b7.nd(30),
			rC: b7.nd(30),
			rD: b7.nd(30),
			rE: b7.aJI(32),
			username: b6.rP.rR(aJD),
			rF: b6.rP.rR(aJE),
			rG: b6.rP.rR(aJF),
			rH: b7.aJI(32),
			rI: b7.aJI(32),
			rJ: b7.nd(30),
			rK: b7.aJI(32),
			rL: b7.aJI(32),
			rM: b7.aJI(32),
			rN: b7.aJI(32),
			aFm: b7.aJI(32),
			aFn: b7.aJI(30),
			aFf: b7.aJI(10),
			aFq: b7.aJI(32),
			aFr: b6.rP.rR(aJG)
		}, bY.p8.p9(150, aJD.aFf), 8 === i.pZ && (25 === i.a98().aGn ? (aJD.aFK = !0, i.kB.aFC = aJD, i.a98().aH1(25, !1)) : (aJD.aFK = !1, aJD.pX = bY.dY.data[105].value, i.kB.aF9 = aJD, bY.p8.r9(aJD), i.a98().aH1(16, !0)))) : aq.kB.aIf(
			0, 3267))
	}
}

function aIP() {
	this.aIv = function() {
		var a0;
		if (b7.size < b4.aJC(39)) aq.kB.aIf(0, 3259);
		else {
			var pq = b7.nd(6),
				f0 = b7.nd(10),
				gJ = b7.nd(16);
			if (b7.aJH(39 + 16 * gJ + f0 * (0 === pq ? 111 : 1 === pq ? 101 : 2 === pq || 3 === pq ? 127 : 212))) {
				var data = [];
				if (0 === pq)
					for (a0 = 0; a0 < f0; a0++) data.push([b7.nd(30), b6.rP.rR(b7.nd(5)), b7.nd(16), b7.nd(30), b7.nd(30)]);
				else if (1 === pq)
					for (a0 = 0; a0 < f0; a0++) data.push([b7.nd(16), b6.rP.rR(b7.nd(3)), b7.nd(16), b6.rP.rR(b7.nd(5)), b7.nd(31), b7.nd(30)]);
				else if (2 === pq || 3 === pq)
					for (a0 = 0; a0 < f0; a0++) data.push([b7.nd(30), b6.rP.rR(b7.nd(5)), b7.aJI(32), b7.nd(30), b7.nd(30)]);
				else
					for (a0 = 0; a0 < f0; a0++) data.push([b7.nd(20), b7.nd(30), b7.nd(30), b7.nd(30), b7.nd(30), b7.aJI(32), b7.nd(30), b6.rP.rR(b7.nd(5)), b6.rP.rR(b7.nd(5))]);
				8 === i.pZ && i.a98().aH1(21, !0, {
					pq: pq,
					data: data
				})
			} else aq.kB.aIf(0, 3260)
		}
	}, this.aIw = function() {
		if (b7.size < b4.aJC(29)) aq.kB.aIf(0, 3265);
		else {
			var aJJ = b7.nd(4),
				aJK = b7.nd(7),
				aJL = b7.nd(11);
			if (b7.aJH(29 + 16 * aJK + 16 * aJL + 11 * aJJ)) {
				for (var data = [], a0 = 0; a0 < aJJ; a0++) {
					for (var aJM = b6.rP.rR(b7.nd(3)), aJN = b7.nd(8), aGB = [], i1 = 0; i1 < aJN; i1++) aGB.push(b7.nd(16));
					data.push({
						name: "[" + aJM + "]",
						aGB: aGB
					})
				}
				8 === i.pZ && i.a98().aH1(23, !0, data)
			} else aq.kB.aIf(0, 3266)
		}
	}
}

function aIJ() {
	this.aIq = function(vw) {
		var a0, a7q, aJO, aJP, aJQ;
		if (vw !== aq.kB.w1) aq.kB.close(vw, 3239);
		else if (6 === aP.vz() && aj.dG(), 7 !== aP.vz()) aq.kB.close(vw, 3251);
		else {
			for (a7q = [0, 0, 0, 0], aJO = b7.nd(6), a0 = 0; a0 < 4; a0++) a7q[a0] = b7.nd(aJO);
			for (aJP = b7.nd(4), aJQ = [], a0 = 0; a0 < aJP; a0++) {
				aJQ.push({
					id: b7.nd(5),
					z4: b7.nd(4),
					a8D: 1 === b7.nd(1),
					sF: b7.nd(6),
					a8B: b7.nd(14),
					a8G: b7.nd(aJO),
					a8H: b7.nd(9) + 1,
					a7C: b7.nd(10)
				});
				for (var a8I = b7.nd(3), a8J = new Array(a8I), a8K = new Array(a8I), i1 = 0; i1 < a8I; i1++) a8K[i1] = b7.nd(9) + 1, a8J[i1] = b6.rP.rR(b7.nd(3));
				aJQ[a0].a8I = a8I, aJQ[a0].a8J = a8J, aJQ[a0].a8K = a8K
			}
			aj.p9(a7q, aJQ)
		}
	}
}

function aIL() {
	this.aIr = function(vw) {
		var aJ7, aJR;
		b7.aJH(70) ? (aJ7 = b7.nd(3), aJR = bX.aJS.hd(b7.nd(30), b7.nd(30)), aq.a62.aJT(vw, aJR, aJ7), 0 < aJ7 || (0 === vw && 0 === bY.dY.data[105].value.length ? aq.a62.aGq(0) : aq.aFc.aJU(vw), 4 === aq.kB.aIV(vw).aJV() ? 6 === aP.vz() && aq
			.a74.a75(vw) : 5 !== aq.kB.aIV(vw).aJV() || 8 !== aP.vz() && 10 !== aP.vz() || aq.my.aJ3())) : aq.kB.aIf(vw, 3269)
	}, this.aIt = function() {
		var id = b7.nd(6);
		0 === id ? (aI.a3S || aq.a62.aGq(1), az.a60(), 8 === i.pZ && i.a98().aH0()) : 21 === id ? 8 === i.pZ && i.a98().aH1(17) : 22 === id && (bY.p8.p9(106, bY.dY.data[110].value), bY.p8.p9(110, ""), 8 === i.pZ) && i.a98().aH1(16)
	}, this.aIx = function() {
		var f0 = b7.nd(16),
			aJW = b7.nd(16);
		if (b7.aJH(55 + 10 * f0 + 16 * aJW)) {
			for (var e8 = [], a0 = 0; a0 < f0; a0++) e8.push(b6.rP.rR(b7.nd(10)));
			az.a64(e8)
		} else aq.kB.aIf(vw, 3270)
	}
}

function aIB() {
	this.aIX = function(vw, aIU) {
		b4.w(8), b4.x(1, 0), b4.x(6, 4), b4.x(1, aIU ? 1 : 0), aq.kB.send(vw, b4.a1)
	}, this.aJ3 = function() {
		b4.w(58), b4.x(1, 0), b4.x(6, 5), b4.x(8, aq.kB.aIW()), b4.x(10, am.a7P), b4.x(9, am.a7Q), b4.x(10, dU), b4.x(14, e.dV), aq.kB.send(aq.kB.w2, b4.a1)
	}, this.mz = function(fx) {
		b4.w(27), b4.x(1, 1), b4.x(4, 0), b4.x(22, fx), aq.kB.send(aq.kB.w2, b4.a1)
	}, this.n0 = function(h8, hu) {
		b4.w(25), b4.x(1, 1), b4.x(4, 1), b4.x(10, h8), b4.x(10, hu), aq.kB.send(aq.kB.w2, b4.a1)
	}, this.n4 = function(h8, n2) {
		b4.w(24), b4.x(1, 1), b4.x(4, 2), b4.x(10, h8), b4.x(9, n2), aq.kB.send(aq.kB.w2, b4.a1)
	}, this.n5 = function(h8, fx) {
		b4.w(37), b4.x(1, 1), b4.x(4, 3), b4.x(10, h8), b4.x(22, fx), aq.kB.send(aq.kB.w2, b4.a1)
	}, this.n9 = function(n7, fx) {
		b4.w(37), b4.x(1, 1), b4.x(4, 4), b4.x(10, n7), b4.x(22, fx), aq.kB.send(aq.kB.w2, b4.a1)
	}, this.nB = function(hu) {
		b4.w(15), b4.x(1, 1), b4.x(4, 5), b4.x(10, hu), aq.kB.send(aq.kB.w2, b4.a1)
	}, this.nF = function(kh) {
		b4.w(15), b4.x(1, 1), b4.x(4, 6), b4.x(10, kh), aq.kB.send(aq.kB.w2, b4.a1)
	}, this.nI = function(nH) {
		b4.w(6), b4.x(1, 1), b4.x(4, 7), b4.x(1, nH), aq.kB.send(aq.kB.w2, b4.a1)
	}, this.nK = function() {
		b4.w(5), b4.x(1, 1), b4.x(4, 8), aq.kB.send(aq.kB.w2, b4.a1)
	}, this.nT = function(aJX, aJY) {
		b4.w(24), b4.x(1, 1), b4.x(4, 15), b4.x(9, aJY), b4.x(10, aJX), aq.kB.send(aq.kB.w2, b4.a1)
	}, this.nW = function(a0u) {
		b4.w(14), b4.x(1, 1), b4.x(4, 14), b4.x(9, a0u), aq.kB.send(aq.kB.w2, b4.a1)
	}, this.na = function(aJZ, target) {
		var a0, f0 = aJZ.length;
		for (b4.w(14 + 9 * f0), b4.x(1, 1), b4.x(4, 13), b4.x(9, target), a0 = 0; a0 < f0; a0++) b4.x(9, aJZ[a0]);
		aq.kB.send(aq.kB.w2, b4.a1)
	}
}

function aIE() {
	this.aJb = function() {
		b4.w(39), b4.x(1, 0), b4.x(6, 16), aq.a62.aJa(), aq.kB.send(0, b4.a1)
	}, this.aJU = function(vw) {
		b4.w(115), b4.x(1, 0), b4.x(6, 17), b6.pc.rd(bY.dY.data[105].value, 5), b6.pc.rd(bY.dY.data[106].value, 8), b4.x(30, bY.dY.data[109].value), aq.kB.send(vw, b4.a1)
	}, this.aH3 = function() {
		b4.w(55), b4.x(1, 0), b4.x(6, 18), b6.pc.rc(bY.dY.data[110].value), aq.kB.send(0, b4.a1)
	}, this.aGr = function(username) {
		b4.w(12 + 16 * username.length), b4.x(1, 0), b4.x(6, 20), aq.a62.aJd(username), aq.kB.send(0, b4.a1)
	}, this.aFk = function(data) {
		b4.w(73), b4.x(1, 0), b4.x(6, 25), b4.x(6, data.pb), b6.pc.rd(data.pX, 5), b4.x(30, data.pY), aq.kB.send(0, b4.a1)
	}, this.aFd = function(data) {
		b4.w(105), b4.x(1, 0), b4.x(6, 27), b4.x(6, data.pb), b6.pc.rd(data.pX, 5), b4.x(30, data.pY), b4.aJB(32, data.value), aq.kB.send(0, b4.a1)
	}
}

function aIF() {
	this.nb = function() {
		var f7, f0 = a2.is,
			uX = bH.result.uX,
			aJe = uX.length,
			vK = (b4.w(40 + 16 * f0 + aJe * (33 + 3 * (a2.jE < 7))), b4.x(1, 1), b4.x(4, 10), b4.x(10, aJe), b4.x(1, +(2 === a2.uc)), b4.x(24, bH.result.v7), aX.vK);
		for (a0 = 0; a0 < f0; a0++) b4.x(16, vK[a0]);
		var es = aX.es;
		for (a0 = 0; a0 < aJe; a0++) f7 = uX[a0], b4.x(9, f7), b4.x(24, es[f7]);
		if (a2.jE < 7)
			for (var ip = bV.ip, v0 = bV.v0, a0 = 0; a0 < aJe; a0++) b4.x(3, 7 & v0[ip[uX[a0]]]);
		aq.kB.send(aq.kB.w2, b4.a1)
	}
}

function aIG() {
	this.aGt = function(pq, pr, ps) {
		b4.w(75), b4.x(1, 0), b4.x(6, 21), b4.x(6, pq), b4.x(1, +(pr < 0)), b4.x(1, +(ps < 0)), b4.x(30, Math.abs(pr)), b4.x(30, Math.abs(ps)), aq.kB.send(0, b4.a1)
	}, this.aGu = function(pq, aGv, aGw) {
		b4.w(18 + 16 * aGv.length + 30), b4.x(1, 0), b4.x(6, 22), b4.x(6, pq), aq.a62.aJd(aGv), b4.x(30, aGw), aq.kB.send(0, b4.a1)
	}, this.aGz = function(pq, aGv, aGw) {
		b4.w(73), b4.x(1, 0), b4.x(6, 28), b4.x(6, pq), b6.pc.rd(aGv, 5), b4.x(30, aGw), aq.kB.send(0, b4.a1)
	}, this.aGx = function(aGA, vS) {
		for (var f0 = vS.length, gJ = 0, a0 = 0; a0 < f0; a0++) gJ += vS[a0].length;
		for (b4.w(21 + 3 * f0 + 16 * gJ), b4.x(1, 0), b4.x(6, 23), b4.x(3, aGA), b4.x(4, f0), b4.x(7, gJ), a0 = 0; a0 < f0; a0++) b4.x(3, vS[a0].length), b5.rP.rc(vS[a0]);
		aq.kB.send(0, b4.a1)
	}, this.aGy = function(aGA, pr, ps) {
		b4.w(52), b4.x(1, 0), b4.x(6, 24), b4.x(3, aGA), b4.x(1, +(pr < 0)), b4.x(1, +(ps < 0)), b4.x(20, Math.abs(pr)), b4.x(20, Math.abs(ps)), aq.kB.send(0, b4.a1)
	}
}

function aIC() {
	this.a75 = function(vw) {
		var username = bY.dY.data[122].value.slice(0, 20),
			username = (b4.w(22 + 16 * username.length + 18), b4.x(1, 0), b4.x(6, 1), b4.x(10, dU), aq.a62.aJd(username), b2.color.xg(bY.kB.r3()));
		b4.x(6, username[0]), b4.x(6, username[1]), b4.x(6, username[2]), aq.kB.w1 = vw, aq.kB.send(vw, b4.a1)
	}, this.a8P = function(a8C) {
		return b4.w(11), b4.x(1, 0), b4.x(6, 2), b4.x(4, a8C), aq.kB.send(aq.kB.w1, b4.a1), !0
	}
}

function aID() {
	this.aId = function(vw) {
		b4.w(39), b4.x(1, 0), b4.x(6, 13), b4.x(14, e.dV), b4.x(4, m.id), b4.x(7, m.dv), b4.x(1, +y), b4.x(1, +z), b4.x(5, (new Date).getHours() % 24), aq.kB.send(vw, b4.a1)
	}, this.aJT = function(vw, aJR, aJ7) {
		b4.w(70), b4.x(1, 0), b4.x(6, 14), b4.x(3, aJ7), b4.x(30, aJR[0]), b4.x(30, aJR[1]), aq.kB.send(vw, b4.a1)
	}, this.aGq = function(id) {
		b4.w(13), b4.x(1, 0), b4.x(6, 15), b4.x(6, id), aq.kB.send(0, b4.a1)
	}, this.a63 = function(id, oG) {
		var f0 = Math.min(oG.length, 63);
		b4.w(19 + 16 * f0), b4.x(1, 0), b4.x(6, 26), b4.x(6, id), b4.x(6, f0), b5.rP.rc(oG), aq.kB.send(0, b4.a1)
	}, this.aJf = function(aJ2, oP) {
		b4.w(7 + 26 * oP.length), b4.x(1, 0), b4.x(6, 9);
		for (var a0 = 0; a0 < oP.length; a0++) b4.x(16, oP[a0][0]), b4.x(10, oP[a0][1]);
		aq.kB.send(aJ2, b4.a1)
	}, this.aIi = function(aJg, aA2) {
		b4.w(20), b4.x(1, 0), b4.x(6, 19), b4.x(1, aJg), b4.x(12, aA2), aq.kB.send(aq.kB.w2, b4.a1)
	}, this.aJd = function(username) {
		b4.x(5, username.length), b5.rP.rc(username)
	}
}

function aIb() {
	var vw, aF1, b, aJh = ["wss://", "/s50/", "/s51/", "/s52/"];

	function aIc() {
		aq.kB.aIc(vw, aF1)
	}

	function aJm(d) {
		aq.a0u.aIk(vw, new Uint8Array(d.data))
	}

	function aJn() {}

	function aIh(d) {
		aq.kB.aIh(vw, d)
	}
	this.dG = function(kh, aJi) {
		vw = kh, aF1 = aJi;
		kh = aJh[0];
		vw < aq.kB.a7W ? kh += aq.kB.aIR[vw] + aJh[1 + dR] : kh += aq.kB.aIR[0] + "/i" + (1 + dR) + (vw - aq.kB.a7X) + "/", (b = new WebSocket(kh)).binaryType = "arraybuffer", b.onopen = aIc, b.onmessage = aJm, b.onclose = aIh, b.onerror = aJn
	}, this.aJk = function() {
		return b.readyState === b.CONNECTING
	}, this.a6x = function() {
		return b.readyState === b.OPEN
	}, this.dh = function() {
		return this.aJk() || this.a6x()
	}, this.aIZ = function(aJi) {
		aF1 = aJi
	}, this.aJV = function() {
		return aF1
	}, this.send = function(a1) {
		this.a6x() && b.send(a1)
	}, this.close = function(aIe) {
		this.dh() && (b.close(aIe), this.pu())
	}, this.pu = function() {
		b.onopen = null, b.onmessage = null, b.onclose = null, b.onerror = null
	}
}

function d3() {
	var aJo = !1,
		a1H = 0,
		u = 0,
		pg = 0,
		gap = 0,
		gO = null,
		t0 = null,
		xP = null;

	function aJq() {
		for (var a81, aJv = 0, f0 = 0, io = Math.floor(u / 2), gR = Math.floor(pg / 2), a80 = 1.5 * Math.PI, a0 = a2.yz; 0 <= a0; a0--) f0 += xP[a0], 0 === xP[a0] && aJv++;
		if (aJo = !1, t0.clearRect(0, 0, u, u), t0.fillStyle = p.lu, t0.fillRect(0, 0, u, u), t0.fillStyle = p.lx, t0.fillRect(0, 0, u, gap), t0.fillRect(0, 0, gap, u), t0.fillRect(u - gap, 0, gap, u), t0.fillRect(0, u - gap, u, gap), 0 < f0)
			if (aJv === a2.yz) {
				for (a0 = a2.yz; 0 <= a0; a0--)
					if (0 < xP[a0]) {
						! function(a0, io, gR) {
							t0.fillStyle = bV.a85[bV.v0[a0]], t0.beginPath(), t0.arc(io, io, gR, 0, 2 * Math.PI), t0.fill()
						}(a0, io, gR);
						break
					}!
				function(io) {
					var fontSize = io / 3;
					t0.font = b2.kw.l1(1, fontSize), t0.fillStyle = p.lx, t0.fillText("100%", io, io + .1 * fontSize)
				}(io)
			} else {
				for (a0 = 0; a0 <= a2.yz; a0++) 0 < xP[a0] && (! function(a0, io, gR, a80, a81) {
					t0.fillStyle = bV.a85[bV.v0[a0]], t0.beginPath(), t0.arc(io, io, gR, a80, a81), t0.lineTo(io, io), t0.fill()
				}(a0, io, gR, a80, a81 = a80 + 2 * Math.PI * xP[a0] / f0), function(io, gR, a80, a81) {
					var du = (a81 - a80) / (2 * Math.PI),
						fontSize = +gR * Math.min(du, .37);
					fontSize < 8 || (a80 = (a80 + a81) / 2, a81 = Math.floor(100 * du + .5) + "%", gR *= .525 - Math.max(.6 * (du - .7), 0), t0.font = b2.kw.l1(1, fontSize), t0.fillStyle = p.lx, t0.fillText(a81, io + Math.cos(a80) * gR, io +
						Math.cos(a80 + 1.5 * Math.PI) * gR))
				}(io, gR, a80, a81), 0 !== a0 && a83(io, gR, a80), a80 = a81);
				a83(io, gR, 1.5 * Math.PI)
			}!
		function(io, gR) {
			t0.beginPath(), t0.arc(io, io, gR, 0, 2 * Math.PI), t0.stroke()
		}(io, gR)
	}

	function a83(io, gR, a86) {
		t0.beginPath(), t0.moveTo(io, io), t0.lineTo(io + Math.cos(a86) * gR, io + Math.cos(a86 + 1.5 * Math.PI) * gR), t0.stroke()
	}
	this.dG = function() {
		if (a2.ho) {
			var a0;
			for (a1H = 0, xP = new Uint32Array(a2.yz + 1), a0 = a2.yz; 0 <= a0; a0--) xP[a0] = 0;
			for (a0 = it - 1; 0 <= a0; a0--) xP[bV.ip[iv[a0]]] += 1;
			this.resize()
		} else xP = t0 = gO = null
	}, this.a26 = function() {
		return u
	}, this.resize = function() {
		a2.ho && (u = Math.floor(m.n.tk() && !a2.lT ? .18 * an.min : .13 * an.oX), u = (u *= 1 + (.5 + .2 * m.n.tk()) * a2.lT) + u % 2, pg = Math.floor(7 * u / 8), (gO = gO || document.createElement("canvas")).width = u, gO.height = u, t0 = gO
			.getContext("2d", {
				alpha: !0
			}), gap = Math.max(1, .015 * u), t0.lineWidth = gap, t0.strokeStyle = p.lx, b2.kw.textAlign(t0, 1), b2.kw.textBaseline(t0, 1), aJq())
	}, this.vG = function() {
		return xP[this.jx()]
	}, this.vg = function() {
		return a1H = 31, this.hd(), this.jx()
	}, this.jx = function() {
		for (var aJr = 0, a0 = a2.yz; 0 < a0; a0--) xP[a0] > xP[aJr] && (aJr = a0);
		return aJr
	}, this.jw = function(aJs) {
		for (var jO = 0, iu = iv, ip = bV.ip, f0 = it, e6 = bE.e6, a0 = 0; a0 < f0; a0++) {
			var f7 = iu[a0];
			ip[f7] === aJs && (e6[jO++] = f7)
		}
		bE.dy[0] = jO
	}, this.aJt = function() {
		for (var jO = 0, a0 = a2.yz; 0 < a0; a0--) 0 < xP[a0] && jO++;
		return jO
	}, this.hd = function() {
		if (a2.ho && 32 <= ++a1H) {
			var a0;
			for (a1H = 0, a0 = a2.yz; 0 <= a0; a0--) xP[a0] = 0;
			for (a0 = it - 1; 0 <= a0; a0--) xP[bV.ip[iv[a0]]] += aX.es[iv[a0]];
			aJo = !0
		}
	}, this.kK = function() {
		a2.ho && aJo && aJq()
	}, this.kn = function() {
		a2.ho && (a2.lT ? kx.drawImage(gO, bR.gap, bR.gap) : kx.drawImage(gO, bR.gap, a27 + 2 * bR.gap))
	}
}

function cm() {
	function aK0(key) {
		var aHb;
		return "undefined" == typeof URLSearchParams || (aHb = window.location.search, "string" != typeof(aHb = new URLSearchParams(aHb).get(key))) || aHb.length < 1 ? null : aHb
	}
	this.dO = function() {
		if (0 !== m.id) return !1;
		if (! function() {
				var value = aK0("account");
				return b8.clear(), value && (i.j(8, i.pZ, new pa(1e3, {
					pb: 0,
					pX: value,
					pY: 0
				})), !0)
			}()) {
			var value = aK0("replay");
			if (!this.clear()) return !1;
			if (!value) return !1;
			i.j(3, 0, value)
		}
		return !0
	}, this.clear = function() {
		var vt = new URL(window.location.href);
		vt.search = "";
		try {
			return history.replaceState(null, "", vt.toString()), !0
		} catch (d) {
			console.log("error 352: " + d)
		}
		return !1
	}, this.aFs = function(key, value) {
		if (0 === m.id) try {
			var vt = new URL(window.location.href),
				f7 = vt.searchParams;
			f7.set(key, value), vt.search = f7.toString(), history.replaceState(null, "", vt.toString())
		} catch (d) {
			console.log("error 358: " + d)
		}
	}
}

function cQ() {
	var aK2, e8;
	this.dG = function() {
		for (var a0 = (e8 = new Uint16Array(101)).length - 1; 0 <= a0; a0--) e8[a0] = bB.eo(32768 * a0, 100);
		this.z9(0)
	}, this.value = function(f7) {
		return e8[f7]
	}, this.aDP = function() {
		return bB.eo(aK2 - 1, 2)
	}, this.z9 = function(aD6) {
		aK2 = 2 * aD6 % 32768 + 1
	}, this.random = function() {
		return aK2 = 167 * aK2 % 32768
	}, this.i4 = function(kV) {
		return bB.eo(kV * this.random(), 32768)
	}, this.ii = function(f7) {
		return 0 !== f7 && this.random() < this.value(f7)
	}, this.hR = function(i1, i7) {
		return i1 + this.i4(i7 - i1)
	}
}

function cj() {
	this.nr = new aK3, this.aHe = new aK4, this.aHi = new aK5, this.dG = function(z2, t7, z4, z5) {
		var aK6;
		a2.fm || ((aK6 = {}).z3 = a2.ev, aK6.z2 = z2, aK6.t7 = t7, aK6.z4 = z4, aK6.z5 = z5, aK6.a8E = bI.sF, aK6.a8F = bI.a8B, aQ.a8h(aK6), this.nr.dG(aK6))
	}, this.hd = function() {
		a2.fm || (this.nr.hd(), 3 !== i.pZ) || bU.et() % 15 != 5 && 2 !== a2.uf || i.a98().aHc()
	}, this.aHh = function() {
		var pv = this.nr.aK6;
		0 === a2.uf && aP.a7H(), bI.w(pv.a8E, pv.a8F), 1 === pv.t7.length && (aQ.a8c(pv.z4), aQ.a8e(pv.a8f, pv.a8g)), aq.kB.close(aq.kB.w2, 3257), aq.kB.w2 = 0, a2.z1(pv.z2, pv.z3, pv.t7, pv.z4, pv.z5, !0)
	}, this.aHg = function(oG) {
		var a0 = oG.indexOf("=");
		return 0 <= a0 ? oG.substring(a0 + 1) : oG
	}, this.aHf = function(oG) {
		return "https://territorial.io/?replay=" + oG
	}
}

function aK3() {
	this.aK8 = null, this.aK9 = null, this.aKA = null, this.aKB = null, this.aKC = null, this.aKD = null;
	var aKE = 0;
	this.aK6 = null, this.aHd = "", this.dG = function(aK6) {
		this.aK8 = [], this.aK9 = [], this.aKA = [], this.aKB = [], this.aKC = [0], this.aKD = [0], aKE = 0, this.aK6 = aK6, this.aHd = ""
	}, this.ns = function(id, e9, eB, eD) {
		a2.fm || 2 === a2.uf || (0 === this.aKC[aKE] && (this.aKD[aKE] ? (this.aKC.push(1), this.aKD.push(0), aKE++) : this.aKC[aKE] = 1), this.aK8.push(id), this.aK9.push(e9), this.aKA.push(void 0 === eB ? 0 : eB), this.aKB.push(void 0 === eD ?
			0 : eD), this.aKD[aKE]++)
	}, this.hd = function() {
		0 === this.aKC[aKE] ? this.aKD[aKE]++ : (this.aKC.push(0), this.aKD.push(0), aKE++)
	}
}

function aK5() {
	function aKK(oG, aKM) {
		aKM ? aC.a0L = "Replay Error: " + oG : i.j(4, 3, new k("⚠️ Replay Error", oG, !0))
	}
	this.rh = function(oG) {
		if (b6.pc.rZ(b6.pc.rX(b6.pc.rV(oG))), aC.a0L = "", ! function() {
				if (b7.size < 10) aKK("File Too Small");
				else if (b7.nd(9) !== dT && aKK("Incompatible Version Error", !0), b7.nd(31) !== b7.size) aKK("Size Error");
				else {
					if (function(iH) {
							var a0, f7 = b7.a1,
								f0 = b7.size,
								aA2 = 0;
							for (a0 = 7; a0 < f0; a0++) aA2 = aA2 + f7[a0] & 65535;
							return aA2 === iH
						}(b7.nd(16))) return 1;
					aKK("Hash Error")
				}
				return
			}()) return !1;
		var aK6;
		(aK6 = {}).z3 = b7.nd(9), aK6.z2 = b7.nd(14), aK6.z4 = b7.nd(4), aK6.z5 = 1 === b7.nd(1), aK6.a8E = b7.nd(6), aK6.a8F = b7.nd(14), aK6.aKN = b7.nd(10), b1.nr.aK6 = aK6,
			function() {
				var a0, a8m, a8l, name, f0 = b1.nr.aK6.aKN,
					t7 = [];
				for (a0 = 0; a0 < f0; a0++) a8m = b7.nd(1), a8l = [b7.nd(6), b7.nd(6), b7.nd(6)], name = b6.rP.rR(b7.nd(5)), t7.push({
					name: name,
					a8l: a8l,
					a8m: a8m
				});
				if (b1.nr.aK6.t7 = t7, 8 === b1.nr.aK6.z4)
					for (a0 = 0; a0 < f0; a0++) t7[a0].tB = b7.nd(14)
			}();
		var a0, f0, aKO = b1.nr.aK6;
		if (1 === aKO.t7.length)
			for (f0 = 6 < aKO.z4 ? 1 : aKO.z4 + 2, aKO.a8f = new Array(f0), aKO.a8g = new Array(f0), a0 = 0; a0 < f0; a0++) aKO.a8f[a0] = b7.nd(3), aKO.a8g[a0] = b7.nd(9) + 1;
		return !! function() {
			var ri = b7.nd(5),
				aKP = b7.nd(30),
				aKQ = b7.nd(30);
			if (aKP + aKQ > 8 * b7.size) return void aKK("Corrupted File");
			return function(f0) {
					var a0, id, aKT = new Uint8Array(f0),
						aKU = new Uint16Array(f0),
						aKV = new Uint32Array(f0),
						aKW = new Uint32Array(f0);
					for (b1.nr.aK8 = aKT, b1.nr.aK9 = aKU, b1.nr.aKA = aKV, b1.nr.aKB = aKW, a0 = 0; a0 < f0; a0++) aKT[a0] = id = b7.nd(4), aKU[a0] = b7.nd(9), 0 === id ? aKV[a0] = b7.nd(22) : 1 === id ? (aKV[a0] = b7.nd(10), aKW[a0] = b7
						.nd(10)) : 2 === id ? (aKV[a0] = b7.nd(10), aKW[a0] = b7.nd(9)) : 3 === id || 4 === id ? (aKV[a0] = b7.nd(10), aKW[a0] = b7.nd(22)) : 5 === id || 6 === id ? aKV[a0] = b7.nd(10) : 7 === id && (aKV[a0] = b7.nd(1))
				}(aKP),
				function(f0, ri) {
					var a0, aKC = new Uint8Array(f0),
						aKD = new Array(f0);
					for (aKD.fill(0), b1.nr.aKC = aKC, b1.nr.aKD = aKD, a0 = 0; a0 < f0; a0++) aKC[a0] = b7.nd(1), aKD[a0] = b7.nd(ri)
				}(aKQ, ri), 1
		}() && (b7.kh < 8 * b7.size - 13 || b7.kh > 8 * b7.size ? (aKK("Out Of Bounds Error: " + b7.kh + " " + 8 * b7.size), !1) : (b1.nr.aHd = oG, !0))
	}
}

function aK4() {
	this.uC = function() {
		var aKO, ri = function() {
				var a0, aKD = b1.nr.aKD,
					f0 = aKD.length,
					max = 0;
				for (a0 = 0; a0 < f0; a0++) max = Math.max(max, aKD[a0]);
				return rn(Math.max(max, 1))
			}(),
			aKY = function(ri) {
				return 179 + function() {
					var a0, t7 = b1.nr.aK6.t7,
						f0 = t7.length,
						aKY = 24 * f0;
					for (a0 = 0; a0 < f0; a0++) aKY += 16 * t7[a0].name.length;
					8 === b1.nr.aK6.z4 && (aKY += 14 * f0);
					return aKY
				}() + (1 === b1.nr.aK6.t7.length ? 12 * b1.nr.aK6.a8f.length : 0) + function() {
					var a0, aK8 = b1.nr.aK8,
						f0 = aK8.length,
						aKY = 13 * f0,
						aKj = [22, 20, 19, 32, 32, 10, 10, 1, 0, 0];
					for (a0 = 0; a0 < f0; a0++) aKY += aKj[aK8[a0]];
					return aKY
				}() + function(ri) {
					return b1.nr.aKD.length * (1 + ri)
				}(ri)
			}(ri);
		b4.w(aKY + (6 - aKY % 6) % 6), aKO = b1.nr.aK6, b4.x(9, dT), b4.x(31, b4.size), b4.kh += 16, b4.x(9, aKO.z3), b4.x(14, aKO.z2), b4.x(4, aKO.z4), b4.x(1, aKO.z5), b4.x(6, aKO.a8E), b4.x(14, aKO.a8F), b4.x(10, aKO.t7.length);
		var a0, t7 = b1.nr.aK6.t7,
			f0 = t7.length;
		for (a0 = 0; a0 < f0; a0++) b4.x(1, t7[a0].a8m), b4.x(18, (t7[a0].a8l[0] << 12) + (t7[a0].a8l[1] << 6) + t7[a0].a8l[2]), b4.x(5, t7[a0].name.length), b5.rP.rc(t7[a0].name);
		if (8 === b1.nr.aK6.z4)
			for (a0 = 0; a0 < f0; a0++) b4.x(14, t7[a0].tB);
		return function() {
				var a0, aKO = b1.nr.aK6;
				if (1 === aKO.t7.length)
					for (a0 = 0; a0 < aKO.a8f.length; a0++) b4.x(3, aKO.a8f[a0]), b4.x(9, aKO.a8g[a0] - 1)
			}(),
			function(ri) {
				var a0, aK8 = b1.nr.aK8,
					e9 = b1.nr.aK9,
					eB = b1.nr.aKA,
					eD = b1.nr.aKB,
					f0 = aK8.length;
				for (b4.x(5, ri), b4.x(30, f0), b4.x(30, b1.nr.aKD.length), a0 = 0; a0 < f0; a0++) b4.x(4, aK8[a0]), b4.x(9, e9[a0]), 0 === aK8[a0] ? b4.x(22, eB[a0]) : 1 === aK8[a0] ? (b4.x(10, eB[a0]), b4.x(10, eD[a0])) : 2 === aK8[a0] ? (b4.x(
					10, eB[a0]), b4.x(9, eD[a0])) : 3 === aK8[a0] || 4 === aK8[a0] ? (b4.x(10, eB[a0]), b4.x(22, eD[a0])) : 5 === aK8[a0] || 6 === aK8[a0] ? b4.x(10, eB[a0]) : 7 === aK8[a0] && b4.x(1, eB[a0])
			}(ri),
			function(ri) {
				var a0, aKC = b1.nr.aKC,
					aKD = b1.nr.aKD,
					f0 = aKC.length;
				for (a0 = 0; a0 < f0; a0++) b4.x(1, aKC[a0]), b4.x(ri, aKD[a0])
			}(ri), b4.kh !== aKY && aC.w3("Encoder Index Error: " + b4.kh + " " + aKY), b4.kh = 40, b4.x(16, function() {
				var a0, f7 = b4.a1,
					f0 = b4.size,
					aA2 = 0;
				for (a0 = 7; a0 < f0; a0++) aA2 = aA2 + f7[a0] & 65535;
				return aA2
			}()), b7.dG(b4.a1), b5.pc.pd(b5.pc.pe(bB.eo(aKY - 1, 6) + 1))
	}
}

function cW() {
	var io, bc = !1,
		aKk = !1,
		aKl = -1e4,
		aKm = -1,
		aKn = 0;

	function resize(aKr) {
		io = 0, aR.pz() && (aKp(aKr) || bc) && (bc = !1, bR.resize(), bM.a5e.resize(), aN.dG(), bN.dG(), aO.resize(), aI.resize(), aD.resize(), i.resize(), 1 <= a2.uf ? (aK.resize(!1), aJ.resize(), aL.resize(), aH.resize(), aG.resize(), aC.resize(),
			aB.resize(), b3.resize(), al.resize(), aE.resize(), aF.resize(), aA.resize(), bT.resize(), aW.resize(), aM.resize(), bW.resize(), aH.a38()) : (2 === aP.vz() && aQ.resize(), aP.a7J(), aP.a7K()), bU.dN = !0)
	}

	function aKo(du) {
		return du && 128 < du ? Math.floor(du) : 128
	}

	function aKp(aKr) {
		var u, iH, aKt, pg, a2X;
		if (!(0 < an.pJ)) return pg = aKo(document.documentElement.clientWidth), a2X = aKo(window.visualViewport && 2 !== m.id ? window.visualViewport.height : document.documentElement.clientHeight), u = pg, iH = a2X, aKt = 0 !== m.id || u < iH ?
			700 : 1200, aKt = Math.min(aKt / ((u + iH) / 2), 1), aKt = 0 === bY.dY.data[1].value ? 2 * aKt / 3 : Math.min(aKt + (bY.dY.data[1].value - 1) * (1 - aKt) / 2, 1), an.ob = (window.devicePixelRatio || 1) * aKt, hoveringTooltip
			.canvasPixelScale = an.ob, aKr && !aKk ? (aKk = !0, document.body.removeChild(wK)) : aKk && (aKk = !1, document.body.appendChild(wK)), u = Math.floor(.5 + pg * an.ob), iH = Math.floor(.5 + a2X * an.ob), u !== an.u || iH !== an.iH ? (
				an.u = u, an.iH = iH, an.min = a3z(u, iH), an.max = a0c(u, iH), an.oX = bB.eo(u + iH, 2), an.qI = u / iH, wK.width = u, wK.height = iH, wK.style.width = pg + "px", wK.style.height = a2X + "px", aKm = bU.dr + 1e3, 1) : void 0
	}
	this.u = 0, this.iH = 0, this.min = 0, this.max = 0, this.oX = 0, this.qI = 1, this.ob = 1, this.pJ = 0, this.dH = function() {
		this.u = aKo(document.documentElement.clientWidth) + 2, this.iH = aKo(document.documentElement.clientHeight) + 2
	}, this.dG = function() {
		io = 1, wK = document.getElementById("canvasA"), (kx = wK.getContext("2d", {
			alpha: makeMainMenuTransparent
		})).imageSmoothingEnabled = !1, aKp(0)
	}, this.hd = function() {
		at.hd(), 50 <= ++io && resize(0), -1 === aKm || bU.dr < aKm || (aKm = -1, 2e3 * ++aKn >= bU.dr + 8e3 ? console.log("error 3748") : m.n.setState(15))
	}, this.dQ = function(gg) {
		bc = !0, resize(gg)
	}, this.x2 = function() {
		aKl + 1e3 > bU.dr || (aKl = bU.dr, resize(0))
	}
}

function cR() {
	var player, hv, pi, rz, ks, kt, ku, kv, kh, aKv, id;

	function aL1() {
		var hu;
		if (aS.fC(pi)) hu = a2.f4;
		else {
			if ((hu = aS.fB(pi)) === player) return void aL3(!0);
			if (!gF(player, hu)) return function(hu) {
				var max = aX.es[hu] * a2.iz - aX.ew[hu];
				max <= 0 || (hv -= max = max < hv ? max : hv, player === a2.ev && (aC.nQ(max, 0, hu), bS.ey[16] += max), hu === a2.ev && (aC.a18(max, player), bS.ey[10] += max), aX.ew[hu] += max, aW.nR(hu, max))
			}(hu), void aL3(!0)
		}
		player === a2.ev && (bS.ey[13] += hv), a6.eu(player, id), aU.ez(player, aKv), aX.f1[player].push(rz), aU.hr(player, hv, hu), a4.hs(player, !0)
	}

	function aL3(aL6) {
		a6.eu(player, id), aU.ez(player, aKv), aL6 && (aX.ew[player] += hv)
	}

	function aKx() {
		aS.a9i(pi, player) && aS.a9k(pi)
	}

	function aKw(a0, aBD, a22, i3, lg) {
		if (kh = a0, id = aBD, player = a22, ks = aS.ky(i3), kt = aS.kz(i3), ku = aS.ky(lg), kv = aS.kz(lg), rz = pi = aS.sY(ks, kt), -1 !== (aKv = aU.l3(player, id))) return hv = aU.eh(player, aKv), 1;
		aKx(), a6.eu(player, id)
	}
	this.hd = function(a0, id, a22, i3, lg) {
		aKw(a0, id, a22, i3, lg) && (aKx(), function() {
			var aL7 = bB.eo(hv, 128);
			hv -= aL7 = aL7 < 1 ? 1 : aL7, player === a2.ev && (bS.ey[15] += aL7);
			if (hv <= a2.ep) return player === a2.ev && (bS.ey[15] += hv), void aL3(!1);
			return aU.fP(player, aKv, hv), 1
		}()) && (a0 = aS.sY(ks, kt), pi = Math.abs(ku - ks) >= Math.abs(kv - kt) ? a0 + eR[ks < ku ? 1 : 3] : a0 + eR[kt < kv ? 2 : 0], ks = aS.ky(pi), kt = aS.kz(pi), a6.kg(kh, pi), ! function() {
			if (aS.f2(pi)) return;
			return 1
		}() ? aL1() : aS.g6(pi) && aS.a9n(pi, player))
	}, this.kk = function(a22, i3) {
		player = a22, pi = aS.sY(aS.ky(i3), aS.kz(i3)), aKx()
	}
}

function d0() {
	this.aJS = new aL8, this.vE = new aL9
}

function aL9() {
	this.vF = function() {
		for (var f7, f0 = it, t7 = iv, vK = aX.vK, a7R = this.aAI(), a0 = 0; a0 < f0; a0++) f7 = t7[a0], aS.uY(f7) && (vK[f7] = a7R);
		var nx = aX.nx,
			hl = aX.hl,
			hm = aX.hm,
			vQ = aX.vQ,
			f0 = a2.is;
		for (a0 = 0; a0 < f0; a0++)(0 === vQ[a0] || hm[a0] < 1 || 2 * nx[a0] > 3 * (hl[a0] + hm[a0])) && (vK[a0] = 0);
		var v6 = 0;
		for (a0 = 0; a0 < f0; a0++) v6 += 0 < vK[a0];
		return v6
	}, this.aAI = function() {
		return Math.min(65535, bU.et())
	}
}

function aL8() {
	function aLD(e8, du, jf) {
		for (var a0 = 0; a0 < 256; a0++) e8[a0] = (e8[a0] + (du >> (a0 + jf) % 30 & 1)) % 256
	}
	this.hd = function(aLA, aLB) {
		var e8 = new Uint8Array(256);
		return function(e8, aLA, aLB) {
				var a0, aLF = 3 + (4 + aLA) % 32768,
					aLG = 12 + aLB % 32768,
					aLH = 17 + ((aLA & aLB) + (aLA | aLB) + aLA) % 32768;
				for (a0 = 0; a0 < 256; a0++) aLF = 1 + aLF * aLG % aLH, e8[a0] = aLF % 256
			}(e8, aLA, aLB), aLD(e8, aLA, 2), aLD(e8, aLB, 7),
			function(e8) {
				var a0, du, kh = 0;
				for (a0 = 0; a0 < 3e4; a0++) du = e8[kh], e8[kh] = (du + a0 + e8[(kh + a0) % 256]) % 256, kh = (du + a0 + kh + (du & kh)) % 256
			}(e8),
			function(e8) {
				var a0, a2X = 1,
					a8p = 1;
				for (a0 = 0; a0 < 256; a0 += 2) a2X = (1 + a2X) * (e8[a0] + 1) % 1073741824, a8p = (1 + a8p) * (e8[a0 + 1] + 1) % 1073741824;
				return [a2X, a8p]
			}(e8)
	}
}

function cT() {
	var aLI, aLJ, g6, aLK;
	this.dG = function() {
		var a0, fi, fj, a8l, aLL, u, iH, t0, gL, rx, du, f7, iL, i1, zk;
		if (function() {
				if (g6 = !0, aLK = "rgb(" + bI.rv[0] + "," + bI.rv[1] + "," + bI.rv[2] + ")", bI.aDD(bI.sF)) return 1;
				return g6 = !1, 0
			}()) aLJ = null;
		else {
			for (aLI = bB.eo(96, 4), aLL = 1 === bI.sF ? (a8l = 0, 160) : (a8l = 128, 32), aLK = "rgb(" + a8l + "," + a8l + "," + a8l + ")", aLJ = new Array(4), a0 = 3; 0 <= a0; a0--) {
				if (aLJ[a0] = document.createElement("canvas"), u = a0 % 2 == 0 ? bI.eV : aLI, iH = a0 % 2 == 0 ? aLI : bI.eW + 2 * aLI, aLJ[a0].width = u, aLJ[a0].height = iH, rx = (gL = (t0 = aLJ[a0].getContext("2d", {
						alpha: !1
					})).getImageData(0, 0, u, iH)).data, a0 % 2 == 0)
					for (fj = aLI - 1; 0 <= fj; fj--)
						for (du = aLL + Math.floor((fj + 1) * (a8l - aLL) / (aLI + 1)), fi = u - 1; 0 <= fi; fi--) rx[f7 = 4 * ((0 === a0 ? aLI - fj - 1 : fj) * u + fi)] = du, rx[f7 + 1] = du, rx[f7 + 2] = du, rx[f7 + 3] = 255;
				else {
					for (fi = aLI - 1; 0 <= fi; fi--)
						for (du = aLL + Math.floor((fi + 1) * (a8l - aLL) / (aLI + 1)), fj = iH - 1 - aLI; aLI <= fj; fj--) rx[f7 = 4 * (fj * u + (3 === a0 ? aLI - fi - 1 : fi))] = du, rx[f7 + 1] = du, rx[f7 + 2] = du, rx[f7 + 3] = 255;
					for (i1 = 1; 0 <= i1; i1--)
						for (fi = aLI - 1; 0 <= fi; fi--)
							for (fj = aLI - 1; 0 <= fj; fj--) iL = (Math.pow(fi * fi + fj * fj, .5) + 1) / (aLI + 1), du = aLL + Math.floor((1 < iL ? 1 : iL) * (a8l - aLL)), rx[f7 = 4 * ((0 === i1 ? aLI - fj - 1 : fj + i1 * (iH - aLI)) * u + (
								1 === a0 ? fi : aLI - fi - 1))] = du, rx[f7 + 1] = du, rx[f7 + 2] = du, rx[f7 + 3] = 255
				}
				t0.putImageData(gL, 0, 0)
			}
			zk = aLL, bI.rq.fillStyle = "rgb(" + zk + "," + zk + "," + zk + ")", bI.rq.fillRect(0, 0, bI.eV, 1), bI.rq.fillRect(0, bI.eW - 1, bI.eV, 1), bI.rq.fillRect(0, 0, 1, bI.eW), bI.rq.fillRect(bI.eV - 1, 0, 1, bI.eW)
		}
	}, this.sw = function() {
		var i1 = g6 ? 0 : -aLI;
		aEk(i1, i1, bI.eV - 2 * i1, bI.eW - 2 * i1, bP.aLO, bP.aLP, bP.aLQ, bP.aLR) || (kx.fillStyle = aLK, kx.fillRect(0, 0, an.u, an.iH))
	}, this.kn = function() {
		g6 || (aEj(0, -aLI, bI.eV, aLI, bP.aLO, bP.aLP, bP.aLQ, bP.aLR) && kx.drawImage(aLJ[0], bP.aLS, bP.aLT - aLI), aEj(bI.eV, -aLI, aLI, bI.eW + 2 * aLI, bP.aLO, bP.aLP, bP.aLQ, bP.aLR) && kx.drawImage(aLJ[1], bP.aLS + bI.eV, bP.aLT - aLI),
			aEj(0, bI.eW, bI.eV, aLI, bP.aLO, bP.aLP, bP.aLQ, bP.aLR) && kx.drawImage(aLJ[2], bP.aLS, bP.aLT + bI.eW), aEj(-aLI, -aLI, aLI, bI.eW + 2 * aLI, bP.aLO, bP.aLP, bP.aLQ, bP.aLR) && kx.drawImage(aLJ[3], bP.aLS - aLI, bP.aLT - aLI))
	}
}

function cp() {
	this.g7 = new aLU, this.aAG = new aLV, this.sx = new aLW, this.kB = new aLX, this.hH = new aLY, this.zk = new aLZ, this.aLa = new aLb, this.ic = new aLc, this.jX = new aLd, this.aLe = new aLf, this.dG = function() {
		this.sx.dG(), this.kB.dG(), this.hH.dG(), this.zk.dG(), this.aLe.dG()
	}, this.kn = function() {
		this.aLe.kn(), this.sx.kn()
	}
}

function aLc() {
	this.hd = function(player) {
		return 0 !== aX.fJ[player].length && bD.kB.np !== bD.kB.o1 && bD.kB.no[player] !== bD.kB.o2 && !!b2.eq.nv(player, player < a2.is ? 20 : a3.j7[a3.hv[player]], 32, 0) && !(!ab.hU.hd(player) && !ab.hW.hd(player) || ! function(y8) {
			var aLi = bE.e3[1] + bC.gS[bE.e3[2] - 1] << 2;
			if (aS.fC(aLi)) return 1;
			return aLi = aS.fB(aLi), y8 !== aLi && !!gF(y8, aLi)
		}(player)) && function(player) {
			return b2.eq.ny(player), bD.kB.o3(player), !0
		}(player)
	}
}

function aLU() {
	function aLz(a0, jo, jp) {
		var aM1, aM0;
		if (!(a0 < 0)) return aM0 = bD.kB.aLw[a0], aM1 = bC.gw(aM0), aM0 = bC.gz(aM0), a0 = 20 * (.9 + .1 * Math.log10(bD.kB.a0t[a0])), bB.aEr(bC.gv(jo), bC.gy(jp), aM1, aM0, a0)
	}

	function aLs(aLr) {
		var aM4 = 4 + .03 * (1 + 1.5 * m.n.tk()) * an.oX / hA;
		return bC.h0(aLr, bE.e3[1]) < aM4
	}
	this.g8 = function(player, aLr) {
		return !!bC.hC(aLr) && bD.kB.np !== bD.kB.o1 && bD.kB.no[player] !== bD.kB.o2 && 0 !== aX.fJ[player].length && !!bD.jX.jY(player, aLr) && !!aLs(aLr)
	}, this.n8 = function(player, n7, aLr) {
		return !!(bC.hC(aLr) && this.o4(player, n7) && bD.jX.o5(aLr) && aLs(aLr))
	}, this.o4 = function(player, id) {
		for (var aLt, pr = player << 3, ps = pr + bD.kB.no[player], aLu = bD.kB.aLu, aLv = bD.kB.aLv, a0 = pr; a0 < ps; a0++)
			if (id === aLv[aLt = aLu[a0]]) return bE.e3[3] = aLt, !0;
		return !1
	}, this.n6 = function(fx) {
		var zl = bD.zk.zl;
		return !!this.o4(a2.ev, zl) && (b0.g3.n6(zl, fx), !0)
	}, this.zm = function(jo, jp) {
		var player = a2.ev,
			f0 = bD.kB.no[player];
		if (0 === f0) return !1;
		for (var aLu = bD.kB.aLu, aLw = bD.kB.aLw, pr = player << 3, aLx = 80, aGO = -1, a0 = pr + f0 - 1; pr <= a0; a0--) {
			var aLy = aLu[a0],
				iL = bC.gq(jo, jp, aLw[aLy]);
			iL < aLx && (aLx = iL, aGO = aLy)
		}
		return !!aLz(aGO, jo, jp) && (bD.zk.zl = bD.kB.aLv[aGO], !0)
	}, this.zt = function(jo, jp) {
		var f0 = bD.kB.np;
		if (f0 < 1) return -1;
		for (var aLw = bD.kB.aLw, aLx = 80, aGO = -1, a0 = 0; a0 < f0; a0++) {
			var iL = bC.gq(jo, jp, aLw[a0]);
			iL < aLx && (aLx = iL, aGO = a0)
		}
		return aLz(aGO, jo, jp) ? aGO : -1
	}
}

function aLV() {
	this.aAH = function(player) {
		for (var aLu = bD.kB.aLu, pr = player << 3, a0 = pr + bD.kB.no[player] - 1; pr <= a0; a0--) this.aM5(aLu[a0])
	}, this.aM5 = function(aM6) {
		var kB = bD.kB,
			aM7 = kB.np - 1,
			aM8 = kB.a0s[aM6],
			aM9 = kB.aMA[aM6],
			aMB = kB.aLw[aM6];
		kB.np = aM7, kB.a0s[aM6] = kB.a0s[aM7], kB.aMC[aM6] = kB.aMC[aM7], kB.aMD[aM6] = kB.aMD[aM7], kB.aLw[aM6] = kB.aLw[aM7], kB.aME[aM6] = kB.aME[aM7], kB.a0t[aM6] = kB.a0t[aM7], kB.aMA[aM6] = kB.aMA[aM7], kB.aLv[aM6] = kB.aLv[aM7], kB.aMF[
				aM6] = kB.aMF[aM7], kB.aMG[aM6] = kB.aMG[aM7], kB.aMH[aM6] = kB.aMH[aM7], kB.aLu[kB.a0s[aM6]] = aM6,
			function(a86) {
				var player = a86 >> 3,
					kB = bD.kB,
					f0 = kB.no[player] - 1,
					aMK = (player << 3) + f0;
				kB.no[player] = f0, aMK !== a86 && (kB.aLu[a86] = kB.aLu[aMK], kB.a0s[kB.aLu[a86]] = a86)
			}(aM8), bD.hH.hH[bC.hG(kB.aLw[aM6])][kB.aMA[aM6]] = aM6, aM7 = bC.hG(aMB), aM8 = aM9, aM7 = bD.hH.hH[aM7], kB = aM7.pop(), aM8 !== aM7.length && (aM7[aM8] = kB, bD.kB.aMA[kB] = aM8)
	}
}

function aLW() {
	var aMM, tP = 8,
		aMN = new Array(2);

	function aMO(kh) {
		var gI = tP + 4,
			xb = b2.kw.rm(gI, gI),
			gP = b2.kw.getContext(xb, !0),
			gL = b2.kw.getImageData(gP, gI, gI),
			rx = gL.data;
		return aMP(rx, gI + 1, kh), aMP(rx, gI + 2, kh), aMP(rx, 2 * gI + 1, kh), aMP(rx, 2 * gI - 3, kh), aMP(rx, 2 * gI - 2, kh), aMP(rx, 3 * gI - 2, kh), aMP(rx, gI * (gI - 3) + 1, kh), aMP(rx, gI * (gI - 2) + 1, kh), aMP(rx, gI * (gI - 2) + 2,
			kh), aMP(rx, gI * (gI - 2) - 2, kh), aMP(rx, gI * (gI - 1) - 3, kh), aMP(rx, gI * (gI - 1) - 2, kh), gP.putImageData(gL, 0, 0), xb
	}

	function aMP(rx, fx, kh) {
		fx *= 4;
		rx[fx] = 255, rx[1 + fx] = 255, rx[2 + fx] = kh, rx[3 + fx] = 255
	}

	function rm(player) {
		var xb = b2.kw.rm(tP, tP);
		return function(gP, player) {
			var fi, fj, gu, fx, aMR, a87, gI = tP,
				gL = b2.kw.getImageData(gP, gI, gI),
				rx = gL.data,
				jc = (gI >> 1) - .5,
				aLK = aS.a1V(player),
				aMT = b2.og.xI(aLK, .5);
			b2.og.xK(aLK, aMT, 300) || b2.og.xM(aLK, 100);
			for (fj = 0; fj < gI; fj++)
				for (fi = 0; fi < gI; fi++) a87 = (gI - 1.5) * (gI - 1.5) / 4, aMR = (gu = (gu = fi - jc) * gu + (gu = fj - jc) * gu) <= (gI - 4.5) * (gI - 4.5) / 4 ? aMT : aLK, rx[fx = 4 * (fj * gI + fi)] = aMR[0], rx[1 + fx] = aMR[1], rx[2 +
					fx] = aMR[2], rx[3 + fx] = a87 < gu ? 0 : 255;
			gP.putImageData(gL, 0, 0)
		}(b2.kw.getContext(xb, !0), player), xb
	}
	this.dG = function() {
		aMM = new Array(a2.f4), aMN[0] = aMO(255), aMN[1] = aMO(0)
	}, this.kn = function() {
		var a0, player, aMU, aEs, hv, gt, aMW, aMY, aMZ, aLw = bD.kB.aLw,
			a0s = bD.kB.a0s,
			a0t = bD.kB.a0t,
			aMG = bD.kB.aMG,
			aMa = aMM,
			aMb = a2.ev,
			aMc = -1,
			f0 = bD.kB.np,
			aMd = an.u,
			aMe = an.iH,
			aMf = bI.eV << 4,
			yh = hA,
			fz = yh / tP,
			ks = h9 / yh,
			kt = hB / yh,
			gu = (aMd + h9) / yh - ks,
			gx = (aMe + hB) / yh - kt,
			gP = kx;
		for (bD.g7.o4(a2.ev, bD.zk.zl) && (aMc = bE.e3[3]), gP.imageSmoothingEnabled = yh < 9, b2.kw.textAlign(gP, 1), b2.kw.textBaseline(gP, 1), a0 = 0; a0 < f0; a0++) player = a0s[a0] >> 3, hv = a0t[a0], aMU = .9 + .1 * Math.log10(hv), aEs = (
				gt = aLw[a0]) % aMf / 16 - aMU, gt = aMe * (Math.floor(gt / aMf) / 16 - aMU - kt) / gx, aMW = -2 * (aMZ = yh * aMU) * (1 + (aMY = +(player === aMb)) / 8), aMY = aMY * aMZ / 4, (aMZ = aMd * (aEs - ks) / gu) < aMW || gt < aMW ||
			aMd + aMY < aMZ || aMe + aMY < gt || (aEs = 2 * aMU * fz, aMW = aMU * yh, void 0 === (aMY = aMa[player]) && (aMa[player] = aMY = rm(player)), player === aMb && (gP.setTransform(aEs, 0, 0, aEs, aMZ - 2 * aEs, gt - 2 * aEs), gP
				.drawImage(aMN[+(a0 === aMc)], 0, 0)), gP.setTransform(aEs, 0, 0, aEs, aMZ, gt), gP.drawImage(aMY, 0, 0), (aMU = Math.floor(function(hv) {
				if (hv < 1e3) return .42;
				if (hv < 1e4) return .34;
				if (hv < 1e6) return .26;
				if (hv < 1e8) return .19;
				return .15
			}(hv) * aMW)) < 6) || (gP.setTransform(1, 0, 0, 1, 0, 0), gP.fillStyle = aMG[a0] ? p.mP : p.lx, gP.font = b2.kw.l1(1, aMU), gP.fillText(b2.l4.l5(hv), aMZ + aMW, gt + aMW + .1 * aMU));
		gP.imageSmoothingEnabled = !1, gP.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function aLf() {
	var xb;
	this.dG = function() {
		xb = xb || bF.kB.aMi(20, bV.aMj[0])
	}, this.kn = function() {
		var li = hA;
		if (!(5 <= li)) {
			var aMd = an.u,
				aMe = an.iH,
				ks = h9 / li,
				kt = hB / li,
				ku = (aMd + h9) / li,
				kv = (aMe + hB) / li,
				f8 = -20 * li,
				aMk = .5 * f8,
				aMf = bI.eV << 4,
				f0 = bD.kB.np,
				aLw = bD.kB.aLw,
				aMl = xb,
				gP = kx;
			3 < li && (gP.globalAlpha = .5 * (5 - li));
			for (var a0 = 0; a0 < f0; a0++) {
				var gt = aLw[a0],
					fi = aMd * (gt % aMf / 16 - ks) / (ku - ks) + aMk,
					gt = aMe * (Math.floor(gt / aMf) / 16 - kt) / (kv - kt) + aMk;
				aMd < fi || aMe < gt || fi < f8 || gt < f8 || (gP.setTransform(li, 0, 0, li, fi, gt), gP.drawImage(aMl, 0, 0))
			}
			gP.globalAlpha = 1, gP.setTransform(li, 0, 0, li, 0, 0)
		}
	}
}

function aLb() {
	this.hd = function() {
		for (var aM0, aLa, aMF = bD.kB.aMF, aLw = bD.kB.aLw, aMD = bD.kB.aMD, a0 = bD.kB.np - 1; 0 <= a0; a0--) aM0 = aLw[a0], 0 !== (aLa = aMF[a0]) && aM0 === aMD[a0] && (! function(a0, aMo, gf) {
			var hu, player = bD.kB.a0s[a0] >> 3,
				gf = aMo + bC.gS[gf] << 2,
				a0 = bD.kB.a0t[a0];
			if (aS.fC(gf)) hu = a2.f4;
			else {
				if ((hu = aS.fB(gf)) === player) return b2.eq.nP(player, a0);
				if (!gF(player, hu)) return b0.ix.nN(player, hu, a0)
			}
			player === a2.ev && (bS.ey[13] += a0);
			aX.f1[player].push(aMo << 2), aU.hr(player, a0, hu), a4.hs(player, !0)
		}(a0, bC.hF(aM0), aLa - 1), bD.aAG.aM5(a0))
	}, this.aMp = function(player, fx, gf) {
		if (0 !== gf) {
			var aMb = a2.ev;
			if (b2.eq.fp(aMb) && gF(player, aMb) && player !== aMb && 0 !== aX.fJ[aMb].length) {
				var aLi = fx + bC.gS[--gf] << 2;
				if (aS.fC(aLi) || gF(player, aS.fB(aLi))) {
					for (var a13 = !1, a0 = 0; a0 < 4; a0++)
						if (aLi = fx + bC.gS[a0] << 2, aS.f2(aLi) && !aS.fC(aLi) && aS.fB(aLi) === aMb) {
							a13 = !0;
							break
						} a13 && (aC.a12(719, 0), aC.v4(180, L(310, [aX.l6[player]]), 719, player, p.mO, p.lu, -1, !0))
				}
			}
		}
	}
}

function aLX() {
	this.aMq = null, this.o1 = 512, this.o2 = 8, this.np = 0, this.kb = 0, this.a0s = new Uint16Array(this.o1), this.aMC = new Uint32Array(this.o1), this.aMD = new Uint32Array(this.o1), this.aLw = new Uint32Array(this.o1), this.aME = new Uint16Array(
			this.o1), this.a0t = new Uint32Array(this.o1), this.aMA = new Uint16Array(this.o1), this.aLv = new Uint16Array(this.o1), this.aMF = new Uint8Array(this.o1), this.aMG = new Uint8Array(this.o1), this.aMH = new Uint32Array(this.o1), this
		.no = new Uint8Array(a2.f4), this.aLu = new Uint16Array(this.o2 * a2.f4), this.dG = function() {
			this.kb = 0, this.np = 0, this.aMq = new Uint8Array(bI.eV + bI.eW), this.no.fill(0)
		}, this.o3 = function(player) {
			var f0 = this.np,
				aMr = bC.hE(bE.e3[0]),
				aMs = this.no[player],
				aMt = (player << 3) + aMs,
				hv = (aX.kZ[player] = 2, this.a0s[f0] = aMt, this.aMC[f0] = aMr, this.aLw[f0] = aMr, this.aMD[f0] = bC.hE(bE.e3[1]), this.aME[f0] = 0, bE.dz[0]);
			hv < 60 ? (b2.eq.er(player, 60 - hv), this.a0t[f0] = 60) : this.a0t[f0] = hv, this.aMA[f0] = bD.hH.o3(f0, bC.hG(aMr)), this.aLv[f0] = this.kb, this.aMF[f0] = bE.e3[2], this.aMG[f0] = 0, this.aMH[f0] = 0, this.kb = this.kb + 1 & 1023, this
				.aLu[aMt] = f0, this.no[player] = aMs + 1, this.np++, bD.aLa.aMp(player, bE.e3[1], bE.e3[2])
		}, this.n6 = function() {
			var aLt = bE.e3[3];
			this.aMC[aLt] = this.aLw[aLt], this.aMD[aLt] = bC.hE(bE.e3[1]), this.aME[aLt] = 0, this.aMF[aLt] = bE.e3[2], bD.aLa.aMp(this.a0s[aLt] >> 3, bE.e3[1], bE.e3[2])
		}, this.hd = function() {
			bD.aLa.hd(),
				function(vD) {
					var a0, aMy, aMz, aN0, aN1, aMr, aN5, aN6, f9, f8, aMC = vD.aMC,
						aMD = vD.aMD,
						aLw = vD.aLw,
						a0t = vD.a0t,
						aMG = vD.aMG,
						aME = vD.aME,
						aMA = vD.aMA,
						es = aX.es,
						a0s = vD.a0s,
						vD = vD.np,
						aMf = bI.eV << 4;
					for (a0 = vD - 1; 0 <= a0; a0--) aMz = aLw[a0], aMy = aMD[a0], aMz !== aMy && (aMr = aMC[a0], aN5 = aMy % aMf - (aN1 = aMr % aMf), aN6 = ~~((aMy + .5) / aMf) - (aMr = ~~((aMr + .5) / aMf)), f9 = ~~Math.sqrt(aN5 * aN5 + aN6 * aN6 +
						.5), f8 = 15e4 + 25e3 * bB.log10(a0t[a0]), f8 += 5e4 * !es[a0s[a0] >> 3], aMG[a0] && (f8 = bB.eo(f8, 5)), 65535 <= (f8 = aME[a0] + Math.max(~~((f8 + .5) / f9), 1)) ? aLw[a0] = aN0 = aMy : (aME[a0] = f8, aLw[a0] = aN0 =
						aN1 + bB.eo(f8 * aN5, 65536) + aMf * (aMr + bB.eo(f8 * aN6, 65536))), aMA[a0] = bD.hH.aN8(aMA[a0], aMz, aN0))
				}(this),
				function(vD) {
					if (bU.et() % 2 == 1) {
						var a0, jf, jc, i7, io, aN9, tj, aNA, pi, ks, kt, aMr, aNB, gX, aND, s5, f0 = vD.np,
							aLw = vD.aLw,
							a0s = vD.a0s,
							a0t = vD.a0t,
							aMH = vD.aMH,
							aMG = vD.aMG,
							hH = bD.hH.hH,
							aNF = hH.length,
							aNG = bD.hH.aNG,
							aMf = bI.eV << 4,
							aNH = a2.ho,
							aJs = bV.ip,
							f8 = (f0 - 1) * (bB.eo(bU.et(), 2) % 2);
						for (a0 = 0; a0 < f0; a0++)
							for (jf = Math.abs(a0 - f8), aMr = aLw[jf], jc = bC.hG(aMr), pi = a0s[jf] >> 3, ks = aMr % aMf, kt = ~~((aMr + .5) / aMf), aND = a0t[jf], i7 = 0; i7 < 9; i7++)
								if (!((aN9 = jc + aNG[i7]) < 0 || aNF <= aN9))
									for (aNA = hH[aN9], tj = aNA.length, io = 0; io < tj; io++) aNB = aNA[io], s5 = a0s[aNB] >> 3, pi == s5 || aNH && aJs[pi] === aJs[s5] || (s5 = aLw[aNB], (gX = ks - s5 % aMf) * gX + (gX = kt - ~~((s5 + .5) / aMf)) *
										gX < 14400 && (s5 = a0t[aNB], gX = s5 < aND ? bB.eo(s5 + bB.eo(aND - s5, 10), 10) : bB.eo(aND, 10), gX = Math.max(1, gX), a0t[aNB] = Math.max(s5 - gX, 0), aMG[aNB] = 4, aMH[aNB] = Math.min(aMH[aNB] + gX,
											4294967295)))
					}
				}(this),
				function(vD) {
					if (bU.et() % 5 == 3) {
						var a0, hv, a0t = vD.a0t,
							es = aX.es,
							a0s = vD.a0s,
							aMH = vD.aMH,
							aMG = vD.aMG,
							f0 = vD.np;
						for (a0 = 0; a0 < f0; a0++) hv = a0t[a0], es[a0s[a0] >> 3] ? a0t[a0] = Math.max(hv - Math.max(1, hv >> 7), 0) : (a0t[a0] = Math.max(hv - Math.max(1, hv >> 11), 0), aMG[a0] || (hv = aMH[a0]) && (hv = Math.max(hv >> 3, 1), a0t[
							a0] = Math.min(a0t[a0] + (hv << 1), 4294967295), aMH[a0] -= hv))
					}
				}(this);
			var a0, vD = this,
				a0t = vD.a0t,
				aMG = vD.aMG;
			for (a0 = vD.np - 1; 0 <= a0; a0--) aMG[a0] = aMG[a0] >> 1, 0 === a0t[a0] && bD.aAG.aM5(a0)
		}
}

function aLY() {
	this.aNI = 32, this.fi = 0, this.fj = 0, this.hI = 0, this.aNJ = 0, this.aNK = 4, this.hH = null, this.aNG = new Int16Array(9), this.dG = function() {
		this.hI = 1 + bB.eo(bI.eV - 1, this.aNI), this.aNJ = 1 + bB.eo(bI.eW - 1, this.aNI), this.hH = new Array(this.hI * this.aNJ), b2.og.xH(this.hH);
		var fi, fj, aNG = this.aNG,
			u = this.hI;
		for (fi = -1; fi <= 1; fi++)
			for (fj = -1; fj <= 1; fj++) aNG[3 * (1 + fj) + 1 + fi] = fj * u + fi
	}, this.o3 = function(aNM, a0) {
		return this.hH[a0].push(aNM), this.hH[a0].length - 1
	}, this.aN8 = function(aNN, aMr, aMy) {
		var aNO, aNP, aMr = bC.hG(aMr),
			aMy = bC.hG(aMy);
		return aMr === aMy ? aNN : (aNO = this.hH[aMr].pop(), this.hH[aMr].length === aNN ? this.o3(aNO, aMy) : (aNP = this.hH[aMr][aNN], this.hH[aMr][aNN] = aNO, bD.kB.aMA[aNO] = aNN, this.o3(aNP, aMy)))
	}
}

function aLd() {
	function w5(aMy, aNQ) {
		if (function(aMy, aLr) {
				var gW = bC.hF(aMy),
					aNT = Math.abs(bC.gY(aLr) - bC.gY(gW)),
					gW = Math.abs(bC.ga(aLr) - bC.ga(gW));
				return 0 !== Math.max(aNT, gW) && (function(aMr, aMy, aNT, aNU) {
					var aNW = bC.gw(aMr),
						aMr = bC.gz(aMr),
						aNY = bC.gw(aMy),
						aMy = bC.gz(aMy),
						aNY = aNY - aNW,
						aMy = aMy - aMr,
						aNc = Math.abs(aNY),
						aNd = Math.abs(aMy),
						aNY = 0 < aNY ? 1 : 3,
						aMy = 0 < aMy ? 2 : 0;
					aNd < aNc ? aNg(aNW, aMr, aNW + aNc, aMr + aNd, aNY, aMy, aNT) : aNg(aMr, aNW, aMr + aNd, aNW + aNc, aMy, aNY, aNU)
				}(aMy, bC.hE(aLr), aNT, gW), !0)
			}(aMy, aNQ)) {
			if (0 === bE.dx[0]) return !!aS.g6(aNQ << 2);
			if (function(aLr) {
					if (aS.g6(aLr << 2)) return 1;
					return function(aLr) {
						var a0, gf, aMq = bD.kB.aMq,
							aNk = bC,
							f0 = bE.dx[0],
							aNl = 4 * aLr;
						for (a0 = f0 - 1; 0 <= a0; a0--)
							if (gf = aMq[a0], aNl = aNk.hK(aNl, gf + 2 & 3), aS.g6(aNl)) return bE.dx[0] = a0, bE.e3[1] = aNl >> 2, bE.e3[2] = 1 + gf, 1;
						return
					}(aLr)
				}(aNQ)) {
				var a0, aNQ = bC.hF(aMy),
					rx = a5m,
					aMq = bD.kB.aMq,
					f0 = bE.dx[0] - 1,
					aNl = 4 * aNQ,
					gT = bC.gT;
				for (a0 = 0; a0 < f0; a0++)
					if (aNl += gT[aMq[a0]], 0 !== rx[aNl + 3] || 2 !== rx[aNl + 2]) return !!void 0;
				return !!1
			}
		}
		return !1
	}

	function aNg(aNW, aNX, aNY, aNZ, aNe, aNf, aNT) {
		for (var fj, aMq = bD.kB.aMq, f8 = 0, aNh = 0, iH = aNZ - aNX, u = aNY - aNW, aNi = aNW % 16, a0 = 1; a0 <= aNT; a0++) aMq[f8++] = aNe, aMq[f8] = aNf, f8 += (fj = (iH * (aNi + (a0 << 4)) + .5) / u >> 4) - aNh, aNh = fj;
		bE.e7(bE.dx, f8)
	}
	this.jY = function(player, aNQ) {
		var gf, gW, gV = bC.gh(player, aNQ);
		return gV !== aNQ && (gf = bC.gU(gV, aNQ), gW = bC.hJ(gV, gf), !(!aS.g6(gW << 2) && (gf = bC.ge(gV, aNQ, gf), gW = bC.hJ(gV, gf), aS.s6(gW << 2) || !aS.g6(gW << 2)) || (bE.e3[0] = gW, bE.e3[1] = aNQ, bE.e3[2] = 0, !w5(bC.hE(gW), aNQ)) ||
			0 !== bE.e3[2] && bC.gp(player, bE.e3[1] + bC.gS[bE.e3[2] - 1] << 2)))
	}, this.o5 = function(aNQ) {
		var aMr = bD.kB.aLw[bE.e3[3]];
		return bE.e3[1] = aNQ, bE.e3[2] = 0, w5(aMr, aNQ)
	}
}

function aLZ() {
	var tP = 32,
		tO = new Array(2);

	function rm(io) {
		var fi, fj, fx, gx, gu, gI = tP,
			xb = b2.kw.rm(gI, gI),
			gP = b2.kw.getContext(xb, !0),
			gL = b2.kw.getImageData(gP, gI, gI),
			rx = gL.data,
			jc = (gI >> 1) - .5,
			jd = Math.sqrt(jc * jc);
		for (rx.fill(255), fj = 0; fj < gI; fj++)
			for (fi = 0; fi < gI; fi++) gu = fi - jc, gx = fj - jc, fx = 4 * (fj * gI + fi), gu = 714 * (jd - Math.sqrt(gu * gu + gx * gx)) / jd, rx[2 + fx] = io, rx[3 + fx] = 255 < gu ? 0 : gu;
		return gP.putImageData(gL, 0, 0), xb
	}
	this.zl = -1, this.dG = function() {
		this.zl = -1, tO[0] || (tO[0] = rm(255), tO[1] = rm(0))
	}, this.aNn = function(gP, fz, fi, fj, gR, a0) {
		b2.eq.fp(a2.ev) && (gP.setTransform(fz *= 4 / 3 * .625, 0, 0, fz, fi - (gR *= 4 / 3), fj - gR), gP.drawImage(tO[+(bD.kB.aLv[a0] === this.zl)], 0, 0))
	}
}

function cG() {
	this.a2K = function() {
		var aNq;
		return !(it < 3 || aX.es[jz[0]] >= a2.iY >> 1) && (a2.ho ? (aNq = aV.aBU(), !(2 * aV.aBV(bW.jx()) >= aNq)) : function() {
			var aNq = aV.aBU();
			if (2 * aX.ew[jz[0]] >= aNq) return !1;
			return !0
		}())
	}
}

function d8() {
	this.size = 501, this.va = new Uint32Array(this.size), this.yB = new Uint32Array(this.size), this.a5A = new Uint16Array(this.size), this.aHq = 0, this.aNs = 1, this.io = 0, this.max = [0, 0, 0], this.ey = 0, this.aNt = null, this.dH =
function() {
		this.aNt = [L(311), L(312), L(313), L(314), L(315), L(316), L(317), L(318), L(319), L(320), L(321), L(322), L(323), L(324), L(325), L(326), L(327), L(328)]
	}, this.dG = function() {
		this.aHq = 0, this.aNs = 1, this.io = 0, this.aNu(), this.aNv()
	}, this.nz = function(player, h8) {
		player === a2.ev && (this.ey[0] += h8, this.ey[1]++, this.ey[12] += bE.dz[1], this.ey[13] += bE.dz[0])
	}, this.nQ = function(player, n2) {
		donationsTracker.logDonation(player, n2, bE.dz[0]);
		player === a2.ev && (aC.nQ(bE.dz[0], bE.dz[1], n2), this.ey[12] += bE.dz[1], this.ey[16] += bE.dz[0]), n2 === a2.ev && (aC.a18(bE.dz[0], player), this.ey[10] += bE.dz[0])
	}, this.hd = function() {
		0 < this.io-- || this.aNw()
	}, this.aNw = function() {
		0 !== aX.kZ[a2.ev] && (this.va[this.aHq] = aX.es[a2.ev], this.yB[this.aHq] = aX.ew[a2.ev], this.a5A[this.aHq] = aV.a5B(a2.ev), this.aNx(this.aHq), this.aHq++, this.aHq === this.size && this.aNy(), this.io = this.aNs - 1, bT.kK())
	}, this.aNy = function() {
		this.aNu(), this.aNx(0), this.aHq = 1 + bB.eo(this.size, 2);
		for (var a0 = 1; a0 < this.aHq; a0++) this.va[a0] = this.va[2 * a0], this.yB[a0] = this.yB[2 * a0], this.a5A[a0] = this.a5A[2 * a0], this.aNx(a0);
		this.aNs *= 2
	}, this.aNu = function() {
		this.max[0] = this.max[1] = this.max[2] = 0
	}, this.aNv = function() {
		this.ey = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	}, this.aNx = function(a0) {
		this.max[0] = this.va[a0] > this.max[0] ? this.va[a0] : this.max[0], this.max[1] = this.yB[a0] > this.max[1] ? this.yB[a0] : this.max[1], this.max[2] = this.a5A[a0] > this.max[2] ? this.a5A[a0] : this.max[2]
	}
}

function d9() {
	this.u = 0, this.iH = 0, this.pg = 0, this.ph = 0, this.aNz = 0, this.aO0 = 0, this.a2X = 0, this.a8p = 0, this.a8a = 0, this.aO1 = 0, this.aO2 = 0, this.aO3 = 0, this.a1w = 0, this.kh = 0, this.a4r = null, this.tK = !1, this.aO4 = -1, this
		.aO5 = !1, this.aO6 = [0, 0], this.dH = function() {
			this.a4r = [L(329), L(330), L(90), L(331)]
		}, this.dG = function() {
			this.tK = !1, this.aO4 = -1, this.aO5 = !1, this.resize()
		}, this.resize = function() {
			this.u = an.u < 1.369 * an.iH ? an.u : 1.369 * an.iH;
			var f9 = m.n.tk() && an.u < an.iH ? 1 : m.n.tk() ? .8 : an.u < an.iH ? .65 : .59;
			this.u = Math.floor(f9 * this.u), this.u -= m.n.tk() && an.u < an.iH ? 2 * bR.gap + 2 : 0, this.iH = Math.floor(this.u / 1.369), this.a1w = Math.floor(this.iH / 150), this.a1w = Math.max(this.a1w, 1.5), this.pg = Math.floor(1 + .02 * this
				.u), this.ph = Math.floor(1 + .04 * this.u), this.a2X = this.ph, this.a8p = Math.floor(1 + .075 * this.u), this.aO1 = Math.floor(1 + .1125 * this.u), this.aO2 = Math.floor(this.u * (m.n.tk() ? .03 : .029)), this.aO2 = Math.max(
				this.aO2, 4), this.aO3 = Math.floor(.035 * this.u), this.aO3 = Math.max(this.aO3, 4), this.a8a = this.iH - 2 * this.a2X - this.a8p - this.aO1, this.tK && this.aO7()
		}, this.fq = function(jo, jp) {
			var sQ, sP;
			return !!this.tK && (sP = jo, sQ = jp, jo -= bB.eo(an.u - this.u, 2), jp -= bB.eo(an.iH - this.iH, 2), jo < 0 || jp < 0 || jo >= this.u || jp >= this.iH || jo >= this.u - this.aO1 && jp < this.aO1 ? 1 < aB.fq(sP, sQ) || this.pu() : jp <
				this.aO1 || (jp < this.iH - this.a8p ? (this.aO5 = !0, this.aO4 = (jo - 2 * this.pg - this.aNz) / this.aO0, 3 !== this.kh && (bU.dN = !0)) : (sP = (sP = Math.floor(jo / (this.u / this.a4r.length))) < 0 ? 0 : sP >= this.a4r
					.length ? this.a4r.length - 1 : sP) !== this.kh && (this.kh = sP, this.aO7(), bU.dN = !0)), !0)
		}, this.wu = function() {
			var aO8 = Math.floor((this.aO6[0] + h9) / hA),
				aO9 = Math.floor((this.aO6[1] + hB) / hA);
			aO8 < 1 || aO9 < 1 || aO8 >= bI.eV - 1 || aO9 >= bI.eW - 1 || console.log(aO8 + " " + aO9)
		}, this.wL = function(jo, jp) {
			return this.aO6[0] = jo, this.aO6[1] = jp, !(!this.tK || !this.aO5 || (jo -= bB.eo(an.u - this.u, 2), jp = this.aO4, this.aO4 = (jo - 2 * this.pg - this.aNz) / this.aO0, (0 <= this.aO4 && this.aO4 <= 1 || 0 <= jp && jp <= 1) && (bU.dN = !
				0), 0))
		}, this.wl = function() {
			this.aO5 && (this.aO5 = !1)
		}, this.wy = function() {
			this.tK ? this.pu() : this.show()
		}, this.show = function() {
			bS.aHq < 2 || (this.tK = !0, this.aO7())
		}, this.pu = function() {
			this.tK = !1, this.aO4 = -1, bU.dN = !0
		}, this.aO7 = function() {
			this.kh < 2 ? this.aNz = aF.measureText(b2.l4.l5(bS.max[this.kh]), b2.kw.l1(0, this.aO2)) : 2 === this.kh && (this.aNz = aF.measureText(b2.l4.ye(6, 2), b2.kw.l1(0, this.aO2))), this.aO0 = this.u - 2 * this.pg - this.aNz - this.ph
		}, this.kK = function() {
			this.tK && this.aO7()
		}, this.kn = function() {
			this.tK && this.a2o()
		}, this.a2o = function() {
			var fi = bB.eo(an.u - this.u, 2),
				fj = bB.eo(an.iH - this.iH, 2);
			kx.setTransform(1, 0, 0, 1, fi, fj), kx.fillStyle = p.lu, kx.fillRect(0, this.aO1, this.u, this.iH - this.aO1), this.aOA(), this.aHF(), kx.strokeRect(0, 0, this.u, this.iH), b2.kw.textAlign(kx, 2), kx.font = b2.kw.l1(0, this.aO2), 0 ===
				this.kh ? this.aOB(bS.va, fi, fj) : 1 === this.kh ? this.aOB(bS.yB, fi, fj) : 2 === this.kh ? this.aOC(fi, fj) : 3 === this.kh && (this.aOD(fi, fj), this.aOE(fi, fj)), aB.a0B(Math.floor(fi + this.u - .725 * this.aO1), Math.floor(fj +
					.275 * this.aO1), Math.floor(.45 * this.aO1)), kx.setTransform(1, 0, 0, 1, 0, 0)
		}, this.aOA = function() {
			var a0, ds;
			for (kx.lineWidth = this.a1w, b2.kw.textBaseline(kx, 1), b2.kw.textAlign(kx, 1), kx.strokeStyle = p.lx, kx.font = b2.kw.l1(1, this.aO3), ds = this.u / this.a4r.length, kx.fillStyle = p.mG, kx.fillRect(this.kh * ds, this.iH - this.a8p, ds,
					this.a8p), kx.fillStyle = p.lx, kx.fillRect(0, this.iH - this.a8p - .5 * this.a1w, this.u, this.a1w), a0 = 1; a0 <= 3; a0++) kx.fillRect(a0 * ds, this.iH - this.a8p, this.a1w, this.a8p);
			for (a0 = this.a4r.length - 1; 0 <= a0; a0--) kx.fillText(this.a4r[a0], (a0 + .5) * ds, this.iH - .46 * this.a8p)
		}, this.aHF = function() {
			kx.fillStyle = p.mZ, kx.fillRect(0, 0, this.u, this.aO1), kx.fillStyle = p.lx, kx.fillRect(0, this.aO1 - .5 * this.a1w, this.u, this.a1w), kx.font = b2.kw.l1(1, .39 * this.aO1), kx.fillText(L(332), Math.floor(this.u / 2), Math.floor(.55 *
				this.aO1))
		}, this.aOB = function(e8, fi, fj) {
			var jc = bS.max[this.kh],
				xJ = (kx.setTransform(1, 0, 0, 1, fi + 2 * this.pg + this.aNz, fj + this.a2X + this.aO1), kx.lineWidth = 2, this.a8a / Math.sqrt(jc));
			kx.beginPath(), kx.moveTo(this.aO0, this.a8a - xJ * Math.sqrt(e8[bS.aHq - 1]));
			for (var a0 = bS.aHq - 2; 0 <= a0; a0--) kx.lineTo(a0 * this.aO0 / (bS.aHq - 1), this.a8a - xJ * Math.sqrt(e8[a0]));
			kx.stroke();
			fi = this.a0B(e8, xJ, .5);
			fi < .95 && kx.fillText(b2.l4.l5(jc), -this.pg, 0), .05 < Math.abs(fi - .5) && kx.fillText(b2.l4.l5(Math.floor(jc / 4)), -this.pg, Math.floor(this.a8a / 2)), .05 < fi && kx.fillText("0", -this.pg, this.a8a)
		}, this.aOC = function(fi, fj) {
			kx.setTransform(1, 0, 0, 1, fi + 2 * this.pg + this.aNz, fj + this.a2X + this.aO1), kx.lineWidth = 2;
			var xJ = this.a8a / Math.max(bS.max[this.kh], 1);
			kx.beginPath(), kx.moveTo(this.aO0, this.a8a - xJ * bS.a5A[bS.aHq - 1]);
			for (var a0 = bS.aHq - 2; 0 <= a0; a0--) kx.lineTo(a0 * this.aO0 / (bS.aHq - 1), this.a8a - xJ * bS.a5A[a0]);
			kx.stroke();
			fi = this.a0B(bS.a5A, xJ, 1), fj = bS.max[this.kh] / 100;
			fi < .95 && kx.fillText(b2.l4.ye(fj, 2), -this.pg, 0), .05 < Math.abs(fi - .5) && kx.fillText(b2.l4.ye(fj / 2, 2), -this.pg, Math.floor(this.a8a / 2)), .05 < fi && kx.fillText(b2.l4.ye(0, 2), -this.pg, this.a8a)
		}, this.aOD = function(fi, fj) {
			kx.setTransform(1, 0, 0, 1, fi + .34 * this.u, fj + 2 * this.a2X + this.aO1), b2.kw.textAlign(kx, 2);
			for (var a4c = this.iH - 4 * this.a2X - this.a8p - this.aO1, a0 = 7; 0 <= a0; a0--) kx.fillText(bS.aNt[a0], 0, a0 * a4c / 7);
			kx.setTransform(1, 0, 0, 1, fi + .39 * this.u, fj + 2 * this.a2X + this.aO1), b2.kw.textAlign(kx, 0);
			fi = bS.ey[1];
			for (kx.fillText(b2.l4.ye(bS.ey[0] / (10 * (fi < 1 ? 1 : fi)), 1), 0, 0), a0 = 6; 1 <= a0; a0--) kx.fillText(bS.ey[a0].toString(), 0, a0 * a4c / 7);
			kx.fillText(b2.l4.ye(100 * (1 - aX.es[a2.ev] / bS.ey[7]), 0), 0, a4c)
		}, this.aOE = function(fi, fj) {
			kx.setTransform(1, 0, 0, 1, fi + .79 * this.u, fj + 2 * this.a2X + this.aO1), b2.kw.textAlign(kx, 2);
			var a0, a4c = this.iH - 4 * this.a2X - this.a8p - this.aO1;
			for (kx.fillStyle = p.mB, a0 = 2; 0 <= a0; a0--) kx.fillText(bS.aNt[a0 + 8], 0, a0 * a4c / 9);
			for (kx.fillStyle = p.mA, kx.fillText(bS.aNt[11], 0, 3 * a4c / 9), kx.fillStyle = p.mQ, a0 = 8; 4 <= a0; a0--) kx.fillText(bS.aNt[a0 + 8], 0, a0 * a4c / 9);
			kx.fillStyle = p.mP, kx.fillText(bS.aNt[17], 0, 9 * a4c / 9), kx.fillStyle = p.mB;
			var a0q = b2.l4.l5(bS.ey[8] + bS.ey[9] + bS.ey[10] + bS.ey[11]),
				aGT = kx.measureText(a0q).width,
				fi = (kx.setTransform(1, 0, 0, 1, fi + .83 * this.u + aGT, fj + 2 * this.a2X + this.aO1), kx.fillText(b2.l4.l5(bS.ey[8]), 0, 0), kx.fillText(b2.l4.l5(bS.ey[9]), 0, a4c / 9), kx.fillText(b2.l4.l5(bS.ey[10]), 0, 2 * a4c / 9), kx
					.fillStyle = p.mA, kx.fillText(a0q, 0, 3 * a4c / 9), kx.fillStyle = p.mQ, bS.ey[13] - aU.aBE(a2.ev)),
				aGT = (kx.fillText(b2.l4.l5(bS.ey[12]), 0, 4 * a4c / 9), kx.fillText(b2.l4.l5(fi), 0, 5 * a4c / 9), kx.fillText(b2.l4.l5(bS.ey[14]), 0, 6 * a4c / 9), kx.fillText(b2.l4.l5(bS.ey[15]), 0, 7 * a4c / 9), kx.fillText(b2.l4.l5(bS.ey[16]),
					0, 8 * a4c / 9), bS.ey[12] + fi + bS.ey[14] + bS.ey[15] + bS.ey[16] + bS.ey[17]);
			kx.fillStyle = p.mP, kx.fillText(b2.l4.l5(aGT), 0, a4c), kx.fillStyle = p.lx
		}, this.a0B = function(e8, xJ, a3O) {
			var a0, d, e9;
			return this.aO4 < 0 || 1 < this.aO4 ? .25 : (a0 = this.aO4 * (bS.aHq - 1), e9 = e8[d = Math.floor(a0)], e9 += (a0 - d) * (e8[d < bS.aHq - 1 ? d + 1 : d] - e9), kx.strokeStyle = p.m0, .04 < this.aO4 && this.aOH(0, this.a8a - xJ * Math.pow(
					e9, a3O), a0 * this.aO0 / (bS.aHq - 1), this.a8a - xJ * Math.pow(e9, a3O)), .04 < e9 / bS.max[this.kh] && this.aOH(a0 * this.aO0 / (bS.aHq - 1), this.a8a, a0 * this.aO0 / (bS.aHq - 1), this.a8a - xJ * Math.pow(e9, a3O)), kx
				.fillStyle = p.mS, kx.beginPath(), kx.arc(a0 * this.aO0 / (bS.aHq - 1), this.a8a - xJ * Math.pow(e9, a3O), Math.max(2, .014 * this.iH), 0, 2 * Math.PI), kx.fill(), e8 = this.aO4 * bU.a5C, e8 = 0 === aX.kZ[a2.ev] ? Math.floor(e8 *
					aM.a5J) : Math.floor(e8 * bU.et()), kx.fillStyle = p.lx, kx.fillText(1 === a3O ? b2.l4.ye(e9 / 100, 2) : b2.l4.l5(Math.floor(e9)), -this.pg, this.a8a - xJ * Math.pow(e9, a3O)), b2.kw.textAlign(kx, 1), kx.fillText(aL.a3y(e8),
					a0 * this.aO0 / (bS.aHq - 1), this.a8a + this.aO2 - (m.n.tk() ? 2 : 0) - this.a1w), b2.kw.textAlign(kx, 2), xJ * Math.pow(e9, a3O) / this.a8a)
		}, this.aOH = function(ks, kt, ku, kv) {
			kx.beginPath(), kx.moveTo(ks, kt), kx.lineTo(ku, kv), kx.stroke()
		}
}

function bg() {
	this.aOI = "https://", this.aOJ = this.aOI + "territorial.io/", this.aHr = this.aOJ + "changelog", this.aHv = this.aOJ + "terms", this.aOK = this.aOJ + "cookie_policy", this.aHX = this.aOJ + "privacy", this.aHu = this.aOJ + "tutorial", this.aHt =
		this.aOJ + "players", this.aHs = this.aOJ + "clans", this.vc = this.aOJ + "clan-results", this.a6M = this.aOI + "play.google.com/store/apps/details?id=territorial.io", this.vu = this.aOI + "apps.apple.com/app/id1581110913", this.aOL = this
		.aOI + "www.youtube.com/watch?v=toZTQ8aRdFc", this.a6N = this.aOI + "discord.gg/pthqvpTXmh", this.a6O = this.aOI + "www.instagram.com/davidtschacher/", this.td =
		"🇦🇫🇦🇽🇦🇱🇩🇿🇦🇸🇦🇩🇦🇴🇦🇮🇦🇶🇦🇬🇦🇷🇦🇲🇦🇼🇦🇺🇦🇹🇦🇿🇧🇸🇧🇭🇧🇩🇧🇧🇧🇾🇧🇪🇧🇿🇧🇯🇧🇲🇧🇹🇧🇴🇧🇦🇧🇼🇧🇷🇮🇴🇻🇬🇧🇳🇧🇬🇧🇫🇧🇮🇨🇻🇰🇭🇨🇲🇨🇦🇮🇨🇰🇾🇨🇫🇹🇩🇨🇱🇨🇳🇨🇽🇨🇨🇨🇴🇰🇲🇨🇬🇨🇩🇨🇷🇭🇷🇨🇺🇨🇼🇨🇾🇨🇿🇩🇰🇩🇯🇩🇲🇩🇴🇪🇨🇪🇬🇸🇻🇬🇶🇪🇷🇪🇪🇸🇿🇪🇹🇪🇺🇫🇰🇫🇴🇫🇯🇫🇮🇫🇷🇬🇫🇵🇫🇹🇫🇬🇦🇬🇲🇬🇪🇩🇪🇬🇭🇬🇮🇬🇷🇬🇱🇬🇩🇬🇵🇬🇺🇬🇹🇬🇬🇬🇳🇬🇼🇬🇾🇭🇹🇭🇳🇭🇰🇭🇺🇮🇸🇮🇳🇮🇩🇮🇷🇮🇶🇮🇪🇮🇲🇮🇱🇮🇹🇨🇮🇯🇲🇯🇵🇯🇪🇯🇴🇰🇿🇰🇪🇰🇮🇽🇰🇰🇼🇰🇬🇱🇦🇱🇻🇱🇧🇱🇸🇱🇷🇱🇾🇱🇮🇱🇹🇱🇺🇲🇴🇲🇰🇲🇬🇲🇼🇲🇾🇲🇻🇲🇱🇲🇹🇲🇭🇲🇶🇲🇷🇲🇺🇾🇹🇲🇽🇫🇲🇲🇩🇲🇨🇲🇳🇲🇪🇲🇸🇲🇦🇲🇿🇲🇲🇳🇦🇳🇷🇳🇵🇳🇱🇳🇨🇳🇿🇳🇮🇳🇪🇳🇬🇳🇺🇳🇫🇰🇵🇲🇵🇳🇴🇴🇲🇵🇰🇵🇼🇵🇸🇵🇦🇵🇬🇵🇾🇵🇪🇵🇭🇵🇱🇵🇹🇵🇷🇶🇦🇷🇴🇷🇺🇷🇼🇼🇸🇸🇲🇸🇹🇸🇦🇸🇳🇷🇸🇸🇨🇸🇱🇸🇬🇸🇽🇸🇰🇸🇮🇸🇧🇸🇴🇿🇦🇬🇸🇰🇷🇸🇸🇪🇸🇱🇰🇧🇱🇸🇭🇰🇳🇱🇨🇲🇫🇵🇲🇻🇨🇸🇩🇸🇷🇸🇪🇸🇾🇨🇭🇹🇼🇹🇯🇹🇿🇹🇭🇹🇱🇹🇬🇹🇰🇹🇴🇹🇹🇹🇳🇹🇷🇹🇲🇹🇨🇹🇻🇺🇬🇺🇦🇦🇪🇬🇧🇺🇳🇺🇸🇻🇮🇺🇾🇺🇿🇻🇺🇻🇦🇻🇪🇻🇳🇼🇫🇪🇭🇾🇪🇿🇲🇿🇼"
}

function cr() {
	this.kB = new aOM, this.sx = new aON, this.dG = function() {
		this.kB.dG()
	}, this.hd = function() {
		0 !== this.kB.a1H && this.kB.a1H--
	}
}

function aON() {
	this.kn = function() {
		if (0 !== bF.kB.a1H && (kx.globalAlpha = Math.min(bF.kB.a1H / 580, 1), kx.drawImage(bF.kB.aOQ, 1 + aH.ky(), 1 + aH.kz()), kx.globalAlpha = 1, a2.g2)) {
			for (var ks = h9 / hA, kt = hB / hA, ku = (an.u + h9) / hA, kv = (an.iH + hB) / hA, f8 = bF.kB.aOR * hA, aOS = bF.kB.aOS, a0 = a2.is - 1; 0 <= a0; a0--) ! function(a0, f8, ks, kt, ku, kv, aOS) {
				var highlight = settings.highlightClanSpawns && clanFilter.inOwnClan[a0];
				if (highlight) f8 *= 2;
				0 === aX.kZ[a0] || 0 === aX.es[a0] || (ku = an.u * ((aX.hM[a0] + aX.hN[a0] + 1) / 2 - ks) / (ku - ks) - .5 * f8, ks = an.iH * ((aX.hO[a0] + aX.hP[a0] + 1) / 2 - kt) / (kv - kt) - .5 * f8, ku > an.u) || ks > an.iH || ku < -
					f8 || ks < -f8 || (kx.setTransform(highlight ? hA * 2 : hA, 0, 0, highlight ? hA * 2 : hA, ku, ks), kx.drawImage(aOS[a2.ho ? bV.ip[a0] : 1], 0, 0))
			}(a0, f8, ks, kt, ku, kv, aOS);
			kx.setTransform(hA, 0, 0, hA, 0, 0)
		}
	}
}

function aOM() {
	this.aOR = 28, this.a1H = 0, this.aOQ = null;
	var aOU = this.aOS = null;

	function aOX(gI, aOY) {
		var fi, fj, fx, gu, xb = b2.kw.rm(gI, gI),
			gP = b2.kw.getContext(xb, !0),
			gL = b2.kw.getImageData(gP, gI, gI),
			rx = gL.data,
			jc = (gI >> 1) - .5,
			aOZ = .5 + jc;
		for (aOZ *= aOZ, fj = 0; fj < gI; fj++)
			for (fi = 0; fi < gI; fi++) gu = (gu = fi - jc) * gu + (gu = fj - jc) * gu, rx[fx = 4 * (fj * gI + fi)] = aOY[0], rx[1 + fx] = aOY[1], rx[2 + fx] = aOY[2], rx[3 + fx] = (aOZ - gu) * aOY[3] / aOZ;
		return gP.putImageData(gL, 0, 0), xb
	}

	function aNn(a0, gP, xb, gI) {
		var fi, y, highlight = settings.highlightClanSpawns && clanFilter.inOwnClan[a0];
		if (highlight) gI *= 2;
		0 !== aX.kZ[a0] && 0 !== aX.es[a0] && (fi = aX.hM[a0] + aX.hN[a0] + 1 - gI - 2 >> 1, y = aX.hO[a0] + aX.hP[a0] + 1 - gI - 2 >> 1,
			highlight ? gP.drawImage(xb[a2.ho ? bV.ip[a0] : a0 < a2.is ? 1 : 0], fi, y, gI, gI) :
			gP.drawImage(xb[a2.ho ? bV.ip[a0] : a0 < a2.is ? 1 : 0], fi, y))
	}
	this.dG = function() {
		var vD;
		this.a1H = 700,
			function(vD) {
				var gI = vD.aOR;
				if (vD.aOS = [], aOU = [], a2.ho)
					for (var a0 = 0; a0 <= a2.yz; a0++) vD.aOS.push(aOX(gI, bV.aMj[bV.v0[a0]])), aOU.push(aOX(gI >> 1, bV.aMj[bV.v0[a0]]));
				else vD.aOS.push(aOX(gI, bV.aMj[0])), vD.aOS.push(aOX(gI, bV.aMj[4])), aOU.push(aOX(gI >> 1, bV.aMj[0]))
			}(this),
			function(vD, aOa) {
				var a0, aOQ = vD.aOQ,
					gP = b2.kw.getContext(aOQ, !0),
					f0 = a2.f4,
					gI = vD.aOR >> 1;
				gP.imageSmoothingEnabled = !1, gP.setTransform(1, 0, 0, 1, 0, 0), aOa && gP.clearRect(0, 0, aOQ.width, aOQ.height);
				for (a0 = a2.is; a0 < f0; a0++) aNn(a0, gP, aOU, gI)
			}(this, null !== (vD = this).aOQ && vD.aOQ.width === bI.eV - 2 && vD.aOQ.height === bI.eW - 2 || (vD.aOQ = b2.kw.rm(bI.eV - 2, bI.eW - 2), !1)), a2.g2 || this.yu()
	}, this.aMi = aOX, this.yu = function() {
		for (var f0 = a2.is, gI = this.aOR, aOS = this.aOS, gP = b2.kw.getContext(this.aOQ, !0), a0 = 0; a0 < f0; a0++) aNn(a0, gP, aOS, gI)
	}
}

function cs() {
	function aOb(player) {
		a2.g2 ? (aAC(player), aCw(), a2.jG && a2.nt.hd()) : au.aCu(player)
	}
	this.nJ = function(player) {
		return !!aB.a0A(player) && (aC.ur(player, player === a2.ev ? 21 : 22), aOb(player), !0)
	}, this.nq = function(player) {
		1 === a2.uf && 0 !== aX.kZ[player] && 2 !== aX.y6[player] && aOb(player), a2.ui--, a2.uh--, aC.ur(player, 4), b2.eq.fo(2) && aL.kJ(!0)
	}
}

function d2() {
	this.a85 = ["rgba(130,130,130,0.88)", "rgba(130,12,12,0.88)", "rgba(12,130,12,0.88)", "rgba(12,12,130,0.88)", "rgba(130,130,12,0.88)", "rgba(130,12,130,0.88)", "rgba(12,130,130,0.88)", "rgba(130,130,130,0.88)", "rgba(0,0,0,0.88)"], this.a4a = [p
		.lx, "rgb(255,120,120)", "rgb(0,230,0)", "rgb(150,150,255)", "rgb(240,240,25)", "rgb(255,70,255)", "rgb(25,240,240)", p.lx, "rgb(170,170,170)"
	], this.aOc = [p.lx, "rgb(255,0,0)", "rgb(0,255,0)", "rgb(0,0,255)", "rgb(255,255,0)", "rgb(255,0,255)", "rgb(0,255,255)", p.lx, p.l2], this.aOd = [p.l2, p.lx, p.lx, p.lx, p.l2, p.l2, p.l2, p.l2, p.lx];
	var aOe = ["255,255,255", "0,0,0", "255,4,4", "200,4,4", "4,255,4", "4,180,4", "255,195,195", "90,3,3", "200,255,200", "3,84,3"],
		aOf = (this.aCS = ["rgba(" + aOe[0] + ",", "rgba(" + aOe[1] + ",", "rgba(" + aOe[2] + ",", "rgba(" + aOe[3] + ",", "rgba(" + aOe[4] + ",", "rgba(" + aOe[5] + ",", "rgba(" + aOe[6] + ",", "rgba(" + aOe[7] + ",", "rgba(" + aOe[8] + ",",
			"rgba(" + aOe[9] + ","
		], this.aCT = ["rgb(" + aOe[0] + ")", "rgb(" + aOe[1] + ")", "rgb(" + aOe[2] + ")", "rgb(" + aOe[3] + ")", "rgb(" + aOe[4] + ")", "rgb(" + aOe[5] + ")", "rgb(" + aOe[6] + ")", "rgb(" + aOe[7] + ")", "rgb(" + aOe[8] + ")", "rgb(" + aOe[
			9] + ")"
		], this.v2 = null, this.aMj = [
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
	this.v0 = [0, 1, 2, 3, 4, 5, 6, 7, 8], this.ip = new Uint8Array(a2.f4), this.vS = null, this.aOg = null, this.dH = function() {
		this.v2 = [L(333), L(334), L(335), L(336), L(337), L(338), L(339), L(333), L(340)]
	}, this.dG = function(t7) {
		this.ip.fill(0), this.aOh(), a2.ho && (ay.jA && ay.jB.aAv ? this.a9V() : 9 === a2.jE ? this.aOi() : this.hd(t7))
	}, this.a9V = function() {
		var a0, f0 = a2.sR;
		for (this.v0 = [0, 1, 2, 3, 4, 5, 6, 7, 8], a0 = 0; a0 < f0; a0++) this.ip[a0] = ay.jB.aAv[a0]
	}, this.aOh = function() {
		for (var a0 = this.v0.length - 1; 0 <= a0; a0--) this.v0[a0] = a0;
		this.vS = [], this.aOg = []
	}, this.aOi = function() {
		for (var a0 = a2.is + ap.aCl - 1; 0 <= a0; a0--) this.ip[a0] = 1;
		for (a0 = a2.is + ap.aCl; a0 < a2.f4; a0++) this.ip[a0] = 2;
		this.v0[1] = 7, this.v0[2] = 8
	}, this.hd = function(t7) {
		var gb = new Uint8Array(a2.is),
			gc = new Uint8Array(a2.is),
			aOj = new Uint16Array(8),
			aOk = new Uint16Array(this.v0.length);
		this.aOl(t7, gb, gc, aOj), this.a9T(aOj), a2.jG || this.aOm(aOk, gb, gc), this.aOn(gb, gc, aOk), a2.jG ? this.aOo() : this.aOp()
	}, this.aOl = function(t7, gb, gc, aOq) {
		for (var i7, d, aOr, f0 = this.v0.length - 1, e8 = new Uint16Array(f0), a0 = a2.is - 1; 0 <= a0; a0--) {
			for (i7 = f0; 1 <= i7; i7--) e8[i7 - 1] = Math.abs(4 * t7[a0].a8l[0] - aOf[i7][0]) + Math.abs(4 * t7[a0].a8l[1] - aOf[i7][1]) + Math.abs(4 * t7[a0].a8l[2] - aOf[i7][2]);
			for (aOr = 768, i7 = f0 - 1; 0 <= i7; i7--) e8[d = (i7 + a0) % f0] < aOr && (aOr = e8[d], gb[a0] = d);
			for (aOq[gb[a0]] += 4, aOr = 768, i7 = f0 - 1; 0 <= i7; i7--) e8[d = (i7 + a0) % f0] < aOr && d !== gb[a0] && (aOr = e8[d], gc[a0] = d);
			aOq[gc[a0]]++
		}
	}, this.a9T = function(aOq) {
		for (var i7, je, f0 = this.v0.length - 1, a0 = f0; 0 <= a0; a0--) this.v0[a0] = a0;
		for (a0 = f0 - 1; 0 <= a0; a0--) aOq[a0]++;
		for (a0 = 1; a0 <= f0; a0++) {
			for (je = 0, i7 = 1; i7 < f0; i7++) aOq[i7] > aOq[je] && (je = i7);
			aOq[je] = 0, this.v0[a0] = je + 1
		}
	}, this.aOm = function(aOk, gb, gc) {
		var a0, i7, aJM, io, f9, d, lb, pv, aOs = this.v0.length - 1,
			ov = new Uint16Array(aOs),
			aOt = [],
			a2X = Math.max(a2.is + 1 >> 1, 6);
		loop: for (a0 = 0; a0 < a2.is; a0++)
			if (null !== (aJM = b2.l4.vW(aX.vX[a0]))) {
				for (i7 = this.vS.length - 1; 0 <= i7; i7--)
					if (aJM === this.vS[i7] && this.aOg[i7].length < a2X) {
						this.aOg[i7].push(a0);
						continue loop
					} this.vS.push(aJM), aOt.push(!1), this.aOg.push([a0])
			}
		for (i7 = this.vS.length - 1; 0 <= i7; i7--) {
			for (f9 = -1, io = this.vS.length - 1; 0 <= io; io--) !aOt[io] && (-1 === f9 || this.aOg[io].length > this.aOg[f9].length) && (f9 = io);
			for (io = aOs - 1; 0 <= io; io--) ov[io] = 1;
			for (io = this.aOg[f9].length - 1; 0 <= io; io--) ov[gb[this.aOg[f9][io]]] += 3, ov[gc[this.aOg[f9][io]]]++;
			for (a0 = aOs - 1; 0 <= a0; a0--) {
				for (d = f9 % aOs, io = aOs - 1; 0 <= io; io--) ov[io] > ov[d] && (d = io);
				for (lb = -1, io = a2.yz; 0 < io; io--)
					if (this.v0[io] === d + 1) {
						lb = io;
						break
					} if (ov[d] = 0, -1 !== lb) {
					for (pv = 0, io = a2.yz; 0 < io; io--) aOk[lb] > aOk[io] && pv++;
					if (pv !== a2.yz - 1) {
						for (io = this.aOg[f9].length - 1; 0 <= io; io--) aOk[lb]++, this.ip[this.aOg[f9][io]] = lb;
						break
					}
				}
			}
			aOt[f9] = !0
		}
	}, this.aOn = function(gb, gc, aOk) {
		for (var a0, gt, f0 = this.v0.length - 1, border = bB.eo(a2.is, a2.yz), aOu = (0 < a2.is % a2.yz && border++, new Uint8Array(1 + f0)), i7 = f0; 1 <= i7; i7--) aOu[this.v0[i7]] = i7;
		for (a0 = 0; a0 < a2.is; a0++) gt = aOu[gb[a0] + 1], 0 === this.ip[a0] && gt <= a2.yz && aOk[gt] < border && (aOk[gt]++, this.ip[a0] = gt);
		for (a0 = 0; a0 < a2.is; a0++) gt = aOu[gc[a0] + 1], 0 === this.ip[a0] && gt <= a2.yz && aOk[gt] < border && (aOk[gt]++, this.ip[a0] = gt);
		for (i7 = a2.yz; 1 <= i7; i7--)
			for (a0 = a2.is - 1; 0 <= a0 && !(aOk[i7] >= border); a0--) 0 === this.ip[a0] && (aOk[i7]++, this.ip[a0] = i7)
	}, this.aOo = function() {
		var a0, i1, aOq = new Uint16Array(a2.yz);
		for (aOq[a2.yz - 1] = a2.f4, a0 = a2.yz - 2; 0 <= a0; a0--) aOq[a0] = aQ.jI[a0].jO;
		for (aOq[0]--, i1 = 0 === aOq[0] ? 1 : 0, a0 = a2.is; a0 < a2.f4; a0++) this.ip[a0] = i1 + 1, aOq[i1]--, aOq[i1] <= 0 && i1++
	}, this.aOp = function() {
		for (var a0 = a2.is; a0 < a2.f4; a0++) this.ip[a0] = 1 + a0 % a2.yz
	}
}

function fR() {
	for (var fi, fj, a0 = eM - 1; 0 <= a0; a0--) fi = bB.eo(eO[a0], 4) % bI.eV, fj = bB.eo(eO[a0], 4 * bI.eV), aX.hM[eH] = aX.hM[eH] > fi ? fi : aX.hM[eH], aX.hO[eH] = aX.hO[eH] > fj ? fj : aX.hO[eH], aX.hN[eH] = aX.hN[eH] < fi ? fi : aX.hN[eH], aX
		.hP[eH] = aX.hP[eH] < fj ? fj : aX.hP[eH]
}

function ee() {
	var f9, f7, a0, f0 = aX.f1[eH].length;
	loop: for (a0 = f0 - 1; 0 <= a0; a0--) {
		for (f9 = 3; 0 <= f9; f9--)
			if (f7 = aX.f1[eH][a0] + eR[f9], aS.fC(f7) || aS.fA(f7) && aS.fB(f7) !== eH) {
				aS.hy(aX.f1[eH][a0], eH);
				continue loop
			} aX.f1[eH][a0] = aX.f1[eH][f0 - 1], aX.f1[eH].pop(), f0--
	}
}

function ef() {
	var f9, f7, aOv, aOw, f0 = aX.fI[eH].length;
	loop: for (var a0 = f0 - 1; 0 <= a0; a0--) {
		for (aOv = aOw = !1, f9 = 3; 0 <= f9; f9--) {
			if (f7 = aX.fI[eH][a0] + eR[f9], aS.a9e(f7, eH)) continue loop;
			aOv = aOv || aS.g6(f7), aOw = aOw || aS.s6(f7)
		}
		aOv ? aX.fJ[eH].push(aX.fI[eH][a0]) : aOw ? aX.fM[eH].push(aX.fI[eH][a0]) : aS.sk(aX.fI[eH][a0], eH), aX.fI[eH][a0] = aX.fI[eH][f0 - 1], aX.fI[eH].pop(), f0--
	}
}

function fG() {
	aX.es[eL] -= eM
}

function fH(border) {
	for (var f0 = border.length, a0 = f0 - 1; 0 <= a0; a0--) aS.ss(eL, border[a0]) || (border[a0] = border[f0 - 1], border.pop(), f0--)
}

function fK(border) {
	for (var f0 = border.length, a0 = f0 - 1; 0 <= a0; a0--) !aS.ss(eL, border[a0]) && aS.f2(border[a0]) && (border[a0] = border[f0 - 1], border.pop(), f0--)
}

function fL(border) {
	for (var f9, f7, f0 = border.length, a0 = f0 - 1; 0 <= a0; a0--)
		for (f9 = 3; 0 <= f9; f9--)
			if (f7 = border[a0] + eR[f9], aS.a9e(f7, eL)) {
				aX.fI[eL].push(border[a0]), border[a0] = border[f0 - 1], border.pop(), f0--;
				break
			}
}

function fN() {
	for (var f9, f7, a0 = eM - 1; 0 <= a0; a0--)
		for (f9 = 3; 0 <= f9; f9--) f7 = eO[a0] + eR[f9], aS.a9f(eL, f7) && aS.a9g(f7) && (aX.fI[eL].push(f7), aS.f3(f7, eL))
}

function fO() {
	var fi, fj;
	loop: for (; aX.hO[eL] < aX.hP[eL];) {
		for (fi = aX.hN[eL]; fi >= aX.hM[eL]; fi--)
			if (aS.ss(eL, 4 * (aX.hO[eL] * bI.eV + fi))) break loop;
		aX.hO[eL]++
	}
	loop: for (; aX.hO[eL] < aX.hP[eL];) {
		for (fi = aX.hN[eL]; fi >= aX.hM[eL]; fi--)
			if (aS.ss(eL, 4 * (aX.hP[eL] * bI.eV + fi))) break loop;
		aX.hP[eL]--
	}
	loop: for (; aX.hM[eL] < aX.hN[eL];) {
		for (fj = aX.hP[eL]; fj >= aX.hO[eL]; fj--)
			if (aS.ss(eL, 4 * (fj * bI.eV + aX.hM[eL]))) break loop;
		aX.hM[eL]++
	}
	loop: for (; aX.hM[eL] < aX.hN[eL];) {
		for (fj = aX.hP[eL]; fj >= aX.hO[eL]; fj--)
			if (aS.ss(eL, 4 * (fj * bI.eV + aX.hN[eL]))) break loop;
		aX.hN[eL]--
	}
}

function gF(player, hu) {
	return 0 === bV.ip[player] || bV.ip[player] !== bV.ip[hu]
}

function gD(player, hu) {
	for (var d, aOx = aU.ea(player), a0 = 0; a0 < aOx; a0++)
		if (0 === aU.eb(player, a0))
			if ((d = aU.eg(player, a0)) === a2.f4) {
				if (hu === a2.f4) return !1;
				if (gB(hu)) return !0
			} else if (b2.eq.jh(d))
		if (hu === a2.f4) {
			if (gB(d)) return !0
		} else if (gG(hu, d)) return !0;
	return !1
}

function gB(player) {
	for (var a0, f8, f0 = aX.fI[player].length, f9 = 3; 0 <= f9; f9--)
		for (f8 = eR[f9], a0 = 0; a0 < f0; a0++)
			if (aS.fC(aX.fI[player][a0] + f8)) return !0;
	return !1
}

function aA9(player) {
	for (var a0, f8, f0 = aX.fI[player].length, f9 = 3; 0 <= f9; f9--)
		for (f8 = eR[f9], a0 = 0; a0 < f0; a0++)
			if (aS.hx(aX.fI[player][a0]) && aS.fC(aX.fI[player][a0] + f8)) return !0;
	return !1
}

function gG(y8, y9) {
	var a0, ds, f9, f8, f7, aMs = aX.fI[y8].length,
		aMt = aX.fI[y9].length;
	for (aMt < aMs && (ds = y8, y8 = y9, y9 = ds, ds = aMs, aMs = aMt, 0), f9 = 3; 0 <= f9; f9--)
		for (f8 = eR[f9], a0 = 0; a0 < aMs; a0++)
			if (f7 = aX.fI[y8][a0] + f8, aS.fA(f7) && aS.fB(f7) === y9) return !0;
	return !1
}

function aAA(y8, y9) {
	for (var a0, f8, f7, aMs = aX.fI[y8].length, f9 = 3; 0 <= f9; f9--)
		for (f8 = eR[f9], a0 = 0; a0 < aMs; a0++)
			if (aS.hx(aX.fI[y8][a0]) && (f7 = aX.fI[y8][a0] + f8, aS.fA(f7)) && aS.fB(f7) === y9) return !0;
	return !1
}

function aOy() {
	this.hd = function() {
		aD.hd(), aO.hd(), an.hd(), aq.kB.hd(), am.a7a(), bU.dN && (bU.dN = !1, aP.kn())
	}
}

function aOz() {
	this.dr = bU.dr, this.kh = 0, this.aP0 = 0, this.a7V = 0, this.aP1 = null, this.aP2 = 7, this.a1I = 0, this.dG = function() {
		this.a7V = 0, this.aP1 = [], this.kh = 0, this.aP0 = 0
	}, this.aJ5 = function(a1) {
		var a0;
		if (a2.g2) this.a5D(a1);
		else if (this.aP1.push(a1), 2 === a2.uf) {
			for (a0 = 0; a0 < this.aP1.length; a0++) b0.mv.hd(this.aP1[a0]);
			this.aP1 = []
		}
	}, this.a5D = function(a1) {
		b0.mv.hd(a1), b1.hd(), aL.a5D(this.a7V), this.a7V === a2.z0 ? (a2.nt.hd(), this.a7V = 0, this.kh = 0, this.aP0 = 0, this.dr = bU.dr) : (this.a7V++, aW.yt(), aW.kJ(!0), bQ.a5k())
	}, this.hd = function() {
		an.hd(), a2.g2 ? (bU.dN = aL.a5D(-1) || bU.dN, kL()) : (0 !== this.kh || bU.dr >= this.dr && (this.dr += bU.a5C * Math.floor(1 + (bU.dr - this.dr) / bU.a5C), 2 === a2.uf ? k9() : this.aP3(), this.kh++, 27 < bU.dr - this.a1I)) && this
		.aP4(), kG(), bU.dN && (bU.dN = !1, sv()), this.a1I = bU.dr
	}, this.aP4 = function() {
		bU.dN = !0, kI(), this.kh = 0
	}, this.aP3 = function() {
		var qr, a0;
		if (this.aP0 !== 7 * this.a7V) kC(), bQ.a5k();
		else {
			qr = !1;
			loop: for (; this.aP5() && (qr = !0, kC(), 2 !== a2.uf) && 0 < this.aP1.length;)
				for (a0 = this.aP2 - 2; 0 <= a0; a0--)
					if (kC(), 2 === a2.uf) break loop;
			qr ? bQ.a5k() : (k9(), bQ.yw())
		}
	}, this.aP5 = function() {
		return 0 < this.aP1.length && (this.a7V++, b0.mv.hd(this.aP1[0]), this.aP1.shift(), !0)
	}
}

function aP6() {
	var aP7, aP8, aP9, a7V, aPA, kh = 0,
		dr = bU.dr;

	function aPD() {
		! function() {
			if (!a2.g2) return;
			if (a2.jG) return;
			if (aPA % 7 != 0) aPA++;
			else if (a7V === a2.z0) {
				if (!aPG()) return;
				aL.a5D(a7V), a2.nt.hd()
			} else {
				if (!aPG()) return;
				aPA++, a7V++, aW.yt(), aW.kJ(!0)
			}
			return 1
		}() && aPG() && kC()
	}

	function aPE() {
		kh = 0, (a2.g2 ? (bU.dN = aL.a5D(a7V - (aPA % 7 == 0 ? 0 : 1) + aPA % 7 / 7) || bU.dN, kL) : aB.fn || !b3.zL ? kL : (bU.dN = !0, kI))()
	}

	function aPG() {
		var a0, f0, aPH = b1.nr.aK8,
			e9 = b1.nr.aK9,
			eB = b1.nr.aKA,
			eD = b1.nr.aKB,
			aPI = b1.nr.aKC,
			aPJ = b1.nr.aKD;
		if (!(aP7 >= aPJ.length)) {
			if (aPJ = aPJ[aP7], aPI[aP7]) {
				for (f0 = aP8 + aPJ, a0 = aP8; a0 < f0; a0++) b0.mv.ne(aPH[a0], e9[a0], eB[a0], eD[a0]);
				aP8 += aPJ, aP7++
			} else ++aP9 >= aPJ && (aP7++, aP9 = 0);
			return 1
		}
		aC.w3("Replay file smaller than expected."), b3.wz(!1), a2.uf = 2
	}
	this.aP0 = 0, this.dG = function() {
		aPA = a7V = aP9 = aP8 = aP7 = 0
	}, this.hd = function() {
		var aNF;
		an.hd(), b3.a2j() < 1.7 ? 0 === kh ? bU.dr >= dr && (aNF = bU.a5C / b3.a2j(), dr += aNF * Math.floor(1 + (bU.dr - dr) / aNF), 2 === a2.uf || aB.fn || !b3.zL ? k9() : (aPD(), bQ.a5k()), kh++) : aPE() : function() {
			var aNF;
			if (bU.dr >= dr)
				if (2 === a2.uf || aB.fn || !b3.zL) k9(), dr = bU.dr;
				else {
					for (aNF = bU.a5C / b3.a2j(), 16 < (bU.dr - dr) / aNF && (dr = bU.dr - 16 * aNF); bU.dr >= dr && 2 !== a2.uf;) dr += aNF, aPD();
					bQ.a5k()
				} aPE()
		}(), kG(), bU.dN && (bU.dN = !1, sv())
	}, this.up = function() {
		aP7 !== b1.nr.aKD.length && aP7 + 1 !== b1.nr.aKD.length && aC.w3("Replay file larger than expected.")
	}
}

function aPK() {
	var kh = 0,
		dr = bU.dr;
	this.aP0 = 0, this.hd = function() {
		an.hd(), a2.g2 ? kL() : 0 === kh ? bU.dr >= dr && (dr += bU.a5C * Math.floor(1 + (bU.dr - dr) / bU.a5C), 2 === a2.uf || aB.fn ? k9() : (kC(), bQ.a5k()), kh++) : ((aB.fn ? kL : (bU.dN = !0, kI))(), kh = 0), kG(), bU.dN && (bU.dN = !1,
		sv())
	}
}

function dA() {
	this.uo = null, this.dN = !1, this.dr = 0, this.a5C = 56;
	var aPL = 0;

	function aPM() {
		bU.dr = aPL = performance.now(), bU.uo.hd(), window.requestAnimationFrame(aPM)
	}
	this.dG = function() {
		this.zJ(), window.requestAnimationFrame(aPM), this.dr = performance.now()
	}, this.zC = function() {
		a2.fm ? (this.uo = new aP6, this.uo.dG()) : a2.jG ? this.uo = new aPK : (this.uo = new aOz, this.uo.dG())
	}, this.zJ = function() {
		this.uo = new aOy, this.dN = !0
	}, this.hd = function() {
		this.uo.aP0++
	}, this.et = function() {
		return this.uo.aP0
	}, this.aIn = function() {
		var ds = performance.now();
		ds < aPL + 1e3 || (this.dr = ds, this.uo.hd())
	}
}

function cc() {
	var lI = 0,
		aPN = !0;

	function aPP(oG) {
		8 !== aP.vz() || 2 !== aX.y6[a2.ev] && (0 !== aX.kZ[a2.ev] || a2.g2) || aC.a0x(oG)
	}
	this.hd = function() {
		var ds, a1L;
		bU.dr > lI && (lI = bU.dr + 2500, ds = new Date, a1L = ds.getUTCSeconds(), aPN ? a1L < 45 && (aPN = !1) : a1L < 45 || (aPN = !0, (a1L = ds.getUTCMinutes() + 1) % 15 == 0 && aPP(30 === a1L ? "Upcoming Battle Royale Contest!" :
			"Upcoming Alliance Contest!")))
	}
}

function cU() {
	var ks, kt, ku, kv, aPQ = 0,
		aPR = 0;

	function aPT() {
		return Math.pow(Math.pow(ku - ks, 2) + Math.pow(kv - kt, 2), .5)
	}

	function aPS(d) {
		ks = an.ob * d.touches[0].clientX, kt = an.ob * d.touches[0].clientY, ku = an.ob * d.touches[1].clientX, kv = an.ob * d.touches[1].clientY
	}
	this.wP = function(d) {
		return 1 < d.touches.length ? (aPR = bU.dr, aPQ = 3, aPS(d), aA.pu(), !0) : (aPQ = 0, !1)
	}, this.wQ = function(d) {
		var aDe, gr, gs;
		return 0 !== a2.uf && 1 < d.touches.length && (aPQ = Math.max(aPQ - 1, 0), a7.lg() && (aDe = aPT(), aPS(d), d = aPT(), gr = Math.floor((ks + ku) / 2), gs = Math.floor((kt + kv) / 2), aH.a39(gr, gs, Math.max(.125, d) / Math.max(.125,
			aDe)), bU.dN = !0), !0)
	}, this.wo = function() {
		var fi, fj;
		return !!(aPQ && (aPQ = 0, bU.dr < aPR + 500)) && (fi = (ks + ku) / 2, fj = (kt + kv) / 2, aA.wh(fi, fj), aA.click(fi, fj, !0) && (bU.dN = !0), !0)
	}
}

function cl() {
	this.size = 0, this.kh = 0, this.a1 = null, this.dG = function(a1) {
		this.kh = 0, this.a1 = a1, this.size = a1.length
	}, this.wB = function() {
		this.a1 = null
	}, this.nd = function(size) {
		for (var du = 0, a1 = this.a1, lg = this.kh + size - 1, a0 = this.kh; a0 <= lg; a0++) du |= (a1[a0 >> 3] >> 7 - (7 & a0) & 1) << lg - a0;
		return this.kh += size, this.kh > 8 * this.size && console.log("error unwrapper"), du
	}, this.aJI = function(size) {
		var i7 = size >> 1;
		return (1 << i7) * this.nd(size - i7) + this.nd(i7)
	}, this.aPU = function(size) {
		for (var e8 = new Array(size), a0 = 0; a0 < size; a0++) e8[a0] = this.nd(10);
		return a9.rh(e8)
	}, this.aJH = function(aKY) {
		return this.size === b4.aJC(aKY)
	}
}

function d4() {
	this.aLS = 0, this.aLT = 0, this.aLO = 0, this.aLP = 0, this.aLQ = 0, this.aLR = 0, this.a5l = [0, 0, 0, 0], this.lf = function() {
		this.aLS = aH.ky(), this.aLT = aH.kz(), this.aLO = -this.aLS, this.aLP = -this.aLT, this.aLQ = an.u / hA, this.aLR = an.iH / hA, this.a5l[0] = Math.floor(this.aLO), this.a5l[1] = Math.floor(this.aLP), this.a5l[2] = Math.floor(this.a5l[
			0] + this.aLQ + 1), this.a5l[3] = Math.floor(this.a5l[1] + this.aLR + 1), bQ.a5i = !0
	}
}

function cV() {
	var a1s, lI;
	this.dG = function() {
		a1s = 1, lI = 0
	}, this.hd = function() {
		0 < a1s && (lI = 0 === lI ? bU.dr + 16 : lI, a1s = (a1s -= .001 * (bU.dr - lI)) < 0 ? 0 : a1s, lI = bU.dr, bU.dN = !0)
	}, this.kn = function() {
		0 < a1s && (kx.fillStyle = "rgba(0,0,0," + a1s + ")", kx.fillRect(0, 0, an.u, an.iH))
	}
}

function cY() {
	function aPX(map, fi, fj, u, iH) {
		map >= bI.aAp || (bI.sF === map && (kx.fillStyle = p.ma, kx.fillRect(fi, fj, u, iH), kx.fillStyle = p.lx), kx.strokeRect(fi, fj, u, iH), kx.fillText(bI.jB.sE[map].name, Math.floor(fi + .5 * u), Math.floor(fj + .55 * iH)))
	}
	this.tK = !1, this.a8b = [0, 0, 0, 0], this.show = function() {
		this.tK = !0, this.resize(), bU.dN = !0
	}, this.resize = function() {
		var aMs = bB.eo(bI.aAp + bI.aAp % 2, 2),
			aMs = an.iH - aMs * bR.gap;
		m.n.tk() ? this.a8b[2] = Math.floor(.75 * an.min) : this.a8b[2] = Math.floor(.5 * an.min), this.a8b[3] = Math.floor(1.25 * this.a8b[2]), this.a8b[3] > aMs && (this.a8b[3] = aMs, this.a8b[2] = Math.floor(aMs / 1.2)), this.a8b[0] = Math
			.floor((an.u - this.a8b[2]) / 2), this.a8b[1] = Math.floor((an.iH - this.a8b[3]) / 2)
	}, this.wL = function(fi, fj) {
		return !(fi < this.a8b[0] || fj < this.a8b[1] || fi > this.a8b[0] + this.a8b[2] || fj > this.a8b[1] + this.a8b[3])
	}, this.fq = function(fi, fj) {
		var a2X, aMs = bB.eo(bI.aAp + bI.aAp % 2, 2);
		return bU.dN = !0, fi < this.a8b[0] || fj < this.a8b[1] || fi > this.a8b[0] + this.a8b[2] || fj > this.a8b[1] + this.a8b[3] ? !(this.tK = !1) : (a2X = Math.floor(.17 * this.a8b[3]), fj < this.a8b[1] + a2X ? fi > this.a8b[0] + this.a8b[
			2] - a2X && (this.tK = !1) : (fj = (fj = Math.floor(aMs * (fj - this.a8b[1] - a2X - .00576 * an.oX) / (this.a8b[3] - a2X - .01152 * an.oX))) < 0 ? 0 : aMs - 1 < fj ? aMs - 1 : fj, fi > this.a8b[0] + this.a8b[2] / 2 && (fj += aMs),
				fj >= bI.aAp || bI.w(fj, Math.floor(16384 * Math.random()))), !0)
	}, this.kn = function() {
		var a0, kt, a2X = Math.floor(.17 * this.a8b[3]),
			aMs = bB.eo(bI.aAp + bI.aAp % 2, 2),
			gap = .6 * .01152 * an.oX,
			a8p = (this.a8b[3] - a2X - (aMs + 1) * gap) / aMs,
			pg = Math.floor((this.a8b[2] - 3 * gap) / 2);
		for (kx.lineWidth = bR.tn, b2.kw.textAlign(kx, 1), b2.kw.textBaseline(kx, 1), kx.fillStyle = p.lu, kx.fillRect(this.a8b[0], this.a8b[1] + a2X, this.a8b[2], this.a8b[3] - a2X), kx.fillStyle = p.ma, kx.fillRect(this.a8b[0], this.a8b[1],
				this.a8b[2], a2X), kx.strokeStyle = p.lx, kx.strokeRect(this.a8b[0], this.a8b[1], this.a8b[2], this.a8b[3]), kx.fillStyle = p.lx, kx.fillRect(this.a8b[0], this.a8b[1] + a2X, this.a8b[2], 2), kx.font = b2.kw.l1(1, .48 * a2X), kx
			.fillText("Maps", Math.floor(this.a8b[0] + this.a8b[2] / 2), Math.floor(this.a8b[1] + .55 * a2X)), kx.font = b2.kw.l1(1, .48 * a8p), a0 = aMs - 1; 0 <= a0; a0--) kt = Math.floor(this.a8b[1] + a2X + gap + a0 * (a8p + gap)), aPX(a0,
			this.a8b[0] + gap, kt, pg, a8p), aPX(a0 + aMs, this.a8b[0] + pg + 2 * gap, kt, pg, a8p);
		aB.a0B(Math.floor(this.a8b[0] + this.a8b[2] - .7 * a2X), Math.floor(this.a8b[1] + .3 * a2X), Math.floor(.4 * a2X)), kx.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function v() {
	this.size = 0, this.kh = 0, this.a1 = null, this.dG = function(a1) {
		this.kh = 0, this.a1 = a1, this.size = a1.length
	}, this.w = function(aKY) {
		return this.dG(new Uint8Array(this.aJC(aKY))), this.a1
	}, this.wB = function() {
		this.a1 = null
	}, this.x = function(size, a1N) {
		for (var a1 = this.a1, lg = this.kh + size - 1, a0 = this.kh; a0 <= lg; a0++) a1[a0 >> 3] |= (a1N >> lg - a0 & 1) << 7 - (7 & a0);
		this.kh += size, this.kh > 8 * this.size && console.log("error wrapper")
	}, this.aJB = function(size, a1N) {
		var i7 = size >> 1,
			f9 = 1 << i7;
		this.x(size - i7, bB.eo(a1N, f9)), this.x(i7, a1N % f9)
	}, this.aPY = function(size) {
		for (var a1 = this.a1, lg = this.kh + size, a0 = this.kh; a0 < lg; a0++) a1[a0 >> 3] &= 255 ^ 128 >>> (7 & a0)
	}, this.aJC = function(aKY) {
		return aKY + 7 >> 3
	}, this.aPZ = function(e8, i3, lg, aPa) {
		for (var a0 = i3; a0 < lg; a0++) this.x(aPa, e8[a0])
	}
}
a(), self.aiCommand746 = function(du) {
	0 === du ? bb() : 1 !== du || !m || 1 !== m.id || m.dv < 14 || b9.dw()
}, setTimeout(bb, 1e4), window.onload = function() {
	bb()
};