function a() {
	var b, c;

	function r() {
		var u = new v;
		u.w(1612), u.x(1, 0), u.x(6, 7), u.x(2, m ? m.id : 3), u.x(1, y ? 1 : 0), u.x(1, z ? 1 : 0), u.x(1, e ? e.f : 0);
		for (var a0 = 0; a0 < c.length && a0 < 100; a0++) u.x(16, c.charCodeAt(a0));
		b.send(u.a1), s()
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
	b2, p, b3, b4, b5, b6, b7, b8, b9, bA, bB, bC, bD, bE, bF, bG, bH, bI, bJ, i, bK, bL, bM, bN, bO, bP, bQ, bR, bS, bT, bU, bV, m, bW, bX, bY, g, bZ, dO, dP, dQ, y, dR, z, eD, eE, eF, eG, eH, eI, eJ, eK, eL, eM, eN, eO, eP, eQ, h7, h6, h8, a1w, jw,
	iW, is, iq, w8, ku, sl, a5X, z2, z3;

function ba() {
	e || (bc(), bB = new bd, bA = new be, b2 = new bf, p = new bg, a2 = new bh, az = new bi, b5 = new bj, b6 = new bk, a3 = new bl, a4 = new bm, a5 = new bn, a6 = new bo, a7 = new bp, a8 = new bq, a9 = new br, aA = new bs, aB = new bt, aC = new bu,
		aD = new bv, aE = new bw, aF = new bx, aG = new by, aH = new bz, aI = new c0, aJ = new c1, aK = new c2, aL = new c3, aM = new c4, aN = new c5, aO = new c6, aP = new c7, aQ = new c8, aR = new c9, aS = new cA, aT = new cB, aU = new cC, aV =
		new cD, aY = new cE, aW = new cF, aX = new cG, aZ = new cH, ap = new cI, aa = new cJ, ac = new cK, ad = new cL, ae = new cM, aq = new cN, ao = new cO, af = new cP, ab = new cQ, ag = new cR, ah = new cS, ai = new cT, an = new cU, aj =
		new cV, ak = new cW, al = new cX, am = new cY, ar = new cZ, at = new ca, au = new cb, av = new cc, aw = new cd, ax = new ce, ay = new cf, b0 = new cg, b1 = new ch, b3 = new ci, b4 = new v, b7 = new cj, b8 = new ck, b9 = new cl, bC =
		new cm, bD = new cn, bE = new co, bF = new cp, bG = new cq, bH = new cr, bI = new cs, bJ = new ct, i = new cu, bK = new cv, m = new cw, e = new cx, bW = new cy, bX = new cz, bU = new d0, bV = new d1, bO = new d2, bP = new d3, bL = new d4,
		bR = new d5, bS = new d6, bT = new d7, bY = new d8, bQ = new d9, g = new dA, bZ = new dB, e.dD(), m.dD(), an.dE(), bX.dD(), az.dD(), az.dF(), bZ.dD(), b2.dD(), aT.dD(), bL.dD(), aq.dD(), b5.dD(), b6.dD(), bI.dD(), i.dD(), bM = new dG, an
		.dD(), m.n.dH(), bT.dD(), bQ.dD(), bN = new dI, ao.dD(), aV.dJ(), bK.dD(), ac.dD(), aP.dD(), ax.dD(), aI.dD(), aZ.dD(), b9.dD(), aR.dD(), bT.dK = !0, setTimeout(function() {
			bI.w(2, 14071)
		}, 0), i.j(5, 5), b8.dL(), m.n.dM(), an.dN(), e.f = 1)
}

function cx() {
	this.dS = 1063, this.dD = function() {
		dO = 2, dQ = 32, dP = "25 Aug 2024 [1.99.6.2]", y = true, z = function() {
			try {
				return window.self !== window.top
			} catch (d) {
				return !0
			}
		}(), dR = (new Date).getTime() % 1024
	}, this.f = 0
}

function dB() {
	this.id = new dU, this.dD = function() {
		this.id.dD()
	}
}

function dU() {
	this.dD = function() {
		0 === bX.dV.data[181].value && (bX.dV.dW(180, Math.floor(Math.random() * bB.pow(30))), bX.dV.dW(181, Math.floor((new Date).getTime() / 36e5)))
	}
}

function cv() {
	this.dX = new dY, this.dZ = new da, this.dD = function() {
		m.n.db()
	}
}

function dY() {
	function dl() {}
	this.dD = function() {}, this.dk = function() {
		return !!dl() && (aiptag.cmd.player.push(function() {
			aiptag.adplayer.startVideoAd()
		}), !0)
	}, this.hideCMPButton = function() {
		"undefined" != typeof aipAPItag && aipAPItag.hideCMPButton && aipAPItag.hideCMPButton()
	}, this.showCMPButton = function() {
		"undefined" != typeof aipAPItag && aipAPItag.showCMPButton && aipAPItag.showCMPButton()
	}, this.showCMPScreen = function() {
		dl() && aipAPItag.showCMPScreen()
	}
}

function da() {
	var dn = 2e4;
	this.show = function() {
		if (bT.dn < dn) return !1;
		dn = bT.dn + 135e4, 2 === dO && m.n.dq(Math.floor(135e4))
	}
}

function co() {
	this.du = new Uint16Array(2), this.dv = new Uint16Array(2), this.dw = new Uint32Array(2), this.dx = new Uint32Array(2), this.dy = new Uint8Array(4), this.dz = new Uint8Array(4), this.e0 = new Uint32Array(5), this.e1 = new Uint32Array(8), this
		.e2 = new Uint16Array(16), this.e3 = new Uint16Array(512), this.e4 = function(e5, e6) {
			return e5[0] = e6, e5
		}, this.e7 = function(e5, e6, e8) {
			return e5[0] = e6, e5[1] = e8, e5
		}, this.e9 = function(e5, e6, e8, eA) {
			return e5[0] = e6, e5[1] = e8, e5[2] = eA, e5
		}, this.eB = function(e5, e6, e8, eA, eC) {
			return e5[0] = e6, e5[1] = e8, e5[2] = eA, e5[3] = eC, e5
		}
}

function eR() {
	eJ = 0, eK = 2048, eL = new Uint32Array(4 * eK), eM = 0, eN = new Uint32Array(eK), (eO = new Int32Array(4))[0] = -4 * bI.eS, eO[1] = 4, eO[2] = -eO[0], eO[3] = -eO[1], eP = new Uint8Array(bI.eS * bI.eT)
}

function eU(player) {
	eE = player, eQ = !1, eV(), eW();
	for (var a0 = aU.eX(eE) - 1; 0 <= a0; a0--) 0 === aU.eY(eE, a0) && (eD = a0, eZ());
	eQ && ea()
}

function ea() {
	eb(), ec()
}

function eZ() {
	eI = aU.ed(eE, eD), eF = aU.ee(eE, eD), eG = aU.ef(eE, eD), eg(), (0 !== eJ && (ei(), ej()) ? ek : eh)()
}

function ej() {
	var dp;
	return (eH = bB.el(eF, eJ)) > a2.em || !!eG && ((dp = eJ * (1 + a2.em)) <= (eF += b2.en.eo(eE, dp - eF)) || aX.ep[eE] < 5 * bT.eq())
}

function ei() {
	for (var a0 = eJ - 1; 0 <= a0; a0--) eP[bB.el(eL[a0], 4)] = 0
}

function eh() {
	var dp;
	1 === aU.eX(eE) && a4.er(eE), eE !== a2.es ? (aX.et[eE] += eF, aV.eu(eE)) : (dp = aX.et[eE], aX.et[eE] += eF, aV.eu(eE), bR.ev[13] -= aX.et[eE] - dp), aU.ew(eE, eD)
}

function eV() {
	var a0, ex = aX.ey[eE].length;
	for (eM = 0, a0 = (eK < ex ? eK : ex) - 1; 0 <= a0; a0--) eN[eM++] = aX.ey[eE][a0]
}

function eW() {
	for (var a0 = aX.ey[eE].length - 1; 0 <= a0; a0--) aS.ez(aX.ey[eE][a0]) && aS.f0(aX.ey[eE][a0], eE);
	aX.ey[eE] = []
}

function eg() {
	eJ = 0, (eI === a2.f1 ? f2 : f3)()
}

function f3() {
	for (var f4, f5, a0, f6 = 3; 0 <= f6; f6--)
		for (a0 = eM - 1; 0 <= a0; a0--) f4 = eN[a0] + eO[f6], f5 = bB.el(f4, 4), 0 === eP[f5] && aS.f7(f4) && aS.f8(f4) === eI && (eP[f5] = 1, eL[eJ++] = f4)
}

function f2() {
	for (var f4, f5, a0, f6 = 3; 0 <= f6; f6--)
		for (a0 = eM - 1; 0 <= a0; a0--) f4 = eN[a0] + eO[f6], f5 = bB.el(f4, 4), 0 === eP[f5] && aS.f9(f4) && (eP[f5] = 1, eL[eJ++] = f4)
}

function ek() {
	fA() ? (fB(), eI !== a2.f1 && fC()) : eh()
}

function fC() {
	fD(), fE(aX.fF[eI]), fE(aX.fG[eI]), fH(aX.ey[eI]), fI(aX.fG[eI]), fI(aX.fJ[eI]), fK(), fL()
}

function fB() {
	eQ = !0, aU.fM(eE, eD, eF), aU.fN(eE, eD), aX.ep[eE] += eJ, fO(), fP()
}

function fA() {
	return (eI === a2.f1 ? fQ : fR)()
}

function fR() {
	var fS = eJ * a2.em,
		fT = fU(),
		fV = fW(),
		fT = fS + 2 * fT + fV,
		fY = eH * eJ;
	return fT < fY ? (eF -= fT, fZ(fT - fS, fV), !0) : (eF -= fY, eG && 0 === fV ? (fZ(Math.max(fY - fS + b2.en.eo(eE, fT - fY + 1), 0), 0), !0) : (fZ(fY - fS, fV), !1))
}

function fZ(fY, fV) {
	if (0 < fV) {
		if (!(fV <= fY)) return aU.fa(eI, eE, fV - fY), void(fY = 0);
		aU.fa(eI, eE, 0), fY -= fV
	}
	fY = bB.el(fY, 2), aX.et[eI] >= fY ? aX.et[eI] -= fY : aX.et[eI] = 0
}

function fW() {
	return aU.fb(eI, eE)
}

function fU() {
	return bB.el(eJ * aX.et[eI], 1 + bB.el(10 * aX.ep[eI], 16))
}

function fQ() {
	return eF -= eJ * a2.em, !0
}

function fP() {
	for (var a0 = eJ - 1; 0 <= a0; a0--) aX.ey[eE].push(eL[a0]), aX.fF[eE].push(eL[a0]), aS.f0(eL[a0], eE)
}

function ct() {
	var fc = 0,
		fd = 0;
	this.fe = function(ff, fg) {
		fc = ff, fd = fg
	}, this.fh = function(fi) {
		a2.fj || aB.fk || (b2.en.fl(0) || b2.en.fl(1)) && b2.en.fm(a2.es) && (aG.fn(fc, fd) ? aG.fo = !1 : function(fi) {
			var fq = bC.fr(fc),
				fs = bC.ft(fd),
				fu = bC.fv(fq, fs),
				fw = bC.fx(fu);
			bC.fy(fq, fs) && (a2.fz ? aS.ez(fw) && b0.g0.g1(fu) : aS.g2(fw) || (aS.g3(fw) || fi ? bD.g4.g5(a2.es, fu) && b0.g0.g6(aG.g7(), fu) : aS.f9(fw) ? g8(a2.es) ? b0.g0.g9(aG.g7(), a2.f1) : gA(a2.es, a2.f1) ? ar.gB(a2.f1, aG.g7()) :
				bD.g4.g5(a2.es, fu) && b0.g0.g6(aG.g7(), fu) : (fq = aS.f8(fw)) !== a2.es && (gC(fq, a2.es) ? gD(a2.es, fq) ? b0.g0.g9(aG.g7(), fq) : gA(a2.es, fq) ? ar.gB(fq, aG.g7()) : bD.g4.g5(a2.es, fu) && b0.g0.g6(aG.g7(),
					fu) : bD.g4.g5(a2.es, fu) && b0.g0.g6(aG.g7(), fu))))
		}(fi))
	}
}

function gE(gF, size, gG, gH, font) {
	var a0, gK = .2,
		gL = document.createElement("canvas"),
		gM = gL.getContext("2d", {
			alpha: !1
		});
	for (gL.width = gF, gL.height = gF, gM.font = size + font, gM.textAlign = "center", gM.textBaseline = "middle", gM.fillStyle = "red", a0 = 0; a0 < gG.length; a0++) gM.fillText(gG[a0], .5 * gF, .5 * gF);
	return -1 < (gL = function(gI) {
		var a0, gO, f6 = gI.data;
		for (a0 = f6.length - 4; 0 <= a0; a0 -= 4)
			if (gO = f6[a0], gH <= gO) return Math.floor(a0 / (4 * gF));
		return -1
	}(gM.getImageData(0, 0, gF, gF))) && (gK = (gL - .5 * gF + .1 * size) / size), Math.max(gK, 0)
}

function cm() {
	this.gP = new Int16Array(4), this.gQ = new Int16Array(4), this.dD = function() {
		var a0;
		for (this.gP[0] = -bI.eS, this.gP[1] = 1, this.gP[2] = bI.eS, this.gP[3] = -1, a0 = 0; a0 < 4; a0++) this.gQ[a0] = 4 * this.gP[a0]
	}, this.gR = function(gS, gT) {
		var gU = this.gV(gT) - this.gV(gS),
			gT = this.gX(gT) - this.gX(gS),
			gS = gU >>> 31 << 1;
		return 5 + gS + (1 - gS) * (1 - (gT >>> 31 << 1)) * (Math.abs(gU) - Math.abs(gT) >>> 31) & 3
	}, this.gb = function(gS, gT, gc) {
		return gc % 2 == 0 ? gc + (1 - gc) * (1 - (this.gV(gT) - this.gV(gS) >>> 31 << 1)) + 4 & 3 : gc + (2 - gc) * (1 - (this.gX(gT) - this.gX(gS) >>> 31 << 1)) + 4 & 3
	}, this.ge = function(f4, fu) {
		for (var gT, gf, gh = aX.fG[f4], ex = gh.length, u = bI.eS, gi = this.gV(fu), gj = this.gX(fu), gk = gh[0] >> 2, min = this.gl(gi, gj, gk), a0 = 1; a0 < ex; a0++)(gf = (gf = gi - (gT = gh[a0] >> 2) % u) * gf + (gf = gj - ~~((.5 + gT) /
			u)) * gf) < min && (min = gf, gk = gT);
		return gk
	}, this.gm = function(player, fw) {
		return !aS.f9(fw) && player === aS.f8(fw)
	}, this.gl = function(fq, fs, fu) {
		return (fq -= this.gV(fu)) * fq + (fs -= this.gX(fu)) * fs
	}, this.gn = function(go, gp, gq) {
		go = this.gs(go) - this.gt(gq), gp = this.gv(gp) - this.gw(gq);
		return Math.sqrt(go * go + gp * gp)
	}, this.gx = function(gS, gT) {
		var gr = this.gV(gS) - this.gV(gT),
			gS = this.gX(gS) - this.gX(gT);
		return Math.sqrt(gr * gr + gS * gS)
	}, this.gy = function(gS, gT) {
		var gr = this.gV(gS) - this.gV(gT),
			gS = this.gX(gS) - this.gX(gT);
		return gr * gr + gS * gS
	}, this.gz = function(h0, h1, h2, h3) {
		return (h0 -= h2) * h0 + (h1 -= h3) * h1
	}, this.h4 = function(f4, h5) {
		return bB.el(h5 * aX.et[f4], 1e3)
	}, this.gs = function(go) {
		return 16 * (go + h6) / h7
	}, this.gv = function(gp) {
		return 16 * (gp + h8) / h7
	}, this.fr = function(go) {
		return Math.floor((go + h6) / h7)
	}, this.ft = function(gp) {
		return Math.floor((gp + h8) / h7)
	}, this.fy = function(fq, fs) {
		return 1 <= fq && 1 <= fs && fq < bI.eS - 1 && fs < bI.eT - 1
	}, this.gV = function(fu) {
		return fu % bI.eS
	}, this.gX = function(fu) {
		return bB.el(fu, bI.eS)
	}, this.fv = function(fq, fs) {
		return fs * bI.eS + fq
	}, this.h9 = function(fu) {
		var fq = this.gV(fu),
			fu = this.gX(fu);
		return 0 < fq && fq < bI.eS - 1 && 0 < fu && fu < bI.eT - 1
	}, this.fx = function(fu) {
		return fu << 2
	}, this.hA = function(fu) {
		return bI.eS * this.gX(fu) * 256 + (this.gV(fu) << 4)
	}, this.hB = function(fu) {
		return this.hA(fu) + 8 + (bI.eS << 7)
	}, this.hC = function(gq) {
		return bI.eS * (this.gw(gq) >> 4) + (this.gt(gq) >> 4)
	}, this.hD = function(gq) {
		gq = this.hC(gq);
		return (this.gV(gq) >> 5) + bD.hE.hF * (this.gX(gq) >> 5)
	}, this.gt = function(gq) {
		return gq % (bI.eS << 4)
	}, this.gw = function(gq) {
		return bB.el(gq, bI.eS << 4)
	}, this.hG = function(fu, gc) {
		return fu + this.gP[gc]
	}, this.hH = function(fw, gc) {
		return fw + this.gQ[gc]
	}, this.hI = function(player) {
		return this.fv(aX.hJ[player] + aX.hK[player] >> 1, aX.hL[player] + aX.hM[player] >> 1)
	}, this.hN = function(player) {
		return this.fv(ao.hO(aX.hJ[player], aX.hK[player]), ao.hO(aX.hL[player], aX.hM[player]))
	}
}

function cQ() {
	this.hP = new hQ, this.hR = new hS, this.hT = new hU, this.performance = new hV, this.hW = new hX, this.hY = new hZ, this.dD = function() {
		this.hP.dD(), this.hT.dD(), this.performance.dD(), this.hW.dD(), this.hY.dD()
	}, this.ha = function() {
		this.performance.ha(), this.hP.ha()
	}
}

function hX() {
	var hb, hd = new Uint16Array(8);

	function hn(size, player) {
		for (var a0 = aX.ey[player].length - 1; size <= a0; a0--) aS.hv(aX.ey[player][a0], player)
	}
	this.dD = function() {
		hb = 0
	}, this.he = function(player, hf) {
		return bE.e1[1] = aX.ey[player].length, bE.e1[0] === a2.f1 ? ab.hW.hg(player) : this.hh(player, bE.e1[0]), (0 !== bE.e1[1] || 0 !== aX.ey[player].length) && !(!hf && bE.e1[1] === aX.ey[player].length || (bE.e1[0] === a2.f1 ? aX.hi[
			player]++ : aX.hj[player]++, 0))
	}, this.hk = function(player) {
		a2.hl && (ab.hY.hm[player] = 1), hn(bE.e1[1], player), aU.ho(player, bE.dw[0], bE.e1[0]), a4.hp(player, !1)
	}, this.hq = function(player, hr, ex, hs) {
		var ht = bB.el(12 * aX.et[player], 1024);
		hs -= hs >= bB.el(aX.et[player], 2) ? ht : 0, hn(ex, player), aU.ho(player, hs, hr), aX.et[player] -= hs + ht, a4.hp(player, !1)
	}, this.hh = function(player, hr) {
		for (var gc, a0 = aX.fF[player].length - 1; 0 <= a0; a0--)
			if (aS.hu(aX.fF[player][a0]))
				for (gc = 3; 0 <= gc; gc--)
					if (aS.f7(aX.fF[player][a0] + eO[gc]) && aS.f8(aX.fF[player][a0] + eO[gc]) === hr) {
						aX.ey[player].push(aX.fF[player][a0]);
						break
					}
	}, this.hg = function(player) {
		for (var a0 = aX.fF[player].length - 1; 0 <= a0; a0--)
			if (aS.hu(aX.fF[player][a0]))
				for (var gc = 3; 0 <= gc; gc--)
					if (aS.f9(aX.fF[player][a0] + eO[gc])) {
						aX.ey[player].push(aX.fF[player][a0]);
						break
					}
	}, this.hw = function(player, hx) {
		var a0, hy, gc, hz, ex = aX.fF[player].length,
			gd = 256 <= ex ? 12 : 32 <= ex ? 6 : 1,
			i0 = ex - 1 - ao.i1(gd);
		hb = 0;
		loop: for (a0 = i0; 0 <= a0; a0 -= gd)
			for (gc = 3; 0 <= gc; gc--)
				if ((hz = aS.f9(aX.fF[player][a0] + eO[gc]) ? a2.f1 : aS.f8(aX.fF[player][a0] + eO[gc])) === a2.f1 || aS.f7(aX.fF[player][a0] + eO[gc]) && hz !== player && (hx || gC(player, hz))) {
					for (hy = hb - 1; 0 <= hy; hy--)
						if (hd[hy] === hz) continue loop;
					if (hd[hb] = hz, 8 <= ++hb) return !0
				}
		return 0 < hb
	}, this.i2 = function(player, hx) {
		var a0, gc, hz;
		for (hb = 0, a0 = aX.fF[player].length - 1; 0 <= a0; a0--)
			for (gc = 3; 0 <= gc; gc--)
				if ((hz = aS.f9(aX.fF[player][a0] + eO[gc]) ? a2.f1 : aS.f8(aX.fF[player][a0] + eO[gc])) === a2.f1 || aS.f7(aX.fF[player][a0] + eO[gc]) && hz !== player && (hx || gC(player, hz))) return hd[hb++] = hz, !0;
		return !1
	}, this.i3 = function() {
		for (var i4, a0 = hb - 1; 0 <= a0; a0--)
			if (hd[a0] === a2.f1) {
				for (hb--, i4 = a0; i4 < hb; i4++) hd[i4] = hd[i4 + 1];
				return !0
			} return !1
	}, this.i5 = function(player) {
		for (var i4, a0 = hb - 1; 0 <= a0; a0--)
			if (aU.i6(player, hd[a0]))
				for (hb--, i4 = a0; i4 < hb; i4++) hd[i4] = hd[i4 + 1];
		return 0 === hb
	}, this.i7 = function() {
		for (var a0 = hb - 1; 0 <= a0; a0--)
			if (b2.en.i8(hd[a0])) return !0;
		return !1
	}, this.i9 = function() {
		for (var a0 = hb - 1; 0 <= a0; a0--) b2.en.i8(hd[a0]) || (hd[a0] = hd[--hb]);
		return 0 < hb
	}, this.iA = function(player) {
		for (var i4, iB = hd[0], iC = aX.et[iB] + aU.fb(iB, player), a0 = hb - 1; 1 <= a0; a0--)(i4 = aX.et[hd[a0]] + aU.fb(hd[a0], player)) < iC && (iB = hd[a0], iC = i4);
		return iB
	}, this.iD = function(player) {
		var iE, iF = hd[0];
		if (1 !== hb)
			for (var iG = bB.el(aX.hK[player] + aX.hJ[player], 2), iH = bB.el(aX.hM[player] + aX.hL[player], 2), iI = iJ(iG - bB.el(aX.hK[iF] + aX.hJ[iF], 2)) + iJ(iH - bB.el(aX.hM[iF] + aX.hL[iF], 2)), a0 = hb - 1; 1 <= a0; a0--)(iE = iJ(iG - bB
				.el(aX.hK[hd[a0]] + aX.hJ[hd[a0]], 2)) + iJ(iH - bB.el(aX.hM[hd[a0]] + aX.hL[hd[a0]], 2))) < iI && (iI = iE, iF = hd[a0]);
		return iF
	}, this.iK = function() {
		for (var iL = hd, iM = iL[0], et = aX.et, iN = et[iM], a0 = hb - 1; 1 <= a0; a0--) {
			var f4 = iL[a0],
				i4 = et[f4];
			iN < i4 && (iM = f4, iN = i4)
		}
		return iM
	}
}

function hZ() {
	function ic(player, hr, iS) {
		3 <= iS && 2142 < bT.eq() && (hr === a2.f1 || aX.et[hr] < bB.el(aX.et[player], 20)) && a3.iX(player, 20)
	}

	function ih(player, hs, hr, iS) {
		3 <= iS && iS < 6 && bB.el(aX.et[player], 8) > aX.et[hr] && (hs = Math.max(bB.el(11 * aX.et[hr], 5), bB.el(aX.et[player], 10)));
		iS = aX.ey[player].length;
		ab.hW.hh(player, hr), ab.hW.hq(player, hr, iS, hs)
	}

	function ib(player, hs) {
		var hr = a2.f1,
			ex = aX.ey[player].length;
		ab.hW.hg(player), aX.ey[player].length !== ex && ab.hW.hq(player, hr, ex, hs)
	}
	this.hm = new Uint8Array(a2.f1), this.dD = function() {
		this.hm.fill(0)
	}, this.iO = function(player, hs) {
		var iQ, iS, iT, iU;
		a2.hl && (this.hm[player] = 0), aU.iP(player) && (iQ = aV.iR(player), 3 <= (iS = a3.hs[player]) && iS < 6 && (hs = Math.max(aX.et[player] - iQ, hs)), iT = aX.fG[player].length, iU = aX.fF[player].length, 30 * aX.ep[player] > a2.iV && iW[
			player] < 10 && 100 * iU <= iT && a3.iX(player, 10), a2.hl ? function(player, hs, iS, iQ) {
			var hr;
			if (ab.hW.hw(player, !1) || ab.hW.i2(player, !1)) {
				if (ab.hY.hm[player] = 1, !ab.hW.i5(player))
					if (ab.hW.i3()) ib(player, hs), ic(player, a2.f1, iS);
					else {
						if (ao.ie(a3.ig[iS])) hr = ab.hW.iA(player);
						else {
							if (ab.hW.i7() && ao.ie(a3.ii[iS]) && ab.hW.i9(), 6 === iS) return ih(player, hs, ab.hW.iK(), iS);
							hr = ab.hW.iD(player)
						}
						ih(player, hs, hr, iS), ic(player, hr, iS)
					}
			} else bD.iZ.ha(player) || ! function(player, hs, iS, iQ) {
				var a0, i4, ik, il = bU.il,
					im = il[player];
				if (0 !== im) {
					var et = aX.et,
						io = et[player],
						ep = aX.ep;
					if (player < a2.ip && (hs = io), !(io < ep[player] || 5 === iS && io < iQ || 4 === iS && io < bB.el(iQ, 2))) {
						var ex = iq,
							ir = is,
							it = (a0 = ao.i1(ex), ab.hY.hm);
						for (i4 = 0; i4 < ex; i4++)
							if (ik = ir[(i4 + a0) % ex], 1 === it[ik] && il[ik] === im) return b0.iu.iv(player, ik, hs);
						var iw = a2.iw,
							fG = aX.fG;
						for (i4 = 0; i4 < ex; i4++)
							if (ik = ir[(i4 + a0) % ex], et[ik] < iw * ep[ik] && fG[ik].length && il[ik] === im && ik !== player) return b0.iu.iv(player, ik, hs)
					}
				}
			}(player, hs, iS, iQ)
		}(player, hs, iS, iQ) : (!iU || iT && (iT < iU && !ao.i1(10) || 100 * iU <= iT && ao.i1(3) || !ao.i1(8))) && bD.iZ.ha(player) || function(player, hs, iS) {
			!ab.hW.hw(player, !0) && !ab.hW.i2(player, !0) || ab.hW.i5(player) || (ab.hW.i3() ? ib(player, hs) : ao.ie(a3.ig[iS]) ? ih(player, hs, ab.hW.iA(player), iS) : 5 === iS ? ih(player, hs, ab.hW.iK(), iS) : (ab.hW.i7() && ao.ie(a3
				.ii[iS]) && ab.hW.i9(), ih(player, hs, 6 === iS ? ab.hW.iK() : ab.hW.iD(player), iS)))
		}(player, hs, iS))
	}
}

function bl() {
	var ix = new Uint8Array(a2.f1),
		iy = new Uint16Array(a2.f1),
		iz = new Uint16Array(a2.f1),
		j0 = new Uint8Array(a2.f1),
		j1 = (this.hs = new Uint8Array(a2.f1), new Uint16Array(a2.f1)),
		j2 = new Uint16Array(a2.f1);

	function jG(a0) {
		ix[a0] = 1 + bB.el(j1[a0] * ao.random(), 10 * ao.value(100))
	}
	this.j3 = null, this.ii = [97, 94, 70, 40, 20, 0, 100], this.j4 = [500, 450, 400, 300, 80, 50, 50], this.ig = [0, 0, 5, 25, 50, 100, 0], this.j5 = [60, 74, 112, 200, 256, 512, 512], this.dE = function() {
		this.j3 = [L(0), L(1), L(2), L(3), L(4), L(5), ""]
	}, this.dD = function() {
		ix.fill(0), iy.fill(0), iz.fill(0), j0.fill(0), this.hs.fill(0), j1.fill(0), j2.fill(0);
		var j6 = a2.ip;
		if (ay.j7) {
			if (ay.j8.j9)
				for (a0 = a2.jA - 1; 0 <= a0; a0--) this.hs[a0 + j6] = ay.j8.j9[a0 + 1]
		} else if (9 === a2.jB) this.jC();
		else if (a2.jD)
			if (a2.hl)
				for (a0 = a2.jA - 1; 0 <= a0; a0--) this.hs[a0 + j6] = aQ.jF[bU.il[a0 + j6] - 1].f6;
			else
				for (a0 = a2.jA - 1; 0 <= a0; a0--) this.hs[a0 + j6] = aQ.jF[0].f6;
		else
			for (var jE = 8 === a2.jB ? 1 : 0, a0 = a2.jA - 1; 0 <= a0; a0--) this.hs[a0 + j6] = jE;
		for (a0 = 0; a0 < j6; a0++) this.hs[a0] = 6;
		var ex = a2.f1;
		for (a0 = 0; a0 < ex; a0++) this.hs[a0] <= 2 ? (j0[a0] = 5, j1[a0] = j2[a0] = 1040, 0 === this.hs[a0] ? (iy[a0] = 980, iz[a0] = 980) : 1 === this.hs[a0] ? (iy[a0] = 980, iz[a0] = 920, j1[a0] = j2[a0] = 1100) : (iy[a0] = 825, iz[a0] =
			750)) : this.hs[a0] <= 4 ? (j0[a0] = 1 + ao.i1(20), 3 === this.hs[a0] ? (iy[a0] = iz[a0] = 500, j1[a0] = j2[a0] = 1e3) : (j2[a0] = 250 + ao.i1(1501), j1[a0] = 500 + ao.i1(501), iy[a0] = 300 + ao.i1(201), iz[a0] = 100 + ao.i1(
			201))) : this.hs[a0] <= 5 ? (j1[a0] = 1e3, j2[a0] = 1e3, j0[a0] = 35 + ao.i1(16), iy[a0] = 300 + ao.i1(201), iz[a0] = 50 + ao.i1(101)) : (j1[a0] = j2[a0] = 800, j0[a0] = 5, iy[a0] = 10, iz[a0] = 250), jG(a0)
	}, this.jC = function() {
		for (var a0, fw = 0, j6 = a2.ip, i4 = 0; i4 < 6; i4++) {
			for (a0 = fw + ap.jH[i4] - 1; fw <= a0; a0--) this.hs[a0 + j6] = i4;
			fw += ap.jH[i4]
		}
	}, this.iX = function(f4, value) {
		ix[f4] = Math.min(value, ix[f4])
	}, this.ha = function(f4) {
		0 == --ix[f4] && ! function(f4) {
			(function(f4) {
				j1[f4] !== j2[f4] && (j1[f4] += j1[f4] < j2[f4] ? 3 : -3);
				iy[f4] !== iz[f4] && (iy[f4] += iy[f4] < iz[f4] ? j0[f4] : -j0[f4], iy[f4] = (Math.abs(iy[f4] - iz[f4]) <= j0[f4] ? iz : iy)[f4]);
				ix[f4] = bB.el(j1[f4], 10)
			})(f4), ab.hY.iO(f4, bB.el(iy[f4] * aX.et[f4], 1e3))
		}(f4)
	}, this.jK = function(f4, jL) {
		j1[f4] = j2[f4] = jL
	}
}

function hU() {
	var jM = new Uint16Array(a2.f1);

	function jR(player, jP) {
		for (var ex = bE.dv[0], e2 = bE.e2, ja = -1, jb = a2.f1, a0 = 0; a0 < ex; a0++) {
			var iI, f4 = e2[a0];
			gC(player, f4) && (iI = bC.gy(jP, bC.hI(f4)), -1 === ja || iI < ja) && (ja = iI, jb = f4)
		}
		return jb
	}

	function jT(jQ, jP) {
		if (jQ === a2.f1) return 0;
		for (var fG = aX.fG[jQ], jZ = fG.length, ex = Math.min(jZ, 10), jb = 0, ja = bC.gy(fG[jb] >> 2, jP), a0 = 0; a0 < ex; a0++) {
			var jc = ao.i1(jZ),
				iI = bC.gy(fG[jc] >> 2, jP);
			iI < ja && (ja = iI, jb = jc)
		}
		return fG[jb] >> 2
	}

	function jW(player, jP, hr, jf) {
		var jg;
		(jf === a2.f1 || (jg = bC.hI(hr), jf = bC.hI(jf), bC.gy(jP, jg) < bC.gy(jP, jf))) && (jM[player] = hr)
	}
	this.dD = function() {
		jM.fill(a2.f1)
	}, this.ha = function(player) {
		var jP, jS, jQ, hr = function(player) {
			var hr = jM[player];
			if (hr !== a2.f1) {
				if (b2.en.je(hr)) return hr;
				jM[player] = a2.f1
			}
			return a2.f1
		}(player);
		return function(player) {
			for (var ir = is, jZ = iq, ex = Math.min(jZ, jZ < 17 && 5 === ao.i1(20) ? 1 : 16), f5 = ao.i1(jZ), e2 = bE.e2, fG = aX.fG, jL = 0, a0 = 0; a0 < ex; a0++) {
				var f4 = ir[(a0 + f5) % jZ];
				f4 !== player && fG[f4].length && (e2[jL++] = f4)
			}
			bE.dv[0] = jL
		}(player), 0 !== bE.dv[0] && (0 < (jS = jT(jQ = jR(player, jP = bC.hN(player)), jP)) && bD.jU.jV(player, jS) ? (jW(player, jP, jQ, hr), !0) : 0 < (jQ = function(player, jP) {
			for (var ex = bE.dv[0], e2 = bE.e2, jd = jM, f5 = 0, a0 = 0; a0 < ex; a0++) {
				var f4 = e2[a0],
					f4 = jd[f4];
				f4 !== a2.f1 && b2.en.je(f4) && player !== f4 && gC(player, f4) && (e2[f5++] = f4)
			}
			return 0 !== (bE.dv[0] = f5) ? jT(jR(player, jP), jP) : 0
		}(player, jP)) && bD.jU.jV(player, jQ) ? (jW(player, jP, aS.f8(jQ << 2), hr), !0) : !!(0 < (jS = jT(hr, jP)) && bD.jU.jV(player, jS)))
	}
}

function hS() {
	this.ha = function(player) {
		var fu = function(player) {
			var ex = ab.hP.jj;
			if (0 === ex) return -1;
			for (var jZ = Math.min(ex, ab.performance.jk ? ex : 10), dV = ab.hP.dV, i0 = bB.el(ao.random() * ex, ao.value(100)), d = i0 + jZ, jl = ao.hO(aX.hJ[player], aX.hK[player]), jm = ao.hO(aX.hL[player], aX.hM[player]), jb = -1, iI = bC
					.gz(0, 0, bI.eS, bI.eT), a0 = i0; a0 < d; a0++) {
				var f5 = a0 % ex,
					jn = bC.gl(jl, jm, dV[f5]);
				jn < iI && (iI = jn, jb = f5)
			}
			return -1 !== jb ? dV[jb] : -1
		}(player);
		return -1 !== fu && bD.jU.jV(player, fu)
	}
}

function hV() {
	this.jk = 0, this.dD = function() {
		this.jk = 0
	}, this.ha = function() {
		if (!this.jk && bT.eq() % 30 == 7 && b2.en.jq(75) && (ab.performance.jk = 1))
			if (a2.hl) {
				bV.jt(bV.ju());
				var e5 = bE.e3,
					ex = bE.dv[0];
				if (0 !== ex)
					for (var jv = Math.min(100 + 10 * (ex - 1), 400), a0 = 0; a0 < ex; a0++) a3.jK(e5[a0], jv)
			} else a3.jK(jw[0], 100)
	}
}

function hQ() {
	var jx, jy, jz = 300,
		k0 = 300;
	this.jj = 0, this.dV = new Uint32Array(512), this.dD = function() {
		jy = jx = 0, this.jj = 0
	}, this.ha = function() {
		if (function() {
				var ex = ab.hP.jj;
				if (0 === ex) return 1;
				var dV = ab.hP.dV;
				if (bT.eq() % 35 == 6) {
					for (var a0 = ex - 1; 0 <= a0; a0--) aS.f9(dV[a0] << 2) || (ex--, dV[a0] = dV[ex]);
					ab.hP.jj = ex
				}
				return ex < dV.length
			}() && !(jz <= jx)) {
			var a0, u = bI.eS,
				k3 = u - 2,
				ex = k3 * (bI.eT - 2),
				k4 = jz,
				dV = ab.hP.dV,
				jZ = ab.hP.jj,
				k5 = dV.length,
				f5 = Math.min(jy + k4 * ((1 + 19 * ab.performance.jk) * k0), ex);
			for (a0 = jy; a0 < f5; a0 += k4) {
				var fw = 4 * (a0 % k3 + (bB.el(a0, k3) + 1) * u + 1);
				if (aS.f9(fw) && (dV[jZ] = fw >> 2, ++jZ === k5)) {
					a0 += k4;
					break
				}
			}(jy = a0) >= ex && (jy = ++jx), ab.hP.jj = jZ
		}
	}
}

function k6() {
	aC.ha(), aW.ha(), aL.k7(), aq.k8.ha()
}

function k9() {
	ar.ha(), a5.ha(), aV.ha(), av.ha(), a4.ha(), a6.ha(), ab.ha(), bD.k8.ha(), kA(), aK.ha(), ap.ha(), bH.ha(), bL.ha(), aW.ha(), aW.kB(), aL.ha(), bF.ha(), aJ.ha(), aE.ha(), aC.ha(), aw.ha(), aG.ha(), al.ha(), bR.ha(), bV.ha(), aq.k8.ha(), aq.kC
	.ha(), i.ha(), b1.ha(), bT.ha()
}

function kD() {
	a7.ha(), aM.ha(), aF.ha(), ai.ha(), b3.ha(), am.kE()
}

function kF() {
	aK.kG(!1), aE.kG(), aL.kG(!1), aJ.kG(), aG.kG(), al.kG(), aW.kG(!1), bV.kH()
}

function kI() {
	aW.kG(!1) && (bT.dK = !0), aq.k8.ha()
}

function bm() {
	var kJ, kK, kL, kM, kN;

	function kQ(kS) {
		for (var a0 = kJ - 1; 0 <= a0; a0--) 0 === kL[kK[a0]] && aX.ep[kK[a0]] >= kS && eU(kK[a0])
	}

	function kP(player) {
		var dp;
		64 === kL[player] ? kL[player] = 6 : (dp = aX.ep[player], kL[player] = dp < 1e3 ? 3 : dp < 1e4 ? 2 : dp < 6e4 ? 1 : 0)
	}
	this.dD = function() {
		kM = kN = 0, kJ = 0, kK = new Uint16Array(a2.f1), kL = new Uint8Array(a2.f1)
	}, this.ha = function() {
		var a0;
		for (kM = bR.ev[13], kN = aX.et[a2.es], a0 = kJ - 1; 0 <= a0; a0--) 64 === kL[kK[a0]] ? kP(kK[a0]) : 0 == kL[kK[a0]]-- && (kP(kK[a0]), eU(kK[a0]));
		16e4 <= aX.ep[jw[0]] && (kQ(16e4), 3e5 <= aX.ep[jw[0]]) && kQ(3e5), aX.ep[a2.es] > bR.ev[7] && (bR.ev[7] = aX.ep[a2.es]), bR.ev[14] += kN - aX.et[a2.es] + kM - bR.ev[13]
	}, this.er = function(player) {
		for (var hy, a0 = kJ - 1; 0 <= a0; a0--)
			if (player === kK[a0]) {
				for (kJ--, hy = a0; hy < kJ; hy++) kK[hy] = kK[hy + 1];
				return
			}
	}, this.hp = function(player, kT) {
		for (var a0 = kJ - 1; 0 <= a0; a0--)
			if (player === kK[a0]) return;
		kK[kJ++] = player, kL[player] = kT ? 2 : 64
	}
}

function bn() {
	var size, iZ;
	this.dD = function() {
		size = a2.jA, iZ = new Uint16Array(a2.f1);
		for (var ip = a2.ip, a0 = a2.jA - 1; 0 <= a0; a0--) iZ[a0] = ip + a0
	}, this.ha = function() {
		for (var a0 = size - 1; 0 <= a0; a0--)
			if (0 === aX.kW[iZ[a0]]) {
				hy = void 0;
				var hy = a0;
				size--, iZ[hy] = iZ[size]
			} else a3.ha(iZ[a0])
	}, this.kV = function(f4) {
		iZ[size++] = f4
	}
}

function bo() {
	var kY, kZ, kJ, kK, kL, ka, kb, kc;

	function kf(a0) {
		var hy;
		for (kJ--, hy = a0; hy < kJ; hy++) kK[hy] = kK[hy + 1], kL[hy] = kL[hy + 1], ka[hy] = ka[hy + 1], kb[hy] = kb[hy + 1], kc[hy] = kc[hy + 1]
	}
	this.dD = function() {
		kY = 1, kJ = 0, kZ = 2 * a2.f1, kK = new Uint16Array(kZ), kL = new Uint8Array(kZ), ka = new Uint16Array(kZ), kb = new Uint32Array(kZ), kc = new Uint32Array(kZ)
	}, this.kd = function(ke, position) {
		kb[ke] = position
	}, this.ha = function() {
		for (var a0 = kJ - 1; 0 <= a0; a0--) 0 == kL[a0]-- && (kL[a0] = 2, af.ha(a0, ka[a0], kK[a0], kb[a0], kc[a0]))
	}, this.er = function(player, id) {
		for (var a0 = kJ - 1; 0 <= a0; a0--)
			if (player === kK[a0] && id === ka[a0]) return void kf(a0)
	}, this.kg = function(player) {
		for (var a0 = kJ - 1; 0 <= a0; a0--) player === kK[a0] && (af.kh(player, kb[a0]), kf(a0))
	}, this.hp = function(player, i0, ki) {
		if (kZ <= kJ) return 0;
		kK[kJ] = player, kL[kJ] = 0, ka[kJ] = kY, kb[kJ] = i0, kc[kJ] = ki;
		player = kY;
		return kJ++, kY = 2 * kZ < ++kY ? 1 : kY, player
	}, this.kk = function() {
		if (!(h7 < 40 || 0 === kJ)) {
			var hy, ff, fg, a0, fontSize, ko, hs, kp = h6 / h7,
				kq = h8 / h7,
				kr = (an.u + h6) / h7,
				ks = (an.iE + h8) / h7;
			for (b2.kt.textAlign(ku, 1), b2.kt.textBaseline(ku, 1), hy = kJ - 1; 0 <= hy; hy--) ff = aS.kv(kb[hy]), fg = aS.kw(kb[hy]), a0 = kK[hy], kp - 1 < ff && ff < kr && kq - 1 < fg && fg < ks && 0 !== aX.kW[a0] && ((fontSize = Math.floor(
				.94 * h7 * aW.kx(a0))) < 6 || (ff = Math.floor(an.u * (ff + .5 - kp) / (kr - kp)), fg = Math.floor(an.iE * (fg + .48 - kq) / (ks - kq)), ku.font = b2.kt.ky(1, fontSize), ku.fillStyle = p.kz, hs = aU.ee(a0, aU.l0(a0, ka[
				hy])), ku.fillText(bX.dV.data[7].value ? b2.l1.l2(hs) : aX.l3[a0], ff, fg), (ko = Math.floor(.5 * fontSize)) < 6) || (ku.font = b2.kt.ky(1, ko), ku.fillText(bX.dV.data[7].value ? aX.l3[a0] : b2.l1.l2(hs), ff, fg + Math
				.floor(.82 * fontSize))))
		}
	}
}

function bp() {
	var l4, l5, l6, l7, l8, l9, lA, lB, lC, lD, lE, lF, lG, lH = !1,
		lI = !1;

	function lJ(lK) {
		lF = bT.dn, l6 = l7 = l5 = 0, l8 = (lG = 33) / lK, l4 = 1 / (lK / lG / 4), l9 = (an.u / 2 + h6) / h7, lA = (an.iE / 2 + h8) / h7, lB = h7
	}

	function lX(lZ) {
		Math.abs(Math.log(lE / lB)) < .125 && (lE = lZ * lB)
	}

	function lW(kp, kq, kr, ks) {
		lC = (kp + kr + 1) / 2, lD = (kq + ks + 1) / 2;
		kr = an.u / (kr - kp + 1), kp = an.iE / (ks - kq + 1);
		lE = .9 * (kr < kp ? kr : kp)
	}
	this.lL = function() {
		return lH
	}, this.lM = function() {
		lJ(1), this.lN(0, 0, bI.eS - 1, bI.eT - 1), a2.fz || a2.fj || this.lO(a2.es, 3e3, !0, .3)
	}, this.lO = function(player, lK, lP, zoom) {
		a2.lQ || lH && !lP && lI || 0 === aX.ep[player] || (aH.lR = !1, lI = lP, lJ(lK), function(player) {
			lC = (aX.hJ[player] + aX.hK[player] + 1) / 2, lD = (aX.hL[player] + aX.hM[player] + 1) / 2
		}(player), function(zoom, player) {
			var gr = aX.hK[player] - aX.hJ[player] + 1,
				player = aX.hM[player] - aX.hL[player] + 1,
				hy = an.u / gr,
				i4 = an.iE / player,
				hy = (lE = hy < i4 ? hy : i4, 0 !== zoom ? zoom : gr < 20 && player < 20 ? .5 : .9);
			lE *= hy, lX(7 / 8)
		}(zoom, player), lH = !0, ae.lU())
	}, this.lV = function(lK) {
		a2.fj || a2.lQ || (aH.lR = !1, lI = !1, lJ(lK), lW(0, 0, bI.eS - 1, bI.eT - 1), lX(7 / 8), lH = !0, ae.lU())
	}, this.lN = function(kp, kq, kr, ks) {
		lW(kp, kq, kr, ks), h7 = lE, aH.la(lC, an.u / 2), aH.lb(lD, an.iE / 2), bO.lc()
	}, this.ld = function() {
		return !(lH && lI || (lH = !1))
	}, this.ha = function() {
		var lg, lh, f6, lk;
		lH && (l5 < .5 ? l7 < l8 && (l7 += l8 * l4, l6 = l5) : 1 - l6 < l5 && (l7 = (l7 -= l8 * l4) < l8 * l4 ? l8 * l4 : l7), lF = lF >= bT.dn ? bT.dn - 1 : lF, f6 = bT.dn - lF, l5 = 1e3 < f6 || 1 < (l5 += l7 * f6 / lG) ? 1 : l5, lF = bT.dn,
			f6 = h7, lg = h6, lh = h8, f6 = (h7 = lB * Math.pow(lE / lB, l5)) / f6, lk = 1 - (lB * Math.pow(lE / lB, 1 - l5) - lB) / (lE - lB), aH.la(l9 + lk * (lC - l9), an.u / 2), aH.lb(lA + lk * (lD - lA), an.iE / 2), aW.zoom(f6, (lg *
				f6 - h6) / (1 - f6), (lh * f6 - h8) / (1 - f6)), bO.lc(), 1 <= l5 && (lH = !1, bP.ll = !0), bT.dK = !0)
	}
}

function bg() {
	var ik = b2.color;
	this.kz = ik.lm(0, 0, 0), this.ln = ik.lo(0, 0, 0, .7), this.lp = ik.lo(0, 0, 0, .5), this.lq = ik.lo(0, 0, 0, .85), this.lr = ik.lo(0, 0, 0, .75), this.ls = ik.lo(0, 0, 0, .6), this.lt = ik.lo(0, 0, 0, .35), this.lu = ik.lm(255, 255, 255), this
		.lv = ik.lo(255, 255, 255, .3), this.lw = ik.lo(255, 255, 255, .6), this.lx = ik.lo(255, 255, 255, .4), this.ly = ik.lo(255, 255, 255, .25), this.lz = ik.lo(255, 255, 255, .85), this.m0 = ik.lo(255, 255, 255, .75), this.m1 = ik.lo(255, 255,
			255, .15), this.m2 = ik.lm(128, 128, 128), this.m3 = ik.lo(64, 64, 64, .75), this.m4 = ik.lo(88, 88, 88, .83), this.m5 = ik.lo(60, 60, 60, .85), this.m6 = ik.lo(80, 60, 60, .85), this.m7 = ik.lm(30, 255, 30), this.m8 = ik.lm(0, 200, 0),
		this.m9 = ik.lm(128, 255, 128), this.mA = ik.lo(10, 65, 10, .75), this.mB = ik.lo(0, 255, 0, .6), this.mC = ik.lo(0, 255, 0, .5), this.mD = ik.lo(0, 200, 0, .5), this.q = ik.lo(0, 100, 0, .75), this.mE = ik.lo(0, 60, 0, .8), this.mF = ik.lo(
			0, 255, 0, .3), this.mG = ik.lo(0, 180, 0, .6), this.mH = ik.lo(0, 120, 0, .85), this.mI = ik.lm(0, 120, 0), this.mJ = ik.lo(0, 70, 0, .85), this.mK = ik.lm(255, 120, 120), this.mL = ik.lm(255, 160, 160), this.mM = ik.lm(255, 70, 70),
		this.mN = ik.lm(230, 0, 0), this.mO = ik.lo(220, 0, 0, .6), this.mP = ik.lo(255, 100, 100, .8), this.mQ = ik.lo(100, 0, 0, .85), this.mR = ik.lo(60, 0, 0, .85), this.mS = ik.lo(200, 0, 0, .6), this.mT = ik.lo(120, 0, 0, .85), this.mU = ik.lm(
			255, 70, 10), this.mV = ik.lo(0, 60, 60, .85), this.mW = ik.lo(10, 60, 60, .9), this.mX = ik.lo(0, 96, 96, .75), this.mY = ik.lm(160, 160, 255), this.mZ = ik.lo(0, 40, 90, .75), this.ma = ik.lo(0, 0, 255, .6), this.mb = ik.lm(200, 200,
			255), this.mc = ik.lm(255, 120, 100), this.md = ik.lo(255, 255, 0, .5), this.me = ik.lo(255, 255, 150, .2), this.mf = ik.lm(255, 255, 0), this.mg = ik.lm(255, 255, 200), this.mh = ik.lo(200, 200, 0, .6), this.mi = ik.lo(140, 120, 0, .75),
		this.mj = ik.lo(180, 160, 40, .75), this.mk = ik.lo(70, 50, 20, .85), this.ml = ik.lo(30, 30, 0, .85), this.mm = ik.lo(255, 140, 0, .75), this.mn = ik.lo(0, 0, 0, 0)
}

function cg() {
	this.g0 = new mo, this.en = new mp, this.mq = new mr, this.ms = new mt, this.iu = new mu
}

function mo() {
	this.g1 = function(fu) {
		a2.jD ? b0.mq.g1(a2.es, fu) : aq.mv.mw(fu)
	}, this.g9 = function(h5, hr) {
		a2.jD ? b0.mq.g9(a2.es, h5, hr) : aq.mv.mx(h5, hr)
	}, this.my = function(h5, mz) {
		a2.jD ? b0.mq.n0(a2.es, h5, mz) : aq.mv.n1(h5, mz)
	}, this.g6 = function(h5, fu) {
		a2.jD ? b0.mq.g6(a2.es, h5, fu) : bD.g4.g5(a2.es, fu) && aq.mv.n2(h5, fu)
	}, this.n3 = function(n4, fu) {
		a2.jD ? b0.mq.n3(a2.es, n4, fu) : bD.g4.n5(a2.es, n4, fu) && aq.mv.n6(n4, fu)
	}, this.n7 = function(hr) {
		a2.jD ? b0.mq.n7(a2.es, hr) : aq.mv.n8(hr)
	}, this.n9 = function(nA) {
		a2.jD ? b0.mq.nB(a2.es, nA) : aq.mv.nC(nA)
	}, this.nD = function(nE) {
		a2.jD ? b0.mq.nD(a2.es, nE) : aq.mv.nF(nE)
	}, this.nG = function() {
		a2.jD ? b0.mq.nG(a2.es) : aq.mv.nH()
	}, this.nI = function() {
		a2.jD ? b0.mq.nI(a2.es) : aq.mv.n2(1, 0)
	}
}

function mu() {
	this.iv = function(player, mz, hs) {
		b2.en.nJ(player, hs, mz) && (aV.my(player, mz), mz < a2.ip) && ao.random() < ao.value(10) && (ab.hY.hm[mz] = 0)
	}, this.nK = function(player, mz, hs) {
		b2.en.nL(hs, mz) && (b2.en.nM(mz, bE.dw[0]), bR.nN(player, mz), aW.nO(mz, bE.dw[0]))
	}
}

function mp() {
	this.nP = function(nA, player) {
		aC.n9(a2.es, player, nA), aq.mv.nQ(nA, player)
	}, this.nR = function(player) {
		aC.nS(player, 0), aq.mv.nT(player)
	}, this.nU = function(nV, player) {
		aC.nW(nV, player), aq.mv.nX(nV, player)
	}, this.nY = function() {
		a2.jD || a2.fj || aq.nZ.nY()
	}
}

function mt() {
	this.ha = function(a1) {
		var id, e6, ld;
		for (b7.dD(a1), b7.ke += 2, ld = 8 * b7.size; b7.ke + 8 <= ld;) id = b7.na(4), e6 = b7.na(9), 0 === id ? this.nb(id, e6, b7.na(22)) : 1 === id ? this.nb(id, e6, b7.na(10), b7.na(10)) : 2 === id ? this.nb(id, e6, b7.na(10), b7.na(9)) :
			3 === id || 4 === id ? this.nb(id, e6, b7.na(10), b7.na(22)) : 5 === id || 6 === id ? this.nb(id, e6, b7.na(10)) : 7 === id ? this.nb(id, e6, b7.na(1)) : this.nb(id, e6)
	}, this.nc = [], this.nd = function() {
		for (var nf = 0, ng = 0, nh = 0, ni = 0, nj = 0, nk = 0, a0 = 0; a0 < 512; a0++) nf += aX.kW[a0], ng += aX.ep[a0], nh += aX.et[a0], ni += bD.k8.nl[a0];
		nj += bD.k8.nm, nk += iq, this.nc.push(nh % 1073741824 * 4 + (nf + ng + ni + nj + nk) % 4)
	}, this.nb = function(id, e6, e8, eA) {
		0 === id ? b0.mq.g1(e6, e8) : 1 === id ? b0.mq.g9(e6, e8, eA) : 2 === id ? b0.mq.n0(e6, e8, eA) : 3 === id ? b0.mq.g6(e6, e8, eA) : 4 === id ? b0.mq.n3(e6, e8, eA) : 5 === id ? b0.mq.n7(e6, e8) : 6 === id ? b0.mq.nB(e6, e8) : 7 === id ?
			b0.mq.nD(e6, e8) : 8 === id ? b0.mq.nG(e6) : b0.mq.nn(e6)
	}
}

function mr() {
	this.g1 = function(player, fu) {
		b2.en.fl(0) && b2.en.fm(player) && bC.h9(fu) && (b1.no.np(0, player, fu), a2.nq.ho(player, fu))
	}, this.g9 = function(player, h5, hr) {
		b2.en.fl(1) && b2.en.fm(player) && b2.en.nr(player, hr) && b2.en.ns(player, h5, 12, 0) && b2.en.nt(player, hr) && ((hr = aU.i6(player, bE.e1[0])) || aU.iP(player)) && (aX.nu[player]++, b1.no.np(1, player, h5, bE.e1[0]), ab.hW.he(player,
			hr)) && (b2.en.nv(player), bR.nw(player, h5), ab.hW.hk(player))
	}, this.n0 = function(player, h5, mz) {
		b2.en.fl(1) && b2.en.fm(player) && a2.hl && b2.en.nr(player, mz) && b2.en.nx(player, mz) && b2.en.nJ(player, b2.en.h4(player, h5), mz) && (b1.no.np(2, player, h5, mz), aV.my(player, mz))
	}, this.g6 = function(player, h5, fu) {
		b2.en.fl(1) && b2.en.fm(player) && (0 === fu && 1 === h5 ? this.nI(player) : bC.h9(fu) && bD.k8.nm !== bD.k8.ny && bD.k8.nl[player] !== bD.k8.nz && 0 !== aX.fG[player].length && b2.en.ns(player, h5, 32, 0) && bD.jU.jV(player, fu) && (b1
			.no.np(3, player, h5, fu), b2.en.nv(player), bD.k8.o0(player)))
	}, this.n3 = function(player, n4, fu) {
		b2.en.fl(1) && b2.en.fm(player) && bC.h9(fu) && bD.g4.o1(player, n4) && bD.jU.o2(fu) && (b1.no.np(4, player, n4, fu), b2.en.o3(player, 8), bD.k8.n3())
	}, this.n7 = function(player, hr) {
		b2.en.fl(1) && b2.en.fm(player) && (hr = Math.min(hr, a2.f1), aU.i6(player, hr)) && (b1.no.np(5, player, hr), aU.o4(player, hr))
	}, this.nB = function(player, nA) {
		(b2.en.fl(1) || b2.en.fl(2)) && b2.en.fm(player) && (nA = bB.o5(nA, 0, 1023), b1.no.np(6, player, nA), aW.o6(player, 0, nA))
	}, this.nD = function(player, nE) {
		b2.en.fl(1) && b2.en.fm(player) && (b1.no.np(7, player, nE), al.o7(player, nE))
	}, this.nG = function(player) {
		(b2.en.fl(0) || b2.en.fl(1)) && b2.en.fm(player) && bG.nG(player) && b1.no.np(8, player)
	}, this.nn = function(player) {
		bG.nn(player), b1.no.np(9, player)
	}, this.nI = function(player) {
		al.o8(player) && (b1.no.np(3, player, 1, 0), al.nI(player))
	}
}

function o9() {
	var oB;
	this.oA = [], this.oB = document.createElement("div"), this.oC = function(oD, marginTop) {
		var title = document.createElement("h2");
		title.textContent = oD, title.style.margin = "0", title.style.marginBottom = "0.6em", marginTop && (title.style.marginTop = marginTop), title.style.fontSize = "1.4em", title.style.overflowWrap = "break-word", this.oB.appendChild(title)
	}, this.oE = function(oD) {
		var oF = document.createElement("p");
		return oF.textContent = oD, oF.style.fontSize = "0.75em", oF.style.lineHeight = "1.2em", oF.style.marginBottom = "0", this.oB.appendChild(oF), oF
	}, this.oG = function(oH, fontSize) {
		var oB = document.createElement("div");
		oB.innerHTML = oH, oB.style.fontSize = fontSize || "1em", oB.style.lineHeight = "1.2em", this.oB.appendChild(oB)
	}, this.oI = function(oJ) {
		for (var oK = oJ.oK, ex = oK.length, a0 = 0; a0 < ex; a0++) this.oB.appendChild(oK[a0])
	}, this.oL = function(oM) {
		this.oA.push(oM), this.oB.appendChild(oM.d)
	}, this.resize = function() {
		for (var ex = this.oA.length, a0 = 0; a0 < ex; a0++) this.oA[a0].resize && this.oA[a0].resize()
	}, (oB = this.oB).style.position = "absolute", oB.style.height = "auto", oB.style.padding = "0.5em"
}

function oN(oO, oP) {
	var a0, oB = document.createElement("div");

	function oW() {
		var a0, oX, iE, f5, f6, oS = an.oY * oB.offsetWidth,
			oZ = new Float64Array(function(oS) {
				var u = .25 * b2.kt.oT(.6) * an.oU;
				return Math.max(Math.floor(oS / u), 1)
			}(oS)),
			oa = bQ.oa,
			ob = (oS - (oZ.length + 1) * bQ.gap) / (oZ.length * an.oY);
		for (oZ.fill(oa), a0 = 0; a0 < oP.length; a0++) oX = (f6 = oP[a0].oB).style, iE = b2.oc.min(oZ), f5 = oZ.indexOf(iE), oX.top = b2.kt.od(iE), oX.left = b2.kt.od(oa + f5 * (ob + oa)), oX.width = b2.kt.od(ob), b2.kt.oe(f6, 5), oZ[f5] += f6
			.offsetHeight + 3 * oa;
		oB.style.height = b2.kt.od(b2.oc.max(oZ) - 2 * oa)
	}
	for (this.oQ = oP, this.resize = function() {
			var a0;
			for (a0 = 0; a0 < oP.length; a0++) oP[a0].resize();
			oW(), oW()
		}, oB.style.width = "100%", oB.style.maxWidth = "100%", oO.style.lineHeight = "1.5em", oO.style.overflowX = "hidden", oO.style.overflowY = "auto", a0 = 0; a0 < oP.length; a0++) oB.appendChild(oP[a0].oB);
	oO.appendChild(oB)
}

function l(title, og, backgroundColor, oh, oi) {
	var oj = document.createElement("button");

	function oo() {
		if (!1 !== oh) {
			var or = b2.color.os(backgroundColor);
			if (0 < or[0] && or[0] < 255 && or[0] === or[1] && or[0] === or[2]) return
		}
		this.style.backgroundColor = b2.color.oo(backgroundColor, 50)
	}

	function on() {
		og(this) || ot(this)
	}

	function oq() {
		this.style.backgroundColor = backgroundColor
	}

	function op() {
		ot(this)
	}

	function ot(f6) {
		f6.style.backgroundColor = backgroundColor, f6.blur()
	}
	this.button = oj, this.ok = og, this.ol = backgroundColor, this.om = function(ik) {
			ik ? 1 === ik && (ik = p.m5) : ik = p.lq, this.ol = backgroundColor = ik, oj.style.backgroundColor = ik
		}, oj.innerHTML = title, oj.style.color = oi ? p.mf : p.lu, oj.style.userSelect = "none", oj.style.outline = "none", oj.style.overflowWrap = "break-word", this.om(backgroundColor), oj.style.border = "none", oj.style.font = "inherit", oj.style
		.fontSize = "1em", oj.style.padding = "0em 0.3em", oj.onclick = on, oj.addEventListener("mouseover", oo), oj.addEventListener("mouseout", op), oj.addEventListener("focus", oo), oj.addEventListener("blur", oq)
}

function ou(ov, oO) {
	var oB, a0;
	for (this.resize = function() {
			for (var a0 = 0; a0 < ov.length; a0++) b2.kt.oe(ov[a0].button);
			oB.style.gap = oB.style.padding = b2.kt.od(bQ.oa)
		}, (oB = document.createElement("div")).style.display = "grid", oB.style.gridTemplateColumns = "repeat(auto-fill, minmax(9.5em, 1fr))", oB.style.overflowY = "auto", oB.style.gridAutoRows = "5.3em", oB.style.maxHeight = "100%", a0 = 0; a0 < ov
		.length; a0++) ov[a0].button.style.fontSize = "1.2em", oB.appendChild(ov[a0].button);
	oO.appendChild(oB)
}

function ox(oy, oz, p0) {
	this.ff = 0, this.fg = 0, this.u = 0, this.iE = 0, this.resize = function() {
		this.iE = Math.min(b2.kt.oT(p0 || .5) * oy[1] * an.oU, an.iE - 2 * bQ.gap), this.u = Math.min(this.iE * (oy[0] / oy[1]), an.u - 2 * bQ.gap), this.iE = oy[1] * this.u / oy[0], this.ff = bQ.gap + oz[0] * (an.u - this.u - 2 * bQ.gap), this
			.fg = bQ.gap + oz[1] * (an.iE - this.iE - 2 * bQ.gap)
	}, this.p1 = function() {
		return this.ff + .5 * this.u
	}
}

function p2(p3, title, ok) {
	function click() {
		var value = 1 - p3.value;
		this.textContent = (value ? "🟢 " : "⚪ ") + title, bX.p4.p5(p3.ke, value), ok(value)
	}
	var d;
	title = title || L(6), ok = ok || function() {}, this.d = document.createElement("p"), (d = this.d).textContent = (p3.value ? "🟢 " : "⚪ ") + title, d.style.margin = "0", d.style.marginBottom = "0.5em", d.style.cursor = "pointer", d
		.addEventListener("click", click)
}

function p6(oO, oH) {
	var oB = document.createElement("div");
	this.p7 = oB, this.resize = function() {
		oB.style.padding = b2.kt.od(bQ.oa), oB.style.lineHeight = b2.kt.od(b2.kt.p8(.035))
	}, oO.style.overflowX = "hidden", oO.style.overflowY = "auto", oB.innerHTML = oH, oO.appendChild(oB)
}

function p9(pA) {
	var oB = document.createElement("div");
	this.d = oB, this.pB = pA, this.resize = function() {
		for (var ex = pA.length, a0 = 1; a0 < ex; a0++) b2.kt.oe(pA[a0], 4)
	};
	var a0, ex = pA.length;
	for (oB.style.width = "100%", oB.style.height = "2.7em", oB.style.marginTop = "0.6em", oB.style.border = "inherit", a0 = 0; a0 < ex; a0++) pA[a0].style.verticalAlign = "top", pA[a0].style.width = (100 / ex).toFixed(2) + "%", pA[a0].style.height =
		"100%", pA[a0].style.fontSize = "0.75em", oB.appendChild(pA[a0])
}

function pC(p3, type, pD) {
	var d;
	this.d = document.createElement("input"), (d = this.d).type = type ? "number" : "text", d.id = "input" + (p3.title || p3.ke), d.value = p3.value, d.style.width = "100%", d.style.userSelect = "none", d.style.outline = "none", d.style.resize =
		"none", d.style.border = "inherit", d.style.font = "inherit", d.style.color = p.lu, d.style.backgroundColor = p.ln, d.style.fontSize = "1em", d.style.padding = "0.1em 0.2em", -1 !== p3.ke && (d.addEventListener("focus", function() {
			an.pE++
		}), d.addEventListener("blur", function() {
			an.pE--, bX.p4.p5(p3.ke, d.value)
		}), d.addEventListener("keypress", function(event) {
			"Enter" === event.key && (event.preventDefault(), bX.p4.p5(p3.ke, d.value), pD ? pD() : d.blur())
		}))
}

function pF(oO, data) {
	var ex = data.pG.length,
		pH = document.createElement("div"),
		pI = document.createElement("div"),
		pJ = document.createElement("div"),
		pK = new Array(ex),
		oP = new Array(ex),
		pL = new Array(data.pM.length),
		pN = b2.color.lo(70, 70, 0, .35);

	function oo() {
		this.style.backgroundColor = b2.color.oo(pN, 160)
	}

	function op() {
		this.style.backgroundColor = pN
	}

	function oW() {
		var hy;
		for (oO.style.font = b2.kt.ky(0, b2.kt.pY(.026, .5, .03)), a0 = 1; a0 < pL.length; a0++) b2.kt.oe(pL[a0], 4);
		if (b2.kt.oe(pH, 2), ex) {
			for (var pb, pZ = pH.offsetWidth, pa = pJ.offsetWidth, a0 = 0; a0 < pL.length; a0++) pb = .01 * data.pQ[a0] * pa, pL[a0].style.width = (100 * pb / pZ).toFixed(2) + "%";
			var jZ = data.pG[0].length;
			for (a0 = 0; a0 < ex; a0++)
				for (b2.kt.oe(pK[a0], 2), hy = 1; hy < jZ; hy++) b2.kt.oe(oP[a0][hy], 4)
		}
	}
	this.resize = function() {
			oW(), oW()
		}, oO.style.display = "flex", oO.style.flexDirection = "column", pI.style.overflowX = "hidden", pI.style.overflowY = "auto",
		function() {
			var f6, a0, pG = data.pG,
				jZ = ex ? pG[0].length : 0;
			for (a0 = 0; a0 < ex; a0++) {
				pK[a0] = document.createElement("div"), pK[a0].style.backgroundColor = function(a0) {
					return a0 % 2 == 1 ? b2.color.lo(130, 130, 130, .35) : p.lt
				}(a0), pK[a0].style.width = "100%", pK[a0].style.display = "flex", oP[a0] = new Array(jZ);
				for (var hy = 0; hy < jZ; hy++) oP[a0][hy] = f6 = document.createElement("div"), f6.style.display = "flex", f6.style.justifyContent = "center", f6.style.wordBreak = "break-all", f6.style.padding = "0.4em 0em", f6.style.width = data
					.pQ[hy] + "%", f6.innerHTML = pG[a0][hy].dr, 1 === pG[a0][hy].dp && (f6.name = "" + a0, f6.style.color = p.mf, f6.style.backgroundColor = pN, f6.addEventListener("mouseover", oo), f6.addEventListener("mouseout", op), function(f6,
						pT, pU) {
						f6.addEventListener("click", function() {
							this.style.backgroundColor = pN, i.j(8, i.pV, new pW(25, {
								pX: 0,
								pT: pT,
								pU: pU
							}))
						})
					}(f6, pG[a0][hy].dr.split(":")[0], data.pS[a0][hy])), pK[a0].appendChild(f6)
			}
			for (pH.style.display = "flex", pH.style.backgroundColor = b2.color.lo(0, 120, 0, .35), a0 = 0; a0 < pL.length; a0++) pL[a0] = f6 = document.createElement("div"), f6.style.display = "flex", f6.style.justifyContent = "center", f6.style
				.wordBreak = "break-all", f6.style.padding = "0.4em 0em", f6.style.width = data.pQ[a0] + "%", f6.innerHTML = data.pM[a0], pH.appendChild(f6)
		}();
	for (var a0 = 0; a0 < ex; a0++) pJ.appendChild(pK[a0]);
	pI.appendChild(pJ), oO.appendChild(pH), oO.appendChild(pI)
}

function pc() {
	var pg, a0, pd = document.createElement("div"),
		pe = document.createElement("div"),
		pf = document.createElement("div"),
		pJ = document.createElement("div"),
		ov = [],
		pM = ["Best 1v1 Player", "Top Clan", "Leading Clan Member"],
		ph = [1, 0, 2];

	function pi(a0) {
		i.j(8, 0, new pW(21, {
			pj: ph[a0],
			pk: 0,
			pl: 10
		}))
	}
	for (this.show = function() {
			this.p5(i.k8.pm), document.body.appendChild(pd)
		}, this.pn = function() {
			document.body.removeChild(pd)
		}, this.p5 = function(pm) {
			for (var a0 = 0; a0 < ov.length; a0++) ov[ph[a0]].button.innerHTML = pM[a0] + "<br>" + pm[a0]
		}, this.resize = function() {
			var a0, po = bQ.gap,
				iE = b2.kt.pp(.085),
				u = Math.min(4 * iE, an.u - 2 * po),
				ex = ov.length;
			for (b2.kt.pq(pd, po, an.iE - po - iE, u, iE), b2.kt.oe(pd), b2.kt.oe(pe, 6), a0 = 0; a0 < ex - 1; a0++) b2.kt.oe(ov[a0].button, 6);
			for (a0 = 0; a0 < ex; a0++) ov[a0].button.style.fontSize = b2.kt.pr(.22 * iE);
			if (!pg) {
				if (!aR.ps()) return;
				(pg = aR.get(14)).style.width = "24%", pg.style.position = "absolute", pe.appendChild(pg)
			}
			pg.style.left = b2.kt.od(0), pg.style.top = "7%"
		}, pd.style.position = "absolute", pe.style.width = "25%", pe.style.height = "100%", pe.style.backgroundColor = p.lq, pf.style.position = "absolute", pf.style.width = "75%", pf.style.height = "100%", pf.style.backgroundColor = p.lq, pf.style
		.top = pf.style.right = b2.kt.od(0), pf.style.overflowX = "auto", pf.style.overflowY = "hidden", pf.style.whiteSpace = "nowrap", pJ.style.height = pJ.style.maxHeight = "100%", ov.push(new l("", function() {
			pi(0)
		}, p.mR)), ov.push(new l("", function() {
			pi(1)
		}, p.mE)), ov.push(new l("", function() {
			pi(2)
		}, p.mV)), a0 = 0; a0 < ov.length; a0++) ov[a0].button.style.height = "100%", pJ.appendChild(ov[a0].button);
	pf.appendChild(pJ), pd.appendChild(pe), pd.appendChild(pf)
}

function pt(p3, on) {
	this.oK = [];
	var pu = this.oK;

	function click() {
		for (var a0 = 0; a0 < pu.length; a0++) pu[a0].textContent = pu[a0].textContent.replace("🟢", "⚪");
		this.textContent = this.textContent.replace("⚪", "🟢");
		var ke = parseInt(this.name);
		void 0 !== p3.ke && bX.p4.p5(p3.ke, ke), on && on(ke)
	}
	for (var pv, ex = p3.pw.length, a0 = 0; a0 < ex; a0++)(pv = document.createElement("p")).textContent = "⚪ " + p3.pw[a0], pv.style.margin = "0", pv.name = "" + a0, pv.style.cursor = "pointer", pv.style.fontSize = "1em", pv.addEventListener(
		"click", click), pu.push(pv);
	pu[p3.value].textContent = pu[p3.value].textContent.replace("⚪", "🟢")
}

function px(title, py, pz) {
	var pd = document.createElement("div"),
		q0 = document.createElement("div"),
		pJ = document.createElement("div"),
		q1 = document.createElement("div");
	this.q2 = pJ, this.q3 = py, this.show = function() {
			!1 !== pz ? document.body.appendChild(pd) : (document.body.appendChild(q0), document.body.appendChild(q1))
		}, this.pn = function() {
			!1 !== pz ? document.body.removeChild(pd) : (document.body.removeChild(q0), document.body.removeChild(q1))
		}, this.q7 = function() {
			var q8 = b2.kt.p8(.1),
				q9 = b2.kt.p8(.08 + .04 * (an.qA < 1));
			return {
				q8: q8,
				q9: q9,
				qB: an.iE / an.oY - q8 - q9
			}
		}, this.resize = function() {
			var a0, d, ex = py.length,
				qC = this.q7(),
				q8 = qC.q8,
				q9 = qC.q9;
			for (q0.style.height = b2.kt.od(q8), b2.kt.oe(q0, 2), q1.style.top = b2.kt.od(an.iE / an.oY - q9), q1.style.height = b2.kt.od(q9), b2.kt.oe(q1, 8), pJ.style.top = b2.kt.od(q8), pJ.style.height = pJ.style.maxHeight = b2.kt.od(qC.qB), q1
				.style.font = q0.style.font = b2.kt.ky(0, b2.kt.p8(.02, .25)), pJ.style.font = b2.kt.ky(0, b2.kt.p8(.02, .4)), a0 = 0; a0 < ex; a0++)(d = py[a0].button).style.top = "0", d.style.left = (100 * a0 / ex).toFixed(2) + "%", d.style.width =
				(100 / ex).toFixed(2) + "%", d.style.height = "100%", 0 < a0 && b2.kt.oe(d, 4)
		}, this.kk = function() {
			var qC = this.q7(),
				ik = an.oY;
			ku.fillStyle = p.lq, ku.fillRect(0, ik * qC.q8, an.u, ik * qC.qB)
		}, pd.style.position = "absolute", pd.style.top = "0", pd.style.left = "0", pd.style.width = "100%", pd.style.height = "100%", q0.style.position = "absolute", q0.style.top = "0", q0.style.left = "0", q0.style.width = "100%", q0.style
		.display = "flex", q0.style.backgroundColor = p.lq, q1.style.position = "absolute", q1.style.left = "0", q1.style.width = "100%", pJ.style.position = "absolute", pJ.style.width = "100%", pJ.style.backgroundColor = p.lq,
		function() {
			for (var a0 = 0; a0 < py.length; a0++) py[a0].button.style.position = "absolute", py[a0].button.style.fontSize = "1.2em"
		}();
	for (var a0 = 0; a0 < py.length; a0++) q1.appendChild(py[a0].button);
	q0.appendChild(function() {
		var q6 = document.createElement("h1");
		return q6.textContent = title, q6.style.margin = "auto", q6.style.fontSize = "2.3em", q6
	}()), !1 !== pz && (pd.appendChild(pJ), pd.appendChild(q0), pd.appendChild(q1))
}

function qD(name, placeholder) {
	var qE = document.createElement("textarea"),
		qG = (this.qF = qE, !0);

	function qM() {
		qE.select(), document.execCommand("copy")
	}
	this.resize = function() {
			qE.style.padding = b2.kt.od(bQ.oa)
		}, this.qH = function(qI) {
			qE.value = qI
		}, this.qJ = function() {
			return qE.value
		}, this.qK = function() {
			qE.select()
		}, this.clear = function() {
			qE.value = ""
		}, this.qL = function() {
			qG && navigator.clipboard ? (qE.select(), navigator.clipboard.writeText(qE.value).catch(function() {
				qG = !1, qM()
			})) : qM()
		}, qE.setAttribute("name", name), qE.setAttribute("id", name + "Field"), qE.setAttribute("autocomplete", "off"), qE.setAttribute("placeholder", placeholder), qE.style.top = "0", qE.style.left = "0", qE.style.width = "100%", qE.style.height =
		"100%", qE.style.userSelect = "none", qE.style.outline = "none", qE.style.resize = "none", qE.style.border = "none", qE.style.color = p.lu, qE.style.backgroundColor = p.ln, qE.style.fontSize = "1.2em"
}

function cz() {
	this.ok = new qN, this.dV = new qO, this.p4 = new qP, this.k8 = new qQ, this.dD = function() {
		this.dV.dD(), (new qR).dD()
	}
}

function qO() {
	function qS(a0, type, qY, ds) {
		bX.dV.data.push({
			ke: a0,
			type: type || 0,
			value: qY || 0,
			qY: qY || 0,
			ds: ds || 0
		})
	}

	function qT(a0, type, qY, ds) {
		bX.dV.data.push({
			ke: a0,
			type: type,
			value: qY || "",
			qY: qY || "",
			ds: ds || 0
		})
	}

	function qU(ld) {
		for (var a0 = bX.dV.data.length; a0 < ld; a0++) bX.dV.data.push(null)
	}
	this.data = [], this.dD = function() {
		qS(0, 1, 0, 5), qS(1, 1, 1), qS(2, 0), qT(3, 2), qS(4, 1), qT(5, 2, "Trebuchet MS", 1), qS(6, 0), qS(7, 0, 0), qS(8, 0), qS(9, 1, 1), qS(10, 1), qS(11, 1, 1), qT(12, 2, navigator.language), qU(100), qT(100, 2), qT(101, 2), qT(102, 2), qT(
			103, 2), qT(104, 2), qT(105, 2), qT(106, 2), qS(107), qS(108), qS(109), qT(110, 2), qS(111), qS(112), qS(113), qT(114, 2), qS(115), qT(116, 2), qS(117, 1), qT(118, 2, "", 2), qS(119, 1, 0, 1), qT(120, 2), qS(121, 1, ~~(262144 *
			Math.random())), qT(122, 2, "Player " + Math.floor(1e3 * Math.random())), qS(123), qT(124), qS(125, 1), qT(126, 2), qS(127, 0, 1), qS(128), qS(129), qS(130), qS(131), qS(132), qT(133, 2), qS(134, 0, 5), qT(135, 2), qT(136, 2), qS(
			137), qS(138), qS(139), qS(140), qS(141), qS(142), qS(143), qS(144), qT(145, 2), qS(146), qU(180), qS(180, 0), qS(181, 0)
	}, this.p5 = function(ke, value) {
		this.data[ke].value = value
	}, this.dW = function(ke, value) {
		this.p5(ke, value), bX.ok.save(ke, String(value)), bX.ok.save(ke, String(this.data[ke].ds), !0)
	}, this.qV = function() {
		for (var a0 = 0; a0 < this.data.length; a0++) this.data[a0] && (bX.ok.save(a0, String(this.data[a0].value)), bX.ok.save(a0, String(this.data[a0].ds), !0))
	}, this.qW = function(ke) {
		return Number(this.data[ke].value)
	}, this.qX = function(ke) {
		return String(this.data[ke].value)
	}
}

function qN() {
	this.qZ = function(ke, ds) {
		return Number(this.qa(ke, ds))
	}, this.qa = function(ke, ds) {
		var dr = null;
		return 0 === m.id ? m.qb && (dr = m.qb.getItem((ds ? "v" : "d") + ke)) : 1 === m.id ? dr = m.t.loadString((ds ? 1e3 : 2e3) + ke) : 2 === m.id && (dr = m.qc[(ds ? "v" : "d") + ke]), dr && 0 !== dr.length ? dr : null
	}, this.qd = function(ex) {
		var a0, e5 = [];
		if (0 === m.id) {
			if (m.qb)
				for (a0 = 0; a0 < ex; a0++) e5.push(m.qb.getItem("l" + a0))
		} else if (1 === m.id)
			for (a0 = 0; a0 < ex; a0++) e5.push(m.t.loadString(3e3 + a0));
		else if (2 === m.id)
			for (a0 = 0; a0 < ex; a0++) e5.push(m.qc["l" + a0]);
		return e5
	}, this.save = function(ke, value, ds) {
		var qe = (ds ? "v" : "d") + ke;
		0 === m.id ? m.qb && bX.dV.data[140].value && m.qb.setItem(qe, value) : 1 === m.id ? m.t.saveString((ds ? 1e3 : 2e3) + ke, value) : 2 === m.id && (m.qc[qe] = value, m.qf.postMessage(qe + " " + value))
	}, this.qg = function(e5) {
		var a0, ex = e5.length;
		if (0 === m.id) {
			if (m.qb && bX.dV.data[140].value)
				for (a0 = 0; a0 < ex; a0++) m.qb.setItem("l" + a0, e5[a0])
		} else if (1 === m.id)
			for (a0 = 0; a0 < ex; a0++) m.t.saveString(3e3 + a0, e5[a0]);
		else if (2 === m.id)
			for (a0 = 0; a0 < ex; a0++) m.qc["l" + a0] = e5[a0], m.qf.postMessage("l" + a0 + " " + e5[a0])
	}
}

function qR() {
	this.dD = function() {
		! function() {
			var data = bX.dV.data;
			0 === data[2].ds && (an.iE > an.u || 0 !== m.id) && (data[2].value = data[2].qY = 1);
			0 === data[100].ds && (data[100].value = data[100].qY = (0 === m.id ? "Player " : 1 === m.id ? "Android User " : "iOS User ") + Math.floor(1e3 * Math.random()))
		}();
		var a0, dr, data = bX.dV.data,
			ex = data.length;
		for (a0 = 0; a0 < ex; a0++) data[a0] && data[a0].ds === bX.ok.qZ(a0, !0) && (dr = bX.ok.qa(a0), data[a0].value = null === dr ? data[a0].qY : 2 === data[a0].type ? dr : Number(dr));
		bX.dV.data[10].value = bX.dV.data[10].qY
	}
}

function qQ() {
	function qm(e5) {
		if (0 === e5.length) bX.p4.p5(116, "");
		else {
			for (var qp = e5[0], a0 = 1; a0 < e5.length; a0++) qp += ";" + e5[a0];
			bX.p4.p5(116, qp)
		}
	}
	this.qj = function() {
		bX.dV.data[110].value.length && (bX.dV.data[106].value = bX.dV.data[110], bX.p4.p5(110, ""), this.qk())
	}, this.qk = function() {
		var e5 = bX.dV.data[116].value.split(";");
		for (e5.length % 2 == 1 && e5.pop(), e5.unshift(bX.dV.data[106].value), e5.unshift(bX.dV.data[105].value), a0 = 2; a0 < e5.length; a0 += 2)
			if (e5[a0] === e5[0]) {
				e5.splice(a0, 2);
				break
			} for (var ql = [], a0 = 0; a0 < e5.length; a0 += 2) ql.push(e5[a0]);
		qm(e5), bX.dV.data[117].value = 0, bX.dV.data[117].pw = ql
	}, this.qn = function(ke) {
		bX.dV.data[117].pw.splice(ke, 1), bX.dV.data[117].value = Math.min(ke, bX.dV.data[117].pw.length - 1);
		var e5 = bX.dV.data[116].value.split(";");
		e5.splice(2 * ke, 2), qm(e5)
	}, this.qo = function(ke) {
		var e5 = bX.dV.data[116].value.split(";");
		return {
			pT: e5[2 * ke],
			password: e5[2 * ke + 1]
		}
	}, this.qq = function() {
		var dr = bB.o5(bX.dV.data[121].value, -1, 262143);
		return dr = -1 === dr ? ~~(262144 * Math.random()) : dr
	}
}

function qP() {
	this.p5 = function(ke, value) {
		bX.dV.data[ke].value !== value && (bX.dV.dW(ke, value), 0 === ke ? (i.qr(), az.dD(), i.j(2)) : 1 === ke ? an.dN(1) : 2 === ke ? an.dN(0) : 5 === ke && (b2.kt.qs(), an.dN(0)))
	}, this.qt = function() {
		for (var data = bX.dV.data, a0 = 0; a0 < 100; a0++) data[a0] && bX.dV.dW(a0, data[a0].qY);
		b2.kt.qs(), an.dN(1), az.dD()
	}, this.qu = function() {
		for (var data = bX.dV.data, a0 = 0; a0 < data.length; a0++) data[a0] && bX.dV.p5(a0, data[a0].qY)
	}, this.qv = function() {
		for (var i4 = bX.dV, a0 = 128; a0 < 135; a0++) i4.dW(a0, i4.data[a0].qY)
	}, this.qw = function(data) {
		bX.p4.p5(109, data.pU), bX.p4.p5(107, data.qx), bX.p4.p5(108, data.qy), bX.p4.p5(112, data.qz), bX.p4.p5(111, data.r0), bX.p4.p5(113, data.r1), bX.p4.p5(122, data.username), bX.p4.p5(135, data.r2), bX.p4.p5(136, data.r3), bX.p4.p5(137,
			data.r4), bX.p4.p5(138, data.r5), bX.p4.p5(139, data.r6), bX.p4.p5(141, data.r7), bX.p4.p5(142, data.r8), bX.p4.p5(143, data.r9), bX.p4.p5(144, data.rA)
	}
}

function bk() {
	this.rB = new rC, this.rD = new rE, this.dD = function() {
		this.rB.dD()
	}
}

function rE() {
	this.rF = function(size) {
		for (var rG = b7, e5 = [], a0 = 0; a0 < size; a0++) e5.push(String.fromCharCode(rG.na(16)));
		return e5.join("")
	}, this.rH = function(oD) {
		return 20 < (oD = oD.trim()).length ? oD.substring(0, 20) : oD
	}
}

function rC() {
	var rI = new Uint8Array(78);
	this.dD = function() {
		var a0;
		for (rI[50] = 37, a0 = 0; a0 < 10; a0++) rI[a0 + 3] = a0 + 1;
		for (a0 = 0; a0 < 26; a0++) rI[a0 + 20] = a0 + 11, rI[a0 + 52] = a0 + 38
	}, this.rJ = function(oD) {
		return oD.trim().replace(new RegExp("[^a-zA-Z0-9_\\-]", "g"), "_")
	}, this.rK = function(oD, size) {
		if ((oD = this.rJ(oD)).length > size) return oD.substring(0, size);
		for (; oD.length < size;) oD += "_";
		return oD
	}, this.rL = function(oD) {
		for (var rM = rI, ex = oD.length, e5 = new Uint8Array(ex), a0 = 0; a0 < ex; a0++) e5[a0] = rM[oD.charCodeAt(a0) - 45];
		return e5
	}, this.rN = function(rO) {
		b4.w(6 * rO.length), this.rP(rO), b7.dD(b4.a1)
	}, this.rP = function(rO) {
		for (var ex = rO.length, u = b4, a0 = 0; a0 < ex; a0++) u.x(6, rO[a0])
	}, this.rQ = function(oD) {
		this.rP(this.rL(oD))
	}, this.rR = function(oD, size) {
		this.rP(this.rL(this.rK(oD, size)))
	}
}

function rS() {
	var u, iE, rT;

	function rr(pb, f6, rp, rY, rk) {
		f6 = rq(pb, f6 + 1 + 2 * rY & 3);
		! function(pb, rs) {
			return 1 < Math.abs(pb % u - rs % u) || 1 < Math.abs(rv(pb) - rv(rs))
		}(pb, f6) && 0 === rk[f6 << 2] && (rk[f6 << 2] = rp)
	}

	function rv(f4) {
		return Math.floor((f4 + .5) / u) % iE
	}

	function rq(f4, f6) {
		return f4 + rT[f6]
	}
	this.rU = function(oD) {
		var a0, rV, ex, rW, rG = b7;
		for (b6.rB.rN(b6.rB.rL(oD)), bI.eS = u = rG.na(12), bI.eT = iE = rG.na(12), rT = [-u, -1, u, 1], bI.rh = document.createElement("canvas"), bI.rh.width = bI.eS, bI.rh.height = bI.eT, bI.rd = bI.rh.getContext("2d", {
				alpha: !1
			}), bI.re = bI.rd.getImageData(0, 0, bI.eS, bI.eT), bI.ri = bI.re.data, b2.oc.rj(bI.ri), ex = rG.na(12), rV = rG.na(5), rW = ra(u * iE - 1), a0 = 0; a0 < ex; a0++) ! function(jZ, f4, rX, rY) {
			var a0, f6, rG = b7,
				rk = bI.ri,
				rl = f4,
				rm = f4,
				rn = 0,
				ro = 1 + rX,
				rp = 2 - rX;
			for (rk[f4 << 2] = ro, a0 = 0; a0 < jZ; a0++) f6 = rG.na(2), f4 = rq(f4, f6), rk[f4 << 2] === ro ? rn % 2 == 1 && rr(rm, rn + 2 * rY + 3, rp, rY, rk) : rk[f4 << 2] = ro, rr(f4, f6, rp, rY, rk), rr(rm, f6, rp, rY, rk), rm = f4,
				rn = f6;
			rq(f4, 0) === rl ? (rr(f4, 0, rp, rY, rk), rr(rl, 0, rp, rY, rk)) : rq(f4, 1) === rl && (rr(f4, 0, rp, rY, rk), rr(rl, 2, rp, rY, rk));
			0 === jZ && (rr(rl, 0, rp, rY, rk), rr(rl, 2, rp, rY, rk))
		}(rG.na(rV), rG.na(rW), 1 === rG.na(1), 1 === rG.na(1));
		var ff, fg, jc, rw, rx, ry, rk = bI.ri,
			rz = !0,
			s0 = bI.j8.s1[bI.s2].s0,
			s3 = bI.j8.s1[bI.s2].s3;
		for (fg = 0; fg < iE; fg++)
			for (rw = !0, rx = rz, ff = ry = 0; ff < u; ff++) jc = 4 * fg * u + 4 * ff, ry <= ff && 0 < rk[jc] && (rx = 2 === rk[jc], rw) && (rw = !1, rx !== rz) ? (rz = rx, ry = ff + 1, ff = -1) : (rx ? (rk[jc] = s3[0], rk[1 + jc] = s3[1], rk[
				2 + jc] = s3[2]) : (rk[jc] = s0[0], rk[1 + jc] = s0[1], rk[2 + jc] = s0[2]), rk[3 + jc] = 255);
		bI.rd.putImageData(bI.re, 0, 0), bI.rf = !0, bI.rg.dD(), bT.dK = !0
	}
}

function bq() {
	var ff, fg, u, iE, s4, s5, s6, s7, player, e5;

	function sF() {
		return function() {
			var a0;
			for (a0 = 0; a0 < 8; a0++)
				if (ff = bB.el(u * ao.random(), ao.value(100)), fg = bB.el(iE * ao.random(), ao.value(100)), sN()) return 1;
			return
		}() || function() {
			var gr, gu, hy, sD, i4, sC;
			for (gr = bB.el(u * ao.random(), ao.value(100)), gu = bB.el(iE * ao.random(), ao.value(100)), hy = 40; 1 <= hy; hy--)
				for (sD = iE - hy; 0 <= sD; sD -= 40)
					for (fg = (sD + gu) % iE, i4 = 40; 1 <= i4; i4--)
						for (sC = u - i4; 0 <= sC; sC -= 40)
							if (ff = (sC + gr) % u, sN()) return 1;
			return
		}()
	}

	function sN() {
		for (var f4, sP, gap = bB.el(s4 - s7, 2), sQ = s6 + fg * s4 + gap, sR = s5 + ff * s4 + gap, sO = sQ + s7 - 1; sQ <= sO; sO--)
			for (sP = sR + s7 - 1; sR <= sP; sP--)
				if (f4 = aS.sL(sP, sO), !aS.ez(f4) || aS.hu(f4)) return;
		return 1
	}

	function sG(sC, sD) {
		s8(), sS(sC - 2, sD - 2)
	}

	function s8() {
		aX.kW[player] = 0, aX.et[player] = 0, aX.ep[player] = aX.sT[player] = 0, aX.ey[player] = [], aX.fF[player] = [], aX.fG[player] = [], aX.fJ[player] = [], aX.hJ[player] = aX.hL[player] = aX.hK[player] = aX.hM[player] = 0
	}

	function sS(sC, sD) {
		var f4, a0, sV, sW;
		for (aX.kW[player] = 1, player < a2.ip ? aX.et[player] = a2.sU : aX.et[player] = a3.j5[a3.hs[player]], aX.hJ[player] = sC + 10, aX.hL[player] = sD + 10, aX.hM[player] = aX.hK[player] = 0, sV = sC; sV < sC + 4; sV++)
			for (sW = sD; sW < sD + 4; sW++)(sC < sV && sV < sC + 3 || sD < sW && sW < sD + 3) && (f4 = aS.sL(sV, sW), aS.ez(f4)) && (aX.hJ[player] = sV < aX.hJ[player] ? sV : aX.hJ[player], aX.hK[player] = sV > aX.hK[player] ? sV : aX.hK[player], aX
				.hL[player] = sW < aX.hL[player] ? sW : aX.hL[player], aX.hM[player] = sW > aX.hM[player] ? sW : aX.hM[player], e5[aX.ep[player]] = f4, aX.ep[player]++, aS.sX(f4, player));
		for (aX.sT[player] = aX.ep[player], a0 = aX.ep[player] - 1; 0 <= a0; a0--) aS.sY(e5[a0], player) ? (aS.f0(e5[a0], player), aX.fF[player].push(e5[a0])) : aS.sZ(e5[a0]) ? (aS.f0(e5[a0], player), aX.fG[player].push(e5[a0])) : aS.sa(e5[a0]) && (
			aS.f0(e5[a0], player), aX.fJ[player].push(e5[a0]))
	}

	function sM(sC, sD) {
		for (var f4, sP, sO = sD; sD - 6 < sO; sO--)
			for (sP = sC; sC - 6 < sP; sP--)
				if (f4 = aS.sL(sP, sO), aS.hu(f4)) return;
		return 1
	}
	this.dD = function() {
		var a0, sC, sD;
		if (e5 = new Array(12), s7 = 6, s4 = 10, u = bB.el(bI.eS, s4), iE = bB.el(bI.eT, s4), s5 = bB.el(bI.eS - s4 * u, 2), s6 = bB.el(bI.eT - s4 * iE, 2), a2.fz)
			for (a0 = 0; a0 < a2.ip; a0++) player = a0, s8(), aX.kW[player] = 1;
		if (ay.j7 && ay.j8.s9) {
			for (player = 0; player < a2.f1; player++)
				if (1 !== aX.kW[player]) {
					if (player < a2.sE) {
						if (function() {
								var sC = ay.j8.s9[player] + 1,
									sD = ay.j8.sK[player] + 1;
								if (3 < sC && sC < bI.eS - 5 && 3 < sD && sD < bI.eT - 5 && aS.ez(aS.sL(sC, sD)) && sM(sC + 3, sD + 3)) return sG(sC + 1, sD + 1), 1;
								return
							}()) continue;
						if (sF()) {
							sC = s5 + ff * s4 + bB.el(s4, 2), sD = s6 + fg * s4 + bB.el(s4, 2), sG(sC, sD);
							continue
						}
					}
					s8()
				}
		} else ! function() {
			var sC, sD;
			for (player = 0; player < a2.f1; player++) 1 !== aX.kW[player] && (player < a2.sE && sF() ? (sC = s5 + ff * s4 + bB.el(s4, 2), sD = s6 + fg * s4 + bB.el(s4, 2), sG(sC, sD)) : s8())
		}();
		bR.ev[7] = aX.ep[a2.es], bR.ev[8] = aX.et[a2.es]
	}, this.sb = function(hr, sc, sd) {
		var a0, sC, sD, f4, ff, fg;
		for (player = hr, a0 = 0; a0 < 20; a0++)
			for (sC = sc + a0; sc - a0 <= sC; sC--)
				for (sD = sd + a0; sd - a0 <= sD; sD--)
					if ((sC === sc + a0 || sC === sc - a0 || sD === sd + a0 || sD === sd - a0) && 3 < sC && sC < bI.eS - 5 && 3 < sD && sD < bI.eT - 5 && aS.ez(aS.sL(sC, sD)) && sM(sC + 3, sD + 3)) {
						if (0 < aX.ep[player]) {
							for (fg = ff = f4 = void 0, ff = aX.hK[player]; ff >= aX.hJ[player]; ff--)
								for (fg = aX.hM[player]; fg >= aX.hL[player]; fg--) f4 = 4 * (fg * bI.eS + ff), aS.sf(player, f4) && (aS.sg(f4), aX.ep[player]--);
							s8()
						}
						return sS(sC - 1, sD - 1), !0
					} return !1
	}, this.sh = function(hr) {
		player = hr, sF() ? sG(s5 + ff * s4 + bB.el(s4, 2), s6 + fg * s4 + bB.el(s4, 2)) : s8()
	}
}

function si() {
	ag.sj(), ku.setTransform(h7, 0, 0, h7, 0, 0), ku.imageSmoothingEnabled = h7 < 3, ku.drawImage(bI.rh, aH.kv(), aH.kw()), bF.sk.kk(), ku.drawImage(sl, aH.kv(), aH.kw()), ag.kk(), bD.kk(), aW.kk(), a6.kk(), (a2.lQ ? (bV.kk(), b3) : (aC.kk(), aK
	.kk(), aG.kk(), b3.kk(), al.kk(), aL.kk(), aH.kk(), aF.kk(), bV.kk(), aJ.kk(), aE.kk(), aB.kk(), aA.kk(), aM.kk(), bS.kk(), ai)).kk(), i.kk()
}

function sm(sn, u, iE) {
	sn.clearRect(0, 0, u, iE), sn.fillStyle = p.lr, sn.fillRect(0, 0, u, iE)
}

function so(sn, u, iE, sp) {
	sn.fillStyle = p.lu, sn.fillRect(0, 0, u, sp), sn.fillRect(0, 0, sp, iE), sn.fillRect(u - sp, 0, sp, iE), sn.fillRect(0, iE - sp, u, sp)
}

function sq(sn, ff, fg, gF, sp, f4, sr) {
	sn.fillStyle = p.lu;
	var f4 = Math.floor(gF * f4),
		pa = (f4 += (f4 - sp) % 2, Math.floor((f4 - sp) / 2)),
		gF = Math.floor((gF - f4) / 2);
	sn.fillRect(ff + gF, fg + gF + pa, f4, sp), sr && sn.fillRect(ff + gF + pa, fg + gF, sp, f4)
}

function st() {
	this.su = null, this.dD = function(su) {
		this.su = su, aC.sv(this.su)
	}, this.sw = function(sx) {
		var gd = (this.su[sx].sy - this.su[1 - sx].sy) / 10,
			gd = 8 / (1 + Math.pow(2, gd / 32)),
			gd = Math.floor(10 * gd + .5),
			t0 = this.t1(this.su[sx].sy + gd + 1),
			gd = this.t1(this.su[1 - sx].sy - gd);
		0 === sx ? aC.t3(this.su, t0, gd, ["rgba(10,140,10,0.75)", "rgba(140,10,10,0.75)"]) : aC.t3(this.su, gd, t0, ["rgba(140,10,10,0.75)", "rgba(10,140,10,0.75)"])
	}, this.t1 = function(sy) {
		return 16e3 <= (sy = sy < 0 ? 0 : 16e3 < sy ? 16e3 : sy) ? "Unknown" : (sy / 10).toFixed(1)
	}
}

function cJ() {
	this.t4 = new t5, this.rk = new t6
}

function t6() {
	this.t7 = !1;
	this.tB = [], this.tC = 100;
	var kp, kq, gap, gF, t8, tA, tD = 0,
		tE = new Array(9),
		tF = [],
		tG = [],
		tH = 0,
		tI = 0,
		tJ = 0,
		tK = 0;

	function tV() {
		tE.sort(function(hy, i4) {
			return i4.ix - hy.ix
		});
		for (var oD = "" + tE[0].nA, a0 = 1; a0 < 9; a0++) oD += "," + tE[a0].nA;
		for (a0 = 0; a0 < 9; a0++) oD += "," + tE[a0].ix;
		bX.dV.dW(120, oD)
	}
	this.dD = function() {
		for (var ph = [0, 1, 2, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 6], a0 = 0; a0 < ph.length; a0++) {
			var color = 6 === ph[a0] ? p.mG : p.ls;
			this.tB.push(b2.gL.tL(aR.get(3), ph[a0], color))
		}
		for (a0 = 0; a0 < aa.t4.tM; a0++) tG.push(aa.t4.tN - aa.t4.tM + a0);
		for (a0 = 0; a0 < aa.t4.tO; a0++) tG.push(aa.t4.tP + a0);
		var tQ = aa.t4.tR(bA.tQ);
		for (a0 = 0; a0 < tQ.length; a0++) tG.push(tQ[a0]);
		! function() {
			var a0, e5 = bX.dV.data[120].value.split(",");
			if (18 !== e5.length)
				for (a0 = 0; a0 < 9; a0++) tE[a0] = {
					nA: 1015 + a0,
					ix: 0
				};
			else
				for (a0 = 0; a0 < 9; a0++) {
					var dr = parseInt(e5[a0]),
						ik = (dr = 0 <= dr && dr < aa.t4.tN ? dr : 0, parseInt(e5[a0 + 9]));
					ik = 0 <= ik && ik < 1e3 ? ik : 0, tE[a0] = {
						nA: dr,
						ix: ik
					}
				}
		}()
	}, this.show = function(jl, jm, tW) {
		var a0;
		if (tH = jl, tI = jm, tD = tW || 0, this.t7 = !0, tF = [], 0 === tD)
			for (a0 = 0; a0 < 9; a0++) tF.push(tE[a0].nA);
		else {
			var i4 = 49 * tD,
				tW = i4 - 49;
			for (tW >= tG.length && (tD = 1, tW = 0, i4 = 49), a0 = tW = (i4 = Math.min(i4, tG.length)) - 49; a0 < i4; a0++) tF.push(tG[a0])
		}
		tF.push(1024);
		tW = tF.length, gF = Math.floor((m.n.tX() ? .075 : .0468) * an.oU), gap = Math.floor(gF / 3), (tJ = 10 * (t8 = gF + gap)) > an.u && (tJ = an.u, gap = (t8 = tJ / 10) - (gF = 3 * t8 / 4)), tA = bB.el(tW, 10) + !!(tW % 10), (tK = tA * t8) >
			an.iE && (tK = an.iE, gap = (t8 = tK / tA) - (gF = 3 * t8 / 4)), tW = .5 * gap;
		kp = Math.min(Math.max(jl - .5 * tJ + tW, tW), an.u - tJ + tW), kq = Math.min(Math.max(jm - .5 * tK + tW, tW), an.iE - tK + tW)
	}, this.fn = function(jl, jm, player) {
		if (!this.t7) return !1;
		if (this.tZ(jl, jm)) {
			jl = bB.o5(bB.el(jl - kp + .5 * gap, t8), 0, 9);
			if ((jl += 10 * bB.o5(bB.el(jm - kq + .5 * gap, t8), 0, 9)) >= tF.length) return aA.pn(), !0;
			jm = tF[jl];
			if (1024 === jm) return this.show(tH, tI, tD + 1), !0;
			! function(nA) {
				for (var a0 = 0; a0 < 9; a0++) tE[a0].ix = Math.floor(.99 * tE[a0].ix);
				for (a0 = 0; a0 < 9; a0++)
					if (nA === tE[a0].nA) return tE[a0].ix = Math.min(tE[a0].ix + 30, 999), tV();
				tE.splice(5, 0, {
					nA: nA,
					ix: Math.max(tE[4].ix, 30)
				}), tE.pop(), tV()
			}(jm), player === a2.es ? b0.g0.n9(jm) : b0.en.nP(jm, player)
		}
		return aA.pn(), !0
	}, this.tZ = function(jl, jm) {
		return !(jl < kp - .5 * gap || jm < kq - .5 * gap || kp + tJ - .5 * gap <= jl || kq + tK - .5 * gap <= jm)
	}, this.kk = function() {
		ku.fillStyle = p.lr, ku.fillRect(kp - .5 * gap, kq - .5 * gap, tJ, tK);
		for (var jc = .5 * bQ.ta, ex = (ku.lineWidth = bQ.ta, ku.strokeStyle = ku.fillStyle = p.lu, ku.strokeRect(kp - .5 * gap + jc, kq - .5 * gap + jc, tJ - 2 * jc, tK - 2 * jc), ku.imageSmoothingEnabled = !0, tF.length), a0 = 0; a0 < ex; a0++)
			this.tb(tF[a0], ku, kp + a0 % 10 * t8, kq + bB.el(a0, 10) * t8, gF);
		ku.imageSmoothingEnabled = !1
	}, this.tb = function(nA, gM, ff, fg, gF) {
		var fw;
		nA >= 1024 - aa.t4.tM ? (fw = gF / this.tC, gM.setTransform(fw, 0, 0, fw, ff, fg), gM.drawImage(this.tB[nA - 1024 + aa.t4.tM], 0, 0), gM.setTransform(1, 0, 0, 1, 0, 0)) : (b2.kt.textAlign(gM, 1), b2.kt.textBaseline(gM, 1), gM.font = b2.kt
			.ky(0, .89 * gF), gM.fillText(aa.t4.tc(nA), ff + .5 * gF, fg + (.35 - b2.kt.td + .56) * gF))
	}
}

function t5() {
	this.emojis = ["🥰", "😎", "😘", "😜", "🤗", "🥳", "😇", "😊", "🥱", "🙄", "🤔", "🥺", "😡", "😭", "😱", "😞", "💀", "👹", "👋", "🙏", "👏", "💪", "🙋‍♂️", "🤦‍♂️", "⬆️", "➡️", "⬇️", "⬅️", "👀", "❤️", "💔", "💥", "🔥", "🪦", "🥇", "🥈", "🥉",
		"🎖️", "🏅", "👑", "🎉", "💯", "✝️", "☪️", "🕉️", "☸️", "✡️", "☦️", "⚛️"
	], this.tM = 13, this.tO = this.emojis.length, this.tP = 676, this.tN = 1024, this.te = this.emojis.indexOf("💀"), this.tf = this.te + 1, this.tg = this.emojis.indexOf("🥇"), this.th = this.emojis.indexOf("😊"), this.tc = function(dr) {
		return dr < this.tP ? String.fromCharCode(55356, 56806 + bB.el(dr, 26), 55356, 56806 + dr % 26) : this.emojis[Math.min(dr - this.tP, this.tO - 1)]
	}, this.tR = function(oD) {
		for (var ex = oD.length - 2, e5 = [], a0 = 0; a0 < ex; a0++) {
			var gY = oD.charCodeAt(a0) - 56806,
				gZ = oD.charCodeAt(a0 + 2) - 56806;
			0 <= gY && gY < 26 && 0 <= gZ && gZ < 26 && (e5.push(26 * gY + gZ), a0 += 3)
		}
		return e5
	}, this.ti = function(dr) {
		return dr < this.tP
	}, this.tj = function(dr) {
		return dr >= 1024 - this.tM
	}, this.tk = function(dr) {
		return dr >= this.tP && dr < this.tP + this.tf
	}
}

function bj() {
	this.rB = new tl, this.rD = new tm, this.dD = function() {
		this.rB.dD()
	}
}

function tm() {
	this.rQ = function(oD) {
		for (var ex = oD.length, u = b4, a0 = 0; a0 < ex; a0++) u.x(16, oD.charCodeAt(a0))
	}
}

function tl() {
	var tn = new Uint8Array(64);
	this.dD = function() {
		var a0;
		for (tn[0] = 45, tn[37] = 95, a0 = 0; a0 < 10; a0++) tn[a0 + 1] = 48 + a0;
		for (a0 = 0; a0 < 26; a0++) tn[a0 + 11] = 65 + a0, tn[a0 + 38] = 97 + a0
	}, this.to = function(tp) {
		for (var rG = b7, rO = new Uint8Array(tp), a0 = 0; a0 < tp; a0++) rO[a0] = rG.na(6);
		return rO
	}, this.tq = function(rO) {
		for (var ex = rO.length, tr = tn, e5 = [], a0 = 0; a0 < ex; a0++) e5.push(String.fromCharCode(tr[rO[a0]]));
		return e5.join("")
	}
}

function br() {
	var ts, tt, tu;
	ts = [32, 65, 191, 913, 931], tt = [64, 127, 688, 930, 1155], tu = new Array(ts.length + 1);
	for (var a0 = 0; a0 < tu.length; a0++) {
		tu[a0] = 0;
		for (var hy = a0 - 1; 0 <= hy; hy--) tu[a0] += tt[hy] - ts[hy]
	}

	function u0(ik) {
		for (var a0 = ts.length - 1; 0 <= a0; a0--)
			if (ik >= ts[a0] && ik < tt[a0]) return a0;
		return -1
	}
	this.rH = function(oD) {
		return 0 !== (oD = oD.trim()).indexOf("Bot ") && 0 !== oD.indexOf("[Bot] ") && function(oD, tx, ty) {
			var ex = (oD = oD.trim()).length;
			if (ex < tx || ty < ex) return !1;
			for (var ik, tz = 0, a0 = 0; a0 < ex; a0++)
				if (ik = oD.charCodeAt(a0), tz += 65 <= ik && ik <= 90 || 1040 <= ik && ik <= 1071 ? 1 : 0, -1 === u0(ik)) return !1;
			if (3 < tz && tz > Math.floor(ex / 2)) return !1;
			return !0
		}(oD, 3, 20)
	}, this.u1 = function(oD) {
		for (var ex = (oD = oD.trim()).length, e5 = [], a0 = 0; a0 < ex; a0++) {
			var ik, f4 = u0(ik = oD.charCodeAt(a0));
			e5.push(tu[f4] + ik - ts[f4])
		}
		return e5
	}, this.rU = function(e5) {
		for (var ik, i4, oD = "", ex = e5.length, a0 = 0; a0 < ex; a0++)
			for (i4 = 1; i4 < tu.length; i4++)
				if (e5[a0] < tu[i4]) {
					ik = ts[i4 - 1] + e5[a0] - tu[i4 - 1], oD += String.fromCharCode(ik);
					break
				} return oD
	}, this.u2 = function(oD) {
		for (var e5 = this.u1(oD), result = "", a0 = 0; a0 < e5.length; a0++) result = (result += e5[a0] < 10 ? "00" : e5[a0] < 100 ? "0" : "") + e5[a0].toString(10);
		return result
	}, this.u3 = function(oD) {
		for (var e5 = new Array(Math.floor(oD.length / 3)), a0 = 0; a0 < oD.length; a0 += 3) e5[Math.floor(a0 / 3)] = parseInt(oD.substring(a0, a0 + 3));
		return this.rU(e5)
	}, this.u4 = function(oD) {
		for (var dr, e5 = [oD.length], a0 = 0; a0 < oD.length; a0++) e5[a0] = oD.charCodeAt(a0) - 48;
		var result = "";
		for (a0 = 0; a0 < oD.length; a0++) a0 === oD.length - 1 || 51 < 10 * e5[a0] + e5[a0 + 1] ? result += e5[a0].toString() : (dr = 10 * e5[a0] + e5[a0 + 1], result += String.fromCharCode(dr + (dr < 26 ? 65 : 71)), a0++);
		return result
	}, this.u5 = function(oD) {
		for (var ik, result = "", a0 = 0; a0 < oD.length; a0++) 48 <= (ik = oD.charCodeAt(a0)) && ik < 58 ? result += String.fromCharCode(ik) : 65 <= ik && ik < 75 ? result += "0" + (ik - 65).toString() : 75 <= ik && ik < 91 ? result += (ik - 65)
			.toString() : 97 <= ik && ik < 123 && (result += (ik - 71).toString());
		return result
	}, this.u6 = function(oD) {
		for (var ex = oD.length, e5 = [], a0 = 0; a0 < ex; a0++)(ik = oD.charCodeAt(a0)) < 58 ? e5.push(oD[a0]) : (ik -= ik < 91 ? 65 : 71, e5.push(String(bB.el(ik, 10))), e5.push(String(ik - 10 * bB.el(ik, 10))));
		var ex = e5.length - 2,
			ik = 0,
			rO = [];
		for (a0 = 0; a0 < ex; a0 += 3) rO[ik++] = parseInt(e5[a0] + e5[a0 + 1] + e5[a0 + 2]);
		return rO
	}, this.u7 = function() {
		for (var gO, u8 = "", a0 = 0; a0 < 6; a0++) gO = 48 + ao.random() % 36, gO += 58 <= gO ? 39 : 0, u8 += String.fromCharCode(gO);
		return u8
	}
}

function cr() {
	this.u9 = new uA, this.uB = new uC, this.result = new uD, this.g4 = new uE, this.uF = new uG, this.uH = new uI, this.uJ = new uK, this.dD = function() {
		this.uF.dD()
	}, this.ha = function() {
		this.uF.ha()
	}
}

function uE() {
	this.uL = function() {
		for (var ex = iq, su = is, uM = [], a0 = 0; a0 < ex; a0++) {
			var f4 = su[a0];
			aS.uN(f4) && uM.push(f4)
		}
		return uM
	}, this.uO = function() {
		for (var ex = iq, su = is, dp = 0, ep = aX.ep, a0 = 0; a0 < ex; a0++) dp += ep[su[a0]];
		return dp
	}
}

function uA() {
	function uQ() {
		if (2 === a2.uU) return 1;
		al.uV(), a2.uU = 2, a2.uW = a2.uX
	}

	function uS() {
		bH.uJ.uY(), aM.show(1 === a2.uZ, !1, 2 === a2.uZ), bH.result.uY(), bH.uH.ha(), aC.ua(!0), aC.ub(247, 0), aK.kG(!0), aL.kG(!0), al.kG(), b3.uc(), a2.fj && bT.ud.ue(), bT.dK = !0, bP.uf(), m.n.setState(0)
	}
	this.uP = function() {
		uQ() || (a2.uR = 2, uS())
	}, this.uT = function() {
		uQ() || (a2.uR = 1, uS())
	}
}

function uI() {
	this.ha = function() {
		var uo;
		2 === a2.uR ? (aC.ug(0, 59), a7.lV(2700)) : a2.jB < 7 ? (uo = bU.up[bV.ju()], uo = bU.ur[uo], aF.us(L(7, [uo]), 2, 1, 12), aC.ut(0, L(8, [uo]), 40, 0, p.lu, p.lr, -1, !1), a7.lV(2700)) : 8 === a2.jB ? (a2.uZ ? aC.ug(a2.ul, 2) : aC.ug(1 -
			a2.es, 3), a2.um.sw(a2.ul), aC.un(a2.ul), a7.lO(a2.ul, 2700, !1, 0)) : 9 === a2.jB ? (aC.uu(), a7.lV(2700)) : (aC.un(a2.ul), a7.lO(a2.ul, 2700, !1, 0))
	}
}

function uD() {
	this.uv = 0, this.uM = null;
	var ux = this.uw = 0;
	this.uy = 0, this.uY = function() {
		var v2, f5, dp;
		bH.uF.uz || (bH.uF.uz = !0, a2.jD) || ((v2 = this).uM = bH.g4.uL(), v2.uv = bW.v3.v4(), a2.jB < 7 && 2 !== a2.uR ? v2.uw = bV.v5() : v2.uw = bH.g4.uO(), 8 === a2.jB && 1 === a2.uR ? (f5 = 1 - a2.ul, dp = aX.ep[f5], aX.ep[f5] = 0, b0.en
			.nY(), aX.ep[f5] = dp) : b0.en.nY(), ux = .01 * aX.v9[a2.es] / 50, v2.uy = 0, a2.jB < 7 ? bH.uB.uY(v2.uM) : 7 === a2.jB || 10 === a2.jB ? b2.en.fm(a2.es) && (f5 = bH.result.uv * (1 + a2.vC), 2 === a2.uR ? bH.result.uy += f5 *
			aX.ep[a2.es] / bH.result.uw : jw[0] === a2.es && (bH.result.uy += f5)) : 8 !== a2.jB || 1 !== a2.uZ || 0 === bX.dV.data[107].value || 100 <= (dp = bX.dV.data[108].value) || (bH.result.uy += .01 * (100 - dp) * 10), this.v1())
	}, this.v1 = function() {
		b2.en.fm(a2.es) && (.01 <= ux && aC.ut(0, L(9, [ux.toFixed(2)]), 40, 0, p.m9, p.lr, -1, !1), .01 <= bH.result.uy) && aC.ut(0, L(10, [bH.result.uy.toFixed(2)]), 40, 0, p.m9, p.lr, -1, !1)
	}, this.vD = function() {
		var rl, vE;
		a2.jD || bH.uF.uz || (vE = aX, rl = a2.es, 0 === vE.vF[rl]) || vE.hj[rl] < 1 || 2 * vE.nu[rl] > 3 * (vE.hi[rl] + vE.hj[rl]) || (vE = .01 * vE.v9[rl] / 50) < .01 || aC.ut(0, L(9, [vE.toFixed(2)]), 40, 0, p.m9, p.lr, -1, !1)
	}
}

function uG() {
	this.uz = !1, this.dD = function() {
		this.uz = !1
	}, this.ha = function() {
		7 <= a2.jB || this.uz || bT.eq() % 20 == 11 && b2.en.jq(90) && (a2.uR = 1, bH.uJ.uY(), bH.result.uY())
	}
}

function uC() {
	function vJ(vH) {
		for (var gd = (1 + a2.vC) * bH.result.uv / (1e5 * bH.result.uw), vN = "", a0 = 0; a0 < vH.length; a0++) {
			var vO = vH[a0].vP * gd;
			vN += "  " + vH[a0].name + ": " + b2.l1.vQ(1e5 * vO)
		}
		vN.length && (aC.ut(0, L(11), 45, 0, b2.color.lm(225, 240, 255), p.lr, -1, !1), aC.ut(0, vN.trim(), 45, 0, b2.color.lm(225, 240, 255), p.lr, -1, !1), a2.fj || aC.ut(700, L(12) + bA.vR, 736, 0, p.lu, p.mE, -1, !1))
	}
	this.uY = function(uM) {
		var uo = bU.up[bV.ju()],
			uM = (a2.uZ && b2.en.fm(a2.es) && (bH.result.uy += (b2.l1.vL(aX.vM[a2.es]) ? 2 : 1) * bH.result.uv * (1 + a2.vC) * aX.ep[a2.es] / bH.result.uw), function(su) {
				var vH = [],
					username = aX.vM,
					ex = su.length;
				loop: for (var a0 = 0; a0 < ex; a0++) {
					var f4 = su[a0],
						vS = b2.l1.vL(username[f4]);
					if (vS) {
						for (var hy = vH.length - 1; 0 <= hy; hy--)
							if (vH[hy].name === vS) {
								vH[hy].vP += aX.ep[f4];
								continue loop
							} vH.push({
							name: vS,
							vP: aX.ep[f4],
							vT: bU.il[f4]
						})
					}
				}
				return vH.sort(function(hy, i4) {
					return i4.vP - hy.vP
				}), vH
			}(uM));
		uM.length && (2 === a2.uR ? vJ(uM) : vJ(function(vH, uo) {
			for (var a0 = vH.length - 1; 0 <= a0; a0--) bU.up[vH[a0].vT] !== uo && vH.splice(a0, 1);
			return vH
		}(uM, uo)))
	}
}

function uK() {
	this.uY = function() {
		2 === a2.uR ? a2.uZ = 2 : 8 === a2.jB ? (aS.uN(0) ? aS.uN(1) ? a2.ul = +(aX.ep[1] > aX.ep[0]) : a2.ul = 0 : a2.ul = 1, a2.uZ = +(a2.ul === a2.es)) : a2.hl ? a2.uZ = +(bU.il[a2.es] === bV.vV()) : (a2.ul = jw[0], a2.uZ = +(a2.ul === a2.es))
	}
}

function cw() {
	this.id = 0, this.ds = 0, this.qb = null, this.t = null, this.qc = null, this.qf = null, this.n = new vW, this.dD = function() {
		var self, ds;
		self = this, "undefined" == typeof Android || "function" != typeof Android.getVersion || (ds = Android.getVersion()) < 12 || (self.ds = ds, self.id = 1, self.t = Android),
			function(self) {
				var ds;
				"undefined" != typeof mwIOSdataX && window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.iosCommandA && (self.id = 2, self.qc = mwIOSdataX, self.qf = window.webkit.messageHandlers.iosCommandA, ds = self
					.qc.version, self.ds = ds ? Number(ds) : 0)
			}(this),
			function(self) {
				var qb;
				if (0 === self.id) {
					try {
						if (!(qb = window.localStorage)) return;
						qb.setItem("tls7", "1"), qb.removeItem("tls7")
					} catch (error) {
						return
					}
					self.qb = qb
				}
			}(this)
	}
}

function vW() {
	this.va = function() {
		bX.p4.qt(), bX.p4.qu(), aq.k8.close(0, 3255), 0 === m.id ? m.qb && m.qb.clear() : 1 === m.id ? m.t.saveString(199, "") : 2 === m.id && m.qf.postMessage("clear")
	}, this.vb = function() {
		2 === m.id ? m.qf.postMessage("showConsentForm") : 1 === m.id ? m.t.setState(7) : bK.dX.showCMPScreen()
	}, this.vc = function() {
		this.setState(14)
	}, this.vd = function() {
		var oD = bX.dV.qX(101),
			max = ("string" != typeof(oD = "" === oD ? function() {
				{
					if (2 === m.id) return m.qc.password;
					if (1 === m.id) return 12 <= m.ds ? m.t.loadString(22) : ""
				}
				return aT.vg(9)
			}() : oD) && (oD = ""), Math.floor(Math.pow(2, 48))),
			vf = Math.floor(parseInt(a9.u5(oD)));
		return 0 < vf && vf < max ? bX.dV.dW(101, oD) : (vf = Math.floor(1 + (max - 1) * Math.random()), bX.dV.dW(101, oD)), vf
	}, this.tX = function() {
		return 1 === bX.dV.qW(2)
	}, this.vh = function() {
		bX.dV.dW(102, "")
	}, this.setState = function(dm) {
		1 === m.id && 5 <= m.ds && m.t.setState(dm)
	}, this.o = function() {
		var vi;
		1 === m.id && 7 <= m.ds ? m.t.setState(5) : ((vi = new URL(window.location)).searchParams.set("v", "" + Math.floor(1e3 * Math.random())), window.location.href = vi.toString())
	}, this.dH = function() {
		1 !== m.id || m.ds < 17 || m.t.saveString(23, document.documentElement.outerHTML)
	}, this.db = function() {
		0 === m.id ? bK.dX.dD() : 1 === m.id ? m.t.prepareAd("1688441405") : 2 === m.id && (0 === m.ds ? m.qf.postMessage("prepare ad 4500876070") : m.qf.postMessage("loadAds 4500876070"))
	}, this.dq = function(dp) {
		return 0 === m.id ? !!bK.dX.dk() : 1 === m.id ? 12 <= m.ds && (m.t.presentAd(dp), !0) : 2 === m.id && (0 === m.ds ? m.qf.postMessage("show ad " + dp) : m.qf.postMessage("showAd"), !0)
	}, this.dM = function() {
		2 === m.id && m.ds < 23 && i.j(4, 1, new k("App Update Required", "A new iOS app version with bug fixes has been published.<br>Please download the new Territorial.io app version for iOS:<br><a href='" + bA.vj + "' target='_blank'>" + bA
			.vj + "</a>", !0, [new l(L(13), function() {
				i.j(0)
			}, p.mT)]))
	}
}

function dA() {
	function vm(d) {
		vt(d), i.j(4, 5, new k("🚀 New Game Update", "The game has been updated! Please reload the game." +
			"<div style='border: white; border-width: 1px; border-style: solid; margin: 10px; padding: 5px;'><h2>FX Client is not yet compatible with the latest version of the game.</h2><p>Updates should normally be available within a few hours.<br>You can still use FX to play in singleplayer mode.</p></div>",
			!0, [new l(L(13), function() {
				i.vu()
			}, p.mT), new l("🔄 Reload", function() {
				m.n.o()
			}, p.q)]))
	}

	function vs(title, vN, d) {
		vt(d), i.j(4, 5, new k("⚠️ " + title, vN, !0))
	}

	function vt(d) {
		! function(d) {
			var dm = aP.vn();
			0 !== dm && (6 === dm ? aq.k8.vy(d) : 7 === dm ? (aj.vz(), aq.k8.close(aq.k8.vp, 3256)) : 8 === dm && a2.w0(!0))
		}(d), i.k8.vx()
	}
	this.vk = function(vl, d) {
		if (8 === i.pV && 0 === vl) 4211 === d ? vm(d) : (4480 === d && bX.p4.qv(), i.j(4, 0, new k("⚠️ Error", L(14, [d]), !0)));
		else {
			var dm = aP.vn();
			if (6 === dm) {
				if (4211 === d) return void vm(d);
				if (4214 !== d) return void aO.vo(vl)
			} else {
				if (7 !== dm) return 8 === dm ? void(vl !== aq.k8.vq || a2.jD || 1 !== a2.uU || a2.fj || aC.vr(L(14, [d]))) : void 0;
				if (vl !== aq.k8.vp) return
			}
			vs("Error", d, d)
		}
	}, this.vv = function(d) {
		8 === aP.vn() ? a2.jD || 1 !== a2.uU || aC.vr(L(14, [d])) : vs("Error", d, d)
	}, this.h = function() {
		vt(3268)
	}
}

function cl() {
	var w1, w2, w3 = -15e3,
		w4 = !1;

	function fn(d) {
		wO() || (w4 = !0, wP(d, 1), aq.k8.wQ(aq.k8.vq), wR(Math.floor(an.oY * d.clientX), Math.floor(an.oY * d.clientY)))
	}

	function wD(d) {
		w3 = bT.dn, wP(d, 1), aq.k8.wQ(aq.k8.vq), 0 < d.touches.length && (w1 = Math.floor(an.oY * d.touches[0].clientX), w2 = Math.floor(an.oY * d.touches[0].clientY), ah.wD(d) || wR(w1, w2))
	}

	function wR(ff, fg) {
		i.fn(ff, fg), 0 === a2.uU ? aP.fn(ff, fg) : b3.wS(ff, fg) || bS.fn(ff, fg) || aM.fn(ff, fg) || aA.wT(ff, fg) || aE.fn(ff, fg) || aB.fn(ff, fg) || b9.wU(ff, fg) || al.fn(ff, fg) || aA.wV(ff, fg)
	}

	function w9(d) {
		wO() || (w4 = !0, wP(d, 1), wW(Math.floor(an.oY * d.clientX), Math.floor(an.oY * d.clientY)))
	}

	function wE(d) {
		w3 = bT.dn, wP(d, 1), 0 < d.touches.length && (w1 = Math.floor(an.oY * d.touches[0].clientX), w2 = Math.floor(an.oY * d.touches[0].clientY), ah.wE(d) || wW(w1, w2))
	}

	function wW(ff, fg) {
		i.w9(ff, fg), 0 === a2.uU ? aP.w9(ff, fg) : (bJ.fe(ff, fg), bS.w9(ff, fg) || (aB.w9(ff, fg), aA.t7() ? aA.w9(ff, fg) : aG.fo ? aG.w9(ff) && (bT.dK = !0) : (aK.w9(ff, fg), aH.lR && aH.w9(ff, fg) && (bT.dK = !0))))
	}

	function wB(d) {
		wO() || (wP(d, 1), wX(), 0 === a2.uU ? (aP.click(-1024, -1024), aI.wY()) : (aK.wZ(-1024, -1024), aB.w9(-1024, -1024), aG.wa(), aH.lR = !1))
	}

	function wA(d) {
		wO() || (wP(d, 1), wb(Math.floor(an.oY * d.clientX), Math.floor(an.oY * d.clientY), 2 === d.button), b9.w7 && (b9.w7 = !1, d.preventDefault()))
	}

	function click(d) {
		wO() || wP(d, 1)
	}

	function wF(d) {
		w3 = bT.dn, wP(d, 1), d && d.touches && 0 < d.touches.length && 0 !== a2.uU ? aH.lR = !1 : ah.wc() || (wb(w1, w2, !1), b9.w7 && (b9.w7 = !1, d.preventDefault()))
	}

	function wG(d) {
		w3 = bT.dn, wP(d, 1), wb(w1, w2, !1), b9.w7 && (b9.w7 = !1, d.preventDefault())
	}

	function wH(d) {
		ax.wH(d)
	}

	function wI(d) {
		ax.wI(d)
	}

	function wJ(d) {
		wO() || wP(d, 0)
	}

	function wb(ff, fg, wd) {
		wX(), 0 === a2.uU ? aP.click(ff, fg) : (aK.wZ(ff, fg), bS.wZ(), aG.wa(), aH.lR = !1, aA.click(ff, fg, wd) ? bT.dK = !0 : aB.wA(ff, fg))
	}

	function wX() {
		i.wX()
	}

	function wC(d) {
		var ff, fg, deltaY;
		wO() || (wP(d, 1), aq.k8.wQ(aq.k8.vq), ff = Math.floor(an.oY * d.clientX), fg = Math.floor(an.oY * d.clientY), deltaY = d.deltaY, 1 === d.deltaMode && (deltaY *= 16), i.wC(ff, fg, deltaY), 0 === a2.uU ? aP.wC(ff, fg, deltaY) : aK.wC(ff, fg,
			deltaY) || (aG.we(ff, fg) ? aG.wC(deltaY) && (bT.dK = !0) : aH.wC(ff, fg, deltaY)))
	}

	function wK(d) {
		wP(d, 0)
	}

	function wP(d, id) {
		0 === id && i.t7() || (id = window.innerWidth / document.documentElement.clientWidth) < .999 || 1.001 < id || 0 !== aP.vn() && d.preventDefault()
	}

	function wM(d) {
		if (keybindHandler(d.key)) return;
		wO() || ("ArrowLeft" === d.key ? ae.wg(3) : "ArrowUp" === d.key ? ae.wg(0) : "ArrowRight" === d.key ? ae.wg(1) : "ArrowDown" === d.key ? ae.wg(2) : "a" === d.key ? aG.wh(.9375) : "d" === d.key ? aG.wh(16 / 15) : "s" === d.key ? aG.wh(7 / 8) :
			"w" === d.key ? aG.wh(8 / 7) : "1" === d.key ? aG.wh(.75) : "2" === d.key ? aG.wh(7 / 8) : "3" === d.key ? aG.wh(.9375) : "4" === d.key ? aG.wh(31 / 32) : "5" === d.key ? aG.wh(32 / 31) : "6" === d.key ? aG.wh(16 / 15) : "7" === d
			.key ? aG.wh(8 / 7) : "8" === d.key ? aG.wh(4 / 3) : "+" === d.key ? 0 !== a2.uU && aH.wC(Math.floor(an.u / 2), Math.floor(an.iE / 2), -200) : "-" === d.key ? 0 !== a2.uU && aH.wC(Math.floor(an.u / 2), Math.floor(an.iE / 2), 200) :
			"c" === d.key ? 0 !== a2.uU && bS.wi() : " " === d.key ? a2.uU && bJ.fh(!1) : "b" === d.key && a2.uU && bJ.fh(!0))
	}

	function wL(d) {
		wO() || bT.dn < 400 || "Enter" === d.key && i.wj(1) || (8 !== aP.vn() && aP.wj(d) ? bT.dK = !0 : "Escape" === d.key ? b9.dt() : "ArrowLeft" === d.key || "a" === d.key ? ae.wk(3) : "ArrowUp" === d.key || "w" === d.key ? ae.wk(0) :
			"ArrowRight" === d.key || "d" === d.key ? ae.wk(1) : "ArrowDown" === d.key || "s" === d.key ? ae.wk(2) : "h" === d.key ? b3.wl(!a2.lQ) : " " === d.key && a2.uU && (aB.fk && aB.wm(), a2.fj) && b3.wn(!1))
	}

	function wN() {
		"hidden" === document.visibilityState ? 1 === a2.uU && (a2.fj ? b3.wo() : !a2.jD || aB.fk || a2.fz || aB.wm()) : bT.dK = !0
	}

	function wO() {
		return w3 + 15e3 > bT.dn
	}

	function resize() {
		an.wr()
	}
	this.w5 = 0, this.w6 = "", this.w7 = !1, this.dD = function() {
		w8.addEventListener("mousedown", fn, {
			passive: !1
		}), w8.addEventListener("mousemove", w9, {
			passive: !1
		}), w8.addEventListener("mouseup", wA, {
			passive: !1
		}), w8.addEventListener("click", click, {
			passive: !1
		}), w8.addEventListener("mouseleave", wB, {
			passive: !1
		}), w8.addEventListener("wheel", wC, {
			passive: !1
		}), w8.addEventListener("touchstart", wD, {
			passive: !1
		}), w8.addEventListener("touchmove", wE, {
			passive: !1
		}), w8.addEventListener("touchend", wF, {
			passive: !1
		}), w8.addEventListener("touchcancel", wG, {
			passive: !1
		}), w8.addEventListener("dragover", wH), w8.addEventListener("drop", wI), w8.addEventListener("dblclick", wJ), document.addEventListener("contextmenu", wK), document.addEventListener("keyup", wL), document.addEventListener("keydown",
			wM), document.addEventListener("visibilitychange", wN), window.addEventListener("resize", resize)
	}, this.wU = function(ff, fg) {
		return !!b3.fn(ff, fg) || !!(aK.fn(ff, fg) || aH.fn(ff, fg) || aG.fn(ff, fg) || aC.fn(ff, fg))
	}, this.wp = wO, this.wq = function() {
		return !w4 || 0 < w3
	}, this.dt = function() {
		if (!i.t7()) return 8 === aP.vn() ? a2.lQ ? void b3.wl(!1) : bS.t7 ? void bS.wm() : void aB.wm() : void(7 === aP.vn() ? aj.ws() : 6 === aP.vn() ? aO.wt() : 2 === aP.vn() && aQ.wu());
		i.wj(2)
	}
}

function bf() {
	this.kt = new wv, this.oc = new ww, this.en = new wx, this.l1 = new wy, this.sn = new wz, this.x0 = new x1, this.gL = new x2, this.color = new x3, this.x4 = new x5, this.dD = function() {
		this.kt.qs()
	}
}

function ww() {
	this.rj = function(e5) {
		e5.fill(0)
	}, this.x6 = function(e5) {
		for (var ex = e5.length, a0 = 0; a0 < ex; a0++) e5[a0] = []
	}, this.x7 = function(gY, x8) {
		for (var gZ = bE.dz, a0 = 0; a0 < 3; a0++) gZ[a0] = x8 * gY[a0];
		return gZ
	}, this.x9 = function(gY, gZ, xA) {
		for (var gd = 0, a0 = 0; a0 < 3; a0++) gd += Math.abs(gY[a0] - gZ[a0]);
		return xA <= gd
	}, this.xB = function(gY, xC) {
		for (var a0 = 0; a0 < 3; a0++) gY[a0] = bB.o5(gY[a0] + xC, 0, 255);
		return gY
	}, this.xD = function(e5, pk, pl) {
		var a0, xE = 0;
		for (pl = pl || e5.length - 1, a0 = pk = pk || 0; a0 <= pl; a0++) xE += e5[a0];
		return xE
	}, this.xF = function(e5, xG) {
		for (var a0, xH, ex = e5.length, xI = [], hy = ex - 1; 0 <= hy; hy--) {
			for (a0 = xH = 0; a0 < ex; a0++) xG(e5[a0]) < xG(e5[xH]) && (xH = a0);
			ex--, xI.push(e5[xH]), e5[xH] = e5[ex], e5.pop()
		}
		return xI
	}, this.min = function(e5) {
		var a0, dr, ex = e5.length;
		if (0 === ex) return 0;
		for (dr = e5[0], a0 = 1; a0 < ex; a0++) dr = Math.min(dr, e5[a0]);
		return dr
	}, this.max = function(e5) {
		var a0, dr, ex = e5.length;
		if (0 === ex) return 0;
		for (dr = e5[0], a0 = 1; a0 < ex; a0++) dr = Math.max(dr, e5[a0]);
		return dr
	}, this.xJ = function(xK, xL, min) {
		for (var ex = xL[0], a0 = ex - 1; 0 <= a0; a0--) xK[a0] < min && (xK[a0] = xK[--ex]);
		xL[0] = ex
	}, this.xM = function(e5, ex, value) {
		for (var a0 = 0; a0 < ex; a0++) e5[a0] -= value
	}
}

function x2() {
	this.tL = function(xN, ke, xO) {
		var gF = xN.height,
			xP = b2.kt.rZ(gF, gF),
			gM = b2.kt.getContext(xP);
		return function(u, gM, xO) {
			gM.fillStyle = xO, gM.beginPath(), gM.arc(u / 2, u / 2, .47 * u, 0, 2 * Math.PI), gM.fill()
		}(gF, gM, xO), gM.drawImage(xN, -ke * gF, 0), xP
	}, this.xR = function(xS) {
		var gF = xS.height,
			gM = b2.kt.getContext(xS, !0),
			gI = gM.getImageData(0, 0, gF, gF);
		return b2.x0.xT(gI.data, gF, gF, .9), gM.putImageData(gI, 0, 0), xS
	}
}

function x3() {
	this.xU = function(dr) {
		return [dr >> 12 & 63, dr >> 6 & 63, 63 & dr]
	}, this.xV = function(dr) {
		for (var e5 = this.xU(dr), a0 = 0; a0 < 3; a0++) e5[a0] = ~~(4.05 * e5[a0]);
		return e5
	}, this.xW = function(dr) {
		dr = this.xV(dr);
		return b2.color.lm(dr[0], dr[1], dr[2])
	}, this.xX = function(e5) {
		for (var a0 = 0; a0 < 3; a0++) e5[a0] = ~~(e5[a0] / 4.04);
		return (e5[0] << 12) + (e5[1] << 6) + e5[2]
	}, this.lm = function(gO, po, i4) {
		return "rgb(" + gO + "," + po + "," + i4 + ")"
	}, this.lo = function(gO, po, i4, hy) {
		return "rgba(" + gO + "," + po + "," + i4 + "," + hy.toFixed(3) + ")"
	}, this.os = function(ik) {
		for (var e5 = ik.split("(")[1].split(","), dy = (e5.length, bE.dy), a0 = 0; a0 < 3; a0++) dy[a0] = parseInt(e5[a0]);
		return dy
	}, this.oo = function(xY, f6) {
		for (var e5 = xY.slice(xY.indexOf("(") + 1, xY.indexOf(")")).split(","), dy = bE.dy, a0 = 0; a0 < 3; a0++) dy[a0] = bB.o5(parseInt(e5[a0].trim(), 10) + f6, 0, 255);
		return 3 === e5.length ? this.lm(dy[0], dy[1], dy[2]) : this.lo(dy[0], dy[1], dy[2], parseFloat(e5[3].trim()))
	}, this.xZ = function(e5) {
		for (var oD = "#", a0 = 0; a0 < 3; a0++) {
			var gO = e5[a0].toString(16);
			oD += 1 === gO.length ? "0" + gO : gO
		}
		return oD
	}, this.xa = function(oD) {
		var gO, po;
		return oD.length < 7 ? p.kz : (gO = parseInt(oD.slice(1, 3), 16), po = parseInt(oD.slice(3, 5), 16), oD = parseInt(oD.slice(5, 7), 16), this.lm(gO, po, oD))
	}
}

function wz() {
	this.xb = function(oD, font, maxWidth) {
		if (ku.font = font, ku.measureText(oD).width <= maxWidth) return oD;
		for (var a0 = oD.length - 1; 1 <= a0; a0--)
			if (oD = oD.substring(0, a0), ku.measureText(oD + "...").width <= maxWidth) return oD + "...";
		return "..."
	}
}

function x5() {
	var xc = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	this.xd = function(dn) {
		var xf, oD = new Date(dn.getTime() - 6e4 * dn.getTimezoneOffset()).toUTCString();
		return oD.length < 12 || (oD = oD.substring(5, oD.length), 0 === (dn = dn.getTimezoneOffset())) ? oD : (xf = (dn < 0 ? "+" : "-") + bB.el(Math.abs(dn), 60), 0 == (dn = Math.abs(dn) % 60) ? oD + xf : oD + xf + ":" + (dn < 10 ? "0" : "") +
			dn)
	}, this.xg = function(dn) {
		var oD = dn.toUTCString();
		return oD.length < 12 ? oD : function(dn) {
			return xc[dn.getUTCDay()]
		}(dn) + ", " + oD.substring(5, oD.length - 4)
	}
}

function wv() {
	var xi = null;
	this.td = 0, this.qs = function() {
		var dr = bX.dV.data[5].value;
		xi = "px " + dr, "Trebuchet MS" !== dr && (xi += ", Trebuchet MS"), this.td = gE(32, 32, ["a", "b", "m"], 200, xi)
	}, this.rZ = function(u, iE) {
		var ik = document.createElement("canvas");
		return ik.width = u, ik.height = iE, ik
	}, this.getContext = function(gL, alpha) {
		return gL.getContext("2d", {
			alpha: alpha
		})
	}, this.getImageData = function(sn, u, iE) {
		return sn.getImageData(0, 0, u, iE)
	}, this.ky = function(type, size) {
		return size = size.toFixed(2), 0 === type ? size + xi : 1 === type ? "bold " + size + xi : 2 === type ? "lighter " + size + xi : 3 === type ? "italic " + size + xi : 4 === type ? "oblique " + size + xi : 5 === type ? "small-caps " +
			size + xi : "small-caps bold " + size + xi
	}, this.textAlign = function(gM, id) {
		gM.textAlign = 0 === id ? "left" : 1 === id ? "center" : "right"
	}, this.textBaseline = function(gM, id) {
		gM.textBaseline = 1 === id ? "middle" : 2 === id ? "bottom" : "top"
	}, this.oe = function(d, code, color) {
		color = this.od(bQ.xj) + " solid " + (color || p.lu);
		5 === (code = code || 5) ? d.style.border = color : 4 === code ? d.style.borderLeft = color : 2 === code ? d.style.borderBottom = color : 6 === code ? d.style.borderRight = color : d.style.borderTop = color
	}, this.pq = function(d, ff, fg, u, iE) {
		d = d.style;
		d.left = this.pr(ff), d.top = this.pr(fg), d.width = this.pr(u), d.height = this.pr(iE)
	}, this.oT = function(dr) {
		return 1 + dr * m.n.tX()
	}, this.p8 = function(lY, f5) {
		return lY * this.oT(void 0 === f5 ? .5 : f5) * an.oU / an.oY
	}, this.pp = function(lY, f5) {
		return lY * this.oT(void 0 === f5 ? .5 : f5) * an.oU
	}, this.pY = function(lY, f5, xk) {
		return this.oT(f5) * Math.min(lY * an.oU, xk * an.u) / an.oY
	}, this.od = function(dr) {
		return dr.toFixed(1) + "px"
	}, this.pr = function(dr) {
		return this.xm(dr).toFixed(1) + "px"
	}, this.xm = function(dr) {
		return dr / an.oY
	}, this.xn = function(pM, xo) {
		for (var oD = "<ul>", ex = pM.length, a0 = 0; a0 < ex; a0++) oD += "<li>" + pM[a0] + ": <a href='" + xo[a0] + "' target='_blank'>" + xo[a0] + "</a></li>";
		return oD += "</ul>"
	}, this.xp = function(xq) {
		return "<a href='" + xq + "' target='_blank'>" + xq + "</a>"
	}, this.xr = function(d) {
		navigator.clipboard && navigator.clipboard.writeText(d.value)
	}, this.xs = function(d) {
		var dp = d.innerText;
		b2.l1.xt(dp, "✔") || (1 === dp.length ? d.innerText = "✔" : d.innerText = dp + " ✔", setTimeout(function() {
			d.innerText = dp
		}, 500))
	}, this.measureText = function(oD) {
		return ku.measureText(oD).width
	}
}

function wx() {
	this.fl = function(dm) {
		return 0 === dm ? 1 === a2.uU && a2.fz : 1 === dm ? 1 === a2.uU && !a2.fz : 2 === a2.uU
	}, this.fm = function(player) {
		return 0 !== aX.kW[player] && 2 !== aX.xu[player]
	}, this.xv = function(player) {
		return player === a2.es && 2 !== aX.xu[player]
	}, this.i8 = function(player) {
		return player >= a2.ip || 2 === aX.xu[player]
	}, this.je = function(player) {
		return 0 !== aX.kW[player]
	}, this.nr = function(xw, xx) {
		return xw !== xx
	}, this.nM = function(player, dr) {
		return dr = this.xy(player, dr), aX.et[player] += dr, dr
	}, this.xy = function(player, dr) {
		var xz = aX.et[player];
		return dr = Math.min(dr, aX.ep[player] * a2.iw - xz), dr = Math.min(dr, a2.y0 - xz), Math.max(dr, 0)
	}, this.ns = function(player, h5, y1, y2) {
		var xz = aX.et[player],
			h5 = bB.el(xz * (h5 + 1), 1024),
			y1 = bB.el(y1 * xz, 1024),
			h5 = Math.min(h5, xz - y1);
		return 10 === a2.jB && (h5 = av.y4(player, h5)), bE.dw[0] = h5, bE.dw[1] = y1, y2 <= h5
	}, this.nJ = function(player, n0, mz) {
		var player = aX.et[player],
			y3 = bB.el(64 * player, 1024);
		return n0 = Math.min(n0, player - y3), y3 += player = this.y6(n0), n0 = this.xy(mz, n0 -= player), bE.dw[0] = n0, bE.dw[1] = y3, 1 <= n0
	}, this.nL = function(n0, mz) {
		var y5 = this.y6(n0);
		return n0 = this.xy(mz, n0 -= y5), bE.dw[0] = n0, bE.dw[1] = y5, 1 <= n0
	}, this.h4 = function(player, y7) {
		return bB.el(aX.et[player] * (y7 + 1), 1024)
	}, this.y6 = function(y8) {
		return bB.el(Math.max(2142 - bT.eq(), 0) * y8, 2142)
	}, this.o3 = function(player, y1) {
		aX.et[player] -= bB.el(y1 * aX.et[player], 1024)
	}, this.eo = function(player, y9) {
		var i4 = aX.et[player];
		return aX.et[player] = Math.max(i4 - y9, 0), Math.min(i4, y9)
	}, this.nv = function(player) {
		aX.et[player] -= bE.dw[0] + bE.dw[1]
	}, this.nt = function(player, hr) {
		return (hr = Math.min(hr, a2.f1)) < a2.f1 && 0 === aX.kW[hr] && (hr = a2.f1), (bE.e1[0] = hr) === a2.f1 || gC(player, hr)
	}, this.nx = function(player, mz) {
		return 0 !== aX.kW[mz] && !gC(player, mz)
	}, this.yA = function(player, yB) {
		for (var f4, ex = iq, vA = 0, yC = jw, a0 = 0; a0 < ex; a0++)
			if (f4 = yC[a0], aS.uN(f4)) {
				if (player === f4) return !0;
				if (++vA > yB) return !1
			} return !1
	}, this.jq = function(f4) {
		var yD = a2.hl ? bV.v5() : aX.ep[jw[0]];
		return yD >= bB.el(f4 * a2.iV, 100)
	}
}

function x1() {
	this.yE = function(gL, yF, yG) {
		var u = gL.width,
			iE = gL.height,
			ik = b2.kt.rZ(u, iE),
			gM = b2.kt.getContext(ik, !0),
			gL = (gM.drawImage(gL, 0, 0), gM.getImageData(0, 0, u, iE));
		return yF(gL.data, u, iE, yG), gM.putImageData(gL, 0, 0), ik
	}, this.yH = function(rk, u, iE) {
		for (var ff = u - 1; 0 <= ff; ff--)
			for (var fg = iE - 1; 0 <= fg; fg--) {
				var a0 = 4 * (ff + fg * u);
				rk[3 + a0] = rk[a0], rk[a0] = rk[1 + a0] = rk[2 + a0] = 255
			}
	}, this.yI = function(rk, u, iE) {
		for (var ff = u - 1; 0 <= ff; ff--)
			for (var fg = iE - 1; 0 <= fg; fg--) {
				var a0 = 4 * (ff + fg * u);
				rk[1 + a0] > rk[2 + a0] + 10 && (rk[3 + a0] = rk[a0], rk[1 + a0] = rk[2 + a0])
			}
	}, this.yJ = function(rk, u, iE, yG) {
		for (var gap = Math.floor(Math.min(u, iE) * yG), ff = 0; ff < u; ff++)
			for (var a0, fg = 0; fg < iE; fg++)(ff < gap || fg < gap || u - gap <= ff || iE - gap <= fg) && (rk[3 + (a0 = 4 * (ff + fg * u))] = 255 - 255 * (rk[1 + a0] - rk[a0]) / (255 - rk[a0]))
	}, this.yK = function(rk, u, iE, yG) {
		for (var ff = u - 1; 0 <= ff; ff--)
			for (var fg = iE - 1; 0 <= fg; fg--) {
				var a0 = 4 * (ff + fg * u);
				rk[a0] = yG[0], rk[1 + a0] = yG[1], rk[2 + a0] = yG[2]
			}
	}, this.yL = function(rk, u, iE, yG) {
		for (var gap = Math.floor(u * yG), ff = 0; ff < u; ff++)
			for (var a0, fg = 0; fg < iE; fg++)(ff < gap || fg < gap || u - gap <= ff || iE - gap <= fg) && (rk[a0 = 4 * (ff + fg * u)] = rk[1 + a0] = rk[2 + a0] = 0)
	}, this.yM = function(rk, u, iE) {
		for (var fg, a0, ff = u - 1; 0 <= ff; ff--)
			for (fg = iE - 1; 0 <= fg; fg--) 200 < rk[1 + (a0 = 4 * (ff + fg * u))] && rk[1 + a0] - 20 > rk[a0] && rk[1 + a0] - 20 > rk[2 + a0] ? rk[a0] + rk[2 + a0] < 40 ? rk[3 + a0] = 0 : (rk[3 + a0] = rk[a0], rk[a0] = 255, rk[1 + a0] = 255,
				rk[2 + a0] = 255) : rk[a0] < 50 && rk[1 + a0] < 50 && rk[2 + a0] < 50 && (rk[a0] + rk[1 + a0] + rk[2 + a0] < 50 ? rk[3 + a0] = 180 : rk[3 + a0] = 180 + Math.floor(75 * (rk[a0] + rk[1 + a0] + rk[2 + a0] - 50) / 100))
	}, this.yN = function(rk, u, iE) {
		for (var fg, a0, ff = u - 1; 0 <= ff; ff--)
			for (fg = iE - 1; 0 <= fg; fg--) rk[1 + (a0 = 4 * (ff + fg * u))] > rk[a0] + 20 && rk[1 + a0] > rk[2 + a0] + 20 && rk[a0] + rk[2] < 40 && (rk[3 + a0] = 255 - rk[1 + a0], rk[a0] = rk[1 + a0] = rk[2 + a0] = rk[a0])
	}, this.xT = function(rk, u, iE, yG) {
		for (var gO = u >> 1, ff = 0; ff < u; ff++)
			for (var fg = 0; fg < iE; fg++) Math.sqrt((ff - gO) * (ff - gO) + (fg - gO) * (fg - gO)) > yG * gO && (rk[4 * (ff + fg * u) + 3] = 0)
	}
}

function wy() {
	this.l2 = function(dr) {
		var a0, yO, yP, yQ, yR;
		if (dr < 0) return "-" + this.l2(Math.abs(dr));
		if (dr < 1e3) return dr.toString();
		for (yO = Math.floor(Math.log(dr + .5) / Math.log(10)) + 1, yP = Math.floor((yO - 1) / 3), yR = (yQ = dr.toString()).substring(yO - 3, yO), a0 = 1; a0 < yP; a0++) yR = yQ.substring(yO - 3 * (a0 + 1), yO - 3 * a0) + " " + yR;
		return yQ.substring(0, yO - 3 * yP) + " " + yR
	}, this.yS = function(f4, yO) {
		return f4.toFixed(yO) + "%"
	}, this.vQ = function(dr, yT) {
		return dr.toFixed(bB.o5(Math.floor((void 0 === yT ? 3 : yT) - Math.log10(Math.max(dr, 1))), 0, 8))
	}, this.yU = function(dr, lY, yO) {
		return (dr * lY).toFixed(yO)
	}, this.vL = function(username) {
		var yW, yV = username.indexOf("[");
		return !(yV < 0) && 1 < (yW = username.indexOf("]")) - yV && yW - yV <= 8 ? username.substring(yV + 1, yW).toUpperCase().trim() : null
	}, leaderboardFilter.parseClanFromPlayerName = this.vL;
	this.yX = function(oD) {
		for (var hy = Math.floor(.5 * oD.length + .5), ld = Math.floor(.5 * (hy - 1)), a0 = 0; a0 < ld; a0++)
			for (var i4 = -1; i4 < 2; i4 += 2) {
				var ik = hy + i4 * a0;
				if (" " === oD[ik]) return [this.yY(oD.substring(0, ik)), this.yZ(oD.substring(ik))]
			}
		return [oD.substring(0, hy), oD.substring(hy)]
	}, this.yZ = function(oD) {
		for (var ex = oD.length, a0 = 0; a0 < ex; a0++)
			if (" " !== oD[a0]) return oD.substring(a0);
		return oD
	}, this.yY = function(oD) {
		for (var a0 = oD.length - 1; 0 <= a0; a0--)
			if (" " !== oD[a0]) return oD.substring(0, a0 + 1);
		return oD
	}, this.ya = function(oD, yb) {
		return oD.split("(")[0] + "(🧈 " + yb.toFixed(2) + ")"
	}, this.startsWith = function(oD, yc) {
		return oD.substring(0, yc.length) === yc
	}, this.xt = function(oD, yc) {
		var ex = oD.length;
		return oD.substring(ex - yc.length, ex) === yc
	}
}

function yd() {
	this.ho = function(player, fu) {
		a8.sb(player, bC.gV(fu), bC.gX(fu)) && (bT.dK = !0), a2.jD && this.ha()
	}, this.ha = function() {
		a2.fz = !1;
		for (var a0 = 0; a0 < a2.ip; a0++) 0 !== aX.kW[a0] && 0 === aX.ep[a0] && a8.sh(a0);
		0 !== aX.kW[a2.es] ? (bR.ev[7] = aX.ep[a2.es], bR.ev[8] = aX.et[a2.es], aG.ye(), aL.yf(), a2.fj || a7.lN(aX.hJ[a2.es] - 5, aX.hL[a2.es] - 5, aX.hK[a2.es] + 5, aX.hM[a2.es] + 5), ai.dD()) : aM.show(!1, !1, !1, !0), aC.yg(18), aW.yh(), aW
			.kG(!0), bF.k8.yi(), a2.nq = null, bP.yj = !0, bP.yk(), a2.jD && m.n.setState(1)
	}
}

function bh() {
	this.f1 = 512, this.y0 = 15e8, this.yl = 1e9, this.sU = 512, this.em = 2, this.es = 0, this.ip = 0, this.uX = 0, this.jA = 0, this.uW = 0, this.sE = 512, this.iw = 150, this.jD = !0, this.fj = !1, this.uU = 0, this.iV = 0, this.lQ = !1, this
		.fz = !1, this.ym = !1, this.hl = !1, this.yn = 0, this.jB = 0, this.vC = !1, this.nq = null, this.um = null, this.yo = 30, this.uR = 0, this.uZ = 0, this.ul = 0, this.yp = function(yq, yr, su, ys, yt, yu) {
			this.lQ = !1, this.fj = yu, this.jB = ys, this.vC = yt, this.hl = this.jB < 7 || 9 === this.jB, this.uX = this.ip = su.length, this.jD = 1 === this.uX, this.jB = 10 === this.jB && this.jD ? 7 : this.jB, this.jB = 8 === this.jB && 2 !==
				this.ip ? 7 : this.jB, this.yn = 9 === this.jB ? 2 : this.jB + 2, this.yo = this.ip <= 2 ? 30 : this.ip <= 50 ? 40 : 50, ay.j7 && !ay.j8.yv ? this.ym = this.fz = !1 : this.ym = this.fz = this.hl || this.ip < 100, this.nq = this.fz ?
				new yd : null, this.jD ? this.sE = aQ.yw() : this.sE = this.f1, this.jA = this.sE - this.ip, this.uW = 0, this.es = yr, this.uR = 0, this.uZ = 0, this.ul = 0, ao.yx(yq), ap.dD(), aX.dD(su), b0.ms.nc = [], bU.dD(su), this.uU = 1, bR
				.dD(), yy(), ac.yz(), bP.dD(), aV.dD(), aS.dD(su), ag.dD(), bC.dD(), bD.dD(), ab.dD(), bH.dD(), bL.z0(), a3.dD(), aZ.w(), a8.dD(), z1(), b1.dD(yq, su, ys, yt), bV.dD(), bF.dD(), bS.dD(), z2.putImageData(z3, 0, 0), aK.dD(), aH.dD(), aG
				.dD(), b3.dD(), al.dD(), aJ.dD(), aL.dD(), aB.dD(), aF.dD(), aC.dD(), aE.dD(), aA.dD(), aM.dD(), a6.dD(), a4.dD(), a5.dD(), eR(), aU.dD(), aW.dD(), av.dD(), aw.dD(), ar.dD(), 8 === this.jB ? (this.um = new st, this.um.dD(su)) : this
				.um = null, bT.z0(), a7.lM(), 0 === aX.kW[a2.es] && aM.show(!1, !0), aW.kG(!0), ai.dD(), bT.dK = !0, this.fj || this.jD && this.fz || m.n.setState(1)
		}, this.w0 = function(z5) {
			aq.k8.z6(), this.uU = 0, bT.z7(), m.n.setState(0), z5 || bK.dZ.show(), aP.setState(0), i.j(5, 5)
		}, this.z8 = function() {
			return this.fj ? aB.fk || !b3.z9 : this.jD && (aB.fk || this.fz)
		}, this.zA = function() {
			return 1 === this.uU && !this.fz
		}
}

function d9() {
	this.ta = 0, this.gap = 0, this.xj = 0, this.oa = 0, this.dD = function() {
		this.resize()
	}, this.resize = function() {
		this.ta = .0022 * b2.kt.oT(.5) * an.oU, this.xj = this.ta / an.oY, this.gap = Math.max(Math.floor((m.n.tX() ? .0114 : .01296) * an.oU), 2), this.oa = this.gap / an.oY
	}
}

function d8() {
	this.zB = function() {
		return 2 === m.id ? 4 : m.n.tX() ? 2 : 1
	}
}

function bs() {
	var ov, ff, fg, zC, zD, zE, dn, player, zF, gap, zoom, nV, zG;

	function zQ(player) {
		for (var a0 = nV.length - 1; 0 <= a0; a0--)
			if (nV[a0] === player) return 1
	}

	function zO(zL) {
		var a0, ex;
		if (-1 !== zL)
			for (ex = ov.length, a0 = 0; a0 < ex; a0++)
				if (ov[a0].t7 && ov[a0].ff + 1 === zL % 4 && ov[a0].fg + 1 === zL >> 2) return a0;
		return -1
	}

	function zM(jl, jm) {
		var po = gap / 2;
		return jl < ff - zC - 3 * po || ff + 3 * zC + 5 * po < jl || jm < fg - zC - 3 * po || fg + 2 * zC + 3 * po < jm ? -1 : 4 * (jm < fg - po ? 0 : jm < fg + zC + po ? 1 : 2) + (jl < ff - po ? 0 : jl < ff + zC + po ? 1 : jl < ff + 2 * zC + 3 *
			po ? 2 : 3)
	}
	this.zH = function() {
		var a0, i4, zK = [p.mG, p.mS, p.ls, p.mh, p.ma];
		for (ov = new Array(8), a0 = 0; a0 < 8; a0++) ov[a0] = {
			id: a0,
			t7: !1,
			jb: 0,
			gL: [],
			ff: 0,
			fg: 0
		};
		for (ov[0].colors = [0, 1, 2, 3], ov[0].ff = 0, ov[0].fg = 0, ov[1].colors = [0, 1, 4], ov[1].ff = 1, ov[1].fg = 0, ov[2].colors = [0, 2], ov[2].ff = -1, ov[2].fg = 0, ov[3].colors = [0], ov[3].ff = 0, ov[3].fg = 0, ov[4].colors = [0, 2],
			ov[4].ff = 1, ov[4].fg = 1, ov[5].colors = [3], ov[5].ff = 0, ov[5].fg = -1, ov[6].id = 20, ov[6].colors = [0], ov[6].ff = 1, ov[6].fg = -1, ov[7].id = 21, ov[7].colors = [0], ov[7].ff = 0, ov[7].fg = 1, a0 = 0; a0 < 8; a0++)
			for (i4 = 0; i4 < ov[a0].colors.length; i4++) ov[a0].gL.push(function(id, xO) {
				if (id < 20) return b2.gL.tL(aR.get(3), id, xO);
				var xO = aR.get(3).height,
					xP = b2.kt.rZ(xO, xO),
					gM = b2.kt.getContext(xP);
				20 === id ? gM.drawImage(aR.get(18), 0, 0) : 21 === id && aa.rk.tb(aa.t4.tP + aa.t4.th, gM, 0, 0, xO);
				return xP
			}(ov[a0].id, zK[ov[a0].colors[i4]]))
	}, this.zJ = function() {
		return ov
	}, this.dD = function() {
		nV = [], ff = fg = dn = 0, zD = zE = -1e3, this.resize()
	}, this.resize = function() {
		zC = Math.floor((m.n.tX() ? .075 : .0468) * an.oU), zoom = zC / aR.get(3).height, gap = Math.floor(zC / 3)
	}, this.wT = function(jl, jm) {
		return !!this.t7() && (bT.dK = !0, !!aa.rk.fn(jl, jm, player) || (jl = function(jl, jm) {
			zE = zD = -1e3;
			var zN = zO(zM(jl, jm));
			if (-1 === zN) return 0;
			if (1 !== ov[zN].colors[ov[zN].jb])
				if (5 === zN) {
					if (! function() {
							var dp = performance.now();
							zG + 4e3 < dp && (nV = []);
							zG = dp
						}(), zQ(player)) return 1;
					nV.push(player), 16 < nV.length && nV.shift()
				} else if (6 === zN) {
				for (var a0 = nV.length - 1; 0 <= a0; a0--) 0 === aX.kW[nV[a0]] && nV.splice(a0, 1);
				0 < nV.length && (aw.zR(1, nV, !0) && b0.en.nU(nV, player), nV = [])
			} else if (2 === zN) b0.g0.my(aG.g7(), player);
			else if (3 === zN) a2.fz && b0.g0.g1(zF);
			else if (0 === zN)
				if (0 === ov[0].jb) {
					if (a2.ym && aL.zS() < 300) return 1;
					b0.g0.g9(aG.g7(), player)
				} else ar.gB(player, aG.g7());
			else if (1 === zN) bL.zT(), b0.g0.g6(aG.g7(), zF);
			else {
				if (7 === zN) return bL.zU(), aa.rk.show(jl, jm), 2;
				if (4 !== zN) return 0;
				aw.zR(0, [player], !0) && b0.en.nR(player)
			}
			return 1
		}(jl, jm), this.pn(), 2 === jl && (aa.rk.t7 = !0), 0 < jl))
	}, this.wV = function(jl, jm) {
		this.t7() || (zD = jl, zE = jm, dn = performance.now())
	}, hoveringTooltip.display = function(mouseX, mouseY) {
		var coordX = bC.fr(mouseX),
			coordY = bC.ft(mouseY),
			coord = bC.fv(coordX, coordY),
			point = bC.fx(coord);
		if (coordX < 0 || coordY < 0) return;
		(function(jl, jm, fw) {
			aS.ez(fw) || -1 === (jl = bD.g4.zh(jl, jm)) ? aC.zg(fw) : aC.zi(jl)
		}(mouseX, mouseY, point))
	}
	this.click = function(jl, jm, wd) {
		var fq = bC.fr(jl),
			fs = bC.ft(jm),
			fu = bC.fv(fq, fs),
			fw = bC.fx(fu);
		if (!bC.fy(fq, fs)) return !1;
		fq = (m.n.tX() ? .025 : .0144) * an.oU, fs = performance.now();
		if (Math.abs(jl - zD) > fq || Math.abs(jm - zE) > fq || dn + 500 < fs) return !1;
		if (dn = fs, wd && ! function(jl, jm, fw) {
				aS.ez(fw) || -1 === (jl = bD.g4.zh(jl, jm)) ? aC.zg(fw) : aC.zi(jl)
			}(jl, jm, fw), aB.fk || this.t7() || !b2.en.fm(a2.es) || a2.fj) return this.pn(), !1;
		if (a2.fz) {
			if (!wd) {
				if (!aS.ez(fw)) return !1;
				zF = fu, ov[3].t7 = !0
			}
		} else if (bD.g4.n3(fu)) wd || (bD.zY.zZ = -1);
		else {
			if (wd) return !1;
			bD.g4.za(jl, jm) || (2 === a2.uU ? aS.f7(fw) && (player = aS.f8(fw), aS.uN(player)) && (ov[0].t7 = !0, ov[0].jb = 1, ov[7].t7 = !0) : aS.g2(fw) || (zF = fu, bD.g4.g5(a2.es, fu) && (ov[0].t7 = !0, ov[0].jb = 1, ov[1].t7 = !0, ov[1]
				.jb = bE.e0[2] ? 0 : 2), aS.g3(fw)) || (aS.f9(fw) ? (player = a2.f1, g8(a2.es) ? (ov[0].t7 = !0, ov[0].jb = 0) : gA(a2.es, player) && (ov[0].t7 = !0, ov[0].jb = 3)) : (player = aS.f8(fw)) === a2.es ? (ov[0].t7 = !0, ov[0]
				.jb = 1, ov[7].t7 = !0) : (ov[0].jb = 1, ov[5].t7 = function(player) {
				return aS.uN(player) && !zQ(player) && aw.zR(1, [player], !1)
			}(player), ov[7].t7 = aS.uN(player), gC(player, a2.es) ? (ov[4].t7 = aS.uN(player) && !aW.zc(player) && aw.zR(0, [player], !1), ov[6].t7 = function(player) {
				if (0 === nV.length) return !1;
				if (performance.now() > zG + 4e3) return !(nV = []);
				return !zQ(player) && ! function(player) {
					var a0;
					if (a2.hl)
						for (a0 = nV.length - 1; 0 <= a0; a0--)
							if (!gC(player, nV[a0])) return 1;
					return
				}(player)
			}(player), gD(a2.es, player) ? (ov[0].jb = 0, ov[0].t7 = !0) : gA(a2.es, player) && (ov[0].jb = 3, ov[0].t7 = !0), ov[0].t7 = this.ze()) : (ov[2].t7 = !0, ov[0].t7 = !0))))
		}
		return this.zX(jl, jm)
	}, this.zX = function(jl, jm) {
		return ff = jl - Math.floor(zC / 2), fg = jm - Math.floor(zC / 2), !!this.t7()
	}, this.w9 = function(jl, jm) {
		return !!this.t7() && (aa.rk.t7 ? !aa.rk.tZ(jl, jm) && (aa.rk.t7 = !1, bT.dK = !0) : function(v2, jl, jm) {
			jl = zM(jl, jm);
			if (0 <= zO(jl)) return !1;
			if ((1 === jl || 6 === jl) && 0 <= zO(2)) return !1;
			if ((6 === jl || 9 === jl) && 0 <= zO(10)) return !1;
			return v2.pn(), bT.dK = !0
		}(this, jl, jm))
	}, this.pn = function() {
		for (var a0 = ov.length - 1; 0 <= a0; a0--) ov[a0].t7 = !1, ov[a0].jb = 0;
		aa.rk.t7 = !1
	}, this.t7 = function() {
		return this.ze() || aa.rk.t7
	}, this.ze = function() {
		for (var ex = ov.length, a0 = 0; a0 < ex; a0++)
			if (ov[a0].t7) return !0;
		return !1
	}, this.kk = function() {
		if (this.t7())
			if (aa.rk.t7) aa.rk.kk();
			else {
				var a0, gM = ku,
					i4 = ov,
					ex = i4.length,
					zm = (zC + gap) / zoom;
				for (gM.imageSmoothingEnabled = !0, gM.setTransform(zoom, 0, 0, zoom, ff, fg), a0 = 0; a0 < ex; a0++) i4[a0].t7 && ku.drawImage(i4[a0].gL[i4[a0].jb], i4[a0].ff * zm, i4[a0].fg * zm);
				gM.imageSmoothingEnabled = !1, gM.setTransform(1, 0, 0, 1, 0, 0)
			}
	}
}

function bt() {
	var iE, gL, zn, zo, zp, zq = -1;

	function zr() {
		var zs, sn = gL.getContext("2d", {
			alpha: !0
		});
		sn.clearRect(0, 0, iE, iE), sn.fillStyle = p.lp, sn.fillRect(0, 0, iE, iE), 0 === zo && (sn.fillStyle = p.lv, sn.fillRect(0, 0, iE, iE)), sn.fillStyle = p.lu, sn.fillRect(0, 0, iE, 1), sn.fillRect(0, 0, 1, iE), sn.fillRect(0, iE - 1, iE, 1),
			sn.fillRect(iE - 1, 0, 1, iE), zs = .9 * iE / aR.get(0).width, sn.imageSmoothingEnabled = !0, sn.setTransform(zs, 0, 0, zs, Math.floor((iE - zs * aR.get(0).width) / 2), Math.floor((iE - zs * aR.get(0).height) / 2)), sn.drawImage(aR.get(
				0), 0, 0), sn.setTransform(1, 0, 0, 1, 0, 0)
	}

	function zu(jl, jm) {
		if (!aB.fk) return jl <= iE + bQ.gap && jm >= aG.fg ? 0 : -1;
		if (jl <= 4 * iE + bQ.gap) {
			if (jm >= aG.fg) return 0;
			if (jm >= aG.fg - iE - zp * bQ.gap) return 2
		} else if (jl <= 7 * iE + bQ.gap && jm >= aG.fg - iE - zp * bQ.gap) return 1;
		return -1
	}
	this.fk = !1, this.dD = function() {
		zo = -1, this.fk = !1, zp = m.n.tX() ? 1.2 : .6, this.resize()
	}, this.resize = function() {
		iE = aG.iE, (gL = document.createElement("canvas")).width = iE, gL.height = iE, zn = b2.kt.ky(1, (m.n.tX() ? .5 : .45) * iE), zr()
	}, this.wm = function() {
		this.fk = !this.fk, this.fk ? (bK.dX.hideCMPButton(), b3.wl(!1), a2.fj && b3.z9 && b3.wn(!0), this.zt()) : (zo = -1, zr(), !a2.jD || 1 !== a2.uU || a2.fz || a2.fj || m.n.setState(1)), bT.dK = !0
	}, this.zt = function() {
		(a2.jD || a2.fj) && 1 === a2.uU && (aK.kG(!0), a2.fz || setTimeout(function() {
			bP.uf()
		}, 0), m.n.setState(0))
	}, this.fn = function(jl, jm) {
		return 0 <= (zq = zu(jl, jm))
	}, this.w9 = function(jl, jm) {
		jl = zu(jl, jm);
		jl !== zo && (zo = jl, this.fk || zr(), bT.dK = !0)
	}, this.wA = function(jl, jm) {
		var jb = zu(jl, jm);
		if (-1 === jb) return !1;
		if (zq !== jb) return !1;
		if (this.fk) {
			if (a2.lQ) return 0 <= jb && b3.wl(!1), !a2.fj;
			if (0 === jb) a2.w0();
			else if (1 === jb) this.wm();
			else if (2 === jb) i.j(1, 0);
			else {
				if (! function() {
						if (a2.jD || 1 !== a2.uU || a2.fj || bS.t7) return 1;
						aB.wm()
					}()) return !1;
				b9.wU(jl, jm) || aA.wV(jl, jm)
			}
			return !0
		}
		return 0 === jb && (this.wm(), !0)
	}, this.kk = function() {
		var u;
		this.fk ? (u = Math.floor(5.5 * iE), ku.setTransform(1, 0, 0, 1, bQ.gap, aG.fg), ku.fillStyle = p.lp, ku.fillRect(0, 0, u, iE), 0 === zo ? (ku.fillStyle = p.lv, ku.fillRect(0, 0, 4 * iE, iE)) : 1 === zo && (ku.fillStyle = p.lv, ku
				.fillRect(4 * iE, 0, Math.floor(1.5 * iE), iE)), ku.fillStyle = p.lu, ku.fillRect(0, 0, u, 1), ku.fillRect(0, 0, 1, iE), ku.fillRect(4 * iE, 0, 1, iE), ku.fillRect(0, iE - 1, u, 1), ku.fillRect(u - 1, 0, 1, iE), ku.font = zn,
			b2.kt.textBaseline(ku, 1), b2.kt.textAlign(ku, 1), ku.fillText(L(15), 2 * iE, .54 * iE), u = .4 * iE, aB.zz(bQ.gap + 4 * iE + (1.5 * iE - u) / 2, aG.fg + .3 * iE, u), u = 1, ku.setTransform(1, 0, 0, 1, bQ.gap, aG.fg - u * zp * bQ
				.gap - u * iE), ku.fillStyle = p.lp, ku.fillRect(0, 0, 4 * iE, iE), zo === u + 1 && (ku.fillStyle = p.lv, ku.fillRect(0, 0, 4 * iE, iE)), ku.fillStyle = p.lu, ku.fillRect(0, 0, 4 * iE, 1), ku.fillRect(0, 0, 1, iE), ku
			.fillRect(4 * iE, 0, 1, iE), ku.fillRect(0, iE - 1, 4 * iE, 1), ku.fillText(L(0 === u ? 15 : 16), 2 * iE, .54 * iE), ku.setTransform(1, 0, 0, 1, 0, 0)) : ku.drawImage(gL, bQ.gap, aG.fg)
	}, this.zy = function(player) {
		return 0 !== aX.kW[player] && 2 !== a2.uU && aS.uN(player)
	}, this.zz = function(ff, fg, ex) {
		ku.setTransform(1, 0, 0, 1, ff, fg), ku.lineWidth = bQ.ta, ku.strokeStyle = p.lu, ku.beginPath(), ku.moveTo(0, 0), ku.lineTo(ex, ex), ku.moveTo(0, ex), ku.lineTo(ex, 0), ku.stroke()
	}
}

function bu() {
	var a01, iE, a02, a03, a04, a05, a06, a07, a08;

	function kw() {
		return aG.a0S(aC.a0O()) ? al.t7 ? aG.fg - aG.iE - 2 * a02 : aG.fg - a02 : b3.a0S(aC.a0R()) ? al.t7 ? b3.kw() - aG.iE - 2 * a02 : b3.kw() - a02 : al.t7 ? an.iE - aG.iE - (bY.zB() + 1) * a02 : an.iE - bY.zB() * bQ.gap
	}

	function a0E(dp, oD, id, f4, a0I, a0J, rs, a0K, a0L, a0M) {
		var a0, sn, xP, oM, e5, a0X = void 0 !== a0L,
			u = Math.floor(aF.measureText(oD, aC.zn) + 1.5 * a03 + (a0X ? iE : 1.5 * a03));
		if (bT.dK = !0, u + a02 > an.u && !a0X && 50 !== id && 20 < oD.length) a0E(dp, (e5 = b2.l1.yX(oD))[0], id, f4, a0I, a0J, rs, a0K, a0L, a0M), a0E(dp, e5[1], id, f4, a0I, a0J, rs, a0K, a0L, a0M);
		else if (e5 = u + (50 === id ? a04 : 0), (xP = document.createElement("canvas")).width = u, xP.height = iE, (sn = xP.getContext("2d", {
				alpha: !0
			})).font = aC.zn, b2.kt.textBaseline(sn, 1), b2.kt.textAlign(sn, 0), sn.clearRect(0, 0, u, iE), sn.fillStyle = a0J, sn.fillRect(0, 0, u, iE), sn.fillStyle = a0I, sn.fillText(oD, Math.floor(1.5 * a03), Math.floor(iE / 2)), a0X && (sn
				.imageSmoothingEnabled = !0, aa.rk.tb(a0L, sn, u - iE, 0, iE)), 0 === (oM = {
				dn: dp,
				oD: oD,
				id: id,
				player: f4,
				gL: xP,
				a0I: a0I,
				a0J: a0J,
				u: u,
				a0P: e5,
				rs: rs,
				a0K: a0K,
				a0L: a0L,
				a0M: a0M
			}).dn || 0 < a01.length && 0 < a01[0].dn) a01.unshift(oM);
		else {
			for (a0 = 1; a0 < a01.length; a0++)
				if (0 < a01[a0].dn) return void a01.splice(a0, 0, oM);
			a01.push(oM)
		}
	}

	function a0G(gO, po, i4) {
		return "rgb(" + gO + "," + po + "," + i4 + ")"
	}

	function a0Y(id, jL) {
		for (var ex = a01.length, a0 = 0; a0 < ex; a0++) a01[a0].id === id && jL-- <= 0 && (a01.splice(a0, 1), a0--, ex--)
	}

	function a0Z(id, player) {
		for (var a0r = !1, a0 = a01.length - 1; 0 <= a0; a0--) a01[a0].id !== id || player !== a2.f1 && a01[a0].player !== player || (a01.splice(a0, 1), a0r = !0);
		return a0r
	}

	function a0x(oD) {
		a0E(340, oD, 6, 0, a0G(215, 245, 255), p.lr, -1, !1)
	}
	this.a09 = "", this.dD = function() {
		var self;
		a07 = 0, a06 = m.n.tX() ? 7 : 12, a05 = {
				su: [0, 0, 0],
				a0A: [0, 0, 0],
				lK: [220, 180, 180],
				qC: [0, 0, 0],
				ik: [0, 0, 0]
			}, a01 = [], this.resize(), a2.fz && this.ug(0, 18), a0x(L(56, [bI.j8.s1[bI.s2].name])), a0x(L(57, [bI.eS - 2, bI.eT - 2])), a0x(L(58, [ac.a0y])), ac.a0y !== ac.a0z && a0x(L(59, [ac.a0z, b2.l1.yS(100 * ac.a0z / ac.a0y, 1)])), 0 < ac
			.a10 && a0x(L(60, [ac.a10, b2.l1.yS(100 * ac.a10 / ac.a0y, 1)])), 0 < ac.a11 && a0x(L(61, [ac.a11, b2.l1.yS(100 * ac.a11 / ac.a0y, 1)])), 10 === a2.jB && a0E(120, L(62), 6, 0, a0G(235, 255, 120), p.lr, -1, !1), 0 !== (self = this).a09
			.length && (a0E(200, self.a09, 0, 0, p.lu, p.lr, -1, !1), self.a09 = ""), this.a0D()
	}, this.a0D = function() {
		var a0, ex;
		if (ay.j7)
			for (ex = ay.j8.a0F.length, a0 = 0; a0 < ex; a0++) a0E(400, ay.j8.a0F[a0], 6, 0, a0G(255, 255, 255), p.lr, -1, !1)
	}, this.resize = function() {
		var a0H, a0;
		if (iE = (iE = Math.floor((m.n.tX() ? .031 : .0249) * an.oU)) < 10 ? 10 : iE, this.fontSize = Math.floor(2 * iE / 3), this.zn = b2.kt.ky(1, this.fontSize), a02 = bQ.gap, a03 = Math.floor(iE / 5), 0 < a01.length)
			for (a0H = a01, a01 = [], a0 = a0H.length - 1; 0 <= a0; a0--) a0E(a0H[a0].dn, a0H[a0].oD, a0H[a0].id, a0H[a0].player, a0H[a0].a0I, a0H[a0].a0J, a0H[a0].rs, a0H[a0].a0K, a0H[a0].a0L, a0H[a0].a0M);
		this.a0N()
	}, this.a0N = function() {
		a08 = document.createElement("canvas");
		var oD = L(17),
			sn = (a04 = aF.measureText(oD, this.zn) + 5 * a03, a08.height = iE, a08.width = a04, a08.getContext("2d", {
				alpha: !0
			}));
		sn.font = this.zn, b2.kt.textBaseline(sn, 1), b2.kt.textAlign(sn, 1), sn.clearRect(0, 0, a04, iE), sn.fillStyle = p.q, sn.fillRect(0, 0, a04, iE), sn.fillStyle = p.lu, sn.fillText(oD, Math.floor(a04 / 2), Math.floor(iE / 2))
	}, this.a0O = function() {
		var ex;
		return al.t7 ? al.u : 0 === (ex = a01.length) ? 0 : 1 === ex ? a01[0].a0P : a0Q(a01[0].a0P, a01[1].a0P)
	}, this.a0R = function() {
		var ex = a01.length;
		return al.t7 ? ex ? a0Q(al.u, a01[0].a0P) : al.u : 0 === ex ? 0 : 1 === ex ? a01[0].a0P : 2 === ex ? a0Q(a01[0].a0P, a01[1].a0P) : a0Q(a0Q(a01[0].a0P, a01[1].a0P), a01[2].a0P)
	}, this.fn = function(ff, fg) {
		for (var kp, a0T, a0U = kw(), a0 = a01.length - 1; 0 <= a0; a0--)
			if ((a0T = a0U - (a0 + 1) * iE) <= fg && fg < a0T + iE) return 50 === a01[a0].id ? ff >= an.u - a04 - a02 - a01[a0].u && (ff >= an.u - a04 - a02 ? b0.en.nR(a01[a0].player) : a7.lO(a01[a0].player, 800, !1, 0), !0) : ff >= an.u - a01[
				a0].u - a02 && (736 === a01[a0].id ? (a0T = a01[a0].oD.split(" "), window.open(a0T[a0T.length - 1], "_blank")) : a01[a0].a0K && (a01[a0].a0M && a01[a0].a0M.fu ? (a0T = a01[a0].a0M.fu, kp = bC.gV(a0T) - 10, a0T = bC.gX(
				a0T) - 10, a7.lN(kp, a0T, 19 + kp, 19 + a0T)) : (a7.lO(a01[a0].player, 800, !1, 0), 0 <= a01[a0].rs && (kp = a01[a0].rs, a01[a0].rs = a01[a0].player, a01[a0].player = kp))), !0);
		return !1
	}, this.ut = function(dp, oD, id, f4, a0I, a0J, rs, a0K, a0L, a0M) {
		a0E(dp, oD, id, f4, a0I, a0J, rs, a0K, a0L, a0M)
	}, this.a0W = function(vN) {
		a0E(300, vN, 252, 0, p.lu, p.lr, -1, !1)
	}, this.yg = function(id) {
		for (var a0 = a01.length - 1; 0 <= a0; a0--) a01[a0].id === id && (a01[a0].dn = 1)
	}, this.ug = function(player, id) {
		0 === id ? (bR.ev[player < a2.ip ? 4 : 3]++, aF.ho(player, 0), a0Y(423, 0), a0E(160, L(18, [aX.l3[player]]), 423, player, "rgb(10,220,10)", p.lr, -1, !1)) : 1 === id ? (a0Z(50, a2.f1), aF.ho(player, 1), a0E(360, L(19, [aX.l3[player]]), 0,
			player, p.mU, p.lr, -1, !0), a7.lO(player, 2700, !1, 0)) : 2 === id ? (aF.ho(player, 2), a0E(0, L(20), 0, player, "rgb(10,255,255)", p.lr, -1, !0), a7.lO(player, 2700, !1, 0)) : 3 === id ? (aF.ho(player, 2), a0E(0, L(21, [aX.l3[
			player]]), 0, player, p.lu, p.lr, -1, !0), a7.lO(player, 2700, !1, 0)) : 4 === id ? this.a0a(1, player, player) : 5 === id ? 2 !== aX.xu[player] && aS.uN(a2.es) && (function(id, kS) {
			var a0, a0k = 0,
				ex = a01.length;
			for (a0 = 0; a0 < ex; a0++)
				if (a01[a0].id === id && kS <= ++a0k) return a01.splice(a0, 1)
		}(1, 5), aW.a0c(player) ? a0E(180, L(22, [aX.l3[player]]), 1, player, a0G(255, 200, 180), p.lr, -1, !0) : (a0Y(573, 0), a0E(180, L(23, [aX.l3[player]]), 573, player, p.mU, p.lr, -1, !0))) : 18 === id ? a0E(255, L(24), 18, 0, p.lu, p
			.lr, -1, !1) : 21 === id ? a0E(220, L(25), id, 0, p.lu, p.lr, -1, !1) : 22 === id ? this.a0a(2, player, player) : 59 === id && a0E(0, L(26), id, 0, p.mg, p.lr, 0, !1)
	}, this.vr = function(vN) {
		a0E(200, L(27, [vN]), 94, 0, p.lu, p.mQ, -1, !1)
	}, this.un = function(a0d) {
		if (a2.es === a0d && !a2.jD)
			wins_counter++, window.localStorage.setItem("fx_winCount", wins_counter),
			a0E(0, "Your Win Count is now " + wins_counter, 3, a0d, p.lu, p.lr, -1, !0);
		aF.ho(a0d, 2), a2.ip < 100 ? a0E(0, L(21, [aX.l3[a0d]]), 3, a0d, p.lu, p.lr, -1, !0) : a0E(0, L(28, [aX.l3[a0d]]), 3, a0d, p.lu, p.lr, -1, !0)
	}, this.zg = function(fw) {
		var a0e = "(" + bC.gV(fw >> 2) + ", " + bC.gX(fw >> 2) + ")",
			a0K = !1,
			player = 0;
		aS.ez(fw) ? aS.f9(fw) ? a0e = L(29, [a0e]) : (player = aS.f8(fw), a0e = L(30, [b2.sn.xb(aX.vM[player], b2.kt.ky(0, 10), 150), b2.l1.l2(aX.et[player]), b2.l1.l2(aX.ep[player]), a0e]), a0K = !0) : a0e = aS.g2(fw) ? L(31, [a0e]) : L(32, [
			a0e]), bT.dK = !0, a0Y(55, 0), a0E(220, a0e, 55, player, p.lu, p.lr, -1, a0K)
	}, this.zi = function(a0f) {
		var jZ = bD.k8,
			player = jZ.a0g[a0f] >> 3;
		bT.dK = !0, a0Y(55, 0), a0E(220, L(33, [aX.l3[player], jZ.a0h[a0f]]), 55, player, p.lu, p.lr, -1, !0)
	}, this.n9 = function(mv, a0i, nA) {
		mv === a2.es ? a0E(175, " " + L(34, [aX.l3[a0i]]), 1001, a0i, a0G(200, 255, 210), p.lr, -1, !0, nA) : this.a0j(mv, nA)
	}, this.a0j = function(mv, nA) {
		a0Y(1e3, 0), a0E(175, aX.l3[mv] + ": ", 1e3, mv, p.lu, "rgba(5,60,25,0.9)", -1, !0, nA)
	}, this.uu = function() {
		var vN;
		a2.uZ ? (vN = L(35), aF.us(L(36), 2, 1, 12), a0E(0, vN, 40, 0, "rgb(10,220,10)", p.lr, -1, !1)) : (vN = L(37), aF.us(L(38), 2, 0, 16), a0E(0, vN, 41, 0, p.lu, p.lr, -1, !1))
	}, this.sv = function(su) {
		a0E(300, su[0].name + " [" + a2.um.t1(su[0].sy) + "] vs " + su[1].name + " [" + a2.um.t1(su[1].sy) + "]", 65, 0, p.kz, "rgba(100,255,255,0.75)", -1, !1)
	}, this.a0l = function(vN) {
		a0E(200, vN, 0, 0, "rgb(40,255,200)", "rgba(10,60,40,0.9)", -1, !1)
	}, this.a0m = function(a0n) {
		a0E(0, L(a0n ? 39 : 40), 247, 0, p.mf, p.lr, -1, !1)
	}, this.t3 = function(su, t0, t2, a0o) {
		a0E(0, su[0].name + ": " + a2.um.t1(su[0].sy) + " -> " + t0, 66, 0, p.lu, a0o[0], -1, !1), a0E(0, su[1].name + ": " + a2.um.t1(su[1].sy) + " -> " + t2, 66, 1, p.lu, a0o[1], -1, !1)
	}, this.nS = function(player, id) {
		0 === id ? a0Z(50, player) ? (a0E(128, L(41, [aX.l3[player]]), 52, player, a0G(180, 255, 180), p.lr, -1, !0), aW.o6(player, 2, 255)) : a0E(384, L(42, [aX.l3[player]]), 51, player, a0G(210, 210, 255), p.lr, -1, !0) : a0Z(51, player) ? (
			a0E(128, L(43, [aX.l3[player]]), 52, player, p.lu, "rgba(60,120,10,0.9)", -1, !0), aW.o6(player, 2, 255)) : (a0E(384, L(44, [aX.l3[player]]), 50, player, p.lu, "rgba(90,90,90,0.9)", -1, !0), aW.o6(player, 2, 96))
	}, this.nW = function(su, target) {
		var color = a0G(210, 255, 210);
		1 < su.length ? a0E(230, L(45, [su.length, aX.l3[target]]), 66, target, color, p.lr, -1, !0) : a0E(230, L(46, [aX.l3[su[0]], aX.l3[target]]), 66, su[0], color, p.lr, target, !0)
	}, this.a0p = function(player, target) {
		a0E(230, L(47, [aX.l3[player], aX.l3[target]]), 66, player, p.lu, "rgba(75,65,5,0.9)", target, !0)
	}, this.a0q = function(id, jL) {
		a0Y(id, jL)
	}, this.a0s = function(id) {
		for (var a0 = a01.length - 1; 0 <= a0; a0--)
			if (a01[a0].id === id) return a01[a0];
		return null
	}, this.ub = function(id, player) {
		a0Z(id, player)
	}, this.nN = function(a0t, a0u, player) {
		2 !== aX.xu[a2.es] && (a0E(200, 1 === a0t ? L(48, [aX.l3[player]]) : L(49, [a0t, aX.l3[player]]), 30, player, "rgb(190,255,190)", p.lr, -1, !0), a0u) && a0E(30, 1 === a0u ? L(50) : L(51, [a0u]), 30, 0, p.lu, p.lr, -1, !1)
	}, this.a0w = function(a0t, player) {
		2 !== aX.xu[a2.es] && (a0Y(31, 0), 2 === aX.xu[player] || player >= a2.ip ? a0E(150, 1 === a0t ? L(52, [aX.l3[player]]) : L(53, [aX.l3[player], a0t]), 31, player, p.kz, "rgba(205,205,205,0.9)", -1, !0) : a0E(150, 1 === a0t ? L(54, [aX.l3[
			player]]) : L(55, [aX.l3[player], a0t]), 31, player, p.kz, "rgba(205,255,205,0.9)", -1, !0))
	}, this.ua = function(a12) {
		for (var ik = bT.eq(), a0 = 2; 0 <= a0; a0--) 0 < a05.qC[a0] && (a12 || a05.ik[a0] < ik - 220) && this.a13(a0)
	}, this.a13 = function(id) {
		var oD, ex = a05.qC[id],
			player = a05.su[id];
		a05.qC[id] = 0, 1 === ex ? (0 === id ? oD = L(63, [aX.l3[player], aX.l3[a05.a0A[0]]]) : 1 === id ? oD = L(64, [aX.l3[player]]) : 2 === id ? oD = L(65, [aX.l3[player]]) : 3 === id && (oD = L(66, [aX.l3[player]])), a0Y(7, 0), a0E(a05.lK[
			id], oD, 7, a05.a0A[id], p.lu, p.lr, -1, !0)) : (oD = L(0 === id ? 67 : 1 === id ? 68 : 69, [ex]), a0Y(7, 0), a0E(a05.lK[id], oD, 7, player, p.lu, p.lr, -1, !1))
	}, this.a0a = function(id, pb, rs) {
		var ik = bT.eq(),
			ex = a05.qC[id] + 1;
		a05.qC[id]++, a05.su[id] = pb, a05.a0A[id] = rs, 1 === ex && (a05.ik[id] = ik), (1 === ex && (a2.uX < 32 || 2 === a2.uU) || 1 < ex && (a05.ik[id] < ik - 140 || 2 === a2.uU)) && this.a13(id)
	}, this.ha = function() {
		for (var gd = (gd = a01.length - a06) <= 1 ? 1 : gd * gd, a0 = a01.length - 1; 0 <= a0; a0--) 0 < a01[a0].dn && (a01[a0].dn -= gd, a01[a0].dn <= 0) && (bT.dK = !0, a01.splice(a0, 1));
		! function() {
			var jL, a0;
			if (128 !== a07 && !(++a07 < 128))
				for (jL = 5, a0 = iq - 1; 0 <= a0; a0--) 1 === aX.xu[is[a0]] && 0 < jL-- && a0E(240, L(66, [aX.l3[is[a0]]]), 1, is[a0], p.kz, "rgba(255,255,255,0.75)", -1, !0)
		}(), this.ua(!1)
	}, this.kk = function() {
		for (var sD, fg = kw(), a0 = a01.length - 1; 0 <= a0; a0--) sD = fg - (a0 + 1) * iE, 50 === a01[a0].id ? (ku.drawImage(a01[a0].gL, an.u - a01[a0].u - a04 - a02, sD), ku.drawImage(a08, an.u - a04 - a02, sD)) : ku.drawImage(a01[a0].gL, an
			.u - a01[a0].u - a02, sD)
	}
}

function bv() {
	var a15, a16, a17, u, iE, font;

	function a1B(a1C) {
		return a1C < 10 ? "0" + a1C : String(a1C)
	}
	this.dD = function() {
		void 0 === u && this.resize(), this.setTime()
	}, this.resize = function() {
		u = Math.floor((m.n.tX() ? .53 : .36) * an.oU), iE = Math.floor(.065 * u), font = b2.kt.ky(1, Math.floor(.9 * iE)), a17--, this.setTime()
	}, this.ha = function() {
		this.setTime() && (bT.dK = !0)
	}, this.setTime = function() {
		var dp = new Date,
			a19 = dp.getUTCMinutes(),
			dp = dp.getUTCSeconds();
		return a16 = 3600 - 60 * a19 - dp, a16 %= 900, a15 = "Next Contest: " + a1B(Math.floor(a16 / 60)) + ":" + a1B(a16 % 60), a17 !== (a17 = 60 * a19 + dp) && (u = aF.measureText(a15, font), u += Math.floor(.4 * iE), !0)
	}, this.kk = function() {
		ku.lineWidth = 1 + Math.floor(iE / 15), 7 === aP.vn() && aj.a1D() + 2 * bQ.gap > .5 * (an.iE - u) ? ku.translate(an.u - iE, Math.floor(aj.a1D() + 2 * bQ.gap + u)) : ku.translate(an.u - iE, Math.floor(.5 * (an.iE + u))), ku.rotate(-Math
			.PI / 2), ku.fillStyle = p.lu, ku.fillRect(0, 0, u, iE), ku.strokeStyle = p.kz, ku.strokeRect(0, 0, u, iE + 10), ku.fillStyle = p.kz, ku.font = font, b2.kt.textBaseline(ku, 1), b2.kt.textAlign(ku, 1), ku.fillText(a15, Math.floor(
			u / 2), Math.floor(.59 * iE)), ku.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function bw() {
	var a01, a1E, zn, iE, a1F;

	function a1H(a0) {
		var a1J = !0,
			gY = p.lu,
			u = (a01[a0].hr === a2.f1 ? a01[a0].sn.fillStyle = p.m4 : (aS.a1K(a01[a0].hr), a01[a0].sn.fillStyle = b2.color.lo(bE.dy[0], bE.dy[1], bE.dy[2], .87), 400 < b2.oc.xD(bE.dy, 0, 2) && (a1J = !1, gY = p.kz)), a01[a0].gL.width),
			pZ = (a01[a0].sn.clearRect(0, 0, u, iE), a01[a0].sn.fillRect(0, 0, u, iE), a01[a0].sn.fillStyle = gY, ! function(sn, u, iE) {
				sn.fillRect(0, 0, u, 1), sn.fillRect(0, iE - 1, u, 1), sn.fillRect(0, 0, 1, iE), sn.fillRect(u - 1, 0, 1, iE)
			}(a01[a0].sn, u, iE), a1E + 2 * iE < u && (a01[a0].sn.fillRect(u - a1E - iE, 0, 1, iE), a01[a0].sn.fillText(aX.l3[a01[a0].hr], Math.floor((u - a1E) / 2), Math.floor(.57 * iE))), 0 !== a01[a0].id ? 0 : iE);
		a01[a0].sn.fillText(b2.l1.l2(a01[a0].hs), Math.floor(u - a1E / 2 - pZ), Math.floor(.57 * iE)),
			function(a0, u, pZ, a1J) {
				a01[a0].sn.fillStyle = a1J ? p.lw : p.ls;
				a1J = Math.floor(a1E * a01[a0].hs / a01[a0].a1Q);
				a01[a0].sn.fillRect(Math.floor(u - a1E - pZ), iE - a1F, a1J, a1F)
			}(a0, u, pZ, a1J), 0 === a01[a0].id ? (a1N(a0, u, a1J, gY), function(a0, u, a1J) {
				a01[a0].sn.strokeStyle = a1J ? p.m9 : p.mI, a01[a0].sn.fillRect(iE, 0, 1, iE);
				a1J = u - iE;
				a01[a0].sn.beginPath(), a01[a0].sn.moveTo(Math.floor(.3 * iE + a1J), Math.floor(iE / 2)), a01[a0].sn.lineTo(Math.floor(iE - .3 * iE + 0 + a1J), Math.floor(iE / 2)), a01[a0].sn.stroke(), a01[a0].sn.beginPath(), a01[a0].sn.moveTo(
					Math.floor(iE / 2 + a1J), Math.floor(.3 * iE)), a01[a0].sn.lineTo(Math.floor(iE / 2 + a1J), Math.floor(iE - .3 * iE + 0)), a01[a0].sn.stroke()
			}(a0, u, a1J)) : a1N(a0, 2 * iE, a1J, gY)
	}

	function a1N(a0, u, a1J, gY) {
		a01[a0].sn.strokeStyle = a01[a0].a1R ? p.m2 : a1J ? p.mM : p.mN, a01[a0].sn.fillStyle = gY, a01[a0].sn.fillRect(u - iE, 0, 1, iE), a01[a0].sn.lineWidth = Math.max(Math.floor(iE / 12), 3), a01[a0].sn.lineCap = "round";
		a1J = .35;
		u = iE + 1, a01[a0].sn.beginPath(), a01[a0].sn.moveTo(Math.floor(u - a1J * iE + 0), Math.floor(a1J * iE)), a01[a0].sn.lineTo(Math.floor(u - iE + a1J * iE), Math.floor(iE - a1J * iE + 0)), a01[a0].sn.stroke(), a01[a0].sn.beginPath(), a01[a0]
			.sn.moveTo(Math.floor(u - iE + a1J * iE), Math.floor(a1J * iE)), a01[a0].sn.lineTo(Math.floor(u - a1J * iE + 0), Math.floor(iE - a1J * iE + 0)), a01[a0].sn.stroke()
	}

	function a1c(ex) {
		for (var hs, a0 = ex - 1; 0 <= a0; a0--) hs = aU.ee(a2.es, a0), a01[a0].hs !== hs && (a01[a0].hs = hs, a01[a0].a1Q = hs > a01[a0].a1Q ? hs : a01[a0].a1Q, a01[a0].a1I = !0)
	}

	function a1G(a1e) {
		a1e.gL = document.createElement("canvas"), bI.rd.font = zn;
		var u = a1E;
		a1e.hr < a2.f1 && 0 === a1e.id && (u += Math.floor(bI.rd.measureText(aX.l3[a1e.hr] + "000").width)), u += iE, 0 === a1e.id && (u += iE), a1e.gL.width = u, a1e.gL.height = iE, a1e.sn = a1e.gL.getContext("2d", {
			alpha: !0
		}), a1e.sn.font = zn, b2.kt.textBaseline(a1e.sn, 1), b2.kt.textAlign(a1e.sn, 1)
	}

	function a1Y(a0) {
		return aJ.a1g() ? an.u - a01[a0].gL.width - bQ.gap : aJ.ff
	}

	function a1Z(a0) {
		return Math.floor(2 * bQ.gap + (aJ.a1g() ? aL.iE + bQ.gap : 0) + aJ.iE + a0 * (1.3 * iE))
	}
	this.dD = function() {
		a01 = [], this.resize()
	}, this.resize = function() {
		zn = aC.zn, iE = aC.fontSize + 5, iE = Math.floor(1.25 * iE), m.n.tX() && (iE = Math.floor(1.25 * iE)), a1F = Math.floor(.15 * iE), bI.rd.font = zn, a1E = Math.floor(bI.rd.measureText("02 000 000 0000").width);
		for (var a0 = a01.length - 1; 0 <= a0; a0--) a1G(a01[a0]), a1H(a0)
	}, this.kG = function() {
		for (var a0 = a01.length - 1; 0 <= a0; a0--) a01[a0].a1I && (a01[a0].a1I = !1, a1H(a0))
	}, this.fn = function(jl, fg) {
		if (2 !== a2.uU && 0 !== aX.kW[a2.es] && !a2.fj && aS.uN(a2.es))
			for (var a1T, a1U, a1V, a1W = m.n.tX() ? iE : 0, a1X = m.n.tX() ? Math.floor(.15 * iE) : 0, a0 = a01.length - 1; 0 <= a0; a0--)
				if (a1T = a1Y(a0), a1U = a1Z(a0), a1V = a01[a0].gL.width, a1U - a1X <= fg && fg <= a1U + iE + a1X) {
					if (a1T - a1W <= jl && jl <= a1T + iE + a1W) return a01[a0].a1R || (a01[a0].a1I = !0, a01[a0].a1R = !0, 0 === a01[a0].id && b0.g0.n7(a01[a0].hr)), !0;
					if (0 === a01[a0].id && a1T + a1V - iE - a1W <= jl && jl <= a1T + a1V + a1W) return b0.g0.g9(aG.g7(), a01[a0].hr), !0
				} return !1
	}, this.ha = function() {
		var ex;
		2 !== a2.uU && 0 !== aX.kW[a2.es] && !a2.fj && aS.uN(a2.es) && (function(ex) {
			if (a01.length !== ex) return 1;
			for (var a0 = ex - 1; 0 <= a0; a0--)
				if (a01[a0].id !== aU.eY(a2.es, a0) || a01[a0].hr !== aU.ed(a2.es, a0)) return 1;
			return
		}(ex = aU.eX(a2.es)) && function(ex) {
			var a0, id, hr, i4, hs, a0H = [];
			loop: for (a0 = 0; a0 < ex; a0++) {
				for (id = aU.eY(a2.es, a0), hr = aU.ed(a2.es, a0), i4 = 0; i4 < a01.length; i4++)
					if (a01[i4].id === id && a01[i4].hr === hr) {
						a0H.push(a01.splice(i4, 1)[0]);
						continue loop
					} hs = aU.ee(a2.es, a0), a1G(hs = {
					hr: hr,
					hs: hs,
					a1Q: hs,
					id: id,
					a1I: !0,
					a1R: !1,
					gL: null,
					sn: null
				}), a0H.push(hs)
			}
			a01 = a0H
		}(ex), a1c(ex))
	}, this.a1f = function(f4) {
		for (var ex = Math.min(a01.length, aU.eX(a2.es)), a0 = 0; a0 < ex; a0++)
			if (a01[a0].hr === f4) return void(a01 = [])
	}, this.kk = function() {
		if (0 !== aX.kW[a2.es] && aS.uN(a2.es) && !a2.fj)
			for (var a0 = a01.length - 1; 0 <= a0; a0--) ku.drawImage(a01[a0].gL, a1Y(a0), a1Z(a0))
	}
}

function bx() {
	var a01, ix, a1h, a1i, iE, zn, fontSize, a1j, a1k, a1l, a1m, gL, sn, lF, a1n;

	function qJ(a0) {
		return L(0 === a0 ? 70 : 1 === a0 ? 71 : 2 === a0 ? 72 : 73)
	}

	function a1u() {
		ku.drawImage(gL, bQ.gap + (a2.hl ? bQ.gap + bV.a1v() : 0), a1w + 2 * bQ.gap)
	}

	function a1o() {
		gL.width = a01[0].width + a1l, gL.height = iE + a1l, (sn = gL.getContext("2d", {
				alpha: !0
			})).clearRect(0, 0, a01[0].width + a1l, iE + a1l), sn.translate(Math.floor(a1l / 2), Math.floor(a1l / 2)), sn.lineWidth = a1l, sn.fillStyle = 1 === a01[0].a1t ? p.lz : p.lr, a1x(), sn.fill(), sn.strokeStyle = 1 === a01[0].a1t ? p.kz : p
			.lu, a1x(), sn.stroke(), b2.kt.textAlign(sn, 1), b2.kt.textBaseline(sn, 1), sn.fillStyle = 1 === a01[0].a1t ? p.kz : p.lu, sn.font = zn[0], sn.fillText(qJ(a01[0].a1s), Math.floor(a01[0].width / 2), Math.floor(.72 * a1j[0] * iE)), sn
			.font = zn[1], sn.fillText(a01[0].oD, Math.floor(a01[0].width / 2), Math.floor((a1j[0] + .48 * a1j[1]) * iE))
	}

	function a1x() {
		sn.beginPath(), sn.moveTo(a1m, 0), sn.lineTo(a01[0].width - a1m, 0), sn.lineTo(a01[0].width, a1m), sn.lineTo(a01[0].width, iE - a1m), sn.lineTo(a01[0].width - a1m, iE), sn.lineTo(a1m, iE), sn.lineTo(0, iE - a1m), sn.lineTo(0, a1m), sn
			.closePath()
	}
	this.dD = function() {
		ix = 4, a1h = a1i = lF = 0, a01 = [], zn = new Array(2), fontSize = new Array(2), (a1j = new Array(2))[0] = .3, a1j[1] = .7, a1k = new Array(4), gL = document.createElement("canvas"), a1n = bT.dn + 2e3, this.resize()
	}, this.resize = function() {
		var a0, u;
		for (iE = Math.floor((m.n.tX() ? .0725 : .058) * an.oU), fontSize[0] = Math.floor(.85 * a1j[0] * iE), fontSize[1] = Math.floor(.85 * a1j[1] * iE), zn[0] = b2.kt.ky(1, fontSize[0]), zn[1] = b2.kt.ky(1, fontSize[1]), a0 = a1k.length -
			1; 0 <= a0; a0--) a1k[a0] = this.measureText(qJ(a0) + "000", zn[0]);
		if (a1l = Math.floor(1 + .05 * iE), a1m = Math.floor(.2 * iE), 0 < a01.length) {
			for (a0 = a01.length - 1; 0 <= a0; a0--) u = this.measureText(a01[a0].oD + "00", zn[1]), a01[a0].width = u < a1k[a0] ? a1k[a0] : u;
			a1o()
		}
	}, this.ha = function() {
		0 !== ix && (4 === ix ? bT.dn > a1n && (ix = 0, 1 === a2.uU) && aF.us(bI.j8.s1[bI.s2].name, 3, 1, 9) : (1 === ix ? (0 === a1h && (a1o(), a1h = 1e-4), 1 <= (a1h += .002 * (bT.dn - lF)) && (a1i = 0, ix = 2, a1h = 1), bT.dK = !0) : 2 ===
			ix ? ((a1i += (bT.dn - lF) / 1e3) > a01[0].lK || 1 < a1i && 1 < a01.length) && (ix = 3) : 3 === ix && ((a1h -= .002 * (bT.dn - lF)) <= 0 && (a1h = 0, a01.shift(), ix = 0 < a01.length ? 1 : 0), bT.dK = !0), lF = bT.dn))
	}, this.measureText = function(oD, zn) {
		return ku.font = zn, Math.floor(ku.measureText(oD).width)
	}, this.ho = function(a1r, a0) {
		this.us(aX.l3[a1r], a0, 1, 0 === a0 ? 3 : 7)
	}, this.us = function(oD, a1s, a1t, lK) {
		var u = (u = this.measureText(oD + "00", zn[1])) < a1k[a1s] ? a1k[a1s] : u;
		a01.push({
			oD: oD,
			width: u,
			a1s: a1s,
			a1t: a1t,
			lK: lK
		}), 0 === ix && (a1h = 0, ix = 1, lF = bT.dn)
	}, this.kk = function() {
		0 !== ix && 0 !== a1h && (a1h < 1 ? (ku.globalAlpha = a1h, a1u(), ku.globalAlpha = 1) : a1u())
	}
}

function cX() {
	var iE, gL, sn, a1y, a1z, a20, a21, a1I, a22, a23, a24, a25, a0n = !1,
		xP = (this.t7 = !1, this.u = 0, new Array(2));

	function kH() {
		var u = al.u,
			jZ = (a1I = !1, sm(sn, u, iE), Math.floor(u / 2));
		1 === a1y ? (sn.fillStyle = p.mB, sn.fillRect(jZ, 0, jZ, iE)) : -1 === a1y && (sn.fillStyle = p.mO, sn.fillRect(0, 0, jZ, iE)), so(sn, u, iE, 2);
		var jZ = (jZ = Math.floor(.25 * iE)) < 2 ? 2 : jZ,
			a0y = (sn.fillStyle = p.m0, Math.floor((iE - 4) * a1z[1] / a20[1]));
		0 < a0y && sn.fillRect(2, iE - 2 - a0y, jZ, a0y), 0 < (a0y = Math.floor((iE - 4) * a1z[0] / a20[0])) && sn.fillRect(u - 2 - jZ, iE - 2 - a0y, jZ, a0y);
		jZ = (jZ = Math.floor(iE / 8)) < 2 ? 2 : jZ, sq(sn, Math.floor(.4 * iE), 0, iE, jZ, .5, !1), sq(sn, Math.floor(u - 1.4 * iE), 0, iE, jZ, .5, !0), a0y = 1.1 * iE / xP[0].width;
		sn.imageSmoothingEnabled = !0, sn.setTransform(a0y, 0, 0, a0y, (u - a0y * xP[0].width) / 2, -.05 * iE), sn.drawImage(xP[+a0n], 0, 0), sn.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a26() {
		a24 = bT.eq(), a1I = !0, a22 = a1y = 0, a21 = [], al.t7 = !1, aC.ub(247, 0), a1z[0] = a1z[1] = 0, aC.yg(673)
	}

	function kw() {
		return aG.a0S(aC.a0O()) ? aG.fg - iE - bQ.gap : b3.a0S(aC.a0R()) ? b3.kw() - iE - bQ.gap : an.iE - iE - bY.zB() * bQ.gap
	}
	this.dE = function() {
		for (var a0 = 0; a0 < 2; a0++) xP[a0] = b2.gL.tL(aR.get(3), 8 - a0, p.mn), xP[a0] = b2.gL.xR(xP[a0])
	}, this.dD = function() {
		a24 = -140, a23 = 0, a25 = -1, this.t7 = !1, a1I = a0n = !1, a1z = [a1y = a22 = 0, 0], a20 = [1, 1], a21 = [], this.resize()
	}, this.resize = function() {
		iE = aG.iE, this.u = 4 * iE, (gL = document.createElement("canvas")).width = this.u, gL.height = iE, sn = gL.getContext("2d", {
			alpha: !0
		}), kH()
	}, this.kG = function() {
		a1I && kH()
	}, this.fn = function(ff, fg) {
		var kq;
		return !!this.t7 && !(ff < an.u - this.u - bQ.gap || fg < (kq = kw()) || kq + iE < fg || (a2.fj || b0.g0.nD(ff > an.u - bQ.gap - this.u / 2 ? 1 : 0), 0))
	}, this.ha = function() {
		if (0 < a23) 0 === --a23 && a26();
		else if (this.t7) 180 == --a22 && 3 * a1z[0] < a20[0] ? a26() : a1z[0] >= a20[0] ? a0n ? bH.u9.uP() : bH.u9.uT() : a1z[1] >= a20[1] ? a23 = 4 : a22 <= 0 && a26();
		else if (function() {
				if (0 <= a25) return 1;
				return
			}()) {
			a0n = aY.a29(), aC.ut(250, L(74, [aX.l3[a25]]), 673, a25, p.lu, p.lr, -1, !0), a25 = -1, aC.yg(257), aC.a0m(a0n), this.t7 = !0, a1I = !0, a22 = 360;
			for (var dr, dp = 0, a0 = iq - 1; 0 <= a0; a0--) aS.uN(is[a0]) && (dp += aX.ep[is[a0]]);
			a0n ? a20[0] = Math.max(bB.el(3 * dp, 4), 1) : a2.hl ? 9 === a2.jB && 8 === bU.up[bV.ju()] ? a20[0] = Math.max(dp, 1) : (dr = bB.el(100 * bV.v5(), a2.iV), dr = bB.o5(200 - 2 * dr, 50, 100), dr = bB.el(dr * dp, 100), a20[0] = Math.max(
				dr, 1)) : a20[0] = Math.max(bB.el(3 * dp, 5), 1), a20[1] = Math.max(dp - a20[0], 1)
		}
	}, this.uV = function() {
		this.t7 && a1z[0] < a20[0] && a26()
	}, this.o7 = function(player, a2C) {
		var a0;
		if (this.t7) {
			for (a0 = a21.length - 1; 0 <= a0; a0--)
				if (a21[a0] === player) return;
			var a2D = L(a2C ? 75 : 76, [aX.l3[player]]);
			aC.ut(450, a2D, 257, player, a2C ? p.m9 : p.mL, p.lr, -1, !0), a21.push(player), a1I = !0, a2D = a2.jD ? a20[0] : aX.ep[player], a2C ? a1z[0] += a2D : a1z[1] += a2D, player === a2.es && (a1y = a2C ? 1 : -1)
		}
	}, this.kk = function() {
		var fg;
		this.t7 && (fg = kw(), ku.drawImage(gL, an.u - this.u - bQ.gap, fg))
	}, this.o8 = function(player) {
		if (!a2.jD) {
			if (bT.eq() < a24 + 140) return !1;
			if (bT.eq() < 535) return !1
		}
		return 0 === a22 && !!b2.en.fl(1) && !(!b2.en.fm(player) || 10 <= iW[player] && !b2.en.yA(player, 9))
	}, this.nI = function(player) {
		a25 = player
	}
}

function by() {
	var u, ff, a2E, gL, sn, t7, h5, yb, zn, a1I, a2F = 11 / 12;

	function a2H() {
		var a1P = Math.floor(h5 * (u - 2 * a2E)),
			a2K = 1 + Math.floor(.0625 * aG.iE),
			a2L = 1 + Math.floor(.3 * aG.iE),
			a2M = Math.floor(.55 * aG.iE);
		sn.clearRect(0, 0, u, aG.iE), sn.fillStyle = p.lq, sn.fillRect(0, 0, a2E, aG.iE), sn.fillRect(a2E + a1P, 0, u - a2E - a1P, aG.iE), sn.fillStyle = h5 < 1 / 3 ? "rgba(" + Math.floor(3 * h5 * 130) + ",130,0,0.85)" : h5 < 2 / 3 ? "rgba(130," + (
				130 - Math.floor(3 * (h5 - 1 / 3) * 130)) + ",0,0.85)" : "rgba(130,0," + Math.floor(3 * (h5 - 2 / 3) * 130) + ",0.85)", sn.fillRect(a2E, 0, a1P, aG.iE), sn.fillStyle = p.lu, sn.fillRect(0, 0, u, 1), sn.fillRect(0, aG.iE - 1, u, 1), sn
			.fillRect(0, 0, 1, aG.iE), sn.fillRect(a2E, 0, 1, aG.iE), sn.fillRect(a2E + a1P, 0, 1, aG.iE), sn.fillRect(u - a2E, 0, 1, aG.iE), sn.fillRect(u - 1, 0, 1, aG.iE), sn.fillRect(Math.floor(.25 * aG.iE) + a2L, Math.floor((aG.iE - a2K) / 2),
				aG.iE - 2 * a2L, a2K), sn.fillRect(Math.floor(u - 1.25 * aG.iE) + a2L, Math.floor((aG.iE - a2K) / 2), aG.iE - 2 * a2L - a2L % 2, a2K), sn.fillRect(Math.floor(u - 1.25 * aG.iE) + Math.floor((aG.iE - a2K) / 2), a2L, a2K, aG.iE - 2 *
				a2L - a2L % 2), yb = b2.en.h4(a2.es, aG.g7()), sn.fillText(b2.l1.l2(yb) + " (" + b2.l1.yS(100 * h5, +(h5 < .1)) + ")", Math.floor(.5 * u), a2M)
	}
	this.setAbsolutePercentage = function(newPercentage) {
		h5 = newPercentage;
	};
	keybindFunctions.setAbsolute = this.setAbsolutePercentage;
	keybindFunctions.setRelative = (arg1) => aG.wh(arg1);

	function a2R(x8) {
		return !(1 < x8 && 1 === h5 || (1 < x8 && x8 * h5 - h5 < 1 / 1024 ? x8 = (h5 + 1 / 1024) / h5 : x8 < 1 && h5 - x8 * h5 < 1 / 1024 && (x8 = (h5 - 1 / 1024) / h5), h5 = bB.o5(h5 * x8, 1 / 1024, 1), a2H(), 0))
	}

	function a2S(jl) {
		return h5 !== (h5 = bB.o5((jl - ff - a2E) / (u - 2 * a2E), 1 / 1024, 1)) && (a2H(), !0)
	}
	this.fg = 0, this.fo = !1, this.dD = function() {
		t7 = !a2.fz && !a2.fj, a1I = !1, h5 = .5, yb = 0, this.fo = !1, this.resize()
	}, this.resize = function() {
		m.n.tX() && an.u < .8 * an.iE ? (this.iE = Math.floor(.0536 * an.oU), u = an.u - 4 * bQ.gap - this.iE) : (u = Math.floor((m.n.tX() ? .65 : .389) * an.oU), u += 12 - u % 12, this.iE = Math.floor(u / 12)), a2E = Math.floor(3 * this.iE / 2),
			zn = b2.kt.ky(1, Math.floor(.5 * this.iE)), (gL = document.createElement("canvas")).width = u, gL.height = this.iE, (sn = gL.getContext("2d", {
				alpha: !0
			})).font = zn, b2.kt.textBaseline(sn, 1), b2.kt.textAlign(sn, 1), this.a2G(), a2H()
	}, this.a2G = function() {
		ff = m.n.tX() && an.u < .8 * an.iE ? this.iE + 3 * bQ.gap : Math.floor((an.u - u) / 2), this.fg = an.iE - this.iE - bY.zB() * bQ.gap
	}, this.kG = function() {
		a1I && (a1I = !1, a2H())
	}, this.t7 = function() {
		return !(!t7 || aB.fk && ff < Math.floor(bQ.gap + 5.5 * this.iE))
	}, this.a0S = function(a2N) {
		return !!this.t7() && ff + u > an.u - a2N - bQ.gap
	}, this.ye = function() {
		t7 = !a2.fj
	}, this.a26 = function() {
		t7 = !1
	}, this.g7 = function() {
		return bB.o5(Math.floor(1024 * h5 + .5) - 1, 0, 1023)
	}, this.we = function(jl, jm) {
		return this.t7() && ff < jl && jl < ff + u && jm > this.fg
	}, this.fn = function(jl, jm) {
		return !!this.t7() && !!aG.we(jl, jm) && (aH.lR = !1, function(v2, jl, jm) {
			if (function(jl, jm) {
					return ff < jl && jl < ff + a2E && jm > aG.fg
				}(jl, jm)) return a2R(a2F);
			if (function(jl, jm) {
					return ff + u - a2E < jl && jl < ff + u && jm > aG.fg
				}(jl, jm)) return a2R(1 / a2F);
			return v2.fo = !0, a2S(jl)
		}(this, jl, jm) && (bT.dK = !0), !0)
	}, this.wh = function(lY) {
		0 !== a2.uU && this.t7() && a2R(lY) && (bT.dK = !0)
	}, this.wC = function(deltaY) {
		var lY;
		return !(0 === deltaY || !this.t7()) && a2R(lY = 0 < deltaY ? (lY = 400 / (400 + deltaY)) < a2F ? a2F : lY : 1 / a2F < (lY = (400 - deltaY) / 400) ? 1 / a2F : lY)
	}, this.w9 = function(jl) {
		return !!this.fo && a2S(jl)
	}, this.wa = function() {
		this.fo = !1
	}, this.ha = function() {
		this.t7() && yb !== b2.en.h4(a2.es, this.g7()) && (a1I = !0)
	}, this.kk = function() {
		this.t7() && ku.drawImage(gL, ff, this.fg)
	}
}

function ci() {
	var gL, sn, a2T, font, a2U = 0,
		a2V = !1,
		a2W = [10, 5, 3, 2, 1.5, 1, .75, .5, .25],
		a2X = 5;

	function a2d() {
		if (a2V) {
			var a0, ex = a2W.length,
				a2M = Math.floor(.5 * a2T.iE),
				iE = ex * a2M,
				ff = Math.floor(Math.floor(a2T.ff) + .3 * a2T.u - .5),
				fg = Math.floor(Math.floor(a2T.fg) - iE),
				u = Math.floor(.4 * a2T.u + 2.5);
			for (ku.fillStyle = p.lq, ku.fillRect(ff, fg, u, iE), ku.fillStyle = p.mF, ku.fillRect(ff, fg + a2X * a2M, u, a2M), ku.fillStyle = p.lu, ku.fillRect(ff, fg, 2, iE), ku.fillRect(ff, fg, u, 2), ku.fillRect(ff + u - 2, fg, 2, iE), a0 =
				1; a0 < ex; a0++) ku.fillRect(ff, fg + a0 * a2M, u, 2);
			for (ku.fillStyle = p.lu, b2.kt.textAlign(ku, 1), b2.kt.textBaseline(ku, 1), ku.font = b2.kt.ky(0, .6 * a2M), ff += .5 * u, a0 = 0; a0 < ex; a0++) ku.fillText(a2l(a0), ff, fg + (a0 + .6) * a2M)
		}
		ku.drawImage(gL, Math.floor(a2T.ff), Math.floor(a2T.fg))
	}

	function kH(v2) {
		var ff, kp, kq, a2M;
		sn.clearRect(0, 0, Math.floor(a2T.u), Math.floor(a2T.iE)), sn.fillStyle = p.lq, sn.fillRect(0, 0, Math.floor(a2T.u), Math.floor(a2T.iE)), a2.lQ && (sn.fillStyle = p.mF, sn.fillRect(0, 0, Math.floor(.3 * a2T.u), Math.floor(a2T.iE))), sn
			.fillStyle = p.lu, sn.fillText("Hide UI", .15 * a2T.u, .5 * a2T.iE), sn.fillRect(Math.floor(.3 * a2T.u - .5), 0, 2, Math.floor(a2T.iE)), ff = .5 * a2T.u, sn.fillText("Replay Speed", ff, .31 * a2T.iE), sn.fillText(a2l(a2X), ff, .69 * a2T
				.iE), sn.fillRect(Math.floor(.7 * a2T.u - .5), 0, 2, Math.floor(a2T.iE)), v2.z9 ? (ff = Math.floor(.02 * a2T.u), v2 = Math.floor(.025 * a2T.u), kp = Math.floor(.85 * a2T.u - ff - .5 * v2), kq = Math.floor(.25 * a2T.iE), a2M = Math
				.floor(a2T.iE) - 2 * kq, sn.fillRect(kp, kq, ff, a2M), sn.fillRect(kp + ff + v2, kq, ff, a2M)) : function() {
				var u = Math.floor(.46 * a2T.iE),
					iE = Math.floor(.23 * a2T.iE),
					ff = Math.floor(.85 * a2T.u - .5 * u + u / 12),
					fg = Math.floor(.5 * a2T.iE - iE);
				sn.beginPath(), sn.moveTo(ff, fg), sn.lineTo(ff + u, fg + iE), sn.lineTo(ff, fg + (iE << 1)), sn.fill()
			}(), sn.fillRect(0, 0, Math.floor(a2T.u), 2), sn.fillRect(0, 0, 2, Math.floor(a2T.iE)), sn.fillRect(0, Math.floor(a2T.iE) - 2, Math.floor(a2T.u), 2), sn.fillRect(Math.floor(a2T.u - 2), 0, 2, Math.floor(a2T.iE))
	}

	function a2l(a0) {
		return 5 === a0 ? "Normal" : "" + a2W[a0]
	}
	this.z9 = !1, this.dD = function() {
		a2.fj && (a2X = 5, this.z9 = !1, a2V = !1, a2T = new ox([.3, .3 / 6], [.5, 1]), this.resize())
	}, this.a2Y = function() {
		return a2W[a2X]
	}, this.kw = function() {
		return a2T.fg
	}, this.a0S = function(a2N) {
		return !!a2.fj && a2T.ff + a2T.u > an.u - a2N - bQ.gap
	}, this.resize = function() {
		a2.fj && (a2T.resize(), a2T.fg -= (bY.zB() - 1) * bQ.gap, font = b2.kt.ky(0, .3 * a2T.iE), (gL = document.createElement("canvas")).width = Math.floor(a2T.u), gL.height = Math.floor(a2T.iE), (sn = gL.getContext("2d", {
			alpha: !0
		})).font = font, b2.kt.textAlign(sn, 1), b2.kt.textBaseline(sn, 1), kH(this))
	}, this.wl = function(a2Z) {
		0 === a2.uU || i.t7() || a2Z !== a2.lQ && (a2.lQ = a2Z, bV.resize(), bT.dK = !0, a2.fj) && (a2U = bT.dn + 2e3, kH(this))
	}, this.fn = function(ff, fg) {
		if (!a2.fj) return !1;
		if (ff < a2T.ff || fg < a2T.fg || ff > a2T.ff + a2T.u) return a2V && function(v2, ff, fg) {
			var ex = a2W.length,
				a2M = Math.floor(.5 * a2T.iE),
				iE = ex * a2M,
				kp = Math.floor(Math.floor(a2T.ff) + .3 * a2T.u - .5),
				iE = Math.floor(Math.floor(a2T.fg) - iE),
				u = Math.floor(.4 * a2T.u + 2.5);
			return a2V = !1, bT.dK = !0, ff < kp || kp + u < ff || fg < iE || (a2X = a2c(0, Math.floor((fg - iE) / a2M), ex - 1), kH(v2)), !0
		}(this, ff, fg);
		if ((ff -= a2T.ff) < .3 * a2T.u) a2V = !1, this.wl(!a2.lQ);
		else {
			if (ff < .7 * a2T.u) return a2V = !a2V, bT.dK = !0;
			this.wn(!1)
		}
		return !0
	}, this.wn = function(a2b) {
		2 === a2.uU ? (this.wl(!1), i.j(3)) : (a2V = !1, this.z9 = !this.z9, this.z9 ? (aB.fk && aB.wm(), m.n.setState(1)) : a2b || aB.zt(), bT.dK = !0, kH(this))
	}, this.wo = function() {
		this.z9 = !1, aB.zt(), bT.dK = !0, kH(this)
	}, this.wS = function(ff, fg) {
		return !!a2.lQ && (aB.fn(ff, fg) || (a2.fj ? ((bT.dn > a2U || !this.fn(ff, fg)) && aH.fn(ff, fg), bT.dK = !0, a2U = bT.dn + 2e3) : aH.fn(ff, fg)), !0)
	}, this.ha = function() {
		a2.fj && a2.lQ && bT.dn > a2U - 1e3 && bT.dn < a2U && (bT.dK = !0)
	}, this.uc = function() {
		a2.fj && (this.z9 = !1, bT.dK = !0, kH(this))
	}, this.kk = function() {
		if (a2.fj) {
			if (a2.lQ) {
				if (bT.dn > a2U) return;
				if (bT.dn > a2U - 1e3) return ku.globalAlpha = a2c(0, (1e3 - (bT.dn - (a2U - 1e3))) / 1e3, 1), a2d(), void(ku.globalAlpha = 1)
			}
			a2d()
		}
	}
}

function bz() {
	var a2m, a2n, u, ff, fg, a2o, a2p;
	this.dD = function() {
		a2m = new Array(2), a2n = new Array(2), this.lR = !1, a2p = a2o = h8 = h6 = 0, h7 = 1, this.resize()
	}, this.resize = function() {
		u = (u = Math.floor((m.n.tX() ? .072 : .0502) * an.oU)) < 8 ? 8 : u;
		for (var a0 = 1; 0 <= a0; a0--) a2m[a0] = document.createElement("canvas"), a2m[a0].width = u, a2m[a0].height = u, a2n[a0] = a2m[a0].getContext("2d", {
			alpha: !0
		});
		this.a2G(),
			function() {
				for (var a34 = Math.floor(1 + u / 20), a0 = 1; 0 <= a0; a0--) a2n[a0].clearRect(0, 0, u, u), a2n[a0].fillStyle = p.ln, a2n[a0].beginPath(), a2n[a0].arc(u / 2, u / 2, u / 2 - a34, 0, 2 * Math.PI), a2n[a0].fill(), a2n[a0]
					.lineWidth = a34, a2n[a0].fillStyle = p.lu, a2n[a0].strokeStyle = p.lu, a2n[a0].beginPath(), a2n[a0].arc(u / 2, u / 2, u / 2 - a34, 0, 2 * Math.PI), a2n[a0].stroke(), sq(a2n[a0], 0, 0, u, a34, .3, 0 === a0)
			}()
	}, this.kv = function() {
		return -h6 / h7
	}, this.kw = function() {
		return -h8 / h7
	}, this.la = function(a2t, go) {
		h6 = h7 * a2t - go
	}, this.lb = function(a2u, gp) {
		h8 = h7 * a2u - gp
	}, this.fn = function(a2s, a0T) {
		return a2.lQ || ! function(a2s, a0T) {
			return Math.pow(a2s - (ff + u / 2), 2) + Math.pow(a0T - (fg + u / 2), 2) < u * u / 4 || Math.pow(a2s - (ff + u / 2), 2) + Math.pow(a0T - (fg + 2 * u), 2) < u * u / 4
		}(a2s, a0T) || bX.dV.data[8].value ? (a7.ld() && (this.lR = !0, a2o = a2s, a2p = a0T), !1) : a0T < fg + 1.25 * u ? this.wC(Math.floor(an.u / 2), Math.floor(an.iE / 2), -200) : this.wC(Math.floor(an.u / 2), Math.floor(an.iE / 2), 200)
	}, this.w9 = function(a2s, a0T) {
		var a2v, a2w, gr, gu;
		return !a7.ld() || (a2v = h6, a2w = h8, h6 += gr = a2o - a2s, h8 += gu = a2p - a0T, aW.w9(gr, gu), this.a2x(), a2o = a2s, a2p = a0T, a2v !== h6) || a2w !== h8
	}, this.wC = function(jl, jm, deltaY) {
		var lY;
		if (a7.ld()) {
			if (0 < deltaY) lY = (lY = 500 / (500 + deltaY)) < .5 ? .5 : lY;
			else {
				if (!(deltaY < 0)) return !1;
				lY = 2 < (lY = (500 - deltaY) / 500) ? 2 : lY
			}
			this.a2y(jl, jm, lY), bT.dK = !0
		}
		return !0
	}, this.a2y = function(ff, fg, fw) {
		var x8;
		fw = x8 = (x8 = 1024 < (x8 = fw) * h7 ? 1024 / h7 : x8) * h7 < .125 ? .125 / h7 : x8, aW.zoom(fw, ff, fg),
			function(x8, jl, jm) {
				h7 *= x8, h6 = (h6 + jl) * x8 - jl, h8 = (h8 + jm) * x8 - jm, aH.a2x()
			}(fw, ff, fg)
	}, this.a2x = function() {
		var a31 = an.u / 16,
			gU = 0,
			a32 = an.iE / 16,
			gW = 0;
		h6 < -an.u + a31 && (gU = -an.u + a31 - h6), h6 > h7 * bI.eS - a31 && (gU = h7 * bI.eS - a31 - h6), h8 < -an.iE + a32 && (gW = -an.iE + a32 - h8), h8 > h7 * bI.eT - a32 && (gW = h7 * bI.eT - a32 - h8), h6 += gU, h8 += gW, bO.lc(), aW.a33(
			gU, gW)
	}, this.a2G = function() {
		ff = an.u - u - bQ.gap, fg = Math.floor(an.iE / 2 - 1.25 * u)
	}, this.kk = function() {
		bX.dV.data[8].value || (ku.drawImage(a2m[0], ff, fg), ku.drawImage(a2m[1], ff, Math.floor(fg + 3 * u / 2)))
	}
}

function c0() {
	var e5, s5, a35, a36, gap, a37, a38, a39, a3A, a3B, zn, a3C, fc, a3D, a1P, a3E, a3F, a3G;

	function a3K() {
		a36 = Math.floor(.2 * (m.n.tX() ? .07 : .035) * an.oU), a36 = a0Q(m.n.tX() ? 3 : 1, a36);
		var a3N = an.u / (e5.length + gap);
		a36 = a36 < a3N ? a3N : a36, a1P = Math.floor((1 - gap) * a36), s5 = 0, a3O()
	}

	function a3O() {
		s5 = (s5 = s5 < -20 ? -20 : s5) > (e5.length - 15) * a36 ? (e5.length - 15) * a36 : s5, a38 = Math.floor(s5 / a36), a39 = (a39 = a38 + Math.floor(an.u / a36)) > e5.length - 1 ? e5.length - 1 : a39, a38 = (a38 = a39 < a38 ? a39 : a38) < 0 ?
			0 : a38;
		var jZ = a39;
		a37 = a35 / e5[jZ];
		for (var a0 = a39 - 1; a38 <= a0; a0--) e5[a0] > e5[jZ] && (jZ = a0, a37 = a35 / Math.pow(e5[a0], a3D))
	}

	function a3R(ff) {
		ff = Math.floor((s5 + an.u - ff - gap * a36) / a36);
		return (ff = ff < -1 ? -1 : -1 === ff ? 0 : ff > e5.length - 1 ? -1 : ff) !== a3A && (a3A = ff, -1 === a3E && 0 === a3A && aI.a3H && (a3E = setInterval(a3S, 100)), 1)
	}

	function a3T(a0) {
		var a1F = Math.floor(a37 * Math.pow(e5[a0], a3D));
		ku.fillRect(s5 + an.u - (a0 + 1) * a36, an.iE - a1F, a1P, a1F)
	}

	function a3S() {
		var f4;
		0 !== (a3A = 8 === aP.vn() ? -1 : a3A) ? (a3F = (new Date).getTime(), clearInterval(a3E), a3E = -1) : (f4 = e5[1] / 864e3, -1 !== a3F && (f4 += ((new Date).getTime() - a3F) * e5[1] / 864e5, a3F = -1), 0 < f4 && (e5[0] += Math.floor(f4), bT
			.dK = !0))
	}
	this.a3H = !1, this.dD = function() {
		a3F = a3E = -1, a3A = -(a3D = 1), this.a3I = !1, fc = 0, a3C = new Date, s5 = 0, gap = .3, (a3G = []).push({
			jL: "Plateau A",
			ex: 0,
			d: 57
		}), a3G.push({
			jL: "Max A",
			ex: 1,
			d: 1
		}), a3G.push({
			jL: "Black Friday",
			ex: 15,
			d: 15
		}), a3G.push({
			jL: "Max B",
			ex: 19,
			d: 19
		}), a3G.push({
			jL: "Max C",
			ex: 44,
			d: 44
		}), a3G.push({
			jL: "First Android Version",
			ex: 58,
			d: 58
		}), a3G.push({
			jL: "Max D",
			ex: 67,
			d: 67
		}), a3G.push({
			jL: "The iFrame Explosion",
			ex: 98,
			d: 99
		}), a3G.push({
			jL: "The 155-Day Uptrend",
			ex: 58,
			d: 213
		}), a3G.push({
			jL: "Max E",
			ex: 213,
			d: 213
		}), a3G.push({
			jL: "Plateau B",
			ex: 214,
			d: 259
		}), a3G.push({
			jL: "Turbulent Times",
			ex: 260,
			d: 344
		}), a3G.push({
			jL: "Max F",
			ex: 262,
			d: 262
		}), a3G.push({
			jL: "Max G",
			ex: 282,
			d: 282
		}), a3G.push({
			jL: "Max H",
			ex: 333,
			d: 333
		}), a3G.push({
			jL: "The 19-Day Downtrend",
			ex: 283,
			d: 301
		}), a3G.push({
			jL: "Plateau C",
			ex: 345,
			d: 385
		}), a3G.push({
			jL: "The Alliance Ascent",
			ex: 386,
			d: 395
		}), a3G.push({
			jL: "Max I",
			ex: 395,
			d: 395
		}), a3G.push({
			jL: "First iOS Version",
			ex: 411,
			d: 411
		}), a3G.push({
			jL: "Plateau D",
			ex: 396,
			d: 453
		}), a3G.push({
			jL: "The TikTok Revolution",
			ex: 454,
			d: 470
		}), a3G.push({
			jL: "Max J",
			ex: 456,
			d: 456
		}), a3G.push({
			jL: "Max K",
			ex: 472,
			d: 472
		}), a3G.push({
			jL: "Max L",
			ex: 478,
			d: 478
		}), a3G.push({
			jL: "YT Drew",
			ex: 471,
			d: 485
		}), a3G.push({
			jL: "Plateau E",
			ex: 485,
			d: 600
		}), a3G.push({
			jL: "Uptrend A",
			ex: 600,
			d: 613
		}), a3G.push({
			jL: "Max M",
			ex: 613,
			d: 613
		}), a3G.push({
			jL: "Downtrend A",
			ex: 614,
			d: 635
		}), a3G.push({
			jL: "Plateau F",
			ex: 636,
			d: 737
		}), a3G.push({
			jL: "End of Record",
			ex: 738,
			d: 738
		}), e5 = [208644377, 208644377, 208644377, 206964709, 205156594, 250680803, 249089835, 234476552, 252346209, 263196406, 270821533, 291436400, 294907103, 288866179, 297960890, 310165928, 323215738, 326005712, 312078872, 282668674,
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
		a35 = Math.floor(.15 * an.iE), a3B = (a3B = Math.floor((m.n.tX() ? .018 : .0137) * an.oU)) < 2 ? 2 : a3B, zn = b2.kt.ky(1, a3B), a3K()
	}, this.a3L = function(a3M) {
		var a0;
		for (this.a3H = !0, a0 = 0; a0 < a3M.length; a0++) e5.unshift(a3M[a0]);
		a3K(), bT.dK = !0
	}, this.a3P = function() {
		a3O()
	}, this.w9 = function(ff, fg) {
		fg > an.iE - .6 * a35 ? this.a3I ? ff !== fc && (s5 += ff - fc, fc = ff, a3O(), a3R(ff), this.a3I = -1 !== a3A, bT.dK = !0) : a3R(ff) && (bT.dK = !0) : this.wY()
	}, this.wY = function() {
		-1 !== a3A && (this.a3I = !1, a3A = -1, bT.dK = !0)
	}, this.wC = function(ff, deltaY) {
		-1 !== a3A && (s5 += Math.floor(deltaY), a3O(), a3R(ff), bT.dK = !0)
	}, this.fn = function(ff, fg) {
		this.w9(ff, fg), -1 !== a3A && (fc = ff, this.a3I = !0)
	}, this.wZ = function() {
		-1 !== a3A && (this.a3I = !1)
	}, this.kk = function() {
		ku.fillStyle = p.lx;
		for (var a3V, month, dp, pa, a3Y, a3Z, kq, a3a, a3b, a0 = a39; a38 <= a0; a0--) a3T(a0);
		this.a3H && 0 === a38 && (ku.fillStyle = p.mO, a3T(0)), -1 !== a3A && (ku.fillStyle = p.lw, a3T(a3A)), -1 !== a3A && (ku.font = zn, b2.kt.textBaseline(ku, 2), (dp = new Date).setTime(a3C.getTime() - 1e3 * a3A * 60 * 60 * 24), month =
			"month", a3V = "day", "undefined" != typeof Intl && (month = new Intl.DateTimeFormat("en-US", {
				month: "long"
			}).format(dp), a3V = new Intl.DateTimeFormat("en-US", {
				weekday: "long"
			}).format(dp)), a3V = a3V + ", " + dp.getUTCDate() + " " + month + " " + dp.getFullYear(), month = 1 === e5[a3A] ? L(77, [e5[a3A]]) : L(78, [e5[a3A]]), month = b2.l1.l2(e5[a3A]) + month, dp = Math.floor(ku.measureText(a3V).width),
			pa = Math.floor(ku.measureText(month).width), a3Y = Math.floor(.5 * (dp + a3B)), a3Z = (a3Z = s5 + an.u - (a3A + 1) * a36) < a3Y ? a3Y : a3Z > an.u - a3Y ? an.u - a3Y : a3Z, kq = an.iE - Math.floor(a37 * Math.pow(e5[a3A], a3D)),
			a3a = Math.floor(1.1 * a3B), a3b = kq > an.iE - a3a ? an.iE - a3a : kq, ku.fillStyle = p.lr, ku.fillRect(an.u - pa - a3B, a3b - a3a, pa + a3B, a3a), ku.fillRect(a3Z - a3Y, an.iE - a3a, dp + a3B, a3a), ku.fillStyle = p.lu, b2.kt
			.textAlign(ku, 2), ku.fillText(month, Math.floor(an.u - .5 * a3B), a3b),
			function(kq, a3a) {
				for (var pZ, jb = -1, ke = e5.length - a3A - 1, a0 = a3G.length - 1; 0 <= a0; a0--) ke >= a3G[a0].ex && ke <= a3G[a0].d && (-1 === jb || a3G[a0].d - a3G[a0].ex < a3G[jb].d - a3G[jb].ex) && (jb = a0); - 1 !== jb && (pZ = Math
					.floor(ku.measureText(a3G[jb].jL).width), ku.fillStyle = p.lr, ku.fillRect(an.u - pZ - a3B, kq, pZ + a3B, a3a), ku.fillStyle = p.lu, ku.fillText(a3G[jb].jL, Math.floor(an.u - .5 * a3B), kq + a3a))
			}(a3b - 2 * a3a, a3a), b2.kt.textAlign(ku, 1), ku.fillText(a3V, a3Z, an.iE), ku.strokeStyle = p.ly, ku.lineWidth = 1, ku.beginPath(), ku.moveTo(0, kq), ku.lineTo(an.u, kq), ku.closePath(), ku.stroke())
	}
}

function c1() {
	var zn, u, fg, a3d, a3e, gL, sn, a1I, xz, a3f, a3g, a3h, a3i;
	this.ff = 0, this.iE = 0, this.dD = function() {
		a3e = a2.sU, a3g = "rgba(0,100,0,0.8)", a3h = "rgba(150,0,0,0.8)", a1I = !(a3f = !0), xz = aX.et[a2.es], this.resize()
	}, this.resize = function() {
		u = Math.floor((m.n.tX() ? .305 : .24) * an.oU), this.iE = Math.floor(.5 + .13 * u), u = Math.floor(6 * this.iE), zn = b2.kt.ky(1, Math.floor(.8 * this.iE)), a3i = Math.floor(.5 * this.iE), bI.rd.font = zn, fg = bQ.gap, a3d = Math.floor(
			1 + .13 * this.iE), (gL = document.createElement("canvas")).width = u, gL.height = this.iE, (sn = gL.getContext("2d", {
			alpha: !0
		})).font = zn, b2.kt.textBaseline(sn, 1), b2.kt.textAlign(sn, 1), this.a3j()
	}, this.a1g = function() {
		return m.n.tX() && an.u < 1.2 * an.iE
	}, this.a2G = function() {
		this.a1g() ? this.ff = an.u - u - bQ.gap : this.ff = Math.floor(aK.a3k() + (an.u - aK.a3k() - aL.u - u) / 2 - .5 * bQ.gap)
	}, this.kG = function() {
		a1I && (a1I = !1, this.a3j())
	}, this.a3j = function() {
		sn.clearRect(0, 0, u, this.iE), sn.fillStyle = a3f ? a3g : a3h, sn.fillRect(0, 0, u, this.iE), sn.fillStyle = p.lw, this.a3l(), this.a3m(), sn.fillStyle = aX.et[a2.es] >= aV.iR(a2.es) ? p.mL : p.lu, sn.fillText(b2.l1.l2(xz), Math.floor(
			u / 2), a3i), sn.fillStyle = p.lu, sn.fillRect(0, 0, u, 1), sn.fillRect(0, 0, 1, this.iE), sn.fillRect(0, this.iE - 1, u, 1), sn.fillRect(u - 1, 0, 1, this.iE)
	}, this.a3l = function() {
		var sD = a3o(Math.floor((aV.a3n() - 1) * this.iE / 9), this.iE - a3d);
		sn.fillRect(0, sD, a3d, this.iE - sD), sn.fillRect(u - a3d, sD, a3d, this.iE - sD)
	}, this.a3m = function() {
		sn.fillRect(a3d, this.iE - a3d, Math.floor((u - 2 * a3d) * aX.et[a2.es] / a3e), a3d)
	}, this.ha = function() {
		0 !== aX.kW[a2.es] && 2 !== aX.xu[a2.es] && xz !== aX.et[a2.es] && (a3e = a0Q(aX.et[a2.es], a3e), a3f = aX.et[a2.es] > xz && 10 <= aX.et[a2.es], xz = aX.et[a2.es], a1I = !0)
	}, this.kk = function() {
		0 === aX.kW[a2.es] || a2.fz || 2 === aX.xu[a2.es] || ku.drawImage(gL, this.ff, fg)
	}
}

function c2() {
	var a3p, a3q, a3r, a3s, a3t, a3u, a3v, a3w, a3x, a3y, a3z, a40, a41, a42, a43, a44, a45, a46, a47, a48, a49, a4A, position, a4B, a4C, a4D, a4E, a4F = 1,
		a4G = 1;
	var leaderboardHasChanged = true;
	this.playerPos = a2.es;
	leaderboardFilter.setUpdateFlag = () => leaderboardHasChanged = true;

	function updateFilteredLb() {
		if (!leaderboardHasChanged) return;
		leaderboardFilter.filteredLeaderboard = leaderboardFilter.playersToInclude
			.map(id => iW[id]).sort((a, b) => a - b);
		leaderboardHasChanged = false;
		this.playerPos = leaderboardFilter.filteredLeaderboard.indexOf(iW[a2.es]);
	}

	function a4I() {
		a3v.clearRect(0, 0, a3p, a1w),
			a3v.fillStyle = p.mZ,
			a3v.fillRect(0, 0, a3p, a40),
			a3v.fillStyle = p.lq,
			a3v.fillRect(0, a40, a3p, a1w - a40);
		if (leaderboardFilter.enabled) updateFilteredLb();
		var playerPos = (leaderboardFilter.enabled ?
			this.playerPos :
			iW[a2.es]
		);
		if (leaderboardFilter.hoveringOverTabs) a4A = -1;
		if (leaderboardFilter.enabled && a4A >= leaderboardFilter.filteredLeaderboard.length) a4A = -1;
		playerPos >= position && a4K(playerPos - position, p.mF),
			0 !== iW[a2.es] && 0 === position && a4K(0, p.me),
			-1 !== a4A && a4K(a4A, p.lv),
			a3v.fillStyle = p.lq,
			//console.log("drawing", a4A),
			a3v.clearRect(0, a1w - leaderboardFilter.tabBarOffset, a3p, leaderboardFilter.tabBarOffset);
		a3v.fillRect(0, a1w - leaderboardFilter.tabBarOffset, a3p, leaderboardFilter.tabBarOffset);
		a3v.fillStyle = p.lu,
			a3v.fillRect(0, a40, a3p, 1),
			a3v.fillRect(0, a1w - leaderboardFilter.tabBarOffset, a3p, 1),
			leaderboardFilter.drawTabs(a3v, a3p, a1w - leaderboardFilter.tabBarOffset, p.mF),
			a3v.fillRect(0, 0, a3p, bQ.ta),
			a3v.fillRect(0, 0, bQ.ta, a1w),
			a3v.fillRect(a3p - bQ.ta, 0, bQ.ta, a1w),
			a3v.fillRect(0, a1w - bQ.ta, a3p, bQ.ta), a3v.font = a3q, b2.kt.textBaseline(a3v, 1), b2.kt.textAlign(a3v, 1), a3v.fillText(L(79), Math.floor((a3p + a40 - 22) / 2), Math.floor(a3y + a3r / 2));
		playerList.drawButton(a3v, 12, 12, a40 - 22);
		var hy, f5 = playerPos < position + a3t - 1 ? 1 : 2;

		if (leaderboardFilter.enabled) {
			let result = leaderboardFilter.filteredLeaderboard;
			if (position !== 0 && position >= result.length - a3t)
				position = (result.length > a3t ? result.length : a3t) - a3t;
			//if (position >= result.length) position = result.length - 1;
			for (a3v.font = a3s, b2.kt.textAlign(a3v, 0), hy = a3t - f5; 0 <= hy; hy--) {
				const pos = result[hy + position];
				if (pos !== undefined)
					a4L(jw[pos]), a4M(hy, pos, jw[pos]);
			}
			for (b2.kt.textAlign(a3v, 2), hy = a3t - f5; 0 <= hy; hy--) {
				const pos = result[hy + position];
				if (pos !== undefined)
					a4L(jw[pos]), a4N(hy, jw[pos]);
			}
		} else {
			for (a3v.font = a3s, b2.kt.textAlign(a3v, 0), hy = a3t - f5; 0 <= hy; hy--)
				a4L(jw[hy + position]), a4M(hy, hy + position, jw[hy + position]);
			for (b2.kt.textAlign(a3v, 2), hy = a3t - f5; 0 <= hy; hy--)
				a4L(jw[hy + position]), a4N(hy, jw[hy + position]);
		}
		2 == f5 && (a4L(a2.es), b2.kt.textAlign(a3v, 0), a4M(a3t - 1, iW[a2.es], a2.es), b2.kt.textAlign(a3v, 2), a4N(a3t - 1, a2.es)), 0 === position && (f5 = .7 * a41 / aR.get(4).height, a3v.setTransform(f5, 0, 0, f5, Math.floor(a42 + .58 * a41 +
			.5 * f5 * aR.get(4).width), Math.floor(a3y + a3r + .4 * a41)), a3v.imageSmoothingEnabled = !0, a3v.drawImage(aR.get(4), -Math.floor(aR.get(4).width / 2), -Math.floor(aR.get(4).height / 2)), a3v.setTransform(1, 0, 0, 1, 0, 0))
	}

	function a4L(player) {
		a2.hl && (a3v.fillStyle = bU.a4P[bU.up[bU.il[player]]])
	}

	function a4K(a0, a4Q) {
		a3v.fillStyle = a4Q, a0 = a3t - 1 < a0 ? a3t - 1 : a0;
		a4Q = Math.floor((a0 === a3t - 1 ? 2 : 0 === a0 ? 1.15 : 1) * a41), a4Q = a0 === a3t - 2 ? Math.floor(a40 + 9.15 * a41) - Math.floor(a40 + 8.15 * a41) : a4Q;
		a3v.fillRect(0, Math.floor(a40 + (a0 + (0 === a0 ? 0 : .15)) * a41), a3p, a4Q)
	}

	function a4M(a4S, vA, a0) {
		a3v.fillText(a46[vA], a42, Math.floor(a3y + a3r + (a4S + .5) * a41)), 1 === aX.xu[a0] && (a3v.font = "italic " + a3s);
		vA = Math.floor(a3y + a3r + (a4S + .5) * a41);
		a3v.fillText(aX.l3[a0], a43, vA), 0 !== aX.xu[a0] && (a3v.font = a3s), a0 < a2.ip && 2 !== aX.xu[a0] || a3v.fillRect(a43, vA + .35 * a4F, a45[a0], Math.max(1, .1 * a4F))
	}

	function a4N(a4S, a0) {
		a3v.fillText(aX.ep[a0], a44, Math.floor(a3y + a3r + (a4S + .5) * a41))
	}

	function a4b(fg) {
		return (fg -= bQ.gap + a40) < 0 ? Math.floor(fg / a41) - 1 : fg < (a3t - 1) * a41 ? Math.floor(fg / a41) : fg < a1w - a40 ? a3t - 1 : (fg -= a1w - a40, a3t + Math.floor(fg / a41))
	}

	function tZ(ff, fg) {
		return ff >= bQ.gap && ff < bQ.gap + a3p && fg >= bQ.gap && fg < bQ.gap + a1w
	}
	this.dD = function() {
			var a0;
			for (a4C = !1, a4E = a4D = a4B = 0, a4A = -1, a3t = m.n.tX() ? 6 : 10, a4G = (position = 0) === (a4G = bX.dV.data[11].value) ? 10 : 1 === a4G ? 5 : 1, a49 = !1, a47 = new Uint16Array(a3t + 1), a48 = new Uint32Array(a3t + 1), a3x = a2.f1,
				jw = new Uint16Array(a3x), iW = new Uint16Array(a3x), a0 = a3x - 1; 0 <= a0; a0--) jw[a0] = a0, iW[a0] = a0;
			this.resize(!0), a45 = new Uint16Array(a2.f1);
			var a4H = Math.floor(a3p - a43 - a42 - a3w);
			for (a46 = new Array(a2.f1), a3v.font = a3s, a0 = a2.f1 - 1; 0 <= a0; a0--) a46[a0] = a0 + 1 + ".", aX.l3[a0] = b2.sn.xb(aX.vM[a0], a3s, a4H), a45[a0] = Math.floor(a3v.measureText(aX.l3[a0]).width);
			a4I()
		}, this.resize = function(dD) {
			if (a1w = m.n.tX() ? (a3p = Math.floor(.335 * an.oU), Math.floor(a3t * a3p / 8)) : (a3p = Math.floor(.27 * an.oU), Math.floor(a3t * a3p / 10)), a3p = Math.floor(.97 * a3p), (a3u = document.createElement("canvas")).width = a3p, a3u
				.height = a1w, a3v = a3u.getContext("2d", {
					alpha: !0
				}), a3y = .025 * a3p, a3r = .16 * a3p, a3z = 0 * a3p, a40 = Math.floor(.45 * a3y + a3r), a41 = (a1w - a3r - 2 * a3y - a3z) / a3t,
				a3u.height = a1w += a41, leaderboardFilter.tabBarOffset = Math.floor(a41 * 1.3), leaderboardFilter.verticalClickThreshold = a1w - leaderboardFilter.tabBarOffset, leaderboardFilter.windowWidth = a3p,
				a3q = b2.kt.ky(1, Math.floor(.55 * a3r)), a4F = Math.floor((m.n.tX() ? .67 : .72) * a41), a3s = b2.kt.ky(0, a4F), a3v.font = a3s, a42 = Math.floor(.04 * a3p), a43 = Math.floor((m.n.tX() ? .195 : .18) * a3p), a3w = Math.floor(a3v
					.measureText("00920600").width), a3v.font = a3q, a44 = a3p - a42, !dD) {
				a3v.font = a3s;
				for (var a0 = a2.f1 - 1; 0 <= a0; a0--) a45[a0] = Math.floor(a3v.measureText(aX.l3[a0]).width);
				a4I()
			}
		}, this.a3k = function() {
			return a3p
		}, this.kG = function(a12, a4J) {
			(a4J || a49 && (a12 || bT.eq() % a4G == 0)) && (a49 = !1, a4I())
		}, this.ha = function() {
			! function() {
				for (var hy = a3x - 1; 0 <= hy; hy--) 0 === aX.kW[jw[hy]] && ! function(hy) {
					var a4Z = jw[hy];
					a3x--;
					for (var a0 = hy; a0 < a3x; a0++) jw[a0] = jw[a0 + 1], iW[jw[a0]] = a0;
					jw[a3x] = a4Z, iW[jw[a3x]] = a3x
				}(hy)
			}();
			for (var a4X, ld = a3x - 1, hy = 0; hy < ld; hy++) aX.ep[jw[hy]] < aX.ep[jw[hy + 1]] && (a4X = jw[hy], jw[hy] = jw[hy + 1], jw[hy + 1] = a4X, iW[jw[hy]] = hy, iW[jw[hy + 1]] = hy + 1);
			! function() {
				for (var dp = a49, f5 = (a49 = !0, iW[a2.es] >= a3t - 1 ? a3t - 2 : a3t - 1), a0 = f5; 0 <= a0; a0--)
					if (a47[a0] !== jw[a0] || a48[a0] !== aX.ep[jw[a0]]) return;
				(f5 != a3t - 2 || a47[a3t] === iW[a2.es] && a48[a3t] === aX.ep[a2.es]) && (a49 = dp)
			}();
			for (var a0 = a3t - 1; 0 <= a0; a0--) a47[a0] = jw[a0], a48[a0] = aX.ep[jw[a0]];
			a47[a3t] = iW[a2.es], a48[a3t] = aX.ep[a2.es];
			leaderboardHasChanged = true;
		}, leaderboardFilter.scrollToTop = function() {
			position = 0;
		}, this.fn = function(ff, fg) {
			return !!tZ(ff, fg) && ((utils.isPointInRectangle(ff, fg, bQ.gap + 12, bQ.gap + 12, a40 - 22, a40 - 22) && playerList.display(aX.vM), true) &&
				!(fg - bQ.gap > leaderboardFilter.verticalClickThreshold && leaderboardFilter.handleMouseDown(ff - bQ.gap)) && (a4B = bT.dn, a4C = !0, a4D = a4E = a4b(fg), b9.wp() && (ff = a2c(-1, a4E, a3t), a4A !== (ff = ff === a3t ? -1 :
					ff)) && (a4A = ff, a4I(), bT.dK = !0)), !0)
		}, leaderboardFilter.repaintLeaderboard = function() {
			a4I(), bT.dK = !0;
		},
		this.w9 = function(ff, fg) {
			if (utils.isPointInRectangle(ff, fg, bQ.gap + 12, bQ.gap + 12, a40 - 22, a40 - 22)) {
				playerList.hoveringOverButton === false && (playerList.hoveringOverButton = true, a4I(), bT.dK = !0);
			} else {
				playerList.hoveringOverButton === true && (playerList.hoveringOverButton = false, a4I(), bT.dK = !0);
			}
			if (leaderboardFilter.setHovering(
					utils.isPointInRectangle(ff, fg, bQ.gap, bQ.gap + leaderboardFilter.verticalClickThreshold, leaderboardFilter.windowWidth, leaderboardFilter.tabBarOffset), ff - bQ.gap
				)) return;
			var dp, a4a = a4b(fg);
			return a4C ? (dp = position, (position = a2c(0, position += a4D - a4a, a2.f1 - a3t)) !== dp && (a4a = (a4a = a2c(-1, a4D = a4a, a3t)) !== a3t && tZ(ff, fg) ? a4a : -1, a4A = a4a, a4I(), bT.dK = !0), !0) : (a4a = (a4a = a2c(-1, a4a,
				a3t)) === a3t || !tZ(ff, fg) || b9.wp() ? -1 : a4a, a4A !== a4a && (a4A = a4a, a4I(), bT.dK = !0))
		}, this.wZ = function(ff, fg) {
			if (!a4C) return !1;
			a4C = !1;
			var a4a = a4b(fg);
			var isEmptySpace = false;
			return b9.wp() && -1 !== a4A && (a4A = -1, a4I(), bT.dK = !0), bT.dn - a4B < 350 && a4E === a4a && -1 !== (a4a = (a4a = a2c(-1, a4a, a3t)) !== a3t && tZ(ff, fg) ? a4a : -1) && (ff = (leaderboardFilter.enabled ? (updateFilteredLb(), jw[
					leaderboardFilter.filteredLeaderboard[a4a + position] ?? (isEmptySpace = true, iW[a2.es])]) : jw[a4a + position]), a4a === a3t - 1 && (leaderboardFilter.enabled ? this.playerPos : iW[a2.es]) >=
				position + a3t - 1 && (ff = a2.es), !isEmptySpace && a2.hl && donationsTracker.displayHistory(ff, aX.vM, a2.jD), 0 !== aX.kW[ff] && !isEmptySpace) && a7.lO(ff, 800, !1, 0), !0
		}, this.wC = function(ff, fg, deltaY) {
			var a4c;
			return !(a4C || a2.lQ || (a4c = Math.max(Math.floor(Math.abs(deltaY) / 40), 1), !tZ(ff, fg)) || (ff = (ff = a2c(-1, a4b(fg), a3t)) === a3t || b9.wp() ? -1 : ff, 0 < deltaY ? position < a2.f1 - a3t && (position += Math.min(a2.f1 - a3t -
				position, a4c), a4A = ff, a4I(), bT.dK = !0) : 0 < position && (position -= Math.min(position, a4c), a4A = ff, a4I(), bT.dK = !0), 0))
		}, this.kk = function() {
			ku.drawImage(a3u, bQ.gap, bQ.gap)
		}
}

function c3() {
	var gL, sn, ff, fg, a1F, a4d, gap, a4e, fontSize, a4f, a4g, ev, a4h, a4i, a4j, a4k, a4l;

	function a4o() {
		sn.clearRect(0, 0, aL.u, aL.iE), sn.fillStyle = p.lr, sn.fillRect(0, 0, aL.u, aL.iE), sn.fillStyle = p.mB, fw = 0 < a4j ? a4j : Math.sqrt(ev[4] / 1e4), sn.fillRect(0, aL.iE - a1F - 1, Math.floor(fw * aL.u), a1F), sn.fillStyle = p.lu, sn
			.fillRect(0, 0, aL.u, 1), sn.fillRect(0, 0, 1, aL.iE), sn.fillRect(aL.u - 1, 0, 1, aL.iE), sn.fillRect(0, aL.iE - 1, aL.u, 1), sn.fillRect(0, aL.iE - a1F - 1, aL.u, 1);
		for (var fw, a4q, dp = 0, a0 = 0; a0 < a4g.length; a0++) a4h[a0] ? (b2.kt.textAlign(sn, 0), a4q = Math.floor((a4d - a1F + 2 * a4e) * (a0 - dp + 1) / (a4g.length + 1) - .7 * a4e), sn.fillText(a4g[a0], gap, a4q), b2.kt.textAlign(sn, 2), 5 ===
			a0 && 0 !== aX.kW[a2.es] && aX.et[a2.es] >= aV.iR(a2.es) ? (sn.fillStyle = p.mc, sn.fillText(a4n(a0), aL.u - gap, a4q), sn.fillStyle = p.lu) : sn.fillText(a4n(a0), aL.u - gap, a4q)) : dp++
	}

	function a4n(a0) {
		return a0 < 3 ? ev[a0].toString() : 3 === a0 || 4 === a0 || 5 === a0 ? b2.l1.yS(ev[a0] / 100, 2) : a0 < 7 ? b2.l1.l2(ev[a0]) : a0 === 7 ? aL.a3n(ev[7]) : a0 === 8 ? utils.getMaxTroops(aX.ep, a2.es) : utils.getDensity(a2.es)
	}

	function a4m() {
		aX.ep[a2.es] !== ev[6] && (ev[6] = aX.ep[a2.es], a4f++)
	}
	this.dD = function() {
		a4j = a4k = 0, (a4g = new Array(8))[0] = L(80), a4g[1] = a2.jD ? L(81) : L(82), a4g[2] = L(83), a4g[3] = L(84), a4g[4] = L(85), a4g[5] = L(86), a4g[6] = L(87), a4g[7] = L(88),
			a4g.push("Max Troops", "Density"), // add a4g
			(ev = new Array(a4g.length))[0] = a2.jD ? 0 : a2.ip, ev[1] = a2.jD ? iq : a2.jA, ev[2] = a2.uW, ev[3] = 0, ev[4] = bB.el(1e4 * aX.ep[0], a2.iV), ev[5] = 700, ev[6] = 0, a4m(), ev[7] = 0, a4i = a4n(6), a4h = new Array(a4g.length);
		for (var a0 = a4g.length - 1; 0 <= a0; a0--) a4h[a0] = !0;
		a4l = 0, a4l = a2.jD ? (a4h[0] = !1, a4h[2] = !1, a4h[3] = !1, 3) : (a4h[3] = !1, 1), a4f = 0, this.resize()
	}, this.resize = function() {
		this.u = Math.floor((m.n.tX() ? .1646 : .126) * 1.25 * an.oU), this.iE = Math.floor(1.18 * this.u), a1F = Math.floor(.04 * this.u), gap = Math.floor(.035 * this.u), a4e = .04 * this.u, a4d = this.iE, this.iE -= Math.floor(a4l * (this.iE -
			2 * a1F) / a4g.length), fontSize = Math.floor(.7 * (a4d - a1F) / a4g.length), fontSize = b2.kt.ky(1, fontSize), (gL = document.createElement("canvas")).width = this.u, gL.height = this.iE, (sn = gL.getContext("2d", {
			alpha: !0
		})).font = fontSize, b2.kt.textBaseline(sn, 1), sn.lineWidth = 1, this.yf(), this.a2G(), aJ.a2G(), a4o()
	}, this.a2G = function() {
		ff = an.u - this.u - bQ.gap
	}, this.a4p = function() {
		fg = bQ.gap
	}, this.yf = function() {
		fg = bQ.gap + (aJ.a1g() && 0 !== aX.kW[a2.es] && !a2.fz ? aJ.iE + bQ.gap : 0)
	}, this.kG = function(a12) {
		(a12 || 100 <= a4f) && (a4f = 0, a4o())
	}, this.zS = function() {
		return ev[7]
	}, this.a3n = function(value) {
		var jZ = Math.floor(value / 1e3 / 60),
			value = Math.floor((value - 6e4 * jZ) / 1e3);
		return value < 10 ? jZ + ":0" + value : jZ + ":" + value
	}, this.ha = function() {
		var a4z, per;
		a4h[0] && a2.uX - a2.uW !== ev[0] && (ev[0] = a2.uX - a2.uW, a4f++), iq - ev[0] !== ev[1] && (ev[1] = iq - ev[0], a4f++), this.k7(), (a4z = aV.a50(a2.es)) !== ev[5] && (ev[5] = a4z, a4f++), a4m(), ev[7] += bT.a51, a4z = a4n(7), a4i !==
			a4z && (a4i = a4z, a4f += 100), a4z = a2.hl ? bV.v5() : aX.ep[jw[0]], per = bB.el(1e4 * a4z, a2.iV), ev[3] = a4z, ev[4] !== per && (a4f++, ev[4] = per), 8 === a2.jB && function() {
				for (var a0 = 0; a0 < 2; a0++)
					if (!b2.en.fm(a0)) return bH.u9.uT(), 1;
				return
			}() || ev[3] < a2.iV || ! function() {
				for (var a0 = iq - 1; 0 <= a0; a0--)
					if (0 < aX.ey[is[a0]].length) return;
				return 1
			}() || bH.u9.uT()
	}, this.k7 = function() {
		a4h[2] && a2.uW !== ev[2] && (ev[2] = a2.uW, a4f++)
	}, this.a52 = function(a0) {
		var po, a53, dp;
		return 2 !== a2.uU && (a0 % 2 == 1 && (aK.kG(1, 1), bT.dK = !0), a0 === a2.yo ? (a4j = 0, a4o(), !1) : (-1 !== a0 || 0 !== a4k) && (a53 = a4j, a4j = a2.fj ? a0 / a2.yo : (dp = performance.now(), 0 <= a0 && (po = dp - 392 * a0, a4k = 0 ===
			a0 || po < a4k ? po : a4k), 1 < (a4j = (dp - a4k) / (392 * a2.yo)) ? 1 : a4j), a4o(), a4j !== a53))
	}, this.kk = function() {
		ku.drawImage(gL, ff, fg)
	}
}

function c4() {
	var t7, a54, u, iE, a2M, a55, a56, a1h, gL, lF, a57;

	function kw() {
		return Math.floor((an.u - u) / 2) < aG.iE + 2 * bQ.gap ? an.iE - iE - 4 * bQ.gap - aG.iE : an.iE - iE - 2 * bQ.gap
	}
	this.a58 = -1, this.dD = function() {
		a57 = t7 = !1, a2M = .61, a55 = .07, a56 = .09, lF = a1h = iE = 0, this.a58 = -1
	}, this.resize = function() {
		var sn, kp, ik, a5C, a5D, zs;
		t7 && (u = a3o(u = m.n.tX() ? Math.floor(.69 * an.oU) : Math.floor(.5 * an.oU), a0Q(an.u - 2 * bQ.gap, 10)), u = a3o(u, Math.floor(3.57 * a0Q(an.iE - 2 * bQ.gap, 3))), iE = Math.floor(.28 * u), (gL = document.createElement("canvas"))
			.width = u, gL.height = iE, sn = gL.getContext("2d", {
				alpha: !0
			}), kp = Math.floor(1 + iE / 40), sn.clearRect(0, 0, u, iE), sn.fillStyle = p.lr, sn.fillRect(kp, kp, u - 2 * kp, iE - 2 * kp), sn.lineJoin = "bevel", sn.lineWidth = 2 * kp, sn.strokeStyle = p.lu, sn.strokeRect(kp, kp, u - 2 * kp,
				iE - 2 * kp), sn.imageSmoothingEnabled = !1, ik = aR.get(a54), a5C = ik.width, zs = (1 === a54 ? .85 : 21 === a54 ? .666 : .9) * a2M * iE / (a5D = ik.height), sn.setTransform(zs, 0, 0, zs, Math.floor((u - zs * a5C) / 2), Math
				.floor((iE - zs * a5D) / 2)), sn.drawImage(ik, 0, 0), sn.setTransform(1, 0, 0, 1, Math.floor(u - a56 * iE - a55 * iE - kp), Math.floor(kp + a55 * iE)),
			function(sn, ex) {
				sn.lineWidth = Math.floor(1 + iE / 80), sn.strokeStyle = p.lu, sn.beginPath(), sn.moveTo(0, 0), sn.lineTo(ex, ex), sn.moveTo(0, ex), sn.lineTo(ex, 0), sn.stroke()
			}(sn, Math.floor(a56 * iE)), sn.setTransform(1, 0, 0, 1, 0, 0))
	}, this.show = function(dr, a5A, a29, a5B) {
		t7 || a5B && a57 || (a54 = a29 ? 21 : dr ? 1 : 2, t7 = a57 = !0, this.resize(), aA.pn(), aG.a26(), lF = bT.dn, -1 === this.a58 && (this.a58 = bT.eq()), a1h = a5A ? 1 : 0)
	}, this.ha = function() {
		!t7 || 1 <= a1h || (a1h = 1 < (a1h += 5e-4 * (bT.dn - lF)) ? 1 : a1h, lF = bT.dn, bT.dK = !0)
	}, this.fn = function(ff, fg) {
		return !(!t7 || a1h <= 0 || (ff -= Math.floor((an.u - u) / 2), fg -= kw(), ff < 0) || fg < 0 || u < ff || iE < fg || (u - iE / 3 < ff && fg < iE / 3 && (t7 = !1, bT.dK = !0), 0))
	}, this.kk = function() {
		!t7 || a1h <= 0 || (ku.globalAlpha = a1h, ku.drawImage(gL, Math.floor((an.u - u) / 2), kw()), ku.globalAlpha = 1)
	}
}

function d4() {
	var a5F = [0, 0],
		a5G = [0, 0];

	function a5J(ke) {
		return 3 !== a5F[ke] && 1 !== a5G[ke] && (a5G[ke] = 1, a5F[ke]++, bX.p4.p5(119, (a5F[0] << 2) + a5F[1]), 1)
	}
	this.a5H = new a5I, this.dD = function() {
		var dr = bX.dV.data[119].value;
		a5F[0] = dr >> 2, a5F[1] = 3 & dr
	}, this.z0 = function() {
		this.a5H.dD()
	}, this.ha = function() {
		this.a5H.ha()
	}, this.zT = function() {
		a5J(0) && aC.a0W(L(89))
	}, this.zU = function() {
		a5J(1) && aC.a0W(L(90))
	}
}

function a5I() {
	var a5K;
	this.dD = function() {
		a5K = !1
	}, this.ha = function() {
		var f4;
		if (function() {
				if (!a5K) {
					if (bT.eq() % 30 != 9) return;
					if (!b2.en.jq(90)) return;
					a5K = !0
				}
				return 1
			}() && (! function() {
				var oM = aC.a0s(956);
				if (oM) {
					if (b2.en.je(oM.player)) return 1;
					aC.a0q(956, 0)
				}
				return
			}() && (-1 === (f4 = (a2.hl ? function() {
				for (var id = bV.ju(), ex = iq, su = is, il = bU.il, a0 = 0; a0 < ex; a0++) {
					var f4 = su[a0];
					if (il[f4] !== id) return f4
				}
				return -1
			} : function() {
				for (var a5R = iq, ir = is, a5S = iW, a0 = 0; a0 < a5R; a0++) {
					var f4 = ir[a0];
					if (0 !== a5S[f4]) return f4
				}
				return -1
			})()) ? ! function() {
				var oM = aC.a0s(957);
				if (oM && oM.a0M) {
					if (aS.f9(oM.a0M.fu << 2)) return 1;
					aC.a0q(957, 0)
				}
				return
			}() : (aC.ut(0, L(91, [aX.l3[f4]]), 956, f4, p.lu, p.lr, -1, !0), 0)))) {
			var ex = ab.hP.jj;
			if (0 !== ex)
				for (var dV = ab.hP.dV, a0 = 0; a0 < ex; a0++) {
					var fu = dV[a0];
					if (aS.f9(fu << 2)) return void aC.ut(0, L(92, [bC.gV(fu), bC.gX(fu)]), 957, 0, p.lu, p.lr, -1, !0, void 0, {
						fu: fu
					})
				}
		}
	}
}

function d3() {
	this.a5T = !1, this.ll = !1, this.yj = !1, this.a5U = [0, 0, 0, 0], this.a5V = function() {
		var kp, kq, kr, ks;
		this.yj = this.yj || this.ll, (this.ll || this.a5T && this.yj) && (kp = bO.a5W[0], kq = bO.a5W[1], kr = bO.a5W[2], ks = bO.a5W[3], kp = kp < this.a5U[0] ? this.a5U[0] : kp, kq = kq < this.a5U[1] ? this.a5U[1] : kq, kr = kr > this.a5U[2] ?
			this.a5U[2] : kr, ks = ks > this.a5U[3] ? this.a5U[3] : ks, this.ll = !1, this.a5T = !1, kp === this.a5U[0] && kq === this.a5U[1] && kr === this.a5U[2] && ks === this.a5U[3] ? this.yk() : kp <= kr && kq <= ks && z2.putImageData(
				z3, 0, 0, kp, kq, kr - kp + 1, ks - kq + 1))
	}, this.yk = function() {
		this.yj && this.a5U[2] >= this.a5U[0] && this.a5U[3] >= this.a5U[1] && z2.putImageData(z3, 0, 0, this.a5U[0], this.a5U[1], this.a5U[2] - this.a5U[0] + 1, this.a5U[3] - this.a5U[1] + 1), this.yj = !1
	}, this.uf = function() {
		this.a5U[2] >= this.a5U[0] && this.a5U[3] >= this.a5U[1] && z2.putImageData(z3, 0, 0, this.a5U[0], this.a5U[1], this.a5U[2] - this.a5U[0] + 1, this.a5U[3] - this.a5U[1] + 1), this.yj = !1
	}, this.dD = function() {
		var ff, fg;
		this.a5T = !1, this.ll = !1, this.yj = !1, this.a5U[0] = bI.eS, this.a5U[1] = bI.eT, this.a5U[2] = this.a5U[3] = 0;
		loop: for (ff = 1; ff < bI.eS - 1; ff++)
			for (fg = bI.eT - 2; 1 < fg; fg--)
				if (1 === a5X[aS.sL(ff, fg) + 2]) {
					this.a5U[0] = ff;
					break loop
				} loop: for (fg = 1; fg < bI.eT - 1; fg++)
			for (ff = bI.eS - 2; 1 < ff; ff--)
				if (1 === a5X[aS.sL(ff, fg) + 2]) {
					this.a5U[1] = fg;
					break loop
				} loop: for (ff = bI.eS - 2; 0 < ff; ff--)
			for (fg = bI.eT - 2; 1 < fg; fg--)
				if (1 === a5X[aS.sL(ff, fg) + 2]) {
					this.a5U[2] = ff;
					break loop
				} loop: for (fg = bI.eT - 2; 0 < fg; fg--)
			for (ff = bI.eS - 2; 1 < ff; ff--)
				if (1 === a5X[aS.sL(ff, fg) + 2]) {
					this.a5U[3] = fg;
					break loop
				}
	}
}

function L(value, a5Y) {
	var oD = "number" == typeof value ? az.a5Z[value] : value;
	if (a5Y)
		for (var ex = a5Y.length, a0 = 0; a0 < ex; a0++)
			for (var hy = 0; hy < 3; hy++) oD = oD.replace("{" + (10 * hy + a0) + "}", a5Y[a0]);
	return oD
}

function bi() {
	this.data = new a5a;
	var a5b = (new a5c).L84,
		a5d = (this.a5Z = a5b, !1);
	this.dD = function() {
		"en" !== bX.dV.data[12].value.split("-")[0].toLowerCase() ? bX.dV.data[12].value === bX.dV.data[145].value && bX.dV.data[146].value === a5b.length && function() {
			var ex = a5b.length,
				e5 = bX.ok.qd(ex);
			if (e5.length !== ex) return;
			for (var a0 = 0; a0 < ex; a0++)
				if (!e5[a0]) return;
			return az.a5Z = e5, 1
		}() || (a5d = !0) : az.a5Z = a5b
	}, this.dF = function() {
		bU.dE(), a3.dE(), bS.dE(), bR.dE()
	}, this.a5i = function() {
		var a5j;
		a5d && (a5d = !1, a5j = bX.dV.data[12].value, aq.a5k.a5l(0, a5j.slice(0, 20)))
	}, this.a5m = function(e5) {
		e5.length === a5b.length && (this.a5Z = e5, bX.p4.p5(145, bX.dV.data[12].value), bX.p4.p5(146, e5.length), bX.ok.qg(e5))
	}
}

function a5a() {
	var e5 = ["aa", "ab", "ace", "ach", "af", "ak", "alz", "am", "ar", "as", "av", "awa", "ay", "az", "ba", "bal", "ban", "bbc", "bci", "be", "bem", "ber", "ber-Latn", "bew", "bg", "bho", "bik", "bm", "bm-Nkoo", "bn", "bo", "br", "bs", "bts", "btx",
		"bua", "ca", "ce", "ceb", "cgg", "ch", "chk", "chm", "ckb", "cnh", "co", "crh", "crs", "cs", "cv", "cy", "da", "de", "din", "doi", "dov", "dv", "dyu", "dz", "ee", "el", "en", "eo", "es", "et", "eu", "fa", "fa-AF", "ff", "fi", "fj", "fo",
		"fon", "fr", "fur", "fy", "ga", "gaa", "gd", "gl", "gn", "gom", "gu", "gv", "ha", "haw", "he", "hi", "hil", "hmn", "hr", "hrx", "ht", "hu", "hy", "iba", "id", "ig", "ilo", "is", "it", "iw", "ja", "jam", "jv", "jw", "ka", "kac", "kek",
		"kg", "kha", "kk", "kl", "km", "kn", "ko", "kr", "kri", "ktu", "ku", "kv", "ky", "la", "lb", "lg", "li", "lij", "lmo", "ln", "lo", "lt", "ltg", "luo", "lus", "lv", "mad", "mai", "mak", "mam", "mfe", "mg", "mh", "mi", "min", "mk", "ml",
		"mn", "mni-Mtei", "mr", "ms", "ms-Arab", "mt", "mwr", "my", "ndc-ZW", "ne", "new", "nhe", "nl", "no", "nr", "nso", "nus", "ny", "oc", "om", "or", "os", "pa", "pa-Arab", "pag", "pam", "pap", "pl", "ps", "pt", "pt-PT", "qu", "rn", "ro",
		"rom", "ru", "rw", "sa", "sah", "scn", "sd", "se", "sg", "shn", "si", "sk", "sl", "sm", "sn", "so", "sq", "sr", "ss", "st", "su", "sus", "sv", "sw", "szl", "ta", "tcy", "te", "tet", "tg", "th", "ti", "tiv", "tk", "tl", "tn", "to", "tpi",
		"tr", "trp", "ts", "tt", "tum", "ty", "tyv", "udm", "ug", "uk", "ur", "uz", "ve", "vec", "vi", "war", "wo", "xh", "yi", "yo", "yua", "yue", "zap", "zh", "zh-CN", "zh-TW", "zu"
	];
	this.a5n = function() {
		for (var a5o = [], ex = e5.length, a0 = 0; a0 < ex; a0++) a5o.push(e5[a0]);
		for (ex++, a5o.unshift(bX.dV.data[12].qY), a0 = 1; a0 < ex; a0++)
			if (a5o[a0] === a5o[0]) {
				a5o.splice(a0, 1), ex--;
				break
			} if ("undefined" != typeof Intl)
			for (a0 = 0; a0 < ex; a0++) {
				var oD = new Intl.DisplayNames([a5o[a0]], {
					type: "language"
				}).of(a5o[a0]);
				oD !== a5o[a0] && (a5o[a0] = a5o[a0] + ": " + oD)
			}
		return a5o
	}, this.a5q = function(a5r) {
		for (var oD = bX.dV.data[12].value, ex = a5r.length, a0 = 0; a0 < ex; a0++)
			if (oD === a5r[a0].split(":")[0]) return a0;
		return 0
	}
}

function a5c() {
	this.L84 = ["Very Easy", "Easy", "Normal", "Hard", "Very Hard", "Impossible", "Enabled", "Team {0}", "Team {0} won the game!", "You have earned a participation reward of {10} gold.", "You have earned prize money of {10} gold.",
		"The following clans have won these glorious points:", "Validate the clan results by clicking here: ", "❌ Back", "Error {10}", "Quit Game", "More", "Accept", "You have conquered {0}.", "You have been conquered by {0}.",
		"Congratulations! You have won the game.", "{0} has won the game.", "{0} has broken the non-aggression pact.", "{0} is attacking you!", "Choose your start position!", "You have surrendered!", "The game has ended in a stalemate!",
		"Error: {20}", "{0} has been immortalized!", "Neutral Land: {0}", "Player: {0}   Balance: {11}   Territory: {12}   Coordinates: {13}", "Mountains: {10}", "Water: {10}", "Ship Owner: {0}   Strength: {11}", "Message to {0}: ",
		"Humanity triumphs! The undead have been beaten back.", "The Resistance", "Mankind's era ends, overrun by the relentless tide of the undead.", "The Virus", "If peace is agreed upon, the game ends in a stalemate.",
		"If peace is agreed upon, the largest territory holder wins the game.", "You have signed a non-aggression pact with {0}.", "You have asked {0} to sign a non-aggression pact.", "{0} has accepted the non-aggression pact.",
		"{0} requests a non-aggression pact.", "You have asked {10} players to attack {1}.", "You have asked {0} to attack {1}.", "{0} suggests you attack {1}.", "You have exported 1 resource to {0}.", "You have exported {10} resources to {1}.",
		"A tax of 1 unit has been deducted.", "A tax of {10} units has been deducted.", "A bot ({0}) has supported you with 1 resource.", "A bot ({0}) has supported you with {11} resources.", "{0} has supported you with 1 resource.",
		"{0} has supported you with {11} resources.", "Map: {10}", "Dimension: {10}x{11}", "Overall Pixels: {10}", "Land: {10} ({11})", "Water: {10} ({11})", "Mountains: {10} ({11})", "Full sending is disabled.", "{0} has been conquered by {1}.",
		"{0} has left the game.", "{0} has surrendered.", "{0} has joined the game.", "{10} players have been conquered.", "{10} players have left the game.", "{10} players have surrendered.", "YOU HAVE CONQUERED", "YOU HAVE BEEN CONQUERED BY",
		"THE GAME HAS BEEN WON BY", "MAP:", "{0} has called the peace vote.", "{0} voted for peace.", "{0} rejected peace.", "{10} second played", "{10} seconds played", "LEADERBOARD", "Humans", "Players", "Bots", "Spectators", "Threshold",
		"Percentage", "Growth", "Income", "Time", "Hint: Click on a boat to send it to a new location.", "Hint: The top 9 emojis are ordered by usage.", "{0} still needs to be conquered!",
		"A neutral pixel at position ({10}, {11}) still needs to be conquered!", "Loading", "Back", "Joined", "Skipped", "Multiplayer", "Singleplayer", "other: ", "Custom", "Reset", "Maps", "Start", "You", "1 Player", "{10} Players",
		"White Arena", "Black Arena", "Island", "Mountains", "Desert", "Swamp", "Snow", "Cliffs", "Pond", "Halo", "Europe", "World", "Caucasia", "Africa", "Middle East", "Scandinavia", "North America", "South America", "Asia", "Australia",
		"Island Kingdom", "🔑 My Account", "❌ Close", "Account Name", "Copy", "Password", "Show", "Hide", "Request New Password", "Account Options", "Log in to a Different Account", "Create New Account", "Delete Account: ",
		"🗑️ Account Deletion", "Accounts without gold will be deleted automatically after 8 days. To initiate this process, deplete all your gold.", "Saved Accounts",
		"Listed accounts may have been removed in the meantime due to insufficient funds.", "🗑️ Remove From List", "➡️ Login", "1v1 Rating", "Elo: ", "Rank: ", "Played Games: ", "No Admin", "Assistant Moderator", "Admin Coordinator",
		"Senior Admin", "Head Admin", "Admin Statistics", "Points: ", "Status: ", "Username", "🧈 Gold", "Balance: ",
		"Play more multiplayer games to earn gold. Depleted accounts will be deleted after 8 days of grace. Each day, you will lose 0.50 gold or 0.01% of your balance, whichever amount is higher.",
		"Buttons with a yellow font color require small amounts of gold! Gold will be redistributed to affected accounts, for example, to those accounts that appear in a list.",
		"Gold is the fuel that keeps your account running! Keep the balance up!", "Primary Clan Stats", "Clan: ", "Monthly Points: ", "Total Points: ", "Won Games: ", "Avg. Points per Game: ", "Secondary Clan Stats", "Report", "Clan Chart",
		"🛠️ Custom", "🛠️ Chart Options", "Search Terms", "Separate search terms with a comma.", "Go", "Start Index", "End Index", "Timeframe", "More Options", "Y-Axis Compression", "Choose Your Nation's Color!", "National Color", "Red: ",
		"Green: ", "Blue: ", "⏳ Connecting...", "Find Server...", "New Connection...", "Single Player", "My Account", "Game Menu", "Your Kingdom's Name", "Clans", "Clan Members", "1v1 Players", "Admins", "🏆 Leaderboards", "⬆️ Up", "⬇️ Down",
		"1v1 Player Ranking", "Clan Ranking", "Clan Member Ranking", "Admin Ranking", "1v1 Reports", "Admin Election", "Ranking", "Elo", "Account ↗", "Clan", "Points", "Index", "Seconds Ago", "Accuser ↗", "Accused ↗", "Elector ↗", "Elected ↗",
		"🛠️ List Options", "Search", "Matches", "Login", "📜 Logs", "▶️ Replay", "🔲 Select All", "📋 Copy", "🗑️ Clear", "▶️ Launch", "Insert the replay link here!", "⚙️ Settings", "🔄 Reset", "Information",
		"Increasing resolution, shrinking minimum font size, and speeding up text rendering can strain your system and hinder gameplay responsiveness.", "Lobby", "Proxied Lobby", "Resolution", "Low", "Medium", "High", "Very High",
		"Minimum Font Size", "Small", "Very Small", "Text Rendering Speed", "Slow", "Fast", "Large UI", "Place Balance Above", "Hide Zoom Buttons", "Font", "Language", "📈 Charts", "🔗 Links", "ℹ️ Game Version", "🗑️ Delete Data",
		"Privacy Settings", "Force Restart Game", "☰ Game Menu", "📊 Game Statistics", "🏳️ Surrender", "🕊️ Call Peace Vote", "Android App", "iOS App", "Changelog", "Clan Results", "Tutorial", "Terms", "Privacy",
		"Do you want to delete all locally stored data, like usernames, account data and setting data? Your account will be deleted automatically after 3 months of inactivity. To prevent the storage of new data, it is recommended to close the game after deletion.",
		"🗑️ Delete", "User Privacy", "Check out our Privacy Policy at:", "An enemy ship belonging to {0} is heading towards your shore.", "Avg. Attack Strength", "Number Attacks", "Ships sent", "Bots conquered", "Humans conquered",
		"Attacked by Bots", "Attacked by Humans", "Territorial Loss", "Territorial Income", "Interest Income", "Received Support", "Overall Income", "Commanding Costs", "Attack Losses", "Defense Losses", "Shipping Losses", "Transmitted Support",
		"Overall Expenses", "Territory", "Balance", "Numbers", "Statistics", "White", "Red", "Green", "Blue", "Yellow", "Magenta", "Cyan", "Black"
	]
}

function dI() {
	var ff, fg, iE, a5s, a5t, a5u, a5v, a5w, a5x, u, xq, a5y;
	this.t7 = !1, this.dD = function(oD, a5z) {
		if (1 === m.id && 13 <= m.ds && m.ds < 18) return a5z ? void(xq = oD) : xq !== oD ? void 0 : void m.t.saveString(200, oD);
		a5z && (xq = oD, (a5y = document.createElement("a")).appendChild(document.createTextNode(xq)), this.t7 = !0, a5y.title = xq, a5y.target = "_blank", a5y.href = xq, a5y.style.textAlign = "center", a5y.style.color = p.lu, a5y.style
			.position = "absolute", a5y.style.padding = "0px", a5y.style.margin = "0px", this.resize(), document.body.appendChild(a5y), bT.dK = !0)
	}, this.pn = function() {
		return !(!this.t7 || (document.body.removeChild(a5y), this.t7 = !1))
	}, this.fn = function(go, gp) {
		return !!this.t7 && ((go < ff || gp < fg || ff + u < go || fg + iE < gp || ff + u - a5s < go && gp < fg + a5s) && (bT.dK = !0, this.t7 = !1, document.body.removeChild(a5y)), !0)
	}, this.resize = function() {
		var zn, a60;
		this.t7 && (a5w = Math.floor(.8 * (m.n.tX() ? an.u > an.iE ? .6 : .55 : .4) * an.oU), a5s = Math.floor(.15 * a5w), a5t = Math.floor(.35 * a5s), a5u = Math.floor(.5 * a5s), a5v = Math.floor(2.5 * a5u), iE = a5s + a5t + 3 * a5u, zn = b2.kt
			.ky(1, a5t / an.oY), a5x = Math.floor(an.oY * aF.measureText(xq, zn)), a60 = u = (a5w < a5x ? a5x : a5w) + 2 * a5v, u = Math.min(u, an.u - 2 * (m.n.tX() ? 2 : 1) * bQ.gap), zn = b2.kt.ky(1, u / a60 * a5t / an.oY), a5x = Math
			.floor(an.oY * aF.measureText(xq, zn)), ff = Math.floor((an.u - u) / 2), fg = Math.floor((an.iE - iE) / 2), a5y.style.font = zn, a5y.style.top = Math.floor((fg + 1.4 * a5u + a5s) / an.oY) + "px", a5y.style.left = Math.floor((ff +
				(u - a5x) / 2) / an.oY) + "px")
	}, this.kk = function() {
		this.t7 && (ku.fillStyle = p.lr, ku.fillRect(ff, fg + a5s, u, iE - a5s), ku.fillStyle = p.mm, ku.fillRect(ff, fg, u, a5s), ku.fillStyle = p.lu, ku.lineWidth = bQ.ta, ku.strokeStyle = p.lu, ku.strokeRect(ff, fg, u, iE), ku.fillRect(ff,
			fg + a5s, u, bQ.ta), ku.font = b2.kt.ky(1, .48 * a5s), b2.kt.textAlign(ku, 1), b2.kt.textBaseline(ku, 1), ku.fillText("You are leaving Territorial.io!", Math.floor(ff + (u - .5 * a5s) / 2), Math.floor(fg + .55 * a5s)), aB.zz(
			Math.floor(ff + u - .8 * a5s), Math.floor(fg + .25 * a5s), Math.floor(.5 * a5s)), ku.setTransform(1, 0, 0, 1, 0, 0))
	}
}

function dG() {
	var gap, a4g, ff = [0, 0, 0, 0, 0],
		fg = [0, 0, 0, 0, 0],
		lY = [1, 1, 1, 1, 1],
		dr = [!0, !0, !1, !1, !1],
		ik = (this.eA = [!0, !0, !1, !1, !1], null);
	this.a61 = function(xP, a62) {
		ik = xP, dr = a62, a4g = [bA.a63, bA.vj, bA.a64, bA.a65, bA.a66], this.dD()
	}, this.dD = function() {
		if (aR.ps()) {
			var a0, pZ = Math.floor((m.n.tX() ? .261 : .195) * an.oU),
				pa = Math.floor(.9 * pZ),
				a2M = Math.floor(.17 * pa);
			if (gap = m.n.tX() ? 2 * bQ.gap : bQ.gap, lY[0] = pZ / ik[0].width, lY[1] = pa / ik[1].width, lY[2] = a2M / ik[2].height, lY[3] = a2M / ik[3].height, lY[4] = a2M / ik[4].height, lY[3] *= 1.07, ff[0] = gap, ff[1] = gap, ff[2] = gap,
				ff[3] = gap, ff[4] = Math.floor(2 * gap + lY[3] * ik[3].width), fg[0] = gap, fg[1] = fg[0] + gap + lY[0] * ik[0].height, fg[2] = fg[1] + gap + lY[1] * ik[1].height, fg[3] = fg[2] + gap + lY[2] * ik[2].height, fg[4] = fg[3], !dr[0]
				)
				for (a0 = 0; a0 < 5; a0++) fg[a0] -= lY[0] * ik[0].height + gap;
			if (!dr[1])
				for (a0 = 2; a0 < 5; a0++) fg[a0] -= lY[1] * ik[1].height + gap
		}
	}, this.t7 = function() {
		return !(7 === aP.vn() && m.n.tX())
	}, this.fn = function(go, gp, a5z) {
		if (ik && this.t7())
			for (var a0 = dr.length - 1; 0 <= a0; a0--)
				if (dr[a0] && this.eA[a0] && ff[a0] < go && fg[a0] < gp && go < ff[a0] + lY[a0] * ik[a0].width && gp < fg[a0] + lY[a0] * ik[a0].height) return i.j(9, i.pV, new a67("You are leaving Territorial.io.", b2.kt.xp(a4g[a0]))), !0;
		return !1
	}, this.kk = function() {
		if (ik && this.t7()) {
			var a0;
			for (ku.imageSmoothingEnabled = !0, a0 = 0; a0 < 5; a0++) dr[a0] && this.eA[a0] && (ku.setTransform(lY[a0], 0, 0, lY[a0], ff[a0], fg[a0]), ku.drawImage(ik[a0], 0, 0));
			ku.setTransform(1, 0, 0, 1, 0, 0)
		}
	}
}

function c5() {
	var a68, a69, a6A;

	function a6F(a0) {
		var button = aN.ov[a0],
			ff = button.ff,
			fg = button.fg,
			u = button.u,
			iE = button.iE;
		ku.fillStyle = button.a6D, ku.fillRect(ff, fg, u, iE), a0 === a68 && (ku.fillStyle = a6A, ku.fillRect(ff, fg, u, iE)), ku.lineWidth = bQ.ta, ku.strokeStyle = a69, ku.strokeRect(ff, fg, u, iE),
			function(button) {
				var ff = button.ff,
					fg = button.fg,
					u = button.u,
					iE = button.iE;
				b2.kt.textAlign(ku, 1), b2.kt.textBaseline(ku, 1), ku.font = button.font, ku.fillStyle = a69, ku.fillText(button.a15, Math.floor(ff + u / 2), Math.floor(fg + iE / 2 + .1 * button.fontSize))
			}(button)
	}
	this.u = 0, this.iE = 0, this.fg = 0, this.gap = 0, this.dD = function() {
		a68 = -1, a69 = p.lu, a6A = "rgba(255,255,255,0.16)", this.ov = new Array(7), this.iE = Math.floor((m.n.tX() ? .123 : .093) * an.oU), this.u = Math.floor((m.n.tX() ? 3.96 : 4.2) * this.iE), this.gap = Math.floor(.025 * this.u);
		var a6B = Math.floor(.26 * this.iE),
			a6C = b2.kt.ky(1, a6B);
		this.ov[0] = {
			ff: 0,
			fg: 0,
			u: Math.floor(.6 * this.u - this.gap / 2),
			iE: this.iE,
			a15: "Multiplayer",
			font: a6C,
			a6D: "rgba(22,88,22,0.8)",
			fontSize: a6B
		}, a6B = Math.floor(.18 * this.iE), a6C = b2.kt.ky(1, a6B), this.ov[1] = {
			ff: 0,
			fg: 0,
			u: this.u - this.ov[0].u - this.gap,
			iE: this.iE,
			a15: "Single Player",
			font: a6C,
			a6D: "rgba(22,88,88,0.8)",
			fontSize: a6B
		}, this.ov[2] = {
			ff: 0,
			fg: 0,
			u: this.u,
			iE: Math.floor(.3 * this.iE),
			a15: "",
			font: this.ov[1].font,
			a6D: "rgba(100,0,0,0.8)",
			fontSize: this.ov[1].fontSize
		}, this.ov[3] = {
			ff: 0,
			fg: 0,
			u: this.u,
			iE: this.iE,
			a15: "Back",
			font: this.ov[0].font,
			a6D: "rgba(0,0,0,0.8)",
			fontSize: this.ov[0].fontSize
		}, this.ov[4] = {
			ff: 0,
			fg: 0,
			u: this.u,
			iE: Math.floor(.3 * this.iE),
			a15: "The game was updated!",
			font: this.ov[1].font,
			a6D: "rgba(100,0,0,0.8)",
			fontSize: this.ov[1].fontSize
		}, this.ov[5] = {
			ff: 0,
			fg: 0,
			u: this.ov[0].u,
			iE: Math.floor(.8 * this.iE),
			a15: "Reload",
			font: this.ov[0].font,
			a6D: "rgba(0,100,0,0.8)",
			fontSize: this.ov[0].fontSize
		}, this.ov[6] = {
			ff: 0,
			fg: 0,
			u: this.ov[1].u,
			iE: this.ov[5].iE,
			a15: "Back",
			font: this.ov[0].font,
			a6D: "rgba(0,0,0,0.8)",
			fontSize: this.ov[0].fontSize
		}, this.a3P()
	}, this.a3P = function() {
		this.fg = Math.floor(.54 * an.iE), this.ov[0].ff = Math.floor(.5 * an.u - .5 * this.u), this.ov[1].ff = this.ov[0].ff + this.ov[0].u + this.gap, this.ov[2].ff = this.ov[3].ff = this.ov[0].ff, this.ov[4].ff = this.ov[5].ff = this.ov[0].ff,
			this.ov[6].ff = this.ov[1].ff, this.ov[0].fg = Math.floor(.54 * an.iE), this.ov[1].fg = this.ov[0].fg, this.ov[2].fg = Math.floor((an.iE - this.ov[2].iE - this.ov[3].iE - this.gap) / 2), this.ov[3].fg = this.ov[2].fg + this.ov[2].iE +
			this.gap, this.ov[4].fg = Math.floor((an.iE - this.ov[4].iE - this.ov[5].iE - this.gap) / 2), this.ov[5].fg = this.ov[6].fg = this.ov[4].fg + this.ov[4].iE + this.gap
	}, this.a6E = function() {
		a6F(0), a6F(1)
	}, this.a6G = function() {
		a6F(2), a6F(3)
	}, this.a6H = function() {
		a6F(4), a6F(5), a6F(6)
	}, this.w9 = function(ff, fg, kG) {
		var a0 = -1;
		return 0 === aP.vn() ? a0 = this.we(ff, fg, 0, 2) : 3 === aP.vn() ? a0 = this.we(ff, fg, 3, 1) : 5 === aP.vn() && (a0 = this.we(ff, fg, 5, 2)), a68 !== a0 && (a68 = a0, kG) && (bT.dK = !0), -1 !== a0 && (aI.wY(), !0)
	}, this.we = function(ff, fg, a6I, size) {
		for (var a0 = a6I; a0 < a6I + size; a0++)
			if (ff >= this.ov[a0].ff && fg >= this.ov[a0].fg && ff <= this.ov[a0].ff + this.ov[a0].u && fg <= this.ov[a0].fg + this.ov[a0].iE) return a0;
		return -1
	}
}

function a6K() {
	function a6R(a4Q) {
		return a4Q < 0 ? 0 : 255 < a4Q ? 255 : Math.floor(a4Q)
	}
	this.u = 0, this.iE = 0, this.t7 = !1, this.a6L = 0, this.gap = 0, this.a6M = 0, this.a5s = 0, this.a6N = 0, this.a6O = 0, this.a6P = 0, this.colors = null, this.dD = function() {
		this.t7 = !0, this.a6L = 0, this.resize()
	}, this.resize = function() {
		this.t7 && (an.u < 1.4 * an.iE ? this.u = Math.floor((m.n.tX() ? .94 : .43) * an.u) : (this.iE = Math.floor((m.n.tX() ? .88 : .43) * an.iE), this.u = Math.floor(1.4 * this.iE)), this.iE = this.u / 1.4, this.gap = this.u / 32, this.a5s =
			Math.floor(.25 * this.iE), this.a6N = (this.iE - this.a5s - 3 * this.gap) / 2, this.a6O = this.u - 3 * this.gap - this.a6N, this.a6P = (this.iE - this.a5s - 4 * this.gap) / 3)
	}, this.a6Q = function() {
		this.colors = [
			[0, 0, 0],
			[0, 0, 0]
		];
		var oD = bX.dV.data[103].value.split("");
		if (oD.length < 6)
			for (var i4 = 2; 0 <= i4; i4--) this.colors[0][i4] = a6R(256 * Math.random());
		else
			for (var a0 = 2; 0 <= a0; a0--) this.colors[0][a0] = a6R(4 * (10 * parseInt(oD[2 * a0]) + parseInt(oD[2 * a0 + 1])));
		this.a6S()
	}, this.a6T = function() {
		return [bB.el(this.colors[0][0], 4), bB.el(this.colors[0][1], 4), bB.el(this.colors[0][2], 4)]
	}, this.wC = function(jl, jm, deltaY) {
		var kp = (an.u - this.u) / 2;
		jm -= (an.iE - this.iE) / 2 + this.a5s, (jl -= kp) < 0 || jm < 0 || jl >= this.u || jm >= this.iE - this.a5s || (kp = Math.floor(3 * jm / (this.iE - this.a5s)), this.colors[this.a6M][kp] = a6R(this.colors[this.a6M][kp] + (deltaY < 0 ? 1 :
			-1) * Math.max(Math.abs(.05 * deltaY), 1)), bT.dK = !0)
	}, this.fn = function(jl, jm) {
		this.a6L = 0;
		var kp = (an.u - this.u) / 2;
		return jm -= (an.iE - this.iE) / 2, (jl -= kp) < 0 || jm < 0 || jl >= this.u - 1 || jm >= this.iE - 1 || jl > this.u - (.4 * this.a5s + 3 * this.gap) && jm < this.a5s ? (this.t7 = !1, !(bT.dK = !0)) : jl < this.gap || jm < this.gap + this
			.a5s || jl >= this.u || jm >= this.iE - this.gap || (jl < this.gap + this.a6N ? (jm < this.gap + this.a5s + this.a6N && 0 !== this.a6M && (this.a6M = 0, bT.dK = !0), !0) : jl < this.gap + this.a6N || (jl -= 2 * this.gap + this.a6N,
				jm < this.gap + this.a5s + this.a6P ? (this.a6L = 1, this.colors[this.a6M][0] = a6R(256 * jl / this.a6O), bT.dK = !0) : jm < 2 * this.gap + this.a5s + this.a6P || (jm < 2 * this.gap + this.a5s + 2 * this.a6P ? (this.a6L = 2,
					this.colors[this.a6M][1] = a6R(256 * jl / this.a6O), bT.dK = !0) : !(jm >= 3 * this.gap + this.a5s + 2 * this.a6P) || (this.a6L = 3, this.colors[this.a6M][2] = a6R(256 * jl / this.a6O), bT.dK = !0))))
	}, this.a6S = function() {
		for (var i4 = 2; 0 <= i4; i4--) this.colors[0][i4] = a6R(this.colors[0][i4])
	}, this.a6U = function() {
		for (var dr, oD = "", a0 = 0; a0 < 3; a0++)(dr = bB.el(this.colors[0][a0], 4)) < 10 && (oD += "0"), oD += dr.toString();
		return oD
	}, this.w9 = function(jl) {
		0 !== this.a6L && (jl -= 2 * this.gap + this.a6N + (an.u - this.u) / 2, this.colors[this.a6M][this.a6L - 1] = a6R(256 * jl / this.a6O), bT.dK = !0)
	}, this.wX = function() {
		0 < this.a6L && (this.a6L = 0, this.a6S(), bX.p4.p5(103, this.a6U()), bT.dK = !0)
	}, this.kk = function() {
		var kp = (an.u - this.u) / 2,
			kq = (an.iE - this.iE) / 2;
		ku.setTransform(1, 0, 0, 1, kp, kq), ku.fillStyle = p.lr, ku.fillRect(0, this.a5s, this.u, this.iE - this.a5s), ku.fillStyle = p.m3, ku.fillRect(0, 0, this.u, this.a5s), ku.fillStyle = p.lu, ku.lineWidth = bQ.ta, ku.strokeStyle = p.lu, ku
			.strokeRect(-1, -1, this.u + 2, this.iE + 2), ku.fillRect(0, this.a5s, this.u, bQ.ta), ku.font = b2.kt.ky(1, .31 * this.a5s), b2.kt.textBaseline(ku, 1), b2.kt.textAlign(ku, 1), ku.fillText("Choose Your Nation's Color!", Math.floor((
				this.u - this.gap - .4 * this.a5s) / 2), Math.floor(.55 * this.a5s)), this.a6V(0), ku.lineWidth = bQ.ta, this.a6W(0), this.a6W(1), this.a6W(2), aB.zz(Math.floor(kp + this.u - .4 * this.a5s - this.gap), Math.floor(kq + .3 * this
				.a5s), Math.floor(.4 * this.a5s)), ku.setTransform(1, 0, 0, 1, 0, 0)
	}, this.a6V = function(a0) {
		var gO = this.colors[a0][0],
			po = this.colors[a0][1],
			a0 = this.colors[a0][2];
		ku.fillStyle = "rgb(" + gO + "," + po + "," + a0 + ")", ku.fillRect(this.gap, this.a5s + this.gap, this.a6N, 2 * this.a6N + this.gap), ku.lineWidth = bQ.ta, ku.strokeStyle = p.lu, ku.strokeRect(this.gap, this.a5s + this.gap, this.a6N, 2 *
			this.a6N + this.gap), ku.fillStyle = gO + po + a0 < 306 && po < 150 ? p.lu : p.kz, ku.font = b2.kt.ky(1, .32 * this.a6P), b2.kt.textAlign(ku, 1), b2.kt.textBaseline(ku, 1), ku.rotate(-Math.PI / 2), ku.fillText("National Color",
			Math.floor(-1.5 * this.gap - this.a5s - this.a6N), Math.floor(this.gap + .5 * this.a6N)), ku.rotate(Math.PI / 2)
	}, this.a6W = function(a0) {
		ku.fillStyle = "rgb(" + (0 === a0 ? 150 : 2 === a0 ? 30 : 0) + "," + (1 === a0 ? 130 : 2 === a0 ? 30 : 0) + "," + (2 === a0 ? 220 : 0) + ")", ku.fillRect(2 * this.gap + this.a6N, this.a5s + this.gap + a0 * (this.gap + this.a6P), Math
				.floor(this.colors[this.a6M][a0] * this.a6O / 255), this.a6P), ku.strokeStyle = p.lu, ku.strokeRect(2 * this.gap + this.a6N, this.a5s + this.gap + a0 * (this.gap + this.a6P), this.a6O, this.a6P), ku.fillStyle = p.lu, ku.font = b2
			.kt.ky(1, .32 * this.a6P), b2.kt.textBaseline(ku, 1), b2.kt.textAlign(ku, 0), ku.fillText((0 === a0 ? "Red: " : 1 === a0 ? "Green: " : "Blue: ") + this.colors[0][a0].toString(), 3 * this.gap + this.a6N, Math.floor(this.a5s + this
				.gap + a0 * (this.gap + this.a6P) + .53 * this.a6P))
	}
}

function c6() {
	var a6X, a6Y, a1F, a1P, a2E, a6Z, a6a, a6b, a6c, zn, fontSize, lF, a6d, a6f, a6e = 0;

	function a6i() {
		return aq.k8.a6j[(a6d + a6e) % aq.k8.a6k]
	}

	function a6g() {
		a6d++, lF = bT.dn, aq.k8.a6l(a6i(), 4) && (a6f = !0, aq.a6m.a6n(a6i()))
	}

	function a6o() {
		0 === a6d ? g.vv(3249) : (a6d === aq.k8.a6k - 1 && (a6d = -1), a6g())
	}

	function a6v(fg, a36, a6u) {
		var kp = Math.floor((an.u - a1P) / 2) + a6a,
			kr = kp + Math.floor(a6u * (a1P - 2 * a6a));
		ku.lineWidth = a36, ku.beginPath(), ku.moveTo(kp, fg), ku.lineTo(kr, fg), ku.lineTo(Math.floor(kp - a6a + a6u * a1P), fg + a1F), ku.lineTo(kp - a6a, fg + a1F), ku.closePath()
	}
	this.dD = function() {
		aP.setState(6), a6X = 0, a6Y = 1, a6b = "rgba(0,220,120,0.4)", a6c = "rgba(0,0,0,0.8)", this.resize(), bT.dK = !0, a6d = 0, a6f = !1, a6g()
	}, this.resize = function() {
		a1P = Math.floor((m.n.tX() ? .5 : .25) * an.oU), a2E = a1P + 12, a1F = Math.floor(.125 * a1P), a6a = 3 * a1F, a6Z = Math.floor(.225 * a1P), fontSize = Math.floor(.3 * a1F), zn = b2.kt.ky(0, fontSize)
	}, this.a6h = function(hy) {
		a6e = hy
	}, this.vo = function(vl) {
		vl === a6i() && (a6f = !1, a6o())
	}, this.a6p = function(vl) {
		6 !== aP.vn() || a6f || (lF = bT.dn, a6f = !0)
	}, this.fn = function(ff, fg) {
		var kp = Math.floor((an.u - a2E) / 2),
			kq = Math.floor(.5 * (an.iE - bQ.gap - a1F - a6Z)) + a1F + bQ.gap;
		return kp < ff && ff < kp + a2E && kq < fg && fg < kq + a6Z && (this.wt(), aN.w9(ff, fg, !1), !0)
	}, this.wt = function() {
		aq.k8.vy(3260), i.k8.vx()
	}, this.ha = function() {
		6 === aP.vn() && (a6f ? bT.dn > lF + 12e3 && g.vv(3250) : bT.dn > lF + 12e3 && a6o(), 100 < (a6X += .07 * a6Y * (a6X < 16 ? 5 + a6X : 84 < a6X ? 105 - a6X : 17)) ? (a6X = 100, a6Y = -1) : a6X < 0 && (a6X = 0, a6Y = 1), a6b = "rgba(0," +
			Math.floor(190 - 1.9 * a6X) + "," + Math.floor(120 - 1.2 * a6X) + "," + (.4 + .004 * a6X) + ")", a6c = "rgba(0," + Math.floor(1.9 * a6X) + "," + Math.floor(1.2 * a6X) + "," + (.8 - .004 * a6X) + ")", bT.dK = !0)
	}, this.kk = function() {
		var ff = Math.floor((an.u - a2E) / 2),
			fg = Math.floor(.5 * (an.iE - bQ.gap - a1F - a6Z));
		! function(title, fg, a36, a6u) {
			ku.fillStyle = a6c, a6v(fg, a36, 1), ku.fill(), ku.fillStyle = a6b, a6v(fg, a36, a6u), ku.fill(), ku.strokeStyle = p.lu, a6v(fg, a36, 1), ku.stroke(),
				function(a6x, fg) {
					b2.kt.textAlign(ku, 1), b2.kt.textBaseline(ku, 1), ku.font = zn, ku.fillStyle = p.lu, ku.fillText(a6x, Math.floor(.5 * an.u), Math.floor(fg + .58 * a1F))
				}(title, fg)
		}(L(93), fg, 3, a6X / 100),
		function(ff, fg, u, iE, a15) {
			ku.fillStyle = p.lp, ku.fillRect(ff, fg, u, iE), ku.lineWidth = 3, ku.strokeStyle = p.lu, ku.strokeRect(ff, fg, u, iE);
			var ex = Math.floor(.3 * iE);
			b2.kt.textAlign(ku, 1), b2.kt.textBaseline(ku, 1), ku.font = b2.kt.ky(0, ex), ku.fillStyle = p.lu, ku.fillText(a15, Math.floor(ff + u / 2), Math.floor(fg + iE / 2 + .1 * ex))
		}(ff, fg + a1F + bQ.gap, a2E, a6Z, L(94))
	}
}

function c7() {
	var dm = 0;
	this.dD = function() {
		aN.dD(), dm = 0
	}, this.setState = function(a6y) {
		dm = a6y
	}, this.vn = function() {
		return dm
	}, this.a6z = function() {
		this.setState(8), aj.vz(), i.qr()
	}, this.wj = function(d) {
		if (!bI.rf) return !1;
		if (!(bT.dn < 400)) {
			if ("Enter" === d.key || "Escape" === d.key) {
				if (this.a70()) return !0;
				if ("Enter" === d.key) {
					if (0 === dm) return !0;
					if (7 === dm) return !0
				}
			}
			return !1
		}
	}, this.a71 = function() {
		bN.resize()
	}, this.a70 = function() {
		return !!bN.pn()
	}, this.fn = function(ff, fg) {
		!bI.rf || bN.fn(ff, fg) || 6 === dm && aO.fn(ff, fg) || 2 === dm && aQ.fn(ff, fg) || (aI.fn(ff, fg), 0 !== dm && 7 === dm && aj.fn(ff, fg))
	}, this.w9 = function(ff, fg) {
		if (!aI.a3I) {
			if (2 === dm && aQ.w9(ff, fg)) return void aI.wY();
			if (aN.w9(ff, fg, !0)) return
		}
		aI.w9(ff, fg)
	}, this.click = function(ff, fg) {
		aI.wZ(), bM.fn(ff, fg, !1)
	}, this.wC = function(ff, fg, deltaY) {}, this.a72 = function() {
		aN.a3P(), 0 !== dm && 7 === dm && aj.resize(), bT.dK = !0
	}, this.kk = function() {
		8 !== dm && 10 !== dm && (ku.imageSmoothingEnabled = !0, this.sj(), 0 !== dm && (aI.kk(), aD.kk(), this.a73(), bM.kk()), 0 !== dm && (2 === dm ? aQ.kk() : 6 === dm ? aO.kk() : 7 === dm && aj.kk()), bN.kk(), i.kk())
	}, this.sj = function() {
		var a75, a74;
		if (makeMainMenuTransparent) ku.clearRect(0, 0, an.u, an.iE);
		else bI.rf ? (a74 = an.u / bI.eS, a75 = an.iE / bI.eT, ku.setTransform(a74 = a75 < a74 ? a74 : a75, 0, 0, a74, Math.floor((an.u - a74 * bI.eS) / 2), Math.floor((an.iE - a74 * bI.eT) / 2)), ku.drawImage(bI.rh, 0, 0), ku.setTransform(1, 0,
			0, 1, 0, 0), ku.fillStyle = p.lp) : ku.fillStyle = p.kz, ku.fillRect(0, 0, an.u, an.iE)
	}, this.a73 = function() {
		var fg = Math.floor(.3 * an.iE),
			gL = aR.a76("territorial.io"),
			gK = (gK = 1.75 * an.iE / gL.width) * gL.width < .98 * an.u ? .98 * an.u / gL.width : gK,
			ff = (ku.globalAlpha = .15, ku.imageSmoothingEnabled = !1, Math.floor(.5 * (an.u - gK * gL.width))),
			ff = Math.floor(ff / gK),
			fg = Math.floor(fg - .5 * gL.height * gK),
			fg = Math.floor(fg / gK);
		ku.setTransform(gK, 0, 0, gK, ff, fg), ku.drawImage(gL, ff, fg), ku.setTransform(1, 0, 0, 1, 0, 0), ku.globalAlpha = 1, ku.imageSmoothingEnabled = !0
	}
}

function cY() {
	var a1, a79, a7A, a7B;
	this.a77 = 0, this.a78 = 0, this.dD = function() {
		var gL, lY;
		7 === aP.vn() && (a1 = b7.a1, a79 = 0, a7A = bT.dn + 4500, a7B = aq.a0i.a7C() ? 2 : 0, aP.setState(10), ku.imageSmoothingEnabled = !0, aP.sj(), gL = aR.a76("loading"), lY = (m.n.tX() ? .396 : .25) * an.oU / gL.width, ku.setTransform(lY,
			0, 0, lY, Math.floor((an.u - lY * gL.width) / 2), Math.floor((an.iE - lY * gL.height) / 2)), ku.imageSmoothingEnabled = !1, ku.drawImage(gL, 0, 0), ku.setTransform(1, 0, 0, 1, 0, 0))
	}, this.kE = function() {
		0 < a7B && bT.dn > a7A && (a7B--, a7A += 4500, 0 === bT.a7D) && 0 === bT.eq() && (0 === a7B && aq.k8.vq < aq.k8.a7E && (aq.k8.vq += aq.k8.a7F), aq.k8.a6l(aq.k8.vq, 5))
	}, this.a7G = function() {
		var f4, a0;
		return 10 === aP.vn() && (f4 = b7.a1, a0 = b7.ke, aq.a0i.a7H(a1), a1 = null, b7.dD(f4), b7.ke = a0, !0)
	}, this.a7I = function() {
		10 === aP.vn() && 2 <= ++a79 && (aq.a0i.a7H(a1), a1 = null)
	}
}

function cV() {
	var a7K, a7L, a7M, a7N, a7O, a7P, a7Q, oP, a7S, a7U, a7V, a7W, a7Z, a7a, a7b, a7c, a7d, a7R = 48,
		a7T = 128,
		a7X = [L(95), L(96), L(97), L(98)],
		a7Y = [0, 0, 0, 0];

	function a7h(a0, nA) {
		a0 = a7Q[a0].getContext("2d", {
			alpha: !0
		});
		a0.clearRect(0, 0, a7R, a7R), aa.rk.tb(nA, a0, 0, 0, a7R)
	}

	function a7g(a0, xP) {
		var a0 = a7Q[a0].getContext("2d", {
				alpha: !0
			}),
			zoom = (a0.clearRect(0, 0, a7R, a7R), a7R / xP.width),
			dp = a7R / xP.height,
			zoom = dp < zoom ? dp : zoom;
		a0.imageSmoothingEnabled = !0, a0.setTransform(zoom, 0, 0, zoom, Math.floor((a7R - zoom * xP.width) / 2), Math.floor((a7R - zoom * xP.height) / 2)), a0.drawImage(xP, 0, 0), a0.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a7l(ik, gO, a7o, gM) {
		gM.beginPath(), gM.moveTo(ik, ik), gM.lineTo(ik + Math.cos(a7o) * gO, ik + Math.cos(a7o + 1.5 * Math.PI) * gO), gM.stroke()
	}

	function a84() {
		if (7 === aP.vn()) {
			for (var gY, xP, gM, zoom, dp, hy = -1, a0 = oP.length - 1; 0 <= a0; a0--)
				if (null === oP[a0].gL) {
					hy = a0;
					break
				} - 1 !== hy && (null !== (gY = a7s(oP[hy].a7w, oP[hy].a7x)) ? oP[hy].gL = gY : (gY = {
					eS: bI.eS,
					eT: bI.eT,
					rh: bI.rh,
					rd: bI.rd,
					re: bI.re,
					ri: bI.ri,
					s2: bI.s2,
					a7t: bI.a7t
				}, bI.w(oP[hy].a7w, oP[hy].a7x), bI.rg.a85(), (xP = document.createElement("canvas")).width = a7T, xP.height = a7T, gM = xP.getContext("2d", {
					alpha: !1
				}), (zoom = a7T / bI.eS) < (dp = a7T / bI.eT) && (zoom = dp), gM.imageSmoothingEnabled = !0, gM.setTransform(zoom, 0, 0, zoom, (a7T - zoom * bI.eS) / 2, (a7T - zoom * bI.eT) / 2), gM.drawImage(bI.rh, 0, 0), bI.eS = gY.eS, bI
				.eT = gY.eT, bI.rh = gY.rh, bI.rd = gY.rd, bI.re = gY.re, bI.ri = gY.ri, bI.s2 = gY.s2, bI.a7t = gY.a7t, oP[hy].gL = xP), bT.dK = !0)
		}
	}

	function a7s(a7w, a7x) {
		for (var a0 = oP.length - 1; 0 <= a0; a0--)
			if (null !== oP[a0].gL && oP[a0].a7w === a7w && oP[a0].a7x === a7x) return oP[a0].gL;
		return null
	}
	this.dD = function() {
		var a0;
		for (a7d = 0, a7U = -1, aP.setState(7), oP = [], this.resize(), a7Q = new Array(13), a0 = a7Q.length; 0 <= a0; a0--) a7Q[a0] = document.createElement("canvas"), a7Q[a0].width = a7R, a7Q[a0].height = a7R;
		for (a0 = 0; a0 < 7; a0++) ! function(jL) {
			var a7j, gM = a7Q[jL - 2].getContext("2d", {
					alpha: !0
				}),
				a7i = 1.5 * Math.PI,
				ik = Math.floor(.5 * a7R),
				gO = Math.floor(.48 * a7R);
			gM.lineWidth = 2, gM.strokeStyle = p.lu, gM.clearRect(0, 0, a7R, a7R);
			for (var a0 = 0; a0 < jL; a0++) a7j = a7i + 2 * Math.PI / jL,
				function(a0, ik, gO, a7i, a7j, gM) {
					gM.fillStyle = bU.a7n[a0], gM.beginPath(), gM.arc(ik, ik, gO, a7i, a7j), gM.lineTo(ik, ik), gM.fill()
				}(a0 + 1, ik, gO, a7i, a7j, gM), 0 !== a0 && a7l(ik, gO, a7i, gM), a7i = a7j;
			a7l(ik, gO, 1.5 * Math.PI, gM),
				function(ik, gO, gM) {
					gM.beginPath(), gM.arc(ik, ik, gO, 0, 2 * Math.PI), gM.stroke()
				}(ik, gO, gM)
		}(a0 + 2);
		a7g(7, aR.get(4)), a7h(8, aa.t4.tP + aa.t4.tg), a7h(9, aa.t4.tP + aa.t4.te), a7h(10, 1024 - aa.t4.tM), a7g(11, aR.get(19)), a7g(12, aR.get(20)), bT.dK = !0
	}, this.ws = function() {
		this.vz(), aq.k8.vy(3240), aP.setState(0), i.j(5, 5)
	}, this.vz = function() {
		oP = [], a7Q = []
	}, this.a1D = function() {
		return a7W
	}, this.resize = function() {
		var a7p, rV, a2U, a7q;
		for (a7M = [0, 0], a7S = [0, 0, 0, 0], a7c = m.n.tX() ? (a7V = Math.floor(.8 * .4 * an.oU), a7W = Math.floor(.56 * a7V), a7S[0] = bQ.gap, an.u < an.iE ? (a7S[1] = a7W + 2 * bQ.gap, a7S[2] = an.u - 3 * a7S[0], a7S[3] = an.iE - 3 * bQ.gap -
				a7W, a7a = Math.floor(.95 * a7W), a7b = Math.floor((an.u - a7V - bQ.gap) / 2), Math.floor(bQ.gap + a7W / 2)) : (a7S[1] = bQ.gap, a7S[2] = an.u - 3 * bQ.gap - a7V, a7S[3] = an.iE - 2 * bQ.gap, a7a = Math.floor(.8 * a7V), a7S[
				3] - a7W < a7V && (a7a = Math.floor(.8 * (a7S[3] - a7W)), a7a = a0Q(a7W, a7a)), a7b = Math.floor(an.u - a7V / 2 - bQ.gap), a0Q(a7c = Math.floor(bQ.gap + a7W + (a7S[3] - a7W) / 2), Math.floor(a7W + 2 * bQ.gap + a7a / 2)))) : (a7V =
				Math.floor(.2016 * an.oU), a7W = Math.floor(.56 * a7V), a7S[2] = Math.floor(.5 * an.u), a7S[3] = Math.floor(.5 * an.iE), a7S[1] = Math.floor(.45 * (an.iE - a7S[3])), a7S[0] = Math.floor((an.u - a7S[2]) / 2), a7a = Math.floor(.75 *
					a7W), a7b = Math.floor(an.u / 2), Math.floor(a7S[1] + a7S[3] + (an.iE - a7S[3] - a7S[1]) / 2)), a7Z = b2.kt.ky(1, .65 * a7W / 4), a7p = rV = 1; a7p * rV < oP.length;) a7S[3] / (rV + 1) < a7S[2] / (a7p + 1) ? a7p++ : rV++;
		a2U = (a7S[2] - (a7p - 1) * bQ.gap) / a7p, a7q = (a7S[3] - (rV - 1) * bQ.gap) / rV, a7K = a2U < a7q ? a2U : a7q, a7L = Math.floor(a7K), a7P = b2.kt.ky(1, .5 * a7K / 5), a7M[0] = a7p, a7M[1] = rV, a7N = a7S[0] + Math.floor((a7S[2] - a7M[
			0] * a7K - (a7M[0] - 1) * bQ.gap) / 2), a7O = a7S[1] + Math.floor((a7S[3] - a7M[1] * a7K - (a7M[1] - 1) * bQ.gap) / 2)
	}, this.p5 = function(a7r, f4) {
		var a0, dp, gL, ex = oP.length;
		for (a7Y = a7r, a0 = 0; a0 < f4.length; a0++) gL = a7s(f4[a0].s2, f4[a0].a7t), oP.push({
			a7u: f4[a0].id,
			ys: f4[a0].ys,
			yt: f4[a0].a7v,
			a7w: f4[a0].s2,
			a7x: f4[a0].a7t,
			joined: f4[a0].a7y,
			a1A: f4[a0].a6u,
			a7z: f4[a0].a7z,
			gL: gL,
			a80: f4[a0].a80,
			a81: f4[a0].a81,
			a82: f4[a0].a82
		});
		for (a0 = ex - 1; 0 <= a0; a0--) oP.shift();
		if (-1 !== a7U)
			for (dp = a7U, a7U = -1, a0 = oP.length - 1; 0 <= a0; a0--)
				if (oP[a0].a7u === dp) {
					a7U = dp;
					break
				}(oP.length > a7d || oP.length < a7d) && (a7d = oP.length, this.resize()), this.a83(), bT.dK = !0
	}, this.a83 = function() {
		for (var a0 = oP.length - 1; 0 <= a0; a0--) null === oP[a0].gL && setTimeout(a84, 0)
	}, this.fn = function(ff, fg) {
		return 4 * ((ff - a7b) * (ff - a7b) + (fg - a7c) * (fg - a7c)) <= a7a * a7a ? (this.ws(), aN.w9(ff, fg, !1), !0) : function(ff, fg) {
			var hy, i4, kp, kq;
			if (0 !== oP.length) {
				var a0 = 0;
				for (kq = a7O, i4 = 0; i4 < a7M[1]; i4++) {
					for (kp = a7N, hy = 0; hy < a7M[0]; hy++) {
						if (kp < ff && ff < kp + a7K && kq < fg && fg < kq + a7K) return aq.a6m.a87(oP[a0].a7u), a7U = oP[a0].a7u !== a7U ? oP[a0].a7u : -1, bT.dK = !0;
						if (++a0 >= oP.length) return !1;
						kp += a7K + bQ.gap
					}
					kq += a7K + bQ.gap
				}
			}
			return !1
		}(ff, fg)
	}, this.kk = function() {
		var hy, i4, ff, gO, zoom, a0 = 0,
			fg = a7O;
		if (ku.imageSmoothingEnabled = !0, ku.lineWidth = 3, gO = Math.floor(.5 * a7a), ku.fillStyle = p.lp, ku.beginPath(), ku.arc(a7b, a7c, gO, 0, 2 * Math.PI), ku.fill(), ku.strokeStyle = p.lu, ku.beginPath(), ku.arc(a7b, a7c, gO, 0, 2 * Math
				.PI), ku.stroke(), gO = aR.get(0).height, zoom = .6 * a7a / gO, ku.setTransform(zoom, 0, 0, zoom, Math.floor(a7b - .56 * zoom * aR.get(0).width), Math.floor(a7c - .5 * zoom * gO)), ku.drawImage(aR.get(0), 0, 0), ku.setTransform(1,
				0, 0, 1, 0, 0), function() {
				ku.fillStyle = p.lp, ku.fillRect(an.u - a7V - bQ.gap, bQ.gap, a7V, a7W), 0 <= a7U ? (ku.fillStyle = p.mC, ku.fillRect(an.u - a7V - bQ.gap, bQ.gap, a7V, Math.floor(.25 * a7W))) : (ku.fillStyle = p.md, ku.fillRect(an.u - a7V - bQ
					.gap, bQ.gap + Math.floor(.25 * a7W), a7V, Math.floor(.25 * a7W)));
				ku.strokeStyle = p.lu, ku.strokeRect(an.u - a7V - bQ.gap, bQ.gap, a7V, a7W), ku.fillStyle = p.lu, ku.font = a7Z, b2.kt.textBaseline(ku, 1);
				for (var fg, a8B = Math.floor(.04 * a7V), a02 = Math.floor(.08 * a7W), a0 = 3; 0 <= a0; a0--) fg = Math.floor(bQ.gap + (a0 + 1) * (a7W + 2 * a02) / 5 - a02), b2.kt.textAlign(ku, 0), ku.fillText(a7X[a0], an.u - a7V - bQ.gap + a8B,
					fg), b2.kt.textAlign(ku, 2), ku.fillText(b2.l1.l2(a7Y[a0]), an.u - bQ.gap - a8B, fg)
			}(), 0 !== oP.length)
			for (i4 = 0; i4 < a7M[1]; i4++) {
				for (ff = a7N, hy = 0; hy < a7M[0]; hy++) {
					if (! function(a0, ff, fg) {
							var zoom, i4, a8C, a8E, a8F;
							null === oP[a0].gL ? (ku.fillStyle = p.lp, ku.fillRect(ff, fg, a7L, a7L)) : (zoom = a7L / a7T, ku.setTransform(zoom, 0, 0, zoom, ff, fg), ku.drawImage(oP[a0].gL, 0, 0), ku.setTransform(1, 0, 0, 1, 0, 0));
							a7U === oP[a0].a7u ? (function(ff, fg) {
								var pZ = Math.floor(.2 * a7L),
									pa = Math.floor(.3 * pZ);
								ku.fillStyle = p.mE, ku.fillRect(ff + a7L - pZ, fg, pZ, pZ), ku.fillStyle = p.kz, ku.fillRect(ff + a7L - pZ, fg, 2, pZ), ku.fillRect(ff + a7L - pZ, fg + pZ - 2, pZ, 2), aB.zz(ff + a7L - pZ + pa, fg + pa,
									pZ - 2 * pa), ku.setTransform(1, 0, 0, 1, 0, 0)
							}(ff, fg), ku.lineWidth = 3, ku.fillStyle = p.mE) : ku.fillStyle = p.ln;
							a8E = Math.floor(a7K / 4), ku.fillRect(ff, fg, a8E, a8E), a8F = Math.floor(fg + .8 * a7K), ku.fillRect(ff, a8F, a7L, Math.floor(a7K / 5)),
								function(a0, ff, fg) {
									var zoom;
									oP[a0].yt && (a0 = aR.get(4), zoom = .5 * a7K / a0.width, ku.setTransform(zoom, 0, 0, zoom, Math.floor(ff + (a7K - zoom * a0.width) / 2), Math.floor(fg + (a7K - zoom * a0.height) / 2)), ku.globalAlpha = .6, ku
										.drawImage(a0, 0, 0), ku.globalAlpha = 1, ku.setTransform(1, 0, 0, 1, 0, 0))
								}(a0, ff, fg);
							var a8H = new Array(oP[a0].a80);
							if (oP[a0].a80) {
								for (i4 = a8C = 0; i4 < oP[a0].a80; i4++) oP[a0].a81[i4] = b2.sn.xb(oP[a0].a81[i4], a7P, .4 * a7K), a8H[i4] = ("" === oP[a0].a81[i4] ? L(99) : "[" + oP[a0].a81[i4] + "]: ") + oP[a0].a82[i4];
								for (i4 = 0; i4 < oP[a0].a80; i4++) a8C = Math.max(a8C, aF.measureText(a8H[i4], a7P));
								a8C += .05 * a7K, i4 = 5 === oP[a0].a80, a8E = i4 ? fg + a8E : Math.max(fg + .8 * a7K - .11 * oP[a0].a80 * a7K, fg + a8E), a8F = i4 ? a8F : Math.min(a8E + .11 * oP[a0].a80 * a7K + .05 * a7K, a8F), ku.fillRect(ff,
									a8E, a8C, a8F - a8E)
							}
							for (ku.font = a7P, b2.kt.textBaseline(ku, 1), b2.kt.textAlign(ku, 0), ku.fillStyle = p.mY, ku.fillText(oP[a0].joined.toString(), Math.floor(ff + .22 * a7K), Math.floor(fg + .9 * a7K)), ku.fillStyle = p.lu, i4 =
								0; i4 < oP[a0].a80; i4++) ku.fillText(a8H[oP[a0].a80 - i4 - 1], Math.floor(ff + .03 * a7K), Math.floor(fg + .77 * a7K - .11 * i4 * a7K));
							b2.kt.textAlign(ku, 2), ku.fillStyle = p.mK, ku.fillText(oP[a0].a1A.toString(), Math.floor(ff + .81 * a7K), Math.floor(fg + .9 * a7K)), ku.strokeStyle = a7U === oP[a0].a7u ? p.mD : p.lw, ku.strokeRect(ff, fg, a7L,
								a7L), a8F = Math.floor(.16 * a7K), zoom = a8F / a7R, ku.setTransform(zoom, 0, 0, zoom, Math.floor(ff + .33 * a8F), Math.floor(fg + .33 * a8F)), a7Q.length > oP[a0].ys && ku.drawImage(a7Q[oP[a0].ys], 0, 0);
							ku.setTransform(zoom, 0, 0, zoom, Math.floor(ff + .15 * a8F), Math.floor(fg + a7K - 1.08 * a8F)), ku.drawImage(a7Q[11], 0, 0), ku.setTransform(zoom, 0, 0, zoom, Math.floor(ff + a7K - 1.05 * a8F), Math.floor(fg + a7K -
								1.15 * a8F)), ku.drawImage(a7Q[12], 0, 0), ku.setTransform(1, 0, 0, 1, 0, 0)
						}(a0, Math.floor(ff), Math.floor(fg)), ++a0 >= oP.length) return;
					ff += a7K + bQ.gap
				}
				fg += a7K + bQ.gap
			}
	}
}

function c8() {
	var a8J = [0, 0, 0, 0];

	function a8Y(ff, fg, gF, a8b) {
		ku.fillStyle = p.lu;
		var pZ = a0Q(2, Math.floor((a8b ? .5 : .35) * gF)),
			a2M = (pZ -= pZ % 2, a0Q(2, Math.floor(.1 * gF))),
			gF = (a2M -= a2M % 2, Math.floor((gF - pZ) / 2)),
			kr = Math.floor(gF + (pZ - a2M) / 2);
		ku.fillRect(ff + gF, fg + kr, pZ, a2M), a8b && ku.fillRect(ff + kr, fg + gF, a2M, pZ)
	}

	function a6t(ff, fg, u, iE, a4Q, x8, a15, hs, jL) {
		ku.fillStyle = a4Q, ku.fillRect(ff, fg, u, iE), 0 <= hs && function(ff, fg, u, iE, hs) {
			ku.fillStyle = "rgba(" + 22 * hs + "," + (110 - 22 * hs) + ",0,0.75)", ku.fillRect(ff, fg, (1 + hs) * u / 6, iE)
		}(ff, fg, u, iE, hs), 0 < jL && function(ff, fg, u, iE, jL) {
			ku.fillStyle = "rgba(255,255,255,0.3)", ku.fillRect(ff, fg, jL * u / a2.f1, iE)
		}(ff, fg, u, iE, jL), ku.strokeStyle = p.lu, ku.strokeRect(ff, fg, u, iE), 0 !== x8 && (ku.fillStyle = p.lu, ku.font = b2.kt.ky(1, x8 * iE), ku.fillText(a15, Math.floor(ff + u / 2), Math.floor(fg + .52 * iE)))
	}
	this.jF = [{
		f6: 0,
		jL: 512
	}], this.dD = function() {
		ak.t7 = !1, aP.setState(2), this.resize(), bT.dK = !0
	}, this.vz = function() {}, this.resize = function() {
		a8J[2] = Math.floor((m.n.tX() ? .49 : .4) * an.oU), a8J[1] = Math.floor((an.iE - a8J[2] / 6 - this.jF.length * (bQ.gap + a8J[2] / 10)) / 2), a8J[0] = Math.floor((an.u - a8J[2]) / 2), ak.t7 && ak.resize()
	}, this.a8K = function(ys) {
		var a0;
		if (6 < ys) this.jF = [{
			f6: 0,
			jL: 512
		}];
		else {
			for (this.jF = [], a0 = 0; a0 < ys + 2; a0++) this.jF.push({
				f6: 0,
				jL: 0
			});
			this.a8L()
		}
		aq.k8.vq = 0
	}, this.a8M = function(a8N, a8O) {
		for (var ex = a8N.length, a0 = 0; a0 < ex; a0++) this.jF[a0].f6 = a8N[a0], this.jF[a0].jL = a8O[a0]
	}, this.a8P = function(po) {
		var a0, ex;
		if (1 === po.su.length)
			for (ex = this.jF.length, po.a8N = new Array(ex), po.a8O = new Array(ex), a0 = 0; a0 < ex; a0++) po.a8N[a0] = this.jF[a0].f6, po.a8O[a0] = this.jF[a0].jL
	}, this.wu = function() {
		bT.dK = !0, ak.t7 ? ak.t7 = !1 : (this.vz(), aP.setState(0), i.j(5, 5))
	}, this.yw = function() {
		var a0, jL;
		if (ay.j7) return ay.j8.a8Q;
		for (jL = 0, a0 = this.jF.length - 1; 0 <= a0; a0--) jL += this.jF[a0].jL;
		return jL
	}, this.w9 = function(ff, fg) {
		return !(!ak.t7 || !ak.w9(ff, fg)) || -1 !== this.we(ff, fg)
	}, this.a8R = function() {
		var hy;
		aq.k8.vq = 0, aP.a6z(), ay.j7 ? ay.a8S() : (hy = (hy = this.jF.length - 2) < 0 ? 7 : hy, a2.yp(Math.floor(16384 * Math.random()), 0, [{
			name: bX.dV.data[122].value,
			a8T: b2.color.xU(bX.k8.qq()),
			a8U: 0
		}], hy, !1, !1))
	}, this.fn = function(ff, fg) {
		if (ak.t7 && !ay.j7) return ak.fn(ff, fg);
		var a0, hy, max, pZ, fg = this.we(ff, fg);
		if (-1 === fg) return !1;
		if (0 === fg) this.wu();
		else if (1 === fg) ay.j7 ? (ay.wY(), bT.dK = !0) : ak.show();
		else if (100 === fg) ax.a8V();
		else if (2 === fg) this.vz(), this.a8R();
		else {
			if (ay.j7) return !1;
			if (27 === fg) this.jF.length < 8 && (this.jF.push({
				f6: 0,
				jL: a2.f1
			}), this.a8L(), this.resize(), bT.dK = !0);
			else if (a0 = Math.floor((fg - 3) / 3), fg % 3 == 0) 1 < this.jF.length && (this.jF.splice(a0, 1), this.resize(), bT.dK = !0);
			else if (pZ = (a8J[2] - a8J[2] / 10 - 2 * bQ.gap) / 2, fg % 3 == 1) 0 === a0 && 1 === this.jF[a0].jL || (ff < a8J[0] + a8J[2] - 1.5 * pZ - bQ.gap ? this.jF[a0].f6-- : this.jF[a0].f6++, this.jF[a0].f6 < 0 ? this.jF[a0].f6 = 5 : 5 <
				this.jF[a0].f6 && (this.jF[a0].f6 = 0), bT.dK = !0);
			else {
				for (bT.dK = !0, fg = (ff - (a8J[0] + a8J[2] - pZ)) / pZ - .5, fg *= fg < 0 ? -fg : fg, fg = 0 === (fg = Math.floor(fg * a2.f1)) ? 1 : fg, max = a2.f1, hy = this.jF.length - 1; 0 <= hy; hy--) a0 !== hy && (max -= this.jF[hy].jL);
				if (fg < 0) {
					if (1 === this.jF[a0].jL) return this.jF[a0].jL = max, !0
				} else if (this.jF[a0].jL === max) return this.jF[a0].jL = 1, !0;
				this.jF[a0].jL += fg, this.jF[a0].jL < 1 ? this.jF[a0].jL = 1 : this.jF[a0].jL > max && (this.jF[a0].jL = max)
			}
		}
		return !0
	}, this.a8L = function() {
		for (var jL = Math.floor(a2.f1 / this.jF.length), a8W = a2.f1 % this.jF.length, a0 = this.jF.length - 1; 0 <= a0; a0--) this.jF[a0].jL = jL;
		this.jF[0].jL += a8W
	}, this.we = function(ff, fg) {
		var pZ = (a8J[2] - 3 * bQ.gap) / 4,
			a2M = a8J[2] / 6;
		if (ff < a8J[0] || fg < a8J[1] || a8J[0] + a8J[2] <= ff) return -1;
		if (fg < a8J[1] + a2M) return ff < a8J[0] + pZ ? 0 : ff < a8J[0] + pZ + bQ.gap ? -1 : ff < a8J[0] + 2 * pZ + bQ.gap ? 100 : ff < a8J[0] + 2 * (pZ + bQ.gap) ? -1 : ff < a8J[0] + 3 * pZ + 2 * bQ.gap ? 1 : ff < a8J[0] + 3 * (pZ + bQ.gap) ? -
			1 : 2;
		for (var kq, a8X = a8J[2] / 10, pZ = (a8J[2] - a8X - 2 * bQ.gap) / 2, a0 = 0; a0 < this.jF.length; a0++) {
			if (fg < (kq = a8J[1] + a2M + bQ.gap + a0 * (a8X + bQ.gap))) return -1;
			if (!(kq + a8X < fg)) return ff < a8J[0] + a8X ? 3 + 3 * a0 : ff < a8J[0] + a8X + bQ.gap ? -1 : ff < a8J[0] + a8J[2] - pZ - bQ.gap ? 4 + 3 * a0 : ff < a8J[0] + a8J[2] - pZ ? -1 : 5 + 3 * a0
		}
		return !(this.jF.length < 8) || fg < (kq = a8J[1] + a2M + bQ.gap + this.jF.length * (a8X + bQ.gap)) || kq + a8X < fg || a8J[0] + a8X < ff ? -1 : 27
	}, this.kk = function() {
		ku.lineWidth = bQ.ta, b2.kt.textAlign(ku, 1), b2.kt.textBaseline(ku, 1);
		var pZ = (a8J[2] - 3 * bQ.gap) / 4,
			a2M = a8J[2] / 6;
		if (a6t(a8J[0], a8J[1], pZ, a2M, "rgba(128,0,0,0.75)", .34, L(94), -1, -1), a6t(a8J[0] + pZ + bQ.gap, a8J[1], pZ, a2M, "rgba(128,0,128,0.75)", .31, L(100), -1, -1), a6t(a8J[0] + 2 * (pZ + bQ.gap), a8J[1], pZ, a2M, "rgba(" + (ay.j7 ? 128 :
				0) + ",128,128,0.75)", .34, ay.j7 ? L(101) : L(102), -1, -1), a6t(a8J[0] + a8J[2] - pZ, a8J[1], pZ, a2M, "rgba(0,128,0,0.75)", .34, L(103), -1, -1), !ay.j7) {
			for (var kq, a8X = a8J[2] / 10, pZ = (a8J[2] - a8X - 2 * bQ.gap) / 2, a0 = 0; a0 < this.jF.length; a0++) kq = a8J[1] + a2M + bQ.gap + a0 * (a8X + bQ.gap), a6t(a8J[0], kq, a8X, a8X, 1 < this.jF.length ? "rgba(128,0,0,0.75)" :
				"rgba(90,90,90,0.75)", 0, null, -1), 1 < this.jF.length && a8Y(a8J[0], kq, a8X, !1), a6t(a8J[0] + a8X + bQ.gap, kq, pZ, a8X, p.lr, .4, this.a8Z(a0), this.jF[a0].f6, -1), a6t(a8J[0] + a8J[2] - pZ, kq, pZ, a8X, p.lr, .4, this
				.a8a(a0), -1, this.jF[a0].jL);
			this.jF.length < 8 && (kq = a8J[1] + a2M + bQ.gap + this.jF.length * (a8X + bQ.gap), a6t(a8J[0], kq, a8X, a8X, "rgba(0,128,20,0.75)", 0, null, -1, -1), a8Y(a8J[0], kq, a8X, !0)), ak.t7 && ak.kk()
		}
	}, this.a8Z = function(a0) {
		return 0 === a0 && 1 === this.jF[a0].jL ? L(104) : a3.j3[this.jF[a0].f6]
	}, this.a8a = function(a0) {
		return 1 === this.jF[a0].jL ? L(105) : L(106, [this.jF[a0].jL])
	}
}

function c9() {
	var a8e, gL, ur, a8f;

	function a8l(ke, name, a8m, oD) {
		ur[ke] = name, gL[ke] = new Image, gL[ke].onload = function() {
			! function(ke, a8m) {
				var yF, yG = null;
				7 === a8m ? yF = b2.x0.yI : 8 === a8m ? (yF = b2.x0.yL, yG = .1) : 3 === a8m ? (yF = b2.x0.yJ, yG = .06) : 5 === a8m ? yF = b2.x0.yM : 6 === a8m ? yF = b2.x0.yH : 4 === a8m && (yF = b2.x0.yN);
				gL[ke] = b2.x0.yE(gL[ke], yF, yG)
			}(ke, a8m), a8o()
		}, gL[ke].onerror = function(d) {
			console.error("Error loading image at index", ke, "Error:", d), a8o()
		}, gL[ke].src = "data:image/png;base64," + oD
	}

	function a8o() {
		a8e--, a8i()
	}

	function a8i() {
		0 === a8e && (a8e = -1, a8k(), bT.dK = !0, gL[7] = a8f, gL[8] = a8f, gL[9] = a8f, gL[10] = a8f, 5 === i.pV) && i.a8q().a8r.resize()
	}

	function a8k() {
		aA.zH(), bM.a61([gL[8], gL[16], gL[7], gL[9], gL[10]], [2 !== m.id, 1 !== m.id, !0, !0, !0]), aa.rk = new t6, aa.rk.dD(), al.dE()
	}
	this.dD = function() {
		if (void 0 === gL) {
			a8e = 23, gL = new Array(a8e), ur = new Array(a8e), (a8f = document.createElement("canvas")).width = 1;
			for (var a0 = a8e - (a8f.height = 1); 0 <= a0; a0--) gL[a0] = a8f;
			a8k(), a8l(0, "exit", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAFYAAABGBAMAAACkrn5fAAAAHlBMVEUAAAAiJCI4OjdcXltoameIioejpqPExsPY29j///9xarZIAAAAyUlEQVRIx+3WQQqCQBTG8TdOB5DUI+S6nRcoPIFhu1bBHGGO4Any3TYxAkWTv1DSYr71D4b5mOE9kWmszkeC/ZptT6Ocl+xj5qgtbVR1iZn9VE2wU2uO2Jryhm2h2OaKbdZgu/NKrXVK7f6q1JpaqTWFYpvrUtqhPTTYpst0aBOv2Drltlxh392iu0U1t5I4biX13PZvF7+zvOFWihXWlNy+aqZ/M3LcivXcds1xK9kKK3GYAVtYe+8CZ/c/7Br9blSNcgn75O/tE26TasUvH0ImAAAAAElFTkSuQmCC"
					), a8l(1, "victory", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADYAAAAKAQMAAADFMz9IAAAABlBMVEUAAAD///+l2Z/dAAAASUlEQVQI12M4lvj+++efLQzHkoH0jxaGI+yMbcIcZxiOpEHoMyD6xx+GHBB9oIIhA0Q/MGCoSAfSBQYMBskP2z9bAOlEIC1hAADJYSFMvxXXTAAAAABJRU5ErkJggg=="), a8l(2, "defeat", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), a8l(3, "orders", 6,
					"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"
					), a8l(4, "crown", 4,
					"iVBORw0KGgoAAAANSUhEUgAAANIAAADSCAIAAACw+wkVAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0xMi0yM1QxNDowNDo0NyswMzozMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1ZmFkNDE3NC03OWNiLTUwNDgtYWIyMi04NThmMGExODUzZTEiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4ZDQ1NTIyYS02MDRlLWYxNDUtYWM3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"
					), a8l(5, "arena", 6, "iVBORw0KGgoAAAANSUhEUgAAACsAAAAKAQMAAAAXYzUQAAAABlBMVEUAAAD///+l2Z/dAAAARklEQVQI12OwqbdXOHyAoabe3uD4AYaURAOLYw4gygZE1dvpAKl/FXZq/g8Y/tUYGAOpY3kGxj4JDMfS7Q3PAKlke4MzCQCHpxoxsfTs8gAAAABJRU5ErkJggg=="),
				a8l(6, "territorial.io", 6,
					"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phjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAA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jz//+c+xZMmS+PWvfx3Lly9PnQXUssWLF8c3vvGN1BmZM3To0Jg1a1bqDBJp3rx5LF++PHbcccfUKZm2dOnS+PrXv546AwAAAAAAAAAAAACAWlYvdQAAAAAAAAAAAAAAAGxLRUVFcfzxx8fhhx8eBxxwQLRv3z6aNm2aOiuv7bDDDrHffvvFfvvtFyeddFJcddVVsWrVqnjppZdi8eLFcd9998Wrr76aOhMA8t7IkSON9uSAAw44II455piYP39+6hQAAAAAAAAAAAAAAGqR4R4AAAAAAAAAAAAAAPJe7969o0+fPtG9e/fo1KlTNGrUKHVSnVZQUBB77rln7LnnntG3b9+49NJL469//Ws899xz8cQTT8Ttt98eH330UepMAMg7/fv3T53APw0ZMsRwDwAAAAAAAAAAAABAHWe4BwAAAAAAAAAAAACAvNOyZcs49dRT49BDD41u3bpF8+bNUydlWkFBQbRp0ybatGkTJ554Ylx77bXxwgsvxJNPPhn33HNPLF26NHUiAOS83r17x9577506g3864ogjon79+rFhw4bUKQAAAAAAAAAAAAAA1BLDPQAAAAAAAAAAAAAA5IX9998/TjnllDj88MNj//33j3r1XBKfq0pKSuKggw6Kgw46KC688MJYtmxZPPnkk3HXXXfFU089lToPAHLSwIEDUyfwb5o2bRpnn312zJw5M3UKAAAAAAAAAAAAAAC1xKcUAQAAAAAAAAAAAADIWd26dYvBgwfHEUccER06dIiCgoLUSVRTQUFBdOjQITp06BDnnHNOrFixIhYsWBCzZ8+ORYsWpc4DgJzRs2fP1Al8QZ8+fQz3AAAAAAAAAAAAAADUYYZ7AAAAAAAAAAAAAADIKR06dIgzzzwzevfuHZ06dTLWU8e0adMmvve978XZZ58dr776asydOzdmzpwZK1asSJ0GAMkccsghsccee6TO4AsOOuig1AkAAAAAAAAAAAAAANSiwtQBAAAAAAAAAAAAAABQv379GD58eCxcuDD++Mc/xsiRI6Nz585Ge+qwgoKC2GeffWLEiBHx5z//OZ588sk477zzoqioKHUaAGx3/fr1S53AlygtLY3evXunzgAAAAAAAAAAAAAAoJbUSx0AAAAAAAAAsK3df//9sdtuu6XOAHLE9OnT44477kidwSaMGzfOgZR1wG233RYzZ85MnUEeuuWWW2KfffZJnUEVvffee16zAagVRx55ZJx99tlx1FFHRdOmTVPnkEj9+vWjV69e0atXrxg/fnw8/PDDMW3atHj++edTpwHAdtG9e/fUCWzC0UcfHfPmzUudAQAAAAAAAAAAAABALTDcAwAAAAAAANQ5Xbp0iT333DN1BpAjdt9999QJbMacOXOivLw8iouLU6ewFZo2bWq4h2rr2bNnDBw4MIqKilKnUEVXXHFF6gQA6pD69evHiBEj4uSTT479998/dQ45plmzZnHaaafFwIEDY8mSJTF79uy48cYbU2cBQK0ybpy7unbtmjoBAAAAAAAAAAAAAIBaUpg6AAAAAAAAAACA7HrxxRfjvvvuS53BVmrXrl2cddZZqTPIM6NGjTLak0dWrVoV48aNS50BQB3QsWPHuOWWW+Lvf/97TJ482WgPm1VUVBQHHXRQXH/99bFy5cqYMmVKlJaWps4CgG1u//33j2bNmqXOYBP23nvv1AkAAAAAAAAAAAAAANQSwz0AAAAAAAAAACQ1bty4WLduXeoMttK5556bOoE80rlz5zjmmGNSZ1AN11xzTVRUVKTOACCPHXPMMfHQQw/F888/H6eddprxFaptjz32iAsvvDBWrFgRs2fPjs6dO6dOAoBt5rDDDkudwGbstttu0bp169QZAAAAAAAAAAAAAADUAsM9AAAAAAAAAAAktXLlyrjjjjtSZ7CVunbtGv3790+dQZ4oKyuLBg0apM6gil588cWYNm1a6gwA8tSgQYNi8eLF8cgjj8Q3v/lN7wHYajvuuGMMGjQolixZEg8++GD07NkzdRIAbLX27dunTmALevTokToBAAAAAAAAAAAAAIBaYLgHAAAAAAAAAIDkxo4dG++//37qDLbSj370o9QJ5IFWrVrFcccdlzqDKtq4cWNceumlqTMAyEPf+9734oUXXojZs2fHN77xjSgoKEidRB1TXFwcxx57bDzxxBMxb968OPLII1MnAUCNfe1rX0udwBZ06tQpdQIAAAAAAAAAAAAAALXAcA8AAAAAAAAAAMmtWbMmbrrpptQZbKVevXpFr169UmeQ48rLy6NRo0apM6iixx9/PO6///7UGQDkkWHDhsUrr7wSN9xwQ+y3336pc8iAoqKiOProo2PevHmxYMECAz4A5KUWLVqkTmALvvrVr6ZOAAAAAAAAAAAAAACgFhju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FpLMnDkzmjZtmp1RdEpLS7MTAAAAAAAAAFhKDbIDAAAAAAAAAACgEAwdOjR23333qKioyE5hMcrKyuKUU06JX/ziF9kpNebggw822lPH3HDDDUZ7AOqhX//610Z7CtT8+fPj5ptvjr59+0ZVVVV2TkEZPnx4PPvss3HddddFx44ds3NYRj169Iju3bvH2LFjs1MAAChSO+ywQ/Ts2TM23njjWGeddWLNNdes80MFy2qVVVaJVVZZJbp06fKtf//ZZ5/FO++8E//6179izJgx8fjjj8f777+fVAnA8tS2bds46KCDomfPnrHRRhtFu3btspOW2P//eLbRRhvFvvvuGxdddFF88sknMW7cuBg7dmzcc889fucEAAAAAAAAAECdVBIR87MjAAAAAAAAAGrSv//971hzzTWzM4raBx98EGuvvXZ2BkCtu+yyy+K4447LzqAa5s6dG926dYu33347O6VGjB49Onr06JGdwQIfffRRdOrUKebNm5edAsASeu+99/w8W4Bmz54dQ4YMiUsvvTQ7paCVl5fHyJEjY/vtt89OYRndcMMNcdRRR2VnUEe89NJLsemmm2ZnFJ1+/frFddddl50BAMtdw4YNY++9946tt946unfvHuutt140b948O6vOmj9/fnz00Ucxbty4GDNmTDz22GPx4osvZmcBsJS6d+8eBx98cGy11VbRtWvXaNCgQXbScjdhwoR44YUX4vHHH4877rjD86mwnMycOTOaNm2anVF0SktLsxMAAAAAAAAAWEqGewAAAAAAAICCY7gnn+EeoFiVl5fHW2+9Fa1bt85OoRpuvvnmOPzww7Mzltmuu+4af/rTn7IzWMivf/3ruOSSS7IzAFhCBx98cNx8883ZGdSwKVOmxGGHHRaPPPJIdkrRuPTSS6N///5RVlaWncJS+vjjj2ONNdbIzqCOMNyTw3APAIWsd+/esdtuu8UWW2wRG2ywQTRp0iQ7qV77z3/+E6+99lq88MILMXLkyHj33XezkwBYhE6dOsWRRx4ZO+20U2ywwQZRUlKSnZTmyy+/jOeffz7uvffeuOmmm6Kqqio7CQqG4Z4chnsAAAAAAAAA6i/DPQAAAAAAAEDBMdyTz3APUMzOOuusGDJkSHYG1fDll19Gp06dYsqUKdkpy+Svf/1rbL311tkZLPDGG29Et27dsjMAWApPPvlkbLPN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ZwAAUIPatm0bd955Zzz22GPxk5/8JDuHeqisrCz22GOPGDNmTFx22WXRsGHD7CSAGtOtW7d45ZVXYu+9985OYRmsscYacffdd8dZZ52VnQIAAAAAAAAAQB1nuAcAAAAAAAAAAGrBxIkT45ZbbsnOoBp23nnn6NSpU3bG/zjyyCOzE1hg1KhR8dRTT2VnALAMDj744OwElkJlZWWccsopMWHChOwUatCbb74ZJ510UnzzzTfZKSzCLrvskp0AAEANOfPMM+ONN96IfffdNxo0aJCdQz3XvHnzOO644+Ktt96KQw45JDsHYJn16dMn/vKXv8QGG2yQnUINaNSoUQwZMiQefPBBI3MAAAAAAAAAAPwgwz0AAAAAAAAAAFBLBg0aFJ999ll2BouxwgorxODBg7MzvuWggw6KLl26ZGcQEbNnz46BAwdmZwCwjHr37p2dwFK46aab4tZbb83OYDm47bbb4qabbsrOYBG23HLL7AQAAJZR796947XXXoszzjgjVl555ewcCsxaa60VN910Uzz22GOx7rrrZucALJWBAwfGjTfeGKusskp2CjXs5z//ebz88sseowAAAAAAAAAA+F6GewAAAAAAAAAAoJbMmDEjbrjhhuwMqmHPPfeMli1bZmf8V//+/bMTWOC2226LN998MzsDgGWw0047xRprrJGdwRJ6/fXX4+ijj87OYDn61a9+FePHj8/O4Ad07NjRwaYAAPVU48aN4/e//338+c9/jm7dumXnUOC22267GD16dAwePDg7BWCJXHvttTFixIho1KhRdgrLSbdu3eKvf/1rbLXVVtkpAAAAAAAAAADUMYZ7AAAAAAAAAACgFg0dOjQmTpyYncFilJeX15lD5XbZZZfYdNNNszOIiM8++ywGDBiQnQHAMvrFL36RncASmjNnTvTv3z+qqqqyU1iOKisr45hjjok5c+Zkp/A9SkpKYu+9987OAABgCe2+++4xbty4OPzww6Nhw4bZORSJlVZaKc4+++x48cUXo2vXrtk5AItUWloa999/fxx55JFRUlKSncNy1rZt23jggQdin332yU4BAAAAAAAAAKAOMdwDAAAAAAAAAAC1qLKyMq644orsDKph//33j8aNG2dnxIknnuiQqDrimmuuienTp2dnALCMevXqlZ3AErrmmmvihRdeyM6gFjz77LNxzTXXZGfwA7ba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XFRVVWXnLFcnnHBC7LfffjF58uTsFBY44ogjshMAKDAbbLBBdgIAAAAAAAAAAAsx3AMAAAAAAAAAAEXq+uuvj9deey07A37QXXfdFW+88UZ2BgB1WIsWLbITWMg777yTnQAAALDM9t9//+wEFjJmzJjYcsst4/77789OqTX3339/bL311jFu3LjsFCKid+/e0axZs+wMAApIhw4dshMAAAAAAAAAAFhIg+wAAAAAAAAAAAAgz/nnnx933nlnlJSUZKfAt0ybNi0GDBiQnQFAHdapU6do2LBhdgYLGTt2bHYCAADAMtlyyy1jk002yc5ggbvuuisOPPDAqKqqyk6pdW+++WZsuumm8fDDD0evXr2yc4raSiutFP369YuLL744OwWoY6ZNmxZTp06NL774Ij7//PP46quvIiJi5syZ0bx584iIaNSoUZSXl8eKK64YK6+8cqy66qrRuHHjzGzqgDXWWCM7AQAAAAAAAACAhRjuAQAAAAAAAACAInb33XfHscceGz/96U+zU+Bbrr322pgyZUp2BgB12DrrrJOdwELmzJljuAcAAKj3jj76aEP3dcD8+fPjiiuuiBNPPDE7JdWcOXNiu+22i3vvvTd233337JyitsceexjugSJWVVUV77zzTvzrX/+KcePGxauvvhrPPPNMTJ8+famut/7668emm24a3bp1i/XWWy822GCDaN++ve9BishKK60U66+/frz55pvZKQAAAAAAAAAAhOEeAAAAAAAAAAAoemeffXY88sgjUVZWlp0CERExYcKEOOOMM7IzAKjjVl999ewEFvLZZ59lJwAAACyTsrKy2HHHHbMzit78+fPjnHPO8TviBaqqqmLPPfeMe+65J/baa6/snKK16aabRocOHeL999/PTgFqyaxZs+LFF1+Mxx9/PEaOHBkffvhhjV37zTff/J/Blg4dOsTee+8dvXv3jk033TRWWmmlGrsfdVPPnj0N9wAAAAAAAAAA1BGl2QEAAAAAAAAAAECuJ598Mh577LHsDPiviy++OCorK7MzAKjjVltttewEFjJlypTsBAAAgGVy5JFHRsuWLbMziprRnh+27777xiOPPJKdUbQaNmwYRx55ZHYGsJxVVVXFyy+/HKecckq0adMmtt9++7joootqdLTnh7z//vtx4YUXxg477BCtWrWKE044IZ599tn45ptvlvu9ydG5c+fsBAAAAAAAAAAAFjDcAwAAAAAAAAAAxJlnnhlff/11dgbEa6+9FldddVV2BgD1wKqrrpqdwEI+/fTT7AQAAIBlst9++2UnFL0LLrjAaM8PqKqqij322CNGjx6dnVK0dthhh+wEYDmZO3du3H///fGTn/wkNt988/jtb38bs2bNSuuZN29eXHHFFbH11ltHjx494rbbbouZM2em9bB8dOzYMTsBAAAAAAAAAIAFGmQHAAAAAAAAAAAA+caMGRP333+/gwlJNX/+/Dj77LOzMwCoJwz31C2GewAAgPqsXbt2scUWW2RnFLUbbrghBg0alJ1Rp82bNy/23HPPeO655xz2n6Br166x/vrrx5tvvpmdAtSQb775Jh588MEYNmxYjB8/Pjvne73++utx8MEHR7t27eKcc86JvffeO5o0aZKdRQ1o165ddgLV8Jvf/Cbuuuuu7Iwl9uijj0bjxo2zM4rO1ltvnZ1Qaz755JPsBAAAAAAAAIAaZbgHAAAAAAAAAACIiIihQ4fGLrvsEs2bN89OoUg9+eST8cADD2RnAFBPrLzyytkJLOTjjz/OTgAAAFhqRx99dDRq1Cg7o2g98sgjcdRRR2Vn1AuTJk2KQw45JB555JEoLy/PzikqZWVlcfjhh8eAAQOyU4Aa8OKLL8bAgQPj2WefzU6plokTJ8ahhx4al156afz2t7+Nn/3sZ9lJLKPVVlstO4FqmDBhQkyYMCE7Y4lVVVVlJxSl+vKYAgAAAAAAAMD/Ks0OAAAAAAAAAAAA6oZ333037rjjjuwMitTXX38dQ4YMyc4AoB5ZaaWVshNYyAcffJCdAAAAsNR22WWX7ISiNX78+Nh3332zM+qVF198MQYMGBDz58/PTik62223XXYCsIw+//zzOP300+MnP/lJvRxYeO2116JXr15x/PHHx+eff56dwzJo2bJllJWVZWcAAAAAAAAAABCGewAAAAAAAAAAgIUMGTIkpk2blp1BEbrnnnvilVdeyc4AoB5ZccUVsxNYyLvvvpudAAAAsFS6desW3bp1y84oSp9//nn06dMnZs2alZ1S71x77bUxcuTI7Iyi07Vr1+jUqVN2BrCUXn755fjJT34SF154YXbKMrvyyivjpz/9qedX67GysrLYYostsjMAAAAAAAAAAAjDPQAAAAAAAAAAwEKmTJkSf/jDH7IzKDJffPFFnH766dkZANQz5eXl2Qks5B//+Ed2AgAAwFI59NBDo6SkJDuj6MyfPz9OP/30eOONN7JT6q2+ffvG+++/n51RVMrKyuLggw/OzgCWUFVVVVx11VWx+eabx5tvvpmdU2PGjx8fW2yxRdx2223ZKSylzp07ZycAAAAAAAAAABCGewAAAAAAAABYDtZcc82oqqry4aPGPvbee+/s/62hqJxxxhnxySefZGdQRH7/+9/HxIkTszMAqGeaN2+encACc+bMialTp2ZnAAAALJVtt902O6Eo3XnnnXH99ddnZ9Rrs2bNipNOOikqKyuzU4pK7969sxOAJTBr1qw4/vjj47jjjstOWS6qqqri4IMPjnPOOcfjQT209tprZycAAAAAAAAAABCGewAAAAAAAAAAgO+YM2dOXHPNNdkZFImPP/44hgwZkp0BQD1kuKfumD59enYCAADAUunWrVtssMEG2RlF54MPPoijjjoqO6MgPPTQQ3HvvfdmZxSV7t27R3l5eXYGUA3Tpk2L/fffP66++urslOVu6NChMWDAgPjmm2+yU1gC7du3z04AAAAAAAAAACAM9wAAAAAAAAAAAN/jvPPOi/feey87gyJw6aWXxpw5c7IzAKhnWrRoEY0aNcrOYIEZM2ZkJwAAACyVQw89NEpKSrIzikplZWWceuqpMWvWrOyUgtG/f/+YMmVKdkbRaNy4cRxwwAHZGcBifPrpp7HHHnvEww8/nJ1Sa37729/G4MGDo7KyMjuFamrVqlV2AgAAAAAAAAAAYbgHAAAAAAAAAAD4HlVVVXHJJZdkZ1Dg/vnPf8bFF1+cnQFAPdShQ4fsBBYybdq07AQAAIClss0222QnFJ377rsv7rnnnuyMgjJ16tS46qqrsjOKSq9evbITgEWYPHly7LXXXvH8889np9S63/zmN3HeeedlZ1BNLVq0yE4AAAAAAAAAACAM9wAAAAAAAAAAAD/g6quvjjfeeCM7gwI2YsSI7AQA6qlVV101O4GFTJ8+PTsBAABgiXXo0CE22GCD7IyiMm3atDjppJOyMwrSiBEj4u23387OKBo9evTITgB+wPTp0+Oggw6KF198MTslzRlnnBG33XZbdgbVsMoqq2QnAAAAAAAAAAAQhnsAAAAAAAAAAIBFOP/887MTKFDPPPNM3HXXXdkZANRTK6+8cnYCC5k2bVp2AgAAwBI75JBDoqysLDujqFxxxRXxySefZGcUpKqqqvjtb3+bnVE01lprrejWrVt2BvAdX3/9dfTr1y+efPLJ7JR0hx56aIwePTo7g8WoqKjITgAAAAAAAAAAIAz3AAAAAAAAAAAAi3DHHXfEiy++mJ1Bgfnmm2/ijDPOyM4AoB5zmF3dMnXq1OwEAACAJbbNNttkJxSV9957L84+++zsjIJ23XXXxfjx47MzisY+++yTnQB8x9ChQ2PkyJHZGXVCVVVVHHroofHZZ59lp7AI5eXlUV5enp0BAAAAAAAAAFD0DPcAAAAAAAAAAACLdNZZZ0VVVVV2BgXkwQcfjOeeey47A4B6zEF2dcuMGTOyEwAAAJZI48aNo3v37tkZReXiiy/2XEMtuPrqq7MTisaWW26ZnQAs5K677orf/OY32Rl1yttvvx2nn356zJ8/PzuFRdhwww2zEwAAAAAAAAAAip7hHgAAAAAAAAAAYJEee+yxePLJJ7MzKBAzZ86MgQMHZmcAUM+ttNJK2QksZPr06dkJAAAAS+Sggw6Kpk2bZmcUjfHjx8fvfve77IyicPXVV8eECROyM4pC9+7do7TUW/WhLhg3blwccsgh2Rl10h/+8Id46KGHsjNYhLXXXjs7AQAAAAAAAACg6Hk1IAAAAAAAAAAAsFjDhg2LefPmZWdQAP74xz/Gu+++m50BQD234oorZiewkM8//zw7AQAAYIlsu+222QlF5fLLL89OKCq33XZbdkJRKC8vj7322is7A4re7Nmz4+ijj/Zc9iIce+yxMXXq1OwMfkDLli2zEwAAAAAAAAAAip7hHgAAAAAAAAAAYLFGjx4df/rTn7IzqOc+/fTTGDRoUHYGAAWgadOm2QksZNq0adkJAAAAS2SzzTbLTiga77zzTlx33XXZGUXlN7/5TcyYMSM7oyhsvfXW2QlQ9C655JJ48cUXszPqtIkTJ8YVV1yRncEPWHnllbMTAAAAAAAAAACKnuEeAAAAAAAAAACgWgYPHhyzZ8/OzqAeu/LKKx0WCECNaNiwYXYCC5k8eXJ2AgAAQLV179491lxzzeyMonHLLbdkJxSdGTNmxBNPPJGdURQ22mij7AQoaq+99loMHTo0O6NeGDFiRLz11lvZGXyPioqK7AQAAAAAAAAAgKJnuAcAAAAAAAAAAKiWt99+O0aOHJmdQT319ttvx3nnnZedAUCBWHHFFbMTWMjEiROzEwAAAKptzz33zE4oGlOnTo2LLrooO6Mo/f73v89OKAqdO3fOToCiNW/evDjllFOyM+qNqqqquOSSS7Iz+B4rr7xydgIAAAAAAAAAQNEz3AMAAAAAAAAAAFTboEGDYvr06dkZ1EMXXHBBVFVVZWcAUCAaNGiQncAC8+fPjw8//DA7AwAAoNo233zz7ISi8eCDD8acOXOyM4rSo48+Gu+88052RsGrqKiIXr16ZWdAUbrzzjvjqaeeys6oV6677roYP358dgbfUV5enp0AAAAAAAAAAFD0DPcAAAAAAAAAAADVNmnSpLj55puzM6hnXnrppbjxxhuzMwAoII0bN85OYIGvvvoqOwEAAGCJbLTRRtkJRaGqqiquvvrq7Iyi9vjjj2cnFIXevXtnJ0DRmT59egwcODA7o1668sorsxP4DsM9AAAAAAAAAAD5DPcAAAAAAAAAAABLZMiQIfHpp59mZ1BPVFZWxrBhw7IzACgwTZs2zU5ggXnz5mUnAAAAVNu2224bLVq0yM4oCmPHjo2xY8dmZxS1m2++OebPn5+dUfC6d++enQBF54YbbohPPvkkO6Ne+t3vfhcffPBBdgYLWXHFFbMTAAAAAAAAAACKnuEeAAAAAAAAAABgicyaNSuuvfba7AzqiUceeSSeeOKJ7AwACkxpqZdB1xWGewAAgPpk2223zU4oGg888EB2QtEbM2ZMvP3229kZBW+DDTbIToCi8umnn8YZZ5yRnVGv3XHHHdkJLGSFFVbITgAAAAAAAAAAKHresQoAAAAAAAAAACyxs846KyZMmJCdQR03e/bsGDRoUHYGAAWoefPm2Qks8NVXX2UnAAAAVFv37t2zE4rCV199FVdffXV2BhHx/PPPZycUvHbt2sW6666bnQFF44477og5c+ZkZ9Rrl19+ecyePTs7gwWaNWuWnQAAAAAAAAAAUPQM9wAAAAAAAAAAAEusqqoqLrvssuwM6rg77rgjxo0bl50BACxHlZWV2QkAAADV1rlz5+yEovDyyy/H9OnTszOIiAcffDA7oeCVlJTETjvtlJ0BReHzzz+PM888Mzuj3ps0aVI8/fTT2Rks0LBhw+wEAAAAAAAAAICiZ7gHAAAAAAAAAABYKpdddlmMHz8+O4M66rPPPotBgwZlZwBQoMrKyrITWGD27NnZCQAAANXSpUuXaNu2bXZGUXjkkUeyE1hg1KhRMW3atOyMgrfhhhtmJ0BRePDBB2PGjBnZGQXhzjvvzE5ggUaNGmUnAAAAAAAAAAAUPcM9AAAAAAAAAADAUrvggguyE6ijrrvuupgyZUp2BgAFqnHjxtkJLDBv3rzsBAAAgGrZaaedshOKwrx58+KPf/xjdgYL+fvf/56dUPDWW2+97AQoePPmzYvf/va32RkF49Zbb43JkydnZxARTZs2zU4AAAAAAAAAACh6hnsAAAAAAAAAAICldsstt8To0aOzM6hj/v3vf8ewYcOyMwCAWjB37tzsBAAAgGrp0aNHdkJReOONN2LSpEnZGSzE8zjLX4cOHbIToOD97W9/i3HjxmVnFJRnnnkmO4GIaNCgQXYCAAAAAAAAAEDRM9wDAAAAAAAAAAAsk3POOSfmz5+fnUEdcvHFF0dlZWV2BgAFrFGjRtkJAAAA1DNdu3bNTigKL7zwQnYC3/HYY49lJxS81q1bR/v27bMzoKDdcccd2QkFZ9SoUdkJhOc7AAAAAAAAAADqAsM9AAAAAAAAAADAMhk1alT89a9/zc6gjnj11Vfj6quvzs4AoMA1bNgwO4EFjPUBAAD1QUVFRXTs2DE7oyg88sgj2Ql8x7PPPhszZszIzihoJSUlsd1222VnQMH69NNP4/e//312RsG5/fbb48svv8zOICLWWmut7AQAAAAAAAAAgKJmuAcAAAAAAAAAAFhmw4cPj2+++SY7g2RVVVUxYsSI7AwAoBZ99dVX2QkAAACLtccee0SDBg2yMwreF198YbinjnrzzTezEwreRhttlJ0ABeuvf/1rVFVVZWcUnMrKynj11VezM4jwfSoAAAAAAAAAQDLDPQAAAAAAAAAAwDJ7/vnn4+GHH87OINmTTz4ZDz74YHYGAAAAAMC3bLzxxtkJReGNN97ITuAHjB8/Pjuh4K2//vrZCVCw7r777uyEgjV69OjsBAAAAAAAAAAASGe4BwAAAAAAAAAAqBFDhw6NOXPmZGeQZO7cuTFkyJDsDAAAAACA/2FQo3b8/e9/z07gBxhVWv46duyYnQAF6ZNPPokHHnggO6NgPfTQQ9kJAAAAAAAAAACQznAPAAAAAAAAAABQI8aNGxd33313dgZJ7r777hgzZkx2BgAAAADA/+jUqVN2QlEYPXp0dgI/4IUXXshOKHhrrLFGNGzYMDsDCo6/v5avF154ISZPnpydUfRWXHHF7AQAAAAAAAAAgKJmuAcAAAAAAAAAAKgxb731VnYCCaZPnx6DBg3KzgAAAAAA+B/NmjWLNdZYIzuj4H3zzTfx0EMPZWfwA0aPHh2zZs3KzihoZWVl0bNnz+wMKDiPP/54dkLBe/PNN7MTip7hHgAAAAAAAACAXIZ7AAAAAAAAAACAGlFWVhb9+vXLziDBCy+8EBMnTszOAKCINGnSJDuBBWbOnJmdAAAAsEjbb799NGjQIDuj4H300UcxY8aM7AwWwe/xl7+NNtooOwEKyuzZs+Pmm2/Ozih4b7zxRnYCAAAAAAAAAACkMtwDAAAAAAAAAADUiDPPPDPatWuXnUGC3r17R/fu3bMzAIAEK6ywQnYCAADAIvXo0SM7oSi8//772QkshuGe5a9Tp07ZCVBQxo0bF/PmzcvOKHgvv/xydgIAAAAAAAAAAKQy3AMAAAAAAAAAACyzZs2aRd++fbMzSLLCCivE2WefnZ0BQBH56quvshNYoGHDhtkJAAAAi9S5c+fshKLw9ttvZyewGB9++GF2QsFba621shOgoLz66qvZCUXhiSeeiPnz52dnAAAAAAAAAABAGsM9AAAAAAAAAADAMjv77LOjdevW2Rkk2mGHHWKHHXbIzgAAAAAA+JZOnTplJxSFf/3rX9kJLIbhnuWvffv22QlQUJ566qnshKIwadKk+PTTT7MzAAAAAAAAAAAgjeEeAAAAAAAAAABgmbRs2TIOO+yw7AySlZaWxrBhw7IzAAAAAAC+Ze21185OKAr/+Mc/shNYjA8++CA7oeCtttpq2QlQMObOnRsPPvhgdkbRmDBhQnYCAAAAAAAAAACkMdwDAAAAAAAAAAAskxEjRkRFRUV2BnXA5ptvbsQJAAAAAKgzevToEU2aNMnOKHjffPNN/O1vf8vOYDHeeuut7ISCt8oqq0T79u2zM6AgvPfeezFv3rzsjKLx73//OzsBAAAAAAAAAADSGO4BAAAAAAAAAACW2lprrRV9+vTJzqAOOe2007ITAIBa1KBBg+wEAACAH7TxxhtnJxSFTz/9NCorK7MzWIwxY8bE/PnzszMK3uabb56dAAXhX//6V3ZCUfnggw+yEwAAAAAAAAAAII3hHgAAAAAAAAAAYKmdffbZ0bx58+wM6pD1118/Tj311OwMAKCWNG7cODsBAADgB6233nrZCUVhypQp2QlUw7x58+LLL7/Mzih4/t6BmjF+/PjshKLyzjvvZCcAAAAAAAAAAEAawz0AAAAAAAAAAMBS6dKlS/ziF7/IzqAOOv744x3iD8ByNW/evOwEAAAA6oEOHTpkJxSFyZMnZydQTTNmzMhOKHjt2rXLToCCMHbs2OyEovL3v/89OwEAAAAAAAAAANIY7gEAAAAAAAAAAJbK8OHDjbPwvVZfffU466yzsjMAKGBff/11dgILlJZ6SToAAFB3GdCoHYZ76o/p06dnJxS8Nm3aZCdAvVdZWRlPPvlkdkZRee211+Kbb77JzgAAAAAAAAAAgBTeJQkAAAAAAAAAACyxzTbbLHbdddfsDOqwvn37OpwOAIpA06ZNsxMAAAB+0BprrJGdUBSmTJmSnUA1zZw5Mzuh4LVq1So7Aeq9//znPzFr1qzsjKIzderU7AQAAAAAAAAAAEhhuAcAAAAAAAAAAFhiw4YNi4YNG2ZnUIdVVFTEeeedl50BQIGaM2dOdgIL+J4QAACoq8rLy2PVVVfNzigK06ZNy06gmgxhLH/+3oFl95///Cc7oSgZ7gEAAAAAAAAAoFgZ7gEAAAAAAAAAAJbItttuG9tvv312BvXAvvvuG126dMnOAKAAVVZWZiewQKNGjbITAAAAvtdWW20VpaXeRlsbJk+enJ1ANRnuWf5atmyZnQD13sSJE7MTipIhPgAAAAAAAAAAilWD7AAAAAAAAAAAAKB+GTp0qMMOqZYmTZrEOeecE7vvvnt2CgCwnDRu3Dg7AQAA4HsZFa89PXv2jA4dOmRnUA1t27bNTih45eXlUVFREdOnT89OgXrro48+yk4oSv7eAgAAAAAAAACgWBnuAQAAAAAAAAAAqm3PPfeMnj17ZmdQj+y8887Rq1eveOqpp7JTACggM2fOzE5ggbKysuwEAACA77XWWmtlJxSNgw8+ODsB6pQePXrEE088kZ0B9dbEiROzE4rS1KlTsxMAAAAAAAAAACBFaXYAAAAAAAAAAABQf5x++ulRUlKSnUE9UlZWFsOHD8/OAKDAVFVVZSewQNOmTbMTAAAAvtdqq62WnQAUqY4dO2YnQL320UcfZScUpenTp2cnAAAAAAAAAABACsM9AAAAAAAAAABAtRx88MHRo0eP7AzqoZ49e0afPn2yMwAoILNnz85OYIEGDRpkJwAAAHyvVq1aZScARapdu3bZCVCvvf3229kJRWnGjBnZCQAAAAAAAAAAkMJwDwAAAAAAAAAAUC2nnXZadgL12MCBA7MTACggc+fOzU5ggUaNGkWzZs2yMwAAAP7Hqquump0AFKmWLVtmJ0C99o9//CM7oShNnz49OwEAAAAAAAAAAFIY7gEAAAAAAAAAABarf//+scEGG2RnUI916dIlTjzxxOwMAArEvHnzshNYSIcOHbITAAAA/ofhDCBLRUVFdgLUWzNnzozKysrsjKJkuAcAAAAAAAAAgGJluAcAAAAAAAAAAFik0tLSOOGEE7IzKAAnnnhilJWVZWcAUAC+/PLL7AQW0qZNm+wEAACAb6moqIjy8vLsDKBIGe6BpTdz5szshKLl9+4AAAAAAAAAABQrwz0AAAAAAAAAAMAinXrqqdGpU6fsDApA+/bt46yzzsrOAKAAzJs3LzuBhay66qrZCQAAAN/So0eP7ASgiK288srZCVBvGY8BAAAAAAAAAABqm+EeAAAAAAAAAADgB5WVlUX//v2zMyggRx11VLRs2TI7A4B6bvbs2dkJLGSVVVbJTgAAAPiWjh07ZicARay8vDw7AeqtuXPnZicULaNJAAAAAAAAAAAUK8M9AAAAAAAAAADADxo+fHi0a9cuO4MC0qJFixgxYkR2BgD1nAME65aKiorsBAAAgG9p3759dgJQxAz3wNIz2p7nq6++yk4AAAAAAAAAAIAUhnsAAAAAAAAAAIDvVV5eHkcccUR2BgXowAMPjHXXXTc7A4B67IsvvshOYCErrbRSdgIAAMC3rLbaatkJQBFbccUVsxOg3jIeAwAAAAAAAAAA1DbDPQAAAAAAAAAAwPc688wzo3Xr1tkZFKCmTZvGeeedl50BQD02Y8aM7AQWUlFRkZ0AAADwLS1btsxOAIpYs2bNonHjxtkZUC9VVlZmJxStyZMnZycAAAAAAAAAAEAKwz0AAAAAAAAAAMD/aNmyZRx22GHZGRSwXXfdNXr27JmdAUA9NX369OwEFrLKKqtkJwAAAHxLeXl5dgJQ5Dp37pydALBEvvnmm+wEAAAAAAAAAABIYbgHAAAAAAAAAAD4HyNGjIiKiorsDApYw4YN46yzzsrOAKCemjZtWnYCC2nRokV2AgAAwLestNJK2QlAkVtttdWyE6Bemj17dnYCAAAAAAAAAABQZAz3AAAAAAAAAAAA39KhQ4fo06dPdgZF4Gc/+1nstdde2RkA1ENTp07NTmAhBh8BAIC6xnAPkK158+bZCVAvVVVVZScAAAAAAAAAAABFxnAPAAAAAAAAAADwLcOHD3eYGLWipKQkBg8enJ0BQD30/vvvZyewEAdiAwAAdU15eXl2AlDk/L4EAAAAAAAAAAAA6gfDPQAAAAAAAAAAwH916dIl9t577+wMisjGG28cxxxzTHYGAPXM1KlT4+uvv87OYIGKiorsBAAAgG9ZccUVsxOAIme4BwAAAAAAAAAAAOoHwz0AAAAAAAAAAMB/nXXWWbHCCitkZ1Bkfv3rX0dpqZezAbBkZs6cmZ3AAg7EBgAA6pIOHTpEWVlZdgZQ5Jo1a5adAAAAAAAAAAAAAFSDkw4AAAAA+P/Y+/M4r+t6//9/zIwIIY64gOZCJJw0RUvDT0ckjiZW6DE1TUtTE7T0gFKoiArDNoC4JW65YLmhx31JIxWVECnREI6KuKMhgQgiAoIww++f8+trHkZnYGYe75n39Xq58M8s79dtvIwwy+v9vAMAAABARETsu+++ccghh2RnUIS++tWvRkVFRXYGAE2M4Z7CUVZWFl26dMnOAAAAiIiITp06ZScAROvWrbMTAAAAAAAAAAAAgFow3AMAAAAAAAAAAEREREVFRbRo0SI7gyJ16qmnRnl5eXYGAE3IsmXLshP4lK997WvZCQAAABER8eUvfzk7ASA222yz7AQAAAAAAAAAAACgFgz3AAAAAAAAAAAA0bNnzzjooIOyMyhi7du3j9GjR2dnANCEfPTRR9kJfMrOO++cnQAAABAREe3atctOAIg2bdpkJwAAAAAAAAAAAAC1YLgHAAAAAAAAAACIIUOGRGmp24nIdcIJJzj0H4Ba+/DDD7MT+JQdd9wxOwEAACAiItq2bZudABBf+tKXshMAAAAAAAAAAACAWnDSBgAAAAAAAAAAFLkjjjgiunfvnp0B0aZNmxg1alR2BgBNxAcffJCdwKd8+ctfzk4AAACIiIjWrVtnJwAY7gEAAAAAAAAAAIAmwnAPAAAAAAAAAAAUuUGDBkVJSUl2BkRExI9+9KPYZ599sjMAaAIWLVqUncCnbLfddtkJAAAAEWG4BygMhnsAAAAAAAAAAACgaTDcAwAAAAAAAAAARez44483kkJBadGiRVRWVmZnANAELF68ODuBT2nfvn12AgAAQEREtGnTJjsBAAAAAAAAAAAAAGgiDPcAAAAAAAAAAEARGzhwYHYC/B8HHnhgHHroodkZABS4+fPnZyfwKVtvvXV2AgAAQEREtG7dOjsBAAAAAAAAAAAAAGgiDPcAAAAAAAAAAECR6tu3b+y+++7ZGfB/lJaWxpAhQ7IzAChwhnsKy9Zbbx3l5eXZGQAAAPGlL30pOwEgNt100+wEAAAAAAAAAAAAoBYM9wAAAAAAAAAAQBEqLS2N/v37Z2dAjbp27Rp9+vTJzgCggL322mvZCXxKSUlJ7LffftkZAAAAhnuAgmC4BwAAAAAAAAAAAJoGwz0AAAAAAAAAAFCEzj777OjcuXN2BnyugQMHRmmp29wAWL/XX3891qxZk53Bp+y+++7ZCQAAAIZ7AAAAAAAAAAAAAIBac6IBAAAAAAAAAAAUmbKysujbt292Bnyhf/u3f4tBgwZlZwBQwBYvXpydwKd06tQpOwEAACBat26dnQAAAAAAAAAAAAAANBGGewAAAAAAAAAAoMgMHz48dtxxx+wMqJV+/fpFq1atsjMAKFBLlizJTuBTvvKVr2QnAAAARMuWLbMTAKJFixbZCQAAAAAAAAAAAEAtGO4BAAAAAAAAAIAiUl5eHn369MnOgFrbbrvt4oILLsjOAKBALV68ODuBTzEOCQAAFIJNN900OwHAiBgAAAAAAAAAAAA0EYZ7AAAAAAAAAACgiAwbNiy23Xbb7AyokxNPPNEQAADrtXDhwuwEPmW77bbLTgAAAAAAAAAAAAAAAAAAqDXDPQAAAAAAAAAAUCTatWsXP//5z7MzoM622GKLGDNmTHYGAAXovffey07gU7bZZhtjewAAQLpNNtkkOwEAAAAAAAAAAAAAaCIM9wAAAAAAAAAAQJGorKyMtm3bZmfABjnqqKNir732ys4AoMD8/e9/z07gMw444IDsBAAAoMi1bNkyOwEAAAAAAAAAAAAAaCIM9wAAAAAAAAAAQBHYeeed46c//Wl2Bmywli1bxsiRI7MzACgwb775ZnYCn7HnnntmJwAAAAAAAAAAAAAAAAAA1IrhHgAAAAAAAAAAKALDhw+PNm3aZGfARvnBD34Q3//+97MzACggL7zwQnYCn/G1r30tOwEAAAAAAAAAAAAAAAAAoFYM9wAAAAAAAAAAQDPXpUuXOOqoo7IzYKOVlpZGRUVFdgYABWTOnDmxatWq7Aw+pVOnTtkJAABAkSsrK8tOAAAAAAAAAAAAAACaCMM9AAAAAAAAAADQzI0YMSJatmyZnQH1Yt99943jjz8+OwOAAvLee+9lJ/ApHTp0yE4AAACKnJ+HAwAAAAAAAAAAAAC1ZbgHAAAAAAAAAACasX333TcOOeSQ7AyoV+eee252AgAFZNGiRdkJfEqbNm2ia9eu2RkAAAAAAAAAAAAAAAAAAF/IcA8AAAAAAAAAADRjFRUV0aJFi+wMqFe77rprnHXWWdkZABSI+fPnZyfwGT169MhOAAAAAAAAAAAAAAAAAAD4QoZ7AAAAAAAAAACgmerZs2ccdNBB2RnQIM4444xo1apVdgYABeDtt9/OTuAz9t577+wEAAAAAAAAAAAAAAAAAIAvZLgHAAAAAAAAAACaqSFDhkRpqVuEaJ523HHHGDFiRHYGAAXgzTffzE7gM77+9a9nJwAAAAAAAAAAAAAAAAAAfCGncgAAAAAAAAAAQDN0xBFHRPfu3bMzoEH16dMn2rVrl50BQLKXXnopO4HP6Ny5c3YCAAAAAAAAAAAAAAAAAMAX2iQ7AAAAAAAAAIDmp6qqKj744IPsDJqRVatWZSdAkzNo0KAoKSnJzoAGteWWW8aFF14YJ510UnYKAImmTZsW1dXVUVpamp3C/9p8883jgAMOiCeffDI7BQAAAAAAAAAAAAAAAACgRoZ7AAAAAAAAAKh38+bNi69+9avZGQBF6/jjj4999tknOwMaxY9//OO45JJL4sUXX8xOASDJihUr4v3334/27dtnp/ApPXr0MNwDAACkWL16dbRu3To7AwAAAAAAAAAAAABoAkqzAwAAAAAAAAAAgPo1cODA7ARoNK1bt47KysrsDACSvfvuu9kJfMaee+6ZnQAAABSpqqqq7AQAAAAAAAAAAAAAoIkw3AMAAAAAAAAAAM1I3759Y/fdd8/OgEZ1yCGHxAEHHJCdAUCit99+OzuBz/jGN76RnQAAAAAAAAAAAAAAAAAA8LkM9wAAAAAAAAAAQDNRWloa/fv3z86ARldWVhZDhw7NzgAg0euvv56dwGd89atfjQ4dOmRnAAAAAAAAAAAAAAAAAADUaJPsAAAAAAAAAAAAoH6cffbZ0blz5+wMSNGjR4845phj4o477shOASDBK6+8kp3AZ5SUlMQRRxwR48aNy06hyBx00EExYcKE7Iyic99998Uvf/nL7AwAgIiIWL16dXYCAAAAAAAAAAAAANBEGO4BAAAAAAAAAIBmoKysLPr27ZudAanOP/98wz0ARerpp5/OTmA9unXrZriHRrfHHnvENttsk51RdL70pS9lJwAA/NPatWuzEwAAAAAAAAAAAACAJqI0OwAAAAAAAAAAANh4w4cPjx133DE7A1J16dIlzjjjjOwMABLMmTMnPvroo+wMPmPPPffMTqAIdezYMTuhKPk7GAAAAAAAAAAAAAAAAGiKDPcAAAAAAAAAAEATV15eHn369MnOgIIwYMCAKCsry84AIMHf//737AQ+o3PnzrHddttlZ1Bkdtppp+yEorRq1arsBACAf/rkk0+yEwAAAAAAAAAAAACAJsJwDwAAAAAAAAAANHHDhg2LbbfdNjsDCkKHDh1ixIgR2RkAJHjjjTeyE/iMsrKy+MlPfpKdQZHZYYcdshOK0urVq7MTAAD+yaggAAAAAAAAAAAAAFBbhnsAAAAAAAAAAKAJa9euXfz85z/PzoCCcsopp8TWW2+dnQFAI3vllVeyE1iP/fffPzuBItOhQ4fshKK0dOnS7AQAgH/6+OOPsxMAAAAAAAAAAAAAgCbCcA8AAAAAAAAAADRhlZWV0bZt2+wMKCjbbLNNjB49OjsDgEY2a9as7ATWo2vXrtkJFJHtt98+2rVrl51RlD744IPsBACAf1q5cmV2AgAAAAAAAAAAAADQRBjuAQAAAAAAAACAJmrnnXeOn/70p9kZUJCOO+646Ny5c3YGAI3oySefjHXr1mVn8Bnbb7999OjRIzuDIrH//vtHSUlJdkZRev/997MTAAD+6eOPP85OAAAAAAAAAAAAAACaCMM9AAAAAAAAAADQRA0fPjzatGmTnQEFqXXr1nHBBRdkZwDQiObPnx/vvfdedgbrcfjhh2cnUCT22GOP7ISitWjRouwEAIB/WrVqVXYCAAAAAAAAAAAAANBEGO4BAAAAAAAAAIAmqEuXLnHUUUdlZ0BBO/TQQ6N79+7ZGQA0ojfffDM7gfXo1q1bdgJFokuXLtkJReudd97JTgAA+KeVK1dmJwAAAAAAAAAAAAAATYThHgAAAAAAAAAAaIJGjBgRLVu2zM6AgtaiRYsYPnx4dgYAjejll1/OTmA9vvGNb0S7du2yMygCu+yyS3ZCUVq7dq3hHgCgoCxfvjw7AQAAAAAAAAAAAABoIgz3AAAAAAAAAABAE7PvvvvGIYcckp0BTcL+++8fRxxxRHYGAI1k5syZ2QmsR8uWLeOkk07KzqCZKy8vj44dO2ZnFKWPPvooOwEA4F+sXLkyOwEAAAAAAAAAAAAAaCIM9wAAAAAAAAAAQBNTUVERLVq0yM6AJqGkpCQGDx6cnQFAI3niiSeyE6hBr169shNo5v7zP/8zNtlkk+yMovTBBx9kJwAA/IuPP/44OwEAAAAAAAAAAAAAaCIM9wAAAAAAAAAAQBPSs2fPOOigg7IzoEnZa6+94tRTT83OAKARzJ49OxYvXpydwXp07do1Nttss+wMmrH99tsvO6FoLVu2LDsBAOBfLFmyJDsBAAAAAAAAAAAAAGgiNskOAAAAAAAAAAAAam/IkCFRWlqanQFNzllnnRXXXXddVFdXZ6cA0MBef/312HrrrbMz+IzNNtssevfuHVdccUV2Cs3Ut771reyEovXBBx9kJwAA/ItFixZlJxSVN954Ix599NHsDCg48+fPz04AAAAAAAAAAAAAasFwDwAAAAAAAAAANBFHHHFEdO/ePTsDmqSdd945hgwZEsOHD89OAaCBvfjii/Htb387O4P16NWrl+EeGkRZWVnsvvvu2RlFy8H4AECh+cc//pGdUFTefvvt6Nu3b3YGAAAAAAAAAAAAAGyQ0uwAAAAAAAAAAACgdgYNGhQlJSXZGdBknXbaaVFeXp6dAUADe/bZZ7MTqEH37t1js802y86gGTriiCN8biVasGBBdgIAwL94/fXXsxMAAAAAAAAAAAAAgCbCcA8AAAAAAAAAADQBxx9/fOyzzz7ZGdCktW/fPkaNGpWdAUADe+ihh2LdunXZGaxHmzZtom/fvtkZNEPf/e53sxOK2vz587MTAAD+xdy5c6Oqqio7AwAAAAAAAAAAAABoAgz3AAAAAAAAAABAEzBw4MDsBGgWTjzxxOjYsWN2BgANaP78+fHOO+9kZ1CDww47LDuBZmi//fbLTihq8+bNy04AAPg/Pvroo+wEAAAAAAAAAAAAAKAJMNwDAAAAAAAAAAAFrl+/frH77rtnZ0Cz0KZNmxg9enR2BgANbM6cOdkJ1GCfffaJzp07Z2fQjHTo0CG+/vWvZ2cUtZdeeik7AQDg/1i2bFl2AgAAAAAAAAAAAADQBBjuAQAAAAAAAACAAlZaWhr9+/fPzqAGS5cujffff/9f/qxduzY7iy/wox/9KPbZZ5/sDAAa0MyZM7MTqMEmm2wSp556anYGzchPf/rT2GSTTbIzitbq1atj1qxZ2RkAAP/Hhx9+mJ0AAAAAAAAAAAAAADQBhnsAAAAAAAAAAKCAnX322dGpU6fsDNZj8eLFsfPOO0f79u3/5c/NN9+cncYX2HTTTWPkyJHZGQA0oMcffzw7gc9xyCGHZCfQjPTs2TM7oagtWrQoOwEAYL0M9zSeNm3aZCcAAAAAAAAAAAAAwAYz3AMAAAAAAAAAAAWqrKws+vXrl51BDW688cZYunTp/3l5RUXFel9OYenZs6fRAIBmbNKkSQ5pLmC77LJLHHbYYdkZNAObbbZZ/Pu//3t2RlFbsGBBdgIAwHotW7YsO6FolJZ6qjIAAAAAAAAAAAAATZe7YQEAAAAAAAAAoECNGDEidthhh+wM1mPhwoUxZMiQ9b5u/vz5cfvttzdyEXVVWloaQ4cOzc4AoAG99NJL2Ql8jpNPPjk7gWbg5JNPjs022yw7o6j94x//yE4AAFiv9957LzuhaLRu3To7AQAAAAAAAAAAAAA2mOEeAAAAAAAAAAAoQOXl5dGnT5/sDGpw/fXXx6pVq2p8fUVFRSxevLgRi9gQXbt2jd69e2dnANBAZsyYkZ3A5zjwwANjxx13zM6giTvkkEOyE4re3LlzsxMAANZr/vz52QlFY9NNN81OAAAAAAAAAAAAAIANZrgHAAAAAAAAAAAK0PDhw6N9+/bZGazHvHnzYvjw4Z/7NosXL45bbrmlkYrYGAMHDozSUrfSATRHU6ZMyU7gc7Rq1Sp+9atfZWfQhG299dbRrVu37Iyi9+qrr2YnAACs19tvv52dUDTatGmTnQAAAAAAAAAAAAAAG8xpAwAAAAAAAAAAUGDatWsXJ554YnYGNbjqqquiqqrqC99uyJAhsXDhwkYoYmN87Wtfi0GDBmVnANAAHnjggVixYkV2Bp/jyCOPzE6gCTv99NOjdevW2RlFb9asWdkJAADr9eabb2YnFA1flwMAAAAAAAAAAADQlBnuAQAAAAAAAACAAjNq1Kho27Ztdgbr8cYbb8RFF11Uq7ddsWJF3HjjjQ0bRL3o27dvtGrVKjsDgHq2Zs2aeOmll7Iz+Bxf+cpX4he/+EV2Bk3UYYcdlp1Q9D755JOYNm1adgYAwHo9++yz2QlFY7PNNstOAAAAAAAAAAAAAIANZrgHAAAAAAAAAAAKSOfOneMnP/lJdgY1uPLKK6O6urrWb19RURHvvvtuAxZRH7785S/HmDFjsjMAaADPPPNMdgJf4Je//GV2Ak1Q9+7dY88998zOKHrz58+v0/dHAACNadmyZfHhhx9mZxSFsrKy6NixY3YGAAAAAAAAAAAAAGwQwz0AAAAAAAAAAFBAhg0bFm3atMnOYD1mz54d48aNq9P7rFmzJsaPH99ARdSnE088MXbcccfsDADq2aRJk7IT+AJ77bVXHH744dkZNDGnnXZalJSUZGcUvbfeeis7AQDgc73//vvZCUXj61//enYCAAAAAAAAAAAAAGwQwz0AAAAAAAAAAFAgunTpEkceeWR2BjX4zW9+s0HvN3LkyJg7d279xlDv2rZtG6NGjcrOAKCe/eEPf4gPP/wwO4Mv0L9//+wEmpDy8vI45JBDsjOIiNdffz07AQDgcy1atCg7oWjstNNO2QkAAAAAAAAAAAAAsEEM9wAAAAAAAAAAQIEYOXJktGzZMjuD9Zg5c2bccMMNG/S+1dXVce2119ZzEQ3h6KOPjr322is7A4B6NmvWrOwEvkD37t2jW7du2Rk0EQMHDozy8vLsDCJi9uzZ2QkAAJ9r4cKF2QlFY/vtt89OAAAAAAAAAAAAAIANYrgHAAAAAAAAAAAKQLdu3eLggw/OzqAGF1xwwUa9/9ixY+O1116rpxoaSsuWLWPEiBHZGQDUs2nTpmUn8AXKyspi0KBB2Rk0Ecccc0x2Av/rr3/9a3YCAMDn+sc//pGdUDQM9wAAAAAAAAAAAADQVBnuAQAAAAAAAACAAlBRUREtWrTIzmA9nnnmmbjzzjs3+nGuuuqqeqihof3gBz+Igw46KDsDgHp09913ZydQC7169Yru3btnZ1DgTj311OjUqVN2BhHx4YcfxjPPPJOdAQDwud54443shKKxww47ZCcAAAAAAAAAAAAAwAYx3AMAAAAAAAAAAMl69uwZPXv2zM5gPdatWxejRo2ql8e6/PLLY/bs2fXyWDScsrKyGDZsWHYGAPVoxowZMXfu3OwMvkBZWVkMGTIkO4MC91//9V/ZCfyvt956KzsBAOALzZo1KzuhaGy//fbZCQAAAAAAAAAAAACwQQz3AAAAAAAAAABAsoqKiigtdStPIfrzn/8cDz30UL093rhx4+rtsWg4++67bxx33HHZGQDUo+nTp2cnUAsHHnigQUtqdPzxx0eXLl2yM/hfr7zySnYCAMAXmjp1alRVVWVnFIVtt902OwEAAAAAAAAAAAAANojTPgAAAAAAAAAAINGPfvSj2G+//bIzWI+qqqoYPXp0vT7m9ddfHzNnzqzXx6RhnHfeedkJANSjJ554IjuBWigtLY3BgwdnZ1Cg+vfvn53Ap/zP//xPdgIAwBdatWpVLFy4MDujKLRv3z7Ky8uzMwAAAAAAAAAAAACgzgz3AAAAAAAAAABAokGDBkVJSUl2Buvx2GOPxaRJk+r9cS+99NJ6f0zq39e//vU466yzsjMAqCcTJkyIlStXZmdQC9/5znfi6KOPzs6gwPTu3Tv23nvv7Aw+ZfLkydkJAAC1Mm/evOyEolBaWhoHHnhgdgYAAAAAAAAAAAAA1JnhHgAAAAAAAAAASHL88cdH165dszNYjzVr1sTIkSMb5LFvvfXWmD59eoM8NvXrjDPOiBYtWmRnAFAPVqxYETNmzMjOoBZKSkpi2LBhUVrqVnf+P2effXZ2Ap+yZMmS+Mtf/pKdAQBQK3//+9+zE4rGnnvumZ0AAAAAAAAAAAAAAHXm2YwAAAAAAAAAAJDknHPOyU6gBhMnTmzQg6gvvvjiWLduXYM9PvVjxx13jMrKyuwMAOrJk08+mZ1ALe26664xZMiQ7AwKxJlnnhm77LJLdgafMmfOnOwEAIBae+ONN7ITisbXvva17AQAAAAAAAAAAAAAqDPDPQAAAAAAAAAAkKBfv36x2267ZWewHqtXr47Bgwc36DXuvvvuePrppxv0GtSPk08+Odq1a5edAUA9mDBhQlRXV2dnUEv9+vWL7bbbLjuDZOXl5TFgwIDsDD7jpZdeyk4AAKi11157LTuhaBjcBAAAAAAAAAAAAKApMtwDAAAAAAAAAACNrLS0NPr375+dQQ3uu+++ePHFFxv8OmPHjjUe0ARsueWWccEFF2RnAFAPXn311Xj55ZezM6ilrbfeOi6++OLsDJJdfPHF8eUvfzk7g8+YOnVqdgIAQK0988wz2QlFo1OnTtkJAAAAAAAAAAAAAFBnhnsAAAAAAAAAAKCRnX322Q6wK1ArV66MioqKRrnWww8/HJMnT26Ua7FxjjnmmOjSpUt2BgD14KmnnspOoA6OPvroOOSQQ7IzSNK1a9f42c9+lp3BZ3zyySdx7733ZmcAANTaiy++GEuXLs3OKApbbLFFdO/ePTsDAAAAAAAAAAAAAOrEcA8AAAAAAAAAADSisrKy6NevX3YGNbjjjjvi9ddfb7TrjRkzJqqqqhrtemyY1q1bx4gRI7IzAKgHt912W3YCdbDJJpvEJZdcEmVlZdkpJPjNb34TrVq1ys7gM1555ZVYsWJFdgYAQJ289dZb2QlFY//9989OAAAAAAAAAAAAAIA6MdwDAAAAAAAAAACNaMSIEbHDDjtkZ7Aey5Yti6FDhzbqNR9//PF47LHHGvWabJhDDz3UoZMAzcDUqVMbdaSPjfe1r30tLrvssuwMGtk555wT++23X3YG6/H8889nJwAA1Nmrr76anVA0vv3tb2cnAAAAAAAAAAAAAECdGO4BAAAAAAAAAIBGUl5eHn369MnOoAYTJkyIefPmNfp1KysrY82aNY1+XeqmrKwshg0blp0BQD2YMmVKdgJ1dPLJJ8d3vvOd7AwaSefOnWPgwIHZGdRg2rRp2QkAAHX20ksvZScUjS5dumQnAAAApGjbtm12AgAAAAAAAAAbyHAPAAAAAAAAAAA0kuHDh0f79u2zM1iPxYsXR0VFRcq1p02bFhMnTky5NnXzne98J44++ujsDAA20u23356dQB21bNkyrrrqqigrK8tOoRH89re/jS233DI7g/X45JNP4r//+7+zMwAA6uyvf/1rdkLR6NChQ+y6667ZGQAAAI1um222yU4AAAAAAAAAYAMZ7gEAAAAAAAAAgEbQrl27OPHEE7MzqMFNN90UixcvTrv+iBEjYvXq1WnXp3ZKSkri/PPPz84AYCM9/vjj8dZbb2VnUEddunSJ6667LjuDBjZkyJA48MADszOowUsvvRTLli3LzgAAqLMnnngiVq1alZ1RFEpKSoyfAwAARalVq1bZCQAAAAAAAABsIMM9AAAAAAAAAADQCEaNGhVt27bNzmA9Fi5cGIMHD05tmDFjRjz44IOpDdTOHnvsEaeffnp2BgAb6cknn8xOYAOccMIJcfzxx2dn0EC6desW55xzTnYGn2P69OnZCQAAG6S6ujrmzp2bnVE0evTokZ0AAADQ6HbYYYfsBAAAAAAAAAA2kOEeAAAAAAAAAABoYJ07d46f/OQn2RnU4Prrr49Vq1ZlZ8Tw4cNj5cqV2RnUwoABA6KsrCw7A4CNcOONN2YnsAHKysrioosuio4dO2anUM9atWoV48ePj9atW2en8DkeeeSR7AQAgA322muvZScUjW9961tRWurpywAAQHHZfvvtsxMAAAAAAAAA2EDufAUAAAAAAAAAgAY2bNiwaNOmTXYG6zFv3rwYPnx4dkZERMyePTvuu+++7Axq4Stf+UrBfN4AsGGmTp0ar7zySnYGG6B9+/Zx6623OgS6mbn99ttj1113zc7gcyxZsiTuv//+7AwAgA02e/bs7ISiscUWW8Rxxx2XnQEAANCodthhh+wEAAAAAAAAADaQZysCAAAAAAAAAEAD6tKlSxx55JHZGdTgqquuiqqqquyMfxo6dGgsX748O4Na+MUvfhFt27bNzgBgIzzyyCPZCWygbt26xfXXX5+dQT0ZOnRoHHbYYdkZfIFnn302OwEAYKNMmTIlO6Go+BofAAAoNttss012AgAAAAAAAAAbyHAPAAAAAAAAAAA0oJEjR0bLli2zM1iPN954Iy666KLsjH/x5ptvxp133pmdQS1ss802ccEFF2RnALARfv/73xfUgB918/Of/zzOPPPM7Aw20tFHHx3nnntudga18MQTT2QnAABslEceecRoeiPq3r17dgIAAECj2nbbbbMTAAAAAAAAANhAhnsAAAAAAAAAAKCBdOvWLQ4++ODsDGpw5ZVXRnV1dXbG/1FRURFLly7NzqAWjjvuuOjcuXN2BgAbaNasWTFz5szsDDZQSUlJjBgxInr16pWdwgbq1q1bXHPNNbHppptmp/AF1q5dGxMmTMjOAADYKNXV1TFnzpzsjKLRvn37OO6447IzAAAAGk3Hjh2zEwAAAAAAAADYQIZ7AAAAAAAAAACggVRUVESLFi2yM1iP2bNnx7hx47Iz1mv+/Plx++23Z2dQC5tttlmMGTMmOwOAjXD//fdnJ7ARvvSlL8UNN9wQXbp0yU6hjjp27Bi33XZbtG3bNjuFWvif//mfmD9/fnYGAMBGmzVrVnZCUfnpT3+anQAAANBodtppp+wEAAAAAAAAADaQ4R4AAAAAAAAAAGgAPXv2jJ49e2ZnUIPLLrssO+FzVVRUxOLFi7MzqIUf/vCH0a1bt+wMADbQVVddFcuXL8/OYCNst912cffdd8d2222XnUIttWvXLh588MHo0KFDdgq19Pjjj2cnAADUi2nTpmUnFJX9998/tt566+wMAACARrHddttFeXl5dgYAAAAAAAAAG8BwDwAAAAAAAAAANICKioooLXV7TiGaOXNmjB8/Pjvjcy1evDhuueWW7AxqoUWLFjFixIjsDAA20NKlS2Py5MnZGWykr33ta/Hggw86DK0JKC8vj4cffji6dOmSnUItrVu3Lm677bbsDACAenHffffF2rVrszOKRuvWreP000/PzgAAAGgUpaWl8b3vfS87AwAAAAAAAIAN4GQQAAAAAAAAAACoZz/60Y9iv/32y86gBmPHjs1OqJUhQ4bEwoULszOohQMOOCAOP/zw7AwANtCtt96anUA96Nq1a/zhD3+IFi1aZKdQgxYtWsRDDz0UXbt2zU6hDl5++eWYNWtWdgYAQL1YunRpvPHGG9kZReWYY47JTgAAAGg03/nOd7ITAAAAAAAAANgAhnsAAAAAAAAAAKCeDRo0KEpKSrIzWI9nnnkm7rjjjuyMWlmxYkXceOON2RnUQklJSQwePDg7A4ANdOedd8bbb7+dnUE9+M53vhOPPfaY8Z4CVF5eHk8++WR07949O4U6euKJJ7ITAADq1QsvvJCdUFR22WUX4z0AAEDR6Nq1a3YCAAAAAAAAABvAcA8AAAAAAAAAANSj448/3iEMBWrdunUxatSo7Iw6qaioiHfffTc7g1rYe++945e//GV2BgAb6IEHHshOoJ706NHDeE+Badu2bUyaNCm6deuWnUIdrVu3Lm6++ebsDACAevXMM89kJxSdU089NTsBAACgUXTp0iVKSx3nBAAAAAAAANDUbJIdAAAAAAAAAAAAzck555yTnUANpkyZEg899FB2Rp2sWbMmxo8fH0OHDs1OoRbOOuusuP7666O6ujo7BYA6uuyyy+LUU0+NTTfdNDuFetCjR4+YPHly9OrVK5YtW5adU9R23nnneOCBB2L33XfPTmEDvPTSS/Hcc89lZwAA1Kt77rknxo4d6yDlRvSd73wnunfvHlOnTs1O4TO23nrrOPnkk7Mzmp2VK1fGFVdckZ0BAECCzTffPA4//PC49957s1MAAAAAAAAAqAPDPQAAAAAAAAAAUE/69esXu+22W3YG61FdXR2jRo3KztggI0eOjBNPPDE6duyYncIX6NSpUwwePDhGjBiR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qsrOaHSVlZWxZs2a7AxqoW3btlFZWZmdAUAdDR8+PN57773sDApIaWlpdO3aNSorK+Ott96K6dOnx4UXXhh77bVXdlqNysrK4rjjjosbb7wxXn755fjrX/8a/fr1i1133TVKSkqy80h26623ZicAAKS67bbbshOIiK222iruueee6Nq1a3ZKs3DsscfGhRde6Hu+RvLcc89lJwAA/JPhnsK3+eabx+WXXx4PPPBAdOjQITsHAAAAAAAAoOgZ7gEAAAAAAAAAgFqqqKiI0lK33BSiN998My666KLsjBTTpk2LiRMnZmdQS0cffXR84xvfyM4AoA5WrVoVEyZMyM6gQLVo0SK6du0aZ511Vjz33HMxd+7ceOihh2LYsGHRrVu3tK527dpF796947rrrou//OUv8cEHH8Qtt9wSJ5xwQuyyyy4ObuaflixZEqNHj87OAABI9cADD8Tbb7+dnUFEbLvttnHPPff4GepGOvzww+O3v/1tbLrpptkpReOJJ57ITgAA+Kfly5dnJ1BLhx56aDz//PMxZsyYaNWqVXYOAAAAAAAAQNHaJDsAAAAAAAAAAACagh/96Eex3377ZWdQgyuuuCKqq6uzM9KMGDEivv/970fLli2zU/gCrVq1isrKyjj00EOzUwCog/PPPz+OPfbY2HbbbbNTKGAlJSXRoUOH6NChQxx88MFRUVERS5YsiXfeeSfmzp0br732WsyZMydmzJgRL7zwQr18/dqlS5fYbbfdolOnTrHrrrvGV7/61fjKV74S22+/fZSVldXDR0Vzd8cdd8SqVauyMwAA0j366KNxyimnZGcQETvttFP86U9/ih//+McxderU7Jwm57jjjourr746Nt988+yUorFy5UqjzwBAQVm9enV2AnWw5ZZbxjnnnBM/+9nP4vbbb4+xY8fG4sWLs7MAAAAAAAAAiorhHgAAAAAAAAAAqIVBgwZFSUlJdgbrMXv27Bg3blx2RqoZM2bEgw8+GD/+8Y+zU6iFH/zgB9GzZ8+YNGlSdgoAtbRq1aq48cYb45xzzslOoYnZaqutYquttopvfvOb//LyqqqqWLZsWSxZsiSWLl0aH374YVRVVcXHH38ca9eujY8//jgiIlq0aBGtWrWKiIjy8vLYfPPNY/PNN482bdrENttsE5tuumljf0g0I8uXL4+RI0dmZwAAFITx48fHySef7PcABWLbbbeN+++/P04++eS4//77s3OajDPOOCPGjh0bLVu2zE4pKjNmzIg1a9ZkZwAA/JOx9qZphx12iLPOOitOPfXUePLJJ+Puu++OCRMmRHV1dXYaAAAAAAAAQLNnuAcAAAAAAAAAAL7A8ccfH127ds3OoAaXXXZZdkJBGD58eBxyyCHRunXr7BS+QFlZWQwfPtxwD0ATU1FRET/72c9ihx12yE6hGSgrK4stt9wyttxyy+wUitidd94ZCxYsyM4AACgIzz77bMycOTP22muv7BT+11ZbbRW33XZbDB48OC699NLsnII3bty46Nevn/GpBI8++mh2AgDAv1i2bFl2AhuhTZs2ceihh8ahhx4al112WcyYMSOeeeaZePrpp2PSpEkpo5G77rpr7LnnntGpU6fo0KFDvPTSS3HllVc2egcAAAAAAABAQzHcAwAAAAAAAAAAX+Ccc87JTqAGM2fOjPHjx2dnFITZs2fHfffdF8cdd1x2CrWw7777xnHHHRcTJkzITgGgltasWRPjx4+PoUOHZqcAbLSVK1fG6NGjszMAAArKPffcY7inwLRq1Souuuii2H333eOUU06J6urq7KSCs/3228eECRPiP/7jP7JTitKaNWvixhtvzM4AAPgXS5cuzU6gnmy55ZZx4IEHxoEHHhgREZ988km89dZbMXfu3FiwYEEsWLAg3n333Zg3b14sWbIkVq9eHYsXL44PP/wwqqurY8stt/znY2222WaxxRZbRETEl770pWjbtm1sscUWseWWW8bmm28ebdq0ifLy8thmm21iq622iq222uqfr2/VqtW/dE2YMMFwDwAAAAAAANCsGO4BAAAAAAAAAIDP0a9fv9htt92yM6jBRRddlJ1QUIYOHRqHHXZYtGnTJjuFWjj33HMN9wA0MSNHjowTTjghvvrVr2anAGyU++67L958883sDACAgnLllVfGwIEDo7y8PDuFTykpKYmTTjop9t577/j5z38es2bNyk4qGMcee2xcdNFF8eUvfzk7pWjNnDkz5s2bl50BAPAvlixZkp1AA9l0001jl112iV122SU7BQAAAAAAAKBZKc0OAAAAAAAAAACAQlVaWhr9+/fPzqAG06dPj9tvvz07o6C8+eabceedd2ZnUEu77bZbnHnmmdkZANRBdXV1XHLJJdkZABtl+fLlMWTIkOwMAICCs2zZsnj88cezM6jBN77xjZg8eXKce+652Snptt566/jv//7vuOmmm4z2JHvssceyEwAA/o/33nsvOwEAAAAAAAAAmhTDPQAAAAAAAAAAUIOzzz47OnXqlJ3Beqxbty4qKyuzMwpSRUVFLF26NDuDWurfv3+UlZVlZwBQB1dffXU8//zz2RkAG+zOO++MuXPnZmcAABSk3/72t9kJfI4tttgiRo0aFU8//XR07do1O6fRlZaWxpAhQ+Kll16Ko48+2s+Wk1VVVcWtt96anQEA8H8sWrQoOwEAAAAAAAAAmhTDPQAAAAAAAAAAsB5lZWXRr1+/7AxqMGXKlHjooYeyMwrS/Pnz4/bbb8/OoJZ23HHHGDVqVHYGAHVUWVkZ69aty84AqLNly5bFsGHDsjMAAArWpEmTYtasWdkZfIF99903pkyZEjfccENsvfXW2TmNonfv3vHyyy/H8OHDo3379tk5RMTf/va3mDNnTnYGAMD/8Y9//CM7AQAAAAAAAACaFMM9AAAAAAAAAACwHiNHjowddtghO4P1qK6uNnTyBSoqKmLx4sXZGdTSySefHO3atcvOAKAO7rvvvnjiiSeyMwDq7Kabbop58+ZlZwAAFDTD6E1Dq1at4qSTToo5c+bEpZdeGuXl5dlJ9a60tDROP/30mDlzZowfPz7+7d/+LTuJT7nvvvuyEwAA1mvGjBnZCQAAAAAAAADQpBjuAQAAAAAAAACAzygvL4/evXtnZ1CDxx57LCZNmpSdUdAWL14ct9xyS3YGtbTVVlvFmDFjsjMAqKNzzjknVq1alZ0BUGsLFiyI8847LzsDAKDg/eY3v4n3338/O4Na2nrrreNXv/pVvPHGG3H55ZdHhw4dspM22vbbbx9jxoyJt956K8aNGxd77rlndhKf8dFHH8WVV16ZnQEAsF6LFy+Ojz76KDsDAAAAAAAAAJoMwz0AAAAAAAAAAPAZI0aMiPbt22dnsB5r1qyJUaNGZWc0CUOGDImFCxdmZ1BLP/nJT2K33XbLzgCgDmbMmBETJkzIzgCotauvvjpWrFiRnQEAUPDWrFkT9957b3YGdbT11ltHv3794uWXX4777rsvDj/88OykOikrK4u+ffvG448/Hm+88Uacc845sdNOO2VnUYMnn3zS91cAQEEzRgoAAAAAAAAAtWe4BwAAAAAAAAAAPqVdu3ZxwgknZGdQg4kTJ8bUqVOzM5qEFStWxI033pidQS21bt06KisrszMAqKOzzz7bUB7QJLz22msxevTo7AwAgCbjwgsvjFWrVmVnsAG+9KUvxWGHHRb33ntvvPXWW3HttdfGgQcemJ21Xh07doxzzz03HnnkkVi0aFFcccUVccABB0TLli2z0/gCxpwBgEL33nvvZScAAAAAAAAAQJNhuAcAAAAAAAAAAD5l9OjR0bZt2+wM1mP16tUxdOjQ7IwmpaKiIt59993sDGrp0EMPjR49emRnAFAHS5cujUsvvTQ7A+ALVVZWRnV1dXYGAECT8eabb8ajjz6ancFG+spXvhKnnHJKPPbYYzFv3ry455574swzz4xdd901pWfvvfeOgQMHxu233x4vvvhivPbaazFq1Kg46KCD/G6qCZk7d27cdddd2RkAAJ/LcA8AAAAAAAAA1N4m2QEAAAAAAAAAAFAoOnfuHMccc0x2BjV44IEHYtasWdkZTcqaNWti/PjxBo+aiLKyshg+fHgccMAB2SkA1MFFF10UxxxzTOy9997ZKQDrNXny5LjllluyMwAAmpxLLrkk/vM//zNKS0uzU6gH22+/fRxxxBFxxBFHxIUXXhjz5s2LN998M1599dV46aWX4oUXXojp06fHihUrNuo6LVq0iH322Sf22GOP+Ld/+7f46le/GjvuuGN06tQpttpqq3r6aMh0xx13ZCcAAHyhefPmZScAAAAAAAAAQJNhuAcAAAAAAAAAAP7XsGHDok2bNtkZrMfKlStj8ODB2RlN0siRI+PEE0+Mjh07ZqdQCz169Igf//jHcdddd2WnAFAHZ511VjzyyCPRokWL7BSAf/HJJ5/Eueeem50BANAkPfXUUzFlypTYf//9s1OoZyUlJbHTTjvFTjvtFP/xH//xz5evW7culixZEkuXLo2PPvooli1bFsuXL4+1a9fGunXr4uOPP47WrVtHRMRmm20WJSUl8aUvfSnatm0bW2yxRWy++eax+eabZ31YNIKPPvooLr744uwMAIAv9Morr2QnAAAAAAAAAECTYbgHAAAAAAAAAAAiokuXLnHkkUdmZ1CDu+66K15//fXsjCapuro6rr322hgzZkx2CrVQUlIS559/vuEegCZm8uTJcdttt8WJJ56YnQLwL2699dZ45plnsjMAAJqsSy+9NP7jP/4jSkpKslNoBCUl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N96II488Mqqrq7NTAACohdmzZ8f5558f69aty04BvkBVVVWceeaZficCABSVe++9NzsBAAAAAAAAAAqO4R4AAAAAAAAAAJql7t27R69evbIzqMEDDzwQzz//fHYG6zF//vy4/fbbszOog29/+9tx0kknZWcAsJGOOOKImDVrVnYGUEAWL14cP/3pT2PRokXZKQAA1ME111wTd911V3YG8AWuu+46/68CAEXnsssuiwULFmRnAAAAAAAAAEBBMdwDAAAAAAAAAECzNHjw4GjRokV2BuuxcuXKGDx4cHYGn6OioiIWL16cnUEdDBw4MDsBgI20atWqOPLII2PevHnZKUAB+Pjjj6N3797x3HPPZacAALAB+vTpE6+//np2BlCDZ555Jk4//fTsDACARldVVWW8EAAAAAAAAAA+w3APAAAAAAAAAADNTs+ePaNnz57ZGdTgrrvucmBhgVu8eHHccsst2RnUwS677BLnnHNOdgYAG+nNN9+M4447Lj744IPsFCBRVVVVnHnmmfGHP/whOwUAgA20YsWK6N27d6xYsSI7BfiMRYsWxYknnhjV1dXZKQAAKS666KJYuXJldgYAAAAAAAAAFAzDPQAAAAAAAAAANDsVFRVRWurWmEK0fPnyGDJkSHYGtTBkyJBYuHBhdgZ1cPrpp0erVq2yMwDYSE899VScfPLJ8fHHH2enAEkuuOCCuOaaa7IzAADYSFOnTo0hQ4bEunXrslOA/1VVVRUDBgyIV199NTsFACDNvHnz4pFHHsnOAAAAAAAAAICC4XQSAAAAAAAAAACalaOOOir222+/7AxqcMstt8S8efOyM6iFFStWxI033pidQR1sv/32UVlZmZ0BQD247777on///rFmzZrsFKCR/fa3vzV2CgDQjFx22WVx++23Z2cA/+uqq66KCRMmZGcAAKSrrKyM1atXZ2cAAAAAAAAAQEEw3AMAAAAAAAAAQLMycODAKCkpyc5gPZYsWRLDhg3LzqAOKioq4t13383OoA569+4d22+/fXYGAPVg/PjxMXTo0Fi3bl12CtBIbr/99ujbt292BgAA9ezEE0+M5557LjsDit4f//jH+NWvfpWdAQBQEJ5//vl48MEHszMAAAAAAAAAoCAY7gEAAAAAAAAAoNk44YQTomvXrtkZ1ODmm2+ORYsWZWdQB2vWrInx48dnZ1AHbdu2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L14c06ZNiyeffDKamppST6KXO378eKxevTpKS0vjrrvuihMnTqSeBAAAPVZnZ2esXLkyJk+eHLfeemvs2LEjOjs7U88ioa6urti5c2fceeedH4adhFIBAPi07dmzJ+69996YN29ejBo1Ku644454+umn480334wzZ86kngcAAAAAAABADybcAwAAAAAAAABAUl/84hdj0aJFqWfwMXbt2hUbN25MPYNe4Oc//3ns378/9QzO09e//vWYPXt26hkA9FC1tbVx++23x8SJE2PVqlVRW1ubehK9TFVVVfz4xz+OSy65JJYuXRrNzc2pJwEAQK/yy1/+MubNmxcLFiyIX/3qV665M9PQ0BDPPPNMXHnllXH55ZfHunXrUk8CAICIiGhra4snnngibrnllqioqIgRI0bEN7/5zVi3bl3s2LEj/vGPf6Se2Ou0t7dHVVVVbN68OZ577rnUcwAAAAAAAAD+o/qlHgAAAAAAAAAAQN7uu+++6NfP31i6o66urvjpT3+aega9yMMPP+zGfj3MwIEDY/ny5XHttdemngJAD9bY2Bh333133HPPPfG9730vFi9eHNOnT089ix6qs7Mzdu3aFevXr4+nnnoq9RwAAMjC1q1bY+vWrVFUVBRLly6NG264IS699NLUs7gA2tvbY+fOnfHss8/GY489Fh0dHaknAQDA/6mtrS02bdoUmzZt+vBYaWlpLFy4MGbOnBlTp06NSy65JEpKSmLAgAEJl/YMra2t8e6778ahQ4fi73//e7zxxhvx/PPPR2NjY+ppAAAAAAAAABeEO54AAAAAAAAAAJDMVVddFVdeeWXqGXyMbdu2xW9/+9vUM+hFnnjiiViyZElUVFSknsJ5uPrqq+Oaa66JP/zhD6mnANDDdXZ2xkMPPRQPPfRQXHvttXHHHXfEVVddFYWFhamn0QM0NzfH73//+3j00Udj+/btqecAAECWmpubY9myZbFs2bKYP39+3HbbbXH11VfHqFGjUk/j/6GrqysOHjwYL730Ujz++OOxf//+1JMAAOD/7dChQ7F27dqPHOvbt2/MmzcvZs2aFZMnT46JEyfGxRdfHGPGjIkxY8ZEv3753Iqpubk56uvr49ixY1FTUxPvvPNOVFdXx969e2PPnj2p5wEAAAAAAAB8qvL5tRgAAAAAAAAAgG7nvvvui4KCgtQz+Cc6OztjxYoV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"
					), a8l(7, "youtube", 7, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), a8l(8,
					"googleplay", 3,
					"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"
					), a8l(9, "discord", 7, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), a8l(10, "insta",
					3, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), a8l(11, "emojis", 4,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), a8l(12, "flags", 3,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), a8l(13, "bestTeam", 5,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), a8l(14, "bestPlayer", 5,
					"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"
					), a8l(15, "zoom", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuBAMAAACllzYEAAAAHlBMVEUAAAAhIyA3ODZTVVJrbWqEhoOkpqO8v7vX2tb///8goTJXAAABaElEQVQ4y32Tu1ODQBDGL8QAdlg5dml8dZTa2TijXQpnIh2TwoQOxwehi2PB0flKYP/b7HFv5nALBn5337d7ewshXZyuKX2PST8egUW76OE7EJFa+BhJ9bSsUWFaeTV3GKHbn8EvlB79bjSv4VO8jUr4VdiHNnK938MHPie0Yh+ZLqmGuNsJ7CNURgewI5qPoRE86GwkJyWIBIfcUfJrmMm0sclDyDnPWmLyADacl8jnRbEGKIoiJRP4EmU2LJmIDfLvAf7z/37mv6IUm08pzbV/rx5f1pPA1Fn/iX3eS3nekAslz7gcGw9bg3uqn6Rup5oH+uaTLpO4r0SmZVuUFE2lfTc+z1qr9+BVtGJqzq1RHNfQdAtnrEW75UwuXOFgvj3crpCyDu6UIpP9fPHZU5XkiYVXvsXIPcc+VwspzY2pPorE/NgCfYK+QJ5+QFA6fjQt2A4IWuIWODixe2ELcuIUNJGL+zQle92exY5pfDIaAAAAAElFTkSuQmCC"
					), a8l(16, "apple", 3,
					"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"
					), a8l(17, "loading", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEEAAAAKAQMAAADRpqGpAAAABlBMVEUAAAD///+l2Z/dAAAATklEQVQI12M48E/OzoinjoGB4cA/O3tjnn8g1iEjY+aeAxCWofGZBijLCMqqNzRKmQdhGRubNINZyeYQ1p9/yXbGMv9yG0AsG2OemtwGAJcsIuxbPF7gAAAAAElFTkSuQmCC"), a8l(18, "target",
					7,
					"iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAJFBMVEXUAADLSwDYWli/eQCzlQGgswDloaGC0wAA/wBk5wDx09P///8NUBuBAAADWElEQVRYw62YvW/aUBDADwghTRakqoJuTBmSBamNSjcyJSMZotINZciQLCxVnQ1EkO0N1ET1iDJkgCViyGD/c7UN8bv37t5Hq96EbH6+j3fv3d2DgJPw52Uqd+y7AJhnP05hI6WTOyfksQ1IPnhWJLwAWUrfLYjfBSJfjIjfBkYaBoQnVAYjYRc08lWHXIBW+jwy0RNQijjErxsQqHJID4xyTpF7MwEVirQtCHxUkYmNEBEAVyVCDbgqEWq2SNcBgQ5GpsrLw+UqSZbPAzZoG2QovdpN/7+R5xaTNjkSSgt/lAiJJaYmkImOUJiSQHCu7CeJnjl/Q7Bdu4kqr6ploKTXLUGSJ8UykON1lDDSkmMGUrKUOSJZC+TdBvHFk2MWSQbSTkuRsUWJpCbKkaE2wIw3/RwRrqx0yKL4SzNDQsOa0LWpZcjU5rxkWSVDxna7sGVRisz4eMUay/op0uPilW2UQ6wVbU0I6owrm7Qqr5jV3AsgZFx5paa+iJCBSBcmPvvUmWoAU7oqKD8KzbGIMkzoF1vcHi0eBTB6+3nAbcMy/U4EM7IfF8Dt0iJkHoNI59AB+VAfhqqnsXwMkiifQ09FXiWkTJCOQJgQs48Z5EVGiPIOdFVk8f+Rvb9Hmv/iiyvCRYxfFzCti/vqk4SRc2yfybGZPmelAwEhI/JyzXmPk39MTIg5V4S5AdzTtwNmh8Wi9onjoswcjbv02Q5/jj3RYrtGh1LAFeMBKbYLUS1BNEkH6Ay/yh7ccNWimSJDtiItn2/wKR6jBgOCkUt9EWvlpci9qbMgcS9lVcy3F2RkVzWvyHW7ZWvcXgBurY6tdmX9ZYqMrFUc7TovR6ZgC8BC6kizTgksamK5hwO5T7w1e5K3yhkyBmOvhM+PaIv4YGr7cD9aLTrYtqm5xEdBs0DmuKCstM1oHuIt4oOWeaIDGTCDxY2yb5TRArjx5XDJTgnbAWaDhOqAWL6+vr5S55eaNPLMXUYeT0J8B6KqjG9DO9JXELuaGhlF546eICS0TJYNZqw2D8mViJv3e26DOEZMpjU0FxFTLbGjvSF50Dni6e9hfvHztGe67Xmw6qB3So/k0mMnst1c+acyceZyP/aI9uiJ53alFvy+/JTa9/7zt8j1Fs4ifwCmXBmOYkld0AAAAABJRU5ErkJggg=="
					), a8l(19, "members", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABSVFGanJkA/wDMz8x4/3ey/7L///+GDHoaAAACZElEQVRIx9WWwYrjMAyGlVCYa6cs5JqGQh5gaObaDYU8QJnOA5SS66RN49dfSZZt2U2WZZeFXc9h2r9fZEmRJcPbLyz4d6GzMdM1/uXcG3PV0KehFVFnlh4Baoxdl8BEEkF7EcwUoN5pJ4HenRBMNV66C4QfxxI2nTKFhsYt5CgZC9FTawDIxbg4UKKUWevAuw1Aq/D7NUq6M9RbQ2zKhkwpKVnK2AWGRrCrc04lEpDfgyg1u8mh3EQqSGLoS5QXY/a4+XSKJIIwkkNQOIlTgFYUcQq59TuQcrwI0PDk+M3Hayh2+RcC1smkl3DDj1ltlMR5old38LutHT04l/BVAVfOSL9lnXelUBKaAltxt2gTv3Ft6w6k4sajdtf6zhLVHUHltzTwkIzvOUGf9PhOJJdVdphWS0YfFnJUCrVgISmdTVWVnVQa19+YV9VWKgohl2+MRUFKjaAXDX0tQCvt0+HPIJWnJajWGV9wPDPutPFhXs9CK+PLr1aJjSF+5aUzpOQY6mwZURWNCRRO9JZq43ikMtnog44v2LlojK1EW6n4zYXz4HqSb/gsty1qaWjAt5o7NAEiL7Jdu2vX7IqHLikEIYdzUJ5CZQQdJJcJ5GSE9i5tC1BNR4oadGub76ChwrZfKn48wTRXsGfrQvHFQr0dmy245o8nMYHGoxsToMZIAoWBA2qOzEMXmVJiK4nO2jn5oXju5yGZpn4Gf/QpNH08D+pn6O3vQqOGulkIX0+1fbXd93VT+dkXQe/SO3F1fkSnUBjgT7cEdVdJodkLTbNkKLr1NH1ApstPrkbnK/39B9e1H85NJPjxrK7zAAAAAElFTkSuQmCC"
					), a8l(20, "hourglass", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABKTEqZm5gA/wDJzMh3/3iz/7L///+iyVF/AAACjklEQVRIx72W3aqyQBSGJwk6dceGTv1C8AJEO60QvACJLkDI02xPrtvf75pJ58cx2iffIqT0aWb9vGuNIrft0hSX8WqZ4Etxg9HM+G4zQVdatOcEdSSrqkr3juFOVdMwQXQUC7YmAyVLUPQZ1PxtJSJ5js7KX7j/+pKkNR5Y0RE9Ij/6JMPFRFfebt0cOmbD7dZOEOwQgn7ssnwOrf8rJAMp8KFSrnwormcQCR8S1HpQgT8qVVXnVCsJS/tQzlV4mMpmJLUCXOi4I2mgmnotOAfqcJPiCUIGNsMMunJdEqMjbP+cQQcOrx+hnZ0BA5XsuTQuPUxwBoLnZj98Oxq/LaiTHNK4G34MAQj7jfGhQqeIfgJQzm7ofELccUZ5CDpQjKBO3LbUr+gZhAo8QhMl8FoCb4IQhkvyUt7JWciBCnhUa5VkJkkexEtxQ3KjPvMlqKD7hk7fdF/bHnlQfoUU4LglgBCElVCP+ztIbQfDdXk7OL5jqH/juE7BA4pBUZr8XTJZMadoKZklKlxriMvSBqGO4m8ejJmuy5AH9aTqq02CbwPQlfeYDH94ziEWilqDW5xniiUWq6VUjs6szFTnat5SHYuXdcnGAcTZrINLrpmZGJnqqXY26WLONJ7rfqm5qfwh1vXckPahAh8HD/Imjzt7xJgACLe3oZ01xYQ1Mo/umWmGprBOjcQ96cyEEtacc89DrDx6PkJQrHSh2kjdgh4ulH0C7YIQuS8P3nYlDa9ecg33OpUF8TqnFyB9UitIVujsALSmqp6g+/5fHKVpxQfQqM6q2ier7X5joFdAMX++YrEyMc6hgP0RkuoVZbvfTqfU6gs/VbZG6M3bmn5fE0pxb6x1Ori4eNbkY3f+AriuYpjQCOoxAAAAAElFTkSuQmCC"
					), a8l(21, "stalemate", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEoAAAAKAQMAAAApRlpeAAAABlBMVEUAAAD///+l2Z/dAAAAX0lEQVQI12P4/afiwJ+G9vnvDzD8/vPjwJ+D/SDmgYQTBw487mnmYYAwv4OZBUDmj/89zfwNDBWJfw78uDv/MJApAWQeODn/MFABR2LPgQMHZ4CYPxJ7/vwBMvkPIDEB8vo+S3L7oMwAAAAASUVORK5CYII="
					), a8l(22, "logo", 8,
					"iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxMAAAsTAQCanBgAAATzaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTEyLTIzVDE0OjQ0OjQ2KzAzOjMwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyZTU0YWVlOS01ZDdhLWQ3NDgtYTRjYS0yODQ1NmQ1ZWFlZDYiIHhtcE1NOkRvY3Vt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"
					)
		}
	}, this.get = function(ke) {
		return gL[ke]
	}, this.a76 = function(name) {
		for (var a0 = ur.length - 1; 0 <= a0; a0--)
			if (ur[a0] === name) return gL[a0];
		return a8f
	}, this.ps = function() {
		return a8e <= 0
	}, this.a8h = function() {
		a8e = 0, a8i()
	}
}

function cA() {
	var a8v, a8w, a8x, a8y, a8z, a90, a91, a92, a93, a94, a95, a8s = [224, 224, 224],
		a8t = [
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
		a8u = [
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

	function a9R(f4, a9T) {
		a5X[f4] = 0, a5X[f4 + 1] = 0, a5X[f4 + 2] = a9T, a5X[f4 + 3] = 0, a9U(f4)
	}

	function a9U(f4) {
		var ff;
		bP.ll || (ff = aS.kv(f4), f4 = aS.kw(f4), bP.ll = ff >= bO.a5W[0] && ff <= bO.a5W[2] && f4 >= bO.a5W[1] && f4 <= bO.a5W[3])
	}
	this.dD = function(su) {
		if (a8v = new Uint8Array(a2.f1), a8w = new Uint8Array(a2.f1), a8x = new Uint8Array(a2.f1), a8y = new Uint8Array(a2.f1), a8z = new Uint8Array(a2.f1), a90 = new Uint8Array(a2.f1), a91 = new Uint8Array(a2.f1), a92 = new Uint8Array(a2.f1),
			a93 = new Uint8Array(a2.f1), a94 = new Uint8Array(a2.f1), this.a2J = new Uint8Array(a2.f1), (a95 = new Int32Array(4))[0] = -4 * bI.eS, a95[1] = 4, a95[2] = -a95[0], a95[3] = -a95[1], a2.hl)
			for (var jZ, ik, a0 = a2.f1 - 1; 0 <= a0; a0--) ik = bU.up[bU.il[a0]], jZ = bB.el((a8u[ik][3] + 1) * ao.random(), ao.value(100)), a8v[a0] = a8t[ik][0] + jZ * a8u[ik][0], a8w[a0] = a8t[ik][1] + jZ * a8u[ik][1], a8x[a0] = a8t[ik][2] +
				jZ * a8u[ik][2];
		else ay.j7 && ay.j8.a9C ? function(e5) {
			var a0;
			for (a0 = a2.sE - 1; 0 <= a0; a0--) a8v[a0] = 4 * e5[a0][0], a8w[a0] = 4 * e5[a0][1], a8x[a0] = 4 * e5[a0][2]
		}(ay.j8.a9C) : (function() {
			for (var a0 = a2.f1 - 1; a0 >= a2.ip; a0--) a8v[a0] = 4 * bB.el(64 * ao.random(), ao.value(100)), a8w[a0] = 4 * bB.el(64 * ao.random(), ao.value(100)), a8x[a0] = 4 * bB.el(64 * ao.random(), ao.value(100))
		}(), function(su) {
			for (var a0 = a2.ip - 1; 0 <= a0; a0--) a8v[a0] = 4 * su[a0].a8T[0], a8w[a0] = 4 * su[a0].a8T[1], a8x[a0] = 4 * su[a0].a8T[2]
		}(su));
		! function() {
			var a0, f6;
			for (a0 = a2.f1 - 1; 0 <= a0; a0--) f6 = bB.el(a8v[a0] + a8w[a0] + a8x[a0], 3), a8v[a0] += a9L(f6 - a8v[a0], 2), a8w[a0] += a9L(f6 - a8w[a0], 2), a8x[a0] += a9L(f6 - a8x[a0], 2), a8v[a0] -= a8v[a0] % 4, a8w[a0] -= a8w[a0] % 4, a8x[
				a0] -= a8x[a0] % 4
		}(),
		function() {
			for (var a0 = a2.f1 - 1; 0 <= a0; a0--) a8v[a0] += bB.el(a0, 128), a8w[a0] += bB.el(a0 % 128, 32), a8x[a0] += bB.el(a0 % 32, 8), a8y[a0] = a0 % 8
		}(), this.a9I(),
			function() {
				for (var a0 = a2.f1 - 1; 0 <= a0; a0--) a8z[a0] = a8v[a0] < 32 ? a8v[a0] + 32 : a8v[a0] - 32, a90[a0] = a8w[a0] < 32 ? a8w[a0] + 32 : a8w[a0] - 32, a91[a0] = a8x[a0] < 32 ? a8x[a0] + 32 : a8x[a0] - 32
			}(),
			function() {
				for (var a0 = a2.f1 - 1; 0 <= a0; a0--) a92[a0] = 235 < a8v[a0] ? a8v[a0] - 20 : a8v[a0] + 20, a93[a0] = 235 < a8w[a0] ? a8w[a0] - 20 : a8w[a0] + 20, a94[a0] = 235 < a8x[a0] ? a8x[a0] - 20 : a8x[a0] + 20
			}()
	}, this.a1K = function(player) {
		var e5 = bE.dy;
		return e5[0] = a8v[player], e5[1] = a8w[player], e5[2] = a8x[player], e5
	}, this.a9I = function() {
		for (var a0 = a2.f1 - 1; 0 <= a0; a0--) this.a2J[a0] = a8v[a0] + a8w[a0] + a8x[a0] < 280 ? 0 : 1
	}, this.kv = function(f4) {
		return bB.el(f4, 4) % bI.eS
	}, this.kw = function(f4) {
		return bB.el(f4, 4 * bI.eS)
	}, this.sL = function(ff, fg) {
		return Math.floor(4 * (fg * bI.eS + ff))
	}, this.sa = function(f4) {
		return this.rt(f4 + a95[0]) || this.rt(f4 + a95[1]) || this.rt(f4 + a95[2]) || this.rt(f4 + a95[3])
	}, this.sY = function(f4, player) {
		return this.a9M(f4 + a95[0], player) || this.a9M(f4 + a95[1], player) || this.a9M(f4 + a95[2], player) || this.a9M(f4 + a95[3], player)
	}, this.uN = function(player) {
		return player < a2.ip && 2 !== aX.xu[player]
	}, this.f7 = function(f4) {
		return 208 <= a5X[f4 + 3]
	}, this.sf = function(player, f4) {
		return this.f7(f4) && this.a9N(player, f4)
	}, this.a9N = function(player, f4) {
		return player === this.f8(f4)
	}, this.a9O = function(f4) {
		return 208 <= a5X[f4 + 3] && a5X[f4 + 3] < 224
	}, this.hu = function(f4) {
		return 224 <= a5X[f4 + 3] && a5X[f4 + 3] < 248
	}, this.sZ = function(f4) {
		for (var a0 = 3; 0 <= a0; a0--)
			if (this.g3(f4 + a95[a0])) return !0;
		return !1
	}, this.a9P = function(f4) {
		return 192 <= a5X[f4 + 3] && a5X[f4 + 3] < 208
	}, this.a9Q = function(f4, player) {
		return this.a9P(f4) && player === this.f8(f4)
	}, this.ez = function(f4) {
		return this.f7(f4) || this.f9(f4)
	}, this.g3 = function(f4) {
		return 0 === a5X[f4 + 3] && 2 === a5X[f4 + 2]
	}, this.f9 = function(f4) {
		return 0 === a5X[f4 + 3] && 1 === a5X[f4 + 2]
	}, this.rt = function(f4) {
		return 0 === a5X[f4 + 3] && 3 === a5X[f4 + 2]
	}, this.g2 = function(f4) {
		return this.rt(f4)
	}, this.a9M = function(f4, player) {
		return this.f9(f4) || this.f7(f4) && player !== this.f8(f4)
	}, this.f8 = function(f4) {
		return a5X[f4] % 4 * 128 + a5X[f4 + 1] % 4 * 32 + a5X[f4 + 2] % 4 * 8 + a5X[f4 + 3] % 8
	}, this.sg = function(f4) {
		a9R(f4, 1)
	}, this.a9S = function(f4) {
		a9R(f4, 2)
	}, this.sX = function(f4, player) {
		a5X[f4] = a8v[player], a5X[f4 + 1] = a8w[player], a5X[f4 + 2] = a8x[player], a5X[f4 + 3] = 208 + a8y[player], a9U(f4)
	}, this.f0 = function(f4, player) {
		a5X[f4] = a8z[player], a5X[f4 + 1] = a90[player], a5X[f4 + 2] = a91[player], a5X[f4 + 3] = 224 + a8y[player], a9U(f4)
	}, this.hv = function(f4, player) {
		a5X[f4] = a92[player], a5X[f4 + 1] = a93[player], a5X[f4 + 2] = a94[player], a5X[f4 + 3] = 248 + a8y[player], a9U(f4)
	}, this.a9V = function(f4, player) {
		a5X[f4] = a8s[0] + a8v[player] % 4, a5X[f4 + 1] = a8s[1] + a8w[player] % 4, a5X[f4 + 2] = a8s[2] + a8x[player] % 4, a5X[f4 + 3] = 192 + a8y[player], a9U(f4)
	}
}

function cB() {
	var ur, ev, ex, a9W, a9X;

	function a9c() {
		for (var a9k = 0, a0 = 1; a0 < 5; a0++) a9k += ev[a0] % 1024;
		return a9k
	}

	function a9b() {
		for (var a0 = 1; a0 < ex - a9X; a0++) ev[a0] = parseInt(ev[a0])
	}

	function a9d() {
		ev[0] = "Player " + Math.floor(1e3 * Math.random()), ev[1] = an.u < an.iE ? Math.floor(1 + Math.random() * (Math.pow(2, 30) - 1)) : 0, ev[2] = 1, ev[3] = 1, ev[4] = an.u < an.iE ? 0 : 1, ev[5] = 0, ev[6] = "000", ev[7] = "0", ev[8] = "0", ev[
			9] = "0", aT.a9e()
	}

	function a9a() {
		for (var a0 = ex - a9X - 1; 0 <= a0; a0--) ev[a0] = a9.u5(ev[a0]);
		ev[0] = a9.u3(ev[0])
	}

	function a9n(name, value, a9o) {
		var x4 = new Date,
			a9o = (x4.setTime(x4.getTime() + Math.floor(31536e6 * a9o)), name + "=" + value + ";expires=" + x4.toUTCString() + ";SameSite=Strict;Secure;path=/");
		document.cookie = a9o
	}
	this.dD = function() {
		if (0 === m.id) {
			a9X = 4, ur = [], ex = 10;
			for (var a0 = a9W = 0; a0 < ex; a0++) ur.push("u" + a0);
			ev = new Array(ex), ! function(a9l) {
				for (var hy, f4, a9m = a9l.split(";"), a0 = a9m.length - 1; 0 <= a0; a0--) {
					for (a9m[a0] = a9m[a0].trim(), hy = 2; 0 <= hy; hy--) a9m[a0] = a9m[a0].replace(" ", "");
					3 < a9m[a0].length && (hy = ur.indexOf(a9m[a0].substring(0, 2)), f4 = a9m[a0].indexOf("="), 0 <= hy && 2 === f4 ? ev[hy] = a9m[a0].substring(f4 + 1, a9m[a0].length) : 0 < f4 && a9n(a9m[a0].substring(0, f4), "0", 0))
				}
			}(document.cookie), ev[9] || (ev[9] = "0"), (! function() {
				for (var a0 = ex - 1; 0 <= a0; a0--)
					if (void 0 === ev[a0]) return;
				return 1
			}() || (a9W = 2, a9a(), a9b(), a9c() !== ev[5])) && a9d()
		}
	}, this.a9e = function() {
		if (2 === a9W) {
			ev[1] = 0 === ev[1] ? Math.floor(1 + Math.random() * (Math.pow(2, 30) - 1)) : ev[1], ev[5] = a9c(), ! function() {
				for (var a0 = 1; a0 < ex - a9X; a0++) ev[a0] = ev[a0].toString()
			}(), ! function() {
				ev[0] = a9.u2(ev[0]);
				for (var a0 = ex - a9X - 1; 0 <= a0; a0--) ev[a0] = a9.u4(ev[a0])
			}();
			for (var a0 = ex - 1; 0 <= a0; a0--) a9n(ur[a0], ev[a0], 1);
			a9a(), a9b()
		}
	}, this.a9W = function() {
		return a9W
	}, this.a9i = function(hy) {
		a9W = hy, this.a9e()
	}, this.a9j = function(a0, value) {
		0 === m.id && (ev[a0] = value)
	}, this.vg = function(a0) {
		return 0 !== m.id ? 0 : ev[a0]
	}
}

function cZ() {
	var ke = 0,
		a9p = new Uint16Array(32);

	function remove(zL) {
		var a0;
		for (ke -= 2, a0 = zL; a0 < ke; a0 += 2) a9p[a0] = a9p[a0 + 2], a9p[a0 + 1] = a9p[a0 + 3]
	}
	this.dD = function() {
		ke = 0
	}, this.ha = function() {
		var a0, hr, h5;
		if (0 !== ke)
			if (0 === aX.kW[a2.es] || aU.a9q(a2.es) === aU.eX(a2.es)) ke = 0;
			else
				for (a0 = ke - 2; 0 <= a0; a0 -= 2)(hr = a9p[a0]) < a2.f1 && 0 === aX.kW[hr] ? remove(a0) : (h5 = a9p[a0 + 1], (hr >= a2.f1 && a9r(a2.es) || hr < a2.f1 && a9s(a2.es, hr)) && (b0.g0.g9(h5, hr), remove(a0)))
	}, this.gB = function(hr, h5) {
		! function(hr, h5) {
			var a0;
			for (a0 = 0; a0 < ke; a0 += 2)
				if (a9p[a0] === hr) return a9p[a0 + 1] = Math.min(a9p[a0 + 1] + h5, 1023), 1;
			return
		}(hr, h5) && 32 !== ke && (a9p[ke] = hr, a9p[ke + 1] = h5, ke += 2)
	}
}

function a9u(player) {
	a9v(player), a9w(player), a9x(player), a4.er(player), a6.kg(player), aU.clear(player), bD.a9y.a9z(player)
}

function a9v(player) {
	aS.uN(player) && (aX.v9[player] = bW.v3.aA0(), a2.uW++);
	var aA1 = aU.aA2(player);
	0 === aA1.length ? b2.en.xv(player) && aA3() : (aA4(player, aA1), aA5(player, aA1))
}

function aA3() {
	bR.ev[17] += aX.et[a2.es] + aU.aA6(a2.es), aM.show(!1, !1, !1, !0), aL.a4p(), bH.result.vD()
}

function aA4(player, aA1) {
	for (var a0 = aA1.length - 1; 0 <= a0; a0--) aU.aA7(aA1[a0], player)
}

function aA8(aA1) {
	for (var ke = 0, a0 = aA1.length - 1; 1 <= a0; a0--) aX.ep[aA1[a0]] > aX.ep[aA1[ke]] && (ke = a0);
	return ke
}

function aA5(player, aA1) {
	var a0, a0r, aA9 = aA1[aA8(aA1)];
	if (9 === a2.jB && 1 === bU.il[player] && ao.ie(8) && ap.aAA(aA9), b2.en.xv(player)) aC.ug(aA9, 1), aA3();
	else {
		for (a0r = !1, a0 = aA1.length - 1; 0 <= a0; a0--)
			if (b2.en.xv(aA1[a0])) return a0r = !0, void aC.ug(player, 0);
		!a0r && player < a2.ip && 2 !== aX.xu[player] && aC.a0a(0, player, aA9)
	}
}

function a9x(player) {
	aX.kW[player] = aX.et[player] = 0, aX.ey[player] = null, aX.fF[player] = null, aX.fG[player] = null, aX.fJ[player] = null
}

function a9w(player) {
	for (var f4, fg, ff = aX.hK[player]; ff >= aX.hJ[player]; ff--)
		for (fg = aX.hM[player]; fg >= aX.hL[player]; fg--) f4 = 4 * (fg * bI.eS + ff), aS.sf(player, f4) && (aS.sg(f4), aX.ep[player]--)
}

function ce() {
	var input;

	function aAB(d) {
		aAD(d.target.files)
	}

	function aAD(files) {
		files && 0 < files.length && ax.aAE(files[0])
	}

	function aAJ(d) {
		var ik = new Image;
		ik.onload = aAK, ik.src = d.target.result
	}

	function aAK(d) {
		var aAL, d = d.target,
			u = d.width,
			iE = d.height;
		4096 < u || 4096 < iE || u < 10 || iE < 10 ? (aAL = "Image w & h must be between 10 and 4096.", m.t ? m.t.showToast(aAL) : alert(aAL)) : (ay.wY(), bI.s2 = bI.aAI(), bI.a7t = 0, bI.eS = u, bI.eT = iE, bI.rh.width = bI.eS, bI.rh.height = bI.eT,
			bI.rd.drawImage(d, 0, 0), aAL = bI.rd.getImageData(0, 0, bI.eS, bI.eT), bI.ri = aAL.data)
	}

	function aAM(d) {
		d.stopPropagation(), d.preventDefault()
	}

	function aAN() {
		return 0 === aP.vn() || 2 === aP.vn()
	}
	this.dD = function() {
		(input = document.createElement("input")).type = "file", input.setAttribute("accept", ".json, .png, .jpg, .gif, .jpeg"), input.onchange = aAB
	}, this.a8V = function() {
		input.click()
	}, this.aAC = function(d) {
		aAB(d)
	}, this.aAE = function(aAF) {
		var e5 = aAF.name.split("."),
			aAG = e5[e5.length - 1].toLowerCase();
		"json" === aAG ? ay.qa(aAF) : "gif" !== aAG && "jpg" !== aAG && "jpeg" !== aAG && "png" !== aAG || (bI.j8.s1[bI.aAI()].name = e5[0], (aAG = new FileReader).onload = aAJ, aAG.readAsDataURL(aAF))
	}, this.wH = function(d) {
		aAN() && (aAM(d), d.dataTransfer.dropEffect = "copy")
	}, this.wI = function(d) {
		aAN() && (aAM(d), aAD(d.dataTransfer.files))
	}
}

function cc() {
	this.aAO = null, this.dD = function() {
		10 !== a2.jB ? this.aAO = null : this.aAO = new Uint32Array(a2.f1)
	}, this.ha = function() {
		10 === a2.jB && this.vt()
	}, this.vt = function() {
		for (var f4, target, a4z, aAO = this.aAO, su = is, xz = aX.et, a0 = iq - 1; 0 <= a0; a0--)(f4 = su[a0]) >= a2.ip || (target = Math.max(bB.el(xz[f4], 4), 2048), a4z = Math.max(aV.a50(f4), 100), aAO[f4] += bB.el(a4z * target, 1e4), aAO[
			f4] > target && (aAO[f4] = target))
	}, this.y4 = function(player, hs) {
		return hs > this.aAO[player] ? (hs = this.aAO[player], this.aAO[player] = 0) : this.aAO[player] -= hs, hs
	}
}

function cf() {
	function aAJ(d) {
		ay.j7 = !0, ay.aAU(JSON.parse(d.target.result)), ay.uY()
	}

	function aAa(oD, min, max, aAj) {
		return "string" != typeof oD || oD.length < min ? aAj : oD.length > max ? oD.substring(0, max) : oD
	}

	function aAV(dr, min, max) {
		return dr = "number" == typeof dr ? Math.floor(dr) : min, Math.min(Math.max(dr, min), max)
	}

	function aAY(dr, qY) {
		return "boolean" == typeof dr ? dr : qY
	}

	function aAc(dr, ex, max, aAl) {
		var a0, e5, jZ;
		if (!Array.isArray(dr) || dr.length < 1) return null;
		for (e5 = new(8 === aAl ? Uint8Array : Uint16Array)(ex), jZ = dr.length, a0 = 0; a0 < ex; a0++) e5[a0] = aAV(dr[a0 % jZ], 0, max);
		return e5
	}
	this.j7 = !1, this.j8 = null, this.wY = function() {
		this.j7 = !1, this.j8 = null
	}, this.a8S = function() {
		this.j8.a9C && this.j8.aAP && (this.j8.a9C[0] = b2.color.xU(bX.k8.qq())), a2.yp(this.j8.aAQ, 0, this.aAR(), this.j8.ys, !1, !1)
	}, this.aAR = function() {
		return [{
			name: this.j8.aAS ? bX.dV.data[122].value : this.j8.aAT[0],
			a8T: [0, 0, 0],
			a8U: 0
		}]
	}, this.qa = function(aAF) {
		var aAH = new FileReader;
		aAH.onload = aAJ, aAH.readAsText(aAF)
	}, this.aAU = function(oM) {
		this.j8 = {}, this.j8.a8Q = aAV(oM.numberPlayers, 1, 512), this.j8.aAW = aAV(oM.modeID, 0, 1), this.j8.s2 = aAV(oM["gMap.mapID"], 0, bI.aAX - 1), this.j8.a7x = aAV(oM.seedMap, 0, 16383), this.j8.aAQ = aAV(oM.seedSpawn, 0, 16383), this.j8
			.yv = aAY(oM.selectableSpawn, !1), this.j8.aAS = aAY(oM.selectableName, !1), this.j8.aAP = aAY(oM.selectableColor, !1), bI.j8.s1[bI.aAI()].name = this.j8.aAZ = aAa(oM.mapName, 1, 25, "Custom Map"), this.j8.a0F = function(dr) {
				var a0, ex;
				if (!Array.isArray(dr) || dr.length < 1) return [];
				for (ex = dr.length, a0 = 0; a0 < ex; a0++) dr[a0] = aAa(dr[a0], 0, 100, "");
				return dr
			}(oM.description), this.j8.s9 = aAc(oM.playerX, this.j8.a8Q, 4096, 16), this.j8.sK = aAc(oM.playerY, this.j8.a8Q, 4096, 16), this.j8.aAd = aAc(oM.playerTeam, this.j8.a8Q, 8, 8), this.j8.j9 = aAc(oM.playerStrength, this.j8.a8Q, 5, 8),
			this.j8.a9C = function(dr, ex) {
				var a0, e5, jZ;
				if (!Array.isArray(dr) || dr.length < 1) return null;
				for (e5 = new Array(ex), jZ = dr.length, a0 = 0; a0 < ex; a0++) e5[a0] = aAc(dr[a0 % jZ], 3, 63, 8);
				return e5
			}(oM.playerColor, this.j8.a8Q), this.j8.aAT = function(dr, ex) {
				var a0, e5, jZ;
				if (!Array.isArray(dr) || dr.length < 1) return null;
				for (e5 = new Array(ex), jZ = dr.length, a0 = 0; a0 < ex; a0++) e5[a0] = aAa(dr[a0 % jZ], 3, 26, "Bot");
				return e5
			}(oM.playerName, this.j8.a8Q), this.j8.aAg = "string" == typeof oM.mapBase64 ? oM.mapBase64 : "", this.j8.aAS = this.j8.aAS || !this.j8.aAT, this.j8.ys = 0 === this.j8.aAW ? 7 : 2 === this.j8.aAW ? 9 : 6, this.j8.s9 = this.j8.sK ?
			this.j8.s9 : null
	}, this.uY = function() {
		! function(oD) {
			var gL, gI, aAi = "data:image/png;base64,";
			if (oD.length <= aAi.length) return;
			ay.j8.s2 = 0, ay.j8.a7x = 0, bI.w(0, 0), oD.substring(0, aAi.length) !== aAi && (oD = aAi + oD);
			return (gL = new Image).onload = function() {
				bI.eS = gL.width, bI.eT = gL.height, 4096 < bI.eS || 4096 < bI.eT || bI.eS < 10 || bI.eT < 10 ? (bI.w(0, 0), alert("Image w & h must be between 10 and 4096.")) : (bI.s2 = bI.aAI(), bI.a7t = 0, bI.rh.width = bI.eS, bI.rh
					.height = bI.eT, bI.rd.drawImage(gL, 0, 0), gI = bI.rd.getImageData(0, 0, bI.eS, bI.eT), bI.ri = gI.data)
			}, gL.src = oD, ay.j8.aAg = "", 1
		}(this.j8.aAg) && bI.w(this.j8.s2, this.j8.a7x)
	}, this.aAm = function() {
		for (var max = 0, ex = this.j8.a8Q, a0 = 0; a0 < ex; a0++) this.j8.aAd[a0] > max && (max = this.j8.aAd[a0]);
		return Math.max(0, max - 1)
	}
}

function cC() {
	var aAn, aAo, size, hr, hs, id, aAp;

	function aAq(player) {
		return player < a2.ip ? aAn * player : aAn * a2.ip + aAo * (player - a2.ip)
	}
	this.dD = function() {
		aAn = a2.ip < 16 ? 12 : 8, aAo = 4;
		var ex = aAq(a2.f1);
		size = new Uint8Array(a2.f1), hr = new Uint16Array(ex), hs = new Uint32Array(ex), id = new Uint16Array(ex), aAp = new Uint8Array(ex)
	}, this.o4 = function(a1r, aAr) {
		var aAs = this.fb(a1r, aAr);
		this.fa(a1r, aAr, 0), aAs = b2.en.nM(a1r, aAs), a1r === a2.es && (bR.ev[13] -= aAs)
	}, this.clear = function(player) {
		size[player] = 0
	}, this.aA7 = function(player, aAr) {
		var aAu, aAr = function(player, aAr) {
			var a0, jZ = aAq(player);
			for (a0 = size[player] - 1; 0 <= a0; a0--)
				if (0 === id[jZ + a0] && hr[jZ + a0] === aAr) return a0;
			return size[player]
		}(player, aAr);
		aAr !== size[player] && (aAu = hs[aAq(player) + aAr], this.ew(player, aAr), this.ho(player, aAu, a2.f1))
	}, this.i6 = function(player, aAr) {
		for (var jZ = aAq(player), a0 = size[player] - 1; 0 <= a0; a0--)
			if (0 === id[jZ + a0] && hr[jZ + a0] === aAr) return !0;
		return !1
	}, this.iP = function(player) {
		return player < a2.ip ? size[player] < aAn : size[player] < aAo
	}, this.eX = function(player) {
		return size[player]
	}, this.ed = function(player, a0) {
		return hr[aAq(player) + a0]
	}, this.eY = function(player, a0) {
		return id[aAq(player) + a0]
	}, this.l0 = function(player, aAv) {
		for (var jZ = aAq(player), a0 = size[player] - 1; 0 <= a0; a0--)
			if (id[jZ + a0] === aAv) return a0;
		return -1
	}, this.ee = function(player, a0) {
		return hs[aAq(player) + a0]
	}, this.fb = function(player, aAr) {
		for (var jZ = aAq(player), a0 = size[player] - 1; 0 <= a0; a0--)
			if (0 === id[jZ + a0] && hr[jZ + a0] === aAr) return hs[jZ + a0];
		return 0
	}, this.aA6 = function(player) {
		for (var jZ = aAq(player), dr = 0, a0 = size[player] - 1; 0 <= a0; a0--) dr += hs[jZ + a0];
		return dr
	}, this.aAw = function(player) {
		for (var jZ = aAq(player), dr = 0, a0 = size[player] - 1; 0 <= a0; a0--) 0 === id[jZ + a0] && (dr += hs[jZ + a0]);
		return dr
	}, this.a9q = function(player) {
		for (var jZ = aAq(player), jL = 0, a0 = size[player] - 1; 0 <= a0; a0--) 0 < id[jZ + a0] && jL++;
		return jL
	}, this.fa = function(player, aAr, aAu) {
		for (var jZ = aAq(player), a0 = size[player] - 1; 0 <= a0; a0--) 0 === id[jZ + a0] && hr[jZ + a0] === aAr && (hs[jZ + a0] = aAu)
	}, this.fM = function(player, a0, aAu) {
		hs[aAq(player) + a0] = Math.max(aAu, 0)
	}, this.fN = function(player, a0) {
		aAp[aAq(player) + a0] = 0
	}, this.ef = function(player, a0) {
		return aAp[aAq(player) + a0]
	}, this.ho = function(player, aAu, aAr) {
		var a0, jZ = aAq(player);
		for (aAr === a2.es && bR.ev[player < a2.ip ? 6 : 5]++, a0 = size[player] - 1; 0 <= a0; a0--)
			if (0 === id[jZ + a0] && hr[jZ + a0] === aAr) return hs[jZ + a0] += aAu, void(hs[jZ + a0] = hs[jZ + a0] > a2.y0 ? a2.y0 : hs[jZ + a0]);
		hr[jZ + size[player]] = aAr, hs[jZ + size[player]] = aAu, id[jZ + size[player]] = 0, aAp[jZ + size[player]] = 1, size[player]++, player < a2.ip && (aAr === a2.es ? aC.ug(player, 5) : player === a2.es && aW.a0c(aAr))
	}, this.aAx = function(player, aAu, aAv) {
		var jZ = aAq(player);
		aX.kW[player] = 2, hr[jZ + size[player]] = 0, hs[jZ + size[player]] = aAu, id[jZ + size[player]] = aAv, aAp[jZ + size[player]] = 0, size[player]++
	}, this.ew = function(player, ke) {
		var hy, jZ;
		if (0 !== size[player])
			for (jZ = aAq(player), size[player]--, hy = ke; hy < size[player]; hy++) hr[jZ + hy] = hr[jZ + hy + 1], hs[jZ + hy] = hs[jZ + hy + 1], id[jZ + hy] = id[jZ + hy + 1], aAp[jZ + hy] = aAp[jZ + hy + 1]
	}, this.aA2 = function(player) {
		for (var hy, jZ, aA1 = [], a0 = iq - 1; 0 <= a0; a0--)
			for (jZ = aAq(is[a0]), hy = size[is[a0]] - 1; 0 <= hy; hy--)
				if (0 === id[jZ + hy] && hr[jZ + hy] === player) {
					aA1.push(is[a0]);
					break
				} return aA1
	}
}

function cD() {
	var aAy, aAz, aB0, aB1, aB2, aB3;
	this.dD = function() {
		aB0 = aAy = 10, aB1 = aAz = 10
	}, this.dJ = function() {
		aB3 = 512, aB2 = new Uint16Array(aB3);
		for (var a0 = 0; a0 < aB3; a0++) aB2[a0] = 100 + aB4(bB.el(25600 * a0, aB3 - 4), 9)
	}, this.a3n = function() {
		return aB1
	}, this.ha = function() {
		if (--aB0 <= 0 && (aB0 = aAy, function() {
				var a0, aB9, dp = aX.et[a2.es];
				for (a2.jD && !a2.hl && 0 !== aX.kW[0] && 0 === aQ.jF[0].f6 && (aX.et[0] += bB.el(aX.ep[0], 6)), a0 = iq - 1; 0 <= a0; a0--) aB9 = bB.el(aV.a50(is[a0]) * aX.et[is[a0]], 1e4), aX.et[is[a0]] += aB9 < 1 ? 1 : aB9, aV.eu(is[a0]);
				bR.ev[9] += aX.et[a2.es] - dp
			}(), --aB1 <= 0)) {
			aB1 = aAz;
			for (var dp = aX.et[a2.es], a0 = iq - 1; 0 <= a0; a0--) aX.et[is[a0]] += aX.ep[is[a0]], aV.eu(is[a0]);
			bR.ev[8] += aX.et[a2.es] - dp
		}
	}, this.a50 = function(player) {
		var gO = aB2[bB.el((aB3 - 1) * aX.ep[player], a2.iV)],
			aB8 = (bT.eq() < 1920 && (gO = gO < (aB8 = bB.el(100 * (13440 - 6 * bT.eq()), 1920)) ? aB8 : gO), this.iR(player));
		return aX.et[player] > aB8 && (gO -= bB.el(2 * gO * (aX.et[player] - aB8), aB8)), gO < 0 ? 0 : 700 < gO ? 700 : gO
	}, this.iR = function(player) {
		player = 100 * aX.ep[player];
		return player > a2.yl ? a2.yl : player
	}, this.eu = function(player) {
		var dr = aX.ep[player] * a2.iw;
		aX.et[player] = Math.min(Math.min(aX.et[player], a2.y0), dr)
	}, this.my = function(player, mz) {
		b2.en.nM(mz, bE.dw[0]), bR.nN(player, mz), aW.aBB(player, bE.dw[0] + bE.dw[1]), aW.nO(mz, bE.dw[0]), b2.en.nv(player)
	}, this.aBC = function() {
		for (var ex = iq, su = is, jZ = 0, xz = aX.et, a0 = 0; a0 < ex; a0++) jZ += xz[su[a0]];
		return jZ
	}, this.aBD = function(vT) {
		for (var f4, ex = iq, su = is, jZ = 0, xz = aX.et, il = bU.il, a0 = 0; a0 < ex; a0++) il[f4 = su[a0]] === vT && (jZ += xz[f4]);
		return jZ
	}
}

function cF() {
	var aBE, aBF, aBG, aBH, aBI, aBJ, aBK, aBL, aBM, aBN, aBO, aBP, aBQ, aBR, aBS, aBT, aBU, aBV, aBX, aBY, a5r, aBZ, aBa, aBg, aBh, aBW = null,
		aBc = 0,
		aBd = !1,
		aBe = new Float32Array(4),
		aBf = 0,
		a4G = 400;

	function oW() {
		aBM = Math.floor(+an.oU), aBN = Math.floor(.5 * aBM), aBW.width = an.u, aBW.height = an.iE, aBX = aBW.getContext("2d", {
			alpha: !0
		}), b2.kt.textAlign(aBX, 1), b2.kt.textBaseline(aBX, 1), aBX.imageSmoothingEnabled = !0
	}

	function aBi() {
		var a0, aBn;
		for (ku.font = b2.kt.ky(1, 100 * aBO), aBn = 80 / Math.floor(ku.measureText(b2.l1.l2(a2.y0)).width), ku.font = b2.kt.ky(1, 100), a0 = a2.f1 - 1; 0 <= a0; a0--) aBL[a0] = 100 / Math.floor(ku.measureText(aX.l3[a0]).width), aBK[a0] = Math.min(
			aBn, aBL[a0])
	}

	function aBo(a0) {
		return !bX.dV.data[7].value || aX.et[a0] < 1e6 ? 1 : aX.et[a0] < 1e7 ? aBe[0] : aBe[Math.min(Math.floor(Math.log10(aX.et[a0])) - 6, 3)]
	}

	function aBm(gM) {
		aBV = !1, aBU = 1, aBS = aBT = 0, gM.clearRect(0, 0, an.u, an.iE);
		for (var km, kn, a0, aBt, fontSize, ko, kp = h6 / h7, kq = h8 / h7, kr = (an.u + h6) / h7, ks = (an.iE + h8) / h7, aBu = 0 !== aX.kW[a2.es] && aS.uN(a2.es), hy = iq - 1; 0 <= hy; hy--) a0 = is[hy], (fontSize = Math.floor(aBR * h7 * aBo(a0) *
			aBK[a0] * aBI[a0])) < aBQ || aBM <= fontSize || aBG[a0] + aBI[a0] > kp && aBG[a0] < kr && aBH[a0] + aBJ[a0] > kq && aBH[a0] < ks && (km = Math.floor(an.u * (aBG[a0] + aBI[a0] / 2 - kp) / (kr - kp)), kn = Math.floor(an.iE * (aBH[a0] +
			aBJ[a0] / 2 - kq) / (ks - kq) - .1 * fontSize), aBt = aS.a2J[a0], gM.font = b2.kt.ky(1 === aX.xu[a0] ? 4 : 1, fontSize), gM.fillStyle = aBv(fontSize, aBt % 2), bX.dV.data[7].value ? aBw(gM, a0, fontSize, km, kn, aBt) : aBx(a0,
			fontSize, km, kn, gM), aBV = !0, 0 < a5r[a0] ? function(km, kn, fontSize, a0, gM) {
			0 === iW[a0] ? aa.t4.ti(aBY[a0]) ? (function(km, kn, fontSize, player, nA, gM) {
				for (var sD = kn, gK = (gM.globalAlpha = aC5(fontSize), aBo(player) * (bX.dV.data[7].value ? aBf : aBL[player])), sC = km - .5 * fontSize / gK - .9 * fontSize, i4 = 0; i4 < 2; i4++) gM.fillText(aa.t4.tc(nA), sC, sD),
					sC = km + .5 * fontSize / gK + .9 * fontSize;
				gM.globalAlpha = 1
			}(km, kn, fontSize, a0, aBY[a0], gM), aBz(km, kn, fontSize, 0, 0, gM)) : aa.t4.tk(aBY[a0]) ? (aC8(km, kn, fontSize, aBY[a0], 0, gM), aBz(km, kn, fontSize, 0, 1, gM)) : (aC8(km, kn, fontSize, aBY[a0], 1, gM), aBz(km, kn,
				fontSize, 1, 0, gM)) : aC8(km, kn, fontSize, aBY[a0], 0, gM)
		}(km, kn, fontSize, a0, gM) : 0 === iW[a0] && aBz(km, kn, fontSize, 0, 0, gM), aBu && (0 < a5r[a0 + a2.f1] || 0 < a5r[a0 + 2 * a2.f1] || 0 < a5r[a0 + 3 * a2.f1] || 0 < a5r[a0 + 4 * a2.f1]) && function(km, kn, fontSize, a0, gM) {
			var ik, jL = -1;
			for (ik = 4; 1 <= ik; ik--) 0 < a5r[a0 + ik * a2.f1] && jL++;
			for (ik = 1; ik < 5; ik++) 0 < a5r[a0 + ik * a2.f1] && (! function(km, kn, fontSize, ik, a0, aC3, dp, gM) {
				var xP;
				if (1 === ik) {
					a0 = aBY[a0 + a2.f1];
					if (!aa.t4.tj(a0)) return function(km, kn, fontSize, nA, aC3, gM) {
						gM.globalAlpha = aC5(fontSize);
						km -= .534 * aC3 * fontSize, aC3 = kn + 1.59 * fontSize;
						gM.font = b2.kt.ky(0, .785 * fontSize), gM.fillText(aa.t4.tc(nA), km, aC3), gM.globalAlpha = 1
					}(km, kn, fontSize, a0, aC3, gM);
					xP = aa.rk.tB[a0 - 1024 + aa.t4.tM]
				} else xP = 2 === ik ? aA.zJ()[4].gL[+(dp < 255)] : (3 === ik ? aA.zJ()[5] : aA.zJ()[6]).gL[0];
				a0 = aa.rk.tC, dp = .8 * fontSize / a0, ik = km - .5 * dp * a0 - .534 * aC3 * fontSize, km = kn + 1.4 * dp * a0;
				gM.setTransform(dp, 0, 0, dp, ik, km), gM.globalAlpha = aC5(fontSize), gM.drawImage(xP, 0, 0), gM.globalAlpha = 1, gM.setTransform(1, 0, 0, 1, 0, 0)
			}(km, kn, fontSize, ik, a0, jL, a5r[a0 + ik * a2.f1], gM), jL -= 2)
		}(km, kn, fontSize, a0, gM), (ko = aBO * fontSize) < aBQ || (gM.font = b2.kt.ky(1, ko), kn += Math.floor(.78 * fontSize), bX.dV.data[7].value ? aBx(a0, ko, km, kn, gM) : aBw(gM, a0, ko, km, kn, aBt)))
	}

	function aBx(a0, fontSize, ff, fg, gM) {
		var ___id = a0;
		gM.fillText(aX.l3[a0], ff, fg), a0 < a2.ip && 2 !== aX.xu[a0] || (a0 = fontSize / aBL[a0], gM.fillRect(ff - .5 * a0, fg + b2.kt.td * fontSize, a0, Math.max(1, .1 * fontSize)));
		bX.dV.data[7].value && settings.showPlayerDensity && (settings.coloredDensity && (gM.fillStyle = utils.textStyleBasedOnDensity(___id)), gM.fillText(utils.getDensity(___id), ff, fg + fontSize));
	}

	function aBw(gM, a0, fontSize, km, kn, aBt) {
		var ___id = a0;
		a0 = b2.l1.l2(aX.et[a0]);
		aBt >> 1 & 1 ? (gM.lineWidth = .05 * fontSize, gM.strokeStyle = aBv(fontSize, aBt % 2), gM.strokeText(a0, km, kn)) : (1 < aBt && (gM.lineWidth = .12 * fontSize, gM.strokeStyle = aBv(fontSize, aBt), gM.strokeText(a0, km, kn)), gM.fillText(a0,
			km, kn));
		bX.dV.data[7].value || settings.showPlayerDensity && (settings.coloredDensity && (gM.fillStyle = utils.textStyleBasedOnDensity(___id)), gM.fillText(utils.getDensity(___id), km, kn + fontSize))
	}

	function aBz(km, kn, fontSize, aC3, aC4, gM) {
		var zs = .95 * fontSize / aBa,
			km = km - .5 * zs * aBZ + .8 * aC3 * fontSize,
			aC3 = kn - 1.76 * zs * aBa - (.35 - b2.kt.td + .7) * aC4 * fontSize;
		gM.setTransform(zs, 0, 0, zs, km, aC3), gM.globalAlpha = aC5(fontSize), gM.drawImage(aR.get(4), 0, 0), gM.globalAlpha = 1, gM.setTransform(1, 0, 0, 1, 0, 0)
	}

	function aC8(km, kn, fontSize, nA, aC3, gM) {
		var gF, sC, zs;
		gM.globalAlpha = aC5(fontSize), aa.t4.tj(nA) ? (gF = aa.rk.tC, gM.setTransform(zs = 1.1 * fontSize / gF, 0, 0, zs, sC = km - .5 * zs * gF - .8 * aC3 * fontSize, zs = kn - 1.55 * zs * gF), gM.drawImage(aa.rk.tB[nA - 1024 + aa.t4.tM], 0, 0), gM
			.setTransform(1, 0, 0, 1, 0, 0)) : (sC = km - .8 * aC3 * fontSize, zs = kn - (.35 - b2.kt.td + 1) * fontSize, gM.fillText(aa.t4.tc(nA), sC, zs)), gM.globalAlpha = 1
	}

	function aBv(fontSize, aBt) {
		return aBN <= fontSize && fontSize < aBM ? bU.aCA[aBt] + aC5(fontSize).toFixed(3) + ")" : bU.aCB[aBt]
	}

	function aC5(fontSize) {
		return aBN <= fontSize && fontSize < aBM ? 1 - (fontSize - aBN) / (aBM - aBN) : 1
	}

	function aCK(gK, u) {
		return 1 + Math.floor(aBP * gK * u)
	}

	function aCH(a0) {
		for (var left = aBG[a0], hy = aBG[a0] - aX.hJ[a0] - 1; 0 <= hy; hy--)
			if (!aCL(a0, --left, aBH[a0], aBJ[a0])) {
				left++;
				break
			} var right = aBG[a0];
		for (hy = aX.hK[a0] - aBG[a0] - aBI[a0]; 0 <= hy; hy--)
			if (!aCL(a0, ++right + aBI[a0] - 1, aBH[a0], aBJ[a0])) {
				right--;
				break
			} var ff = Math.floor((left + right) / 2),
			top = aBH[a0];
		for (hy = aBH[a0] - aX.hL[a0] - 1; 0 <= hy; hy--)
			if (!aCM(a0, ff, --top, aBI[a0])) {
				top++;
				break
			} var bottom = aBH[a0];
		for (hy = aX.hM[a0] - aBH[a0] - aBJ[a0]; 0 <= hy; hy--)
			if (!aCM(a0, ff, ++bottom + aBJ[a0] - 1, aBI[a0])) {
				bottom--;
				break
			} var fg = Math.floor((top + bottom) / 2);
		aCE(a0, ff, fg, aBI[a0], aBJ[a0]) && (aBG[a0] = ff, aBH[a0] = fg)
	}

	function aCE(player, ff, fg, u, iE) {
		f6 = Math.floor(.2 * u);
		for (var f6, ik = ff + u - 1; ff <= ik; ik--)
			if (!aCL(player, ik, fg, iE)) return;
		for (ik = fg + iE - 1 - (f6 = (f6 = Math.floor(.25 * iE)) < 1 ? 1 : f6); fg + f6 <= ik; ik--)
			if (!aCM(player, ff, ik, u)) return;
		return 1
	}

	function aCL(player, ff, fg, iE) {
		return aS.sf(player, 4 * (fg * bI.eS + ff)) && aS.sf(player, 4 * ((fg + iE - 1) * bI.eS + ff))
	}

	function aCM(player, ff, fg, u) {
		return aS.sf(player, 4 * (fg * bI.eS + ff)) && aS.sf(player, 4 * (fg * bI.eS + ff + u - 1))
	}
	this.dD = function() {
		if (a4G = 0 === (a4G = bX.dV.data[11].value) ? 280 : 1 === a4G ? 187 : 112, aBV = !1, aBR = .88, aBO = .5, aBP = 1.8, aBQ = 12 - 3 * bX.dV.data[9].value, aBF = aBE = 0, aBG = new Uint16Array(a2.f1), aBH = new Uint16Array(a2.f1), aBI =
			new Uint16Array(a2.f1), aBJ = new Uint16Array(a2.f1), aBK = new Float32Array(a2.f1), aBL = new Float32Array(a2.f1), aBY = new Uint16Array(2 * a2.f1), a5r = new Uint8Array(5 * a2.f1), aBg = new Uint8Array(a2.f1), aBh = new Uint8Array(
				a2.f1), aBW = aBW || document.createElement("canvas"), oW(), aBT = aBS = 0, aBU = 1, bX.dV.data[7].value) {
			var a0, aBn;
			for (aBi(), ku.font = b2.kt.ky(1, 100), aBn = 100 / Math.floor(ku.measureText("900 000").width), a0 = a2.f1 - 1; 0 <= a0; a0--) aBK[a0] = Math.min(aBn, 2 * aBL[a0]);
			aBf = aBn, aBe[0] = 100 / (aBn * Math.floor(ku.measureText("5 000 000").width)), aBe[1] = 100 / (aBn * Math.floor(ku.measureText("50 000 000").width)), aBe[2] = 100 / (aBn * Math.floor(ku.measureText("500 000 000").width)), aBe[3] =
				100 / (aBn * Math.floor(ku.measureText("1 000 000 000").width))
		} else aBi();
		! function() {
			var a0;
			for (a0 = a2.f1 - 1; 0 <= a0; a0--) aX.ep[a0] < 12 ? (aBG[a0] = aX.hJ[a0] + 1, aBH[a0] = aX.hL[a0] + 1, aBI[a0] = 1, aBJ[a0] = 1) : (aBG[a0] = aX.hJ[a0], aBH[a0] = aX.hL[a0] + 1, aBI[a0] = 4, aBJ[a0] = 2);
			if (a2.fz)
				for (a0 = 0; a0 < a2.ip; a0++) aBI[a0] = 0;
			aBZ = aR.get(4).width, aBa = aR.get(4).height
		}()
	}, this.aBB = function(f4, a0t) {
		a0t > 18 * aX.ep[f4] ? (aBh[f4] = 6, aS.a2J[f4] = 2 + aS.a2J[f4] % 2) : (aBg[f4] = 4, (aS.a2J[f4] < 2 || 3 < aS.a2J[f4]) && (aS.a2J[f4] = 6 + aS.a2J[f4] % 2))
	}, this.nO = function(f4, a0t) {
		a0t > 6 * aX.ep[f4] ? (aBh[f4] = 6, aS.a2J[f4] = 4 + aS.a2J[f4] % 2) : (aBg[f4] = 4, (aS.a2J[f4] < 4 || 5 < aS.a2J[f4]) && (aS.a2J[f4] = 8 + aS.a2J[f4] % 2))
	}, this.resize = function() {
		oW(), aBm(aBX)
	}, this.yh = function() {
		for (var a0 = 0; a0 < a2.ip; a0++) aX.hK[a0] - aX.hJ[a0] != 3 || aX.hM[a0] - aX.hL[a0] != 3 ? (aBG[a0] = aX.hJ[a0] + (aX.hK[a0] !== aX.hJ[a0] ? 1 : 0), aBH[a0] = aX.hL[a0], aBI[a0] = 1, aBJ[a0] = 1) : (aBG[a0] = aX.hJ[a0], aBH[a0] = aX
			.hL[a0] + 1, aBI[a0] = 4, aBJ[a0] = 2)
	}, this.o6 = function(player, ke, aBp) {
		! function(player, ke, aBp) {
			player += ke * a2.f1;
			0 === ke ? aBY[player] === aBp && 0 < a5r[player] ? a5r[player] = 0 : (aBY[player] = aBp, a5r[player] = aa.t4.ti(aBp) ? 255 : 64) : 1 === ke ? (a5r[player] = 64, aBY[player] = aBp) : a5r[player] = aBp
		}(player, ke, aBp), 2 === a2.uU && this.kG(!0)
	}, this.kk = function() {
		aBV && (1 !== aBU ? (ku.imageSmoothingEnabled = !0, ku.setTransform(aBU, 0, 0, aBU, 0, 0), ku.drawImage(aBW, -aBS / aBU, -aBT / aBU), ku.setTransform(1, 0, 0, 1, 0, 0), ku.imageSmoothingEnabled = !1) : ku.drawImage(aBW, -aBS, -aBT))
	}, this.a33 = function(gr, gu) {
		aBS += gr, aBT += gu
	}, this.w9 = function(gr, gu) {
		aW.a33(gr, gu)
	}, this.zoom = function(x8, jl, jm) {
		aBU *= x8, aBS = (aBS + jl) * x8 - jl, aBT = (aBT + jm) * x8 - jm
	}, this.kG = function(a12) {
		return !(!aBd && !a12 && bT.dn < aBc + (1 === aBU && 0 === aBS && 0 === aBT && (a2.z8() || a2.fz || 2 === a2.uU) ? 1e3 : a4G) || (aBd = !1, aBc = bT.dn, aBm(aBX), 0))
	}, this.kx = function(a0) {
		return aBo(a0) * aBK[a0]
	}, this.aBs = function(player) {
		return aBK[player]
	}, this.ha = function() {
		bT.eq() % 10 == 9 && (aBd = a2.zA() && !a2.z8()), !a2.z8() && 4 <= ++aBF && function() {
			var a0, hy, i4;
			for (aBF = 0, i4 = 4; 1 <= i4; i4--)
				for (hy = iq - 1; 0 <= hy; hy--) a0 = is[hy] + i4 * a2.f1, 0 < a5r[a0] && a5r[a0] < 255 && a5r[a0]--;
			if (2 !== a2.uU)
				for (hy = iq - 1; 0 <= hy; hy--) a0 = is[hy], 0 < a5r[a0] && a5r[a0] < 255 && a5r[a0]--
		}();
		for (var ex = Math.floor(.1 * iq), a0 = aBE + (ex = iq < (ex = ex < 8 ? 8 : ex) ? iq : ex) - 1; aBE <= a0; a0--) ! function(a0) {
			var gK = aBo(a0) * aBK[a0];
			0 < aBI[a0] && aCE(a0, aBG[a0], aBH[a0], aBI[a0], aBJ[a0]) ? ! function(a0) {
				for (var ff, fg, u, iE, fw = !1, i4 = 0; i4 < 8; i4++) {
					if (u = aBI[a0] + 2, iE = aBJ[a0] + 2, u > aX.hK[a0] - aX.hJ[a0] + 1 || iE > aX.hM[a0] - aX.hL[a0] + 1) return fw;
					if (ff = aBG[a0] - 1, fg = aBH[a0] - 1, !aCE(a0, ff, fg, u, iE)) return fw;
					aBG[a0] = ff, aBH[a0] = fg, aBI[a0] = u, aBJ[a0] = iE, fw = !0
				}
				return fw
			}(a0) && function(a0, gK) {
				for (var ff, fg, u, iE, fw = !1, a60 = aBI[a0], lY = 1 + Math.floor(.02 * a60), i4 = 1; i4 < 5; i4++) {
					if ((u = a60 + i4 * lY) > aX.hK[a0] - aX.hJ[a0] + 1) return fw;
					if ((iE = aCK(gK, u)) > aX.hM[a0] - aX.hL[a0] + 1) return fw;
					ff = aX.hJ[a0] + Math.floor(Math.random() * (aX.hK[a0] - aX.hJ[a0] + 2 - u)), fg = aX.hL[a0] + Math.floor(Math.random() * (aX.hM[a0] - aX.hL[a0] + 2 - iE)), aCE(a0, ff, fg, u, iE) && (aBG[a0] = ff, aBH[a0] = fg, aBI[
						a0] = u, aBJ[a0] = iE, fw = !0)
				}
				return fw
			}(a0, gK) && aCH(a0) : ! function(a0, gK) {
				var iE, ff = aBG[a0] + 1,
					fg = aBH[a0] + 1,
					u = aBI[a0] - 2;
				for (;;) {
					if (u < 1) {
						aBI[a0] = 0;
						break
					}
					if (iE = aCK(gK, u), aCE(a0, ff, fg, u, iE)) return aBG[a0] = ff, aBH[a0] = fg, aBI[a0] = u, aBJ[a0] = iE, 1;
					ff++, fg++, u -= 2
				}
				return
			}(a0, gK) ? function(a0, gK) {
				var ff, fg, u, iE, i4, ld, i0 = aX.hK[a0] - aX.hJ[a0] + 1,
					jz = Math.floor(.02 * i0);
				for (ld = -6 * (jz = jz < 1 ? 1 : jz), i4 = i0; ld <= i4; i4 -= jz)
					if (iE = aCK(gK, u = 0 < i4 ? i4 : 1), ff = aX.hJ[a0] + Math.floor(Math.random() * (aX.hK[a0] - aX.hJ[a0] + 2 - u)), fg = aX.hL[a0] + Math.floor(Math.random() * (aX.hM[a0] - aX.hL[a0] + 2 - iE)), aCE(a0, ff, fg, u,
						iE)) return aBG[a0] = ff, aBH[a0] = fg, aBI[a0] = u, aBJ[a0] = iE
			}(a0, gK) : aCH(a0)
		}(is[a0 % iq]);
		aBE = (aBE + ex) % iq
	}, this.kB = function() {
		var a0, f4, gY, gZ;
		if (bT.eq() % 4 == 1)
			for (a0 = iq - 1; 0 <= a0; a0--) f4 = is[a0], aS.a2J[f4] < 2 || ((gY = Math.max(aBg[f4] - 1, 0)) === (gZ = Math.max(aBh[f4] - 1, 0)) ? 0 === gY && (aS.a2J[f4] %= 2) : 0 === gZ && aS.a2J[f4] < 6 && (aS.a2J[f4] += 4), aBg[f4] = gY, aBh[
				f4] = gZ)
	}, this.a0c = function(player) {
		var a0 = player + 2 * a2.f1,
			dp = a5r[a0];
		return 0 < dp && (aC.ub(50, player), a5r[a0] = 0, 255 === dp)
	}, this.zc = function(player) {
		return 255 === a5r[player + 2 * a2.f1]
	}
}

function cH() {
	var ur, aCN;
	this.dD = function() {
		ur = "Abbasid Caliphate;Aceh s;Achaemenid Z;Afsharid z;Aghlabid Emirate;Ahom z;Akkadian Z;Aksumite Z;Akwamu;Alaouite z;Almohad Caliphate;Almoravid z;Angevin Z;Aq Qoyunlu;Armenian Z;Assyria;Ashanti Z;Austrian Z;Austria-Hungary;Ayyubid z;Aztec Z;Aulikara Z;Babylonian Z;Balhae;Banten s;S Banjar;Bamana Z;Bengal s;Benin Z;Kadamba z;Bornu Z;E Brazil;Britannic Z;British Z;British Raj;Bruneian Z;Bukhara Z;Burgundian State;Buyid z;Byzantine Z;Caliphate of Córdoba;Cao Wei;Carthaginian Z;Cebu Rajahnate;Chagatai Khanate;Chalukya z;Chauhan z;Chavín Z;Chenla;Chera z;Chola z;Comanche Z;Congo Free State;Crimean Khanate;Dacian Z;Delhi s;Demak s;Durrani Z;Dutch Z;Egyptian Z;Elamite Z;Exarchate of Africa;Abyssinia;Fatimid Caliphate;First French Z;Frankish Z;Funan;Gallic Z;Gaza Z;Republic of Genoa;German Z;Ghana Z;Ghaznavid z;Ghurid z;Goguryeo;Goryeo;Gorkha Z;Göktürk Khaganate;Golden Horde;S Gowa;Seljuq Z;Gupta Z;Hafsid Y;Han z;Hanseatic League;E Harsha;Hephthalite Z;Hittite Z;Holy Roman Z;Hotak z;Hoysala Z;Hunnic Z;Husainid z;Idrisid z;Ilkhanate;K Israel;K Judah;Inca Z;Italian Z;E Japan;Jin z;Johor Z;Jolof Z;Joseon;Kaabu Z;Kachari Y;Kalmar Union;Kanem Z;Kanva z;Kara-Khanid Khanate;Kazakh Khanate;Khazar Khaganate;Khmer Z;Khilji z;Khwarazmian z;Kievan Rus';Konbaung z;Kong Z;Korean Z;Kushan Z;K Kush;Lakota;Latin Z;Later Lê z;Liao z;Lodi s;Khmer Z;Macedonian Z;Majapahit Z;Mali Z;Malacca Z;Mamluk s;Manchukuo;Maratha Z;Marinid z;Massina Z;Mataram s;Mauretania;Mauryan Z;Median Z;Mlechchha z;Ming z;Mitanni Z;Mongol Z;Mughal Z;Nanda Z;Nguyễn z;North Sea Z;E Nicaea;Numidia;Omani Z;Ottoman Z;Oyo Z;Pagan Z;Pahlavi z;Pala Z;Palmyrene Z;Parthian Z;Pontic Z;Portuguese Z;K Prussia;Ptolemaic Z;Qajar z;Qara Qoyunlu;Qin z;Qing z;Ramnad Sethupathis;Rashidun Caliphate;Rashtrakuta z;Roman Z;Rouran Khaganate;Rozwi Z;Rustamid z;Russian Z;Tsardom of Russia;Saadi z;Safavid z;Saffarid z;Sassanid z;Satavahana z;Samanid Z;Soviet Union;Saudeleur z;Duchy of Savoy;Seleucid Z;Serbian Z;Shu Han;Shang z;Siam Z;Sikh Z;Singhasari;Sokoto Caliphate;Song z;Songhai Z;Spanish Z;Srivijaya Z;Sui z;K Mysore;Shunga Z;S Sulu;Sumer;Sur Z;Swedish Z;Tahirid z;Tang z;Tây Sơn z;S Ternate;E Thessalonica;German Reich;Tibetan Z;Tondo z;S Tidore;Timurid Z;K Tlemcen;E Trebizond;Toltec Z;Toungoo z;Toucouleur Z;Tu'i Tonga Z;Turgesh Khaganate;Umayyad Caliphate;Uyunid Emirate;Uyghur Khaganate;Uzbek Khanate;Vandal Y;Vijayanagara Z;Republic of Venice;Wari Z;Wassoulou Z;Wattasids;Western Roman Z;Eastern Wu;Western Xia z;Xin z;Yuan z;Zand z;Zhou z;Zulu Z;Yugoslavia;Kosovo;Sikkim;Kanem–Bornu Z;Wadai Z;Ethiopian Z;Rozvi Z;Sasanian Z;E Vietnam;Shilluk Y;K Aksum;Gwiriko Y;Toro Y;Malindi Y;K Loango;K Mapungubwe;Ryukyu Y;K Cyprus;K Jerusalem;Garhwal Y;K Nepal;K Cambodia;Champa Y;Hanthawaddy Y;Phayao Y;K Sardinia;K Sicily;K Gwynedd;K Scotland;K Desmond;K Poland;K Hungary;K Croatia;K Bohemia;Albanian Y;K Georgia;K Portugal;Khanate of Sibir;K Romania;Cossack Hetmanate;Duchy of Bouillon;K Ireland;Lordship of Ireland;K Italy;Republic of Pisa;Idrisid z;Almoravid z;Almohad Caliphate;Marinid z;Wattasid z;Saadian z;Republic of Salé;Rif Republic;K Kush;Makuria;Alodia;Ayyubid z;Mamluk s;Egypt Eyalet;K Fazughli;S Sennar;S Darfur;Mahdist State;S Egypt;K Egypt;Emirate of Cyrenaica;K Libya;Republic of Egypt;Republic of the Sudan;United Arab Republic;Libyan Arab Republic;Zirid z;Hafsid z;K Kuku;Regency of Algiers;Gurunsi;Liptako;Tenkodogo;Wogodogo;Yatenga;Bilanga;Bilayanga;Bongandini;Con;Macakoali;Piela;Nungu;K Sine;K Saloum;K Baol;K Cayor;K Waalo;Bundu;Bonoman;Gyaaman;Denkyira;Mankessim Y;K Dahomey;Oyo Z;K Nri;Aro Confederacy;Kwararafa;Biafra;Buganda;Bunyoro;Ankole;Busoga;Tanganyika;Kuba Y;K Luba;K Lunda;Yeke Y;K Ndongo;Kasanje Y;K Matamba;Mbunda Y;Chokwe Y;Kazembe Y;K Butua;Ndebele Y;Mthethwa Z;Bophuthatswana;Ciskei;Transkei;Venda;Rhodesia;Kart z;Nogai Horde;Khanate of Bukhara;Khanate of Khiva;Khamag Mongol;Northern Fujiwara;Kamakura Shogunate;Ashikaga Shogunate;Jaxa;Republic of Ezo;Jiangxi Soviet;Hunan Soviet;Guangzhou Commune;Gojoseon;Alaiye;Beylik of Bafra;Kara Koyunlu;Kars Republic;K Iraq;Arab Federation;Kar-Kiya z;Baduspanids;Marashiyan z;Afrasiyab z;Mihrabanid z;Safavid Iran;Sheikhdom of Kuwait;Bani Khalid Emirate;Emirate of Diriyah;Emirate of Najd;Muscat and Oman;Emirate of Riyadh;S Najd;K Hejaz;Fadhli s;Emirate of Beihan;Emirate of Dhala;S Lahej;Republic of Kuwait;K Cochin;Jaffna Y;Laur Y;Pandya z;Jaunpur s;Jaintia Y;Hyderabad State;Travancore;Udaipur State;Manikya z;Lan Xang;K Vientiane;K Champasak;Lao Issara;K Laos;Pyu States;Ava;Mon Ys;Pegu;K Mrauk U;Taungoo z;Shan States;Arakan;Raktamaritika;Singhanavati;Dvaravati;Ngoenyang;Hariphunchai;Tambralinga;Lavo Y;Langkasuka;Sukhothai Y;S Singora;Ayutthaya Y;Thonburi Y;Lan Na;Pattani Y;Jambi s;Palembang s;S Deli;S Langkat;S Serdang;S Cirebon;K Pajang;K Bali;Bima s;K Larantuka;K Banggai;Luwu;S Bone;Caucasian Albania;Kabardia;Circassia;K Abkhazia;Elisu s;Avar Khanate;Caucasian Imamate;K Imereti;K Kartli;K Kakheti;Crown of Aragon;Emirate of Granada;K Majorca;Crown of Castile;K Haiti;Cocollán;Zapotec Civilization;Mosquito Y;Somoza Regime;Iroquois Confederacy;Cherokee Nation;Vermont Republic;State of Muskogee;K Alo;K Sigave;K Fiji;K Nauru;K Chile;Muisca Confederation;El Stronato;K Chimor;Jungle Republic;Liga Federal;Supreme Junta;Weimar Republic;K Bavaria;Bremen;Frankfurt;Hamburg;K Hanover;Holstein;Lippe;Nassau;Oldenburg;Pomerania;Reuss;Saxe-Altenburg;Saxony;Schleswig;Waldeck;Württemberg;Helvetic Republic;Republic of Florence;Duchy of Urbino;Republic of Cospaia;Duchy of Lucca;Duchy of Mantua;Duchy of Milan;Papal States"
			.split(";");
		var a0, hy, a0v = ["K ", " Y", "E ", " Z", " z", " s", "S "],
			aCO = ["Kingdom of ", " Kingdom", "Empire of ", " Empire", " Dynasty", " Sultanate", "Sultanate of "];
		for (aCN =
			"Pestilent Dominion;Wretched Realm;Damned Province;Corrupt Zone;Cursed Territory;Blight Nation;Haunted Expanse;Malevolent State;Ruined Empire;Contaminated Land;Epidemic Domain;Forsaken District;Abandoned Wasteland;Necrotic Enclave;Tainted Domain;Decayed Principality;Infested Region;Malignant Territory;Toxic Dominion;Ravaged Sector;Ghostly Realm;Plagued Commonwealth;Afflicted State;Desolate Nation;Apocalyptic Zone;Radiated Province;Deathly District;Pestilence Haven;Doom Territory;Malefic Expanse;Abandoned State;Cursed Haven;Corroded Zone;Hauntland;Noxious Nation;Infected Enclave;Ruinous Domain;Wasteland Woe;Rotten Principality;Voided Land;Vile Dominion;Catastrophic Region;Eerie Expanse;Desolation State;Forsaken Outpost;Contagion District;Damaged Province;Abhorrent Sector;Accursed Nation;Doomstruck Land;Radiant Ruin;Deathly Enclave;Malefic Dominion;Plague District;Infected Haven;Corrupt State;Pestilent Territory;Razed Realm;Haunted Wasteland;Toxic Sector;Cursed Dominion;Decaying Province;Forsaken Enclave;Ruinous Region;Malignant Haven;Infested State;Ghostly Nation;Tainted Territory;Damned District;Radiated Dominion;Desolate Expanse;Apocalyptic Land;Death Zone;Wretched State;Malevolent Haven;Plagued Nation;Noxious Domain;Voided Territory;Eerie Sector;Accursed Province;Necrotic District;Doom Haven;Haunt Realm;Rotten Nation;Forsaken Territory;Infected State;Abhorrent Expanse;Malignant Land;Toxic Dominion;Ruined District;Ghostland;Cursed Sector;Radiant Nation"
			.split(";"), a0 = ur.length - 1; 0 <= a0; a0--)
			for (hy = a0v.length - 1; 0 <= hy; hy--) ur[a0] = ur[a0].replace(a0v[hy], aCO[hy]);
		if (settings.realisticNames) ur = realisticNames;
	}, this.w = function() {
		var a0;
		if (ay.j7 && ay.j8.aAT)
			for (a0 = a2.ip; a0 < a2.f1; a0++) aX.l3[a0] = aX.vM[a0] = ay.j8.aAT[a0 % a2.sE];
		else(9 === a2.jB ? function() {
			var a0, gO = ao.random(),
				ex = ur.length,
				jZ = a2.ip + ap.aCT;
			for (a0 = jZ - 1; a0 >= a2.ip; a0--) aX.l3[a0] = aX.vM[a0] = ur[(a0 + gO) % ex];
			for (ex = aCN.length, a0 = jZ; a0 < a2.f1; a0++) aX.l3[a0] = aX.vM[a0] = aCN[a0 % ex]
		} : a2.jD ? function() {
			var a0, gO = ao.random();
			for (a0 = a2.ip; a0 < a2.f1; a0++) aX.l3[a0] = aX.vM[a0] = ur[(a0 + gO) % a2.f1]
		} : function() {
			var a0, ex = ur.length,
				gO = ao.random();
			for (a0 = a2.ip; a0 < a2.f1; a0++) aX.l3[a0] = aX.vM[a0] = ur[(a0 + gO) % ex]
		})()
	}
}

function cd() {
	this.aCU = [], this.aCV = [], this.dD = function() {
		this.aCU = [], this.aCV = []
	}, this.ha = function() {
		0 <= this.aCU.length && this.aCW(this.aCU), 0 <= this.aCV.length && this.aCW(this.aCV)
	}, this.aCW = function(e5) {
		for (var i4 = -1, a0 = e5.length - 1; 0 <= a0; a0--)
			if (e5[a0].dn--, e5[a0].dn <= 0) {
				i4 = a0;
				break
			} for (a0 = i4; 0 <= a0; a0--) e5.shift()
	}, this.zR = function(id, su, aCX) {
		return this.aCY(this.aCU, id, su, aCX)
	}, this.aCZ = function(id, su, aCX) {
		return this.aCY(this.aCV, id, su, aCX)
	}, this.aCY = function(e5, id, su, aCX) {
		return ! function(e5, id, su) {
			var a0, jc;
			for (a0 = su.length - 1; 0 <= a0; a0--)
				for (jc = e5.length - 1; 0 <= jc; jc--)
					if (e5[jc].player === su[a0] && id === e5[jc].id) return 1;
			return
		}(e5, id, su) && (aCX && function(e5, id, su) {
			var a0;
			for (a0 = su.length - 1; 0 <= a0; a0--) e5.push({
				player: su[a0],
				id: id,
				dn: 384
			})
		}(e5, id, su), !0)
	}
}

function cG() {
	this.vM = new Array(a2.f1), this.l3 = new Array(a2.f1), this.xu = new Uint8Array(a2.f1), this.kW = new Uint8Array(a2.f1), this.hJ = new Uint16Array(a2.f1), this.hL = new Uint16Array(a2.f1), this.hK = new Uint16Array(a2.f1), this.hM =
		new Uint16Array(a2.f1), this.ep = new Uint32Array(a2.f1), this.sT = new Uint32Array(a2.f1), this.et = new Uint32Array(a2.f1), this.ey = null, this.fF = null, this.fG = null, this.fJ = null, this.nu = new Uint16Array(a2.f1), this.hi =
		new Uint16Array(a2.f1), this.hj = new Uint16Array(a2.f1), this.v9 = new Uint16Array(a2.f1), this.vF = new Uint8Array(a2.f1), this.dD = function(su) {
			for (var a0 = su.length - 1; 0 <= a0; a0--) this.l3[a0] = this.vM[a0] = su[a0].name, this.xu[a0] = su[a0].a8U;
			this.kW.fill(0), this.hJ.fill(0), this.hL.fill(0), this.hK.fill(0), this.hM.fill(0), this.ep.fill(0), this.sT.fill(0), this.et.fill(0), donationsTracker.reset(), leaderboardFilter.reset(), this.ey = new Array(a2.f1), this.fF = new Array(
				a2.f1), this.fG = new Array(a2.f1), this.fJ = new Array(a2.f1), this.nu.fill(0), this.hi.fill(0), this.hj.fill(0), this.v9.fill(0), this.vF.fill(0)
		}
}

function cb() {
	this.aCc = function(player) {
		a5.kV(player), a2.uW++, aX.xu[player] = 2, aX.v9[player] = bW.v3.aA0(), player === a2.es && (aM.show(!1, !1), aL.a4p(), bH.result.vD()), aW.a0c(player)
	}
}

function z1() {
	for (iq = 0, a0 = a2.f1 - 1; 0 <= a0; a0--) 0 !== aX.kW[a0] && iq++;
	is = new Uint16Array(iq);
	for (var ex = 0, a0 = 0; a0 < a2.f1; a0++) 0 !== aX.kW[a0] && (is[ex++] = a0)
}

function kA() {
	aCd(), aCe()
}

function aCe() {
	for (var a0 = iq - 1; 0 <= a0; a0--) 0 === aX.kW[is[a0]] && aCf(a0)
}

function aCf(a0) {
	iq--;
	for (var hy = a0; hy < iq; hy++) is[hy] = is[hy + 1]
}

function aCd() {
	for (var ep = aX.ep, kW = aX.kW, sT = aX.sT, ey = aX.ey, vF = aX.vF, nl = bD.k8.nl, a0 = iq - 1; 0 <= a0; a0--) {
		var dp, f4 = is[a0];
		ep[f4] <= bB.el(sT[f4], 4) ? 2 === kW[f4] && (0 !== ep[f4] || nl[f4] || ey[f4].length) || a9u(f4) : ep[f4] >= sT[f4] ? (dp = ep[f4], 250 <= (sT[f4] = dp) && (vF[f4] = 1)) : sT[f4] -= Math.max(1, bB.el(sT[f4] - ep[f4], 1e3))
	}
}

function aCg() {
	for (var a9k = 0, a0 = iq - 1; 0 <= a0; a0--) a9k += aX.et[is[a0]];
	return a9k % 4096
}

function cI() {
	var aCh;
	this.jH = null, this.dD = function() {
		aCh = [], 9 === a2.jB && this.aCi()
	}, this.aCi = function() {
		var a0, aCj = [57, 85, 105, 150, 190, 333];
		if (this.aCT = 0, this.jH = [0, 0, 0, 0, 0, 0], a2.ip <= aCj[0]) this.jH[0] = Math.max(bB.el(a2.ip * (512 - a2.ip), aCj[0]), 13), a2.jA = this.jH[0];
		else
			for (a2.jA = a2.f1 - a2.ip, a0 = 1; a0 < 6; a0++)
				if (a2.ip <= aCj[a0]) {
					this.jH[a0 - 1] = 512 - aCj[a0 - 1] - bB.el((512 - aCj[a0 - 1]) * (a2.ip - aCj[a0 - 1]), aCj[a0] - aCj[a0 - 1]), this.jH[a0] = 512 - a2.ip - this.jH[a0 - 1];
					break
				} a2.sE = a2.ip + a2.jA
	}, this.aAA = function(player) {
		aCh.push({
			player: player,
			jL: 14 + ao.i1(20)
		})
	}, this.ha = function() {
		var a0;
		if (9 === a2.jB)
			for (a0 = aCh.length - 1; 0 <= a0; a0--) --aCh[a0].jL <= 0 && (aW.o6(aCh[a0].player, 0, aa.t4.tP + aa.t4.te), aCh.splice(a0))
	}
}

function cs() {
	function aCp(a0) {
		return void 0 !== bI.j8.s1[a0].aCx
	}

	function aCn(a0) {
		return 1 !== a0 && !aCp(a0) && a0 !== bI.aAI()
	}
	this.aAX = 21, this.eS = 0, this.eT = 0, this.rh = null, this.rd = null, this.re = null, this.ri = null, this.s2 = 0, this.a7t = 0, this.rf = !1, this.rg = new aCl, this.j8 = new aCm, this.dD = function() {
		this.j8.dD()
	}, this.w = function(map, a7x) {
		((map %= this.aAX) !== this.s2 || aCn(this.s2) && a7x !== this.a7t) && (this.rf = !1, this.rg.a85(), ao.yx(map), this.s2 = map, this.a7t = a7x, aCn(map) && (bI.j8.s1[map].aCo = a7x), aCp(this.s2) ? aCq() : (map = bI.j8.s1[this.s2], this
			.eS = map.u, this.eT = map.iE, ao.yx(map.aCo), ad.w([this.eS, this.eT, map.l7, map.l4]), aCr(), ac.aCs(), ad.aCt()))
	}, this.aCu = function(a0) {
		return 3 === a0 || 7 === a0 || 9 === a0 || a0 === this.aAI()
	}, this.aCv = function(a0) {
		return 2 === a0 || 7 === a0 || 9 === a0 || 20 === a0
	}, this.aCw = function(a0) {
		return 1 === a0
	}, this.aAI = function() {
		return this.aAX
	}
}

function aCl() {
	function aD6() {
		bI.rg.ha()
	}

	function aDC(f4, aDB) {
		0 < aDB && (bI.ri[f4] += aDB, bI.ri[f4 + 1] += aDB, bI.ri[f4 + 2] += aDB)
	}

	function g3(f4) {
		return bI.ri[f4 + 2] > bI.ri[f4] && bI.ri[f4 + 2] > bI.ri[f4 + 1]
	}
	this.a3E = -1, this.dm = 0, this.aCy = 0, this.aCz = 8, this.aD0 = 32, this.aD1 = 8, this.aD2 = 32, this.aD3 = [0, 0], this.a2J = [0, 0, 0, 0], this.hE = null, this.aD4 = !0, this.aD5 = !1, this.a85 = function() {
		-1 !== this.a3E && clearTimeout(this.a3E), this.a3E = -1, this.hE = null, ad.aCt()
	}, this.dD = function() {
		7 === aP.vn() || this.aD5 || (this.aD4 = !0, this.dm = 0, this.aCy = 1, this.aD3 = [bI.j8.s1[bI.s2].s0[0], bI.j8.s1[bI.s2].s3[0]], this.a2J = [bI.j8.s1[bI.s2].aCx[3], bI.j8.s1[bI.s2].aCx[4], bI.j8.s1[bI.s2].aCx[5], bI.j8.s1[bI.s2].aCx[
			6]], this.aCz = bI.j8.s1[bI.s2].aCx[7], this.aD0 = bI.j8.s1[bI.s2].aCx[8], this.aD1 = bI.j8.s1[bI.s2].aCx[9], this.aD2 = bI.j8.s1[bI.s2].aCx[10], this.aD4 ? this.a3E = setTimeout(aD6, 16) : this.ha())
	}, this.ha = function() {
		if (8 === aP.vn() && a7.lL()) this.a3E = setTimeout(aD6, 16);
		else {
			if (0 === this.dm) {
				var aCo = ao.aD7();
				if (ao.yx(bI.j8.s1[bI.s2].aCx[2]), ad.w([bI.eS, bI.eT, bI.j8.s1[bI.s2].aCx[0], bI.j8.s1[bI.s2].aCx[1]]), ao.yx(aCo), this.hE = ad.aD8(), this.dm++, this.aD4) return void(this.a3E = setTimeout(aD6, 16))
			}
			for (var f4, fu, aCo = this.aD4 ? 10 : 1e6, aCo = bI.eT - this.aCy - 1 < aCo ? bI.eT - this.aCy - 1 : aCo, sQ = this.aCy + aCo, fg = this.aCy; fg < sQ; fg++)
				for (var ff = 1; ff < bI.eS - 1; ff++) g3(f4 = 4 * (fu = ff + fg * bI.eS)) ? this.aD9(f4, fu, 1) : (this.aD9(f4, fu, 0), function(ff, fg, f4) {
					return 1 < ff && g3(f4 - 4) || ff < bI.eS - 2 && g3(f4 + 4) || 1 < fg && g3(f4 - 4 * bI.eS) || fg < bI.eT - 2 && g3(f4 + 4 * bI.eS)
				}(ff, fg, f4) && this.aDA(ff, fg));
			this.aCy = sQ, this.aCy >= bI.eT - 1 ? (bI.rd.putImageData(bI.re, 0, 0, 1, 1, bI.eS - 2, bI.eT - 2), bT.dK = !0, this.a85()) : this.aD4 && (this.a3E = setTimeout(aD6, 16))
		}
	}, this.aD9 = function(f4, fu, ke) {
		aDC(f4, Math.floor(this.aD3[ke] + this.a2J[ke] * this.hE[fu] / 1e4) - bI.ri[f4])
	}, this.aDD = function(f4, gO, aDE, ke, a2J) {
		aDC(f4, Math.floor(this.aD3[ke] + (1 - gO / aDE) * a2J) - bI.ri[f4])
	}, this.aDA = function(jl, jm) {
		for (var f4, gO, aDE, s5 = jl - this.aD0, s6 = jm - this.aD0, sR = jl + this.aD0, sQ = jm + this.aD0, s5 = s5 < 1 ? 1 : s5, sR = sR > bI.eS - 2 ? bI.eS - 2 : sR, sQ = sQ > bI.eT - 2 ? bI.eT - 2 : sQ, fg = s6 < 1 ? 1 : s6; fg <= sQ; fg++)
			for (var ff = s5; ff <= sR; ff++) g3(f4 = 4 * (ff + fg * bI.eS)) ? (aDE = this.aCz + (this.aD0 - this.aCz) * this.hE[ff + bI.eS * fg] / 1e4, Math.abs(jl - ff) > aDE || Math.abs(jm - fg) > aDE || aDE <= (gO = Math.sqrt((jl - ff) * (
				jl - ff) + (jm - fg) * (jm - fg))) || this.aDD(f4, gO, aDE, 1, this.a2J[3])) : (aDE = this.aD1 + (this.aD2 - this.aD1) * this.hE[ff + bI.eS * fg] / 1e4, Math.abs(jl - ff) > aDE || Math.abs(jm - fg) > aDE || aDE <= (gO = Math
				.sqrt((jl - ff) * (jl - ff) + (jm - fg) * (jm - fg))) || this.aDD(f4, gO, aDE, 0, this.a2J[2]))
	}
}

function aCr() {
	2 === bI.s2 ? aDF([256], [256], [0, 205, 256], [500, 500, 0], [0, 0, 0]) : 7 === bI.s2 ? aDF([512], [512], [0, 380, 512], [500, 500, 0], [0, 0, 0]) : 8 === bI.s2 ? aDF([410], [410], [0, 120, 210], [0, 80, 640], [0, 0, 0]) : 9 === bI.s2 ? aDF([
		512], [512], [0, 70, 180, 200, 290, 420, 512], [500, 500, 0, 0, 500, 500, 0], [0, 0, 0, 0, 0, 0, 0]) : 20 === bI.s2 && aDF([512], [512], [0, 380, 512], [500, 500, 0], [0, 0, 0])
}

function aDF(aDG, aDH, aDI, aDJ, aDK) {
	for (var ff, fg, aDM, aDN, x8, aDO, gq = aDG.length - 1, aDL = bI.eS + bI.eT, ex = (aDL *= aDL, aDI.length), a0 = ex - 1; 0 <= a0; a0--) aDI[a0] *= aDI[a0];
	var aDP = new Array(ex),
		aDQ = new Array(ex),
		aDR = new Array(ex),
		dr = ad.aD8();
	if (void 0 === aDK)
		for (aDK = new Array(ex), a0 = ex - 1; 0 <= a0; a0--) aDK[a0] = 0;
	for (a0 = 1; a0 < ex; a0++) aDP[a0] = aDI[a0] - aDI[a0 - 1], aDQ[a0] = aDJ[a0] - aDJ[a0 - 1], aDR[a0] = aDK[a0] - aDK[a0 - 1];
	for (ff = bI.eS - 1; 0 <= ff; ff--)
		for (fg = bI.eT - 1; 0 <= fg; fg--) {
			for (aDM = aDL, a0 = gq; 0 <= a0; a0--) aDM = (aDN = (ff - aDG[a0]) * (ff - aDG[a0]) + (fg - aDH[a0]) * (fg - aDH[a0])) < aDM ? aDN : aDM;
			for (x8 = aDJ[ex - 1], aDO = aDK[ex - 1], a0 = 1; a0 < ex; a0++)
				if (aDM < aDI[a0]) {
					x8 = aDJ[a0 - 1] + a9L((aDM - aDI[a0 - 1]) * aDQ[a0], aDP[a0]), aDO = aDK[a0 - 1] + a9L((aDM - aDI[a0 - 1]) * aDR[a0], aDP[a0]);
					break
				} aDS(bI.eS * fg + ff, x8, aDO, dr)
		}
}

function aDS(ke, x8, aDO, dr) {
	x8 < 500 ? dr[ke] = bB.el(dr[ke] * x8 * 2, 1e3) : 500 < x8 && (dr[ke] += bB.el(2 * (1e4 - dr[ke]) * (x8 - 500), 1e3)), dr[ke] += bB.el(aDO * (10 * x8 - dr[ke]), 1e3)
}

function cK() {
	var aDT;

	function aDd(xP, gK, ff, fg, globalAlpha) {
		bI.rd.save(), bI.rd.globalAlpha = globalAlpha, bI.rd.imageSmoothingEnabled = !1, bI.rd.scale(gK, gK), bI.rd.drawImage(xP, Math.floor(ff * (bI.eS / gK - xP.width)), Math.floor(fg * (bI.eT / gK - xP.height))), bI.rd.restore()
	}
	this.a0y = 0, this.a0z = 0, this.a10 = 0, this.a11 = 0, this.dD = function() {
		(aDT = new Array(bI.aAX))[0] = {
			u: [0, 5e3, 8e3, 1e4],
			gO: [220, 250, 255, 220],
			po: [190, 220, 0, 0],
			i4: [170, 200, 0, 0]
		}, aDT[1] = {
			u: [0, 4e3, 5e3, 6e3, 1e4],
			gO: [25, 0, 100, 0, 25],
			po: [25, 0, 0, 0, 25],
			i4: [25, 0, 0, 0, 25]
		}, aDT[2] = {
			u: [0, 500, 2500, 2999, 3e3, 3200, 4200, 5200, 5700, 8800, 1e4],
			gO: [15, 15, 70, 40, 48, 48, 252, 40, 40, 20, 30],
			po: [80, 80, 190, 90, 46, 46, 248, 180, 180, 90, 140],
			i4: [120, 120, 220, 110, 37, 37, 217, 10, 10, 10, 10]
		}, aDT[3] = {
			u: [0, 400, 1800, 2e3, 3200, 4500, 6e3, 7700, 8500, 9500, 1e4],
			gO: [10, 10, 20, 10, 30, 10, 16, 40, 55, 230, 230],
			po: [10, 10, 40, 50, 100, 40, 80, 120, 55, 230, 230],
			i4: [80, 80, 200, 10, 60, 10, 16, 40, 55, 230, 230]
		}, aDT[4] = {
			u: [0, 300, 1400, 1700, 3e3, 4e3, 1e4],
			gO: [10, 10, 20, 10, 10, 170, 212],
			po: [20, 20, 60, 100, 100, 110, 170],
			i4: [70, 70, 160, 30, 30, 60, 120]
		}, aDT[5] = {
			u: [0, 1e3, 3e3, 3500, 4e3, 4500, 7e3, 7500, 8e3, 1e4],
			gO: [10, 10, 20, 10, 5, 10, 20, 5, 20, 25],
			po: [30, 30, 50, 100, 30, 100, 140, 60, 140, 200],
			i4: [80, 80, 200, 10, 5, 10, 20, 5, 20, 25]
		}, aDT[6] = {
			u: [0, 700, 2650, 3200, 5e3, 8e3, 1e4],
			gO: [10, 10, 60, 255, 255, 200, 200],
			po: [10, 10, 60, 255, 255, 200, 200],
			i4: [80, 80, 255, 255, 255, 200, 200]
		}, aDT[7] = {
			u: [0, 400, 1999, 2e3, 3200, 4e3, 4700, 5500, 6500, 9500, 1e4],
			gO: [10, 10, 80, 255, 255, 55, 6, 70, 20, 155, 255],
			po: [10, 10, 90, 245, 245, 170, 80, 190, 20, 155, 255],
			i4: [80, 80, 255, 235, 235, 55, 26, 10, 20, 155, 255]
		}, aDT[8] = {
			u: [0, 700, 1300, 1900, 1901, 2500, 3400, 6e3, 1e4],
			gO: [25, 30, 30, 30, 255, 255, 30, 40, 20],
			po: [25, 30, 150, 150, 245, 245, 80, 150, 70],
			i4: [60, 170, 170, 170, 235, 235, 30, 40, 40]
		}, aDT[9] = {
			u: [0, 400, 2009, 2010, 3300, 4e3, 5200, 6500, 8e3, 9500, 1e4],
			gO: [10, 10, 80, 255, 255, 55, 23, 36, 20, 155, 255],
			po: [10, 10, 90, 245, 245, 170, 60, 160, 20, 155, 255],
			i4: [80, 80, 255, 235, 235, 55, 9, 72, 20, 155, 255]
		}, aDT[20] = {
			u: [0, 5500, 6700, 6999, 7e3, 7300, 7600, 8200, 1e4],
			gO: [5, 5, 70, 70, 255, 255, 252, 10, 8],
			po: [20, 28, 190, 190, 255, 255, 248, 90, 60],
			i4: [60, 80, 220, 220, 220, 220, 217, 10, 8]
		}
	}, this.aCs = function() {
		var aDc, a0, hy, e6, gI = function() {
				var gI;
				return bI.rh = document.createElement("canvas"), bI.rh.width = bI.eS, bI.rh.height = bI.eT, bI.rd = bI.rh.getContext("2d", {
					alpha: !1
				}), gI = bI.rd.getImageData(0, 0, bI.eS, bI.eT), bI.ri = gI.data, gI
			}(),
			u = aDT[bI.s2].u,
			gO = aDT[bI.s2].gO,
			po = aDT[bI.s2].po,
			i4 = aDT[bI.s2].i4,
			dr = ad.aD8(),
			ex = u.length - 2,
			aDX = new Array(1 + ex),
			aDY = new Array(1 + ex),
			aDZ = new Array(1 + ex),
			aDa = new Array(1 + ex);
		for (hy = ex; 0 <= hy; hy--) aDX[hy] = u[hy + 1] - u[hy], aDY[hy] = gO[hy + 1] - gO[hy], aDZ[hy] = po[hy + 1] - po[hy], aDa[hy] = i4[hy + 1] - i4[hy];
		for (a0 = bI.eS * bI.eT - 1; 0 <= a0; a0--)
			for (hy = ex; 0 <= hy; hy--)
				if (dr[a0] >= u[hy]) {
					e6 = dr[a0] - u[hy], bI.ri[4 * a0] = gO[hy] + a9L(aDY[hy] * e6, aDX[hy]), bI.ri[4 * a0 + 1] = po[hy] + a9L(aDZ[hy] * e6, aDX[hy]), bI.ri[4 * a0 + 2] = i4[hy] + a9L(aDa[hy] * e6, aDX[hy]), bI.ri[4 * a0 + 3] = 255;
					break
				} bI.rd.putImageData(gI, 0, 0), bI.aCw(bI.s2) && aR.ps() && bI.aCw(bI.s2) && (gI = aR.a76("arena"), aDc = aR.a76("territorial.io"), aDd(gI, 5, .5, .5, .1), aDd(aDc, 2, .5, .45, .1)), bI.rf = !0, bT.dK = !0
	}, this.yz = function() {
		for (var f4, ff, fg, aDe, aDf, e8, a0z = 0, u = bI.eS, iE = bI.eT, e6 = u * iE * 4, aDg = a5X, aDh = bI.ri, a0 = u - 1; 0 <= a0; a0--) aDg[(f4 = a0 << 2) + 2] = aDg[e6 - f4 - 2] = 3;
		for (e6 = 4 * u, a0 = iE - 1; 0 <= a0; a0--) aDg[(f4 = a0 * e6) + 2] = aDg[f4 + e6 - 2] = 3;
		for (aDe = u - 1, aDf = iE - 1, fg = 1; fg < aDf; fg++)
			for (e6 = fg * u, ff = 1; ff < aDe; ff++) e8 = 1 - (aDh[(f4 = e6 + ff << 2) + 2] > aDh[f4 + 1] && aDh[f4 + 2] > aDh[f4]), aDg[f4 + 2] = 2 - e8, a0z += e8;
		this.a0y = (u - 2) * (iE - 2), this.a11 = 0, bI.aCu(bI.s2) && function() {
			var f4, ff, fg, e6, aDg = a5X,
				aDh = bI.ri,
				u = bI.eS,
				aDe = u - 1,
				aDf = bI.eT - 1,
				jL = 0;
			for (fg = 1; fg < aDf; fg++)
				for (e6 = fg * u, ff = 1; ff < aDe; ff++) aDh[f4 = e6 + ff << 2] === aDh[1 + f4] && aDh[f4] === aDh[2 + f4] && (jL++, aDg[2 + f4] = 3);
			ac.a11 = jL
		}(), this.a0z = a2.iV = a0z - this.a11, this.a10 = this.a0y - this.a0z - this.a11
	}
}

function aCq() {
	var oD;
	10 === bI.s2 ? oD =
		"DYDz2ESNu-0UYCCrS9c3pBUrKHc94BhIBhIJpIIBnMIAAIrKSSpKABmgf9e7X7ecX-5P0baOy191XXX7eegf9mcfUrrxrKppppKpKSrzUMMMSKKKrJcXcXcmgcXnKIKBmnCIJonCKrrSrrSSxSS9XcJnBe9XemmWXeX99chMIAEprrSrrtbrxIrMKBn9eBcecX9X7f99X90e577VX1VcOWX16XX7X999cX7eWyXXccVVX6rUSrrwUrlzpbbrrU6xzztzxzrztzbaOtaOa5-0WV-77e-9119HcXXZecccceXXX7ce9Xcce9e9meeVof919ee9Wzy5XeXYS9KBcXee_He6ce1ee0zxzta5UaX99c1mXcXhEJp9cNHWcTN9BcnAzJoorIBe0c--nIJoonSIBe-OX-NNOXWbcBgzIHX9xHzS9mcCSI9-nBrrorK9VcP-jHe9_BhxzKHcWC9mZp9-3n9fBnS970a6zs7egrIAAIRUKocXX9gx9npKaUxBppABe5OdHpBe-AC9-17TOWABpKI9-7JmnC6zGtxIBmen9egp6aUlyOzbrbbqUzxHXgjKKBc-ZehlxoeeoxObonox9XonAUbzS9efBdCAArHmjISBhEJnAofBUIJgrpocXxIBUoxHVmnBmmXAExoUxABmdAIBgnBonIAC6oxHVgfMHcXcUXAAGxIBgfxJch9c3enCMzSBe9eXomxHeBgmeCSBgpKMp9hzHfIEzHnArSxHX7pSrUHcnCMrUpSa5UIonABrSBccnBopJttzbxpBonHXpIEKMrMSrxpKxzUzltyUtaTOaOaObaT5UzNTOV0c116rMMKSKrxIKpJpKMSKMGxISCrKMSpKMKrSpSpI9xp9_pMMMMSBoxSryTUUxa5P7-0ttbWzzzxzaN5-NOWVN--0Wa5-0X-0VNVN7TOzaOWzL0bbX0y7NN5Ua17V111749c79e1c-V-----Ow7--N57-OzaN0ba156byNNT6q5OzWaT55-OsOX1777Oa55-5T5UX16tzUOyUtzrpzUrSKKSSAoemnKCIAIICI9KHn9CKBhCSHgenSAJnIJxSMMKKSSpKoopKKHpSoorSzxpWxMS-UKISaOxMOxttyOzy5OzbbtyTOzbtaUxyUyTT6porUrSztzzMSp9eceoogeZp9ZxJx9geeeXe9eZgeC9gegemp9gmpKMSonSxKrrbaUMIKJpMKKKpIACBmeccV71XX7V1mmmmhCCCKJompKKJpMKSKSKpKMJpKBeeceenKpzHnBnBmceee-X1117ememfBn9mfCBmgemf9mfBmf9xromcec7Us8He0u99cWtbc-PeCCS9VecZnBnBemfBn9X9c6aOXA997Y99755VXc6tXXmV5Os-ObVN0yN0bzaT-7ec7N70Wa-OV-5eggnHon9f9efCBpMzop97epCKIpSIBpKrrSKKIKKMKMJehzKKErJeABnIAJc717f9eBnAJzrHe7V9d9ef9gmopKUKC9gmcV6tX73eCIJoonIBnBnBgnCHgjJeZfA9megeegfKCICCJnIA9meZf9mfIEMof9XceXe97X-59XdCIKKpKKCJoeVcf97mZmVVV199YJmX7gceY9gpEOxMMJecrSSGzOxSrxprSxzJzUopSrIxKBpUMIpMprSropEMHnBrpprK91AJpJpIICpBopICCJonKBn9mcme9VcX9ee7X7e9ece9Xe19XcX91Xee9Xcce9VVVccefAAABe7emhBnSSKMSIJhCIJpKJppCKKIIIICJgpIBpAIHpBcoooonIKLObpBnKlzrKIKCJpCJpBnBpUzrrxpxSbbwUxzUprpppppJppMMIrrSSRUbWsOwUzUltbzrxzUzSzUbrrTTUUrSbbV6WbaTOzxzyN5TN-T5TOxbtts71-X-70V0sOWsObbaT0sTObw70tbbzbxbzzyOtyUtbyUaOV1-N0cVN-50aOtza6tzlxzUxSrzUzSSxUSzzOzzs5OyOtyOyUztyObaNOtaUrUxrrUSrrUrMSJrSIMSpKISzKUSpSrSSrzSMMxMSrMSpSrUzSSzzrTUMSpprSzMSzUxSSIEUSrzrUSpMKKxpKrKMKBmmrIKBgpKrzs6VOsUa--5ObzyN77-7X7e970V-5Oa5ObzxSxrzzSrKMUw-OV17X7X1X99X97X9X99cXXXXX977OaOVXeeeeecX7cX7X7X177-7-X-71-7XX97X97cX7VVV1--VObs970cVObtzbtyObrzxSomdKKSSMKqTN5NN0xrMIM5UrKKKpEKrSMSMprSrxMMUzrzrzSrSrSrHXenOtxrrxrxzSrrSrUrrSrSxMSxxKJpKKKJnKKrKIUUSrSrKKzKxKrSrSwUxIBnrxpSSpUzyOzzzzyUSxzRUpCBee7ecXce89omegpIBrpxzSrMJnKrMSFT0tbrMKxKL0VObxprSSlXV-11-c-X-WxzxFUaPcX777OzztzrSrMV-V75X96zzMKrUa9e-7V17gc9XeV90Bf957cVOzrMOX17X7X-X7X7V-N-6aUxCKzUUKprcX-UzSrN17WzrxrNX7ecV17WzzbaOtbxraObrOxrbxwUxpUzrzraOy5OVOWtzyOzzxbzVNXccXcXcX1-V197V-ec5Oy5N1--555UyN-N1---VOWX0Wtcc0aUMMyOs----Zc5-TOtsOWX7c0xzLN-NWbyOyUyUzrbxJe9gfTUxAMxrxzlbzbzbq5UKrJnAABnAAICETUtxSrzrpIpKIUSxraOaOVNTObzWa5NOtxxyOyOc-5A9YBmnBfHceX7-XXcX9e9Y9e5OzUbxSyVUX5OcUa1-UMqNNUbyOtsUWtWbWaObtzbyUWy6bzpJmoh9nIUI99oghSUzrrrSHeHohKCJgrKJemgcrS9nry6xSrUMStxzUSzqUrbrUxUSxxrrprUU6zSrbrtzUSUSzxMKxSMprMKIIIoonIBmohAIAHgf9eHeemfI9nA9mf9c9n9ZeXc9d9n9ccX7VZmoceeHVX1Zn9meZegegegfBhABehABonAHnABhCIBemee9eBfBeecgeohCUxzUbzxI9egegfAUUrHmegemecWcfCUp9meX9Beeef9onrSpAAKKKIyOzyUzJnBjSrxSSIBhMSHgcVYKxBmnzrROzpzxzSKKCKUzKBnoUzzbzpJmegfzyUzFObyUzrrzpKUSlzry6sUyUVN-7NOzbzzlzrzUrUSrrURUxzbzsTUsUWts5NOWa5ObzrUxrtyOWWaOzMSJnIAIprMJorKMIrSKMKKpUKCBonKMJnCJpCIKIKMJmpKIMKJpCJpBxBonHomoemmegnHf9f9cX7ce99emecgn9h9eA9nCHgfBnAIBfHh9eXXce9emec7f9ec1me89eeceme89fHeemX77-ceeeemeX9X9eeecV-V9e9Xe7e9eefBnBeefBfHmnBnBnKBpIEpKxMSKJnBpBnBnBmgmeeX9cXXVcX7Xce1eXcXe7ee9eXeeeX9X7V7V77V--XcXee7ec7X9eXXceX9f9eeee997X9Ve7Zee7WaX5X2Be-cee17X--0tsUbtaT0ta5-Oc--7Xe-X7--OVUtbVT--QA9nBmcXV--97X9ememggnBecJceeXme-cXdABeXeX97cnHgeeI9IA9XcVX7eX99e9e9mgeXeXemmceZmXe9ceXemXmggf9mmnAI9X1eIHcXfBghBmf9BemcX9Y9Ve9--JmZeccXA9Xd9cX9VXVVc7-V-Xee_BnJhIIBnJnBmohBgohBcmmf9eHf99Hf9HmommmmV5N-MvxppxrIICWzsOxX--OV5s0i1mopMKppzTOaN-0XXceV--0lJ7-90mzBlV2N7tRof9JqUsOaW7c8bwrrJchpK9-X7PBfHjKogcP0Jd92SMUwUlxMSErHegnrlxI9X7cY99e7hSzxpxSIIUHozogmgecYIExxxrrrKpKrSrMMrrlxtyUtxblxUyTUbyUUSaUy6Wzttbbc5N5N7V7XWaT7V6aZeVWsV9nIA9X2BmcWc7ooc--f9IBomV-0cnICBeXgn90Wc5TOa7-1-5cX---d11---esD---m8D-1VvAYqV-92glC5--NEEiqV-7Hsjk014I4wognBxwOs0Wc-D4y4gcT--0Y8X-0WalAk--0pHX-1Wsy6EV-a7EDhCBtaT9--X3IIV--_VJV0Ndepmzq1-0XeJbD-5XhvrCqTe-07iCnpteV-7iejk-iAtCxEIrrX71-2smknnEUUpze-e-c-1BtMB--2Kbq--YMmzV-sqPmrF7--Culc-HCwyxxcV-DEWXhte-DZ7mzorSr56eX170LG-rUSrSItzOueVc93c-5ZH-rrRP9-2d613nHdRUR6kP7-CZVZUEKUyUe91e-2ZYhnTPV-t8OMny7-1HZrT-DZf16A9mjFUzlsV--Hh_N-1HlyB-CZhCrSpzrkX7cX-2ZibAr-VMdC8brSrzUxSSIBxpHX17c8CrJe7rrUIpSrUxxzSrMIMOs5OVV7X7X7977V-7P19Xcce--8DNHk-LIcPSpN7-0ODtgnMN1-7Zz5USxyX9c--J2As-9J2CSu-08FHSrR7V-0G5xV-OH5vqV-0LEoV0OLiAnMN70D_f4UKIBnSBgzSrSxSSMSxpSpppzc-5TTUMbV716s117X1Xcce-cXXHcX--0Rs7V3dS04nKonpSSkV7----TMGPxrS-V7--MN-c0HMYnBnrIAIrK-OWV75V-tTEHotV-qMoqSMUUbe9HXV-mNcawnr6xtcVe-3aNiUIq1-6aOwMISlc1-6aSe6rROec-8ac9fISzuX-V1tf-1mnBrlWaN-NajMY9ggeoopCTTTTN6aN1HdgkXoohABnK9n9KJmpogeV-0XJenppSrUzJgghomhp9VnxIAAzOxWbbrIBnJmenBegozlWyObxIKBonIGaOVT50xSk6xJpEpIHnBonBoptxpr56xrzzbonCBnCMMSonzxJmopCIJomX7mceHcV7nJxSABhrbxEKCIJhAA9HgenABrUMbqUpSUrprSrbzzp9hABeXce9YAHcoomnBmmnBmmnpzaTTUrzzMpzWWblbyUUSrUrxbbzzblxrUUbrzSrtztzw6btV19ceWXWzq0aU6aTOta0a0V5777Xce7nA97VOa0X-17VUVV0V17-17X7V7-V----1-V-VcX9A9cWbbzyV-U5T5TOa5NNOaOV1Xe9ce99mZee5OtcWbaTTTTTOWe9ZeXcmcXVV38gtRnCMzSw1X6VcV08hu4rq9--tiGRrac-1Qfbg-dax4zrrIKoeBxErUlzSGbs0VP3eXX97XV-9R0KCsV1OlXjprrP7X7-HRQsCpVc2TRgLxJrKBeKKJe7BhIKKBlwOaUrNTUsNNNcNP91V---PS6VgopVN-LbHRrK999ezrxxoy5Tc7-0bJGjF--6Spy-5bU7rSbuXV4tsIYpKSSrSp50aX-177e-2baNMC5-2Otd7nHrpOba7cV2tv2dnICxz-Uk7cc0mUIkRnBpCBpCIJOWa0VNOtc-19UQnBeegmnIISxJns56zaOWtu7TV--URWN--VDLc-eVE7zSrUX7Xc-5WM4BN1DWTIggpBnEKKKESCWV5T5Wa-N0a9VsP6YRn9cmY9JggoggzUKHfA9XmcP9XZfIJhronABfISpxrUrrI9ABnBggrxxoe9fHmeBdCDUUrHf9orUogrzzJfUU6zUzbbbzrty6brbrxxz57OtsN5OsN5V5VT5V57N56yTUtsNN1cNNVV5VNeeeZeWtu77-XX-KgxCqWVV-P8w5qV-uAjtz5c15XwhBooopBonIKKJNN5-N5-6WVN-8ckmzArUOVeV-uDoWxNV--YoA7-TYoYRoxa57-1_P1T--8NKD-9dNS2ACAUta---dQzr-DPM79mmgcpI9chMKCppxxxrSzIbXc0aT1WVOxk7-N-9c0eauZgfAKrSrrSla-5-7n9-V1eVE3nKUwNVcV0eWZinCF5N0TcbkCMSrzr5OVPXCA9VXV-1b0uV0ezUBxUsXc--mhTc--n9_c1DnTIxCCSMKC9eCKClsT5OsN-V7NNV6QJcYxzUSxzSwUa7X9I99Xd9X-BhW8EE6rUw7ceV6fXkApBmf9f9hKGaOWzzzObV1V-PuipRpJ5--6iiarprP77--DrhL-0iv-fN-7jNKjExzXcc-Y1kshKK-5-V-wF2umWs-03EWs-03_Ms-23gdy-qlmyACJmcgfBnCIIrKpICUSIprUa0VOV5N5---V5---wRnFru7-E6kMClX-4lwIAzq9c-A7r-z5V7gdk8monBgfCCCElzbzxsN995-T5-KgiSunBnABmeeIHprrKJxpIISKICJpKprUzOcOzzUTN---0V--50aN1-1-PV7XX-SnCeY9f9mnUSSKzMtaOWa9VX--bBy1gzSxX-e-4nFNEAqTc-6C7Wgs-EC_DBjN-0nVb2N-3n_EYByN--nfWnV1Bx8ZorUaV9-CnqgbKISrNN9-9-8o5aACrSVWXV-C0gPk-jFRwSM6rsW9VV3h23TmfBjOxMUtaX17-6GYfE-0UHSjwfEzbxpUUq17ZcXeV-h8rqr--3odX6MF--8ogzvMJrN--V1xAI4npKwT7cV0Xp-Yf9nBeehKMKrzzSxrSxrUSzzSxrSMzSzzV-T-7V10Wa6VOWVT1mmeeegn9eeeXmcX97V-IJGnCr1--2JVvD-Bp7gzSxw6aeZcV0hHX5merts-EJjUhq7-2pGMvBtV-hJmVz1-1pJofqV-0KQ3c-0KztN-0L5k7-6LYvE--ILYxhTNc-0LZ57-ALu1CaV-4SIqV-hSQ3na--KpjX--ppknVESTPknBgmgn9f9f9onBmenSpMGzxbtbzbaOV6zbX9-NObWV-4TmmV3SToLnBnJnST5Oa-1-0px0YD-0pylvD--L3Ge--q54IV2CWmWnUUz5Pcec-nO-URhBoUy6VX-1qFuQGc-MOcagpR---CcERs-0PQUc3MPs8gehClzSzbzzUzxMr6tyUzzbzaTP0HgmcVXegeeeXeh9eX7e-JqqUEKIMpzz5T7cXX97-bRBpSKoT5X7--M4g1-grMIbBecemgfMxUpzMzObtu7V0zrrq7e9eV-MTaFhOy9VfLnt2-9-17117VcX1-1X97cVXX9177V-VXV9-WaOSMSSSSrrUSKMKxrrrUSxrrUzsOV7--N-tVN--N0bKIKKQCKRnKQCUtrTUtUSxpMprrUUKxSpxrpprMrxF-EcVGxTX" :
		11 === bI.s2 ? oD =
		"QREc7lR7oVUYGy_KJOJKKKKuK4OKT_K4KG_u_GJJO_3K_KKKL_4KL__KK_4_LKK_MjzuOOK_KKKOKLKKLLUjzji_KKMgyzdMjzgzzzEszzyzzjvuQvieeid_POOvzkzvzy_TvuOK4GKKvyyzzydJQi_OdKKaLOLajdOPuueaYBzydJdPOybvdbjeuvizwzujuQnunl2wBnBE2-EYBz2nk2kFzwBzznBydnwznEYwnnEBnnwkyvwzEgznzzEwwwwznnxK4KGOJ2zl2nzifvwyw-J0GGJ042nvzEvzwznJEnzlG42zg02KKGFzzEzzeT-woKK3EvoKLOJBnBnzE2EznnwnwznznzpJKKKKOOKG_G_LKFwl2zK8K4JK4KKKKKKKKKKKKF_g38EBemXeeeeeemeemgeXeegf9XgeeexCxzzzoenErMroeXeeegfEzSS9eVcghoeemf9YBe9ee9eXghrzzzKBfIUzrbzUzzzbryOxrzzbbsTXe9geY9egeeBeY91cUy6z6xtxbxzbzlzObrx6ztztue5UyT6zzbzbae7UxyOzzbzzbbtzyUyUtzztbyUzzbuecZeBeXeeecgeV--1ViZ-00JJIV379xwOLKKgzyzK2zF5g4ccBgcn9ggepUxAprzztxtyOzbzzbe90f9cXX99V-cAQAOx-PFLqqmemxp9zzttzIAzrrzzxzzze7X9ZeceX5ece---AorF0B4uUghzzae9-6VjJh_UznK---NUXV1NBEpOLYnzlJ--0X1X--Vl4pk-B5KYEc-D29vazJ-HkP9DmexzxxzzzrbztbseeeHeYHceXV-NC5uUF-R5YYCyX-2Vpc0jCF--5lM7-12TuM-hkQrZrS9X7f9e9enrSxrzaUxx9f9zzHhzUxqOaOsObbzSxoqUxyUY999c9Xcecce7eV5NDrSOLauUwzzzzEGK4K_0F2Z6YfEUoefUtzUzMyNNe9ceec0a2zdLQdyjwynxKKFznpGGJ--1-_X-AW0ZpjvnzCKKJ--1309--02HO---WrDV1sGfOOjzzn4KK-0FYN1qP-2W7RtfkF6J8G-geeemf9gemegfEbqUrxEbyTgecOwUbbxEbyTTUac-H3crrjCLEE1KoQBrofHegeecBefBeeegfAACxUHemeeeeegxrSrzxxoeeXXe9ecdAzUomXexzrzroeXeecc711_rI9nUSxxKMSryUzrzUpxKx9cV7cceghrrJnJmhBe9ee9VUrxy0a5-7e7VVX-7XccOVX99eefKKAAMxMIUxzMrxK9XXXXeXceXceee9mxxp9oeV9mf9eHgmeeWsXnHcmfA9oenJf9XcXcOby999exKKzMIJcceYBggghxrI9e9e99pxzpHeccceX110cXe7cXWzrUzUxzzrzrtzbaOcVcceXccce9Xceegcce6emeZe96buXeXoe7TZhBe2Bmc6eIBdC9eC9fHcHcAC9erxHed90C9MTUzoh9ZjJeofIAzHghHzI9nHYACCA9VxIHcfx9gmmnEJrKErJzSC9xrrrtyTOaUa0xSxKroxMSSrIMKqUlc6bztWx51--P7OyOy0tcX997V-NP6WsUaUbaOaX6VTOzzzxxpHnBnBggofCKSpJxUUo6pzzbtzyUzbxSzogfABeceef9mpSzoppI9e7X9nCCKMMK9fEI9ee19mfBgemh9W91WuI9gf9e5eX17N5NUXc0a1nBenUHfSorpMKMrHXh9XgmY9nMJmV1nIISC93fA9gnKBemp9e9XxKoeeeA9fSMzrxrpMSxMMHorIKII9eecgeceeee9gmghrKKCpKCIJonMozKJp6xyUzSppr5OttzzzzWWtyN5ObcV-5OaOWttyTTN5VWWbbzzrrxaOtbyNTUUrrSMMSpxrrSrUxxUUpSzSMKonIOaN6aVcVNOzUrL17ccXccVPeccX7717cXX-5V0zbzJxOboUKrKrrUxxrrSxxrSorIKSrMpUUISxxAESpGxrsVWzP7XXWzrrxVNXoccWcOcX-6xrV6tx0zxzUtbtzq99777WWVUV-50xaV0tsNUbzpUUzp9nUrpIyOzaUy9ge197e6zlbbbzbbyUzommhxonCHeIxxrxrxrUSxrUrrMKoogmmecmeeZcceX7eXHeeemmmn9eedCzHfoeeeZe_IMzIpoxHXKzUJxxUoUUprza0zxxxrUtyOaUUlbxIMKKKoopCIJpJoommeeeX9A9mmn9cce9Xe9ee19eXe17eA9mgnCKpJnBee7XXXcee7X-99XXeee9993cXV0ba5-XV0aOA919HgmeeBeY9mmX9ememef9ggn9ghA9mXcmeecX7gpCCCBnAAAABnCIICIKpJonCABnBgf9hBpBnBnCCCJonBnJnJonCIKprSKIMKKpJpCIKIIIHrSMpJjJxMpz6zHxCrrMMUSprKSIrMrMUUMrSxrSrSrrUUyTUbbtz6zbr6xxxtbtyOtyU56tzyUTUxzrSpxKMU6lWxzqNUSxpUxEMKJxCJnMKEUHhICEMrHxSUMSrMSrSppppMKMSSMKpKBxMKpppKKCBnCBopIKIKCEKCKKMMSpppSSSMMMMSSKKKKpSKKSKSMMMSrSSSMKpSSSppKICppMrUSyTUztbzzbrxaUq6zttbaObaOa5TOa5NOWWa5TT5-N50V7WWbaUbbtaOX-N-7-1-170cTT5ObaOa5OtttttbaOa5N5-1510c5V--0VVcX-1-V51-N7X-WWV55N55550ta6aNNOa5Oa5OaOaOtbaOaOaOaNOa55NNOV50a5-T50WWV-N--7nBf9mcmgcmmmeBgmee7X17eWba11X7VX7X79X97Jc7V7-V7117X7cV7---V1-X7X97--7X111111711-VX77V7-UMMMSMSrN0V5-UKKCMxpprSSSrMSSKprxrSSSMKKSKrMrrSrMKpprSrKrSSCKKppKpoxMUOzaTOzyUaTUttWtzbbyOts-OyUbbztVObyNNOyTV-0WxWWaNNN7X7VXceXXX17-7WWIBnIBonBd9eAA9Vc7NNV1CIK9117-797X7VX1111WbWy0xUzprSSSpprUxrSxxrzTUbqP6zrSKprxzxzzTUUUztzztxzzbtzSSUSMSzprSrrtzJmmfrSrSUSzaTN756xKxCSSIKMMKKpSKpMKprKprMKpSKpprMMMMMKrJxSSrSaNNOtVN6s---0WV17N-V-0aUWbyN0baOaOaNNOWbyOsN70btaUL0xLT6o-UM6lX6brSppSSSUUSrppEF6pSSSMKKCKVUMUL0tba-USSUKSKSSMKrMKpKSKKCKpIKIM6rSSpxMSppKSMKSSSpSrSxrUSlwT777VV---777X7XX19XXX--7V1Hc1--N0VN570c6bzKMUzrSxprK6xMxxrpCKS5NTT6cN0zltaTOa--57-11-V7X7VcX7c7X77977VN-Oa0aTObaUUoOxpKpqP70btyOwUsOw776rS6twUkUOtWaObX6ta0bVcOcWy5N-5T96XWaWccZeWWtaX97cecWzUxxq1X7cVX77VX999750a6VOttw1XecXnIBe9-VZceX7V0zTT-OtWWbrzSpCCUJltWbbbzxzUpoxopxTUUxprS9zMMSKKxGtaUtzV177177cX7X7X997-OtWaNX150a6V6rxUxtbaOV-NN0WV-75-0V77777X711-1X195XccccXZe_on9c29c799ecVOWaN-55NP-T-TUzzzzlzzzsUzxzzrxAqUyUzuA9770V-5UzbzOzSSUrOVOac7WzzxCrSUMJgpIJrKIHgrSJxSrMSrSrSrrSrSrSrrSrSrU55-X77TOe775OxsXX7X15WzMcXccX-Xee77-VX-UzkOzSq7UbzzxzSX5OVNUbaTP6xzrzccccce1XXeccWzzsP7ce-U6rSzSzbzUxxxzxzUwUqXcPVTT99XXce9eeXzS9cXXX9XceXe9e9ce9cece9e9ececeeeeeceexxxxrHee7ece7Ue9omeeXeeeeeeeccX999e9eeXgef9eeXXXeceec5eXefC9eWcPn9WeXeeef9hzSxHcfx9cBe9emee9X_Sp9e9Xe999XWyce7X9ceeeeXerp9eeeceecVeeeeen97d9ec_BemgeemVTOyTNUbttXVe9cce9eeef9e1ee95eeec--3mJ3-01RcfV-NIoOUF8R8uLgf9hIHeec1Xe9fBeh9mfEzzyUrHenxyUyUtzyUxzzbyTTNf9e0a0cWEvKdK_KKKLKOK_aJaPPOOUeKdUddLTyEukyvizjzzzGK43G3322EBkwBzkwwzwzwzwznwoKKJ0K1X2ABrpzzozzzaUWtacme9hxBcXBoeV9--7KZ5R0K1i5QpxUxzUyUzbxztyX9e9oe7eAHXe9eV--KycF0gAC-Bf9rUzta7c-54dtbV-61qbAAy---LztF1oAWqEUzrzxzbeXeecf9V-94pL6xF--Agu7--4xl31226aIBogfABfBf9nxxMyUztttttzbbzbyUtzbsX9f9e99eeec--5HLZ-A28MQry9f055LVqKKPKOaOddaKaKOOd_bizvy_MeOOOK_LPPK42BnJFzszEo0G4aLKOUjuOLO__GKKKKJHKG32K_KOKbnzzdKOLOeOO_-EoJG5KK_KKKGK2wzElGLK4K44JGJKLLLKFnLLOJF23dLLLK43_OK_KOOKFqKOKeK4KG43KKGGGOKKGKKJKKKKG0OKF_FOK_OKKKPLJK_KLK____LKOKKOLLMjidbzzdPPKOKJOG2pOKOKLLKOUu_PUzzzzYwzwydKdaOOKKOOKKLKaOK_OO__aEeOLTdzzEBydaaKdbEnzjfBnuzdPLLO_OLLOK_OLLLUzEnnEnzEnwwnz42zuRzEwwwwznK2nnwzEnEEEnnwzEzvdKKOLO_OOdOUEnwznnzYwnkEEzyEiuUvjzzzvjnyaTyuiz02yyawBkyeQeeOueddaUibuPJi__9gwnyaOOPTvuPJTbeLzEiYuEiaQEeRydiddddaJ-x4K4deadddaa_daaOdaOaOddePaPOaauddeufEeaLiuOfevduazjuzfvieeeuPueefiviiebe_3KvfjfEfiveePivjfiuiE-FGJ--3--4-FFF-FF33F-B-22vjyjeauefeiiuzefujidavuyuivfiuuvfeeuePaPiuvvjiiyyzyivvvvvyziyvzjzEnnEvyviviuvivjjzvjyyzwEii_viuviuo-2vjffdKHPdivgEijjieEigzjvfYyfno3-z2BzvvjeOiivffdideeeieOdeLKbeLuOOOOedaeOeidjgnueaaLOaafeveLyyvivffiiuuiiiiiiiivevfiiieiiviviyyvvvvvvvjiuvvjefeueieieeeddveTefeaieeeeQePevedeffeuieeuaeeeaeee_fiffiieeQeffideufj3323FwEjdyuMeuaveTuQeuLEeudG33_eLVzizvdjfzi_JibeJF44fzeeu2vc3BEfdvdjfy_vvfyEvd_TyfyeTgyY2yzFF-wz2zJGF3F-kz-F22Bn-0GKG43F-2BwzFk3-BoFC4300-EyzjzBo3-l0-zzzwzwzEBk2B-440-04443-EivzjjvzzwwkkBn2-B322BB-zyadY2-B2-nBkk-oF0-o-o2wBnnBnnEsnE2Ezsnvzk2nn32-nB-kk--BBl-2-23-3-BF-B-ysn2-kBBnEBBkn22-B--00-00GKK43GG03JG43KKOGJ_444OOFddF23BJHJGGGJJKOddG-kBKHJ44G-nB-K3-F3-F403JG3GJK45KGdGK8J3G44-3G04J3_LK2B23JK8G3FExKOLK__KGG4KOKG-3K4OHLK_affedaK-G-n2-F-wn3_aO___KaPJ4aOeadaOaLdG3G3GGK5O_OOOGGJFG3FFFF-k-22--n--GJ2K4KK_KKG_KF2n2-2-C-nu22-2-nBn-KKKOK_OPaeOdd_eOK0O_KOLJG44J33-FFF3-F-2-B-B-k2E202--n-wnE2yEEEB2ynkygEfynEvijz2y2GJ2zgzEgwygwyzvyigwwziiiveaaidfuuevfiE22-k-0---F----knBnBnnnnBnBwzBnnEwx-EsnGJEnkCJBBBFkB22nyaLdfeaBknB-EsnBnB-zznzKK2nzznEzx03BknBnBwznByEwzBnzBynnzjzdLJ_OL_aOigwnnBnyEnzEEnlGOJK4FpF-FnBOJGFzywnwkoJKOK_OK____aOJBEBwnEEEwwknwzzzzzzzzzzzEBwnnwzEswwwk-nC3LK2BLKK2wznJK4JK23J4-FzYsCG2lFoJEC332JCaOT_aLPJ8_OOJ34JBFnFwBEK4JF3G48K_4_44HLLPdaPaeOOaLLQiuudeOdaLOOOOOLKOeePPduOaOdGOdGJB3G2FFnBB-nB4K4_GG44GJC3GJK4KOKFwB-kG_F2BknBnnBwnEBzBwwnzwzC3EzwnEjzEEEEE4KK0-zjizwwwwFzzvih-yC02yijEnnnwkF2Ez2CJGGKKdeOKaO_Gbd___Fo-nEB48O_aOG2k2pK3EBzF2042wwwnzznnEEnlK_4F--Bnu7-D5P0Mj4-NFneHn99fHdEpA9e1mrUrMMy6rbyObacVUbsXc-95VQqU-0RC72gfrLTUX9WL7PGHOKOLKaLLO_aOzjzdKK8fyy2yvzzzzjnvEyszn-yvuyji_KjEzfvvdedLOOK_au_K_8KK4O_Oavznwzj2vYyiizdQjjyvjvzjnFJ43FEvyyvysEV2vkG-oJJ-J2vC2nzfvdvcyvB2EgwkznoHKJEKF44K444Fwkzjx4JEwoLK2EGKJ34KOGFCFK2C3GKKKLujnzuK_aK4K2Bl0KK_K__OOd_id_032E-wwwznKK-5koy5rxzzye9XeV0NQGfQzp409Fr2emf9gemeoemhxzoeenrzzzzzzxoeeeeHeeemnrUzzJr6zzzzbyUztttzIzrzrtzaP5Uxy1XXc7TOVNOcXemnCBoeVOX9IHeX9ec9V-7QyMR-O2VLYCrzOcTXeV-7R7oR-42W7vEc-16Tkb---xZJV2sUexOjjEzzlK4KJ--2yzH--10C8--0-gFV-7VNER-038rYV-7WePR--3FiX-8X7VOizvlGJF--GAnc-q7b4qavzwz43KJ--3In9--193W--G5YBk--7uzo-03SVI---Z6nF-JH3JgtV1NZFfOiznCGJ-03ZUnV-NZy-Ok--HUC7-18Epr--G9ncs--8SB3-23innD--1O-0-6lCPTmmnCzzbWa9c--8glJ--3qO1-3XRYCbzK-XlIJjmegemef9efDUzwUzx9fHfBfxyTTTUpsTUxzWttf9eeWtzu7-19Vk6-2lJH2nUze9VKcf22OuK5ObzzuOLKUzviaKzzzfzvwwzEwwwzYBzB0GF5JGaKOJOG__3a_OJBG4-PlNXPmfBnBnBofADUzJzbbbbbzpxzbXe0ccX9Bc6s--1mmx-6lYOwmextzUrP7cc-5BSZbV-45HC2T7-9BdhMxF6JOkqwemmmmf9e19nJemmmenzryUyTTUyUbbbbzbtzue7-qBstqKOOYvEEBo-45TmAqV-1Bzxq-CGcDCxzS9dEMrxowOX7V19X-6YINKaOgnk--leh3lV-cqZnQo-AGhLznASpxpObxa-cXcXV--sj9F--RjYc-9DO8aRk-JRodC5V1Ntt6OKvznCJ--6Flm--Yf48k-BTXJhc-LEJ7aTYC-0BTkwjJhyP7P1LYtQd_KPPLbePLnuafp-yEeddzzEuOiydeKOGdzeaK_jzjjuKKaOaOUEnynBzvnzVyzzEE4FnBwBGGOJBF334G0-3JKJEknBBlKKK-wnCF-RUIqgju-4Yv7daLnB--6voH-EYxyt_ueaYBBE24F-wUjugoqOWc09F4K5OGOOYyzBzElK-1m02NnLNP--32h4-0m0qgnqV-1FPCq--H2Gus--FRXJ--7Gue--38td-6H3zimfGzxLPWaX--3E7C--16gBV2O3CZOuLecn-n3--RX7jgyP--3G5C--18RXV3t3nbP_3_iju_Hz2-B-03XWAgfxyTcV-047KF--Xjy7--GPHJ0W7iC6CSKKIICJnCBemzqUbV6sUa5PX6w1711-V0d4t8OOwwo--7o-P-3ZP3pin4--1CVBV-85mEN0d7rPv9hEIBeXrICxpCAIBtxrtbttztWV--UWc7ec--ZRVOk-3Y_fi--3SWl-1HE1urq7V-06YZF0JYnKBgltzy9c-1GuEq--1Ey3V-87P_R--8B0X--3aep-1HIL9xw7V-08jeF1RZt2BoxCKLV5NOaTeV-LHXk5OUn-3B_KjRnEJxK6xSIBnGsOV5-5-N7e0PZfppdQivevivviuviuvfffiviiiuuivV2vxJG3G400-F2zoG43G3G3G43G3043FJF-B_XHC--1HrHb--1Ml9V0OBPSTykK--mPGuw--0CdCF-3bQrg--_-bGk--c3w7-1J1Tb-nHWSNmnBmnCBnBognAxAACOzzzUbzOzIAAEbaOtbpICxtaNHW9WWttge-Ou9dHce0uXWaOaNTc0qJ_j5Tfuiyfuvyn-43-C4GJJF-ZdZ-CEN--qKF5MivvzoGGJJ--9fZm--4NVG0OHj5Imgmgn9mggggggzbxlyUttxUxrltzzxUp9mcegf9nBx9HzICBnICCIKMbaOWa0c55OWaUlaOaUxxrIJogmqTUpK6aNNOaN0xMUNT1-XXceee7cN575ec0cecV-0P9QF-3hh-D-7_jKnaJ2nyZ-YA_nYBnBnEUttXVOc8aMCmTLLKaaLKPddbjiuievivijivfivy_PPeaeffjyyvjjvzEnzso3-F-3G42l4J-2zvEBGG00LLuJF-3KFK003GFEyxG-nEzvp-B33G_JK--muI9w-5OSJStaOeji--wBzzzKGOK-0JieNwmeCzzaV-TMQgDzvlJJ-GAk2vrxkPe7--MV8o-6At0AC5--OURXy--gjqMEraeV2OUrqueTfVFl22F--jvyN-PNAgydcnF-Yn1WRrSpppMJeYrJnrUKq6ce7WzTUzUUUNVNUtsX7VJece9XXX97c--5440-2I2OHnJsOV-1NxR5-Bn6z2mgeegenBzbzzUbtsN--0_72F--nKlc11OxXDLKKO_OKLQvzwwwzEnnnnKF0RnydBghMMNN--dOfypPMdfibveueeaPaOO_3eafd_J8KOKKaaOaLuLaLvcyEieQevy2l---GFpJFzz-ynwwzzyeiyv-Bx3FEjjzVEvV2s2ufk2G0--3FF2020003JG33F-dC_NYAASKopSbtV--77--QufZ--CxYX-5b-NCbjY3F--sGR7-DRSQ6v4--2ZTFV-OmFuQF--tWp7--Rrk3-2DRQfF-ObG_p_LKK4LQjvvvvjk3BB--2cnkV-0opdF-BuUUE--1SP5b--2fOPV-0qQ8F-JvLKBlV-ttYkOgB--EKfm-GbimObjzjzzK4JOJJ-QEW629fAEU6aT5-Kbx48aOGeQiv-nzVk1K--4-Bei-2c4b_aEF-00fX7--VsoZ--FYHH--7bwK--3KeVV-19ymF-456Wg-0cmm4s--oPB-o--PCDOOk-46F9i--7vjd--oSsBlV-uEMIQY3-0GwSv--1EeMF-06tTc-5Z2ZLk-2HUyYu-0dG4tY--3dhcV-1KhfF-09wIc0ea0y5OddePfiivc-kk---0--hB85hIq---PPqqQ-ACDhYBegf9nBoyOyOtzzxAUzUxrxzxKrqUSHnEyUzzOzbcXXe5e9X97XXXccX9Xee--1UpAF-SFcxhOX-1eB0xgo--Jd31--9KJS-9pBVymefBnKMUUaOVNN72Xdb-LMveiuLKJKMinzzzvfY2BzjEzzY3GK3FK4KOGKF-0Ji17-ueZcLLyvwzYGGK-0KK8igpzza9cc4aecw5eQeefeK3iifeyVyyaPysnzivW-yvivjf3G32JdFG5OJG-3--EB2003-C_GGF-0M4Pc--fYVJ-0L1VIV-1kjSF-0NOQ7--gXeJ--LIdm--AAXh--Kaimk--h2YJ--LYMm--fHOlV-4QMoB-1fQzGbV-OM1DQUKrSV17XV-PsGvQ--0R8xc-Pi9hLee----4n7gV0uuK8Ovwo_F-0SPF7-Tihf5jioG3-rMLqIMSxJfMpp51-Uk7-X7mV-1vH3F-0SiM7--ivJJ-4MU-YL--5j0_5V--MW4m-Ffnz4uebcnu-E0K3--4umFV-1xQQF0KULdhJnCaOX--5ji96o-jMt7YCKBproNN55-KC9-7-Pjp4LPbw---4zuVV-2-p7F-4VdEB-3g5r8awo-6q3GTnIBnBlaOaOV--kXLJ-0NJ5IV7f1wFOePedueiffjEBwB-FFFFFG0F7pWV6CJfCAHcXBnHgpIN5Ox6lbxrJpMSxbpNN7V56rMF5-7-X577V--lo2Z-0O25AV-28oRFJ__7yBm_ICCAEJgcnBdJonCBgegnJpS9XXe7nIKCSSKpxppCpKUrbzKOzaUUoUzKLOttxGVV557-OWtbVWV0a6ryX7X70cX1-cUu-Uy90zaPcXe90XX--AA8ER--Oap9--gnQdkH4b2ThSprSrUSrMSSUSxpMKpUSprMKrMKSpprUMMSrrSrSR6rbr--N--0X71d9-VV7e7WaWu1Zc-cVe95BcZe7917X7cXV7VX9eeX9--Bw-4--LXIak-9oUkasF-KdZHh5--QKOSQF-0f7Ac-DpZnLQC--5ifVV-2M_TF2_g-RhCKoxKSR7-6xX7OVh9-77uqCsLOaOKKK4K45PKaadudaaeddaejyeedeTsz--o-k0-nzuafiueskznG3FB3FG3EBnknEs4_OOGa_K03F-BBzvnywzvvzEBBkk-EQ93ASrF17--hcV8V-0ho3c-1r18a-KLsKtn9ghIKopJxGbzlz5PcOWWV6bZeVXV-erChLbuawo3F-0QgRIV0AS_oTz4F-0iqsc-LrVEayh0F-0jBw7-1raaM0sqwtimmmocCrUzKrUzbxJeYBexrSIoT50xMUUSrzrrxxxrppMMIrI9gnJzzaUOzSrSUUzxtbX7OsU-UOzrUxxSSSpxSrzxzrr57cWue-BcVX-X7X10bqN7e7ce7-7cX7eX7ecccXce9e9997eBhHmhBnBme7791-5119cXV-ATZeR--Qs0X--CxF4-2M-EHrMNVV-1s18b-0M09Rrc-3i33Gcy3-7r1pBmhExpSrcP9-7-3i6ThbzJ-0r2kLmxV-LsT9bywKF-Cl8ajc-5sg76o--RNyP--DBcS--r75Dw--AZP8N-CRYLYIrWcV-AZ_gR-hRb0Q9efBUUzzxrq7Ve9--DIcG--69X3V-2_KXF0CmrNBxUTN7e--DM2x--MBNss1qtbGTeeeiebfeviufifjG-FF-FK-2F-F0-F--6CEoV-2b0EF-pnx7hKlVX--DWBO-IrGX5pJgomd9Beefrr6rUttyNUsWaN9c-iuOLLLPjcnF2--0p_uc--uwAJ-ISZnnCIKWa---QgbdT-0_qJ7CprKy7917--Do60-0MPdwpc0LirO4eLzjezyyzzzyyzjzjzzzvvsFEiyn3OJFKKJFEwwKOKJJKGd_GKKG3JK4KJ-ESx2nSrP79-5j2XKaPVn--_t4Cgjtc-1wYGa--6ZPXV-Ama9N-CTK4nUSXX--2n3-F24thzhrHcXnIqUttxbcd97-3jCxpvh0-1rbiZpEa1-JjETd_azzgznzC_KK4F-0TTz2V-2nrwF-Ctvzgs-Dwy-LEp--Mcags11x3uLKKLPLLLOeNwzBknnwwzECF-0uAGc-ax4e5iii30---6dYeV-2pDWF-0v0pc-uxhu5KvzivnG3GF-0vS9c-Tximavyl4F0GTtRbKpKKKIMKorSKxcP77--50cV1--X-0jSM8x--MlFHs-PyMyriv3J--6njmV-AuIRR--UKqu7wjf1GaaeOdiaPdeeaeadePOdd_OGG3FK43G443G3G-nBB-En2B3P_3HKJKGJJHPdOKJO_aOeOaaQe_K4_F3G3O_8PKOeLOPeOK9TddJ01OaPPu_aOdaO__OKKaK___GOOOaLLLOd_-9PPeaPPefeueOH_Afeeeueuaeaieeeaadd_OdvvivzynwnnwnEnzzzzzznBnBzEEEEzznwzEnwzzzzvizyzuuaveuePv-wnBwwnBnEePaOaPaOLEwBknueaaMwzeeePPujjczvyvwnnnEuuusEnnEEEEzznEBBBkn2BnE2BknknBnBwwn2Bn2B2BBBkkn2--3Bk-k-F3F3J0F-BK8J-0-3Fl43J0JJFC0220-FFB--434_F02-3-FoF-3--ULK1-9jk6__KPzsnC-0rs2uxu7-5z6oLo-0Ua7Y--2yTuFFpzEegnKCAHYSIEIBgmnBen9mhJonKKpKpKIICCBopKMKpCMMMSxxtbbyOVNN50V550VN50VN50WVN-0a--0xLN-V--711-V0R4w-PfBJ-5sCnMpUSzGcVcX--36DPF-a3T2CpX7-21Rkb--7L9iV-3CdyF-D7K1E--E3yyLPB-AsdryprMSrUMUXVXX77X7-0lNuCb-0sh-cpsV-24z4a-0O5skoP--HJcO--8cjcVMwvW_PePffuOedddaOd_OLivedaLOQswwnnBwnnBBEEz2EknBl___JJF2-ddFJBB-kFJF-3Oxo3mryUe9--oNo0k-L_0tBtV-x9UXPVk0Kd_2QCCKJnKMU6Wy6x0a5OtWWaA9f9eX9VNhBeeOaOaK_aOaOOOOOOOLK___aLLLL_aLbzjjjEnnnEEBnEBnBwwzEzFnBzBnnnBwkBOJ3--9Q2JV0hFDWPTj03-0esaIV-4M3pF-DfxqCV-0LPM3-8fbYnBy5-Cq8_WadYzEwLK3--A59FV-CZXbR-2ghDYk--LQk_-0vCsPnTV-0OncZ--gxEe--LXbt-4QGLNnIMaTP9V-4d4NF0DoYGBxBttWe--LdTx--AJjgV-4fDgF-1q1n72bQ0Tq_fzyaLyy__JbzjyiyEvnzoEzz4K44GG440J0GJ--AQaoV-hj4xQW--QUtTs-0QzBZ-2hzuIu--M0W0-3QVpXzUSX9X--r954k-6-LVD--s6udk-U12pBUe--NKbO--B9nkV-55gUGAILAU-ee9eeXeeXeee9eeXeyN9eeeee9XAzbzzzUUtzxzrza1fzrzs7Xe9XmeeiUzrWztzbzzsUztbyUUrztzUzzyUVfzMzzzzzzzzzzyUzzzy1SzSxzrzVczzSpUzbrzzztzzzzrzzy1cXXecXe9zzxzV9eeee99USzzzztzSzzzzzzzzzzWtzMUbUztUSzzzrzzsD2xzxrzbxrzbVeXUzMMzbztzztyUWVX7cX7X7ccX8rtVX2Vc1gVWrVNOta1UbbaT6byOyTMqXggpFemnBnLpThScXXopfJppUhSzt_USUrxSxSzUUKwepzznMzUwefMzSCJXAKRemgegeeoeeeeeeXe99eACMxzUrxzUzzzPmeceeeeXeepzrzzzr9eee9e9ehUrxzrzryUzzzxwg-3sRUlgzK-1wGfBrUXc-1s_20ck-8lARQMsc-6sakWaUYsG--BJEyXtygSR0KGMwzkKK_KK_KJKK4JRnEEEEzEnwznzwzwzzzwzzwzjw3wkznnnkKOKGnEzwEEwzB0wn2vyizz0nEEqPvnzzzwjjEjzEEwznzzEzzwnvz2jjvvzwnkTzzzj2vznzvzyzzyzzwzzwzzwzwzzzEnwnknzfjvuzECfjDzEBBwzEwzEwzwzzE2vfwzk6njvw-nzEEzEzyzvjvLizyyzzzyzzzzzvzzzzzeOPPKd_4aPuwnaLK_aOezjEwznnn2EEnn2wzzEmwznzEn2nwwzznwwnywwzzvzEznwwnDPzzwzzzzvzEvznzjEyjEEnnwzzzzvzvzywviwzzEBwzwzzveznyuzjEzzzwznzjwzjwwztfvzznEEEnzzzzzwn2BwuO_fizzvzzjzjDywzjjEqKfyvzEOfzzyLjzmzzn2hPjjAwzjvjezvnfzzzjAzfjjqKOO___OL_KKKOK_LKLO_KKaKKOaOOLOO_ePLiKKKLKKLKKLOOKa--wN-ww--DBg5N-4latIyc-MYUfaRyCF066q1CJxa5X--5F6mF7z9BugfEUSrSArzxBefBeJcrrzbtzUzHmfUzzzttVX7X7XXX7XXX9--yKGGTsF-2mkw2k-3tQstjx4--BkdsV0DNK7PzGF-6B9ki-9tXkO_K_zznl-0RovXrc--OeZW-IRqTXoeXefUzzzxHYUyWzzzu9XZmZe7-1tmAWzJ-0nbeYV0DRxYTvG--2Dto7-0bYlJ-0nm6v-4DTdBTzyzvzvlJKJK4K-8wxJTrrrzrzOceXce9V-DTg9R-dnsbYExxryUzaeeceec-6bz2Lk-2o5Gnu-1u2YOv3-0oCyAV-iaLAUp--CCXRV2Db2oOOwzvnpKF-ppYW0bVVaOyUzzzrxpxpzPk-2eBMb-8xGoerUUxzry9Xce9XV2ydQ2OK_OjjnBwnJ--pC19-2uliNEyk" :
		12 === bI.s2 ? oD =
		"JJAf2uP6y-0nEiiuyywnyueuTbfevfvvjivivivjfvivviyvuuyEgzjjzzvviyvizvviuNziyvijvijfvyvgzvvvvfeu0-F-n5a_GG4KJGGG3G3G3FFJFmKGJ4JGGGG3GJJFJG3G3G323G--kLPeduaKGFGGGG443JJJJJJG--B-C0FJK__443-BJ-66wmpBnJopCMJpCCCIIIJoopKKICKCBnCKJgooopMIDOzzSzUzbzzUSyTUxxrrrrrP1XcXXX9Hcn9cceemece7cPIoeX0sWWaOWVNTOcTNNcN0V0V5-N0aOa-0V--N50a5Obyc-M0z3TPOdgBnBF0NOpxpMV7-M2mMiLbinz03F0sTx8mfrNT-2l6QEdMwwp-5XX7UMTP1V1GIuvaNn-5Xfxrpw5XV1GNTEfn4-_XvzjAAA9mfA9ed9fpzyTUzyUaUyOX3n59NTKLLKHPPPO_LK4iidea_O_QeideeaLOLLJG3-0eeddOaPO_OKLKzEznzjgnnzBykknByEYnByug-3332ElJ222-2wBko2BnBnBwwzwx-9Y6j6rrrkccc-E5ctEizpJF-aDYgSMGz-X10G6VyjiyuuPeiuzjivh3G3K3G--k-9JGFAPEIZSKBghKSMIpKpCJnI9gcXeccehHccoeXBeoppKIJoghIHnCJnJmemmecmfA9jyTUzzzbbxbV0WaTT-OtWWWV0zxtyUN6yUzSxrSqTUztaN71190V7-5V15VUy--V-lxHEg--33oL-67Dhyu0--3FoL--7ahw-LGYowfzu-0HFMIfF-aHWWwxxxcXX-E8ZrUdfVl--TIJLzSr17V0wcDLvivjysGK3G4XaJb1zppIJpBccccge7fUxx9eocX7cXX6y7Y99Heggen9nJdAHp9Xnp9IIJfICIBdCKKIIMMJme19eXxxp9X9VVfEMMMSBpooe7XCSBomccxxpHcrKKCMHmXXmcxoeX1mpJe70BrMJmVV--gxExIpJcX71nKCJmhCKKCIJoopCKKKHX8KHd9nKrKBj6xrSrKpz6xSMMSrKppwObaP-UzSCAICIKCIKKKCMMKKCpCMMSrrrKpKprUSprMUSMrSprKrSpSrUrUSxpxprSrMrMprSSSppMKprSprrSrxKSUSqUGbqUbbrxrSxrSrKHXXeggeYBnBgmnBnKCrJnKpIKpBnKCMMrSS9chKKIBeX77EIAE5OxIIKKKIIEKSKSKKSKKMKpKpKKSMSSSSrSzxxxzlzzUzzzzzUxrMMMMSxxxrrxrrxxxxzUzOzrbxzrxzzzw6w6yOtttttyUbbyTTTTTTTTTUtzIrzbzbzbba-71-VVV77V--7711-V1-1---51--1-1-V0cN-N5VN1e-ee7-1mc71Xe9fIBcVV0WbyOzxX-VV7VNN5TUzUu1ce9menBecmf9gxHc7c7V-777---50VP-V-N-0WxppSJpr6zyObzttV6rMKpUyObttbryUbzWaP0sNNOX757X97X7ce9XXXXXVc7-V-X7VX5-V7eeA9menA9fBnCBnIIJoorMIRObpIKMJpppSSSMSoeX71-V7777X97c5V-ccWV0VX77--NN55-N--7U5111cXXenBcc7fABgcX117X7c-gf9emV---1--XXXVX7X17579VVV117Xed9XecXX--WV5Uzz6zyUzrSrUUaNUlxtzXXXee1777X1e-5NOy--WV5OttttaTUzyUrxxtzzzlzMUrzzxaUttbbxWzxpSonBmpCCJpCKCIJpJooeACHpprSxaOV577U6sOWV-NNN70WVOWzwTTT5NUxryUba5NNOba1cc79cXX199X-91X99mhIHfJmXgxxxpHe9XccX997c7X0zV--V-N7P6k49V711-111X-77cX79mmeHeccV1mdbn_Uno-DKNVSo1-O9kaiKKzzEzpK-8_SLEzzzeeeV1Hinzjh3-8_UsM9mjtyTVBHk8AfiyvivizpG43G3GG--0OIzV2mnjMaLEBxn29mc4SSpprSSSUprrKprSSpppKMMSrMrxrKIKHhKHfIKKpIBpCIIJpIJnIKpSKJo1AKKpppxprSprpMKphIKhMUSrCKMRpMKrrSMMMMSKUVUxxUxSJe19efAKKUbKnMxKKUKIKUStaSrUMTUrzbzxxrSzzUy5SSKtbqprTprzSxxSrBXe9ghSrMMUyUzzbySKrUKpUSpSUMtV---D--0aN-X9997977VVe9XD-19XX1-9XcXXXXYxzUttzbV-7VX78by0rUSppKMbs5-V77V77X-X71--17-X-7V-0WWVN-6byTOrJepKpSrpxrUSSIKSKSzrrrs797c1711ObUSxxpSSSSSSy5--7997VV6z_rrSrxpSprs-7VX17XeXVXN-11-TUUSxztyTT5ObzrSSrzbtbbtUKzrxrSxzUrzUzShKhMKrxzzzxyMtzqnAA9mgfAAACKICBnKzbbWWbaOtbaOaTUbtyUyTTTOaOa556zyMxrUtaTUzrxrrrzSzxzbta5N0s-ee997cX97cX7cX7X771-V-aT--V17V7X1--V7Xea6ty5T5Mts5--5-550aT55NU_ySxxta5OVD--0VN5NND-N--8a6a5OsN1og55OVVOta-75OTSqhCMrBmhMbbtzzzzta--NN5-8Us0V-N1eD-XN0VOKppraT18zs0SyOUaOa5OaN1-VcX7X5OSpSxpMSra5NNObV5-N19cVc-W_KMSrrxxztzsND--MJpKMrzb_pyTMzUa5-0a5-X-VOIMMMSBnKKSMrMzprzaQBen1ceeXcccempprtzUUSv9mmfMrxzUMxpUUUrzbztrxyOzUxrrMzbWbJppSvC7gmenA9mgggfABgnBf9nBppUrttbzUzCKrSSxzbaUxPfMSKpKnJhRpIAIIKrSzUMMzxztyTObaTOWWaTTTUbzzrza5ObaTOWbbbUrSrStzyUUzbyN--s5T2rs-1XeXeefBn97VfBnIBemf97cXcX7bWV1111c1eiN7f-ABa6s19n77X7g97cceX7f11UzUppry-N0MMAIKzV4UW_rJoppza55-TMSsNObztaOa6KzV-77N-SKKSUzbaOaOyUtzzzyTUbtzxrsOaObtttSraOWaObzzzzz_ptaUbyMzzyUtbVUyUrUzzzzzUzzxyQMzzUzzzeeeeXee9Xeee9eeeefKMIKcf9ggnABemefCCKzrLf99X1fABgeeXAKSSMKxxzUSrSraMRpSxrQA7X7X9oopBo1N9gnIKCIJmmmnKIKJomn7emfMBc51997cenKMUzPmegmfMMSzzyNA9OzzUUIKMUKrKpSSrUrxza6SrMSrrMSrUUxzrxxxrUSSzSSxSUSxSrSSrSrpUrMMUSprrUUUUSpKrySzSrxzzxpzSppprrzUrSpSSCSRprSMKKpMKrMKKCIIIBohIBonAAABnABmgemhBmmmeenBnA9X9ecceeXX7Xemmcemgef9nA7en9kecee9eXeX1-enBkeX7XeXce92VXX99ceACBn9XX77XVVV--X7XemmgeeXXX997VVc75OVeX9hAAA7eeme9eXe9Xeeee9e9ceemmmmf9meegfHenBmfBnA9mgggemnBggfBnIHmmekeeceX9e9cXXXmoeceeXce9Xce99eXnBpCBpSrSrSrMSxzzxyeeeeemkeemgf9pprUzUHmeXXem99e9eceef1dbs17ecepKrMgg9XeXccX-Xeen7cXeenBmnBghCBgnBACCCMCKJohCCMrzzzyUzzzzqognBmnCKprMSMACKpz_wmoogepCKrMSMStUZkeeeeAH15-11-X9hCKMSRomcgpKzprpprs0z_rKppzrSrzSpIKIBgXmprrUKIKKrttpKzSUBomm97ghJpSyUzSzzzUbzzUtrzfAI9epnHceceemegghUUzxzWbzzrbTopMSta5OVOrzzUSKUUxrsOrpxQCSrIIKSxSrSzSrzUrUUtttztUtbzxxMaOV-sOWV5--NNOUzUzxzxzUUrSxrrUSrrSzrrSxSprSppprSpxrrrUUrbbtzrbbrztzzrbbyTT6bSyOa0aTOaOy5T6aTOzbzpxxxxpzUSxs7XESrKyOUrtaOa17zyUaTOaOSxprKCKgnIAAABnBnKppppppJnHnCMJnCCKMSrSSKKICCKKKKppKo-2AYFDB--MPns--j8uk-0TwQV7mzO6ievyyvFGK3F--qNX0zxzxrXce9c-3mKUw-DOJuzw9-lBkNyuuuviyzjJK43G000-OaPJEprzSKMrrkccc-1997-2C8pDo-uPOqwf9mnbbtyTV-2Jzv--5gXT-CCmSUvvGG--5xsy-0D-rE-4b-qzSqX7--sMmk-0lNEV-IZ0nk-tm6EnFN-Rt3BvgF-5ReOUc-otNAvisG30DRoZzUzzzrwP9eeecc-3uJps0eSSKRrMGzrzrrM-V-eXXeX--2fpn--6MiT-0DoXD--6ULD--E2lg--TGhs--wrkk-0uNAV-npyzx-0bkCEF-6EeL6jG-5bpJQAEbaV0nuubvp-0dya3mhrk--BzMKzF28zMOzrMUP779c-gziXufkG-2byBQrcV-J-IhV490elopIKKJzlX70V---2FCPyV-HVlaxpX7-x0_hzvvGGF-12_CV1o6LCaeB---Vy4s-K15tuR-0cH3EP-AFalyPf--1u44Wxxxr17cc-CFkqTusBG-2cO5jMcV3oE3YuuiB3FF0P7tWrre9-4GLRUh--19rRV-JN8nk-1B7iV-3OQA--cpNzV8oQxrjjizyyw4KKG44-1d-ezGV-_77wzvGF0eJQZmxL0V-C9jlvF09OI0rTX--JoI0k-PTDyyV-40oK--e5AbV7K29M_OLMfgznEB4-IfrEMASpSUSq-7-Nee-ANaSDyx3F0A69npL--1qoP6bvVF-qtlNxCKCUa0V7V0xqOguudaNznk-G3-Lvq2RrOc-2N7SOfvlG-2g3LFmnKUrla-7X--Vg031A1AJgoxMSporMSSr-XV--10aNXeV-y7CVQfz0GF0RIcNptae02XdsiLTezvzyyyzjzGGGGGGGGG3--GRVT-QXt0TTyyzwK4GJ-r5K0genCxtwT-V-yBnotTvg-F-RR4WyVBNuCtdejvYyi-knBLOFJJF3BSAjnMSzUbsX9XeV3t0vf_fzv-GF0wZ8bxrOe9--8AQA--HN1m-CZlGTLRwx-cmONzIxrprppKprUyUts-XccX1e97cXc--_7pw029QbgoonJUROV5-V-iJrguik4--mdjY-0tQAdaRk-BiCss-aMQLTjJ--3jUaV4tUqAvjzx5KGF-YB7rwfzwOeVuOXlO_O__Kbj2vizuviyuuvfeveTiviynvYziefiiefvfiYvjB-444G3F-0-2-kJ304K3GGG3JG34--F3GJ-IBbGxS--3yOw8PPd_GaaiC-Eueibvyvx-304--C-2IBzcggmeenCMSrwOaOzKHmnrUSxzTOu--V7VVV9c-yPFVPuf0-F0gt0ZpKs17-aTPhOiBFxRy2ZmgnJeeXAICBnBenJzSrKKrrSSrKpMKJnBnCKMSMIKMrxSOV0V0zzUKSpppSKSEKIESOV-Oa0sOzUrMKSppSUMMkP77V-0a1--VP-17--71--7-UxSrrrrSJpqOtzzOX770hBcX7V5--XXV11cc717X7X9XX999777X7e-_chDLLiiivYEl33G3-Vock29fSpSKonCMU5OaNV-NNX7c2DaQYtPjzvjfiywGK33G3G-0xDlzpUyX9V5PSx2jyuzVGGK-0CFZWnwNV1uXF0_fBo1IJJoSSJnACCCKppSxyUV-117-N711-6evlav4-JpSyQKUSSSpaX517c-c-yg6luPzk3F0CNJQpy9-iumBnaLKKeudOKG_KLKLLLueLOaQEEjEjyinEyzejjnskBnwC043F2-nn2zE2EEoKGKFASOdporHX8CBhzxraUqUzSlzSX77eeeXBc0V-LhikvW--KmlL-EfebDLTskk-YMe-RrMTV7V2uyCCaPEBC-5q1sjK6a7V-A2Ih-Aq892rMUNP7cc-TlB1tv--ANsVBjV2v6d6aOwnp-7qIGAIJlaNV1imQQOPszivwzE8GGGGJ0vODuRhCrppCBpULN5N7NX90WX-6gppqPk-GqSXfBnqOxtaUemec-5nnTs-YPD2wz6re9-3QGmz__bnno-2PJQD-KhKnTaaTn-nF-0Pg_N-aphUzj4FKhhRbmhUrKHohIzMpxrpKKKSMKSKxrU5N5OaUL--X11777Hf9VX-N7--5P-XHXe-0hhca-WqtqMCppppSJp6ltz5NVXV-X17eV0QUJbjJ-nREfwnBwOtbae-IiGGaLPvEk0-Er7eI9nCKpUa0V--1v_ZSfcl--0T7Zc0TwsLPNzgz8K4--MdCP-8jMTqMno-QTv6BfDUs-CjSgLdjBG--rknYV0vttlfW-0CxT2mcUV6Qv4daeffkn3J3B-EUOXBja1CjifiOvd_LdKKaaOaK--nBw8aOFFeeKbfivzjix3En-2Ennz-n-3-2UYTi-bkAQ5LLKaRzgwnznGJ-MWJCRr5NV0wBylcwF0D6jaola--BJZx--NfgX-6lRkav3--sx_2V7RUnUaK_aLLQjzzz-atBrI9mgmnICCpCKLTOaOzs0aNOWV9c-E9stskaiM_-pIJnKoxxzxzrUrrxzUxzSrUSzSpISxzxbxzzzzrzzrzxbzrzUta-0YBe7mf9eeV--P9eee7XXcecVXeXceA9eeeXX-c7T9Bee997n9X-0wqC2ylF4iQ5frxSUzJzqNX9cX97V1wr6EuslF-YbY3xSUaeX--x1Jxc--uDnn-6S8wKaPedvn-FFB-zea6RfESrSq7-WX-6pPVqNx-dun9rIIKMSrSrSxxBzbts7XeX97XX7N---2MXGF3ilDMnrSppGa50VeXcHjS0jOLKO_LOaK_K_K_LKK_JKK4K4KGPedaOK44KOPaK_3aefffeTzivizzzyuvkBzwzszEEnwnn-nzyzwzv03G00-B2EzBEBwzBwnEE2-ow4SEIJmcccxxrUJnBonSrrztzyTOts-9X7VX7X9-YvBN2wwwwzvvjjzzk0zOXTUyUxzV" :
		13 === bI.s2 ? oD =
		"C0DX0NP1V--QqeadnzzjynEEzzjjivdivfezjj2BBwzwnEzzzzzEjnnvYBBBBEBnzz-UV-hflzUUSrrUzSxSxzk0a1-V50K-0pMiudevf-zvfeBnyviVF-F33-yzgp3bVV02IKUrHnUzzpHz5UzUzSKrUrzbyNN-OzzxzUUUSrSrrrtzttzWaOaTUzSxxaOaOxrKBnCSKCIMSKKKKIBpIJoonIJopCJpJpCCCBnBggeXn9eccc9X7geXXn9efHfBnABemcXX9eece7XHXeXecegeeVV1ee9eX9ecc70eXcXe9enA9fAABnBnJpMKpKJnBnHmmeeXX7X7cceXXce9eeccXVVVV-VeXe97Xcee9f9eXeXXXXceWVWBc29cX7V-6aOaTOWWV-1XX17-NOtWaNVnBn97X-7cf9mmnBemXgece9I9eXXomgeh9eX99eeeemf9BmmeHgeeegfBggmnHoeABeggnIBggeeeecVI9eeemeXe7cX1-ZmfIKCCIJooonIIBnAAAA9mmgnIIBnBpKCBnCCCKKKMSKJoonIBohBmnABnCABfA9gd9mhBopCIJonABgmnJopCCKJpBnBnBnCJnCCCJnKBoggpIKCKJ-UMSGxrMMKKIIISrKpSKKKKJopCIIKKKCCCBnIBjSrSSpKppqUI9cpKIKrrrKSzyUpKpMxS5UKxMSrSxxxpSrSKpIrHxrSMSzHfrxxzUUUSxrSrSxxxrSrrSrSrrrrrrUUxryOtttzbttyUzzbtzzUzzxzzUxzrTTTTUbyTTTTTUbbxy0byUtzyUzyUzzzzxzrrSrSSSppSSMrRN-OxpSMztzbzzzVUrLUSpprUtxKbxBfrSKJpKKJonICppKHnKKJoopKISppSrMKrSrrUSSpxxMSxprUSMMSSpKMSttzzI9f9hMMMSrKSMKpprKKHnCSSKpMMSSrKKKKKCIIC9gnJonBpKAKJpJpBpKBnCpMKKCKCKpKSSSrSrMMMMKrMSSMKSSSprMMMpUKppSJpKKKKMKSSppIMIpKKMSKSpKMSSSprMrSrMMSSrKppMMKSSMSSSSSprSMKKSKBmgprSSppSIMzxCUzprMUyTObbyUzzzaOaUzzzUtzzzUUqOaUxy0bzzzbbtaTOaTOaOaObaOa5OWbaOtWaOWa555555NNOWaOaObaOa57-6WV0WWV--O97VWWWaObbbtyTUttyTOaNNNHV0V-N---9-V-777579775-0taTOaOaObyNOa5OaOWbbaTTTTTUztWbbbaOVOWaOa5-5N-7X--V-517T7---7-Wa0V-X7ccX7-7-77VV-5-7-5N17X7XV-0VN5-N5TNNNNN50aN-5Oza5OaOtsOWWaOWaOWaOaOaOaOaObaOaObaTTTOtbaTOtaOaOWaOaOaNOaOWWWaNOa5NNNN5-Oa5NN0WaT550WaNNN--N0aN7--0WcefIBf9en9geecmmf9eAAABgee9egfBgmeee7cX7X777cce5TTT-VVX1cX1c7197X977X7Xe79eX15hHX11717-7-V-V71177VXX7X7ce-V-1-1-----117--cXX77ce1-VVV-0u7X777117771177V771-717VV-977X77VVV-7X-OWxpSSMSrMKMSSrSrSy5150WV0V5OzJpKCKCCUzSrSSSrKrSprMKprpMUMMMpKKSpzSxxrUMSSMKpppSCKKSMISMSrMMUUrrSrUKSSpppMpSSSpxrrSKrSpSMKKJhSMKppKKppSKKSSprxtzaUTObbaObzzzbyUby5OtzrtzWsObbbtzttbtztzaTTUs-o-9SuvkpF---4GN0--Akuevkk-0Z-5DzUUzzUMMSrUUrrxzzV0k24nbEF-72uPs-31lfR-X0zvBgpOsN---Fjh-1VahUR-033plvivC44-bVp12CUzzrxpztzzzy2A979eeXd9eXXVGkPch_OLJKKa_OLujjznwwkzo-Eno-q32WRrMKpkV7-V--7jXk2-IvW9e-7xySpV2kZ-vaazk0-HWAOjKHprsWxta7ccV2FavYivl3F2cIsAppKMwN117X-81g-ifoF-L4N9UrkcVDFfPz___bjvjjEB3ByvEGJKK--WQlvV0kn8QjoF0NPnGrScX-E2V6yPuEF3-D6-ISGX-42b3rh-0NYH_ooy-3P8eEOJFGGIB-B-0-2043LaPdaeeiZ30003G002j-03-JGFGJ-4K-03G-3303330NBzB-UzzB3DvzuzByyfiivieivifevefjzyw-D9vlxqX-A58vaOYw-07nF-rFPV4lbM4aaabBn3B-mC6fBmmjSOa5N-25o35o--CiYN-gQSZPTw0--2QiX--66YJ-9FT6CN-BHQ8jadHQyddcyvG2232-F-8Hr8k--dcfk6dIezn9YpIBhC5Oa6y5UrWZmX70C2JVtUzzp4J-mXEjworrq557e-6IQmyv4--dmmEV-JuCMk-9SVlk3KDxRuPiueObi_JGTyycnBk--4-BF-eicPos02KqRDLPefeTiuiviuk-K33F-----6f9qfBnUWV-jMD3iO_aOaPOiwBnBnn--0evOEn5U5c1_T5ktLKKGTvjzzYp-w0Rg9s6ABmeWBmghJonKxCIKIKKSKWa6zzro5Uxltbe9e5OtVOWaN-N6w6y2ABcX17cXV-SWU2PBo-alHDReopsOa-OOYdiPPPgnE00--BsPu--Oo5J-5oKjx-AxeUxtaeeTeeffeuePauuvivijfieiivePgyvvC000000-3-3G35JG-2BF0-30-2FFFF--3hlWISD1-ER5o5evV0-0eu7_RjSSprzrSrcX7X7X7X--6KDt-HirDjBnBnKMba5551-3rQbzaaEBnpFJAmhxnKSSSSKKKKonIKKpKpMKrSKIr5UrNV79V1----V55N-1V1-7-7-X79-IUBriLagwC2-3jm7YKkV7jUvJLaLMeudeP_LPK3PfeaLeaa_F8aaLLOaO__KHdOK8__KeePOdaaieeeiiefifeeddddaaPadOPePPeeiiveueaeeivfeiuyzjvvizEBwwwzzEE2-kkBB2-2-kB-2-B222-B-k22-BB2-B-BB222-k-kF-B22Bk0-F32nyevg220-FF-0--0-F003G-G0-Cl0ab9eefxzzba-AX5ODuklF2RKFUonyUUaPXeV9sgwrddaLaPNn2BnEE0F3RULpn9opxbbbtXVe-Y_1riO_LKfvEink--0BfCIpy1V" :
		14 === bI.s2 ? oD =
		"EcA20EP9t--46idaPadePOddiaeuuuebieeiiivuO_aRnufezijzzvzjvfuuPKJFJGG3GPKGPOaTiiiedaduus2EYuiedn2nyffdv32--0202EzeRwoG--Ezzjevck20202zeufik43BFBFK0G4-0_J--nyioC03-0002-n22wyddyjfzven3Eyv3JJ20-zynnEyjnnvjizjjejzyy_wznnBn2zvnzyvzBl3GG3G--23FFo0-wzBB8m--ZISrMUUSpzrxxrKrrSKpppKKIACBnAA9mmgfBcee9cXef9geeeXVf9999199ge17V7Hgce7c15ABee99eeXegegegfBgfA9mgomeecXcXgeXceXnBrxSxxzHecefAUUJceccgce0AxBeXXXeceY9nTUJgoepCJnzzzxIBfrMpIJmnpHmc58EJmnrSbrMrUKJnIKxrHgrUzrxKCbtzprzxKISpxzU5Ulzq0a-NOzzxxzSxrprSSpxxrzrtztyUtaOaTObzxpxrUyObaOxMKBn9pMKICCKSKIKKCMKCACBpCACBonIJnKIHhKBpKBpBonCBmnHmgeme1ggeeeX17Xc7VY9e7emdBe97gfBfBfBfBf9e7X7cXeXc19eX-ecXceX9Vf9cee7V-P1e9cecX7e9X7X-0XcX7c97e9V0--O6glDk-BjnBnJpKKMSKrrMSSpSSrxMrSSrMKMprSKzUzzSI9cmgonCKIJppI9YKCKCKKSKKSMMrrUzzzUSMSrUUUSzrzUzryUaUyUyUbxlzzs7-V15X----V---NNccX-ccc0y10WeeeeV--70V6xUztWxMSzbbc6xta11cX9X7V7-X-eHeggnCISpKHX1V1X-7-Oa-N5Xe98HeVVVeeV0X9711-3--XjabvBG-0s7nSrxGc9-BFOunededziszBzG0-G-KF2NDz6rSzzu9d99-0FVIObk153LiReenAUbbxzxzrpxq--e9e9e-A1JTaukCF07J23pq7---cVM--WN3QV1khy_awxF-H4kIRjyV-oCGnvjx3J-16-Ny-U2iSDjyffv33G4F-CWtG2GxSUlV79e--2nbB--6j1s0REhiviizkJG4-4X-vYML77-ZHJ3Pv3-1cZeNponGtV-V4lDIreOiuBl-3-DAESjT9-r4cgTLLKKOaQjzyvgn3FBEB--1pnH-E4zQyafnG--5BKbgN-3Oxws0iCDazIKxKMMIr5OVX1V7759-05hoa-4YPwIzTXc0oS4-OaOaanwnB0-qYoDA9pIrzxzpzpKzzzzUzrWVf9cP1ceceVemcc7cV0H9uMvF-eGU9USSbuX975JYvsOLKOKKK4OaLJKPueTzjEzjzBn2zj3-Bnwn-B_HnzBpIzyNX7V1mi7bfz3J09L-pSKKCSrs5P7VX7-YBjWieueuusF-F03-0dhx_nILN-03vANuaQYl---6b56-jf6VcBknBBn-Bk2BnEBkBkn-BnBkBw-----n2Bk------kn04GKKKaOaO__KKKPLOKLKGKKLKaKKKKKLLKaOOLGKKK3KaKLKOaKaOKKKG3G43G3J33F3G4G4JGznnE2--G-G3334L33G43J-33JG3KG303F433GK3K3GKG3G3k3GKOffaF--GG-FG3---F-3I-3F0-0303F40GGG-G03GG4FF0--FF2-----0---k-G-F3--04343G-G3KG030-0-Gk-2DwkG43F3G0-30-F3F30-00-G30-0-F-3--G33I--03FG3303F3-I0--3F-nDtfefeuvfideeviivfiuviuzwn--B2BBB22--wn9PeLeeLeaPOfjzyvuiveuifhfifiivevefffjiafjiuifeypeeeiivejEivjiivijfiuieiiueuieeeeeafieeeujvifffiuzziviuzivieifiififPivfeifivPvyvijviefivevevafieeaOeueevfeeveeeuiufiaeefifivizizzwmznEzzBnEzBnBnznEzzzzwzwEzwnBnEnAyzzBzzBn-nEnBznEwzzwnBnzzEEzBznnnBznEk--22B2zkzwnnwnzznBnnEzzzmvwEEBkBk-B2znEzEznBn--kBnBEnzBzzw---4--2-n-RB2Dvfzn0n-kB2BnB2nBknBBB2-n-3-KK3JG0304-G43GLJJK_K4JJJKJG3F43G03F3-Fk3-3-k--FLOadeOaOaOOaPOada__aOe_LPaPOK_KOGGKKKKOaOKKJG-K3Gk--nB-FF-3Rk-JGGKaPPeaPPeuieW00-FF3G3FFF--2-J0-GJ43G3JG-0KK2-3G3G-3F0-3G00-F4N2znB-3jEzzBk-ivzzfjEBAzievivivieevivueiuiuufivzzzvivzuivivjvyvzejvjwzzvyvzwnnBzn_ejEBzzEB2-LOKOaMBBzzBnzwzizieveefifieizzzvyzzznyyvzznvjEzzwzBijzjyzznDzzwnnEyznzznEnEEw2yajzDjwBvnznEnzkzEznivvheejwzjefievveyzByvnmeziuvfiyvyzjnzjBwnkzaeO_PO_dLLG4PPvjivjivjiuviyviyzjwzwnE2zBnBnB2-k--4222BzEOOaeiejxPeeuuuuqeuaeeuuefifefefeeffeuuifeveffeueiieuvfiiveufiivvfeuuiuffieeuufuffieyvjiyfeveiuiffifefieevuiivfjivvjwwnBn2BB--BBnnBwn--2-k2BBwzE---0--0B3F-k2-kBB--k---JF-3B---3F03-k2--wkzEn2-B2wEEE2Bn0BB0-kknBkwE-kk22--eUSCSJrLT7V71K0YLtevvyl3KFzwGJ-DWcRRqP-hG7KyLafizivwwG03G0F-acjpSSKy-VX-IJltLePvV---PeSVrBgmoxprMRTTOa77X77-0N3vk7eoElnII93nzSKBooUSX0aNX0a5V-1pfNUugBJ-9iOdUNV-4v1z-Sfs-zBgmX8MKAxy5NOzKbse7V-0U-Fk-1y-lV-4x-6--g6bj-3L4kbaTYn2J-apmECIJlaN--MR8FTPQYEwpGF-2W9GV-62Hz-7i5cMKKGV---y2dwQvz4K-NgIMwmnUzJopKCCKKIJnKKpKSKKSKMKrMMbrWbWtaT6a550VN---X157cV-VX77VVX7ce7V-nZT45OKJLLPzjzzBz2wLJF0I80TwpCpzpOWa5P7eeV-9fnj-3pOZ6JOX-2f5dcs" :
		15 === bI.s2 ? oD =
		"CoE-7lR-YWRa2AEJenMxJpbqTObaOBcX5NeW_xnVto5UUzzrzUrtxtxrMKMUSSyN1XXV5NNOtaUUxzztzUxxpUSIBpSSyNN1aUrSpCCIJpKs50WVNN--7N6bbzrzxzrrpSMMSSMSzs9X7-X-VVVX99ccVVDUV19D--998a6rztVXaOV1771-78VN0V0V-7V---YV7Xh17XOWWV0V6pTOs-8V7XXpCF5-N-N-N-N0VObSxrSrSUyN-aNOsObrxMABnKUaUs-V1-N5NUzrxUWbzUSxprzCKHenMtzKoopSSSzzxxrMCJmnABegmXOs1ABmnCSKCKIC77gcepzSKBe9XfKrHh9eprxmnKMKLmehKCUrSrII7XnMUSxrUSIMpIABpryURpMbtxrrSrMUWtbzSnKKABgnAAKUxztrMUxrsObWtWzzUttraOtbUtbbVefaOrxxpStySStzVXaNTNN5SJhSry1zzSgmpSM9mmgofKpxryU_rUSxrPXmhMQIKSxrUrrxSxrprKLpMa-2V7Va-OV1XXAI97ee9m8a6TNSxSzzrtyTStbtzyUbzzbtztzzzyObaNObaOyUtzzaOttyUMy-f_zztztztzzxxrSopKprKKMSzrzzxzztttyOtaOaOZnBnBmn9mmmpMzbbzWaTOta5UyObtV9eg7XnBNN-7-ObrTUzztaOaOaOaNOa555-4KCCCBnIBnBnBnBpzzSzzxzba-7--6WV-1--771-VV------71-----NN-5---OaTOaNN---0WWWaNN56bzzbbaTTTTUCKSSprrSrMrrSMKpKSUUrSxzzzttaTNOaOVN---VV--X--1N0WVN5-7-0aN79enKBmVX9e9177-X770Ws7VX-WbVccOa-7OtzaUzy1WbyObaMxyN6UV4rUUy4zzaOaMWxyOzrzxrrTOzUUUrztzUzzzzzaNN--770aSSSztV-6rxzbbs5-NOUzzyMxzUxzV-1X9777e9gf9ege997VX7X9X71MMrV-V75-gnAHommmgf9emem9eefBmenA1AHmmfCC9h9m91AIHegn9emnAABnIBmV1mmegon9f9mXenI9fbV1ge7tzV--cgoon99gc0s76tV99nCLo1977Ebs50Vf-AKJcc-1fMMKr9c7-Aa-1mpBme9c-5OWWV-XV-50a0VVUV---1N18xy11--V1717V-0a0VV117V7-0VcWaN7Oa6aNN--OVV0SrWyUxzVe8UxyNN7X2bVSMVN50bbzWVXhH7aNTSraTObbWV0Us0WVOaN55OaOaOV5-OsND0tbzaUrrtVXX6rrV-X91V0V-N-V7X17X99f17X1XXeemXcgeA9hBce17XpA17fKKCK9e97hSrSHpomf9ABpSxHpKIKHhHhIJhMUhKnKUrKKyICCBnABpAAJpKBnIICA9opBme9hC9nCKQ97-XhJmfIKBhJoXA9empmpHhMTehICIBehIKSRkgomfKQ1971hKxQBpprSghCCJonCKKqpMSpBX17XhSnBopKSgpKopnKpIJpKSppIJprSzzKMTTTUQKMrKrrps5-KpUKKSSpMppSSKrrKMI9fBnBpHnK779nAMrSxzwonBmXXppQAI9fCLmhBop-s1-WV1hKBAJpBofBegp9mefKrpqfABfKzbpIAKMKHpKKBpIBpqmpKKKRnABooppKpLmnKJpCBpKABoonIIJpBpBnIHVX9e9f7ceeceegpSRe7f9mmonCJpKSpSQIIHn99cXee9mgf9Xce97V-5OV511711-V--7X1--MrSTT--VcNUUWV-7971--X77c1-VV-V1---AJXN--N5-7eYWs17Wa---cXcWs2aOVgc1ca0tVVD---V0V--55-1eX7X511V-8V5-ge9pMKpKJoepIIBmegXc-fCBmgfCIABfIBogmnAC1gnBnBfAABgm99ggefBXXccXf7VXe9XX6ba-XXX7c91X7VV7X1VV1-D0s55--6USrMSMSrWWbzs1menB1N7VUsN----2bVemACUSKKBk-VVfICKSpg9777--7hCSJpC-----bsN-OaOa56rJnIKT0a5SrtaUs99150zy50ty-55ObaOzbopHpMWa555Uzs9ef79gf9eopBcgnKRkAJomVa0V1da5-gnIBmWVVVWWzV-VXAMLkVVXNOVza-1hRmVNEtSrrpMSy17VTN1mgX7X2yN56zrMTUtztzSxzMrStbtyMxSppKST-V-UTUraUy1Xe-OaN9nHpKLegA9a1ccX1nIBcXXXcXcefA9gX7VVzs9XVbzyUVef-Obzs91UV-e9WWaUWaUzrUSrUrpzzUUrsUrs7efB999e971ceXX9ec7c4rMyTN11X-SprMMMbVcYa4xzzrIMpry1X-V19ge-zza5OzMUUUKpKps1-1OyTSzKMKnIKKSy1V0WxzT19XX-V-Xcf7gekcaUby19f9mdtyMtbzxtzSrWUzrSyOzzbrtrV9gXf1me-eecaTMs7cX8aTTMxSrMtrxtzrKKs--VXDOxSSSSCMUy-XUs7gV97V6tV6xprV7tVA8ySrVEzzxRopzbVXOVaUzbtzKopxRpMrV5StxzrzUV7TOVgiOtbaUzba-emVOtbaTObtbzbztbs9emgf9fBggf9mnAKRpgmmn9mmn9egge1-0ttV9mmme6a-iUbbzaOV7NSs5O_s8baNUVaMT0brs54SMMUICMaNOzzMsD1eeccXUSs8WVObttVVgfAIV71g7XmkXtaT2rxrSryOyMsAxs8a5UKtWWxpKztyObWs1mmon9Yy-X7N9on8V5OWVaNMMSrStVXVcV0WaST-aN55OVfABda6bUthMSrT17XN1fVU_ttzyUwprs2zzbWa6s1eopAA99eef9ttbyN9gcX0y-VDMptzs9cdV6s8WvKy0zy171OsUxT0V2brBpMs8s51kTTUxzxzxxrV17es1mfA-egeiTTOtV55OtttppSzUMV199-8bbrUVcAtSrs7XX7gnBnA9eTOs1cT5T2WxRpzbtyN9bs9ABkYWbbaShMsOWt_QMIKKxzT18VXTTUT-1hPecVOUVbaUzUU_rSSUVVX8tzzUT-ce9f9VemeeABfB8a5UzbWWWzzbbs6tSrVVWxrV79f755OWtyUs1-0aN-OUKMpry-c17aOzWUIMKprUUIMa-1X918V770aTObyUxIKSIJpCUVNN5--sNOMVN56_pKCJpSJoonKMVNNOa---OVsOptaKMT55NNUrKxxrMMT11115N7s9kc9V9VttMT0UTNO_xU_nJpUs7NUSzzSKKUMUts1e1T-c5TOVNOaOaUy2V50_zSUVX119X7USxs7--OzSCUbbKSzsUxRnCBnCCBnKrCIKJnIKM_pUVN5NN-7T50a5OWV0aNNNOWWxKKMBnAMxpIKKIMaSxs1X6rV-D6V-sT-UUVX1e9Os7zy-5SMUTOtpKySqpCBoe9nCTURnBpyOt_oonBnKttU_zV7a-5-tWWWtxxrqpKTOttSMsOrSxhBpT6bxSxrtUUIKAA9nHpHnBgeecf1ee9XnMxzxrUzUQCUxSs6SompyMs-0rSTUxtTMzzrrrUV1-sSxs777UrrrUMUtzUpMJn9e9ee-VhKgnMzUrynKtWzrzzzUxJpSKJnACKKs0Wba0V--UTOxyUrxzxyUxs-xyUrxzrUzprzUrpzUrrUrSyMrUSrrSUUUSxUaSfMT6xrSzrUrUUby18SrSrxrUpMUTNSUUzSSKSMSrMKhSzTKSpMLpMCSCCJopCIJpJonBonIIHnABggnBnA9nBf9geeg9ecce9cf1e9mm9mecf1eeece9X7cXXfBn97V9eA9cX7XfMQB97cX9997VV7ceXXnKSxxpSKxSxzQMUtxxhUr9Xs1AJmhUzUUSzzKSz1hUU_Sz_xrrSzUMUKrSxprqnH19pSKSpBpQABhMrKSxrKSzMBpxrppIMygpSrBopryKpzKy0nMMzba0rrUMStUSpSrMryMrxzbyUUMUty5-Ortbs78V77X77--Xe79pHfBg997X7X7X77ce-X7-zTOa0VV75TUUzUrrxSrrUrzzwfACKrsObs6TSz_zxrzxrrrtVN5Sy-4W_BQCq0c--5XUc-X5rCBxMa7PVDNUK-nSJp971_ESHe-mocmeKzxIIOxttzsTT-Ota0ee-057TlBpMMMlsOV7Xe---Z41V6NZVgpBmXJgnKMpr6WaNT0c7--3XZyYK57-DXainASrrUs-cXc0D9q9BhrKpMy6e7VHVV-19qEB--1him-7XjEvIohy--0DA35ggnKEGzTOs90X7-DANdhT7-7Xt_vISba9c11AoEBnACBxrSxSa0Wbba7ZmcWXV0Nl-LpUX7--232P--Y4hn-1NmHcmmnUy5--yBtECSKpGaNP197-0YF0nN-QYKBvKofomhMUtzba-1WcBcV17r9ZnpzsX9-4YWUUKaNc-1DHqB03YaRQJjHc9K9Mp9XmrHhrJhromghUxoOVT5OzMxtV5VNT--7VBc--DVec-5DXQxV-9EWOSk-7cyKynBpBnABoopJ5OaTT5NOs-OcVH7zjtnSIAHcgnCBomn9gjzUxrxCBeo6yT5Uc5Wzxru-e-Wy0s0aPc-39Fz7gpKSBcCHgcWggnIpRObztbxHggpoehryP6tbaT-VN-17---ZFFrV-t3OTpa7--GJ2c--GJFN-5GL3xc-9GPigq-T84fLpBpAMHpSBfACoemeoefCACAJrzttaUM5TUa5TUIErr0WWxOtWaOzyNNNN77977KACKBnAC90aTN1VN-7c-eGPvhSrq0ceV-1GRaD-9ZO8jSpKF--7--ZPZE--O6VKyV1O6qJppObVXc-aHHGgonUbVV-1ZZurAs1XHQCRnMzMppopDOVNWbttbYBec3mgce---HWfN-LHY8SS5X--09ahV-tAuEpN--TI4hxDUT7c-PI_QzrqXX-3ZxNzHzV--ZyYEV0dEl0pKsV---J06s--J71N--J8is--JDws-5JFcRs--JKrN0iJQsgnonCCL6xba6yOWXe9e--_6BUV2dHDArSUrz1XXX9-E_ADrICMKoN176X--0I2AV58JkgmgfIIICCTOaT0wNN--PKIxzUTcc-3_KPjIqV-1_MDbCV0yKYtSHpIpCSKHZlzLNV-10V55--5Kcizc-9KeMwq--0MPIV-dMpxrc--_Ul6V0OMzAnSN7-O_Wd6ppSppKMwNP-7X97V7-F_Zn6CzUrMOX9Xc7--_a82V-0OcIV-8OxHk--LW2N-DLaXxTX--4fBH-2_fwzLPV-0QFUV3OQn6xKMSxy0X-ee7-F_tjEBemhT6zzP7N-1_yrzR71uMvlwxIBemeefSu6zp9zTOzq-5TUxxWc9A97-9N1TU5V-0Va0V-8W-ps--NFDs--NFLN0aNK0UKptxxxrUNXXX9997V-DOBAzTX-2aJfQBy--0a2hV-0a3SV08aU0zT9V-taUEntc-5OtESV-eP2MzUSk6e9c-XPIwxMSN7VV-ddFArc-7aafrpUq-e7-TPquRnTTNc-mPxXxrrKlcVV9-3amCbSkV--5oXa-Gat6zSSzrUR7X7ec7-HQgPwxu7-9R1zzP-1tkzEmgj6zzXc-2b3DrLP--Ol2rq-78lqzrHegrzzzKEUTN6seVNcgeX-kbAFvBghCIKIIBpBognIJpMKSSxUSrSSxUrpK--0ogPV0OpIUnBOs-SbSprpUSI9jxa6aPeWzz5XeeV-PSyVwpEsV-CbXszKCCGWbsV7-0bZmzN--bbTv--0uTlV08uUInDTV-OulbqV1tuqQnCMF-5Ue-2bh7jJP--0vJ6V-0vjlV-OwCMqV-OwVCw-0twdKojFTNV3dwdbnUSMzs-PCA91V-HUDFBraV-5UKsSc-DUR5ByP--6rqa-2bsubMc--tyOApa7-yUdojJmnIqOtWV9--bxunV-0zWdVAOzeUnxBmfrrICrUUUUrpHzWVcWX1175X-Xc--UzJs-9VELhk--e0DGpX-2c8yvE5V0P1YAmzTX-Fc9eEBhHgn5Uta5N-OcBY6pSrIAUJgTOa-09We7-GcENbMSppzye9777c-9VzggtV-94IUs-9WO6SNV-95_ss-DWdaSDP-mcR2MBoggxrpUzzKSEzxUqUyX9ecWaNVe79V79c--WkEs-9WoBzNV2u6I8rMJpGaOV7Xc-9WxeRyV197X5onrsN9-1cXrMEc-uXElzMKM575NHe-09AHrpNP--1AZrV-eBC4rX--7ndq-4coH6ETP70HYKWxSMOxxc9XWbkd9V-9Edzk-HZ0xhyPc09Z7pBmpSxpy5O9V79--82Ca--86Zu-2dAgzUcV-PI-Bq--eIQcrX-1dKuADN-H_k1UrXc-9_qWSsV8uMPGmzMTNUUUSEMSxxze7e71c-XHee7-Ha0vzScV--aLfs01aO1woxIC6a-0tuc-DaUtSq7-6dh56pM0X7-7dp2zMSR-X--abWegmjUOWc-EdszfAKSzV5UNe9V1PUQ2nABUzc7-5by5U---cAvN--cHps-5cLGhV-DcONzR7--98tL-4e9eMrR7V-HciUxpX7-udBoSJfErlbuVX-29aVfmxIpGa7P--DdjHRtu-6eW7EKSN11--9XeD-jeZFrBfCpCSxpSrzJ5TUcOzaOXfBh9X9X--1c-1eGYR-5efWrCracV-1fXrV-ufyWxkV-ufAyBoeezUrzV-V-ugwopa7--fJNN-LfPwSpkVV-9iyzs--fqes-ifsnRxzxyXecV0ejZ8nMbe7-9ftmzP-FujbporSIzSpMUISCxzx-VUzrrTc6zy7Xh9ecVWuXX-7mcVHe1--ejc_xc-3ezMzK51-4ezOMKGV7-1g-Dw-Rf-nQAA9gnpMtzzzbttXXX7e-1f-oITV-agD2xzola9X-Ff2bjASrxSr-97VV-4f47MJyP7-9gJYUP--9lWRs-qg_aBfJxrzs117--gavs-PghqUKGX---fCFz-09nVOpqV--9njxk--gyON-Dh4IxL7-2fGYEENV-1ob8V-upTOpa7--hVws-XhbrSpLOcXV1eqiCpKR0yX7--9qk6k-PhjSS9c6y-7fR-rUrR7Xc-ehsTBgrqUscc-PiJ1hASaV-bfaA6AI9MMMHhzpUbzOyOz1X97-1ge7V-1tzIV1uu69nCrtwP-e-9ffCUprUkVXc-5fgVYCM5-V-9vpss-5jH-E--HjT-wxu--XjYHx9xSVN-19yPqognyT--pfugbS9rSrSMSrzpaUpSUMSkVV-VVVPHgccX1XX1c-9jiyz5V0Pz_GnSN1-4g0rMKR-7-HkBVxlu7--kCK70LkGUSpMSrOzuXWse7X9-4g57jrTXV-DkQfwxX--B98T--g9En-1v1y0pKorN7-7--gDm6V-v2vCxNV--l12N-Pl34RxUcX-0gHXnD-7gHhbKrq7X7-TlB1xMxcVcJ1lBSSrSSppzUzxpzT6xSSrKrMJopBmcXcxrMRUSpMKBgc7N1cX97971AMHYSSrMHcce7eVVN77XVX7-Oc1dMSHooe-V-CMKSSKq1VUpkUSrUSCMMMUSzSprKKHexxrSSxSxxyUSzzSUUSpSpSxKKBhUpttx57OaP0WyOaP-9-0V7X5CHcV77X1VVXXV-97cV----0c-7VXcY97X7ece1XABcc9--23yxV3v42inCMKrbVBe-0xXV-A4Ugk-aliIwpIMs----BS4D-2gSBER5V1v6fGpCCptV-X--BTnq-7gVUzKKT-VV--m1DN-qm1FRfpppNVN7N-DmEsxT9-QgZUjCSKEKR6xGWe57N-ZmVV0A8RQxR7--A8TUk-imT5xSTTTd9cV4Q8thxpponSpTN7-X77V--mZcN1immTUMSKCKMR16VUSprGbxkXBcVcX77V7V-TmmkSpUVcV-un7nSrMSxkX797V1ABckpMba99-0go5MN-5gpKjMMX7V-QCSMnV-vCllpk7-Pn_7wppc--6gu_jIIqN7-3gwCEUP1-HgwGzMMMSxlu7X7X1V1vETrmxSrTVX1--C-0D-Eh0RESoxSRN-X09--AFrbk--oIos-aoMTSIKFN5--5h58vIRNNV-2GitV-vH2_psV--oc-s0aoc_xKMSJe9JUUqN5P17VV-XoimSI5OycV-fHxjnk--CB5q-0hHcbN-VhHl6KpASSSKIMxsVWyP77VXV-7-HpEKxUX7-mpKbRoeKSo-NN--CNDi-7hOczxzTcXc--pboN-DpiAwpV-5hTmMpR5X-0QMjrnMN7-1hUQAT7-HqBoxK---DqWZRr--IhdNrKrSzOV5QBeX3e-9hfVIBpUzX17--CfpD-phgbjBmccjMJrzke76zrrMMSrUrpSyc17VVX7X7X7-HqmXSSX---qmvs--qqEN0HqtqSrxKESrNN7Xc1XV-2R4lV-fTzpnk-1hwNUTV4Prr2xMJnIC9EIrJomnqUKKCJeIIMOxp9MKzKSr6XX7--V57OV70WXV-5-N6a--V5fUUEofHchpKMOba7X5UTP7-0hzqEP-2i1rMSX-2vVmOnHpplxk-WcV-9sS7x5-2fXLhnESoxu7T17-2iCDURP-3fYKfrK9fISr6s-57---sq1c-DsqBSTX--DFu5-1iHcjR7Bmt9wxogcf95IIESpAAJegxUJfxI9onJeCrrrUrSUSSrSpMKSpUSrMKrMMMSMSppSKCyUUz5N71-0aP5OzyOzUSrUN6aOX10ty-7-0s-7cV-7X1X1-VX9XX7e9cecge16yX-X7X7BmXXcV-2iHoMUcV4Q_4_nBrpyOzSq5cXX7c-HtGWSpX7--tUGs-5u0pzc-Tu6aUSS-17-Tu7VxACOa---u7iN-5uEYS--5uEcz--auFlSKqNO99-2i_aUGuV0QdwKony7-BicpMJrMSc1-5V0feEApSWcc-5uYrSV-1uf6R--igpMV9vfYUppKHexxMzxxrUROttX1e7cW97HX17--2fYfV-Qf_oq-0Afj_rL7V0vfwMpMaX5V3Ag7opBpKpT575-7--fgPSna-4iqejAoOV-avQIxxrycce-0isQUF-1is_AGc-LvkFzM5X--fjqbr1--Dz_T-6j-zjASq75-1j1jzlc-9wL5ww--2lNpV-flSUxX-3j5MbM5X-Hj6HUJm_prMSk--7X--vlsIpk7-HwadwjOV-1wepR-2jAT6Ia-1fnTTxHnEy0X--Anark-9wvRwtV5QospnoxMSOzr0aNn9X797V-Qp0rq--QpG4o-0QpR0mxlX-4jL0rSq-c0XxPBBfBnEMKKyNNTOVN1e-6jMXUJlz11-EEgqwecX-s5OaSs-AjV-jKppq-17c-9y-hSkV3fsD9ppKIKDNNOVV17-Ty3bxJp0V--9yERww-0Ax-_npV--Ax2Ik-9zfaxkV-vzr2xk7-A-1BRy--3-zvV-w0lpqTc-I-kixr-c-A0MPENV3R55SnBpKkWa0zGVX-nkNrfACJeonMrxSrrrSrT55-IC9e-0ztVNX7X99--35IBV-R5UCqV-35iqV-w6ltpWc-60xjx--A1PugyV-B95ws-E1cpgpV--ki4IV1wAqXpUTUa1ee-4kl7ACOa7-02LhN-02YwN-I2aoBjy7-f2fQUKrScVc--I2gExS-V-b2tvSppo-7X-0kyWUF-1kyZMq7-036Ns-M36nwhr---RFUnqV-BFvKk-03Kgs-A3kyxNV-wI34p57-644wwN-64BcS--04PSN064PVSKSTUF14HcWc--BL4Uk-64ckSV-04jBN7r4jQxHppKKpMJxHe7V1-ecnIIKABoopUSognBnIAUtbotyOyNOsNTUSJnKq0a6ztbttVOzOVOX-5c0a5OV1XX7Ze9jpI977AI97--lSWj-FgMRSmf9zbrpzMKc0bxrKESxrlVXHVUbbpSkV7XccomXX9ZcP7-E4xwwja--lXvjV-wQInrsc0Q5ozSpKEryObbuVgce1c-Q64OwhMWX-0lmZbk-0lpy6P--GtFD-2lu5jKVV0RUb6mp6V-0m9erN-5mBT2BjNOV0wZLzpUk5XVPBZWrmmmmnIJrMSrSSSSKSMUxKpKrSESpbxSSrMOts7-7Ve7cnA9119-Oa0Wba7V---V7---ece-cmKJQBmp9ggzzrSKMMy-OyTTOX7X997X06mLdEBgnABnIIIICCAJnJpCCJnKJ0a5OtWa55Oa0WbaTObcV0WWV--I8QGBxs7-U8RIgpzs7c-29W_w-3mdg6Ctc-0mguE5-ZmlOjKBmmonUUUUbw-OzwN-VHmc1eV-wgZprsc-rANbgnKrUtX17c4UAhBhBenHYBocVgprSCHZnrrUMSxHnIKLOa-0VObaUzxWza0bsNOy1X7Xe9n9cV-1n8XjDN-IBkvzxXc-2BlYi-RnBjzIEMMKppKKF51-1-0V-9--nBzMVXBp7smn9f9XehBnCAIBomnABmceXeZegccZmonAAIBnKSMSrMVc57OyOaVUzWzOzxxzzztxzxxrrSrtbVOWtVN-OVP7V-0aT--RstSq--gtJnqP-3nilrCq7-AniufCAM0bbcV4UEFHBomghIHoonBnCKpKICSKpMxIBnJOtV-OsTOtsN0aUX7VN---6zOa--7fJe1-7nuYnACrtVc0EFVzgfBofKUUaOV0a73zH2ShKICCCCICCIBgnBpBpCICKpKCKRN55N-5N5OV0a0aN5-NNNOWV-NP7-zHTMwnJhpJ5-OVP-5oiBECSkV-0hBVAn9M6V-IIDDgzZc-2IgAR-1pHnrR--2KH6w-4pLvUIOaV-0KUwN92LmEgfBfBgqUSCrKKKBeVUX5-X4JmoocX-57NNmconHdBpJce99pKppppKIKopMrtxxxprKrMUStaN7-6yUza-7X9775ObzzStV--51--N-PcXX7-ILxOwoOV-UMCUghM5N--AMQdSNV0STQGrScX-8ptlrCCCta1-0CTnYnqP-0SVFsrM-70Eq1sfHnA9XcYCppSKKSErrSSCzpUUzKTOWaN0V0WX7VXWa-2KBme0WX19c-4qODnHrVN-2OnhB-Cqb12CCKJ-UcWV-IqjjQSrKAMzTNV7VXc-Nqu9fBnACIHnSLNOWWaOV--hjnFrX--r-vI-1xkFZpprOu97V-zr6zAApICSUpzKUxlyUrwUxKV56a6a7VVXY9_HmmeXVX1X9V4CmRVp9mrMaTUxT-e7c-OrAdfJnKrrSrrsN0X979X9-0rFTQP--MKdX--M_8P-DreVnCCSrzVVNec-AVFgBTV-T02FyV0L0slMs1c-6VTDEc-6V_Ajc-AV_JBtV-D5hsk-b_7iwnSROX1--OPBa-1tQurDN-Ya80xERTNXV" :
		16 === bI.s2 ? oD =
		"DwCd1sP0j--RaO__ddedddifv2EEznnnyfEeRwyzBBBB2Bn00-17-2fEMK9dCrtzUrrMMqN-X-789V----Sf-T--yfzIrzohrxy6kX6rSk16k7---11J7Z-35CISoOxsUKESpEP6qOV6pJp9mec17cmhpxUSogfBnMMGWxptyUUzc5UrtttzpoTOV6lVVZme-gcfBc5cUrztbV73cWztaEO-1I5dLOfvkygzEyaOdzjzsl2knvg2EW2zEznvzzyzyfyyzzvjuMyzdzjivvvyyinyaTVyydzufvevjgwBoG-znzdiEdbg2vkyjEyiazuK_4OGaJaPjzYnzzjBwnvyfiigEnuP_vjuiaOMdezeififiiEfgzfusnEeO_ivviEuvjzyzivivivg3EjuyjiezjjisnvvEffvznviyviYEYyzjygnBz1_Fl-zivjEzyuwnB2z0434-4G304-44-CGJFKJEK42Bo-38G-340403LK2kl44G_GFn-G402l2x2433432vuvfvY4-l-0-FkF3G-J43G3FJ3-G5J2---20L-Y-8CqLKOzvEjYn3GF5N0A3mrIprrIryT1Wace1XV0F2MKYo-H05ahSVV1R1RHOKefiznn0-z4KUy5MEe17X7Xa17X7X7X7X7e7X7-17Xe1XeX1VXT0aN7X7X9X7V19X7V17-Xec7X-7X77X7VfBctaT-17917-X--7V0V-9Xe19X1cX991hJpKJpKMSKMSKUIMUrMprSrMSrKMSKrKKrMSrSKrMprSrMpKMSMMpMSKrKKCKMUzrxrSUMUKIABceV17-XcX7X7917X9X7X7e--0aN-7V17XcX77eceVX7X17919X1EzyTN5T-c-7X77X7V197XcVXN-7V-17-X18VXD---X7a11--7a17-99177Vce91X7XX1cVXe9XV-N-7a11177VVX12V0V-VX9-N0VVVX1-1171777s0V5-N7V7Va0bVN0VUV-VN-2Vs--a-NTN0WbV50WsN5-N5-N5-N5-OrxzST-VXcc-VN-1N5-V51-15OxUSxUrxSxSJpMs0V-8V5Oa1D18V91191X11-VVX19nCSSKSSSrMrKQKpK7cXXX7Xcs-1X1VXVV7777719-csN7714yUSpUSSryN77c7X0V-16a0VenB5-D0WV9X-a0WWVN-gpC7X-gm10tV0yN7NNN1VV-N1mm-N--s-7WWyN--fLocccAAC9555NUsSpy-Wa555-c--hIJpCCBmg5NN-NNN8_y--N0VD-epnIKCCLVXYWV-919prKSC9cV77-V0Vc11111TTUVVgkf1991D-e1-ceXX7X-WWs9cXXgcUxy10Va1cXei1monICI7g9-XgegmVgem7X6xyUVc8bbta6bbtrzMST--15NAA9egemfABXnBm9n9XmfBpMI9mggfA1eceeegn9eeXe9AIBme7g7Vecg7dV9mgecVfWzzyUzxSvCMtbtbzxtUryOzzttbtaOaTOzs97ea0VenBmN5N-XN9X9XiOa5ObtaNNNNOttVgggnB7e17OVN0WbtT-tWV5MV0ztbaUzMy2aOyStI7fCMtxrzzbKrUyUa5Oa0bUsOa1me7f9cD-1997-VTOWaUV-WWrzzxprWzUrqnBnCKrSSzySSza19Es9aOs-c-WsOaN50V-NObttrSSxzzbtyUbzzUUzUtxrUUTUyULpf7hKyTSBpMzpompqpSxUrSSrKprUSMMUTMxSrKSKrrrppMKMSSprSy50byOSzaKgpxza6zUtbz_zUmgf9mA1egmgf9pMsOzbtzMyTOzzMbttWy2WrKKIKSKSUtVOsUCLnKUtza5SzUxSSrSSzUSrMrUzMttSxxMSSHemgnKzUSzrzxzyUrtbbpSrzKtKrSAMKSs-T---X55UbsN9eem7iObtztyU_rQMKrUSMzzSrxUzzbyUxxyUs18s1UaUprzxMKJhSrMxpps-V-798VUtaOVOVD-XhHDN-6V9XXm7ce7VVtV-951-Ors18Wa-7-177--1-UVcOyUbzMTUbURopIKCIA7f1hMShJonIMTUMUSUKKUMrSrRchMJpSryOxxhIMprSJpxrs---Wa4xxrSprKmpKKxUSrUT5OV7N2a--7-ztVYVXcVV2aOzrzzxrSrbrIMxJogAMSMSUUSrrKJgpQJnAJX97hMMU7fHeX-en99pSrxwopCICBmcXXccXehSrprUxzbztTpKJonKCBfHeXnCLpBmX9XpSzrpKpABeepS9nKnBofKwnBopRpBopCJpKpKKMKIKxzSzzzxKMSSSSKxKSIKtTUWyTObUrrxzrzrbrSzrMSrpzUxySrxxzrrrzzbtztzyMxrUKQKKSSppMKpSKpxprrSrUUSxxrMprrttVD5SrV-a-NN71-cX7791-77VVVVX71-TT6WWbWWWVN-NN8V711-V777X11XVcccceXVXXNNN8V-15-9-VV791dV1-VVX7X1-sNOtrtxtxtySyUVNStUrUrrbUMrppzzrbbry6pKKrMMMrMMCSUUKepKxs0aTTMUUU_rMT-OVN-6T-7-a-777V-5-XMxSSxxrxMU_pzhUxSmpra6QKUbSyOSSnMxSyUKSxCMKUtprySzrxxKttbzbSrbTN0xzUKBpyTSrrMtttzprrSSrMSpprKCILpJhBhIBonKMKLnKICJnBgmmpBm9mnAABgggmeommnAAAJghKKKhKgmpAAJpIJopCIMIMIJpCKJpKUa-s550V2VN50VNT0s5OWs6VT5NNTTTTTMyUSSxQJpJpAA7fBprxpttWbbSSQKSSSMMzSrt_rUUbUbaMyTOVzTOs7777N70V70_pzKKzbbSJpBp11hIKqnKUtIAJmnJnJmnIBnBnJnKKLpBnJhI7e9778V1N5-NT0VOtbaNN9gmmmkfICCACBgonCBpQICBnI1fJo9pSQJohBchKhCKJopSMKSSMrSMCIBomooenABfAIABgnIIMtsOaObbxI9mmon9gnKUwpMJpJpJpBmpSCShMKCMKCBpCK10V7-77X1-cVV-7hKKCMKrppMKSKpIAKtxzxSKpxnHghUySrvCICBfCJpMbnAIBhBgompIIMC9mgfCCKBoonIIICBfIIICBopIIIKKCKKSKMUKpKxpSSxxMUMKKSKxpUpKrSKSKSKnICCJnCA1999-1A9e-7-cXXX17V70a-f7VV-1--7XXm997cXX9AAC9mgoekccXg97XXABmkf9f9fA9emXn9emgmgonKtxgnBfI9nBemef1X9-9gn9meeXA9eemegoefBmgnBnC9gnC9eeggnCJhBpBnKJnKKKKxpIKrRhBhAKBhKSKKKIMKKKF7Z2MkT__44OOaO__O_LLTbYvkyffBkEcw2knyaaiBkyEC-x-nl3-3VQ3QMsc-O-txaOjzzk4K_-7VS-vCSzc7V0J2qEPevjFF3F--6mTV-FGRlV--92TV0kLotbx-a7AuPnIUUoxxzbzrKrpKKMSSSlWxrUsWtzKlzTUyOzbw516xSUzWbsX6wNgc55Xc7mcXmgmeJmofomXXIBcYHcVPXZcVTUceX1d9me17ee9-A0Y6qioC-asBoenIBjSUIBjUSJe9ceV7177eV7fC9gpzzHeeICyUxA9efIrzM0zKaP6kOxIMtxzbxBgef9gfMSxyU6ttaUttzGzryOa-OV1XCJc9VcN7---40ekqQ--NDEDyV--Red-6VumnMUacX--0pcZ3P2fIBnrozKocX7X7poxognBU6zbzojHxISryUWX-U0XV--V9YHX7--6M-k--Do0VDFSy8__bfuePPaEykFkk03C2-3VwCbAMV--0t6o-92oUS0V4FUCSaOQzBn4---ywe-Y13Y5KOjuRyaEBG2F--GW_V0FZtli---3co7-38GgR-93kCEP-1kaQpeNn--L4BWBn5T-BFdZS_ePOvjjjjwk3-FJGF0sL9epCyN9-mkhAhaefdPOOaOd_eO_dPLyiiveeeyEnnEiEwBk2nEnBnEEEnnwwznnF3333GGKJJG3G4KKGJ-94g9CkV--ipW-VWVbABxrMKz5OzJxsNNNVXmXe9c--B49F--PnOV-FqcSV7sQLqmeeppUUSSxtaTU6yT97997eeMC2a-LKOaOaOi_vdPiuzjd_dvijyu_KFJGF33303FC2-oBBB4KLOOaaOiaeduaeeffdiuzzzyyydKKJLfivjjjYBwyuyynzyEnznvszkxFzwzjvEBG0G2zjgyuyYvybvzjyieKbfYBkwzivYvyvyEiviyvfuuuPfePPaadvvvjjeOLP_MdOKKK_UeaPMefvjjYzYknkkzznFzyEjzjfyvvEzjeQfjYvzznzyiyEsywzwzYvEgkG43K4GJJKGJJK3-zjsEzjjvzwyyvvC3J2G3FJ2yjFG04FK4F4K-OKGJGJG0GK43EB4GG2EEzyvvn2yduyvjyinzx33G033Eiw-o-KF2k-GGJeKO_-0PL_JBFGKOF_KOHK4GFxOHKGGFwp08J-yEYnlKKFJBwFJK9eOFHLTdJ-kkn0KKdFPPe_3-B3HeOaJ_2-EeVC-3JKLdi_FHK20dPJFk0O_JBl3KT_3K5LLfjdJeu_Fo3_JiePJF30-l3FGJFoGF-X6dJBfEOtsV0FxOWbo-D6uCS6X1v2zp5_4fu_4ivEdiuPdKJF45aiivivyyiviiijsn-znBkBF235J-GG_-nBl-w44aKKG-KX2_nCErSSSkOWa11XeXLG1g8_OK_OOO_aPuKOdajsydQjznzydLKK_5KaiuyzyvzzzyzjvjidLK3KKGKKKKKaQfefjizjzyvdefiiznyzzyEwznBzwzkn2Eifzjufwyyzjwww--GPO_--zVBnvgEekk3K3GG3JGGFFG2B-333-0--03G3HK4ePeefeQiaOK--3-0-JFKiydeJHKJ2C40GG_ddKFnB2-JF0cWyMmmyTN-ZGfute2---ZAWV0G8Ihi3--8AO7--I0sk-7aWNk-RIFpuEF018vKgpKEM6tWV7XV--L5Mk-NgeYlV6GUzf_eczf24_-k-1C0lB-I5ZZqOynkqK-5YJBIArlX-1Gfu8_yC-6YOlnKIOV---5qJB-DCgdwja-C61_LTvoG-kYgE2KIJnAAMUxzUrOxzTOWaZcV9176qXeX7cVDlqEh_PPeffijjnEBC203FFGJ-mDm3BfEMtyP89-C6VITdTn---2mET-26bSqk--EMts2wUQzuiijiibfV-EYnn3G4LJJGF1szi7nJnr550e--78qw-1FShy-27J7aR-eFczBxKoT7-V-oWi1tLgwk-9FyXENV7H7Of_bisywyoGJG-GZSgYBepxxpyN5X97-gZ3Btfw30yZX6E9mY9eememXeefSzxzT6xzUrMommceKIABhBeMUSxyOWbbbxzHpATTTV5OzxzSy15Ua5O93eme9cXWWbbyVcmVAmK5MiyiajY2Eil3G445J--Hp-s--aMYk-0CdpV2HW8xuvoG-28GGLmemxr6tsV-oczDQis3F11JY8BgnBopr6ztzzNOWX7e7omX-0mZRx_UkRdHRBnKMKpMJppJxponBop6bbzxpxKlbWa0WWWX-UzUUrMzlxrWaWXVd9n9WVVc91e99X7eeVjHcccOe1V--dDLF0OOWLmpy1-6AISazG-5_hMYrq3e-2mvLGeyn04-Ca5w69nUrSq17--QBDVUivzzlJKJJ-qNYawozzyNn97c23mKCO_OLdiffgwnBBBl-J-5OPQhV0wnGIOeeyin0230F5uPAsSSUrHprMSI9BenCHoeXAIrrUUUzTUzyN56rzbV0bxbtcOyOttztcmefBgfBn9ef9X7VXX7X7X7V9IG_jaaeivzB-pFn2KJ09Pe2Rhbzzxxu7cemc-CCRoydz-p--5k5q-ICZKiPvjk34--5npT0dDEw5Oeuaufdeu_PeijB-BBFkoFG2EfswFk3-JLJ-9Ul6xk-7nzgraaOeQfVBB-n-1XVgnghCEpKSIIIMKxML5-0Wc0c5V71-7-C0ccQ-B92pWnABnIBgmxUa-UbtbrzzrtbbueXBee5Pec-C21Ktk6e6I4rJpIBrMM0c-0zzbae91c7Qh2tpO_ddeeTbeeiiduuffeeefydbefjiedeeaijY-nnBwnznEBnnEwk-nveefdbYw3B-2koFFnyjueuTw2FyvfiB-32G0-oGK3-OdveeJFFFo3BoLK0JF-40OOaOa_8KKFB3OKefddFF0--02F-00G2--5cWxzMSV1V0JNHMaB-uYI9RnKMGWWaNe-HJRYn_aayu_jjjeBC-FJFFEjiwC44F2uEcgpJxIIy5-NVV-07cwk-PGjhlV3oZcraOPzkC-5eHK_nABpKKrK55-575TT-e0fHO2qaaabeuauQeiffeQffF-33-kk-BB222n4J3K--9LCls-CAWRtk-1QXrVIK7Wd___4aLywyizYzYEyEBw0JOJOJJ-edEvRpK5Os1V1CKLfOdOyszywkGG4-5etPbKtae-jKWNneePfiuiifiijifiw2yfeii-zefeeeeefYBBn--0033F3F03-G-3F03-4-0GGGKJ-ufB4MHjSzSomcXfMpzS6xKKKKMSsV-10a7V-75Ouec17-6Lbx5JE-PfeifA9eme9AJzrzxztyN57-SVW5uU-0qkprRxMSKSpKSrtV7X7X17--V-58t6-LgVLbBpIKrWzSqV0V7Ve--O0SB8LoLpxJnBgmpICBomogn9oghBnIBpUbWxpMOzzVUsUbaTOa55ObxonKESyUSzrzRUtWztsTUzrMtcVV-V-eX-0Zegee977XX-cemcY9ecV8q__U_OdujEvnBmK30--hDurV-5vfz37hzjz9gemecf9genrI9ggn97gegegoenBgopCJonEJUzpCKKIKonKSKMKKKSMSpUKrbzV0V5NN-77VV-7X-WWVV-N-0aNOWWbsN-0yUUUxzrzSMKrSICpJnIIErL5NOaUSxpSUMSSkOWWaV1-1-55--Vc7X5UxrpUSUxty51-cVXX97VcXZecV9r1ep_LLasznvgyw343F-AZ4Kk6pnU1tLuaOG5K_a_OLLPKeOddYzwwwzEnzEnwzE2E2C-JF3-4id5YIMV7-Cs_ftkIvpQOmnA9nBgf9YBoooofICBeeCBoqUUUxtza6aNUWba6aOaOWba5T5THcV7NLKvdveejzG-33F-5q05bAzy9VCvXK8_eeiyvujin304_-3-0FZT-95mmcgfAACBn9ggeAA9mmnCUtzrprpUSAAIBggecmmggghM6tzNOtttyTTTUbbbxzKa5N0bbbbbbaNTTTTTTUy551ccfAA99XXcWnw5hG_OLKOLKaO_LKOK_POOKdaPOaPOaaUzBnEknwknzE2En2nzEnzeKazEyzzjnwzzznyszgzzzwziyzjvvzjEnueOOdawzEnnwzEEnwwzEEnknEnB0JLJJ__OJ0K_JLK4K4_G8K4445K_48LK_OK4G44K4OKGF1TETamnMTOVc" :
		17 === bI.s2 ? oD =
		"9mDS-FP-F--0TedPPOXo0HCGSpxrMptUSrUztztbbsUtaTTOzzzzStzSzSrSrSrppT-0btaOaNNUttVOa---56y6aOSrUaN5OzztztaOtTObtaNNUzaOSrSvHogmgfKpKSrCJgnIICMKrSryUWs--17XD--OaUzaOzyObzzztzrrUxUKprrzyUzzzzzzrSrrbzUSzyOaOsOzzzztbzzrAMSKzrUzzUSrUrrMKKSzzxrrxrxrrSrSrUSpMJnCKUV6aSxxUSxrSSMzzzWzz_zzzzzzxrUzxUzzrSzpxpxUSUxrxxSrrMSrSKKMKMSKKxrSKxzxpJmegnKzWzzoeepBpABgohBnBpMSKyOsT5T---OWWt_onKzzS9ehSrUzzzzrzzKKAILmfHnBpUztWsT0WaOaUzzzUrUrSzpxzzrSMSrzzzSKKKKpyTUaOzxzxrxxrxrUzzxzzzzzzzSrxrUrSrSzMSrSSrSrUprMKzUUUrbrbrbrrSMKxKKKpIKKKMKKKIBpKBnJnBhBgnCAIBnBnBnBgonIJoonIJnBnKBen17AKICIKKJgpKKCSSKKCKJpBpKIKBnKKKCACBpKMIKponBgfBnCHoonBnAKCKKCI9nBenBnBgmepCBn9cecegX-9eenHmognBmegefBnBenBnBenBgmonAKICCKKCKKKIKKJnCJnBmfBnBmpBnICIBpIBmpBmnBnABn8aObbaOa0bVOV1n9fCBonIHmonCMpQ9hCAJnJgnCBnBmpBpBgfA9nBmX9eeeXeXcXX9eee77gpKrSrzSrSrJnKKrrrrKJnCBnCBhCIBgemggeggef9eemmeecceAKKrKICJproomgmgeee9X9eXfKMSMAKMzrMyOtxrKCBe7VcfBprrBAIHnKhSKIBp9emgfBnCBpSMSUSxrrzzrKKLmnBmmnABpIKIBmgmnKSpSKUSrPkf9en9nAIKpIBgmXEV9gpB7Ve9VX9XbrUV1cc9V7Ws11chBeaN7tV7AIC7XN1N1777c2V-a5USy117aNN-ceef97Oa-Wzy1N-17WbyMMKSCKrs10WV-Ws978V-5-D5-s-7VcgmfMopCSppIA7XV--1-2bs717V15--a52aN-X1-cVN-X-V-ts-0V0VOV1OaOa1-2WV-sOV--7OV-V--VX-7--7-0yN7--7-X1OWa--1-0WVT--9N7OV--1-NN---V-17V-15Us--V--15NN7----VX1N7---X71--17eX7X7XX1VcX9XXcX9999A77eVeX9A17X9cX7X7X9cX7V7VV---717cV1717X717X-X7X71177X-X71N19--97X-X7-X7c-91X-X-7X7g7XVeX7Ws-177-17-5Oa5NOsOa5OaOV1XmX7eVcOV-95--5-sUWVNT5N--0WWtztaTT6WaOV7-0aOaOzza0aN0a--7VOV7s-s--6V-X---17X1Vc118V5OV7eX7XcXemnCCBfBnBoprSp9gn9cV17ee-9eee7eV4kDJ_aeiwn-FJ-u28mgpMSzsN-XeV5Fop6aeecBBk-F1t5Zdn9xxrs-9-O9QZyeevz-G3G-YcmK6CIIrUrrSrrrqOa9-X9X7X9cV1_beTuOPOPfznwwC3-4-Jh78rBeejprrSrNN--7-T5ITPw30U8E3BgonBzrtWzzaNVeeV8t9XtaOdOyzBwnEBKK-AmPDvCxrr-7X7ByJT4OdKaTizEydLQi_G48_OUdOvEvyuv-zyevvnzyBFzjvyBnzzznE0KKJJJK43JJG3JF0GKK-2BiSRpxxpWX7Xc" :
		18 === bI.s2 ? oD =
		"DgBy1vR-AV60YBnopk-O_9DCIs4rUUrSSMUrSrSSSMKzypKSSMRpKMSrUKMSpKSSrUrSKIKSueXgnCKBgme9XenIKKMBpSKpKMMxpLppKKpnBoopKMMMMKpMKKKKrSzzza55ObzzUUSxppppCCSSpSSrRopSrrSSSppMMSSrKSzUtpxrxxphSMUMUSrrUzzaOtbaOtbbbaOzWWaN5Os6yN-ee117eme97cX--1117XmmccVaN1-Xy-XD-NT-6sDOa0y-cWtzrrKrrSpptWSxs1W_rMUMMUTUUzrrrrSrSxKSrKKzKSrMSrxxprUUzUyTOa-N-1-X-7--1-VV1D-EUUaOtSs-SyMzy-Xe1XXe999XcefCIKKUUn7X7eXee8aOV11UUUa-X7X0Ss1N1mVcf9ecekgk1AJmnABgn99mn9hIJhKKMB7797ee17y17V79Ve79nFX8s19nAIKI1n9pMKKT5Jp-hFgV1goV1nIF-hB-1kOsN56rSpppMtVX-77c7a5N-D550V-ObbaTTN-OVa----N--7s50y0VTNN-9maOzV17cVeepABnBpKKCBnBoopIKMMS9pKKKKKKIBWV-D-XemgpKBe9gm9eOzbyOa5OWV15NN7-N--V5-OV55-50aOaOa----99e77X9e770V1OVX-ccefABn997Xc77VccgceXegfBnH7cegcVX9ecD-VV-7-XV7Xcs5OaUT155-51XD--UtyUy--zWzzUzrbzyMT5OtztyOaOzKpxxIKKKKpIKKSMIKSKKSzztzbyUxtaUaNN5OyKs-6V0WV0_y-SppSICMKMTTTOtQBpSCMSsSrMSzyTMSprSptSUbzzygfKxUaObrMJpTO_pmpUxraTTOtttVUtaSSptzIAK99eXegfKgpCLmpMrUSpz7fKBoohUttrSrUrrSrSAKKUUra4pSzbaNTObaUyUxopBpSrzbaOyN10baSrrpzKpSSUtSzpUs-75N7cc91cXoX7V7Ws1-5TUbaOaOaSySzzzrzzzUtaN0V971A9eenBeee7Xe9cgcfAA9gggnKJgpgeee9eA9mfBgf9geVVX9fB7X6baOTTNNOtaOty52tzVNN9m7Xcce9715N5ObKt_y-8rMbzs90My6_s4raOUxrrpUMrz_rCMUry-eXUzrpySrxyObrztrzUMUttpztrVMrzrMsURhUxpsOpCUbrzqmenMtzmpzb_mfKzpooXX1pBpxSSKpSMSMKKCMKQKnCBmmeXcc71171-V--XpIIKKnIAAIBnCMMCKprzWV7sObKKrKUMsNN5UyMzzrBpztttWVaTObW_xpI99ghKKMxztaUUbzzzMy6vBgnACUtz_yTMrUzbnIMUtttV-UrUSrSSprMSSMyOWVX-18a0a-0yTOa5NOzrrRoonBpSKBpCKCCKSnCCBhBmme7efMSUSzUUaOyT5OaN-0aUxpoopMSzTN99WbV2VVXX9eYV0WaN-V-OtvKKUSzMrs1797VtpzV6rrSSrzBhKCKMSrT-Wa-V0V-X77ca--UzzzyHpMT-yT-7-sOaObbyTTOzUtsUIMSpSRnMzMT0WsTOs97hIBeX-X7tVVtzVc8WWaUonMzbKUsTUbSxrnMUKBoonJnJgpBpBoptaNOttaT5NUxprCUT1-VObbzrUzzyTUzzzy2zSxxxzry-1-Wrbtbs9zbzV9UV19-fa-taTOpUWxMsN716aUKyUps0xzaNN0VOWbaUzSrzaMrzVcX155OVOV0ztby-199f1XOWa-N-TOWa5UaNUaOa5OaUtzxtaN7egYy-VTOaUrnMwnKtzxpzaICTmoomenCKS9e9hSKxzbrSrSKBgpMKrWs-_yTNMbMyTOzrJnHnKxrKpSMKMSpprKSSMU9fBopKKpcfKSMAIKSrUMMpSSrUzVbrMUUTMympKrSrUUzMBnKSKrSxpJpMrUSSpSKS97cXXXXcXXXX9997ccX7c7X7V11171N-V-VVX1-71117-7-X19997V1mopKrSxpMMKpPeVX7hJfKCCKMMMMMKKpprUa6BpepKAK8V1meommnKMPgpAACReonACBopKSIKMMCKKKKKRpKCKJoprUtbbSSUs4MtaT-78sUxzzwpxxpxrKKSSSUSpUSSSSSKKKSKKMKSKJpKKKIKKKJoopBn9mccgpKICAMIKKKrKCJnIIBopMMzxxrrSxxxrSpSMSpKABofBnBn97710VA112V1171mmgn9k7V51-7XecXpAHhAIBooo-X75NN-XeXnBnKIBnCCKBnB9gpKprryU_ppSzyOWVObrzyTShPfIBnCK9hKCCJpKzrzxprSrSSUrxxqeeehUxzUrrABnIBhMzsOxrxSmgpxnMHnHhMnMICHmpMnHhSyMBhLopC9fIMhBnBnCJommmfAA1nBo97c9nMMrFhBgnBehBgfABfIKSx9X17N1emXABf9gmnJepJmhRmopKCMSUSxrMSrrUSxrrxrSrSrMSSMKKppCKKRognBggogeefI9mpxrr9nBggoog7--N-e999fAa-XfJV17s7XA97XcgecWV7eeAJpKKJoopCKBpKKKrTTMMKSxRpKrSzrzxxrStSrUUUSSpLpCMSKMSzMSSRef7Xce7e9X997-cX9-c-777-11197VXX17X7cgc0V0VNN1VOV-1-WVV-77VcV71-V-71--AJVV7XhMCBmfBnC797g-ACI7-Oa--11-Vc-1XVX9979X17V1-VV7cec9oppnBn1gXo71oome-1nHmgfBpKIBgmmcenIBnBnBnAAAIA9mmonI9egoXmggopCMKKKLpQCIBoopKopJcgnIBp9fACJmge7X77VVa-11-V7-VVVX-V72V7-7-VVV11-V7----V---N78V5NN-V6s9XOy1cepgpQIA9f9e7X777VX7UTUbta1eekXX7X0VcX91c--g7-11emXceeXX9ee99ce9g7cX999XXXX99X7XV-5-V7ceeegeX7X977X77-X7XVV-5-1-7--ecD-9hBX99onAMSKIMJpKSpKrMKJhIMKopST-NOaOrRopIBfIMSSMzxzUpzUUaUaUbttyUaOhBpIJppMKprSxrUrrKMKprRnBn9ggnBms9gnICIK99efBomceXgnIBcXceeeXeefBp9emceececeegmeXXeekee9X9Xf9ecee7X7-5N-a-N--NOWVN--V-1-V1--5---711171--550aN5--0V1-V77-55---------N-7XOta6aN1ggnBmnI7VD-VNN--NN1ghKBpKIKKJpKIIKCKKKCKIKKRnBopKKrKSSIJpIIJoopCIJpKUKSMLpSKKIIJpKKMSnKrUSSppKpMSMKpSKrKp9eepUrpSSKpSprrrzzzSrrzzzrUrzxrUzUzUyTSxnICKCACCCBnABnBgnBmnABnCBnBgmnBgmmmgggggf9meemeXggf9mgemmmenAAABmmmmXhA7cgnIIAIBnBmhBnIBnKKSMSpgnCKRnKKMKKpKSprQMQCIKKCKMKCJpKKpMBohRmnABfB-1V9sQR73q09kCIBed989cCHZpMUMMSMSUOxbpy0bbxSraOaOc7TVP29C9Vc0VBecV--7NVV-N8H9w--c9BgrX-BVhQICKrSsV-1VkNB1Dn9choeAEHp9A9eAKKp9fCI9Xme118BgecX7IKKAKrJce70cXXXcXMSppCzSpJxSMKSKSSrk-0xpxxzba-17Oxta56paOsNNTOyTOa--USkWzMUUzs--VWbrxrrVV-d9e7VHsFGFpA9BnCzzII9X97pxS9XHVZoogqUtzqUyUxx50WsTOXmgcOuVOXc0T4CohpochopxzyN7X7NXV-cNWurX-AW_mQ9horyWa--D6JABqN-51WZ4aN79-1XOJ2Oc-58_IBN-i8hrCBfItza-V2Nd5onEIMLOs-X-0se3gprOX1V5NezHrS9eACprpxy0aN7cVV07h4Zpy1V3shEFnKMUrzcVN7I91V-chgRwP--Xvb6V37jO2mfSxrUba79cV3cjXTpJpJOyTOX7gc--1B70i-6Y102KttXe-4Y2-QBrWV-qBklBoptztf9-7-aBzewzzyPee--YGg2-DspvZoeeeXmeA9mgmogn9fSApra0tzWzy6tzzbzztza-e-1YR0fR--PDnihKtVX-SYi0nMS9VecnMSUzxc7UNN5eV4HE3LxHx9HfA9nBxpaX5TUbzUpKDNUKBh9e5BfCMSFT6zUbaOd9V0aP7OZecWV-dYlL2AAIBmcozMopohpzU---NOaOa6X97-LEHZBzbeV07yFszq9V-cz9FrX-4YxwbHc6s-9FJpByV0d0kXnUT7V--FTac-5FvBCV-XGFeBnEUa1-686HMnJmxCIATUpUzV5--57eV2t6dDnABplyUaN1c--GxMc-9HB5gtV38862nCBopa0taT7V0d8AyppN7-1THOURmocpAKpBc9zSMU0aN551-USL---WZbifBogn9ghCUrLTTTOyOWs7e7V08F5moo5-48NGSmzJmVCKK6ls-0V-1_meQFN19MIGBrKKKKopKzWaUbsX7X77-17c-1P80D09ablQKBxrSSMSxzUSpSrSrSprMMUSVVVVV0baXX997XX7ccXVX17X7c-DQ9vBxX-PblGIMMSrMMMkVVOte97eX7-DUDUCL1-0bwmfD-3c-SvC55-NcAPfppppSrSr1117X171-Ju42Zn9gmd9ceceAMSrSppKrSIBfrKCMUUKk-T9mcV5Ua5Ubz6tX--0aOa1X902cKbrCKKJpHpIJnIKBnCCBfBfEryOttVOu5OaTN5OX0a-7--1---cRyM--P9esnVneG9xnBmn9grKKJnIJpKSKMKJporUonHe2IBmmnCBpCKrSrKpppxrSzUzxxrV5-NNNOV-Ws-XV55UrSrxyOc775-7egoe50Wta7X777N--7VOxrSVWtbzUUSqV6bWaN19cVX99gecemd9ec1xdFn2SrJeCpKrMSrKpSKSKIKKIICCI9XKMKCMSII9comomnAABpCIJpBmrTObs0taT5OsNOzaUSKMUtV-0aXX0WxOzaOV0zr1750zrGWX--XVVV-77X7V0VV-117XXXcHX1V39Nu-nKrUUyP7X9XVFeTW0xrI997KBcXBgnCAJpta50aUpIIBnKSzba-0VVUzbqNX1c--dA_c19eGowgggnCSSGWWWbaUsUUUccee705ejHzrzUUyNA9eXeV19fFvonOaTX-Rf_UfKCBeISJxrT-0WbbVNXe--AcyX--Aenu-lfzAABeconJnUP5UrSpKIpxLV0zML5-V7--1X7-2gTJfAOV-AQx3k--sU3c1TvB1BnKCIKIKCpMSGzr-0VN--751-19-0iur2k0FkOrQBgceZgnKKMMKKSJmXxpSSprMs6rJnrUra5NX7-X10X0aOVN-1cV70c16258gfA9fJmnIMKxzyOaOs-NNNX-7lElAMryXe7-042oc-A4AKhN-7gKbcmpIrX6zrxrMzUVeVX-gocVXV-3MmVV-3NpHV4wNq3mmmrUUrMUTP77-X7--lazYV3RQ6imfrrSprs-1X9-7liMQEOxse70E6TIBmZxlxxKOa77VV0I6vXBefKMIM5Ota50cV-RW4Rw-0RW5cnK5--Om5EABpMKBhSxxs17-0V5X--H5H1-9mCaYBoxbaP70emCc2MSIBepJfIIBmVP7mnCIAACCKIlV50bxqUV6zxxpCKprzzaUKa577cWVNUrOtV17V17V7Xcc--HEP1-0mI5IF-0mLgQF-amT1YIBonIIICBgonGaOaNOWVNOWba-02AS3hKIKIJN0V-5--AByfCsV-BqE5k-6CtMgN-0D4wcDzDLQCCCBpIIAAUJmmfBnAAJonCBoomgggfABpAKCJeecme9IBnKKKrMJrSrzUSKpMKpzrtttbxpMbbqOaUwUxObzrrK6aTTTOa5550Vc155ObWaOs9--0WWbtzyNce9cc-Ne7Vcc90zbcV0ztte90byTOXeXeeeVNXeeV0RupTnClV-hngH2CCCCJpKKKppUUtzbta5-V777-X177XV1wx_ZnIKKaN-V-PnvrYCJooerSo-OzuXVTOV71MEjtggeeeggnIAACJoTUzrMUbbttyN-AEykhD--x0GZrsc-2FY2g-4o9gQCSX-CjFseBonHonBf9en9eegf9XfCIBfBpCKMMHhCCKpCKICIpOtzSMMKKIJxUbbs7VN1---VV5ObbxrKCESzUpISy0bbbse1cX5-XVcXeV6y6aTNNNfBmehCCBee19cVV-0a6bzttyUyTUtzwUtttaNNOWV-1oImQL--AGQ0CNV-x5IkxkV0IIIYXm2V7XXeyUta5UV-46fyV0C78BrT7V0S83qnAyP2IoidnCSprrSxrSzrUMSxpMxzUUSSMMMMSzSSrrSprMSpMSSxrSxxxprrrrrUrxrSUUbtaUUL----WX-5N97X9emVP97719ecX-0aNcgmme6a9eX7199e77gecVX7cXXXXXcXX77X7X9egeeXX9-2oitACsV0hAoJnEbsc1EIX0Bgeen9gf9rSaOzzWyUrzqNX9-0CE-XnxVV-4FqeV0SGIunObe-1p622T7-0JRDc-0JfGc-vK0CgggrUzaT19V-CLDDs-6Ku0CV-ALMbENV-COvBk-bLoRjSrR-cX-8pp72IJoOWV--4T3HV-STYBq--hTbPoN-6pzxnBpT0X-5q4TfCGaNV-xXFHpN7-6N_hh--2NfsB-NqBUQHeCCtzSSSzT1cX11-1CZ-NpprX17-7qMXnCMyN7c-IOb-BnaN-0Owzc2fPAlBgggf9fAHoonAABgnCKCbbaT5OWaOaTOtbaTTOaN-0PiN7-MPkJBf6tV-4fLuV-SgO9lV-phLT7tV-4gqNV-4hl5V3xiFwnA9nAROzqOaOXV-SifanVGKwWFOaOV6zzzzUUy6tztbKta56s-WrzzsN-5T4rKpppSKSKKKM-6Sk2RmmeXgeggnTUbxyTUbyOe-OMnm0a50aOV-NNOyNOxtyN-fRZugenzttuc6MRg2gooef9eemeX7XeeeA9Y9BehCIUzrMUzzbrxzttzztzUzrzqUzzbzzzbbzrzzV-9fA9eeX0XeBeeY9e7-DrA8vSzrOtaXeec-0S7u7-rS8wBhCUbttcec-bSGCgnCzaN9-BrL6QBezxyTPXV4hpYLmgfCtzxzSttX9ce-" :
		19 === bI.s2 && (oD =
			"EcCx-VQCO1iiqOLOKeeedae_ddadadadOfiveOeLeeeedadaPiuuiePPeeyeeeeOeaPadaeeydPeOedaOPLOeeeOadLOKLKKLJG4G3G4G4G3F-3GJG4G4KKG443G3G3G3G4K3K3K3GKKK3FJ40F33GK0K0K3G3F3F2nBnBnBnB-Bn-04G--BzzwEByvn-wG-BnnB2BkG44K-4KPKQyde_K-G3GKFwGPKO_O_K3J4KG4KKG4KKKJG4KJKK30304LOJG3GKKKKKQvjzuzziviueeaKaKPKKKKKKKKK3K_eOKO_OedaKaLaOevedaOGOeOeeaOaOaOeOjzvjyaPeOKKKOK43K_KKaveJGJ0-JG3G3GF3G3G43KaKF3G4aOedaOFKLK4_eee_dJK33KeaOLOaOjveeKLO_OaOaeKLPeivjeaOeOaJKGKJ4PdadafiyjedLPeueK3F-G30F3G3-3LOaOjeKLPe_O_OeaPfieieeyeaOaPOKOeedeOdada_daOdaKd_O_aOKPOKLKaKdK4LK3LTdaOdKaOK_KLPOaaO_LPKGKKK_KOaLO_aOOaaOdaPOdaO_OaKOdaPOdaPedeOJF--00LaPdeaeOfeyeiuudaueaaPdbeOeuefefuivfifujifieviivifeeid_G-04OF0-03KaPvievjizfeeLJ0-JG-KdOTvfiyviyujffviujeiufeiefivivfivvfeevivveiuueieiefeeiyejffuiuuiviuvfiifiieePeeaieieveuePdaPKJKefefefiuzzvzivviyfvnvjvzEzzjzwzzzBnzwnnk2Bwkn2zzknB-n2BnEBzyzzBzzEwnzznzzzjfzBzwzznziz2zwnBnBBkB--B2EBznEzBwnBnBzzBknEnEByywzzzzzEzz2wnzkzznEBwwEnEnEzznEzzzzzzzzEzwwEEizizizivjvjfznnzyyyvivzzwnyviuizyeyeKbifiuizzvifieeuyviuiuefie_iviiyjzvn3F3Bnw-BnBn2BnBnwnwnwnBkBBk22nEn-EeeieKdeiudaOaOPedaeePeee_KKLPOefzkzEEjzwk2B-k-kBB2yiiuieueeaeeaOOaOvzzzBzvjivjuiuyevieifiedaOeueuivivieuvfyvzvyvvuuvwzzyyvzzvjivvivvjyvznBnn2wzznwoLK-z2BknzEivePPLOOvjBwnEffeuyzefzuuujnkkGG-yzEEzBnEBnnBwnEBnznzzvzzznzvzzEBnzn-k-k-k-2-wB2B-k2-2nBB2kBBwnBw-nB-2Bk22Bw-BkknnBBBBBnBE-znznkkEnE2--kEBknBBkBBk2E-3-2Bk-k2B22BB2k-k-k2BBn-w2-32k-C3F--k-FG0G-22-2-FB--k-2-w-G32En--nB-2kKLePLdFJG3-F0033G043-l3-G3K3JK-32B3G4K4F--B--B--FGLJGJ3F03JLaeKFG--0---BFK--203FGGFG33F2nBFG3FGJ4GJ4K02GKF03-GKKG3K0JFK3G03F--G--l43--Bk--kG-FF3F03G-403G----l0----G--Bn33GJG340JG3-G4KaLKPKG-4-3F3F03-B-------G3FJ00--3KGF--0---03G0032T4mfgmegmeX7fBnJnKIEzzzzbrpzzaObtVOaNX9c9c0JN9cQfjzGG0F4NoWynBpJnKzzzV---Xc1RfMlOOvfvzwEw3GKKF-0gAIV-2OK2-3aoazBjs-pIUdyOaKaKaOfzzvgBnBF---1gInV-4OaA-BexerKESrs-V9V3q6e6dauVn3-0fPHBpMs-c-SiqWQwJ1mtRSUSKKKKKKJOzzxrROc11--TX-X7V7eeV4Meo2avi2kCK--EcNy-OUJfiLKdTzsBk-0kCPrF0fVVRjiveveiueOuveeeeaNn-n22-BG--030303K3F3B6-nnBnBrSr0a---EsTXQudeviviedazk-2-G-030K-4l1tMCkOc-57MIs-E3IhS5P-CYA-DLew--koIyA9emmfACMSrUtbzzzTTObrUtV7ge7X7eeV8QnZxddaebjwnB-30F3xzBZnMKCMzra71-7cV3wA4p_Qzzo4Ffy5yanHpIKSKMKSMSSrKKMofJppMKSKrSpSMKSzrzzrUtaOzsTN1oc5OaUzrHnCTOtaP755N5-T-NUTNN-N-5-5-N-P7X97gn9gmeee9n9meeX97cX7eVeX9cXV"
			), (new rS).rU(oD)
}

function aCm() {
	this.s1 = null, this.dD = function() {
		var aDj = [120, 105, 92],
			cos = [12, 12, 60],
			aDk = [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
			aDl = [140, 130, 120],
			aDm = [12, 12, 76],
			aDn = [240, 120, 1024, 30, 19, 30, 70, 8, 20, 3, 9],
			aDo = [130, 117, 106],
			aDp = [12, 12, 68],
			aDq = [270, 210, 1024, 28, 19, 33, 50, 8, 26, 3, 9];
		this.s1 = new Array(bI.aAX + 1), this.s1[0] = {
			name: L(107),
			u: 230,
			iE: 230,
			l7: 1e3,
			l4: 2e3,
			aCo: 173
		}, this.s1[1] = {
			name: L(108),
			u: 800,
			iE: 800,
			l7: 100,
			l4: 50,
			aCo: 43
		}, this.s1[2] = {
			name: L(109),
			u: 512,
			iE: 512,
			l7: 128,
			l4: 32,
			aCo: 0
		}, this.s1[3] = {
			name: L(110),
			u: 960,
			iE: 960,
			l7: 60,
			l4: 8,
			aCo: 0
		}, this.s1[4] = {
			name: L(111),
			u: 900,
			iE: 900,
			l7: 100,
			l4: 5,
			aCo: 0
		}, this.s1[5] = {
			name: L(112),
			u: 1e3,
			iE: 1e3,
			l7: 100,
			l4: 40,
			aCo: 0
		}, this.s1[6] = {
			name: L(113),
			u: 1e3,
			iE: 1e3,
			l7: 100,
			l4: 20,
			aCo: 0
		}, this.s1[7] = {
			name: L(114),
			u: 1024,
			iE: 1024,
			l7: 128,
			l4: 32,
			aCo: 0
		}, this.s1[8] = {
			name: L(115),
			u: 820,
			iE: 820,
			l7: 200,
			l4: 100,
			aCo: 0
		}, this.s1[9] = {
			name: L(116),
			u: 1024,
			iE: 1024,
			l7: 128,
			l4: 32,
			aCo: 0
		}, this.s1[10] = {
			name: L(117),
			s0: aDl,
			s3: aDm,
			aCx: aDn
		}, this.s1[11] = {
			name: L(118),
			s0: aDo,
			s3: aDp,
			aCx: aDq
		}, this.s1[12] = {
			name: L(119),
			s0: aDo,
			s3: aDp,
			aCx: aDq
		}, this.s1[13] = {
			name: L(120),
			s0: aDj,
			s3: cos,
			aCx: aDk
		}, this.s1[14] = {
			name: L(121),
			s0: aDj,
			s3: cos,
			aCx: aDk
		}, this.s1[15] = {
			name: L(122),
			s0: aDl,
			s3: aDm,
			aCx: aDn
		}, this.s1[16] = {
			name: L(123),
			s0: aDl,
			s3: aDm,
			aCx: aDn
		}, this.s1[17] = {
			name: L(124),
			s0: aDj,
			s3: cos,
			aCx: aDk
		}, this.s1[18] = {
			name: L(125),
			s0: aDo,
			s3: aDp,
			aCx: aDq
		}, this.s1[19] = {
			name: L(126),
			s0: aDj,
			s3: cos,
			aCx: aDk
		}, this.s1[20] = {
			name: L(127),
			u: 1024,
			iE: 1024,
			l7: 128,
			l4: 32,
			aCo: 0
		}, this.s1[bI.aAX] = {}
	}
}

function yy() {
	(sl = void 0 === sl ? document.createElement("canvas") : sl).width = bI.eS, sl.height = bI.eT, z2 = sl.getContext("2d", {
		alpha: !0
	}), z3 = z2.getImageData(0, 0, bI.eS, bI.eT), a5X = z3.data, b2.oc.rj(a5X)
}

function cL() {
	var dr, u, iE, max, aDr, l4, aDt, aDu, aDv, aDw, aDx, aDy, aDz, aE0, aDs = 1e4;

	function aE7(aE6, l7, ex) {
		var a0;
		for (aDt[0] = aE6, a0 = 1; a0 < ex; a0++) aDt[a0] = aDt[a0 - 1] + l7, l7 = aDt[a0] >= aDs ? (aDt[a0] = aDs - 1, -l7) : aDt[a0] < 0 ? (aDt[a0] = 0, -l7) : (l7 += 16384 <= ao.random() ? l4 : -l4) < -aDr ? -aDr : aDr < l7 ? aDr : l7
	}

	function aE9(ff, fg, aEA, ex) {
		(aEA ? function(ff, fg, ex) {
			var a0;
			for (a0 = 0; a0 < ex; a0++) dr[fg * u + ff + a0] = aDt[a0]
		} : function(ff, fg, ex) {
			var a0;
			for (a0 = 0; a0 < ex; a0++) dr[fg * u + ff + a0 * u] = aDt[a0]
		})(ff, fg, ex)
	}

	function aED(value, ex) {
		var a0, jz, fw, gd = value - aDt[ex - 1];
		if (0 != gd) {
			for (jz = 1 + bB.el(Math.abs(gd), ex - 1), jz = gd < 0 ? -jz : jz, aDt[ex - 1] = value, fw = (fw = ex - 1 - bB.el(Math.abs(gd), Math.abs(jz))) < 1 ? 1 : ex - 2 < fw ? ex - 2 : fw, a0 = ex - 2; fw <= a0; a0--) aDt[a0] += gd - (ex - 1 -
				a0) * jz;
			(gd < 0 ? function(ex) {
				var a0;
				for (a0 = ex - 2; 1 <= a0; a0--) aDt[a0] < 0 && (aDt[a0] = -aDt[a0] - 1)
			} : function(ex) {
				var a0;
				for (a0 = ex - 2; 1 <= a0; a0--) aDt[a0] >= aDs && (aDt[a0] = 2 * aDs - aDt[a0] - 1)
			})(ex)
		}
	}

	function aEG(xK, xL, ex) {
		for (var a0 = 0; a0 < ex; a0++) xK[a0] = xL[a0]
	}

	function aEH(e5) {
		for (var a0 = 0; a0 < e5.length - 1; a0++) e5[a0] = e5[a0 + 1] - e5[a0];
		e5[e5.length - 1] = e5[e5.length - 3]
	}

	function aEI(zL, gap, gc) {
		aDu.push(zL), aDv.push(gap), aDw.push(gc)
	}
	this.w = function(yG) {
		! function(yG) {
			var a0;
			for (u = yG[0], iE = yG[1], aDr = yG[2], l4 = yG[3], dr = new Int16Array(u * iE), max = iE < u ? u : iE, aDt = new Int16Array(max), aDu = [], aDv = [], aDw = [], aDx = new Array(u), aDy = new Array(iE), a0 = u - 1; 0 <= a0; a0--) aDx[
				a0] = !1;
			for (a0 = iE - 1; 0 <= a0; a0--) aDy[a0] = !1;
			aDz = new Int16Array(u), aE0 = new Int16Array(iE)
		}(yG),
		function(ex) {
			var aE6 = ao.random() % aDs,
				l7 = ao.random() % (2 * aDr + 1) - aDr;
			aE7(aE6, l7, ex)
		}(max), aEG(aE0, aDt, iE), aE9(0, 0, !0, u);
		var ff, fg, yG = dr[0],
			ex = max,
			l7 = ao.random() % (2 * aDr + 1) - aDr;
		for (aE7(yG, l7, ex), aEG(aDz, aDt, u), aE9(0, 0, !1, iE), aEH(aDz), aEH(aE0), aE7(dr[u - 1], aDz[u - 1], iE), aE9(u - 1, 0, !1, iE), aE7(dr[u * (iE - 1)], aE0[iE - 1], u), aED(dr[u * iE - 1], u), aE9(0, iE - 1, !0, u), aDx[u - 1] = aDx[
				0] = !0, aDy[iE - 1] = aDy[0] = !0, aEI(0, u, !0), aEI(0, iE, !1), ! function() {
				var aEK, zL;
				for (;;) {
					if (aEK = function() {
							var a0, aEK = aDu.length - 1;
							for (a0 = aEK - 1; 0 <= a0; a0--) aDv[a0] > aDv[aEK] && (aEK = a0);
							return aEK
						}(), aDv[aEK] < 5) return;
					zL = aDu[aEK] + bB.el(aDv[aEK], 2), (aDw[aEK] ? function(ff) {
						var ex, aEN, a0, a6I = 0,
							aEO = 0;
						for (; aEO < iE - 1;) {
							for (a0 = a6I + 1; a0 < iE; a0++)
								if (aDy[a0]) {
									aEO = a0;
									break
								} ex = aEO - a6I + 1, aE7(dr[ff + u * a6I], 0 === a6I ? aDz[ff] : aDt[aEN - 1] - aDt[aEN - 2], ex), aED(dr[aEO * u + ff], ex), aE9(ff, a6I, !1, ex), aEN = ex, a6I = aEO
						}
						aDx[ff] = !0
					} : function(fg) {
						var ex, aEN, a0, a6I = 0,
							aEO = 0;
						for (; aEO < u - 1;) {
							for (a0 = a6I + 1; a0 < u; a0++)
								if (aDx[a0]) {
									aEO = a0;
									break
								} ex = aEO - a6I + 1, aE7(dr[fg * u + a6I], 0 === a6I ? aE0[fg] : aDt[aEN - 1] - aDt[aEN - 2], ex), aED(dr[fg * u + aEO], ex), aE9(a6I, fg, !0, ex), aEN = ex, a6I = aEO
						}
						aDy[fg] = !0
					})(zL), aEI(zL, aDu[aEK] + aDv[aEK] - zL, aDw[aEK]), aDv[aEK] = zL - aDu[aEK] + 1
				}
			}(), ff = 0; ff < u; ff++)
			if (!aDx[ff])
				for (fg = 0; fg < iE; fg++) aDy[fg] || ! function(ff, fg) {
					var value = dr[fg * u + ff - 1] + dr[(fg - 1) * u + ff],
						a1C = 2;
					aDx[ff + 1] && (a1C++, value += dr[fg * u + ff + 1]);
					aDy[fg + 1] && (a1C++, value += dr[(fg + 1) * u + ff]);
					dr[fg * u + ff] = bB.el(value, a1C)
				}(ff, fg)
	}, this.aD8 = function() {
		return dr
	}, this.aCt = function() {
		dr = null
	}
}

function a9L(hy, i4) {
	return 0 <= hy ? bB.el(hy, i4) : -bB.el(-hy, i4)
}

function iJ(dr) {
	return dr * dr
}

function a0Q(hy, i4) {
	return i4 < hy ? hy : i4
}

function a3o(hy, i4) {
	return hy < i4 ? hy : i4
}

function a2c(hy, dr, i4) {
	return dr < hy ? hy : i4 < dr ? i4 : dr
}

function aEQ(dr, ex) {
	for (var ik = bB.el(dr + 1, 2), a0 = 0; a0 < ex; a0++) ik = bB.el(ik + bB.el(dr, ik), 2);
	return ik
}

function aB4(dr, ex) {
	return dr < 1 ? 0 : aEQ(dr, ex)
}

function aER(kp, kq, pZ, a2M, kr, ks, pa, a8X) {
	return !(kp + pZ <= kr || kq + a2M <= ks || kr + pa <= kp || ks + a8X <= kq)
}

function aES(kp, kq, pZ, a2M, kr, ks, pa, a8X) {
	return kp <= kr && kq <= ks && kr + pa <= kp + pZ && ks + a8X <= kq + a2M
}

function ra(dr) {
	return Math.floor(!!dr * (1 + Math.log2(dr + .5)))
}

function bd() {
	this.el = function(hy, i4) {
		return Math.floor((hy + .5) / i4)
	}, this.aET = function(hy, i4) {
		return Math.floor(hy * (i4 + .5))
	}, this.sqrt = function(dr) {
		return ~~Math.sqrt(dr + .5)
	}, this.pow = function(d) {
		return Math.floor(Math.pow(2, d) + .5)
	}, this.o5 = function(value, min, max) {
		return Math.min(Math.max(value, min), max)
	}, this.aEU = function(e6, e8, eA) {
		return Math.max(Math.min(e6, e8), eA)
	}, this.aEV = function(aEW, aEX, ff, fg) {
		ff -= aEW, aEW = fg - aEX, fg = 0;
		return 0 == ff ? fg = 0 <= aEW ? Math.PI : 0 : (fg = Math.atan(aEW / ff), fg += 0 < ff ? .5 * Math.PI : 1.5 * Math.PI), fg
	}, this.log2 = function(dr) {
		return Math.floor(!!dr * (1 + Math.log2(dr + .5)))
	}, this.log10 = function(dr) {
		return Math.floor(Math.log10(dr + .5))
	}, this.aEZ = function(aEa, aEb, aEc, aEd, aEe) {
		return aEc - aEe < aEa && aEa < aEc + aEe && aEd - aEe < aEb && aEb < aEd + aEe
	}
}

function cu() {
	this.k8 = new aEf, this.pV = 0;
	var aEg = new Array(18);

	function aEk() {
		for (var ex = aEg.length, a0 = 0; a0 < ex; a0++) aEg[a0] = null
	}
	this.dD = function() {
		for (var aEh, aEi = document.body.firstChild; aEi;) aEh = aEi.nextSibling, "DIV" !== aEi.tagName && "INPUT" !== aEi.tagName && "BUTTON" !== aEi.tagName || document.body.removeChild(aEi), aEi = aEh
	}, this.j = function(ke, aEj, yG) {
		void 0 === aEj && (aEj = this.pV), bT.dK = !0, 0 === ke && (0 === aP.vn() ? ke = 5 : m.n.setState(13)), this.pn(), this.pV = ke;
		var jZ = aEg[ke];
		if (!jZ || 4 === ke || 7 === ke || 8 === ke || 9 === ke || 10 === ke || 11 === ke || 13 === ke || 15 === ke) {
			if (0 === ke) return void aEk();
			1 === ke ? jZ = new aEl : 2 === ke ? jZ = new aEm : 3 === ke ? jZ = new aEn : 4 === ke || 9 === ke || 10 === ke || 11 === ke || 13 === ke ? jZ = yG : 5 === ke ? jZ = new aEo : 6 === ke ? jZ = new aEp : 7 === ke ? jZ = new aEq(i.k8
				.aEr) : 8 === ke ? jZ = yG : 12 === ke ? jZ = new aEs : 14 === ke ? jZ = new aEt : 15 === ke ? jZ = new aEu(i.k8.aEv) : 16 === ke ? jZ = new aEw : 17 === ke && (jZ = new aEx), jZ.aEj = aEj, aEg[ke] = jZ
		}
		jZ.show(yG)
	}, this.vu = function() {
		this.t7() && this.aEy(this.a8q().aEj)
	}, this.aEy = function(ke) {
		this.t7() && (this.pn(), bT.dK = !0, this.pV = ke, aEg[ke] ? aEg[ke].show() : this.j(ke))
	}, this.pn = function() {
		this.t7() && aEg[this.pV].pn()
	}, this.qr = function() {
		this.t7() && (aEg[this.pV].pn(), aEk(), this.pV = 0, m.n.setState(13))
	}, this.kk = function() {
		var jZ;
		this.t7() && (jZ = aEg[this.pV]).kk && jZ.kk()
	}, this.resize = function() {
		if (!this.t7()) return !1;
		aEg[this.pV].resize()
	}, this.fn = function(ff, fg) {
		var jZ;
		this.t7() && (jZ = aEg[this.pV]).fn && jZ.fn(ff, fg)
	}, this.w9 = function(ff, fg) {
		var jZ;
		this.t7() && (jZ = aEg[this.pV]).w9 && jZ.w9(ff, fg)
	}, this.wX = function() {
		var jZ;
		this.t7() && (jZ = aEg[this.pV]).wX && jZ.wX()
	}, this.wC = function(jl, jm, deltaY) {
		var jZ;
		this.t7() && (jZ = aEg[this.pV]).wC && jZ.wC(jl, jm, deltaY)
	}, this.wj = function(code) {
		var jZ;
		return !!this.t7() && ((jZ = aEg[this.pV]).wj && jZ.wj(code), !0)
	}, this.ha = function() {
		var jZ;
		this.t7() && (jZ = aEg[this.pV]) && jZ.ha && jZ.ha()
	}, this.t7 = function() {
		return 0 < this.pV
	}, this.a8q = function() {
		return aEg[this.pV]
	}, this.aEz = function(ke) {
		return aEg[ke]
	}
}

function aEq(data) {
	var aF0, aF1, oP;
	this.show = function() {
		aF0.show(), this.resize()
	}, this.pn = function() {
		aF0.pn()
	}, this.resize = function() {
		aF0.resize(), aF1.resize()
	}, this.wj = function(ik) {
		2 === ik && aF0.q3[0].ok()
	}, aF0 = new px(L(128), [new l(L(129), function() {
		i.vu()
	})]), aF1 = new oN(aF0.q2, ((oP = []).push(function() {
		var aFC = new o9;
		return aFC.oC(L(159)), aFC.oG(L(160) + b2.l1.yU(bX.dV.data[113].value, .01, 2)), aFC.oE(L(161)), aFC.oE(L(162)), aFC.oE(L(163)), aFC
	}()), oP.push(function() {
		var aFC = new o9;
		return aFC.oC(L(146)), aFC.oG(L(147) + b2.l1.yU(bX.dV.data[107].value, .1, 1) + "<br>" + L(148) + (bX.dV.data[108].value + 1) + " / " + bX.dV.data[111].value + "<br>" + L(149) + bX.dV.data[112].value), aFC
	}()), oP.push(function() {
		var aFC = new o9,
			aFD = (aFC.oC(L(130)), new pC(bX.dV.data[105]));
		return aFD.d.readOnly = !0, aFC.oL(aFD), aFC.oL(new p9([new l(L(131), function(d) {
			return b2.kt.xr(aFD.d), b2.kt.xs(d), !0
		}).button])), aFC
	}()), oP.push(function() {
		var aFC = new o9,
			aFE = (aFC.oC(L(132)), new pC(bX.dV.data[106]));
		return aFE.d.readOnly = !0, aFE.d.type = "password", aFC.oL(aFE), aFC.oL(new p9([new l(L(133), function(d) {
			return d.innerText === L(133) ? (d.innerText = L(134), aFE.d.type = "text") : (d.innerText = L(133), aFE.d.type = "password"), !0
		}).button, new l(L(131), function(d) {
			return b2.kt.xr(aFE.d), b2.kt.xs(d), !0
		}).button])), aFC.oL(new p9([new l(L(135), function() {
			i.j(8, i.a8q().aEj, new pW(15))
		}).button])), aFC
	}()), oP.push(function() {
		var aFC = new o9;
		return aFC.oC(L(136)), aFC.oL(new p9([new l(L(137), function() {
			i.j(6, i.a8q().aEj)
		}).button])), aFC.oL(new p9([new l(L(138), function() {
			bX.p4.p5(105, ""), i.j(8, i.a8q().aEj, new pW(18))
		}).button])), aFC.oL(new p9([new l(L(139) + bX.dV.data[105].value, function() {
			i.j(4, 0, new k(L(140), L(141), !0, [new l(L(13), function() {
				i.j(7, i.aEz(7).aEj)
			})]))
		}, p.mT).button])), aFC
	}()), oP.push(function() {
		function aFG(ke) {
			for (var a0 = 0; a0 < 2; a0++) aFF[a0].om(0 === ke ? p.m5 : 0 === a0 ? p.mT : p.q)
		}
		var oJ, aFF, aFC = new o9;
		aFC.oC(L(142)), aFC.oE(L(143)), bX.k8.qk();
		return aFF = [new l(L(144), function() {
			var ke = Math.min(bX.dV.data[117].value, oJ.oK.length - 1);
			if (!(ke < 1)) {
				oJ.oK[ke].remove(), oJ.oK.splice(ke, 1);
				for (var a0 = ke; a0 < oJ.oK.length; a0++) oJ.oK[a0].name = "" + a0;
				bX.k8.qn(ke), ke = bX.dV.data[117].value, oJ.oK[ke].textContent = oJ.oK[ke].textContent.replace("⚪", "🟢"), aFG(ke)
			}
		}, p.m5), new l(L(145), function() {
			var ke = Math.min(bX.dV.data[117].value, oJ.oK.length - 1);
			ke < 1 || (ke = bX.k8.qo(ke), bX.p4.p5(105, ke.pT), bX.p4.p5(106, ke.password), i.j(8, i.a8q().aEj, new pW(18)))
		}, p.m5)], (oJ = new pt(bX.dV.data[117], aFG)).oK[0].style.marginTop = "0.5em", aFC.oI(oJ), aFC.oL(new p9([aFF[1].button])), aFC.oL(new p9([aFF[0].button])), aFC
	}()), oP.push(function() {
		var aFC = new o9,
			aFD = (aFC.oC(L(158)), new pC(bX.dV.data[122]));
		return aFD.d.readOnly = !0, aFC.oL(aFD), aFC.oL(new p9([new l(L(131), function(d) {
			return b2.kt.xr(aFD.d), b2.kt.xs(d), !0
		}).button])), aFC
	}()), function(oP) {
		var aFC = new o9,
			vO = bX.dV.data[137].value,
			aFK = (aFC.oC(L(164)), aFC.oG(L(165) + (vO ? "[" + bX.dV.data[135].value + "]" : "-")), aFC.oG(L(166) + b2.l1.yU(vO, .001, 2)), aFC.oG(L(148) + (bX.dV.data[139].value + 1) + " / " + bX.dV.data[111].value), bX.dV.data[141]
				.value),
			aFL = (aFC.oG(L(167) + b2.l1.yU(aFK, .01, 2)), bX.dV.data[143].value);
		aFC.oG(L(168) + aFL), aFC.oG(L(169) + b2.l1.yU(aFK / Math.max(aFL, 1), .01, 2)), vO = bX.dV.data[138].value, aFC.oC(L(170), "0.8em"), aFC.oG(L(165) + (vO ? "[" + bX.dV.data[136].value + "]" : "-")), aFC.oG(L(166) + b2.l1.yU(vO,
			.001, 2)), aFK = bX.dV.data[142].value, aFC.oG(L(167) + b2.l1.yU(aFK, .01, 2)), aFL = bX.dV.data[144].value, aFC.oG(L(168) + aFL), aFC.oG(L(169) + b2.l1.yU(aFK / Math.max(aFL, 1), .01, 2)), oP.push(aFC)
	}(oP), oP.push(function() {
		var aFC = new o9;
		return aFC.oC(L(155)), aFC.oG(L(156) + data.aFI + "<br>" + L(148) + (data.aFJ + 1) + " / " + data.r0 + "<br>" + L(157) + function(gO) {
			if (40 <= gO) return L(150);
			if (16 <= gO) return L(151);
			if (4 <= gO) return L(152);
			if (1 <= gO) return L(153);
			return L(154)
		}(data.aFJ)), aFC
	}()), oP))
}

function aEu(data) {
	var aF0, aF1, oP;
	this.show = function() {
		aF0.show(), this.resize()
	}, this.pn = function() {
		aF0.pn()
	}, this.resize = function() {
		aF0.resize(), aF1.resize()
	}, this.wj = function(ik) {
		2 === ik && aF0.q3[0].ok()
	}, aF0 = new px(data.username, [new l(L(13), function() {
		i.vu()
	})]), aF1 = new oN(aF0.q2, ((oP = []).push(function() {
		var aFC = new o9;
		return aFC.oC(L(159)), aFC.oG(L(160) + b2.l1.yU(data.r1, .01, 2)), aFC
	}()), oP.push(function() {
		var aFC = new o9,
			aFD = (aFC.oC(L(130)), new pC({
				title: data.pT,
				value: data.pT,
				ke: -1
			}));
		return aFD.d.readOnly = !0, aFC.oL(aFD), aFC.oL(new p9([new l(L(131), function(d) {
			return b2.kt.xr(aFD.d), b2.kt.xs(d), !0
		}).button])), aFC
	}()), oP.push(function() {
		var aFC = new o9,
			aFD = (aFC.oC(L(158)), new pC({
				title: data.username,
				value: data.username,
				ke: -1
			}));
		return aFD.d.readOnly = !0, aFC.oL(aFD), aFC.oL(new p9([new l(L(131), function(d) {
			return b2.kt.xr(aFD.d), b2.kt.xs(d), !0
		}).button])), aFC
	}()), oP.push(function() {
		var aFC = new o9;
		return aFC.oC(L(146)), aFC.oG(L(147) + b2.l1.yU(data.qx, .1, 1) + "<br>" + L(148) + (data.qy + 1) + " / " + data.r0 + "<br>" + L(149) + data.qz), aFC.oL(new p9([new l(L(171), function(d) {
			return b2.kt.xs(d), aq.aFM.aFN({
				pX: 1,
				pT: data.pT,
				pU: data.pU
			}), !0
		}, 0, 0, 1).button])), aFC
	}()), function(oP) {
		var aFC = new o9,
			vO = data.r4,
			aFK = (aFC.oC(L(164)), aFC.oG(L(165) + (vO ? "[" + data.r2 + "]" : "-")), aFC.oG(L(166) + b2.l1.yU(vO, .001, 2)), aFC.oG(L(148) + (data.r6 + 1) + " / " + data.r0), data.r7),
			aFL = (aFC.oG(L(167) + b2.l1.yU(aFK, .01, 2)), data.r9);
		aFC.oG(L(168) + aFL), aFC.oG(L(169) + b2.l1.yU(aFK / Math.max(aFL, 1), .01, 2)), vO = data.r5, aFC.oC(L(170), "0.8em"), aFC.oG("Clan: " + (vO ? "[" + data.r3 + "]" : "-")), aFC.oG(L(166) + b2.l1.yU(vO, .001, 2)), aFK = data.r8,
			aFC.oG(L(167) + b2.l1.yU(aFK, .01, 2)), aFL = data.rA, aFC.oG(L(168) + aFL), aFC.oG(L(169) + b2.l1.yU(aFK / Math.max(aFL, 1), .01, 2)), oP.push(aFC)
	}(oP), oP.push(function() {
		var aFC = new o9;
		aFC.oC(L(155)), aFC.oG(L(156) + data.aFI + "<br>" + L(148) + (data.aFJ + 1) + " / " + data.r0 + "<br>" + L(157) + function(gO) {
			if (40 <= gO) return L(150);
			if (16 <= gO) return L(151);
			if (4 <= gO) return L(152);
			if (1 <= gO) return L(153);
			return L(154)
		}(data.aFJ)), aFC.oL(new p9([new l("−", function(d) {
			return b2.kt.xs(d), aq.aFM.aFN({
				pX: 3,
				pT: data.pT,
				pU: data.pU
			}), !0
		}, 0, 0, 1).button, new l("+", function(d) {
			return b2.kt.xs(d), aq.aFM.aFN({
				pX: 2,
				pT: data.pT,
				pU: data.pU
			}), !0
		}, 0, 0, 1).button]));
		for (var a0 = 0; a0 < 2; a0++) aFC.oA[0].pB[a0].style.fontSize = "1.6em";
		return aFC
	}()), oP))
}

function aFO(data) {
	var aF0, aFP, aFQ, a6N, aFR, aFS, aFT, colors, aFU, aFV, aFW = 0,
		aFX = 0,
		aFY = !1,
		aFZ = !1,
		aFa = [1, 5, 60, 240, 1440, 10080, 43200];

	function aG2(jl, jm) {
		! function(jl, jm) {
			return aFP < jl && jl < aFP + a6N && aFQ < jm && jm < aFQ + aFR
		}(aFW = jl, aFX = jm) ? (aFY && (bT.dK = !0), aFY = !1) : (aFY = !0, bT.dK = !0)
	}
	this.show = function() {
		aFZ = bX.dV.data[127].value, aF0.show(), this.resize()
	}, this.pn = function() {
		aF0.pn()
	}, this.resize = function() {
		aF0.resize();
		var ik = an.oY,
			qC = aF0.q7(),
			aFk = ik * qC.qB,
			ik = ik * qC.q8;
		aFS = b2.kt.pp(.06), aFT = b2.kt.pp(.04), aFP = b2.kt.pp(.06), aFQ = ik + aFS, a6N = an.u - aFP - aFT, aFR = aFk + ik - aFQ - aFT
	}, this.kk = function() {
		aF0.kk(),
			function() {
				var a0, aFh, jL, ff, hy, e5 = data.data,
					aFn = 1,
					aFo = .125,
					aFp = aFZ ? 65536 : 0;
				for (a0 = 0; a0 < e5.length; a0++)
					for (aFh = e5[a0].aFh, jL = aFh.length, aFn = Math.max(jL, aFn), hy = 0; hy < jL; hy++) aFo = Math.max(aFh[hy], aFo), aFp = Math.min(aFh[hy], aFp);
				var kq = aFQ + aFR,
					sd = aFR / (aFo - aFp),
					sc = 1 / (aFn - 1);
				for (ku.lineWidth = bQ.ta, a0 = 0; a0 < e5.length; a0++) {
					for (aFh = e5[a0].aFh, jL = aFh.length, ff = aFP, ku.beginPath(), ku.moveTo(ff + a6N, kq - sd * (aFh[jL - 1] - aFp)), hy = jL - 2; 0 <= hy; hy--) ku.lineTo(ff + sc * hy * a6N, kq - sd * (aFh[hy] - aFp));
					ku.strokeStyle = colors[a0], ku.stroke()
				}(function(aFp, aFo, kq, sd) {
					ku.font = b2.kt.ky(0, .25 * aFP), b2.kt.textBaseline(ku, 1), b2.kt.textAlign(ku, 2), ku.fillStyle = colors[0];
					for (var ff = .92 * aFP, a0 = 0; a0 < 3; a0++) {
						var dr = aFp + a0 * (aFo - aFp) / 2;
						ku.fillText((dr / 1e3).toFixed(3), ff, kq - sd * (dr - aFp))
					}
				})(aFp, aFo, kq, sd),
				function(aFn) {
					var fg = aFQ + aFR + .15 * aFT;
					ku.font = b2.kt.ky(0, Math.min(.4 * aFT, .028 * an.u)), b2.kt.textBaseline(ku, 0), b2.kt.textAlign(ku, 2), ku.fillStyle = colors[0], ku.fillText(b2.x4.xg(aFU), aFP + a6N, fg), b2.kt.textAlign(ku, 0), ku.fillText(b2.x4.xg(
						new Date(aFV.getTime() - 6e4 * (aFn - 1) * aFa[data.aFf])), aFP, fg)
				}(aFn),
				function(aFn, aFp, aFo) {
					if (aFY && !(aFn < 2)) {
						for (var a2U, ke = (aFW - aFP) / a6N * (aFn - 1), jx = Math.floor(ke), jy = Math.floor(1 + ke), aFs = ke - jx, aFt = 1e5, aFu = -1, aFv = -1, aFw = aFo - (aFo - aFp) * (aFX - aFQ) / aFR, e5 = data.data, a0 = 0; a0 < e5
							.length; a0++) {
							var aDQ, aFh = e5[a0].aFh;
							aFh.length <= jy || (aFh = aFh[jx] + aFs * (aFh[jy] - aFh[jx]), (aDQ = Math.abs(aFw - aFh)) < aFt && (aFt = aDQ, aFu = a0, aFv = aFh))
						} - 1 !== aFu && (aFo = aFQ + aFR - (aFv - aFp) / (aFo - aFp) * aFR, ku.lineWidth = .5 * bQ.ta, ku.strokeStyle = colors[aFu], ku.beginPath(), ku.moveTo(aFP, aFo), ku.lineTo(aFW, aFo), ku.lineTo(aFW, aFQ + aFR), ku
						.stroke(), ku.beginPath(), ku.arc(aFW, aFo, .1 * aFP, 0, 2 * Math.PI), ku.fillStyle = colors[aFu], ku.fill(), aFp = aFQ + aFR + .15 * aFT, b2.kt.textAlign(ku, 1), a2U = aFn - 2 < ke ? (a2U = aFV.getTime() - 6e4 * aFa[
								data.aFf], new Date(a2U + (ke - (aFn - 2)) * (aFU.getTime() - a2U))) : new Date(aFV.getTime() - 6e4 * (aFn - ke - 1) * aFa[data.aFf]), aFn = b2.x4.xg(a2U), ke = b2.kt.measureText(aFn), a2U = bB.o5(aFW, aFP +
								.5 * ke, aFP + a6N - .5 * ke), ku.fillStyle = b2.color.lm(70, 50, 20), ku.fillRect(a2U - .52 * ke, aFQ + aFR, 1.04 * ke, .55 * aFT), ku.fillStyle = colors[0], ku.fillText(aFn, a2U, aFp), ku.font = b2.kt.ky(0,
								.25 * aFP), b2.kt.textBaseline(ku, 1), b2.kt.textAlign(ku, 2), a2U = .92 * aFP, aFn = (aFv / 1e3).toFixed(3), ke = b2.kt.measureText(aFn), aFp = a2U - 1.04 * ke, ku.fillStyle = b2.color.lm(70, 50, 20), ku
							.fillRect(aFp, aFo - .1625 * aFP, aFP - aFp, .275 * aFP), ku.fillStyle = colors[aFu], ku.fillText(aFn, a2U, aFo))
					}
				}(aFn, aFp, aFo)
			}(), ku.lineWidth = bQ.ta, ku.strokeStyle = p.lu, ku.beginPath(), ku.moveTo(aFP, aFQ), ku.lineTo(aFP, aFQ + aFR), ku.lineTo(aFP + a6N, aFQ + aFR), ku.stroke();
		var a0, fontSize = .5 * aFS,
			e5 = (ku.font = b2.kt.ky(0, fontSize), b2.kt.textBaseline(ku, 1), b2.kt.textAlign(ku, 0), data.data),
			ex = e5.length,
			fg = aFQ - .5 * aFS,
			oD = "";
		for (a0 = 0; a0 < ex; a0++) oD += e5[a0].name + "  ";
		oD = oD.trim();
		var aFz = b2.kt.measureText(oD),
			ff = .5 * (an.u - aFz);
		for (aFz > an.u && (ff = 0, ku.font = b2.kt.ky(0, an.u / aFz * fontSize)), a0 = 0; a0 < ex; a0++) ku.fillStyle = colors[a0], ku.fillText(e5[a0].name, ff, fg), ff += b2.kt.measureText(e5[a0].name + "  ")
	}, this.fn = function(jl, jm) {
		aG2(jl, jm)
	}, this.w9 = function(jl, jm) {
		aG2(jl, jm)
	}, this.wj = function(ik) {
		2 === ik && aF0.q3[0].ok()
	};
	var a0, dp, xe, jc, f6 = data.data,
		ex = f6.length,
		max = 1;
	for (a0 = 0; a0 < ex; a0++) max = Math.max(max, f6[a0].aFh.length);
	for (a0 = 0; a0 < ex; a0++)
		for (; f6[a0].aFh.length < max;) f6[a0].aFh.unshift(0);
	dp = new Date, xe = 6e4 * dp.getTimezoneOffset(), jc = dp.getTime() - xe, aFU = new Date(jc), 6 === data.aFf ? function(dp, xe) {
		var aFj = dp.getUTCFullYear(),
			dp = dp.getUTCMonth() + 1;
		aFV = dp < 12 ? new Date(Date.UTC(aFj, dp) - xe) : new Date(Date.UTC(aFj + 1, 0) - xe)
	}(dp, xe) : (xe = 6e4 * aFa[data.aFf], aFV = data.aFf <= 4 ? new Date(jc + xe - dp.getTime() % xe) : new Date(jc + xe - (dp.getTime() + 2592e5) % xe)), jc = b2.color, colors = [p.lu, jc.lm(255, 0, 0), jc.lm(0, 200, 0), jc.lm(80, 80, 255), jc
		.lm(255, 255, 0), jc.lm(255, 0, 255), jc.lm(0, 255, 255), jc.lm(255, 140, 0), jc.lm(128, 128, 128), jc.lm(0, 255, 140)
	], aF0 = new px(L(172) + ", " + ["M1", "M5", "H1", "H4", "D1", "W1", "MN"][data.aFf] + ", " + b2.x4.xd(aFU), [new l(L(13), function() {
		i.k8.aFg()
	}), new l(L(173), function() {
		i.j(14)
	})], !1)
}

function aEt() {
	var aF0, aF1, oP;
	this.show = function() {
		aF0.show(), this.resize()
	}, this.pn = function() {
		aF0.pn()
	}, this.resize = function() {
		aF0.resize(), aF1.resize()
	}, this.wj = function(ik) {
		2 === ik && aF0.q3[0].ok()
	}, aF0 = new px(L(174), [new l(L(13), function() {
		i.aEy(13)
	})]), aF1 = new oN(aF0.q2, ((oP = []).push(function() {
		var aFC = new o9,
			aG7 = (aFC.oC(L(175)), aFC.oE(L(176)), new l(L(177), function() {
				bX.p4.p5(130, 0), i.k8.aG8()
			}, 0, 0, 1)),
			aFD = new pC(bX.dV.data[126], 0, function() {
				aG7.button.click()
			});
		return aFC.oL(aFD), aFD.d.placeholder = "a,b,c", aFD.d.style.marginTop = "0.5em", aFC.oL(new p9([aG7.button])), aFC
	}()), oP.push(function() {
		var aFC = new o9,
			aG7 = new l(L(177), function() {
				bX.p4.p5(130, 1), i.k8.aG8()
			}, 0, 0, 1),
			aG9 = new pC(bX.dV.data[129], 1, function() {
				aG9.d.focus()
			}),
			aGA = new pC(bX.dV.data[128], 1, function() {
				aG7.button.click()
			});
		return aFC.oC(L(178)), aFC.oL(aGA), aGA.d.style.marginBottom = "0.5em", aFC.oC(L(179)), aFC.oL(aG9), aFC.oL(new p9([aG7.button])), aFC
	}()), oP.push(function() {
		var aFC = new o9;
		return aFC.oC(L(180)), bX.dV.data[125].pw = ["M1", "M5", "H1", "H4", "D1", "W1", "MN"], aFC.oI(new pt(bX.dV.data[125])), aFC
	}()), oP.push(function() {
		var aFC = new o9;
		return aFC.oC(L(181)), aFC.oL(new p2(bX.dV.data[127], L(182))), aFC
	}()), oP))
}

function aEs() {
	var aF0, aGB, a6N, aGC, a6O, a6P, colors = [0, 0, 0],
		aGD = -1;

	function a6W(a0) {
		var aGG = aGB.fg + a0 * (bQ.gap + a6P);
		ku.fillStyle = "rgb(" + (0 === a0 ? 150 : 2 === a0 ? 30 : 0) + "," + (1 === a0 ? 130 : 2 === a0 ? 30 : 0) + "," + (2 === a0 ? 220 : 0) + ")", ku.fillRect(aGC, aGG, colors[a0] * a6O, a6P), ku.strokeStyle = p.lu, ku.strokeRect(aGC, aGG, a6O,
			a6P), ku.fillStyle = p.lu, ku.font = b2.kt.ky(0, .32 * a6P), b2.kt.textBaseline(ku, 1), b2.kt.textAlign(ku, 0), ku.fillText(L(0 === a0 ? 185 : 1 === a0 ? 186 : 187) + aGE(a0), aGC + bQ.gap, aGG + .53 * a6P)
	}

	function aGE(a0, aGH) {
		return aGH = aGH || 256, bB.o5(Math.floor(aGH * colors[a0]), 0, aGH - 1)
	}

	function we(jl, jm) {
		return !(jl < aGC || jm < aGB.fg || jl > aGB.ff + aGB.u || jm > aGB.fg + aGB.iE)
	}
	this.show = function() {
		var dr = bX.dV.data[121].value;
		colors[0] = (dr >> 12) / 63, colors[1] = (dr >> 6 & 63) / 63, colors[2] = (63 & dr) / 63, aF0.show(), this.resize()
	}, this.pn = function() {
		bX.p4.p5(121, (aGE(0, 64) << 12) + (aGE(1, 64) << 6) + aGE(2, 64)), aF0.pn()
	}, this.resize = function() {
		aF0.resize(), aGB.resize();
		var ik = an.oY,
			qC = aF0.q7(),
			aGF = (aGB.fg = Math.max(aGB.fg, ik * qC.q8 + bQ.gap), ik * qC.qB - 2 * bQ.gap);
		aGB.iE = Math.min(aGB.iE, aGF), aGB.u = 2 * aGB.iE, aGB.fg = ik * qC.q8 + .5 * (ik * qC.qB - aGB.iE), aGB.ff = .5 * (an.u - aGB.u), a6N = .25 * aGB.u, aGC = aGB.ff + a6N + bQ.gap, a6O = aGB.u - a6N - bQ.gap, a6P = (aGB.iE - 2 * bQ.gap) /
			3
	}, this.kk = function() {
		var gO, po, i4;
		aF0.kk(), ku.lineWidth = bQ.ta, gO = aGE(0), po = aGE(1), i4 = aGE(2), ku.fillStyle = "rgb(" + gO + "," + po + "," + i4 + ")", ku.fillRect(aGB.ff, aGB.fg, a6N, aGB.iE), ku.strokeStyle = p.lu, ku.strokeRect(aGB.ff, aGB.fg, a6N, aGB.iE), ku
			.fillStyle = gO + po + i4 < 306 && po < 150 ? p.lu : p.kz, b2.kt.textBaseline(ku, 1), b2.kt.textAlign(ku, 1), ku.font = b2.kt.ky(0, .1 * aGB.iE), ku.rotate(-Math.PI / 2), ku.fillText(L(184), -aGB.fg - .5 * aGB.iE, aGB.ff + .5 * a6N),
			ku.setTransform(1, 0, 0, 1, 0, 0), a6W(0), a6W(1), a6W(2)
	}, this.fn = function(jl, jm) {
		we(jl, jm) && (aGD = bB.o5(Math.floor((jm - aGB.fg) / (a6P + .75 * bQ.gap)), 0, 2), colors[aGD] = bB.o5((jl - aGC) / a6O, 0, 1), bT.dK = !0)
	}, this.w9 = function(jl) {
		-1 !== aGD && (colors[aGD] = bB.o5((jl - aGC) / a6O, 0, 1), bT.dK = !0)
	}, this.wC = function(jl, jm, deltaY) {
		we(jl, jm) && (jl = bB.o5(Math.floor((jm - aGB.fg) / (a6P + .75 * bQ.gap)), 0, 2), colors[jl] = bB.o5(colors[jl] + (1 - 2 * (0 < deltaY)) / 256, 0, 1), bT.dK = !0)
	}, this.wX = function() {
		0 <= aGD && (aGD = -1, bT.dK = !0)
	}, this.wj = function(ik) {
		2 === ik && aF0.q3[0].ok()
	}, aF0 = new px(L(183), [new l(L(13), function() {
		i.k8.aFg()
	})], !1), aGB = new ox([.5, .25], [.5, .5], 1)
}

function pW(id, yG) {
	var aF0, aGI;

	function aGM() {
		aGI.p7.innerHTML += "<br>" + L(190)
	}
	this.aGJ = !0, this.aGK = id, this.show = function() {
		aF0.show(), this.resize(), 15 === id ? aq.k8.a6l(0, id) ? this.aGL() : aGM() : 16 === id ? aq.k8.a6l(0, id) ? aq.a5k.aGN(2) : aGM() : 17 === id ? aq.k8.a6l(0, id) ? aq.a5k.aGN(3) : aGM() : 18 === id ? (aq.k8.close(0, 3253), aq.k8.a6l(0,
				id), aGM()) : 20 === id ? aq.k8.a6l(0, id) ? aq.aFM.aGO(yG) : aGM() : 21 === id ? aq.k8.a6l(0, id) ? aq.aGP.aGQ(yG.pj, yG.pk, yG.pl) : aGM() : 22 === id ? aq.k8.a6l(0, id) ? aq.aGP.aGR(yG.pj, yG.aGS, yG.aGT) : aGM() : 23 === id ?
			aq.k8.a6l(0, id) ? aq.aGP.aGU(yG.aFf, yG.vH) : aGM() : 24 === id ? aq.k8.a6l(0, id) ? aq.aGP.aGV(yG.aFf, yG.pk, yG.pl) : aGM() : 25 === id && (aq.k8.a6l(0, id) ? aq.aFM.aFN(yG) : aGM())
	}, this.aGW = function() {
		15 === id ? this.aGL() : 16 === id ? aq.a5k.aGN(2) : 17 === id ? aq.a5k.aGN(3) : 18 === id ? i.j(8, this.aEj, new pW(16)) : 20 === id ? aq.aFM.aGO(yG) : 21 === id ? aq.aGP.aGQ(yG.pj, yG.pk, yG.pl) : 22 === id ? aq.aGP.aGR(yG.pj, yG.aGS,
			yG.aGT) : 23 === id ? aq.aGP.aGU(yG.aFf, yG.vH) : 24 === id ? aq.aGP.aGV(yG.aFf, yG.pk, yG.pl) : 25 === id && aq.aFM.aFN(yG)
	}, this.aGX = function(code, a12, data) {
		!a12 && code !== id || (16 === code ? i.j(7, this.aEj) : 17 === code ? (aq.k8.close(0, 3252), bX.k8.qn(0), bX.dV.data[117].pw && 0 < bX.dV.data[117].pw.length ? (a12 = bX.k8.qo(0), bX.p4.p5(105, a12.pT), bX.p4.p5(106, a12.password), i.j(
			8, this.aEj, new pW(16))) : (bX.p4.p5(105, ""), i.k8.aFg())) : 21 === code ? i.j(10, this.aEj, new aGY(data)) : 23 === code ? i.j(13, 0, new aFO({
			data: data,
			aFf: yG.aFf
		})) : 25 === code && (i.k8.aEv.pT = yG.pT, i.j(15, this.aEj)))
	}, this.aGL = function() {
		b4.w(48), b4.x(24, Math.floor(bB.pow(24) * Math.random())), b4.x(24, Math.floor(bB.pow(24) * Math.random())), b7.dD(b4.a1), bX.p4.p5(110, b5.rB.tq(b5.rB.to(8))), aq.aFM.aGZ()
	}, this.pn = function() {
		aF0.pn()
	}, this.resize = function() {
		aF0.resize(), aGI.resize()
	}, this.wj = function(ik) {
		2 === ik && aF0.q3[0].ok()
	}, aF0 = new px(L(188), [new l(L(13), function() {
		i.k8.aFg()
	})]), aGI = new p6(aF0.q2, L(189))
}

function aEo() {
	var aGa, aGb, aGB, aFD, aGc;
	this.a8r = new pc, aGB = new ox([.45, .27], [.5, .5], 2 / 3), aGb = [new l("⚔️<br>" + L(97), function() {
			aGd(0)
		}, p.mJ), new l("🗡️<br>" + L(191), function() {
			aGd(1)
		}, p.mV), new l("🔑<br>" + L(192), function() {
			aGd(2)
		}, p.mk), new l("☰<br>" + L(193), function() {
			aGd(3)
		}, p.m6), new l("", function() {
			i.j(12)
		}, p.lq, !1),
		new l("FX Client settings", function() {
			WindowManager.openWindow("settings");
		}, "rgba(0, 0, 20, 0.5")
	], aFD = new pC(bX.dV.data[122]);
	for (var a0 = 0; a0 < aGb.length; a0++) aGb[a0].button.style.position = "absolute";

	function aGd(ke) {
		m.n.setState(10), ay.wY(), aR.ps() || aR.a8h(), 0 === ke ? i.k8.aGe() : 1 === ke ? i.k8.aGf() : 2 === ke ? 0 !== m.id || bX.dV.data[140].value ? i.j(8, i.pV, new pW(16)) : i.k8.aGg(i.pV, 16) : 3 === ke && i.j(1, i.pV)
	}
	aFD.d.style.position = "absolute", aFD.d.style.textAlign = "center", aFD.d.placeholder = L(194), this.show = function() {
		aP.setState(0), m.n.setState(12), this.a8r.show(), aGb[4].om(b2.color.xW(bX.dV.data[121].value)), this.resize(), document.body.appendChild(aFD.d);
		for (var a0 = 0; a0 < aGb.length; a0++) document.body.appendChild(aGb[a0].button);
		1 !== m.id || m.ds < 5 || (aGc && bT.dn > aGc + 144e5 ? m.t.setState(14) : aGc = bT.dn)
	}, this.pn = function() {
		this.a8r.pn(), document.body.removeChild(aFD.d);
		for (var a0 = 0; a0 < aGb.length; a0++) document.body.removeChild(aGb[a0].button)
	}, this.resize = function() {
		this.a8r.resize(), aGB.resize();
		var gap = .5 * bQ.gap,
			a5s = 10 / 99 * .84 * aGB.u,
			aGj = .16 * aGB.iE,
			a31 = .19 * aGB.u,
			ff = aGB.ff + a31,
			a5s = aGB.fg + a5s + 3 * gap,
			u = .5 * (aGB.u - gap) - a31,
			a31 = aGB.u - 2 * a31 - aGj - gap,
			a31 = (b2.kt.pq(aFD.d, ff, a5s, a31, aGj), b2.kt.pq(aGb[4].button, ff + a31 + gap, a5s, aGj, aGj), .5 * (aGB.fg + aGB.iE - (a5s += aGj + gap) - gap));
		b2.kt.pq(aGb[0].button, ff, a5s, u, a31), b2.kt.pq(aGb[1].button, ff + u + gap, a5s, u, a31), b2.kt.pq(aGb[2].button, ff, a5s + a31 + gap, u, a31), b2.kt.pq(aGb[3].button, ff + u + gap, a5s + a31 + gap, u, a31);
		b2.kt.pq(aGb[5].button, ff, a5s + a31 * 2 + gap * 2, u * 2 + gap, a31 / 3);
		for (var a0 = 0; a0 < aGb.length; a0++) aGb[a0].button.style.font = b2.kt.ky(0, b2.kt.xm(.065 * aGB.iE)), b2.kt.oe(aGb[a0].button, 5);
		aFD.d.style.font = b2.kt.ky(0, b2.kt.xm(.08 * aGB.iE)), b2.kt.oe(aFD.d, 5)
	}, this.kk = function() {
		if (aP.a73(), aI.kk(), aD.kk(), bM.kk(), aR.ps()) {
			if (settings.displayWinCounter) {
				const size = Math.floor(aGB.u * 0.03);
				ku.font = b2.kt.ky(1, size);
				ku.fillStyle = "#ffffff";
				const text = "Win count: " + wins_counter;
				const textLength = ku.measureText(text).width;
				ku.textAlign = "left";
				ku.textBaseline = "middle";
				ku.fillText(text, ku.canvas.width - textLength - size / 2, size);
			};
			ku.imageSmoothingEnabled = !1;
			var ik = aR.a76("territorial.io"),
				lY = .84 * aGB.u / ik.width;
			ku.setTransform(lY, 0, 0, lY, aGB.ff + .08 * aGB.u, aGB.fg), aGa = aGa || b2.x0.yE(ik, b2.x0.yK, [0, 0, 0]);
			for (var ff = -1; ff <= 1; ff += 2)
				for (var fg = -1; fg <= 1; fg += 2) ku.drawImage(aGa, ff, fg);
			ku.drawImage(ik, 0, 0), ku.imageSmoothingEnabled = !0;
			var gZ = aR.a76("logo"),
				aGm = .6666 * lY * ik.height / gZ.height,
				kr = .5 * an.u,
				ks = aGB.fg + .5 * lY * ik.height - .5 * aGm * gZ.height;
			ku.setTransform(aGm, 0, 0, aGm, kr - .6 * lY * ik.width, ks), ku.drawImage(gZ, 0, 0), ku.setTransform(aGm, 0, 0, aGm, kr + .6 * lY * ik.width - aGm * gZ.width, ks), ku.drawImage(gZ, 0, 0), ku.setTransform(1, 0, 0, 1, 0, 0), ku
				.imageSmoothingEnabled = !0
		}
	}
}

function aEw() {
	var aF0, aGn, aGo, py;

	function pi(a0) {
		i.j(8, i.pV, new pW(21, {
			pj: a0,
			pk: 0,
			pl: 10
		}))
	}
	this.show = function() {
		aF0.show(), this.resize()
	}, this.pn = function() {
		aF0.pn()
	}, this.resize = function() {
		aF0.resize(), aGn.resize()
	}, this.wj = function(ik) {
		2 === ik && aF0.q3[0].ok()
	}, aGo = [new l(L(195), function() {
		pi(1)
	}), new l(L(196), function() {
		pi(2)
	}), new l(L(197), function() {
		pi(0)
	}), new l(L(198), function() {
		pi(3)
	})], py = [new l(L(13), function() {
		i.vu()
	})], aF0 = new px(L(199), py), aGn = new ou(aGo, aF0.q2)
}

function a67(title, oH, aGp) {
	var aF0, aGI;
	this.show = function() {
		aF0.show(), this.resize()
	}, this.pn = function() {
		aF0.pn()
	}, this.resize = function() {
		aF0.resize(), aGI.resize()
	}, this.wj = function(ik) {
		2 === ik && aF0.q3[0].ok()
	}, aGp = aGp || [new l(L(13), function() {
		i.vu()
	}, p.mT)], aF0 = new px(title, aGp), aGI = new p6(aF0.q2, oH), b2.kt.textAlign(aF0.q2.style, 1)
}

function aGY(data) {
	var aF0, aGq, ik, pM;

	function aGr(gd) {
		var pk;
		data.data.length && (pk = gd < 0 ? parseInt(data.data[0][0]) + gd : parseInt(data.data[data.data.length - 1][0]) + 1, i.j(8, 0, new pW(21, {
			pj: data.pj,
			pk: pk,
			pl: pk + Math.abs(gd)
		})))
	}
	this.show = function() {
			aF0.show(), this.resize()
		}, this.pn = function() {
			aF0.pn()
		}, this.resize = function() {
			aF0.resize(), aGq.resize()
		}, this.wj = function(ik) {
			2 === ik && aF0.q3[0].ok()
		}, ik = data.data.length ? 0 : 1, ik = [new l(L(13), function() {
			i.vu()
		}), new l(L(200), function() {
			aGr(-10)
		}, ik, 0, 1), new l(L(201), function() {
			aGr(10)
		}, ik, 0, 1), new l(L(173), function() {
			i.j(11, 10, new aGs({
				pj: data.pj
			}))
		})], pM = [L(202), L(203), L(204), L(205), L(206), L(207)], aF0 = new px(pM[data.pj], ik),
		function() {
			var a0, f6 = {
					pG: [],
					pS: []
				},
				pG = f6.pG,
				pS = f6.pS,
				aGu = data.data,
				ex = aGu.length,
				lY = [.1, .001, .001, 1, 100, 1][data.pj],
				yO = [1, 3, 3, 0, 0, 0][data.pj],
				pM = [
					[L(208), L(158), L(209), L(210)],
					[L(208), L(211), L(212)],
					[L(208), L(158), L(212), L(210)],
					[L(208), L(158), L(212), L(210)],
					[L(213), L(214), L(215), L(216), L(85)],
					[L(213), L(214), L(217), L(218), L(212)]
				];
			if (f6.pM = pM[data.pj], f6.pQ = [
					[15, 40, 15, 30],
					[30, 40, 30],
					[15, 40, 15, 30],
					[15, 40, 15, 30],
					[12, 16, 30, 30, 12],
					[12, 16, 30, 30, 12]
				][data.pj], 0 === data.pj)
				for (a0 = 0; a0 < ex; a0++) b4.w(30), b4.x(30, aGu[a0][4]), b7.dD(b4.a1), pG.push([{
					dr: aGu[a0][0] + 1 + ".",
					dp: 0
				}, {
					dr: aGu[a0][1],
					dp: 0
				}, {
					dr: (lY * aGu[a0][2]).toFixed(yO),
					dp: 0
				}, {
					dr: b5.rB.tq(b5.rB.to(5)),
					dp: 1
				}]), pS.push([0, 0, 0, aGu[a0][3]]);
			else if (1 === data.pj)
				for (a0 = 0; a0 < ex; a0++) pG.push([{
					dr: aGu[a0][0] + 1 + ".",
					dp: 0
				}, {
					dr: aGu[a0][1],
					dp: 0
				}, {
					dr: (lY * aGu[a0][2]).toFixed(yO),
					dp: 0
				}]);
			else if (2 === data.pj || 3 === data.pj)
				for (a0 = 0; a0 < ex; a0++) b4.w(30), b4.x(30, aGu[a0][4]), b7.dD(b4.a1), pG.push([{
					dr: aGu[a0][0] + 1 + ".",
					dp: 0
				}, {
					dr: aGu[a0][1],
					dp: 0
				}, {
					dr: (lY * aGu[a0][2]).toFixed(yO),
					dp: 0
				}, {
					dr: b5.rB.tq(b5.rB.to(5)),
					dp: 1
				}]), pS.push([0, 0, 0, aGu[a0][3]]);
			else if (4 === data.pj || 5 === data.pj) {
				var aGx = Math.floor((new Date).getTime() / 1e3) % 1048576;
				for (0 < ex && aGx - aGu[0][5] < 0 && (aGx += 1048576), a0 = 0; a0 < ex; a0++) {
					b4.w(60), b4.x(30, aGu[a0][0]), b4.x(30, aGu[a0][2]), b7.dD(b4.a1);
					var aGy = aGu[a0][4];
					4 === data.pj ? "100%" === (aGy = (aGy % 64 * 100 / (aGy >> 6)).toFixed(0) + "%") && (aGy += " (Elo Deducted)") : 32768 <= aGy && (aGy = -(aGy - 32768)), pG.push([{
						dr: "" + aGu[a0][6],
						dp: 0
					}, {
						dr: "" + (aGx - aGu[a0][5]),
						dp: 0
					}, {
						dr: b5.rB.tq(b5.rB.to(5)) + ": " + aGu[a0][7],
						dp: 1
					}, {
						dr: b5.rB.tq(b5.rB.to(5)) + ": " + aGu[a0][8],
						dp: 1
					}, {
						dr: aGy + "",
						dp: 0
					}]), pS.push([aGu[a0][1], aGu[a0][3]])
				}
			}
			aGq = new pF(aF0.q2, f6)
		}()
}

function aGs(yG) {
	var aF0, aF1, oP;
	this.show = function() {
		aF0.show(), this.resize()
	}, this.pn = function() {
		aF0.pn()
	}, this.resize = function() {
		aF0.resize(), aF1.resize()
	}, this.wj = function(ik) {
		2 === ik && aF0.q3[0].ok()
	}, aF0 = new px(L(219), [new l(L(13), function() {
		i.aEy(10)
	})]), aF1 = new oN(aF0.q2, ((oP = []).push(function() {
		var aG7, aFC = new o9,
			aG9 = new pC(bX.dV.data[132], 1, function() {
				aG7.button.click()
			}),
			aGA = new pC(bX.dV.data[131], 1, function() {
				aG9.d.focus()
			});
		aFC.oC(L(178)), aFC.oL(aGA), aGA.d.style.marginBottom = "0.5em", aFC.oC(L(179)), aFC.oL(aG9);
		return aG7 = new l(L(177), function() {
			pk = Math.floor(aGA.d.value), pl = Math.floor(aG9.d.value);
			var pl, pk = {
				xH: Math.min(pk, pl),
				aEK: Math.max(pk, pl)
			};
			i.j(8, i.aEz(10).aEj, new pW(21, {
				pj: yG.pj,
				pk: pk.xH,
				pl: pk.aEK
			}))
		}, 0, 0, 1), aFC.oL(new p9([aG7.button])), aFC
	}()), oP.push(function() {
		var aG7, aFC = new o9,
			aG9 = new pC(bX.dV.data[134], 1, function() {
				aG7.button.click()
			}),
			aGA = new pC(bX.dV.data[133], 0, function() {
				aG9.d.focus()
			});
		return aFC.oC(L(220)), aFC.oL(aGA), aGA.d.style.marginBottom = "0.5em", aFC.oC(L(221)), aFC.oL(aG9), aG7 = new l(L(177), function() {
			var aGS = aGA.d.value.slice(0, 20),
				aGT = Math.abs(Math.floor(aG9.d.value));
			i.j(8, i.aEz(10).aEj, new pW(22, {
				pj: yG.pj,
				aGS: aGS,
				aGT: aGT
			}))
		}, 0, 0, 1), aFC.oL(new p9([aG7.button])), aFC
	}()), oP))
}

function aEp() {
	var aF0, aF1, oP;
	this.show = function() {
		aF0.show(), this.resize()
	}, this.pn = function() {
		aF0.pn()
	}, this.resize = function() {
		aF0.resize(), aF1.resize()
	}, this.wj = function(ik) {
		2 === ik && aF0.q3[0].ok()
	}, aF0 = new px(L(222), [new l(L(13), function() {
		i.j(7, i.aEz(7).aEj)
	}), new l(L(145), function() {
		bX.p4.p5(105, b6.rB.rK(aF1.oQ[0].oA[0].d.value, 5)), bX.p4.p5(106, b6.rB.rK(aF1.oQ[1].oA[0].d.value, 8)), i.j(8, i.aEz(7).aEj, new pW(18))
	})]), aF1 = new oN(aF0.q2, ((oP = []).push(function() {
		var aFC = new o9;
		return aFC.oC(L(130)), aFC.oL(new pC({
			title: "AccountName",
			value: "",
			ke: -1
		})), aFC
	}()), oP.push(function() {
		var aFC = new o9,
			aFE = (aFC.oC(L(132)), new pC({
				title: "Password",
				value: "",
				ke: -1
			}));
		return aFE.d.type = "password", aFC.oL(aFE), aFC.oL(new p9([new l(L(133), function(d) {
			return d.innerText === L(133) ? (d.innerText = L(134), aFE.d.type = "text") : (d.innerText = L(133), aFE.d.type = "password"), !0
		}).button])), aFC
	}()), oP))
}

function aEx() {
	var aF0, aGn, aGo, py;

	function pi(a0) {
		i.j(8, i.pV, new pW(21, {
			pj: a0,
			pk: 0,
			pl: 10
		}))
	}
	this.show = function() {
		aF0.show(), this.resize()
	}, this.pn = function() {
		aF0.pn()
	}, this.resize = function() {
		aF0.resize(), aGn.resize()
	}, this.wj = function(ik) {
		2 === ik && aF0.q3[0].ok()
	}, aGo = [new l(L(206), function() {
		pi(4)
	}), new l(L(207), function() {
		pi(5)
	})], py = [new l(L(13), function() {
		i.vu()
	})], aF0 = new px(L(223), py), aGn = new ou(aGo, aF0.q2)
}

function aEf() {
	this.dV = {}, this.pm = ["", "", ""], this.aEv = null, this.aEr = null, this.vx = function() {
		i.j(5, 5)
	}, this.aGf = function() {
		i.qr(), aQ.dD()
	}, this.aGe = function() {
		i.qr(), aO.a6h(bX.dV.data[10].value), aO.dD()
	}, this.aFg = function() {
		i.j(0 === aP.vn() ? 5 : 0)
	}, this.aG8 = function() {
		if (1 === bX.dV.data[130].value) i.j(8, i.a8q().aEj, new pW(24, {
			aFf: bX.dV.data[125].value,
			pk: bX.dV.data[128].value,
			pl: bX.dV.data[129].value
		}));
		else {
			for (var e5 = (e5 = bX.dV.data[126].value.split(",")).slice(0, 10), a0 = 0; a0 < e5.length; a0++) e5[a0] = e5[a0].trim().slice(0, 7).toUpperCase();
			1 === e5.length && 0 === e5[0].length && (e5 = []), i.j(8, i.a8q().aEj, new pW(23, {
				aFf: bX.dV.data[125].value,
				vH: e5
			}))
		}
	}, this.aGg = function(aEj, target) {
		i.j(4, aEj, new k("Data Usage Information",
			"Do you want your username and other data to be remembered for the next session?<br>The app might not function correctly if you decline data usage.<br>Please read our privacy policy for more information: <a href='" + bA.aH2 +
			"' target='_blank'>" + bA.aH2 + "</a>", !1, [new l(L(13), function() {
				i.j(aEj)
			}), new l("✅ Accept", function() {
				bX.p4.p5(140, 1), 0 === target ? i.j(2, aEj) : i.j(8, aEj, new pW(target))
			})]))
	}, this.aH3 = function() {
		for (var a0 = 0; a0 < 3; a0++) this.pm[a0] = b6.rD.rF(b7.na(5));
		this.pm[1] = "[" + this.pm[1] + "]", 5 === i.pV && i.a8q().a8r.p5(this.pm)
	}
}

function k(title, oH, aH4, aGp) {
	var aF0, aGI;
	this.show = function() {
		aF0.show(), this.resize()
	}, this.pn = function() {
		aF0.pn()
	}, this.resize = function() {
		aF0.resize(), aGI.resize()
	}, this.wj = function(ik) {
		2 === ik && aF0.q3[0].ok()
	}, aGp = aGp || [new l(L(13), function() {
		i.vu()
	}, p.mT)], aF0 = new px(title, aGp), aGI = new p6(aF0.q2, oH), aH4 && b2.kt.textAlign(aF0.q2.style, 1)
}

function aEn() {
	var aF0, qE;

	function aH5() {
		bK.dX.hideCMPButton(), i.j(0);
		var oD = b1.aHB(qE.qJ());
		(0 < oD.length && oD === b1.no.aH8 || b1.aHD.rU(oD)) && b1.aHC()
	}
	this.show = function(aH6) {
		this.aH7(aH6), aF0.show(), this.resize()
	}, this.aH7 = function(aH6) {
		0 === a2.uU ? (aH6 = aH6 || qE.qJ(), qE.qH(aH6)) : (a2.fj || (b1.no.aH8 = b1.aH9.u1()), qE.qH(b1.aHA(b1.no.aH8)))
	}, this.pn = function() {
		aF0.pn()
	}, this.resize = function() {
		aF0.resize(), qE.resize()
	}, this.wj = function(ik) {
		2 === ik ? aF0.q3[0].ok() : aH5()
	}, aF0 = new px(L(224), [new l(L(13), function() {
		i.vu()
	}, p.mT), new l(L(225), function() {
		qE.qK()
	}), new l(L(226), function() {
		qE.qL()
	}), new l(L(227), function() {
		qE.clear()
	}), new l(L(228), function() {
		aH5()
	}, p.mH)]), qE = new qD("replayData", L(229)), aF0.q2.appendChild(qE.qF)
}

function aEm() {
	var aF0, aF1, oP, a5j, aFC;

	function aHE() {
		a5j !== bX.dV.data[12].value && (az.dD(), az.a5i()), i.j(1)
	}
	this.show = function() {
			a5j = bX.dV.data[12].value, aF0.show(), this.resize()
		}, this.pn = function() {
			aF0.pn()
		}, this.resize = function() {
			aF0.resize(), aF1.resize()
		}, this.wj = function(ik) {
			2 === ik && aF0.q3[0].ok()
		}, aF0 = new px(L(230), [new l(L(13), aHE), new l(L(231), function() {
			i.qr(), bX.p4.qt(), i.j(2)
		})]), oP = [], (aFC = new o9).oC(L(232)), aFC.oE(L(233)), oP.push(aFC),
		function(oP) {
			var aFC = new o9,
				e5 = (aFC.oC(L(251)), az.data.a5n());
			aFC.oI(new pt({
				pw: e5,
				value: az.data.a5q(e5)
			}, function(ke) {
				return bX.p4.p5(12, e5[ke].split(":")[0]), !0
			})), oP.push(aFC)
		}(oP), (aFC = new o9).oC(L(234)), bX.dV.data[10].pw = [L(234) + " 1", L(235) + " 1", L(234) + " 2", L(235) + " 2"], aFC.oI(new pt(bX.dV.data[10])), oP.push(aFC), (aFC = new o9).oC(L(236)), bX.dV.data[1].pw = [L(237), L(238), L(239), L(240)],
		aFC.oI(new pt(bX.dV.data[1])), oP.push(aFC), (aFC = new o9).oC(L(241)), bX.dV.data[9].pw = [L(238), L(242), L(243)], aFC.oI(new pt(bX.dV.data[9])), oP.push(aFC), (aFC = new o9).oC(L(244)), bX.dV.data[11].pw = [L(245), L(2), L(246)], aFC.oI(
			new pt(bX.dV.data[11])), oP.push(aFC), (aFC = new o9).oC(L(247)), aFC.oL(new p2(bX.dV.data[2])), oP.push(aFC), (aFC = new o9).oC(L(248)), aFC.oL(new p2(bX.dV.data[7])), oP.push(aFC), (aFC = new o9).oC(L(249)), aFC.oL(new p2(bX.dV.data[
			8])), oP.push(aFC), (aFC = new o9).oC(L(250)), aFC.oL(new pC(bX.dV.data[5])), oP.push(aFC), aF1 = new oN(aF0.q2, oP)
}

function aEl() {
	var aF0, aGn, aGo, py;

	function aHG(id) {
		0 !== m.id || bX.dV.data[140].value ? 0 === id ? i.j(8, 1, new pW(16)) : i.j(2) : i.k8.aGg(i.pV, 0 === id ? 16 : 0)
	}
	this.show = function() {
		m.n.setState(12), aF0.show(), this.resize(), this.ha()
	}, this.pn = function() {
		aF0.pn()
	}, this.resize = function() {
		aF0.resize(), aGn.resize()
	}, this.ha = function() {
		8 === aP.vn() && (2 <= bR.aHL ? aGo[2].ol === p.m5 && aGo[2].om(0) : aGo[2].ol !== p.m5 && aGo[2].om(p.m5), !a2.fj && aB.zy(a2.es) ? aGo[1].ol === p.m5 && aGo[1].om(0) : aGo[1].ol !== p.m5 && aGo[1].om(p.m5), !a2.fj && al.o8(a2.es) ? aGo[
			0].ol === p.m5 && aGo[0].om(0) : aGo[0].ol !== p.m5 && aGo[0].om(p.m5))
	}, this.wj = function(ik) {
		2 === ik && aF0.q3[0].ok()
	}, aGo = [new l(L(128), function() {
		aHG(0)
	}), new l(L(199), function() {
		i.j(16)
	}), new l(L(223), function() {
		i.j(17)
	}), new l(L(252), function() {
		i.k8.aG8()
	}, 0, 0, 1), new l(L(224), function() {
		i.j(3, 1, "")
	}), new l(L(230), function() {
		aHG(1)
	}), new l(L(253), function() {
		i.j(4, 1, new k(L(253), b2.kt.xn([L(262), L(263), "Discord", L(264), L(195), L(265), L(81), L(266), L(267), L(268)], [bA.a63, bA.vj, bA.a65, bA.aHM, bA.aHN, bA.vR, bA.aHO, bA.aHP, bA.aHQ, bA.aH2]), !1, [new l(L(13), function() {
			i.j(1)
		}, p.mT)]))
	}), new l(L(254), function() {
		i.j(4, 1, new k(L(254), dP + "<br><a href='" + bA.aHM + "' target='_blank'>" + bA.aHM + "</a>" +
			"<br><br><b>" + "FX Client v" + fx_version + " " + fx_update + "<br><a href='https://discord.gg/dyxcwdNKwK' target='_blank'>FX Client Discord server</a>" +
			"<br><a href='https://github.com/fxclient/FXclient' target='_blank'>Github repository</a></b>", !0, [new l(L(13), function() {
				i.j(1)
			}, p.mT)]))
	}), new l(L(255), function() {
		i.j(4, 1, new k(L(255), L(269), !1, [new l(L(13), function() {
			i.j(1)
		}), new l(L(270), function() {
			m.n.va(), i.j(1)
		})]))
	}), new l(L(256), function() {
		m.n.vb(), i.j(4, 1, new k(L(271), L(272) + "<a href='" + bA.aH2 + "' target='_blank'>" + bA.aH2 + "</a>", !1, [new l(L(13), function() {
			i.j(1)
		}, p.mT)]))
	})], py = [new l(L(129), function() {
		i.k8.aFg()
	})], 8 === aP.vn() && (aGo.unshift(new l(L(259), function() {
		2 <= bR.aHL && (i.qr(), bS.wm(), bT.dK = !0)
	}, 0, 1)), aGo.unshift(new l(L(260), function() {
		!a2.fj && aB.zy(a2.es) && (b0.g0.nG(), i.qr(), aB.fk) && aB.wm()
	}, 0, 1)), aGo.unshift(new l(L(261), function() {
		!a2.fj && al.o8(a2.es) && (b0.g0.nI(), i.qr(), aB.fk) && aB.wm()
	}, 0, 1))), 1 === m.id && 5 <= m.ds && aGo.push(new l(L(257), function() {
		m.n.vc()
	})), aF0 = new px(L(258), py), aGn = new ou(aGo, aF0.q2)
}

function bc() {
	"function" != typeof Math.log2 && (Math.log2 = function(ff) {
		return Math.log(ff) / Math.log(2)
	}), "function" != typeof Math.log10 && (Math.log10 = function(ff) {
		return Math.log(ff) / Math.log(10)
	}), "function" != typeof Math.sign && (Math.sign = function(ff) {
		return 0 < ff ? 1 : ff < 0 ? -1 : 0
	})
}

function cM() {
	var a3E, aHS, aHT, aHU, aHR = !1;

	function aHV() {
		aHR = !0, a3E = -1, aHS = new Array(4);
		for (var a0 = 3; 0 <= a0; a0--) aHS[a0] = !1;
		var aHW = Math.floor(1 + .02 * an.min);
		aHT = new Array(4), (aHU = new Array(4))[1] = aHU[3] = aHT[0] = aHT[2] = 0, aHU[0] = aHT[3] = -aHW, aHT[1] = aHU[2] = aHW
	}

	function aHX() {
		if (-1 !== a3E)
			if (0 !== a2.uU && a7.ld()) {
				for (var aHY = !1, a0 = 3; 0 <= a0; a0--) aHS[a0] && (aHY = !0, h6 += aHT[a0], h8 += aHU[a0], aW.w9(aHT[a0], aHU[a0]), aH.a2x());
				aHY ? bT.dK = !0 : ae.lU()
			} else ae.lU()
	}
	this.wg = function(ke) {
		0 !== a2.uU && a7.ld() && (aHR || aHV(), aHS[ke] = !0, -1 === a3E) && (a3E = setInterval(aHX, 20), aHX())
	}, this.wk = function(ke) {
		if (0 !== a2.uU && (aHR || aHV(), aHS[ke] = !1, -1 !== a3E)) {
			for (var aHY = !1, a0 = 3; 0 <= a0; a0--) aHY = aHY || aHS[a0];
			aHY || this.lU()
		}
	}, this.lU = function() {
		if (aHR && -1 !== a3E) {
			for (var a0 = 3; 0 <= a0; a0--) aHS[a0] = !1;
			clearInterval(a3E), a3E = -1
		}
	}
}

function cN() {
	this.k8 = new aHZ, this.kC = new aHa, this.mv = new aHb, this.a6m = new aHc, this.a5k = new aHd, this.aFM = new aHe, this.nZ = new aHf, this.aGP = new aHg, this.a0i = new aHh, this.aHi = new aHj, this.aHk = new aHl, this.aHm = new aHn, this.aHo =
		new aHp, this.dD = function() {
			this.k8.dD()
		}
}

function aHZ() {
	var aHq, aHs;
	this.a7E = 5, this.a7F = this.a7E - 1, this.a6k = this.a7E + this.a7F, this.a6j = [0, 1, 5, 2, 6, 3, 7, 4, 8], this.aHr = null;

	function de(a0) {
		return aHs[a0].aHR && aHq[a0].de()
	}

	function aI0(vl) {
		aHs[vl].dn = bT.dn, aHs[vl].aHu = !1
	}
	this.vq = 0, this.vp = 0, this.dD = function() {
		this.aHr = new Array(this.a7E);
		this.aHr[0] = "territorial.io";
		var a0, aCo = ao.aD7(0);
		for (ao.yx(0), a0 = 1; a0 < this.a7E; a0++) this.aHr[a0] = a9.u7() + ".territorial.io";
		for (ao.yx(aCo), aHq = new Array(this.a6k), aHs = new Array(this.a6k), a0 = this.a6k - 1; 0 <= a0; a0--) aHs[a0] = {
			aHR: !1,
			dn: 0,
			aHu: !1
		};
		this.a6l(0, 0)
	}, this.aHv = function(a0) {
		return aHq[a0]
	}, this.aHw = function() {
		return this.vp < this.a7E ? this.vp : this.vp - this.a7F
	}, this.ha = function() {
		for (var a0 = this.a6k - 1; 0 <= a0; a0--) this.a6f(a0) && bT.dn > aHs[a0].dn + 15e3 && aq.mv.aHx(a0, aHs[a0].aHu);
		!this.a6f(0) && bT.dn > aHs[0].dn + 8e3 && (aHs[0].dn = bT.dn, this.a6l(0, 0))
	}, this.a6l = function(vl, aEj) {
		if (aHs[vl].aHR) {
			if (aHq[vl].de()) return aHq[vl].aHz(aEj), aHq[vl].a6f();
			aHq[vl].pn()
		}
		return this.aHy(vl, aEj), !1
	}, this.aHy = function(vl, aEj) {
		aHs[vl].aHR = !0, aI0(vl), aHq[vl] = new aI1, aHq[vl].dD(vl, aEj)
	}, this.aHz = function(vl, aEj) {
		de(vl) && aHq[vl].aHz(aEj)
	}, this.aI2 = function(vl, aEj) {
		aq.a5k.aI3(vl)
	}, this.a6f = function(a0) {
		return aHs[a0].aHR && aHq[a0].a6f()
	}, this.send = function(vl, a1) {
		aI0(vl), aHq[vl].send(a1)
	}, this.wQ = function(vl) {
		8 === aP.vn() && (aHs[vl].aHu = !0, aq.kC.j7 = !0)
	}, this.close = function(vl, aI4) {
		de(vl) && aHq[vl].close(aI4)
	}, this.aI5 = function(vl, aI4) {
		g.vv(aI4), de(vl) && aHq[vl].close(aI4)
	}, this.vy = function(aI4) {
		for (var a0 = this.a6k - 1; 0 <= a0; a0--) this.close(a0, aI4)
	}, this.aI6 = function(vl, aI4) {
		for (var a0 = this.a6k - 1; 0 <= a0; a0--) a0 !== vl && this.close(a0, aI4)
	}, this.z6 = function() {
		this.close(this.vq, 3246)
	}, this.aI7 = function(vl, d) {
		aHq[vl].pn(), g.vk(vl, d.code)
	}
}

function aHa() {
	this.j7 = !1, this.ha = function() {
		bT.eq() % 250 != 249 || a2.fj || (aq.a5k.aI8(+(this.j7 && 0 < aX.kW[a2.es]), iq + bD.k8.nm), this.j7 = !1)
	}
}

function aHh() {
	this.aIA = function(vl, a1) {
		b7.dD(a1), 0 === b7.size ? aq.k8.aI5(vl, 3205) : ((0 === b7.na(1) ? function(vl) {
			var aIE = b7.na(6);
			0 === aIE ? function(vl) {
				if (0 === vl && 8 !== aP.vn()) {
					i.k8.aH3();
					for (var aIO = b7.na(12), aIP = b7.na(6), e5 = new Array(aIO), a0 = 0; a0 < aIO; a0++) e5[a0] = b7.na(aIP);
					aI.a3L(e5)
				}
			}(vl) : 2 === aIE ? aq.aHi.aIG(vl) : 3 === aIE || 4 === aIE ? am.dD() : 5 !== aIE && 6 !== aIE && 7 !== aIE && 8 !== aIE && (9 === aIE ? aq.aHk.aIH(vl) : 10 === aIE ? aq.aHm.aII() : 11 === aIE ? aq.aHk.aIJ() : 12 ===
				aIE ? aq.aHm.aIK() : 13 === aIE ? aq.aHo.aIL() : 14 === aIE ? aq.aHo.aIM() : 15 === aIE && aq.aHk.aIN())
		} : function(vl) {
			if (8 !== aP.vn() && !am.a7G()) return;
			if (vl !== aq.k8.vq) aq.k8.aI5(vl, 3244);
			else if (0 === b7.na(1)) bT.ud.aIV(b7.a1);
			else {
				var a0, vl = b7.na(2);
				if (0 === vl) {
					var nA, mv = b7.na(9);
					0 !== aX.kW[mv] && 0 !== aX.kW[a2.es] && (nA = b7.na(10), aC.n9(mv, a2.es, nA), aW.o6(mv, 1, nA))
				} else if (1 === vl) ! function() {
					var mv = b7.na(9);
					0 !== aX.kW[mv] && 0 !== aX.kW[a2.es] && aw.aCZ(0, [mv], !0) && aC.nS(mv, 1)
				}();
				else if (2 === vl) ! function() {
					var mv = b7.na(9),
						target = b7.na(9);
					0 !== aX.kW[mv] && 0 !== aX.kW[target] && 0 !== aX.kW[a2.es] && aw.aCZ(1, [mv], !0) && (aW.o6(mv, 3, 96), aW.o6(target, 4, 96), aC.a0p(mv, target))
				}();
				else if (y && !z) {
					var ex = 540;
					for (b4.w(17287), b4.x(1, 0), b4.x(6, 10), ex = Math.min(b0.ms.nc.length, 540), a0 = 0; a0 < ex; a0++) b4.aIb(32, b0.ms.nc[a0]);
					aq.k8.send(aq.k8.vq, b4.a1)
				}
			}
		})(vl), bT.aID())
	}, this.a7H = function(a1) {
		if (b7.dD(a1), b7.ke = 1, 3 === b7.na(6)) {
			b7.ke += 20;
			for (var a8U, a8T, name, a1 = b7.na(9), yq = b7.na(14), ys = b7.na(4), a7v = 1 === b7.na(1), a7w = b7.na(6), a7x = b7.na(14), aIU = b7.na(9) + 1, su = [], a0 = 0; a0 < aIU; a0++) a8U = b7.na(1), a8T = [b7.na(6), b7.na(6), b7.na(6)],
				name = b6.rD.rF(b7.na(5)), su.push({
					name: name,
					a8T: a8T,
					a8U: a8U
				});
			aP.a6z(), bI.w(a7w, a7x), 1 === su.length && aQ.a8K(ys), a2.yp(yq, a1, su, ys, a7v, !1)
		} else ! function() {
			b7.ke += 20;
			for (var a8U, a8T, sy, name, a78 = b7.na(1), yq = b7.na(14), ys = b7.na(4), a7v = 1 === b7.na(1), a7w = b7.na(6), a7x = b7.na(14), su = [], a0 = 0; a0 < 2; a0++) a8U = b7.na(1), a8T = [b7.na(6), b7.na(6), b7.na(6)], sy = b7.na(
				14), name = b6.rD.rF(b7.na(5)), su.push({
					name: name,
					a8T: a8T,
					sy: sy,
					a8U: a8U
				});
			aP.a6z(), bI.w(a7w, a7x), a2.yp(yq, a78, su, ys, a7v, !1)
		}()
	}, this.a7C = function() {
		b7.ke = 1;
		var aIE = b7.na(6),
			aIS = b7.na(10);
		return aq.k8.vp > aq.k8.a7F && (aIS += aq.k8.a7F), aq.k8.vp === aIS ? (aq.k8.vq = aIS, !1) : (aq.k8.close(aq.k8.vp, 3247), aq.k8.vq = aIS, am.a77 = b7.na(10), am.a78 = b7.na(3 === aIE ? 9 : 1), aq.k8.a6l(aIS, 5) && aq.mv.aIT(), !0)
	}
}

function aHn() {
	this.aII = function() {
		bX.k8.qj(), bX.p4.p5(105, b5.rB.tq(b5.rB.to(5))), bX.p4.p5(106, b5.rB.tq(b5.rB.to(8))), bX.p4.p5(109, b7.na(30)), bX.p4.p5(108, bX.dV.data[109].value), bX.p4.p5(111, bX.dV.data[109].value + 1), bX.p4.p5(107, 0), bX.p4.p5(110, "")
	}, this.aIK = function() {
		var aIe, aIf, aId;
		b7.size < b4.aIc(18) ? aq.k8.aI5(0, 3254) : (aId = b7.na(5), aIe = b7.na(3), aIf = b7.na(3), b7.aIg(186 + 16 * (aId + aIe + aIf) + 32 + 32 + 30 + 128 + 32 + 30) ? (aId = {
			pU: b7.na(30),
			qx: b7.na(16),
			qy: b7.na(30),
			qz: b7.na(30),
			r0: b7.na(30),
			r1: b7.aIh(32),
			username: b6.rD.rF(aId),
			r2: b6.rD.rF(aIe),
			r3: b6.rD.rF(aIf),
			r4: b7.aIh(32),
			r5: b7.aIh(32),
			r6: b7.na(30),
			r7: b7.aIh(32),
			r8: b7.aIh(32),
			r9: b7.aIh(32),
			rA: b7.aIh(32),
			aFI: b7.aIh(32),
			aFJ: b7.aIh(30)
		}, 8 === i.pV && (25 === i.a8q().aGK ? (i.k8.aEv = aId, i.a8q().aGX(25, !1)) : (i.k8.aEr = aId, bX.p4.qw(aId), i.a8q().aGX(16, !0)))) : aq.k8.aI5(0, 3267))
	}
}

function aHp() {
	this.aIL = function() {
		var a0;
		if (b7.size < b4.aIc(39)) aq.k8.aI5(0, 3259);
		else {
			var pj = b7.na(6),
				ex = b7.na(10),
				gG = b7.na(16);
			if (b7.aIg(39 + 16 * gG + ex * (0 === pj ? 111 : 1 === pj ? 35 : 2 === pj || 3 === pj ? 127 : 186))) {
				var data = [];
				if (0 === pj)
					for (a0 = 0; a0 < ex; a0++) data.push([b7.na(30), b6.rD.rF(b7.na(5)), b7.na(16), b7.na(30), b7.na(30)]);
				else if (1 === pj)
					for (a0 = 0; a0 < ex; a0++) data.push([b7.na(16), b6.rD.rF(b7.na(3)), b7.na(16)]);
				else if (2 === pj || 3 === pj)
					for (a0 = 0; a0 < ex; a0++) data.push([b7.na(30), b6.rD.rF(b7.na(5)), b7.aIh(32), b7.na(30), b7.na(30)]);
				else
					for (a0 = 0; a0 < ex; a0++) data.push([b7.na(30), b7.na(30), b7.na(30), b7.na(30), b7.na(16), b7.na(20), b7.na(20), b6.rD.rF(b7.na(5)), b6.rD.rF(b7.na(5))]);
				8 === i.pV && i.a8q().aGX(21, !0, {
					pj: pj,
					data: data
				})
			} else aq.k8.aI5(0, 3260)
		}
	}, this.aIM = function() {
		if (b7.size < b4.aIc(29)) aq.k8.aI5(0, 3265);
		else {
			var aIi = b7.na(4),
				aIj = b7.na(7),
				aIk = b7.na(11);
			if (b7.aIg(29 + 16 * aIj + 16 * aIk + 11 * aIi)) {
				for (var data = [], a0 = 0; a0 < aIi; a0++) {
					for (var aIl = b6.rD.rF(b7.na(3)), aIm = b7.na(8), aFh = [], hy = 0; hy < aIm; hy++) aFh.push(b7.na(16));
					data.push({
						name: "[" + aIl + "]",
						aFh: aFh
					})
				}
				8 === i.pV && i.a8q().aGX(23, !0, data)
			} else aq.k8.aI5(0, 3266)
		}
	}
}

function aHj() {
	this.aIG = function(vl) {
		var a0, a7Y, aIn, aIo, aIp;
		if (vl !== aq.k8.vp) aq.k8.close(vl, 3239);
		else if (6 === aP.vn() && aj.dD(), 7 !== aP.vn()) aq.k8.close(vl, 3251);
		else {
			for (a7Y = [0, 0, 0, 0], aIn = b7.na(6), a0 = 0; a0 < 4; a0++) a7Y[a0] = b7.na(aIn);
			for (aIo = b7.na(4), aIp = [], a0 = 0; a0 < aIo; a0++) {
				aIp.push({
					id: b7.na(5),
					ys: b7.na(4),
					a7v: 1 === b7.na(1),
					s2: b7.na(6),
					a7t: b7.na(14),
					a7y: b7.na(aIn),
					a7z: b7.na(9) + 1,
					a6u: b7.na(10)
				});
				for (var a80 = b7.na(3), a81 = new Array(a80), a82 = new Array(a80), hy = 0; hy < a80; hy++) a82[hy] = b7.na(9) + 1, a81[hy] = b6.rD.rF(b7.na(3));
				aIp[a0].a80 = a80, aIp[a0].a81 = a81, aIp[a0].a82 = a82
			}
			aj.p5(a7Y, aIp)
		}
	}
}

function aHl() {
	this.aIH = function(vl) {
		var aIX, aIq;
		b7.aIg(70) ? (aIX = b7.na(3), aIq = bW.aIr.ha(b7.na(30), b7.na(30)), aq.a5k.aIs(vl, aIq, aIX), 0 < aIX || (0 === vl && 0 === bX.dV.data[105].value.length ? aq.a5k.aGN(0) : aq.aFM.aIt(vl), 4 === aq.k8.aHv(vl).aIu() ? 6 === aP.vn() && aq
			.a6m.a6n(vl) : 5 !== aq.k8.aHv(vl).aIu() || 8 !== aP.vn() && 10 !== aP.vn() || aq.mv.aIT())) : aq.k8.aI5(vl, 3269)
	}, this.aIJ = function() {
		var id = b7.na(6);
		0 === id ? (aI.a3H || aq.a5k.aGN(1), az.a5i(), 8 === i.pV && i.a8q().aGW()) : 21 === id ? 8 === i.pV && i.a8q().aGX(17) : 22 === id && (bX.p4.p5(106, bX.dV.data[110].value), bX.p4.p5(110, ""), 8 === i.pV) && i.a8q().aGX(16)
	}, this.aIN = function() {
		var ex = b7.na(16),
			aIv = b7.na(16);
		if (b7.aIg(55 + 10 * ex + 16 * aIv)) {
			for (var e5 = [], a0 = 0; a0 < ex; a0++) e5.push(b6.rD.rF(b7.na(10)));
			az.a5m(e5)
		} else aq.k8.aI5(vl, 3270)
	}
}

function aHb() {
	this.aHx = function(vl, aHu) {
		b4.w(8), b4.x(1, 0), b4.x(6, 4), b4.x(1, aHu ? 1 : 0), aq.k8.send(vl, b4.a1)
	}, this.aIT = function() {
		b4.w(58), b4.x(1, 0), b4.x(6, 5), b4.x(8, aq.k8.aHw()), b4.x(10, am.a77), b4.x(9, am.a78), b4.x(10, dR), b4.x(14, e.dS), aq.k8.send(aq.k8.vq, b4.a1)
	}, this.mw = function(fu) {
		b4.w(27), b4.x(1, 1), b4.x(4, 0), b4.x(22, fu), aq.k8.send(aq.k8.vq, b4.a1)
	}, this.mx = function(h5, hr) {
		b4.w(25), b4.x(1, 1), b4.x(4, 1), b4.x(10, h5), b4.x(10, hr), aq.k8.send(aq.k8.vq, b4.a1)
	}, this.n1 = function(h5, mz) {
		b4.w(24), b4.x(1, 1), b4.x(4, 2), b4.x(10, h5), b4.x(9, mz), aq.k8.send(aq.k8.vq, b4.a1)
	}, this.n2 = function(h5, fu) {
		b4.w(37), b4.x(1, 1), b4.x(4, 3), b4.x(10, h5), b4.x(22, fu), aq.k8.send(aq.k8.vq, b4.a1)
	}, this.n6 = function(n4, fu) {
		b4.w(37), b4.x(1, 1), b4.x(4, 4), b4.x(10, n4), b4.x(22, fu), aq.k8.send(aq.k8.vq, b4.a1)
	}, this.n8 = function(hr) {
		b4.w(15), b4.x(1, 1), b4.x(4, 5), b4.x(10, hr), aq.k8.send(aq.k8.vq, b4.a1)
	}, this.nC = function(ke) {
		b4.w(15), b4.x(1, 1), b4.x(4, 6), b4.x(10, ke), aq.k8.send(aq.k8.vq, b4.a1)
	}, this.nF = function(nE) {
		b4.w(6), b4.x(1, 1), b4.x(4, 7), b4.x(1, nE), aq.k8.send(aq.k8.vq, b4.a1)
	}, this.nH = function() {
		b4.w(5), b4.x(1, 1), b4.x(4, 8), aq.k8.send(aq.k8.vq, b4.a1)
	}, this.nQ = function(aIw, aIx) {
		b4.w(24), b4.x(1, 1), b4.x(4, 15), b4.x(9, aIx), b4.x(10, aIw), aq.k8.send(aq.k8.vq, b4.a1)
	}, this.nT = function(a0i) {
		b4.w(14), b4.x(1, 1), b4.x(4, 14), b4.x(9, a0i), aq.k8.send(aq.k8.vq, b4.a1)
	}, this.nX = function(aIy, target) {
		var a0, ex = aIy.length;
		for (b4.w(14 + 9 * ex), b4.x(1, 1), b4.x(4, 13), b4.x(9, target), a0 = 0; a0 < ex; a0++) b4.x(9, aIy[a0]);
		aq.k8.send(aq.k8.vq, b4.a1)
	}
}

function aHe() {
	this.aJ0 = function() {
		b4.w(39), b4.x(1, 0), b4.x(6, 16), aq.a5k.aIz(), aq.k8.send(0, b4.a1)
	}, this.aIt = function(vl) {
		b4.w(115), b4.x(1, 0), b4.x(6, 17), b6.rB.rR(bX.dV.data[105].value, 5), b6.rB.rR(bX.dV.data[106].value, 8), b4.x(30, bX.dV.data[109].value), aq.k8.send(vl, b4.a1)
	}, this.aGZ = function() {
		b4.w(55), b4.x(1, 0), b4.x(6, 18), b6.rB.rQ(bX.dV.data[110].value), aq.k8.send(0, b4.a1)
	}, this.aGO = function(username) {
		b4.w(12 + 16 * username.length), b4.x(1, 0), b4.x(6, 20), aq.a5k.aJ2(username), aq.k8.send(0, b4.a1)
	}, this.aFN = function(data) {
		b4.w(73), b4.x(1, 0), b4.x(6, 25), b4.x(6, data.pX), b6.rB.rR(data.pT, 5), b4.x(30, data.pU), aq.k8.send(0, b4.a1)
	}
}

function aHf() {
	this.nY = function() {
		var f4, ex = a2.ip,
			uM = bH.result.uM,
			aJ3 = uM.length,
			v9 = (b4.w(40 + 16 * ex + aJ3 * (33 + 3 * (a2.jB < 7))), b4.x(1, 1), b4.x(4, 10), b4.x(10, aJ3), b4.x(1, +(2 === a2.uR)), b4.x(24, bH.result.uw), aX.v9);
		for (a0 = 0; a0 < ex; a0++) b4.x(16, v9[a0]);
		var ep = aX.ep;
		for (a0 = 0; a0 < aJ3; a0++) f4 = uM[a0], b4.x(9, f4), b4.x(24, ep[f4]);
		if (a2.jB < 7)
			for (var il = bU.il, up = bU.up, a0 = 0; a0 < aJ3; a0++) b4.x(3, 7 & up[il[uM[a0]]]);
		aq.k8.send(aq.k8.vq, b4.a1)
	}
}

function aHg() {
	this.aGQ = function(pj, pk, pl) {
		b4.w(75), b4.x(1, 0), b4.x(6, 21), b4.x(6, pj), b4.x(1, +(pk < 0)), b4.x(1, +(pl < 0)), b4.x(30, Math.abs(pk)), b4.x(30, Math.abs(pl)), aq.k8.send(0, b4.a1)
	}, this.aGR = function(pj, aGS, aGT) {
		b4.w(18 + 16 * aGS.length + 30), b4.x(1, 0), b4.x(6, 22), b4.x(6, pj), aq.a5k.aJ2(aGS), b4.x(30, aGT), aq.k8.send(0, b4.a1)
	}, this.aGU = function(aFf, vH) {
		for (var ex = vH.length, gG = 0, a0 = 0; a0 < ex; a0++) gG += vH[a0].length;
		for (b4.w(21 + 3 * ex + 16 * gG), b4.x(1, 0), b4.x(6, 23), b4.x(3, aFf), b4.x(4, ex), b4.x(7, gG), a0 = 0; a0 < ex; a0++) b4.x(3, vH[a0].length), b5.rD.rQ(vH[a0]);
		aq.k8.send(0, b4.a1)
	}, this.aGV = function(aFf, pk, pl) {
		b4.w(52), b4.x(1, 0), b4.x(6, 24), b4.x(3, aFf), b4.x(1, +(pk < 0)), b4.x(1, +(pl < 0)), b4.x(20, Math.abs(pk)), b4.x(20, Math.abs(pl)), aq.k8.send(0, b4.a1)
	}
}

function aHc() {
	this.a6n = function(vl) {
		var username = bX.dV.data[122].value.slice(0, 20),
			username = (b4.w(22 + 16 * username.length + 18), b4.x(1, 0), b4.x(6, 1), b4.x(10, dR), aq.a5k.aJ2(username), b2.color.xU(bX.k8.qq()));
		b4.x(6, username[0]), b4.x(6, username[1]), b4.x(6, username[2]), aq.k8.vp = vl, aq.k8.send(vl, b4.a1)
	}, this.a87 = function(a7u) {
		return b4.w(11), b4.x(1, 0), b4.x(6, 2), b4.x(4, a7u), aq.k8.send(aq.k8.vp, b4.a1), !0
	}
}

function aHd() {
	this.aI3 = function(vl) {
		b4.w(39), b4.x(1, 0), b4.x(6, 13), b4.x(14, e.dS), b4.x(4, m.id), b4.x(7, m.ds), b4.x(1, +y), b4.x(1, +z), b4.x(5, (new Date).getHours() % 24), aq.k8.send(vl, b4.a1)
	}, this.aIs = function(vl, aIq, aIX) {
		b4.w(70), b4.x(1, 0), b4.x(6, 14), b4.x(3, aIX), b4.x(30, aIq[0]), b4.x(30, aIq[1]), aq.k8.send(vl, b4.a1)
	}, this.aGN = function(id) {
		b4.w(13), b4.x(1, 0), b4.x(6, 15), b4.x(6, id), aq.k8.send(0, b4.a1)
	}, this.a5l = function(id, oD) {
		var ex = Math.min(oD.length, 63);
		b4.w(19 + 16 * ex), b4.x(1, 0), b4.x(6, 26), b4.x(6, id), b4.x(6, ex), b5.rD.rQ(oD), aq.k8.send(0, b4.a1)
	}, this.aJ4 = function(aIS, oM) {
		b4.w(7 + 26 * oM.length), b4.x(1, 0), b4.x(6, 9);
		for (var a0 = 0; a0 < oM.length; a0++) b4.x(16, oM[a0][0]), b4.x(10, oM[a0][1]);
		aq.k8.send(aIS, b4.a1)
	}, this.aI8 = function(aJ5, a9k) {
		b4.w(20), b4.x(1, 0), b4.x(6, 19), b4.x(1, aJ5), b4.x(12, a9k), aq.k8.send(aq.k8.vq, b4.a1)
	}, this.aJ2 = function(username) {
		b4.x(5, username.length), b5.rD.rQ(username)
	}
}

function aI1() {
	var vl, aEj, b, aJ6 = ["wss://", "/s50/", "/s51/", "/s52/"];

	function aI2() {
		aq.k8.aI2(vl, aEj)
	}

	function aJB(d) {
		aq.a0i.aIA(vl, new Uint8Array(d.data))
	}

	function aJC() {}

	function aI7(d) {
		aq.k8.aI7(vl, d)
	}
	this.dD = function(ke, aJ7) {
		vl = ke, aEj = aJ7;
		ke = aJ6[0];
		vl < aq.k8.a7E ? ke += aq.k8.aHr[vl] + aJ6[1 + dO] : ke += aq.k8.aHr[0] + "/i" + (1 + dO) + (vl - aq.k8.a7F) + "/", (b = new WebSocket(ke)).binaryType = "arraybuffer", b.onopen = aI2, b.onmessage = aJB, b.onclose = aI7, b.onerror = aJC
	}, this.aJ9 = function() {
		return b.readyState === b.CONNECTING
	}, this.a6f = function() {
		return b.readyState === b.OPEN
	}, this.de = function() {
		return this.aJ9() || this.a6f()
	}, this.aHz = function(aJ7) {
		aEj = aJ7
	}, this.aIu = function() {
		return aEj
	}, this.send = function(a1) {
		this.a6f() && b.send(a1)
	}, this.close = function(aI4) {
		this.de() && (b.close(aI4), this.pn())
	}, this.pn = function() {
		b.onopen = null, b.onmessage = null, b.onclose = null, b.onerror = null
	}
}

function d1() {
	var aJD = !1,
		a16 = 0,
		u = 0,
		pZ = 0,
		gap = 0,
		gL = null,
		sn = null,
		xE = null;

	function aJF() {
		for (var a7j, aJK = 0, ex = 0, ik = Math.floor(u / 2), gO = Math.floor(pZ / 2), a7i = 1.5 * Math.PI, a0 = a2.yn; 0 <= a0; a0--) ex += xE[a0], 0 === xE[a0] && aJK++;
		if (aJD = !1, sn.clearRect(0, 0, u, u), sn.fillStyle = p.lr, sn.fillRect(0, 0, u, u), sn.fillStyle = p.lu, sn.fillRect(0, 0, u, gap), sn.fillRect(0, 0, gap, u), sn.fillRect(u - gap, 0, gap, u), sn.fillRect(0, u - gap, u, gap), 0 < ex)
			if (aJK === a2.yn) {
				for (a0 = a2.yn; 0 <= a0; a0--)
					if (0 < xE[a0]) {
						! function(a0, ik, gO) {
							sn.fillStyle = bU.a7n[bU.up[a0]], sn.beginPath(), sn.arc(ik, ik, gO, 0, 2 * Math.PI), sn.fill()
						}(a0, ik, gO);
						break
					}!
				function(ik) {
					var fontSize = ik / 3;
					sn.font = b2.kt.ky(1, fontSize), sn.fillStyle = p.lu, sn.fillText("100%", ik, ik + .1 * fontSize)
				}(ik)
			} else {
				for (a0 = 0; a0 <= a2.yn; a0++) 0 < xE[a0] && (! function(a0, ik, gO, a7i, a7j) {
					sn.fillStyle = bU.a7n[bU.up[a0]], sn.beginPath(), sn.arc(ik, ik, gO, a7i, a7j), sn.lineTo(ik, ik), sn.fill()
				}(a0, ik, gO, a7i, a7j = a7i + 2 * Math.PI * xE[a0] / ex), function(ik, gO, a7i, a7j) {
					var dr = (a7j - a7i) / (2 * Math.PI),
						fontSize = +gO * Math.min(dr, .37);
					fontSize < 8 || (a7i = (a7i + a7j) / 2, a7j = Math.floor(100 * dr + .5) + "%", gO *= .525 - Math.max(.6 * (dr - .7), 0), sn.font = b2.kt.ky(1, fontSize), sn.fillStyle = p.lu, sn.fillText(a7j, ik + Math.cos(a7i) * gO, ik +
						Math.cos(a7i + 1.5 * Math.PI) * gO))
				}(ik, gO, a7i, a7j), 0 !== a0 && a7l(ik, gO, a7i), a7i = a7j);
				a7l(ik, gO, 1.5 * Math.PI)
			}!
		function(ik, gO) {
			sn.beginPath(), sn.arc(ik, ik, gO, 0, 2 * Math.PI), sn.stroke()
		}(ik, gO)
	}

	function a7l(ik, gO, a7o) {
		sn.beginPath(), sn.moveTo(ik, ik), sn.lineTo(ik + Math.cos(a7o) * gO, ik + Math.cos(a7o + 1.5 * Math.PI) * gO), sn.stroke()
	}
	this.dD = function() {
		if (a2.hl) {
			var a0;
			for (a16 = 0, xE = new Uint32Array(a2.yn + 1), a0 = a2.yn; 0 <= a0; a0--) xE[a0] = 0;
			for (a0 = iq - 1; 0 <= a0; a0--) xE[bU.il[is[a0]]] += 1;
			this.resize()
		} else xE = sn = gL = null
	}, this.a1v = function() {
		return u
	}, this.resize = function() {
		a2.hl && (u = Math.floor(m.n.tX() && !a2.lQ ? .18 * an.min : .13 * an.oU), u = (u *= 1 + (.5 + .2 * m.n.tX()) * a2.lQ) + u % 2, pZ = Math.floor(7 * u / 8), (gL = gL || document.createElement("canvas")).width = u, gL.height = u, sn = gL
			.getContext("2d", {
				alpha: !0
			}), gap = Math.max(1, .015 * u), sn.lineWidth = gap, sn.strokeStyle = p.lu, b2.kt.textAlign(sn, 1), b2.kt.textBaseline(sn, 1), aJF())
	}, this.v5 = function() {
		return xE[this.ju()]
	}, this.vV = function() {
		return a16 = 31, this.ha(), this.ju()
	}, this.ju = function() {
		for (var aJG = 0, a0 = a2.yn; 0 < a0; a0--) xE[a0] > xE[aJG] && (aJG = a0);
		return aJG
	}, this.jt = function(aJH) {
		for (var jL = 0, ir = is, il = bU.il, ex = iq, e3 = bE.e3, a0 = 0; a0 < ex; a0++) {
			var f4 = ir[a0];
			il[f4] === aJH && (e3[jL++] = f4)
		}
		bE.dv[0] = jL
	}, this.aJI = function() {
		for (var jL = 0, a0 = a2.yn; 0 < a0; a0--) 0 < xE[a0] && jL++;
		return jL
	}, this.ha = function() {
		if (a2.hl && 32 <= ++a16) {
			var a0;
			for (a16 = 0, a0 = a2.yn; 0 <= a0; a0--) xE[a0] = 0;
			for (a0 = iq - 1; 0 <= a0; a0--) xE[bU.il[is[a0]]] += aX.ep[is[a0]];
			aJD = !0
		}
	}, this.kH = function() {
		a2.hl && aJD && aJF()
	}, this.kk = function() {
		a2.hl && (a2.lQ ? ku.drawImage(gL, bQ.gap, bQ.gap) : ku.drawImage(gL, bQ.gap, a1w + 2 * bQ.gap))
	}
}

function ck() {
	this.dL = function() {
		var value;
		0 === m.id && (value = function(key) {
			if ("undefined" == typeof URLSearchParams) return null;
			var aH6 = window.location.search,
				aH6 = new URLSearchParams(aH6).get(key);
			if ("string" != typeof aH6 || aH6.length < 1) return null;
			return aH6
		}("replay"), function() {
			var vi = new URL(window.location.href);
			vi.search = "";
			try {
				return history.replaceState(null, "", vi.toString()), 1
			} catch (d) {
				console.log("error 352: " + d)
			}
			return
		}()) && value && i.j(3, 0, value)
	}
}

function cO() {
	var aJQ, e5;
	this.dD = function() {
		for (var a0 = (e5 = new Uint16Array(101)).length - 1; 0 <= a0; a0--) e5[a0] = bB.el(32768 * a0, 100);
		this.yx(0)
	}, this.value = function(f4) {
		return e5[f4]
	}, this.aD7 = function() {
		return bB.el(aJQ - 1, 2)
	}, this.yx = function(aCo) {
		aJQ = 2 * aCo % 32768 + 1
	}, this.random = function() {
		return aJQ = 167 * aJQ % 32768
	}, this.i1 = function(kS) {
		return bB.el(kS * this.random(), 32768)
	}, this.ie = function(f4) {
		return 0 !== f4 && this.random() < this.value(f4)
	}, this.hO = function(hy, i4) {
		return hy + this.i1(i4 - hy)
	}
}

function ch() {
	this.no = new aJR, this.aH9 = new aJS, this.aHD = new aJT, this.dD = function(yq, su, ys, yt) {
		var aJU;
		a2.fj || ((aJU = {}).yr = a2.es, aJU.yq = yq, aJU.su = su, aJU.ys = ys, aJU.yt = yt, aJU.a7w = bI.s2, aJU.a7x = bI.a7t, aQ.a8P(aJU), this.no.dD(aJU))
	}, this.ha = function() {
		a2.fj || (this.no.ha(), 3 !== i.pV) || bT.eq() % 15 != 5 && 2 !== a2.uU || i.a8q().aH7()
	}, this.aHC = function() {
		var po = this.no.aJU;
		0 === a2.uU && aP.a6z(), bI.w(po.a7w, po.a7x), 1 === po.su.length && (aQ.a8K(po.ys), aQ.a8M(po.a8N, po.a8O)), aq.k8.close(aq.k8.vq, 3257), aq.k8.vq = 0, a2.yp(po.yq, po.yr, po.su, po.ys, po.yt, !0)
	}, this.aHB = function(oD) {
		var a0 = oD.indexOf("=");
		return 0 <= a0 ? oD.substring(a0 + 1) : oD
	}, this.aHA = function(oD) {
		return "https://territorial.io/?replay=" + oD
	}
}

function aJR() {
	this.aJW = null, this.aJX = null, this.aJY = null, this.aJZ = null, this.aJa = null, this.aJb = null;
	var aJc = 0;
	this.aJU = null, this.aH8 = "", this.dD = function(aJU) {
		this.aJW = [], this.aJX = [], this.aJY = [], this.aJZ = [], this.aJa = [0], this.aJb = [0], aJc = 0, this.aJU = aJU, this.aH8 = ""
	}, this.np = function(id, e6, e8, eA) {
		a2.fj || 2 === a2.uU || (0 === this.aJa[aJc] && (this.aJb[aJc] ? (this.aJa.push(1), this.aJb.push(0), aJc++) : this.aJa[aJc] = 1), this.aJW.push(id), this.aJX.push(e6), this.aJY.push(void 0 === e8 ? 0 : e8), this.aJZ.push(void 0 === eA ?
			0 : eA), this.aJb[aJc]++)
	}, this.ha = function() {
		0 === this.aJa[aJc] ? this.aJb[aJc]++ : (this.aJa.push(0), this.aJb.push(0), aJc++)
	}
}

function aJT() {
	function aJi(oD, aJk) {
		aJk ? aC.a09 = "Replay Error: " + oD : i.j(4, 3, new k("⚠️ Replay Error", oD, !0))
	}
	this.rU = function(oD) {
		if (b6.rB.rN(b6.rB.rL(b6.rB.rJ(oD))), aC.a09 = "", ! function() {
				if (b7.size < 10) aJi("File Too Small");
				else if (b7.na(9) !== dQ && aJi("Incompatible Version Error", !0), b7.na(31) !== b7.size) aJi("Size Error");
				else {
					if (function(iE) {
							var a0, f4 = b7.a1,
								ex = b7.size,
								a9k = 0;
							for (a0 = 7; a0 < ex; a0++) a9k = a9k + f4[a0] & 65535;
							return a9k === iE
						}(b7.na(16))) return 1;
					aJi("Hash Error")
				}
				return
			}()) return !1;
		var aJU;
		(aJU = {}).yr = b7.na(9), aJU.yq = b7.na(14), aJU.ys = b7.na(4), aJU.yt = 1 === b7.na(1), aJU.a7w = b7.na(6), aJU.a7x = b7.na(14), aJU.aJl = b7.na(10), b1.no.aJU = aJU,
			function() {
				var a0, a8U, a8T, name, ex = b1.no.aJU.aJl,
					su = [];
				for (a0 = 0; a0 < ex; a0++) a8U = b7.na(1), a8T = [b7.na(6), b7.na(6), b7.na(6)], name = b6.rD.rF(b7.na(5)), su.push({
					name: name,
					a8T: a8T,
					a8U: a8U
				});
				if (b1.no.aJU.su = su, 8 === b1.no.aJU.ys)
					for (a0 = 0; a0 < ex; a0++) su[a0].sy = b7.na(14)
			}();
		var a0, ex, aJm = b1.no.aJU;
		if (1 === aJm.su.length)
			for (ex = 6 < aJm.ys ? 1 : aJm.ys + 2, aJm.a8N = new Array(ex), aJm.a8O = new Array(ex), a0 = 0; a0 < ex; a0++) aJm.a8N[a0] = b7.na(3), aJm.a8O[a0] = b7.na(9) + 1;
		return !! function() {
			var rV = b7.na(5),
				aJn = b7.na(30),
				aJo = b7.na(30);
			if (aJn + aJo > 8 * b7.size) return void aJi("Corrupted File");
			return function(ex) {
					var a0, id, aJr = new Uint8Array(ex),
						aJs = new Uint16Array(ex),
						aJt = new Uint32Array(ex),
						aJu = new Uint32Array(ex);
					for (b1.no.aJW = aJr, b1.no.aJX = aJs, b1.no.aJY = aJt, b1.no.aJZ = aJu, a0 = 0; a0 < ex; a0++) aJr[a0] = id = b7.na(4), aJs[a0] = b7.na(9), 0 === id ? aJt[a0] = b7.na(22) : 1 === id ? (aJt[a0] = b7.na(10), aJu[a0] = b7
						.na(10)) : 2 === id ? (aJt[a0] = b7.na(10), aJu[a0] = b7.na(9)) : 3 === id || 4 === id ? (aJt[a0] = b7.na(10), aJu[a0] = b7.na(22)) : 5 === id || 6 === id ? aJt[a0] = b7.na(10) : 7 === id && (aJt[a0] = b7.na(1))
				}(aJn),
				function(ex, rV) {
					var a0, aJa = new Uint8Array(ex),
						aJb = new Array(ex);
					for (aJb.fill(0), b1.no.aJa = aJa, b1.no.aJb = aJb, a0 = 0; a0 < ex; a0++) aJa[a0] = b7.na(1), aJb[a0] = b7.na(rV)
				}(aJo, rV), 1
		}() && (b7.ke < 8 * b7.size - 13 || b7.ke > 8 * b7.size ? (aJi("Out Of Bounds Error: " + b7.ke + " " + 8 * b7.size), !1) : (b1.no.aH8 = oD, !0))
	}
}

function aJS() {
	this.u1 = function() {
		var aJm, rV = function() {
				var a0, aJb = b1.no.aJb,
					ex = aJb.length,
					max = 0;
				for (a0 = 0; a0 < ex; a0++) max = Math.max(max, aJb[a0]);
				return ra(Math.max(max, 1))
			}(),
			aJw = function(rV) {
				return 179 + function() {
					var a0, su = b1.no.aJU.su,
						ex = su.length,
						aJw = 24 * ex;
					for (a0 = 0; a0 < ex; a0++) aJw += 16 * su[a0].name.length;
					8 === b1.no.aJU.ys && (aJw += 14 * ex);
					return aJw
				}() + (1 === b1.no.aJU.su.length ? 12 * b1.no.aJU.a8N.length : 0) + function() {
					var a0, aJW = b1.no.aJW,
						ex = aJW.length,
						aJw = 13 * ex,
						aK7 = [22, 20, 19, 32, 32, 10, 10, 1, 0, 0];
					for (a0 = 0; a0 < ex; a0++) aJw += aK7[aJW[a0]];
					return aJw
				}() + function(rV) {
					return b1.no.aJb.length * (1 + rV)
				}(rV)
			}(rV);
		b4.w(aJw + (6 - aJw % 6) % 6), aJm = b1.no.aJU, b4.x(9, dQ), b4.x(31, b4.size), b4.ke += 16, b4.x(9, aJm.yr), b4.x(14, aJm.yq), b4.x(4, aJm.ys), b4.x(1, aJm.yt), b4.x(6, aJm.a7w), b4.x(14, aJm.a7x), b4.x(10, aJm.su.length);
		var a0, su = b1.no.aJU.su,
			ex = su.length;
		for (a0 = 0; a0 < ex; a0++) b4.x(1, su[a0].a8U), b4.x(18, (su[a0].a8T[0] << 12) + (su[a0].a8T[1] << 6) + su[a0].a8T[2]), b4.x(5, su[a0].name.length), b5.rD.rQ(su[a0].name);
		if (8 === b1.no.aJU.ys)
			for (a0 = 0; a0 < ex; a0++) b4.x(14, su[a0].sy);
		return function() {
				var a0, aJm = b1.no.aJU;
				if (1 === aJm.su.length)
					for (a0 = 0; a0 < aJm.a8N.length; a0++) b4.x(3, aJm.a8N[a0]), b4.x(9, aJm.a8O[a0] - 1)
			}(),
			function(rV) {
				var a0, aJW = b1.no.aJW,
					e6 = b1.no.aJX,
					e8 = b1.no.aJY,
					eA = b1.no.aJZ,
					ex = aJW.length;
				for (b4.x(5, rV), b4.x(30, ex), b4.x(30, b1.no.aJb.length), a0 = 0; a0 < ex; a0++) b4.x(4, aJW[a0]), b4.x(9, e6[a0]), 0 === aJW[a0] ? b4.x(22, e8[a0]) : 1 === aJW[a0] ? (b4.x(10, e8[a0]), b4.x(10, eA[a0])) : 2 === aJW[a0] ? (b4.x(
					10, e8[a0]), b4.x(9, eA[a0])) : 3 === aJW[a0] || 4 === aJW[a0] ? (b4.x(10, e8[a0]), b4.x(22, eA[a0])) : 5 === aJW[a0] || 6 === aJW[a0] ? b4.x(10, e8[a0]) : 7 === aJW[a0] && b4.x(1, e8[a0])
			}(rV),
			function(rV) {
				var a0, aJa = b1.no.aJa,
					aJb = b1.no.aJb,
					ex = aJa.length;
				for (a0 = 0; a0 < ex; a0++) b4.x(1, aJa[a0]), b4.x(rV, aJb[a0])
			}(rV), b4.ke !== aJw && aC.vr("Encoder Index Error: " + b4.ke + " " + aJw), b4.ke = 40, b4.x(16, function() {
				var a0, f4 = b4.a1,
					ex = b4.size,
					a9k = 0;
				for (a0 = 7; a0 < ex; a0++) a9k = a9k + f4[a0] & 65535;
				return a9k
			}()), b7.dD(b4.a1), b5.rB.tq(b5.rB.to(bB.el(aJw - 1, 6) + 1))
	}
}

function cU() {
	var ik, a12 = !1,
		aK8 = !1,
		aK9 = -1e4,
		aKA = -1,
		aKB = 0;

	function resize(aKF) {
		ik = 0, aR.ps() && (aKD(aKF) || a12) && (a12 = !1, bQ.resize(), aN.dD(), bM.dD(), aO.resize(), aI.resize(), aD.resize(), i.resize(), 1 <= a2.uU ? (aK.resize(!1), aJ.resize(), aL.resize(), aH.resize(), aG.resize(), aC.resize(), aB.resize(), b3
			.resize(), al.resize(), aE.resize(), aF.resize(), aA.resize(), bS.resize(), aW.resize(), aM.resize(), bV.resize(), aH.a2x()) : (2 === aP.vn() && aQ.resize(), aP.a71(), aP.a72()), bT.dK = !0)
	}

	function aKC(dr) {
		return dr && 128 < dr ? Math.floor(dr) : 128
	}

	function aKD(aKF) {
		var u, iE, aKH, pZ, a2M;
		if (!(0 < an.pE)) return pZ = aKC(document.documentElement.clientWidth), a2M = aKC(window.visualViewport && 2 !== m.id ? window.visualViewport.height : document.documentElement.clientHeight), u = pZ, iE = a2M, aKH = 0 !== m.id || u < iE ?
			700 : 1200, aKH = Math.min(aKH / ((u + iE) / 2), 1), aKH = 0 === bX.dV.data[1].value ? 2 * aKH / 3 : Math.min(aKH + (bX.dV.data[1].value - 1) * (1 - aKH) / 2, 1), an.oY = (window.devicePixelRatio || 1) * aKH, hoveringTooltip
			.canvasPixelScale = an.oY, aKF && !aK8 ? (aK8 = !0, document.body.removeChild(w8)) : aK8 && (aK8 = !1, document.body.appendChild(w8)), u = Math.floor(.5 + pZ * an.oY), iE = Math.floor(.5 + a2M * an.oY), u !== an.u || iE !== an.iE ? (
				an.u = u, an.iE = iE, an.min = a3o(u, iE), an.max = a0Q(u, iE), an.oU = bB.el(u + iE, 2), an.qA = u / iE, w8.width = u, w8.height = iE, w8.style.width = pZ + "px", w8.style.height = a2M + "px", aKA = bT.dn + 1e3, 1) : void 0
	}
	this.u = 0, this.iE = 0, this.min = 0, this.max = 0, this.oU = 0, this.qA = 1, this.oY = 1, this.pE = 0, this.dE = function() {
		this.u = aKC(document.documentElement.clientWidth) + 2, this.iE = aKC(document.documentElement.clientHeight) + 2
	}, this.dD = function() {
		ik = 1, w8 = document.getElementById("canvasA"), (ku = w8.getContext("2d", {
			alpha: makeMainMenuTransparent
		})).imageSmoothingEnabled = !1, aKD(0)
	}, this.ha = function() {
		at.ha(), 50 <= ++ik && resize(0), -1 === aKA || bT.dn < aKA || (aKA = -1, 2e3 * ++aKB >= bT.dn + 8e3 ? console.log("error 3748") : m.n.setState(15))
	}, this.dN = function(gd) {
		a12 = !0, resize(gd)
	}, this.wr = function() {
		aK9 + 1e3 > bT.dn || (aK9 = bT.dn, resize(0))
	}
}

function cP() {
	var player, hs, pb, rm, kp, kq, kr, ks, ke, aKJ, id;

	function aKP() {
		var hr;
		if (aS.f9(pb)) hr = a2.f1;
		else {
			if ((hr = aS.f8(pb)) === player) return void aKR(!0);
			if (!gC(player, hr)) return function(hr) {
				var max = aX.ep[hr] * a2.iw - aX.et[hr];
				max <= 0 || (hs -= max = max < hs ? max : hs, player === a2.es && (aC.nN(max, 0, hr), bR.ev[16] += max), hr === a2.es && (aC.a0w(max, player), bR.ev[10] += max), aX.et[hr] += max, aW.nO(hr, max))
			}(hr), void aKR(!0)
		}
		player === a2.es && (bR.ev[13] += hs), a6.er(player, id), aU.ew(player, aKJ), aX.ey[player].push(rm), aU.ho(player, hs, hr), a4.hp(player, !0)
	}

	function aKR(aKU) {
		a6.er(player, id), aU.ew(player, aKJ), aKU && (aX.et[player] += hs)
	}

	function aKL() {
		aS.a9Q(pb, player) && aS.a9S(pb)
	}

	function aKK(a0, aAv, a1r, i0, ld) {
		if (ke = a0, id = aAv, player = a1r, kp = aS.kv(i0), kq = aS.kw(i0), kr = aS.kv(ld), ks = aS.kw(ld), rm = pb = aS.sL(kp, kq), -1 !== (aKJ = aU.l0(player, id))) return hs = aU.ee(player, aKJ), 1;
		aKL(), a6.er(player, id)
	}
	this.ha = function(a0, id, a1r, i0, ld) {
		aKK(a0, id, a1r, i0, ld) && (aKL(), function() {
			var aKV = bB.el(hs, 128);
			hs -= aKV = aKV < 1 ? 1 : aKV, player === a2.es && (bR.ev[15] += aKV);
			if (hs <= a2.em) return player === a2.es && (bR.ev[15] += hs), void aKR(!1);
			return aU.fM(player, aKJ, hs), 1
		}()) && (a0 = aS.sL(kp, kq), pb = Math.abs(kr - kp) >= Math.abs(ks - kq) ? a0 + eO[kp < kr ? 1 : 3] : a0 + eO[kq < ks ? 2 : 0], kp = aS.kv(pb), kq = aS.kw(pb), a6.kd(ke, pb), ! function() {
			if (aS.ez(pb)) return;
			return 1
		}() ? aKP() : aS.g3(pb) && aS.a9V(pb, player))
	}, this.kh = function(a1r, i0) {
		player = a1r, pb = aS.sL(aS.kv(i0), aS.kw(i0)), aKL()
	}
}

function cy() {
	this.aIr = new aKW, this.v3 = new aKX
}

function aKX() {
	this.v4 = function() {
		for (var f4, ex = iq, su = is, v9 = aX.v9, a79 = this.aA0(), a0 = 0; a0 < ex; a0++) f4 = su[a0], aS.uN(f4) && (v9[f4] = a79);
		var nu = aX.nu,
			hi = aX.hi,
			hj = aX.hj,
			vF = aX.vF,
			ex = a2.ip;
		for (a0 = 0; a0 < ex; a0++)(0 === vF[a0] || hj[a0] < 1 || 2 * nu[a0] > 3 * (hi[a0] + hj[a0])) && (v9[a0] = 0);
		var uv = 0;
		for (a0 = 0; a0 < ex; a0++) uv += 0 < v9[a0];
		return uv
	}, this.aA0 = function() {
		return Math.min(65535, bT.eq())
	}
}

function aKW() {
	function aKb(e5, dr, jc) {
		for (var a0 = 0; a0 < 256; a0++) e5[a0] = (e5[a0] + (dr >> (a0 + jc) % 30 & 1)) % 256
	}
	this.ha = function(aKY, aKZ) {
		var e5 = new Uint8Array(256);
		return function(e5, aKY, aKZ) {
				var a0, aKd = 3 + (4 + aKY) % 32768,
					aKe = 12 + aKZ % 32768,
					aKf = 17 + ((aKY & aKZ) + (aKY | aKZ) + aKY) % 32768;
				for (a0 = 0; a0 < 256; a0++) aKd = 1 + aKd * aKe % aKf, e5[a0] = aKd % 256
			}(e5, aKY, aKZ), aKb(e5, aKY, 2), aKb(e5, aKZ, 7),
			function(e5) {
				var a0, dr, ke = 0;
				for (a0 = 0; a0 < 3e4; a0++) dr = e5[ke], e5[ke] = (dr + a0 + e5[(ke + a0) % 256]) % 256, ke = (dr + a0 + ke + (dr & ke)) % 256
			}(e5),
			function(e5) {
				var a0, a2M = 1,
					a8X = 1;
				for (a0 = 0; a0 < 256; a0 += 2) a2M = (1 + a2M) * (e5[a0] + 1) % 1073741824, a8X = (1 + a8X) * (e5[a0 + 1] + 1) % 1073741824;
				return [a2M, a8X]
			}(e5)
	}
}

function cR() {
	var aKg, aKh, g3, aKi;
	this.dD = function() {
		var a0, ff, fg, a8T, aKj, u, iE, sn, gI, rk, dr, f4, iI, hy, zY;
		if (function() {
				if (g3 = !0, aKi = "rgb(" + bI.ri[0] + "," + bI.ri[1] + "," + bI.ri[2] + ")", bI.aCv(bI.s2)) return 1;
				return g3 = !1, 0
			}()) aKh = null;
		else {
			for (aKg = bB.el(96, 4), aKj = 1 === bI.s2 ? (a8T = 0, 160) : (a8T = 128, 32), aKi = "rgb(" + a8T + "," + a8T + "," + a8T + ")", aKh = new Array(4), a0 = 3; 0 <= a0; a0--) {
				if (aKh[a0] = document.createElement("canvas"), u = a0 % 2 == 0 ? bI.eS : aKg, iE = a0 % 2 == 0 ? aKg : bI.eT + 2 * aKg, aKh[a0].width = u, aKh[a0].height = iE, rk = (gI = (sn = aKh[a0].getContext("2d", {
						alpha: !1
					})).getImageData(0, 0, u, iE)).data, a0 % 2 == 0)
					for (fg = aKg - 1; 0 <= fg; fg--)
						for (dr = aKj + Math.floor((fg + 1) * (a8T - aKj) / (aKg + 1)), ff = u - 1; 0 <= ff; ff--) rk[f4 = 4 * ((0 === a0 ? aKg - fg - 1 : fg) * u + ff)] = dr, rk[f4 + 1] = dr, rk[f4 + 2] = dr, rk[f4 + 3] = 255;
				else {
					for (ff = aKg - 1; 0 <= ff; ff--)
						for (dr = aKj + Math.floor((ff + 1) * (a8T - aKj) / (aKg + 1)), fg = iE - 1 - aKg; aKg <= fg; fg--) rk[f4 = 4 * (fg * u + (3 === a0 ? aKg - ff - 1 : ff))] = dr, rk[f4 + 1] = dr, rk[f4 + 2] = dr, rk[f4 + 3] = 255;
					for (hy = 1; 0 <= hy; hy--)
						for (ff = aKg - 1; 0 <= ff; ff--)
							for (fg = aKg - 1; 0 <= fg; fg--) iI = (Math.pow(ff * ff + fg * fg, .5) + 1) / (aKg + 1), dr = aKj + Math.floor((1 < iI ? 1 : iI) * (a8T - aKj)), rk[f4 = 4 * ((0 === hy ? aKg - fg - 1 : fg + hy * (iE - aKg)) * u + (
								1 === a0 ? ff : aKg - ff - 1))] = dr, rk[f4 + 1] = dr, rk[f4 + 2] = dr, rk[f4 + 3] = 255
				}
				sn.putImageData(gI, 0, 0)
			}
			zY = aKj, bI.rd.fillStyle = "rgb(" + zY + "," + zY + "," + zY + ")", bI.rd.fillRect(0, 0, bI.eS, 1), bI.rd.fillRect(0, bI.eT - 1, bI.eS, 1), bI.rd.fillRect(0, 0, 1, bI.eT), bI.rd.fillRect(bI.eS - 1, 0, 1, bI.eT)
		}
	}, this.sj = function() {
		var hy = g3 ? 0 : -aKg;
		aES(hy, hy, bI.eS - 2 * hy, bI.eT - 2 * hy, bO.aKm, bO.aKn, bO.aKo, bO.aKp) || (ku.fillStyle = aKi, ku.fillRect(0, 0, an.u, an.iE))
	}, this.kk = function() {
		g3 || (aER(0, -aKg, bI.eS, aKg, bO.aKm, bO.aKn, bO.aKo, bO.aKp) && ku.drawImage(aKh[0], bO.aKq, bO.aKr - aKg), aER(bI.eS, -aKg, aKg, bI.eT + 2 * aKg, bO.aKm, bO.aKn, bO.aKo, bO.aKp) && ku.drawImage(aKh[1], bO.aKq + bI.eS, bO.aKr - aKg),
			aER(0, bI.eT, bI.eS, aKg, bO.aKm, bO.aKn, bO.aKo, bO.aKp) && ku.drawImage(aKh[2], bO.aKq, bO.aKr + bI.eT), aER(-aKg, -aKg, aKg, bI.eT + 2 * aKg, bO.aKm, bO.aKn, bO.aKo, bO.aKp) && ku.drawImage(aKh[3], bO.aKq - aKg, bO.aKr - aKg))
	}
}

function cn() {
	this.g4 = new aKs, this.a9y = new aKt, this.sk = new aKu, this.k8 = new aKv, this.hE = new aKw, this.zY = new aKx, this.aKy = new aKz, this.iZ = new aL0, this.jU = new aL1, this.aL2 = new aL3, this.dD = function() {
		this.sk.dD(), this.k8.dD(), this.hE.dD(), this.zY.dD(), this.aL2.dD()
	}, this.kk = function() {
		this.aL2.kk(), this.sk.kk()
	}
}

function aL0() {
	this.ha = function(player) {
		return 0 !== aX.fG[player].length && bD.k8.nm !== bD.k8.ny && bD.k8.nl[player] !== bD.k8.nz && !!b2.en.ns(player, player < a2.ip ? 20 : a3.j4[a3.hs[player]], 32, 0) && !(!ab.hR.ha(player) && !ab.hT.ha(player) || ! function(xw) {
			var aL6 = bE.e0[1] + bC.gP[bE.e0[2] - 1] << 2;
			if (aS.f9(aL6)) return 1;
			return aL6 = aS.f8(aL6), xw !== aL6 && !!gC(xw, aL6)
		}(player)) && function(player) {
			return b2.en.nv(player), bD.k8.o0(player), !0
		}(player)
	}
}

function aKs() {
	function aLN(a0, jl, jm) {
		var aLP, aLO;
		if (!(a0 < 0)) return aLO = bD.k8.aLK[a0], aLP = bC.gt(aLO), aLO = bC.gw(aLO), a0 = 20 * (.9 + .1 * Math.log10(bD.k8.a0h[a0])), bB.aEZ(bC.gs(jl), bC.gv(jm), aLP, aLO, a0)
	}

	function aLG(aLF) {
		var aLS = 4 + .03 * (1 + 1.5 * m.n.tX()) * an.oU / h7;
		return bC.gx(aLF, bE.e0[1]) < aLS
	}
	this.g5 = function(player, aLF) {
		return !!bC.h9(aLF) && bD.k8.nm !== bD.k8.ny && bD.k8.nl[player] !== bD.k8.nz && 0 !== aX.fG[player].length && !!bD.jU.jV(player, aLF) && !!aLG(aLF)
	}, this.n5 = function(player, n4, aLF) {
		return !!(bC.h9(aLF) && this.o1(player, n4) && bD.jU.o2(aLF) && aLG(aLF))
	}, this.o1 = function(player, id) {
		for (var aLH, pk = player << 3, pl = pk + bD.k8.nl[player], aLI = bD.k8.aLI, aLJ = bD.k8.aLJ, a0 = pk; a0 < pl; a0++)
			if (id === aLJ[aLH = aLI[a0]]) return bE.e0[3] = aLH, !0;
		return !1
	}, this.n3 = function(fu) {
		var zZ = bD.zY.zZ;
		return !!this.o1(a2.es, zZ) && (b0.g0.n3(zZ, fu), !0)
	}, this.za = function(jl, jm) {
		var player = a2.es,
			ex = bD.k8.nl[player];
		if (0 === ex) return !1;
		for (var aLI = bD.k8.aLI, aLK = bD.k8.aLK, pk = player << 3, aLL = 80, aFu = -1, a0 = pk + ex - 1; pk <= a0; a0--) {
			var aLM = aLI[a0],
				iI = bC.gn(jl, jm, aLK[aLM]);
			iI < aLL && (aLL = iI, aFu = aLM)
		}
		return !!aLN(aFu, jl, jm) && (bD.zY.zZ = bD.k8.aLJ[aFu], !0)
	}, this.zh = function(jl, jm) {
		var ex = bD.k8.nm;
		if (ex < 1) return -1;
		for (var aLK = bD.k8.aLK, aLL = 80, aFu = -1, a0 = 0; a0 < ex; a0++) {
			var iI = bC.gn(jl, jm, aLK[a0]);
			iI < aLL && (aLL = iI, aFu = a0)
		}
		return aLN(aFu, jl, jm) ? aFu : -1
	}
}

function aKt() {
	this.a9z = function(player) {
		for (var aLI = bD.k8.aLI, pk = player << 3, a0 = pk + bD.k8.nl[player] - 1; pk <= a0; a0--) this.aLT(aLI[a0])
	}, this.aLT = function(aLU) {
		var k8 = bD.k8,
			aLV = k8.nm - 1,
			aLW = k8.a0g[aLU],
			aLX = k8.aLY[aLU],
			aLZ = k8.aLK[aLU];
		k8.nm = aLV, k8.a0g[aLU] = k8.a0g[aLV], k8.aLa[aLU] = k8.aLa[aLV], k8.aLb[aLU] = k8.aLb[aLV], k8.aLK[aLU] = k8.aLK[aLV], k8.aLc[aLU] = k8.aLc[aLV], k8.a0h[aLU] = k8.a0h[aLV], k8.aLY[aLU] = k8.aLY[aLV], k8.aLJ[aLU] = k8.aLJ[aLV], k8.aLd[
				aLU] = k8.aLd[aLV], k8.aLe[aLU] = k8.aLe[aLV], k8.aLf[aLU] = k8.aLf[aLV], k8.aLI[k8.a0g[aLU]] = aLU,
			function(a7o) {
				var player = a7o >> 3,
					k8 = bD.k8,
					ex = k8.nl[player] - 1,
					aLi = (player << 3) + ex;
				k8.nl[player] = ex, aLi !== a7o && (k8.aLI[a7o] = k8.aLI[aLi], k8.a0g[k8.aLI[a7o]] = a7o)
			}(aLW), bD.hE.hE[bC.hD(k8.aLK[aLU])][k8.aLY[aLU]] = aLU, aLV = bC.hD(aLZ), aLW = aLX, aLV = bD.hE.hE[aLV], k8 = aLV.pop(), aLW !== aLV.length && (aLV[aLW] = k8, bD.k8.aLY[k8] = aLW)
	}
}

function aKu() {
	var aLk, tC = 8,
		aLl = new Array(2);

	function aLm(ke) {
		var gF = tC + 4,
			xP = b2.kt.rZ(gF, gF),
			gM = b2.kt.getContext(xP, !0),
			gI = b2.kt.getImageData(gM, gF, gF),
			rk = gI.data;
		return aLn(rk, gF + 1, ke), aLn(rk, gF + 2, ke), aLn(rk, 2 * gF + 1, ke), aLn(rk, 2 * gF - 3, ke), aLn(rk, 2 * gF - 2, ke), aLn(rk, 3 * gF - 2, ke), aLn(rk, gF * (gF - 3) + 1, ke), aLn(rk, gF * (gF - 2) + 1, ke), aLn(rk, gF * (gF - 2) + 2,
			ke), aLn(rk, gF * (gF - 2) - 2, ke), aLn(rk, gF * (gF - 1) - 3, ke), aLn(rk, gF * (gF - 1) - 2, ke), gM.putImageData(gI, 0, 0), xP
	}

	function aLn(rk, fu, ke) {
		fu *= 4;
		rk[fu] = 255, rk[1 + fu] = 255, rk[2 + fu] = ke, rk[3 + fu] = 255
	}

	function rZ(player) {
		var xP = b2.kt.rZ(tC, tC);
		return function(gM, player) {
			var ff, fg, gr, fu, aLp, a7p, gF = tC,
				gI = b2.kt.getImageData(gM, gF, gF),
				rk = gI.data,
				jZ = (gF >> 1) - .5,
				aKi = aS.a1K(player),
				aLr = b2.oc.x7(aKi, .5);
			b2.oc.x9(aKi, aLr, 300) || b2.oc.xB(aKi, 100);
			for (fg = 0; fg < gF; fg++)
				for (ff = 0; ff < gF; ff++) a7p = (gF - 1.5) * (gF - 1.5) / 4, aLp = (gr = (gr = ff - jZ) * gr + (gr = fg - jZ) * gr) <= (gF - 4.5) * (gF - 4.5) / 4 ? aLr : aKi, rk[fu = 4 * (fg * gF + ff)] = aLp[0], rk[1 + fu] = aLp[1], rk[2 +
					fu] = aLp[2], rk[3 + fu] = a7p < gr ? 0 : 255;
			gM.putImageData(gI, 0, 0)
		}(b2.kt.getContext(xP, !0), player), xP
	}
	this.dD = function() {
		aLk = new Array(a2.f1), aLl[0] = aLm(255), aLl[1] = aLm(0)
	}, this.kk = function() {
		var a0, player, aLs, aEa, hs, gq, aLu, aLw, aLx, aLK = bD.k8.aLK,
			a0g = bD.k8.a0g,
			a0h = bD.k8.a0h,
			aLe = bD.k8.aLe,
			aLy = aLk,
			aLz = a2.es,
			aM0 = -1,
			ex = bD.k8.nm,
			aM1 = an.u,
			aM2 = an.iE,
			aM3 = bI.eS << 4,
			yV = h7,
			fw = yV / tC,
			kp = h6 / yV,
			kq = h8 / yV,
			gr = (aM1 + h6) / yV - kp,
			gu = (aM2 + h8) / yV - kq,
			gM = ku;
		for (bD.g4.o1(a2.es, bD.zY.zZ) && (aM0 = bE.e0[3]), gM.imageSmoothingEnabled = yV < 9, b2.kt.textAlign(gM, 1), b2.kt.textBaseline(gM, 1), a0 = 0; a0 < ex; a0++) player = a0g[a0] >> 3, hs = a0h[a0], aLs = .9 + .1 * Math.log10(hs), aEa = (
				gq = aLK[a0]) % aM3 / 16 - aLs, gq = aM2 * (Math.floor(gq / aM3) / 16 - aLs - kq) / gu, aLu = -2 * (aLx = yV * aLs) * (1 + (aLw = +(player === aLz)) / 8), aLw = aLw * aLx / 4, (aLx = aM1 * (aEa - kp) / gr) < aLu || gq < aLu ||
			aM1 + aLw < aLx || aM2 + aLw < gq || (aEa = 2 * aLs * fw, aLu = aLs * yV, void 0 === (aLw = aLy[player]) && (aLy[player] = aLw = rZ(player)), player === aLz && (gM.setTransform(aEa, 0, 0, aEa, aLx - 2 * aEa, gq - 2 * aEa), gM
				.drawImage(aLl[+(a0 === aM0)], 0, 0)), gM.setTransform(aEa, 0, 0, aEa, aLx, gq), gM.drawImage(aLw, 0, 0), (aLs = Math.floor(function(hs) {
				if (hs < 1e3) return .42;
				if (hs < 1e4) return .34;
				if (hs < 1e6) return .26;
				if (hs < 1e8) return .19;
				return .15
			}(hs) * aLu)) < 6) || (gM.setTransform(1, 0, 0, 1, 0, 0), gM.fillStyle = aLe[a0] ? p.mM : p.lu, gM.font = b2.kt.ky(1, aLs), gM.fillText(b2.l1.l2(hs), aLx + aLu, gq + aLu + .1 * aLs));
		gM.imageSmoothingEnabled = !1, gM.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function aL3() {
	var xP;
	this.dD = function() {
		xP = xP || bF.k8.aM6(20, bU.aM7[0])
	}, this.kk = function() {
		var lf = h7;
		if (!(5 <= lf)) {
			var aM1 = an.u,
				aM2 = an.iE,
				kp = h6 / lf,
				kq = h8 / lf,
				kr = (aM1 + h6) / lf,
				ks = (aM2 + h8) / lf,
				f5 = -20 * lf,
				aM8 = .5 * f5,
				aM3 = bI.eS << 4,
				ex = bD.k8.nm,
				aLK = bD.k8.aLK,
				aM9 = xP,
				gM = ku;
			3 < lf && (gM.globalAlpha = .5 * (5 - lf));
			for (var a0 = 0; a0 < ex; a0++) {
				var gq = aLK[a0],
					ff = aM1 * (gq % aM3 / 16 - kp) / (kr - kp) + aM8,
					gq = aM2 * (Math.floor(gq / aM3) / 16 - kq) / (ks - kq) + aM8;
				aM1 < ff || aM2 < gq || ff < f5 || gq < f5 || (gM.setTransform(lf, 0, 0, lf, ff, gq), gM.drawImage(aM9, 0, 0))
			}
			gM.globalAlpha = 1, gM.setTransform(lf, 0, 0, lf, 0, 0)
		}
	}
}

function aKz() {
	this.ha = function() {
		for (var aLO, aKy, aLd = bD.k8.aLd, aLK = bD.k8.aLK, aLb = bD.k8.aLb, a0 = bD.k8.nm - 1; 0 <= a0; a0--) aLO = aLK[a0], 0 !== (aKy = aLd[a0]) && aLO === aLb[a0] && (! function(a0, aMC, gc) {
			var hr, player = bD.k8.a0g[a0] >> 3,
				gc = aMC + bC.gP[gc] << 2,
				a0 = bD.k8.a0h[a0];
			if (aS.f9(gc)) hr = a2.f1;
			else {
				if ((hr = aS.f8(gc)) === player) return b2.en.nM(player, a0);
				if (!gC(player, hr)) return b0.iu.nK(player, hr, a0)
			}
			player === a2.es && (bR.ev[13] += a0);
			aX.ey[player].push(aMC << 2), aU.ho(player, a0, hr), a4.hp(player, !0)
		}(a0, bC.hC(aLO), aKy - 1), bD.a9y.aLT(a0))
	}, this.aMD = function(player, fu, gc) {
		if (0 !== gc) {
			var aLz = a2.es;
			if (b2.en.fm(aLz) && gC(player, aLz) && player !== aLz && 0 !== aX.fG[aLz].length) {
				var aL6 = fu + bC.gP[--gc] << 2;
				if (aS.f9(aL6) || gC(player, aS.f8(aL6))) {
					for (var a0r = !1, a0 = 0; a0 < 4; a0++)
						if (aL6 = fu + bC.gP[a0] << 2, aS.ez(aL6) && !aS.f9(aL6) && aS.f8(aL6) === aLz) {
							a0r = !0;
							break
						} a0r && (aC.a0q(719, 0), aC.ut(180, L(273, [aX.l3[player]]), 719, player, p.mL, p.lr, -1, !0))
				}
			}
		}
	}
}

function aKv() {
	this.aME = null, this.ny = 512, this.nz = 8, this.nm = 0, this.kY = 0, this.a0g = new Uint16Array(this.ny), this.aLa = new Uint32Array(this.ny), this.aLb = new Uint32Array(this.ny), this.aLK = new Uint32Array(this.ny), this.aLc = new Uint16Array(
			this.ny), this.a0h = new Uint32Array(this.ny), this.aLY = new Uint16Array(this.ny), this.aLJ = new Uint16Array(this.ny), this.aLd = new Uint8Array(this.ny), this.aLe = new Uint8Array(this.ny), this.aLf = new Uint32Array(this.ny), this
		.nl = new Uint8Array(a2.f1), this.aLI = new Uint16Array(this.nz * a2.f1), this.dD = function() {
			this.kY = 0, this.nm = 0, this.aME = new Uint8Array(bI.eS + bI.eT), this.nl.fill(0)
		}, this.o0 = function(player) {
			var ex = this.nm,
				aMF = bC.hB(bE.e0[0]),
				aMG = this.nl[player],
				aMH = (player << 3) + aMG,
				hs = (aX.kW[player] = 2, this.a0g[ex] = aMH, this.aLa[ex] = aMF, this.aLK[ex] = aMF, this.aLb[ex] = bC.hB(bE.e0[1]), this.aLc[ex] = 0, bE.dw[0]);
			hs < 60 ? (b2.en.eo(player, 60 - hs), this.a0h[ex] = 60) : this.a0h[ex] = hs, this.aLY[ex] = bD.hE.o0(ex, bC.hD(aMF)), this.aLJ[ex] = this.kY, this.aLd[ex] = bE.e0[2], this.aLe[ex] = 0, this.aLf[ex] = 0, this.kY = this.kY + 1 & 1023, this
				.aLI[aMH] = ex, this.nl[player] = aMG + 1, this.nm++, bD.aKy.aMD(player, bE.e0[1], bE.e0[2])
		}, this.n3 = function() {
			var aLH = bE.e0[3];
			this.aLa[aLH] = this.aLK[aLH], this.aLb[aLH] = bC.hB(bE.e0[1]), this.aLc[aLH] = 0, this.aLd[aLH] = bE.e0[2], bD.aKy.aMD(this.a0g[aLH] >> 3, bE.e0[1], bE.e0[2])
		}, this.ha = function() {
			bD.aKy.ha(),
				function(v2) {
					var a0, aMM, aMN, aMO, aMP, aMF, aMT, aMU, f6, f5, aLa = v2.aLa,
						aLb = v2.aLb,
						aLK = v2.aLK,
						a0h = v2.a0h,
						aLe = v2.aLe,
						aLc = v2.aLc,
						aLY = v2.aLY,
						ep = aX.ep,
						a0g = v2.a0g,
						v2 = v2.nm,
						aM3 = bI.eS << 4;
					for (a0 = v2 - 1; 0 <= a0; a0--) aMN = aLK[a0], aMM = aLb[a0], aMN !== aMM && (aMF = aLa[a0], aMT = aMM % aM3 - (aMP = aMF % aM3), aMU = ~~((aMM + .5) / aM3) - (aMF = ~~((aMF + .5) / aM3)), f6 = ~~Math.sqrt(aMT * aMT + aMU * aMU +
						.5), f5 = 15e4 + 25e3 * bB.log10(a0h[a0]), f5 += 5e4 * !ep[a0g[a0] >> 3], aLe[a0] && (f5 = bB.el(f5, 5)), 65535 <= (f5 = aLc[a0] + Math.max(~~((f5 + .5) / f6), 1)) ? aLK[a0] = aMO = aMM : (aLc[a0] = f5, aLK[a0] = aMO =
						aMP + bB.el(f5 * aMT, 65536) + aM3 * (aMF + bB.el(f5 * aMU, 65536))), aLY[a0] = bD.hE.aMW(aLY[a0], aMN, aMO))
				}(this),
				function(v2) {
					if (bT.eq() % 2 == 1) {
						var a0, jc, jZ, i4, ik, aMX, tW, aMY, pb, kp, kq, aMF, aMZ, gU, aMb, rs, ex = v2.nm,
							aLK = v2.aLK,
							a0g = v2.a0g,
							a0h = v2.a0h,
							aLf = v2.aLf,
							aLe = v2.aLe,
							hE = bD.hE.hE,
							aMd = hE.length,
							aMe = bD.hE.aMe,
							aM3 = bI.eS << 4,
							aMf = a2.hl,
							aJH = bU.il,
							f5 = (ex - 1) * (bB.el(bT.eq(), 2) % 2);
						for (a0 = 0; a0 < ex; a0++)
							for (jc = Math.abs(a0 - f5), aMF = aLK[jc], jZ = bC.hD(aMF), pb = a0g[jc] >> 3, kp = aMF % aM3, kq = ~~((aMF + .5) / aM3), aMb = a0h[jc], i4 = 0; i4 < 9; i4++)
								if (!((aMX = jZ + aMe[i4]) < 0 || aMd <= aMX))
									for (aMY = hE[aMX], tW = aMY.length, ik = 0; ik < tW; ik++) aMZ = aMY[ik], rs = a0g[aMZ] >> 3, pb == rs || aMf && aJH[pb] === aJH[rs] || (rs = aLK[aMZ], (gU = kp - rs % aM3) * gU + (gU = kq - ~~((rs + .5) / aM3)) *
										gU < 14400 && (rs = a0h[aMZ], gU = rs < aMb ? bB.el(rs + bB.el(aMb - rs, 10), 10) : bB.el(aMb, 10), gU = Math.max(1, gU), a0h[aMZ] = Math.max(rs - gU, 0), aLe[aMZ] = 4, aLf[aMZ] = Math.min(aLf[aMZ] + gU,
											4294967295)))
					}
				}(this),
				function(v2) {
					if (bT.eq() % 5 == 3) {
						var a0, hs, a0h = v2.a0h,
							ep = aX.ep,
							a0g = v2.a0g,
							aLf = v2.aLf,
							aLe = v2.aLe,
							ex = v2.nm;
						for (a0 = 0; a0 < ex; a0++) hs = a0h[a0], ep[a0g[a0] >> 3] ? a0h[a0] = Math.max(hs - Math.max(1, hs >> 7), 0) : (a0h[a0] = Math.max(hs - Math.max(1, hs >> 11), 0), aLe[a0] || (hs = aLf[a0]) && (hs = Math.max(hs >> 3, 1), a0h[
							a0] = Math.min(a0h[a0] + (hs << 1), 4294967295), aLf[a0] -= hs))
					}
				}(this);
			var a0, v2 = this,
				a0h = v2.a0h,
				aLe = v2.aLe;
			for (a0 = v2.nm - 1; 0 <= a0; a0--) aLe[a0] = aLe[a0] >> 1, 0 === a0h[a0] && bD.a9y.aLT(a0)
		}
}

function aKw() {
	this.aMg = 32, this.ff = 0, this.fg = 0, this.hF = 0, this.aMh = 0, this.aMi = 4, this.hE = null, this.aMe = new Int16Array(9), this.dD = function() {
		this.hF = 1 + bB.el(bI.eS - 1, this.aMg), this.aMh = 1 + bB.el(bI.eT - 1, this.aMg), this.hE = new Array(this.hF * this.aMh), b2.oc.x6(this.hE);
		var ff, fg, aMe = this.aMe,
			u = this.hF;
		for (ff = -1; ff <= 1; ff++)
			for (fg = -1; fg <= 1; fg++) aMe[3 * (1 + fg) + 1 + ff] = fg * u + ff
	}, this.o0 = function(aMk, a0) {
		return this.hE[a0].push(aMk), this.hE[a0].length - 1
	}, this.aMW = function(aMl, aMF, aMM) {
		var aMm, aMn, aMF = bC.hD(aMF),
			aMM = bC.hD(aMM);
		return aMF === aMM ? aMl : (aMm = this.hE[aMF].pop(), this.hE[aMF].length === aMl ? this.o0(aMm, aMM) : (aMn = this.hE[aMF][aMl], this.hE[aMF][aMl] = aMm, bD.k8.aLY[aMm] = aMl, this.o0(aMn, aMM)))
	}
}

function aL1() {
	function vt(aMM, aMo) {
		if (function(aMM, aLF) {
				var gT = bC.hC(aMM),
					aMr = Math.abs(bC.gV(aLF) - bC.gV(gT)),
					gT = Math.abs(bC.gX(aLF) - bC.gX(gT));
				return 0 !== Math.max(aMr, gT) && (function(aMF, aMM, aMr, aMs) {
					var aMu = bC.gt(aMF),
						aMF = bC.gw(aMF),
						aMw = bC.gt(aMM),
						aMM = bC.gw(aMM),
						aMw = aMw - aMu,
						aMM = aMM - aMF,
						aN0 = Math.abs(aMw),
						aN1 = Math.abs(aMM),
						aMw = 0 < aMw ? 1 : 3,
						aMM = 0 < aMM ? 2 : 0;
					aN1 < aN0 ? aN4(aMu, aMF, aMu + aN0, aMF + aN1, aMw, aMM, aMr) : aN4(aMF, aMu, aMF + aN1, aMu + aN0, aMM, aMw, aMs)
				}(aMM, bC.hB(aLF), aMr, gT), !0)
			}(aMM, aMo)) {
			if (0 === bE.du[0]) return !!aS.g3(aMo << 2);
			if (function(aLF) {
					if (aS.g3(aLF << 2)) return 1;
					return function(aLF) {
						var a0, gc, aME = bD.k8.aME,
							aN8 = bC,
							ex = bE.du[0],
							aN9 = 4 * aLF;
						for (a0 = ex - 1; 0 <= a0; a0--)
							if (gc = aME[a0], aN9 = aN8.hH(aN9, gc + 2 & 3), aS.g3(aN9)) return bE.du[0] = a0, bE.e0[1] = aN9 >> 2, bE.e0[2] = 1 + gc, 1;
						return
					}(aLF)
				}(aMo)) {
				var a0, aMo = bC.hC(aMM),
					rk = a5X,
					aME = bD.k8.aME,
					ex = bE.du[0] - 1,
					aN9 = 4 * aMo,
					gQ = bC.gQ;
				for (a0 = 0; a0 < ex; a0++)
					if (aN9 += gQ[aME[a0]], 0 !== rk[aN9 + 3] || 2 !== rk[aN9 + 2]) return !!void 0;
				return !!1
			}
		}
		return !1
	}

	function aN4(aMu, aMv, aMw, aMx, aN2, aN3, aMr) {
		for (var fg, aME = bD.k8.aME, f5 = 0, aN5 = 0, iE = aMx - aMv, u = aMw - aMu, aN6 = aMu % 16, a0 = 1; a0 <= aMr; a0++) aME[f5++] = aN2, aME[f5] = aN3, f5 += (fg = (iE * (aN6 + (a0 << 4)) + .5) / u >> 4) - aN5, aN5 = fg;
		bE.e4(bE.du, f5)
	}
	this.jV = function(player, aMo) {
		var gc, gT, gS = bC.ge(player, aMo);
		return gS !== aMo && (gc = bC.gR(gS, aMo), gT = bC.hG(gS, gc), !(!aS.g3(gT << 2) && (gc = bC.gb(gS, aMo, gc), gT = bC.hG(gS, gc), aS.rt(gT << 2) || !aS.g3(gT << 2)) || (bE.e0[0] = gT, bE.e0[1] = aMo, bE.e0[2] = 0, !vt(bC.hB(gT), aMo)) ||
			0 !== bE.e0[2] && bC.gm(player, bE.e0[1] + bC.gP[bE.e0[2] - 1] << 2)))
	}, this.o2 = function(aMo) {
		var aMF = bD.k8.aLK[bE.e0[3]];
		return bE.e0[1] = aMo, bE.e0[2] = 0, vt(aMF, aMo)
	}
}

function aKx() {
	var tC = 32,
		tB = new Array(2);

	function rZ(ik) {
		var ff, fg, fu, gu, gr, gF = tC,
			xP = b2.kt.rZ(gF, gF),
			gM = b2.kt.getContext(xP, !0),
			gI = b2.kt.getImageData(gM, gF, gF),
			rk = gI.data,
			jZ = (gF >> 1) - .5,
			ja = Math.sqrt(jZ * jZ);
		for (rk.fill(255), fg = 0; fg < gF; fg++)
			for (ff = 0; ff < gF; ff++) gr = ff - jZ, gu = fg - jZ, fu = 4 * (fg * gF + ff), gr = 714 * (ja - Math.sqrt(gr * gr + gu * gu)) / ja, rk[2 + fu] = ik, rk[3 + fu] = 255 < gr ? 0 : gr;
		return gM.putImageData(gI, 0, 0), xP
	}
	this.zZ = -1, this.dD = function() {
		this.zZ = -1, tB[0] || (tB[0] = rZ(255), tB[1] = rZ(0))
	}, this.aNB = function(gM, fw, ff, fg, gO, a0) {
		b2.en.fm(a2.es) && (gM.setTransform(fw *= 4 / 3 * .625, 0, 0, fw, ff - (gO *= 4 / 3), fg - gO), gM.drawImage(tB[+(bD.k8.aLJ[a0] === this.zZ)], 0, 0))
	}
}

function cE() {
	this.a29 = function() {
		var aNE;
		return !(iq < 3 || aX.ep[jw[0]] >= a2.iV >> 1) && (a2.hl ? (aNE = aV.aBC(), !(2 * aV.aBD(bV.ju()) >= aNE)) : function() {
			var aNE = aV.aBC();
			if (2 * aX.et[jw[0]] >= aNE) return !1;
			return !0
		}())
	}
}

function d5() {
	this.size = 501, this.vP = new Uint32Array(this.size), this.xz = new Uint32Array(this.size), this.a4z = new Uint16Array(this.size), this.aHL = 0, this.aNG = 1, this.ik = 0, this.max = [0, 0, 0], this.ev = 0, this.aNH = null, this.dE =
function() {
		this.aNH = [L(274), L(275), L(276), L(277), L(278), L(279), L(280), L(281), L(282), L(283), L(284), L(285), L(286), L(287), L(288), L(289), L(290), L(291)]
	}, this.dD = function() {
		this.aHL = 0, this.aNG = 1, this.ik = 0, this.aNI(), this.aNJ()
	}, this.nw = function(player, h5) {
		player === a2.es && (this.ev[0] += h5, this.ev[1]++, this.ev[12] += bE.dw[1], this.ev[13] += bE.dw[0])
	}, this.nN = function(player, mz) {
		donationsTracker.logDonation(player, mz, bE.dw[0]);
		player === a2.es && (aC.nN(bE.dw[0], bE.dw[1], mz), this.ev[12] += bE.dw[1], this.ev[16] += bE.dw[0]), mz === a2.es && (aC.a0w(bE.dw[0], player), this.ev[10] += bE.dw[0])
	}, this.ha = function() {
		0 < this.ik-- || this.aNK()
	}, this.aNK = function() {
		0 !== aX.kW[a2.es] && (this.vP[this.aHL] = aX.ep[a2.es], this.xz[this.aHL] = aX.et[a2.es], this.a4z[this.aHL] = aV.a50(a2.es), this.aNL(this.aHL), this.aHL++, this.aHL === this.size && this.aNM(), this.ik = this.aNG - 1, bS.kH())
	}, this.aNM = function() {
		this.aNI(), this.aNL(0), this.aHL = 1 + bB.el(this.size, 2);
		for (var a0 = 1; a0 < this.aHL; a0++) this.vP[a0] = this.vP[2 * a0], this.xz[a0] = this.xz[2 * a0], this.a4z[a0] = this.a4z[2 * a0], this.aNL(a0);
		this.aNG *= 2
	}, this.aNI = function() {
		this.max[0] = this.max[1] = this.max[2] = 0
	}, this.aNJ = function() {
		this.ev = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	}, this.aNL = function(a0) {
		this.max[0] = this.vP[a0] > this.max[0] ? this.vP[a0] : this.max[0], this.max[1] = this.xz[a0] > this.max[1] ? this.xz[a0] : this.max[1], this.max[2] = this.a4z[a0] > this.max[2] ? this.a4z[a0] : this.max[2]
	}
}

function d6() {
	this.u = 0, this.iE = 0, this.pZ = 0, this.pa = 0, this.aNN = 0, this.aNO = 0, this.a2M = 0, this.a8X = 0, this.a8I = 0, this.aNP = 0, this.aNQ = 0, this.aNR = 0, this.a1l = 0, this.ke = 0, this.a4g = null, this.t7 = !1, this.aNS = -1, this
		.aNT = !1, this.aNU = [0, 0], this.dE = function() {
			this.a4g = [L(292), L(293), L(86), L(294)]
		}, this.dD = function() {
			this.t7 = !1, this.aNS = -1, this.aNT = !1, this.resize()
		}, this.resize = function() {
			this.u = an.u < 1.369 * an.iE ? an.u : 1.369 * an.iE;
			var f6 = m.n.tX() && an.u < an.iE ? 1 : m.n.tX() ? .8 : an.u < an.iE ? .65 : .59;
			this.u = Math.floor(f6 * this.u), this.u -= m.n.tX() && an.u < an.iE ? 2 * bQ.gap + 2 : 0, this.iE = Math.floor(this.u / 1.369), this.a1l = Math.floor(this.iE / 150), this.a1l = Math.max(this.a1l, 1.5), this.pZ = Math.floor(1 + .02 * this
				.u), this.pa = Math.floor(1 + .04 * this.u), this.a2M = this.pa, this.a8X = Math.floor(1 + .075 * this.u), this.aNP = Math.floor(1 + .1125 * this.u), this.aNQ = Math.floor(this.u * (m.n.tX() ? .03 : .029)), this.aNQ = Math.max(
				this.aNQ, 4), this.aNR = Math.floor(.035 * this.u), this.aNR = Math.max(this.aNR, 4), this.a8I = this.iE - 2 * this.a2M - this.a8X - this.aNP, this.t7 && this.aNV()
		}, this.fn = function(jl, jm) {
			var sD, sC;
			return !!this.t7 && (sC = jl, sD = jm, jl -= bB.el(an.u - this.u, 2), jm -= bB.el(an.iE - this.iE, 2), jl < 0 || jm < 0 || jl >= this.u || jm >= this.iE || jl >= this.u - this.aNP && jm < this.aNP ? 1 < aB.fn(sC, sD) || this.pn() : jm <
				this.aNP || (jm < this.iE - this.a8X ? (this.aNT = !0, this.aNS = (jl - 2 * this.pZ - this.aNN) / this.aNO, 3 !== this.ke && (bT.dK = !0)) : (sC = (sC = Math.floor(jl / (this.u / this.a4g.length))) < 0 ? 0 : sC >= this.a4g
					.length ? this.a4g.length - 1 : sC) !== this.ke && (this.ke = sC, this.aNV(), bT.dK = !0)), !0)
		}, this.wi = function() {
			var aNW = Math.floor((this.aNU[0] + h6) / h7),
				aNX = Math.floor((this.aNU[1] + h8) / h7);
			aNW < 1 || aNX < 1 || aNW >= bI.eS - 1 || aNX >= bI.eT - 1 || console.log(aNW + " " + aNX)
		}, this.w9 = function(jl, jm) {
			return this.aNU[0] = jl, this.aNU[1] = jm, !(!this.t7 || !this.aNT || (jl -= bB.el(an.u - this.u, 2), jm = this.aNS, this.aNS = (jl - 2 * this.pZ - this.aNN) / this.aNO, (0 <= this.aNS && this.aNS <= 1 || 0 <= jm && jm <= 1) && (bT.dK = !
				0), 0))
		}, this.wZ = function() {
			this.aNT && (this.aNT = !1)
		}, this.wm = function() {
			this.t7 ? this.pn() : this.show()
		}, this.show = function() {
			bR.aHL < 2 || (this.t7 = !0, this.aNV())
		}, this.pn = function() {
			this.t7 = !1, this.aNS = -1, bT.dK = !0
		}, this.aNV = function() {
			this.ke < 2 ? this.aNN = aF.measureText(b2.l1.l2(bR.max[this.ke]), b2.kt.ky(0, this.aNQ)) : 2 === this.ke && (this.aNN = aF.measureText(b2.l1.yS(6, 2), b2.kt.ky(0, this.aNQ))), this.aNO = this.u - 2 * this.pZ - this.aNN - this.pa
		}, this.kH = function() {
			this.t7 && this.aNV()
		}, this.kk = function() {
			this.t7 && this.a2d()
		}, this.a2d = function() {
			var ff = bB.el(an.u - this.u, 2),
				fg = bB.el(an.iE - this.iE, 2);
			ku.setTransform(1, 0, 0, 1, ff, fg), ku.fillStyle = p.lr, ku.fillRect(0, this.aNP, this.u, this.iE - this.aNP), this.aNY(), this.aGl(), ku.strokeRect(0, 0, this.u, this.iE), b2.kt.textAlign(ku, 2), ku.font = b2.kt.ky(0, this.aNQ), 0 ===
				this.ke ? this.aNZ(bR.vP, ff, fg) : 1 === this.ke ? this.aNZ(bR.xz, ff, fg) : 2 === this.ke ? this.aNa(ff, fg) : 3 === this.ke && (this.aNb(ff, fg), this.aNc(ff, fg)), aB.zz(Math.floor(ff + this.u - .725 * this.aNP), Math.floor(fg +
					.275 * this.aNP), Math.floor(.45 * this.aNP)), ku.setTransform(1, 0, 0, 1, 0, 0)
		}, this.aNY = function() {
			var a0, dp;
			for (ku.lineWidth = this.a1l, b2.kt.textBaseline(ku, 1), b2.kt.textAlign(ku, 1), ku.strokeStyle = p.lu, ku.font = b2.kt.ky(1, this.aNR), dp = this.u / this.a4g.length, ku.fillStyle = p.mD, ku.fillRect(this.ke * dp, this.iE - this.a8X, dp,
					this.a8X), ku.fillStyle = p.lu, ku.fillRect(0, this.iE - this.a8X - .5 * this.a1l, this.u, this.a1l), a0 = 1; a0 <= 3; a0++) ku.fillRect(a0 * dp, this.iE - this.a8X, this.a1l, this.a8X);
			for (a0 = this.a4g.length - 1; 0 <= a0; a0--) ku.fillText(this.a4g[a0], (a0 + .5) * dp, this.iE - .46 * this.a8X)
		}, this.aGl = function() {
			ku.fillStyle = p.mW, ku.fillRect(0, 0, this.u, this.aNP), ku.fillStyle = p.lu, ku.fillRect(0, this.aNP - .5 * this.a1l, this.u, this.a1l), ku.font = b2.kt.ky(1, .39 * this.aNP), ku.fillText(L(295), Math.floor(this.u / 2), Math.floor(.55 *
				this.aNP))
		}, this.aNZ = function(e5, ff, fg) {
			var jZ = bR.max[this.ke],
				x8 = (ku.setTransform(1, 0, 0, 1, ff + 2 * this.pZ + this.aNN, fg + this.a2M + this.aNP), ku.lineWidth = 2, this.a8I / Math.sqrt(jZ));
			ku.beginPath(), ku.moveTo(this.aNO, this.a8I - x8 * Math.sqrt(e5[bR.aHL - 1]));
			for (var a0 = bR.aHL - 2; 0 <= a0; a0--) ku.lineTo(a0 * this.aNO / (bR.aHL - 1), this.a8I - x8 * Math.sqrt(e5[a0]));
			ku.stroke();
			ff = this.zz(e5, x8, .5);
			ff < .95 && ku.fillText(b2.l1.l2(jZ), -this.pZ, 0), .05 < Math.abs(ff - .5) && ku.fillText(b2.l1.l2(Math.floor(jZ / 4)), -this.pZ, Math.floor(this.a8I / 2)), .05 < ff && ku.fillText("0", -this.pZ, this.a8I)
		}, this.aNa = function(ff, fg) {
			ku.setTransform(1, 0, 0, 1, ff + 2 * this.pZ + this.aNN, fg + this.a2M + this.aNP), ku.lineWidth = 2;
			var x8 = this.a8I / Math.max(bR.max[this.ke], 1);
			ku.beginPath(), ku.moveTo(this.aNO, this.a8I - x8 * bR.a4z[bR.aHL - 1]);
			for (var a0 = bR.aHL - 2; 0 <= a0; a0--) ku.lineTo(a0 * this.aNO / (bR.aHL - 1), this.a8I - x8 * bR.a4z[a0]);
			ku.stroke();
			ff = this.zz(bR.a4z, x8, 1), fg = bR.max[this.ke] / 100;
			ff < .95 && ku.fillText(b2.l1.yS(fg, 2), -this.pZ, 0), .05 < Math.abs(ff - .5) && ku.fillText(b2.l1.yS(fg / 2, 2), -this.pZ, Math.floor(this.a8I / 2)), .05 < ff && ku.fillText(b2.l1.yS(0, 2), -this.pZ, this.a8I)
		}, this.aNb = function(ff, fg) {
			ku.setTransform(1, 0, 0, 1, ff + .34 * this.u, fg + 2 * this.a2M + this.aNP), b2.kt.textAlign(ku, 2);
			for (var a4R = this.iE - 4 * this.a2M - this.a8X - this.aNP, a0 = 7; 0 <= a0; a0--) ku.fillText(bR.aNH[a0], 0, a0 * a4R / 7);
			ku.setTransform(1, 0, 0, 1, ff + .39 * this.u, fg + 2 * this.a2M + this.aNP), b2.kt.textAlign(ku, 0);
			ff = bR.ev[1];
			for (ku.fillText(b2.l1.yS(bR.ev[0] / (10 * (ff < 1 ? 1 : ff)), 1), 0, 0), a0 = 6; 1 <= a0; a0--) ku.fillText(bR.ev[a0].toString(), 0, a0 * a4R / 7);
			ku.fillText(b2.l1.yS(100 * (1 - aX.ep[a2.es] / bR.ev[7]), 0), 0, a4R)
		}, this.aNc = function(ff, fg) {
			ku.setTransform(1, 0, 0, 1, ff + .79 * this.u, fg + 2 * this.a2M + this.aNP), b2.kt.textAlign(ku, 2);
			var a0, a4R = this.iE - 4 * this.a2M - this.a8X - this.aNP;
			for (ku.fillStyle = p.m8, a0 = 2; 0 <= a0; a0--) ku.fillText(bR.aNH[a0 + 8], 0, a0 * a4R / 9);
			for (ku.fillStyle = p.m7, ku.fillText(bR.aNH[11], 0, 3 * a4R / 9), ku.fillStyle = p.mN, a0 = 8; 4 <= a0; a0--) ku.fillText(bR.aNH[a0 + 8], 0, a0 * a4R / 9);
			ku.fillStyle = p.mM, ku.fillText(bR.aNH[17], 0, 9 * a4R / 9), ku.fillStyle = p.m8;
			var a0e = b2.l1.l2(bR.ev[8] + bR.ev[9] + bR.ev[10] + bR.ev[11]),
				aFz = ku.measureText(a0e).width,
				ff = (ku.setTransform(1, 0, 0, 1, ff + .83 * this.u + aFz, fg + 2 * this.a2M + this.aNP), ku.fillText(b2.l1.l2(bR.ev[8]), 0, 0), ku.fillText(b2.l1.l2(bR.ev[9]), 0, a4R / 9), ku.fillText(b2.l1.l2(bR.ev[10]), 0, 2 * a4R / 9), ku
					.fillStyle = p.m7, ku.fillText(a0e, 0, 3 * a4R / 9), ku.fillStyle = p.mN, bR.ev[13] - aU.aAw(a2.es)),
				aFz = (ku.fillText(b2.l1.l2(bR.ev[12]), 0, 4 * a4R / 9), ku.fillText(b2.l1.l2(ff), 0, 5 * a4R / 9), ku.fillText(b2.l1.l2(bR.ev[14]), 0, 6 * a4R / 9), ku.fillText(b2.l1.l2(bR.ev[15]), 0, 7 * a4R / 9), ku.fillText(b2.l1.l2(bR.ev[16]),
					0, 8 * a4R / 9), bR.ev[12] + ff + bR.ev[14] + bR.ev[15] + bR.ev[16] + bR.ev[17]);
			ku.fillStyle = p.mM, ku.fillText(b2.l1.l2(aFz), 0, a4R), ku.fillStyle = p.lu
		}, this.zz = function(e5, x8, a3D) {
			var a0, d, e6;
			return this.aNS < 0 || 1 < this.aNS ? .25 : (a0 = this.aNS * (bR.aHL - 1), e6 = e5[d = Math.floor(a0)], e6 += (a0 - d) * (e5[d < bR.aHL - 1 ? d + 1 : d] - e6), ku.strokeStyle = p.lx, .04 < this.aNS && this.aNf(0, this.a8I - x8 * Math.pow(
					e6, a3D), a0 * this.aNO / (bR.aHL - 1), this.a8I - x8 * Math.pow(e6, a3D)), .04 < e6 / bR.max[this.ke] && this.aNf(a0 * this.aNO / (bR.aHL - 1), this.a8I, a0 * this.aNO / (bR.aHL - 1), this.a8I - x8 * Math.pow(e6, a3D)), ku
				.fillStyle = p.mP, ku.beginPath(), ku.arc(a0 * this.aNO / (bR.aHL - 1), this.a8I - x8 * Math.pow(e6, a3D), Math.max(2, .014 * this.iE), 0, 2 * Math.PI), ku.fill(), e5 = this.aNS * bT.a51, e5 = 0 === aX.kW[a2.es] ? Math.floor(e5 *
					aM.a58) : Math.floor(e5 * bT.eq()), ku.fillStyle = p.lu, ku.fillText(1 === a3D ? b2.l1.yS(e6 / 100, 2) : b2.l1.l2(Math.floor(e6)), -this.pZ, this.a8I - x8 * Math.pow(e6, a3D)), b2.kt.textAlign(ku, 1), ku.fillText(aL.a3n(e5),
					a0 * this.aNO / (bR.aHL - 1), this.a8I + this.aNQ - (m.n.tX() ? 2 : 0) - this.a1l), b2.kt.textAlign(ku, 2), x8 * Math.pow(e6, a3D) / this.a8I)
		}, this.aNf = function(kp, kq, kr, ks) {
			ku.beginPath(), ku.moveTo(kp, kq), ku.lineTo(kr, ks), ku.stroke()
		}
}

function be() {
	this.aNg = "https://", this.aNh = this.aNg + "territorial.io/", this.aHM = this.aNh + "changelog", this.aHQ = this.aNh + "terms", this.aNi = this.aNh + "cookie_policy", this.aH2 = this.aNh + "privacy", this.aHP = this.aNh + "tutorial", this.aHO =
		this.aNh + "players", this.aHN = this.aNh + "clans", this.vR = this.aNh + "clan-results", this.a63 = this.aNg + "play.google.com/store/apps/details?id=territorial.io", this.vj = this.aNg + "apps.apple.com/app/id1581110913", this.a64 = this
		.aNg + "www.youtube.com/watch?v=toZTQ8aRdFc", this.a65 = this.aNg + "discord.gg/pthqvpTXmh", this.a66 = this.aNg + "www.instagram.com/davidtschacher/", this.tQ =
		"🇦🇫🇦🇽🇦🇱🇩🇿🇦🇸🇦🇩🇦🇴🇦🇮🇦🇶🇦🇬🇦🇷🇦🇲🇦🇼🇦🇺🇦🇹🇦🇿🇧🇸🇧🇭🇧🇩🇧🇧🇧🇾🇧🇪🇧🇿🇧🇯🇧🇲🇧🇹🇧🇴🇧🇦🇧🇼🇧🇷🇮🇴🇻🇬🇧🇳🇧🇬🇧🇫🇧🇮🇨🇻🇰🇭🇨🇲🇨🇦🇮🇨🇰🇾🇨🇫🇹🇩🇨🇱🇨🇳🇨🇽🇨🇨🇨🇴🇰🇲🇨🇬🇨🇩🇨🇷🇭🇷🇨🇺🇨🇼🇨🇾🇨🇿🇩🇰🇩🇯🇩🇲🇩🇴🇪🇨🇪🇬🇸🇻🇬🇶🇪🇷🇪🇪🇸🇿🇪🇹🇪🇺🇫🇰🇫🇴🇫🇯🇫🇮🇫🇷🇬🇫🇵🇫🇹🇫🇬🇦🇬🇲🇬🇪🇩🇪🇬🇭🇬🇮🇬🇷🇬🇱🇬🇩🇬🇵🇬🇺🇬🇹🇬🇬🇬🇳🇬🇼🇬🇾🇭🇹🇭🇳🇭🇰🇭🇺🇮🇸🇮🇳🇮🇩🇮🇷🇮🇶🇮🇪🇮🇲🇮🇱🇮🇹🇨🇮🇯🇲🇯🇵🇯🇪🇯🇴🇰🇿🇰🇪🇰🇮🇽🇰🇰🇼🇰🇬🇱🇦🇱🇻🇱🇧🇱🇸🇱🇷🇱🇾🇱🇮🇱🇹🇱🇺🇲🇴🇲🇰🇲🇬🇲🇼🇲🇾🇲🇻🇲🇱🇲🇹🇲🇭🇲🇶🇲🇷🇲🇺🇾🇹🇲🇽🇫🇲🇲🇩🇲🇨🇲🇳🇲🇪🇲🇸🇲🇦🇲🇿🇲🇲🇳🇦🇳🇷🇳🇵🇳🇱🇳🇨🇳🇿🇳🇮🇳🇪🇳🇬🇳🇺🇳🇫🇰🇵🇲🇵🇳🇴🇴🇲🇵🇰🇵🇼🇵🇸🇵🇦🇵🇬🇵🇾🇵🇪🇵🇭🇵🇱🇵🇹🇵🇷🇶🇦🇷🇴🇷🇺🇷🇼🇼🇸🇸🇲🇸🇹🇸🇦🇸🇳🇷🇸🇸🇨🇸🇱🇸🇬🇸🇽🇸🇰🇸🇮🇸🇧🇸🇴🇿🇦🇬🇸🇰🇷🇸🇸🇪🇸🇱🇰🇧🇱🇸🇭🇰🇳🇱🇨🇲🇫🇵🇲🇻🇨🇸🇩🇸🇷🇸🇪🇸🇾🇨🇭🇹🇼🇹🇯🇹🇿🇹🇭🇹🇱🇹🇬🇹🇰🇹🇴🇹🇹🇹🇳🇹🇷🇹🇲🇹🇨🇹🇻🇺🇬🇺🇦🇦🇪🇬🇧🇺🇳🇺🇸🇻🇮🇺🇾🇺🇿🇻🇺🇻🇦🇻🇪🇻🇳🇼🇫🇪🇭🇾🇪🇿🇲🇿🇼"
}

function cp() {
	this.k8 = new aNj, this.sk = new aNk, this.dD = function() {
		this.k8.dD()
	}, this.ha = function() {
		0 !== this.k8.a16 && this.k8.a16--
	}
}

function aNk() {
	this.kk = function() {
		if (0 !== bF.k8.a16 && (ku.globalAlpha = Math.min(bF.k8.a16 / 580, 1), ku.drawImage(bF.k8.aNn, 1 + aH.kv(), 1 + aH.kw()), ku.globalAlpha = 1, a2.fz)) {
			for (var kp = h6 / h7, kq = h8 / h7, kr = (an.u + h6) / h7, ks = (an.iE + h8) / h7, f5 = bF.k8.aNo * h7, aNp = bF.k8.aNp, a0 = a2.ip - 1; 0 <= a0; a0--) ! function(a0, f5, kp, kq, kr, ks, aNp) {
				var highlight = settings.highlightClanSpawns && clanFilter.inOwnClan[a0];
				if (highlight) f5 *= 2;
				0 === aX.kW[a0] || 0 === aX.ep[a0] || (kr = an.u * ((aX.hJ[a0] + aX.hK[a0] + 1) / 2 - kp) / (kr - kp) - .5 * f5, kp = an.iE * ((aX.hL[a0] + aX.hM[a0] + 1) / 2 - kq) / (ks - kq) - .5 * f5, kr > an.u) || kp > an.iE || kr < -
					f5 || kp < -f5 || (ku.setTransform(highlight ? h7 * 2 : h7, 0, 0, highlight ? h7 * 2 : h7, kr, kp), ku.drawImage(aNp[a2.hl ? bU.il[a0] : 1], 0, 0))
			}(a0, f5, kp, kq, kr, ks, aNp);
			ku.setTransform(h7, 0, 0, h7, 0, 0)
		}
	}
}

function aNj() {
	this.aNo = 28, this.a16 = 0, this.aNn = null;
	var aNr = this.aNp = null;

	function aNu(gF, aNv) {
		var ff, fg, fu, gr, xP = b2.kt.rZ(gF, gF),
			gM = b2.kt.getContext(xP, !0),
			gI = b2.kt.getImageData(gM, gF, gF),
			rk = gI.data,
			jZ = (gF >> 1) - .5,
			aNw = .5 + jZ;
		for (aNw *= aNw, fg = 0; fg < gF; fg++)
			for (ff = 0; ff < gF; ff++) gr = (gr = ff - jZ) * gr + (gr = fg - jZ) * gr, rk[fu = 4 * (fg * gF + ff)] = aNv[0], rk[1 + fu] = aNv[1], rk[2 + fu] = aNv[2], rk[3 + fu] = (aNw - gr) * aNv[3] / aNw;
		return gM.putImageData(gI, 0, 0), xP
	}

	function aNB(a0, gM, xP, gF) {
		var ff, y, highlight = settings.highlightClanSpawns && clanFilter.inOwnClan[a0];
		if (highlight) gF *= 2;
		0 !== aX.kW[a0] && 0 !== aX.ep[a0] && (ff = aX.hJ[a0] + aX.hK[a0] + 1 - gF - 2 >> 1, y = aX.hL[a0] + aX.hM[a0] + 1 - gF - 2 >> 1,
			highlight ? gM.drawImage(xP[a2.hl ? bU.il[a0] : a0 < a2.ip ? 1 : 0], ff, y, gF, gF) :
			gM.drawImage(xP[a2.hl ? bU.il[a0] : a0 < a2.ip ? 1 : 0], ff, y))
	}
	this.dD = function() {
		var v2;
		this.a16 = 700,
			function(v2) {
				var gF = v2.aNo;
				if (v2.aNp = [], aNr = [], a2.hl)
					for (var a0 = 0; a0 <= a2.yn; a0++) v2.aNp.push(aNu(gF, bU.aM7[bU.up[a0]])), aNr.push(aNu(gF >> 1, bU.aM7[bU.up[a0]]));
				else v2.aNp.push(aNu(gF, bU.aM7[0])), v2.aNp.push(aNu(gF, bU.aM7[4])), aNr.push(aNu(gF >> 1, bU.aM7[0]))
			}(this),
			function(v2, aNx) {
				var a0, aNn = v2.aNn,
					gM = b2.kt.getContext(aNn, !0),
					ex = a2.f1,
					gF = v2.aNo >> 1;
				gM.imageSmoothingEnabled = !1, gM.setTransform(1, 0, 0, 1, 0, 0), aNx && gM.clearRect(0, 0, aNn.width, aNn.height);
				for (a0 = a2.ip; a0 < ex; a0++) aNB(a0, gM, aNr, gF)
			}(this, null !== (v2 = this).aNn && v2.aNn.width === bI.eS - 2 && v2.aNn.height === bI.eT - 2 || (v2.aNn = b2.kt.rZ(bI.eS - 2, bI.eT - 2), !1)), a2.fz || this.yi()
	}, this.aM6 = aNu, this.yi = function() {
		for (var ex = a2.ip, gF = this.aNo, aNp = this.aNp, gM = b2.kt.getContext(this.aNn, !0), a0 = 0; a0 < ex; a0++) aNB(a0, gM, aNp, gF)
	}
}

function cq() {
	function aNy(player) {
		a2.fz ? (a9u(player), aCe(), a2.jD && a2.nq.ha()) : au.aCc(player)
	}
	this.nG = function(player) {
		return !!aB.zy(player) && (aC.ug(player, player === a2.es ? 21 : 22), aNy(player), !0)
	}, this.nn = function(player) {
		1 === a2.uU && 0 !== aX.kW[player] && 2 !== aX.xu[player] && aNy(player), a2.uX--, a2.uW--, aC.ug(player, 4), b2.en.fl(2) && aL.kG(!0)
	}
}

function d0() {
	this.a7n = ["rgba(130,130,130,0.88)", "rgba(130,12,12,0.88)", "rgba(12,130,12,0.88)", "rgba(12,12,130,0.88)", "rgba(130,130,12,0.88)", "rgba(130,12,130,0.88)", "rgba(12,130,130,0.88)", "rgba(130,130,130,0.88)", "rgba(0,0,0,0.88)"], this.a4P = [p
		.lu, "rgb(255,120,120)", "rgb(0,230,0)", "rgb(150,150,255)", "rgb(240,240,25)", "rgb(255,70,255)", "rgb(25,240,240)", p.lu, "rgb(170,170,170)"
	], this.aNz = [p.lu, "rgb(255,0,0)", "rgb(0,255,0)", "rgb(0,0,255)", "rgb(255,255,0)", "rgb(255,0,255)", "rgb(0,255,255)", p.lu, p.kz], this.aO0 = [p.kz, p.lu, p.lu, p.lu, p.kz, p.kz, p.kz, p.kz, p.lu];
	var aO1 = ["255,255,255", "0,0,0", "255,4,4", "200,4,4", "4,255,4", "4,180,4", "255,195,195", "90,3,3", "200,255,200", "3,84,3"],
		aO2 = (this.aCA = ["rgba(" + aO1[0] + ",", "rgba(" + aO1[1] + ",", "rgba(" + aO1[2] + ",", "rgba(" + aO1[3] + ",", "rgba(" + aO1[4] + ",", "rgba(" + aO1[5] + ",", "rgba(" + aO1[6] + ",", "rgba(" + aO1[7] + ",", "rgba(" + aO1[8] + ",",
			"rgba(" + aO1[9] + ","
		], this.aCB = ["rgb(" + aO1[0] + ")", "rgb(" + aO1[1] + ")", "rgb(" + aO1[2] + ")", "rgb(" + aO1[3] + ")", "rgb(" + aO1[4] + ")", "rgb(" + aO1[5] + ")", "rgb(" + aO1[6] + ")", "rgb(" + aO1[7] + ")", "rgb(" + aO1[8] + ")", "rgb(" + aO1[
			9] + ")"
		], this.ur = null, this.aM7 = [
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
	this.up = [0, 1, 2, 3, 4, 5, 6, 7, 8], this.il = new Uint8Array(a2.f1), this.vH = null, this.aO3 = null, this.dE = function() {
		this.ur = [L(296), L(297), L(298), L(299), L(300), L(301), L(302), L(296), L(303)]
	}, this.dD = function(su) {
		this.il.fill(0), this.aO4(), a2.hl && (ay.j7 && ay.j8.aAd ? this.a9D() : 9 === a2.jB ? this.aO5() : this.ha(su))
	}, this.a9D = function() {
		var a0, ex = a2.sE;
		for (this.up = [0, 1, 2, 3, 4, 5, 6, 7, 8], a0 = 0; a0 < ex; a0++) this.il[a0] = ay.j8.aAd[a0]
	}, this.aO4 = function() {
		for (var a0 = this.up.length - 1; 0 <= a0; a0--) this.up[a0] = a0;
		this.vH = [], this.aO3 = []
	}, this.aO5 = function() {
		for (var a0 = a2.ip + ap.aCT - 1; 0 <= a0; a0--) this.il[a0] = 1;
		for (a0 = a2.ip + ap.aCT; a0 < a2.f1; a0++) this.il[a0] = 2;
		this.up[1] = 7, this.up[2] = 8
	}, this.ha = function(su) {
		var gY = new Uint8Array(a2.ip),
			gZ = new Uint8Array(a2.ip),
			aO6 = new Uint16Array(8),
			aO7 = new Uint16Array(this.up.length);
		this.aO8(su, gY, gZ, aO6), this.a9B(aO6), a2.jD || this.aO9(aO7, gY, gZ), this.aOA(gY, gZ, aO7), a2.jD ? this.aOB() : this.aOC()
	}, this.aO8 = function(su, gY, gZ, aOD) {
		for (var i4, d, aOE, ex = this.up.length - 1, e5 = new Uint16Array(ex), a0 = a2.ip - 1; 0 <= a0; a0--) {
			for (i4 = ex; 1 <= i4; i4--) e5[i4 - 1] = Math.abs(4 * su[a0].a8T[0] - aO2[i4][0]) + Math.abs(4 * su[a0].a8T[1] - aO2[i4][1]) + Math.abs(4 * su[a0].a8T[2] - aO2[i4][2]);
			for (aOE = 768, i4 = ex - 1; 0 <= i4; i4--) e5[d = (i4 + a0) % ex] < aOE && (aOE = e5[d], gY[a0] = d);
			for (aOD[gY[a0]] += 4, aOE = 768, i4 = ex - 1; 0 <= i4; i4--) e5[d = (i4 + a0) % ex] < aOE && d !== gY[a0] && (aOE = e5[d], gZ[a0] = d);
			aOD[gZ[a0]]++
		}
	}, this.a9B = function(aOD) {
		for (var i4, jb, ex = this.up.length - 1, a0 = ex; 0 <= a0; a0--) this.up[a0] = a0;
		for (a0 = ex - 1; 0 <= a0; a0--) aOD[a0]++;
		for (a0 = 1; a0 <= ex; a0++) {
			for (jb = 0, i4 = 1; i4 < ex; i4++) aOD[i4] > aOD[jb] && (jb = i4);
			aOD[jb] = 0, this.up[a0] = jb + 1
		}
	}, this.aO9 = function(aO7, gY, gZ) {
		var a0, i4, aIl, ik, f6, d, lY, po, aOF = this.up.length - 1,
			or = new Uint16Array(aOF),
			aOG = [],
			a2M = Math.max(a2.ip + 1 >> 1, 6);
		loop: for (a0 = 0; a0 < a2.ip; a0++)
			if (null !== (aIl = b2.l1.vL(aX.vM[a0]))) {
				for (i4 = this.vH.length - 1; 0 <= i4; i4--)
					if (aIl === this.vH[i4] && this.aO3[i4].length < a2M) {
						this.aO3[i4].push(a0);
						continue loop
					} this.vH.push(aIl), aOG.push(!1), this.aO3.push([a0])
			}
		for (i4 = this.vH.length - 1; 0 <= i4; i4--) {
			for (f6 = -1, ik = this.vH.length - 1; 0 <= ik; ik--) !aOG[ik] && (-1 === f6 || this.aO3[ik].length > this.aO3[f6].length) && (f6 = ik);
			for (ik = aOF - 1; 0 <= ik; ik--) or[ik] = 1;
			for (ik = this.aO3[f6].length - 1; 0 <= ik; ik--) or[gY[this.aO3[f6][ik]]] += 3, or[gZ[this.aO3[f6][ik]]]++;
			for (a0 = aOF - 1; 0 <= a0; a0--) {
				for (d = f6 % aOF, ik = aOF - 1; 0 <= ik; ik--) or[ik] > or[d] && (d = ik);
				for (lY = -1, ik = a2.yn; 0 < ik; ik--)
					if (this.up[ik] === d + 1) {
						lY = ik;
						break
					} if (or[d] = 0, -1 !== lY) {
					for (po = 0, ik = a2.yn; 0 < ik; ik--) aO7[lY] > aO7[ik] && po++;
					if (po !== a2.yn - 1) {
						for (ik = this.aO3[f6].length - 1; 0 <= ik; ik--) aO7[lY]++, this.il[this.aO3[f6][ik]] = lY;
						break
					}
				}
			}
			aOG[f6] = !0
		}
	}, this.aOA = function(gY, gZ, aO7) {
		for (var a0, gq, ex = this.up.length - 1, border = bB.el(a2.ip, a2.yn), aOH = (0 < a2.ip % a2.yn && border++, new Uint8Array(1 + ex)), i4 = ex; 1 <= i4; i4--) aOH[this.up[i4]] = i4;
		for (a0 = 0; a0 < a2.ip; a0++) gq = aOH[gY[a0] + 1], 0 === this.il[a0] && gq <= a2.yn && aO7[gq] < border && (aO7[gq]++, this.il[a0] = gq);
		for (a0 = 0; a0 < a2.ip; a0++) gq = aOH[gZ[a0] + 1], 0 === this.il[a0] && gq <= a2.yn && aO7[gq] < border && (aO7[gq]++, this.il[a0] = gq);
		for (i4 = a2.yn; 1 <= i4; i4--)
			for (a0 = a2.ip - 1; 0 <= a0 && !(aO7[i4] >= border); a0--) 0 === this.il[a0] && (aO7[i4]++, this.il[a0] = i4)
	}, this.aOB = function() {
		var a0, hy, aOD = new Uint16Array(a2.yn);
		for (aOD[a2.yn - 1] = a2.f1, a0 = a2.yn - 2; 0 <= a0; a0--) aOD[a0] = aQ.jF[a0].jL;
		for (aOD[0]--, hy = 0 === aOD[0] ? 1 : 0, a0 = a2.ip; a0 < a2.f1; a0++) this.il[a0] = hy + 1, aOD[hy]--, aOD[hy] <= 0 && hy++
	}, this.aOC = function() {
		for (var a0 = a2.ip; a0 < a2.f1; a0++) this.il[a0] = 1 + a0 % a2.yn
	}
}

function fO() {
	for (var ff, fg, a0 = eJ - 1; 0 <= a0; a0--) ff = bB.el(eL[a0], 4) % bI.eS, fg = bB.el(eL[a0], 4 * bI.eS), aX.hJ[eE] = aX.hJ[eE] > ff ? ff : aX.hJ[eE], aX.hL[eE] = aX.hL[eE] > fg ? fg : aX.hL[eE], aX.hK[eE] = aX.hK[eE] < ff ? ff : aX.hK[eE], aX
		.hM[eE] = aX.hM[eE] < fg ? fg : aX.hM[eE]
}

function eb() {
	var f6, f4, a0, ex = aX.ey[eE].length;
	loop: for (a0 = ex - 1; 0 <= a0; a0--) {
		for (f6 = 3; 0 <= f6; f6--)
			if (f4 = aX.ey[eE][a0] + eO[f6], aS.f9(f4) || aS.f7(f4) && aS.f8(f4) !== eE) {
				aS.hv(aX.ey[eE][a0], eE);
				continue loop
			} aX.ey[eE][a0] = aX.ey[eE][ex - 1], aX.ey[eE].pop(), ex--
	}
}

function ec() {
	var f6, f4, aOI, aOJ, ex = aX.fF[eE].length;
	loop: for (var a0 = ex - 1; 0 <= a0; a0--) {
		for (aOI = aOJ = !1, f6 = 3; 0 <= f6; f6--) {
			if (f4 = aX.fF[eE][a0] + eO[f6], aS.a9M(f4, eE)) continue loop;
			aOI = aOI || aS.g3(f4), aOJ = aOJ || aS.rt(f4)
		}
		aOI ? aX.fG[eE].push(aX.fF[eE][a0]) : aOJ ? aX.fJ[eE].push(aX.fF[eE][a0]) : aS.sX(aX.fF[eE][a0], eE), aX.fF[eE][a0] = aX.fF[eE][ex - 1], aX.fF[eE].pop(), ex--
	}
}

function fD() {
	aX.ep[eI] -= eJ
}

function fE(border) {
	for (var ex = border.length, a0 = ex - 1; 0 <= a0; a0--) aS.sf(eI, border[a0]) || (border[a0] = border[ex - 1], border.pop(), ex--)
}

function fH(border) {
	for (var ex = border.length, a0 = ex - 1; 0 <= a0; a0--) !aS.sf(eI, border[a0]) && aS.ez(border[a0]) && (border[a0] = border[ex - 1], border.pop(), ex--)
}

function fI(border) {
	for (var f6, f4, ex = border.length, a0 = ex - 1; 0 <= a0; a0--)
		for (f6 = 3; 0 <= f6; f6--)
			if (f4 = border[a0] + eO[f6], aS.a9M(f4, eI)) {
				aX.fF[eI].push(border[a0]), border[a0] = border[ex - 1], border.pop(), ex--;
				break
			}
}

function fK() {
	for (var f6, f4, a0 = eJ - 1; 0 <= a0; a0--)
		for (f6 = 3; 0 <= f6; f6--) f4 = eL[a0] + eO[f6], aS.a9N(eI, f4) && aS.a9O(f4) && (aX.fF[eI].push(f4), aS.f0(f4, eI))
}

function fL() {
	var ff, fg;
	loop: for (; aX.hL[eI] < aX.hM[eI];) {
		for (ff = aX.hK[eI]; ff >= aX.hJ[eI]; ff--)
			if (aS.sf(eI, 4 * (aX.hL[eI] * bI.eS + ff))) break loop;
		aX.hL[eI]++
	}
	loop: for (; aX.hL[eI] < aX.hM[eI];) {
		for (ff = aX.hK[eI]; ff >= aX.hJ[eI]; ff--)
			if (aS.sf(eI, 4 * (aX.hM[eI] * bI.eS + ff))) break loop;
		aX.hM[eI]--
	}
	loop: for (; aX.hJ[eI] < aX.hK[eI];) {
		for (fg = aX.hM[eI]; fg >= aX.hL[eI]; fg--)
			if (aS.sf(eI, 4 * (fg * bI.eS + aX.hJ[eI]))) break loop;
		aX.hJ[eI]++
	}
	loop: for (; aX.hJ[eI] < aX.hK[eI];) {
		for (fg = aX.hM[eI]; fg >= aX.hL[eI]; fg--)
			if (aS.sf(eI, 4 * (fg * bI.eS + aX.hK[eI]))) break loop;
		aX.hK[eI]--
	}
}

function gC(player, hr) {
	return 0 === bU.il[player] || bU.il[player] !== bU.il[hr]
}

function gA(player, hr) {
	for (var d, aOK = aU.eX(player), a0 = 0; a0 < aOK; a0++)
		if (0 === aU.eY(player, a0))
			if ((d = aU.ed(player, a0)) === a2.f1) {
				if (hr === a2.f1) return !1;
				if (g8(hr)) return !0
			} else if (b2.en.je(d))
		if (hr === a2.f1) {
			if (g8(d)) return !0
		} else if (gD(hr, d)) return !0;
	return !1
}

function g8(player) {
	for (var a0, f5, ex = aX.fF[player].length, f6 = 3; 0 <= f6; f6--)
		for (f5 = eO[f6], a0 = 0; a0 < ex; a0++)
			if (aS.f9(aX.fF[player][a0] + f5)) return !0;
	return !1
}

function a9r(player) {
	for (var a0, f5, ex = aX.fF[player].length, f6 = 3; 0 <= f6; f6--)
		for (f5 = eO[f6], a0 = 0; a0 < ex; a0++)
			if (aS.hu(aX.fF[player][a0]) && aS.f9(aX.fF[player][a0] + f5)) return !0;
	return !1
}

function gD(xw, xx) {
	var a0, dp, f6, f5, f4, aMG = aX.fF[xw].length,
		aMH = aX.fF[xx].length;
	for (aMH < aMG && (dp = xw, xw = xx, xx = dp, dp = aMG, aMG = aMH, 0), f6 = 3; 0 <= f6; f6--)
		for (f5 = eO[f6], a0 = 0; a0 < aMG; a0++)
			if (f4 = aX.fF[xw][a0] + f5, aS.f7(f4) && aS.f8(f4) === xx) return !0;
	return !1
}

function a9s(xw, xx) {
	for (var a0, f5, f4, aMG = aX.fF[xw].length, f6 = 3; 0 <= f6; f6--)
		for (f5 = eO[f6], a0 = 0; a0 < aMG; a0++)
			if (aS.hu(aX.fF[xw][a0]) && (f4 = aX.fF[xw][a0] + f5, aS.f7(f4)) && aS.f8(f4) === xx) return !0;
	return !1
}

function aOL() {
	this.ha = function() {
		aD.ha(), aO.ha(), an.ha(), aq.k8.ha(), am.a7I(), bT.dK && (bT.dK = !1, aP.kk())
	}
}

function aOM() {
	this.dn = bT.dn, this.ke = 0, this.aON = 0, this.a7D = 0, this.aOO = null, this.aOP = 7, this.a17 = 0, this.dD = function() {
		this.a7D = 0, this.aOO = [], this.ke = 0, this.aON = 0
	}, this.aIV = function(a1) {
		var a0;
		if (a2.fz) this.a52(a1);
		else if (this.aOO.push(a1), 2 === a2.uU) {
			for (a0 = 0; a0 < this.aOO.length; a0++) b0.ms.ha(this.aOO[a0]);
			this.aOO = []
		}
	}, this.a52 = function(a1) {
		b0.ms.ha(a1), b1.ha(), aL.a52(this.a7D), this.a7D === a2.yo ? (a2.nq.ha(), this.a7D = 0, this.ke = 0, this.aON = 0, this.dn = bT.dn) : (this.a7D++, aW.yh(), aW.kG(!0), bP.a5V())
	}, this.ha = function() {
		an.ha(), a2.fz ? (bT.dK = aL.a52(-1) || bT.dK, kI()) : (0 !== this.ke || bT.dn >= this.dn && (this.dn += bT.a51 * Math.floor(1 + (bT.dn - this.dn) / bT.a51), 2 === a2.uU ? k6() : this.aOQ(), this.ke++, 27 < bT.dn - this.a17)) && this
		.aOR(), kD(), bT.dK && (bT.dK = !1, si()), this.a17 = bT.dn
	}, this.aOR = function() {
		bT.dK = !0, kF(), this.ke = 0
	}, this.aOQ = function() {
		var qe, a0;
		if (this.aON !== 7 * this.a7D) k9(), bP.a5V();
		else {
			qe = !1;
			loop: for (; this.aOS() && (qe = !0, k9(), 2 !== a2.uU) && 0 < this.aOO.length;)
				for (a0 = this.aOP - 2; 0 <= a0; a0--)
					if (k9(), 2 === a2.uU) break loop;
			qe ? bP.a5V() : (k6(), bP.yk())
		}
	}, this.aOS = function() {
		return 0 < this.aOO.length && (this.a7D++, b0.ms.ha(this.aOO[0]), this.aOO.shift(), !0)
	}
}

function aOT() {
	var aOU, aOV, aOW, a7D, aOX, ke = 0,
		dn = bT.dn;

	function aOa() {
		! function() {
			if (!a2.fz) return;
			if (a2.jD) return;
			if (aOX % 7 != 0) aOX++;
			else if (a7D === a2.yo) {
				if (!aOd()) return;
				aL.a52(a7D), a2.nq.ha()
			} else {
				if (!aOd()) return;
				aOX++, a7D++, aW.yh(), aW.kG(!0)
			}
			return 1
		}() && aOd() && k9()
	}

	function aOb() {
		ke = 0, (a2.fz ? (bT.dK = aL.a52(a7D - (aOX % 7 == 0 ? 0 : 1) + aOX % 7 / 7) || bT.dK, kI) : aB.fk || !b3.z9 ? kI : (bT.dK = !0, kF))()
	}

	function aOd() {
		var a0, ex, aOe = b1.no.aJW,
			e6 = b1.no.aJX,
			e8 = b1.no.aJY,
			eA = b1.no.aJZ,
			aOf = b1.no.aJa,
			aOg = b1.no.aJb;
		if (!(aOU >= aOg.length)) {
			if (aOg = aOg[aOU], aOf[aOU]) {
				for (ex = aOV + aOg, a0 = aOV; a0 < ex; a0++) b0.ms.nb(aOe[a0], e6[a0], e8[a0], eA[a0]);
				aOV += aOg, aOU++
			} else ++aOW >= aOg && (aOU++, aOW = 0);
			return 1
		}
		aC.vr("Replay file smaller than expected."), b3.wn(!1), a2.uU = 2
	}
	this.aON = 0, this.dD = function() {
		aOX = a7D = aOW = aOV = aOU = 0
	}, this.ha = function() {
		var aMd;
		an.ha(), b3.a2Y() < 1.7 ? 0 === ke ? bT.dn >= dn && (aMd = bT.a51 / b3.a2Y(), dn += aMd * Math.floor(1 + (bT.dn - dn) / aMd), 2 === a2.uU || aB.fk || !b3.z9 ? k6() : (aOa(), bP.a5V()), ke++) : aOb() : function() {
			var aMd;
			if (bT.dn >= dn)
				if (2 === a2.uU || aB.fk || !b3.z9) k6(), dn = bT.dn;
				else {
					for (aMd = bT.a51 / b3.a2Y(), 16 < (bT.dn - dn) / aMd && (dn = bT.dn - 16 * aMd); bT.dn >= dn && 2 !== a2.uU;) dn += aMd, aOa();
					bP.a5V()
				} aOb()
		}(), kD(), bT.dK && (bT.dK = !1, si())
	}, this.ue = function() {
		aOU !== b1.no.aJb.length && aOU + 1 !== b1.no.aJb.length && aC.vr("Replay file larger than expected.")
	}
}

function aOh() {
	var ke = 0,
		dn = bT.dn;
	this.aON = 0, this.ha = function() {
		an.ha(), a2.fz ? kI() : 0 === ke ? bT.dn >= dn && (dn += bT.a51 * Math.floor(1 + (bT.dn - dn) / bT.a51), 2 === a2.uU || aB.fk ? k6() : (k9(), bP.a5V()), ke++) : ((aB.fk ? kI : (bT.dK = !0, kF))(), ke = 0), kD(), bT.dK && (bT.dK = !1,
		si())
	}
}

function d7() {
	this.ud = null, this.dK = !1, this.dn = 0, this.a51 = 56;
	var aOi = 0;

	function aOj() {
		bT.dn = aOi = performance.now(), bT.ud.ha(), window.requestAnimationFrame(aOj)
	}
	this.dD = function() {
		this.z7(), window.requestAnimationFrame(aOj), this.dn = performance.now()
	}, this.z0 = function() {
		a2.fj ? (this.ud = new aOT, this.ud.dD()) : a2.jD ? this.ud = new aOh : (this.ud = new aOM, this.ud.dD())
	}, this.z7 = function() {
		this.ud = new aOL, this.dK = !0
	}, this.ha = function() {
		this.ud.aON++
	}, this.eq = function() {
		return this.ud.aON
	}, this.aID = function() {
		var dp = performance.now();
		dp < aOi + 1e3 || (this.dn = dp, this.ud.ha())
	}
}

function ca() {
	var lF = 0,
		aOk = !0;

	function aOm(oD) {
		8 !== aP.vn() || 2 !== aX.xu[a2.es] && (0 !== aX.kW[a2.es] || a2.fz) || aC.a0l(oD)
	}
	this.ha = function() {
		var dp, a1A;
		bT.dn > lF && (lF = bT.dn + 2500, dp = new Date, a1A = dp.getUTCSeconds(), aOk ? a1A < 45 && (aOk = !1) : a1A < 45 || (aOk = !0, (a1A = dp.getUTCMinutes() + 1) % 15 == 0 && aOm(30 === a1A ? "Upcoming Battle Royale Contest!" :
			"Upcoming Alliance Contest!")))
	}
}

function cS() {
	var kp, kq, kr, ks, aOn = 0,
		aOo = 0;

	function aOq() {
		return Math.pow(Math.pow(kr - kp, 2) + Math.pow(ks - kq, 2), .5)
	}

	function aOp(d) {
		kp = an.oY * d.touches[0].clientX, kq = an.oY * d.touches[0].clientY, kr = an.oY * d.touches[1].clientX, ks = an.oY * d.touches[1].clientY
	}
	this.wD = function(d) {
		return 1 < d.touches.length ? (aOo = bT.dn, aOn = 3, aOp(d), aA.pn(), !0) : (aOn = 0, !1)
	}, this.wE = function(d) {
		var aDM, go, gp;
		return 0 !== a2.uU && 1 < d.touches.length && (aOn = Math.max(aOn - 1, 0), a7.ld() && (aDM = aOq(), aOp(d), d = aOq(), go = Math.floor((kp + kr) / 2), gp = Math.floor((kq + ks) / 2), aH.a2y(go, gp, Math.max(.125, d) / Math.max(.125,
			aDM)), bT.dK = !0), !0)
	}, this.wc = function() {
		var ff, fg;
		return !!(aOn && (aOn = 0, bT.dn < aOo + 500)) && (ff = (kp + kr) / 2, fg = (kq + ks) / 2, aA.wV(ff, fg), aA.click(ff, fg, !0) && (bT.dK = !0), !0)
	}
}

function cj() {
	this.size = 0, this.ke = 0, this.a1 = null, this.dD = function(a1) {
		this.ke = 0, this.a1 = a1, this.size = a1.length
	}, this.vz = function() {
		this.a1 = null
	}, this.na = function(size) {
		for (var dr = 0, a1 = this.a1, ld = this.ke + size - 1, a0 = this.ke; a0 <= ld; a0++) dr |= (a1[a0 >> 3] >> 7 - (7 & a0) & 1) << ld - a0;
		return this.ke += size, this.ke > 8 * this.size && console.log("error unwrapper"), dr
	}, this.aIh = function(size) {
		var i4 = size >> 1;
		return (1 << i4) * this.na(size - i4) + this.na(i4)
	}, this.aOr = function(size) {
		for (var e5 = new Array(size), a0 = 0; a0 < size; a0++) e5[a0] = this.na(10);
		return a9.rU(e5)
	}, this.aIg = function(aJw) {
		return this.size === b4.aIc(aJw)
	}
}

function d2() {
	this.aKq = 0, this.aKr = 0, this.aKm = 0, this.aKn = 0, this.aKo = 0, this.aKp = 0, this.a5W = [0, 0, 0, 0], this.lc = function() {
		this.aKq = aH.kv(), this.aKr = aH.kw(), this.aKm = -this.aKq, this.aKn = -this.aKr, this.aKo = an.u / h7, this.aKp = an.iE / h7, this.a5W[0] = Math.floor(this.aKm), this.a5W[1] = Math.floor(this.aKn), this.a5W[2] = Math.floor(this.a5W[
			0] + this.aKo + 1), this.a5W[3] = Math.floor(this.a5W[1] + this.aKp + 1), bP.a5T = !0
	}
}

function cT() {
	var a1h, lF;
	this.dD = function() {
		a1h = 1, lF = 0
	}, this.ha = function() {
		0 < a1h && (lF = 0 === lF ? bT.dn + 16 : lF, a1h = (a1h -= .001 * (bT.dn - lF)) < 0 ? 0 : a1h, lF = bT.dn, bT.dK = !0)
	}, this.kk = function() {
		0 < a1h && (ku.fillStyle = "rgba(0,0,0," + a1h + ")", ku.fillRect(0, 0, an.u, an.iE))
	}
}

function cW() {
	function aOu(map, ff, fg, u, iE) {
		map >= bI.aAX || (bI.s2 === map && (ku.fillStyle = p.mX, ku.fillRect(ff, fg, u, iE), ku.fillStyle = p.lu), ku.strokeRect(ff, fg, u, iE), ku.fillText(bI.j8.s1[map].name, Math.floor(ff + .5 * u), Math.floor(fg + .55 * iE)))
	}
	this.t7 = !1, this.a8J = [0, 0, 0, 0], this.show = function() {
		this.t7 = !0, this.resize(), bT.dK = !0
	}, this.resize = function() {
		var aMG = bB.el(bI.aAX + bI.aAX % 2, 2),
			aMG = an.iE - aMG * bQ.gap;
		m.n.tX() ? this.a8J[2] = Math.floor(.75 * an.min) : this.a8J[2] = Math.floor(.5 * an.min), this.a8J[3] = Math.floor(1.25 * this.a8J[2]), this.a8J[3] > aMG && (this.a8J[3] = aMG, this.a8J[2] = Math.floor(aMG / 1.2)), this.a8J[0] = Math
			.floor((an.u - this.a8J[2]) / 2), this.a8J[1] = Math.floor((an.iE - this.a8J[3]) / 2)
	}, this.w9 = function(ff, fg) {
		return !(ff < this.a8J[0] || fg < this.a8J[1] || ff > this.a8J[0] + this.a8J[2] || fg > this.a8J[1] + this.a8J[3])
	}, this.fn = function(ff, fg) {
		var a2M, aMG = bB.el(bI.aAX + bI.aAX % 2, 2);
		return bT.dK = !0, ff < this.a8J[0] || fg < this.a8J[1] || ff > this.a8J[0] + this.a8J[2] || fg > this.a8J[1] + this.a8J[3] ? !(this.t7 = !1) : (a2M = Math.floor(.17 * this.a8J[3]), fg < this.a8J[1] + a2M ? ff > this.a8J[0] + this.a8J[
			2] - a2M && (this.t7 = !1) : (fg = (fg = Math.floor(aMG * (fg - this.a8J[1] - a2M - .00576 * an.oU) / (this.a8J[3] - a2M - .01152 * an.oU))) < 0 ? 0 : aMG - 1 < fg ? aMG - 1 : fg, ff > this.a8J[0] + this.a8J[2] / 2 && (fg += aMG),
				fg >= bI.aAX || bI.w(fg, Math.floor(16384 * Math.random()))), !0)
	}, this.kk = function() {
		var a0, kq, a2M = Math.floor(.17 * this.a8J[3]),
			aMG = bB.el(bI.aAX + bI.aAX % 2, 2),
			gap = .6 * .01152 * an.oU,
			a8X = (this.a8J[3] - a2M - (aMG + 1) * gap) / aMG,
			pZ = Math.floor((this.a8J[2] - 3 * gap) / 2);
		for (ku.lineWidth = bQ.ta, b2.kt.textAlign(ku, 1), b2.kt.textBaseline(ku, 1), ku.fillStyle = p.lr, ku.fillRect(this.a8J[0], this.a8J[1] + a2M, this.a8J[2], this.a8J[3] - a2M), ku.fillStyle = p.mX, ku.fillRect(this.a8J[0], this.a8J[1],
				this.a8J[2], a2M), ku.strokeStyle = p.lu, ku.strokeRect(this.a8J[0], this.a8J[1], this.a8J[2], this.a8J[3]), ku.fillStyle = p.lu, ku.fillRect(this.a8J[0], this.a8J[1] + a2M, this.a8J[2], 2), ku.font = b2.kt.ky(1, .48 * a2M), ku
			.fillText("Maps", Math.floor(this.a8J[0] + this.a8J[2] / 2), Math.floor(this.a8J[1] + .55 * a2M)), ku.font = b2.kt.ky(1, .48 * a8X), a0 = aMG - 1; 0 <= a0; a0--) kq = Math.floor(this.a8J[1] + a2M + gap + a0 * (a8X + gap)), aOu(a0,
			this.a8J[0] + gap, kq, pZ, a8X), aOu(a0 + aMG, this.a8J[0] + pZ + 2 * gap, kq, pZ, a8X);
		aB.zz(Math.floor(this.a8J[0] + this.a8J[2] - .7 * a2M), Math.floor(this.a8J[1] + .3 * a2M), Math.floor(.4 * a2M)), ku.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function v() {
	this.size = 0, this.ke = 0, this.a1 = null, this.dD = function(a1) {
		this.ke = 0, this.a1 = a1, this.size = a1.length
	}, this.w = function(aJw) {
		return this.dD(new Uint8Array(this.aIc(aJw))), this.a1
	}, this.vz = function() {
		this.a1 = null
	}, this.x = function(size, a1C) {
		for (var a1 = this.a1, ld = this.ke + size - 1, a0 = this.ke; a0 <= ld; a0++) a1[a0 >> 3] |= (a1C >> ld - a0 & 1) << 7 - (7 & a0);
		this.ke += size, this.ke > 8 * this.size && console.log("error wrapper")
	}, this.aIb = function(size, a1C) {
		var i4 = size >> 1,
			f6 = 1 << i4;
		this.x(size - i4, bB.el(a1C, f6)), this.x(i4, a1C % f6)
	}, this.aOv = function(size) {
		for (var a1 = this.a1, ld = this.ke + size, a0 = this.ke; a0 < ld; a0++) a1[a0 >> 3] &= 255 ^ 128 >>> (7 & a0)
	}, this.aIc = function(aJw) {
		return aJw + 7 >> 3
	}, this.aOw = function(e5, i0, ld, aOx) {
		for (var a0 = i0; a0 < ld; a0++) this.x(aOx, e5[a0])
	}
}
a(), self.aiCommand746 = function(dr) {
	0 === dr ? ba() : 1 !== dr || !m || 1 !== m.id || m.ds < 14 || b9.dt()
}, setTimeout(ba, 1e4), window.onload = function() {
	ba()
};