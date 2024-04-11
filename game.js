var a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, aA, aB, aC, aD, aE, aF, aG, aH, aI, aJ, aK, aL, aM, aN, aO, aP, aQ, aR, aS, aT, aU, aV, aW, aX, aY, aZ, aa, ab, ac, ad, ae, af,
	ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, at, au, av, aw, ax, ay, az, b0, b1, b2, b3, b4, b5, b6, b7, b8, b9, bA, bB, bC, d6, d7, d8, d9, dA, dB, du, dv, dw, dx, dy, dz, e0, e1, e2, e3, e4, e5, e6, he, hc, hd, hM;

function bD() {
	var ct;
	a || (bF(), bG(), ai = new bH, ah = new bI, aY = new bJ, aZ = new bK, ac = new bL, ad = new bM, b = new bN, c = new bO, d = new bP, e = new bQ, f = new bR, g = new bS, h = new bT, i = new bU, j = new bV, k = new bW, l = new bX, m = new bY, n =
		new bZ, o = new ba, p = new bb, q = new bc, r = new bd, s = new be, t = new bf, u = new bg, v = new bh, w = new bi, x = new bj, y = new bk, z = new bl, a0 = new bm, a1 = new bn, a2 = new bo, a3 = new bp, a4 = new bq, a5 = new br, a6 =
		new bs, a7 = new bt, aM = new bu, a9 = new bv, aA = new bw, aB = new bx, aN = new by, aL = new bz, aC = new c0, aD = new c1, aE = new c2, aF = new c3, aK = new c4, aG = new c5, aH = new c6, aI = new c7, aJ = new c8, aO = new c9, aP =
		new cA, aQ = new cB, aR = new cC, aS = new cD, aT = new cE, aU = new cF, aW = new cG, aX = new cH, aa = new cI, ab = new cJ, ae = new cK, af = new cL, ag = new cM, aj = new cN, ak = new cO, al = new cP, am = new cQ, an = new cR, ao =
		new cS, ap = new cT, aq = new cU, ar = new cV, at = new cW, aV = new cX, b7 = new cY, a = new cZ, b8 = new ca, b9 = new cb, b4 = new cc, b5 = new cd, aw = new ce, ax = new cf, ay = new cg, az = new ch, b1 = new ci, b2 = new cj, b3 =
		new ck, bA = new cl, b0 = new cm, bB = new cn, bC = new co, a.cq(), b7.cq(), aK.cr(), b9.cq(), aV.cq(), bC.cq(), aY.cq(), a3.cq(), aN.cq(), ac.cq(), ad.cq(), ap.cq(), cs(), (ct = document.getElementById("usernameField")) && document.body
		.removeChild(ct), au = new cu, aK.cq(), b7.cv.cw(), b3.cq(), b0.cq(), aw.cq(), (b6 = new cx).cq(), av = new cy, (a8 = new cz).cq(), aL.cq(), a5.d0(), at.cq(), a9.cq(), x.cq(), aT.cq(), aN.cq(), q.cq(), a7.cq(), ag.cq(), a1.cq(), b3.d1 = !
		0, setTimeout(function() {
			ap.d2(2, 14071)
		}, 0), af.d3(), b7.cv.d4(), a.d5 = 1)
}

function cZ() {
	this.dC = 1035, this.cq = function() {
		d6 = 2, d8 = 18, d7 = "3 Apr 2024 (1.93.9)", d9 = 0 <= window.location.hostname.toLowerCase().indexOf("territorial.io"), dB = function() {
			try {
				return window.self !== window.top
			} catch (dE) {
				return !0
			}
		}(), dA = (new Date).getTime() % 1024
	}, this.d5 = 0
}

function co() {
	this.id = new dF, this.cq = function() {
		this.id.cq()
	}
}

function dF() {
	this.cq = function() {
		0 === b9.dG.data[181].value && (b9.dG.dH(180, Math.floor(Math.random() * ai.pow(30))), b9.dG.dH(181, Math.floor((new Date).getTime() / 36e5)))
	}
}

function cW() {
	this.dI = new dJ, this.dK = new dL, this.cq = function() {
		b7.cv.dM()
	}
}

function dJ() {
	var dO = 0;

	function dQ(dX) {
		console.log("Video Ad Completed: " + dX)
	}

	function dP() {
		return 0 === b7.id && d9
	}

	function dW() {
		return dP() && "undefined" != typeof aipAPItag && void 0 !== aiptag.adplayer && aiptag.adplayer.startVideoAd && aipAPItag.showCMPButton && aipAPItag.hideCMPButton && (0 === dO && (dO = b3.dY), b3.dY > dO + 500)
	}
	this.cq = function() {
		var dT;
		dP() && (window.aiptag = window.aiptag || {
			cmd: []
		}, aiptag.cmd.display = aiptag.cmd.display || [], aiptag.cmd.player = aiptag.cmd.player || [], aiptag.cmp = {
			show: !0,
			position: "centered",
			button: !0,
			buttonText: "Privacy Settings",
			buttonPosition: "bottom-center"
		}, aiptag.cmd.player.push(function() {
			aiptag.adplayer = new aipPlayer({
				AD_WIDTH: 960,
				AD_HEIGHT: 540,
				AD_DISPLAY: "fullscreen",
				LOADING_TEXT: "loading advertisement",
				PREROLL_ELEM: function() {
					return document.getElementById("videoad")
				},
				AIP_COMPLETE: dQ
			})
		}), (dT = document.createElement("div")).id = "videoad", document.body.appendChild(dT), (dT = document.createElement("script")).async = !0, dT.src = "", document.head.appendChild(dT))
	}, this.dV = function() {
		return !!dW() && (aiptag.cmd.player.push(function() {
			aiptag.adplayer.startVideoAd()
		}), !0)
	}, this.hideCMPButton = function() {
		"undefined" != typeof aipAPItag && aipAPItag.hideCMPButton && aipAPItag.hideCMPButton()
	}, this.showCMPButton = function() {
		"undefined" != typeof aipAPItag && aipAPItag.showCMPButton && aipAPItag.showCMPButton()
	}, this.showCMPScreen = function() {
		dW() && aipAPItag.showCMPScreen()
	}
}

function dL() {
	var dY = 2e4;
	this.show = function() {
		if (b3.dY < dY) return !1;
		dY = b3.dY + 135e4, b7.cv.da(Math.floor(135e4))
	}
}

function cP() {
	this.de = new Uint16Array(2), this.df = new Uint32Array(2), this.dg = new Uint8Array(4), this.dh = new Uint8Array(4), this.di = new Uint32Array(5), this.dj = new Uint32Array(8), this.dk = function(dl, dm) {
		return dl[0] = dm, dl
	}, this.dn = function(dl, dm, dp) {
		return dl[0] = dm, dl[1] = dp, dl
	}, this.dq = function(dl, dm, dp, dr) {
		return dl[0] = dm, dl[1] = dp, dl[2] = dr, dl
	}, this.ds = function(dl, dm, dp, dr, dt) {
		return dl[0] = dm, dl[1] = dp, dl[2] = dr, dl[3] = dt, dl
	}
}

function e7() {
	dz = 0, e0 = 2048, e1 = new Uint32Array(4 * e0), e2 = 0, e3 = new Uint32Array(e0), (e4 = new Int32Array(4))[0] = -4 * ap.e8, e4[1] = 4, e4[2] = -e4[0], e4[3] = -e4[1], e5 = new Uint8Array(ap.e8 * ap.e9)
}

function eA(player) {
	dv = player, e6 = !1, eB(), eC();
	for (var eD = a4.eE(dv) - 1; 0 <= eD; eD--) 0 === a4.eF(dv, eD) && (du = eD, eG());
	e6 && eH()
}

function eH() {
	eI(), eJ()
}

function eG() {
	dy = a4.eK(dv, du), dw = a4.eL(dv, du), eM(), (0 !== dz && (eO(), eP()) ? eQ : eN)()
}

function eP() {
	return dx = eR(dw, dz), eS < dx
}

function eO() {
	for (var eD = dz - 1; 0 <= eD; eD--) e5[eR(e1[eD], 4)] = 0
}

function eN() {
	var dZ;
	1 === a4.eE(dv) && c.eT(dv), dv !== eU ? (eV[dv] += dw, a5.eW(dv)) : (dZ = eV[dv], eV[dv] += dw, a5.eW(dv), b1.eX[13] -= eV[dv] - dZ), a4.eY(dv, du)
}

function eB() {
	var eD, eZ = ea[dv].length;
	for (e2 = 0, eD = (e0 < eZ ? e0 : eZ) - 1; 0 <= eD; eD--) e3[e2++] = ea[dv][eD]
}

function eC() {
	for (var eD = ea[dv].length - 1; 0 <= eD; eD--) a2.eb(ea[dv][eD]) && a2.ec(ea[dv][eD], dv);
	ea[dv] = []
}

function eM() {
	dz = 0, (dy === ed ? ee : ef)()
}

function ef() {
	for (var eg, eh, eD, ei = 3; 0 <= ei; ei--)
		for (eD = e2 - 1; 0 <= eD; eD--) eh = eR(eg = e3[eD] + e4[ei], 4), 0 === e5[eh] && a2.ej(eg) && a2.ek(eg) === dy && (e5[eh] = 1, e1[dz++] = eg)
}

function ee() {
	for (var eg, eh, eD, ei = 3; 0 <= ei; ei--)
		for (eD = e2 - 1; 0 <= eD; eD--) eh = eR(eg = e3[eD] + e4[ei], 4), 0 === e5[eh] && a2.el(eg) && (e5[eh] = 1, e1[dz++] = eg)
}

function eQ() {
	em() ? (en(), dy !== ed && eo()) : eN()
}

function eo() {
	ep(), eq(er[dy]), eq(es[dy]), et(ea[dy]), eu(es[dy]), eu(ev[dy]), ew(), ex()
}

function en() {
	e6 = !0, a4.ey(dv, du, dw), ez[dv] += dz, f0(), f1()
}

function em() {
	return (dy === ed ? f2 : f3)()
}

function f3() {
	var f4 = dz * eS,
		f5 = f6(),
		f7 = f8(),
		f5 = f4 + 2 * f5 + f7,
		fA = dx * dz;
	return f5 < fA ? (dw -= f5, fB(f5 - f4, f7), !0) : (dw -= fA, fB(fA - f4, f7), !1)
}

function fB(fA, f7) {
	if (0 < f7) {
		if (!(f7 <= fA)) return a4.fC(dy, dv, f7 - fA), void(fA = 0);
		a4.fC(dy, dv, 0), fA -= f7
	}
	fA = eR(fA, 2), eV[dy] >= fA ? eV[dy] -= fA : eV[dy] = 0
}

function f8() {
	return a4.fD(dy, dv)
}

function f6() {
	return ai.fE(dz * eV[dy], 1 + ai.fE(10 * ez[dy], 16))
}

function f2() {
	return dw -= dz * eS, !0
}

function f1() {
	for (var eD = dz - 1; 0 <= eD; eD--) ea[dv].push(e1[eD]), er[dv].push(e1[eD]), a2.ec(e1[eD], dv)
}

function cU() {
	var fF = 0,
		fG = 0;
	this.fH = function(fI, fJ) {
		fF = fI, fG = fJ
	}, this.fK = function() {
		var fR, fT, fV, fX;
		fL || j.fM || (aY.fN.fO(0) || aY.fN.fO(1)) && aY.fN.fP(eU) && (fR = aj.fS(fF), fT = aj.fU(fG), fV = aj.fW(fR, fT), fX = aj.fY(fV), aj.fZ(fR, fT)) && (fa ? a2.eb(fX) && aW.fb.fc(fV) : ak.fd.fe(fV) || ak.fd.ff(fF, fG) || a2.fg(fX) || (a2
			.fh(fX) ? ak.fd.fi(eU, fV) && aW.fb.fj(o.fk(), fV) : a2.el(fX) ? fl(eU) ? aW.fb.fm(o.fk(), ed) : fn(eU, ed) ? aO.fo(ed, o.fk()) : ak.fd.fi(eU, fV) && aW.fb.fj(o.fk(), fV) : (fR = a2.ek(fX)) !== eU && (fp(fR, eU) ? fq(eU, fR) ?
				aW.fb.fm(o.fk(), fR) : fn(eU, fR) ? aO.fo(fR, o.fk()) : ak.fd.fi(eU, fV) && aW.fb.fj(o.fk(), fV) : ak.fd.fi(eU, fV) && aW.fb.fj(o.fk(), fV))))
	}
}

function ce() {
	var fr = 1,
		fs = [null, null];
	this.cq = function() {
		fr = .72 * (b7.cv.ft() ? .0011 : .001) * aK.fu;
		for (var eD = 1; 0 <= eD; eD--) fs[eD] && this.fv(eD, fs[eD].fw)
	}, this.fv = function(fx, fw) {
		fs[fx] = {
			fw: fw,
			font: aY.fy.fz(1, 10)
		}, this.g0(fx)
	}, this.g0 = function(fx) {
		var fw, fontSize, g2, g3, g4;
		a1.g1() && fs[fx] && (fw = fs[fx].fw, fontSize = Math.floor(.15 * fr * a1.get(13).height), g2 = aY.fy.fz(1, fontSize), g3 = n.measureText(fw, g2), (g4 = .8 * fr * a1.get(13).width) < g3 && (fontSize = Math.floor(fontSize * g4 / g3), g2 =
			aY.fy.fz(1, fontSize)), fs[fx] = {
			fw: fw,
			font: g2
		}, b3.d1 = !0)
	}, this.g5 = function() {
		return Math.floor(fr * a1.get(13).height)
	}, this.g6 = function(g7, g8) {
		return !!a1.g1() && !(g7 < b0.gap || g8 < aK.g9 - a8.g3 - fr * a1.get(13).height - 2 * b0.gap || g8 > aK.g9 - a8.g3 - 2 * b0.gap || (g7 < b0.gap + fr * a1.get(13).width ? (b6.gA(0), 0) : g7 < 2 * b0.gap + fr * a1.get(13).width || !(g7 <
			2 * b0.gap + 2 * fr * a1.get(13).width) || (b6.gA(1), 0)))
	}, this.gB = function() {
		return Math.floor(aK.g9 - a8.g3 - fr * a1.get(13).height - 2 * b0.gap)
	}, this.gC = function() {
		if (a1.g1()) {
			gD.imageSmoothingEnabled = !0, gD.setTransform(fr, 0, 0, fr, b0.gap, this.gB()), gD.drawImage(a1.get(14), 0, 0), gD.setTransform(fr, 0, 0, fr, 2 * b0.gap + fr * a1.get(13).width, this.gB()), gD.drawImage(a1.get(13), 0, 0);
			for (var eD = 1; 0 <= eD; eD--) fs[eD] && (gD.setTransform(1, 0, 0, 1, (1 + eD) * b0.gap + eD * fr * a1.get(13).width, this.gB()), gD.font = fs[eD].font, aY.fy.textBaseline(gD, 1), aY.fy.textAlign(gD, 1), gD.fillStyle = aZ.gE, gD
				.fillText(fs[eD].fw, .5 * fr * a1.get(13).width, .86 * fr * a1.get(13).height));
			gD.setTransform(1, 0, 0, 1, 0, 0)
		}
	}
}

function gF(gG, size, gH, gI, font) {
	var eD, gL = .2,
		gM = document.createElement("canvas"),
		gN = gM.getContext("2d", {
			alpha: !1
		});
	for (gM.width = gG, gM.height = gG, gN.font = size + font, gN.textAlign = "center", gN.textBaseline = "middle", gN.fillStyle = "red", eD = 0; eD < gH.length; eD++) gN.fillText(gH[eD], .5 * gG, .5 * gG);
	return -1 < (gM = function(gJ) {
		var eD, gP;
		for (eD = gJ.data.length - 4; 0 <= eD; eD -= 4)
			if (gP = gJ.data[eD], gI <= gP) return Math.floor(eD / (4 * gG));
		return -1
	}(gN.getImageData(0, 0, gG, gG))) && (gL = (gM - .5 * gG + .1 * size) / size), Math.max(gL, 0)
}

function cN() {
	this.gQ = new Int16Array(4), this.gR = new Int16Array(4), this.cq = function() {
		var eD;
		for (this.gQ[0] = -ap.e8, this.gQ[1] = 1, this.gQ[2] = ap.e8, this.gQ[3] = -1, eD = 0; eD < 4; eD++) this.gR[eD] = 4 * this.gQ[eD]
	}, this.gS = function(gT, gU) {
		var gV = this.gW(gU) - this.gW(gT),
			gU = this.gY(gU) - this.gY(gT),
			gT = gV >>> 31 << 1;
		return 5 + gT + (1 - gT) * (1 - (gU >>> 31 << 1)) * (Math.abs(gV) - Math.abs(gU) >>> 31) & 3
	}, this.gc = function(gT, gU, gd) {
		return gd % 2 == 0 ? gd + (1 - gd) * (1 - (this.gW(gU) - this.gW(gT) >>> 31 << 1)) + 4 & 3 : gd + (2 - gd) * (1 - (this.gY(gU) - this.gY(gT) >>> 31 << 1)) + 4 & 3
	}, this.gf = function(eg, fV) {
		for (var gU, gg, gi = es[eg], eZ = gi.length, g3 = ap.e8, gj = this.gW(fV), gk = this.gY(fV), gl = gi[0] >> 2, min = this.gm(gj, gk, gl), eD = 1; eD < eZ; eD++)(gg = (gg = gj - (gU = gi[eD] >> 2) % g3) * gg + (gg = gk - ~~((.5 + gU) /
			g3)) * gg) < min && (min = gg, gl = gU);
		return gl
	}, this.gn = function(player, fX) {
		return !a2.el(fX) && player === a2.ek(fX)
	}, this.gm = function(fR, fT, fV) {
		return (fR -= this.gW(fV)) * fR + (fT -= this.gY(fV)) * fT
	}, this.go = function(gp, gq, gr) {
		gp = this.gt(gp) - this.gu(gr), gq = this.gw(gq) - this.gx(gr);
		return Math.sqrt(gp * gp + gq * gq)
	}, this.gy = function(gT, gU) {
		var gs = this.gW(gT) - this.gW(gU),
			gT = this.gY(gT) - this.gY(gU);
		return Math.sqrt(gs * gs + gT * gT)
	}, this.gz = function(eg) {
		return eg < h0 && 0 !== h1[eg] && 2 !== h2[eg]
	}, this.h3 = function(eg, h4) {
		return ai.fE(h4 * eV[eg], 1e3)
	}, this.gt = function(gp) {
		return 16 * (gp + h5) / h6
	}, this.gw = function(gq) {
		return 16 * (gq + h7) / h6
	}, this.fS = function(gp) {
		return Math.floor((gp + h5) / h6)
	}, this.fU = function(gq) {
		return Math.floor((gq + h7) / h6)
	}, this.fZ = function(fR, fT) {
		return 1 <= fR && 1 <= fT && fR < ap.e8 - 1 && fT < ap.e9 - 1
	}, this.gW = function(fV) {
		return fV % ap.e8
	}, this.gY = function(fV) {
		return ai.fE(fV, ap.e8)
	}, this.fW = function(fR, fT) {
		return fT * ap.e8 + fR
	}, this.h8 = function(fV) {
		var fR = this.gW(fV),
			fV = this.gY(fV);
		return 0 < fR && fR < ap.e8 - 1 && 0 < fV && fV < ap.e9 - 1
	}, this.fY = function(fV) {
		return fV << 2
	}, this.h9 = function(fV) {
		return ap.e8 * this.gY(fV) * 256 + (this.gW(fV) << 4)
	}, this.hA = function(fV) {
		return this.h9(fV) + 8 + (ap.e8 << 7)
	}, this.hB = function(gr) {
		return ap.e8 * (this.gx(gr) >> 4) + (this.gu(gr) >> 4)
	}, this.hC = function(gr) {
		gr = this.hB(gr);
		return (this.gW(gr) >> 5) + ak.hD.hE * (this.gY(gr) >> 5)
	}, this.gu = function(gr) {
		return gr % (ap.e8 << 4)
	}, this.gx = function(gr) {
		return ai.fE(gr, ap.e8 << 4)
	}, this.hF = function(fV, gd) {
		return fV + this.gQ[gd]
	}, this.hG = function(fX, gd) {
		return fX + this.gR[gd]
	}
}

function hH(player) {
	return al.dj[1] = ea[player].length, al.dj[0] === ed ? hI(player) : hJ(player, al.dj[0]), 0 !== al.dj[1] || 0 !== ea[player].length
}

function hK(player) {
	hL && (hM[player] = 1), hN(al.dj[1], player), a4.hO(player, al.df[0], al.dj[0]), c.hP(player, !1)
}

function hQ(player, hR, eZ, hS) {
	var hT = eR(3 * eV[player], 256);
	hS -= hS >= eR(eV[player], 2) ? hT : 0, hN(eZ, player), a4.hO(player, hS, hR), eV[player] -= hS + hT, c.hP(player, !1)
}

function hJ(player, hR) {
	for (var gd, eD = er[player].length - 1; 0 <= eD; eD--)
		if (a2.hU(er[player][eD]))
			for (gd = 3; 0 <= gd; gd--)
				if (a2.ej(er[player][eD] + e4[gd]) && a2.ek(er[player][eD] + e4[gd]) === hR) {
					ea[player].push(er[player][eD]);
					break
				}
}

function hN(size, player) {
	for (var eD = ea[player].length - 1; size <= eD; eD--) a2.hV(ea[player][eD], player)
}

function hI(player) {
	for (var gd, eD = er[player].length - 1; 0 <= eD; eD--)
		if (a2.hU(er[player][eD]))
			for (gd = 3; 0 <= gd; gd--)
				if (a2.el(er[player][eD] + e4[gd])) {
					ea[player].push(er[player][eD]);
					break
				}
}

function hW(player, hX) {
	var eD, hY, gd, hZ, eZ = er[player].length,
		ge = 256 <= eZ ? 12 : 32 <= eZ ? 6 : 1,
		ha = eZ - 1 - aL.hb(ge);
	hc = 0;
	loop: for (eD = ha; 0 <= eD; eD -= ge)
		for (gd = 3; 0 <= gd; gd--)
			if ((hZ = a2.el(er[player][eD] + e4[gd]) ? ed : a2.ek(er[player][eD] + e4[gd])) === ed || a2.ej(er[player][eD] + e4[gd]) && hZ !== player && (hX || fp(player, hZ))) {
				for (hY = hc - 1; 0 <= hY; hY--)
					if (hd[hY] === hZ) continue loop;
				if (hd[hc] = hZ, ++hc >= he) return !0
			}
	return 0 < hc
}

function hf(player, hX) {
	var eD, gd, hZ;
	for (hc = 0, eD = er[player].length - 1; 0 <= eD; eD--)
		for (gd = 3; 0 <= gd; gd--)
			if ((hZ = a2.el(er[player][eD] + e4[gd]) ? ed : a2.ek(er[player][eD] + e4[gd])) === ed || a2.ej(er[player][eD] + e4[gd]) && hZ !== player && (hX || fp(player, hZ))) return hd[hc++] = hZ, !0;
	return !1
}

function hg() {
	for (var hh, eD = hc - 1; 0 <= eD; eD--)
		if (hd[eD] === ed) {
			for (hc--, hh = eD; hh < hc; hh++) hd[hh] = hd[hh + 1];
			return !0
		} return !1
}

function hi(player) {
	for (var hh, eD = hc - 1; 0 <= eD; eD--)
		if (a4.hj(player, hd[eD]))
			for (hc--, hh = eD; hh < hc; hh++) hd[hh] = hd[hh + 1];
	return 0 === hc
}

function hk() {
	for (var eD = hc - 1; 0 <= eD; eD--)
		if (hd[eD] >= h0) return !0;
	return !1
}

function hl() {
	for (var eD = hc - 1; 0 <= eD; eD--) hd[eD] < h0 && (hd[eD] = hd[--hc]);
	return 0 < hc
}

function hm(player) {
	for (var hh, hn = hd[0], ho = eV[hn] + a4.fD(hn, player), eD = hc - 1; 1 <= eD; eD--)(hh = eV[hd[eD]] + a4.fD(hd[eD], player)) < ho && (hn = hd[eD], ho = hh);
	return hn
}

function hp(player) {
	var g9, hq = hd[0];
	if (1 !== hc)
		for (var hr = eR(hs[player] + ht[player], 2), hu = eR(hv[player] + hw[player], 2), hx = hy(hr - eR(hs[hq] + ht[hq], 2)) + hy(hu - eR(hv[hq] + hw[hq], 2)), eD = hc - 1; 1 <= eD; eD--)(g9 = hy(hr - eR(hs[hd[eD]] + ht[hd[eD]], 2)) + hy(hu - eR(
			hv[hd[eD]] + hw[hd[eD]], 2))) < hx && (hx = g9, hq = hd[eD]);
	return hq
}

function hz() {
	return hd[aL.hb(hc)]
}

function cs() {
	he = 8, hc = 0, hd = new Uint16Array(he)
}

function i0() {
	hM = hL ? new Uint8Array(ed) : null
}

function i1(player, hS) {
	var i2;
	hL && (hM[player] = 0), !a4.i3(player) || hS < 60 || (0 === er[player].length ? ak.i4.i5(player) || (b.i6(player - h0, 200), i7(player, hS, b.hS[player - h0], a5.i8(player))) : 0 < es[player].length && aL.random() < aL.value(es[player].length >
		er[player].length ? 7 : 3) && ak.i4.i5(player) || (i2 = a5.i8(player), eV[player] > i2 && hS < eV[player] - i2 && (hS = eV[player] - i2), hL ? i9(player, hS, b.hS[player - h0], i2) : iA(player, hS, b.hS[player - h0])))
}

function i9(player, hS, iB, i2) {
	var hR;
	hW(player, !1) || hf(player, !1) ? (hM[player] = 1, hi(player) || (hg() ? (iC(player, hS), iD(player, ed, iB)) : (aL.iE(b.iF[iB]) ? iG(player, hS, hR = hm(player)) : (hk() && aL.iE(b.iH[iB]) && hl(), iG(player, hS, hR = hp(player))), iD(player,
		hR, iB)))) : 0 < es[player].length && aL.random() < aL.value(60) && ak.i4.i5(player) || (b.i6(player - h0, 200), i7(player, hS, iB, i2))
}

function iI(player, hS) {
	hW(player, !1) || hf(player, !1) ? (hM[player] = 1, hg() ? iC(player, hS) : iG(player, hS, hz())) : i7(player, hS, 0, 0)
}

function iD(player, hR, iB) {
	3 <= iB && 2142 < b3.iJ() && (hR === ed || eV[hR] < eR(eV[player], 20)) && b.i6(player - h0, 25)
}

function i7(player, hS, iB, i2) {
	var eD, hh, iK;
	if (0 !== b4.iL[player] && !(5 === iB && eV[player] < i2 || 4 === iB && eV[player] < eR(i2, 2)))
		for (eD = aL.hb(iM), hh = 0; hh < iM; hh++)
			if (iK = iN[(hh + eD) % iM], b4.iL[iK] === b4.iL[player] && 1 === hM[iK]) return void aW.iO.iP(player, iK, hS)
}

function iA(player, hS, iB) {
	!hW(player, !0) && !hf(player, !0) || hi(player) || (hg() ? iC(player, hS) : aL.iE(b.iF[iB]) ? iG(player, hS, hm(player)) : (hk() && aL.iE(b.iH[iB]) && hl(), iG(player, hS, hp(player))))
}

function iQ(player, hS) {
	(hW(player, !0) || hf(player, !0)) && (hg() ? iC(player, hS) : iG(player, hS, hz()))
}

function iG(player, hS, hR) {
	eR(eV[player], 8) > eV[hR] && (hS = (iR = eR(11 * eV[hR], 5)) < hS ? hS : iR);
	var iR = ea[player].length;
	hJ(player, hR), hQ(player, hR, iR, hS)
}

function iC(player, hS) {
	var hR = ed,
		eZ = ea[player].length;
	return hI(player), ea[player].length !== eZ && (hQ(player, hR, eZ, hS), !0)
}
self.aiCommand746 = function(db) {
	0 === db ? bD() : 1 !== db || 1 !== b7.id || b7.dc < 14 || x.dd()
};
var h0, rJ, ie, rI, iS = [60, 74, 112, 200, 256, 512];

function bN() {
	var iT, iU, iV, iW, iX, iY;

	function io(eD) {
		iT[eD] = 1 + eR(iX[eD] * aL.random(), 10 * aL.value(100))
	}
	this.iZ = ["Very Easy", "Easy", "Normal", "Hard", "Harder", "Very Hard"], this.ia = [97, 95, 93, 90, 87, 84], this.iH = [98, 95, 70, 40, 20, 0], this.ib = [85, 70, 50, 30, 7, 3], this.iF = [0, 0, 5, 25, 50, 90], this.hS = null, this.cq =
		function() {
			var eD, ic;
			if (iT = new Uint8Array(ie), iU = new Uint16Array(ie), iV = new Uint16Array(ie), iW = new Uint8Array(ie), this.hS = new Uint8Array(ie), iX = new Uint16Array(ie), iY = new Uint16Array(ie), aU.ig) {
				if (aU.ih.ii)
					for (eD = ie - 1; 0 <= eD; eD--) this.hS[eD] = aU.ih.ii[eD + 1]
			} else if (9 === ij) this.ik();
			else if (il)
				if (hL)
					for (eD = ie - 1; 0 <= eD; eD--) this.hS[eD] = z.im[b4.iL[eD + h0] - 1].ei;
				else
					for (eD = ie - 1; 0 <= eD; eD--) this.hS[eD] = z.im[0].ei;
			else
				for (ic = 8 === ij ? 1 : 0, eD = ie - 1; 0 <= eD; eD--) this.hS[eD] = ic;
			for (eD = ie - 1; 0 <= eD; eD--) this.hS[eD] <= 2 ? (iW[eD] = 5, iX[eD] = iY[eD] = 1040, 0 === this.hS[eD] ? (iU[eD] = 1e3, iV[eD] = 1e3) : 1 === this.hS[eD] ? (iU[eD] = 1e3, iV[eD] = 920, iX[eD] = iY[eD] = 1100) : (iU[eD] = 825, iV[eD] =
				750)) : this.hS[eD] <= 4 ? (iW[eD] = 1 + aL.hb(20), 3 === this.hS[eD] ? (iU[eD] = iV[eD] = 500, iX[eD] = iY[eD] = 1e3) : (iY[eD] = 250 + aL.hb(1501), iX[eD] = 500 + aL.hb(501), iU[eD] = 300 + aL.hb(201), iV[eD] = 100 + aL.hb(
				201))) : (iX[eD] = 1e3, iY[eD] = 1e3, iW[eD] = 35 + aL.hb(16), iU[eD] = 300 + aL.hb(201), iV[eD] = 50 + aL.hb(101)), io(eD)
		}, this.ik = function() {
			for (var eD, fX = 0, hh = 0; hh < 6; hh++) {
				for (eD = fX + aM.ip[hh] - 1; fX <= eD; eD--) this.hS[eD] = hh;
				fX += aM.ip[hh]
			}
		}, this.i6 = function(iq, value) {
			0 <= iq && (iT[iq] = value)
		}, this.i5 = function(iq) {
			0 == --iT[iq] && ! function(iq) {
				! function(iq) {
					iX[iq] !== iY[iq] && (iX[iq] += iX[iq] < iY[iq] ? 3 : -3);
					iU[iq] !== iV[iq] && (iU[iq] += iU[iq] < iV[iq] ? iW[iq] : -iW[iq], iU[iq] = (Math.abs(iU[iq] - iV[iq]) <= iW[iq] ? iV : iU)[iq]);
					iT[iq] = eR(iX[iq], 10)
				}(iq);
				var player = iq + h0;
				i1(player, eR(iU[iq] * eV[player], 1e3))
			}(iq)
		}
}

function it() {
	k.i5(), a6.i5(), t.iu(), aN.iv.i5(), ao.iw.ix()
}

function iy() {
	aO.i5(), d.i5(), a5.i5(), aR.i5(), aQ.i5(), c.i5(), e.i5(), ak.iv.i5(), iz(), s.i5(), aM.i5(), a6.i5(), a6.j0(), t.i5(), am.i5(), r.i5(), m.i5(), k.i5(), aS.i5(), o.i5(), aI.i5(), b1.i5(), b5.i5(), an.i5(), aN.iv.i5(), ar.i5(), aX.i5(), b3.i5()
}

function j1() {
	f.i5(), u.i5(), n.i5(), aF.i5(), aa.i5(), aJ.j2()
}

function j3() {
	s.j4(!1), m.j4(), t.j4(!1), r.j4(), o.j4(), aI.j4(), a6.j4(!1), b5.g0()
}

function j5() {
	a6.j4(!1) && (b3.d1 = !0), aN.iv.i5()
}

function bO() {
	var j6, j7, j8, j9, jA, jB;

	function jF(jH) {
		for (var eD = j7 - 1; 0 <= eD; eD--) 0 === j9[j8[eD]] && ez[j8[eD]] >= jH && eA(j8[eD])
	}

	function jD(player) {
		10 === j9[player] ? j9[player] = j6 : ez[player] < 1e3 ? j9[player] = 3 : ez[player] < 1e4 ? j9[player] = 2 : ez[player] < 6e4 ? j9[player] = 1 : j9[player] = 0
	}
	this.cq = function() {
		jA = jB = 0, j6 = 6, j7 = 0, j8 = new Uint16Array(ed), j9 = new Uint8Array(ed)
	}, this.i5 = function() {
		var eD;
		for (jA = b1.eX[13], jB = eV[eU], eD = j7 - 1; 0 <= eD; eD--) 10 === j9[j8[eD]] ? jD(j8[eD]) : 0 == j9[j8[eD]]-- && (jD(j8[eD]), eA(j8[eD]));
		16e4 <= ez[jE[0]] && (jF(16e4), 3e5 <= ez[jE[0]]) && jF(3e5), ez[eU] > b1.eX[7] && (b1.eX[7] = ez[eU]), b1.eX[14] += jB - eV[eU] + jA - b1.eX[13]
	}, this.eT = function(player) {
		for (var hY, eD = j7 - 1; 0 <= eD; eD--)
			if (player === j8[eD]) {
				for (j7--, hY = eD; hY < j7; hY++) j8[hY] = j8[hY + 1];
				return
			}
	}, this.hP = function(player, jI) {
		for (var eD = j7 - 1; 0 <= eD; eD--)
			if (player === j8[eD]) return;
		j8[j7++] = player, j9[player] = jI ? 2 : 10
	}
}

function bP() {
	var size, i4;
	this.cq = function() {
		size = ie, i4 = new Uint16Array(ie);
		for (var eD = ie - 1; 0 <= eD; eD--) i4[eD] = eD
	}, this.i5 = function() {
		for (var eD = size - 1; 0 <= eD; eD--) 0 === h1[i4[eD] + h0] ? function(hY) {
			size--;
			for (var eD = hY; eD < size; eD++) i4[eD] = i4[eD + 1]
		}(eD) : b.i5(i4[eD])
	}
}

function bQ() {
	var jL, jM, j7, j8, j9, jN, jO, jP;

	function jR(eD) {
		var hY;
		for (j7--, hY = eD; hY < j7; hY++) j8[hY] = j8[hY + 1], j9[hY] = j9[hY + 1], jN[hY] = jN[hY + 1], jO[hY] = jO[hY + 1], jP[hY] = jP[hY + 1]
	}
	this.cq = function() {
		jL = 1, j7 = 0, jM = 2 * ed, j8 = new Uint16Array(jM), j9 = new Uint8Array(jM), jN = new Uint16Array(jM), jO = new Uint32Array(jM), jP = new Uint32Array(jM)
	}, this.jQ = function(fx, position) {
		jO[fx] = position
	}, this.i5 = function() {
		for (var eD = j7 - 1; 0 <= eD; eD--) 0 == j9[eD]-- && (j9[eD] = 2, aC.i5(eD, jN[eD], j8[eD], jO[eD], jP[eD]))
	}, this.eT = function(player, id) {
		for (var eD = j7 - 1; 0 <= eD; eD--)
			if (player === j8[eD] && id === jN[eD]) return void jR(eD)
	}, this.jS = function(player) {
		for (var eD = j7 - 1; 0 <= eD; eD--) player === j8[eD] && (aC.jT(player, jO[eD]), jR(eD))
	}, this.hP = function(player, ha, jU) {
		if (jM <= j7) return 0;
		j8[j7] = player, j9[j7] = 0, jN[j7] = jL, jO[j7] = ha, jP[j7] = jU;
		player = jL;
		return j7++, jL = 2 * jM < ++jL ? 1 : jL, player
	}, this.gC = function() {
		if (!(h6 < 40 || 0 === j7)) {
			var hY, fI, fJ, eD, fontSize, jZ, hS, ja = h5 / h6,
				jb = h7 / h6,
				jc = (aK.g3 + h5) / h6,
				jd = (aK.g9 + h7) / h6;
			for (aY.fy.textAlign(gD, 1), aY.fy.textBaseline(gD, 1), hY = j7 - 1; 0 <= hY; hY--) fI = a2.je(jO[hY]), fJ = a2.gB(jO[hY]), eD = j8[hY], ja - 1 < fI && fI < jc && jb - 1 < fJ && fJ < jd && 0 !== h1[eD] && ((fontSize = Math.floor(.94 *
				h6 * a6.jf(eD))) < 6 || (fI = Math.floor(aK.g3 * (fI + .5 - ja) / (jc - ja)), fJ = Math.floor(aK.g9 * (fJ + .48 - jb) / (jd - jb)), gD.font = aY.fy.fz(1, fontSize), gD.fillStyle = aZ.jg, hS = a4.eL(eD, a4.jh(eD, jN[hY])),
				gD.fillText(b9.dG.data[7].value ? aY.ji.jj(hS) : jk[eD], fI, fJ), (jZ = Math.floor(.5 * fontSize)) < 6) || (gD.font = aY.fy.fz(1, jZ), gD.fillText(b9.dG.data[7].value ? jk[eD] : aY.ji.jj(hS), fI, fJ + Math.floor(.82 *
				fontSize))))
		}
	}
}

function bR() {
	var jl, jm, jn, jo, jp, jq, jr, js, jt, ju, jv, jw, jx, jy = !1,
		jz = !1;

	function k0(k1) {
		jw = b3.dY, jn = jo = jm = 0, jp = (jx = 33) / k1, jl = 1 / (k1 / jx / 4), jq = (aK.g3 / 2 + h5) / h6, jr = (aK.g9 / 2 + h7) / h6, js = h6
	}

	function kE(kG) {
		Math.abs(Math.log(jv / js)) < .125 && (jv = kG * js)
	}

	function kD(ja, jb, jc, jd) {
		jt = (ja + jc + 1) / 2, ju = (jb + jd + 1) / 2;
		jc = aK.g3 / (jc - ja + 1), ja = aK.g9 / (jd - jb + 1);
		jv = .9 * (jc < ja ? jc : ja)
	}
	this.k2 = function() {
		return jy
	}, this.k3 = function() {
		k0(1), this.k4(0, 0, ap.e8 - 1, ap.e9 - 1), fa || fL || this.k5(eU, 3e3, !0, .3)
	}, this.k5 = function(player, k1, k6, zoom) {
		k7 || jy && !k6 && jz || 0 === ez[player] || (p.k8 = !1, jz = k6, k0(k1), function(player) {
			jt = (ht[player] + hs[player] + 1) / 2, ju = (hw[player] + hv[player] + 1) / 2
		}(player), function(zoom, player) {
			var gs = hs[player] - ht[player] + 1,
				player = hv[player] - hw[player] + 1,
				hY = aK.g3 / gs,
				hh = aK.g9 / player,
				hY = (jv = hY < hh ? hY : hh, 0 !== zoom ? zoom : gs < 20 && player < 20 ? .5 : .9);
			jv *= hY, kE(7 / 8)
		}(zoom, player), jy = !0, aB.kB())
	}, this.kC = function(k1) {
		fL || k7 || (p.k8 = !1, jz = !1, k0(k1), kD(0, 0, ap.e8 - 1, ap.e9 - 1), kE(7 / 8), jy = !0, aB.kB())
	}, this.k4 = function(ja, jb, jc, jd) {
		kD(ja, jb, jc, jd), h6 = jv, p.kH(jt, aK.g3 / 2), p.kI(ju, aK.g9 / 2), ax.kJ()
	}, this.kK = function() {
		return !(jy && jz || (jy = !1))
	}, this.i5 = function() {
		var kN, kO, ei, kR;
		jy && (jm < .5 ? jo < jp && (jo += jp * jl, jn = jm) : 1 - jn < jm && (jo = (jo -= jp * jl) < jp * jl ? jp * jl : jo), jw = jw >= b3.dY ? b3.dY - 1 : jw, ei = b3.dY - jw, jm = 1e3 < ei || 1 < (jm += jo * ei / jx) ? 1 : jm, jw = b3.dY,
			ei = h6, kN = h5, kO = h7, ei = (h6 = js * Math.pow(jv / js, jm)) / ei, kR = 1 - (js * Math.pow(jv / js, 1 - jm) - js) / (jv - js), p.kH(jq + kR * (jt - jq), aK.g3 / 2), p.kI(jr + kR * (ju - jr), aK.g9 / 2), a6.zoom(ei, (kN * ei -
				h5) / (1 - ei), (kO * ei - h7) / (1 - ei)), ax.kJ(), 1 <= jm && (jy = !1, ay.kS = !0), b3.d1 = !0)
	}
}

function bK() {
	var iK = aY.fy;
	this.jg = iK.kT(0, 0, 0), this.kU = iK.kV(0, 0, 0, .7), this.kW = iK.kV(0, 0, 0, .5), this.kX = iK.kV(0, 0, 0, .85), this.kY = iK.kV(0, 0, 0, .75), this.kZ = iK.kV(0, 0, 0, .6), this.ka = iK.kV(0, 0, 0, .35), this.gE = iK.kT(255, 255, 255), this
		.kb = iK.kV(255, 255, 255, .3), this.kc = iK.kV(255, 255, 255, .6), this.kd = iK.kV(255, 255, 255, .4), this.ke = iK.kV(255, 255, 255, .25), this.kf = iK.kV(255, 255, 255, .85), this.kg = iK.kV(255, 255, 255, .75), this.kh = iK.kV(255, 255,
			255, .15), this.ki = iK.kT(128, 128, 128), this.kj = iK.kV(64, 64, 64, .75), this.kk = iK.kV(88, 88, 88, .83), this.kl = iK.kT(30, 255, 30), this.km = iK.kT(0, 200, 0), this.kn = iK.kT(128, 255, 128), this.ko = iK.kV(10, 65, 10, .75),
		this.kp = iK.kV(0, 255, 0, .6), this.kq = iK.kV(0, 255, 0, .5), this.kr = iK.kV(0, 200, 0, .5), this.ks = iK.kV(0, 100, 0, .75), this.kt = iK.kV(0, 60, 0, .8), this.ku = iK.kV(0, 255, 0, .3), this.kv = iK.kV(0, 180, 0, .6), this.kw = iK.kV(0,
			120, 0, .85), this.kx = iK.kT(255, 120, 120), this.ky = iK.kT(255, 160, 160), this.kz = iK.kT(255, 70, 70), this.l0 = iK.kT(230, 0, 0), this.l1 = iK.kV(220, 0, 0, .6), this.l2 = iK.kV(255, 100, 100, .8), this.l3 = iK.kV(100, 0, 0, .85),
		this.l4 = iK.kV(60, 0, 0, .85), this.l5 = iK.kV(200, 0, 0, .6), this.l6 = iK.kV(120, 0, 0, .85), this.l7 = iK.kV(0, 60, 60, .85), this.l8 = iK.kV(10, 60, 60, .9), this.l9 = iK.kV(0, 96, 96, .75), this.lA = iK.kT(160, 160, 255), this.lB = iK
		.kV(0, 40, 90, .75), this.lC = iK.kV(0, 0, 255, .6), this.lD = iK.kT(200, 200, 255), this.lE = iK.kT(255, 120, 100), this.lF = iK.kV(255, 255, 0, .5), this.lG = iK.kV(255, 255, 150, .2), this.lH = iK.kT(255, 255, 0), this.lI = iK.kT(255, 255,
			200), this.lJ = iK.kV(200, 200, 0, .6), this.lK = iK.kV(140, 120, 0, .75), this.lL = iK.kV(180, 160, 40, .75), this.lM = iK.kV(255, 140, 0, .75), iK = null, this.lN = function(lO, ei) {
			for (var dl = lO.slice(lO.indexOf("(") + 1, lO.indexOf(")")).split(","), dg = al.dg, eD = 0; eD < 3; eD++) dg[eD] = ai.lP(parseInt(dl[eD].trim(), 10) + ei, 0, 255);
			return 3 === dl.length ? aY.fy.kT(dg[0], dg[1], dg[2]) : aY.fy.kV(dg[0], dg[1], dg[2], parseFloat(dl[3].trim()))
		}
}

function cG() {
	this.fb = new lQ, this.fN = new lR, this.lS = new lT, this.lU = new lV, this.iO = new lW
}

function lQ() {
	this.fc = function(fV) {
		il ? aW.lS.fc(eU, fV) : aN.lX.lY(fV)
	}, this.fm = function(h4, hR) {
		k.lZ(), il ? aW.lS.fm(eU, h4, hR) : aN.lX.la(h4, hR)
	}, this.lb = function(h4, lc) {
		k.lZ(), il ? aW.lS.ld(eU, h4, lc) : aN.lX.le(h4, lc)
	}, this.fj = function(h4, fV) {
		il ? aW.lS.fj(eU, h4, fV) : ak.fd.fi(eU, fV) && aN.lX.lf(h4, fV)
	}, this.fe = function(lg, fV) {
		il ? aW.lS.fe(eU, lg, fV) : ak.fd.lh(eU, lg, fV) && aN.lX.li(lg, fV)
	}, this.lj = function(hR) {
		il ? aW.lS.lj(eU, hR) : aN.lX.lk(hR)
	}, this.ll = function(lm) {
		il ? aW.lS.ln(eU, lm) : aN.lX.lo(lm)
	}, this.lp = function(lq) {
		il ? aW.lS.lp(eU, lq) : aN.lX.lr(lq)
	}, this.ls = function() {
		il ? aW.lS.ls(eU) : aN.lX.lt()
	}
}

function lW() {
	this.iP = function(player, lc, hS) {
		aY.fN.lu(player, hS, lc) && (a5.lb(player, lc), lc < h0) && aL.random() < aL.value(10) && (hM[lc] = 0)
	}, this.lv = function(player, lc, hS) {
		aY.fN.lw(hS, lc) && (aY.fN.lx(lc, al.df[0]), b1.ly(player, lc), a6.lz(lc, al.df[0]))
	}
}

function lR() {
	this.m0 = function(lm, player) {
		k.ll(eU, player, lm), aN.lX.m1(lm, player)
	}, this.m2 = function(player) {
		k.m3(player, 0), aN.lX.m4(player)
	}, this.m5 = function(m6, player) {
		k.m7(m6, player), aN.lX.m8(m6, player)
	}, this.m9 = function(mA) {
		il || fL || aN.lX.mB(mC(), mA)
	}, this.mD = function() {
		il || fL || aN.lX.mE(mC(), jE[0], jE[1], jE[2])
	}, this.mF = function() {
		il || fL || aN.lX.mG(mC())
	}
}

function lV() {
	this.i5 = function(mH) {
		var id, dm, kK;
		for (ae.cq(mH), ae.fx += 2, kK = 8 * ae.size; ae.fx + 8 <= kK;) id = ae.mI(4), dm = ae.mI(9), 0 === id ? this.mJ(id, dm, ae.mI(22)) : 1 === id ? this.mJ(id, dm, ae.mI(10), ae.mI(10)) : 2 === id ? this.mJ(id, dm, ae.mI(10), ae.mI(9)) :
			3 === id || 4 === id ? this.mJ(id, dm, ae.mI(10), ae.mI(22)) : 5 === id ? this.mJ(id, dm, ae.mI(10)) : 6 === id ? this.mJ(id, dm, ae.mI(7)) : 7 === id ? this.mJ(id, dm, ae.mI(1)) : this.mJ(id, dm);
		this.mK()
	}, this.mL = [], this.mK = function() {
		for (var mN = 0, mO = 0, mP = 0, mQ = 0, mR = 0, mS = 0, eD = 0; eD < 512; eD++) mN += h1[eD], mO += ez[eD], mP += eV[eD], mQ += ak.iv.mT[eD];
		mR += ak.iv.mU, mS += iM, this.mL.push(((255 & mN + mO + mP + mQ + mR + mS) << 12) + ((3 & mN) << 10) + ((3 & mO) << 8) + ((3 & mP) << 6) + ((3 & mQ) << 4) + ((3 & mR) << 2) + (3 & mS))
	}, this.mJ = function(id, dm, dp, dr) {
		0 === id ? aW.lS.fc(dm, dp) : 1 === id ? aW.lS.fm(dm, dp, dr) : 2 === id ? aW.lS.ld(dm, dp, dr) : 3 === id ? aW.lS.fj(dm, dp, dr) : 4 === id ? aW.lS.fe(dm, dp, dr) : 5 === id ? aW.lS.lj(dm, dp) : 6 === id ? aW.lS.ln(dm, dp) : 7 === id ?
			aW.lS.lp(dm, dp) : 8 === id ? aW.lS.ls(dm) : aW.lS.mV(dm)
	}
}

function lT() {
	this.fc = function(player, fV) {
		aY.fN.fO(0) && aY.fN.fP(player) && aj.h8(fV) && (aX.mW.mX(0, player, fV), mY.hO(player, fV))
	}, this.fm = function(player, h4, hR) {
		aY.fN.fO(1) && aY.fN.fP(player) && aY.fN.mZ(player, hR) && aY.fN.ma(player, h4, 12, eS) && aY.fN.mb(player, hR) && (a4.i3(player) || a4.hj(player, al.dj[0])) && hH(player) && (aX.mW.mX(1, player, h4, al.dj[0]), aY.fN.mc(player), b1.md(
			player, h4), hK(player))
	}, this.ld = function(player, h4, lc) {
		aY.fN.fO(1) && aY.fN.fP(player) && hL && aY.fN.mZ(player, lc) && aY.fN.me(player, lc) && aY.fN.lu(player, aY.fN.h3(player, h4), lc) && (aX.mW.mX(2, player, h4, lc), a5.lb(player, lc))
	}, this.fj = function(player, h4, fV) {
		aY.fN.fO(1) && aY.fN.fP(player) && aj.h8(fV) && ak.iv.mU !== ak.iv.mf && ak.iv.mT[player] !== ak.iv.mg && 0 !== es[player].length && aY.fN.ma(player, h4, 32, 16) && ak.mh.mi(player, fV) && (aX.mW.mX(3, player, h4, fV), aY.fN.mc(player),
			ak.iv.mj(player))
	}, this.fe = function(player, lg, fV) {
		aY.fN.fO(1) && aY.fN.fP(player) && aj.h8(fV) && ak.fd.mk(player, lg) && ak.mh.ml(fV) && (aX.mW.mX(4, player, lg, fV), aY.fN.mm(player, 8), ak.iv.fe())
	}, this.lj = function(player, hR) {
		aY.fN.fO(1) && aY.fN.fP(player) && (hR = Math.min(hR, ed), a4.hj(player, hR)) && (aX.mW.mX(5, player, hR), a4.mn(player, hR))
	}, this.ln = function(player, lm) {
		(aY.fN.fO(1) || aY.fN.fO(2)) && aY.fN.fP(player) && (lm = Math.min(lm, az.mo - 1), aX.mW.mX(6, player, lm), a6.mp(player, 0, lm))
	}, this.lp = function(player, lq) {
		aY.fN.fO(1) && aY.fN.fP(player) && (aX.mW.mX(7, player, lq), aI.mq(player, lq))
	}, this.ls = function(player) {
		(aY.fN.fO(0) || aY.fN.fO(1)) && aY.fN.fP(player) && an.ls(player) && aX.mW.mX(8, player)
	}, this.mV = function(player) {
		an.mV(player), aX.mW.mX(9, player)
	}
}

function mr() {
	var mt;
	this.ms = [], this.mt = document.createElement("div"), this.mu = function(fw) {
		var title = document.createElement("h2");
		title.textContent = fw, title.style.margin = "0", title.style.marginBottom = "0.6em", title.style.fontSize = "1.4em", title.style.overflowWrap = "break-word", this.mt.appendChild(title)
	}, this.mv = function(fw) {
		var mw = document.createElement("p");
		mw.textContent = fw, mw.style.fontSize = "0.75em", mw.style.lineHeight = "1.2em", mw.style.marginBottom = "0", this.mt.appendChild(mw)
	}, this.mx = function(my, fontSize = "1em") {
		var mt = document.createElement("div");
		mt.innerHTML = my, mt.style.fontSize = fontSize, mt.style.lineHeight = "1.2em", this.mt.appendChild(mt)
	}, this.mz = function(n0) {
		for (var n1 = n0.n1, eZ = n1.length, eD = 0; eD < eZ; eD++) this.mt.appendChild(n1[eD])
	}, this.n2 = function(n3) {
		this.ms.push(n3), this.mt.appendChild(n3.dE)
	}, this.resize = function() {
		for (var eZ = this.ms.length, eD = 0; eD < eZ; eD++) this.ms[eD].resize && this.ms[eD].resize()
	}, (mt = this.mt).style.position = "absolute", mt.style.height = "auto", mt.style.padding = "0.5em"
}

function n4(n5, n6) {
	var eD, mt = document.createElement("div");

	function nC() {
		var eD, nD, g9, eh, ei, n9 = aK.nE * mt.offsetWidth,
			nF = new Float64Array(function(n9) {
				var g3 = .25 * aY.fy.nA(.6) * aK.fu;
				return Math.max(Math.floor(n9 / g3), 1)
			}(n9)),
			nG = b0.nG,
			nH = (n9 - (nF.length + 1) * b0.gap) / (nF.length * aK.nE);
		for (nF.fill(nG), eD = 0; eD < n6.length; eD++) nD = (ei = n6[eD].mt).style, g9 = Math.min(...nF), eh = nF.indexOf(g9), nD.top = aY.fy.nI(g9), nD.left = aY.fy.nI(nG + eh * (nH + nG)), nD.width = aY.fy.nI(nH), aY.fy.nJ(ei, 5), nF[eh] += ei
			.offsetHeight + 3 * nG;
		mt.style.height = aY.fy.nI(Math.max(...nF) - 2 * nG)
	}
	for (this.n7 = n6, this.resize = function() {
			var eD;
			for (eD = 0; eD < n6.length; eD++) n6[eD].resize();
			nC(), nC()
		}, mt.style.width = "100%", mt.style.maxWidth = "100%", n5.style.lineHeight = "1.5em", n5.style.overflowX = "hidden", n5.style.overflowY = "auto", eD = 0; eD < n6.length; eD++) mt.appendChild(n6[eD].mt);
	n5.appendChild(mt)
}

function nK(title, nL, backgroundColor = aZ.kX) {
	var nM = document.createElement("button");

	function lN() {
		this.style.backgroundColor = aZ.lN(backgroundColor, 50)
	}

	function nP() {
		this.style.backgroundColor = backgroundColor
	}

	function nO() {
		this.style.backgroundColor = backgroundColor, this.blur()
	}
	this.button = nM, this.nN = nL, nM.innerText = title, nM.style.color = aZ.gE, nM.style.userSelect = "none", nM.style.outline = "none", nM.style.overflowWrap = "break-word", nM.style.backgroundColor = backgroundColor, nM.style.border = "none", nM
		.style.font = "inherit", nM.style.fontSize = "1em", nM.style.padding = "0em 0.3em", nM.onclick = nL, nM.addEventListener("mouseover", lN), nM.addEventListener("mouseout", nO), nM.addEventListener("focus", lN), nM.addEventListener("blur", nP)
}

function nQ(nR, n5) {
	var mt, eD;
	for (this.resize = function() {
			for (var eD = 0; eD < nR.length; eD++) aY.fy.nJ(nR[eD].button);
			mt.style.gap = mt.style.padding = aY.fy.nI(b0.nG)
		}, (mt = document.createElement("div")).style.display = "grid", mt.style.gridTemplateColumns = "repeat(auto-fill, minmax(9.5em, 1fr))", mt.style.overflowY = "auto", mt.style.gridAutoRows = "5.3em", mt.style.maxHeight = "100%", eD = 0; eD < nR
		.length; eD++) nR[eD].button.style.fontSize = "1.2em", mt.appendChild(nR[eD].button);
	n5.appendChild(mt)
}

function nT(nU, nV) {
	this.fI = 0, this.fJ = 0, this.g3 = 0, this.g9 = 0, this.resize = function() {
		this.g9 = Math.min(aY.fy.nA(.5) * nU[1] * aK.fu, aK.g9 - 2 * b0.gap), this.g3 = Math.min(this.g9 * (nU[0] / nU[1]), aK.g3 - 2 * b0.gap), this.g9 = nU[1] * this.g3 / nU[0], this.fI = b0.gap + nV[0] * (aK.g3 - this.g3 - 2 * b0.gap), this
			.fJ = b0.gap + nV[1] * (aK.g9 - this.g9 - 2 * b0.gap)
	}, this.nW = function() {
		return this.fI + .5 * this.g3
	}
}

function nX(nY) {
	function click() {
		var value = 1 - nY.value;
		this.textContent = (value ? "🟢 " : "⚪ ") + aV.nZ[121], b9.na.nb(nY.fx, value)
	}
	var dE;
	this.dE = document.createElement("p"), (dE = this.dE).textContent = (nY.value ? "🟢 " : "⚪ ") + aV.nZ[121], dE.style.margin = "0", dE.style.cursor = "pointer", dE.addEventListener("click", click)
}

function nc(n5, my) {
	var mt = document.createElement("div");
	this.nd = mt, this.resize = function() {
		mt.style.padding = aY.fy.nI(b0.nG), mt.style.lineHeight = aY.fy.nI(aY.fy.ne(.035))
	}, n5.style.overflowX = "hidden", n5.style.overflowY = "auto", mt.innerHTML = my, n5.appendChild(mt)
}

function nf(ng) {
	var mt = document.createElement("div");
	this.dE = mt, this.resize = function() {
		for (var eZ = ng.length, eD = 1; eD < eZ; eD++) aY.fy.nJ(ng[eD], 4)
	};
	var eD, eZ = ng.length;
	for (mt.style.width = "100%", mt.style.height = "2.7em", mt.style.marginTop = "0.6em", mt.style.border = "inherit", eD = 0; eD < eZ; eD++) ng[eD].style.verticalAlign = "top", ng[eD].style.width = (100 / eZ).toFixed(2) + "%", ng[eD].style.height =
		"100%", ng[eD].style.fontSize = "0.75em", mt.appendChild(ng[eD])
}

function nh(nY) {
	var dE;
	this.dE = document.createElement("input"), (dE = this.dE).type = "text", dE.id = "input" + nY.title, dE.value = nY.value, dE.style.width = "100%", dE.style.userSelect = "none", dE.style.outline = "none", dE.style.resize = "none", dE.style
		.border = "inherit", dE.style.font = "inherit", dE.style.color = aZ.gE, dE.style.backgroundColor = aZ.kU, dE.style.fontSize = "1em", dE.style.padding = "0.1em 0.2em", -1 !== nY.fx && (dE.addEventListener("blur", function() {
			b9.na.nb(nY.fx, dE.value.trim())
		}), dE.addEventListener("keypress", function(event) {
			"Enter" === event.key && (event.preventDefault(), b9.na.nb(nY.fx, dE.value.trim()))
		}))
}

function ni(n5, nj, h4) {
	var nk, eD, nl = new Array(nj.length),
		n6 = new Array(nj.length);
	for (this.resize = function() {
			for (var eZ = nj.length, eD = 0; eD < eZ; eD++) 0 < eD && aY.fy.nJ(nl[eD], 8)
		}, nk = document.createElement("div"), n5.style.overflowX = "hidden", n5.style.overflowY = "auto", ! function() {
			var eD, ei, eZ = nj.length;
			for (eD = 0; eD < eZ; eD++)
				for (nl[eD] = document.createElement("div"), nl[eD].style.display = "flex", nl[eD].style.width = "100%", nl[eD].style.height = "2.5em", nl[eD].style.backgroundColor = eD % 2 == 0 ? aZ.kj : aZ.ka, n6[eD] = new Array(nj[0].length), hY =
					0; hY < nj[0].length; hY++) n6[eD][hY] = ei = document.createElement("div"), ei.style.display = "flex", ei.style.width = "100%", ei.style.height = "100%", ei.style.justifyContent = "center", ei.style.alignItems = "center", ei
					.innerHTML = nj[eD][hY], 0 < hY && aY.fy.nJ(ei, 4), nl[eD].appendChild(ei)
		}(), eD = 0; eD < nj.length; eD++) nk.appendChild(nl[eD]);
	n5.appendChild(nk)
}

function nn(nY) {
	this.n1 = [];
	var no = this.n1;

	function click() {
		for (var eD = 0; eD < no.length; eD++) no[eD].textContent = no[eD].textContent.replace("🟢", "⚪");
		this.textContent = this.textContent.replace("⚪", "🟢"), b9.na.nb(nY.fx, parseInt(this.name))
	}
	for (var np, eZ = nY.nq.length, eD = 0; eD < eZ; eD++)(np = document.createElement("p")).textContent = "⚪ " + nY.nq[eD], np.style.margin = "0", np.name = "" + eD, np.style.cursor = "pointer", np.style.fontSize = "1em", np.addEventListener(
		"click", click), no.push(np);
	no[nY.value].textContent = no[nY.value].textContent.replace("⚪", "🟢")
}

function nr(title, ns) {
	var eD, nk = document.createElement("div"),
		nt = document.createElement("div"),
		nu = document.createElement("div"),
		nv = document.createElement("div");
	for (this.nw = nu, this.show = function() {
			document.body.appendChild(nk)
		}, this.o0 = function() {
			document.body.removeChild(nk)
		}, this.resize = function() {
			var eD, dE, eZ = ns.length,
				o1 = aY.fy.ne(.1),
				o2 = aY.fy.ne(.08 + .04 * (aK.o3 < 1));
			for (nt.style.height = aY.fy.nI(o1), aY.fy.nJ(nt, 2), nv.style.top = aY.fy.nI(aK.g9 / aK.nE - o2), nv.style.height = aY.fy.nI(o2), aY.fy.nJ(nv, 8), nu.style.top = aY.fy.nI(o1), nu.style.height = nu.style.maxHeight = aY.fy.nI(aK.g9 / aK
					.nE - o1 - o2), nv.style.font = nt.style.font = nu.style.font = aY.fy.fz(0, aY.fy.ne(.02)), eD = 0; eD < eZ; eD++)(dE = ns[eD].button).style.top = "0", dE.style.left = (100 * eD / eZ).toFixed(2) + "%", dE.style.width = (100 / eZ)
				.toFixed(2) + "%", dE.style.height = "100%", 0 < eD && aY.fy.nJ(dE, 4)
		}, nk.style.position = "absolute", nk.style.top = "0", nk.style.left = "0", nk.style.width = "100%", nk.style.height = "100%", nt.style.position = "absolute", nt.style.top = "0", nt.style.left = "0", nt.style.width = "100%", nt.style
		.display = "flex", nt.style.backgroundColor = aZ.kX, nv.style.position = "absolute", nv.style.left = "0", nv.style.width = "100%", nu.style.position = "absolute", nu.style.width = "100%", nu.style.backgroundColor = aZ.kX, ! function() {
			var eD;
			for (eD = 0; eD < ns.length; eD++) ns[eD].button.style.position = "absolute", ns[eD].button.style.fontSize = "1.2em"
		}(), eD = 0; eD < ns.length; eD++) nv.appendChild(ns[eD].button);
	nt.appendChild(function() {
		var nz = document.createElement("h1");
		return nz.textContent = title, nz.style.margin = "auto", nz.style.fontSize = "2.3em", nz
	}()), nk.appendChild(nu), nk.appendChild(nt), nk.appendChild(nv)
}

function o4() {
	var o5 = document.createElement("textarea"),
		o7 = (this.o6 = o5, !0);

	function oD() {
		o5.select(), document.execCommand("copy")
	}
	this.resize = function() {
			o5.style.padding = aY.fy.nI(b0.nG)
		}, this.o8 = function(o9) {
			o5.value = o9
		}, this.oA = function() {
			return o5.value
		}, this.oB = function() {
			o5.select()
		}, this.clear = function() {
			o5.value = ""
		}, this.oC = function() {
			o7 && navigator.clipboard ? (o5.select(), navigator.clipboard.writeText(o5.value).catch(function() {
				o7 = !1, oD()
			})) : oD()
		}, o5.setAttribute("name", "replayData"), o5.setAttribute("id", "replayDataField"), o5.setAttribute("autocomplete", "off"), o5.setAttribute("placeholder", "Insert the replay link here!"), o5.style.top = "0", o5.style.left = "0", o5.style
		.width = "100%", o5.style.height = "100%", o5.style.userSelect = "none", o5.style.outline = "none", o5.style.resize = "none", o5.style.border = "none", o5.style.color = aZ.gE, o5.style.backgroundColor = aZ.kU, o5.style.fontSize = "1.2em"
}

function cb() {
	this.nN = new oE, this.dG = new oF, this.na = new oG, this.cq = function() {
		this.dG.cq(), (new oH).cq()
	}
}

function oF() {
	function oI(eD, title, type, nq = null, oO = 0, dc = 0) {
		b9.dG.data.push({
			fx: eD,
			title: title,
			type: type,
			nq: nq,
			value: oO,
			oO: oO,
			dc: dc
		})
	}

	function oJ(eD, title, type, nq = null, oO = "", dc = 0) {
		b9.dG.data.push({
			fx: eD,
			title: title,
			type: type,
			nq: nq,
			value: oO,
			oO: oO,
			dc: dc
		})
	}

	function oK(kK) {
		for (var eD = b9.dG.data.length; eD < kK; eD++) b9.dG.data.push(null)
	}
	this.data = [], this.cq = function() {
		oI(0, "", 1, ["English", "Русский", "Türkçe", "Española", "Deutsch"], 0, 4), oI(1, "", 1, null, 1), oI(2, "", 0, [0, 1]), oJ(3, "Username", 2), oI(4, "Font5", 1, ["Default", "Custom"]), oJ(5, "", 2, null, "Trebuchet MS", 1), oI(6, "", 0,
			[0, 1]), oI(7, "", 0, [0, 1], 1), oI(8, "", 0, [0, 1]), oI(9, "", 1, null, 1), oI(10, "", 1, null), oI(11, "", 1, null, 1), oK(100), oJ(100, "Username", 2), oJ(101, "Password", 2), oJ(102, "Emojis", 2), oJ(103, "Colors", 2), oJ(
			104, "Clan", 2), oJ(105, "AccountName", 2), oJ(106, "Password", 2), oI(107, null, 0), oI(108, null, 0), oI(109, null, 0), oJ(110, null, 2), oI(111, null, 0), oI(112, null, 0), oK(180), oI(180, "R0", 0), oI(181, "R1", 0)
	}, this.translate = function() {
		this.data[0].title = "🌐 " + aV.nZ[101], this.data[1].title = aV.nZ[102], this.data[2].title = aV.nZ[103], this.data[5].title = aV.nZ[104], this.data[6].title = aV.nZ[105], this.data[7].title = aV.nZ[106], this.data[8].title = aV.nZ[107],
			this.data[9].title = aV.nZ[108], this.data[10].title = aV.nZ[109], this.data[11].title = aV.nZ[110], this.data[1].nq = [aV.nZ[111], aV.nZ[112], aV.nZ[113], aV.nZ[114]], this.data[9].nq = [aV.nZ[112], aV.nZ[115], aV.nZ[116]], this
			.data[10].nq = [aV.nZ[109] + " 1", aV.nZ[117] + " 1", aV.nZ[109] + " 2", aV.nZ[117] + " 2"], this.data[11].nq = [aV.nZ[118], aV.nZ[119], aV.nZ[120]]
	}, this.nb = function(fx, value) {
		this.data[fx].value = value
	}, this.dH = function(fx, value) {
		this.nb(fx, value), b9.nN.save(fx, String(value)), b9.nN.save(fx, String(this.data[fx].dc), !0)
	}, this.oL = function() {
		for (var eD = 0; eD < this.data.length; eD++) this.data[eD] && (b9.nN.save(eD, String(this.data[eD].value)), b9.nN.save(eD, String(this.data[eD].dc), !0))
	}, this.oM = function(fx) {
		return Number(this.data[fx].value)
	}, this.oN = function(fx) {
		return String(this.data[fx].value)
	}
}

function oE() {
	this.oP = function(fx, dc = !1) {
		return Number(this.oQ(fx, dc))
	}, this.oQ = function(fx, dc = !1) {
		var db = null;
		return 0 === b7.id ? b7.oR && (db = b7.oR.getItem((dc ? "v" : "d") + fx)) : 1 === b7.id ? db = b7.oS.loadString((dc ? 1e3 : 2e3) + fx) : 2 === b7.id && (db = b7.oT[(dc ? "v" : "d") + fx]), db && 0 !== db.length ? db : null
	}, this.save = function(fx, value, dc = !1) {
		0 === b7.id ? b7.oR && b7.oR.setItem((dc ? "v" : "d") + fx, value) : 1 === b7.id ? b7.oS.saveString((dc ? 1e3 : 2e3) + fx, value) : 2 === b7.id && (b7.oT["d" + fx] = value, b7.oU.postMessage((dc ? "v" : "d") + fx + " " + value))
	}
}

function oH() {
	this.cq = function() {
		! function() {
			var data = b9.dG.data;
			0 === data[2].dc && (aK.g9 > aK.g3 || 0 !== b7.id) && (data[2].value = data[2].oO = 1);
			0 === data[100].dc && (data[100].value = data[100].oO = (0 === b7.id ? "Player " : 1 === b7.id ? "Android User " : "iOS User ") + Math.floor(1e3 * Math.random()));
			data[0].value = data[0].oO = aV.oX()
		}();
		var eD, db, data = b9.dG.data,
			eZ = data.length;
		for (eD = 0; eD < eZ; eD++) data[eD] && data[eD].dc === b9.nN.oP(eD, !0) && (db = b9.nN.oQ(eD), data[eD].value = null === db ? data[eD].oO : 2 === data[eD].type ? db : Number(db));
		b9.dG.data[10].value = b9.dG.data[10].oO
	}
}

function oG() {
	this.nb = function(fx, value) {
		console.log("update " + fx + " " + value), b9.dG.data[fx].value !== value && (b9.dG.dH(fx, value), 0 === fx ? (ar.oY(0), aV.cq(), ar.oY(2)) : 1 === fx ? aK.oZ(1) : 2 === fx ? aK.oZ(0) : 5 === fx && (aY.fy.oa(), aK.oZ(0)))
	}, this.ob = function() {
		for (var data = b9.dG.data, eD = 0; eD < 180; eD++) data[eD] && b9.dG.dH(eD, data[eD].oO);
		aY.fy.oa(), aK.oZ(1), aV.cq()
	}
}

function bM() {
	this.oc = new od, this.oe = new og, this.cq = function() {
		this.oc.cq()
	}
}

function og() {
	this.oh = function(size) {
		for (var oi = ae, dl = [], eD = 0; eD < size; eD++) dl.push(String.fromCharCode(oi.mI(16)));
		return dl.join("")
	}, this.oj = function(fw) {
		return 20 < (fw = fw.trim()).length ? fw.substring(0, 20) : fw
	}
}

function od() {
	var ok = new Uint8Array(78);
	this.cq = function() {
		var eD;
		for (ok[50] = 37, eD = 0; eD < 10; eD++) ok[eD + 3] = eD + 1;
		for (eD = 0; eD < 26; eD++) ok[eD + 20] = eD + 11, ok[eD + 52] = eD + 38
	}, this.ol = function(fw) {
		return fw.trim().replace(new RegExp("[^a-zA-Z0-9_\\-]", "g"), "_")
	}, this.om = function(fw, size) {
		if ((fw = this.ol(fw)).length > size) return fw.substring(0, size);
		for (; fw.length < size;) fw += "_";
		return fw
	}, this.on = function(fw) {
		for (var oo = ok, eZ = fw.length, dl = new Uint8Array(eZ), eD = 0; eD < eZ; eD++) dl[eD] = oo[fw.charCodeAt(eD) - 45];
		return dl
	}, this.op = function(oq) {
		ab.d2(6 * oq.length), this.or(oq), ae.cq(ab.mH)
	}, this.or = function(oq) {
		var eZ = oq.length,
			g3 = ab;
		for (let eD = 0; eD < eZ; eD++) g3.os(6, oq[eD])
	}, this.ot = function(fw) {
		this.or(this.on(fw))
	}, this.ou = function(fw, size) {
		this.or(this.on(this.om(fw, size)))
	}
}

function ov() {
	var g3, g9, ow;

	function pM(pN, ei, pK, p2, pF) {
		ei = pL(pN, ei + 1 + 2 * p2 & 3);
		! function(pN, pO) {
			return 1 < Math.abs(pN % g3 - pO % g3) || 1 < Math.abs(pR(pN) - pR(pO))
		}(pN, ei) && 0 === pF[ei << 2] && (pF[ei << 2] = pK)
	}

	function pR(eg) {
		return Math.floor((eg + .5) / g3) % g9
	}

	function pL(eg, ei) {
		return eg + ow[ei]
	}
	this.ox = function(fw) {
		var eD, oy, eZ, p0, oi = ae;
		for (ad.oc.op(ad.oc.on(fw)), ap.e8 = g3 = oi.mI(12), ap.e9 = g9 = oi.mI(12), ow = [-g3, -1, g3, 1], ap.pB = document.createElement("canvas"), ap.pB.width = ap.e8, ap.pB.height = ap.e9, ap.p7 = ap.pB.getContext("2d", {
				alpha: !1
			}), ap.p8 = ap.p7.getImageData(0, 0, ap.e8, ap.e9), ap.pC = ap.p8.data, aY.pD.pE(ap.pC), eZ = oi.mI(12), oy = oi.mI(5), p0 = p4(g3 * g9 - 1), eD = 0; eD < eZ; eD++) ! function(oz, eg, p1, p2) {
			var eD, ei, oi = ae,
				pF = ap.pC,
				pG = eg,
				pH = eg,
				pI = 0,
				pJ = 1 + p1,
				pK = 2 - p1;
			for (pF[eg << 2] = pJ, eD = 0; eD < oz; eD++) ei = oi.mI(2), eg = pL(eg, ei), pF[eg << 2] === pJ ? pI % 2 == 1 && pM(pH, pI + 2 * p2 + 3, pK, p2, pF) : pF[eg << 2] = pJ, pM(eg, ei, pK, p2, pF), pM(pH, ei, pK, p2, pF), pH = eg,
				pI = ei;
			pL(eg, 0) === pG ? (pM(eg, 0, pK, p2, pF), pM(pG, 0, pK, p2, pF)) : pL(eg, 1) === pG && (pM(eg, 0, pK, p2, pF), pM(pG, 2, pK, p2, pF));
			0 === oz && (pM(pG, 0, pK, p2, pF), pM(pG, 2, pK, p2, pF))
		}(oi.mI(oy), oi.mI(p0), 1 === oi.mI(1), 1 === oi.mI(1));
		var fI, fJ, pS, pT, pU, pV, pF = ap.pC,
			pW = !0,
			pX = ap.ih.pY[ap.pZ].pX,
			pa = ap.ih.pY[ap.pZ].pa;
		for (fJ = 0; fJ < g9; fJ++)
			for (pT = !0, pU = pW, fI = pV = 0; fI < g3; fI++) pS = 4 * fJ * g3 + 4 * fI, pV <= fI && 0 < pF[pS] && (pU = 2 === pF[pS], pT) && (pT = !1, pU !== pW) ? (pW = pU, pV = fI + 1, fI = -1) : (pU ? (pF[pS] = pa[0], pF[1 + pS] = pa[1], pF[
				2 + pS] = pa[2]) : (pF[pS] = pX[0], pF[1 + pS] = pX[1], pF[2 + pS] = pX[2]), pF[3 + pS] = 255);
		ap.p7.putImageData(ap.p8, 0, 0), ap.p9 = !0, ap.pA.cq(), b3.d1 = !0
	}
}

function bS() {
	var fI, fJ, g3, g9, pb, pc, pd, pe, player, dl;

	function pm() {
		return function() {
			var eD;
			for (eD = 0; eD < 8; eD++)
				if (fI = eR(g3 * aL.random(), aL.value(100)), fJ = eR(g9 * aL.random(), aL.value(100)), pu()) return 1;
			return
		}() || function() {
			var gs, gv, hY, pk, hh, pj;
			for (gs = eR(g3 * aL.random(), aL.value(100)), gv = eR(g9 * aL.random(), aL.value(100)), hY = 40; 1 <= hY; hY--)
				for (pk = g9 - hY; 0 <= pk; pk -= 40)
					for (fJ = (pk + gv) % g9, hh = 40; 1 <= hh; hh--)
						for (pj = g3 - hh; 0 <= pj; pj -= 40)
							if (fI = (pj + gs) % g3, pu()) return 1;
			return
		}()
	}

	function pu() {
		for (var eg, pw, gap = eR(pb - pe, 2), px = pd + fJ * pb + gap, py = pc + fI * pb + gap, pv = px + pe - 1; px <= pv; pv--)
			for (pw = py + pe - 1; py <= pw; pw--)
				if (eg = a2.ps(pw, pv), !a2.eb(eg) || a2.hU(eg)) return;
		return 1
	}

	function pn(pj, pk) {
		pf(), pz(pj - 2, pk - 2)
	}

	function pf() {
		h1[player] = 0, eV[player] = 0, ez[player] = q0[player] = 0, ea[player] = [], er[player] = [], es[player] = [], ev[player] = [], ht[player] = hw[player] = hs[player] = hv[player] = 0
	}

	function pz(pj, pk) {
		var eg, eD, q2, q3;
		for (h1[player] = 1, eV[player] = player < h0 ? q1 : iS[b.hS[player - h0]], ht[player] = pj + 10, hw[player] = pk + 10, hv[player] = hs[player] = 0, q2 = pj; q2 < pj + 4; q2++)
			for (q3 = pk; q3 < pk + 4; q3++)(pj < q2 && q2 < pj + 3 || pk < q3 && q3 < pk + 3) && (eg = a2.ps(q2, q3), a2.eb(eg)) && (ht[player] = q2 < ht[player] ? q2 : ht[player], hs[player] = q2 > hs[player] ? q2 : hs[player], hw[player] = q3 <
				hw[player] ? q3 : hw[player], hv[player] = q3 > hv[player] ? q3 : hv[player], dl[ez[player]] = eg, ez[player]++, a2.q4(eg, player));
		for (q0[player] = ez[player], eD = ez[player] - 1; 0 <= eD; eD--) a2.q5(dl[eD], player) ? (a2.ec(dl[eD], player), er[player].push(dl[eD])) : a2.q6(dl[eD]) ? (a2.ec(dl[eD], player), es[player].push(dl[eD])) : a2.q7(dl[eD]) && (a2.ec(dl[eD],
			player), ev[player].push(dl[eD]))
	}

	function pt(pj, pk) {
		for (var eg, pw, pv = pk; pk - 6 < pv; pv--)
			for (pw = pj; pj - 6 < pw; pw--)
				if (eg = a2.ps(pw, pv), a2.hU(eg)) return;
		return 1
	}
	this.cq = function() {
		var eD, pj, pk;
		if (dl = new Array(12), pe = 6, pb = 10, g3 = eR(ap.e8, pb), g9 = eR(ap.e9, pb), pc = eR(ap.e8 - pb * g3, 2), pd = eR(ap.e9 - pb * g9, 2), fa)
			for (eD = 0; eD < h0; eD++) player = eD, pf(), h1[player] = 1;
		if (aU.ig && aU.ih.pg) {
			for (player = 0; player < ed; player++)
				if (1 !== h1[player]) {
					if (player < pl) {
						if (function() {
								var pj = aU.ih.pg[player] + 1,
									pk = aU.ih.pr[player] + 1;
								if (3 < pj && pj < ap.e8 - 5 && 3 < pk && pk < ap.e9 - 5 && a2.eb(a2.ps(pj, pk)) && pt(pj + 3, pk + 3)) return pn(pj + 1, pk + 1), 1;
								return
							}()) continue;
						if (pm()) {
							pj = pc + fI * pb + eR(pb, 2), pk = pd + fJ * pb + eR(pb, 2), pn(pj, pk);
							continue
						}
					}
					pf()
				}
		} else ! function() {
			var pj, pk;
			for (player = 0; player < ed; player++) 1 !== h1[player] && (player < pl && pm() ? (pj = pc + fI * pb + eR(pb, 2), pk = pd + fJ * pb + eR(pb, 2), pn(pj, pk)) : pf())
		}();
		b1.eX[7] = ez[eU], b1.eX[8] = eV[eU]
	}, this.q8 = function(hR, q9, qA) {
		var eD, pj, pk, eg, fI, fJ;
		for (player = hR, eD = 0; eD < 20; eD++)
			for (pj = q9 + eD; q9 - eD <= pj; pj--)
				for (pk = qA + eD; qA - eD <= pk; pk--)
					if ((pj === q9 + eD || pj === q9 - eD || pk === qA + eD || pk === qA - eD) && 3 < pj && pj < ap.e8 - 5 && 3 < pk && pk < ap.e9 - 5 && a2.eb(a2.ps(pj, pk)) && pt(pj + 3, pk + 3)) {
						if (0 < ez[player]) {
							for (fJ = fI = eg = void 0, fI = hs[player]; fI >= ht[player]; fI--)
								for (fJ = hv[player]; fJ >= hw[player]; fJ--) eg = 4 * (fJ * ap.e8 + fI), a2.qC(player, eg) && (a2.qD(eg), ez[player]--);
							pf()
						}
						return pz(pj - 1, pk - 1), !0
					} return !1
	}, this.qE = function(hR) {
		player = hR, pm() ? pn(pc + fI * pb + eR(pb, 2), pd + fJ * pb + eR(pb, 2)) : pf()
	}
}

function qF() {
	aD.qG(), gD.setTransform(h6, 0, 0, h6, 0, 0), gD.imageSmoothingEnabled = h6 < 3, gD.drawImage(ap.pB, p.je(), p.gB()), am.qH.gC(), gD.drawImage(qI, p.je(), p.gB()), aD.gC(), gD.imageSmoothingEnabled = !1, gD.setTransform(1, 0, 0, 1, 0, 0), ak.qH
		.gC(), a6.gC(), e.gC(), (k7 ? (b5.gC(), aa) : (k.gC(), s.gC(), o.gC(), aa.gC(), aI.gC(), t.gC(), p.gC(), n.gC(), b5.gC(), r.gC(), m.gC(), j.gC(), i.gC(), u.gC(), b2.gC(), aF)).gC()
}

function qJ(qK, g3, g9) {
	qK.clearRect(0, 0, g3, g9), qK.fillStyle = aZ.kY, qK.fillRect(0, 0, g3, g9)
}

function qL(qK, g3, g9, qM) {
	qK.fillStyle = aZ.gE, qK.fillRect(0, 0, g3, qM), qK.fillRect(0, 0, qM, g9), qK.fillRect(g3 - qM, 0, qM, g9), qK.fillRect(0, g9 - qM, g3, qM)
}

function qN(qK, fI, fJ, gG, qM, eg, qO) {
	qK.fillStyle = aZ.gE;
	var eg = Math.floor(gG * eg),
		qQ = (eg += (eg - qM) % 2, Math.floor((eg - qM) / 2)),
		gG = Math.floor((gG - eg) / 2);
	qK.fillRect(fI + gG, fJ + gG + qQ, eg, qM), qO && qK.fillRect(fI + gG + qQ, fJ + gG, qM, eg)
}

function qS() {
	this.qT = null, this.cq = function(qT) {
		this.qT = qT, k.qU(this.qT)
	}, this.qV = function(qW) {
		var ge = (this.qT[qW].qX - this.qT[1 - qW].qX) / 10,
			ge = 8 / (1 + Math.pow(2, ge / 32)),
			ge = Math.floor(10 * ge + .5),
			qZ = this.qa(this.qT[qW].qX + ge + 1),
			ge = this.qa(this.qT[1 - qW].qX - ge);
		0 === qW ? k.qc(this.qT, qZ, ge, ["rgba(10,140,10,0.75)", "rgba(140,10,10,0.75)"]) : k.qc(this.qT, ge, qZ, ["rgba(140,10,10,0.75)", "rgba(10,140,10,0.75)"])
	}, this.qa = function(qX) {
		return 16e3 <= (qX = qX < 0 ? 0 : 16e3 < qX ? 16e3 : qX) ? "Unknown" : (qX / 10).toFixed(1)
	}
}

function bL() {
	this.oc = new qd, this.oe = new qe, this.cq = function() {
		this.oc.cq()
	}
}

function qe() {
	this.ot = function(fw) {
		for (var eZ = fw.length, g3 = ab, eD = 0; eD < eZ; eD++) g3.os(16, fw.charCodeAt(eD))
	}
}

function qd() {
	var qf = new Uint8Array(64);
	this.cq = function() {
		var eD;
		for (qf[0] = 45, qf[37] = 95, eD = 0; eD < 10; eD++) qf[eD + 1] = 48 + eD;
		for (eD = 0; eD < 26; eD++) qf[eD + 11] = 65 + eD, qf[eD + 38] = 97 + eD
	}, this.qg = function(qh) {
		for (var oi = ae, oq = new Uint8Array(qh), eD = 0; eD < qh; eD++) oq[eD] = oi.mI(6);
		return oq
	}, this.qi = function(oq) {
		for (var eZ = oq.length, qj = qf, dl = [], eD = 0; eD < eZ; eD++) dl.push(String.fromCharCode(qj[oq[eD]]));
		return dl.join("")
	}
}

function bT() {
	var qk, ql, qm;
	qk = [32, 65, 191, 913, 931], ql = [64, 127, 688, 930, 1155], qm = new Array(qk.length + 1);
	for (var eD = 0; eD < qm.length; eD++) {
		qm[eD] = 0;
		for (var hY = eD - 1; 0 <= hY; hY--) qm[eD] += ql[hY] - qk[hY]
	}

	function qs(iK) {
		for (var eD = qk.length - 1; 0 <= eD; eD--)
			if (iK >= qk[eD] && iK < ql[eD]) return eD;
		return -1
	}
	this.oj = function(fw) {
		return 0 !== (fw = fw.trim()).indexOf("Bot ") && 0 !== fw.indexOf("[Bot] ") && function(fw, qp, qq) {
			var eZ = (fw = fw.trim()).length;
			if (eZ < qp || qq < eZ) return !1;
			for (var iK, qr = 0, eD = 0; eD < eZ; eD++)
				if (iK = fw.charCodeAt(eD), qr += 65 <= iK && iK <= 90 || 1040 <= iK && iK <= 1071 ? 1 : 0, -1 === qs(iK)) return !1;
			if (3 < qr && qr > Math.floor(eZ / 2)) return !1;
			return !0
		}(fw, 3, 20)
	}, this.qt = function(fw) {
		for (var eZ = (fw = fw.trim()).length, dl = [], eD = 0; eD < eZ; eD++) {
			var iK, eg = qs(iK = fw.charCodeAt(eD));
			dl.push(qm[eg] + iK - qk[eg])
		}
		return dl
	}, this.ox = function(dl) {
		for (var iK, hh, fw = "", eZ = dl.length, eD = 0; eD < eZ; eD++)
			for (hh = 1; hh < qm.length; hh++)
				if (dl[eD] < qm[hh]) {
					iK = qk[hh - 1] + dl[eD] - qm[hh - 1], fw += String.fromCharCode(iK);
					break
				} return fw
	}, this.qu = function(fw) {
		for (var dl = this.qt(fw), result = "", eD = 0; eD < dl.length; eD++) result = (result += dl[eD] < 10 ? "00" : dl[eD] < 100 ? "0" : "") + dl[eD].toString(10);
		return result
	}, this.qv = function(fw) {
		for (var dl = new Array(Math.floor(fw.length / 3)), eD = 0; eD < fw.length; eD += 3) dl[Math.floor(eD / 3)] = parseInt(fw.substring(eD, eD + 3));
		return this.ox(dl)
	}, this.qw = function(fw) {
		for (var db, dl = [fw.length], eD = 0; eD < fw.length; eD++) dl[eD] = fw.charCodeAt(eD) - 48;
		var result = "";
		for (eD = 0; eD < fw.length; eD++) eD === fw.length - 1 || 51 < 10 * dl[eD] + dl[eD + 1] ? result += dl[eD].toString() : (db = 10 * dl[eD] + dl[eD + 1], result += String.fromCharCode(db + (db < 26 ? 65 : 71)), eD++);
		return result
	}, this.qx = function(fw) {
		for (var iK, result = "", eD = 0; eD < fw.length; eD++) 48 <= (iK = fw.charCodeAt(eD)) && iK < 58 ? result += String.fromCharCode(iK) : 65 <= iK && iK < 75 ? result += "0" + (iK - 65).toString() : 75 <= iK && iK < 91 ? result += (iK - 65)
			.toString() : 97 <= iK && iK < 123 && (result += (iK - 71).toString());
		return result
	}, this.qy = function(fw) {
		for (var eZ = fw.length, dl = [], eD = 0; eD < eZ; eD++)(iK = fw.charCodeAt(eD)) < 58 ? dl.push(fw[eD]) : (iK -= iK < 91 ? 65 : 71, dl.push(String(eR(iK, 10))), dl.push(String(iK - 10 * eR(iK, 10))));
		var eZ = dl.length - 2,
			iK = 0,
			oq = [];
		for (eD = 0; eD < eZ; eD += 3) oq[iK++] = parseInt(dl[eD] + dl[eD + 1] + dl[eD + 2]);
		return oq
	}, this.qz = function() {
		for (var gP, r0 = "", eD = 0; eD < 6; eD++) gP = 48 + aL.random() % 36, gP += 58 <= gP ? 39 : 0, r0 += String.fromCharCode(gP);
		return r0
	}
}

function cS() {
	this.r1 = new r2, this.iw = new r3, this.cq = function() {
		this.iw.cq()
	}
}

function r2() {
	function r5() {
		if (2 === rG) return 1;
		aI.rH(), rG = 2, rI = rJ
	}

	function r8() {
		k.rK(!0), s.j4(!0), t.j4(!0), aI.j4(), aa.rL(), fL && b3.rM.rN(), b3.d1 = !0, ay.rO(), b7.cv.setState(0)
	}
	this.r4 = function() {
		r5() || (aW.fN.mD(), k.r6(247, 0), k.r7(0, 59), f.kC(2700), u.show(!1, !1, !0), r8())
	}, this.r9 = function(rA) {
		var mA = 0,
			rB = !1;
		r5() || (8 === ij ? ((rB = (mA = rA < 0 ? ez[0] >= ez[1] ? 0 : 1 : rA) === eU) ? k.r7(mA, 2) : k.r7(1 - eU, 3), rC.qV(mA), aW.fN.m9(mA)) : hL ? (rB = b4.iL[eU] === b5.rD(), 9 === ij ? (aW.fN.m9(rB ? jE[0] : 512), k.rE(rB)) : ao.iw.i5(
			rB)) : (rB = (mA = jE[0]) === eU, k.rF(mA), aW.fN.m9(mA)), u.show(rB, !1), r8())
	}
}

function r3() {
	var rP;

	function rj(rR, eh) {
		for (var fw = "", eD = eh; eD < rR.length && eD < eh + 4; eD++) fw += (eD === eh ? "" : "   ") + "[" + b4.rb[rR[eD].id] + "]: " + rR[eD].rg.toFixed(Math.max(Math.floor(3 - Math.log10(rR[eD].rg)), 0));
		fw.length && k.ri(0, fw, 45, 0, aY.fy.kT(225, 240, 255), aZ.kY, -1, !1)
	}
	this.rQ = 0, this.rR = null, this.cq = function() {
		rP = 0, this.rQ = 0, this.rR = null
	}, this.i5 = function(rB) {
		var rS = b4.rT[b5.rU()];
		this.rQ = b5.rV(), this.rR = function(rS, rQ) {
				var eD, hh, eZ, iL = b4.iL,
					rT = b4.rT,
					rb = b4.rb,
					rc = b4.rc,
					rd = ez,
					re = h0,
					rf = [],
					fx = 0;
				for (hh = rb.length - 1; 0 <= hh; hh--)
					if (rT[iL[rc[hh][0]]] === rS) {
						for (rf.push({
								id: hh,
								rd: 0,
								player: rc[hh][0],
								rg: 0
							}), eZ = rc[hh].length, eD = 0; eD < eZ; eD++) rf[fx].rd += rd[rc[hh][eD]];
						for (rf[fx].rg = (1 + rh) * re * rf[fx].rd / rQ, eD = 0; eD < fx; eD++)
							if (rf[fx].rd > rf[eD].rd) {
								rf.splice(eD, 0, rf[fx]), rf.pop();
								break
							} fx++
					} 8 < rf.length && (rf.length = 8);
				for (; 0 < rf.length && 0 === rf[rf.length - 1].rd;) rf.pop();
				return rf
			}(rS, this.rQ), n.rX("Team " + b4.fs[rS], 2, 1, 12),
			function(rB, rS) {
				var color;
				rB = rB ? (color = aY.fy.kT(10, 220, 10), "Congratulations! Team " + b4.fs[rS] + " won the game!") : (color = aY.fy.kT(200, 80, 80), "Our alliance was defeated! Team " + b4.fs[rS] + " won the game.");
				k.ri(0, rB, 40, 0, color, aZ.kY, -1, !1)
			}(rB, rS), 0 !== (rB = this.rR).length && (k.ri(0, "The allied clans of the winning team have earned these glorious points:", 40, 0, aZ.gE, aZ.kY, -1, !1), rj(rB, 0), rj(rB, 4)), aW.fN.mF(), f.kC(2700)
	}, this.ix = function() {
		2 === rG && -1 !== rP && (0 === rP ? rP = this.rR && 0 !== this.rR.length ? b3.dY + 8e3 : -1 : b3.dY < rP || (rP = -1, k.ri(255, "Clan rankings and results can also be accessed under:", 735, 0, aZ.gE, aZ.kY, -1, !1), k.ri(255,
			"territorial.io/clans", 736, 0, aZ.gE, aZ.kY, -1, !1), k.ri(255, "territorial.io/clan-results", 736, 0, aZ.gE, aZ.kY, -1, !1)))
	}
}

function cY() {
	this.id = 0, this.dc = 0, this.oR = null, this.oS = null, this.oT = null, this.oU = null, this.cv = new rk, this.cq = function() {
		var self, dc;
		self = this, "undefined" == typeof Android || (dc = Android.getVersion()) < 12 || (self.dc = dc, self.id = 1, self.oS = Android),
			function(self) {
				var dc;
				"undefined" != typeof mwIOSdataX && window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.iosCommandA && (self.id = 2, self.oT = mwIOSdataX, self.oU = window.webkit.messageHandlers.iosCommandA, dc = self
					.oT.version, self.dc = dc ? Number(dc) : 0)
			}(this),
			function(self) {
				var oR;
				if (0 === self.id) {
					try {
						if (!(oR = window.localStorage)) return;
						oR.setItem("tls7", "1"), oR.removeItem("tls7")
					} catch (error) {
						return
					}
					self.oR = oR
				}
			}(this)
	}
}

function rk() {
	this.ro = function() {
		b9.na.ob(), 0 === x.rp() && (y.get().value = b9.dG.data[100].value), 0 === b7.id ? b7.oR && b7.oR.clear() : 1 === b7.id ? b7.oS.saveString(199, "") : 2 === b7.id && b7.oU.postMessage("clear")
	}, this.rq = function() {
		2 === b7.id ? b7.oU.postMessage("showConsentForm") : 1 === b7.id ? b7.oS.setState(7) : at.dI.showCMPScreen()
	}, this.rr = function() {
		this.setState(14)
	}, this.rs = function() {
		var rt;
		return 2 === b7.id && 0 === b7.dc && "string" == typeof(rt = b7.oT.username) ? rt : b9.dG.data[100].value
	}, this.ru = function() {
		var fw = b9.dG.oN(101),
			max = ("string" != typeof(fw = "" === fw ? function() {
				{
					if (2 === b7.id) return b7.oT.password;
					if (1 === b7.id) return 12 <= b7.dc ? b7.oS.loadString(22) : ""
				}
				return a3.rx(9)
			}() : fw) && (fw = ""), Math.floor(Math.pow(2, 48))),
			rw = Math.floor(parseInt(h.qx(fw)));
		return 0 < rw && rw < max ? b9.dG.dH(101, fw) : (rw = Math.floor(1 + (max - 1) * Math.random()), b9.dG.dH(101, fw)), rw
	}, this.ft = function() {
		return 1 === b9.dG.oM(2)
	}, this.ry = function() {
		for (var fw = "", eD = 0; eD < az.mo; eD += 2) fw += az.rz[eD] || az.rz[eD + 1] ? az.rz[eD] && !az.rz[eD + 1] ? "1" : !az.rz[eD] && az.rz[eD + 1] ? "2" : "3" : "0";
		b9.dG.dH(102, fw)
	}, this.setState = function(dX) {
		1 === b7.id && 5 <= b7.dc && b7.oS.setState(dX)
	}, this.s0 = function() {
		var s1;
		1 === b7.id && 7 <= b7.dc ? b7.oS.setState(5) : ((s1 = new URL(window.location)).searchParams.set("v", "" + Math.floor(1e3 * Math.random())), window.location.href = s1.toString())
	}, this.cw = function() {
		1 !== b7.id || b7.dc < 17 || b7.oS.saveString(23, document.documentElement.outerHTML)
	}, this.dM = function() {
		0 === b7.id ? at.dI.cq() : 1 === b7.id ? b7.oS.prepareAd("1688441405") : 2 === b7.id && (0 === b7.dc ? b7.oU.postMessage("prepare ad 4500876070") : b7.oU.postMessage("loadAds 4500876070"))
	}, this.da = function(dZ) {
		return 0 === b7.id ? !!at.dI.dV() : 1 === b7.id ? 12 <= b7.dc && (b7.oS.presentAd(dZ), !0) : 2 === b7.id && (0 === b7.dc ? b7.oU.postMessage("show ad " + dZ) : b7.oU.postMessage("showAd"), !0)
	}, this.d4 = function() {
		2 === b7.id && b7.dc < 23 && ar.oY(4, 1, new s2("App Update Required", "A new iOS app version with bug fixes has been published.<br>Please download the new Territorial.io app version for iOS:<br><a href='" + ah.s3 + "' target='_blank'>" +
			ah.s3 + "</a>", !0, [new nK("❌ " + aV.nZ[92], function() {
				ar.oY(0)
			}, aZ.l6)]))
	}
}

function cn() {
	function sG(title, sI, dE) {
		sB(dE), ar.oY(4, 0, new s2("⚠️ " + title, sI, !0))
	}

	function sB(dE) {
		! function(dE) {
			var dX = x.rp();
			0 === dX ? a0.sK() : 6 === dX ? aN.iv.sL(dE) : 7 === dX ? (aG.sK(), aN.iv.close(aN.iv.sD, 3240)) : 8 === dX && (sM(!0), a0.sK())
		}(dE), a0.cq(), b3.d1 = !0
	}
	this.s4 = function(s5, dE) {
		if (8 === ar.s6) return ar.s7().s8(dE) ? void 0 : void ar.oY(4, 5, new s2("⚠️ " + aV.s9(64), aV.sA(dE), !0));
		var dX = x.rp();
		if (6 === dX) {
			if (4211 === dE) return sB(dE), void ar.oY(4, 0, new s2("🚀 " + aV.nZ[122], aV.nZ[123], !0, [new nK("❌ " + aV.nZ[92], function() {
				ar.oY(0)
			}, aZ.l6), new nK("🔄 " + aV.nZ[124], function() {
				b7.cv.s0()
			}, aZ.ks)]));
			if (4214 !== dE) return void w.sC(s5)
		} else {
			if (7 !== dX) return 8 === dX ? void(s5 !== aN.iv.sE || il || k.sF(aV.sA(dE))) : void 0;
			if (s5 !== aN.iv.sD) return
		}
		sG(aV.s9(64), aV.sA(dE), dE)
	}, this.sH = function(dE) {
		8 === x.rp() ? k.sF(aV.sA(dE)) : sG(aV.s9(64), aV.sA(dE))
	}
}

function bF() {
	var sN, sO;

	function sP() {
		var g3 = new cJ;
		g3.d2(1612), g3.os(1, 0), g3.os(6, 7), g3.os(2, 2 === b7.id ? 2 : 12 <= b7.dc ? 1 : 0 < b7.dc ? 3 : 0), g3.os(1, d9 ? 1 : 0), g3.os(1, dB ? 1 : 0), g3.os(1, a.d5);
		for (let eD = 0; eD < sO.length && eD < 100; eD++) g3.os(16, sO.charCodeAt(eD));
		sN.send(g3.mH), sN.onopen = null
	}
	window.addEventListener("error", function error(dE) {
		window.removeEventListener("error", error);
		return alert("Error:\n" + dE.filename + " " + dE.lineno + " " + dE.colno + " " + dE.message);
		window.removeEventListener("error", error), sO = dE.lineno + " " + dE.colno + " " + dE.message, (sN = new WebSocket("wss://territorial.io/s52/")).onopen = sP, 0 === dE.lineno && 0 === dE.colno || (b7.oS ? b7.oS.showToast(sO) : alert(
			sO))
	})
}

function cM() {
	var sQ, sR, sS = -15e3,
		sT = !1;

	function g6(dE) {
		sm() || (sT = !0, sn(dE, 1), aN.iv.so(aN.iv.sE), sp(Math.floor(aK.nE * dE.clientX), Math.floor(aK.nE * dE.clientY)))
	}

	function sb(dE) {
		sS = b3.dY, sn(dE, 1), aN.iv.so(aN.iv.sE), 0 < dE.touches.length && (sQ = Math.floor(aK.nE * dE.touches[0].clientX), sR = Math.floor(aK.nE * dE.touches[0].clientY), aE.sb(dE) || sp(sQ, sR))
	}

	function sp(fI, fJ) {
		0 === rG ? x.g6(fI, fJ) : aa.sq(fI, fJ) || b2.g6(fI, fJ) || u.g6(fI, fJ) || i.sr(fI, fJ) || m.g6(fI, fJ) || j.g6(fI, fJ) || ag.ss(fI, fJ) || aI.g6(fI, fJ) || i.st(fI, fJ)
	}

	function sX(dE) {
		sm() || (sT = !0, sn(dE, 1), su(Math.floor(aK.nE * dE.clientX), Math.floor(aK.nE * dE.clientY)))
	}

	function sc(dE) {
		sS = b3.dY, sn(dE, 1), 0 < dE.touches.length && (sQ = Math.floor(aK.nE * dE.touches[0].clientX), sR = Math.floor(aK.nE * dE.touches[0].clientY), aE.sc(dE) || su(sQ, sR))
	}

	function su(fI, fJ) {
		0 === rG ? x.sX(fI, fJ) : (aq.fH(fI, fJ), b2.sX(fI, fJ) || (j.sX(fI, fJ), i.sv() ? i.sX(fI, fJ) : o.sw ? o.sX(fI, fJ) && (b3.d1 = !0) : (s.sX(fI, fJ), p.k8 && p.sX(fI, fJ) && (b3.d1 = !0))))
	}

	function sZ(dE) {
		sm() || (sn(dE, 1), 0 === rG ? (x.click(-1024, -1024), q.sx()) : (s.sy(-1024, -1024), j.sX(-1024, -1024), o.sz(), p.k8 && (p.k8 = !1)))
	}

	function sY(dE) {
		sm() || (sn(dE, 1), t0(Math.floor(aK.nE * dE.clientX), Math.floor(aK.nE * dE.clientY), 2 === dE.button))
	}

	function click(dE) {
		sm() || sn(dE, 1)
	}

	function sd(dE) {
		sS = b3.dY, sn(dE, 1), dE && dE.touches && 0 < dE.touches.length && 0 !== rG ? p.k8 = !1 : aE.t1() || t0(sQ, sR, !1)
	}

	function se(dE) {
		sS = b3.dY, sn(dE, 1), t0(sQ, sR, !1)
	}

	function sf(dE) {
		aT.sf(dE)
	}

	function sg(dE) {
		aT.sg(dE)
	}

	function sh(dE) {
		sm() || sn(dE, 0)
	}

	function t0(fI, fJ, t2) {
		0 === rG ? x.click(fI, fJ) : (s.sy(fI, fJ), b2.sy(), o.sz(), p.k8 = !1, i.click(fI, fJ, t2) && (b3.d1 = !0))
	}

	function sa(dE) {
		var fI, fJ, deltaY;
		sm() || (sn(dE, 1), aN.iv.so(aN.iv.sE), fI = Math.floor(aK.nE * dE.clientX), fJ = Math.floor(aK.nE * dE.clientY), deltaY = dE.deltaY, 1 === dE.deltaMode && (deltaY *= 16), 0 === rG ? x.sa(fI, fJ, deltaY) : s.sa(fI, fJ, deltaY) || (o.t3(fI,
			fJ) ? o.sa(deltaY) && (b3.d1 = !0) : p.sa(fI, fJ, +deltaY)))
	}

	function si(dE) {
		sn(dE, 0)
	}

	function sn(dE, id) {
		0 === id && (av.sv || y.sv || ar.sv()) || 1 === id && y.t4 || (id = window.innerWidth / document.documentElement.clientWidth) < .999 || 1.001 < id || 0 !== x.rp() && dE.preventDefault()
	}

	function sk(dE) {
		if (keybindHandler(dE.key)) return;
		sm() || ("ArrowLeft" === dE.key ? aB.t6(3) : "ArrowUp" === dE.key ? aB.t6(0) : "ArrowRight" === dE.key ? aB.t6(1) : "ArrowDown" === dE.key ? aB.t6(2) : "a" === dE.key ? o.t7(.9375) : "d" === dE.key ? o.t7(16 / 15) : "s" === dE.key ? o.t7(7 /
				8) : "w" === dE.key ? o.t7(8 / 7) : "1" === dE.key ? o.t7(.75) : "2" === dE.key ? o.t7(7 / 8) : "3" === dE.key ? o.t7(.9375) : "4" === dE.key ? o.t7(31 / 32) : "5" === dE.key ? o.t7(32 / 31) : "6" === dE.key ? o.t7(16 / 15) :
			"7" === dE.key ? o.t7(8 / 7) : "8" === dE.key ? o.t7(4 / 3) : "+" === dE.key ? 0 !== rG && p.sa(Math.floor(aK.g3 / 2), Math.floor(aK.g9 / 2), -200) : "-" === dE.key ? 0 !== rG && p.sa(Math.floor(aK.g3 / 2), Math.floor(aK.g9 / 2),
			200) : "c" === dE.key ? 0 !== rG && b2.t8() : " " === dE.key && rG && aq.fK())
	}

	function sj(dE) {
		sm() || b3.dY < 400 || ar.t9(dE) || (8 !== x.rp() && x.t9(dE) ? b3.d1 = !0 : "Escape" === dE.key ? x.dd() : "ArrowLeft" === dE.key || "a" === dE.key ? aB.tA(3) : "ArrowUp" === dE.key || "w" === dE.key ? aB.tA(0) : "ArrowRight" === dE.key ||
			"d" === dE.key ? aB.tA(1) : "ArrowDown" === dE.key || "s" === dE.key ? aB.tA(2) : "h" === dE.key ? 1 <= rG && aa.tB(!k7) : " " === dE.key && rG && (j.fM && j.tC(), fL) && aa.tD(!1))
	}

	function sl() {
		"hidden" === document.visibilityState ? 1 === rG && (fL ? aa.tD(!1) : !il || j.fM || fa || j.tC()) : b3.d1 = !0
	}

	function sm() {
		return sS + 15e3 > b3.dY
	}

	function resize() {
		aK.tG()
	}
	this.sU = 0, this.sV = "", this.cq = function() {
		sW.addEventListener("mousedown", g6, {
			passive: !1
		}), sW.addEventListener("mousemove", sX, {
			passive: !1
		}), sW.addEventListener("mouseup", sY, {
			passive: !1
		}), sW.addEventListener("click", click, {
			passive: !1
		}), sW.addEventListener("mouseleave", sZ, {
			passive: !1
		}), sW.addEventListener("wheel", sa, {
			passive: !1
		}), sW.addEventListener("touchstart", sb, {
			passive: !1
		}), sW.addEventListener("touchmove", sc, {
			passive: !1
		}), sW.addEventListener("touchend", sd, {
			passive: !1
		}), sW.addEventListener("touchcancel", se, {
			passive: !1
		}), sW.addEventListener("dragover", sf), sW.addEventListener("drop", sg), sW.addEventListener("dblclick", sh), document.addEventListener("contextmenu", si), document.addEventListener("keyup", sj), document.addEventListener("keydown",
			sk), document.addEventListener("visibilitychange", sl), window.addEventListener("resize", resize)
	}, this.ss = function(fI, fJ) {
		return !!aa.g6(fI, fJ) || !!(s.g6(fI, fJ) || p.g6(fI, fJ) || o.g6(fI, fJ) || k.g6(fI, fJ))
	}, this.tE = sm, this.tF = function() {
		return !sT || 0 < sS
	}
}

function bJ() {
	this.fy = new tH, this.pD = new tI, this.fN = new tJ, this.ji = new tK, this.cq = function() {
		this.fy.oa()
	}
}

function tI() {
	this.pE = function(dl) {
		dl.fill(0)
	}, this.tL = function(dl) {
		for (var eZ = dl.length, eD = 0; eD < eZ; eD++) dl[eD] = []
	}, this.tM = function(gZ, fr) {
		for (var ga = al.dh, eD = 0; eD < 3; eD++) ga[eD] = fr * gZ[eD];
		return ga
	}, this.tN = function(gZ, ga, tO) {
		for (var ge = 0, eD = 0; eD < 3; eD++) ge += Math.abs(gZ[eD] - ga[eD]);
		return tO <= ge
	}, this.tP = function(gZ, tQ) {
		for (var eD = 0; eD < 3; eD++) gZ[eD] = ai.lP(gZ[eD] + tQ, 0, 255);
		return gZ
	}, this.tR = function(dl, tS = 0, tT = dl.length - 1) {
		for (var tU = 0, eD = tS; eD <= tT; eD++) tU += dl[eD];
		return tU
	}, this.tV = function(dl, tW) {
		for (var eD, tX, eZ = dl.length, tY = [], hY = eZ - 1; 0 <= hY; hY--) {
			for (eD = tX = 0; eD < eZ; eD++) tW(dl[eD]) < tW(dl[tX]) && (tX = eD);
			eZ--, tY.push(dl[tX]), dl[tX] = dl[eZ], dl.pop()
		}
		return tY
	}
}

function tH() {
	var tZ = null;
	this.ta = 0, this.oa = function() {
		var db = b9.dG.data[5].value;
		tZ = "px " + db, "Trebuchet MS" !== db && (tZ += ", Trebuchet MS"), this.ta = gF(32, 32, ["a", "b", "m"], 200, tZ)
	}, this.p3 = function(g3, g9) {
		var iK = document.createElement("canvas");
		return iK.width = g3, iK.height = g9, iK
	}, this.getContext = function(gM, alpha) {
		return gM.getContext("2d", {
			alpha: alpha
		})
	}, this.getImageData = function(qK, g3, g9) {
		return qK.getImageData(0, 0, g3, g9)
	}, this.kT = function(gP, tb, hh) {
		return "rgb(" + gP + "," + tb + "," + hh + ")"
	}, this.kV = function(gP, tb, hh, hY) {
		return "rgba(" + gP + "," + tb + "," + hh + "," + hY.toFixed(3) + ")"
	}, this.fz = function(type, size) {
		return size = size.toFixed(2), 0 === type ? size + tZ : 1 === type ? "bold " + size + tZ : 2 === type ? "lighter " + size + tZ : 3 === type ? "italic " + size + tZ : 4 === type ? "oblique " + size + tZ : 5 === type ? "small-caps " +
			size + tZ : "small-caps bold " + size + tZ
	}, this.textAlign = function(gN, id) {
		gN.textAlign = 0 === id ? "left" : 1 === id ? "center" : "right"
	}, this.textBaseline = function(gN, id) {
		gN.textBaseline = 1 === id ? "middle" : "bottom"
	}, this.nJ = function(dE, code = 5, color = aZ.gE) {
		color = this.nI(b0.tc) + " solid " + color;
		5 === code ? dE.style.border = color : 4 === code ? dE.style.borderLeft = color : 2 === code ? dE.style.borderBottom = color : 6 === code ? dE.style.borderRight = color : dE.style.borderTop = color
	}, this.nA = function(db) {
		return 1 + db * b7.cv.ft()
	}, this.ne = function(kF, eh = .5) {
		return kF * this.nA(eh) * aK.fu / aK.nE
	}, this.nI = function(db) {
		return db.toFixed(1) + "px"
	}, this.td = function(te, tf) {
		for (var fw = "<ul>", eZ = te.length, eD = 0; eD < eZ; eD++) fw += "<li>" + te[eD] + ": <a href='" + tf[eD] + "' target='_blank'>" + tf[eD] + "</a></li>";
		return fw += "</ul>"
	}, this.tg = function(dE) {
		navigator.clipboard && navigator.clipboard.writeText(dE.value)
	}, this.th = function(dE) {
		dE.innerText.startsWith("✅ ") || (dE.innerText = "✅ " + dE.innerText, setTimeout(function() {
			dE.innerText = dE.innerText.substring(dE.innerText.indexOf(" ") + 1)
		}, 1e3))
	}
}

function tJ() {
	this.fO = function(dX) {
		return 0 === dX ? 1 === rG && fa : 1 === dX ? 1 === rG && !fa : 2 === rG
	}, this.fP = function(player) {
		return 0 !== h1[player] && 2 !== h2[player]
	}, this.mZ = function(ti, tj) {
		return ti !== tj
	}, this.lx = function(player, db) {
		return db = this.tk(player, db), eV[player] += db, db
	}, this.tk = function(player, db) {
		var tl = eV[player];
		return db = Math.min(db, ez[player] * tm - tl), db = Math.min(db, tn - tl), Math.max(db, 0)
	}, this.ma = function(player, h4, to, tp) {
		var tl = eV[player],
			h4 = ai.fE(tl * (h4 + 1), 1024),
			to = ai.fE(to * tl, 1024),
			h4 = Math.min(h4, tl - to);
		return 10 === ij && (h4 = aR.tr(player, h4)), al.df[0] = h4, al.df[1] = to, tp <= h4
	}, this.lu = function(player, ld, lc) {
		var player = eV[player],
			tq = ai.fE(64 * player, 1024);
		return ld = Math.min(ld, player - tq), tq += player = this.tt(ld), ld = this.tk(lc, ld -= player), al.df[0] = ld, al.df[1] = tq, 1 <= ld
	}, this.lw = function(ld, lc) {
		var ts = this.tt(ld);
		return ld = this.tk(lc, ld -= ts), al.df[0] = ld, al.df[1] = ts, 1 <= ld
	}, this.h3 = function(player, tu) {
		return ai.fE(eV[player] * (tu + 1), 1024)
	}, this.tt = function(tv) {
		return ai.fE(Math.max(2142 - b3.iJ(), 0) * tv, 2142)
	}, this.mm = function(player, to) {
		eV[player] -= ai.fE(to * eV[player], 1024)
	}, this.mc = function(player) {
		eV[player] -= al.df[0] + al.df[1]
	}, this.mb = function(player, hR) {
		return (hR = Math.min(hR, ed)) < ed && 0 === h1[hR] && (hR = ed), (al.dj[0] = hR) === ed || fp(player, hR)
	}, this.me = function(player, lc) {
		return 0 !== h1[lc] && !fp(player, lc)
	}
}

function tK() {
	this.jj = function(db) {
		var eD, tw, tx, ty, tz;
		if (db < 0) return "-" + this.jj(Math.abs(db));
		if (db < 1e3) return db.toString();
		for (tw = Math.floor(Math.log(db + .5) / Math.log(10)) + 1, tx = Math.floor((tw - 1) / 3), tz = (ty = db.toString()).substring(tw - 3, tw), eD = 1; eD < tx; eD++) tz = ty.substring(tw - 3 * (eD + 1), tw - 3 * eD) + " " + tz;
		return ty.substring(0, tw - 3 * tx) + " " + tz
	}, this.u0 = function(eg, tw) {
		return eg.toFixed(tw) + "%"
	}, this.u1 = function(db, u2 = 3) {
		return db.toFixed(Math.max(Math.floor(u2 - Math.log10(db)), 0))
	}, this.u3 = function(db, kF, tw) {
		return (db * kF).toFixed(tw)
	}, this.u4 = function(username) {
		var u6, u5 = username.indexOf("[");
		return !(u5 < 0) && 1 < (u6 = username.indexOf("]")) - u5 && u6 - u5 <= 8 ? username.substring(u5 + 1, u6).toUpperCase().trim() : null
	}
}

function u7() {
	this.hO = function(player, fV) {
		g.q8(player, aj.gW(fV), aj.gY(fV)) && (b3.d1 = !0), il && this.i5()
	}, this.i5 = function() {
		var eD;
		for (fa = !1, eD = 0; eD < h0; eD++) 0 !== h1[eD] && 0 === ez[eD] && g.qE(eD);
		0 !== h1[eU] ? (b1.eX[7] = ez[eU], b1.eX[8] = eV[eU], o.gA(), t.u8(), fL || f.k4(ht[eU] - 5, hw[eU] - 5, hs[eU] + 5, hv[eU] + 5), aF.cq()) : u.show(!1, !1, !1, !0), k.u9(18), a6.uA(), a6.j4(!0), am.iv.uB(), mY = null, ay.uC = !0, ay.uD(),
			il && b7.cv.setState(1)
	}
}
var il, fL, uE, tn, uF, eU, k7, fa, uG, hL, uH, ij, rh, mY, rC, uI, h6, h5, h7, xy, jE, zv, jk, wc, h1, ht, hw, hs, hv, ez, q0, eV, ea, er, es, ev, h2, iN, iM, sW, gD, qI, a1V, uX, uY, ed = 512,
	pl = 512,
	tm = 150,
	rG = 0,
	q1 = 512,
	eS = 2;

function uJ(uK, uL, qT, uM, uN, uO) {
	k7 = !1, fL = uO, rh = uN, hL = (ij = uM) < 7 || 9 === ij, rJ = h0 = qT.length, il = 1 === rJ, uH = 9 === (ij = 8 === (ij = 10 === ij && il ? 7 : ij) && 2 !== h0 ? 7 : ij) ? 2 : ij + 2, uI = h0 <= 2 ? 30 : h0 <= 50 ? 40 : 50, uG = fa = !(aU.ig &&
			!aU.ih.uP) && (hL || h0 < 100), mY = fa ? new u7 : null, q1 = 512, pl = ed, il && (pl = z.uQ()), ie = pl - h0, rI = 0, eU = uL, aL.uR(uK), aM.cq(), uS(qT), aW.lU.mL = [], b4.cq(qT), rG = 1, tn = 15e8, uF = 1e9, b1.cq(), uT(), a9.uU(), ay
		.cq(), a5.cq(), i0(), a2.cq(qT), aD.cq(), aj.cq(), ak.cq(), ao.cq(), b.cq(), a7.d2(), a7.uV(), g.cq(), uW(), aX.cq(uK, qT, uM, uN), b5.cq(), an.cq(), am.cq(), b2.cq(), uX.putImageData(uY, 0, 0), s.cq(), p.cq(), o.cq(), aa.cq(), aI.cq(), r
		.cq(), t.cq(), j.cq(), n.cq(), k.cq(), m.cq(), i.cq(), u.cq(), e.cq(), c.cq(), d.cq(), e7(), a4.cq(), a6.cq(), aR.cq(), aQ.cq(), aS.cq(), aO.cq(), 8 === ij ? (rC = new qS).cq(qT) : rC = null, b3.uZ(), ua(), aF.cq(), b3.d1 = !0, fL || il &&
		fa || b7.cv.setState(1)
}

function ua() {
	f.k3(), 0 === h1[eU] && u.show(!1, !0), a6.j4(!0)
}

function sM(ub) {
	aN.iv.close(aN.iv.sE, 3246), rG = 0, b3.uc(), b7.cv.setState(0), a0.cq(!ub)
}

function cm() {
	this.ud = 0, this.gap = 0, this.tc = 0, this.nG = 0, this.cq = function() {
		this.resize()
	}, this.resize = function() {
		this.ud = .0022 * aY.fy.nA(.5) * aK.fu, this.tc = this.ud / aK.nE, this.gap = Math.max(Math.floor((b7.cv.ft() ? .0114 : .01296) * aK.fu), 2), this.nG = this.gap / aK.nE
	}
}

function cl() {
	this.ue = function() {
		return 2 === b7.id ? 4 : b7.cv.ft() ? 2 : 1
	}
}

function bU() {
	var nR, fI, fJ, uf, ug, uh, dY, player, ui, gap, zoom, m6, uj;

	function uz(player) {
		for (var eD = m6.length - 1; 0 <= eD; eD--)
			if (m6[eD] === player) return 1
	}

	function ux(uu) {
		var eD, eZ;
		if (-1 !== uu)
			for (eZ = nR.length, eD = 0; eD < eZ; eD++)
				if (nR[eD].sv && nR[eD].fI + 1 === uu % 4 && nR[eD].fJ + 1 === uu >> 2) return eD;
		return -1
	}

	function uw(g7, g8) {
		var tb = gap / 2;
		return g7 < fI - uf - 3 * tb || fI + 3 * uf + 5 * tb < g7 || g8 < fJ - uf - 3 * tb || fJ + 2 * uf + 3 * tb < g8 ? -1 : 4 * (g8 < fJ - tb ? 0 : g8 < fJ + uf + tb ? 1 : 2) + (g7 < fI - tb ? 0 : g7 < fI + uf + tb ? 1 : g7 < fI + 2 * uf + 3 *
			tb ? 2 : 3)
	}
	this.uk = function() {
		var eD, hh, un = [aZ.kv, aZ.l5, aZ.kZ, aZ.lJ, aZ.lC];
		for (nR = new Array(8), eD = 0; eD < 8; eD++) nR[eD] = {
			id: eD,
			sv: !1,
			uo: 0,
			gM: [],
			fI: 0,
			fJ: 0
		};
		for (nR[0].colors = [0, 1, 2, 3], nR[0].fI = 0, nR[0].fJ = 0, nR[1].colors = [0, 1, 4], nR[1].fI = 1, nR[1].fJ = 0, nR[2].colors = [0, 2], nR[2].fI = -1, nR[2].fJ = 0, nR[3].colors = [0], nR[3].fI = 0, nR[3].fJ = 0, nR[4].colors = [0, 2],
			nR[4].fI = 1, nR[4].fJ = 1, nR[5].colors = [3], nR[5].fI = 0, nR[5].fJ = -1, nR[6].id = 20, nR[6].colors = [0], nR[6].fI = 1, nR[6].fJ = -1, nR[7].id = 21, nR[7].colors = [0], nR[7].fI = 0, nR[7].fJ = 1, eD = 0; eD < 8; eD++)
			for (hh = 0; hh < nR[eD].colors.length; hh++) nR[eD].gM.push(function(id, up) {
				var gG = a1.get(3).height,
					uq = aY.fy.p3(gG, gG),
					gN = aY.fy.getContext(uq);
				20 === id ? gN.drawImage(a1.get(18), 0, 0) : 21 === id ? gN.drawImage(a1.ur("emojis"), -4 * gG, 0) : (function(g3, qK, ut) {
					qK.fillStyle = ut, qK.beginPath(), qK.arc(Math.floor(g3 / 2), Math.floor(g3 / 2), Math.floor(.47 * g3), 0, 2 * Math.PI), qK.fill()
				}(gG, gN, up), gN.drawImage(a1.get(3), -id * gG, 0));
				return uq
			}(nR[eD].id, un[nR[eD].colors[hh]]))
	}, this.um = function() {
		return nR
	}, this.cq = function() {
		m6 = [], fI = fJ = dY = 0, ug = uh = -1e3, this.resize()
	}, this.resize = function() {
		uf = Math.floor((b7.cv.ft() ? .075 : .0468) * aK.fu), zoom = uf / a1.get(3).height, gap = Math.floor(uf / 3)
	}, this.sr = function(g7, g8) {
		return !!this.sv() && (b3.d1 = !0, !!az.g6(g7, g8, player) || (g7 = function(g7, g8) {
			var uu, eD;
			if (uh = ug = -1e3, uu = uw(g7, g8), -1 === (uu = ux(uu))) return 0;
			if (1 === nR[uu].colors[nR[uu].uo]) return 0;
			if (5 === uu) {
				if (! function() {
						var dZ = (new Date).getTime();
						uj + 4e3 < dZ && (m6 = []);
						uj = dZ
					}(), uz(player)) return 1;
				m6.push(player), 16 < m6.length && m6.shift()
			} else if (6 === uu) {
				for (eD = m6.length - 1; 0 <= eD; eD--) 0 === h1[m6[eD]] && m6.splice(eD, 1);
				0 < m6.length && (aS.v0(1, m6, !0) && aW.fN.m5(m6, player), m6 = [])
			} else if (2 === uu) aW.fb.lb(o.fk(), player);
			else if (3 === uu) fa && aW.fb.fc(ui);
			else if (0 === uu)
				if (0 === nR[0].uo) {
					if (uG && t.v1() < 300) return 1;
					aW.fb.fm(o.fk(), player)
				} else aO.fo(player, o.fk());
			else if (1 === uu) aW.fb.fj(o.fk(), ui);
			else {
				if (7 === uu) return az.show(g7, g8), 2;
				if (4 !== uu) return 0;
				aS.v0(0, [player], !0) && aW.fN.m2(player)
			}
			return 1
		}(g7, g8), this.o0(), 2 === g7 && (az.sv = !0), 0 < g7))
	}, this.st = function(g7, g8) {
		this.sv() || (ug = g7, uh = g8, dY = (new Date).getTime())
	}, this.click = function(g7, g8, t2) {
		var fR = aj.fS(g7),
			fT = aj.fU(g8),
			fV = aj.fW(fR, fT),
			fX = aj.fY(fV);
		return !(!aj.fZ(fR, fT) || (fR = (b7.cv.ft() ? .025 : .0144) * aK.fu, Math.abs(g7 - ug) > fR) || Math.abs(g8 - uh) > fR || performance.now() > dY + 425) && (t2 ? (function(g7, g8, fX) {
			a2.eb(fX) || -1 === (g7 = ak.fd.vD(g7, g8)) ? k.vC(fX) : k.vE(g7)
		}(g7, g8, fX), !1) : j.fM || this.sv() || !aY.fN.fP(eU) || fL ? (this.o0(), !1) : fa ? !!a2.eb(fX) && (ui = fV, nR[3].sv = !0, this.v4(g7, g8)) : (ak.fd.fe(fV) || ak.fd.ff(g7, g8) || (2 === rG ? a2.ej(fX) && 0 < az.v5 && (player =
			a2.ek(fX), a2.v6(player)) && (nR[0].sv = !0, nR[0].uo = 1, nR[7].sv = !0) : a2.fg(fX) || (ui = fV, ak.fd.fi(eU, fV) && (nR[0].sv = !0, nR[0].uo = 1, nR[1].sv = !0, nR[1].uo = al.di[2] ? 0 : 2), a2.fh(fX)) || (a2.el(
			fX) ? (player = ed, fl(eU) ? (nR[0].sv = !0, nR[0].uo = 0) : fn(eU, player) && (nR[0].sv = !0, nR[0].uo = 3)) : (player = a2.ek(fX)) === eU ? 0 !== az.v5 && (nR[0].sv = !0, nR[0].uo = 1, nR[7].sv = !0) : (nR[0].uo = 1,
				nR[5].sv = function(player) {
					return a2.v6(player) && !uz(player) && aS.v0(1, [player], !1)
				}(player), nR[7].sv = 1 <= az.v5 && a2.v6(player), fp(player, eU) ? (nR[4].sv = a2.v6(player) && !a6.v8(player) && aS.v0(0, [player], !1), nR[6].sv = function(player) {
					if (0 === m6.length) return !1;
					if ((new Date).getTime() > uj + 4e3) return !(m6 = []);
					return !uz(player) && ! function(player) {
						var eD;
						if (hL)
							for (eD = m6.length - 1; 0 <= eD; eD--)
								if (!fp(player, m6[eD])) return 1;
						return
					}(player)
				}(player), fq(eU, player) ? (nR[0].uo = 0, nR[0].sv = !0) : fn(eU, player) && (nR[0].uo = 3, nR[0].sv = !0), nR[0].sv = this.vA()) : (nR[2].sv = !0, nR[0].sv = !0)))), this.v4(g7, g8)))
	}, this.v4 = function(g7, g8) {
		return fI = g7 - Math.floor(uf / 2), fJ = g8 - Math.floor(uf / 2), !!this.sv()
	}, this.sX = function(g7, g8) {
		return !!this.sv() && (az.sv ? !az.vG(g7, g8) && (az.vH(), az.sv = !1, b3.d1 = !0) : function(vJ, g7, g8) {
			g7 = uw(g7, g8);
			if (0 <= ux(g7)) return !1;
			if ((1 === g7 || 6 === g7) && 0 <= ux(2)) return !1;
			if ((6 === g7 || 9 === g7) && 0 <= ux(10)) return !1;
			return vJ.o0(), b3.d1 = !0
		}(this, g7, g8))
	}, this.o0 = function() {
		for (var eD = nR.length - 1; 0 <= eD; eD--) nR[eD].sv = !1, nR[eD].uo = 0;
		az.sv = !1
	}, this.sv = function() {
		return this.vA() || az.sv
	}, this.vA = function() {
		for (var eZ = nR.length, eD = 0; eD < eZ; eD++)
			if (nR[eD].sv) return !0;
		return !1
	}, this.gC = function() {
		if (this.sv())
			if (az.sv) az.gC();
			else {
				var eD, gN = gD,
					hh = nR,
					eZ = hh.length,
					vL = (uf + gap) / zoom;
				for (gN.imageSmoothingEnabled = !0, gN.setTransform(zoom, 0, 0, zoom, fI, fJ), eD = 0; eD < eZ; eD++) hh[eD].sv && gD.drawImage(hh[eD].gM[hh[eD].uo], hh[eD].fI * vL, hh[eD].fJ * vL);
				gN.imageSmoothingEnabled = !1, gN.setTransform(1, 0, 0, 1, 0, 0)
			}
	}
}

function bV() {
	var g9, gM, g2, vM, vN;

	function vO() {
		var vP, qK = gM.getContext("2d", {
			alpha: !0
		});
		qK.clearRect(0, 0, g9, g9), qK.fillStyle = aZ.kW, qK.fillRect(0, 0, g9, g9), 0 === vM && (qK.fillStyle = aZ.kb, qK.fillRect(0, 0, g9, g9)), qK.fillStyle = aZ.gE, qK.fillRect(0, 0, g9, 1), qK.fillRect(0, 0, 1, g9), qK.fillRect(0, g9 - 1, g9,
			1), qK.fillRect(g9 - 1, 0, 1, g9), vP = .9 * g9 / a1.get(0).width, qK.imageSmoothingEnabled = !0, qK.setTransform(vP, 0, 0, vP, Math.floor((g9 - vP * a1.get(0).width) / 2), Math.floor((g9 - vP * a1.get(0).height) / 2)), qK.drawImage(
			a1.get(0), 0, 0), qK.setTransform(1, 0, 0, 1, 0, 0)
	}

	function vS(g7, g8) {
		if (!j.fM) return g7 <= g9 + b0.gap && g8 >= o.fJ ? 0 : -1;
		if (g7 <= 4 * g9 + b0.gap) {
			if (g8 >= o.fJ) return 0;
			if (g8 >= o.fJ - g9 - vN * b0.gap) return 2
		} else if (g7 <= 7 * g9 + b0.gap && g8 >= o.fJ - g9 - vN * b0.gap) return 1;
		return -1
	}
	this.fM = !1, this.cq = function() {
		vM = -1, this.fM = !1, vN = b7.cv.ft() ? 1.2 : .6, this.resize()
	}, this.resize = function() {
		g9 = o.g9, (gM = document.createElement("canvas")).width = g9, gM.height = g9, g2 = aY.fy.fz(1, (b7.cv.ft() ? .5 : .45) * g9), vO()
	}, this.tC = function() {
		this.fM = !this.fM, this.fM ? (at.dI.hideCMPButton(), aa.tB(!1), fL && aa.vQ && aa.tD(!0), this.vR()) : (vM = -1, vO(), il && 1 === rG && !fa && b7.cv.setState(1)), b3.d1 = !0
	}, this.vR = function() {
		(il || fL) && 1 === rG && (s.j4(!0), fa || setTimeout(function() {
			ay.rO()
		}, 0), b7.cv.setState(0))
	}, this.g6 = function(g7, g8) {
		var uo = vS(g7, g8);
		if (this.fM) {
			if (k7) return 0 <= uo && aa.tB(!1), !fL;
			if (0 === uo) sM();
			else if (1 === uo) this.tC();
			else if (2 === uo) ar.oY(1);
			else {
				if (!(il || 1 !== rG || fL || b2.sv) && (j.tC(), 1)) return !1;
				ag.ss(g7, g8) || i.st(g7, g8)
			}
			return !0
		}
		return 0 === uo && (this.tC(), !0)
	}, this.sX = function(g7, g8) {
		g7 = vS(g7, g8);
		g7 !== vM && (vM = g7, this.fM || vO(), b3.d1 = !0)
	}, this.gC = function() {
		var g3;
		this.fM ? (g3 = Math.floor(5.5 * g9), gD.setTransform(1, 0, 0, 1, b0.gap, o.fJ), gD.fillStyle = aZ.kW, gD.fillRect(0, 0, g3, g9), 0 === vM ? (gD.fillStyle = aZ.kb, gD.fillRect(0, 0, 4 * g9, g9)) : 1 === vM && (gD.fillStyle = aZ.kb, gD
				.fillRect(4 * g9, 0, Math.floor(1.5 * g9), g9)), gD.fillStyle = aZ.gE, gD.fillRect(0, 0, g3, 1), gD.fillRect(0, 0, 1, g9), gD.fillRect(4 * g9, 0, 1, g9), gD.fillRect(0, g9 - 1, g3, 1), gD.fillRect(g3 - 1, 0, 1, g9), gD.font =
			g2, aY.fy.textBaseline(gD, 1), aY.fy.textAlign(gD, 1), gD.fillText(aV.nZ[79], 2 * g9, .54 * g9), g3 = .4 * g9, j.vX(b0.gap + 4 * g9 + (1.5 * g9 - g3) / 2, o.fJ + .3 * g9, g3), g3 = 1, gD.setTransform(1, 0, 0, 1, b0.gap, o.fJ -
				g3 * vN * b0.gap - g3 * g9), gD.fillStyle = aZ.kW, gD.fillRect(0, 0, 4 * g9, g9), vM === g3 + 1 && (gD.fillStyle = aZ.kb, gD.fillRect(0, 0, 4 * g9, g9)), gD.fillStyle = aZ.gE, gD.fillRect(0, 0, 4 * g9, 1), gD.fillRect(0, 0, 1,
				g9), gD.fillRect(4 * g9, 0, 1, g9), gD.fillRect(0, g9 - 1, 4 * g9, 1), gD.fillText(aV.nZ[79 + g3], 2 * g9, .54 * g9), gD.setTransform(1, 0, 0, 1, 0, 0)) : gD.drawImage(gM, b0.gap, o.fJ)
	}, this.vW = function(player) {
		return 0 !== h1[player] && 2 !== rG && a2.v6(player)
	}, this.vX = function(fI, fJ, eZ) {
		gD.setTransform(1, 0, 0, 1, fI, fJ), gD.lineWidth = b0.ud, gD.strokeStyle = aZ.gE, gD.beginPath(), gD.moveTo(0, 0), gD.lineTo(eZ, eZ), gD.moveTo(0, eZ), gD.lineTo(eZ, 0), gD.stroke()
	}
}

function bW() {
	var vZ, g9, va, vb, vc, vd, ve, vf, vg;

	function gB() {
		return o.w0(k.vw()) ? aI.sv ? o.fJ - o.g9 - 2 * va : o.fJ - va : aa.w0(k.vz()) ? aI.sv ? aa.gB() - o.g9 - 2 * va : aa.gB() - va : aI.sv ? aK.g9 - o.g9 - (bA.ue() + 1) * va : aK.g9 - bA.ue() * b0.gap
	}

	function vn(dZ, fw, id, eg, vr, vs, pO, vt, vu) {
		var eD, qK, vx, uq, n3, w3 = void 0 !== vu,
			g3 = Math.floor(n.measureText(fw, k.g2) + 1.5 * vb + (w3 ? g9 : 1.5 * vb));
		if (b3.d1 = !0, g3 + va > aK.g3 && !w3 && 50 !== id && 20 < fw.length) vx = Math.floor(.5 * fw.length), vn(dZ, fw.substring(0, vx), id, eg, vr, vs, pO, vt, vu), vn(dZ, fw.substring(vx), id, eg, vr, vs, pO, vt, vu);
		else if (vx = g3 + (50 === id ? vc : 0), (uq = document.createElement("canvas")).width = g3, uq.height = g9, (qK = uq.getContext("2d", {
				alpha: !0
			})).font = k.g2, aY.fy.textBaseline(qK, 1), aY.fy.textAlign(qK, 0), qK.clearRect(0, 0, g3, g9), qK.fillStyle = vs, qK.fillRect(0, 0, g3, g9), qK.fillStyle = vr, qK.fillText(fw, Math.floor(1.5 * vb), Math.floor(g9 / 2)), w3 && (w3 = g9 /
				az.g3, qK.imageSmoothingEnabled = !0, qK.setTransform(w3, 0, 0, w3, g3 - g9, 0), qK.drawImage(az.uq[vu], 0, 0)), 0 === (n3 = {
				dY: dZ,
				fw: fw,
				id: id,
				player: eg,
				gM: uq,
				vr: vr,
				vs: vs,
				g3: g3,
				vx: vx,
				pO: pO,
				vt: vt,
				vu: vu
			}).dY || 0 < vZ.length && 0 < vZ[0].dY) vZ.unshift(n3);
		else {
			for (eD = 1; eD < vZ.length; eD++)
				if (0 < vZ[eD].dY) return void vZ.splice(eD, 0, n3);
			vZ.push(n3)
		}
	}

	function vp(gP, tb, hh) {
		return "rgb(" + gP + "," + tb + "," + hh + ")"
	}

	function w4(id, wM) {
		for (var eZ = vZ.length, eD = 0; eD < eZ; eD++) vZ[eD].id === id && wM-- <= 0 && (vZ.splice(eD, 1), eD--, eZ--)
	}

	function w5(id, player) {
		for (var wN = !1, eD = vZ.length - 1; 0 <= eD; eD--) vZ[eD].id !== id || player !== ed && vZ[eD].player !== player || (vZ.splice(eD, 1), wN = !0);
		return wN
	}

	function wS(fw) {
		vn(340, fw, 6, 0, vp(215, 245, 255), aZ.kY, -1, !1)
	}

	function wa(player, wb) {
		return (il || h0 <= player || wb || b9.dG.data[6].value ? jk : wc)[player]
	}
	this.vh = "", this.cq = function() {
		var self;
		vf = 0, ve = b7.cv.ft() ? 7 : 12, vd = {
			qT: [0, 0, 0],
			vi: [0, 0, 0],
			k1: [220, 180, 180],
			vj: [0, 0, 0],
			iK: [0, 0, 0]
		}, vZ = [], this.resize(), fa && this.r7(0, 18), wS(aV.s9(37, [ap.ih.pY[ap.pZ].name])), wS(aV.s9(38, [ap.e8 - 2, ap.e9 - 2])), wS(aV.s9(39, [a9.wT], {
			wD: [0]
		})), a9.wT !== a9.wU && wS(aV.s9(40, [a9.wU, a9.wU / a9.wT], {
			wD: [0],
			wV: [1]
		})), 0 < a9.wW && wS(aV.s9(41, [a9.wW, a9.wW / a9.wT], {
			wD: [0],
			wV: [1]
		})), 0 < a9.wX && wS(aV.s9(42, [a9.wX, a9.wX / a9.wT], {
			wD: [0],
			wV: [1]
		})), 10 === ij && vn(120, aV.s9(43), 6, 0, vp(235, 255, 120), aZ.kY, -1, !1), 0 !== (self = this).vh.length && (vn(200, self.vh, 0, 0, aZ.gE, aZ.kY, -1, !1), self.vh = ""), this.vm()
	}, this.vm = function() {
		var eD, eZ;
		if (aU.ig)
			for (eZ = aU.ih.vo.length, eD = 0; eD < eZ; eD++) vn(400, aU.ih.vo[eD], 6, 0, vp(255, 255, 255), aZ.kY, -1, !1)
	}, this.resize = function() {
		var vq, eD;
		if (g9 = (g9 = Math.floor((b7.cv.ft() ? .031 : .0249) * aK.fu)) < 10 ? 10 : g9, this.fontSize = Math.floor(2 * g9 / 3), this.g2 = aY.fy.fz(1, this.fontSize), va = b0.gap, vb = Math.floor(g9 / 5), 0 < vZ.length)
			for (vq = vZ, vZ = [], eD = vq.length - 1; 0 <= eD; eD--) vn(vq[eD].dY, vq[eD].fw, vq[eD].id, vq[eD].player, vq[eD].vr, vq[eD].vs, vq[eD].pO, vq[eD].vt, vq[eD].vu);
		this.vv()
	}, this.vv = function() {
		vg = document.createElement("canvas");
		var fw = aV.s9(0),
			qK = (vc = n.measureText(fw, this.g2) + 5 * vb, vg.height = g9, vg.width = vc, vg.getContext("2d", {
				alpha: !0
			}));
		qK.font = this.g2, aY.fy.textBaseline(qK, 1), aY.fy.textAlign(qK, 1), qK.clearRect(0, 0, vc, g9), qK.fillStyle = aZ.ks, qK.fillRect(0, 0, vc, g9), qK.fillStyle = aZ.gE, qK.fillText(fw, Math.floor(vc / 2), Math.floor(g9 / 2))
	}, this.vw = function() {
		var eZ;
		return aI.sv ? aI.g3 : 0 === (eZ = vZ.length) ? 0 : 1 === eZ ? vZ[0].vx : vy(vZ[0].vx, vZ[1].vx)
	}, this.vz = function() {
		var eZ = vZ.length;
		return aI.sv ? eZ ? vy(aI.g3, vZ[0].vx) : aI.g3 : 0 === eZ ? 0 : 1 === eZ ? vZ[0].vx : 2 === eZ ? vy(vZ[0].vx, vZ[1].vx) : vy(vy(vZ[0].vx, vZ[1].vx), vZ[2].vx)
	}, this.g6 = function(fI, fJ) {
		for (var w1, w2 = gB(), eD = vZ.length - 1; 0 <= eD; eD--)
			if ((w1 = w2 - (eD + 1) * g9) <= fJ && fJ < w1 + g9) return 50 === vZ[eD].id ? fI >= aK.g3 - vc - va - vZ[eD].g3 && (fI >= aK.g3 - vc - va ? aW.fN.m2(vZ[eD].player) : f.k5(vZ[eD].player, 800, !1, 0), !0) : fI >= aK.g3 - vZ[eD].g3 -
				va && (736 === vZ[eD].id ? window.open("https://" + vZ[eD].fw, "_blank") : vZ[eD].vt && (f.k5(vZ[eD].player, 800, !1, 0), 0 <= vZ[eD].pO) && (w1 = vZ[eD].pO, vZ[eD].pO = vZ[eD].player, vZ[eD].player = w1), !0);
		return !1
	}, this.ri = function(dZ, fw, id, eg, vr, vs, pO, vt, vu) {
		vn(dZ, fw, id, eg, vr, vs, pO, vt, vu)
	}, this.u9 = function(id) {
		for (var eD = vZ.length - 1; 0 <= eD; eD--) vZ[eD].id === id && (vZ[eD].dY = 1)
	}, this.r7 = function(player, id) {
		0 === id ? (b1.eX[player < h0 ? 4 : 3]++, n.hO(player, 0), w4(423, 0), vn(160, aV.s9(1, [jk[player]]), 423, player, "rgb(10,220,10)", aZ.kY, -1, !1)) : 1 === id ? (w5(50, ed), n.hO(player, 1), vn(360, aV.s9(2, [jk[player]]), 0, player,
			"rgb(255,40,40)", aZ.kY, -1, !0), f.k5(player, 2700, !1, 0)) : 2 === id ? (n.hO(player, 2), vn(0, aV.s9(3), 0, player, "rgb(10,255,255)", aZ.kY, -1, !0), f.k5(player, 2700, !1, 0)) : 3 === id ? (n.hO(player, 2), vn(0, aV.s9(4, [
			jk[player]
		]), 0, player, aZ.gE, aZ.kY, -1, !0), f.k5(player, 2700, !1, 0)) : 4 === id ? (rJ--, rI--, this.w6(1, player, player)) : 5 === id ? 2 !== h2[player] && a2.v6(eU) && (function(id, jH) {
			var eD, wG = 0,
				eZ = vZ.length;
			for (eD = 0; eD < eZ; eD++)
				if (vZ[eD].id === id && jH <= ++wG) return vZ.splice(eD, 1)
		}(1, 5), a6.w8(player) ? vn(180, aV.s9(5, [jk[player]]), 1, player, vp(255, 200, 180), aZ.kY, -1, !0) : (w4(573, 0), vn(180, aV.s9(6, [jk[player]]), 573, player, "rgb(255,70,10)", aZ.kY, -1, !0))) : 18 === id ? vn(255, aV.s9(7), 18,
			0, aZ.gE, aZ.kY, -1, !1) : 21 === id ? vn(220, aV.s9(8), id, 0, "rgb(255,40,40)", aZ.kY, -1, !1) : 22 === id ? this.w6(2, player, player) : 59 === id && vn(0, aV.s9(9), id, 0, aZ.lI, aZ.kY, 0, !1)
	}, this.sF = function(sI) {
		vn(200, aV.s9(10, [sI]), 94, 0, aZ.gE, aZ.l3, -1, !1)
	}, this.rF = function(rA) {
		if (eU === rA && !il)
			wins_counter++, window.localStorage.setItem("fx_winCount", wins_counter),
			vn(0, "Your Win Count is now " + wins_counter, 3, rA, aZ.gE, aZ.kY, -1, !0);
		n.hO(rA, 2), vn(0, h0 < 100 ? aV.s9(4, [jk[rA]]) : aV.s9(12, [jk[rA]]), 3, rA, aZ.gE, aZ.kY, -1, !0), f.k5(rA, 2700, !1, 0)
	}, this.vC = function(fX) {
		var w9 = "(" + aj.gW(fX >> 2) + ", " + aj.gY(fX >> 2) + ")",
			vt = !1,
			player = 0;
		a2.eb(fX) ? a2.el(fX) ? w9 = aV.s9(13, [w9]) : (player = a2.ek(fX), w9 = aV.s9(14, [jk[player], aY.ji.jj(eV[player]), aY.ji.jj(ez[player]), w9]), vt = !0) : w9 = a2.fg(fX) ? aV.s9(15, [w9]) : aV.s9(16, [w9]), b3.d1 = !0, w4(55, 0), vn(
			220, w9, 55, player, aZ.gE, aZ.kY, -1, vt)
	}, this.vE = function(wA) {
		var oz = ak.iv,
			player = oz.wB[wA] >> 3;
		b3.d1 = !0, w4(55, 0), vn(220, aV.s9(17, [jk[player], oz.wC[wA]], {
			wD: [1]
		}), 55, player, aZ.gE, aZ.kY, -1, !0)
	}, this.ll = function(lX, wE, lm) {
		lX === eU ? vn(175, aV.s9(18, [jk[wE]]), 1001, wE, vp(200, 255, 210), aZ.kY, -1, !0, lm) : this.wF(lX, lm)
	}, this.wF = function(lX, lm) {
		w4(1e3, 0), vn(175, aV.s9(19, [jk[lX]]), 1e3, lX, aZ.gE, "rgba(5,60,25,0.9)", -1, !0, lm)
	}, this.rE = function(rB) {
		var sI;
		rB ? (sI = aV.s9(20), n.rX(aV.s9(21), 2, 1, 12), vn(0, sI, 40, 0, "rgb(10,220,10)", aZ.kY, -1, !1)) : (sI = aV.s9(22), n.rX(aV.s9(23), 2, 0, 16), vn(0, sI, 41, 0, "rgb(200,80,80)", aZ.kY, -1, !1)), f.kC(2700)
	}, this.qU = function(qT) {
		vn(300, qT[0].name + " [" + rC.qa(qT[0].qX) + "] vs " + qT[1].name + " [" + rC.qa(qT[1].qX) + "]", 65, 0, aZ.jg, "rgba(100,255,255,0.75)", -1, !1)
	}, this.wH = function(sI) {
		vn(200, sI, 0, 0, "rgb(40,255,200)", "rgba(10,60,40,0.9)", -1, !1)
	}, this.wI = function() {
		vn(0, aV.s9(24), 247, 0, aZ.lH, aZ.kY, -1, !1)
	}, this.qc = function(qT, qZ, qb, wJ) {
		1 === aN.iv.wK() && (vn(0, qT[0].name + ": " + rC.qa(qT[0].qX) + " -> " + qZ, 66, 0, aZ.gE, wJ[0], -1, !1), vn(0, qT[1].name + ": " + rC.qa(qT[1].qX) + " -> " + qb, 66, 1, aZ.gE, wJ[1], -1, !1))
	}, this.m3 = function(player, id) {
		0 === id ? w5(50, player) ? (vn(128, aV.s9(25, [jk[player]]), 52, player, vp(180, 255, 180), aZ.kY, -1, !0), a6.mp(player, 2, 255)) : vn(384, aV.s9(26, [jk[player]]), 51, player, vp(210, 210, 255), aZ.kY, -1, !0) : w5(51, player) ? (vn(
			128, aV.s9(27, [jk[player]]), 52, player, aZ.gE, "rgba(60,120,10,0.9)", -1, !0), a6.mp(player, 2, 255)) : (vn(384, aV.s9(28, [jk[player]]), 50, player, aZ.gE, "rgba(90,90,90,0.9)", -1, !0), a6.mp(player, 2, 96))
	}, this.m7 = function(qT, target) {
		var color = vp(210, 255, 210);
		1 < qT.length ? vn(230, aV.s9(29, [qT.length, jk[target]]), 66, target, color, aZ.kY, -1, !0) : vn(230, aV.s9(30, [jk[qT[0]], jk[target]]), 66, qT[0], color, aZ.kY, target, !0)
	}, this.wL = function(player, target) {
		vn(230, aV.s9(31, [jk[player], jk[target]]), 66, player, aZ.gE, "rgba(75,65,5,0.9)", target, !0)
	}, this.r6 = function(id, player) {
		w5(id, player)
	}, this.lZ = function() {
		var fx;
		100 <= eV[eU] || (-1 === (fx = function(id) {
			for (var eD = vZ.length - 1; 0 <= eD; eD--)
				if (vZ[eD].id === id) return eD;
			return -1
		}(143)) ? vn(80, aV.s9(32), 143, 0, aZ.gE, aZ.kY, -1, !1) : vZ[fx].dY = 80)
	}, this.ly = function(wP, wQ, player) {
		2 !== h2[eU] && (vn(200, aV.s9(33, [wP, jk[player]], {
			wD: [0]
		}), 30, player, "rgb(190,255,190)", aZ.kY, -1, !0), wQ) && vn(30, aV.s9(34, [wQ], {
			wD: [0]
		}), 30, 0, aZ.gE, aZ.kY, -1, !1)
	}, this.wR = function(wP, player) {
		2 !== h2[eU] && (w4(31, 0), 2 === h2[player] || h0 <= player ? vn(150, aV.s9(36, [jk[player], wP], {
			wD: [1]
		}), 31, player, aZ.jg, "rgba(205,205,205,0.9)", -1, !0) : vn(150, aV.s9(35, [jk[player], wP], {
			wD: [1]
		}), 31, player, aZ.jg, "rgba(205,255,205,0.9)", -1, !0))
	}, this.rK = function(wY) {
		for (var iK = b3.iJ(), eD = 2; 0 <= eD; eD--) 0 < vd.vj[eD] && (wY || vd.iK[eD] < iK - 220) && this.wZ(eD)
	}, this.wZ = function(id) {
		var fw, eZ = vd.vj[id],
			player = vd.qT[id];
		vd.vj[id] = 0, 1 === eZ ? (fw = 0 === id ? aV.s9(47, [wa(player, !0), wa(vd.vi[0], !0)]) : aV.s9(47 + id, [wa(player, !1)]), w4(7, 0), vn(vd.k1[id], fw, 7, vd.vi[id], aZ.gE, aZ.kY, -1, !0)) : 2 <= eZ && (fw = aV.s9(44 + id, [wa(player,
			0 === id), eZ - 1]), w4(7, 0), vn(vd.k1[id], fw, 7, player, aZ.gE, aZ.kY, -1, !1))
	}, this.w6 = function(id, pN, pO) {
		var iK = b3.iJ(),
			eZ = vd.vj[id] + 1;
		vd.vj[id]++, vd.qT[id] = pN, vd.vi[id] = pO, 1 === eZ && (vd.iK[id] = iK), (1 === eZ && (rJ < 32 || 2 === rG) || 1 < eZ && (vd.iK[id] < iK - 140 || 2 === rG)) && this.wZ(id)
	}, this.i5 = function() {
		for (var ge = (ge = vZ.length - ve) <= 1 ? 1 : ge * ge, eD = vZ.length - 1; 0 <= eD; eD--) 0 < vZ[eD].dY && (vZ[eD].dY -= ge, vZ[eD].dY <= 0) && (b3.d1 = !0, vZ.splice(eD, 1));
		! function() {
			var wM, eD;
			if (128 !== vf && !(++vf < 128))
				for (wM = 5, eD = iM - 1; 0 <= eD; eD--) 1 === h2[iN[eD]] && 0 < wM-- && vn(240, aV.s9(50, [jk[iN[eD]]]), 1, iN[eD], aZ.jg, "rgba(255,255,255,0.75)", -1, !0)
		}(), this.rK(!1)
	}, this.gC = function() {
		for (var pk, fJ = gB(), eD = vZ.length - 1; 0 <= eD; eD--) pk = fJ - (eD + 1) * g9, 50 === vZ[eD].id ? (gD.drawImage(vZ[eD].gM, aK.g3 - vZ[eD].g3 - vc - va, pk), gD.drawImage(vg, aK.g3 - vc - va, pk)) : gD.drawImage(vZ[eD].gM, aK.g3 - vZ[
			eD].g3 - va, pk)
	}
}

function bX() {
	var nZ, we, wf, g3, g9, font;

	function wj(wk) {
		return wk < 10 ? "0" + wk : String(wk)
	}
	this.cq = function() {
		void 0 === g3 && this.resize(), this.setTime()
	}, this.resize = function() {
		g3 = Math.floor((b7.cv.ft() ? .53 : .36) * aK.fu), g9 = Math.floor(.065 * g3), font = aY.fy.fz(1, Math.floor(.9 * g9)), wf--, this.setTime()
	}, this.i5 = function() {
		this.setTime() && (b3.d1 = !0)
	}, this.setTime = function() {
		var dZ = new Date,
			wh = dZ.getUTCMinutes(),
			dZ = dZ.getUTCSeconds();
		return we = 3600 - 60 * wh - dZ, we %= 900, nZ = "Next Contest: " + wj(Math.floor(we / 60)) + ":" + wj(we % 60), wf !== (wf = 60 * wh + dZ) && (g3 = n.measureText(nZ, font), g3 += Math.floor(.4 * g9), !0)
	}, this.gC = function() {
		gD.lineWidth = 1 + Math.floor(g9 / 15), 7 === x.rp() && aG.wl() + 2 * b0.gap > .5 * (aK.g9 - g3) ? gD.translate(aK.g3 - g9, Math.floor(aG.wl() + 2 * b0.gap + g3)) : gD.translate(aK.g3 - g9, Math.floor(.5 * (aK.g9 + g3))), gD.rotate(-Math
			.PI / 2), gD.fillStyle = aZ.gE, gD.fillRect(0, 0, g3, g9), gD.strokeStyle = aZ.jg, gD.strokeRect(0, 0, g3, g9 + 10), gD.fillStyle = aZ.jg, gD.font = font, aY.fy.textBaseline(gD, 1), aY.fy.textAlign(gD, 1), gD.fillText(nZ, Math
			.floor(g3 / 2), Math.floor(.59 * g9)), gD.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function ch() {
	this.wm = 10, this.wn = 50, this.wo = 50, this.wp = 8, this.wq = this.wn + this.wo, this.mo = this.wn + this.wo + this.wp, this.g3 = 72, this.wr = 0, this.ws = 0, this.uq = new Array(this.mo), this.wt = 8, this.wu = new Array(this.wn + this.wo),
		this.wv = new Array(this.wn + this.wo), this.jc = 0, this.jd = 0, this.zoom = 1, this.ww = .2, this.v5 = 0, this.rz = null, this.wx = null, this.sv = !1, this.cq = function() {
			var eD, wy, wz;
			for (this.rz = new Array(this.mo), this.wx = new Array(this.mo), wy = a1.ur("emojis"), this.x0(), eD = this.v5 = 0; eD < this.wn; eD++) this.x1(eD, eD, wy);
			for (wz = a1.ur("flags"), eD = 0; eD < this.wo; eD++) this.x1(eD, this.wn + eD, wz);
			this.x2(), this.uq[26] = this.x3(25, 2), this.x4()
		}, this.x1 = function(eD, hY, iK) {
			this.rz[hY] = !1, this.wx[hY] = 0;
			var gM = document.createElement("canvas"),
				qK = (gM.width = this.g3, gM.height = this.g3, gM.getContext("2d", {
					alpha: !0
				}));
			qK.clearRect(0, 0, this.g3, this.g3), 23 === hY ? qK.drawImage(i.um()[4].gM[1], 0, 0) : 36 === hY ? qK.drawImage(i.um()[0].gM[2], 0, 0) : 49 === hY ? qK.drawImage(i.um()[2].gM[1], 0, 0) : qK.drawImage(iK, this.g3 * eD % (eD === hY ? this
				.wm * this.g3 : 4e3), eD === hY ? eR(eD, this.wm) * this.g3 : 0, this.g3, this.g3, 0, 0, this.g3, this.g3), this.uq[hY] = gM
		}, this.x2 = function() {
			this.uq[this.mo - 5] = this.uq[26], this.uq[this.mo - 4] = this.x3(this.mo - 5, 2), this.uq[this.mo - 1] = this.x3(this.mo - 5, 1), this.uq[this.mo - 8] = this.x3(this.mo - 4, 1), this.uq[this.mo - 3] = this.uq[39], this.uq[this.mo - 2] =
				this.x3(this.mo - 3, 1), this.uq[this.mo - 7] = this.x3(this.mo - 2, 1), this.uq[this.mo - 6] = this.x3(this.mo - 7, 1)
		}, this.x3 = function(eD, x5) {
			var gM = document.createElement("canvas"),
				qK = (gM.width = this.g3, gM.height = this.g3, gM.getContext("2d", {
					alpha: !0
				}));
			return qK.clearRect(0, 0, this.g3, this.g3), qK.rotate(x5 * Math.PI / 2), qK.drawImage(this.uq[eD], 1 === x5 ? 0 : -this.g3, -this.g3), gM
		}, this.x4 = function() {
			var eD, db, gH = b9.dG.data[102].value.split("");
			if (2 * gH.length !== this.mo) this.v5 = 0;
			else {
				for (eD = 0; eD < this.mo; eD += 2) db = parseInt(gH[Math.floor(eD / 2)]), this.rz[eD] = db % 2 == 1, this.rz[eD + 1] = 1 < db;
				this.x6()
			}
		}, this.x6 = function() {
			for (var eD = this.v5 = 0; eD < this.mo; eD++) this.rz[eD] && (this.wx[this.v5++] = eD)
		}, this.vH = function() {
			8 === this.v5 && this.wx[0] === this.wq && this.x6()
		}, this.x7 = function() {
			var eD;
			for (this.v5 = this.wp, eD = 0; eD < this.wp; eD++) this.wx[eD] = this.wq + eD
		}, this.x0 = function() {
			this.wr = Math.floor((b7.cv.ft() ? .075 : .0468) * aK.fu), this.zoom = this.wr / this.g3, this.ws = (1 + this.ww) * this.wr
		}, this.show = function(g7, g8) {
			var eD, x9, x8, qP, ja, jb;
			if (this.v5 < 1) this.sv = !1;
			else {
				for (x8 = (x8 = Math.floor(aK.g3 / this.ws)) < 3 ? 3 : x8 > this.wt ? this.wt : x8, x9 = this.v5 > x8 ? x8 : this.v5, x8 = 1 + eR(this.v5 - 1, x9), qP = Math.floor(x9 * this.ws), ja = (ja = (ja = Math.floor(g7 - qP / 2)) + qP > aK
						.g3 ? aK.g3 - qP : ja) < 0 ? 0 : ja, jb = (jb = (jb = Math.floor(g8 - this.ws / 2)) + (g7 = Math.floor(x8 * this.ws)) > aK.g9 ? aK.g9 - g7 : jb) < 0 ? 0 : jb, this.jc = ja + qP, this.jd = jb + g7, eD = 0; eD < this.v5; eD++)
					this.wu[eD] = Math.floor(ja + eD % x9 * this.ws), this.wv[eD] = Math.floor(jb + eR(eD, x9) * this.ws);
				this.sv = !0
			}
		}, this.g6 = function(g7, g8, player) {
			return !!this.sv && (this.sv = !1, this.vG(g7, g8) && this.xC(g7, g8, player) && this.sv || (this.vH(), i.o0()), !0)
		}, this.vG = function(g7, g8) {
			return !(g7 < this.wu[0] || g8 < this.wv[0] || g7 >= this.jc || g8 >= this.jd)
		}, this.xC = function(g7, g8, player) {
			for (var eD = this.v5 - 1; 0 <= eD; eD--)
				if (g7 >= this.wu[eD] && g8 >= this.wv[eD] && g7 <= this.wu[eD] + this.ws && g8 <= this.wv[eD] + this.ws) return 39 === this.wx[eD] ? (this.x7(), this.show(g7, g8)) : (player === eU ? aW.fb.ll(this.wx[eD]) : aW.fN.m0(this.wx[eD],
					player), this.x6()), !0;
			return !1
		}, this.xD = function(eD) {
			return eD < 16 || 40 <= eD && eD < 47
		}, this.xE = function(eD) {
			return eD >= this.wn && eD < this.wn + this.wo
		}, this.gC = function() {
			gD.imageSmoothingEnabled = !0;
			for (var gap = this.ww * this.wr / 2, eD = this.v5 - 1; 0 <= eD; eD--) gD.setTransform(this.zoom, 0, 0, this.zoom, this.wu[eD] + gap, this.wv[eD] + gap), gD.drawImage(this.uq[this.wx[eD]], 0, 0);
			gD.imageSmoothingEnabled = !1, gD.setTransform(1, 0, 0, 1, 0, 0)
		}, this.xF = function(fI, fJ, lm) {
			gD.imageSmoothingEnabled = !0, gD.setTransform(this.zoom, 0, 0, this.zoom, fI, fJ), gD.drawImage(this.uq[lm], 0, 0), gD.imageSmoothingEnabled = !1, gD.setTransform(1, 0, 0, 1, 0, 0)
		}
}

function bY() {
	var vZ, xG, g2, g9, xH;

	function xJ(eD) {
		var gZ = aZ.gE,
			g3 = vZ[eD].gM.width,
			gZ = (vZ[eD].hR === ed ? vZ[eD].qK.fillStyle = aZ.kk : (a2.xL(vZ[eD].hR), vZ[eD].qK.fillStyle = aY.fy.kV(al.dg[0], al.dg[1], al.dg[2], .83), 535 < aY.pD.tR(al.dg, 0, 2) && (gZ = aZ.jg)), vZ[eD].qK.clearRect(0, 0, g3, g9), vZ[eD].qK
				.fillRect(0, 0, g3, g9), ! function(qK, g3, g9) {
					qK.fillStyle = aZ.gE, qK.fillRect(0, 0, g3, 1), qK.fillRect(0, g9 - 1, g3, 1), qK.fillRect(0, 0, 1, g9), qK.fillRect(g3 - 1, 0, 1, g9)
				}(vZ[eD].qK, g3, g9), vZ[eD].qK.fillStyle = gZ, xG + 2 * g9 < g3 && (vZ[eD].qK.fillRect(g3 - xG - g9, 0, 1, g9), vZ[eD].qK.fillText(jk[vZ[eD].hR], Math.floor((g3 - xG) / 2), Math.floor(.57 * g9))), 0 !== vZ[eD].id ? 0 : g9);
		vZ[eD].qK.fillText(aY.ji.jj(vZ[eD].hS), Math.floor(g3 - xG / 2 - gZ), Math.floor(.57 * g9)),
			function(eD, g3, qP) {
				vZ[eD].qK.fillStyle = aZ.kc;
				var xQ = Math.floor(xG * vZ[eD].hS / vZ[eD].xR);
				vZ[eD].qK.fillRect(Math.floor(g3 - xG - qP), g9 - xH, xQ, xH)
			}(eD, g3, gZ), 0 === vZ[eD].id ? (xO(eD, g3), function(eD, g3) {
				vZ[eD].qK.strokeStyle = aZ.kn, vZ[eD].qK.fillRect(g9, 0, 1, g9);
				g3 -= g9;
				vZ[eD].qK.beginPath(), vZ[eD].qK.moveTo(Math.floor(.3 * g9 + g3), Math.floor(g9 / 2)), vZ[eD].qK.lineTo(Math.floor(g9 - .3 * g9 + 0 + g3), Math.floor(g9 / 2)), vZ[eD].qK.stroke(), vZ[eD].qK.beginPath(), vZ[eD].qK.moveTo(Math
					.floor(g9 / 2 + g3), Math.floor(.3 * g9)), vZ[eD].qK.lineTo(Math.floor(g9 / 2 + g3), Math.floor(g9 - .3 * g9 + 0)), vZ[eD].qK.stroke()
			}(eD, g3)) : xO(eD, 2 * g9)
	}

	function xO(eD, g3) {
		vZ[eD].qK.strokeStyle = vZ[eD].xS ? aZ.ki : aZ.ky, vZ[eD].qK.fillStyle = aZ.gE, vZ[eD].qK.fillRect(g3 - g9, 0, 1, g9);
		var xT = Math.floor(g9 / 12),
			xT = (vZ[eD].qK.lineWidth = xT < 3 ? 3 : xT, vZ[eD].qK.lineCap = "round", .35);
		g3 = g9 + 1, vZ[eD].qK.beginPath(), vZ[eD].qK.moveTo(Math.floor(g3 - xT * g9 + 0), Math.floor(xT * g9)), vZ[eD].qK.lineTo(Math.floor(g3 - g9 + xT * g9), Math.floor(g9 - xT * g9 + 0)), vZ[eD].qK.stroke(), vZ[eD].qK.beginPath(), vZ[eD].qK
			.moveTo(Math.floor(g3 - g9 + xT * g9), Math.floor(xT * g9)), vZ[eD].qK.lineTo(Math.floor(g3 - xT * g9 + 0), Math.floor(g9 - xT * g9 + 0)), vZ[eD].qK.stroke()
	}

	function xe(eZ) {
		for (var hS, eD = eZ - 1; 0 <= eD; eD--) hS = a4.eL(eU, eD), vZ[eD].hS !== hS && (vZ[eD].hS = hS, vZ[eD].xR = hS > vZ[eD].xR ? hS : vZ[eD].xR, vZ[eD].xK = !0)
	}

	function xI(xg) {
		xg.gM = document.createElement("canvas"), ap.p7.font = g2;
		var g3 = xG;
		xg.hR < ed && 0 === xg.id && (g3 += Math.floor(ap.p7.measureText(jk[xg.hR] + "000").width)), g3 += g9, 0 === xg.id && (g3 += g9), xg.gM.width = g3, xg.gM.height = g9, xg.qK = xg.gM.getContext("2d", {
			alpha: !0
		}), xg.qK.font = g2, aY.fy.textBaseline(xg.qK, 1), aY.fy.textAlign(xg.qK, 1)
	}

	function xa(eD) {
		return r.xi() ? aK.g3 - vZ[eD].gM.width - b0.gap : r.fI
	}

	function xb(eD) {
		return Math.floor(2 * b0.gap + (r.xi() ? t.g9 + b0.gap : 0) + r.g9 + eD * (1.3 * g9))
	}
	this.cq = function() {
		vZ = [], this.resize()
	}, this.resize = function() {
		g2 = k.g2, g9 = k.fontSize + 5, g9 = Math.floor(1.25 * g9), b7.cv.ft() && (g9 = Math.floor(1.25 * g9)), xH = Math.floor(.15 * g9), ap.p7.font = g2, xG = Math.floor(ap.p7.measureText("02 000 000 0000").width);
		for (var eD = vZ.length - 1; 0 <= eD; eD--) xI(vZ[eD]), xJ(eD)
	}, this.j4 = function() {
		for (var eD = vZ.length - 1; 0 <= eD; eD--) vZ[eD].xK && (vZ[eD].xK = !1, xJ(eD))
	}, this.g6 = function(g7, fJ) {
		if (2 !== rG && 0 !== h1[eU] && !fL && a2.v6(eU))
			for (var xV, xW, xX, xY = b7.cv.ft() ? g9 : 0, xZ = b7.cv.ft() ? Math.floor(.15 * g9) : 0, eD = vZ.length - 1; 0 <= eD; eD--)
				if (xV = xa(eD), xW = xb(eD), xX = vZ[eD].gM.width, xW - xZ <= fJ && fJ <= xW + g9 + xZ) {
					if (xV - xY <= g7 && g7 <= xV + g9 + xY) return vZ[eD].xS || (vZ[eD].xK = !0, vZ[eD].xS = !0, 0 === vZ[eD].id && aW.fb.lj(vZ[eD].hR)), !0;
					if (0 === vZ[eD].id && xV + xX - g9 - xY <= g7 && g7 <= xV + xX + xY) return aW.fb.fm(o.fk(), vZ[eD].hR), !0
				} return !1
	}, this.i5 = function() {
		var eZ;
		2 !== rG && 0 !== h1[eU] && !fL && a2.v6(eU) && (function(eZ) {
			if (vZ.length !== eZ) return 1;
			for (var eD = eZ - 1; 0 <= eD; eD--)
				if (vZ[eD].id !== a4.eF(eU, eD) || vZ[eD].hR !== a4.eK(eU, eD)) return 1;
			return
		}(eZ = a4.eE(eU)) && function(eZ) {
			var eD, id, hR, hh, hS, vq = [];
			loop: for (eD = 0; eD < eZ; eD++) {
				for (id = a4.eF(eU, eD), hR = a4.eK(eU, eD), hh = 0; hh < vZ.length; hh++)
					if (vZ[hh].id === id && vZ[hh].hR === hR) {
						vq.push(vZ.splice(hh, 1)[0]);
						continue loop
					} hS = a4.eL(eU, eD), xI(hS = {
					hR: hR,
					hS: hS,
					xR: hS,
					id: id,
					xK: !0,
					xS: !1,
					gM: null,
					qK: null
				}), vq.push(hS)
			}
			vZ = vq
		}(eZ), xe(eZ))
	}, this.xh = function(eg) {
		for (var eZ = Math.min(vZ.length, a4.eE(eU)), eD = 0; eD < eZ; eD++)
			if (vZ[eD].hR === eg) return void(vZ = [])
	}, this.gC = function() {
		if (0 !== h1[eU] && a2.v6(eU) && !fL)
			for (var eD = vZ.length - 1; 0 <= eD; eD--) gD.drawImage(vZ[eD].gM, xa(eD), xb(eD))
	}
}

function bZ() {
	var vZ, iT, xj, xk, g9, g2, fontSize, xl, xm, xn, xo, gM, qK, jw, xp;

	function xw() {
		gD.drawImage(gM, b0.gap + (hL ? b0.gap + b5.xx() : 0), xy + 2 * b0.gap)
	}

	function xq() {
		gM.width = vZ[0].width + xn, gM.height = g9 + xn, (qK = gM.getContext("2d", {
				alpha: !0
			})).clearRect(0, 0, vZ[0].width + xn, g9 + xn), qK.translate(Math.floor(xn / 2), Math.floor(xn / 2)), qK.lineWidth = xn, qK.fillStyle = 1 === vZ[0].xv ? aZ.kf : aZ.kY, xz(), qK.fill(), qK.strokeStyle = 1 === vZ[0].xv ? aZ.jg : aZ.gE,
		xz(), qK.stroke(), aY.fy.textAlign(qK, 1), aY.fy.textBaseline(qK, 1), qK.fillStyle = 1 === vZ[0].xv ? aZ.jg : aZ.gE, qK.font = g2[0], qK.fillText(aV.nZ[66 + vZ[0].xu], Math.floor(vZ[0].width / 2), Math.floor(.72 * xl[0] * g9)), qK.font = g2[
				1], qK.fillText(vZ[0].fw, Math.floor(vZ[0].width / 2), Math.floor((xl[0] + .48 * xl[1]) * g9))
	}

	function xz() {
		qK.beginPath(), qK.moveTo(xo, 0), qK.lineTo(vZ[0].width - xo, 0), qK.lineTo(vZ[0].width, xo), qK.lineTo(vZ[0].width, g9 - xo), qK.lineTo(vZ[0].width - xo, g9), qK.lineTo(xo, g9), qK.lineTo(0, g9 - xo), qK.lineTo(0, xo), qK.closePath()
	}
	this.cq = function() {
		iT = 4, xj = xk = jw = 0, vZ = [], g2 = new Array(2), fontSize = new Array(2), (xl = new Array(2))[0] = .3, xl[1] = .7, xm = new Array(4), gM = document.createElement("canvas"), xp = b3.dY + 2e3, this.resize()
	}, this.resize = function() {
		var eD, g3;
		for (g9 = Math.floor((b7.cv.ft() ? .0725 : .058) * aK.fu), fontSize[0] = Math.floor(.85 * xl[0] * g9), fontSize[1] = Math.floor(.85 * xl[1] * g9), g2[0] = aY.fy.fz(1, fontSize[0]), g2[1] = aY.fy.fz(1, fontSize[1]), eD = xm.length -
			1; 0 <= eD; eD--) xm[eD] = this.measureText(aV.nZ[66 + eD] + "000", g2[0]);
		if (xn = Math.floor(1 + .05 * g9), xo = Math.floor(.2 * g9), 0 < vZ.length) {
			for (eD = vZ.length - 1; 0 <= eD; eD--) g3 = this.measureText(vZ[eD].fw + "00", g2[1]), vZ[eD].width = g3 < xm[eD] ? xm[eD] : g3;
			xq()
		}
	}, this.i5 = function() {
		0 !== iT && (4 === iT ? b3.dY > xp && (iT = 0, 1 === rG) && n.rX(ap.ih.pY[ap.pZ].name, 3, 1, 9) : (1 === iT ? (0 === xj && (xq(), xj = 1e-4), 1 <= (xj += .002 * (b3.dY - jw)) && (xk = 0, iT = 2, xj = 1), b3.d1 = !0) : 2 === iT ? ((xk += (
			b3.dY - jw) / 1e3) > vZ[0].k1 || 1 < xk && 1 < vZ.length) && (iT = 3) : 3 === iT && ((xj -= .002 * (b3.dY - jw)) <= 0 && (xj = 0, vZ.shift(), iT = 0 < vZ.length ? 1 : 0), b3.d1 = !0), jw = b3.dY))
	}, this.measureText = function(fw, g2) {
		return gD.font = g2, Math.floor(gD.measureText(fw).width)
	}, this.hO = function(xt, eD) {
		this.rX(jk[xt], eD, 1, 0 === eD ? 3 : 7)
	}, this.rX = function(fw, xu, xv, k1) {
		var g3 = (g3 = this.measureText(fw + "00", g2[1])) < xm[xu] ? xm[xu] : g3;
		vZ.push({
			fw: fw,
			width: g3,
			xu: xu,
			xv: xv,
			k1: k1
		}), 0 === iT && (xj = 0, iT = 1, jw = b3.dY)
	}, this.gC = function() {
		0 !== iT && 0 !== xj && (xj < 1 ? (gD.globalAlpha = xj, xw(), gD.globalAlpha = 1) : xw())
	}
}

function c7() {
	var g9, gM, qK, y0, y1, y2, y3, y4, xK, y5, y6, y7, y8, y9;

	function g0() {
		var g3 = aI.g3,
			oz = (xK = !1, qJ(qK, g3, g9), Math.floor(g3 / 2));
		1 === y1 ? (qK.fillStyle = aZ.kp, qK.fillRect(oz, 0, oz, g9)) : -1 === y1 && (qK.fillStyle = aZ.l1, qK.fillRect(0, 0, oz, g9)), qL(qK, g3, g9, 2);
		var oz = (oz = Math.floor(.25 * g9)) < 2 ? 2 : oz,
			wT = (qK.fillStyle = aZ.kg, Math.floor((g9 - 4) * y2[1] / y3[1]));
		0 < wT && qK.fillRect(2, g9 - 2 - wT, oz, wT), 0 < (wT = Math.floor((g9 - 4) * y2[0] / y3[0])) && qK.fillRect(g3 - 2 - oz, g9 - 2 - wT, oz, wT);
		oz = (oz = Math.floor(g9 / 8)) < 2 ? 2 : oz;
		qN(qK, Math.floor(.4 * g9), 0, g9, oz, .5, !1), qN(qK, Math.floor(g3 - 1.4 * g9), 0, g9, oz, .5, !0), qK.drawImage(y0, Math.floor((g3 - y0.width) / 2), 3)
	}

	function yB() {
		xK = !0, y5 = 140, y1 = 0, y4 = [], aI.sv = !1, k.r6(247, 0), y2[0] = y2[1] = 0
	}

	function gB() {
		return o.w0(k.vw()) ? o.fJ - g9 - b0.gap : aa.w0(k.vz()) ? aa.gB() - g9 - b0.gap : aK.g9 - g9 - bA.ue() * b0.gap
	}
	this.sv = !1, this.g3 = 0, this.cq = function() {
		y7 = y8 = 0, this.sv = !1, xK = y9 = !1, y5 = 140, y2 = [y1 = 0, 0], y3 = [1, 1], y4 = [], y6 = new Uint32Array(10), this.resize()
	}, this.resize = function() {
		g9 = o.g9, this.g3 = 4 * g9, this.yA(), (gM = document.createElement("canvas")).width = this.g3, gM.height = g9, qK = gM.getContext("2d", {
			alpha: !0
		}), g0()
	}, this.j4 = function() {
		xK && g0()
	}, this.yA = function() {
		var gN, xn, oz, xB = (xB = g9 - 6) < 6 ? 6 : xB;
		void 0 !== y0 && y0.width === xB || ((y0 = document.createElement("canvas")).width = xB, y0.height = xB, (gN = y0.getContext("2d", {
				alpha: !0
			})).clearRect(0, 0, xB, xB), xn = Math.floor(xB / 8), gN.lineWidth = xn = xn < 1 ? 1 : xn, gN.strokeStyle = aZ.gE, oz = Math.floor(xB / 2), xB = Math.floor((xB - xn) / 2), gN.beginPath(), gN.arc(oz, oz, xB, 0, 2 * Math.PI), gN
			.moveTo(oz, oz - xB), gN.lineTo(oz, oz + xB), gN.moveTo(oz + Math.cos(.78 * Math.PI) * xB, oz + Math.cos(.28 * Math.PI) * xB), gN.lineTo(oz, oz), gN.lineTo(oz + Math.cos(.22 * Math.PI) * xB, oz + Math.cos(1.72 * Math.PI) * xB), gN
			.stroke())
	}, this.g6 = function(fI, fJ) {
		var jb;
		return !(fI < aK.g3 - this.g3 - b0.gap || fJ < (jb = gB()) || jb + g9 < fJ || (fL || aW.fb.lp(fI > aK.g3 - b0.gap - this.g3 / 2 ? 1 : 0), 0))
	}, this.i5 = function() {
		if (0 < y8) 0 === --y8 && yB();
		else if (this.sv) 270 == --y5 && 2 <= y7 && function() {
			var eD;
			for (eD = iM - 1; 0 <= eD; eD--)
				if (a2.v6(iN[eD])) return;
			return 1
		}() && (xK = !0, y2[0] += y3[0]), 180 === y5 && 3 * y2[0] < y3[0] ? yB() : y2[0] >= y3[0] ? y9 ? ao.r1.r4() : ao.r1.r9(-1) : y2[1] >= y3[1] ? y8 = 4 : y5 <= 0 && yB();
		else if (function() {
				var eD;
				for (eD = 9; 0 <= eD; eD--) 12 < Math.abs(y6[eD] - ez[jE[eD]]) && (y5 = 140), y6[eD] = ez[jE[eD]];
				if (--y5 <= 0) return 1;
				return
			}()) {
			(y9 = yE()) && k.wI(), this.sv = !0, y5 = 360;
			var eD, dZ = 0;
			for (eD = iM - 1; 0 <= eD; eD--) a2.v6(iN[eD]) && (dZ += ez[iN[eD]]);
			y3[0] = vy(eR(3 * dZ, 5), 1), hL && 9 !== ij && (y3[0] = yG(vy(eR(dZ * (100 - eR(100 * b5.rV(), uE)), 100), 1), y3[0])), y3[1] = vy(dZ - y3[0], 1), y7++
		}
	}, this.rH = function() {
		this.sv && y2[0] < y3[0] && yB()
	}, this.mq = function(player, yI) {
		var eD, dZ;
		if (this.sv) {
			for (eD = y4.length - 1; 0 <= eD; eD--)
				if (y4[eD] === player) return;
			y4.push(player), xK = !0, dZ = il ? y3[0] : ez[player], yI ? y2[0] += dZ : y2[1] += dZ, player === eU && (y1 = yI ? 1 : -1)
		}
	}, this.gC = function() {
		var fJ;
		this.sv && (fJ = gB(), gD.drawImage(gM, aK.g3 - this.g3 - b0.gap, fJ))
	}
}

function ba() {
	var g3, fI, yJ, gM, qK, sv, h4, yK, g2, xK, yL = 11 / 12;

	function yN() {
		var xQ = Math.floor(h4 * (g3 - 2 * yJ)),
			yQ = 1 + Math.floor(.0625 * o.g9),
			yR = 1 + Math.floor(.3 * o.g9),
			xB = Math.floor(.55 * o.g9);
		qK.clearRect(0, 0, g3, o.g9), qK.fillStyle = aZ.kX, qK.fillRect(0, 0, yJ, o.g9), qK.fillRect(yJ + xQ, 0, g3 - yJ - xQ, o.g9), qK.fillStyle = h4 < 1 / 3 ? "rgba(" + Math.floor(3 * h4 * 130) + ",130,0,0.85)" : h4 < 2 / 3 ? "rgba(130," + (130 -
				Math.floor(3 * (h4 - 1 / 3) * 130)) + ",0,0.85)" : "rgba(130,0," + Math.floor(3 * (h4 - 2 / 3) * 130) + ",0.85)", qK.fillRect(yJ, 0, xQ, o.g9), qK.fillStyle = aZ.gE, qK.fillRect(0, 0, g3, 1), qK.fillRect(0, o.g9 - 1, g3, 1), qK
			.fillRect(0, 0, 1, o.g9), qK.fillRect(yJ, 0, 1, o.g9), qK.fillRect(yJ + xQ, 0, 1, o.g9), qK.fillRect(g3 - yJ, 0, 1, o.g9), qK.fillRect(g3 - 1, 0, 1, o.g9), qK.fillRect(Math.floor(.25 * o.g9) + yR, Math.floor((o.g9 - yQ) / 2), o.g9 - 2 *
				yR, yQ), qK.fillRect(Math.floor(g3 - 1.25 * o.g9) + yR, Math.floor((o.g9 - yQ) / 2), o.g9 - 2 * yR - yR % 2, yQ), qK.fillRect(Math.floor(g3 - 1.25 * o.g9) + Math.floor((o.g9 - yQ) / 2), yR, yQ, o.g9 - 2 * yR - yR % 2), yK = aY.fN.h3(
				eU, o.fk()), qK.fillText(aY.ji.jj(yK) + " (" + aY.ji.u0(100 * h4, +(h4 < .1)) + ")", Math.floor(.5 * g3), xB)
	}
	this.setAbsolutePercentage = function(newPercentage) {
		h4 = newPercentage;
	};
	keybindFunctions.setAbsolute = this.setAbsolutePercentage;
	keybindFunctions.setRelative = (arg1) => o.t7(arg1);

	function yV(fr) {
		return !(1 < fr && 1 === h4 || (1 < fr && fr * h4 - h4 < 1 / 1024 ? fr = (h4 + 1 / 1024) / h4 : fr < 1 && h4 - fr * h4 < 1 / 1024 && (fr = (h4 - 1 / 1024) / h4), h4 = ai.lP(h4 * fr, 1 / 1024, 1), yN(), 0))
	}

	function yW(g7) {
		return h4 !== (h4 = ai.lP((g7 - fI - yJ) / (g3 - 2 * yJ), 1 / 1024, 1)) && (yN(), !0)
	}
	this.fJ = 0, this.sw = !1, this.cq = function() {
		sv = !fa && !fL, xK = !1, h4 = .5, yK = 0, this.sw = !1, this.resize()
	}, this.resize = function() {
		b7.cv.ft() && aK.g3 < .8 * aK.g9 ? (this.g9 = Math.floor(.0536 * aK.fu), g3 = aK.g3 - 4 * b0.gap - this.g9) : (g3 = Math.floor((b7.cv.ft() ? .65 : .389) * aK.fu), g3 += 12 - g3 % 12, this.g9 = Math.floor(g3 / 12)), yJ = Math.floor(3 *
			this.g9 / 2), g2 = aY.fy.fz(1, Math.floor(.5 * this.g9)), (gM = document.createElement("canvas")).width = g3, gM.height = this.g9, (qK = gM.getContext("2d", {
			alpha: !0
		})).font = g2, aY.fy.textBaseline(qK, 1), aY.fy.textAlign(qK, 1), this.yM(), yN()
	}, this.yM = function() {
		fI = b7.cv.ft() && aK.g3 < .8 * aK.g9 ? this.g9 + 3 * b0.gap : Math.floor((aK.g3 - g3) / 2), this.fJ = aK.g9 - this.g9 - bA.ue() * b0.gap
	}, this.j4 = function() {
		xK && (xK = !1, yN())
	}, this.sv = function() {
		return !(!sv || j.fM && fI < Math.floor(b0.gap + 5.5 * this.g9))
	}, this.w0 = function(g4) {
		return !!this.sv() && fI + g3 > aK.g3 - g4 - b0.gap
	}, this.gA = function() {
		sv = !fL
	}, this.yB = function() {
		sv = !1
	}, this.fk = function() {
		return ai.lP(Math.floor(1024 * h4 + .5) - 1, 0, 1023)
	}, this.t3 = function(g7, g8) {
		return this.sv() && fI < g7 && g7 < fI + g3 && g8 > this.fJ
	}, this.g6 = function(g7, g8) {
		return !!this.sv() && !!o.t3(g7, g8) && (p.k8 = !1, function(vJ, g7, g8) {
			if (function(g7, g8) {
					return fI < g7 && g7 < fI + yJ && g8 > o.fJ
				}(g7, g8)) return yV(yL);
			if (function(g7, g8) {
					return fI + g3 - yJ < g7 && g7 < fI + g3 && g8 > o.fJ
				}(g7, g8)) return yV(1 / yL);
			return vJ.sw = !0, yW(g7)
		}(this, g7, g8) && (b3.d1 = !0), !0)
	}, this.t7 = function(kF) {
		0 !== rG && this.sv() && yV(kF) && (b3.d1 = !0)
	}, this.sa = function(deltaY) {
		var kF;
		return !(0 === deltaY || !this.sv()) && yV(kF = 0 < deltaY ? (kF = 400 / (400 + deltaY)) < yL ? yL : kF : 1 / yL < (kF = (400 - deltaY) / 400) ? 1 / yL : kF)
	}, this.sX = function(g7, g8) {
		return !!this.sw && yW(g7)
	}, this.sz = function() {
		this.sw = !1
	}, this.i5 = function() {
		this.sv() && yK !== aY.fN.h3(eU, this.fk()) && (xK = !0)
	}, this.gC = function() {
		this.sv() && gD.drawImage(gM, fI, this.fJ)
	}
}

function cI() {
	var gM, qK, yX, font, yY = 0,
		yZ = !1,
		ya = [10, 5, 3, 2, 1.5, 1, .75, .5, .25],
		yb = 5;

	function yh() {
		if (yZ) {
			var eD, eZ = ya.length,
				xB = Math.floor(.5 * yX.g9),
				g9 = eZ * xB,
				fI = Math.floor(Math.floor(yX.fI) + .3 * yX.g3 - .5),
				fJ = Math.floor(Math.floor(yX.fJ) - g9),
				g3 = Math.floor(.4 * yX.g3 + 2.5);
			for (gD.fillStyle = aZ.kX, gD.fillRect(fI, fJ, g3, g9), gD.fillStyle = aZ.ku, gD.fillRect(fI, fJ + yb * xB, g3, xB), gD.fillStyle = aZ.gE, gD.fillRect(fI, fJ, 2, g9), gD.fillRect(fI, fJ, g3, 2), gD.fillRect(fI + g3 - 2, fJ, 2, g9), eD =
				1; eD < eZ; eD++) gD.fillRect(fI, fJ + eD * xB, g3, 2);
			for (gD.fillStyle = aZ.gE, aY.fy.textAlign(gD, 1), aY.fy.textBaseline(gD, 1), gD.font = aY.fy.fz(0, .6 * xB), fI += .5 * g3, eD = 0; eD < eZ; eD++) gD.fillText(yp(eD), fI, fJ + (eD + .6) * xB)
		}
		gD.drawImage(gM, Math.floor(yX.fI), Math.floor(yX.fJ))
	}

	function g0(vJ) {
		var fI, ja, jb, xB;
		qK.clearRect(0, 0, Math.floor(yX.g3), Math.floor(yX.g9)), qK.fillStyle = aZ.kX, qK.fillRect(0, 0, Math.floor(yX.g3), Math.floor(yX.g9)), k7 && (qK.fillStyle = aZ.ku, qK.fillRect(0, 0, Math.floor(.3 * yX.g3), Math.floor(yX.g9))), qK
			.fillStyle = aZ.gE, qK.fillText("Hide UI", .15 * yX.g3, .5 * yX.g9), qK.fillRect(Math.floor(.3 * yX.g3 - .5), 0, 2, Math.floor(yX.g9)), fI = .5 * yX.g3, qK.fillText("Replay Speed", fI, .31 * yX.g9), qK.fillText(yp(yb), fI, .69 * yX.g9),
			qK.fillRect(Math.floor(.7 * yX.g3 - .5), 0, 2, Math.floor(yX.g9)), vJ.vQ ? (fI = Math.floor(.02 * yX.g3), vJ = Math.floor(.025 * yX.g3), ja = Math.floor(.85 * yX.g3 - fI - .5 * vJ), jb = Math.floor(.25 * yX.g9), xB = Math.floor(yX.g9) -
				2 * jb, qK.fillRect(ja, jb, fI, xB), qK.fillRect(ja + fI + vJ, jb, fI, xB)) : function() {
				var g3 = Math.floor(.46 * yX.g9),
					g9 = Math.floor(.23 * yX.g9),
					fI = Math.floor(.85 * yX.g3 - .5 * g3 + g3 / 12),
					fJ = Math.floor(.5 * yX.g9 - g9);
				qK.beginPath(), qK.moveTo(fI, fJ), qK.lineTo(fI + g3, fJ + g9), qK.lineTo(fI, fJ + (g9 << 1)), qK.fill()
			}(), qK.fillRect(0, 0, Math.floor(yX.g3), 2), qK.fillRect(0, 0, 2, Math.floor(yX.g9)), qK.fillRect(0, Math.floor(yX.g9) - 2, Math.floor(yX.g3), 2), qK.fillRect(Math.floor(yX.g3 - 2), 0, 2, Math.floor(yX.g9))
	}

	function yp(eD) {
		return 5 === eD ? "Normal" : "" + ya[eD]
	}
	this.vQ = !1, this.cq = function() {
		fL && (yb = 5, this.vQ = !1, yZ = !1, yX = new nT([.3, .3 / 6], [.5, 1]), this.resize())
	}, this.yc = function() {
		return ya[yb]
	}, this.gB = function() {
		return yX.fJ
	}, this.w0 = function(g4) {
		return !!fL && yX.fI + yX.g3 > aK.g3 - g4 - b0.gap
	}, this.resize = function() {
		fL && (yX.resize(), yX.fJ -= (bA.ue() - 1) * b0.gap, font = aY.fy.fz(0, .3 * yX.g9), (gM = document.createElement("canvas")).width = Math.floor(yX.g3), gM.height = Math.floor(yX.g9), (qK = gM.getContext("2d", {
			alpha: !0
		})).font = font, aY.fy.textAlign(qK, 1), aY.fy.textBaseline(qK, 1), g0(this))
	}, this.tB = function(yd) {
		yd !== k7 && (k7 = yd, b5.resize(), b3.d1 = !0, fL) && (yY = b3.dY + 2e3, g0(this))
	}, this.g6 = function(fI, fJ) {
		if (!fL) return !1;
		if (fI < yX.fI || fJ < yX.fJ || fI > yX.fI + yX.g3) return yZ && function(vJ, fI, fJ) {
			var eZ = ya.length,
				xB = Math.floor(.5 * yX.g9),
				g9 = eZ * xB,
				ja = Math.floor(Math.floor(yX.fI) + .3 * yX.g3 - .5),
				g9 = Math.floor(Math.floor(yX.fJ) - g9),
				g3 = Math.floor(.4 * yX.g3 + 2.5);
			return yZ = !1, b3.d1 = !0, fI < ja || ja + g3 < fI || fJ < g9 || (yb = yg(0, Math.floor((fJ - g9) / xB), eZ - 1), g0(vJ)), !0
		}(this, fI, fJ);
		if ((fI -= yX.fI) < .3 * yX.g3) yZ = !1, this.tB(!k7);
		else {
			if (fI < .7 * yX.g3) return yZ = !yZ, b3.d1 = !0;
			this.tD(!1)
		}
		return !0
	}, this.tD = function(yf) {
		2 === rG ? (this.tB(!1), ar.oY(3)) : (yZ = !1, this.vQ = !this.vQ, this.vQ ? j.fM ? j.tC() : b7.cv.setState(1) : yf || j.vR(), b3.d1 = !0, g0(this))
	}, this.sq = function(fI, fJ) {
		return !!k7 && (j.g6(fI, fJ) || (fL ? ((b3.dY > yY || !this.g6(fI, fJ)) && p.g6(fI, fJ), b3.d1 = !0, yY = b3.dY + 2e3) : p.g6(fI, fJ)), !0)
	}, this.i5 = function() {
		fL && k7 && b3.dY > yY - 1e3 && b3.dY < yY && (b3.d1 = !0)
	}, this.rL = function() {
		fL && (this.vQ = !1, b3.d1 = !0, g0(this))
	}, this.gC = function() {
		if (fL) {
			if (k7) {
				if (b3.dY > yY) return;
				if (b3.dY > yY - 1e3) return gD.globalAlpha = yg(0, (1e3 - (b3.dY - (yY - 1e3))) / 1e3, 1), yh(), void(gD.globalAlpha = 1)
			}
			yh()
		}
	}
}

function bb() {
	var yq, yr, g3, fI, fJ, ys, yt;
	this.cq = function() {
		yq = new Array(2), yr = new Array(2), this.k8 = !1, yt = ys = h7 = h5 = 0, h6 = 1, this.resize()
	}, this.resize = function() {
		g3 = (g3 = Math.floor((b7.cv.ft() ? .072 : .0502) * aK.fu)) < 8 ? 8 : g3;
		for (var eD = 1; 0 <= eD; eD--) yq[eD] = document.createElement("canvas"), yq[eD].width = g3, yq[eD].height = g3, yr[eD] = yq[eD].getContext("2d", {
			alpha: !0
		});
		this.yM(),
			function() {
				for (var z8 = Math.floor(1 + g3 / 20), eD = 1; 0 <= eD; eD--) yr[eD].clearRect(0, 0, g3, g3), yr[eD].fillStyle = aZ.kU, yr[eD].beginPath(), yr[eD].arc(g3 / 2, g3 / 2, g3 / 2 - z8, 0, 2 * Math.PI), yr[eD].fill(), yr[eD].lineWidth =
					z8, yr[eD].fillStyle = aZ.gE, yr[eD].strokeStyle = aZ.gE, yr[eD].beginPath(), yr[eD].arc(g3 / 2, g3 / 2, g3 / 2 - z8, 0, 2 * Math.PI), yr[eD].stroke(), qN(yr[eD], 0, 0, g3, z8, .3, 0 === eD)
			}()
	}, this.je = function() {
		return -h5 / h6
	}, this.gB = function() {
		return -h7 / h6
	}, this.kH = function(yx, gp) {
		h5 = h6 * yx - gp
	}, this.kI = function(yy, gq) {
		h7 = h6 * yy - gq
	}, this.g6 = function(yw, w1) {
		return k7 || ! function(yw, w1) {
			return Math.pow(yw - (fI + g3 / 2), 2) + Math.pow(w1 - (fJ + g3 / 2), 2) < g3 * g3 / 4 || Math.pow(yw - (fI + g3 / 2), 2) + Math.pow(w1 - (fJ + 2 * g3), 2) < g3 * g3 / 4
		}(yw, w1) || b9.dG.data[8].value ? (f.kK() && (this.k8 = !0, ys = yw, yt = w1), !1) : w1 < fJ + 1.25 * g3 ? this.sa(Math.floor(aK.g3 / 2), Math.floor(aK.g9 / 2), -200) : this.sa(Math.floor(aK.g3 / 2), Math.floor(aK.g9 / 2), 200)
	}, this.sX = function(yw, w1) {
		var yz, z0, gs, gv;
		return !f.kK() || (yz = h5, z0 = h7, h5 += gs = ys - yw, h7 += gv = yt - w1, a6.sX(gs, gv), this.z1(), ys = yw, yt = w1, yz !== h5) || z0 !== h7
	}, this.sa = function(g7, g8, deltaY) {
		var kF;
		if (f.kK()) {
			if (0 < deltaY) kF = (kF = 500 / (500 + deltaY)) < .5 ? .5 : kF;
			else {
				if (!(deltaY < 0)) return !1;
				kF = 2 < (kF = (500 - deltaY) / 500) ? 2 : kF
			}
			this.z2(g7, g8, kF), b3.d1 = !0
		}
		return !0
	}, this.z2 = function(fI, fJ, fX) {
		var fr;
		fX = fr = (fr = 1024 < (fr = fX) * h6 ? 1024 / h6 : fr) * h6 < .125 ? .125 / h6 : fr, a6.zoom(fX, fI, fJ),
			function(fr, g7, g8) {
				h6 *= fr, h5 = (h5 + g7) * fr - g7, h7 = (h7 + g8) * fr - g8, p.z1()
			}(fX, fI, fJ)
	}, this.z1 = function() {
		var z5 = aK.g3 / 16,
			gV = 0,
			z6 = aK.g9 / 16,
			gX = 0;
		h5 < -aK.g3 + z5 && (gV = -aK.g3 + z5 - h5), h5 > h6 * ap.e8 - z5 && (gV = h6 * ap.e8 - z5 - h5), h7 < -aK.g9 + z6 && (gX = -aK.g9 + z6 - h7), h7 > h6 * ap.e9 - z6 && (gX = h6 * ap.e9 - z6 - h7), h5 += gV, h7 += gX, ax.kJ(), a6.z7(gV, gX)
	}, this.yM = function() {
		fI = aK.g3 - g3 - b0.gap, fJ = Math.floor(aK.g9 / 2 - 1.25 * g3)
	}, this.gC = function() {
		b9.dG.data[8].value || (gD.drawImage(yq[0], fI, fJ), gD.drawImage(yq[1], fI, Math.floor(fJ + 3 * g3 / 2)))
	}
}

function bc() {
	var dl, pc, z9, zA, gap, zB, zC, zD, zE, zF, g2, zG, fF, zH, zI, xQ, zJ, zK, zL;

	function zP() {
		zA = Math.floor(.2 * (b7.cv.ft() ? .07 : .035) * aK.fu), zA = vy(b7.cv.ft() ? 3 : 1, zA);
		var zU = aK.g3 / (dl.length + gap);
		zA = zA < zU ? zU : zA, xQ = Math.floor((1 - gap) * zA), pc = 0, zV()
	}

	function zV() {
		pc = (pc = pc < -20 ? -20 : pc) > (dl.length - 15) * zA ? (dl.length - 15) * zA : pc, zC = Math.floor(pc / zA), zD = (zD = zC + Math.floor(aK.g3 / zA)) > dl.length - 1 ? dl.length - 1 : zD, zC = (zC = zD < zC ? zD : zC) < 0 ? 0 : zC;
		var oz = zD;
		zB = z9 / dl[oz];
		for (var eD = zD - 1; zC <= eD; eD--) dl[eD] > dl[oz] && (oz = eD, zB = z9 / Math.pow(dl[eD], zI))
	}

	function zY(fI) {
		fI = Math.floor((pc + aK.g3 - fI - gap * zA) / zA);
		return (fI = fI < -1 ? -1 : -1 === fI ? 0 : fI > dl.length - 1 ? -1 : fI) !== zE && (zE = fI, -1 === zJ && 0 === zE && zH && (zJ = setInterval(zZ, 100)), 1)
	}

	function za(eD) {
		var xH = Math.floor(zB * Math.pow(dl[eD], zI));
		gD.fillRect(pc + aK.g3 - (eD + 1) * zA, aK.g9 - xH, xQ, xH)
	}

	function zZ() {
		var eg;
		0 !== (zE = 8 === x.rp() ? -1 : zE) ? (zK = (new Date).getTime(), clearInterval(zJ), zJ = -1) : (eg = dl[1] / 864e3, -1 !== zK && (eg += ((new Date).getTime() - zK) * dl[1] / 864e5, zK = -1), 0 < eg && (dl[0] += Math.floor(eg), b3.d1 = !0))
	}
	this.cq = function() {
		zH = !(zK = zJ = -1), zE = -(zI = 1), this.zM = !1, fF = 0, zG = new Date, pc = 0, gap = .3, (zL = []).push({
			wM: "Plateau A",
			eZ: 0,
			dE: 57
		}), zL.push({
			wM: "Max A",
			eZ: 1,
			dE: 1
		}), zL.push({
			wM: "Black Friday",
			eZ: 15,
			dE: 15
		}), zL.push({
			wM: "Max B",
			eZ: 19,
			dE: 19
		}), zL.push({
			wM: "Max C",
			eZ: 44,
			dE: 44
		}), zL.push({
			wM: "First Android Version",
			eZ: 58,
			dE: 58
		}), zL.push({
			wM: "Max D",
			eZ: 67,
			dE: 67
		}), zL.push({
			wM: "The iFrame Explosion",
			eZ: 98,
			dE: 99
		}), zL.push({
			wM: "The 155-Day Uptrend",
			eZ: 58,
			dE: 213
		}), zL.push({
			wM: "Max E",
			eZ: 213,
			dE: 213
		}), zL.push({
			wM: "Plateau B",
			eZ: 214,
			dE: 259
		}), zL.push({
			wM: "Turbulent Times",
			eZ: 260,
			dE: 344
		}), zL.push({
			wM: "Max F",
			eZ: 262,
			dE: 262
		}), zL.push({
			wM: "Max G",
			eZ: 282,
			dE: 282
		}), zL.push({
			wM: "Max H",
			eZ: 333,
			dE: 333
		}), zL.push({
			wM: "The 19-Day Downtrend",
			eZ: 283,
			dE: 301
		}), zL.push({
			wM: "Plateau C",
			eZ: 345,
			dE: 385
		}), zL.push({
			wM: "The Alliance Ascent",
			eZ: 386,
			dE: 395
		}), zL.push({
			wM: "Max I",
			eZ: 395,
			dE: 395
		}), zL.push({
			wM: "First iOS Version",
			eZ: 411,
			dE: 411
		}), zL.push({
			wM: "Plateau D",
			eZ: 396,
			dE: 453
		}), zL.push({
			wM: "The TikTok Revolution",
			eZ: 454,
			dE: 470
		}), zL.push({
			wM: "Max J",
			eZ: 456,
			dE: 456
		}), zL.push({
			wM: "Max K",
			eZ: 472,
			dE: 472
		}), zL.push({
			wM: "Max L",
			eZ: 478,
			dE: 478
		}), zL.push({
			wM: "YT Drew",
			eZ: 471,
			dE: 485
		}), zL.push({
			wM: "Plateau E",
			eZ: 485,
			dE: 600
		}), zL.push({
			wM: "Uptrend A",
			eZ: 600,
			dE: 613
		}), zL.push({
			wM: "Max M",
			eZ: 613,
			dE: 613
		}), zL.push({
			wM: "Downtrend A",
			eZ: 614,
			dE: 635
		}), zL.push({
			wM: "Plateau F",
			eZ: 636,
			dE: 737
		}), zL.push({
			wM: "End of Record",
			eZ: 738,
			dE: 738
		}), dl = [208644377, 208644377, 208644377, 206964709, 205156594, 250680803, 249089835, 234476552, 252346209, 263196406, 270821533, 291436400, 294907103, 288866179, 297960890, 310165928, 323215738, 326005712, 312078872, 282668674,
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
		], this.resize(), aN.iv.zO(0, 0)
	}, this.resize = function() {
		z9 = Math.floor(.15 * aK.g9), zF = (zF = Math.floor((b7.cv.ft() ? .018 : .0137) * aK.fu)) < 2 ? 2 : zF, g2 = aY.fy.fz(1, zF), zP()
	}, this.zQ = function() {
		zH || aN.lX.zR()
	}, this.zS = function(zT) {
		var eD;
		for (zH = !0, eD = 0; eD < zT.length; eD++) dl.unshift(zT[eD]);
		zP(), b3.d1 = !0
	}, this.zW = function() {
		zV()
	}, this.sX = function(fI, fJ) {
		fJ > aK.g9 - .6 * z9 ? this.zM ? fI !== fF && (pc += fI - fF, fF = fI, zV(), zY(fI), this.zM = -1 !== zE, b3.d1 = !0) : zY(fI) && (b3.d1 = !0) : this.sx()
	}, this.sx = function() {
		-1 !== zE && (this.zM = !1, zE = -1, b3.d1 = !0)
	}, this.sa = function(fI, deltaY) {
		-1 !== zE && (pc += Math.floor(deltaY), zV(), zY(fI), b3.d1 = !0)
	}, this.g6 = function(fI, fJ) {
		this.sX(fI, fJ), -1 !== zE && (fF = fI, this.zM = !0)
	}, this.sy = function() {
		-1 !== zE && (this.zM = !1)
	}, this.gC = function() {
		gD.fillStyle = aZ.kd;
		for (var zc, month, dZ, qQ, zf, zg, jb, zh, zi, eD = zD; zC <= eD; eD--) za(eD);
		zH && 0 === zC && (gD.fillStyle = aZ.l1, za(0)), -1 !== zE && (gD.fillStyle = aZ.kc, za(zE)), -1 !== zE && (gD.font = g2, aY.fy.textBaseline(gD, 2), (dZ = new Date).setTime(zG.getTime() - 1e3 * zE * 60 * 60 * 24), month = "month", zc =
			"day", "undefined" != typeof Intl && (month = new Intl.DateTimeFormat("en-US", {
				month: "long"
			}).format(dZ), zc = new Intl.DateTimeFormat("en-US", {
				weekday: "long"
			}).format(dZ)), zc = zc + ", " + dZ.getUTCDate() + " " + month + " " + dZ.getFullYear(), month = 1 === dl[zE] ? " second played" : " seconds played", month = aY.ji.jj(dl[zE]) + month, dZ = Math.floor(gD.measureText(zc).width),
			qQ = Math.floor(gD.measureText(month).width), zf = Math.floor(.5 * (dZ + zF)), zg = (zg = pc + aK.g3 - (zE + 1) * zA) < zf ? zf : zg > aK.g3 - zf ? aK.g3 - zf : zg, jb = aK.g9 - Math.floor(zB * Math.pow(dl[zE], zI)), zh = Math
			.floor(1.1 * zF), zi = jb > aK.g9 - zh ? aK.g9 - zh : jb, gD.fillStyle = aZ.kY, gD.fillRect(aK.g3 - qQ - zF, zi - zh, qQ + zF, zh), gD.fillRect(zg - zf, aK.g9 - zh, dZ + zF, zh), gD.fillStyle = aZ.gE, aY.fy.textAlign(gD, 2), gD
			.fillText(month, Math.floor(aK.g3 - .5 * zF), zi),
			function(jb, zh) {
				for (var qP, uo = -1, fx = dl.length - zE - 1, eD = zL.length - 1; 0 <= eD; eD--) fx >= zL[eD].eZ && fx <= zL[eD].dE && (-1 === uo || zL[eD].dE - zL[eD].eZ < zL[uo].dE - zL[uo].eZ) && (uo = eD); - 1 !== uo && (qP = Math.floor(
					gD.measureText(zL[uo].wM).width), gD.fillStyle = aZ.kY, gD.fillRect(aK.g3 - qP - zF, jb, qP + zF, zh), gD.fillStyle = aZ.gE, gD.fillText(zL[uo].wM, Math.floor(aK.g3 - .5 * zF), jb + zh))
			}(zi - 2 * zh, zh), aY.fy.textAlign(gD, 1), gD.fillText(zc, zg, aK.g9), gD.strokeStyle = aZ.ke, gD.lineWidth = 1, gD.beginPath(), gD.moveTo(0, jb), gD.lineTo(aK.g3, jb), gD.closePath(), gD.stroke())
	}
}

function bd() {
	var g2, g3, fJ, zk, zl, gM, qK, xK, tl, zm, zn, zo, zp;
	this.fI = 0, this.g9 = 0, this.cq = function() {
		zl = q1, zn = "rgba(0,100,0,0.8)", zo = "rgba(150,0,0,0.8)", xK = !(zm = !0), tl = eV[eU], this.resize()
	}, this.resize = function() {
		g3 = Math.floor((b7.cv.ft() ? .305 : .24) * aK.fu), this.g9 = Math.floor(.5 + .13 * g3), g3 = Math.floor(6 * this.g9), g2 = aY.fy.fz(1, Math.floor(.8 * this.g9)), zp = Math.floor(.5 * this.g9), ap.p7.font = g2, fJ = b0.gap, zk = Math
			.floor(1 + .13 * this.g9), (gM = document.createElement("canvas")).width = g3, gM.height = this.g9, (qK = gM.getContext("2d", {
				alpha: !0
			})).font = g2, aY.fy.textBaseline(qK, 1), aY.fy.textAlign(qK, 1), this.zq()
	}, this.xi = function() {
		return b7.cv.ft() && aK.g3 < 1.2 * aK.g9
	}, this.yM = function() {
		this.xi() ? this.fI = aK.g3 - g3 - b0.gap : this.fI = Math.floor(s.zr() + (aK.g3 - s.zr() - t.g3 - g3) / 2 - .5 * b0.gap)
	}, this.j4 = function() {
		xK && (xK = !1, this.zq())
	}, this.zq = function() {
		qK.clearRect(0, 0, g3, this.g9), qK.fillStyle = zm ? zn : zo, qK.fillRect(0, 0, g3, this.g9), qK.fillStyle = aZ.kc, this.zs(), this.zt(), qK.fillStyle = eV[eU] >= a5.i8(eU) ? aZ.ky : aZ.gE, qK.fillText(aY.ji.jj(tl), Math.floor(g3 / 2),
			zp), qK.fillStyle = aZ.gE, qK.fillRect(0, 0, g3, 1), qK.fillRect(0, 0, 1, this.g9), qK.fillRect(0, this.g9 - 1, g3, 1), qK.fillRect(g3 - 1, 0, 1, this.g9)
	}, this.zs = function() {
		var pk = yG(Math.floor((a5.zu() - 1) * this.g9 / 9), this.g9 - zk);
		qK.fillRect(0, pk, zk, this.g9 - pk), qK.fillRect(g3 - zk, pk, zk, this.g9 - pk)
	}, this.zt = function() {
		qK.fillRect(zk, this.g9 - zk, Math.floor((g3 - 2 * zk) * eV[eU] / zl), zk)
	}, this.i5 = function() {
		0 !== h1[eU] && 2 !== h2[eU] && tl !== eV[eU] && (zl = vy(eV[eU], zl), zm = eV[eU] > tl && 10 <= eV[eU], tl = eV[eU], xK = !0)
	}, this.gC = function() {
		0 === h1[eU] || fa || 2 === h2[eU] || gD.drawImage(gM, this.fI, fJ)
	}
}

function be() {
	var zw, zx, zy, zz, a00, a01, a02, a03, a04, a05, a06, a07, a08, a09, a0A, a0B, a0C, a0D, a0E, a0F, a0G, a0H, a0I, a0J, position, a0K, a0L, a0M, a0N, a0O = 1,
		a0P = 1;

	function a0S() {
		a02.clearRect(0, 0, zw, xy), a02.fillStyle = aZ.lB, a02.fillRect(0, 0, zw, a07), a02.fillStyle = aZ.kX, a02.fillRect(0, a07, zw, xy - a07), zv[eU] >= position && a0T(zv[eU] - position, aZ.ku), 0 !== zv[eU] && 0 === position && a0T(0, aZ.lG),
			-1 !== a0J && a0T(a0J, aZ.kb), a02.fillStyle = aZ.gE, a02.fillRect(0, a07, zw, 1), a02.fillRect(0, 0, zw, b0.ud), a02.fillRect(0, 0, b0.ud, xy), a02.fillRect(zw - b0.ud, 0, b0.ud, xy), a02.fillRect(0, xy - b0.ud, zw, b0.ud), a02.font =
			zx, aY.fy.textBaseline(a02, 1), aY.fy.textAlign(a02, 1), a02.fillText(aV.nZ[65], Math.floor((zw + a07 - 22) / 2), Math.floor(a05 + zy / 2));
		playerList.drawButton(a02, 12, 12, a07 - 22);
		var hY, eh = zv[eU] < position + a00 - 1 ? 1 : 2;
		for (a02.font = zz, aY.fy.textAlign(a02, 0), hY = a00 - eh; 0 <= hY; hY--) a0U(jE[hY + position]), a0V(hY, hY + position, jE[hY + position]);
		for (aY.fy.textAlign(a02, 2), hY = a00 - eh; 0 <= hY; hY--) a0U(jE[hY + position]), a0W(hY, jE[hY + position]);
		2 == eh && (a0U(eU), aY.fy.textAlign(a02, 0), a0V(a00 - 1, zv[eU], eU), aY.fy.textAlign(a02, 2), a0W(a00 - 1, eU)), 0 === position && (eh = .7 * a08 / a1.get(4).height, a02.setTransform(eh, 0, 0, eh, Math.floor(a09 + .58 * a08 + .5 * eh * a1
			.get(4).width), Math.floor(a05 + zy + .4 * a08)), a02.imageSmoothingEnabled = !0, a02.drawImage(a1.get(4), -Math.floor(a1.get(4).width / 2), -Math.floor(a1.get(4).height / 2)), a02.setTransform(1, 0, 0, 1, 0, 0))
	}

	function a0U(player) {
		hL && (a02.fillStyle = b4.a0Y[b4.rT[b4.iL[player]]])
	}

	function a0T(eD, ut) {
		a02.fillStyle = ut, eD = a00 - 1 < eD ? a00 - 1 : eD;
		ut = Math.floor((eD === a00 - 1 ? 2 : 0 === eD ? 1.15 : 1) * a08), ut = eD === a00 - 2 ? Math.floor(a07 + 9.15 * a08) - Math.floor(a07 + 8.15 * a08) : ut;
		a02.fillRect(0, Math.floor(a07 + (eD + (0 === eD ? 0 : .15)) * a08), zw, ut)
	}

	function a0V(a0a, a0b, eD) {
		a02.fillText(a0F[a0b], a09, Math.floor(a05 + zy + (a0a + .5) * a08)), 1 === h2[eD] && (a02.font = "italic " + zz);
		a0b = Math.floor(a05 + zy + (a0a + .5) * a08);
		a02.fillText(a0D[eD] === eD ? jk[eD] : a0C[a0D[eD] % ed], a0A, a0b), 0 !== h2[eD] && (a02.font = zz), eD < h0 && 2 !== h2[eD] || a02.fillRect(a0A, a0b + .35 * a0O, a0E[eD], Math.max(1, .1 * a0O))
	}

	function a0W(a0a, eD) {
		a02.fillText(ez[eD], a0B, Math.floor(a05 + zy + (a0a + .5) * a08))
	}

	function a0k(fJ) {
		return (fJ -= b0.gap + a07) < 0 ? Math.floor(fJ / a08) - 1 : fJ < (a00 - 1) * a08 ? Math.floor(fJ / a08) : fJ < xy - a07 ? a00 - 1 : (fJ -= xy - a07, a00 + Math.floor(fJ / a08))
	}

	function vG(fI, fJ) {
		return fI >= b0.gap && fI < b0.gap + zw && fJ >= b0.gap && fJ < b0.gap + xy
	}
	this.cq = function() {
		var eD, fw, hY;
		for (a0L = !1, a0N = a0M = a0K = 0, a0J = -1, a00 = b7.cv.ft() ? 6 : 10, a0P = (position = 0) === (a0P = b9.dG.data[11].value) ? 10 : 1 === a0P ? 5 : 1, a0I = !1, a0G = new Uint16Array(a00 + 1), a0H = new Uint32Array(a00 + 1), a04 = ed,
			jE = new Uint16Array(a04), zv = new Uint16Array(a04), eD = a04 - 1; 0 <= eD; eD--) jE[eD] = eD, zv[eD] = eD;
		this.resize(!0), a0C = [], a0D = new Uint16Array(ed), a0E = new Uint16Array(ed);
		var a0Q = Math.floor(zw - a0A - a09 - a03),
			a0R = 0;
		for (a0F = new Array(ed), a02.font = zz, eD = ed - 1; 0 <= eD; eD--)
			if (a0F[eD] = eD + 1 + ".", a0D[eD] = eD, a0E[eD] = Math.floor(a02.measureText(jk[eD]).width), a0E[eD] > a0Q) {
				for (fw = jk[eD], hY = jk[eD].length - 1; 1 <= hY && (fw = fw.substring(0, hY), a0E[eD] = Math.floor(a02.measureText(fw + "...").width), !(a0E[eD] <= a0Q)); hY--);
				fw += "...", a0C.push(fw), a0D[eD] = ed + a0R++
			} a0S()
	}, this.resize = function(cq) {
		if (xy = b7.cv.ft() ? (zw = Math.floor(.335 * aK.fu), Math.floor(a00 * zw / 8)) : (zw = Math.floor(.27 * aK.fu), Math.floor(a00 * zw / 10)), zw = Math.floor(.97 * zw), (a01 = document.createElement("canvas")).width = zw, a01.height = xy,
			a02 = a01.getContext("2d", {
				alpha: !0
			}), a05 = .025 * zw, zy = .16 * zw, a06 = 0 * zw, a07 = Math.floor(.45 * a05 + zy), a08 = (xy - zy - 2 * a05 - a06) / a00, zx = aY.fy.fz(1, Math.floor(.55 * zy)), a0O = Math.floor((b7.cv.ft() ? .67 : .72) * a08), zz = aY.fy.fz(0,
			a0O), a02.font = zz, a09 = Math.floor(.04 * zw), a0A = Math.floor((b7.cv.ft() ? .195 : .18) * zw), a03 = Math.floor(a02.measureText("00920600").width), a02.font = zx, a0B = zw - a09, !cq) {
			a02.font = zz;
			for (var eD = ed - 1; 0 <= eD; eD--) a0E[eD] = Math.floor(a02.measureText(a0D[eD] === eD ? jk[eD] : a0C[a0D[eD] % ed]).width);
			a0S()
		}
	}, this.zr = function() {
		return zw
	}, this.j4 = function(wY) {
		a0I && (wY || b3.iJ() % a0P == 0) && (a0I = !1, a0S())
	}, this.i5 = function() {
		! function() {
			for (var hY = a04 - 1; 0 <= hY; hY--) 0 === h1[jE[hY]] && ! function(hY) {
				var a0i = jE[hY];
				a04--;
				for (var eD = hY; eD < a04; eD++) jE[eD] = jE[eD + 1], zv[jE[eD]] = eD;
				jE[a04] = a0i, zv[jE[a04]] = a04
			}(hY)
		}();
		for (var a0g, kK = a04 - 1, hY = 0; hY < kK; hY++) ez[jE[hY]] < ez[jE[hY + 1]] && (a0g = jE[hY], jE[hY] = jE[hY + 1], jE[hY + 1] = a0g, zv[jE[hY]] = hY, zv[jE[hY + 1]] = hY + 1);
		! function() {
			for (var dZ = a0I, eh = (a0I = !0, zv[eU] >= a00 - 1 ? a00 - 2 : a00 - 1), eD = eh; 0 <= eD; eD--)
				if (a0G[eD] !== jE[eD] || a0H[eD] !== ez[jE[eD]]) return;
			(eh != a00 - 2 || a0G[a00] === zv[eU] && a0H[a00] === ez[eU]) && (a0I = dZ)
		}();
		for (var eD = a00 - 1; 0 <= eD; eD--) a0G[eD] = jE[eD], a0H[eD] = ez[jE[eD]];
		a0G[a00] = zv[eU], a0H[a00] = ez[eU]
	}, this.g6 = function(fI, fJ) {
		return !!vG(fI, fJ) && (utils.isPointInRectangle(fI, fJ, b0.gap + 12, b0.gap + 12, a07 - 22, a07 - 22) && playerList.display(jk), true) && (a0K = b3.dY, a0L = !0, a0M = a0N = a0k(fJ), ag.tE() && (fI = yg(-1, a0N, a00), a0J !== (fI =
			fI === a00 ? -1 : fI)) && (a0J = fI, a0S(), b3.d1 = !0), !0)
	}, this.sX = function(fI, fJ) {
		if (utils.isPointInRectangle(fI, fJ, b0.gap + 12, b0.gap + 12, a07 - 22, a07 - 22)) {
			playerList.hoveringOverButton === false && (playerList.hoveringOverButton = true, a0S(), b3.d1 = !0);
		} else {
			playerList.hoveringOverButton === true && (playerList.hoveringOverButton = false, a0S(), b3.d1 = !0);
		}
		var dZ, a0j = a0k(fJ);
		return a0L ? (dZ = position, (position = yg(0, position += a0M - a0j, ed - a00)) !== dZ && (a0j = (a0j = yg(-1, a0M = a0j, a00)) !== a00 && vG(fI, fJ) ? a0j : -1, a0J = a0j, a0S(), b3.d1 = !0), !0) : (a0j = (a0j = yg(-1, a0j, a00)) ===
			a00 || !vG(fI, fJ) || ag.tE() ? -1 : a0j, a0J !== a0j && (a0J = a0j, a0S(), b3.d1 = !0))
	}, this.sy = function(fI, fJ) {
		if (!a0L) return !1;
		a0L = !1;
		var a0j = a0k(fJ);
		return ag.tE() && -1 !== a0J && (a0J = -1, a0S(), b3.d1 = !0), b3.dY - a0K < 350 && a0N === a0j && -1 !== (a0j = (a0j = yg(-1, a0j, a00)) !== a00 && vG(fI, fJ) ? a0j : -1) && (fI = jE[a0j + position], a0j === a00 - 1 && zv[eU] >=
			position + a00 - 1 && (fI = eU), hL && donationsTracker.displayHistory(fI, jk, il), 0 !== h1[fI]) && f.k5(fI, 800, !1, 0), !0
	}, this.sa = function(fI, fJ, deltaY) {
		var a0l;
		return !(a0L || k7 || (a0l = Math.max(Math.floor(Math.abs(deltaY) / 40), 1), !vG(fI, fJ)) || (fI = (fI = yg(-1, a0k(fJ), a00)) === a00 || ag.tE() ? -1 : fI, 0 < deltaY ? position < ed - a00 && (position += Math.min(ed - a00 - position,
			a0l), a0J = fI, a0S(), b3.d1 = !0) : 0 < position && (position -= Math.min(position, a0l), a0J = fI, a0S(), b3.d1 = !0), 0))
	}, this.gC = function() {
		gD.drawImage(a01, b0.gap, b0.gap)
	}
}

function bf() {
	var gM, qK, fI, fJ, xH, a0m, gap, a0n, fontSize, a0o, a0p, eX, a0q, a0r, a0s, a0t, a0u, a0v;

	function a0y() {
		qK.clearRect(0, 0, t.g3, t.g9), qK.fillStyle = aZ.kY, qK.fillRect(0, 0, t.g3, t.g9), qK.fillStyle = aZ.kp, fX = 0 < a0s ? a0s : Math.sqrt(eX[4] / 1e4), qK.fillRect(0, t.g9 - xH - 1, Math.floor(fX * t.g3), xH), qK.fillStyle = aZ.gE, qK
			.fillRect(0, 0, t.g3, 1), qK.fillRect(0, 0, 1, t.g9), qK.fillRect(t.g3 - 1, 0, 1, t.g9), qK.fillRect(0, t.g9 - 1, t.g3, 1), qK.fillRect(0, t.g9 - xH - 1, t.g3, 1);
		for (var fX, a10, dZ = 0, eD = 0; eD < a0p.length; eD++) a0q[eD] ? (aY.fy.textAlign(qK, 0), a10 = Math.floor((a0m - xH + 2 * a0n) * (eD - dZ + 1) / (a0p.length + 1) - .7 * a0n), qK.fillText(a0p[eD], gap, a10), aY.fy.textAlign(qK, 2), 5 ===
			eD && 0 !== h1[eU] && eV[eU] >= a5.i8(eU) ? (qK.fillStyle = aZ.lE, qK.fillText(a0x(eD), t.g3 - gap, a10), qK.fillStyle = aZ.gE) : qK.fillText(a0x(eD), t.g3 - gap, a10)) : dZ++
	}

	function a0x(eD) {
		return eD < 3 ? eX[eD].toString() : 3 === eD || 4 === eD || 5 === eD ? aY.ji.u0(eX[eD] / 100, 2) : eD < 7 ? aY.ji.jj(eX[eD]) : eD === 7 ? t.zu(eX[7]) : eD === 8 ? utils.getMaxTroops(ez, eU) : utils.getDensity(eU)
	}

	function a0w() {
		ez[eU] !== eX[6] && (eX[6] = ez[eU], a0o++)
	}
	this.cq = function() {
		a0s = a0t = 0, (a0p = new Array(8))[0] = aV.nZ[70], a0p[1] = il ? aV.nZ[71] : aV.nZ[72], a0p[2] = aV.nZ[73], a0p[3] = aV.nZ[74], a0p[4] = aV.nZ[75], a0p[5] = aV.nZ[76], a0p[6] = aV.nZ[77], a0p[7] = aV.nZ[78],
			a0p.push("Max Troops", "Density"), // add a0p
			a0v = uE - eR(uE, 100), (eX = new Array(a0p.length))[0] = il ? 0 : h0, eX[1] = il ? iM : ie, eX[2] = rI, eX[3] = 0, eX[4] = eR(1e4 * ez[0], uE), eX[5] = 700, eX[6] = 0, a0w(), eX[7] = 0, a0r = a0x(6), a0q = new Array(a0p.length);
		for (var eD = a0p.length - 1; 0 <= eD; eD--) a0q[eD] = !0;
		a0u = 0, a0u = il ? (a0q[0] = !1, a0q[2] = !1, a0q[3] = !1, 3) : (a0q[3] = !1, 1), a0o = 0, this.resize()
	}, this.resize = function() {
		this.g3 = Math.floor((b7.cv.ft() ? .1646 : .126) * 1.25 * aK.fu), this.g9 = Math.floor(1.18 * this.g3), xH = Math.floor(.04 * this.g3), gap = Math.floor(.035 * this.g3), a0n = .04 * this.g3, a0m = this.g9, this.g9 -= Math.floor(a0u * (
			this.g9 - 2 * xH) / a0p.length), fontSize = Math.floor(.7 * (a0m - xH) / a0p.length), fontSize = aY.fy.fz(1, fontSize), (gM = document.createElement("canvas")).width = this.g3, gM.height = this.g9, (qK = gM.getContext("2d", {
			alpha: !0
		})).font = fontSize, aY.fy.textBaseline(qK, 1), qK.lineWidth = 1, this.u8(), this.yM(), r.yM(), a0y()
	}, this.yM = function() {
		fI = aK.g3 - this.g3 - b0.gap
	}, this.a0z = function() {
		fJ = b0.gap
	}, this.u8 = function() {
		fJ = b0.gap + (r.xi() && 0 !== h1[eU] && !fa ? r.g9 + b0.gap : 0)
	}, this.j4 = function(wY) {
		0 < a0o && (wY || 100 <= a0o) && (a0o = 0, a0y())
	}, this.v1 = function() {
		return eX[7]
	}, this.zu = function(value) {
		var oz = Math.floor(value / 1e3 / 60),
			value = Math.floor((value - 6e4 * oz) / 1e3);
		return value < 10 ? oz + ":0" + value : oz + ":" + value
	}, this.i5 = function() {
		var a1A, per;
		a0q[0] && rJ - rI !== eX[0] && (eX[0] = rJ - rI, a0o++), iM - eX[0] !== eX[1] && (eX[1] = iM - eX[0], a0o++), this.iu(), (a1A = a5.a1B(eU)) !== eX[5] && (eX[5] = a1A, a0o++), a0w(), eX[7] += b3.a1C, a1A = a0x(7), a0r !== a1A && (a0r =
			a1A, a0o += 100), a1A = hL ? b5.rV() : ez[jE[0]], per = eR(1e4 * a1A, uE), eX[3] = a1A, eX[4] !== per && (a0o++, eX[4] = per), 8 === ij && function() {
			if (0 === h1[0]) ao.r1.r9(1);
			else {
				if (0 !== h1[1]) return;
				ao.r1.r9(0)
			}
			return 1
		}() || eX[3] < a0v || eX[3] !== uE && ! function() {
			for (var eD = iM - 1; 0 <= eD; eD--)
				if (0 < ea[iN[eD]].length) return;
			return 1
		}() || ao.r1.r9(-1)
	}, this.iu = function() {
		a0q[2] && rI !== eX[2] && (eX[2] = rI, a0o++)
	}, this.a1D = function(eD) {
		var tb, a1E, dZ;
		return 2 !== rG && (eD === uI ? (a0s = 0, a0y(), !1) : (-1 !== eD || 0 !== a0t) && (a1E = a0s, a0s = fL ? eD / uI : (dZ = performance.now(), 0 <= eD && (tb = dZ - 392 * eD, a0t = 0 === eD || tb < a0t ? tb : a0t), 1 < (a0s = (dZ - a0t) / (
			392 * uI)) ? 1 : a0s), a0y(), a0s !== a1E))
	}, this.gC = function() {
		gD.drawImage(gM, fI, fJ)
	}
}

function bg() {
	var sv, a1F, g3, g9, xB, a1G, a1H, xj, gM, jw, a1I;

	function gB() {
		return Math.floor((aK.g3 - g3) / 2) < o.g9 + 2 * b0.gap ? aK.g9 - g9 - 4 * b0.gap - o.g9 : aK.g9 - g9 - 2 * b0.gap
	}
	this.a1J = -1, this.cq = function() {
		a1I = sv = !1, xB = .61, a1G = .07, a1H = .09, jw = xj = g9 = 0, this.a1J = -1
	}, this.resize = function() {
		var qK, ja, iK, a1O, a1P, vP;
		sv && (g3 = yG(g3 = b7.cv.ft() ? Math.floor(.69 * aK.fu) : Math.floor(.5 * aK.fu), vy(aK.g3 - 2 * b0.gap, 10)), g3 = yG(g3, Math.floor(3.57 * vy(aK.g9 - 2 * b0.gap, 3))), g9 = Math.floor(.28 * g3), (gM = document.createElement("canvas"))
			.width = g3, gM.height = g9, qK = gM.getContext("2d", {
				alpha: !0
			}), ja = Math.floor(1 + g9 / 40), qK.clearRect(0, 0, g3, g9), qK.fillStyle = aZ.kY, qK.fillRect(ja, ja, g3 - 2 * ja, g9 - 2 * ja), qK.lineJoin = "bevel", qK.lineWidth = 2 * ja, qK.strokeStyle = aZ.gE, qK.strokeRect(ja, ja, g3 -
				2 * ja, g9 - 2 * ja), qK.imageSmoothingEnabled = !0, iK = a1.get(a1F), a1O = iK.width, a1P = iK.height, vP = (21 === a1F ? .666 : 1) * xB * g9 / a1P, qK.setTransform(vP, 0, 0, vP, Math.floor((g3 - vP * a1O) / 2), Math.floor((
				g9 - vP * a1P) / 2)), qK.drawImage(iK, 0, 0), qK.setTransform(1, 0, 0, 1, Math.floor(g3 - a1H * g9 - a1G * g9 - ja), Math.floor(ja + a1G * g9)),
			function(qK, eZ) {
				qK.lineWidth = Math.floor(1 + g9 / 80), qK.strokeStyle = aZ.gE, qK.beginPath(), qK.moveTo(0, 0), qK.lineTo(eZ, eZ), qK.moveTo(0, eZ), qK.lineTo(eZ, 0), qK.stroke()
			}(qK, Math.floor(a1H * g9)), qK.setTransform(1, 0, 0, 1, 0, 0))
	}, this.show = function(db, a1L, a1M, a1N) {
		sv || a1N && a1I || (a1F = a1M ? 21 : db ? 1 : 2, sv = a1I = !0, this.resize(), i.o0(), o.yB(), jw = b3.dY, -1 === this.a1J && (this.a1J = b3.iJ()), xj = a1L ? 1 : 0)
	}, this.i5 = function() {
		!sv || 1 <= xj || (xj = 1 < (xj += 5e-4 * (b3.dY - jw)) ? 1 : xj, jw = b3.dY, b3.d1 = !0)
	}, this.g6 = function(fI, fJ) {
		return !(!sv || xj <= 0 || (fI -= Math.floor((aK.g3 - g3) / 2), fJ -= gB(), fI < 0) || fJ < 0 || g3 < fI || g9 < fJ || (g3 - g9 / 3 < fI && fJ < g9 / 3 && (sv = !1, b3.d1 = !0), 0))
	}, this.gC = function() {
		!sv || xj <= 0 || (gD.globalAlpha = xj, gD.drawImage(gM, Math.floor((aK.g3 - g3) / 2), gB()), gD.globalAlpha = 1)
	}
}

function cg() {
	this.a1R = !1, this.kS = !1, this.uC = !1, this.a1S = [0, 0, 0, 0], this.a1T = function() {
		var ja, jb, jc, jd;
		this.uC = this.uC || this.kS, (this.kS || this.a1R && this.uC) && (ja = ax.a1U[0], jb = ax.a1U[1], jc = ax.a1U[2], jd = ax.a1U[3], ja = ja < this.a1S[0] ? this.a1S[0] : ja, jb = jb < this.a1S[1] ? this.a1S[1] : jb, jc = jc > this.a1S[2] ?
			this.a1S[2] : jc, jd = jd > this.a1S[3] ? this.a1S[3] : jd, this.kS = !1, this.a1R = !1, ja === this.a1S[0] && jb === this.a1S[1] && jc === this.a1S[2] && jd === this.a1S[3] ? this.uD() : ja <= jc && jb <= jd && uX.putImageData(
				uY, 0, 0, ja, jb, jc - ja + 1, jd - jb + 1))
	}, this.uD = function() {
		this.uC && this.a1S[2] >= this.a1S[0] && this.a1S[3] >= this.a1S[1] && uX.putImageData(uY, 0, 0, this.a1S[0], this.a1S[1], this.a1S[2] - this.a1S[0] + 1, this.a1S[3] - this.a1S[1] + 1), this.uC = !1
	}, this.rO = function() {
		this.a1S[2] >= this.a1S[0] && this.a1S[3] >= this.a1S[1] && uX.putImageData(uY, 0, 0, this.a1S[0], this.a1S[1], this.a1S[2] - this.a1S[0] + 1, this.a1S[3] - this.a1S[1] + 1), this.uC = !1
	}, this.cq = function() {
		var fI, fJ;
		this.a1R = !1, this.kS = !1, this.uC = !1, this.a1S[0] = ap.e8, this.a1S[1] = ap.e9, this.a1S[2] = this.a1S[3] = 0;
		loop: for (fI = 1; fI < ap.e8 - 1; fI++)
			for (fJ = ap.e9 - 2; 1 < fJ; fJ--)
				if (1 === a1V[a2.ps(fI, fJ) + 2]) {
					this.a1S[0] = fI;
					break loop
				} loop: for (fJ = 1; fJ < ap.e9 - 1; fJ++)
			for (fI = ap.e8 - 2; 1 < fI; fI--)
				if (1 === a1V[a2.ps(fI, fJ) + 2]) {
					this.a1S[1] = fJ;
					break loop
				} loop: for (fI = ap.e8 - 2; 0 < fI; fI--)
			for (fJ = ap.e9 - 2; 1 < fJ; fJ--)
				if (1 === a1V[a2.ps(fI, fJ) + 2]) {
					this.a1S[2] = fI;
					break loop
				} loop: for (fJ = ap.e9 - 2; 0 < fJ; fJ--)
			for (fI = ap.e8 - 2; 1 < fI; fI--)
				if (1 === a1V[a2.ps(fI, fJ) + 2]) {
					this.a1S[3] = fJ;
					break loop
				}
	}
}

function cX() {
	this.nZ = null;
	var a1W, a1X = new a1Y;
	this.cq = function() {
		a1W = 0 === b9.dG.data[0].value ? a1X : new(1 === b9.dG.data[0].value ? a1Z : 2 === b9.dG.data[0].value ? a1a : 3 === b9.dG.data[0].value ? a1b : a1c);
		var eD, eZ = a1X.nZ.length,
			oz = a1W.nZ.length;
		for (eD = 0; eD < eZ; eD++) oz === eD ? (a1W.nZ.push(a1X.nZ[eD]), oz++) : 0 === a1W.nZ[eD].length && (a1W.nZ[eD] = a1X.nZ[eD]);
		this.nZ = a1W.nZ, b9.dG.translate()
	}, this.oX = function() {
		return navigator.language.startsWith("en") ? 0 : navigator.language.startsWith("ru") ? 1 : navigator.language.startsWith("tr") ? 2 : navigator.language.startsWith("es") ? 3 : navigator.language.startsWith("de") ? 4 : 0
	}, this.sA = function(iK) {
		for (var eh, eZ = this.nZ.length, eD = 0; eD < eZ; eD++)
			if (this.nZ[eD].startsWith("{") && (eh = this.nZ[eD].replace("{" + iK + "}", "")).length < this.nZ[eD].length) return eh;
		return iK
	}, this.s9 = function(fx, a1e, nq) {
		var eD, hh, eZ, fw;
		if (!a1e) return this.nZ[fx];
		for (eZ = a1e.length, fw = this.nZ[fx], eD = 0; eD < eZ; eD++)
			if (Number.isInteger(a1e[eD]))
				for (hh = a1W.a1f.length - 1; 0 <= hh; hh--) fw = fw.replace("{" + (20 * (hh + 1) + eD) + "}", (2 === hh ? 1 !== a1e[eD] : 1 === a1e[eD]) ? "" : a1W.a1f[hh]);
		if (nq) {
			if (nq.wD)
				for (eD = 0; eD < nq.wD.length; eD++) a1e[nq.wD[eD]] = aY.ji.jj(a1e[nq.wD[eD]]);
			if (nq.wV)
				for (eD = 0; eD < nq.wV.length; eD++) a1e[nq.wV[eD]] = aY.ji.u0(100 * a1e[nq.wV[eD]], 1)
		}
		for (eD = 0; eD < eZ; eD++) fw = fw.replace("{" + eD + "}", a1e[eD]);
		return fw
	}
}

function a1Y() {
	this.a1f = ["s"], this.nZ = ["Accept", "You erased {0}.", "You were erased by {0}.", "Congratulations! You won the game.", "{0} won the game.", "{0} broke the non-aggression pact.", "{0} is attacking you!", "Choose your start position!",
		"You surrendered!", "The game ended in a stalemate!", "Error: {0}", "", "{0} was immortalized!", "Unclaimed Land {0}", "Player: {0}   Balance: {1}   Territory: {2}   Coordinates: {3}", "Mountains {0}", "Water {0}",
		"Ship Owner: {0}   Strength: {1}", " Message to {0}: ", "{0}: ", "Humanity triumphs! The undead have been beaten back.", "The Resistance", "Mankind's era ends, overrun by the relentless tide of the undead.", "The Virus",
		"Agreeing to peace concludes the game in a stalemate!", "You signed a non-aggression pact with {0}.", "You asked {0} to sign a non-aggression pact.", "{0} accepted the non-aggression pact.", "{0} requested a non-aggression pact.",
		"You asked {0} players to attack {1}.", "You asked {0} to attack {1}.", "{0} suggested you attack {1}.", "Your balance is too low!", "You exported {0} resource{20} to {1}.", "A tax of {0} unit{20} was deducted.",
		"{0} supported you with {1} resource{21}.", "A bot ({0}) supported you with {1} resource{21}.", "Map: {0}", "Dimension: {0}x{1}", "Overall Pixels: {0}", "Land: {0} ({1})", "Water: {0} ({1})", "Mountains: {0} ({1})",
		"Full sending against human players is disabled.", "{0} and {1} other player{21} were erased.", "{0} and {1} other player{21} left the game.", "{0} and {1} other player{21} surrendered.", "{0} was erased by {1}.", "{0} left the game.",
		"{0} surrendered.", "{0} joined the game.", "{1006}No Server Response", "{3231}Account successfully saved!", "{3232}Account", "{3249}No Servers Found", "{3252}Thanks for the vote.", "{3265}Please accept Cookies",
		"{3266}Invalid Password Format", "{3605}Invalid Replay Format", "{4207}Lobby Timeout", "{4214}Invalid Username", "{4224}Lobby Error", "{4229}No Client Response", "Undefined", "Error", "LEADERBOARD", "YOU ERASED", "YOU WERE ERASED BY",
		"THE GAME WAS WON BY", "MAP:", "Humans", "Players", "Bots", "Spectators", "Threshold", "Occupation", "Interest", "Income", "Time", "Quit Game", "More", "Settings", "Replay", "Links", "Game Version", "Delete Data", "Privacy Settings",
		"Close", "Game Statistics", "Surrender", "Force Restart Game", "Menu", "Back", "Select All", "Copy", "Clear", "Launch", "Save & Close", "Reset", "Information",
		"Increasing resolution, shrinking minimum font size, and speeding up text rendering can strain your system and hinder gameplay responsiveness.", "Language", "Resolution", "Mobile Friendly", "Font", "Hide Usernames", "Place Balance Above",
		"Hide Zoom Buttons", "Minimum Font Size", "Lobby", "Text Rendering Speed", "Low", "Medium", "High", "Very High", "Small", "Very Small", "Proxied Lobby", "Slow", "Normal", "Fast", "Enabled", "New Game Update",
		"The game has been updated! Please reload the game.", "Reload", "Account", "Delete Account", "", ""
	]
}

function a1c() {
	this.a1f = ["n", "en", "r"], this.nZ = ["Akzeptieren", "Du hast {0} ausgelöscht.", "Du wurdest von {0} ausgelöscht.", "Herzlichen Glückwunsch! Du hast das Spiel gewonnen.", "{0} hat das Spiel gewonnen.",
		"{0} hat den Nichtangriffspakt gebrochen.", "{0} greift dich an!", "Wähle deine Startposition!", "Du hast aufgegeben!", "Das Spiel endete in einem Patt!", "Fehler: {0}", "New Game Update", "{0} wurde verewigt!", "Neutrales Land {0}",
		"Spieler: {0}   Bilanz: {1}   Territorium: {2}   Koordinaten: {3}", "Gebirge {0}", "Wasser {0}", "Schiffseigner: {0}   Stärke: {1}", " Nachricht an {0}: ", "{0}: ", "Die Menschheit triumphiert. Die Untoten wurden zurückgedrängt.",
		"Der Widerstand", "Die Ära der Menschheit endet, überrannt von den Untoten.", "Das Virus", "Die Zustimmung zum Frieden beendet das Spiel in einem Patt!", "Du hast einen Nichtangriffspakt mit {0} geschlossen.",
		"Du hast {0} gebeten, einen Nichtangriffspakt zu unterzeichnen.", "{0} hat den Nichtangriffspakt akzeptiert.", "{0} hat einen Nichtangriffspakt angefordert.", "Du bittest {0} Spieler, {1} anzugreifen.", "Du bittest {0}, {1} anzugreifen.",
		"{0} bittet dich, {1} anzugreifen.", "Deine Bilanz ist zu niedrig!", "Du hast {0} Ressource{20} an {1} exportiert.", "Eine Steuer von {0} Einheit{40} wurde abgezogen.", "{0} unterstützt dich mit {1} Ressource{21}.",
		"Ein Bot ({0}) unterstützt dich mit {1} Ressource{21}.", "Karte: {0}", "Dimension: {0}x{1}", "Gesamtpixel: {0}", "Land: {0} ({1})", "Wasser: {0} ({1})", "Gebirge: {0} ({1})", "Angriffe gegen menschliche Spieler sind limitiert.",
		"{0} und {1} weitere{61} Spieler wurden ausgelöscht.", "{0} und {1} weitere{61} Spieler haben das Spiel verlassen.", "{0} und {1} weitere{61} Spieler haben aufgegeben.", "{0} wurde von {1} ausgelöscht.", "{0} hat das Spiel verlassen.",
		"{0} hat aufgegeben.", "{0} ist dem Spiel beigetreten.", "{1006}Keine Serverantwort", "{3231}Konto erfolgreich gespeichert!", "{3232}Konto", "{3249}Keine Server gefunden", "{3252}Danke für die Abstimmung.",
		"{3265}Bitte akzeptiere Cookies", "{3266}Ungültiges Passwortformat", "{3605}Ungültiges Replayformat", "{4207}Lobby-Timeout", "{4214}Ungültiger Benutzername", "{4224}Lobby Error", "{4229}Keine Client-Antwort", "Undefiniert", "Fehler",
		"BESTENLISTE", "DU BESIEGTEST", "DU WURDEST AUSGELÖSCHT VON", "DAS SPIEL WURDE GEWONNEN VON", "KARTE:", "Menschen", "Spieler", "Bots", "Zuschauer", "Schwelle", "Besetzung", "Zinsen", "Einkommen", "Zeit", "Beenden", "Mehr",
		"Einstellungen", "Replay", "Links", "Spielversion", "Daten löschen", "Datenschutzeinstellungen", "Schließen", "Spielstatistiken", "Kapitulieren", "Spiel neustarten", "Menü", "Zurück", "Alles auswählen", "Kopieren", "Löschen", "Starten",
		"Speichern & Schließen", "Zurücksetzen", "Information",
		"Eine erhöhte Auflösung, die Verkleinerung der minimalen Schriftgröße und die Beschleunigung der Textdarstellung können Ihr System belasten und die Spielreaktionsfähigkeit beeinträchtigen.", "Sprache", "Auflösung", "Mobilfreundlich",
		"Schriftart", "Benutzernamen ausblenden", "Bilanz oben anzeigen", "Zoom-Tasten ausblenden", "Minimale Schriftgröße", "Lobby", "Textdarstellungsgeschwindigkeit", "Niedrig", "Mittel", "Hoch", "Sehr hoch", "Klein", "Sehr klein",
		"Proxy-Lobby", "Langsam", "Normal", "Schnell", "Aktiviert"
	]
}

function a1g() {
	this.a1f = ["s", ""], this.nZ = ["Accept", "You erased {0}.", "You were erased by {0}.", "Congratulations! You won the game.", "{0} won the game.", "{0} broke the non-aggression pact.", "{0} is attacking you!", "Choose your start position!",
		"You surrendered!", "The game ended in a stalemate!", "Error: {0}", "New Game Update", "{0} was immortalized!", "Unclaimed Land {0}", "Player: {0}   Balance: {1}   Territory: {2}   Coordinates: {3}", "Mountains {0}", "Water {0}",
		"Ship Owner: {0}   Strength: {1}", " Message to {0}: ", "{0}: ", "Humanity triumphs! The undead have been beaten back.", "The Resistance", "Mankind's era ends, overrun by the relentless tide of the undead.", "The Virus",
		"Agreeing to peace concludes the game in a stalemate!", "You signed a non-aggression pact with {0}.", "You asked {0} to sign a non-aggression pact.", "{0} accepted the non-aggression pact.", "{0} requested a non-aggression pact.",
		"You asked {0} players to attack {1}.", "You asked {0} to attack {1}.", "{0} suggested you attack {1}.", "Your balance is too low!", "You exported {0} resource{20} to {1}.", "A tax of {0} unit{20} was deducted.",
		"{0} supported you with {1} resource{21}.", "A bot ({0}) supported you with {1} resource{21}.", "Map: {0}", "Dimension: {0}x{1}", "Overall Pixels: {0}", "Land: {0} ({1})", "Water: {0} ({1})", "Mountains: {0} ({1})",
		"Full sending against human players is disabled.", "{0} and {1} other player{21} were erased.", "{0} and {1} other player{21} left the game.", "{0} and {1} other player{21} surrendered.", "{0} was erased by {1}.", "{0} left the game.",
		"{0} surrendered.", "{0} joined the game.", "{1006}No Server Response", "{3231}Account successfully saved!", "{3232}Account", "{3249}No Servers Found", "{3252}Thanks for the vote.", "{3265}Please accept Cookies",
		"{3266}Invalid Password Format", "{3605}Invalid Replay Format", "{4207}Lobby Timeout", "{4214}Invalid Username", "{4224}Lobby Error", "{4229}No Client Response", "Undefined", "Error", "LEADERBOARD", "YOU ERASED", "YOU WERE ERASED BY",
		"THE GAME WAS WON BY", "MAP:", "Humans", "Players", "Bots", "Spectators", "Threshold", "Occupation", "Interest", "Income", "Time", "Quit Game", "More", "Settings", "Replay", "Links", "Game Version", "Delete Data", "Privacy Settings",
		"Close", "Game Statistics", "Surrender", "Force Restart Game", "Menu", "Back", "Select All", "Copy", "Clear", "Launch", "Save & Close", "Reset", "Information",
		"Increasing resolution, shrinking minimum font size, and speeding up text rendering can strain your system and hinder gameplay responsiveness.", "Language", "Resolution", "Mobile Friendly", "Font", "Hide Usernames", "Place Balance Above",
		"Hide Zoom Buttons", "Minimum Font Size", "Lobby", "Text Rendering Speed", "Low", "Medium", "High", "Very High", "Small", "Very Small", "Proxied Lobby", "Slow", "Normal", "Fast", "Enabled"
	]
}

function a1Z() {
	this.a1f = [], this.nZ = ["Принять", "Вы стерли {0}.", "Вас уничтожил {0}.", "Поздравляем! Вы выиграли игру.", "{0} выиграл игру.", "{0} нарушил пакт о ненападении.", "{0} атакует вас!", "Выберите вашу начальную позицию!", "Вы сдались!",
		"Игра закончилась вничью!", "Ошибка: {0}", "New Game Update", "{0} был увековечен!", "Невостребованная Земля {0}", "Игрок: {0}   Баланс: {1}   Территория: {2}   Координаты: {3}", "Горы {0}", "Вода {0}",
		"Владелец корабля: {0}   Сила: {1}", " Сообщение для {0}: ", "{0}: ", "Человечество торжествует! Нежить отброшена назад.", "Сопротивление", "Эра человечества заканчивается, нежить непрерывно наступает.", "Вирус",
		"Согласие на мир заканчивает игру вничью!", "Вы подписали пакт о ненападении с {0}.", "Вы предложили {0} подписать пакт о ненападении.", "{0} принял пакт о ненападении.", "{0} предложил заключить пакт о ненападении.",
		"Вы призвали {0} игроков атаковать {1}.", "Вы попросили {0} атаковать {1}.", "{0} предложил вам атаковать {1}.", "Ваш баланс слишком низкий!", "Вы экспортировали {0} ресурс(ов) к {1}.", "Был удержан налог в размере {0} единиц(ы).",
		"{0} поддержал вас {1} ресурс(ов).", "Бот ({0}) поддержал вас {1} ресурс(ов).", "Карта: {0}", "Размер: {0}x{1}", "Общее количество пикселей: {0}", "Земля: {0} ({1})", "Вода: {0} ({1})", "Горы: {0} ({1})",
		"Полная отправка против игроков-людей отключена.", "{0} и еще {1} игрок(а) были уничтожены.", "{0} и еще {1} игрок(а) покинули игру.", "{0} и еще {1} игрок(а) сдались.", "{0} был уничтожен {1}.", "{0} покинул игру.", "{0} сдался.",
		"{0} присоединился к игре.", "{1006}Ответ от сервера не получен", "{3231}Аккаунт успешно сохранен!", "{3232}Аккаунт", "{3249}Серверы не найдены", "{3252}Спасибо за ваш голос.", "{3265}Пожалуйста, примите Cookies",
		"{3266}Неверный формат пароля", "{3605}Неверный формат повтора", "{4207}Тайм-аут лобби", "{4214}Неверное имя пользователя", "{4224}Lobby Error", "{4229}Нет ответа от клиента", "Неопределено", "Ошибка", "ТАБЛИЦА ЛИДЕРОВ", "ВЫ СТЕРЛИ",
		"ВАС УНИЧТОЖИЛ", "ИГРУ ВЫИГРАЛ", "КАРТА:", "Люди", "Игроки", "Боты", "Зрители", "Порог", "Занятие", "Интерес", "Доход", "Время", "Выйти из игры", "Ещё", "Настройки", "Повтор", "Ссылки", "Версия игры", "Удалить данные",
		"Настройки конфиденциальности", "Закрыть", "Статистика игры", "Сдаться", "Принудительный перезапуск игры", "Меню", "Назад", "Выбрать все", "Копировать", "Очистить", "Запустить", "Сохранить и закрыть", "Сброс", "Информация",
		"Увеличение разрешения, уменьшение минимального размера шрифта и ускорение рендеринга текста могут нагружать вашу систему и снижать отзывчивость игрового процесса.", "Язык", "Разрешение", "Подходит для мобильных", "Шрифт",
		"Скрыть имена пользователей", "Разместить баланс сверху", "Скрыть кнопки масштабирования", "Минимальный размер шрифта", "Лобби", "Скорость рендеринга текста", "Низкое", "Средний", "Высокое", "Очень высокое", "Маленький",
		"Очень маленький", "Проксированное Лобби", "Медленно", "Нормально", "Быстро", "Включено"
	]
}

function a1b() {
	this.a1f = ["", ""], this.nZ = ["Aceptar", "Borraste a {0}.", "Fuiste borrado por {0}.", "Felicidades! Ganaste el juego.", "{0} ganó el juego.", "{0} rompió el pacto de no agresión.", "¡{0} te está atacando!", "Elige tu posición de inicio!",
		"Te rendiste!", "¡El juego terminó en un empate!", "Error: {0}", "New Game Update", "{0} fue inmortalizado!", "Tierra sin reclamar {0}", "Jugador: {0}   Saldo: {1}   Territorio: {2}   Coordenadas: {3}", "Montañas {0}", "Agua {0}",
		"Propietario del barco: {0}   Fuerza: {1}", " Mensaje a {0}: ", "{0}: ", "¡La humanidad triunfa! Los no muertos han sido rechazados.", "La Resistencia",
		"La era de la humanidad termina, invadida por la implacable marea de los no muertos.", "El Virus", "¡Acordar la paz concluye el juego en un empate!", "Firmaste un pacto de no agresión con {0}.",
		"Le pediste a {0} que firmara un pacto de no agresión.", "{0} aceptó el pacto de no agresión.", "{0} solicitó un pacto de no agresión.", "Pediste a {0} jugadores atacar a {1}.", "Pediste a {0} que atacara a {1}.",
		"{0} te sugirió que atacaras a {1}.", "¡Tu saldo es demasiado bajo!", "Exportaste {0} recurso(s) a {1}.", "Se dedujo un impuesto de {0} unidad(es).", "{0} te apoyó con {1} recurso(s).", "Un bot ({0}) te apoyó con {1} recurso(s).",
		"Mapa: {0}", "Dimensión: {0}x{1}", "Píxeles totales: {0}", "Tierra: {0} ({1})", "Agua: {0} ({1})", "Montañas: {0} ({1})", "El envío completo contra jugadores humanos está deshabilitado.",
		"{0} y {1} otro(s) jugador(es) fueron eliminados.", "{0} y {1} otro(s) jugador(es) abandonaron el juego.", "{0} y {1} otro(s) jugador(es) se rindieron.", "{0} fue eliminado por {1}.", "{0} abandonó el juego.", "{0} se rindió.",
		"{0} se unió al juego.", "{1006}Sin respuesta del servidor", "{3231}¡Cuenta guardada con éxito!", "{3232}Cuenta", "{3249}No se encontraron servidores", "{3252}Gracias por el voto.", "{3265}Por favor, acepta las cookies",
		"{3266}Formato de contraseña inválido", "{3605}Formato de repetición inválido", "{4207}Tiempo de espera en el lobby", "{4214}Nombre de usuario inválido", "{4224}Lobby Error", "{4229}Sin respuesta del cliente", "Indefinido", "Error",
		"TABLA DE LIDERAZGO", "ELIMINASTE A", "FUERON ELIMINADOS POR", "EL JUEGO FUE GANADO POR", "MAPA:", "Humanos", "Jugadores", "Bots", "Espectadores", "Umbral", "Ocupación", "Interés", "Ingresos", "Tiempo", "Abandonar juego", "Más",
		"Ajustes", "Repetición", "Enlaces", "Versión del juego", "Eliminar datos", "Configuración de privacidad", "Cerrar", "Estadísticas del juego", "Rendirse", "Reiniciar juego forzosamente", "Menú", "Atrás", "Seleccionar todo", "Copiar",
		"Limpiar", "Lanzar", "Guardar y cerrar", "Restablecer", "Información",
		"Aumentar la resolución, reducir el tamaño mínimo de la fuente y acelerar la velocidad de renderizado del texto puede sobrecargar tu sistema y afectar la capacidad de respuesta del juego.", "Idioma", "Resolución", "Amigable para móviles",
		"Fuente", "Ocultar nombres de usuario", "Colocar saldo arriba", "Ocultar botones de zoom", "Tamaño mínimo de fuente", "Lobby", "Velocidad de renderizado de texto", "Bajo", "Medio", "Alto", "Muy alto", "Pequeño", "Muy pequeño",
		"Lobby proxy", "Lento", "Normal", "Rápido", "Habilitado"
	]
}

function a1a() {
	this.a1f = ["", ""], this.nZ = ["Kabul Et", "{0} silindi.", "{0} tarafından silindiniz.", "Tebrikler! Oyunu kazandınız.", "{0} oyunu kazandı.", "{0} saldırmazlık paktını bozdu.", "{0} sana saldırıyor!", "Başlangıç pozisyonunuzu seçin!",
		"Teslim oldunuz!", "Oyun berabere bitti!", "Hata: {0}", "New Game Update", "{0} ölümsüzleştirildi!", "Sahipsiz Arazi {0}", "Oyuncu: {0}   Bakiye: {1}   Bölge: {2}   Koordinatlar: {3}", "Dağlar {0}", "Su {0}",
		"Gemi Sahibi: {0}   Güç: {1}", " {0} için Mesaj: ", "{0}: ", "İnsanlık zafer kazandı! Ölüler geri püskürtüldü.", "Direniş", "İnsanlığın çağı sona erdi, durdurulamayan ölülerin akını tarafından istila edildi.", "Virüs",
		"Barışa razı olmak oyunu beraberlikle sonuçlandırır!", "{0} ile saldırmazlık anlaşması imzaladınız.", "{0} ile saldırmazlık anlaşması imzalamasını istediniz.", "{0} saldırmazlık anlaşmasını kabul etti.",
		"{0} saldırmazlık anlaşması talep etti.", "{0} oyuncuya {1}'e saldırması için istekte bulundunuz.", "{0}, {1}'e saldırması için istekte bulundunuz.", "{0}, {1}'e saldırmanızı istedi.", "Bakiyeniz çok düşük!",
		"{0} kaynak {1}'e ihraç ettiniz.", "{0} birim vergi kesintisi yapıldı.", "{0}, {1} kaynak ile sizi destekledi.", "Bir bot ({0}), {1} kaynak ile sizi destekledi.", "Harita: {0}", "Boyut: {0}x{1}", "Toplam Pikseller: {0}",
		"Arazi: {0} ({1})", "Su: {0} ({1})", "Dağlar: {0} ({1})", "İnsan oyunculara karşı tam gönderim engellendi.", "{0} ve diğer {1} oyuncu silindi.", "{0} ve diğer {1} oyuncu oyunu terk etti.", "{0} ve diğer {1} oyuncu teslim oldu.",
		"{0}, {1} tarafından silindi.", "{0} oyunu terk etti.", "{0} teslim oldu.", "{0} oyunu katıldı.", "Sunucudan Yanıt Yok", "Hesap başarıyla kaydedildi!", "Hesap", "Sunucu Bulunamadı", "Oyun için teşekkürler.", "Lütfen çerezleri kabul edin",
		"Geçersiz Şifre Formatı", "Geçersiz Yeniden Oynatma Formatı", "Lobi Zaman Aşımı", "Geçersiz Kullanıcı Adı", "{4224}Lobby Error", "İstemci Yanıtı Yok", "Tanımsız", "Hata", "LİDER TABLOSU", "YENILDINIZ", "SİZİ İHALE ETTİRENLER",
		"OYUNU KAZANAN", "HARİTA:", "İnsanlar", "Oyuncular", "Botlar", "İzleyiciler", "Eşik", "Meslek", "Faiz Oranı", "Gelir", "Zaman", "Oyundan Çık", "Daha Fazla", "Ayarlar", "Yeniden Oyna", "Bağlantılar", "Oyun Versiyonu", "Verileri Sil",
		"Gizlilik Ayarları", "Kapat", "Oyun İstatistikleri", "Teslim Ol", "Oyunu Yeniden Başlat", "Menü", "Geri", "Tümünü Seç", "Kopyala", "Temizle", "Başlat", "Kaydet & Kapat", "Sıfırla", "Bilgi",
		"Çözünürlüğü artırmanın, minimum yazı tipi boyutunu küçültmenin ve metin işleme hızını artırmanın sistem üzerinde yük oluşturabileceği ve oyun tepkiselliğini azaltabileceği konusunda uyarı.", "Dil", "Çözünürlük", "Mobil Dostu",
		"Yazı Tipi", "Kullanıcı Adlarını Gizle", "Bakiyeyi Yukarıda Göster", "Yakınlaştırma Düğmelerini Gizle", "Minimum Yazı Tipi Boyutu", "Lobi", "Metin İşleme Hızı", "Düşük", "Orta", "Yüksek", "Çok Yüksek", "Küçük", "Çok Küçük", "Proxy Lobi",
		"Yavaş", "Normal", "Hızlı", "Etkin"
	]
}

function cx() {
	this.sv = !1, this.vZ = null, this.a1h = 0, this.g3 = null, this.g9 = null, this.a1i = .013, this.a1j = .022, this.a1k = .025;
	this.a1m = 3, this.a1n = 1.2, this.a1o = .2, this.a1p = .235, this.a1q = .9, this.a1r = .08;
	var a1s, te = ["Best Players", "Best Clans", "LEGENDS NEVER DIE", "THE NEVER ENDING WAR"],
		a1t = [-1e6, -1e6];
	this.position = [0, 0], this.a1v = [0, 0], this.cq = function() {
		this.vZ = [null, null], this.sv = !1, this.a1h = 0
	}, this.gA = function(id) {
		this.sv = !0, this.resize(), this.a1h = id, this.g0(), y.gA(!1), b3.d1 = !0
	}, this.i5 = function() {
		this.sv && this.g0()
	}, this.g0 = function() {
		b3.dY - 12e4 >= a1t[this.a1h] && (a1t[this.a1h] = b3.dY, this.a1v = [0, 0], aN.iv.zO(0, 1 + this.a1h)) && aN.lX.a1w(0, this.a1h)
	}, this.resize = function() {
		if (this.sv) {
			var eD;
			for (this.g3 = this.a1x(b7.cv.ft() ? .85 : .66, .75, aK.g3, aK.g9), this.g9 = Math.floor(this.g3 / .75), eD = 1; 0 <= eD; eD--) this.vZ[eD] && (this.vZ[eD][4] = aY.fy.fz(1, this.vZ[eD][5] * this.g9 / 10));
			a1s = aY.fy.fz(1, .1 * this.g9)
		}
	}, this.a1x = function(fr, gL, g3, g9) {
		return g3 < gL * g9 ? Math.floor(fr * g3) : Math.floor(gL * fr * g9)
	}, this.a1y = function(fx, a1z, a20, tw, a21, a22, a0a) {
		this.position[fx] = a0a;
		for (var xg, size = a1z.length, g2 = aY.fy.fz(1, a21 * this.g9 / 10), dl = (this.a23(a1z, g2, a22 * this.g3), [
				[], size, -1, tw, g2, a21, 10 * a0a
			]), eD = 0; eD < size; eD++) xg = {
			name: a1z[eD].name,
			value: a1z[eD].qX / a20,
			colorIndex: a1z[eD].colorIndex
		}, dl[0].push(xg);
		this.vZ[fx] = dl, this.a24(fx);
		a22 = this.vZ[fx][0][0].name;
		1 === fx && (a22 = "[" + a22 + "]"), 0 === a0a && aw.fv(fx, a22), b3.d1 = !0
	}, this.a24 = function(eD) {
		this.vZ[eD][0].sort(function(hY, hh) {
			return hh.value - hY.value
		})
	}, this.nb = function(fx, name, a25, a26) {
		if (this.vZ && this.vZ[fx]) {
			var eD, wN = !1;
			if (0 === fx) {
				for (eD = 0; eD < this.vZ[fx][0].length; eD++)
					if (name === this.vZ[fx][0][eD].name && a25 > .99 * this.vZ[fx][0][eD].value && a25 < 1.01 * this.vZ[fx][0][eD].value) {
						this.vZ[fx][0][eD].value = a26, wN = !0;
						break
					} wN || this.vZ[fx][0].push({
					name: name,
					value: a26
				})
			} else {
				for (eD = 0; eD < this.vZ[fx][0].length; eD++)
					if (name === this.vZ[fx][0][eD].name) {
						this.vZ[fx][0][eD].value += 32 < this.vZ[fx][0][eD].value ? (64 - this.vZ[fx][0][eD].value) / 256 : .25, this.vZ[fx][0][eD].value *= 1 / (383 / 384), wN = !0;
						break
					} for (eD = 0; eD < this.vZ[fx][0].length; eD++) this.vZ[fx][0][eD].value *= 383 / 384;
				wN || this.vZ[fx][0].push({
					name: name,
					value: .25
				})
			}
			this.a24(fx)
		}
	}, this.a23 = function(a1z, g2, g4) {
		for (var eD = a1z.length - 1; 0 <= eD; eD--)
			for (; 3 < a1z[eD].name.length && n.measureText(a1z[eD].name, g2) > g4;) a1z[eD].name = a1z[eD].name.substring(0, a1z[eD].name.length - 4) + "..."
	}, this.g6 = function(gp, gq) {
		return !!this.sv && (gp -= (aK.g3 - this.g3) / 2, gq -= (aK.g9 - this.g9) / 2, gp < 0 || gp > this.g3 || gq < 0 || gq > this.g9 ? (this.sv = !1, 0 === x.rp() && y.gA(!0), b3.d1 = !0) : (gq = gq < .3 * this.g9 ? 1 : gq < .85 * this.g9 ? (
				gq = (0 === this.a1h ? 14.1 : 3) * (gq - .3 * this.g9) / (.55 * this.g9), Math.floor(1 + gq * gq)) : 0 === this.a1h ? 200 : 10, gp < this.g3 / 2 ? this.a1v[this.a1h] = -gq : this.a1v[this.a1h] = gq, a1t[this.a1h] + 50 > b3
			.dY || (a1t[this.a1h] = b3.dY, aN.iv.zO(0, 1 + this.a1h) && aN.lX.a1w(0, this.a1h)), !0))
	}, this.gC = function() {
		var ja, jb, qP, qQ, a27, a28, a29, va;
		this.sv && (ja = (aK.g3 - this.g3) / 2, jb = (aK.g9 - this.g9) / 2, qP = this.a1i * this.g3, qQ = this.a1m * qP, a27 = this.a1j * this.g3, a28 = this.a1n * a27, a29 = this.a1k * this.g3, va = Math.floor(.25 * this.g9), gD.setTransform(1,
				0, 0, 1, ja, jb), gD.fillStyle = 0 === this.a1h ? aZ.l7 : aZ.l4, gD.fillRect(0, 0, this.g3, va), gD.fillStyle = aZ.kX, gD.fillRect(0, va, this.g3, this.g9 - va), gD.fillStyle = aZ.gE, gD.font = a1s, aY.fy.textBaseline(gD, 1),
			aY.fy.textAlign(gD, 1), gD.fillText(te[this.a1h], Math.floor(this.g3 / 2), Math.floor(.135 * this.g9)), gD.font = aY.fy.fz(1, .025 * this.g9), gD.fillText(te[this.a1h + 2], Math.floor(this.g3 / 2), Math.floor(.2125 * this.g9)), gD
			.beginPath(), gD.moveTo(this.g3 / 4, 0), gD.lineTo(this.g3 / 2 - qP, 0), gD.lineTo(this.g3 / 2, -qQ), gD.lineTo(this.g3 / 2 + qP, 0), gD.lineTo(this.g3 - a27, 0), gD.lineTo(this.g3 + a28, -a28), gD.lineTo(this.g3, a27), gD.lineTo(
				this.g3, this.g9 / 2 - qP), gD.lineTo(this.g3 + qQ, this.g9 / 2), gD.lineTo(this.g3, this.g9 / 2 + qP), gD.lineTo(this.g3, this.g9 - a27), gD.lineTo(this.g3 + a28, this.g9 + a28), gD.lineTo(this.g3 - a27, this.g9), gD.lineTo(
				this.g3 / 2 + qP, this.g9), gD.lineTo(this.g3 / 2, this.g9 + qQ), gD.lineTo(this.g3 / 2 - qP, this.g9), gD.lineTo(a27, this.g9), gD.lineTo(-a28, this.g9 + a28), gD.lineTo(0, this.g9 - a27), gD.lineTo(0, this.g9 / 2 + qP), gD
			.lineTo(-qQ, this.g9 / 2), gD.lineTo(0, this.g9 / 2 - qP), gD.lineTo(0, a27), gD.lineTo(-a28, -a28), gD.lineTo(a27, 0), gD.lineTo(this.g3 / 4, 0), gD.lineTo(this.g3 / 4, a29), gD.lineTo(a29, a29), gD.lineTo(a29, this.g9 - a29), gD
			.lineTo(this.g3 - a29, this.g9 - a29), gD.lineTo(this.g3 - a29, a29), gD.lineTo(this.g3 / 4, a29), gD.fill(), this.vZ[this.a1h] && this.a2A(va), this.a2B(va), gD.setTransform(1, 0, 0, 1, 0, 0))
	}, this.a2B = function(va) {
		var qP = vy(2, Math.floor(.06 * this.g3)),
			xB = (qP -= qP % 2, vy(2, Math.floor(.01 * this.g3))),
			va = (xB -= xB % 2, Math.floor(.82 * va));
		gD.fillRect(qP, va, qP, xB), gD.fillRect(this.g3 - qP - qP, va, qP, xB), gD.fillRect(Math.floor(this.g3 - qP - qP + (qP - xB) / 2), Math.floor(va - (qP - xB) / 2), xB, qP)
	}, this.a2A = function(va) {
		var fJ;
		gD.font = this.vZ[this.a1h][4];
		for (var eD = this.vZ[this.a1h][1] - 1; 0 <= eD; eD--) aY.fy.textAlign(gD, 2), fJ = Math.floor(this.a1r * this.g9 + va + eD * ((1 - 2 * this.a1r) * this.g9 - va) / 9), gD.fillText(this.vZ[this.a1h][0][eD].value.toFixed(this.vZ[this.a1h][
			3]), Math.floor(this.a1q * this.g3), fJ), gD.fillText(eD + 1 + this.vZ[this.a1h][6] + ".", Math.floor(this.a1o * this.g3), fJ), aY.fy.textAlign(gD, 0), gD.fillText(this.vZ[this.a1h][0][eD].name, Math.floor(this.a1p * this.g3), fJ)
	}
}

function cy() {
	var fI, fJ, g9, a2C, a2D, a2E, a2F, a2G, a2H, g3, a2I, a2J;
	this.sv = !1, this.cq = function(fw, a2K) {
		if (13 <= b7.dc && b7.dc < 18) return a2K ? void(a2I = fw) : a2I !== fw ? void 0 : void b7.oS.saveString(200, fw);
		a2K && ((a8.vZ[1].rB.sv || a8.vZ[2].rB.sv) && a8.t9(), y.gA(!1), a2I = fw, (a2J = document.createElement("a")).appendChild(document.createTextNode(a2I)), this.sv = !0, a2J.title = a2I, a2J.target = "_blank", a2J.href = a2I, a2J.style
			.textAlign = "center", a2J.style.color = aZ.gE, a2J.style.position = "absolute", a2J.style.padding = "0px", a2J.style.margin = "0px", this.resize(), document.body.appendChild(a2J), b3.d1 = !0)
	}, this.o0 = function() {
		return !(!this.sv || (document.body.removeChild(a2J), this.sv = !1))
	}, this.g6 = function(gp, gq) {
		return !!this.sv && ((gp < fI || gq < fJ || fI + g3 < gp || fJ + g9 < gq || fI + g3 - a2C < gp && gq < fJ + a2C) && (b3.d1 = !0, this.sv = !1, document.body.removeChild(a2J), 0 === x.rp()) && y.gA(!0), !0)
	}, this.resize = function() {
		var g2, a2L;
		this.sv && (a2G = Math.floor(.8 * (b7.cv.ft() ? aK.g3 > aK.g9 ? .6 : .55 : .4) * aK.fu), a2C = Math.floor(.15 * a2G), a2D = Math.floor(.35 * a2C), a2E = Math.floor(.5 * a2C), a2F = Math.floor(2.5 * a2E), g9 = a2C + a2D + 3 * a2E, g2 = aY
			.fy.fz(1, a2D / aK.nE), a2H = Math.floor(aK.nE * n.measureText(a2I, g2)), a2L = g3 = (a2G < a2H ? a2H : a2G) + 2 * a2F, g3 = Math.min(g3, aK.g3 - 2 * (b7.cv.ft() ? 2 : 1) * b0.gap), g2 = aY.fy.fz(1, g3 / a2L * a2D / aK.nE), a2H =
			Math.floor(aK.nE * n.measureText(a2I, g2)), fI = Math.floor((aK.g3 - g3) / 2), fJ = Math.floor((aK.g9 - g9) / 2), a2J.style.font = g2, a2J.style.top = Math.floor((fJ + 1.4 * a2E + a2C) / aK.nE) + "px", a2J.style.left = Math.floor(
				(fI + (g3 - a2H) / 2) / aK.nE) + "px")
	}, this.gC = function() {
		this.sv && (gD.fillStyle = aZ.kY, gD.fillRect(fI, fJ + a2C, g3, g9 - a2C), gD.fillStyle = aZ.lM, gD.fillRect(fI, fJ, g3, a2C), gD.fillStyle = aZ.gE, gD.lineWidth = b0.ud, gD.strokeStyle = aZ.gE, gD.strokeRect(fI, fJ, g3, g9), gD.fillRect(
				fI, fJ + a2C, g3, b0.ud), gD.font = aY.fy.fz(1, .48 * a2C), aY.fy.textAlign(gD, 1), aY.fy.textBaseline(gD, 1), gD.fillText("You are leaving Territorial.io!", Math.floor(fI + (g3 - .5 * a2C) / 2), Math.floor(fJ + .55 * a2C)), j
			.vX(Math.floor(fI + g3 - .8 * a2C), Math.floor(fJ + .25 * a2C), Math.floor(.5 * a2C)), gD.setTransform(1, 0, 0, 1, 0, 0))
	}
}

function cu() {
	var gap, a0p, fI = [0, 0, 0, 0, 0],
		fJ = [0, 0, 0, 0, 0],
		kF = [1, 1, 1, 1, 1],
		db = [!0, !0, !1, !1, !1],
		iK = (this.dr = [!0, !0, !1, !1, !1], null);
	this.a2M = function(uq, a2N) {
		iK = uq, db = a2N, a0p = [ah.a2O, ah.s3, ah.a2P, ah.a2Q, ah.a2R], this.cq()
	}, this.cq = function() {
		if (a1.g1()) {
			var eD, qP = Math.floor((b7.cv.ft() ? .261 : .195) * aK.fu),
				qQ = Math.floor(.9 * qP),
				xB = Math.floor(.17 * qQ);
			if (gap = b7.cv.ft() ? 2 * b0.gap : b0.gap, kF[0] = qP / iK[0].width, kF[1] = qQ / iK[1].width, kF[2] = xB / iK[2].height, kF[3] = xB / iK[3].height, kF[4] = xB / iK[4].height, kF[3] *= 1.07, fI[0] = gap, fI[1] = gap, fI[2] = gap, fI[
					3] = gap, fI[4] = Math.floor(2 * gap + kF[3] * iK[3].width), fJ[0] = gap, fJ[1] = fJ[0] + gap + kF[0] * iK[0].height, fJ[2] = fJ[1] + gap + kF[1] * iK[1].height, fJ[3] = fJ[2] + gap + kF[2] * iK[2].height, fJ[4] = fJ[3], !db[
					0])
				for (eD = 0; eD < 5; eD++) fJ[eD] -= kF[0] * iK[0].height + gap;
			if (!db[1])
				for (eD = 2; eD < 5; eD++) fJ[eD] -= kF[1] * iK[1].height + gap
		}
	}, this.sv = function() {
		return !(7 === x.rp() && b7.cv.ft())
	}, this.g6 = function(gp, gq, a2K) {
		if (iK && this.sv())
			for (var eD = db.length - 1; 0 <= eD; eD--)
				if (db[eD] && this.dr[eD] && fI[eD] < gp && fJ[eD] < gq && gp < fI[eD] + kF[eD] * iK[eD].width && gq < fJ[eD] + kF[eD] * iK[eD].height) return av.cq(a0p[eD], a2K), !0;
		return !1
	}, this.gC = function() {
		if (iK && this.sv()) {
			var eD;
			for (gD.imageSmoothingEnabled = !0, eD = 0; eD < 5; eD++) db[eD] && this.dr[eD] && (gD.setTransform(kF[eD], 0, 0, kF[eD], fI[eD], fJ[eD]), gD.drawImage(iK[eD], 0, 0));
			gD.setTransform(1, 0, 0, 1, 0, 0)
		}
	}
}

function bh() {
	var a1h, a2S, a2T;

	function a2Y(eD) {
		var button = v.nR[eD],
			fI = button.fI,
			fJ = button.fJ,
			g3 = button.g3,
			g9 = button.g9;
		gD.fillStyle = button.a2W, gD.fillRect(fI, fJ, g3, g9), eD === a1h && (gD.fillStyle = a2T, gD.fillRect(fI, fJ, g3, g9)), gD.lineWidth = b0.ud, gD.strokeStyle = a2S, gD.strokeRect(fI, fJ, g3, g9),
			function(button) {
				var fI = button.fI,
					fJ = button.fJ,
					g3 = button.g3,
					g9 = button.g9;
				aY.fy.textAlign(gD, 1), aY.fy.textBaseline(gD, 1), gD.font = button.font, gD.fillStyle = a2S, gD.fillText(button.nZ, Math.floor(fI + g3 / 2), Math.floor(fJ + g9 / 2 + .1 * button.fontSize))
			}(button)
	}
	this.g3 = 0, this.g9 = 0, this.fJ = 0, this.gap = 0, this.cq = function() {
		a1h = -1, a2S = aZ.gE, a2T = "rgba(255,255,255,0.16)", this.nR = new Array(7), this.g9 = Math.floor((b7.cv.ft() ? .123 : .093) * aK.fu), this.g3 = Math.floor((b7.cv.ft() ? 3.96 : 4.2) * this.g9), this.gap = Math.floor(.025 * this.g3);
		var a2U = Math.floor(.26 * this.g9),
			a2V = aY.fy.fz(1, a2U);
		this.nR[0] = {
			fI: 0,
			fJ: 0,
			g3: Math.floor(.6 * this.g3 - this.gap / 2),
			g9: this.g9,
			nZ: "Multiplayer",
			font: a2V,
			a2W: "rgba(22,88,22,0.8)",
			fontSize: a2U
		}, a2U = Math.floor(.18 * this.g9), a2V = aY.fy.fz(1, a2U), this.nR[1] = {
			fI: 0,
			fJ: 0,
			g3: this.g3 - this.nR[0].g3 - this.gap,
			g9: this.g9,
			nZ: "Single Player",
			font: a2V,
			a2W: "rgba(22,88,88,0.8)",
			fontSize: a2U
		}, this.nR[2] = {
			fI: 0,
			fJ: 0,
			g3: this.g3,
			g9: Math.floor(.3 * this.g9),
			nZ: "",
			font: this.nR[1].font,
			a2W: "rgba(100,0,0,0.8)",
			fontSize: this.nR[1].fontSize
		}, this.nR[3] = {
			fI: 0,
			fJ: 0,
			g3: this.g3,
			g9: this.g9,
			nZ: "Back",
			font: this.nR[0].font,
			a2W: "rgba(0,0,0,0.8)",
			fontSize: this.nR[0].fontSize
		}, this.nR[4] = {
			fI: 0,
			fJ: 0,
			g3: this.g3,
			g9: Math.floor(.3 * this.g9),
			nZ: "The game was updated!",
			font: this.nR[1].font,
			a2W: "rgba(100,0,0,0.8)",
			fontSize: this.nR[1].fontSize
		}, this.nR[5] = {
			fI: 0,
			fJ: 0,
			g3: this.nR[0].g3,
			g9: Math.floor(.8 * this.g9),
			nZ: "Reload",
			font: this.nR[0].font,
			a2W: "rgba(0,100,0,0.8)",
			fontSize: this.nR[0].fontSize
		}, this.nR[6] = {
			fI: 0,
			fJ: 0,
			g3: this.nR[1].g3,
			g9: this.nR[5].g9,
			nZ: "Back",
			font: this.nR[0].font,
			a2W: "rgba(0,0,0,0.8)",
			fontSize: this.nR[0].fontSize
		}, this.zW()
	}, this.zW = function() {
		this.fJ = Math.floor(.54 * aK.g9), this.nR[0].fI = Math.floor(.5 * aK.g3 - .5 * this.g3), this.nR[1].fI = this.nR[0].fI + this.nR[0].g3 + this.gap, this.nR[2].fI = this.nR[3].fI = this.nR[0].fI, this.nR[4].fI = this.nR[5].fI = this.nR[0]
			.fI, this.nR[6].fI = this.nR[1].fI, this.nR[0].fJ = Math.floor(.54 * aK.g9), this.nR[1].fJ = this.nR[0].fJ, this.nR[2].fJ = Math.floor((aK.g9 - this.nR[2].g9 - this.nR[3].g9 - this.gap) / 2), this.nR[3].fJ = this.nR[2].fJ + this.nR[2]
			.g9 + this.gap, this.nR[4].fJ = Math.floor((aK.g9 - this.nR[4].g9 - this.nR[5].g9 - this.gap) / 2), this.nR[5].fJ = this.nR[6].fJ = this.nR[4].fJ + this.nR[4].g9 + this.gap
	}, this.a2X = function() {
		a2Y(0), a2Y(1)
	}, this.a2Z = function() {
		a2Y(2), a2Y(3)
	}, this.a2a = function() {
		a2Y(4), a2Y(5), a2Y(6)
	}, this.sX = function(fI, fJ, j4) {
		var eD = -1;
		return 0 === x.rp() ? eD = this.t3(fI, fJ, 0, 2) : 3 === x.rp() ? eD = this.t3(fI, fJ, 3, 1) : 5 === x.rp() && (eD = this.t3(fI, fJ, 5, 2)), a1h !== eD && (a1h = eD, j4) && (b3.d1 = !0), -1 !== eD && (q.sx(), !0)
	}, this.t3 = function(fI, fJ, a2b, size) {
		for (var eD = a2b; eD < a2b + size; eD++)
			if (fI >= this.nR[eD].fI && fJ >= this.nR[eD].fJ && fI <= this.nR[eD].fI + this.nR[eD].g3 && fJ <= this.nR[eD].fJ + this.nR[eD].g9) return eD;
		return -1
	}
}

function a2d() {
	function a2j(ut) {
		return ut < 0 ? 0 : 255 < ut ? 255 : Math.floor(ut)
	}
	this.g3 = 0, this.g9 = 0, this.sv = !1, this.a2e = 0, this.gap = 0, this.wx = 0, this.a2C = 0, this.a2f = 0, this.a2g = 0, this.a2h = 0, this.colors = null, this.cq = function() {
		this.sv = !0, this.a2e = 0, this.resize()
	}, this.resize = function() {
		this.sv && (aK.g3 < 1.4 * aK.g9 ? this.g3 = Math.floor((b7.cv.ft() ? .94 : .43) * aK.g3) : (this.g9 = Math.floor((b7.cv.ft() ? .88 : .43) * aK.g9), this.g3 = Math.floor(1.4 * this.g9)), this.g9 = this.g3 / 1.4, this.gap = this.g3 / 32,
			this.a2C = Math.floor(.25 * this.g9), this.a2f = (this.g9 - this.a2C - 3 * this.gap) / 2, this.a2g = this.g3 - 3 * this.gap - this.a2f, this.a2h = (this.g9 - this.a2C - 4 * this.gap) / 3)
	}, this.a2i = function() {
		this.colors = [
			[0, 0, 0],
			[0, 0, 0]
		];
		var fw = b9.dG.data[103].value.split("");
		if (fw.length < 6)
			for (var hh = 2; 0 <= hh; hh--) this.colors[0][hh] = a2j(256 * Math.random());
		else
			for (var eD = 2; 0 <= eD; eD--) this.colors[0][eD] = a2j(4 * (10 * parseInt(fw[2 * eD]) + parseInt(fw[2 * eD + 1])));
		this.a2k()
	}, this.a2l = function() {
		return [eR(this.colors[0][0], 4), eR(this.colors[0][1], 4), eR(this.colors[0][2], 4)]
	}, this.sa = function(g7, g8, deltaY) {
		var ja = (aK.g3 - this.g3) / 2;
		g8 -= (aK.g9 - this.g9) / 2 + this.a2C, (g7 -= ja) < 0 || g8 < 0 || g7 >= this.g3 || g8 >= this.g9 - this.a2C || (ja = Math.floor(3 * g8 / (this.g9 - this.a2C)), this.colors[this.wx][ja] = a2j(this.colors[this.wx][ja] + (deltaY < 0 ? 1 :
			-1) * Math.max(Math.abs(.05 * deltaY), 1)), b3.d1 = !0)
	}, this.g6 = function(g7, g8) {
		this.a2e = 0;
		var ja = (aK.g3 - this.g3) / 2;
		return g8 -= (aK.g9 - this.g9) / 2, (g7 -= ja) < 0 || g8 < 0 || g7 >= this.g3 - 1 || g8 >= this.g9 - 1 || g7 > this.g3 - (.4 * this.a2C + 3 * this.gap) && g8 < this.a2C ? (this.sv = !1, 0 === x.rp() && y.gA(!0), !(b3.d1 = !0)) : g7 < this
			.gap || g8 < this.gap + this.a2C || g7 >= this.g3 || g8 >= this.g9 - this.gap || (g7 < this.gap + this.a2f ? (g8 < this.gap + this.a2C + this.a2f && 0 !== this.wx && (this.wx = 0, b3.d1 = !0), !0) : g7 < this.gap + this.a2f || (g7 -=
				2 * this.gap + this.a2f, g8 < this.gap + this.a2C + this.a2h ? (this.a2e = 1, this.colors[this.wx][0] = a2j(256 * g7 / this.a2g), b3.d1 = !0) : g8 < 2 * this.gap + this.a2C + this.a2h || (g8 < 2 * this.gap + this.a2C + 2 *
					this.a2h ? (this.a2e = 2, this.colors[this.wx][1] = a2j(256 * g7 / this.a2g), b3.d1 = !0) : !(g8 >= 3 * this.gap + this.a2C + 2 * this.a2h) || (this.a2e = 3, this.colors[this.wx][2] = a2j(256 * g7 / this.a2g), b3.d1 = !0))
				))
	}, this.a2k = function() {
		for (var hh = 2; 0 <= hh; hh--) this.colors[0][hh] = a2j(this.colors[0][hh])
	}, this.a2m = function() {
		for (var db, fw = "", eD = 0; eD < 3; eD++)(db = eR(this.colors[0][eD], 4)) < 10 && (fw += "0"), fw += db.toString();
		return fw
	}, this.sX = function(g7) {
		0 !== this.a2e && (g7 -= 2 * this.gap + this.a2f + (aK.g3 - this.g3) / 2, this.colors[this.wx][this.a2e - 1] = a2j(256 * g7 / this.a2g), b3.d1 = !0)
	}, this.a2n = function() {
		0 < this.a2e && (this.a2e = 0, this.a2k(), b9.na.nb(103, this.a2m()), b3.d1 = !0)
	}, this.gC = function() {
		var ja = (aK.g3 - this.g3) / 2,
			jb = (aK.g9 - this.g9) / 2;
		gD.setTransform(1, 0, 0, 1, ja, jb), gD.fillStyle = aZ.kY, gD.fillRect(0, this.a2C, this.g3, this.g9 - this.a2C), gD.fillStyle = aZ.kj, gD.fillRect(0, 0, this.g3, this.a2C), gD.fillStyle = aZ.gE, gD.lineWidth = b0.ud, gD.strokeStyle = aZ
			.gE, gD.strokeRect(-1, -1, this.g3 + 2, this.g9 + 2), gD.fillRect(0, this.a2C, this.g3, b0.ud), gD.font = aY.fy.fz(1, .31 * this.a2C), aY.fy.textBaseline(gD, 1), aY.fy.textAlign(gD, 1), gD.fillText("Choose Your Nation's Color!", Math
				.floor((this.g3 - this.gap - .4 * this.a2C) / 2), Math.floor(.55 * this.a2C)), this.a2o(0), gD.lineWidth = b0.ud, this.a2p(0), this.a2p(1), this.a2p(2), j.vX(Math.floor(ja + this.g3 - .4 * this.a2C - this.gap), Math.floor(jb +
				.3 * this.a2C), Math.floor(.4 * this.a2C)), gD.setTransform(1, 0, 0, 1, 0, 0)
	}, this.a2o = function(eD) {
		var gP = this.colors[eD][0],
			tb = this.colors[eD][1],
			eD = this.colors[eD][2];
		gD.fillStyle = "rgb(" + gP + "," + tb + "," + eD + ")", gD.fillRect(this.gap, this.a2C + this.gap, this.a2f, 2 * this.a2f + this.gap), gD.lineWidth = b0.ud, gD.strokeStyle = aZ.gE, gD.strokeRect(this.gap, this.a2C + this.gap, this.a2f,
			2 * this.a2f + this.gap), gD.fillStyle = gP + tb + eD < 306 && tb < 150 ? aZ.gE : aZ.jg, gD.font = aY.fy.fz(1, .32 * this.a2h), aY.fy.textAlign(gD, 1), aY.fy.textBaseline(gD, 1), gD.rotate(-Math.PI / 2), gD.fillText(
			"National Color", Math.floor(-1.5 * this.gap - this.a2C - this.a2f), Math.floor(this.gap + .5 * this.a2f)), gD.rotate(Math.PI / 2)
	}, this.a2p = function(eD) {
		gD.fillStyle = "rgb(" + (0 === eD ? 150 : 2 === eD ? 30 : 0) + "," + (1 === eD ? 130 : 2 === eD ? 30 : 0) + "," + (2 === eD ? 220 : 0) + ")", gD.fillRect(2 * this.gap + this.a2f, this.a2C + this.gap + eD * (this.gap + this.a2h), Math
				.floor(this.colors[this.wx][eD] * this.a2g / 255), this.a2h), gD.strokeStyle = aZ.gE, gD.strokeRect(2 * this.gap + this.a2f, this.a2C + this.gap + eD * (this.gap + this.a2h), this.a2g, this.a2h), gD.fillStyle = aZ.gE, gD.font = aY
			.fy.fz(1, .32 * this.a2h), aY.fy.textBaseline(gD, 1), aY.fy.textAlign(gD, 0), gD.fillText((0 === eD ? "Red: " : 1 === eD ? "Green: " : "Blue: ") + this.colors[0][eD].toString(), 3 * this.gap + this.a2f, Math.floor(this.a2C + this
				.gap + eD * (this.gap + this.a2h) + .53 * this.a2h))
	}
}

function bi() {
	var a2q, a2r, xH, xQ, yJ, a2s, a2t, a2u, a2v, g2, fontSize, jw, a2w, a2y, a2x = 0;

	function a31() {
		return aN.iv.a32[(a2w + a2x) % aN.iv.a33]
	}

	function a2z() {
		a2w++, jw = b3.dY, aN.iv.zO(a31(), 4) && (a2y = !0, aN.lX.a34(a31()))
	}

	function a35() {
		0 === a2w ? bB.sH(3249) : (a2w === aN.iv.a33 - 1 && (a2w = -1), a2z())
	}

	function a3C(fJ, zA, a3B) {
		var ja = Math.floor((aK.g3 - xQ) / 2) + a2t,
			jc = ja + Math.floor(a3B * (xQ - 2 * a2t));
		gD.lineWidth = zA, gD.beginPath(), gD.moveTo(ja, fJ), gD.lineTo(jc, fJ), gD.lineTo(Math.floor(ja - a2t + a3B * xQ), fJ + xH), gD.lineTo(ja - a2t, fJ + xH), gD.closePath()
	}
	this.cq = function() {
		x.setState(6), a2q = 0, a2r = 1, a2u = "rgba(0,220,120,0.4)", a2v = "rgba(0,0,0,0.8)", this.resize(), b3.d1 = !0, a2w = 0, a2y = !1, a2z()
	}, this.resize = function() {
		xQ = Math.floor((b7.cv.ft() ? .5 : .25) * aK.fu), yJ = xQ + 12, xH = Math.floor(.125 * xQ), a2t = 3 * xH, a2s = Math.floor(.225 * xQ), fontSize = Math.floor(.3 * xH), g2 = aY.fy.fz(0, fontSize)
	}, this.a30 = function(hY) {
		a2x = hY
	}, this.sC = function(s5) {
		s5 === a31() && (a2y = !1, a35())
	}, this.zQ = function(s5) {
		6 !== x.rp() || a2y || (jw = b3.dY, a2y = !0, aN.lX.a34(s5))
	}, this.g6 = function(fI, fJ) {
		var ja = Math.floor((aK.g3 - yJ) / 2),
			jb = Math.floor(.5 * (aK.g9 - b0.gap - xH - a2s)) + xH + b0.gap;
		return ja < fI && fI < ja + yJ && jb < fJ && fJ < jb + a2s && (this.a37(), v.sX(fI, fJ, !1), !0)
	}, this.a37 = function() {
		aN.iv.sL(3260), a0.cq(), b3.d1 = !0
	}, this.i5 = function() {
		6 === x.rp() && (a2y ? b3.dY > jw + 12e3 && bB.sH(3250) : b3.dY > jw + 12e3 && a35(), 100 < (a2q += .07 * a2r * (a2q < 16 ? 5 + a2q : 84 < a2q ? 105 - a2q : 17)) ? (a2q = 100, a2r = -1) : a2q < 0 && (a2q = 0, a2r = 1), a2u = "rgba(0," +
			Math.floor(190 - 1.9 * a2q) + "," + Math.floor(120 - 1.2 * a2q) + "," + (.4 + .004 * a2q) + ")", a2v = "rgba(0," + Math.floor(1.9 * a2q) + "," + Math.floor(1.2 * a2q) + "," + (.8 - .004 * a2q) + ")", b3.d1 = !0)
	}, this.gC = function() {
		var fI = Math.floor((aK.g3 - yJ) / 2),
			fJ = Math.floor(.5 * (aK.g9 - b0.gap - xH - a2s));
		! function(title, fJ, zA, a3B) {
			gD.fillStyle = a2v, a3C(fJ, zA, 1), gD.fill(), gD.fillStyle = a2u, a3C(fJ, zA, a3B), gD.fill(), gD.strokeStyle = aZ.gE, a3C(fJ, zA, 1), gD.stroke(),
				function(a3E, fJ) {
					aY.fy.textAlign(gD, 1), aY.fy.textBaseline(gD, 1), gD.font = g2, gD.fillStyle = aZ.gE, gD.fillText(a3E, Math.floor(.5 * aK.g3), Math.floor(fJ + .58 * xH))
				}(title, fJ)
		}("Loading", fJ, 3, a2q / 100),
		function(fI, fJ, g3, g9, nZ) {
			gD.fillStyle = aZ.kW, gD.fillRect(fI, fJ, g3, g9), gD.lineWidth = 3, gD.strokeStyle = aZ.gE, gD.strokeRect(fI, fJ, g3, g9);
			var eZ = Math.floor(.3 * g9);
			aY.fy.textAlign(gD, 1), aY.fy.textBaseline(gD, 1), gD.font = aY.fy.fz(0, eZ), gD.fillStyle = aZ.gE, gD.fillText(nZ, Math.floor(fI + g3 / 2), Math.floor(fJ + g9 / 2 + .1 * eZ))
		}(fI, fJ + xH + b0.gap, yJ, a2s, "Back")
	}
}

function bj() {
	var dX;
	this.cq = function() {
		v.cq(), y.cq(), dX = 0, a0.cq()
	}, this.setState = function(a3F) {
		dX = a3F
	}, this.rp = function() {
		return dX
	}, this.a3G = function() {
		0 === x.rp() && a0.sK(), this.setState(8), aG.sK(), a8.t9(), b6.sv = !1, av.g6(-1e3, -1e3)
	}, this.t9 = function(dE) {
		if (!ap.p9) return !1;
		if (!(b3.dY < 400)) {
			if ("Enter" === dE.key || "Escape" === dE.key) {
				if (this.a3H()) return 0 === dX && y.gA(!0), !0;
				if ("Enter" === dE.key) {
					if (0 === dX) return a0.a3I(), !0;
					if (7 === dX) return !0
				}
			}
			return !1
		}
	}, this.a3J = function() {
		b6.resize(), av.resize(), a8.resize()
	}, this.a3H = function() {
		return !!av.o0() || !!a8.t9() || !!b6.sv && !(b6.sv = !1)
	}, this.dd = function() {
		b3.d1 = !0, 8 === dX ? k7 ? aa.tB(!1) : (b2.sv ? b2 : j).tC() : 7 === dX ? aG.a3K() : 6 === dX ? w.a37() : 2 === dX ? z.a3L() : 0 !== dX || this.a3H() || b7.cv.setState(11)
	}, this.g6 = function(fI, fJ) {
		if (ap.p9 && !av.g6(fI, fJ) && !(6 === dX && w.g6(fI, fJ) || 2 === dX && z.g6(fI, fJ) || b6.g6(fI, fJ) || au.g6(fI, fJ, !0) || a8.g6(fI, fJ, !0))) {
			if (q.g6(fI, fJ), 0 === dX) a0.g6(fI, fJ);
			else if (7 === dX && aG.g6(fI, fJ)) return;
			aw.g6(fI, fJ)
		}
	}, this.sX = function(fI, fJ) {
		if (!q.zM) {
			if (0 <= a8.t3(fI, fJ)) return void q.sx();
			if (a8.sX(fI, fJ)) return void q.sx();
			if (2 === dX && z.sX(fI, fJ)) return void q.sx();
			if (v.sX(fI, fJ, !0)) return
		}
		q.sX(fI, fJ)
	}, this.click = function(fI, fJ) {
		q.sy(), a8.a2n() || au.g6(fI, fJ, !1) || a8.g6(fI, fJ, !1)
	}, this.sa = function(fI, fJ, deltaY) {
		a8.vZ[1].rB.sv || (a8.vZ[2].rB.sv ? a8.vZ[2].rB.sa(fI, fJ, deltaY) : 0 === dX && q.sa(fI, deltaY))
	}, this.a3M = function() {
		v.zW(), a8.zW(), 0 === dX ? (y.resize(), q.zW()) : 7 === dX && aG.resize(), b3.d1 = !0
	}, this.gC = function() {
		var fJ, gM, gL, fI;
		8 !== dX && 10 !== dX && (gD.imageSmoothingEnabled = !0, this.qG(), q.gC(), l.gC(), fJ = Math.floor(.3 * aK.g9), gM = a1.ur("territorial.io"), gL = (gL = 1.75 * aK.g9 / gM.width) * gM.width < .98 * aK.g3 ? .98 * aK.g3 / gM.width : gL, gD
			.globalAlpha = .15, fI = Math.floor(.5 * (aK.g3 - gL * gM.width)), fI = Math.floor(fI / gL), fJ = Math.floor(fJ - .5 * gM.height * gL), fJ = Math.floor(fJ / gL), gD.setTransform(gL, 0, 0, gL, fI, fJ), gD.drawImage(gM, fI, fJ), gD
			.setTransform(1, 0, 0, 1, 0, 0), gD.globalAlpha = 1, au.gC(), aw.gC(), a8.gC(), 0 === dX ? a0.gC() : 2 === dX ? z.gC() : 6 === dX ? w.gC() : 7 === dX && aG.gC(), a8.a3O(), b6.gC(), av.gC())
	}, this.qG = function() {
		var a3Q, a3P;
		if (makeMainMenuTransparent) gD.clearRect(0, 0, aK.g3, aK.g9);
		else ap.p9 ? (a3P = aK.g3 / ap.e8, a3Q = aK.g9 / ap.e9, gD.setTransform(a3P = a3Q < a3P ? a3P : a3Q, 0, 0, a3P, Math.floor((aK.g3 - a3P * ap.e8) / 2), Math.floor((aK.g9 - a3P * ap.e9) / 2)), gD.drawImage(ap.pB, 0, 0), gD.setTransform(1,
			0, 0, 1, 0, 0), gD.fillStyle = aZ.kW) : gD.fillStyle = aZ.jg, gD.fillRect(0, 0, aK.g3, aK.g9)
	}
}

function a3R() {
	this.g3 = 0, this.g9 = 0, this.a3S = 0, this.sv = !1, this.wm = 10, this.eg = .12, this.a2e = !1, this.a3T = !1, this.a3U = !1, this.cq = function() {
		this.sv = !0, this.resize(), this.a2e = !1
	}, this.resize = function() {
		this.sv && (1.15 * aK.g3 < aK.g9 ? this.g3 = Math.floor((b7.cv.ft() ? .94 : .69) * aK.g3) : this.g3 = Math.floor((b7.cv.ft() ? .94 : .69) * aK.g9 / 1.15), this.g3 -= this.g3 % this.wm, this.g9 = +this.g3, this.a3S = Math.floor(.15 * this
			.g3))
	}, this.g6 = function(g7, g8, dX) {
		var ja = (aK.g3 - this.g3) / 2;
		return g8 -= (aK.g9 - this.g9 - this.a3S) / 2, (g7 -= ja) < 0 || g8 < 0 || g7 >= this.g3 - 1 || g8 >= this.g9 + this.a3S - 1 || g7 >= this.g3 - this.a3S && g8 < this.a3S ? (0 === dX && (this.sv = !1, 0 === x.rp() && y.gA(!0), b3.d1 = !0),
			!1) : (g8 < this.a3S || (g7 = (g7 = eR(g7, ja = Math.floor(this.g3 / this.wm)) + this.wm * eR(g8 - this.a3S, ja)) < 0 ? 0 : g7 >= az.wq ? az.wq - 1 : g7, (0 === dX || 1 === dX && !az.rz[g7] || 2 === dX && az.rz[g7]) && (this
			.a3T = !az.rz[g7], this.a2e = !0, this.a3U = !0, az.rz[g7] = !az.rz[g7], az.x6(), b3.d1 = !0)), !0)
	}, this.sX = function(g7, g8) {
		this.a2e && this.g6(g7, g8, this.a3T ? 1 : 2)
	}, this.a2n = function() {
		this.a3U && (b7.cv.ry(), this.a3U = !1), this.a3U = !1, this.a2e = !1
	}, this.gC = function() {
		gD.imageSmoothingEnabled = !0;
		for (var ja = (aK.g3 - this.g3) / 2, jb = (aK.g9 - this.g9 - this.a3S) / 2, qP = (gD.setTransform(1, 0, 0, 1, ja, jb), gD.fillStyle = aZ.kY, gD.fillRect(0, this.a3S, this.g3, this.g9), gD.fillStyle = aZ.ko, gD.fillRect(0, 0, this.g3, this
					.a3S), gD.fillStyle = aZ.gE, gD.lineWidth = b0.ud, gD.strokeStyle = aZ.gE, gD.strokeRect(-1, -1, this.g3 + 2, this.g9 + this.a3S + 2), gD.fillRect(0, this.a3S - b0.ud, this.g3, b0.ud), gD.font = aY.fy.fz(1, .44 * this
				.a3S), aY.fy.textAlign(gD, 1), aY.fy.textBaseline(gD, 1), gD.fillText("Select Your Emojis!", Math.floor((this.g3 - .725 * this.a3S) / 2), Math.floor(.55 * this.a3S)), Math.floor(this.g3 / this.wm)), zoom = (qP - 2 * this.eg *
				qP) / az.g3, eD = az.wq - 1; 0 <= eD; eD--) gD.setTransform(1, 0, 0, 1, Math.floor(ja + eD % this.wm * qP), Math.floor(jb + this.a3S + eR(eD, this.wm) * qP)), az.rz[eD] && (gD.fillStyle = aZ.kq, gD.fillRect(0, 0, qP, qP)), gD
			.setTransform(zoom, 0, 0, zoom, Math.floor(ja + eD % this.wm * qP + this.eg * qP), Math.floor(jb + this.a3S + eR(eD, this.wm) * qP + this.eg * qP)), gD.drawImage(az.uq[eD], 0, 0);
		j.vX(Math.floor(ja + this.g3 - .725 * this.a3S), Math.floor(jb + .275 * this.a3S), Math.floor(.45 * this.a3S)), gD.setTransform(1, 0, 0, 1, 0, 0), gD.imageSmoothingEnabled = !1
	}
}

function bk() {
	var input, color;
	this.sv = !1, this.t4 = !1, this.cq = function() {
		color = aZ.kY, (input = document.createElement("INPUT")).setAttribute("type", "text"), input.setAttribute("name", "username"), input.setAttribute("id", "usernameField"), input.setAttribute("autocomplete", "username"), input.value = "",
			input.style.textAlign = "center", input.style.backgroundColor = color, input.style.borderRadius = "0", input.style.color = aZ.gE, input.style.position = "absolute", input.readOnly = !1, input.addEventListener("input", function() {
				a0.a3V()
			}), input.addEventListener("focus", function() {
				y.t4 = !0
			}), input.addEventListener("blur", function() {
				y.t4 = !1
			})
	}, this.resize = function() {
		var fontSize, a29, va;
		this.sv && (a29 = .3 * (fontSize = .22 * v.g9 / aK.nE), va = b0.ud / aK.nE, input.style.border = va.toFixed(2) + "px solid " + aZ.gE, input.style.font = aY.fy.fz(1, fontSize), input.style.padding = a29.toFixed(2) + "px", input.style
			.left = (((aK.g3 - v.g3) / aK.nE - va) / 2).toFixed(2) + "px", input.style.width = (v.g3 / aK.nE).toFixed(2) + "px", input.style.top = ((v.fJ - .52 * v.g9) / aK.nE).toFixed(2) + "px")
	}, this.get = function() {
		return input
	}, this.gA = function(gA) {
		this.sv !== gA && ((this.sv = gA) ? (this.resize(), document.body.appendChild(input), at.dI.showCMPButton()) : (this.t4 = !1, document.body.removeChild(input), at.dI.hideCMPButton()))
	}, this.t6 = function(a3W) {
		a3W && color === aZ.kY || !a3W && color === aZ.l1 || (color = a3W ? aZ.kY : aZ.l1, input.style.backgroundColor = color)
	}
}

function c8() {
	var mH, a3Z, a3a, a3b;
	this.a3X = 0, this.a3Y = 0, this.cq = function() {
		var gM, kF;
		7 === x.rp() && (mH = ae.mH, a3Z = 0, a3a = b3.dY + 4500, a3b = aN.wE.a3c() ? 2 : 0, x.setState(10), gD.imageSmoothingEnabled = !0, x.qG(), gM = a1.ur("loading"), kF = 1, kF = (b7.cv.ft() ? .396 : .25) * aK.fu / gM.width, gD.setTransform(
			kF, 0, 0, kF, Math.floor((aK.g3 - kF * gM.width) / 2), Math.floor((aK.g9 - kF * gM.height) / 2)), gD.drawImage(gM, 0, 0), gD.setTransform(1, 0, 0, 1, 0, 0))
	}, this.j2 = function() {
		0 < a3b && b3.dY > a3a && (a3b--, a3a += 4500, 0 === b3.a3d) && 0 === b3.iJ() && (0 === a3b && aN.iv.sE < aN.iv.a3e && (aN.iv.sE += aN.iv.a3f), aN.iv.zO(aN.iv.sE, 5))
	}, this.a3g = function() {
		var eg, eD;
		return 10 === x.rp() && (eg = ae.mH, eD = ae.fx, aN.wE.a3h(mH), mH = null, ae.cq(eg), ae.fx = eD, !0)
	}, this.a3i = function() {
		10 === x.rp() && 2 <= ++a3Z && (aN.wE.a3h(mH), mH = null)
	}
}

function c5() {
	var a3k, a3l, a3m, a3n, a3o, a3p, a3q, n6, a3s, a3u, a3v, a3w, a3z, a40, a41, a42, a43, a3r = 48,
		a3x = ["Joined", "Skipped", "Multiplayer", "Singleplayer"],
		a3y = [0, 0, 0, 0];

	function a48(eD, uq) {
		var eD = a3q[eD].getContext("2d", {
				alpha: !0
			}),
			zoom = (eD.clearRect(0, 0, a3r, a3r), a3r / uq.width),
			dZ = a3r / uq.height,
			zoom = dZ < zoom ? dZ : zoom;
		eD.imageSmoothingEnabled = !0, eD.setTransform(zoom, 0, 0, zoom, Math.floor((a3r - zoom * uq.width) / 2), Math.floor((a3r - zoom * uq.height) / 2)), eD.drawImage(uq, 0, 0), eD.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a4C(iK, gP, a4F, gN) {
		gN.beginPath(), gN.moveTo(iK, iK), gN.lineTo(iK + Math.cos(a4F) * gP, iK + Math.cos(a4F + 1.5 * Math.PI) * gP), gN.stroke()
	}

	function a4T() {
		if (7 === x.rp()) {
			for (var gZ, uq, gN, zoom, dZ, hY = -1, eD = n6.length - 1; 0 <= eD; eD--)
				if (null === n6[eD].gM) {
					hY = eD;
					break
				} - 1 !== hY && (null !== (gZ = a4J(n6[hY].a4N, n6[hY].a4O)) ? n6[hY].gM = gZ : (gZ = {
					e8: ap.e8,
					e9: ap.e9,
					pB: ap.pB,
					p7: ap.p7,
					p8: ap.p8,
					pC: ap.pC,
					pZ: ap.pZ,
					a4K: ap.a4K
				}, ap.d2(n6[hY].a4N, n6[hY].a4O), ap.pA.a4U(), (uq = document.createElement("canvas")).width = 128, uq.height = 128, gN = uq.getContext("2d", {
					alpha: !1
				}), (zoom = 128 / ap.e8) < (dZ = 128 / ap.e9) && (zoom = dZ), gN.imageSmoothingEnabled = !0, gN.setTransform(zoom, 0, 0, zoom, (128 - zoom * ap.e8) / 2, (128 - zoom * ap.e9) / 2), gN.drawImage(ap.pB, 0, 0), ap.e8 = gZ.e8, ap
				.e9 = gZ.e9, ap.pB = gZ.pB, ap.p7 = gZ.p7, ap.p8 = gZ.p8, ap.pC = gZ.pC, ap.pZ = gZ.pZ, ap.a4K = gZ.a4K, n6[hY].gM = uq), b3.d1 = !0)
		}
	}

	function a4J(a4N, a4O) {
		for (var eD = n6.length - 1; 0 <= eD; eD--)
			if (null !== n6[eD].gM && n6[eD].a4N === a4N && n6[eD].a4O === a4O) return n6[eD].gM;
		return null
	}
	this.cq = function() {
		var eD;
		for (a43 = 0, a3u = -1, x.setState(7), n6 = [], this.resize(), a3q = new Array(13), eD = a3q.length; 0 <= eD; eD--) a3q[eD] = document.createElement("canvas"), a3q[eD].width = a3r, a3q[eD].height = a3r;
		for (eD = 0; eD < 7; eD++) ! function(wM) {
			var a4A, gN = a3q[wM - 2].getContext("2d", {
					alpha: !0
				}),
				a49 = 1.5 * Math.PI,
				iK = Math.floor(.5 * a3r),
				gP = Math.floor(.48 * a3r);
			gN.lineWidth = 2, gN.strokeStyle = aZ.gE, gN.clearRect(0, 0, a3r, a3r);
			for (var eD = 0; eD < wM; eD++) a4A = a49 + 2 * Math.PI / wM,
				function(eD, iK, gP, a49, a4A, gN) {
					gN.fillStyle = b4.a4E[eD], gN.beginPath(), gN.arc(iK, iK, gP, a49, a4A), gN.lineTo(iK, iK), gN.fill()
				}(eD + 1, iK, gP, a49, a4A, gN), 0 !== eD && a4C(iK, gP, a49, gN), a49 = a4A;
			a4C(iK, gP, 1.5 * Math.PI, gN),
				function(iK, gP, gN) {
					gN.beginPath(), gN.arc(iK, iK, gP, 0, 2 * Math.PI), gN.stroke()
				}(iK, gP, gN)
		}(eD + 2);
		a48(7, a1.get(4)), a48(8, az.uq[27]), a48(9, az.uq[46]), a48(10, az.uq[36]), a48(11, a1.get(19)), a48(12, a1.get(20)), b3.d1 = !0
	}, this.a3K = function() {
		this.sK(), aN.iv.sL(3240), a0.cq(), b3.d1 = !0
	}, this.sK = function() {
		n6 = [], a3q = [], b8.a45.a46()
	}, this.wl = function() {
		return a3w
	}, this.resize = function() {
		var a4G, oy, yY, a4H;
		for (a3m = [0, 0], a3s = [0, 0, 0, 0], a42 = b7.cv.ft() ? (a3v = Math.floor(.8 * .4 * aK.fu), a3w = Math.floor(.56 * a3v), a3s[0] = b0.gap, aK.g3 < aK.g9 ? (a3s[1] = a3w + 2 * b0.gap, a3s[2] = aK.g3 - 3 * a3s[0], a3s[3] = aw.gB() - 3 * b0
				.gap - a3w, a40 = Math.floor(.95 * a3w), a41 = Math.floor((aK.g3 - a3v - b0.gap) / 2), Math.floor(b0.gap + a3w / 2)) : (a3s[1] = b0.gap, a3s[2] = aK.g3 - 3 * b0.gap - a3v, a3s[3] = aw.gB() - 2 * b0.gap, a40 = Math.floor(.8 *
				a3v), a3s[3] - a3w < a3v && (a40 = Math.floor(.8 * (a3s[3] - a3w)), a40 = vy(a3w, a40)), a41 = Math.floor(aK.g3 - a3v / 2 - b0.gap), vy(a42 = Math.floor(b0.gap + a3w + (a3s[3] - a3w) / 2), Math.floor(a3w + 2 * b0.gap +
				a40 / 2)))) : (a3v = Math.floor(.2016 * aK.fu), a3w = Math.floor(.56 * a3v), a3s[2] = Math.floor(.5 * aK.g3), a3s[3] = Math.floor(.5 * aK.g9), a3s[1] = Math.floor(.45 * (aK.g9 - a3s[3])), a3s[0] = Math.floor((aK.g3 - a3s[2]) / 2),
				a40 = Math.floor(.75 * a3w), a41 = Math.floor(aK.g3 / 2), Math.floor(a3s[1] + a3s[3] + (aK.g9 - a3s[3] - a3s[1]) / 2)), a3z = aY.fy.fz(1, .65 * a3w / 4), a4G = oy = 1; a4G * oy < n6.length;) a3s[3] / (oy + 1) < a3s[2] / (a4G +
			1) ? a4G++ : oy++;
		yY = (a3s[2] - (a4G - 1) * b0.gap) / a4G, a4H = (a3s[3] - (oy - 1) * b0.gap) / oy, a3k = yY < a4H ? yY : a4H, a3l = Math.floor(a3k), a3p = aY.fy.fz(1, .5 * a3k / 5), a3m[0] = a4G, a3m[1] = oy, a3n = a3s[0] + Math.floor((a3s[2] - a3m[0] *
			a3k - (a3m[0] - 1) * b0.gap) / 2), a3o = a3s[1] + Math.floor((a3s[3] - a3m[1] * a3k - (a3m[1] - 1) * b0.gap) / 2)
	}, this.nb = function(a4I, eg) {
		var eD, dZ, gM, eZ = n6.length;
		for (a3y = a4I, eD = 0; eD < eg.length; eD++) gM = a4J(eg[eD].pZ, eg[eD].a4K), n6.push({
			a4L: eg[eD].id,
			uM: eg[eD].uM,
			uN: eg[eD].a4M,
			a4N: eg[eD].pZ,
			a4O: eg[eD].a4K,
			joined: eg[eD].a4P,
			wi: eg[eD].a3B,
			a4Q: eg[eD].a4Q,
			gM: gM,
			a4R: eg[eD].a4R,
			rb: eg[eD].rb
		});
		for (eD = eZ - 1; 0 <= eD; eD--) n6.shift();
		if (-1 !== a3u)
			for (dZ = a3u, a3u = -1, eD = n6.length - 1; 0 <= eD; eD--)
				if (n6[eD].a4L === dZ) {
					a3u = dZ;
					break
				}(n6.length > a43 || n6.length < a43) && (a43 = n6.length, this.resize()), this.a4S(), b3.d1 = !0
	}, this.a4S = function() {
		for (var eD = n6.length - 1; 0 <= eD; eD--) null === n6[eD].gM && setTimeout(a4T, 0)
	}, this.g6 = function(fI, fJ) {
		return 4 * ((fI - a41) * (fI - a41) + (fJ - a42) * (fJ - a42)) <= a40 * a40 ? (this.a3K(), v.sX(fI, fJ, !1), !0) : function(fI, fJ) {
			var hY, hh, ja, jb;
			if (0 !== n6.length) {
				var eD = 0;
				for (jb = a3o, hh = 0; hh < a3m[1]; hh++) {
					for (ja = a3n, hY = 0; hY < a3m[0]; hY++) {
						if (ja < fI && fI < ja + a3k && jb < fJ && fJ < jb + a3k) return !!aN.a4W.a4X(n6[eD].a4L) && (a3u = n6[eD].a4L !== a3u ? n6[eD].a4L : -1, b3.d1 = !0);
						if (++eD >= n6.length) return !1;
						ja += a3k + b0.gap
					}
					jb += a3k + b0.gap
				}
			}
			return !1
		}(fI, fJ)
	}, this.gC = function() {
		var hY, hh, fI, gP, zoom, eD = 0,
			fJ = a3o;
		if (gD.imageSmoothingEnabled = !0, gD.lineWidth = 3, gP = Math.floor(.5 * a40), gD.fillStyle = aZ.kW, gD.beginPath(), gD.arc(a41, a42, gP, 0, 2 * Math.PI), gD.fill(), gD.strokeStyle = aZ.gE, gD.beginPath(), gD.arc(a41, a42, gP, 0, 2 *
				Math.PI), gD.stroke(), gP = a1.get(0).height, zoom = .6 * a40 / gP, gD.setTransform(zoom, 0, 0, zoom, Math.floor(a41 - .56 * zoom * a1.get(0).width), Math.floor(a42 - .5 * zoom * gP)), gD.drawImage(a1.get(0), 0, 0), gD
			.setTransform(1, 0, 0, 1, 0, 0),
			function() {
				gD.fillStyle = aZ.kW, gD.fillRect(aK.g3 - a3v - b0.gap, b0.gap, a3v, a3w), 0 <= a3u ? (gD.fillStyle = aZ.kq, gD.fillRect(aK.g3 - a3v - b0.gap, b0.gap, a3v, Math.floor(.25 * a3w))) : (gD.fillStyle = aZ.lF, gD.fillRect(aK.g3 - a3v -
					b0.gap, b0.gap + Math.floor(.25 * a3w), a3v, Math.floor(.25 * a3w)));
				gD.strokeStyle = aZ.gE, gD.strokeRect(aK.g3 - a3v - b0.gap, b0.gap, a3v, a3w), gD.fillStyle = aZ.gE, gD.font = a3z, aY.fy.textBaseline(gD, 1);
				for (var fJ, a29 = Math.floor(.04 * a3v), va = Math.floor(.08 * a3w), eD = 3; 0 <= eD; eD--) fJ = Math.floor(b0.gap + (eD + 1) * (a3w + 2 * va) / 5 - va), aY.fy.textAlign(gD, 0), gD.fillText(a3x[eD], aK.g3 - a3v - b0.gap + a29,
					fJ), aY.fy.textAlign(gD, 2), gD.fillText(aY.ji.jj(a3y[eD]), aK.g3 - b0.gap - a29, fJ)
			}(), 0 !== n6.length)
			for (hh = 0; hh < a3m[1]; hh++) {
				for (fI = a3n, hY = 0; hY < a3m[0]; hY++) {
					if (! function(eD, fI, fJ) {
							var zoom, hh, a4b, a4d, a4e;
							null === n6[eD].gM ? (gD.fillStyle = aZ.kW, gD.fillRect(fI, fJ, a3l, a3l)) : (zoom = a3l / 128, gD.setTransform(zoom, 0, 0, zoom, fI, fJ), gD.drawImage(n6[eD].gM, 0, 0), gD.setTransform(1, 0, 0, 1, 0, 0));
							a3u === n6[eD].a4L ? (function(fI, fJ) {
								var qP = Math.floor(.2 * a3l),
									qQ = Math.floor(.3 * qP);
								gD.fillStyle = aZ.kt, gD.fillRect(fI + a3l - qP, fJ, qP, qP), gD.fillStyle = aZ.jg, gD.fillRect(fI + a3l - qP, fJ, 2, qP), gD.fillRect(fI + a3l - qP, fJ + qP - 2, qP, 2), j.vX(fI + a3l - qP + qQ, fJ + qQ,
									qP - 2 * qQ), gD.setTransform(1, 0, 0, 1, 0, 0)
							}(fI, fJ), gD.lineWidth = 3, gD.fillStyle = aZ.kt) : gD.fillStyle = aZ.kU;
							if (a4d = Math.floor(a3k / 4), gD.fillRect(fI, fJ, a4d, a4d), a4e = Math.floor(fJ + .8 * a3k), gD.fillRect(fI, a4e, a3l, Math.floor(a3k / 5)), function(eD, fI, fJ) {
									var zoom;
									n6[eD].uN && (eD = a1.get(4), zoom = .5 * a3k / eD.width, gD.setTransform(zoom, 0, 0, zoom, Math.floor(fI + (a3k - zoom * eD.width) / 2), Math.floor(fJ + (a3k - zoom * eD.height) / 2)), gD.globalAlpha = .6, gD
										.drawImage(eD, 0, 0), gD.globalAlpha = 1, gD.setTransform(1, 0, 0, 1, 0, 0))
								}(eD, fI, fJ), n6[eD].a4R) {
								for (hh = a4b = 0; hh < n6[eD].a4R; hh++) a4b = Math.max(a4b, n.measureText(n6[eD].rb[hh], a3p));
								a4b += .05 * a3k, hh = 5 === n6[eD].a4R, a4d = hh ? fJ + a4d : Math.max(fJ + .8 * a3k - .11 * n6[eD].a4R * a3k, fJ + a4d), a4e = hh ? a4e : Math.min(a4d + .11 * n6[eD].a4R * a3k + .05 * a3k, a4e), gD.fillRect(fI,
									a4d, a4b, a4e - a4d)
							}
							for (gD.font = a3p, aY.fy.textBaseline(gD, 1), aY.fy.textAlign(gD, 0), gD.fillStyle = aZ.lA, gD.fillText(n6[eD].joined.toString(), Math.floor(fI + .22 * a3k), Math.floor(fJ + .9 * a3k)), gD.fillStyle = aZ.gE, hh =
								0; hh < n6[eD].a4R; hh++) gD.fillText(n6[eD].rb[n6[eD].a4R - hh - 1], Math.floor(fI + .03 * a3k), Math.floor(fJ + .77 * a3k - .11 * hh * a3k));
							aY.fy.textAlign(gD, 2), gD.fillStyle = aZ.kx, gD.fillText(n6[eD].wi.toString(), Math.floor(fI + .81 * a3k), Math.floor(fJ + .9 * a3k)), gD.strokeStyle = a3u === n6[eD].a4L ? aZ.kr : aZ.kc, gD.strokeRect(fI, fJ, a3l,
								a3l), a4e = Math.floor(.16 * a3k), zoom = a4e / a3r, gD.setTransform(zoom, 0, 0, zoom, Math.floor(fI + .33 * a4e), Math.floor(fJ + .33 * a4e)), a3q.length > n6[eD].uM && gD.drawImage(a3q[n6[eD].uM], 0, 0);
							gD.setTransform(zoom, 0, 0, zoom, Math.floor(fI + .15 * a4e), Math.floor(fJ + a3k - 1.08 * a4e)), gD.drawImage(a3q[11], 0, 0), gD.setTransform(zoom, 0, 0, zoom, Math.floor(fI + a3k - 1.05 * a4e), Math.floor(fJ + a3k -
								1.15 * a4e)), gD.drawImage(a3q[12], 0, 0), gD.setTransform(1, 0, 0, 1, 0, 0)
						}(eD, Math.floor(fI), Math.floor(fJ)), ++eD >= n6.length) return;
					fI += a3k + b0.gap
				}
				fJ += a3k + b0.gap
			}
	}
}

function bl() {
	var a4h = [0, 0, 0, 0];

	function a2B(fI, fJ, gG, a4z) {
		gD.fillStyle = aZ.gE;
		var qP = vy(2, Math.floor((a4z ? .5 : .35) * gG)),
			xB = (qP -= qP % 2, vy(2, Math.floor(.1 * gG))),
			gG = (xB -= xB % 2, Math.floor((gG - qP) / 2)),
			jc = Math.floor(gG + (qP - xB) / 2);
		gD.fillRect(fI + gG, fJ + jc, qP, xB), a4z && gD.fillRect(fI + jc, fJ + gG, xB, qP)
	}

	function a3A(fI, fJ, g3, g9, ut, fr, nZ, hS, wM) {
		gD.fillStyle = ut, gD.fillRect(fI, fJ, g3, g9), 0 <= hS && function(fI, fJ, g3, g9, hS) {
			gD.fillStyle = "rgba(" + 22 * hS + "," + (110 - 22 * hS) + ",0,0.75)", gD.fillRect(fI, fJ, (1 + hS) * g3 / 6, g9)
		}(fI, fJ, g3, g9, hS), 0 < wM && function(fI, fJ, g3, g9, wM) {
			gD.fillStyle = "rgba(255,255,255,0.3)", gD.fillRect(fI, fJ, wM * g3 / ed, g9)
		}(fI, fJ, g3, g9, wM), gD.strokeStyle = aZ.gE, gD.strokeRect(fI, fJ, g3, g9), 0 !== fr && (gD.fillStyle = aZ.gE, gD.font = aY.fy.fz(1, fr * g9), gD.fillText(nZ, Math.floor(fI + g3 / 2), Math.floor(fJ + .52 * g9)))
	}
	this.im = [{
		ei: 0,
		wM: 512
	}], this.cq = function() {
		aH.sv = !1, x.setState(2), this.resize(), b3.d1 = !0
	}, this.sK = function() {}, this.resize = function() {
		a4h[2] = Math.floor((b7.cv.ft() ? .49 : .4) * aK.fu), a4h[1] = Math.floor((aK.g9 - a4h[2] / 6 - this.im.length * (b0.gap + a4h[2] / 10)) / 2), a4h[0] = Math.floor((aK.g3 - a4h[2]) / 2), aH.sv && aH.resize()
	}, this.a4i = function(uM) {
		var eD;
		if (6 < uM) this.im = [{
			ei: 0,
			wM: 512
		}];
		else {
			for (this.im = [], eD = 0; eD < uM + 2; eD++) this.im.push({
				ei: 0,
				wM: 0
			});
			this.a4j()
		}
	}, this.a4k = function(a4l, a4m) {
		for (var eZ = a4l.length, eD = 0; eD < eZ; eD++) this.im[eD].ei = a4l[eD], this.im[eD].wM = a4m[eD]
	}, this.a4n = function(tb) {
		var eD, eZ;
		if (1 === tb.qT.length)
			for (eZ = this.im.length, tb.a4l = new Array(eZ), tb.a4m = new Array(eZ), eD = 0; eD < eZ; eD++) tb.a4l[eD] = this.im[eD].ei, tb.a4m[eD] = this.im[eD].wM
	}, this.a3L = function() {
		b3.d1 = !0, aH.sv ? aH.sv = !1 : (this.sK(), a0.cq())
	}, this.uQ = function() {
		var eD, wM;
		if (aU.ig) return aU.ih.a4o;
		for (wM = 0, eD = this.im.length - 1; 0 <= eD; eD--) wM += this.im[eD].wM;
		return wM
	}, this.sX = function(fI, fJ) {
		return !(!aH.sv || !aH.sX(fI, fJ)) || -1 !== this.t3(fI, fJ)
	}, this.a4p = function() {
		aN.iv.sE = 0, aN.iv.zO(0, 3) && aN.lX.a4q(0)
	}, this.a4r = function() {
		var hY;
		this.a4p(), x.a3G(), aU.ig ? aU.a4s() : (hY = (hY = this.im.length - 2) < 0 ? 7 : hY, uJ(Math.floor(16384 * Math.random()), 0, [{
			name: b9.dG.data[100].value,
			a4t: a8.vZ[2].rB.a2l(),
			a4u: 0
		}], hY, !1, !1))
	}, this.g6 = function(fI, fJ) {
		if (b6.sv || a8.vZ[1].rB.sv || a8.vZ[2].rB.sv) return !1;
		if (aH.sv && !aU.ig) return aH.g6(fI, fJ);
		var eD, hY, max, qP, fJ = this.t3(fI, fJ);
		if (-1 === fJ) return !1;
		if (0 === fJ) this.a3L();
		else if (1 === fJ) aU.ig ? (aU.sx(), b3.d1 = !0) : aH.show();
		else if (100 === fJ) aT.a4v();
		else if (2 === fJ) this.sK(), this.a4r();
		else {
			if (aU.ig) return !1;
			if (27 === fJ) this.im.length < 8 && (this.im.push({
				ei: 0,
				wM: ed
			}), this.a4j(), this.resize(), b3.d1 = !0);
			else if (eD = Math.floor((fJ - 3) / 3), fJ % 3 == 0) 1 < this.im.length && (this.im.splice(eD, 1), this.resize(), b3.d1 = !0);
			else if (qP = (a4h[2] - a4h[2] / 10 - 2 * b0.gap) / 2, fJ % 3 == 1) 0 === eD && 1 === this.im[eD].wM || (fI < a4h[0] + a4h[2] - 1.5 * qP - b0.gap ? this.im[eD].ei-- : this.im[eD].ei++, this.im[eD].ei < 0 ? this.im[eD].ei = 5 : 5 <
				this.im[eD].ei && (this.im[eD].ei = 0), b3.d1 = !0);
			else {
				for (b3.d1 = !0, fJ = (fI - (a4h[0] + a4h[2] - qP)) / qP - .5, fJ *= fJ < 0 ? -fJ : fJ, fJ = 0 === (fJ = Math.floor(fJ * ed)) ? 1 : fJ, max = ed, hY = this.im.length - 1; 0 <= hY; hY--) eD !== hY && (max -= this.im[hY].wM);
				if (fJ < 0) {
					if (1 === this.im[eD].wM) return this.im[eD].wM = max, !0
				} else if (this.im[eD].wM === max) return this.im[eD].wM = 1, !0;
				this.im[eD].wM += fJ, this.im[eD].wM < 1 ? this.im[eD].wM = 1 : this.im[eD].wM > max && (this.im[eD].wM = max)
			}
		}
		return !0
	}, this.a4j = function() {
		for (var wM = Math.floor(ed / this.im.length), a4w = ed % this.im.length, eD = this.im.length - 1; 0 <= eD; eD--) this.im[eD].wM = wM;
		this.im[0].wM += a4w
	}, this.t3 = function(fI, fJ) {
		var qP = (a4h[2] - 3 * b0.gap) / 4,
			xB = a4h[2] / 6;
		if (fI < a4h[0] || fJ < a4h[1] || a4h[0] + a4h[2] <= fI) return -1;
		if (fJ < a4h[1] + xB) return fI < a4h[0] + qP ? 0 : fI < a4h[0] + qP + b0.gap ? -1 : fI < a4h[0] + 2 * qP + b0.gap ? 100 : fI < a4h[0] + 2 * (qP + b0.gap) ? -1 : fI < a4h[0] + 3 * qP + 2 * b0.gap ? 1 : fI < a4h[0] + 3 * (qP + b0.gap) ? -
			1 : 2;
		for (var jb, a4x = a4h[2] / 10, qP = (a4h[2] - a4x - 2 * b0.gap) / 2, eD = 0; eD < this.im.length; eD++) {
			if (fJ < (jb = a4h[1] + xB + b0.gap + eD * (a4x + b0.gap))) return -1;
			if (!(jb + a4x < fJ)) return fI < a4h[0] + a4x ? 3 + 3 * eD : fI < a4h[0] + a4x + b0.gap ? -1 : fI < a4h[0] + a4h[2] - qP - b0.gap ? 4 + 3 * eD : fI < a4h[0] + a4h[2] - qP ? -1 : 5 + 3 * eD
		}
		return !(this.im.length < 8) || fJ < (jb = a4h[1] + xB + b0.gap + this.im.length * (a4x + b0.gap)) || jb + a4x < fJ || a4h[0] + a4x < fI ? -1 : 27
	}, this.gC = function() {
		gD.lineWidth = b0.ud, aY.fy.textAlign(gD, 1), aY.fy.textBaseline(gD, 1);
		var qP = (a4h[2] - 3 * b0.gap) / 4,
			xB = a4h[2] / 6;
		if (a3A(a4h[0], a4h[1], qP, xB, "rgba(128,0,0,0.75)", .34, "Back", -1, -1), a3A(a4h[0] + qP + b0.gap, a4h[1], qP, xB, "rgba(128,0,128,0.75)", .31, "Custom", -1, -1), a3A(a4h[0] + 2 * (qP + b0.gap), a4h[1], qP, xB, "rgba(" + (aU.ig ? 128 :
				0) + ",128,128,0.75)", .34, aU.ig ? "Reset" : "Maps", -1, -1), a3A(a4h[0] + a4h[2] - qP, a4h[1], qP, xB, "rgba(0,128,0,0.75)", .34, "Start", -1, -1), !aU.ig) {
			for (var jb, a4x = a4h[2] / 10, qP = (a4h[2] - a4x - 2 * b0.gap) / 2, eD = 0; eD < this.im.length; eD++) jb = a4h[1] + xB + b0.gap + eD * (a4x + b0.gap), a3A(a4h[0], jb, a4x, a4x, 1 < this.im.length ? "rgba(128,0,0,0.75)" :
				"rgba(90,90,90,0.75)", 0, null, -1), 1 < this.im.length && a2B(a4h[0], jb, a4x, !1), a3A(a4h[0] + a4x + b0.gap, jb, qP, a4x, aZ.kY, .4, this.a4y(eD), this.im[eD].ei, -1), a3A(a4h[0] + a4h[2] - qP, jb, qP, a4x, aZ.kY, .4, this
				.wD(eD), -1, this.im[eD].wM);
			this.im.length < 8 && (jb = a4h[1] + xB + b0.gap + this.im.length * (a4x + b0.gap), a3A(a4h[0], jb, a4x, a4x, "rgba(0,128,20,0.75)", 0, null, -1, -1), a2B(a4h[0], jb, a4x, !0)), aH.sv && aH.gC()
		}
	}, this.a4y = function(eD) {
		return 0 === eD && 1 === this.im[eD].wM ? "You" : b.iZ[this.im[eD].ei]
	}, this.wD = function(eD) {
		return 1 === this.im[eD].wM ? "1 Player" : this.im[eD].wM + " Players"
	}
}

function cz() {
	this.eZ = 0, this.g3 = 0, this.vZ = null, this.cq = function() {
		this.vZ = [], this.vZ.push({
			fI: 0,
			fJ: 0,
			uo: b7.cv.ft(),
			rB: null
		}), this.vZ.push({
			fI: 0,
			fJ: 0,
			uo: !1,
			rB: new a3R
		}), this.vZ.push({
			fI: 0,
			fJ: 0,
			uo: !1,
			rB: new a2d
		}), this.vZ[2].rB.a2i(), this.eZ = this.vZ.length, this.g3 = 0
	}, this.zW = function() {
		this.g3 = Math.floor((b7.cv.ft() ? .063 : .04) * aK.fu), this.g3 += 4 - this.g3 % 4, this.vZ[0].fI = b0.gap, this.vZ[0].fJ = aK.g9 - this.g3 - b0.gap;
		for (var eD = 1; eD < this.eZ; eD++) this.vZ[eD].fI = this.vZ[eD - 1].fI + Math.floor(b7.cv.ft() ? 1.5 * b0.gap : 3.7 * b0.gap) + this.g3, this.vZ[eD].fJ = this.vZ[0].fJ
	}, this.t3 = function(g7, g8) {
		if (a1.g1())
			for (var eD = this.eZ - 1; 0 <= eD; eD--)
				if (g7 >= this.vZ[eD].fI && g8 >= this.vZ[eD].fJ && g7 < this.vZ[eD].fI + this.g3 && g8 < this.vZ[eD].fJ + this.g3) return eD;
		return -1
	}, this.a52 = function() {
		for (var eD = 2; 1 <= eD; eD--)
			if (this.vZ[eD].rB.sv) return !0;
		return !1
	}, this.resize = function() {
		for (var eD = 2; 1 <= eD; eD--) this.vZ[eD].rB.resize()
	}, this.t9 = function() {
		return this.vZ[1].rB.sv ? (this.vZ[1].rB.g6(-5e3, -5e3, 0), !0) : !!this.vZ[2].rB.sv && (this.vZ[2].rB.g6(-5e3, -5e3), !0)
	}, this.g6 = function(g7, g8, a2K) {
		if (a2K) {
			if (this.vZ[1].rB.sv) return this.vZ[1].rB.g6(g7, g8, 0), !0;
			if (this.vZ[2].rB.sv) return this.vZ[2].rB.g6(g7, g8), !0
		}
		g7 = this.t3(g7, g8);
		if (a2K) {
			if (0 === g7) return this.vZ[g7].uo = !this.vZ[g7].uo, b9.dG.dH(2, this.vZ[g7].uo ? 1 : 0), aK.oZ(0), !0;
			if (1 <= g7 && g7 < 3) return this.vZ[g7].rB.cq(), y.gA(!1), b3.d1 = !0
		}
		return !1
	}, this.sX = function(g7, g8) {
		return this.vZ[1].rB.sv ? (this.vZ[1].rB.sX(g7, g8), !0) : !!this.vZ[2].rB.sv && (this.vZ[2].rB.sX(g7), !0)
	}, this.a2n = function() {
		for (var eD = 2; 1 <= eD; eD--)
			if (this.vZ[eD].rB.sv) return this.vZ[eD].rB.a2n(), !0;
		return !1
	}, this.gC = function() {
		if (a1.g1()) {
			gD.imageSmoothingEnabled = !0;
			for (var eD = this.eZ - 1; 0 <= eD; eD--) gD.fillStyle = this.vZ[eD].uo ? aZ.ks : aZ.kY, gD.fillRect(this.vZ[eD].fI, this.vZ[eD].fJ, this.g3, this.g3), 0 === eD ? this.a53(eD, a1.get(15)) : 1 === eD ? this.a54() : 2 === eD && this
				.a55(), gD.setTransform(1, 0, 0, 1, 0, 0), gD.lineWidth = b0.ud, gD.strokeStyle = aZ.gE, gD.strokeRect(this.vZ[eD].fI, this.vZ[eD].fJ, this.g3, this.g3);
			gD.imageSmoothingEnabled = !1
		}
	}, this.a53 = function(eD, uq) {
		var gap = .08 * this.g3,
			zoom = (this.g3 - 2 * gap) / uq.width;
		gD.setTransform(zoom, 0, 0, zoom, this.vZ[eD].fI + gap, this.vZ[eD].fJ + (this.g3 - zoom * uq.height) / 2), gD.drawImage(uq, 0, 0)
	}, this.a54 = function() {
		var gap = .06 * this.g3,
			zoom = (this.g3 - 2 * gap) / az.g3;
		gD.setTransform(zoom, 0, 0, zoom, this.vZ[1].fI + gap, this.vZ[1].fJ + gap), gD.drawImage(az.uq[4], 0, 0)
	}, this.a55 = function() {
		gD.setTransform(1, 0, 0, 1, this.vZ[2].fI, this.vZ[2].fJ);
		for (var ei = this.g3 / 4, fI = 3; 0 <= fI; fI--)
			for (var fJ = 3; 0 <= fJ; fJ--) {
				var gP = Math.floor(367 * (fI + 1) * (fJ + 1) % 256),
					tb = Math.floor(687 * (fI + 1) * (fJ + 1) % 256),
					hh = Math.floor(651 * (fI + 1) * (fJ + 1) % 256);
				gD.fillStyle = "rgb(" + gP + "," + tb + "," + hh + ")", gD.fillRect(fI * ei, fJ * ei, ei, ei)
			}
	}, this.a3O = function() {
		for (var eD = 2; 1 <= eD; eD--)
			if (this.vZ[eD].rB.sv) return void this.vZ[eD].rB.gC()
	}
}

function bm() {
	var a56;
	this.a57 = "", this.a58 = -7e3, this.cq = function(a59) {
		b7.dc < 5 || (a56 && b3.dY > a56 + 144e5 ? b7.oS.setState(14) : a56 = b3.dY), x.setState(0), v.zW(), y.gA(!0), l.cq(), a8.zW(), a59 && at.dK.show() ? setTimeout(function() {
			0 === x.rp() && b7.cv.setState(12)
		}, 15e3) : b7.cv.setState(12), y.get().value = b9.dG.data[100].value
	}, this.sK = function() {
		b7.cv.setState(13), y.gA(!1)
	}, this.a3V = function() {
		b9.dG.dH(100, ad.oe.oj(y.get().value))
	}, this.g6 = function(fI, fJ) {
		var gap, jb, qP;
		1 === v.t3(fI, fJ, 1, 1) ? (b7.cv.setState(10), a1.g1() || a1.a5B(), this.sK(), z.cq()) : 0 === v.t3(fI, fJ, 0, 1) ? this.a3I() : (qP = Math.floor((b7.cv.ft() ? .145 : .09) * aK.fu), gap = Math.floor(.065 * (b7.cv.ft() ? .53 : .36) * aK
				.fu), gap = aK.g3 - qP - gap, jb = b0.gap, qP = Math.floor(.35 * qP),
			(gap <= fI && fJ < jb + qP && (ar.oY(1), true)) || (fI >= gap - qP / 0.7 && fJ < jb + qP && WindowManager.openWindow("settings"))
		)
	}, this.a3I = function() {
		b7.cv.setState(10), w.a30(b9.dG.data[10].value), a1.g1() || a1.a5B(), this.sK(), aU.sx(), w.cq()
	}, this.a5D = function() {
		return !a8.a52() && !b6.sv && !av.sv
	}, this.gC = function() {
		this.a5D() && (gD.imageSmoothingEnabled = !0, iK = a1.ur("territorial.io"), kF = 1.1 * v.g3 / iK.width, gD.setTransform(kF, 0, 0, kF, Math.floor((aK.g3 - kF * iK.width) / 2), v.fJ - kF * iK.height - .72 * v.g9), gD.drawImage(iK, 0, 0), gD
			.setTransform(1, 0, 0, 1, 0, 0), v.a2X());
		var g3, gP, tb, hh, fw, fontSize, kF = Math.floor((b7.cv.ft() ? .145 : .09) * aK.fu),
			iK = Math.floor(.065 * (b7.cv.ft() ? .53 : .36) * aK.fu),
			ja = aK.g3 - kF - iK,
			jb = b0.gap,
			xB = Math.floor(.35 * kF);
		ja = ja, jb = jb, g3 = kF, xB = xB, tb = gP = 180, hh = 0, fw = aV.nZ[80], fontSize = .65 * xB,
			gD.imageSmoothingEnabled = true,
			gD.drawImage(settingsGearIcon, ja - g3 / 2, jb, xB, xB),
			gD.imageSmoothingEnabled = false,
			(settings.displayWinCounter && (
				gD.font = aY.fy.fz(1, Math.floor(xB * 0.4)),
				gD.fillStyle = "#ffffff",
				gD.fillText("Win count: " + wins_counter, Math.floor(ja + g3 / 2), Math.floor((jb + xB / 2) * 2))
			)),
			gD.font = aY.fy.fz(1, fontSize), gD.fillStyle = "rgba(" + gP + "," + tb + "," + hh + ",0.6)", gD.fillRect(ja, jb, g3, xB), gD.fillStyle = aZ.gE, gD.fillRect(ja, jb, g3, b0.ud), gD.fillRect(ja, jb + xB - b0.ud, g3, b0.ud), gD.fillRect(
				ja, jb, b0.ud, xB), gD.fillRect(ja + g3 - b0.ud, jb, b0.ud, xB), gD.fillText(fw, Math.floor(ja + g3 / 2), Math.floor(jb + xB / 2 + .1 * fontSize))
	}
}

function bn() {
	var a5F, gM, fs, a5G;

	function a5K(fx, name, a5L, fw) {
		fs[fx] = name, gM[fx] = new Image, gM[fx].onload = function() {
			0 < a5L && ! function(fx, a5L) {
				var fI, fJ, eD, iK = document.createElement("canvas"),
					g3 = gM[fx].width,
					g9 = gM[fx].height,
					gN = (iK.width = g3, iK.height = g9, iK.getContext("2d", {
						alpha: !0
					})),
					gJ = (gN.drawImage(gM[fx], 0, 0), gN.getImageData(0, 0, g3, g9)),
					pF = gJ.data;
				if (a5L < 3) {
					var a5O = 2 === a5L ? 160 : 600;
					for (fI = g3 - 1; 0 <= fI; fI--)
						for (fJ = g9 - 1; 0 <= fJ; fJ--) pF[eD = 4 * (fI + fJ * g3)] + pF[eD + 1] + pF[eD + 2] < a5O && (pF[eD + 3] = Math.floor(255 * (pF[eD] + pF[eD + 1] + pF[eD + 2]) / a5O))
				} else if (3 === a5L)
					for (fI = g3 - 1; 0 <= fI; fI--)
						for (fJ = g9 - 1; 0 <= fJ; fJ--) 0 === pF[eD = 4 * (fI + fJ * g3)] && 200 < pF[eD + 1] && 0 === pF[eD + 2] && (pF[eD + 3] = 0);
				else if (4 === a5L) ! function(pF, g3, g9) {
					var fI, fJ, eD;
					for (fI = g3 - 1; 0 <= fI; fI--)
						for (fJ = g9 - 1; 0 <= fJ; fJ--) pF[1 + (eD = 4 * (fI + fJ * g3))] > pF[eD] + 20 && pF[1 + eD] > pF[2 + eD] + 20 && pF[eD] + pF[2] < 40 && (pF[3 + eD] = 255 - pF[1 + eD], pF[eD] = pF[1 + eD] = pF[2 + eD] = pF[eD])
				}(pF, g3, g9);
				else if (5 === a5L) ! function(pF, g3, g9, id) {
					var fI, fJ, eD;
					for (fI = g3 - 1; 0 <= fI; fI--)
						for (fJ = g9 - 1; 0 <= fJ; fJ--) 200 < pF[1 + (eD = 4 * (fI + fJ * g3))] && pF[1 + eD] - 20 > pF[eD] && pF[1 + eD] - 20 > pF[2 + eD] ? pF[eD] + pF[2 + eD] < 40 ? pF[3 + eD] = 0 : (pF[3 + eD] = pF[eD], pF[eD] = 255,
							pF[1 + eD] = 255, pF[2 + eD] = 255) : pF[eD] < 50 && pF[1 + eD] < 50 && pF[2 + eD] < 50 && (pF[eD] + pF[1 + eD] + pF[2 + eD] < 50 ? (pF[1 + eD] = 0 === id ? pF[1 + eD] : 160, pF[3 + eD] = 180) : (pF[1 +
							eD] = 0 === id ? pF[1 + eD] : 160, pF[3 + eD] = 180 + Math.floor(75 * (pF[eD] + pF[1 + eD] + pF[2 + eD] - 50) / 100)))
				}(pF, g3, g9, 0);
				else if (6 === a5L)
					for (fI = g3 - 1; 0 <= fI; fI--)
						for (fJ = g9 - 1; 0 <= fJ; fJ--) pF[(eD = 4 * (fI + fJ * g3)) + 3] = Math.floor(255 * (pF[eD] + pF[eD + 1] + pF[eD + 2]) / 765), pF[eD] = pF[eD + 1] = pF[eD + 2] = 255;
				else if (7 === a5L)
					for (fI = g3 - 1; 0 <= fI; fI--)
						for (fJ = g9 - 1; 0 <= fJ; fJ--) pF[(eD = 4 * (fI + fJ * g3)) + 1] > pF[eD + 2] + 10 && (pF[eD + 3] = pF[eD], pF[eD + 1] = pF[eD + 2]);
				gN.putImageData(gJ, 0, 0), gM[fx] = iK
			}(fx, a5L), a5N()
		}, gM[fx].onerror = function(dE) {
			console.error("Error loading image at index", fx, "Error:", dE), a5N()
		}, gM[fx].src = "data:image/png;base64," + fw
	}

	function a5N() {
		a5F--, a5I()
	}

	function a5I() {
		0 === a5F && (a5F = -1, aw.g0(), i.uk(), az.cq(), au.a2M([gM[8], gM[16], gM[7], gM[9], gM[10]], [2 !== b7.id, 1 !== b7.id, !0, !0, !0]), b3.d1 = !0, gM[7] = a5G, gM[8] = a5G, gM[9] = a5G, gM[10] = a5G)
	}
	this.cq = function() {
		if (void 0 === gM) {
			a5F = 22, gM = new Array(a5F), fs = new Array(a5F), (a5G = document.createElement("canvas")).width = 1, a5G.height = 1;
			for (var eD = a5F - 1; 0 <= eD; eD--) gM[eD] = a5G;
			a5K(0, "exit", 6,
				"iVBORw0KGgoAAAANSUhEUgAAAFYAAABGBAMAAACkrn5fAAAAHlBMVEUAAAAiJCI4OjdcXltoameIioejpqPExsPY29j///9xarZIAAAAyUlEQVRIx+3WQQqCQBTG8TdOB5DUI+S6nRcoPIFhu1bBHGGO4Any3TYxAkWTv1DSYr71D4b5mOE9kWmszkeC/ZptT6Ocl+xj5qgtbVR1iZn9VE2wU2uO2Jryhm2h2OaKbdZgu/NKrXVK7f6q1JpaqTWFYpvrUtqhPTTYpst0aBOv2Drltlxh392iu0U1t5I4biX13PZvF7+zvOFWihXWlNy+aqZ/M3LcivXcds1xK9kKK3GYAVtYe+8CZ/c/7Br9blSNcgn75O/tE26TasUvH0ImAAAAAElFTkSuQmCC"
				), a5K(1, "victory", 6,
				"iVBORw0KGgoAAAANSUhEUgAAAUIAAABBBAMAAABWYLC1AAAAElBMVEUAAAA6PDlbXVqEhoO4urf///8hX3N2AAAEcklEQVRo3s2ZyZKcMAyGWdx3alLcSaW4k8lwZ9LjuwH3+79KlkljLb/czFJp+tYusD8k/ZItF/5y/a0F/dXb+KW472/cQCIbd8b4//+dDFu12/ByZ8Jkq0uHbRvuTFglwomOezx8j5/HxkrgTXEYqSxQyvcWCpVEhOG53p3QQTGfDiMUlppJxPXHEQrVxIT0092fEOaVw9Q8LpV5GysPJGUsWweojyCVCAgPIBQYc8nzwxEIvcYZjyQUmPv8kYQC68dhNoeWmOsD1Tyc/G5L+elvHLzs0tG3l7/PPn6KVJTfGxqpG0+9vXFW2w+ZGaoU0x3YrfwZP3dkrONijUK5ndBOLBAh2Wz8CwybMAESRPX4kDwZuGODMNkkjLoiwtLTyac8IXs2NpbJO2E0YVInhSH/c8LxolY1CVs+tFiEi2TqGW8lZqikTRlhLSYPGcIK2Ao/3gi/ilwiErQz4nIAJnx9xyJsga3w4xN3s6EbTVhowhJNbhCWyFaYcOVUvShpLZ+glfmREurZZ5MQ2wqOx/Q9k3YyeWNgJp0B4YgmNwh7aCv8eJp61U4mwT+xsJwA4Zarv37xm+ENQr89+/BCAwc93qXhRjmZpJeZ/Rs0YU1scU2MU1FkM/tKbT8kwt8+LB+8TtrT9dMCqHsrsyhYmdnfiYkEoaPBXRG/sPd8eunqZqfPmS1MHRGsfGLF5nX2Z4OwZWm6T15ihK3+/D7XBKFFcAErjzKVx3NTGIT8WZe+jRGSl0pdC7RUBqJW5D3P7O/iI9itDzx2Gla5oiAs6YwjKEBSKhOQMiDMnicGNmkUwc6V8sPTmHeyWAGpBELbgJWzx5c3Emqc0nIyya1Lqvax+BhhKfoE4/bdgHDR+6YOn6Zien0FK5fZpiInrITeRpWaL6qr5SwnUzGftJXTytUbCGszIzhjR8HcHKzTVNfqU9SHCGeRdAdjB1vgE4mWyuR1Q0QRLm8gDHsI9SErmg334HVD5EOE8w4vP2tnBrPxsICPeJ9SjDgESnkGpurMxkMEnUOVbT5Xy2cAEnN3U7rd8Kn5EGRscJOz5LqIunNoElbx+0eq3hev17IJRyNDwbpMGjwv3V5CsHOotRFtwhYWSmvn0BB9nfftbUq0txlV3rAJHTry6JVR+yG+f3/oVNDbhKiVYO+xWftkNQhPbLEW7bEr5WabsLClDM4p7Og/7zmnlPic4mVMZQj9xdzgkpUrmmTfctbr4VlvC/9hB2FvCoWtnM7A31SukJ1Qcl5+Audl2pMKOwidKRS2cm81WwHhmO85BOL8dQdhLZsxmNDhRSHhjb5NoF+xg7AwhcJX9nZ5lIRFvvcV6JZl2kHojZonVm7t4tMbG0ujfxio6+YdhD2MLbVyZZd9RVjhYo+6InEH4ck8q/KVezMt9daeA/exWc/h6oocoTP2Q/m7gKXIEZa5u4DAlp1uE5aWUHL3KbHIEvL7FFFsAouE+TYhlcqQIyR3UrG5QZi7kwoFCMT6k648n17v6n7uv9eL5/et9Asv0oTxJYkUxgAAAABJRU5ErkJggg=="
				), a5K(2, "defeat", 6,
				"iVBORw0KGgoAAAANSUhEUgAAARMAAABABAMAAADL6o5mAAAAHlBMVEUAAAAlJyU7PTtUVlNsbmuJi4ijpaLCxMHX2db///+Cup+UAAACo0lEQVRo3s3ZsW7bMBAAUNqyZWUzsnT1VECbhy7ZvHTwlqmAN6PoUG0CggzairpIyi1Nk1b629awTPGOpHm0DyE1WYJEPlHk3UkW6w5t7eMXEWczKHvN52QoXfcjHUoUi4PSbdOhtItkKBEekZPSLdOh7NKhtOlQ3nwRnaC8pENp06F0t+lQvsWi/O/4+uPXiJNljcbgvUb5G5ci3mmWeVyKqGLNW5MyGyh1ZMo41hIyKaJRh573u9JY5HDo1LMsjBOfBLq9/oC0Rg4L5UYdeuWi5HqDAZShyT9clAKGBzJlBgMLB0UN9CKMksOEyEFpYOFBpkxBpywU1AmZkrFThpv7HUYZwcjPQEGzj04RsOpnoJRwnGNScFo7h7JS16HqcmbJDIUzW0hrWstQVfQWlMkhXg655BzKkoVyOPn7EMDjUa4Os0SidsIoCxbK5tBWhV7FCZSRJ8RtT1M6mE2PYb/tE1EdQsnoFNCpizLudwqYDCiUqScdhlLyfunkeslCo+TMlKJvPkNvNASKr14JpayPV0mtZKFRfFVcKKU5Cir4rYRAWXtq21CKetY31uVxiiI9FX8gZap+F7BrP2WC3oMupRSqZprBeeunlCiNXkopVesTrWShUDJpLS7sgd9GwYG/cn1B8lFGVWctuc7PQcao1hTK9YdP0hjgCykTo1579lLM7RcHxSg9VZYMoWw5KFfOL58BlHbOQdmYDa+CKeC1/2yKpbqvgyk1B2VsafgplNI6b6smVnH7wJq7h5tO2bFQCvdNkintkoVibX8RRtkJFkoDUmCpRwkqpZ3zUMDsgDObStkKFspUj9tqEr+EUO4EDwUt8Ez/ykKj3AkmSonGWGopn0J5WAkuSoX+KG60ksVL+Xm/8kXuAAoO1RvtOkT5B9F51EylDpRdAAAAAElFTkSuQmCC"
				), a5K(3, "orders", 6,
				"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"
				), a5K(4, "crown", 4,
				"iVBORw0KGgoAAAANSUhEUgAAANIAAADSCAIAAACw+wkVAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0xMi0yM1QxNDowNDo0NyswMzozMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1ZmFkNDE3NC03OWNiLTUwNDgtYWIyMi04NThmMGExODUzZTEiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4ZDQ1NTIyYS02MDRlLWYxNDUtYWM3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"
				), a5K(5, "arena", 6,
				"iVBORw0KGgoAAAANSUhEUgAAAQAAAABABAMAAAAHc7SNAAAAHlBMVEUAAAAjJSM7PTpUVlNqbWqHiYalp6S/wr7W2NX////RSpP4AAAD9klEQVRo3sWZvW+bQBiHiSGAt6hdki1Dh7Jl9eapkjdPrbxV6lCxeaw3okqpbqNuzMd/2yRw3PvJkQVYYhHgnvfer9/dBQG4WnftgwWuawBwXAIgBQB/lwDIAEC1BEAOAJolAAwAaB/mHz+C4y8RhQkCKOcHuEMAl/kBDgigWTgG2/Z+7vFDPH77fW6AmAAUSxbi1+t5boAdAajnBjgRgHbm8a/o+HNLgiEGfy0UhUMMfrU/zvMCbOy4HxeSBKehBJtlirGze9AlW1GqtM2fH0rp6HroCTWzNcnpTMmxa+f5HZcEORnnyQ9gewkFyJUcS1zsp1wSUID2tx/gKAMYJccy14MSLgkYQOeeUYCLCBBqOZY7LRhxScABzl6A3gcEINFyDIY+lwQcoPEDFBLAWhE8IQQ7MUnAAd58MA5wkQAOiuxOYBM+sGIsABy9AN0QBMAosnsNx7xjkkAAKP0ABQdYabL7IBpWjwD88wNUHCDWZLeBPditkm8wwMuvD1+Mez8VU/qE3IwBUkV2r5AKWTFJkIPymUwHKBhAV2VzJrtjPOmGRiEECKcDVAzg7X9NxmR3ih2TQ0dTgGg6wKsPMED3aspe2+F9iYyWKwjwmQWhDlAQgC66zjGyLmCZ4yakYQCffo6lYUUAKgLQmx4y2U2WQ3FLJMHUQkQBXt5HANb5hkiCa1L9Q1quppZiBlBgABv+OZEEvKCQvSoOUAeTAGoMYHq/bkjsZCpA9b52zADaLQSI7EMpkQS5CtC8T5AAgEt35xECJHbcmEgCowL0TXOqJAMAZfenhgBrO/MhLsaRPn4fhRSgvvED9H7dAYDDkGkGye5kBKCUAJ7uAz9An1qGlfiH4ZmjuDvVCntVGKDZBxMASDYMTa5xpbcUd6ekXQIyA80WAYiluAxu6Wdi2brRGOxLUw+w+obfHAeIvGWjkXenhL2qoRfsUHKMA0Af1NIejC288ShAgQBs0X6cAnBLAE6ydSOFeGiarhsaGBoegIgAKNYJM8Oi0AHshEqoAQCTa3Igg2T3aRSgxQAJZPcBpAggVay7Ek9JDBKmDmAF88AHEKGRMsW6WNyazJGfcjYZytqwRgDuK7XS8vboK6V4fnTGAHfiqwoAWuIYJcc24motRY7J+YQVUwBCcF9seWc0M3vx+KQhqtg4Li/A8PF6+OIRLYUqNDP38gHSFgMc3LLND5C6+2tspbHWXStnJEgSQIDUVTE/QOjuH8Tl5hbMdaWcn5TiyujVfX4A+2YNTEYbo0cgBp6VU8wLBrCFq54EkNr7K2Jlaq3LlR2DDLoGAWyGjjgBILT3Y7zadItsbc8khU0TASTD8xMAetfXrGr2sdf8B96/CJXN/8t1AAAAAElFTkSuQmCC"
				), a5K(6, "territorial.io", 6,
				"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phjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAA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jz//+c+xZMmS+PWvfx3Lly9PnQXUssWLF8c3vvGN1BmZM3To0Jg1a1bqDBJp3rx5LF++PHbcccfUKZm2dOnS+PrXv546AwAAAAAAAAAAAACAWlYvdQAAAAAAAAAAAAAAAGxLRUVFcfzxx8fhhx8eBxxwQLRv3z6aNm2aOiuv7bDDDrHffvvFfvvtFyeddFJcddVVsWrVqnjppZdi8eLFcd9998Wrr76aOhMA8t7IkSON9uSAAw44II455piYP39+6hQAAAAAAAAAAAAAAGqR4R4AAAAAAAAAAAAAAPJe7969o0+fPtG9e/fo1KlTNGrUKHVSnVZQUBB77rln7LnnntG3b9+49NJL469//Ws899xz8cQTT8Ttt98eH330UepMAMg7/fv3T53APw0ZMsRwDwAAAAAAAAAAAABAHWe4BwAAAAAAAAAAAACAvNOyZcs49dRT49BDD41u3bpF8+bNUydlWkFBQbRp0ybatGkTJ554Ylx77bXxwgsvxJNPPhn33HNPLF26NHUiAOS83r17x9577506g3864ogjon79+rFhw4bUKQAAAAAAAAAAAAAA1BLDPQAAAAAAAAAAAAAA5IX9998/TjnllDj88MNj//33j3r1XBKfq0pKSuKggw6Kgw46KC688MJYtmxZPPnkk3HXXXfFU089lToPAHLSwIEDUyfwb5o2bRpnn312zJw5M3UKAAAAAAAAAAAAAAC1xKcUAQAAAAAAAAAAAADIWd26dYvBgwfHEUccER06dIiCgoLUSVRTQUFBdOjQITp06BDnnHNOrFixIhYsWBCzZ8+ORYsWpc4DgJzRs2fP1Al8QZ8+fQz3AAAAAAAAAAAAAADUYYZ7AAAAAAAAAAAAAADIKR06dIgzzzwzevfuHZ06dTLWU8e0adMmvve978XZZ58dr776asydOzdmzpwZK1asSJ0GAMkccsghsccee6TO4AsOOuig1AkAAAAAAAAAAAAAANSiwtQBAAAAAAAAAAAAAABQv379GD58eCxcuDD++Mc/xsiRI6Nz585Ge+qwgoKC2GeffWLEiBHx5z//OZ588sk477zzoqioKHUaAGx3/fr1S53AlygtLY3evXunzgAAAAAAAAAAAAAAoJbUSx0AAAAAAAAAsK3df//9sdtuu6XOAHLE9OnT44477kidwSaMGzfOgZR1wG233RYzZ85MnUEeuuWWW2KfffZJnUEVvffee16zAagVRx55ZJx99tlx1FFHRdOmTVPnkEj9+vWjV69e0atXrxg/fnw8/PDDMW3atHj++edTpwHAdtG9e/fUCWzC0UcfHfPmzUudAQAAAAAAAAAAAABALTDcAwAAAAAAANQ5Xbp0iT333DN1BpAjdt9999QJbMacOXOivLw8iouLU6ewFZo2bWq4h2rr2bNnDBw4MIqKilKnUEVXXHFF6gQA6pD69evHiBEj4uSTT479998/dQ45plmzZnHaaafFwIEDY8mSJTF79uy48cYbU2cBQK0ybpy7unbtmjoBAAAAAAAAAAAAAIBaUpg6AAAAAAAAAACA7HrxxRfjvvvuS53BVmrXrl2cddZZqTPIM6NGjTLak0dWrVoV48aNS50BQB3QsWPHuOWWW+Lvf/97TJ482WgPm1VUVBQHHXRQXH/99bFy5cqYMmVKlJaWps4CgG1u//33j2bNmqXOYBP23nvv1AkAAAAAAAAAAAAAANQSwz0AAAAAAAAAACQ1bty4WLduXeoMttK5556bOoE80rlz5zjmmGNSZ1AN11xzTVRUVKTOACCPHXPMMfHQQw/F888/H6eddprxFaptjz32iAsvvDBWrFgRs2fPjs6dO6dOAoBt5rDDDkudwGbstttu0bp169QZAAAAAAAAAAAAAADUAsM9AAAAAAAAAAAktXLlyrjjjjtSZ7CVunbtGv3790+dQZ4oKyuLBg0apM6gil588cWYNm1a6gwA8tSgQYNi8eLF8cgjj8Q3v/lN7wHYajvuuGMMGjQolixZEg8++GD07NkzdRIAbLX27dunTmALevTokToBAAAAAAAAAAAAAIBaYLgHAAAAAAAAAIDkxo4dG++//37qDLbSj370o9QJ5IFWrVrFcccdlzqDKtq4cWNceumlqTMAyEPf+9734oUXXojZs2fHN77xjSgoKEidRB1TXFwcxx57bDzxxBMxb968OPLII1MnAUCNfe1rX0udwBZ06tQpdQIAAAAAAAAAAAAAALXAcA8AAAAAAAAAAMmtWbMmbrrpptQZbKVevXpFr169UmeQ48rLy6NRo0apM6iixx9/PO6///7UGQDkkWHDhsUrr7wSN9xwQ+y3336pc8iAoqKiOProo2PevHmxYMECAz4A5KUWLVqkTmALvvrVr6ZOAAAAAAAAAAAAAACgFhju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FpLMnDkzmjZtmp1RdEpLS7MTAAAAAAAAAFhKDbIDAAAAAAAAAACgEAwdOjR23333qKioyE5hMcrKyuKUU06JX/ziF9kpNebggw822lPH3HDDDUZ7AOqhX//610Z7CtT8+fPj5ptvjr59+0ZVVVV2TkEZPnx4PPvss3HddddFx44ds3NYRj169Iju3bvH2LFjs1MAAChSO+ywQ/Ts2TM23njjWGeddWLNNdes80MFy2qVVVaJVVZZJbp06fKtf//ZZ5/FO++8E//6179izJgx8fjjj8f777+fVAnA8tS2bds46KCDomfPnrHRRhtFu3btspOW2P//eLbRRhvFvvvuGxdddFF88sknMW7cuBg7dmzcc889fucEAAAAAAAAAECdVBIR87MjAAAAAAAAAGrSv//971hzzTWzM4raBx98EGuvvXZ2BkCtu+yyy+K4447LzqAa5s6dG926dYu33347O6VGjB49Onr06JGdwQIfffRRdOrUKebNm5edAsASeu+99/w8W4Bmz54dQ4YMiUsvvTQ7paCVl5fHyJEjY/vtt89OYRndcMMNcdRRR2VnUEe89NJLsemmm2ZnFJ1+/frFddddl50BAMtdw4YNY++9946tt946unfvHuutt140b948O6vOmj9/fnz00Ucxbty4GDNmTDz22GPx4osvZmcBsJS6d+8eBx98cGy11VbRtWvXaNCgQXbScjdhwoR44YUX4vHHH4877rjD86mwnMycOTOaNm2anVF0SktLsxMAAAAAAAAAWEqGewAAAAAAAICCY7gnn+EeoFiVl5fHW2+9Fa1bt85OoRpuvvnmOPzww7Mzltmuu+4af/rTn7IzWMivf/3ruOSSS7IzAFhCBx98cNx8883ZGdSwKVOmxGGHHRaPPPJIdkrRuPTSS6N///5RVlaWncJS+vjjj2ONNdbIzqCOMNyTw3APAIWsd+/esdtuu8UWW2wRG2ywQTRp0iQ7qV77z3/+E6+99lq88MILMXLkyHj33XezkwBYhE6dOsWRRx4ZO+20U2ywwQZRUlKSnZTmyy+/jOeffz7uvffeuOmmm6Kqqio7CQqG4Z4chnsAAAAAAAAA6i/DPQAAAAAAAEDBMdyTz3APUMzOOuusGDJkSHYG1fDll19Gp06dYsqUKdkpy+Svf/1rbL311tkZLPDGG29Et27dsjMAWApPPvlkbLPN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ZwAAUIPatm0bd955Zzz22GPxk5/8JDuHeqisrCz22GOPGDNmTFx22WXRsGHD7CSAGtOtW7d45ZVXYu+9985OYRmsscYacffdd8dZZ52VnQIAAAAAAAAAQB1nuAcAAAAAAAAAAGrBxIkT45ZbbsnOoBp23nnn6NSpU3bG/zjyyCOzE1hg1KhR8dRTT2VnALAMDj744OwElkJlZWWccsopMWHChOwUatCbb74ZJ510UnzzzTfZKSzCLrvskp0AAEANOfPMM+ONN96IfffdNxo0aJCdQz3XvHnzOO644+Ktt96KQw45JDsHYJn16dMn/vKXv8QGG2yQnUINaNSoUQwZMiQefPBBI3MAAAAAAAAAAPwgwz0AAAAAAAAAAFBLBg0aFJ999ll2BouxwgorxODBg7MzvuWggw6KLl26ZGcQEbNnz46BAwdmZwCwjHr37p2dwFK46aab4tZbb83OYDm47bbb4qabbsrOYBG23HLL7AQAAJZR796947XXXoszzjgjVl555ewcCsxaa60VN910Uzz22GOx7rrrZucALJWBAwfGjTfeGKusskp2CjXs5z//ebz88sseowAAAAAAAAAA+F6GewAAAAAAAAAAoJbMmDEjbrjhhuwMqmHPPfeMli1bZmf8V//+/bMTWOC2226LN998MzsDgGWw0047xRprrJGdwRJ6/fXX4+ijj87OYDn61a9+FePHj8/O4Ad07NjRwaYAAPVU48aN4/e//338+c9/jm7dumXnUOC22267GD16dAwePDg7BWCJXHvttTFixIho1KhRdgrLSbdu3eKvf/1rbLXVVtkpAAAAAAAAAADUMYZ7AAAAAAAAAACgFg0dOjQmTpyYncFilJeX15lD5XbZZZfYdNNNszOIiM8++ywGDBiQnQHAMvrFL36RncASmjNnTvTv3z+qqqqyU1iOKisr45hjjok5c+Zkp/A9SkpKYu+9987OAABgCe2+++4xbty4OPzww6Nhw4bZORSJlVZaKc4+++x48cUXo2vXrtk5AItUWloa999/fxx55JFRUlKSncNy1rZt23jggQdin332yU4BAAAAAAAAAKAOMdwDAAAAAAAAAAC1qLKyMq644orsDKph//33j8aNG2dnxIknnuiQqDrimmuuienTp2dnALCMevXqlZ3AErrmmmvihRdeyM6gFjz77LNxzTXXZGfwA7ba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XFRVVWXnLFcnnHBC7LfffjF58uTsFBY44ogjshMAKDAbbLBBdgIAAAAAAAAAAAsx3AMAAAAAAAAAAEXq+uuvj9deey07A37QXXfdFW+88UZ2BgB1WIsWLbITWMg777yTnQAAALDM9t9//+wEFjJmzJjYcsst4/77789OqTX3339/bL311jFu3LjsFCKid+/e0axZs+wMAApIhw4dshMAAAAAAAAAAFhIg+wAAAAAAAAAAAAgz/nnnx933nlnlJSUZKfAt0ybNi0GDBiQnQFAHdapU6do2LBhdgYLGTt2bHYCAADAMtlyyy1jk002yc5ggbvuuisOPPDAqKqqyk6pdW+++WZsuumm8fDDD0evXr2yc4raSiutFP369YuLL744OwWoY6ZNmxZTp06NL774Ij7//PP46quvIiJi5syZ0bx584iIaNSoUZSXl8eKK64YK6+8cqy66qrRuHHjzGzqgDXWWCM7AQAAAAAAAACAhRjuAQAAAAAAAACAInb33XfHscceGz/96U+zU+Bbrr322pgyZUp2BgB12DrrrJOdwELmzJljuAcAAKj3jj76aEP3dcD8+fPjiiuuiBNPPDE7JdWcOXNiu+22i3vvvTd233337JyitsceexjugSJWVVUV77zzTvzrX/+KcePGxauvvhrPPPNMTJ8+famut/7668emm24a3bp1i/XWWy822GCDaN++ve9BishKK60U66+/frz55pvZKQAAAAAAAAAAhOEeAAAAAAAAAAAoemeffXY88sgjUVZWlp0CERExYcKEOOOMM7IzAKjjVl999ewEFvLZZ59lJwAAACyTsrKy2HHHHbMzit78+fPjnHPO8TviBaqqqmLPPfeMe+65J/baa6/snKK16aabRocOHeL999/PTgFqyaxZs+LFF1+Mxx9/PEaOHBkffvhhjV37zTff/J/Blg4dOsTee+8dvXv3jk033TRWWmmlGrsfdVPPnj0N9wAAAAAAAAAA1BGl2QEAAAAAAAAAAECuJ598Mh577LHsDPiviy++OCorK7MzAKjjVltttewEFjJlypTsBAAAgGVy5JFHRsuWLbMziprRnh+27777xiOPPJKdUbQaNmwYRx55ZHYGsJxVVVXFyy+/HKecckq0adMmtt9++7joootqdLTnh7z//vtx4YUXxg477BCtWrWKE044IZ599tn45ptvlvu9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222XnUIttWvXLh588MHo0KFDdgq19Pjjj2cnAADUi2nTpmUnFJX9998/tt566+wMAACARrHddttFeXl5dgYAAAAAAAAAG8BwDwAAAAAAAAAANICKioooLXV7TiGaOXNmjB8/Pjvjcy1evDhuueWW7AxqoUWLFjFixIjsDAA20NKlS2Py5MnZGWykr33ta/Hggw86DK0JKC8vj4cffji6dOmSnUItrVu3Lm677bbsDACAenHffffF2rVrszOKRuvWreP000/PzgAAAGgUpaWl8b3vfS87AwAAAAAAAIAN4GQQAAAAAAAAAACoZz/60Y9iv/32y86gBmPHjs1OqJUhQ4bEwoULszOohQMOOCAOP/zw7AwANtCtt96anUA96Nq1a/zhD3+IFi1aZKdQgxYtWsRDDz0UXbt2zU6hDl5++eWYNWtWdgYAQL1YunRpvPHGG9kZReWYY47JTgAAAGg03/nOd7ITAAAAAAAAANgAhnsAAAAAAAAAAKCeDRo0KEpKSrIzWI9nnnkm7rjjjuyMWlmxYkXceOON2RnUQklJSQwePDg7A4ANdOedd8bbb7+dnUE9+M53vhOPPfaY8Z4CVF5eHk8++WR07949O4U6euKJJ7ITAADq1QsvvJCdUFR22WUX4z0AAEDR6Nq1a3YCAAAAAAAAABvAcA8AAAAAAAAAANSj448/3iEMBWrdunUxatSo7Iw6qaioiHfffTc7g1rYe++945e//GV2BgAb6IEHHshOoJ706NHDeE+Badu2bUyaNCm6deuWnUIdrVu3Lm6++ebsDACAevXMM89kJxSdU089NTsBAACgUXTp0iVKSx3nBAAAAAAAANDUbJIdAAAAAAAAAAAAzck555yTnUANpkyZEg899FB2Rp2sWbMmxo8fH0OHDs1OoRbOOuusuP7666O6ujo7BYA6uuyyy+LUU0+NTTfdNDuFetCjR4+YPHly9OrVK5YtW5adU9R23nnneOCBB2L33XfPTmEDvPTSS/Hcc89lZwAA1Kt77rknxo4d6yDlRvSd73wnunfvHlOnTs1O4TO23nrrOPnkk7Mzmp2VK1fGFVdckZ0BAECCzTffPA4//PC49957s1MAAAAAAAAAqAPDPQAAAAAAAAAAUE/69esXu+22W3YG61FdXR2jRo3KztggI0eOjBNPPDE6duyYncIX6NSpUwwePDhGjBiR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qsrOaHSVlZWxZs2a7AxqoW3btlFZWZmdAUAdDR8+PN57773sDApIaWlpdO3aNSorK+Ott96K6dOnx4UXXhh77bVXdlqNysrK4rjjjosbb7wxXn755fjrX/8a/fr1i1133TVKSkqy80h26623ZicAAKS67bbbshOIiK222iruueee6Nq1a3ZKs3DsscfGhRde6Hu+RvLcc89lJwAA/JPhnsK3+eabx+WXXx4PPPBAdOjQITsHAAAAAAAAoOgZ7gEAAAAAAAAAgFqqqKiI0lK33BSiN998My666KLsjBTTpk2LiRMnZmdQS0cffXR84xvfyM4AoA5WrVoVEyZMyM6gQLVo0SK6du0aZ511Vjz33HMxd+7ceOihh2LYsGHRrVu3tK527dpF796947rrrou//OUv8cEHH8Qtt9wSJ5xwQuyyyy4ObuaflixZEqNHj87OAABI9cADD8Tbb7+dnUFEbLvttnHPPff4GepGOvzww+O3v/1tbLrpptkpReOJJ57ITgAA+Kfly5dnJ1BLhx56aDz//PMxZsyYaNWqVXYOAAAAAAAAQNHaJDsAAAAAAAAAAACagh/96Eex3377ZWdQgyuuuCKqq6uzM9KMGDEivv/970fLli2zU/gCrVq1isrKyjj00EOzUwCog/PPPz+OPfbY2HbbbbNTKGAlJSXRoUOH6NChQxx88MFRUVERS5YsiXfeeSfmzp0br732WsyZMydmzJgRL7zwQr18/dqlS5fYbbfdolOnTrHrrrvGV7/61fjKV74S22+/fZSVldXDR0Vzd8cdd8SqVauyMwAA0j366KNxyimnZGcQETvttFP86U9/ih//+McxderU7Jwm57jjjourr746Nt988+yUorFy5UqjzwBAQVm9enV2AnWw5ZZbxjnnnBM/+9nP4vbbb4+xY8fG4sWLs7MAAAAAAAAAiorhHgAAAAAAAAAAqIVBgwZFSUlJdgbrMXv27Bg3blx2RqoZM2bEgw8+GD/+8Y+zU6iFH/zgB9GzZ8+YNGlSdgoAtbRq1aq48cYb45xzzslOoYnZaqutYquttopvfvOb//LyqqqqWLZsWSxZsiSWLl0aH374YVRVVcXHH38ca9eujY8//jgiIlq0aBGtWrWKiIjy8vLYfPPNY/PNN482bdrENttsE5tuumljf0g0I8uXL4+RI0dmZwAAFITx48fHySef7PcABWLbbbeN+++/P04++eS4//77s3OajDPOOCPGjh0bLVu2zE4pKjNmzIg1a9ZkZwAA/JOx9qZphx12iLPOOitOPfXUePLJJ+Puu++OCRMmRHV1dXYaAAAAAAAAQLNnuAcAAAAAAAAAAL7A8ccfH127ds3OoAaXXXZZdkJBGD58eBxyyCHRunXr7BS+QFlZWQwfPtxwD0ATU1FRET/72c9ihx12yE6hGSgrK4stt9wyttxyy+wUitidd94ZCxYsyM4AACgIzz77bMycOTP22muv7BT+11ZbbRW33XZbDB48OC699NLsnII3bty46Nevn/GpBI8++mh2AgDAv1i2bFl2AhuhTZs2ceihh8ahhx4al112WcyYMSOeeeaZePrpp2PSpEkpo5G77rpr7LnnntGpU6fo0KFDvPTSS3HllVc2egcAAAAAAABAQzHcAwAAAAAAAAAAX+Ccc87JTqAGM2fOjPHjx2dnFITZs2fHfffdF8cdd1x2CrWw7777xnHHHRcTJkzITgGgltasWRPjx4+PoUOHZqcAbLSVK1fG6NGjszMAAArKPffcY7inwLRq1Souuuii2H333eOUU06J6urq7KSCs/3228eECRPiP/7jP7JTitKaNWvixhtvzM4AAPgXS5cuzU6gnmy55ZZx4IEHxoEHHhgREZ988km89dZbMXfu3FiwYEEsWLAg3n333Zg3b14sWbIkVq9eHYsXL44PP/wwqqurY8stt/znY2222WaxxRZbRETEl770pWjbtm1sscUWseWWW8bmm28ebdq0ifLy8thmm21iq622iq222uqfr2/VqtW/dE2YMMFwDwAAAAAAANCsGO4BAAAAAAAAAIDP0a9fv9htt92yM6jBRRddlJ1QUIYOHRqHHXZYtGnTJjuFWjj33HMN9wA0MSNHjowTTjghvvrVr2anAGyU++67L958883sDACAgnLllVfGwIEDo7y8PDuFTykpKYmTTjop9t577/j5z38es2bNyk4qGMcee2xcdNFF8eUvfzk7pWjNnDkz5s2bl50BAPAvlixZkp1AA9l0001jl112iV122SU7BQAAAAAAAKBZKc0OAAAAAAAAAACAQlVaWhr9+/fPzqAG06dPj9tvvz07o6C8+eabceedd2ZnUEu77bZbnHnmmdkZANRBdXV1XHLJJdkZABtl+fLlMWTIkOwMAICCs2zZsnj88cezM6jBN77xjZg8eXKce+652Snptt566/jv//7vuOmmm4z2JHvssceyEwAA/o/33nsvOwEAAAAAAAAAmhTDPQAAAAAAAAAAUIOzzz47OnXqlJ3Beqxbty4qKyuzMwpSRUVFLF26NDuDWurfv3+UlZVlZwBQB1dffXU8//zz2RkAG+zOO++MuXPnZmcAABSk3/72t9kJfI4tttgiRo0aFU8//XR07do1O6fRlZaWxpAhQ+Kll16Ko48+2s+Wk1VVVcWtt96anQEA8H8sWrQoOwEAAAAAAAAAmhTDPQAAAAAAAAAAsB5lZWXRr1+/7AxqMGXKlHjooYeyMwrS/Pnz4/bbb8/OoJZ23HHHGDVqVHYGAHVUWVkZ69aty84AqLNly5bFsGHDsjMAAArWpEmTYtasWdkZfIF99903pkyZEjfccENsvfXW2TmNonfv3vHyyy/H8OHDo3379tk5RMTf/va3mDNnTnYGAMD/8Y9//CM7AQAAAAAAAACaFMM9AAAAAAAAAACwHiNHjowddtghO4P1qK6uNnTyBSoqKmLx4sXZGdTSySefHO3atcvOAKAO7rvvvnjiiSeyMwDq7Kabbop58+ZlZwAAFDTD6E1Dq1at4qSTToo5c+bEpZdeGuXl5dlJ9a60tDROP/30mDlzZowfPz7+7d/+LTuJT7nvvvuyEwAA1mvGjBnZCQAAAAAAAADQpBjuAQAAAAAAAACAzygvL4/evXtnZ1CDxx57LCZNmpSdUdAWL14ct9xyS3YGtbTVVlvFmDFjsjMAqKNzzjknVq1alZ0BUGsLFiyI8847LzsDAKDg/eY3v4n3338/O4Na2nrrreNXv/pVvPHGG3H55ZdHhw4dspM22vbbbx9jxoyJt956K8aNGxd77rlndhKf8dFHH8WVV16ZnQEAsF6LFy+Ojz76KDsDAAAAAAAAAJoMwz0AAAAAAAAAAPAZI0aMiPbt22dnsB5r1qyJUaNGZWc0CUOGDImFCxdmZ1BLP/nJT2K33XbLzgCgDmbMmBETJkzIzgCotauvvjpWrFiRnQEAUPDWrFkT9957b3YGdbT11ltHv3794uWXX4777rsvDj/88OykOikrK4u+ffvG448/Hm+88Uacc845sdNOO2VnUYMnn3zS91cAQEEzRgoAAAAAAAAAtWe4BwAAAAAAAAAAPqVdu3ZxwgknZGdQg4kTJ8bUqVOzM5qEFStWxI033pidQS21bt06KisrszMAqKOzzz7bUB7QJLz22msxevTo7AwAgCbjwgsvjFWrVmVnsAG+9KUvxWGHHRb33ntvvPXWW3HttdfGgQcemJ21Xh07doxzzz03HnnkkVi0aFFcccUVccABB0TLli2z0/gCxpwBgEL33nvvZScAAAAAAAAAQJNhuAcAAAAAAAAAAD5l9OjR0bZt2+wM1mP16tUxdOjQ7IwmpaKiIt59993sDGrp0EMPjR49emRnAFAHS5cujUsvvTQ7A+ALVVZWRnV1dXYGAECT8eabb8ajjz6ancFG+spXvhKnnHJKPPbYYzFv3ry455574swzz4xdd901pWfvvfeOgQMHxu233x4vvvhivPbaazFq1Kg46KCD/G6qCZk7d27cdddd2RkAAJ/LcA8AAAAAAAAA1N4m2QEAAAAAAAAAAFAoOnfuHMccc0x2BjV44IEHYtasWdkZTcqaNWti/PjxBo+aiLKyshg+fHgccMAB2SkA1MFFF10UxxxzTOy9997ZKQDrNXny5LjllluyMwAAmpxLLrkk/vM//zNKS0uzU6gH22+/fRxxxBFxxBFHxIUXXhjz5s2LN998M1599dV46aWX4oUXXojp06fHihUrNuo6LVq0iH322Sf22GOP+Ld/+7f46le/GjvuuGN06tQpttpqq3r6aMh0xx13ZCcAAHyhefPmZScAAAAAAAAAQJNhuAcAAAAAAAAAAP7XsGHDok2bNtkZrMfKlStj8ODB2RlN0siRI+PEE0+Mjh07ZqdQCz169Igf//jHcdddd2WnAFAHZ511VjzyyCPRokWL7BSAf/HJJ5/Eueeem50BANAkPfXUUzFlypTYf//9s1OoZyUlJbHTTjvFTjvtFP/xH//xz5evW7culixZEkuXLo2PPvooli1bFsuXL4+1a9fGunXr4uOPP47WrVtHRMRmm20WJSUl8aUvfSnatm0bW2yxRWy++eax+eabZ31YNIKPPvooLr744uwMAIAv9Morr2QnAAAAAAAAAECTYbgHAAAAAAAAAAAiokuXLnHkkUdmZ1CDu+66K15//fXsjCapuro6rr322hgzZkx2CrVQUlIS559/vuEegCZm8uTJcdttt8WJJ56YnQLwL2699dZ45plnsjMAAJqsSy+9NP7jP/4jSkpKslNoBCUlJbH11lvH1ltvnZ1CgZo4cWIsXrw4OwMA4As9//zz2QkAAAAAAAAA0GSUZgcAAAAAAAAAAEAhqKysjJYtW2ZnsB4fffRRDBkyJDujSRs7dmy89tpr2RnU0p577hn9+vXLzgCgjvr37x/z58/PzgD4p3fffTcGDBiQnQEA0KQ99NBD8eyzz2ZnAAWguro6xo0bl50BAFArTz/9dHzyySfZGQAAAAAAAADQJBjuAQAAAAAAAACg6HXv3j169eqVnUENbr311pg3b152RpN31VVXZSdQBwMGDIiysrLsDADqYNmyZTF8+PDsDIB/GjVqVCxbtiw7AwCgybvkkkuyE4AC8Ne//jX+8pe/ZGcAANRKdXV1zJ8/PzsDAAAAAAAAAJoEwz0AAAAAAAAAABS9wYMHR4sWLbIzWI8lS5bEsGHDsjOahcsvvzxmz56dnUEtdezY0ec+QBN0/fXXx8SJE7MzAOLPf/5zXHPNNdkZAADNwl133RXTp0/PzgCSjRs3LjsBAKBO3n777ewEAAAAAAAAAGgSDPcAAAAAAAAAAFDUevbsGT179szOoAY333xzLFq0KDuj2XCoXNPyy1/+Mtq2bZudAUAd9e3bN5YsWZKdARSx5cuXxxlnnJGdAQDQrFxyySXZCUCi559/Pu66667sDACAOpkzZ052AgAAAAAAAAA0CYZ7AAAAAAAAAAAoahUVFVFa6jaaQrRw4cI477zzsjOaleuvvz5mzpyZnUEtbbPNNjFmzJjsDADqaO7cuTF69OjsDKCIXX755fHCCy9kZwAANCt33XVX/OUvf8nOAJJcdtll2QkAAHX23HPPZScAAAAAAAAAQJPgxBEAAAAAAAAAAIrWUUcdFfvtt192BjW44YYbYtWqVdkZzc6ll16anUAdHHfccdG5c+fsDADq6NJLL40///nP2RlAEZo5c2YMHjw4OwMAoFkaMWJEVFdXZ2cAjezFF1+MW265JTsDAKDOJk6cGOvWrcvOAAAAAAAAAICCZ7gHAAAAAAAAAICiNXDgwCgpKcnOYD3efffdGDp0aHZGs3TrrbfG9OnTszOopTZt2sTo0aOzMwDYAKecckosWbIkOwMoIqtWrYozzjgjOwMAoNl65JFH4rHHHsvOABrZlVdemZ0AALBB5s+fH++++252BgAAAAAAAAAUPMM9AAAAAAAAAAAUpRNOOCG6du2anUENrrrqqqiqqsrOaLYuvvjiWLduXXYGtXTYYYfFvvvum50BQB29/vrrhgiBRnX55ZfH1KlTszMAAJq1IUOGxCeffJKdATSSF198Ma677rrsDACADfbKK69kJwAAAAAAAABAwTPcAwAAAAAAAABAURo4cGB2AjV466234sILL8zOaNbuvvvuePrpp7MzqKUWLVrEiBEjsjMA2ABXXXVVPPzww9kZQBGYMWNGDBo0KDsDAKDZe+655+KOO+7IzgAawbp166KysjI7AwBgozz33HPZCQAAAAAAAABQ8Az3AAAAAAAAAABQdE4//fTYbbfdsjOoweWXXx7V1dXZGc3e2LFj/XduQr773e/G4Ycfnp0BwAY45ZRTYv78+dkZQDO2fPnyOO2007IzAACKxllnnRVLlizJzgAa2JQpU+LOO+/MzgAA2CgTJ07MTgAAAAAAAACAgme4BwAAAAAAAACAolJaWhpnnHFGdgY1ePnll2PcuHHZGUXh4YcfjsmTJ2dnUEslJSVx/vnnZ2cAsAEWLFgQZ5xxRqxduzY7BWimRo8eHc8++2x2BgBA0Vi0aFFcffXV2RlAA1q7dm0MHTo0OwMAYKNNmTIl3n///ewMAAAAAAAAAChohnsAAAAAAAAAACgqAwcOjE6dOmVnUIPLLrssO6GojBkzJqqqqrIzqKVvfetb8Ytf/CI7A4ANcO+998a1116bnQE0Q48++mhccMEF2RkAAEVn2LBh8corr2RnAA3kD3/4Q0yZMiU7AwCgXsycOTM7AQAAAAAAAAAKmuEeAAAAAAAAAACKRllZWfTt2zc7gxrMnDkzrr/++uyMovL444/HY489lp1BHZx99tlRWurWP4CmqH///vG3v/0tOwNoRubPnx+9e/fOzgAAKErV1dVx7rnnRnV1dXYKUM+WLVsW5557bnYGAEC9+ctf/pKdAAAAAAAAAAAFzbP3AQAAAAAAAAAoGiNHjowddtghO4MaXHTRRdkJRamysjLWrFmTnUEtderUKc4777zsDAA2QHV1dZx00kmxZMmS7BSgGVizZk3069cv5s+fn50CAFC07r///njwwQezM4B6dtVVV8Wrr76anQEAUG8mTJgQVVVV2RkAAAAAAAAAULAM9wAAAAAAAAAAUBTKy8ujd+/e2RnUYPr06XH77bdnZxSladOmxcSJE7MzqIO+fftGeXl5dgYAG+DFF1+MAQMGOBwN2Gjjxo2L+++/PzsDAKDoDRgwwEArNCOzZ8+OIUOGZGcAANSrV199NV5++eXsDAAAAAAAAAAoWIZ7AAAAAAAAAAAoCiNGjIj27dtnZ7Ae69ati8rKyuyMojZixIhYvXp1dga1tO2228bIkSOzMwDYQDfffHNce+212RlAE/bnP/85Bg4cmJ0BAEBEzJ07Ny644ILsDKAeVFVVxaBBg6K6ujo7BQCg3k2ZMiU7AQAAAAAAAAAKluEeAAAAAAAAAACavXbt2sUJJ5yQnUENnnrqqXjooYeyM4rajBkz4sEHH8zOoA5OPPHE6NChQ3YGABuoX79+MW3atOwMoAmaN29eHH/88dkZAAB8ysUXXxxTp07NzgA20n333ef3VQBAs3XHHXdkJwAAAAAAAABAwTLcAwAAAAAAAABAszd69Oho27ZtdgbrUV1dHZWVldkZRMTw4cNj5cqV2RnUUnl5eYwZMyY7A4CNcOyxx8a8efOyM4AmZOXKldG7d29/dwAAFKDTTz89li9fnp0BbKAFCxbEGWeckZ0BANBgnnrqqXj99dezMwAAAAAAAACgIBnuAQAAAAAAAACgWevcuXMcc8wx2RnUYNKkSTFp0qTsDCJi9uzZcd9992VnUAc/+tGPomvXrtkZAGygd955J0466aRYsWJFdgrQRAwdOtT3TwAABWrWrFlx4YUXZmcAG2DdunUxaNCgWLBgQXYKAECD+uMf/5idAAAAAAAAAAAFyXAPAAAAAAAAAADN2rBhw6JNmzbZGazH2rVro7KyMjuDTxk6dGgsX748O4NaatmyZYwcOTI7A4CN8Pjjj8egQYNi3bp12SlAgbv55pvjkksuyc4AAOBzVFZWxlNPPZWdAdTRPffcEzfffHN2BgBAg7vmmmti7dq12RkAAAAAAAAAUHAM9wAAAAAAAAAA0Gx16dIljjzyyOwMavDHP/4xpk6dmp3Bp7z55ptx5513ZmdQBwcddFD06tUrOwOAjXDVVVfFddddl50BFLCpU6dG7969szMAAKiF0047LT744IPsDKCW5s2bF7/4xS+yMwAAGsWcOXPi2Wefzc4AAAAAAAAAgIJjuAcAAAAAAAAAgGarsrIyWrZsmZ3BeqxevTqGDx+encF6VFRUxNKlS7MzqKXS0tKoqKjIzgBgI5122mnxyCOPZGcABeiNN96II488Mqqrq7NTAACohdmzZ8f5558f69aty04BvkBVVVWceeaZficCABSVe++9NzsBAAAAAAAAAAqO4R4AAAAAAAAAAJql7t27R69evbIzqMEDDzwQzz//fHYG6zF//vy4/fbbszOog29/+9tx0kknZWcAsJGOOOKImDVrVnYGUEAWL14cP/3pT2PRokXZKQAA1ME111wTd911V3YG8AWuu+46/68CAEXnsssuiwULFmRnAAAAAAAAAEBBMdwDAAAAAAAAAECzNHjw4GjRokV2BuuxcuXKGDx4cHYGn6OioiIWL16cnUEdDBw4MDsBgI20atWqOPLII2PevHnZKUAB+Pjjj6N3797x3HPPZacAALAB+vTpE6+//np2BlCDZ555Jk4//fTsDACARldVVWW8EAAAAAAAAAA+w3APAAAAAAAAAADNTs+ePaNnz57ZGdTgrrvucmBhgVu8eHHccsst2RnUwS677BLnnHNOdgYAG+nNN9+M4447Lj744IPsFCBRVVVVnHnmmfGHP/whOwUAgA20YsWK6N27d6xYsSI7BfiMRYsWxYknnhjV1dXZKQAAKS666KJYuXJldgYAAAAAAAAAFAzDPQAAAAAAAAAANDsVFRVRWurWmEK0fPnyGDJkSHYGtTBkyJBYuHBhdgZ1cPrpp0erVq2yMwDYSE899VScfPLJ8fHHH2enAEkuuOCCuOaaa7IzAADYSFOnTo0hQ4bEunXrslOA/1VVVRUDBgyIV199NTsFACDNvHnz4pFHHsnOAAAAAAAAAICC4XQSAAAAAAAAAACalaOOOir222+/7AxqcMstt8S8efOyM6iFFStWxI033pidQR1sv/32UVlZmZ0BQD247777on///rFmzZrsFKCR/fa3vzV2CgDQjFx22WVx++23Z2cA/+uqq66KCRMmZGcAAKSrrKyM1atXZ2cAAAAAAAAAQEEw3AMAAAAAAAAAQLMycODAKCkpyc5gPZYsWRLDhg3LzqAOKioq4t13383OoA569+4d22+/fXYGAPVg/PjxMXTo0Fi3bl12CtBIbr/99ujbt292BgAA9ezEE0+M5557LjsDit4f//jH+NWvfpWdAQBQEJ5//vl48MEHszMAAAAAAAAAoCAY7gEAAAAAAAAAoNk44YQTomvXrtkZ1ODmm2+ORYsWZWdQB2vWrInx48dnZ1AHbdu2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L14c06ZNiyeffDKamppST6KXO378eKxevTpKS0vjrrvuihMnTqSeBAAAPVZnZ2esXLkyJk+eHLfeemvs2LEjOjs7U88ioa6urti5c2fceeedH4adhFIBAPi07dmzJ+69996YN29ejBo1Ku644454+umn480334wzZ86kngcAAAAAAABADybcAwAAAAAAAABAUl/84hdj0aJFqWfwMXbt2hUbN25MPYNe4Oc//3ns378/9QzO09e//vWYPXt26hkA9FC1tbVx++23x8SJE2PVqlVRW1ubehK9TFVVVfz4xz+OSy65JJYuXRrNzc2pJwEAQK/yy1/+MubNmxcLFiyIX/3qV665M9PQ0BDPPPNMXHnllXH55ZfHunXrUk8CAICIiGhra4snnngibrnllqioqIgRI0bEN7/5zVi3bl3s2LEj/vGPf6Se2Ou0t7dHVVVVbN68OZ577rnUcwAAAAAAAAD+o/qlHgAAAAAAAAAAQN7uu+++6NfP31i6o66urvjpT3+aega9yMMPP+zGfj3MwIEDY/ny5XHttdemngJAD9bY2Bh333133HPPPfG9730vFi9eHNOnT089ix6qs7Mzdu3aFevXr4+nnnoq9RwAAMjC1q1bY+vWrVFUVBRLly6NG264IS699NLUs7gA2tvbY+fOnfHss8/GY489Fh0dHaknAQDA/6mtrS02bdoUmzZt+vBYaWlpLFy4MGbOnBlTp06NSy65JEpKSmLAgAEJl/YMra2t8e6778ahQ4fi73//e7zxxhvx/PPPR2NjY+ppAAAAAAAAABeEO54AAAAAAAAAAJDMVVddFVdeeWXqGXyMbdu2xW9/+9vUM+hFnnjiiViyZElUVFSknsJ5uPrqq+Oaa66JP/zhD6mnANDDdXZ2xkMPPRQPPfRQXHvttXHHHXfEVVddFYWFhamn0QM0NzfH73//+3j00Udj+/btqecAAECWmpubY9myZbFs2bKYP39+3HbbbXH11VfHqFGjUk/j/6GrqysOHjwYL730Ujz++OOxf//+1JMAAOD/7dChQ7F27dqPHOvbt2/MmzcvZs2aFZMnT46JEyfGxRdfHGPGjIkxY8ZEv3753Iqpubk56uvr49ixY1FTUxPvvPNOVFdXx969e2PPnj2p5wEAAAAAAAB8qvL5tRgAAAAAAAAAgG7nvvvui4KCgtQz+Cc6OztjxYoV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"
				), a5K(7, "youtube", 7,
				"iVBORw0KGgoAAAANSUhEUgAAAKEAAAAkCAMAAADW8qrvAAAANlBMVEX+AgDxYgDjhgD/eXnQpAC7vAD/oaMA/wClzwCH4QAx/zdf/1ty/3Sf/6D/3d2+/77d/93///85QMf8AAACr0lEQVRYw8WYWbaDIAxAsdVqAzzi/jf7GBIGZxxO89GiUbgGEkJEH+Q7DF3bti8rjRPhxTftLavpuuH77X8gwv10BLQrTfsEpHECG4TwEhUy0ItKW1Gh7Zp6AwF0KRP16GSLsApQCLKidt1igE3NZZFjKZWEXR2gaMguaSwPa54jbCoJ2Yjo+lWxpR8jhFpA0dH6jlzbIzhCdOIf8606wm814atPq8+whXDXY+WS+Y4QDtWETdYxHlmGFwm7akLRZwsRaLrVc4TtAsL7vUkIWbxRRBrCngu9xArSinvS/cuccKYhQpletjrXl3ZasRQNP+Pfe9+ZZZhd4EnW5KmYHNxwVFIZ4UwTCP1U0GqhC3+5QjiOn11CPxQGj9EJ0Io8QchM6fMIcZVw/PvsEfpOAxkUMQ9PEObvZh87KtGsEY6rU81bs46zg4SLoNiI1YRaYvGECl2aLcI1Rib0Q2gM42HuN7qeUFOEtV8HZMvwv2ikTzLyZ4PQj2WK5U62NCc8Jd2ImcghwiUzRkI/wWHcOD7nPCcI2ZhxC/BPXiJUaXWrOwjxDOHmLLMXxlhzD6EpCbc9ZdOXadF5172dEJUK83Il2jBXCmE3Eka5ErF5EPMbwgO7Xp5e30+IJBcyh2cJzQ3ZV0GoniM8n8HeTziN2DZH1PrCKaAghCd2PZ/enT9JlYQ9D8dHQFNPqMYskUuEp0+jE0IaVxakCJQt54SswYIQZci+MGVfwZaitihSuHJGSMF7MQstCWea4tpM+tKiHy4sw7zcgMWoNIdOOyWcaRIOnSAAs5T7dGVpRpi61dmOOCqYEs403nQqf1dyXwjnq3NZXU5yMmbsFmA0ZJdGhmeAS3RJA1ET6nyg7c14GtW+L8UVzuEo4zMVzgM1WKoSU5m44TJxw0VirhLDL6rE/6vBvdrCmmWnAAAAAElFTkSuQmCC"
				), a5K(8, "googleplay", 3,
				"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"
				), a5K(9, "discord", 7,
				"iVBORw0KGgoAAAANSUhEUgAAACwAAAAyBAMAAADVdiTZAAAAG1BMVEUA/wBI/0lu/26P/5Cl/6O8/73R/9Hn/+j///+iRuwXAAABJUlEQVQ4y83TvW7CMBQF4BsKdKVIpYxIRaJjVLUSI6JDGSNlCCOq1JC1f+CxFIL92D22E+di/ABciZB8seRj35joVZ3VN1FXBSqhRYgPJEIsSQXrAnmjL2uP5Usm81z83Bec5WM+J9T4vS8Yfzz1yFQ0v2ackKsrxr2G7d4ZPjK1O214z3no+Jdz1/EKTy1NI/w6jmcIID6JJirGe8cYdIdGIcQOwx3j/gEpI6X+qoRkGqrnd6OXFR/NRAcdOWFc6hDPera0Xk/Fozo1ck4bHsSVpg0jYJSlervGW9zWSdQXhhXozlbGek1uY9/s2hRWect7ucnsf5ld7DfosX+kcsv+AdwtDfvHdW877x/u0raB6Oa0qG35rKZhbokg41sKclQEmTr/f+SUPtWxuyYAAAAASUVORK5CYII="
				), a5K(10, "insta", 3,
				"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"
				), a5K(11, "emojis", 4,
				"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"
				), a5K(12, "flags", 3,
				"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"
				), a5K(13, "bestTeam", 5,
				"iVBORw0KGgoAAAANSUhEUgAAAIoAAACvCAMAAAAVOLbTAAAAtFBMVEUAAAABAxsXAwACCQwXBTIoBg84BAAJEhJOAAJGAR5lAAASHBx9AACaAACwAAEcKyobMgAVMkUnOjgNWAA5TEq8LSUrVlgocYAWgge4TEJOa2gFjSBnamdCdXO9W1QDl0V1dsa6bmZoi4RTkpE3nZpUogB3icmciYEMuIkAxLNiqcxuvABvsrRXvb+QsqOwsK062M0A/wC9wb6D19JV/1bX2teS/5Hj5+TD9sy7/7vl/u3///93TxdPAAASr0lEQVR42u2cC3uaShOAEcpFwKBo0VppTsXUpkXpwRAa8///1zeX3WXxnjRpzvM9mdP2RLOXl5nZ2Qu7a/x7RO535O7F5FiNxv5Xd/e/t9vHV5Tt74f7uwtQgOPxL8j29/0ZlHvJUdfVK0mtaB5OoNz/ZoxyOXONV5N4VpTMs70/hvJAvy9nkfHqEs1Kquzh7hDK3W8GMf6SMMz2bh/lDr2kXhp/UWZ1y0iGTlKNMIUF/xkWyGtUb1HBovS41FkMjaQMmITTW4T0wiCqaBa30FgECvpJEcgMLko70wvpA8S1qHDxbdH4i6HaDuvEcDWxLsO5MAlxaNKw/G5QMLBV3ITdQEgL52VIRImqBq4Q/eVeoYB5avJYIwgiIYrmHAv7lnEqjQYS6DVwiKmEiRDlHri4FUOyOB6NYhCN5hSLqOUkrgJhDiyd6oiYZYahTqCgeVwmwUQsOs7RiqhFSEueIVEcI1WFYClYLQYrhWKsG0GyqZCEcYiGYA77iCVtL4D3IwCBSA4oNJE1IAtpIK5JLQZ5SsUeCyjT0TSdg6Qp4xANV7RXg8GVSMtTGms/HadhdUChaTrPoIJpPEW1uFIthLIVngIokDawgiTNUBoarGmXRdiGK2Fgdx/YUCCsjpSLzpLAckEvMaOMqBEZaJ86ZhRQynRkeo4ZJdmiRUNP3a6C7R9FsfQtUgx8bbXTcZIEMYhjkSWx4Xgm1iW8xa3QQgaGt8qQrgIZXN/3iSZdLIgmZRioSFVCzYEcII5HjeUxTdBEL7QOJ0kEx0JwQBVGOp/qjvsbUMBVChFToNg0SxzfZ5pA0QCMxiJdNaLnBd+aJnNOEqn4KB0W/S8RdlmkSWASBxQfZxrKDJ3FQFeZGdJXoNzU9Fk8QcMw5GMuq0SFB6pmnkYBuDqyiAjAKS1MySQNhycKt9OMy6SnC8BZ7ggllihxMs2yyCMOD7N5jm3E4MaKRbkqe8gUq4ltJ8jgIacqIjUpmSRNEstGfXiiXB8ypMkokg4IznJv/AteaxhNYwbvtmUWj6EcI6GMVAOVr+IPNExK7ySoO+U1TUomMWxWhyoV0zeN2TCgI3ow7nZQ0mxheZjHkSxQgoX1JNxgqUUwB4JkCRnUToSLSxdWKUFtgSdNzsX6vintI9xPolSyWaCFACV2UBWOo1B8J844a0StBq0whTAFteepyWnMJM8zjF1pzMGLUyIJqk2RYLG+Fy2wPLKjbEJ7KGih1FYowsl8cyxYOJJMoR+P0yzPV5kln9hMc4RJLAN+PUJoNA+QjGU78BVKY59m1HIABdQSSE0qj/dc9EtqryL6eJ6RpKtFR9F65mIFII5nTSl4RdI8kTKPI+1uyAc7iiLa0CJxhIMZk2HftDHQeANpIkKZJ17oe3YUKRJIEkRgrNCL5lOVEM3jcJTqDyd94X9evBDt5wiKpdQCoYVRzJ8/f97cTPrCL5mFUFKbH9TXhD+B8mU6ZZ7+5OYGiuqLBkRlieBwBgUsRCy+M/mJcoMs1hjj44jiGjQdVxGEJOqjyciYDpWCFrRFMaxsX7fPERRLWoiUSpmGpJafE6cxEQWVeZZ4iqMH0tBEHIMEyQByOsMbUsqQHtAX9hFx8BSKsJB4xBsgARk6ZCLyAqxknqWO4gi7XV/ReIlQHpqRzOMNqQiwTxP0s7ZS9lDQRDtBCS3ELOCmnbGqBUKK6QuFdD+ghAIG6qFEI2Ge0O/fMMrEESjubvs5jEJqAfWLwAXlMAq4SyhMhF3PfJ7HqIlez/8gxOtdIQ31RpRGmEeS3PRFkaRdaj/NmHnPQKJTB5Q8hZBL1reHsiTVikaj2Xy+Tv3e1VVof/jQwelHpwOKubrqhcl6TijYPaF5bPEsE3w4KNGL0kyMD9xmILyDIsZc7AkQRwcemsD3+jfs/1CuQR3wdIYoc/+q51kdNZwCGqd35cMv5rMZOQqaWbbBocOFBeNVnioUyziKYkiUIEpXq/HAI1c0hwQzwdiELLPZbFms15Fv7k4CIB6t1wWgzJAEI+WQSCbkWOhtq9UichutGOe1EkDbXWxWY5ufBVluONDl0OMBSVHMg4OTnjn8armERDk1Q1SpVIk9Xm1WwGeeNZDuK4EfQthsYPqTCbdvK1uvqbaRtpoFnbm21Eac6zWUwW0QPR6KcNSzIUoSn3Jbiiyicw7UYyzYShzU4bsYLFAU+rJhutpsVqn2BSptvYZeKhTdAeYfZGDxjkcGz1SEM861oIyfCCyDxhUuE3JI89J1oS8cxosNySJpvgtmRTl3mjyhP+By/FDGFRlsj6KovjmQ3QsX0hEdDcYxZ67ZJkCVrEEAJtMB55EIeUK7/EAixO3F/UOBXw7kZOdPqsWCbBFboQEbbdushexYCRr2FcH43QSaDWnW30VxL0OR3iHsnHSBBGNa2zYIAS2mYBjdSiaGwF7oJQsA6creG/vYp6LwwNxjy2DLzgcQ0xyt3aQbIgEQEmElrS054VUonoJAYARHo4TgGSgeDbyIppvkm8xpYpolbIMgX0GWrBm0khZvnPEmH3cFR38y/BMUjE99CFDYAY817ScbVokAacNo6QZjG/JCUOljlJw8D8WXIyegmfTD3lWo2Wbxa7PZglRVBShfQASMcBnNSmDVEMaTVNCeVo63IOsACo2/JuCC3Y7sp9LVr9VqRSy4BP71E8oXZhEuo6zUsQFFjAURxYdSn46C46+fPP7SUKyEQH6QlPh6p/7ySYeRVuKG3fnAKGrw9FwUHsPpKMnilyL5hvID8n/6+PEjsnxRVlLh90VQfInSMtAKSRqQb/98g+lu8fFjA8OKAZaVQLlSBrpxeL70TBR6niG4bddilDYJyLfHx686CytGoBg2oPTZzBLFfRIKD7MhrgxhegihBQInB/wFozQgINVj+fGjgiEW1ItCgZDr2P3hcCIG2pejjFLVHTqenGFoKEonguRb/VhdXUkUYaQWipyXOPvdoXVsxN8eJMjumDqPLkfaxZ5SgKT+eqWzCAsxitHdKYgGCdOzg4T20ImexOt2BuNxlm+muyhCKeC2y49XGsuyqqvGQMk6z8fjZND1PDl4MSWKddRA+tgWlx/siCBWNDTKkx2Uf9pKUSxfqsftti4kSpxT9lWeZ+PBwMZlEksb2x7XiiVRYnCY1YrK+JHhQ4XOcZRPVw3LJ9BSvd2WEsWEbj0ZZz/oiSAigZu42uTjPEqWEwVC2KjYxm0lyj8tp9VQ6sftGnqnVguCjrn7YTDmp8ubKdl5t4UpWZokqE01kDyKQk25QflUPNbfr4GljSIHLPYgSdL0Aq0oX0mtxsnAafp9GB4eQ/kGnRBzwJ9PFRR3vYPi9fumLA8bgpk2WjkyJdNakMlt2cPAhIHSlIF/H+Wf+hHd9mtVff2CnWO1vr7+rlAsRKGlKwiWYqDtpCKuWOcmH4lEgUw8zjiNQmr5KrZfVOvv14Cy2Wp9kCcK+SkWTRXKJZOPPRTnFEr1uPyK6oC/5fXna0QhlmMo9iUoSivBE1BQLaiOaxgcXH8WKN83x1HM7FIULfC3UKwDKBR28U1xff158plEoNxqbqtQwgtnh3tzZnBb0xwOqUs92Ji/qR069frzZAfl9lahTCZYimt6MvDP1VLp+VWnwPG0/hB+2ENBqcA5cCdSvUaSiSLZQYERv9YZeo6VnW3MWh+UZWP4M4ZeY/Ch2+1CUb0dlB8lOQhUjX8mE10pLRSce0ARH6AoKHCMBT9lqQcC4kr0QDkOTzLozOI2So1WQTedCNFIdJQIOpEMy8ibXmj6BJTYcJyuPeAH4XJ2e2YB8lmy6CQ6ygCy4uOMWcedruOYUfoErRjt0Q5OpOwdrdRQ5eddUSQKxZRvlZoCzfNaIbfF16rzeeI0K+Xt7lCObevH9T5LQ9J221ZZXnR2vCKbEC3hu5jLRM1jOxw6Oyg/fkBo3WNpkfxSKP6QI8Jkgsr2oTdEAwUnW5DWmhNcVPQmP5sQxyjNPKje1t9bLBoI6qRBUSHuBnWNC667y7YnUNIss2hZXaFAgZQxVZNDGDeuqfJ9ECZZKK3ImD3EtTjtDeZprVj6exhfquXGk1rBVQQBs93+/n7dlobkVq4mIIoshYrkxfmovRPlKMquWnBRo2c3617IssoR5fsRkFu1xgLDi1Csrg+pLzyklEONWaol1dUy9JBk3Fg2WYhVDaz5EEjarK+MBxBueTlcU0rbaU+hkFpcVssNDr5CO9toi0m0xAIom+8KRgNZaAuVEOEGtBx+c0oph143iOHTSKnFGdKyeDfb5N3Q7nSaxXQI49vNr+8t0Z0E34XYoQcZO7SuPnR4g4aGYpxB2fEWGvTj8t4Awpz/oaMtlf7CudYOSOMkMGoCZ7+Ch8hsGq6fUMohFNGeNbUoEprD97yOtjaI/dvtERCj0+VFZDDt2JYdyBGlHETZiy0YlIgEfK+P78E83WU2m1+3t42TBK1F26uwP3TIzcYOszRKuRxFqQVJktVq4If0ZseHaYa2VGkEi1slC333MiWk5heGnZVg0ZXS3rR2EGVHLVAAkCQQJilkDnFtHQcRmssIEM020XwOKL0+R8fQHwCLR71P8yrVugAFJ6ykFnqvHfpRjiShxy/twl4Yr7drPX1y++uXHkkMY75dJyGvkUKfga9PoAwvbCmlLcdQlFpg3OIFWZ6QmShi9sH0MLNPwpbLLHTbOGFvtN7kURhKrYT4PHkEE1Q5OnB39xQeQVH7pWDcEltpnvDLzP6E+jNoTZvUQ0+wO/uvDjsdXLbzwZ2hBftDeidMueM8s2icgjtb9nfmH0ORb1ZxODfNYlPO43Gx38PNOza/Gdp/o2rQi5dez4HBMBrX6Tsisx3RkFbf33QhiiVYcEAXR4bNe2qgSBcqiXyxUtjz27k8BhHJBr54A+TYJnRruG9y5/X/RSjCRMSCUxFcbukAkDmGx7VDuWoZBppiTDeUq5GhA84xNgCiM6C+NWOQYyQnUXBndCT2ghIMTo2SBJ8tDWyxghqO0lAsjBlgtDQJxbqoEyRQOSQfc84MQaZi+6PxVBRD7dWkbWcpaWdOkiUuu0CcJ6AaZLFgWHIVc1vzPSMRKSkLb1FTOz6Np6MY2sbRqS5YQQLzX5j75g74ywjrnILD+nkOc23PjIUWGhFbT49Y5zyKITYP63uYea8isKSxbafrFBr3CF+BF+upGfrpOjNt2omRyl2MzV5G3h1sPA9FwcjtvbHcSkz7FZN8PfLMqTDFeup60TqfJmSTqdjdHTc7PA9tZb4cRW55bja8Cx1Nedf03HKRZDbDXSTzaWAwV8qbTJs88lzA8ZMb57Viye3G6hyA3N1MPjNCEtxDQrtE5tNoJFqKtvVWUJw5Q3IeRR9mutqZALIT1o9/hT8w0Uxtjt45H3H6BMSFKFZbmn3f2o7/1sdI7NLW5czDXqqVPRa3OR0gNtc3n2LtGMLFJJcbyNgptnV2gyre+eju8r8ciqGXaRmqYelnZrSP1n6ml0NhgkNHPfbEao9bLzvs9DSUlo4M7byPftSKR/JPP2v1bBRDnX479OVzDn39EcqRgPXM02d/ppUXlXeUd5QXRJnVQorTJ4vLWsnstVDUCfHTqquao+SviVJX1dkqyooS4Sn110Qp+fDmzBCDIzwyjv+O1GdDnk0rKY/6Gv6NOB39HP+5VuioOiTi13OlscQfqqgQFtlFqaRB3ZrO7hV4bi5WJz7/2FfQG/HlbVkW8P8SshbLssIj++U+CiczlkyEyLPly6EgS/1YLZfLmUuKKmZUe6GS6iiYDM8fgWFHUE39WJTwz5+jlPGooGrYQAU9JqnpGAoni+vHWU3Jq8eqqquXQOH/VcJAsyCeFRXlOqoVSLbE4sHJKrd4JF97CZSab3xArZQ4YJyh1atTKBUOLGWsmQEK7p2rXtZXqGkE+DKVIE4ZqIasZVGQi5fgtLM/RhHRvCpHUAf9WBojfM+N5Y6gQ2hQavGJO4GqqPHoa4k/FFCMW9bL/5fu8B3lHeU/ifLvO8o7yjvKO8o7yjvKO8o7yhGU+u1Ryv8ayhan2G8tfP/K9plrVi8puBJzr93V84Yi7up5+A80oYJR8F6n6O1d5UG/7ertBC8Bu9fvAHtj+7RuRnsrCdTNaGih8i1RcPXybvcWvTeRUc0XHe7cLfgGYpXa3YKklip4O5+lqwW1eygL901IcOFxu3c751uw4BWq4qZQ/c7SN2Chy1zbd5byzcNl/Jc9lpboH3bvtyWW+q+GulGpk+i3/tKNzOVfa9TBsn3Trn4XMt9AXJezv+EycVHvXsxsHLiquipe92Zmd1bwldXt66p37s1+UPdmV+VLSdGSslQ3Z/++O3mb+N3DX7lMHDVyd/6O9fuH177bfLt9uL/oune+8v3h1eT+yN3z/wOAO9vKqVjcjgAAAABJRU5ErkJggg=="
				), a5K(14, "bestPlayer", 5,
				"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"
				), a5K(15, "zoom", 6,
				"iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuBAMAAACllzYEAAAAHlBMVEUAAAAhIyA3ODZTVVJrbWqEhoOkpqO8v7vX2tb///8goTJXAAABaElEQVQ4y32Tu1ODQBDGL8QAdlg5dml8dZTa2TijXQpnIh2TwoQOxwehi2PB0flKYP/b7HFv5nALBn5337d7ewshXZyuKX2PST8egUW76OE7EJFa+BhJ9bSsUWFaeTV3GKHbn8EvlB79bjSv4VO8jUr4VdiHNnK938MHPie0Yh+ZLqmGuNsJ7CNURgewI5qPoRE86GwkJyWIBIfcUfJrmMm0sclDyDnPWmLyADacl8jnRbEGKIoiJRP4EmU2LJmIDfLvAf7z/37mv6IUm08pzbV/rx5f1pPA1Fn/iX3eS3nekAslz7gcGw9bg3uqn6Rup5oH+uaTLpO4r0SmZVuUFE2lfTc+z1qr9+BVtGJqzq1RHNfQdAtnrEW75UwuXOFgvj3crpCyDu6UIpP9fPHZU5XkiYVXvsXIPcc+VwspzY2pPorE/NgCfYK+QJ5+QFA6fjQt2A4IWuIWODixe2ELcuIUNJGL+zQle92exY5pfDIaAAAAAElFTkSuQmCC"
				), a5K(16, "apple", 3,
				"iVBORw0KGgoAAAANSUhEUgAAALQAAAA8BAMAAAA9AI20AAAAG1BMVEUAAAAjJCJUVlOEhoOanZkA/wC8vrvW2dX7/fq38z8cAAAEbUlEQVRYw+2YzXOiSBTAGzW6x8ZY6pGYFMMxUct4JGbLcMwld9QpliNkLeUqUvT7s+e9BoUITpIpuWxtp0IJdP943/3B3t7eXtnF2xViGZIbf1+8mVcS3YQKmk3o16AKtLhCdAsqad4be3WrQcdX7BUqalesURXaZM2q0DZr/TfQQVVo8fTXb/LgzO9SiQpon/WPg0fjk5j3cuNnH74ZQPcztOBsegz6xnP7i+i99Tk6ZOwoadwH34LnR5jDBB6j9RjR4vkF4pEF6wmho1EQOyP83uwWuisX1uPgPNpmdciho/5efwiWoiZau86T5QX+ZACL+S0MpEKDVW9/PTMAljq0R026P4/WmJFHx30v2E/9+GFj7KzI8IIZ+K6AZdyCAXbowd3ewN9kkA4McYB+Hs078BG9gNgI/12trJ1L6BGEVjRoRwbZOsbrfipaqa1nUXvQOY+eB1kUIXpv+BAZ0VM8DI5od7id4auh7DBK0VOJ/rEtt7WYqXoAmxvlLn0f94Tp7qx3K24LFRL0IrCDOxiIzgZtLbqim6INQosevJSiTZwtr2ccr6lWsaJ2IFaRocM4Re/x0WIwhEV7hD2e1GmCjtUA0fB0Y5Shw9x8bCWPtlu6BIeswD95K7YiTT6xpWQJZG7ic7ovQ9/n0MZFa4jIkeuXLU/hpYXO0H4O7V4WbWfkWvZ6NT4zbp3F6HfQOVNzpXx8RDHalcX0c7SZobM5XpwzjqlMHA0/azf/FL1XeKlLBccKF6G7v4vObL2rm6WzciznC631NXTO1pl97ZZHKtxMl/wOdWiLG+UxQVO+btwFV7AMrDk99bvvbYhvFL2A9op5jnL1Q1KB38lgDxUz/a5gvYM8CsToUsUFr85rMqWnp+hdDt08mtSKGKI413/yOmaVMl8m+aQpE9nBbGzBV17WaHtPuXYipm+0xil6n0Mr7sGkgSAVUBxMqSAkWbVmmmBtqp9k63v8t2uotgs+dgwP9jyi4/xOJHVkqJBNEN2ieLBCikSvlqxWsJcu0YKCCHn0wqb6eojXrPLxIpp8aKJMvE/mnYZknJ1ySEfyCaFJL7SbVycFHMc5uCpDm0Vjmw3HMXGEDG5mkBJSk6Qt0T6IllLihdCaHD09RfvF0id7KglaFNBk9lN0nXZfBYNEhdInmIoNbwoGiZ1EqYJBWuWrJ+20PkX0CZQWeDN1I0LsuizuFAWmlBoSNwKhZXJugwLaP7VH4jGth8EXwELB4OtiPDRlOP3ACwazjY6+J2fXJdrHjlExQmRWfUh0WwY/ysbV6xkWrZDx8cMxZRwNlfDYLYqkk0cJHbGOo9VKljgLpky2K04SJROxfIXxynVOfg+VBcal/O47S9YUe/Sy0ORTQsswM0rQ4iepsnEO96pcaYdqwI31YCINOrtNtV2pqpxl1nNUd0hPo7lcJg0m39rLpEU7F3cX2yb9jz5paRJ8WNF9BV3hRrrC7X+FhxYVHrVUeEBU5bFWhYdxb6+Nf7YXbpv0CLGqg89fkK30UIXyeWIAAAAASUVORK5CYII="
				), a5K(17, "loading", 6,
				"iVBORw0KGgoAAAANSUhEUgAAAZEAAABGBAMAAAD/Q7RHAAAAGFBMVEUAAAAnKSZKTElucG2Fh4SoqqfLzcr///+y5yZlAAAEnUlEQVRo3u3aS3PaMBAAYGNsuHoy0+TKTJv6SjNNfeWSciVNJlydF7qGl/n7JTGSd1e7wgaFaWfMKfFD1qeXV5KD8cb8kuC//rWSVtJKWkkraSWtpJW0klbSSlpJK2klraSV/KuSbw9qe8HsfnCyfHVuZu95Kmb3iUdJ+KAvKf7gM119vDoUb8Bv9gLsu2PD97+n4O/tr1/+OzHXXiqTRjHyJukqkLcndKqnDw94yTYfty7JoyD5jtIYeZJ0FEr2Fp670EcnkgScYiRrXkJLI/EjyUjOhtzduSwpBrJEJ4YloSJJPHqRRDRnK3DSPHIpS8w5TjLnJJlVGIkPydjKWdVsw+pZDokueE5SMJKunULuQcIky5a/S7KQJbtiQZLUTmHlQcIkW13YYyqKkRQOycKWKNcjD5dwyebMYJA7JLscspLCknAJgLHxUEnEJbtkmAuXZC5LysqEEq4V1OkoeySm/bxenf22ujd41NolWTskCyoxxfNydXajrL55qCSDXe4LeaNHdl8wkiLofP2NxwNeUhBJiKKJiBbUwRKFBtIxbrVlha3wCzMGGYzROMxLPhIDkhjn/aOtFa93x0o6uHJ1Cb3Bce1NoZYMJabN5w7JEkv6uLSibQT+w0PcFZGhQyFYmZ18CnVY0q0hKbAks6JrL1F9j4S6Gar50jVK0csLSTR97pC85x9IprW7+CESU0B9psCTHroGS8ZgwJAkSyRRqAF7k/TJyIFkWhCjesOSC5CAJNk+GEjqvwobSVIS9sRwVO3vzoXo2TEXGhZOSQ4knUazq/qSDMXe1QgAbp3rBpFzkl4dyQpIurBnqibhilsyJo2WeU6us7U8WLIZ2JLgkyUhkFSNKoN5x5K4liSvJNEnSaZE0gG5ic1dfThFaSTRQ9vpJbBOqsE3hp20kUS/r9JPl0itKzGjwbrqPXlzia5jdXIJ7I+qCsrhFKVRjyeLD6DHJ54lrlEYVIQC789mkliSDD1LUhIEgTdjJEzXm0nw7Bq840eeJY5opSesBrHv+LUoyQTJ5BgJM113RJCpMNnGknSfJKYSGEH6l3BR/dS+4c2WwBidlaDmxUX1oR+JMNNa8MtHK0vSgUZekhIJnWl5kpDZb7fKGLM2iebuBZqp5bIk3rBTepN1TxJT8gO00jJhO3x5FZSYDYuJLKGdgaxI6P9BwxuZgyt4cI8kYxrOR4770kphJTm7VmhZSZCk+H68ShRcbjxJ4MrdNWxFY2mlMJaanSSJyAClwCN/Pmx8SaJ9zc46wUkWLglISl5NPV4irXCH7B1F0xVuvMXnWOH2IBF2HWLcLUE81mjXgWzRTODI7VvSdfafBZmBjRruBKHXp667jKvt5GiJsDuXkXBfmXbXaHeuPHGOJVzfHAXHS/gdU0W2Naam9BvtmJIdwIn0jnsKPEj4XWy6KlVFio12sXE5aElX2GY8VkJ2xx9hRSV2kByLW8WypEcilHNuI+l4Cf7a45ldLzZ5GVrfN4yC/ZKQhu6/ECTxJQnCKoK/s6cdqDfl5AscuIMjS/S/7Bc4z3SlR5DU+5VfRRWvp/sqKiy/iqr/IdZfF1HJgRmsN+0AAAAASUVORK5CYII="
				), a5K(18, "target", 7,
				"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAMFBMVEXUAADUISLWQkLMTQDZZmXAdwC0lADgiIioqQCWvgCE0QAA/wDnra1i6ADw0tL////afMd+AAAC6klEQVRIx42WTWgTURCApzFNY2lLBKEX0dy8iA0UxB8CKgUv0gaKBS2B3HOJnkUDQrENQi6KEITcgydR0l0CUYReJBZCi3YpaC+9FANS6GXZ5+6+eT+z+1adS/ImX97Mzs4f2ET2916vPV9/61At6Ifeq2UIZWXDSYK+IxLIlY4Z+ga6jL8xQbsFoFQrDtF7QqoThaxSDIKsE4HqYJAyhXZNDJxq6VCvZIQgq0NDSJCGgnqFJCiroB2lHTvjS06dWxJSHl0cjBjztm5JxXUBdaXqro8E4j2UD+gg1BamFpkQ75GgVjkkn/8SU+LVUHmaQx/wmB5pEHNzyh4oa08ZkU+oroZQhR8mKMO8PNdPBpBlvoixA67PBBC6lI4yzJVOgb3Nv1+OQawm3h9gJo19jUPHHLrhQ4UEazIKkzZYHJoRvxwuLAzE95voOWzyO5dQ/zkw/QQPfe65DfhwGO2T8JBCB39zqAM8l1Ij3QBMkSC0YFsP94nIB/4fj3vegLb+175IkCX94io0w8/zXJkX0IwezjLUNciTKZrWoSJCF4hLvlCookHHChppPhaB5+7c36BpvOm/oH+Y0x13VSFTx5vGEEzQOPGInyO5KPOUR3yVvrsDIFWBBVOFoR5hlwYczTfgPUmVj1y9SJKiBdhSMM3c0ItZzMwfWFMifeeYomZHpKb89MVWOCWr++hXpNCzfkmViFO6oEvTPtROaAWM/RRtDOx3QO0pyYveCjZ6HreH1saDhiGaeKxj9GUrBzl70iNj54FiCA3BeFVNtXsfEq2Odh/xrjPYxyuG9nuU00YC6DPqrKTcvD6nAshSNclbk3coR1BGDqCmpFJ3Hg++bN2OTNgQ6uojTh9kfP7g5KwnDcWiNl67CQy/SEzzhKvKZORvGqdwxqHLw47JWCOyYfSexaEHsYUmvj9cM6xG1jJlrjqmJcsiFu875nWt91I+4/yLxMXP3lu753PzK+tO8nYY3LbvS2SDtP8A+ntynBIvYeAAAAAASUVORK5CYII="
				), a5K(19, "members", 7,
				"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABSVFGanJkA/wDMz8x4/3ey/7L///+GDHoaAAACZElEQVRIx9WWwYrjMAyGlVCYa6cs5JqGQh5gaObaDYU8QJnOA5SS66RN49dfSZZt2U2WZZeFXc9h2r9fZEmRJcPbLyz4d6GzMdM1/uXcG3PV0KehFVFnlh4Baoxdl8BEEkF7EcwUoN5pJ4HenRBMNV66C4QfxxI2nTKFhsYt5CgZC9FTawDIxbg4UKKUWevAuw1Aq/D7NUq6M9RbQ2zKhkwpKVnK2AWGRrCrc04lEpDfgyg1u8mh3EQqSGLoS5QXY/a4+XSKJIIwkkNQOIlTgFYUcQq59TuQcrwI0PDk+M3Hayh2+RcC1smkl3DDj1ltlMR5old38LutHT04l/BVAVfOSL9lnXelUBKaAltxt2gTv3Ft6w6k4sajdtf6zhLVHUHltzTwkIzvOUGf9PhOJJdVdphWS0YfFnJUCrVgISmdTVWVnVQa19+YV9VWKgohl2+MRUFKjaAXDX0tQCvt0+HPIJWnJajWGV9wPDPutPFhXs9CK+PLr1aJjSF+5aUzpOQY6mwZURWNCRRO9JZq43ikMtnog44v2LlojK1EW6n4zYXz4HqSb/gsty1qaWjAt5o7NAEiL7Jdu2vX7IqHLikEIYdzUJ5CZQQdJJcJ5GSE9i5tC1BNR4oadGub76ChwrZfKn48wTRXsGfrQvHFQr0dmy245o8nMYHGoxsToMZIAoWBA2qOzEMXmVJiK4nO2jn5oXju5yGZpn4Gf/QpNH08D+pn6O3vQqOGulkIX0+1fbXd93VT+dkXQe/SO3F1fkSnUBjgT7cEdVdJodkLTbNkKLr1NH1ApstPrkbnK/39B9e1H85NJPjxrK7zAAAAAElFTkSuQmCC"
				), a5K(20, "hourglass", 7,
				"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABKTEqZm5gA/wDJzMh3/3iz/7L///+iyVF/AAACjklEQVRIx72W3aqyQBSGJwk6dceGTv1C8AJEO60QvACJLkDI02xPrtvf75pJ58cx2iffIqT0aWb9vGuNIrft0hSX8WqZ4Etxg9HM+G4zQVdatOcEdSSrqkr3juFOVdMwQXQUC7YmAyVLUPQZ1PxtJSJ5js7KX7j/+pKkNR5Y0RE9Ij/6JMPFRFfebt0cOmbD7dZOEOwQgn7ssnwOrf8rJAMp8KFSrnwormcQCR8S1HpQgT8qVVXnVCsJS/tQzlV4mMpmJLUCXOi4I2mgmnotOAfqcJPiCUIGNsMMunJdEqMjbP+cQQcOrx+hnZ0BA5XsuTQuPUxwBoLnZj98Oxq/LaiTHNK4G34MAQj7jfGhQqeIfgJQzm7ofELccUZ5CDpQjKBO3LbUr+gZhAo8QhMl8FoCb4IQhkvyUt7JWciBCnhUa5VkJkkexEtxQ3KjPvMlqKD7hk7fdF/bHnlQfoUU4LglgBCElVCP+ztIbQfDdXk7OL5jqH/juE7BA4pBUZr8XTJZMadoKZklKlxriMvSBqGO4m8ejJmuy5AH9aTqq02CbwPQlfeYDH94ziEWilqDW5xniiUWq6VUjs6szFTnat5SHYuXdcnGAcTZrINLrpmZGJnqqXY26WLONJ7rfqm5qfwh1vXckPahAh8HD/Imjzt7xJgACLe3oZ01xYQ1Mo/umWmGprBOjcQ96cyEEtacc89DrDx6PkJQrHSh2kjdgh4ulH0C7YIQuS8P3nYlDa9ecg33OpUF8TqnFyB9UitIVujsALSmqp6g+/5fHKVpxQfQqM6q2ier7X5joFdAMX++YrEyMc6hgP0RkuoVZbvfTqfU6gs/VbZG6M3bmn5fE0pxb6x1Ori4eNbkY3f+AriuYpjQCOoxAAAAAElFTkSuQmCC"
				), a5K(21, "stalemate", 6,
				"iVBORw0KGgoAAAANSUhEUgAAAeoAAABABAMAAAAnsyk1AAAAElBMVEUAAAA8PjxeYF2Rk5C6vLn////ACCfyAAAFMklEQVRo3uXby3qjIBQAYBEfwO+buM9c3Ntp2ZOZ8ADx8v6vMp2qybmBCK6SbNomEc4vcAS0RbG+1Iebvl5/vxev8lIf0+M1nl8DXboJvd5eET1N3QuoGfoVOvlp4q/+6fv3JL2evY83orp/uVH9NbLrp0braXrBLt541LenVpsH9Ao7+/DUc1E0kuF85ZkHdokHMriMPfNEpbo39fx3e1fbV1D3NKVb8KEn1TkpCShvbxET50gvnzdaDG4A520mfhHSvg+oWsHaN9QlCf0Ydc+vqFYqfUk8SeqGNpcDtW+oKzEJ5KqHghYO1ZrOKPLUa842oPYNdbPRGmnqka+JrDAi13eT1Cd6jj9LuV7ff/+g51tQG3FOk6sWei5Qt3Qo5I1raVG9oXbinCZb3dFTCtWszlz1ZwRve9Qli/0YtfW8QzP73CmS1OQD7A6r0aHn49QXxrPyWqlLVrM9BegOqxt5iZat7tleh5UjsslqYXk91HFqIy/RstWDzOOjuE9XC0eNXZQana/hOPUYUBtWZ5q6CmwpBNWlEHykug9v6NQUY8VkNu/3RKlH/1KTs4NqciLPx6k72qjWs/HTJavlw/C1Wwz35Nlxyldb6Q2pGay0OyJNX8fIneFhM9ylmhFeb45RX2gPtKSFRmGXa6e6+LW5WyiGuwTaO3KactTj+nGJdJbQBsebZq9a3hseNsJdcdaRgnPUw1q1FtVq+drNcMxudSmyz+Fw1xK7luyzZandEuM8gP8SyFqnbXkNu9Uy+xIOd00s54YMiZ3X65qrP9+bv/pOIGudXcWFJrwYl4auxB7C6jWx1DSCLLVZDpx//iRFrwXUmqezBHVRfPji8anvw1mTz7LUzRL4/Pc3ArkP55K3TJI6eOteUKv7O4qMnSz13HHsnLZGjSHqkbodG69p6qL45nxzAEEN+pjDfSNLPRfbl/CveyTlIwrDqkhV0/a+hdRgNBtcXJYacXuiBnW2jJCuxjOWPqRu+YajPUA9HzwuHZ2oG77ddztEDWe6Q0htHkFXvh31BPXySyuqQbeuWIz71OWP948rOLyNUsMUpvH389Rz8MsFjKgduA3Jph971C2bvegoNZSWGJCnhivAGquhVLE68tTKxagraVOlO0ANd6oLrEYTA0dH6R51w0OMUouLcps/D8d5BavFk3ZJmYdXPLWZGLXxP7eUpy5hcVhtgkvDNPWlEG7v+cJVgcVpnlrBZtTe+wJ8v26PmucuFTNL0YGntfLUwGaxWt7zua8W9qgVu3rrmBlpFXhaK1NtQGlIrcNPiO1aXzva2CZm9eF5XMseoG5BKyL1Sa7zkqIGKeIPKTuw0jSBmwPK+1GU+gQiRWpPnX2KGp7B8ffPa9SugpzMlkMi1LyLOv6kwEDUnjrHvdfr/6H4HqhE+xRU7UksczrLVGtQF1QrX5x1gtp3CtHahKq990TO+WolNIkNPO+6xrlP7btjMgbSUOOLwOar781gsfoUqnO3Wm93cKY25MxoeFCu2vD7VBa0zkhv2fQpal9urANq55vZDAeowV63Fm58DXR6OCSpq+AFQVKXrD84aRGYqG74yt2CUns206hT1GI+w/8KQNTV5Ln/9NVAuepKVGt2pg1OZ3vVenNziagb9q12ElolUa0fVQE1P9PNJK/IItVCerwEp5KGTTkbUGKuuuSZFmyKPs505QkqVs3Yf8ITaMeGAZxQ5aqX3y1WO5ZlNZ5E7lfjjfCxK4Lqkl/S4YT3IHWH1IrXWeIclKD+LGP9T+Tr8/9r6j/yRPVUqj3rEAAAAABJRU5ErkJggg=="
				)
		}
	}, this.get = function(fx) {
		return gM[fx]
	}, this.ur = function(name) {
		for (var eD = fs.length - 1; 0 <= eD; eD--)
			if (fs[eD] === name) return gM[eD];
		return a5G
	}, this.g1 = function() {
		return a5F <= 0
	}, this.a5B = function() {
		a5F = 0, a5I()
	}
}

function bo() {
	var a5V, a5W, a5X, a5Y, a5Z, a5a, a5b, a5c, a5d, a5e, a5f, a5S = [224, 224, 224],
		a5T = [
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
		a5U = [
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

	function a61(eg, a63) {
		a1V[eg] = 0, a1V[eg + 1] = 0, a1V[eg + 2] = a63, a1V[eg + 3] = 0, a64(eg)
	}

	function a64(eg) {
		var fI;
		ay.kS || (fI = a2.je(eg), eg = a2.gB(eg), ay.kS = fI >= ax.a1U[0] && fI <= ax.a1U[2] && eg >= ax.a1U[1] && eg <= ax.a1U[3])
	}
	this.cq = function(qT) {
		if (a5V = new Uint8Array(ed), a5W = new Uint8Array(ed), a5X = new Uint8Array(ed), a5Y = new Uint8Array(ed), a5Z = new Uint8Array(ed), a5a = new Uint8Array(ed), a5b = new Uint8Array(ed), a5c = new Uint8Array(ed), a5d = new Uint8Array(ed),
			a5e = new Uint8Array(ed), this.yP = new Uint8Array(ed), (a5f = new Int32Array(4))[0] = -4 * ap.e8, a5f[1] = 4, a5f[2] = -a5f[0], a5f[3] = -a5f[1], hL)
			for (var oz, iK, eD = ed - 1; 0 <= eD; eD--) iK = b4.rT[b4.iL[eD]], oz = eR((a5U[iK][3] + 1) * aL.random(), aL.value(100)), a5V[eD] = a5T[iK][0] + oz * a5U[iK][0], a5W[eD] = a5T[iK][1] + oz * a5U[iK][1], a5X[eD] = a5T[iK][2] + oz *
				a5U[iK][2];
		else aU.ig && aU.ih.a5m ? function(dl) {
			var eD;
			for (eD = pl - 1; 0 <= eD; eD--) a5V[eD] = 4 * dl[eD][0], a5W[eD] = 4 * dl[eD][1], a5X[eD] = 4 * dl[eD][2]
		}(aU.ih.a5m) : (function() {
			for (var eD = ed - 1; h0 <= eD; eD--) a5V[eD] = 4 * eR(64 * aL.random(), aL.value(100)), a5W[eD] = 4 * eR(64 * aL.random(), aL.value(100)), a5X[eD] = 4 * eR(64 * aL.random(), aL.value(100))
		}(), function(qT) {
			for (var eD = h0 - 1; 0 <= eD; eD--) a5V[eD] = 4 * qT[eD].a4t[0], a5W[eD] = 4 * qT[eD].a4t[1], a5X[eD] = 4 * qT[eD].a4t[2]
		}(qT));
		! function() {
			var eD, ei;
			for (eD = ed - 1; 0 <= eD; eD--) ei = eR(a5V[eD] + a5W[eD] + a5X[eD], 3), a5V[eD] += a5v(ei - a5V[eD], 2), a5W[eD] += a5v(ei - a5W[eD], 2), a5X[eD] += a5v(ei - a5X[eD], 2), a5V[eD] -= a5V[eD] % 4, a5W[eD] -= a5W[eD] % 4, a5X[eD] -=
				a5X[eD] % 4
		}(),
		function() {
			for (var eD = ed - 1; 0 <= eD; eD--) a5V[eD] += eR(eD, 128), a5W[eD] += eR(eD % 128, 32), a5X[eD] += eR(eD % 32, 8), a5Y[eD] = eD % 8
		}(), this.a5s(),
			function() {
				for (var eD = ed - 1; 0 <= eD; eD--) a5Z[eD] = a5V[eD] < 32 ? a5V[eD] + 32 : a5V[eD] - 32, a5a[eD] = a5W[eD] < 32 ? a5W[eD] + 32 : a5W[eD] - 32, a5b[eD] = a5X[eD] < 32 ? a5X[eD] + 32 : a5X[eD] - 32
			}(),
			function() {
				for (var eD = ed - 1; 0 <= eD; eD--) a5c[eD] = 235 < a5V[eD] ? a5V[eD] - 20 : a5V[eD] + 20, a5d[eD] = 235 < a5W[eD] ? a5W[eD] - 20 : a5W[eD] + 20, a5e[eD] = 235 < a5X[eD] ? a5X[eD] - 20 : a5X[eD] + 20
			}()
	}, this.xL = function(player) {
		var dl = al.dg;
		return dl[0] = a5V[player], dl[1] = a5W[player], dl[2] = a5X[player], dl
	}, this.a5s = function() {
		for (var eD = ed - 1; 0 <= eD; eD--) this.yP[eD] = a5V[eD] + a5W[eD] + a5X[eD] < 280 ? 0 : 1
	}, this.je = function(eg) {
		return eR(eg, 4) % ap.e8
	}, this.gB = function(eg) {
		return eR(eg, 4 * ap.e8)
	}, this.ps = function(fI, fJ) {
		return Math.floor(4 * (fJ * ap.e8 + fI))
	}, this.q7 = function(eg) {
		return this.pP(eg + a5f[0]) || this.pP(eg + a5f[1]) || this.pP(eg + a5f[2]) || this.pP(eg + a5f[3])
	}, this.q5 = function(eg, player) {
		return this.a5w(eg + a5f[0], player) || this.a5w(eg + a5f[1], player) || this.a5w(eg + a5f[2], player) || this.a5w(eg + a5f[3], player)
	}, this.v6 = function(player) {
		return player < h0 && 2 !== h2[player]
	}, this.ej = function(eg) {
		return 208 <= a1V[eg + 3]
	}, this.qC = function(player, eg) {
		return this.ej(eg) && this.a5x(player, eg)
	}, this.a5x = function(player, eg) {
		return player === this.ek(eg)
	}, this.a5y = function(eg) {
		return 208 <= a1V[eg + 3] && a1V[eg + 3] < 224
	}, this.hU = function(eg) {
		return 224 <= a1V[eg + 3] && a1V[eg + 3] < 248
	}, this.q6 = function(eg) {
		for (var eD = 3; 0 <= eD; eD--)
			if (this.fh(eg + a5f[eD])) return !0;
		return !1
	}, this.a5z = function(eg) {
		return 192 <= a1V[eg + 3] && a1V[eg + 3] < 208
	}, this.a60 = function(eg, player) {
		return this.a5z(eg) && player === this.ek(eg)
	}, this.eb = function(eg) {
		return this.ej(eg) || this.el(eg)
	}, this.fh = function(eg) {
		return 0 === a1V[eg + 3] && 2 === a1V[eg + 2]
	}, this.el = function(eg) {
		return 0 === a1V[eg + 3] && 1 === a1V[eg + 2]
	}, this.pP = function(eg) {
		return 0 === a1V[eg + 3] && 3 === a1V[eg + 2]
	}, this.fg = function(eg) {
		return this.pP(eg)
	}, this.a5w = function(eg, player) {
		return this.el(eg) || this.ej(eg) && player !== this.ek(eg)
	}, this.ek = function(eg) {
		return a1V[eg] % 4 * 128 + a1V[eg + 1] % 4 * 32 + a1V[eg + 2] % 4 * 8 + a1V[eg + 3] % 8
	}, this.qD = function(eg) {
		a61(eg, 1)
	}, this.a62 = function(eg) {
		a61(eg, 2)
	}, this.q4 = function(eg, player) {
		a1V[eg] = a5V[player], a1V[eg + 1] = a5W[player], a1V[eg + 2] = a5X[player], a1V[eg + 3] = 208 + a5Y[player], a64(eg)
	}, this.ec = function(eg, player) {
		a1V[eg] = a5Z[player], a1V[eg + 1] = a5a[player], a1V[eg + 2] = a5b[player], a1V[eg + 3] = 224 + a5Y[player], a64(eg)
	}, this.hV = function(eg, player) {
		a1V[eg] = a5c[player], a1V[eg + 1] = a5d[player], a1V[eg + 2] = a5e[player], a1V[eg + 3] = 248 + a5Y[player], a64(eg)
	}, this.a65 = function(eg, player) {
		a1V[eg] = a5S[0] + a5V[player] % 4, a1V[eg + 1] = a5S[1] + a5W[player] % 4, a1V[eg + 2] = a5S[2] + a5X[player] % 4, a1V[eg + 3] = 192 + a5Y[player], a64(eg)
	}
}

function bp() {
	var fs, eX, eZ, a66, a67;

	function a6C() {
		for (var a6K = 0, eD = 1; eD < 5; eD++) a6K += eX[eD] % 1024;
		return a6K
	}

	function a6B() {
		for (var eD = 1; eD < eZ - a67; eD++) eX[eD] = parseInt(eX[eD])
	}

	function a6D() {
		eX[0] = "Player " + Math.floor(1e3 * Math.random()), eX[1] = aK.g3 < aK.g9 ? Math.floor(1 + Math.random() * (Math.pow(2, 30) - 1)) : 0, eX[2] = 1, eX[3] = 1, eX[4] = aK.g3 < aK.g9 ? 0 : 1, eX[5] = 0, eX[6] = "000", eX[7] = "0", eX[8] = "0",
			eX[9] = "0", a3.a6E()
	}

	function a6A() {
		for (var eD = eZ - a67 - 1; 0 <= eD; eD--) eX[eD] = h.qx(eX[eD]);
		eX[0] = h.qv(eX[0])
	}

	function a6N(name, value, a6O) {
		var a6P = new Date,
			a6O = (a6P.setTime(a6P.getTime() + Math.floor(31536e6 * a6O)), name + "=" + value + ";expires=" + a6P.toUTCString() + ";SameSite=Strict;Secure;path=/");
		document.cookie = a6O
	}
	this.cq = function() {
		if (!(5 <= b7.dc || 2 === b7.id)) {
			a67 = 4, fs = [], eZ = 10;
			for (var eD = a66 = 0; eD < eZ; eD++) fs.push("u" + eD);
			eX = new Array(eZ), ! function(a6L) {
				for (var hY, eg, a6M = a6L.split(";"), eD = a6M.length - 1; 0 <= eD; eD--) {
					for (a6M[eD] = a6M[eD].trim(), hY = 2; 0 <= hY; hY--) a6M[eD] = a6M[eD].replace(" ", "");
					3 < a6M[eD].length && (hY = fs.indexOf(a6M[eD].substring(0, 2)), eg = a6M[eD].indexOf("="), 0 <= hY && 2 === eg ? eX[hY] = a6M[eD].substring(eg + 1, a6M[eD].length) : 0 < eg && a6N(a6M[eD].substring(0, eg), "0", 0))
				}
			}(document.cookie), eX[9] || (eX[9] = "0"), (! function() {
				for (var eD = eZ - 1; 0 <= eD; eD--)
					if (void 0 === eX[eD]) return;
				return 1
			}() || (a66 = 2, a6A(), a6B(), a6C() !== eX[5])) && a6D()
		}
	}, this.a6E = function() {
		if (2 === a66) {
			eX[1] = 0 === eX[1] ? Math.floor(1 + Math.random() * (Math.pow(2, 30) - 1)) : eX[1], eX[5] = a6C(), ! function() {
				for (var eD = 1; eD < eZ - a67; eD++) eX[eD] = eX[eD].toString()
			}(), ! function() {
				eX[0] = h.qu(eX[0]);
				for (var eD = eZ - a67 - 1; 0 <= eD; eD--) eX[eD] = h.qw(eX[eD])
			}();
			for (var eD = eZ - 1; 0 <= eD; eD--) a6N(fs[eD], eX[eD], 1);
			a6A(), a6B()
		}
	}, this.a66 = function() {
		return a66
	}, this.a6I = function(hY) {
		a66 = hY, this.a6E()
	}, this.a6J = function(eD, value) {
		5 <= b7.dc || 2 === b7.id || (eX[eD] = value)
	}, this.rx = function(eD) {
		return 5 <= b7.dc || 2 === b7.id ? 0 : eX[eD]
	}
}

function c9() {
	var fx = 0,
		a6Q = new Uint16Array(32);

	function remove(uu) {
		var eD;
		for (fx -= 2, eD = uu; eD < fx; eD += 2) a6Q[eD] = a6Q[eD + 2], a6Q[eD + 1] = a6Q[eD + 3]
	}
	this.cq = function() {
		fx = 0
	}, this.i5 = function() {
		var eD, hR, h4;
		if (0 !== fx)
			if (0 === h1[eU] || a4.a6R(eU) === a4.eE(eU)) fx = 0;
			else
				for (eD = fx - 2; 0 <= eD; eD -= 2)(hR = a6Q[eD]) < ed && 0 === h1[hR] ? remove(eD) : (h4 = a6Q[eD + 1], (ed <= hR && fl(eU) || hR < ed && fq(eU, hR)) && (aW.fb.fm(h4, hR), remove(eD)))
	}, this.fo = function(hR, h4) {
		! function(hR, h4) {
			var eD;
			for (eD = 0; eD < fx; eD += 2)
				if (a6Q[eD] === hR) return a6Q[eD + 1] = Math.min(a6Q[eD + 1] + h4, 1023), 1;
			return
		}(hR, h4) && 32 !== fx && (a6Q[fx] = hR, a6Q[fx + 1] = h4, fx += 2)
	}
}

function a6T(player) {
	a6U(player), a6V(player), a6W(player), c.eT(player), e.jS(player), a4.clear(player), ak.a6X.a6Y(player)
}

function a6U(player) {
	a2.v6(player) && rI++;
	var a6Z = a4.a6a(player);
	0 === a6Z.length ? player === eU && a6b() : (a6c(player, a6Z), a6d(player, a6Z))
}

function a6b() {
	b1.eX[17] += eV[eU] + a4.a6e(eU), u.show(!1, !1, !1, !0), t.a0z()
}

function a6c(player, a6Z) {
	for (var eD = a6Z.length - 1; 0 <= eD; eD--) a4.a6f(a6Z[eD], player)
}

function a6g(a6Z) {
	for (var fx = 0, eD = a6Z.length - 1; 1 <= eD; eD--) ez[a6Z[eD]] > ez[a6Z[fx]] && (fx = eD);
	return fx
}

function a6d(player, a6Z) {
	var eD, wN, a6h = a6Z[a6g(a6Z)];
	if (9 === ij && 1 === b4.iL[player] && aL.iE(8) && aM.a6i(a6h), player === eU) 2 !== h2[player] && k.r7(a6h, 1), a6b();
	else {
		for (wN = !1, eD = a6Z.length - 1; 0 <= eD; eD--)
			if (a6Z[eD] === eU) return wN = !0, void k.r7(player, 0);
		!wN && player < h0 && 2 !== h2[player] && k.w6(0, player, a6h)
	}
}

function a6W(player) {
	h1[player] = eV[player] = 0, ea[player] = null, er[player] = null, es[player] = null, ev[player] = null, aQ.a6j(player)
}

function a6V(player) {
	for (var eg, fJ, fI = hs[player]; fI >= ht[player]; fI--)
		for (fJ = hv[player]; fJ >= hw[player]; fJ--) eg = 4 * (fJ * ap.e8 + fI), a2.qC(player, eg) && (a2.qD(eg), ez[player]--)
}

function cE() {
	var input;

	function a6k(dE) {
		a6m(dE.target.files)
	}

	function a6m(files) {
		files && 0 < files.length && aT.a6n(files[0])
	}

	function a6s(dE) {
		var iK = new Image;
		iK.onload = a6t, iK.src = dE.target.result
	}

	function a6t(dE) {
		var a6u, dE = dE.target,
			g3 = dE.width,
			g9 = dE.height;
		4096 < g3 || 4096 < g9 || g3 < 10 || g9 < 10 ? (a6u = "Image w & h must be between 10 and 4096.", b7.oS ? b7.oS.showToast(a6u) : alert(a6u)) : (aU.sx(), ap.pZ = ap.a6r(), ap.a4K = 0, ap.e8 = g3, ap.e9 = g9, ap.pB.width = ap.e8, ap.pB.height =
			ap.e9, ap.p7.drawImage(dE, 0, 0), a6u = ap.p7.getImageData(0, 0, ap.e8, ap.e9), ap.pC = a6u.data)
	}

	function a6v(dE) {
		dE.stopPropagation(), dE.preventDefault()
	}

	function a6w() {
		return 0 === x.rp() || 2 === x.rp()
	}
	this.cq = function() {
		(input = document.createElement("input")).type = "file", input.setAttribute("accept", ".json, .png, .jpg, .gif, .jpeg"), input.onchange = a6k
	}, this.a4v = function() {
		input.click()
	}, this.a6l = function(dE) {
		a6k(dE)
	}, this.a6n = function(a6o) {
		var dl = a6o.name.split("."),
			a6p = dl[dl.length - 1].toLowerCase();
		"json" === a6p ? aU.oQ(a6o) : "gif" !== a6p && "jpg" !== a6p && "jpeg" !== a6p && "png" !== a6p || (ap.ih.pY[ap.a6r()].name = dl[0], (a6p = new FileReader).onload = a6s, a6p.readAsDataURL(a6o))
	}, this.sf = function(dE) {
		a6w() && (a6v(dE), dE.dataTransfer.dropEffect = "copy")
	}, this.sg = function(dE) {
		a6w() && (a6v(dE), a6m(dE.dataTransfer.files))
	}
}

function cC() {
	this.a6x = null, this.cq = function() {
		this.a6x = 10 !== ij ? null : new Uint32Array(ed)
	}, this.i5 = function() {
		10 === ij && this.sB()
	}, this.sB = function() {
		for (var eg, target, a1A, a6x = this.a6x, qT = iN, tl = eV, eD = iM - 1; 0 <= eD; eD--) eg = qT[eD], h0 <= eg || (target = Math.max(eR(tl[eg], 4), 2048), a1A = Math.max(a5.a1B(eg), 100), a6x[eg] += eR(a1A * target, 1e4), a6x[eg] >
			target && (a6x[eg] = target))
	}, this.tr = function(player, hS) {
		return hS > this.a6x[player] ? (hS = this.a6x[player], this.a6x[player] = 0) : this.a6x[player] -= hS, hS
	}
}

function cF() {
	function a6s(dE) {
		aU.ig = !0, aU.a73(JSON.parse(dE.target.result)), aU.xC()
	}

	function a79(fw, min, max, a7I) {
		return "string" != typeof fw || fw.length < min ? a7I : fw.length > max ? fw.substring(0, max) : fw
	}

	function a74(db, min, max) {
		return db = "number" == typeof db ? Math.floor(db) : min, Math.min(Math.max(db, min), max)
	}

	function a77(db, oO) {
		return "boolean" == typeof db ? db : oO
	}

	function a7B(db, eZ, max, a7K) {
		var eD, dl, oz;
		if (!Array.isArray(db) || db.length < 1) return null;
		for (dl = new(8 === a7K ? Uint8Array : Uint16Array)(eZ), oz = db.length, eD = 0; eD < eZ; eD++) dl[eD] = a74(db[eD % oz], 0, max);
		return dl
	}
	this.ig = !1, this.ih = null, this.sx = function() {
		this.ig = !1, this.ih = null
	}, this.a4s = function() {
		this.ih.a5m && this.ih.a6y && (this.ih.a5m[0] = a8.vZ[2].rB.a2l()), uJ(this.ih.a6z, 0, this.a70(), this.ih.uM, !1, !1)
	}, this.a70 = function() {
		return [{
			name: this.ih.a71 ? b9.dG.data[100].value : this.ih.a72[0],
			a4t: [0, 0, 0],
			a4u: 0
		}]
	}, this.oQ = function(a6o) {
		var a6q = new FileReader;
		a6q.onload = a6s, a6q.readAsText(a6o)
	}, this.a73 = function(n3) {
		this.ih = {}, this.ih.a4o = a74(n3.numberPlayers, 1, 512), this.ih.a75 = a74(n3.modeID, 0, 1), this.ih.pZ = a74(n3["gMap.mapID"], 0, ap.a76 - 1), this.ih.a4O = a74(n3.seedMap, 0, 16383), this.ih.a6z = a74(n3.seedSpawn, 0, 16383), this.ih
			.uP = a77(n3.selectableSpawn, !1), this.ih.a71 = a77(n3.selectableName, !1), this.ih.a6y = a77(n3.selectableColor, !1), ap.ih.pY[ap.a6r()].name = this.ih.a78 = a79(n3.mapName, 1, 25, "Custom Map"), this.ih.vo = function(db) {
				var eD, eZ;
				if (!Array.isArray(db) || db.length < 1) return [];
				for (eZ = db.length, eD = 0; eD < eZ; eD++) db[eD] = a79(db[eD], 0, 100, "");
				return db
			}(n3.description), this.ih.pg = a7B(n3.playerX, this.ih.a4o, 4096, 16), this.ih.pr = a7B(n3.playerY, this.ih.a4o, 4096, 16), this.ih.a7C = a7B(n3.playerTeam, this.ih.a4o, 8, 8), this.ih.ii = a7B(n3.playerStrength, this.ih.a4o, 5, 8),
			this.ih.a5m = function(db, eZ) {
				var eD, dl, oz;
				if (!Array.isArray(db) || db.length < 1) return null;
				for (dl = new Array(eZ), oz = db.length, eD = 0; eD < eZ; eD++) dl[eD] = a7B(db[eD % oz], 3, 63, 8);
				return dl
			}(n3.playerColor, this.ih.a4o), this.ih.a72 = function(db, eZ) {
				var eD, dl, oz;
				if (!Array.isArray(db) || db.length < 1) return null;
				for (dl = new Array(eZ), oz = db.length, eD = 0; eD < eZ; eD++) dl[eD] = a79(db[eD % oz], 3, 26, "Bot");
				return dl
			}(n3.playerName, this.ih.a4o), this.ih.a7F = "string" == typeof n3.mapBase64 ? n3.mapBase64 : "", this.ih.a71 = this.ih.a71 || !this.ih.a72, this.ih.uM = 0 === this.ih.a75 ? 7 : 2 === this.ih.a75 ? 9 : 6, this.ih.pg = this.ih.pr ?
			this.ih.pg : null
	}, this.xC = function() {
		! function(fw) {
			var gM, gJ, a7H = "data:image/png;base64,";
			if (fw.length <= a7H.length) return;
			aU.ih.pZ = 0, aU.ih.a4O = 0, ap.d2(0, 0), fw.substring(0, a7H.length) !== a7H && (fw = a7H + fw);
			return (gM = new Image).onload = function() {
				ap.e8 = gM.width, ap.e9 = gM.height, 4096 < ap.e8 || 4096 < ap.e9 || ap.e8 < 10 || ap.e9 < 10 ? (ap.d2(0, 0), alert("Image w & h must be between 10 and 4096.")) : (ap.pZ = ap.a6r(), ap.a4K = 0, ap.pB.width = ap.e8, ap.pB
					.height = ap.e9, ap.p7.drawImage(gM, 0, 0), gJ = ap.p7.getImageData(0, 0, ap.e8, ap.e9), ap.pC = gJ.data)
			}, gM.src = fw, aU.ih.a7F = "", 1
		}(this.ih.a7F) && ap.d2(this.ih.pZ, this.ih.a4O)
	}, this.a7L = function() {
		for (var max = 0, eZ = this.ih.a4o, eD = 0; eD < eZ; eD++) this.ih.a7C[eD] > max && (max = this.ih.a7C[eD]);
		return Math.max(0, max - 1)
	}
}

function bq() {
	var a7M, a7N, size, hR, hS, id;

	function a7O(player) {
		return player < h0 ? a7M * player : a7M * h0 + a7N * (player - h0)
	}
	this.cq = function() {
		a7M = h0 < 16 ? 12 : 8, a7N = 4;
		var eZ = a7O(ed);
		size = new Uint8Array(ed), hR = new Uint16Array(eZ), hS = new Uint32Array(eZ), id = new Uint16Array(eZ)
	}, this.mn = function(xt, a7P) {
		var a7Q = this.fD(xt, a7P);
		this.fC(xt, a7P, 0), a7Q = aY.fN.lx(xt, a7Q), xt === eU && (b1.eX[13] -= a7Q)
	}, this.clear = function(player) {
		size[player] = 0
	}, this.a6f = function(player, a7P) {
		var iR, a7P = function(player, a7P) {
			var eD, oz = a7O(player);
			for (eD = size[player] - 1; 0 <= eD; eD--)
				if (0 === id[oz + eD] && hR[oz + eD] === a7P) return eD;
			return size[player]
		}(player, a7P);
		a7P !== size[player] && (iR = hS[a7O(player) + a7P], this.eY(player, a7P), this.hO(player, iR, ed))
	}, this.hj = function(player, a7P) {
		for (var oz = a7O(player), eD = size[player] - 1; 0 <= eD; eD--)
			if (0 === id[oz + eD] && hR[oz + eD] === a7P) return !0;
		return !1
	}, this.i3 = function(player) {
		return player < h0 ? size[player] < a7M : size[player] < a7N
	}, this.eE = function(player) {
		return size[player]
	}, this.eK = function(player, eD) {
		return hR[a7O(player) + eD]
	}, this.eF = function(player, eD) {
		return id[a7O(player) + eD]
	}, this.jh = function(player, a7S) {
		for (var oz = a7O(player), eD = size[player] - 1; 0 <= eD; eD--)
			if (id[oz + eD] === a7S) return eD;
		return -1
	}, this.eL = function(player, eD) {
		return hS[a7O(player) + eD]
	}, this.fD = function(player, a7P) {
		for (var oz = a7O(player), eD = size[player] - 1; 0 <= eD; eD--)
			if (0 === id[oz + eD] && hR[oz + eD] === a7P) return hS[oz + eD];
		return 0
	}, this.a6e = function(player) {
		for (var oz = a7O(player), db = 0, eD = size[player] - 1; 0 <= eD; eD--) db += hS[oz + eD];
		return db
	}, this.a7T = function(player) {
		for (var oz = a7O(player), db = 0, eD = size[player] - 1; 0 <= eD; eD--) 0 === id[oz + eD] && (db += hS[oz + eD]);
		return db
	}, this.a6R = function(player) {
		for (var oz = a7O(player), wM = 0, eD = size[player] - 1; 0 <= eD; eD--) 0 < id[oz + eD] && wM++;
		return wM
	}, this.fC = function(player, a7P, iR) {
		for (var oz = a7O(player), eD = size[player] - 1; 0 <= eD; eD--) 0 === id[oz + eD] && hR[oz + eD] === a7P && (hS[oz + eD] = iR)
	}, this.ey = function(player, eD, iR) {
		hS[a7O(player) + eD] = iR
	}, this.hO = function(player, iR, a7P) {
		var eD, oz = a7O(player);
		for (a7P === eU && b1.eX[player < h0 ? 6 : 5]++, eD = size[player] - 1; 0 <= eD; eD--)
			if (0 === id[oz + eD] && hR[oz + eD] === a7P) return hS[oz + eD] += iR, void(hS[oz + eD] = hS[oz + eD] > tn ? tn : hS[oz + eD]);
		hR[oz + size[player]] = a7P, hS[oz + size[player]] = iR, id[oz + size[player]] = 0, size[player]++, player < h0 && (a7P === eU ? k.r7(player, 5) : player === eU && a6.w8(a7P))
	}, this.a7U = function(player, iR, a7S) {
		var oz = a7O(player);
		h1[player] = 2, hR[oz + size[player]] = 0, hS[oz + size[player]] = iR, id[oz + size[player]] = a7S, size[player]++
	}, this.eY = function(player, fx) {
		var hY, oz;
		if (0 !== size[player])
			for (oz = a7O(player), size[player]--, hY = fx; hY < size[player]; hY++) hR[oz + hY] = hR[oz + hY + 1], hS[oz + hY] = hS[oz + hY + 1], id[oz + hY] = id[oz + hY + 1]
	}, this.a6a = function(player) {
		for (var hY, oz, a6Z = [], eD = iM - 1; 0 <= eD; eD--)
			for (oz = a7O(iN[eD]), hY = size[iN[eD]] - 1; 0 <= hY; hY--)
				if (0 === id[oz + hY] && hR[oz + hY] === player) {
					a6Z.push(iN[eD]);
					break
				} return a6Z
	}
}

function br() {
	var a7V, a7W, a7X, a7Y, a7Z, a7a;
	this.cq = function() {
		a7X = a7V = 10, a7Y = a7W = 10
	}, this.d0 = function() {
		a7a = 512, a7Z = new Uint16Array(a7a);
		for (var eD = 0; eD < a7a; eD++) a7Z[eD] = 100 + a7b(eR(25600 * eD, a7a - 4), 9)
	}, this.zu = function() {
		return a7Y
	}, this.i5 = function() {
		if (--a7X <= 0 && (a7X = a7V, function() {
				var eD, a7g, dZ = eV[eU];
				for (il && !hL && 0 !== h1[0] && 0 === z.im[0].ei && (eV[0] += eR(ez[0], 6)), eD = iM - 1; 0 <= eD; eD--) a7g = eR(a5.a1B(iN[eD]) * eV[iN[eD]], 1e4), eV[iN[eD]] += a7g < 1 ? 1 : a7g, a5.eW(iN[eD]);
				b1.eX[9] += eV[eU] - dZ
			}(), --a7Y <= 0)) {
			a7Y = a7W;
			for (var dZ = eV[eU], eD = iM - 1; 0 <= eD; eD--) eV[iN[eD]] += ez[iN[eD]], a5.eW(iN[eD]);
			b1.eX[8] += eV[eU] - dZ
		}
	}, this.a1B = function(player) {
		var gP = a7Z[eR((a7a - 1) * ez[player], uE)],
			a7f = (b3.iJ() < 1920 && (gP = gP < (a7f = eR(100 * (13440 - 6 * b3.iJ()), 1920)) ? a7f : gP), this.i8(player));
		return eV[player] > a7f && (gP -= eR(2 * gP * (eV[player] - a7f), a7f)), gP < 0 ? 0 : 700 < gP ? 700 : gP
	}, this.i8 = function(player) {
		player = 100 * ez[player];
		return uF < player ? uF : player
	}, this.eW = function(player) {
		var db = ez[player] * tm;
		eV[player] = Math.min(Math.min(eV[player], tn), db)
	}, this.lb = function(player, lc) {
		aY.fN.lx(lc, al.df[0]), b1.ly(player, lc), a6.a7i(player, al.df[0] + al.df[1]), a6.lz(lc, al.df[0]), aY.fN.mc(player)
	}
}

function bs() {
	var a7j, a7k, a7l, a7m, a7n, a7o, a7p, a7q, a7r, a7s, a7t, a7u, a7v, a7w, a7x, a7y, a7z, a80, a82, a83, a84, a85, a86, a8D, a8E, a81 = null,
		a88 = 0,
		a89 = !1,
		a8A = new Float32Array(4),
		a8B = 0,
		a8C = !1,
		a0P = 1;

	function a8F() {
		a81.width = aK.g3, a81.height = aK.g9, a82 = a81.getContext("2d", {
			alpha: !0
		}), aY.fy.textAlign(a82, 1), aY.fy.textBaseline(a82, 1), a82.imageSmoothingEnabled = !0
	}

	function a8G() {
		var eD, a8K;
		for (gD.font = aY.fy.fz(1, 100 * a7t), a8K = 80 / Math.floor(gD.measureText(aY.ji.jj(tn)).width), gD.font = aY.fy.fz(1, 100), eD = ed - 1; 0 <= eD; eD--) a7q[eD] = 100 / Math.floor(gD.measureText(jk[eD]).width), a7p[eD] = Math.min(a8K, a7q[
			eD])
	}

	function a8L(eD) {
		return !b9.dG.data[7].value || eV[eD] < 1e6 ? 1 : eV[eD] < 1e7 ? a8A[0] : a8A[Math.min(Math.floor(Math.log10(eV[eD])) - 6, 3)]
	}

	function a8J(gN) {
		a80 = !1, a7z = 1, a7x = a7y = 0, a8C ? (aY.fy.textAlign(gN, 1), aY.fy.textBaseline(gN, 1)) : gN.clearRect(0, 0, aK.g3, aK.g9);
		for (var jX, jY, eD, fontSize, jZ, ja = h5 / h6, jb = h7 / h6, jc = (aK.g3 + h5) / h6, jd = (aK.g9 + h7) / h6, a8P = 0 !== h1[eU] && a2.v6(eU), hY = iM - 1; 0 <= hY; hY--) eD = iN[hY], (fontSize = a7w * h6 * a8L(eD) * a7p[eD] * a7n[eD]) <
			a7v || a7r <= fontSize || a7l[eD] + a7n[eD] > ja && a7l[eD] < jc && a7m[eD] + a7o[eD] > jb && a7m[eD] < jd && (jX = aK.g3 * (a7l[eD] + a7n[eD] / 2 - ja) / (jc - ja), jY = aK.g9 * (a7m[eD] + a7o[eD] / 2 - jb) / (jd - jb) - .1 * fontSize,
				gN.font = aY.fy.fz(1 === h2[eD] ? 4 : 1, fontSize), gN.fillStyle = function(fontSize, eD) {
					if (a7s <= fontSize && fontSize < a7r) return b4.a8c[a2.yP[eD]] + a8Y(fontSize).toFixed(3) + ")";
					return b4.a8d[a2.yP[eD]]
				}(fontSize, eD), b9.dG.data[7].value ? gN.fillText(aY.ji.jj(eV[eD]), jX, jY) : a8R(eD, fontSize, jX, jY, gN), a80 = !0, 0 < a84[eD] ? function(jX, jY, fontSize, eD, gN) {
					0 === zv[eD] ? az.xE(a83[eD]) ? (function(jX, jY, fontSize, player, lm, gN) {
						for (var vP = .9 * fontSize / az.g3, pk = jY - .5 * vP * az.g3 - .05 * fontSize, gL = (gN.globalAlpha = a8Y(fontSize), a8L(player) * (b9.dG.data[7].value ? a8B : a7q[player])), pj = jX - .5 * fontSize / gL - .4 *
								fontSize - vP * az.g3, hh = 0; hh < 2; hh++) gN.setTransform(vP, 0, 0, vP, pj, pk), gN.drawImage(az.uq[lm], 0, 0), pj = jX + .5 * fontSize / gL + .4 * fontSize;
						gN.globalAlpha = 1, gN.setTransform(1, 0, 0, 1, 0, 0)
					}(jX, jY, fontSize, eD, a83[eD], gN), a8T(jX, jY, fontSize, 0, 0, gN)) : az.xD(a83[eD]) ? (a8b(jX, jY, fontSize, a83[eD], 0, gN), a8T(jX, jY, fontSize, 0, 1, gN)) : (a8b(jX, jY, fontSize, a83[eD], 1, gN), a8T(jX, jY, fontSize,
						1, 0, gN)) : a8b(jX, jY, fontSize, a83[eD], 0, gN)
				}(jX, jY, fontSize, eD, gN) : 0 === zv[eD] && a8T(jX, jY, fontSize, 0, 0, gN), a8P && (0 < a84[eD + ed] || 0 < a84[eD + 2 * ed] || 0 < a84[eD + 3 * ed] || 0 < a84[eD + 4 * ed]) && function(jX, jY, fontSize, eD, gN) {
					var iK, wM = -1;
					for (iK = 4; 1 <= iK; iK--) 0 < a84[eD + iK * ed] && wM++;
					for (iK = 1; iK < 5; iK++) 0 < a84[eD + iK * ed] && (! function(jX, jY, fontSize, iK, eD, a8W, dZ, gN) {
						var vP = .8 * fontSize / az.g3,
							jX = jX - .5 * vP * az.g3 - .534 * a8W * fontSize,
							a8W = jY + 1.4 * vP * az.g3;
						gN.setTransform(vP, 0, 0, vP, jX, a8W), gN.globalAlpha = a8Y(fontSize), jY = 1 === iK ? az.uq[a83[eD + ed]] : 2 === iK ? i.um()[4].gM[dZ < 255 ? 1 : 0] : (3 === iK ? i.um()[5] : i.um()[6]).gM[0];
						gN.drawImage(jY, 0, 0), gN.globalAlpha = 1, gN.setTransform(1, 0, 0, 1, 0, 0)
					}(jX, jY, fontSize, iK, eD, wM, a84[eD + iK * ed], gN), wM -= 2)
				}(jX, jY, fontSize, eD, gN), (jZ = a7t * fontSize) < a7v || (gN.font = aY.fy.fz(1, jZ), b9.dG.data[7].value ? a8R(eD, jZ, jX, jY + .78 * fontSize, gN) : (gN.fillText(aY.ji.jj(eV[eD]), jX, jY + .78 * fontSize), settings
					.showPlayerDensity && (settings.coloredDensity && (gN.fillStyle = utils.textStyleBasedOnDensity(eD)), gN.fillText(utils.getDensity(eD), jX, jY + fontSize * 1.5)))))
	}

	function a8R(eD, fontSize, fI, fJ, gN) {
		var ___id = eD;
		gN.fillText(jk[eD], fI, fJ), eD < h0 && 2 !== h2[eD] || (eD = fontSize / a7q[eD], gN.fillRect(fI - .5 * eD, fJ + aY.fy.ta * fontSize, eD, Math.max(1, .1 * fontSize)));
		b9.dG.data[7].value && settings.showPlayerDensity && (settings.coloredDensity && (gN.fillStyle = utils.textStyleBasedOnDensity(___id)), gN.fillText(utils.getDensity(___id), fI, fJ + fontSize));
	}

	function a8T(jX, jY, fontSize, a8W, a8X, gN) {
		var vP = .95 * fontSize / a86,
			jX = jX - .5 * vP * a85 + .8 * a8W * fontSize,
			a8W = jY - 1.76 * vP * a86 - .82 * a8X * fontSize;
		gN.setTransform(vP, 0, 0, vP, jX, a8W), gN.globalAlpha = a8Y(fontSize), gN.drawImage(a1.get(4), 0, 0), gN.globalAlpha = 1, gN.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a8b(jX, jY, fontSize, lm, a8W, gN) {
		var vP = 1.2 * fontSize / az.g3,
			jX = jX - .5 * vP * az.g3 - .8 * a8W * fontSize,
			a8W = jY - 1.5 * vP * az.g3;
		gN.setTransform(vP, 0, 0, vP, jX, a8W), gN.globalAlpha = a8Y(fontSize), gN.drawImage(az.uq[lm], 0, 0), gN.globalAlpha = 1, gN.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a8Y(fontSize) {
		return a7s <= fontSize && fontSize < a7r ? 1 - (fontSize - a7s) / (a7r - a7s) : 1
	}

	function a8m(gL, g3) {
		return 1 + Math.floor(a7u * gL * g3)
	}

	function a8j(eD) {
		for (var left = a7l[eD], hY = a7l[eD] - ht[eD] - 1; 0 <= hY; hY--)
			if (!a8o(eD, --left, a7m[eD], a7o[eD])) {
				left++;
				break
			} var right = a7l[eD];
		for (hY = hs[eD] - a7l[eD] - a7n[eD]; 0 <= hY; hY--)
			if (!a8o(eD, ++right + a7n[eD] - 1, a7m[eD], a7o[eD])) {
				right--;
				break
			} var fI = Math.floor((left + right) / 2),
			top = a7m[eD];
		for (hY = a7m[eD] - hw[eD] - 1; 0 <= hY; hY--)
			if (!a8p(eD, fI, --top, a7n[eD])) {
				top++;
				break
			} var bottom = a7m[eD];
		for (hY = hv[eD] - a7m[eD] - a7o[eD]; 0 <= hY; hY--)
			if (!a8p(eD, fI, ++bottom + a7o[eD] - 1, a7n[eD])) {
				bottom--;
				break
			} var fJ = Math.floor((top + bottom) / 2);
		a8g(eD, fI, fJ, a7n[eD], a7o[eD]) && (a7l[eD] = fI, a7m[eD] = fJ)
	}

	function a8g(player, fI, fJ, g3, g9) {
		ei = Math.floor(.2 * g3);
		for (var ei, iK = fI + g3 - 1; fI <= iK; iK--)
			if (!a8o(player, iK, fJ, g9)) return;
		for (iK = fJ + g9 - 1 - (ei = (ei = Math.floor(.25 * g9)) < 1 ? 1 : ei); fJ + ei <= iK; iK--)
			if (!a8p(player, fI, iK, g3)) return;
		return 1
	}

	function a8o(player, fI, fJ, g9) {
		return a2.qC(player, 4 * (fJ * ap.e8 + fI)) && a2.qC(player, 4 * ((fJ + g9 - 1) * ap.e8 + fI))
	}

	function a8p(player, fI, fJ, g3) {
		return a2.qC(player, 4 * (fJ * ap.e8 + fI)) && a2.qC(player, 4 * (fJ * ap.e8 + fI + g3 - 1))
	}
	this.cq = function() {
		if (a0P = 0 === (a0P = b9.dG.data[11].value) ? 400 : 1 === a0P ? 200 : 100, a80 = !1, a7w = .88, a7t = .5, a7u = 1.8, a7r = Math.floor(.5 * aK.min), a7s = Math.floor(.2 * a7r), a7v = 12 - 3 * b9.dG.data[9].value, a7k = a7j = 0, a7l =
			new Uint16Array(ed), a7m = new Uint16Array(ed), a7n = new Uint16Array(ed), a7o = new Uint16Array(ed), a7p = new Float32Array(ed), a7q = new Float32Array(ed), a83 = new Uint8Array(2 * ed), a84 = new Uint8Array(5 * ed), a8D =
			new Uint8Array(ed), a8E = new Uint8Array(ed), a8C || (a81 = a81 || document.createElement("canvas"), a8F()), a7y = a7x = 0, a7z = 1, b9.dG.data[7].value) {
			var eD, a8K;
			for (a8G(), gD.font = aY.fy.fz(1, 100), a8K = 100 / Math.floor(gD.measureText("900 000").width), eD = ed - 1; 0 <= eD; eD--) a7p[eD] = Math.min(a8K, 2 * a7q[eD]);
			a8B = a8K, a8A[0] = 100 / (a8K * Math.floor(gD.measureText("5 000 000").width)), a8A[1] = 100 / (a8K * Math.floor(gD.measureText("50 000 000").width)), a8A[2] = 100 / (a8K * Math.floor(gD.measureText("500 000 000").width)), a8A[3] =
				100 / (a8K * Math.floor(gD.measureText("1 000 000 000").width))
		} else a8G();
		! function() {
			var eD;
			for (eD = ed - 1; 0 <= eD; eD--) ez[eD] < 12 ? (a7l[eD] = ht[eD] + 1, a7m[eD] = hw[eD] + 1, a7n[eD] = 1, a7o[eD] = 1) : (a7l[eD] = ht[eD], a7m[eD] = hw[eD] + 1, a7n[eD] = 4, a7o[eD] = 2);
			if (fa)
				for (eD = 0; eD < h0; eD++) a7n[eD] = 0;
			a85 = a1.get(4).width, a86 = a1.get(4).height
		}()
	}, this.a7i = function(eg, wP) {
		wP > 18 * ez[eg] ? (a8E[eg] = 6, a2.yP[eg] = 2 + a2.yP[eg] % 2) : (a8D[eg] = 4, (a2.yP[eg] < 2 || 3 < a2.yP[eg]) && (a2.yP[eg] = 6 + a2.yP[eg] % 2))
	}, this.lz = function(eg, wP) {
		wP > 6 * ez[eg] ? (a8E[eg] = 6, a2.yP[eg] = 4 + a2.yP[eg] % 2) : (a8D[eg] = 4, (a2.yP[eg] < 4 || 5 < a2.yP[eg]) && (a2.yP[eg] = 8 + a2.yP[eg] % 2))
	}, this.resize = function() {
		a8C || (a8F(), a8J(a82))
	}, this.uA = function() {
		for (var eD = 0; eD < h0; eD++) hs[eD] - ht[eD] != 3 || hv[eD] - hw[eD] != 3 ? (a7l[eD] = ht[eD] + (hs[eD] !== ht[eD] ? 1 : 0), a7m[eD] = hw[eD], a7n[eD] = 1, a7o[eD] = 1) : (a7l[eD] = ht[eD], a7m[eD] = hw[eD] + 1, a7n[eD] = 4, a7o[eD] =
			2)
	}, this.mp = function(player, fx, a8M) {
		player += fx * ed;
		if (0 === fx) return a83[player] === a8M && 0 < a84[player] ? void(a84[player] = 0) : (a83[player] = a8M, void(a84[player] = az.xE(a8M) ? 255 : 64));
		1 === fx ? (a84[player] = 64, a83[player] = a8M) : a84[player] = a8M
	}, this.gC = function() {
		a8C ? a8J(gD) : a80 && (1 !== a7z ? (gD.imageSmoothingEnabled = !0, gD.setTransform(a7z, 0, 0, a7z, 0, 0), gD.drawImage(a81, -a7x / a7z, -a7y / a7z), gD.setTransform(1, 0, 0, 1, 0, 0), gD.imageSmoothingEnabled = !1) : gD.drawImage(a81, -
			a7x, -a7y))
	}, this.z7 = function(gs, gv) {
		a7x += gs, a7y += gv
	}, this.sX = function(gs, gv) {
		a6.z7(gs, gv)
	}, this.zoom = function(fr, g7, g8) {
		a7z *= fr, a7x = (a7x + g7) * fr - g7, a7y = (a7y + g8) * fr - g8
	}, this.j4 = function(wY) {
		return !a8C && !(!a89 && !wY && b3.dY < a88 + (1 !== a7z || 0 !== a7x || 0 !== a7y ? a0P : fL ? aa.vQ ? a0P : 1e3 : fa ? 1e3 : il ? j.fM || 2 === rG ? 1e3 : a0P : 2 === rG ? 500 : a0P) || (a89 = !1, a88 = b3.dY, a8J(a82), 0))
	}, this.jf = function(eD) {
		return a8L(eD) * a7p[eD]
	}, this.a8O = function(player) {
		return a7p[player]
	}, this.i5 = function() {
		b3.iJ() % 10 == 9 && (a89 = !0), 4 <= ++a7k && function() {
			var eD, hY, hh;
			for (a7k = 0, hh = 4; 1 <= hh; hh--)
				for (hY = iM - 1; 0 <= hY; hY--) eD = iN[hY] + hh * ed, 0 < a84[eD] && a84[eD] < 255 && a84[eD]--;
			if (2 !== rG)
				for (hY = iM - 1; 0 <= hY; hY--) eD = iN[hY], 0 < a84[eD] && a84[eD] < 255 && a84[eD]--
		}();
		for (var eZ = Math.floor(.1 * iM), eD = a7j + (eZ = iM < (eZ = eZ < 8 ? 8 : eZ) ? iM : eZ) - 1; a7j <= eD; eD--) ! function(eD) {
			var gL = a8L(eD) * a7p[eD];
			0 < a7n[eD] && a8g(eD, a7l[eD], a7m[eD], a7n[eD], a7o[eD]) ? ! function(eD) {
				for (var fI, fJ, g3, g9, fX = !1, hh = 0; hh < 8; hh++) {
					if (g3 = a7n[eD] + 2, g9 = a7o[eD] + 2, g3 > hs[eD] - ht[eD] + 1 || g9 > hv[eD] - hw[eD] + 1) return fX;
					if (fI = a7l[eD] - 1, fJ = a7m[eD] - 1, !a8g(eD, fI, fJ, g3, g9)) return fX;
					a7l[eD] = fI, a7m[eD] = fJ, a7n[eD] = g3, a7o[eD] = g9, fX = !0
				}
				return fX
			}(eD) && function(eD, gL) {
				for (var fI, fJ, g3, g9, fX = !1, a2L = a7n[eD], kF = 1 + Math.floor(.02 * a2L), hh = 1; hh < 5; hh++) {
					if ((g3 = a2L + hh * kF) > hs[eD] - ht[eD] + 1) return fX;
					if ((g9 = a8m(gL, g3)) > hv[eD] - hw[eD] + 1) return fX;
					fI = ht[eD] + Math.floor(Math.random() * (hs[eD] - ht[eD] + 2 - g3)), fJ = hw[eD] + Math.floor(Math.random() * (hv[eD] - hw[eD] + 2 - g9)), a8g(eD, fI, fJ, g3, g9) && (a7l[eD] = fI, a7m[eD] = fJ, a7n[eD] = g3, a7o[
						eD] = g9, fX = !0)
				}
				return fX
			}(eD, gL) && a8j(eD) : ! function(eD, gL) {
				var g9, fI = a7l[eD] + 1,
					fJ = a7m[eD] + 1,
					g3 = a7n[eD] - 2;
				for (;;) {
					if (g3 < 1) {
						a7n[eD] = 0;
						break
					}
					if (g9 = a8m(gL, g3), a8g(eD, fI, fJ, g3, g9)) return a7l[eD] = fI, a7m[eD] = fJ, a7n[eD] = g3, a7o[eD] = g9, 1;
					fI++, fJ++, g3 -= 2
				}
				return
			}(eD, gL) ? function(eD, gL) {
				var fI, fJ, g3, g9, hh, kK, ha = hs[eD] - ht[eD] + 1,
					a8n = Math.floor(.02 * ha);
				for (kK = -6 * (a8n = a8n < 1 ? 1 : a8n), hh = ha; kK <= hh; hh -= a8n)
					if (g9 = a8m(gL, g3 = 0 < hh ? hh : 1), fI = ht[eD] + Math.floor(Math.random() * (hs[eD] - ht[eD] + 2 - g3)), fJ = hw[eD] + Math.floor(Math.random() * (hv[eD] - hw[eD] + 2 - g9)), a8g(eD, fI, fJ, g3, g9)) return a7l[
						eD] = fI, a7m[eD] = fJ, a7n[eD] = g3, a7o[eD] = g9
			}(eD, gL) : a8j(eD)
		}(iN[eD % iM]);
		a7j = (a7j + eZ) % iM
	}, this.j0 = function() {
		var eD, eg, gZ, ga;
		if (b3.iJ() % 4 == 1)
			for (eD = iM - 1; 0 <= eD; eD--) eg = iN[eD], a2.yP[eg] < 2 || ((gZ = Math.max(a8D[eg] - 1, 0)) === (ga = Math.max(a8E[eg] - 1, 0)) ? 0 === gZ && (a2.yP[eg] %= 2) : 0 === ga && a2.yP[eg] < 6 && (a2.yP[eg] += 4), a8D[eg] = gZ, a8E[
				eg] = ga)
	}, this.w8 = function(player) {
		var eD = player + 2 * ed,
			dZ = a84[eD];
		return 0 < dZ && (k.r6(50, player), a84[eD] = 0, 255 === dZ)
	}, this.v8 = function(player) {
		return 255 === a84[player + 2 * ed]
	}
}

function bt() {
	var fs, a8q;
	this.cq = function() {
		fs = "Abbasid Caliphate;Aceh s;Achaemenid Z;Afsharid z;Aghlabid Emirate;Ahom z;Akkadian Z;Aksumite Z;Akwamu;Alaouite z;Almohad Caliphate;Almoravid z;Angevin Z;Aq Qoyunlu;Armenian Z;Assyria;Ashanti Z;Austrian Z;Austria-Hungary;Ayyubid z;Aztec Z;Aulikara Z;Babylonian Z;Balhae;Banten s;S Banjar;Bamana Z;Bengal s;Benin Z;Kadamba z;Bornu Z;E Brazil;Britannic Z;British Z;British Raj;Bruneian Z;Bukhara Z;Burgundian State;Buyid z;Byzantine Z;Caliphate of Córdoba;Cao Wei;Carthaginian Z;Cebu Rajahnate;Chagatai Khanate;Chalukya z;Chauhan z;Chavín Z;Chenla;Chera z;Chola z;Comanche Z;Congo Free State;Crimean Khanate;Dacian Z;Delhi s;Demak s;Durrani Z;Dutch Z;Egyptian Z;Elamite Z;Exarchate of Africa;Abyssinia;Fatimid Caliphate;First French Z;Frankish Z;Funan;Gallic Z;Gaza Z;Republic of Genoa;German Z;Ghana Z;Ghaznavid z;Ghurid z;Goguryeo;Goryeo;Gorkha Z;Göktürk Khaganate;Golden Horde;S Gowa;Seljuq Z;Gupta Z;Hafsid Y;Han z;Hanseatic League;E Harsha;Hephthalite Z;Hittite Z;Holy Roman Z;Hotak z;Hoysala Z;Hunnic Z;Husainid z;Idrisid z;Ilkhanate;K Israel;K Judah;Inca Z;Italian Z;E Japan;Jin z;Johor Z;Jolof Z;Joseon;Kaabu Z;Kachari Y;Kalmar Union;Kanem Z;Kanva z;Kara-Khanid Khanate;Kazakh Khanate;Khazar Khaganate;Khmer Z;Khilji z;Khwarazmian z;Kievan Rus';Konbaung z;Kong Z;Korean Z;Kushan Z;K Kush;Lakota;Latin Z;Later Lê z;Liao z;Lodi s;Khmer Z;Macedonian Z;Majapahit Z;Mali Z;Malacca Z;Mamluk s;Manchukuo;Maratha Z;Marinid z;Massina Z;Mataram s;Mauretania;Mauryan Z;Median Z;Mlechchha z;Ming z;Mitanni Z;Mongol Z;Mughal Z;Nanda Z;Nguyễn z;North Sea Z;E Nicaea;Numidia;Omani Z;Ottoman Z;Oyo Z;Pagan Z;Pahlavi z;Pala Z;Palmyrene Z;Parthian Z;Pontic Z;Portuguese Z;K Prussia;Ptolemaic Z;Qajar z;Qara Qoyunlu;Qin z;Qing z;Ramnad Sethupathis;Rashidun Caliphate;Rashtrakuta z;Roman Z;Rouran Khaganate;Rozwi Z;Rustamid z;Russian Z;Tsardom of Russia;Saadi z;Safavid z;Saffarid z;Sassanid z;Satavahana z;Samanid Z;Soviet Union;Saudeleur z;Duchy of Savoy;Seleucid Z;Serbian Z;Shu Han;Shang z;Siam Z;Sikh Z;Singhasari;Sokoto Caliphate;Song z;Songhai Z;Spanish Z;Srivijaya Z;Sui z;K Mysore;Shunga Z;S Sulu;Sumer;Sur Z;Swedish Z;Tahirid z;Tang z;Tây Sơn z;S Ternate;E Thessalonica;German Reich;Tibetan Z;Tondo z;S Tidore;Timurid Z;K Tlemcen;E Trebizond;Toltec Z;Toungoo z;Toucouleur Z;Tu'i Tonga Z;Turgesh Khaganate;Umayyad Caliphate;Uyunid Emirate;Uyghur Khaganate;Uzbek Khanate;Vandal Y;Vijayanagara Z;Republic of Venice;Wari Z;Wassoulou Z;Wattasids;Western Roman Z;Eastern Wu;Western Xia z;Xin z;Yuan z;Zand z;Zhou z;Zulu Z;Yugoslavia;Kosovo;Sikkim;Kanem–Bornu Z;Wadai Z;Ethiopian Z;Rozvi Z;Sasanian Z;E Vietnam;Shilluk Y;K Aksum;Gwiriko Y;Toro Y;Malindi Y;K Loango;K Mapungubwe;Ryukyu Y;K Cyprus;K Jerusalem;Garhwal Y;K Nepal;K Cambodia;Champa Y;Hanthawaddy Y;Phayao Y;K Sardinia;K Sicily;K Gwynedd;K Scotland;K Desmond;K Poland;K Hungary;K Croatia;K Bohemia;Albanian Y;K Georgia;K Portugal;Khanate of Sibir;K Romania;Cossack Hetmanate;Duchy of Bouillon;K Ireland;Lordship of Ireland;K Italy;Republic of Pisa;Idrisid z;Almoravid z;Almohad Caliphate;Marinid z;Wattasid z;Saadian z;Republic of Salé;Rif Republic;K Kush;Makuria;Alodia;Ayyubid z;Mamluk s;Egypt Eyalet;K Fazughli;S Sennar;S Darfur;Mahdist State;S Egypt;K Egypt;Emirate of Cyrenaica;K Libya;Republic of Egypt;Republic of the Sudan;United Arab Republic;Libyan Arab Republic;Zirid z;Hafsid z;K Kuku;Regency of Algiers;Gurunsi;Liptako;Tenkodogo;Wogodogo;Yatenga;Bilanga;Bilayanga;Bongandini;Con;Macakoali;Piela;Nungu;K Sine;K Saloum;K Baol;K Cayor;K Waalo;Bundu;Bonoman;Gyaaman;Denkyira;Mankessim Y;K Dahomey;Oyo Z;K Nri;Aro Confederacy;Kwararafa;Biafra;Buganda;Bunyoro;Ankole;Busoga;Tanganyika;Kuba Y;K Luba;K Lunda;Yeke Y;K Ndongo;Kasanje Y;K Matamba;Mbunda Y;Chokwe Y;Kazembe Y;K Butua;Ndebele Y;Mthethwa Z;Bophuthatswana;Ciskei;Transkei;Venda;Rhodesia;Kart z;Nogai Horde;Khanate of Bukhara;Khanate of Khiva;Khamag Mongol;Northern Fujiwara;Kamakura Shogunate;Ashikaga Shogunate;Jaxa;Republic of Ezo;Jiangxi Soviet;Hunan Soviet;Guangzhou Commune;Gojoseon;Alaiye;Beylik of Bafra;Kara Koyunlu;Kars Republic;K Iraq;Arab Federation;Kar-Kiya z;Baduspanids;Marashiyan z;Afrasiyab z;Mihrabanid z;Safavid Iran;Sheikhdom of Kuwait;Bani Khalid Emirate;Emirate of Diriyah;Emirate of Najd;Muscat and Oman;Emirate of Riyadh;S Najd;K Hejaz;Fadhli s;Emirate of Beihan;Emirate of Dhala;S Lahej;Republic of Kuwait;K Cochin;Jaffna Y;Laur Y;Pandya z;Jaunpur s;Jaintia Y;Hyderabad State;Travancore;Udaipur State;Manikya z;Lan Xang;K Vientiane;K Champasak;Lao Issara;K Laos;Pyu States;Ava;Mon Ys;Pegu;K Mrauk U;Taungoo z;Shan States;Arakan;Raktamaritika;Singhanavati;Dvaravati;Ngoenyang;Hariphunchai;Tambralinga;Lavo Y;Langkasuka;Sukhothai Y;S Singora;Ayutthaya Y;Thonburi Y;Lan Na;Pattani Y;Jambi s;Palembang s;S Deli;S Langkat;S Serdang;S Cirebon;K Pajang;K Bali;Bima s;K Larantuka;K Banggai;Luwu;S Bone;Caucasian Albania;Kabardia;Circassia;K Abkhazia;Elisu s;Avar Khanate;Caucasian Imamate;K Imereti;K Kartli;K Kakheti;Crown of Aragon;Emirate of Granada;K Majorca;Crown of Castile;K Haiti;Cocollán;Zapotec Civilization;Mosquito Y;Somoza Regime;Iroquois Confederacy;Cherokee Nation;Vermont Republic;State of Muskogee;K Alo;K Sigave;K Fiji;K Nauru;K Chile;Muisca Confederation;El Stronato;K Chimor;Jungle Republic;Liga Federal;Supreme Junta;Weimar Republic;K Bavaria;Bremen;Frankfurt;Hamburg;K Hanover;Holstein;Lippe;Nassau;Oldenburg;Pomerania;Reuss;Saxe-Altenburg;Saxony;Schleswig;Waldeck;Württemberg;Helvetic Republic;Republic of Florence;Duchy of Urbino;Republic of Cospaia;Duchy of Lucca;Duchy of Mantua;Duchy of Milan;Papal States"
			.split(";");
		var eD, hY, a8r = ["K ", " Y", "E ", " Z", " z", " s", "S "],
			a8s = ["Kingdom of ", " Kingdom", "Empire of ", " Empire", " Dynasty", " Sultanate", "Sultanate of "];
		for (a8q =
			"Pestilent Dominion;Wretched Realm;Damned Province;Corrupt Zone;Cursed Territory;Blight Nation;Haunted Expanse;Malevolent State;Ruined Empire;Contaminated Land;Epidemic Domain;Forsaken District;Abandoned Wasteland;Necrotic Enclave;Tainted Domain;Decayed Principality;Infested Region;Malignant Territory;Toxic Dominion;Ravaged Sector;Ghostly Realm;Plagued Commonwealth;Afflicted State;Desolate Nation;Apocalyptic Zone;Radiated Province;Deathly District;Pestilence Haven;Doom Territory;Malefic Expanse;Abandoned State;Cursed Haven;Corroded Zone;Hauntland;Noxious Nation;Infected Enclave;Ruinous Domain;Wasteland Woe;Rotten Principality;Voided Land;Vile Dominion;Catastrophic Region;Eerie Expanse;Desolation State;Forsaken Outpost;Contagion District;Damaged Province;Abhorrent Sector;Accursed Nation;Doomstruck Land;Radiant Ruin;Deathly Enclave;Malefic Dominion;Plague District;Infected Haven;Corrupt State;Pestilent Territory;Razed Realm;Haunted Wasteland;Toxic Sector;Cursed Dominion;Decaying Province;Forsaken Enclave;Ruinous Region;Malignant Haven;Infested State;Ghostly Nation;Tainted Territory;Damned District;Radiated Dominion;Desolate Expanse;Apocalyptic Land;Death Zone;Wretched State;Malevolent Haven;Plagued Nation;Noxious Domain;Voided Territory;Eerie Sector;Accursed Province;Necrotic District;Doom Haven;Haunt Realm;Rotten Nation;Forsaken Territory;Infected State;Abhorrent Expanse;Malignant Land;Toxic Dominion;Ruined District;Ghostland;Cursed Sector;Radiant Nation"
			.split(";"), eD = fs.length - 1; 0 <= eD; eD--)
			for (hY = a8r.length - 1; 0 <= hY; hY--) fs[eD] = fs[eD].replace(a8r[hY], a8s[hY]);
		if (settings.realisticNames) fs = realisticNames;
	}, this.d2 = function() {
		var eD;
		if (aU.ig && aU.ih.a72)
			for (eD = h0; eD < ed; eD++) jk[eD] = aU.ih.a72[eD % pl];
		else(9 === ij ? function() {
			var eD, gP = aL.random(),
				eZ = fs.length,
				oz = h0 + aM.a8y;
			for (eD = oz - 1; h0 <= eD; eD--) jk[eD] = fs[(eD + gP) % eZ];
			for (eZ = a8q.length, eD = oz; eD < ed; eD++) jk[eD] = a8q[eD % eZ]
		} : il ? function() {
			var eD, gP = aL.random();
			for (eD = h0; eD < ed; eD++) jk[eD] = fs[(eD + gP) % ed]
		} : function() {
			var eD, eZ = fs.length,
				gP = aL.random();
			for (eD = h0; eD < ed; eD++) jk[eD] = fs[(eD + gP) % eZ]
		})()
	}, this.uV = function() {
		var eD, eZ, oz, gP;
		if (!il) {
			for (wc = new Array(h0), eZ = h0, eD = 0; eD < eZ; eD++) wc[eD] = jk[eD];
			if (b9.dG.data[6].value) {
				for (oz = fs.length, gP = aL.a8x(), eD = 0; eD < eZ; eD++) jk[eD] = fs[(eD + gP) % oz];
				jk[eU] = wc[eU]
			}
		}
	}
}

function cD() {
	this.a8z = [], this.a90 = [], this.cq = function() {
		this.a8z = [], this.a90 = []
	}, this.i5 = function() {
		0 <= this.a8z.length && this.a91(this.a8z), 0 <= this.a90.length && this.a91(this.a90)
	}, this.a91 = function(dl) {
		for (var hh = -1, eD = dl.length - 1; 0 <= eD; eD--)
			if (dl[eD].dY--, dl[eD].dY <= 0) {
				hh = eD;
				break
			} for (eD = hh; 0 <= eD; eD--) dl.shift()
	}, this.v0 = function(id, qT, a92) {
		return this.a93(this.a8z, id, qT, a92)
	}, this.a94 = function(id, qT, a92) {
		return this.a93(this.a90, id, qT, a92)
	}, this.a93 = function(dl, id, qT, a92) {
		return ! function(dl, id, qT) {
			var eD, pS;
			for (eD = qT.length - 1; 0 <= eD; eD--)
				for (pS = dl.length - 1; 0 <= pS; pS--)
					if (dl[pS].player === qT[eD] && id === dl[pS].id) return 1;
			return
		}(dl, id, qT) && (a92 && function(dl, id, qT) {
			var eD;
			for (eD = qT.length - 1; 0 <= eD; eD--) dl.push({
				player: qT[eD],
				id: id,
				dY: 384
			})
		}(dl, id, qT), !0)
	}
}

function uS(qT) {
	var eD;
	for (jk = new Array(ed), wc = jk, h1 = new Uint8Array(ed), ht = new Uint16Array(ed), hw = new Uint16Array(ed), hs = new Uint16Array(ed), hv = new Uint16Array(ed), ez = new Uint32Array(ed), q0 = new Uint32Array(ed), eV = new Uint32Array(ed),
		donationsTracker.reset(), ea = new Array(ed), er = new Array(ed), es = new Array(ed), ev = new Array(ed), h2 = new Uint8Array(ed), eD = qT.length - 1; 0 <= eD; eD--) jk[eD] = qT[eD].name, h2[eD] = qT[eD].a4u
}

function cB() {
	this.we = 0, this.qT = null, this.cq = function() {
		this.we = 0, this.qT = []
	}, this.a97 = function(player) {
		this.qT.push(player), rI++, h2[player] = 2, player === eU && (u.show(!1, !1), t.a0z()), a6.w8(player)
	}, this.a6j = function(player) {
		var eD, qT;
		if (2 !== h2[player])
			for (eD = (qT = this.qT).length - 1; 0 <= eD; eD--)
				if (qT[eD] === player) return void qT.splice(eD, 1)
	}, this.i5 = function() {
		il || (30 === this.we && 2140 <= b3.iJ() && this.a98(), this.we = (this.we + 1) % 60)
	}, this.a98 = function() {
		for (var qT = this.qT, eD = qT.length - 1; 0 <= eD; eD--) ! function(player, h4) {
			!a4.i3(player) || (h4 = Math.max(Math.min(100, eV[player]), eR(h4 * eV[player], 100))) < 100 || (0 === er[player].length ? !ak.i4.i5(player) && hL && i7(player, h4, 0, 0) : (hL ? iI : iQ)(player, h4))
		}(qT[eD], 12)
	}
}

function uW() {
	for (iM = 0, eD = ed - 1; 0 <= eD; eD--) 0 !== h1[eD] && iM++;
	iN = new Uint16Array(iM);
	for (var eZ = 0, eD = 0; eD < ed; eD++) 0 !== h1[eD] && (iN[eZ++] = eD)
}

function iz() {
	a9A(), a9B()
}

function a9B() {
	for (var eD = iM - 1; 0 <= eD; eD--) 0 === h1[iN[eD]] && a9C(eD)
}

function a9C(eD) {
	iM--;
	for (var hY = eD; hY < iM; hY++) iN[hY] = iN[hY + 1]
}

function a9A() {
	for (var ge, eD = iM - 1; 0 <= eD; eD--) ez[iN[eD]] <= eR(q0[iN[eD]], 4) ? ez[iN[eD]] <= 1e3 && (2 !== h1[iN[eD]] || 0 === ez[iN[eD]]) && a6T(iN[eD]) : ez[iN[eD]] >= q0[iN[eD]] ? q0[iN[eD]] = ez[iN[eD]] : (ge = eR(q0[iN[eD]] - ez[iN[eD]], 1e3),
		q0[iN[eD]] -= ge < 1 ? 1 : ge)
}

function mC() {
	for (var a6K = 0, eD = iM - 1; 0 <= eD; eD--) a6K += eV[iN[eD]];
	return a6K % 4096
}

function bu() {
	var a9D;
	this.ip = null, this.cq = function() {
		a9D = [], 9 === ij && this.a9E()
	}, this.a9E = function() {
		var eD, a9F = [50, 74, 95, 150, 190, 333];
		if (this.a8y = 0, this.ip = [0, 0, 0, 0, 0, 0], h0 <= a9F[0]) this.ip[0] = Math.max(ai.fE(h0 * (512 - h0), a9F[0]), 13), ie = this.ip[0];
		else
			for (ie = ed - h0, eD = 1; eD < 6; eD++)
				if (h0 <= a9F[eD]) {
					this.ip[eD - 1] = 512 - a9F[eD - 1] - eR((512 - a9F[eD - 1]) * (h0 - a9F[eD - 1]), a9F[eD] - a9F[eD - 1]), this.ip[eD] = 512 - h0 - this.ip[eD - 1];
					break
				} pl = h0 + ie
	}, this.a6i = function(player) {
		a9D.push({
			player: player,
			wM: 14 + aL.hb(20)
		})
	}, this.i5 = function() {
		var eD;
		if (9 === ij)
			for (eD = a9D.length - 1; 0 <= eD; eD--) --a9D[eD].wM <= 0 && (a6.mp(a9D[eD].player, 0, 46), a9D.splice(eD))
	}
}

function cT() {
	function a9L(eD) {
		return eD >= ap.a9Q() && eD !== ap.a6r()
	}

	function a9J(eD) {
		return 1 !== eD && !a9L(eD) && eD !== ap.a6r()
	}
	this.e8 = 0, this.e9 = 0, this.pB = null, this.p7 = null, this.p8 = null, this.pC = null, this.pZ = 0, this.a4K = 0, this.p9 = !1, this.a76 = 20, this.pA = new a9H, this.ih = new a9I, this.cq = function() {
		this.ih.cq()
	}, this.d2 = function(map, a4O) {
		((map %= this.a76) !== this.pZ || a9J(this.pZ) && a4O !== this.a4K) && (this.p9 = !1, this.pA.a4U(), aL.uR(map), this.pZ = map, this.a4K = a4O, a9J(map) && (ap.ih.pY[map].a9K = a4O), a9L(this.pZ) ? a9M() : (map = ap.ih.pY[this.pZ], this
			.e8 = map.g3, this.e9 = map.g9, aL.uR(map.a9K), aA.d2([this.e8, this.e9, map.jo, map.jl]), a9N(), a9.a9O(), aA.a9P()))
	}, this.a9Q = function() {
		return 10
	}, this.a9R = function(eD) {
		return 3 === eD || 7 === eD || 9 === eD || eD === this.a6r()
	}, this.a9S = function(eD) {
		return 2 === eD || 7 === eD || 9 === eD
	}, this.a9T = function(eD) {
		return 1 === eD
	}, this.a6r = function() {
		return this.a76
	}
}

function a9H() {
	function a9d() {
		ap.pA.i5()
	}

	function a9i(eg, a9h) {
		0 < a9h && (ap.pC[eg] += a9h, ap.pC[eg + 1] += a9h, ap.pC[eg + 2] += a9h)
	}

	function fh(eg) {
		return ap.pC[eg + 2] > ap.pC[eg] && ap.pC[eg + 2] > ap.pC[eg + 1]
	}
	this.zJ = -1, this.dX = 0, this.a9U = 0, this.a9V = 8, this.a9W = 32, this.a9X = 8, this.a9Y = 32, this.a9Z = [0, 0], this.yP = [0, 0, 0, 0], this.hD = null, this.a9a = !0, this.a9b = !1, this.a4U = function() {
		-1 !== this.zJ && clearTimeout(this.zJ), this.zJ = -1, this.hD = null, aA.a9P()
	}, this.cq = function() {
		7 === x.rp() || this.a9b || (this.a9a = !0, this.dX = 0, this.a9U = 1, this.a9Z = [ap.ih.pY[ap.pZ].pX[0], ap.ih.pY[ap.pZ].pa[0]], this.yP = [ap.ih.pY[ap.pZ].a9c[3], ap.ih.pY[ap.pZ].a9c[4], ap.ih.pY[ap.pZ].a9c[5], ap.ih.pY[ap.pZ].a9c[6]],
			this.a9V = ap.ih.pY[ap.pZ].a9c[7], this.a9W = ap.ih.pY[ap.pZ].a9c[8], this.a9X = ap.ih.pY[ap.pZ].a9c[9], this.a9Y = ap.ih.pY[ap.pZ].a9c[10], this.a9a ? this.zJ = setTimeout(a9d, 16) : this.i5())
	}, this.i5 = function() {
		if (8 === x.rp() && f.k2()) this.zJ = setTimeout(a9d, 16);
		else {
			if (0 === this.dX) {
				var a9K = aL.a8x();
				if (aL.uR(ap.ih.pY[ap.pZ].a9c[2]), aA.d2([ap.e8, ap.e9, ap.ih.pY[ap.pZ].a9c[0], ap.ih.pY[ap.pZ].a9c[1]]), aL.uR(a9K), this.hD = aA.a9e(), this.dX++, this.a9a) return void(this.zJ = setTimeout(a9d, 16))
			}
			for (var eg, fV, a9K = this.a9a ? 10 : 1e6, a9K = ap.e9 - this.a9U - 1 < a9K ? ap.e9 - this.a9U - 1 : a9K, px = this.a9U + a9K, fJ = this.a9U; fJ < px; fJ++)
				for (var fI = 1; fI < ap.e8 - 1; fI++) fh(eg = 4 * (fV = fI + fJ * ap.e8)) ? this.a9f(eg, fV, 1) : (this.a9f(eg, fV, 0), function(fI, fJ, eg) {
					return 1 < fI && fh(eg - 4) || fI < ap.e8 - 2 && fh(eg + 4) || 1 < fJ && fh(eg - 4 * ap.e8) || fJ < ap.e9 - 2 && fh(eg + 4 * ap.e8)
				}(fI, fJ, eg) && this.a9g(fI, fJ));
			this.a9U = px, this.a9U >= ap.e9 - 1 ? (ap.p7.putImageData(ap.p8, 0, 0, 1, 1, ap.e8 - 2, ap.e9 - 2), b3.d1 = !0, this.a4U()) : this.a9a && (this.zJ = setTimeout(a9d, 16))
		}
	}, this.a9f = function(eg, fV, fx) {
		a9i(eg, Math.floor(this.a9Z[fx] + this.yP[fx] * this.hD[fV] / 1e4) - ap.pC[eg])
	}, this.a9j = function(eg, gP, a9k, fx, yP) {
		a9i(eg, Math.floor(this.a9Z[fx] + (1 - gP / a9k) * yP) - ap.pC[eg])
	}, this.a9g = function(g7, g8) {
		for (var eg, gP, a9k, pc = g7 - this.a9W, pd = g8 - this.a9W, py = g7 + this.a9W, px = g8 + this.a9W, pc = pc < 1 ? 1 : pc, py = py > ap.e8 - 2 ? ap.e8 - 2 : py, px = px > ap.e9 - 2 ? ap.e9 - 2 : px, fJ = pd < 1 ? 1 : pd; fJ <= px; fJ++)
			for (var fI = pc; fI <= py; fI++) fh(eg = 4 * (fI + fJ * ap.e8)) ? (a9k = this.a9V + (this.a9W - this.a9V) * this.hD[fI + ap.e8 * fJ] / 1e4, Math.abs(g7 - fI) > a9k || Math.abs(g8 - fJ) > a9k || a9k <= (gP = Math.sqrt((g7 - fI) * (
				g7 - fI) + (g8 - fJ) * (g8 - fJ))) || this.a9j(eg, gP, a9k, 1, this.yP[3])) : (a9k = this.a9X + (this.a9Y - this.a9X) * this.hD[fI + ap.e8 * fJ] / 1e4, Math.abs(g7 - fI) > a9k || Math.abs(g8 - fJ) > a9k || a9k <= (gP = Math
				.sqrt((g7 - fI) * (g7 - fI) + (g8 - fJ) * (g8 - fJ))) || this.a9j(eg, gP, a9k, 0, this.yP[2]))
	}
}

function a9N() {
	2 === ap.pZ ? a9l([256], [256], [0, 205, 256], [500, 500, 0], [0, 0, 0]) : 7 === ap.pZ ? a9l([512], [512], [0, 380, 512], [500, 500, 0], [0, 0, 0]) : 8 === ap.pZ ? a9l([410], [410], [0, 120, 210], [0, 80, 640], [0, 0, 0]) : 9 === ap.pZ && a9l([
		512
	], [512], [0, 70, 180, 200, 290, 420, 512], [500, 500, 0, 0, 500, 500, 0], [0, 0, 0, 0, 0, 0, 0])
}

function a9l(a9m, a9n, a9o, a9p, a9q) {
	for (var fI, fJ, a9s, a9t, fr, a9u, gr = a9m.length - 1, a9r = ap.e8 + ap.e9, eZ = (a9r *= a9r, a9o.length), eD = eZ - 1; 0 <= eD; eD--) a9o[eD] *= a9o[eD];
	var a9v = new Array(eZ),
		a9w = new Array(eZ),
		a9x = new Array(eZ),
		db = aA.a9e();
	if (void 0 === a9q)
		for (a9q = new Array(eZ), eD = eZ - 1; 0 <= eD; eD--) a9q[eD] = 0;
	for (eD = 1; eD < eZ; eD++) a9v[eD] = a9o[eD] - a9o[eD - 1], a9w[eD] = a9p[eD] - a9p[eD - 1], a9x[eD] = a9q[eD] - a9q[eD - 1];
	for (fI = ap.e8 - 1; 0 <= fI; fI--)
		for (fJ = ap.e9 - 1; 0 <= fJ; fJ--) {
			for (a9s = a9r, eD = gr; 0 <= eD; eD--) a9s = (a9t = (fI - a9m[eD]) * (fI - a9m[eD]) + (fJ - a9n[eD]) * (fJ - a9n[eD])) < a9s ? a9t : a9s;
			for (fr = a9p[eZ - 1], a9u = a9q[eZ - 1], eD = 1; eD < eZ; eD++)
				if (a9s < a9o[eD]) {
					fr = a9p[eD - 1] + a5v((a9s - a9o[eD - 1]) * a9w[eD], a9v[eD]), a9u = a9q[eD - 1] + a5v((a9s - a9o[eD - 1]) * a9x[eD], a9v[eD]);
					break
				} a9y(ap.e8 * fJ + fI, fr, a9u, db)
		}
}

function a9y(fx, fr, a9u, db) {
	fr < 500 ? db[fx] = eR(db[fx] * fr * 2, 1e3) : 500 < fr && (db[fx] += eR(2 * (1e4 - db[fx]) * (fr - 500), 1e3)), db[fx] += eR(a9u * (10 * fr - db[fx]), 1e3)
}

function bv() {
	var a9z;
	this.wT = 0, this.wU = 0, this.wW = 0, this.wX = 0, this.cq = function() {
		(a9z = new Array(ap.a9Q()))[0] = {
			g3: [0, 5e3, 8e3, 1e4],
			gP: [220, 250, 255, 220],
			tb: [190, 220, 0, 0],
			hh: [170, 200, 0, 0]
		}, a9z[1] = {
			g3: [0, 4e3, 5e3, 6e3, 1e4],
			gP: [25, 0, 100, 0, 25],
			tb: [25, 0, 0, 0, 25],
			hh: [25, 0, 0, 0, 25]
		}, a9z[2] = {
			g3: [0, 500, 2500, 2999, 3e3, 3200, 4200, 5200, 5700, 8800, 1e4],
			gP: [15, 15, 70, 40, 48, 48, 252, 40, 40, 20, 30],
			tb: [80, 80, 190, 90, 46, 46, 248, 180, 180, 90, 140],
			hh: [120, 120, 220, 110, 37, 37, 217, 10, 10, 10, 10]
		}, a9z[3] = {
			g3: [0, 400, 1800, 2e3, 3200, 4500, 6e3, 7700, 8500, 9500, 1e4],
			gP: [10, 10, 20, 10, 30, 10, 16, 40, 55, 230, 230],
			tb: [10, 10, 40, 50, 100, 40, 80, 120, 55, 230, 230],
			hh: [80, 80, 200, 10, 60, 10, 16, 40, 55, 230, 230]
		}, a9z[4] = {
			g3: [0, 300, 1400, 1700, 3e3, 4e3, 1e4],
			gP: [10, 10, 20, 10, 10, 170, 212],
			tb: [20, 20, 60, 100, 100, 110, 170],
			hh: [70, 70, 160, 30, 30, 60, 120]
		}, a9z[5] = {
			g3: [0, 1e3, 3e3, 3500, 4e3, 4500, 7e3, 7500, 8e3, 1e4],
			gP: [10, 10, 20, 10, 5, 10, 20, 5, 20, 25],
			tb: [30, 30, 50, 100, 30, 100, 140, 60, 140, 200],
			hh: [80, 80, 200, 10, 5, 10, 20, 5, 20, 25]
		}, a9z[6] = {
			g3: [0, 700, 2650, 3200, 5e3, 8e3, 1e4],
			gP: [10, 10, 60, 255, 255, 200, 200],
			tb: [10, 10, 60, 255, 255, 200, 200],
			hh: [80, 80, 255, 255, 255, 200, 200]
		}, a9z[7] = {
			g3: [0, 400, 1999, 2e3, 3200, 4e3, 4700, 5500, 6500, 9500, 1e4],
			gP: [10, 10, 80, 255, 255, 55, 6, 70, 20, 155, 255],
			tb: [10, 10, 90, 245, 245, 170, 80, 190, 20, 155, 255],
			hh: [80, 80, 255, 235, 235, 55, 26, 10, 20, 155, 255]
		}, a9z[8] = {
			g3: [0, 700, 1300, 1900, 1901, 2500, 3400, 6e3, 1e4],
			gP: [25, 30, 30, 30, 255, 255, 30, 40, 20],
			tb: [25, 30, 150, 150, 245, 245, 80, 150, 70],
			hh: [60, 170, 170, 170, 235, 235, 30, 40, 40]
		}, a9z[9] = {
			g3: [0, 400, 2009, 2010, 3300, 4e3, 5200, 6500, 8e3, 9500, 1e4],
			gP: [10, 10, 80, 255, 255, 55, 23, 36, 20, 155, 255],
			tb: [10, 10, 90, 245, 245, 170, 60, 160, 20, 155, 255],
			hh: [80, 80, 255, 235, 235, 55, 9, 72, 20, 155, 255]
		}
	}, this.a9O = function() {
		var eD, hY, dm, gJ = function() {
				var gJ;
				return ap.pB = document.createElement("canvas"), ap.pB.width = ap.e8, ap.pB.height = ap.e9, ap.p7 = ap.pB.getContext("2d", {
					alpha: !1
				}), gJ = ap.p7.getImageData(0, 0, ap.e8, ap.e9), ap.pC = gJ.data, gJ
			}(),
			g3 = a9z[ap.pZ].g3,
			gP = a9z[ap.pZ].gP,
			tb = a9z[ap.pZ].tb,
			hh = a9z[ap.pZ].hh,
			db = aA.a9e(),
			eZ = g3.length - 2,
			aA3 = new Array(1 + eZ),
			aA4 = new Array(1 + eZ),
			aA5 = new Array(1 + eZ),
			aA6 = new Array(1 + eZ);
		for (hY = eZ; 0 <= hY; hY--) aA3[hY] = g3[hY + 1] - g3[hY], aA4[hY] = gP[hY + 1] - gP[hY], aA5[hY] = tb[hY + 1] - tb[hY], aA6[hY] = hh[hY + 1] - hh[hY];
		for (eD = ap.e8 * ap.e9 - 1; 0 <= eD; eD--)
			for (hY = eZ; 0 <= hY; hY--)
				if (db[eD] >= g3[hY]) {
					dm = db[eD] - g3[hY], ap.pC[4 * eD] = gP[hY] + a5v(aA4[hY] * dm, aA3[hY]), ap.pC[4 * eD + 1] = tb[hY] + a5v(aA5[hY] * dm, aA3[hY]), ap.pC[4 * eD + 2] = hh[hY] + a5v(aA6[hY] * dm, aA3[hY]), ap.pC[4 * eD + 3] = 255;
					break
				} ap.p7.putImageData(gJ, 0, 0), ap.a9T(ap.pZ) && a1.g1() && ap.a9T(ap.pZ) && (gJ = a1.ur("arena"), ap.p7.save(), ap.p7.globalAlpha = 1 === ap.pZ ? .1 : 1, ap.p7.imageSmoothingEnabled = !0, ap.p7.scale(2.8, 2.8), ap.p7.drawImage(
				gJ, Math.floor((ap.e8 / 2.8 - gJ.width) / 2), Math.floor(.5 * ap.e9 / 2.8 - gJ.height / 2)), ap.p7.restore(), gJ = a1.ur("territorial.io"), ap.p7.save(), ap.p7.globalAlpha = 1 === ap.pZ ? .1 : 1, ap.p7
			.imageSmoothingEnabled = !0, ap.p7.scale(.87, .87), ap.p7.drawImage(gJ, Math.floor(.745 * (ap.e8 / .87 - gJ.width)), Math.floor(.422 * ap.e9 / .87 - gJ.height / 2)), ap.p7.restore()), ap.p9 = !0, b3.d1 = !0
	}, this.uU = function() {
		for (var eg, fI, fJ, aA9, aAA, dp, wU = 0, g3 = ap.e8, g9 = ap.e9, dm = g3 * g9 * 4, aAB = a1V, aAC = ap.pC, eD = g3 - 1; 0 <= eD; eD--) aAB[(eg = eD << 2) + 2] = aAB[dm - eg - 2] = 3;
		for (dm = 4 * g3, eD = g9 - 1; 0 <= eD; eD--) aAB[(eg = eD * dm) + 2] = aAB[eg + dm - 2] = 3;
		for (aA9 = g3 - 1, aAA = g9 - 1, fJ = 1; fJ < aAA; fJ++)
			for (dm = fJ * g3, fI = 1; fI < aA9; fI++) dp = 1 - (aAC[(eg = dm + fI << 2) + 2] > aAC[eg + 1] && aAC[eg + 2] > aAC[eg]), aAB[eg + 2] = 2 - dp, wU += dp;
		this.wT = (g3 - 2) * (g9 - 2), this.wX = 0, ap.a9R(ap.pZ) && function() {
			var eg, fI, fJ, dm, aAB = a1V,
				aAC = ap.pC,
				g3 = ap.e8,
				aA9 = g3 - 1,
				aAA = ap.e9 - 1,
				wM = 0;
			for (fJ = 1; fJ < aAA; fJ++)
				for (dm = fJ * g3, fI = 1; fI < aA9; fI++) aAC[eg = dm + fI << 2] === aAC[1 + eg] && aAC[eg] === aAC[2 + eg] && (wM++, aAB[2 + eg] = 3);
			a9.wX = wM
		}(), this.wU = uE = wU - this.wX, this.wW = this.wT - this.wU - this.wX
	}
}

function a9M() {
	var fw, aAE = ap.a9Q();
	ap.pZ === aAE ? fw =
		"DYDz2ESNu-0UYCCrS9c3pBUrKHc94BhIBhIJpIIBnMIAAIrKSSpKABmgf9e7X7ecX-5P0baOy191XXX7eegf9mcfUrrxrKppppKpKSrzUMMMSKKKrJcXcXcmgcXnKIKBmnCIJonCKrrSrrSSxSS9XcJnBe9XemmWXeX99chMIAEprrSrrtbrxIrMKBn9eBcecX9X7f99X90e577VX1VcOWX16XX7X999cX7eWyXXccVVX6rUSrrwUrlzpbbrrU6xzztzxzrztzbaOtaOa5-0WV-77e-9119HcXXZecccceXXX7ce9Xcce9e9meeVof919ee9Wzy5XeXYS9KBcXee_He6ce1ee0zxzta5UaX99c1mXcXhEJp9cNHWcTN9BcnAzJoorIBe0c--nIJoonSIBe-OX-NNOXWbcBgzIHX9xHzS9mcCSI9-nBrrorK9VcP-jHe9_BhxzKHcWC9mZp9-3n9fBnS970a6zs7egrIAAIRUKocXX9gx9npKaUxBppABe5OdHpBe-AC9-17TOWABpKI9-7JmnC6zGtxIBmen9egp6aUlyOzbrbbqUzxHXgjKKBc-ZehlxoeeoxObonox9XonAUbzS9efBdCAArHmjISBhEJnAofBUIJgrpocXxIBUoxHVmnBmmXAExoUxABmdAIBgnBonIAC6oxHVgfMHcXcUXAAGxIBgfxJch9c3enCMzSBe9eXomxHeBgmeCSBgpKMp9hzHfIEzHnArSxHX7pSrUHcnCMrUpSa5UIonABrSBccnBopJttzbxpBonHXpIEKMrMSrxpKxzUzltyUtaTOaOaObaT5UzNTOV0c116rMMKSKrxIKpJpKMSKMGxISCrKMSpKMKrSpSpI9xp9_pMMMMSBoxSryTUUxa5P7-0ttbWzzzxzaN5-NOWVN--0Wa5-0X-0VNVN7TOzaOWzL0bbX0y7NN5Ua17V111749c79e1c-V-----Ow7--N57-OzaN0ba156byNNT6q5OzWaT55-OsOX1777Oa55-5T5UX16tzUOyUtzrpzUrSKKSSAoemnKCIAIICI9KHn9CKBhCSHgenSAJnIJxSMMKKSSpKoopKKHpSoorSzxpWxMS-UKISaOxMOxttyOzy5OzbbtyTOzbtaUxyUyTT6porUrSztzzMSp9eceoogeZp9ZxJx9geeeXe9eZgeC9gegemp9gmpKMSonSxKrrbaUMIKJpMKKKpIACBmeccV71XX7V1mmmmhCCCKJompKKJpMKSKSKpKMJpKBeeceenKpzHnBnBmceee-X1117ememfBn9mfCBmgemf9mfBmf9xromcec7Us8He0u99cWtbc-PeCCS9VecZnBnBemfBn9X9c6aOXA997Y99755VXc6tXXmV5Os-ObVN0yN0bzaT-7ec7N70Wa-OV-5eggnHon9f9efCBpMzop97epCKIpSIBpKrrSKKIKKMKMJehzKKErJeABnIAJc717f9eBnAJzrHe7V9d9ef9gmopKUKC9gmcV6tX73eCIJoonIBnBnBgnCHgjJeZfA9megeegfKCICCJnIA9meZf9mfIEMof9XceXe97X-59XdCIKKpKKCJoeVcf97mZmVVV199YJmX7gceY9gpEOxMMJecrSSGzOxSrxprSxzJzUopSrIxKBpUMIpMprSropEMHnBrpprK91AJpJpIICpBopICCJonKBn9mcme9VcX9ee7X7e9ece9Xe19XcX91Xee9Xcce9VVVccefAAABe7emhBnSSKMSIJhCIJpKJppCKKIIIICJgpIBpAIHpBcoooonIKLObpBnKlzrKIKCJpCJpBnBpUzrrxpxSbbwUxzUprpppppJppMMIrrSSRUbWsOwUzUltbzrxzUzSzUbrrTTUUrSbbV6WbaTOzxzyN5TN-T5TOxbtts71-X-70V0sOWsObbaT0sTObw70tbbzbxbzzyOtyUtbyUaOV1-N0cVN-50aOtza6tzlxzUxSrzUzSSxUSzzOzzs5OyOtyOyUztyObaNOtaUrUxrrUSrrUrMSJrSIMSpKISzKUSpSrSSrzSMMxMSrMSpSrUzSSzzrTUMSpprSzMSzUxSSIEUSrzrUSpMKKxpKrKMKBmmrIKBgpKrzs6VOsUa--5ObzyN77-7X7e970V-5Oa5ObzxSxrzzSrKMUw-OV17X7X1X99X97X9X99cXXXXX977OaOVXeeeeecX7cX7X7X177-7-X-71-7XX97X97cX7VVV1--VObs970cVObtzbtyObrzxSomdKKSSMKqTN5NN0xrMIM5UrKKKpEKrSMSMprSrxMMUzrzrzSrSrSrHXenOtxrrxrxzSrrSrUrrSrSxMSxxKJpKKKJnKKrKIUUSrSrKKzKxKrSrSwUxIBnrxpSSpUzyOzzzzyUSxzRUpCBee7ecXce89omegpIBrpxzSrMJnKrMSFT0tbrMKxKL0VObxprSSlXV-11-c-X-WxzxFUaPcX777OzztzrSrMV-V75X96zzMKrUa9e-7V17gc9XeV90Bf957cVOzrMOX17X7X-X7X7V-N-6aUxCKzUUKprcX-UzSrN17WzrxrNX7ecV17WzzbaOtbxraObrOxrbxwUxpUzrzraOy5OVOWtzyOzzxbzVNXccXcXcX1-V197V-ec5Oy5N1--555UyN-N1---VOWX0Wtcc0aUMMyOs----Zc5-TOtsOWX7c0xzLN-NWbyOyUyUzrbxJe9gfTUxAMxrxzlbzbzbq5UKrJnAABnAAICETUtxSrzrpIpKIUSxraOaOVNTObzWa5NOtxxyOyOc-5A9YBmnBfHceX7-XXcX9e9Y9e5OzUbxSyVUX5OcUa1-UMqNNUbyOtsUWtWbWaObtzbyUWy6bzpJmoh9nIUI99oghSUzrrrSHeHohKCJgrKJemgcrS9nry6xSrUMStxzUSzqUrbrUxUSxxrrprUU6zSrbrtzUSUSzxMKxSMprMKIIIoonIBmohAIAHgf9eHeemfI9nA9mf9c9n9ZeXc9d9n9ccX7VZmoceeHVX1Zn9meZegegegfBhABehABonAHnABhCIBemee9eBfBeecgeohCUxzUbzxI9egegfAUUrHmegemecWcfCUp9meX9Beeef9onrSpAAKKKIyOzyUzJnBjSrxSSIBhMSHgcVYKxBmnzrROzpzxzSKKCKUzKBnoUzzbzpJmegfzyUzFObyUzrrzpKUSlzry6sUyUVN-7NOzbzzlzrzUrUSrrURUxzbzsTUsUWts5NOWa5ObzrUxrtyOWWaOzMSJnIAIprMJorKMIrSKMKKpUKCBonKMJnCJpCIKIKMJmpKIMKJpCJpBxBonHomoemmegnHf9f9cX7ce99emecgn9h9eA9nCHgfBnAIBfHh9eXXce9emec7f9ec1me89eeceme89fHeemX77-ceeeemeX9X9eeecV-V9e9Xe7e9eefBnBeefBfHmnBnBnKBpIEpKxMSKJnBpBnBnBmgmeeX9cXXVcX7Xce1eXcXe7ee9eXeeeX9X7V7V77V--XcXee7ec7X9eXXceX9f9eeee997X9Ve7Zee7WaX5X2Be-cee17X--0tsUbtaT0ta5-Oc--7Xe-X7--OVUtbVT--QA9nBmcXV--97X9ememggnBecJceeXme-cXdABeXeX97cnHgeeI9IA9XcVX7eX99e9e9mgeXeXemmceZmXe9ceXemXmggf9mmnAI9X1eIHcXfBghBmf9BemcX9Y9Ve9--JmZeccXA9Xd9cX9VXVVc7-V-Xee_BnJhIIBnJnBmohBgohBcmmf9eHf99Hf9HmommmmV5N-MvxppxrIICWzsOxX--OV5s0i1mopMKppzTOaN-0XXceV--0lJ7-90mzBlV2N7tRof9JqUsOaW7c8bwrrJchpK9-X7PBfHjKogcP0Jd92SMUwUlxMSErHegnrlxI9X7cY99e7hSzxpxSIIUHozogmgecYIExxxrrrKpKrSrMMrrlxtyUtxblxUyTUbyUUSaUy6Wzttbbc5N5N7V7XWaT7V6aZeVWsV9nIA9X2BmcWc7ooc--f9IBomV-0cnICBeXgn90Wc5TOa7-1-5cX---d11---esD---m8D-1VvAYqV-92glC5--NEEiqV-7Hsjk014I4wognBxwOs0Wc-D4y4gcT--0Y8X-0WalAk--0pHX-1Wsy6EV-a7EDhCBtaT9--X3IIV--_VJV0Ndepmzq1-0XeJbD-5XhvrCqTe-07iCnpteV-7iejk-iAtCxEIrrX71-2smknnEUUpze-e-c-1BtMB--2Kbq--YMmzV-sqPmrF7--Culc-HCwyxxcV-DEWXhte-DZ7mzorSr56eX170LG-rUSrSItzOueVc93c-5ZH-rrRP9-2d613nHdRUR6kP7-CZVZUEKUyUe91e-2ZYhnTPV-t8OMny7-1HZrT-DZf16A9mjFUzlsV--Hh_N-1HlyB-CZhCrSpzrkX7cX-2ZibAr-VMdC8brSrzUxSSIBxpHX17c8CrJe7rrUIpSrUxxzSrMIMOs5OVV7X7X7977V-7P19Xcce--8DNHk-LIcPSpN7-0ODtgnMN1-7Zz5USxyX9c--J2As-9J2CSu-08FHSrR7V-0G5xV-OH5vqV-0LEoV0OLiAnMN70D_f4UKIBnSBgzSrSxSSMSxpSpppzc-5TTUMbV716s117X1Xcce-cXXHcX--0Rs7V3dS04nKonpSSkV7----TMGPxrS-V7--MN-c0HMYnBnrIAIrK-OWV75V-tTEHotV-qMoqSMUUbe9HXV-mNcawnr6xtcVe-3aNiUIq1-6aOwMISlc1-6aSe6rROec-8ac9fISzuX-V1tf-1mnBrlWaN-NajMY9ggeoopCTTTTN6aN1HdgkXoohABnK9n9KJmpogeV-0XJenppSrUzJgghomhp9VnxIAAzOxWbbrIBnJmenBegozlWyObxIKBonIGaOVT50xSk6xJpEpIHnBonBoptxpr56xrzzbonCBnCMMSonzxJmopCIJomX7mceHcV7nJxSABhrbxEKCIJhAA9HgenABrUMbqUpSUrprSrbzzp9hABeXce9YAHcoomnBmmnBmmnpzaTTUrzzMpzWWblbyUUSrUrxbbzzblxrUUbrzSrtztzw6btV19ceWXWzq0aU6aTOta0a0V5777Xce7nA97VOa0X-17VUVV0V17-17X7V7-V----1-V-VcX9A9cWbbzyV-U5T5TOa5NNOaOV1Xe9ce99mZee5OtcWbaTTTTTOWe9ZeXcmcXVV38gtRnCMzSw1X6VcV08hu4rq9--tiGRrac-1Qfbg-dax4zrrIKoeBxErUlzSGbs0VP3eXX97XV-9R0KCsV1OlXjprrP7X7-HRQsCpVc2TRgLxJrKBeKKJe7BhIKKBlwOaUrNTUsNNNcNP91V---PS6VgopVN-LbHRrK999ezrxxoy5Tc7-0bJGjF--6Spy-5bU7rSbuXV4tsIYpKSSrSp50aX-177e-2baNMC5-2Otd7nHrpOba7cV2tv2dnICxz-Uk7cc0mUIkRnBpCBpCIJOWa0VNOtc-19UQnBeegmnIISxJns56zaOWtu7TV--URWN--VDLc-eVE7zSrUX7Xc-5WM4BN1DWTIggpBnEKKKESCWV5T5Wa-N0a9VsP6YRn9cmY9JggoggzUKHfA9XmcP9XZfIJhronABfISpxrUrrI9ABnBggrxxoe9fHmeBdCDUUrHf9orUogrzzJfUU6zUzbbbzrty6brbrxxz57OtsN5OsN5V5VT5V57N56yTUtsNN1cNNVV5VNeeeZeWtu77-XX-KgxCqWVV-P8w5qV-uAjtz5c15XwhBooopBonIKKJNN5-N5-6WVN-8ckmzArUOVeV-uDoWxNV--YoA7-TYoYRoxa57-1_P1T--8NKD-9dNS2ACAUta---dQzr-DPM79mmgcpI9chMKCppxxxrSzIbXc0aT1WVOxk7-N-9c0eauZgfAKrSrrSla-5-7n9-V1eVE3nKUwNVcV0eWZinCF5N0TcbkCMSrzr5OVPXCA9VXV-1b0uV0ezUBxUsXc--mhTc--n9_c1DnTIxCCSMKC9eCKClsT5OsN-V7NNV6QJcYxzUSxzSwUa7X9I99Xd9X-BhW8EE6rUw7ceV6fXkApBmf9f9hKGaOWzzzObV1V-PuipRpJ5--6iiarprP77--DrhL-0iv-fN-7jNKjExzXcc-Y1kshKK-5-V-wF2umWs-03EWs-03_Ms-23gdy-qlmyACJmcgfBnCIIrKpICUSIprUa0VOV5N5---V5---wRnFru7-E6kMClX-4lwIAzq9c-A7r-z5V7gdk8monBgfCCCElzbzxsN995-T5-KgiSunBnABmeeIHprrKJxpIISKICJpKprUzOcOzzUTN---0V--50aN1-1-PV7XX-SnCeY9f9mnUSSKzMtaOWa9VX--bBy1gzSxX-e-4nFNEAqTc-6C7Wgs-EC_DBjN-0nVb2N-3n_EYByN--nfWnV1Bx8ZorUaV9-CnqgbKISrNN9-9-8o5aACrSVWXV-C0gPk-jFRwSM6rsW9VV3h23TmfBjOxMUtaX17-6GYfE-0UHSjwfEzbxpUUq17ZcXeV-h8rqr--3odX6MF--8ogzvMJrN--V1xAI4npKwT7cV0Xp-Yf9nBeehKMKrzzSxrSxrUSzzSxrSMzSzzV-T-7V10Wa6VOWVT1mmeeegn9eeeXmcX97V-IJGnCr1--2JVvD-Bp7gzSxw6aeZcV0hHX5merts-EJjUhq7-2pGMvBtV-hJmVz1-1pJofqV-0KQ3c-0KztN-0L5k7-6LYvE--ILYxhTNc-0LZ57-ALu1CaV-4SIqV-hSQ3na--KpjX--ppknVESTPknBgmgn9f9f9onBmenSpMGzxbtbzbaOV6zbX9-NObWV-4TmmV3SToLnBnJnST5Oa-1-0px0YD-0pylvD--L3Ge--q54IV2CWmWnUUz5Pcec-nO-URhBoUy6VX-1qFuQGc-MOcagpR---CcERs-0PQUc3MPs8gehClzSzbzzUzxMr6tyUzzbzaTP0HgmcVXegeeeXeh9eX7e-JqqUEKIMpzz5T7cXX97-bRBpSKoT5X7--M4g1-grMIbBecemgfMxUpzMzObtu7V0zrrq7e9eV-MTaFhOy9VfLnt2-9-17117VcX1-1X97cVXX9177V-VXV9-WaOSMSSSSrrUSKMKxrrrUSxrrUzsOV7--N-tVN--N0bKIKKQCKRnKQCUtrTUtUSxpMprrUUKxSpxrpprMrxF-EcVGxTX" :
		ap.pZ === aAE + 1 ? fw =
		"QREc7lR7oVUYGy_KJOJKKKKuK4OKT_K4KG_u_GJJO_3K_KKKL_4KL__KK_4_LKK_MjzuOOK_KKKOKLKKLLUjzji_KKMgyzdMjzgzzzEszzyzzjvuQvieeid_POOvzkzvzy_TvuOK4GKKvyyzzydJQi_OdKKaLOLajdOPuueaYBzydJdPOybvdbjeuvizwzujuQnunl2wBnBE2-EYBz2nk2kFzwBzznBydnwznEYwnnEBnnwkyvwzEgznzzEwwwwznnxK4KGOJ2zl2nzifvwyw-J0GGJ042nvzEvzwznJEnzlG42zg02KKGFzzEzzeT-woKK3EvoKLOJBnBnzE2EznnwnwznznzpJKKKKOOKG_G_LKFwl2zK8K4JK4KKKKKKKKKKKKF_g38EBemXeeeeeemeemgeXeegf9XgeeexCxzzzoenErMroeXeeegfEzSS9eVcghoeemf9YBe9ee9eXghrzzzKBfIUzrbzUzzzbryOxrzzbbsTXe9geY9egeeBeY91cUy6z6xtxbxzbzlzObrx6ztztue5UyT6zzbzbae7UxyOzzbzzbbtzyUyUtzztbyUzzbuecZeBeXeeecgeV--1ViZ-00JJIV379xwOLKKgzyzK2zF5g4ccBgcn9ggepUxAprzztxtyOzbzzbe90f9cXX99V-cAQAOx-PFLqqmemxp9zzttzIAzrrzzxzzze7X9ZeceX5ece---AorF0B4uUghzzae9-6VjJh_UznK---NUXV1NBEpOLYnzlJ--0X1X--Vl4pk-B5KYEc-D29vazJ-HkP9DmexzxxzzzrbztbseeeHeYHceXV-NC5uUF-R5YYCyX-2Vpc0jCF--5lM7-12TuM-hkQrZrS9X7f9e9enrSxrzaUxx9f9zzHhzUxqOaOsObbzSxoqUxyUY999c9Xcecce7eV5NDrSOLauUwzzzzEGK4K_0F2Z6YfEUoefUtzUzMyNNe9ceec0a2zdLQdyjwynxKKFznpGGJ--1-_X-AW0ZpjvnzCKKJ--1309--02HO---WrDV1sGfOOjzzn4KK-0FYN1qP-2W7RtfkF6J8G-geeemf9gemegfEbqUrxEbyTgecOwUbbxEbyTTUac-H3crrjCLEE1KoQBrofHegeecBefBeeegfAACxUHemeeeeegxrSrzxxoeeXXe9ecdAzUomXexzrzroeXeecc711_rI9nUSxxKMSryUzrzUpxKx9cV7cceghrrJnJmhBe9ee9VUrxy0a5-7e7VVX-7XccOVX99eefKKAAMxMIUxzMrxK9XXXXeXceXceee9mxxp9oeV9mf9eHgmeeWsXnHcmfA9oenJf9XcXcOby999exKKzMIJcceYBggghxrI9e9e99pxzpHeccceX110cXe7cXWzrUzUxzzrzrtzbaOcVcceXccce9Xceegcce6emeZe96buXeXoe7TZhBe2Bmc6eIBdC9eC9fHcHcAC9erxHed90C9MTUzoh9ZjJeofIAzHghHzI9nHYACCA9VxIHcfx9gmmnEJrKErJzSC9xrrrtyTOaUa0xSxKroxMSSrIMKqUlc6bztWx51--P7OyOy0tcX997V-NP6WsUaUbaOaX6VTOzzzxxpHnBnBggofCKSpJxUUo6pzzbtzyUzbxSzogfABeceef9mpSzoppI9e7X9nCCKMMK9fEI9ee19mfBgemh9W91WuI9gf9e5eX17N5NUXc0a1nBenUHfSorpMKMrHXh9XgmY9nMJmV1nIISC93fA9gnKBemp9e9XxKoeeeA9fSMzrxrpMSxMMHorIKII9eecgeceeee9gmghrKKCpKCIJonMozKJp6xyUzSppr5OttzzzzWWtyN5ObcV-5OaOWttyTTN5VWWbbzzrrxaOtbyNTUUrrSMMSpxrrSrUxxUUpSzSMKonIOaN6aVcVNOzUrL17ccXccVPeccX7717cXX-5V0zbzJxOboUKrKrrUxxrrSxxrSorIKSrMpUUISxxAESpGxrsVWzP7XXWzrrxVNXoccWcOcX-6xrV6tx0zxzUtbtzq99777WWVUV-50xaV0tsNUbzpUUzp9nUrpIyOzaUy9ge197e6zlbbbzbbyUzommhxonCHeIxxrxrxrUSxrUrrMKoogmmecmeeZcceX7eXHeeemmmn9eedCzHfoeeeZe_IMzIpoxHXKzUJxxUoUUprza0zxxxrUtyOaUUlbxIMKKKoopCIJpJoommeeeX9A9mmn9cce9Xe9ee19eXe17eA9mgnCKpJnBee7XXXcee7X-99XXeee9993cXV0ba5-XV0aOA919HgmeeBeY9mmX9ememef9ggn9ghA9mXcmeecX7gpCCCBnAAAABnCIICIKpJonCABnBgf9hBpBnBnCCCJonBnJnJonCIKprSKIMKKpJpCIKIIIHrSMpJjJxMpz6zHxCrrMMUSprKSIrMrMUUMrSxrSrSrrUUyTUbbtz6zbr6xxxtbtyOtyU56tzyUTUxzrSpxKMU6lWxzqNUSxpUxEMKJxCJnMKEUHhICEMrHxSUMSrMSrSppppMKMSSMKpKBxMKpppKKCBnCBopIKIKCEKCKKMMSpppSSSMMMMSSKKKKpSKKSKSMMMSrSSSMKpSSSppKICppMrUSyTUztbzzbrxaUq6zttbaObaOa5TOa5NOWWa5TT5-N50V7WWbaUbbtaOX-N-7-1-170cTT5ObaOa5OtttttbaOa5N5-1510c5V--0VVcX-1-V51-N7X-WWV55N55550ta6aNNOa5Oa5OaOaOtbaOaOaOaNOa55NNOV50a5-T50WWV-N--7nBf9mcmgcmmmeBgmee7X17eWba11X7VX7X79X97Jc7V7-V7117X7cV7---V1-X7X97--7X111111711-VX77V7-UMMMSMSrN0V5-UKKCMxpprSSSrMSSKprxrSSSMKKSKrMrrSrMKpprSrKrSSCKKppKpoxMUOzaTOzyUaTUttWtzbbyOts-OyUbbztVObyNNOyTV-0WxWWaNNN7X7VXceXXX17-7WWIBnIBonBd9eAA9Vc7NNV1CIK9117-797X7VX1111WbWy0xUzprSSSpprUxrSxxrzTUbqP6zrSKprxzxzzTUUUztzztxzzbtzSSUSMSzprSrrtzJmmfrSrSUSzaTN756xKxCSSIKMMKKpSKpMKprKprMKpSKpprMMMMMKrJxSSrSaNNOtVN6s---0WV17N-V-0aUWbyN0baOaOaNNOWbyOsN70btaUL0xLT6o-UM6lX6brSppSSSUUSrppEF6pSSSMKKCKVUMUL0tba-USSUKSKSSMKrMKpKSKKCKpIKIM6rSSpxMSppKSMKSSSpSrSxrUSlwT777VV---777X7XX19XXX--7V1Hc1--N0VN570c6bzKMUzrSxprK6xMxxrpCKS5NTT6cN0zltaTOa--57-11-V7X7VcX7c7X77977VN-Oa0aTObaUUoOxpKpqP70btyOwUsOw776rS6twUkUOtWaObX6ta0bVcOcWy5N-5T96XWaWccZeWWtaX97cecWzUxxq1X7cVX77VX999750a6VOttw1XecXnIBe9-VZceX7V0zTT-OtWWbrzSpCCUJltWbbbzxzUpoxopxTUUxprS9zMMSKKxGtaUtzV177177cX7X7X997-OtWaNX150a6V6rxUxtbaOV-NN0WV-75-0V77777X711-1X195XccccXZe_on9c29c799ecVOWaN-55NP-T-TUzzzzlzzzsUzxzzrxAqUyUzuA9770V-5UzbzOzSSUrOVOac7WzzxCrSUMJgpIJrKIHgrSJxSrMSrSrSrrSrSrSrrSrSrU55-X77TOe775OxsXX7X15WzMcXccX-Xee77-VX-UzkOzSq7UbzzxzSX5OVNUbaTP6xzrzccccce1XXeccWzzsP7ce-U6rSzSzbzUxxxzxzUwUqXcPVTT99XXce9eeXzS9cXXX9XceXe9e9ce9cece9e9ececeeeeeceexxxxrHee7ece7Ue9omeeXeeeeeeeccX999e9eeXgef9eeXXXeceec5eXefC9eWcPn9WeXeeef9hzSxHcfx9cBe9emee9X_Sp9e9Xe999XWyce7X9ceeeeXerp9eeeceecVeeeeen97d9ec_BemgeemVTOyTNUbttXVe9cce9eeef9e1ee95eeec--3mJ3-01RcfV-NIoOUF8R8uLgf9hIHeec1Xe9fBeh9mfEzzyUrHenxyUyUtzyUxzzbyTTNf9e0a0cWEvKdK_KKKLKOK_aJaPPOOUeKdUddLTyEukyvizjzzzGK43G3322EBkwBzkwwzwzwzwznwoKKJ0K1X2ABrpzzozzzaUWtacme9hxBcXBoeV9--7KZ5R0K1i5QpxUxzUyUzbxztyX9e9oe7eAHXe9eV--KycF0gAC-Bf9rUzta7c-54dtbV-61qbAAy---LztF1oAWqEUzrzxzbeXeecf9V-94pL6xF--Agu7--4xl31226aIBogfABfBf9nxxMyUztttttzbbzbyUtzbsX9f9e99eeec--5HLZ-A28MQry9f055LVqKKPKOaOddaKaKOOd_bizvy_MeOOOK_LPPK42BnJFzszEo0G4aLKOUjuOLO__GKKKKJHKG32K_KOKbnzzdKOLOeOO_-EoJG5KK_KKKGK2wzElGLK4K44JGJKLLLKFnLLOJF23dLLLK43_OK_KOOKFqKOKeK4KG43KKGGGOKKGKKJKKKKG0OKF_FOK_OKKKPLJK_KLK____LKOKKOLLMjidbzzdPPKOKJOG2pOKOKLLKOUu_PUzzzzYwzwydKdaOOKKOOKKLKaOK_OO__aEeOLTdzzEBydaaKdbEnzjfBnuzdPLLO_OLLOK_OLLLUzEnnEnzEnwwnz42zuRzEwwwwznK2nnwzEnEEEnnwzEzvdKKOLO_OOdOUEnwznnzYwnkEEzyEiuUvjzzzvjnyaTyuiz02yyawBkyeQeeOueddaUibuPJi__9gwnyaOOPTvuPJTbeLzEiYuEiaQEeRydiddddaJ-x4K4deadddaa_daaOdaOaOddePaPOaauddeufEeaLiuOfevduazjuzfvieeeuPueefiviiebe_3KvfjfEfiveePivjfiuiE-FGJ--3--4-FFF-FF33F-B-22vjyjeauefeiiuzefujidavuyuivfiuuvfeeuePaPiuvvjiiyyzyivvvvvyziyvzjzEnnEvyviviuvivjjzvjyyzwEii_viuviuo-2vjffdKHPdivgEijjieEigzjvfYyfno3-z2BzvvjeOiivffdideeeieOdeLKbeLuOOOOedaeOeidjgnueaaLOaafeveLyyvivffiiuuiiiiiiiivevfiiieiiviviyyvvvvvvvjiuvvjefeueieieeeddveTefeaieeeeQePevedeffeuieeuaeeeaeee_fiffiieeQeffideufj3323FwEjdyuMeuaveTuQeuLEeudG33_eLVzizvdjfzi_JibeJF44fzeeu2vc3BEfdvdjfy_vvfyEvd_TyfyeTgyY2yzFF-wz2zJGF3F-kz-F22Bn-0GKG43F-2BwzFk3-BoFC4300-EyzjzBo3-l0-zzzwzwzEBk2B-440-04443-EivzjjvzzwwkkBn2-B322BB-zyadY2-B2-nBkk-oF0-o-o2wBnnBnnEsnE2Ezsnvzk2nn32-nB-kk--BBl-2-23-3-BF-B-ysn2-kBBnEBBkn22-B--00-00GKK43GG03JG43KKOGJ_444OOFddF23BJHJGGGJJKOddG-kBKHJ44G-nB-K3-F3-F403JG3GJK45KGdGK8J3G44-3G04J3_LK2B23JK8G3FExKOLK__KGG4KOKG-3K4OHLK_affedaK-G-n2-F-wn3_aO___KaPJ4aOeadaOaLdG3G3GGK5O_OOOGGJFG3FFFF-k-22--n--GJ2K4KK_KKG_KF2n2-2-C-nu22-2-nBn-KKKOK_OPaeOdd_eOK0O_KOLJG44J33-FFF3-F-2-B-B-k2E202--n-wnE2yEEEB2ynkygEfynEvijz2y2GJ2zgzEgwygwyzvyigwwziiiveaaidfuuevfiE22-k-0---F----knBnBnnnnBnBwzBnnEwx-EsnGJEnkCJBBBFkB22nyaLdfeaBknB-EsnBnB-zznzKK2nzznEzx03BknBnBwznByEwzBnzBynnzjzdLJ_OL_aOigwnnBnyEnzEEnlGOJK4FpF-FnBOJGFzywnwkoJKOK_OK____aOJBEBwnEEEwwknwzzzzzzzzzzzEBwnnwzEswwwk-nC3LK2BLKK2wznJK4JK23J4-FzYsCG2lFoJEC332JCaOT_aLPJ8_OOJ34JBFnFwBEK4JF3G48K_4_44HLLPdaPaeOOaLLQiuudeOdaLOOOOOLKOeePPduOaOdGOdGJB3G2FFnBB-nB4K4_GG44GJC3GJK4KOKFwB-kG_F2BknBnnBwnEBzBwwnzwzC3EzwnEjzEEEEE4KK0-zjizwwwwFzzvih-yC02yijEnnnwkF2Ez2CJGGKKdeOKaO_Gbd___Fo-nEB48O_aOG2k2pK3EBzF2042wwwnzznnEEnlK_4F--Bnu7-D5P0Mj4-NFneHn99fHdEpA9e1mrUrMMy6rbyObacVUbsXc-95VQqU-0RC72gfrLTUX9WL7PGHOKOLKaLLO_aOzjzdKK8fyy2yvzzzzjnvEyszn-yvuyji_KjEzfvvdedLOOK_au_K_8KK4O_Oavznwzj2vYyiizdQjjyvjvzjnFJ43FEvyyvysEV2vkG-oJJ-J2vC2nzfvdvcyvB2EgwkznoHKJEKF44K444Fwkzjx4JEwoLK2EGKJ34KOGFCFK2C3GKKKLujnzuK_aK4K2Bl0KK_K__OOd_id_032E-wwwznKK-5koy5rxzzye9XeV0NQGfQzp409Fr2emf9gemeoemhxzoeenrzzzzzzxoeeeeHeeemnrUzzJr6zzzzbyUztttzIzrzrtzaP5Uxy1XXc7TOVNOcXemnCBoeVOX9IHeX9ec9V-7QyMR-O2VLYCrzOcTXeV-7R7oR-42W7vEc-16Tkb---xZJV2sUexOjjEzzlK4KJ--2yzH--10C8--0-gFV-7VNER-038rYV-7WePR--3FiX-8X7VOizvlGJF--GAnc-q7b4qavzwz43KJ--3In9--193W--G5YBk--7uzo-03SVI---Z6nF-JH3JgtV1NZFfOiznCGJ-03ZUnV-NZy-Ok--HUC7-18Epr--G9ncs--8SB3-23innD--1O-0-6lCPTmmnCzzbWa9c--8glJ--3qO1-3XRYCbzK-XlIJjmegemef9efDUzwUzx9fHfBfxyTTTUpsTUxzWttf9eeWtzu7-19Vk6-2lJH2nUze9VKcf22OuK5ObzzuOLKUzviaKzzzfzvwwzEwwwzYBzB0GF5JGaKOJOG__3a_OJBG4-PlNXPmfBnBnBofADUzJzbbbbbzpxzbXe0ccX9Bc6s--1mmx-6lYOwmextzUrP7cc-5BSZbV-45HC2T7-9BdhMxF6JOkqwemmmmf9e19nJemmmenzryUyTTUyUbbbbzbtzue7-qBstqKOOYvEEBo-45TmAqV-1Bzxq-CGcDCxzS9dEMrxowOX7V19X-6YINKaOgnk--leh3lV-cqZnQo-AGhLznASpxpObxa-cXcXV--sj9F--RjYc-9DO8aRk-JRodC5V1Ntt6OKvznCJ--6Flm--Yf48k-BTXJhc-LEJ7aTYC-0BTkwjJhyP7P1LYtQd_KPPLbePLnuafp-yEeddzzEuOiydeKOGdzeaK_jzjjuKKaOaOUEnynBzvnzVyzzEE4FnBwBGGOJBF334G0-3JKJEknBBlKKK-wnCF-RUIqgju-4Yv7daLnB--6voH-EYxyt_ueaYBBE24F-wUjugoqOWc09F4K5OGOOYyzBzElK-1m02NnLNP--32h4-0m0qgnqV-1FPCq--H2Gus--FRXJ--7Gue--38td-6H3zimfGzxLPWaX--3E7C--16gBV2O3CZOuLecn-n3--RX7jgyP--3G5C--18RXV3t3nbP_3_iju_Hz2-B-03XWAgfxyTcV-047KF--Xjy7--GPHJ0W7iC6CSKKIICJnCBemzqUbV6sUa5PX6w1711-V0d4t8OOwwo--7o-P-3ZP3pin4--1CVBV-85mEN0d7rPv9hEIBeXrICxpCAIBtxrtbttztWV--UWc7ec--ZRVOk-3Y_fi--3SWl-1HE1urq7V-06YZF0JYnKBgltzy9c-1GuEq--1Ey3V-87P_R--8B0X--3aep-1HIL9xw7V-08jeF1RZt2BoxCKLV5NOaTeV-LHXk5OUn-3B_KjRnEJxK6xSIBnGsOV5-5-N7e0PZfppdQivevivviuviuvfffiviiiuuivV2vxJG3G400-F2zoG43G3G3G43G3043FJF-B_XHC--1HrHb--1Ml9V0OBPSTykK--mPGuw--0CdCF-3bQrg--_-bGk--c3w7-1J1Tb-nHWSNmnBmnCBnBognAxAACOzzzUbzOzIAAEbaOtbpICxtaNHW9WWttge-Ou9dHce0uXWaOaNTc0qJ_j5Tfuiyfuvyn-43-C4GJJF-ZdZ-CEN--qKF5MivvzoGGJJ--9fZm--4NVG0OHj5Imgmgn9mggggggzbxlyUttxUxrltzzxUp9mcegf9nBx9HzICBnICCIKMbaOWa0c55OWaUlaOaUxxrIJogmqTUpK6aNNOaN0xMUNT1-XXceee7cN575ec0cecV-0P9QF-3hh-D-7_jKnaJ2nyZ-YA_nYBnBnEUttXVOc8aMCmTLLKaaLKPddbjiuievivijivfivy_PPeaeffjyyvjjvzEnzso3-F-3G42l4J-2zvEBGG00LLuJF-3KFK003GFEyxG-nEzvp-B33G_JK--muI9w-5OSJStaOeji--wBzzzKGOK-0JieNwmeCzzaV-TMQgDzvlJJ-GAk2vrxkPe7--MV8o-6At0AC5--OURXy--gjqMEraeV2OUrqueTfVFl22F--jvyN-PNAgydcnF-Yn1WRrSpppMJeYrJnrUKq6ce7WzTUzUUUNVNUtsX7VJece9XXX97c--5440-2I2OHnJsOV-1NxR5-Bn6z2mgeegenBzbzzUbtsN--0_72F--nKlc11OxXDLKKO_OKLQvzwwwzEnnnnKF0RnydBghMMNN--dOfypPMdfibveueeaPaOO_3eafd_J8KOKKaaOaLuLaLvcyEieQevy2l---GFpJFzz-ynwwzzyeiyv-Bx3FEjjzVEvV2s2ufk2G0--3FF2020003JG33F-dC_NYAASKopSbtV--77--QufZ--CxYX-5b-NCbjY3F--sGR7-DRSQ6v4--2ZTFV-OmFuQF--tWp7--Rrk3-2DRQfF-ObG_p_LKK4LQjvvvvjk3BB--2cnkV-0opdF-BuUUE--1SP5b--2fOPV-0qQ8F-JvLKBlV-ttYkOgB--EKfm-GbimObjzjzzK4JOJJ-QEW629fAEU6aT5-Kbx48aOGeQiv-nzVk1K--4-Bei-2c4b_aEF-00fX7--VsoZ--FYHH--7bwK--3KeVV-19ymF-456Wg-0cmm4s--oPB-o--PCDOOk-46F9i--7vjd--oSsBlV-uEMIQY3-0GwSv--1EeMF-06tTc-5Z2ZLk-2HUyYu-0dG4tY--3dhcV-1KhfF-09wIc0ea0y5OddePfiivc-kk---0--hB85hIq---PPqqQ-ACDhYBegf9nBoyOyOtzzxAUzUxrxzxKrqUSHnEyUzzOzbcXXe5e9X97XXXccX9Xee--1UpAF-SFcxhOX-1eB0xgo--Jd31--9KJS-9pBVymefBnKMUUaOVNN72Xdb-LMveiuLKJKMinzzzvfY2BzjEzzY3GK3FK4KOGKF-0Ji17-ueZcLLyvwzYGGK-0KK8igpzza9cc4aecw5eQeefeK3iifeyVyyaPysnzivW-yvivjf3G32JdFG5OJG-3--EB2003-C_GGF-0M4Pc--fYVJ-0L1VIV-1kjSF-0NOQ7--gXeJ--LIdm--AAXh--Kaimk--h2YJ--LYMm--fHOlV-4QMoB-1fQzGbV-OM1DQUKrSV17XV-PsGvQ--0R8xc-Pi9hLee----4n7gV0uuK8Ovwo_F-0SPF7-Tihf5jioG3-rMLqIMSxJfMpp51-Uk7-X7mV-1vH3F-0SiM7--ivJJ-4MU-YL--5j0_5V--MW4m-Ffnz4uebcnu-E0K3--4umFV-1xQQF0KULdhJnCaOX--5ji96o-jMt7YCKBproNN55-KC9-7-Pjp4LPbw---4zuVV-2-p7F-4VdEB-3g5r8awo-6q3GTnIBnBlaOaOV--kXLJ-0NJ5IV7f1wFOePedueiffjEBwB-FFFFFG0F7pWV6CJfCAHcXBnHgpIN5Ox6lbxrJpMSxbpNN7V56rMF5-7-X577V--lo2Z-0O25AV-28oRFJ__7yBm_ICCAEJgcnBdJonCBgegnJpS9XXe7nIKCSSKpxppCpKUrbzKOzaUUoUzKLOttxGVV557-OWtbVWV0a6ryX7X70cX1-cUu-Uy90zaPcXe90XX--AA8ER--Oap9--gnQdkH4b2ThSprSrUSrMSSUSxpMKpUSprMKrMKSpprUMMSrrSrSR6rbr--N--0X71d9-VV7e7WaWu1Zc-cVe95BcZe7917X7cXV7VX9eeX9--Bw-4--LXIak-9oUkasF-KdZHh5--QKOSQF-0f7Ac-DpZnLQC--5ifVV-2M_TF2_g-RhCKoxKSR7-6xX7OVh9-77uqCsLOaOKKK4K45PKaadudaaeddaejyeedeTsz--o-k0-nzuafiueskznG3FB3FG3EBnknEs4_OOGa_K03F-BBzvnywzvvzEBBkk-EQ93ASrF17--hcV8V-0ho3c-1r18a-KLsKtn9ghIKopJxGbzlz5PcOWWV6bZeVXV-erChLbuawo3F-0QgRIV0AS_oTz4F-0iqsc-LrVEayh0F-0jBw7-1raaM0sqwtimmmocCrUzKrUzbxJeYBexrSIoT50xMUUSrzrrxxxrppMMIrI9gnJzzaUOzSrSUUzxtbX7OsU-UOzrUxxSSSpxSrzxzrr57cWue-BcVX-X7X10bqN7e7ce7-7cX7eX7ecccXce9e9997eBhHmhBnBme7791-5119cXV-ATZeR--Qs0X--CxF4-2M-EHrMNVV-1s18b-0M09Rrc-3i33Gcy3-7r1pBmhExpSrcP9-7-3i6ThbzJ-0r2kLmxV-LsT9bywKF-Cl8ajc-5sg76o--RNyP--DBcS--r75Dw--AZP8N-CRYLYIrWcV-AZ_gR-hRb0Q9efBUUzzxrq7Ve9--DIcG--69X3V-2_KXF0CmrNBxUTN7e--DM2x--MBNss1qtbGTeeeiebfeviufifjG-FF-FK-2F-F0-F--6CEoV-2b0EF-pnx7hKlVX--DWBO-IrGX5pJgomd9Beefrr6rUttyNUsWaN9c-iuOLLLPjcnF2--0p_uc--uwAJ-ISZnnCIKWa---QgbdT-0_qJ7CprKy7917--Do60-0MPdwpc0LirO4eLzjezyyzzzyyzjzjzzzvvsFEiyn3OJFKKJFEwwKOKJJKGd_GKKG3JK4KJ-ESx2nSrP79-5j2XKaPVn--_t4Cgjtc-1wYGa--6ZPXV-Ama9N-CTK4nUSXX--2n3-F24thzhrHcXnIqUttxbcd97-3jCxpvh0-1rbiZpEa1-JjETd_azzgznzC_KK4F-0TTz2V-2nrwF-Ctvzgs-Dwy-LEp--Mcags11x3uLKKLPLLLOeNwzBknnwwzECF-0uAGc-ax4e5iii30---6dYeV-2pDWF-0v0pc-uxhu5KvzivnG3GF-0vS9c-Tximavyl4F0GTtRbKpKKKIMKorSKxcP77--50cV1--X-0jSM8x--MlFHs-PyMyriv3J--6njmV-AuIRR--UKqu7wjf1GaaeOdiaPdeeaeadePOdd_OGG3FK43G443G3G-nBB-En2B3P_3HKJKGJJHPdOKJO_aOeOaaQe_K4_F3G3O_8PKOeLOPeOK9TddJ01OaPPu_aOdaO__OKKaK___GOOOaLLLOd_-9PPeaPPefeueOH_Afeeeueuaeaieeeaadd_OdvvivzynwnnwnEnzzzzzznBnBzEEEEzznwzEnwzzzzvizyzuuaveuePv-wnBwwnBnEePaOaPaOLEwBknueaaMwzeeePPujjczvyvwnnnEuuusEnnEEEEzznEBBBkn2BnE2BknknBnBwwn2Bn2B2BBBkkn2--3Bk-k-F3F3J0F-BK8J-0-3Fl43J0JJFC0220-FFB--434_F02-3-FoF-3--ULK1-9jk6__KPzsnC-0rs2uxu7-5z6oLo-0Ua7Y--2yTuFFpzEegnKCAHYSIEIBgmnBen9mhJonKKpKpKIICCBopKMKpCMMMSxxtbbyOVNN50V550VN50VN50WVN-0a--0xLN-V--711-V0R4w-PfBJ-5sCnMpUSzGcVcX--36DPF-a3T2CpX7-21Rkb--7L9iV-3CdyF-D7K1E--E3yyLPB-AsdryprMSrUMUXVXX77X7-0lNuCb-0sh-cpsV-24z4a-0O5skoP--HJcO--8cjcVMwvW_PePffuOedddaOd_OLivedaLOQswwnnBwnnBBEEz2EknBl___JJF2-ddFJBB-kFJF-3Oxo3mryUe9--oNo0k-L_0tBtV-x9UXPVk0Kd_2QCCKJnKMU6Wy6x0a5OtWWaA9f9eX9VNhBeeOaOaK_aOaOOOOOOOLK___aLLLL_aLbzjjjEnnnEEBnEBnBwwzEzFnBzBnnnBwkBOJ3--9Q2JV0hFDWPTj03-0esaIV-4M3pF-DfxqCV-0LPM3-8fbYnBy5-Cq8_WadYzEwLK3--A59FV-CZXbR-2ghDYk--LQk_-0vCsPnTV-0OncZ--gxEe--LXbt-4QGLNnIMaTP9V-4d4NF0DoYGBxBttWe--LdTx--AJjgV-4fDgF-1q1n72bQ0Tq_fzyaLyy__JbzjyiyEvnzoEzz4K44GG440J0GJ--AQaoV-hj4xQW--QUtTs-0QzBZ-2hzuIu--M0W0-3QVpXzUSX9X--r954k-6-LVD--s6udk-U12pBUe--NKbO--B9nkV-55gUGAILAU-ee9eeXeeXeee9eeXeyN9eeeee9XAzbzzzUUtzxzrza1fzrzs7Xe9XmeeiUzrWztzbzzsUztbyUUrztzUzzyUVfzMzzzzzzzzzzyUzzzy1SzSxzrzVczzSpUzbrzzztzzzzrzzy1cXXecXe9zzxzV9eeee99USzzzztzSzzzzzzzzzzWtzMUbUztUSzzzrzzsD2xzxrzbxrzbVeXUzMMzbztzztyUWVX7cX7X7ccX8rtVX2Vc1gVWrVNOta1UbbaT6byOyTMqXggpFemnBnLpThScXXopfJppUhSzt_USUrxSxSzUUKwepzznMzUwefMzSCJXAKRemgegeeoeeeeeeXe99eACMxzUrxzUzzzPmeceeeeXeepzrzzzr9eee9e9ehUrxzrzryUzzzxwg-3sRUlgzK-1wGfBrUXc-1s_20ck-8lARQMsc-6sakWaUYsG--BJEyXtygSR0KGMwzkKK_KK_KJKK4JRnEEEEzEnwznzwzwzzzwzzwzjw3wkznnnkKOKGnEzwEEwzB0wn2vyizz0nEEqPvnzzzwjjEjzEEwznzzEzzwnvz2jjvvzwnkTzzzj2vznzvzyzzyzzwzzwzzwzwzzzEnwnknzfjvuzECfjDzEBBwzEwzEwzwzzE2vfwzk6njvw-nzEEzEzyzvjvLizyyzzzyzzzzzvzzzzzeOPPKd_4aPuwnaLK_aOezjEwznnn2EEnn2wzzEmwznzEn2nwwzznwwnywwzzvzEznwwnDPzzwzzzzvzEvznzjEyjEEnnwzzzzvzvzywviwzzEBwzwzzveznyuzjEzzzwznzjwzjwwztfvzznEEEnzzzzzwn2BwuO_fizzvzzjzjDywzjjEqKfyvzEOfzzyLjzmzzn2hPjjAwzjvjezvnfzzzjAzfjjqKOO___OL_KKKOK_LKLO_KKaKKOaOOLOO_ePLiKKKLKKLKKLOOKa--wN-ww--DBg5N-4latIyc-MYUfaRyCF066q1CJxa5X--5F6mF7z9BugfEUSrSArzxBefBeJcrrzbtzUzHmfUzzzttVX7X7XXX7XXX9--yKGGTsF-2mkw2k-3tQstjx4--BkdsV0DNK7PzGF-6B9ki-9tXkO_K_zznl-0RovXrc--OeZW-IRqTXoeXefUzzzxHYUyWzzzu9XZmZe7-1tmAWzJ-0nbeYV0DRxYTvG--2Dto7-0bYlJ-0nm6v-4DTdBTzyzvzvlJKJK4K-8wxJTrrrzrzOceXce9V-DTg9R-dnsbYExxryUzaeeceec-6bz2Lk-2o5Gnu-1u2YOv3-0oCyAV-iaLAUp--CCXRV2Db2oOOwzvnpKF-ppYW0bVVaOyUzzzrxpxpzPk-2eBMb-8xGoerUUxzry9Xce9XV2ydQ2OK_OjjnBwnJ--pC19-2uliNEyk" :
		ap.pZ === aAE + 2 ? fw =
		"JJAf2uP6y-0nEiiuyywnyueuTbfevfvvjivivivjfvivviyvuuyEgzjjzzvviyvizvviuNziyvijvijfvyvgzvvvvfeu0-F-n5a_GG4KJGGG3G3G3FFJFmKGJ4JGGGG3GJJFJG3G3G323G--kLPeduaKGFGGGG443JJJJJJG--B-C0FJK__443-BJ-66wmpBnJopCMJpCCCIIIJoopKKICKCBnCKJgooopMIDOzzSzUzbzzUSyTUxxrrrrrP1XcXXX9Hcn9cceemece7cPIoeX0sWWaOWVNTOcTNNcN0V0V5-N0aOa-0V--N50a5Obyc-M0z3TPOdgBnBF0NOpxpMV7-M2mMiLbinz03F0sTx8mfrNT-2l6QEdMwwp-5XX7UMTP1V1GIuvaNn-5Xfxrpw5XV1GNTEfn4-_XvzjAAA9mfA9ed9fpzyTUzyUaUyOX3n59NTKLLKHPPPO_LK4iidea_O_QeideeaLOLLJG3-0eeddOaPO_OKLKzEznzjgnnzBykknByEYnByug-3332ElJ222-2wBko2BnBnBwwzwx-9Y6j6rrrkccc-E5ctEizpJF-aDYgSMGz-X10G6VyjiyuuPeiuzjivh3G3K3G--k-9JGFAPEIZSKBghKSMIpKpCJnI9gcXeccehHccoeXBeoppKIJoghIHnCJnJmemmecmfA9jyTUzzzbbxbV0WaTT-OtWWWV0zxtyUN6yUzSxrSqTUztaN71190V7-5V15VUy--V-lxHEg--33oL-67Dhyu0--3FoL--7ahw-LGYowfzu-0HFMIfF-aHWWwxxxcXX-E8ZrUdfVl--TIJLzSr17V0wcDLvivjysGK3G4XaJb1zppIJpBccccge7fUxx9eocX7cXX6y7Y99Heggen9nJdAHp9Xnp9IIJfICIBdCKKIIMMJme19eXxxp9X9VVfEMMMSBpooe7XCSBomccxxpHcrKKCMHmXXmcxoeX1mpJe70BrMJmVV--gxExIpJcX71nKCJmhCKKCIJoopCKKKHX8KHd9nKrKBj6xrSrKpz6xSMMSrKppwObaP-UzSCAICIKCIKKKCMMKKCpCMMSrrrKpKprUSprMUSMrSprKrSpSrUrUSxpxprSrMrMprSSSppMKprSprrSrxKSUSqUGbqUbbrxrSxrSrKHXXeggeYBnBgmnBnKCrJnKpIKpBnKCMMrSS9chKKIBeX77EIAE5OxIIKKKIIEKSKSKKSKKMKpKpKKSMSSSSrSzxxxzlzzUzzzzzUxrMMMMSxxxrrxrrxxxxzUzOzrbxzrxzzzw6w6yOtttttyUbbyTTTTTTTTTUtzIrzbzbzbba-71-VVV77V--7711-V1-1---51--1-1-V0cN-N5VN1e-ee7-1mc71Xe9fIBcVV0WbyOzxX-VV7VNN5TUzUu1ce9menBecmf9gxHc7c7V-777---50VP-V-N-0WxppSJpr6zyObzttV6rMKpUyObttbryUbzWaP0sNNOX757X97X7ce9XXXXXVc7-V-X7VX5-V7eeA9menA9fBnCBnIIJoorMIRObpIKMJpppSSSMSoeX71-V7777X97c5V-ccWV0VX77--NN55-N--7U5111cXXenBcc7fABgcX117X7c-gf9emV---1--XXXVX7X17579VVV117Xed9XecXX--WV5Uzz6zyUzrSrUUaNUlxtzXXXee1777X1e-5NOy--WV5OttttaTUzyUrxxtzzzlzMUrzzxaUttbbxWzxpSonBmpCCJpCKCIJpJooeACHpprSxaOV577U6sOWV-NNN70WVOWzwTTT5NUxryUba5NNOba1cc79cXX199X-91X99mhIHfJmXgxxxpHe9XccX997c7X0zV--V-N7P6k49V711-111X-77cX79mmeHeccV1mdbn_Uno-DKNVSo1-O9kaiKKzzEzpK-8_SLEzzzeeeV1Hinzjh3-8_UsM9mjtyTVBHk8AfiyvivizpG43G3GG--0OIzV2mnjMaLEBxn29mc4SSpprSSSUprrKprSSpppKMMSrMrxrKIKHhKHfIKKpIBpCIIJpIJnIKpSKJo1AKKpppxprSprpMKphIKhMUSrCKMRpMKrrSMMMMSKUVUxxUxSJe19efAKKUbKnMxKKUKIKUStaSrUMTUrzbzxxrSzzUy5SSKtbqprTprzSxxSrBXe9ghSrMMUyUzzbySKrUKpUSpSUMtV---D--0aN-X9997977VVe9XD-19XX1-9XcXXXXYxzUttzbV-7VX78by0rUSppKMbs5-V77V77X-X71--17-X-7V-0WWVN-6byTOrJepKpSrpxrUSSIKSKSzrrrs797c1711ObUSxxpSSSSSSy5--7997VV6z_rrSrxpSprs-7VX17XeXVXN-11-TUUSxztyTT5ObzrSSrzbtbbtUKzrxrSxzUrzUzShKhMKrxzzzxyMtzqnAA9mgfAAACKICBnKzbbWWbaOtbaOaTUbtyUyTTTOaOa556zyMxrUtaTUzrxrrrzSzxzbta5N0s-ee997cX97cX7cX7X771-V-aT--V17V7X1--V7Xea6ty5T5Mts5--5-550aT55NU_ySxxta5OVD--0VN5NND-N--8a6a5OsN1og55OVVOta-75OTSqhCMrBmhMbbtzzzzta--NN5-8Us0V-N1eD-XN0VOKppraT18zs0SyOUaOa5OaN1-VcX7X5OSpSxpMSra5NNObV5-N19cVc-W_KMSrrxxztzsND--MJpKMrzb_pyTMzUa5-0a5-X-VOIMMMSBnKKSMrMzprzaQBen1ceeXcccempprtzUUSv9mmfMrxzUMxpUUUrzbztrxyOzUxrrMzbWbJppSvC7gmenA9mgggfABgnBf9nBppUrttbzUzCKrSSxzbaUxPfMSKpKnJhRpIAIIKrSzUMMzxztyTObaTOWWaTTTUbzzrza5ObaTOWbbbUrSrStzyUUzbyN--s5T2rs-1XeXeefBn97VfBnIBemf97cXcX7bWV1111c1eiN7f-ABa6s19n77X7g97cceX7f11UzUppry-N0MMAIKzV4UW_rJoppza55-TMSsNObztaOa6KzV-77N-SKKSUzbaOaOyUtzzzyTUbtzxrsOaObtttSraOWaObzzzzz_ptaUbyMzzyUtbVUyUrUzzzzzUzzxyQMzzUzzzeeeeXee9Xeee9eeeefKMIKcf9ggnABemefCCKzrLf99X1fABgeeXAKSSMKxxzUSrSraMRpSxrQA7X7X9oopBo1N9gnIKCIJmmmnKIKJomn7emfMBc51997cenKMUzPmegmfMMSzzyNA9OzzUUIKMUKrKpSSrUrxza6SrMSrrMSrUUxzrxxxrUSSzSSxSUSxSrSSrSrpUrMMUSprrUUUUSpKrySzSrxzzxpzSppprrzUrSpSSCSRprSMKKpMKrMKKCIIIBohIBonAAABnABmgemhBmmmeenBnA9X9ecceeXX7Xemmcemgef9nA7en9kecee9eXeX1-enBkeX7XeXce92VXX99ceACBn9XX77XVVV--X7XemmgeeXXX997VVc75OVeX9hAAA7eeme9eXe9Xeeee9e9ceemmmmf9meegfHenBmfBnA9mgggemnBggfBnIHmmekeeceX9e9cXXXmoeceeXce9Xce99eXnBpCBpSrSrSrMSxzzxyeeeeemkeemgf9pprUzUHmeXXem99e9eceef1dbs17ecepKrMgg9XeXccX-Xeen7cXeenBmnBghCBgnBACCCMCKJohCCMrzzzyUzzzzqognBmnCKprMSMACKpz_wmoogepCKrMSMStUZkeeeeAH15-11-X9hCKMSRomcgpKzprpprs0z_rKppzrSrzSpIKIBgXmprrUKIKKrttpKzSUBomm97ghJpSyUzSzzzUbzzUtrzfAI9epnHceceemegghUUzxzWbzzrbTopMSta5OVOrzzUSKUUxrsOrpxQCSrIIKSxSrSzSrzUrUUtttztUtbzxxMaOV-sOWV5--NNOUzUzxzxzUUrSxrrUSrrSzrrSxSprSppprSpxrrrUUrbbtzrbbrztzzrbbyTT6bSyOa0aTOaOy5T6aTOzbzpxxxxpzUSxs7XESrKyOUrtaOa17zyUaTOaOSxprKCKgnIAAABnBnKppppppJnHnCMJnCCKMSrSSKKICCKKKKppKo-2AYFDB--MPns--j8uk-0TwQV7mzO6ievyyvFGK3F--qNX0zxzxrXce9c-3mKUw-DOJuzw9-lBkNyuuuviyzjJK43G000-OaPJEprzSKMrrkccc-1997-2C8pDo-uPOqwf9mnbbtyTV-2Jzv--5gXT-CCmSUvvGG--5xsy-0D-rE-4b-qzSqX7--sMmk-0lNEV-IZ0nk-tm6EnFN-Rt3BvgF-5ReOUc-otNAvisG30DRoZzUzzzrwP9eeecc-3uJps0eSSKRrMGzrzrrM-V-eXXeX--2fpn--6MiT-0DoXD--6ULD--E2lg--TGhs--wrkk-0uNAV-npyzx-0bkCEF-6EeL6jG-5bpJQAEbaV0nuubvp-0dya3mhrk--BzMKzF28zMOzrMUP779c-gziXufkG-2byBQrcV-J-IhV490elopIKKJzlX70V---2FCPyV-HVlaxpX7-x0_hzvvGGF-12_CV1o6LCaeB---Vy4s-K15tuR-0cH3EP-AFalyPf--1u44Wxxxr17cc-CFkqTusBG-2cO5jMcV3oE3YuuiB3FF0P7tWrre9-4GLRUh--19rRV-JN8nk-1B7iV-3OQA--cpNzV8oQxrjjizyyw4KKG44-1d-ezGV-_77wzvGF0eJQZmxL0V-C9jlvF09OI0rTX--JoI0k-PTDyyV-40oK--e5AbV7K29M_OLMfgznEB4-IfrEMASpSUSq-7-Nee-ANaSDyx3F0A69npL--1qoP6bvVF-qtlNxCKCUa0V7V0xqOguudaNznk-G3-Lvq2RrOc-2N7SOfvlG-2g3LFmnKUrla-7X--Vg031A1AJgoxMSporMSSr-XV--10aNXeV-y7CVQfz0GF0RIcNptae02XdsiLTezvzyyyzjzGGGGGGGGG3--GRVT-QXt0TTyyzwK4GJ-r5K0genCxtwT-V-yBnotTvg-F-RR4WyVBNuCtdejvYyi-knBLOFJJF3BSAjnMSzUbsX9XeV3t0vf_fzv-GF0wZ8bxrOe9--8AQA--HN1m-CZlGTLRwx-cmONzIxrprppKprUyUts-XccX1e97cXc--_7pw029QbgoonJUROV5-V-iJrguik4--mdjY-0tQAdaRk-BiCss-aMQLTjJ--3jUaV4tUqAvjzx5KGF-YB7rwfzwOeVuOXlO_O__Kbj2vizuviyuuvfeveTiviynvYziefiiefvfiYvjB-444G3F-0-2-kJ304K3GGG3JG34--F3GJ-IBbGxS--3yOw8PPd_GaaiC-Eueibvyvx-304--C-2IBzcggmeenCMSrwOaOzKHmnrUSxzTOu--V7VVV9c-yPFVPuf0-F0gt0ZpKs17-aTPhOiBFxRy2ZmgnJeeXAICBnBenJzSrKKrrSSrKpMKJnBnCKMSMIKMrxSOV0V0zzUKSpppSKSEKIESOV-Oa0sOzUrMKSppSUMMkP77V-0a1--VP-17--71--7-UxSrrrrSJpqOtzzOX770hBcX7V5--XXV11cc717X7X9XX999777X7e-_chDLLiiivYEl33G3-Vock29fSpSKonCMU5OaNV-NNX7c2DaQYtPjzvjfiywGK33G3G-0xDlzpUyX9V5PSx2jyuzVGGK-0CFZWnwNV1uXF0_fBo1IJJoSSJnACCCKppSxyUV-117-N711-6evlav4-JpSyQKUSSSpaX517c-c-yg6luPzk3F0CNJQpy9-iumBnaLKKeudOKG_KLKLLLueLOaQEEjEjyinEyzejjnskBnwC043F2-nn2zE2EEoKGKFASOdporHX8CBhzxraUqUzSlzSX77eeeXBc0V-LhikvW--KmlL-EfebDLTskk-YMe-RrMTV7V2uyCCaPEBC-5q1sjK6a7V-A2Ih-Aq892rMUNP7cc-TlB1tv--ANsVBjV2v6d6aOwnp-7qIGAIJlaNV1imQQOPszivwzE8GGGGJ0vODuRhCrppCBpULN5N7NX90WX-6gppqPk-GqSXfBnqOxtaUemec-5nnTs-YPD2wz6re9-3QGmz__bnno-2PJQD-KhKnTaaTn-nF-0Pg_N-aphUzj4FKhhRbmhUrKHohIzMpxrpKKKSMKSKxrU5N5OaUL--X11777Hf9VX-N7--5P-XHXe-0hhca-WqtqMCppppSJp6ltz5NVXV-X17eV0QUJbjJ-nREfwnBwOtbae-IiGGaLPvEk0-Er7eI9nCKpUa0V--1v_ZSfcl--0T7Zc0TwsLPNzgz8K4--MdCP-8jMTqMno-QTv6BfDUs-CjSgLdjBG--rknYV0vttlfW-0CxT2mcUV6Qv4daeffkn3J3B-EUOXBja1CjifiOvd_LdKKaaOaK--nBw8aOFFeeKbfivzjix3En-2Ennz-n-3-2UYTi-bkAQ5LLKaRzgwnznGJ-MWJCRr5NV0wBylcwF0D6jaola--BJZx--NfgX-6lRkav3--sx_2V7RUnUaK_aLLQjzzz-atBrI9mgmnICCpCKLTOaOzs0aNOWV9c-E9stskaiM_-pIJnKoxxzxzrUrrxzUxzSrUSzSpISxzxbxzzzzrzzrzxbzrzUta-0YBe7mf9eeV--P9eee7XXcecVXeXceA9eeeXX-c7T9Bee997n9X-0wqC2ylF4iQ5frxSUzJzqNX9cX97V1wr6EuslF-YbY3xSUaeX--x1Jxc--uDnn-6S8wKaPedvn-FFB-zea6RfESrSq7-WX-6pPVqNx-dun9rIIKMSrSrSxxBzbts7XeX97XX7N---2MXGF3ilDMnrSppGa50VeXcHjS0jOLKO_LOaK_K_K_LKK_JKK4K4KGPedaOK44KOPaK_3aefffeTzivizzzyuvkBzwzszEEnwnn-nzyzwzv03G00-B2EzBEBwzBwnEE2-ow4SEIJmcccxxrUJnBonSrrztzyTOts-9X7VX7X9-YvBN2wwwwzvvjjzzk0zOXTUyUxzV" :
		ap.pZ === aAE + 3 ? fw =
		"C0DX0NP1V--QqeadnzzjynEEzzjjivdivfezjj2BBwzwnEzzzzzEjnnvYBBBBEBnzz-UV-hflzUUSrrUzSxSxzk0a1-V50K-0pMiudevf-zvfeBnyviVF-F33-yzgp3bVV02IKUrHnUzzpHz5UzUzSKrUrzbyNN-OzzxzUUUSrSrrrtzttzWaOaTUzSxxaOaOxrKBnCSKCIMSKKKKIBpIJoonIJopCJpJpCCCBnBggeXn9eccc9X7geXXn9efHfBnABemcXX9eece7XHXeXecegeeVV1ee9eX9ecc70eXcXe9enA9fAABnBnJpMKpKJnBnHmmeeXX7X7cceXXce9eeccXVVVV-VeXe97Xcee9f9eXeXXXXceWVWBc29cX7V-6aOaTOWWV-1XX17-NOtWaNVnBn97X-7cf9mmnBemXgece9I9eXXomgeh9eX99eeeemf9BmmeHgeeegfBggmnHoeABeggnIBggeeeecVI9eeemeXe7cX1-ZmfIKCCIJooonIIBnAAAA9mmgnIIBnBpKCBnCCCKKKMSKJoonIBohBmnABnCABfA9gd9mhBopCIJonABgmnJopCCKJpBnBnBnCJnCCCJnKBoggpIKCKJ-UMSGxrMMKKIIISrKpSKKKKJopCIIKKKCCCBnIBjSrSSpKppqUI9cpKIKrrrKSzyUpKpMxS5UKxMSrSxxxpSrSKpIrHxrSMSzHfrxxzUUUSxrSrSxxxrSrrSrSrrrrrrUUxryOtttzbttyUzzbtzzUzzxzzUxzrTTTTUbyTTTTTUbbxy0byUtzyUzyUzzzzxzrrSrSSSppSSMrRN-OxpSMztzbzzzVUrLUSpprUtxKbxBfrSKJpKKJonICppKHnKKJoopKISppSrMKrSrrUSSpxxMSxprUSMMSSpKMSttzzI9f9hMMMSrKSMKpprKKHnCSSKpMMSSrKKKKKCIIC9gnJonBpKAKJpJpBpKBnCpMKKCKCKpKSSSrSrMMMMKrMSSMKSSSprMMMpUKppSJpKKKKMKSSppIMIpKKMSKSpKMSSSprMrSrMMSSrKppMMKSSMSSSSSprSMKKSKBmgprSSppSIMzxCUzprMUyTObbyUzzzaOaUzzzUtzzzUUqOaUxy0bzzzbbtaTOaTOaOaObaOa5OWbaOtWaOWa555555NNOWaOaObaOa57-6WV0WWV--O97VWWWaObbbtyTUttyTOaNNNHV0V-N---9-V-777579775-0taTOaOaObyNOa5OaOWbbaTTTTTUztWbbbaOVOWaOa5-5N-7X--V-517T7---7-Wa0V-X7ccX7-7-77VV-5-7-5N17X7XV-0VN5-N5TNNNNN50aN-5Oza5OaOtsOWWaOWaOWaOaOaOaOaObaOaObaTTTOtbaTOtaOaOWaOaOaNOaOWWWaNOa5NNNN5-Oa5NN0WaT550WaNNN--N0aN7--0WcefIBf9en9geecmmf9eAAABgee9egfBgmeee7cX7X777cce5TTT-VVX1cX1c7197X977X7Xe79eX15hHX11717-7-V-V71177VXX7X7ce-V-1-1-----117--cXX77ce1-VVV-0u7X777117771177V771-717VV-977X77VVV-7X-OWxpSSMSrMKMSSrSrSy5150WV0V5OzJpKCKCCUzSrSSSrKrSprMKprpMUMMMpKKSpzSxxrUMSSMKpppSCKKSMISMSrMMUUrrSrUKSSpppMpSSSpxrrSKrSpSMKKJhSMKppKKppSKKSSprxtzaUTObbaObzzzbyUby5OtzrtzWsObbbtzttbtztzaTTUs-o-9SuvkpF---4GN0--Akuevkk-0Z-5DzUUzzUMMSrUUrrxzzV0k24nbEF-72uPs-31lfR-X0zvBgpOsN---Fjh-1VahUR-033plvivC44-bVp12CUzzrxpztzzzy2A979eeXd9eXXVGkPch_OLJKKa_OLujjznwwkzo-Eno-q32WRrMKpkV7-V--7jXk2-IvW9e-7xySpV2kZ-vaazk0-HWAOjKHprsWxta7ccV2FavYivl3F2cIsAppKMwN117X-81g-ifoF-L4N9UrkcVDFfPz___bjvjjEB3ByvEGJKK--WQlvV0kn8QjoF0NPnGrScX-E2V6yPuEF3-D6-ISGX-42b3rh-0NYH_ooy-3P8eEOJFGGIB-B-0-2043LaPdaeeiZ30003G002j-03-JGFGJ-4K-03G-3303330NBzB-UzzB3DvzuzByyfiivieivifevefjzyw-D9vlxqX-A58vaOYw-07nF-rFPV4lbM4aaabBn3B-mC6fBmmjSOa5N-25o35o--CiYN-gQSZPTw0--2QiX--66YJ-9FT6CN-BHQ8jadHQyddcyvG2232-F-8Hr8k--dcfk6dIezn9YpIBhC5Oa6y5UrWZmX70C2JVtUzzp4J-mXEjworrq557e-6IQmyv4--dmmEV-JuCMk-9SVlk3KDxRuPiueObi_JGTyycnBk--4-BF-eicPos02KqRDLPefeTiuiviuk-K33F-----6f9qfBnUWV-jMD3iO_aOaPOiwBnBnn--0evOEn5U5c1_T5ktLKKGTvjzzYp-w0Rg9s6ABmeWBmghJonKxCIKIKKSKWa6zzro5Uxltbe9e5OtVOWaN-N6w6y2ABcX17cXV-SWU2PBo-alHDReopsOa-OOYdiPPPgnE00--BsPu--Oo5J-5oKjx-AxeUxtaeeTeeffeuePauuvivijfieiivePgyvvC000000-3-3G35JG-2BF0-30-2FFFF--3hlWISD1-ER5o5evV0-0eu7_RjSSprzrSrcX7X7X7X--6KDt-HirDjBnBnKMba5551-3rQbzaaEBnpFJAmhxnKSSSSKKKKonIKKpKpMKrSKIr5UrNV79V1----V55N-1V1-7-7-X79-IUBriLagwC2-3jm7YKkV7jUvJLaLMeudeP_LPK3PfeaLeaa_F8aaLLOaO__KHdOK8__KeePOdaaieeeiiefifeeddddaaPadOPePPeeiiveueaeeivfeiuyzjvvizEBwwwzzEE2-kkBB2-2-kB-2-B222-B-k22-BB2-B-BB222-k-kF-B22Bk0-F32nyevg220-FF-0--0-F003G-G0-Cl0ab9eefxzzba-AX5ODuklF2RKFUonyUUaPXeV9sgwrddaLaPNn2BnEE0F3RULpn9opxbbbtXVe-Y_1riO_LKfvEink--0BfCIpy1V" :
		ap.pZ === aAE + 4 ? fw =
		"EcA20EP9t--46idaPadePOddiaeuuuebieeiiivuO_aRnufezijzzvzjvfuuPKJFJGG3GPKGPOaTiiiedaduus2EYuiedn2nyffdv32--0202EzeRwoG--Ezzjevck20202zeufik43BFBFK0G4-0_J--nyioC03-0002-n22wyddyjfzven3Eyv3JJ20-zynnEyjnnvjizjjejzyy_wznnBn2zvnzyvzBl3GG3G--23FFo0-wzBB8m--ZISrMUUSpzrxxrKrrSKpppKKIACBnAA9mmgfBcee9cXef9geeeXVf9999199ge17V7Hgce7c15ABee99eeXegegegfBgfA9mgomeecXcXgeXceXnBrxSxxzHecefAUUJceccgce0AxBeXXXeceY9nTUJgoepCJnzzzxIBfrMpIJmnpHmc58EJmnrSbrMrUKJnIKxrHgrUzrxKCbtzprzxKISpxzU5Ulzq0a-NOzzxxzSxrprSSpxxrzrtztyUtaOaTObzxpxrUyObaOxMKBn9pMKICCKSKIKKCMKCACBpCACBonIJnKIHhKBpKBpBonCBmnHmgeme1ggeeeX17Xc7VY9e7emdBe97gfBfBfBfBf9e7X7cXeXc19eX-ecXceX9Vf9cee7V-P1e9cecX7e9X7X-0XcX7c97e9V0--O6glDk-BjnBnJpKKMSKrrMSSpSSrxMrSSrMKMprSKzUzzSI9cmgonCKIJppI9YKCKCKKSKKSMMrrUzzzUSMSrUUUSzrzUzryUaUyUyUbxlzzs7-V15X----V---NNccX-ccc0y10WeeeeV--70V6xUztWxMSzbbc6xta11cX9X7V7-X-eHeggnCISpKHX1V1X-7-Oa-N5Xe98HeVVVeeV0X9711-3--XjabvBG-0s7nSrxGc9-BFOunededziszBzG0-G-KF2NDz6rSzzu9d99-0FVIObk153LiReenAUbbxzxzrpxq--e9e9e-A1JTaukCF07J23pq7---cVM--WN3QV1khy_awxF-H4kIRjyV-oCGnvjx3J-16-Ny-U2iSDjyffv33G4F-CWtG2GxSUlV79e--2nbB--6j1s0REhiviizkJG4-4X-vYML77-ZHJ3Pv3-1cZeNponGtV-V4lDIreOiuBl-3-DAESjT9-r4cgTLLKKOaQjzyvgn3FBEB--1pnH-E4zQyafnG--5BKbgN-3Oxws0iCDazIKxKMMIr5OVX1V7759-05hoa-4YPwIzTXc0oS4-OaOaanwnB0-qYoDA9pIrzxzpzpKzzzzUzrWVf9cP1ceceVemcc7cV0H9uMvF-eGU9USSbuX975JYvsOLKOKKK4OaLJKPueTzjEzjzBn2zj3-Bnwn-B_HnzBpIzyNX7V1mi7bfz3J09L-pSKKCSrs5P7VX7-YBjWieueuusF-F03-0dhx_nILN-03vANuaQYl---6b56-jf6VcBknBBn-Bk2BnEBkBkn-BnBkBw-----n2Bk------kn04GKKKaOaO__KKKPLOKLKGKKLKaKKKKKLLKaOOLGKKK3KaKLKOaKaOKKKG3G43G3J33F3G4G4JGznnE2--G-G3334L33G43J-33JG3KG303F433GK3K3GKG3G3k3GKOffaF--GG-FG3---F-3I-3F0-0303F40GGG-G03GG4FF0--FF2-----0---k-G-F3--04343G-G3KG030-0-Gk-2DwkG43F3G0-30-F3F30-00-G30-0-F-3--G33I--03FG3303F3-I0--3F-nDtfefeuvfideeviivfiuviuzwn--B2BBB22--wn9PeLeeLeaPOfjzyvuiveuifhfifiivevefffjiafjiuifeypeeeiivejEivjiivijfiuieiiueuieeeeeafieeeujvifffiuzziviuzivieifiififPivfeifivPvyvijviefivevevafieeaOeueevfeeveeeuiufiaeefifivizizzwmznEzzBnEzBnBnznEzzzzwzwEzwnBnEnAyzzBzzBn-nEnBznEwzzwnBnzzEEzBznnnBznEk--22B2zkzwnnwnzznBnnEzzzmvwEEBkBk-B2znEzEznBn--kBnBEnzBzzw---4--2-n-RB2Dvfzn0n-kB2BnB2nBknBBB2-n-3-KK3JG0304-G43GLJJK_K4JJJKJG3F43G03F3-Fk3-3-k--FLOadeOaOaOOaPOada__aOe_LPaPOK_KOGGKKKKOaOKKJG-K3Gk--nB-FF-3Rk-JGGKaPPeaPPeuieW00-FF3G3FFF--2-J0-GJ43G3JG-0KK2-3G3G-3F0-3G00-F4N2znB-3jEzzBk-ivzzfjEBAzievivivieevivueiuiuufivzzzvivzuivivjvyvzejvjwzzvyvzwnnBzn_ejEBzzEB2-LOKOaMBBzzBnzwzizieveefifieizzzvyzzznyyvzznvjEzzwzBijzjyzznDzzwnnEyznzznEnEEw2yajzDjwBvnznEnzkzEznivvheejwzjefievveyzByvnmeziuvfiyvyzjnzjBwnkzaeO_PO_dLLG4PPvjivjivjiuviyviyzjwzwnE2zBnBnB2-k--4222BzEOOaeiejxPeeuuuuqeuaeeuuefifefefeeffeuuifeveffeueiieuvfiiveufiivvfeuuiuffieeuufuffieyvjiyfeveiuiffifefieevuiivfjivvjwwnBn2BB--BBnnBwn--2-k2BBwzE---0--0B3F-k2-kBB--k---JF-3B---3F03-k2--wkzEn2-B2wEEE2Bn0BB0-kknBkwE-kk22--eUSCSJrLT7V71K0YLtevvyl3KFzwGJ-DWcRRqP-hG7KyLafizivwwG03G0F-acjpSSKy-VX-IJltLePvV---PeSVrBgmoxprMRTTOa77X77-0N3vk7eoElnII93nzSKBooUSX0aNX0a5V-1pfNUugBJ-9iOdUNV-4v1z-Sfs-zBgmX8MKAxy5NOzKbse7V-0U-Fk-1y-lV-4x-6--g6bj-3L4kbaTYn2J-apmECIJlaN--MR8FTPQYEwpGF-2W9GV-62Hz-7i5cMKKGV---y2dwQvz4K-NgIMwmnUzJopKCCKKIJnKKpKSKKSKMKrMMbrWbWtaT6a550VN---X157cV-VX77VVX7ce7V-nZT45OKJLLPzjzzBz2wLJF0I80TwpCpzpOWa5P7eeV-9fnj-3pOZ6JOX-2f5dcs" :
		ap.pZ === aAE + 5 ? fw =
		"CoE-7lR-YWRa2AEJenMxJpbqTObaOBcX5NeW_xnVto5UUzzrzUrtxtxrMKMUSSyN1XXV5NNOtaUUxzztzUxxpUSIBpSSyNN1aUrSpCCIJpKs50WVNN--7N6bbzrzxzrrpSMMSSMSzs9X7-X-VVVX99ccVVDUV19D--998a6rztVXaOV1771-78VN0V0V-7V---YV7Xh17XOWWV0V6pTOs-8V7XXpCF5-N-N-N-N0VObSxrSrSUyN-aNOsObrxMABnKUaUs-V1-N5NUzrxUWbzUSxprzCKHenMtzKoopSSSzzxxrMCJmnABegmXOs1ABmnCSKCKIC77gcepzSKBe9XfKrHh9eprxmnKMKLmehKCUrSrII7XnMUSxrUSIMpIABpryURpMbtxrrSrMUWtbzSnKKABgnAAKUxztrMUxrsObWtWzzUttraOtbUtbbVefaOrxxpStySStzVXaNTNN5SJhSry1zzSgmpSM9mmgofKpxryU_rUSxrPXmhMQIKSxrUrrxSxrprKLpMa-2V7Va-OV1XXAI97ee9m8a6TNSxSzzrtyTStbtzyUbzzbtztzzzyObaNObaOyUtzzaOttyUMy-f_zztztztzzxxrSopKprKKMSzrzzxzztttyOtaOaOZnBnBmn9mmmpMzbbzWaTOta5UyObtV9eg7XnBNN-7-ObrTUzztaOaOaOaNOa555-4KCCCBnIBnBnBnBpzzSzzxzba-7--6WV-1--771-VV------71-----NN-5---OaTOaNN---0WWWaNN56bzzbbaTTTTUCKSSprrSrMrrSMKpKSUUrSxzzzttaTNOaOVN---VV--X--1N0WVN5-7-0aN79enKBmVX9e9177-X770Ws7VX-WbVccOa-7OtzaUzy1WbyObaMxyN6UV4rUUy4zzaOaMWxyOzrzxrrTOzUUUrztzUzzzzzaNN--770aSSSztV-6rxzbbs5-NOUzzyMxzUxzV-1X9777e9gf9ege997VX7X9X71MMrV-V75-gnAHommmgf9emem9eefBmenA1AHmmfCC9h9m91AIHegn9emnAABnIBmV1mmegon9f9mXenI9fbV1ge7tzV--cgoon99gc0s76tV99nCLo1977Ebs50Vf-AKJcc-1fMMKr9c7-Aa-1mpBme9c-5OWWV-XV-50a0VVUV---1N18xy11--V1717V-0a0VV117V7-0VcWaN7Oa6aNN--OVV0SrWyUxzVe8UxyNN7X2bVSMVN50bbzWVXhH7aNTSraTObbWV0Us0WVOaN55OaOaOV5-OsND0tbzaUrrtVXX6rrV-X91V0V-N-V7X17X99f17X1XXeemXcgeA9hBce17XpA17fKKCK9e97hSrSHpomf9ABpSxHpKIKHhHhIJhMUhKnKUrKKyICCBnABpAAJpKBnIICA9opBme9hC9nCKQ97-XhJmfIKBhJoXA9empmpHhMTehICIBehIKSRkgomfKQ1971hKxQBpprSghCCJonCKKqpMSpBX17XhSnBopKSgpKopnKpIJpKSppIJprSzzKMTTTUQKMrKrrps5-KpUKKSSpMppSSKrrKMI9fBnBpHnK779nAMrSxzwonBmXXppQAI9fCLmhBop-s1-WV1hKBAJpBofBegp9mefKrpqfABfKzbpIAKMKHpKKBpIBpqmpKKKRnABooppKpLmnKJpCBpKABoonIIJpBpBnIHVX9e9f7ceeceegpSRe7f9mmonCJpKSpSQIIHn99cXee9mgf9Xce97V-5OV511711-V--7X1--MrSTT--VcNUUWV-7971--X77c1-VV-V1---AJXN--N5-7eYWs17Wa---cXcWs2aOVgc1ca0tVVD---V0V--55-1eX7X511V-8V5-ge9pMKpKJoepIIBmegXc-fCBmgfCIABfIBogmnAC1gnBnBfAABgm99ggefBXXccXf7VXe9XX6ba-XXX7c91X7VV7X1VV1-D0s55--6USrMSMSrWWbzs1menB1N7VUsN----2bVemACUSKKBk-VVfICKSpg9777--7hCSJpC-----bsN-OaOa56rJnIKT0a5SrtaUs99150zy50ty-55ObaOzbopHpMWa555Uzs9ef79gf9eopBcgnKRkAJomVa0V1da5-gnIBmWVVVWWzV-VXAMLkVVXNOVza-1hRmVNEtSrrpMSy17VTN1mgX7X2yN56zrMTUtztzSxzMrStbtyMxSppKST-V-UTUraUy1Xe-OaN9nHpKLegA9a1ccX1nIBcXXXcXcefA9gX7VVzs9XVbzyUVef-Obzs91UV-e9WWaUWaUzrUSrUrpzzUUrsUrs7efB999e971ceXX9ec7c4rMyTN11X-SprMMMbVcYa4xzzrIMpry1X-V19ge-zza5OzMUUUKpKps1-1OyTSzKMKnIKKSy1V0WxzT19XX-V-Xcf7gekcaUby19f9mdtyMtbzxtzSrWUzrSyOzzbrtrV9gXf1me-eecaTMs7cX8aTTMxSrMtrxtzrKKs--VXDOxSSSSCMUy-XUs7gV97V6tV6xprV7tVA8ySrVEzzxRopzbVXOVaUzbtzKopxRpMrV5StxzrzUV7TOVgiOtbaUzba-emVOtbaTObtbzbztbs9emgf9fBggf9mnAKRpgmmn9mmn9egge1-0ttV9mmme6a-iUbbzaOV7NSs5O_s8baNUVaMT0brs54SMMUICMaNOzzMsD1eeccXUSs8WVObttVVgfAIV71g7XmkXtaT2rxrSryOyMsAxs8a5UKtWWxpKztyObWs1mmon9Yy-X7N9on8V5OWVaNMMSrStVXVcV0WaST-aN55OVfABda6bUthMSrT17XN1fVU_ttzyUwprs2zzbWa6s1eopAA99eef9ttbyN9gcX0y-VDMptzs9cdV6s8WvKy0zy171OsUxT0V2brBpMs8s51kTTUxzxzxxrV17es1mfA-egeiTTOtV55OtttppSzUMV199-8bbrUVcAtSrs7XX7gnBnA9eTOs1cT5T2WxRpzbtyN9bs9ABkYWbbaShMsOWt_QMIKKxzT18VXTTUT-1hPecVOUVbaUzUU_rSSUVVX8tzzUT-ce9f9VemeeABfB8a5UzbWWWzzbbs6tSrVVWxrV79f755OWtyUs1-0aN-OUKMpry-c17aOzWUIMKprUUIMa-1X918V770aTObyUxIKSIJpCUVNN5--sNOMVN56_pKCJpSJoonKMVNNOa---OVsOptaKMT55NNUrKxxrMMT11115N7s9kc9V9VttMT0UTNO_xU_nJpUs7NUSzzSKKUMUts1e1T-c5TOVNOaOaUy2V50_zSUVX119X7USxs7--OzSCUbbKSzsUxRnCBnCCBnKrCIKJnIKM_pUVN5NN-7T50a5OWV0aNNNOWWxKKMBnAMxpIKKIMaSxs1X6rV-D6V-sT-UUVX1e9Os7zy-5SMUTOtpKySqpCBoe9nCTURnBpyOt_oonBnKttU_zV7a-5-tWWWtxxrqpKTOttSMsOrSxhBpT6bxSxrtUUIKAA9nHpHnBgeecf1ee9XnMxzxrUzUQCUxSs6SompyMs-0rSTUxtTMzzrrrUV1-sSxs777UrrrUMUtzUpMJn9e9ee-VhKgnMzUrynKtWzrzzzUxJpSKJnACKKs0Wba0V--UTOxyUrxzxyUxs-xyUrxzrUzprzUrpzUrrUrSyMrUSrrSUUUSxUaSfMT6xrSzrUrUUby18SrSrxrUpMUTNSUUzSSKSMSrMKhSzTKSpMLpMCSCCJopCIJpJonBonIIHnABggnBnA9nBf9geeg9ecce9cf1e9mm9mecf1eeece9X7cXXfBn97V9eA9cX7XfMQB97cX9997VV7ceXXnKSxxpSKxSxzQMUtxxhUr9Xs1AJmhUzUUSzzKSz1hUU_Sz_xrrSzUMUKrSxprqnH19pSKSpBpQABhMrKSxrKSzMBpxrppIMygpSrBopryKpzKy0nMMzba0rrUMStUSpSrMryMrxzbyUUMUty5-Ortbs78V77X77--Xe79pHfBg997X7X7X77ce-X7-zTOa0VV75TUUzUrrxSrrUrzzwfACKrsObs6TSz_zxrzxrrrtVN5Sy-4W_BQCq0c--5XUc-X5rCBxMa7PVDNUK-nSJp971_ESHe-mocmeKzxIIOxttzsTT-Ota0ee-057TlBpMMMlsOV7Xe---Z41V6NZVgpBmXJgnKMpr6WaNT0c7--3XZyYK57-DXainASrrUs-cXc0D9q9BhrKpMy6e7VHVV-19qEB--1him-7XjEvIohy--0DA35ggnKEGzTOs90X7-DANdhT7-7Xt_vISba9c11AoEBnACBxrSxSa0Wbba7ZmcWXV0Nl-LpUX7--232P--Y4hn-1NmHcmmnUy5--yBtECSKpGaNP197-0YF0nN-QYKBvKofomhMUtzba-1WcBcV17r9ZnpzsX9-4YWUUKaNc-1DHqB03YaRQJjHc9K9Mp9XmrHhrJhromghUxoOVT5OzMxtV5VNT--7VBc--DVec-5DXQxV-9EWOSk-7cyKynBpBnABoopJ5OaTT5NOs-OcVH7zjtnSIAHcgnCBomn9gjzUxrxCBeo6yT5Uc5Wzxru-e-Wy0s0aPc-39Fz7gpKSBcCHgcWggnIpRObztbxHggpoehryP6tbaT-VN-17---ZFFrV-t3OTpa7--GJ2c--GJFN-5GL3xc-9GPigq-T84fLpBpAMHpSBfACoemeoefCACAJrzttaUM5TUa5TUIErr0WWxOtWaOzyNNNN77977KACKBnAC90aTN1VN-7c-eGPvhSrq0ceV-1GRaD-9ZO8jSpKF--7--ZPZE--O6VKyV1O6qJppObVXc-aHHGgonUbVV-1ZZurAs1XHQCRnMzMppopDOVNWbttbYBec3mgce---HWfN-LHY8SS5X--09ahV-tAuEpN--TI4hxDUT7c-PI_QzrqXX-3ZxNzHzV--ZyYEV0dEl0pKsV---J06s--J71N--J8is--JDws-5JFcRs--JKrN0iJQsgnonCCL6xba6yOWXe9e--_6BUV2dHDArSUrz1XXX9-E_ADrICMKoN176X--0I2AV58JkgmgfIIICCTOaT0wNN--PKIxzUTcc-3_KPjIqV-1_MDbCV0yKYtSHpIpCSKHZlzLNV-10V55--5Kcizc-9KeMwq--0MPIV-dMpxrc--_Ul6V0OMzAnSN7-O_Wd6ppSppKMwNP-7X97V7-F_Zn6CzUrMOX9Xc7--_a82V-0OcIV-8OxHk--LW2N-DLaXxTX--4fBH-2_fwzLPV-0QFUV3OQn6xKMSxy0X-ee7-F_tjEBemhT6zzP7N-1_yrzR71uMvlwxIBemeefSu6zp9zTOzq-5TUxxWc9A97-9N1TU5V-0Va0V-8W-ps--NFDs--NFLN0aNK0UKptxxxrUNXXX9997V-DOBAzTX-2aJfQBy--0a2hV-0a3SV08aU0zT9V-taUEntc-5OtESV-eP2MzUSk6e9c-XPIwxMSN7VV-ddFArc-7aafrpUq-e7-TPquRnTTNc-mPxXxrrKlcVV9-3amCbSkV--5oXa-Gat6zSSzrUR7X7ec7-HQgPwxu7-9R1zzP-1tkzEmgj6zzXc-2b3DrLP--Ol2rq-78lqzrHegrzzzKEUTN6seVNcgeX-kbAFvBghCIKIIBpBognIJpMKSSxUSrSSxUrpK--0ogPV0OpIUnBOs-SbSprpUSI9jxa6aPeWzz5XeeV-PSyVwpEsV-CbXszKCCGWbsV7-0bZmzN--bbTv--0uTlV08uUInDTV-OulbqV1tuqQnCMF-5Ue-2bh7jJP--0vJ6V-0vjlV-OwCMqV-OwVCw-0twdKojFTNV3dwdbnUSMzs-PCA91V-HUDFBraV-5UKsSc-DUR5ByP--6rqa-2bsubMc--tyOApa7-yUdojJmnIqOtWV9--bxunV-0zWdVAOzeUnxBmfrrICrUUUUrpHzWVcWX1175X-Xc--UzJs-9VELhk--e0DGpX-2c8yvE5V0P1YAmzTX-Fc9eEBhHgn5Uta5N-OcBY6pSrIAUJgTOa-09We7-GcENbMSppzye9777c-9VzggtV-94IUs-9WO6SNV-95_ss-DWdaSDP-mcR2MBoggxrpUzzKSEzxUqUyX9ecWaNVe79V79c--WkEs-9WoBzNV2u6I8rMJpGaOV7Xc-9WxeRyV197X5onrsN9-1cXrMEc-uXElzMKM575NHe-09AHrpNP--1AZrV-eBC4rX--7ndq-4coH6ETP70HYKWxSMOxxc9XWbkd9V-9Edzk-HZ0xhyPc09Z7pBmpSxpy5O9V79--82Ca--86Zu-2dAgzUcV-PI-Bq--eIQcrX-1dKuADN-H_k1UrXc-9_qWSsV8uMPGmzMTNUUUSEMSxxze7e71c-XHee7-Ha0vzScV--aLfs01aO1woxIC6a-0tuc-DaUtSq7-6dh56pM0X7-7dp2zMSR-X--abWegmjUOWc-EdszfAKSzV5UNe9V1PUQ2nABUzc7-5by5U---cAvN--cHps-5cLGhV-DcONzR7--98tL-4e9eMrR7V-HciUxpX7-udBoSJfErlbuVX-29aVfmxIpGa7P--DdjHRtu-6eW7EKSN11--9XeD-jeZFrBfCpCSxpSrzJ5TUcOzaOXfBh9X9X--1c-1eGYR-5efWrCracV-1fXrV-ufyWxkV-ufAyBoeezUrzV-V-ugwopa7--fJNN-LfPwSpkVV-9iyzs--fqes-ifsnRxzxyXecV0ejZ8nMbe7-9ftmzP-FujbporSIzSpMUISCxzx-VUzrrTc6zy7Xh9ecVWuXX-7mcVHe1--ejc_xc-3ezMzK51-4ezOMKGV7-1g-Dw-Rf-nQAA9gnpMtzzzbttXXX7e-1f-oITV-agD2xzola9X-Ff2bjASrxSr-97VV-4f47MJyP7-9gJYUP--9lWRs-qg_aBfJxrzs117--gavs-PghqUKGX---fCFz-09nVOpqV--9njxk--gyON-Dh4IxL7-2fGYEENV-1ob8V-upTOpa7--hVws-XhbrSpLOcXV1eqiCpKR0yX7--9qk6k-PhjSS9c6y-7fR-rUrR7Xc-ehsTBgrqUscc-PiJ1hASaV-bfaA6AI9MMMHhzpUbzOyOz1X97-1ge7V-1tzIV1uu69nCrtwP-e-9ffCUprUkVXc-5fgVYCM5-V-9vpss-5jH-E--HjT-wxu--XjYHx9xSVN-19yPqognyT--pfugbS9rSrSMSrzpaUpSUMSkVV-VVVPHgccX1XX1c-9jiyz5V0Pz_GnSN1-4g0rMKR-7-HkBVxlu7--kCK70LkGUSpMSrOzuXWse7X9-4g57jrTXV-DkQfwxX--B98T--g9En-1v1y0pKorN7-7--gDm6V-v2vCxNV--l12N-Pl34RxUcX-0gHXnD-7gHhbKrq7X7-TlB1xMxcVcJ1lBSSrSSppzUzxpzT6xSSrKrMJopBmcXcxrMRUSpMKBgc7N1cX97971AMHYSSrMHcce7eVVN77XVX7-Oc1dMSHooe-V-CMKSSKq1VUpkUSrUSCMMMUSzSprKKHexxrSSxSxxyUSzzSUUSpSpSxKKBhUpttx57OaP0WyOaP-9-0V7X5CHcV77X1VVXXV-97cV----0c-7VXcY97X7ece1XABcc9--23yxV3v42inCMKrbVBe-0xXV-A4Ugk-aliIwpIMs----BS4D-2gSBER5V1v6fGpCCptV-X--BTnq-7gVUzKKT-VV--m1DN-qm1FRfpppNVN7N-DmEsxT9-QgZUjCSKEKR6xGWe57N-ZmVV0A8RQxR7--A8TUk-imT5xSTTTd9cV4Q8thxpponSpTN7-X77V--mZcN1immTUMSKCKMR16VUSprGbxkXBcVcX77V7V-TmmkSpUVcV-un7nSrMSxkX797V1ABckpMba99-0go5MN-5gpKjMMX7V-QCSMnV-vCllpk7-Pn_7wppc--6gu_jIIqN7-3gwCEUP1-HgwGzMMMSxlu7X7X1V1vETrmxSrTVX1--C-0D-Eh0RESoxSRN-X09--AFrbk--oIos-aoMTSIKFN5--5h58vIRNNV-2GitV-vH2_psV--oc-s0aoc_xKMSJe9JUUqN5P17VV-XoimSI5OycV-fHxjnk--CB5q-0hHcbN-VhHl6KpASSSKIMxsVWyP77VXV-7-HpEKxUX7-mpKbRoeKSo-NN--CNDi-7hOczxzTcXc--pboN-DpiAwpV-5hTmMpR5X-0QMjrnMN7-1hUQAT7-HqBoxK---DqWZRr--IhdNrKrSzOV5QBeX3e-9hfVIBpUzX17--CfpD-phgbjBmccjMJrzke76zrrMMSrUrpSyc17VVX7X7X7-HqmXSSX---qmvs--qqEN0HqtqSrxKESrNN7Xc1XV-2R4lV-fTzpnk-1hwNUTV4Prr2xMJnIC9EIrJomnqUKKCJeIIMOxp9MKzKSr6XX7--V57OV70WXV-5-N6a--V5fUUEofHchpKMOba7X5UTP7-0hzqEP-2i1rMSX-2vVmOnHpplxk-WcV-9sS7x5-2fXLhnESoxu7T17-2iCDURP-3fYKfrK9fISr6s-57---sq1c-DsqBSTX--DFu5-1iHcjR7Bmt9wxogcf95IIESpAAJegxUJfxI9onJeCrrrUrSUSSrSpMKSpUSrMKrMMMSMSppSKCyUUz5N71-0aP5OzyOzUSrUN6aOX10ty-7-0s-7cV-7X1X1-VX9XX7e9cecge16yX-X7X7BmXXcV-2iHoMUcV4Q_4_nBrpyOzSq5cXX7c-HtGWSpX7--tUGs-5u0pzc-Tu6aUSS-17-Tu7VxACOa---u7iN-5uEYS--5uEcz--auFlSKqNO99-2i_aUGuV0QdwKony7-BicpMJrMSc1-5V0feEApSWcc-5uYrSV-1uf6R--igpMV9vfYUppKHexxMzxxrUROttX1e7cW97HX17--2fYfV-Qf_oq-0Afj_rL7V0vfwMpMaX5V3Ag7opBpKpT575-7--fgPSna-4iqejAoOV-avQIxxrycce-0isQUF-1is_AGc-LvkFzM5X--fjqbr1--Dz_T-6j-zjASq75-1j1jzlc-9wL5ww--2lNpV-flSUxX-3j5MbM5X-Hj6HUJm_prMSk--7X--vlsIpk7-HwadwjOV-1wepR-2jAT6Ia-1fnTTxHnEy0X--Anark-9wvRwtV5QospnoxMSOzr0aNn9X797V-Qp0rq--QpG4o-0QpR0mxlX-4jL0rSq-c0XxPBBfBnEMKKyNNTOVN1e-6jMXUJlz11-EEgqwecX-s5OaSs-AjV-jKppq-17c-9y-hSkV3fsD9ppKIKDNNOVV17-Ty3bxJp0V--9yERww-0Ax-_npV--Ax2Ik-9zfaxkV-vzr2xk7-A-1BRy--3-zvV-w0lpqTc-I-kixr-c-A0MPENV3R55SnBpKkWa0zGVX-nkNrfACJeonMrxSrrrSrT55-IC9e-0ztVNX7X99--35IBV-R5UCqV-35iqV-w6ltpWc-60xjx--A1PugyV-B95ws-E1cpgpV--ki4IV1wAqXpUTUa1ee-4kl7ACOa7-02LhN-02YwN-I2aoBjy7-f2fQUKrScVc--I2gExS-V-b2tvSppo-7X-0kyWUF-1kyZMq7-036Ns-M36nwhr---RFUnqV-BFvKk-03Kgs-A3kyxNV-wI34p57-644wwN-64BcS--04PSN064PVSKSTUF14HcWc--BL4Uk-64ckSV-04jBN7r4jQxHppKKpMJxHe7V1-ecnIIKABoopUSognBnIAUtbotyOyNOsNTUSJnKq0a6ztbttVOzOVOX-5c0a5OV1XX7Ze9jpI977AI97--lSWj-FgMRSmf9zbrpzMKc0bxrKESxrlVXHVUbbpSkV7XccomXX9ZcP7-E4xwwja--lXvjV-wQInrsc0Q5ozSpKEryObbuVgce1c-Q64OwhMWX-0lmZbk-0lpy6P--GtFD-2lu5jKVV0RUb6mp6V-0m9erN-5mBT2BjNOV0wZLzpUk5XVPBZWrmmmmnIJrMSrSSSSKSMUxKpKrSESpbxSSrMOts7-7Ve7cnA9119-Oa0Wba7V---V7---ece-cmKJQBmp9ggzzrSKMMy-OyTTOX7X997X06mLdEBgnABnIIIICCAJnJpCCJnKJ0a5OtWa55Oa0WbaTObcV0WWV--I8QGBxs7-U8RIgpzs7c-29W_w-3mdg6Ctc-0mguE5-ZmlOjKBmmonUUUUbw-OzwN-VHmc1eV-wgZprsc-rANbgnKrUtX17c4UAhBhBenHYBocVgprSCHZnrrUMSxHnIKLOa-0VObaUzxWza0bsNOy1X7Xe9n9cV-1n8XjDN-IBkvzxXc-2BlYi-RnBjzIEMMKppKKF51-1-0V-9--nBzMVXBp7smn9f9XehBnCAIBomnABmceXeZegccZmonAAIBnKSMSrMVc57OyOaVUzWzOzxxzzztxzxxrrSrtbVOWtVN-OVP7V-0aT--RstSq--gtJnqP-3nilrCq7-AniufCAM0bbcV4UEFHBomghIHoonBnCKpKICSKpMxIBnJOtV-OsTOtsN0aUX7VN---6zOa--7fJe1-7nuYnACrtVc0EFVzgfBofKUUaOV0a73zH2ShKICCCCICCIBgnBpBpCICKpKCKRN55N-5N5OV0a0aN5-NNNOWV-NP7-zHTMwnJhpJ5-OVP-5oiBECSkV-0hBVAn9M6V-IIDDgzZc-2IgAR-1pHnrR--2KH6w-4pLvUIOaV-0KUwN92LmEgfBfBgqUSCrKKKBeVUX5-X4JmoocX-57NNmconHdBpJce99pKppppKIKopMrtxxxprKrMUStaN7-6yUza-7X9775ObzzStV--51--N-PcXX7-ILxOwoOV-UMCUghM5N--AMQdSNV0STQGrScX-8ptlrCCCta1-0CTnYnqP-0SVFsrM-70Eq1sfHnA9XcYCppSKKSErrSSCzpUUzKTOWaN0V0WX7VXWa-2KBme0WX19c-4qODnHrVN-2OnhB-Cqb12CCKJ-UcWV-IqjjQSrKAMzTNV7VXc-Nqu9fBnACIHnSLNOWWaOV--hjnFrX--r-vI-1xkFZpprOu97V-zr6zAApICSUpzKUxlyUrwUxKV56a6a7VVXY9_HmmeXVX1X9V4CmRVp9mrMaTUxT-e7c-OrAdfJnKrrSrrsN0X979X9-0rFTQP--MKdX--M_8P-DreVnCCSrzVVNec-AVFgBTV-T02FyV0L0slMs1c-6VTDEc-6V_Ajc-AV_JBtV-D5hsk-b_7iwnSROX1--OPBa-1tQurDN-Ya80xERTNXV" :
		ap.pZ === aAE + 6 ? fw =
		"DwCd1sP0j--RaO__ddedddifv2EEznnnyfEeRwyzBBBB2Bn00-17-2fEMK9dCrtzUrrMMqN-X-789V----Sf-T--yfzIrzohrxy6kX6rSk16k7---11J7Z-35CISoOxsUKESpEP6qOV6pJp9mec17cmhpxUSogfBnMMGWxptyUUzc5UrtttzpoTOV6lVVZme-gcfBc5cUrztbV73cWztaEO-1I5dLOfvkygzEyaOdzjzsl2knvg2EW2zEznvzzyzyfyyzzvjuMyzdzjivvvyyinyaTVyydzufvevjgwBoG-znzdiEdbg2vkyjEyiazuK_4OGaJaPjzYnzzjBwnvyfiigEnuP_vjuiaOMdezeififiiEfgzfusnEeO_ivviEuvjzyzivivivg3EjuyjiezjjisnvvEffvznviyviYEYyzjygnBz1_Fl-zivjEzyuwnB2z0434-4G304-44-CGJFKJEK42Bo-38G-340403LK2kl44G_GFn-G402l2x2433432vuvfvY4-l-0-FkF3G-J43G3FJ3-G5J2---20L-Y-8CqLKOzvEjYn3GF5N0A3mrIprrIryT1Wace1XV0F2MKYo-H05ahSVV1R1RHOKefiznn0-z4KUy5MEe17X7Xa17X7X7X7X7e7X7-17Xe1XeX1VXT0aN7X7X9X7V19X7V17-Xec7X-7X77X7VfBctaT-17917-X--7V0V-9Xe19X1cX991hJpKJpKMSKMSKUIMUrMprSrMSrKMSKrKKrMSrSKrMprSrMpKMSMMpMSKrKKCKMUzrxrSUMUKIABceV17-XcX7X7917X9X7X7e--0aN-7V17XcX77eceVX7X17919X1EzyTN5T-c-7X77X7V197XcVXN-7V-17-X18VXD---X7a11--7a17-99177Vce91X7XX1cVXe9XV-N-7a11177VVX12V0V-VX9-N0VVVX1-1171777s0V5-N7V7Va0bVN0VUV-VN-2Vs--a-NTN0WbV50WsN5-N5-N5-N5-OrxzST-VXcc-VN-1N5-V51-15OxUSxUrxSxSJpMs0V-8V5Oa1D18V91191X11-VVX19nCSSKSSSrMrKQKpK7cXXX7Xcs-1X1VXVV7777719-csN7714yUSpUSSryN77c7X0V-16a0VenB5-D0WV9X-a0WWVN-gpC7X-gm10tV0yN7NNN1VV-N1mm-N--s-7WWyN--fLocccAAC9555NUsSpy-Wa555-c--hIJpCCBmg5NN-NNN8_y--N0VD-epnIKCCLVXYWV-919prKSC9cV77-V0Vc11111TTUVVgkf1991D-e1-ceXX7X-WWs9cXXgcUxy10Va1cXei1monICI7g9-XgegmVgem7X6xyUVc8bbta6bbtrzMST--15NAA9egemfABXnBm9n9XmfBpMI9mggfA1eceeegn9eeXe9AIBme7g7Vecg7dV9mgecVfWzzyUzxSvCMtbtbzxtUryOzzttbtaOaTOzs97ea0VenBmN5N-XN9X9XiOa5ObtaNNNNOttVgggnB7e17OVN0WbtT-tWV5MV0ztbaUzMy2aOyStI7fCMtxrzzbKrUyUa5Oa0bUsOa1me7f9cD-1997-VTOWaUV-WWrzzxprWzUrqnBnCKrSSzySSza19Es9aOs-c-WsOaN50V-NObttrSSxzzbtyUbzzUUzUtxrUUTUyULpf7hKyTSBpMzpompqpSxUrSSrKprUSMMUTMxSrKSKrrrppMKMSSprSy50byOSzaKgpxza6zUtbz_zUmgf9mA1egmgf9pMsOzbtzMyTOzzMbttWy2WrKKIKSKSUtVOsUCLnKUtza5SzUxSSrSSzUSrMrUzMttSxxMSSHemgnKzUSzrzxzyUrtbbpSrzKtKrSAMKSs-T---X55UbsN9eem7iObtztyU_rQMKrUSMzzSrxUzzbyUxxyUs18s1UaUprzxMKJhSrMxpps-V-798VUtaOVOVD-XhHDN-6V9XXm7ce7VVtV-951-Ors18Wa-7-177--1-UVcOyUbzMTUbURopIKCIA7f1hMShJonIMTUMUSUKKUMrSrRchMJpSryOxxhIMprSJpxrs---Wa4xxrSprKmpKKxUSrUT5OV7N2a--7-ztVYVXcVV2aOzrzzxrSrbrIMxJogAMSMSUUSrrKJgpQJnAJX97hMMU7fHeX-en99pSrxwopCICBmcXXccXehSrprUxzbztTpKJonKCBfHeXnCLpBmX9XpSzrpKpABeepS9nKnBofKwnBopRpBopCJpKpKKMKIKxzSzzzxKMSSSSKxKSIKtTUWyTObUrrxzrzrbrSzrMSrpzUxySrxxzrrrzzbtztzyMxrUKQKKSSppMKpSKpxprrSrUUSxxrMprrttVD5SrV-a-NN71-cX7791-77VVVVX71-TT6WWbWWWVN-NN8V711-V777X11XVcccceXVXXNNN8V-15-9-VV791dV1-VVX7X1-sNOtrtxtxtySyUVNStUrUrrbUMrppzzrbbry6pKKrMMMrMMCSUUKepKxs0aTTMUUU_rMT-OVN-6T-7-a-777V-5-XMxSSxxrxMU_pzhUxSmpra6QKUbSyOSSnMxSyUKSxCMKUtprySzrxxKttbzbSrbTN0xzUKBpyTSrrMtttzprrSSrMSpprKCILpJhBhIBonKMKLnKICJnBgmmpBm9mnAABgggmeommnAAAJghKKKhKgmpAAJpIJopCIMIMIJpCKJpKUa-s550V2VN50VNT0s5OWs6VT5NNTTTTTMyUSSxQJpJpAA7fBprxpttWbbSSQKSSSMMzSrt_rUUbUbaMyTOVzTOs7777N70V70_pzKKzbbSJpBp11hIKqnKUtIAJmnJnJmnIBnBnJnKKLpBnJhI7e9778V1N5-NT0VOtbaNN9gmmmkfICCACBgonCBpQICBnI1fJo9pSQJohBchKhCKJopSMKSSMrSMCIBomooenABfAIABgnIIMtsOaObbxI9mmon9gnKUwpMJpJpJpBmpSCShMKCMKCBpCK10V7-77X1-cVV-7hKKCMKrppMKSKpIAKtxzxSKpxnHghUySrvCICBfCJpMbnAIBhBgompIIMC9mgfCCKBoonIIICBfIIICBopIIIKKCKKSKMUKpKxpSSxxMUMKKSKxpUpKrSKSKSKnICCJnCA1999-1A9e-7-cXXX17V70a-f7VV-1--7XXm997cXX9AAC9mgoekccXg97XXABmkf9f9fA9emXn9emgmgonKtxgnBfI9nBemef1X9-9gn9meeXA9eemegoefBmgnBnC9gnC9eeggnCJhBpBnKJnKKKKxpIKrRhBhAKBhKSKKKIMKKKF7Z2MkT__44OOaO__O_LLTbYvkyffBkEcw2knyaaiBkyEC-x-nl3-3VQ3QMsc-O-txaOjzzk4K_-7VS-vCSzc7V0J2qEPevjFF3F--6mTV-FGRlV--92TV0kLotbx-a7AuPnIUUoxxzbzrKrpKKMSSSlWxrUsWtzKlzTUyOzbw516xSUzWbsX6wNgc55Xc7mcXmgmeJmofomXXIBcYHcVPXZcVTUceX1d9me17ee9-A0Y6qioC-asBoenIBjSUIBjUSJe9ceV7177eV7fC9gpzzHeeICyUxA9efIrzM0zKaP6kOxIMtxzbxBgef9gfMSxyU6ttaUttzGzryOa-OV1XCJc9VcN7---40ekqQ--NDEDyV--Red-6VumnMUacX--0pcZ3P2fIBnrozKocX7X7poxognBU6zbzojHxISryUWX-U0XV--V9YHX7--6M-k--Do0VDFSy8__bfuePPaEykFkk03C2-3VwCbAMV--0t6o-92oUS0V4FUCSaOQzBn4---ywe-Y13Y5KOjuRyaEBG2F--GW_V0FZtli---3co7-38GgR-93kCEP-1kaQpeNn--L4BWBn5T-BFdZS_ePOvjjjjwk3-FJGF0sL9epCyN9-mkhAhaefdPOOaOd_eO_dPLyiiveeeyEnnEiEwBk2nEnBnEEEnnwwznnF3333GGKJJG3G4KKGJ-94g9CkV--ipW-VWVbABxrMKz5OzJxsNNNVXmXe9c--B49F--PnOV-FqcSV7sQLqmeeppUUSSxtaTU6yT97997eeMC2a-LKOaOaOi_vdPiuzjd_dvijyu_KFJGF33303FC2-oBBB4KLOOaaOiaeduaeeffdiuzzzyyydKKJLfivjjjYBwyuyynzyEnznvszkxFzwzjvEBG0G2zjgyuyYvybvzjyieKbfYBkwzivYvyvyEiviyvfuuuPfePPaadvvvjjeOLP_MdOKKK_UeaPMefvjjYzYknkkzznFzyEjzjfyvvEzjeQfjYvzznzyiyEsywzwzYvEgkG43K4GJJKGJJK3-zjsEzjjvzwyyvvC3J2G3FJ2yjFG04FK4F4K-OKGJGJG0GK43EB4GG2EEzyvvn2yduyvjyinzx33G033Eiw-o-KF2k-GGJeKO_-0PL_JBFGKOF_KOHK4GFxOHKGGFwp08J-yEYnlKKFJBwFJK9eOFHLTdJ-kkn0KKdFPPe_3-B3HeOaJ_2-EeVC-3JKLdi_FHK20dPJFk0O_JBl3KT_3K5LLfjdJeu_Fo3_JiePJF30-l3FGJFoGF-X6dJBfEOtsV0FxOWbo-D6uCS6X1v2zp5_4fu_4ivEdiuPdKJF45aiivivyyiviiijsn-znBkBF235J-GG_-nBl-w44aKKG-KX2_nCErSSSkOWa11XeXLG1g8_OK_OOO_aPuKOdajsydQjznzydLKK_5KaiuyzyvzzzyzjvjidLK3KKGKKKKKaQfefjizjzyvdefiiznyzzyEwznBzwzkn2Eifzjufwyyzjwww--GPO_--zVBnvgEekk3K3GG3JGGFFG2B-333-0--03G3HK4ePeefeQiaOK--3-0-JFKiydeJHKJ2C40GG_ddKFnB2-JF0cWyMmmyTN-ZGfute2---ZAWV0G8Ihi3--8AO7--I0sk-7aWNk-RIFpuEF018vKgpKEM6tWV7XV--L5Mk-NgeYlV6GUzf_eczf24_-k-1C0lB-I5ZZqOynkqK-5YJBIArlX-1Gfu8_yC-6YOlnKIOV---5qJB-DCgdwja-C61_LTvoG-kYgE2KIJnAAMUxzUrOxzTOWaZcV9176qXeX7cVDlqEh_PPeffijjnEBC203FFGJ-mDm3BfEMtyP89-C6VITdTn---2mET-26bSqk--EMts2wUQzuiijiibfV-EYnn3G4LJJGF1szi7nJnr550e--78qw-1FShy-27J7aR-eFczBxKoT7-V-oWi1tLgwk-9FyXENV7H7Of_bisywyoGJG-GZSgYBepxxpyN5X97-gZ3Btfw30yZX6E9mY9eememXeefSzxzT6xzUrMommceKIABhBeMUSxyOWbbbxzHpATTTV5OzxzSy15Ua5O93eme9cXWWbbyVcmVAmK5MiyiajY2Eil3G445J--Hp-s--aMYk-0CdpV2HW8xuvoG-28GGLmemxr6tsV-oczDQis3F11JY8BgnBopr6ztzzNOWX7e7omX-0mZRx_UkRdHRBnKMKpMJppJxponBop6bbzxpxKlbWa0WWWX-UzUUrMzlxrWaWXVd9n9WVVc91e99X7eeVjHcccOe1V--dDLF0OOWLmpy1-6AISazG-5_hMYrq3e-2mvLGeyn04-Ca5w69nUrSq17--QBDVUivzzlJKJJ-qNYawozzyNn97c23mKCO_OLdiffgwnBBBl-J-5OPQhV0wnGIOeeyin0230F5uPAsSSUrHprMSI9BenCHoeXAIrrUUUzTUzyN56rzbV0bxbtcOyOttztcmefBgfBn9ef9X7VXX7X7X7V9IG_jaaeivzB-pFn2KJ09Pe2Rhbzzxxu7cemc-CCRoydz-p--5k5q-ICZKiPvjk34--5npT0dDEw5Oeuaufdeu_PeijB-BBFkoFG2EfswFk3-JLJ-9Ul6xk-7nzgraaOeQfVBB-n-1XVgnghCEpKSIIIMKxML5-0Wc0c5V71-7-C0ccQ-B92pWnABnIBgmxUa-UbtbrzzrtbbueXBee5Pec-C21Ktk6e6I4rJpIBrMM0c-0zzbae91c7Qh2tpO_ddeeTbeeiiduuffeeefydbefjiedeeaijY-nnBwnznEBnnEwk-nveefdbYw3B-2koFFnyjueuTw2FyvfiB-32G0-oGK3-OdveeJFFFo3BoLK0JF-40OOaOa_8KKFB3OKefddFF0--02F-00G2--5cWxzMSV1V0JNHMaB-uYI9RnKMGWWaNe-HJRYn_aayu_jjjeBC-FJFFEjiwC44F2uEcgpJxIIy5-NVV-07cwk-PGjhlV3oZcraOPzkC-5eHK_nABpKKrK55-575TT-e0fHO2qaaabeuauQeiffeQffF-33-kk-BB222n4J3K--9LCls-CAWRtk-1QXrVIK7Wd___4aLywyizYzYEyEBw0JOJOJJ-edEvRpK5Os1V1CKLfOdOyszywkGG4-5etPbKtae-jKWNneePfiuiifiijifiw2yfeii-zefeeeeefYBBn--0033F3F03-G-3F03-4-0GGGKJ-ufB4MHjSzSomcXfMpzS6xKKKKMSsV-10a7V-75Ouec17-6Lbx5JE-PfeifA9eme9AJzrzxztyN57-SVW5uU-0qkprRxMSKSpKSrtV7X7X17--V-58t6-LgVLbBpIKrWzSqV0V7Ve--O0SB8LoLpxJnBgmpICBomogn9oghBnIBpUbWxpMOzzVUsUbaTOa55ObxonKESyUSzrzRUtWztsTUzrMtcVV-V-eX-0Zegee977XX-cemcY9ecV8q__U_OdujEvnBmK30--hDurV-5vfz37hzjz9gemecf9genrI9ggn97gegegoenBgopCJonEJUzpCKKIKonKSKMKKKSMSpUKrbzV0V5NN-77VV-7X-WWVV-N-0aNOWWbsN-0yUUUxzrzSMKrSICpJnIIErL5NOaUSxpSUMSSkOWWaV1-1-55--Vc7X5UxrpUSUxty51-cVXX97VcXZecV9r1ep_LLasznvgyw343F-AZ4Kk6pnU1tLuaOG5K_a_OLLPKeOddYzwwwzEnzEnwzE2E2C-JF3-4id5YIMV7-Cs_ftkIvpQOmnA9nBgf9YBoooofICBeeCBoqUUUxtza6aNUWba6aOaOWba5T5THcV7NLKvdveejzG-33F-5q05bAzy9VCvXK8_eeiyvujin304_-3-0FZT-95mmcgfAACBn9ggeAA9mmnCUtzrprpUSAAIBggecmmggghM6tzNOtttyTTTUbbbxzKa5N0bbbbbbaNTTTTTTUy551ccfAA99XXcWnw5hG_OLKOLKaO_LKOK_POOKdaPOaPOaaUzBnEknwknzE2En2nzEnzeKazEyzzjnwzzznyszgzzzwziyzjvvzjEnueOOdawzEnnwzEEnwwzEEnknEnB0JLJJ__OJ0K_JLK4K4_G8K4445K_48LK_OK4G44K4OKGF1TETamnMTOVc" :
		ap.pZ === aAE + 7 ? fw =
		"9mDS-FP-F--0TedPPOXo0HCGSpxrMptUSrUztztbbsUtaTTOzzzzStzSzSrSrSrppT-0btaOaNNUttVOa---56y6aOSrUaN5OzztztaOtTObtaNNUzaOSrSvHogmgfKpKSrCJgnIICMKrSryUWs--17XD--OaUzaOzyObzzztzrrUxUKprrzyUzzzzzzrSrrbzUSzyOaOsOzzzztbzzrAMSKzrUzzUSrUrrMKKSzzxrrxrxrrSrSrUSpMJnCKUV6aSxxUSxrSSMzzzWzz_zzzzzzxrUzxUzzrSzpxpxUSUxrxxSrrMSrSKKMKMSKKxrSKxzxpJmegnKzWzzoeepBpABgohBnBpMSKyOsT5T---OWWt_onKzzS9ehSrUzzzzrzzKKAILmfHnBpUztWsT0WaOaUzzzUrUrSzpxzzrSMSrzzzSKKKKpyTUaOzxzxrxxrxrUzzxzzzzzzzSrxrUrSrSzMSrSSrSrUprMKzUUUrbrbrbrrSMKxKKKpIKKKMKKKIBpKBnJnBhBgnCAIBnBnBnBgonIJoonIJnBnKBen17AKICIKKJgpKKCSSKKCKJpBpKIKBnKKKCACBpKMIKponBgfBnCHoonBnAKCKKCI9nBenBnBgmepCBn9cecegX-9eenHmognBmegefBnBenBnBenBgmonAKICCKKCKKKIKKJnCJnBmfBnBmpBnICIBpIBmpBmnBnABn8aObbaOa0bVOV1n9fCBonIHmonCMpQ9hCAJnJgnCBnBmpBpBgfA9nBmX9eeeXeXcXX9eee77gpKrSrzSrSrJnKKrrrrKJnCBnCBhCIBgemggeggef9eemmeecceAKKrKICJproomgmgeee9X9eXfKMSMAKMzrMyOtxrKCBe7VcfBprrBAIHnKhSKIBp9emgfBnCBpSMSUSxrrzzrKKLmnBmmnABpIKIBmgmnKSpSKUSrPkf9en9nAIKpIBgmXEV9gpB7Ve9VX9XbrUV1cc9V7Ws11chBeaN7tV7AIC7XN1N1777c2V-a5USy117aNN-ceef97Oa-Wzy1N-17WbyMMKSCKrs10WV-Ws978V-5-D5-s-7VcgmfMopCSppIA7XV--1-2bs717V15--a52aN-X1-cVN-X-V-ts-0V0VOV1OaOa1-2WV-sOV--7OV-V--VX-7--7-0yN7--7-X1OWa--1-0WVT--9N7OV--1-NN---V-17V-15Us--V--15NN7----VX1N7---X71--17eX7X7XX1VcX9XXcX9999A77eVeX9A17X9cX7X7X9cX7V7VV---717cV1717X717X-X7X71177X-X71N19--97X-X7-X7c-91X-X-7X7g7XVeX7Ws-177-17-5Oa5NOsOa5OaOV1XmX7eVcOV-95--5-sUWVNT5N--0WWtztaTT6WaOV7-0aOaOzza0aN0a--7VOV7s-s--6V-X---17X1Vc118V5OV7eX7XcXemnCCBfBnBoprSp9gn9cV17ee-9eee7eV4kDJ_aeiwn-FJ-u28mgpMSzsN-XeV5Fop6aeecBBk-F1t5Zdn9xxrs-9-O9QZyeevz-G3G-YcmK6CIIrUrrSrrrqOa9-X9X7X9cV1_beTuOPOPfznwwC3-4-Jh78rBeejprrSrNN--7-T5ITPw30U8E3BgonBzrtWzzaNVeeV8t9XtaOdOyzBwnEBKK-AmPDvCxrr-7X7ByJT4OdKaTizEydLQi_G48_OUdOvEvyuv-zyevvnzyBFzjvyBnzzznE0KKJJJK43JJG3JF0GKK-2BiSRpxxpWX7Xc" :
		ap.pZ === aAE + 8 ? fw =
		"DgBy1vR-AV60YBnopk-O_9DCIs4rUUrSSMUrSrSSSMKzypKSSMRpKMSrUKMSpKSSrUrSKIKSueXgnCKBgme9XenIKKMBpSKpKMMxpLppKKpnBoopKMMMMKpMKKKKrSzzza55ObzzUUSxppppCCSSpSSrRopSrrSSSppMMSSrKSzUtpxrxxphSMUMUSrrUzzaOtbaOtbbbaOzWWaN5Os6yN-ee117eme97cX--1117XmmccVaN1-Xy-XD-NT-6sDOa0y-cWtzrrKrrSpptWSxs1W_rMUMMUTUUzrrrrSrSxKSrKKzKSrMSrxxprUUzUyTOa-N-1-X-7--1-VV1D-EUUaOtSs-SyMzy-Xe1XXe999XcefCIKKUUn7X7eXee8aOV11UUUa-X7X0Ss1N1mVcf9ecekgk1AJmnABgn99mn9hIJhKKMB7797ee17y17V79Ve79nFX8s19nAIKI1n9pMKKT5Jp-hFgV1goV1nIF-hB-1kOsN56rSpppMtVX-77c7a5N-D550V-ObbaTTN-OVa----N--7s50y0VTNN-9maOzV17cVeepABnBpKKCBnBoopIKMMS9pKKKKKKIBWV-D-XemgpKBe9gm9eOzbyOa5OWV15NN7-N--V5-OV55-50aOaOa----99e77X9e770V1OVX-ccefABn997Xc77VccgceXegfBnH7cegcVX9ecD-VV-7-XV7Xcs5OaUT155-51XD--UtyUy--zWzzUzrbzyMT5OtztyOaOzKpxxIKKKKpIKKSMIKSKKSzztzbyUxtaUaNN5OyKs-6V0WV0_y-SppSICMKMTTTOtQBpSCMSsSrMSzyTMSprSptSUbzzygfKxUaObrMJpTO_pmpUxraTTOtttVUtaSSptzIAK99eXegfKgpCLmpMrUSpz7fKBoohUttrSrUrrSrSAKKUUra4pSzbaNTObaUyUxopBpSrzbaOyN10baSrrpzKpSSUtSzpUs-75N7cc91cXoX7V7Ws1-5TUbaOaOaSySzzzrzzzUtaN0V971A9eenBeee7Xe9cgcfAA9gggnKJgpgeee9eA9mfBgf9geVVX9fB7X6baOTTNNOtaOty52tzVNN9m7Xcce9715N5ObKt_y-8rMbzs90My6_s4raOUxrrpUMrz_rCMUry-eXUzrpySrxyObrztrzUMUttpztrVMrzrMsURhUxpsOpCUbrzqmenMtzmpzb_mfKzpooXX1pBpxSSKpSMSMKKCMKQKnCBmmeXcc71171-V--XpIIKKnIAAIBnCMMCKprzWV7sObKKrKUMsNN5UyMzzrBpztttWVaTObW_xpI99ghKKMxztaUUbzzzMy6vBgnACUtz_yTMrUzbnIMUtttV-UrUSrSSprMSSMyOWVX-18a0a-0yTOa5NOzrrRoonBpSKBpCKCCKSnCCBhBmme7efMSUSzUUaOyT5OaN-0aUxpoopMSzTN99WbV2VVXX9eYV0WaN-V-OtvKKUSzMrs1797VtpzV6rrSSrzBhKCKMSrT-Wa-V0V-X77ca--UzzzyHpMT-yT-7-sOaObbyTTOzUtsUIMSpSRnMzMT0WsTOs97hIBeX-X7tVVtzVc8WWaUonMzbKUsTUbSxrnMUKBoonJnJgpBpBoptaNOttaT5NUxprCUT1-VObbzrUzzyTUzzzy2zSxxxzry-1-Wrbtbs9zbzV9UV19-fa-taTOpUWxMsN716aUKyUps0xzaNN0VOWbaUzSrzaMrzVcX155OVOV0ztby-199f1XOWa-N-TOWa5UaNUaOa5OaUtzxtaN7egYy-VTOaUrnMwnKtzxpzaICTmoomenCKS9e9hSKxzbrSrSKBgpMKrWs-_yTNMbMyTOzrJnHnKxrKpSMKMSpprKSSMU9fBopKKpcfKSMAIKSrUMMpSSrUzVbrMUUTMympKrSrUUzMBnKSKrSxpJpMrUSSpSKS97cXXXXcXXXX9997ccX7c7X7V11171N-V-VVX1-71117-7-X19997V1mopKrSxpMMKpPeVX7hJfKCCKMMMMMKKpprUa6BpepKAK8V1meommnKMPgpAACReonACBopKSIKMMCKKKKKRpKCKJoprUtbbSSUs4MtaT-78sUxzzwpxxpxrKKSSSUSpUSSSSSKKKSKKMKSKJpKKKIKKKJoopBn9mccgpKICAMIKKKrKCJnIIBopMMzxxrrSxxxrSpSMSpKABofBnBn97710VA112V1171mmgn9k7V51-7XecXpAHhAIBooo-X75NN-XeXnBnKIBnCCKBnB9gpKprryU_ppSzyOWVObrzyTShPfIBnCK9hKCCJpKzrzxprSrSSUrxxqeeehUxzUrrABnIBhMzsOxrxSmgpxnMHnHhMnMICHmpMnHhSyMBhLopC9fIMhBnBnCJommmfAA1nBo97c9nMMrFhBgnBehBgfABfIKSx9X17N1emXABf9gmnJepJmhRmopKCMSUSxrMSrrUSxrrxrSrSrMSSMKKppCKKRognBggogeefI9mpxrr9nBggoog7--N-e999fAa-XfJV17s7XA97XcgecWV7eeAJpKKJoopCKBpKKKrTTMMKSxRpKrSzrzxxrStSrUUUSSpLpCMSKMSzMSSRef7Xce7e9X997-cX9-c-777-11197VXX17X7cgc0V0VNN1VOV-1-WVV-77VcV71-V-71--AJVV7XhMCBmfBnC797g-ACI7-Oa--11-Vc-1XVX9979X17V1-VV7cec9oppnBn1gXo71oome-1nHmgfBpKIBgmmcenIBnBnBnAAAIA9mmonI9egoXmggopCMKKKLpQCIBoopKopJcgnIBp9fACJmge7X77VVa-11-V7-VVVX-V72V7-7-VVV11-V7----V---N78V5NN-V6s9XOy1cepgpQIA9f9e7X777VX7UTUbta1eekXX7X0VcX91c--g7-11emXceeXX9ee99ce9g7cX999XXXX99X7XV-5-V7ceeegeX7X977X77-X7XVV-5-1-7--ecD-9hBX99onAMSKIMJpKSpKrMKJhIMKopST-NOaOrRopIBfIMSSMzxzUpzUUaUaUbttyUaOhBpIJppMKprSxrUrrKMKprRnBn9ggnBms9gnICIK99efBomceXgnIBcXceeeXeefBp9emceececeegmeXXeekee9X9Xf9ecee7X7-5N-a-N--NOWVN--V-1-V1--5---711171--550aN5--0V1-V77-55---------N-7XOta6aN1ggnBmnI7VD-VNN--NN1ghKBpKIKKJpKIIKCKKKCKIKKRnBopKKrKSSIJpIIJoopCIJpKUKSMLpSKKIIJpKKMSnKrUSSppKpMSMKpSKrKp9eepUrpSSKpSprrrzzzSrrzzzrUrzxrUzUzUyTSxnICKCACCCBnABnBgnBmnABnCBnBgmnBgmmmgggggf9meemeXggf9mgemmmenAAABmmmmXhA7cgnIIAIBnBmhBnIBnKKSMSpgnCKRnKKMKKpKSprQMQCIKKCKMKCJpKKpMBohRmnABfB-1V9sQR73q09kCIBed989cCHZpMUMMSMSUOxbpy0bbxSraOaOc7TVP29C9Vc0VBecV--7NVV-N8H9w--c9BgrX-BVhQICKrSsV-1VkNB1Dn9choeAEHp9A9eAKKp9fCI9Xme118BgecX7IKKAKrJce70cXXXcXMSppCzSpJxSMKSKSSrk-0xpxxzba-17Oxta56paOsNNTOyTOa--USkWzMUUzs--VWbrxrrVV-d9e7VHsFGFpA9BnCzzII9X97pxS9XHVZoogqUtzqUyUxx50WsTOXmgcOuVOXc0T4CohpochopxzyN7X7NXV-cNWurX-AW_mQ9horyWa--D6JABqN-51WZ4aN79-1XOJ2Oc-58_IBN-i8hrCBfItza-V2Nd5onEIMLOs-X-0se3gprOX1V5NezHrS9eACprpxy0aN7cVV07h4Zpy1V3shEFnKMUrzcVN7I91V-chgRwP--Xvb6V37jO2mfSxrUba79cV3cjXTpJpJOyTOX7gc--1B70i-6Y102KttXe-4Y2-QBrWV-qBklBoptztf9-7-aBzewzzyPee--YGg2-DspvZoeeeXmeA9mgmogn9fSApra0tzWzy6tzzbzztza-e-1YR0fR--PDnihKtVX-SYi0nMS9VecnMSUzxc7UNN5eV4HE3LxHx9HfA9nBxpaX5TUbzUpKDNUKBh9e5BfCMSFT6zUbaOd9V0aP7OZecWV-dYlL2AAIBmcozMopohpzU---NOaOa6X97-LEHZBzbeV07yFszq9V-cz9FrX-4YxwbHc6s-9FJpByV0d0kXnUT7V--FTac-5FvBCV-XGFeBnEUa1-686HMnJmxCIATUpUzV5--57eV2t6dDnABplyUaN1c--GxMc-9HB5gtV38862nCBopa0taT7V0d8AyppN7-1THOURmocpAKpBc9zSMU0aN551-USL---WZbifBogn9ghCUrLTTTOyOWs7e7V08F5moo5-48NGSmzJmVCKK6ls-0V-1_meQFN19MIGBrKKKKopKzWaUbsX7X77-17c-1P80D09ablQKBxrSSMSxzUSpSrSrSprMMUSVVVVV0baXX997XX7ccXVX17X7c-DQ9vBxX-PblGIMMSrMMMkVVOte97eX7-DUDUCL1-0bwmfD-3c-SvC55-NcAPfppppSrSr1117X171-Ju42Zn9gmd9ceceAMSrSppKrSIBfrKCMUUKk-T9mcV5Ua5Ubz6tX--0aOa1X902cKbrCKKJpHpIJnIKBnCCBfBfEryOttVOu5OaTN5OX0a-7--1---cRyM--P9esnVneG9xnBmn9grKKJnIJpKSKMKJporUonHe2IBmmnCBpCKrSrKpppxrSzUzxxrV5-NNNOV-Ws-XV55UrSrxyOc775-7egoe50Wta7X777N--7VOxrSVWtbzUUSqV6bWaN19cVX99gecemd9ec1xdFn2SrJeCpKrMSrKpSKSKIKKIICCI9XKMKCMSII9comomnAABpCIJpBmrTObs0taT5OsNOzaUSKMUtV-0aXX0WxOzaOV0zr1750zrGWX--XVVV-77X7V0VV-117XXXcHX1V39Nu-nKrUUyP7X9XVFeTW0xrI997KBcXBgnCAJpta50aUpIIBnKSzba-0VVUzbqNX1c--dA_c19eGowgggnCSSGWWWbaUsUUUccee705ejHzrzUUyNA9eXeV19fFvonOaTX-Rf_UfKCBeISJxrT-0WbbVNXe--AcyX--Aenu-lfzAABeconJnUP5UrSpKIpxLV0zML5-V7--1X7-2gTJfAOV-AQx3k--sU3c1TvB1BnKCIKIKCpMSGzr-0VN--751-19-0iur2k0FkOrQBgceZgnKKMMKKSJmXxpSSprMs6rJnrUra5NX7-X10X0aOVN-1cV70c16258gfA9fJmnIMKxzyOaOs-NNNX-7lElAMryXe7-042oc-A4AKhN-7gKbcmpIrX6zrxrMzUVeVX-gocVXV-3MmVV-3NpHV4wNq3mmmrUUrMUTP77-X7--lazYV3RQ6imfrrSprs-1X9-7liMQEOxse70E6TIBmZxlxxKOa77VV0I6vXBefKMIM5Ota50cV-RW4Rw-0RW5cnK5--Om5EABpMKBhSxxs17-0V5X--H5H1-9mCaYBoxbaP70emCc2MSIBepJfIIBmVP7mnCIAACCKIlV50bxqUV6zxxpCKprzzaUKa577cWVNUrOtV17V17V7Xcc--HEP1-0mI5IF-0mLgQF-amT1YIBonIIICBgonGaOaNOWVNOWba-02AS3hKIKIJN0V-5--AByfCsV-BqE5k-6CtMgN-0D4wcDzDLQCCCBpIIAAUJmmfBnAAJonCBoomgggfABpAKCJeecme9IBnKKKrMJrSrzUSKpMKpzrtttbxpMbbqOaUwUxObzrrK6aTTTOa5550Vc155ObWaOs9--0WWbtzyNce9cc-Ne7Vcc90zbcV0ztte90byTOXeXeeeVNXeeV0RupTnClV-hngH2CCCCJpKKKppUUtzbta5-V777-X177XV1wx_ZnIKKaN-V-PnvrYCJooerSo-OzuXVTOV71MEjtggeeeggnIAACJoTUzrMUbbttyN-AEykhD--x0GZrsc-2FY2g-4o9gQCSX-CjFseBonHonBf9en9eegf9XfCIBfBpCKMMHhCCKpCKICIpOtzSMMKKIJxUbbs7VN1---VV5ObbxrKCESzUpISy0bbbse1cX5-XVcXeV6y6aTNNNfBmehCCBee19cVV-0a6bzttyUyTUtzwUtttaNNOWV-1oImQL--AGQ0CNV-x5IkxkV0IIIYXm2V7XXeyUta5UV-46fyV0C78BrT7V0S83qnAyP2IoidnCSprrSxrSzrUMSxpMxzUUSSMMMMSzSSrrSprMSpMSSxrSxxxprrrrrUrxrSUUbtaUUL----WX-5N97X9emVP97719ecX-0aNcgmme6a9eX7199e77gecVX7cXXXXXcXX77X7X9egeeXX9-2oitACsV0hAoJnEbsc1EIX0Bgeen9gf9rSaOzzWyUrzqNX9-0CE-XnxVV-4FqeV0SGIunObe-1p622T7-0JRDc-0JfGc-vK0CgggrUzaT19V-CLDDs-6Ku0CV-ALMbENV-COvBk-bLoRjSrR-cX-8pp72IJoOWV--4T3HV-STYBq--hTbPoN-6pzxnBpT0X-5q4TfCGaNV-xXFHpN7-6N_hh--2NfsB-NqBUQHeCCtzSSSzT1cX11-1CZ-NpprX17-7qMXnCMyN7c-IOb-BnaN-0Owzc2fPAlBgggf9fAHoonAABgnCKCbbaT5OWaOaTOtbaTTOaN-0PiN7-MPkJBf6tV-4fLuV-SgO9lV-phLT7tV-4gqNV-4hl5V3xiFwnA9nAROzqOaOXV-SifanVGKwWFOaOV6zzzzUUy6tztbKta56s-WrzzsN-5T4rKpppSKSKKKM-6Sk2RmmeXgeggnTUbxyTUbyOe-OMnm0a50aOV-NNOyNOxtyN-fRZugenzttuc6MRg2gooef9eemeX7XeeeA9Y9BehCIUzrMUzzbrxzttzztzUzrzqUzzbzzzbbzrzzV-9fA9eeX0XeBeeY9e7-DrA8vSzrOtaXeec-0S7u7-rS8wBhCUbttcec-bSGCgnCzaN9-BrL6QBezxyTPXV4hpYLmgfCtzxzSttX9ce-" :
		ap.pZ === aAE + 9 && (fw =
			"EcCx-VQCO1iiqOLOKeeedae_ddadadadOfiveOeLeeeedadaPiuuiePPeeyeeeeOeaPadaeeydPeOedaOPLOeeeOadLOKLKKLJG4G3G4G4G3F-3GJG4G4KKG443G3G3G3G4K3K3K3GKKK3FJ40F33GK0K0K3G3F3F2nBnBnBnB-Bn-04G--BzzwEByvn-wG-BnnB2BkG44K-4KPKQyde_K-G3GKFwGPKO_O_K3J4KG4KKG4KKKJG4KJKK30304LOJG3GKKKKKQvjzuzziviueeaKaKPKKKKKKKKK3K_eOKO_OedaKaLaOevedaOGOeOeeaOaOaOeOjzvjyaPeOKKKOK43K_KKaveJGJ0-JG3G3GF3G3G43KaKF3G4aOedaOFKLK4_eee_dJK33KeaOLOaOjveeKLO_OaOaeKLPeivjeaOeOaJKGKJ4PdadafiyjedLPeueK3F-G30F3G3-3LOaOjeKLPe_O_OeaPfieieeyeaOaPOKOeedeOdada_daOdaKd_O_aOKPOKLKaKdK4LK3LTdaOdKaOK_KLPOaaO_LPKGKKK_KOaLO_aOOaaOdaPOdaO_OaKOdaPOdaPedeOJF--00LaPdeaeOfeyeiuudaueaaPdbeOeuefefuivfifujifieviivifeeid_G-04OF0-03KaPvievjizfeeLJ0-JG-KdOTvfiyviyujffviujeiufeiefivivfivvfeevivveiuueieiefeeiyejffuiuuiviuvfiifiieePeeaieieveuePdaPKJKefefefiuzzvzivviyfvnvjvzEzzjzwzzzBnzwnnk2Bwkn2zzknB-n2BnEBzyzzBzzEwnzznzzzjfzBzwzznziz2zwnBnBBkB--B2EBznEzBwnBnBzzBknEnEByywzzzzzEzz2wnzkzznEBwwEnEnEzznEzzzzzzzzEzwwEEizizizivjvjfznnzyyyvivzzwnyviuizyeyeKbifiuizzvifieeuyviuiuefie_iviiyjzvn3F3Bnw-BnBn2BnBnwnwnwnBkBBk22nEn-EeeieKdeiudaOaOPedaeePeee_KKLPOefzkzEEjzwk2B-k-kBB2yiiuieueeaeeaOOaOvzzzBzvjivjuiuyevieifiedaOeueuivivieuvfyvzvyvvuuvwzzyyvzzvjivvivvjyvznBnn2wzznwoLK-z2BknzEivePPLOOvjBwnEffeuyzefzuuujnkkGG-yzEEzBnEBnnBwnEBnznzzvzzznzvzzEBnzn-k-k-k-2-wB2B-k2-2nBB2kBBwnBw-nB-2Bk22Bw-BkknnBBBBBnBE-znznkkEnE2--kEBknBBkBBk2E-3-2Bk-k2B22BB2k-k-k2BBn-w2-32k-C3F--k-FG0G-22-2-FB--k-2-w-G32En--nB-2kKLePLdFJG3-F0033G043-l3-G3K3JK-32B3G4K4F--B--B--FGLJGJ3F03JLaeKFG--0---BFK--203FGGFG33F2nBFG3FGJ4GJ4K02GKF03-GKKG3K0JFK3G03F--G--l43--Bk--kG-FF3F03G-403G----l0----G--Bn33GJG340JG3-G4KaLKPKG-4-3F3F03-B-------G3FJ00--3KGF--0---03G0032T4mfgmegmeX7fBnJnKIEzzzzbrpzzaObtVOaNX9c9c0JN9cQfjzGG0F4NoWynBpJnKzzzV---Xc1RfMlOOvfvzwEw3GKKF-0gAIV-2OK2-3aoazBjs-pIUdyOaKaKaOfzzvgBnBF---1gInV-4OaA-BexerKESrs-V9V3q6e6dauVn3-0fPHBpMs-c-SiqWQwJ1mtRSUSKKKKKKJOzzxrROc11--TX-X7V7eeV4Meo2avi2kCK--EcNy-OUJfiLKdTzsBk-0kCPrF0fVVRjiveveiueOuveeeeaNn-n22-BG--030303K3F3B6-nnBnBrSr0a---EsTXQudeviviedazk-2-G-030K-4l1tMCkOc-57MIs-E3IhS5P-CYA-DLew--koIyA9emmfACMSrUtbzzzTTObrUtV7ge7X7eeV8QnZxddaebjwnB-30F3xzBZnMKCMzra71-7cV3wA4p_Qzzo4Ffy5yanHpIKSKMKSMSSrKKMofJppMKSKrSpSMKSzrzzrUtaOzsTN1oc5OaUzrHnCTOtaP755N5-T-NUTNN-N-5-5-N-P7X97gn9gmeee9n9meeX97cX7eVeX9cXV"
			), (new ov).ox(fw)
}

function a9I() {
	this.pY = null, this.cq = function() {
		var aAF = [120, 105, 92],
			cos = [12, 12, 60],
			aAG = [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
			aAH = [140, 130, 120],
			aAI = [12, 12, 76],
			aAJ = [240, 120, 1024, 30, 19, 30, 70, 8, 20, 3, 9],
			aAK = [130, 117, 106],
			aAL = [12, 12, 68],
			aAM = [270, 210, 1024, 28, 19, 33, 50, 8, 26, 3, 9];
		this.pY = new Array(ap.a76 + 1), this.pY[0] = {
			name: "White Arena",
			g3: 230,
			g9: 230,
			jo: 1e3,
			jl: 2e3,
			a9K: 173
		}, this.pY[1] = {
			name: "Black Arena",
			g3: 800,
			g9: 800,
			jo: 100,
			jl: 50,
			a9K: 43
		}, this.pY[2] = {
			name: "Island",
			g3: 512,
			g9: 512,
			jo: 128,
			jl: 32,
			a9K: 0
		}, this.pY[3] = {
			name: "Mountains",
			g3: 960,
			g9: 960,
			jo: 60,
			jl: 8,
			a9K: 0
		}, this.pY[4] = {
			name: "Desert",
			g3: 900,
			g9: 900,
			jo: 100,
			jl: 5,
			a9K: 0
		}, this.pY[5] = {
			name: "Swamp",
			g3: 1e3,
			g9: 1e3,
			jo: 100,
			jl: 40,
			a9K: 0
		}, this.pY[6] = {
			name: "Snow",
			g3: 1e3,
			g9: 1e3,
			jo: 100,
			jl: 20,
			a9K: 0
		}, this.pY[7] = {
			name: "Cliffs",
			g3: 1024,
			g9: 1024,
			jo: 128,
			jl: 32,
			a9K: 0
		}, this.pY[8] = {
			name: "Pond",
			g3: 820,
			g9: 820,
			jo: 200,
			jl: 100,
			a9K: 0
		}, this.pY[9] = {
			name: "Halo",
			g3: 1024,
			g9: 1024,
			jo: 128,
			jl: 32,
			a9K: 0
		}, this.pY[10] = {
			name: "Europe",
			pX: aAH,
			pa: aAI,
			a9c: aAJ
		}, this.pY[11] = {
			name: "World",
			pX: aAK,
			pa: aAL,
			a9c: aAM
		}, this.pY[12] = {
			name: "Caucasia",
			pX: aAK,
			pa: aAL,
			a9c: aAM
		}, this.pY[13] = {
			name: "Africa",
			pX: aAF,
			pa: cos,
			a9c: aAG
		}, this.pY[14] = {
			name: "Middle East",
			pX: aAF,
			pa: cos,
			a9c: aAG
		}, this.pY[15] = {
			name: "Scandinavia",
			pX: aAH,
			pa: aAI,
			a9c: aAJ
		}, this.pY[16] = {
			name: "North America",
			pX: aAH,
			pa: aAI,
			a9c: aAJ
		}, this.pY[17] = {
			name: "South America",
			pX: aAF,
			pa: cos,
			a9c: aAG
		}, this.pY[18] = {
			name: "Asia",
			pX: aAK,
			pa: aAL,
			a9c: aAM
		}, this.pY[19] = {
			name: "Australia",
			pX: aAF,
			pa: cos,
			a9c: aAG
		}, this.pY[20] = {}
	}
}

function uT() {
	(qI = void 0 === qI ? document.createElement("canvas") : qI).width = ap.e8, qI.height = ap.e9, uX = qI.getContext("2d", {
		alpha: !0
	}), uY = uX.getImageData(0, 0, ap.e8, ap.e9), a1V = uY.data, aY.pD.pE(a1V)
}

function bw() {
	var db, g3, g9, max, aAN, jl, aAP, aAQ, aAR, aAS, aAT, aAU, aAV, aAW, aAO = 1e4;

	function aAe(aAd, jo, eZ) {
		var eD;
		for (aAP[0] = aAd, eD = 1; eD < eZ; eD++) aAP[eD] = aAP[eD - 1] + jo, jo = aAP[eD] >= aAO ? (aAP[eD] = aAO - 1, -jo) : aAP[eD] < 0 ? (aAP[eD] = 0, -jo) : (jo += 16384 <= aL.random() ? jl : -jl) < -aAN ? -aAN : aAN < jo ? aAN : jo
	}

	function aAg(fI, fJ, aAh, eZ) {
		(aAh ? function(fI, fJ, eZ) {
			var eD;
			for (eD = 0; eD < eZ; eD++) db[fJ * g3 + fI + eD] = aAP[eD]
		} : function(fI, fJ, eZ) {
			var eD;
			for (eD = 0; eD < eZ; eD++) db[fJ * g3 + fI + eD * g3] = aAP[eD]
		})(fI, fJ, eZ)
	}

	function aAk(value, eZ) {
		var eD, a8n, fX, ge = value - aAP[eZ - 1];
		if (0 != ge) {
			for (a8n = 1 + eR(Math.abs(ge), eZ - 1), a8n = ge < 0 ? -a8n : a8n, aAP[eZ - 1] = value, fX = (fX = eZ - 1 - eR(Math.abs(ge), Math.abs(a8n))) < 1 ? 1 : eZ - 2 < fX ? eZ - 2 : fX, eD = eZ - 2; fX <= eD; eD--) aAP[eD] += ge - (eZ - 1 -
				eD) * a8n;
			(ge < 0 ? function(eZ) {
				var eD;
				for (eD = eZ - 2; 1 <= eD; eD--) aAP[eD] < 0 && (aAP[eD] = -aAP[eD] - 1)
			} : function(eZ) {
				var eD;
				for (eD = eZ - 2; 1 <= eD; eD--) aAP[eD] >= aAO && (aAP[eD] = 2 * aAO - aAP[eD] - 1)
			})(eZ)
		}
	}

	function aAn(aAo, aAp, eZ) {
		for (var eD = 0; eD < eZ; eD++) aAo[eD] = aAp[eD]
	}

	function aAq(dl) {
		for (var eD = 0; eD < dl.length - 1; eD++) dl[eD] = dl[eD + 1] - dl[eD];
		dl[dl.length - 1] = dl[dl.length - 3]
	}

	function aAr(uu, gap, gd) {
		aAQ.push(uu), aAR.push(gap), aAS.push(gd)
	}
	this.d2 = function(aAX) {
		! function(aAX) {
			var eD;
			for (g3 = aAX[0], g9 = aAX[1], aAN = aAX[2], jl = aAX[3], db = new Int16Array(g3 * g9), max = g9 < g3 ? g3 : g9, aAP = new Int16Array(max), aAQ = [], aAR = [], aAS = [], aAT = new Array(g3), aAU = new Array(g9), eD = g3 - 1; 0 <=
				eD; eD--) aAT[eD] = !1;
			for (eD = g9 - 1; 0 <= eD; eD--) aAU[eD] = !1;
			aAV = new Int16Array(g3), aAW = new Int16Array(g9)
		}(aAX),
		function(eZ) {
			var aAd = aL.random() % aAO,
				jo = aL.random() % (2 * aAN + 1) - aAN;
			aAe(aAd, jo, eZ)
		}(max), aAn(aAW, aAP, g9), aAg(0, 0, !0, g3);
		var fI, fJ, aAX = db[0],
			eZ = max,
			jo = aL.random() % (2 * aAN + 1) - aAN;
		for (aAe(aAX, jo, eZ), aAn(aAV, aAP, g3), aAg(0, 0, !1, g9), aAq(aAV), aAq(aAW), aAe(db[g3 - 1], aAV[g3 - 1], g9), aAg(g3 - 1, 0, !1, g9), aAe(db[g3 * (g9 - 1)], aAW[g9 - 1], g3), aAk(db[g3 * g9 - 1], g3), aAg(0, g9 - 1, !0, g3), aAT[g3 -
				1] = aAT[0] = !0, aAU[g9 - 1] = aAU[0] = !0, aAr(0, g3, !0), aAr(0, g9, !1), ! function() {
				var aAt, uu;
				for (;;) {
					if (aAt = function() {
							var eD, aAt = aAQ.length - 1;
							for (eD = aAt - 1; 0 <= eD; eD--) aAR[eD] > aAR[aAt] && (aAt = eD);
							return aAt
						}(), aAR[aAt] < 5) return;
					uu = aAQ[aAt] + eR(aAR[aAt], 2), (aAS[aAt] ? function(fI) {
						var eZ, aAw, eD, a2b = 0,
							aAx = 0;
						for (; aAx < g9 - 1;) {
							for (eD = a2b + 1; eD < g9; eD++)
								if (aAU[eD]) {
									aAx = eD;
									break
								} eZ = aAx - a2b + 1, aAe(db[fI + g3 * a2b], 0 === a2b ? aAV[fI] : aAP[aAw - 1] - aAP[aAw - 2], eZ), aAk(db[aAx * g3 + fI], eZ), aAg(fI, a2b, !1, eZ), aAw = eZ, a2b = aAx
						}
						aAT[fI] = !0
					} : function(fJ) {
						var eZ, aAw, eD, a2b = 0,
							aAx = 0;
						for (; aAx < g3 - 1;) {
							for (eD = a2b + 1; eD < g3; eD++)
								if (aAT[eD]) {
									aAx = eD;
									break
								} eZ = aAx - a2b + 1, aAe(db[fJ * g3 + a2b], 0 === a2b ? aAW[fJ] : aAP[aAw - 1] - aAP[aAw - 2], eZ), aAk(db[fJ * g3 + aAx], eZ), aAg(a2b, fJ, !0, eZ), aAw = eZ, a2b = aAx
						}
						aAU[fJ] = !0
					})(uu), aAr(uu, aAQ[aAt] + aAR[aAt] - uu, aAS[aAt]), aAR[aAt] = uu - aAQ[aAt] + 1
				}
			}(), fI = 0; fI < g3; fI++)
			if (!aAT[fI])
				for (fJ = 0; fJ < g9; fJ++) aAU[fJ] || ! function(fI, fJ) {
					var value = db[fJ * g3 + fI - 1] + db[(fJ - 1) * g3 + fI],
						wk = 2;
					aAT[fI + 1] && (wk++, value += db[fJ * g3 + fI + 1]);
					aAU[fJ + 1] && (wk++, value += db[(fJ + 1) * g3 + fI]);
					db[fJ * g3 + fI] = eR(value, wk)
				}(fI, fJ)
	}, this.a9e = function() {
		return db
	}, this.a9P = function() {
		db = null
	}
}

function eR(hY, hh) {
	return Math.floor(hY / hh + 1 / (2 * hh))
}

function a5v(hY, hh) {
	return 0 <= hY ? eR(hY, hh) : -eR(-hY, hh)
}

function hy(db) {
	return db * db
}

function vy(hY, hh) {
	return hh < hY ? hY : hh
}

function yG(hY, hh) {
	return hY < hh ? hY : hh
}

function yg(hY, db, hh) {
	return db < hY ? hY : hh < db ? hh : db
}

function aAz(db, eZ) {
	for (var iK = eR(db + 1, 2), eD = 0; eD < eZ; eD++) iK = eR(iK + eR(db, iK), 2);
	return iK
}

function a7b(db, eZ) {
	return db < 1 ? 0 : aAz(db, eZ)
}

function aB0(ja, jb, qP, xB, jc, jd, qQ, a4x) {
	return !(ja + qP <= jc || jb + xB <= jd || jc + qQ <= ja || jd + a4x <= jb)
}

function aB1(ja, jb, qP, xB, jc, jd, qQ, a4x) {
	return ja <= jc && jb <= jd && jc + qQ <= ja + qP && jd + a4x <= jb + xB
}

function p4(db) {
	return Math.floor(!!db * (1 + Math.log2(db + .5)))
}

function bH() {
	this.fE = function(hY, hh) {
		return Math.floor((hY + .5) / hh)
	}, this.aB2 = function(hY, hh) {
		return Math.floor(hY * (hh + .5))
	}, this.sqrt = function(db) {
		return ~~Math.sqrt(db + .5)
	}, this.pow = function(dE) {
		return Math.floor(Math.pow(2, dE) + .5)
	}, this.lP = function(value, min, max) {
		return Math.min(Math.max(value, min), max)
	}, this.aB3 = function(dm, dp, dr) {
		return Math.max(Math.min(dm, dp), dr)
	}, this.aB4 = function(aB5, aB6, fI, fJ) {
		fI -= aB5, aB5 = fJ - aB6, fJ = 0;
		return 0 == fI ? fJ = 0 <= aB5 ? Math.PI : 0 : (fJ = Math.atan(aB5 / fI), fJ += 0 < fI ? .5 * Math.PI : 1.5 * Math.PI), fJ
	}, this.log2 = function(db) {
		return Math.floor(!!db * (1 + Math.log2(db + .5)))
	}
}

function cV() {
	this.s6 = 0;
	var map = new Map;
	this.oY = function(fx, aB7 = 0, aAX = void 0) {
		0 !== fx ? at.dI.hideCMPButton() : 0 === x.rp() && at.dI.showCMPButton(), this.o0(), this.s6 = fx;
		let oz = map.get(fx);
		if (!oz || 4 === fx || 7 === fx || 8 === fx) {
			if (0 === fx) return void map.clear();
			1 === fx ? oz = new aB8 : 2 === fx ? oz = new aB9 : 3 === fx ? oz = new aBA : 4 === fx ? oz = aAX : 5 === fx ? oz = new aBB : 6 === fx ? oz = new aBC : 7 === fx ? oz = new aBD : 8 === fx && (oz = aAX), oz.aB7 = aB7, map.set(fx, oz)
		}
		oz.show(aAX)
	}, this.aBE = function() {
		this.sv() && this.oY(map.get(this.s6).aB7)
	}, this.o0 = function() {
		this.sv() && map.get(this.s6).o0()
	}, this.resize = function() {
		if (!this.sv()) return !1;
		map.get(this.s6).resize()
	}, this.t9 = function(dE) {
		return !!this.sv() && ("Enter" === dE.key ? map.get(this.s6).t9(1) : "Escape" === dE.key && map.get(this.s6).t9(2), !0)
	}, this.i5 = function() {
		var oz;
		this.sv() && (oz = map.get(this.s6)) && oz.i5 && oz.i5()
	}, this.sv = function() {
		return 0 < this.s6
	}, this.s7 = function() {
		return map.get(this.s6)
	}
}

function aBB() {
	var aBF, aBG, aBH, ns;
	this.show = function() {
		aBF.show(), this.resize()
	}, this.o0 = function() {
		aBF.o0()
	}, this.resize = function() {
		aBF.resize(), aBG.resize()
	}, this.t9 = function(iK) {
		2 === iK && ar.oY(0)
	}, aBH = [new nK("Create New Account", function() {
		ar.oY(8, 5, new aBJ("⏳ Connecting...", 8))
	}), new nK("Log In To Account", function() {
		ar.oY(6)
	})], ns = [new nK("❌ " + aV.nZ[92], function() {
		ar.oY(1)
	}, aZ.l6)], aBF = new nr("Account Menu", ns), aBG = new nQ(aBH, aBF.nw)
}

function aBD() {
	var aBF, aBK;
	this.show = function() {
		aBF.show(), this.resize()
	}, this.o0 = function() {
		aBF.o0()
	}, this.resize = function() {
		aBF.resize(), aBK.resize()
	}, this.t9 = function(iK) {
		1 !== iK && ar.oY(1)
	}, aBF = new nr("👤 " + aV.nZ[125], [new nK("💾 " + aV.nZ[97], function() {
		ar.oY(1)
	}, aZ.ks)]), aBK = new n4(aBF.nw, function() {
		let aBM, n6 = [];
		return (aBM = new mr).mu("Account Information"), aBM.mv("Under Construction."), n6.push(aBM), n6.push(function() {
			let aBM = new mr,
				aBP = (aBM.mu("Account Name"), new nh(b9.dG.data[105]));
			return aBP.dE.readOnly = !0, aBM.n2(aBP), aBM.n2(new nf([new nK("Copy", function() {
				aY.fy.tg(aBP.dE), aY.fy.th(this)
			}).button])), aBM
		}()), n6.push(function() {
			let aBM = new mr,
				aBQ = (aBM.mu("Password"), new nh(b9.dG.data[106]));
			return aBQ.dE.readOnly = !0, aBQ.dE.type = "password", aBM.n2(aBQ), aBM.n2(new nf([new nK("Show", function() {
				"Show" === this.innerText ? (this.innerText = "Hide", aBQ.dE.type = "text") : (this.innerText = "Show", aBQ.dE.type = "password")
			}).button, new nK("Copy", function() {
				aY.fy.tg(aBQ.dE), aY.fy.th(this)
			}).button])), aBM.n2(new nf([new nK("Request New Password", function() {
				ar.oY(8, 1, new aBJ("⏳ Connecting...", 15))
			}).button])), aBM
		}()), (aBM = new mr).mu("1v1 Rating"), aBM.mx("Elo: " + aY.ji.u3(b9.dG.data[107].value, .1, 1) + "<br>Rank: " + (b9.dG.data[108].value + 1) + " / " + b9.dG.data[111].value + "<br>Played Games: " + b9.dG.data[112].value), n6.push(
			aBM), n6
	}())
}

function aBJ(title, id) {
	var aBF, aBR;

	function aBV() {
		aBR.nd.innerHTML += "<br>New Connection..."
	}
	this.aBS = !0, this.show = function() {
		aBF.show(), this.resize(), 8 === id ? aN.iv.zO(0, 50 + id) ? aN.aBT.aBU(id) : aBV() : 15 === id ? aN.iv.zO(0, id) ? this.aBW() : aBV() : 16 === id && (aN.iv.zO(0, id) ? aN.aBX.aBY() : aBV())
	}, this.aBW = function() {
		ab.d2(48), ab.os(24, Math.floor(ai.pow(24) * Math.random())), ab.os(24, Math.floor(ai.pow(24) * Math.random())), ae.cq(ab.mH), b9.na.nb(110, ac.oc.qi(ac.oc.qg(8))), aN.aBX.aBZ()
	}, this.aBa = function() {
		15 === id && (b9.na.nb(106, b9.dG.data[110].value), b9.na.nb(110, ""), ar.oY(7))
	}, this.o0 = function() {
		aBF.o0()
	}, this.resize = function() {
		aBF.resize(), aBR.resize()
	}, this.t9 = function(iK) {
		2 === iK && ar.aBE()
	}, this.aBb = function(n3) {
		var aBc = [];
		for (let eD = 0; eD < n3.length; eD++) b8.a45.cq(n3[0].aBd, n3[0].aBe, n3[0].aBf), aBc.push(b8.a45.aBg());
		b8.a45.a46(), aN.aBT.aBh(0, aBc)
	}, this.aBi = function() {
		ar.oY(7)
	}, this.s8 = function(dE) {
		return 4387 === dE && 16 === id && 0 !== b9.dG.data[110].value.length && (console.log("tryFallBackPassword"), b9.na.nb(106, b9.dG.data[110].value), b9.na.nb(110, ""), aN.iv.zO(0, id), !0)
	}, aBF = new nr(title, [new nK("❌ " + aV.nZ[92], function() {
		ar.aBE()
	}, aZ.l6)]), aBR = new nc(aBF.nw, "Find Server...")
}

function aBj(title) {
	var aBF, aBk, aBl;
	this.show = function() {
		aBF.show(), this.resize()
	}, this.o0 = function() {
		aBF.o0()
	}, this.resize = function() {
		aBF.resize(), aBk.resize()
	}, this.t9 = function(iK) {
		2 === iK && aBl[0].nN()
	}, aBl = [new nK("❌ " + aV.nZ[92], function() {
		ar.oY(0)
	}, aZ.l6)], aBF = new nr(title, aBl), aBk = new ni(aBF.nw, [
		["1.", "RU", "6.35", "Show"],
		["2.", "RU", "6.35", "Show"],
		["3.", "RU", "6.35", "Show"],
		["4.", "RU", "6.35", "Show"],
		["5.", "RU", "6.35", "Show"],
		["6.", "RU", "6.35", "Show"],
		["7.", "RU", "6.35", "Show"],
		["8.", "RU", "6.35", "Show"],
		["9.", "RU", "6.35", "Show"],
		["10.", "RU", "6.35", "Show"]
	])
}

function aBC() {
	var aBF, aBK, n6;
	this.show = function() {
		aBF.show(), this.resize()
	}, this.o0 = function() {
		aBF.o0()
	}, this.resize = function() {
		aBF.resize(), aBK.resize()
	}, this.t9 = function(iK) {
		2 === iK && ar.oY(7)
	}, aBF = new nr("Log In", [new nK("❌ " + aV.nZ[92], function() {
		ar.oY(5)
	}, aZ.l6), new nK("➡️ Log In", function() {
		b9.na.nb(105, ad.oc.om(aBK.n7[0].ms[0].dE.value, 5)), b9.na.nb(110, ad.oc.om(aBK.n7[1].ms[0].dE.value, 8)), b9.na.nb(106, "k05hbHxa"), ar.oY(8, 6, new aBJ("⏳ Connecting...", 16))
	}, aZ.ks)]), aBK = new n4(aBF.nw, ((n6 = []).push(function() {
		var aBM = new mr;
		return aBM.mu("Account Name"), aBM.n2(new nh({
			title: "AccountName",
			value: "",
			fx: -1
		})), aBM
	}()), n6.push(function() {
		let aBM = new mr,
			aBQ = (aBM.mu("Password"), new nh({
				title: "Password",
				value: "",
				fx: -1
			}));
		return aBQ.dE.type = "password", aBM.n2(aBQ), aBM.n2(new nf([new nK("Show", function() {
			"Show" === this.innerText ? (this.innerText = "Hide", aBQ.dE.type = "text") : (this.innerText = "Show", aBQ.dE.type = "password")
		}).button])), aBM
	}()), n6))
}

function s2(title, my, aBn = !1, aBl = [new nK("❌ " + aV.nZ[92], function() {
	ar.aBE()
}, aZ.l6)]) {
	var aBF, aBR;
	this.show = function() {
		aBF.show(), this.resize()
	}, this.o0 = function() {
		aBF.o0()
	}, this.resize = function() {
		aBF.resize(), aBR.resize()
	}, this.t9 = function(iK) {
		2 === iK && aBl[0].nN()
	}, aBF = new nr(title, aBl), aBR = new nc(aBF.nw, my), aBn && aY.fy.textAlign(aBF.nw.style, 1)
}

function aBA() {
	var aBF, o5;

	function aBo() {
		at.dI.hideCMPButton();
		var fw = aX.aBu(o5.oA());
		(0 < fw.length && fw === aX.mW.aBr || aX.aBw.ox(fw)) && (ar.oY(0), aX.aBv())
	}
	this.show = function(aBp) {
		! function(aBp) {
			0 === rG ? (aBp = aBp || o5.oA(), o5.o8(aBp)) : (aX.mW.aBr.length && (fL || 1 !== rG) || (aX.mW.aBr = aX.aBs.qt()), o5.o8(aX.aBt(aX.mW.aBr)))
		}(aBp), aBF.show(), this.resize()
	}, this.o0 = function() {
		aBF.o0()
	}, this.resize = function() {
		aBF.resize(), o5.resize()
	}, this.t9 = function(iK) {
		1 === iK ? aBo() : ar.aBE()
	}, aBF = new nr("▶️ " + aV.nZ[82], [new nK("❌ " + aV.nZ[92], function() {
		ar.aBE()
	}, aZ.l6), new nK("🔲 " + aV.nZ[93], function() {
		o5.oB()
	}), new nK("📋 " + aV.nZ[94], function() {
		o5.oC()
	}), new nK("🗑️ " + aV.nZ[95], function() {
		o5.clear()
	}), new nK("▶️ " + aV.nZ[96], function() {
		aBo()
	}, aZ.kw)]), o5 = new o4, aBF.nw.appendChild(o5.o6)
}

function aB9() {
	var aBF, aBK, n6, aBx, aBM;
	this.show = function() {
			aBF.show(), this.resize()
		}, this.o0 = function() {
			aBF.o0()
		}, this.resize = function() {
			aBF.resize(), aBK.resize()
		}, this.t9 = function(iK) {
			1 === iK ? aBx.dE.blur() : ar.oY(1)
		}, aBF = new nr("⚙️ " + aV.nZ[81], [new nK("💾 " + aV.nZ[97], function() {
			ar.oY(1)
		}, aZ.ks), new nK("🔄 " + aV.nZ[98], function() {
			ar.oY(0), b9.na.ob(), ar.oY(2)
		})]), n6 = [], (aBM = new mr).mu(aV.nZ[99]), aBM.mv(aV.nZ[100]), n6.push(aBM), (aBM = new mr).mu(b9.dG.data[0].title), aBM.mz(new nn(b9.dG.data[0])), n6.push(aBM), (aBM = new mr).mu(b9.dG.data[10].title), aBM.mz(new nn(b9.dG.data[10])), n6
		.push(aBM), (aBM = new mr).mu(b9.dG.data[1].title), aBM.mz(new nn(b9.dG.data[1])), n6.push(aBM), (aBM = new mr).mu(b9.dG.data[9].title), aBM.mz(new nn(b9.dG.data[9])), n6.push(aBM), (aBM = new mr).mu(b9.dG.data[11].title), aBM.mz(new nn(b9.dG
			.data[11])), n6.push(aBM), (aBM = new mr).mu(b9.dG.data[2].title), aBM.n2(new nX(b9.dG.data[2])), n6.push(aBM), (aBM = new mr).mu(b9.dG.data[6].title), aBM.n2(new nX(b9.dG.data[6])), n6.push(aBM), (aBM = new mr).mu(b9.dG.data[7].title),
		aBM.n2(new nX(b9.dG.data[7])), n6.push(aBM), (aBM = new mr).mu(b9.dG.data[8].title), aBM.n2(new nX(b9.dG.data[8])), n6.push(aBM), (aBM = new mr).mu(b9.dG.data[5].title), aBx = new nh(b9.dG.data[5]), aBM.n2(aBx), n6.push(aBM), aBK = new n4(aBF
			.nw, n6)
}

function aB8() {
	var aBF, aBG, aBH, ns, aBy = !1;
	this.show = function() {
		aBF.show(), this.resize(), this.i5()
	}, this.o0 = function() {
		aBF.o0()
	}, this.resize = function() {
		aBF.resize(), aBG.resize()
	}, this.t9 = function(iK) {
		2 === iK && ar.oY(0)
	}, this.i5 = function() {
		!aBy || j.vW(eU) || (ar.oY(0), ar.oY(1))
	}, aBH = [new nK("👤 " + aV.nZ[125], function() {
		0 === b9.dG.data[105].value.length ? ar.oY(5) : ar.oY(8, 1, new aBJ("⏳ Connecting...", 16))
	}), new nK("⚙️ " + aV.nZ[81], function() {
		ar.oY(2)
	}), new nK("▶️ " + aV.nZ[82], function() {
		ar.oY(3, 1, "")
	}), new nK("🔗 " + aV.nZ[83], function() {
		ar.oY(4, 1, new s2("🔗 " + aV.nZ[83], aY.fy.td(["Android App", "iOS App", "Discord", "Changelog", "Clans", "Clan Results", "Players", "Tutorial", "Terms", "Privacy"], [ah.a2O, ah.s3, ah.a2Q, ah.aC4, ah.aC5, ah.aC6, ah.aC7, ah.aC8,
			ah.aC9, ah.aCA
		]), !1, [new nK("❌ " + aV.nZ[92], function() {
			ar.oY(1)
		}, aZ.l6)]))
	}), new nK("ℹ️ " + aV.nZ[84], function() {
		ar.oY(4, 1, new s2("ℹ️ " + aV.nZ[84], d7 + "<br><a href='" + ah.aC4 + "' target='_blank'>" + ah.aC4 + "</a>" +
			"<br><br><b>" + "FX Client v" + fx_version + " " + fx_update + "<br><a href='https://discord.gg/dyxcwdNKwK' target='_blank'>FX Client Discord server</a>" +
			"<br><a href='https://github.com/fxclient/FXclient' target='_blank'>Github repository</a></b>", !0, [new nK("❌ " + aV.nZ[92], function() {
				ar.oY(1)
			}, aZ.l6)]))
	}), new nK("🗑️ " + aV.nZ[85], function() {
		ar.oY(4, 1, new s2("🗑️ " + aV.nZ[85],
			"Do you want to delete all locally stored data, like usernames, account data and setting data? Your account will be deleted automatically after 3 months of inactivity. To prevent the storage of new data, it is recommended to close the game after deletion.",
			!1, [new nK("❌ " + aV.nZ[92], function() {
				ar.oY(1)
			}), new nK("🗑️ Delete", function() {
				b7.cv.ro(), ar.oY(1)
			})]))
	}), new nK(aV.nZ[86], function() {
		b7.cv.rq(), ar.oY(4, 1, new s2("User Privacy", "If the privacy window doesn't open, please deactivate all your adblockers.<br>Additionally, check out our Privacy Policy: <a href='" + ah.aCA + "' target='_blank'>" + ah.aCA +
			"</a>", !1, [new nK("❌ " + aV.nZ[92], function() {
				ar.oY(1)
			}, aZ.l6)]))
	})], ns = [new nK("❌ " + aV.nZ[87], function() {
		ar.oY(0)
	}, aZ.l6)], 8 === x.rp() && aBH.unshift(new nK("📈 " + aV.nZ[88], function() {
		ar.oY(0), 2 <= b1.aC3 && (b2.tC(), b3.d1 = !0)
	})), 8 === x.rp() && !fL && j.vW(eU) && (aBy = !0, aBH.unshift(new nK("🏳️ " + aV.nZ[89], function() {
		aW.fb.ls(), ar.oY(0), j.fM && j.tC()
	}))), 1 === b7.id && 5 <= b7.dc && aBH.push(new nK(aV.nZ[90], function() {
		b7.cv.rr()
	})), aBF = new nr("📙 " + aV.nZ[91], ns), aBG = new nQ(aBH, aBF.nw)
}

function bG() {
	"function" != typeof Math.log2 && (Math.log2 = function(fI) {
		return Math.log(fI) / Math.log(2)
	}), "function" != typeof Math.log10 && (Math.log10 = function(fI) {
		return Math.log(fI) / Math.log(10)
	}), "function" != typeof Math.sign && (Math.sign = function(fI) {
		return 0 < fI ? 1 : fI < 0 ? -1 : 0
	})
}

function bx() {
	var zJ, aCC, aCD, aCE, aCB = !1;

	function aCF() {
		aCB = !0, zJ = -1, aCC = new Array(4);
		for (var eD = 3; 0 <= eD; eD--) aCC[eD] = !1;
		var aCG = Math.floor(1 + .02 * aK.min);
		aCD = new Array(4), (aCE = new Array(4))[1] = aCE[3] = aCD[0] = aCD[2] = 0, aCE[0] = aCD[3] = -aCG, aCD[1] = aCE[2] = aCG
	}

	function aCH() {
		if (-1 !== zJ)
			if (0 !== rG && f.kK()) {
				for (var aCI = !1, eD = 3; 0 <= eD; eD--) aCC[eD] && (aCI = !0, h5 += aCD[eD], h7 += aCE[eD], a6.sX(aCD[eD], aCE[eD]), p.z1());
				aCI ? b3.d1 = !0 : aB.kB()
			} else aB.kB()
	}
	this.t6 = function(fx) {
		0 !== rG && f.kK() && (aCB || aCF(), aCC[fx] = !0, -1 === zJ) && (zJ = setInterval(aCH, 20), aCH())
	}, this.tA = function(fx) {
		if (0 !== rG && (aCB || aCF(), aCC[fx] = !1, -1 !== zJ)) {
			for (var aCI = !1, eD = 3; 0 <= eD; eD--) aCI = aCI || aCC[eD];
			aCI || this.kB()
		}
	}, this.kB = function() {
		if (aCB && -1 !== zJ) {
			for (var eD = 3; 0 <= eD; eD--) aCC[eD] = !1;
			clearInterval(zJ), zJ = -1
		}
	}
}

function by() {
	this.iv = new aCJ, this.a4W = new aCK, this.lX = new aCL, this.aBT = new aCM, this.aBX = new aCN, this.wE = new aCO, this.aCP = new aCQ, this.aCR = new aCS, this.cq = function() {
		this.iv.cq()
	}
}

function aCK() {
	var aCT = [];
	this.aCU = function(s5) {
		var eD, hY, a4R, rb, aCV, aCW, a3y, aCX, aCY, aCZ, aBe, aBf;
		if (s5 !== aN.iv.sD) aN.iv.close(s5, 3239);
		else if (6 === x.rp() && (b8.a45.a46(), aCT = [], aG.cq()), 7 !== x.rp()) aN.iv.close(s5, 3251);
		else {
			for (a3y = [0, 0, 0, 0], aCX = ae.mI(6), eD = 0; eD < 4; eD++) a3y[eD] = ae.mI(aCX);
			for (aCY = ae.mI(4), aCZ = [], eD = 0; eD < aCY; eD++) {
				for (aCZ.push({
						id: ae.mI(5),
						uM: ae.mI(4),
						a4M: 1 === ae.mI(1),
						pZ: ae.mI(6),
						a4K: ae.mI(14),
						a4P: ae.mI(aCX),
						a4Q: ae.mI(9) + 1,
						a3B: ae.mI(10)
					}), a4R = ae.mI(3), rb = new Array(a4R), hY = 0; hY < a4R; hY++) aCV = ae.mI(9) + 1, aCW = ad.oe.oh(ae.mI(3)), rb[hY] = ("" === aCW ? "other: " : "[" + aCW + "]: ") + aCV;
				aCZ[eD].a4R = a4R, aCZ[eD].rb = rb
			}
			s5 = ae.mI(16), aBe = ae.mI(20), aBf = ae.mI(12), 0 !== s5 && (b8.a45.ig ? aCT.push({
				aBd: s5,
				aBe: aBe,
				aBf: aBf
			}) : b8.a45.cq(s5, aBe, aBf)), aG.nb(a3y, aCZ)
		}
	}, this.a4X = function(a4L) {
		var aCb;
		return !!b8.a45.ig && (aCb = b8.a45.aBg(), ab.d2(37), ab.os(1, 0), ab.os(6, 2), ab.os(4, a4L), ab.os(16, aCb[0]), ab.os(10, aCb[1]), aN.iv.send(aN.iv.sD, ab.mH), 0 !== aCT.length && (b8.a45.cq(aCT[0].aBd, aCT[0].aBe, aCT[0].aBf), aCT
			.shift()), !0)
	}
}

function aCJ() {
	var aCc, aCe;
	this.a3e = 5, this.a3f = this.a3e - 1, this.a33 = this.a3e + this.a3f, this.a32 = [0, 1, 5, 2, 6, 3, 7, 4, 8], this.aCd = null;

	function dP(eD) {
		return aCe[eD].aCB && aCc[eD].dP()
	}

	function aCk(s5) {
		aCe[s5].dY = b3.dY, aCe[s5].aCg = !1
	}
	this.sE = 0, this.sD = 0, this.cq = function() {
		this.aCd = new Array(this.a3e);
		this.aCd[0] = "territorial.io";
		var eD, a9K = aL.a8x(0);
		for (aL.uR(0), eD = 1; eD < this.a3e; eD++) this.aCd[eD] = h.qz() + ".territorial.io";
		for (aL.uR(a9K), aCc = new Array(this.a33), aCe = new Array(this.a33), eD = this.a33 - 1; 0 <= eD; eD--) aCe[eD] = {
			aCB: !1,
			dY: 0,
			aCg: !1
		}
	}, this.wK = function() {
		return this.sD < this.a3e ? this.sD : this.sD - this.a3f
	}, this.i5 = function() {
		for (var eD = this.a33 - 1; 0 <= eD; eD--) this.a2y(eD) && b3.dY > aCe[eD].dY + 15e3 && aN.lX.aCh(eD, aCe[eD].aCg)
	}, this.zO = function(s5, aB7) {
		if (aCe[s5].aCB) {
			if (aCc[s5].dP()) return aCc[s5].aCj(aB7), aCc[s5].a2y();
			aCc[s5].o0()
		}
		return this.aCi(s5, aB7), !1
	}, this.aCi = function(s5, aB7) {
		aCe[s5].aCB = !0, aCk(s5), aCc[s5] = new aCl, aCc[s5].cq(s5, aB7)
	}, this.aCj = function(s5, aB7) {
		dP(s5) && aCc[s5].aCj(aB7)
	}, this.aCm = function(s5, aB7) {
		0 === aB7 ? q.zQ() : aB7 < 3 ? aN.lX.a1w(s5, aB7 - 1) : 3 === aB7 ? aN.lX.a4q(s5) : 4 === aB7 ? w.zQ(s5) : 5 === aB7 ? s5 === this.sE && aN.lX.aCn() : 6 !== aB7 && 7 !== aB7 && (15 === aB7 ? 8 === ar.s6 && ar.s7().aBW() : 16 === aB7 ?
			8 === ar.s6 && aN.aBX.aBY() : 50 <= aB7 && aN.aBT.aBU(aB7 - 50))
	}, this.a2y = function(eD) {
		return aCe[eD].aCB && aCc[eD].a2y()
	}, this.send = function(s5, mH) {
		console.log("send " + s5 + " " + mH.length), aCk(s5), aCc[s5].send(mH)
	}, this.so = function(s5) {
		aCe[s5].aCg = !0
	}, this.close = function(s5, aCo) {
		dP(s5) && aCc[s5].close(aCo)
	}, this.aCp = function(s5, aCo) {
		bB.sH(aCo), dP(s5) && aCc[s5].close(aCo)
	}, this.sL = function(aCo) {
		for (var eD = this.a33 - 1; 0 <= eD; eD--) this.close(eD, aCo)
	}, this.aCq = function(s5, aCo) {
		for (var eD = this.a33 - 1; 0 <= eD; eD--) eD !== s5 && this.close(eD, aCo)
	}, this.aCr = function(s5, dE) {
		aCc[s5].o0(), bB.s4(s5, dE.code)
	}
}

function aCO() {
	this.aCs = function(s5, mH) {
		ae.cq(mH), 0 === ae.size ? aN.iv.aCp(s5, 3205) : ((0 === ae.mI(1) ? function(s5) {
			var aCw = ae.mI(6);
			0 === aCw ? function(s5) {
				var eD;
				if (0 === s5 && 8 !== x.rp()) {
					aw.fv(0, ad.oe.oh(ae.mI(5))), aw.fv(1, "[" + ad.oe.oh(ae.mI(3)) + "]");
					var aD3 = ae.mI(12),
						aD4 = ae.mI(6),
						dl = new Array(aD3);
					for (eD = 0; eD < aD3; eD++) dl[eD] = ae.mI(aD4);
					q.zS(dl)
				}
			}(s5) : 1 === aCw ? function() {
				var eD;
				if (8 !== x.rp()) {
					var qX, id = ae.mI(1),
						position = ae.mI(16),
						wk = ae.mI(4),
						dl = [];
					for (eD = 0; eD < wk; eD++) qX = ae.mI(14), dl.push({
						name: ad.oe.oh(ae.mI(5)),
						qX: qX
					});
					0 === id ? b6.a1y(0, dl, 10, 1, .36, .55, position) : b6.a1y(1, dl, 100, 2, .47, .5, position)
				}
			}() : 2 === aCw ? aN.a4W.aCU(s5) : 3 === aCw || 4 === aCw ? aJ.cq() : 5 === aCw ? aN.aCP.aCz() : 6 === aCw ? aN.aCR.aD0() : 7 === aCw ? aN.aCP.aD1() : 8 === aCw && aN.aCR.aD2()
		} : function(s5) {
			if (8 !== x.rp() && !aJ.a3g()) return;
			if (s5 !== aN.iv.sE) aN.iv.aCp(s5, 3244);
			else if (0 === ae.mI(1)) b3.rM.aD9(ae.mH);
			else {
				var eD, s5 = ae.mI(2);
				if (0 === s5) {
					var lX = ae.mI(9),
						lm = ae.mI(7);
					0 !== h1[lX] && 0 !== h1[eU] && (lm %= az.mo, k.ll(lX, eU, lm), a6.mp(lX, 1, lm))
				} else if (1 === s5) ! function() {
					var lX = ae.mI(9);
					0 !== h1[lX] && 0 !== h1[eU] && aS.a94(0, [lX], !0) && k.m3(lX, 1)
				}();
				else if (2 === s5) ! function() {
					var lX = ae.mI(9),
						target = ae.mI(9);
					0 !== h1[lX] && 0 !== h1[target] && 0 !== h1[eU] && aS.a94(1, [lX], !0) && (a6.mp(lX, 3, 96), a6.mp(target, 4, 96), k.wL(lX, target))
				}();
				else if (d9 && !dB) {
					var eZ = 720;
					for (ab.d2(14407), ab.os(1, 0), ab.os(6, 10), eZ = Math.min(aW.lU.mL.length, 720), eD = 0; eD < eZ; eD++) ab.os(20, aW.lU.mL[eD]);
					aN.iv.send(aN.iv.sE, ab.mH)
				}
			}
		})(s5), b3.aCv())
	}, this.a3h = function(mH) {
		if (ae.cq(mH), ae.fx = 1, 3 === ae.mI(6)) {
			ae.fx += 20;
			for (var a4u, a4t, name, mH = ae.mI(9), uK = ae.mI(14), uM = ae.mI(4), a4M = 1 === ae.mI(1), a4N = ae.mI(6), a4O = ae.mI(14), aD8 = ae.mI(9) + 1, qT = [], eD = 0; eD < aD8; eD++) a4u = ae.mI(1), a4t = [ae.mI(6), ae.mI(6), ae.mI(6)],
				name = ad.oe.oh(ae.mI(5)), qT.push({
					name: name,
					a4t: a4t,
					a4u: a4u
				});
			x.a3G(), ap.d2(a4N, a4O), 1 === qT.length && z.a4i(uM), uJ(uK, mH, qT, uM, a4M, !1)
		} else ! function() {
			ae.fx += 20;
			for (var a4u, a4t, qX, name, a3Y = ae.mI(1), uK = ae.mI(14), uM = ae.mI(4), a4M = 1 === ae.mI(1), a4N = ae.mI(6), a4O = ae.mI(14), qT = [], eD = 0; eD < 2; eD++) a4u = ae.mI(1), a4t = [ae.mI(6), ae.mI(6), ae.mI(6)], qX = ae.mI(
				14), name = ad.oe.oh(ae.mI(5)), qT.push({
					name: name,
					a4t: a4t,
					qX: qX,
					a4u: a4u
				});
			x.a3G(), ap.d2(a4N, a4O), uJ(uK, a3Y, qT, uM, a4M, !1)
		}()
	}, this.a3c = function() {
		ae.fx = 1;
		var aCw = ae.mI(6),
			aD7 = ae.mI(10);
		return aN.iv.sD > aN.iv.a3f && (aD7 += aN.iv.a3f), aN.iv.sD === aD7 ? (aN.iv.sE = aD7, !1) : (aN.iv.close(aN.iv.sD, 3247), aN.iv.sE = aD7, aJ.a3X = ae.mI(10), aJ.a3Y = ae.mI(3 === aCw ? 9 : 1), aN.iv.zO(aD7, 5) && aN.lX.aCn(), !0)
	}
}

function aCS() {
	this.aD0 = function() {
		8 === ar.s6 && (b9.na.nb(105, ac.oc.qi(ac.oc.qg(5))), b9.na.nb(106, ac.oc.qi(ac.oc.qg(8))), b9.na.nb(109, ae.mI(30)), console.log("receiveNewAccountData " + b9.dG.data[106].value), b9.na.nb(108, b9.dG.data[109].value), b9.na.nb(111, b9.dG
			.data[109].value + 1), b9.na.nb(107, 0), b9.na.nb(110, ""), ar.s7().aBi())
	}, this.aD2 = function() {
		8 === ar.s6 && (b9.na.nb(109, ae.mI(30)), b9.na.nb(107, ae.mI(16)), b9.na.nb(108, ae.mI(30)), b9.na.nb(112, ae.mI(30)), b9.na.nb(111, ae.mI(30)), b9.na.nb(110, ""), ar.s7().aBi())
	}
}

function aCQ() {
	this.aD1 = function() {
		b9.na.nb(109, ae.mI(30)), 8 === ar.s6 && ar.s7().aBa()
	}, this.aCz = function() {
		if (ar.sv() && ar.s7().aBb) {
			var size = ae.mI(6),
				aDF = [];
			for (let eD = 0; eD < size; eD++) aDF.push([ae.mI(16), ae.mI(20), ae.mI(12)]);
			ar.s7().aBb(aDF)
		}
	}
}

function aCL() {
	function aDI() {
		ab.os(14, a.dC), ab.os(4, 2 === b7.id ? 2 : 12 <= b7.dc ? 1 : 0 < b7.dc ? 3 : 0), ab.os(1, d9 ? 1 : 0), ab.os(1, dB ? 1 : 0), ab.os(5, (new Date).getHours() % 24)
	}
	this.zR = function() {
		ab.d2(21), ab.os(1, 0), ab.os(6, 0), ab.os(14, a.dC), aN.iv.send(0, ab.mH)
	}, this.a34 = function(s5) {
		ab.d2(238 + 16 * b9.dG.data[100].value.length), ab.os(1, 0), ab.os(6, 1), ab.os(10, dA), aDJ = Math.floor((new Date).getTime() / 36e5) - b9.dG.data[181].value, ab.os(30, b9.dG.data[180].value), ab.os(20, ai.lP(aDJ, 0, 1048575));
		var aDJ = a8.vZ[2].rB.a2l();
		ab.os(6, aDJ[0]), ab.os(6, aDJ[1]), ab.os(6, aDJ[2]), ab.os(1, +(0 !== b9.dG.data[105].value.length)), aN.aBX.aDH(), aDI(), ab.os(5, b9.dG.data[100].value.length), ac.oe.ot(b9.dG.data[100].value), aN.iv.sD = s5, aN.iv.send(s5, ab.mH)
	}, this.a1w = function(s5, id) {
		console.log("wrapPackageLeaderboard"), ab.d2(38), ab.os(1, 0), ab.os(6, 6), ab.os(14, a.dC), ab.os(1, id), ab.os(16, Math.abs(4096 + b6.position[id] + b6.a1v[id]) % 65536), aN.iv.send(s5, ab.mH)
	}, this.aCh = function(s5, aCg) {
		ab.d2(8), ab.os(1, 0), ab.os(6, 4), ab.os(1, aCg ? 1 : 0), aN.iv.send(s5, ab.mH)
	}, this.aCn = function() {
		ab.d2(58), ab.os(1, 0), ab.os(6, 5), ab.os(8, aN.iv.wK()), ab.os(10, aJ.a3X), ab.os(9, aJ.a3Y), ab.os(10, dA), ab.os(14, a.dC), aN.iv.send(aN.iv.sE, ab.mH)
	}, this.lY = function(fV) {
		ab.d2(27), ab.os(1, 1), ab.os(4, 0), ab.os(22, fV), aN.iv.send(aN.iv.sE, ab.mH)
	}, this.la = function(h4, hR) {
		ab.d2(25), ab.os(1, 1), ab.os(4, 1), ab.os(10, h4), ab.os(10, hR), aN.iv.send(aN.iv.sE, ab.mH)
	}, this.le = function(h4, lc) {
		ab.d2(24), ab.os(1, 1), ab.os(4, 2), ab.os(10, h4), ab.os(9, lc), aN.iv.send(aN.iv.sE, ab.mH)
	}, this.lf = function(h4, fV) {
		ab.d2(37), ab.os(1, 1), ab.os(4, 3), ab.os(10, h4), ab.os(22, fV), aN.iv.send(aN.iv.sE, ab.mH)
	}, this.li = function(lg, fV) {
		ab.d2(37), ab.os(1, 1), ab.os(4, 4), ab.os(10, lg), ab.os(22, fV), aN.iv.send(aN.iv.sE, ab.mH)
	}, this.lk = function(hR) {
		ab.d2(15), ab.os(1, 1), ab.os(4, 5), ab.os(10, hR), aN.iv.send(aN.iv.sE, ab.mH)
	}, this.lo = function(fx) {
		ab.d2(12), ab.os(1, 1), ab.os(4, 6), ab.os(7, fx), aN.iv.send(aN.iv.sE, ab.mH)
	}, this.lr = function(lq) {
		ab.d2(6), ab.os(1, 1), ab.os(4, 7), ab.os(1, lq), aN.iv.send(aN.iv.sE, ab.mH)
	}, this.lt = function() {
		ab.d2(5), ab.os(1, 1), ab.os(4, 8), aN.iv.send(aN.iv.sE, ab.mH)
	}, this.mB = function(a6K, mA) {
		ab.d2(29), ab.os(1, 1), ab.os(4, 10), ab.os(12, a6K), ab.os(2, 0), ab.os(10, mA), aN.iv.send(aN.iv.sE, ab.mH)
	}, this.mE = function(a6K, pN, pO, aDK) {
		ab.d2(46), ab.os(1, 1), ab.os(4, 10), ab.os(12, a6K), ab.os(2, 1), ab.os(9, pN), ab.os(9, pO), ab.os(9, aDK), aN.iv.send(aN.iv.sE, ab.mH)
	}, this.mG = function(a6K) {
		var eD, rR = ao.iw.rR;
		for (ab.d2(47 + 33 * rR.length), ab.os(1, 1), ab.os(4, 10), ab.os(12, a6K), ab.os(2, 2), ab.os(24, ao.iw.rQ), ab.os(4, rR.length), eD = 0; eD < rR.length; eD++) ab.os(9, rR[eD].player), ab.os(24, rR[eD].rd);
		aN.iv.send(aN.iv.sE, ab.mH)
	}, this.m1 = function(aDL, aDM) {
		ab.d2(21), ab.os(1, 1), ab.os(4, 15), ab.os(9, aDM), ab.os(7, aDL), aN.iv.send(aN.iv.sE, ab.mH)
	}, this.m4 = function(wE) {
		ab.d2(14), ab.os(1, 1), ab.os(4, 14), ab.os(9, wE), aN.iv.send(aN.iv.sE, ab.mH)
	}, this.m8 = function(aDN, target) {
		var eD, eZ = aDN.length;
		for (ab.d2(14 + 9 * eZ), ab.os(1, 1), ab.os(4, 13), ab.os(9, target), eD = 0; eD < eZ; eD++) ab.os(9, aDN[eD]);
		aN.iv.send(aN.iv.sE, ab.mH)
	}, this.a4q = function(s5) {
		ab.d2(32), ab.os(1, 0), ab.os(6, 3), aDI(), aN.iv.send(s5, ab.mH)
	}
}

function aCN() {
	this.aBZ = function() {
		ab.d2(177), ab.os(1, 0), ab.os(6, 11), this.aDH(), ad.oc.ot(b9.dG.data[110].value), aN.iv.send(0, ab.mH)
	}, this.aBY = function() {
		ab.d2(129), ab.os(1, 0), ab.os(6, 13), this.aDH(), aN.iv.send(0, ab.mH)
	}, this.aDH = function() {
		ab.os(14, a.dC), ad.oc.ou(b9.dG.data[105].value, 5), ad.oc.ou(b9.dG.data[106].value, 8), ab.os(30, b9.dG.data[109].value)
	}
}

function aCM() {
	this.aBU = function(id) {
		ab.d2(21), ab.os(1, 0), ab.os(6, id), ab.os(14, a.dC), aN.iv.send(0, ab.mH)
	}, this.aBh = function(aD7, n3) {
		ab.d2(7 + 26 * n3.length), ab.os(1, 0), ab.os(6, 9);
		for (let eD = 0; eD < n3.length; eD++) ab.os(16, n3[eD][0]), ab.os(10, n3[eD][1]);
		aN.iv.send(aD7, ab.mH)
	}
}

function aCl() {
	var s5, aB7, sN, aDO = ["wss://", "/s50/", "/s51/", "/s52/"];

	function aCm() {
		aN.iv.aCm(s5, aB7)
	}

	function aDT(dE) {
		aN.wE.aCs(s5, new Uint8Array(dE.data))
	}

	function aDU() {}

	function aCr(dE) {
		aN.iv.aCr(s5, dE)
	}
	this.cq = function(fx, aDP) {
		s5 = fx, aB7 = aDP;
		fx = aDO[0];
		s5 < aN.iv.a3e ? fx += aN.iv.aCd[s5] + aDO[1 + d6] : fx += aN.iv.aCd[0] + "/i" + (1 + d6) + (s5 - aN.iv.a3f) + "/", (sN = new WebSocket(fx)).binaryType = "arraybuffer", sN.onopen = aCm, sN.onmessage = aDT, sN.onclose = aCr, sN.onerror =
			aDU
	}, this.aDR = function() {
		return sN.readyState === sN.CONNECTING
	}, this.a2y = function() {
		return sN.readyState === sN.OPEN
	}, this.dP = function() {
		return this.aDR() || this.a2y()
	}, this.aCj = function(aDP) {
		aB7 = aDP
	}, this.send = function(mH) {
		this.a2y() && sN.send(mH)
	}, this.close = function(aCo) {
		this.dP() && (sN.close(aCo), this.o0())
	}, this.o0 = function() {
		sN.onopen = null, sN.onmessage = null, sN.onclose = null, sN.onerror = null
	}
}

function cd() {
	var aDV = !1,
		we = 0,
		g3 = 0,
		qP = 0,
		gap = 0,
		gM = null,
		qK = null,
		tU = null;

	function aDX() {
		for (var a4A, aDa = 0, eZ = 0, iK = Math.floor(g3 / 2), gP = Math.floor(qP / 2), a49 = 1.5 * Math.PI, eD = uH; 0 <= eD; eD--) eZ += tU[eD], 0 === tU[eD] && aDa++;
		if (aDV = !1, qK.clearRect(0, 0, g3, g3), qK.fillStyle = aZ.kY, qK.fillRect(0, 0, g3, g3), qK.fillStyle = aZ.gE, qK.fillRect(0, 0, g3, gap), qK.fillRect(0, 0, gap, g3), qK.fillRect(g3 - gap, 0, gap, g3), qK.fillRect(0, g3 - gap, g3, gap), 0 <
			eZ)
			if (aDa === uH) {
				for (eD = uH; 0 <= eD; eD--)
					if (0 < tU[eD]) {
						! function(eD, iK, gP) {
							qK.fillStyle = b4.a4E[b4.rT[eD]], qK.beginPath(), qK.arc(iK, iK, gP, 0, 2 * Math.PI), qK.fill()
						}(eD, iK, gP);
						break
					}!
				function(iK) {
					var fontSize = iK / 3;
					qK.font = aY.fy.fz(1, fontSize), qK.fillStyle = aZ.gE, qK.fillText("100%", iK, iK + .1 * fontSize)
				}(iK)
			} else {
				for (eD = 0; eD <= uH; eD++) 0 < tU[eD] && (! function(eD, iK, gP, a49, a4A) {
					qK.fillStyle = b4.a4E[b4.rT[eD]], qK.beginPath(), qK.arc(iK, iK, gP, a49, a4A), qK.lineTo(iK, iK), qK.fill()
				}(eD, iK, gP, a49, a4A = a49 + 2 * Math.PI * tU[eD] / eZ), function(iK, gP, a49, a4A) {
					var db = (a4A - a49) / (2 * Math.PI),
						fontSize = +gP * Math.min(db, .37);
					fontSize < 8 || (a49 = (a49 + a4A) / 2, a4A = Math.floor(100 * db + .5) + "%", gP *= .525 - Math.max(.6 * (db - .7), 0), qK.font = aY.fy.fz(1, fontSize), qK.fillStyle = aZ.gE, qK.fillText(a4A, iK + Math.cos(a49) * gP, iK +
						Math.cos(a49 + 1.5 * Math.PI) * gP))
				}(iK, gP, a49, a4A), 0 !== eD && a4C(iK, gP, a49), a49 = a4A);
				a4C(iK, gP, 1.5 * Math.PI)
			}!
		function(iK, gP) {
			qK.beginPath(), qK.arc(iK, iK, gP, 0, 2 * Math.PI), qK.stroke()
		}(iK, gP)
	}

	function a4C(iK, gP, a4F) {
		qK.beginPath(), qK.moveTo(iK, iK), qK.lineTo(iK + Math.cos(a4F) * gP, iK + Math.cos(a4F + 1.5 * Math.PI) * gP), qK.stroke()
	}
	this.cq = function() {
		if (hL) {
			var eD;
			for (we = 0, tU = new Uint32Array(uH + 1), eD = uH; 0 <= eD; eD--) tU[eD] = 0;
			for (eD = iM - 1; 0 <= eD; eD--) tU[b4.iL[iN[eD]]] += 1;
			this.resize()
		} else tU = qK = gM = null
	}, this.xx = function() {
		return g3
	}, this.resize = function() {
		hL && (g3 = Math.floor(b7.cv.ft() && !k7 ? .18 * aK.min : .13 * aK.fu), g3 = (g3 *= 1 + (.5 + .2 * b7.cv.ft()) * k7) + g3 % 2, qP = Math.floor(7 * g3 / 8), (gM = gM || document.createElement("canvas")).width = g3, gM.height = g3, qK = gM
			.getContext("2d", {
				alpha: !0
			}), gap = Math.max(1, .015 * g3), qK.lineWidth = gap, qK.strokeStyle = aZ.gE, aY.fy.textAlign(qK, 1), aY.fy.textBaseline(qK, 1), aDX())
	}, this.rV = function() {
		return tU[this.rU()]
	}, this.rD = function() {
		return we = 31, this.i5(), this.rU()
	}, this.rU = function() {
		for (var aDY = 0, eD = uH; 0 < eD; eD--) tU[eD] > tU[aDY] && (aDY = eD);
		return aDY
	}, this.i5 = function() {
		if (hL && 32 <= ++we) {
			var eD;
			for (we = 0, eD = uH; 0 <= eD; eD--) tU[eD] = 0;
			for (eD = iM - 1; 0 <= eD; eD--) tU[b4.iL[iN[eD]]] += ez[iN[eD]];
			aDV = !0
		}
	}, this.g0 = function() {
		hL && aDV && aDX()
	}, this.gC = function() {
		hL && (k7 ? gD.drawImage(gM, b0.gap, b0.gap) : gD.drawImage(gM, b0.gap, xy + 2 * b0.gap))
	}
}

function cL() {
	this.d3 = function() {
		var value;
		b7.oS || 2 === b7.id || (value = function(key) {
			if ("undefined" == typeof URLSearchParams) return null;
			var aBp = window.location.search,
				aBp = new URLSearchParams(aBp).get(key);
			if ("string" != typeof aBp || aBp.length < 1) return null;
			return aBp
		}("replay")) && ar.oY(3, 0, value)
	}, this.clear = function() {
		var s1;
		b7.oS || 2 === b7.id || ((s1 = new URL(window.location.href)).search = "", history.replaceState(null, "", s1.toString()))
	}
}

function bz() {
	var aDf, dl;
	this.cq = function() {
		for (var eD = (dl = new Uint16Array(101)).length - 1; 0 <= eD; eD--) dl[eD] = eR(32768 * eD, 100);
		this.uR(0)
	}, this.value = function(eg) {
		return dl[eg]
	}, this.a8x = function() {
		return eR(aDf - 1, 2)
	}, this.uR = function(a9K) {
		aDf = 2 * a9K % 32768 + 1
	}, this.random = function() {
		return aDf = 167 * aDf % 32768
	}, this.hb = function(jH) {
		return eR(jH * this.random(), 32768)
	}, this.iE = function(eg) {
		return 0 !== eg && this.random() < this.value(eg)
	}
}

function cH() {
	this.mW = new aDg, this.aBs = new aDh, this.aBw = new aDi, this.cq = function(uK, qT, uM, uN) {
		var aDj;
		fL || ((aDj = {}).uL = eU, aDj.uK = uK, aDj.qT = qT, aDj.uM = uM, aDj.uN = uN, aDj.a4N = ap.pZ, aDj.a4O = ap.a4K, z.a4n(aDj), this.mW.cq(aDj))
	}, this.i5 = function() {
		fL || this.mW.i5()
	}, this.aBv = function() {
		var tb = this.mW.aDj;
		0 === rG && x.a3G(), ap.d2(tb.a4N, tb.a4O), 1 === tb.qT.length && (z.a4i(tb.uM), z.a4k(tb.a4l, tb.a4m)), aN.iv.close(aN.iv.sE, 3246), z.a4p(), uJ(tb.uK, tb.uL, tb.qT, tb.uM, tb.uN, !0)
	}, this.aBu = function(fw) {
		var eD = fw.indexOf("=");
		return 0 <= eD ? fw.substring(eD + 1) : fw
	}, this.aBt = function(fw) {
		return "https://territorial.io/?replay=" + fw
	}
}

function aDg() {
	this.aDk = null, this.aDl = null, this.aDm = null, this.aDn = null, this.aDo = null, this.aDp = null;
	var aDq = 0;
	this.aDj = null, this.aBr = "", this.cq = function(aDj) {
		this.aDk = [], this.aDl = [], this.aDm = [], this.aDn = [], this.aDo = [0], this.aDp = [0], aDq = 0, this.aDj = aDj, this.aBr = ""
	}, this.mX = function(id, dm, dp, dr) {
		fL || 2 === rG || (0 === this.aDo[aDq] && (this.aDp[aDq] ? (this.aDo.push(1), this.aDp.push(0), aDq++) : this.aDo[aDq] = 1), this.aDk.push(id), this.aDl.push(dm), this.aDm.push(void 0 === dp ? 0 : dp), this.aDn.push(void 0 === dr ? 0 :
			dr), this.aDp[aDq]++)
	}, this.i5 = function() {
		0 === this.aDo[aDq] ? this.aDp[aDq]++ : (this.aDo.push(0), this.aDp.push(0), aDq++)
	}
}

function aDi() {
	function aDw(fw, aDy = !1) {
		aDy ? k.vh = "Replay Error: " + fw : ar.oY(4, 3, new s2("⚠️ Replay Error", fw, !0))
	}
	this.ox = function(fw) {
		if (ad.oc.op(ad.oc.on(ad.oc.ol(fw))), k.vh = "", ! function() {
				if (ae.size < 10) aDw("File Too Small");
				else if (ae.mI(9) !== d8 && aDw("Incompatible Version Error", !0), ae.mI(31) !== ae.size) aDw("Size Error");
				else {
					if (function(g9) {
							var eD, eg = ae.mH,
								eZ = ae.size,
								a6K = 0;
							for (eD = 7; eD < eZ; eD++) a6K = a6K + eg[eD] & 65535;
							return a6K === g9
						}(ae.mI(16))) return 1;
					aDw("Hash Error")
				}
				return
			}()) return !1;
		var aDj;
		(aDj = {}).uL = ae.mI(9), aDj.uK = ae.mI(14), aDj.uM = ae.mI(4), aDj.uN = 1 === ae.mI(1), aDj.a4N = ae.mI(6), aDj.a4O = ae.mI(14), aDj.aDz = ae.mI(10), aX.mW.aDj = aDj,
			function() {
				var eD, a4u, a4t, name, eZ = aX.mW.aDj.aDz,
					qT = [];
				for (eD = 0; eD < eZ; eD++) a4u = ae.mI(1), a4t = [ae.mI(6), ae.mI(6), ae.mI(6)], name = ad.oe.oh(ae.mI(5)), qT.push({
					name: name,
					a4t: a4t,
					a4u: a4u
				});
				if (aX.mW.aDj.qT = qT, 8 === aX.mW.aDj.uM)
					for (eD = 0; eD < eZ; eD++) qT[eD].qX = ae.mI(14)
			}();
		var eD, eZ, aE0 = aX.mW.aDj;
		if (1 === aE0.qT.length)
			for (eZ = 6 < aE0.uM ? 1 : aE0.uM + 2, aE0.a4l = new Array(eZ), aE0.a4m = new Array(eZ), eD = 0; eD < eZ; eD++) aE0.a4l[eD] = ae.mI(3), aE0.a4m[eD] = ae.mI(9) + 1;
		return !! function() {
			var oy = ae.mI(5),
				aE1 = ae.mI(30),
				aE2 = ae.mI(30);
			if (aE1 + aE2 > 8 * ae.size) return void aDw("Corrupted File");
			return function(eZ) {
					var eD, id, aE5 = new Uint8Array(eZ),
						aE6 = new Uint16Array(eZ),
						aE7 = new Uint32Array(eZ),
						aE8 = new Uint32Array(eZ);
					for (aX.mW.aDk = aE5, aX.mW.aDl = aE6, aX.mW.aDm = aE7, aX.mW.aDn = aE8, eD = 0; eD < eZ; eD++) aE5[eD] = id = ae.mI(4), aE6[eD] = ae.mI(9), 0 === id ? aE7[eD] = ae.mI(22) : 1 === id ? (aE7[eD] = ae.mI(10), aE8[eD] = ae
						.mI(10)) : 2 === id ? (aE7[eD] = ae.mI(10), aE8[eD] = ae.mI(9)) : 3 === id || 4 === id ? (aE7[eD] = ae.mI(10), aE8[eD] = ae.mI(22)) : 5 === id ? aE7[eD] = ae.mI(10) : 6 === id ? aE7[eD] = ae.mI(7) : 7 === id && (
						aE7[eD] = ae.mI(1))
				}(aE1),
				function(eZ, oy) {
					var eD, aDo = new Uint8Array(eZ),
						aDp = new Array(eZ);
					for (aDp.fill(0), aX.mW.aDo = aDo, aX.mW.aDp = aDp, eD = 0; eD < eZ; eD++) aDo[eD] = ae.mI(1), aDp[eD] = ae.mI(oy)
				}(aE2, oy), 1
		}() && (ae.fx < 8 * ae.size - 13 || ae.fx > 8 * ae.size ? (aDw("Out Of Bounds Error: " + ae.fx + " " + 8 * ae.size), !1) : (aX.mW.aBr = fw, !0))
	}
}

function aDh() {
	this.qt = function() {
		var aE0, oy = function() {
				var eD, aDp = aX.mW.aDp,
					eZ = aDp.length,
					max = 0;
				for (eD = 0; eD < eZ; eD++) max = Math.max(max, aDp[eD]);
				return p4(Math.max(max, 1))
			}(),
			aEA = function(oy) {
				return 179 + function() {
					var eD, qT = aX.mW.aDj.qT,
						eZ = qT.length,
						aEA = 24 * eZ;
					for (eD = 0; eD < eZ; eD++) aEA += 16 * qT[eD].name.length;
					8 === aX.mW.aDj.uM && (aEA += 14 * eZ);
					return aEA
				}() + (1 === aX.mW.aDj.qT.length ? 12 * aX.mW.aDj.a4l.length : 0) + function() {
					var eD, aDk = aX.mW.aDk,
						eZ = aDk.length,
						aEA = 13 * eZ,
						aEM = [22, 20, 19, 32, 32, 10, 7, 1, 0, 0];
					for (eD = 0; eD < eZ; eD++) aEA += aEM[aDk[eD]];
					return aEA
				}() + function(oy) {
					return aX.mW.aDp.length * (1 + oy)
				}(oy)
			}(oy);
		ab.d2(aEA + (6 - aEA % 6) % 6), aE0 = aX.mW.aDj, ab.os(9, d8), ab.os(31, ab.size), ab.fx += 16, ab.os(9, aE0.uL), ab.os(14, aE0.uK), ab.os(4, aE0.uM), ab.os(1, aE0.uN), ab.os(6, aE0.a4N), ab.os(14, aE0.a4O), ab.os(10, aE0.qT.length);
		var eD, qT = aX.mW.aDj.qT,
			eZ = qT.length;
		for (eD = 0; eD < eZ; eD++) ab.os(1, qT[eD].a4u), ab.os(18, (qT[eD].a4t[0] << 12) + (qT[eD].a4t[1] << 6) + qT[eD].a4t[2]), ab.os(5, qT[eD].name.length), ac.oe.ot(qT[eD].name);
		if (8 === aX.mW.aDj.uM)
			for (eD = 0; eD < eZ; eD++) ab.os(14, qT[eD].qX);
		return function() {
				var eD, aE0 = aX.mW.aDj;
				if (1 === aE0.qT.length)
					for (eD = 0; eD < aE0.a4l.length; eD++) ab.os(3, aE0.a4l[eD]), ab.os(9, aE0.a4m[eD] - 1)
			}(),
			function(oy) {
				var eD, aDk = aX.mW.aDk,
					dm = aX.mW.aDl,
					dp = aX.mW.aDm,
					dr = aX.mW.aDn,
					eZ = aDk.length;
				for (ab.os(5, oy), ab.os(30, eZ), ab.os(30, aX.mW.aDp.length), eD = 0; eD < eZ; eD++) ab.os(4, aDk[eD]), ab.os(9, dm[eD]), 0 === aDk[eD] ? ab.os(22, dp[eD]) : 1 === aDk[eD] ? (ab.os(10, dp[eD]), ab.os(10, dr[eD])) : 2 === aDk[
					eD] ? (ab.os(10, dp[eD]), ab.os(9, dr[eD])) : 3 === aDk[eD] || 4 === aDk[eD] ? (ab.os(10, dp[eD]), ab.os(22, dr[eD])) : 5 === aDk[eD] ? ab.os(10, dp[eD]) : 6 === aDk[eD] ? ab.os(7, dp[eD]) : 7 === aDk[eD] && ab.os(1, dp[eD])
			}(oy),
			function(oy) {
				var eD, aDo = aX.mW.aDo,
					aDp = aX.mW.aDp,
					eZ = aDo.length;
				for (eD = 0; eD < eZ; eD++) ab.os(1, aDo[eD]), ab.os(oy, aDp[eD])
			}(oy), ab.fx !== aEA && k.sF("Encoder Index Error: " + ab.fx + " " + aEA), ab.fx = 40, ab.os(16, function() {
				var eD, eg = ab.mH,
					eZ = ab.size,
					a6K = 0;
				for (eD = 7; eD < eZ; eD++) a6K = a6K + eg[eD] & 65535;
				return a6K
			}()), ae.cq(ab.mH), ac.oc.qi(ac.oc.qg(eR(aEA - 1, 6) + 1))
	}
}

function c4() {
	var iK, wY = !1,
		aEN = !1,
		aEO = -1e4;

	function resize(ge) {
		iK = 0, a1.g1() && (aEQ(ge) || wY) && (wY = !1, b0.resize(), aw.cq(), v.cq(), y.resize(), au.cq(), w.resize(), q.resize(), l.resize(), b6.resize(), az.cq(), ar.resize(), 1 <= rG ? (s.resize(!1), r.resize(), t.resize(), p.resize(), o.resize(),
			k.resize(), j.resize(), aa.resize(), aI.resize(), m.resize(), n.resize(), i.resize(), b2.resize(), a6.resize(), u.resize(), b5.resize(), p.z1()) : (2 === x.rp() && z.resize(), x.a3J(), x.a3M()), b3.d1 = !0)
	}

	function aEP(db) {
		return db && 128 < db ? Math.floor(db) : 128
	}

	function aEQ(ge) {
		var g3, g9, aES, qP = aEP(document.documentElement.clientWidth),
			xB = aEP(window.visualViewport && 2 !== b7.id ? window.visualViewport.height : document.documentElement.clientHeight);
		return g3 = qP, g9 = xB, aES = 0 !== b7.id || g3 < g9 ? 700 : 1200, aES = Math.min(aES / ((g3 + g9) / 2), 1), aES = 0 === b9.dG.data[1].value ? 2 * aES / 3 : Math.min(aES + (b9.dG.data[1].value - 1) * (1 - aES) / 2, 1), aK.nE = (window
			.devicePixelRatio || 1) * aES, ge && !aEN ? (aEN = !0, document.body.removeChild(sW)) : aEN && (aEN = !1, document.body.appendChild(sW)), g3 = Math.floor(.5 + qP * aK.nE), g9 = Math.floor(.5 + xB * aK.nE), !(g3 === aK.g3 && g9 === aK
			.g9 || ag.tF() && y.t4) && (aK.g3 = g3, aK.g9 = g9, aK.min = yG(g3, g9), aK.max = vy(g3, g9), aK.fu = eR(g3 + g9, 2), aK.o3 = g3 / g9, sW.width = g3, sW.height = g9, sW.style.width = qP + "px", sW.style.height = xB + "px", 1)
	}
	this.g3 = 0, this.g9 = 0, this.min = 0, this.max = 0, this.fu = 0, this.o3 = 1, this.nE = 1, this.cr = function() {
		this.g3 = aEP(document.documentElement.clientWidth) + 2, this.g9 = aEP(document.documentElement.clientHeight) + 2
	}, this.cq = function() {
		iK = 1, sW = document.getElementById("canvasA"), (gD = sW.getContext("2d", {
			alpha: makeMainMenuTransparent
		})).imageSmoothingEnabled = !1, aEQ(0)
	}, this.i5 = function() {
		aP.i5(), 50 <= ++iK && resize(0)
	}, this.oZ = function(ge) {
		wY = !0, resize(ge)
	}, this.tG = function() {
		aEO + 1e3 > b3.dY || (aEO = b3.dY, resize(0))
	}
}

function c0() {
	var player, hS, pN, pH, ja, jb, jc, jd, fx, aEU, id;

	function aEa() {
		var hR;
		if (a2.el(pN)) hR = ed;
		else {
			if ((hR = a2.ek(pN)) === player) return void aEc(!0);
			if (!fp(player, hR)) return function(hR) {
				var max = ez[hR] * tm - eV[hR];
				max <= 0 || (hS -= max = max < hS ? max : hS, player === eU && (k.ly(max, 0, hR), b1.eX[16] += max), hR === eU && (k.wR(max, player), b1.eX[10] += max), eV[hR] += max, a6.lz(hR, max))
			}(hR), void aEc(!0)
		}
		player === eU && (b1.eX[13] += hS), e.eT(player, id), a4.eY(player, aEU), ea[player].push(pH), a4.hO(player, hS, hR), c.hP(player, !0)
	}

	function aEc(aEf) {
		e.eT(player, id), a4.eY(player, aEU), aEf && (eV[player] += hS)
	}

	function aEW() {
		a2.a60(pN, player) && a2.a62(pN)
	}

	function aEV(eD, a7S, xt, ha, kK) {
		if (fx = eD, id = a7S, player = xt, ja = a2.je(ha), jb = a2.gB(ha), jc = a2.je(kK), jd = a2.gB(kK), pH = pN = a2.ps(ja, jb), -1 !== (aEU = a4.jh(player, id))) return hS = a4.eL(player, aEU), 1;
		aEW(), e.eT(player, id)
	}
	this.i5 = function(eD, id, xt, ha, kK) {
		aEV(eD, id, xt, ha, kK) && (aEW(), function() {
			var aEg = eR(hS, 128);
			hS -= aEg = aEg < 1 ? 1 : aEg, player === eU && (b1.eX[15] += aEg);
			if (hS <= eS) return player === eU && (b1.eX[15] += hS), void aEc(!1);
			return a4.ey(player, aEU, hS), 1
		}()) && (eD = a2.ps(ja, jb), pN = Math.abs(jc - ja) >= Math.abs(jd - jb) ? eD + e4[ja < jc ? 1 : 3] : eD + e4[jb < jd ? 2 : 0], ja = a2.je(pN), jb = a2.gB(pN), e.jQ(fx, pN), ! function() {
			if (a2.eb(pN)) return;
			return 1
		}() ? aEa() : a2.fh(pN) && a2.a65(pN, player))
	}, this.jT = function(xt, ha) {
		player = xt, pN = a2.ps(a2.je(ha), a2.gB(ha)), aEW()
	}
}

function ca() {
	this.a45 = new aEh
}

function aEh() {
	var yY = 0,
		a4H = 0,
		dY = 0,
		eX = [1, 0, 0, 1, 0, 0];

	function aEi(hh) {
		var eD, aEj = eX[0],
			aBd = eX[1],
			aBe = eX[2],
			hY = eX[3];
		if ((hh = Math.min(hh, eX[4])) < hY) yY = a4H = 0;
		else {
			for (yY = performance.now(), eD = hY; eD <= hh; eD++) aBd = aEl(aBd, aEj = function(aEj, aBd, aBe, fX) {
				var eD, eZ = 65536 + (aEj * fX & 16383);
				for (eD = 0; eD < eZ; eD++) aEj = 1 + aEj * aBd % aBe;
				return aEj
			}(aEj, aBd, aBe, eD), 16384, 65536), aBe = aEl(aBe, aEj, 1 << 18, 1 << 20);
			eX[0] = aEj, eX[1] = aBd, eX[2] = aBe, eX[3] = eD, a4H = performance.now(), eX[5] += a4H - yY
		}
	}

	function aEl(db, a9K, min, max) {
		return min + (db * a9K + 137) % (max - min)
	}
	this.ig = !1, this.cq = function(aBd, aBe, aBf) {
		eX[0] = 1, eX[1] = aBd, eX[2] = aBe, eX[3] = 0, eX[4] = aBf, eX[5] = 0, this.ig = !0
	}, this.a46 = function() {
		this.ig = !1, eX[3] = eX[4] + 1
	}, this.aBg = function() {
		return aEi(eX[4]), this.ig = !1, [eX[0] - 1 & 65535, Math.min(Math.floor(Math.sqrt(eX[5])), 1023)]
	}, this.i5 = function() {
		7 !== x.rp() || eX[4] < eX[3] || b3.dY < dY || (aEi(eX[3] + Math.floor(eX[4] / 20)), dY = a4H + 250)
	}
}

function c1() {
	var aEm, aEn, fh, aEo;
	this.cq = function() {
		var eD, fI, fJ, a4t, aEp, g3, g9, qK, gJ, pF, db, eg, hx, hY, aEs;
		if (function() {
				if (fh = !0, aEo = "rgb(" + ap.pC[0] + "," + ap.pC[1] + "," + ap.pC[2] + ")", ap.a9S(ap.pZ)) return 1;
				return fh = !1, 0
			}()) aEn = null;
		else {
			for (aEm = eR(96, 4), aEp = 1 === ap.pZ ? (a4t = 0, 160) : (a4t = 128, 32), aEo = "rgb(" + a4t + "," + a4t + "," + a4t + ")", aEn = new Array(4), eD = 3; 0 <= eD; eD--) {
				if (aEn[eD] = document.createElement("canvas"), g3 = eD % 2 == 0 ? ap.e8 : aEm, g9 = eD % 2 == 0 ? aEm : ap.e9 + 2 * aEm, aEn[eD].width = g3, aEn[eD].height = g9, pF = (gJ = (qK = aEn[eD].getContext("2d", {
						alpha: !1
					})).getImageData(0, 0, g3, g9)).data, eD % 2 == 0)
					for (fJ = aEm - 1; 0 <= fJ; fJ--)
						for (db = aEp + Math.floor((fJ + 1) * (a4t - aEp) / (aEm + 1)), fI = g3 - 1; 0 <= fI; fI--) pF[eg = 4 * ((0 === eD ? aEm - fJ - 1 : fJ) * g3 + fI)] = db, pF[eg + 1] = db, pF[eg + 2] = db, pF[eg + 3] = 255;
				else {
					for (fI = aEm - 1; 0 <= fI; fI--)
						for (db = aEp + Math.floor((fI + 1) * (a4t - aEp) / (aEm + 1)), fJ = g9 - 1 - aEm; aEm <= fJ; fJ--) pF[eg = 4 * (fJ * g3 + (3 === eD ? aEm - fI - 1 : fI))] = db, pF[eg + 1] = db, pF[eg + 2] = db, pF[eg + 3] = 255;
					for (hY = 1; 0 <= hY; hY--)
						for (fI = aEm - 1; 0 <= fI; fI--)
							for (fJ = aEm - 1; 0 <= fJ; fJ--) hx = (Math.pow(fI * fI + fJ * fJ, .5) + 1) / (aEm + 1), db = aEp + Math.floor((1 < hx ? 1 : hx) * (a4t - aEp)), pF[eg = 4 * ((0 === hY ? aEm - fJ - 1 : fJ + hY * (g9 - aEm)) * g3 + (
								1 === eD ? fI : aEm - fI - 1))] = db, pF[eg + 1] = db, pF[eg + 2] = db, pF[eg + 3] = 255
				}
				qK.putImageData(gJ, 0, 0)
			}
			aEs = aEp, ap.p7.fillStyle = "rgb(" + aEs + "," + aEs + "," + aEs + ")", ap.p7.fillRect(0, 0, ap.e8, 1), ap.p7.fillRect(0, ap.e9 - 1, ap.e8, 1), ap.p7.fillRect(0, 0, 1, ap.e9), ap.p7.fillRect(ap.e8 - 1, 0, 1, ap.e9)
		}
	}, this.qG = function() {
		var hY = fh ? 0 : -aEm;
		aB1(hY, hY, ap.e8 - 2 * hY, ap.e9 - 2 * hY, ax.aEt, ax.aEu, ax.aEv, ax.aEw) || (gD.fillStyle = aEo, gD.fillRect(0, 0, aK.g3, aK.g9))
	}, this.gC = function() {
		fh || (aB0(0, -aEm, ap.e8, aEm, ax.aEt, ax.aEu, ax.aEv, ax.aEw) && gD.drawImage(aEn[0], ax.aEx, ax.aEy - aEm), aB0(ap.e8, -aEm, aEm, ap.e9 + 2 * aEm, ax.aEt, ax.aEu, ax.aEv, ax.aEw) && gD.drawImage(aEn[1], ax.aEx + ap.e8, ax.aEy - aEm),
			aB0(0, ap.e9, ap.e8, aEm, ax.aEt, ax.aEu, ax.aEv, ax.aEw) && gD.drawImage(aEn[2], ax.aEx, ax.aEy + ap.e9), aB0(-aEm, -aEm, aEm, ap.e9 + 2 * aEm, ax.aEt, ax.aEu, ax.aEv, ax.aEw) && gD.drawImage(aEn[3], ax.aEx - aEm, ax.aEy - aEm))
	}
}

function cO() {
	this.fd = new aEz, this.a6X = new aF0, this.qH = new aF1, this.iv = new aF2, this.hD = new aF3, this.aEs = new aF4, this.aF5 = new aF6, this.i4 = new aF7, this.mh = new aF8, this.cq = function() {
		this.qH.cq(), this.iv.cq(), this.hD.cq(), this.aEs.cq()
	}
}

function aF7() {
	function aFE(player, ha, aFG, aFH) {
		for (var ja, jb, g3, g9, gP, aFI, jc, jd, eZ = ha + aFH, eD = ha; eD < eZ; eD += aFG)
			if (ja = (ja = ht[player] - eD) < 1 ? 1 : ja, jb = hw[player] - eD, jc = (jc = hs[player] + eD) >= ap.e8 - 1 ? ap.e8 - 2 : jc, g9 = (jd = (jd = hv[player] + eD) >= ap.e9 - 1 ? ap.e9 - 2 : jd) - (jb = jb < 1 ? 1 : jb), jc = (gP = eR(aL
					.random() * (2 * (jc - ja + jd - jb)), aL.value(100))) <= (g3 = jc - ja) ? (aFI = ja + gP, jb) : gP <= g3 + g9 ? (aFI = jc, jb + gP - g3) : gP <= 2 * g3 + g9 ? (aFI = ja + gP - g3 - g9, jd) : (aFI = ja, jb + gP - 2 * g3 - g9),
				aFF(player, jd = a2.ps(aFI, jc))) return jd;
		return -1
	}

	function aFF(ti, eh) {
		return a2.eb(eh) && (a2.el(eh) || ti !== (eh = a2.ek(eh)) && fp(ti, eh) && 0 < es[eh].length)
	}
	this.i5 = function(player) {
		return !(0 === es[player].length || eV[player] < 100) && ak.iv.mU !== ak.iv.mf && (ak.iv.mT[player] !== ak.iv.mg && aY.fN.ma(player, 203, 32, 16) ? !! function(player) {
			var eh = function(player) {
				var eD, pw, pv, ja = ht[player],
					jb = hw[player],
					gs = hs[player] - ja + 1,
					gv = hv[player] - jb + 1,
					db = aL.value(100);
				for (eD = 0; eD < 32; eD++)
					if (pw = ja + ai.fE(aL.random() * gs, db), pv = jb + ai.fE(aL.random() * gv, db), pw = a2.ps(pw, pv), aFF(player, pw)) return pw;
				return -1
			}(player);
			if (0 <= eh) return ak.mh.mi(player, eh >> 2);
			if (0 <= (eh = aFE(player, 1, 4, 40))) return ak.mh.mi(player, eh >> 2);
			if (0 <= (eh = aFE(player, 40, 8, 200))) return ak.mh.mi(player, eh >> 2);
			return
		}(player) && !! function(ti) {
			if (0 === al.di[2]) return void console.log("error 325234");
			var aFC = al.di[1] + aj.gQ[al.di[2] - 1] << 2;
			if (a2.el(aFC)) return 1;
			return aFC = a2.ek(aFC), ti !== aFC && !!fp(ti, aFC)
		}(player) && function(player) {
			return aY.fN.mc(player), ak.iv.mj(player), !0
		}(player) : void 0)
	}
}

function aEz() {
	function aFL(aFK) {
		var aFV = 4 + .03 * (1 + 1.5 * b7.cv.ft()) * aK.fu / h6;
		return aj.gy(aFK, al.di[1]) < aFV
	}
	this.fi = function(player, aFK) {
		return !!aj.h8(aFK) && ak.iv.mU !== ak.iv.mf && ak.iv.mT[player] !== ak.iv.mg && 0 !== es[player].length && !!ak.mh.mi(player, aFK) && !!aFL(aFK)
	}, this.lh = function(player, lg, aFK) {
		return !!(aj.h8(aFK) && this.mk(player, lg) && ak.mh.ml(aFK) && aFL(aFK))
	}, this.mk = function(player, id) {
		for (var aFM, tS = player << 3, tT = tS + ak.iv.mT[player], aFN = ak.iv.aFN, aFO = ak.iv.aFO, eD = tS; eD < tT; eD++)
			if (id === aFO[aFM = aFN[eD]]) return al.di[3] = aFM, !0;
		return !1
	}, this.fe = function(fV) {
		var aFP = ak.aEs.aFP;
		return ak.aEs.aFP = -1, !!this.mk(eU, aFP) && (aW.fb.fe(aFP, fV), !0)
	}, this.ff = function(g7, g8) {
		var eD, tT, aFQ, aFN, aFR, aFS, aFT, hx, wC, aFU, player = eU,
			eZ = ak.iv.mT[player];
		if (0 === eZ) return !1;
		for (aFN = ak.iv.aFN, aFS = ak.iv.aFS, wC = ak.iv.wC, tT = (player = player << 3) + eZ, aFR = .4 * aY.fy.nA(.5) * aK.fu / h6, aFQ = -1, eD = player; eD < tT; eD++) aFU = aFN[eD], aFT = 16 * (.625 + .125 * Math.sqrt(Math.sqrt(wC[aFU]))), (
			hx = aj.go(g7, g8, aFS[aFU])) - aFT < aFR && (aFR = hx, aFQ = aFU);
		return !(aFQ < 0 || (ak.aEs.aFP = ak.iv.aFO[aFQ], 0))
	}, this.vD = function(g7, g8) {
		var eD, aFQ, aFR, aFS, aFT, hx, wC, eZ = ak.iv.mU;
		if (eZ < 1) return -1;
		for (aFS = ak.iv.aFS, wC = ak.iv.wC, aFR = 1e3, aFQ = -1, eD = 0; eD < eZ; eD++) aFT = 16 * aY.fy.nA(.5) * (.625 + .125 * Math.sqrt(Math.sqrt(wC[eD]))), (hx = aj.go(g7, g8, aFS[eD])) < aFR && hx < aFT && (aFR = hx, aFQ = eD);
		return aFQ
	}
}

function aF0() {
	this.a6Y = function(player) {
		for (var aFN = ak.iv.aFN, tS = player << 3, eD = tS + ak.iv.mT[player] - 1; tS <= eD; eD--) this.aFW(aFN[eD])
	}, this.aFW = function(aFX) {
		var iv = ak.iv,
			aFY = iv.mU - 1,
			aFZ = iv.wB[aFX],
			aFa = iv.aFb[aFX],
			aFc = iv.aFS[aFX];
		iv.mU = aFY, iv.wB[aFX] = iv.wB[aFY], iv.aFd[aFX] = iv.aFd[aFY], iv.aFe[aFX] = iv.aFe[aFY], iv.aFS[aFX] = iv.aFS[aFY], iv.aFf[aFX] = iv.aFf[aFY], iv.wC[aFX] = iv.wC[aFY], iv.aFb[aFX] = iv.aFb[aFY], iv.aFO[aFX] = iv.aFO[aFY], iv.aFg[aFX] =
			iv.aFg[aFY], iv.aFN[iv.wB[aFX]] = aFX,
			function(a4F) {
				var player = a4F >> 3,
					iv = ak.iv,
					eZ = iv.mT[player] - 1,
					aFj = (player << 3) + eZ;
				iv.mT[player] = eZ, aFj !== a4F && (iv.aFN[a4F] = iv.aFN[aFj], iv.wB[iv.aFN[a4F]] = a4F)
			}(aFZ), ak.hD.hD[aj.hC(iv.aFS[aFX])][iv.aFb[aFX]] = aFX, aFY = aj.hC(aFc), aFZ = aFa, aFY = ak.hD.hD[aFY], iv = aFY.pop(), aFZ !== aFY.length && (aFY[aFZ] = iv, ak.iv.aFb[iv] = aFZ)
	}
}

function aF1() {
	var aFl, aFm = 8,
		aFn = new Array(2);

	function aFo(fx) {
		var gG = aFm + 4,
			uq = aY.fy.p3(gG, gG),
			gN = aY.fy.getContext(uq, !0),
			gJ = aY.fy.getImageData(gN, gG, gG),
			pF = gJ.data;
		return aFp(pF, gG + 1, fx), aFp(pF, gG + 2, fx), aFp(pF, 2 * gG + 1, fx), aFp(pF, 2 * gG - 3, fx), aFp(pF, 2 * gG - 2, fx), aFp(pF, 3 * gG - 2, fx), aFp(pF, gG * (gG - 3) + 1, fx), aFp(pF, gG * (gG - 2) + 1, fx), aFp(pF, gG * (gG - 2) + 2,
			fx), aFp(pF, gG * (gG - 2) - 2, fx), aFp(pF, gG * (gG - 1) - 3, fx), aFp(pF, gG * (gG - 1) - 2, fx), gN.putImageData(gJ, 0, 0), uq
	}

	function aFp(pF, fV, fx) {
		fV *= 4;
		pF[fV] = 255, pF[1 + fV] = 255, pF[2 + fV] = fx, pF[3 + fV] = 255
	}

	function p3(player) {
		var uq = aY.fy.p3(aFm, aFm);
		return function(gN, player) {
			var fI, fJ, gs, fV, aFr, a4G, gG = aFm,
				gJ = aY.fy.getImageData(gN, gG, gG),
				pF = gJ.data,
				oz = (gG >> 1) - .5,
				aEo = a2.xL(player),
				aFt = aY.pD.tM(aEo, .5);
			aY.pD.tN(aEo, aFt, 300) || aY.pD.tP(aEo, 100);
			for (fJ = 0; fJ < gG; fJ++)
				for (fI = 0; fI < gG; fI++) a4G = (gG - 1.5) * (gG - 1.5) / 4, aFr = (gs = (gs = fI - oz) * gs + (gs = fJ - oz) * gs) <= (gG - 4.5) * (gG - 4.5) / 4 ? aFt : aEo, pF[fV = 4 * (fJ * gG + fI)] = aFr[0], pF[1 + fV] = aFr[1], pF[2 +
					fV] = aFr[2], pF[3 + fV] = a4G < gs ? 0 : 255;
			gN.putImageData(gJ, 0, 0)
		}(aY.fy.getContext(uq, !0), player), uq
	}
	this.cq = function() {
		aFl = new Array(ed), aFn[0] = aFo(255), aFn[1] = aFo(0)
	}, this.gC = function() {
		var eD, player, aFu, hS, aFv, gr, aFy, aG0, aG1, aFS = ak.iv.aFS,
			wB = ak.iv.wB,
			wC = ak.iv.wC,
			aG2 = aFl,
			aG3 = eU,
			aG4 = -1,
			eZ = ak.iv.mU,
			aG5 = aK.g3,
			aG6 = aK.g9,
			aG7 = ap.e8 << 4,
			u5 = h6,
			fX = u5 / aFm,
			ja = h5 / u5,
			jb = h7 / u5,
			gs = (aG5 + h5) / u5 - ja,
			gv = (aG6 + h7) / u5 - jb,
			gN = gD;
		for (ak.fd.mk(eU, ak.aEs.aFP) && (aG4 = al.di[3]), gN.fillStyle = aZ.gE, aY.fy.textAlign(gN, 1), eD = 0; eD < eZ; eD++) player = wB[eD] >> 3, hS = wC[eD], aFu = .625 + .125 * Math.sqrt(Math.sqrt(hS)), aFv = (gr = aFS[eD]) % aG7 / 16 -
			aFu, gr = aG6 * (Math.floor(gr / aG7) / 16 - aFu - jb) / gv, aFy = -2 * (aG1 = u5 * aFu) * (1 + (aG0 = +(player === aG3)) / 8), aG0 = aG0 * aG1 / 4, (aG1 = aG5 * (aFv - ja) / gs) < aFy || gr < aFy || aG5 + aG0 < aG1 || aG6 + aG0 <
			gr || (aFv = aFu * u5, gN.imageSmoothingEnabled = (aFy = 2 * aFu * fX) < 3, void 0 === (aG0 = aG2[player]) && (aG2[player] = aG0 = p3(player)), player === aG3 && (gN.setTransform(aFy, 0, 0, aFy, aG1 - 2 * aFy, gr - 2 * aFy), gN
				.drawImage(aFn[+(eD === aG4)], 0, 0)), gN.setTransform(aFy, 0, 0, aFy, aG1, gr), gN.drawImage(aG0, 0, 0), (aFu = Math.floor(function(hS) {
				if (hS < 1e3) return .42;
				if (hS < 1e4) return .34;
				if (hS < 1e6) return .26;
				if (hS < 1e8) return .19;
				return .15
			}(hS) * aFv)) < 6) || (gN.setTransform(1, 0, 0, 1, 0, 0), 20 <= aFu ? (gN.font = aY.fy.fz(1, .85 * aFu), gN.fillText(aY.ji.jj(hS), aG1 + aFv, gr + .93 * aFv + .085 * aFu), (aFu *= a6.a8O(player)) < 6 || (gN.font = aY.fy.fz(1, aFu), gN
				.fillText(jk[player], aG1 + aFv, gr + 1.16 * aFv + .1 * aFu))) : (gN.font = aY.fy.fz(1, aFu), gN.fillText(aY.ji.jj(hS), aG1 + aFv, gr + aFv + .1 * aFu)));
		gN.imageSmoothingEnabled = !1, gN.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function aF6() {
	this.i5 = function() {
		for (var aG9, aF5, aFg = ak.iv.aFg, aFS = ak.iv.aFS, aFe = ak.iv.aFe, eD = ak.iv.mU - 1; 0 <= eD; eD--) aG9 = aFS[eD], 0 !== (aF5 = aFg[eD]) && aG9 === aFe[eD] && (! function(eD, aGB, gd) {
			var hR, player = ak.iv.wB[eD] >> 3,
				gd = aGB + aj.gQ[gd] << 2,
				eD = ak.iv.wC[eD];
			if (a2.el(gd)) hR = ed;
			else {
				if ((hR = a2.ek(gd)) === player) return aY.fN.lx(player, eD);
				if (!fp(player, hR)) return aW.iO.lv(player, hR, eD)
			}
			player === eU && (b1.eX[13] += eD);
			ea[player].push(aGB << 2), a4.hO(player, eD, hR), c.hP(player, !0)
		}(eD, aj.hB(aG9), aF5 - 1), ak.a6X.aFW(eD))
	}
}

function aF2() {
	this.aGC = null, this.mf = 512, this.mg = 8, this.mU = 0, this.jL = 0, this.wB = new Uint16Array(this.mf), this.aFd = new Uint32Array(this.mf), this.aFe = new Uint32Array(this.mf), this.aFS = new Uint32Array(this.mf), this.aFf = new Uint16Array(
			this.mf), this.wC = new Uint32Array(this.mf), this.aFb = new Uint16Array(this.mf), this.aFO = new Uint16Array(this.mf), this.aFg = new Uint8Array(this.mf), this.mT = new Uint8Array(ed), this.aFN = new Uint16Array(this.mg * ed), this.cq =
		function() {
			this.jL = 0, this.mU = 0, this.aGC = new Uint8Array(ap.e8 + ap.e9), this.mT.fill(0)
		}, this.mj = function(player) {
			var eZ = this.mU,
				aGD = aj.hA(al.di[0]),
				aGE = this.mT[player],
				aGF = (player << 3) + aGE;
			h1[player] = 2, this.wB[eZ] = aGF, this.aFd[eZ] = aGD, this.aFS[eZ] = aGD, this.aFe[eZ] = aj.hA(al.di[1]), this.aFf[eZ] = 0, this.wC[eZ] = al.df[0], this.aFb[eZ] = ak.hD.mj(eZ, aj.hC(aGD)), this.aFO[eZ] = this.jL, this.aFg[eZ] = al.di[2],
				this.jL = this.jL + 1 & 1023, this.aFN[aGF] = eZ, this.mT[player] = aGE + 1, this.mU++
		}, this.fe = function() {
			var aFM = al.di[3];
			this.aFd[aFM] = this.aFS[aFM], this.aFe[aFM] = aj.hA(al.di[1]), this.aFf[aFM] = 0, this.aFg[aFM] = al.di[2]
		}, this.i5 = function() {
			if (b3.iJ() % 5 == 3) {
				ak.aF5.i5(), ! function(vJ) {
					var eD, aGJ, aGK, aGL, aGM, aGD, aGQ, aGR, ei, eh, aFd = vJ.aFd,
						aFe = vJ.aFe,
						aFS = vJ.aFS,
						wC = vJ.wC,
						aFf = vJ.aFf,
						aFb = vJ.aFb,
						vJ = vJ.mU,
						aG7 = ap.e8 << 4;
					for (eD = vJ - 1; 0 <= eD; eD--) aGK = aFS[eD], aGJ = aFe[eD], aGK !== aGJ && (aGD = aFd[eD], aGQ = aGJ % aG7 - (aGM = aGD % aG7), aGR = ~~((aGJ + .5) / aG7) - (aGD = ~~((aGD + .5) / aG7)), ei = ~~Math.sqrt(aGQ * aGQ + aGR *
						aGR + .5), eh = 4e5 + 2e4 * ~~Math.sqrt(.5 + (Math.sqrt(wC[eD] + .5) << 4)), 65535 <= (eh = aFf[eD] + Math.max(~~((.5 + eh) / ei), 1)) ? aFS[eD] = aGL = aGJ : (aFf[eD] = eh, aFS[eD] = aGL = aGM + ai.fE(eh * aGQ,
						65536) + aG7 * (aGD + ai.fE(eh * aGR, 65536))), aFb[eD] = ak.hD.aGT(aFb[eD], aGK, aGL))
				}(this), ! function(vJ) {
					var eD, pS, oz, hh, iK, aGU, aGV, aGW, pN, gV, ja, jb, aGX, aFR, aGY, pO, aGD, aGb, eZ = vJ.mU,
						aFS = vJ.aFS,
						wB = vJ.wB,
						wC = vJ.wC,
						hD = ak.hD.hD,
						aGc = hD.length,
						aGd = ak.hD.aGd,
						aG7 = ap.e8 << 4,
						aGe = hL,
						aGf = b4.iL,
						eh = (eZ - 1) * (b3.iJ() % 2);
					for (eD = 0; eD < eZ; eD++) {
						for (pS = Math.abs(eD - eh), aGD = aFS[pS], oz = aj.hC(aGD), pN = wB[pS] >> 3, ja = aGD % aG7, jb = ~~((aGD + .5) / aG7), aGD = wC[pS], aGb = 80 + ~~Math.sqrt(.5 + (Math.sqrt(aGD + .5) << 8)), aFR = Math.min(aGb * aGb,
								262144), aGY = -1, hh = 0; hh < 9; hh++)
							if (!((aGU = oz + aGd[hh]) < 0 || aGc <= aGU))
								for (aGW = hD[aGU], aGV = aGW.length, iK = 0; iK < aGV; iK++) aGX = aGW[iK], pO = wB[aGX] >> 3, pN == pO || aGe && aGf[pN] === aGf[pO] || (pO = aFS[aGX], (pO = (gV = ja - pO % aG7) * gV + (gV = jb - ~~((pO + .5) /
									aG7)) * gV) < aFR && (aGY = aGX, aFR = pO)); - 1 !== aGY && (aGD = Math.min(Math.max(1, ai.fE(aGD * (aGb - Math.floor(Math.sqrt(aFR + .5))), 5 * aGb)), wC[aGY]), wC[pS] -= aGD >> 4, wC[aGY] -= aGD)
					}
				}(this);
				var eD, hS, wC = (vJ = this).wC,
					vJ = vJ.mU;
				for (eD = vJ - 1; 0 <= eD; eD--) hS = wC[eD], 0 < (hS -= Math.max(1, hS >> 7)) ? wC[eD] = hS : ak.a6X.aFW(eD)
			}
		}
}

function aF3() {
	this.aGg = 32, this.fI = 0, this.fJ = 0, this.hE = 0, this.aGh = 0, this.aGi = 4, this.hD = null, this.aGd = new Int16Array(9), this.cq = function() {
		this.hE = 1 + ai.fE(ap.e8 - 1, this.aGg), this.aGh = 1 + ai.fE(ap.e9 - 1, this.aGg), this.hD = new Array(this.hE * this.aGh), aY.pD.tL(this.hD);
		var fI, fJ, aGd = this.aGd,
			g3 = this.hE;
		for (fI = -1; fI <= 1; fI++)
			for (fJ = -1; fJ <= 1; fJ++) aGd[3 * (1 + fJ) + 1 + fI] = fJ * g3 + fI
	}, this.mj = function(aGk, eD) {
		return this.hD[eD].push(aGk), this.hD[eD].length - 1
	}, this.aGT = function(aGl, aGD, aGJ) {
		var aGm, aGn, aGD = aj.hC(aGD),
			aGJ = aj.hC(aGJ);
		return aGD === aGJ ? aGl : (aGm = this.hD[aGD].pop(), this.hD[aGD].length === aGl ? this.mj(aGm, aGJ) : (aGn = this.hD[aGD][aGl], this.hD[aGD][aGl] = aGm, ak.iv.aFb[aGm] = aGl, this.mj(aGn, aGJ)))
	}
}

function aF8() {
	function sB(aGJ, aGo) {
		if (function(aGJ, aFK) {
				var gU = aj.hB(aGJ),
					aGr = Math.abs(aj.gW(aFK) - aj.gW(gU)),
					gU = Math.abs(aj.gY(aFK) - aj.gY(gU));
				return 0 !== Math.max(aGr, gU) && (function(aGD, aGJ, aGr, aGs) {
					var aGu = aj.gu(aGD),
						aGD = aj.gx(aGD),
						aGw = aj.gu(aGJ),
						aGJ = aj.gx(aGJ),
						aGw = aGw - aGu,
						aGJ = aGJ - aGD,
						aH0 = Math.abs(aGw),
						aH1 = Math.abs(aGJ),
						aGw = 0 < aGw ? 1 : 3,
						aGJ = 0 < aGJ ? 2 : 0;
					aH1 < aH0 ? aH4(aGu, aGD, aGu + aH0, aGD + aH1, aGw, aGJ, aGr) : aH4(aGD, aGu, aGD + aH1, aGu + aH0, aGJ, aGw, aGs)
				}(aGJ, aj.hA(aFK), aGr, gU), !0)
			}(aGJ, aGo)) {
			if (0 === al.de[0]) return !!a2.fh(aGo << 2);
			if (function(aFK) {
					if (a2.fh(aFK << 2)) return 1;
					return function(aFK) {
						var eD, gd, aGC = ak.iv.aGC,
							aH8 = aj,
							eZ = al.de[0],
							aH9 = 4 * aFK;
						for (eD = eZ - 1; 0 <= eD; eD--)
							if (gd = aGC[eD], aH9 = aH8.hG(aH9, gd + 2 & 3), a2.fh(aH9)) return al.de[0] = eD, al.di[1] = aH9 >> 2, al.di[2] = 1 + gd, 1;
						return
					}(aFK)
				}(aGo)) {
				var eD, aGo = aj.hB(aGJ),
					pF = a1V,
					aGC = ak.iv.aGC,
					eZ = al.de[0] - 1,
					aH9 = 4 * aGo,
					gR = aj.gR;
				for (eD = 0; eD < eZ; eD++)
					if (aH9 += gR[aGC[eD]], 0 !== pF[aH9 + 3] || 2 !== pF[aH9 + 2]) return !!void 0;
				return !!1
			}
		}
		return !1
	}

	function aH4(aGu, aGv, aGw, aGx, aH2, aH3, aGr) {
		for (var fJ, aGC = ak.iv.aGC, eh = 0, aH5 = 0, g9 = aGx - aGv, g3 = aGw - aGu, aH6 = aGu % 16, eD = 1; eD <= aGr; eD++) aGC[eh++] = aH2, aGC[eh] = aH3, eh += (fJ = (g9 * (aH6 + (eD << 4)) + .5) / g3 >> 4) - aH5, aH5 = fJ;
		al.dk(al.de, eh)
	}
	this.mi = function(player, aGo) {
		var gd, gU, gT = aj.gf(player, aGo);
		return gT !== aGo && (gd = aj.gS(gT, aGo), gU = aj.hF(gT, gd), !(!a2.fh(gU << 2) && (gd = aj.gc(gT, aGo, gd), gU = aj.hF(gT, gd), a2.pP(gU << 2) || !a2.fh(gU << 2)) || (al.di[0] = gU, al.di[1] = aGo, al.di[2] = 0, !sB(aj.hA(gU), aGo)) ||
			0 !== al.di[2] && aj.gn(player, al.di[1] + aj.gQ[al.di[2] - 1] << 2)))
	}, this.ml = function(aGo) {
		var aGD = ak.iv.aFS[al.di[3]];
		return al.di[1] = aGo, al.di[2] = 0, sB(aGD, aGo)
	}
}

function aF4() {
	var aFm = 32,
		aHB = new Array(2);

	function p3(iK) {
		var fI, fJ, fV, gv, gs, gG = aFm,
			uq = aY.fy.p3(gG, gG),
			gN = aY.fy.getContext(uq, !0),
			gJ = aY.fy.getImageData(gN, gG, gG),
			pF = gJ.data,
			oz = (gG >> 1) - .5,
			aHC = Math.sqrt(oz * oz);
		for (pF.fill(255), fJ = 0; fJ < gG; fJ++)
			for (fI = 0; fI < gG; fI++) gs = fI - oz, gv = fJ - oz, fV = 4 * (fJ * gG + fI), gs = 714 * (aHC - Math.sqrt(gs * gs + gv * gv)) / aHC, pF[2 + fV] = iK, pF[3 + fV] = 255 < gs ? 0 : gs;
		return gN.putImageData(gJ, 0, 0), uq
	}
	this.aFP = -1, this.cq = function() {
		this.aFP = -1, aHB[0] || (aHB[0] = p3(255), aHB[1] = p3(0))
	}, this.aHD = function(gN, fX, fI, fJ, gP, eD) {
		aY.fN.fP(eU) && (gN.setTransform(fX *= 4 / 3 * .625, 0, 0, fX, fI - (gP *= 4 / 3), fJ - gP), gN.drawImage(aHB[+(ak.iv.aFO[eD] === this.aFP)], 0, 0))
	}
}

function yE() {
	if (iM < 3) return !1;
	if (ai.fE(3 * ez[jE[2]], 2) < ez[jE[0]]) return !1;
	if (ez[jE[0]] + ez[jE[1]] + ez[jE[2]] < uE - ai.fE(uE, 10)) return !1;
	if (8 * Math.min(Math.min(eV[jE[0]], eV[jE[1]]), eV[jE[2]]) < 5 * Math.max(Math.max(eV[jE[0]], eV[jE[1]]), eV[jE[2]])) return !1;
	if (hL) {
		if (b4.iL[jE[0]] === b4.iL[jE[1]]) return !1;
		if (b4.iL[jE[0]] === b4.iL[jE[2]]) return !1;
		if (b4.iL[jE[1]] === b4.iL[jE[2]]) return !1
	}
	return !0
}

function ci() {
	this.size = 501, this.rd = new Uint32Array(this.size), this.tl = new Uint32Array(this.size), this.a1A = new Uint16Array(this.size), this.aC3 = 0, this.aHG = 1, this.iK = 0, this.max = [0, 0, 0], this.eX = 0, this.aHH = ["Avg. Attack Strength",
		"Number Attacks", "Ships sent", "Bots conquered", "Humans conquered", "Attacked by Bots", "Attacked by Humans", "Territorial Loss", "Territorial Income", "Interest Income", "Received Support", "Overall Income", "Commanding Costs",
		"Attack Losses", "Defense Losses", "Shipping Losses", "Transmitted Support", "Overall Expenses"
	], this.cq = function() {
		this.aC3 = 0, this.aHG = 1, this.iK = 0, this.aHI(), this.aHJ()
	}, this.md = function(player, h4) {
		player === eU && (this.eX[0] += h4, this.eX[1]++, this.eX[12] += al.df[1], this.eX[13] += al.df[0])
	}, this.ly = function(player, lc) {
		donationsTracker.logDonation(player, lc, al.df[0]);
		player === eU && (k.ly(al.df[0], al.df[1], lc), this.eX[12] += al.df[1], this.eX[16] += al.df[0]), lc === eU && (k.wR(al.df[0], player), this.eX[10] += al.df[0])
	}, this.i5 = function() {
		0 < this.iK-- || this.aHK()
	}, this.aHK = function() {
		0 !== h1[eU] && (this.rd[this.aC3] = ez[eU], this.tl[this.aC3] = eV[eU], this.a1A[this.aC3] = a5.a1B(eU), this.aHL(this.aC3), this.aC3++, this.aC3 === this.size && this.aHM(), this.iK = this.aHG - 1, b2.g0())
	}, this.aHM = function() {
		this.aHI(), this.aHL(0), this.aC3 = 1 + eR(this.size, 2);
		for (var eD = 1; eD < this.aC3; eD++) this.rd[eD] = this.rd[2 * eD], this.tl[eD] = this.tl[2 * eD], this.a1A[eD] = this.a1A[2 * eD], this.aHL(eD);
		this.aHG *= 2
	}, this.aHI = function() {
		this.max[0] = this.max[1] = this.max[2] = 0
	}, this.aHJ = function() {
		this.eX = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	}, this.aHL = function(eD) {
		this.max[0] = this.rd[eD] > this.max[0] ? this.rd[eD] : this.max[0], this.max[1] = this.tl[eD] > this.max[1] ? this.tl[eD] : this.max[1], this.max[2] = this.a1A[eD] > this.max[2] ? this.a1A[eD] : this.max[2]
	}
}

function cj() {
	this.g3 = 0, this.g9 = 0, this.qP = 0, this.qQ = 0, this.a27 = 0, this.a28 = 0, this.xB = 0, this.a4x = 0, this.a4g = 0, this.a3S = 0, this.aHN = 0, this.aHO = 0, this.xn = 0, this.fx = 0, this.a0p = ["Territory", "Balance", "Interest",
		"Numbers"], this.sv = !1, this.aHP = -1, this.aHQ = !1, this.aHR = [0, 0], this.cq = function() {
		this.sv = !1, this.aHP = -1, this.aHQ = !1, this.resize()
	}, this.resize = function() {
		this.g3 = aK.g3 < 1.369 * aK.g9 ? aK.g3 : 1.369 * aK.g9;
		var ei = b7.cv.ft() && aK.g3 < aK.g9 ? 1 : b7.cv.ft() ? .8 : aK.g3 < aK.g9 ? .65 : .59;
		this.g3 = Math.floor(ei * this.g3), this.g3 -= b7.cv.ft() && aK.g3 < aK.g9 ? 2 * b0.gap + 2 : 0, this.g9 = Math.floor(this.g3 / 1.369), this.xn = Math.floor(this.g9 / 150), this.xn = Math.max(this.xn, 1.5), this.qP = Math.floor(1 + .02 *
				this.g3), this.qQ = Math.floor(1 + .04 * this.g3), this.xB = this.qQ, this.a4x = Math.floor(1 + .075 * this.g3), this.a3S = Math.floor(1 + .1125 * this.g3), this.aHN = Math.floor(this.g3 * (b7.cv.ft() ? .03 : .029)), this.aHN =
			Math.max(this.aHN, 4), this.aHO = Math.floor(.035 * this.g3), this.aHO = Math.max(this.aHO, 4), this.a4g = this.g9 - 2 * this.xB - this.a4x - this.a3S, this.sv && this.aHS()
	}, this.g6 = function(g7, g8) {
		var pk, pj;
		return !!this.sv && (pj = g7, pk = g8, g7 -= eR(aK.g3 - this.g3, 2), g8 -= eR(aK.g9 - this.g9, 2), g7 < 0 || g8 < 0 || g7 >= this.g3 || g8 >= this.g9 || g7 >= this.g3 - this.a3S && g8 < this.a3S ? 1 < j.g6(pj, pk) || this.o0() : g8 < this
			.a3S || (g8 < this.g9 - this.a4x ? (this.aHQ = !0, this.aHP = (g7 - 2 * this.qP - this.a27) / this.a28, 3 !== this.fx && (b3.d1 = !0)) : (pj = (pj = Math.floor(g7 / (this.g3 / this.a0p.length))) < 0 ? 0 : pj >= this.a0p.length ?
				this.a0p.length - 1 : pj) !== this.fx && (this.fx = pj, this.aHS(), b3.d1 = !0)), !0)
	}, this.t8 = function() {
		var aHT = Math.floor((this.aHR[0] + h5) / h6),
			aHU = Math.floor((this.aHR[1] + h7) / h6);
		aHT < 1 || aHU < 1 || aHT >= ap.e8 - 1 || aHU >= ap.e9 - 1 || console.log(aHT + " " + aHU)
	}, this.sX = function(g7, g8) {
		return this.aHR[0] = g7, this.aHR[1] = g8, !(!this.sv || !this.aHQ || (g7 -= eR(aK.g3 - this.g3, 2), g8 = this.aHP, this.aHP = (g7 - 2 * this.qP - this.a27) / this.a28, (0 <= this.aHP && this.aHP <= 1 || 0 <= g8 && g8 <= 1) && (b3.d1 = !
			0), 0))
	}, this.sy = function() {
		this.aHQ && (this.aHQ = !1)
	}, this.tC = function() {
		this.sv ? this.o0() : this.show()
	}, this.show = function() {
		b1.aC3 < 2 || (this.sv = !0, this.aHS())
	}, this.o0 = function() {
		this.sv = !1, this.aHP = -1, b3.d1 = !0
	}, this.aHS = function() {
		this.fx < 2 ? this.a27 = n.measureText(aY.ji.jj(b1.max[this.fx]), aY.fy.fz(0, this.aHN)) : 2 === this.fx && (this.a27 = n.measureText(aY.ji.u0(6, 2), aY.fy.fz(0, this.aHN))), this.a28 = this.g3 - 2 * this.qP - this.a27 - this.qQ
	}, this.g0 = function() {
		this.sv && this.aHS()
	}, this.gC = function() {
		this.sv && this.yh()
	}, this.yh = function() {
		var fI = eR(aK.g3 - this.g3, 2),
			fJ = eR(aK.g9 - this.g9, 2);
		gD.setTransform(1, 0, 0, 1, fI, fJ), gD.fillStyle = aZ.kY, gD.fillRect(0, this.a3S, this.g3, this.g9 - this.a3S), this.aHV(), this.aHW(), gD.strokeRect(0, 0, this.g3, this.g9), aY.fy.textAlign(gD, 2), gD.font = aY.fy.fz(0, this.aHN),
			0 === this.fx ? this.aHX(b1.rd, fI, fJ) : 1 === this.fx ? this.aHX(b1.tl, fI, fJ) : 2 === this.fx ? this.aHY(fI, fJ) : 3 === this.fx && (this.aHZ(fI, fJ), this.aHa(fI, fJ)), j.vX(Math.floor(fI + this.g3 - .725 * this.a3S), Math.floor(
				fJ + .275 * this.a3S), Math.floor(.45 * this.a3S)), gD.setTransform(1, 0, 0, 1, 0, 0)
	}, this.aHV = function() {
		var eD, dZ;
		for (gD.lineWidth = this.xn, aY.fy.textBaseline(gD, 1), aY.fy.textAlign(gD, 1), gD.strokeStyle = aZ.gE, gD.font = aY.fy.fz(1, this.aHO), dZ = this.g3 / this.a0p.length, gD.fillStyle = aZ.kr, gD.fillRect(this.fx * dZ, this.g9 - this.a4x,
				dZ, this.a4x), gD.fillStyle = aZ.gE, gD.fillRect(0, this.g9 - this.a4x - .5 * this.xn, this.g3, this.xn), eD = 1; eD <= 3; eD++) gD.fillRect(eD * dZ, this.g9 - this.a4x, this.xn, this.a4x);
		for (eD = this.a0p.length - 1; 0 <= eD; eD--) gD.fillText(this.a0p[eD], (eD + .5) * dZ, this.g9 - .46 * this.a4x)
	}, this.aHW = function() {
		gD.fillStyle = aZ.l8, gD.fillRect(0, 0, this.g3, this.a3S), gD.fillStyle = aZ.gE, gD.fillRect(0, this.a3S - .5 * this.xn, this.g3, this.xn), gD.font = aY.fy.fz(1, .39 * this.a3S), gD.fillText("Statistics", Math.floor(this.g3 / 2), Math
			.floor(.55 * this.a3S))
	}, this.aHX = function(dl, fI, fJ) {
		var oz = b1.max[this.fx],
			fr = (gD.setTransform(1, 0, 0, 1, fI + 2 * this.qP + this.a27, fJ + this.xB + this.a3S), gD.lineWidth = 2, this.a4g / Math.sqrt(oz));
		gD.beginPath(), gD.moveTo(this.a28, this.a4g - fr * Math.sqrt(dl[b1.aC3 - 1]));
		for (var eD = b1.aC3 - 2; 0 <= eD; eD--) gD.lineTo(eD * this.a28 / (b1.aC3 - 1), this.a4g - fr * Math.sqrt(dl[eD]));
		gD.stroke();
		fI = this.vX(dl, fr, .5);
		fI < .95 && gD.fillText(aY.ji.jj(oz), -this.qP, 0), .05 < Math.abs(fI - .5) && gD.fillText(aY.ji.jj(Math.floor(oz / 4)), -this.qP, Math.floor(this.a4g / 2)), .05 < fI && gD.fillText("0", -this.qP, this.a4g)
	}, this.aHY = function(fI, fJ) {
		gD.setTransform(1, 0, 0, 1, fI + 2 * this.qP + this.a27, fJ + this.xB + this.a3S), gD.lineWidth = 2;
		var fr = this.a4g / Math.max(b1.max[this.fx], 1);
		gD.beginPath(), gD.moveTo(this.a28, this.a4g - fr * b1.a1A[b1.aC3 - 1]);
		for (var eD = b1.aC3 - 2; 0 <= eD; eD--) gD.lineTo(eD * this.a28 / (b1.aC3 - 1), this.a4g - fr * b1.a1A[eD]);
		gD.stroke();
		fI = this.vX(b1.a1A, fr, 1), fJ = b1.max[this.fx] / 100;
		fI < .95 && gD.fillText(aY.ji.u0(fJ, 2), -this.qP, 0), .05 < Math.abs(fI - .5) && gD.fillText(aY.ji.u0(fJ / 2, 2), -this.qP, Math.floor(this.a4g / 2)), .05 < fI && gD.fillText(aY.ji.u0(0, 2), -this.qP, this.a4g)
	}, this.aHZ = function(fI, fJ) {
		gD.setTransform(1, 0, 0, 1, fI + .34 * this.g3, fJ + 2 * this.xB + this.a3S), aY.fy.textAlign(gD, 2);
		for (var a0Z = this.g9 - 4 * this.xB - this.a4x - this.a3S, eD = 7; 0 <= eD; eD--) gD.fillText(b1.aHH[eD], 0, eD * a0Z / 7);
		gD.setTransform(1, 0, 0, 1, fI + .39 * this.g3, fJ + 2 * this.xB + this.a3S), aY.fy.textAlign(gD, 0);
		fI = b1.eX[1];
		for (gD.fillText(aY.ji.u0(b1.eX[0] / (10 * (fI < 1 ? 1 : fI)), 1), 0, 0), eD = 6; 1 <= eD; eD--) gD.fillText(b1.eX[eD].toString(), 0, eD * a0Z / 7);
		gD.fillText(aY.ji.u0(100 * (1 - ez[eU] / b1.eX[7]), 0), 0, a0Z)
	}, this.aHa = function(fI, fJ) {
		gD.setTransform(1, 0, 0, 1, fI + .79 * this.g3, fJ + 2 * this.xB + this.a3S), aY.fy.textAlign(gD, 2);
		var eD, a0Z = this.g9 - 4 * this.xB - this.a4x - this.a3S;
		for (gD.fillStyle = aZ.km, eD = 2; 0 <= eD; eD--) gD.fillText(b1.aHH[eD + 8], 0, eD * a0Z / 9);
		for (gD.fillStyle = aZ.kl, gD.fillText(b1.aHH[11], 0, 3 * a0Z / 9), gD.fillStyle = aZ.l0, eD = 8; 4 <= eD; eD--) gD.fillText(b1.aHH[eD + 8], 0, eD * a0Z / 9);
		gD.fillStyle = aZ.kz, gD.fillText(b1.aHH[17], 0, 9 * a0Z / 9), gD.fillStyle = aZ.km;
		var w9 = aY.ji.jj(b1.eX[8] + b1.eX[9] + b1.eX[10] + b1.eX[11]),
			aHb = gD.measureText(w9).width,
			fI = (gD.setTransform(1, 0, 0, 1, fI + .83 * this.g3 + aHb, fJ + 2 * this.xB + this.a3S), gD.fillText(aY.ji.jj(b1.eX[8]), 0, 0), gD.fillText(aY.ji.jj(b1.eX[9]), 0, a0Z / 9), gD.fillText(aY.ji.jj(b1.eX[10]), 0, 2 * a0Z / 9), gD
				.fillStyle = aZ.kl, gD.fillText(w9, 0, 3 * a0Z / 9), gD.fillStyle = aZ.l0, b1.eX[13] - a4.a7T(eU)),
			aHb = (gD.fillText(aY.ji.jj(b1.eX[12]), 0, 4 * a0Z / 9), gD.fillText(aY.ji.jj(fI), 0, 5 * a0Z / 9), gD.fillText(aY.ji.jj(b1.eX[14]), 0, 6 * a0Z / 9), gD.fillText(aY.ji.jj(b1.eX[15]), 0, 7 * a0Z / 9), gD.fillText(aY.ji.jj(b1.eX[16]),
				0, 8 * a0Z / 9), b1.eX[12] + fI + b1.eX[14] + b1.eX[15] + b1.eX[16] + b1.eX[17]);
		gD.fillStyle = aZ.kz, gD.fillText(aY.ji.jj(aHb), 0, a0Z), gD.fillStyle = aZ.gE
	}, this.vX = function(dl, fr, zI) {
		var eD, dE, dm;
		return this.aHP < 0 || 1 < this.aHP ? .25 : (eD = this.aHP * (b1.aC3 - 1), dm = dl[dE = Math.floor(eD)], dm += (eD - dE) * (dl[dE < b1.aC3 - 1 ? dE + 1 : dE] - dm), gD.strokeStyle = aZ.kd, .04 < this.aHP && this.aHe(0, this.a4g - fr *
				Math.pow(dm, zI), eD * this.a28 / (b1.aC3 - 1), this.a4g - fr * Math.pow(dm, zI)), .04 < dm / b1.max[this.fx] && this.aHe(eD * this.a28 / (b1.aC3 - 1), this.a4g, eD * this.a28 / (b1.aC3 - 1), this.a4g - fr * Math.pow(dm, zI)),
			gD.fillStyle = aZ.l2, gD.beginPath(), gD.arc(eD * this.a28 / (b1.aC3 - 1), this.a4g - fr * Math.pow(dm, zI), Math.max(2, .014 * this.g9), 0, 2 * Math.PI), gD.fill(), dl = this.aHP * b3.a1C, dl = 0 === h1[eU] ? Math.floor(dl * u
				.a1J) : Math.floor(dl * b3.iJ()), gD.fillStyle = aZ.gE, gD.fillText(1 === zI ? aY.ji.u0(dm / 100, 2) : aY.ji.jj(Math.floor(dm)), -this.qP, this.a4g - fr * Math.pow(dm, zI)), aY.fy.textAlign(gD, 1), gD.fillText(t.zu(dl), eD *
				this.a28 / (b1.aC3 - 1), this.a4g + this.aHN - (b7.cv.ft() ? 2 : 0) - this.xn), aY.fy.textAlign(gD, 2), fr * Math.pow(dm, zI) / this.a4g)
	}, this.aHe = function(ja, jb, jc, jd) {
		gD.beginPath(), gD.moveTo(ja, jb), gD.lineTo(jc, jd), gD.stroke()
	}
}

function bI() {
	this.aHf = "https://", this.aHg = this.aHf + "territorial.io/", this.aC4 = this.aHg + "changelog", this.aC9 = this.aHg + "terms", this.aHh = this.aHg + "cookie_policy", this.aCA = this.aHg + "privacy", this.aC8 = this.aHg + "tutorial", this.aC7 =
		this.aHg + "players", this.aC5 = this.aHg + "clans", this.aC6 = this.aHg + "clan-results", this.a2O = this.aHf + "play.google.com/store/apps/details?id=territorial.io", this.s3 = this.aHf + "apps.apple.com/app/id1581110913", this.a2P = this
		.aHf + "www.youtube.com/watch?v=toZTQ8aRdFc", this.a2Q = this.aHf + "discord.gg/pthqvpTXmh", this.a2R = this.aHf + "www.instagram.com/davidtschacher/"
}

function cQ() {
	this.iv = new aHi, this.qH = new aHj, this.cq = function() {
		this.iv.cq()
	}, this.i5 = function() {
		0 !== this.iv.we && this.iv.we--
	}
}

function aHj() {
	this.gC = function() {
		if (0 !== am.iv.we && (gD.globalAlpha = Math.min(am.iv.we / 580, 1), gD.drawImage(am.iv.aHm, 1 + p.je(), 1 + p.gB()), gD.globalAlpha = 1, fa)) {
			var eD, ja = h5 / h6,
				jb = h7 / h6,
				jc = (aK.g3 + h5) / h6,
				jd = (aK.g9 + h7) / h6,
				eh = am.iv.aHn * h6,
				aHo = am.iv.aHo;
			for (eD = h0 - 1; 0 <= eD; eD--) ! function(eD, eh, ja, jb, jc, jd, aHo) {
				0 === h1[eD] || 0 === ez[eD] || (jc = aK.g3 * ((ht[eD] + hs[eD] + 1) / 2 - ja) / (jc - ja) - .5 * eh, ja = aK.g9 * ((hw[eD] + hv[eD] + 1) / 2 - jb) / (jd - jb) - .5 * eh, jc > aK.g3) || ja > aK.g9 || jc < -eh || ja < -eh || (
					gD.setTransform(h6, 0, 0, h6, jc, ja), gD.drawImage(aHo[hL ? b4.iL[eD] : 1], 0, 0))
			}(eD, eh, ja, jb, jc, jd, aHo);
			gD.setTransform(h6, 0, 0, h6, 0, 0)
		}
	}
}

function aHi() {
	this.aHn = 28, this.we = 0, this.aHm = null;
	var aHq = this.aHo = null;

	function aHt(gG, aHv) {
		var fI, fJ, fV, gs, uq = aY.fy.p3(gG, gG),
			gN = aY.fy.getContext(uq, !0),
			gJ = aY.fy.getImageData(gN, gG, gG),
			pF = gJ.data,
			oz = (gG >> 1) - .5,
			aHw = .5 + oz;
		for (aHw *= aHw, fJ = 0; fJ < gG; fJ++)
			for (fI = 0; fI < gG; fI++) gs = (gs = fI - oz) * gs + (gs = fJ - oz) * gs, pF[fV = 4 * (fJ * gG + fI)] = aHv[0], pF[1 + fV] = aHv[1], pF[2 + fV] = aHv[2], pF[3 + fV] = (aHw - gs) * aHv[3] / aHw;
		return gN.putImageData(gJ, 0, 0), uq
	}

	function aHD(eD, gN, uq, gG) {
		var fI;
		0 !== h1[eD] && 0 !== ez[eD] && (fI = ht[eD] + hs[eD] + 1 - gG - 2 >> 1, gG = hw[eD] + hv[eD] + 1 - gG - 2 >> 1, gN.drawImage(uq[hL ? b4.iL[eD] : eD < h0 ? 1 : 0], fI, gG))
	}
	this.cq = function() {
		var vJ;
		this.we = 700,
			function(vJ) {
				var eD, gG = vJ.aHn;
				if (vJ.aHo = [], aHq = [], hL)
					for (eD = 0; eD <= uH; eD++) vJ.aHo.push(aHt(gG, b4.aHu[b4.rT[eD]])), aHq.push(aHt(gG >> 1, b4.aHu[b4.rT[eD]]));
				else vJ.aHo.push(aHt(gG, b4.aHu[0])), vJ.aHo.push(aHt(gG, b4.aHu[4])), aHq.push(aHt(gG >> 1, b4.aHu[0]))
			}(this),
			function(vJ, aHx) {
				var eD, aHm = vJ.aHm,
					gN = aY.fy.getContext(aHm, !0),
					eZ = ed,
					gG = vJ.aHn >> 1;
				gN.imageSmoothingEnabled = !1, gN.setTransform(1, 0, 0, 1, 0, 0), aHx && gN.clearRect(0, 0, aHm.width, aHm.height);
				for (eD = h0; eD < eZ; eD++) aHD(eD, gN, aHq, gG)
			}(this, null !== (vJ = this).aHm && vJ.aHm.width === ap.e8 - 2 && vJ.aHm.height === ap.e9 - 2 || (vJ.aHm = aY.fy.p3(ap.e8 - 2, ap.e9 - 2), !1))
	}, this.uB = function() {
		for (var eZ = h0, gG = this.aHn, aHo = this.aHo, gN = aY.fy.getContext(this.aHm, !0), eD = 0; eD < eZ; eD++) aHD(eD, gN, aHo, gG)
	}
}

function cR() {
	this.aHy = -1, this.cq = function() {
		this.aHy = -1
	}, this.i5 = function() {
		-1 !== this.aHy && ao.r1.r9(this.aHy)
	}, this.ls = function(player) {
		return !!j.vW(player) && (1 === iM ? (this.aHy = player, il && fa && mY.i5()) : (k.r7(player, player === eU ? 21 : 22), 8 === ij ? this.aHy = 1 - player : il ? (a6T(player), a9B(), fa && mY.i5()) : this.aHz(player)), !0)
	}, this.mV = function(player) {
		1 === rG && 0 !== h1[player] && 2 !== h2[player] && (8 === ij ? this.aHy = 1 - player : this.aHz(player)), k.r7(player, 4)
	}, this.aHz = function(player) {
		fa ? (a6T(player), a9B()) : aQ.a97(player)
	}
}

function cc() {
	this.a4E = ["rgba(130,130,130,0.88)", "rgba(130,12,12,0.88)", "rgba(12,130,12,0.88)", "rgba(12,12,130,0.88)", "rgba(130,130,12,0.88)", "rgba(130,12,130,0.88)", "rgba(12,130,130,0.88)", "rgba(130,130,130,0.88)", "rgba(0,0,0,0.88)"], this.a0Y = [aZ
		.gE, "rgb(255,120,120)", "rgb(0,230,0)", "rgb(150,150,255)", "rgb(240,240,25)", "rgb(255,70,255)", "rgb(25,240,240)", aZ.gE, "rgb(170,170,170)"
	], this.aI0 = [aZ.gE, "rgb(255,0,0)", "rgb(0,255,0)", "rgb(0,0,255)", "rgb(255,255,0)", "rgb(255,0,255)", "rgb(0,255,255)", aZ.gE, aZ.jg], this.aI1 = [aZ.jg, aZ.gE, aZ.gE, aZ.gE, aZ.jg, aZ.jg, aZ.jg, aZ.jg, aZ.gE];
	var aI2 = ["255,255,255", "0,0,0", "255,4,4", "200,4,4", "4,255,4", "4,180,4", "255,195,195", "90,3,3", "200,255,200", "3,84,3"],
		aI3 = (this.a8c = ["rgba(" + aI2[0] + ",", "rgba(" + aI2[1] + ",", "rgba(" + aI2[2] + ",", "rgba(" + aI2[3] + ",", "rgba(" + aI2[4] + ",", "rgba(" + aI2[5] + ",", "rgba(" + aI2[6] + ",", "rgba(" + aI2[7] + ",", "rgba(" + aI2[8] + ",",
			"rgba(" + aI2[9] + ","
		], this.a8d = ["rgb(" + aI2[0] + ")", "rgb(" + aI2[1] + ")", "rgb(" + aI2[2] + ")", "rgb(" + aI2[3] + ")", "rgb(" + aI2[4] + ")", "rgb(" + aI2[5] + ")", "rgb(" + aI2[6] + ")", "rgb(" + aI2[7] + ")", "rgb(" + aI2[8] + ")", "rgb(" + aI2[
			9] + ")"
		], this.fs = ["White", "Red", "Green", "Blue", "Yellow", "Magenta", "Cyan", "White", "Black"], this.aHu = [
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
	this.rT = [0, 1, 2, 3, 4, 5, 6, 7, 8], this.iL = new Uint8Array(ed), this.rb = null, this.rc = null, this.cq = function(qT) {
		this.iL.fill(0), this.aI4(), hL && (aU.ig && aU.ih.a7C ? this.a5n() : 9 === ij ? this.aI5() : this.i5(qT))
	}, this.a5n = function() {
		var eD, eZ = pl;
		for (this.rT = [0, 1, 2, 3, 4, 5, 6, 7, 8], eD = 0; eD < eZ; eD++) this.iL[eD] = aU.ih.a7C[eD]
	}, this.aI4 = function() {
		for (var eD = this.rT.length - 1; 0 <= eD; eD--) this.rT[eD] = eD;
		this.rb = [], this.rc = []
	}, this.aI5 = function() {
		for (var eD = h0 + aM.a8y - 1; 0 <= eD; eD--) this.iL[eD] = 1;
		for (eD = h0 + aM.a8y; eD < ed; eD++) this.iL[eD] = 2;
		this.rT[1] = 7, this.rT[2] = 8
	}, this.i5 = function(qT) {
		var gZ = new Uint8Array(h0),
			ga = new Uint8Array(h0),
			aI6 = new Uint16Array(8),
			aI7 = new Uint16Array(this.rT.length);
		this.aI8(qT, gZ, ga, aI6), this.a5l(aI6), il || this.aI9(aI7, gZ, ga), this.aIA(gZ, ga, aI7), il ? this.aIB() : this.aIC()
	}, this.aI8 = function(qT, gZ, ga, aID) {
		for (var hh, dE, aIE, eZ = this.rT.length - 1, dl = new Uint16Array(eZ), eD = h0 - 1; 0 <= eD; eD--) {
			for (hh = eZ; 1 <= hh; hh--) dl[hh - 1] = Math.abs(4 * qT[eD].a4t[0] - aI3[hh][0]) + Math.abs(4 * qT[eD].a4t[1] - aI3[hh][1]) + Math.abs(4 * qT[eD].a4t[2] - aI3[hh][2]);
			for (aIE = 768, hh = eZ - 1; 0 <= hh; hh--) dl[dE = (hh + eD) % eZ] < aIE && (aIE = dl[dE], gZ[eD] = dE);
			for (aID[gZ[eD]] += 4, aIE = 768, hh = eZ - 1; 0 <= hh; hh--) dl[dE = (hh + eD) % eZ] < aIE && dE !== gZ[eD] && (aIE = dl[dE], ga[eD] = dE);
			aID[ga[eD]]++
		}
	}, this.a5l = function(aID) {
		for (var hh, uo, eZ = this.rT.length - 1, eD = eZ; 0 <= eD; eD--) this.rT[eD] = eD;
		for (eD = eZ - 1; 0 <= eD; eD--) aID[eD]++;
		for (eD = 1; eD <= eZ; eD++) {
			for (uo = 0, hh = 1; hh < eZ; hh++) aID[hh] > aID[uo] && (uo = hh);
			aID[uo] = 0, this.rT[eD] = uo + 1
		}
	}, this.aI9 = function(aI7, gZ, ga) {
		var eD, hh, aIF, iK, ei, dE, kF, tb, aIG = this.rT.length - 1,
			aIH = new Uint16Array(aIG),
			aII = [],
			xB = Math.max(h0 + 1 >> 1, 6);
		loop: for (eD = 0; eD < h0; eD++)
			if (null !== (aIF = aY.ji.u4(wc[eD]))) {
				for (hh = this.rb.length - 1; 0 <= hh; hh--)
					if (aIF === this.rb[hh] && this.rc[hh].length < xB) {
						this.rc[hh].push(eD);
						continue loop
					} this.rb.push(aIF), aII.push(!1), this.rc.push([eD])
			}
		for (hh = this.rb.length - 1; 0 <= hh; hh--) {
			for (ei = -1, iK = this.rb.length - 1; 0 <= iK; iK--) !aII[iK] && (-1 === ei || this.rc[iK].length > this.rc[ei].length) && (ei = iK);
			for (iK = aIG - 1; 0 <= iK; iK--) aIH[iK] = 1;
			for (iK = this.rc[ei].length - 1; 0 <= iK; iK--) aIH[gZ[this.rc[ei][iK]]] += 3, aIH[ga[this.rc[ei][iK]]]++;
			for (eD = aIG - 1; 0 <= eD; eD--) {
				for (dE = ei % aIG, iK = aIG - 1; 0 <= iK; iK--) aIH[iK] > aIH[dE] && (dE = iK);
				for (kF = -1, iK = uH; 0 < iK; iK--)
					if (this.rT[iK] === dE + 1) {
						kF = iK;
						break
					} if (aIH[dE] = 0, -1 !== kF) {
					for (tb = 0, iK = uH; 0 < iK; iK--) aI7[kF] > aI7[iK] && tb++;
					if (tb !== uH - 1) {
						for (iK = this.rc[ei].length - 1; 0 <= iK; iK--) aI7[kF]++, this.iL[this.rc[ei][iK]] = kF;
						break
					}
				}
			}
			aII[ei] = !0
		}
	}, this.aIA = function(gZ, ga, aI7) {
		for (var eD, gr, eZ = this.rT.length - 1, border = eR(h0, uH), aIJ = (0 < h0 % uH && border++, new Uint8Array(1 + eZ)), hh = eZ; 1 <= hh; hh--) aIJ[this.rT[hh]] = hh;
		for (eD = 0; eD < h0; eD++) gr = aIJ[gZ[eD] + 1], 0 === this.iL[eD] && gr <= uH && aI7[gr] < border && (aI7[gr]++, this.iL[eD] = gr);
		for (eD = 0; eD < h0; eD++) gr = aIJ[ga[eD] + 1], 0 === this.iL[eD] && gr <= uH && aI7[gr] < border && (aI7[gr]++, this.iL[eD] = gr);
		for (hh = uH; 1 <= hh; hh--)
			for (eD = h0 - 1; 0 <= eD && !(aI7[hh] >= border); eD--) 0 === this.iL[eD] && (aI7[hh]++, this.iL[eD] = hh)
	}, this.aIB = function() {
		var eD, hY, aID = new Uint16Array(uH);
		for (aID[uH - 1] = ed, eD = uH - 2; 0 <= eD; eD--) aID[eD] = z.im[eD].wM;
		for (aID[0]--, hY = 0 === aID[0] ? 1 : 0, eD = h0; eD < ed; eD++) this.iL[eD] = hY + 1, aID[hY]--, aID[hY] <= 0 && hY++
	}, this.aIC = function() {
		for (var eD = h0; eD < ed; eD++) this.iL[eD] = 1 + eD % uH
	}
}

function f0() {
	for (var fI, fJ, eD = dz - 1; 0 <= eD; eD--) fI = eR(e1[eD], 4) % ap.e8, fJ = eR(e1[eD], 4 * ap.e8), ht[dv] = ht[dv] > fI ? fI : ht[dv], hw[dv] = hw[dv] > fJ ? fJ : hw[dv], hs[dv] = hs[dv] < fI ? fI : hs[dv], hv[dv] = hv[dv] < fJ ? fJ : hv[dv]
}

function eI() {
	var ei, eg, eD, eZ = ea[dv].length;
	loop: for (eD = eZ - 1; 0 <= eD; eD--) {
		for (ei = 3; 0 <= ei; ei--)
			if (eg = ea[dv][eD] + e4[ei], a2.el(eg) || a2.ej(eg) && a2.ek(eg) !== dv) {
				a2.hV(ea[dv][eD], dv);
				continue loop
			} ea[dv][eD] = ea[dv][eZ - 1], ea[dv].pop(), eZ--
	}
}

function eJ() {
	var ei, eg, aIK, aIL, eZ = er[dv].length;
	loop: for (var eD = eZ - 1; 0 <= eD; eD--) {
		for (aIK = aIL = !1, ei = 3; 0 <= ei; ei--) {
			if (eg = er[dv][eD] + e4[ei], a2.a5w(eg, dv)) continue loop;
			aIK = aIK || a2.fh(eg), aIL = aIL || a2.pP(eg)
		}
		aIK ? es[dv].push(er[dv][eD]) : aIL ? ev[dv].push(er[dv][eD]) : a2.q4(er[dv][eD], dv), er[dv][eD] = er[dv][eZ - 1], er[dv].pop(), eZ--
	}
}

function ep() {
	ez[dy] -= dz
}

function eq(border) {
	for (var eZ = border.length, eD = eZ - 1; 0 <= eD; eD--) a2.qC(dy, border[eD]) || (border[eD] = border[eZ - 1], border.pop(), eZ--)
}

function et(border) {
	for (var eZ = border.length, eD = eZ - 1; 0 <= eD; eD--) !a2.qC(dy, border[eD]) && a2.eb(border[eD]) && (border[eD] = border[eZ - 1], border.pop(), eZ--)
}

function eu(border) {
	for (var ei, eg, eZ = border.length, eD = eZ - 1; 0 <= eD; eD--)
		for (ei = 3; 0 <= ei; ei--)
			if (eg = border[eD] + e4[ei], a2.a5w(eg, dy)) {
				er[dy].push(border[eD]), border[eD] = border[eZ - 1], border.pop(), eZ--;
				break
			}
}

function ew() {
	for (var ei, eg, eD = dz - 1; 0 <= eD; eD--)
		for (ei = 3; 0 <= ei; ei--) eg = e1[eD] + e4[ei], a2.a5x(dy, eg) && a2.a5y(eg) && (er[dy].push(eg), a2.ec(eg, dy))
}

function ex() {
	var fI, fJ;
	loop: for (; hw[dy] < hv[dy];) {
		for (fI = hs[dy]; fI >= ht[dy]; fI--)
			if (a2.qC(dy, 4 * (hw[dy] * ap.e8 + fI))) break loop;
		hw[dy]++
	}
	loop: for (; hw[dy] < hv[dy];) {
		for (fI = hs[dy]; fI >= ht[dy]; fI--)
			if (a2.qC(dy, 4 * (hv[dy] * ap.e8 + fI))) break loop;
		hv[dy]--
	}
	loop: for (; ht[dy] < hs[dy];) {
		for (fJ = hv[dy]; fJ >= hw[dy]; fJ--)
			if (a2.qC(dy, 4 * (fJ * ap.e8 + ht[dy]))) break loop;
		ht[dy]++
	}
	loop: for (; ht[dy] < hs[dy];) {
		for (fJ = hv[dy]; fJ >= hw[dy]; fJ--)
			if (a2.qC(dy, 4 * (fJ * ap.e8 + hs[dy]))) break loop;
		hs[dy]--
	}
}

function fp(player, hR) {
	return 0 === b4.iL[player] || b4.iL[player] !== b4.iL[hR]
}

function fn(player, hR) {
	for (var dE, aIM = a4.eE(player), eD = 0; eD < aIM; eD++)
		if (0 === a4.eF(player, eD))
			if ((dE = a4.eK(player, eD)) === ed) {
				if (hR === ed) return !1;
				if (fl(hR)) return !0
			} else if (hR === ed) {
		if (fl(dE)) return !0
	} else if (fq(hR, dE)) return !0;
	return !1
}

function fl(player) {
	for (var eD, eh, eZ = er[player].length, ei = 3; 0 <= ei; ei--)
		for (eh = e4[ei], eD = 0; eD < eZ; eD++)
			if (a2.el(er[player][eD] + eh)) return !0;
	return !1
}

function fq(ti, tj) {
	var eD, dZ, ei, eh, eg, aGE = er[ti].length,
		aGF = er[tj].length;
	for (aGF < aGE && (dZ = ti, ti = tj, tj = dZ, dZ = aGE, aGE = aGF, 0), ei = 3; 0 <= ei; ei--)
		for (eh = e4[ei], eD = 0; eD < aGE; eD++)
			if (eg = er[ti][eD] + eh, a2.ej(eg) && a2.ek(eg) === tj) return !0;
	return !1
}

function aIN() {
	this.i5 = function() {
		l.i5(), w.i5(), aK.i5(), aN.iv.i5(), aJ.a3i(), b6.i5(), b8.a45.i5(), b3.d1 && (b3.d1 = !1, x.gC())
	}
}

function aIO() {
	this.dY = b3.dY, this.fx = 0, this.aIP = 0, this.a3d = 0, this.aIQ = null, this.aIR = 7, this.wf = 0, this.cq = function() {
		this.a3d = 0, this.aIQ = [], this.fx = 0, this.aIP = 0
	}, this.aD9 = function(mH) {
		var eD;
		if (fa) this.a1D(mH);
		else if (this.aIQ.push(mH), 2 === rG) {
			for (eD = 0; eD < this.aIQ.length; eD++) aW.lU.i5(this.aIQ[eD]);
			this.aIQ = []
		}
	}, this.a1D = function(mH) {
		aW.lU.i5(mH), aX.i5(), t.a1D(this.a3d), this.a3d === uI ? (mY.i5(), this.a3d = 0, this.fx = 0, this.aIP = 0, this.dY = b3.dY) : (this.a3d++, a6.uA(), a6.j4(!0), ay.a1T())
	}, this.i5 = function() {
		aK.i5(), fa ? (b3.d1 = t.a1D(-1) || b3.d1, j5()) : (0 !== this.fx || b3.dY >= this.dY && (this.dY += b3.a1C * Math.floor(1 + (b3.dY - this.dY) / b3.a1C), 2 === rG ? it() : this.aIS(), this.fx++, 27 < b3.dY - this.wf)) && this.aIT(), j1(),
			b3.d1 && (b3.d1 = !1, qF()), this.wf = b3.dY
	}, this.aIT = function() {
		b3.d1 = !0, j3(), this.fx = 0
	}, this.aIS = function() {
		var aIU, eD;
		if (this.aIP !== 7 * this.a3d) iy(), ay.a1T();
		else {
			for (aIU = !1; this.aIV() && (aIU = !0, iy(), 0 < this.aIQ.length);)
				for (eD = this.aIR - 2; 0 <= eD; eD--) iy();
			aIU ? ay.a1T() : (it(), ay.uD())
		}
	}, this.aIV = function() {
		return 0 < this.aIQ.length && (this.a3d++, aW.lU.i5(this.aIQ[0]), this.aIQ.shift(), !0)
	}
}

function aIW() {
	var aIX, aIY, aIZ, a3d, aIa, fx = 0,
		dY = b3.dY;

	function aId() {
		! function() {
			if (!fa) return;
			if (il) return;
			return aIa % 7 != 0 ? aIa++ : a3d === uI ? (aIg(), t.a1D(a3d), mY.i5()) : (aIg(), aIa++, a3d++, a6.uA(), a6.j4(!0)), 1
		}() && (aIg(), iy())
	}

	function aIe() {
		fx = 0, (fa ? (b3.d1 = t.a1D(a3d - (aIa % 7 == 0 ? 0 : 1) + aIa % 7 / 7) || b3.d1, j5) : j.fM || !aa.vQ ? j5 : (b3.d1 = !0, j3))()
	}

	function aIg() {
		var eD, eZ, aIh = aX.mW.aDk,
			dm = aX.mW.aDl,
			dp = aX.mW.aDm,
			dr = aX.mW.aDn,
			aIi = aX.mW.aDo,
			aIj = aX.mW.aDp;
		if (aIX >= aIj.length) k.sF("Replay file smaller than expected."), ao.r1.r9(-1);
		else if (aIj = aIj[aIX], aIi[aIX]) {
			for (eZ = aIY + aIj, eD = aIY; eD < eZ; eD++) aW.lU.mJ(aIh[eD], dm[eD], dp[eD], dr[eD]);
			aIY += aIj, aIX++
		} else ++aIZ >= aIj && (aIX++, aIZ = 0)
	}
	this.aIP = 0, this.cq = function() {
		aIa = a3d = aIZ = aIY = aIX = 0
	}, this.i5 = function() {
		var aGc;
		aK.i5(), aa.yc() < 1.7 ? 0 === fx ? b3.dY >= dY && (aGc = b3.a1C / aa.yc(), dY += aGc * Math.floor(1 + (b3.dY - dY) / aGc), 2 === rG || j.fM || !aa.vQ ? it() : (aId(), ay.a1T()), fx++) : aIe() : function() {
			var aGc;
			if (b3.dY >= dY)
				if (2 === rG || j.fM || !aa.vQ) it(), dY = b3.dY;
				else {
					for (aGc = b3.a1C / aa.yc(), 16 < (b3.dY - dY) / aGc && (dY = b3.dY - 16 * aGc); b3.dY >= dY && 2 !== rG;) dY += aGc, aId();
					ay.a1T()
				} aIe()
		}(), j1(), b3.d1 && (b3.d1 = !1, qF())
	}, this.rN = function() {
		aIX !== aX.mW.aDp.length && k.sF("Replay file larger than expected.")
	}
}

function aIk() {
	var fx = 0,
		dY = b3.dY;
	this.aIP = 0, this.i5 = function() {
		aK.i5(), fa ? j5() : 0 === fx ? b3.dY >= dY && (dY += b3.a1C * Math.floor(1 + (b3.dY - dY) / b3.a1C), 2 === rG || j.fM ? it() : (iy(), ay.a1T()), fx++) : ((j.fM ? j5 : (b3.d1 = !0, j3))(), fx = 0), j1(), b3.d1 && (b3.d1 = !1, qF())
	}
}

function ck() {
	this.rM = null, this.d1 = !1, this.dY = 0, this.a1C = 56;
	var aIl = 0;

	function aIm() {
		b3.dY = aIl = performance.now(), b3.rM.i5(), window.requestAnimationFrame(aIm)
	}
	this.cq = function() {
		this.uc(), window.requestAnimationFrame(aIm), this.dY = performance.now()
	}, this.uZ = function() {
		fL ? (this.rM = new aIW, this.rM.cq()) : il ? this.rM = new aIk : (this.rM = new aIO, this.rM.cq())
	}, this.uc = function() {
		this.rM = new aIN, this.d1 = !0
	}, this.i5 = function() {
		this.rM.aIP++
	}, this.iJ = function() {
		return this.rM.aIP
	}, this.aCv = function() {
		var dZ = performance.now();
		dZ < aIl + 1e3 || (this.dY = dZ, this.rM.i5())
	}
}

function cA() {
	var jw = 0,
		aIn = !0;

	function aIp(fw) {
		8 !== x.rp() || 2 !== h2[eU] && (0 !== h1[eU] || fa) || k.wH(fw)
	}
	this.i5 = function() {
		var dZ, wi;
		b3.dY > jw && (jw = b3.dY + 2500, dZ = new Date, wi = dZ.getUTCSeconds(), aIn ? wi < 45 && (aIn = !1) : wi < 45 || (aIn = !0, (wi = dZ.getUTCMinutes() + 1) % 15 == 0 && aIp(30 === wi ? "Upcoming Battle Royale Contest!" :
			"Upcoming Alliance Contest!")))
	}
}

function c2() {
	var ja, jb, jc, jd, aIq = 0,
		aIr = 0;

	function aIt() {
		return Math.pow(Math.pow(jc - ja, 2) + Math.pow(jd - jb, 2), .5)
	}

	function aIs(dE) {
		ja = aK.nE * dE.touches[0].clientX, jb = aK.nE * dE.touches[0].clientY, jc = aK.nE * dE.touches[1].clientX, jd = aK.nE * dE.touches[1].clientY
	}
	this.sb = function(dE) {
		return 1 < dE.touches.length ? (aIr = b3.dY, aIq = 3, aIs(dE), i.o0(), !0) : (aIq = 0, !1)
	}, this.sc = function(dE) {
		var a9s, gp, gq;
		return 0 !== rG && 1 < dE.touches.length && (aIq = Math.max(aIq - 1, 0), f.kK() && (a9s = aIt(), aIs(dE), dE = aIt(), gp = Math.floor((ja + jc) / 2), gq = Math.floor((jb + jd) / 2), p.z2(gp, gq, Math.max(.125, dE) / Math.max(.125, a9s)),
			b3.d1 = !0), !0)
	}, this.t1 = function() {
		var fI, fJ;
		return !!(aIq && (aIq = 0, b3.dY < aIr + 500)) && (fI = (ja + jc) / 2, fJ = (jb + jd) / 2, i.st(fI, fJ), i.click(fI, fJ, !0) && (b3.d1 = !0), !0)
	}
}

function cK() {
	this.size = 0, this.fx = 0, this.mH = null, this.cq = function(mH) {
		this.fx = 0, this.mH = mH, this.size = mH.length
	}, this.sK = function() {
		this.mH = null
	}, this.mI = function(size) {
		for (var db = 0, mH = this.mH, kK = this.fx + size - 1, eD = this.fx; eD <= kK; eD++) db |= (mH[eD >> 3] >> 7 - (7 & eD) & 1) << kK - eD;
		return this.fx += size, this.fx > 8 * this.size && console.log("error unwrapper"), db
	}, this.aIu = function(size) {
		for (var dl = new Array(size), eD = 0; eD < size; eD++) dl[eD] = this.mI(10);
		return h.ox(dl)
	}, this.aIv = function(aEA) {
		return this.size === ab.aIw(aEA)
	}
}

function cf() {
	this.aEx = 0, this.aEy = 0, this.aEt = 0, this.aEu = 0, this.aEv = 0, this.aEw = 0, this.a1U = [0, 0, 0, 0], this.kJ = function() {
		this.aEx = p.je(), this.aEy = p.gB(), this.aEt = -this.aEx, this.aEu = -this.aEy, this.aEv = aK.g3 / h6, this.aEw = aK.g9 / h6, this.a1U[0] = Math.floor(this.aEt), this.a1U[1] = Math.floor(this.aEu), this.a1U[2] = Math.floor(this.a1U[0] +
			this.aEv + 1), this.a1U[3] = Math.floor(this.a1U[1] + this.aEw + 1), ay.a1R = !0
	}
}

function c3() {
	var xj, jw;
	this.cq = function() {
		xj = 1, jw = 0
	}, this.i5 = function() {
		0 < xj && (jw = 0 === jw ? b3.dY + 16 : jw, xj = (xj -= .001 * (b3.dY - jw)) < 0 ? 0 : xj, jw = b3.dY, b3.d1 = !0)
	}, this.gC = function() {
		0 < xj && (gD.fillStyle = "rgba(0,0,0," + xj + ")", gD.fillRect(0, 0, aK.g3, aK.g9))
	}
}

function c6() {
	function aJ0(map, fI, fJ, g3, g9) {
		map >= ap.a76 || (ap.pZ === map && (gD.fillStyle = aZ.l9, gD.fillRect(fI, fJ, g3, g9), gD.fillStyle = aZ.gE), gD.strokeRect(fI, fJ, g3, g9), gD.fillText(ap.ih.pY[map].name, Math.floor(fI + .5 * g3), Math.floor(fJ + .55 * g9)))
	}
	this.sv = !1, this.a4h = [0, 0, 0, 0], this.show = function() {
		this.sv = !0, this.resize(), b3.d1 = !0
	}, this.resize = function() {
		var aGE = eR(ap.a76 + ap.a76 % 2, 2),
			aGE = aK.g9 - aGE * b0.gap;
		b7.cv.ft() ? this.a4h[2] = Math.floor(.75 * aK.min) : this.a4h[2] = Math.floor(.5 * aK.min), this.a4h[3] = Math.floor(1.25 * this.a4h[2]), this.a4h[3] > aGE && (this.a4h[3] = aGE, this.a4h[2] = Math.floor(aGE / 1.2)), this.a4h[0] = Math
			.floor((aK.g3 - this.a4h[2]) / 2), this.a4h[1] = Math.floor((aK.g9 - this.a4h[3]) / 2)
	}, this.sX = function(fI, fJ) {
		return !(fI < this.a4h[0] || fJ < this.a4h[1] || fI > this.a4h[0] + this.a4h[2] || fJ > this.a4h[1] + this.a4h[3])
	}, this.g6 = function(fI, fJ) {
		var xB, aGE = eR(ap.a76 + ap.a76 % 2, 2);
		return b3.d1 = !0, fI < this.a4h[0] || fJ < this.a4h[1] || fI > this.a4h[0] + this.a4h[2] || fJ > this.a4h[1] + this.a4h[3] ? !(this.sv = !1) : (xB = Math.floor(.17 * this.a4h[3]), fJ < this.a4h[1] + xB ? fI > this.a4h[0] + this.a4h[2] -
			xB && (this.sv = !1) : (fJ = (fJ = Math.floor(aGE * (fJ - this.a4h[1] - xB - .00576 * aK.fu) / (this.a4h[3] - xB - .01152 * aK.fu))) < 0 ? 0 : aGE - 1 < fJ ? aGE - 1 : fJ, fI > this.a4h[0] + this.a4h[2] / 2 && (fJ += aGE), fJ >=
				ap.a76 || ap.d2(fJ, Math.floor(16384 * Math.random()))), !0)
	}, this.gC = function() {
		var eD, jb, xB = Math.floor(.17 * this.a4h[3]),
			aGE = eR(ap.a76 + ap.a76 % 2, 2),
			gap = .6 * .01152 * aK.fu,
			a4x = (this.a4h[3] - xB - (aGE + 1) * gap) / aGE,
			qP = Math.floor((this.a4h[2] - 3 * gap) / 2);
		for (gD.lineWidth = b0.ud, aY.fy.textAlign(gD, 1), aY.fy.textBaseline(gD, 1), gD.fillStyle = aZ.kY, gD.fillRect(this.a4h[0], this.a4h[1] + xB, this.a4h[2], this.a4h[3] - xB), gD.fillStyle = aZ.l9, gD.fillRect(this.a4h[0], this.a4h[1],
				this.a4h[2], xB), gD.strokeStyle = aZ.gE, gD.strokeRect(this.a4h[0], this.a4h[1], this.a4h[2], this.a4h[3]), gD.fillStyle = aZ.gE, gD.fillRect(this.a4h[0], this.a4h[1] + xB, this.a4h[2], 2), gD.font = aY.fy.fz(1, .48 * xB), gD
			.fillText("Maps", Math.floor(this.a4h[0] + this.a4h[2] / 2), Math.floor(this.a4h[1] + .55 * xB)), gD.font = aY.fy.fz(1, .48 * a4x), eD = aGE - 1; 0 <= eD; eD--) jb = Math.floor(this.a4h[1] + xB + gap + eD * (a4x + gap)), aJ0(eD, this
			.a4h[0] + gap, jb, qP, a4x), aJ0(eD + aGE, this.a4h[0] + qP + 2 * gap, jb, qP, a4x);
		j.vX(Math.floor(this.a4h[0] + this.a4h[2] - .7 * xB), Math.floor(this.a4h[1] + .3 * xB), Math.floor(.4 * xB)), gD.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function cJ() {
	this.size = 0, this.fx = 0, this.mH = null, this.cq = function(mH) {
		this.fx = 0, this.mH = mH, this.size = mH.length
	}, this.d2 = function(aEA) {
		return this.cq(new Uint8Array(this.aIw(aEA))), this.mH
	}, this.sK = function() {
		this.mH = null
	}, this.os = function(size, wk) {
		for (var mH = this.mH, kK = this.fx + size - 1, eD = this.fx; eD <= kK; eD++) mH[eD >> 3] |= (wk >> kK - eD & 1) << 7 - (7 & eD);
		this.fx += size, this.fx > 8 * this.size && console.log("error wrapper")
	}, this.aJ1 = function(size) {
		for (var mH = this.mH, kK = this.fx + size, eD = this.fx; eD < kK; eD++) mH[eD >> 3] &= 255 ^ 128 >>> (7 & eD)
	}, this.aIw = function(aEA) {
		return aEA + 7 >> 3
	}, this.aJ2 = function(dl, ha, kK, aJ3) {
		for (var eD = ha; eD < kK; eD++) this.os(aJ3, dl[eD])
	}
}
setTimeout(bD, 1e4), window.onload = function() {
	bD()
};