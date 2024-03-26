var a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, aA, aB, aC, aD, aE, aF, aG, aH, aI, aJ, aK, aL, aM, aN, aO, aP, aQ, aR, aS, aT, aU, aV, aW, aX, aY, aZ, aa, ab, ac, ad, ae, af,
	ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, at, au, av, aw, ax, ay, az, b0, b1, b2, b3, b4, b5, b6, b7, b8, b9, bA, bB, bC, d5, d6, d7, d8, d9, dA, dB, dw, dx, dy, dz, e0, e1, e2, e3, e4, e5, e6, e7, e8, hg, he, hf, hO;

function bD() {
	var ct;
	a || (bF(), bG(), ai = new bH, ah = new bI, b = new bJ, c = new bK, d = new bL, e = new bM, f = new bN, g = new bO, h = new bP, i = new bQ, j = new bR, k = new bS, l = new bT, m = new bU, n = new bV, o = new bW, p = new bX, q = new bY, r =
		new bZ, s = new ba, t = new bb, u = new bc, v = new bd, w = new be, x = new bf, y = new bg, z = new bh, a0 = new bi, a1 = new bj, a2 = new bk, a3 = new bl, a4 = new bm, a5 = new bn, a6 = new bo, a7 = new bp, aM = new bq, a9 = new br, aA =
		new bs, aB = new bt, aN = new bu, aL = new bv, aC = new bw, aD = new bx, aE = new by, aF = new bz, aK = new c0, aG = new c1, aH = new c2, aI = new c3, aJ = new c4, aO = new c5, aP = new c6, aQ = new c7, aR = new c8, aS = new c9, aT =
		new cA, aU = new cB, aW = new cC, aX = new cD, aY = new cE, aZ = new cF, aa = new cG, ab = new cH, ac = new cI, ad = new cJ, ae = new cK, af = new cL, ag = new cM, aj = new cN, ak = new cO, al = new cP, am = new cQ, an = new cR, ao =
		new cS, ap = new cT, aq = new cU, ar = new cV, at = new cW, aV = new cX, b7 = new cY, a = new cZ, b8 = new ca, b9 = new cb, b4 = new cc, b5 = new cd, aw = new ce, ax = new cf, ay = new cg, az = new ch, b1 = new ci, b2 = new cj, b3 =
		new ck, bA = new cl, b0 = new cm, bB = new cn, bC = new co, a.cq(), b7.cq(), aK.cr(), b9.cq(), aV.cq(), bC.cq(), aY.cq(), a3.cq(), aN.cq(), ac.cq(), ae.cq(), ap.cq(), cs(), (ct = document.getElementById("usernameField")) && document.body
		.removeChild(ct), au = new cu, aK.cq(), b7.cv.cw(), b3.cq(), b0.cq(), aw.cq(), (b6 = new cx).cq(), av = new cy, (a8 = new cz).cq(), aL.cq(), a5.d0(), at.cq(), a9.cq(), x.cq(), aT.cq(), aN.cq(), q.cq(), a7.cq(), ag.cq(), a1.cq(), b3.d1 = !
		0, setTimeout(function() {
			ap.d2(2, 14071)
		}, 0), af.d3(), a.d4 = 1)
}

function cZ() {
	this.cq = function() {
		d5 = 2, d6 = 1028, d8 = 16, d7 = "23 Mar 2024 (1.93.5)", d9 = 0 <= window.location.hostname.toLowerCase().indexOf("territorial.io"), dB = function() {
			try {
				return window.self !== window.top
			} catch (dD) {
				return !0
			}
		}(), dA = (new Date).getTime() % 1024
	}, this.d4 = 0
}

function co() {
	this.id = new dE, this.cq = function() {
		this.id.cq()
	}
}

function dE() {
	this.cq = function() {
		0 === b9.dF.data[181].value && (b9.dF.dG(180, Math.floor(Math.random() * ai.pow(30))), b9.dF.dG(181, Math.floor((new Date).getTime() / 36e5)))
	}
}

function cW() {
	this.dH = new dI, this.dJ = new dK, this.cq = function() {
		b7.cv.dL()
	}
}

function dI() {
	var dM = !1,
		dN = 0;

	function dP(dW) {
		console.log("Video Ad Completed: " + dW)
	}

	function dO() {
		return 0 === b7.id && d9
	}

	function dV() {
		return dO() && void 0 !== aiptag.adplayer && aiptag.adplayer.startVideoAd && aipAPItag.showCMPButton && aipAPItag.hideCMPButton && (0 === dN && (dN = b3.da), b3.da > dN + 500)
	}
	this.cq = function() {
		var dS;
		dO() && (dM = !0, window.aiptag = window.aiptag || {
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
				AIP_COMPLETE: dP
			})
		}), (dS = document.createElement("div")).id = "videoad", document.body.appendChild(dS), (dS = document.createElement("script")).async = !0, dS.src = "", document.head.appendChild(dS))
	}, this.dU = function() {
		return !!dV() && (aiptag.cmd.player.push(function() {
			aiptag.adplayer.startVideoAd()
		}), !0)
	}, this.dX = function() {
		dV() && (dM ? 0 === x.dY() && !ar.dZ() || (dM = !1, aipAPItag.hideCMPButton()) : 0 !== x.dY() || ar.dZ() || (dM = !0, aipAPItag.showCMPButton()))
	}, this.showCMPScreen = function() {
		dV() && aipAPItag.showCMPScreen()
	}
}

function dK() {
	var da = 2e4;
	this.show = function() {
		if (b3.da < da) return !1;
		da = b3.da + 135e4, b7.cv.dc(Math.floor(135e4))
	}
}

function cP() {
	this.dg = new Uint16Array(2), this.dh = new Uint32Array(2), this.di = new Uint8Array(4), this.dj = new Uint8Array(4), this.dk = new Uint32Array(5), this.dl = new Uint32Array(8), this.dm = function(dn, dp) {
		return dn[0] = dp, dn
	}, this.dq = function(dn, dp, dr) {
		return dn[0] = dp, dn[1] = dr, dn
	}, this.ds = function(dn, dp, dr, dt) {
		return dn[0] = dp, dn[1] = dr, dn[2] = dt, dn
	}, this.du = function(dn, dp, dr, dt, dv) {
		return dn[0] = dp, dn[1] = dr, dn[2] = dt, dn[3] = dv, dn
	}
}

function e9() {
	e1 = 0, e2 = 2048, e3 = new Uint32Array(4 * e2), e4 = 0, e5 = new Uint32Array(e2), (e6 = new Int32Array(4))[0] = -4 * ap.eA, e6[1] = 4, e6[2] = -e6[0], e6[3] = -e6[1], e7 = new Uint8Array(ap.eA * ap.eB)
}

function eC(player) {
	dx = player, e8 = !1, eD(), eE();
	for (var eF = a4.eG(dx) - 1; 0 <= eF; eF--) 0 === a4.eH(dx, eF) && (dw = eF, eI());
	e8 && eJ()
}

function eJ() {
	eK(), eL()
}

function eI() {
	e0 = a4.eM(dx, dw), dy = a4.eN(dx, dw), eO(), (0 !== e1 && (eQ(), eR()) ? eS : eP)()
}

function eR() {
	return dz = eT(dy, e1), eU < dz
}

function eQ() {
	for (var eF = e1 - 1; 0 <= eF; eF--) e7[eT(e3[eF], 4)] = 0
}

function eP() {
	var db;
	1 === a4.eG(dx) && c.eV(dx), dx !== eW ? (eX[dx] += dy, a5.eY(dx)) : (db = eX[dx], eX[dx] += dy, a5.eY(dx), b1.eZ[13] -= eX[dx] - db), a4.ea(dx, dw)
}

function eD() {
	var eF, eb = ec[dx].length;
	for (e4 = 0, eF = (e2 < eb ? e2 : eb) - 1; 0 <= eF; eF--) e5[e4++] = ec[dx][eF]
}

function eE() {
	for (var eF = ec[dx].length - 1; 0 <= eF; eF--) a2.ed(ec[dx][eF]) && a2.ee(ec[dx][eF], dx);
	ec[dx] = []
}

function eO() {
	e1 = 0, (e0 === ef ? eg : eh)()
}

function eh() {
	for (var ei, ej, eF, ek = 3; 0 <= ek; ek--)
		for (eF = e4 - 1; 0 <= eF; eF--) ej = eT(ei = e5[eF] + e6[ek], 4), 0 === e7[ej] && a2.el(ei) && a2.em(ei) === e0 && (e7[ej] = 1, e3[e1++] = ei)
}

function eg() {
	for (var ei, ej, eF, ek = 3; 0 <= ek; ek--)
		for (eF = e4 - 1; 0 <= eF; eF--) ej = eT(ei = e5[eF] + e6[ek], 4), 0 === e7[ej] && a2.en(ei) && (e7[ej] = 1, e3[e1++] = ei)
}

function eS() {
	eo() ? (ep(), e0 !== ef && eq()) : eP()
}

function eq() {
	er(), es(et[e0]), es(eu[e0]), ev(ec[e0]), ew(eu[e0]), ew(ex[e0]), ey(), ez()
}

function ep() {
	e8 = !0, a4.f0(dx, dw, dy), f1[dx] += e1, f2(), f3()
}

function eo() {
	return (e0 === ef ? f4 : f5)()
}

function f5() {
	var f6 = e1 * eU,
		f7 = f8(),
		f9 = fA(),
		f7 = f6 + 2 * f7 + f9,
		fC = dz * e1;
	return f7 < fC ? (dy -= f7, fD(f7 - f6, f9), !0) : (dy -= fC, fD(fC - f6, f9), !1)
}

function fD(fC, f9) {
	if (0 < f9) {
		if (!(f9 <= fC)) return a4.fE(e0, dx, f9 - fC), void(fC = 0);
		a4.fE(e0, dx, 0), fC -= f9
	}
	fC = eT(fC, 2), eX[e0] >= fC ? eX[e0] -= fC : eX[e0] = 0
}

function fA() {
	return a4.fF(e0, dx)
}

function f8() {
	return ai.fG(e1 * eX[e0], 1 + ai.fG(10 * f1[e0], 16))
}

function f4() {
	return dy -= e1 * eU, !0
}

function f3() {
	for (var eF = e1 - 1; 0 <= eF; eF--) ec[dx].push(e3[eF]), et[dx].push(e3[eF]), a2.ee(e3[eF], dx)
}

function cU() {
	var fH = 0,
		fI = 0;
	this.fJ = function(fK, fL) {
		fH = fK, fI = fL
	}, this.fM = function() {
		var fT, fV, fX, fZ;
		fN || j.fO || (aY.fP.fQ(0) || aY.fP.fQ(1)) && aY.fP.fR(eW) && (fT = aj.fU(fH), fV = aj.fW(fI), fX = aj.fY(fT, fV), fZ = aj.fa(fX), aj.fb(fT, fV)) && (fc ? a2.ed(fZ) && aW.fd.fe(fX) : ak.ff.fg(fX) || ak.ff.fh(fH, fI) || a2.fi(fZ) || (a2
			.fj(fZ) ? ak.ff.fk(eW, fX) && aW.fd.fl(o.fm(), fX) : a2.en(fZ) ? fn(eW) ? aW.fd.fo(o.fm(), ef) : fp(eW, ef) ? aO.fq(ef, o.fm()) : ak.ff.fk(eW, fX) && aW.fd.fl(o.fm(), fX) : (fT = a2.em(fZ)) !== eW && (fr(fT, eW) ? fs(eW, fT) ?
				aW.fd.fo(o.fm(), fT) : fp(eW, fT) ? aO.fq(fT, o.fm()) : ak.ff.fk(eW, fX) && aW.fd.fl(o.fm(), fX) : ak.ff.fk(eW, fX) && aW.fd.fl(o.fm(), fX))))
	}
}

function ce() {
	var ft = 1,
		fu = [null, null];
	this.cq = function() {
		ft = .72 * (b7.cv.fv() ? .0011 : .001) * aK.fw;
		for (var eF = 1; 0 <= eF; eF--) fu[eF] && this.fx(eF, fu[eF].fy)
	}, this.fx = function(fz, fy) {
		fu[fz] = {
			fy: fy,
			font: aY.g0.g1(1, 10)
		}, this.g2(fz)
	}, this.g2 = function(fz) {
		var fy, fontSize, g4, g5, g6;
		a1.g3() && fu[fz] && (fy = fu[fz].fy, fontSize = Math.floor(.15 * ft * a1.get(13).height), g4 = aY.g0.g1(1, fontSize), g5 = n.measureText(fy, g4), (g6 = .8 * ft * a1.get(13).width) < g5 && (fontSize = Math.floor(fontSize * g6 / g5), g4 =
			aY.g0.g1(1, fontSize)), fu[fz] = {
			fy: fy,
			font: g4
		}, b3.d1 = !0)
	}, this.g7 = function() {
		return Math.floor(ft * a1.get(13).height)
	}, this.g8 = function(g9, gA) {
		return !!a1.g3() && !(g9 < b0.gap || gA < aK.gB - a8.g5 - ft * a1.get(13).height - 2 * b0.gap || gA > aK.gB - a8.g5 - 2 * b0.gap || (g9 < b0.gap + ft * a1.get(13).width ? (b6.gC(0), 0) : g9 < 2 * b0.gap + ft * a1.get(13).width || !(g9 <
			2 * b0.gap + 2 * ft * a1.get(13).width) || (b6.gC(1), 0)))
	}, this.gD = function() {
		return Math.floor(aK.gB - a8.g5 - ft * a1.get(13).height - 2 * b0.gap)
	}, this.gE = function() {
		if (a1.g3()) {
			gF.imageSmoothingEnabled = !0, gF.setTransform(ft, 0, 0, ft, b0.gap, this.gD()), gF.drawImage(a1.get(14), 0, 0), gF.setTransform(ft, 0, 0, ft, 2 * b0.gap + ft * a1.get(13).width, this.gD()), gF.drawImage(a1.get(13), 0, 0);
			for (var eF = 1; 0 <= eF; eF--) fu[eF] && (gF.setTransform(1, 0, 0, 1, (1 + eF) * b0.gap + eF * ft * a1.get(13).width, this.gD()), gF.font = fu[eF].font, aY.g0.textBaseline(gF, 1), aY.g0.textAlign(gF, 1), gF.fillStyle = aZ.gG, gF
				.fillText(fu[eF].fy, .5 * ft * a1.get(13).width, .86 * ft * a1.get(13).height));
			gF.setTransform(1, 0, 0, 1, 0, 0)
		}
	}
}

function gH(gI, size, gJ, gK, font) {
	var eF, gN = .2,
		gO = document.createElement("canvas"),
		gP = gO.getContext("2d", {
			alpha: !1
		});
	for (gO.width = gI, gO.height = gI, gP.font = size + font, gP.textAlign = "center", gP.textBaseline = "middle", gP.fillStyle = "red", eF = 0; eF < gJ.length; eF++) gP.fillText(gJ[eF], .5 * gI, .5 * gI);
	return -1 < (gO = function(gL) {
		var eF, gR;
		for (eF = gL.data.length - 4; 0 <= eF; eF -= 4)
			if (gR = gL.data[eF], gK <= gR) return Math.floor(eF / (4 * gI));
		return -1
	}(gP.getImageData(0, 0, gI, gI))) && (gN = (gO - .5 * gI + .1 * size) / size), Math.max(gN, 0)
}

function cN() {
	this.gS = new Int16Array(4), this.gT = new Int16Array(4), this.cq = function() {
		var eF;
		for (this.gS[0] = -ap.eA, this.gS[1] = 1, this.gS[2] = ap.eA, this.gS[3] = -1, eF = 0; eF < 4; eF++) this.gT[eF] = 4 * this.gS[eF]
	}, this.gU = function(gV, gW) {
		var gX = this.gY(gW) - this.gY(gV),
			gW = this.ga(gW) - this.ga(gV),
			gV = gX >>> 31 << 1;
		return 5 + gV + (1 - gV) * (1 - (gW >>> 31 << 1)) * (Math.abs(gX) - Math.abs(gW) >>> 31) & 3
	}, this.ge = function(gV, gW, gf) {
		return gf % 2 == 0 ? gf + (1 - gf) * (1 - (this.gY(gW) - this.gY(gV) >>> 31 << 1)) + 4 & 3 : gf + (2 - gf) * (1 - (this.ga(gW) - this.ga(gV) >>> 31 << 1)) + 4 & 3
	}, this.gh = function(ei, fX) {
		for (var gW, gi, gk = eu[ei], eb = gk.length, g5 = ap.eA, gl = this.gY(fX), gm = this.ga(fX), gn = gk[0] >> 2, min = this.go(gl, gm, gn), eF = 1; eF < eb; eF++)(gi = (gi = gl - (gW = gk[eF] >> 2) % g5) * gi + (gi = gm - ~~((.5 + gW) /
			g5)) * gi) < min && (min = gi, gn = gW);
		return gn
	}, this.gp = function(player, fZ) {
		return !a2.en(fZ) && player === a2.em(fZ)
	}, this.go = function(fT, fV, fX) {
		return (fT -= this.gY(fX)) * fT + (fV -= this.ga(fX)) * fV
	}, this.gq = function(gr, gs, gt) {
		gr = this.gv(gr) - this.gw(gt), gs = this.gy(gs) - this.gz(gt);
		return Math.sqrt(gr * gr + gs * gs)
	}, this.h0 = function(gV, gW) {
		var gu = this.gY(gV) - this.gY(gW),
			gV = this.ga(gV) - this.ga(gW);
		return Math.sqrt(gu * gu + gV * gV)
	}, this.h1 = function(ei) {
		return ei < h2 && 0 !== h3[ei] && 2 !== h4[ei]
	}, this.h5 = function(ei, h6) {
		return ai.fG(h6 * eX[ei], 1e3)
	}, this.gv = function(gr) {
		return 16 * (gr + h7) / h8
	}, this.gy = function(gs) {
		return 16 * (gs + h9) / h8
	}, this.fU = function(gr) {
		return Math.floor((gr + h7) / h8)
	}, this.fW = function(gs) {
		return Math.floor((gs + h9) / h8)
	}, this.fb = function(fT, fV) {
		return 1 <= fT && 1 <= fV && fT < ap.eA - 1 && fV < ap.eB - 1
	}, this.gY = function(fX) {
		return fX % ap.eA
	}, this.ga = function(fX) {
		return ai.fG(fX, ap.eA)
	}, this.fY = function(fT, fV) {
		return fV * ap.eA + fT
	}, this.hA = function(fX) {
		var fT = this.gY(fX),
			fX = this.ga(fX);
		return 0 < fT && fT < ap.eA - 1 && 0 < fX && fX < ap.eB - 1
	}, this.fa = function(fX) {
		return fX << 2
	}, this.hB = function(fX) {
		return ap.eA * this.ga(fX) * 256 + (this.gY(fX) << 4)
	}, this.hC = function(fX) {
		return this.hB(fX) + 8 + (ap.eA << 7)
	}, this.hD = function(gt) {
		return ap.eA * (this.gz(gt) >> 4) + (this.gw(gt) >> 4)
	}, this.hE = function(gt) {
		gt = this.hD(gt);
		return (this.gY(gt) >> 5) + ak.hF.hG * (this.ga(gt) >> 5)
	}, this.gw = function(gt) {
		return gt % (ap.eA << 4)
	}, this.gz = function(gt) {
		return ai.fG(gt, ap.eA << 4)
	}, this.hH = function(fX, gf) {
		return fX + this.gS[gf]
	}, this.hI = function(fZ, gf) {
		return fZ + this.gT[gf]
	}
}

function hJ(player) {
	return al.dl[1] = ec[player].length, al.dl[0] === ef ? hK(player) : hL(player, al.dl[0]), 0 !== al.dl[1] || 0 !== ec[player].length
}

function hM(player) {
	hN && (hO[player] = 1), hP(al.dl[1], player), a4.hQ(player, al.dh[0], al.dl[0]), c.hR(player, !1)
}

function hS(player, hT, eb, hU) {
	var hV = eT(3 * eX[player], 256);
	hU -= hU >= eT(eX[player], 2) ? hV : 0, hP(eb, player), a4.hQ(player, hU, hT), eX[player] -= hU + hV, c.hR(player, !1)
}

function hL(player, hT) {
	for (var gf, eF = et[player].length - 1; 0 <= eF; eF--)
		if (a2.hW(et[player][eF]))
			for (gf = 3; 0 <= gf; gf--)
				if (a2.el(et[player][eF] + e6[gf]) && a2.em(et[player][eF] + e6[gf]) === hT) {
					ec[player].push(et[player][eF]);
					break
				}
}

function hP(size, player) {
	for (var eF = ec[player].length - 1; size <= eF; eF--) a2.hX(ec[player][eF], player)
}

function hK(player) {
	for (var gf, eF = et[player].length - 1; 0 <= eF; eF--)
		if (a2.hW(et[player][eF]))
			for (gf = 3; 0 <= gf; gf--)
				if (a2.en(et[player][eF] + e6[gf])) {
					ec[player].push(et[player][eF]);
					break
				}
}

function hY(player, hZ) {
	var eF, ha, gf, hb, eb = et[player].length,
		gg = 256 <= eb ? 12 : 32 <= eb ? 6 : 1,
		hc = eb - 1 - aL.hd(gg);
	he = 0;
	loop: for (eF = hc; 0 <= eF; eF -= gg)
		for (gf = 3; 0 <= gf; gf--)
			if ((hb = a2.en(et[player][eF] + e6[gf]) ? ef : a2.em(et[player][eF] + e6[gf])) === ef || a2.el(et[player][eF] + e6[gf]) && hb !== player && (hZ || fr(player, hb))) {
				for (ha = he - 1; 0 <= ha; ha--)
					if (hf[ha] === hb) continue loop;
				if (hf[he] = hb, ++he >= hg) return !0
			}
	return 0 < he
}

function hh(player, hZ) {
	var eF, gf, hb;
	for (he = 0, eF = et[player].length - 1; 0 <= eF; eF--)
		for (gf = 3; 0 <= gf; gf--)
			if ((hb = a2.en(et[player][eF] + e6[gf]) ? ef : a2.em(et[player][eF] + e6[gf])) === ef || a2.el(et[player][eF] + e6[gf]) && hb !== player && (hZ || fr(player, hb))) return hf[he++] = hb, !0;
	return !1
}

function hi() {
	for (var hj, eF = he - 1; 0 <= eF; eF--)
		if (hf[eF] === ef) {
			for (he--, hj = eF; hj < he; hj++) hf[hj] = hf[hj + 1];
			return !0
		} return !1
}

function hk(player) {
	for (var hj, eF = he - 1; 0 <= eF; eF--)
		if (a4.hl(player, hf[eF]))
			for (he--, hj = eF; hj < he; hj++) hf[hj] = hf[hj + 1];
	return 0 === he
}

function hm() {
	for (var eF = he - 1; 0 <= eF; eF--)
		if (hf[eF] >= h2) return !0;
	return !1
}

function hn() {
	for (var eF = he - 1; 0 <= eF; eF--) hf[eF] < h2 && (hf[eF] = hf[--he]);
	return 0 < he
}

function ho(player) {
	for (var hj, hp = hf[0], hq = eX[hp] + a4.fF(hp, player), eF = he - 1; 1 <= eF; eF--)(hj = eX[hf[eF]] + a4.fF(hf[eF], player)) < hq && (hp = hf[eF], hq = hj);
	return hp
}

function hr(player) {
	var gB, hs = hf[0];
	if (1 !== he)
		for (var ht = eT(hu[player] + hv[player], 2), hw = eT(hx[player] + hy[player], 2), hz = i0(ht - eT(hu[hs] + hv[hs], 2)) + i0(hw - eT(hx[hs] + hy[hs], 2)), eF = he - 1; 1 <= eF; eF--)(gB = i0(ht - eT(hu[hf[eF]] + hv[hf[eF]], 2)) + i0(hw - eT(
			hx[hf[eF]] + hy[hf[eF]], 2))) < hz && (hz = gB, hs = hf[eF]);
	return hs
}

function i1() {
	return hf[aL.hd(he)]
}

function cs() {
	hg = 8, he = 0, hf = new Uint16Array(hg)
}

function i2() {
	hO = hN ? new Uint8Array(ef) : null
}

function i3(player, hU) {
	var i4;
	hN && (hO[player] = 0), !a4.i5(player) || hU < 60 || (0 === et[player].length ? ak.i6.i7(player) || (b.i8(player - h2, 200), i9(player, hU, b.hU[player - h2], a5.iA(player))) : 0 < eu[player].length && aL.random() < aL.value(eu[player].length >
		et[player].length ? 7 : 3) && ak.i6.i7(player) || (i4 = a5.iA(player), eX[player] > i4 && hU < eX[player] - i4 && (hU = eX[player] - i4), hN ? iB(player, hU, b.hU[player - h2], i4) : iC(player, hU, b.hU[player - h2])))
}

function iB(player, hU, iD, i4) {
	var hT;
	hY(player, !1) || hh(player, !1) ? (hO[player] = 1, hk(player) || (hi() ? (iE(player, hU), iF(player, ef, iD)) : (aL.iG(b.iH[iD]) ? iI(player, hU, hT = ho(player)) : (hm() && aL.iG(b.iJ[iD]) && hn(), iI(player, hU, hT = hr(player))), iF(player,
		hT, iD)))) : 0 < eu[player].length && aL.random() < aL.value(60) && ak.i6.i7(player) || (b.i8(player - h2, 200), i9(player, hU, iD, i4))
}

function iK(player, hU) {
	hY(player, !1) || hh(player, !1) ? (hO[player] = 1, hi() ? iE(player, hU) : iI(player, hU, i1())) : i9(player, hU, 0, 0)
}

function iF(player, hT, iD) {
	3 <= iD && 2142 < b3.iL() && (hT === ef || eX[hT] < eT(eX[player], 20)) && b.i8(player - h2, 25)
}

function i9(player, hU, iD, i4) {
	var eF, hj, iM;
	if (0 !== b4.iN[player] && !(5 === iD && eX[player] < i4 || 4 === iD && eX[player] < eT(i4, 2)))
		for (eF = aL.hd(iO), hj = 0; hj < iO; hj++)
			if (iM = iP[(hj + eF) % iO], b4.iN[iM] === b4.iN[player] && 1 === hO[iM]) return void aW.iQ.iR(player, iM, hU)
}

function iC(player, hU, iD) {
	!hY(player, !0) && !hh(player, !0) || hk(player) || (hi() ? iE(player, hU) : aL.iG(b.iH[iD]) ? iI(player, hU, ho(player)) : (hm() && aL.iG(b.iJ[iD]) && hn(), iI(player, hU, hr(player))))
}

function iS(player, hU) {
	(hY(player, !0) || hh(player, !0)) && (hi() ? iE(player, hU) : iI(player, hU, i1()))
}

function iI(player, hU, hT) {
	eT(eX[player], 8) > eX[hT] && (hU = (iT = eT(11 * eX[hT], 5)) < hU ? hU : iT);
	var iT = ec[player].length;
	hL(player, hT), hS(player, hT, iT, hU)
}

function iE(player, hU) {
	var hT = ef,
		eb = ec[player].length;
	return hK(player), ec[player].length !== eb && (hS(player, hT, eb, hU), !0)
}
self.aiCommand746 = function(dd) {
	0 === dd ? bD() : 1 !== dd || 1 !== b7.id || b7.de < 14 || x.df()
};
var h2, qz, ih, qy, iU = [60, 74, 112, 200, 256, 512];

function bJ() {
	var iV, iW, iX, iY, iZ, ia;

	function iq(eF) {
		iV[eF] = 1 + eT(iZ[eF] * aL.random(), 10 * aL.value(100))
	}
	this.ib = ["Very Easy", "Easy", "Normal", "Hard", "Harder", "Very Hard"], this.ic = [97, 95, 93, 90, 87, 84], this.iJ = [98, 95, 70, 40, 20, 0], this.ie = [85, 70, 50, 30, 7, 3], this.iH = [0, 0, 5, 25, 50, 90], this.hU = null, this.cq =
		function() {
			var eF, ig;
			if (iV = new Uint8Array(ih), iW = new Uint16Array(ih), iX = new Uint16Array(ih), iY = new Uint8Array(ih), this.hU = new Uint8Array(ih), iZ = new Uint16Array(ih), ia = new Uint16Array(ih), aU.ii) {
				if (aU.ij.ik)
					for (eF = ih - 1; 0 <= eF; eF--) this.hU[eF] = aU.ij.ik[eF + 1]
			} else if (9 === il) this.im();
			else if (io)
				if (hN)
					for (eF = ih - 1; 0 <= eF; eF--) this.hU[eF] = z.ip[b4.iN[eF + h2] - 1].ek;
				else
					for (eF = ih - 1; 0 <= eF; eF--) this.hU[eF] = z.ip[0].ek;
			else
				for (ig = 8 === il ? 1 : 0, eF = ih - 1; 0 <= eF; eF--) this.hU[eF] = ig;
			for (eF = ih - 1; 0 <= eF; eF--) this.hU[eF] <= 2 ? (iY[eF] = 5, iZ[eF] = ia[eF] = 1040, 0 === this.hU[eF] ? (iW[eF] = 1e3, iX[eF] = 1e3) : 1 === this.hU[eF] ? (iW[eF] = 1e3, iX[eF] = 920, iZ[eF] = ia[eF] = 1100) : (iW[eF] = 825, iX[eF] =
				750)) : this.hU[eF] <= 4 ? (iY[eF] = 1 + aL.hd(20), 3 === this.hU[eF] ? (iW[eF] = iX[eF] = 500, iZ[eF] = ia[eF] = 1e3) : (ia[eF] = 250 + aL.hd(1501), iZ[eF] = 500 + aL.hd(501), iW[eF] = 300 + aL.hd(201), iX[eF] = 100 + aL.hd(
				201))) : (iZ[eF] = 1e3, ia[eF] = 1e3, iY[eF] = 35 + aL.hd(16), iW[eF] = 300 + aL.hd(201), iX[eF] = 50 + aL.hd(101)), iq(eF)
		}, this.im = function() {
			for (var eF, fZ = 0, hj = 0; hj < 6; hj++) {
				for (eF = fZ + aM.ir[hj] - 1; fZ <= eF; eF--) this.hU[eF] = hj;
				fZ += aM.ir[hj]
			}
		}, this.i8 = function(is, value) {
			0 <= is && (iV[is] = value)
		}, this.i7 = function(is) {
			0 == --iV[is] && ! function(is) {
				! function(is) {
					iZ[is] !== ia[is] && (iZ[is] += iZ[is] < ia[is] ? 3 : -3);
					iW[is] !== iX[is] && (iW[is] += iW[is] < iX[is] ? iY[is] : -iY[is], iW[is] = (Math.abs(iW[is] - iX[is]) <= iY[is] ? iX : iW)[is]);
					iV[is] = eT(iZ[is], 10)
				}(is);
				var player = is + h2;
				i3(player, eT(iW[is] * eX[player], 1e3))
			}(is)
		}
}

function iv() {
	k.i7(), a6.i7(), t.iw(), aN.ix.i7(), ao.iy.iz()
}

function j0() {
	aO.i7(), d.i7(), a5.i7(), aR.i7(), aQ.i7(), c.i7(), e.i7(), ak.ix.i7(), j1(), s.i7(), aM.i7(), a6.i7(), a6.j2(), t.i7(), am.i7(), r.i7(), m.i7(), k.i7(), aS.i7(), o.i7(), aI.i7(), b1.i7(), b5.i7(), an.i7(), aN.ix.i7(), ar.i7(), aX.i7(), b3.i7()
}

function j3() {
	f.i7(), u.i7(), n.i7(), aF.i7(), aa.i7(), aJ.j4()
}

function j5() {
	s.j6(!1), m.j6(), t.j6(!1), r.j6(), o.j6(), aI.j6(), a6.j6(!1), b5.g2()
}

function j7() {
	a6.j6(!1) && (b3.d1 = !0), aN.ix.i7()
}

function bK() {
	var j8, j9, jA, jB, jC, jD;

	function jH(jJ) {
		for (var eF = j9 - 1; 0 <= eF; eF--) 0 === jB[jA[eF]] && f1[jA[eF]] >= jJ && eC(jA[eF])
	}

	function jF(player) {
		10 === jB[player] ? jB[player] = j8 : f1[player] < 1e3 ? jB[player] = 3 : f1[player] < 1e4 ? jB[player] = 2 : f1[player] < 6e4 ? jB[player] = 1 : jB[player] = 0
	}
	this.cq = function() {
		jC = jD = 0, j8 = 6, j9 = 0, jA = new Uint16Array(ef), jB = new Uint8Array(ef)
	}, this.i7 = function() {
		var eF;
		for (jC = b1.eZ[13], jD = eX[eW], eF = j9 - 1; 0 <= eF; eF--) 10 === jB[jA[eF]] ? jF(jA[eF]) : 0 == jB[jA[eF]]-- && (jF(jA[eF]), eC(jA[eF]));
		16e4 <= f1[jG[0]] && (jH(16e4), 3e5 <= f1[jG[0]]) && jH(3e5), f1[eW] > b1.eZ[7] && (b1.eZ[7] = f1[eW]), b1.eZ[14] += jD - eX[eW] + jC - b1.eZ[13]
	}, this.eV = function(player) {
		for (var ha, eF = j9 - 1; 0 <= eF; eF--)
			if (player === jA[eF]) {
				for (j9--, ha = eF; ha < j9; ha++) jA[ha] = jA[ha + 1];
				return
			}
	}, this.hR = function(player, jK) {
		for (var eF = j9 - 1; 0 <= eF; eF--)
			if (player === jA[eF]) return;
		jA[j9++] = player, jB[player] = jK ? 2 : 10
	}
}

function bL() {
	var size, i6;
	this.cq = function() {
		size = ih, i6 = new Uint16Array(ih);
		for (var eF = ih - 1; 0 <= eF; eF--) i6[eF] = eF
	}, this.i7 = function() {
		for (var eF = size - 1; 0 <= eF; eF--) 0 === h3[i6[eF] + h2] ? function(ha) {
			size--;
			for (var eF = ha; eF < size; eF++) i6[eF] = i6[eF + 1]
		}(eF) : b.i7(i6[eF])
	}
}

function bM() {
	var jN, jO, j9, jA, jB, jP, jQ, jR;

	function jT(eF) {
		var ha;
		for (j9--, ha = eF; ha < j9; ha++) jA[ha] = jA[ha + 1], jB[ha] = jB[ha + 1], jP[ha] = jP[ha + 1], jQ[ha] = jQ[ha + 1], jR[ha] = jR[ha + 1]
	}
	this.cq = function() {
		jN = 1, j9 = 0, jO = 2 * ef, jA = new Uint16Array(jO), jB = new Uint8Array(jO), jP = new Uint16Array(jO), jQ = new Uint32Array(jO), jR = new Uint32Array(jO)
	}, this.jS = function(fz, position) {
		jQ[fz] = position
	}, this.i7 = function() {
		for (var eF = j9 - 1; 0 <= eF; eF--) 0 == jB[eF]-- && (jB[eF] = 2, aC.i7(eF, jP[eF], jA[eF], jQ[eF], jR[eF]))
	}, this.eV = function(player, id) {
		for (var eF = j9 - 1; 0 <= eF; eF--)
			if (player === jA[eF] && id === jP[eF]) return void jT(eF)
	}, this.jU = function(player) {
		for (var eF = j9 - 1; 0 <= eF; eF--) player === jA[eF] && (aC.jV(player, jQ[eF]), jT(eF))
	}, this.hR = function(player, hc, jW) {
		if (jO <= j9) return 0;
		jA[j9] = player, jB[j9] = 0, jP[j9] = jN, jQ[j9] = hc, jR[j9] = jW;
		player = jN;
		return j9++, jN = 2 * jO < ++jN ? 1 : jN, player
	}, this.gE = function() {
		if (!(h8 < 40 || 0 === j9)) {
			var ha, fK, fL, eF, fontSize, jb, hU, jc = h7 / h8,
				jd = h9 / h8,
				je = (aK.g5 + h7) / h8,
				jf = (aK.gB + h9) / h8;
			for (aY.g0.textAlign(gF, 1), aY.g0.textBaseline(gF, 1), ha = j9 - 1; 0 <= ha; ha--) fK = a2.jg(jQ[ha]), fL = a2.gD(jQ[ha]), eF = jA[ha], jc - 1 < fK && fK < je && jd - 1 < fL && fL < jf && 0 !== h3[eF] && ((fontSize = Math.floor(.94 *
				h8 * a6.jh(eF))) < 6 || (fK = Math.floor(aK.g5 * (fK + .5 - jc) / (je - jc)), fL = Math.floor(aK.gB * (fL + .48 - jd) / (jf - jd)), gF.font = aY.g0.g1(1, fontSize), gF.fillStyle = aZ.ji, hU = a4.eN(eF, a4.jj(eF, jP[ha])),
				gF.fillText(b9.dF.data[7].value ? aY.jk.jl(hU) : jm[eF], fK, fL), (jb = Math.floor(.5 * fontSize)) < 6) || (gF.font = aY.g0.g1(1, jb), gF.fillText(b9.dF.data[7].value ? jm[eF] : aY.jk.jl(hU), fK, fL + Math.floor(.82 *
				fontSize))))
		}
	}
}

function bN() {
	var jn, jo, jp, jq, jr, js, jt, ju, jv, jw, jx, jy, jz, k0 = !1,
		k1 = !1;

	function k2(k3) {
		jy = b3.da, jp = jq = jo = 0, jr = (jz = 33) / k3, jn = 1 / (k3 / jz / 4), js = (aK.g5 / 2 + h7) / h8, jt = (aK.gB / 2 + h9) / h8, ju = h8
	}

	function kG(kI) {
		Math.abs(Math.log(jx / ju)) < .125 && (jx = kI * ju)
	}

	function kF(jc, jd, je, jf) {
		jv = (jc + je + 1) / 2, jw = (jd + jf + 1) / 2;
		je = aK.g5 / (je - jc + 1), jc = aK.gB / (jf - jd + 1);
		jx = .9 * (je < jc ? je : jc)
	}
	this.k4 = function() {
		return k0
	}, this.k5 = function() {
		k2(1), this.k6(0, 0, ap.eA - 1, ap.eB - 1), fc || fN || this.k7(eW, 3e3, !0, .3)
	}, this.k7 = function(player, k3, k8, zoom) {
		k9 || k0 && !k8 && k1 || 0 === f1[player] || (p.kA = !1, k1 = k8, k2(k3), function(player) {
			jv = (hv[player] + hu[player] + 1) / 2, jw = (hy[player] + hx[player] + 1) / 2
		}(player), function(zoom, player) {
			var gu = hu[player] - hv[player] + 1,
				player = hx[player] - hy[player] + 1,
				ha = aK.g5 / gu,
				hj = aK.gB / player,
				ha = (jx = ha < hj ? ha : hj, 0 !== zoom ? zoom : gu < 20 && player < 20 ? .5 : .9);
			jx *= ha, kG(7 / 8)
		}(zoom, player), k0 = !0, aB.kD())
	}, this.kE = function(k3) {
		fN || k9 || (p.kA = !1, k1 = !1, k2(k3), kF(0, 0, ap.eA - 1, ap.eB - 1), kG(7 / 8), k0 = !0, aB.kD())
	}, this.k6 = function(jc, jd, je, jf) {
		kF(jc, jd, je, jf), h8 = jx, p.kJ(jv, aK.g5 / 2), p.kK(jw, aK.gB / 2), ax.kL()
	}, this.kM = function() {
		return !(k0 && k1 || (k0 = !1))
	}, this.i7 = function() {
		var kP, kQ, ek, kT;
		k0 && (jo < .5 ? jq < jr && (jq += jr * jn, jp = jo) : 1 - jp < jo && (jq = (jq -= jr * jn) < jr * jn ? jr * jn : jq), jy = jy >= b3.da ? b3.da - 1 : jy, ek = b3.da - jy, jo = 1e3 < ek || 1 < (jo += jq * ek / jz) ? 1 : jo, jy = b3.da,
			ek = h8, kP = h7, kQ = h9, ek = (h8 = ju * Math.pow(jx / ju, jo)) / ek, kT = 1 - (ju * Math.pow(jx / ju, 1 - jo) - ju) / (jx - ju), p.kJ(js + kT * (jv - js), aK.g5 / 2), p.kK(jt + kT * (jw - jt), aK.gB / 2), a6.zoom(ek, (kP * ek -
				h7) / (1 - ek), (kQ * ek - h9) / (1 - ek)), ax.kL(), 1 <= jo && (k0 = !1, ay.kU = !0), b3.d1 = !0)
	}
}

function cF() {
	var iM = aY.g0;
	this.ji = iM.kV(0, 0, 0), this.kW = iM.kX(0, 0, 0, .7), this.kY = iM.kX(0, 0, 0, .5), this.kZ = iM.kX(0, 0, 0, .85), this.ka = iM.kX(0, 0, 0, .75), this.kb = iM.kX(0, 0, 0, .6), this.kc = iM.kX(0, 0, 0, .35), this.gG = iM.kV(255, 255, 255), this
		.kd = iM.kX(255, 255, 255, .3), this.ke = iM.kX(255, 255, 255, .6), this.kf = iM.kX(255, 255, 255, .4), this.kg = iM.kX(255, 255, 255, .25), this.kh = iM.kX(255, 255, 255, .85), this.ki = iM.kX(255, 255, 255, .75), this.kj = iM.kX(255, 255,
			255, .15), this.kk = iM.kV(128, 128, 128), this.kl = iM.kX(64, 64, 64, .75), this.km = iM.kV(30, 255, 30), this.kn = iM.kV(0, 200, 0), this.ko = iM.kV(128, 255, 128), this.kp = iM.kX(10, 65, 10, .75), this.kq = iM.kX(0, 255, 0, .6), this
		.kr = iM.kX(0, 255, 0, .5), this.ks = iM.kX(0, 200, 0, .5), this.kt = iM.kX(0, 100, 0, .75), this.ku = iM.kX(0, 60, 0, .8), this.kv = iM.kX(0, 255, 0, .3), this.kw = iM.kX(0, 180, 0, .6), this.kx = iM.kX(0, 120, 0, .85), this.ky = iM.kV(255,
			120, 120), this.kz = iM.kV(255, 160, 160), this.l0 = iM.kV(255, 70, 70), this.l1 = iM.kV(230, 0, 0), this.l2 = iM.kX(220, 0, 0, .6), this.l3 = iM.kX(255, 100, 100, .8), this.l4 = iM.kX(100, 0, 0, .85), this.l5 = iM.kX(60, 0, 0, .85), this
		.l6 = iM.kX(200, 0, 0, .6), this.l7 = iM.kX(120, 0, 0, .85), this.l8 = iM.kX(0, 60, 60, .85), this.l9 = iM.kX(10, 60, 60, .9), this.lA = iM.kX(0, 96, 96, .75), this.lB = iM.kV(160, 160, 255), this.lC = iM.kX(0, 40, 90, .75), this.lD = iM.kX(
			0, 0, 255, .6), this.lE = iM.kV(200, 200, 255), this.lF = iM.kV(255, 120, 100), this.lG = iM.kX(255, 255, 0, .5), this.lH = iM.kX(255, 255, 150, .2), this.lI = iM.kV(255, 255, 0), this.lJ = iM.kV(255, 255, 200), this.lK = iM.kX(200, 200,
			0, .6), this.lL = iM.kX(140, 120, 0, .75), this.lM = iM.kX(180, 160, 40, .75), this.lN = iM.kX(255, 140, 0, .75), iM = null, this.lO = function(lP, ek) {
			for (var dn = lP.slice(lP.indexOf("(") + 1, lP.indexOf(")")).split(","), di = al.di, eF = 0; eF < 3; eF++) di[eF] = ai.lQ(parseInt(dn[eF].trim(), 10) + ek, 0, 255);
			return 3 === dn.length ? aY.g0.kV(di[0], di[1], di[2]) : aY.g0.kX(di[0], di[1], di[2], parseFloat(dn[3].trim()))
		}
}

function cC() {
	this.fd = new lR, this.fP = new lS, this.lT = new lU, this.lV = new lW, this.iQ = new lX
}

function lR() {
	this.fe = function(fX) {
		io ? aW.lT.fe(eW, fX) : aN.lY.lZ(fX)
	}, this.fo = function(h6, hT) {
		k.la(), io ? aW.lT.fo(eW, h6, hT) : aN.lY.lb(h6, hT)
	}, this.lc = function(h6, ld) {
		k.la(), io ? aW.lT.le(eW, h6, ld) : aN.lY.lf(h6, ld)
	}, this.fl = function(h6, fX) {
		io ? aW.lT.fl(eW, h6, fX) : ak.ff.fk(eW, fX) && aN.lY.lg(h6, fX)
	}, this.fg = function(lh, fX) {
		io ? aW.lT.fg(eW, lh, fX) : ak.ff.li(eW, lh, fX) && aN.lY.lj(lh, fX)
	}, this.lk = function(hT) {
		io ? aW.lT.lk(eW, hT) : aN.lY.ll(hT)
	}, this.lm = function(ln) {
		io ? aW.lT.lo(eW, ln) : aN.lY.lp(ln)
	}, this.lq = function(lr) {
		io ? aW.lT.lq(eW, lr) : aN.lY.ls(lr)
	}, this.lt = function() {
		io ? aW.lT.lt(eW) : aN.lY.lu()
	}
}

function lX() {
	this.iR = function(player, ld, hU) {
		aY.fP.lv(player, hU, ld) && (a5.lc(player, ld), ld < h2) && aL.random() < aL.value(10) && (hO[ld] = 0)
	}, this.lw = function(player, ld, hU) {
		aY.fP.lx(hU, ld) && (aY.fP.ly(ld, al.dh[0]), b1.lz(player, ld), a6.m0(ld, al.dh[0]))
	}
}

function lS() {
	this.m1 = function(ln, player) {
		k.lm(eW, player, ln), aN.lY.m2(ln, player)
	}, this.m3 = function(player) {
		k.m4(player, 0), aN.lY.m5(player)
	}, this.m6 = function(m7, player) {
		k.m8(m7, player), aN.lY.m9(m7, player)
	}, this.mA = function(mB) {
		io || fN || aN.lY.mC(mD(), mB)
	}, this.mE = function() {
		io || fN || aN.lY.mF(mD(), jG[0], jG[1], jG[2])
	}, this.mG = function() {
		io || fN || aN.lY.mH(mD())
	}
}

function lW() {
	this.i7 = function(mI) {
		var id, dp, kM;
		for (ad.cq(mI), ad.fz += 2, kM = 8 * ad.size; ad.fz + 8 <= kM;) id = ad.mJ(4), dp = ad.mJ(9), 0 === id ? this.mK(id, dp, ad.mJ(22)) : 1 === id ? this.mK(id, dp, ad.mJ(10), ad.mJ(10)) : 2 === id ? this.mK(id, dp, ad.mJ(10), ad.mJ(9)) :
			3 === id || 4 === id ? this.mK(id, dp, ad.mJ(10), ad.mJ(22)) : 5 === id ? this.mK(id, dp, ad.mJ(10)) : 6 === id ? this.mK(id, dp, ad.mJ(7)) : 7 === id ? this.mK(id, dp, ad.mJ(1)) : this.mK(id, dp);
		this.mL()
	}, this.mM = [], this.mL = function() {
		for (var mO = 0, mP = 0, mQ = 0, mR = 0, mS = 0, mT = 0, eF = 0; eF < 512; eF++) mO += h3[eF], mP += f1[eF], mQ += eX[eF], mR += ak.ix.mU[eF];
		mS += ak.ix.mV, mT += iO, this.mM.push(((255 & mO + mP + mQ + mR + mS + mT) << 12) + ((3 & mO) << 10) + ((3 & mP) << 8) + ((3 & mQ) << 6) + ((3 & mR) << 4) + ((3 & mS) << 2) + (3 & mT))
	}, this.mK = function(id, dp, dr, dt) {
		0 === id ? aW.lT.fe(dp, dr) : 1 === id ? aW.lT.fo(dp, dr, dt) : 2 === id ? aW.lT.le(dp, dr, dt) : 3 === id ? aW.lT.fl(dp, dr, dt) : 4 === id ? aW.lT.fg(dp, dr, dt) : 5 === id ? aW.lT.lk(dp, dr) : 6 === id ? aW.lT.lo(dp, dr) : 7 === id ?
			aW.lT.lq(dp, dr) : 8 === id ? aW.lT.lt(dp) : aW.lT.mW(dp)
	}
}

function lU() {
	this.fe = function(player, fX) {
		aY.fP.fQ(0) && aY.fP.fR(player) && aj.hA(fX) && (aX.mX.mY(0, player, fX), mZ.hQ(player, fX))
	}, this.fo = function(player, h6, hT) {
		aY.fP.fQ(1) && aY.fP.fR(player) && aY.fP.ma(player, hT) && aY.fP.mb(player, h6, 12, eU) && aY.fP.mc(player, hT) && (a4.i5(player) || a4.hl(player, al.dl[0])) && hJ(player) && (aX.mX.mY(1, player, h6, al.dl[0]), aY.fP.md(player), b1.me(
			player, h6), hM(player))
	}, this.le = function(player, h6, ld) {
		aY.fP.fQ(1) && aY.fP.fR(player) && hN && aY.fP.ma(player, ld) && aY.fP.mf(player, ld) && aY.fP.lv(player, aY.fP.h5(player, h6), ld) && (aX.mX.mY(2, player, h6, ld), a5.lc(player, ld))
	}, this.fl = function(player, h6, fX) {
		aY.fP.fQ(1) && aY.fP.fR(player) && aj.hA(fX) && ak.ix.mV !== ak.ix.mg && ak.ix.mU[player] !== ak.ix.mh && 0 !== eu[player].length && aY.fP.mb(player, h6, 32, 16) && ak.mi.mj(player, fX) && (aX.mX.mY(3, player, h6, fX), aY.fP.md(player),
			ak.ix.mk(player))
	}, this.fg = function(player, lh, fX) {
		aY.fP.fQ(1) && aY.fP.fR(player) && aj.hA(fX) && ak.ff.ml(player, lh) && ak.mi.mm(fX) && (aX.mX.mY(4, player, lh, fX), aY.fP.mn(player, 8), ak.ix.fg())
	}, this.lk = function(player, hT) {
		aY.fP.fQ(1) && aY.fP.fR(player) && (hT = Math.min(hT, ef), a4.hl(player, hT)) && (aX.mX.mY(5, player, hT), a4.mo(player, hT))
	}, this.lo = function(player, ln) {
		(aY.fP.fQ(1) || aY.fP.fQ(2)) && aY.fP.fR(player) && (ln = Math.min(ln, az.mp - 1), aX.mX.mY(6, player, ln), a6.mq(player, 0, ln))
	}, this.lq = function(player, lr) {
		aY.fP.fQ(1) && aY.fP.fR(player) && (aX.mX.mY(7, player, lr), aI.mr(player, lr))
	}, this.lt = function(player) {
		(aY.fP.fQ(0) || aY.fP.fQ(1)) && aY.fP.fR(player) && an.lt(player) && aX.mX.mY(8, player)
	}, this.mW = function(player) {
		an.mW(player), aX.mX.mY(9, player)
	}
}

function ms() {
	var mt;
	this.mt = document.createElement("div"), this.mu = function(fy) {
		var title = document.createElement("h2");
		title.textContent = fy, title.style.margin = "0", title.style.marginBottom = "0.6em", title.style.fontSize = "1.4em", title.style.overflowWrap = "break-word", this.mt.appendChild(title)
	}, this.mv = function(fy) {
		var mw = document.createElement("p");
		mw.textContent = fy, mw.style.fontSize = "0.75em", mw.style.lineHeight = "1.2em", mw.style.marginBottom = "0", this.mt.appendChild(mw)
	}, this.mx = function(my) {
		for (var mz = my.mz, eb = mz.length, eF = 0; eF < eb; eF++) this.mt.appendChild(mz[eF])
	}, this.n0 = function(n1) {
		this.mt.appendChild(n1.dD)
	}, (mt = this.mt).style.position = "absolute", mt.style.height = "auto", mt.style.padding = "0.5em"
}

function n2(n3, n4) {
	var eF, mt = document.createElement("div");

	function n8() {
		var eF, n9, gB, ej, ek, n6 = aK.nA * mt.offsetWidth,
			nB = new Float64Array(function(n6) {
				var g5 = .25 * aY.g0.n7(.6) * aK.fw;
				return Math.max(Math.floor(n6 / g5), 1)
			}(n6)),
			nC = b0.nC,
			nD = (n6 - (nB.length + 1) * b0.gap) / (nB.length * aK.nA);
		for (nB.fill(nC), eF = 0; eF < n4.length; eF++) n9 = (ek = n4[eF].mt).style, gB = Math.min(...nB), ej = nB.indexOf(gB), n9.top = aY.g0.nE(gB), n9.left = aY.g0.nE(nC + ej * (nD + nC)), n9.width = aY.g0.nE(nD), aY.g0.nF(ek, 5), nB[ej] += ek
			.offsetHeight + 3 * nC;
		mt.style.height = aY.g0.nE(Math.max(...nB) - 2 * nC)
	}
	for (this.resize = function() {
			n8(), n8()
		}, mt.style.width = "100%", mt.style.maxWidth = "100%", n3.style.overflowX = "hidden", n3.style.overflowY = "auto", eF = 0; eF < n4.length; eF++) mt.appendChild(n4[eF].mt);
	n3.appendChild(mt)
}

function nG(title, nH, backgroundColor = aZ.kZ) {
	var nI = document.createElement("button");

	function lO() {
		nI.style.backgroundColor = aZ.lO(backgroundColor, 50)
	}

	function nK() {
		nI.style.backgroundColor = backgroundColor
	}
	this.button = nI, this.nJ = nH, nI.innerText = title, nI.style.color = aZ.gG, nI.style.userSelect = "none", nI.style.outline = "none", nI.style.overflowWrap = "break-word", nI.style.backgroundColor = backgroundColor, nI.style.border = "none", nI
		.style.font = "inherit", nI.style.fontSize = "1em", nI.onclick = nH, nI.addEventListener("mouseover", lO), nI.addEventListener("mouseout", nK), nI.addEventListener("focus", lO), nI.addEventListener("blur", nK)
}

function nL(nM, n3) {
	var mt, eF;
	for (this.resize = function() {
			for (var eF = 0; eF < nM.length; eF++) aY.g0.nF(nM[eF].button);
			mt.style.gap = mt.style.padding = aY.g0.nE(b0.nC)
		}, (mt = document.createElement("div")).style.display = "grid", mt.style.gridTemplateColumns = "repeat(auto-fill, minmax(9.5em, 1fr))", mt.style.overflowY = "auto", mt.style.gridAutoRows = "5.3em", mt.style.maxHeight = "100%", eF = 0; eF < nM
		.length; eF++) nM[eF].button.style.fontSize = "1.2em", mt.appendChild(nM[eF].button);
	n3.appendChild(mt)
}

function nO(nP, nQ) {
	this.fK = 0, this.fL = 0, this.g5 = 0, this.gB = 0, this.resize = function() {
		this.gB = Math.min(aY.g0.n7(.5) * nP[1] * aK.fw, aK.gB - 2 * b0.gap), this.g5 = Math.min(this.gB * (nP[0] / nP[1]), aK.g5 - 2 * b0.gap), this.gB = nP[1] * this.g5 / nP[0], this.fK = b0.gap + nQ[0] * (aK.g5 - this.g5 - 2 * b0.gap), this
			.fL = b0.gap + nQ[1] * (aK.gB - this.gB - 2 * b0.gap)
	}, this.nR = function() {
		return this.fK + .5 * this.g5
	}
}

function nS(nT) {
	function click() {
		var value = 1 - nT.value;
		this.textContent = (value ? "🟢 " : "⚪ ") + aV.nU[121], b9.nV.nW(nT.fz, value)
	}
	var dD;
	this.dD = document.createElement("p"), (dD = this.dD).textContent = (nT.value ? "🟢 " : "⚪ ") + aV.nU[121], dD.style.margin = "0", dD.style.cursor = "pointer", dD.addEventListener("click", click)
}

function nX(n3, nY) {
	var mt;
	this.resize = function() {
		mt.style.padding = aY.g0.nE(b0.nC), mt.style.lineHeight = aY.g0.nE(aY.g0.nZ(.035))
	}, mt = document.createElement("div"), n3.style.overflowX = "hidden", n3.style.overflowY = "auto", mt.innerHTML = nY, n3.appendChild(mt)
}

function na(nT) {
	var dD;
	this.dD = document.createElement("input"), (dD = this.dD).type = "text", dD.id = "input" + nT.title, dD.value = nT.value, dD.style.width = "100%", dD.style.userSelect = "none", dD.style.outline = "none", dD.style.resize = "none", dD.style
		.border = "inherit", dD.style.font = "inherit", dD.style.color = aZ.gG, dD.style.backgroundColor = aZ.kW, dD.style.fontSize = "1em", dD.style.padding = "0.1em 0.2em", dD.addEventListener("blur", function() {
			b9.nV.nW(nT.fz, dD.value.trim())
		}), dD.addEventListener("keypress", function(event) {
			"Enter" === event.key && (event.preventDefault(), b9.nV.nW(nT.fz, dD.value.trim()))
		})
}

function nb(nT) {
	this.mz = [];
	var nc = this.mz;

	function click() {
		for (var eF = 0; eF < nc.length; eF++) nc[eF].textContent = nc[eF].textContent.replace("🟢", "⚪");
		this.textContent = this.textContent.replace("⚪", "🟢"), b9.nV.nW(nT.fz, parseInt(this.name))
	}
	for (var nd, eb = nT.ne.length, eF = 0; eF < eb; eF++)(nd = document.createElement("p")).textContent = "⚪ " + nT.ne[eF], nd.style.margin = "0", nd.name = "" + eF, nd.style.cursor = "pointer", nd.style.fontSize = "1em", nd.addEventListener(
		"click", click), nc.push(nd);
	nc[nT.value].textContent = nc[nT.value].textContent.replace("⚪", "🟢")
}

function nf(title, ng) {
	var eF, nh = document.createElement("div"),
		ni = document.createElement("div"),
		nj = document.createElement("div"),
		nk = document.createElement("div");
	for (this.nl = nj, this.show = function() {
			document.body.appendChild(nh)
		}, this.np = function() {
			document.body.removeChild(nh)
		}, this.resize = function() {
			var eF, dD, eb = ng.length,
				nq = aY.g0.nZ(.1),
				nr = aY.g0.nZ(.08 + .04 * (aK.ns < 1));
			for (ni.style.height = aY.g0.nE(nq), aY.g0.nF(ni, 2), nk.style.top = aY.g0.nE(aK.gB / aK.nA - nr), nk.style.height = aY.g0.nE(nr), aY.g0.nF(nk, 8), nj.style.top = aY.g0.nE(nq), nj.style.height = nj.style.maxHeight = aY.g0.nE(aK.gB / aK
					.nA - nq - nr), nk.style.font = ni.style.font = nj.style.font = aY.g0.g1(0, aY.g0.nZ(.02)), eF = 0; eF < eb; eF++)(dD = ng[eF].button).style.top = "0", dD.style.left = (100 * eF / eb).toFixed(2) + "%", dD.style.width = (100 / eb)
				.toFixed(2) + "%", dD.style.height = "100%", 0 < eF && aY.g0.nF(dD, 4)
		}, nh.style.position = "absolute", nh.style.top = "0", nh.style.left = "0", nh.style.width = "100%", nh.style.height = "100%", ni.style.position = "absolute", ni.style.top = "0", ni.style.left = "0", ni.style.width = "100%", ni.style
		.display = "flex", ni.style.backgroundColor = aZ.kZ, nk.style.position = "absolute", nk.style.left = "0", nk.style.width = "100%", nj.style.position = "absolute", nj.style.width = "100%", nj.style.backgroundColor = aZ.kZ, ! function() {
			var eF;
			for (eF = 0; eF < ng.length; eF++) ng[eF].button.style.position = "absolute", ng[eF].button.style.fontSize = "1.2em"
		}(), eF = 0; eF < ng.length; eF++) nk.appendChild(ng[eF].button);
	ni.appendChild(function() {
		var no = document.createElement("h1");
		return no.textContent = title, no.style.margin = "auto", no.style.fontSize = "2.3em", no
	}()), nh.appendChild(nj), nh.appendChild(ni), nh.appendChild(nk)
}

function nt() {
	var nu = document.createElement("textarea"),
		nw = (this.nv = nu, !0);

	function o2() {
		nu.select(), document.execCommand("copy")
	}
	this.resize = function() {
			nu.style.padding = aY.g0.nE(b0.nC)
		}, this.nx = function(ny) {
			nu.value = ny
		}, this.nz = function() {
			return nu.value
		}, this.o0 = function() {
			nu.select()
		}, this.clear = function() {
			nu.value = ""
		}, this.o1 = function() {
			nw && navigator.clipboard ? (nu.select(), navigator.clipboard.writeText(nu.value).catch(function() {
				nw = !1, o2()
			})) : o2()
		}, nu.setAttribute("name", "replayData"), nu.setAttribute("id", "replayDataField"), nu.setAttribute("autocomplete", "off"), nu.setAttribute("placeholder", "Insert the replay link here!"), nu.style.top = "0", nu.style.left = "0", nu.style
		.width = "100%", nu.style.height = "100%", nu.style.userSelect = "none", nu.style.outline = "none", nu.style.resize = "none", nu.style.border = "none", nu.style.color = aZ.gG, nu.style.backgroundColor = aZ.kW, nu.style.fontSize = "1.2em"
}

function cb() {
	this.nJ = new o3, this.dF = new o4, this.nV = new o5, this.cq = function() {
		this.dF.cq(), (new o6).cq()
	}
}

function o4() {
	function o7(eF, title, type, ne = null, oD = 0, de = 0) {
		b9.dF.data.push({
			fz: eF,
			title: title,
			type: type,
			ne: ne,
			value: oD,
			oD: oD,
			de: de
		})
	}

	function o8(eF, title, type, ne = null, oD = "", de = 0) {
		b9.dF.data.push({
			fz: eF,
			title: title,
			type: type,
			ne: ne,
			value: oD,
			oD: oD,
			de: de
		})
	}

	function o9(kM) {
		for (var eF = b9.dF.data.length; eF < kM; eF++) b9.dF.data.push(null)
	}
	this.data = [], this.cq = function() {
		o7(0, "", 1, ["English", "Русский", "Türkçe", "Española", "Deutsch"], 0, 4), o7(1, "", 1, null, 1), o7(2, "", 0, [0, 1]), o8(3, "Username", 2), o7(4, "Font5", 1, ["Default", "Custom"]), o8(5, "", 2, null, "Trebuchet MS", 1), o7(6, "", 0,
			[0, 1]), o7(7, "", 0, [0, 1], 1), o7(8, "", 0, [0, 1]), o7(9, "", 1, null, 1), o7(10, "", 1, null), o7(11, "", 1, null, 1), o9(100), o8(100, "Username", 2), o8(101, "Password", 2), o8(102, "Emojis", 2), o8(103, "Colors", 2), o9(
			180), o7(180, "R0", 0), o7(181, "R1", 0)
	}, this.translate = function() {
		this.data[0].title = "🌐 " + aV.nU[101], this.data[1].title = aV.nU[102], this.data[2].title = aV.nU[103], this.data[5].title = aV.nU[104], this.data[6].title = aV.nU[105], this.data[7].title = aV.nU[106], this.data[8].title = aV.nU[107],
			this.data[9].title = aV.nU[108], this.data[10].title = aV.nU[109], this.data[11].title = aV.nU[110], this.data[1].ne = [aV.nU[111], aV.nU[112], aV.nU[113], aV.nU[114]], this.data[9].ne = [aV.nU[112], aV.nU[115], aV.nU[116]], this
			.data[10].ne = [aV.nU[109] + " 1", aV.nU[117] + " 1", aV.nU[109] + " 2", aV.nU[117] + " 2"], this.data[11].ne = [aV.nU[118], aV.nU[119], aV.nU[120]]
	}, this.nW = function(fz, value) {
		this.data[fz].value = value
	}, this.dG = function(fz, value) {
		this.nW(fz, value), b9.nJ.save(fz, String(value)), b9.nJ.save(fz, String(this.data[fz].de), !0)
	}, this.oA = function() {
		for (var eF = 0; eF < this.data.length; eF++) this.data[eF] && (b9.nJ.save(eF, String(this.data[eF].value)), b9.nJ.save(eF, String(this.data[eF].de), !0))
	}, this.oB = function(fz) {
		return Number(this.data[fz].value)
	}, this.oC = function(fz) {
		return String(this.data[fz].value)
	}
}

function o3() {
	this.oE = function(fz, de = !1) {
		return Number(this.oF(fz, de))
	}, this.oF = function(fz, de = !1) {
		var dd = null;
		return 0 === b7.id ? b7.oG && (dd = b7.oG.getItem((de ? "v" : "d") + fz)) : 1 === b7.id ? dd = b7.oH.loadString((de ? 1e3 : 2e3) + fz) : 2 === b7.id && (dd = b7.oI[(de ? "v" : "d") + fz]), dd && 0 !== dd.length ? dd : null
	}, this.save = function(fz, value, de = !1) {
		0 === b7.id ? b7.oG && b7.oG.setItem((de ? "v" : "d") + fz, value) : 1 === b7.id ? b7.oH.saveString((de ? 1e3 : 2e3) + fz, value) : 2 === b7.id && (b7.oI["d" + fz] = value, b7.oJ.postMessage((de ? "v" : "d") + fz + " " + value))
	}
}

function o6() {
	this.cq = function() {
		! function() {
			var data = b9.dF.data;
			0 === data[2].de && (aK.gB > aK.g5 || 0 !== b7.id) && (data[2].value = data[2].oD = 1);
			0 === data[100].de && (data[100].value = data[100].oD = (0 === b7.id ? "Player " : 1 === b7.id ? "Android User " : "iOS User ") + Math.floor(1e3 * Math.random()));
			data[0].value = data[0].oD = aV.oM()
		}();
		var eF, dd, data = b9.dF.data,
			eb = data.length;
		for (eF = 0; eF < eb; eF++) data[eF] && data[eF].de === b9.nJ.oE(eF, !0) && (dd = b9.nJ.oF(eF), data[eF].value = null === dd ? data[eF].oD : 2 === data[eF].type ? dd : Number(dd));
		b9.dF.data[10].value = b9.dF.data[10].oD
	}
}

function o5() {
	this.nW = function(fz, value) {
		b9.dF.data[fz].value !== value && (b9.dF.dG(fz, value), 0 === fz ? (ar.oN(), aV.cq(), ar.oO()) : 1 === fz ? aK.oP(1) : 2 === fz ? aK.oP(0) : 5 === fz && (aY.g0.oQ(), aK.oP(0)))
	}, this.oR = function() {
		for (var data = b9.dF.data, eF = 0; eF < 100; eF++) data[eF] && b9.dF.dG(eF, data[eF].oD);
		aY.g0.oQ(), aK.oP(1)
	}
}

function cK() {
	var oS = new Uint8Array(78);
	this.cq = function() {
		var eF;
		for (oS[50] = 37, eF = 0; eF < 10; eF++) oS[eF + 3] = eF + 1;
		for (eF = 0; eF < 26; eF++) oS[eF + 20] = eF + 11, oS[eF + 52] = eF + 38
	}, this.oT = function(fy) {
		return fy.trim().replace(new RegExp("[^a-zA-Z0-9_\\-]", "g"), "_")
	}, this.oU = function(fy, oV) {
		for (var oW = oS, eb = fy.length, dn = new Uint8Array(oV || eb), eF = 0; eF < eb; eF++) dn[eF] = oW[fy.charCodeAt(eF) - 45];
		return dn
	}, this.oX = function(oY) {
		var eF, eb = oY.length,
			g5 = ab;
		for (g5.d2(6 * eb), eF = 0; eF < eb; eF++) g5.oZ(6, oY[eF]);
		ad.cq(g5.mI)
	}
}

function oa() {
	var g5, gB, ob;

	function p3(p4, ek, p1, oi, ow) {
		ek = p2(p4, ek + 1 + 2 * oi & 3);
		! function(p4, p5) {
			return 1 < Math.abs(p4 % g5 - p5 % g5) || 1 < Math.abs(p8(p4) - p8(p5))
		}(p4, ek) && 0 === ow[ek << 2] && (ow[ek << 2] = p1)
	}

	function p8(ei) {
		return Math.floor((ei + .5) / g5) % gB
	}

	function p2(ei, ek) {
		return ei + ob[ek]
	}
	this.oc = function(fy) {
		var eF, od, eb, og, oj = ad;
		for (ae.oX(ae.oU(fy)), ap.eA = g5 = oj.mJ(12), ap.eB = gB = oj.mJ(12), ob = [-g5, -1, g5, 1], ap.os = document.createElement("canvas"), ap.os.width = ap.eA, ap.os.height = ap.eB, ap.oo = ap.os.getContext("2d", {
				alpha: !1
			}), ap.op = ap.oo.getImageData(0, 0, ap.eA, ap.eB), ap.ot = ap.op.data, aY.ou.ov(ap.ot), eb = oj.mJ(12), od = oj.mJ(5), og = ol(g5 * gB - 1), eF = 0; eF < eb; eF++) ! function(oe, ei, oh, oi) {
			var eF, ek, oj = ad,
				ow = ap.ot,
				ox = ei,
				oy = ei,
				oz = 0,
				p0 = 1 + oh,
				p1 = 2 - oh;
			for (ow[ei << 2] = p0, eF = 0; eF < oe; eF++) ek = oj.mJ(2), ei = p2(ei, ek), ow[ei << 2] === p0 ? oz % 2 == 1 && p3(oy, oz + 2 * oi + 3, p1, oi, ow) : ow[ei << 2] = p0, p3(ei, ek, p1, oi, ow), p3(oy, ek, p1, oi, ow), oy = ei,
				oz = ek;
			p2(ei, 0) === ox ? (p3(ei, 0, p1, oi, ow), p3(ox, 0, p1, oi, ow)) : p2(ei, 1) === ox && (p3(ei, 0, p1, oi, ow), p3(ox, 2, p1, oi, ow));
			0 === oe && (p3(ox, 0, p1, oi, ow), p3(ox, 2, p1, oi, ow))
		}(oj.mJ(od), oj.mJ(og), 1 === oj.mJ(1), 1 === oj.mJ(1));
		var fK, fL, p9, pA, pB, pC, ow = ap.ot,
			pD = !0,
			pE = ap.ij.pF[ap.pG].pE,
			pH = ap.ij.pF[ap.pG].pH;
		for (fL = 0; fL < gB; fL++)
			for (pA = !0, pB = pD, fK = pC = 0; fK < g5; fK++) p9 = 4 * fL * g5 + 4 * fK, pC <= fK && 0 < ow[p9] && (pB = 2 === ow[p9], pA) && (pA = !1, pB !== pD) ? (pD = pB, pC = fK + 1, fK = -1) : (pB ? (ow[p9] = pH[0], ow[1 + p9] = pH[1], ow[
				2 + p9] = pH[2]) : (ow[p9] = pE[0], ow[1 + p9] = pE[1], ow[2 + p9] = pE[2]), ow[3 + p9] = 255);
		ap.oo.putImageData(ap.op, 0, 0), ap.oq = !0, ap.or.cq(), b3.d1 = !0
	}
}

function bO() {
	var fK, fL, g5, gB, pI, pJ, pK, pL, player, dn;

	function pT() {
		return function() {
			var eF;
			for (eF = 0; eF < 8; eF++)
				if (fK = eT(g5 * aL.random(), aL.value(100)), fL = eT(gB * aL.random(), aL.value(100)), pb()) return 1;
			return
		}() || function() {
			var gu, gx, ha, pR, hj, pQ;
			for (gu = eT(g5 * aL.random(), aL.value(100)), gx = eT(gB * aL.random(), aL.value(100)), ha = 40; 1 <= ha; ha--)
				for (pR = gB - ha; 0 <= pR; pR -= 40)
					for (fL = (pR + gx) % gB, hj = 40; 1 <= hj; hj--)
						for (pQ = g5 - hj; 0 <= pQ; pQ -= 40)
							if (fK = (pQ + gu) % g5, pb()) return 1;
			return
		}()
	}

	function pb() {
		for (var ei, pd, gap = eT(pI - pL, 2), pe = pK + fL * pI + gap, pf = pJ + fK * pI + gap, pc = pe + pL - 1; pe <= pc; pc--)
			for (pd = pf + pL - 1; pf <= pd; pd--)
				if (ei = a2.pZ(pd, pc), !a2.ed(ei) || a2.hW(ei)) return;
		return 1
	}

	function pU(pQ, pR) {
		pM(), pg(pQ - 2, pR - 2)
	}

	function pM() {
		h3[player] = 0, eX[player] = 0, f1[player] = ph[player] = 0, ec[player] = [], et[player] = [], eu[player] = [], ex[player] = [], hv[player] = hy[player] = hu[player] = hx[player] = 0
	}

	function pg(pQ, pR) {
		var ei, eF, pj, pk;
		for (h3[player] = 1, eX[player] = player < h2 ? pi : iU[b.hU[player - h2]], hv[player] = pQ + 10, hy[player] = pR + 10, hx[player] = hu[player] = 0, pj = pQ; pj < pQ + 4; pj++)
			for (pk = pR; pk < pR + 4; pk++)(pQ < pj && pj < pQ + 3 || pR < pk && pk < pR + 3) && (ei = a2.pZ(pj, pk), a2.ed(ei)) && (hv[player] = pj < hv[player] ? pj : hv[player], hu[player] = pj > hu[player] ? pj : hu[player], hy[player] = pk <
				hy[player] ? pk : hy[player], hx[player] = pk > hx[player] ? pk : hx[player], dn[f1[player]] = ei, f1[player]++, a2.pl(ei, player));
		for (ph[player] = f1[player], eF = f1[player] - 1; 0 <= eF; eF--) a2.pm(dn[eF], player) ? (a2.ee(dn[eF], player), et[player].push(dn[eF])) : a2.pn(dn[eF]) ? (a2.ee(dn[eF], player), eu[player].push(dn[eF])) : a2.po(dn[eF]) && (a2.ee(dn[eF],
			player), ex[player].push(dn[eF]))
	}

	function pa(pQ, pR) {
		for (var ei, pd, pc = pR; pR - 6 < pc; pc--)
			for (pd = pQ; pQ - 6 < pd; pd--)
				if (ei = a2.pZ(pd, pc), a2.hW(ei)) return;
		return 1
	}
	this.cq = function() {
		var eF, pQ, pR;
		if (dn = new Array(12), pL = 6, pI = 10, g5 = eT(ap.eA, pI), gB = eT(ap.eB, pI), pJ = eT(ap.eA - pI * g5, 2), pK = eT(ap.eB - pI * gB, 2), fc)
			for (eF = 0; eF < h2; eF++) player = eF, pM(), h3[player] = 1;
		if (aU.ii && aU.ij.pN) {
			for (player = 0; player < ef; player++)
				if (1 !== h3[player]) {
					if (player < pS) {
						if (function() {
								var pQ = aU.ij.pN[player] + 1,
									pR = aU.ij.pY[player] + 1;
								if (3 < pQ && pQ < ap.eA - 5 && 3 < pR && pR < ap.eB - 5 && a2.ed(a2.pZ(pQ, pR)) && pa(pQ + 3, pR + 3)) return pU(pQ + 1, pR + 1), 1;
								return
							}()) continue;
						if (pT()) {
							pQ = pJ + fK * pI + eT(pI, 2), pR = pK + fL * pI + eT(pI, 2), pU(pQ, pR);
							continue
						}
					}
					pM()
				}
		} else ! function() {
			var pQ, pR;
			for (player = 0; player < ef; player++) 1 !== h3[player] && (player < pS && pT() ? (pQ = pJ + fK * pI + eT(pI, 2), pR = pK + fL * pI + eT(pI, 2), pU(pQ, pR)) : pM())
		}();
		b1.eZ[7] = f1[eW], b1.eZ[8] = eX[eW]
	}, this.pp = function(hT, pq, pr) {
		var eF, pQ, pR, ei, fK, fL;
		for (player = hT, eF = 0; eF < 20; eF++)
			for (pQ = pq + eF; pq - eF <= pQ; pQ--)
				for (pR = pr + eF; pr - eF <= pR; pR--)
					if ((pQ === pq + eF || pQ === pq - eF || pR === pr + eF || pR === pr - eF) && 3 < pQ && pQ < ap.eA - 5 && 3 < pR && pR < ap.eB - 5 && a2.ed(a2.pZ(pQ, pR)) && pa(pQ + 3, pR + 3)) {
						if (0 < f1[player]) {
							for (fL = fK = ei = void 0, fK = hu[player]; fK >= hv[player]; fK--)
								for (fL = hx[player]; fL >= hy[player]; fL--) ei = 4 * (fL * ap.eA + fK), a2.pt(player, ei) && (a2.pu(ei), f1[player]--);
							pM()
						}
						return pg(pQ - 1, pR - 1), !0
					} return !1
	}, this.pv = function(hT) {
		player = hT, pT() ? pU(pJ + fK * pI + eT(pI, 2), pK + fL * pI + eT(pI, 2)) : pM()
	}
}

function pw() {
	aD.px(), gF.setTransform(h8, 0, 0, h8, 0, 0), gF.imageSmoothingEnabled = h8 < 3, gF.drawImage(ap.os, p.jg(), p.gD()), am.py.gE(), gF.drawImage(pz, p.jg(), p.gD()), aD.gE(), gF.imageSmoothingEnabled = !1, gF.setTransform(1, 0, 0, 1, 0, 0), ak.py
		.gE(), a6.gE(), e.gE(), (k9 ? (b5.gE(), aa) : (k.gE(), s.gE(), o.gE(), aa.gE(), aI.gE(), t.gE(), p.gE(), n.gE(), b5.gE(), r.gE(), m.gE(), j.gE(), i.gE(), u.gE(), b2.gE(), aF)).gE()
}

function q0(q1, g5, gB) {
	q1.clearRect(0, 0, g5, gB), q1.fillStyle = aZ.ka, q1.fillRect(0, 0, g5, gB)
}

function q2(q1, g5, gB, q3) {
	q1.fillStyle = aZ.gG, q1.fillRect(0, 0, g5, q3), q1.fillRect(0, 0, q3, gB), q1.fillRect(g5 - q3, 0, q3, gB), q1.fillRect(0, gB - q3, g5, q3)
}

function q4(q1, fK, fL, gI, q3, ei, q5) {
	q1.fillStyle = aZ.gG;
	var ei = Math.floor(gI * ei),
		q7 = (ei += (ei - q3) % 2, Math.floor((ei - q3) / 2)),
		gI = Math.floor((gI - ei) / 2);
	q1.fillRect(fK + gI, fL + gI + q7, ei, q3), q5 && q1.fillRect(fK + gI + q7, fL + gI, q3, ei)
}

function q9() {
	this.qA = null, this.cq = function(qA) {
		this.qA = qA, k.qB(this.qA)
	}, this.qC = function(qD) {
		var gg = (this.qA[qD].qE - this.qA[1 - qD].qE) / 10,
			gg = 8 / (1 + Math.pow(2, gg / 32)),
			gg = Math.floor(10 * gg + .5),
			qG = this.qH(this.qA[qD].qE + gg + 1),
			gg = this.qH(this.qA[1 - qD].qE - gg);
		0 === qD ? k.qJ(this.qA, qG, gg, ["rgba(10,140,10,0.75)", "rgba(140,10,10,0.75)"]) : k.qJ(this.qA, gg, qG, ["rgba(140,10,10,0.75)", "rgba(10,140,10,0.75)"])
	}, this.qH = function(qE) {
		return 16e3 <= (qE = qE < 0 ? 0 : 16e3 < qE ? 16e3 : qE) ? "Unknown" : (qE / 10).toFixed(1)
	}
}

function cI() {
	var qK = new Uint8Array(64);
	this.cq = function() {
		var eF;
		for (qK[0] = 45, qK[37] = 95, eF = 0; eF < 10; eF++) qK[eF + 1] = 48 + eF;
		for (eF = 0; eF < 26; eF++) qK[eF + 11] = 65 + eF, qK[eF + 38] = 97 + eF
	}, this.qL = function(qM) {
		for (var oj = ad, oY = new Uint8Array(qM), eF = 0; eF < qM; eF++) oY[eF] = oj.mJ(6);
		return oY
	}, this.qN = function(oY) {
		for (var eb = oY.length, qO = qK, dn = [], eF = 0; eF < eb; eF++) dn.push(String.fromCharCode(qO[oY[eF]]));
		return dn.join("")
	}
}

function bP() {
	var qP, qQ, qR;
	qP = [32, 65, 191, 913, 931], qQ = [64, 127, 688, 930, 1155], qR = new Array(qP.length + 1);
	for (var eF = 0; eF < qR.length; eF++) {
		qR[eF] = 0;
		for (var ha = eF - 1; 0 <= ha; ha--) qR[eF] += qQ[ha] - qP[ha]
	}

	function qY(iM) {
		for (var eF = qP.length - 1; 0 <= eF; eF--)
			if (iM >= qP[eF] && iM < qQ[eF]) return eF;
		return -1
	}
	this.qT = function(fy) {
		return 0 !== (fy = fy.trim()).indexOf("Bot ") && 0 !== fy.indexOf("[Bot] ") && function(fy, qV, qW) {
			var eb = (fy = fy.trim()).length;
			if (eb < qV || qW < eb) return !1;
			for (var iM, qX = 0, eF = 0; eF < eb; eF++)
				if (iM = fy.charCodeAt(eF), qX += 65 <= iM && iM <= 90 || 1040 <= iM && iM <= 1071 ? 1 : 0, -1 === qY(iM)) return !1;
			if (3 < qX && qX > Math.floor(eb / 2)) return !1;
			return !0
		}(fy, 3, 20)
	}, this.qZ = function(fy) {
		for (var eb = (fy = fy.trim()).length, dn = [], eF = 0; eF < eb; eF++) {
			var iM, ei = qY(iM = fy.charCodeAt(eF));
			dn.push(qR[ei] + iM - qP[ei])
		}
		return dn
	}, this.oc = function(dn) {
		for (var iM, hj, fy = "", eb = dn.length, eF = 0; eF < eb; eF++)
			for (hj = 1; hj < qR.length; hj++)
				if (dn[eF] < qR[hj]) {
					iM = qP[hj - 1] + dn[eF] - qR[hj - 1], fy += String.fromCharCode(iM);
					break
				} return fy
	}, this.qa = function(fy) {
		for (var dn = this.qZ(fy), result = "", eF = 0; eF < dn.length; eF++) result = (result += dn[eF] < 10 ? "00" : dn[eF] < 100 ? "0" : "") + dn[eF].toString(10);
		return result
	}, this.qb = function(fy) {
		for (var dn = new Array(Math.floor(fy.length / 3)), eF = 0; eF < fy.length; eF += 3) dn[Math.floor(eF / 3)] = parseInt(fy.substring(eF, eF + 3));
		return this.oc(dn)
	}, this.qc = function(fy) {
		for (var dd, dn = [fy.length], eF = 0; eF < fy.length; eF++) dn[eF] = fy.charCodeAt(eF) - 48;
		var result = "";
		for (eF = 0; eF < fy.length; eF++) eF === fy.length - 1 || 51 < 10 * dn[eF] + dn[eF + 1] ? result += dn[eF].toString() : (dd = 10 * dn[eF] + dn[eF + 1], result += String.fromCharCode(dd + (dd < 26 ? 65 : 71)), eF++);
		return result
	}, this.qd = function(fy) {
		for (var iM, result = "", eF = 0; eF < fy.length; eF++) 48 <= (iM = fy.charCodeAt(eF)) && iM < 58 ? result += String.fromCharCode(iM) : 65 <= iM && iM < 75 ? result += "0" + (iM - 65).toString() : 75 <= iM && iM < 91 ? result += (iM - 65)
			.toString() : 97 <= iM && iM < 123 && (result += (iM - 71).toString());
		return result
	}, this.qe = function(fy) {
		for (var eb = fy.length, dn = [], eF = 0; eF < eb; eF++)(iM = fy.charCodeAt(eF)) < 58 ? dn.push(fy[eF]) : (iM -= iM < 91 ? 65 : 71, dn.push(String(eT(iM, 10))), dn.push(String(iM - 10 * eT(iM, 10))));
		var eb = dn.length - 2,
			iM = 0,
			oY = [];
		for (eF = 0; eF < eb; eF += 3) oY[iM++] = parseInt(dn[eF] + dn[eF + 1] + dn[eF + 2]);
		return oY
	}, this.qf = function() {
		for (var gR, qg = "", eF = 0; eF < 6; eF++) gR = 48 + aL.random() % 36, gR += 58 <= gR ? 39 : 0, qg += String.fromCharCode(gR);
		return qg
	}
}

function cS() {
	this.qh = new qi, this.iy = new qj, this.cq = function() {
		this.iy.cq()
	}
}

function qi() {
	function ql() {
		if (2 === qw) return 1;
		aI.qx(), qw = 2, qy = qz
	}

	function qo() {
		k.r0(!0), s.j6(!0), t.j6(!0), aI.j6(), aa.r1(), fN && b3.r2.r3(), b3.d1 = !0, ay.r4(), b7.cv.setState(0)
	}
	this.qk = function() {
		ql() || (aW.fP.mE(), k.qm(247, 0), k.qn(0, 59), f.kE(2700), u.show(!1, !1, !0), qo())
	}, this.qp = function(qq) {
		var mB = 0,
			qr = !1;
		ql() || (8 === il ? ((qr = (mB = qq < 0 ? f1[0] >= f1[1] ? 0 : 1 : qq) === eW) ? k.qn(mB, 2) : k.qn(1 - eW, 3), qs.qC(mB), aW.fP.mA(mB)) : hN ? (qr = b4.iN[eW] === b5.qt(), 9 === il ? (aW.fP.mA(qr ? jG[0] : 512), k.qu(qr)) : ao.iy.i7(
			qr)) : (qr = (mB = jG[0]) === eW, k.qv(mB), aW.fP.mA(mB)), u.show(qr, !1), qo())
	}
}

function qj() {
	var r5;

	function rP(r7, ej) {
		for (var fy = "", eF = ej; eF < r7.length && eF < ej + 4; eF++) fy += (eF === ej ? "" : "   ") + "[" + b4.rH[r7[eF].id] + "]: " + r7[eF].rM.toFixed(Math.max(Math.floor(3 - Math.log10(r7[eF].rM)), 0));
		fy.length && k.rO(0, fy, 45, 0, aY.g0.kV(225, 240, 255), aZ.ka, -1, !1)
	}
	this.r6 = 0, this.r7 = null, this.cq = function() {
		r5 = 0, this.r6 = 0, this.r7 = null
	}, this.i7 = function(qr) {
		var r8 = b4.r9[b5.rA()];
		this.r6 = b5.rB(), this.r7 = function(r8, r6) {
				var eF, hj, eb, iN = b4.iN,
					r9 = b4.r9,
					rH = b4.rH,
					rI = b4.rI,
					rJ = f1,
					rK = h2,
					rL = [],
					fz = 0;
				for (hj = rH.length - 1; 0 <= hj; hj--)
					if (r9[iN[rI[hj][0]]] === r8) {
						for (rL.push({
								id: hj,
								rJ: 0,
								player: rI[hj][0],
								rM: 0
							}), eb = rI[hj].length, eF = 0; eF < eb; eF++) rL[fz].rJ += rJ[rI[hj][eF]];
						for (rL[fz].rM = (1 + rN) * rK * rL[fz].rJ / r6, eF = 0; eF < fz; eF++)
							if (rL[fz].rJ > rL[eF].rJ) {
								rL.splice(eF, 0, rL[fz]), rL.pop();
								break
							} fz++
					} 8 < rL.length && (rL.length = 8);
				for (; 0 < rL.length && 0 === rL[rL.length - 1].rJ;) rL.pop();
				return rL
			}(r8, this.r6), n.rD("Team " + b4.fu[r8], 2, 1, 12),
			function(qr, r8) {
				var color;
				qr = qr ? (color = aY.g0.kV(10, 220, 10), "Congratulations! Team " + b4.fu[r8] + " won the game!") : (color = aY.g0.kV(200, 80, 80), "Our alliance was defeated! Team " + b4.fu[r8] + " won the game.");
				k.rO(0, qr, 40, 0, color, aZ.ka, -1, !1)
			}(qr, r8), 0 !== (qr = this.r7).length && (k.rO(0, "The allied clans of the winning team have earned these glorious points:", 40, 0, aZ.gG, aZ.ka, -1, !1), rP(qr, 0), rP(qr, 4)), aW.fP.mG(), f.kE(2700)
	}, this.iz = function() {
		2 === qw && -1 !== r5 && (0 === r5 ? r5 = this.r7 && 0 !== this.r7.length ? b3.da + 8e3 : -1 : b3.da < r5 || (r5 = -1, k.rO(255, "Clan rankings and results can also be accessed under:", 735, 0, aZ.gG, aZ.ka, -1, !1), k.rO(255,
			"territorial.io/clans", 736, 0, aZ.gG, aZ.ka, -1, !1), k.rO(255, "territorial.io/clan-results", 736, 0, aZ.gG, aZ.ka, -1, !1)))
	}
}

function cY() {
	this.id = 0, this.de = 0, this.oG = null, this.oH = null, this.oI = null, this.oJ = null, this.cv = new rQ, this.cq = function() {
		var self, de;
		self = this, "undefined" == typeof Android || (de = Android.getVersion()) < 12 || (self.de = de, self.id = 1, self.oH = Android),
			function(self) {
				var de;
				"undefined" != typeof mwIOSdataX && window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.iosCommandA && (self.id = 2, self.oI = mwIOSdataX, self.oJ = window.webkit.messageHandlers.iosCommandA, de = self
					.oI.version, self.de = de ? Number(de) : 0)
			}(this),
			function(self) {
				var oG;
				if (0 === self.id) {
					try {
						if (!(oG = window.localStorage)) return;
						oG.setItem("tls7", "1"), oG.removeItem("tls7")
					} catch (error) {
						return
					}
					self.oG = oG
				}
			}(this)
	}
}

function rQ() {
	this.rU = function() {
		b9.nV.oR(), 0 === b7.id ? b7.oG && b7.oG.clear() : 1 === b7.id ? b7.oH.saveString(199, "") : 2 === b7.id && b7.oJ.postMessage("clear")
	}, this.rV = function() {
		2 === b7.id ? b7.oJ.postMessage("showConsentForm") : 1 === b7.id ? b7.oH.setState(7) : at.dH.showCMPScreen()
	}, this.rW = function() {
		this.setState(14)
	}, this.rX = function() {
		var rY;
		return 2 === b7.id && 0 === b7.de && "string" == typeof(rY = b7.oI.username) ? rY : b9.dF.data[100].value
	}, this.rZ = function() {
		var fy = b9.dF.oC(101),
			max = ("string" != typeof(fy = "" === fy ? function() {
				{
					if (2 === b7.id) return b7.oI.password;
					if (1 === b7.id) return 12 <= b7.de ? b7.oH.loadString(22) : ""
				}
				return a3.rc(9)
			}() : fy) && (fy = ""), Math.floor(Math.pow(2, 48))),
			rb = Math.floor(parseInt(h.qd(fy)));
		return 0 < rb && rb < max ? b9.dF.dG(101, fy) : (rb = Math.floor(1 + (max - 1) * Math.random()), b9.dF.dG(101, fy)), rb
	}, this.fv = function() {
		return 1 === b9.dF.oB(2)
	}, this.rd = function() {
		for (var fy = "", eF = 0; eF < az.mp; eF += 2) fy += az.re[eF] || az.re[eF + 1] ? az.re[eF] && !az.re[eF + 1] ? "1" : !az.re[eF] && az.re[eF + 1] ? "2" : "3" : "0";
		b9.dF.dG(102, fy)
	}, this.setState = function(dW) {
		1 === b7.id && 5 <= b7.de && b7.oH.setState(dW)
	}, this.rf = function() {
		var rg;
		1 === b7.id && 7 <= b7.de ? b7.oH.setState(5) : ((rg = new URL(window.location)).searchParams.set("v", "" + Math.floor(1e3 * Math.random())), window.location.href = rg.toString())
	}, this.cw = function() {
		1 !== b7.id || b7.de < 17 || b7.oH.saveString(23, document.documentElement.outerHTML)
	}, this.dL = function() {
		0 === b7.id ? at.dH.cq() : 1 === b7.id ? b7.oH.prepareAd("1688441405") : 2 === b7.id && (0 === b7.de ? b7.oJ.postMessage("prepare ad 4500876070") : b7.oJ.postMessage("loadAds 4500876070"))
	}, this.dc = function(db) {
		return 0 === b7.id ? !!at.dH.dU() : 1 === b7.id ? 12 <= b7.de && (b7.oH.presentAd(db), !0) : 2 === b7.id && (0 === b7.de ? b7.oJ.postMessage("show ad " + db) : b7.oJ.postMessage("showAd"), !0)
	}
}

function bF() {
	var rh, oY;

	function rk() {
		var eF, g5 = new cH;
		for (g5.d2(800), g5.oZ(1, 0), g5.oZ(3, 7), g5.oZ(3, 1), g5.oZ(2, 2 === b7.id ? 2 : 12 <= b7.de ? 1 : 0 < b7.de ? 3 : 0), g5.oZ(1, d9 ? 1 : 0), g5.oZ(1, dB ? 1 : 0), g5.oZ(1, a.d4), eF = 0; eF < oY.length && !(g5.fz + 6 > 8 * g5.size); eF++)
			g5.oZ(6, oY[eF]);
		rh.send(g5.mI), rh.onopen = null
	}
	window.addEventListener("error", function error(dD) {
		window.removeEventListener("error", error);
		return alert("Error:\n" + dD.filename + " " + dD.lineno + " " + dD.colno + " " + dD.message);
		var ri, rj;
		window.removeEventListener("error", error), ri = dD.lineno + " " + dD.colno + " " + dD.message, (rj = new cK).cq(), oY = rj.oU(rj.oT(ri)), (rh = new WebSocket("wss://territorial.io/s52/")).onopen = rk, 0 === dD.lineno && 0 === dD
			.colno || (b7.oH ? b7.oH.showToast(ri) : alert(ri))
	})
}

function cn() {
	function ru(title, rx, dD) {
		rn(dD), ar.ry(title, rx)
	}

	function rn(dD) {
		! function(dD) {
			var dW = x.dY();
			0 === dW ? a0.s0() : 6 === dW ? aN.ix.s1(dD) : 7 === dW ? (aG.s0(), aN.ix.close(aN.ix.rq, 3240)) : 8 === dW && (s2(!0), a0.s0())
		}(dD), a0.cq(), b3.d1 = !0
	}
	this.rl = function(rm, dD) {
		var dW = x.dY();
		if (6 === dW) {
			if (4211 === dD) return rn(dD), void ar.ro();
			if (4214 !== dD) return void w.rp(rm)
		} else {
			if (7 !== dW) return 8 === dW ? void(rm !== aN.ix.rr || io || k.rs(aV.rt(dD))) : void 0;
			if (rm !== aN.ix.rq) return
		}
		ru(aV.rv(64), aV.rt(dD), dD)
	}, this.rw = function(dD) {
		8 === x.dY() ? k.rs(aV.rt(dD)) : ru(aV.rv(64), aV.rt(dD))
	}
}

function cM() {
	var s3, s4, s5 = -15e3,
		s6 = !1;

	function g8(dD) {
		sP() || (s6 = !0, sQ(dD, 1), aN.ix.sR(aN.ix.rr), sS(Math.floor(aK.nA * dD.clientX), Math.floor(aK.nA * dD.clientY)))
	}

	function sE(dD) {
		s5 = b3.da, sQ(dD, 1), aN.ix.sR(aN.ix.rr), 0 < dD.touches.length && (s3 = Math.floor(aK.nA * dD.touches[0].clientX), s4 = Math.floor(aK.nA * dD.touches[0].clientY), aE.sE(dD) || sS(s3, s4))
	}

	function sS(fK, fL) {
		0 === qw ? x.g8(fK, fL) : aa.sT(fK, fL) || b2.g8(fK, fL) || u.g8(fK, fL) || i.sU(fK, fL) || m.g8(fK, fL) || j.g8(fK, fL) || ag.sV(fK, fL) || aI.g8(fK, fL) || i.sW(fK, fL)
	}

	function sA(dD) {
		sP() || (s6 = !0, sQ(dD, 1), sX(Math.floor(aK.nA * dD.clientX), Math.floor(aK.nA * dD.clientY)))
	}

	function sF(dD) {
		s5 = b3.da, sQ(dD, 1), 0 < dD.touches.length && (s3 = Math.floor(aK.nA * dD.touches[0].clientX), s4 = Math.floor(aK.nA * dD.touches[0].clientY), aE.sF(dD) || sX(s3, s4))
	}

	function sX(fK, fL) {
		0 === qw ? x.sA(fK, fL) : (aq.fJ(fK, fL), b2.sA(fK, fL) || (j.sA(fK, fL), i.dZ() ? i.sA(fK, fL) : o.sY ? o.sA(fK, fL) && (b3.d1 = !0) : (s.sA(fK, fL), p.kA && p.sA(fK, fL) && (b3.d1 = !0))))
	}

	function sC(dD) {
		sP() || (sQ(dD, 1), 0 === qw ? (x.click(-1024, -1024), q.sZ()) : (s.sa(-1024, -1024), j.sA(-1024, -1024), o.sb(), p.kA && (p.kA = !1)))
	}

	function sB(dD) {
		sP() || (sQ(dD, 1), sc(Math.floor(aK.nA * dD.clientX), Math.floor(aK.nA * dD.clientY), 2 === dD.button))
	}

	function click(dD) {
		sP() || sQ(dD, 1)
	}

	function sG(dD) {
		s5 = b3.da, sQ(dD, 1), dD && dD.touches && 0 < dD.touches.length && 0 !== qw ? p.kA = !1 : aE.sd() || sc(s3, s4, !1)
	}

	function sH(dD) {
		s5 = b3.da, sQ(dD, 1), sc(s3, s4, !1)
	}

	function sI(dD) {
		aT.sI(dD)
	}

	function sJ(dD) {
		aT.sJ(dD)
	}

	function sK(dD) {
		sP() || sQ(dD, 0)
	}

	function sc(fK, fL, se) {
		0 === qw ? x.click(fK, fL) : (s.sa(fK, fL), b2.sa(), o.sb(), p.kA = !1, i.click(fK, fL, se) && (b3.d1 = !0))
	}

	function sD(dD) {
		var fK, fL, deltaY;
		sP() || (sQ(dD, 1), aN.ix.sR(aN.ix.rr), fK = Math.floor(aK.nA * dD.clientX), fL = Math.floor(aK.nA * dD.clientY), deltaY = dD.deltaY, 1 === dD.deltaMode && (deltaY *= 16), 0 === qw ? x.sD(fK, fL, deltaY) : s.sD(fK, fL, deltaY) || (o.sf(fK,
			fL) ? o.sD(deltaY) && (b3.d1 = !0) : p.sD(fK, fL, +deltaY)))
	}

	function sL(dD) {
		sQ(dD, 0)
	}

	function sQ(dD, id) {
		0 === id && (av.dZ || y.dZ || ar.dZ()) || 1 === id && y.sg || (id = window.innerWidth / document.documentElement.clientWidth) < .999 || 1.001 < id || 0 !== x.dY() && dD.preventDefault()
	}

	function sM(dD) {
		sP() || b3.da < 400 || ar.si(dD) || (8 !== x.dY() && x.si(dD) ? b3.d1 = !0 : "Escape" === dD.key ? x.df() : "ArrowLeft" === dD.key || "a" === dD.key ? aB.sj(3) : "ArrowUp" === dD.key || "w" === dD.key ? aB.sj(0) : "ArrowRight" === dD.key ||
			"d" === dD.key ? aB.sj(1) : "ArrowDown" === dD.key || "s" === dD.key ? aB.sj(2) : "h" === dD.key ? 1 <= qw && aa.sk(!k9) : " " === dD.key && qw && (aq.fM(), j.fO && j.sl(), fN) && aa.sm(!1))
	}

	function sN(dD) {
		if (keybindHandler(dD.key)) return;
		sP() || ("ArrowLeft" === dD.key ? aB.sn(3) : "ArrowUp" === dD.key ? aB.sn(0) : "ArrowRight" === dD.key ? aB.sn(1) : "ArrowDown" === dD.key ? aB.sn(2) : "a" === dD.key ? o.so(.9375) : "d" === dD.key ? o.so(16 / 15) : "s" === dD.key ? o.so(7 /
				8) : "w" === dD.key ? o.so(8 / 7) : "1" === dD.key ? o.so(.75) : "2" === dD.key ? o.so(7 / 8) : "3" === dD.key ? o.so(.9375) : "4" === dD.key ? o.so(31 / 32) : "5" === dD.key ? o.so(32 / 31) : "6" === dD.key ? o.so(16 / 15) :
			"7" === dD.key ? o.so(8 / 7) : "8" === dD.key ? o.so(4 / 3) : "+" === dD.key ? 0 !== qw && p.sD(Math.floor(aK.g5 / 2), Math.floor(aK.gB / 2), -200) : "-" === dD.key ? 0 !== qw && p.sD(Math.floor(aK.g5 / 2), Math.floor(aK.gB / 2),
			200) : "c" === dD.key && 0 !== qw && b2.sp())
	}

	function sO() {
		"hidden" === document.visibilityState ? 1 === qw && (fN ? aa.sm(!1) : !io || j.fO || fc || j.sl()) : b3.d1 = !0
	}

	function sP() {
		return s5 + 15e3 > b3.da
	}

	function resize() {
		aK.ss()
	}
	this.s7 = 0, this.s8 = "", this.cq = function() {
		s9.addEventListener("mousedown", g8, {
			passive: !1
		}), s9.addEventListener("mousemove", sA, {
			passive: !1
		}), s9.addEventListener("mouseup", sB, {
			passive: !1
		}), s9.addEventListener("click", click, {
			passive: !1
		}), s9.addEventListener("mouseleave", sC, {
			passive: !1
		}), s9.addEventListener("wheel", sD, {
			passive: !1
		}), s9.addEventListener("touchstart", sE, {
			passive: !1
		}), s9.addEventListener("touchmove", sF, {
			passive: !1
		}), s9.addEventListener("touchend", sG, {
			passive: !1
		}), s9.addEventListener("touchcancel", sH, {
			passive: !1
		}), s9.addEventListener("dragover", sI), s9.addEventListener("drop", sJ), s9.addEventListener("dblclick", sK), document.addEventListener("contextmenu", sL), document.addEventListener("keyup", sM), document.addEventListener("keydown",
			sN), document.addEventListener("visibilitychange", sO), window.addEventListener("resize", resize)
	}, this.sV = function(fK, fL) {
		return !!aa.g8(fK, fL) || !!(s.g8(fK, fL) || p.g8(fK, fL) || o.g8(fK, fL) || k.g8(fK, fL))
	}, this.sq = sP, this.sr = function() {
		return !s6 || 0 < s5
	}
}

function cE() {
	this.g0 = new st, this.ou = new su, this.fP = new sv, this.jk = new sw, this.cq = function() {
		this.g0.oQ()
	}
}

function su() {
	this.ov = function(dn) {
		dn.fill(0)
	}, this.sx = function(dn) {
		for (var eb = dn.length, eF = 0; eF < eb; eF++) dn[eF] = []
	}, this.sy = function(gb, ft) {
		for (var gc = al.dj, eF = 0; eF < 3; eF++) gc[eF] = ft * gb[eF];
		return gc
	}, this.sz = function(gb, gc, t0) {
		for (var gg = 0, eF = 0; eF < 3; eF++) gg += Math.abs(gb[eF] - gc[eF]);
		return t0 <= gg
	}, this.t1 = function(gb, t2) {
		for (var eF = 0; eF < 3; eF++) gb[eF] = ai.lQ(gb[eF] + t2, 0, 255);
		return gb
	}, this.t3 = function(dn, t4 = 0, t5 = dn.length - 1) {
		for (var t6 = 0, eF = t4; eF <= t5; eF++) t6 += dn[eF];
		return t6
	}, this.t7 = function(dn, t8) {
		for (var eF, t9, eb = dn.length, tA = [], ha = eb - 1; 0 <= ha; ha--) {
			for (eF = t9 = 0; eF < eb; eF++) t8(dn[eF]) < t8(dn[t9]) && (t9 = eF);
			eb--, tA.push(dn[t9]), dn[t9] = dn[eb], dn.pop()
		}
		return tA
	}
}

function st() {
	var tB = null;
	this.tC = 0, this.oQ = function() {
		var dd = b9.dF.data[5].value;
		tB = "px " + dd, "Trebuchet MS" !== dd && (tB += ", Trebuchet MS"), this.tC = gH(32, 32, ["a", "b", "m"], 200, tB)
	}, this.ok = function(g5, gB) {
		var iM = document.createElement("canvas");
		return iM.width = g5, iM.height = gB, iM
	}, this.getContext = function(gO, alpha) {
		return gO.getContext("2d", {
			alpha: alpha
		})
	}, this.getImageData = function(q1, g5, gB) {
		return q1.getImageData(0, 0, g5, gB)
	}, this.kV = function(gR, tD, hj) {
		return "rgb(" + gR + "," + tD + "," + hj + ")"
	}, this.kX = function(gR, tD, hj, ha) {
		return "rgba(" + gR + "," + tD + "," + hj + "," + ha.toFixed(3) + ")"
	}, this.g1 = function(type, size) {
		return size = size.toFixed(2), 0 === type ? size + tB : 1 === type ? "bold " + size + tB : 2 === type ? "lighter " + size + tB : 3 === type ? "italic " + size + tB : 4 === type ? "oblique " + size + tB : 5 === type ? "small-caps " +
			size + tB : "small-caps bold " + size + tB
	}, this.textAlign = function(gP, id) {
		gP.textAlign = 0 === id ? "left" : 1 === id ? "center" : "right"
	}, this.textBaseline = function(gP, id) {
		gP.textBaseline = 1 === id ? "middle" : "bottom"
	}, this.nF = function(dD, code = 5, color = aZ.gG) {
		color = this.nE(b0.tE) + " solid " + color;
		5 === code ? dD.style.border = color : 4 === code ? dD.style.borderLeft = color : 2 === code ? dD.style.borderBottom = color : 6 === code ? dD.style.borderRight = color : dD.style.borderTop = color
	}, this.n7 = function(dd) {
		return 1 + dd * b7.cv.fv()
	}, this.nZ = function(kH, ej = .5) {
		return kH * this.n7(ej) * aK.fw / aK.nA
	}, this.nE = function(dd) {
		return dd.toFixed(1) + "px"
	}, this.tF = function(tG, tH) {
		for (var fy = "<ul>", eb = tG.length, eF = 0; eF < eb; eF++) fy += "<li>" + tG[eF] + ": <a href='" + tH[eF] + "' target='_blank'>" + tH[eF] + "</a></li>";
		return fy += "</ul>"
	}
}

function sv() {
	this.fQ = function(dW) {
		return 0 === dW ? 1 === qw && fc : 1 === dW ? 1 === qw && !fc : 2 === qw
	}, this.fR = function(player) {
		return 0 !== h3[player] && 2 !== h4[player]
	}, this.ma = function(tI, tJ) {
		return tI !== tJ
	}, this.ly = function(player, dd) {
		return dd = this.tK(player, dd), eX[player] += dd, dd
	}, this.tK = function(player, dd) {
		var tL = eX[player];
		return dd = Math.min(dd, f1[player] * tM - tL), dd = Math.min(dd, tN - tL), Math.max(dd, 0)
	}, this.mb = function(player, h6, tO, tP) {
		var tL = eX[player],
			h6 = ai.fG(tL * (h6 + 1), 1024),
			tO = ai.fG(tO * tL, 1024),
			h6 = Math.min(h6, tL - tO);
		return 10 === il && (h6 = aR.tR(player, h6)), al.dh[0] = h6, al.dh[1] = tO, tP <= h6
	}, this.lv = function(player, le, ld) {
		var player = eX[player],
			tQ = ai.fG(64 * player, 1024);
		return le = Math.min(le, player - tQ), tQ += player = this.tT(le), le = this.tK(ld, le -= player), al.dh[0] = le, al.dh[1] = tQ, 1 <= le
	}, this.lx = function(le, ld) {
		var tS = this.tT(le);
		return le = this.tK(ld, le -= tS), al.dh[0] = le, al.dh[1] = tS, 1 <= le
	}, this.h5 = function(player, tU) {
		return ai.fG(eX[player] * (tU + 1), 1024)
	}, this.tT = function(tV) {
		return ai.fG(Math.max(2142 - b3.iL(), 0) * tV, 2142)
	}, this.mn = function(player, tO) {
		eX[player] -= ai.fG(tO * eX[player], 1024)
	}, this.md = function(player) {
		eX[player] -= al.dh[0] + al.dh[1]
	}, this.mc = function(player, hT) {
		return (hT = Math.min(hT, ef)) < ef && 0 === h3[hT] && (hT = ef), (al.dl[0] = hT) === ef || fr(player, hT)
	}, this.mf = function(player, ld) {
		return 0 !== h3[ld] && !fr(player, ld)
	}
}

function sw() {
	this.jl = function(dd) {
		var eF, tW, tX, tY, tZ;
		if (dd < 0) return "-" + this.jl(Math.abs(dd));
		if (dd < 1e3) return dd.toString();
		for (tW = Math.floor(Math.log(dd + .5) / Math.log(10)) + 1, tX = Math.floor((tW - 1) / 3), tZ = (tY = dd.toString()).substring(tW - 3, tW), eF = 1; eF < tX; eF++) tZ = tY.substring(tW - 3 * (eF + 1), tW - 3 * eF) + " " + tZ;
		return tY.substring(0, tW - 3 * tX) + " " + tZ
	}, this.ta = function(ei, tW) {
		return ei.toFixed(tW) + "%"
	}, this.tb = function(dd, tc = 3) {
		return dd.toFixed(Math.max(Math.floor(tc - Math.log10(dd)), 0))
	}, this.td = function(username) {
		var tf, te = username.indexOf("[");
		return !(te < 0) && 1 < (tf = username.indexOf("]")) - te && tf - te <= 8 ? username.substring(te + 1, tf).toUpperCase().trim() : null
	}
}

function tg() {
	this.hQ = function(player, fX) {
		g.pp(player, aj.gY(fX), aj.ga(fX)) && (b3.d1 = !0), io && this.i7()
	}, this.i7 = function() {
		var eF;
		for (fc = !1, eF = 0; eF < h2; eF++) 0 !== h3[eF] && 0 === f1[eF] && g.pv(eF);
		0 !== h3[eW] ? (b1.eZ[7] = f1[eW], b1.eZ[8] = eX[eW], o.gC(), t.th(), fN || f.k6(hv[eW] - 5, hy[eW] - 5, hu[eW] + 5, hx[eW] + 5), aF.cq()) : u.show(!1, !1, !1, !0), k.ti(18), a6.tj(), a6.j6(!0), am.ix.tk(), mZ = null, ay.tl = !0, ay.tm(),
			io && b7.cv.setState(1)
	}
}
var io, fN, tn, tN, to, eW, k9, fc, tp, hN, tq, il, rN, mZ, qs, tr, h8, h7, h9, xb, jG, zZ, jm, wC, h3, hv, hy, hu, hx, f1, ph, eX, ec, et, eu, ex, h4, iP, iO, s9, gF, pz, a19, u6, u7, ef = 512,
	pS = 512,
	tM = 150,
	qw = 0,
	pi = 512,
	eU = 2;

function ts(tt, tu, qA, tv, tw, tx) {
	k9 = !1, fN = tx, rN = tw, hN = (il = tv) < 7 || 9 === il, qz = h2 = qA.length, io = 1 === qz, tq = 9 === (il = 8 === (il = 10 === il && io ? 7 : il) && 2 !== h2 ? 7 : il) ? 2 : il + 2, tr = h2 <= 2 ? 30 : h2 <= 50 ? 40 : 50, tp = fc = !(aU.ii &&
			!aU.ij.ty) && (hN || h2 < 100), mZ = fc ? new tg : null, pi = 512, pS = ef, io && (pS = z.tz()), ih = pS - h2, qy = 0, eW = tu, aL.u0(tt), aM.cq(), u1(qA), aW.lV.mM = [], b4.cq(qA), qw = 1, tN = 15e8, to = 1e9, b1.cq(), u2(), a9.u3(), ay
		.cq(), a5.cq(), i2(), a2.cq(qA), aD.cq(), aj.cq(), ak.cq(), ao.cq(), b.cq(), a7.d2(), a7.u4(), g.cq(), u5(), aX.cq(tt, qA, tv, tw), b5.cq(), an.cq(), am.cq(), b2.cq(), u6.putImageData(u7, 0, 0), s.cq(), p.cq(), o.cq(), aa.cq(), aI.cq(), r
		.cq(), t.cq(), j.cq(), n.cq(), k.cq(), m.cq(), i.cq(), u.cq(), e.cq(), c.cq(), d.cq(), e9(), a4.cq(), a6.cq(), aR.cq(), aQ.cq(), aS.cq(), aO.cq(), 8 === il ? (qs = new q9).cq(qA) : qs = null, b3.u8(), u9(), aF.cq(), b3.d1 = !0, fN || io &&
		fc || b7.cv.setState(1)
}

function u9() {
	f.k5(), 0 === h3[eW] && u.show(!1, !0), a6.j6(!0)
}

function s2(uA) {
	aN.ix.close(aN.ix.rr, 3246), qw = 0, b3.uB(), b7.cv.setState(0), a0.cq(!uA)
}

function cm() {
	this.uC = 0, this.gap = 0, this.tE = 0, this.nC = 0, this.cq = function() {
		this.resize()
	}, this.resize = function() {
		this.uC = .0022 * aY.g0.n7(.5) * aK.fw, this.tE = this.uC / aK.nA, this.gap = Math.max(Math.floor((b7.cv.fv() ? .0114 : .01296) * aK.fw), 2), this.nC = this.gap / aK.nA
	}
}

function cl() {
	this.uD = function() {
		return 2 === b7.id ? 4 : b7.cv.fv() ? 2 : 1
	}
}

function bQ() {
	var nM, fK, fL, uE, uF, uG, da, player, uH, gap, zoom, m7, uI;

	function uY(player) {
		for (var eF = m7.length - 1; 0 <= eF; eF--)
			if (m7[eF] === player) return 1
	}

	function uW(uT) {
		var eF, eb;
		if (-1 !== uT)
			for (eb = nM.length, eF = 0; eF < eb; eF++)
				if (nM[eF].dZ && nM[eF].fK + 1 === uT % 4 && nM[eF].fL + 1 === uT >> 2) return eF;
		return -1
	}

	function uV(g9, gA) {
		var tD = gap / 2;
		return g9 < fK - uE - 3 * tD || fK + 3 * uE + 5 * tD < g9 || gA < fL - uE - 3 * tD || fL + 2 * uE + 3 * tD < gA ? -1 : 4 * (gA < fL - tD ? 0 : gA < fL + uE + tD ? 1 : 2) + (g9 < fK - tD ? 0 : g9 < fK + uE + tD ? 1 : g9 < fK + 2 * uE + 3 *
			tD ? 2 : 3)
	}
	this.uJ = function() {
		var eF, hj, uM = [aZ.kw, aZ.l6, aZ.kb, aZ.lK, aZ.lD];
		for (nM = new Array(8), eF = 0; eF < 8; eF++) nM[eF] = {
			id: eF,
			dZ: !1,
			uN: 0,
			gO: [],
			fK: 0,
			fL: 0
		};
		for (nM[0].colors = [0, 1, 2, 3], nM[0].fK = 0, nM[0].fL = 0, nM[1].colors = [0, 1, 4], nM[1].fK = 1, nM[1].fL = 0, nM[2].colors = [0, 2], nM[2].fK = -1, nM[2].fL = 0, nM[3].colors = [0], nM[3].fK = 0, nM[3].fL = 0, nM[4].colors = [0, 2],
			nM[4].fK = 1, nM[4].fL = 1, nM[5].colors = [3], nM[5].fK = 0, nM[5].fL = -1, nM[6].id = 20, nM[6].colors = [0], nM[6].fK = 1, nM[6].fL = -1, nM[7].id = 21, nM[7].colors = [0], nM[7].fK = 0, nM[7].fL = 1, eF = 0; eF < 8; eF++)
			for (hj = 0; hj < nM[eF].colors.length; hj++) nM[eF].gO.push(function(id, uO) {
				var gI = a1.get(3).height,
					uP = aY.g0.ok(gI, gI),
					gP = aY.g0.getContext(uP);
				20 === id ? gP.drawImage(a1.get(18), 0, 0) : 21 === id ? gP.drawImage(a1.uQ("emojis"), -4 * gI, 0) : (function(g5, q1, uS) {
					q1.fillStyle = uS, q1.beginPath(), q1.arc(Math.floor(g5 / 2), Math.floor(g5 / 2), Math.floor(.47 * g5), 0, 2 * Math.PI), q1.fill()
				}(gI, gP, uO), gP.drawImage(a1.get(3), -id * gI, 0));
				return uP
			}(nM[eF].id, uM[nM[eF].colors[hj]]))
	}, this.uL = function() {
		return nM
	}, this.cq = function() {
		m7 = [], fK = fL = da = 0, uF = uG = -1e3, this.resize()
	}, this.resize = function() {
		uE = Math.floor((b7.cv.fv() ? .075 : .0468) * aK.fw), zoom = uE / a1.get(3).height, gap = Math.floor(uE / 3)
	}, this.sU = function(g9, gA) {
		return !!this.dZ() && (b3.d1 = !0, !!az.g8(g9, gA, player) || (g9 = function(g9, gA) {
			var uT, eF;
			if (uG = uF = -1e3, uT = uV(g9, gA), -1 === (uT = uW(uT))) return 0;
			if (1 === nM[uT].colors[nM[uT].uN]) return 0;
			if (5 === uT) {
				if (! function() {
						var db = (new Date).getTime();
						uI + 4e3 < db && (m7 = []);
						uI = db
					}(), uY(player)) return 1;
				m7.push(player), 16 < m7.length && m7.shift()
			} else if (6 === uT) {
				for (eF = m7.length - 1; 0 <= eF; eF--) 0 === h3[m7[eF]] && m7.splice(eF, 1);
				0 < m7.length && (aS.uZ(1, m7, !0) && aW.fP.m6(m7, player), m7 = [])
			} else if (2 === uT) aW.fd.lc(o.fm(), player);
			else if (3 === uT) fc && aW.fd.fe(uH);
			else if (0 === uT)
				if (0 === nM[0].uN) {
					if (tp && t.ua() < 300) return 1;
					aW.fd.fo(o.fm(), player)
				} else aO.fq(player, o.fm());
			else if (1 === uT) aW.fd.fl(o.fm(), uH);
			else {
				if (7 === uT) return az.show(g9, gA), 2;
				if (4 !== uT) return 0;
				aS.uZ(0, [player], !0) && aW.fP.m3(player)
			}
			return 1
		}(g9, gA), this.np(), 2 === g9 && (az.dZ = !0), 0 < g9))
	}, this.sW = function(g9, gA) {
		this.dZ() || (uF = g9, uG = gA, da = (new Date).getTime())
	}, this.click = function(g9, gA, se) {
		var fT = aj.fU(g9),
			fV = aj.fW(gA),
			fX = aj.fY(fT, fV),
			fZ = aj.fa(fX);
		return !(!aj.fb(fT, fV) || (fT = (b7.cv.fv() ? .025 : .0144) * aK.fw, Math.abs(g9 - uF) > fT) || Math.abs(gA - uG) > fT || performance.now() > da + 425) && (se ? (function(g9, gA, fZ) {
			a2.ed(fZ) || -1 === (g9 = ak.ff.um(g9, gA)) ? k.ul(fZ) : k.un(g9)
		}(g9, gA, fZ), !1) : j.fO || this.dZ() || !aY.fP.fR(eW) || fN ? (this.np(), !1) : fc ? !!a2.ed(fZ) && (uH = fX, nM[3].dZ = !0, this.ud(g9, gA)) : (ak.ff.fg(fX) || ak.ff.fh(g9, gA) || (2 === qw ? a2.el(fZ) && 0 < az.ue && (player =
			a2.em(fZ), a2.uf(player)) && (nM[0].dZ = !0, nM[0].uN = 1, nM[7].dZ = !0) : a2.fi(fZ) || (uH = fX, ak.ff.fk(eW, fX) && (nM[0].dZ = !0, nM[0].uN = 1, nM[1].dZ = !0, nM[1].uN = al.dk[2] ? 0 : 2), a2.fj(fZ)) || (a2.en(
			fZ) ? (player = ef, fn(eW) ? (nM[0].dZ = !0, nM[0].uN = 0) : fp(eW, player) && (nM[0].dZ = !0, nM[0].uN = 3)) : (player = a2.em(fZ)) === eW ? 0 !== az.ue && (nM[0].dZ = !0, nM[0].uN = 1, nM[7].dZ = !0) : (nM[0].uN = 1,
				nM[5].dZ = function(player) {
					return a2.uf(player) && !uY(player) && aS.uZ(1, [player], !1)
				}(player), nM[7].dZ = 1 <= az.ue && a2.uf(player), fr(player, eW) ? (nM[4].dZ = a2.uf(player) && !a6.uh(player) && aS.uZ(0, [player], !1), nM[6].dZ = function(player) {
					if (0 === m7.length) return !1;
					if ((new Date).getTime() > uI + 4e3) return !(m7 = []);
					return !uY(player) && ! function(player) {
						var eF;
						if (hN)
							for (eF = m7.length - 1; 0 <= eF; eF--)
								if (!fr(player, m7[eF])) return 1;
						return
					}(player)
				}(player), fs(eW, player) ? (nM[0].uN = 0, nM[0].dZ = !0) : fp(eW, player) && (nM[0].uN = 3, nM[0].dZ = !0), nM[0].dZ = this.uj()) : (nM[2].dZ = !0, nM[0].dZ = !0)))), this.ud(g9, gA)))
	}, this.ud = function(g9, gA) {
		return fK = g9 - Math.floor(uE / 2), fL = gA - Math.floor(uE / 2), !!this.dZ()
	}, this.sA = function(g9, gA) {
		return !!this.dZ() && (az.dZ ? !az.up(g9, gA) && (az.uq(), az.dZ = !1, b3.d1 = !0) : function(us, g9, gA) {
			g9 = uV(g9, gA);
			if (0 <= uW(g9)) return !1;
			if ((1 === g9 || 6 === g9) && 0 <= uW(2)) return !1;
			if ((6 === g9 || 9 === g9) && 0 <= uW(10)) return !1;
			return us.np(), b3.d1 = !0
		}(this, g9, gA))
	}, this.np = function() {
		for (var eF = nM.length - 1; 0 <= eF; eF--) nM[eF].dZ = !1, nM[eF].uN = 0;
		az.dZ = !1
	}, this.dZ = function() {
		return this.uj() || az.dZ
	}, this.uj = function() {
		for (var eb = nM.length, eF = 0; eF < eb; eF++)
			if (nM[eF].dZ) return !0;
		return !1
	}, this.gE = function() {
		if (this.dZ())
			if (az.dZ) az.gE();
			else {
				var eF, gP = gF,
					hj = nM,
					eb = hj.length,
					uu = (uE + gap) / zoom;
				for (gP.imageSmoothingEnabled = !0, gP.setTransform(zoom, 0, 0, zoom, fK, fL), eF = 0; eF < eb; eF++) hj[eF].dZ && gF.drawImage(hj[eF].gO[hj[eF].uN], hj[eF].fK * uu, hj[eF].fL * uu);
				gP.imageSmoothingEnabled = !1, gP.setTransform(1, 0, 0, 1, 0, 0)
			}
	}
}

function bR() {
	var gB, gO, g4, uv, uw;

	function ux() {
		var uy, q1 = gO.getContext("2d", {
			alpha: !0
		});
		q1.clearRect(0, 0, gB, gB), q1.fillStyle = aZ.kY, q1.fillRect(0, 0, gB, gB), 0 === uv && (q1.fillStyle = aZ.kd, q1.fillRect(0, 0, gB, gB)), q1.fillStyle = aZ.gG, q1.fillRect(0, 0, gB, 1), q1.fillRect(0, 0, 1, gB), q1.fillRect(0, gB - 1, gB,
			1), q1.fillRect(gB - 1, 0, 1, gB), uy = .9 * gB / a1.get(0).width, q1.imageSmoothingEnabled = !0, q1.setTransform(uy, 0, 0, uy, Math.floor((gB - uy * a1.get(0).width) / 2), Math.floor((gB - uy * a1.get(0).height) / 2)), q1.drawImage(
			a1.get(0), 0, 0), q1.setTransform(1, 0, 0, 1, 0, 0)
	}

	function v1(g9, gA) {
		if (!j.fO) return g9 <= gB + b0.gap && gA >= o.fL ? 0 : -1;
		if (g9 <= 4 * gB + b0.gap) {
			if (gA >= o.fL) return 0;
			if (gA >= o.fL - gB - uw * b0.gap) return 2
		} else if (g9 <= 7 * gB + b0.gap && gA >= o.fL - gB - uw * b0.gap) return 1;
		return -1
	}
	this.fO = !1, this.cq = function() {
		uv = -1, this.fO = !1, uw = b7.cv.fv() ? 1.2 : .6, this.resize()
	}, this.resize = function() {
		gB = o.gB, (gO = document.createElement("canvas")).width = gB, gO.height = gB, g4 = aY.g0.g1(1, (b7.cv.fv() ? .5 : .45) * gB), ux()
	}, this.sl = function() {
		this.fO = !this.fO, this.fO ? (aa.sk(!1), fN && aa.uz && aa.sm(!0), this.v0()) : (uv = -1, ux(), io && 1 === qw && !fc && b7.cv.setState(1)), b3.d1 = !0
	}, this.v0 = function() {
		(io || fN) && 1 === qw && (s.j6(!0), fc || setTimeout(function() {
			ay.r4()
		}, 0), b7.cv.setState(0))
	}, this.g8 = function(g9, gA) {
		var uN = v1(g9, gA);
		if (this.fO) {
			if (k9) return 0 <= uN && aa.sk(!1), !fN;
			if (0 === uN) s2();
			else if (1 === uN) this.sl();
			else if (2 === uN) ar.v2();
			else {
				if (!(io || 1 !== qw || fN || b2.dZ) && (j.sl(), 1)) return !1;
				ag.sV(g9, gA) || i.sW(g9, gA)
			}
			return !0
		}
		return 0 === uN && (this.sl(), !0)
	}, this.sA = function(g9, gA) {
		g9 = v1(g9, gA);
		g9 !== uv && (uv = g9, this.fO || ux(), b3.d1 = !0)
	}, this.gE = function() {
		var g5;
		this.fO ? (g5 = Math.floor(5.5 * gB), gF.setTransform(1, 0, 0, 1, b0.gap, o.fL), gF.fillStyle = aZ.kY, gF.fillRect(0, 0, g5, gB), 0 === uv ? (gF.fillStyle = aZ.kd, gF.fillRect(0, 0, 4 * gB, gB)) : 1 === uv && (gF.fillStyle = aZ.kd, gF
				.fillRect(4 * gB, 0, Math.floor(1.5 * gB), gB)), gF.fillStyle = aZ.gG, gF.fillRect(0, 0, g5, 1), gF.fillRect(0, 0, 1, gB), gF.fillRect(4 * gB, 0, 1, gB), gF.fillRect(0, gB - 1, g5, 1), gF.fillRect(g5 - 1, 0, 1, gB), gF.font =
			g4, aY.g0.textBaseline(gF, 1), aY.g0.textAlign(gF, 1), gF.fillText(aV.nU[79], 2 * gB, .54 * gB), g5 = .4 * gB, j.v7(b0.gap + 4 * gB + (1.5 * gB - g5) / 2, o.fL + .3 * gB, g5), g5 = 1, gF.setTransform(1, 0, 0, 1, b0.gap, o.fL -
				g5 * uw * b0.gap - g5 * gB), gF.fillStyle = aZ.kY, gF.fillRect(0, 0, 4 * gB, gB), uv === g5 + 1 && (gF.fillStyle = aZ.kd, gF.fillRect(0, 0, 4 * gB, gB)), gF.fillStyle = aZ.gG, gF.fillRect(0, 0, 4 * gB, 1), gF.fillRect(0, 0, 1,
				gB), gF.fillRect(4 * gB, 0, 1, gB), gF.fillRect(0, gB - 1, 4 * gB, 1), gF.fillText(aV.nU[79 + g5], 2 * gB, .54 * gB), gF.setTransform(1, 0, 0, 1, 0, 0)) : gF.drawImage(gO, b0.gap, o.fL)
	}, this.v6 = function(player) {
		return 0 !== h3[player] && 2 !== qw && a2.uf(player)
	}, this.v7 = function(fK, fL, eb) {
		gF.setTransform(1, 0, 0, 1, fK, fL), gF.lineWidth = b0.uC, gF.strokeStyle = aZ.gG, gF.beginPath(), gF.moveTo(0, 0), gF.lineTo(eb, eb), gF.moveTo(0, eb), gF.lineTo(eb, 0), gF.stroke()
	}
}

function bS() {
	var v9, gB, vA, vB, vC, vD, vE, vF, vG;

	function gD() {
		return o.va(k.vW()) ? aI.dZ ? o.fL - o.gB - 2 * vA : o.fL - vA : aa.va(k.vZ()) ? aI.dZ ? aa.gD() - o.gB - 2 * vA : aa.gD() - vA : aI.dZ ? aK.gB - o.gB - (bA.uD() + 1) * vA : aK.gB - bA.uD() * b0.gap
	}

	function vN(db, fy, id, ei, vR, vS, p5, vT, vU) {
		var eF, q1, vX, uP, n1, vd = void 0 !== vU,
			g5 = Math.floor(n.measureText(fy, k.g4) + 1.5 * vB + (vd ? gB : 1.5 * vB));
		if (b3.d1 = !0, g5 + vA > aK.g5 && !vd && 50 !== id && 20 < fy.length) vX = Math.floor(.5 * fy.length), vN(db, fy.substring(0, vX), id, ei, vR, vS, p5, vT, vU), vN(db, fy.substring(vX), id, ei, vR, vS, p5, vT, vU);
		else if (vX = g5 + (50 === id ? vC : 0), (uP = document.createElement("canvas")).width = g5, uP.height = gB, (q1 = uP.getContext("2d", {
				alpha: !0
			})).font = k.g4, aY.g0.textBaseline(q1, 1), aY.g0.textAlign(q1, 0), q1.clearRect(0, 0, g5, gB), q1.fillStyle = vS, q1.fillRect(0, 0, g5, gB), q1.fillStyle = vR, q1.fillText(fy, Math.floor(1.5 * vB), Math.floor(gB / 2)), vd && (vd = gB /
				az.g5, q1.imageSmoothingEnabled = !0, q1.setTransform(vd, 0, 0, vd, g5 - gB, 0), q1.drawImage(az.uP[vU], 0, 0)), 0 === (n1 = {
				da: db,
				fy: fy,
				id: id,
				player: ei,
				gO: uP,
				vR: vR,
				vS: vS,
				g5: g5,
				vX: vX,
				p5: p5,
				vT: vT,
				vU: vU
			}).da || 0 < v9.length && 0 < v9[0].da) v9.unshift(n1);
		else {
			for (eF = 1; eF < v9.length; eF++)
				if (0 < v9[eF].da) return void v9.splice(eF, 0, n1);
			v9.push(n1)
		}
	}

	function vP(gR, tD, hj) {
		return "rgb(" + gR + "," + tD + "," + hj + ")"
	}

	function ve(id, vw) {
		for (var eb = v9.length, eF = 0; eF < eb; eF++) v9[eF].id === id && vw-- <= 0 && (v9.splice(eF, 1), eF--, eb--)
	}

	function vf(id, player) {
		for (var vx = !1, eF = v9.length - 1; 0 <= eF; eF--) v9[eF].id !== id || player !== ef && v9[eF].player !== player || (v9.splice(eF, 1), vx = !0);
		return vx
	}

	function w2(fy) {
		vN(340, fy, 6, 0, vP(215, 245, 255), aZ.ka, -1, !1)
	}

	function wA(player, wB) {
		return (io || h2 <= player || wB || b9.dF.data[6].value ? jm : wC)[player]
	}
	this.vH = "", this.cq = function() {
		var self;
		vF = 0, vE = b7.cv.fv() ? 7 : 12, vD = {
			qA: [0, 0, 0],
			vI: [0, 0, 0],
			k3: [220, 180, 180],
			vJ: [0, 0, 0],
			iM: [0, 0, 0]
		}, v9 = [], this.resize(), fc && this.qn(0, 18), w2(aV.rv(37, [ap.ij.pF[ap.pG].name])), w2(aV.rv(38, [ap.eA - 2, ap.eB - 2])), w2(aV.rv(39, [a9.w3], {
			vn: [0]
		})), a9.w3 !== a9.w4 && w2(aV.rv(40, [a9.w4, a9.w4 / a9.w3], {
			vn: [0],
			w5: [1]
		})), 0 < a9.w6 && w2(aV.rv(41, [a9.w6, a9.w6 / a9.w3], {
			vn: [0],
			w5: [1]
		})), 0 < a9.w7 && w2(aV.rv(42, [a9.w7, a9.w7 / a9.w3], {
			vn: [0],
			w5: [1]
		})), 10 === il && vN(120, aV.rv(43), 6, 0, vP(235, 255, 120), aZ.ka, -1, !1), 0 !== (self = this).vH.length && (vN(200, self.vH, 0, 0, aZ.gG, aZ.ka, -1, !1), self.vH = ""), this.vM()
	}, this.vM = function() {
		var eF, eb;
		if (aU.ii)
			for (eb = aU.ij.vO.length, eF = 0; eF < eb; eF++) vN(400, aU.ij.vO[eF], 6, 0, vP(255, 255, 255), aZ.ka, -1, !1)
	}, this.resize = function() {
		var vQ, eF;
		if (gB = (gB = Math.floor((b7.cv.fv() ? .031 : .0249) * aK.fw)) < 10 ? 10 : gB, this.fontSize = Math.floor(2 * gB / 3), this.g4 = aY.g0.g1(1, this.fontSize), vA = b0.gap, vB = Math.floor(gB / 5), 0 < v9.length)
			for (vQ = v9, v9 = [], eF = vQ.length - 1; 0 <= eF; eF--) vN(vQ[eF].da, vQ[eF].fy, vQ[eF].id, vQ[eF].player, vQ[eF].vR, vQ[eF].vS, vQ[eF].p5, vQ[eF].vT, vQ[eF].vU);
		this.vV()
	}, this.vV = function() {
		vG = document.createElement("canvas");
		var fy = aV.rv(0),
			q1 = (vC = n.measureText(fy, this.g4) + 5 * vB, vG.height = gB, vG.width = vC, vG.getContext("2d", {
				alpha: !0
			}));
		q1.font = this.g4, aY.g0.textBaseline(q1, 1), aY.g0.textAlign(q1, 1), q1.clearRect(0, 0, vC, gB), q1.fillStyle = aZ.kt, q1.fillRect(0, 0, vC, gB), q1.fillStyle = aZ.gG, q1.fillText(fy, Math.floor(vC / 2), Math.floor(gB / 2))
	}, this.vW = function() {
		var eb;
		return aI.dZ ? aI.g5 : 0 === (eb = v9.length) ? 0 : 1 === eb ? v9[0].vX : vY(v9[0].vX, v9[1].vX)
	}, this.vZ = function() {
		var eb = v9.length;
		return aI.dZ ? eb ? vY(aI.g5, v9[0].vX) : aI.g5 : 0 === eb ? 0 : 1 === eb ? v9[0].vX : 2 === eb ? vY(v9[0].vX, v9[1].vX) : vY(vY(v9[0].vX, v9[1].vX), v9[2].vX)
	}, this.g8 = function(fK, fL) {
		for (var vb, vc = gD(), eF = v9.length - 1; 0 <= eF; eF--)
			if ((vb = vc - (eF + 1) * gB) <= fL && fL < vb + gB) return 50 === v9[eF].id ? fK >= aK.g5 - vC - vA - v9[eF].g5 && (fK >= aK.g5 - vC - vA ? aW.fP.m3(v9[eF].player) : f.k7(v9[eF].player, 800, !1, 0), !0) : fK >= aK.g5 - v9[eF].g5 -
				vA && (736 === v9[eF].id ? window.open("https://" + v9[eF].fy, "_blank") : v9[eF].vT && (f.k7(v9[eF].player, 800, !1, 0), 0 <= v9[eF].p5) && (vb = v9[eF].p5, v9[eF].p5 = v9[eF].player, v9[eF].player = vb), !0);
		return !1
	}, this.rO = function(db, fy, id, ei, vR, vS, p5, vT, vU) {
		vN(db, fy, id, ei, vR, vS, p5, vT, vU)
	}, this.ti = function(id) {
		for (var eF = v9.length - 1; 0 <= eF; eF--) v9[eF].id === id && (v9[eF].da = 1)
	}, this.qn = function(player, id) {
		0 === id ? (b1.eZ[player < h2 ? 4 : 3]++, n.hQ(player, 0), ve(423, 0), vN(160, aV.rv(1, [jm[player]]), 423, player, "rgb(10,220,10)", aZ.ka, -1, !1)) : 1 === id ? (vf(50, ef), n.hQ(player, 1), vN(360, aV.rv(2, [jm[player]]), 0, player,
			"rgb(255,40,40)", aZ.ka, -1, !0), f.k7(player, 2700, !1, 0)) : 2 === id ? (n.hQ(player, 2), vN(0, aV.rv(3), 0, player, "rgb(10,255,255)", aZ.ka, -1, !0), f.k7(player, 2700, !1, 0)) : 3 === id ? (n.hQ(player, 2), vN(0, aV.rv(4, [
			jm[player]
		]), 0, player, aZ.gG, aZ.ka, -1, !0), f.k7(player, 2700, !1, 0)) : 4 === id ? (qz--, qy--, this.vg(1, player, player)) : 5 === id ? 2 !== h4[player] && a2.uf(eW) && (function(id, jJ) {
			var eF, vq = 0,
				eb = v9.length;
			for (eF = 0; eF < eb; eF++)
				if (v9[eF].id === id && jJ <= ++vq) return v9.splice(eF, 1)
		}(1, 5), a6.vi(player) ? vN(180, aV.rv(5, [jm[player]]), 1, player, vP(255, 200, 180), aZ.ka, -1, !0) : (ve(573, 0), vN(180, aV.rv(6, [jm[player]]), 573, player, "rgb(255,70,10)", aZ.ka, -1, !0))) : 18 === id ? vN(255, aV.rv(7), 18,
			0, aZ.gG, aZ.ka, -1, !1) : 21 === id ? vN(220, aV.rv(8), id, 0, "rgb(255,40,40)", aZ.ka, -1, !1) : 22 === id ? this.vg(2, player, player) : 59 === id && vN(0, aV.rv(9), id, 0, aZ.lJ, aZ.ka, 0, !1)
	}, this.rs = function(rx) {
		vN(200, aV.rv(10, [rx]), 94, 0, aZ.gG, aZ.l4, -1, !1)
	}, this.qv = function(qq) {
		if (eW === qq) wins_counter++, window.localStorage.setItem("fx_winCount", wins_counter);
		n.hQ(qq, 2), vN(0, h2 < 100 ? aV.rv(11, [jm[qq]]) : aV.rv(12, [jm[qq]]), 3, qq, aZ.gG, aZ.ka, -1, !0), vN(0, "Your Current Win Count is Now " + wins_counter, 3, qq, aZ.gG, aZ.ka, -1, !0), f.k7(qq, 2700, !1, 0)
	}, this.ul = function(fZ) {
		var vj = "(" + aj.gY(fZ >> 2) + ", " + aj.ga(fZ >> 2) + ")",
			vT = !1,
			player = 0;
		a2.ed(fZ) ? a2.en(fZ) ? vj = aV.rv(13, [vj]) : (player = a2.em(fZ), vj = aV.rv(14, [jm[player], aY.jk.jl(eX[player]), aY.jk.jl(f1[player]), vj]), vT = !0) : vj = a2.fi(fZ) ? aV.rv(15, [vj]) : aV.rv(16, [vj]), b3.d1 = !0, ve(55, 0), vN(
			220, vj, 55, player, aZ.gG, aZ.ka, -1, vT)
	}, this.un = function(vk) {
		var oe = ak.ix,
			player = oe.vl[vk] >> 3;
		b3.d1 = !0, ve(55, 0), vN(220, aV.rv(17, [jm[player], oe.vm[vk]], {
			vn: [1]
		}), 55, player, aZ.gG, aZ.ka, -1, !0)
	}, this.lm = function(lY, vo, ln) {
		lY === eW ? vN(175, aV.rv(18, [jm[vo]]), 1001, vo, vP(200, 255, 210), aZ.ka, -1, !0, ln) : this.vp(lY, ln)
	}, this.vp = function(lY, ln) {
		ve(1e3, 0), vN(175, aV.rv(19, [jm[lY]]), 1e3, lY, aZ.gG, "rgba(5,60,25,0.9)", -1, !0, ln)
	}, this.qu = function(qr) {
		var rx;
		qr ? (rx = aV.rv(20), n.rD(aV.rv(21), 2, 1, 12), vN(0, rx, 40, 0, "rgb(10,220,10)", aZ.ka, -1, !1)) : (rx = aV.rv(22), n.rD(aV.rv(23), 2, 0, 16), vN(0, rx, 41, 0, "rgb(200,80,80)", aZ.ka, -1, !1)), f.kE(2700)
	}, this.qB = function(qA) {
		vN(300, qA[0].name + " [" + qs.qH(qA[0].qE) + "] vs " + qA[1].name + " [" + qs.qH(qA[1].qE) + "]", 65, 0, aZ.ji, "rgba(100,255,255,0.75)", -1, !1)
	}, this.vr = function(rx) {
		vN(200, rx, 0, 0, "rgb(40,255,200)", "rgba(10,60,40,0.9)", -1, !1)
	}, this.vs = function() {
		vN(0, aV.rv(24), 247, 0, aZ.lI, aZ.ka, -1, !1)
	}, this.qJ = function(qA, qG, qI, vt) {
		1 === aN.ix.vu() && (vN(0, qA[0].name + ": " + qs.qH(qA[0].qE) + " -> " + qG, 66, 0, aZ.gG, vt[0], -1, !1), vN(0, qA[1].name + ": " + qs.qH(qA[1].qE) + " -> " + qI, 66, 1, aZ.gG, vt[1], -1, !1))
	}, this.m4 = function(player, id) {
		0 === id ? vf(50, player) ? (vN(128, aV.rv(25, [jm[player]]), 52, player, vP(180, 255, 180), aZ.ka, -1, !0), a6.mq(player, 2, 255)) : vN(384, aV.rv(26, [jm[player]]), 51, player, vP(210, 210, 255), aZ.ka, -1, !0) : vf(51, player) ? (vN(
			128, aV.rv(27, [jm[player]]), 52, player, aZ.gG, "rgba(60,120,10,0.9)", -1, !0), a6.mq(player, 2, 255)) : (vN(384, aV.rv(28, [jm[player]]), 50, player, aZ.gG, "rgba(90,90,90,0.9)", -1, !0), a6.mq(player, 2, 96))
	}, this.m8 = function(qA, target) {
		var color = vP(210, 255, 210);
		1 < qA.length ? vN(230, aV.rv(29, [qA.length, jm[target]]), 66, target, color, aZ.ka, -1, !0) : vN(230, aV.rv(30, [jm[qA[0]], jm[target]]), 66, qA[0], color, aZ.ka, target, !0)
	}, this.vv = function(player, target) {
		vN(230, aV.rv(31, [jm[player], jm[target]]), 66, player, aZ.gG, "rgba(75,65,5,0.9)", target, !0)
	}, this.qm = function(id, player) {
		vf(id, player)
	}, this.la = function() {
		var fz;
		100 <= eX[eW] || (-1 === (fz = function(id) {
			for (var eF = v9.length - 1; 0 <= eF; eF--)
				if (v9[eF].id === id) return eF;
			return -1
		}(143)) ? vN(80, aV.rv(32), 143, 0, aZ.gG, aZ.ka, -1, !1) : v9[fz].da = 80)
	}, this.lz = function(vz, w0, player) {
		2 !== h4[eW] && (vN(200, aV.rv(33, [vz, jm[player]], {
			vn: [0]
		}), 30, player, "rgb(190,255,190)", aZ.ka, -1, !0), w0) && vN(30, aV.rv(34, [w0], {
			vn: [0]
		}), 30, 0, aZ.gG, aZ.ka, -1, !1)
	}, this.w1 = function(vz, player) {
		2 !== h4[eW] && (ve(31, 0), 2 === h4[player] || h2 <= player ? vN(150, aV.rv(36, [jm[player], vz], {
			vn: [1]
		}), 31, player, aZ.ji, "rgba(205,205,205,0.9)", -1, !0) : vN(150, aV.rv(35, [jm[player], vz], {
			vn: [1]
		}), 31, player, aZ.ji, "rgba(205,255,205,0.9)", -1, !0))
	}, this.r0 = function(w8) {
		for (var iM = b3.iL(), eF = 2; 0 <= eF; eF--) 0 < vD.vJ[eF] && (w8 || vD.iM[eF] < iM - 220) && this.w9(eF)
	}, this.w9 = function(id) {
		var fy, eb = vD.vJ[id],
			player = vD.qA[id];
		vD.vJ[id] = 0, 1 === eb ? (fy = 0 === id ? aV.rv(47, [wA(player, !0), wA(vD.vI[0], !0)]) : aV.rv(47 + id, [wA(player, !1)]), ve(7, 0), vN(vD.k3[id], fy, 7, vD.vI[id], aZ.gG, aZ.ka, -1, !0)) : 2 <= eb && (fy = aV.rv(44 + id, [wA(player,
			0 === id), eb - 1]), ve(7, 0), vN(vD.k3[id], fy, 7, player, aZ.gG, aZ.ka, -1, !1))
	}, this.vg = function(id, p4, p5) {
		var iM = b3.iL(),
			eb = vD.vJ[id] + 1;
		vD.vJ[id]++, vD.qA[id] = p4, vD.vI[id] = p5, 1 === eb && (vD.iM[id] = iM), (1 === eb && (qz < 32 || 2 === qw) || 1 < eb && (vD.iM[id] < iM - 140 || 2 === qw)) && this.w9(id)
	}, this.i7 = function() {
		for (var gg = (gg = v9.length - vE) <= 1 ? 1 : gg * gg, eF = v9.length - 1; 0 <= eF; eF--) 0 < v9[eF].da && (v9[eF].da -= gg, v9[eF].da <= 0) && (b3.d1 = !0, v9.splice(eF, 1));
		! function() {
			var vw, eF;
			if (128 !== vF && !(++vF < 128))
				for (vw = 5, eF = iO - 1; 0 <= eF; eF--) 1 === h4[iP[eF]] && 0 < vw-- && vN(240, aV.rv(50, [jm[iP[eF]]]), 1, iP[eF], aZ.ji, "rgba(255,255,255,0.75)", -1, !0)
		}(), this.r0(!1)
	}, this.gE = function() {
		for (var pR, fL = gD(), eF = v9.length - 1; 0 <= eF; eF--) pR = fL - (eF + 1) * gB, 50 === v9[eF].id ? (gF.drawImage(v9[eF].gO, aK.g5 - v9[eF].g5 - vC - vA, pR), gF.drawImage(vG, aK.g5 - vC - vA, pR)) : gF.drawImage(v9[eF].gO, aK.g5 - v9[
			eF].g5 - vA, pR)
	}
}

function bT() {
	var nU, wE, wF, g5, gB, font;

	function wJ(wK) {
		return wK < 10 ? "0" + wK : String(wK)
	}
	this.cq = function() {
		void 0 === g5 && this.resize(), this.setTime()
	}, this.resize = function() {
		g5 = Math.floor((b7.cv.fv() ? .53 : .36) * aK.fw), gB = Math.floor(.065 * g5), font = aY.g0.g1(1, Math.floor(.9 * gB)), wF--, this.setTime()
	}, this.i7 = function() {
		this.setTime() && (b3.d1 = !0)
	}, this.setTime = function() {
		var db = new Date,
			wH = db.getUTCMinutes(),
			db = db.getUTCSeconds();
		return wE = 3600 - 60 * wH - db, wE %= 900, nU = "Next Contest: " + wJ(Math.floor(wE / 60)) + ":" + wJ(wE % 60), wF !== (wF = 60 * wH + db) && (g5 = n.measureText(nU, font), g5 += Math.floor(.4 * gB), !0)
	}, this.gE = function() {
		gF.lineWidth = 1 + Math.floor(gB / 15), 7 === x.dY() && aG.wL() + 2 * b0.gap > .5 * (aK.gB - g5) ? gF.translate(aK.g5 - gB, Math.floor(aG.wL() + 2 * b0.gap + g5)) : gF.translate(aK.g5 - gB, Math.floor(.5 * (aK.gB + g5))), gF.rotate(-Math
			.PI / 2), gF.fillStyle = aZ.gG, gF.fillRect(0, 0, g5, gB), gF.strokeStyle = aZ.ji, gF.strokeRect(0, 0, g5, gB + 10), gF.fillStyle = aZ.ji, gF.font = font, aY.g0.textBaseline(gF, 1), aY.g0.textAlign(gF, 1), gF.fillText(nU, Math
			.floor(g5 / 2), Math.floor(.59 * gB)), gF.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function ch() {
	this.wM = 10, this.wN = 50, this.wO = 50, this.wP = 8, this.wQ = this.wN + this.wO, this.mp = this.wN + this.wO + this.wP, this.g5 = 72, this.wR = 0, this.wS = 0, this.uP = new Array(this.mp), this.wT = 8, this.wU = new Array(this.wN + this.wO),
		this.wV = new Array(this.wN + this.wO), this.je = 0, this.jf = 0, this.zoom = 1, this.wW = .2, this.ue = 0, this.re = null, this.wX = null, this.dZ = !1, this.cq = function() {
			var eF, wY, wZ;
			for (this.re = new Array(this.mp), this.wX = new Array(this.mp), wY = a1.uQ("emojis"), this.wa(), eF = this.ue = 0; eF < this.wN; eF++) this.wb(eF, eF, wY);
			for (wZ = a1.uQ("flags"), eF = 0; eF < this.wO; eF++) this.wb(eF, this.wN + eF, wZ);
			this.wc(), this.uP[26] = this.wd(25, 2), this.we()
		}, this.wb = function(eF, ha, iM) {
			this.re[ha] = !1, this.wX[ha] = 0;
			var gO = document.createElement("canvas"),
				q1 = (gO.width = this.g5, gO.height = this.g5, gO.getContext("2d", {
					alpha: !0
				}));
			q1.clearRect(0, 0, this.g5, this.g5), 23 === ha ? q1.drawImage(i.uL()[4].gO[1], 0, 0) : 36 === ha ? q1.drawImage(i.uL()[0].gO[2], 0, 0) : 49 === ha ? q1.drawImage(i.uL()[2].gO[1], 0, 0) : q1.drawImage(iM, this.g5 * eF % (eF === ha ? this
				.wM * this.g5 : 4e3), eF === ha ? eT(eF, this.wM) * this.g5 : 0, this.g5, this.g5, 0, 0, this.g5, this.g5), this.uP[ha] = gO
		}, this.wc = function() {
			this.uP[this.mp - 5] = this.uP[26], this.uP[this.mp - 4] = this.wd(this.mp - 5, 2), this.uP[this.mp - 1] = this.wd(this.mp - 5, 1), this.uP[this.mp - 8] = this.wd(this.mp - 4, 1), this.uP[this.mp - 3] = this.uP[39], this.uP[this.mp - 2] =
				this.wd(this.mp - 3, 1), this.uP[this.mp - 7] = this.wd(this.mp - 2, 1), this.uP[this.mp - 6] = this.wd(this.mp - 7, 1)
		}, this.wd = function(eF, wf) {
			var gO = document.createElement("canvas"),
				q1 = (gO.width = this.g5, gO.height = this.g5, gO.getContext("2d", {
					alpha: !0
				}));
			return q1.clearRect(0, 0, this.g5, this.g5), q1.rotate(wf * Math.PI / 2), q1.drawImage(this.uP[eF], 1 === wf ? 0 : -this.g5, -this.g5), gO
		}, this.we = function() {
			var eF, dd, gJ = b9.dF.data[102].value.split("");
			if (2 * gJ.length !== this.mp) this.ue = 0;
			else {
				for (eF = 0; eF < this.mp; eF += 2) dd = parseInt(gJ[Math.floor(eF / 2)]), this.re[eF] = dd % 2 == 1, this.re[eF + 1] = 1 < dd;
				this.wg()
			}
		}, this.wg = function() {
			for (var eF = this.ue = 0; eF < this.mp; eF++) this.re[eF] && (this.wX[this.ue++] = eF)
		}, this.uq = function() {
			8 === this.ue && this.wX[0] === this.wQ && this.wg()
		}, this.wh = function() {
			var eF;
			for (this.ue = this.wP, eF = 0; eF < this.wP; eF++) this.wX[eF] = this.wQ + eF
		}, this.wa = function() {
			this.wR = Math.floor((b7.cv.fv() ? .075 : .0468) * aK.fw), this.zoom = this.wR / this.g5, this.wS = (1 + this.wW) * this.wR
		}, this.show = function(g9, gA) {
			var eF, wj, wi, q6, jc, jd;
			if (this.ue < 1) this.dZ = !1;
			else {
				for (wi = (wi = Math.floor(aK.g5 / this.wS)) < 3 ? 3 : wi > this.wT ? this.wT : wi, wj = this.ue > wi ? wi : this.ue, wi = 1 + eT(this.ue - 1, wj), q6 = Math.floor(wj * this.wS), jc = (jc = (jc = Math.floor(g9 - q6 / 2)) + q6 > aK
						.g5 ? aK.g5 - q6 : jc) < 0 ? 0 : jc, jd = (jd = (jd = Math.floor(gA - this.wS / 2)) + (g9 = Math.floor(wi * this.wS)) > aK.gB ? aK.gB - g9 : jd) < 0 ? 0 : jd, this.je = jc + q6, this.jf = jd + g9, eF = 0; eF < this.ue; eF++)
					this.wU[eF] = Math.floor(jc + eF % wj * this.wS), this.wV[eF] = Math.floor(jd + eT(eF, wj) * this.wS);
				this.dZ = !0
			}
		}, this.g8 = function(g9, gA, player) {
			return !!this.dZ && (this.dZ = !1, this.up(g9, gA) && this.wm(g9, gA, player) && this.dZ || (this.uq(), i.np()), !0)
		}, this.up = function(g9, gA) {
			return !(g9 < this.wU[0] || gA < this.wV[0] || g9 >= this.je || gA >= this.jf)
		}, this.wm = function(g9, gA, player) {
			for (var eF = this.ue - 1; 0 <= eF; eF--)
				if (g9 >= this.wU[eF] && gA >= this.wV[eF] && g9 <= this.wU[eF] + this.wS && gA <= this.wV[eF] + this.wS) return 39 === this.wX[eF] ? (this.wh(), this.show(g9, gA)) : (player === eW ? aW.fd.lm(this.wX[eF]) : aW.fP.m1(this.wX[eF],
					player), this.wg()), !0;
			return !1
		}, this.wn = function(eF) {
			return eF < 16 || 40 <= eF && eF < 47
		}, this.wo = function(eF) {
			return eF >= this.wN && eF < this.wN + this.wO
		}, this.gE = function() {
			gF.imageSmoothingEnabled = !0;
			for (var gap = this.wW * this.wR / 2, eF = this.ue - 1; 0 <= eF; eF--) gF.setTransform(this.zoom, 0, 0, this.zoom, this.wU[eF] + gap, this.wV[eF] + gap), gF.drawImage(this.uP[this.wX[eF]], 0, 0);
			gF.imageSmoothingEnabled = !1, gF.setTransform(1, 0, 0, 1, 0, 0)
		}, this.wp = function(fK, fL, ln) {
			gF.imageSmoothingEnabled = !0, gF.setTransform(this.zoom, 0, 0, this.zoom, fK, fL), gF.drawImage(this.uP[ln], 0, 0), gF.imageSmoothingEnabled = !1, gF.setTransform(1, 0, 0, 1, 0, 0)
		}
}

function bU() {
	var v9, wq, g4, gB, wr;

	function wx(eF) {
		var g5 = v9[eF].gO.width,
			q6 = (v9[eF].q1.clearRect(0, 0, g5, gB), v9[eF].q1.fillStyle = 0 !== v9[eF].id ? "rgba(33,33,120,0.83)" : v9[eF].hT === ef ? "rgba(88,88,88,0.83)" : v9[eF].hT < h2 ? "rgba(100,70,33,0.83)" : "rgba(33,100,80,0.83)", v9[eF].q1.fillRect(0,
				0, g5, gB), ! function(q1, g5, gB) {
				q1.fillStyle = aZ.gG, q1.fillRect(0, 0, g5, 1), q1.fillRect(0, gB - 1, g5, 1), q1.fillRect(0, 0, 1, gB), q1.fillRect(g5 - 1, 0, 1, gB)
			}(v9[eF].q1, g5, gB), wq + 2 * gB < g5 && (v9[eF].q1.fillRect(g5 - wq - gB, 0, 1, gB), v9[eF].q1.fillText(jm[v9[eF].hT], Math.floor((g5 - wq) / 2), Math.floor(.57 * gB))), 0 !== v9[eF].id ? 0 : gB);
		v9[eF].q1.fillText(aY.jk.jl(v9[eF].hU), Math.floor(g5 - wq / 2 - q6), Math.floor(.57 * gB)),
			function(eF, g5, q6) {
				v9[eF].q1.fillStyle = aZ.ke;
				var x3 = Math.floor(wq * v9[eF].hU / v9[eF].x4);
				v9[eF].q1.fillRect(Math.floor(g5 - wq - q6), gB - wr, x3, wr)
			}(eF, g5, q6), 0 === v9[eF].id ? (x1(eF, g5), function(eF, g5) {
				v9[eF].q1.strokeStyle = aZ.ko, v9[eF].q1.fillRect(gB, 0, 1, gB);
				g5 -= gB;
				v9[eF].q1.beginPath(), v9[eF].q1.moveTo(Math.floor(.3 * gB + g5), Math.floor(gB / 2)), v9[eF].q1.lineTo(Math.floor(gB - .3 * gB + 0 + g5), Math.floor(gB / 2)), v9[eF].q1.stroke(), v9[eF].q1.beginPath(), v9[eF].q1.moveTo(Math
					.floor(gB / 2 + g5), Math.floor(.3 * gB)), v9[eF].q1.lineTo(Math.floor(gB / 2 + g5), Math.floor(gB - .3 * gB + 0)), v9[eF].q1.stroke()
			}(eF, g5)) : x1(eF, 2 * gB)
	}

	function x1(eF, g5) {
		v9[eF].q1.strokeStyle = v9[eF].x5 ? aZ.kk : aZ.kz, v9[eF].q1.fillStyle = aZ.gG, v9[eF].q1.fillRect(g5 - gB, 0, 1, gB);
		var x6 = Math.floor(gB / 12),
			x6 = (v9[eF].q1.lineWidth = x6 < 3 ? 3 : x6, v9[eF].q1.lineCap = "round", .35);
		g5 = gB + 1, v9[eF].q1.beginPath(), v9[eF].q1.moveTo(Math.floor(g5 - x6 * gB + 0), Math.floor(x6 * gB)), v9[eF].q1.lineTo(Math.floor(g5 - gB + x6 * gB), Math.floor(gB - x6 * gB + 0)), v9[eF].q1.stroke(), v9[eF].q1.beginPath(), v9[eF].q1
			.moveTo(Math.floor(g5 - gB + x6 * gB), Math.floor(x6 * gB)), v9[eF].q1.lineTo(Math.floor(g5 - x6 * gB + 0), Math.floor(gB - x6 * gB + 0)), v9[eF].q1.stroke()
	}

	function xH(eb) {
		for (var hU, eF = eb - 1; 0 <= eF; eF--) hU = a4.eN(eW, eF), v9[eF].hU !== hU && (v9[eF].hU = hU, v9[eF].x4 = hU > v9[eF].x4 ? hU : v9[eF].x4, v9[eF].wy = !0)
	}

	function ww(xJ) {
		xJ.gO = document.createElement("canvas"), ap.oo.font = g4;
		var g5 = wq;
		xJ.hT < ef && 0 === xJ.id && (g5 += Math.floor(ap.oo.measureText(jm[xJ.hT] + "000").width)), g5 += gB, 0 === xJ.id && (g5 += gB), xJ.gO.width = g5, xJ.gO.height = gB, xJ.q1 = xJ.gO.getContext("2d", {
			alpha: !0
		}), xJ.q1.font = g4, aY.g0.textBaseline(xJ.q1, 1), aY.g0.textAlign(xJ.q1, 1)
	}

	function xD(eF) {
		return r.xL() ? aK.g5 - v9[eF].gO.width - b0.gap : r.fK
	}

	function xE(eF) {
		return Math.floor(2 * b0.gap + (r.xL() ? t.gB + b0.gap : 0) + r.gB + eF * (1.3 * gB))
	}
	this.cq = function() {
		v9 = [], this.resize()
	}, this.resize = function() {
		g4 = k.g4, gB = k.fontSize + 5, gB = Math.floor(1.25 * gB), b7.cv.fv() && (gB = Math.floor(1.25 * gB)), wr = Math.floor(.15 * gB), ap.oo.font = g4, wq = Math.floor(ap.oo.measureText("02 000 000 0000").width);
		for (var eF = v9.length - 1; 0 <= eF; eF--) ww(v9[eF]), wx(eF)
	}, this.j6 = function() {
		for (var eF = v9.length - 1; 0 <= eF; eF--) v9[eF].wy && (v9[eF].wy = !1, wx(eF))
	}, this.g8 = function(g9, fL) {
		if (2 !== qw && 0 !== h3[eW] && !fN && a2.uf(eW))
			for (var x8, x9, xA, xB = b7.cv.fv() ? gB : 0, xC = b7.cv.fv() ? Math.floor(.15 * gB) : 0, eF = v9.length - 1; 0 <= eF; eF--)
				if (x8 = xD(eF), x9 = xE(eF), xA = v9[eF].gO.width, x9 - xC <= fL && fL <= x9 + gB + xC) {
					if (x8 - xB <= g9 && g9 <= x8 + gB + xB) return v9[eF].x5 || (v9[eF].wy = !0, v9[eF].x5 = !0, 0 === v9[eF].id && aW.fd.lk(v9[eF].hT)), !0;
					if (0 === v9[eF].id && x8 + xA - gB - xB <= g9 && g9 <= x8 + xA + xB) return aW.fd.fo(o.fm(), v9[eF].hT), !0
				} return !1
	}, this.i7 = function() {
		var eb;
		2 !== qw && 0 !== h3[eW] && !fN && a2.uf(eW) && (function(eb) {
			if (v9.length !== eb) return 1;
			for (var eF = eb - 1; 0 <= eF; eF--)
				if (v9[eF].id !== a4.eH(eW, eF) || v9[eF].hT !== a4.eM(eW, eF)) return 1;
			return
		}(eb = a4.eG(eW)) && function(eb) {
			var eF, id, hT, hj, hU, vQ = [];
			loop: for (eF = 0; eF < eb; eF++) {
				for (id = a4.eH(eW, eF), hT = a4.eM(eW, eF), hj = 0; hj < v9.length; hj++)
					if (v9[hj].id === id && v9[hj].hT === hT) {
						vQ.push(v9.splice(hj, 1)[0]);
						continue loop
					} hU = a4.eN(eW, eF), ww(hU = {
					hT: hT,
					hU: hU,
					x4: hU,
					id: id,
					wy: !0,
					x5: !1,
					gO: null,
					q1: null
				}), vQ.push(hU)
			}
			v9 = vQ
		}(eb), xH(eb))
	}, this.xK = function(ei) {
		for (var eb = Math.min(v9.length, a4.eG(eW)), eF = 0; eF < eb; eF++)
			if (v9[eF].hT === ei) return void(v9 = [])
	}, this.gE = function() {
		if (0 !== h3[eW] && a2.uf(eW) && !fN)
			for (var eF = v9.length - 1; 0 <= eF; eF--) gF.drawImage(v9[eF].gO, xD(eF), xE(eF))
	}
}

function bV() {
	var v9, iV, xM, xN, gB, g4, fontSize, xO, xP, xQ, xR, gO, q1, jy, xS;

	function xZ() {
		gF.drawImage(gO, b0.gap + (hN ? b0.gap + b5.xa() : 0), xb + 2 * b0.gap)
	}

	function xT() {
		gO.width = v9[0].width + xQ, gO.height = gB + xQ, (q1 = gO.getContext("2d", {
				alpha: !0
			})).clearRect(0, 0, v9[0].width + xQ, gB + xQ), q1.translate(Math.floor(xQ / 2), Math.floor(xQ / 2)), q1.lineWidth = xQ, q1.fillStyle = 1 === v9[0].xY ? aZ.kh : aZ.ka, xc(), q1.fill(), q1.strokeStyle = 1 === v9[0].xY ? aZ.ji : aZ.gG,
		xc(), q1.stroke(), aY.g0.textAlign(q1, 1), aY.g0.textBaseline(q1, 1), q1.fillStyle = 1 === v9[0].xY ? aZ.ji : aZ.gG, q1.font = g4[0], q1.fillText(aV.nU[66 + v9[0].xX], Math.floor(v9[0].width / 2), Math.floor(.72 * xO[0] * gB)), q1.font = g4[
				1], q1.fillText(v9[0].fy, Math.floor(v9[0].width / 2), Math.floor((xO[0] + .48 * xO[1]) * gB))
	}

	function xc() {
		q1.beginPath(), q1.moveTo(xR, 0), q1.lineTo(v9[0].width - xR, 0), q1.lineTo(v9[0].width, xR), q1.lineTo(v9[0].width, gB - xR), q1.lineTo(v9[0].width - xR, gB), q1.lineTo(xR, gB), q1.lineTo(0, gB - xR), q1.lineTo(0, xR), q1.closePath()
	}
	this.cq = function() {
		iV = 4, xM = xN = jy = 0, v9 = [], g4 = new Array(2), fontSize = new Array(2), (xO = new Array(2))[0] = .3, xO[1] = .7, xP = new Array(4), gO = document.createElement("canvas"), xS = b3.da + 2e3, this.resize()
	}, this.resize = function() {
		var eF, g5;
		for (gB = Math.floor((b7.cv.fv() ? .0725 : .058) * aK.fw), fontSize[0] = Math.floor(.85 * xO[0] * gB), fontSize[1] = Math.floor(.85 * xO[1] * gB), g4[0] = aY.g0.g1(1, fontSize[0]), g4[1] = aY.g0.g1(1, fontSize[1]), eF = xP.length -
			1; 0 <= eF; eF--) xP[eF] = this.measureText(aV.nU[66 + eF] + "000", g4[0]);
		if (xQ = Math.floor(1 + .05 * gB), xR = Math.floor(.2 * gB), 0 < v9.length) {
			for (eF = v9.length - 1; 0 <= eF; eF--) g5 = this.measureText(v9[eF].fy + "00", g4[1]), v9[eF].width = g5 < xP[eF] ? xP[eF] : g5;
			xT()
		}
	}, this.i7 = function() {
		0 !== iV && (4 === iV ? b3.da > xS && (iV = 0, 1 === qw) && n.rD(ap.ij.pF[ap.pG].name, 3, 1, 9) : (1 === iV ? (0 === xM && (xT(), xM = 1e-4), 1 <= (xM += .002 * (b3.da - jy)) && (xN = 0, iV = 2, xM = 1), b3.d1 = !0) : 2 === iV ? ((xN += (
			b3.da - jy) / 1e3) > v9[0].k3 || 1 < xN && 1 < v9.length) && (iV = 3) : 3 === iV && ((xM -= .002 * (b3.da - jy)) <= 0 && (xM = 0, v9.shift(), iV = 0 < v9.length ? 1 : 0), b3.d1 = !0), jy = b3.da))
	}, this.measureText = function(fy, g4) {
		return gF.font = g4, Math.floor(gF.measureText(fy).width)
	}, this.hQ = function(xW, eF) {
		this.rD(jm[xW], eF, 1, 0 === eF ? 3 : 7)
	}, this.rD = function(fy, xX, xY, k3) {
		var g5 = (g5 = this.measureText(fy + "00", g4[1])) < xP[xX] ? xP[xX] : g5;
		v9.push({
			fy: fy,
			width: g5,
			xX: xX,
			xY: xY,
			k3: k3
		}), 0 === iV && (xM = 0, iV = 1, jy = b3.da)
	}, this.gE = function() {
		0 !== iV && 0 !== xM && (xM < 1 ? (gF.globalAlpha = xM, xZ(), gF.globalAlpha = 1) : xZ())
	}
}

function c3() {
	var gB, gO, q1, xd, xe, xf, xg, xh, wy, xi, xj, xk, xl, xm;

	function g2() {
		var g5 = aI.g5,
			oe = (wy = !1, q0(q1, g5, gB), Math.floor(g5 / 2));
		1 === xe ? (q1.fillStyle = aZ.kq, q1.fillRect(oe, 0, oe, gB)) : -1 === xe && (q1.fillStyle = aZ.l2, q1.fillRect(0, 0, oe, gB)), q2(q1, g5, gB, 2);
		var oe = (oe = Math.floor(.25 * gB)) < 2 ? 2 : oe,
			w3 = (q1.fillStyle = aZ.ki, Math.floor((gB - 4) * xf[1] / xg[1]));
		0 < w3 && q1.fillRect(2, gB - 2 - w3, oe, w3), 0 < (w3 = Math.floor((gB - 4) * xf[0] / xg[0])) && q1.fillRect(g5 - 2 - oe, gB - 2 - w3, oe, w3);
		oe = (oe = Math.floor(gB / 8)) < 2 ? 2 : oe;
		q4(q1, Math.floor(.4 * gB), 0, gB, oe, .5, !1), q4(q1, Math.floor(g5 - 1.4 * gB), 0, gB, oe, .5, !0), q1.drawImage(xd, Math.floor((g5 - xd.width) / 2), 3)
	}

	function xo() {
		wy = !0, xi = 140, xe = 0, xh = [], aI.dZ = !1, k.qm(247, 0), xf[0] = xf[1] = 0
	}

	function gD() {
		return o.va(k.vW()) ? o.fL - gB - b0.gap : aa.va(k.vZ()) ? aa.gD() - gB - b0.gap : aK.gB - gB - bA.uD() * b0.gap
	}
	this.dZ = !1, this.g5 = 0, this.cq = function() {
		xk = xl = 0, this.dZ = !1, wy = xm = !1, xi = 140, xf = [xe = 0, 0], xg = [1, 1], xh = [], xj = new Uint32Array(10), this.resize()
	}, this.resize = function() {
		gB = o.gB, this.g5 = 4 * gB, this.xn(), (gO = document.createElement("canvas")).width = this.g5, gO.height = gB, q1 = gO.getContext("2d", {
			alpha: !0
		}), g2()
	}, this.j6 = function() {
		wy && g2()
	}, this.xn = function() {
		var gP, xQ, oe, wl = (wl = gB - 6) < 6 ? 6 : wl;
		void 0 !== xd && xd.width === wl || ((xd = document.createElement("canvas")).width = wl, xd.height = wl, (gP = xd.getContext("2d", {
				alpha: !0
			})).clearRect(0, 0, wl, wl), xQ = Math.floor(wl / 8), gP.lineWidth = xQ = xQ < 1 ? 1 : xQ, gP.strokeStyle = aZ.gG, oe = Math.floor(wl / 2), wl = Math.floor((wl - xQ) / 2), gP.beginPath(), gP.arc(oe, oe, wl, 0, 2 * Math.PI), gP
			.moveTo(oe, oe - wl), gP.lineTo(oe, oe + wl), gP.moveTo(oe + Math.cos(.78 * Math.PI) * wl, oe + Math.cos(.28 * Math.PI) * wl), gP.lineTo(oe, oe), gP.lineTo(oe + Math.cos(.22 * Math.PI) * wl, oe + Math.cos(1.72 * Math.PI) * wl), gP
			.stroke())
	}, this.g8 = function(fK, fL) {
		var jd;
		return !(fK < aK.g5 - this.g5 - b0.gap || fL < (jd = gD()) || jd + gB < fL || (fN || aW.fd.lq(fK > aK.g5 - b0.gap - this.g5 / 2 ? 1 : 0), 0))
	}, this.i7 = function() {
		if (0 < xl) 0 === --xl && xo();
		else if (this.dZ) 270 == --xi && 2 <= xk && function() {
			var eF;
			for (eF = iO - 1; 0 <= eF; eF--)
				if (a2.uf(iP[eF])) return;
			return 1
		}() && (wy = !0, xf[0] += xg[0]), 180 === xi && 3 * xf[0] < xg[0] ? xo() : xf[0] >= xg[0] ? xm ? ao.qh.qk() : ao.qh.qp(-1) : xf[1] >= xg[1] ? xl = 4 : xi <= 0 && xo();
		else if (function() {
				var eF;
				for (eF = 9; 0 <= eF; eF--) 12 < Math.abs(xj[eF] - f1[jG[eF]]) && (xi = 140), xj[eF] = f1[jG[eF]];
				if (--xi <= 0) return 1;
				return
			}()) {
			(xm = xr()) && k.vs(), this.dZ = !0, xi = 360;
			var eF, db = 0;
			for (eF = iO - 1; 0 <= eF; eF--) a2.uf(iP[eF]) && (db += f1[iP[eF]]);
			xg[0] = vY(eT(3 * db, 5), 1), hN && 9 !== il && (xg[0] = xt(vY(eT(db * (100 - eT(100 * b5.rB(), tn)), 100), 1), xg[0])), xg[1] = vY(db - xg[0], 1), xk++
		}
	}, this.qx = function() {
		this.dZ && xf[0] < xg[0] && xo()
	}, this.mr = function(player, xv) {
		var eF, db;
		if (this.dZ) {
			for (eF = xh.length - 1; 0 <= eF; eF--)
				if (xh[eF] === player) return;
			xh.push(player), wy = !0, db = io ? xg[0] : f1[player], xv ? xf[0] += db : xf[1] += db, player === eW && (xe = xv ? 1 : -1)
		}
	}, this.gE = function() {
		var fL;
		this.dZ && (fL = gD(), gF.drawImage(gO, aK.g5 - this.g5 - b0.gap, fL))
	}
}

function bW() {
	var g5, fK, xw, gO, q1, dZ, h6, xx, g4, wy, xy = 11 / 12;

	function y0() {
		var x3 = Math.floor(h6 * (g5 - 2 * xw)),
			y3 = 1 + Math.floor(.0625 * o.gB),
			y4 = 1 + Math.floor(.3 * o.gB),
			wl = Math.floor(.55 * o.gB);
		q1.clearRect(0, 0, g5, o.gB), q1.fillStyle = aZ.kZ, q1.fillRect(0, 0, xw, o.gB), q1.fillRect(xw + x3, 0, g5 - xw - x3, o.gB), q1.fillStyle = h6 < 1 / 3 ? "rgba(" + Math.floor(3 * h6 * 130) + ",130,0,0.85)" : h6 < 2 / 3 ? "rgba(130," + (130 -
				Math.floor(3 * (h6 - 1 / 3) * 130)) + ",0,0.85)" : "rgba(130,0," + Math.floor(3 * (h6 - 2 / 3) * 130) + ",0.85)", q1.fillRect(xw, 0, x3, o.gB), q1.fillStyle = aZ.gG, q1.fillRect(0, 0, g5, 1), q1.fillRect(0, o.gB - 1, g5, 1), q1
			.fillRect(0, 0, 1, o.gB), q1.fillRect(xw, 0, 1, o.gB), q1.fillRect(xw + x3, 0, 1, o.gB), q1.fillRect(g5 - xw, 0, 1, o.gB), q1.fillRect(g5 - 1, 0, 1, o.gB), q1.fillRect(Math.floor(.25 * o.gB) + y4, Math.floor((o.gB - y3) / 2), o.gB - 2 *
				y4, y3), q1.fillRect(Math.floor(g5 - 1.25 * o.gB) + y4, Math.floor((o.gB - y3) / 2), o.gB - 2 * y4 - y4 % 2, y3), q1.fillRect(Math.floor(g5 - 1.25 * o.gB) + Math.floor((o.gB - y3) / 2), y4, y3, o.gB - 2 * y4 - y4 % 2), xx = aY.fP.h5(
				eW, o.fm()), q1.fillText(aY.jk.jl(xx) + " (" + aY.jk.ta(100 * h6, +(h6 < .1)) + ")", Math.floor(.5 * g5), wl)
	}
	this.setAbsolutePercentage = function(newPercentage) {
		h6 = newPercentage;
	};
	keybindFunctions.setAbsolute = this.setAbsolutePercentage;
	keybindFunctions.setRelative = (arg1) => o.so(arg1);

	function y8(ft) {
		return !(1 < ft && 1 === h6 || (1 < ft && ft * h6 - h6 < 1 / 1024 ? ft = (h6 + 1 / 1024) / h6 : ft < 1 && h6 - ft * h6 < 1 / 1024 && (ft = (h6 - 1 / 1024) / h6), h6 = ai.lQ(h6 * ft, 1 / 1024, 1), y0(), 0))
	}

	function y9(g9) {
		return h6 !== (h6 = ai.lQ((g9 - fK - xw) / (g5 - 2 * xw), 1 / 1024, 1)) && (y0(), !0)
	}
	this.fL = 0, this.sY = !1, this.cq = function() {
		dZ = !fc && !fN, wy = !1, h6 = .5, xx = 0, this.sY = !1, this.resize()
	}, this.resize = function() {
		b7.cv.fv() && aK.g5 < .8 * aK.gB ? (this.gB = Math.floor(.0536 * aK.fw), g5 = aK.g5 - 4 * b0.gap - this.gB) : (g5 = Math.floor((b7.cv.fv() ? .65 : .389) * aK.fw), g5 += 12 - g5 % 12, this.gB = Math.floor(g5 / 12)), xw = Math.floor(3 *
			this.gB / 2), g4 = aY.g0.g1(1, Math.floor(.5 * this.gB)), (gO = document.createElement("canvas")).width = g5, gO.height = this.gB, (q1 = gO.getContext("2d", {
			alpha: !0
		})).font = g4, aY.g0.textBaseline(q1, 1), aY.g0.textAlign(q1, 1), this.xz(), y0()
	}, this.xz = function() {
		fK = b7.cv.fv() && aK.g5 < .8 * aK.gB ? this.gB + 3 * b0.gap : Math.floor((aK.g5 - g5) / 2), this.fL = aK.gB - this.gB - bA.uD() * b0.gap
	}, this.j6 = function() {
		wy && (wy = !1, y0())
	}, this.dZ = function() {
		return !(!dZ || j.fO && fK < Math.floor(b0.gap + 5.5 * this.gB))
	}, this.va = function(g6) {
		return !!this.dZ() && fK + g5 > aK.g5 - g6 - b0.gap
	}, this.gC = function() {
		dZ = !fN
	}, this.xo = function() {
		dZ = !1
	}, this.fm = function() {
		return ai.lQ(Math.floor(1024 * h6 + .5) - 1, 0, 1023)
	}, this.sf = function(g9, gA) {
		return this.dZ() && fK < g9 && g9 < fK + g5 && gA > this.fL
	}, this.g8 = function(g9, gA) {
		return !!this.dZ() && !!o.sf(g9, gA) && (p.kA = !1, function(us, g9, gA) {
			if (function(g9, gA) {
					return fK < g9 && g9 < fK + xw && gA > o.fL
				}(g9, gA)) return y8(xy);
			if (function(g9, gA) {
					return fK + g5 - xw < g9 && g9 < fK + g5 && gA > o.fL
				}(g9, gA)) return y8(1 / xy);
			return us.sY = !0, y9(g9)
		}(this, g9, gA) && (b3.d1 = !0), !0)
	}, this.so = function(kH) {
		0 !== qw && this.dZ() && y8(kH) && (b3.d1 = !0)
	}, this.sD = function(deltaY) {
		var kH;
		return !(0 === deltaY || !this.dZ()) && y8(kH = 0 < deltaY ? (kH = 400 / (400 + deltaY)) < xy ? xy : kH : 1 / xy < (kH = (400 - deltaY) / 400) ? 1 / xy : kH)
	}, this.sA = function(g9, gA) {
		return !!this.sY && y9(g9)
	}, this.sb = function() {
		this.sY = !1
	}, this.i7 = function() {
		this.dZ() && xx !== aY.fP.h5(eW, this.fm()) && (wy = !0)
	}, this.gE = function() {
		this.dZ() && gF.drawImage(gO, fK, this.fL)
	}
}

function cG() {
	var gO, q1, yA, font, yB = 0,
		yC = !1,
		yD = [10, 5, 3, 2, 1.5, 1, .75, .5, .25],
		yE = 5;

	function yL() {
		if (yC) {
			var eF, eb = yD.length,
				wl = Math.floor(.5 * yA.gB),
				gB = eb * wl,
				fK = Math.floor(Math.floor(yA.fK) + .3 * yA.g5 - .5),
				fL = Math.floor(Math.floor(yA.fL) - gB),
				g5 = Math.floor(.4 * yA.g5 + 2.5);
			for (gF.fillStyle = aZ.kZ, gF.fillRect(fK, fL, g5, gB), gF.fillStyle = aZ.kv, gF.fillRect(fK, fL + yE * wl, g5, wl), gF.fillStyle = aZ.gG, gF.fillRect(fK, fL, 2, gB), gF.fillRect(fK, fL, g5, 2), gF.fillRect(fK + g5 - 2, fL, 2, gB), eF =
				1; eF < eb; eF++) gF.fillRect(fK, fL + eF * wl, g5, 2);
			for (gF.fillStyle = aZ.gG, aY.g0.textAlign(gF, 1), aY.g0.textBaseline(gF, 1), gF.font = aY.g0.g1(0, .6 * wl), fK += .5 * g5, eF = 0; eF < eb; eF++) gF.fillText(yT(eF), fK, fL + (eF + .6) * wl)
		}
		gF.drawImage(gO, Math.floor(yA.fK), Math.floor(yA.fL))
	}

	function g2(us) {
		var fK, jc, jd, wl;
		q1.clearRect(0, 0, Math.floor(yA.g5), Math.floor(yA.gB)), q1.fillStyle = aZ.kZ, q1.fillRect(0, 0, Math.floor(yA.g5), Math.floor(yA.gB)), k9 && (q1.fillStyle = aZ.kv, q1.fillRect(0, 0, Math.floor(.3 * yA.g5), Math.floor(yA.gB))), q1
			.fillStyle = aZ.gG, q1.fillText("Hide UI", .15 * yA.g5, .5 * yA.gB), q1.fillRect(Math.floor(.3 * yA.g5 - .5), 0, 2, Math.floor(yA.gB)), fK = .5 * yA.g5, q1.fillText("Replay Speed", fK, .31 * yA.gB), q1.fillText(yT(yE), fK, .69 * yA.gB),
			q1.fillRect(Math.floor(.7 * yA.g5 - .5), 0, 2, Math.floor(yA.gB)), us.uz ? (fK = Math.floor(.02 * yA.g5), us = Math.floor(.025 * yA.g5), jc = Math.floor(.85 * yA.g5 - fK - .5 * us), jd = Math.floor(.25 * yA.gB), wl = Math.floor(yA.gB) -
				2 * jd, q1.fillRect(jc, jd, fK, wl), q1.fillRect(jc + fK + us, jd, fK, wl)) : function() {
				var g5 = Math.floor(.46 * yA.gB),
					gB = Math.floor(.23 * yA.gB),
					fK = Math.floor(.85 * yA.g5 - .5 * g5 + g5 / 12),
					fL = Math.floor(.5 * yA.gB - gB);
				q1.beginPath(), q1.moveTo(fK, fL), q1.lineTo(fK + g5, fL + gB), q1.lineTo(fK, fL + (gB << 1)), q1.fill()
			}(), q1.fillRect(0, 0, Math.floor(yA.g5), 2), q1.fillRect(0, 0, 2, Math.floor(yA.gB)), q1.fillRect(0, Math.floor(yA.gB) - 2, Math.floor(yA.g5), 2), q1.fillRect(Math.floor(yA.g5 - 2), 0, 2, Math.floor(yA.gB))
	}

	function yT(eF) {
		return 5 === eF ? "Normal" : "" + yD[eF]
	}
	this.uz = !1, this.cq = function() {
		fN && (yE = 5, this.uz = !1, yC = !1, yA = new nO([.3, .3 / 6], [.5, 1]), this.resize())
	}, this.yF = function() {
		return yD[yE]
	}, this.gD = function() {
		return yA.fL
	}, this.va = function(g6) {
		return !!fN && yA.fK + yA.g5 > aK.g5 - g6 - b0.gap
	}, this.resize = function() {
		fN && (yA.resize(), yA.fL -= (bA.uD() - 1) * b0.gap, font = aY.g0.g1(0, .3 * yA.gB), (gO = document.createElement("canvas")).width = Math.floor(yA.g5), gO.height = Math.floor(yA.gB), (q1 = gO.getContext("2d", {
			alpha: !0
		})).font = font, aY.g0.textAlign(q1, 1), aY.g0.textBaseline(q1, 1), g2(this))
	}, this.sk = function(yG) {
		yG !== k9 && (k9 = yG, b5.resize(), b3.d1 = !0, fN) && (yB = b3.da + 2e3, g2(this))
	}, this.g8 = function(fK, fL) {
		if (!fN) return !1;
		if (fK < yA.fK || fL < yA.fL || fK > yA.fK + yA.g5) return yC && function(us, fK, fL) {
			var eb = yD.length,
				wl = Math.floor(.5 * yA.gB),
				gB = eb * wl,
				jc = Math.floor(Math.floor(yA.fK) + .3 * yA.g5 - .5),
				gB = Math.floor(Math.floor(yA.fL) - gB),
				g5 = Math.floor(.4 * yA.g5 + 2.5);
			return yC = !1, b3.d1 = !0, fK < jc || jc + g5 < fK || fL < gB || (yE = yK(0, Math.floor((fL - gB) / wl), eb - 1), g2(us)), !0
		}(this, fK, fL);
		if ((fK -= yA.fK) < .3 * yA.g5) yC = !1, this.sk(!k9);
		else {
			if (fK < .7 * yA.g5) return yC = !yC, b3.d1 = !0;
			this.sm(!1)
		}
		return !0
	}, this.sm = function(yI) {
		2 === qw ? (this.sk(!1), ar.yJ()) : (yC = !1, this.uz = !this.uz, this.uz ? j.fO ? j.sl() : b7.cv.setState(1) : yI || j.v0(), b3.d1 = !0, g2(this))
	}, this.sT = function(fK, fL) {
		return !!k9 && (j.g8(fK, fL) || (fN ? ((b3.da > yB || !this.g8(fK, fL)) && p.g8(fK, fL), b3.d1 = !0, yB = b3.da + 2e3) : p.g8(fK, fL)), !0)
	}, this.i7 = function() {
		fN && k9 && b3.da > yB - 1e3 && b3.da < yB && (b3.d1 = !0)
	}, this.r1 = function() {
		fN && (this.uz = !1, b3.d1 = !0, g2(this))
	}, this.gE = function() {
		if (fN) {
			if (k9) {
				if (b3.da > yB) return;
				if (b3.da > yB - 1e3) return gF.globalAlpha = yK(0, (1e3 - (b3.da - (yB - 1e3))) / 1e3, 1), yL(), void(gF.globalAlpha = 1)
			}
			yL()
		}
	}
}

function bX() {
	var yU, yV, g5, fK, fL, yW, yX;
	this.cq = function() {
		yU = new Array(2), yV = new Array(2), this.kA = !1, yX = yW = h9 = h7 = 0, h8 = 1, this.resize()
	}, this.resize = function() {
		g5 = (g5 = Math.floor((b7.cv.fv() ? .072 : .0502) * aK.fw)) < 8 ? 8 : g5;
		for (var eF = 1; 0 <= eF; eF--) yU[eF] = document.createElement("canvas"), yU[eF].width = g5, yU[eF].height = g5, yV[eF] = yU[eF].getContext("2d", {
			alpha: !0
		});
		this.xz(),
			function() {
				for (var ym = Math.floor(1 + g5 / 20), eF = 1; 0 <= eF; eF--) yV[eF].clearRect(0, 0, g5, g5), yV[eF].fillStyle = aZ.kW, yV[eF].beginPath(), yV[eF].arc(g5 / 2, g5 / 2, g5 / 2 - ym, 0, 2 * Math.PI), yV[eF].fill(), yV[eF].lineWidth =
					ym, yV[eF].fillStyle = aZ.gG, yV[eF].strokeStyle = aZ.gG, yV[eF].beginPath(), yV[eF].arc(g5 / 2, g5 / 2, g5 / 2 - ym, 0, 2 * Math.PI), yV[eF].stroke(), q4(yV[eF], 0, 0, g5, ym, .3, 0 === eF)
			}()
	}, this.jg = function() {
		return -h7 / h8
	}, this.gD = function() {
		return -h9 / h8
	}, this.kJ = function(yb, gr) {
		h7 = h8 * yb - gr
	}, this.kK = function(yc, gs) {
		h9 = h8 * yc - gs
	}, this.g8 = function(ya, vb) {
		return k9 || ! function(ya, vb) {
			return Math.pow(ya - (fK + g5 / 2), 2) + Math.pow(vb - (fL + g5 / 2), 2) < g5 * g5 / 4 || Math.pow(ya - (fK + g5 / 2), 2) + Math.pow(vb - (fL + 2 * g5), 2) < g5 * g5 / 4
		}(ya, vb) || b9.dF.data[8].value ? (f.kM() && (this.kA = !0, yW = ya, yX = vb), !1) : vb < fL + 1.25 * g5 ? this.sD(Math.floor(aK.g5 / 2), Math.floor(aK.gB / 2), -200) : this.sD(Math.floor(aK.g5 / 2), Math.floor(aK.gB / 2), 200)
	}, this.sA = function(ya, vb) {
		var yd, ye, gu, gx;
		return !f.kM() || (yd = h7, ye = h9, h7 += gu = yW - ya, h9 += gx = yX - vb, a6.sA(gu, gx), this.yf(), yW = ya, yX = vb, yd !== h7) || ye !== h9
	}, this.sD = function(g9, gA, deltaY) {
		var kH;
		if (f.kM()) {
			if (0 < deltaY) kH = (kH = 500 / (500 + deltaY)) < .5 ? .5 : kH;
			else {
				if (!(deltaY < 0)) return !1;
				kH = 2 < (kH = (500 - deltaY) / 500) ? 2 : kH
			}
			this.yg(g9, gA, kH), b3.d1 = !0
		}
		return !0
	}, this.yg = function(fK, fL, fZ) {
		var ft;
		fZ = ft = (ft = 1024 < (ft = fZ) * h8 ? 1024 / h8 : ft) * h8 < .125 ? .125 / h8 : ft, a6.zoom(fZ, fK, fL),
			function(ft, g9, gA) {
				h8 *= ft, h7 = (h7 + g9) * ft - g9, h9 = (h9 + gA) * ft - gA, p.yf()
			}(fZ, fK, fL)
	}, this.yf = function() {
		var yj = aK.g5 / 16,
			gX = 0,
			yk = aK.gB / 16,
			gZ = 0;
		h7 < -aK.g5 + yj && (gX = -aK.g5 + yj - h7), h7 > h8 * ap.eA - yj && (gX = h8 * ap.eA - yj - h7), h9 < -aK.gB + yk && (gZ = -aK.gB + yk - h9), h9 > h8 * ap.eB - yk && (gZ = h8 * ap.eB - yk - h9), h7 += gX, h9 += gZ, ax.kL(), a6.yl(gX, gZ)
	}, this.xz = function() {
		fK = aK.g5 - g5 - b0.gap, fL = Math.floor(aK.gB / 2 - 1.25 * g5)
	}, this.gE = function() {
		b9.dF.data[8].value || (gF.drawImage(yU[0], fK, fL), gF.drawImage(yU[1], fK, Math.floor(fL + 3 * g5 / 2)))
	}
}

function bY() {
	var dn, pJ, yn, yo, gap, yp, yq, yr, ys, yt, g4, yu, fH, yv, yw, x3, yx, yy, yz;

	function z3() {
		yo = Math.floor(.2 * (b7.cv.fv() ? .07 : .035) * aK.fw), yo = vY(b7.cv.fv() ? 3 : 1, yo);
		var z8 = aK.g5 / (dn.length + gap);
		yo = yo < z8 ? z8 : yo, x3 = Math.floor((1 - gap) * yo), pJ = 0, z9()
	}

	function z9() {
		pJ = (pJ = pJ < -20 ? -20 : pJ) > (dn.length - 15) * yo ? (dn.length - 15) * yo : pJ, yq = Math.floor(pJ / yo), yr = (yr = yq + Math.floor(aK.g5 / yo)) > dn.length - 1 ? dn.length - 1 : yr, yq = (yq = yr < yq ? yr : yq) < 0 ? 0 : yq;
		var oe = yr;
		yp = yn / dn[oe];
		for (var eF = yr - 1; yq <= eF; eF--) dn[eF] > dn[oe] && (oe = eF, yp = yn / Math.pow(dn[eF], yw))
	}

	function zC(fK) {
		fK = Math.floor((pJ + aK.g5 - fK - gap * yo) / yo);
		return (fK = fK < -1 ? -1 : -1 === fK ? 0 : fK > dn.length - 1 ? -1 : fK) !== ys && (ys = fK, -1 === yx && 0 === ys && yv && (yx = setInterval(zD, 100)), 1)
	}

	function zE(eF) {
		var wr = Math.floor(yp * Math.pow(dn[eF], yw));
		gF.fillRect(pJ + aK.g5 - (eF + 1) * yo, aK.gB - wr, x3, wr)
	}

	function zD() {
		var ei;
		0 !== (ys = 8 === x.dY() ? -1 : ys) ? (yy = (new Date).getTime(), clearInterval(yx), yx = -1) : (ei = dn[1] / 864e3, -1 !== yy && (ei += ((new Date).getTime() - yy) * dn[1] / 864e5, yy = -1), 0 < ei && (dn[0] += Math.floor(ei), b3.d1 = !0))
	}
	this.cq = function() {
		yv = !(yy = yx = -1), ys = -(yw = 1), this.z0 = !1, fH = 0, yu = new Date, pJ = 0, gap = .3, (yz = []).push({
			vw: "Plateau A",
			eb: 0,
			dD: 57
		}), yz.push({
			vw: "Max A",
			eb: 1,
			dD: 1
		}), yz.push({
			vw: "Black Friday",
			eb: 15,
			dD: 15
		}), yz.push({
			vw: "Max B",
			eb: 19,
			dD: 19
		}), yz.push({
			vw: "Max C",
			eb: 44,
			dD: 44
		}), yz.push({
			vw: "First Android Version",
			eb: 58,
			dD: 58
		}), yz.push({
			vw: "Max D",
			eb: 67,
			dD: 67
		}), yz.push({
			vw: "The iFrame Explosion",
			eb: 98,
			dD: 99
		}), yz.push({
			vw: "The 155-Day Uptrend",
			eb: 58,
			dD: 213
		}), yz.push({
			vw: "Max E",
			eb: 213,
			dD: 213
		}), yz.push({
			vw: "Plateau B",
			eb: 214,
			dD: 259
		}), yz.push({
			vw: "Turbulent Times",
			eb: 260,
			dD: 344
		}), yz.push({
			vw: "Max F",
			eb: 262,
			dD: 262
		}), yz.push({
			vw: "Max G",
			eb: 282,
			dD: 282
		}), yz.push({
			vw: "Max H",
			eb: 333,
			dD: 333
		}), yz.push({
			vw: "The 19-Day Downtrend",
			eb: 283,
			dD: 301
		}), yz.push({
			vw: "Plateau C",
			eb: 345,
			dD: 385
		}), yz.push({
			vw: "The Alliance Ascent",
			eb: 386,
			dD: 395
		}), yz.push({
			vw: "Max I",
			eb: 395,
			dD: 395
		}), yz.push({
			vw: "First iOS Version",
			eb: 411,
			dD: 411
		}), yz.push({
			vw: "Plateau D",
			eb: 396,
			dD: 453
		}), yz.push({
			vw: "The TikTok Revolution",
			eb: 454,
			dD: 470
		}), yz.push({
			vw: "Max J",
			eb: 456,
			dD: 456
		}), yz.push({
			vw: "Max K",
			eb: 472,
			dD: 472
		}), yz.push({
			vw: "Max L",
			eb: 478,
			dD: 478
		}), yz.push({
			vw: "YT Drew",
			eb: 471,
			dD: 485
		}), yz.push({
			vw: "Plateau E",
			eb: 485,
			dD: 600
		}), yz.push({
			vw: "Uptrend A",
			eb: 600,
			dD: 613
		}), yz.push({
			vw: "Max M",
			eb: 613,
			dD: 613
		}), yz.push({
			vw: "Downtrend A",
			eb: 614,
			dD: 635
		}), yz.push({
			vw: "Plateau F",
			eb: 636,
			dD: 737
		}), yz.push({
			vw: "End of Record",
			eb: 738,
			dD: 738
		}), dn = [208644377, 208644377, 208644377, 206964709, 205156594, 250680803, 249089835, 234476552, 252346209, 263196406, 270821533, 291436400, 294907103, 288866179, 297960890, 310165928, 323215738, 326005712, 312078872, 282668674,
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
		], this.resize(), aN.ix.z2(0, 0)
	}, this.resize = function() {
		yn = Math.floor(.15 * aK.gB), yt = (yt = Math.floor((b7.cv.fv() ? .018 : .0137) * aK.fw)) < 2 ? 2 : yt, g4 = aY.g0.g1(1, yt), z3()
	}, this.z4 = function() {
		yv || aN.lY.z5()
	}, this.z6 = function(z7) {
		var eF;
		for (yv = !0, eF = 0; eF < z7.length; eF++) dn.unshift(z7[eF]);
		z3(), b3.d1 = !0
	}, this.zA = function() {
		z9()
	}, this.sA = function(fK, fL) {
		fL > aK.gB - .6 * yn ? this.z0 ? fK !== fH && (pJ += fK - fH, fH = fK, z9(), zC(fK), this.z0 = -1 !== ys, b3.d1 = !0) : zC(fK) && (b3.d1 = !0) : this.sZ()
	}, this.sZ = function() {
		-1 !== ys && (this.z0 = !1, ys = -1, b3.d1 = !0)
	}, this.sD = function(fK, deltaY) {
		-1 !== ys && (pJ += Math.floor(deltaY), z9(), zC(fK), b3.d1 = !0)
	}, this.g8 = function(fK, fL) {
		this.sA(fK, fL), -1 !== ys && (fH = fK, this.z0 = !0)
	}, this.sa = function() {
		-1 !== ys && (this.z0 = !1)
	}, this.gE = function() {
		gF.fillStyle = aZ.kf;
		for (var zG, month, db, q7, zJ, zK, jd, zL, zM, eF = yr; yq <= eF; eF--) zE(eF);
		yv && 0 === yq && (gF.fillStyle = aZ.l2, zE(0)), -1 !== ys && (gF.fillStyle = aZ.ke, zE(ys)), -1 !== ys && (gF.font = g4, aY.g0.textBaseline(gF, 2), (db = new Date).setTime(yu.getTime() - 1e3 * ys * 60 * 60 * 24), month = "month", zG =
			"day", "undefined" != typeof Intl && (month = new Intl.DateTimeFormat("en-US", {
				month: "long"
			}).format(db), zG = new Intl.DateTimeFormat("en-US", {
				weekday: "long"
			}).format(db)), zG = zG + ", " + db.getUTCDate() + " " + month + " " + db.getFullYear(), month = 1 === dn[ys] ? " second played" : " seconds played", month = aY.jk.jl(dn[ys]) + month, db = Math.floor(gF.measureText(zG).width),
			q7 = Math.floor(gF.measureText(month).width), zJ = Math.floor(.5 * (db + yt)), zK = (zK = pJ + aK.g5 - (ys + 1) * yo) < zJ ? zJ : zK > aK.g5 - zJ ? aK.g5 - zJ : zK, jd = aK.gB - Math.floor(yp * Math.pow(dn[ys], yw)), zL = Math
			.floor(1.1 * yt), zM = jd > aK.gB - zL ? aK.gB - zL : jd, gF.fillStyle = aZ.ka, gF.fillRect(aK.g5 - q7 - yt, zM - zL, q7 + yt, zL), gF.fillRect(zK - zJ, aK.gB - zL, db + yt, zL), gF.fillStyle = aZ.gG, aY.g0.textAlign(gF, 2), gF
			.fillText(month, Math.floor(aK.g5 - .5 * yt), zM),
			function(jd, zL) {
				for (var q6, uN = -1, fz = dn.length - ys - 1, eF = yz.length - 1; 0 <= eF; eF--) fz >= yz[eF].eb && fz <= yz[eF].dD && (-1 === uN || yz[eF].dD - yz[eF].eb < yz[uN].dD - yz[uN].eb) && (uN = eF); - 1 !== uN && (q6 = Math.floor(
					gF.measureText(yz[uN].vw).width), gF.fillStyle = aZ.ka, gF.fillRect(aK.g5 - q6 - yt, jd, q6 + yt, zL), gF.fillStyle = aZ.gG, gF.fillText(yz[uN].vw, Math.floor(aK.g5 - .5 * yt), jd + zL))
			}(zM - 2 * zL, zL), aY.g0.textAlign(gF, 1), gF.fillText(zG, zK, aK.gB), gF.strokeStyle = aZ.kg, gF.lineWidth = 1, gF.beginPath(), gF.moveTo(0, jd), gF.lineTo(aK.g5, jd), gF.closePath(), gF.stroke())
	}
}

function bZ() {
	var g4, g5, fL, zO, zP, gO, q1, wy, tL, zQ, zR, zS, zT;
	this.fK = 0, this.gB = 0, this.cq = function() {
		zP = pi, zR = "rgba(0,100,0,0.8)", zS = "rgba(150,0,0,0.8)", wy = !(zQ = !0), tL = eX[eW], this.resize()
	}, this.resize = function() {
		g5 = Math.floor((b7.cv.fv() ? .305 : .24) * aK.fw), this.gB = Math.floor(.5 + .13 * g5), g5 = Math.floor(6 * this.gB), g4 = aY.g0.g1(1, Math.floor(.8 * this.gB)), zT = Math.floor(.5 * this.gB), ap.oo.font = g4, fL = b0.gap, zO = Math
			.floor(1 + .13 * this.gB), (gO = document.createElement("canvas")).width = g5, gO.height = this.gB, (q1 = gO.getContext("2d", {
				alpha: !0
			})).font = g4, aY.g0.textBaseline(q1, 1), aY.g0.textAlign(q1, 1), this.zU()
	}, this.xL = function() {
		return b7.cv.fv() && aK.g5 < 1.2 * aK.gB
	}, this.xz = function() {
		this.xL() ? this.fK = aK.g5 - g5 - b0.gap : this.fK = Math.floor(s.zV() + (aK.g5 - s.zV() - t.g5 - g5) / 2 - .5 * b0.gap)
	}, this.j6 = function() {
		wy && (wy = !1, this.zU())
	}, this.zU = function() {
		q1.clearRect(0, 0, g5, this.gB), q1.fillStyle = zQ ? zR : zS, q1.fillRect(0, 0, g5, this.gB), q1.fillStyle = aZ.ke, this.zW(), this.zX(), q1.fillStyle = eX[eW] >= a5.iA(eW) ? aZ.kz : aZ.gG, q1.fillText(aY.jk.jl(tL), Math.floor(g5 / 2),
			zT), q1.fillStyle = aZ.gG, q1.fillRect(0, 0, g5, 1), q1.fillRect(0, 0, 1, this.gB), q1.fillRect(0, this.gB - 1, g5, 1), q1.fillRect(g5 - 1, 0, 1, this.gB)
	}, this.zW = function() {
		var pR = xt(Math.floor((a5.zY() - 1) * this.gB / 9), this.gB - zO);
		q1.fillRect(0, pR, zO, this.gB - pR), q1.fillRect(g5 - zO, pR, zO, this.gB - pR)
	}, this.zX = function() {
		q1.fillRect(zO, this.gB - zO, Math.floor((g5 - 2 * zO) * eX[eW] / zP), zO)
	}, this.i7 = function() {
		0 !== h3[eW] && 2 !== h4[eW] && tL !== eX[eW] && (zP = vY(eX[eW], zP), zQ = eX[eW] > tL && 10 <= eX[eW], tL = eX[eW], wy = !0)
	}, this.gE = function() {
		0 === h3[eW] || fc || 2 === h4[eW] || gF.drawImage(gO, this.fK, fL)
	}
}

function ba() {
	var za, zb, zc, zd, ze, zf, zg, zh, zi, zj, zk, zl, zm, zn, zo, zp, zq, zr, zs, zt, zu, zv, zw, zx, position, zy, zz, a00, a01, a02 = 1,
		a03 = 1;

	function a06() {
		zg.clearRect(0, 0, za, xb), zg.fillStyle = aZ.lC, zg.fillRect(0, 0, za, zl), zg.fillStyle = aZ.kZ, zg.fillRect(0, zl, za, xb - zl), zZ[eW] >= position && a07(zZ[eW] - position, aZ.kv), 0 !== zZ[eW] && 0 === position && a07(0, aZ.lH), -1 !==
			zx && a07(zx, aZ.kd), zg.fillStyle = aZ.gG, zg.fillRect(0, zl, za, 1), zg.fillRect(0, 0, za, b0.uC), zg.fillRect(0, 0, b0.uC, xb), zg.fillRect(za - b0.uC, 0, b0.uC, xb), zg.fillRect(0, xb - b0.uC, za, b0.uC), zg.font = zb, aY.g0
			.textBaseline(zg, 1), aY.g0.textAlign(zg, 1), zg.fillText(aV.nU[65], Math.floor((za + zl - 22) / 2), Math.floor(zj + zc / 2));
		playerList.drawButton(zg, 12, 12, zl - 22);
		var ha, ej = zZ[eW] < position + ze - 1 ? 1 : 2;
		for (zg.font = zd, aY.g0.textAlign(zg, 0), ha = ze - ej; 0 <= ha; ha--) a08(jG[ha + position]), a09(ha, ha + position, jG[ha + position]);
		for (aY.g0.textAlign(zg, 2), ha = ze - ej; 0 <= ha; ha--) a08(jG[ha + position]), a0A(ha, jG[ha + position]);
		2 == ej && (a08(eW), aY.g0.textAlign(zg, 0), a09(ze - 1, zZ[eW], eW), aY.g0.textAlign(zg, 2), a0A(ze - 1, eW)), 0 === position && (ej = .7 * zm / a1.get(4).height, zg.setTransform(ej, 0, 0, ej, Math.floor(zn + .58 * zm + .5 * ej * a1.get(4)
			.width), Math.floor(zj + zc + .4 * zm)), zg.imageSmoothingEnabled = !0, zg.drawImage(a1.get(4), -Math.floor(a1.get(4).width / 2), -Math.floor(a1.get(4).height / 2)), zg.setTransform(1, 0, 0, 1, 0, 0))
	}

	function a08(player) {
		hN && (zg.fillStyle = b4.a0C[b4.r9[b4.iN[player]]])
	}

	function a07(eF, uS) {
		zg.fillStyle = uS, eF = ze - 1 < eF ? ze - 1 : eF;
		uS = Math.floor((eF === ze - 1 ? 2 : 0 === eF ? 1.15 : 1) * zm), uS = eF === ze - 2 ? Math.floor(zl + 9.15 * zm) - Math.floor(zl + 8.15 * zm) : uS;
		zg.fillRect(0, Math.floor(zl + (eF + (0 === eF ? 0 : .15)) * zm), za, uS)
	}

	function a09(a0E, a0F, eF) {
		zg.fillText(zt[a0F], zn, Math.floor(zj + zc + (a0E + .5) * zm)), 1 === h4[eF] && (zg.font = "italic " + zd);
		a0F = Math.floor(zj + zc + (a0E + .5) * zm);
		zg.fillText(zr[eF] === eF ? jm[eF] : zq[zr[eF] % ef], zo, a0F), 0 !== h4[eF] && (zg.font = zd), eF < h2 && 2 !== h4[eF] || zg.fillRect(zo, a0F + .35 * a02, zs[eF], Math.max(1, .1 * a02))
	}

	function a0A(a0E, eF) {
		zg.fillText(f1[eF], zp, Math.floor(zj + zc + (a0E + .5) * zm))
	}

	function a0O(fL) {
		return (fL -= b0.gap + zl) < 0 ? Math.floor(fL / zm) - 1 : fL < (ze - 1) * zm ? Math.floor(fL / zm) : fL < xb - zl ? ze - 1 : (fL -= xb - zl, ze + Math.floor(fL / zm))
	}

	function up(fK, fL) {
		return fK >= b0.gap && fK < b0.gap + za && fL >= b0.gap && fL < b0.gap + xb
	}
	this.cq = function() {
		var eF, fy, ha;
		for (zz = !1, a01 = a00 = zy = 0, zx = -1, ze = b7.cv.fv() ? 6 : 10, a03 = (position = 0) === (a03 = b9.dF.data[11].value) ? 10 : 1 === a03 ? 5 : 1, zw = !1, zu = new Uint16Array(ze + 1), zv = new Uint32Array(ze + 1), zi = ef, jG =
			new Uint16Array(zi), zZ = new Uint16Array(zi), eF = zi - 1; 0 <= eF; eF--) jG[eF] = eF, zZ[eF] = eF;
		this.resize(!0), zq = [], zr = new Uint16Array(ef), zs = new Uint16Array(ef);
		var a04 = Math.floor(za - zo - zn - zh),
			a05 = 0;
		for (zt = new Array(ef), zg.font = zd, eF = ef - 1; 0 <= eF; eF--)
			if (zt[eF] = eF + 1 + ".", zr[eF] = eF, zs[eF] = Math.floor(zg.measureText(jm[eF]).width), zs[eF] > a04) {
				for (fy = jm[eF], ha = jm[eF].length - 1; 1 <= ha && (fy = fy.substring(0, ha), zs[eF] = Math.floor(zg.measureText(fy + "...").width), !(zs[eF] <= a04)); ha--);
				fy += "...", zq.push(fy), zr[eF] = ef + a05++
			} a06()
	}, this.resize = function(cq) {
		if (xb = b7.cv.fv() ? (za = Math.floor(.335 * aK.fw), Math.floor(ze * za / 8)) : (za = Math.floor(.27 * aK.fw), Math.floor(ze * za / 10)), za = Math.floor(.97 * za), (zf = document.createElement("canvas")).width = za, zf.height = xb, zg =
			zf.getContext("2d", {
				alpha: !0
			}), zj = .025 * za, zc = .16 * za, zk = 0 * za, zl = Math.floor(.45 * zj + zc), zm = (xb - zc - 2 * zj - zk) / ze, zb = aY.g0.g1(1, Math.floor(.55 * zc)), a02 = Math.floor((b7.cv.fv() ? .67 : .72) * zm), zd = aY.g0.g1(0, a02), zg
			.font = zd, zn = Math.floor(.04 * za), zo = Math.floor((b7.cv.fv() ? .195 : .18) * za), zh = Math.floor(zg.measureText("00920600").width), zg.font = zb, zp = za - zn, !cq) {
			zg.font = zd;
			for (var eF = ef - 1; 0 <= eF; eF--) zs[eF] = Math.floor(zg.measureText(zr[eF] === eF ? jm[eF] : zq[zr[eF] % ef]).width);
			a06()
		}
	}, this.zV = function() {
		return za
	}, this.j6 = function(w8) {
		zw && (w8 || b3.iL() % a03 == 0) && (zw = !1, a06())
	}, this.i7 = function() {
		! function() {
			for (var ha = zi - 1; 0 <= ha; ha--) 0 === h3[jG[ha]] && ! function(ha) {
				var a0M = jG[ha];
				zi--;
				for (var eF = ha; eF < zi; eF++) jG[eF] = jG[eF + 1], zZ[jG[eF]] = eF;
				jG[zi] = a0M, zZ[jG[zi]] = zi
			}(ha)
		}();
		for (var a0K, kM = zi - 1, ha = 0; ha < kM; ha++) f1[jG[ha]] < f1[jG[ha + 1]] && (a0K = jG[ha], jG[ha] = jG[ha + 1], jG[ha + 1] = a0K, zZ[jG[ha]] = ha, zZ[jG[ha + 1]] = ha + 1);
		! function() {
			for (var db = zw, ej = (zw = !0, zZ[eW] >= ze - 1 ? ze - 2 : ze - 1), eF = ej; 0 <= eF; eF--)
				if (zu[eF] !== jG[eF] || zv[eF] !== f1[jG[eF]]) return;
			(ej != ze - 2 || zu[ze] === zZ[eW] && zv[ze] === f1[eW]) && (zw = db)
		}();
		for (var eF = ze - 1; 0 <= eF; eF--) zu[eF] = jG[eF], zv[eF] = f1[jG[eF]];
		zu[ze] = zZ[eW], zv[ze] = f1[eW]
	}, this.g8 = function(fK, fL) {
		return !!up(fK, fL) && (utils.isPointInRectangle(fK, fL, b0.gap + 12, b0.gap + 12, zl - 22, zl - 22) && playerList.display(jm), true) && (zy = b3.da, zz = !0, a00 = a01 = a0O(fL), ag.sq() && (fK = yK(-1, a01, ze), zx !== (fK = fK === ze ?
			-1 : fK)) && (zx = fK, a06(), b3.d1 = !0), !0)
	}, this.sA = function(fK, fL) {
		if (utils.isPointInRectangle(fK, fL, b0.gap + 12, b0.gap + 12, zl - 22, zl - 22)) {
			playerList.hoveringOverButton === false && (playerList.hoveringOverButton = true, a06(), b3.d1 = !0);
		} else {
			playerList.hoveringOverButton === true && (playerList.hoveringOverButton = false, a06(), b3.d1 = !0);
		}
		var db, a0N = a0O(fL);
		return zz ? (db = position, (position = yK(0, position += a00 - a0N, ef - ze)) !== db && (a0N = (a0N = yK(-1, a00 = a0N, ze)) !== ze && up(fK, fL) ? a0N : -1, zx = a0N, a06(), b3.d1 = !0), !0) : (a0N = (a0N = yK(-1, a0N, ze)) === ze || !
			up(fK, fL) || ag.sq() ? -1 : a0N, zx !== a0N && (zx = a0N, a06(), b3.d1 = !0))
	}, this.sa = function(fK, fL) {
		if (!zz) return !1;
		zz = !1;
		var a0N = a0O(fL);
		return ag.sq() && -1 !== zx && (zx = -1, a06(), b3.d1 = !0), b3.da - zy < 350 && a01 === a0N && -1 !== (a0N = (a0N = yK(-1, a0N, ze)) !== ze && up(fK, fL) ? a0N : -1) && (fK = jG[a0N + position], a0N === ze - 1 && zZ[eW] >= position +
			ze - 1 && (fK = eW), hN && donationsTracker.displayHistory(fK, jm, io), 0 !== h3[fK]) && f.k7(fK, 800, !1, 0), !0
	}, this.sD = function(fK, fL, deltaY) {
		var a0P;
		return !(zz || k9 || (a0P = Math.max(Math.floor(Math.abs(deltaY) / 40), 1), !up(fK, fL)) || (fK = (fK = yK(-1, a0O(fL), ze)) === ze || ag.sq() ? -1 : fK, 0 < deltaY ? position < ef - ze && (position += Math.min(ef - ze - position, a0P),
			zx = fK, a06(), b3.d1 = !0) : 0 < position && (position -= Math.min(position, a0P), zx = fK, a06(), b3.d1 = !0), 0))
	}, this.gE = function() {
		gF.drawImage(zf, b0.gap, b0.gap)
	}
}

function bb() {
	var gO, q1, fK, fL, wr, a0Q, gap, a0R, fontSize, a0S, a0T, eZ, a0U, a0V, a0W, a0X, a0Y, a0Z;

	function a0c() {
		q1.clearRect(0, 0, t.g5, t.gB), q1.fillStyle = aZ.ka, q1.fillRect(0, 0, t.g5, t.gB), q1.fillStyle = aZ.kq, fZ = 0 < a0W ? a0W : Math.sqrt(eZ[4] / 1e4), q1.fillRect(0, t.gB - wr - 1, Math.floor(fZ * t.g5), wr), q1.fillStyle = aZ.gG, q1
			.fillRect(0, 0, t.g5, 1), q1.fillRect(0, 0, 1, t.gB), q1.fillRect(t.g5 - 1, 0, 1, t.gB), q1.fillRect(0, t.gB - 1, t.g5, 1), q1.fillRect(0, t.gB - wr - 1, t.g5, 1);
		for (var fZ, a0e, db = 0, eF = 0; eF < a0T.length; eF++) a0U[eF] ? (aY.g0.textAlign(q1, 0), a0e = Math.floor((a0Q - wr + 2 * a0R) * (eF - db + 1) / (a0T.length + 1) - .7 * a0R), q1.fillText(a0T[eF], gap, a0e), aY.g0.textAlign(q1, 2), 5 ===
			eF && 0 !== h3[eW] && eX[eW] >= a5.iA(eW) ? (q1.fillStyle = aZ.lF, q1.fillText(a0b(eF), t.g5 - gap, a0e), q1.fillStyle = aZ.gG) : q1.fillText(a0b(eF), t.g5 - gap, a0e)) : db++
	}

	function a0b(eF) {
		return eF < 3 ? eZ[eF].toString() : 3 === eF || 4 === eF || 5 === eF ? aY.jk.ta(eZ[eF] / 100, 2) : eF < 7 ? aY.jk.jl(eZ[eF]) : eF === 7 ? t.zY(eZ[7]) : eF === 8 ? utils.getMaxTroops(f1, eW) : utils.getDensity(eW)
	}

	function a0a() {
		f1[eW] !== eZ[6] && (eZ[6] = f1[eW], a0S++)
	}
	this.cq = function() {
		a0W = a0X = 0, (a0T = new Array(8))[0] = aV.nU[70], a0T[1] = io ? aV.nU[71] : aV.nU[72], a0T[2] = aV.nU[73], a0T[3] = aV.nU[74], a0T[4] = aV.nU[75], a0T[5] = aV.nU[76], a0T[6] = aV.nU[77], a0T[7] = aV.nU[78],
			a0T.push("Max Troops", "Density"), // add a0T
			a0Z = tn - eT(tn, 100), (eZ = new Array(a0T.length))[0] = io ? 0 : h2, eZ[1] = io ? iO : ih, eZ[2] = qy, eZ[3] = 0, eZ[4] = eT(1e4 * f1[0], tn), eZ[5] = 700, eZ[6] = 0, a0a(), eZ[7] = 0, a0V = a0b(6), a0U = new Array(a0T.length);
		for (var eF = a0T.length - 1; 0 <= eF; eF--) a0U[eF] = !0;
		a0Y = 0, a0Y = io ? (a0U[0] = !1, a0U[2] = !1, a0U[3] = !1, 3) : (a0U[3] = !1, 1), a0S = 0, this.resize()
	}, this.resize = function() {
		this.g5 = Math.floor((b7.cv.fv() ? .1646 : .126) * 1.25 * aK.fw), this.gB = Math.floor(1.18 * this.g5), wr = Math.floor(.04 * this.g5), gap = Math.floor(.035 * this.g5), a0R = .04 * this.g5, a0Q = this.gB, this.gB -= Math.floor(a0Y * (
			this.gB - 2 * wr) / a0T.length), fontSize = Math.floor(.7 * (a0Q - wr) / a0T.length), fontSize = aY.g0.g1(1, fontSize), (gO = document.createElement("canvas")).width = this.g5, gO.height = this.gB, (q1 = gO.getContext("2d", {
			alpha: !0
		})).font = fontSize, aY.g0.textBaseline(q1, 1), q1.lineWidth = 1, this.th(), this.xz(), r.xz(), a0c()
	}, this.xz = function() {
		fK = aK.g5 - this.g5 - b0.gap
	}, this.a0d = function() {
		fL = b0.gap
	}, this.th = function() {
		fL = b0.gap + (r.xL() && 0 !== h3[eW] && !fc ? r.gB + b0.gap : 0)
	}, this.j6 = function(w8) {
		0 < a0S && (w8 || 100 <= a0S) && (a0S = 0, a0c())
	}, this.ua = function() {
		return eZ[7]
	}, this.zY = function(value) {
		var oe = Math.floor(value / 1e3 / 60),
			value = Math.floor((value - 6e4 * oe) / 1e3);
		return value < 10 ? oe + ":0" + value : oe + ":" + value
	}, this.i7 = function() {
		var a0o, per;
		a0U[0] && qz - qy !== eZ[0] && (eZ[0] = qz - qy, a0S++), iO - eZ[0] !== eZ[1] && (eZ[1] = iO - eZ[0], a0S++), this.iw(), (a0o = a5.a0p(eW)) !== eZ[5] && (eZ[5] = a0o, a0S++), a0a(), eZ[7] += b3.a0q, a0o = a0b(7), a0V !== a0o && (a0V =
			a0o, a0S += 100), a0o = hN ? b5.rB() : f1[jG[0]], per = eT(1e4 * a0o, tn), eZ[3] = a0o, eZ[4] !== per && (a0S++, eZ[4] = per), 8 === il && function() {
			if (0 === h3[0]) ao.qh.qp(1);
			else {
				if (0 !== h3[1]) return;
				ao.qh.qp(0)
			}
			return 1
		}() || eZ[3] < a0Z || eZ[3] !== tn && ! function() {
			for (var eF = iO - 1; 0 <= eF; eF--)
				if (0 < ec[iP[eF]].length) return;
			return 1
		}() || ao.qh.qp(-1)
	}, this.iw = function() {
		a0U[2] && qy !== eZ[2] && (eZ[2] = qy, a0S++)
	}, this.a0r = function(eF) {
		var tD, a0s, db;
		return 2 !== qw && (eF === tr ? (a0W = 0, a0c(), !1) : (-1 !== eF || 0 !== a0X) && (a0s = a0W, a0W = fN ? eF / tr : (db = performance.now(), 0 <= eF && (tD = db - 392 * eF, a0X = 0 === eF || tD < a0X ? tD : a0X), 1 < (a0W = (db - a0X) / (
			392 * tr)) ? 1 : a0W), a0c(), a0W !== a0s))
	}, this.gE = function() {
		gF.drawImage(gO, fK, fL)
	}
}

function bc() {
	var dZ, a0t, g5, gB, wl, a0u, a0v, xM, gO, jy, a0w;

	function gD() {
		return Math.floor((aK.g5 - g5) / 2) < o.gB + 2 * b0.gap ? aK.gB - gB - 4 * b0.gap - o.gB : aK.gB - gB - 2 * b0.gap
	}
	this.a0x = -1, this.cq = function() {
		a0w = dZ = !1, wl = .61, a0u = .07, a0v = .09, jy = xM = gB = 0, this.a0x = -1
	}, this.resize = function() {
		var q1, jc, iM, a12, a13, uy;
		dZ && (g5 = xt(g5 = b7.cv.fv() ? Math.floor(.69 * aK.fw) : Math.floor(.5 * aK.fw), vY(aK.g5 - 2 * b0.gap, 10)), g5 = xt(g5, Math.floor(3.57 * vY(aK.gB - 2 * b0.gap, 3))), gB = Math.floor(.28 * g5), (gO = document.createElement("canvas"))
			.width = g5, gO.height = gB, q1 = gO.getContext("2d", {
				alpha: !0
			}), jc = Math.floor(1 + gB / 40), q1.clearRect(0, 0, g5, gB), q1.fillStyle = aZ.ka, q1.fillRect(jc, jc, g5 - 2 * jc, gB - 2 * jc), q1.lineJoin = "bevel", q1.lineWidth = 2 * jc, q1.strokeStyle = aZ.gG, q1.strokeRect(jc, jc, g5 -
				2 * jc, gB - 2 * jc), q1.imageSmoothingEnabled = !0, iM = a1.get(a0t), a12 = iM.width, a13 = iM.height, uy = (21 === a0t ? .666 : 1) * wl * gB / a13, q1.setTransform(uy, 0, 0, uy, Math.floor((g5 - uy * a12) / 2), Math.floor((
				gB - uy * a13) / 2)), q1.drawImage(iM, 0, 0), q1.setTransform(1, 0, 0, 1, Math.floor(g5 - a0v * gB - a0u * gB - jc), Math.floor(jc + a0u * gB)),
			function(q1, eb) {
				q1.lineWidth = Math.floor(1 + gB / 80), q1.strokeStyle = aZ.gG, q1.beginPath(), q1.moveTo(0, 0), q1.lineTo(eb, eb), q1.moveTo(0, eb), q1.lineTo(eb, 0), q1.stroke()
			}(q1, Math.floor(a0v * gB)), q1.setTransform(1, 0, 0, 1, 0, 0))
	}, this.show = function(dd, a0z, a10, a11) {
		dZ || a11 && a0w || (a0t = a10 ? 21 : dd ? 1 : 2, dZ = a0w = !0, this.resize(), i.np(), o.xo(), jy = b3.da, -1 === this.a0x && (this.a0x = b3.iL()), xM = a0z ? 1 : 0)
	}, this.i7 = function() {
		!dZ || 1 <= xM || (xM = 1 < (xM += 5e-4 * (b3.da - jy)) ? 1 : xM, jy = b3.da, b3.d1 = !0)
	}, this.g8 = function(fK, fL) {
		return !(!dZ || xM <= 0 || (fK -= Math.floor((aK.g5 - g5) / 2), fL -= gD(), fK < 0) || fL < 0 || g5 < fK || gB < fL || (g5 - gB / 3 < fK && fL < gB / 3 && (dZ = !1, b3.d1 = !0), 0))
	}, this.gE = function() {
		!dZ || xM <= 0 || (gF.globalAlpha = xM, gF.drawImage(gO, Math.floor((aK.g5 - g5) / 2), gD()), gF.globalAlpha = 1)
	}
}

function cg() {
	this.a15 = !1, this.kU = !1, this.tl = !1, this.a16 = [0, 0, 0, 0], this.a17 = function() {
		var jc, jd, je, jf;
		this.tl = this.tl || this.kU, (this.kU || this.a15 && this.tl) && (jc = ax.a18[0], jd = ax.a18[1], je = ax.a18[2], jf = ax.a18[3], jc = jc < this.a16[0] ? this.a16[0] : jc, jd = jd < this.a16[1] ? this.a16[1] : jd, je = je > this.a16[2] ?
			this.a16[2] : je, jf = jf > this.a16[3] ? this.a16[3] : jf, this.kU = !1, this.a15 = !1, jc === this.a16[0] && jd === this.a16[1] && je === this.a16[2] && jf === this.a16[3] ? this.tm() : jc <= je && jd <= jf && u6.putImageData(
				u7, 0, 0, jc, jd, je - jc + 1, jf - jd + 1))
	}, this.tm = function() {
		this.tl && this.a16[2] >= this.a16[0] && this.a16[3] >= this.a16[1] && u6.putImageData(u7, 0, 0, this.a16[0], this.a16[1], this.a16[2] - this.a16[0] + 1, this.a16[3] - this.a16[1] + 1), this.tl = !1
	}, this.r4 = function() {
		this.a16[2] >= this.a16[0] && this.a16[3] >= this.a16[1] && u6.putImageData(u7, 0, 0, this.a16[0], this.a16[1], this.a16[2] - this.a16[0] + 1, this.a16[3] - this.a16[1] + 1), this.tl = !1
	}, this.cq = function() {
		var fK, fL;
		this.a15 = !1, this.kU = !1, this.tl = !1, this.a16[0] = ap.eA, this.a16[1] = ap.eB, this.a16[2] = this.a16[3] = 0;
		loop: for (fK = 1; fK < ap.eA - 1; fK++)
			for (fL = ap.eB - 2; 1 < fL; fL--)
				if (1 === a19[a2.pZ(fK, fL) + 2]) {
					this.a16[0] = fK;
					break loop
				} loop: for (fL = 1; fL < ap.eB - 1; fL++)
			for (fK = ap.eA - 2; 1 < fK; fK--)
				if (1 === a19[a2.pZ(fK, fL) + 2]) {
					this.a16[1] = fL;
					break loop
				} loop: for (fK = ap.eA - 2; 0 < fK; fK--)
			for (fL = ap.eB - 2; 1 < fL; fL--)
				if (1 === a19[a2.pZ(fK, fL) + 2]) {
					this.a16[2] = fK;
					break loop
				} loop: for (fL = ap.eB - 2; 0 < fL; fL--)
			for (fK = ap.eA - 2; 1 < fK; fK--)
				if (1 === a19[a2.pZ(fK, fL) + 2]) {
					this.a16[3] = fL;
					break loop
				}
	}
}

function cX() {
	this.nU = null;
	var a1A, a1B = new a1C;
	this.cq = function() {
		for (a1A = 0 === b9.dF.data[0].value ? a1B : new(1 === b9.dF.data[0].value ? a1D : 2 === b9.dF.data[0].value ? a1E : 3 === b9.dF.data[0].value ? a1F : a1G); a1A.nU.length < a1B.nU.length;) a1A.nU.push(a1B.nU[a1A.nU.length]);
		this.nU = a1A.nU, b9.dF.translate()
	}, this.oM = function() {
		return navigator.language.startsWith("en") ? 0 : navigator.language.startsWith("ru") ? 1 : navigator.language.startsWith("tr") ? 2 : navigator.language.startsWith("es") ? 3 : navigator.language.startsWith("de") ? 4 : 0
	}, this.rt = function(iM) {
		for (var ej, eb = this.nU.length, eF = 0; eF < eb; eF++)
			if (this.nU[eF].startsWith("{") && (ej = this.nU[eF].replace("{" + iM + "}", "")).length < this.nU[eF].length) return this.nU[64] + ": " + ej;
		return this.nU[64] + ": " + this.nU[63]
	}, this.rv = function(fz, a1I, ne) {
		var eF, eb, fy;
		if (!a1I) return this.nU[fz];
		for (eb = a1I.length, fy = this.nU[fz], eF = 0; eF < eb; eF++) Number.isInteger(a1I[eF]) && (fy = (fy = fy.replace("{" + (20 + eF) + "}", 1 === a1I[eF] ? "" : a1A.a1J[0])).replace("{" + (40 + eF) + "}", 1 === a1I[eF] ? "" : a1A.a1J[1]));
		if (ne) {
			if (ne.vn)
				for (eF = 0; eF < ne.vn.length; eF++) a1I[ne.vn[eF]] = aY.jk.jl(a1I[ne.vn[eF]]);
			if (ne.w5)
				for (eF = 0; eF < ne.w5.length; eF++) a1I[ne.w5[eF]] = aY.jk.ta(100 * a1I[ne.w5[eF]], 1)
		}
		for (eF = 0; eF < eb; eF++) fy = fy.replace("{" + eF + "}", a1I[eF]);
		return fy
	}
}

function a1C() {
	this.a1J = ["s", ""], this.nU = ["Accept", "You erased {0}.", "You were erased by {0}.", "Congratulations! You won the game.", "{0} won the game.", "{0} broke the non-aggression pact.", "{0} is attacking you!", "Choose your start position!",
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
		"Hide Zoom Buttons", "Minimum Font Size", "Lobby", "Text Rendering Speed", "Low", "Medium", "High", "Very High", "Small", "Very Small", "Proxied Lobby", "Slow", "Normal", "Fast", "Enabled", "New Game Update",
		"The game has been updated! Please reload the game.", "Reload", "mmm", "mmm", "mmm", "mmm"
	]
}

function a1G() {
	this.a1J = ["n", "en"], this.nU = ["Akzeptieren", "Du hast {0} ausgelöscht.", "Du wurdest von {0} ausgelöscht.", "Herzlichen Glückwunsch! Du hast das Spiel gewonnen.", "{0} hat das Spiel gewonnen.", "{0} hat den Nichtangriffspakt gebrochen.",
		"{0} greift dich an!", "Wähle deine Startposition!", "Du hast aufgegeben!", "Das Spiel endete in einem Patt!", "Fehler: {0}", "New Game Update", "{0} wurde verewigt!", "Neutrales Land {0}",
		"Spieler: {0}   Bilanz: {1}   Territorium: {2}   Koordinaten: {3}", "Gebirge {0}", "Wasser {0}", "Schiffseigner: {0}   Stärke: {1}", " Nachricht an {0}: ", "{0}: ", "Die Menschheit triumphiert. Die Untoten wurden zurückgedrängt.",
		"Der Widerstand", "Die Ära der Menschheit endet, überrannt von den Untoten.", "Das Virus", "Die Zustimmung zum Frieden beendet das Spiel in einem Patt!", "Du hast einen Nichtangriffspakt mit {0} geschlossen.",
		"Du hast {0} gebeten, einen Nichtangriffspakt zu unterzeichnen.", "{0} hat den Nichtangriffspakt akzeptiert.", "{0} hat einen Nichtangriffspakt angefordert.", "Du bittest {0} Spieler, {1} anzugreifen.", "Du bittest {0}, {1} anzugreifen.",
		"{0} bittet dich, {1} anzugreifen.", "Deine Bilanz ist zu niedrig!", "Du hast {0} Ressource{20} an {1} exportiert.", "Eine Steuer von {0} Einheit{20} wurde abgezogen.", "{0} unterstützt dich mit {1} Ressource{21}.",
		"Ein Bot ({0}) unterstützt dich mit {1} Ressource{21}.", "Karte: {0}", "Dimension: {0}x{1}", "Gesamtpixel: {0}", "Land: {0} ({1})", "Wasser: {0} ({1})", "Gebirge: {0} ({1})", "Angriffe gegen menschliche Spieler sind limitiert.",
		"{0} und {1} weitere{21} Spieler wurden ausgelöscht.", "{0} und {1} weitere{21} Spieler haben das Spiel verlassen.", "{0} und {1} weitere{21} Spieler haben aufgegeben.", "{0} wurde von {1} ausgelöscht.", "{0} hat das Spiel verlassen.",
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

function a1K() {
	this.a1J = ["s", ""], this.nU = ["Accept", "You erased {0}.", "You were erased by {0}.", "Congratulations! You won the game.", "{0} won the game.", "{0} broke the non-aggression pact.", "{0} is attacking you!", "Choose your start position!",
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

function a1D() {
	this.a1J = ["", ""], this.nU = ["Принять", "Вы стерли {0}.", "Вас уничтожил {0}.", "Поздравляем! Вы выиграли игру.", "{0} выиграл игру.", "{0} нарушил пакт о ненападении.", "{0} атакует вас!", "Выберите вашу начальную позицию!", "Вы сдались!",
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

function a1F() {
	this.a1J = ["", ""], this.nU = ["Aceptar", "Borraste a {0}.", "Fuiste borrado por {0}.", "Felicidades! Ganaste el juego.", "{0} ganó el juego.", "{0} rompió el pacto de no agresión.", "¡{0} te está atacando!", "Elige tu posición de inicio!",
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

function a1E() {
	this.a1J = ["", ""], this.nU = ["Kabul Et", "{0} silindi.", "{0} tarafından silindiniz.", "Tebrikler! Oyunu kazandınız.", "{0} oyunu kazandı.", "{0} saldırmazlık paktını bozdu.", "{0} sana saldırıyor!", "Başlangıç pozisyonunuzu seçin!",
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
	this.dZ = !1, this.v9 = null, this.a1L = 0, this.g5 = null, this.gB = null, this.a1M = .013, this.a1N = .022, this.a1O = .025;
	this.a1Q = 3, this.a1R = 1.2, this.a1S = .2, this.a1T = .235, this.a1U = .9, this.a1V = .08;
	var a1W, tG = ["Best Players", "Best Clans", "LEGENDS NEVER DIE", "THE NEVER ENDING WAR"],
		a1X = [-1e6, -1e6];
	this.position = [0, 0], this.a1Z = [0, 0], this.cq = function() {
		this.v9 = [null, null], this.dZ = !1, this.a1L = 0
	}, this.gC = function(id) {
		this.dZ = !0, this.resize(), this.a1L = id, this.g2(), y.gC(!1), b3.d1 = !0
	}, this.i7 = function() {
		this.dZ && this.g2()
	}, this.g2 = function() {
		b3.da - 12e4 >= a1X[this.a1L] && (a1X[this.a1L] = b3.da, this.a1Z = [0, 0], aN.ix.z2(0, 1 + this.a1L)) && aN.lY.a1a(0, this.a1L)
	}, this.resize = function() {
		if (this.dZ) {
			var eF;
			for (this.g5 = this.a1b(b7.cv.fv() ? .85 : .66, .75, aK.g5, aK.gB), this.gB = Math.floor(this.g5 / .75), eF = 1; 0 <= eF; eF--) this.v9[eF] && (this.v9[eF][4] = aY.g0.g1(1, this.v9[eF][5] * this.gB / 10));
			a1W = aY.g0.g1(1, .1 * this.gB)
		}
	}, this.a1b = function(ft, gN, g5, gB) {
		return g5 < gN * gB ? Math.floor(ft * g5) : Math.floor(gN * ft * gB)
	}, this.a1c = function(fz, a1d, a1e, tW, a1f, a1g, a0E) {
		this.position[fz] = a0E;
		for (var xJ, size = a1d.length, g4 = aY.g0.g1(1, a1f * this.gB / 10), dn = (this.a1h(a1d, g4, a1g * this.g5), [
				[], size, -1, tW, g4, a1f, 10 * a0E
			]), eF = 0; eF < size; eF++) xJ = {
			name: a1d[eF].name,
			value: a1d[eF].qE / a1e,
			colorIndex: a1d[eF].colorIndex
		}, dn[0].push(xJ);
		this.v9[fz] = dn, this.a1i(fz);
		a1g = this.v9[fz][0][0].name;
		1 === fz && (a1g = "[" + a1g + "]"), 0 === a0E && aw.fx(fz, a1g), b3.d1 = !0
	}, this.a1i = function(eF) {
		this.v9[eF][0].sort(function(ha, hj) {
			return hj.value - ha.value
		})
	}, this.nW = function(fz, name, a1j, a1k) {
		if (this.v9 && this.v9[fz]) {
			var eF, vx = !1;
			if (0 === fz) {
				for (eF = 0; eF < this.v9[fz][0].length; eF++)
					if (name === this.v9[fz][0][eF].name && a1j > .99 * this.v9[fz][0][eF].value && a1j < 1.01 * this.v9[fz][0][eF].value) {
						this.v9[fz][0][eF].value = a1k, vx = !0;
						break
					} vx || this.v9[fz][0].push({
					name: name,
					value: a1k
				})
			} else {
				for (eF = 0; eF < this.v9[fz][0].length; eF++)
					if (name === this.v9[fz][0][eF].name) {
						this.v9[fz][0][eF].value += 32 < this.v9[fz][0][eF].value ? (64 - this.v9[fz][0][eF].value) / 256 : .25, this.v9[fz][0][eF].value *= 1 / (383 / 384), vx = !0;
						break
					} for (eF = 0; eF < this.v9[fz][0].length; eF++) this.v9[fz][0][eF].value *= 383 / 384;
				vx || this.v9[fz][0].push({
					name: name,
					value: .25
				})
			}
			this.a1i(fz)
		}
	}, this.a1h = function(a1d, g4, g6) {
		for (var eF = a1d.length - 1; 0 <= eF; eF--)
			for (; 3 < a1d[eF].name.length && n.measureText(a1d[eF].name, g4) > g6;) a1d[eF].name = a1d[eF].name.substring(0, a1d[eF].name.length - 4) + "..."
	}, this.g8 = function(gr, gs) {
		return !!this.dZ && (gr -= (aK.g5 - this.g5) / 2, gs -= (aK.gB - this.gB) / 2, gr < 0 || gr > this.g5 || gs < 0 || gs > this.gB ? (this.dZ = !1, 0 === x.dY() && y.gC(!0), b3.d1 = !0) : (gs = gs < .3 * this.gB ? 1 : gs < .85 * this.gB ? (
				gs = (0 === this.a1L ? 14.1 : 3) * (gs - .3 * this.gB) / (.55 * this.gB), Math.floor(1 + gs * gs)) : 0 === this.a1L ? 200 : 10, gr < this.g5 / 2 ? this.a1Z[this.a1L] = -gs : this.a1Z[this.a1L] = gs, a1X[this.a1L] + 50 > b3
			.da || (a1X[this.a1L] = b3.da, aN.ix.z2(0, 1 + this.a1L) && aN.lY.a1a(0, this.a1L)), !0))
	}, this.gE = function() {
		var jc, jd, q6, q7, a1l, a1m, a1n, vA;
		this.dZ && (jc = (aK.g5 - this.g5) / 2, jd = (aK.gB - this.gB) / 2, q6 = this.a1M * this.g5, q7 = this.a1Q * q6, a1l = this.a1N * this.g5, a1m = this.a1R * a1l, a1n = this.a1O * this.g5, vA = Math.floor(.25 * this.gB), gF.setTransform(1,
				0, 0, 1, jc, jd), gF.fillStyle = 0 === this.a1L ? aZ.l8 : aZ.l5, gF.fillRect(0, 0, this.g5, vA), gF.fillStyle = aZ.kZ, gF.fillRect(0, vA, this.g5, this.gB - vA), gF.fillStyle = aZ.gG, gF.font = a1W, aY.g0.textBaseline(gF, 1),
			aY.g0.textAlign(gF, 1), gF.fillText(tG[this.a1L], Math.floor(this.g5 / 2), Math.floor(.135 * this.gB)), gF.font = aY.g0.g1(1, .025 * this.gB), gF.fillText(tG[this.a1L + 2], Math.floor(this.g5 / 2), Math.floor(.2125 * this.gB)), gF
			.beginPath(), gF.moveTo(this.g5 / 4, 0), gF.lineTo(this.g5 / 2 - q6, 0), gF.lineTo(this.g5 / 2, -q7), gF.lineTo(this.g5 / 2 + q6, 0), gF.lineTo(this.g5 - a1l, 0), gF.lineTo(this.g5 + a1m, -a1m), gF.lineTo(this.g5, a1l), gF.lineTo(
				this.g5, this.gB / 2 - q6), gF.lineTo(this.g5 + q7, this.gB / 2), gF.lineTo(this.g5, this.gB / 2 + q6), gF.lineTo(this.g5, this.gB - a1l), gF.lineTo(this.g5 + a1m, this.gB + a1m), gF.lineTo(this.g5 - a1l, this.gB), gF.lineTo(
				this.g5 / 2 + q6, this.gB), gF.lineTo(this.g5 / 2, this.gB + q7), gF.lineTo(this.g5 / 2 - q6, this.gB), gF.lineTo(a1l, this.gB), gF.lineTo(-a1m, this.gB + a1m), gF.lineTo(0, this.gB - a1l), gF.lineTo(0, this.gB / 2 + q6), gF
			.lineTo(-q7, this.gB / 2), gF.lineTo(0, this.gB / 2 - q6), gF.lineTo(0, a1l), gF.lineTo(-a1m, -a1m), gF.lineTo(a1l, 0), gF.lineTo(this.g5 / 4, 0), gF.lineTo(this.g5 / 4, a1n), gF.lineTo(a1n, a1n), gF.lineTo(a1n, this.gB - a1n), gF
			.lineTo(this.g5 - a1n, this.gB - a1n), gF.lineTo(this.g5 - a1n, a1n), gF.lineTo(this.g5 / 4, a1n), gF.fill(), this.v9[this.a1L] && this.a1o(vA), this.a1p(vA), gF.setTransform(1, 0, 0, 1, 0, 0))
	}, this.a1p = function(vA) {
		var q6 = vY(2, Math.floor(.06 * this.g5)),
			wl = (q6 -= q6 % 2, vY(2, Math.floor(.01 * this.g5))),
			vA = (wl -= wl % 2, Math.floor(.82 * vA));
		gF.fillRect(q6, vA, q6, wl), gF.fillRect(this.g5 - q6 - q6, vA, q6, wl), gF.fillRect(Math.floor(this.g5 - q6 - q6 + (q6 - wl) / 2), Math.floor(vA - (q6 - wl) / 2), wl, q6)
	}, this.a1o = function(vA) {
		var fL;
		gF.font = this.v9[this.a1L][4];
		for (var eF = this.v9[this.a1L][1] - 1; 0 <= eF; eF--) aY.g0.textAlign(gF, 2), fL = Math.floor(this.a1V * this.gB + vA + eF * ((1 - 2 * this.a1V) * this.gB - vA) / 9), gF.fillText(this.v9[this.a1L][0][eF].value.toFixed(this.v9[this.a1L][
			3]), Math.floor(this.a1U * this.g5), fL), gF.fillText(eF + 1 + this.v9[this.a1L][6] + ".", Math.floor(this.a1S * this.g5), fL), aY.g0.textAlign(gF, 0), gF.fillText(this.v9[this.a1L][0][eF].name, Math.floor(this.a1T * this.g5), fL)
	}
}

function cy() {
	var fK, fL, gB, a1q, a1r, a1s, a1t, a1u, a1v, g5, a1w, a1x;
	this.dZ = !1, this.cq = function(fy, a1y) {
		if (13 <= b7.de && b7.de < 18) return a1y ? void(a1w = fy) : a1w !== fy ? void 0 : void b7.oH.saveString(200, fy);
		a1y && ((a8.v9[1].qr.dZ || a8.v9[2].qr.dZ) && a8.si(), y.gC(!1), a1w = fy, (a1x = document.createElement("a")).appendChild(document.createTextNode(a1w)), this.dZ = !0, a1x.title = a1w, a1x.target = "_blank", a1x.href = a1w, a1x.style
			.textAlign = "center", a1x.style.color = aZ.gG, a1x.style.position = "absolute", a1x.style.padding = "0px", a1x.style.margin = "0px", this.resize(), document.body.appendChild(a1x), b3.d1 = !0)
	}, this.np = function() {
		return !(!this.dZ || (document.body.removeChild(a1x), this.dZ = !1))
	}, this.g8 = function(gr, gs) {
		return !!this.dZ && ((gr < fK || gs < fL || fK + g5 < gr || fL + gB < gs || fK + g5 - a1q < gr && gs < fL + a1q) && (b3.d1 = !0, this.dZ = !1, document.body.removeChild(a1x), 0 === x.dY()) && y.gC(!0), !0)
	}, this.resize = function() {
		var g4, a1z;
		this.dZ && (a1u = Math.floor(.8 * (b7.cv.fv() ? aK.g5 > aK.gB ? .6 : .55 : .4) * aK.fw), a1q = Math.floor(.15 * a1u), a1r = Math.floor(.35 * a1q), a1s = Math.floor(.5 * a1q), a1t = Math.floor(2.5 * a1s), gB = a1q + a1r + 3 * a1s, g4 = aY
			.g0.g1(1, a1r / aK.nA), a1v = Math.floor(aK.nA * n.measureText(a1w, g4)), a1z = g5 = (a1u < a1v ? a1v : a1u) + 2 * a1t, g5 = Math.min(g5, aK.g5 - 2 * (b7.cv.fv() ? 2 : 1) * b0.gap), g4 = aY.g0.g1(1, g5 / a1z * a1r / aK.nA), a1v =
			Math.floor(aK.nA * n.measureText(a1w, g4)), fK = Math.floor((aK.g5 - g5) / 2), fL = Math.floor((aK.gB - gB) / 2), a1x.style.font = g4, a1x.style.top = Math.floor((fL + 1.4 * a1s + a1q) / aK.nA) + "px", a1x.style.left = Math.floor(
				(fK + (g5 - a1v) / 2) / aK.nA) + "px")
	}, this.gE = function() {
		this.dZ && (gF.fillStyle = aZ.ka, gF.fillRect(fK, fL + a1q, g5, gB - a1q), gF.fillStyle = aZ.lN, gF.fillRect(fK, fL, g5, a1q), gF.fillStyle = aZ.gG, gF.lineWidth = b0.uC, gF.strokeStyle = aZ.gG, gF.strokeRect(fK, fL, g5, gB), gF.fillRect(
				fK, fL + a1q, g5, b0.uC), gF.font = aY.g0.g1(1, .48 * a1q), aY.g0.textAlign(gF, 1), aY.g0.textBaseline(gF, 1), gF.fillText("You are leaving Territorial.io!", Math.floor(fK + (g5 - .5 * a1q) / 2), Math.floor(fL + .55 * a1q)), j
			.v7(Math.floor(fK + g5 - .8 * a1q), Math.floor(fL + .25 * a1q), Math.floor(.5 * a1q)), gF.setTransform(1, 0, 0, 1, 0, 0))
	}
}

function cu() {
	var gap, a0T, fK = [0, 0, 0, 0, 0],
		fL = [0, 0, 0, 0, 0],
		kH = [1, 1, 1, 1, 1],
		dd = [!0, !0, !0, !0, !0],
		iM = (this.dt = [!0, !0, !0, !0, !0], null);
	this.a20 = function(uP, a21) {
		iM = uP, dd = a21, a0T = [ah.a22, ah.a23, ah.a24, ah.a25, ah.a26], this.cq()
	}, this.cq = function() {
		if (a1.g3()) {
			var eF, q6 = Math.floor((b7.cv.fv() ? .261 : .195) * aK.fw),
				q7 = Math.floor(.9 * q6),
				wl = Math.floor(.17 * q7);
			if (gap = b7.cv.fv() ? 2 * b0.gap : b0.gap, kH[0] = q6 / iM[0].width, kH[1] = q7 / iM[1].width, kH[2] = wl / iM[2].height, kH[3] = wl / iM[3].height, kH[4] = wl / iM[4].height, kH[3] *= 1.07, fK[0] = gap, fK[1] = gap, fK[2] = gap, fK[
					3] = gap, fK[4] = Math.floor(2 * gap + kH[3] * iM[3].width), fL[0] = gap, fL[1] = fL[0] + gap + kH[0] * iM[0].height, fL[2] = fL[1] + gap + kH[1] * iM[1].height, fL[3] = fL[2] + gap + kH[2] * iM[2].height, fL[4] = fL[3], !dd[
					0])
				for (eF = 0; eF < 5; eF++) fL[eF] -= kH[0] * iM[0].height + gap;
			if (!dd[1])
				for (eF = 2; eF < 5; eF++) fL[eF] -= kH[1] * iM[1].height + gap
		}
	}, this.dZ = function() {
		return !(7 === x.dY() && b7.cv.fv())
	}, this.g8 = function(gr, gs, a1y) {
		if (iM && this.dZ())
			for (var eF = dd.length - 1; 0 <= eF; eF--)
				if (dd[eF] && this.dt[eF] && fK[eF] < gr && fL[eF] < gs && gr < fK[eF] + kH[eF] * iM[eF].width && gs < fL[eF] + kH[eF] * iM[eF].height) return av.cq(a0T[eF], a1y), !0;
		return !1
	}, this.gE = function() {
		if (iM && this.dZ()) {
			var eF;
			for (gF.imageSmoothingEnabled = !0, eF = 0; eF < 5; eF++) dd[eF] && this.dt[eF] && (gF.setTransform(kH[eF], 0, 0, kH[eF], fK[eF], fL[eF]), gF.drawImage(iM[eF], 0, 0));
			gF.setTransform(1, 0, 0, 1, 0, 0)
		}
	}
}

function bd() {
	var a1L, a27, a28;

	function a2D(eF) {
		var button = v.nM[eF],
			fK = button.fK,
			fL = button.fL,
			g5 = button.g5,
			gB = button.gB;
		gF.fillStyle = button.a2B, gF.fillRect(fK, fL, g5, gB), eF === a1L && (gF.fillStyle = a28, gF.fillRect(fK, fL, g5, gB)), gF.lineWidth = b0.uC, gF.strokeStyle = a27, gF.strokeRect(fK, fL, g5, gB),
			function(button) {
				var fK = button.fK,
					fL = button.fL,
					g5 = button.g5,
					gB = button.gB;
				aY.g0.textAlign(gF, 1), aY.g0.textBaseline(gF, 1), gF.font = button.font, gF.fillStyle = a27, gF.fillText(button.nU, Math.floor(fK + g5 / 2), Math.floor(fL + gB / 2 + .1 * button.fontSize))
			}(button)
	}
	this.g5 = 0, this.gB = 0, this.fL = 0, this.gap = 0, this.cq = function() {
		a1L = -1, a27 = aZ.gG, a28 = "rgba(255,255,255,0.16)", this.nM = new Array(7), this.gB = Math.floor((b7.cv.fv() ? .123 : .093) * aK.fw), this.g5 = Math.floor((b7.cv.fv() ? 3.96 : 4.2) * this.gB), this.gap = Math.floor(.025 * this.g5);
		var a29 = Math.floor(.26 * this.gB),
			a2A = aY.g0.g1(1, a29);
		this.nM[0] = {
			fK: 0,
			fL: 0,
			g5: Math.floor(.6 * this.g5 - this.gap / 2),
			gB: this.gB,
			nU: "Multiplayer",
			font: a2A,
			a2B: "rgba(22,88,22,0.8)",
			fontSize: a29
		}, a29 = Math.floor(.18 * this.gB), a2A = aY.g0.g1(1, a29), this.nM[1] = {
			fK: 0,
			fL: 0,
			g5: this.g5 - this.nM[0].g5 - this.gap,
			gB: this.gB,
			nU: "Single Player",
			font: a2A,
			a2B: "rgba(22,88,88,0.8)",
			fontSize: a29
		}, this.nM[2] = {
			fK: 0,
			fL: 0,
			g5: this.g5,
			gB: Math.floor(.3 * this.gB),
			nU: "",
			font: this.nM[1].font,
			a2B: "rgba(100,0,0,0.8)",
			fontSize: this.nM[1].fontSize
		}, this.nM[3] = {
			fK: 0,
			fL: 0,
			g5: this.g5,
			gB: this.gB,
			nU: "Back",
			font: this.nM[0].font,
			a2B: "rgba(0,0,0,0.8)",
			fontSize: this.nM[0].fontSize
		}, this.nM[4] = {
			fK: 0,
			fL: 0,
			g5: this.g5,
			gB: Math.floor(.3 * this.gB),
			nU: "The game was updated!",
			font: this.nM[1].font,
			a2B: "rgba(100,0,0,0.8)",
			fontSize: this.nM[1].fontSize
		}, this.nM[5] = {
			fK: 0,
			fL: 0,
			g5: this.nM[0].g5,
			gB: Math.floor(.8 * this.gB),
			nU: "Reload",
			font: this.nM[0].font,
			a2B: "rgba(0,100,0,0.8)",
			fontSize: this.nM[0].fontSize
		}, this.nM[6] = {
			fK: 0,
			fL: 0,
			g5: this.nM[1].g5,
			gB: this.nM[5].gB,
			nU: "Back",
			font: this.nM[0].font,
			a2B: "rgba(0,0,0,0.8)",
			fontSize: this.nM[0].fontSize
		}, this.zA()
	}, this.zA = function() {
		this.fL = Math.floor(.54 * aK.gB), this.nM[0].fK = Math.floor(.5 * aK.g5 - .5 * this.g5), this.nM[1].fK = this.nM[0].fK + this.nM[0].g5 + this.gap, this.nM[2].fK = this.nM[3].fK = this.nM[0].fK, this.nM[4].fK = this.nM[5].fK = this.nM[0]
			.fK, this.nM[6].fK = this.nM[1].fK, this.nM[0].fL = Math.floor(.54 * aK.gB), this.nM[1].fL = this.nM[0].fL, this.nM[2].fL = Math.floor((aK.gB - this.nM[2].gB - this.nM[3].gB - this.gap) / 2), this.nM[3].fL = this.nM[2].fL + this.nM[2]
			.gB + this.gap, this.nM[4].fL = Math.floor((aK.gB - this.nM[4].gB - this.nM[5].gB - this.gap) / 2), this.nM[5].fL = this.nM[6].fL = this.nM[4].fL + this.nM[4].gB + this.gap
	}, this.a2C = function() {
		a2D(0), a2D(1)
	}, this.a2E = function() {
		a2D(2), a2D(3)
	}, this.a2F = function() {
		a2D(4), a2D(5), a2D(6)
	}, this.sA = function(fK, fL, j6) {
		var eF = -1;
		return 0 === x.dY() ? eF = this.sf(fK, fL, 0, 2) : 3 === x.dY() ? eF = this.sf(fK, fL, 3, 1) : 5 === x.dY() && (eF = this.sf(fK, fL, 5, 2)), a1L !== eF && (a1L = eF, j6) && (b3.d1 = !0), -1 !== eF && (q.sZ(), !0)
	}, this.sf = function(fK, fL, a2G, size) {
		for (var eF = a2G; eF < a2G + size; eF++)
			if (fK >= this.nM[eF].fK && fL >= this.nM[eF].fL && fK <= this.nM[eF].fK + this.nM[eF].g5 && fL <= this.nM[eF].fL + this.nM[eF].gB) return eF;
		return -1
	}
}

function a2I() {
	function a2O(uS) {
		return uS < 0 ? 0 : 255 < uS ? 255 : Math.floor(uS)
	}
	this.g5 = 0, this.gB = 0, this.dZ = !1, this.a2J = 0, this.gap = 0, this.wX = 0, this.a1q = 0, this.a2K = 0, this.a2L = 0, this.a2M = 0, this.colors = null, this.cq = function() {
		this.dZ = !0, this.a2J = 0, this.resize()
	}, this.resize = function() {
		this.dZ && (aK.g5 < 1.4 * aK.gB ? this.g5 = Math.floor((b7.cv.fv() ? .94 : .43) * aK.g5) : (this.gB = Math.floor((b7.cv.fv() ? .88 : .43) * aK.gB), this.g5 = Math.floor(1.4 * this.gB)), this.gB = this.g5 / 1.4, this.gap = this.g5 / 32,
			this.a1q = Math.floor(.25 * this.gB), this.a2K = (this.gB - this.a1q - 3 * this.gap) / 2, this.a2L = this.g5 - 3 * this.gap - this.a2K, this.a2M = (this.gB - this.a1q - 4 * this.gap) / 3)
	}, this.a2N = function() {
		this.colors = [
			[0, 0, 0],
			[0, 0, 0]
		];
		var fy = b9.dF.data[103].value.split("");
		if (fy.length < 6)
			for (var hj = 2; 0 <= hj; hj--) this.colors[0][hj] = a2O(256 * Math.random());
		else
			for (var eF = 2; 0 <= eF; eF--) this.colors[0][eF] = a2O(4 * (10 * parseInt(fy[2 * eF]) + parseInt(fy[2 * eF + 1])));
		this.a2P()
	}, this.a2Q = function() {
		return [eT(this.colors[0][0], 4), eT(this.colors[0][1], 4), eT(this.colors[0][2], 4)]
	}, this.sD = function(g9, gA, deltaY) {
		var jc = (aK.g5 - this.g5) / 2;
		gA -= (aK.gB - this.gB) / 2 + this.a1q, (g9 -= jc) < 0 || gA < 0 || g9 >= this.g5 || gA >= this.gB - this.a1q || (jc = Math.floor(3 * gA / (this.gB - this.a1q)), this.colors[this.wX][jc] = a2O(this.colors[this.wX][jc] + (deltaY < 0 ? 1 :
			-1) * Math.max(Math.abs(.05 * deltaY), 1)), b3.d1 = !0)
	}, this.g8 = function(g9, gA) {
		this.a2J = 0;
		var jc = (aK.g5 - this.g5) / 2;
		return gA -= (aK.gB - this.gB) / 2, (g9 -= jc) < 0 || gA < 0 || g9 >= this.g5 - 1 || gA >= this.gB - 1 || g9 > this.g5 - (.4 * this.a1q + 3 * this.gap) && gA < this.a1q ? (this.dZ = !1, 0 === x.dY() && y.gC(!0), !(b3.d1 = !0)) : g9 < this
			.gap || gA < this.gap + this.a1q || g9 >= this.g5 || gA >= this.gB - this.gap || (g9 < this.gap + this.a2K ? (gA < this.gap + this.a1q + this.a2K && 0 !== this.wX && (this.wX = 0, b3.d1 = !0), !0) : g9 < this.gap + this.a2K || (g9 -=
				2 * this.gap + this.a2K, gA < this.gap + this.a1q + this.a2M ? (this.a2J = 1, this.colors[this.wX][0] = a2O(256 * g9 / this.a2L), b3.d1 = !0) : gA < 2 * this.gap + this.a1q + this.a2M || (gA < 2 * this.gap + this.a1q + 2 *
					this.a2M ? (this.a2J = 2, this.colors[this.wX][1] = a2O(256 * g9 / this.a2L), b3.d1 = !0) : !(gA >= 3 * this.gap + this.a1q + 2 * this.a2M) || (this.a2J = 3, this.colors[this.wX][2] = a2O(256 * g9 / this.a2L), b3.d1 = !0))
				))
	}, this.a2P = function() {
		for (var hj = 2; 0 <= hj; hj--) this.colors[0][hj] = a2O(this.colors[0][hj])
	}, this.a2R = function() {
		for (var dd, fy = "", eF = 0; eF < 3; eF++)(dd = eT(this.colors[0][eF], 4)) < 10 && (fy += "0"), fy += dd.toString();
		return fy
	}, this.sA = function(g9) {
		0 !== this.a2J && (g9 -= 2 * this.gap + this.a2K + (aK.g5 - this.g5) / 2, this.colors[this.wX][this.a2J - 1] = a2O(256 * g9 / this.a2L), b3.d1 = !0)
	}, this.a2S = function() {
		0 < this.a2J && (this.a2J = 0, this.a2P(), b9.nV.nW(103, this.a2R()), b3.d1 = !0)
	}, this.gE = function() {
		var jc = (aK.g5 - this.g5) / 2,
			jd = (aK.gB - this.gB) / 2;
		gF.setTransform(1, 0, 0, 1, jc, jd), gF.fillStyle = aZ.ka, gF.fillRect(0, this.a1q, this.g5, this.gB - this.a1q), gF.fillStyle = aZ.kl, gF.fillRect(0, 0, this.g5, this.a1q), gF.fillStyle = aZ.gG, gF.lineWidth = b0.uC, gF.strokeStyle = aZ
			.gG, gF.strokeRect(-1, -1, this.g5 + 2, this.gB + 2), gF.fillRect(0, this.a1q, this.g5, b0.uC), gF.font = aY.g0.g1(1, .31 * this.a1q), aY.g0.textBaseline(gF, 1), aY.g0.textAlign(gF, 1), gF.fillText("Choose Your Nation's Color!", Math
				.floor((this.g5 - this.gap - .4 * this.a1q) / 2), Math.floor(.55 * this.a1q)), this.a2T(0), gF.lineWidth = b0.uC, this.a2U(0), this.a2U(1), this.a2U(2), j.v7(Math.floor(jc + this.g5 - .4 * this.a1q - this.gap), Math.floor(jd +
				.3 * this.a1q), Math.floor(.4 * this.a1q)), gF.setTransform(1, 0, 0, 1, 0, 0)
	}, this.a2T = function(eF) {
		var gR = this.colors[eF][0],
			tD = this.colors[eF][1],
			eF = this.colors[eF][2];
		gF.fillStyle = "rgb(" + gR + "," + tD + "," + eF + ")", gF.fillRect(this.gap, this.a1q + this.gap, this.a2K, 2 * this.a2K + this.gap), gF.lineWidth = b0.uC, gF.strokeStyle = aZ.gG, gF.strokeRect(this.gap, this.a1q + this.gap, this.a2K,
			2 * this.a2K + this.gap), gF.fillStyle = gR + tD + eF < 306 && tD < 150 ? aZ.gG : aZ.ji, gF.font = aY.g0.g1(1, .32 * this.a2M), aY.g0.textAlign(gF, 1), aY.g0.textBaseline(gF, 1), gF.rotate(-Math.PI / 2), gF.fillText(
			"National Color", Math.floor(-1.5 * this.gap - this.a1q - this.a2K), Math.floor(this.gap + .5 * this.a2K)), gF.rotate(Math.PI / 2)
	}, this.a2U = function(eF) {
		gF.fillStyle = "rgb(" + (0 === eF ? 150 : 2 === eF ? 30 : 0) + "," + (1 === eF ? 130 : 2 === eF ? 30 : 0) + "," + (2 === eF ? 220 : 0) + ")", gF.fillRect(2 * this.gap + this.a2K, this.a1q + this.gap + eF * (this.gap + this.a2M), Math
				.floor(this.colors[this.wX][eF] * this.a2L / 255), this.a2M), gF.strokeStyle = aZ.gG, gF.strokeRect(2 * this.gap + this.a2K, this.a1q + this.gap + eF * (this.gap + this.a2M), this.a2L, this.a2M), gF.fillStyle = aZ.gG, gF.font = aY
			.g0.g1(1, .32 * this.a2M), aY.g0.textBaseline(gF, 1), aY.g0.textAlign(gF, 0), gF.fillText((0 === eF ? "Red: " : 1 === eF ? "Green: " : "Blue: ") + this.colors[0][eF].toString(), 3 * this.gap + this.a2K, Math.floor(this.a1q + this
				.gap + eF * (this.gap + this.a2M) + .53 * this.a2M))
	}
}

function be() {
	var a2V, a2W, wr, x3, xw, a2X, a2Y, a2Z, a2a, g4, fontSize, jy, a2b, a2d, a2c = 0;

	function a2g() {
		return aN.ix.a2h[(a2b + a2c) % aN.ix.a2i]
	}

	function a2e() {
		a2b++, jy = b3.da, aN.ix.z2(a2g(), 4) && (a2d = !0, aN.lY.a2j(a2g()))
	}

	function a2k() {
		0 === a2b ? bB.rw(3249) : (a2b === aN.ix.a2i - 1 && (a2b = -1), a2e())
	}

	function a2r(fL, yo, a2q) {
		var jc = Math.floor((aK.g5 - x3) / 2) + a2Y,
			je = jc + Math.floor(a2q * (x3 - 2 * a2Y));
		gF.lineWidth = yo, gF.beginPath(), gF.moveTo(jc, fL), gF.lineTo(je, fL), gF.lineTo(Math.floor(jc - a2Y + a2q * x3), fL + wr), gF.lineTo(jc - a2Y, fL + wr), gF.closePath()
	}
	this.cq = function() {
		x.setState(6), a2V = 0, a2W = 1, a2Z = "rgba(0,220,120,0.4)", a2a = "rgba(0,0,0,0.8)", this.resize(), b3.d1 = !0, a2b = 0, a2d = !1, a2e()
	}, this.resize = function() {
		x3 = Math.floor((b7.cv.fv() ? .5 : .25) * aK.fw), xw = x3 + 12, wr = Math.floor(.125 * x3), a2Y = 3 * wr, a2X = Math.floor(.225 * x3), fontSize = Math.floor(.3 * wr), g4 = aY.g0.g1(0, fontSize)
	}, this.a2f = function(ha) {
		a2c = ha
	}, this.rp = function(rm) {
		rm === a2g() && (a2d = !1, a2k())
	}, this.z4 = function(rm) {
		6 !== x.dY() || a2d || (jy = b3.da, a2d = !0, aN.lY.a2j(rm))
	}, this.g8 = function(fK, fL) {
		var jc = Math.floor((aK.g5 - xw) / 2),
			jd = Math.floor(.5 * (aK.gB - b0.gap - wr - a2X)) + wr + b0.gap;
		return jc < fK && fK < jc + xw && jd < fL && fL < jd + a2X && (this.a2m(), v.sA(fK, fL, !1), !0)
	}, this.a2m = function() {
		aN.ix.s1(3260), a0.cq(), b3.d1 = !0
	}, this.i7 = function() {
		6 === x.dY() && (a2d ? b3.da > jy + 12e3 && bB.rw(3250) : b3.da > jy + 12e3 && a2k(), 100 < (a2V += .07 * a2W * (a2V < 16 ? 5 + a2V : 84 < a2V ? 105 - a2V : 17)) ? (a2V = 100, a2W = -1) : a2V < 0 && (a2V = 0, a2W = 1), a2Z = "rgba(0," +
			Math.floor(190 - 1.9 * a2V) + "," + Math.floor(120 - 1.2 * a2V) + "," + (.4 + .004 * a2V) + ")", a2a = "rgba(0," + Math.floor(1.9 * a2V) + "," + Math.floor(1.2 * a2V) + "," + (.8 - .004 * a2V) + ")", b3.d1 = !0)
	}, this.gE = function() {
		var fK = Math.floor((aK.g5 - xw) / 2),
			fL = Math.floor(.5 * (aK.gB - b0.gap - wr - a2X));
		! function(title, fL, yo, a2q) {
			gF.fillStyle = a2a, a2r(fL, yo, 1), gF.fill(), gF.fillStyle = a2Z, a2r(fL, yo, a2q), gF.fill(), gF.strokeStyle = aZ.gG, a2r(fL, yo, 1), gF.stroke(),
				function(a2t, fL) {
					aY.g0.textAlign(gF, 1), aY.g0.textBaseline(gF, 1), gF.font = g4, gF.fillStyle = aZ.gG, gF.fillText(a2t, Math.floor(.5 * aK.g5), Math.floor(fL + .58 * wr))
				}(title, fL)
		}("Loading", fL, 3, a2V / 100),
		function(fK, fL, g5, gB, nU) {
			gF.fillStyle = aZ.kY, gF.fillRect(fK, fL, g5, gB), gF.lineWidth = 3, gF.strokeStyle = aZ.gG, gF.strokeRect(fK, fL, g5, gB);
			var eb = Math.floor(.3 * gB);
			aY.g0.textAlign(gF, 1), aY.g0.textBaseline(gF, 1), gF.font = aY.g0.g1(0, eb), gF.fillStyle = aZ.gG, gF.fillText(nU, Math.floor(fK + g5 / 2), Math.floor(fL + gB / 2 + .1 * eb))
		}(fK, fL + wr + b0.gap, xw, a2X, "Back")
	}
}

function bf() {
	var dW;
	this.cq = function() {
		v.cq(), y.cq(), dW = 0, a0.cq()
	}, this.setState = function(a2u) {
		dW = a2u
	}, this.dY = function() {
		return dW
	}, this.a2v = function() {
		0 === x.dY() && a0.s0(), this.setState(8), aG.s0(), a8.si(), b6.dZ = !1, av.g8(-1e3, -1e3)
	}, this.si = function(dD) {
		if (!ap.oq) return !1;
		if (!(b3.da < 400)) {
			if ("Enter" === dD.key || "Escape" === dD.key) {
				if (this.a2w()) return 0 === dW && y.gC(!0), !0;
				if ("Enter" === dD.key) {
					if (0 === dW) return a0.a2x(), !0;
					if (7 === dW) return !0
				}
			}
			return !1
		}
	}, this.a2y = function() {
		b6.resize(), av.resize(), a8.resize()
	}, this.a2w = function() {
		return !!av.np() || !!a8.si() || !!b6.dZ && !(b6.dZ = !1)
	}, this.df = function() {
		b3.d1 = !0, 8 === dW ? k9 ? aa.sk(!1) : (b2.dZ ? b2 : j).sl() : 7 === dW ? aG.a2z() : 6 === dW ? w.a2m() : 2 === dW ? z.a30() : 0 !== dW || this.a2w() || b7.cv.setState(11)
	}, this.g8 = function(fK, fL) {
		if (ap.oq && !av.g8(fK, fL) && !(6 === dW && w.g8(fK, fL) || 2 === dW && z.g8(fK, fL) || b6.g8(fK, fL) || au.g8(fK, fL, !0) || a8.g8(fK, fL, !0))) {
			if (q.g8(fK, fL), 0 === dW) a0.g8(fK, fL);
			else if (7 === dW && aG.g8(fK, fL)) return;
			aw.g8(fK, fL)
		}
	}, this.sA = function(fK, fL) {
		if (!q.z0) {
			if (0 <= a8.sf(fK, fL)) return void q.sZ();
			if (a8.sA(fK, fL)) return void q.sZ();
			if (2 === dW && z.sA(fK, fL)) return void q.sZ();
			if (v.sA(fK, fL, !0)) return
		}
		q.sA(fK, fL)
	}, this.click = function(fK, fL) {
		q.sa(), a8.a2S() || au.g8(fK, fL, !1) || a8.g8(fK, fL, !1)
	}, this.sD = function(fK, fL, deltaY) {
		a8.v9[1].qr.dZ || (a8.v9[2].qr.dZ ? a8.v9[2].qr.sD(fK, fL, deltaY) : 0 === dW && q.sD(fK, deltaY))
	}, this.a31 = function() {
		v.zA(), a8.zA(), 0 === dW ? (y.resize(), q.zA()) : 7 === dW && aG.resize(), b3.d1 = !0
	}, this.gE = function() {
		var fL, gO, gN, fK;
		8 !== dW && 10 !== dW && (gF.imageSmoothingEnabled = !0, this.px(), q.gE(), l.gE(), fL = Math.floor(.3 * aK.gB), gO = a1.uQ("territorial.io"), gN = (gN = 1.75 * aK.gB / gO.width) * gO.width < .98 * aK.g5 ? .98 * aK.g5 / gO.width : gN, gF
			.globalAlpha = .15, fK = Math.floor(.5 * (aK.g5 - gN * gO.width)), fK = Math.floor(fK / gN), fL = Math.floor(fL - .5 * gO.height * gN), fL = Math.floor(fL / gN), gF.setTransform(gN, 0, 0, gN, fK, fL), gF.drawImage(gO, fK, fL), gF
			.setTransform(1, 0, 0, 1, 0, 0), gF.globalAlpha = 1, au.gE(), aw.gE(), a8.gE(), 0 === dW ? a0.gE() : 2 === dW ? z.gE() : 6 === dW ? w.gE() : 7 === dW && aG.gE(), a8.a33(), b6.gE(), av.gE())
	}, this.px = function() {
		var a35, a34;
		if (makeMainMenuTransparent) gF.clearRect(0, 0, aK.g5, aK.gB);
		else ap.oq ? (a34 = aK.g5 / ap.eA, a35 = aK.gB / ap.eB, gF.setTransform(a34 = a35 < a34 ? a34 : a35, 0, 0, a34, Math.floor((aK.g5 - a34 * ap.eA) / 2), Math.floor((aK.gB - a34 * ap.eB) / 2)), gF.drawImage(ap.os, 0, 0), gF.setTransform(1,
			0, 0, 1, 0, 0), gF.fillStyle = aZ.kY) : gF.fillStyle = aZ.ji, gF.fillRect(0, 0, aK.g5, aK.gB)
	}
}

function a36() {
	this.g5 = 0, this.gB = 0, this.a37 = 0, this.dZ = !1, this.wM = 10, this.ei = .12, this.a2J = !1, this.a38 = !1, this.a39 = !1, this.cq = function() {
		this.dZ = !0, this.resize(), this.a2J = !1
	}, this.resize = function() {
		this.dZ && (1.15 * aK.g5 < aK.gB ? this.g5 = Math.floor((b7.cv.fv() ? .94 : .69) * aK.g5) : this.g5 = Math.floor((b7.cv.fv() ? .94 : .69) * aK.gB / 1.15), this.g5 -= this.g5 % this.wM, this.gB = +this.g5, this.a37 = Math.floor(.15 * this
			.g5))
	}, this.g8 = function(g9, gA, dW) {
		var jc = (aK.g5 - this.g5) / 2;
		return gA -= (aK.gB - this.gB - this.a37) / 2, (g9 -= jc) < 0 || gA < 0 || g9 >= this.g5 - 1 || gA >= this.gB + this.a37 - 1 || g9 >= this.g5 - this.a37 && gA < this.a37 ? (0 === dW && (this.dZ = !1, 0 === x.dY() && y.gC(!0), b3.d1 = !0),
			!1) : (gA < this.a37 || (g9 = (g9 = eT(g9, jc = Math.floor(this.g5 / this.wM)) + this.wM * eT(gA - this.a37, jc)) < 0 ? 0 : g9 >= az.wQ ? az.wQ - 1 : g9, (0 === dW || 1 === dW && !az.re[g9] || 2 === dW && az.re[g9]) && (this
			.a38 = !az.re[g9], this.a2J = !0, this.a39 = !0, az.re[g9] = !az.re[g9], az.wg(), b3.d1 = !0)), !0)
	}, this.sA = function(g9, gA) {
		this.a2J && this.g8(g9, gA, this.a38 ? 1 : 2)
	}, this.a2S = function() {
		this.a39 && (b7.cv.rd(), this.a39 = !1), this.a39 = !1, this.a2J = !1
	}, this.gE = function() {
		gF.imageSmoothingEnabled = !0;
		for (var jc = (aK.g5 - this.g5) / 2, jd = (aK.gB - this.gB - this.a37) / 2, q6 = (gF.setTransform(1, 0, 0, 1, jc, jd), gF.fillStyle = aZ.ka, gF.fillRect(0, this.a37, this.g5, this.gB), gF.fillStyle = aZ.kp, gF.fillRect(0, 0, this.g5, this
					.a37), gF.fillStyle = aZ.gG, gF.lineWidth = b0.uC, gF.strokeStyle = aZ.gG, gF.strokeRect(-1, -1, this.g5 + 2, this.gB + this.a37 + 2), gF.fillRect(0, this.a37 - b0.uC, this.g5, b0.uC), gF.font = aY.g0.g1(1, .44 * this
				.a37), aY.g0.textAlign(gF, 1), aY.g0.textBaseline(gF, 1), gF.fillText("Select Your Emojis!", Math.floor((this.g5 - .725 * this.a37) / 2), Math.floor(.55 * this.a37)), Math.floor(this.g5 / this.wM)), zoom = (q6 - 2 * this.ei *
				q6) / az.g5, eF = az.wQ - 1; 0 <= eF; eF--) gF.setTransform(1, 0, 0, 1, Math.floor(jc + eF % this.wM * q6), Math.floor(jd + this.a37 + eT(eF, this.wM) * q6)), az.re[eF] && (gF.fillStyle = aZ.kr, gF.fillRect(0, 0, q6, q6)), gF
			.setTransform(zoom, 0, 0, zoom, Math.floor(jc + eF % this.wM * q6 + this.ei * q6), Math.floor(jd + this.a37 + eT(eF, this.wM) * q6 + this.ei * q6)), gF.drawImage(az.uP[eF], 0, 0);
		j.v7(Math.floor(jc + this.g5 - .725 * this.a37), Math.floor(jd + .275 * this.a37), Math.floor(.45 * this.a37)), gF.setTransform(1, 0, 0, 1, 0, 0), gF.imageSmoothingEnabled = !1
	}
}

function bg() {
	var input, color;
	this.dZ = !1, this.sg = !1, this.cq = function() {
		color = aZ.ka, (input = document.createElement("INPUT")).setAttribute("type", "text"), input.setAttribute("name", "username"), input.setAttribute("id", "usernameField"), input.setAttribute("autocomplete", "username"), input.value = "",
			input.style.textAlign = "center", input.style.backgroundColor = color, input.style.borderRadius = "0", input.style.color = aZ.gG, input.style.position = "absolute", input.readOnly = !1, input.addEventListener("input", function() {
				a0.a3A()
			}), input.addEventListener("focus", function() {
				y.sg = !0
			}), input.addEventListener("blur", function() {
				y.sg = !1
			})
	}, this.resize = function() {
		var fontSize, a1n, vA;
		this.dZ && (a1n = .3 * (fontSize = .22 * v.gB / aK.nA), vA = b0.uC / aK.nA, input.style.border = vA.toFixed(2) + "px solid " + aZ.gG, input.style.font = aY.g0.g1(1, fontSize), input.style.padding = a1n.toFixed(2) + "px", input.style
			.left = (((aK.g5 - v.g5) / aK.nA - vA) / 2).toFixed(2) + "px", input.style.width = (v.g5 / aK.nA).toFixed(2) + "px", input.style.top = ((v.fL - .52 * v.gB) / aK.nA).toFixed(2) + "px")
	}, this.get = function() {
		return input
	}, this.gC = function(gC) {
		this.dZ !== gC && ((this.dZ = gC) ? (this.resize(), document.body.appendChild(input)) : (this.sg = !1, document.body.removeChild(input)))
	}, this.sn = function(a3B) {
		a3B && color === aZ.ka || !a3B && color === aZ.l2 || (color = a3B ? aZ.ka : aZ.l2, input.style.backgroundColor = color)
	}
}

function c4() {
	var mI, a3E, a3F, a3G;
	this.a3C = 0, this.a3D = 0, this.cq = function() {
		var gO, kH;
		7 === x.dY() && (mI = ad.mI, a3E = 0, a3F = b3.da + 4500, a3G = aN.vo.a3H() ? 2 : 0, x.setState(10), gF.imageSmoothingEnabled = !0, x.px(), gO = a1.uQ("loading"), kH = 1, kH = (b7.cv.fv() ? .396 : .25) * aK.fw / gO.width, gF.setTransform(
			kH, 0, 0, kH, Math.floor((aK.g5 - kH * gO.width) / 2), Math.floor((aK.gB - kH * gO.height) / 2)), gF.drawImage(gO, 0, 0), gF.setTransform(1, 0, 0, 1, 0, 0))
	}, this.j4 = function() {
		0 < a3G && b3.da > a3F && (a3G--, a3F += 4500, 0 === b3.a3I) && 0 === b3.iL() && (0 === a3G && aN.ix.rr < aN.ix.a3J && (aN.ix.rr += aN.ix.a3K), aN.ix.z2(aN.ix.rr, 5))
	}, this.a3L = function() {
		var ei, eF;
		return 10 === x.dY() && (ei = ad.mI, eF = ad.fz, aN.vo.a3M(mI), mI = null, ad.cq(ei), ad.fz = eF, !0)
	}, this.a3N = function() {
		10 === x.dY() && 2 <= ++a3E && (aN.vo.a3M(mI), mI = null)
	}
}

function c1() {
	var a3P, a3Q, a3R, a3S, a3T, a3U, a3V, n4, a3X, a3Z, a3a, a3b, a3e, a3f, a3g, a3h, a3i, a3W = 48,
		a3c = ["Joined", "Skipped", "Multiplayer", "Singleplayer"],
		a3d = [0, 0, 0, 0];

	function a3n(eF, uP) {
		var eF = a3V[eF].getContext("2d", {
				alpha: !0
			}),
			zoom = (eF.clearRect(0, 0, a3W, a3W), a3W / uP.width),
			db = a3W / uP.height,
			zoom = db < zoom ? db : zoom;
		eF.imageSmoothingEnabled = !0, eF.setTransform(zoom, 0, 0, zoom, Math.floor((a3W - zoom * uP.width) / 2), Math.floor((a3W - zoom * uP.height) / 2)), eF.drawImage(uP, 0, 0), eF.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a3r(iM, gR, a3u, gP) {
		gP.beginPath(), gP.moveTo(iM, iM), gP.lineTo(iM + Math.cos(a3u) * gR, iM + Math.cos(a3u + 1.5 * Math.PI) * gR), gP.stroke()
	}

	function a48() {
		if (7 === x.dY()) {
			for (var gb, uP, gP, zoom, db, ha = -1, eF = n4.length - 1; 0 <= eF; eF--)
				if (null === n4[eF].gO) {
					ha = eF;
					break
				} - 1 !== ha && (null !== (gb = a3y(n4[ha].a42, n4[ha].a43)) ? n4[ha].gO = gb : (gb = {
					eA: ap.eA,
					eB: ap.eB,
					os: ap.os,
					oo: ap.oo,
					op: ap.op,
					ot: ap.ot,
					pG: ap.pG,
					a3z: ap.a3z
				}, ap.d2(n4[ha].a42, n4[ha].a43), ap.or.a49(), (uP = document.createElement("canvas")).width = 128, uP.height = 128, gP = uP.getContext("2d", {
					alpha: !1
				}), (zoom = 128 / ap.eA) < (db = 128 / ap.eB) && (zoom = db), gP.imageSmoothingEnabled = !0, gP.setTransform(zoom, 0, 0, zoom, (128 - zoom * ap.eA) / 2, (128 - zoom * ap.eB) / 2), gP.drawImage(ap.os, 0, 0), ap.eA = gb.eA, ap
				.eB = gb.eB, ap.os = gb.os, ap.oo = gb.oo, ap.op = gb.op, ap.ot = gb.ot, ap.pG = gb.pG, ap.a3z = gb.a3z, n4[ha].gO = uP), b3.d1 = !0)
		}
	}

	function a3y(a42, a43) {
		for (var eF = n4.length - 1; 0 <= eF; eF--)
			if (null !== n4[eF].gO && n4[eF].a42 === a42 && n4[eF].a43 === a43) return n4[eF].gO;
		return null
	}
	this.cq = function() {
		var eF;
		for (a3i = 0, a3Z = -1, x.setState(7), n4 = [], this.resize(), a3V = new Array(13), eF = a3V.length; 0 <= eF; eF--) a3V[eF] = document.createElement("canvas"), a3V[eF].width = a3W, a3V[eF].height = a3W;
		for (eF = 0; eF < 7; eF++) ! function(vw) {
			var a3p, gP = a3V[vw - 2].getContext("2d", {
					alpha: !0
				}),
				a3o = 1.5 * Math.PI,
				iM = Math.floor(.5 * a3W),
				gR = Math.floor(.48 * a3W);
			gP.lineWidth = 2, gP.strokeStyle = aZ.gG, gP.clearRect(0, 0, a3W, a3W);
			for (var eF = 0; eF < vw; eF++) a3p = a3o + 2 * Math.PI / vw,
				function(eF, iM, gR, a3o, a3p, gP) {
					gP.fillStyle = b4.a3t[eF], gP.beginPath(), gP.arc(iM, iM, gR, a3o, a3p), gP.lineTo(iM, iM), gP.fill()
				}(eF + 1, iM, gR, a3o, a3p, gP), 0 !== eF && a3r(iM, gR, a3o, gP), a3o = a3p;
			a3r(iM, gR, 1.5 * Math.PI, gP),
				function(iM, gR, gP) {
					gP.beginPath(), gP.arc(iM, iM, gR, 0, 2 * Math.PI), gP.stroke()
				}(iM, gR, gP)
		}(eF + 2);
		a3n(7, a1.get(4)), a3n(8, az.uP[27]), a3n(9, az.uP[46]), a3n(10, az.uP[36]), a3n(11, a1.get(19)), a3n(12, a1.get(20)), b3.d1 = !0
	}, this.a2z = function() {
		this.s0(), aN.ix.s1(3240), a0.cq(), b3.d1 = !0
	}, this.s0 = function() {
		n4 = [], a3V = [], b8.a3k.a3l()
	}, this.wL = function() {
		return a3b
	}, this.resize = function() {
		var a3v, od, yB, a3w;
		for (a3R = [0, 0], a3X = [0, 0, 0, 0], a3h = b7.cv.fv() ? (a3a = Math.floor(.8 * .4 * aK.fw), a3b = Math.floor(.56 * a3a), a3X[0] = b0.gap, aK.g5 < aK.gB ? (a3X[1] = a3b + 2 * b0.gap, a3X[2] = aK.g5 - 3 * a3X[0], a3X[3] = aw.gD() - 3 * b0
				.gap - a3b, a3f = Math.floor(.95 * a3b), a3g = Math.floor((aK.g5 - a3a - b0.gap) / 2), Math.floor(b0.gap + a3b / 2)) : (a3X[1] = b0.gap, a3X[2] = aK.g5 - 3 * b0.gap - a3a, a3X[3] = aw.gD() - 2 * b0.gap, a3f = Math.floor(.8 *
				a3a), a3X[3] - a3b < a3a && (a3f = Math.floor(.8 * (a3X[3] - a3b)), a3f = vY(a3b, a3f)), a3g = Math.floor(aK.g5 - a3a / 2 - b0.gap), vY(a3h = Math.floor(b0.gap + a3b + (a3X[3] - a3b) / 2), Math.floor(a3b + 2 * b0.gap +
				a3f / 2)))) : (a3a = Math.floor(.2016 * aK.fw), a3b = Math.floor(.56 * a3a), a3X[2] = Math.floor(.5 * aK.g5), a3X[3] = Math.floor(.5 * aK.gB), a3X[1] = Math.floor(.45 * (aK.gB - a3X[3])), a3X[0] = Math.floor((aK.g5 - a3X[2]) / 2),
				a3f = Math.floor(.75 * a3b), a3g = Math.floor(aK.g5 / 2), Math.floor(a3X[1] + a3X[3] + (aK.gB - a3X[3] - a3X[1]) / 2)), a3e = aY.g0.g1(1, .65 * a3b / 4), a3v = od = 1; a3v * od < n4.length;) a3X[3] / (od + 1) < a3X[2] / (a3v +
			1) ? a3v++ : od++;
		yB = (a3X[2] - (a3v - 1) * b0.gap) / a3v, a3w = (a3X[3] - (od - 1) * b0.gap) / od, a3P = yB < a3w ? yB : a3w, a3Q = Math.floor(a3P), a3U = aY.g0.g1(1, .5 * a3P / 5), a3R[0] = a3v, a3R[1] = od, a3S = a3X[0] + Math.floor((a3X[2] - a3R[0] *
			a3P - (a3R[0] - 1) * b0.gap) / 2), a3T = a3X[1] + Math.floor((a3X[3] - a3R[1] * a3P - (a3R[1] - 1) * b0.gap) / 2)
	}, this.nW = function(a3x, ei) {
		var eF, db, gO, eb = n4.length;
		for (a3d = a3x, eF = 0; eF < ei.length; eF++) gO = a3y(ei[eF].pG, ei[eF].a3z), n4.push({
			a40: ei[eF].id,
			tv: ei[eF].tv,
			tw: ei[eF].a41,
			a42: ei[eF].pG,
			a43: ei[eF].a3z,
			joined: ei[eF].a44,
			wI: ei[eF].a2q,
			a45: ei[eF].a45,
			gO: gO,
			a46: ei[eF].a46,
			rH: ei[eF].rH
		});
		for (eF = eb - 1; 0 <= eF; eF--) n4.shift();
		if (-1 !== a3Z)
			for (db = a3Z, a3Z = -1, eF = n4.length - 1; 0 <= eF; eF--)
				if (n4[eF].a40 === db) {
					a3Z = db;
					break
				}(n4.length > a3i || n4.length < a3i) && (a3i = n4.length, this.resize()), this.a47(), b3.d1 = !0
	}, this.a47 = function() {
		for (var eF = n4.length - 1; 0 <= eF; eF--) null === n4[eF].gO && setTimeout(a48, 0)
	}, this.g8 = function(fK, fL) {
		return 4 * ((fK - a3g) * (fK - a3g) + (fL - a3h) * (fL - a3h)) <= a3f * a3f ? (this.a2z(), v.sA(fK, fL, !1), !0) : function(fK, fL) {
			var ha, hj, jc, jd;
			if (0 !== n4.length) {
				var eF = 0;
				for (jd = a3T, hj = 0; hj < a3R[1]; hj++) {
					for (jc = a3S, ha = 0; ha < a3R[0]; ha++) {
						if (jc < fK && fK < jc + a3P && jd < fL && fL < jd + a3P) return !!aN.a4B.a4C(n4[eF].a40) && (a3Z = n4[eF].a40 !== a3Z ? n4[eF].a40 : -1, b3.d1 = !0);
						if (++eF >= n4.length) return !1;
						jc += a3P + b0.gap
					}
					jd += a3P + b0.gap
				}
			}
			return !1
		}(fK, fL)
	}, this.gE = function() {
		var ha, hj, fK, gR, zoom, eF = 0,
			fL = a3T;
		if (gF.imageSmoothingEnabled = !0, gF.lineWidth = 3, gR = Math.floor(.5 * a3f), gF.fillStyle = aZ.kY, gF.beginPath(), gF.arc(a3g, a3h, gR, 0, 2 * Math.PI), gF.fill(), gF.strokeStyle = aZ.gG, gF.beginPath(), gF.arc(a3g, a3h, gR, 0, 2 *
				Math.PI), gF.stroke(), gR = a1.get(0).height, zoom = .6 * a3f / gR, gF.setTransform(zoom, 0, 0, zoom, Math.floor(a3g - .56 * zoom * a1.get(0).width), Math.floor(a3h - .5 * zoom * gR)), gF.drawImage(a1.get(0), 0, 0), gF
			.setTransform(1, 0, 0, 1, 0, 0),
			function() {
				gF.fillStyle = aZ.kY, gF.fillRect(aK.g5 - a3a - b0.gap, b0.gap, a3a, a3b), 0 <= a3Z ? (gF.fillStyle = aZ.kr, gF.fillRect(aK.g5 - a3a - b0.gap, b0.gap, a3a, Math.floor(.25 * a3b))) : (gF.fillStyle = aZ.lG, gF.fillRect(aK.g5 - a3a -
					b0.gap, b0.gap + Math.floor(.25 * a3b), a3a, Math.floor(.25 * a3b)));
				gF.strokeStyle = aZ.gG, gF.strokeRect(aK.g5 - a3a - b0.gap, b0.gap, a3a, a3b), gF.fillStyle = aZ.gG, gF.font = a3e, aY.g0.textBaseline(gF, 1);
				for (var fL, a1n = Math.floor(.04 * a3a), vA = Math.floor(.08 * a3b), eF = 3; 0 <= eF; eF--) fL = Math.floor(b0.gap + (eF + 1) * (a3b + 2 * vA) / 5 - vA), aY.g0.textAlign(gF, 0), gF.fillText(a3c[eF], aK.g5 - a3a - b0.gap + a1n,
					fL), aY.g0.textAlign(gF, 2), gF.fillText(aY.jk.jl(a3d[eF]), aK.g5 - b0.gap - a1n, fL)
			}(), 0 !== n4.length)
			for (hj = 0; hj < a3R[1]; hj++) {
				for (fK = a3S, ha = 0; ha < a3R[0]; ha++) {
					if (! function(eF, fK, fL) {
							var zoom, hj, a4G, a4I, a4J;
							null === n4[eF].gO ? (gF.fillStyle = aZ.kY, gF.fillRect(fK, fL, a3Q, a3Q)) : (zoom = a3Q / 128, gF.setTransform(zoom, 0, 0, zoom, fK, fL), gF.drawImage(n4[eF].gO, 0, 0), gF.setTransform(1, 0, 0, 1, 0, 0));
							a3Z === n4[eF].a40 ? (function(fK, fL) {
								var q6 = Math.floor(.2 * a3Q),
									q7 = Math.floor(.3 * q6);
								gF.fillStyle = aZ.ku, gF.fillRect(fK + a3Q - q6, fL, q6, q6), gF.fillStyle = aZ.ji, gF.fillRect(fK + a3Q - q6, fL, 2, q6), gF.fillRect(fK + a3Q - q6, fL + q6 - 2, q6, 2), j.v7(fK + a3Q - q6 + q7, fL + q7,
									q6 - 2 * q7), gF.setTransform(1, 0, 0, 1, 0, 0)
							}(fK, fL), gF.lineWidth = 3, gF.fillStyle = aZ.ku) : gF.fillStyle = aZ.kW;
							if (a4I = Math.floor(a3P / 4), gF.fillRect(fK, fL, a4I, a4I), a4J = Math.floor(fL + .8 * a3P), gF.fillRect(fK, a4J, a3Q, Math.floor(a3P / 5)), function(eF, fK, fL) {
									var zoom;
									n4[eF].tw && (eF = a1.get(4), zoom = .5 * a3P / eF.width, gF.setTransform(zoom, 0, 0, zoom, Math.floor(fK + (a3P - zoom * eF.width) / 2), Math.floor(fL + (a3P - zoom * eF.height) / 2)), gF.globalAlpha = .6, gF
										.drawImage(eF, 0, 0), gF.globalAlpha = 1, gF.setTransform(1, 0, 0, 1, 0, 0))
								}(eF, fK, fL), n4[eF].a46) {
								for (hj = a4G = 0; hj < n4[eF].a46; hj++) a4G = Math.max(a4G, n.measureText(n4[eF].rH[hj], a3U));
								a4G += .05 * a3P, hj = 5 === n4[eF].a46, a4I = hj ? fL + a4I : Math.max(fL + .8 * a3P - .11 * n4[eF].a46 * a3P, fL + a4I), a4J = hj ? a4J : Math.min(a4I + .11 * n4[eF].a46 * a3P + .05 * a3P, a4J), gF.fillRect(fK,
									a4I, a4G, a4J - a4I)
							}
							for (gF.font = a3U, aY.g0.textBaseline(gF, 1), aY.g0.textAlign(gF, 0), gF.fillStyle = aZ.lB, gF.fillText(n4[eF].joined.toString(), Math.floor(fK + .22 * a3P), Math.floor(fL + .9 * a3P)), gF.fillStyle = aZ.gG, hj =
								0; hj < n4[eF].a46; hj++) gF.fillText(n4[eF].rH[n4[eF].a46 - hj - 1], Math.floor(fK + .03 * a3P), Math.floor(fL + .77 * a3P - .11 * hj * a3P));
							aY.g0.textAlign(gF, 2), gF.fillStyle = aZ.ky, gF.fillText(n4[eF].wI.toString(), Math.floor(fK + .81 * a3P), Math.floor(fL + .9 * a3P)), gF.strokeStyle = a3Z === n4[eF].a40 ? aZ.ks : aZ.ke, gF.strokeRect(fK, fL, a3Q,
								a3Q), a4J = Math.floor(.16 * a3P), zoom = a4J / a3W, gF.setTransform(zoom, 0, 0, zoom, Math.floor(fK + .33 * a4J), Math.floor(fL + .33 * a4J)), a3V.length > n4[eF].tv && gF.drawImage(a3V[n4[eF].tv], 0, 0);
							gF.setTransform(zoom, 0, 0, zoom, Math.floor(fK + .15 * a4J), Math.floor(fL + a3P - 1.08 * a4J)), gF.drawImage(a3V[11], 0, 0), gF.setTransform(zoom, 0, 0, zoom, Math.floor(fK + a3P - 1.05 * a4J), Math.floor(fL + a3P -
								1.15 * a4J)), gF.drawImage(a3V[12], 0, 0), gF.setTransform(1, 0, 0, 1, 0, 0)
						}(eF, Math.floor(fK), Math.floor(fL)), ++eF >= n4.length) return;
					fK += a3P + b0.gap
				}
				fL += a3P + b0.gap
			}
	}
}

function bh() {
	var a4M = [0, 0, 0, 0];

	function a1p(fK, fL, gI, a4f) {
		gF.fillStyle = aZ.gG;
		var q6 = vY(2, Math.floor((a4f ? .5 : .35) * gI)),
			wl = (q6 -= q6 % 2, vY(2, Math.floor(.1 * gI))),
			gI = (wl -= wl % 2, Math.floor((gI - q6) / 2)),
			je = Math.floor(gI + (q6 - wl) / 2);
		gF.fillRect(fK + gI, fL + je, q6, wl), a4f && gF.fillRect(fK + je, fL + gI, wl, q6)
	}

	function a2p(fK, fL, g5, gB, uS, ft, nU, hU, vw) {
		gF.fillStyle = uS, gF.fillRect(fK, fL, g5, gB), 0 <= hU && function(fK, fL, g5, gB, hU) {
			gF.fillStyle = "rgba(" + 22 * hU + "," + (110 - 22 * hU) + ",0,0.75)", gF.fillRect(fK, fL, (1 + hU) * g5 / 6, gB)
		}(fK, fL, g5, gB, hU), 0 < vw && function(fK, fL, g5, gB, vw) {
			gF.fillStyle = "rgba(255,255,255,0.3)", gF.fillRect(fK, fL, vw * g5 / ef, gB)
		}(fK, fL, g5, gB, vw), gF.strokeStyle = aZ.gG, gF.strokeRect(fK, fL, g5, gB), 0 !== ft && (gF.fillStyle = aZ.gG, gF.font = aY.g0.g1(1, ft * gB), gF.fillText(nU, Math.floor(fK + g5 / 2), Math.floor(fL + .52 * gB)))
	}
	this.ip = [{
		ek: 0,
		vw: 512
	}], this.cq = function() {
		aH.dZ = !1, x.setState(2), this.resize(), b3.d1 = !0
	}, this.s0 = function() {}, this.resize = function() {
		a4M[2] = Math.floor((b7.cv.fv() ? .49 : .4) * aK.fw), a4M[1] = Math.floor((aK.gB - a4M[2] / 6 - this.ip.length * (b0.gap + a4M[2] / 10)) / 2), a4M[0] = Math.floor((aK.g5 - a4M[2]) / 2), aH.dZ && aH.resize()
	}, this.a4N = function(tv) {
		var eF;
		if (6 < tv) this.ip = [{
			ek: 0,
			vw: 512
		}];
		else {
			for (this.ip = [], eF = 0; eF < tv + 2; eF++) this.ip.push({
				ek: 0,
				vw: 0
			});
			this.a4O()
		}
	}, this.a4P = function(a4Q, a4R) {
		for (var eb = a4Q.length, eF = 0; eF < eb; eF++) this.ip[eF].ek = a4Q[eF], this.ip[eF].vw = a4R[eF]
	}, this.a4S = function(tD) {
		var eF, eb;
		if (1 === tD.qA.length)
			for (eb = this.ip.length, tD.a4Q = new Array(eb), tD.a4R = new Array(eb), eF = 0; eF < eb; eF++) tD.a4Q[eF] = this.ip[eF].ek, tD.a4R[eF] = this.ip[eF].vw
	}, this.a30 = function() {
		b3.d1 = !0, aH.dZ ? aH.dZ = !1 : (this.s0(), a0.cq())
	}, this.tz = function() {
		var eF, vw;
		if (aU.ii) return aU.ij.a4T;
		for (vw = 0, eF = this.ip.length - 1; 0 <= eF; eF--) vw += this.ip[eF].vw;
		return vw
	}, this.sA = function(fK, fL) {
		return !(!aH.dZ || !aH.sA(fK, fL)) || -1 !== this.sf(fK, fL)
	}, this.a4U = function() {
		aN.ix.rr = 0, aN.ix.z2(0, 3) && aN.lY.a4V(0)
	}, this.a4W = function() {
		var ha;
		this.a4U(), x.a2v(), aU.ii ? aU.a4X() : (ha = (ha = this.ip.length - 2) < 0 ? 7 : ha, ts(Math.floor(16384 * Math.random()), 0, [{
			name: a0.a4Y(),
			a4Z: a8.v9[2].qr.a2Q(),
			a4a: 0
		}], ha, !1, !1))
	}, this.g8 = function(fK, fL) {
		if (b6.dZ || a8.v9[1].qr.dZ || a8.v9[2].qr.dZ) return !1;
		if (aH.dZ && !aU.ii) return aH.g8(fK, fL);
		var eF, ha, max, q6, fL = this.sf(fK, fL);
		if (-1 === fL) return !1;
		if (0 === fL) this.a30();
		else if (1 === fL) aU.ii ? (aU.sZ(), b3.d1 = !0) : aH.show();
		else if (100 === fL) aT.a4b();
		else if (2 === fL) this.s0(), this.a4W();
		else {
			if (aU.ii) return !1;
			if (27 === fL) this.ip.length < 8 && (this.ip.push({
				ek: 0,
				vw: ef
			}), this.a4O(), this.resize(), b3.d1 = !0);
			else if (eF = Math.floor((fL - 3) / 3), fL % 3 == 0) 1 < this.ip.length && (this.ip.splice(eF, 1), this.resize(), b3.d1 = !0);
			else if (q6 = (a4M[2] - a4M[2] / 10 - 2 * b0.gap) / 2, fL % 3 == 1) 0 === eF && 1 === this.ip[eF].vw || (fK < a4M[0] + a4M[2] - 1.5 * q6 - b0.gap ? this.ip[eF].ek-- : this.ip[eF].ek++, this.ip[eF].ek < 0 ? this.ip[eF].ek = 5 : 5 <
				this.ip[eF].ek && (this.ip[eF].ek = 0), b3.d1 = !0);
			else {
				for (b3.d1 = !0, fL = (fK - (a4M[0] + a4M[2] - q6)) / q6 - .5, fL *= fL < 0 ? -fL : fL, fL = 0 === (fL = Math.floor(fL * ef)) ? 1 : fL, max = ef, ha = this.ip.length - 1; 0 <= ha; ha--) eF !== ha && (max -= this.ip[ha].vw);
				if (fL < 0) {
					if (1 === this.ip[eF].vw) return this.ip[eF].vw = max, !0
				} else if (this.ip[eF].vw === max) return this.ip[eF].vw = 1, !0;
				this.ip[eF].vw += fL, this.ip[eF].vw < 1 ? this.ip[eF].vw = 1 : this.ip[eF].vw > max && (this.ip[eF].vw = max)
			}
		}
		return !0
	}, this.a4O = function() {
		for (var vw = Math.floor(ef / this.ip.length), a4c = ef % this.ip.length, eF = this.ip.length - 1; 0 <= eF; eF--) this.ip[eF].vw = vw;
		this.ip[0].vw += a4c
	}, this.sf = function(fK, fL) {
		var q6 = (a4M[2] - 3 * b0.gap) / 4,
			wl = a4M[2] / 6;
		if (fK < a4M[0] || fL < a4M[1] || a4M[0] + a4M[2] <= fK) return -1;
		if (fL < a4M[1] + wl) return fK < a4M[0] + q6 ? 0 : fK < a4M[0] + q6 + b0.gap ? -1 : fK < a4M[0] + 2 * q6 + b0.gap ? 100 : fK < a4M[0] + 2 * (q6 + b0.gap) ? -1 : fK < a4M[0] + 3 * q6 + 2 * b0.gap ? 1 : fK < a4M[0] + 3 * (q6 + b0.gap) ? -
			1 : 2;
		for (var jd, a4d = a4M[2] / 10, q6 = (a4M[2] - a4d - 2 * b0.gap) / 2, eF = 0; eF < this.ip.length; eF++) {
			if (fL < (jd = a4M[1] + wl + b0.gap + eF * (a4d + b0.gap))) return -1;
			if (!(jd + a4d < fL)) return fK < a4M[0] + a4d ? 3 + 3 * eF : fK < a4M[0] + a4d + b0.gap ? -1 : fK < a4M[0] + a4M[2] - q6 - b0.gap ? 4 + 3 * eF : fK < a4M[0] + a4M[2] - q6 ? -1 : 5 + 3 * eF
		}
		return !(this.ip.length < 8) || fL < (jd = a4M[1] + wl + b0.gap + this.ip.length * (a4d + b0.gap)) || jd + a4d < fL || a4M[0] + a4d < fK ? -1 : 27
	}, this.gE = function() {
		gF.lineWidth = b0.uC, aY.g0.textAlign(gF, 1), aY.g0.textBaseline(gF, 1);
		var q6 = (a4M[2] - 3 * b0.gap) / 4,
			wl = a4M[2] / 6;
		if (a2p(a4M[0], a4M[1], q6, wl, "rgba(128,0,0,0.75)", .34, "Back", -1, -1), a2p(a4M[0] + q6 + b0.gap, a4M[1], q6, wl, "rgba(128,0,128,0.75)", .31, "Custom", -1, -1), a2p(a4M[0] + 2 * (q6 + b0.gap), a4M[1], q6, wl, "rgba(" + (aU.ii ? 128 :
				0) + ",128,128,0.75)", .34, aU.ii ? "Reset" : "Maps", -1, -1), a2p(a4M[0] + a4M[2] - q6, a4M[1], q6, wl, "rgba(0,128,0,0.75)", .34, "Start", -1, -1), !aU.ii) {
			for (var jd, a4d = a4M[2] / 10, q6 = (a4M[2] - a4d - 2 * b0.gap) / 2, eF = 0; eF < this.ip.length; eF++) jd = a4M[1] + wl + b0.gap + eF * (a4d + b0.gap), a2p(a4M[0], jd, a4d, a4d, 1 < this.ip.length ? "rgba(128,0,0,0.75)" :
				"rgba(90,90,90,0.75)", 0, null, -1), 1 < this.ip.length && a1p(a4M[0], jd, a4d, !1), a2p(a4M[0] + a4d + b0.gap, jd, q6, a4d, aZ.ka, .4, this.a4e(eF), this.ip[eF].ek, -1), a2p(a4M[0] + a4M[2] - q6, jd, q6, a4d, aZ.ka, .4, this
				.vn(eF), -1, this.ip[eF].vw);
			this.ip.length < 8 && (jd = a4M[1] + wl + b0.gap + this.ip.length * (a4d + b0.gap), a2p(a4M[0], jd, a4d, a4d, "rgba(0,128,20,0.75)", 0, null, -1, -1), a1p(a4M[0], jd, a4d, !0)), aH.dZ && aH.gE()
		}
	}, this.a4e = function(eF) {
		return 0 === eF && 1 === this.ip[eF].vw ? "You" : b.ib[this.ip[eF].ek]
	}, this.vn = function(eF) {
		return 1 === this.ip[eF].vw ? "1 Player" : this.ip[eF].vw + " Players"
	}
}

function cz() {
	this.eb = 0, this.g5 = 0, this.v9 = null, this.cq = function() {
		this.v9 = [], this.v9.push({
			fK: 0,
			fL: 0,
			uN: b7.cv.fv(),
			qr: null
		}), this.v9.push({
			fK: 0,
			fL: 0,
			uN: !1,
			qr: new a36
		}), this.v9.push({
			fK: 0,
			fL: 0,
			uN: !1,
			qr: new a2I
		}), this.v9[2].qr.a2N(), this.eb = this.v9.length, this.g5 = 0
	}, this.zA = function() {
		this.g5 = Math.floor((b7.cv.fv() ? .063 : .04) * aK.fw), this.g5 += 4 - this.g5 % 4, this.v9[0].fK = b0.gap, this.v9[0].fL = aK.gB - this.g5 - b0.gap;
		for (var eF = 1; eF < this.eb; eF++) this.v9[eF].fK = this.v9[eF - 1].fK + Math.floor(b7.cv.fv() ? 1.5 * b0.gap : 3.7 * b0.gap) + this.g5, this.v9[eF].fL = this.v9[0].fL
	}, this.sf = function(g9, gA) {
		if (a1.g3())
			for (var eF = this.eb - 1; 0 <= eF; eF--)
				if (g9 >= this.v9[eF].fK && gA >= this.v9[eF].fL && g9 < this.v9[eF].fK + this.g5 && gA < this.v9[eF].fL + this.g5) return eF;
		return -1
	}, this.a4i = function() {
		for (var eF = 2; 1 <= eF; eF--)
			if (this.v9[eF].qr.dZ) return !0;
		return !1
	}, this.resize = function() {
		for (var eF = 2; 1 <= eF; eF--) this.v9[eF].qr.resize()
	}, this.si = function() {
		return this.v9[1].qr.dZ ? (this.v9[1].qr.g8(-5e3, -5e3, 0), !0) : !!this.v9[2].qr.dZ && (this.v9[2].qr.g8(-5e3, -5e3), !0)
	}, this.g8 = function(g9, gA, a1y) {
		if (a1y) {
			if (this.v9[1].qr.dZ) return this.v9[1].qr.g8(g9, gA, 0), !0;
			if (this.v9[2].qr.dZ) return this.v9[2].qr.g8(g9, gA), !0
		}
		g9 = this.sf(g9, gA);
		if (a1y) {
			if (0 === g9) return this.v9[g9].uN = !this.v9[g9].uN, b9.dF.dG(2, this.v9[g9].uN ? 1 : 0), aK.oP(0), !0;
			if (1 <= g9 && g9 < 3) return this.v9[g9].qr.cq(), y.gC(!1), b3.d1 = !0
		}
		return !1
	}, this.sA = function(g9, gA) {
		return this.v9[1].qr.dZ ? (this.v9[1].qr.sA(g9, gA), !0) : !!this.v9[2].qr.dZ && (this.v9[2].qr.sA(g9), !0)
	}, this.a2S = function() {
		for (var eF = 2; 1 <= eF; eF--)
			if (this.v9[eF].qr.dZ) return this.v9[eF].qr.a2S(), !0;
		return !1
	}, this.gE = function() {
		if (a1.g3()) {
			gF.imageSmoothingEnabled = !0;
			for (var eF = this.eb - 1; 0 <= eF; eF--) gF.fillStyle = this.v9[eF].uN ? aZ.kt : aZ.ka, gF.fillRect(this.v9[eF].fK, this.v9[eF].fL, this.g5, this.g5), 0 === eF ? this.a4j(eF, a1.get(15)) : 1 === eF ? this.a4k() : 2 === eF && this
				.a4l(), gF.setTransform(1, 0, 0, 1, 0, 0), gF.lineWidth = b0.uC, gF.strokeStyle = aZ.gG, gF.strokeRect(this.v9[eF].fK, this.v9[eF].fL, this.g5, this.g5);
			gF.imageSmoothingEnabled = !1
		}
	}, this.a4j = function(eF, uP) {
		var gap = .08 * this.g5,
			zoom = (this.g5 - 2 * gap) / uP.width;
		gF.setTransform(zoom, 0, 0, zoom, this.v9[eF].fK + gap, this.v9[eF].fL + (this.g5 - zoom * uP.height) / 2), gF.drawImage(uP, 0, 0)
	}, this.a4k = function() {
		var gap = .06 * this.g5,
			zoom = (this.g5 - 2 * gap) / az.g5;
		gF.setTransform(zoom, 0, 0, zoom, this.v9[1].fK + gap, this.v9[1].fL + gap), gF.drawImage(az.uP[4], 0, 0)
	}, this.a4l = function() {
		gF.setTransform(1, 0, 0, 1, this.v9[2].fK, this.v9[2].fL);
		for (var ek = this.g5 / 4, fK = 3; 0 <= fK; fK--)
			for (var fL = 3; 0 <= fL; fL--) {
				var gR = Math.floor(367 * (fK + 1) * (fL + 1) % 256),
					tD = Math.floor(687 * (fK + 1) * (fL + 1) % 256),
					hj = Math.floor(651 * (fK + 1) * (fL + 1) % 256);
				gF.fillStyle = "rgb(" + gR + "," + tD + "," + hj + ")", gF.fillRect(fK * ek, fL * ek, ek, ek)
			}
	}, this.a33 = function() {
		for (var eF = 2; 1 <= eF; eF--)
			if (this.v9[eF].qr.dZ) return void this.v9[eF].qr.gE()
	}
}

function bi() {
	var username, a4m;

	function a4u() {
		var a0T;
		return 0 === username.indexOf("vote ") && 2 === (a0T = username.split(" ")).length ? (a0.a4n = a0T[1], a4y(), aN.ix.z2(0, 7) && aN.lY.a4z(0), bB.rw(3252), 1) : void 0
	}

	function a4y() {
		username = b7.cv.rX(), y.get().value = username, y.sn(!0)
	}

	function a4t() {
		var a50, max, dd;
		if (0 === username.indexOf("account ")) return 2 !== (a50 = username.split(" ")).length || (max = Math.floor(Math.pow(2, 48)), (dd = parseInt(h.qd(a50[1]))) <= 0) || max <= dd ? (a4y(), bB.rw(3266)) : (b9.dF.dG(101, a50[1]), a4y(), bB.rw(
			3231)), 1
	}

	function a4x() {
		return void 0 !== username && h.qT(username)
	}

	function a4r() {
		if (a4x()) return y.sn(!0), 1;
		y.sn(!1)
	}
	this.a4n = "", this.a4o = -7e3, this.cq = function(a4p) {
		b7.de < 5 || (a4m && b3.da > a4m + 144e5 ? b7.oH.setState(14) : a4m = b3.da), x.setState(0), v.zA(), y.gC(!0), l.cq(), a8.zA(), a4p && at.dJ.show() ? setTimeout(function() {
			0 === x.dY() && b7.cv.setState(12)
		}, 15e3) : b7.cv.setState(12), void 0 === username && (username = b7.cv.rX(), y.get().value = username, a4r())
	}, this.s0 = function() {
		b7.cv.setState(13), y.gC(!1)
	}, this.a4s = function(fz) {
		return 0 === fz ? v.g5 : 1 === fz ? Math.floor(.3 * v.gB) : 2 === fz ? y.get().style.font : username
	}, this.a3A = function() {
		var rb;
		username = y.get().value.trim(), a4r(), "password" === username || "account" === username ? (rb = h.qc(b7.cv.rZ().toString()), username = "account " + rb, y.get().value = username) : b9.dF.dG(100, username)
	}, this.g8 = function(fK, fL) {
		var gap, jd, q6;
		1 === v.sf(fK, fL, 1, 1) ? a4t() || a4u() || (b7.cv.setState(10), a4r() ? (a1.g3() || a1.a4v(), this.s0(), b9.dF.dG(100, username), z.cq()) : bB.rw(4214)) : 0 === v.sf(fK, fL, 0, 1) ? this.a2x() : (q6 = Math.floor((b7.cv.fv() ? .145 :
				.09) * aK.fw), gap = Math.floor(.065 * (b7.cv.fv() ? .53 : .36) * aK.fw), gap = aK.g5 - q6 - gap, jd = b0.gap, q6 = Math.floor(.35 * q6),
			(gap <= fK && fL < jd + q6 && (ar.v2(), true)) || (fK >= gap - q6 / 0.7 && fL < jd + q6 && WindowManager.openWindow("settings"))
		)
	}, this.a2x = function() {
		a4t() || a4u() || (b7.cv.setState(10), a4x() && 5 <= username.length && 40 === username.charCodeAt(0) && 40 === username.charCodeAt(1) && 41 === username.charCodeAt(3) && 41 === username.charCodeAt(4) ? w.a2f(Math.abs(username.charCodeAt(
			2) + 5)) : w.a2f(b9.dF.data[10].value), a4r() ? (a1.g3() || a1.a4v(), this.s0(), b9.dF.dG(100, username), aU.sZ(), w.cq()) : bB.rw(4214))
	}, this.a51 = function() {
		return !a8.a4i() && !b6.dZ && !av.dZ
	}, this.gE = function() {
		this.a51() && (gF.imageSmoothingEnabled = !0, iM = a1.uQ("territorial.io"), kH = 1.1 * v.g5 / iM.width, gF.setTransform(kH, 0, 0, kH, Math.floor((aK.g5 - kH * iM.width) / 2), v.fL - kH * iM.height - .72 * v.gB), gF.drawImage(iM, 0, 0), gF
			.setTransform(1, 0, 0, 1, 0, 0), v.a2C());
		var g5, gR, tD, hj, fy, fontSize, kH = Math.floor((b7.cv.fv() ? .145 : .09) * aK.fw),
			iM = Math.floor(.065 * (b7.cv.fv() ? .53 : .36) * aK.fw),
			jc = aK.g5 - kH - iM,
			jd = b0.gap,
			wl = Math.floor(.35 * kH);
		jc = jc, jd = jd, g5 = kH, wl = wl, tD = gR = 180, hj = 0, fy = aV.nU[80], fontSize = .65 * wl,
			gF.imageSmoothingEnabled = true,
			gF.drawImage(settingsGearIcon, jc - g5 / 2, jd, wl, wl),
			gF.imageSmoothingEnabled = false,
			(settings.displayWinCounter && (gF.font = aY.g0.g1(1, Math.floor(wl * 0.4)), gF.fillText("Win count: " + wins_counter, Math.floor(jc + g5 / 2), Math.floor((jd + wl / 2) * 2)))),
			gF.font = aY.g0.g1(1, fontSize), gF.fillStyle = "rgba(" + gR + "," + tD + "," + hj + ",0.6)", gF.fillRect(jc, jd, g5, wl), gF.fillStyle = aZ.gG, gF.fillRect(jc, jd, g5, b0.uC), gF.fillRect(jc, jd + wl - b0.uC, g5, b0.uC), gF.fillRect(
				jc, jd, b0.uC, wl), gF.fillRect(jc + g5 - b0.uC, jd, b0.uC, wl), gF.fillText(fy, Math.floor(jc + g5 / 2), Math.floor(jd + wl / 2 + .1 * fontSize))
	}, this.a4Y = function() {
		return username
	}
}

function bj() {
	var a53, gO, fu, a54;

	function a58(fz, name, a59, fy) {
		fu[fz] = name, gO[fz] = new Image, gO[fz].onload = function() {
			0 < a59 && ! function(fz, a59) {
				var fK, fL, eF, iM = document.createElement("canvas"),
					g5 = gO[fz].width,
					gB = gO[fz].height,
					gP = (iM.width = g5, iM.height = gB, iM.getContext("2d", {
						alpha: !0
					})),
					gL = (gP.drawImage(gO[fz], 0, 0), gP.getImageData(0, 0, g5, gB)),
					ow = gL.data;
				if (a59 < 3) {
					var a5C = 2 === a59 ? 160 : 600;
					for (fK = g5 - 1; 0 <= fK; fK--)
						for (fL = gB - 1; 0 <= fL; fL--) ow[eF = 4 * (fK + fL * g5)] + ow[eF + 1] + ow[eF + 2] < a5C && (ow[eF + 3] = Math.floor(255 * (ow[eF] + ow[eF + 1] + ow[eF + 2]) / a5C))
				} else if (3 === a59)
					for (fK = g5 - 1; 0 <= fK; fK--)
						for (fL = gB - 1; 0 <= fL; fL--) 0 === ow[eF = 4 * (fK + fL * g5)] && 200 < ow[eF + 1] && 0 === ow[eF + 2] && (ow[eF + 3] = 0);
				else if (4 === a59) ! function(ow, g5, gB) {
					var fK, fL, eF;
					for (fK = g5 - 1; 0 <= fK; fK--)
						for (fL = gB - 1; 0 <= fL; fL--) ow[1 + (eF = 4 * (fK + fL * g5))] > ow[eF] + 20 && ow[1 + eF] > ow[2 + eF] + 20 && ow[eF] + ow[2] < 40 && (ow[3 + eF] = 255 - ow[1 + eF], ow[eF] = ow[1 + eF] = ow[2 + eF] = ow[eF])
				}(ow, g5, gB);
				else if (5 === a59) ! function(ow, g5, gB, id) {
					var fK, fL, eF;
					for (fK = g5 - 1; 0 <= fK; fK--)
						for (fL = gB - 1; 0 <= fL; fL--) 200 < ow[1 + (eF = 4 * (fK + fL * g5))] && ow[1 + eF] - 20 > ow[eF] && ow[1 + eF] - 20 > ow[2 + eF] ? ow[eF] + ow[2 + eF] < 40 ? ow[3 + eF] = 0 : (ow[3 + eF] = ow[eF], ow[eF] = 255,
							ow[1 + eF] = 255, ow[2 + eF] = 255) : ow[eF] < 50 && ow[1 + eF] < 50 && ow[2 + eF] < 50 && (ow[eF] + ow[1 + eF] + ow[2 + eF] < 50 ? (ow[1 + eF] = 0 === id ? ow[1 + eF] : 160, ow[3 + eF] = 180) : (ow[1 +
							eF] = 0 === id ? ow[1 + eF] : 160, ow[3 + eF] = 180 + Math.floor(75 * (ow[eF] + ow[1 + eF] + ow[2 + eF] - 50) / 100)))
				}(ow, g5, gB, 0);
				else if (6 === a59)
					for (fK = g5 - 1; 0 <= fK; fK--)
						for (fL = gB - 1; 0 <= fL; fL--) ow[(eF = 4 * (fK + fL * g5)) + 3] = Math.floor(255 * (ow[eF] + ow[eF + 1] + ow[eF + 2]) / 765), ow[eF] = ow[eF + 1] = ow[eF + 2] = 255;
				else if (7 === a59)
					for (fK = g5 - 1; 0 <= fK; fK--)
						for (fL = gB - 1; 0 <= fL; fL--) ow[(eF = 4 * (fK + fL * g5)) + 1] > ow[eF + 2] + 10 && (ow[eF + 3] = ow[eF], ow[eF + 1] = ow[eF + 2]);
				gP.putImageData(gL, 0, 0), gO[fz] = iM
			}(fz, a59), a5B()
		}, gO[fz].onerror = function(dD) {
			console.error("Error loading image at index", fz, "Error:", dD), a5B()
		}, gO[fz].src = "data:image/png;base64," + fy
	}

	function a5B() {
		a53--, a56()
	}

	function a56() {
		0 === a53 && (a53 = -1, aw.g2(), i.uJ(), az.cq(), au.a20([gO[8], gO[16], gO[7], gO[9], gO[10]], [2 !== b7.id, 1 !== b7.id, !0, !0, !0]), b3.d1 = !0, gO[7] = a54, gO[8] = a54, gO[9] = a54, gO[10] = a54)
	}
	this.cq = function() {
		if (void 0 === gO) {
			a53 = 22, gO = new Array(a53), fu = new Array(a53), (a54 = document.createElement("canvas")).width = 1, a54.height = 1;
			for (var eF = a53 - 1; 0 <= eF; eF--) gO[eF] = a54;
			a58(0, "exit", 6,
				"iVBORw0KGgoAAAANSUhEUgAAAFYAAABGBAMAAACkrn5fAAAAHlBMVEUAAAAiJCI4OjdcXltoameIioejpqPExsPY29j///9xarZIAAAAyUlEQVRIx+3WQQqCQBTG8TdOB5DUI+S6nRcoPIFhu1bBHGGO4Any3TYxAkWTv1DSYr71D4b5mOE9kWmszkeC/ZptT6Ocl+xj5qgtbVR1iZn9VE2wU2uO2Jryhm2h2OaKbdZgu/NKrXVK7f6q1JpaqTWFYpvrUtqhPTTYpst0aBOv2Drltlxh392iu0U1t5I4biX13PZvF7+zvOFWihXWlNy+aqZ/M3LcivXcds1xK9kKK3GYAVtYe+8CZ/c/7Br9blSNcgn75O/tE26TasUvH0ImAAAAAElFTkSuQmCC"
				), a58(1, "victory", 6,
				"iVBORw0KGgoAAAANSUhEUgAAAUIAAABBBAMAAABWYLC1AAAAElBMVEUAAAA6PDlbXVqEhoO4urf///8hX3N2AAAEcklEQVRo3s2ZyZKcMAyGWdx3alLcSaW4k8lwZ9LjuwH3+79KlkljLb/czFJp+tYusD8k/ZItF/5y/a0F/dXb+KW472/cQCIbd8b4//+dDFu12/ByZ8Jkq0uHbRvuTFglwomOezx8j5/HxkrgTXEYqSxQyvcWCpVEhOG53p3QQTGfDiMUlppJxPXHEQrVxIT0092fEOaVw9Q8LpV5GysPJGUsWweojyCVCAgPIBQYc8nzwxEIvcYZjyQUmPv8kYQC68dhNoeWmOsD1Tyc/G5L+elvHLzs0tG3l7/PPn6KVJTfGxqpG0+9vXFW2w+ZGaoU0x3YrfwZP3dkrONijUK5ndBOLBAh2Wz8CwybMAESRPX4kDwZuGODMNkkjLoiwtLTyac8IXs2NpbJO2E0YVInhSH/c8LxolY1CVs+tFiEi2TqGW8lZqikTRlhLSYPGcIK2Ao/3gi/ilwiErQz4nIAJnx9xyJsga3w4xN3s6EbTVhowhJNbhCWyFaYcOVUvShpLZ+glfmREurZZ5MQ2wqOx/Q9k3YyeWNgJp0B4YgmNwh7aCv8eJp61U4mwT+xsJwA4Zarv37xm+ENQr89+/BCAwc93qXhRjmZpJeZ/Rs0YU1scU2MU1FkM/tKbT8kwt8+LB+8TtrT9dMCqHsrsyhYmdnfiYkEoaPBXRG/sPd8eunqZqfPmS1MHRGsfGLF5nX2Z4OwZWm6T15ihK3+/D7XBKFFcAErjzKVx3NTGIT8WZe+jRGSl0pdC7RUBqJW5D3P7O/iI9itDzx2Gla5oiAs6YwjKEBSKhOQMiDMnicGNmkUwc6V8sPTmHeyWAGpBELbgJWzx5c3Emqc0nIyya1Lqvax+BhhKfoE4/bdgHDR+6YOn6Zien0FK5fZpiInrITeRpWaL6qr5SwnUzGftJXTytUbCGszIzhjR8HcHKzTVNfqU9SHCGeRdAdjB1vgE4mWyuR1Q0QRLm8gDHsI9SErmg334HVD5EOE8w4vP2tnBrPxsICPeJ9SjDgESnkGpurMxkMEnUOVbT5Xy2cAEnN3U7rd8Kn5EGRscJOz5LqIunNoElbx+0eq3hev17IJRyNDwbpMGjwv3V5CsHOotRFtwhYWSmvn0BB9nfftbUq0txlV3rAJHTry6JVR+yG+f3/oVNDbhKiVYO+xWftkNQhPbLEW7bEr5WabsLClDM4p7Og/7zmnlPic4mVMZQj9xdzgkpUrmmTfctbr4VlvC/9hB2FvCoWtnM7A31SukJ1Qcl5+Audl2pMKOwidKRS2cm81WwHhmO85BOL8dQdhLZsxmNDhRSHhjb5NoF+xg7AwhcJX9nZ5lIRFvvcV6JZl2kHojZonVm7t4tMbG0ujfxio6+YdhD2MLbVyZZd9RVjhYo+6InEH4ck8q/KVezMt9daeA/exWc/h6oocoTP2Q/m7gKXIEZa5u4DAlp1uE5aWUHL3KbHIEvL7FFFsAouE+TYhlcqQIyR3UrG5QZi7kwoFCMT6k648n17v6n7uv9eL5/et9Asv0oTxJYkUxgAAAABJRU5ErkJggg=="
				), a58(2, "defeat", 6,
				"iVBORw0KGgoAAAANSUhEUgAAARMAAABABAMAAADL6o5mAAAAHlBMVEUAAAAlJyU7PTtUVlNsbmuJi4ijpaLCxMHX2db///+Cup+UAAACo0lEQVRo3s3ZsW7bMBAAUNqyZWUzsnT1VECbhy7ZvHTwlqmAN6PoUG0CggzairpIyi1Nk1b629awTPGOpHm0DyE1WYJEPlHk3UkW6w5t7eMXEWczKHvN52QoXfcjHUoUi4PSbdOhtItkKBEekZPSLdOh7NKhtOlQ3nwRnaC8pENp06F0t+lQvsWi/O/4+uPXiJNljcbgvUb5G5ci3mmWeVyKqGLNW5MyGyh1ZMo41hIyKaJRh573u9JY5HDo1LMsjBOfBLq9/oC0Rg4L5UYdeuWi5HqDAZShyT9clAKGBzJlBgMLB0UN9CKMksOEyEFpYOFBpkxBpywU1AmZkrFThpv7HUYZwcjPQEGzj04RsOpnoJRwnGNScFo7h7JS16HqcmbJDIUzW0hrWstQVfQWlMkhXg655BzKkoVyOPn7EMDjUa4Os0SidsIoCxbK5tBWhV7FCZSRJ8RtT1M6mE2PYb/tE1EdQsnoFNCpizLudwqYDCiUqScdhlLyfunkeslCo+TMlKJvPkNvNASKr14JpayPV0mtZKFRfFVcKKU5Cir4rYRAWXtq21CKetY31uVxiiI9FX8gZap+F7BrP2WC3oMupRSqZprBeeunlCiNXkopVesTrWShUDJpLS7sgd9GwYG/cn1B8lFGVWctuc7PQcao1hTK9YdP0hjgCykTo1579lLM7RcHxSg9VZYMoWw5KFfOL58BlHbOQdmYDa+CKeC1/2yKpbqvgyk1B2VsafgplNI6b6smVnH7wJq7h5tO2bFQCvdNkintkoVibX8RRtkJFkoDUmCpRwkqpZ3zUMDsgDObStkKFspUj9tqEr+EUO4EDwUt8Ez/ykKj3AkmSonGWGopn0J5WAkuSoX+KG60ksVL+Xm/8kXuAAoO1RvtOkT5B9F51EylDpRdAAAAAElFTkSuQmCC"
				), a58(3, "orders", 6,
				"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"
				), a58(4, "crown", 4,
				"iVBORw0KGgoAAAANSUhEUgAAANIAAADSCAIAAACw+wkVAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0xMi0yM1QxNDowNDo0NyswMzozMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1ZmFkNDE3NC03OWNiLTUwNDgtYWIyMi04NThmMGExODUzZTEiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4ZDQ1NTIyYS02MDRlLWYxNDUtYWM3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"
				), a58(5, "arena", 6,
				"iVBORw0KGgoAAAANSUhEUgAAAQAAAABABAMAAAAHc7SNAAAAHlBMVEUAAAAjJSM7PTpUVlNqbWqHiYalp6S/wr7W2NX////RSpP4AAAD9klEQVRo3sWZvW+bQBiHiSGAt6hdki1Dh7Jl9eapkjdPrbxV6lCxeaw3okqpbqNuzMd/2yRw3PvJkQVYYhHgnvfer9/dBQG4WnftgwWuawBwXAIgBQB/lwDIAEC1BEAOAJolAAwAaB/mHz+C4y8RhQkCKOcHuEMAl/kBDgigWTgG2/Z+7vFDPH77fW6AmAAUSxbi1+t5boAdAajnBjgRgHbm8a/o+HNLgiEGfy0UhUMMfrU/zvMCbOy4HxeSBKehBJtlirGze9AlW1GqtM2fH0rp6HroCTWzNcnpTMmxa+f5HZcEORnnyQ9gewkFyJUcS1zsp1wSUID2tx/gKAMYJccy14MSLgkYQOeeUYCLCBBqOZY7LRhxScABzl6A3gcEINFyDIY+lwQcoPEDFBLAWhE8IQQ7MUnAAd58MA5wkQAOiuxOYBM+sGIsABy9AN0QBMAosnsNx7xjkkAAKP0ABQdYabL7IBpWjwD88wNUHCDWZLeBPditkm8wwMuvD1+Mez8VU/qE3IwBUkV2r5AKWTFJkIPymUwHKBhAV2VzJrtjPOmGRiEECKcDVAzg7X9NxmR3ih2TQ0dTgGg6wKsPMED3aspe2+F9iYyWKwjwmQWhDlAQgC66zjGyLmCZ4yakYQCffo6lYUUAKgLQmx4y2U2WQ3FLJMHUQkQBXt5HANb5hkiCa1L9Q1quppZiBlBgABv+OZEEvKCQvSoOUAeTAGoMYHq/bkjsZCpA9b52zADaLQSI7EMpkQS5CtC8T5AAgEt35xECJHbcmEgCowL0TXOqJAMAZfenhgBrO/MhLsaRPn4fhRSgvvED9H7dAYDDkGkGye5kBKCUAJ7uAz9An1qGlfiH4ZmjuDvVCntVGKDZBxMASDYMTa5xpbcUd6ekXQIyA80WAYiluAxu6Wdi2brRGOxLUw+w+obfHAeIvGWjkXenhL2qoRfsUHKMA0Af1NIejC288ShAgQBs0X6cAnBLAE6ydSOFeGiarhsaGBoegIgAKNYJM8Oi0AHshEqoAQCTa3Igg2T3aRSgxQAJZPcBpAggVay7Ek9JDBKmDmAF88AHEKGRMsW6WNyazJGfcjYZytqwRgDuK7XS8vboK6V4fnTGAHfiqwoAWuIYJcc24motRY7J+YQVUwBCcF9seWc0M3vx+KQhqtg4Li/A8PF6+OIRLYUqNDP38gHSFgMc3LLND5C6+2tspbHWXStnJEgSQIDUVTE/QOjuH8Tl5hbMdaWcn5TiyujVfX4A+2YNTEYbo0cgBp6VU8wLBrCFq54EkNr7K2Jlaq3LlR2DDLoGAWyGjjgBILT3Y7zadItsbc8khU0TASTD8xMAetfXrGr2sdf8B96/CJXN/8t1AAAAAElFTkSuQmCC"
				), a58(6, "territorial.io", 6,
				"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phjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAA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jz//+c+xZMmS+PWvfx3Lly9PnQXUssWLF8c3vvGN1BmZM3To0Jg1a1bqDBJp3rx5LF++PHbcccfUKZm2dOnS+PrXv546AwAAAAAAAAAAAACAWlYvdQAAAAAAAAAAAAAAAGxLRUVFcfzxx8fhhx8eBxxwQLRv3z6aNm2aOiuv7bDDDrHffvvFfvvtFyeddFJcddVVsWrVqnjppZdi8eLFcd9998Wrr76aOhMA8t7IkSON9uSAAw44II455piYP39+6hQAAAAAAAAAAAAAAGqR4R4AAAAAAAAAAAAAAPJe7969o0+fPtG9e/fo1KlTNGrUKHVSnVZQUBB77rln7LnnntG3b9+49NJL469//Ws899xz8cQTT8Ttt98eH330UepMAMg7/fv3T53APw0ZMsRwDwAAAAAAAAAAAABAHWe4BwAAAAAAAAAAAACAvNOyZcs49dRT49BDD41u3bpF8+bNUydlWkFBQbRp0ybatGkTJ554Ylx77bXxwgsvxJNPPhn33HNPLF26NHUiAOS83r17x9577506g3864ogjon79+rFhw4bUKQAAAAAAAAAAAAAA1BLDPQAAAAAAAAAAAAAA5IX9998/TjnllDj88MNj//33j3r1XBKfq0pKSuKggw6Kgw46KC688MJYtmxZPPnkk3HXXXfFU089lToPAHLSwIEDUyfwb5o2bRpnn312zJw5M3UKAAAAAAAAAAAAAAC1xKcUAQAAAAAAAAAAAADIWd26dYvBgwfHEUccER06dIiCgoLUSVRTQUFBdOjQITp06BDnnHNOrFixIhYsWBCzZ8+ORYsWpc4DgJzRs2fP1Al8QZ8+fQz3AAAAAAAAAAAAAADUYYZ7AAAAAAAAAAAAAADIKR06dIgzzzwzevfuHZ06dTLWU8e0adMmvve978XZZ58dr776asydOzdmzpwZK1asSJ0GAMkccsghsccee6TO4AsOOuig1AkAAAAAAAAAAAAAANSiwtQBAAAAAAAAAAAAAABQv379GD58eCxcuDD++Mc/xsiRI6Nz585Ge+qwgoKC2GeffWLEiBHx5z//OZ588sk477zzoqioKHUaAGx3/fr1S53AlygtLY3evXunzgAAAAAAAAAAAAAAoJbUSx0AAAAAAAAAsK3df//9sdtuu6XOAHLE9OnT44477kidwSaMGzfOgZR1wG233RYzZ85MnUEeuuWWW2KfffZJnUEVvffee16zAagVRx55ZJx99tlx1FFHRdOmTVPnkEj9+vWjV69e0atXrxg/fnw8/PDDMW3atHj++edTpwHAdtG9e/fUCWzC0UcfHfPmzUudAQAAAAAAAAAAAABALTDcAwAAAAAAANQ5Xbp0iT333DN1BpAjdt9999QJbMacOXOivLw8iouLU6ewFZo2bWq4h2rr2bNnDBw4MIqKilKnUEVXXHFF6gQA6pD69evHiBEj4uSTT479998/dQ45plmzZnHaaafFwIEDY8mSJTF79uy48cYbU2cBQK0ybpy7unbtmjoBAAAAAAAAAAAAAIBaUpg6AAAAAAAAAACA7HrxxRfjvvvuS53BVmrXrl2cddZZqTPIM6NGjTLak0dWrVoV48aNS50BQB3QsWPHuOWWW+Lvf/97TJ482WgPm1VUVBQHHXRQXH/99bFy5cqYMmVKlJaWps4CgG1u//33j2bNmqXOYBP23nvv1AkAAAAAAAAAAAAAANQSwz0AAAAAAAAAACQ1bty4WLduXeoMttK5556bOoE80rlz5zjmmGNSZ1AN11xzTVRUVKTOACCPHXPMMfHQQw/F888/H6eddprxFaptjz32iAsvvDBWrFgRs2fPjs6dO6dOAoBt5rDDDkudwGbstttu0bp169QZAAAAAAAAAAAAAADUAsM9AAAAAAAAAAAktXLlyrjjjjtSZ7CVunbtGv3790+dQZ4oKyuLBg0apM6gil588cWYNm1a6gwA8tSgQYNi8eLF8cgjj8Q3v/lN7wHYajvuuGMMGjQolixZEg8++GD07NkzdRIAbLX27dunTmALevTokToBAAAAAAAAAAAAAIBaYLgHAAAAAAAAAIDkxo4dG++//37qDLbSj370o9QJ5IFWrVrFcccdlzqDKtq4cWNceumlqTMAyEPf+9734oUXXojZs2fHN77xjSgoKEidRB1TXFwcxx57bDzxxBMxb968OPLII1MnAUCNfe1rX0udwBZ06tQpdQIAAAAAAAAAAAAAALXAcA8AAAAAAAAAAMmtWbMmbrrpptQZbKVevXpFr169UmeQ48rLy6NRo0apM6iixx9/PO6///7UGQDkkWHDhsUrr7wSN9xwQ+y3336pc8iAoqKiOProo2PevHmxYMECAz4A5KUWLVqkTmALvvrVr6ZOAAAAAAAAAAAAAACgFhju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FpLMnDkzmjZtmp1RdEpLS7MTAAAAAAAAAFhKDbIDAAAAAAAAAACgEAwdOjR23333qKioyE5hMcrKyuKUU06JX/ziF9kpNebggw822lPH3HDDDUZ7AOqhX//610Z7CtT8+fPj5ptvjr59+0ZVVVV2TkEZPnx4PPvss3HddddFx44ds3NYRj169Iju3bvH2LFjs1MAAChSO+ywQ/Ts2TM23njjWGeddWLNNdes80MFy2qVVVaJVVZZJbp06fKtf//ZZ5/FO++8E//6179izJgx8fjjj8f777+fVAnA8tS2bds46KCDomfPnrHRRhtFu3btspOW2P//eLbRRhvFvvvuGxdddFF88sknMW7cuBg7dmzcc889fucEAAAAAAAAAECdVBIR87MjAAAAAAAAAGrSv//971hzzTWzM4raBx98EGuvvXZ2BkCtu+yyy+K4447LzqAa5s6dG926dYu33347O6VGjB49Onr06JGdwQIfffRRdOrUKebNm5edAsASeu+99/w8W4Bmz54dQ4YMiUsvvTQ7paCVl5fHyJEjY/vtt89OYRndcMMNcdRRR2VnUEe89NJLsemmm2ZnFJ1+/frFddddl50BAMtdw4YNY++9946tt946unfvHuutt140b948O6vOmj9/fnz00Ucxbty4GDNmTDz22GPx4osvZmcBsJS6d+8eBx98cGy11VbRtWvXaNCgQXbScjdhwoR44YUX4vHHH4877rjD86mwnMycOTOaNm2anVF0SktLsxMAAAAAAAAAWEqGewAAAAAAAICCY7gnn+EeoFiVl5fHW2+9Fa1bt85OoRpuvvnmOPzww7Mzltmuu+4af/rTn7IzWMivf/3ruOSSS7IzAFhCBx98cNx8883ZGdSwKVOmxGGHHRaPPPJIdkrRuPTSS6N///5RVlaWncJS+vjjj2ONNdbIzqCOMNyTw3APAIWsd+/esdtuu8UWW2wRG2ywQTRp0iQ7qV77z3/+E6+99lq88MILMXLkyHj33XezkwBYhE6dOsWRRx4ZO+20U2ywwQZRUlKSnZTmyy+/jOeffz7uvffeuOmmm6Kqqio7CQqG4Z4chnsAAAAAAAAA6i/DPQAAAAAAAEDBMdyTz3APUMzOOuusGDJkSHYG1fDll19Gp06dYsqUKdkpy+Svf/1rbL311tkZLPDGG29Et27dsjMAWApPPvlkbLPNNtkZ1KD3338/9tlnn3jttdeyU4pOv3794uKLL3YAdz128MEHx2233ZadQR1guCeH4R4ACknjxo3j0EMPjZ122ik233zzaNWqVXZSwaqqqoo333wzXnjhhXjooYfioYceyk4CIP5vyOGXv/xlHHjggfGTn/wkGjRokJ1U53z22Wfx1FNPxa233urxC2qA4Z4chnsAAAAAAAAA6i/P+AIAAAAAAAAAQA0aPnx4fPDBB9kZVMOKK65Y70eWevbsGVtttVV2BgvMnz8/RowYkZ0BwFLo1KlT9OzZMzuDGjRu3LjYZpttjPYk+d3vfhcHHXRQfP7559kpLKU+ffpkJwAAUI9VVFTEKaecEk899VRMmTIlrrnmmthtt92M9ixnpaWl0blz5+jbt288+OCD8fHHH8ddd90Vffr0cYg4QII2bdrEJZdcEh9++GFcd9118bOf/cxozw9YddVVY5999okHH3wwxo8fH8OGDYtmzZplZwEAAAAAAAAAUCRKImJ+dgQAAAAAAABATfr3v/8da665ZnZGUfvggw9i7bXXzs4ASHPSSSfFxRdfnJ1BNUyZMiXWXHPNmDNnTnbKUvnTn/4Uu+66a3YGCzz11FPRu3fv7AwAlsLll18exx57bHYGNWTMmDGx/fbbx/Tp07NTil7Pnj3jzjvvjLZt22ansIRmzpwZq622WsyaNSs7hWQvvfRSbLrpptkZRadfv35x3XXXZWeQ7Je//GWcfPLJ2RlF5+OPP44ddtghOwPqpbKysujXr1/svvvu8ZOf/CSaNGmSncRCJk+eHE8//XTcdttt8dBDD2XnQL3g+7HadeKJJ8aTTz6ZnVEjunTpEoMHD45ddtklmjdvnp1Tb02fPj1GjRoVl156aYwdOzY7B+qVmTNnRtOmTbMzio6xTAAAAAAAAID6q0F2AAAAAAAAAAAAFJpLLrkkjjjiiOjcuXN2CovRsmXLGDhwYAwbNiw7ZYl16dIltt9+++wMFpg3b14MHTo0OwOApbT77rtnJ1BDxowZE9tuu23MmDEjO4WIeP7552OnnXaKUaNGxRprrJGdwxJo3rx5HHXUUXHJJZdkpwAUrZYtW/r9YoJmzZplJ0C9s+OOO8Zhhx0W2267bayyyirZOfyAVq1axb777hv77rtvfPjhhzFq1Kj43e9+F+PGjctOgzrL92O1q6KiIjthmW2yySYxZMiQ2HHHHaNRo0bZOfVeRUVFHHTQQbHffvvFI488EiNGjIgxY8ZkZwEAAAAAAAAAUIBKswMAAAAAAAAAAKAQXXTRRdkJVNOhhx4apaX176VUAwcOdOBTHXL//ffHCy+8kJ0BwFI48MADDYoUCKM9ddMbb7wRu+66a3z00UfZKSyh3XbbLTsBAIA6qqKiIoYPHx7jxo2LP//5z7Hvvvsa7alH2rdvH8ccc0yMHTs2/va3v0X//v3r5fMkAHVFp06dYuTIkfG3v/0tdtttN8/h1rCGDRvGbrvtFi+88EL8+c9/jp49e2YnAQAAAAAAAABQYLyKEgAAAAAAAAAAloObbropXnnllewMqqF9+/Zx/PHHZ2cskXbt2sXuu++encECX375ZQwaNCg7A4Cl1KdPn+wEasC4ceNit912M9pTR/3/4z0ff/xxdgpLYLPNNouWLVtmZwAAUIdsscUWceedd8aHH34YQ4cOjc6dO2cnsQwaNGgQW2yxRVxxxRXx4YcfxpVXXhkdOnTIzgKoN8rLy+Oqq66KsWPHxt577x0NGzbMTipoDRo0iB133DGeeuqpuPfeez1mAQAAAAAAAABQYxpkBwAAAAAAAAAAQKEaMWJEPPDAA1FSUpKdwmIcccQRcemll2ZnVNvQoUOjadOm2RkscNNNN8X777+fnQHAUqioqIitt946O4NlNGHChNhtt91i0qRJ2SkswhtvvBH77rtv/OlPf4oWLVpk51ANjRs3jiOPPDLOPffc7BQAAJIdeOCBcfTRR8cWW2wRZWVl2TksB23bto1jjjkmfvnLX8Zjjz0Wv/3tb+O5557LzgKos/r16xeDBw+O1VdfPTul6JSVlcWee+4ZvXv3jhtuuCEGDBgQlZWV2VkUqLXWWivat2+fnbHESktLsxOK0lZbbZWdUGs++eSTePfdd7MzAAAAAAAAAGqM4R4AAAAAAAAAAFhOHnrooXjqqadim222yU5hMTbYYIM46KCD4tZbb81OWazy8vLYZ599sjNYYNKkSTFo0KDsDACW0nHHHWcMr56bMmVK7L333jFhwoTsFKrhxRdfjIMOOihGjhwZK664YnYO1bDddtsZ7gEAKGL9+/ePo48+Orp06ZKdQi1p3Lhx7L777vHzn/88Xnjhhbj88svjnnvuyc4CqDO6d+8el156afTs2TM7peiVl5fHySefHL/4xS9ixIgR8fvf/z47iQJ06qmnxq9+9avsDOqJp59+Ojuh1tx2221x8MEHZ2cAAAAAAAAA1JjS7AAAAAAAAAAAAChkw4cPj8rKyuwMqqF///7ZCdUydOjQqKioyM5ggSuuuCJmzZqVnQHAUtpjjz2yE1gGc+bMiaOOOirGjh2bncISeOyxx+LYY4+NefPmZadQDZtuuqmfPwAAitBJJ50U77zzTlxxxRVGe4pUaWlp9OzZM0aOHBkvvfRSHHDAAdlJAOnOOuusePrpp4321DFrrrlmXH/99fHII49Ehw4dsnMAAAAAAAAAAKiHDPcAAAAAAAAAAMBy9Nxzz8XDDz+cnUE1bLrpprHTTjtlZyxSWVlZHHjggdkZLPDWW2/Feeedl50BwFLaeOONY6ONNsrOYBmceeaZ8eCDD2ZnsBRuueUW30fVE02aNIlDDz00OwMAgFpywgknxFtvvRUXX3xxdOzYMTuHOmLTTTeNW2+9NV5++eXYa6+9snMAal23bt3ipZdeiiFDhkTz5s2zc/gBO+ywQ7zyyitx/PHHZ6cAAAAAAAAAAFDPGO4BAAAAAAAAAIDlbMiQITF37tzsDBajpKQkTjrppOyMRRo4cGC0adMmO4MFzj333OwEAJbB4YcfHiUlJdkZLKWbb745LrzwwuwMlsGZZ54Zt99+e3YG1VDXB04BAFh2BxxwQPzzn/+MSy65JNZZZ53sHOqoTTbZJO6+++549tlno3fv3tk5ALXiuOOOi6eeeio23XTT7BSqYeWVV45LL700Ro0aFS1btszOAQAAAAAAAACgnjDcAwAAAAAAAAAAy9m4cePinnvuyc6gGnr16hWbbbZZdsYPOvzww7MTWOCFF16IW265JTsDgGWwww47ZCewlF588cU44ogjsjOoAYccckiMHTs2O4PF2GSTTaK01NtPAAAKUa9eveK5556LW2+9NX70ox9l51APlJSURM+ePePRRx+N++67L9Zdd93sJIDlonHjxjFy5Mi47LLLoqKiIjuHJbTzzjvHmDFj4uc//3l2CgAAAAAAAAAA9YB3TgEAAAAAAAAAQC0YOHBgfPnll9kZLEZZWVmcdtpp2Rnf67jjjou11147O4OIqKysjKFDh2ZnALAMevXqFeuss052Bkth8uTJceCBB0ZVVVV2CjWgqqoqDjrooPjss8+yU1iEVVZZJX7xi19kZwAAUIPatm0bd955Zzz22GPxk5/8JDuHeqisrCz22GOPGDNmTFx22WXRsGHD7CSAGtOtW7d45ZVXYu+9985OYRmsscYacffdd8dZZ52VnQIAAAAAAAAAQB1nuAcAAAAAAAAAAGrBxIkT45ZbbsnOoBp23nnn6NSpU3bG/zjyyCOzE1hg1KhR8dRTT2VnALAMDj744OwElkJlZWWccsopMWHChOwUatCbb74ZJ510UnzzzTfZKSzCLrvskp0AAEANOfPMM+ONN96IfffdNxo0aJCdQz3XvHnzOO644+Ktt96KQw45JDsHYJn16dMn/vKXv8QGG2yQnUINaNSoUQwZMiQefPBBI3MAAAAAAAAAAPwgwz0AAAAAAAAAAFBLBg0aFJ999ll2BouxwgorxODBg7MzvuWggw6KLl26ZGcQEbNnz46BAwdmZwCwjHr37p2dwFK46aab4tZbb83OYDm47bbb4qabbsrOYBG23HLL7AQAAJZR796947XXXoszzjgjVl555ewcCsxaa60VN910Uzz22GOx7rrrZucALJWBAwfGjTfeGKusskp2CjXs5z//ebz88sseowAAAAAAAAAA+F6GewAAAAAAAAAAoJbMmDEjbrjhhuwMqmHPPfeMli1bZmf8V//+/bMTWOC2226LN998MzsDgGWw0047xRprrJGdwRJ6/fXX4+ijj87OYDn61a9+FePHj8/O4Ad07NjRwaYAAPVU48aN4/e//338+c9/jm7dumXnUOC22267GD16dAwePDg7BWCJXHvttTFixIho1KhRdgrLSbdu3eKvf/1rbLXVVtkpAAAAAAAAAADUMYZ7AAAAAAAAAACgFg0dOjQmTpyYncFilJeX15lD5XbZZZfYdNNNszOIiM8++ywGDBiQnQHAMvrFL36RncASmjNnTvTv3z+qqqqyU1iOKisr45hjjok5c+Zkp/A9SkpKYu+9987OAABgCe2+++4xbty4OPzww6Nhw4bZORSJlVZaKc4+++x48cUXo2vXrtk5AItUWloa999/fxx55JFRUlKSncNy1rZt23jggQdin332yU4BAAAAAAAAAKAOMdwDAAAAAAAAAAC1qLKyMq644orsDKph//33j8aNG2dnxIknnuiQqDrimmuuienTp2dnALCMevXqlZ3AErrmmmvihRdeyM6gFjz77LNxzTXXZGfwA7ba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XFRVVWXnLFcnnHBC7LfffjF58uTsFBY44ogjshMAKDAbbLBBdgIAAAAAAAAAAAsx3AMAAAAAAAAAAEXq+uuvj9deey07A37QXXfdFW+88UZ2BgB1WIsWLbITWMg777yTnQAAALDM9t9//+wEFjJmzJjYcsst4/77789OqTX3339/bL311jFu3LjsFCKid+/e0axZs+wMAApIhw4dshMAAAAAAAAAAFhIg+wAAAAAAAAAAAAgz/nnnx933nlnlJSUZKfAt0ybNi0GDBiQnQFAHdapU6do2LBhdgYLGTt2bHYCAADAMtlyyy1jk002yc5ggbvuuisOPPDAqKqqyk6pdW+++WZsuumm8fDDD0evXr2yc4raSiutFP369YuLL744OwWoY6ZNmxZTp06NL774Ij7//PP46quvIiJi5syZ0bx584iIaNSoUZSXl8eKK64YK6+8cqy66qrRuHHjzGzqgDXWWCM7AQAAAAAAAACAhRjuAQAAAAAAAACAInb33XfHscceGz/96U+zU+Bbrr322pgyZUp2BgB12DrrrJOdwELmzJljuAcAAKj3jj76aEP3dcD8+fPjiiuuiBNPPDE7JdWcOXNiu+22i3vvvTd233337JyitsceexjugSJWVVUV77zzTvzrX/+KcePGxauvvhrPPPNMTJ8+famut/7668emm24a3bp1i/XWWy822GCDaN++ve9BishKK60U66+/frz55pvZKQAAAAAAAAAAhOEeAAAAAAAAAAAoemeffXY88sgjUVZWlp0CERExYcKEOOOMM7IzAKjjVl999ewEFvLZZ59lJwAAACyTsrKy2HHHHbMzit78+fPjnHPO8TviBaqqqmLPPfeMe+65J/baa6/snKK16aabRocOHeL999/PTgFqyaxZs+LFF1+Mxx9/PEaOHBkffvhhjV37zTff/J/Blg4dOsTee+8dvXv3jk033TRWWmmlGrsfdVPPnj0N9wAAAAAAAAAA1BGl2QEAAAAAAAAAAECuJ598Mh577LHsDPiviy++OCorK7MzAKjjVltttewEFjJlypTsBAAAgGVy5JFHRsuWLbMziprRnh+27777xiOPPJKdUbQaNmwYRx55ZHYGsJxVVVXFyy+/HKecckq0adMmtt9++7joootqdLTnh7z//vtx4YUXxg477BCtWrWKE044IZ599tn45ptvlvu9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222XnUIttWvXLh588MHo0KFDdgq19Pjjj2cnAADUi2nTpmUnFJX9998/tt566+wMAACARrHddttFeXl5dgYAAAAAAAAAG8BwDwAAAAAAAAAANICKioooLXV7TiGaOXNmjB8/Pjvjcy1evDhuueWW7AxqoUWLFjFixIjsDAA20NKlS2Py5MnZGWykr33ta/Hggw86DK0JKC8vj4cffji6dOmSnUItrVu3Lm677bbsDACAenHffffF2rVrszOKRuvWreP000/PzgAAAGgUpaWl8b3vfS87AwAAAAAAAIAN4GQQAAAAAAAAAACoZz/60Y9iv/32y86gBmPHjs1OqJUhQ4bEwoULszOohQMOOCAOP/zw7AwANtCtt96anUA96Nq1a/zhD3+IFi1aZKdQgxYtWsRDDz0UXbt2zU6hDl5++eWYNWtWdgYAQL1YunRpvPHGG9kZReWYY47JTgAAAGg03/nOd7ITAAAAAAAAANgAhnsAAAAAAAAAAKCeDRo0KEpKSrIzWI9nnnkm7rjjjuyMWlmxYkXceOON2RnUQklJSQwePDg7A4ANdOedd8bbb7+dnUE9+M53vhOPPfaY8Z4CVF5eHk8++WR07949O4U6euKJJ7ITAADq1QsvvJCdUFR22WUX4z0AAEDR6Nq1a3YCAAAAAAAAABvAcA8AAAAAAAAAANSj448/3iEMBWrdunUxatSo7Iw6qaioiHfffTc7g1rYe++945e//GV2BgAb6IEHHshOoJ706NHDeE+Badu2bUyaNCm6deuWnUIdrVu3Lm6++ebsDACAevXMM89kJxSdU089NTsBAACgUXTp0iVKSx3nBAAAAAAAANDUbJIdAAAAAAAAAAAAzck555yTnUANpkyZEg899FB2Rp2sWbMmxo8fH0OHDs1OoRbOOuusuP7666O6ujo7BYA6uuyyy+LUU0+NTTfdNDuFetCjR4+YPHly9OrVK5YtW5adU9R23nnneOCBB2L33XfPTmEDvPTSS/Hcc89lZwAA1Kt77rknxo4d6yDlRvSd73wnunfvHlOnTs1O4TO23nrrOPnkk7Mzmp2VK1fGFVdckZ0BAECCzTffPA4//PC49957s1MAAAAAAAAAqAPDPQAAAAAAAAAAUE/69esXu+22W3YG61FdXR2jRo3KztggI0eOjBNPPDE6duyYncIX6NSpUwwePDhGjBiR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qsrOaHSVlZWxZs2a7AxqoW3btlFZWZmdAUAdDR8+PN57773sDApIaWlpdO3aNSorK+Ott96K6dOnx4UXXhh77bVXdlqNysrK4rjjjosbb7wxXn755fjrX/8a/fr1i1133TVKSkqy80h26623ZicAAKS67bbbshOIiK222iruueee6Nq1a3ZKs3DsscfGhRde6Hu+RvLcc89lJwAA/JPhnsK3+eabx+WXXx4PPPBAdOjQITsHAAAAAAAAoOgZ7gEAAAAAAAAAgFqqqKiI0lK33BSiN998My666KLsjBTTpk2LiRMnZmdQS0cffXR84xvfyM4AoA5WrVoVEyZMyM6gQLVo0SK6du0aZ511Vjz33HMxd+7ceOihh2LYsGHRrVu3tK527dpF796947rrrou//OUv8cEHH8Qtt9wSJ5xwQuyyyy4ObuaflixZEqNHj87OAABI9cADD8Tbb7+dnUFEbLvttnHPPff4GepGOvzww+O3v/1tbLrpptkpReOJJ57ITgAA+Kfly5dnJ1BLhx56aDz//PMxZsyYaNWqVXYOAAAAAAAAQNHaJDsAAAAAAAAAAACagh/96Eex3377ZWdQgyuuuCKqq6uzM9KMGDEivv/970fLli2zU/gCrVq1isrKyjj00EOzUwCog/PPPz+OPfbY2HbbbbNTKGAlJSXRoUOH6NChQxx88MFRUVERS5YsiXfeeSfmzp0br732WsyZMydmzJgRL7zwQr18/dqlS5fYbbfdolOnTrHrrrvGV7/61fjKV74S22+/fZSVldXDR0Vzd8cdd8SqVauyMwAA0j366KNxyimnZGcQETvttFP86U9/ih//+McxderU7Jwm57jjjourr746Nt988+yUorFy5UqjzwBAQVm9enV2AnWw5ZZbxjnnnBM/+9nP4vbbb4+xY8fG4sWLs7MAAAAAAAAAiorhHgAAAAAAAAAAqIVBgwZFSUlJdgbrMXv27Bg3blx2RqoZM2bEgw8+GD/+8Y+zU6iFH/zgB9GzZ8+YNGlSdgoAtbRq1aq48cYb45xzzslOoYnZaqutYquttopvfvOb//LyqqqqWLZsWSxZsiSWLl0aH374YVRVVcXHH38ca9eujY8//jgiIlq0aBGtWrWKiIjy8vLYfPPNY/PNN482bdrENttsE5tuumljf0g0I8uXL4+RI0dmZwAAFITx48fHySef7PcABWLbbbeN+++/P04++eS4//77s3OajDPOOCPGjh0bLVu2zE4pKjNmzIg1a9ZkZwAA/JOx9qZphx12iLPOOitOPfXUePLJJ+Puu++OCRMmRHV1dXYaAAAAAAAAQLNnuAcAAAAAAAAAAL7A8ccfH127ds3OoAaXXXZZdkJBGD58eBxyyCHRunXr7BS+QFlZWQwfPtxwD0ATU1FRET/72c9ihx12yE6hGSgrK4stt9wyttxyy+wUitidd94ZCxYsyM4AACgIzz77bMycOTP22muv7BT+11ZbbRW33XZbDB48OC699NLsnII3bty46Nevn/GpBI8++mh2AgDAv1i2bFl2AhuhTZs2ceihh8ahhx4al112WcyYMSOeeeaZePrpp2PSpEkpo5G77rpr7LnnntGpU6fo0KFDvPTSS3HllVc2egcAAAAAAABAQzHcAwAAAAAAAAAAX+Ccc87JTqAGM2fOjPHjx2dnFITZs2fHfffdF8cdd1x2CrWw7777xnHHHRcTJkzITgGgltasWRPjx4+PoUOHZqcAbLSVK1fG6NGjszMAAArKPffcY7inwLRq1Souuuii2H333eOUU06J6urq7KSCs/3228eECRPiP/7jP7JTitKaNWvixhtvzM4AAPgXS5cuzU6gnmy55ZZx4IEHxoEHHhgREZ988km89dZbMXfu3FiwYEEsWLAg3n333Zg3b14sWbIkVq9eHYsXL44PP/wwqqurY8stt/znY2222WaxxRZbRETEl770pWjbtm1sscUWseWWW8bmm28ebdq0ifLy8thmm21iq622iq222uqfr2/VqtW/dE2YMMFwDwAAAAAAANCsGO4BAAAAAAAAAIDP0a9fv9htt92yM6jBRRddlJ1QUIYOHRqHHXZYtGnTJjuFWjj33HMN9wA0MSNHjowTTjghvvrVr2anAGyU++67L958883sDACAgnLllVfGwIEDo7y8PDuFTykpKYmTTjop9t577/j5z38es2bNyk4qGMcee2xcdNFF8eUvfzk7pWjNnDkz5s2bl50BAPAvlixZkp1AA9l0001jl112iV122SU7BQAAAAAAAKBZKc0OAAAAAAAAAACAQlVaWhr9+/fPzqAG06dPj9tvvz07o6C8+eabceedd2ZnUEu77bZbnHnmmdkZANRBdXV1XHLJJdkZABtl+fLlMWTIkOwMAICCs2zZsnj88cezM6jBN77xjZg8eXKce+652Snptt566/jv//7vuOmmm4z2JHvssceyEwAA/o/33nsvOwEAAAAAAAAAmhTDPQAAAAAAAAAAUIOzzz47OnXqlJ3Beqxbty4qKyuzMwpSRUVFLF26NDuDWurfv3+UlZVlZwBQB1dffXU8//zz2RkAG+zOO++MuXPnZmcAABSk3/72t9kJfI4tttgiRo0aFU8//XR07do1O6fRlZaWxpAhQ+Kll16Ko48+2s+Wk1VVVcWtt96anQEA8H8sWrQoOwEAAAAAAAAAmhTDPQAAAAAAAAAAsB5lZWXRr1+/7AxqMGXKlHjooYeyMwrS/Pnz4/bbb8/OoJZ23HHHGDVqVHYGAHVUWVkZ69aty84AqLNly5bFsGHDsjMAAArWpEmTYtasWdkZfIF99903pkyZEjfccENsvfXW2TmNonfv3vHyyy/H8OHDo3379tk5RMTf/va3mDNnTnYGAMD/8Y9//CM7AQAAAAAAAACaFMM9AAAAAAAAAACwHiNHjowddtghO4P1qK6uNnTyBSoqKmLx4sXZGdTSySefHO3atcvOAKAO7rvvvnjiiSeyMwDq7Kabbop58+ZlZwAAFDTD6E1Dq1at4qSTToo5c+bEpZdeGuXl5dlJ9a60tDROP/30mDlzZowfPz7+7d/+LTuJT7nvvvuyEwAA1mvGjBnZCQAAAAAAAADQpBjuAQAAAAAAAACAzygvL4/evXtnZ1CDxx57LCZNmpSdUdAWL14ct9xyS3YGtbTVVlvFmDFjsjMAqKNzzjknVq1alZ0BUGsLFiyI8847LzsDAKDg/eY3v4n3338/O4Na2nrrreNXv/pVvPHGG3H55ZdHhw4dspM22vbbbx9jxoyJt956K8aNGxd77rlndhKf8dFHH8WVV16ZnQEAsF6LFy+Ojz76KDsDAAAAAAAAAJoMwz0AAAAAAAAAAPAZI0aMiPbt22dnsB5r1qyJUaNGZWc0CUOGDImFCxdmZ1BLP/nJT2K33XbLzgCgDmbMmBETJkzIzgCotauvvjpWrFiRnQEAUPDWrFkT9957b3YGdbT11ltHv3794uWXX4777rsvDj/88OykOikrK4u+ffvG448/Hm+88Uacc845sdNOO2VnUYMnn3zS91cAQEEzRgoAAAAAAAAAtWe4BwAAAAAAAAAAPqVdu3ZxwgknZGdQg4kTJ8bUqVOzM5qEFStWxI033pidQS21bt06KisrszMAqKOzzz7bUB7QJLz22msxevTo7AwAgCbjwgsvjFWrVmVnsAG+9KUvxWGHHRb33ntvvPXWW3HttdfGgQcemJ21Xh07doxzzz03HnnkkVi0aFFcccUVccABB0TLli2z0/gCxpwBgEL33nvvZScAAAAAAAAAQJNhuAcAAAAAAAAAAD5l9OjR0bZt2+wM1mP16tUxdOjQ7IwmpaKiIt59993sDGrp0EMPjR49emRnAFAHS5cujUsvvTQ7A+ALVVZWRnV1dXYGAECT8eabb8ajjz6ancFG+spXvhKnnHJKPPbYYzFv3ry455574swzz4xdd901pWfvvfeOgQMHxu233x4vvvhivPbaazFq1Kg46KCD/G6qCZk7d27cdddd2RkAAJ/LcA8AAAAAAAAA1N4m2QEAAAAAAAAAAFAoOnfuHMccc0x2BjV44IEHYtasWdkZTcqaNWti/PjxBo+aiLKyshg+fHgccMAB2SkA1MFFF10UxxxzTOy9997ZKQDrNXny5LjllluyMwAAmpxLLrkk/vM//zNKS0uzU6gH22+/fRxxxBFxxBFHxIUXXhjz5s2LN998M1599dV46aWX4oUXXojp06fHihUrNuo6LVq0iH322Sf22GOP+Ld/+7f46le/GjvuuGN06tQpttpqq3r6aMh0xx13ZCcAAHyhefPmZScAAAAAAAAAQJNhuAcAAAAAAAAAAP7XsGHDok2bNtkZrMfKlStj8ODB2RlN0siRI+PEE0+Mjh07ZqdQCz169Igf//jHcdddd2WnAFAHZ511VjzyyCPRokWL7BSAf/HJJ5/Eueeem50BANAkPfXUUzFlypTYf//9s1OoZyUlJbHTTjvFTjvtFP/xH//xz5evW7culixZEkuXLo2PPvooli1bFsuXL4+1a9fGunXr4uOPP47WrVtHRMRmm20WJSUl8aUvfSnatm0bW2yxRWy++eax+eabZ31YNIKPPvooLr744uwMAIAv9Morr2QnAAAAAAAAAECTYbgHAAAAAAAAAAAiokuXLnHkkUdmZ1CDu+66K15//fXsjCapuro6rr322hgzZkx2CrVQUlIS559/vuEegCZm8uTJcdttt8WJJ56YnQLwL2699dZ45plnsjMAAJqsSy+9NP7jP/4jSkpKslNoBCUl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N96II488Mqqrq7NTAACohdmzZ8f5558f69aty04BvkBVVVWceeaZficCABSVe++9NzsBAAAAAAAAAAqO4R4AAAAAAAAAAJql7t27R69evbIzqMEDDzwQzz//fHYG6zF//vy4/fbbszOog29/+9tx0kknZWcAsJGOOOKImDVrVnYGUEAWL14cP/3pT2PRokXZKQAA1ME111wTd911V3YG8AWuu+46/68CAEXnsssuiwULFmRnAAAAAAAAAEBBMdwDAAAAAAAAAECzNHjw4GjRokV2BuuxcuXKGDx4cHYGn6OioiIWL16cnUEdDBw4MDsBgI20atWqOPLII2PevHnZKUAB+Pjjj6N3797x3HPPZacAALAB+vTpE6+//np2BlCDZ555Jk4//fTsDACARldVVWW8EAAAAAAAAAA+w3APAAAAAAAAAADNTs+ePaNnz57ZGdTgrrvucmBhgVu8eHHccsst2RnUwS677BLnnHNOdgYAG+nNN9+M4447Lj744IPsFCBRVVVVnHnmmfGHP/whOwUAgA20YsWK6N27d6xYsSI7BfiMRYsWxYknnhjV1dXZKQAAKS666KJYuXJldgYAAAAAAAAAFAzDPQAAAAAAAAAANDsVFRVRWurWmEK0fPnyGDJkSHYGtTBkyJBYuHBhdgZ1cPrpp0erVq2yMwDYSE899VScfPLJ8fHHH2enAEkuuOCCuOaaa7IzAADYSFOnTo0hQ4bEunXrslOA/1VVVRUDBgyIV199NTsFACDNvHnz4pFHHsnOAAAAAAAAAICC4XQSAAAAAAAAAACalaOOOir222+/7AxqcMstt8S8efOyM6iFFStWxI033pidQR1sv/32UVlZmZ0BQD247777on///rFmzZrsFKCR/fa3vzV2CgDQjFx22WVx++23Z2cA/+uqq66KCRMmZGcAAKSrrKyM1atXZ2cAAAAAAAAAQEEw3AMAAAAAAAAAQLMycODAKCkpyc5gPZYsWRLDhg3LzqAOKioq4t13383OoA569+4d22+/fXYGAPVg/PjxMXTo0Fi3bl12CtBIbr/99ujbt292BgAA9ezEE0+M5557LjsDit4f//jH+NWvfpWdAQBQEJ5//vl48MEHszMAAAAAAAAAoCAY7gEAAAAAAAAAoNk44YQTomvXrtkZ1ODmm2+ORYsWZWdQB2vWrInx48dnZ1AHbdu2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L14c06ZNiyeffDKamppST6KXO378eKxevTpKS0vjrrvuihMnTqSeBAAAPVZnZ2esXLkyJk+eHLfeemvs2LEjOjs7U88ioa6urti5c2fceeedH4adhFIBAPi07dmzJ+69996YN29ejBo1Ku644454+umn480334wzZ86kngcAAAAAAABADybcAwAAAAAAAABAUl/84hdj0aJFqWfwMXbt2hUbN25MPYNe4Oc//3ns378/9QzO09e//vWYPXt26hkA9FC1tbVx++23x8SJE2PVqlVRW1ubehK9TFVVVfz4xz+OSy65JJYuXRrNzc2pJwEAQK/yy1/+MubNmxcLFiyIX/3qV665M9PQ0BDPPPNMXHnllXH55ZfHunXrUk8CAICIiGhra4snnngibrnllqioqIgRI0bEN7/5zVi3bl3s2LEj/vGPf6Se2Ou0t7dHVVVVbN68OZ577rnUcwAAAAAAAAD+o/qlHgAAAAAAAAAAQN7uu+++6NfP31i6o66urvjpT3+aega9yMMPP+zGfj3MwIEDY/ny5XHttdemngJAD9bY2Bh333133HPPPfG9730vFi9eHNOnT089ix6qs7Mzdu3aFevXr4+nnnoq9RwAAMjC1q1bY+vWrVFUVBRLly6NG264IS699NLUs7gA2tvbY+fOnfHss8/GY489Fh0dHaknAQDA/6mtrS02bdoUmzZt+vBYaWlpLFy4MGbOnBlTp06NSy65JEpKSmLAgAEJl/YMra2t8e6778ahQ4fi73//e7zxxhvx/PPPR2NjY+ppAAAAAAAAABeEO54AAAAAAAAAAJDMVVddFVdeeWXqGXyMbdu2xW9/+9vUM+hFnnjiiViyZElUVFSknsJ5uPrqq+Oaa66JP/zhD6mnANDDdXZ2xkMPPRQPPfRQXHvttXHHHXfEVVddFYWFhamn0QM0NzfH73//+3j00Udj+/btqecAAECWmpubY9myZbFs2bKYP39+3HbbbXH11VfHqFGjUk/j/6GrqysOHjwYL730Ujz++OOxf//+1JMAAOD/7dChQ7F27dqPHOvbt2/MmzcvZs2aFZMnT46JEyfGxRdfHGPGjIkxY8ZEv3753Iqpubk56uvr49ixY1FTUxPvvPNOVFdXx969e2PPnj2p5wEAAAAAAAB8qvL5tRgAAAAAAAAAgG7nvvvui4KCgtQz+Cc6OztjxYoV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"
				), a58(7, "youtube", 7,
				"iVBORw0KGgoAAAANSUhEUgAAAKEAAAAkCAMAAADW8qrvAAAANlBMVEX+AgDxYgDjhgD/eXnQpAC7vAD/oaMA/wClzwCH4QAx/zdf/1ty/3Sf/6D/3d2+/77d/93///85QMf8AAACr0lEQVRYw8WYWbaDIAxAsdVqAzzi/jf7GBIGZxxO89GiUbgGEkJEH+Q7DF3bti8rjRPhxTftLavpuuH77X8gwv10BLQrTfsEpHECG4TwEhUy0ItKW1Gh7Zp6AwF0KRP16GSLsApQCLKidt1igE3NZZFjKZWEXR2gaMguaSwPa54jbCoJ2Yjo+lWxpR8jhFpA0dH6jlzbIzhCdOIf8606wm814atPq8+whXDXY+WS+Y4QDtWETdYxHlmGFwm7akLRZwsRaLrVc4TtAsL7vUkIWbxRRBrCngu9xArSinvS/cuccKYhQpletjrXl3ZasRQNP+Pfe9+ZZZhd4EnW5KmYHNxwVFIZ4UwTCP1U0GqhC3+5QjiOn11CPxQGj9EJ0Io8QchM6fMIcZVw/PvsEfpOAxkUMQ9PEObvZh87KtGsEY6rU81bs46zg4SLoNiI1YRaYvGECl2aLcI1Rib0Q2gM42HuN7qeUFOEtV8HZMvwv2ikTzLyZ4PQj2WK5U62NCc8Jd2ImcghwiUzRkI/wWHcOD7nPCcI2ZhxC/BPXiJUaXWrOwjxDOHmLLMXxlhzD6EpCbc9ZdOXadF5172dEJUK83Il2jBXCmE3Eka5ErF5EPMbwgO7Xp5e30+IJBcyh2cJzQ3ZV0GoniM8n8HeTziN2DZH1PrCKaAghCd2PZ/enT9JlYQ9D8dHQFNPqMYskUuEp0+jE0IaVxakCJQt54SswYIQZci+MGVfwZaitihSuHJGSMF7MQstCWea4tpM+tKiHy4sw7zcgMWoNIdOOyWcaRIOnSAAs5T7dGVpRpi61dmOOCqYEs403nQqf1dyXwjnq3NZXU5yMmbsFmA0ZJdGhmeAS3RJA1ET6nyg7c14GtW+L8UVzuEo4zMVzgM1WKoSU5m44TJxw0VirhLDL6rE/6vBvdrCmmWnAAAAAElFTkSuQmCC"
				), a58(8, "googleplay", 3,
				"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"
				), a58(9, "discord", 7,
				"iVBORw0KGgoAAAANSUhEUgAAACwAAAAyBAMAAADVdiTZAAAAG1BMVEUA/wBI/0lu/26P/5Cl/6O8/73R/9Hn/+j///+iRuwXAAABJUlEQVQ4y83TvW7CMBQF4BsKdKVIpYxIRaJjVLUSI6JDGSNlCCOq1JC1f+CxFIL92D22E+di/ABciZB8seRj35joVZ3VN1FXBSqhRYgPJEIsSQXrAnmjL2uP5Usm81z83Bec5WM+J9T4vS8Yfzz1yFQ0v2ackKsrxr2G7d4ZPjK1O214z3no+Jdz1/EKTy1NI/w6jmcIID6JJirGe8cYdIdGIcQOwx3j/gEpI6X+qoRkGqrnd6OXFR/NRAcdOWFc6hDPera0Xk/Fozo1ck4bHsSVpg0jYJSlervGW9zWSdQXhhXozlbGek1uY9/s2hRWect7ucnsf5ld7DfosX+kcsv+AdwtDfvHdW877x/u0raB6Oa0qG35rKZhbokg41sKclQEmTr/f+SUPtWxuyYAAAAASUVORK5CYII="
				), a58(10, "insta", 3,
				"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"
				), a58(11, "emojis", 4,
				"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"
				), a58(12, "flags", 3,
				"iVBORw0KGgoAAAANSUhEUgAADhAAAABICAMAAACahq7PAAAAwFBMVEUAAABLBAEDIpUAL4YGL3nKAAMAM50AQRsAN6zQCCjcCQD+AAAQQHe2GAbrCx7NFh47PXHdEDqvIC8AUbTKIDPaIxxZS20DaUcNX6/tKTpWW1XKPkCZVSlFcE5fZqkNjEFlc4snkSDiWQoVljYqnmUGsdGlkqW7kXrZh4f7hjrOllKUoL1fsr1xrNyfp5vUoTT8lif0pwDBskQA/wDawCXPwHzkuLn/wQDuxa3/0ADM0tvM1sD+6ADz3d7o6OX///9Mo8dUAAAgAElEQVR42u2dDWOayPe29Umzbc2S5GerTyvUTe1WxjEFYQEVwvD9v9V/zoCKCgg4GtRzNyhvTRSYYS7OW+s/FAqFQqFQKBQKhULdpFp4CFAoFAqFQqFQKBQKgRCFQqFQKBQKhUKhUAiEKBQKhUKhUCgUCoVCIEShUCgUCoVCoVAoFAIhCoVCoVAoFAqFQqEQCFEoFAqFQqFQKBQKhUCIQqFQKBQKhUKhUCgEQhQKhUKhUCgUCoVCIRCiUCgUCoVC3c6IqpbwuKFQKARCFAqFQqEubxyPI3vU7oX0UEMtvJ5RKBQCIQ44sINGoVCod+2fIynC/hmBsBlA+CBFeD2jUAiE7wc8V6tfUtRqGlhe6+e5VoDH73Wb3wsfSF0WEOIN80Kv5ysDQjzvNwoGqNscPzfthtp6lKJW64sUtaR1rLKAsGkDl5kUyWup/2Qr70B8zVar1ZOi5g0Qn6SoeeD0/7KVd96/Z6t530tWv/pZihAIz9WvyroPypKsz1N8/DZ3zEPX896qj3WEQHho3HKXrWWO8vqNlipFrda3labirH+rJwTCc403ZI3DO1IkrR+Tdpz/kiIEQgTCKwNCWdfPtQLhHylCIDwAhI17YodAeJ7rh0nRyYFwhECIQIhA2BggRM+UawHC7+q79KuSgPB6By4IhGcBQmlCIEQgRCBEILx0IPwkRScGsNlsiUCIQIhA2BwgzLg4P6R0qbHHN2ghnFw0EN5LEQLhxQMhK3NY2f5x/v/ZyvsNuR09AiECIQIhAiECYQyEsvr5bPvg25uFQIhAeEVAqCEQIhDWAcLRIfgbWVWAUFWpqiIQyhMC4bFA6Dh1gHAwOIiEbDBAIEQgRCBEIEQgvDwgnM3Ws/O3t8k1AeEe+OUB4e4KBMJrAUKqSQLCqV9BCIQXD4STAzyoEjpSiVoGCFVCFoQuiE4IaR4QDofHAaGiKKbGX2BGETOFQPjivzw/j/3n5+fp9Pm574/hha/i6/vd0kIgPBYI7TcuuzIQGq1BZBQfUyMatAwEwvcBQmlqGBA2Tg0DwsY9aJMEhFer5gLhfJ66sVmPCIQygVD6A6AjgVDaB7oUINSJLCB8n5AZSUB4tToBEPY8Dm5kwifP691nw6CnepRalPL3NBRm9mPfFyNVe5zoj/ekR0njgFDXjwFCZWRqDrUdh3a7puOYtqNRpRgIgQXhZcyB8BmA8DkGwmcEwrMB4U/nTcj5WQ0IWavFjFYhEfLNsBcC4fsA4W8pah4Qyvpekf9FistE04CQ34hCPnnHHuemAeFXEiZdz/TDnqLIi9uPtz0sijVlkafyjfw38OuwLec47zW5Mocjo502Fwjf3nb8RnsIhPKA8E6KDgDhY7jW4wEg/DdbeVfyJFsHxi33ndVc5/79gJB4hqcHuu555PxAKOv+LgsIv0pR81wHpQOhpy4sy1rQuUtN01oQb58HPZXyMeVotByN+DtVvWIgVElP1e6pe98jj6PmAOHdnbAP0vmcDjfLFYFQ0RzNNk3a5RCo8CU+bzumWMg57wn/9eOXviBBDofAheMqDQyB8AggtN/WsisB4QBob8CMXCQ0DDYAZhwgECIQSgVCIwiCVwlAGEXTT1cIhCQkhE/q1QHh1wIkLALCFA7GA7IuAmEZIJzsuomO3paTawDCLPZ7KFx5uUC4+ZjvCoRtQMCO0lbabQWW4b2tdDrJprMCIfECnb8FVFW1YOEhEMoGwtHoMoDw258KQKh6M2tudToc9UajTmc2tyxCtnGQEA6DYm4ZxxLOJutdMvqxXm9CqUZVeIHXXq9UP2ZIUREQjsexx+hyOUwvVwJCzoOUmpqmrN1HOUVTvi7/vO9YBRP3UR+B8HxA+PNtSz/LAyGA3qDl+628QEIWb40GBkMgRCCUCYSB67oygJAxThbXB4RfQzV8ClVyaiCM7Q7nA8IN1GUgYT4QbuFgMiBT2mcBwoyjcyFAOIKx/fKNAyDXquDEiK/oIRAiENYBwi6YB++h4cVA2Gq1+ViRz3XPDoQLVV/AGwdCulCph0AoFwhHHIsuAwhZFSCks85oDpg3B+izJp2RuRMnqCY42LGWSVqZ0UTNB0KwmlGd/4tfbF3rVfZ0OGK8mhs5SB1HWAbHuj5OL1cBQiV2Ft2yBiqm49iOlmshfDGABMf92CrYh6X+GFYZ/ZewtBAI6wOh87YjpywQJg6jQH15BxRYEXxK2TYRIhAeD4SWdeMWQlsKEC5duEyH1waEnhqGfDotEIZEja/XLgnPBITbYLeDhHlAON39X3H7kuE2ehgICblYIEzfFUYbC+F8hkBYDgiNAQJh2lW03b5/6HRWRBjzYKcTrz83EGrwo7ocCF29bChhqzVdKR7yTDeqlFTmBoBwNLoIIBxOoz/lgZCYnPbmlupZI4uQGaDhfMdp1JuBAXE0s/jlCI6jYEj08oBwZOp/qG261KUm1fhEpy900gAg/Ku/XPaFp6j42SxXAULNMSGfjDANbtZ2TZs62bllVjGEsVVwbRpkAIQMYwjPAYQrb1HH5nIO+Y1uH+eVw2hREGEMjLtOowiExwPhcnnbQOi6tgQg5FgZP7n4cl1AGJIw5NMpYwhDkr5kC5FQHhDuw930EBBm/I9V++qeHgjDXi8sAYSy+h+5LqPzFQ6mE8vMMIawHBAazEAL4ZY6gILgLtpttR8e2q0uuI3Cms7ZYwiJRij1KJ80qhO9rMtobtPzK5WduAEgtKyLcBmdTvmpKw+E1JosZrMO7VijiTqbUWqZO0BIKKfB+WQ+55fjfD6aT0YdmucyOjFtW1N6HepyGZQ+9hSV86F5FBAGTAYQJpbB3OUcIFRS6pqm6UBqUWraKQBUqMP/dbPyjQqXUWEQjK2C47S1sDlASLxQuP6QqwPCJJmMo3+I+9kPulOYXGbrOGc4jDIPbAYq8Viq5gQTTqNb1IhAeDwQvr1dIhDOpUi4jMqxEK6v1GNCCRuYVCZUiXpSl1Fv96L1zgKEHwqQMAsIM/det6+j3UYPAiHp9cjFAiFEEIImtQHsfEDY6zULCH/4kSHDZfTl5WqAEMyCfFAMHMhhUEAhPJLpgLHw7EllNJ3ToGZqlAOhpiIQ3mhSGeYz/095l9HZxKTW0pqLaW5ROrJ2XUZVy5ot58kFOV/O5paa4zLKf5dti8Inugjpg6sS1piTI4CQUV0GEH4QP/nLWUCoUNMB2U4i2+Q4qFFnuXQ2YYR8nyWscRxqCgui0E4MYT+2CvbT1sI+Ka1TAmH6dk6uCwhj8+BST3e1+rLASJg+zvsOoyw1RlwjIeMtbi/TKALh0UA4e3ub3TIQGm7gHvrYr6WSyqwv6CECYXkgJPtXLTkPEOYj4T4Q5uy5aV/Huo0WAqFHWAjrQka8o4HQ998BCB9jIHxsOhCO+M9IvDUFCH+wiG2ZC+sCoetekctofDITEIzBMF5zf/4so+ZGCIQnAMKRdQlACL1qeSDsjEbz+RKAD0IELTAB7hck3OBggoQ5WUZHlHL8sx8fe7Mk3aiqPgIQTg4RYeZ5Z1xgIIxLg8cL9YCwYCA0LABCxXTWiplw6ZhgIYRlW1mlmYEF2M5fbHEA+JsdBxWCy+gUMotOVzGE05fkha9qRFIZdeXv43GFUaheDxCuzIPP233tc4GRMH2cjV2H0VBN9w3rA7d2GjUQCCUCISR7uGUgfA3cA0D4ahivxmt5IDwilLCBMYQkDPl0MiAkWZctORMQ5oHeLhDm2hLT7at7OiAMe19VWKd+3XYbrQWEX76U6X8Crn/5v/h99bKe/7fc9vV9cLQTQJjAV7OAEEhw8jjhP4eY8NBxzgPCEuONfR6MtgIIfU6EA6MGEJrm1QBh50EMisEm2I7BMF7q8A3nB0KNkyDVqcn/qQiEsoHQmk/qE+E5Ywh9Nq1Uh3DiLsE2KLS0aVYdQuEtKnYQczl1CO9VKMLAgZD09Efy+PideP97BCC0TZv2KgMhMwydGj5jC3DKM+jAMFg9IBwXVB7M9htdWQjtDRDGs/bSARMg/05LgXyKueQguHRiIEzJXgMhWAWnmxjC6cZa2AQgVFfhMitzYTkivAQgXJUefN7tbJ+d3OQyW8fZ33YYzXMhW2Ua9Su6jLJFyBAICzxGS/iMXgoQmk51C+GrW0h7r4YLXhhuUAEIo2j65VrKTjx5nAa9UwGhl33derntQlbsaFFk4A4QFkQbbrWvr+2TuYweXF0eCKefPk1LAmHAghyxoNz29X1wzmFwtB1C+LgcNQwIe7PHnvU4mz1avcdZrxlAyO92/s4Kw48G1YGwb1n9q8kyyseGGY1NrH4fIIyFQCgdCOdLToPz2fXVIeyo1FoZBUfWborRZP18bRQczTbzO0Covuhmj7o2WRBPDQjxyZhjBnXdnklftF51IBxoPufBUERpMUMb1APCD9RZmjn5Y/qc5+iHfCBU6I6J0AbfUMBePqspXZMv28vYOJjGQbObdhkF8+AzVKUXL30IH3x5gZcqWUb/kqLdG8/3eCzhpT1Iv18FEK5qTezz4IYI9ytQ7GQZHaQcRsP97iFMZRodVMwyykJd0zT9IBDKArlLA8IZnJ/Z+YBQ1vHJoDveYVBqVmJCEUPoGEYBD7oB2BANzoUlvxdLqOF9gVCRIgAw1ePTiYAwzBsRhKduX0W5Q6dpICxKPrMNhEe5jRYDobpaqx4LhOzTcPiJlQTCo7W+D77N+cCkN0/5jIJrglUeCJdSdOD4LBbRPHTdcA5zx/Tz0oAQvGEGe2v8Gi6j+mikX42FUFHuO/ttqMNHkqe2EP69rbGqEkJERXp45e/k7xLCshMlgXC2nM/567w2EMq6X8gah29Stljbcvf/qruzS5Ddb9CxFnKMs4m/YIuQqAbz+GVJXb679qKziv0PM4yBPmDM8I2WwcFwMChhIszkprv5Mjd9zHg5vytKKqNoUHl+K5BwRYYxBa45cLmhQYggTAMhEzGE41UMIVvHEFZJKnMaIPT2eJBD4hUA4c91rYlBVnc7WFeg+FlcmD5aO4Iydb97UNnOTqWBMGA61dJEWB8IGW8cVwiEItJz2SAgZGWc1rOA0JxTi/IfPlMJCG3DfC3gQcOIadMoCjVMfa+Fy+r7jcoDwo4UcSAEFCRPJypMT/JGBOSMQLiPhGkgLCpP8WG3fXVPBIRktZYcC4TDT77/aXhuT5kkuGXL7japEFJ4DiBc8FM8X7hg6XEX8ygKFw0AQt6XbEcQis5lUAMIzU7HvBYgVDqdbAshX39uIPQiYrosJF4UmDQMEQjlWghnnAlH1rLxQPgNyoX8qQKEo+1bbRYQ7tgLs4FwYbvQUwW26vlsOiaqZ/hT36PwC0PXdqsCITMGA52PdSGOi496NQ6ErBYQ9vV8n1G+qX+g7ITKmU+kjAHrIH9fAgXawlF0ueHApWNDDlJTVXazjIJB8HltFVwv8Zf3B8L4uW64f6NTLxsI7XV1KftF1NDZzWSW2qEYCFmuw+iW0yirCoSuy4kQZBwHhP4Qvt7QvzogjM/O4RvG9wOC56PfD+rg8eE0GIZhiQ4owz6oal81/qNWsBEetBAawevq978WJCNNvhd8bFcAofgC1UtQNBAIQ+/J855OYyEM84cE4Ynb14EdvIMJT7MHZKTu58kHQo//Tm+1ln+gVF6ZKkDox1XOPn2Kp00JtPPG0qeqTowmo0ZZCBdu5MZPk8w5n100wEIId600EA4M8VSS7buMHjwVVqdjHT5fGUCYfoad6nhSq88OhN1WN8sd8P6+C/llzgqEJApVjbKIhBHVVMJb63mBUFbd0Q9SJK/f2KSUubeWS6vpQJicNTaUCoReLCg2EX7NA0I3cBnjA137kZDxcPj3wg98gwOhDSMR2FjZQsiJUDOEaZAN6EC817IQJpUH/yq/bSuZELgo2XEcoRsDoLAMLpcbi6HwGjX3607wzmAcWwX7sVWwv7YW8lV9r7ROBITx6CaD/g5FEjYaCH+mStGvokYgGei0f/e8ayLcMRLmNlTWzRwestwL8YDLKAt0LRY7BginU2AUxqbTqwDC0doLISkQNl+vGNUCQsKikDcf9VggZGwRLrgOEWGWhZAmJ1qj8mIIXw3DXe0bGPn7Jd/LXohh5cZKOL14IORDnKeQkdMAIckHQnJ8+2LvAIS9wjKKVYEwVIkXqpwyw9XaMCI9NfRInGqrChCy/WEgO6ofI6TM98rP31Ity+g5XEbd+bqx89ni7yXrfloMhGzfP3TAh2yM/agKhAs+/hwt6gDhwQs6PH8dQlGMfl9K/nE+FRB6EYPKE1EYhZqqwvMaBEKZQDiHHJzLWcOBcPNo7Y9MIFzdjDpqh0/ZQMhcPuLgPMiBsEfGL8bfwdgdfw8JB0Lbjfj6oNp41RgYwIBUb2naQNcHgxZfcdgQIoubdk6gopimCBgUsYIikyjw4NJOeBCqbWTHjvb7zy/PWy9j/vLyAjNVTvwpgLCX4TCaAGEossReJBBurH+c9pgvnkD7PkfCIPD9laVwmdrJLgGEftUkE0VAyDimMk1rp0yE9YDQn7LYZZRN/auwEFpvObJqWQj50JDA+9FACDio83/hoiIQmhafqJA5n1tmhSyjhXUIjde1ubEo90zyvRbuInIdxvvodbGU6YUDYRSpwkR1EiBU84FQrdW+DLj7Jc8zRes38q6fA08GE1QlBx8g7jUVNazV3rMthEnsoLcBQi8dS1jJZXT6acpg4kpmjwHmEIAwPAzMmbc1y3prHBDythu6m57BDRcFNsJzAaG4pnesgVlVCfO/l5vIgebsrJYuHAjb3ZaSFUOotLvtMwNhCD7lKolYFMIbX0IglAeEI46CIgvnqNFAmD5n305hIYS6BF42EAYLDoSMcx+UnRj/PfYN3/VU75Hagb3gpBhU83RgBriMDlqtQUKDwkBosHNxU8ZJpJqtCVtgkkJmKeyCS+EtCiUIs4EQDII+hA8Kq+DL87O/sha+PxDGj1KzsC+MoAaFeoFAmDYPcta7myYl6e8+vPgwEkuQME2NKSNhbkOdbo0Ru32ubkEe+gMWQv45GFgIPV3XjwHCIYsAeH0/YsPrcBmdZPPgpJbL6P8SHgQ0PAoIWbjQTcsyaToxbCkg1My5ZWlad6zrrjs3tQoWwqAgOPDVeN0MEQ9bCHn/C6MJZ7HlbHzZQMg7KOKFX08BhGFRGElYo30ZopGv717s33wglBXrktFYSJ32ng2Eq9jBTVKZrb9RLYbwyyf/05e92Vr9mMdRkAOhd4gIc4BwBGHLTbMQsp2nSCZ7dwuhuHp3M8j4H6sAYeTO9sqbuZduIbxXOg/7QYRt5aGj3J8ZCCHi3VPDiL8RFR62HAuEw2kFXTsQzhJfUWvWZCD8tmU8KAuEi+1ni0UxhPdfwUI4yQTCOIQQgJD3qJphEPeF6V+/CiBknBQLgwizjg+YCA3IJDPQAA3FYh1uGh4Y+GRtzwRCzdGouTIQAhPG1SaWjgnxg46SA4Rr0+BLf8da+PLeLqPJ3TsjhJDlkWLTgdDZBgn3bivJ6NAPgsAYQjXc7f2cQ0A4TLuM9uMP38+zFxQDIe+iWbBwDU0b+MwwfOFCVgsI2RQcYcEAyvjsVQBhkk1mW8uaMYQkCuMZNQxD7wggDBcLCg8Eqb4IKwPhpKt1v/rG2DAqASF4W7zm0eBrsHEZ5UD4+9U9kFQmHk5sP5SrEErYQJdRNWTe02lcRmUDYcyDayAMgvcBwhpuo3lAGOY1yLAGEPp85Ofvzdbqx9QVEKr1LITLtwa6jLJFumtYsKiZQPixGhBGC3O7TZuLK3AZ7XTv94Hwvts5u8sojDIi4nks9PRQBhB+q1Z24upjCI/SeYDwz/Zzt5JAmOMfml6V1D4gvTBk/C0TCHVKGfg3gIVQJYbueS9/93tQh3BhC8cHGlbq5/0YCA0Bg0ayUCeGUNeLxzpZ2zPPu2I6pqkJBHSoQMKV1yh4k2o55UbGUdoqGFsLI7AWRi/vnlQmfoy6R4NefKbCy4sh/LmLEu5OP/tyNw0CNt0DwlUFityG+uV5jwcFEdYAQoO3ocClVGtrbSPyfebWBUJ/CikZ7u4gDUOxz+hBV7TSDyZOn1TGKukuehgIvSihQCIcaI6xEIKB0LJMvaqF0FjMJ5qmffXHZGzMF0YFC6Hr2tlACBXrDXf9q15d47ebU45QfK8FR8t4OAGuWfEXWAhr4fTT5QIhvxFxyvcuAAgFDwZGAoTMMN7JQljDbfQsQBgNN+lFh8WZRg89uCEcCD3+E5KwDhA+Ps6aBoQLd793yPcZPScQsiOBMIrMlHfayLyCGMJ2q91R2p220k6osN0Wix2+4fwWQsa6HuHNgXjCXIhAeGtAuD0k/CYPCNcxhJ2Ol5NlNNT+6KGIJORASJjvTnXDGPa+f6exZ7j2Z+xVchllgIFGixngLer7YmlQ3UI4pPM5LbARZm/PPu9dQYSmYy9pYiYENHS6mmPaWh4Q9qEIYcYLny4aCM9Sf6lCwygGwnSS0Sn4jVYGwi/rRBNk0466dYCQd84vPgsZM9qQNCmuZnByIPyfFJ0ly+ho+8yMeu8OhOFCjy2Ei6oWwrFujTSaAKGljyUA4atrO79/uysToQEGwrldCwi9p8/lhEBYFwgDFvwAt4R/jEAAIQuuAAi9/BbpvScQRiSEEbB4qweEj020EG4xodsUC2H041ggTLmNztzoCoDwofNw3364V+6VJLeMKED20L5/6JzdQhgJIPQQCBEIk65VHhCm7sR5QBjpLo2Tm9vEI1Pf9fXhy1RdEA6EizoWQsMQEBgNRABhBKZCViepzHC5LPQZzdyefd4Vk6OfqfA3RZAg2AqpAvlmtGyPUQBCv0CX7DLaSCDMcBlNlaN/XjuOMlbZZVTYA7fsg1zPdVxGeZPz+dVt+Atz4YchC2rHEFZxGb0gINxyG10eUXZCmssoCxcUYgj1qjGEmq7PvmoQQ8hlzHRdk+Ay6tpu8AqFCN25474afC+3EAjzXEY99fPnywXCS3AZ5exncBCMFRgBv3h+GD8M41/2I7hol1GS1yDrxBBKdBkFFoTg0si7HiBc7MYQLhoChMbRQBgtJnF7nhxK1nUhMYT3CpgI77vrzDLgQqp02nx0eO6kMikLIbqM3iYQTk9lISwDhDBKSYCQk854PNWHY18PPGrbkBi/cgwhWAXhVjoALgQ09PkaozoQjnV9XIRImdtzgJDzoOaALVDjMKjFdQkVDoPmMpsHAQhlnfimJZVpKBDuJZW5e0lAEGo/ro2E20BYJqkMbzV3fUL6d+l2dFcrqQwUwfD911fj1TDGUeDWBsIqSWUuCgjnm3MzPwIIpSWVgSyjkGS0cpZRy/Csidrt9vtj3nvNPWMmIanMqw1RhK+uy1+NgPMgh40c79KCpDIh+fz5goHwIpLKsHQTASthFInZf/kGdnYglJhUJvKe8u2D75hUJoIK3EQNw4Pf61KAUFS7sdIxhIsCN4WzAiE7HgjdglyGFwiESqvdeVA6UJAQbIR86j48dJSHTrulvAcQsrgolR+VB8J1Xpj4ucy0nhAIGxdDKDOpTAmX0WgBWUYht4ytesw3Qg/q0zOPxEAYuItqWUZ9yDJqDJhL4TGr6/oAhnWyjBZVIczdnnfeFUdkFAU0dBQBhGA0tE2q3F8iEB5TdqKpQLhddmJ59/ySpBl9eU45jk6dqmUnshtSvbITAWOvr4vFqwfZRgNWHwgrlJ24KCBM0/oxhemllZ1gTIzDqtchJNrc1LTu83O3q3XnGpFSdsIwfrvGb4gjBH9RsRhULDtRCQcbCYSXUHaCGcFGcVNPyqIGQQ4QXkbZCShFWOCR+n5lJyLmcSxl0dUAYbSbZtRsgMvox6ikifDQ+bJWDdq6CiBM/EYV4D8++LsHQlQ6hcf5dGUnAAJDLwrD0Icb2LgcEMoajyEQNqDsRHpQ+Oc0henNPCAUdQj5r0uA0PceCYFCtRwIheHQrQaEcDP1dWOx8H3+y/xFYLy8GOx83JQDhBrl/xxTobapmFCE0HZMExAxFwhlJfNoWmH65gLhlpFw8LKOINzYB59fqhemz2xHd/UK00MFX183qf7Kx+hnKkx/SUA4KhtCeLbC9PwQ8xsrY4ezWm2D3WS8ACDUOA5yzRdjTUZh+ldOiq984yv/ETO5BSryCtN7nz9fOBBeRGH6gEWsYj92YIdmFKaPHynk/4l3LUwfhmW+1yW5jC7CTc8QLhrgMvoxOUODI4EwmEA2GcgtMwmuAQg77XvxCilkFFGPHtLMgC9pu3PuwvQQREg8HUqweACHBIHwhoAwDhgc7lk0hlKAcLVNofQfqmWXnYjWQEg4BvLpcaR6ZNJLgDA4EAudMQIbMMiAwCArG1+kVB+wOllGZQLh/T1EDjompTaUmrZtm3IeNCFyOA8Iu1J0IiCMH3dnZI9RHy8YCNNGQhtIsB+bCF82uUbtLPNgFhDyq3DjM5rnpL3eqSQQRswNAhaEYbA2FNQEwsgX5YGGh4NrLwkI52kgnB8DhBwJeW/0/fvRQAgdEmMlrsP9LKMAhJraFUBoVCk74YD5L4cIYQIDoStMhcFrMRDG0d0smasSPNhYIHwKvSfPezoNEIYVPUYllnU5ERCSup8nFwj3AglTf6IKEPqxk9mnT/G08VY77XG+GCAE/1DTTPLKuKYJXqS1j88GRSpfhx/3fUYj9uPIpDJxNhnILVM9qUzqNHxPdTyp1ecGwo7SuVe47qHyoIggfFDa8ZpOtqHwtEDoER2Syuge1KBAILwlIPTjiME/bJsHp3+kACGJpf4QYz87GwiTQoSckQhkqoSGyamwZ9uHyxBm1yEE6wnHQTYwmM9nFgHzDx+f7MQxBTllKgLhvaJp1HRszdYUalKb06HZLTjvzQbCJM/ottPo96a4ytQHwpSRcJBmwecPd3dDzoODTPNgFhAardW9LyMm9xvb2aksEEIW+iDwAnfdlFhbyXMAAAzqSURBVOoCYRS7jB4+PpcEhKtsMsuDPqOt1k8pkncd7gKhGwOh0NytAoS24bzmV6Z/hW2xCdEIfh8qTB+lrIMVvUUlA+FMijgQAgqSJ/2fo5R33kk1A6FEUNkax0zXpwycVb0MIFxtYdOdAdB2O9F+1VMhEG4TYfrIVMwyChp+8v3iDKPx8YHMsnxK/9RYviiXUTDumy5nQT5FhZ5WZwPClYlwnwiNHSAsfK5jdSyRZ3TGZ4ofAGUAYUqPm4/5mMldZwLC+5j+hEkwrkAoqtXDuvszA6HwjfF1SCrjMU6H4ZmB0JKizM+T7uhKf54fUnQ5QJgQ4DdxC/ETDhxGciyEq6eT/xQBIaNjbeFy8nMpB0I1tjNNTE6ItquN9bByPyasg4MB1O4eiJr0Zca92XljCqoQjqsCoWKCp6gNqYU1R3NoXvxgAoShFJ0KCL+He0RIrgEINxUonHRl+j6Hwf7L3bOzVWsiFwjhWcSg5W89Y8lw0fZb/CLdNhIeBEIYy6X/R30gLHl8Lq3shLUuSTg6CxD+kaJdIDQHg7nFUVDXta5mzgcDKsVCmIQSunFAYT42/t7qoOPXGjgoEwhl9RtPT6rHJ+M0QBhWMxCeBgh3cZBN00C4vzUXCJ/sXycBwq/p9V+PA0L2aTj8VCImJIle2Q+uFK8hKbf9smIIOQPOOQlyLpxzOmRNAEJjHdiztXrgVwHCiWUlo8+RZU0uHwhjz9CO0um247oTitLuCttg7Et6RiB8gfhqxjw18giEOyAQ3hYQ/tmMV7992xgw2OEYwsiMD/0sOQUZ3Q1zEzlCdna/EapTXYQKBkEAdsKJabsL3pfB/6ZT4tV5sGXECUbhhZU7PvsM9IE6S7OfzUd9c+nQDxViCGHqUk3r2l0RUci/J+0WAqGsE9+Tor0boboaVaxw8FD04KUA4boCxRYRiswyKx50sgZAaWemiNMg0F4OEforbBR7RX5FINxSbkcvC3guCAjnGwocHfAZbToQ0vEYCp3qhqFTC5Z0GTGEiZEwELlG565RDggTl8PP1wGE5ImP7p+8EwHhCrx2lZ9ESpYKcBCGPxsgzN4jCwi1f36dBAhDyG0D+aghTpekk9bUAMIIHEZL9PPCV8lTxStRyY48Um67PCCUdf8quEht/mP/M7ftObzDYvXrWTYQflzf7fxNIOEPI/I/VgBCy8qev1ggXFsBO53YQtjp7G06ERDu+TgwTzdC1fd94jFdZaFX7jr8JkUIhIeAUFboRA7hfcsYr0JO+lwg3G+co901e72Nk9H/pHNWqrZpJkXtILzOtpMF07Rpr1a/ynxDuIwahl8bCP+6my9zC0+Ml/O7shZCZSUNyo0KC6ECWWa6sUvAZQLh4/o+Dsk3wqgcD14EEK78RldE+OFDwoROprfoHhAaLYOB7W/tD+pveY1+81P7DVpsy28UgfAIINxiwHmhz2jTgbCuIMto4Lq/i2UYQVAMjTvtK1Q/f74SIPSgLD0JTwWE2U6jJDoXEGbD3jYQFiBhun1pv36dBghX7Lw/1KwDhNGXL2X6eVkDqQsCwpgJHfFj172eZQPhj82AjA/PBj8GfIy270JafL5GuQsXCoSb5DLtOIaw3e4cSN5zKiD0KDWpSiDVqKqZJi2XVAqB8EqAEKwV2+NVUYRiWB4I91XqfpruHUfmxDRHYnYCPJhQoMlX07r9qi8MhL5f9rxnmQH1fJ9RvqlfFgg1G3LJKOAl6kAeGZtq1FS0rqhLr+UBIZGi0wHhqhphMgxqVOzEkUC4Si6z1NNdrb7MSCaTBYSsJShv4zTKx1upfDKrGyJjvtiN741AKAMIR2+z9OKsyGf0ioHQcINDQHhYW+0rJJ8/Xw0QqqFK+HQyIMwiQhKdCQjzQG8XCHP33LSvpx+/LgQIy9zkbxUIf8Z2QjFT4XreA788INxdcRgI00S4uWX++FgFCCucr8sCQuE3yr+70jmYzfVUQBhqpkpVjwNhqKp8AE4iBMJbAsJvOyaMP35UUIvwNED4yK+7SWwjpK5tu248C5hYv18VWUZZdAQQFlUizNmWed6huIRC75Wldq8tFQUYUDEd5d404/fTJpU5HRByJPRCYSIkDQumPxoI10ZCPSlG+EEvMA/uuowarUE0MKKN0yiYrKfDL1+G043Bmg34VoPvuJVYBoGwPhBOdgBwNLlJIAzy6xBWAsL1leo9fUYgrGBR8cr6i8oGwnxX0H0gzNl73b6OcBc9NxCW6+dvEwhjJvxZ9Xo+JRB+/LEH8P6PjwiEsboxEHbfDQgjQqmpifL0xDSpFiIQ3hQQJlXp/SkMS5LxalZixJMCISdC29YUSFbCidCdgB8plOwzj+pXy5oHo+KyE8Nh8fJBIDQdDXxDAQj5FCMgLAAQOs79BQNhU7OrHQ+EmwoUDtisncxaE7lJZTjkQZrb/SSi0bZjKezF4RGBUI7LaKXruWlA+CRFwkLo2hKAMEjyO3vq58/XBIQhCUM+BacDwhixNubBMDoLEBYli8kCwkwkXLUv7dcvBMLrAMI61/NJgfDjx+3EDszIKjtxo0AIFQihGuH7AWGociAEHmQeNVUvQiC8LSD8sheRzYZfzg2EnAj1P5wA6WTiunQ0MSmdjql5xn61IJ+oXrx8OIbQXAokdDQoTe+YYh1/Ey6jyqmzjCIQ1gPCdXKZVCn6ogHQVgvacxrdf1qRRBkygyEQIhDKBMJAjoVw6R7nLdrUGEI1DPmknxAI4bCp8fXaPRCCIw8Ii3KH5gBhBhLG7es4d1G5QCirLhkCYdnrOYv9HgpXVgXCNBJm4eBNA2FcmP79gJAToUkEEIYaJaWvQ1+KEAjfHwgTG2EZHjwdED4+qsQGH1Fb06Bku2nrWu+xAUA4NJdLc7ixDG6W/6qQVMZcmmAUhCwyprAJKksBhDkhhJeQVOb6gXBdgSKv1kR+HULhNJrONLr30CXJMDrYyYKLQIhAeCQQBq4rx2WUHY2DTQTCr6EaPp3UZTQZVgkd7n9kqQAH84FwDwlF+zrSXRSBEIHwEBBCpQmR5SG3MP3NAuFDt/vwrkDI+wJPBFuxsvZBmeVzEAjfHQi/DNN2DP/bl3cBwsceFSBoTG1BhL1eqX7VkKICC+FwuRymLYPr5dJAqAm3UQW8ROM5AYQihlDLtxAiEL47EG78Rou8RTML0w+STKO5PqNGkmF0ECEQIhDKtRAGwauUpDLHBA82t+xESAif9FMDYdn+RyIQ5uFgERDuICG0L+3Xr7MAYUaEPwLh7QBhoW4ZCMvopEAo0kJAkZUq1yEC4fUAYZJKRqRD/Fa43ymBkCPhZEKpplFzMhmV7VdlKZfxxlzAgVAWbLhZLg2EHPw05Z6ugVBxTLATmteQVObqgXCVXCY3mUweECZOo0V/ei/DKAIhAqEEIJQifj0fFzzY3KQyHgn5ZFwdEObjYDEQbiEhvw5//DoTEGYIgfAmYgibA4Sb4BoEwuOuQwTCawJCSDf658/w26GdTguEcQ2KSaV+9eRAuGcpLFK2hdCklEMgfxPwp4AllDNi1zS7QIZdBMLmAmFiJLQPD4D2cG8QGcV/29jJMIpAeE4glKWmAWHT1DQglOqi2SAgvFYhEN4mEEpSMRAe5K7Nf5clBMIzutBLAMKm6WxAWEpnAMKJ2WskEI51fVwPCDOyzMR5R5MIw2wglCUEwuOA8NcvxynzRHz3Nw8GB2uesMEgQiB8HyD8T5KaBoT/NUxNA0Jp36thA6D/rlQIhLcJhPIvpOOA8F0/xiUAoaSkMqfsn+sAYeP6w1sDwoltm40EwqKqhBWBkEMg1ZRiy7C0CwiB8FggLOcitUd7Zf48O90TKQRCBEIEQgRCBMIYCGXpJoBwT3lAWMJShEB4E0AoqewEAiEC4ZaobdudJgJhKVVwFVYUBMJrBsKan0faeUcgRCC8JiBsGDghEF4WEEr7PAiECIQIhAiECITnAcKeWSWIsHlA2LiBCwIhAuExQChL1wqEsoRAWAiEjfteCITnOc5MihAIEQgRCG8JCK+0X729GMJRr0oMobTjLAkIpX0eBEIEwiYAobTPc6VAKO34IBAiECIQnuw4IxAiECIQ3g4QXm1/eHNAWK1fRSA8lwXjWiULCJtmGb7Sz3O1T/7we93k90IgvDAgRF3m9XxtQIjn/TaBEHWb42e89HHAikKhUDfdPzcMCFGXeiE1BAhxvIFCoRAIUSgUCoXCATTqNoEQhUKhEAhRKBQKhUKhLuPJAh43FAqFQIhCoVAoFAqFQqFQKARCFAqFQqFQKBQKhUIhEKJQKBQKhUKhUCgUCoEQhUKhUCgUCoVCoVAIhCgUCoVCoVAoFAqFQiBEoVAoFAqFQqFQKBQCIQqFQqFQKBQKhUKhEAhRKBQKhUKhUCgUCoVAiEKhUCgUCoVCoVCoYv0fISarP50fnqYAAAAASUVORK5CYII="
				), a58(13, "bestTeam", 5,
				"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"
				), a58(14, "bestPlayer", 5,
				"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"
				), a58(15, "zoom", 6,
				"iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuBAMAAACllzYEAAAAHlBMVEUAAAAhIyA3ODZTVVJrbWqEhoOkpqO8v7vX2tb///8goTJXAAABaElEQVQ4y32Tu1ODQBDGL8QAdlg5dml8dZTa2TijXQpnIh2TwoQOxwehi2PB0flKYP/b7HFv5nALBn5337d7ewshXZyuKX2PST8egUW76OE7EJFa+BhJ9bSsUWFaeTV3GKHbn8EvlB79bjSv4VO8jUr4VdiHNnK938MHPie0Yh+ZLqmGuNsJ7CNURgewI5qPoRE86GwkJyWIBIfcUfJrmMm0sclDyDnPWmLyADacl8jnRbEGKIoiJRP4EmU2LJmIDfLvAf7z/37mv6IUm08pzbV/rx5f1pPA1Fn/iX3eS3nekAslz7gcGw9bg3uqn6Rup5oH+uaTLpO4r0SmZVuUFE2lfTc+z1qr9+BVtGJqzq1RHNfQdAtnrEW75UwuXOFgvj3crpCyDu6UIpP9fPHZU5XkiYVXvsXIPcc+VwspzY2pPorE/NgCfYK+QJ5+QFA6fjQt2A4IWuIWODixe2ELcuIUNJGL+zQle92exY5pfDIaAAAAAElFTkSuQmCC"
				), a58(16, "apple", 3,
				"iVBORw0KGgoAAAANSUhEUgAAALQAAAA8BAMAAAA9AI20AAAAG1BMVEUAAAAjJCJUVlOEhoOanZkA/wC8vrvW2dX7/fq38z8cAAAEbUlEQVRYw+2YzXOiSBTAGzW6x8ZY6pGYFMMxUct4JGbLcMwld9QpliNkLeUqUvT7s+e9BoUITpIpuWxtp0IJdP943/3B3t7eXtnF2xViGZIbf1+8mVcS3YQKmk3o16AKtLhCdAsqad4be3WrQcdX7BUqalesURXaZM2q0DZr/TfQQVVo8fTXb/LgzO9SiQpon/WPg0fjk5j3cuNnH74ZQPcztOBsegz6xnP7i+i99Tk6ZOwoadwH34LnR5jDBB6j9RjR4vkF4pEF6wmho1EQOyP83uwWuisX1uPgPNpmdciho/5efwiWoiZau86T5QX+ZACL+S0MpEKDVW9/PTMAljq0R026P4/WmJFHx30v2E/9+GFj7KzI8IIZ+K6AZdyCAXbowd3ewN9kkA4McYB+Hs078BG9gNgI/12trJ1L6BGEVjRoRwbZOsbrfipaqa1nUXvQOY+eB1kUIXpv+BAZ0VM8DI5od7id4auh7DBK0VOJ/rEtt7WYqXoAmxvlLn0f94Tp7qx3K24LFRL0IrCDOxiIzgZtLbqim6INQosevJSiTZwtr2ccr6lWsaJ2IFaRocM4Re/x0WIwhEV7hD2e1GmCjtUA0fB0Y5Shw9x8bCWPtlu6BIeswD95K7YiTT6xpWQJZG7ic7ovQ9/n0MZFa4jIkeuXLU/hpYXO0H4O7V4WbWfkWvZ6NT4zbp3F6HfQOVNzpXx8RDHalcX0c7SZobM5XpwzjqlMHA0/azf/FL1XeKlLBccKF6G7v4vObL2rm6WzciznC631NXTO1pl97ZZHKtxMl/wOdWiLG+UxQVO+btwFV7AMrDk99bvvbYhvFL2A9op5jnL1Q1KB38lgDxUz/a5gvYM8CsToUsUFr85rMqWnp+hdDt08mtSKGKI413/yOmaVMl8m+aQpE9nBbGzBV17WaHtPuXYipm+0xil6n0Mr7sGkgSAVUBxMqSAkWbVmmmBtqp9k63v8t2uotgs+dgwP9jyi4/xOJHVkqJBNEN2ieLBCikSvlqxWsJcu0YKCCHn0wqb6eojXrPLxIpp8aKJMvE/mnYZknJ1ySEfyCaFJL7SbVycFHMc5uCpDm0Vjmw3HMXGEDG5mkBJSk6Qt0T6IllLihdCaHD09RfvF0id7KglaFNBk9lN0nXZfBYNEhdInmIoNbwoGiZ1EqYJBWuWrJ+20PkX0CZQWeDN1I0LsuizuFAWmlBoSNwKhZXJugwLaP7VH4jGth8EXwELB4OtiPDRlOP3ACwazjY6+J2fXJdrHjlExQmRWfUh0WwY/ysbV6xkWrZDx8cMxZRwNlfDYLYqkk0cJHbGOo9VKljgLpky2K04SJROxfIXxynVOfg+VBcal/O47S9YUe/Sy0ORTQsswM0rQ4iepsnEO96pcaYdqwI31YCINOrtNtV2pqpxl1nNUd0hPo7lcJg0m39rLpEU7F3cX2yb9jz5paRJ8WNF9BV3hRrrC7X+FhxYVHrVUeEBU5bFWhYdxb6+Nf7YXbpv0CLGqg89fkK30UIXyeWIAAAAASUVORK5CYII="
				), a58(17, "loading", 6,
				"iVBORw0KGgoAAAANSUhEUgAAAZEAAABGBAMAAAD/Q7RHAAAAGFBMVEUAAAAnKSZKTElucG2Fh4SoqqfLzcr///+y5yZlAAAEnUlEQVRo3u3aS3PaMBAAYGNsuHoy0+TKTJv6SjNNfeWSciVNJlydF7qGl/n7JTGSd1e7wgaFaWfMKfFD1qeXV5KD8cb8kuC//rWSVtJKWkkraSWtpJW0klbSSlpJK2klraSV/KuSbw9qe8HsfnCyfHVuZu95Kmb3iUdJ+KAvKf7gM119vDoUb8Bv9gLsu2PD97+n4O/tr1/+OzHXXiqTRjHyJukqkLcndKqnDw94yTYfty7JoyD5jtIYeZJ0FEr2Fp670EcnkgScYiRrXkJLI/EjyUjOhtzduSwpBrJEJ4YloSJJPHqRRDRnK3DSPHIpS8w5TjLnJJlVGIkPydjKWdVsw+pZDokueE5SMJKunULuQcIky5a/S7KQJbtiQZLUTmHlQcIkW13YYyqKkRQOycKWKNcjD5dwyebMYJA7JLscspLCknAJgLHxUEnEJbtkmAuXZC5LysqEEq4V1OkoeySm/bxenf22ujd41NolWTskCyoxxfNydXajrL55qCSDXe4LeaNHdl8wkiLofP2NxwNeUhBJiKKJiBbUwRKFBtIxbrVlha3wCzMGGYzROMxLPhIDkhjn/aOtFa93x0o6uHJ1Cb3Bce1NoZYMJabN5w7JEkv6uLSibQT+w0PcFZGhQyFYmZ18CnVY0q0hKbAks6JrL1F9j4S6Gar50jVK0csLSTR97pC85x9IprW7+CESU0B9psCTHroGS8ZgwJAkSyRRqAF7k/TJyIFkWhCjesOSC5CAJNk+GEjqvwobSVIS9sRwVO3vzoXo2TEXGhZOSQ4knUazq/qSDMXe1QgAbp3rBpFzkl4dyQpIurBnqibhilsyJo2WeU6us7U8WLIZ2JLgkyUhkFSNKoN5x5K4liSvJNEnSaZE0gG5ic1dfThFaSTRQ9vpJbBOqsE3hp20kUS/r9JPl0itKzGjwbrqPXlzia5jdXIJ7I+qCsrhFKVRjyeLD6DHJ54lrlEYVIQC789mkliSDD1LUhIEgTdjJEzXm0nw7Bq840eeJY5opSesBrHv+LUoyQTJ5BgJM113RJCpMNnGknSfJKYSGEH6l3BR/dS+4c2WwBidlaDmxUX1oR+JMNNa8MtHK0vSgUZekhIJnWl5kpDZb7fKGLM2iebuBZqp5bIk3rBTepN1TxJT8gO00jJhO3x5FZSYDYuJLKGdgaxI6P9BwxuZgyt4cI8kYxrOR4770kphJTm7VmhZSZCk+H68ShRcbjxJ4MrdNWxFY2mlMJaanSSJyAClwCN/Pmx8SaJ9zc46wUkWLglISl5NPV4irXCH7B1F0xVuvMXnWOH2IBF2HWLcLUE81mjXgWzRTODI7VvSdfafBZmBjRruBKHXp667jKvt5GiJsDuXkXBfmXbXaHeuPHGOJVzfHAXHS/gdU0W2Naam9BvtmJIdwIn0jnsKPEj4XWy6KlVFio12sXE5aElX2GY8VkJ2xx9hRSV2kByLW8WypEcilHNuI+l4Cf7a45ldLzZ5GVrfN4yC/ZKQhu6/ECTxJQnCKoK/s6cdqDfl5AscuIMjS/S/7Bc4z3SlR5DU+5VfRRWvp/sqKiy/iqr/IdZfF1HJgRmsN+0AAAAASUVORK5CYII="
				), a58(18, "target", 7,
				"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAMFBMVEXUAADUISLWQkLMTQDZZmXAdwC0lADgiIioqQCWvgCE0QAA/wDnra1i6ADw0tL////afMd+AAAC6klEQVRIx42WTWgTURCApzFNY2lLBKEX0dy8iA0UxB8CKgUv0gaKBS2B3HOJnkUDQrENQi6KEITcgydR0l0CUYReJBZCi3YpaC+9FANS6GXZ5+6+eT+z+1adS/ImX97Mzs4f2ET2916vPV9/61At6Ifeq2UIZWXDSYK+IxLIlY4Z+ga6jL8xQbsFoFQrDtF7QqoThaxSDIKsE4HqYJAyhXZNDJxq6VCvZIQgq0NDSJCGgnqFJCiroB2lHTvjS06dWxJSHl0cjBjztm5JxXUBdaXqro8E4j2UD+gg1BamFpkQ75GgVjkkn/8SU+LVUHmaQx/wmB5pEHNzyh4oa08ZkU+oroZQhR8mKMO8PNdPBpBlvoixA67PBBC6lI4yzJVOgb3Nv1+OQawm3h9gJo19jUPHHLrhQ4UEazIKkzZYHJoRvxwuLAzE95voOWzyO5dQ/zkw/QQPfe65DfhwGO2T8JBCB39zqAM8l1Ij3QBMkSC0YFsP94nIB/4fj3vegLb+175IkCX94io0w8/zXJkX0IwezjLUNciTKZrWoSJCF4hLvlCookHHChppPhaB5+7c36BpvOm/oH+Y0x13VSFTx5vGEEzQOPGInyO5KPOUR3yVvrsDIFWBBVOFoR5hlwYczTfgPUmVj1y9SJKiBdhSMM3c0ItZzMwfWFMifeeYomZHpKb89MVWOCWr++hXpNCzfkmViFO6oEvTPtROaAWM/RRtDOx3QO0pyYveCjZ6HreH1saDhiGaeKxj9GUrBzl70iNj54FiCA3BeFVNtXsfEq2Odh/xrjPYxyuG9nuU00YC6DPqrKTcvD6nAshSNclbk3coR1BGDqCmpFJ3Hg++bN2OTNgQ6uojTh9kfP7g5KwnDcWiNl67CQy/SEzzhKvKZORvGqdwxqHLw47JWCOyYfSexaEHsYUmvj9cM6xG1jJlrjqmJcsiFu875nWt91I+4/yLxMXP3lu753PzK+tO8nYY3LbvS2SDtP8A+ntynBIvYeAAAAAASUVORK5CYII="
				), a58(19, "members", 7,
				"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABSVFGanJkA/wDMz8x4/3ey/7L///+GDHoaAAACZElEQVRIx9WWwYrjMAyGlVCYa6cs5JqGQh5gaObaDYU8QJnOA5SS66RN49dfSZZt2U2WZZeFXc9h2r9fZEmRJcPbLyz4d6GzMdM1/uXcG3PV0KehFVFnlh4Baoxdl8BEEkF7EcwUoN5pJ4HenRBMNV66C4QfxxI2nTKFhsYt5CgZC9FTawDIxbg4UKKUWevAuw1Aq/D7NUq6M9RbQ2zKhkwpKVnK2AWGRrCrc04lEpDfgyg1u8mh3EQqSGLoS5QXY/a4+XSKJIIwkkNQOIlTgFYUcQq59TuQcrwI0PDk+M3Hayh2+RcC1smkl3DDj1ltlMR5old38LutHT04l/BVAVfOSL9lnXelUBKaAltxt2gTv3Ft6w6k4sajdtf6zhLVHUHltzTwkIzvOUGf9PhOJJdVdphWS0YfFnJUCrVgISmdTVWVnVQa19+YV9VWKgohl2+MRUFKjaAXDX0tQCvt0+HPIJWnJajWGV9wPDPutPFhXs9CK+PLr1aJjSF+5aUzpOQY6mwZURWNCRRO9JZq43ikMtnog44v2LlojK1EW6n4zYXz4HqSb/gsty1qaWjAt5o7NAEiL7Jdu2vX7IqHLikEIYdzUJ5CZQQdJJcJ5GSE9i5tC1BNR4oadGub76ChwrZfKn48wTRXsGfrQvHFQr0dmy245o8nMYHGoxsToMZIAoWBA2qOzEMXmVJiK4nO2jn5oXju5yGZpn4Gf/QpNH08D+pn6O3vQqOGulkIX0+1fbXd93VT+dkXQe/SO3F1fkSnUBjgT7cEdVdJodkLTbNkKLr1NH1ApstPrkbnK/39B9e1H85NJPjxrK7zAAAAAElFTkSuQmCC"
				), a58(20, "hourglass", 7,
				"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABKTEqZm5gA/wDJzMh3/3iz/7L///+iyVF/AAACjklEQVRIx72W3aqyQBSGJwk6dceGTv1C8AJEO60QvACJLkDI02xPrtvf75pJ58cx2iffIqT0aWb9vGuNIrft0hSX8WqZ4Etxg9HM+G4zQVdatOcEdSSrqkr3juFOVdMwQXQUC7YmAyVLUPQZ1PxtJSJ5js7KX7j/+pKkNR5Y0RE9Ij/6JMPFRFfebt0cOmbD7dZOEOwQgn7ssnwOrf8rJAMp8KFSrnwormcQCR8S1HpQgT8qVVXnVCsJS/tQzlV4mMpmJLUCXOi4I2mgmnotOAfqcJPiCUIGNsMMunJdEqMjbP+cQQcOrx+hnZ0BA5XsuTQuPUxwBoLnZj98Oxq/LaiTHNK4G34MAQj7jfGhQqeIfgJQzm7ofELccUZ5CDpQjKBO3LbUr+gZhAo8QhMl8FoCb4IQhkvyUt7JWciBCnhUa5VkJkkexEtxQ3KjPvMlqKD7hk7fdF/bHnlQfoUU4LglgBCElVCP+ztIbQfDdXk7OL5jqH/juE7BA4pBUZr8XTJZMadoKZklKlxriMvSBqGO4m8ejJmuy5AH9aTqq02CbwPQlfeYDH94ziEWilqDW5xniiUWq6VUjs6szFTnat5SHYuXdcnGAcTZrINLrpmZGJnqqXY26WLONJ7rfqm5qfwh1vXckPahAh8HD/Imjzt7xJgACLe3oZ01xYQ1Mo/umWmGprBOjcQ96cyEEtacc89DrDx6PkJQrHSh2kjdgh4ulH0C7YIQuS8P3nYlDa9ecg33OpUF8TqnFyB9UitIVujsALSmqp6g+/5fHKVpxQfQqM6q2ier7X5joFdAMX++YrEyMc6hgP0RkuoVZbvfTqfU6gs/VbZG6M3bmn5fE0pxb6x1Ori4eNbkY3f+AriuYpjQCOoxAAAAAElFTkSuQmCC"
				), a58(21, "stalemate", 6,
				"iVBORw0KGgoAAAANSUhEUgAAAeoAAABABAMAAAAnsyk1AAAAElBMVEUAAAA8PjxeYF2Rk5C6vLn////ACCfyAAAFMklEQVRo3uXby3qjIBQAYBEfwO+buM9c3Ntp2ZOZ8ADx8v6vMp2qybmBCK6SbNomEc4vcAS0RbG+1Iebvl5/vxev8lIf0+M1nl8DXboJvd5eET1N3QuoGfoVOvlp4q/+6fv3JL2evY83orp/uVH9NbLrp0braXrBLt541LenVpsH9Ao7+/DUc1E0kuF85ZkHdokHMriMPfNEpbo39fx3e1fbV1D3NKVb8KEn1TkpCShvbxET50gvnzdaDG4A520mfhHSvg+oWsHaN9QlCf0Ydc+vqFYqfUk8SeqGNpcDtW+oKzEJ5KqHghYO1ZrOKPLUa842oPYNdbPRGmnqka+JrDAi13eT1Cd6jj9LuV7ff/+g51tQG3FOk6sWei5Qt3Qo5I1raVG9oXbinCZb3dFTCtWszlz1ZwRve9Qli/0YtfW8QzP73CmS1OQD7A6r0aHn49QXxrPyWqlLVrM9BegOqxt5iZat7tleh5UjsslqYXk91HFqIy/RstWDzOOjuE9XC0eNXZQana/hOPUYUBtWZ5q6CmwpBNWlEHykug9v6NQUY8VkNu/3RKlH/1KTs4NqciLPx6k72qjWs/HTJavlw/C1Wwz35Nlxyldb6Q2pGay0OyJNX8fIneFhM9ylmhFeb45RX2gPtKSFRmGXa6e6+LW5WyiGuwTaO3KactTj+nGJdJbQBsebZq9a3hseNsJdcdaRgnPUw1q1FtVq+drNcMxudSmyz+Fw1xK7luyzZandEuM8gP8SyFqnbXkNu9Uy+xIOd00s54YMiZ3X65qrP9+bv/pOIGudXcWFJrwYl4auxB7C6jWx1DSCLLVZDpx//iRFrwXUmqezBHVRfPji8anvw1mTz7LUzRL4/Pc3ArkP55K3TJI6eOteUKv7O4qMnSz13HHsnLZGjSHqkbodG69p6qL45nxzAEEN+pjDfSNLPRfbl/CveyTlIwrDqkhV0/a+hdRgNBtcXJYacXuiBnW2jJCuxjOWPqRu+YajPUA9HzwuHZ2oG77ddztEDWe6Q0htHkFXvh31BPXySyuqQbeuWIz71OWP948rOLyNUsMUpvH389Rz8MsFjKgduA3Jph971C2bvegoNZSWGJCnhivAGquhVLE68tTKxagraVOlO0ANd6oLrEYTA0dH6R51w0OMUouLcps/D8d5BavFk3ZJmYdXPLWZGLXxP7eUpy5hcVhtgkvDNPWlEG7v+cJVgcVpnlrBZtTe+wJ8v26PmucuFTNL0YGntfLUwGaxWt7zua8W9qgVu3rrmBlpFXhaK1NtQGlIrcNPiO1aXzva2CZm9eF5XMseoG5BKyL1Sa7zkqIGKeIPKTuw0jSBmwPK+1GU+gQiRWpPnX2KGp7B8ffPa9SugpzMlkMi1LyLOv6kwEDUnjrHvdfr/6H4HqhE+xRU7UksczrLVGtQF1QrX5x1gtp3CtHahKq990TO+WolNIkNPO+6xrlP7btjMgbSUOOLwOar781gsfoUqnO3Wm93cKY25MxoeFCu2vD7VBa0zkhv2fQpal9urANq55vZDAeowV63Fm58DXR6OCSpq+AFQVKXrD84aRGYqG74yt2CUns206hT1GI+w/8KQNTV5Ln/9NVAuepKVGt2pg1OZ3vVenNziagb9q12ElolUa0fVQE1P9PNJK/IItVCerwEp5KGTTkbUGKuuuSZFmyKPs505QkqVs3Yf8ITaMeGAZxQ5aqX3y1WO5ZlNZ5E7lfjjfCxK4Lqkl/S4YT3IHWH1IrXWeIclKD+LGP9T+Tr8/9r6j/yRPVUqj3rEAAAAABJRU5ErkJggg=="
				)
		}
	}, this.get = function(fz) {
		return gO[fz]
	}, this.uQ = function(name) {
		for (var eF = fu.length - 1; 0 <= eF; eF--)
			if (fu[eF] === name) return gO[eF];
		return a54
	}, this.g3 = function() {
		return a53 <= 0
	}, this.a4v = function() {
		a53 = 0, a56()
	}
}

function bk() {
	var a5J, a5K, a5L, a5M, a5N, a5O, a5P, a5Q, a5R, a5S, a5T, a5G = [224, 224, 224],
		a5H = [
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
		a5I = [
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

	function a5q(ei, a5s) {
		a19[ei] = 0, a19[ei + 1] = 0, a19[ei + 2] = a5s, a19[ei + 3] = 0, a5t(ei)
	}

	function a5t(ei) {
		var fK;
		ay.kU || (fK = a2.jg(ei), ei = a2.gD(ei), ay.kU = fK >= ax.a18[0] && fK <= ax.a18[2] && ei >= ax.a18[1] && ei <= ax.a18[3])
	}
	this.cq = function(qA) {
		if (a5J = new Uint8Array(ef), a5K = new Uint8Array(ef), a5L = new Uint8Array(ef), a5M = new Uint8Array(ef), a5N = new Uint8Array(ef), a5O = new Uint8Array(ef), a5P = new Uint8Array(ef), a5Q = new Uint8Array(ef), a5R = new Uint8Array(ef),
			a5S = new Uint8Array(ef), this.y2 = new Uint8Array(ef), (a5T = new Int32Array(4))[0] = -4 * ap.eA, a5T[1] = 4, a5T[2] = -a5T[0], a5T[3] = -a5T[1], hN)
			for (var oe, iM, eF = ef - 1; 0 <= eF; eF--) iM = b4.r9[b4.iN[eF]], oe = eT((a5I[iM][3] + 1) * aL.random(), aL.value(100)), a5J[eF] = a5H[iM][0] + oe * a5I[iM][0], a5K[eF] = a5H[iM][1] + oe * a5I[iM][1], a5L[eF] = a5H[iM][2] + oe *
				a5I[iM][2];
		else aU.ii && aU.ij.a5a ? function(dn) {
			var eF;
			for (eF = pS - 1; 0 <= eF; eF--) a5J[eF] = 4 * dn[eF][0], a5K[eF] = 4 * dn[eF][1], a5L[eF] = 4 * dn[eF][2]
		}(aU.ij.a5a) : (function() {
			for (var eF = ef - 1; h2 <= eF; eF--) a5J[eF] = 4 * eT(64 * aL.random(), aL.value(100)), a5K[eF] = 4 * eT(64 * aL.random(), aL.value(100)), a5L[eF] = 4 * eT(64 * aL.random(), aL.value(100))
		}(), function(qA) {
			for (var eF = h2 - 1; 0 <= eF; eF--) a5J[eF] = 4 * qA[eF].a4Z[0], a5K[eF] = 4 * qA[eF].a4Z[1], a5L[eF] = 4 * qA[eF].a4Z[2]
		}(qA));
		! function() {
			var eF, ek;
			for (eF = ef - 1; 0 <= eF; eF--) ek = eT(a5J[eF] + a5K[eF] + a5L[eF], 3), a5J[eF] += a5k(ek - a5J[eF], 2), a5K[eF] += a5k(ek - a5K[eF], 2), a5L[eF] += a5k(ek - a5L[eF], 2), a5J[eF] -= a5J[eF] % 4, a5K[eF] -= a5K[eF] % 4, a5L[eF] -=
				a5L[eF] % 4
		}(),
		function() {
			for (var eF = ef - 1; 0 <= eF; eF--) a5J[eF] += eT(eF, 128), a5K[eF] += eT(eF % 128, 32), a5L[eF] += eT(eF % 32, 8), a5M[eF] = eF % 8
		}(), this.a5g(),
			function() {
				for (var eF = ef - 1; 0 <= eF; eF--) a5N[eF] = a5J[eF] < 32 ? a5J[eF] + 32 : a5J[eF] - 32, a5O[eF] = a5K[eF] < 32 ? a5K[eF] + 32 : a5K[eF] - 32, a5P[eF] = a5L[eF] < 32 ? a5L[eF] + 32 : a5L[eF] - 32
			}(),
			function() {
				for (var eF = ef - 1; 0 <= eF; eF--) a5Q[eF] = 235 < a5J[eF] ? a5J[eF] - 20 : a5J[eF] + 20, a5R[eF] = 235 < a5K[eF] ? a5K[eF] - 20 : a5K[eF] + 20, a5S[eF] = 235 < a5L[eF] ? a5L[eF] - 20 : a5L[eF] + 20
			}()
	}, this.a5j = function(player) {
		var dn = al.di;
		return dn[0] = a5J[player], dn[1] = a5K[player], dn[2] = a5L[player], dn
	}, this.a5g = function() {
		for (var eF = ef - 1; 0 <= eF; eF--) this.y2[eF] = a5J[eF] + a5K[eF] + a5L[eF] < 280 ? 0 : 1
	}, this.jg = function(ei) {
		return eT(ei, 4) % ap.eA
	}, this.gD = function(ei) {
		return eT(ei, 4 * ap.eA)
	}, this.pZ = function(fK, fL) {
		return Math.floor(4 * (fL * ap.eA + fK))
	}, this.po = function(ei) {
		return this.p6(ei + a5T[0]) || this.p6(ei + a5T[1]) || this.p6(ei + a5T[2]) || this.p6(ei + a5T[3])
	}, this.pm = function(ei, player) {
		return this.a5l(ei + a5T[0], player) || this.a5l(ei + a5T[1], player) || this.a5l(ei + a5T[2], player) || this.a5l(ei + a5T[3], player)
	}, this.uf = function(player) {
		return player < h2 && 2 !== h4[player]
	}, this.el = function(ei) {
		return 208 <= a19[ei + 3]
	}, this.pt = function(player, ei) {
		return this.el(ei) && this.a5m(player, ei)
	}, this.a5m = function(player, ei) {
		return player === this.em(ei)
	}, this.a5n = function(ei) {
		return 208 <= a19[ei + 3] && a19[ei + 3] < 224
	}, this.hW = function(ei) {
		return 224 <= a19[ei + 3] && a19[ei + 3] < 248
	}, this.pn = function(ei) {
		for (var eF = 3; 0 <= eF; eF--)
			if (this.fj(ei + a5T[eF])) return !0;
		return !1
	}, this.a5o = function(ei) {
		return 192 <= a19[ei + 3] && a19[ei + 3] < 208
	}, this.a5p = function(ei, player) {
		return this.a5o(ei) && player === this.em(ei)
	}, this.ed = function(ei) {
		return this.el(ei) || this.en(ei)
	}, this.fj = function(ei) {
		return 0 === a19[ei + 3] && 2 === a19[ei + 2]
	}, this.en = function(ei) {
		return 0 === a19[ei + 3] && 1 === a19[ei + 2]
	}, this.p6 = function(ei) {
		return 0 === a19[ei + 3] && 3 === a19[ei + 2]
	}, this.fi = function(ei) {
		return this.p6(ei)
	}, this.a5l = function(ei, player) {
		return this.en(ei) || this.el(ei) && player !== this.em(ei)
	}, this.em = function(ei) {
		return a19[ei] % 4 * 128 + a19[ei + 1] % 4 * 32 + a19[ei + 2] % 4 * 8 + a19[ei + 3] % 8
	}, this.pu = function(ei) {
		a5q(ei, 1)
	}, this.a5r = function(ei) {
		a5q(ei, 2)
	}, this.pl = function(ei, player) {
		a19[ei] = a5J[player], a19[ei + 1] = a5K[player], a19[ei + 2] = a5L[player], a19[ei + 3] = 208 + a5M[player], a5t(ei)
	}, this.ee = function(ei, player) {
		a19[ei] = a5N[player], a19[ei + 1] = a5O[player], a19[ei + 2] = a5P[player], a19[ei + 3] = 224 + a5M[player], a5t(ei)
	}, this.hX = function(ei, player) {
		a19[ei] = a5Q[player], a19[ei + 1] = a5R[player], a19[ei + 2] = a5S[player], a19[ei + 3] = 248 + a5M[player], a5t(ei)
	}, this.a5u = function(ei, player) {
		a19[ei] = a5G[0] + a5J[player] % 4, a19[ei + 1] = a5G[1] + a5K[player] % 4, a19[ei + 2] = a5G[2] + a5L[player] % 4, a19[ei + 3] = 192 + a5M[player], a5t(ei)
	}
}

function bl() {
	var fu, eZ, eb, a5v, a5w;

	function a61() {
		for (var a69 = 0, eF = 1; eF < 5; eF++) a69 += eZ[eF] % 1024;
		return a69
	}

	function a60() {
		for (var eF = 1; eF < eb - a5w; eF++) eZ[eF] = parseInt(eZ[eF])
	}

	function a62() {
		eZ[0] = "Player " + Math.floor(1e3 * Math.random()), eZ[1] = aK.g5 < aK.gB ? Math.floor(1 + Math.random() * (Math.pow(2, 30) - 1)) : 0, eZ[2] = 1, eZ[3] = 1, eZ[4] = aK.g5 < aK.gB ? 0 : 1, eZ[5] = 0, eZ[6] = "000", eZ[7] = "0", eZ[8] = "0",
			eZ[9] = "0", a3.a63()
	}

	function a5z() {
		for (var eF = eb - a5w - 1; 0 <= eF; eF--) eZ[eF] = h.qd(eZ[eF]);
		eZ[0] = h.qb(eZ[0])
	}

	function a6C(name, value, a6D) {
		var a6E = new Date,
			a6D = (a6E.setTime(a6E.getTime() + Math.floor(31536e6 * a6D)), name + "=" + value + ";expires=" + a6E.toUTCString() + ";SameSite=Strict;Secure;path=/");
		document.cookie = a6D
	}
	this.cq = function() {
		if (!(5 <= b7.de || 2 === b7.id)) {
			a5w = 4, fu = [], eb = 10;
			for (var eF = a5v = 0; eF < eb; eF++) fu.push("u" + eF);
			eZ = new Array(eb), ! function(a6A) {
				for (var ha, ei, a6B = a6A.split(";"), eF = a6B.length - 1; 0 <= eF; eF--) {
					for (a6B[eF] = a6B[eF].trim(), ha = 2; 0 <= ha; ha--) a6B[eF] = a6B[eF].replace(" ", "");
					3 < a6B[eF].length && (ha = fu.indexOf(a6B[eF].substring(0, 2)), ei = a6B[eF].indexOf("="), 0 <= ha && 2 === ei ? eZ[ha] = a6B[eF].substring(ei + 1, a6B[eF].length) : 0 < ei && a6C(a6B[eF].substring(0, ei), "0", 0))
				}
			}(document.cookie), eZ[9] || (eZ[9] = "0"), (! function() {
				for (var eF = eb - 1; 0 <= eF; eF--)
					if (void 0 === eZ[eF]) return;
				return 1
			}() || (a5v = 2, a5z(), a60(), a61() !== eZ[5])) && a62()
		}
	}, this.a63 = function() {
		if (2 === a5v) {
			eZ[1] = 0 === eZ[1] ? Math.floor(1 + Math.random() * (Math.pow(2, 30) - 1)) : eZ[1], eZ[5] = a61(), ! function() {
				for (var eF = 1; eF < eb - a5w; eF++) eZ[eF] = eZ[eF].toString()
			}(), ! function() {
				eZ[0] = h.qa(eZ[0]);
				for (var eF = eb - a5w - 1; 0 <= eF; eF--) eZ[eF] = h.qc(eZ[eF])
			}();
			for (var eF = eb - 1; 0 <= eF; eF--) a6C(fu[eF], eZ[eF], 1);
			a5z(), a60()
		}
	}, this.a5v = function() {
		return a5v
	}, this.a67 = function(ha) {
		a5v = ha, this.a63()
	}, this.a68 = function(eF, value) {
		5 <= b7.de || 2 === b7.id || (eZ[eF] = value)
	}, this.rc = function(eF) {
		return 5 <= b7.de || 2 === b7.id ? 0 : eZ[eF]
	}
}

function c5() {
	var fz = 0,
		a6F = new Uint16Array(32);

	function remove(uT) {
		var eF;
		for (fz -= 2, eF = uT; eF < fz; eF += 2) a6F[eF] = a6F[eF + 2], a6F[eF + 1] = a6F[eF + 3]
	}
	this.cq = function() {
		fz = 0
	}, this.i7 = function() {
		var eF, hT, h6;
		if (0 !== fz)
			if (0 === h3[eW] || a4.a6G(eW) === a4.eG(eW)) fz = 0;
			else
				for (eF = fz - 2; 0 <= eF; eF -= 2)(hT = a6F[eF]) < ef && 0 === h3[hT] ? remove(eF) : (h6 = a6F[eF + 1], (ef <= hT && fn(eW) || hT < ef && fs(eW, hT)) && (aW.fd.fo(h6, hT), remove(eF)))
	}, this.fq = function(hT, h6) {
		! function(hT, h6) {
			var eF;
			for (eF = 0; eF < fz; eF += 2)
				if (a6F[eF] === hT) return a6F[eF + 1] = Math.min(a6F[eF + 1] + h6, 1023), 1;
			return
		}(hT, h6) && 32 !== fz && (a6F[fz] = hT, a6F[fz + 1] = h6, fz += 2)
	}
}

function a6I(player) {
	a6J(player), a6K(player), a6L(player), c.eV(player), e.jU(player), a4.clear(player), ak.a6M.a6N(player)
}

function a6J(player) {
	a2.uf(player) && qy++;
	var a6O = a4.a6P(player);
	0 === a6O.length ? player === eW && a6Q() : (a6R(player, a6O), a6S(player, a6O))
}

function a6Q() {
	b1.eZ[17] += eX[eW] + a4.a6T(eW), u.show(!1, !1, !1, !0), t.a0d()
}

function a6R(player, a6O) {
	for (var eF = a6O.length - 1; 0 <= eF; eF--) a4.a6U(a6O[eF], player)
}

function a6V(a6O) {
	for (var fz = 0, eF = a6O.length - 1; 1 <= eF; eF--) f1[a6O[eF]] > f1[a6O[fz]] && (fz = eF);
	return fz
}

function a6S(player, a6O) {
	var eF, vx, a6W = a6O[a6V(a6O)];
	if (9 === il && 1 === b4.iN[player] && aL.iG(8) && aM.a6X(a6W), player === eW) 2 !== h4[player] && k.qn(a6W, 1), a6Q();
	else {
		for (vx = !1, eF = a6O.length - 1; 0 <= eF; eF--)
			if (a6O[eF] === eW) return vx = !0, void k.qn(player, 0);
		!vx && player < h2 && 2 !== h4[player] && k.vg(0, player, a6W)
	}
}

function a6L(player) {
	h3[player] = eX[player] = 0, ec[player] = null, et[player] = null, eu[player] = null, ex[player] = null, aQ.a6Y(player)
}

function a6K(player) {
	for (var ei, fL, fK = hu[player]; fK >= hv[player]; fK--)
		for (fL = hx[player]; fL >= hy[player]; fL--) ei = 4 * (fL * ap.eA + fK), a2.pt(player, ei) && (a2.pu(ei), f1[player]--)
}

function cA() {
	var input;

	function a6Z(dD) {
		a6b(dD.target.files)
	}

	function a6b(files) {
		files && 0 < files.length && aT.a6c(files[0])
	}

	function a6h(dD) {
		var iM = new Image;
		iM.onload = a6i, iM.src = dD.target.result
	}

	function a6i(dD) {
		var a6j, dD = dD.target,
			g5 = dD.width,
			gB = dD.height;
		4096 < g5 || 4096 < gB || g5 < 10 || gB < 10 ? (a6j = "Image w & h must be between 10 and 4096.", b7.oH ? b7.oH.showToast(a6j) : alert(a6j)) : (aU.sZ(), ap.pG = ap.a6g(), ap.a3z = 0, ap.eA = g5, ap.eB = gB, ap.os.width = ap.eA, ap.os.height =
			ap.eB, ap.oo.drawImage(dD, 0, 0), a6j = ap.oo.getImageData(0, 0, ap.eA, ap.eB), ap.ot = a6j.data)
	}

	function a6k(dD) {
		dD.stopPropagation(), dD.preventDefault()
	}

	function a6l() {
		return 0 === x.dY() || 2 === x.dY()
	}
	this.cq = function() {
		(input = document.createElement("input")).type = "file", input.setAttribute("accept", ".json, .png, .jpg, .gif, .jpeg"), input.onchange = a6Z
	}, this.a4b = function() {
		input.click()
	}, this.a6a = function(dD) {
		a6Z(dD)
	}, this.a6c = function(a6d) {
		var dn = a6d.name.split("."),
			a6e = dn[dn.length - 1].toLowerCase();
		"json" === a6e ? aU.oF(a6d) : "gif" !== a6e && "jpg" !== a6e && "jpeg" !== a6e && "png" !== a6e || (ap.ij.pF[ap.a6g()].name = dn[0], (a6e = new FileReader).onload = a6h, a6e.readAsDataURL(a6d))
	}, this.sI = function(dD) {
		a6l() && (a6k(dD), dD.dataTransfer.dropEffect = "copy")
	}, this.sJ = function(dD) {
		a6l() && (a6k(dD), a6b(dD.dataTransfer.files))
	}
}

function c8() {
	this.a6m = null, this.cq = function() {
		this.a6m = 10 !== il ? null : new Uint32Array(ef)
	}, this.i7 = function() {
		10 === il && this.rn()
	}, this.rn = function() {
		for (var ei, target, a0o, a6m = this.a6m, qA = iP, tL = eX, eF = iO - 1; 0 <= eF; eF--) ei = qA[eF], h2 <= ei || (target = Math.max(eT(tL[ei], 4), 2048), a0o = Math.max(a5.a0p(ei), 100), a6m[ei] += eT(a0o * target, 1e4), a6m[ei] >
			target && (a6m[ei] = target))
	}, this.tR = function(player, hU) {
		return hU > this.a6m[player] ? (hU = this.a6m[player], this.a6m[player] = 0) : this.a6m[player] -= hU, hU
	}
}

function cB() {
	function a6h(dD) {
		aU.ii = !0, aU.a6s(JSON.parse(dD.target.result)), aU.wm()
	}

	function a6y(fy, min, max, a77) {
		return "string" != typeof fy || fy.length < min ? a77 : fy.length > max ? fy.substring(0, max) : fy
	}

	function a6t(dd, min, max) {
		return dd = "number" == typeof dd ? Math.floor(dd) : min, Math.min(Math.max(dd, min), max)
	}

	function a6w(dd, oD) {
		return "boolean" == typeof dd ? dd : oD
	}

	function a70(dd, eb, max, a79) {
		var eF, dn, oe;
		if (!Array.isArray(dd) || dd.length < 1) return null;
		for (dn = new(8 === a79 ? Uint8Array : Uint16Array)(eb), oe = dd.length, eF = 0; eF < eb; eF++) dn[eF] = a6t(dd[eF % oe], 0, max);
		return dn
	}
	this.ii = !1, this.ij = null, this.sZ = function() {
		this.ii = !1, this.ij = null
	}, this.a4X = function() {
		this.ij.a5a && this.ij.a6n && (this.ij.a5a[0] = a8.v9[2].qr.a2Q()), ts(this.ij.a6o, 0, this.a6p(), this.ij.tv, !1, !1)
	}, this.a6p = function() {
		return [{
			name: this.ij.a6q ? a0.a4Y() : this.ij.a6r[0],
			a4Z: [0, 0, 0],
			a4a: 0
		}]
	}, this.oF = function(a6d) {
		var a6f = new FileReader;
		a6f.onload = a6h, a6f.readAsText(a6d)
	}, this.a6s = function(n1) {
		this.ij = {}, this.ij.a4T = a6t(n1.numberPlayers, 1, 512), this.ij.a6u = a6t(n1.modeID, 0, 1), this.ij.pG = a6t(n1["gMap.mapID"], 0, ap.a6v - 1), this.ij.a43 = a6t(n1.seedMap, 0, 16383), this.ij.a6o = a6t(n1.seedSpawn, 0, 16383), this.ij
			.ty = a6w(n1.selectableSpawn, !1), this.ij.a6q = a6w(n1.selectableName, !1), this.ij.a6n = a6w(n1.selectableColor, !1), ap.ij.pF[ap.a6g()].name = this.ij.a6x = a6y(n1.mapName, 1, 25, "Custom Map"), this.ij.vO = function(dd) {
				var eF, eb;
				if (!Array.isArray(dd) || dd.length < 1) return [];
				for (eb = dd.length, eF = 0; eF < eb; eF++) dd[eF] = a6y(dd[eF], 0, 100, "");
				return dd
			}(n1.description), this.ij.pN = a70(n1.playerX, this.ij.a4T, 4096, 16), this.ij.pY = a70(n1.playerY, this.ij.a4T, 4096, 16), this.ij.a71 = a70(n1.playerTeam, this.ij.a4T, 8, 8), this.ij.ik = a70(n1.playerStrength, this.ij.a4T, 5, 8),
			this.ij.a5a = function(dd, eb) {
				var eF, dn, oe;
				if (!Array.isArray(dd) || dd.length < 1) return null;
				for (dn = new Array(eb), oe = dd.length, eF = 0; eF < eb; eF++) dn[eF] = a70(dd[eF % oe], 3, 63, 8);
				return dn
			}(n1.playerColor, this.ij.a4T), this.ij.a6r = function(dd, eb) {
				var eF, dn, oe;
				if (!Array.isArray(dd) || dd.length < 1) return null;
				for (dn = new Array(eb), oe = dd.length, eF = 0; eF < eb; eF++) dn[eF] = a6y(dd[eF % oe], 3, 26, "Bot");
				return dn
			}(n1.playerName, this.ij.a4T), this.ij.a74 = "string" == typeof n1.mapBase64 ? n1.mapBase64 : "", this.ij.a6q = this.ij.a6q || !this.ij.a6r, this.ij.tv = 0 === this.ij.a6u ? 7 : 2 === this.ij.a6u ? 9 : 6, this.ij.pN = this.ij.pY ?
			this.ij.pN : null
	}, this.wm = function() {
		! function(fy) {
			var gO, gL, a76 = "data:image/png;base64,";
			if (fy.length <= a76.length) return;
			aU.ij.pG = 0, aU.ij.a43 = 0, ap.d2(0, 0), fy.substring(0, a76.length) !== a76 && (fy = a76 + fy);
			return (gO = new Image).onload = function() {
				ap.eA = gO.width, ap.eB = gO.height, 4096 < ap.eA || 4096 < ap.eB || ap.eA < 10 || ap.eB < 10 ? (ap.d2(0, 0), alert("Image w & h must be between 10 and 4096.")) : (ap.pG = ap.a6g(), ap.a3z = 0, ap.os.width = ap.eA, ap.os
					.height = ap.eB, ap.oo.drawImage(gO, 0, 0), gL = ap.oo.getImageData(0, 0, ap.eA, ap.eB), ap.ot = gL.data)
			}, gO.src = fy, aU.ij.a74 = "", 1
		}(this.ij.a74) && ap.d2(this.ij.pG, this.ij.a43)
	}, this.a7A = function() {
		for (var max = 0, eb = this.ij.a4T, eF = 0; eF < eb; eF++) this.ij.a71[eF] > max && (max = this.ij.a71[eF]);
		return Math.max(0, max - 1)
	}
}

function bm() {
	var a7B, a7C, size, hT, hU, id;

	function a7D(player) {
		return player < h2 ? a7B * player : a7B * h2 + a7C * (player - h2)
	}
	this.cq = function() {
		a7B = h2 < 16 ? 12 : 8, a7C = 4;
		var eb = a7D(ef);
		size = new Uint8Array(ef), hT = new Uint16Array(eb), hU = new Uint32Array(eb), id = new Uint16Array(eb)
	}, this.mo = function(xW, a7E) {
		var a7F = this.fF(xW, a7E);
		this.fE(xW, a7E, 0), a7F = aY.fP.ly(xW, a7F), xW === eW && (b1.eZ[13] -= a7F)
	}, this.clear = function(player) {
		size[player] = 0
	}, this.a6U = function(player, a7E) {
		var iT, a7E = function(player, a7E) {
			var eF, oe = a7D(player);
			for (eF = size[player] - 1; 0 <= eF; eF--)
				if (0 === id[oe + eF] && hT[oe + eF] === a7E) return eF;
			return size[player]
		}(player, a7E);
		a7E !== size[player] && (iT = hU[a7D(player) + a7E], this.ea(player, a7E), this.hQ(player, iT, ef))
	}, this.hl = function(player, a7E) {
		for (var oe = a7D(player), eF = size[player] - 1; 0 <= eF; eF--)
			if (0 === id[oe + eF] && hT[oe + eF] === a7E) return !0;
		return !1
	}, this.i5 = function(player) {
		return player < h2 ? size[player] < a7B : size[player] < a7C
	}, this.eG = function(player) {
		return size[player]
	}, this.eM = function(player, eF) {
		return hT[a7D(player) + eF]
	}, this.eH = function(player, eF) {
		return id[a7D(player) + eF]
	}, this.jj = function(player, a7H) {
		for (var oe = a7D(player), eF = size[player] - 1; 0 <= eF; eF--)
			if (id[oe + eF] === a7H) return eF;
		return -1
	}, this.eN = function(player, eF) {
		return hU[a7D(player) + eF]
	}, this.fF = function(player, a7E) {
		for (var oe = a7D(player), eF = size[player] - 1; 0 <= eF; eF--)
			if (0 === id[oe + eF] && hT[oe + eF] === a7E) return hU[oe + eF];
		return 0
	}, this.a6T = function(player) {
		for (var oe = a7D(player), dd = 0, eF = size[player] - 1; 0 <= eF; eF--) dd += hU[oe + eF];
		return dd
	}, this.a7I = function(player) {
		for (var oe = a7D(player), dd = 0, eF = size[player] - 1; 0 <= eF; eF--) 0 === id[oe + eF] && (dd += hU[oe + eF]);
		return dd
	}, this.a6G = function(player) {
		for (var oe = a7D(player), vw = 0, eF = size[player] - 1; 0 <= eF; eF--) 0 < id[oe + eF] && vw++;
		return vw
	}, this.fE = function(player, a7E, iT) {
		for (var oe = a7D(player), eF = size[player] - 1; 0 <= eF; eF--) 0 === id[oe + eF] && hT[oe + eF] === a7E && (hU[oe + eF] = iT)
	}, this.f0 = function(player, eF, iT) {
		hU[a7D(player) + eF] = iT
	}, this.hQ = function(player, iT, a7E) {
		var eF, oe = a7D(player);
		for (a7E === eW && b1.eZ[player < h2 ? 6 : 5]++, eF = size[player] - 1; 0 <= eF; eF--)
			if (0 === id[oe + eF] && hT[oe + eF] === a7E) return hU[oe + eF] += iT, void(hU[oe + eF] = hU[oe + eF] > tN ? tN : hU[oe + eF]);
		hT[oe + size[player]] = a7E, hU[oe + size[player]] = iT, id[oe + size[player]] = 0, size[player]++, player < h2 && (a7E === eW ? k.qn(player, 5) : player === eW && a6.vi(a7E))
	}, this.a7J = function(player, iT, a7H) {
		var oe = a7D(player);
		h3[player] = 2, hT[oe + size[player]] = 0, hU[oe + size[player]] = iT, id[oe + size[player]] = a7H, size[player]++
	}, this.ea = function(player, fz) {
		var ha, oe;
		if (0 !== size[player])
			for (oe = a7D(player), size[player]--, ha = fz; ha < size[player]; ha++) hT[oe + ha] = hT[oe + ha + 1], hU[oe + ha] = hU[oe + ha + 1], id[oe + ha] = id[oe + ha + 1]
	}, this.a6P = function(player) {
		for (var ha, oe, a6O = [], eF = iO - 1; 0 <= eF; eF--)
			for (oe = a7D(iP[eF]), ha = size[iP[eF]] - 1; 0 <= ha; ha--)
				if (0 === id[oe + ha] && hT[oe + ha] === player) {
					a6O.push(iP[eF]);
					break
				} return a6O
	}
}

function bn() {
	var a7K, a7L, a7M, a7N, a7O, a7P;
	this.cq = function() {
		a7M = a7K = 10, a7N = a7L = 10
	}, this.d0 = function() {
		a7P = 512, a7O = new Uint16Array(a7P);
		for (var eF = 0; eF < a7P; eF++) a7O[eF] = 100 + a7Q(eT(25600 * eF, a7P - 4), 9)
	}, this.zY = function() {
		return a7N
	}, this.i7 = function() {
		if (--a7M <= 0 && (a7M = a7K, function() {
				var eF, a7V, db = eX[eW];
				for (io && !hN && 0 !== h3[0] && 0 === z.ip[0].ek && (eX[0] += eT(f1[0], 6)), eF = iO - 1; 0 <= eF; eF--) a7V = eT(a5.a0p(iP[eF]) * eX[iP[eF]], 1e4), eX[iP[eF]] += a7V < 1 ? 1 : a7V, a5.eY(iP[eF]);
				b1.eZ[9] += eX[eW] - db
			}(), --a7N <= 0)) {
			a7N = a7L;
			for (var db = eX[eW], eF = iO - 1; 0 <= eF; eF--) eX[iP[eF]] += f1[iP[eF]], a5.eY(iP[eF]);
			b1.eZ[8] += eX[eW] - db
		}
	}, this.a0p = function(player) {
		var gR = a7O[eT((a7P - 1) * f1[player], tn)],
			a7U = (b3.iL() < 1920 && (gR = gR < (a7U = eT(100 * (13440 - 6 * b3.iL()), 1920)) ? a7U : gR), this.iA(player));
		return eX[player] > a7U && (gR -= eT(2 * gR * (eX[player] - a7U), a7U)), gR < 0 ? 0 : 700 < gR ? 700 : gR
	}, this.iA = function(player) {
		player = 100 * f1[player];
		return to < player ? to : player
	}, this.eY = function(player) {
		var dd = f1[player] * tM;
		eX[player] = Math.min(Math.min(eX[player], tN), dd)
	}, this.lc = function(player, ld) {
		aY.fP.ly(ld, al.dh[0]), b1.lz(player, ld), a6.a7X(player, al.dh[0] + al.dh[1]), a6.m0(ld, al.dh[0]), aY.fP.md(player)
	}
}

function bo() {
	var a7Y, a7Z, a7a, a7b, a7c, a7d, a7e, a7f, a7g, a7h, a7i, a7j, a7k, a7l, a7m, a7n, a7o, a7p, a7r, a7s, a7t, a7u, a7v, a82, a83, a7q = null,
		a7x = 0,
		a7y = !1,
		a7z = new Float32Array(4),
		a80 = 0,
		a81 = !1,
		a03 = 1;

	function a84() {
		a7q.width = aK.g5, a7q.height = aK.gB, a7r = a7q.getContext("2d", {
			alpha: !0
		}), aY.g0.textAlign(a7r, 1), aY.g0.textBaseline(a7r, 1), a7r.imageSmoothingEnabled = !0
	}

	function a85() {
		var eF, a89;
		for (gF.font = aY.g0.g1(1, 100 * a7i), a89 = 80 / Math.floor(gF.measureText(aY.jk.jl(tN)).width), gF.font = aY.g0.g1(1, 100), eF = ef - 1; 0 <= eF; eF--) a7f[eF] = 100 / Math.floor(gF.measureText(jm[eF]).width), a7e[eF] = Math.min(a89, a7f[
			eF])
	}

	function a8A(eF) {
		return !b9.dF.data[7].value || eX[eF] < 1e6 ? 1 : eX[eF] < 1e7 ? a7z[0] : a7z[Math.min(Math.floor(Math.log10(eX[eF])) - 6, 3)]
	}

	function a88(gP) {
		a7p = !1, a7o = 1, a7m = a7n = 0, a81 ? (aY.g0.textAlign(gP, 1), aY.g0.textBaseline(gP, 1)) : gP.clearRect(0, 0, aK.g5, aK.gB);
		for (var jZ, ja, eF, fontSize, jb, jc = h7 / h8, jd = h9 / h8, je = (aK.g5 + h7) / h8, jf = (aK.gB + h9) / h8, a8E = 0 !== h3[eW] && a2.uf(eW), ha = iO - 1; 0 <= ha; ha--) eF = iP[ha], (fontSize = a7l * h8 * a8A(eF) * a7e[eF] * a7c[eF]) <
			a7k || a7g <= fontSize || a7a[eF] + a7c[eF] > jc && a7a[eF] < je && a7b[eF] + a7d[eF] > jd && a7b[eF] < jf && (jZ = aK.g5 * (a7a[eF] + a7c[eF] / 2 - jc) / (je - jc), ja = aK.gB * (a7b[eF] + a7d[eF] / 2 - jd) / (jf - jd) - .1 * fontSize,
				gP.font = aY.g0.g1(0 === h4[eF] ? 1 : 2, fontSize), gP.fillStyle = function(fontSize, eF) {
					if (a7h <= fontSize && fontSize < a7g) return b4.a8R[a2.y2[eF]] + a8N(fontSize).toFixed(3) + ")";
					return b4.a8S[a2.y2[eF]]
				}(fontSize, eF), b9.dF.data[7].value ? gP.fillText(aY.jk.jl(eX[eF]), jZ, ja) : a8G(eF, fontSize, jZ, ja, gP), a7p = !0, 0 < a7t[eF] ? function(jZ, ja, fontSize, eF, gP) {
					0 === zZ[eF] ? az.wo(a7s[eF]) ? (function(jZ, ja, fontSize, player, ln, gP) {
						for (var uy = .9 * fontSize / az.g5, pR = ja - .5 * uy * az.g5 - .05 * fontSize, gN = (gP.globalAlpha = a8N(fontSize), a8A(player) * (b9.dF.data[7].value ? a80 : a7f[player])), pQ = jZ - .5 * fontSize / gN - .4 *
								fontSize - uy * az.g5, hj = 0; hj < 2; hj++) gP.setTransform(uy, 0, 0, uy, pQ, pR), gP.drawImage(az.uP[ln], 0, 0), pQ = jZ + .5 * fontSize / gN + .4 * fontSize;
						gP.globalAlpha = 1, gP.setTransform(1, 0, 0, 1, 0, 0)
					}(jZ, ja, fontSize, eF, a7s[eF], gP), a8I(jZ, ja, fontSize, 0, 0, gP)) : az.wn(a7s[eF]) ? (a8Q(jZ, ja, fontSize, a7s[eF], 0, gP), a8I(jZ, ja, fontSize, 0, 1, gP)) : (a8Q(jZ, ja, fontSize, a7s[eF], 1, gP), a8I(jZ, ja, fontSize,
						1, 0, gP)) : a8Q(jZ, ja, fontSize, a7s[eF], 0, gP)
				}(jZ, ja, fontSize, eF, gP) : 0 === zZ[eF] && a8I(jZ, ja, fontSize, 0, 0, gP), a8E && (0 < a7t[eF + ef] || 0 < a7t[eF + 2 * ef] || 0 < a7t[eF + 3 * ef] || 0 < a7t[eF + 4 * ef]) && function(jZ, ja, fontSize, eF, gP) {
					var iM, vw = -1;
					for (iM = 4; 1 <= iM; iM--) 0 < a7t[eF + iM * ef] && vw++;
					for (iM = 1; iM < 5; iM++) 0 < a7t[eF + iM * ef] && (! function(jZ, ja, fontSize, iM, eF, a8L, db, gP) {
						var uy = .8 * fontSize / az.g5,
							jZ = jZ - .5 * uy * az.g5 - .534 * a8L * fontSize,
							a8L = ja + 1.4 * uy * az.g5;
						gP.setTransform(uy, 0, 0, uy, jZ, a8L), gP.globalAlpha = a8N(fontSize), ja = 1 === iM ? az.uP[a7s[eF + ef]] : 2 === iM ? i.uL()[4].gO[db < 255 ? 1 : 0] : (3 === iM ? i.uL()[5] : i.uL()[6]).gO[0];
						gP.drawImage(ja, 0, 0), gP.globalAlpha = 1, gP.setTransform(1, 0, 0, 1, 0, 0)
					}(jZ, ja, fontSize, iM, eF, vw, a7t[eF + iM * ef], gP), vw -= 2)
				}(jZ, ja, fontSize, eF, gP), (jb = a7i * fontSize) < a7k || (gP.font = aY.g0.g1(1, jb), b9.dF.data[7].value ? a8G(eF, jb, jZ, ja + .78 * fontSize, gP) : (gP.fillText(aY.jk.jl(eX[eF]), jZ, ja + .78 * fontSize), settings
					.showPlayerDensity && gP.fillText(utils.getDensity(eF), jZ, ja + fontSize * 1.5))))
	}

	function a8G(eF, fontSize, fK, fL, gP) {
		gP.fillText(jm[eF], fK, fL), b9.dF.data[7].value && settings.showPlayerDensity && gP.fillText(utils.getDensity(eF), fK, fL + fontSize), eF < h2 && 2 !== h4[eF] || (eF = fontSize / a7f[eF], gP.fillRect(fK - .5 * eF, fL + aY.g0.tC * fontSize,
			eF, Math.max(1, .1 * fontSize)))
	}

	function a8I(jZ, ja, fontSize, a8L, a8M, gP) {
		var uy = .95 * fontSize / a7v,
			jZ = jZ - .5 * uy * a7u + .8 * a8L * fontSize,
			a8L = ja - 1.76 * uy * a7v - .82 * a8M * fontSize;
		gP.setTransform(uy, 0, 0, uy, jZ, a8L), gP.globalAlpha = a8N(fontSize), gP.drawImage(a1.get(4), 0, 0), gP.globalAlpha = 1, gP.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a8Q(jZ, ja, fontSize, ln, a8L, gP) {
		var uy = 1.2 * fontSize / az.g5,
			jZ = jZ - .5 * uy * az.g5 - .8 * a8L * fontSize,
			a8L = ja - 1.5 * uy * az.g5;
		gP.setTransform(uy, 0, 0, uy, jZ, a8L), gP.globalAlpha = a8N(fontSize), gP.drawImage(az.uP[ln], 0, 0), gP.globalAlpha = 1, gP.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a8N(fontSize) {
		return a7h <= fontSize && fontSize < a7g ? 1 - (fontSize - a7h) / (a7g - a7h) : 1
	}

	function a8b(gN, g5) {
		return 1 + Math.floor(a7j * gN * g5)
	}

	function a8Y(eF) {
		for (var left = a7a[eF], ha = a7a[eF] - hv[eF] - 1; 0 <= ha; ha--)
			if (!a8d(eF, --left, a7b[eF], a7d[eF])) {
				left++;
				break
			} var right = a7a[eF];
		for (ha = hu[eF] - a7a[eF] - a7c[eF]; 0 <= ha; ha--)
			if (!a8d(eF, ++right + a7c[eF] - 1, a7b[eF], a7d[eF])) {
				right--;
				break
			} var fK = Math.floor((left + right) / 2),
			top = a7b[eF];
		for (ha = a7b[eF] - hy[eF] - 1; 0 <= ha; ha--)
			if (!a8e(eF, fK, --top, a7c[eF])) {
				top++;
				break
			} var bottom = a7b[eF];
		for (ha = hx[eF] - a7b[eF] - a7d[eF]; 0 <= ha; ha--)
			if (!a8e(eF, fK, ++bottom + a7d[eF] - 1, a7c[eF])) {
				bottom--;
				break
			} var fL = Math.floor((top + bottom) / 2);
		a8V(eF, fK, fL, a7c[eF], a7d[eF]) && (a7a[eF] = fK, a7b[eF] = fL)
	}

	function a8V(player, fK, fL, g5, gB) {
		ek = Math.floor(.2 * g5);
		for (var ek, iM = fK + g5 - 1; fK <= iM; iM--)
			if (!a8d(player, iM, fL, gB)) return;
		for (iM = fL + gB - 1 - (ek = (ek = Math.floor(.25 * gB)) < 1 ? 1 : ek); fL + ek <= iM; iM--)
			if (!a8e(player, fK, iM, g5)) return;
		return 1
	}

	function a8d(player, fK, fL, gB) {
		return a2.pt(player, 4 * (fL * ap.eA + fK)) && a2.pt(player, 4 * ((fL + gB - 1) * ap.eA + fK))
	}

	function a8e(player, fK, fL, g5) {
		return a2.pt(player, 4 * (fL * ap.eA + fK)) && a2.pt(player, 4 * (fL * ap.eA + fK + g5 - 1))
	}
	this.cq = function() {
		if (a03 = 0 === (a03 = b9.dF.data[11].value) ? 400 : 1 === a03 ? 200 : 100, a7p = !1, a7l = .88, a7i = .5, a7j = 1.8, a7g = Math.floor(.5 * aK.min), a7h = Math.floor(.2 * a7g), a7k = 12 - 3 * b9.dF.data[9].value, a7Z = a7Y = 0, a7a =
			new Uint16Array(ef), a7b = new Uint16Array(ef), a7c = new Uint16Array(ef), a7d = new Uint16Array(ef), a7e = new Float32Array(ef), a7f = new Float32Array(ef), a7s = new Uint8Array(2 * ef), a7t = new Uint8Array(5 * ef), a82 =
			new Uint8Array(ef), a83 = new Uint8Array(ef), a81 || (a7q = a7q || document.createElement("canvas"), a84()), a7n = a7m = 0, a7o = 1, b9.dF.data[7].value) {
			var eF, a89;
			for (a85(), gF.font = aY.g0.g1(1, 100), a89 = 100 / Math.floor(gF.measureText("900 000").width), eF = ef - 1; 0 <= eF; eF--) a7e[eF] = Math.min(a89, 2 * a7f[eF]);
			a80 = a89, a7z[0] = 100 / (a89 * Math.floor(gF.measureText("5 000 000").width)), a7z[1] = 100 / (a89 * Math.floor(gF.measureText("50 000 000").width)), a7z[2] = 100 / (a89 * Math.floor(gF.measureText("500 000 000").width)), a7z[3] =
				100 / (a89 * Math.floor(gF.measureText("1 000 000 000").width))
		} else a85();
		! function() {
			var eF;
			for (eF = ef - 1; 0 <= eF; eF--) f1[eF] < 12 ? (a7a[eF] = hv[eF] + 1, a7b[eF] = hy[eF] + 1, a7c[eF] = 1, a7d[eF] = 1) : (a7a[eF] = hv[eF], a7b[eF] = hy[eF] + 1, a7c[eF] = 4, a7d[eF] = 2);
			if (fc)
				for (eF = 0; eF < h2; eF++) a7c[eF] = 0;
			a7u = a1.get(4).width, a7v = a1.get(4).height
		}()
	}, this.a7X = function(ei, vz) {
		vz > 18 * f1[ei] ? (a83[ei] = 6, a2.y2[ei] = 2 + a2.y2[ei] % 2) : (a82[ei] = 4, (a2.y2[ei] < 2 || 3 < a2.y2[ei]) && (a2.y2[ei] = 6 + a2.y2[ei] % 2))
	}, this.m0 = function(ei, vz) {
		vz > 6 * f1[ei] ? (a83[ei] = 6, a2.y2[ei] = 4 + a2.y2[ei] % 2) : (a82[ei] = 4, (a2.y2[ei] < 4 || 5 < a2.y2[ei]) && (a2.y2[ei] = 8 + a2.y2[ei] % 2))
	}, this.resize = function() {
		a81 || (a84(), a88(a7r))
	}, this.tj = function() {
		for (var eF = 0; eF < h2; eF++) hu[eF] - hv[eF] != 3 || hx[eF] - hy[eF] != 3 ? (a7a[eF] = hv[eF] + (hu[eF] !== hv[eF] ? 1 : 0), a7b[eF] = hy[eF], a7c[eF] = 1, a7d[eF] = 1) : (a7a[eF] = hv[eF], a7b[eF] = hy[eF] + 1, a7c[eF] = 4, a7d[eF] =
			2)
	}, this.mq = function(player, fz, a8B) {
		player += fz * ef;
		if (0 === fz) return a7s[player] === a8B && 0 < a7t[player] ? void(a7t[player] = 0) : (a7s[player] = a8B, void(a7t[player] = az.wo(a8B) ? 255 : 64));
		1 === fz ? (a7t[player] = 64, a7s[player] = a8B) : a7t[player] = a8B
	}, this.gE = function() {
		a81 ? a88(gF) : a7p && (1 !== a7o ? (gF.imageSmoothingEnabled = !0, gF.setTransform(a7o, 0, 0, a7o, 0, 0), gF.drawImage(a7q, -a7m / a7o, -a7n / a7o), gF.setTransform(1, 0, 0, 1, 0, 0), gF.imageSmoothingEnabled = !1) : gF.drawImage(a7q, -
			a7m, -a7n))
	}, this.yl = function(gu, gx) {
		a7m += gu, a7n += gx
	}, this.sA = function(gu, gx) {
		a6.yl(gu, gx)
	}, this.zoom = function(ft, g9, gA) {
		a7o *= ft, a7m = (a7m + g9) * ft - g9, a7n = (a7n + gA) * ft - gA
	}, this.j6 = function(w8) {
		return !a81 && !(!a7y && !w8 && b3.da < a7x + (1 !== a7o || 0 !== a7m || 0 !== a7n ? a03 : fN ? aa.uz ? a03 : 1e3 : fc ? 1e3 : io ? j.fO || 2 === qw ? 1e3 : a03 : 2 === qw ? 500 : a03) || (a7y = !1, a7x = b3.da, a88(a7r), 0))
	}, this.jh = function(eF) {
		return a8A(eF) * a7e[eF]
	}, this.a8D = function(player) {
		return a7e[player]
	}, this.i7 = function() {
		b3.iL() % 10 == 9 && (a7y = !0), 4 <= ++a7Z && function() {
			var eF, ha, hj;
			for (a7Z = 0, hj = 4; 1 <= hj; hj--)
				for (ha = iO - 1; 0 <= ha; ha--) eF = iP[ha] + hj * ef, 0 < a7t[eF] && a7t[eF] < 255 && a7t[eF]--;
			if (2 !== qw)
				for (ha = iO - 1; 0 <= ha; ha--) eF = iP[ha], 0 < a7t[eF] && a7t[eF] < 255 && a7t[eF]--
		}();
		for (var eb = Math.floor(.1 * iO), eF = a7Y + (eb = iO < (eb = eb < 8 ? 8 : eb) ? iO : eb) - 1; a7Y <= eF; eF--) ! function(eF) {
			var gN = a8A(eF) * a7e[eF];
			0 < a7c[eF] && a8V(eF, a7a[eF], a7b[eF], a7c[eF], a7d[eF]) ? ! function(eF) {
				for (var fK, fL, g5, gB, fZ = !1, hj = 0; hj < 8; hj++) {
					if (g5 = a7c[eF] + 2, gB = a7d[eF] + 2, g5 > hu[eF] - hv[eF] + 1 || gB > hx[eF] - hy[eF] + 1) return fZ;
					if (fK = a7a[eF] - 1, fL = a7b[eF] - 1, !a8V(eF, fK, fL, g5, gB)) return fZ;
					a7a[eF] = fK, a7b[eF] = fL, a7c[eF] = g5, a7d[eF] = gB, fZ = !0
				}
				return fZ
			}(eF) && function(eF, gN) {
				for (var fK, fL, g5, gB, fZ = !1, a1z = a7c[eF], kH = 1 + Math.floor(.02 * a1z), hj = 1; hj < 5; hj++) {
					if ((g5 = a1z + hj * kH) > hu[eF] - hv[eF] + 1) return fZ;
					if ((gB = a8b(gN, g5)) > hx[eF] - hy[eF] + 1) return fZ;
					fK = hv[eF] + Math.floor(Math.random() * (hu[eF] - hv[eF] + 2 - g5)), fL = hy[eF] + Math.floor(Math.random() * (hx[eF] - hy[eF] + 2 - gB)), a8V(eF, fK, fL, g5, gB) && (a7a[eF] = fK, a7b[eF] = fL, a7c[eF] = g5, a7d[
						eF] = gB, fZ = !0)
				}
				return fZ
			}(eF, gN) && a8Y(eF) : ! function(eF, gN) {
				var gB, fK = a7a[eF] + 1,
					fL = a7b[eF] + 1,
					g5 = a7c[eF] - 2;
				for (;;) {
					if (g5 < 1) {
						a7c[eF] = 0;
						break
					}
					if (gB = a8b(gN, g5), a8V(eF, fK, fL, g5, gB)) return a7a[eF] = fK, a7b[eF] = fL, a7c[eF] = g5, a7d[eF] = gB, 1;
					fK++, fL++, g5 -= 2
				}
				return
			}(eF, gN) ? function(eF, gN) {
				var fK, fL, g5, gB, hj, kM, hc = hu[eF] - hv[eF] + 1,
					a8c = Math.floor(.02 * hc);
				for (kM = -6 * (a8c = a8c < 1 ? 1 : a8c), hj = hc; kM <= hj; hj -= a8c)
					if (gB = a8b(gN, g5 = 0 < hj ? hj : 1), fK = hv[eF] + Math.floor(Math.random() * (hu[eF] - hv[eF] + 2 - g5)), fL = hy[eF] + Math.floor(Math.random() * (hx[eF] - hy[eF] + 2 - gB)), a8V(eF, fK, fL, g5, gB)) return a7a[
						eF] = fK, a7b[eF] = fL, a7c[eF] = g5, a7d[eF] = gB
			}(eF, gN) : a8Y(eF)
		}(iP[eF % iO]);
		a7Y = (a7Y + eb) % iO
	}, this.j2 = function() {
		var eF, ei, gb, gc;
		if (b3.iL() % 4 == 1)
			for (eF = iO - 1; 0 <= eF; eF--) ei = iP[eF], a2.y2[ei] < 2 || ((gb = Math.max(a82[ei] - 1, 0)) === (gc = Math.max(a83[ei] - 1, 0)) ? 0 === gb && (a2.y2[ei] %= 2) : 0 === gc && a2.y2[ei] < 6 && (a2.y2[ei] += 4), a82[ei] = gb, a83[
				ei] = gc)
	}, this.vi = function(player) {
		var eF = player + 2 * ef,
			db = a7t[eF];
		return 0 < db && (k.qm(50, player), a7t[eF] = 0, 255 === db)
	}, this.uh = function(player) {
		return 255 === a7t[player + 2 * ef]
	}
}

function bp() {
	var fu, a8f;
	this.cq = function() {
		fu = "Abbasid Caliphate;Aceh s;Achaemenid Z;Afsharid z;Aghlabid Emirate;Ahom z;Akkadian Z;Aksumite Z;Akwamu;Alaouite z;Almohad Caliphate;Almoravid z;Angevin Z;Aq Qoyunlu;Armenian Z;Assyria;Ashanti Z;Austrian Z;Austria-Hungary;Ayyubid z;Aztec Z;Aulikara Z;Babylonian Z;Balhae;Banten s;S Banjar;Bamana Z;Bengal s;Benin Z;Kadamba z;Bornu Z;E Brazil;Britannic Z;British Z;British Raj;Bruneian Z;Bukhara Z;Burgundian State;Buyid z;Byzantine Z;Caliphate of Córdoba;Cao Wei;Carthaginian Z;Cebu Rajahnate;Chagatai Khanate;Chalukya z;Chauhan z;Chavín Z;Chenla;Chera z;Chola z;Comanche Z;Congo Free State;Crimean Khanate;Dacian Z;Delhi s;Demak s;Durrani Z;Dutch Z;Egyptian Z;Elamite Z;Exarchate of Africa;Abyssinia;Fatimid Caliphate;First French Z;Frankish Z;Funan;Gallic Z;Gaza Z;Republic of Genoa;German Z;Ghana Z;Ghaznavid z;Ghurid z;Goguryeo;Goryeo;Gorkha Z;Göktürk Khaganate;Golden Horde;S Gowa;Seljuq Z;Gupta Z;Hafsid Y;Han z;Hanseatic League;E Harsha;Hephthalite Z;Hittite Z;Holy Roman Z;Hotak z;Hoysala Z;Hunnic Z;Husainid z;Idrisid z;Ilkhanate;K Israel;K Judah;Inca Z;Italian Z;E Japan;Jin z;Johor Z;Jolof Z;Joseon;Kaabu Z;Kachari Y;Kalmar Union;Kanem Z;Kanva z;Kara-Khanid Khanate;Kazakh Khanate;Khazar Khaganate;Khmer Z;Khilji z;Khwarazmian z;Kievan Rus';Konbaung z;Kong Z;Korean Z;Kushan Z;K Kush;Lakota;Latin Z;Later Lê z;Liao z;Lodi s;Khmer Z;Macedonian Z;Majapahit Z;Mali Z;Malacca Z;Mamluk s;Manchukuo;Maratha Z;Marinid z;Massina Z;Mataram s;Mauretania;Mauryan Z;Median Z;Mlechchha z;Ming z;Mitanni Z;Mongol Z;Mughal Z;Nanda Z;Nguyễn z;North Sea Z;E Nicaea;Numidia;Omani Z;Ottoman Z;Oyo Z;Pagan Z;Pahlavi z;Pala Z;Palmyrene Z;Parthian Z;Pontic Z;Portuguese Z;K Prussia;Ptolemaic Z;Qajar z;Qara Qoyunlu;Qin z;Qing z;Ramnad Sethupathis;Rashidun Caliphate;Rashtrakuta z;Roman Z;Rouran Khaganate;Rozwi Z;Rustamid z;Russian Z;Tsardom of Russia;Saadi z;Safavid z;Saffarid z;Sassanid z;Satavahana z;Samanid Z;Soviet Union;Saudeleur z;Duchy of Savoy;Seleucid Z;Serbian Z;Shu Han;Shang z;Siam Z;Sikh Z;Singhasari;Sokoto Caliphate;Song z;Songhai Z;Spanish Z;Srivijaya Z;Sui z;K Mysore;Shunga Z;S Sulu;Sumer;Sur Z;Swedish Z;Tahirid z;Tang z;Tây Sơn z;S Ternate;E Thessalonica;German Reich;Tibetan Z;Tondo z;S Tidore;Timurid Z;K Tlemcen;E Trebizond;Toltec Z;Toungoo z;Toucouleur Z;Tu'i Tonga Z;Turgesh Khaganate;Umayyad Caliphate;Uyunid Emirate;Uyghur Khaganate;Uzbek Khanate;Vandal Y;Vijayanagara Z;Republic of Venice;Wari Z;Wassoulou Z;Wattasids;Western Roman Z;Eastern Wu;Western Xia z;Xin z;Yuan z;Zand z;Zhou z;Zulu Z;Yugoslavia;Kosovo;Sikkim;Kanem–Bornu Z;Wadai Z;Ethiopian Z;Rozvi Z;Sasanian Z;E Vietnam;Shilluk Y;K Aksum;Gwiriko Y;Toro Y;Malindi Y;K Loango;K Mapungubwe;Ryukyu Y;K Cyprus;K Jerusalem;Garhwal Y;K Nepal;K Cambodia;Champa Y;Hanthawaddy Y;Phayao Y;K Sardinia;K Sicily;K Gwynedd;K Scotland;K Desmond;K Poland;K Hungary;K Croatia;K Bohemia;Albanian Y;K Georgia;K Portugal;Khanate of Sibir;K Romania;Cossack Hetmanate;Duchy of Bouillon;K Ireland;Lordship of Ireland;K Italy;Republic of Pisa;Idrisid z;Almoravid z;Almohad Caliphate;Marinid z;Wattasid z;Saadian z;Republic of Salé;Rif Republic;K Kush;Makuria;Alodia;Ayyubid z;Mamluk s;Egypt Eyalet;K Fazughli;S Sennar;S Darfur;Mahdist State;S Egypt;K Egypt;Emirate of Cyrenaica;K Libya;Republic of Egypt;Republic of the Sudan;United Arab Republic;Libyan Arab Republic;Zirid z;Hafsid z;K Kuku;Regency of Algiers;Gurunsi;Liptako;Tenkodogo;Wogodogo;Yatenga;Bilanga;Bilayanga;Bongandini;Con;Macakoali;Piela;Nungu;K Sine;K Saloum;K Baol;K Cayor;K Waalo;Bundu;Bonoman;Gyaaman;Denkyira;Mankessim Y;K Dahomey;Oyo Z;K Nri;Aro Confederacy;Kwararafa;Biafra;Buganda;Bunyoro;Ankole;Busoga;Tanganyika;Kuba Y;K Luba;K Lunda;Yeke Y;K Ndongo;Kasanje Y;K Matamba;Mbunda Y;Chokwe Y;Kazembe Y;K Butua;Ndebele Y;Mthethwa Z;Bophuthatswana;Ciskei;Transkei;Venda;Rhodesia;Kart z;Nogai Horde;Khanate of Bukhara;Khanate of Khiva;Khamag Mongol;Northern Fujiwara;Kamakura Shogunate;Ashikaga Shogunate;Jaxa;Republic of Ezo;Jiangxi Soviet;Hunan Soviet;Guangzhou Commune;Gojoseon;Alaiye;Beylik of Bafra;Kara Koyunlu;Kars Republic;K Iraq;Arab Federation;Kar-Kiya z;Baduspanids;Marashiyan z;Afrasiyab z;Mihrabanid z;Safavid Iran;Sheikhdom of Kuwait;Bani Khalid Emirate;Emirate of Diriyah;Emirate of Najd;Muscat and Oman;Emirate of Riyadh;S Najd;K Hejaz;Fadhli s;Emirate of Beihan;Emirate of Dhala;S Lahej;Republic of Kuwait;K Cochin;Jaffna Y;Laur Y;Pandya z;Jaunpur s;Jaintia Y;Hyderabad State;Travancore;Udaipur State;Manikya z;Lan Xang;K Vientiane;K Champasak;Lao Issara;K Laos;Pyu States;Ava;Mon Ys;Pegu;K Mrauk U;Taungoo z;Shan States;Arakan;Raktamaritika;Singhanavati;Dvaravati;Ngoenyang;Hariphunchai;Tambralinga;Lavo Y;Langkasuka;Sukhothai Y;S Singora;Ayutthaya Y;Thonburi Y;Lan Na;Pattani Y;Jambi s;Palembang s;S Deli;S Langkat;S Serdang;S Cirebon;K Pajang;K Bali;Bima s;K Larantuka;K Banggai;Luwu;S Bone;Caucasian Albania;Kabardia;Circassia;K Abkhazia;Elisu s;Avar Khanate;Caucasian Imamate;K Imereti;K Kartli;K Kakheti;Crown of Aragon;Emirate of Granada;K Majorca;Crown of Castile;K Haiti;Cocollán;Zapotec Civilization;Mosquito Y;Somoza Regime;Iroquois Confederacy;Cherokee Nation;Vermont Republic;State of Muskogee;K Alo;K Sigave;K Fiji;K Nauru;K Chile;Muisca Confederation;El Stronato;K Chimor;Jungle Republic;Liga Federal;Supreme Junta;Weimar Republic;K Bavaria;Bremen;Frankfurt;Hamburg;K Hanover;Holstein;Lippe;Nassau;Oldenburg;Pomerania;Reuss;Saxe-Altenburg;Saxony;Schleswig;Waldeck;Württemberg;Helvetic Republic;Republic of Florence;Duchy of Urbino;Republic of Cospaia;Duchy of Lucca;Duchy of Mantua;Duchy of Milan;Papal States"
			.split(";");
		var eF, ha, a8g = ["K ", " Y", "E ", " Z", " z", " s", "S "],
			a8h = ["Kingdom of ", " Kingdom", "Empire of ", " Empire", " Dynasty", " Sultanate", "Sultanate of "];
		for (a8f =
			"Pestilent Dominion;Wretched Realm;Damned Province;Corrupt Zone;Cursed Territory;Blight Nation;Haunted Expanse;Malevolent State;Ruined Empire;Contaminated Land;Epidemic Domain;Forsaken District;Abandoned Wasteland;Necrotic Enclave;Tainted Domain;Decayed Principality;Infested Region;Malignant Territory;Toxic Dominion;Ravaged Sector;Ghostly Realm;Plagued Commonwealth;Afflicted State;Desolate Nation;Apocalyptic Zone;Radiated Province;Deathly District;Pestilence Haven;Doom Territory;Malefic Expanse;Abandoned State;Cursed Haven;Corroded Zone;Hauntland;Noxious Nation;Infected Enclave;Ruinous Domain;Wasteland Woe;Rotten Principality;Voided Land;Vile Dominion;Catastrophic Region;Eerie Expanse;Desolation State;Forsaken Outpost;Contagion District;Damaged Province;Abhorrent Sector;Accursed Nation;Doomstruck Land;Radiant Ruin;Deathly Enclave;Malefic Dominion;Plague District;Infected Haven;Corrupt State;Pestilent Territory;Razed Realm;Haunted Wasteland;Toxic Sector;Cursed Dominion;Decaying Province;Forsaken Enclave;Ruinous Region;Malignant Haven;Infested State;Ghostly Nation;Tainted Territory;Damned District;Radiated Dominion;Desolate Expanse;Apocalyptic Land;Death Zone;Wretched State;Malevolent Haven;Plagued Nation;Noxious Domain;Voided Territory;Eerie Sector;Accursed Province;Necrotic District;Doom Haven;Haunt Realm;Rotten Nation;Forsaken Territory;Infected State;Abhorrent Expanse;Malignant Land;Toxic Dominion;Ruined District;Ghostland;Cursed Sector;Radiant Nation"
			.split(";"), eF = fu.length - 1; 0 <= eF; eF--)
			for (ha = a8g.length - 1; 0 <= ha; ha--) fu[eF] = fu[eF].replace(a8g[ha], a8h[ha]);
		if (settings.realisticNames) fu = realisticNames;
	}, this.d2 = function() {
		var eF;
		if (aU.ii && aU.ij.a6r)
			for (eF = h2; eF < ef; eF++) jm[eF] = aU.ij.a6r[eF % pS];
		else(9 === il ? function() {
			var eF, gR = aL.random(),
				eb = fu.length,
				oe = h2 + aM.a8n;
			for (eF = oe - 1; h2 <= eF; eF--) jm[eF] = fu[(eF + gR) % eb];
			for (eb = a8f.length, eF = oe; eF < ef; eF++) jm[eF] = a8f[eF % eb]
		} : io ? function() {
			var eF, gR = aL.random();
			for (eF = h2; eF < ef; eF++) jm[eF] = fu[(eF + gR) % ef]
		} : function() {
			var eF, eb = fu.length,
				gR = aL.random();
			for (eF = h2; eF < ef; eF++) jm[eF] = fu[(eF + gR) % eb]
		})()
	}, this.u4 = function() {
		var eF, eb, oe, gR;
		if (!io) {
			for (wC = new Array(h2), eb = h2, eF = 0; eF < eb; eF++) wC[eF] = jm[eF];
			if (b9.dF.data[6].value) {
				for (oe = fu.length, gR = aL.a8m(), eF = 0; eF < eb; eF++) jm[eF] = fu[(eF + gR) % oe];
				jm[eW] = wC[eW]
			}
		}
	}
}

function c9() {
	this.a8o = [], this.a8p = [], this.cq = function() {
		this.a8o = [], this.a8p = []
	}, this.i7 = function() {
		0 <= this.a8o.length && this.a8q(this.a8o), 0 <= this.a8p.length && this.a8q(this.a8p)
	}, this.a8q = function(dn) {
		for (var hj = -1, eF = dn.length - 1; 0 <= eF; eF--)
			if (dn[eF].da--, dn[eF].da <= 0) {
				hj = eF;
				break
			} for (eF = hj; 0 <= eF; eF--) dn.shift()
	}, this.uZ = function(id, qA, a8r) {
		return this.a8s(this.a8o, id, qA, a8r)
	}, this.a8t = function(id, qA, a8r) {
		return this.a8s(this.a8p, id, qA, a8r)
	}, this.a8s = function(dn, id, qA, a8r) {
		return ! function(dn, id, qA) {
			var eF, p9;
			for (eF = qA.length - 1; 0 <= eF; eF--)
				for (p9 = dn.length - 1; 0 <= p9; p9--)
					if (dn[p9].player === qA[eF] && id === dn[p9].id) return 1;
			return
		}(dn, id, qA) && (a8r && function(dn, id, qA) {
			var eF;
			for (eF = qA.length - 1; 0 <= eF; eF--) dn.push({
				player: qA[eF],
				id: id,
				da: 384
			})
		}(dn, id, qA), !0)
	}
}

function u1(qA) {
	var eF;
	for (jm = new Array(ef), wC = jm, h3 = new Uint8Array(ef), hv = new Uint16Array(ef), hy = new Uint16Array(ef), hu = new Uint16Array(ef), hx = new Uint16Array(ef), f1 = new Uint32Array(ef), ph = new Uint32Array(ef), eX = new Uint32Array(ef),
		donationsTracker.reset(), ec = new Array(ef), et = new Array(ef), eu = new Array(ef), ex = new Array(ef), h4 = new Uint8Array(ef), eF = qA.length - 1; 0 <= eF; eF--) jm[eF] = qA[eF].name, h4[eF] = qA[eF].a4a
}

function c7() {
	this.wE = 0, this.qA = null, this.cq = function() {
		this.wE = 0, this.qA = []
	}, this.a8w = function(player) {
		this.qA.push(player), qy++, h4[player] = 2, player === eW && (u.show(!1, !1), t.a0d()), a6.vi(player)
	}, this.a6Y = function(player) {
		var eF, qA;
		if (2 !== h4[player])
			for (eF = (qA = this.qA).length - 1; 0 <= eF; eF--)
				if (qA[eF] === player) return void qA.splice(eF, 1)
	}, this.i7 = function() {
		io || (30 === this.wE && 2140 <= b3.iL() && this.a8x(), this.wE = (this.wE + 1) % 60)
	}, this.a8x = function() {
		for (var qA = this.qA, eF = qA.length - 1; 0 <= eF; eF--) ! function(player, h6) {
			!a4.i5(player) || (h6 = Math.max(Math.min(100, eX[player]), eT(h6 * eX[player], 100))) < 100 || (0 === et[player].length ? !ak.i6.i7(player) && hN && i9(player, h6, 0, 0) : (hN ? iK : iS)(player, h6))
		}(qA[eF], 12)
	}
}

function u5() {
	for (iO = 0, eF = ef - 1; 0 <= eF; eF--) 0 !== h3[eF] && iO++;
	iP = new Uint16Array(iO);
	for (var eb = 0, eF = 0; eF < ef; eF++) 0 !== h3[eF] && (iP[eb++] = eF)
}

function j1() {
	a8z(), a90()
}

function a90() {
	for (var eF = iO - 1; 0 <= eF; eF--) 0 === h3[iP[eF]] && a91(eF)
}

function a91(eF) {
	iO--;
	for (var ha = eF; ha < iO; ha++) iP[ha] = iP[ha + 1]
}

function a8z() {
	for (var gg, eF = iO - 1; 0 <= eF; eF--) f1[iP[eF]] <= eT(ph[iP[eF]], 4) ? f1[iP[eF]] <= 1e3 && (2 !== h3[iP[eF]] || 0 === f1[iP[eF]]) && a6I(iP[eF]) : f1[iP[eF]] >= ph[iP[eF]] ? ph[iP[eF]] = f1[iP[eF]] : (gg = eT(ph[iP[eF]] - f1[iP[eF]], 1e3),
		ph[iP[eF]] -= gg < 1 ? 1 : gg)
}

function mD() {
	for (var a69 = 0, eF = iO - 1; 0 <= eF; eF--) a69 += eX[iP[eF]];
	return a69 % 4096
}

function bq() {
	var a92;
	this.ir = null, this.cq = function() {
		a92 = [], 9 === il && this.a93()
	}, this.a93 = function() {
		var eF, a94 = [50, 74, 95, 150, 190, 333];
		if (this.a8n = 0, this.ir = [0, 0, 0, 0, 0, 0], h2 <= a94[0]) this.ir[0] = Math.max(ai.fG(h2 * (512 - h2), a94[0]), 13), ih = this.ir[0];
		else
			for (ih = ef - h2, eF = 1; eF < 6; eF++)
				if (h2 <= a94[eF]) {
					this.ir[eF - 1] = 512 - a94[eF - 1] - eT((512 - a94[eF - 1]) * (h2 - a94[eF - 1]), a94[eF] - a94[eF - 1]), this.ir[eF] = 512 - h2 - this.ir[eF - 1];
					break
				} pS = h2 + ih
	}, this.a6X = function(player) {
		a92.push({
			player: player,
			vw: 14 + aL.hd(20)
		})
	}, this.i7 = function() {
		var eF;
		if (9 === il)
			for (eF = a92.length - 1; 0 <= eF; eF--) --a92[eF].vw <= 0 && (a6.mq(a92[eF].player, 0, 46), a92.splice(eF))
	}
}

function cT() {
	function a9A(eF) {
		return eF >= ap.a9F() && eF !== ap.a6g()
	}

	function a98(eF) {
		return 1 !== eF && !a9A(eF) && eF !== ap.a6g()
	}
	this.eA = 0, this.eB = 0, this.os = null, this.oo = null, this.op = null, this.ot = null, this.pG = 0, this.a3z = 0, this.oq = !1, this.a6v = 20, this.or = new a96, this.ij = new a97, this.cq = function() {
		this.ij.cq()
	}, this.d2 = function(map, a43) {
		((map %= this.a6v) !== this.pG || a98(this.pG) && a43 !== this.a3z) && (this.oq = !1, this.or.a49(), aL.u0(map), this.pG = map, this.a3z = a43, a98(map) && (ap.ij.pF[map].a99 = a43), a9A(this.pG) ? a9B() : (map = ap.ij.pF[this.pG], this
			.eA = map.g5, this.eB = map.gB, aL.u0(map.a99), aA.d2([this.eA, this.eB, map.jq, map.jn]), a9C(), a9.a9D(), aA.a9E()))
	}, this.a9F = function() {
		return 10
	}, this.a9G = function(eF) {
		return 3 === eF || 7 === eF || 9 === eF || eF === this.a6g()
	}, this.a9H = function(eF) {
		return 2 === eF || 7 === eF || 9 === eF
	}, this.a9I = function(eF) {
		return 1 === eF
	}, this.a6g = function() {
		return this.a6v
	}
}

function a96() {
	function a9S() {
		ap.or.i7()
	}

	function a9X(ei, a9W) {
		0 < a9W && (ap.ot[ei] += a9W, ap.ot[ei + 1] += a9W, ap.ot[ei + 2] += a9W)
	}

	function fj(ei) {
		return ap.ot[ei + 2] > ap.ot[ei] && ap.ot[ei + 2] > ap.ot[ei + 1]
	}
	this.yx = -1, this.dW = 0, this.a9J = 0, this.a9K = 8, this.a9L = 32, this.a9M = 8, this.a9N = 32, this.a9O = [0, 0], this.y2 = [0, 0, 0, 0], this.hF = null, this.a9P = !0, this.a9Q = !1, this.a49 = function() {
		-1 !== this.yx && clearTimeout(this.yx), this.yx = -1, this.hF = null, aA.a9E()
	}, this.cq = function() {
		7 === x.dY() || this.a9Q || (this.a9P = !0, this.dW = 0, this.a9J = 1, this.a9O = [ap.ij.pF[ap.pG].pE[0], ap.ij.pF[ap.pG].pH[0]], this.y2 = [ap.ij.pF[ap.pG].a9R[3], ap.ij.pF[ap.pG].a9R[4], ap.ij.pF[ap.pG].a9R[5], ap.ij.pF[ap.pG].a9R[6]],
			this.a9K = ap.ij.pF[ap.pG].a9R[7], this.a9L = ap.ij.pF[ap.pG].a9R[8], this.a9M = ap.ij.pF[ap.pG].a9R[9], this.a9N = ap.ij.pF[ap.pG].a9R[10], this.a9P ? this.yx = setTimeout(a9S, 16) : this.i7())
	}, this.i7 = function() {
		if (8 === x.dY() && f.k4()) this.yx = setTimeout(a9S, 16);
		else {
			if (0 === this.dW) {
				var a99 = aL.a8m();
				if (aL.u0(ap.ij.pF[ap.pG].a9R[2]), aA.d2([ap.eA, ap.eB, ap.ij.pF[ap.pG].a9R[0], ap.ij.pF[ap.pG].a9R[1]]), aL.u0(a99), this.hF = aA.a9T(), this.dW++, this.a9P) return void(this.yx = setTimeout(a9S, 16))
			}
			for (var ei, fX, a99 = this.a9P ? 10 : 1e6, a99 = ap.eB - this.a9J - 1 < a99 ? ap.eB - this.a9J - 1 : a99, pe = this.a9J + a99, fL = this.a9J; fL < pe; fL++)
				for (var fK = 1; fK < ap.eA - 1; fK++) fj(ei = 4 * (fX = fK + fL * ap.eA)) ? this.a9U(ei, fX, 1) : (this.a9U(ei, fX, 0), function(fK, fL, ei) {
					return 1 < fK && fj(ei - 4) || fK < ap.eA - 2 && fj(ei + 4) || 1 < fL && fj(ei - 4 * ap.eA) || fL < ap.eB - 2 && fj(ei + 4 * ap.eA)
				}(fK, fL, ei) && this.a9V(fK, fL));
			this.a9J = pe, this.a9J >= ap.eB - 1 ? (ap.oo.putImageData(ap.op, 0, 0, 1, 1, ap.eA - 2, ap.eB - 2), b3.d1 = !0, this.a49()) : this.a9P && (this.yx = setTimeout(a9S, 16))
		}
	}, this.a9U = function(ei, fX, fz) {
		a9X(ei, Math.floor(this.a9O[fz] + this.y2[fz] * this.hF[fX] / 1e4) - ap.ot[ei])
	}, this.a9Y = function(ei, gR, a9Z, fz, y2) {
		a9X(ei, Math.floor(this.a9O[fz] + (1 - gR / a9Z) * y2) - ap.ot[ei])
	}, this.a9V = function(g9, gA) {
		for (var ei, gR, a9Z, pJ = g9 - this.a9L, pK = gA - this.a9L, pf = g9 + this.a9L, pe = gA + this.a9L, pJ = pJ < 1 ? 1 : pJ, pf = pf > ap.eA - 2 ? ap.eA - 2 : pf, pe = pe > ap.eB - 2 ? ap.eB - 2 : pe, fL = pK < 1 ? 1 : pK; fL <= pe; fL++)
			for (var fK = pJ; fK <= pf; fK++) fj(ei = 4 * (fK + fL * ap.eA)) ? (a9Z = this.a9K + (this.a9L - this.a9K) * this.hF[fK + ap.eA * fL] / 1e4, Math.abs(g9 - fK) > a9Z || Math.abs(gA - fL) > a9Z || a9Z <= (gR = Math.sqrt((g9 - fK) * (
				g9 - fK) + (gA - fL) * (gA - fL))) || this.a9Y(ei, gR, a9Z, 1, this.y2[3])) : (a9Z = this.a9M + (this.a9N - this.a9M) * this.hF[fK + ap.eA * fL] / 1e4, Math.abs(g9 - fK) > a9Z || Math.abs(gA - fL) > a9Z || a9Z <= (gR = Math
				.sqrt((g9 - fK) * (g9 - fK) + (gA - fL) * (gA - fL))) || this.a9Y(ei, gR, a9Z, 0, this.y2[2]))
	}
}

function a9C() {
	2 === ap.pG ? a9a([256], [256], [0, 205, 256], [500, 500, 0], [0, 0, 0]) : 7 === ap.pG ? a9a([512], [512], [0, 380, 512], [500, 500, 0], [0, 0, 0]) : 8 === ap.pG ? a9a([410], [410], [0, 120, 210], [0, 80, 640], [0, 0, 0]) : 9 === ap.pG && a9a([
		512
	], [512], [0, 70, 180, 200, 290, 420, 512], [500, 500, 0, 0, 500, 500, 0], [0, 0, 0, 0, 0, 0, 0])
}

function a9a(a9b, a9c, a9d, a9e, a9f) {
	for (var fK, fL, a9h, a9i, ft, a9j, gt = a9b.length - 1, a9g = ap.eA + ap.eB, eb = (a9g *= a9g, a9d.length), eF = eb - 1; 0 <= eF; eF--) a9d[eF] *= a9d[eF];
	var a9k = new Array(eb),
		a9l = new Array(eb),
		a9m = new Array(eb),
		dd = aA.a9T();
	if (void 0 === a9f)
		for (a9f = new Array(eb), eF = eb - 1; 0 <= eF; eF--) a9f[eF] = 0;
	for (eF = 1; eF < eb; eF++) a9k[eF] = a9d[eF] - a9d[eF - 1], a9l[eF] = a9e[eF] - a9e[eF - 1], a9m[eF] = a9f[eF] - a9f[eF - 1];
	for (fK = ap.eA - 1; 0 <= fK; fK--)
		for (fL = ap.eB - 1; 0 <= fL; fL--) {
			for (a9h = a9g, eF = gt; 0 <= eF; eF--) a9h = (a9i = (fK - a9b[eF]) * (fK - a9b[eF]) + (fL - a9c[eF]) * (fL - a9c[eF])) < a9h ? a9i : a9h;
			for (ft = a9e[eb - 1], a9j = a9f[eb - 1], eF = 1; eF < eb; eF++)
				if (a9h < a9d[eF]) {
					ft = a9e[eF - 1] + a5k((a9h - a9d[eF - 1]) * a9l[eF], a9k[eF]), a9j = a9f[eF - 1] + a5k((a9h - a9d[eF - 1]) * a9m[eF], a9k[eF]);
					break
				} a9n(ap.eA * fL + fK, ft, a9j, dd)
		}
}

function a9n(fz, ft, a9j, dd) {
	ft < 500 ? dd[fz] = eT(dd[fz] * ft * 2, 1e3) : 500 < ft && (dd[fz] += eT(2 * (1e4 - dd[fz]) * (ft - 500), 1e3)), dd[fz] += eT(a9j * (10 * ft - dd[fz]), 1e3)
}

function br() {
	var a9o;
	this.w3 = 0, this.w4 = 0, this.w6 = 0, this.w7 = 0, this.cq = function() {
		(a9o = new Array(ap.a9F()))[0] = {
			g5: [0, 5e3, 8e3, 1e4],
			gR: [220, 250, 255, 220],
			tD: [190, 220, 0, 0],
			hj: [170, 200, 0, 0]
		}, a9o[1] = {
			g5: [0, 4e3, 5e3, 6e3, 1e4],
			gR: [25, 0, 100, 0, 25],
			tD: [25, 0, 0, 0, 25],
			hj: [25, 0, 0, 0, 25]
		}, a9o[2] = {
			g5: [0, 500, 2500, 2999, 3e3, 3200, 4200, 5200, 5700, 8800, 1e4],
			gR: [15, 15, 70, 40, 48, 48, 252, 40, 40, 20, 30],
			tD: [80, 80, 190, 90, 46, 46, 248, 180, 180, 90, 140],
			hj: [120, 120, 220, 110, 37, 37, 217, 10, 10, 10, 10]
		}, a9o[3] = {
			g5: [0, 400, 1800, 2e3, 3200, 4500, 6e3, 7700, 8500, 9500, 1e4],
			gR: [10, 10, 20, 10, 30, 10, 16, 40, 55, 230, 230],
			tD: [10, 10, 40, 50, 100, 40, 80, 120, 55, 230, 230],
			hj: [80, 80, 200, 10, 60, 10, 16, 40, 55, 230, 230]
		}, a9o[4] = {
			g5: [0, 300, 1400, 1700, 3e3, 4e3, 1e4],
			gR: [10, 10, 20, 10, 10, 170, 212],
			tD: [20, 20, 60, 100, 100, 110, 170],
			hj: [70, 70, 160, 30, 30, 60, 120]
		}, a9o[5] = {
			g5: [0, 1e3, 3e3, 3500, 4e3, 4500, 7e3, 7500, 8e3, 1e4],
			gR: [10, 10, 20, 10, 5, 10, 20, 5, 20, 25],
			tD: [30, 30, 50, 100, 30, 100, 140, 60, 140, 200],
			hj: [80, 80, 200, 10, 5, 10, 20, 5, 20, 25]
		}, a9o[6] = {
			g5: [0, 700, 2650, 3200, 5e3, 8e3, 1e4],
			gR: [10, 10, 60, 255, 255, 200, 200],
			tD: [10, 10, 60, 255, 255, 200, 200],
			hj: [80, 80, 255, 255, 255, 200, 200]
		}, a9o[7] = {
			g5: [0, 400, 1999, 2e3, 3200, 4e3, 4700, 5500, 6500, 9500, 1e4],
			gR: [10, 10, 80, 255, 255, 55, 6, 70, 20, 155, 255],
			tD: [10, 10, 90, 245, 245, 170, 80, 190, 20, 155, 255],
			hj: [80, 80, 255, 235, 235, 55, 26, 10, 20, 155, 255]
		}, a9o[8] = {
			g5: [0, 700, 1300, 1900, 1901, 2500, 3400, 6e3, 1e4],
			gR: [25, 30, 30, 30, 255, 255, 30, 40, 20],
			tD: [25, 30, 150, 150, 245, 245, 80, 150, 70],
			hj: [60, 170, 170, 170, 235, 235, 30, 40, 40]
		}, a9o[9] = {
			g5: [0, 400, 2009, 2010, 3300, 4e3, 5200, 6500, 8e3, 9500, 1e4],
			gR: [10, 10, 80, 255, 255, 55, 23, 36, 20, 155, 255],
			tD: [10, 10, 90, 245, 245, 170, 60, 160, 20, 155, 255],
			hj: [80, 80, 255, 235, 235, 55, 9, 72, 20, 155, 255]
		}
	}, this.a9D = function() {
		var eF, ha, dp, gL = function() {
				var gL;
				return ap.os = document.createElement("canvas"), ap.os.width = ap.eA, ap.os.height = ap.eB, ap.oo = ap.os.getContext("2d", {
					alpha: !1
				}), gL = ap.oo.getImageData(0, 0, ap.eA, ap.eB), ap.ot = gL.data, gL
			}(),
			g5 = a9o[ap.pG].g5,
			gR = a9o[ap.pG].gR,
			tD = a9o[ap.pG].tD,
			hj = a9o[ap.pG].hj,
			dd = aA.a9T(),
			eb = g5.length - 2,
			a9s = new Array(1 + eb),
			a9t = new Array(1 + eb),
			a9u = new Array(1 + eb),
			a9v = new Array(1 + eb);
		for (ha = eb; 0 <= ha; ha--) a9s[ha] = g5[ha + 1] - g5[ha], a9t[ha] = gR[ha + 1] - gR[ha], a9u[ha] = tD[ha + 1] - tD[ha], a9v[ha] = hj[ha + 1] - hj[ha];
		for (eF = ap.eA * ap.eB - 1; 0 <= eF; eF--)
			for (ha = eb; 0 <= ha; ha--)
				if (dd[eF] >= g5[ha]) {
					dp = dd[eF] - g5[ha], ap.ot[4 * eF] = gR[ha] + a5k(a9t[ha] * dp, a9s[ha]), ap.ot[4 * eF + 1] = tD[ha] + a5k(a9u[ha] * dp, a9s[ha]), ap.ot[4 * eF + 2] = hj[ha] + a5k(a9v[ha] * dp, a9s[ha]), ap.ot[4 * eF + 3] = 255;
					break
				} ap.oo.putImageData(gL, 0, 0), ap.a9I(ap.pG) && a1.g3() && ap.a9I(ap.pG) && (gL = a1.uQ("arena"), ap.oo.save(), ap.oo.globalAlpha = 1 === ap.pG ? .1 : 1, ap.oo.imageSmoothingEnabled = !0, ap.oo.scale(2.8, 2.8), ap.oo.drawImage(
				gL, Math.floor((ap.eA / 2.8 - gL.width) / 2), Math.floor(.5 * ap.eB / 2.8 - gL.height / 2)), ap.oo.restore(), gL = a1.uQ("territorial.io"), ap.oo.save(), ap.oo.globalAlpha = 1 === ap.pG ? .1 : 1, ap.oo
			.imageSmoothingEnabled = !0, ap.oo.scale(.87, .87), ap.oo.drawImage(gL, Math.floor(.745 * (ap.eA / .87 - gL.width)), Math.floor(.422 * ap.eB / .87 - gL.height / 2)), ap.oo.restore()), ap.oq = !0, b3.d1 = !0
	}, this.u3 = function() {
		for (var ei, fK, fL, a9y, a9z, dr, w4 = 0, g5 = ap.eA, gB = ap.eB, dp = g5 * gB * 4, aA0 = a19, aA1 = ap.ot, eF = g5 - 1; 0 <= eF; eF--) aA0[(ei = eF << 2) + 2] = aA0[dp - ei - 2] = 3;
		for (dp = 4 * g5, eF = gB - 1; 0 <= eF; eF--) aA0[(ei = eF * dp) + 2] = aA0[ei + dp - 2] = 3;
		for (a9y = g5 - 1, a9z = gB - 1, fL = 1; fL < a9z; fL++)
			for (dp = fL * g5, fK = 1; fK < a9y; fK++) dr = 1 - (aA1[(ei = dp + fK << 2) + 2] > aA1[ei + 1] && aA1[ei + 2] > aA1[ei]), aA0[ei + 2] = 2 - dr, w4 += dr;
		this.w3 = (g5 - 2) * (gB - 2), this.w7 = 0, ap.a9G(ap.pG) && function() {
			var ei, fK, fL, dp, aA0 = a19,
				aA1 = ap.ot,
				g5 = ap.eA,
				a9y = g5 - 1,
				a9z = ap.eB - 1,
				vw = 0;
			for (fL = 1; fL < a9z; fL++)
				for (dp = fL * g5, fK = 1; fK < a9y; fK++) aA1[ei = dp + fK << 2] === aA1[1 + ei] && aA1[ei] === aA1[2 + ei] && (vw++, aA0[2 + ei] = 3);
			a9.w7 = vw
		}(), this.w4 = tn = w4 - this.w7, this.w6 = this.w3 - this.w4 - this.w7
	}
}

function a9B() {
	var fy, aA3 = ap.a9F();
	ap.pG === aA3 ? fy =
		"DYDz2ESNu-0UYCCrS9c3pBUrKHc94BhIBhIJpIIBnMIAAIrKSSpKABmgf9e7X7ecX-5P0baOy191XXX7eegf9mcfUrrxrKppppKpKSrzUMMMSKKKrJcXcXcmgcXnKIKBmnCIJonCKrrSrrSSxSS9XcJnBe9XemmWXeX99chMIAEprrSrrtbrxIrMKBn9eBcecX9X7f99X90e577VX1VcOWX16XX7X999cX7eWyXXccVVX6rUSrrwUrlzpbbrrU6xzztzxzrztzbaOtaOa5-0WV-77e-9119HcXXZecccceXXX7ce9Xcce9e9meeVof919ee9Wzy5XeXYS9KBcXee_He6ce1ee0zxzta5UaX99c1mXcXhEJp9cNHWcTN9BcnAzJoorIBe0c--nIJoonSIBe-OX-NNOXWbcBgzIHX9xHzS9mcCSI9-nBrrorK9VcP-jHe9_BhxzKHcWC9mZp9-3n9fBnS970a6zs7egrIAAIRUKocXX9gx9npKaUxBppABe5OdHpBe-AC9-17TOWABpKI9-7JmnC6zGtxIBmen9egp6aUlyOzbrbbqUzxHXgjKKBc-ZehlxoeeoxObonox9XonAUbzS9efBdCAArHmjISBhEJnAofBUIJgrpocXxIBUoxHVmnBmmXAExoUxABmdAIBgnBonIAC6oxHVgfMHcXcUXAAGxIBgfxJch9c3enCMzSBe9eXomxHeBgmeCSBgpKMp9hzHfIEzHnArSxHX7pSrUHcnCMrUpSa5UIonABrSBccnBopJttzbxpBonHXpIEKMrMSrxpKxzUzltyUtaTOaOaObaT5UzNTOV0c116rMMKSKrxIKpJpKMSKMGxISCrKMSpKMKrSpSpI9xp9_pMMMMSBoxSryTUUxa5P7-0ttbWzzzxzaN5-NOWVN--0Wa5-0X-0VNVN7TOzaOWzL0bbX0y7NN5Ua17V111749c79e1c-V-----Ow7--N57-OzaN0ba156byNNT6q5OzWaT55-OsOX1777Oa55-5T5UX16tzUOyUtzrpzUrSKKSSAoemnKCIAIICI9KHn9CKBhCSHgenSAJnIJxSMMKKSSpKoopKKHpSoorSzxpWxMS-UKISaOxMOxttyOzy5OzbbtyTOzbtaUxyUyTT6porUrSztzzMSp9eceoogeZp9ZxJx9geeeXe9eZgeC9gegemp9gmpKMSonSxKrrbaUMIKJpMKKKpIACBmeccV71XX7V1mmmmhCCCKJompKKJpMKSKSKpKMJpKBeeceenKpzHnBnBmceee-X1117ememfBn9mfCBmgemf9mfBmf9xromcec7Us8He0u99cWtbc-PeCCS9VecZnBnBemfBn9X9c6aOXA997Y99755VXc6tXXmV5Os-ObVN0yN0bzaT-7ec7N70Wa-OV-5eggnHon9f9efCBpMzop97epCKIpSIBpKrrSKKIKKMKMJehzKKErJeABnIAJc717f9eBnAJzrHe7V9d9ef9gmopKUKC9gmcV6tX73eCIJoonIBnBnBgnCHgjJeZfA9megeegfKCICCJnIA9meZf9mfIEMof9XceXe97X-59XdCIKKpKKCJoeVcf97mZmVVV199YJmX7gceY9gpEOxMMJecrSSGzOxSrxprSxzJzUopSrIxKBpUMIpMprSropEMHnBrpprK91AJpJpIICpBopICCJonKBn9mcme9VcX9ee7X7e9ece9Xe19XcX91Xee9Xcce9VVVccefAAABe7emhBnSSKMSIJhCIJpKJppCKKIIIICJgpIBpAIHpBcoooonIKLObpBnKlzrKIKCJpCJpBnBpUzrrxpxSbbwUxzUprpppppJppMMIrrSSRUbWsOwUzUltbzrxzUzSzUbrrTTUUrSbbV6WbaTOzxzyN5TN-T5TOxbtts71-X-70V0sOWsObbaT0sTObw70tbbzbxbzzyOtyUtbyUaOV1-N0cVN-50aOtza6tzlxzUxSrzUzSSxUSzzOzzs5OyOtyOyUztyObaNOtaUrUxrrUSrrUrMSJrSIMSpKISzKUSpSrSSrzSMMxMSrMSpSrUzSSzzrTUMSpprSzMSzUxSSIEUSrzrUSpMKKxpKrKMKBmmrIKBgpKrzs6VOsUa--5ObzyN77-7X7e970V-5Oa5ObzxSxrzzSrKMUw-OV17X7X1X99X97X9X99cXXXXX977OaOVXeeeeecX7cX7X7X177-7-X-71-7XX97X97cX7VVV1--VObs970cVObtzbtyObrzxSomdKKSSMKqTN5NN0xrMIM5UrKKKpEKrSMSMprSrxMMUzrzrzSrSrSrHXenOtxrrxrxzSrrSrUrrSrSxMSxxKJpKKKJnKKrKIUUSrSrKKzKxKrSrSwUxIBnrxpSSpUzyOzzzzyUSxzRUpCBee7ecXce89omegpIBrpxzSrMJnKrMSFT0tbrMKxKL0VObxprSSlXV-11-c-X-WxzxFUaPcX777OzztzrSrMV-V75X96zzMKrUa9e-7V17gc9XeV90Bf957cVOzrMOX17X7X-X7X7V-N-6aUxCKzUUKprcX-UzSrN17WzrxrNX7ecV17WzzbaOtbxraObrOxrbxwUxpUzrzraOy5OVOWtzyOzzxbzVNXccXcXcX1-V197V-ec5Oy5N1--555UyN-N1---VOWX0Wtcc0aUMMyOs----Zc5-TOtsOWX7c0xzLN-NWbyOyUyUzrbxJe9gfTUxAMxrxzlbzbzbq5UKrJnAABnAAICETUtxSrzrpIpKIUSxraOaOVNTObzWa5NOtxxyOyOc-5A9YBmnBfHceX7-XXcX9e9Y9e5OzUbxSyVUX5OcUa1-UMqNNUbyOtsUWtWbWaObtzbyUWy6bzpJmoh9nIUI99oghSUzrrrSHeHohKCJgrKJemgcrS9nry6xSrUMStxzUSzqUrbrUxUSxxrrprUU6zSrbrtzUSUSzxMKxSMprMKIIIoonIBmohAIAHgf9eHeemfI9nA9mf9c9n9ZeXc9d9n9ccX7VZmoceeHVX1Zn9meZegegegfBhABehABonAHnABhCIBemee9eBfBeecgeohCUxzUbzxI9egegfAUUrHmegemecWcfCUp9meX9Beeef9onrSpAAKKKIyOzyUzJnBjSrxSSIBhMSHgcVYKxBmnzrROzpzxzSKKCKUzKBnoUzzbzpJmegfzyUzFObyUzrrzpKUSlzry6sUyUVN-7NOzbzzlzrzUrUSrrURUxzbzsTUsUWts5NOWa5ObzrUxrtyOWWaOzMSJnIAIprMJorKMIrSKMKKpUKCBonKMJnCJpCIKIKMJmpKIMKJpCJpBxBonHomoemmegnHf9f9cX7ce99emecgn9h9eA9nCHgfBnAIBfHh9eXXce9emec7f9ec1me89eeceme89fHeemX77-ceeeemeX9X9eeecV-V9e9Xe7e9eefBnBeefBfHmnBnBnKBpIEpKxMSKJnBpBnBnBmgmeeX9cXXVcX7Xce1eXcXe7ee9eXeeeX9X7V7V77V--XcXee7ec7X9eXXceX9f9eeee997X9Ve7Zee7WaX5X2Be-cee17X--0tsUbtaT0ta5-Oc--7Xe-X7--OVUtbVT--QA9nBmcXV--97X9ememggnBecJceeXme-cXdABeXeX97cnHgeeI9IA9XcVX7eX99e9e9mgeXeXemmceZmXe9ceXemXmggf9mmnAI9X1eIHcXfBghBmf9BemcX9Y9Ve9--JmZeccXA9Xd9cX9VXVVc7-V-Xee_BnJhIIBnJnBmohBgohBcmmf9eHf99Hf9HmommmmV5N-MvxppxrIICWzsOxX--OV5s0i1mopMKppzTOaN-0XXceV--0lJ7-90mzBlV2N7tRof9JqUsOaW7c8bwrrJchpK9-X7PBfHjKogcP0Jd92SMUwUlxMSErHegnrlxI9X7cY99e7hSzxpxSIIUHozogmgecYIExxxrrrKpKrSrMMrrlxtyUtxblxUyTUbyUUSaUy6Wzttbbc5N5N7V7XWaT7V6aZeVWsV9nIA9X2BmcWc7ooc--f9IBomV-0cnICBeXgn90Wc5TOa7-1-5cX---d11---esD---m8D-1VvAYqV-92glC5--NEEiqV-7Hsjk014I4wognBxwOs0Wc-D4y4gcT--0Y8X-0WalAk--0pHX-1Wsy6EV-a7EDhCBtaT9--X3IIV--_VJV0Ndepmzq1-0XeJbD-5XhvrCqTe-07iCnpteV-7iejk-iAtCxEIrrX71-2smknnEUUpze-e-c-1BtMB--2Kbq--YMmzV-sqPmrF7--Culc-HCwyxxcV-DEWXhte-DZ7mzorSr56eX170LG-rUSrSItzOueVc93c-5ZH-rrRP9-2d613nHdRUR6kP7-CZVZUEKUyUe91e-2ZYhnTPV-t8OMny7-1HZrT-DZf16A9mjFUzlsV--Hh_N-1HlyB-CZhCrSpzrkX7cX-2ZibAr-VMdC8brSrzUxSSIBxpHX17c8CrJe7rrUIpSrUxxzSrMIMOs5OVV7X7X7977V-7P19Xcce--8DNHk-LIcPSpN7-0ODtgnMN1-7Zz5USxyX9c--J2As-9J2CSu-08FHSrR7V-0G5xV-OH5vqV-0LEoV0OLiAnMN70D_f4UKIBnSBgzSrSxSSMSxpSpppzc-5TTUMbV716s117X1Xcce-cXXHcX--0Rs7V3dS04nKonpSSkV7----TMGPxrS-V7--MN-c0HMYnBnrIAIrK-OWV75V-tTEHotV-qMoqSMUUbe9HXV-mNcawnr6xtcVe-3aNiUIq1-6aOwMISlc1-6aSe6rROec-8ac9fISzuX-V1tf-1mnBrlWaN-NajMY9ggeoopCTTTTN6aN1HdgkXoohABnK9n9KJmpogeV-0XJenppSrUzJgghomhp9VnxIAAzOxWbbrIBnJmenBegozlWyObxIKBonIGaOVT50xSk6xJpEpIHnBonBoptxpr56xrzzbonCBnCMMSonzxJmopCIJomX7mceHcV7nJxSABhrbxEKCIJhAA9HgenABrUMbqUpSUrprSrbzzp9hABeXce9YAHcoomnBmmnBmmnpzaTTUrzzMpzWWblbyUUSrUrxbbzzblxrUUbrzSrtztzw6btV19ceWXWzq0aU6aTOta0a0V5777Xce7nA97VOa0X-17VUVV0V17-17X7V7-V----1-V-VcX9A9cWbbzyV-U5T5TOa5NNOaOV1Xe9ce99mZee5OtcWbaTTTTTOWe9ZeXcmcXVV38gtRnCMzSw1X6VcV08hu4rq9--tiGRrac-1Qfbg-dax4zrrIKoeBxErUlzSGbs0VP3eXX97XV-9R0KCsV1OlXjprrP7X7-HRQsCpVc2TRgLxJrKBeKKJe7BhIKKBlwOaUrNTUsNNNcNP91V---PS6VgopVN-LbHRrK999ezrxxoy5Tc7-0bJGjF--6Spy-5bU7rSbuXV4tsIYpKSSrSp50aX-177e-2baNMC5-2Otd7nHrpOba7cV2tv2dnICxz-Uk7cc0mUIkRnBpCBpCIJOWa0VNOtc-19UQnBeegmnIISxJns56zaOWtu7TV--URWN--VDLc-eVE7zSrUX7Xc-5WM4BN1DWTIggpBnEKKKESCWV5T5Wa-N0a9VsP6YRn9cmY9JggoggzUKHfA9XmcP9XZfIJhronABfISpxrUrrI9ABnBggrxxoe9fHmeBdCDUUrHf9orUogrzzJfUU6zUzbbbzrty6brbrxxz57OtsN5OsN5V5VT5V57N56yTUtsNN1cNNVV5VNeeeZeWtu77-XX-KgxCqWVV-P8w5qV-uAjtz5c15XwhBooopBonIKKJNN5-N5-6WVN-8ckmzArUOVeV-uDoWxNV--YoA7-TYoYRoxa57-1_P1T--8NKD-9dNS2ACAUta---dQzr-DPM79mmgcpI9chMKCppxxxrSzIbXc0aT1WVOxk7-N-9c0eauZgfAKrSrrSla-5-7n9-V1eVE3nKUwNVcV0eWZinCF5N0TcbkCMSrzr5OVPXCA9VXV-1b0uV0ezUBxUsXc--mhTc--n9_c1DnTIxCCSMKC9eCKClsT5OsN-V7NNV6QJcYxzUSxzSwUa7X9I99Xd9X-BhW8EE6rUw7ceV6fXkApBmf9f9hKGaOWzzzObV1V-PuipRpJ5--6iiarprP77--DrhL-0iv-fN-7jNKjExzXcc-Y1kshKK-5-V-wF2umWs-03EWs-03_Ms-23gdy-qlmyACJmcgfBnCIIrKpICUSIprUa0VOV5N5---V5---wRnFru7-E6kMClX-4lwIAzq9c-A7r-z5V7gdk8monBgfCCCElzbzxsN995-T5-KgiSunBnABmeeIHprrKJxpIISKICJpKprUzOcOzzUTN---0V--50aN1-1-PV7XX-SnCeY9f9mnUSSKzMtaOWa9VX--bBy1gzSxX-e-4nFNEAqTc-6C7Wgs-EC_DBjN-0nVb2N-3n_EYByN--nfWnV1Bx8ZorUaV9-CnqgbKISrNN9-9-8o5aACrSVWXV-C0gPk-jFRwSM6rsW9VV3h23TmfBjOxMUtaX17-6GYfE-0UHSjwfEzbxpUUq17ZcXeV-h8rqr--3odX6MF--8ogzvMJrN--V1xAI4npKwT7cV0Xp-Yf9nBeehKMKrzzSxrSxrUSzzSxrSMzSzzV-T-7V10Wa6VOWVT1mmeeegn9eeeXmcX97V-IJGnCr1--2JVvD-Bp7gzSxw6aeZcV0hHX5merts-EJjUhq7-2pGMvBtV-hJmVz1-1pJofqV-0KQ3c-0KztN-0L5k7-6LYvE--ILYxhTNc-0LZ57-ALu1CaV-4SIqV-hSQ3na--KpjX--ppknVESTPknBgmgn9f9f9onBmenSpMGzxbtbzbaOV6zbX9-NObWV-4TmmV3SToLnBnJnST5Oa-1-0px0YD-0pylvD--L3Ge--q54IV2CWmWnUUz5Pcec-nO-URhBoUy6VX-1qFuQGc-MOcagpR---CcERs-0PQUc3MPs8gehClzSzbzzUzxMr6tyUzzbzaTP0HgmcVXegeeeXeh9eX7e-JqqUEKIMpzz5T7cXX97-bRBpSKoT5X7--M4g1-grMIbBecemgfMxUpzMzObtu7V0zrrq7e9eV-MTaFhOy9VfLnt2-9-17117VcX1-1X97cVXX9177V-VXV9-WaOSMSSSSrrUSKMKxrrrUSxrrUzsOV7--N-tVN--N0bKIKKQCKRnKQCUtrTUtUSxpMprrUUKxSpxrpprMrxF-EcVGxTX" :
		ap.pG === aA3 + 1 ? fy =
		"QREc7lR7oVUYGy_KJOJKKKKuK4OKT_K4KG_u_GJJO_3K_KKKL_4KL__KK_4_LKK_MjzuOOK_KKKOKLKKLLUjzji_KKMgyzdMjzgzzzEszzyzzjvuQvieeid_POOvzkzvzy_TvuOK4GKKvyyzzydJQi_OdKKaLOLajdOPuueaYBzydJdPOybvdbjeuvizwzujuQnunl2wBnBE2-EYBz2nk2kFzwBzznBydnwznEYwnnEBnnwkyvwzEgznzzEwwwwznnxK4KGOJ2zl2nzifvwyw-J0GGJ042nvzEvzwznJEnzlG42zg02KKGFzzEzzeT-woKK3EvoKLOJBnBnzE2EznnwnwznznzpJKKKKOOKG_G_LKFwl2zK8K4JK4KKKKKKKKKKKKF_g38EBemXeeeeeemeemgeXeegf9XgeeexCxzzzoenErMroeXeeegfEzSS9eVcghoeemf9YBe9ee9eXghrzzzKBfIUzrbzUzzzbryOxrzzbbsTXe9geY9egeeBeY91cUy6z6xtxbxzbzlzObrx6ztztue5UyT6zzbzbae7UxyOzzbzzbbtzyUyUtzztbyUzzbuecZeBeXeeecgeV--1ViZ-00JJIV379xwOLKKgzyzK2zF5g4ccBgcn9ggepUxAprzztxtyOzbzzbe90f9cXX99V-cAQAOx-PFLqqmemxp9zzttzIAzrrzzxzzze7X9ZeceX5ece---AorF0B4uUghzzae9-6VjJh_UznK---NUXV1NBEpOLYnzlJ--0X1X--Vl4pk-B5KYEc-D29vazJ-HkP9DmexzxxzzzrbztbseeeHeYHceXV-NC5uUF-R5YYCyX-2Vpc0jCF--5lM7-12TuM-hkQrZrS9X7f9e9enrSxrzaUxx9f9zzHhzUxqOaOsObbzSxoqUxyUY999c9Xcecce7eV5NDrSOLauUwzzzzEGK4K_0F2Z6YfEUoefUtzUzMyNNe9ceec0a2zdLQdyjwynxKKFznpGGJ--1-_X-AW0ZpjvnzCKKJ--1309--02HO---WrDV1sGfOOjzzn4KK-0FYN1qP-2W7RtfkF6J8G-geeemf9gemegfEbqUrxEbyTgecOwUbbxEbyTTUac-H3crrjCLEE1KoQBrofHegeecBefBeeegfAACxUHemeeeeegxrSrzxxoeeXXe9ecdAzUomXexzrzroeXeecc711_rI9nUSxxKMSryUzrzUpxKx9cV7cceghrrJnJmhBe9ee9VUrxy0a5-7e7VVX-7XccOVX99eefKKAAMxMIUxzMrxK9XXXXeXceXceee9mxxp9oeV9mf9eHgmeeWsXnHcmfA9oenJf9XcXcOby999exKKzMIJcceYBggghxrI9e9e99pxzpHeccceX110cXe7cXWzrUzUxzzrzrtzbaOcVcceXccce9Xceegcce6emeZe96buXeXoe7TZhBe2Bmc6eIBdC9eC9fHcHcAC9erxHed90C9MTUzoh9ZjJeofIAzHghHzI9nHYACCA9VxIHcfx9gmmnEJrKErJzSC9xrrrtyTOaUa0xSxKroxMSSrIMKqUlc6bztWx51--P7OyOy0tcX997V-NP6WsUaUbaOaX6VTOzzzxxpHnBnBggofCKSpJxUUo6pzzbtzyUzbxSzogfABeceef9mpSzoppI9e7X9nCCKMMK9fEI9ee19mfBgemh9W91WuI9gf9e5eX17N5NUXc0a1nBenUHfSorpMKMrHXh9XgmY9nMJmV1nIISC93fA9gnKBemp9e9XxKoeeeA9fSMzrxrpMSxMMHorIKII9eecgeceeee9gmghrKKCpKCIJonMozKJp6xyUzSppr5OttzzzzWWtyN5ObcV-5OaOWttyTTN5VWWbbzzrrxaOtbyNTUUrrSMMSpxrrSrUxxUUpSzSMKonIOaN6aVcVNOzUrL17ccXccVPeccX7717cXX-5V0zbzJxOboUKrKrrUxxrrSxxrSorIKSrMpUUISxxAESpGxrsVWzP7XXWzrrxVNXoccWcOcX-6xrV6tx0zxzUtbtzq99777WWVUV-50xaV0tsNUbzpUUzp9nUrpIyOzaUy9ge197e6zlbbbzbbyUzommhxonCHeIxxrxrxrUSxrUrrMKoogmmecmeeZcceX7eXHeeemmmn9eedCzHfoeeeZe_IMzIpoxHXKzUJxxUoUUprza0zxxxrUtyOaUUlbxIMKKKoopCIJpJoommeeeX9A9mmn9cce9Xe9ee19eXe17eA9mgnCKpJnBee7XXXcee7X-99XXeee9993cXV0ba5-XV0aOA919HgmeeBeY9mmX9ememef9ggn9ghA9mXcmeecX7gpCCCBnAAAABnCIICIKpJonCABnBgf9hBpBnBnCCCJonBnJnJonCIKprSKIMKKpJpCIKIIIHrSMpJjJxMpz6zHxCrrMMUSprKSIrMrMUUMrSxrSrSrrUUyTUbbtz6zbr6xxxtbtyOtyU56tzyUTUxzrSpxKMU6lWxzqNUSxpUxEMKJxCJnMKEUHhICEMrHxSUMSrMSrSppppMKMSSMKpKBxMKpppKKCBnCBopIKIKCEKCKKMMSpppSSSMMMMSSKKKKpSKKSKSMMMSrSSSMKpSSSppKICppMrUSyTUztbzzbrxaUq6zttbaObaOa5TOa5NOWWa5TT5-N50V7WWbaUbbtaOX-N-7-1-170cTT5ObaOa5OtttttbaOa5N5-1510c5V--0VVcX-1-V51-N7X-WWV55N55550ta6aNNOa5Oa5OaOaOtbaOaOaOaNOa55NNOV50a5-T50WWV-N--7nBf9mcmgcmmmeBgmee7X17eWba11X7VX7X79X97Jc7V7-V7117X7cV7---V1-X7X97--7X111111711-VX77V7-UMMMSMSrN0V5-UKKCMxpprSSSrMSSKprxrSSSMKKSKrMrrSrMKpprSrKrSSCKKppKpoxMUOzaTOzyUaTUttWtzbbyOts-OyUbbztVObyNNOyTV-0WxWWaNNN7X7VXceXXX17-7WWIBnIBonBd9eAA9Vc7NNV1CIK9117-797X7VX1111WbWy0xUzprSSSpprUxrSxxrzTUbqP6zrSKprxzxzzTUUUztzztxzzbtzSSUSMSzprSrrtzJmmfrSrSUSzaTN756xKxCSSIKMMKKpSKpMKprKprMKpSKpprMMMMMKrJxSSrSaNNOtVN6s---0WV17N-V-0aUWbyN0baOaOaNNOWbyOsN70btaUL0xLT6o-UM6lX6brSppSSSUUSrppEF6pSSSMKKCKVUMUL0tba-USSUKSKSSMKrMKpKSKKCKpIKIM6rSSpxMSppKSMKSSSpSrSxrUSlwT777VV---777X7XX19XXX--7V1Hc1--N0VN570c6bzKMUzrSxprK6xMxxrpCKS5NTT6cN0zltaTOa--57-11-V7X7VcX7c7X77977VN-Oa0aTObaUUoOxpKpqP70btyOwUsOw776rS6twUkUOtWaObX6ta0bVcOcWy5N-5T96XWaWccZeWWtaX97cecWzUxxq1X7cVX77VX999750a6VOttw1XecXnIBe9-VZceX7V0zTT-OtWWbrzSpCCUJltWbbbzxzUpoxopxTUUxprS9zMMSKKxGtaUtzV177177cX7X7X997-OtWaNX150a6V6rxUxtbaOV-NN0WV-75-0V77777X711-1X195XccccXZe_on9c29c799ecVOWaN-55NP-T-TUzzzzlzzzsUzxzzrxAqUyUzuA9770V-5UzbzOzSSUrOVOac7WzzxCrSUMJgpIJrKIHgrSJxSrMSrSrSrrSrSrSrrSrSrU55-X77TOe775OxsXX7X15WzMcXccX-Xee77-VX-UzkOzSq7UbzzxzSX5OVNUbaTP6xzrzccccce1XXeccWzzsP7ce-U6rSzSzbzUxxxzxzUwUqXcPVTT99XXce9eeXzS9cXXX9XceXe9e9ce9cece9e9ececeeeeeceexxxxrHee7ece7Ue9omeeXeeeeeeeccX999e9eeXgef9eeXXXeceec5eXefC9eWcPn9WeXeeef9hzSxHcfx9cBe9emee9X_Sp9e9Xe999XWyce7X9ceeeeXerp9eeeceecVeeeeen97d9ec_BemgeemVTOyTNUbttXVe9cce9eeef9e1ee95eeec--3mJ3-01RcfV-NIoOUF8R8uLgf9hIHeec1Xe9fBeh9mfEzzyUrHenxyUyUtzyUxzzbyTTNf9e0a0cWEvKdK_KKKLKOK_aJaPPOOUeKdUddLTyEukyvizjzzzGK43G3322EBkwBzkwwzwzwzwznwoKKJ0K1X2ABrpzzozzzaUWtacme9hxBcXBoeV9--7KZ5R0K1i5QpxUxzUyUzbxztyX9e9oe7eAHXe9eV--KycF0gAC-Bf9rUzta7c-54dtbV-61qbAAy---LztF1oAWqEUzrzxzbeXeecf9V-94pL6xF--Agu7--4xl31226aIBogfABfBf9nxxMyUztttttzbbzbyUtzbsX9f9e99eeec--5HLZ-A28MQry9f055LVqKKPKOaOddaKaKOOd_bizvy_MeOOOK_LPPK42BnJFzszEo0G4aLKOUjuOLO__GKKKKJHKG32K_KOKbnzzdKOLOeOO_-EoJG5KK_KKKGK2wzElGLK4K44JGJKLLLKFnLLOJF23dLLLK43_OK_KOOKFqKOKeK4KG43KKGGGOKKGKKJKKKKG0OKF_FOK_OKKKPLJK_KLK____LKOKKOLLMjidbzzdPPKOKJOG2pOKOKLLKOUu_PUzzzzYwzwydKdaOOKKOOKKLKaOK_OO__aEeOLTdzzEBydaaKdbEnzjfBnuzdPLLO_OLLOK_OLLLUzEnnEnzEnwwnz42zuRzEwwwwznK2nnwzEnEEEnnwzEzvdKKOLO_OOdOUEnwznnzYwnkEEzyEiuUvjzzzvjnyaTyuiz02yyawBkyeQeeOueddaUibuPJi__9gwnyaOOPTvuPJTbeLzEiYuEiaQEeRydiddddaJ-x4K4deadddaa_daaOdaOaOddePaPOaauddeufEeaLiuOfevduazjuzfvieeeuPueefiviiebe_3KvfjfEfiveePivjfiuiE-FGJ--3--4-FFF-FF33F-B-22vjyjeauefeiiuzefujidavuyuivfiuuvfeeuePaPiuvvjiiyyzyivvvvvyziyvzjzEnnEvyviviuvivjjzvjyyzwEii_viuviuo-2vjffdKHPdivgEijjieEigzjvfYyfno3-z2BzvvjeOiivffdideeeieOdeLKbeLuOOOOedaeOeidjgnueaaLOaafeveLyyvivffiiuuiiiiiiiivevfiiieiiviviyyvvvvvvvjiuvvjefeueieieeeddveTefeaieeeeQePevedeffeuieeuaeeeaeee_fiffiieeQeffideufj3323FwEjdyuMeuaveTuQeuLEeudG33_eLVzizvdjfzi_JibeJF44fzeeu2vc3BEfdvdjfy_vvfyEvd_TyfyeTgyY2yzFF-wz2zJGF3F-kz-F22Bn-0GKG43F-2BwzFk3-BoFC4300-EyzjzBo3-l0-zzzwzwzEBk2B-440-04443-EivzjjvzzwwkkBn2-B322BB-zyadY2-B2-nBkk-oF0-o-o2wBnnBnnEsnE2Ezsnvzk2nn32-nB-kk--BBl-2-23-3-BF-B-ysn2-kBBnEBBkn22-B--00-00GKK43GG03JG43KKOGJ_444OOFddF23BJHJGGGJJKOddG-kBKHJ44G-nB-K3-F3-F403JG3GJK45KGdGK8J3G44-3G04J3_LK2B23JK8G3FExKOLK__KGG4KOKG-3K4OHLK_affedaK-G-n2-F-wn3_aO___KaPJ4aOeadaOaLdG3G3GGK5O_OOOGGJFG3FFFF-k-22--n--GJ2K4KK_KKG_KF2n2-2-C-nu22-2-nBn-KKKOK_OPaeOdd_eOK0O_KOLJG44J33-FFF3-F-2-B-B-k2E202--n-wnE2yEEEB2ynkygEfynEvijz2y2GJ2zgzEgwygwyzvyigwwziiiveaaidfuuevfiE22-k-0---F----knBnBnnnnBnBwzBnnEwx-EsnGJEnkCJBBBFkB22nyaLdfeaBknB-EsnBnB-zznzKK2nzznEzx03BknBnBwznByEwzBnzBynnzjzdLJ_OL_aOigwnnBnyEnzEEnlGOJK4FpF-FnBOJGFzywnwkoJKOK_OK____aOJBEBwnEEEwwknwzzzzzzzzzzzEBwnnwzEswwwk-nC3LK2BLKK2wznJK4JK23J4-FzYsCG2lFoJEC332JCaOT_aLPJ8_OOJ34JBFnFwBEK4JF3G48K_4_44HLLPdaPaeOOaLLQiuudeOdaLOOOOOLKOeePPduOaOdGOdGJB3G2FFnBB-nB4K4_GG44GJC3GJK4KOKFwB-kG_F2BknBnnBwnEBzBwwnzwzC3EzwnEjzEEEEE4KK0-zjizwwwwFzzvih-yC02yijEnnnwkF2Ez2CJGGKKdeOKaO_Gbd___Fo-nEB48O_aOG2k2pK3EBzF2042wwwnzznnEEnlK_4F--Bnu7-D5P0Mj4-NFneHn99fHdEpA9e1mrUrMMy6rbyObacVUbsXc-95VQqU-0RC72gfrLTUX9WL7PGHOKOLKaLLO_aOzjzdKK8fyy2yvzzzzjnvEyszn-yvuyji_KjEzfvvdedLOOK_au_K_8KK4O_Oavznwzj2vYyiizdQjjyvjvzjnFJ43FEvyyvysEV2vkG-oJJ-J2vC2nzfvdvcyvB2EgwkznoHKJEKF44K444Fwkzjx4JEwoLK2EGKJ34KOGFCFK2C3GKKKLujnzuK_aK4K2Bl0KK_K__OOd_id_032E-wwwznKK-5koy5rxzzye9XeV0NQGfQzp409Fr2emf9gemeoemhxzoeenrzzzzzzxoeeeeHeeemnrUzzJr6zzzzbyUztttzIzrzrtzaP5Uxy1XXc7TOVNOcXemnCBoeVOX9IHeX9ec9V-7QyMR-O2VLYCrzOcTXeV-7R7oR-42W7vEc-16Tkb---xZJV2sUexOjjEzzlK4KJ--2yzH--10C8--0-gFV-7VNER-038rYV-7WePR--3FiX-8X7VOizvlGJF--GAnc-q7b4qavzwz43KJ--3In9--193W--G5YBk--7uzo-03SVI---Z6nF-JH3JgtV1NZFfOiznCGJ-03ZUnV-NZy-Ok--HUC7-18Epr--G9ncs--8SB3-23innD--1O-0-6lCPTmmnCzzbWa9c--8glJ--3qO1-3XRYCbzK-XlIJjmegemef9efDUzwUzx9fHfBfxyTTTUpsTUxzWttf9eeWtzu7-19Vk6-2lJH2nUze9VKcf22OuK5ObzzuOLKUzviaKzzzfzvwwzEwwwzYBzB0GF5JGaKOJOG__3a_OJBG4-PlNXPmfBnBnBofADUzJzbbbbbzpxzbXe0ccX9Bc6s--1mmx-6lYOwmextzUrP7cc-5BSZbV-45HC2T7-9BdhMxF6JOkqwemmmmf9e19nJemmmenzryUyTTUyUbbbbzbtzue7-qBstqKOOYvEEBo-45TmAqV-1Bzxq-CGcDCxzS9dEMrxowOX7V19X-6YINKaOgnk--leh3lV-cqZnQo-AGhLznASpxpObxa-cXcXV--sj9F--RjYc-9DO8aRk-JRodC5V1Ntt6OKvznCJ--6Flm--Yf48k-BTXJhc-LEJ7aTYC-0BTkwjJhyP7P1LYtQd_KPPLbePLnuafp-yEeddzzEuOiydeKOGdzeaK_jzjjuKKaOaOUEnynBzvnzVyzzEE4FnBwBGGOJBF334G0-3JKJEknBBlKKK-wnCF-RUIqgju-4Yv7daLnB--6voH-EYxyt_ueaYBBE24F-wUjugoqOWc09F4K5OGOOYyzBzElK-1m02NnLNP--32h4-0m0qgnqV-1FPCq--H2Gus--FRXJ--7Gue--38td-6H3zimfGzxLPWaX--3E7C--16gBV2O3CZOuLecn-n3--RX7jgyP--3G5C--18RXV3t3nbP_3_iju_Hz2-B-03XWAgfxyTcV-047KF--Xjy7--GPHJ0W7iC6CSKKIICJnCBemzqUbV6sUa5PX6w1711-V0d4t8OOwwo--7o-P-3ZP3pin4--1CVBV-85mEN0d7rPv9hEIBeXrICxpCAIBtxrtbttztWV--UWc7ec--ZRVOk-3Y_fi--3SWl-1HE1urq7V-06YZF0JYnKBgltzy9c-1GuEq--1Ey3V-87P_R--8B0X--3aep-1HIL9xw7V-08jeF1RZt2BoxCKLV5NOaTeV-LHXk5OUn-3B_KjRnEJxK6xSIBnGsOV5-5-N7e0PZfppdQivevivviuviuvfffiviiiuuivV2vxJG3G400-F2zoG43G3G3G43G3043FJF-B_XHC--1HrHb--1Ml9V0OBPSTykK--mPGuw--0CdCF-3bQrg--_-bGk--c3w7-1J1Tb-nHWSNmnBmnCBnBognAxAACOzzzUbzOzIAAEbaOtbpICxtaNHW9WWttge-Ou9dHce0uXWaOaNTc0qJ_j5Tfuiyfuvyn-43-C4GJJF-ZdZ-CEN--qKF5MivvzoGGJJ--9fZm--4NVG0OHj5Imgmgn9mggggggzbxlyUttxUxrltzzxUp9mcegf9nBx9HzICBnICCIKMbaOWa0c55OWaUlaOaUxxrIJogmqTUpK6aNNOaN0xMUNT1-XXceee7cN575ec0cecV-0P9QF-3hh-D-7_jKnaJ2nyZ-YA_nYBnBnEUttXVOc8aMCmTLLKaaLKPddbjiuievivijivfivy_PPeaeffjyyvjjvzEnzso3-F-3G42l4J-2zvEBGG00LLuJF-3KFK003GFEyxG-nEzvp-B33G_JK--muI9w-5OSJStaOeji--wBzzzKGOK-0JieNwmeCzzaV-TMQgDzvlJJ-GAk2vrxkPe7--MV8o-6At0AC5--OURXy--gjqMEraeV2OUrqueTfVFl22F--jvyN-PNAgydcnF-Yn1WRrSpppMJeYrJnrUKq6ce7WzTUzUUUNVNUtsX7VJece9XXX97c--5440-2I2OHnJsOV-1NxR5-Bn6z2mgeegenBzbzzUbtsN--0_72F--nKlc11OxXDLKKO_OKLQvzwwwzEnnnnKF0RnydBghMMNN--dOfypPMdfibveueeaPaOO_3eafd_J8KOKKaaOaLuLaLvcyEieQevy2l---GFpJFzz-ynwwzzyeiyv-Bx3FEjjzVEvV2s2ufk2G0--3FF2020003JG33F-dC_NYAASKopSbtV--77--QufZ--CxYX-5b-NCbjY3F--sGR7-DRSQ6v4--2ZTFV-OmFuQF--tWp7--Rrk3-2DRQfF-ObG_p_LKK4LQjvvvvjk3BB--2cnkV-0opdF-BuUUE--1SP5b--2fOPV-0qQ8F-JvLKBlV-ttYkOgB--EKfm-GbimObjzjzzK4JOJJ-QEW629fAEU6aT5-Kbx48aOGeQiv-nzVk1K--4-Bei-2c4b_aEF-00fX7--VsoZ--FYHH--7bwK--3KeVV-19ymF-456Wg-0cmm4s--oPB-o--PCDOOk-46F9i--7vjd--oSsBlV-uEMIQY3-0GwSv--1EeMF-06tTc-5Z2ZLk-2HUyYu-0dG4tY--3dhcV-1KhfF-09wIc0ea0y5OddePfiivc-kk---0--hB85hIq---PPqqQ-ACDhYBegf9nBoyOyOtzzxAUzUxrxzxKrqUSHnEyUzzOzbcXXe5e9X97XXXccX9Xee--1UpAF-SFcxhOX-1eB0xgo--Jd31--9KJS-9pBVymefBnKMUUaOVNN72Xdb-LMveiuLKJKMinzzzvfY2BzjEzzY3GK3FK4KOGKF-0Ji17-ueZcLLyvwzYGGK-0KK8igpzza9cc4aecw5eQeefeK3iifeyVyyaPysnzivW-yvivjf3G32JdFG5OJG-3--EB2003-C_GGF-0M4Pc--fYVJ-0L1VIV-1kjSF-0NOQ7--gXeJ--LIdm--AAXh--Kaimk--h2YJ--LYMm--fHOlV-4QMoB-1fQzGbV-OM1DQUKrSV17XV-PsGvQ--0R8xc-Pi9hLee----4n7gV0uuK8Ovwo_F-0SPF7-Tihf5jioG3-rMLqIMSxJfMpp51-Uk7-X7mV-1vH3F-0SiM7--ivJJ-4MU-YL--5j0_5V--MW4m-Ffnz4uebcnu-E0K3--4umFV-1xQQF0KULdhJnCaOX--5ji96o-jMt7YCKBproNN55-KC9-7-Pjp4LPbw---4zuVV-2-p7F-4VdEB-3g5r8awo-6q3GTnIBnBlaOaOV--kXLJ-0NJ5IV7f1wFOePedueiffjEBwB-FFFFFG0F7pWV6CJfCAHcXBnHgpIN5Ox6lbxrJpMSxbpNN7V56rMF5-7-X577V--lo2Z-0O25AV-28oRFJ__7yBm_ICCAEJgcnBdJonCBgegnJpS9XXe7nIKCSSKpxppCpKUrbzKOzaUUoUzKLOttxGVV557-OWtbVWV0a6ryX7X70cX1-cUu-Uy90zaPcXe90XX--AA8ER--Oap9--gnQdkH4b2ThSprSrUSrMSSUSxpMKpUSprMKrMKSpprUMMSrrSrSR6rbr--N--0X71d9-VV7e7WaWu1Zc-cVe95BcZe7917X7cXV7VX9eeX9--Bw-4--LXIak-9oUkasF-KdZHh5--QKOSQF-0f7Ac-DpZnLQC--5ifVV-2M_TF2_g-RhCKoxKSR7-6xX7OVh9-77uqCsLOaOKKK4K45PKaadudaaeddaejyeedeTsz--o-k0-nzuafiueskznG3FB3FG3EBnknEs4_OOGa_K03F-BBzvnywzvvzEBBkk-EQ93ASrF17--hcV8V-0ho3c-1r18a-KLsKtn9ghIKopJxGbzlz5PcOWWV6bZeVXV-erChLbuawo3F-0QgRIV0AS_oTz4F-0iqsc-LrVEayh0F-0jBw7-1raaM0sqwtimmmocCrUzKrUzbxJeYBexrSIoT50xMUUSrzrrxxxrppMMIrI9gnJzzaUOzSrSUUzxtbX7OsU-UOzrUxxSSSpxSrzxzrr57cWue-BcVX-X7X10bqN7e7ce7-7cX7eX7ecccXce9e9997eBhHmhBnBme7791-5119cXV-ATZeR--Qs0X--CxF4-2M-EHrMNVV-1s18b-0M09Rrc-3i33Gcy3-7r1pBmhExpSrcP9-7-3i6ThbzJ-0r2kLmxV-LsT9bywKF-Cl8ajc-5sg76o--RNyP--DBcS--r75Dw--AZP8N-CRYLYIrWcV-AZ_gR-hRb0Q9efBUUzzxrq7Ve9--DIcG--69X3V-2_KXF0CmrNBxUTN7e--DM2x--MBNss1qtbGTeeeiebfeviufifjG-FF-FK-2F-F0-F--6CEoV-2b0EF-pnx7hKlVX--DWBO-IrGX5pJgomd9Beefrr6rUttyNUsWaN9c-iuOLLLPjcnF2--0p_uc--uwAJ-ISZnnCIKWa---QgbdT-0_qJ7CprKy7917--Do60-0MPdwpc0LirO4eLzjezyyzzzyyzjzjzzzvvsFEiyn3OJFKKJFEwwKOKJJKGd_GKKG3JK4KJ-ESx2nSrP79-5j2XKaPVn--_t4Cgjtc-1wYGa--6ZPXV-Ama9N-CTK4nUSXX--2n3-F24thzhrHcXnIqUttxbcd97-3jCxpvh0-1rbiZpEa1-JjETd_azzgznzC_KK4F-0TTz2V-2nrwF-Ctvzgs-Dwy-LEp--Mcags11x3uLKKLPLLLOeNwzBknnwwzECF-0uAGc-ax4e5iii30---6dYeV-2pDWF-0v0pc-uxhu5KvzivnG3GF-0vS9c-Tximavyl4F0GTtRbKpKKKIMKorSKxcP77--50cV1--X-0jSM8x--MlFHs-PyMyriv3J--6njmV-AuIRR--UKqu7wjf1GaaeOdiaPdeeaeadePOdd_OGG3FK43G443G3G-nBB-En2B3P_3HKJKGJJHPdOKJO_aOeOaaQe_K4_F3G3O_8PKOeLOPeOK9TddJ01OaPPu_aOdaO__OKKaK___GOOOaLLLOd_-9PPeaPPefeueOH_Afeeeueuaeaieeeaadd_OdvvivzynwnnwnEnzzzzzznBnBzEEEEzznwzEnwzzzzvizyzuuaveuePv-wnBwwnBnEePaOaPaOLEwBknueaaMwzeeePPujjczvyvwnnnEuuusEnnEEEEzznEBBBkn2BnE2BknknBnBwwn2Bn2B2BBBkkn2--3Bk-k-F3F3J0F-BK8J-0-3Fl43J0JJFC0220-FFB--434_F02-3-FoF-3--ULK1-9jk6__KPzsnC-0rs2uxu7-5z6oLo-0Ua7Y--2yTuFFpzEegnKCAHYSIEIBgmnBen9mhJonKKpKpKIICCBopKMKpCMMMSxxtbbyOVNN50V550VN50VN50WVN-0a--0xLN-V--711-V0R4w-PfBJ-5sCnMpUSzGcVcX--36DPF-a3T2CpX7-21Rkb--7L9iV-3CdyF-D7K1E--E3yyLPB-AsdryprMSrUMUXVXX77X7-0lNuCb-0sh-cpsV-24z4a-0O5skoP--HJcO--8cjcVMwvW_PePffuOedddaOd_OLivedaLOQswwnnBwnnBBEEz2EknBl___JJF2-ddFJBB-kFJF-3Oxo3mryUe9--oNo0k-L_0tBtV-x9UXPVk0Kd_2QCCKJnKMU6Wy6x0a5OtWWaA9f9eX9VNhBeeOaOaK_aOaOOOOOOOLK___aLLLL_aLbzjjjEnnnEEBnEBnBwwzEzFnBzBnnnBwkBOJ3--9Q2JV0hFDWPTj03-0esaIV-4M3pF-DfxqCV-0LPM3-8fbYnBy5-Cq8_WadYzEwLK3--A59FV-CZXbR-2ghDYk--LQk_-0vCsPnTV-0OncZ--gxEe--LXbt-4QGLNnIMaTP9V-4d4NF0DoYGBxBttWe--LdTx--AJjgV-4fDgF-1q1n72bQ0Tq_fzyaLyy__JbzjyiyEvnzoEzz4K44GG440J0GJ--AQaoV-hj4xQW--QUtTs-0QzBZ-2hzuIu--M0W0-3QVpXzUSX9X--r954k-6-LVD--s6udk-U12pBUe--NKbO--B9nkV-55gUGAILAU-ee9eeXeeXeee9eeXeyN9eeeee9XAzbzzzUUtzxzrza1fzrzs7Xe9XmeeiUzrWztzbzzsUztbyUUrztzUzzyUVfzMzzzzzzzzzzyUzzzy1SzSxzrzVczzSpUzbrzzztzzzzrzzy1cXXecXe9zzxzV9eeee99USzzzztzSzzzzzzzzzzWtzMUbUztUSzzzrzzsD2xzxrzbxrzbVeXUzMMzbztzztyUWVX7cX7X7ccX8rtVX2Vc1gVWrVNOta1UbbaT6byOyTMqXggpFemnBnLpThScXXopfJppUhSzt_USUrxSxSzUUKwepzznMzUwefMzSCJXAKRemgegeeoeeeeeeXe99eACMxzUrxzUzzzPmeceeeeXeepzrzzzr9eee9e9ehUrxzrzryUzzzxwg-3sRUlgzK-1wGfBrUXc-1s_20ck-8lARQMsc-6sakWaUYsG--BJEyXtygSR0KGMwzkKK_KK_KJKK4JRnEEEEzEnwznzwzwzzzwzzwzjw3wkznnnkKOKGnEzwEEwzB0wn2vyizz0nEEqPvnzzzwjjEjzEEwznzzEzzwnvz2jjvvzwnkTzzzj2vznzvzyzzyzzwzzwzzwzwzzzEnwnknzfjvuzECfjDzEBBwzEwzEwzwzzE2vfwzk6njvw-nzEEzEzyzvjvLizyyzzzyzzzzzvzzzzzeOPPKd_4aPuwnaLK_aOezjEwznnn2EEnn2wzzEmwznzEn2nwwzznwwnywwzzvzEznwwnDPzzwzzzzvzEvznzjEyjEEnnwzzzzvzvzywviwzzEBwzwzzveznyuzjEzzzwznzjwzjwwztfvzznEEEnzzzzzwn2BwuO_fizzvzzjzjDywzjjEqKfyvzEOfzzyLjzmzzn2hPjjAwzjvjezvnfzzzjAzfjjqKOO___OL_KKKOK_LKLO_KKaKKOaOOLOO_ePLiKKKLKKLKKLOOKa--wN-ww--DBg5N-4latIyc-MYUfaRyCF066q1CJxa5X--5F6mF7z9BugfEUSrSArzxBefBeJcrrzbtzUzHmfUzzzttVX7X7XXX7XXX9--yKGGTsF-2mkw2k-3tQstjx4--BkdsV0DNK7PzGF-6B9ki-9tXkO_K_zznl-0RovXrc--OeZW-IRqTXoeXefUzzzxHYUyWzzzu9XZmZe7-1tmAWzJ-0nbeYV0DRxYTvG--2Dto7-0bYlJ-0nm6v-4DTdBTzyzvzvlJKJK4K-8wxJTrrrzrzOceXce9V-DTg9R-dnsbYExxryUzaeeceec-6bz2Lk-2o5Gnu-1u2YOv3-0oCyAV-iaLAUp--CCXRV2Db2oOOwzvnpKF-ppYW0bVVaOyUzzzrxpxpzPk-2eBMb-8xGoerUUxzry9Xce9XV2ydQ2OK_OjjnBwnJ--pC19-2uliNEyk" :
		ap.pG === aA3 + 2 ? fy =
		"JJAf2uP6y-0nEiiuyywnyueuTbfevfvvjivivivjfvivviyvuuyEgzjjzzvviyvizvviuNziyvijvijfvyvgzvvvvfeu0-F-n5a_GG4KJGGG3G3G3FFJFmKGJ4JGGGG3GJJFJG3G3G323G--kLPeduaKGFGGGG443JJJJJJG--B-C0FJK__443-BJ-66wmpBnJopCMJpCCCIIIJoopKKICKCBnCKJgooopMIDOzzSzUzbzzUSyTUxxrrrrrP1XcXXX9Hcn9cceemece7cPIoeX0sWWaOWVNTOcTNNcN0V0V5-N0aOa-0V--N50a5Obyc-M0z3TPOdgBnBF0NOpxpMV7-M2mMiLbinz03F0sTx8mfrNT-2l6QEdMwwp-5XX7UMTP1V1GIuvaNn-5Xfxrpw5XV1GNTEfn4-_XvzjAAA9mfA9ed9fpzyTUzyUaUyOX3n59NTKLLKHPPPO_LK4iidea_O_QeideeaLOLLJG3-0eeddOaPO_OKLKzEznzjgnnzBykknByEYnByug-3332ElJ222-2wBko2BnBnBwwzwx-9Y6j6rrrkccc-E5ctEizpJF-aDYgSMGz-X10G6VyjiyuuPeiuzjivh3G3K3G--k-9JGFAPEIZSKBghKSMIpKpCJnI9gcXeccehHccoeXBeoppKIJoghIHnCJnJmemmecmfA9jyTUzzzbbxbV0WaTT-OtWWWV0zxtyUN6yUzSxrSqTUztaN71190V7-5V15VUy--V-lxHEg--33oL-67Dhyu0--3FoL--7ahw-LGYowfzu-0HFMIfF-aHWWwxxxcXX-E8ZrUdfVl--TIJLzSr17V0wcDLvivjysGK3G4XaJb1zppIJpBccccge7fUxx9eocX7cXX6y7Y99Heggen9nJdAHp9Xnp9IIJfICIBdCKKIIMMJme19eXxxp9X9VVfEMMMSBpooe7XCSBomccxxpHcrKKCMHmXXmcxoeX1mpJe70BrMJmVV--gxExIpJcX71nKCJmhCKKCIJoopCKKKHX8KHd9nKrKBj6xrSrKpz6xSMMSrKppwObaP-UzSCAICIKCIKKKCMMKKCpCMMSrrrKpKprUSprMUSMrSprKrSpSrUrUSxpxprSrMrMprSSSppMKprSprrSrxKSUSqUGbqUbbrxrSxrSrKHXXeggeYBnBgmnBnKCrJnKpIKpBnKCMMrSS9chKKIBeX77EIAE5OxIIKKKIIEKSKSKKSKKMKpKpKKSMSSSSrSzxxxzlzzUzzzzzUxrMMMMSxxxrrxrrxxxxzUzOzrbxzrxzzzw6w6yOtttttyUbbyTTTTTTTTTUtzIrzbzbzbba-71-VVV77V--7711-V1-1---51--1-1-V0cN-N5VN1e-ee7-1mc71Xe9fIBcVV0WbyOzxX-VV7VNN5TUzUu1ce9menBecmf9gxHc7c7V-777---50VP-V-N-0WxppSJpr6zyObzttV6rMKpUyObttbryUbzWaP0sNNOX757X97X7ce9XXXXXVc7-V-X7VX5-V7eeA9menA9fBnCBnIIJoorMIRObpIKMJpppSSSMSoeX71-V7777X97c5V-ccWV0VX77--NN55-N--7U5111cXXenBcc7fABgcX117X7c-gf9emV---1--XXXVX7X17579VVV117Xed9XecXX--WV5Uzz6zyUzrSrUUaNUlxtzXXXee1777X1e-5NOy--WV5OttttaTUzyUrxxtzzzlzMUrzzxaUttbbxWzxpSonBmpCCJpCKCIJpJooeACHpprSxaOV577U6sOWV-NNN70WVOWzwTTT5NUxryUba5NNOba1cc79cXX199X-91X99mhIHfJmXgxxxpHe9XccX997c7X0zV--V-N7P6k49V711-111X-77cX79mmeHeccV1mdbn_Uno-DKNVSo1-O9kaiKKzzEzpK-8_SLEzzzeeeV1Hinzjh3-8_UsM9mjtyTVBHk8AfiyvivizpG43G3GG--0OIzV2mnjMaLEBxn29mc4SSpprSSSUprrKprSSpppKMMSrMrxrKIKHhKHfIKKpIBpCIIJpIJnIKpSKJo1AKKpppxprSprpMKphIKhMUSrCKMRpMKrrSMMMMSKUVUxxUxSJe19efAKKUbKnMxKKUKIKUStaSrUMTUrzbzxxrSzzUy5SSKtbqprTprzSxxSrBXe9ghSrMMUyUzzbySKrUKpUSpSUMtV---D--0aN-X9997977VVe9XD-19XX1-9XcXXXXYxzUttzbV-7VX78by0rUSppKMbs5-V77V77X-X71--17-X-7V-0WWVN-6byTOrJepKpSrpxrUSSIKSKSzrrrs797c1711ObUSxxpSSSSSSy5--7997VV6z_rrSrxpSprs-7VX17XeXVXN-11-TUUSxztyTT5ObzrSSrzbtbbtUKzrxrSxzUrzUzShKhMKrxzzzxyMtzqnAA9mgfAAACKICBnKzbbWWbaOtbaOaTUbtyUyTTTOaOa556zyMxrUtaTUzrxrrrzSzxzbta5N0s-ee997cX97cX7cX7X771-V-aT--V17V7X1--V7Xea6ty5T5Mts5--5-550aT55NU_ySxxta5OVD--0VN5NND-N--8a6a5OsN1og55OVVOta-75OTSqhCMrBmhMbbtzzzzta--NN5-8Us0V-N1eD-XN0VOKppraT18zs0SyOUaOa5OaN1-VcX7X5OSpSxpMSra5NNObV5-N19cVc-W_KMSrrxxztzsND--MJpKMrzb_pyTMzUa5-0a5-X-VOIMMMSBnKKSMrMzprzaQBen1ceeXcccempprtzUUSv9mmfMrxzUMxpUUUrzbztrxyOzUxrrMzbWbJppSvC7gmenA9mgggfABgnBf9nBppUrttbzUzCKrSSxzbaUxPfMSKpKnJhRpIAIIKrSzUMMzxztyTObaTOWWaTTTUbzzrza5ObaTOWbbbUrSrStzyUUzbyN--s5T2rs-1XeXeefBn97VfBnIBemf97cXcX7bWV1111c1eiN7f-ABa6s19n77X7g97cceX7f11UzUppry-N0MMAIKzV4UW_rJoppza55-TMSsNObztaOa6KzV-77N-SKKSUzbaOaOyUtzzzyTUbtzxrsOaObtttSraOWaObzzzzz_ptaUbyMzzyUtbVUyUrUzzzzzUzzxyQMzzUzzzeeeeXee9Xeee9eeeefKMIKcf9ggnABemefCCKzrLf99X1fABgeeXAKSSMKxxzUSrSraMRpSxrQA7X7X9oopBo1N9gnIKCIJmmmnKIKJomn7emfMBc51997cenKMUzPmegmfMMSzzyNA9OzzUUIKMUKrKpSSrUrxza6SrMSrrMSrUUxzrxxxrUSSzSSxSUSxSrSSrSrpUrMMUSprrUUUUSpKrySzSrxzzxpzSppprrzUrSpSSCSRprSMKKpMKrMKKCIIIBohIBonAAABnABmgemhBmmmeenBnA9X9ecceeXX7Xemmcemgef9nA7en9kecee9eXeX1-enBkeX7XeXce92VXX99ceACBn9XX77XVVV--X7XemmgeeXXX997VVc75OVeX9hAAA7eeme9eXe9Xeeee9e9ceemmmmf9meegfHenBmfBnA9mgggemnBggfBnIHmmekeeceX9e9cXXXmoeceeXce9Xce99eXnBpCBpSrSrSrMSxzzxyeeeeemkeemgf9pprUzUHmeXXem99e9eceef1dbs17ecepKrMgg9XeXccX-Xeen7cXeenBmnBghCBgnBACCCMCKJohCCMrzzzyUzzzzqognBmnCKprMSMACKpz_wmoogepCKrMSMStUZkeeeeAH15-11-X9hCKMSRomcgpKzprpprs0z_rKppzrSrzSpIKIBgXmprrUKIKKrttpKzSUBomm97ghJpSyUzSzzzUbzzUtrzfAI9epnHceceemegghUUzxzWbzzrbTopMSta5OVOrzzUSKUUxrsOrpxQCSrIIKSxSrSzSrzUrUUtttztUtbzxxMaOV-sOWV5--NNOUzUzxzxzUUrSxrrUSrrSzrrSxSprSppprSpxrrrUUrbbtzrbbrztzzrbbyTT6bSyOa0aTOaOy5T6aTOzbzpxxxxpzUSxs7XESrKyOUrtaOa17zyUaTOaOSxprKCKgnIAAABnBnKppppppJnHnCMJnCCKMSrSSKKICCKKKKppKo-2AYFDB--MPns--j8uk-0TwQV7mzO6ievyyvFGK3F--qNX0zxzxrXce9c-3mKUw-DOJuzw9-lBkNyuuuviyzjJK43G000-OaPJEprzSKMrrkccc-1997-2C8pDo-uPOqwf9mnbbtyTV-2Jzv--5gXT-CCmSUvvGG--5xsy-0D-rE-4b-qzSqX7--sMmk-0lNEV-IZ0nk-tm6EnFN-Rt3BvgF-5ReOUc-otNAvisG30DRoZzUzzzrwP9eeecc-3uJps0eSSKRrMGzrzrrM-V-eXXeX--2fpn--6MiT-0DoXD--6ULD--E2lg--TGhs--wrkk-0uNAV-npyzx-0bkCEF-6EeL6jG-5bpJQAEbaV0nuubvp-0dya3mhrk--BzMKzF28zMOzrMUP779c-gziXufkG-2byBQrcV-J-IhV490elopIKKJzlX70V---2FCPyV-HVlaxpX7-x0_hzvvGGF-12_CV1o6LCaeB---Vy4s-K15tuR-0cH3EP-AFalyPf--1u44Wxxxr17cc-CFkqTusBG-2cO5jMcV3oE3YuuiB3FF0P7tWrre9-4GLRUh--19rRV-JN8nk-1B7iV-3OQA--cpNzV8oQxrjjizyyw4KKG44-1d-ezGV-_77wzvGF0eJQZmxL0V-C9jlvF09OI0rTX--JoI0k-PTDyyV-40oK--e5AbV7K29M_OLMfgznEB4-IfrEMASpSUSq-7-Nee-ANaSDyx3F0A69npL--1qoP6bvVF-qtlNxCKCUa0V7V0xqOguudaNznk-G3-Lvq2RrOc-2N7SOfvlG-2g3LFmnKUrla-7X--Vg031A1AJgoxMSporMSSr-XV--10aNXeV-y7CVQfz0GF0RIcNptae02XdsiLTezvzyyyzjzGGGGGGGGG3--GRVT-QXt0TTyyzwK4GJ-r5K0genCxtwT-V-yBnotTvg-F-RR4WyVBNuCtdejvYyi-knBLOFJJF3BSAjnMSzUbsX9XeV3t0vf_fzv-GF0wZ8bxrOe9--8AQA--HN1m-CZlGTLRwx-cmONzIxrprppKprUyUts-XccX1e97cXc--_7pw029QbgoonJUROV5-V-iJrguik4--mdjY-0tQAdaRk-BiCss-aMQLTjJ--3jUaV4tUqAvjzx5KGF-YB7rwfzwOeVuOXlO_O__Kbj2vizuviyuuvfeveTiviynvYziefiiefvfiYvjB-444G3F-0-2-kJ304K3GGG3JG34--F3GJ-IBbGxS--3yOw8PPd_GaaiC-Eueibvyvx-304--C-2IBzcggmeenCMSrwOaOzKHmnrUSxzTOu--V7VVV9c-yPFVPuf0-F0gt0ZpKs17-aTPhOiBFxRy2ZmgnJeeXAICBnBenJzSrKKrrSSrKpMKJnBnCKMSMIKMrxSOV0V0zzUKSpppSKSEKIESOV-Oa0sOzUrMKSppSUMMkP77V-0a1--VP-17--71--7-UxSrrrrSJpqOtzzOX770hBcX7V5--XXV11cc717X7X9XX999777X7e-_chDLLiiivYEl33G3-Vock29fSpSKonCMU5OaNV-NNX7c2DaQYtPjzvjfiywGK33G3G-0xDlzpUyX9V5PSx2jyuzVGGK-0CFZWnwNV1uXF0_fBo1IJJoSSJnACCCKppSxyUV-117-N711-6evlav4-JpSyQKUSSSpaX517c-c-yg6luPzk3F0CNJQpy9-iumBnaLKKeudOKG_KLKLLLueLOaQEEjEjyinEyzejjnskBnwC043F2-nn2zE2EEoKGKFASOdporHX8CBhzxraUqUzSlzSX77eeeXBc0V-LhikvW--KmlL-EfebDLTskk-YMe-RrMTV7V2uyCCaPEBC-5q1sjK6a7V-A2Ih-Aq892rMUNP7cc-TlB1tv--ANsVBjV2v6d6aOwnp-7qIGAIJlaNV1imQQOPszivwzE8GGGGJ0vODuRhCrppCBpULN5N7NX90WX-6gppqPk-GqSXfBnqOxtaUemec-5nnTs-YPD2wz6re9-3QGmz__bnno-2PJQD-KhKnTaaTn-nF-0Pg_N-aphUzj4FKhhRbmhUrKHohIzMpxrpKKKSMKSKxrU5N5OaUL--X11777Hf9VX-N7--5P-XHXe-0hhca-WqtqMCppppSJp6ltz5NVXV-X17eV0QUJbjJ-nREfwnBwOtbae-IiGGaLPvEk0-Er7eI9nCKpUa0V--1v_ZSfcl--0T7Zc0TwsLPNzgz8K4--MdCP-8jMTqMno-QTv6BfDUs-CjSgLdjBG--rknYV0vttlfW-0CxT2mcUV6Qv4daeffkn3J3B-EUOXBja1CjifiOvd_LdKKaaOaK--nBw8aOFFeeKbfivzjix3En-2Ennz-n-3-2UYTi-bkAQ5LLKaRzgwnznGJ-MWJCRr5NV0wBylcwF0D6jaola--BJZx--NfgX-6lRkav3--sx_2V7RUnUaK_aLLQjzzz-atBrI9mgmnICCpCKLTOaOzs0aNOWV9c-E9stskaiM_-pIJnKoxxzxzrUrrxzUxzSrUSzSpISxzxbxzzzzrzzrzxbzrzUta-0YBe7mf9eeV--P9eee7XXcecVXeXceA9eeeXX-c7T9Bee997n9X-0wqC2ylF4iQ5frxSUzJzqNX9cX97V1wr6EuslF-YbY3xSUaeX--x1Jxc--uDnn-6S8wKaPedvn-FFB-zea6RfESrSq7-WX-6pPVqNx-dun9rIIKMSrSrSxxBzbts7XeX97XX7N---2MXGF3ilDMnrSppGa50VeXcHjS0jOLKO_LOaK_K_K_LKK_JKK4K4KGPedaOK44KOPaK_3aefffeTzivizzzyuvkBzwzszEEnwnn-nzyzwzv03G00-B2EzBEBwzBwnEE2-ow4SEIJmcccxxrUJnBonSrrztzyTOts-9X7VX7X9-YvBN2wwwwzvvjjzzk0zOXTUyUxzV" :
		ap.pG === aA3 + 3 ? fy =
		"C0DX0NP1V--QqeadnzzjynEEzzjjivdivfezjj2BBwzwnEzzzzzEjnnvYBBBBEBnzz-UV-hflzUUSrrUzSxSxzk0a1-V50K-0pMiudevf-zvfeBnyviVF-F33-yzgp3bVV02IKUrHnUzzpHz5UzUzSKrUrzbyNN-OzzxzUUUSrSrrrtzttzWaOaTUzSxxaOaOxrKBnCSKCIMSKKKKIBpIJoonIJopCJpJpCCCBnBggeXn9eccc9X7geXXn9efHfBnABemcXX9eece7XHXeXecegeeVV1ee9eX9ecc70eXcXe9enA9fAABnBnJpMKpKJnBnHmmeeXX7X7cceXXce9eeccXVVVV-VeXe97Xcee9f9eXeXXXXceWVWBc29cX7V-6aOaTOWWV-1XX17-NOtWaNVnBn97X-7cf9mmnBemXgece9I9eXXomgeh9eX99eeeemf9BmmeHgeeegfBggmnHoeABeggnIBggeeeecVI9eeemeXe7cX1-ZmfIKCCIJooonIIBnAAAA9mmgnIIBnBpKCBnCCCKKKMSKJoonIBohBmnABnCABfA9gd9mhBopCIJonABgmnJopCCKJpBnBnBnCJnCCCJnKBoggpIKCKJ-UMSGxrMMKKIIISrKpSKKKKJopCIIKKKCCCBnIBjSrSSpKppqUI9cpKIKrrrKSzyUpKpMxS5UKxMSrSxxxpSrSKpIrHxrSMSzHfrxxzUUUSxrSrSxxxrSrrSrSrrrrrrUUxryOtttzbttyUzzbtzzUzzxzzUxzrTTTTUbyTTTTTUbbxy0byUtzyUzyUzzzzxzrrSrSSSppSSMrRN-OxpSMztzbzzzVUrLUSpprUtxKbxBfrSKJpKKJonICppKHnKKJoopKISppSrMKrSrrUSSpxxMSxprUSMMSSpKMSttzzI9f9hMMMSrKSMKpprKKHnCSSKpMMSSrKKKKKCIIC9gnJonBpKAKJpJpBpKBnCpMKKCKCKpKSSSrSrMMMMKrMSSMKSSSprMMMpUKppSJpKKKKMKSSppIMIpKKMSKSpKMSSSprMrSrMMSSrKppMMKSSMSSSSSprSMKKSKBmgprSSppSIMzxCUzprMUyTObbyUzzzaOaUzzzUtzzzUUqOaUxy0bzzzbbtaTOaTOaOaObaOa5OWbaOtWaOWa555555NNOWaOaObaOa57-6WV0WWV--O97VWWWaObbbtyTUttyTOaNNNHV0V-N---9-V-777579775-0taTOaOaObyNOa5OaOWbbaTTTTTUztWbbbaOVOWaOa5-5N-7X--V-517T7---7-Wa0V-X7ccX7-7-77VV-5-7-5N17X7XV-0VN5-N5TNNNNN50aN-5Oza5OaOtsOWWaOWaOWaOaOaOaOaObaOaObaTTTOtbaTOtaOaOWaOaOaNOaOWWWaNOa5NNNN5-Oa5NN0WaT550WaNNN--N0aN7--0WcefIBf9en9geecmmf9eAAABgee9egfBgmeee7cX7X777cce5TTT-VVX1cX1c7197X977X7Xe79eX15hHX11717-7-V-V71177VXX7X7ce-V-1-1-----117--cXX77ce1-VVV-0u7X777117771177V771-717VV-977X77VVV-7X-OWxpSSMSrMKMSSrSrSy5150WV0V5OzJpKCKCCUzSrSSSrKrSprMKprpMUMMMpKKSpzSxxrUMSSMKpppSCKKSMISMSrMMUUrrSrUKSSpppMpSSSpxrrSKrSpSMKKJhSMKppKKppSKKSSprxtzaUTObbaObzzzbyUby5OtzrtzWsObbbtzttbtztzaTTUs-o-9SuvkpF---4GN0--Akuevkk-0Z-5DzUUzzUMMSrUUrrxzzV0k24nbEF-72uPs-31lfR-X0zvBgpOsN---Fjh-1VahUR-033plvivC44-bVp12CUzzrxpztzzzy2A979eeXd9eXXVGkPch_OLJKKa_OLujjznwwkzo-Eno-q32WRrMKpkV7-V--7jXk2-IvW9e-7xySpV2kZ-vaazk0-HWAOjKHprsWxta7ccV2FavYivl3F2cIsAppKMwN117X-81g-ifoF-L4N9UrkcVDFfPz___bjvjjEB3ByvEGJKK--WQlvV0kn8QjoF0NPnGrScX-E2V6yPuEF3-D6-ISGX-42b3rh-0NYH_ooy-3P8eEOJFGGIB-B-0-2043LaPdaeeiZ30003G002j-03-JGFGJ-4K-03G-3303330NBzB-UzzB3DvzuzByyfiivieivifevefjzyw-D9vlxqX-A58vaOYw-07nF-rFPV4lbM4aaabBn3B-mC6fBmmjSOa5N-25o35o--CiYN-gQSZPTw0--2QiX--66YJ-9FT6CN-BHQ8jadHQyddcyvG2232-F-8Hr8k--dcfk6dIezn9YpIBhC5Oa6y5UrWZmX70C2JVtUzzp4J-mXEjworrq557e-6IQmyv4--dmmEV-JuCMk-9SVlk3KDxRuPiueObi_JGTyycnBk--4-BF-eicPos02KqRDLPefeTiuiviuk-K33F-----6f9qfBnUWV-jMD3iO_aOaPOiwBnBnn--0evOEn5U5c1_T5ktLKKGTvjzzYp-w0Rg9s6ABmeWBmghJonKxCIKIKKSKWa6zzro5Uxltbe9e5OtVOWaN-N6w6y2ABcX17cXV-SWU2PBo-alHDReopsOa-OOYdiPPPgnE00--BsPu--Oo5J-5oKjx-AxeUxtaeeTeeffeuePauuvivijfieiivePgyvvC000000-3-3G35JG-2BF0-30-2FFFF--3hlWISD1-ER5o5evV0-0eu7_RjSSprzrSrcX7X7X7X--6KDt-HirDjBnBnKMba5551-3rQbzaaEBnpFJAmhxnKSSSSKKKKonIKKpKpMKrSKIr5UrNV79V1----V55N-1V1-7-7-X79-IUBriLagwC2-3jm7YKkV7jUvJLaLMeudeP_LPK3PfeaLeaa_F8aaLLOaO__KHdOK8__KeePOdaaieeeiiefifeeddddaaPadOPePPeeiiveueaeeivfeiuyzjvvizEBwwwzzEE2-kkBB2-2-kB-2-B222-B-k22-BB2-B-BB222-k-kF-B22Bk0-F32nyevg220-FF-0--0-F003G-G0-Cl0ab9eefxzzba-AX5ODuklF2RKFUonyUUaPXeV9sgwrddaLaPNn2BnEE0F3RULpn9opxbbbtXVe-Y_1riO_LKfvEink--0BfCIpy1V" :
		ap.pG === aA3 + 4 ? fy =
		"EcA20EP9t--46idaPadePOddiaeuuuebieeiiivuO_aRnufezijzzvzjvfuuPKJFJGG3GPKGPOaTiiiedaduus2EYuiedn2nyffdv32--0202EzeRwoG--Ezzjevck20202zeufik43BFBFK0G4-0_J--nyioC03-0002-n22wyddyjfzven3Eyv3JJ20-zynnEyjnnvjizjjejzyy_wznnBn2zvnzyvzBl3GG3G--23FFo0-wzBB8m--ZISrMUUSpzrxxrKrrSKpppKKIACBnAA9mmgfBcee9cXef9geeeXVf9999199ge17V7Hgce7c15ABee99eeXegegegfBgfA9mgomeecXcXgeXceXnBrxSxxzHecefAUUJceccgce0AxBeXXXeceY9nTUJgoepCJnzzzxIBfrMpIJmnpHmc58EJmnrSbrMrUKJnIKxrHgrUzrxKCbtzprzxKISpxzU5Ulzq0a-NOzzxxzSxrprSSpxxrzrtztyUtaOaTObzxpxrUyObaOxMKBn9pMKICCKSKIKKCMKCACBpCACBonIJnKIHhKBpKBpBonCBmnHmgeme1ggeeeX17Xc7VY9e7emdBe97gfBfBfBfBf9e7X7cXeXc19eX-ecXceX9Vf9cee7V-P1e9cecX7e9X7X-0XcX7c97e9V0--O6glDk-BjnBnJpKKMSKrrMSSpSSrxMrSSrMKMprSKzUzzSI9cmgonCKIJppI9YKCKCKKSKKSMMrrUzzzUSMSrUUUSzrzUzryUaUyUyUbxlzzs7-V15X----V---NNccX-ccc0y10WeeeeV--70V6xUztWxMSzbbc6xta11cX9X7V7-X-eHeggnCISpKHX1V1X-7-Oa-N5Xe98HeVVVeeV0X9711-3--XjabvBG-0s7nSrxGc9-BFOunededziszBzG0-G-KF2NDz6rSzzu9d99-0FVIObk153LiReenAUbbxzxzrpxq--e9e9e-A1JTaukCF07J23pq7---cVM--WN3QV1khy_awxF-H4kIRjyV-oCGnvjx3J-16-Ny-U2iSDjyffv33G4F-CWtG2GxSUlV79e--2nbB--6j1s0REhiviizkJG4-4X-vYML77-ZHJ3Pv3-1cZeNponGtV-V4lDIreOiuBl-3-DAESjT9-r4cgTLLKKOaQjzyvgn3FBEB--1pnH-E4zQyafnG--5BKbgN-3Oxws0iCDazIKxKMMIr5OVX1V7759-05hoa-4YPwIzTXc0oS4-OaOaanwnB0-qYoDA9pIrzxzpzpKzzzzUzrWVf9cP1ceceVemcc7cV0H9uMvF-eGU9USSbuX975JYvsOLKOKKK4OaLJKPueTzjEzjzBn2zj3-Bnwn-B_HnzBpIzyNX7V1mi7bfz3J09L-pSKKCSrs5P7VX7-YBjWieueuusF-F03-0dhx_nILN-03vANuaQYl---6b56-jf6VcBknBBn-Bk2BnEBkBkn-BnBkBw-----n2Bk------kn04GKKKaOaO__KKKPLOKLKGKKLKaKKKKKLLKaOOLGKKK3KaKLKOaKaOKKKG3G43G3J33F3G4G4JGznnE2--G-G3334L33G43J-33JG3KG303F433GK3K3GKG3G3k3GKOffaF--GG-FG3---F-3I-3F0-0303F40GGG-G03GG4FF0--FF2-----0---k-G-F3--04343G-G3KG030-0-Gk-2DwkG43F3G0-30-F3F30-00-G30-0-F-3--G33I--03FG3303F3-I0--3F-nDtfefeuvfideeviivfiuviuzwn--B2BBB22--wn9PeLeeLeaPOfjzyvuiveuifhfifiivevefffjiafjiuifeypeeeiivejEivjiivijfiuieiiueuieeeeeafieeeujvifffiuzziviuzivieifiififPivfeifivPvyvijviefivevevafieeaOeueevfeeveeeuiufiaeefifivizizzwmznEzzBnEzBnBnznEzzzzwzwEzwnBnEnAyzzBzzBn-nEnBznEwzzwnBnzzEEzBznnnBznEk--22B2zkzwnnwnzznBnnEzzzmvwEEBkBk-B2znEzEznBn--kBnBEnzBzzw---4--2-n-RB2Dvfzn0n-kB2BnB2nBknBBB2-n-3-KK3JG0304-G43GLJJK_K4JJJKJG3F43G03F3-Fk3-3-k--FLOadeOaOaOOaPOada__aOe_LPaPOK_KOGGKKKKOaOKKJG-K3Gk--nB-FF-3Rk-JGGKaPPeaPPeuieW00-FF3G3FFF--2-J0-GJ43G3JG-0KK2-3G3G-3F0-3G00-F4N2znB-3jEzzBk-ivzzfjEBAzievivivieevivueiuiuufivzzzvivzuivivjvyvzejvjwzzvyvzwnnBzn_ejEBzzEB2-LOKOaMBBzzBnzwzizieveefifieizzzvyzzznyyvzznvjEzzwzBijzjyzznDzzwnnEyznzznEnEEw2yajzDjwBvnznEnzkzEznivvheejwzjefievveyzByvnmeziuvfiyvyzjnzjBwnkzaeO_PO_dLLG4PPvjivjivjiuviyviyzjwzwnE2zBnBnB2-k--4222BzEOOaeiejxPeeuuuuqeuaeeuuefifefefeeffeuuifeveffeueiieuvfiiveufiivvfeuuiuffieeuufuffieyvjiyfeveiuiffifefieevuiivfjivvjwwnBn2BB--BBnnBwn--2-k2BBwzE---0--0B3F-k2-kBB--k---JF-3B---3F03-k2--wkzEn2-B2wEEE2Bn0BB0-kknBkwE-kk22--eUSCSJrLT7V71K0YLtevvyl3KFzwGJ-DWcRRqP-hG7KyLafizivwwG03G0F-acjpSSKy-VX-IJltLePvV---PeSVrBgmoxprMRTTOa77X77-0N3vk7eoElnII93nzSKBooUSX0aNX0a5V-1pfNUugBJ-9iOdUNV-4v1z-Sfs-zBgmX8MKAxy5NOzKbse7V-0U-Fk-1y-lV-4x-6--g6bj-3L4kbaTYn2J-apmECIJlaN--MR8FTPQYEwpGF-2W9GV-62Hz-7i5cMKKGV---y2dwQvz4K-NgIMwmnUzJopKCCKKIJnKKpKSKKSKMKrMMbrWbWtaT6a550VN---X157cV-VX77VVX7ce7V-nZT45OKJLLPzjzzBz2wLJF0I80TwpCpzpOWa5P7eeV-9fnj-3pOZ6JOX-2f5dcs" :
		ap.pG === aA3 + 5 ? fy =
		"CoE-7lR-YWRa2AEJenMxJpbqTObaOBcX5NeW_xnVto5UUzzrzUrtxtxrMKMUSSyN1XXV5NNOtaUUxzztzUxxpUSIBpSSyNN1aUrSpCCIJpKs50WVNN--7N6bbzrzxzrrpSMMSSMSzs9X7-X-VVVX99ccVVDUV19D--998a6rztVXaOV1771-78VN0V0V-7V---YV7Xh17XOWWV0V6pTOs-8V7XXpCF5-N-N-N-N0VObSxrSrSUyN-aNOsObrxMABnKUaUs-V1-N5NUzrxUWbzUSxprzCKHenMtzKoopSSSzzxxrMCJmnABegmXOs1ABmnCSKCKIC77gcepzSKBe9XfKrHh9eprxmnKMKLmehKCUrSrII7XnMUSxrUSIMpIABpryURpMbtxrrSrMUWtbzSnKKABgnAAKUxztrMUxrsObWtWzzUttraOtbUtbbVefaOrxxpStySStzVXaNTNN5SJhSry1zzSgmpSM9mmgofKpxryU_rUSxrPXmhMQIKSxrUrrxSxrprKLpMa-2V7Va-OV1XXAI97ee9m8a6TNSxSzzrtyTStbtzyUbzzbtztzzzyObaNObaOyUtzzaOttyUMy-f_zztztztzzxxrSopKprKKMSzrzzxzztttyOtaOaOZnBnBmn9mmmpMzbbzWaTOta5UyObtV9eg7XnBNN-7-ObrTUzztaOaOaOaNOa555-4KCCCBnIBnBnBnBpzzSzzxzba-7--6WV-1--771-VV------71-----NN-5---OaTOaNN---0WWWaNN56bzzbbaTTTTUCKSSprrSrMrrSMKpKSUUrSxzzzttaTNOaOVN---VV--X--1N0WVN5-7-0aN79enKBmVX9e9177-X770Ws7VX-WbVccOa-7OtzaUzy1WbyObaMxyN6UV4rUUy4zzaOaMWxyOzrzxrrTOzUUUrztzUzzzzzaNN--770aSSSztV-6rxzbbs5-NOUzzyMxzUxzV-1X9777e9gf9ege997VX7X9X71MMrV-V75-gnAHommmgf9emem9eefBmenA1AHmmfCC9h9m91AIHegn9emnAABnIBmV1mmegon9f9mXenI9fbV1ge7tzV--cgoon99gc0s76tV99nCLo1977Ebs50Vf-AKJcc-1fMMKr9c7-Aa-1mpBme9c-5OWWV-XV-50a0VVUV---1N18xy11--V1717V-0a0VV117V7-0VcWaN7Oa6aNN--OVV0SrWyUxzVe8UxyNN7X2bVSMVN50bbzWVXhH7aNTSraTObbWV0Us0WVOaN55OaOaOV5-OsND0tbzaUrrtVXX6rrV-X91V0V-N-V7X17X99f17X1XXeemXcgeA9hBce17XpA17fKKCK9e97hSrSHpomf9ABpSxHpKIKHhHhIJhMUhKnKUrKKyICCBnABpAAJpKBnIICA9opBme9hC9nCKQ97-XhJmfIKBhJoXA9empmpHhMTehICIBehIKSRkgomfKQ1971hKxQBpprSghCCJonCKKqpMSpBX17XhSnBopKSgpKopnKpIJpKSppIJprSzzKMTTTUQKMrKrrps5-KpUKKSSpMppSSKrrKMI9fBnBpHnK779nAMrSxzwonBmXXppQAI9fCLmhBop-s1-WV1hKBAJpBofBegp9mefKrpqfABfKzbpIAKMKHpKKBpIBpqmpKKKRnABooppKpLmnKJpCBpKABoonIIJpBpBnIHVX9e9f7ceeceegpSRe7f9mmonCJpKSpSQIIHn99cXee9mgf9Xce97V-5OV511711-V--7X1--MrSTT--VcNUUWV-7971--X77c1-VV-V1---AJXN--N5-7eYWs17Wa---cXcWs2aOVgc1ca0tVVD---V0V--55-1eX7X511V-8V5-ge9pMKpKJoepIIBmegXc-fCBmgfCIABfIBogmnAC1gnBnBfAABgm99ggefBXXccXf7VXe9XX6ba-XXX7c91X7VV7X1VV1-D0s55--6USrMSMSrWWbzs1menB1N7VUsN----2bVemACUSKKBk-VVfICKSpg9777--7hCSJpC-----bsN-OaOa56rJnIKT0a5SrtaUs99150zy50ty-55ObaOzbopHpMWa555Uzs9ef79gf9eopBcgnKRkAJomVa0V1da5-gnIBmWVVVWWzV-VXAMLkVVXNOVza-1hRmVNEtSrrpMSy17VTN1mgX7X2yN56zrMTUtztzSxzMrStbtyMxSppKST-V-UTUraUy1Xe-OaN9nHpKLegA9a1ccX1nIBcXXXcXcefA9gX7VVzs9XVbzyUVef-Obzs91UV-e9WWaUWaUzrUSrUrpzzUUrsUrs7efB999e971ceXX9ec7c4rMyTN11X-SprMMMbVcYa4xzzrIMpry1X-V19ge-zza5OzMUUUKpKps1-1OyTSzKMKnIKKSy1V0WxzT19XX-V-Xcf7gekcaUby19f9mdtyMtbzxtzSrWUzrSyOzzbrtrV9gXf1me-eecaTMs7cX8aTTMxSrMtrxtzrKKs--VXDOxSSSSCMUy-XUs7gV97V6tV6xprV7tVA8ySrVEzzxRopzbVXOVaUzbtzKopxRpMrV5StxzrzUV7TOVgiOtbaUzba-emVOtbaTObtbzbztbs9emgf9fBggf9mnAKRpgmmn9mmn9egge1-0ttV9mmme6a-iUbbzaOV7NSs5O_s8baNUVaMT0brs54SMMUICMaNOzzMsD1eeccXUSs8WVObttVVgfAIV71g7XmkXtaT2rxrSryOyMsAxs8a5UKtWWxpKztyObWs1mmon9Yy-X7N9on8V5OWVaNMMSrStVXVcV0WaST-aN55OVfABda6bUthMSrT17XN1fVU_ttzyUwprs2zzbWa6s1eopAA99eef9ttbyN9gcX0y-VDMptzs9cdV6s8WvKy0zy171OsUxT0V2brBpMs8s51kTTUxzxzxxrV17es1mfA-egeiTTOtV55OtttppSzUMV199-8bbrUVcAtSrs7XX7gnBnA9eTOs1cT5T2WxRpzbtyN9bs9ABkYWbbaShMsOWt_QMIKKxzT18VXTTUT-1hPecVOUVbaUzUU_rSSUVVX8tzzUT-ce9f9VemeeABfB8a5UzbWWWzzbbs6tSrVVWxrV79f755OWtyUs1-0aN-OUKMpry-c17aOzWUIMKprUUIMa-1X918V770aTObyUxIKSIJpCUVNN5--sNOMVN56_pKCJpSJoonKMVNNOa---OVsOptaKMT55NNUrKxxrMMT11115N7s9kc9V9VttMT0UTNO_xU_nJpUs7NUSzzSKKUMUts1e1T-c5TOVNOaOaUy2V50_zSUVX119X7USxs7--OzSCUbbKSzsUxRnCBnCCBnKrCIKJnIKM_pUVN5NN-7T50a5OWV0aNNNOWWxKKMBnAMxpIKKIMaSxs1X6rV-D6V-sT-UUVX1e9Os7zy-5SMUTOtpKySqpCBoe9nCTURnBpyOt_oonBnKttU_zV7a-5-tWWWtxxrqpKTOttSMsOrSxhBpT6bxSxrtUUIKAA9nHpHnBgeecf1ee9XnMxzxrUzUQCUxSs6SompyMs-0rSTUxtTMzzrrrUV1-sSxs777UrrrUMUtzUpMJn9e9ee-VhKgnMzUrynKtWzrzzzUxJpSKJnACKKs0Wba0V--UTOxyUrxzxyUxs-xyUrxzrUzprzUrpzUrrUrSyMrUSrrSUUUSxUaSfMT6xrSzrUrUUby18SrSrxrUpMUTNSUUzSSKSMSrMKhSzTKSpMLpMCSCCJopCIJpJonBonIIHnABggnBnA9nBf9geeg9ecce9cf1e9mm9mecf1eeece9X7cXXfBn97V9eA9cX7XfMQB97cX9997VV7ceXXnKSxxpSKxSxzQMUtxxhUr9Xs1AJmhUzUUSzzKSz1hUU_Sz_xrrSzUMUKrSxprqnH19pSKSpBpQABhMrKSxrKSzMBpxrppIMygpSrBopryKpzKy0nMMzba0rrUMStUSpSrMryMrxzbyUUMUty5-Ortbs78V77X77--Xe79pHfBg997X7X7X77ce-X7-zTOa0VV75TUUzUrrxSrrUrzzwfACKrsObs6TSz_zxrzxrrrtVN5Sy-4W_BQCq0c--5XUc-X5rCBxMa7PVDNUK-nSJp971_ESHe-mocmeKzxIIOxttzsTT-Ota0ee-057TlBpMMMlsOV7Xe---Z41V6NZVgpBmXJgnKMpr6WaNT0c7--3XZyYK57-DXainASrrUs-cXc0D9q9BhrKpMy6e7VHVV-19qEB--1him-7XjEvIohy--0DA35ggnKEGzTOs90X7-DANdhT7-7Xt_vISba9c11AoEBnACBxrSxSa0Wbba7ZmcWXV0Nl-LpUX7--232P--Y4hn-1NmHcmmnUy5--yBtECSKpGaNP197-0YF0nN-QYKBvKofomhMUtzba-1WcBcV17r9ZnpzsX9-4YWUUKaNc-1DHqB03YaRQJjHc9K9Mp9XmrHhrJhromghUxoOVT5OzMxtV5VNT--7VBc--DVec-5DXQxV-9EWOSk-7cyKynBpBnABoopJ5OaTT5NOs-OcVH7zjtnSIAHcgnCBomn9gjzUxrxCBeo6yT5Uc5Wzxru-e-Wy0s0aPc-39Fz7gpKSBcCHgcWggnIpRObztbxHggpoehryP6tbaT-VN-17---ZFFrV-t3OTpa7--GJ2c--GJFN-5GL3xc-9GPigq-T84fLpBpAMHpSBfACoemeoefCACAJrzttaUM5TUa5TUIErr0WWxOtWaOzyNNNN77977KACKBnAC90aTN1VN-7c-eGPvhSrq0ceV-1GRaD-9ZO8jSpKF--7--ZPZE--O6VKyV1O6qJppObVXc-aHHGgonUbVV-1ZZurAs1XHQCRnMzMppopDOVNWbttbYBec3mgce---HWfN-LHY8SS5X--09ahV-tAuEpN--TI4hxDUT7c-PI_QzrqXX-3ZxNzHzV--ZyYEV0dEl0pKsV---J06s--J71N--J8is--JDws-5JFcRs--JKrN0iJQsgnonCCL6xba6yOWXe9e--_6BUV2dHDArSUrz1XXX9-E_ADrICMKoN176X--0I2AV58JkgmgfIIICCTOaT0wNN--PKIxzUTcc-3_KPjIqV-1_MDbCV0yKYtSHpIpCSKHZlzLNV-10V55--5Kcizc-9KeMwq--0MPIV-dMpxrc--_Ul6V0OMzAnSN7-O_Wd6ppSppKMwNP-7X97V7-F_Zn6CzUrMOX9Xc7--_a82V-0OcIV-8OxHk--LW2N-DLaXxTX--4fBH-2_fwzLPV-0QFUV3OQn6xKMSxy0X-ee7-F_tjEBemhT6zzP7N-1_yrzR71uMvlwxIBemeefSu6zp9zTOzq-5TUxxWc9A97-9N1TU5V-0Va0V-8W-ps--NFDs--NFLN0aNK0UKptxxxrUNXXX9997V-DOBAzTX-2aJfQBy--0a2hV-0a3SV08aU0zT9V-taUEntc-5OtESV-eP2MzUSk6e9c-XPIwxMSN7VV-ddFArc-7aafrpUq-e7-TPquRnTTNc-mPxXxrrKlcVV9-3amCbSkV--5oXa-Gat6zSSzrUR7X7ec7-HQgPwxu7-9R1zzP-1tkzEmgj6zzXc-2b3DrLP--Ol2rq-78lqzrHegrzzzKEUTN6seVNcgeX-kbAFvBghCIKIIBpBognIJpMKSSxUSrSSxUrpK--0ogPV0OpIUnBOs-SbSprpUSI9jxa6aPeWzz5XeeV-PSyVwpEsV-CbXszKCCGWbsV7-0bZmzN--bbTv--0uTlV08uUInDTV-OulbqV1tuqQnCMF-5Ue-2bh7jJP--0vJ6V-0vjlV-OwCMqV-OwVCw-0twdKojFTNV3dwdbnUSMzs-PCA91V-HUDFBraV-5UKsSc-DUR5ByP--6rqa-2bsubMc--tyOApa7-yUdojJmnIqOtWV9--bxunV-0zWdVAOzeUnxBmfrrICrUUUUrpHzWVcWX1175X-Xc--UzJs-9VELhk--e0DGpX-2c8yvE5V0P1YAmzTX-Fc9eEBhHgn5Uta5N-OcBY6pSrIAUJgTOa-09We7-GcENbMSppzye9777c-9VzggtV-94IUs-9WO6SNV-95_ss-DWdaSDP-mcR2MBoggxrpUzzKSEzxUqUyX9ecWaNVe79V79c--WkEs-9WoBzNV2u6I8rMJpGaOV7Xc-9WxeRyV197X5onrsN9-1cXrMEc-uXElzMKM575NHe-09AHrpNP--1AZrV-eBC4rX--7ndq-4coH6ETP70HYKWxSMOxxc9XWbkd9V-9Edzk-HZ0xhyPc09Z7pBmpSxpy5O9V79--82Ca--86Zu-2dAgzUcV-PI-Bq--eIQcrX-1dKuADN-H_k1UrXc-9_qWSsV8uMPGmzMTNUUUSEMSxxze7e71c-XHee7-Ha0vzScV--aLfs01aO1woxIC6a-0tuc-DaUtSq7-6dh56pM0X7-7dp2zMSR-X--abWegmjUOWc-EdszfAKSzV5UNe9V1PUQ2nABUzc7-5by5U---cAvN--cHps-5cLGhV-DcONzR7--98tL-4e9eMrR7V-HciUxpX7-udBoSJfErlbuVX-29aVfmxIpGa7P--DdjHRtu-6eW7EKSN11--9XeD-jeZFrBfCpCSxpSrzJ5TUcOzaOXfBh9X9X--1c-1eGYR-5efWrCracV-1fXrV-ufyWxkV-ufAyBoeezUrzV-V-ugwopa7--fJNN-LfPwSpkVV-9iyzs--fqes-ifsnRxzxyXecV0ejZ8nMbe7-9ftmzP-FujbporSIzSpMUISCxzx-VUzrrTc6zy7Xh9ecVWuXX-7mcVHe1--ejc_xc-3ezMzK51-4ezOMKGV7-1g-Dw-Rf-nQAA9gnpMtzzzbttXXX7e-1f-oITV-agD2xzola9X-Ff2bjASrxSr-97VV-4f47MJyP7-9gJYUP--9lWRs-qg_aBfJxrzs117--gavs-PghqUKGX---fCFz-09nVOpqV--9njxk--gyON-Dh4IxL7-2fGYEENV-1ob8V-upTOpa7--hVws-XhbrSpLOcXV1eqiCpKR0yX7--9qk6k-PhjSS9c6y-7fR-rUrR7Xc-ehsTBgrqUscc-PiJ1hASaV-bfaA6AI9MMMHhzpUbzOyOz1X97-1ge7V-1tzIV1uu69nCrtwP-e-9ffCUprUkVXc-5fgVYCM5-V-9vpss-5jH-E--HjT-wxu--XjYHx9xSVN-19yPqognyT--pfugbS9rSrSMSrzpaUpSUMSkVV-VVVPHgccX1XX1c-9jiyz5V0Pz_GnSN1-4g0rMKR-7-HkBVxlu7--kCK70LkGUSpMSrOzuXWse7X9-4g57jrTXV-DkQfwxX--B98T--g9En-1v1y0pKorN7-7--gDm6V-v2vCxNV--l12N-Pl34RxUcX-0gHXnD-7gHhbKrq7X7-TlB1xMxcVcJ1lBSSrSSppzUzxpzT6xSSrKrMJopBmcXcxrMRUSpMKBgc7N1cX97971AMHYSSrMHcce7eVVN77XVX7-Oc1dMSHooe-V-CMKSSKq1VUpkUSrUSCMMMUSzSprKKHexxrSSxSxxyUSzzSUUSpSpSxKKBhUpttx57OaP0WyOaP-9-0V7X5CHcV77X1VVXXV-97cV----0c-7VXcY97X7ece1XABcc9--23yxV3v42inCMKrbVBe-0xXV-A4Ugk-aliIwpIMs----BS4D-2gSBER5V1v6fGpCCptV-X--BTnq-7gVUzKKT-VV--m1DN-qm1FRfpppNVN7N-DmEsxT9-QgZUjCSKEKR6xGWe57N-ZmVV0A8RQxR7--A8TUk-imT5xSTTTd9cV4Q8thxpponSpTN7-X77V--mZcN1immTUMSKCKMR16VUSprGbxkXBcVcX77V7V-TmmkSpUVcV-un7nSrMSxkX797V1ABckpMba99-0go5MN-5gpKjMMX7V-QCSMnV-vCllpk7-Pn_7wppc--6gu_jIIqN7-3gwCEUP1-HgwGzMMMSxlu7X7X1V1vETrmxSrTVX1--C-0D-Eh0RESoxSRN-X09--AFrbk--oIos-aoMTSIKFN5--5h58vIRNNV-2GitV-vH2_psV--oc-s0aoc_xKMSJe9JUUqN5P17VV-XoimSI5OycV-fHxjnk--CB5q-0hHcbN-VhHl6KpASSSKIMxsVWyP77VXV-7-HpEKxUX7-mpKbRoeKSo-NN--CNDi-7hOczxzTcXc--pboN-DpiAwpV-5hTmMpR5X-0QMjrnMN7-1hUQAT7-HqBoxK---DqWZRr--IhdNrKrSzOV5QBeX3e-9hfVIBpUzX17--CfpD-phgbjBmccjMJrzke76zrrMMSrUrpSyc17VVX7X7X7-HqmXSSX---qmvs--qqEN0HqtqSrxKESrNN7Xc1XV-2R4lV-fTzpnk-1hwNUTV4Prr2xMJnIC9EIrJomnqUKKCJeIIMOxp9MKzKSr6XX7--V57OV70WXV-5-N6a--V5fUUEofHchpKMOba7X5UTP7-0hzqEP-2i1rMSX-2vVmOnHpplxk-WcV-9sS7x5-2fXLhnESoxu7T17-2iCDURP-3fYKfrK9fISr6s-57---sq1c-DsqBSTX--DFu5-1iHcjR7Bmt9wxogcf95IIESpAAJegxUJfxI9onJeCrrrUrSUSSrSpMKSpUSrMKrMMMSMSppSKCyUUz5N71-0aP5OzyOzUSrUN6aOX10ty-7-0s-7cV-7X1X1-VX9XX7e9cecge16yX-X7X7BmXXcV-2iHoMUcV4Q_4_nBrpyOzSq5cXX7c-HtGWSpX7--tUGs-5u0pzc-Tu6aUSS-17-Tu7VxACOa---u7iN-5uEYS--5uEcz--auFlSKqNO99-2i_aUGuV0QdwKony7-BicpMJrMSc1-5V0feEApSWcc-5uYrSV-1uf6R--igpMV9vfYUppKHexxMzxxrUROttX1e7cW97HX17--2fYfV-Qf_oq-0Afj_rL7V0vfwMpMaX5V3Ag7opBpKpT575-7--fgPSna-4iqejAoOV-avQIxxrycce-0isQUF-1is_AGc-LvkFzM5X--fjqbr1--Dz_T-6j-zjASq75-1j1jzlc-9wL5ww--2lNpV-flSUxX-3j5MbM5X-Hj6HUJm_prMSk--7X--vlsIpk7-HwadwjOV-1wepR-2jAT6Ia-1fnTTxHnEy0X--Anark-9wvRwtV5QospnoxMSOzr0aNn9X797V-Qp0rq--QpG4o-0QpR0mxlX-4jL0rSq-c0XxPBBfBnEMKKyNNTOVN1e-6jMXUJlz11-EEgqwecX-s5OaSs-AjV-jKppq-17c-9y-hSkV3fsD9ppKIKDNNOVV17-Ty3bxJp0V--9yERww-0Ax-_npV--Ax2Ik-9zfaxkV-vzr2xk7-A-1BRy--3-zvV-w0lpqTc-I-kixr-c-A0MPENV3R55SnBpKkWa0zGVX-nkNrfACJeonMrxSrrrSrT55-IC9e-0ztVNX7X99--35IBV-R5UCqV-35iqV-w6ltpWc-60xjx--A1PugyV-B95ws-E1cpgpV--ki4IV1wAqXpUTUa1ee-4kl7ACOa7-02LhN-02YwN-I2aoBjy7-f2fQUKrScVc--I2gExS-V-b2tvSppo-7X-0kyWUF-1kyZMq7-036Ns-M36nwhr---RFUnqV-BFvKk-03Kgs-A3kyxNV-wI34p57-644wwN-64BcS--04PSN064PVSKSTUF14HcWc--BL4Uk-64ckSV-04jBN7r4jQxHppKKpMJxHe7V1-ecnIIKABoopUSognBnIAUtbotyOyNOsNTUSJnKq0a6ztbttVOzOVOX-5c0a5OV1XX7Ze9jpI977AI97--lSWj-FgMRSmf9zbrpzMKc0bxrKESxrlVXHVUbbpSkV7XccomXX9ZcP7-E4xwwja--lXvjV-wQInrsc0Q5ozSpKEryObbuVgce1c-Q64OwhMWX-0lmZbk-0lpy6P--GtFD-2lu5jKVV0RUb6mp6V-0m9erN-5mBT2BjNOV0wZLzpUk5XVPBZWrmmmmnIJrMSrSSSSKSMUxKpKrSESpbxSSrMOts7-7Ve7cnA9119-Oa0Wba7V---V7---ece-cmKJQBmp9ggzzrSKMMy-OyTTOX7X997X06mLdEBgnABnIIIICCAJnJpCCJnKJ0a5OtWa55Oa0WbaTObcV0WWV--I8QGBxs7-U8RIgpzs7c-29W_w-3mdg6Ctc-0mguE5-ZmlOjKBmmonUUUUbw-OzwN-VHmc1eV-wgZprsc-rANbgnKrUtX17c4UAhBhBenHYBocVgprSCHZnrrUMSxHnIKLOa-0VObaUzxWza0bsNOy1X7Xe9n9cV-1n8XjDN-IBkvzxXc-2BlYi-RnBjzIEMMKppKKF51-1-0V-9--nBzMVXBp7smn9f9XehBnCAIBomnABmceXeZegccZmonAAIBnKSMSrMVc57OyOaVUzWzOzxxzzztxzxxrrSrtbVOWtVN-OVP7V-0aT--RstSq--gtJnqP-3nilrCq7-AniufCAM0bbcV4UEFHBomghIHoonBnCKpKICSKpMxIBnJOtV-OsTOtsN0aUX7VN---6zOa--7fJe1-7nuYnACrtVc0EFVzgfBofKUUaOV0a73zH2ShKICCCCICCIBgnBpBpCICKpKCKRN55N-5N5OV0a0aN5-NNNOWV-NP7-zHTMwnJhpJ5-OVP-5oiBECSkV-0hBVAn9M6V-IIDDgzZc-2IgAR-1pHnrR--2KH6w-4pLvUIOaV-0KUwN92LmEgfBfBgqUSCrKKKBeVUX5-X4JmoocX-57NNmconHdBpJce99pKppppKIKopMrtxxxprKrMUStaN7-6yUza-7X9775ObzzStV--51--N-PcXX7-ILxOwoOV-UMCUghM5N--AMQdSNV0STQGrScX-8ptlrCCCta1-0CTnYnqP-0SVFsrM-70Eq1sfHnA9XcYCppSKKSErrSSCzpUUzKTOWaN0V0WX7VXWa-2KBme0WX19c-4qODnHrVN-2OnhB-Cqb12CCKJ-UcWV-IqjjQSrKAMzTNV7VXc-Nqu9fBnACIHnSLNOWWaOV--hjnFrX--r-vI-1xkFZpprOu97V-zr6zAApICSUpzKUxlyUrwUxKV56a6a7VVXY9_HmmeXVX1X9V4CmRVp9mrMaTUxT-e7c-OrAdfJnKrrSrrsN0X979X9-0rFTQP--MKdX--M_8P-DreVnCCSrzVVNec-AVFgBTV-T02FyV0L0slMs1c-6VTDEc-6V_Ajc-AV_JBtV-D5hsk-b_7iwnSROX1--OPBa-1tQurDN-Ya80xERTNXV" :
		ap.pG === aA3 + 6 ? fy =
		"DwCd1sP0j--RaO__ddedddifv2EEznnnyfEeRwyzBBBB2Bn00-17-2fEMK9dCrtzUrrMMqN-X-789V----Sf-T--yfzIrzohrxy6kX6rSk16k7---11J7Z-35CISoOxsUKESpEP6qOV6pJp9mec17cmhpxUSogfBnMMGWxptyUUzc5UrtttzpoTOV6lVVZme-gcfBc5cUrztbV73cWztaEO-1I5dLOfvkygzEyaOdzjzsl2knvg2EW2zEznvzzyzyfyyzzvjuMyzdzjivvvyyinyaTVyydzufvevjgwBoG-znzdiEdbg2vkyjEyiazuK_4OGaJaPjzYnzzjBwnvyfiigEnuP_vjuiaOMdezeififiiEfgzfusnEeO_ivviEuvjzyzivivivg3EjuyjiezjjisnvvEffvznviyviYEYyzjygnBz1_Fl-zivjEzyuwnB2z0434-4G304-44-CGJFKJEK42Bo-38G-340403LK2kl44G_GFn-G402l2x2433432vuvfvY4-l-0-FkF3G-J43G3FJ3-G5J2---20L-Y-8CqLKOzvEjYn3GF5N0A3mrIprrIryT1Wace1XV0F2MKYo-H05ahSVV1R1RHOKefiznn0-z4KUy5MEe17X7Xa17X7X7X7X7e7X7-17Xe1XeX1VXT0aN7X7X9X7V19X7V17-Xec7X-7X77X7VfBctaT-17917-X--7V0V-9Xe19X1cX991hJpKJpKMSKMSKUIMUrMprSrMSrKMSKrKKrMSrSKrMprSrMpKMSMMpMSKrKKCKMUzrxrSUMUKIABceV17-XcX7X7917X9X7X7e--0aN-7V17XcX77eceVX7X17919X1EzyTN5T-c-7X77X7V197XcVXN-7V-17-X18VXD---X7a11--7a17-99177Vce91X7XX1cVXe9XV-N-7a11177VVX12V0V-VX9-N0VVVX1-1171777s0V5-N7V7Va0bVN0VUV-VN-2Vs--a-NTN0WbV50WsN5-N5-N5-N5-OrxzST-VXcc-VN-1N5-V51-15OxUSxUrxSxSJpMs0V-8V5Oa1D18V91191X11-VVX19nCSSKSSSrMrKQKpK7cXXX7Xcs-1X1VXVV7777719-csN7714yUSpUSSryN77c7X0V-16a0VenB5-D0WV9X-a0WWVN-gpC7X-gm10tV0yN7NNN1VV-N1mm-N--s-7WWyN--fLocccAAC9555NUsSpy-Wa555-c--hIJpCCBmg5NN-NNN8_y--N0VD-epnIKCCLVXYWV-919prKSC9cV77-V0Vc11111TTUVVgkf1991D-e1-ceXX7X-WWs9cXXgcUxy10Va1cXei1monICI7g9-XgegmVgem7X6xyUVc8bbta6bbtrzMST--15NAA9egemfABXnBm9n9XmfBpMI9mggfA1eceeegn9eeXe9AIBme7g7Vecg7dV9mgecVfWzzyUzxSvCMtbtbzxtUryOzzttbtaOaTOzs97ea0VenBmN5N-XN9X9XiOa5ObtaNNNNOttVgggnB7e17OVN0WbtT-tWV5MV0ztbaUzMy2aOyStI7fCMtxrzzbKrUyUa5Oa0bUsOa1me7f9cD-1997-VTOWaUV-WWrzzxprWzUrqnBnCKrSSzySSza19Es9aOs-c-WsOaN50V-NObttrSSxzzbtyUbzzUUzUtxrUUTUyULpf7hKyTSBpMzpompqpSxUrSSrKprUSMMUTMxSrKSKrrrppMKMSSprSy50byOSzaKgpxza6zUtbz_zUmgf9mA1egmgf9pMsOzbtzMyTOzzMbttWy2WrKKIKSKSUtVOsUCLnKUtza5SzUxSSrSSzUSrMrUzMttSxxMSSHemgnKzUSzrzxzyUrtbbpSrzKtKrSAMKSs-T---X55UbsN9eem7iObtztyU_rQMKrUSMzzSrxUzzbyUxxyUs18s1UaUprzxMKJhSrMxpps-V-798VUtaOVOVD-XhHDN-6V9XXm7ce7VVtV-951-Ors18Wa-7-177--1-UVcOyUbzMTUbURopIKCIA7f1hMShJonIMTUMUSUKKUMrSrRchMJpSryOxxhIMprSJpxrs---Wa4xxrSprKmpKKxUSrUT5OV7N2a--7-ztVYVXcVV2aOzrzzxrSrbrIMxJogAMSMSUUSrrKJgpQJnAJX97hMMU7fHeX-en99pSrxwopCICBmcXXccXehSrprUxzbztTpKJonKCBfHeXnCLpBmX9XpSzrpKpABeepS9nKnBofKwnBopRpBopCJpKpKKMKIKxzSzzzxKMSSSSKxKSIKtTUWyTObUrrxzrzrbrSzrMSrpzUxySrxxzrrrzzbtztzyMxrUKQKKSSppMKpSKpxprrSrUUSxxrMprrttVD5SrV-a-NN71-cX7791-77VVVVX71-TT6WWbWWWVN-NN8V711-V777X11XVcccceXVXXNNN8V-15-9-VV791dV1-VVX7X1-sNOtrtxtxtySyUVNStUrUrrbUMrppzzrbbry6pKKrMMMrMMCSUUKepKxs0aTTMUUU_rMT-OVN-6T-7-a-777V-5-XMxSSxxrxMU_pzhUxSmpra6QKUbSyOSSnMxSyUKSxCMKUtprySzrxxKttbzbSrbTN0xzUKBpyTSrrMtttzprrSSrMSpprKCILpJhBhIBonKMKLnKICJnBgmmpBm9mnAABgggmeommnAAAJghKKKhKgmpAAJpIJopCIMIMIJpCKJpKUa-s550V2VN50VNT0s5OWs6VT5NNTTTTTMyUSSxQJpJpAA7fBprxpttWbbSSQKSSSMMzSrt_rUUbUbaMyTOVzTOs7777N70V70_pzKKzbbSJpBp11hIKqnKUtIAJmnJnJmnIBnBnJnKKLpBnJhI7e9778V1N5-NT0VOtbaNN9gmmmkfICCACBgonCBpQICBnI1fJo9pSQJohBchKhCKJopSMKSSMrSMCIBomooenABfAIABgnIIMtsOaObbxI9mmon9gnKUwpMJpJpJpBmpSCShMKCMKCBpCK10V7-77X1-cVV-7hKKCMKrppMKSKpIAKtxzxSKpxnHghUySrvCICBfCJpMbnAIBhBgompIIMC9mgfCCKBoonIIICBfIIICBopIIIKKCKKSKMUKpKxpSSxxMUMKKSKxpUpKrSKSKSKnICCJnCA1999-1A9e-7-cXXX17V70a-f7VV-1--7XXm997cXX9AAC9mgoekccXg97XXABmkf9f9fA9emXn9emgmgonKtxgnBfI9nBemef1X9-9gn9meeXA9eemegoefBmgnBnC9gnC9eeggnCJhBpBnKJnKKKKxpIKrRhBhAKBhKSKKKIMKKKF7Z2MkT__44OOaO__O_LLTbYvkyffBkEcw2knyaaiBkyEC-x-nl3-3VQ3QMsc-O-txaOjzzk4K_-7VS-vCSzc7V0J2qEPevjFF3F--6mTV-FGRlV--92TV0kLotbx-a7AuPnIUUoxxzbzrKrpKKMSSSlWxrUsWtzKlzTUyOzbw516xSUzWbsX6wNgc55Xc7mcXmgmeJmofomXXIBcYHcVPXZcVTUceX1d9me17ee9-A0Y6qioC-asBoenIBjSUIBjUSJe9ceV7177eV7fC9gpzzHeeICyUxA9efIrzM0zKaP6kOxIMtxzbxBgef9gfMSxyU6ttaUttzGzryOa-OV1XCJc9VcN7---40ekqQ--NDEDyV--Red-6VumnMUacX--0pcZ3P2fIBnrozKocX7X7poxognBU6zbzojHxISryUWX-U0XV--V9YHX7--6M-k--Do0VDFSy8__bfuePPaEykFkk03C2-3VwCbAMV--0t6o-92oUS0V4FUCSaOQzBn4---ywe-Y13Y5KOjuRyaEBG2F--GW_V0FZtli---3co7-38GgR-93kCEP-1kaQpeNn--L4BWBn5T-BFdZS_ePOvjjjjwk3-FJGF0sL9epCyN9-mkhAhaefdPOOaOd_eO_dPLyiiveeeyEnnEiEwBk2nEnBnEEEnnwwznnF3333GGKJJG3G4KKGJ-94g9CkV--ipW-VWVbABxrMKz5OzJxsNNNVXmXe9c--B49F--PnOV-FqcSV7sQLqmeeppUUSSxtaTU6yT97997eeMC2a-LKOaOaOi_vdPiuzjd_dvijyu_KFJGF33303FC2-oBBB4KLOOaaOiaeduaeeffdiuzzzyyydKKJLfivjjjYBwyuyynzyEnznvszkxFzwzjvEBG0G2zjgyuyYvybvzjyieKbfYBkwzivYvyvyEiviyvfuuuPfePPaadvvvjjeOLP_MdOKKK_UeaPMefvjjYzYknkkzznFzyEjzjfyvvEzjeQfjYvzznzyiyEsywzwzYvEgkG43K4GJJKGJJK3-zjsEzjjvzwyyvvC3J2G3FJ2yjFG04FK4F4K-OKGJGJG0GK43EB4GG2EEzyvvn2yduyvjyinzx33G033Eiw-o-KF2k-GGJeKO_-0PL_JBFGKOF_KOHK4GFxOHKGGFwp08J-yEYnlKKFJBwFJK9eOFHLTdJ-kkn0KKdFPPe_3-B3HeOaJ_2-EeVC-3JKLdi_FHK20dPJFk0O_JBl3KT_3K5LLfjdJeu_Fo3_JiePJF30-l3FGJFoGF-X6dJBfEOtsV0FxOWbo-D6uCS6X1v2zp5_4fu_4ivEdiuPdKJF45aiivivyyiviiijsn-znBkBF235J-GG_-nBl-w44aKKG-KX2_nCErSSSkOWa11XeXLG1g8_OK_OOO_aPuKOdajsydQjznzydLKK_5KaiuyzyvzzzyzjvjidLK3KKGKKKKKaQfefjizjzyvdefiiznyzzyEwznBzwzkn2Eifzjufwyyzjwww--GPO_--zVBnvgEekk3K3GG3JGGFFG2B-333-0--03G3HK4ePeefeQiaOK--3-0-JFKiydeJHKJ2C40GG_ddKFnB2-JF0cWyMmmyTN-ZGfute2---ZAWV0G8Ihi3--8AO7--I0sk-7aWNk-RIFpuEF018vKgpKEM6tWV7XV--L5Mk-NgeYlV6GUzf_eczf24_-k-1C0lB-I5ZZqOynkqK-5YJBIArlX-1Gfu8_yC-6YOlnKIOV---5qJB-DCgdwja-C61_LTvoG-kYgE2KIJnAAMUxzUrOxzTOWaZcV9176qXeX7cVDlqEh_PPeffijjnEBC203FFGJ-mDm3BfEMtyP89-C6VITdTn---2mET-26bSqk--EMts2wUQzuiijiibfV-EYnn3G4LJJGF1szi7nJnr550e--78qw-1FShy-27J7aR-eFczBxKoT7-V-oWi1tLgwk-9FyXENV7H7Of_bisywyoGJG-GZSgYBepxxpyN5X97-gZ3Btfw30yZX6E9mY9eememXeefSzxzT6xzUrMommceKIABhBeMUSxyOWbbbxzHpATTTV5OzxzSy15Ua5O93eme9cXWWbbyVcmVAmK5MiyiajY2Eil3G445J--Hp-s--aMYk-0CdpV2HW8xuvoG-28GGLmemxr6tsV-oczDQis3F11JY8BgnBopr6ztzzNOWX7e7omX-0mZRx_UkRdHRBnKMKpMJppJxponBop6bbzxpxKlbWa0WWWX-UzUUrMzlxrWaWXVd9n9WVVc91e99X7eeVjHcccOe1V--dDLF0OOWLmpy1-6AISazG-5_hMYrq3e-2mvLGeyn04-Ca5w69nUrSq17--QBDVUivzzlJKJJ-qNYawozzyNn97c23mKCO_OLdiffgwnBBBl-J-5OPQhV0wnGIOeeyin0230F5uPAsSSUrHprMSI9BenCHoeXAIrrUUUzTUzyN56rzbV0bxbtcOyOttztcmefBgfBn9ef9X7VXX7X7X7V9IG_jaaeivzB-pFn2KJ09Pe2Rhbzzxxu7cemc-CCRoydz-p--5k5q-ICZKiPvjk34--5npT0dDEw5Oeuaufdeu_PeijB-BBFkoFG2EfswFk3-JLJ-9Ul6xk-7nzgraaOeQfVBB-n-1XVgnghCEpKSIIIMKxML5-0Wc0c5V71-7-C0ccQ-B92pWnABnIBgmxUa-UbtbrzzrtbbueXBee5Pec-C21Ktk6e6I4rJpIBrMM0c-0zzbae91c7Qh2tpO_ddeeTbeeiiduuffeeefydbefjiedeeaijY-nnBwnznEBnnEwk-nveefdbYw3B-2koFFnyjueuTw2FyvfiB-32G0-oGK3-OdveeJFFFo3BoLK0JF-40OOaOa_8KKFB3OKefddFF0--02F-00G2--5cWxzMSV1V0JNHMaB-uYI9RnKMGWWaNe-HJRYn_aayu_jjjeBC-FJFFEjiwC44F2uEcgpJxIIy5-NVV-07cwk-PGjhlV3oZcraOPzkC-5eHK_nABpKKrK55-575TT-e0fHO2qaaabeuauQeiffeQffF-33-kk-BB222n4J3K--9LCls-CAWRtk-1QXrVIK7Wd___4aLywyizYzYEyEBw0JOJOJJ-edEvRpK5Os1V1CKLfOdOyszywkGG4-5etPbKtae-jKWNneePfiuiifiijifiw2yfeii-zefeeeeefYBBn--0033F3F03-G-3F03-4-0GGGKJ-ufB4MHjSzSomcXfMpzS6xKKKKMSsV-10a7V-75Ouec17-6Lbx5JE-PfeifA9eme9AJzrzxztyN57-SVW5uU-0qkprRxMSKSpKSrtV7X7X17--V-58t6-LgVLbBpIKrWzSqV0V7Ve--O0SB8LoLpxJnBgmpICBomogn9oghBnIBpUbWxpMOzzVUsUbaTOa55ObxonKESyUSzrzRUtWztsTUzrMtcVV-V-eX-0Zegee977XX-cemcY9ecV8q__U_OdujEvnBmK30--hDurV-5vfz37hzjz9gemecf9genrI9ggn97gegegoenBgopCJonEJUzpCKKIKonKSKMKKKSMSpUKrbzV0V5NN-77VV-7X-WWVV-N-0aNOWWbsN-0yUUUxzrzSMKrSICpJnIIErL5NOaUSxpSUMSSkOWWaV1-1-55--Vc7X5UxrpUSUxty51-cVXX97VcXZecV9r1ep_LLasznvgyw343F-AZ4Kk6pnU1tLuaOG5K_a_OLLPKeOddYzwwwzEnzEnwzE2E2C-JF3-4id5YIMV7-Cs_ftkIvpQOmnA9nBgf9YBoooofICBeeCBoqUUUxtza6aNUWba6aOaOWba5T5THcV7NLKvdveejzG-33F-5q05bAzy9VCvXK8_eeiyvujin304_-3-0FZT-95mmcgfAACBn9ggeAA9mmnCUtzrprpUSAAIBggecmmggghM6tzNOtttyTTTUbbbxzKa5N0bbbbbbaNTTTTTTUy551ccfAA99XXcWnw5hG_OLKOLKaO_LKOK_POOKdaPOaPOaaUzBnEknwknzE2En2nzEnzeKazEyzzjnwzzznyszgzzzwziyzjvvzjEnueOOdawzEnnwzEEnwwzEEnknEnB0JLJJ__OJ0K_JLK4K4_G8K4445K_48LK_OK4G44K4OKGF1TETamnMTOVc" :
		ap.pG === aA3 + 7 ? fy =
		"9mDS-FP-F--0TedPPOXo0HCGSpxrMptUSrUztztbbsUtaTTOzzzzStzSzSrSrSrppT-0btaOaNNUttVOa---56y6aOSrUaN5OzztztaOtTObtaNNUzaOSrSvHogmgfKpKSrCJgnIICMKrSryUWs--17XD--OaUzaOzyObzzztzrrUxUKprrzyUzzzzzzrSrrbzUSzyOaOsOzzzztbzzrAMSKzrUzzUSrUrrMKKSzzxrrxrxrrSrSrUSpMJnCKUV6aSxxUSxrSSMzzzWzz_zzzzzzxrUzxUzzrSzpxpxUSUxrxxSrrMSrSKKMKMSKKxrSKxzxpJmegnKzWzzoeepBpABgohBnBpMSKyOsT5T---OWWt_onKzzS9ehSrUzzzzrzzKKAILmfHnBpUztWsT0WaOaUzzzUrUrSzpxzzrSMSrzzzSKKKKpyTUaOzxzxrxxrxrUzzxzzzzzzzSrxrUrSrSzMSrSSrSrUprMKzUUUrbrbrbrrSMKxKKKpIKKKMKKKIBpKBnJnBhBgnCAIBnBnBnBgonIJoonIJnBnKBen17AKICIKKJgpKKCSSKKCKJpBpKIKBnKKKCACBpKMIKponBgfBnCHoonBnAKCKKCI9nBenBnBgmepCBn9cecegX-9eenHmognBmegefBnBenBnBenBgmonAKICCKKCKKKIKKJnCJnBmfBnBmpBnICIBpIBmpBmnBnABn8aObbaOa0bVOV1n9fCBonIHmonCMpQ9hCAJnJgnCBnBmpBpBgfA9nBmX9eeeXeXcXX9eee77gpKrSrzSrSrJnKKrrrrKJnCBnCBhCIBgemggeggef9eemmeecceAKKrKICJproomgmgeee9X9eXfKMSMAKMzrMyOtxrKCBe7VcfBprrBAIHnKhSKIBp9emgfBnCBpSMSUSxrrzzrKKLmnBmmnABpIKIBmgmnKSpSKUSrPkf9en9nAIKpIBgmXEV9gpB7Ve9VX9XbrUV1cc9V7Ws11chBeaN7tV7AIC7XN1N1777c2V-a5USy117aNN-ceef97Oa-Wzy1N-17WbyMMKSCKrs10WV-Ws978V-5-D5-s-7VcgmfMopCSppIA7XV--1-2bs717V15--a52aN-X1-cVN-X-V-ts-0V0VOV1OaOa1-2WV-sOV--7OV-V--VX-7--7-0yN7--7-X1OWa--1-0WVT--9N7OV--1-NN---V-17V-15Us--V--15NN7----VX1N7---X71--17eX7X7XX1VcX9XXcX9999A77eVeX9A17X9cX7X7X9cX7V7VV---717cV1717X717X-X7X71177X-X71N19--97X-X7-X7c-91X-X-7X7g7XVeX7Ws-177-17-5Oa5NOsOa5OaOV1XmX7eVcOV-95--5-sUWVNT5N--0WWtztaTT6WaOV7-0aOaOzza0aN0a--7VOV7s-s--6V-X---17X1Vc118V5OV7eX7XcXemnCCBfBnBoprSp9gn9cV17ee-9eee7eV4kDJ_aeiwn-FJ-u28mgpMSzsN-XeV5Fop6aeecBBk-F1t5Zdn9xxrs-9-O9QZyeevz-G3G-YcmK6CIIrUrrSrrrqOa9-X9X7X9cV1_beTuOPOPfznwwC3-4-Jh78rBeejprrSrNN--7-T5ITPw30U8E3BgonBzrtWzzaNVeeV8t9XtaOdOyzBwnEBKK-AmPDvCxrr-7X7ByJT4OdKaTizEydLQi_G48_OUdOvEvyuv-zyevvnzyBFzjvyBnzzznE0KKJJJK43JJG3JF0GKK-2BiSRpxxpWX7Xc" :
		ap.pG === aA3 + 8 ? fy =
		"DgBy1vR-AV60YBnopk-O_9DCIs4rUUrSSMUrSrSSSMKzypKSSMRpKMSrUKMSpKSSrUrSKIKSueXgnCKBgme9XenIKKMBpSKpKMMxpLppKKpnBoopKMMMMKpMKKKKrSzzza55ObzzUUSxppppCCSSpSSrRopSrrSSSppMMSSrKSzUtpxrxxphSMUMUSrrUzzaOtbaOtbbbaOzWWaN5Os6yN-ee117eme97cX--1117XmmccVaN1-Xy-XD-NT-6sDOa0y-cWtzrrKrrSpptWSxs1W_rMUMMUTUUzrrrrSrSxKSrKKzKSrMSrxxprUUzUyTOa-N-1-X-7--1-VV1D-EUUaOtSs-SyMzy-Xe1XXe999XcefCIKKUUn7X7eXee8aOV11UUUa-X7X0Ss1N1mVcf9ecekgk1AJmnABgn99mn9hIJhKKMB7797ee17y17V79Ve79nFX8s19nAIKI1n9pMKKT5Jp-hFgV1goV1nIF-hB-1kOsN56rSpppMtVX-77c7a5N-D550V-ObbaTTN-OVa----N--7s50y0VTNN-9maOzV17cVeepABnBpKKCBnBoopIKMMS9pKKKKKKIBWV-D-XemgpKBe9gm9eOzbyOa5OWV15NN7-N--V5-OV55-50aOaOa----99e77X9e770V1OVX-ccefABn997Xc77VccgceXegfBnH7cegcVX9ecD-VV-7-XV7Xcs5OaUT155-51XD--UtyUy--zWzzUzrbzyMT5OtztyOaOzKpxxIKKKKpIKKSMIKSKKSzztzbyUxtaUaNN5OyKs-6V0WV0_y-SppSICMKMTTTOtQBpSCMSsSrMSzyTMSprSptSUbzzygfKxUaObrMJpTO_pmpUxraTTOtttVUtaSSptzIAK99eXegfKgpCLmpMrUSpz7fKBoohUttrSrUrrSrSAKKUUra4pSzbaNTObaUyUxopBpSrzbaOyN10baSrrpzKpSSUtSzpUs-75N7cc91cXoX7V7Ws1-5TUbaOaOaSySzzzrzzzUtaN0V971A9eenBeee7Xe9cgcfAA9gggnKJgpgeee9eA9mfBgf9geVVX9fB7X6baOTTNNOtaOty52tzVNN9m7Xcce9715N5ObKt_y-8rMbzs90My6_s4raOUxrrpUMrz_rCMUry-eXUzrpySrxyObrztrzUMUttpztrVMrzrMsURhUxpsOpCUbrzqmenMtzmpzb_mfKzpooXX1pBpxSSKpSMSMKKCMKQKnCBmmeXcc71171-V--XpIIKKnIAAIBnCMMCKprzWV7sObKKrKUMsNN5UyMzzrBpztttWVaTObW_xpI99ghKKMxztaUUbzzzMy6vBgnACUtz_yTMrUzbnIMUtttV-UrUSrSSprMSSMyOWVX-18a0a-0yTOa5NOzrrRoonBpSKBpCKCCKSnCCBhBmme7efMSUSzUUaOyT5OaN-0aUxpoopMSzTN99WbV2VVXX9eYV0WaN-V-OtvKKUSzMrs1797VtpzV6rrSSrzBhKCKMSrT-Wa-V0V-X77ca--UzzzyHpMT-yT-7-sOaObbyTTOzUtsUIMSpSRnMzMT0WsTOs97hIBeX-X7tVVtzVc8WWaUonMzbKUsTUbSxrnMUKBoonJnJgpBpBoptaNOttaT5NUxprCUT1-VObbzrUzzyTUzzzy2zSxxxzry-1-Wrbtbs9zbzV9UV19-fa-taTOpUWxMsN716aUKyUps0xzaNN0VOWbaUzSrzaMrzVcX155OVOV0ztby-199f1XOWa-N-TOWa5UaNUaOa5OaUtzxtaN7egYy-VTOaUrnMwnKtzxpzaICTmoomenCKS9e9hSKxzbrSrSKBgpMKrWs-_yTNMbMyTOzrJnHnKxrKpSMKMSpprKSSMU9fBopKKpcfKSMAIKSrUMMpSSrUzVbrMUUTMympKrSrUUzMBnKSKrSxpJpMrUSSpSKS97cXXXXcXXXX9997ccX7c7X7V11171N-V-VVX1-71117-7-X19997V1mopKrSxpMMKpPeVX7hJfKCCKMMMMMKKpprUa6BpepKAK8V1meommnKMPgpAACReonACBopKSIKMMCKKKKKRpKCKJoprUtbbSSUs4MtaT-78sUxzzwpxxpxrKKSSSUSpUSSSSSKKKSKKMKSKJpKKKIKKKJoopBn9mccgpKICAMIKKKrKCJnIIBopMMzxxrrSxxxrSpSMSpKABofBnBn97710VA112V1171mmgn9k7V51-7XecXpAHhAIBooo-X75NN-XeXnBnKIBnCCKBnB9gpKprryU_ppSzyOWVObrzyTShPfIBnCK9hKCCJpKzrzxprSrSSUrxxqeeehUxzUrrABnIBhMzsOxrxSmgpxnMHnHhMnMICHmpMnHhSyMBhLopC9fIMhBnBnCJommmfAA1nBo97c9nMMrFhBgnBehBgfABfIKSx9X17N1emXABf9gmnJepJmhRmopKCMSUSxrMSrrUSxrrxrSrSrMSSMKKppCKKRognBggogeefI9mpxrr9nBggoog7--N-e999fAa-XfJV17s7XA97XcgecWV7eeAJpKKJoopCKBpKKKrTTMMKSxRpKrSzrzxxrStSrUUUSSpLpCMSKMSzMSSRef7Xce7e9X997-cX9-c-777-11197VXX17X7cgc0V0VNN1VOV-1-WVV-77VcV71-V-71--AJVV7XhMCBmfBnC797g-ACI7-Oa--11-Vc-1XVX9979X17V1-VV7cec9oppnBn1gXo71oome-1nHmgfBpKIBgmmcenIBnBnBnAAAIA9mmonI9egoXmggopCMKKKLpQCIBoopKopJcgnIBp9fACJmge7X77VVa-11-V7-VVVX-V72V7-7-VVV11-V7----V---N78V5NN-V6s9XOy1cepgpQIA9f9e7X777VX7UTUbta1eekXX7X0VcX91c--g7-11emXceeXX9ee99ce9g7cX999XXXX99X7XV-5-V7ceeegeX7X977X77-X7XVV-5-1-7--ecD-9hBX99onAMSKIMJpKSpKrMKJhIMKopST-NOaOrRopIBfIMSSMzxzUpzUUaUaUbttyUaOhBpIJppMKprSxrUrrKMKprRnBn9ggnBms9gnICIK99efBomceXgnIBcXceeeXeefBp9emceececeegmeXXeekee9X9Xf9ecee7X7-5N-a-N--NOWVN--V-1-V1--5---711171--550aN5--0V1-V77-55---------N-7XOta6aN1ggnBmnI7VD-VNN--NN1ghKBpKIKKJpKIIKCKKKCKIKKRnBopKKrKSSIJpIIJoopCIJpKUKSMLpSKKIIJpKKMSnKrUSSppKpMSMKpSKrKp9eepUrpSSKpSprrrzzzSrrzzzrUrzxrUzUzUyTSxnICKCACCCBnABnBgnBmnABnCBnBgmnBgmmmgggggf9meemeXggf9mgemmmenAAABmmmmXhA7cgnIIAIBnBmhBnIBnKKSMSpgnCKRnKKMKKpKSprQMQCIKKCKMKCJpKKpMBohRmnABfB-1V9sQR73q09kCIBed989cCHZpMUMMSMSUOxbpy0bbxSraOaOc7TVP29C9Vc0VBecV--7NVV-N8H9w--c9BgrX-BVhQICKrSsV-1VkNB1Dn9choeAEHp9A9eAKKp9fCI9Xme118BgecX7IKKAKrJce70cXXXcXMSppCzSpJxSMKSKSSrk-0xpxxzba-17Oxta56paOsNNTOyTOa--USkWzMUUzs--VWbrxrrVV-d9e7VHsFGFpA9BnCzzII9X97pxS9XHVZoogqUtzqUyUxx50WsTOXmgcOuVOXc0T4CohpochopxzyN7X7NXV-cNWurX-AW_mQ9horyWa--D6JABqN-51WZ4aN79-1XOJ2Oc-58_IBN-i8hrCBfItza-V2Nd5onEIMLOs-X-0se3gprOX1V5NezHrS9eACprpxy0aN7cVV07h4Zpy1V3shEFnKMUrzcVN7I91V-chgRwP--Xvb6V37jO2mfSxrUba79cV3cjXTpJpJOyTOX7gc--1B70i-6Y102KttXe-4Y2-QBrWV-qBklBoptztf9-7-aBzewzzyPee--YGg2-DspvZoeeeXmeA9mgmogn9fSApra0tzWzy6tzzbzztza-e-1YR0fR--PDnihKtVX-SYi0nMS9VecnMSUzxc7UNN5eV4HE3LxHx9HfA9nBxpaX5TUbzUpKDNUKBh9e5BfCMSFT6zUbaOd9V0aP7OZecWV-dYlL2AAIBmcozMopohpzU---NOaOa6X97-LEHZBzbeV07yFszq9V-cz9FrX-4YxwbHc6s-9FJpByV0d0kXnUT7V--FTac-5FvBCV-XGFeBnEUa1-686HMnJmxCIATUpUzV5--57eV2t6dDnABplyUaN1c--GxMc-9HB5gtV38862nCBopa0taT7V0d8AyppN7-1THOURmocpAKpBc9zSMU0aN551-USL---WZbifBogn9ghCUrLTTTOyOWs7e7V08F5moo5-48NGSmzJmVCKK6ls-0V-1_meQFN19MIGBrKKKKopKzWaUbsX7X77-17c-1P80D09ablQKBxrSSMSxzUSpSrSrSprMMUSVVVVV0baXX997XX7ccXVX17X7c-DQ9vBxX-PblGIMMSrMMMkVVOte97eX7-DUDUCL1-0bwmfD-3c-SvC55-NcAPfppppSrSr1117X171-Ju42Zn9gmd9ceceAMSrSppKrSIBfrKCMUUKk-T9mcV5Ua5Ubz6tX--0aOa1X902cKbrCKKJpHpIJnIKBnCCBfBfEryOttVOu5OaTN5OX0a-7--1---cRyM--P9esnVneG9xnBmn9grKKJnIJpKSKMKJporUonHe2IBmmnCBpCKrSrKpppxrSzUzxxrV5-NNNOV-Ws-XV55UrSrxyOc775-7egoe50Wta7X777N--7VOxrSVWtbzUUSqV6bWaN19cVX99gecemd9ec1xdFn2SrJeCpKrMSrKpSKSKIKKIICCI9XKMKCMSII9comomnAABpCIJpBmrTObs0taT5OsNOzaUSKMUtV-0aXX0WxOzaOV0zr1750zrGWX--XVVV-77X7V0VV-117XXXcHX1V39Nu-nKrUUyP7X9XVFeTW0xrI997KBcXBgnCAJpta50aUpIIBnKSzba-0VVUzbqNX1c--dA_c19eGowgggnCSSGWWWbaUsUUUccee705ejHzrzUUyNA9eXeV19fFvonOaTX-Rf_UfKCBeISJxrT-0WbbVNXe--AcyX--Aenu-lfzAABeconJnUP5UrSpKIpxLV0zML5-V7--1X7-2gTJfAOV-AQx3k--sU3c1TvB1BnKCIKIKCpMSGzr-0VN--751-19-0iur2k0FkOrQBgceZgnKKMMKKSJmXxpSSprMs6rJnrUra5NX7-X10X0aOVN-1cV70c16258gfA9fJmnIMKxzyOaOs-NNNX-7lElAMryXe7-042oc-A4AKhN-7gKbcmpIrX6zrxrMzUVeVX-gocVXV-3MmVV-3NpHV4wNq3mmmrUUrMUTP77-X7--lazYV3RQ6imfrrSprs-1X9-7liMQEOxse70E6TIBmZxlxxKOa77VV0I6vXBefKMIM5Ota50cV-RW4Rw-0RW5cnK5--Om5EABpMKBhSxxs17-0V5X--H5H1-9mCaYBoxbaP70emCc2MSIBepJfIIBmVP7mnCIAACCKIlV50bxqUV6zxxpCKprzzaUKa577cWVNUrOtV17V17V7Xcc--HEP1-0mI5IF-0mLgQF-amT1YIBonIIICBgonGaOaNOWVNOWba-02AS3hKIKIJN0V-5--AByfCsV-BqE5k-6CtMgN-0D4wcDzDLQCCCBpIIAAUJmmfBnAAJonCBoomgggfABpAKCJeecme9IBnKKKrMJrSrzUSKpMKpzrtttbxpMbbqOaUwUxObzrrK6aTTTOa5550Vc155ObWaOs9--0WWbtzyNce9cc-Ne7Vcc90zbcV0ztte90byTOXeXeeeVNXeeV0RupTnClV-hngH2CCCCJpKKKppUUtzbta5-V777-X177XV1wx_ZnIKKaN-V-PnvrYCJooerSo-OzuXVTOV71MEjtggeeeggnIAACJoTUzrMUbbttyN-AEykhD--x0GZrsc-2FY2g-4o9gQCSX-CjFseBonHonBf9en9eegf9XfCIBfBpCKMMHhCCKpCKICIpOtzSMMKKIJxUbbs7VN1---VV5ObbxrKCESzUpISy0bbbse1cX5-XVcXeV6y6aTNNNfBmehCCBee19cVV-0a6bzttyUyTUtzwUtttaNNOWV-1oImQL--AGQ0CNV-x5IkxkV0IIIYXm2V7XXeyUta5UV-46fyV0C78BrT7V0S83qnAyP2IoidnCSprrSxrSzrUMSxpMxzUUSSMMMMSzSSrrSprMSpMSSxrSxxxprrrrrUrxrSUUbtaUUL----WX-5N97X9emVP97719ecX-0aNcgmme6a9eX7199e77gecVX7cXXXXXcXX77X7X9egeeXX9-2oitACsV0hAoJnEbsc1EIX0Bgeen9gf9rSaOzzWyUrzqNX9-0CE-XnxVV-4FqeV0SGIunObe-1p622T7-0JRDc-0JfGc-vK0CgggrUzaT19V-CLDDs-6Ku0CV-ALMbENV-COvBk-bLoRjSrR-cX-8pp72IJoOWV--4T3HV-STYBq--hTbPoN-6pzxnBpT0X-5q4TfCGaNV-xXFHpN7-6N_hh--2NfsB-NqBUQHeCCtzSSSzT1cX11-1CZ-NpprX17-7qMXnCMyN7c-IOb-BnaN-0Owzc2fPAlBgggf9fAHoonAABgnCKCbbaT5OWaOaTOtbaTTOaN-0PiN7-MPkJBf6tV-4fLuV-SgO9lV-phLT7tV-4gqNV-4hl5V3xiFwnA9nAROzqOaOXV-SifanVGKwWFOaOV6zzzzUUy6tztbKta56s-WrzzsN-5T4rKpppSKSKKKM-6Sk2RmmeXgeggnTUbxyTUbyOe-OMnm0a50aOV-NNOyNOxtyN-fRZugenzttuc6MRg2gooef9eemeX7XeeeA9Y9BehCIUzrMUzzbrxzttzztzUzrzqUzzbzzzbbzrzzV-9fA9eeX0XeBeeY9e7-DrA8vSzrOtaXeec-0S7u7-rS8wBhCUbttcec-bSGCgnCzaN9-BrL6QBezxyTPXV4hpYLmgfCtzxzSttX9ce-" :
		ap.pG === aA3 + 9 && (fy =
			"EcCx-VQCO1iiqOLOKeeedae_ddadadadOfiveOeLeeeedadaPiuuiePPeeyeeeeOeaPadaeeydPeOedaOPLOeeeOadLOKLKKLJG4G3G4G4G3F-3GJG4G4KKG443G3G3G3G4K3K3K3GKKK3FJ40F33GK0K0K3G3F3F2nBnBnBnB-Bn-04G--BzzwEByvn-wG-BnnB2BkG44K-4KPKQyde_K-G3GKFwGPKO_O_K3J4KG4KKG4KKKJG4KJKK30304LOJG3GKKKKKQvjzuzziviueeaKaKPKKKKKKKKK3K_eOKO_OedaKaLaOevedaOGOeOeeaOaOaOeOjzvjyaPeOKKKOK43K_KKaveJGJ0-JG3G3GF3G3G43KaKF3G4aOedaOFKLK4_eee_dJK33KeaOLOaOjveeKLO_OaOaeKLPeivjeaOeOaJKGKJ4PdadafiyjedLPeueK3F-G30F3G3-3LOaOjeKLPe_O_OeaPfieieeyeaOaPOKOeedeOdada_daOdaKd_O_aOKPOKLKaKdK4LK3LTdaOdKaOK_KLPOaaO_LPKGKKK_KOaLO_aOOaaOdaPOdaO_OaKOdaPOdaPedeOJF--00LaPdeaeOfeyeiuudaueaaPdbeOeuefefuivfifujifieviivifeeid_G-04OF0-03KaPvievjizfeeLJ0-JG-KdOTvfiyviyujffviujeiufeiefivivfivvfeevivveiuueieiefeeiyejffuiuuiviuvfiifiieePeeaieieveuePdaPKJKefefefiuzzvzivviyfvnvjvzEzzjzwzzzBnzwnnk2Bwkn2zzknB-n2BnEBzyzzBzzEwnzznzzzjfzBzwzznziz2zwnBnBBkB--B2EBznEzBwnBnBzzBknEnEByywzzzzzEzz2wnzkzznEBwwEnEnEzznEzzzzzzzzEzwwEEizizizivjvjfznnzyyyvivzzwnyviuizyeyeKbifiuizzvifieeuyviuiuefie_iviiyjzvn3F3Bnw-BnBn2BnBnwnwnwnBkBBk22nEn-EeeieKdeiudaOaOPedaeePeee_KKLPOefzkzEEjzwk2B-k-kBB2yiiuieueeaeeaOOaOvzzzBzvjivjuiuyevieifiedaOeueuivivieuvfyvzvyvvuuvwzzyyvzzvjivvivvjyvznBnn2wzznwoLK-z2BknzEivePPLOOvjBwnEffeuyzefzuuujnkkGG-yzEEzBnEBnnBwnEBnznzzvzzznzvzzEBnzn-k-k-k-2-wB2B-k2-2nBB2kBBwnBw-nB-2Bk22Bw-BkknnBBBBBnBE-znznkkEnE2--kEBknBBkBBk2E-3-2Bk-k2B22BB2k-k-k2BBn-w2-32k-C3F--k-FG0G-22-2-FB--k-2-w-G32En--nB-2kKLePLdFJG3-F0033G043-l3-G3K3JK-32B3G4K4F--B--B--FGLJGJ3F03JLaeKFG--0---BFK--203FGGFG33F2nBFG3FGJ4GJ4K02GKF03-GKKG3K0JFK3G03F--G--l43--Bk--kG-FF3F03G-403G----l0----G--Bn33GJG340JG3-G4KaLKPKG-4-3F3F03-B-------G3FJ00--3KGF--0---03G0032T4mfgmegmeX7fBnJnKIEzzzzbrpzzaObtVOaNX9c9c0JN9cQfjzGG0F4NoWynBpJnKzzzV---Xc1RfMlOOvfvzwEw3GKKF-0gAIV-2OK2-3aoazBjs-pIUdyOaKaKaOfzzvgBnBF---1gInV-4OaA-BexerKESrs-V9V3q6e6dauVn3-0fPHBpMs-c-SiqWQwJ1mtRSUSKKKKKKJOzzxrROc11--TX-X7V7eeV4Meo2avi2kCK--EcNy-OUJfiLKdTzsBk-0kCPrF0fVVRjiveveiueOuveeeeaNn-n22-BG--030303K3F3B6-nnBnBrSr0a---EsTXQudeviviedazk-2-G-030K-4l1tMCkOc-57MIs-E3IhS5P-CYA-DLew--koIyA9emmfACMSrUtbzzzTTObrUtV7ge7X7eeV8QnZxddaebjwnB-30F3xzBZnMKCMzra71-7cV3wA4p_Qzzo4Ffy5yanHpIKSKMKSMSSrKKMofJppMKSKrSpSMKSzrzzrUtaOzsTN1oc5OaUzrHnCTOtaP755N5-T-NUTNN-N-5-5-N-P7X97gn9gmeee9n9meeX97cX7eVeX9cXV"
			), (new oa).oc(fy)
}

function a97() {
	this.pF = null, this.cq = function() {
		var aA4 = [120, 105, 92],
			cos = [12, 12, 60],
			aA5 = [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
			aA6 = [140, 130, 120],
			aA7 = [12, 12, 76],
			aA8 = [240, 120, 1024, 30, 19, 30, 70, 8, 20, 3, 9],
			aA9 = [130, 117, 106],
			aAA = [12, 12, 68],
			aAB = [270, 210, 1024, 28, 19, 33, 50, 8, 26, 3, 9];
		this.pF = new Array(ap.a6v + 1), this.pF[0] = {
			name: "White Arena",
			g5: 230,
			gB: 230,
			jq: 1e3,
			jn: 2e3,
			a99: 173
		}, this.pF[1] = {
			name: "Black Arena",
			g5: 800,
			gB: 800,
			jq: 100,
			jn: 50,
			a99: 43
		}, this.pF[2] = {
			name: "Island",
			g5: 512,
			gB: 512,
			jq: 128,
			jn: 32,
			a99: 0
		}, this.pF[3] = {
			name: "Mountains",
			g5: 960,
			gB: 960,
			jq: 60,
			jn: 8,
			a99: 0
		}, this.pF[4] = {
			name: "Desert",
			g5: 900,
			gB: 900,
			jq: 100,
			jn: 5,
			a99: 0
		}, this.pF[5] = {
			name: "Swamp",
			g5: 1e3,
			gB: 1e3,
			jq: 100,
			jn: 40,
			a99: 0
		}, this.pF[6] = {
			name: "Snow",
			g5: 1e3,
			gB: 1e3,
			jq: 100,
			jn: 20,
			a99: 0
		}, this.pF[7] = {
			name: "Cliffs",
			g5: 1024,
			gB: 1024,
			jq: 128,
			jn: 32,
			a99: 0
		}, this.pF[8] = {
			name: "Pond",
			g5: 820,
			gB: 820,
			jq: 200,
			jn: 100,
			a99: 0
		}, this.pF[9] = {
			name: "Halo",
			g5: 1024,
			gB: 1024,
			jq: 128,
			jn: 32,
			a99: 0
		}, this.pF[10] = {
			name: "Europe",
			pE: aA6,
			pH: aA7,
			a9R: aA8
		}, this.pF[11] = {
			name: "World",
			pE: aA9,
			pH: aAA,
			a9R: aAB
		}, this.pF[12] = {
			name: "Caucasia",
			pE: aA9,
			pH: aAA,
			a9R: aAB
		}, this.pF[13] = {
			name: "Africa",
			pE: aA4,
			pH: cos,
			a9R: aA5
		}, this.pF[14] = {
			name: "Middle East",
			pE: aA4,
			pH: cos,
			a9R: aA5
		}, this.pF[15] = {
			name: "Scandinavia",
			pE: aA6,
			pH: aA7,
			a9R: aA8
		}, this.pF[16] = {
			name: "North America",
			pE: aA6,
			pH: aA7,
			a9R: aA8
		}, this.pF[17] = {
			name: "South America",
			pE: aA4,
			pH: cos,
			a9R: aA5
		}, this.pF[18] = {
			name: "Asia",
			pE: aA9,
			pH: aAA,
			a9R: aAB
		}, this.pF[19] = {
			name: "Australia",
			pE: aA4,
			pH: cos,
			a9R: aA5
		}, this.pF[20] = {}
	}
}

function u2() {
	(pz = void 0 === pz ? document.createElement("canvas") : pz).width = ap.eA, pz.height = ap.eB, u6 = pz.getContext("2d", {
		alpha: !0
	}), u7 = u6.getImageData(0, 0, ap.eA, ap.eB), a19 = u7.data, aY.ou.ov(a19)
}

function bs() {
	var dd, g5, gB, max, aAC, jn, aAE, aAF, aAG, aAH, aAI, aAJ, aAK, aAL, aAD = 1e4;

	function aAT(aAS, jq, eb) {
		var eF;
		for (aAE[0] = aAS, eF = 1; eF < eb; eF++) aAE[eF] = aAE[eF - 1] + jq, jq = aAE[eF] >= aAD ? (aAE[eF] = aAD - 1, -jq) : aAE[eF] < 0 ? (aAE[eF] = 0, -jq) : (jq += 16384 <= aL.random() ? jn : -jn) < -aAC ? -aAC : aAC < jq ? aAC : jq
	}

	function aAV(fK, fL, aAW, eb) {
		(aAW ? function(fK, fL, eb) {
			var eF;
			for (eF = 0; eF < eb; eF++) dd[fL * g5 + fK + eF] = aAE[eF]
		} : function(fK, fL, eb) {
			var eF;
			for (eF = 0; eF < eb; eF++) dd[fL * g5 + fK + eF * g5] = aAE[eF]
		})(fK, fL, eb)
	}

	function aAZ(value, eb) {
		var eF, a8c, fZ, gg = value - aAE[eb - 1];
		if (0 != gg) {
			for (a8c = 1 + eT(Math.abs(gg), eb - 1), a8c = gg < 0 ? -a8c : a8c, aAE[eb - 1] = value, fZ = (fZ = eb - 1 - eT(Math.abs(gg), Math.abs(a8c))) < 1 ? 1 : eb - 2 < fZ ? eb - 2 : fZ, eF = eb - 2; fZ <= eF; eF--) aAE[eF] += gg - (eb - 1 -
				eF) * a8c;
			(gg < 0 ? function(eb) {
				var eF;
				for (eF = eb - 2; 1 <= eF; eF--) aAE[eF] < 0 && (aAE[eF] = -aAE[eF] - 1)
			} : function(eb) {
				var eF;
				for (eF = eb - 2; 1 <= eF; eF--) aAE[eF] >= aAD && (aAE[eF] = 2 * aAD - aAE[eF] - 1)
			})(eb)
		}
	}

	function aAc(aAd, aAe, eb) {
		for (var eF = 0; eF < eb; eF++) aAd[eF] = aAe[eF]
	}

	function aAf(dn) {
		for (var eF = 0; eF < dn.length - 1; eF++) dn[eF] = dn[eF + 1] - dn[eF];
		dn[dn.length - 1] = dn[dn.length - 3]
	}

	function aAg(uT, gap, gf) {
		aAF.push(uT), aAG.push(gap), aAH.push(gf)
	}
	this.d2 = function(aAM) {
		! function(aAM) {
			var eF;
			for (g5 = aAM[0], gB = aAM[1], aAC = aAM[2], jn = aAM[3], dd = new Int16Array(g5 * gB), max = gB < g5 ? g5 : gB, aAE = new Int16Array(max), aAF = [], aAG = [], aAH = [], aAI = new Array(g5), aAJ = new Array(gB), eF = g5 - 1; 0 <=
				eF; eF--) aAI[eF] = !1;
			for (eF = gB - 1; 0 <= eF; eF--) aAJ[eF] = !1;
			aAK = new Int16Array(g5), aAL = new Int16Array(gB)
		}(aAM),
		function(eb) {
			var aAS = aL.random() % aAD,
				jq = aL.random() % (2 * aAC + 1) - aAC;
			aAT(aAS, jq, eb)
		}(max), aAc(aAL, aAE, gB), aAV(0, 0, !0, g5);
		var fK, fL, aAM = dd[0],
			eb = max,
			jq = aL.random() % (2 * aAC + 1) - aAC;
		for (aAT(aAM, jq, eb), aAc(aAK, aAE, g5), aAV(0, 0, !1, gB), aAf(aAK), aAf(aAL), aAT(dd[g5 - 1], aAK[g5 - 1], gB), aAV(g5 - 1, 0, !1, gB), aAT(dd[g5 * (gB - 1)], aAL[gB - 1], g5), aAZ(dd[g5 * gB - 1], g5), aAV(0, gB - 1, !0, g5), aAI[g5 -
				1] = aAI[0] = !0, aAJ[gB - 1] = aAJ[0] = !0, aAg(0, g5, !0), aAg(0, gB, !1), ! function() {
				var aAi, uT;
				for (;;) {
					if (aAi = function() {
							var eF, aAi = aAF.length - 1;
							for (eF = aAi - 1; 0 <= eF; eF--) aAG[eF] > aAG[aAi] && (aAi = eF);
							return aAi
						}(), aAG[aAi] < 5) return;
					uT = aAF[aAi] + eT(aAG[aAi], 2), (aAH[aAi] ? function(fK) {
						var eb, aAl, eF, a2G = 0,
							aAm = 0;
						for (; aAm < gB - 1;) {
							for (eF = a2G + 1; eF < gB; eF++)
								if (aAJ[eF]) {
									aAm = eF;
									break
								} eb = aAm - a2G + 1, aAT(dd[fK + g5 * a2G], 0 === a2G ? aAK[fK] : aAE[aAl - 1] - aAE[aAl - 2], eb), aAZ(dd[aAm * g5 + fK], eb), aAV(fK, a2G, !1, eb), aAl = eb, a2G = aAm
						}
						aAI[fK] = !0
					} : function(fL) {
						var eb, aAl, eF, a2G = 0,
							aAm = 0;
						for (; aAm < g5 - 1;) {
							for (eF = a2G + 1; eF < g5; eF++)
								if (aAI[eF]) {
									aAm = eF;
									break
								} eb = aAm - a2G + 1, aAT(dd[fL * g5 + a2G], 0 === a2G ? aAL[fL] : aAE[aAl - 1] - aAE[aAl - 2], eb), aAZ(dd[fL * g5 + aAm], eb), aAV(a2G, fL, !0, eb), aAl = eb, a2G = aAm
						}
						aAJ[fL] = !0
					})(uT), aAg(uT, aAF[aAi] + aAG[aAi] - uT, aAH[aAi]), aAG[aAi] = uT - aAF[aAi] + 1
				}
			}(), fK = 0; fK < g5; fK++)
			if (!aAI[fK])
				for (fL = 0; fL < gB; fL++) aAJ[fL] || ! function(fK, fL) {
					var value = dd[fL * g5 + fK - 1] + dd[(fL - 1) * g5 + fK],
						wK = 2;
					aAI[fK + 1] && (wK++, value += dd[fL * g5 + fK + 1]);
					aAJ[fL + 1] && (wK++, value += dd[(fL + 1) * g5 + fK]);
					dd[fL * g5 + fK] = eT(value, wK)
				}(fK, fL)
	}, this.a9T = function() {
		return dd
	}, this.a9E = function() {
		dd = null
	}
}

function eT(ha, hj) {
	return Math.floor(ha / hj + 1 / (2 * hj))
}

function a5k(ha, hj) {
	return 0 <= ha ? eT(ha, hj) : -eT(-ha, hj)
}

function i0(dd) {
	return dd * dd
}

function vY(ha, hj) {
	return hj < ha ? ha : hj
}

function xt(ha, hj) {
	return ha < hj ? ha : hj
}

function yK(ha, dd, hj) {
	return dd < ha ? ha : hj < dd ? hj : dd
}

function aAo(dd, eb) {
	for (var iM = eT(dd + 1, 2), eF = 0; eF < eb; eF++) iM = eT(iM + eT(dd, iM), 2);
	return iM
}

function a7Q(dd, eb) {
	return dd < 1 ? 0 : aAo(dd, eb)
}

function aAp(jc, jd, q6, wl, je, jf, q7, a4d) {
	return !(jc + q6 <= je || jd + wl <= jf || je + q7 <= jc || jf + a4d <= jd)
}

function aAq(jc, jd, q6, wl, je, jf, q7, a4d) {
	return jc <= je && jd <= jf && je + q7 <= jc + q6 && jf + a4d <= jd + wl
}

function ol(dd) {
	return Math.floor(!!dd * (1 + Math.log2(dd + .5)))
}

function bH() {
	this.fG = function(ha, hj) {
		return Math.floor((ha + .5) / hj)
	}, this.aAr = function(ha, hj) {
		return Math.floor(ha * (hj + .5))
	}, this.sqrt = function(dd) {
		return ~~Math.sqrt(dd + .5)
	}, this.pow = function(dD) {
		return Math.floor(Math.pow(2, dD) + .5)
	}, this.lQ = function(value, min, max) {
		return Math.min(Math.max(value, min), max)
	}, this.aAs = function(dp, dr, dt) {
		return Math.max(Math.min(dp, dr), dt)
	}, this.aAt = function(aAu, aAv, fK, fL) {
		fK -= aAu, aAu = fL - aAv, fL = 0;
		return 0 == fK ? fL = 0 <= aAu ? Math.PI : 0 : (fL = Math.atan(aAu / fK), fL += 0 < fK ? .5 * Math.PI : 1.5 * Math.PI), fL
	}, this.log2 = function(dd) {
		return Math.floor(!!dd * (1 + Math.log2(dd + .5)))
	}
}

function cV() {
	var aAw = "",
		map = new Map;
	this.v2 = function() {
		this.aAx("MenuStart") || (map.set(aAw, new aAy), this.show())
	}, this.oO = function() {
		this.aAx("MenuSettings") || this.aAz(new aB0)
	}, this.yJ = function(aB1 = "") {
		this.np(), aAw = "MenuReplay", this.show(aB1) || (map.set(aAw, new aB2), this.show(aB1))
	}, this.ry = function(title = aV.nU[64], message = aV.nU[63]) {
		aAw = "MenuError", map.set(aAw, new aB3("⚠️ " + title, message, !0)), this.show()
	}, this.ro = function() {
		aAw = "MenuReload", map.set(aAw, new aB3("🚀 " + aV.nU[122], aV.nU[123], !0, [new nG("❌ " + aV.nU[92], function() {
			ar.oN()
		}, aZ.l7), new nG("🔄 " + aV.nU[124], function() {
			b7.cv.rf()
		}, aZ.kt)])), this.show()
	}, this.aAx = function(name) {
		return this.np(), aAw = name, !!this.show()
	}, this.aAz = function(aB4) {
		map.set(aAw, aB4), this.show()
	}, this.show = function(aB5) {
		var oe = map.get(aAw);
		return !!oe && (oe.show(aB5), !0)
	}, this.oN = function() {
		this.np(), map.clear()
	}, this.np = function() {
		var oe = map.get(aAw);
		oe && oe.np(), aAw = ""
	}, this.resize = function() {
		var oe = map.get(aAw);
		oe && oe.resize()
	}, this.si = function(dD) {
		var oe = map.get(aAw),
			iM = 0;
		return "Enter" === dD.key ? iM = 1 : "Escape" === dD.key && (iM = 2), !!oe && (iM && oe.si(iM), !0)
	}, this.i7 = function() {
		var oe;
		0 !== map.size && (oe = map.get(aAw)) && oe.i7 && oe.i7()
	}, this.dZ = function() {
		return 0 < aAw.length
	}
}

function aB3(title, nY, aB6 = !1, aB7 = [new nG("❌ " + aV.nU[92], function() {
	ar.oN()
}, aZ.l7)]) {
	var aB8, aB9;
	this.show = function() {
		aB8.show(), this.resize()
	}, this.np = function() {
		aB8.np()
	}, this.resize = function() {
		aB8.resize(), aB9.resize()
	}, this.si = function(iM) {
		2 === iM && aB7[0].nJ()
	}, aB8 = new nf(title, aB7), aB9 = new nX(aB8.nl, nY), aB6 && aY.g0.textAlign(aB8.nl.style, 1)
}

function aB2() {
	var aB8, nu;

	function aBA() {
		var fy = aX.aBF(nu.nz());
		ar.oN(), (0 < fy.length && fy === aX.mX.aBC || aX.aBH.oc(fy)) && aX.aBG()
	}
	this.show = function(aB1) {
		! function(aB1) {
			0 === qw ? nu.nx(aB1) : (aX.mX.aBC.length && (fN || 1 !== qw) || (aX.mX.aBC = aX.aBD.qZ()), nu.nx(aX.aBE(aX.mX.aBC)))
		}(aB1), aB8.show(), this.resize()
	}, this.np = function() {
		aB8.np()
	}, this.resize = function() {
		aB8.resize(), nu.resize()
	}, this.si = function(iM) {
		1 === iM ? aBA() : ar.v2()
	}, aB8 = new nf("▶️ " + aV.nU[82], [new nG("❌ " + aV.nU[92], function() {
		ar.v2()
	}, aZ.l7), new nG("🔲 " + aV.nU[93], function() {
		nu.o0()
	}), new nG("📋 " + aV.nU[94], function() {
		nu.o1()
	}), new nG("🗑️ " + aV.nU[95], function() {
		nu.clear()
	}), new nG("▶️ " + aV.nU[96], function() {
		aBA()
	}, aZ.kx)]), nu = new nt, aB8.nl.appendChild(nu.nv)
}

function aB0() {
	var aB8, aBI, n4, aBJ, aBL;
	this.show = function() {
			aB8.show(), this.resize()
		}, this.np = function() {
			aB8.np()
		}, this.resize = function() {
			aB8.resize(), aB8.nl.style.lineHeight = "1.5em", aBI.resize()
		}, this.si = function(iM) {
			1 === iM ? aBJ.dD.blur() : ar.v2()
		}, aB8 = new nf("⚙️ " + aV.nU[81], [new nG("💾 " + aV.nU[97], function() {
			ar.v2()
		}, aZ.kt), new nG("🔄 " + aV.nU[98], function() {
			ar.oN(), b9.nV.oR(), ar.oO()
		})]), n4 = [], (aBL = new ms).mu(aV.nU[99]), aBL.mv(aV.nU[100]), n4.push(aBL), (aBL = new ms).mu(b9.dF.data[0].title), aBL.mx(new nb(b9.dF.data[0])), n4.push(aBL), (aBL = new ms).mu(b9.dF.data[10].title), aBL.mx(new nb(b9.dF.data[10])), n4
		.push(aBL), (aBL = new ms).mu(b9.dF.data[1].title), aBL.mx(new nb(b9.dF.data[1])), n4.push(aBL), (aBL = new ms).mu(b9.dF.data[9].title), aBL.mx(new nb(b9.dF.data[9])), n4.push(aBL), (aBL = new ms).mu(b9.dF.data[11].title), aBL.mx(new nb(b9.dF
			.data[11])), n4.push(aBL), (aBL = new ms).mu(b9.dF.data[2].title), aBL.n0(new nS(b9.dF.data[2])), n4.push(aBL), (aBL = new ms).mu(b9.dF.data[6].title), aBL.n0(new nS(b9.dF.data[6])), n4.push(aBL), (aBL = new ms).mu(b9.dF.data[7].title),
		aBL.n0(new nS(b9.dF.data[7])), n4.push(aBL), (aBL = new ms).mu(b9.dF.data[8].title), aBL.n0(new nS(b9.dF.data[8])), n4.push(aBL), (aBL = new ms).mu(b9.dF.data[5].title), aBJ = new na(b9.dF.data[5]), aBL.n0(aBJ), n4.push(aBL), aBI = new n2(aB8
			.nl, n4)
}

function aAy() {
	var aB8, aBM, aBO, ng, aBN = !1;
	this.show = function() {
		aB8.show(), this.resize(), this.i7()
	}, this.np = function() {
		aB8.np()
	}, this.resize = function() {
		aB8.resize(), aBM.resize()
	}, this.si = function(iM) {
		2 === iM && ar.oN()
	}, this.i7 = function() {
		!aBN || j.v6(eW) || (ar.oN(), ar.v2())
	}, aBO = [new nG("⚙️ " + aV.nU[81], function() {
		ar.oO()
	}), new nG("▶️ " + aV.nU[82], function() {
		ar.yJ()
	}), new nG("🔗 " + aV.nU[83], function() {
		ar.aAx("MenuLinks") || ar.aAz(new aB3("🔗 " + aV.nU[83], aY.g0.tF(["Android App", "iOS App", "Discord", "Changelog", "Clans", "Clan Results", "Players", "Tutorial", "Terms", "Privacy"], [ah.a22, ah.a23, ah.a25, ah.aBS, ah.aBT, ah
			.aBU, ah.aBV, ah.aBW, ah.aBX, ah.aBY
		]), !1, [new nG("❌ " + aV.nU[92], function() {
			ar.v2()
		}, aZ.l7)]))
	}), new nG("ℹ️ " + aV.nU[84], function() {
		ar.aAx("MenuGameVersion") || ar.aAz(new aB3("ℹ️ " + aV.nU[84], d7 + "<br><b>" + "FX Client v" + fx_version + " " + fx_update + "</b><br><a href='" + ah.aBS + "' target='_blank'>" + ah.aBS + "</a>", !0, [new nG("❌ " + aV.nU[92],
			function() {
				ar.v2()
			}, aZ.l7)]))
	}), new nG("🗑️ " + aV.nU[85], function() {
		b7.cv.rU()
	}), new nG(aV.nU[86], function() {
		b7.cv.rV()
	})], ng = [new nG("❌ " + aV.nU[87], function() {
		ar.oN()
	}, aZ.l7)], 8 === x.dY() && aBO.unshift(new nG("📈 " + aV.nU[88], function() {
		ar.oN(), 2 <= b1.aBR && (b2.sl(), b3.d1 = !0)
	})), 8 === x.dY() && !fN && j.v6(eW) && (aBN = !0, aBO.unshift(new nG("🏳️ " + aV.nU[89], function() {
		aW.fd.lt(), ar.oN(), j.fO && j.sl()
	}))), 1 === b7.id && 5 <= b7.de && aBO.push(new nG(aV.nU[90], function() {
		b7.cv.rW()
	})), aB8 = new nf("📙 " + aV.nU[91], ng), aBM = new nL(aBO, aB8.nl)
}

function bG() {
	"function" != typeof Math.log2 && (Math.log2 = function(fK) {
		return Math.log(fK) / Math.log(2)
	}), "function" != typeof Math.log10 && (Math.log10 = function(fK) {
		return Math.log(fK) / Math.log(10)
	}), "function" != typeof Math.sign && (Math.sign = function(fK) {
		return 0 < fK ? 1 : fK < 0 ? -1 : 0
	})
}

function bt() {
	var yx, aBa, aBb, aBc, aBZ = !1;

	function aBd() {
		aBZ = !0, yx = -1, aBa = new Array(4);
		for (var eF = 3; 0 <= eF; eF--) aBa[eF] = !1;
		var aBe = Math.floor(1 + .02 * aK.min);
		aBb = new Array(4), (aBc = new Array(4))[1] = aBc[3] = aBb[0] = aBb[2] = 0, aBc[0] = aBb[3] = -aBe, aBb[1] = aBc[2] = aBe
	}

	function aBf() {
		if (-1 !== yx)
			if (0 !== qw && f.kM()) {
				for (var aBg = !1, eF = 3; 0 <= eF; eF--) aBa[eF] && (aBg = !0, h7 += aBb[eF], h9 += aBc[eF], a6.sA(aBb[eF], aBc[eF]), p.yf());
				aBg ? b3.d1 = !0 : aB.kD()
			} else aB.kD()
	}
	this.sn = function(fz) {
		0 !== qw && f.kM() && (aBZ || aBd(), aBa[fz] = !0, -1 === yx) && (yx = setInterval(aBf, 20), aBf())
	}, this.sj = function(fz) {
		if (0 !== qw && (aBZ || aBd(), aBa[fz] = !1, -1 !== yx)) {
			for (var aBg = !1, eF = 3; 0 <= eF; eF--) aBg = aBg || aBa[eF];
			aBg || this.kD()
		}
	}, this.kD = function() {
		if (aBZ && -1 !== yx) {
			for (var eF = 3; 0 <= eF; eF--) aBa[eF] = !1;
			clearInterval(yx), yx = -1
		}
	}
}

function bu() {
	this.ix = new aBh, this.vo = new aBi, this.lY = new aBj, this.a4B = new aBk, this.cq = function() {
		this.ix.cq()
	}
}

function aBk() {
	var aBl = [];
	this.aBm = function(rm) {
		var eF, ha, a46, rH, aBn, aBo, a3d, aBp, aBq, aBr, aBv, aBw;
		if (rm !== aN.ix.rq) aN.ix.close(rm, 3239);
		else if (6 === x.dY() && (b8.a3k.a3l(), aBl = [], aG.cq()), 7 !== x.dY()) aN.ix.close(rm, 3251);
		else {
			for (a3d = [0, 0, 0, 0], aBp = ad.mJ(6), eF = 0; eF < 4; eF++) a3d[eF] = ad.mJ(aBp);
			for (aBq = ad.mJ(4), aBr = [], eF = 0; eF < aBq; eF++) {
				for (aBr.push({
						id: ad.mJ(5),
						tv: ad.mJ(4),
						a41: 1 === ad.mJ(1),
						pG: ad.mJ(6),
						a3z: ad.mJ(14),
						a44: ad.mJ(aBp),
						a45: ad.mJ(9) + 1,
						a2q: ad.mJ(10)
					}), a46 = ad.mJ(3), rH = new Array(a46), ha = 0; ha < a46; ha++) aBn = ad.mJ(9) + 1, aBo = ad.aBs(ad.mJ(3)), rH[ha] = ("" === aBo ? "other: " : "[" + aBo + "]: ") + aBn;
				aBr[eF].a46 = a46, aBr[eF].rH = rH
			}
			rm = ad.mJ(16), aBv = ad.mJ(20), aBw = ad.mJ(12), 0 !== rm && (b8.a3k.ii ? aBl.push({
				aBu: rm,
				aBv: aBv,
				aBw: aBw
			}) : b8.a3k.cq(rm, aBv, aBw)), aG.nW(a3d, aBr)
		}
	}, this.a4C = function(a40) {
		var aBx;
		return !!b8.a3k.ii && (aBx = b8.a3k.aBy(), ab.d2(34), ab.oZ(1, 0), ab.oZ(3, 2), ab.oZ(4, a40), ab.oZ(16, aBx[0]), ab.oZ(10, aBx[1]), aN.ix.send(aN.ix.rq, ab.mI), 0 !== aBl.length && (b8.a3k.cq(aBl[0].aBu, aBl[0].aBv, aBl[0].aBw), aBl
			.shift()), !0)
	}
}

function aBh() {
	var aBz, aC1;
	this.a3J = 5, this.a3K = this.a3J - 1, this.a2i = this.a3J + this.a3K, this.a2h = [0, 1, 5, 2, 6, 3, 7, 4, 8], this.aC0 = null;

	function dO(eF) {
		return aC1[eF].aBZ && aBz[eF].dO()
	}

	function aC8(rm) {
		aC1[rm].da = b3.da, aC1[rm].aC3 = !1
	}
	this.rr = 0, this.rq = 0, this.cq = function() {
		this.aC0 = new Array(this.a3J);
		this.aC0[0] = "territorial.io";
		var eF, a99 = aL.a8m(0);
		for (aL.u0(0), eF = 1; eF < this.a3J; eF++) this.aC0[eF] = h.qf() + ".territorial.io";
		for (aL.u0(a99), aBz = new Array(this.a2i), aC1 = new Array(this.a2i), eF = this.a2i - 1; 0 <= eF; eF--) aC1[eF] = {
			aBZ: !1,
			da: 0,
			aC3: !1
		}
	}, this.vu = function() {
		return this.rq < this.a3J ? this.rq : this.rq - this.a3K
	}, this.i7 = function() {
		for (var eF = this.a2i - 1; 0 <= eF; eF--) this.a2d(eF) && b3.da > aC1[eF].da + 15e3 && aN.lY.aC4(eF, aC1[eF].aC3)
	}, this.z2 = function(rm, aC5) {
		if (aC1[rm].aBZ) {
			if (aBz[rm].dO()) return aBz[rm].aC7(aC5), aBz[rm].a2d();
			aBz[rm].np()
		}
		return this.aC6(rm, aC5), !1
	}, this.aC6 = function(rm, aC5) {
		aC1[rm].aBZ = !0, aC8(rm), aBz[rm] = new aC9, aBz[rm].cq(rm, aC5)
	}, this.aC7 = function(rm, aC5) {
		dO(rm) && aBz[rm].aC7(aC5)
	}, this.aCA = function(rm, aC5) {
		0 === aC5 ? q.z4() : aC5 < 3 ? aN.lY.a1a(rm, aC5 - 1) : 3 === aC5 ? aN.lY.a4V(rm) : 4 === aC5 ? w.z4(rm) : 5 === aC5 ? rm === this.rr && aN.lY.aCB() : 6 !== aC5 && 7 === aC5 && aN.lY.a4z(rm)
	}, this.a2d = function(eF) {
		return aC1[eF].aBZ && aBz[eF].a2d()
	}, this.send = function(rm, mI) {
		aC8(rm), aBz[rm].send(mI)
	}, this.sR = function(rm) {
		aC1[rm].aC3 = !0
	}, this.close = function(rm, aCC) {
		dO(rm) && aBz[rm].close(aCC)
	}, this.aCD = function(rm, aCC) {
		bB.rw(aCC), dO(rm) && aBz[rm].close(aCC)
	}, this.s1 = function(aCC) {
		for (var eF = this.a2i - 1; 0 <= eF; eF--) this.close(eF, aCC)
	}, this.aCE = function(rm, aCC) {
		for (var eF = this.a2i - 1; 0 <= eF; eF--) eF !== rm && this.close(eF, aCC)
	}, this.aCF = function(rm, dD) {
		aBz[rm].np(), bB.rl(rm, dD.code)
	}
}

function aBi() {
	this.aCG = function(rm, mI) {
		ad.cq(mI), 0 === ad.size ? aN.ix.aCD(rm, 3205) : (0 === (mI = ad.mJ(1)) ? function(rm) {
			var aCL = ad.mJ(2);
			0 === aCL ? (0 === ad.mJ(1) ? function(rm) {
				var eF;
				if (0 === rm && 8 !== x.dY() && !(ad.size < 4)) {
					aw.fx(0, ad.aBs(ad.mJ(5))), aw.fx(1, "[" + ad.aBs(ad.mJ(3)) + "]");
					var aCO = ad.mJ(12),
						aCP = ad.mJ(6),
						dn = new Array(aCO);
					for (eF = 0; eF < aCO; eF++) dn[eF] = ad.mJ(aCP);
					q.z6(dn)
				}
			} : function(rm) {
				var eF;
				if (8 !== x.dY())
					if (ad.size < 3) aN.ix.aCD(rm, 3208);
					else {
						var aCQ, qE, rm = ad.mJ(1),
							position = ad.mJ(16),
							wK = ad.mJ(4),
							dn = [];
						for (eF = 0; eF < wK; eF++) qE = ad.mJ(14), aCQ = ad.mJ(5), aCQ = ad.aBs(aCQ), dn.push({
							name: aCQ,
							qE: qE
						});
						0 === rm ? b6.a1c(0, dn, 10, 1, .36, .55, position) : b6.a1c(1, dn, 100, 2, .47, .5, position)
					}
			})(rm) : 1 === aCL ? aN.a4B.aBm(rm) : 2 !== aCL && 3 !== aCL || aJ.cq()
		}(rm) : 1 === mI && function(rm) {
			if (8 !== x.dY() && !aJ.a3L()) return;
			if (rm !== aN.ix.rr) aN.ix.aCD(rm, 3244);
			else if (0 === ad.mJ(1)) b3.r2.aCV(ad.mI);
			else {
				var eF, lY, ln, rm = ad.mJ(2);
				if (0 === rm) 3 !== ad.size ? aN.ix.aCD(aN.ix.rr, 3230) : (lY = ad.mJ(9), ln = ad.mJ(7), 0 !== h3[lY] && 0 !== h3[eW] && (ln %= az.mp, k.lm(lY, eW, ln), a6.mq(lY, 1, ln)));
				else if (1 === rm) ! function() {
					var lY;
					2 !== ad.size ? aN.ix.aCD(aN.ix.rr, 3235) : (lY = ad.mJ(9), 0 !== h3[lY] && 0 !== h3[eW] && aS.a8t(0, [lY], !0) && k.m4(lY, 1))
				}();
				else if (2 === rm) ! function() {
					var lY, target;
					3 !== ad.size ? aN.ix.aCD(aN.ix.rr, 3236) : (lY = ad.mJ(9), target = ad.mJ(9), 0 !== h3[lY] && 0 !== h3[target] && 0 !== h3[eW] && aS.a8t(1, [lY], !0) && (a6.mq(lY, 3, 96), a6.mq(target, 4, 96), k.vv(lY, target)))
				}();
				else if (d9 && !dB) {
					var eb = 720;
					for (ab.d2(14404), ab.oZ(1, 0), ab.oZ(3, 4), eb = Math.min(aW.lV.mM.length, 720), eF = 0; eF < eb; eF++) ab.oZ(20, aW.lV.mM[eF]);
					aN.ix.send(aN.ix.rr, ab.mI)
				}
			}
		}(rm), b3.aCK())
	}, this.a3M = function(mI) {
		if (ad.cq(mI), ad.fz = 1, 2 === ad.mJ(2)) {
			ad.fz += 20;
			for (var a4a, a4Z, name, mI = ad.mJ(9), tt = ad.mJ(14), tv = ad.mJ(4), a41 = 1 === ad.mJ(1), a42 = ad.mJ(6), a43 = ad.mJ(14), aCU = ad.mJ(9) + 1, qA = [], eF = 0; eF < aCU; eF++) a4a = ad.mJ(1), a4Z = [ad.mJ(6), ad.mJ(6), ad.mJ(6)],
				name = ad.aBs(ad.mJ(5)), qA.push({
					name: name,
					a4Z: a4Z,
					a4a: a4a
				});
			x.a2v(), ap.d2(a42, a43), 1 === qA.length && z.a4N(tv), ts(tt, mI, qA, tv, a41, !1)
		} else ! function() {
			ad.fz += 20;
			for (var a4a, a4Z, qE, name, a3D = ad.mJ(1), tt = ad.mJ(14), tv = ad.mJ(4), a41 = 1 === ad.mJ(1), a42 = ad.mJ(6), a43 = ad.mJ(14), qA = [], eF = 0; eF < 2; eF++) a4a = ad.mJ(1), a4Z = [ad.mJ(6), ad.mJ(6), ad.mJ(6)], qE = ad.mJ(
				14), name = ad.aBs(ad.mJ(5)), qA.push({
					name: name,
					a4Z: a4Z,
					qE: qE,
					a4a: a4a
				});
			x.a2v(), ap.d2(a42, a43), ts(tt, a3D, qA, tv, a41, !1)
		}()
	}, this.a3H = function() {
		ad.fz = 1;
		var aCL = ad.mJ(2),
			aCT = ad.mJ(10);
		return aN.ix.rq > aN.ix.a3K && (aCT += aN.ix.a3K), aN.ix.rq === aCT ? (aN.ix.rr = aCT, !1) : (aN.ix.close(aN.ix.rq, 3247), aN.ix.rr = aCT, aJ.a3C = ad.mJ(10), aJ.a3D = ad.mJ(2 === aCL ? 9 : 1), aN.ix.z2(aCT, 5) && aN.lY.aCB(), !0)
	}
}

function aBj() {
	function aCc() {
		var rb = b7.cv.rZ(),
			aCf = Math.floor(rb / 16777216);
		ab.oZ(24, aCf), ab.oZ(24, rb - 16777216 * aCf)
	}

	function aCd() {
		ab.oZ(14, d6), ab.oZ(4, 2 === b7.id ? 2 : 12 <= b7.de ? 1 : 0 < b7.de ? 3 : 0), ab.oZ(1, d9 ? 1 : 0), ab.oZ(1, dB ? 1 : 0), ab.oZ(5, (new Date).getHours() % 24)
	}
	this.z5 = function() {
		ab.d2(18), ab.oZ(1, 0), ab.oZ(3, 0), ab.oZ(14, d6), aN.ix.send(0, ab.mI)
	}, this.a2j = function(rm) {
		var dn = h.qZ(a0.a4Y()),
			vw = dn.length,
			aCe = (ab.d2(155 + 10 * vw), ab.oZ(1, 0), ab.oZ(3, 1), ab.oZ(10, dA), aCe = Math.floor((new Date).getTime() / 36e5) - b9.dF.data[181].value, ab.oZ(30, b9.dF.data[180].value), ab.oZ(20, ai.lQ(aCe, 0, 1048575)), a8.v9[2].qr.a2Q());
		ab.oZ(6, aCe[0]), ab.oZ(6, aCe[1]), ab.oZ(6, aCe[2]), aCc(), aCd();
		for (var eF = 0; eF < vw; eF++) ab.oZ(10, dn[eF]);
		aN.ix.rq = rm, aN.ix.send(rm, ab.mI)
	}, this.a1a = function(rm, id) {
		ab.d2(38), ab.oZ(1, 0), ab.oZ(3, 7), ab.oZ(3, 0), ab.oZ(14, d6), ab.oZ(1, id), ab.oZ(16, Math.abs(4096 + b6.position[id] + b6.a1Z[id]) % 65536), aN.ix.send(rm, ab.mI)
	}, this.a4z = function(rm) {
		var eF, dD;
		if (!(a0.a4o + 7e3 > b3.da)) {
			for (a0.a4o = b3.da, ab.d2(136), ab.oZ(1, 0), ab.oZ(3, 7), ab.oZ(3, 2), aCc(), dD = vY(a0.a4n.length - 20, 0), eF = a0.a4n.length - 1; dD <= eF; eF--) ab.oZ(4, Math.abs(a0.a4n.charCodeAt(eF) - 48) % 10);
			aN.ix.send(rm, ab.mI)
		}
	}, this.aC4 = function(rm, aC3) {
		ab.d2(13), ab.oZ(1, 0), ab.oZ(3, 5), ab.oZ(9, aC3 ? 1 : 0), aN.ix.send(rm, ab.mI)
	}, this.aCB = function() {
		ab.d2(55), ab.oZ(1, 0), ab.oZ(3, 6), ab.oZ(8, aN.ix.vu()), ab.oZ(10, aJ.a3C), ab.oZ(9, aJ.a3D), ab.oZ(10, dA), ab.oZ(14, d6), aN.ix.send(aN.ix.rr, ab.mI)
	}, this.lZ = function(fX) {
		ab.d2(27), ab.oZ(1, 1), ab.oZ(4, 0), ab.oZ(22, fX), aN.ix.send(aN.ix.rr, ab.mI)
	}, this.lb = function(h6, hT) {
		ab.d2(25), ab.oZ(1, 1), ab.oZ(4, 1), ab.oZ(10, h6), ab.oZ(10, hT), aN.ix.send(aN.ix.rr, ab.mI)
	}, this.lf = function(h6, ld) {
		ab.d2(24), ab.oZ(1, 1), ab.oZ(4, 2), ab.oZ(10, h6), ab.oZ(9, ld), aN.ix.send(aN.ix.rr, ab.mI)
	}, this.lg = function(h6, fX) {
		ab.d2(37), ab.oZ(1, 1), ab.oZ(4, 3), ab.oZ(10, h6), ab.oZ(22, fX), aN.ix.send(aN.ix.rr, ab.mI)
	}, this.lj = function(lh, fX) {
		ab.d2(37), ab.oZ(1, 1), ab.oZ(4, 4), ab.oZ(10, lh), ab.oZ(22, fX), aN.ix.send(aN.ix.rr, ab.mI)
	}, this.ll = function(hT) {
		ab.d2(15), ab.oZ(1, 1), ab.oZ(4, 5), ab.oZ(10, hT), aN.ix.send(aN.ix.rr, ab.mI)
	}, this.lp = function(fz) {
		ab.d2(12), ab.oZ(1, 1), ab.oZ(4, 6), ab.oZ(7, fz), aN.ix.send(aN.ix.rr, ab.mI)
	}, this.ls = function(lr) {
		ab.d2(6), ab.oZ(1, 1), ab.oZ(4, 7), ab.oZ(1, lr), aN.ix.send(aN.ix.rr, ab.mI)
	}, this.lu = function() {
		ab.d2(5), ab.oZ(1, 1), ab.oZ(4, 8), aN.ix.send(aN.ix.rr, ab.mI)
	}, this.mC = function(a69, mB) {
		ab.d2(29), ab.oZ(1, 1), ab.oZ(4, 10), ab.oZ(12, a69), ab.oZ(2, 0), ab.oZ(10, mB), aN.ix.send(aN.ix.rr, ab.mI)
	}, this.mF = function(a69, p4, p5, aCg) {
		ab.d2(46), ab.oZ(1, 1), ab.oZ(4, 10), ab.oZ(12, a69), ab.oZ(2, 1), ab.oZ(9, p4), ab.oZ(9, p5), ab.oZ(9, aCg), aN.ix.send(aN.ix.rr, ab.mI)
	}, this.mH = function(a69) {
		var eF, r7 = ao.iy.r7;
		for (ab.d2(47 + 33 * r7.length), ab.oZ(1, 1), ab.oZ(4, 10), ab.oZ(12, a69), ab.oZ(2, 2), ab.oZ(24, ao.iy.r6), ab.oZ(4, r7.length), eF = 0; eF < r7.length; eF++) ab.oZ(9, r7[eF].player), ab.oZ(24, r7[eF].rJ);
		aN.ix.send(aN.ix.rr, ab.mI)
	}, this.m2 = function(aCh, aCi) {
		ab.d2(21), ab.oZ(1, 1), ab.oZ(4, 15), ab.oZ(9, aCi), ab.oZ(7, aCh), aN.ix.send(aN.ix.rr, ab.mI)
	}, this.m5 = function(vo) {
		ab.d2(14), ab.oZ(1, 1), ab.oZ(4, 14), ab.oZ(9, vo), aN.ix.send(aN.ix.rr, ab.mI)
	}, this.m9 = function(aCj, target) {
		var eF, eb = aCj.length;
		for (ab.d2(14 + 9 * eb), ab.oZ(1, 1), ab.oZ(4, 13), ab.oZ(9, target), eF = 0; eF < eb; eF++) ab.oZ(9, aCj[eF]);
		aN.ix.send(aN.ix.rr, ab.mI)
	}, this.a4V = function(rm) {
		ab.d2(29), ab.oZ(1, 0), ab.oZ(3, 3), aCd(), aN.ix.send(rm, ab.mI)
	}
}

function aC9() {
	var rm, aC5, rh, aCk = ["wss://", "/s50/", "/s51/", "/s52/"];

	function aCo() {}

	function aCA() {
		aN.ix.aCA(rm, aC5)
	}

	function aCq(dD) {
		aN.vo.aCG(rm, new Uint8Array(dD.data))
	}

	function aCr() {}

	function aCF(dD) {
		aN.ix.aCF(rm, dD)
	}
	this.cq = function(fz, aCl) {
		rm = fz, aC5 = aCl;
		fz = aCk[0];
		rm < aN.ix.a3J ? fz += aN.ix.aC0[rm] + aCk[1 + d5] : fz += aN.ix.aC0[0] + "/i" + (1 + d5) + (rm - aN.ix.a3K) + "/", (rh = new WebSocket(fz)).binaryType = "arraybuffer", rh.onopen = aCA, rh.onmessage = aCq, rh.onclose = aCF, rh.onerror =
			aCr
	}, this.aCn = function() {
		return rh.readyState === rh.CONNECTING
	}, this.a2d = function() {
		return rh.readyState === rh.OPEN
	}, this.dO = function() {
		return this.aCn() || this.a2d()
	}, this.aC7 = function(aCl) {
		aC5 = aCl
	}, this.send = function(mI) {
		this.a2d() && rh.send(mI)
	}, this.close = function(aCC) {
		this.dO() && (rh.close(aCC), this.np())
	}, this.np = function() {
		rh.onopen = aCo, rh.onmessage = aCo, rh.onclose = aCo, rh.onerror = aCo
	}
}

function cd() {
	var aCs = !1,
		wE = 0,
		g5 = 0,
		q6 = 0,
		gap = 0,
		gO = null,
		q1 = null,
		t6 = null;

	function aCu() {
		for (var a3p, aCx = 0, eb = 0, iM = Math.floor(g5 / 2), gR = Math.floor(q6 / 2), a3o = 1.5 * Math.PI, eF = tq; 0 <= eF; eF--) eb += t6[eF], 0 === t6[eF] && aCx++;
		if (aCs = !1, q1.clearRect(0, 0, g5, g5), q1.fillStyle = aZ.ka, q1.fillRect(0, 0, g5, g5), q1.fillStyle = aZ.gG, q1.fillRect(0, 0, g5, gap), q1.fillRect(0, 0, gap, g5), q1.fillRect(g5 - gap, 0, gap, g5), q1.fillRect(0, g5 - gap, g5, gap), 0 <
			eb)
			if (aCx === tq) {
				for (eF = tq; 0 <= eF; eF--)
					if (0 < t6[eF]) {
						! function(eF, iM, gR) {
							q1.fillStyle = b4.a3t[b4.r9[eF]], q1.beginPath(), q1.arc(iM, iM, gR, 0, 2 * Math.PI), q1.fill()
						}(eF, iM, gR);
						break
					}!
				function(iM) {
					var fontSize = iM / 3;
					q1.font = aY.g0.g1(1, fontSize), q1.fillStyle = aZ.gG, q1.fillText("100%", iM, iM + .1 * fontSize)
				}(iM)
			} else {
				for (eF = 0; eF <= tq; eF++) 0 < t6[eF] && (! function(eF, iM, gR, a3o, a3p) {
					q1.fillStyle = b4.a3t[b4.r9[eF]], q1.beginPath(), q1.arc(iM, iM, gR, a3o, a3p), q1.lineTo(iM, iM), q1.fill()
				}(eF, iM, gR, a3o, a3p = a3o + 2 * Math.PI * t6[eF] / eb), function(iM, gR, a3o, a3p) {
					var dd = (a3p - a3o) / (2 * Math.PI),
						fontSize = +gR * Math.min(dd, .37);
					fontSize < 8 || (a3o = (a3o + a3p) / 2, a3p = Math.floor(100 * dd + .5) + "%", gR *= .525 - Math.max(.6 * (dd - .7), 0), q1.font = aY.g0.g1(1, fontSize), q1.fillStyle = aZ.gG, q1.fillText(a3p, iM + Math.cos(a3o) * gR, iM +
						Math.cos(a3o + 1.5 * Math.PI) * gR))
				}(iM, gR, a3o, a3p), 0 !== eF && a3r(iM, gR, a3o), a3o = a3p);
				a3r(iM, gR, 1.5 * Math.PI)
			}!
		function(iM, gR) {
			q1.beginPath(), q1.arc(iM, iM, gR, 0, 2 * Math.PI), q1.stroke()
		}(iM, gR)
	}

	function a3r(iM, gR, a3u) {
		q1.beginPath(), q1.moveTo(iM, iM), q1.lineTo(iM + Math.cos(a3u) * gR, iM + Math.cos(a3u + 1.5 * Math.PI) * gR), q1.stroke()
	}
	this.cq = function() {
		if (hN) {
			var eF;
			for (wE = 0, t6 = new Uint32Array(tq + 1), eF = tq; 0 <= eF; eF--) t6[eF] = 0;
			for (eF = iO - 1; 0 <= eF; eF--) t6[b4.iN[iP[eF]]] += 1;
			this.resize()
		} else t6 = q1 = gO = null
	}, this.xa = function() {
		return g5
	}, this.resize = function() {
		hN && (g5 = Math.floor(b7.cv.fv() && !k9 ? .18 * aK.min : .13 * aK.fw), g5 = (g5 *= 1 + (.5 + .2 * b7.cv.fv()) * k9) + g5 % 2, q6 = Math.floor(7 * g5 / 8), (gO = gO || document.createElement("canvas")).width = g5, gO.height = g5, q1 = gO
			.getContext("2d", {
				alpha: !0
			}), gap = Math.max(1, .015 * g5), q1.lineWidth = gap, q1.strokeStyle = aZ.gG, aY.g0.textAlign(q1, 1), aY.g0.textBaseline(q1, 1), aCu())
	}, this.rB = function() {
		return t6[this.rA()]
	}, this.qt = function() {
		return wE = 31, this.i7(), this.rA()
	}, this.rA = function() {
		for (var aCv = 0, eF = tq; 0 < eF; eF--) t6[eF] > t6[aCv] && (aCv = eF);
		return aCv
	}, this.i7 = function() {
		if (hN && 32 <= ++wE) {
			var eF;
			for (wE = 0, eF = tq; 0 <= eF; eF--) t6[eF] = 0;
			for (eF = iO - 1; 0 <= eF; eF--) t6[b4.iN[iP[eF]]] += f1[iP[eF]];
			aCs = !0
		}
	}, this.g2 = function() {
		hN && aCs && aCu()
	}, this.gE = function() {
		hN && (k9 ? gF.drawImage(gO, b0.gap, b0.gap) : gF.drawImage(gO, b0.gap, xb + 2 * b0.gap))
	}
}

function cL() {
	this.d3 = function() {
		var value;
		b7.oH || 2 === b7.id || (value = function(key) {
			if ("undefined" == typeof URLSearchParams) return null;
			var aB1 = window.location.search,
				aB1 = new URLSearchParams(aB1).get(key);
			if ("string" != typeof aB1 || aB1.length < 1) return null;
			return aB1
		}("replay")) && ar.yJ(value)
	}, this.clear = function() {
		var rg;
		b7.oH || 2 === b7.id || ((rg = new URL(window.location.href)).search = "", history.replaceState(null, "", rg.toString()))
	}
}

function bv() {
	var aD2, dn;
	this.cq = function() {
		for (var eF = (dn = new Uint16Array(101)).length - 1; 0 <= eF; eF--) dn[eF] = eT(32768 * eF, 100);
		this.u0(0)
	}, this.value = function(ei) {
		return dn[ei]
	}, this.a8m = function() {
		return eT(aD2 - 1, 2)
	}, this.u0 = function(a99) {
		aD2 = 2 * a99 % 32768 + 1
	}, this.random = function() {
		return aD2 = 167 * aD2 % 32768
	}, this.hd = function(jJ) {
		return eT(jJ * this.random(), 32768)
	}, this.iG = function(ei) {
		return 0 !== ei && this.random() < this.value(ei)
	}
}

function cD() {
	this.mX = new aD3, this.aBD = new aD4, this.aBH = new aD5, this.cq = function(tt, qA, tv, tw) {
		var aD6;
		fN || ((aD6 = {}).tu = eW, aD6.tt = tt, aD6.qA = qA, aD6.tv = tv, aD6.tw = tw, aD6.a42 = ap.pG, aD6.a43 = ap.a3z, z.a4S(aD6), this.mX.cq(aD6))
	}, this.i7 = function() {
		fN || this.mX.i7()
	}, this.aBG = function() {
		var tD = this.mX.aD6;
		0 === qw && x.a2v(), ap.d2(tD.a42, tD.a43), 1 === tD.qA.length && (z.a4N(tD.tv), z.a4P(tD.a4Q, tD.a4R)), aN.ix.close(aN.ix.rr, 3246), z.a4U(), ts(tD.tt, tD.tu, tD.qA, tD.tv, tD.tw, !0)
	}, this.aBF = function(fy) {
		var eF = fy.indexOf("=");
		return 0 <= eF ? fy.substring(eF + 1) : fy
	}, this.aBE = function(fy) {
		return "https://territorial.io/?replay=" + fy
	}
}

function aD3() {
	this.aD7 = null, this.aD8 = null, this.aD9 = null, this.aDA = null, this.aDB = null, this.aDC = null;
	var aDD = 0;
	this.aD6 = null, this.aBC = "", this.cq = function(aD6) {
		this.aD7 = [], this.aD8 = [], this.aD9 = [], this.aDA = [], this.aDB = [0], this.aDC = [0], aDD = 0, this.aD6 = aD6, this.aBC = ""
	}, this.mY = function(id, dp, dr, dt) {
		fN || 2 === qw || (0 === this.aDB[aDD] && (this.aDC[aDD] ? (this.aDB.push(1), this.aDC.push(0), aDD++) : this.aDB[aDD] = 1), this.aD7.push(id), this.aD8.push(dp), this.aD9.push(void 0 === dr ? 0 : dr), this.aDA.push(void 0 === dt ? 0 :
			dt), this.aDC[aDD]++)
	}, this.i7 = function() {
		0 === this.aDB[aDD] ? this.aDC[aDD]++ : (this.aDB.push(0), this.aDC.push(0), aDD++)
	}
}

function aD5() {
	function aDJ(fy, aDL = !1) {
		aDL ? k.vH = "Replay Error: " + fy : ar.ry("Replay Error", fy)
	}
	this.oc = function(fy) {
		if (ae.oX(ae.oU(ae.oT(fy))), k.vH = "", ! function() {
				if (ad.size < 10) aDJ("File Too Small");
				else if (ad.mJ(9) !== d8 && aDJ("Incompatible Version Error", !0), ad.mJ(31) !== ad.size) aDJ("Size Error");
				else {
					if (function(gB) {
							var eF, ei = ad.mI,
								eb = ad.size,
								a69 = 0;
							for (eF = 7; eF < eb; eF++) a69 = a69 + ei[eF] & 65535;
							return a69 === gB
						}(ad.mJ(16))) return 1;
					aDJ("Hash Error")
				}
				return
			}()) return !1;
		(aD6 = {}).tu = ad.mJ(9), aD6.tt = ad.mJ(14), aD6.tv = ad.mJ(4), aD6.tw = 1 === ad.mJ(1), aD6.a42 = ad.mJ(6), aD6.a43 = ad.mJ(14), aD6.aDM = ad.mJ(10), aX.mX.aD6 = aD6,
			function() {
				var eF, a4a, a4Z, name, eb = aX.mX.aD6.aDM,
					qA = [];
				for (eF = 0; eF < eb; eF++) a4a = ad.mJ(1), a4Z = [ad.mJ(6), ad.mJ(6), ad.mJ(6)], name = ad.aBs(ad.mJ(5)), qA.push({
					name: name,
					a4Z: a4Z,
					a4a: a4a
				});
				if (aX.mX.aD6.qA = qA, 8 === aX.mX.aD6.tv)
					for (eF = 0; eF < eb; eF++) qA[eF].qE = ad.mJ(14)
			}(),
			function() {
				var eF, eb, aDN = aX.mX.aD6;
				if (1 === aDN.qA.length)
					for (eb = 6 < aDN.tv ? 1 : aDN.tv + 2, aDN.a4Q = new Array(eb), aDN.a4R = new Array(eb), eF = 0; eF < eb; eF++) aDN.a4Q[eF] = ad.mJ(3), aDN.a4R[eF] = ad.mJ(9) + 1
			}(), aD6 = ad.mJ(5), aDO = ad.mJ(30), aDP = ad.mJ(30);
		var aD6, aDO, aDP, eF, id, eb = aDO,
			aDS = new Uint8Array(eb),
			aDT = new Uint16Array(eb),
			aDU = new Uint32Array(eb),
			aDV = new Uint32Array(eb);
		for (aX.mX.aD7 = aDS, aX.mX.aD8 = aDT, aX.mX.aD9 = aDU, aX.mX.aDA = aDV, eF = 0; eF < eb; eF++) aDS[eF] = id = ad.mJ(4), aDT[eF] = ad.mJ(9), 0 === id ? aDU[eF] = ad.mJ(22) : 1 === id ? (aDU[eF] = ad.mJ(10), aDV[eF] = ad.mJ(10)) : 2 ===
			id ? (aDU[eF] = ad.mJ(10), aDV[eF] = ad.mJ(9)) : 3 === id || 4 === id ? (aDU[eF] = ad.mJ(10), aDV[eF] = ad.mJ(22)) : 5 === id ? aDU[eF] = ad.mJ(10) : 6 === id ? aDU[eF] = ad.mJ(7) : 7 === id && (aDU[eF] = ad.mJ(1));
		return function(eb, od) {
			var eF, aDB = new Uint8Array(eb),
				aDC = new Array(eb);
			for (aDC.fill(0), aX.mX.aDB = aDB, aX.mX.aDC = aDC, eF = 0; eF < eb; eF++) aDB[eF] = ad.mJ(1), aDC[eF] = ad.mJ(od)
		}(aDP, aD6), ad.fz < 8 * ad.size - 13 || ad.fz > 8 * ad.size ? (aDJ("Out Of Bounds Error: " + ad.fz + " " + 8 * ad.size), !1) : (aX.mX.aBC = fy, !0)
	}
}

function aD4() {
	this.qZ = function() {
		var aDN, od = function() {
				var eF, aDC = aX.mX.aDC,
					eb = aDC.length,
					max = 0;
				for (eF = 0; eF < eb; eF++) max = Math.max(max, aDC[eF]);
				return ol(Math.max(max, 1))
			}(),
			aDX = function(od) {
				return 179 + function() {
					var eF, qA = aX.mX.aD6.qA,
						eb = qA.length,
						aDX = 24 * eb;
					for (eF = 0; eF < eb; eF++) aDX += 10 * h.qZ(qA[eF].name).length;
					8 === aX.mX.aD6.tv && (aDX += 14 * eb);
					return aDX
				}() + (1 === aX.mX.aD6.qA.length ? 12 * aX.mX.aD6.a4Q.length : 0) + function() {
					var eF, aD7 = aX.mX.aD7,
						eb = aD7.length,
						aDX = 13 * eb,
						aDl = [22, 20, 19, 32, 32, 10, 7, 1, 0, 0];
					for (eF = 0; eF < eb; eF++) aDX += aDl[aD7[eF]];
					return aDX
				}() + function(od) {
					return aX.mX.aDC.length * (1 + od)
				}(od)
			}(od);
		ab.d2(aDX + (6 - aDX % 6) % 6), aDN = aX.mX.aD6, ab.oZ(9, d8), ab.oZ(31, ab.size), ab.fz += 16, ab.oZ(9, aDN.tu), ab.oZ(14, aDN.tt), ab.oZ(4, aDN.tv), ab.oZ(1, aDN.tw), ab.oZ(6, aDN.a42), ab.oZ(14, aDN.a43), ab.oZ(10, aDN.qA.length);
		var eF, hj, aDf, aDg, qA = aX.mX.aD6.qA,
			eb = qA.length;
		for (eF = 0; eF < eb; eF++)
			for (ab.oZ(1, qA[eF].a4a), ab.oZ(18, (qA[eF].a4Z[0] << 12) + (qA[eF].a4Z[1] << 6) + qA[eF].a4Z[2]), aDf = h.qZ(qA[eF].name), aDg = aDf.length, ab.oZ(5, aDg), hj = 0; hj < aDg; hj++) ab.oZ(10, aDf[hj]);
		if (8 === aX.mX.aD6.tv)
			for (eF = 0; eF < eb; eF++) ab.oZ(14, qA[eF].qE);
		return function() {
				var eF, aDN = aX.mX.aD6;
				if (1 === aDN.qA.length)
					for (eF = 0; eF < aDN.a4Q.length; eF++) ab.oZ(3, aDN.a4Q[eF]), ab.oZ(9, aDN.a4R[eF] - 1)
			}(),
			function(od) {
				var eF, aD7 = aX.mX.aD7,
					dp = aX.mX.aD8,
					dr = aX.mX.aD9,
					dt = aX.mX.aDA,
					eb = aD7.length;
				for (ab.oZ(5, od), ab.oZ(30, eb), ab.oZ(30, aX.mX.aDC.length), eF = 0; eF < eb; eF++) ab.oZ(4, aD7[eF]), ab.oZ(9, dp[eF]), 0 === aD7[eF] ? ab.oZ(22, dr[eF]) : 1 === aD7[eF] ? (ab.oZ(10, dr[eF]), ab.oZ(10, dt[eF])) : 2 === aD7[
					eF] ? (ab.oZ(10, dr[eF]), ab.oZ(9, dt[eF])) : 3 === aD7[eF] || 4 === aD7[eF] ? (ab.oZ(10, dr[eF]), ab.oZ(22, dt[eF])) : 5 === aD7[eF] ? ab.oZ(10, dr[eF]) : 6 === aD7[eF] ? ab.oZ(7, dr[eF]) : 7 === aD7[eF] && ab.oZ(1, dr[eF])
			}(od),
			function(od) {
				var eF, aDB = aX.mX.aDB,
					aDC = aX.mX.aDC,
					eb = aDB.length;
				for (eF = 0; eF < eb; eF++) ab.oZ(1, aDB[eF]), ab.oZ(od, aDC[eF])
			}(od), ab.fz !== aDX && k.rs("Encoder Index Error: " + ab.fz + " " + aDX), ab.fz = 40, ab.oZ(16, function() {
				var eF, ei = ab.mI,
					eb = ab.size,
					a69 = 0;
				for (eF = 7; eF < eb; eF++) a69 = a69 + ei[eF] & 65535;
				return a69
			}()), ad.cq(ab.mI), ac.qN(ac.qL(eT(aDX - 1, 6) + 1))
	}
}

function c0() {
	var iM, w8 = !1,
		aDm = !1,
		aDn = -1e4;

	function resize(gg) {
		iM = 0, a1.g3() && (aDp(gg) || w8) && (w8 = !1, b0.resize(), aw.cq(), v.cq(), y.resize(), au.cq(), w.resize(), q.resize(), l.resize(), b6.resize(), az.cq(), ar.resize(), 1 <= qw ? (s.resize(!1), r.resize(), t.resize(), p.resize(), o.resize(),
			k.resize(), j.resize(), aa.resize(), aI.resize(), m.resize(), n.resize(), i.resize(), b2.resize(), a6.resize(), u.resize(), b5.resize(), p.yf()) : (2 === x.dY() && z.resize(), x.a2y(), x.a31()), b3.d1 = !0)
	}

	function aDo(dd) {
		return dd && 128 < dd ? Math.floor(dd) : 128
	}

	function aDp(gg) {
		var g5, gB, aDr, q6 = aDo(document.documentElement.clientWidth),
			wl = aDo(window.visualViewport && 2 !== b7.id ? window.visualViewport.height : document.documentElement.clientHeight);
		return g5 = q6, gB = wl, aDr = 0 !== b7.id || g5 < gB ? 700 : 1200, aDr = Math.min(aDr / ((g5 + gB) / 2), 1), aDr = 0 === b9.dF.data[1].value ? 2 * aDr / 3 : Math.min(aDr + (b9.dF.data[1].value - 1) * (1 - aDr) / 2, 1), aK.nA = (window
			.devicePixelRatio || 1) * aDr, gg && !aDm ? (aDm = !0, document.body.removeChild(s9)) : aDm && (aDm = !1, document.body.appendChild(s9)), g5 = Math.floor(.5 + q6 * aK.nA), gB = Math.floor(.5 + wl * aK.nA), !(g5 === aK.g5 && gB === aK
			.gB || ag.sr() && y.sg) && (aK.g5 = g5, aK.gB = gB, aK.min = xt(g5, gB), aK.max = vY(g5, gB), aK.fw = eT(g5 + gB, 2), aK.ns = g5 / gB, s9.width = g5, s9.height = gB, s9.style.width = q6 + "px", s9.style.height = wl + "px", 1)
	}
	this.g5 = 0, this.gB = 0, this.min = 0, this.max = 0, this.fw = 0, this.ns = 1, this.nA = 1, this.cr = function() {
		this.g5 = aDo(document.documentElement.clientWidth) + 2, this.gB = aDo(document.documentElement.clientHeight) + 2
	}, this.cq = function() {
		iM = 1, s9 = document.getElementById("canvasA"), (gF = s9.getContext("2d", {
			alpha: makeMainMenuTransparent
		})).imageSmoothingEnabled = !1, aDp(0)
	}, this.i7 = function() {
		aP.i7(), 50 <= ++iM && resize(0)
	}, this.oP = function(gg) {
		w8 = !0, resize(gg)
	}, this.ss = function() {
		aDn + 1e3 > b3.da || (aDn = b3.da, resize(0))
	}
}

function bw() {
	var player, hU, p4, oy, jc, jd, je, jf, fz, aDt, id;

	function aDz() {
		var hT;
		if (a2.en(p4)) hT = ef;
		else {
			if ((hT = a2.em(p4)) === player) return void aE1(!0);
			if (!fr(player, hT)) return function(hT) {
				var max = f1[hT] * tM - eX[hT];
				max <= 0 || (hU -= max = max < hU ? max : hU, player === eW && (k.lz(max, 0, hT), b1.eZ[16] += max), hT === eW && (k.w1(max, player), b1.eZ[10] += max), eX[hT] += max, a6.m0(hT, max))
			}(hT), void aE1(!0)
		}
		player === eW && (b1.eZ[13] += hU), e.eV(player, id), a4.ea(player, aDt), ec[player].push(oy), a4.hQ(player, hU, hT), c.hR(player, !0)
	}

	function aE1(aE4) {
		e.eV(player, id), a4.ea(player, aDt), aE4 && (eX[player] += hU)
	}

	function aDv() {
		a2.a5p(p4, player) && a2.a5r(p4)
	}

	function aDu(eF, a7H, xW, hc, kM) {
		if (fz = eF, id = a7H, player = xW, jc = a2.jg(hc), jd = a2.gD(hc), je = a2.jg(kM), jf = a2.gD(kM), oy = p4 = a2.pZ(jc, jd), -1 !== (aDt = a4.jj(player, id))) return hU = a4.eN(player, aDt), 1;
		aDv(), e.eV(player, id)
	}
	this.i7 = function(eF, id, xW, hc, kM) {
		aDu(eF, id, xW, hc, kM) && (aDv(), function() {
			var aE5 = eT(hU, 128);
			hU -= aE5 = aE5 < 1 ? 1 : aE5, player === eW && (b1.eZ[15] += aE5);
			if (hU <= eU) return player === eW && (b1.eZ[15] += hU), void aE1(!1);
			return a4.f0(player, aDt, hU), 1
		}()) && (eF = a2.pZ(jc, jd), p4 = Math.abs(je - jc) >= Math.abs(jf - jd) ? eF + e6[jc < je ? 1 : 3] : eF + e6[jd < jf ? 2 : 0], jc = a2.jg(p4), jd = a2.gD(p4), e.jS(fz, p4), ! function() {
			if (a2.ed(p4)) return;
			return 1
		}() ? aDz() : a2.fj(p4) && a2.a5u(p4, player))
	}, this.jV = function(xW, hc) {
		player = xW, p4 = a2.pZ(a2.jg(hc), a2.gD(hc)), aDv()
	}
}

function ca() {
	this.a3k = new aE6
}

function aE6() {
	var yB = 0,
		a3w = 0,
		da = 0,
		eZ = [1, 0, 0, 1, 0, 0];

	function aE7(hj) {
		var eF, aE8 = eZ[0],
			aBu = eZ[1],
			aBv = eZ[2],
			ha = eZ[3];
		if ((hj = Math.min(hj, eZ[4])) < ha) yB = a3w = 0;
		else {
			for (yB = performance.now(), eF = ha; eF <= hj; eF++) aBu = aEA(aBu, aE8 = function(aE8, aBu, aBv, fZ) {
				var eF, eb = 65536 + (aE8 * fZ & 16383);
				for (eF = 0; eF < eb; eF++) aE8 = 1 + aE8 * aBu % aBv;
				return aE8
			}(aE8, aBu, aBv, eF), 16384, 65536), aBv = aEA(aBv, aE8, 1 << 18, 1 << 20);
			eZ[0] = aE8, eZ[1] = aBu, eZ[2] = aBv, eZ[3] = eF, a3w = performance.now(), eZ[5] += a3w - yB
		}
	}

	function aEA(dd, a99, min, max) {
		return min + (dd * a99 + 137) % (max - min)
	}
	this.ii = !1, this.cq = function(aBu, aBv, aBw) {
		eZ[0] = 1, eZ[1] = aBu, eZ[2] = aBv, eZ[3] = 0, eZ[4] = aBw, eZ[5] = 0, this.ii = !0
	}, this.a3l = function() {
		this.ii = !1, eZ[3] = eZ[4] + 1
	}, this.aBy = function() {
		return aE7(eZ[4]), this.ii = !1, [eZ[0] - 1 & 65535, Math.min(Math.floor(Math.sqrt(eZ[5])), 1023)]
	}, this.i7 = function() {
		7 !== x.dY() || eZ[4] < eZ[3] || b3.da < da || (aE7(eZ[3] + Math.floor(eZ[4] / 20)), da = a3w + 250)
	}
}

function bx() {
	var aEB, aEC, fj, aED;
	this.cq = function() {
		var eF, fK, fL, a4Z, aEE, g5, gB, q1, gL, ow, dd, ei, hz, ha, aEH;
		if (function() {
				if (fj = !0, aED = "rgb(" + ap.ot[0] + "," + ap.ot[1] + "," + ap.ot[2] + ")", ap.a9H(ap.pG)) return 1;
				return fj = !1, 0
			}()) aEC = null;
		else {
			for (aEB = eT(96, 4), aEE = 1 === ap.pG ? (a4Z = 0, 160) : (a4Z = 128, 32), aED = "rgb(" + a4Z + "," + a4Z + "," + a4Z + ")", aEC = new Array(4), eF = 3; 0 <= eF; eF--) {
				if (aEC[eF] = document.createElement("canvas"), g5 = eF % 2 == 0 ? ap.eA : aEB, gB = eF % 2 == 0 ? aEB : ap.eB + 2 * aEB, aEC[eF].width = g5, aEC[eF].height = gB, ow = (gL = (q1 = aEC[eF].getContext("2d", {
						alpha: !1
					})).getImageData(0, 0, g5, gB)).data, eF % 2 == 0)
					for (fL = aEB - 1; 0 <= fL; fL--)
						for (dd = aEE + Math.floor((fL + 1) * (a4Z - aEE) / (aEB + 1)), fK = g5 - 1; 0 <= fK; fK--) ow[ei = 4 * ((0 === eF ? aEB - fL - 1 : fL) * g5 + fK)] = dd, ow[ei + 1] = dd, ow[ei + 2] = dd, ow[ei + 3] = 255;
				else {
					for (fK = aEB - 1; 0 <= fK; fK--)
						for (dd = aEE + Math.floor((fK + 1) * (a4Z - aEE) / (aEB + 1)), fL = gB - 1 - aEB; aEB <= fL; fL--) ow[ei = 4 * (fL * g5 + (3 === eF ? aEB - fK - 1 : fK))] = dd, ow[ei + 1] = dd, ow[ei + 2] = dd, ow[ei + 3] = 255;
					for (ha = 1; 0 <= ha; ha--)
						for (fK = aEB - 1; 0 <= fK; fK--)
							for (fL = aEB - 1; 0 <= fL; fL--) hz = (Math.pow(fK * fK + fL * fL, .5) + 1) / (aEB + 1), dd = aEE + Math.floor((1 < hz ? 1 : hz) * (a4Z - aEE)), ow[ei = 4 * ((0 === ha ? aEB - fL - 1 : fL + ha * (gB - aEB)) * g5 + (
								1 === eF ? fK : aEB - fK - 1))] = dd, ow[ei + 1] = dd, ow[ei + 2] = dd, ow[ei + 3] = 255
				}
				q1.putImageData(gL, 0, 0)
			}
			aEH = aEE, ap.oo.fillStyle = "rgb(" + aEH + "," + aEH + "," + aEH + ")", ap.oo.fillRect(0, 0, ap.eA, 1), ap.oo.fillRect(0, ap.eB - 1, ap.eA, 1), ap.oo.fillRect(0, 0, 1, ap.eB), ap.oo.fillRect(ap.eA - 1, 0, 1, ap.eB)
		}
	}, this.px = function() {
		var ha = fj ? 0 : -aEB;
		aAq(ha, ha, ap.eA - 2 * ha, ap.eB - 2 * ha, ax.aEI, ax.aEJ, ax.aEK, ax.aEL) || (gF.fillStyle = aED, gF.fillRect(0, 0, aK.g5, aK.gB))
	}, this.gE = function() {
		fj || (aAp(0, -aEB, ap.eA, aEB, ax.aEI, ax.aEJ, ax.aEK, ax.aEL) && gF.drawImage(aEC[0], ax.aEM, ax.aEN - aEB), aAp(ap.eA, -aEB, aEB, ap.eB + 2 * aEB, ax.aEI, ax.aEJ, ax.aEK, ax.aEL) && gF.drawImage(aEC[1], ax.aEM + ap.eA, ax.aEN - aEB),
			aAp(0, ap.eB, ap.eA, aEB, ax.aEI, ax.aEJ, ax.aEK, ax.aEL) && gF.drawImage(aEC[2], ax.aEM, ax.aEN + ap.eB), aAp(-aEB, -aEB, aEB, ap.eB + 2 * aEB, ax.aEI, ax.aEJ, ax.aEK, ax.aEL) && gF.drawImage(aEC[3], ax.aEM - aEB, ax.aEN - aEB))
	}
}

function cO() {
	this.ff = new aEO, this.a6M = new aEP, this.py = new aEQ, this.ix = new aER, this.hF = new aES, this.aEH = new aET, this.aEU = new aEV, this.i6 = new aEW, this.mi = new aEX, this.cq = function() {
		this.py.cq(), this.ix.cq(), this.hF.cq(), this.aEH.cq()
	}
}

function aEW() {
	function aEd(player, hc, aEf, aEg) {
		for (var jc, jd, g5, gB, gR, aEh, je, jf, eb = hc + aEg, eF = hc; eF < eb; eF += aEf)
			if (jc = (jc = hv[player] - eF) < 1 ? 1 : jc, jd = hy[player] - eF, je = (je = hu[player] + eF) >= ap.eA - 1 ? ap.eA - 2 : je, gB = (jf = (jf = hx[player] + eF) >= ap.eB - 1 ? ap.eB - 2 : jf) - (jd = jd < 1 ? 1 : jd), je = (gR = eT(aL
					.random() * (2 * (je - jc + jf - jd)), aL.value(100))) <= (g5 = je - jc) ? (aEh = jc + gR, jd) : gR <= g5 + gB ? (aEh = je, jd + gR - g5) : gR <= 2 * g5 + gB ? (aEh = jc + gR - g5 - gB, jf) : (aEh = jc, jd + gR - 2 * g5 - gB),
				aEe(player, jf = a2.pZ(aEh, je))) return jf;
		return -1
	}

	function aEe(tI, ej) {
		return a2.ed(ej) && (a2.en(ej) || tI !== (ej = a2.em(ej)) && fr(tI, ej) && 0 < eu[ej].length)
	}
	this.i7 = function(player) {
		return !(0 === eu[player].length || eX[player] < 100) && ak.ix.mV !== ak.ix.mg && (ak.ix.mU[player] !== ak.ix.mh && aY.fP.mb(player, 203, 32, 16) ? !! function(player) {
			var ej = function(player) {
				var eF, pd, pc, jc = hv[player],
					jd = hy[player],
					gu = hu[player] - jc + 1,
					gx = hx[player] - jd + 1,
					dd = aL.value(100);
				for (eF = 0; eF < 32; eF++)
					if (pd = jc + ai.fG(aL.random() * gu, dd), pc = jd + ai.fG(aL.random() * gx, dd), pd = a2.pZ(pd, pc), aEe(player, pd)) return pd;
				return -1
			}(player);
			if (0 <= ej) return ak.mi.mj(player, ej >> 2);
			if (0 <= (ej = aEd(player, 1, 4, 40))) return ak.mi.mj(player, ej >> 2);
			if (0 <= (ej = aEd(player, 40, 8, 200))) return ak.mi.mj(player, ej >> 2);
			return
		}(player) && !! function(tI) {
			if (0 === al.dk[2]) return void console.log("error 325234");
			var aEb = al.dk[1] + aj.gS[al.dk[2] - 1] << 2;
			if (a2.en(aEb)) return 1;
			return aEb = a2.em(aEb), tI !== aEb && !!fr(tI, aEb)
		}(player) && function(player) {
			return aY.fP.md(player), ak.ix.mk(player), !0
		}(player) : void 0)
	}
}

function aEO() {
	function aEk(aEj) {
		var aEu = 4 + .03 * (1 + 1.5 * b7.cv.fv()) * aK.fw / h8;
		return aj.h0(aEj, al.dk[1]) < aEu
	}
	this.fk = function(player, aEj) {
		return !!aj.hA(aEj) && ak.ix.mV !== ak.ix.mg && ak.ix.mU[player] !== ak.ix.mh && 0 !== eu[player].length && !!ak.mi.mj(player, aEj) && !!aEk(aEj)
	}, this.li = function(player, lh, aEj) {
		return !!(aj.hA(aEj) && this.ml(player, lh) && ak.mi.mm(aEj) && aEk(aEj))
	}, this.ml = function(player, id) {
		for (var aEl, t4 = player << 3, t5 = t4 + ak.ix.mU[player], aEm = ak.ix.aEm, aEn = ak.ix.aEn, eF = t4; eF < t5; eF++)
			if (id === aEn[aEl = aEm[eF]]) return al.dk[3] = aEl, !0;
		return !1
	}, this.fg = function(fX) {
		var aEo = ak.aEH.aEo;
		return ak.aEH.aEo = -1, !!this.ml(eW, aEo) && (aW.fd.fg(aEo, fX), !0)
	}, this.fh = function(g9, gA) {
		var eF, t5, aEp, aEm, aEq, aEr, aEs, hz, vm, aEt, player = eW,
			eb = ak.ix.mU[player];
		if (0 === eb) return !1;
		for (aEm = ak.ix.aEm, aEr = ak.ix.aEr, vm = ak.ix.vm, t5 = (player = player << 3) + eb, aEq = .4 * aY.g0.n7(.5) * aK.fw / h8, aEp = -1, eF = player; eF < t5; eF++) aEt = aEm[eF], aEs = 16 * (.625 + .125 * Math.sqrt(Math.sqrt(vm[aEt]))), (
			hz = aj.gq(g9, gA, aEr[aEt])) - aEs < aEq && (aEq = hz, aEp = aEt);
		return !(aEp < 0 || (ak.aEH.aEo = ak.ix.aEn[aEp], 0))
	}, this.um = function(g9, gA) {
		var eF, aEp, aEq, aEr, aEs, hz, vm, eb = ak.ix.mV;
		if (eb < 1) return -1;
		for (aEr = ak.ix.aEr, vm = ak.ix.vm, aEq = 1e3, aEp = -1, eF = 0; eF < eb; eF++) aEs = 16 * aY.g0.n7(.5) * (.625 + .125 * Math.sqrt(Math.sqrt(vm[eF]))), (hz = aj.gq(g9, gA, aEr[eF])) < aEq && hz < aEs && (aEq = hz, aEp = eF);
		return aEp
	}
}

function aEP() {
	this.a6N = function(player) {
		for (var aEm = ak.ix.aEm, t4 = player << 3, eF = t4 + ak.ix.mU[player] - 1; t4 <= eF; eF--) this.aEv(aEm[eF])
	}, this.aEv = function(aEw) {
		var ix = ak.ix,
			aEx = ix.mV - 1,
			aEy = ix.vl[aEw],
			aEz = ix.aF0[aEw],
			aF1 = ix.aEr[aEw];
		ix.mV = aEx, ix.vl[aEw] = ix.vl[aEx], ix.aF2[aEw] = ix.aF2[aEx], ix.aF3[aEw] = ix.aF3[aEx], ix.aEr[aEw] = ix.aEr[aEx], ix.aF4[aEw] = ix.aF4[aEx], ix.vm[aEw] = ix.vm[aEx], ix.aF0[aEw] = ix.aF0[aEx], ix.aEn[aEw] = ix.aEn[aEx], ix.aF5[aEw] =
			ix.aF5[aEx], ix.aEm[ix.vl[aEw]] = aEw,
			function(a3u) {
				var player = a3u >> 3,
					ix = ak.ix,
					eb = ix.mU[player] - 1,
					aF8 = (player << 3) + eb;
				ix.mU[player] = eb, aF8 !== a3u && (ix.aEm[a3u] = ix.aEm[aF8], ix.vl[ix.aEm[a3u]] = a3u)
			}(aEy), ak.hF.hF[aj.hE(ix.aEr[aEw])][ix.aF0[aEw]] = aEw, aEx = aj.hE(aF1), aEy = aEz, aEx = ak.hF.hF[aEx], ix = aEx.pop(), aEy !== aEx.length && (aEx[aEy] = ix, ak.ix.aF0[ix] = aEy)
	}
}

function aEQ() {
	var aFA, aFB = 8,
		aFC = new Array(2);

	function aFD(fz) {
		var gI = aFB + 4,
			uP = aY.g0.ok(gI, gI),
			gP = aY.g0.getContext(uP, !0),
			gL = aY.g0.getImageData(gP, gI, gI),
			ow = gL.data;
		return aFE(ow, gI + 1, fz), aFE(ow, gI + 2, fz), aFE(ow, 2 * gI + 1, fz), aFE(ow, 2 * gI - 3, fz), aFE(ow, 2 * gI - 2, fz), aFE(ow, 3 * gI - 2, fz), aFE(ow, gI * (gI - 3) + 1, fz), aFE(ow, gI * (gI - 2) + 1, fz), aFE(ow, gI * (gI - 2) + 2,
			fz), aFE(ow, gI * (gI - 2) - 2, fz), aFE(ow, gI * (gI - 1) - 3, fz), aFE(ow, gI * (gI - 1) - 2, fz), gP.putImageData(gL, 0, 0), uP
	}

	function aFE(ow, fX, fz) {
		fX *= 4;
		ow[fX] = 255, ow[1 + fX] = 255, ow[2 + fX] = fz, ow[3 + fX] = 255
	}

	function ok(player) {
		var uP = aY.g0.ok(aFB, aFB);
		return function(gP, player) {
			var fK, fL, gu, fX, aFG, a3v, gI = aFB,
				gL = aY.g0.getImageData(gP, gI, gI),
				ow = gL.data,
				oe = (gI >> 1) - .5,
				aED = a2.a5j(player),
				aFI = aY.ou.sy(aED, .5);
			aY.ou.sz(aED, aFI, 300) || aY.ou.t1(aED, 100);
			for (fL = 0; fL < gI; fL++)
				for (fK = 0; fK < gI; fK++) a3v = (gI - 1.5) * (gI - 1.5) / 4, aFG = (gu = (gu = fK - oe) * gu + (gu = fL - oe) * gu) <= (gI - 4.5) * (gI - 4.5) / 4 ? aFI : aED, ow[fX = 4 * (fL * gI + fK)] = aFG[0], ow[1 + fX] = aFG[1], ow[2 +
					fX] = aFG[2], ow[3 + fX] = a3v < gu ? 0 : 255;
			gP.putImageData(gL, 0, 0)
		}(aY.g0.getContext(uP, !0), player), uP
	}
	this.cq = function() {
		aFA = new Array(ef), aFC[0] = aFD(255), aFC[1] = aFD(0)
	}, this.gE = function() {
		var eF, player, aFJ, hU, aFK, gt, aFN, aFP, aFQ, aEr = ak.ix.aEr,
			vl = ak.ix.vl,
			vm = ak.ix.vm,
			aFR = aFA,
			aFS = eW,
			aFT = -1,
			eb = ak.ix.mV,
			aFU = aK.g5,
			aFV = aK.gB,
			aFW = ap.eA << 4,
			te = h8,
			fZ = te / aFB,
			jc = h7 / te,
			jd = h9 / te,
			gu = (aFU + h7) / te - jc,
			gx = (aFV + h9) / te - jd,
			gP = gF;
		for (ak.ff.ml(eW, ak.aEH.aEo) && (aFT = al.dk[3]), gP.fillStyle = aZ.gG, aY.g0.textAlign(gP, 1), eF = 0; eF < eb; eF++) player = vl[eF] >> 3, hU = vm[eF], aFJ = .625 + .125 * Math.sqrt(Math.sqrt(hU)), aFK = (gt = aEr[eF]) % aFW / 16 -
			aFJ, gt = aFV * (Math.floor(gt / aFW) / 16 - aFJ - jd) / gx, aFN = -2 * (aFQ = te * aFJ) * (1 + (aFP = +(player === aFS)) / 8), aFP = aFP * aFQ / 4, (aFQ = aFU * (aFK - jc) / gu) < aFN || gt < aFN || aFU + aFP < aFQ || aFV + aFP <
			gt || (aFK = aFJ * te, gP.imageSmoothingEnabled = (aFN = 2 * aFJ * fZ) < 3, void 0 === (aFP = aFR[player]) && (aFR[player] = aFP = ok(player)), player === aFS && (gP.setTransform(aFN, 0, 0, aFN, aFQ - 2 * aFN, gt - 2 * aFN), gP
				.drawImage(aFC[+(eF === aFT)], 0, 0)), gP.setTransform(aFN, 0, 0, aFN, aFQ, gt), gP.drawImage(aFP, 0, 0), (aFJ = Math.floor(function(hU) {
				if (hU < 1e3) return .42;
				if (hU < 1e4) return .34;
				if (hU < 1e6) return .26;
				if (hU < 1e8) return .19;
				return .15
			}(hU) * aFK)) < 6) || (gP.setTransform(1, 0, 0, 1, 0, 0), 20 <= aFJ ? (gP.font = aY.g0.g1(1, .85 * aFJ), gP.fillText(aY.jk.jl(hU), aFQ + aFK, gt + .93 * aFK + .085 * aFJ), (aFJ *= a6.a8D(player)) < 6 || (gP.font = aY.g0.g1(1, aFJ), gP
				.fillText(jm[player], aFQ + aFK, gt + 1.16 * aFK + .1 * aFJ))) : (gP.font = aY.g0.g1(1, aFJ), gP.fillText(aY.jk.jl(hU), aFQ + aFK, gt + aFK + .1 * aFJ)));
		gP.imageSmoothingEnabled = !1, gP.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function aEV() {
	this.i7 = function() {
		for (var aFY, aEU, aF5 = ak.ix.aF5, aEr = ak.ix.aEr, aF3 = ak.ix.aF3, eF = ak.ix.mV - 1; 0 <= eF; eF--) aFY = aEr[eF], 0 !== (aEU = aF5[eF]) && aFY === aF3[eF] && (! function(eF, aFa, gf) {
			var hT, player = ak.ix.vl[eF] >> 3,
				gf = aFa + aj.gS[gf] << 2,
				eF = ak.ix.vm[eF];
			if (a2.en(gf)) hT = ef;
			else {
				if ((hT = a2.em(gf)) === player) return aY.fP.ly(player, eF);
				if (!fr(player, hT)) return aW.iQ.lw(player, hT, eF)
			}
			player === eW && (b1.eZ[13] += eF);
			ec[player].push(aFa << 2), a4.hQ(player, eF, hT), c.hR(player, !0)
		}(eF, aj.hD(aFY), aEU - 1), ak.a6M.aEv(eF))
	}
}

function aER() {
	this.aFb = null, this.mg = 512, this.mh = 8, this.mV = 0, this.jN = 0, this.vl = new Uint16Array(this.mg), this.aF2 = new Uint32Array(this.mg), this.aF3 = new Uint32Array(this.mg), this.aEr = new Uint32Array(this.mg), this.aF4 = new Uint16Array(
			this.mg), this.vm = new Uint32Array(this.mg), this.aF0 = new Uint16Array(this.mg), this.aEn = new Uint16Array(this.mg), this.aF5 = new Uint8Array(this.mg), this.mU = new Uint8Array(ef), this.aEm = new Uint16Array(this.mh * ef), this.cq =
		function() {
			this.jN = 0, this.mV = 0, this.aFb = new Uint8Array(ap.eA + ap.eB), this.mU.fill(0)
		}, this.mk = function(player) {
			var eb = this.mV,
				aFc = aj.hC(al.dk[0]),
				aDg = this.mU[player],
				aFd = (player << 3) + aDg;
			h3[player] = 2, this.vl[eb] = aFd, this.aF2[eb] = aFc, this.aEr[eb] = aFc, this.aF3[eb] = aj.hC(al.dk[1]), this.aF4[eb] = 0, this.vm[eb] = al.dh[0], this.aF0[eb] = ak.hF.mk(eb, aj.hE(aFc)), this.aEn[eb] = this.jN, this.aF5[eb] = al.dk[2],
				this.jN = this.jN + 1 & 1023, this.aEm[aFd] = eb, this.mU[player] = aDg + 1, this.mV++
		}, this.fg = function() {
			var aEl = al.dk[3];
			this.aF2[aEl] = this.aEr[aEl], this.aF3[aEl] = aj.hC(al.dk[1]), this.aF4[aEl] = 0, this.aF5[aEl] = al.dk[2]
		}, this.i7 = function() {
			if (b3.iL() % 5 == 3) {
				ak.aEU.i7(), ! function(us) {
					var eF, aFh, aFi, aFj, aFk, aFc, aFo, aFp, ek, ej, aF2 = us.aF2,
						aF3 = us.aF3,
						aEr = us.aEr,
						vm = us.vm,
						aF4 = us.aF4,
						aF0 = us.aF0,
						us = us.mV,
						aFW = ap.eA << 4;
					for (eF = us - 1; 0 <= eF; eF--) aFi = aEr[eF], aFh = aF3[eF], aFi !== aFh && (aFc = aF2[eF], aFo = aFh % aFW - (aFk = aFc % aFW), aFp = ~~((aFh + .5) / aFW) - (aFc = ~~((aFc + .5) / aFW)), ek = ~~Math.sqrt(aFo * aFo + aFp *
						aFp + .5), ej = 4e5 + 2e4 * ~~Math.sqrt(.5 + (Math.sqrt(vm[eF] + .5) << 4)), 65535 <= (ej = aF4[eF] + Math.max(~~((.5 + ej) / ek), 1)) ? aEr[eF] = aFj = aFh : (aF4[eF] = ej, aEr[eF] = aFj = aFk + ai.fG(ej * aFo,
						65536) + aFW * (aFc + ai.fG(ej * aFp, 65536))), aF0[eF] = ak.hF.aFr(aF0[eF], aFi, aFj))
				}(this), ! function(us) {
					var eF, p9, oe, hj, iM, aFs, aFt, aFu, p4, gX, jc, jd, aFv, aEq, aFw, p5, aFc, aFz, eb = us.mV,
						aEr = us.aEr,
						vl = us.vl,
						vm = us.vm,
						hF = ak.hF.hF,
						aG0 = hF.length,
						aG1 = ak.hF.aG1,
						aFW = ap.eA << 4,
						aG2 = hN,
						aG3 = b4.iN,
						ej = (eb - 1) * (b3.iL() % 2);
					for (eF = 0; eF < eb; eF++) {
						for (p9 = Math.abs(eF - ej), aFc = aEr[p9], oe = aj.hE(aFc), p4 = vl[p9] >> 3, jc = aFc % aFW, jd = ~~((aFc + .5) / aFW), aFc = vm[p9], aFz = 80 + ~~Math.sqrt(.5 + (Math.sqrt(aFc + .5) << 8)), aEq = Math.min(aFz * aFz,
								262144), aFw = -1, hj = 0; hj < 9; hj++)
							if (!((aFs = oe + aG1[hj]) < 0 || aG0 <= aFs))
								for (aFu = hF[aFs], aFt = aFu.length, iM = 0; iM < aFt; iM++) aFv = aFu[iM], p5 = vl[aFv] >> 3, p4 == p5 || aG2 && aG3[p4] === aG3[p5] || (p5 = aEr[aFv], (p5 = (gX = jc - p5 % aFW) * gX + (gX = jd - ~~((p5 + .5) /
									aFW)) * gX) < aEq && (aFw = aFv, aEq = p5)); - 1 !== aFw && (aFc = Math.min(Math.max(1, ai.fG(aFc * (aFz - Math.floor(Math.sqrt(aEq + .5))), 5 * aFz)), vm[aFw]), vm[p9] -= aFc >> 4, vm[aFw] -= aFc)
					}
				}(this);
				var eF, hU, vm = (us = this).vm,
					us = us.mV;
				for (eF = us - 1; 0 <= eF; eF--) hU = vm[eF], 0 < (hU -= Math.max(1, hU >> 7)) ? vm[eF] = hU : ak.a6M.aEv(eF)
			}
		}
}

function aES() {
	this.aG4 = 32, this.fK = 0, this.fL = 0, this.hG = 0, this.aG5 = 0, this.aG6 = 4, this.hF = null, this.aG1 = new Int16Array(9), this.cq = function() {
		this.hG = 1 + ai.fG(ap.eA - 1, this.aG4), this.aG5 = 1 + ai.fG(ap.eB - 1, this.aG4), this.hF = new Array(this.hG * this.aG5), aY.ou.sx(this.hF);
		var fK, fL, aG1 = this.aG1,
			g5 = this.hG;
		for (fK = -1; fK <= 1; fK++)
			for (fL = -1; fL <= 1; fL++) aG1[3 * (1 + fL) + 1 + fK] = fL * g5 + fK
	}, this.mk = function(aG8, eF) {
		return this.hF[eF].push(aG8), this.hF[eF].length - 1
	}, this.aFr = function(aG9, aFc, aFh) {
		var aGA, aGB, aFc = aj.hE(aFc),
			aFh = aj.hE(aFh);
		return aFc === aFh ? aG9 : (aGA = this.hF[aFc].pop(), this.hF[aFc].length === aG9 ? this.mk(aGA, aFh) : (aGB = this.hF[aFc][aG9], this.hF[aFc][aG9] = aGA, ak.ix.aF0[aGA] = aG9, this.mk(aGB, aFh)))
	}
}

function aEX() {
	function rn(aFh, aGC) {
		if (function(aFh, aEj) {
				var gW = aj.hD(aFh),
					aGF = Math.abs(aj.gY(aEj) - aj.gY(gW)),
					gW = Math.abs(aj.ga(aEj) - aj.ga(gW));
				return 0 !== Math.max(aGF, gW) && (function(aFc, aFh, aGF, aGG) {
					var aGI = aj.gw(aFc),
						aFc = aj.gz(aFc),
						aGK = aj.gw(aFh),
						aFh = aj.gz(aFh),
						aGK = aGK - aGI,
						aFh = aFh - aFc,
						aGO = Math.abs(aGK),
						aGP = Math.abs(aFh),
						aGK = 0 < aGK ? 1 : 3,
						aFh = 0 < aFh ? 2 : 0;
					aGP < aGO ? aGS(aGI, aFc, aGI + aGO, aFc + aGP, aGK, aFh, aGF) : aGS(aFc, aGI, aFc + aGP, aGI + aGO, aFh, aGK, aGG)
				}(aFh, aj.hC(aEj), aGF, gW), !0)
			}(aFh, aGC)) {
			if (0 === al.dg[0]) return !!a2.fj(aGC << 2);
			if (function(aEj) {
					if (a2.fj(aEj << 2)) return 1;
					return function(aEj) {
						var eF, gf, aFb = ak.ix.aFb,
							aGW = aj,
							eb = al.dg[0],
							aGX = 4 * aEj;
						for (eF = eb - 1; 0 <= eF; eF--)
							if (gf = aFb[eF], aGX = aGW.hI(aGX, gf + 2 & 3), a2.fj(aGX)) return al.dg[0] = eF, al.dk[1] = aGX >> 2, al.dk[2] = 1 + gf, 1;
						return
					}(aEj)
				}(aGC)) {
				var eF, aGC = aj.hD(aFh),
					ow = a19,
					aFb = ak.ix.aFb,
					eb = al.dg[0] - 1,
					aGX = 4 * aGC,
					gT = aj.gT;
				for (eF = 0; eF < eb; eF++)
					if (aGX += gT[aFb[eF]], 0 !== ow[aGX + 3] || 2 !== ow[aGX + 2]) return !!void 0;
				return !!1
			}
		}
		return !1
	}

	function aGS(aGI, aGJ, aGK, aGL, aGQ, aGR, aGF) {
		for (var fL, aFb = ak.ix.aFb, ej = 0, aGT = 0, gB = aGL - aGJ, g5 = aGK - aGI, aGU = aGI % 16, eF = 1; eF <= aGF; eF++) aFb[ej++] = aGQ, aFb[ej] = aGR, ej += (fL = (gB * (aGU + (eF << 4)) + .5) / g5 >> 4) - aGT, aGT = fL;
		al.dm(al.dg, ej)
	}
	this.mj = function(player, aGC) {
		var gf, gW, gV = aj.gh(player, aGC);
		return gV !== aGC && (gf = aj.gU(gV, aGC), gW = aj.hH(gV, gf), !(!a2.fj(gW << 2) && (gf = aj.ge(gV, aGC, gf), gW = aj.hH(gV, gf), a2.p6(gW << 2) || !a2.fj(gW << 2)) || (al.dk[0] = gW, al.dk[1] = aGC, al.dk[2] = 0, !rn(aj.hC(gW), aGC)) ||
			0 !== al.dk[2] && aj.gp(player, al.dk[1] + aj.gS[al.dk[2] - 1] << 2)))
	}, this.mm = function(aGC) {
		var aFc = ak.ix.aEr[al.dk[3]];
		return al.dk[1] = aGC, al.dk[2] = 0, rn(aFc, aGC)
	}
}

function aET() {
	var aFB = 32,
		aGZ = new Array(2);

	function ok(iM) {
		var fK, fL, fX, gx, gu, gI = aFB,
			uP = aY.g0.ok(gI, gI),
			gP = aY.g0.getContext(uP, !0),
			gL = aY.g0.getImageData(gP, gI, gI),
			ow = gL.data,
			oe = (gI >> 1) - .5,
			aGa = Math.sqrt(oe * oe);
		for (ow.fill(255), fL = 0; fL < gI; fL++)
			for (fK = 0; fK < gI; fK++) gu = fK - oe, gx = fL - oe, fX = 4 * (fL * gI + fK), gu = 714 * (aGa - Math.sqrt(gu * gu + gx * gx)) / aGa, ow[2 + fX] = iM, ow[3 + fX] = 255 < gu ? 0 : gu;
		return gP.putImageData(gL, 0, 0), uP
	}
	this.aEo = -1, this.cq = function() {
		this.aEo = -1, aGZ[0] || (aGZ[0] = ok(255), aGZ[1] = ok(0))
	}, this.aGb = function(gP, fZ, fK, fL, gR, eF) {
		aY.fP.fR(eW) && (gP.setTransform(fZ *= 4 / 3 * .625, 0, 0, fZ, fK - (gR *= 4 / 3), fL - gR), gP.drawImage(aGZ[+(ak.ix.aEn[eF] === this.aEo)], 0, 0))
	}
}

function xr() {
	if (iO < 3) return !1;
	if (ai.fG(3 * f1[jG[2]], 2) < f1[jG[0]]) return !1;
	if (f1[jG[0]] + f1[jG[1]] + f1[jG[2]] < tn - ai.fG(tn, 10)) return !1;
	if (8 * Math.min(Math.min(eX[jG[0]], eX[jG[1]]), eX[jG[2]]) < 5 * Math.max(Math.max(eX[jG[0]], eX[jG[1]]), eX[jG[2]])) return !1;
	if (hN) {
		if (b4.iN[jG[0]] === b4.iN[jG[1]]) return !1;
		if (b4.iN[jG[0]] === b4.iN[jG[2]]) return !1;
		if (b4.iN[jG[1]] === b4.iN[jG[2]]) return !1
	}
	return !0
}

function ci() {
	this.size = 501, this.rJ = new Uint32Array(this.size), this.tL = new Uint32Array(this.size), this.a0o = new Uint16Array(this.size), this.aBR = 0, this.aGe = 1, this.iM = 0, this.max = [0, 0, 0], this.eZ = 0, this.aGf = ["Avg. Attack Strength",
		"Number Attacks", "Ships sent", "Bots conquered", "Humans conquered", "Attacked by Bots", "Attacked by Humans", "Territorial Loss", "Territorial Income", "Interest Income", "Received Support", "Overall Income", "Commanding Costs",
		"Attack Losses", "Defense Losses", "Shipping Losses", "Transmitted Support", "Overall Expenses"
	], this.cq = function() {
		this.aBR = 0, this.aGe = 1, this.iM = 0, this.aGg(), this.aGh()
	}, this.me = function(player, h6) {
		player === eW && (this.eZ[0] += h6, this.eZ[1]++, this.eZ[12] += al.dh[1], this.eZ[13] += al.dh[0])
	}, this.lz = function(player, ld) {
		donationsTracker.logDonation(player, ld, al.dh[0]);
		player === eW && (k.lz(al.dh[0], al.dh[1], ld), this.eZ[12] += al.dh[1], this.eZ[16] += al.dh[0]), ld === eW && (k.w1(al.dh[0], player), this.eZ[10] += al.dh[0])
	}, this.i7 = function() {
		0 < this.iM-- || this.aGi()
	}, this.aGi = function() {
		0 !== h3[eW] && (this.rJ[this.aBR] = f1[eW], this.tL[this.aBR] = eX[eW], this.a0o[this.aBR] = a5.a0p(eW), this.aGj(this.aBR), this.aBR++, this.aBR === this.size && this.aGk(), this.iM = this.aGe - 1, b2.g2())
	}, this.aGk = function() {
		this.aGg(), this.aGj(0), this.aBR = 1 + eT(this.size, 2);
		for (var eF = 1; eF < this.aBR; eF++) this.rJ[eF] = this.rJ[2 * eF], this.tL[eF] = this.tL[2 * eF], this.a0o[eF] = this.a0o[2 * eF], this.aGj(eF);
		this.aGe *= 2
	}, this.aGg = function() {
		this.max[0] = this.max[1] = this.max[2] = 0
	}, this.aGh = function() {
		this.eZ = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	}, this.aGj = function(eF) {
		this.max[0] = this.rJ[eF] > this.max[0] ? this.rJ[eF] : this.max[0], this.max[1] = this.tL[eF] > this.max[1] ? this.tL[eF] : this.max[1], this.max[2] = this.a0o[eF] > this.max[2] ? this.a0o[eF] : this.max[2]
	}
}

function cj() {
	this.g5 = 0, this.gB = 0, this.q6 = 0, this.q7 = 0, this.a1l = 0, this.a1m = 0, this.wl = 0, this.a4d = 0, this.a4L = 0, this.a37 = 0, this.aGl = 0, this.aGm = 0, this.xQ = 0, this.fz = 0, this.a0T = ["Territory", "Balance", "Interest",
		"Numbers"], this.dZ = !1, this.aGn = -1, this.aGo = !1, this.aGp = [0, 0], this.cq = function() {
		this.dZ = !1, this.aGn = -1, this.aGo = !1, this.resize()
	}, this.resize = function() {
		this.g5 = aK.g5 < 1.369 * aK.gB ? aK.g5 : 1.369 * aK.gB;
		var ek = b7.cv.fv() && aK.g5 < aK.gB ? 1 : b7.cv.fv() ? .8 : aK.g5 < aK.gB ? .65 : .59;
		this.g5 = Math.floor(ek * this.g5), this.g5 -= b7.cv.fv() && aK.g5 < aK.gB ? 2 * b0.gap + 2 : 0, this.gB = Math.floor(this.g5 / 1.369), this.xQ = Math.floor(this.gB / 150), this.xQ = Math.max(this.xQ, 1.5), this.q6 = Math.floor(1 + .02 *
				this.g5), this.q7 = Math.floor(1 + .04 * this.g5), this.wl = this.q7, this.a4d = Math.floor(1 + .075 * this.g5), this.a37 = Math.floor(1 + .1125 * this.g5), this.aGl = Math.floor(this.g5 * (b7.cv.fv() ? .03 : .029)), this.aGl =
			Math.max(this.aGl, 4), this.aGm = Math.floor(.035 * this.g5), this.aGm = Math.max(this.aGm, 4), this.a4L = this.gB - 2 * this.wl - this.a4d - this.a37, this.dZ && this.aGq()
	}, this.g8 = function(g9, gA) {
		var pR, pQ;
		return !!this.dZ && (pQ = g9, pR = gA, g9 -= eT(aK.g5 - this.g5, 2), gA -= eT(aK.gB - this.gB, 2), g9 < 0 || gA < 0 || g9 >= this.g5 || gA >= this.gB || g9 >= this.g5 - this.a37 && gA < this.a37 ? 1 < j.g8(pQ, pR) || this.np() : gA < this
			.a37 || (gA < this.gB - this.a4d ? (this.aGo = !0, this.aGn = (g9 - 2 * this.q6 - this.a1l) / this.a1m, 3 !== this.fz && (b3.d1 = !0)) : (pQ = (pQ = Math.floor(g9 / (this.g5 / this.a0T.length))) < 0 ? 0 : pQ >= this.a0T.length ?
				this.a0T.length - 1 : pQ) !== this.fz && (this.fz = pQ, this.aGq(), b3.d1 = !0)), !0)
	}, this.sp = function() {
		var aGr = Math.floor((this.aGp[0] + h7) / h8),
			aGs = Math.floor((this.aGp[1] + h9) / h8);
		aGr < 1 || aGs < 1 || aGr >= ap.eA - 1 || aGs >= ap.eB - 1 || console.log(aGr + " " + aGs)
	}, this.sA = function(g9, gA) {
		return this.aGp[0] = g9, this.aGp[1] = gA, !(!this.dZ || !this.aGo || (g9 -= eT(aK.g5 - this.g5, 2), gA = this.aGn, this.aGn = (g9 - 2 * this.q6 - this.a1l) / this.a1m, (0 <= this.aGn && this.aGn <= 1 || 0 <= gA && gA <= 1) && (b3.d1 = !
			0), 0))
	}, this.sa = function() {
		this.aGo && (this.aGo = !1)
	}, this.sl = function() {
		this.dZ ? this.np() : this.show()
	}, this.show = function() {
		b1.aBR < 2 || (this.dZ = !0, this.aGq())
	}, this.np = function() {
		this.dZ = !1, this.aGn = -1, b3.d1 = !0
	}, this.aGq = function() {
		this.fz < 2 ? this.a1l = n.measureText(aY.jk.jl(b1.max[this.fz]), aY.g0.g1(0, this.aGl)) : 2 === this.fz && (this.a1l = n.measureText(aY.jk.ta(6, 2), aY.g0.g1(0, this.aGl))), this.a1m = this.g5 - 2 * this.q6 - this.a1l - this.q7
	}, this.g2 = function() {
		this.dZ && this.aGq()
	}, this.gE = function() {
		this.dZ && this.yL()
	}, this.yL = function() {
		var fK = eT(aK.g5 - this.g5, 2),
			fL = eT(aK.gB - this.gB, 2);
		gF.setTransform(1, 0, 0, 1, fK, fL), gF.fillStyle = aZ.ka, gF.fillRect(0, this.a37, this.g5, this.gB - this.a37), this.aGt(), this.aGu(), gF.strokeRect(0, 0, this.g5, this.gB), aY.g0.textAlign(gF, 2), gF.font = aY.g0.g1(0, this.aGl),
			0 === this.fz ? this.aGv(b1.rJ, fK, fL) : 1 === this.fz ? this.aGv(b1.tL, fK, fL) : 2 === this.fz ? this.aGw(fK, fL) : 3 === this.fz && (this.aGx(fK, fL), this.aGy(fK, fL)), j.v7(Math.floor(fK + this.g5 - .725 * this.a37), Math.floor(
				fL + .275 * this.a37), Math.floor(.45 * this.a37)), gF.setTransform(1, 0, 0, 1, 0, 0)
	}, this.aGt = function() {
		var eF, db;
		for (gF.lineWidth = this.xQ, aY.g0.textBaseline(gF, 1), aY.g0.textAlign(gF, 1), gF.strokeStyle = aZ.gG, gF.font = aY.g0.g1(1, this.aGm), db = this.g5 / this.a0T.length, gF.fillStyle = aZ.ks, gF.fillRect(this.fz * db, this.gB - this.a4d,
				db, this.a4d), gF.fillStyle = aZ.gG, gF.fillRect(0, this.gB - this.a4d - .5 * this.xQ, this.g5, this.xQ), eF = 1; eF <= 3; eF++) gF.fillRect(eF * db, this.gB - this.a4d, this.xQ, this.a4d);
		for (eF = this.a0T.length - 1; 0 <= eF; eF--) gF.fillText(this.a0T[eF], (eF + .5) * db, this.gB - .46 * this.a4d)
	}, this.aGu = function() {
		gF.fillStyle = aZ.l9, gF.fillRect(0, 0, this.g5, this.a37), gF.fillStyle = aZ.gG, gF.fillRect(0, this.a37 - .5 * this.xQ, this.g5, this.xQ), gF.font = aY.g0.g1(1, .39 * this.a37), gF.fillText("Statistics", Math.floor(this.g5 / 2), Math
			.floor(.55 * this.a37))
	}, this.aGv = function(dn, fK, fL) {
		var oe = b1.max[this.fz],
			ft = (gF.setTransform(1, 0, 0, 1, fK + 2 * this.q6 + this.a1l, fL + this.wl + this.a37), gF.lineWidth = 2, this.a4L / Math.sqrt(oe));
		gF.beginPath(), gF.moveTo(this.a1m, this.a4L - ft * Math.sqrt(dn[b1.aBR - 1]));
		for (var eF = b1.aBR - 2; 0 <= eF; eF--) gF.lineTo(eF * this.a1m / (b1.aBR - 1), this.a4L - ft * Math.sqrt(dn[eF]));
		gF.stroke();
		fK = this.v7(dn, ft, .5);
		fK < .95 && gF.fillText(aY.jk.jl(oe), -this.q6, 0), .05 < Math.abs(fK - .5) && gF.fillText(aY.jk.jl(Math.floor(oe / 4)), -this.q6, Math.floor(this.a4L / 2)), .05 < fK && gF.fillText("0", -this.q6, this.a4L)
	}, this.aGw = function(fK, fL) {
		gF.setTransform(1, 0, 0, 1, fK + 2 * this.q6 + this.a1l, fL + this.wl + this.a37), gF.lineWidth = 2;
		var ft = this.a4L / Math.max(b1.max[this.fz], 1);
		gF.beginPath(), gF.moveTo(this.a1m, this.a4L - ft * b1.a0o[b1.aBR - 1]);
		for (var eF = b1.aBR - 2; 0 <= eF; eF--) gF.lineTo(eF * this.a1m / (b1.aBR - 1), this.a4L - ft * b1.a0o[eF]);
		gF.stroke();
		fK = this.v7(b1.a0o, ft, 1), fL = b1.max[this.fz] / 100;
		fK < .95 && gF.fillText(aY.jk.ta(fL, 2), -this.q6, 0), .05 < Math.abs(fK - .5) && gF.fillText(aY.jk.ta(fL / 2, 2), -this.q6, Math.floor(this.a4L / 2)), .05 < fK && gF.fillText(aY.jk.ta(0, 2), -this.q6, this.a4L)
	}, this.aGx = function(fK, fL) {
		gF.setTransform(1, 0, 0, 1, fK + .34 * this.g5, fL + 2 * this.wl + this.a37), aY.g0.textAlign(gF, 2);
		for (var a0D = this.gB - 4 * this.wl - this.a4d - this.a37, eF = 7; 0 <= eF; eF--) gF.fillText(b1.aGf[eF], 0, eF * a0D / 7);
		gF.setTransform(1, 0, 0, 1, fK + .39 * this.g5, fL + 2 * this.wl + this.a37), aY.g0.textAlign(gF, 0);
		fK = b1.eZ[1];
		for (gF.fillText(aY.jk.ta(b1.eZ[0] / (10 * (fK < 1 ? 1 : fK)), 1), 0, 0), eF = 6; 1 <= eF; eF--) gF.fillText(b1.eZ[eF].toString(), 0, eF * a0D / 7);
		gF.fillText(aY.jk.ta(100 * (1 - f1[eW] / b1.eZ[7]), 0), 0, a0D)
	}, this.aGy = function(fK, fL) {
		gF.setTransform(1, 0, 0, 1, fK + .79 * this.g5, fL + 2 * this.wl + this.a37), aY.g0.textAlign(gF, 2);
		var eF, a0D = this.gB - 4 * this.wl - this.a4d - this.a37;
		for (gF.fillStyle = aZ.kn, eF = 2; 0 <= eF; eF--) gF.fillText(b1.aGf[eF + 8], 0, eF * a0D / 9);
		for (gF.fillStyle = aZ.km, gF.fillText(b1.aGf[11], 0, 3 * a0D / 9), gF.fillStyle = aZ.l1, eF = 8; 4 <= eF; eF--) gF.fillText(b1.aGf[eF + 8], 0, eF * a0D / 9);
		gF.fillStyle = aZ.l0, gF.fillText(b1.aGf[17], 0, 9 * a0D / 9), gF.fillStyle = aZ.kn;
		var vj = aY.jk.jl(b1.eZ[8] + b1.eZ[9] + b1.eZ[10] + b1.eZ[11]),
			aGz = gF.measureText(vj).width,
			fK = (gF.setTransform(1, 0, 0, 1, fK + .83 * this.g5 + aGz, fL + 2 * this.wl + this.a37), gF.fillText(aY.jk.jl(b1.eZ[8]), 0, 0), gF.fillText(aY.jk.jl(b1.eZ[9]), 0, a0D / 9), gF.fillText(aY.jk.jl(b1.eZ[10]), 0, 2 * a0D / 9), gF
				.fillStyle = aZ.km, gF.fillText(vj, 0, 3 * a0D / 9), gF.fillStyle = aZ.l1, b1.eZ[13] - a4.a7I(eW)),
			aGz = (gF.fillText(aY.jk.jl(b1.eZ[12]), 0, 4 * a0D / 9), gF.fillText(aY.jk.jl(fK), 0, 5 * a0D / 9), gF.fillText(aY.jk.jl(b1.eZ[14]), 0, 6 * a0D / 9), gF.fillText(aY.jk.jl(b1.eZ[15]), 0, 7 * a0D / 9), gF.fillText(aY.jk.jl(b1.eZ[16]),
				0, 8 * a0D / 9), b1.eZ[12] + fK + b1.eZ[14] + b1.eZ[15] + b1.eZ[16] + b1.eZ[17]);
		gF.fillStyle = aZ.l0, gF.fillText(aY.jk.jl(aGz), 0, a0D), gF.fillStyle = aZ.gG
	}, this.v7 = function(dn, ft, yw) {
		var eF, dD, dp;
		return this.aGn < 0 || 1 < this.aGn ? .25 : (eF = this.aGn * (b1.aBR - 1), dp = dn[dD = Math.floor(eF)], dp += (eF - dD) * (dn[dD < b1.aBR - 1 ? dD + 1 : dD] - dp), gF.strokeStyle = aZ.kf, .04 < this.aGn && this.aH2(0, this.a4L - ft *
				Math.pow(dp, yw), eF * this.a1m / (b1.aBR - 1), this.a4L - ft * Math.pow(dp, yw)), .04 < dp / b1.max[this.fz] && this.aH2(eF * this.a1m / (b1.aBR - 1), this.a4L, eF * this.a1m / (b1.aBR - 1), this.a4L - ft * Math.pow(dp, yw)),
			gF.fillStyle = aZ.l3, gF.beginPath(), gF.arc(eF * this.a1m / (b1.aBR - 1), this.a4L - ft * Math.pow(dp, yw), Math.max(2, .014 * this.gB), 0, 2 * Math.PI), gF.fill(), dn = this.aGn * b3.a0q, dn = 0 === h3[eW] ? Math.floor(dn * u
				.a0x) : Math.floor(dn * b3.iL()), gF.fillStyle = aZ.gG, gF.fillText(1 === yw ? aY.jk.ta(dp / 100, 2) : aY.jk.jl(Math.floor(dp)), -this.q6, this.a4L - ft * Math.pow(dp, yw)), aY.g0.textAlign(gF, 1), gF.fillText(t.zY(dn), eF *
				this.a1m / (b1.aBR - 1), this.a4L + this.aGl - (b7.cv.fv() ? 2 : 0) - this.xQ), aY.g0.textAlign(gF, 2), ft * Math.pow(dp, yw) / this.a4L)
	}, this.aH2 = function(jc, jd, je, jf) {
		gF.beginPath(), gF.moveTo(jc, jd), gF.lineTo(je, jf), gF.stroke()
	}
}

function bI() {
	this.aH3 = "https://", this.aH4 = this.aH3 + "territorial.io/", this.aBS = this.aH4 + "changelog", this.aBX = this.aH4 + "terms", this.aH5 = this.aH4 + "cookie_policy", this.aBY = this.aH4 + "privacy", this.aBW = this.aH4 + "tutorial", this.aBV =
		this.aH4 + "players", this.aBT = this.aH4 + "clans", this.aBU = this.aH4 + "clan-results", this.a22 = this.aH3 + "play.google.com/store/apps/details?id=territorial.io", this.a23 = this.aH3 + "apps.apple.com/app/id1581110913", this.a24 = this
		.aH3 + "www.youtube.com/watch?v=toZTQ8aRdFc", this.a25 = this.aH3 + "discord.gg/pthqvpTXmh", this.a26 = this.aH3 + "www.instagram.com/davidtschacher/"
}

function cQ() {
	this.ix = new aH6, this.py = new aH7, this.cq = function() {
		this.ix.cq()
	}, this.i7 = function() {
		0 !== this.ix.wE && this.ix.wE--
	}
}

function aH7() {
	this.gE = function() {
		if (0 !== am.ix.wE && (gF.globalAlpha = Math.min(am.ix.wE / 580, 1), gF.drawImage(am.ix.aHA, 1 + p.jg(), 1 + p.gD()), gF.globalAlpha = 1, fc)) {
			var eF, jc = h7 / h8,
				jd = h9 / h8,
				je = (aK.g5 + h7) / h8,
				jf = (aK.gB + h9) / h8,
				ej = am.ix.aHB * h8,
				aHC = am.ix.aHC;
			for (eF = h2 - 1; 0 <= eF; eF--) ! function(eF, ej, jc, jd, je, jf, aHC) {
				0 === h3[eF] || 0 === f1[eF] || (je = aK.g5 * ((hv[eF] + hu[eF] + 1) / 2 - jc) / (je - jc) - .5 * ej, jc = aK.gB * ((hy[eF] + hx[eF] + 1) / 2 - jd) / (jf - jd) - .5 * ej, je > aK.g5) || jc > aK.gB || je < -ej || jc < -ej || (
					gF.setTransform(h8, 0, 0, h8, je, jc), gF.drawImage(aHC[hN ? b4.iN[eF] : 1], 0, 0))
			}(eF, ej, jc, jd, je, jf, aHC);
			gF.setTransform(h8, 0, 0, h8, 0, 0)
		}
	}
}

function aH6() {
	this.aHB = 28, this.wE = 0, this.aHA = null;
	var aHE = this.aHC = null;

	function aHH(gI, aHJ) {
		var fK, fL, fX, gu, uP = aY.g0.ok(gI, gI),
			gP = aY.g0.getContext(uP, !0),
			gL = aY.g0.getImageData(gP, gI, gI),
			ow = gL.data,
			oe = (gI >> 1) - .5,
			aHK = .5 + oe;
		for (aHK *= aHK, fL = 0; fL < gI; fL++)
			for (fK = 0; fK < gI; fK++) gu = (gu = fK - oe) * gu + (gu = fL - oe) * gu, ow[fX = 4 * (fL * gI + fK)] = aHJ[0], ow[1 + fX] = aHJ[1], ow[2 + fX] = aHJ[2], ow[3 + fX] = (aHK - gu) * aHJ[3] / aHK;
		return gP.putImageData(gL, 0, 0), uP
	}

	function aGb(eF, gP, uP, gI) {
		var fK;
		0 !== h3[eF] && 0 !== f1[eF] && (fK = hv[eF] + hu[eF] + 1 - gI - 2 >> 1, gI = hy[eF] + hx[eF] + 1 - gI - 2 >> 1, gP.drawImage(uP[hN ? b4.iN[eF] : eF < h2 ? 1 : 0], fK, gI))
	}
	this.cq = function() {
		var us;
		this.wE = 700,
			function(us) {
				var eF, gI = us.aHB;
				if (us.aHC = [], aHE = [], hN)
					for (eF = 0; eF <= tq; eF++) us.aHC.push(aHH(gI, b4.aHI[b4.r9[eF]])), aHE.push(aHH(gI >> 1, b4.aHI[b4.r9[eF]]));
				else us.aHC.push(aHH(gI, b4.aHI[0])), us.aHC.push(aHH(gI, b4.aHI[4])), aHE.push(aHH(gI >> 1, b4.aHI[0]))
			}(this),
			function(us, aHL) {
				var eF, aHA = us.aHA,
					gP = aY.g0.getContext(aHA, !0),
					eb = ef,
					gI = us.aHB >> 1;
				gP.imageSmoothingEnabled = !1, gP.setTransform(1, 0, 0, 1, 0, 0), aHL && gP.clearRect(0, 0, aHA.width, aHA.height);
				for (eF = h2; eF < eb; eF++) aGb(eF, gP, aHE, gI)
			}(this, null !== (us = this).aHA && us.aHA.width === ap.eA - 2 && us.aHA.height === ap.eB - 2 || (us.aHA = aY.g0.ok(ap.eA - 2, ap.eB - 2), !1))
	}, this.tk = function() {
		for (var eb = h2, gI = this.aHB, aHC = this.aHC, gP = aY.g0.getContext(this.aHA, !0), eF = 0; eF < eb; eF++) aGb(eF, gP, aHC, gI)
	}
}

function cR() {
	this.aHM = -1, this.cq = function() {
		this.aHM = -1
	}, this.i7 = function() {
		-1 !== this.aHM && ao.qh.qp(this.aHM)
	}, this.lt = function(player) {
		return !!j.v6(player) && (1 === iO ? (this.aHM = player, io && fc && mZ.i7()) : (k.qn(player, player === eW ? 21 : 22), 8 === il ? this.aHM = 1 - player : io ? (a6I(player), a90(), fc && mZ.i7()) : this.aHN(player)), !0)
	}, this.mW = function(player) {
		1 === qw && 0 !== h3[player] && 2 !== h4[player] && (8 === il ? this.aHM = 1 - player : this.aHN(player)), k.qn(player, 4)
	}, this.aHN = function(player) {
		fc ? (a6I(player), a90()) : aQ.a8w(player)
	}
}

function cc() {
	this.a3t = ["rgba(130,130,130,0.88)", "rgba(130,12,12,0.88)", "rgba(12,130,12,0.88)", "rgba(12,12,130,0.88)", "rgba(130,130,12,0.88)", "rgba(130,12,130,0.88)", "rgba(12,130,130,0.88)", "rgba(130,130,130,0.88)", "rgba(0,0,0,0.88)"], this.a0C = [aZ
		.gG, "rgb(255,120,120)", "rgb(0,230,0)", "rgb(150,150,255)", "rgb(240,240,25)", "rgb(255,70,255)", "rgb(25,240,240)", aZ.gG, "rgb(170,170,170)"
	], this.aHO = [aZ.gG, "rgb(255,0,0)", "rgb(0,255,0)", "rgb(0,0,255)", "rgb(255,255,0)", "rgb(255,0,255)", "rgb(0,255,255)", aZ.gG, aZ.ji], this.aHP = [aZ.ji, aZ.gG, aZ.gG, aZ.gG, aZ.ji, aZ.ji, aZ.ji, aZ.ji, aZ.gG];
	var aHQ = ["255,255,255", "0,0,0", "255,4,4", "200,4,4", "4,255,4", "4,180,4", "255,195,195", "90,3,3", "200,255,200", "3,84,3"],
		aHR = (this.a8R = ["rgba(" + aHQ[0] + ",", "rgba(" + aHQ[1] + ",", "rgba(" + aHQ[2] + ",", "rgba(" + aHQ[3] + ",", "rgba(" + aHQ[4] + ",", "rgba(" + aHQ[5] + ",", "rgba(" + aHQ[6] + ",", "rgba(" + aHQ[7] + ",", "rgba(" + aHQ[8] + ",",
			"rgba(" + aHQ[9] + ","
		], this.a8S = ["rgb(" + aHQ[0] + ")", "rgb(" + aHQ[1] + ")", "rgb(" + aHQ[2] + ")", "rgb(" + aHQ[3] + ")", "rgb(" + aHQ[4] + ")", "rgb(" + aHQ[5] + ")", "rgb(" + aHQ[6] + ")", "rgb(" + aHQ[7] + ")", "rgb(" + aHQ[8] + ")", "rgb(" + aHQ[
			9] + ")"
		], this.fu = ["White", "Red", "Green", "Blue", "Yellow", "Magenta", "Cyan", "White", "Black"], this.aHI = [
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
	this.r9 = [0, 1, 2, 3, 4, 5, 6, 7, 8], this.iN = new Uint8Array(ef), this.rH = null, this.rI = null, this.cq = function(qA) {
		this.iN.fill(0), this.aHS(), hN && (aU.ii && aU.ij.a71 ? this.a5b() : 9 === il ? this.aHT() : this.i7(qA))
	}, this.a5b = function() {
		var eF, eb = pS;
		for (this.r9 = [0, 1, 2, 3, 4, 5, 6, 7, 8], eF = 0; eF < eb; eF++) this.iN[eF] = aU.ij.a71[eF]
	}, this.aHS = function() {
		for (var eF = this.r9.length - 1; 0 <= eF; eF--) this.r9[eF] = eF;
		this.rH = [], this.rI = []
	}, this.aHT = function() {
		for (var eF = h2 + aM.a8n - 1; 0 <= eF; eF--) this.iN[eF] = 1;
		for (eF = h2 + aM.a8n; eF < ef; eF++) this.iN[eF] = 2;
		this.r9[1] = 7, this.r9[2] = 8
	}, this.i7 = function(qA) {
		var gb = new Uint8Array(h2),
			gc = new Uint8Array(h2),
			aHU = new Uint16Array(8),
			aHV = new Uint16Array(this.r9.length);
		this.aHW(qA, gb, gc, aHU), this.a5Z(aHU), io || this.aHX(aHV, gb, gc), this.aHY(gb, gc, aHV), io ? this.aHZ() : this.aHa()
	}, this.aHW = function(qA, gb, gc, aHb) {
		for (var hj, dD, aHc, eb = this.r9.length - 1, dn = new Uint16Array(eb), eF = h2 - 1; 0 <= eF; eF--) {
			for (hj = eb; 1 <= hj; hj--) dn[hj - 1] = Math.abs(4 * qA[eF].a4Z[0] - aHR[hj][0]) + Math.abs(4 * qA[eF].a4Z[1] - aHR[hj][1]) + Math.abs(4 * qA[eF].a4Z[2] - aHR[hj][2]);
			for (aHc = 768, hj = eb - 1; 0 <= hj; hj--) dn[dD = (hj + eF) % eb] < aHc && (aHc = dn[dD], gb[eF] = dD);
			for (aHb[gb[eF]] += 4, aHc = 768, hj = eb - 1; 0 <= hj; hj--) dn[dD = (hj + eF) % eb] < aHc && dD !== gb[eF] && (aHc = dn[dD], gc[eF] = dD);
			aHb[gc[eF]]++
		}
	}, this.a5Z = function(aHb) {
		for (var hj, uN, eb = this.r9.length - 1, eF = eb; 0 <= eF; eF--) this.r9[eF] = eF;
		for (eF = eb - 1; 0 <= eF; eF--) aHb[eF]++;
		for (eF = 1; eF <= eb; eF++) {
			for (uN = 0, hj = 1; hj < eb; hj++) aHb[hj] > aHb[uN] && (uN = hj);
			aHb[uN] = 0, this.r9[eF] = uN + 1
		}
	}, this.aHX = function(aHV, gb, gc) {
		var eF, hj, aHd, iM, ek, dD, kH, tD, aHe = this.r9.length - 1,
			aHf = new Uint16Array(aHe),
			aHg = [],
			wl = Math.max(h2 + 1 >> 1, 6);
		loop: for (eF = 0; eF < h2; eF++)
			if (null !== (aHd = aY.jk.td(wC[eF]))) {
				for (hj = this.rH.length - 1; 0 <= hj; hj--)
					if (aHd === this.rH[hj] && this.rI[hj].length < wl) {
						this.rI[hj].push(eF);
						continue loop
					} this.rH.push(aHd), aHg.push(!1), this.rI.push([eF])
			}
		for (hj = this.rH.length - 1; 0 <= hj; hj--) {
			for (ek = -1, iM = this.rH.length - 1; 0 <= iM; iM--) !aHg[iM] && (-1 === ek || this.rI[iM].length > this.rI[ek].length) && (ek = iM);
			for (iM = aHe - 1; 0 <= iM; iM--) aHf[iM] = 1;
			for (iM = this.rI[ek].length - 1; 0 <= iM; iM--) aHf[gb[this.rI[ek][iM]]] += 3, aHf[gc[this.rI[ek][iM]]]++;
			for (eF = aHe - 1; 0 <= eF; eF--) {
				for (dD = ek % aHe, iM = aHe - 1; 0 <= iM; iM--) aHf[iM] > aHf[dD] && (dD = iM);
				for (kH = -1, iM = tq; 0 < iM; iM--)
					if (this.r9[iM] === dD + 1) {
						kH = iM;
						break
					} if (aHf[dD] = 0, -1 !== kH) {
					for (tD = 0, iM = tq; 0 < iM; iM--) aHV[kH] > aHV[iM] && tD++;
					if (tD !== tq - 1) {
						for (iM = this.rI[ek].length - 1; 0 <= iM; iM--) aHV[kH]++, this.iN[this.rI[ek][iM]] = kH;
						break
					}
				}
			}
			aHg[ek] = !0
		}
	}, this.aHY = function(gb, gc, aHV) {
		for (var eF, gt, eb = this.r9.length - 1, border = eT(h2, tq), aHh = (0 < h2 % tq && border++, new Uint8Array(1 + eb)), hj = eb; 1 <= hj; hj--) aHh[this.r9[hj]] = hj;
		for (eF = 0; eF < h2; eF++) gt = aHh[gb[eF] + 1], 0 === this.iN[eF] && gt <= tq && aHV[gt] < border && (aHV[gt]++, this.iN[eF] = gt);
		for (eF = 0; eF < h2; eF++) gt = aHh[gc[eF] + 1], 0 === this.iN[eF] && gt <= tq && aHV[gt] < border && (aHV[gt]++, this.iN[eF] = gt);
		for (hj = tq; 1 <= hj; hj--)
			for (eF = h2 - 1; 0 <= eF && !(aHV[hj] >= border); eF--) 0 === this.iN[eF] && (aHV[hj]++, this.iN[eF] = hj)
	}, this.aHZ = function() {
		var eF, ha, aHb = new Uint16Array(tq);
		for (aHb[tq - 1] = ef, eF = tq - 2; 0 <= eF; eF--) aHb[eF] = z.ip[eF].vw;
		for (aHb[0]--, ha = 0 === aHb[0] ? 1 : 0, eF = h2; eF < ef; eF++) this.iN[eF] = ha + 1, aHb[ha]--, aHb[ha] <= 0 && ha++
	}, this.aHa = function() {
		for (var eF = h2; eF < ef; eF++) this.iN[eF] = 1 + eF % tq
	}
}

function f2() {
	for (var fK, fL, eF = e1 - 1; 0 <= eF; eF--) fK = eT(e3[eF], 4) % ap.eA, fL = eT(e3[eF], 4 * ap.eA), hv[dx] = hv[dx] > fK ? fK : hv[dx], hy[dx] = hy[dx] > fL ? fL : hy[dx], hu[dx] = hu[dx] < fK ? fK : hu[dx], hx[dx] = hx[dx] < fL ? fL : hx[dx]
}

function eK() {
	var ek, ei, eF, eb = ec[dx].length;
	loop: for (eF = eb - 1; 0 <= eF; eF--) {
		for (ek = 3; 0 <= ek; ek--)
			if (ei = ec[dx][eF] + e6[ek], a2.en(ei) || a2.el(ei) && a2.em(ei) !== dx) {
				a2.hX(ec[dx][eF], dx);
				continue loop
			} ec[dx][eF] = ec[dx][eb - 1], ec[dx].pop(), eb--
	}
}

function eL() {
	var ek, ei, aHi, aHj, eb = et[dx].length;
	loop: for (var eF = eb - 1; 0 <= eF; eF--) {
		for (aHi = aHj = !1, ek = 3; 0 <= ek; ek--) {
			if (ei = et[dx][eF] + e6[ek], a2.a5l(ei, dx)) continue loop;
			aHi = aHi || a2.fj(ei), aHj = aHj || a2.p6(ei)
		}
		aHi ? eu[dx].push(et[dx][eF]) : aHj ? ex[dx].push(et[dx][eF]) : a2.pl(et[dx][eF], dx), et[dx][eF] = et[dx][eb - 1], et[dx].pop(), eb--
	}
}

function er() {
	f1[e0] -= e1
}

function es(border) {
	for (var eb = border.length, eF = eb - 1; 0 <= eF; eF--) a2.pt(e0, border[eF]) || (border[eF] = border[eb - 1], border.pop(), eb--)
}

function ev(border) {
	for (var eb = border.length, eF = eb - 1; 0 <= eF; eF--) !a2.pt(e0, border[eF]) && a2.ed(border[eF]) && (border[eF] = border[eb - 1], border.pop(), eb--)
}

function ew(border) {
	for (var ek, ei, eb = border.length, eF = eb - 1; 0 <= eF; eF--)
		for (ek = 3; 0 <= ek; ek--)
			if (ei = border[eF] + e6[ek], a2.a5l(ei, e0)) {
				et[e0].push(border[eF]), border[eF] = border[eb - 1], border.pop(), eb--;
				break
			}
}

function ey() {
	for (var ek, ei, eF = e1 - 1; 0 <= eF; eF--)
		for (ek = 3; 0 <= ek; ek--) ei = e3[eF] + e6[ek], a2.a5m(e0, ei) && a2.a5n(ei) && (et[e0].push(ei), a2.ee(ei, e0))
}

function ez() {
	var fK, fL;
	loop: for (; hy[e0] < hx[e0];) {
		for (fK = hu[e0]; fK >= hv[e0]; fK--)
			if (a2.pt(e0, 4 * (hy[e0] * ap.eA + fK))) break loop;
		hy[e0]++
	}
	loop: for (; hy[e0] < hx[e0];) {
		for (fK = hu[e0]; fK >= hv[e0]; fK--)
			if (a2.pt(e0, 4 * (hx[e0] * ap.eA + fK))) break loop;
		hx[e0]--
	}
	loop: for (; hv[e0] < hu[e0];) {
		for (fL = hx[e0]; fL >= hy[e0]; fL--)
			if (a2.pt(e0, 4 * (fL * ap.eA + hv[e0]))) break loop;
		hv[e0]++
	}
	loop: for (; hv[e0] < hu[e0];) {
		for (fL = hx[e0]; fL >= hy[e0]; fL--)
			if (a2.pt(e0, 4 * (fL * ap.eA + hu[e0]))) break loop;
		hu[e0]--
	}
}

function fr(player, hT) {
	return 0 === b4.iN[player] || b4.iN[player] !== b4.iN[hT]
}

function fp(player, hT) {
	for (var dD, aHk = a4.eG(player), eF = 0; eF < aHk; eF++)
		if (0 === a4.eH(player, eF))
			if ((dD = a4.eM(player, eF)) === ef) {
				if (hT === ef) return !1;
				if (fn(hT)) return !0
			} else if (hT === ef) {
		if (fn(dD)) return !0
	} else if (fs(hT, dD)) return !0;
	return !1
}

function fn(player) {
	for (var eF, ej, eb = et[player].length, ek = 3; 0 <= ek; ek--)
		for (ej = e6[ek], eF = 0; eF < eb; eF++)
			if (a2.en(et[player][eF] + ej)) return !0;
	return !1
}

function fs(tI, tJ) {
	var eF, db, ek, ej, ei, aDg = et[tI].length,
		aFd = et[tJ].length;
	for (aFd < aDg && (db = tI, tI = tJ, tJ = db, db = aDg, aDg = aFd, 0), ek = 3; 0 <= ek; ek--)
		for (ej = e6[ek], eF = 0; eF < aDg; eF++)
			if (ei = et[tI][eF] + ej, a2.el(ei) && a2.em(ei) === tJ) return !0;
	return !1
}

function aHl() {
	this.i7 = function() {
		at.dH.dX(), l.i7(), w.i7(), aK.i7(), aN.ix.i7(), aJ.a3N(), b6.i7(), b8.a3k.i7(), b3.d1 && (b3.d1 = !1, x.gE())
	}
}

function aHm() {
	this.da = b3.da, this.fz = 0, this.aHn = 0, this.a3I = 0, this.aHo = null, this.aHp = 7, this.wF = 0, this.cq = function() {
		this.a3I = 0, this.aHo = [], this.fz = 0, this.aHn = 0
	}, this.aCV = function(mI) {
		var eF;
		if (fc) this.a0r(mI);
		else if (this.aHo.push(mI), 2 === qw) {
			for (eF = 0; eF < this.aHo.length; eF++) aW.lV.i7(this.aHo[eF]);
			this.aHo = []
		}
	}, this.a0r = function(mI) {
		aW.lV.i7(mI), aX.i7(), t.a0r(this.a3I), this.a3I === tr ? (mZ.i7(), this.a3I = 0, this.fz = 0, this.aHn = 0, this.da = b3.da) : (this.a3I++, a6.tj(), a6.j6(!0), ay.a17())
	}, this.i7 = function() {
		aK.i7(), fc ? (b3.d1 = t.a0r(-1) || b3.d1, j7()) : (0 !== this.fz || b3.da >= this.da && (this.da += b3.a0q * Math.floor(1 + (b3.da - this.da) / b3.a0q), 2 === qw ? iv() : this.aHq(), this.fz++, 27 < b3.da - this.wF)) && this.aHr(), j3(),
			b3.d1 && (b3.d1 = !1, pw()), this.wF = b3.da
	}, this.aHr = function() {
		b3.d1 = !0, j5(), this.fz = 0
	}, this.aHq = function() {
		var aHs, eF;
		if (this.aHn !== 7 * this.a3I) j0(), ay.a17();
		else {
			for (aHs = !1; this.aHt() && (aHs = !0, j0(), 0 < this.aHo.length);)
				for (eF = this.aHp - 2; 0 <= eF; eF--) j0();
			aHs ? ay.a17() : (iv(), ay.tm())
		}
	}, this.aHt = function() {
		return 0 < this.aHo.length && (this.a3I++, aW.lV.i7(this.aHo[0]), this.aHo.shift(), !0)
	}
}

function aHu() {
	var aHv, aHw, aHx, a3I, aHy, fz = 0,
		da = b3.da;

	function aI1() {
		! function() {
			if (!fc) return;
			if (io) return;
			return aHy % 7 != 0 ? aHy++ : a3I === tr ? (aI4(), t.a0r(a3I), mZ.i7()) : (aI4(), aHy++, a3I++, a6.tj(), a6.j6(!0)), 1
		}() && (aI4(), j0())
	}

	function aI2() {
		fz = 0, (fc ? (b3.d1 = t.a0r(a3I - (aHy % 7 == 0 ? 0 : 1) + aHy % 7 / 7) || b3.d1, j7) : j.fO || !aa.uz ? j7 : (b3.d1 = !0, j5))()
	}

	function aI4() {
		var eF, eb, aI5 = aX.mX.aD7,
			dp = aX.mX.aD8,
			dr = aX.mX.aD9,
			dt = aX.mX.aDA,
			aI6 = aX.mX.aDB,
			aI7 = aX.mX.aDC;
		if (aHv >= aI7.length) k.rs("Replay file smaller than expected."), ao.qh.qp(-1);
		else if (aI7 = aI7[aHv], aI6[aHv]) {
			for (eb = aHw + aI7, eF = aHw; eF < eb; eF++) aW.lV.mK(aI5[eF], dp[eF], dr[eF], dt[eF]);
			aHw += aI7, aHv++
		} else ++aHx >= aI7 && (aHv++, aHx = 0)
	}
	this.aHn = 0, this.cq = function() {
		aHy = a3I = aHx = aHw = aHv = 0
	}, this.i7 = function() {
		var aG0;
		aK.i7(), aa.yF() < 1.7 ? 0 === fz ? b3.da >= da && (aG0 = b3.a0q / aa.yF(), da += aG0 * Math.floor(1 + (b3.da - da) / aG0), 2 === qw || j.fO || !aa.uz ? iv() : (aI1(), ay.a17()), fz++) : aI2() : function() {
			var aG0;
			if (b3.da >= da)
				if (2 === qw || j.fO || !aa.uz) iv(), da = b3.da;
				else {
					for (aG0 = b3.a0q / aa.yF(), 16 < (b3.da - da) / aG0 && (da = b3.da - 16 * aG0); b3.da >= da && 2 !== qw;) da += aG0, aI1();
					ay.a17()
				} aI2()
		}(), j3(), b3.d1 && (b3.d1 = !1, pw())
	}, this.r3 = function() {
		aHv !== aX.mX.aDC.length && k.rs("Replay file larger than expected.")
	}
}

function aI8() {
	var fz = 0,
		da = b3.da;
	this.aHn = 0, this.i7 = function() {
		aK.i7(), fc ? j7() : 0 === fz ? b3.da >= da && (da += b3.a0q * Math.floor(1 + (b3.da - da) / b3.a0q), 2 === qw || j.fO ? iv() : (j0(), ay.a17()), fz++) : ((j.fO ? j7 : (b3.d1 = !0, j5))(), fz = 0), j3(), b3.d1 && (b3.d1 = !1, pw())
	}
}

function ck() {
	this.r2 = null, this.d1 = !1, this.da = 0, this.a0q = 56;
	var aI9 = 0;

	function aIA() {
		b3.da = aI9 = performance.now(), b3.r2.i7(), window.requestAnimationFrame(aIA)
	}
	this.cq = function() {
		this.uB(), window.requestAnimationFrame(aIA), this.da = performance.now()
	}, this.u8 = function() {
		fN ? (this.r2 = new aHu, this.r2.cq()) : io ? this.r2 = new aI8 : (this.r2 = new aHm, this.r2.cq())
	}, this.uB = function() {
		this.r2 = new aHl, this.d1 = !0
	}, this.i7 = function() {
		this.r2.aHn++
	}, this.iL = function() {
		return this.r2.aHn
	}, this.aCK = function() {
		var db = performance.now();
		db < aI9 + 1e3 || (this.da = db, this.r2.i7())
	}
}

function c6() {
	var jy = 0,
		aIB = !0;

	function aID(fy) {
		8 !== x.dY() || 2 !== h4[eW] && (0 !== h3[eW] || fc) || k.vr(fy)
	}
	this.i7 = function() {
		var db, wI;
		b3.da > jy && (jy = b3.da + 2500, db = new Date, wI = db.getUTCSeconds(), aIB ? wI < 45 && (aIB = !1) : wI < 45 || (aIB = !0, (wI = db.getUTCMinutes() + 1) % 15 == 0 && aID(30 === wI ? "Upcoming Battle Royale Contest!" :
			"Upcoming Alliance Contest!")))
	}
}

function by() {
	var jc, jd, je, jf, aIE = 0,
		aIF = 0;

	function aIH() {
		return Math.pow(Math.pow(je - jc, 2) + Math.pow(jf - jd, 2), .5)
	}

	function aIG(dD) {
		jc = aK.nA * dD.touches[0].clientX, jd = aK.nA * dD.touches[0].clientY, je = aK.nA * dD.touches[1].clientX, jf = aK.nA * dD.touches[1].clientY
	}
	this.sE = function(dD) {
		return 1 < dD.touches.length ? (aIF = b3.da, aIE = 3, aIG(dD), i.np(), !0) : (aIE = 0, !1)
	}, this.sF = function(dD) {
		var a9h, gr, gs;
		return 0 !== qw && 1 < dD.touches.length && (aIE = Math.max(aIE - 1, 0), f.kM() && (a9h = aIH(), aIG(dD), dD = aIH(), gr = Math.floor((jc + je) / 2), gs = Math.floor((jd + jf) / 2), p.yg(gr, gs, Math.max(.125, dD) / Math.max(.125, a9h)),
			b3.d1 = !0), !0)
	}, this.sd = function() {
		var fK, fL;
		return !!(aIE && (aIE = 0, b3.da < aIF + 500)) && (fK = (jc + je) / 2, fL = (jd + jf) / 2, i.sW(fK, fL), i.click(fK, fL, !0) && (b3.d1 = !0), !0)
	}
}

function cJ() {
	this.size = 0, this.fz = 0, this.mI = null, this.cq = function(mI) {
		this.fz = 0, this.mI = mI, this.size = mI.length
	}, this.s0 = function() {
		this.mI = null
	}, this.mJ = function(size) {
		for (var dd = 0, mI = this.mI, kM = this.fz + size - 1, eF = this.fz; eF <= kM; eF++) dd |= (mI[eF >> 3] >> 7 - (7 & eF) & 1) << kM - eF;
		return this.fz += size, this.fz > 8 * this.size && console.log("error unwrapper"), dd
	}, this.aBs = function(size) {
		for (var dn = new Array(size), eF = 0; eF < size; eF++) dn[eF] = this.mJ(10);
		return h.oc(dn)
	}, this.aII = function(aDX) {
		return this.size === ab.aIJ(aDX)
	}
}

function cf() {
	this.aEM = 0, this.aEN = 0, this.aEI = 0, this.aEJ = 0, this.aEK = 0, this.aEL = 0, this.a18 = [0, 0, 0, 0], this.kL = function() {
		this.aEM = p.jg(), this.aEN = p.gD(), this.aEI = -this.aEM, this.aEJ = -this.aEN, this.aEK = aK.g5 / h8, this.aEL = aK.gB / h8, this.a18[0] = Math.floor(this.aEI), this.a18[1] = Math.floor(this.aEJ), this.a18[2] = Math.floor(this.a18[0] +
			this.aEK + 1), this.a18[3] = Math.floor(this.a18[1] + this.aEL + 1), ay.a15 = !0
	}
}

function bz() {
	var xM, jy;
	this.cq = function() {
		xM = 1, jy = 0
	}, this.i7 = function() {
		0 < xM && (jy = 0 === jy ? b3.da + 16 : jy, xM = (xM -= .001 * (b3.da - jy)) < 0 ? 0 : xM, jy = b3.da, b3.d1 = !0)
	}, this.gE = function() {
		0 < xM && (gF.fillStyle = "rgba(0,0,0," + xM + ")", gF.fillRect(0, 0, aK.g5, aK.gB))
	}
}

function c2() {
	function aIN(map, fK, fL, g5, gB) {
		map >= ap.a6v || (ap.pG === map && (gF.fillStyle = aZ.lA, gF.fillRect(fK, fL, g5, gB), gF.fillStyle = aZ.gG), gF.strokeRect(fK, fL, g5, gB), gF.fillText(ap.ij.pF[map].name, Math.floor(fK + .5 * g5), Math.floor(fL + .55 * gB)))
	}
	this.dZ = !1, this.a4M = [0, 0, 0, 0], this.show = function() {
		this.dZ = !0, this.resize(), b3.d1 = !0
	}, this.resize = function() {
		var aDg = eT(ap.a6v + ap.a6v % 2, 2),
			aDg = aK.gB - aDg * b0.gap;
		b7.cv.fv() ? this.a4M[2] = Math.floor(.75 * aK.min) : this.a4M[2] = Math.floor(.5 * aK.min), this.a4M[3] = Math.floor(1.25 * this.a4M[2]), this.a4M[3] > aDg && (this.a4M[3] = aDg, this.a4M[2] = Math.floor(aDg / 1.2)), this.a4M[0] = Math
			.floor((aK.g5 - this.a4M[2]) / 2), this.a4M[1] = Math.floor((aK.gB - this.a4M[3]) / 2)
	}, this.sA = function(fK, fL) {
		return !(fK < this.a4M[0] || fL < this.a4M[1] || fK > this.a4M[0] + this.a4M[2] || fL > this.a4M[1] + this.a4M[3])
	}, this.g8 = function(fK, fL) {
		var wl, aDg = eT(ap.a6v + ap.a6v % 2, 2);
		return b3.d1 = !0, fK < this.a4M[0] || fL < this.a4M[1] || fK > this.a4M[0] + this.a4M[2] || fL > this.a4M[1] + this.a4M[3] ? !(this.dZ = !1) : (wl = Math.floor(.17 * this.a4M[3]), fL < this.a4M[1] + wl ? fK > this.a4M[0] + this.a4M[2] -
			wl && (this.dZ = !1) : (fL = (fL = Math.floor(aDg * (fL - this.a4M[1] - wl - .00576 * aK.fw) / (this.a4M[3] - wl - .01152 * aK.fw))) < 0 ? 0 : aDg - 1 < fL ? aDg - 1 : fL, fK > this.a4M[0] + this.a4M[2] / 2 && (fL += aDg), fL >=
				ap.a6v || ap.d2(fL, Math.floor(16384 * Math.random()))), !0)
	}, this.gE = function() {
		var eF, jd, wl = Math.floor(.17 * this.a4M[3]),
			aDg = eT(ap.a6v + ap.a6v % 2, 2),
			gap = .6 * .01152 * aK.fw,
			a4d = (this.a4M[3] - wl - (aDg + 1) * gap) / aDg,
			q6 = Math.floor((this.a4M[2] - 3 * gap) / 2);
		for (gF.lineWidth = b0.uC, aY.g0.textAlign(gF, 1), aY.g0.textBaseline(gF, 1), gF.fillStyle = aZ.ka, gF.fillRect(this.a4M[0], this.a4M[1] + wl, this.a4M[2], this.a4M[3] - wl), gF.fillStyle = aZ.lA, gF.fillRect(this.a4M[0], this.a4M[1],
				this.a4M[2], wl), gF.strokeStyle = aZ.gG, gF.strokeRect(this.a4M[0], this.a4M[1], this.a4M[2], this.a4M[3]), gF.fillStyle = aZ.gG, gF.fillRect(this.a4M[0], this.a4M[1] + wl, this.a4M[2], 2), gF.font = aY.g0.g1(1, .48 * wl), gF
			.fillText("Maps", Math.floor(this.a4M[0] + this.a4M[2] / 2), Math.floor(this.a4M[1] + .55 * wl)), gF.font = aY.g0.g1(1, .48 * a4d), eF = aDg - 1; 0 <= eF; eF--) jd = Math.floor(this.a4M[1] + wl + gap + eF * (a4d + gap)), aIN(eF, this
			.a4M[0] + gap, jd, q6, a4d), aIN(eF + aDg, this.a4M[0] + q6 + 2 * gap, jd, q6, a4d);
		j.v7(Math.floor(this.a4M[0] + this.a4M[2] - .7 * wl), Math.floor(this.a4M[1] + .3 * wl), Math.floor(.4 * wl)), gF.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function cH() {
	this.size = 0, this.fz = 0, this.mI = null, this.cq = function(mI) {
		this.fz = 0, this.mI = mI, this.size = mI.length
	}, this.d2 = function(aDX) {
		return this.cq(new Uint8Array(this.aIJ(aDX))), this.mI
	}, this.s0 = function() {
		this.mI = null
	}, this.oZ = function(size, wK) {
		for (var mI = this.mI, kM = this.fz + size - 1, eF = this.fz; eF <= kM; eF++) mI[eF >> 3] |= (wK >> kM - eF & 1) << 7 - (7 & eF);
		this.fz += size, this.fz > 8 * this.size && console.log("error wrapper")
	}, this.aIO = function(size) {
		for (var mI = this.mI, kM = this.fz + size, eF = this.fz; eF < kM; eF++) mI[eF >> 3] &= 255 ^ 128 >>> (7 & eF)
	}, this.aIJ = function(aDX) {
		return aDX + 7 >> 3
	}, this.aIP = function(dn, hc, kM, aIQ) {
		for (var eF = hc; eF < kM; eF++) this.oZ(aIQ, dn[eF])
	}
}
setTimeout(bD, 1e4), window.onload = function() {
	bD()
};