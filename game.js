var a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, aA, aB, aC, aD, aE, aF, aG, aH, aI, aJ, aK, aL, aM, aN, aO, aP, aQ, aR, aS, aT, aU, aV, aW, aX, aY, aZ, aa, ab, ac, ad, ae, af,
	ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, at, au, av, aw, ax, ay, az, b0, b1, b2, b3, b4, b5, b6, b7, b8, b9, bA, bB, bC, d6, d7, d8, d9, dA, dB, dx, dy, dz, e0, e1, e2, e3, e4, e5, e6, e7, e8, e9, hh, hf, hg, hP;

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
		d6 = 2, d8 = 18, d7 = "1 Apr 2024 (1.93.8)", d9 = 0 <= window.location.hostname.toLowerCase().indexOf("territorial.io"), dB = function() {
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
	var dN = !1,
		dO = 0;

	function dQ(dX) {
		console.log("Video Ad Completed: " + dX)
	}

	function dP() {
		return 0 === b7.id && d9
	}

	function dW() {
		return dP() && void 0 !== aiptag.adplayer && aiptag.adplayer.startVideoAd && aipAPItag.showCMPButton && aipAPItag.hideCMPButton && (0 === dO && (dO = b3.db), b3.db > dO + 500)
	}
	this.cq = function() {
		var dT;
		dP() && (dN = !0, window.aiptag = window.aiptag || {
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
	}, this.dY = function() {
		dW() && (dN ? 0 === x.dZ() && !ar.da() || (dN = !1, aipAPItag.hideCMPButton()) : 0 !== x.dZ() || ar.da() || (dN = !0, aipAPItag.showCMPButton()))
	}, this.showCMPScreen = function() {
		dW() && aipAPItag.showCMPScreen()
	}
}

function dL() {
	var db = 2e4;
	this.show = function() {
		if (b3.db < db) return !1;
		db = b3.db + 135e4, b7.cv.dd(Math.floor(135e4))
	}
}

function cP() {
	this.dh = new Uint16Array(2), this.di = new Uint32Array(2), this.dj = new Uint8Array(4), this.dk = new Uint8Array(4), this.dl = new Uint32Array(5), this.dm = new Uint32Array(8), this.dn = function(dp, dq) {
		return dp[0] = dq, dp
	}, this.dr = function(dp, dq, ds) {
		return dp[0] = dq, dp[1] = ds, dp
	}, this.dt = function(dp, dq, ds, du) {
		return dp[0] = dq, dp[1] = ds, dp[2] = du, dp
	}, this.dv = function(dp, dq, ds, du, dw) {
		return dp[0] = dq, dp[1] = ds, dp[2] = du, dp[3] = dw, dp
	}
}

function eA() {
	e2 = 0, e3 = 2048, e4 = new Uint32Array(4 * e3), e5 = 0, e6 = new Uint32Array(e3), (e7 = new Int32Array(4))[0] = -4 * ap.eB, e7[1] = 4, e7[2] = -e7[0], e7[3] = -e7[1], e8 = new Uint8Array(ap.eB * ap.eC)
}

function eD(player) {
	dy = player, e9 = !1, eE(), eF();
	for (var eG = a4.eH(dy) - 1; 0 <= eG; eG--) 0 === a4.eI(dy, eG) && (dx = eG, eJ());
	e9 && eK()
}

function eK() {
	eL(), eM()
}

function eJ() {
	e1 = a4.eN(dy, dx), dz = a4.eO(dy, dx), eP(), (0 !== e2 && (eR(), eS()) ? eT : eQ)()
}

function eS() {
	return e0 = eU(dz, e2), eV < e0
}

function eR() {
	for (var eG = e2 - 1; 0 <= eG; eG--) e8[eU(e4[eG], 4)] = 0
}

function eQ() {
	var dc;
	1 === a4.eH(dy) && c.eW(dy), dy !== eX ? (eY[dy] += dz, a5.eZ(dy)) : (dc = eY[dy], eY[dy] += dz, a5.eZ(dy), b1.ea[13] -= eY[dy] - dc), a4.eb(dy, dx)
}

function eE() {
	var eG, ec = ed[dy].length;
	for (e5 = 0, eG = (e3 < ec ? e3 : ec) - 1; 0 <= eG; eG--) e6[e5++] = ed[dy][eG]
}

function eF() {
	for (var eG = ed[dy].length - 1; 0 <= eG; eG--) a2.ee(ed[dy][eG]) && a2.ef(ed[dy][eG], dy);
	ed[dy] = []
}

function eP() {
	e2 = 0, (e1 === eg ? eh : ei)()
}

function ei() {
	for (var ej, ek, eG, el = 3; 0 <= el; el--)
		for (eG = e5 - 1; 0 <= eG; eG--) ek = eU(ej = e6[eG] + e7[el], 4), 0 === e8[ek] && a2.em(ej) && a2.en(ej) === e1 && (e8[ek] = 1, e4[e2++] = ej)
}

function eh() {
	for (var ej, ek, eG, el = 3; 0 <= el; el--)
		for (eG = e5 - 1; 0 <= eG; eG--) ek = eU(ej = e6[eG] + e7[el], 4), 0 === e8[ek] && a2.eo(ej) && (e8[ek] = 1, e4[e2++] = ej)
}

function eT() {
	ep() ? (eq(), e1 !== eg && er()) : eQ()
}

function er() {
	es(), et(eu[e1]), et(ev[e1]), ew(ed[e1]), ex(ev[e1]), ex(ey[e1]), ez(), f0()
}

function eq() {
	e9 = !0, a4.f1(dy, dx, dz), f2[dy] += e2, f3(), f4()
}

function ep() {
	return (e1 === eg ? f5 : f6)()
}

function f6() {
	var f7 = e2 * eV,
		f8 = f9(),
		fA = fB(),
		f8 = f7 + 2 * f8 + fA,
		fD = e0 * e2;
	return f8 < fD ? (dz -= f8, fE(f8 - f7, fA), !0) : (dz -= fD, fE(fD - f7, fA), !1)
}

function fE(fD, fA) {
	if (0 < fA) {
		if (!(fA <= fD)) return a4.fF(e1, dy, fA - fD), void(fD = 0);
		a4.fF(e1, dy, 0), fD -= fA
	}
	fD = eU(fD, 2), eY[e1] >= fD ? eY[e1] -= fD : eY[e1] = 0
}

function fB() {
	return a4.fG(e1, dy)
}

function f9() {
	return ai.fH(e2 * eY[e1], 1 + ai.fH(10 * f2[e1], 16))
}

function f5() {
	return dz -= e2 * eV, !0
}

function f4() {
	for (var eG = e2 - 1; 0 <= eG; eG--) ed[dy].push(e4[eG]), eu[dy].push(e4[eG]), a2.ef(e4[eG], dy)
}

function cU() {
	var fI = 0,
		fJ = 0;
	this.fK = function(fL, fM) {
		fI = fL, fJ = fM
	}, this.fN = function() {
		var fU, fW, fY, fa;
		fO || j.fP || (aY.fQ.fR(0) || aY.fQ.fR(1)) && aY.fQ.fS(eX) && (fU = aj.fV(fI), fW = aj.fX(fJ), fY = aj.fZ(fU, fW), fa = aj.fb(fY), aj.fc(fU, fW)) && (fd ? a2.ee(fa) && aW.fe.ff(fY) : ak.fg.fh(fY) || ak.fg.fi(fI, fJ) || a2.fj(fa) || (a2
			.fk(fa) ? ak.fg.fl(eX, fY) && aW.fe.fm(o.fn(), fY) : a2.eo(fa) ? fo(eX) ? aW.fe.fp(o.fn(), eg) : fq(eX, eg) ? aO.fr(eg, o.fn()) : ak.fg.fl(eX, fY) && aW.fe.fm(o.fn(), fY) : (fU = a2.en(fa)) !== eX && (fs(fU, eX) ? ft(eX, fU) ?
				aW.fe.fp(o.fn(), fU) : fq(eX, fU) ? aO.fr(fU, o.fn()) : ak.fg.fl(eX, fY) && aW.fe.fm(o.fn(), fY) : ak.fg.fl(eX, fY) && aW.fe.fm(o.fn(), fY))))
	}
}

function ce() {
	var fu = 1,
		fv = [null, null];
	this.cq = function() {
		fu = .72 * (b7.cv.fw() ? .0011 : .001) * aK.fx;
		for (var eG = 1; 0 <= eG; eG--) fv[eG] && this.fy(eG, fv[eG].fz)
	}, this.fy = function(g0, fz) {
		fv[g0] = {
			fz: fz,
			font: aY.g1.g2(1, 10)
		}, this.g3(g0)
	}, this.g3 = function(g0) {
		var fz, fontSize, g5, g6, g7;
		a1.g4() && fv[g0] && (fz = fv[g0].fz, fontSize = Math.floor(.15 * fu * a1.get(13).height), g5 = aY.g1.g2(1, fontSize), g6 = n.measureText(fz, g5), (g7 = .8 * fu * a1.get(13).width) < g6 && (fontSize = Math.floor(fontSize * g7 / g6), g5 =
			aY.g1.g2(1, fontSize)), fv[g0] = {
			fz: fz,
			font: g5
		}, b3.d1 = !0)
	}, this.g8 = function() {
		return Math.floor(fu * a1.get(13).height)
	}, this.g9 = function(gA, gB) {
		return !!a1.g4() && !(gA < b0.gap || gB < aK.gC - a8.g6 - fu * a1.get(13).height - 2 * b0.gap || gB > aK.gC - a8.g6 - 2 * b0.gap || (gA < b0.gap + fu * a1.get(13).width ? (b6.gD(0), 0) : gA < 2 * b0.gap + fu * a1.get(13).width || !(gA <
			2 * b0.gap + 2 * fu * a1.get(13).width) || (b6.gD(1), 0)))
	}, this.gE = function() {
		return Math.floor(aK.gC - a8.g6 - fu * a1.get(13).height - 2 * b0.gap)
	}, this.gF = function() {
		if (a1.g4()) {
			gG.imageSmoothingEnabled = !0, gG.setTransform(fu, 0, 0, fu, b0.gap, this.gE()), gG.drawImage(a1.get(14), 0, 0), gG.setTransform(fu, 0, 0, fu, 2 * b0.gap + fu * a1.get(13).width, this.gE()), gG.drawImage(a1.get(13), 0, 0);
			for (var eG = 1; 0 <= eG; eG--) fv[eG] && (gG.setTransform(1, 0, 0, 1, (1 + eG) * b0.gap + eG * fu * a1.get(13).width, this.gE()), gG.font = fv[eG].font, aY.g1.textBaseline(gG, 1), aY.g1.textAlign(gG, 1), gG.fillStyle = aZ.gH, gG
				.fillText(fv[eG].fz, .5 * fu * a1.get(13).width, .86 * fu * a1.get(13).height));
			gG.setTransform(1, 0, 0, 1, 0, 0)
		}
	}
}

function gI(gJ, size, gK, gL, font) {
	var eG, gO = .2,
		gP = document.createElement("canvas"),
		gQ = gP.getContext("2d", {
			alpha: !1
		});
	for (gP.width = gJ, gP.height = gJ, gQ.font = size + font, gQ.textAlign = "center", gQ.textBaseline = "middle", gQ.fillStyle = "red", eG = 0; eG < gK.length; eG++) gQ.fillText(gK[eG], .5 * gJ, .5 * gJ);
	return -1 < (gP = function(gM) {
		var eG, gS;
		for (eG = gM.data.length - 4; 0 <= eG; eG -= 4)
			if (gS = gM.data[eG], gL <= gS) return Math.floor(eG / (4 * gJ));
		return -1
	}(gQ.getImageData(0, 0, gJ, gJ))) && (gO = (gP - .5 * gJ + .1 * size) / size), Math.max(gO, 0)
}

function cN() {
	this.gT = new Int16Array(4), this.gU = new Int16Array(4), this.cq = function() {
		var eG;
		for (this.gT[0] = -ap.eB, this.gT[1] = 1, this.gT[2] = ap.eB, this.gT[3] = -1, eG = 0; eG < 4; eG++) this.gU[eG] = 4 * this.gT[eG]
	}, this.gV = function(gW, gX) {
		var gY = this.gZ(gX) - this.gZ(gW),
			gX = this.gb(gX) - this.gb(gW),
			gW = gY >>> 31 << 1;
		return 5 + gW + (1 - gW) * (1 - (gX >>> 31 << 1)) * (Math.abs(gY) - Math.abs(gX) >>> 31) & 3
	}, this.gf = function(gW, gX, gg) {
		return gg % 2 == 0 ? gg + (1 - gg) * (1 - (this.gZ(gX) - this.gZ(gW) >>> 31 << 1)) + 4 & 3 : gg + (2 - gg) * (1 - (this.gb(gX) - this.gb(gW) >>> 31 << 1)) + 4 & 3
	}, this.gi = function(ej, fY) {
		for (var gX, gj, gl = ev[ej], ec = gl.length, g6 = ap.eB, gm = this.gZ(fY), gn = this.gb(fY), go = gl[0] >> 2, min = this.gp(gm, gn, go), eG = 1; eG < ec; eG++)(gj = (gj = gm - (gX = gl[eG] >> 2) % g6) * gj + (gj = gn - ~~((.5 + gX) /
			g6)) * gj) < min && (min = gj, go = gX);
		return go
	}, this.gq = function(player, fa) {
		return !a2.eo(fa) && player === a2.en(fa)
	}, this.gp = function(fU, fW, fY) {
		return (fU -= this.gZ(fY)) * fU + (fW -= this.gb(fY)) * fW
	}, this.gr = function(gs, gt, gu) {
		gs = this.gw(gs) - this.gx(gu), gt = this.gz(gt) - this.h0(gu);
		return Math.sqrt(gs * gs + gt * gt)
	}, this.h1 = function(gW, gX) {
		var gv = this.gZ(gW) - this.gZ(gX),
			gW = this.gb(gW) - this.gb(gX);
		return Math.sqrt(gv * gv + gW * gW)
	}, this.h2 = function(ej) {
		return ej < h3 && 0 !== h4[ej] && 2 !== h5[ej]
	}, this.h6 = function(ej, h7) {
		return ai.fH(h7 * eY[ej], 1e3)
	}, this.gw = function(gs) {
		return 16 * (gs + h8) / h9
	}, this.gz = function(gt) {
		return 16 * (gt + hA) / h9
	}, this.fV = function(gs) {
		return Math.floor((gs + h8) / h9)
	}, this.fX = function(gt) {
		return Math.floor((gt + hA) / h9)
	}, this.fc = function(fU, fW) {
		return 1 <= fU && 1 <= fW && fU < ap.eB - 1 && fW < ap.eC - 1
	}, this.gZ = function(fY) {
		return fY % ap.eB
	}, this.gb = function(fY) {
		return ai.fH(fY, ap.eB)
	}, this.fZ = function(fU, fW) {
		return fW * ap.eB + fU
	}, this.hB = function(fY) {
		var fU = this.gZ(fY),
			fY = this.gb(fY);
		return 0 < fU && fU < ap.eB - 1 && 0 < fY && fY < ap.eC - 1
	}, this.fb = function(fY) {
		return fY << 2
	}, this.hC = function(fY) {
		return ap.eB * this.gb(fY) * 256 + (this.gZ(fY) << 4)
	}, this.hD = function(fY) {
		return this.hC(fY) + 8 + (ap.eB << 7)
	}, this.hE = function(gu) {
		return ap.eB * (this.h0(gu) >> 4) + (this.gx(gu) >> 4)
	}, this.hF = function(gu) {
		gu = this.hE(gu);
		return (this.gZ(gu) >> 5) + ak.hG.hH * (this.gb(gu) >> 5)
	}, this.gx = function(gu) {
		return gu % (ap.eB << 4)
	}, this.h0 = function(gu) {
		return ai.fH(gu, ap.eB << 4)
	}, this.hI = function(fY, gg) {
		return fY + this.gT[gg]
	}, this.hJ = function(fa, gg) {
		return fa + this.gU[gg]
	}
}

function hK(player) {
	return al.dm[1] = ed[player].length, al.dm[0] === eg ? hL(player) : hM(player, al.dm[0]), 0 !== al.dm[1] || 0 !== ed[player].length
}

function hN(player) {
	hO && (hP[player] = 1), hQ(al.dm[1], player), a4.hR(player, al.di[0], al.dm[0]), c.hS(player, !1)
}

function hT(player, hU, ec, hV) {
	var hW = eU(3 * eY[player], 256);
	hV -= hV >= eU(eY[player], 2) ? hW : 0, hQ(ec, player), a4.hR(player, hV, hU), eY[player] -= hV + hW, c.hS(player, !1)
}

function hM(player, hU) {
	for (var gg, eG = eu[player].length - 1; 0 <= eG; eG--)
		if (a2.hX(eu[player][eG]))
			for (gg = 3; 0 <= gg; gg--)
				if (a2.em(eu[player][eG] + e7[gg]) && a2.en(eu[player][eG] + e7[gg]) === hU) {
					ed[player].push(eu[player][eG]);
					break
				}
}

function hQ(size, player) {
	for (var eG = ed[player].length - 1; size <= eG; eG--) a2.hY(ed[player][eG], player)
}

function hL(player) {
	for (var gg, eG = eu[player].length - 1; 0 <= eG; eG--)
		if (a2.hX(eu[player][eG]))
			for (gg = 3; 0 <= gg; gg--)
				if (a2.eo(eu[player][eG] + e7[gg])) {
					ed[player].push(eu[player][eG]);
					break
				}
}

function hZ(player, ha) {
	var eG, hb, gg, hc, ec = eu[player].length,
		gh = 256 <= ec ? 12 : 32 <= ec ? 6 : 1,
		hd = ec - 1 - aL.he(gh);
	hf = 0;
	loop: for (eG = hd; 0 <= eG; eG -= gh)
		for (gg = 3; 0 <= gg; gg--)
			if ((hc = a2.eo(eu[player][eG] + e7[gg]) ? eg : a2.en(eu[player][eG] + e7[gg])) === eg || a2.em(eu[player][eG] + e7[gg]) && hc !== player && (ha || fs(player, hc))) {
				for (hb = hf - 1; 0 <= hb; hb--)
					if (hg[hb] === hc) continue loop;
				if (hg[hf] = hc, ++hf >= hh) return !0
			}
	return 0 < hf
}

function hi(player, ha) {
	var eG, gg, hc;
	for (hf = 0, eG = eu[player].length - 1; 0 <= eG; eG--)
		for (gg = 3; 0 <= gg; gg--)
			if ((hc = a2.eo(eu[player][eG] + e7[gg]) ? eg : a2.en(eu[player][eG] + e7[gg])) === eg || a2.em(eu[player][eG] + e7[gg]) && hc !== player && (ha || fs(player, hc))) return hg[hf++] = hc, !0;
	return !1
}

function hj() {
	for (var hk, eG = hf - 1; 0 <= eG; eG--)
		if (hg[eG] === eg) {
			for (hf--, hk = eG; hk < hf; hk++) hg[hk] = hg[hk + 1];
			return !0
		} return !1
}

function hl(player) {
	for (var hk, eG = hf - 1; 0 <= eG; eG--)
		if (a4.hm(player, hg[eG]))
			for (hf--, hk = eG; hk < hf; hk++) hg[hk] = hg[hk + 1];
	return 0 === hf
}

function hn() {
	for (var eG = hf - 1; 0 <= eG; eG--)
		if (hg[eG] >= h3) return !0;
	return !1
}

function ho() {
	for (var eG = hf - 1; 0 <= eG; eG--) hg[eG] < h3 && (hg[eG] = hg[--hf]);
	return 0 < hf
}

function hp(player) {
	for (var hk, hq = hg[0], hr = eY[hq] + a4.fG(hq, player), eG = hf - 1; 1 <= eG; eG--)(hk = eY[hg[eG]] + a4.fG(hg[eG], player)) < hr && (hq = hg[eG], hr = hk);
	return hq
}

function hs(player) {
	var gC, ht = hg[0];
	if (1 !== hf)
		for (var hu = eU(hv[player] + hw[player], 2), hx = eU(hy[player] + hz[player], 2), i0 = i1(hu - eU(hv[ht] + hw[ht], 2)) + i1(hx - eU(hy[ht] + hz[ht], 2)), eG = hf - 1; 1 <= eG; eG--)(gC = i1(hu - eU(hv[hg[eG]] + hw[hg[eG]], 2)) + i1(hx - eU(
			hy[hg[eG]] + hz[hg[eG]], 2))) < i0 && (i0 = gC, ht = hg[eG]);
	return ht
}

function i2() {
	return hg[aL.he(hf)]
}

function cs() {
	hh = 8, hf = 0, hg = new Uint16Array(hh)
}

function i3() {
	hP = hO ? new Uint8Array(eg) : null
}

function i4(player, hV) {
	var i5;
	hO && (hP[player] = 0), !a4.i6(player) || hV < 60 || (0 === eu[player].length ? ak.i7.i8(player) || (b.i9(player - h3, 200), iA(player, hV, b.hV[player - h3], a5.iB(player))) : 0 < ev[player].length && aL.random() < aL.value(ev[player].length >
		eu[player].length ? 7 : 3) && ak.i7.i8(player) || (i5 = a5.iB(player), eY[player] > i5 && hV < eY[player] - i5 && (hV = eY[player] - i5), hO ? iC(player, hV, b.hV[player - h3], i5) : iD(player, hV, b.hV[player - h3])))
}

function iC(player, hV, iE, i5) {
	var hU;
	hZ(player, !1) || hi(player, !1) ? (hP[player] = 1, hl(player) || (hj() ? (iF(player, hV), iG(player, eg, iE)) : (aL.iH(b.iI[iE]) ? iJ(player, hV, hU = hp(player)) : (hn() && aL.iH(b.iK[iE]) && ho(), iJ(player, hV, hU = hs(player))), iG(player,
		hU, iE)))) : 0 < ev[player].length && aL.random() < aL.value(60) && ak.i7.i8(player) || (b.i9(player - h3, 200), iA(player, hV, iE, i5))
}

function iL(player, hV) {
	hZ(player, !1) || hi(player, !1) ? (hP[player] = 1, hj() ? iF(player, hV) : iJ(player, hV, i2())) : iA(player, hV, 0, 0)
}

function iG(player, hU, iE) {
	3 <= iE && 2142 < b3.iM() && (hU === eg || eY[hU] < eU(eY[player], 20)) && b.i9(player - h3, 25)
}

function iA(player, hV, iE, i5) {
	var eG, hk, iN;
	if (0 !== b4.iO[player] && !(5 === iE && eY[player] < i5 || 4 === iE && eY[player] < eU(i5, 2)))
		for (eG = aL.he(iP), hk = 0; hk < iP; hk++)
			if (iN = iQ[(hk + eG) % iP], b4.iO[iN] === b4.iO[player] && 1 === hP[iN]) return void aW.iR.iS(player, iN, hV)
}

function iD(player, hV, iE) {
	!hZ(player, !0) && !hi(player, !0) || hl(player) || (hj() ? iF(player, hV) : aL.iH(b.iI[iE]) ? iJ(player, hV, hp(player)) : (hn() && aL.iH(b.iK[iE]) && ho(), iJ(player, hV, hs(player))))
}

function iT(player, hV) {
	(hZ(player, !0) || hi(player, !0)) && (hj() ? iF(player, hV) : iJ(player, hV, i2()))
}

function iJ(player, hV, hU) {
	eU(eY[player], 8) > eY[hU] && (hV = (iU = eU(11 * eY[hU], 5)) < hV ? hV : iU);
	var iU = ed[player].length;
	hM(player, hU), hT(player, hU, iU, hV)
}

function iF(player, hV) {
	var hU = eg,
		ec = ed[player].length;
	return hL(player), ed[player].length !== ec && (hT(player, hU, ec, hV), !0)
}
self.aiCommand746 = function(de) {
	0 === de ? bD() : 1 !== de || 1 !== b7.id || b7.df < 14 || x.dg()
};
var h3, rM, ii, rL, iV = [60, 74, 112, 200, 256, 512];

function bN() {
	var iW, iX, iY, iZ, ia, ib;

	function ir(eG) {
		iW[eG] = 1 + eU(ia[eG] * aL.random(), 10 * aL.value(100))
	}
	this.ic = ["Very Easy", "Easy", "Normal", "Hard", "Harder", "Very Hard"], this.ie = [97, 95, 93, 90, 87, 84], this.iK = [98, 95, 70, 40, 20, 0], this.ig = [85, 70, 50, 30, 7, 3], this.iI = [0, 0, 5, 25, 50, 90], this.hV = null, this.cq =
		function() {
			var eG, ih;
			if (iW = new Uint8Array(ii), iX = new Uint16Array(ii), iY = new Uint16Array(ii), iZ = new Uint8Array(ii), this.hV = new Uint8Array(ii), ia = new Uint16Array(ii), ib = new Uint16Array(ii), aU.ij) {
				if (aU.ik.il)
					for (eG = ii - 1; 0 <= eG; eG--) this.hV[eG] = aU.ik.il[eG + 1]
			} else if (9 === im) this.io();
			else if (ip)
				if (hO)
					for (eG = ii - 1; 0 <= eG; eG--) this.hV[eG] = z.iq[b4.iO[eG + h3] - 1].el;
				else
					for (eG = ii - 1; 0 <= eG; eG--) this.hV[eG] = z.iq[0].el;
			else
				for (ih = 8 === im ? 1 : 0, eG = ii - 1; 0 <= eG; eG--) this.hV[eG] = ih;
			for (eG = ii - 1; 0 <= eG; eG--) this.hV[eG] <= 2 ? (iZ[eG] = 5, ia[eG] = ib[eG] = 1040, 0 === this.hV[eG] ? (iX[eG] = 1e3, iY[eG] = 1e3) : 1 === this.hV[eG] ? (iX[eG] = 1e3, iY[eG] = 920, ia[eG] = ib[eG] = 1100) : (iX[eG] = 825, iY[eG] =
				750)) : this.hV[eG] <= 4 ? (iZ[eG] = 1 + aL.he(20), 3 === this.hV[eG] ? (iX[eG] = iY[eG] = 500, ia[eG] = ib[eG] = 1e3) : (ib[eG] = 250 + aL.he(1501), ia[eG] = 500 + aL.he(501), iX[eG] = 300 + aL.he(201), iY[eG] = 100 + aL.he(
				201))) : (ia[eG] = 1e3, ib[eG] = 1e3, iZ[eG] = 35 + aL.he(16), iX[eG] = 300 + aL.he(201), iY[eG] = 50 + aL.he(101)), ir(eG)
		}, this.io = function() {
			for (var eG, fa = 0, hk = 0; hk < 6; hk++) {
				for (eG = fa + aM.is[hk] - 1; fa <= eG; eG--) this.hV[eG] = hk;
				fa += aM.is[hk]
			}
		}, this.i9 = function(it, value) {
			0 <= it && (iW[it] = value)
		}, this.i8 = function(it) {
			0 == --iW[it] && ! function(it) {
				! function(it) {
					ia[it] !== ib[it] && (ia[it] += ia[it] < ib[it] ? 3 : -3);
					iX[it] !== iY[it] && (iX[it] += iX[it] < iY[it] ? iZ[it] : -iZ[it], iX[it] = (Math.abs(iX[it] - iY[it]) <= iZ[it] ? iY : iX)[it]);
					iW[it] = eU(ia[it], 10)
				}(it);
				var player = it + h3;
				i4(player, eU(iX[it] * eY[player], 1e3))
			}(it)
		}
}

function iw() {
	k.i8(), a6.i8(), t.ix(), aN.iy.i8(), ao.iz.j0()
}

function j1() {
	aO.i8(), d.i8(), a5.i8(), aR.i8(), aQ.i8(), c.i8(), e.i8(), ak.iy.i8(), j2(), s.i8(), aM.i8(), a6.i8(), a6.j3(), t.i8(), am.i8(), r.i8(), m.i8(), k.i8(), aS.i8(), o.i8(), aI.i8(), b1.i8(), b5.i8(), an.i8(), aN.iy.i8(), ar.i8(), aX.i8(), b3.i8()
}

function j4() {
	f.i8(), u.i8(), n.i8(), aF.i8(), aa.i8(), aJ.j5()
}

function j6() {
	s.j7(!1), m.j7(), t.j7(!1), r.j7(), o.j7(), aI.j7(), a6.j7(!1), b5.g3()
}

function j8() {
	a6.j7(!1) && (b3.d1 = !0), aN.iy.i8()
}

function bO() {
	var j9, jA, jB, jC, jD, jE;

	function jI(jK) {
		for (var eG = jA - 1; 0 <= eG; eG--) 0 === jC[jB[eG]] && f2[jB[eG]] >= jK && eD(jB[eG])
	}

	function jG(player) {
		10 === jC[player] ? jC[player] = j9 : f2[player] < 1e3 ? jC[player] = 3 : f2[player] < 1e4 ? jC[player] = 2 : f2[player] < 6e4 ? jC[player] = 1 : jC[player] = 0
	}
	this.cq = function() {
		jD = jE = 0, j9 = 6, jA = 0, jB = new Uint16Array(eg), jC = new Uint8Array(eg)
	}, this.i8 = function() {
		var eG;
		for (jD = b1.ea[13], jE = eY[eX], eG = jA - 1; 0 <= eG; eG--) 10 === jC[jB[eG]] ? jG(jB[eG]) : 0 == jC[jB[eG]]-- && (jG(jB[eG]), eD(jB[eG]));
		16e4 <= f2[jH[0]] && (jI(16e4), 3e5 <= f2[jH[0]]) && jI(3e5), f2[eX] > b1.ea[7] && (b1.ea[7] = f2[eX]), b1.ea[14] += jE - eY[eX] + jD - b1.ea[13]
	}, this.eW = function(player) {
		for (var hb, eG = jA - 1; 0 <= eG; eG--)
			if (player === jB[eG]) {
				for (jA--, hb = eG; hb < jA; hb++) jB[hb] = jB[hb + 1];
				return
			}
	}, this.hS = function(player, jL) {
		for (var eG = jA - 1; 0 <= eG; eG--)
			if (player === jB[eG]) return;
		jB[jA++] = player, jC[player] = jL ? 2 : 10
	}
}

function bP() {
	var size, i7;
	this.cq = function() {
		size = ii, i7 = new Uint16Array(ii);
		for (var eG = ii - 1; 0 <= eG; eG--) i7[eG] = eG
	}, this.i8 = function() {
		for (var eG = size - 1; 0 <= eG; eG--) 0 === h4[i7[eG] + h3] ? function(hb) {
			size--;
			for (var eG = hb; eG < size; eG++) i7[eG] = i7[eG + 1]
		}(eG) : b.i8(i7[eG])
	}
}

function bQ() {
	var jO, jP, jA, jB, jC, jQ, jR, jS;

	function jU(eG) {
		var hb;
		for (jA--, hb = eG; hb < jA; hb++) jB[hb] = jB[hb + 1], jC[hb] = jC[hb + 1], jQ[hb] = jQ[hb + 1], jR[hb] = jR[hb + 1], jS[hb] = jS[hb + 1]
	}
	this.cq = function() {
		jO = 1, jA = 0, jP = 2 * eg, jB = new Uint16Array(jP), jC = new Uint8Array(jP), jQ = new Uint16Array(jP), jR = new Uint32Array(jP), jS = new Uint32Array(jP)
	}, this.jT = function(g0, position) {
		jR[g0] = position
	}, this.i8 = function() {
		for (var eG = jA - 1; 0 <= eG; eG--) 0 == jC[eG]-- && (jC[eG] = 2, aC.i8(eG, jQ[eG], jB[eG], jR[eG], jS[eG]))
	}, this.eW = function(player, id) {
		for (var eG = jA - 1; 0 <= eG; eG--)
			if (player === jB[eG] && id === jQ[eG]) return void jU(eG)
	}, this.jV = function(player) {
		for (var eG = jA - 1; 0 <= eG; eG--) player === jB[eG] && (aC.jW(player, jR[eG]), jU(eG))
	}, this.hS = function(player, hd, jX) {
		if (jP <= jA) return 0;
		jB[jA] = player, jC[jA] = 0, jQ[jA] = jO, jR[jA] = hd, jS[jA] = jX;
		player = jO;
		return jA++, jO = 2 * jP < ++jO ? 1 : jO, player
	}, this.gF = function() {
		if (!(h9 < 40 || 0 === jA)) {
			var hb, fL, fM, eG, fontSize, jc, hV, jd = h8 / h9,
				je = hA / h9,
				jf = (aK.g6 + h8) / h9,
				jg = (aK.gC + hA) / h9;
			for (aY.g1.textAlign(gG, 1), aY.g1.textBaseline(gG, 1), hb = jA - 1; 0 <= hb; hb--) fL = a2.jh(jR[hb]), fM = a2.gE(jR[hb]), eG = jB[hb], jd - 1 < fL && fL < jf && je - 1 < fM && fM < jg && 0 !== h4[eG] && ((fontSize = Math.floor(.94 *
				h9 * a6.ji(eG))) < 6 || (fL = Math.floor(aK.g6 * (fL + .5 - jd) / (jf - jd)), fM = Math.floor(aK.gC * (fM + .48 - je) / (jg - je)), gG.font = aY.g1.g2(1, fontSize), gG.fillStyle = aZ.jj, hV = a4.eO(eG, a4.jk(eG, jQ[hb])),
				gG.fillText(b9.dG.data[7].value ? aY.jl.jm(hV) : jn[eG], fL, fM), (jc = Math.floor(.5 * fontSize)) < 6) || (gG.font = aY.g1.g2(1, jc), gG.fillText(b9.dG.data[7].value ? jn[eG] : aY.jl.jm(hV), fL, fM + Math.floor(.82 *
				fontSize))))
		}
	}
}

function bR() {
	var jo, jp, jq, jr, js, jt, ju, jv, jw, jx, jy, jz, k0, k1 = !1,
		k2 = !1;

	function k3(k4) {
		jz = b3.db, jq = jr = jp = 0, js = (k0 = 33) / k4, jo = 1 / (k4 / k0 / 4), jt = (aK.g6 / 2 + h8) / h9, ju = (aK.gC / 2 + hA) / h9, jv = h9
	}

	function kH(kJ) {
		Math.abs(Math.log(jy / jv)) < .125 && (jy = kJ * jv)
	}

	function kG(jd, je, jf, jg) {
		jw = (jd + jf + 1) / 2, jx = (je + jg + 1) / 2;
		jf = aK.g6 / (jf - jd + 1), jd = aK.gC / (jg - je + 1);
		jy = .9 * (jf < jd ? jf : jd)
	}
	this.k5 = function() {
		return k1
	}, this.k6 = function() {
		k3(1), this.k7(0, 0, ap.eB - 1, ap.eC - 1), fd || fO || this.k8(eX, 3e3, !0, .3)
	}, this.k8 = function(player, k4, k9, zoom) {
		kA || k1 && !k9 && k2 || 0 === f2[player] || (p.kB = !1, k2 = k9, k3(k4), function(player) {
			jw = (hw[player] + hv[player] + 1) / 2, jx = (hz[player] + hy[player] + 1) / 2
		}(player), function(zoom, player) {
			var gv = hv[player] - hw[player] + 1,
				player = hy[player] - hz[player] + 1,
				hb = aK.g6 / gv,
				hk = aK.gC / player,
				hb = (jy = hb < hk ? hb : hk, 0 !== zoom ? zoom : gv < 20 && player < 20 ? .5 : .9);
			jy *= hb, kH(7 / 8)
		}(zoom, player), k1 = !0, aB.kE())
	}, this.kF = function(k4) {
		fO || kA || (p.kB = !1, k2 = !1, k3(k4), kG(0, 0, ap.eB - 1, ap.eC - 1), kH(7 / 8), k1 = !0, aB.kE())
	}, this.k7 = function(jd, je, jf, jg) {
		kG(jd, je, jf, jg), h9 = jy, p.kK(jw, aK.g6 / 2), p.kL(jx, aK.gC / 2), ax.kM()
	}, this.kN = function() {
		return !(k1 && k2 || (k1 = !1))
	}, this.i8 = function() {
		var kQ, kR, el, kU;
		k1 && (jp < .5 ? jr < js && (jr += js * jo, jq = jp) : 1 - jq < jp && (jr = (jr -= js * jo) < js * jo ? js * jo : jr), jz = jz >= b3.db ? b3.db - 1 : jz, el = b3.db - jz, jp = 1e3 < el || 1 < (jp += jr * el / k0) ? 1 : jp, jz = b3.db,
			el = h9, kQ = h8, kR = hA, el = (h9 = jv * Math.pow(jy / jv, jp)) / el, kU = 1 - (jv * Math.pow(jy / jv, 1 - jp) - jv) / (jy - jv), p.kK(jt + kU * (jw - jt), aK.g6 / 2), p.kL(ju + kU * (jx - ju), aK.gC / 2), a6.zoom(el, (kQ * el -
				h8) / (1 - el), (kR * el - hA) / (1 - el)), ax.kM(), 1 <= jp && (k1 = !1, ay.kV = !0), b3.d1 = !0)
	}
}

function bK() {
	var iN = aY.g1;
	this.jj = iN.kW(0, 0, 0), this.kX = iN.kY(0, 0, 0, .7), this.kZ = iN.kY(0, 0, 0, .5), this.ka = iN.kY(0, 0, 0, .85), this.kb = iN.kY(0, 0, 0, .75), this.kc = iN.kY(0, 0, 0, .6), this.kd = iN.kY(0, 0, 0, .35), this.gH = iN.kW(255, 255, 255), this
		.ke = iN.kY(255, 255, 255, .3), this.kf = iN.kY(255, 255, 255, .6), this.kg = iN.kY(255, 255, 255, .4), this.kh = iN.kY(255, 255, 255, .25), this.ki = iN.kY(255, 255, 255, .85), this.kj = iN.kY(255, 255, 255, .75), this.kk = iN.kY(255, 255,
			255, .15), this.kl = iN.kW(128, 128, 128), this.km = iN.kY(64, 64, 64, .75), this.kn = iN.kY(88, 88, 88, .83), this.ko = iN.kW(30, 255, 30), this.kp = iN.kW(0, 200, 0), this.kq = iN.kW(128, 255, 128), this.kr = iN.kY(10, 65, 10, .75),
		this.ks = iN.kY(0, 255, 0, .6), this.kt = iN.kY(0, 255, 0, .5), this.ku = iN.kY(0, 200, 0, .5), this.kv = iN.kY(0, 100, 0, .75), this.kw = iN.kY(0, 60, 0, .8), this.kx = iN.kY(0, 255, 0, .3), this.ky = iN.kY(0, 180, 0, .6), this.kz = iN.kY(0,
			120, 0, .85), this.l0 = iN.kW(255, 120, 120), this.l1 = iN.kW(255, 160, 160), this.l2 = iN.kW(255, 70, 70), this.l3 = iN.kW(230, 0, 0), this.l4 = iN.kY(220, 0, 0, .6), this.l5 = iN.kY(255, 100, 100, .8), this.l6 = iN.kY(100, 0, 0, .85),
		this.l7 = iN.kY(60, 0, 0, .85), this.l8 = iN.kY(200, 0, 0, .6), this.l9 = iN.kY(120, 0, 0, .85), this.lA = iN.kY(0, 60, 60, .85), this.lB = iN.kY(10, 60, 60, .9), this.lC = iN.kY(0, 96, 96, .75), this.lD = iN.kW(160, 160, 255), this.lE = iN
		.kY(0, 40, 90, .75), this.lF = iN.kY(0, 0, 255, .6), this.lG = iN.kW(200, 200, 255), this.lH = iN.kW(255, 120, 100), this.lI = iN.kY(255, 255, 0, .5), this.lJ = iN.kY(255, 255, 150, .2), this.lK = iN.kW(255, 255, 0), this.lL = iN.kW(255, 255,
			200), this.lM = iN.kY(200, 200, 0, .6), this.lN = iN.kY(140, 120, 0, .75), this.lO = iN.kY(180, 160, 40, .75), this.lP = iN.kY(255, 140, 0, .75), iN = null, this.lQ = function(lR, el) {
			for (var dp = lR.slice(lR.indexOf("(") + 1, lR.indexOf(")")).split(","), dj = al.dj, eG = 0; eG < 3; eG++) dj[eG] = ai.lS(parseInt(dp[eG].trim(), 10) + el, 0, 255);
			return 3 === dp.length ? aY.g1.kW(dj[0], dj[1], dj[2]) : aY.g1.kY(dj[0], dj[1], dj[2], parseFloat(dp[3].trim()))
		}
}

function cG() {
	this.fe = new lT, this.fQ = new lU, this.lV = new lW, this.lX = new lY, this.iR = new lZ
}

function lT() {
	this.ff = function(fY) {
		ip ? aW.lV.ff(eX, fY) : aN.la.lb(fY)
	}, this.fp = function(h7, hU) {
		k.lc(), ip ? aW.lV.fp(eX, h7, hU) : aN.la.ld(h7, hU)
	}, this.le = function(h7, lf) {
		k.lc(), ip ? aW.lV.lg(eX, h7, lf) : aN.la.lh(h7, lf)
	}, this.fm = function(h7, fY) {
		ip ? aW.lV.fm(eX, h7, fY) : ak.fg.fl(eX, fY) && aN.la.li(h7, fY)
	}, this.fh = function(lj, fY) {
		ip ? aW.lV.fh(eX, lj, fY) : ak.fg.lk(eX, lj, fY) && aN.la.ll(lj, fY)
	}, this.lm = function(hU) {
		ip ? aW.lV.lm(eX, hU) : aN.la.ln(hU)
	}, this.lo = function(lp) {
		ip ? aW.lV.lq(eX, lp) : aN.la.lr(lp)
	}, this.ls = function(lt) {
		ip ? aW.lV.ls(eX, lt) : aN.la.lu(lt)
	}, this.lv = function() {
		ip ? aW.lV.lv(eX) : aN.la.lw()
	}
}

function lZ() {
	this.iS = function(player, lf, hV) {
		aY.fQ.lx(player, hV, lf) && (a5.le(player, lf), lf < h3) && aL.random() < aL.value(10) && (hP[lf] = 0)
	}, this.ly = function(player, lf, hV) {
		aY.fQ.lz(hV, lf) && (aY.fQ.m0(lf, al.di[0]), b1.m1(player, lf), a6.m2(lf, al.di[0]))
	}
}

function lU() {
	this.m3 = function(lp, player) {
		k.lo(eX, player, lp), aN.la.m4(lp, player)
	}, this.m5 = function(player) {
		k.m6(player, 0), aN.la.m7(player)
	}, this.m8 = function(m9, player) {
		k.mA(m9, player), aN.la.mB(m9, player)
	}, this.mC = function(mD) {
		ip || fO || aN.la.mE(mF(), mD)
	}, this.mG = function() {
		ip || fO || aN.la.mH(mF(), jH[0], jH[1], jH[2])
	}, this.mI = function() {
		ip || fO || aN.la.mJ(mF())
	}
}

function lY() {
	this.i8 = function(mK) {
		var id, dq, kN;
		for (ae.cq(mK), ae.g0 += 2, kN = 8 * ae.size; ae.g0 + 8 <= kN;) id = ae.mL(4), dq = ae.mL(9), 0 === id ? this.mM(id, dq, ae.mL(22)) : 1 === id ? this.mM(id, dq, ae.mL(10), ae.mL(10)) : 2 === id ? this.mM(id, dq, ae.mL(10), ae.mL(9)) :
			3 === id || 4 === id ? this.mM(id, dq, ae.mL(10), ae.mL(22)) : 5 === id ? this.mM(id, dq, ae.mL(10)) : 6 === id ? this.mM(id, dq, ae.mL(7)) : 7 === id ? this.mM(id, dq, ae.mL(1)) : this.mM(id, dq);
		this.mN()
	}, this.mO = [], this.mN = function() {
		for (var mQ = 0, mR = 0, mS = 0, mT = 0, mU = 0, mV = 0, eG = 0; eG < 512; eG++) mQ += h4[eG], mR += f2[eG], mS += eY[eG], mT += ak.iy.mW[eG];
		mU += ak.iy.mX, mV += iP, this.mO.push(((255 & mQ + mR + mS + mT + mU + mV) << 12) + ((3 & mQ) << 10) + ((3 & mR) << 8) + ((3 & mS) << 6) + ((3 & mT) << 4) + ((3 & mU) << 2) + (3 & mV))
	}, this.mM = function(id, dq, ds, du) {
		0 === id ? aW.lV.ff(dq, ds) : 1 === id ? aW.lV.fp(dq, ds, du) : 2 === id ? aW.lV.lg(dq, ds, du) : 3 === id ? aW.lV.fm(dq, ds, du) : 4 === id ? aW.lV.fh(dq, ds, du) : 5 === id ? aW.lV.lm(dq, ds) : 6 === id ? aW.lV.lq(dq, ds) : 7 === id ?
			aW.lV.ls(dq, ds) : 8 === id ? aW.lV.lv(dq) : aW.lV.mY(dq)
	}
}

function lW() {
	this.ff = function(player, fY) {
		aY.fQ.fR(0) && aY.fQ.fS(player) && aj.hB(fY) && (aX.mZ.ma(0, player, fY), mb.hR(player, fY))
	}, this.fp = function(player, h7, hU) {
		aY.fQ.fR(1) && aY.fQ.fS(player) && aY.fQ.mc(player, hU) && aY.fQ.md(player, h7, 12, eV) && aY.fQ.me(player, hU) && (a4.i6(player) || a4.hm(player, al.dm[0])) && hK(player) && (aX.mZ.ma(1, player, h7, al.dm[0]), aY.fQ.mf(player), b1.mg(
			player, h7), hN(player))
	}, this.lg = function(player, h7, lf) {
		aY.fQ.fR(1) && aY.fQ.fS(player) && hO && aY.fQ.mc(player, lf) && aY.fQ.mh(player, lf) && aY.fQ.lx(player, aY.fQ.h6(player, h7), lf) && (aX.mZ.ma(2, player, h7, lf), a5.le(player, lf))
	}, this.fm = function(player, h7, fY) {
		aY.fQ.fR(1) && aY.fQ.fS(player) && aj.hB(fY) && ak.iy.mX !== ak.iy.mi && ak.iy.mW[player] !== ak.iy.mj && 0 !== ev[player].length && aY.fQ.md(player, h7, 32, 16) && ak.mk.ml(player, fY) && (aX.mZ.ma(3, player, h7, fY), aY.fQ.mf(player),
			ak.iy.mm(player))
	}, this.fh = function(player, lj, fY) {
		aY.fQ.fR(1) && aY.fQ.fS(player) && aj.hB(fY) && ak.fg.mn(player, lj) && ak.mk.mo(fY) && (aX.mZ.ma(4, player, lj, fY), aY.fQ.mp(player, 8), ak.iy.fh())
	}, this.lm = function(player, hU) {
		aY.fQ.fR(1) && aY.fQ.fS(player) && (hU = Math.min(hU, eg), a4.hm(player, hU)) && (aX.mZ.ma(5, player, hU), a4.mq(player, hU))
	}, this.lq = function(player, lp) {
		(aY.fQ.fR(1) || aY.fQ.fR(2)) && aY.fQ.fS(player) && (lp = Math.min(lp, az.mr - 1), aX.mZ.ma(6, player, lp), a6.ms(player, 0, lp))
	}, this.ls = function(player, lt) {
		aY.fQ.fR(1) && aY.fQ.fS(player) && (aX.mZ.ma(7, player, lt), aI.mt(player, lt))
	}, this.lv = function(player) {
		(aY.fQ.fR(0) || aY.fQ.fR(1)) && aY.fQ.fS(player) && an.lv(player) && aX.mZ.ma(8, player)
	}, this.mY = function(player) {
		an.mY(player), aX.mZ.ma(9, player)
	}
}

function mu() {
	var mw;
	this.mv = [], this.mw = document.createElement("div"), this.mx = function(fz) {
		var title = document.createElement("h2");
		title.textContent = fz, title.style.margin = "0", title.style.marginBottom = "0.6em", title.style.fontSize = "1.4em", title.style.overflowWrap = "break-word", this.mw.appendChild(title)
	}, this.my = function(fz) {
		var mz = document.createElement("p");
		mz.textContent = fz, mz.style.fontSize = "0.75em", mz.style.lineHeight = "1.2em", mz.style.marginBottom = "0", this.mw.appendChild(mz)
	}, this.n0 = function(n1, fontSize = "1em") {
		var mw = document.createElement("div");
		mw.innerHTML = n1, mw.style.fontSize = fontSize, mw.style.lineHeight = "1.2em", this.mw.appendChild(mw)
	}, this.n2 = function(n3) {
		for (var n4 = n3.n4, ec = n4.length, eG = 0; eG < ec; eG++) this.mw.appendChild(n4[eG])
	}, this.n5 = function(n6) {
		this.mv.push(n6), this.mw.appendChild(n6.dE)
	}, this.resize = function() {
		for (var ec = this.mv.length, eG = 0; eG < ec; eG++) this.mv[eG].resize && this.mv[eG].resize()
	}, (mw = this.mw).style.position = "absolute", mw.style.height = "auto", mw.style.padding = "0.5em"
}

function n7(n8, n9) {
	var eG, mw = document.createElement("div");

	function nF() {
		var eG, nG, gC, ek, el, nC = aK.nH * mw.offsetWidth,
			nI = new Float64Array(function(nC) {
				var g6 = .25 * aY.g1.nD(.6) * aK.fx;
				return Math.max(Math.floor(nC / g6), 1)
			}(nC)),
			nJ = b0.nJ,
			nK = (nC - (nI.length + 1) * b0.gap) / (nI.length * aK.nH);
		for (nI.fill(nJ), eG = 0; eG < n9.length; eG++) nG = (el = n9[eG].mw).style, gC = Math.min(...nI), ek = nI.indexOf(gC), nG.top = aY.g1.nL(gC), nG.left = aY.g1.nL(nJ + ek * (nK + nJ)), nG.width = aY.g1.nL(nK), aY.g1.nM(el, 5), nI[ek] += el
			.offsetHeight + 3 * nJ;
		mw.style.height = aY.g1.nL(Math.max(...nI) - 2 * nJ)
	}
	for (this.nA = n9, this.resize = function() {
			var eG;
			for (eG = 0; eG < n9.length; eG++) n9[eG].resize();
			nF(), nF()
		}, mw.style.width = "100%", mw.style.maxWidth = "100%", n8.style.lineHeight = "1.5em", n8.style.overflowX = "hidden", n8.style.overflowY = "auto", eG = 0; eG < n9.length; eG++) mw.appendChild(n9[eG].mw);
	n8.appendChild(mw)
}

function nN(title, nO, backgroundColor = aZ.ka) {
	var nP = document.createElement("button");

	function lQ() {
		this.style.backgroundColor = aZ.lQ(backgroundColor, 50)
	}

	function nS() {
		this.style.backgroundColor = backgroundColor
	}

	function nR() {
		this.style.backgroundColor = backgroundColor, this.blur()
	}
	this.button = nP, this.nQ = nO, nP.innerText = title, nP.style.color = aZ.gH, nP.style.userSelect = "none", nP.style.outline = "none", nP.style.overflowWrap = "break-word", nP.style.backgroundColor = backgroundColor, nP.style.border = "none", nP
		.style.font = "inherit", nP.style.fontSize = "1em", nP.style.padding = "0em 0.3em", nP.onclick = nO, nP.addEventListener("mouseover", lQ), nP.addEventListener("mouseout", nR), nP.addEventListener("focus", lQ), nP.addEventListener("blur", nS)
}

function nT(nU, n8) {
	var mw, eG;
	for (this.resize = function() {
			for (var eG = 0; eG < nU.length; eG++) aY.g1.nM(nU[eG].button);
			mw.style.gap = mw.style.padding = aY.g1.nL(b0.nJ)
		}, (mw = document.createElement("div")).style.display = "grid", mw.style.gridTemplateColumns = "repeat(auto-fill, minmax(9.5em, 1fr))", mw.style.overflowY = "auto", mw.style.gridAutoRows = "5.3em", mw.style.maxHeight = "100%", eG = 0; eG < nU
		.length; eG++) nU[eG].button.style.fontSize = "1.2em", mw.appendChild(nU[eG].button);
	n8.appendChild(mw)
}

function nW(nX, nY) {
	this.fL = 0, this.fM = 0, this.g6 = 0, this.gC = 0, this.resize = function() {
		this.gC = Math.min(aY.g1.nD(.5) * nX[1] * aK.fx, aK.gC - 2 * b0.gap), this.g6 = Math.min(this.gC * (nX[0] / nX[1]), aK.g6 - 2 * b0.gap), this.gC = nX[1] * this.g6 / nX[0], this.fL = b0.gap + nY[0] * (aK.g6 - this.g6 - 2 * b0.gap), this
			.fM = b0.gap + nY[1] * (aK.gC - this.gC - 2 * b0.gap)
	}, this.nZ = function() {
		return this.fL + .5 * this.g6
	}
}

function na(nb) {
	function click() {
		var value = 1 - nb.value;
		this.textContent = (value ? "🟢 " : "⚪ ") + aV.nc[121], b9.nd.ne(nb.g0, value)
	}
	var dE;
	this.dE = document.createElement("p"), (dE = this.dE).textContent = (nb.value ? "🟢 " : "⚪ ") + aV.nc[121], dE.style.margin = "0", dE.style.cursor = "pointer", dE.addEventListener("click", click)
}

function nf(n8, n1) {
	var mw = document.createElement("div");
	this.ng = mw, this.resize = function() {
		mw.style.padding = aY.g1.nL(b0.nJ), mw.style.lineHeight = aY.g1.nL(aY.g1.nh(.035))
	}, n8.style.overflowX = "hidden", n8.style.overflowY = "auto", mw.innerHTML = n1, n8.appendChild(mw)
}

function ni(nj) {
	var mw = document.createElement("div");
	this.dE = mw, this.resize = function() {
		for (var ec = nj.length, eG = 1; eG < ec; eG++) aY.g1.nM(nj[eG], 4)
	};
	var eG, ec = nj.length;
	for (mw.style.width = "100%", mw.style.height = "2.7em", mw.style.marginTop = "0.6em", mw.style.border = "inherit", eG = 0; eG < ec; eG++) nj[eG].style.verticalAlign = "top", nj[eG].style.width = (100 / ec).toFixed(2) + "%", nj[eG].style.height =
		"100%", nj[eG].style.fontSize = "0.75em", mw.appendChild(nj[eG])
}

function nk(nb) {
	var dE;
	this.dE = document.createElement("input"), (dE = this.dE).type = "text", dE.id = "input" + nb.title, dE.value = nb.value, dE.style.width = "100%", dE.style.userSelect = "none", dE.style.outline = "none", dE.style.resize = "none", dE.style
		.border = "inherit", dE.style.font = "inherit", dE.style.color = aZ.gH, dE.style.backgroundColor = aZ.kX, dE.style.fontSize = "1em", dE.style.padding = "0.1em 0.2em", -1 !== nb.g0 && (dE.addEventListener("blur", function() {
			b9.nd.ne(nb.g0, dE.value.trim())
		}), dE.addEventListener("keypress", function(event) {
			"Enter" === event.key && (event.preventDefault(), b9.nd.ne(nb.g0, dE.value.trim()))
		}))
}

function nl(n8, nm, h7) {
	var nn, eG, no = new Array(nm.length),
		n9 = new Array(nm.length);
	for (this.resize = function() {
			for (var ec = nm.length, eG = 0; eG < ec; eG++) 0 < eG && aY.g1.nM(no[eG], 8)
		}, nn = document.createElement("div"), n8.style.overflowX = "hidden", n8.style.overflowY = "auto", ! function() {
			var eG, el, ec = nm.length;
			for (eG = 0; eG < ec; eG++)
				for (no[eG] = document.createElement("div"), no[eG].style.display = "flex", no[eG].style.width = "100%", no[eG].style.height = "2.5em", no[eG].style.backgroundColor = eG % 2 == 0 ? aZ.km : aZ.kd, n9[eG] = new Array(nm[0].length), hb =
					0; hb < nm[0].length; hb++) n9[eG][hb] = el = document.createElement("div"), el.style.display = "flex", el.style.width = "100%", el.style.height = "100%", el.style.justifyContent = "center", el.style.alignItems = "center", el
					.innerHTML = nm[eG][hb], 0 < hb && aY.g1.nM(el, 4), no[eG].appendChild(el)
		}(), eG = 0; eG < nm.length; eG++) nn.appendChild(no[eG]);
	n8.appendChild(nn)
}

function nq(nb) {
	this.n4 = [];
	var nr = this.n4;

	function click() {
		for (var eG = 0; eG < nr.length; eG++) nr[eG].textContent = nr[eG].textContent.replace("🟢", "⚪");
		this.textContent = this.textContent.replace("⚪", "🟢"), b9.nd.ne(nb.g0, parseInt(this.name))
	}
	for (var ns, ec = nb.nt.length, eG = 0; eG < ec; eG++)(ns = document.createElement("p")).textContent = "⚪ " + nb.nt[eG], ns.style.margin = "0", ns.name = "" + eG, ns.style.cursor = "pointer", ns.style.fontSize = "1em", ns.addEventListener(
		"click", click), nr.push(ns);
	nr[nb.value].textContent = nr[nb.value].textContent.replace("⚪", "🟢")
}

function nu(title, nv) {
	var eG, nn = document.createElement("div"),
		nw = document.createElement("div"),
		nx = document.createElement("div"),
		ny = document.createElement("div");
	for (this.nz = nx, this.show = function() {
			document.body.appendChild(nn)
		}, this.o3 = function() {
			document.body.removeChild(nn)
		}, this.resize = function() {
			var eG, dE, ec = nv.length,
				o4 = aY.g1.nh(.1),
				o5 = aY.g1.nh(.08 + .04 * (aK.o6 < 1));
			for (nw.style.height = aY.g1.nL(o4), aY.g1.nM(nw, 2), ny.style.top = aY.g1.nL(aK.gC / aK.nH - o5), ny.style.height = aY.g1.nL(o5), aY.g1.nM(ny, 8), nx.style.top = aY.g1.nL(o4), nx.style.height = nx.style.maxHeight = aY.g1.nL(aK.gC / aK
					.nH - o4 - o5), ny.style.font = nw.style.font = nx.style.font = aY.g1.g2(0, aY.g1.nh(.02)), eG = 0; eG < ec; eG++)(dE = nv[eG].button).style.top = "0", dE.style.left = (100 * eG / ec).toFixed(2) + "%", dE.style.width = (100 / ec)
				.toFixed(2) + "%", dE.style.height = "100%", 0 < eG && aY.g1.nM(dE, 4)
		}, nn.style.position = "absolute", nn.style.top = "0", nn.style.left = "0", nn.style.width = "100%", nn.style.height = "100%", nw.style.position = "absolute", nw.style.top = "0", nw.style.left = "0", nw.style.width = "100%", nw.style
		.display = "flex", nw.style.backgroundColor = aZ.ka, ny.style.position = "absolute", ny.style.left = "0", ny.style.width = "100%", nx.style.position = "absolute", nx.style.width = "100%", nx.style.backgroundColor = aZ.ka, ! function() {
			var eG;
			for (eG = 0; eG < nv.length; eG++) nv[eG].button.style.position = "absolute", nv[eG].button.style.fontSize = "1.2em"
		}(), eG = 0; eG < nv.length; eG++) ny.appendChild(nv[eG].button);
	nw.appendChild(function() {
		var o2 = document.createElement("h1");
		return o2.textContent = title, o2.style.margin = "auto", o2.style.fontSize = "2.3em", o2
	}()), nn.appendChild(nx), nn.appendChild(nw), nn.appendChild(ny)
}

function o7() {
	var o8 = document.createElement("textarea"),
		oA = (this.o9 = o8, !0);

	function oG() {
		o8.select(), document.execCommand("copy")
	}
	this.resize = function() {
			o8.style.padding = aY.g1.nL(b0.nJ)
		}, this.oB = function(oC) {
			o8.value = oC
		}, this.oD = function() {
			return o8.value
		}, this.oE = function() {
			o8.select()
		}, this.clear = function() {
			o8.value = ""
		}, this.oF = function() {
			oA && navigator.clipboard ? (o8.select(), navigator.clipboard.writeText(o8.value).catch(function() {
				oA = !1, oG()
			})) : oG()
		}, o8.setAttribute("name", "replayData"), o8.setAttribute("id", "replayDataField"), o8.setAttribute("autocomplete", "off"), o8.setAttribute("placeholder", "Insert the replay link here!"), o8.style.top = "0", o8.style.left = "0", o8.style
		.width = "100%", o8.style.height = "100%", o8.style.userSelect = "none", o8.style.outline = "none", o8.style.resize = "none", o8.style.border = "none", o8.style.color = aZ.gH, o8.style.backgroundColor = aZ.kX, o8.style.fontSize = "1.2em"
}

function cb() {
	this.nQ = new oH, this.dG = new oI, this.nd = new oJ, this.cq = function() {
		this.dG.cq(), (new oK).cq()
	}
}

function oI() {
	function oL(eG, title, type, nt = null, oR = 0, df = 0) {
		b9.dG.data.push({
			g0: eG,
			title: title,
			type: type,
			nt: nt,
			value: oR,
			oR: oR,
			df: df
		})
	}

	function oM(eG, title, type, nt = null, oR = "", df = 0) {
		b9.dG.data.push({
			g0: eG,
			title: title,
			type: type,
			nt: nt,
			value: oR,
			oR: oR,
			df: df
		})
	}

	function oN(kN) {
		for (var eG = b9.dG.data.length; eG < kN; eG++) b9.dG.data.push(null)
	}
	this.data = [], this.cq = function() {
		oL(0, "", 1, ["English", "Русский", "Türkçe", "Española", "Deutsch"], 0, 4), oL(1, "", 1, null, 1), oL(2, "", 0, [0, 1]), oM(3, "Username", 2), oL(4, "Font5", 1, ["Default", "Custom"]), oM(5, "", 2, null, "Trebuchet MS", 1), oL(6, "", 0,
			[0, 1]), oL(7, "", 0, [0, 1], 1), oL(8, "", 0, [0, 1]), oL(9, "", 1, null, 1), oL(10, "", 1, null), oL(11, "", 1, null, 1), oN(100), oM(100, "Username", 2), oM(101, "Password", 2), oM(102, "Emojis", 2), oM(103, "Colors", 2), oM(
			104, "Clan", 2), oM(105, "AccountName", 2), oM(106, "Password", 2), oL(107, null, 0), oL(108, null, 0), oL(109, null, 0), oM(110, null, 2), oL(111, null, 0), oL(112, null, 0), oN(180), oL(180, "R0", 0), oL(181, "R1", 0)
	}, this.translate = function() {
		this.data[0].title = "🌐 " + aV.nc[101], this.data[1].title = aV.nc[102], this.data[2].title = aV.nc[103], this.data[5].title = aV.nc[104], this.data[6].title = aV.nc[105], this.data[7].title = aV.nc[106], this.data[8].title = aV.nc[107],
			this.data[9].title = aV.nc[108], this.data[10].title = aV.nc[109], this.data[11].title = aV.nc[110], this.data[1].nt = [aV.nc[111], aV.nc[112], aV.nc[113], aV.nc[114]], this.data[9].nt = [aV.nc[112], aV.nc[115], aV.nc[116]], this
			.data[10].nt = [aV.nc[109] + " 1", aV.nc[117] + " 1", aV.nc[109] + " 2", aV.nc[117] + " 2"], this.data[11].nt = [aV.nc[118], aV.nc[119], aV.nc[120]]
	}, this.ne = function(g0, value) {
		this.data[g0].value = value
	}, this.dH = function(g0, value) {
		this.ne(g0, value), b9.nQ.save(g0, String(value)), b9.nQ.save(g0, String(this.data[g0].df), !0)
	}, this.oO = function() {
		for (var eG = 0; eG < this.data.length; eG++) this.data[eG] && (b9.nQ.save(eG, String(this.data[eG].value)), b9.nQ.save(eG, String(this.data[eG].df), !0))
	}, this.oP = function(g0) {
		return Number(this.data[g0].value)
	}, this.oQ = function(g0) {
		return String(this.data[g0].value)
	}
}

function oH() {
	this.oS = function(g0, df = !1) {
		return Number(this.oT(g0, df))
	}, this.oT = function(g0, df = !1) {
		var de = null;
		return 0 === b7.id ? b7.oU && (de = b7.oU.getItem((df ? "v" : "d") + g0)) : 1 === b7.id ? de = b7.oV.loadString((df ? 1e3 : 2e3) + g0) : 2 === b7.id && (de = b7.oW[(df ? "v" : "d") + g0]), de && 0 !== de.length ? de : null
	}, this.save = function(g0, value, df = !1) {
		0 === b7.id ? b7.oU && b7.oU.setItem((df ? "v" : "d") + g0, value) : 1 === b7.id ? b7.oV.saveString((df ? 1e3 : 2e3) + g0, value) : 2 === b7.id && (b7.oW["d" + g0] = value, b7.oX.postMessage((df ? "v" : "d") + g0 + " " + value))
	}
}

function oK() {
	this.cq = function() {
		! function() {
			var data = b9.dG.data;
			0 === data[2].df && (aK.gC > aK.g6 || 0 !== b7.id) && (data[2].value = data[2].oR = 1);
			0 === data[100].df && (data[100].value = data[100].oR = (0 === b7.id ? "Player " : 1 === b7.id ? "Android User " : "iOS User ") + Math.floor(1e3 * Math.random()));
			data[0].value = data[0].oR = aV.oa()
		}();
		var eG, de, data = b9.dG.data,
			ec = data.length;
		for (eG = 0; eG < ec; eG++) data[eG] && data[eG].df === b9.nQ.oS(eG, !0) && (de = b9.nQ.oT(eG), data[eG].value = null === de ? data[eG].oR : 2 === data[eG].type ? de : Number(de));
		b9.dG.data[10].value = b9.dG.data[10].oR
	}
}

function oJ() {
	this.ne = function(g0, value) {
		console.log("update " + g0 + " " + value), b9.dG.data[g0].value !== value && (b9.dG.dH(g0, value), 0 === g0 ? (ar.ob(0), aV.cq(), ar.ob(2)) : 1 === g0 ? aK.oc(1) : 2 === g0 ? aK.oc(0) : 5 === g0 && (aY.g1.od(), aK.oc(0)))
	}, this.oe = function() {
		for (var data = b9.dG.data, eG = 0; eG < 180; eG++) data[eG] && b9.dG.dH(eG, data[eG].oR);
		aY.g1.od(), aK.oc(1), aV.cq()
	}
}

function bM() {
	this.og = new oh, this.oi = new oj, this.cq = function() {
		this.og.cq()
	}
}

function oj() {
	this.ok = function(size) {
		for (var ol = ae, dp = [], eG = 0; eG < size; eG++) dp.push(String.fromCharCode(ol.mL(16)));
		return dp.join("")
	}, this.om = function(fz) {
		return 20 < (fz = fz.trim()).length ? fz.substring(0, 20) : fz
	}
}

function oh() {
	var on = new Uint8Array(78);
	this.cq = function() {
		var eG;
		for (on[50] = 37, eG = 0; eG < 10; eG++) on[eG + 3] = eG + 1;
		for (eG = 0; eG < 26; eG++) on[eG + 20] = eG + 11, on[eG + 52] = eG + 38
	}, this.oo = function(fz) {
		return fz.trim().replace(new RegExp("[^a-zA-Z0-9_\\-]", "g"), "_")
	}, this.op = function(fz, size) {
		if ((fz = this.oo(fz)).length > size) return fz.substring(0, size);
		for (; fz.length < size;) fz += "_";
		return fz
	}, this.oq = function(fz) {
		for (var or = on, ec = fz.length, dp = new Uint8Array(ec), eG = 0; eG < ec; eG++) dp[eG] = or[fz.charCodeAt(eG) - 45];
		return dp
	}, this.os = function(ot) {
		ab.d2(6 * ot.length), this.ou(ot), ae.cq(ab.mK)
	}, this.ou = function(ot) {
		var ec = ot.length,
			g6 = ab;
		for (let eG = 0; eG < ec; eG++) g6.ov(6, ot[eG])
	}, this.ow = function(fz) {
		this.ou(this.oq(fz))
	}, this.ox = function(fz, size) {
		this.ou(this.oq(this.op(fz, size)))
	}
}

function oy() {
	var g6, gC, oz;

	function pP(pQ, el, pN, p5, pI) {
		el = pO(pQ, el + 1 + 2 * p5 & 3);
		! function(pQ, pR) {
			return 1 < Math.abs(pQ % g6 - pR % g6) || 1 < Math.abs(pU(pQ) - pU(pR))
		}(pQ, el) && 0 === pI[el << 2] && (pI[el << 2] = pN)
	}

	function pU(ej) {
		return Math.floor((ej + .5) / g6) % gC
	}

	function pO(ej, el) {
		return ej + oz[el]
	}
	this.p0 = function(fz) {
		var eG, p1, ec, p3, ol = ae;
		for (ad.og.os(ad.og.oq(fz)), ap.eB = g6 = ol.mL(12), ap.eC = gC = ol.mL(12), oz = [-g6, -1, g6, 1], ap.pE = document.createElement("canvas"), ap.pE.width = ap.eB, ap.pE.height = ap.eC, ap.pA = ap.pE.getContext("2d", {
				alpha: !1
			}), ap.pB = ap.pA.getImageData(0, 0, ap.eB, ap.eC), ap.pF = ap.pB.data, aY.pG.pH(ap.pF), ec = ol.mL(12), p1 = ol.mL(5), p3 = p7(g6 * gC - 1), eG = 0; eG < ec; eG++) ! function(p2, ej, p4, p5) {
			var eG, el, ol = ae,
				pI = ap.pF,
				pJ = ej,
				pK = ej,
				pL = 0,
				pM = 1 + p4,
				pN = 2 - p4;
			for (pI[ej << 2] = pM, eG = 0; eG < p2; eG++) el = ol.mL(2), ej = pO(ej, el), pI[ej << 2] === pM ? pL % 2 == 1 && pP(pK, pL + 2 * p5 + 3, pN, p5, pI) : pI[ej << 2] = pM, pP(ej, el, pN, p5, pI), pP(pK, el, pN, p5, pI), pK = ej,
				pL = el;
			pO(ej, 0) === pJ ? (pP(ej, 0, pN, p5, pI), pP(pJ, 0, pN, p5, pI)) : pO(ej, 1) === pJ && (pP(ej, 0, pN, p5, pI), pP(pJ, 2, pN, p5, pI));
			0 === p2 && (pP(pJ, 0, pN, p5, pI), pP(pJ, 2, pN, p5, pI))
		}(ol.mL(p1), ol.mL(p3), 1 === ol.mL(1), 1 === ol.mL(1));
		var fL, fM, pV, pW, pX, pY, pI = ap.pF,
			pZ = !0,
			pa = ap.ik.pb[ap.pc].pa,
			pd = ap.ik.pb[ap.pc].pd;
		for (fM = 0; fM < gC; fM++)
			for (pW = !0, pX = pZ, fL = pY = 0; fL < g6; fL++) pV = 4 * fM * g6 + 4 * fL, pY <= fL && 0 < pI[pV] && (pX = 2 === pI[pV], pW) && (pW = !1, pX !== pZ) ? (pZ = pX, pY = fL + 1, fL = -1) : (pX ? (pI[pV] = pd[0], pI[1 + pV] = pd[1], pI[
				2 + pV] = pd[2]) : (pI[pV] = pa[0], pI[1 + pV] = pa[1], pI[2 + pV] = pa[2]), pI[3 + pV] = 255);
		ap.pA.putImageData(ap.pB, 0, 0), ap.pC = !0, ap.pD.cq(), b3.d1 = !0
	}
}

function bS() {
	var fL, fM, g6, gC, pe, pf, pg, ph, player, dp;

	function pp() {
		return function() {
			var eG;
			for (eG = 0; eG < 8; eG++)
				if (fL = eU(g6 * aL.random(), aL.value(100)), fM = eU(gC * aL.random(), aL.value(100)), px()) return 1;
			return
		}() || function() {
			var gv, gy, hb, pn, hk, pm;
			for (gv = eU(g6 * aL.random(), aL.value(100)), gy = eU(gC * aL.random(), aL.value(100)), hb = 40; 1 <= hb; hb--)
				for (pn = gC - hb; 0 <= pn; pn -= 40)
					for (fM = (pn + gy) % gC, hk = 40; 1 <= hk; hk--)
						for (pm = g6 - hk; 0 <= pm; pm -= 40)
							if (fL = (pm + gv) % g6, px()) return 1;
			return
		}()
	}

	function px() {
		for (var ej, pz, gap = eU(pe - ph, 2), q0 = pg + fM * pe + gap, q1 = pf + fL * pe + gap, py = q0 + ph - 1; q0 <= py; py--)
			for (pz = q1 + ph - 1; q1 <= pz; pz--)
				if (ej = a2.pv(pz, py), !a2.ee(ej) || a2.hX(ej)) return;
		return 1
	}

	function pq(pm, pn) {
		pi(), q2(pm - 2, pn - 2)
	}

	function pi() {
		h4[player] = 0, eY[player] = 0, f2[player] = q3[player] = 0, ed[player] = [], eu[player] = [], ev[player] = [], ey[player] = [], hw[player] = hz[player] = hv[player] = hy[player] = 0
	}

	function q2(pm, pn) {
		var ej, eG, q5, q6;
		for (h4[player] = 1, eY[player] = player < h3 ? q4 : iV[b.hV[player - h3]], hw[player] = pm + 10, hz[player] = pn + 10, hy[player] = hv[player] = 0, q5 = pm; q5 < pm + 4; q5++)
			for (q6 = pn; q6 < pn + 4; q6++)(pm < q5 && q5 < pm + 3 || pn < q6 && q6 < pn + 3) && (ej = a2.pv(q5, q6), a2.ee(ej)) && (hw[player] = q5 < hw[player] ? q5 : hw[player], hv[player] = q5 > hv[player] ? q5 : hv[player], hz[player] = q6 <
				hz[player] ? q6 : hz[player], hy[player] = q6 > hy[player] ? q6 : hy[player], dp[f2[player]] = ej, f2[player]++, a2.q7(ej, player));
		for (q3[player] = f2[player], eG = f2[player] - 1; 0 <= eG; eG--) a2.q8(dp[eG], player) ? (a2.ef(dp[eG], player), eu[player].push(dp[eG])) : a2.q9(dp[eG]) ? (a2.ef(dp[eG], player), ev[player].push(dp[eG])) : a2.qA(dp[eG]) && (a2.ef(dp[eG],
			player), ey[player].push(dp[eG]))
	}

	function pw(pm, pn) {
		for (var ej, pz, py = pn; pn - 6 < py; py--)
			for (pz = pm; pm - 6 < pz; pz--)
				if (ej = a2.pv(pz, py), a2.hX(ej)) return;
		return 1
	}
	this.cq = function() {
		var eG, pm, pn;
		if (dp = new Array(12), ph = 6, pe = 10, g6 = eU(ap.eB, pe), gC = eU(ap.eC, pe), pf = eU(ap.eB - pe * g6, 2), pg = eU(ap.eC - pe * gC, 2), fd)
			for (eG = 0; eG < h3; eG++) player = eG, pi(), h4[player] = 1;
		if (aU.ij && aU.ik.pj) {
			for (player = 0; player < eg; player++)
				if (1 !== h4[player]) {
					if (player < po) {
						if (function() {
								var pm = aU.ik.pj[player] + 1,
									pn = aU.ik.pu[player] + 1;
								if (3 < pm && pm < ap.eB - 5 && 3 < pn && pn < ap.eC - 5 && a2.ee(a2.pv(pm, pn)) && pw(pm + 3, pn + 3)) return pq(pm + 1, pn + 1), 1;
								return
							}()) continue;
						if (pp()) {
							pm = pf + fL * pe + eU(pe, 2), pn = pg + fM * pe + eU(pe, 2), pq(pm, pn);
							continue
						}
					}
					pi()
				}
		} else ! function() {
			var pm, pn;
			for (player = 0; player < eg; player++) 1 !== h4[player] && (player < po && pp() ? (pm = pf + fL * pe + eU(pe, 2), pn = pg + fM * pe + eU(pe, 2), pq(pm, pn)) : pi())
		}();
		b1.ea[7] = f2[eX], b1.ea[8] = eY[eX]
	}, this.qB = function(hU, qC, qD) {
		var eG, pm, pn, ej, fL, fM;
		for (player = hU, eG = 0; eG < 20; eG++)
			for (pm = qC + eG; qC - eG <= pm; pm--)
				for (pn = qD + eG; qD - eG <= pn; pn--)
					if ((pm === qC + eG || pm === qC - eG || pn === qD + eG || pn === qD - eG) && 3 < pm && pm < ap.eB - 5 && 3 < pn && pn < ap.eC - 5 && a2.ee(a2.pv(pm, pn)) && pw(pm + 3, pn + 3)) {
						if (0 < f2[player]) {
							for (fM = fL = ej = void 0, fL = hv[player]; fL >= hw[player]; fL--)
								for (fM = hy[player]; fM >= hz[player]; fM--) ej = 4 * (fM * ap.eB + fL), a2.qF(player, ej) && (a2.qG(ej), f2[player]--);
							pi()
						}
						return q2(pm - 1, pn - 1), !0
					} return !1
	}, this.qH = function(hU) {
		player = hU, pp() ? pq(pf + fL * pe + eU(pe, 2), pg + fM * pe + eU(pe, 2)) : pi()
	}
}

function qI() {
	aD.qJ(), gG.setTransform(h9, 0, 0, h9, 0, 0), gG.imageSmoothingEnabled = h9 < 3, gG.drawImage(ap.pE, p.jh(), p.gE()), am.qK.gF(), gG.drawImage(qL, p.jh(), p.gE()), aD.gF(), gG.imageSmoothingEnabled = !1, gG.setTransform(1, 0, 0, 1, 0, 0), ak.qK
		.gF(), a6.gF(), e.gF(), (kA ? (b5.gF(), aa) : (k.gF(), s.gF(), o.gF(), aa.gF(), aI.gF(), t.gF(), p.gF(), n.gF(), b5.gF(), r.gF(), m.gF(), j.gF(), i.gF(), u.gF(), b2.gF(), aF)).gF()
}

function qM(qN, g6, gC) {
	qN.clearRect(0, 0, g6, gC), qN.fillStyle = aZ.kb, qN.fillRect(0, 0, g6, gC)
}

function qO(qN, g6, gC, qP) {
	qN.fillStyle = aZ.gH, qN.fillRect(0, 0, g6, qP), qN.fillRect(0, 0, qP, gC), qN.fillRect(g6 - qP, 0, qP, gC), qN.fillRect(0, gC - qP, g6, qP)
}

function qQ(qN, fL, fM, gJ, qP, ej, qR) {
	qN.fillStyle = aZ.gH;
	var ej = Math.floor(gJ * ej),
		qT = (ej += (ej - qP) % 2, Math.floor((ej - qP) / 2)),
		gJ = Math.floor((gJ - ej) / 2);
	qN.fillRect(fL + gJ, fM + gJ + qT, ej, qP), qR && qN.fillRect(fL + gJ + qT, fM + gJ, qP, ej)
}

function qV() {
	this.qW = null, this.cq = function(qW) {
		this.qW = qW, k.qX(this.qW)
	}, this.qY = function(qZ) {
		var gh = (this.qW[qZ].qa - this.qW[1 - qZ].qa) / 10,
			gh = 8 / (1 + Math.pow(2, gh / 32)),
			gh = Math.floor(10 * gh + .5),
			qc = this.qd(this.qW[qZ].qa + gh + 1),
			gh = this.qd(this.qW[1 - qZ].qa - gh);
		0 === qZ ? k.qf(this.qW, qc, gh, ["rgba(10,140,10,0.75)", "rgba(140,10,10,0.75)"]) : k.qf(this.qW, gh, qc, ["rgba(140,10,10,0.75)", "rgba(10,140,10,0.75)"])
	}, this.qd = function(qa) {
		return 16e3 <= (qa = qa < 0 ? 0 : 16e3 < qa ? 16e3 : qa) ? "Unknown" : (qa / 10).toFixed(1)
	}
}

function bL() {
	this.og = new qg, this.oi = new qh, this.cq = function() {
		this.og.cq()
	}
}

function qh() {
	this.ow = function(fz) {
		for (var ec = fz.length, g6 = ab, eG = 0; eG < ec; eG++) g6.ov(16, fz.charCodeAt(eG))
	}
}

function qg() {
	var qi = new Uint8Array(64);
	this.cq = function() {
		var eG;
		for (qi[0] = 45, qi[37] = 95, eG = 0; eG < 10; eG++) qi[eG + 1] = 48 + eG;
		for (eG = 0; eG < 26; eG++) qi[eG + 11] = 65 + eG, qi[eG + 38] = 97 + eG
	}, this.qj = function(qk) {
		for (var ol = ae, ot = new Uint8Array(qk), eG = 0; eG < qk; eG++) ot[eG] = ol.mL(6);
		return ot
	}, this.ql = function(ot) {
		for (var ec = ot.length, qm = qi, dp = [], eG = 0; eG < ec; eG++) dp.push(String.fromCharCode(qm[ot[eG]]));
		return dp.join("")
	}
}

function bT() {
	var qn, qo, qp;
	qn = [32, 65, 191, 913, 931], qo = [64, 127, 688, 930, 1155], qp = new Array(qn.length + 1);
	for (var eG = 0; eG < qp.length; eG++) {
		qp[eG] = 0;
		for (var hb = eG - 1; 0 <= hb; hb--) qp[eG] += qo[hb] - qn[hb]
	}

	function qv(iN) {
		for (var eG = qn.length - 1; 0 <= eG; eG--)
			if (iN >= qn[eG] && iN < qo[eG]) return eG;
		return -1
	}
	this.om = function(fz) {
		return 0 !== (fz = fz.trim()).indexOf("Bot ") && 0 !== fz.indexOf("[Bot] ") && function(fz, qs, qt) {
			var ec = (fz = fz.trim()).length;
			if (ec < qs || qt < ec) return !1;
			for (var iN, qu = 0, eG = 0; eG < ec; eG++)
				if (iN = fz.charCodeAt(eG), qu += 65 <= iN && iN <= 90 || 1040 <= iN && iN <= 1071 ? 1 : 0, -1 === qv(iN)) return !1;
			if (3 < qu && qu > Math.floor(ec / 2)) return !1;
			return !0
		}(fz, 3, 20)
	}, this.qw = function(fz) {
		for (var ec = (fz = fz.trim()).length, dp = [], eG = 0; eG < ec; eG++) {
			var iN, ej = qv(iN = fz.charCodeAt(eG));
			dp.push(qp[ej] + iN - qn[ej])
		}
		return dp
	}, this.p0 = function(dp) {
		for (var iN, hk, fz = "", ec = dp.length, eG = 0; eG < ec; eG++)
			for (hk = 1; hk < qp.length; hk++)
				if (dp[eG] < qp[hk]) {
					iN = qn[hk - 1] + dp[eG] - qp[hk - 1], fz += String.fromCharCode(iN);
					break
				} return fz
	}, this.qx = function(fz) {
		for (var dp = this.qw(fz), result = "", eG = 0; eG < dp.length; eG++) result = (result += dp[eG] < 10 ? "00" : dp[eG] < 100 ? "0" : "") + dp[eG].toString(10);
		return result
	}, this.qy = function(fz) {
		for (var dp = new Array(Math.floor(fz.length / 3)), eG = 0; eG < fz.length; eG += 3) dp[Math.floor(eG / 3)] = parseInt(fz.substring(eG, eG + 3));
		return this.p0(dp)
	}, this.qz = function(fz) {
		for (var de, dp = [fz.length], eG = 0; eG < fz.length; eG++) dp[eG] = fz.charCodeAt(eG) - 48;
		var result = "";
		for (eG = 0; eG < fz.length; eG++) eG === fz.length - 1 || 51 < 10 * dp[eG] + dp[eG + 1] ? result += dp[eG].toString() : (de = 10 * dp[eG] + dp[eG + 1], result += String.fromCharCode(de + (de < 26 ? 65 : 71)), eG++);
		return result
	}, this.r0 = function(fz) {
		for (var iN, result = "", eG = 0; eG < fz.length; eG++) 48 <= (iN = fz.charCodeAt(eG)) && iN < 58 ? result += String.fromCharCode(iN) : 65 <= iN && iN < 75 ? result += "0" + (iN - 65).toString() : 75 <= iN && iN < 91 ? result += (iN - 65)
			.toString() : 97 <= iN && iN < 123 && (result += (iN - 71).toString());
		return result
	}, this.r1 = function(fz) {
		for (var ec = fz.length, dp = [], eG = 0; eG < ec; eG++)(iN = fz.charCodeAt(eG)) < 58 ? dp.push(fz[eG]) : (iN -= iN < 91 ? 65 : 71, dp.push(String(eU(iN, 10))), dp.push(String(iN - 10 * eU(iN, 10))));
		var ec = dp.length - 2,
			iN = 0,
			ot = [];
		for (eG = 0; eG < ec; eG += 3) ot[iN++] = parseInt(dp[eG] + dp[eG + 1] + dp[eG + 2]);
		return ot
	}, this.r2 = function() {
		for (var gS, r3 = "", eG = 0; eG < 6; eG++) gS = 48 + aL.random() % 36, gS += 58 <= gS ? 39 : 0, r3 += String.fromCharCode(gS);
		return r3
	}
}

function cS() {
	this.r4 = new r5, this.iz = new r6, this.cq = function() {
		this.iz.cq()
	}
}

function r5() {
	function r8() {
		if (2 === rJ) return 1;
		aI.rK(), rJ = 2, rL = rM
	}

	function rB() {
		k.rN(!0), s.j7(!0), t.j7(!0), aI.j7(), aa.rO(), fO && b3.rP.rQ(), b3.d1 = !0, ay.rR(), b7.cv.setState(0)
	}
	this.r7 = function() {
		r8() || (aW.fQ.mG(), k.r9(247, 0), k.rA(0, 59), f.kF(2700), u.show(!1, !1, !0), rB())
	}, this.rC = function(rD) {
		var mD = 0,
			rE = !1;
		r8() || (8 === im ? ((rE = (mD = rD < 0 ? f2[0] >= f2[1] ? 0 : 1 : rD) === eX) ? k.rA(mD, 2) : k.rA(1 - eX, 3), rF.qY(mD), aW.fQ.mC(mD)) : hO ? (rE = b4.iO[eX] === b5.rG(), 9 === im ? (aW.fQ.mC(rE ? jH[0] : 512), k.rH(rE)) : ao.iz.i8(
			rE)) : (rE = (mD = jH[0]) === eX, k.rI(mD), aW.fQ.mC(mD)), u.show(rE, !1), rB())
	}
}

function r6() {
	var rS;

	function rm(rU, ek) {
		for (var fz = "", eG = ek; eG < rU.length && eG < ek + 4; eG++) fz += (eG === ek ? "" : "   ") + "[" + b4.re[rU[eG].id] + "]: " + rU[eG].rj.toFixed(Math.max(Math.floor(3 - Math.log10(rU[eG].rj)), 0));
		fz.length && k.rl(0, fz, 45, 0, aY.g1.kW(225, 240, 255), aZ.kb, -1, !1)
	}
	this.rT = 0, this.rU = null, this.cq = function() {
		rS = 0, this.rT = 0, this.rU = null
	}, this.i8 = function(rE) {
		var rV = b4.rW[b5.rX()];
		this.rT = b5.rY(), this.rU = function(rV, rT) {
				var eG, hk, ec, iO = b4.iO,
					rW = b4.rW,
					re = b4.re,
					rf = b4.rf,
					rg = f2,
					rh = h3,
					ri = [],
					g0 = 0;
				for (hk = re.length - 1; 0 <= hk; hk--)
					if (rW[iO[rf[hk][0]]] === rV) {
						for (ri.push({
								id: hk,
								rg: 0,
								player: rf[hk][0],
								rj: 0
							}), ec = rf[hk].length, eG = 0; eG < ec; eG++) ri[g0].rg += rg[rf[hk][eG]];
						for (ri[g0].rj = (1 + rk) * rh * ri[g0].rg / rT, eG = 0; eG < g0; eG++)
							if (ri[g0].rg > ri[eG].rg) {
								ri.splice(eG, 0, ri[g0]), ri.pop();
								break
							} g0++
					} 8 < ri.length && (ri.length = 8);
				for (; 0 < ri.length && 0 === ri[ri.length - 1].rg;) ri.pop();
				return ri
			}(rV, this.rT), n.ra("Team " + b4.fv[rV], 2, 1, 12),
			function(rE, rV) {
				var color;
				rE = rE ? (color = aY.g1.kW(10, 220, 10), "Congratulations! Team " + b4.fv[rV] + " won the game!") : (color = aY.g1.kW(200, 80, 80), "Our alliance was defeated! Team " + b4.fv[rV] + " won the game.");
				k.rl(0, rE, 40, 0, color, aZ.kb, -1, !1)
			}(rE, rV), 0 !== (rE = this.rU).length && (k.rl(0, "The allied clans of the winning team have earned these glorious points:", 40, 0, aZ.gH, aZ.kb, -1, !1), rm(rE, 0), rm(rE, 4)), aW.fQ.mI(), f.kF(2700)
	}, this.j0 = function() {
		2 === rJ && -1 !== rS && (0 === rS ? rS = this.rU && 0 !== this.rU.length ? b3.db + 8e3 : -1 : b3.db < rS || (rS = -1, k.rl(255, "Clan rankings and results can also be accessed under:", 735, 0, aZ.gH, aZ.kb, -1, !1), k.rl(255,
			"territorial.io/clans", 736, 0, aZ.gH, aZ.kb, -1, !1), k.rl(255, "territorial.io/clan-results", 736, 0, aZ.gH, aZ.kb, -1, !1)))
	}
}

function cY() {
	this.id = 0, this.df = 0, this.oU = null, this.oV = null, this.oW = null, this.oX = null, this.cv = new rn, this.cq = function() {
		var self, df;
		self = this, "undefined" == typeof Android || (df = Android.getVersion()) < 12 || (self.df = df, self.id = 1, self.oV = Android),
			function(self) {
				var df;
				"undefined" != typeof mwIOSdataX && window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.iosCommandA && (self.id = 2, self.oW = mwIOSdataX, self.oX = window.webkit.messageHandlers.iosCommandA, df = self
					.oW.version, self.df = df ? Number(df) : 0)
			}(this),
			function(self) {
				var oU;
				if (0 === self.id) {
					try {
						if (!(oU = window.localStorage)) return;
						oU.setItem("tls7", "1"), oU.removeItem("tls7")
					} catch (error) {
						return
					}
					self.oU = oU
				}
			}(this)
	}
}

function rn() {
	this.rr = function() {
		b9.nd.oe(), 0 === x.dZ() && (y.get().value = b9.dG.data[100].value), 0 === b7.id ? b7.oU && b7.oU.clear() : 1 === b7.id ? b7.oV.saveString(199, "") : 2 === b7.id && b7.oX.postMessage("clear")
	}, this.rs = function() {
		2 === b7.id ? b7.oX.postMessage("showConsentForm") : 1 === b7.id ? b7.oV.setState(7) : at.dI.showCMPScreen()
	}, this.rt = function() {
		this.setState(14)
	}, this.ru = function() {
		var rv;
		return 2 === b7.id && 0 === b7.df && "string" == typeof(rv = b7.oW.username) ? rv : b9.dG.data[100].value
	}, this.rw = function() {
		var fz = b9.dG.oQ(101),
			max = ("string" != typeof(fz = "" === fz ? function() {
				{
					if (2 === b7.id) return b7.oW.password;
					if (1 === b7.id) return 12 <= b7.df ? b7.oV.loadString(22) : ""
				}
				return a3.rz(9)
			}() : fz) && (fz = ""), Math.floor(Math.pow(2, 48))),
			ry = Math.floor(parseInt(h.r0(fz)));
		return 0 < ry && ry < max ? b9.dG.dH(101, fz) : (ry = Math.floor(1 + (max - 1) * Math.random()), b9.dG.dH(101, fz)), ry
	}, this.fw = function() {
		return 1 === b9.dG.oP(2)
	}, this.s0 = function() {
		for (var fz = "", eG = 0; eG < az.mr; eG += 2) fz += az.s1[eG] || az.s1[eG + 1] ? az.s1[eG] && !az.s1[eG + 1] ? "1" : !az.s1[eG] && az.s1[eG + 1] ? "2" : "3" : "0";
		b9.dG.dH(102, fz)
	}, this.setState = function(dX) {
		1 === b7.id && 5 <= b7.df && b7.oV.setState(dX)
	}, this.s2 = function() {
		var s3;
		1 === b7.id && 7 <= b7.df ? b7.oV.setState(5) : ((s3 = new URL(window.location)).searchParams.set("v", "" + Math.floor(1e3 * Math.random())), window.location.href = s3.toString())
	}, this.cw = function() {
		1 !== b7.id || b7.df < 17 || b7.oV.saveString(23, document.documentElement.outerHTML)
	}, this.dM = function() {
		0 === b7.id ? at.dI.cq() : 1 === b7.id ? b7.oV.prepareAd("1688441405") : 2 === b7.id && (0 === b7.df ? b7.oX.postMessage("prepare ad 4500876070") : b7.oX.postMessage("loadAds 4500876070"))
	}, this.dd = function(dc) {
		return 0 === b7.id ? !!at.dI.dV() : 1 === b7.id ? 12 <= b7.df && (b7.oV.presentAd(dc), !0) : 2 === b7.id && (0 === b7.df ? b7.oX.postMessage("show ad " + dc) : b7.oX.postMessage("showAd"), !0)
	}, this.d4 = function() {
		2 === b7.id && b7.df < 23 && ar.ob(4, 1, new s4("App Update Required", "A new iOS app version with bug fixes has been published.<br>Please download the new Territorial.io app version for iOS:<br><a href='" + ah.s5 + "' target='_blank'>" +
			ah.s5 + "</a>", !0, [new nN("❌ " + aV.nc[92], function() {
				ar.ob(0)
			}, aZ.l9)]))
	}
}

function cn() {
	function sI(title, sK, dE) {
		sD(dE), ar.ob(4, 0, new s4("⚠️ " + title, sK, !0))
	}

	function sD(dE) {
		! function(dE) {
			var dX = x.dZ();
			0 === dX ? a0.sM() : 6 === dX ? aN.iy.sN(dE) : 7 === dX ? (aG.sM(), aN.iy.close(aN.iy.sF, 3240)) : 8 === dX && (sO(!0), a0.sM())
		}(dE), a0.cq(), b3.d1 = !0
	}
	this.s6 = function(s7, dE) {
		if (8 === ar.s8) return ar.s9().sA(dE) ? void 0 : void ar.ob(4, 5, new s4("⚠️ " + aV.sB(64), aV.sC(dE), !0));
		var dX = x.dZ();
		if (6 === dX) {
			if (4211 === dE) return sD(dE), void ar.ob(4, 0, new s4("🚀 " + aV.nc[122], aV.nc[123], !0, [new nN("❌ " + aV.nc[92], function() {
				ar.ob(0)
			}, aZ.l9), new nN("🔄 " + aV.nc[124], function() {
				b7.cv.s2()
			}, aZ.kv)]));
			if (4214 !== dE) return void w.sE(s7)
		} else {
			if (7 !== dX) return 8 === dX ? void(s7 !== aN.iy.sG || ip || k.sH(aV.sC(dE))) : void 0;
			if (s7 !== aN.iy.sF) return
		}
		sI(aV.sB(64), aV.sC(dE), dE)
	}, this.sJ = function(dE) {
		8 === x.dZ() ? k.sH(aV.sC(dE)) : sI(aV.sB(64), aV.sC(dE))
	}
}

function bF() {
	var sP, sQ;

	function sR() {
		var g6 = new cJ;
		g6.d2(1612), g6.ov(1, 0), g6.ov(6, 7), g6.ov(2, 2 === b7.id ? 2 : 12 <= b7.df ? 1 : 0 < b7.df ? 3 : 0), g6.ov(1, d9 ? 1 : 0), g6.ov(1, dB ? 1 : 0), g6.ov(1, a.d5);
		for (let eG = 0; eG < sQ.length && eG < 100; eG++) g6.ov(16, sQ.charCodeAt(eG));
		sP.send(g6.mK), sP.onopen = null
	}
	window.addEventListener("error", function error(dE) {
		window.removeEventListener("error", error);
		return alert("Error:\n" + dE.filename + " " + dE.lineno + " " + dE.colno + " " + dE.message);
		window.removeEventListener("error", error), sQ = dE.lineno + " " + dE.colno + " " + dE.message, (sP = new WebSocket("wss://territorial.io/s52/")).onopen = sR, 0 === dE.lineno && 0 === dE.colno || (b7.oV ? b7.oV.showToast(sQ) : alert(
			sQ))
	})
}

function cM() {
	var sS, sT, sU = -15e3,
		sV = !1;

	function g9(dE) {
		so() || (sV = !0, sp(dE, 1), aN.iy.sq(aN.iy.sG), sr(Math.floor(aK.nH * dE.clientX), Math.floor(aK.nH * dE.clientY)))
	}

	function sd(dE) {
		sU = b3.db, sp(dE, 1), aN.iy.sq(aN.iy.sG), 0 < dE.touches.length && (sS = Math.floor(aK.nH * dE.touches[0].clientX), sT = Math.floor(aK.nH * dE.touches[0].clientY), aE.sd(dE) || sr(sS, sT))
	}

	function sr(fL, fM) {
		0 === rJ ? x.g9(fL, fM) : aa.ss(fL, fM) || b2.g9(fL, fM) || u.g9(fL, fM) || i.st(fL, fM) || m.g9(fL, fM) || j.g9(fL, fM) || ag.su(fL, fM) || aI.g9(fL, fM) || i.sv(fL, fM)
	}

	function sZ(dE) {
		so() || (sV = !0, sp(dE, 1), sw(Math.floor(aK.nH * dE.clientX), Math.floor(aK.nH * dE.clientY)))
	}

	function se(dE) {
		sU = b3.db, sp(dE, 1), 0 < dE.touches.length && (sS = Math.floor(aK.nH * dE.touches[0].clientX), sT = Math.floor(aK.nH * dE.touches[0].clientY), aE.se(dE) || sw(sS, sT))
	}

	function sw(fL, fM) {
		0 === rJ ? x.sZ(fL, fM) : (aq.fK(fL, fM), b2.sZ(fL, fM) || (j.sZ(fL, fM), i.da() ? i.sZ(fL, fM) : o.sx ? o.sZ(fL, fM) && (b3.d1 = !0) : (s.sZ(fL, fM), p.kB && p.sZ(fL, fM) && (b3.d1 = !0))))
	}

	function sb(dE) {
		so() || (sp(dE, 1), 0 === rJ ? (x.click(-1024, -1024), q.sy()) : (s.sz(-1024, -1024), j.sZ(-1024, -1024), o.t0(), p.kB && (p.kB = !1)))
	}

	function sa(dE) {
		so() || (sp(dE, 1), t1(Math.floor(aK.nH * dE.clientX), Math.floor(aK.nH * dE.clientY), 2 === dE.button))
	}

	function click(dE) {
		so() || sp(dE, 1)
	}

	function sf(dE) {
		sU = b3.db, sp(dE, 1), dE && dE.touches && 0 < dE.touches.length && 0 !== rJ ? p.kB = !1 : aE.t2() || t1(sS, sT, !1)
	}

	function sg(dE) {
		sU = b3.db, sp(dE, 1), t1(sS, sT, !1)
	}

	function sh(dE) {
		aT.sh(dE)
	}

	function si(dE) {
		aT.si(dE)
	}

	function sj(dE) {
		so() || sp(dE, 0)
	}

	function t1(fL, fM, t3) {
		0 === rJ ? x.click(fL, fM) : (s.sz(fL, fM), b2.sz(), o.t0(), p.kB = !1, i.click(fL, fM, t3) && (b3.d1 = !0))
	}

	function sc(dE) {
		var fL, fM, deltaY;
		so() || (sp(dE, 1), aN.iy.sq(aN.iy.sG), fL = Math.floor(aK.nH * dE.clientX), fM = Math.floor(aK.nH * dE.clientY), deltaY = dE.deltaY, 1 === dE.deltaMode && (deltaY *= 16), 0 === rJ ? x.sc(fL, fM, deltaY) : s.sc(fL, fM, deltaY) || (o.t4(fL,
			fM) ? o.sc(deltaY) && (b3.d1 = !0) : p.sc(fL, fM, +deltaY)))
	}

	function sk(dE) {
		sp(dE, 0)
	}

	function sp(dE, id) {
		0 === id && (av.da || y.da || ar.da()) || 1 === id && y.t5 || (id = window.innerWidth / document.documentElement.clientWidth) < .999 || 1.001 < id || 0 !== x.dZ() && dE.preventDefault()
	}

	function sl(dE) {
		so() || b3.db < 400 || ar.t7(dE) || (8 !== x.dZ() && x.t7(dE) ? b3.d1 = !0 : "Escape" === dE.key ? x.dg() : "ArrowLeft" === dE.key || "a" === dE.key ? aB.t8(3) : "ArrowUp" === dE.key || "w" === dE.key ? aB.t8(0) : "ArrowRight" === dE.key ||
			"d" === dE.key ? aB.t8(1) : "ArrowDown" === dE.key || "s" === dE.key ? aB.t8(2) : "h" === dE.key ? 1 <= rJ && aa.t9(!kA) : " " === dE.key && rJ && (aq.fN(), j.fP && j.tA(), fO) && aa.tB(!1))
	}

	function sm(dE) {
		if (keybindHandler(dE.key)) return;
		so() || ("ArrowLeft" === dE.key ? aB.tC(3) : "ArrowUp" === dE.key ? aB.tC(0) : "ArrowRight" === dE.key ? aB.tC(1) : "ArrowDown" === dE.key ? aB.tC(2) : "a" === dE.key ? o.tD(.9375) : "d" === dE.key ? o.tD(16 / 15) : "s" === dE.key ? o.tD(7 /
				8) : "w" === dE.key ? o.tD(8 / 7) : "1" === dE.key ? o.tD(.75) : "2" === dE.key ? o.tD(7 / 8) : "3" === dE.key ? o.tD(.9375) : "4" === dE.key ? o.tD(31 / 32) : "5" === dE.key ? o.tD(32 / 31) : "6" === dE.key ? o.tD(16 / 15) :
			"7" === dE.key ? o.tD(8 / 7) : "8" === dE.key ? o.tD(4 / 3) : "+" === dE.key ? 0 !== rJ && p.sc(Math.floor(aK.g6 / 2), Math.floor(aK.gC / 2), -200) : "-" === dE.key ? 0 !== rJ && p.sc(Math.floor(aK.g6 / 2), Math.floor(aK.gC / 2),
			200) : "c" === dE.key && 0 !== rJ && b2.tE())
	}

	function sn() {
		"hidden" === document.visibilityState ? 1 === rJ && (fO ? aa.tB(!1) : !ip || j.fP || fd || j.tA()) : b3.d1 = !0
	}

	function so() {
		return sU + 15e3 > b3.db
	}

	function resize() {
		aK.tH()
	}
	this.sW = 0, this.sX = "", this.cq = function() {
		sY.addEventListener("mousedown", g9, {
			passive: !1
		}), sY.addEventListener("mousemove", sZ, {
			passive: !1
		}), sY.addEventListener("mouseup", sa, {
			passive: !1
		}), sY.addEventListener("click", click, {
			passive: !1
		}), sY.addEventListener("mouseleave", sb, {
			passive: !1
		}), sY.addEventListener("wheel", sc, {
			passive: !1
		}), sY.addEventListener("touchstart", sd, {
			passive: !1
		}), sY.addEventListener("touchmove", se, {
			passive: !1
		}), sY.addEventListener("touchend", sf, {
			passive: !1
		}), sY.addEventListener("touchcancel", sg, {
			passive: !1
		}), sY.addEventListener("dragover", sh), sY.addEventListener("drop", si), sY.addEventListener("dblclick", sj), document.addEventListener("contextmenu", sk), document.addEventListener("keyup", sl), document.addEventListener("keydown",
			sm), document.addEventListener("visibilitychange", sn), window.addEventListener("resize", resize)
	}, this.su = function(fL, fM) {
		return !!aa.g9(fL, fM) || !!(s.g9(fL, fM) || p.g9(fL, fM) || o.g9(fL, fM) || k.g9(fL, fM))
	}, this.tF = so, this.tG = function() {
		return !sV || 0 < sU
	}
}

function bJ() {
	this.g1 = new tI, this.pG = new tJ, this.fQ = new tK, this.jl = new tL, this.cq = function() {
		this.g1.od()
	}
}

function tJ() {
	this.pH = function(dp) {
		dp.fill(0)
	}, this.tM = function(dp) {
		for (var ec = dp.length, eG = 0; eG < ec; eG++) dp[eG] = []
	}, this.tN = function(gc, fu) {
		for (var gd = al.dk, eG = 0; eG < 3; eG++) gd[eG] = fu * gc[eG];
		return gd
	}, this.tO = function(gc, gd, tP) {
		for (var gh = 0, eG = 0; eG < 3; eG++) gh += Math.abs(gc[eG] - gd[eG]);
		return tP <= gh
	}, this.tQ = function(gc, tR) {
		for (var eG = 0; eG < 3; eG++) gc[eG] = ai.lS(gc[eG] + tR, 0, 255);
		return gc
	}, this.tS = function(dp, tT = 0, tU = dp.length - 1) {
		for (var tV = 0, eG = tT; eG <= tU; eG++) tV += dp[eG];
		return tV
	}, this.tW = function(dp, tX) {
		for (var eG, tY, ec = dp.length, tZ = [], hb = ec - 1; 0 <= hb; hb--) {
			for (eG = tY = 0; eG < ec; eG++) tX(dp[eG]) < tX(dp[tY]) && (tY = eG);
			ec--, tZ.push(dp[tY]), dp[tY] = dp[ec], dp.pop()
		}
		return tZ
	}
}

function tI() {
	var ta = null;
	this.tb = 0, this.od = function() {
		var de = b9.dG.data[5].value;
		ta = "px " + de, "Trebuchet MS" !== de && (ta += ", Trebuchet MS"), this.tb = gI(32, 32, ["a", "b", "m"], 200, ta)
	}, this.p6 = function(g6, gC) {
		var iN = document.createElement("canvas");
		return iN.width = g6, iN.height = gC, iN
	}, this.getContext = function(gP, alpha) {
		return gP.getContext("2d", {
			alpha: alpha
		})
	}, this.getImageData = function(qN, g6, gC) {
		return qN.getImageData(0, 0, g6, gC)
	}, this.kW = function(gS, tc, hk) {
		return "rgb(" + gS + "," + tc + "," + hk + ")"
	}, this.kY = function(gS, tc, hk, hb) {
		return "rgba(" + gS + "," + tc + "," + hk + "," + hb.toFixed(3) + ")"
	}, this.g2 = function(type, size) {
		return size = size.toFixed(2), 0 === type ? size + ta : 1 === type ? "bold " + size + ta : 2 === type ? "lighter " + size + ta : 3 === type ? "italic " + size + ta : 4 === type ? "oblique " + size + ta : 5 === type ? "small-caps " +
			size + ta : "small-caps bold " + size + ta
	}, this.textAlign = function(gQ, id) {
		gQ.textAlign = 0 === id ? "left" : 1 === id ? "center" : "right"
	}, this.textBaseline = function(gQ, id) {
		gQ.textBaseline = 1 === id ? "middle" : "bottom"
	}, this.nM = function(dE, code = 5, color = aZ.gH) {
		color = this.nL(b0.td) + " solid " + color;
		5 === code ? dE.style.border = color : 4 === code ? dE.style.borderLeft = color : 2 === code ? dE.style.borderBottom = color : 6 === code ? dE.style.borderRight = color : dE.style.borderTop = color
	}, this.nD = function(de) {
		return 1 + de * b7.cv.fw()
	}, this.nh = function(kI, ek = .5) {
		return kI * this.nD(ek) * aK.fx / aK.nH
	}, this.nL = function(de) {
		return de.toFixed(1) + "px"
	}, this.te = function(tf, tg) {
		for (var fz = "<ul>", ec = tf.length, eG = 0; eG < ec; eG++) fz += "<li>" + tf[eG] + ": <a href='" + tg[eG] + "' target='_blank'>" + tg[eG] + "</a></li>";
		return fz += "</ul>"
	}, this.th = function(dE) {
		navigator.clipboard && navigator.clipboard.writeText(dE.value)
	}, this.ti = function(dE) {
		dE.innerText.startsWith("✅ ") || (dE.innerText = "✅ " + dE.innerText, setTimeout(function() {
			dE.innerText = dE.innerText.substring(dE.innerText.indexOf(" ") + 1)
		}, 1e3))
	}
}

function tK() {
	this.fR = function(dX) {
		return 0 === dX ? 1 === rJ && fd : 1 === dX ? 1 === rJ && !fd : 2 === rJ
	}, this.fS = function(player) {
		return 0 !== h4[player] && 2 !== h5[player]
	}, this.mc = function(tj, tk) {
		return tj !== tk
	}, this.m0 = function(player, de) {
		return de = this.tl(player, de), eY[player] += de, de
	}, this.tl = function(player, de) {
		var tm = eY[player];
		return de = Math.min(de, f2[player] * tn - tm), de = Math.min(de, to - tm), Math.max(de, 0)
	}, this.md = function(player, h7, tp, tq) {
		var tm = eY[player],
			h7 = ai.fH(tm * (h7 + 1), 1024),
			tp = ai.fH(tp * tm, 1024),
			h7 = Math.min(h7, tm - tp);
		return 10 === im && (h7 = aR.ts(player, h7)), al.di[0] = h7, al.di[1] = tp, tq <= h7
	}, this.lx = function(player, lg, lf) {
		var player = eY[player],
			tr = ai.fH(64 * player, 1024);
		return lg = Math.min(lg, player - tr), tr += player = this.tu(lg), lg = this.tl(lf, lg -= player), al.di[0] = lg, al.di[1] = tr, 1 <= lg
	}, this.lz = function(lg, lf) {
		var tt = this.tu(lg);
		return lg = this.tl(lf, lg -= tt), al.di[0] = lg, al.di[1] = tt, 1 <= lg
	}, this.h6 = function(player, tv) {
		return ai.fH(eY[player] * (tv + 1), 1024)
	}, this.tu = function(tw) {
		return ai.fH(Math.max(2142 - b3.iM(), 0) * tw, 2142)
	}, this.mp = function(player, tp) {
		eY[player] -= ai.fH(tp * eY[player], 1024)
	}, this.mf = function(player) {
		eY[player] -= al.di[0] + al.di[1]
	}, this.me = function(player, hU) {
		return (hU = Math.min(hU, eg)) < eg && 0 === h4[hU] && (hU = eg), (al.dm[0] = hU) === eg || fs(player, hU)
	}, this.mh = function(player, lf) {
		return 0 !== h4[lf] && !fs(player, lf)
	}
}

function tL() {
	this.jm = function(de) {
		var eG, tx, ty, tz, u0;
		if (de < 0) return "-" + this.jm(Math.abs(de));
		if (de < 1e3) return de.toString();
		for (tx = Math.floor(Math.log(de + .5) / Math.log(10)) + 1, ty = Math.floor((tx - 1) / 3), u0 = (tz = de.toString()).substring(tx - 3, tx), eG = 1; eG < ty; eG++) u0 = tz.substring(tx - 3 * (eG + 1), tx - 3 * eG) + " " + u0;
		return tz.substring(0, tx - 3 * ty) + " " + u0
	}, this.u1 = function(ej, tx) {
		return ej.toFixed(tx) + "%"
	}, this.u2 = function(de, u3 = 3) {
		return de.toFixed(Math.max(Math.floor(u3 - Math.log10(de)), 0))
	}, this.u4 = function(de, kI, tx) {
		return (de * kI).toFixed(tx)
	}, this.u5 = function(username) {
		var u7, u6 = username.indexOf("[");
		return !(u6 < 0) && 1 < (u7 = username.indexOf("]")) - u6 && u7 - u6 <= 8 ? username.substring(u6 + 1, u7).toUpperCase().trim() : null
	}
}

function u8() {
	this.hR = function(player, fY) {
		g.qB(player, aj.gZ(fY), aj.gb(fY)) && (b3.d1 = !0), ip && this.i8()
	}, this.i8 = function() {
		var eG;
		for (fd = !1, eG = 0; eG < h3; eG++) 0 !== h4[eG] && 0 === f2[eG] && g.qH(eG);
		0 !== h4[eX] ? (b1.ea[7] = f2[eX], b1.ea[8] = eY[eX], o.gD(), t.u9(), fO || f.k7(hw[eX] - 5, hz[eX] - 5, hv[eX] + 5, hy[eX] + 5), aF.cq()) : u.show(!1, !1, !1, !0), k.uA(18), a6.uB(), a6.j7(!0), am.iy.uC(), mb = null, ay.uD = !0, ay.uE(),
			ip && b7.cv.setState(1)
	}
}
var ip, fO, uF, to, uG, eX, kA, fd, uH, hO, uI, im, rk, mb, rF, uJ, h9, h8, hA, xz, jH, zw, jn, wd, h4, hw, hz, hv, hy, f2, q3, eY, ed, eu, ev, ey, h5, iQ, iP, sY, gG, qL, a1W, uY, uZ, eg = 512,
	po = 512,
	tn = 150,
	rJ = 0,
	q4 = 512,
	eV = 2;

function uK(uL, uM, qW, uN, uO, uP) {
	kA = !1, fO = uP, rk = uO, hO = (im = uN) < 7 || 9 === im, rM = h3 = qW.length, ip = 1 === rM, uI = 9 === (im = 8 === (im = 10 === im && ip ? 7 : im) && 2 !== h3 ? 7 : im) ? 2 : im + 2, uJ = h3 <= 2 ? 30 : h3 <= 50 ? 40 : 50, uH = fd = !(aU.ij &&
			!aU.ik.uQ) && (hO || h3 < 100), mb = fd ? new u8 : null, q4 = 512, po = eg, ip && (po = z.uR()), ii = po - h3, rL = 0, eX = uM, aL.uS(uL), aM.cq(), uT(qW), aW.lX.mO = [], b4.cq(qW), rJ = 1, to = 15e8, uG = 1e9, b1.cq(), uU(), a9.uV(), ay
		.cq(), a5.cq(), i3(), a2.cq(qW), aD.cq(), aj.cq(), ak.cq(), ao.cq(), b.cq(), a7.d2(), a7.uW(), g.cq(), uX(), aX.cq(uL, qW, uN, uO), b5.cq(), an.cq(), am.cq(), b2.cq(), uY.putImageData(uZ, 0, 0), s.cq(), p.cq(), o.cq(), aa.cq(), aI.cq(), r
		.cq(), t.cq(), j.cq(), n.cq(), k.cq(), m.cq(), i.cq(), u.cq(), e.cq(), c.cq(), d.cq(), eA(), a4.cq(), a6.cq(), aR.cq(), aQ.cq(), aS.cq(), aO.cq(), 8 === im ? (rF = new qV).cq(qW) : rF = null, b3.ua(), ub(), aF.cq(), b3.d1 = !0, fO || ip &&
		fd || b7.cv.setState(1)
}

function ub() {
	f.k6(), 0 === h4[eX] && u.show(!1, !0), a6.j7(!0)
}

function sO(uc) {
	aN.iy.close(aN.iy.sG, 3246), rJ = 0, b3.ud(), b7.cv.setState(0), a0.cq(!uc)
}

function cm() {
	this.ue = 0, this.gap = 0, this.td = 0, this.nJ = 0, this.cq = function() {
		this.resize()
	}, this.resize = function() {
		this.ue = .0022 * aY.g1.nD(.5) * aK.fx, this.td = this.ue / aK.nH, this.gap = Math.max(Math.floor((b7.cv.fw() ? .0114 : .01296) * aK.fx), 2), this.nJ = this.gap / aK.nH
	}
}

function cl() {
	this.uf = function() {
		return 2 === b7.id ? 4 : b7.cv.fw() ? 2 : 1
	}
}

function bU() {
	var nU, fL, fM, ug, uh, ui, db, player, uj, gap, zoom, m9, uk;

	function v0(player) {
		for (var eG = m9.length - 1; 0 <= eG; eG--)
			if (m9[eG] === player) return 1
	}

	function uy(uv) {
		var eG, ec;
		if (-1 !== uv)
			for (ec = nU.length, eG = 0; eG < ec; eG++)
				if (nU[eG].da && nU[eG].fL + 1 === uv % 4 && nU[eG].fM + 1 === uv >> 2) return eG;
		return -1
	}

	function ux(gA, gB) {
		var tc = gap / 2;
		return gA < fL - ug - 3 * tc || fL + 3 * ug + 5 * tc < gA || gB < fM - ug - 3 * tc || fM + 2 * ug + 3 * tc < gB ? -1 : 4 * (gB < fM - tc ? 0 : gB < fM + ug + tc ? 1 : 2) + (gA < fL - tc ? 0 : gA < fL + ug + tc ? 1 : gA < fL + 2 * ug + 3 *
			tc ? 2 : 3)
	}
	this.ul = function() {
		var eG, hk, uo = [aZ.ky, aZ.l8, aZ.kc, aZ.lM, aZ.lF];
		for (nU = new Array(8), eG = 0; eG < 8; eG++) nU[eG] = {
			id: eG,
			da: !1,
			up: 0,
			gP: [],
			fL: 0,
			fM: 0
		};
		for (nU[0].colors = [0, 1, 2, 3], nU[0].fL = 0, nU[0].fM = 0, nU[1].colors = [0, 1, 4], nU[1].fL = 1, nU[1].fM = 0, nU[2].colors = [0, 2], nU[2].fL = -1, nU[2].fM = 0, nU[3].colors = [0], nU[3].fL = 0, nU[3].fM = 0, nU[4].colors = [0, 2],
			nU[4].fL = 1, nU[4].fM = 1, nU[5].colors = [3], nU[5].fL = 0, nU[5].fM = -1, nU[6].id = 20, nU[6].colors = [0], nU[6].fL = 1, nU[6].fM = -1, nU[7].id = 21, nU[7].colors = [0], nU[7].fL = 0, nU[7].fM = 1, eG = 0; eG < 8; eG++)
			for (hk = 0; hk < nU[eG].colors.length; hk++) nU[eG].gP.push(function(id, uq) {
				var gJ = a1.get(3).height,
					ur = aY.g1.p6(gJ, gJ),
					gQ = aY.g1.getContext(ur);
				20 === id ? gQ.drawImage(a1.get(18), 0, 0) : 21 === id ? gQ.drawImage(a1.us("emojis"), -4 * gJ, 0) : (function(g6, qN, uu) {
					qN.fillStyle = uu, qN.beginPath(), qN.arc(Math.floor(g6 / 2), Math.floor(g6 / 2), Math.floor(.47 * g6), 0, 2 * Math.PI), qN.fill()
				}(gJ, gQ, uq), gQ.drawImage(a1.get(3), -id * gJ, 0));
				return ur
			}(nU[eG].id, uo[nU[eG].colors[hk]]))
	}, this.un = function() {
		return nU
	}, this.cq = function() {
		m9 = [], fL = fM = db = 0, uh = ui = -1e3, this.resize()
	}, this.resize = function() {
		ug = Math.floor((b7.cv.fw() ? .075 : .0468) * aK.fx), zoom = ug / a1.get(3).height, gap = Math.floor(ug / 3)
	}, this.st = function(gA, gB) {
		return !!this.da() && (b3.d1 = !0, !!az.g9(gA, gB, player) || (gA = function(gA, gB) {
			var uv, eG;
			if (ui = uh = -1e3, uv = ux(gA, gB), -1 === (uv = uy(uv))) return 0;
			if (1 === nU[uv].colors[nU[uv].up]) return 0;
			if (5 === uv) {
				if (! function() {
						var dc = (new Date).getTime();
						uk + 4e3 < dc && (m9 = []);
						uk = dc
					}(), v0(player)) return 1;
				m9.push(player), 16 < m9.length && m9.shift()
			} else if (6 === uv) {
				for (eG = m9.length - 1; 0 <= eG; eG--) 0 === h4[m9[eG]] && m9.splice(eG, 1);
				0 < m9.length && (aS.v1(1, m9, !0) && aW.fQ.m8(m9, player), m9 = [])
			} else if (2 === uv) aW.fe.le(o.fn(), player);
			else if (3 === uv) fd && aW.fe.ff(uj);
			else if (0 === uv)
				if (0 === nU[0].up) {
					if (uH && t.v2() < 300) return 1;
					aW.fe.fp(o.fn(), player)
				} else aO.fr(player, o.fn());
			else if (1 === uv) aW.fe.fm(o.fn(), uj);
			else {
				if (7 === uv) return az.show(gA, gB), 2;
				if (4 !== uv) return 0;
				aS.v1(0, [player], !0) && aW.fQ.m5(player)
			}
			return 1
		}(gA, gB), this.o3(), 2 === gA && (az.da = !0), 0 < gA))
	}, this.sv = function(gA, gB) {
		this.da() || (uh = gA, ui = gB, db = (new Date).getTime())
	}, this.click = function(gA, gB, t3) {
		var fU = aj.fV(gA),
			fW = aj.fX(gB),
			fY = aj.fZ(fU, fW),
			fa = aj.fb(fY);
		return !(!aj.fc(fU, fW) || (fU = (b7.cv.fw() ? .025 : .0144) * aK.fx, Math.abs(gA - uh) > fU) || Math.abs(gB - ui) > fU || performance.now() > db + 425) && (t3 ? (function(gA, gB, fa) {
			a2.ee(fa) || -1 === (gA = ak.fg.vE(gA, gB)) ? k.vD(fa) : k.vF(gA)
		}(gA, gB, fa), !1) : j.fP || this.da() || !aY.fQ.fS(eX) || fO ? (this.o3(), !1) : fd ? !!a2.ee(fa) && (uj = fY, nU[3].da = !0, this.v5(gA, gB)) : (ak.fg.fh(fY) || ak.fg.fi(gA, gB) || (2 === rJ ? a2.em(fa) && 0 < az.v6 && (player =
			a2.en(fa), a2.v7(player)) && (nU[0].da = !0, nU[0].up = 1, nU[7].da = !0) : a2.fj(fa) || (uj = fY, ak.fg.fl(eX, fY) && (nU[0].da = !0, nU[0].up = 1, nU[1].da = !0, nU[1].up = al.dl[2] ? 0 : 2), a2.fk(fa)) || (a2.eo(
			fa) ? (player = eg, fo(eX) ? (nU[0].da = !0, nU[0].up = 0) : fq(eX, player) && (nU[0].da = !0, nU[0].up = 3)) : (player = a2.en(fa)) === eX ? 0 !== az.v6 && (nU[0].da = !0, nU[0].up = 1, nU[7].da = !0) : (nU[0].up = 1,
				nU[5].da = function(player) {
					return a2.v7(player) && !v0(player) && aS.v1(1, [player], !1)
				}(player), nU[7].da = 1 <= az.v6 && a2.v7(player), fs(player, eX) ? (nU[4].da = a2.v7(player) && !a6.v9(player) && aS.v1(0, [player], !1), nU[6].da = function(player) {
					if (0 === m9.length) return !1;
					if ((new Date).getTime() > uk + 4e3) return !(m9 = []);
					return !v0(player) && ! function(player) {
						var eG;
						if (hO)
							for (eG = m9.length - 1; 0 <= eG; eG--)
								if (!fs(player, m9[eG])) return 1;
						return
					}(player)
				}(player), ft(eX, player) ? (nU[0].up = 0, nU[0].da = !0) : fq(eX, player) && (nU[0].up = 3, nU[0].da = !0), nU[0].da = this.vB()) : (nU[2].da = !0, nU[0].da = !0)))), this.v5(gA, gB)))
	}, this.v5 = function(gA, gB) {
		return fL = gA - Math.floor(ug / 2), fM = gB - Math.floor(ug / 2), !!this.da()
	}, this.sZ = function(gA, gB) {
		return !!this.da() && (az.da ? !az.vH(gA, gB) && (az.vI(), az.da = !1, b3.d1 = !0) : function(vK, gA, gB) {
			gA = ux(gA, gB);
			if (0 <= uy(gA)) return !1;
			if ((1 === gA || 6 === gA) && 0 <= uy(2)) return !1;
			if ((6 === gA || 9 === gA) && 0 <= uy(10)) return !1;
			return vK.o3(), b3.d1 = !0
		}(this, gA, gB))
	}, this.o3 = function() {
		for (var eG = nU.length - 1; 0 <= eG; eG--) nU[eG].da = !1, nU[eG].up = 0;
		az.da = !1
	}, this.da = function() {
		return this.vB() || az.da
	}, this.vB = function() {
		for (var ec = nU.length, eG = 0; eG < ec; eG++)
			if (nU[eG].da) return !0;
		return !1
	}, this.gF = function() {
		if (this.da())
			if (az.da) az.gF();
			else {
				var eG, gQ = gG,
					hk = nU,
					ec = hk.length,
					vM = (ug + gap) / zoom;
				for (gQ.imageSmoothingEnabled = !0, gQ.setTransform(zoom, 0, 0, zoom, fL, fM), eG = 0; eG < ec; eG++) hk[eG].da && gG.drawImage(hk[eG].gP[hk[eG].up], hk[eG].fL * vM, hk[eG].fM * vM);
				gQ.imageSmoothingEnabled = !1, gQ.setTransform(1, 0, 0, 1, 0, 0)
			}
	}
}

function bV() {
	var gC, gP, g5, vN, vO;

	function vP() {
		var vQ, qN = gP.getContext("2d", {
			alpha: !0
		});
		qN.clearRect(0, 0, gC, gC), qN.fillStyle = aZ.kZ, qN.fillRect(0, 0, gC, gC), 0 === vN && (qN.fillStyle = aZ.ke, qN.fillRect(0, 0, gC, gC)), qN.fillStyle = aZ.gH, qN.fillRect(0, 0, gC, 1), qN.fillRect(0, 0, 1, gC), qN.fillRect(0, gC - 1, gC,
			1), qN.fillRect(gC - 1, 0, 1, gC), vQ = .9 * gC / a1.get(0).width, qN.imageSmoothingEnabled = !0, qN.setTransform(vQ, 0, 0, vQ, Math.floor((gC - vQ * a1.get(0).width) / 2), Math.floor((gC - vQ * a1.get(0).height) / 2)), qN.drawImage(
			a1.get(0), 0, 0), qN.setTransform(1, 0, 0, 1, 0, 0)
	}

	function vT(gA, gB) {
		if (!j.fP) return gA <= gC + b0.gap && gB >= o.fM ? 0 : -1;
		if (gA <= 4 * gC + b0.gap) {
			if (gB >= o.fM) return 0;
			if (gB >= o.fM - gC - vO * b0.gap) return 2
		} else if (gA <= 7 * gC + b0.gap && gB >= o.fM - gC - vO * b0.gap) return 1;
		return -1
	}
	this.fP = !1, this.cq = function() {
		vN = -1, this.fP = !1, vO = b7.cv.fw() ? 1.2 : .6, this.resize()
	}, this.resize = function() {
		gC = o.gC, (gP = document.createElement("canvas")).width = gC, gP.height = gC, g5 = aY.g1.g2(1, (b7.cv.fw() ? .5 : .45) * gC), vP()
	}, this.tA = function() {
		this.fP = !this.fP, this.fP ? (aa.t9(!1), fO && aa.vR && aa.tB(!0), this.vS()) : (vN = -1, vP(), ip && 1 === rJ && !fd && b7.cv.setState(1)), b3.d1 = !0
	}, this.vS = function() {
		(ip || fO) && 1 === rJ && (s.j7(!0), fd || setTimeout(function() {
			ay.rR()
		}, 0), b7.cv.setState(0))
	}, this.g9 = function(gA, gB) {
		var up = vT(gA, gB);
		if (this.fP) {
			if (kA) return 0 <= up && aa.t9(!1), !fO;
			if (0 === up) sO();
			else if (1 === up) this.tA();
			else if (2 === up) ar.ob(1);
			else {
				if (!(ip || 1 !== rJ || fO || b2.da) && (j.tA(), 1)) return !1;
				ag.su(gA, gB) || i.sv(gA, gB)
			}
			return !0
		}
		return 0 === up && (this.tA(), !0)
	}, this.sZ = function(gA, gB) {
		gA = vT(gA, gB);
		gA !== vN && (vN = gA, this.fP || vP(), b3.d1 = !0)
	}, this.gF = function() {
		var g6;
		this.fP ? (g6 = Math.floor(5.5 * gC), gG.setTransform(1, 0, 0, 1, b0.gap, o.fM), gG.fillStyle = aZ.kZ, gG.fillRect(0, 0, g6, gC), 0 === vN ? (gG.fillStyle = aZ.ke, gG.fillRect(0, 0, 4 * gC, gC)) : 1 === vN && (gG.fillStyle = aZ.ke, gG
				.fillRect(4 * gC, 0, Math.floor(1.5 * gC), gC)), gG.fillStyle = aZ.gH, gG.fillRect(0, 0, g6, 1), gG.fillRect(0, 0, 1, gC), gG.fillRect(4 * gC, 0, 1, gC), gG.fillRect(0, gC - 1, g6, 1), gG.fillRect(g6 - 1, 0, 1, gC), gG.font =
			g5, aY.g1.textBaseline(gG, 1), aY.g1.textAlign(gG, 1), gG.fillText(aV.nc[79], 2 * gC, .54 * gC), g6 = .4 * gC, j.vY(b0.gap + 4 * gC + (1.5 * gC - g6) / 2, o.fM + .3 * gC, g6), g6 = 1, gG.setTransform(1, 0, 0, 1, b0.gap, o.fM -
				g6 * vO * b0.gap - g6 * gC), gG.fillStyle = aZ.kZ, gG.fillRect(0, 0, 4 * gC, gC), vN === g6 + 1 && (gG.fillStyle = aZ.ke, gG.fillRect(0, 0, 4 * gC, gC)), gG.fillStyle = aZ.gH, gG.fillRect(0, 0, 4 * gC, 1), gG.fillRect(0, 0, 1,
				gC), gG.fillRect(4 * gC, 0, 1, gC), gG.fillRect(0, gC - 1, 4 * gC, 1), gG.fillText(aV.nc[79 + g6], 2 * gC, .54 * gC), gG.setTransform(1, 0, 0, 1, 0, 0)) : gG.drawImage(gP, b0.gap, o.fM)
	}, this.vX = function(player) {
		return 0 !== h4[player] && 2 !== rJ && a2.v7(player)
	}, this.vY = function(fL, fM, ec) {
		gG.setTransform(1, 0, 0, 1, fL, fM), gG.lineWidth = b0.ue, gG.strokeStyle = aZ.gH, gG.beginPath(), gG.moveTo(0, 0), gG.lineTo(ec, ec), gG.moveTo(0, ec), gG.lineTo(ec, 0), gG.stroke()
	}
}

function bW() {
	var va, gC, vb, vc, vd, ve, vf, vg, vh;

	function gE() {
		return o.w1(k.vx()) ? aI.da ? o.fM - o.gC - 2 * vb : o.fM - vb : aa.w1(k.w0()) ? aI.da ? aa.gE() - o.gC - 2 * vb : aa.gE() - vb : aI.da ? aK.gC - o.gC - (bA.uf() + 1) * vb : aK.gC - bA.uf() * b0.gap
	}

	function vo(dc, fz, id, ej, vs, vt, pR, vu, vv) {
		var eG, qN, vy, ur, n6, w4 = void 0 !== vv,
			g6 = Math.floor(n.measureText(fz, k.g5) + 1.5 * vc + (w4 ? gC : 1.5 * vc));
		if (b3.d1 = !0, g6 + vb > aK.g6 && !w4 && 50 !== id && 20 < fz.length) vy = Math.floor(.5 * fz.length), vo(dc, fz.substring(0, vy), id, ej, vs, vt, pR, vu, vv), vo(dc, fz.substring(vy), id, ej, vs, vt, pR, vu, vv);
		else if (vy = g6 + (50 === id ? vd : 0), (ur = document.createElement("canvas")).width = g6, ur.height = gC, (qN = ur.getContext("2d", {
				alpha: !0
			})).font = k.g5, aY.g1.textBaseline(qN, 1), aY.g1.textAlign(qN, 0), qN.clearRect(0, 0, g6, gC), qN.fillStyle = vt, qN.fillRect(0, 0, g6, gC), qN.fillStyle = vs, qN.fillText(fz, Math.floor(1.5 * vc), Math.floor(gC / 2)), w4 && (w4 = gC /
				az.g6, qN.imageSmoothingEnabled = !0, qN.setTransform(w4, 0, 0, w4, g6 - gC, 0), qN.drawImage(az.ur[vv], 0, 0)), 0 === (n6 = {
				db: dc,
				fz: fz,
				id: id,
				player: ej,
				gP: ur,
				vs: vs,
				vt: vt,
				g6: g6,
				vy: vy,
				pR: pR,
				vu: vu,
				vv: vv
			}).db || 0 < va.length && 0 < va[0].db) va.unshift(n6);
		else {
			for (eG = 1; eG < va.length; eG++)
				if (0 < va[eG].db) return void va.splice(eG, 0, n6);
			va.push(n6)
		}
	}

	function vq(gS, tc, hk) {
		return "rgb(" + gS + "," + tc + "," + hk + ")"
	}

	function w5(id, wN) {
		for (var ec = va.length, eG = 0; eG < ec; eG++) va[eG].id === id && wN-- <= 0 && (va.splice(eG, 1), eG--, ec--)
	}

	function w6(id, player) {
		for (var wO = !1, eG = va.length - 1; 0 <= eG; eG--) va[eG].id !== id || player !== eg && va[eG].player !== player || (va.splice(eG, 1), wO = !0);
		return wO
	}

	function wT(fz) {
		vo(340, fz, 6, 0, vq(215, 245, 255), aZ.kb, -1, !1)
	}

	function wb(player, wc) {
		return (ip || h3 <= player || wc || b9.dG.data[6].value ? jn : wd)[player]
	}
	this.vi = "", this.cq = function() {
		var self;
		vg = 0, vf = b7.cv.fw() ? 7 : 12, ve = {
			qW: [0, 0, 0],
			vj: [0, 0, 0],
			k4: [220, 180, 180],
			vk: [0, 0, 0],
			iN: [0, 0, 0]
		}, va = [], this.resize(), fd && this.rA(0, 18), wT(aV.sB(37, [ap.ik.pb[ap.pc].name])), wT(aV.sB(38, [ap.eB - 2, ap.eC - 2])), wT(aV.sB(39, [a9.wU], {
			wE: [0]
		})), a9.wU !== a9.wV && wT(aV.sB(40, [a9.wV, a9.wV / a9.wU], {
			wE: [0],
			wW: [1]
		})), 0 < a9.wX && wT(aV.sB(41, [a9.wX, a9.wX / a9.wU], {
			wE: [0],
			wW: [1]
		})), 0 < a9.wY && wT(aV.sB(42, [a9.wY, a9.wY / a9.wU], {
			wE: [0],
			wW: [1]
		})), 10 === im && vo(120, aV.sB(43), 6, 0, vq(235, 255, 120), aZ.kb, -1, !1), 0 !== (self = this).vi.length && (vo(200, self.vi, 0, 0, aZ.gH, aZ.kb, -1, !1), self.vi = ""), this.vn()
	}, this.vn = function() {
		var eG, ec;
		if (aU.ij)
			for (ec = aU.ik.vp.length, eG = 0; eG < ec; eG++) vo(400, aU.ik.vp[eG], 6, 0, vq(255, 255, 255), aZ.kb, -1, !1)
	}, this.resize = function() {
		var vr, eG;
		if (gC = (gC = Math.floor((b7.cv.fw() ? .031 : .0249) * aK.fx)) < 10 ? 10 : gC, this.fontSize = Math.floor(2 * gC / 3), this.g5 = aY.g1.g2(1, this.fontSize), vb = b0.gap, vc = Math.floor(gC / 5), 0 < va.length)
			for (vr = va, va = [], eG = vr.length - 1; 0 <= eG; eG--) vo(vr[eG].db, vr[eG].fz, vr[eG].id, vr[eG].player, vr[eG].vs, vr[eG].vt, vr[eG].pR, vr[eG].vu, vr[eG].vv);
		this.vw()
	}, this.vw = function() {
		vh = document.createElement("canvas");
		var fz = aV.sB(0),
			qN = (vd = n.measureText(fz, this.g5) + 5 * vc, vh.height = gC, vh.width = vd, vh.getContext("2d", {
				alpha: !0
			}));
		qN.font = this.g5, aY.g1.textBaseline(qN, 1), aY.g1.textAlign(qN, 1), qN.clearRect(0, 0, vd, gC), qN.fillStyle = aZ.kv, qN.fillRect(0, 0, vd, gC), qN.fillStyle = aZ.gH, qN.fillText(fz, Math.floor(vd / 2), Math.floor(gC / 2))
	}, this.vx = function() {
		var ec;
		return aI.da ? aI.g6 : 0 === (ec = va.length) ? 0 : 1 === ec ? va[0].vy : vz(va[0].vy, va[1].vy)
	}, this.w0 = function() {
		var ec = va.length;
		return aI.da ? ec ? vz(aI.g6, va[0].vy) : aI.g6 : 0 === ec ? 0 : 1 === ec ? va[0].vy : 2 === ec ? vz(va[0].vy, va[1].vy) : vz(vz(va[0].vy, va[1].vy), va[2].vy)
	}, this.g9 = function(fL, fM) {
		for (var w2, w3 = gE(), eG = va.length - 1; 0 <= eG; eG--)
			if ((w2 = w3 - (eG + 1) * gC) <= fM && fM < w2 + gC) return 50 === va[eG].id ? fL >= aK.g6 - vd - vb - va[eG].g6 && (fL >= aK.g6 - vd - vb ? aW.fQ.m5(va[eG].player) : f.k8(va[eG].player, 800, !1, 0), !0) : fL >= aK.g6 - va[eG].g6 -
				vb && (736 === va[eG].id ? window.open("https://" + va[eG].fz, "_blank") : va[eG].vu && (f.k8(va[eG].player, 800, !1, 0), 0 <= va[eG].pR) && (w2 = va[eG].pR, va[eG].pR = va[eG].player, va[eG].player = w2), !0);
		return !1
	}, this.rl = function(dc, fz, id, ej, vs, vt, pR, vu, vv) {
		vo(dc, fz, id, ej, vs, vt, pR, vu, vv)
	}, this.uA = function(id) {
		for (var eG = va.length - 1; 0 <= eG; eG--) va[eG].id === id && (va[eG].db = 1)
	}, this.rA = function(player, id) {
		0 === id ? (b1.ea[player < h3 ? 4 : 3]++, n.hR(player, 0), w5(423, 0), vo(160, aV.sB(1, [jn[player]]), 423, player, "rgb(10,220,10)", aZ.kb, -1, !1)) : 1 === id ? (w6(50, eg), n.hR(player, 1), vo(360, aV.sB(2, [jn[player]]), 0, player,
			"rgb(255,40,40)", aZ.kb, -1, !0), f.k8(player, 2700, !1, 0)) : 2 === id ? (n.hR(player, 2), vo(0, aV.sB(3), 0, player, "rgb(10,255,255)", aZ.kb, -1, !0), f.k8(player, 2700, !1, 0)) : 3 === id ? (n.hR(player, 2), vo(0, aV.sB(4, [
			jn[player]
		]), 0, player, aZ.gH, aZ.kb, -1, !0), f.k8(player, 2700, !1, 0)) : 4 === id ? (rM--, rL--, this.w7(1, player, player)) : 5 === id ? 2 !== h5[player] && a2.v7(eX) && (function(id, jK) {
			var eG, wH = 0,
				ec = va.length;
			for (eG = 0; eG < ec; eG++)
				if (va[eG].id === id && jK <= ++wH) return va.splice(eG, 1)
		}(1, 5), a6.w9(player) ? vo(180, aV.sB(5, [jn[player]]), 1, player, vq(255, 200, 180), aZ.kb, -1, !0) : (w5(573, 0), vo(180, aV.sB(6, [jn[player]]), 573, player, "rgb(255,70,10)", aZ.kb, -1, !0))) : 18 === id ? vo(255, aV.sB(7), 18,
			0, aZ.gH, aZ.kb, -1, !1) : 21 === id ? vo(220, aV.sB(8), id, 0, "rgb(255,40,40)", aZ.kb, -1, !1) : 22 === id ? this.w7(2, player, player) : 59 === id && vo(0, aV.sB(9), id, 0, aZ.lL, aZ.kb, 0, !1)
	}, this.sH = function(sK) {
		vo(200, aV.sB(10, [sK]), 94, 0, aZ.gH, aZ.l6, -1, !1)
	}, this.rI = function(rD) {
		if (eX === n) wins_counter++, window.localStorage.setItem("fx_winCount", wins_counter),
			vo(0, "Your Current Win Count is Now " + wins_counter, 3, rD, aZ.gH, aZ.kb, -1, !0);
		n.hR(rD, 2), vo(0, h3 < 100 ? aV.sB(4, [jn[rD]]) : aV.sB(12, [jn[rD]]), 3, rD, aZ.gH, aZ.kb, -1, !0), f.k8(rD, 2700, !1, 0)
	}, this.vD = function(fa) {
		var wA = "(" + aj.gZ(fa >> 2) + ", " + aj.gb(fa >> 2) + ")",
			vu = !1,
			player = 0;
		a2.ee(fa) ? a2.eo(fa) ? wA = aV.sB(13, [wA]) : (player = a2.en(fa), wA = aV.sB(14, [jn[player], aY.jl.jm(eY[player]), aY.jl.jm(f2[player]), wA]), vu = !0) : wA = a2.fj(fa) ? aV.sB(15, [wA]) : aV.sB(16, [wA]), b3.d1 = !0, w5(55, 0), vo(
			220, wA, 55, player, aZ.gH, aZ.kb, -1, vu)
	}, this.vF = function(wB) {
		var p2 = ak.iy,
			player = p2.wC[wB] >> 3;
		b3.d1 = !0, w5(55, 0), vo(220, aV.sB(17, [jn[player], p2.wD[wB]], {
			wE: [1]
		}), 55, player, aZ.gH, aZ.kb, -1, !0)
	}, this.lo = function(la, wF, lp) {
		la === eX ? vo(175, aV.sB(18, [jn[wF]]), 1001, wF, vq(200, 255, 210), aZ.kb, -1, !0, lp) : this.wG(la, lp)
	}, this.wG = function(la, lp) {
		w5(1e3, 0), vo(175, aV.sB(19, [jn[la]]), 1e3, la, aZ.gH, "rgba(5,60,25,0.9)", -1, !0, lp)
	}, this.rH = function(rE) {
		var sK;
		rE ? (sK = aV.sB(20), n.ra(aV.sB(21), 2, 1, 12), vo(0, sK, 40, 0, "rgb(10,220,10)", aZ.kb, -1, !1)) : (sK = aV.sB(22), n.ra(aV.sB(23), 2, 0, 16), vo(0, sK, 41, 0, "rgb(200,80,80)", aZ.kb, -1, !1)), f.kF(2700)
	}, this.qX = function(qW) {
		vo(300, qW[0].name + " [" + rF.qd(qW[0].qa) + "] vs " + qW[1].name + " [" + rF.qd(qW[1].qa) + "]", 65, 0, aZ.jj, "rgba(100,255,255,0.75)", -1, !1)
	}, this.wI = function(sK) {
		vo(200, sK, 0, 0, "rgb(40,255,200)", "rgba(10,60,40,0.9)", -1, !1)
	}, this.wJ = function() {
		vo(0, aV.sB(24), 247, 0, aZ.lK, aZ.kb, -1, !1)
	}, this.qf = function(qW, qc, qe, wK) {
		1 === aN.iy.wL() && (vo(0, qW[0].name + ": " + rF.qd(qW[0].qa) + " -> " + qc, 66, 0, aZ.gH, wK[0], -1, !1), vo(0, qW[1].name + ": " + rF.qd(qW[1].qa) + " -> " + qe, 66, 1, aZ.gH, wK[1], -1, !1))
	}, this.m6 = function(player, id) {
		0 === id ? w6(50, player) ? (vo(128, aV.sB(25, [jn[player]]), 52, player, vq(180, 255, 180), aZ.kb, -1, !0), a6.ms(player, 2, 255)) : vo(384, aV.sB(26, [jn[player]]), 51, player, vq(210, 210, 255), aZ.kb, -1, !0) : w6(51, player) ? (vo(
			128, aV.sB(27, [jn[player]]), 52, player, aZ.gH, "rgba(60,120,10,0.9)", -1, !0), a6.ms(player, 2, 255)) : (vo(384, aV.sB(28, [jn[player]]), 50, player, aZ.gH, "rgba(90,90,90,0.9)", -1, !0), a6.ms(player, 2, 96))
	}, this.mA = function(qW, target) {
		var color = vq(210, 255, 210);
		1 < qW.length ? vo(230, aV.sB(29, [qW.length, jn[target]]), 66, target, color, aZ.kb, -1, !0) : vo(230, aV.sB(30, [jn[qW[0]], jn[target]]), 66, qW[0], color, aZ.kb, target, !0)
	}, this.wM = function(player, target) {
		vo(230, aV.sB(31, [jn[player], jn[target]]), 66, player, aZ.gH, "rgba(75,65,5,0.9)", target, !0)
	}, this.r9 = function(id, player) {
		w6(id, player)
	}, this.lc = function() {
		var g0;
		100 <= eY[eX] || (-1 === (g0 = function(id) {
			for (var eG = va.length - 1; 0 <= eG; eG--)
				if (va[eG].id === id) return eG;
			return -1
		}(143)) ? vo(80, aV.sB(32), 143, 0, aZ.gH, aZ.kb, -1, !1) : va[g0].db = 80)
	}, this.m1 = function(wQ, wR, player) {
		2 !== h5[eX] && (vo(200, aV.sB(33, [wQ, jn[player]], {
			wE: [0]
		}), 30, player, "rgb(190,255,190)", aZ.kb, -1, !0), wR) && vo(30, aV.sB(34, [wR], {
			wE: [0]
		}), 30, 0, aZ.gH, aZ.kb, -1, !1)
	}, this.wS = function(wQ, player) {
		2 !== h5[eX] && (w5(31, 0), 2 === h5[player] || h3 <= player ? vo(150, aV.sB(36, [jn[player], wQ], {
			wE: [1]
		}), 31, player, aZ.jj, "rgba(205,205,205,0.9)", -1, !0) : vo(150, aV.sB(35, [jn[player], wQ], {
			wE: [1]
		}), 31, player, aZ.jj, "rgba(205,255,205,0.9)", -1, !0))
	}, this.rN = function(wZ) {
		for (var iN = b3.iM(), eG = 2; 0 <= eG; eG--) 0 < ve.vk[eG] && (wZ || ve.iN[eG] < iN - 220) && this.wa(eG)
	}, this.wa = function(id) {
		var fz, ec = ve.vk[id],
			player = ve.qW[id];
		ve.vk[id] = 0, 1 === ec ? (fz = 0 === id ? aV.sB(47, [wb(player, !0), wb(ve.vj[0], !0)]) : aV.sB(47 + id, [wb(player, !1)]), w5(7, 0), vo(ve.k4[id], fz, 7, ve.vj[id], aZ.gH, aZ.kb, -1, !0)) : 2 <= ec && (fz = aV.sB(44 + id, [wb(player,
			0 === id), ec - 1]), w5(7, 0), vo(ve.k4[id], fz, 7, player, aZ.gH, aZ.kb, -1, !1))
	}, this.w7 = function(id, pQ, pR) {
		var iN = b3.iM(),
			ec = ve.vk[id] + 1;
		ve.vk[id]++, ve.qW[id] = pQ, ve.vj[id] = pR, 1 === ec && (ve.iN[id] = iN), (1 === ec && (rM < 32 || 2 === rJ) || 1 < ec && (ve.iN[id] < iN - 140 || 2 === rJ)) && this.wa(id)
	}, this.i8 = function() {
		for (var gh = (gh = va.length - vf) <= 1 ? 1 : gh * gh, eG = va.length - 1; 0 <= eG; eG--) 0 < va[eG].db && (va[eG].db -= gh, va[eG].db <= 0) && (b3.d1 = !0, va.splice(eG, 1));
		! function() {
			var wN, eG;
			if (128 !== vg && !(++vg < 128))
				for (wN = 5, eG = iP - 1; 0 <= eG; eG--) 1 === h5[iQ[eG]] && 0 < wN-- && vo(240, aV.sB(50, [jn[iQ[eG]]]), 1, iQ[eG], aZ.jj, "rgba(255,255,255,0.75)", -1, !0)
		}(), this.rN(!1)
	}, this.gF = function() {
		for (var pn, fM = gE(), eG = va.length - 1; 0 <= eG; eG--) pn = fM - (eG + 1) * gC, 50 === va[eG].id ? (gG.drawImage(va[eG].gP, aK.g6 - va[eG].g6 - vd - vb, pn), gG.drawImage(vh, aK.g6 - vd - vb, pn)) : gG.drawImage(va[eG].gP, aK.g6 - va[
			eG].g6 - vb, pn)
	}
}

function bX() {
	var nc, wf, wg, g6, gC, font;

	function wk(wl) {
		return wl < 10 ? "0" + wl : String(wl)
	}
	this.cq = function() {
		void 0 === g6 && this.resize(), this.setTime()
	}, this.resize = function() {
		g6 = Math.floor((b7.cv.fw() ? .53 : .36) * aK.fx), gC = Math.floor(.065 * g6), font = aY.g1.g2(1, Math.floor(.9 * gC)), wg--, this.setTime()
	}, this.i8 = function() {
		this.setTime() && (b3.d1 = !0)
	}, this.setTime = function() {
		var dc = new Date,
			wi = dc.getUTCMinutes(),
			dc = dc.getUTCSeconds();
		return wf = 3600 - 60 * wi - dc, wf %= 900, nc = "Next Contest: " + wk(Math.floor(wf / 60)) + ":" + wk(wf % 60), wg !== (wg = 60 * wi + dc) && (g6 = n.measureText(nc, font), g6 += Math.floor(.4 * gC), !0)
	}, this.gF = function() {
		gG.lineWidth = 1 + Math.floor(gC / 15), 7 === x.dZ() && aG.wm() + 2 * b0.gap > .5 * (aK.gC - g6) ? gG.translate(aK.g6 - gC, Math.floor(aG.wm() + 2 * b0.gap + g6)) : gG.translate(aK.g6 - gC, Math.floor(.5 * (aK.gC + g6))), gG.rotate(-Math
			.PI / 2), gG.fillStyle = aZ.gH, gG.fillRect(0, 0, g6, gC), gG.strokeStyle = aZ.jj, gG.strokeRect(0, 0, g6, gC + 10), gG.fillStyle = aZ.jj, gG.font = font, aY.g1.textBaseline(gG, 1), aY.g1.textAlign(gG, 1), gG.fillText(nc, Math
			.floor(g6 / 2), Math.floor(.59 * gC)), gG.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function ch() {
	this.wn = 10, this.wo = 50, this.wp = 50, this.wq = 8, this.wr = this.wo + this.wp, this.mr = this.wo + this.wp + this.wq, this.g6 = 72, this.ws = 0, this.wt = 0, this.ur = new Array(this.mr), this.wu = 8, this.wv = new Array(this.wo + this.wp),
		this.ww = new Array(this.wo + this.wp), this.jf = 0, this.jg = 0, this.zoom = 1, this.wx = .2, this.v6 = 0, this.s1 = null, this.wy = null, this.da = !1, this.cq = function() {
			var eG, wz, x0;
			for (this.s1 = new Array(this.mr), this.wy = new Array(this.mr), wz = a1.us("emojis"), this.x1(), eG = this.v6 = 0; eG < this.wo; eG++) this.x2(eG, eG, wz);
			for (x0 = a1.us("flags"), eG = 0; eG < this.wp; eG++) this.x2(eG, this.wo + eG, x0);
			this.x3(), this.ur[26] = this.x4(25, 2), this.x5()
		}, this.x2 = function(eG, hb, iN) {
			this.s1[hb] = !1, this.wy[hb] = 0;
			var gP = document.createElement("canvas"),
				qN = (gP.width = this.g6, gP.height = this.g6, gP.getContext("2d", {
					alpha: !0
				}));
			qN.clearRect(0, 0, this.g6, this.g6), 23 === hb ? qN.drawImage(i.un()[4].gP[1], 0, 0) : 36 === hb ? qN.drawImage(i.un()[0].gP[2], 0, 0) : 49 === hb ? qN.drawImage(i.un()[2].gP[1], 0, 0) : qN.drawImage(iN, this.g6 * eG % (eG === hb ? this
				.wn * this.g6 : 4e3), eG === hb ? eU(eG, this.wn) * this.g6 : 0, this.g6, this.g6, 0, 0, this.g6, this.g6), this.ur[hb] = gP
		}, this.x3 = function() {
			this.ur[this.mr - 5] = this.ur[26], this.ur[this.mr - 4] = this.x4(this.mr - 5, 2), this.ur[this.mr - 1] = this.x4(this.mr - 5, 1), this.ur[this.mr - 8] = this.x4(this.mr - 4, 1), this.ur[this.mr - 3] = this.ur[39], this.ur[this.mr - 2] =
				this.x4(this.mr - 3, 1), this.ur[this.mr - 7] = this.x4(this.mr - 2, 1), this.ur[this.mr - 6] = this.x4(this.mr - 7, 1)
		}, this.x4 = function(eG, x6) {
			var gP = document.createElement("canvas"),
				qN = (gP.width = this.g6, gP.height = this.g6, gP.getContext("2d", {
					alpha: !0
				}));
			return qN.clearRect(0, 0, this.g6, this.g6), qN.rotate(x6 * Math.PI / 2), qN.drawImage(this.ur[eG], 1 === x6 ? 0 : -this.g6, -this.g6), gP
		}, this.x5 = function() {
			var eG, de, gK = b9.dG.data[102].value.split("");
			if (2 * gK.length !== this.mr) this.v6 = 0;
			else {
				for (eG = 0; eG < this.mr; eG += 2) de = parseInt(gK[Math.floor(eG / 2)]), this.s1[eG] = de % 2 == 1, this.s1[eG + 1] = 1 < de;
				this.x7()
			}
		}, this.x7 = function() {
			for (var eG = this.v6 = 0; eG < this.mr; eG++) this.s1[eG] && (this.wy[this.v6++] = eG)
		}, this.vI = function() {
			8 === this.v6 && this.wy[0] === this.wr && this.x7()
		}, this.x8 = function() {
			var eG;
			for (this.v6 = this.wq, eG = 0; eG < this.wq; eG++) this.wy[eG] = this.wr + eG
		}, this.x1 = function() {
			this.ws = Math.floor((b7.cv.fw() ? .075 : .0468) * aK.fx), this.zoom = this.ws / this.g6, this.wt = (1 + this.wx) * this.ws
		}, this.show = function(gA, gB) {
			var eG, xA, x9, qS, jd, je;
			if (this.v6 < 1) this.da = !1;
			else {
				for (x9 = (x9 = Math.floor(aK.g6 / this.wt)) < 3 ? 3 : x9 > this.wu ? this.wu : x9, xA = this.v6 > x9 ? x9 : this.v6, x9 = 1 + eU(this.v6 - 1, xA), qS = Math.floor(xA * this.wt), jd = (jd = (jd = Math.floor(gA - qS / 2)) + qS > aK
						.g6 ? aK.g6 - qS : jd) < 0 ? 0 : jd, je = (je = (je = Math.floor(gB - this.wt / 2)) + (gA = Math.floor(x9 * this.wt)) > aK.gC ? aK.gC - gA : je) < 0 ? 0 : je, this.jf = jd + qS, this.jg = je + gA, eG = 0; eG < this.v6; eG++)
					this.wv[eG] = Math.floor(jd + eG % xA * this.wt), this.ww[eG] = Math.floor(je + eU(eG, xA) * this.wt);
				this.da = !0
			}
		}, this.g9 = function(gA, gB, player) {
			return !!this.da && (this.da = !1, this.vH(gA, gB) && this.xD(gA, gB, player) && this.da || (this.vI(), i.o3()), !0)
		}, this.vH = function(gA, gB) {
			return !(gA < this.wv[0] || gB < this.ww[0] || gA >= this.jf || gB >= this.jg)
		}, this.xD = function(gA, gB, player) {
			for (var eG = this.v6 - 1; 0 <= eG; eG--)
				if (gA >= this.wv[eG] && gB >= this.ww[eG] && gA <= this.wv[eG] + this.wt && gB <= this.ww[eG] + this.wt) return 39 === this.wy[eG] ? (this.x8(), this.show(gA, gB)) : (player === eX ? aW.fe.lo(this.wy[eG]) : aW.fQ.m3(this.wy[eG],
					player), this.x7()), !0;
			return !1
		}, this.xE = function(eG) {
			return eG < 16 || 40 <= eG && eG < 47
		}, this.xF = function(eG) {
			return eG >= this.wo && eG < this.wo + this.wp
		}, this.gF = function() {
			gG.imageSmoothingEnabled = !0;
			for (var gap = this.wx * this.ws / 2, eG = this.v6 - 1; 0 <= eG; eG--) gG.setTransform(this.zoom, 0, 0, this.zoom, this.wv[eG] + gap, this.ww[eG] + gap), gG.drawImage(this.ur[this.wy[eG]], 0, 0);
			gG.imageSmoothingEnabled = !1, gG.setTransform(1, 0, 0, 1, 0, 0)
		}, this.xG = function(fL, fM, lp) {
			gG.imageSmoothingEnabled = !0, gG.setTransform(this.zoom, 0, 0, this.zoom, fL, fM), gG.drawImage(this.ur[lp], 0, 0), gG.imageSmoothingEnabled = !1, gG.setTransform(1, 0, 0, 1, 0, 0)
		}
}

function bY() {
	var va, xH, g5, gC, xI;

	function xK(eG) {
		var gc = aZ.gH,
			g6 = va[eG].gP.width,
			gc = (va[eG].hU === eg ? va[eG].qN.fillStyle = aZ.kn : (a2.xM(va[eG].hU), va[eG].qN.fillStyle = aY.g1.kY(al.dj[0], al.dj[1], al.dj[2], .83), 535 < aY.pG.tS(al.dj, 0, 2) && (gc = aZ.jj)), va[eG].qN.clearRect(0, 0, g6, gC), va[eG].qN
				.fillRect(0, 0, g6, gC), ! function(qN, g6, gC) {
					qN.fillStyle = aZ.gH, qN.fillRect(0, 0, g6, 1), qN.fillRect(0, gC - 1, g6, 1), qN.fillRect(0, 0, 1, gC), qN.fillRect(g6 - 1, 0, 1, gC)
				}(va[eG].qN, g6, gC), va[eG].qN.fillStyle = gc, xH + 2 * gC < g6 && (va[eG].qN.fillRect(g6 - xH - gC, 0, 1, gC), va[eG].qN.fillText(jn[va[eG].hU], Math.floor((g6 - xH) / 2), Math.floor(.57 * gC))), 0 !== va[eG].id ? 0 : gC);
		va[eG].qN.fillText(aY.jl.jm(va[eG].hV), Math.floor(g6 - xH / 2 - gc), Math.floor(.57 * gC)),
			function(eG, g6, qS) {
				va[eG].qN.fillStyle = aZ.kf;
				var xR = Math.floor(xH * va[eG].hV / va[eG].xS);
				va[eG].qN.fillRect(Math.floor(g6 - xH - qS), gC - xI, xR, xI)
			}(eG, g6, gc), 0 === va[eG].id ? (xP(eG, g6), function(eG, g6) {
				va[eG].qN.strokeStyle = aZ.kq, va[eG].qN.fillRect(gC, 0, 1, gC);
				g6 -= gC;
				va[eG].qN.beginPath(), va[eG].qN.moveTo(Math.floor(.3 * gC + g6), Math.floor(gC / 2)), va[eG].qN.lineTo(Math.floor(gC - .3 * gC + 0 + g6), Math.floor(gC / 2)), va[eG].qN.stroke(), va[eG].qN.beginPath(), va[eG].qN.moveTo(Math
					.floor(gC / 2 + g6), Math.floor(.3 * gC)), va[eG].qN.lineTo(Math.floor(gC / 2 + g6), Math.floor(gC - .3 * gC + 0)), va[eG].qN.stroke()
			}(eG, g6)) : xP(eG, 2 * gC)
	}

	function xP(eG, g6) {
		va[eG].qN.strokeStyle = va[eG].xT ? aZ.kl : aZ.l1, va[eG].qN.fillStyle = aZ.gH, va[eG].qN.fillRect(g6 - gC, 0, 1, gC);
		var xU = Math.floor(gC / 12),
			xU = (va[eG].qN.lineWidth = xU < 3 ? 3 : xU, va[eG].qN.lineCap = "round", .35);
		g6 = gC + 1, va[eG].qN.beginPath(), va[eG].qN.moveTo(Math.floor(g6 - xU * gC + 0), Math.floor(xU * gC)), va[eG].qN.lineTo(Math.floor(g6 - gC + xU * gC), Math.floor(gC - xU * gC + 0)), va[eG].qN.stroke(), va[eG].qN.beginPath(), va[eG].qN
			.moveTo(Math.floor(g6 - gC + xU * gC), Math.floor(xU * gC)), va[eG].qN.lineTo(Math.floor(g6 - xU * gC + 0), Math.floor(gC - xU * gC + 0)), va[eG].qN.stroke()
	}

	function xf(ec) {
		for (var hV, eG = ec - 1; 0 <= eG; eG--) hV = a4.eO(eX, eG), va[eG].hV !== hV && (va[eG].hV = hV, va[eG].xS = hV > va[eG].xS ? hV : va[eG].xS, va[eG].xL = !0)
	}

	function xJ(xh) {
		xh.gP = document.createElement("canvas"), ap.pA.font = g5;
		var g6 = xH;
		xh.hU < eg && 0 === xh.id && (g6 += Math.floor(ap.pA.measureText(jn[xh.hU] + "000").width)), g6 += gC, 0 === xh.id && (g6 += gC), xh.gP.width = g6, xh.gP.height = gC, xh.qN = xh.gP.getContext("2d", {
			alpha: !0
		}), xh.qN.font = g5, aY.g1.textBaseline(xh.qN, 1), aY.g1.textAlign(xh.qN, 1)
	}

	function xb(eG) {
		return r.xj() ? aK.g6 - va[eG].gP.width - b0.gap : r.fL
	}

	function xc(eG) {
		return Math.floor(2 * b0.gap + (r.xj() ? t.gC + b0.gap : 0) + r.gC + eG * (1.3 * gC))
	}
	this.cq = function() {
		va = [], this.resize()
	}, this.resize = function() {
		g5 = k.g5, gC = k.fontSize + 5, gC = Math.floor(1.25 * gC), b7.cv.fw() && (gC = Math.floor(1.25 * gC)), xI = Math.floor(.15 * gC), ap.pA.font = g5, xH = Math.floor(ap.pA.measureText("02 000 000 0000").width);
		for (var eG = va.length - 1; 0 <= eG; eG--) xJ(va[eG]), xK(eG)
	}, this.j7 = function() {
		for (var eG = va.length - 1; 0 <= eG; eG--) va[eG].xL && (va[eG].xL = !1, xK(eG))
	}, this.g9 = function(gA, fM) {
		if (2 !== rJ && 0 !== h4[eX] && !fO && a2.v7(eX))
			for (var xW, xX, xY, xZ = b7.cv.fw() ? gC : 0, xa = b7.cv.fw() ? Math.floor(.15 * gC) : 0, eG = va.length - 1; 0 <= eG; eG--)
				if (xW = xb(eG), xX = xc(eG), xY = va[eG].gP.width, xX - xa <= fM && fM <= xX + gC + xa) {
					if (xW - xZ <= gA && gA <= xW + gC + xZ) return va[eG].xT || (va[eG].xL = !0, va[eG].xT = !0, 0 === va[eG].id && aW.fe.lm(va[eG].hU)), !0;
					if (0 === va[eG].id && xW + xY - gC - xZ <= gA && gA <= xW + xY + xZ) return aW.fe.fp(o.fn(), va[eG].hU), !0
				} return !1
	}, this.i8 = function() {
		var ec;
		2 !== rJ && 0 !== h4[eX] && !fO && a2.v7(eX) && (function(ec) {
			if (va.length !== ec) return 1;
			for (var eG = ec - 1; 0 <= eG; eG--)
				if (va[eG].id !== a4.eI(eX, eG) || va[eG].hU !== a4.eN(eX, eG)) return 1;
			return
		}(ec = a4.eH(eX)) && function(ec) {
			var eG, id, hU, hk, hV, vr = [];
			loop: for (eG = 0; eG < ec; eG++) {
				for (id = a4.eI(eX, eG), hU = a4.eN(eX, eG), hk = 0; hk < va.length; hk++)
					if (va[hk].id === id && va[hk].hU === hU) {
						vr.push(va.splice(hk, 1)[0]);
						continue loop
					} hV = a4.eO(eX, eG), xJ(hV = {
					hU: hU,
					hV: hV,
					xS: hV,
					id: id,
					xL: !0,
					xT: !1,
					gP: null,
					qN: null
				}), vr.push(hV)
			}
			va = vr
		}(ec), xf(ec))
	}, this.xi = function(ej) {
		for (var ec = Math.min(va.length, a4.eH(eX)), eG = 0; eG < ec; eG++)
			if (va[eG].hU === ej) return void(va = [])
	}, this.gF = function() {
		if (0 !== h4[eX] && a2.v7(eX) && !fO)
			for (var eG = va.length - 1; 0 <= eG; eG--) gG.drawImage(va[eG].gP, xb(eG), xc(eG))
	}
}

function bZ() {
	var va, iW, xk, xl, gC, g5, fontSize, xm, xn, xo, xp, gP, qN, jz, xq;

	function xx() {
		gG.drawImage(gP, b0.gap + (hO ? b0.gap + b5.xy() : 0), xz + 2 * b0.gap)
	}

	function xr() {
		gP.width = va[0].width + xo, gP.height = gC + xo, (qN = gP.getContext("2d", {
				alpha: !0
			})).clearRect(0, 0, va[0].width + xo, gC + xo), qN.translate(Math.floor(xo / 2), Math.floor(xo / 2)), qN.lineWidth = xo, qN.fillStyle = 1 === va[0].xw ? aZ.ki : aZ.kb, y0(), qN.fill(), qN.strokeStyle = 1 === va[0].xw ? aZ.jj : aZ.gH,
		y0(), qN.stroke(), aY.g1.textAlign(qN, 1), aY.g1.textBaseline(qN, 1), qN.fillStyle = 1 === va[0].xw ? aZ.jj : aZ.gH, qN.font = g5[0], qN.fillText(aV.nc[66 + va[0].xv], Math.floor(va[0].width / 2), Math.floor(.72 * xm[0] * gC)), qN.font = g5[
				1], qN.fillText(va[0].fz, Math.floor(va[0].width / 2), Math.floor((xm[0] + .48 * xm[1]) * gC))
	}

	function y0() {
		qN.beginPath(), qN.moveTo(xp, 0), qN.lineTo(va[0].width - xp, 0), qN.lineTo(va[0].width, xp), qN.lineTo(va[0].width, gC - xp), qN.lineTo(va[0].width - xp, gC), qN.lineTo(xp, gC), qN.lineTo(0, gC - xp), qN.lineTo(0, xp), qN.closePath()
	}
	this.cq = function() {
		iW = 4, xk = xl = jz = 0, va = [], g5 = new Array(2), fontSize = new Array(2), (xm = new Array(2))[0] = .3, xm[1] = .7, xn = new Array(4), gP = document.createElement("canvas"), xq = b3.db + 2e3, this.resize()
	}, this.resize = function() {
		var eG, g6;
		for (gC = Math.floor((b7.cv.fw() ? .0725 : .058) * aK.fx), fontSize[0] = Math.floor(.85 * xm[0] * gC), fontSize[1] = Math.floor(.85 * xm[1] * gC), g5[0] = aY.g1.g2(1, fontSize[0]), g5[1] = aY.g1.g2(1, fontSize[1]), eG = xn.length -
			1; 0 <= eG; eG--) xn[eG] = this.measureText(aV.nc[66 + eG] + "000", g5[0]);
		if (xo = Math.floor(1 + .05 * gC), xp = Math.floor(.2 * gC), 0 < va.length) {
			for (eG = va.length - 1; 0 <= eG; eG--) g6 = this.measureText(va[eG].fz + "00", g5[1]), va[eG].width = g6 < xn[eG] ? xn[eG] : g6;
			xr()
		}
	}, this.i8 = function() {
		0 !== iW && (4 === iW ? b3.db > xq && (iW = 0, 1 === rJ) && n.ra(ap.ik.pb[ap.pc].name, 3, 1, 9) : (1 === iW ? (0 === xk && (xr(), xk = 1e-4), 1 <= (xk += .002 * (b3.db - jz)) && (xl = 0, iW = 2, xk = 1), b3.d1 = !0) : 2 === iW ? ((xl += (
			b3.db - jz) / 1e3) > va[0].k4 || 1 < xl && 1 < va.length) && (iW = 3) : 3 === iW && ((xk -= .002 * (b3.db - jz)) <= 0 && (xk = 0, va.shift(), iW = 0 < va.length ? 1 : 0), b3.d1 = !0), jz = b3.db))
	}, this.measureText = function(fz, g5) {
		return gG.font = g5, Math.floor(gG.measureText(fz).width)
	}, this.hR = function(xu, eG) {
		this.ra(jn[xu], eG, 1, 0 === eG ? 3 : 7)
	}, this.ra = function(fz, xv, xw, k4) {
		var g6 = (g6 = this.measureText(fz + "00", g5[1])) < xn[xv] ? xn[xv] : g6;
		va.push({
			fz: fz,
			width: g6,
			xv: xv,
			xw: xw,
			k4: k4
		}), 0 === iW && (xk = 0, iW = 1, jz = b3.db)
	}, this.gF = function() {
		0 !== iW && 0 !== xk && (xk < 1 ? (gG.globalAlpha = xk, xx(), gG.globalAlpha = 1) : xx())
	}
}

function c7() {
	var gC, gP, qN, y1, y2, y3, y4, y5, xL, y6, y7, y8, y9, yA;

	function g3() {
		var g6 = aI.g6,
			p2 = (xL = !1, qM(qN, g6, gC), Math.floor(g6 / 2));
		1 === y2 ? (qN.fillStyle = aZ.ks, qN.fillRect(p2, 0, p2, gC)) : -1 === y2 && (qN.fillStyle = aZ.l4, qN.fillRect(0, 0, p2, gC)), qO(qN, g6, gC, 2);
		var p2 = (p2 = Math.floor(.25 * gC)) < 2 ? 2 : p2,
			wU = (qN.fillStyle = aZ.kj, Math.floor((gC - 4) * y3[1] / y4[1]));
		0 < wU && qN.fillRect(2, gC - 2 - wU, p2, wU), 0 < (wU = Math.floor((gC - 4) * y3[0] / y4[0])) && qN.fillRect(g6 - 2 - p2, gC - 2 - wU, p2, wU);
		p2 = (p2 = Math.floor(gC / 8)) < 2 ? 2 : p2;
		qQ(qN, Math.floor(.4 * gC), 0, gC, p2, .5, !1), qQ(qN, Math.floor(g6 - 1.4 * gC), 0, gC, p2, .5, !0), qN.drawImage(y1, Math.floor((g6 - y1.width) / 2), 3)
	}

	function yC() {
		xL = !0, y6 = 140, y2 = 0, y5 = [], aI.da = !1, k.r9(247, 0), y3[0] = y3[1] = 0
	}

	function gE() {
		return o.w1(k.vx()) ? o.fM - gC - b0.gap : aa.w1(k.w0()) ? aa.gE() - gC - b0.gap : aK.gC - gC - bA.uf() * b0.gap
	}
	this.da = !1, this.g6 = 0, this.cq = function() {
		y8 = y9 = 0, this.da = !1, xL = yA = !1, y6 = 140, y3 = [y2 = 0, 0], y4 = [1, 1], y5 = [], y7 = new Uint32Array(10), this.resize()
	}, this.resize = function() {
		gC = o.gC, this.g6 = 4 * gC, this.yB(), (gP = document.createElement("canvas")).width = this.g6, gP.height = gC, qN = gP.getContext("2d", {
			alpha: !0
		}), g3()
	}, this.j7 = function() {
		xL && g3()
	}, this.yB = function() {
		var gQ, xo, p2, xC = (xC = gC - 6) < 6 ? 6 : xC;
		void 0 !== y1 && y1.width === xC || ((y1 = document.createElement("canvas")).width = xC, y1.height = xC, (gQ = y1.getContext("2d", {
				alpha: !0
			})).clearRect(0, 0, xC, xC), xo = Math.floor(xC / 8), gQ.lineWidth = xo = xo < 1 ? 1 : xo, gQ.strokeStyle = aZ.gH, p2 = Math.floor(xC / 2), xC = Math.floor((xC - xo) / 2), gQ.beginPath(), gQ.arc(p2, p2, xC, 0, 2 * Math.PI), gQ
			.moveTo(p2, p2 - xC), gQ.lineTo(p2, p2 + xC), gQ.moveTo(p2 + Math.cos(.78 * Math.PI) * xC, p2 + Math.cos(.28 * Math.PI) * xC), gQ.lineTo(p2, p2), gQ.lineTo(p2 + Math.cos(.22 * Math.PI) * xC, p2 + Math.cos(1.72 * Math.PI) * xC), gQ
			.stroke())
	}, this.g9 = function(fL, fM) {
		var je;
		return !(fL < aK.g6 - this.g6 - b0.gap || fM < (je = gE()) || je + gC < fM || (fO || aW.fe.ls(fL > aK.g6 - b0.gap - this.g6 / 2 ? 1 : 0), 0))
	}, this.i8 = function() {
		if (0 < y9) 0 === --y9 && yC();
		else if (this.da) 270 == --y6 && 2 <= y8 && function() {
			var eG;
			for (eG = iP - 1; 0 <= eG; eG--)
				if (a2.v7(iQ[eG])) return;
			return 1
		}() && (xL = !0, y3[0] += y4[0]), 180 === y6 && 3 * y3[0] < y4[0] ? yC() : y3[0] >= y4[0] ? yA ? ao.r4.r7() : ao.r4.rC(-1) : y3[1] >= y4[1] ? y9 = 4 : y6 <= 0 && yC();
		else if (function() {
				var eG;
				for (eG = 9; 0 <= eG; eG--) 12 < Math.abs(y7[eG] - f2[jH[eG]]) && (y6 = 140), y7[eG] = f2[jH[eG]];
				if (--y6 <= 0) return 1;
				return
			}()) {
			(yA = yF()) && k.wJ(), this.da = !0, y6 = 360;
			var eG, dc = 0;
			for (eG = iP - 1; 0 <= eG; eG--) a2.v7(iQ[eG]) && (dc += f2[iQ[eG]]);
			y4[0] = vz(eU(3 * dc, 5), 1), hO && 9 !== im && (y4[0] = yH(vz(eU(dc * (100 - eU(100 * b5.rY(), uF)), 100), 1), y4[0])), y4[1] = vz(dc - y4[0], 1), y8++
		}
	}, this.rK = function() {
		this.da && y3[0] < y4[0] && yC()
	}, this.mt = function(player, yJ) {
		var eG, dc;
		if (this.da) {
			for (eG = y5.length - 1; 0 <= eG; eG--)
				if (y5[eG] === player) return;
			y5.push(player), xL = !0, dc = ip ? y4[0] : f2[player], yJ ? y3[0] += dc : y3[1] += dc, player === eX && (y2 = yJ ? 1 : -1)
		}
	}, this.gF = function() {
		var fM;
		this.da && (fM = gE(), gG.drawImage(gP, aK.g6 - this.g6 - b0.gap, fM))
	}
}

function ba() {
	var g6, fL, yK, gP, qN, da, h7, yL, g5, xL, yM = 11 / 12;

	function yO() {
		var xR = Math.floor(h7 * (g6 - 2 * yK)),
			yR = 1 + Math.floor(.0625 * o.gC),
			yS = 1 + Math.floor(.3 * o.gC),
			xC = Math.floor(.55 * o.gC);
		qN.clearRect(0, 0, g6, o.gC), qN.fillStyle = aZ.ka, qN.fillRect(0, 0, yK, o.gC), qN.fillRect(yK + xR, 0, g6 - yK - xR, o.gC), qN.fillStyle = h7 < 1 / 3 ? "rgba(" + Math.floor(3 * h7 * 130) + ",130,0,0.85)" : h7 < 2 / 3 ? "rgba(130," + (130 -
				Math.floor(3 * (h7 - 1 / 3) * 130)) + ",0,0.85)" : "rgba(130,0," + Math.floor(3 * (h7 - 2 / 3) * 130) + ",0.85)", qN.fillRect(yK, 0, xR, o.gC), qN.fillStyle = aZ.gH, qN.fillRect(0, 0, g6, 1), qN.fillRect(0, o.gC - 1, g6, 1), qN
			.fillRect(0, 0, 1, o.gC), qN.fillRect(yK, 0, 1, o.gC), qN.fillRect(yK + xR, 0, 1, o.gC), qN.fillRect(g6 - yK, 0, 1, o.gC), qN.fillRect(g6 - 1, 0, 1, o.gC), qN.fillRect(Math.floor(.25 * o.gC) + yS, Math.floor((o.gC - yR) / 2), o.gC - 2 *
				yS, yR), qN.fillRect(Math.floor(g6 - 1.25 * o.gC) + yS, Math.floor((o.gC - yR) / 2), o.gC - 2 * yS - yS % 2, yR), qN.fillRect(Math.floor(g6 - 1.25 * o.gC) + Math.floor((o.gC - yR) / 2), yS, yR, o.gC - 2 * yS - yS % 2), yL = aY.fQ.h6(
				eX, o.fn()), qN.fillText(aY.jl.jm(yL) + " (" + aY.jl.u1(100 * h7, +(h7 < .1)) + ")", Math.floor(.5 * g6), xC)
	}
	this.setAbsolutePercentage = function(newPercentage) {
		h7 = newPercentage;
	};
	keybindFunctions.setAbsolute = this.setAbsolutePercentage;
	keybindFunctions.setRelative = (arg1) => o.tD(arg1);

	function yW(fu) {
		return !(1 < fu && 1 === h7 || (1 < fu && fu * h7 - h7 < 1 / 1024 ? fu = (h7 + 1 / 1024) / h7 : fu < 1 && h7 - fu * h7 < 1 / 1024 && (fu = (h7 - 1 / 1024) / h7), h7 = ai.lS(h7 * fu, 1 / 1024, 1), yO(), 0))
	}

	function yX(gA) {
		return h7 !== (h7 = ai.lS((gA - fL - yK) / (g6 - 2 * yK), 1 / 1024, 1)) && (yO(), !0)
	}
	this.fM = 0, this.sx = !1, this.cq = function() {
		da = !fd && !fO, xL = !1, h7 = .5, yL = 0, this.sx = !1, this.resize()
	}, this.resize = function() {
		b7.cv.fw() && aK.g6 < .8 * aK.gC ? (this.gC = Math.floor(.0536 * aK.fx), g6 = aK.g6 - 4 * b0.gap - this.gC) : (g6 = Math.floor((b7.cv.fw() ? .65 : .389) * aK.fx), g6 += 12 - g6 % 12, this.gC = Math.floor(g6 / 12)), yK = Math.floor(3 *
			this.gC / 2), g5 = aY.g1.g2(1, Math.floor(.5 * this.gC)), (gP = document.createElement("canvas")).width = g6, gP.height = this.gC, (qN = gP.getContext("2d", {
			alpha: !0
		})).font = g5, aY.g1.textBaseline(qN, 1), aY.g1.textAlign(qN, 1), this.yN(), yO()
	}, this.yN = function() {
		fL = b7.cv.fw() && aK.g6 < .8 * aK.gC ? this.gC + 3 * b0.gap : Math.floor((aK.g6 - g6) / 2), this.fM = aK.gC - this.gC - bA.uf() * b0.gap
	}, this.j7 = function() {
		xL && (xL = !1, yO())
	}, this.da = function() {
		return !(!da || j.fP && fL < Math.floor(b0.gap + 5.5 * this.gC))
	}, this.w1 = function(g7) {
		return !!this.da() && fL + g6 > aK.g6 - g7 - b0.gap
	}, this.gD = function() {
		da = !fO
	}, this.yC = function() {
		da = !1
	}, this.fn = function() {
		return ai.lS(Math.floor(1024 * h7 + .5) - 1, 0, 1023)
	}, this.t4 = function(gA, gB) {
		return this.da() && fL < gA && gA < fL + g6 && gB > this.fM
	}, this.g9 = function(gA, gB) {
		return !!this.da() && !!o.t4(gA, gB) && (p.kB = !1, function(vK, gA, gB) {
			if (function(gA, gB) {
					return fL < gA && gA < fL + yK && gB > o.fM
				}(gA, gB)) return yW(yM);
			if (function(gA, gB) {
					return fL + g6 - yK < gA && gA < fL + g6 && gB > o.fM
				}(gA, gB)) return yW(1 / yM);
			return vK.sx = !0, yX(gA)
		}(this, gA, gB) && (b3.d1 = !0), !0)
	}, this.tD = function(kI) {
		0 !== rJ && this.da() && yW(kI) && (b3.d1 = !0)
	}, this.sc = function(deltaY) {
		var kI;
		return !(0 === deltaY || !this.da()) && yW(kI = 0 < deltaY ? (kI = 400 / (400 + deltaY)) < yM ? yM : kI : 1 / yM < (kI = (400 - deltaY) / 400) ? 1 / yM : kI)
	}, this.sZ = function(gA, gB) {
		return !!this.sx && yX(gA)
	}, this.t0 = function() {
		this.sx = !1
	}, this.i8 = function() {
		this.da() && yL !== aY.fQ.h6(eX, this.fn()) && (xL = !0)
	}, this.gF = function() {
		this.da() && gG.drawImage(gP, fL, this.fM)
	}
}

function cI() {
	var gP, qN, yY, font, yZ = 0,
		ya = !1,
		yb = [10, 5, 3, 2, 1.5, 1, .75, .5, .25],
		yc = 5;

	function yi() {
		if (ya) {
			var eG, ec = yb.length,
				xC = Math.floor(.5 * yY.gC),
				gC = ec * xC,
				fL = Math.floor(Math.floor(yY.fL) + .3 * yY.g6 - .5),
				fM = Math.floor(Math.floor(yY.fM) - gC),
				g6 = Math.floor(.4 * yY.g6 + 2.5);
			for (gG.fillStyle = aZ.ka, gG.fillRect(fL, fM, g6, gC), gG.fillStyle = aZ.kx, gG.fillRect(fL, fM + yc * xC, g6, xC), gG.fillStyle = aZ.gH, gG.fillRect(fL, fM, 2, gC), gG.fillRect(fL, fM, g6, 2), gG.fillRect(fL + g6 - 2, fM, 2, gC), eG =
				1; eG < ec; eG++) gG.fillRect(fL, fM + eG * xC, g6, 2);
			for (gG.fillStyle = aZ.gH, aY.g1.textAlign(gG, 1), aY.g1.textBaseline(gG, 1), gG.font = aY.g1.g2(0, .6 * xC), fL += .5 * g6, eG = 0; eG < ec; eG++) gG.fillText(yq(eG), fL, fM + (eG + .6) * xC)
		}
		gG.drawImage(gP, Math.floor(yY.fL), Math.floor(yY.fM))
	}

	function g3(vK) {
		var fL, jd, je, xC;
		qN.clearRect(0, 0, Math.floor(yY.g6), Math.floor(yY.gC)), qN.fillStyle = aZ.ka, qN.fillRect(0, 0, Math.floor(yY.g6), Math.floor(yY.gC)), kA && (qN.fillStyle = aZ.kx, qN.fillRect(0, 0, Math.floor(.3 * yY.g6), Math.floor(yY.gC))), qN
			.fillStyle = aZ.gH, qN.fillText("Hide UI", .15 * yY.g6, .5 * yY.gC), qN.fillRect(Math.floor(.3 * yY.g6 - .5), 0, 2, Math.floor(yY.gC)), fL = .5 * yY.g6, qN.fillText("Replay Speed", fL, .31 * yY.gC), qN.fillText(yq(yc), fL, .69 * yY.gC),
			qN.fillRect(Math.floor(.7 * yY.g6 - .5), 0, 2, Math.floor(yY.gC)), vK.vR ? (fL = Math.floor(.02 * yY.g6), vK = Math.floor(.025 * yY.g6), jd = Math.floor(.85 * yY.g6 - fL - .5 * vK), je = Math.floor(.25 * yY.gC), xC = Math.floor(yY.gC) -
				2 * je, qN.fillRect(jd, je, fL, xC), qN.fillRect(jd + fL + vK, je, fL, xC)) : function() {
				var g6 = Math.floor(.46 * yY.gC),
					gC = Math.floor(.23 * yY.gC),
					fL = Math.floor(.85 * yY.g6 - .5 * g6 + g6 / 12),
					fM = Math.floor(.5 * yY.gC - gC);
				qN.beginPath(), qN.moveTo(fL, fM), qN.lineTo(fL + g6, fM + gC), qN.lineTo(fL, fM + (gC << 1)), qN.fill()
			}(), qN.fillRect(0, 0, Math.floor(yY.g6), 2), qN.fillRect(0, 0, 2, Math.floor(yY.gC)), qN.fillRect(0, Math.floor(yY.gC) - 2, Math.floor(yY.g6), 2), qN.fillRect(Math.floor(yY.g6 - 2), 0, 2, Math.floor(yY.gC))
	}

	function yq(eG) {
		return 5 === eG ? "Normal" : "" + yb[eG]
	}
	this.vR = !1, this.cq = function() {
		fO && (yc = 5, this.vR = !1, ya = !1, yY = new nW([.3, .3 / 6], [.5, 1]), this.resize())
	}, this.yd = function() {
		return yb[yc]
	}, this.gE = function() {
		return yY.fM
	}, this.w1 = function(g7) {
		return !!fO && yY.fL + yY.g6 > aK.g6 - g7 - b0.gap
	}, this.resize = function() {
		fO && (yY.resize(), yY.fM -= (bA.uf() - 1) * b0.gap, font = aY.g1.g2(0, .3 * yY.gC), (gP = document.createElement("canvas")).width = Math.floor(yY.g6), gP.height = Math.floor(yY.gC), (qN = gP.getContext("2d", {
			alpha: !0
		})).font = font, aY.g1.textAlign(qN, 1), aY.g1.textBaseline(qN, 1), g3(this))
	}, this.t9 = function(ye) {
		ye !== kA && (kA = ye, b5.resize(), b3.d1 = !0, fO) && (yZ = b3.db + 2e3, g3(this))
	}, this.g9 = function(fL, fM) {
		if (!fO) return !1;
		if (fL < yY.fL || fM < yY.fM || fL > yY.fL + yY.g6) return ya && function(vK, fL, fM) {
			var ec = yb.length,
				xC = Math.floor(.5 * yY.gC),
				gC = ec * xC,
				jd = Math.floor(Math.floor(yY.fL) + .3 * yY.g6 - .5),
				gC = Math.floor(Math.floor(yY.fM) - gC),
				g6 = Math.floor(.4 * yY.g6 + 2.5);
			return ya = !1, b3.d1 = !0, fL < jd || jd + g6 < fL || fM < gC || (yc = yh(0, Math.floor((fM - gC) / xC), ec - 1), g3(vK)), !0
		}(this, fL, fM);
		if ((fL -= yY.fL) < .3 * yY.g6) ya = !1, this.t9(!kA);
		else {
			if (fL < .7 * yY.g6) return ya = !ya, b3.d1 = !0;
			this.tB(!1)
		}
		return !0
	}, this.tB = function(yg) {
		2 === rJ ? (this.t9(!1), ar.ob(3)) : (ya = !1, this.vR = !this.vR, this.vR ? j.fP ? j.tA() : b7.cv.setState(1) : yg || j.vS(), b3.d1 = !0, g3(this))
	}, this.ss = function(fL, fM) {
		return !!kA && (j.g9(fL, fM) || (fO ? ((b3.db > yZ || !this.g9(fL, fM)) && p.g9(fL, fM), b3.d1 = !0, yZ = b3.db + 2e3) : p.g9(fL, fM)), !0)
	}, this.i8 = function() {
		fO && kA && b3.db > yZ - 1e3 && b3.db < yZ && (b3.d1 = !0)
	}, this.rO = function() {
		fO && (this.vR = !1, b3.d1 = !0, g3(this))
	}, this.gF = function() {
		if (fO) {
			if (kA) {
				if (b3.db > yZ) return;
				if (b3.db > yZ - 1e3) return gG.globalAlpha = yh(0, (1e3 - (b3.db - (yZ - 1e3))) / 1e3, 1), yi(), void(gG.globalAlpha = 1)
			}
			yi()
		}
	}
}

function bb() {
	var yr, ys, g6, fL, fM, yt, yu;
	this.cq = function() {
		yr = new Array(2), ys = new Array(2), this.kB = !1, yu = yt = hA = h8 = 0, h9 = 1, this.resize()
	}, this.resize = function() {
		g6 = (g6 = Math.floor((b7.cv.fw() ? .072 : .0502) * aK.fx)) < 8 ? 8 : g6;
		for (var eG = 1; 0 <= eG; eG--) yr[eG] = document.createElement("canvas"), yr[eG].width = g6, yr[eG].height = g6, ys[eG] = yr[eG].getContext("2d", {
			alpha: !0
		});
		this.yN(),
			function() {
				for (var z9 = Math.floor(1 + g6 / 20), eG = 1; 0 <= eG; eG--) ys[eG].clearRect(0, 0, g6, g6), ys[eG].fillStyle = aZ.kX, ys[eG].beginPath(), ys[eG].arc(g6 / 2, g6 / 2, g6 / 2 - z9, 0, 2 * Math.PI), ys[eG].fill(), ys[eG].lineWidth =
					z9, ys[eG].fillStyle = aZ.gH, ys[eG].strokeStyle = aZ.gH, ys[eG].beginPath(), ys[eG].arc(g6 / 2, g6 / 2, g6 / 2 - z9, 0, 2 * Math.PI), ys[eG].stroke(), qQ(ys[eG], 0, 0, g6, z9, .3, 0 === eG)
			}()
	}, this.jh = function() {
		return -h8 / h9
	}, this.gE = function() {
		return -hA / h9
	}, this.kK = function(yy, gs) {
		h8 = h9 * yy - gs
	}, this.kL = function(yz, gt) {
		hA = h9 * yz - gt
	}, this.g9 = function(yx, w2) {
		return kA || ! function(yx, w2) {
			return Math.pow(yx - (fL + g6 / 2), 2) + Math.pow(w2 - (fM + g6 / 2), 2) < g6 * g6 / 4 || Math.pow(yx - (fL + g6 / 2), 2) + Math.pow(w2 - (fM + 2 * g6), 2) < g6 * g6 / 4
		}(yx, w2) || b9.dG.data[8].value ? (f.kN() && (this.kB = !0, yt = yx, yu = w2), !1) : w2 < fM + 1.25 * g6 ? this.sc(Math.floor(aK.g6 / 2), Math.floor(aK.gC / 2), -200) : this.sc(Math.floor(aK.g6 / 2), Math.floor(aK.gC / 2), 200)
	}, this.sZ = function(yx, w2) {
		var z0, z1, gv, gy;
		return !f.kN() || (z0 = h8, z1 = hA, h8 += gv = yt - yx, hA += gy = yu - w2, a6.sZ(gv, gy), this.z2(), yt = yx, yu = w2, z0 !== h8) || z1 !== hA
	}, this.sc = function(gA, gB, deltaY) {
		var kI;
		if (f.kN()) {
			if (0 < deltaY) kI = (kI = 500 / (500 + deltaY)) < .5 ? .5 : kI;
			else {
				if (!(deltaY < 0)) return !1;
				kI = 2 < (kI = (500 - deltaY) / 500) ? 2 : kI
			}
			this.z3(gA, gB, kI), b3.d1 = !0
		}
		return !0
	}, this.z3 = function(fL, fM, fa) {
		var fu;
		fa = fu = (fu = 1024 < (fu = fa) * h9 ? 1024 / h9 : fu) * h9 < .125 ? .125 / h9 : fu, a6.zoom(fa, fL, fM),
			function(fu, gA, gB) {
				h9 *= fu, h8 = (h8 + gA) * fu - gA, hA = (hA + gB) * fu - gB, p.z2()
			}(fa, fL, fM)
	}, this.z2 = function() {
		var z6 = aK.g6 / 16,
			gY = 0,
			z7 = aK.gC / 16,
			ga = 0;
		h8 < -aK.g6 + z6 && (gY = -aK.g6 + z6 - h8), h8 > h9 * ap.eB - z6 && (gY = h9 * ap.eB - z6 - h8), hA < -aK.gC + z7 && (ga = -aK.gC + z7 - hA), hA > h9 * ap.eC - z7 && (ga = h9 * ap.eC - z7 - hA), h8 += gY, hA += ga, ax.kM(), a6.z8(gY, ga)
	}, this.yN = function() {
		fL = aK.g6 - g6 - b0.gap, fM = Math.floor(aK.gC / 2 - 1.25 * g6)
	}, this.gF = function() {
		b9.dG.data[8].value || (gG.drawImage(yr[0], fL, fM), gG.drawImage(yr[1], fL, Math.floor(fM + 3 * g6 / 2)))
	}
}

function bc() {
	var dp, pf, zA, zB, gap, zC, zD, zE, zF, zG, g5, zH, fI, zI, zJ, xR, zK, zL, zM;

	function zQ() {
		zB = Math.floor(.2 * (b7.cv.fw() ? .07 : .035) * aK.fx), zB = vz(b7.cv.fw() ? 3 : 1, zB);
		var zV = aK.g6 / (dp.length + gap);
		zB = zB < zV ? zV : zB, xR = Math.floor((1 - gap) * zB), pf = 0, zW()
	}

	function zW() {
		pf = (pf = pf < -20 ? -20 : pf) > (dp.length - 15) * zB ? (dp.length - 15) * zB : pf, zD = Math.floor(pf / zB), zE = (zE = zD + Math.floor(aK.g6 / zB)) > dp.length - 1 ? dp.length - 1 : zE, zD = (zD = zE < zD ? zE : zD) < 0 ? 0 : zD;
		var p2 = zE;
		zC = zA / dp[p2];
		for (var eG = zE - 1; zD <= eG; eG--) dp[eG] > dp[p2] && (p2 = eG, zC = zA / Math.pow(dp[eG], zJ))
	}

	function zZ(fL) {
		fL = Math.floor((pf + aK.g6 - fL - gap * zB) / zB);
		return (fL = fL < -1 ? -1 : -1 === fL ? 0 : fL > dp.length - 1 ? -1 : fL) !== zF && (zF = fL, -1 === zK && 0 === zF && zI && (zK = setInterval(za, 100)), 1)
	}

	function zb(eG) {
		var xI = Math.floor(zC * Math.pow(dp[eG], zJ));
		gG.fillRect(pf + aK.g6 - (eG + 1) * zB, aK.gC - xI, xR, xI)
	}

	function za() {
		var ej;
		0 !== (zF = 8 === x.dZ() ? -1 : zF) ? (zL = (new Date).getTime(), clearInterval(zK), zK = -1) : (ej = dp[1] / 864e3, -1 !== zL && (ej += ((new Date).getTime() - zL) * dp[1] / 864e5, zL = -1), 0 < ej && (dp[0] += Math.floor(ej), b3.d1 = !0))
	}
	this.cq = function() {
		zI = !(zL = zK = -1), zF = -(zJ = 1), this.zN = !1, fI = 0, zH = new Date, pf = 0, gap = .3, (zM = []).push({
			wN: "Plateau A",
			ec: 0,
			dE: 57
		}), zM.push({
			wN: "Max A",
			ec: 1,
			dE: 1
		}), zM.push({
			wN: "Black Friday",
			ec: 15,
			dE: 15
		}), zM.push({
			wN: "Max B",
			ec: 19,
			dE: 19
		}), zM.push({
			wN: "Max C",
			ec: 44,
			dE: 44
		}), zM.push({
			wN: "First Android Version",
			ec: 58,
			dE: 58
		}), zM.push({
			wN: "Max D",
			ec: 67,
			dE: 67
		}), zM.push({
			wN: "The iFrame Explosion",
			ec: 98,
			dE: 99
		}), zM.push({
			wN: "The 155-Day Uptrend",
			ec: 58,
			dE: 213
		}), zM.push({
			wN: "Max E",
			ec: 213,
			dE: 213
		}), zM.push({
			wN: "Plateau B",
			ec: 214,
			dE: 259
		}), zM.push({
			wN: "Turbulent Times",
			ec: 260,
			dE: 344
		}), zM.push({
			wN: "Max F",
			ec: 262,
			dE: 262
		}), zM.push({
			wN: "Max G",
			ec: 282,
			dE: 282
		}), zM.push({
			wN: "Max H",
			ec: 333,
			dE: 333
		}), zM.push({
			wN: "The 19-Day Downtrend",
			ec: 283,
			dE: 301
		}), zM.push({
			wN: "Plateau C",
			ec: 345,
			dE: 385
		}), zM.push({
			wN: "The Alliance Ascent",
			ec: 386,
			dE: 395
		}), zM.push({
			wN: "Max I",
			ec: 395,
			dE: 395
		}), zM.push({
			wN: "First iOS Version",
			ec: 411,
			dE: 411
		}), zM.push({
			wN: "Plateau D",
			ec: 396,
			dE: 453
		}), zM.push({
			wN: "The TikTok Revolution",
			ec: 454,
			dE: 470
		}), zM.push({
			wN: "Max J",
			ec: 456,
			dE: 456
		}), zM.push({
			wN: "Max K",
			ec: 472,
			dE: 472
		}), zM.push({
			wN: "Max L",
			ec: 478,
			dE: 478
		}), zM.push({
			wN: "YT Drew",
			ec: 471,
			dE: 485
		}), zM.push({
			wN: "Plateau E",
			ec: 485,
			dE: 600
		}), zM.push({
			wN: "Uptrend A",
			ec: 600,
			dE: 613
		}), zM.push({
			wN: "Max M",
			ec: 613,
			dE: 613
		}), zM.push({
			wN: "Downtrend A",
			ec: 614,
			dE: 635
		}), zM.push({
			wN: "Plateau F",
			ec: 636,
			dE: 737
		}), zM.push({
			wN: "End of Record",
			ec: 738,
			dE: 738
		}), dp = [208644377, 208644377, 208644377, 206964709, 205156594, 250680803, 249089835, 234476552, 252346209, 263196406, 270821533, 291436400, 294907103, 288866179, 297960890, 310165928, 323215738, 326005712, 312078872, 282668674,
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
		], this.resize(), aN.iy.zP(0, 0)
	}, this.resize = function() {
		zA = Math.floor(.15 * aK.gC), zG = (zG = Math.floor((b7.cv.fw() ? .018 : .0137) * aK.fx)) < 2 ? 2 : zG, g5 = aY.g1.g2(1, zG), zQ()
	}, this.zR = function() {
		zI || aN.la.zS()
	}, this.zT = function(zU) {
		var eG;
		for (zI = !0, eG = 0; eG < zU.length; eG++) dp.unshift(zU[eG]);
		zQ(), b3.d1 = !0
	}, this.zX = function() {
		zW()
	}, this.sZ = function(fL, fM) {
		fM > aK.gC - .6 * zA ? this.zN ? fL !== fI && (pf += fL - fI, fI = fL, zW(), zZ(fL), this.zN = -1 !== zF, b3.d1 = !0) : zZ(fL) && (b3.d1 = !0) : this.sy()
	}, this.sy = function() {
		-1 !== zF && (this.zN = !1, zF = -1, b3.d1 = !0)
	}, this.sc = function(fL, deltaY) {
		-1 !== zF && (pf += Math.floor(deltaY), zW(), zZ(fL), b3.d1 = !0)
	}, this.g9 = function(fL, fM) {
		this.sZ(fL, fM), -1 !== zF && (fI = fL, this.zN = !0)
	}, this.sz = function() {
		-1 !== zF && (this.zN = !1)
	}, this.gF = function() {
		gG.fillStyle = aZ.kg;
		for (var zd, month, dc, qT, zg, zh, je, zi, zj, eG = zE; zD <= eG; eG--) zb(eG);
		zI && 0 === zD && (gG.fillStyle = aZ.l4, zb(0)), -1 !== zF && (gG.fillStyle = aZ.kf, zb(zF)), -1 !== zF && (gG.font = g5, aY.g1.textBaseline(gG, 2), (dc = new Date).setTime(zH.getTime() - 1e3 * zF * 60 * 60 * 24), month = "month", zd =
			"day", "undefined" != typeof Intl && (month = new Intl.DateTimeFormat("en-US", {
				month: "long"
			}).format(dc), zd = new Intl.DateTimeFormat("en-US", {
				weekday: "long"
			}).format(dc)), zd = zd + ", " + dc.getUTCDate() + " " + month + " " + dc.getFullYear(), month = 1 === dp[zF] ? " second played" : " seconds played", month = aY.jl.jm(dp[zF]) + month, dc = Math.floor(gG.measureText(zd).width),
			qT = Math.floor(gG.measureText(month).width), zg = Math.floor(.5 * (dc + zG)), zh = (zh = pf + aK.g6 - (zF + 1) * zB) < zg ? zg : zh > aK.g6 - zg ? aK.g6 - zg : zh, je = aK.gC - Math.floor(zC * Math.pow(dp[zF], zJ)), zi = Math
			.floor(1.1 * zG), zj = je > aK.gC - zi ? aK.gC - zi : je, gG.fillStyle = aZ.kb, gG.fillRect(aK.g6 - qT - zG, zj - zi, qT + zG, zi), gG.fillRect(zh - zg, aK.gC - zi, dc + zG, zi), gG.fillStyle = aZ.gH, aY.g1.textAlign(gG, 2), gG
			.fillText(month, Math.floor(aK.g6 - .5 * zG), zj),
			function(je, zi) {
				for (var qS, up = -1, g0 = dp.length - zF - 1, eG = zM.length - 1; 0 <= eG; eG--) g0 >= zM[eG].ec && g0 <= zM[eG].dE && (-1 === up || zM[eG].dE - zM[eG].ec < zM[up].dE - zM[up].ec) && (up = eG); - 1 !== up && (qS = Math.floor(
					gG.measureText(zM[up].wN).width), gG.fillStyle = aZ.kb, gG.fillRect(aK.g6 - qS - zG, je, qS + zG, zi), gG.fillStyle = aZ.gH, gG.fillText(zM[up].wN, Math.floor(aK.g6 - .5 * zG), je + zi))
			}(zj - 2 * zi, zi), aY.g1.textAlign(gG, 1), gG.fillText(zd, zh, aK.gC), gG.strokeStyle = aZ.kh, gG.lineWidth = 1, gG.beginPath(), gG.moveTo(0, je), gG.lineTo(aK.g6, je), gG.closePath(), gG.stroke())
	}
}

function bd() {
	var g5, g6, fM, zl, zm, gP, qN, xL, tm, zn, zo, zp, zq;
	this.fL = 0, this.gC = 0, this.cq = function() {
		zm = q4, zo = "rgba(0,100,0,0.8)", zp = "rgba(150,0,0,0.8)", xL = !(zn = !0), tm = eY[eX], this.resize()
	}, this.resize = function() {
		g6 = Math.floor((b7.cv.fw() ? .305 : .24) * aK.fx), this.gC = Math.floor(.5 + .13 * g6), g6 = Math.floor(6 * this.gC), g5 = aY.g1.g2(1, Math.floor(.8 * this.gC)), zq = Math.floor(.5 * this.gC), ap.pA.font = g5, fM = b0.gap, zl = Math
			.floor(1 + .13 * this.gC), (gP = document.createElement("canvas")).width = g6, gP.height = this.gC, (qN = gP.getContext("2d", {
				alpha: !0
			})).font = g5, aY.g1.textBaseline(qN, 1), aY.g1.textAlign(qN, 1), this.zr()
	}, this.xj = function() {
		return b7.cv.fw() && aK.g6 < 1.2 * aK.gC
	}, this.yN = function() {
		this.xj() ? this.fL = aK.g6 - g6 - b0.gap : this.fL = Math.floor(s.zs() + (aK.g6 - s.zs() - t.g6 - g6) / 2 - .5 * b0.gap)
	}, this.j7 = function() {
		xL && (xL = !1, this.zr())
	}, this.zr = function() {
		qN.clearRect(0, 0, g6, this.gC), qN.fillStyle = zn ? zo : zp, qN.fillRect(0, 0, g6, this.gC), qN.fillStyle = aZ.kf, this.zt(), this.zu(), qN.fillStyle = eY[eX] >= a5.iB(eX) ? aZ.l1 : aZ.gH, qN.fillText(aY.jl.jm(tm), Math.floor(g6 / 2),
			zq), qN.fillStyle = aZ.gH, qN.fillRect(0, 0, g6, 1), qN.fillRect(0, 0, 1, this.gC), qN.fillRect(0, this.gC - 1, g6, 1), qN.fillRect(g6 - 1, 0, 1, this.gC)
	}, this.zt = function() {
		var pn = yH(Math.floor((a5.zv() - 1) * this.gC / 9), this.gC - zl);
		qN.fillRect(0, pn, zl, this.gC - pn), qN.fillRect(g6 - zl, pn, zl, this.gC - pn)
	}, this.zu = function() {
		qN.fillRect(zl, this.gC - zl, Math.floor((g6 - 2 * zl) * eY[eX] / zm), zl)
	}, this.i8 = function() {
		0 !== h4[eX] && 2 !== h5[eX] && tm !== eY[eX] && (zm = vz(eY[eX], zm), zn = eY[eX] > tm && 10 <= eY[eX], tm = eY[eX], xL = !0)
	}, this.gF = function() {
		0 === h4[eX] || fd || 2 === h5[eX] || gG.drawImage(gP, this.fL, fM)
	}
}

function be() {
	var zx, zy, zz, a00, a01, a02, a03, a04, a05, a06, a07, a08, a09, a0A, a0B, a0C, a0D, a0E, a0F, a0G, a0H, a0I, a0J, a0K, position, a0L, a0M, a0N, a0O, a0P = 1,
		a0Q = 1;

	function a0T() {
		a03.clearRect(0, 0, zx, xz), a03.fillStyle = aZ.lE, a03.fillRect(0, 0, zx, a08), a03.fillStyle = aZ.ka, a03.fillRect(0, a08, zx, xz - a08), zw[eX] >= position && a0U(zw[eX] - position, aZ.kx), 0 !== zw[eX] && 0 === position && a0U(0, aZ.lJ),
			-1 !== a0K && a0U(a0K, aZ.ke), a03.fillStyle = aZ.gH, a03.fillRect(0, a08, zx, 1), a03.fillRect(0, 0, zx, b0.ue), a03.fillRect(0, 0, b0.ue, xz), a03.fillRect(zx - b0.ue, 0, b0.ue, xz), a03.fillRect(0, xz - b0.ue, zx, b0.ue), a03.font =
			zy, aY.g1.textBaseline(a03, 1), aY.g1.textAlign(a03, 1), a03.fillText(aV.nc[65], Math.floor((zx + a08 - 22) / 2), Math.floor(a06 + zz / 2));
		playerList.drawButton(a03, 12, 12, a08 - 22);
		var hb, ek = zw[eX] < position + a01 - 1 ? 1 : 2;
		for (a03.font = a00, aY.g1.textAlign(a03, 0), hb = a01 - ek; 0 <= hb; hb--) a0V(jH[hb + position]), a0W(hb, hb + position, jH[hb + position]);
		for (aY.g1.textAlign(a03, 2), hb = a01 - ek; 0 <= hb; hb--) a0V(jH[hb + position]), a0X(hb, jH[hb + position]);
		2 == ek && (a0V(eX), aY.g1.textAlign(a03, 0), a0W(a01 - 1, zw[eX], eX), aY.g1.textAlign(a03, 2), a0X(a01 - 1, eX)), 0 === position && (ek = .7 * a09 / a1.get(4).height, a03.setTransform(ek, 0, 0, ek, Math.floor(a0A + .58 * a09 + .5 * ek * a1
			.get(4).width), Math.floor(a06 + zz + .4 * a09)), a03.imageSmoothingEnabled = !0, a03.drawImage(a1.get(4), -Math.floor(a1.get(4).width / 2), -Math.floor(a1.get(4).height / 2)), a03.setTransform(1, 0, 0, 1, 0, 0))
	}

	function a0V(player) {
		hO && (a03.fillStyle = b4.a0Z[b4.rW[b4.iO[player]]])
	}

	function a0U(eG, uu) {
		a03.fillStyle = uu, eG = a01 - 1 < eG ? a01 - 1 : eG;
		uu = Math.floor((eG === a01 - 1 ? 2 : 0 === eG ? 1.15 : 1) * a09), uu = eG === a01 - 2 ? Math.floor(a08 + 9.15 * a09) - Math.floor(a08 + 8.15 * a09) : uu;
		a03.fillRect(0, Math.floor(a08 + (eG + (0 === eG ? 0 : .15)) * a09), zx, uu)
	}

	function a0W(a0b, a0c, eG) {
		a03.fillText(a0G[a0c], a0A, Math.floor(a06 + zz + (a0b + .5) * a09)), 1 === h5[eG] && (a03.font = "italic " + a00);
		a0c = Math.floor(a06 + zz + (a0b + .5) * a09);
		a03.fillText(a0E[eG] === eG ? jn[eG] : a0D[a0E[eG] % eg], a0B, a0c), 0 !== h5[eG] && (a03.font = a00), eG < h3 && 2 !== h5[eG] || a03.fillRect(a0B, a0c + .35 * a0P, a0F[eG], Math.max(1, .1 * a0P))
	}

	function a0X(a0b, eG) {
		a03.fillText(f2[eG], a0C, Math.floor(a06 + zz + (a0b + .5) * a09))
	}

	function a0l(fM) {
		return (fM -= b0.gap + a08) < 0 ? Math.floor(fM / a09) - 1 : fM < (a01 - 1) * a09 ? Math.floor(fM / a09) : fM < xz - a08 ? a01 - 1 : (fM -= xz - a08, a01 + Math.floor(fM / a09))
	}

	function vH(fL, fM) {
		return fL >= b0.gap && fL < b0.gap + zx && fM >= b0.gap && fM < b0.gap + xz
	}
	this.cq = function() {
		var eG, fz, hb;
		for (a0M = !1, a0O = a0N = a0L = 0, a0K = -1, a01 = b7.cv.fw() ? 6 : 10, a0Q = (position = 0) === (a0Q = b9.dG.data[11].value) ? 10 : 1 === a0Q ? 5 : 1, a0J = !1, a0H = new Uint16Array(a01 + 1), a0I = new Uint32Array(a01 + 1), a05 = eg,
			jH = new Uint16Array(a05), zw = new Uint16Array(a05), eG = a05 - 1; 0 <= eG; eG--) jH[eG] = eG, zw[eG] = eG;
		this.resize(!0), a0D = [], a0E = new Uint16Array(eg), a0F = new Uint16Array(eg);
		var a0R = Math.floor(zx - a0B - a0A - a04),
			a0S = 0;
		for (a0G = new Array(eg), a03.font = a00, eG = eg - 1; 0 <= eG; eG--)
			if (a0G[eG] = eG + 1 + ".", a0E[eG] = eG, a0F[eG] = Math.floor(a03.measureText(jn[eG]).width), a0F[eG] > a0R) {
				for (fz = jn[eG], hb = jn[eG].length - 1; 1 <= hb && (fz = fz.substring(0, hb), a0F[eG] = Math.floor(a03.measureText(fz + "...").width), !(a0F[eG] <= a0R)); hb--);
				fz += "...", a0D.push(fz), a0E[eG] = eg + a0S++
			} a0T()
	}, this.resize = function(cq) {
		if (xz = b7.cv.fw() ? (zx = Math.floor(.335 * aK.fx), Math.floor(a01 * zx / 8)) : (zx = Math.floor(.27 * aK.fx), Math.floor(a01 * zx / 10)), zx = Math.floor(.97 * zx), (a02 = document.createElement("canvas")).width = zx, a02.height = xz,
			a03 = a02.getContext("2d", {
				alpha: !0
			}), a06 = .025 * zx, zz = .16 * zx, a07 = 0 * zx, a08 = Math.floor(.45 * a06 + zz), a09 = (xz - zz - 2 * a06 - a07) / a01, zy = aY.g1.g2(1, Math.floor(.55 * zz)), a0P = Math.floor((b7.cv.fw() ? .67 : .72) * a09), a00 = aY.g1.g2(0,
				a0P), a03.font = a00, a0A = Math.floor(.04 * zx), a0B = Math.floor((b7.cv.fw() ? .195 : .18) * zx), a04 = Math.floor(a03.measureText("00920600").width), a03.font = zy, a0C = zx - a0A, !cq) {
			a03.font = a00;
			for (var eG = eg - 1; 0 <= eG; eG--) a0F[eG] = Math.floor(a03.measureText(a0E[eG] === eG ? jn[eG] : a0D[a0E[eG] % eg]).width);
			a0T()
		}
	}, this.zs = function() {
		return zx
	}, this.j7 = function(wZ) {
		a0J && (wZ || b3.iM() % a0Q == 0) && (a0J = !1, a0T())
	}, this.i8 = function() {
		! function() {
			for (var hb = a05 - 1; 0 <= hb; hb--) 0 === h4[jH[hb]] && ! function(hb) {
				var a0j = jH[hb];
				a05--;
				for (var eG = hb; eG < a05; eG++) jH[eG] = jH[eG + 1], zw[jH[eG]] = eG;
				jH[a05] = a0j, zw[jH[a05]] = a05
			}(hb)
		}();
		for (var a0h, kN = a05 - 1, hb = 0; hb < kN; hb++) f2[jH[hb]] < f2[jH[hb + 1]] && (a0h = jH[hb], jH[hb] = jH[hb + 1], jH[hb + 1] = a0h, zw[jH[hb]] = hb, zw[jH[hb + 1]] = hb + 1);
		! function() {
			for (var dc = a0J, ek = (a0J = !0, zw[eX] >= a01 - 1 ? a01 - 2 : a01 - 1), eG = ek; 0 <= eG; eG--)
				if (a0H[eG] !== jH[eG] || a0I[eG] !== f2[jH[eG]]) return;
			(ek != a01 - 2 || a0H[a01] === zw[eX] && a0I[a01] === f2[eX]) && (a0J = dc)
		}();
		for (var eG = a01 - 1; 0 <= eG; eG--) a0H[eG] = jH[eG], a0I[eG] = f2[jH[eG]];
		a0H[a01] = zw[eX], a0I[a01] = f2[eX]
	}, this.g9 = function(fL, fM) {
		return !!vH(fL, fM) && (utils.isPointInRectangle(fL, fM, b0.gap + 12, b0.gap + 12, a08 - 22, a08 - 22) && playerList.display(jn), true) && (a0L = b3.db, a0M = !0, a0N = a0O = a0l(fM), ag.tF() && (fL = yh(-1, a0O, a01), a0K !== (fL =
			fL === a01 ? -1 : fL)) && (a0K = fL, a0T(), b3.d1 = !0), !0)
	}, this.sZ = function(fL, fM) {
		if (utils.isPointInRectangle(fL, fM, b0.gap + 12, b0.gap + 12, a08 - 22, a08 - 22)) {
			playerList.hoveringOverButton === false && (playerList.hoveringOverButton = true, a0T(), b3.d1 = !0);
		} else {
			playerList.hoveringOverButton === true && (playerList.hoveringOverButton = false, a0T(), b3.d1 = !0);
		}
		var dc, a0k = a0l(fM);
		return a0M ? (dc = position, (position = yh(0, position += a0N - a0k, eg - a01)) !== dc && (a0k = (a0k = yh(-1, a0N = a0k, a01)) !== a01 && vH(fL, fM) ? a0k : -1, a0K = a0k, a0T(), b3.d1 = !0), !0) : (a0k = (a0k = yh(-1, a0k, a01)) ===
			a01 || !vH(fL, fM) || ag.tF() ? -1 : a0k, a0K !== a0k && (a0K = a0k, a0T(), b3.d1 = !0))
	}, this.sz = function(fL, fM) {
		if (!a0M) return !1;
		a0M = !1;
		var a0k = a0l(fM);
		return ag.tF() && -1 !== a0K && (a0K = -1, a0T(), b3.d1 = !0), b3.db - a0L < 350 && a0O === a0k && -1 !== (a0k = (a0k = yh(-1, a0k, a01)) !== a01 && vH(fL, fM) ? a0k : -1) && (fL = jH[a0k + position], a0k === a01 - 1 && zw[eX] >=
			position + a01 - 1 && (fL = eX), hO && donationsTracker.displayHistory(fL, jn, ip), 0 !== h4[fL]) && f.k8(fL, 800, !1, 0), !0
	}, this.sc = function(fL, fM, deltaY) {
		var a0m;
		return !(a0M || kA || (a0m = Math.max(Math.floor(Math.abs(deltaY) / 40), 1), !vH(fL, fM)) || (fL = (fL = yh(-1, a0l(fM), a01)) === a01 || ag.tF() ? -1 : fL, 0 < deltaY ? position < eg - a01 && (position += Math.min(eg - a01 - position,
			a0m), a0K = fL, a0T(), b3.d1 = !0) : 0 < position && (position -= Math.min(position, a0m), a0K = fL, a0T(), b3.d1 = !0), 0))
	}, this.gF = function() {
		gG.drawImage(a02, b0.gap, b0.gap)
	}
}

function bf() {
	var gP, qN, fL, fM, xI, a0n, gap, a0o, fontSize, a0p, a0q, ea, a0r, a0s, a0t, a0u, a0v, a0w;

	function a0z() {
		qN.clearRect(0, 0, t.g6, t.gC), qN.fillStyle = aZ.kb, qN.fillRect(0, 0, t.g6, t.gC), qN.fillStyle = aZ.ks, fa = 0 < a0t ? a0t : Math.sqrt(ea[4] / 1e4), qN.fillRect(0, t.gC - xI - 1, Math.floor(fa * t.g6), xI), qN.fillStyle = aZ.gH, qN
			.fillRect(0, 0, t.g6, 1), qN.fillRect(0, 0, 1, t.gC), qN.fillRect(t.g6 - 1, 0, 1, t.gC), qN.fillRect(0, t.gC - 1, t.g6, 1), qN.fillRect(0, t.gC - xI - 1, t.g6, 1);
		for (var fa, a11, dc = 0, eG = 0; eG < a0q.length; eG++) a0r[eG] ? (aY.g1.textAlign(qN, 0), a11 = Math.floor((a0n - xI + 2 * a0o) * (eG - dc + 1) / (a0q.length + 1) - .7 * a0o), qN.fillText(a0q[eG], gap, a11), aY.g1.textAlign(qN, 2), 5 ===
			eG && 0 !== h4[eX] && eY[eX] >= a5.iB(eX) ? (qN.fillStyle = aZ.lH, qN.fillText(a0y(eG), t.g6 - gap, a11), qN.fillStyle = aZ.gH) : qN.fillText(a0y(eG), t.g6 - gap, a11)) : dc++
	}

	function a0y(eG) {
		return eG < 3 ? ea[eG].toString() : 3 === eG || 4 === eG || 5 === eG ? aY.jl.u1(ea[eG] / 100, 2) : eG < 7 ? aY.jl.jm(ea[eG]) : eG === 7 ? t.zv(ea[7]) : eG === 8 ? utils.getMaxTroops(f2, eX) : utils.getDensity(eX)
	}

	function a0x() {
		f2[eX] !== ea[6] && (ea[6] = f2[eX], a0p++)
	}
	this.cq = function() {
		a0t = a0u = 0, (a0q = new Array(8))[0] = aV.nc[70], a0q[1] = ip ? aV.nc[71] : aV.nc[72], a0q[2] = aV.nc[73], a0q[3] = aV.nc[74], a0q[4] = aV.nc[75], a0q[5] = aV.nc[76], a0q[6] = aV.nc[77], a0q[7] = aV.nc[78],
			a0q.push("Max Troops", "Density"), // add a0q
			a0w = uF - eU(uF, 100), (ea = new Array(a0q.length))[0] = ip ? 0 : h3, ea[1] = ip ? iP : ii, ea[2] = rL, ea[3] = 0, ea[4] = eU(1e4 * f2[0], uF), ea[5] = 700, ea[6] = 0, a0x(), ea[7] = 0, a0s = a0y(6), a0r = new Array(a0q.length);
		for (var eG = a0q.length - 1; 0 <= eG; eG--) a0r[eG] = !0;
		a0v = 0, a0v = ip ? (a0r[0] = !1, a0r[2] = !1, a0r[3] = !1, 3) : (a0r[3] = !1, 1), a0p = 0, this.resize()
	}, this.resize = function() {
		this.g6 = Math.floor((b7.cv.fw() ? .1646 : .126) * 1.25 * aK.fx), this.gC = Math.floor(1.18 * this.g6), xI = Math.floor(.04 * this.g6), gap = Math.floor(.035 * this.g6), a0o = .04 * this.g6, a0n = this.gC, this.gC -= Math.floor(a0v * (
			this.gC - 2 * xI) / a0q.length), fontSize = Math.floor(.7 * (a0n - xI) / a0q.length), fontSize = aY.g1.g2(1, fontSize), (gP = document.createElement("canvas")).width = this.g6, gP.height = this.gC, (qN = gP.getContext("2d", {
			alpha: !0
		})).font = fontSize, aY.g1.textBaseline(qN, 1), qN.lineWidth = 1, this.u9(), this.yN(), r.yN(), a0z()
	}, this.yN = function() {
		fL = aK.g6 - this.g6 - b0.gap
	}, this.a10 = function() {
		fM = b0.gap
	}, this.u9 = function() {
		fM = b0.gap + (r.xj() && 0 !== h4[eX] && !fd ? r.gC + b0.gap : 0)
	}, this.j7 = function(wZ) {
		0 < a0p && (wZ || 100 <= a0p) && (a0p = 0, a0z())
	}, this.v2 = function() {
		return ea[7]
	}, this.zv = function(value) {
		var p2 = Math.floor(value / 1e3 / 60),
			value = Math.floor((value - 6e4 * p2) / 1e3);
		return value < 10 ? p2 + ":0" + value : p2 + ":" + value
	}, this.i8 = function() {
		var a1B, per;
		a0r[0] && rM - rL !== ea[0] && (ea[0] = rM - rL, a0p++), iP - ea[0] !== ea[1] && (ea[1] = iP - ea[0], a0p++), this.ix(), (a1B = a5.a1C(eX)) !== ea[5] && (ea[5] = a1B, a0p++), a0x(), ea[7] += b3.a1D, a1B = a0y(7), a0s !== a1B && (a0s =
			a1B, a0p += 100), a1B = hO ? b5.rY() : f2[jH[0]], per = eU(1e4 * a1B, uF), ea[3] = a1B, ea[4] !== per && (a0p++, ea[4] = per), 8 === im && function() {
			if (0 === h4[0]) ao.r4.rC(1);
			else {
				if (0 !== h4[1]) return;
				ao.r4.rC(0)
			}
			return 1
		}() || ea[3] < a0w || ea[3] !== uF && ! function() {
			for (var eG = iP - 1; 0 <= eG; eG--)
				if (0 < ed[iQ[eG]].length) return;
			return 1
		}() || ao.r4.rC(-1)
	}, this.ix = function() {
		a0r[2] && rL !== ea[2] && (ea[2] = rL, a0p++)
	}, this.a1E = function(eG) {
		var tc, a1F, dc;
		return 2 !== rJ && (eG === uJ ? (a0t = 0, a0z(), !1) : (-1 !== eG || 0 !== a0u) && (a1F = a0t, a0t = fO ? eG / uJ : (dc = performance.now(), 0 <= eG && (tc = dc - 392 * eG, a0u = 0 === eG || tc < a0u ? tc : a0u), 1 < (a0t = (dc - a0u) / (
			392 * uJ)) ? 1 : a0t), a0z(), a0t !== a1F))
	}, this.gF = function() {
		gG.drawImage(gP, fL, fM)
	}
}

function bg() {
	var da, a1G, g6, gC, xC, a1H, a1I, xk, gP, jz, a1J;

	function gE() {
		return Math.floor((aK.g6 - g6) / 2) < o.gC + 2 * b0.gap ? aK.gC - gC - 4 * b0.gap - o.gC : aK.gC - gC - 2 * b0.gap
	}
	this.a1K = -1, this.cq = function() {
		a1J = da = !1, xC = .61, a1H = .07, a1I = .09, jz = xk = gC = 0, this.a1K = -1
	}, this.resize = function() {
		var qN, jd, iN, a1P, a1Q, vQ;
		da && (g6 = yH(g6 = b7.cv.fw() ? Math.floor(.69 * aK.fx) : Math.floor(.5 * aK.fx), vz(aK.g6 - 2 * b0.gap, 10)), g6 = yH(g6, Math.floor(3.57 * vz(aK.gC - 2 * b0.gap, 3))), gC = Math.floor(.28 * g6), (gP = document.createElement("canvas"))
			.width = g6, gP.height = gC, qN = gP.getContext("2d", {
				alpha: !0
			}), jd = Math.floor(1 + gC / 40), qN.clearRect(0, 0, g6, gC), qN.fillStyle = aZ.kb, qN.fillRect(jd, jd, g6 - 2 * jd, gC - 2 * jd), qN.lineJoin = "bevel", qN.lineWidth = 2 * jd, qN.strokeStyle = aZ.gH, qN.strokeRect(jd, jd, g6 -
				2 * jd, gC - 2 * jd), qN.imageSmoothingEnabled = !0, iN = a1.get(a1G), a1P = iN.width, a1Q = iN.height, vQ = (21 === a1G ? .666 : 1) * xC * gC / a1Q, qN.setTransform(vQ, 0, 0, vQ, Math.floor((g6 - vQ * a1P) / 2), Math.floor((
				gC - vQ * a1Q) / 2)), qN.drawImage(iN, 0, 0), qN.setTransform(1, 0, 0, 1, Math.floor(g6 - a1I * gC - a1H * gC - jd), Math.floor(jd + a1H * gC)),
			function(qN, ec) {
				qN.lineWidth = Math.floor(1 + gC / 80), qN.strokeStyle = aZ.gH, qN.beginPath(), qN.moveTo(0, 0), qN.lineTo(ec, ec), qN.moveTo(0, ec), qN.lineTo(ec, 0), qN.stroke()
			}(qN, Math.floor(a1I * gC)), qN.setTransform(1, 0, 0, 1, 0, 0))
	}, this.show = function(de, a1M, a1N, a1O) {
		da || a1O && a1J || (a1G = a1N ? 21 : de ? 1 : 2, da = a1J = !0, this.resize(), i.o3(), o.yC(), jz = b3.db, -1 === this.a1K && (this.a1K = b3.iM()), xk = a1M ? 1 : 0)
	}, this.i8 = function() {
		!da || 1 <= xk || (xk = 1 < (xk += 5e-4 * (b3.db - jz)) ? 1 : xk, jz = b3.db, b3.d1 = !0)
	}, this.g9 = function(fL, fM) {
		return !(!da || xk <= 0 || (fL -= Math.floor((aK.g6 - g6) / 2), fM -= gE(), fL < 0) || fM < 0 || g6 < fL || gC < fM || (g6 - gC / 3 < fL && fM < gC / 3 && (da = !1, b3.d1 = !0), 0))
	}, this.gF = function() {
		!da || xk <= 0 || (gG.globalAlpha = xk, gG.drawImage(gP, Math.floor((aK.g6 - g6) / 2), gE()), gG.globalAlpha = 1)
	}
}

function cg() {
	this.a1S = !1, this.kV = !1, this.uD = !1, this.a1T = [0, 0, 0, 0], this.a1U = function() {
		var jd, je, jf, jg;
		this.uD = this.uD || this.kV, (this.kV || this.a1S && this.uD) && (jd = ax.a1V[0], je = ax.a1V[1], jf = ax.a1V[2], jg = ax.a1V[3], jd = jd < this.a1T[0] ? this.a1T[0] : jd, je = je < this.a1T[1] ? this.a1T[1] : je, jf = jf > this.a1T[2] ?
			this.a1T[2] : jf, jg = jg > this.a1T[3] ? this.a1T[3] : jg, this.kV = !1, this.a1S = !1, jd === this.a1T[0] && je === this.a1T[1] && jf === this.a1T[2] && jg === this.a1T[3] ? this.uE() : jd <= jf && je <= jg && uY.putImageData(
				uZ, 0, 0, jd, je, jf - jd + 1, jg - je + 1))
	}, this.uE = function() {
		this.uD && this.a1T[2] >= this.a1T[0] && this.a1T[3] >= this.a1T[1] && uY.putImageData(uZ, 0, 0, this.a1T[0], this.a1T[1], this.a1T[2] - this.a1T[0] + 1, this.a1T[3] - this.a1T[1] + 1), this.uD = !1
	}, this.rR = function() {
		this.a1T[2] >= this.a1T[0] && this.a1T[3] >= this.a1T[1] && uY.putImageData(uZ, 0, 0, this.a1T[0], this.a1T[1], this.a1T[2] - this.a1T[0] + 1, this.a1T[3] - this.a1T[1] + 1), this.uD = !1
	}, this.cq = function() {
		var fL, fM;
		this.a1S = !1, this.kV = !1, this.uD = !1, this.a1T[0] = ap.eB, this.a1T[1] = ap.eC, this.a1T[2] = this.a1T[3] = 0;
		loop: for (fL = 1; fL < ap.eB - 1; fL++)
			for (fM = ap.eC - 2; 1 < fM; fM--)
				if (1 === a1W[a2.pv(fL, fM) + 2]) {
					this.a1T[0] = fL;
					break loop
				} loop: for (fM = 1; fM < ap.eC - 1; fM++)
			for (fL = ap.eB - 2; 1 < fL; fL--)
				if (1 === a1W[a2.pv(fL, fM) + 2]) {
					this.a1T[1] = fM;
					break loop
				} loop: for (fL = ap.eB - 2; 0 < fL; fL--)
			for (fM = ap.eC - 2; 1 < fM; fM--)
				if (1 === a1W[a2.pv(fL, fM) + 2]) {
					this.a1T[2] = fL;
					break loop
				} loop: for (fM = ap.eC - 2; 0 < fM; fM--)
			for (fL = ap.eB - 2; 1 < fL; fL--)
				if (1 === a1W[a2.pv(fL, fM) + 2]) {
					this.a1T[3] = fM;
					break loop
				}
	}
}

function cX() {
	this.nc = null;
	var a1X, a1Y = new a1Z;
	this.cq = function() {
		a1X = 0 === b9.dG.data[0].value ? a1Y : new(1 === b9.dG.data[0].value ? a1a : 2 === b9.dG.data[0].value ? a1b : 3 === b9.dG.data[0].value ? a1c : a1d);
		var eG, ec = a1Y.nc.length,
			p2 = a1X.nc.length;
		for (eG = 0; eG < ec; eG++) p2 === eG ? (a1X.nc.push(a1Y.nc[eG]), p2++) : 0 === a1X.nc[eG].length && (a1X.nc[eG] = a1Y.nc[eG]);
		this.nc = a1X.nc, b9.dG.translate()
	}, this.oa = function() {
		return navigator.language.startsWith("en") ? 0 : navigator.language.startsWith("ru") ? 1 : navigator.language.startsWith("tr") ? 2 : navigator.language.startsWith("es") ? 3 : navigator.language.startsWith("de") ? 4 : 0
	}, this.sC = function(iN) {
		for (var ek, ec = this.nc.length, eG = 0; eG < ec; eG++)
			if (this.nc[eG].startsWith("{") && (ek = this.nc[eG].replace("{" + iN + "}", "")).length < this.nc[eG].length) return ek;
		return iN
	}, this.sB = function(g0, a1f, nt) {
		var eG, hk, ec, fz;
		if (!a1f) return this.nc[g0];
		for (ec = a1f.length, fz = this.nc[g0], eG = 0; eG < ec; eG++)
			if (Number.isInteger(a1f[eG]))
				for (hk = a1X.a1g.length - 1; 0 <= hk; hk--) fz = fz.replace("{" + (20 * (hk + 1) + eG) + "}", (2 === hk ? 1 !== a1f[eG] : 1 === a1f[eG]) ? "" : a1X.a1g[hk]);
		if (nt) {
			if (nt.wE)
				for (eG = 0; eG < nt.wE.length; eG++) a1f[nt.wE[eG]] = aY.jl.jm(a1f[nt.wE[eG]]);
			if (nt.wW)
				for (eG = 0; eG < nt.wW.length; eG++) a1f[nt.wW[eG]] = aY.jl.u1(100 * a1f[nt.wW[eG]], 1)
		}
		for (eG = 0; eG < ec; eG++) fz = fz.replace("{" + eG + "}", a1f[eG]);
		return fz
	}
}

function a1Z() {
	this.a1g = ["s"], this.nc = ["Accept", "You erased {0}.", "You were erased by {0}.", "Congratulations! You won the game.", "{0} won the game.", "{0} broke the non-aggression pact.", "{0} is attacking you!", "Choose your start position!",
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

function a1d() {
	this.a1g = ["n", "en", "r"], this.nc = ["Akzeptieren", "Du hast {0} ausgelöscht.", "Du wurdest von {0} ausgelöscht.", "Herzlichen Glückwunsch! Du hast das Spiel gewonnen.", "{0} hat das Spiel gewonnen.",
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

function a1h() {
	this.a1g = ["s", ""], this.nc = ["Accept", "You erased {0}.", "You were erased by {0}.", "Congratulations! You won the game.", "{0} won the game.", "{0} broke the non-aggression pact.", "{0} is attacking you!", "Choose your start position!",
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

function a1a() {
	this.a1g = [], this.nc = ["Принять", "Вы стерли {0}.", "Вас уничтожил {0}.", "Поздравляем! Вы выиграли игру.", "{0} выиграл игру.", "{0} нарушил пакт о ненападении.", "{0} атакует вас!", "Выберите вашу начальную позицию!", "Вы сдались!",
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

function a1c() {
	this.a1g = ["", ""], this.nc = ["Aceptar", "Borraste a {0}.", "Fuiste borrado por {0}.", "Felicidades! Ganaste el juego.", "{0} ganó el juego.", "{0} rompió el pacto de no agresión.", "¡{0} te está atacando!", "Elige tu posición de inicio!",
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

function a1b() {
	this.a1g = ["", ""], this.nc = ["Kabul Et", "{0} silindi.", "{0} tarafından silindiniz.", "Tebrikler! Oyunu kazandınız.", "{0} oyunu kazandı.", "{0} saldırmazlık paktını bozdu.", "{0} sana saldırıyor!", "Başlangıç pozisyonunuzu seçin!",
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
	this.da = !1, this.va = null, this.a1i = 0, this.g6 = null, this.gC = null, this.a1j = .013, this.a1k = .022, this.a1l = .025;
	this.a1n = 3, this.a1o = 1.2, this.a1p = .2, this.a1q = .235, this.a1r = .9, this.a1s = .08;
	var a1t, tf = ["Best Players", "Best Clans", "LEGENDS NEVER DIE", "THE NEVER ENDING WAR"],
		a1u = [-1e6, -1e6];
	this.position = [0, 0], this.a1w = [0, 0], this.cq = function() {
		this.va = [null, null], this.da = !1, this.a1i = 0
	}, this.gD = function(id) {
		this.da = !0, this.resize(), this.a1i = id, this.g3(), y.gD(!1), b3.d1 = !0
	}, this.i8 = function() {
		this.da && this.g3()
	}, this.g3 = function() {
		b3.db - 12e4 >= a1u[this.a1i] && (a1u[this.a1i] = b3.db, this.a1w = [0, 0], aN.iy.zP(0, 1 + this.a1i)) && aN.la.a1x(0, this.a1i)
	}, this.resize = function() {
		if (this.da) {
			var eG;
			for (this.g6 = this.a1y(b7.cv.fw() ? .85 : .66, .75, aK.g6, aK.gC), this.gC = Math.floor(this.g6 / .75), eG = 1; 0 <= eG; eG--) this.va[eG] && (this.va[eG][4] = aY.g1.g2(1, this.va[eG][5] * this.gC / 10));
			a1t = aY.g1.g2(1, .1 * this.gC)
		}
	}, this.a1y = function(fu, gO, g6, gC) {
		return g6 < gO * gC ? Math.floor(fu * g6) : Math.floor(gO * fu * gC)
	}, this.a1z = function(g0, a20, a21, tx, a22, a23, a0b) {
		this.position[g0] = a0b;
		for (var xh, size = a20.length, g5 = aY.g1.g2(1, a22 * this.gC / 10), dp = (this.a24(a20, g5, a23 * this.g6), [
				[], size, -1, tx, g5, a22, 10 * a0b
			]), eG = 0; eG < size; eG++) xh = {
			name: a20[eG].name,
			value: a20[eG].qa / a21,
			colorIndex: a20[eG].colorIndex
		}, dp[0].push(xh);
		this.va[g0] = dp, this.a25(g0);
		a23 = this.va[g0][0][0].name;
		1 === g0 && (a23 = "[" + a23 + "]"), 0 === a0b && aw.fy(g0, a23), b3.d1 = !0
	}, this.a25 = function(eG) {
		this.va[eG][0].sort(function(hb, hk) {
			return hk.value - hb.value
		})
	}, this.ne = function(g0, name, a26, a27) {
		if (this.va && this.va[g0]) {
			var eG, wO = !1;
			if (0 === g0) {
				for (eG = 0; eG < this.va[g0][0].length; eG++)
					if (name === this.va[g0][0][eG].name && a26 > .99 * this.va[g0][0][eG].value && a26 < 1.01 * this.va[g0][0][eG].value) {
						this.va[g0][0][eG].value = a27, wO = !0;
						break
					} wO || this.va[g0][0].push({
					name: name,
					value: a27
				})
			} else {
				for (eG = 0; eG < this.va[g0][0].length; eG++)
					if (name === this.va[g0][0][eG].name) {
						this.va[g0][0][eG].value += 32 < this.va[g0][0][eG].value ? (64 - this.va[g0][0][eG].value) / 256 : .25, this.va[g0][0][eG].value *= 1 / (383 / 384), wO = !0;
						break
					} for (eG = 0; eG < this.va[g0][0].length; eG++) this.va[g0][0][eG].value *= 383 / 384;
				wO || this.va[g0][0].push({
					name: name,
					value: .25
				})
			}
			this.a25(g0)
		}
	}, this.a24 = function(a20, g5, g7) {
		for (var eG = a20.length - 1; 0 <= eG; eG--)
			for (; 3 < a20[eG].name.length && n.measureText(a20[eG].name, g5) > g7;) a20[eG].name = a20[eG].name.substring(0, a20[eG].name.length - 4) + "..."
	}, this.g9 = function(gs, gt) {
		return !!this.da && (gs -= (aK.g6 - this.g6) / 2, gt -= (aK.gC - this.gC) / 2, gs < 0 || gs > this.g6 || gt < 0 || gt > this.gC ? (this.da = !1, 0 === x.dZ() && y.gD(!0), b3.d1 = !0) : (gt = gt < .3 * this.gC ? 1 : gt < .85 * this.gC ? (
				gt = (0 === this.a1i ? 14.1 : 3) * (gt - .3 * this.gC) / (.55 * this.gC), Math.floor(1 + gt * gt)) : 0 === this.a1i ? 200 : 10, gs < this.g6 / 2 ? this.a1w[this.a1i] = -gt : this.a1w[this.a1i] = gt, a1u[this.a1i] + 50 > b3
			.db || (a1u[this.a1i] = b3.db, aN.iy.zP(0, 1 + this.a1i) && aN.la.a1x(0, this.a1i)), !0))
	}, this.gF = function() {
		var jd, je, qS, qT, a28, a29, a2A, vb;
		this.da && (jd = (aK.g6 - this.g6) / 2, je = (aK.gC - this.gC) / 2, qS = this.a1j * this.g6, qT = this.a1n * qS, a28 = this.a1k * this.g6, a29 = this.a1o * a28, a2A = this.a1l * this.g6, vb = Math.floor(.25 * this.gC), gG.setTransform(1,
				0, 0, 1, jd, je), gG.fillStyle = 0 === this.a1i ? aZ.lA : aZ.l7, gG.fillRect(0, 0, this.g6, vb), gG.fillStyle = aZ.ka, gG.fillRect(0, vb, this.g6, this.gC - vb), gG.fillStyle = aZ.gH, gG.font = a1t, aY.g1.textBaseline(gG, 1),
			aY.g1.textAlign(gG, 1), gG.fillText(tf[this.a1i], Math.floor(this.g6 / 2), Math.floor(.135 * this.gC)), gG.font = aY.g1.g2(1, .025 * this.gC), gG.fillText(tf[this.a1i + 2], Math.floor(this.g6 / 2), Math.floor(.2125 * this.gC)), gG
			.beginPath(), gG.moveTo(this.g6 / 4, 0), gG.lineTo(this.g6 / 2 - qS, 0), gG.lineTo(this.g6 / 2, -qT), gG.lineTo(this.g6 / 2 + qS, 0), gG.lineTo(this.g6 - a28, 0), gG.lineTo(this.g6 + a29, -a29), gG.lineTo(this.g6, a28), gG.lineTo(
				this.g6, this.gC / 2 - qS), gG.lineTo(this.g6 + qT, this.gC / 2), gG.lineTo(this.g6, this.gC / 2 + qS), gG.lineTo(this.g6, this.gC - a28), gG.lineTo(this.g6 + a29, this.gC + a29), gG.lineTo(this.g6 - a28, this.gC), gG.lineTo(
				this.g6 / 2 + qS, this.gC), gG.lineTo(this.g6 / 2, this.gC + qT), gG.lineTo(this.g6 / 2 - qS, this.gC), gG.lineTo(a28, this.gC), gG.lineTo(-a29, this.gC + a29), gG.lineTo(0, this.gC - a28), gG.lineTo(0, this.gC / 2 + qS), gG
			.lineTo(-qT, this.gC / 2), gG.lineTo(0, this.gC / 2 - qS), gG.lineTo(0, a28), gG.lineTo(-a29, -a29), gG.lineTo(a28, 0), gG.lineTo(this.g6 / 4, 0), gG.lineTo(this.g6 / 4, a2A), gG.lineTo(a2A, a2A), gG.lineTo(a2A, this.gC - a2A), gG
			.lineTo(this.g6 - a2A, this.gC - a2A), gG.lineTo(this.g6 - a2A, a2A), gG.lineTo(this.g6 / 4, a2A), gG.fill(), this.va[this.a1i] && this.a2B(vb), this.a2C(vb), gG.setTransform(1, 0, 0, 1, 0, 0))
	}, this.a2C = function(vb) {
		var qS = vz(2, Math.floor(.06 * this.g6)),
			xC = (qS -= qS % 2, vz(2, Math.floor(.01 * this.g6))),
			vb = (xC -= xC % 2, Math.floor(.82 * vb));
		gG.fillRect(qS, vb, qS, xC), gG.fillRect(this.g6 - qS - qS, vb, qS, xC), gG.fillRect(Math.floor(this.g6 - qS - qS + (qS - xC) / 2), Math.floor(vb - (qS - xC) / 2), xC, qS)
	}, this.a2B = function(vb) {
		var fM;
		gG.font = this.va[this.a1i][4];
		for (var eG = this.va[this.a1i][1] - 1; 0 <= eG; eG--) aY.g1.textAlign(gG, 2), fM = Math.floor(this.a1s * this.gC + vb + eG * ((1 - 2 * this.a1s) * this.gC - vb) / 9), gG.fillText(this.va[this.a1i][0][eG].value.toFixed(this.va[this.a1i][
			3]), Math.floor(this.a1r * this.g6), fM), gG.fillText(eG + 1 + this.va[this.a1i][6] + ".", Math.floor(this.a1p * this.g6), fM), aY.g1.textAlign(gG, 0), gG.fillText(this.va[this.a1i][0][eG].name, Math.floor(this.a1q * this.g6), fM)
	}
}

function cy() {
	var fL, fM, gC, a2D, a2E, a2F, a2G, a2H, a2I, g6, a2J, a2K;
	this.da = !1, this.cq = function(fz, a2L) {
		if (13 <= b7.df && b7.df < 18) return a2L ? void(a2J = fz) : a2J !== fz ? void 0 : void b7.oV.saveString(200, fz);
		a2L && ((a8.va[1].rE.da || a8.va[2].rE.da) && a8.t7(), y.gD(!1), a2J = fz, (a2K = document.createElement("a")).appendChild(document.createTextNode(a2J)), this.da = !0, a2K.title = a2J, a2K.target = "_blank", a2K.href = a2J, a2K.style
			.textAlign = "center", a2K.style.color = aZ.gH, a2K.style.position = "absolute", a2K.style.padding = "0px", a2K.style.margin = "0px", this.resize(), document.body.appendChild(a2K), b3.d1 = !0)
	}, this.o3 = function() {
		return !(!this.da || (document.body.removeChild(a2K), this.da = !1))
	}, this.g9 = function(gs, gt) {
		return !!this.da && ((gs < fL || gt < fM || fL + g6 < gs || fM + gC < gt || fL + g6 - a2D < gs && gt < fM + a2D) && (b3.d1 = !0, this.da = !1, document.body.removeChild(a2K), 0 === x.dZ()) && y.gD(!0), !0)
	}, this.resize = function() {
		var g5, a2M;
		this.da && (a2H = Math.floor(.8 * (b7.cv.fw() ? aK.g6 > aK.gC ? .6 : .55 : .4) * aK.fx), a2D = Math.floor(.15 * a2H), a2E = Math.floor(.35 * a2D), a2F = Math.floor(.5 * a2D), a2G = Math.floor(2.5 * a2F), gC = a2D + a2E + 3 * a2F, g5 = aY
			.g1.g2(1, a2E / aK.nH), a2I = Math.floor(aK.nH * n.measureText(a2J, g5)), a2M = g6 = (a2H < a2I ? a2I : a2H) + 2 * a2G, g6 = Math.min(g6, aK.g6 - 2 * (b7.cv.fw() ? 2 : 1) * b0.gap), g5 = aY.g1.g2(1, g6 / a2M * a2E / aK.nH), a2I =
			Math.floor(aK.nH * n.measureText(a2J, g5)), fL = Math.floor((aK.g6 - g6) / 2), fM = Math.floor((aK.gC - gC) / 2), a2K.style.font = g5, a2K.style.top = Math.floor((fM + 1.4 * a2F + a2D) / aK.nH) + "px", a2K.style.left = Math.floor(
				(fL + (g6 - a2I) / 2) / aK.nH) + "px")
	}, this.gF = function() {
		this.da && (gG.fillStyle = aZ.kb, gG.fillRect(fL, fM + a2D, g6, gC - a2D), gG.fillStyle = aZ.lP, gG.fillRect(fL, fM, g6, a2D), gG.fillStyle = aZ.gH, gG.lineWidth = b0.ue, gG.strokeStyle = aZ.gH, gG.strokeRect(fL, fM, g6, gC), gG.fillRect(
				fL, fM + a2D, g6, b0.ue), gG.font = aY.g1.g2(1, .48 * a2D), aY.g1.textAlign(gG, 1), aY.g1.textBaseline(gG, 1), gG.fillText("You are leaving Territorial.io!", Math.floor(fL + (g6 - .5 * a2D) / 2), Math.floor(fM + .55 * a2D)), j
			.vY(Math.floor(fL + g6 - .8 * a2D), Math.floor(fM + .25 * a2D), Math.floor(.5 * a2D)), gG.setTransform(1, 0, 0, 1, 0, 0))
	}
}

function cu() {
	var gap, a0q, fL = [0, 0, 0, 0, 0],
		fM = [0, 0, 0, 0, 0],
		kI = [1, 1, 1, 1, 1],
		de = [!0, !0, !1, !1, !1],
		iN = (this.du = [!0, !0, !1, !1, !1], null);
	this.a2N = function(ur, a2O) {
		iN = ur, de = a2O, a0q = [ah.a2P, ah.s5, ah.a2Q, ah.a2R, ah.a2S], this.cq()
	}, this.cq = function() {
		if (a1.g4()) {
			var eG, qS = Math.floor((b7.cv.fw() ? .261 : .195) * aK.fx),
				qT = Math.floor(.9 * qS),
				xC = Math.floor(.17 * qT);
			if (gap = b7.cv.fw() ? 2 * b0.gap : b0.gap, kI[0] = qS / iN[0].width, kI[1] = qT / iN[1].width, kI[2] = xC / iN[2].height, kI[3] = xC / iN[3].height, kI[4] = xC / iN[4].height, kI[3] *= 1.07, fL[0] = gap, fL[1] = gap, fL[2] = gap, fL[
					3] = gap, fL[4] = Math.floor(2 * gap + kI[3] * iN[3].width), fM[0] = gap, fM[1] = fM[0] + gap + kI[0] * iN[0].height, fM[2] = fM[1] + gap + kI[1] * iN[1].height, fM[3] = fM[2] + gap + kI[2] * iN[2].height, fM[4] = fM[3], !de[
					0])
				for (eG = 0; eG < 5; eG++) fM[eG] -= kI[0] * iN[0].height + gap;
			if (!de[1])
				for (eG = 2; eG < 5; eG++) fM[eG] -= kI[1] * iN[1].height + gap
		}
	}, this.da = function() {
		return !(7 === x.dZ() && b7.cv.fw())
	}, this.g9 = function(gs, gt, a2L) {
		if (iN && this.da())
			for (var eG = de.length - 1; 0 <= eG; eG--)
				if (de[eG] && this.du[eG] && fL[eG] < gs && fM[eG] < gt && gs < fL[eG] + kI[eG] * iN[eG].width && gt < fM[eG] + kI[eG] * iN[eG].height) return av.cq(a0q[eG], a2L), !0;
		return !1
	}, this.gF = function() {
		if (iN && this.da()) {
			var eG;
			for (gG.imageSmoothingEnabled = !0, eG = 0; eG < 5; eG++) de[eG] && this.du[eG] && (gG.setTransform(kI[eG], 0, 0, kI[eG], fL[eG], fM[eG]), gG.drawImage(iN[eG], 0, 0));
			gG.setTransform(1, 0, 0, 1, 0, 0)
		}
	}
}

function bh() {
	var a1i, a2T, a2U;

	function a2Z(eG) {
		var button = v.nU[eG],
			fL = button.fL,
			fM = button.fM,
			g6 = button.g6,
			gC = button.gC;
		gG.fillStyle = button.a2X, gG.fillRect(fL, fM, g6, gC), eG === a1i && (gG.fillStyle = a2U, gG.fillRect(fL, fM, g6, gC)), gG.lineWidth = b0.ue, gG.strokeStyle = a2T, gG.strokeRect(fL, fM, g6, gC),
			function(button) {
				var fL = button.fL,
					fM = button.fM,
					g6 = button.g6,
					gC = button.gC;
				aY.g1.textAlign(gG, 1), aY.g1.textBaseline(gG, 1), gG.font = button.font, gG.fillStyle = a2T, gG.fillText(button.nc, Math.floor(fL + g6 / 2), Math.floor(fM + gC / 2 + .1 * button.fontSize))
			}(button)
	}
	this.g6 = 0, this.gC = 0, this.fM = 0, this.gap = 0, this.cq = function() {
		a1i = -1, a2T = aZ.gH, a2U = "rgba(255,255,255,0.16)", this.nU = new Array(7), this.gC = Math.floor((b7.cv.fw() ? .123 : .093) * aK.fx), this.g6 = Math.floor((b7.cv.fw() ? 3.96 : 4.2) * this.gC), this.gap = Math.floor(.025 * this.g6);
		var a2V = Math.floor(.26 * this.gC),
			a2W = aY.g1.g2(1, a2V);
		this.nU[0] = {
			fL: 0,
			fM: 0,
			g6: Math.floor(.6 * this.g6 - this.gap / 2),
			gC: this.gC,
			nc: "Multiplayer",
			font: a2W,
			a2X: "rgba(22,88,22,0.8)",
			fontSize: a2V
		}, a2V = Math.floor(.18 * this.gC), a2W = aY.g1.g2(1, a2V), this.nU[1] = {
			fL: 0,
			fM: 0,
			g6: this.g6 - this.nU[0].g6 - this.gap,
			gC: this.gC,
			nc: "Single Player",
			font: a2W,
			a2X: "rgba(22,88,88,0.8)",
			fontSize: a2V
		}, this.nU[2] = {
			fL: 0,
			fM: 0,
			g6: this.g6,
			gC: Math.floor(.3 * this.gC),
			nc: "",
			font: this.nU[1].font,
			a2X: "rgba(100,0,0,0.8)",
			fontSize: this.nU[1].fontSize
		}, this.nU[3] = {
			fL: 0,
			fM: 0,
			g6: this.g6,
			gC: this.gC,
			nc: "Back",
			font: this.nU[0].font,
			a2X: "rgba(0,0,0,0.8)",
			fontSize: this.nU[0].fontSize
		}, this.nU[4] = {
			fL: 0,
			fM: 0,
			g6: this.g6,
			gC: Math.floor(.3 * this.gC),
			nc: "The game was updated!",
			font: this.nU[1].font,
			a2X: "rgba(100,0,0,0.8)",
			fontSize: this.nU[1].fontSize
		}, this.nU[5] = {
			fL: 0,
			fM: 0,
			g6: this.nU[0].g6,
			gC: Math.floor(.8 * this.gC),
			nc: "Reload",
			font: this.nU[0].font,
			a2X: "rgba(0,100,0,0.8)",
			fontSize: this.nU[0].fontSize
		}, this.nU[6] = {
			fL: 0,
			fM: 0,
			g6: this.nU[1].g6,
			gC: this.nU[5].gC,
			nc: "Back",
			font: this.nU[0].font,
			a2X: "rgba(0,0,0,0.8)",
			fontSize: this.nU[0].fontSize
		}, this.zX()
	}, this.zX = function() {
		this.fM = Math.floor(.54 * aK.gC), this.nU[0].fL = Math.floor(.5 * aK.g6 - .5 * this.g6), this.nU[1].fL = this.nU[0].fL + this.nU[0].g6 + this.gap, this.nU[2].fL = this.nU[3].fL = this.nU[0].fL, this.nU[4].fL = this.nU[5].fL = this.nU[0]
			.fL, this.nU[6].fL = this.nU[1].fL, this.nU[0].fM = Math.floor(.54 * aK.gC), this.nU[1].fM = this.nU[0].fM, this.nU[2].fM = Math.floor((aK.gC - this.nU[2].gC - this.nU[3].gC - this.gap) / 2), this.nU[3].fM = this.nU[2].fM + this.nU[2]
			.gC + this.gap, this.nU[4].fM = Math.floor((aK.gC - this.nU[4].gC - this.nU[5].gC - this.gap) / 2), this.nU[5].fM = this.nU[6].fM = this.nU[4].fM + this.nU[4].gC + this.gap
	}, this.a2Y = function() {
		a2Z(0), a2Z(1)
	}, this.a2a = function() {
		a2Z(2), a2Z(3)
	}, this.a2b = function() {
		a2Z(4), a2Z(5), a2Z(6)
	}, this.sZ = function(fL, fM, j7) {
		var eG = -1;
		return 0 === x.dZ() ? eG = this.t4(fL, fM, 0, 2) : 3 === x.dZ() ? eG = this.t4(fL, fM, 3, 1) : 5 === x.dZ() && (eG = this.t4(fL, fM, 5, 2)), a1i !== eG && (a1i = eG, j7) && (b3.d1 = !0), -1 !== eG && (q.sy(), !0)
	}, this.t4 = function(fL, fM, a2c, size) {
		for (var eG = a2c; eG < a2c + size; eG++)
			if (fL >= this.nU[eG].fL && fM >= this.nU[eG].fM && fL <= this.nU[eG].fL + this.nU[eG].g6 && fM <= this.nU[eG].fM + this.nU[eG].gC) return eG;
		return -1
	}
}

function a2e() {
	function a2k(uu) {
		return uu < 0 ? 0 : 255 < uu ? 255 : Math.floor(uu)
	}
	this.g6 = 0, this.gC = 0, this.da = !1, this.a2f = 0, this.gap = 0, this.wy = 0, this.a2D = 0, this.a2g = 0, this.a2h = 0, this.a2i = 0, this.colors = null, this.cq = function() {
		this.da = !0, this.a2f = 0, this.resize()
	}, this.resize = function() {
		this.da && (aK.g6 < 1.4 * aK.gC ? this.g6 = Math.floor((b7.cv.fw() ? .94 : .43) * aK.g6) : (this.gC = Math.floor((b7.cv.fw() ? .88 : .43) * aK.gC), this.g6 = Math.floor(1.4 * this.gC)), this.gC = this.g6 / 1.4, this.gap = this.g6 / 32,
			this.a2D = Math.floor(.25 * this.gC), this.a2g = (this.gC - this.a2D - 3 * this.gap) / 2, this.a2h = this.g6 - 3 * this.gap - this.a2g, this.a2i = (this.gC - this.a2D - 4 * this.gap) / 3)
	}, this.a2j = function() {
		this.colors = [
			[0, 0, 0],
			[0, 0, 0]
		];
		var fz = b9.dG.data[103].value.split("");
		if (fz.length < 6)
			for (var hk = 2; 0 <= hk; hk--) this.colors[0][hk] = a2k(256 * Math.random());
		else
			for (var eG = 2; 0 <= eG; eG--) this.colors[0][eG] = a2k(4 * (10 * parseInt(fz[2 * eG]) + parseInt(fz[2 * eG + 1])));
		this.a2l()
	}, this.a2m = function() {
		return [eU(this.colors[0][0], 4), eU(this.colors[0][1], 4), eU(this.colors[0][2], 4)]
	}, this.sc = function(gA, gB, deltaY) {
		var jd = (aK.g6 - this.g6) / 2;
		gB -= (aK.gC - this.gC) / 2 + this.a2D, (gA -= jd) < 0 || gB < 0 || gA >= this.g6 || gB >= this.gC - this.a2D || (jd = Math.floor(3 * gB / (this.gC - this.a2D)), this.colors[this.wy][jd] = a2k(this.colors[this.wy][jd] + (deltaY < 0 ? 1 :
			-1) * Math.max(Math.abs(.05 * deltaY), 1)), b3.d1 = !0)
	}, this.g9 = function(gA, gB) {
		this.a2f = 0;
		var jd = (aK.g6 - this.g6) / 2;
		return gB -= (aK.gC - this.gC) / 2, (gA -= jd) < 0 || gB < 0 || gA >= this.g6 - 1 || gB >= this.gC - 1 || gA > this.g6 - (.4 * this.a2D + 3 * this.gap) && gB < this.a2D ? (this.da = !1, 0 === x.dZ() && y.gD(!0), !(b3.d1 = !0)) : gA < this
			.gap || gB < this.gap + this.a2D || gA >= this.g6 || gB >= this.gC - this.gap || (gA < this.gap + this.a2g ? (gB < this.gap + this.a2D + this.a2g && 0 !== this.wy && (this.wy = 0, b3.d1 = !0), !0) : gA < this.gap + this.a2g || (gA -=
				2 * this.gap + this.a2g, gB < this.gap + this.a2D + this.a2i ? (this.a2f = 1, this.colors[this.wy][0] = a2k(256 * gA / this.a2h), b3.d1 = !0) : gB < 2 * this.gap + this.a2D + this.a2i || (gB < 2 * this.gap + this.a2D + 2 *
					this.a2i ? (this.a2f = 2, this.colors[this.wy][1] = a2k(256 * gA / this.a2h), b3.d1 = !0) : !(gB >= 3 * this.gap + this.a2D + 2 * this.a2i) || (this.a2f = 3, this.colors[this.wy][2] = a2k(256 * gA / this.a2h), b3.d1 = !0))
				))
	}, this.a2l = function() {
		for (var hk = 2; 0 <= hk; hk--) this.colors[0][hk] = a2k(this.colors[0][hk])
	}, this.a2n = function() {
		for (var de, fz = "", eG = 0; eG < 3; eG++)(de = eU(this.colors[0][eG], 4)) < 10 && (fz += "0"), fz += de.toString();
		return fz
	}, this.sZ = function(gA) {
		0 !== this.a2f && (gA -= 2 * this.gap + this.a2g + (aK.g6 - this.g6) / 2, this.colors[this.wy][this.a2f - 1] = a2k(256 * gA / this.a2h), b3.d1 = !0)
	}, this.a2o = function() {
		0 < this.a2f && (this.a2f = 0, this.a2l(), b9.nd.ne(103, this.a2n()), b3.d1 = !0)
	}, this.gF = function() {
		var jd = (aK.g6 - this.g6) / 2,
			je = (aK.gC - this.gC) / 2;
		gG.setTransform(1, 0, 0, 1, jd, je), gG.fillStyle = aZ.kb, gG.fillRect(0, this.a2D, this.g6, this.gC - this.a2D), gG.fillStyle = aZ.km, gG.fillRect(0, 0, this.g6, this.a2D), gG.fillStyle = aZ.gH, gG.lineWidth = b0.ue, gG.strokeStyle = aZ
			.gH, gG.strokeRect(-1, -1, this.g6 + 2, this.gC + 2), gG.fillRect(0, this.a2D, this.g6, b0.ue), gG.font = aY.g1.g2(1, .31 * this.a2D), aY.g1.textBaseline(gG, 1), aY.g1.textAlign(gG, 1), gG.fillText("Choose Your Nation's Color!", Math
				.floor((this.g6 - this.gap - .4 * this.a2D) / 2), Math.floor(.55 * this.a2D)), this.a2p(0), gG.lineWidth = b0.ue, this.a2q(0), this.a2q(1), this.a2q(2), j.vY(Math.floor(jd + this.g6 - .4 * this.a2D - this.gap), Math.floor(je +
				.3 * this.a2D), Math.floor(.4 * this.a2D)), gG.setTransform(1, 0, 0, 1, 0, 0)
	}, this.a2p = function(eG) {
		var gS = this.colors[eG][0],
			tc = this.colors[eG][1],
			eG = this.colors[eG][2];
		gG.fillStyle = "rgb(" + gS + "," + tc + "," + eG + ")", gG.fillRect(this.gap, this.a2D + this.gap, this.a2g, 2 * this.a2g + this.gap), gG.lineWidth = b0.ue, gG.strokeStyle = aZ.gH, gG.strokeRect(this.gap, this.a2D + this.gap, this.a2g,
			2 * this.a2g + this.gap), gG.fillStyle = gS + tc + eG < 306 && tc < 150 ? aZ.gH : aZ.jj, gG.font = aY.g1.g2(1, .32 * this.a2i), aY.g1.textAlign(gG, 1), aY.g1.textBaseline(gG, 1), gG.rotate(-Math.PI / 2), gG.fillText(
			"National Color", Math.floor(-1.5 * this.gap - this.a2D - this.a2g), Math.floor(this.gap + .5 * this.a2g)), gG.rotate(Math.PI / 2)
	}, this.a2q = function(eG) {
		gG.fillStyle = "rgb(" + (0 === eG ? 150 : 2 === eG ? 30 : 0) + "," + (1 === eG ? 130 : 2 === eG ? 30 : 0) + "," + (2 === eG ? 220 : 0) + ")", gG.fillRect(2 * this.gap + this.a2g, this.a2D + this.gap + eG * (this.gap + this.a2i), Math
				.floor(this.colors[this.wy][eG] * this.a2h / 255), this.a2i), gG.strokeStyle = aZ.gH, gG.strokeRect(2 * this.gap + this.a2g, this.a2D + this.gap + eG * (this.gap + this.a2i), this.a2h, this.a2i), gG.fillStyle = aZ.gH, gG.font = aY
			.g1.g2(1, .32 * this.a2i), aY.g1.textBaseline(gG, 1), aY.g1.textAlign(gG, 0), gG.fillText((0 === eG ? "Red: " : 1 === eG ? "Green: " : "Blue: ") + this.colors[0][eG].toString(), 3 * this.gap + this.a2g, Math.floor(this.a2D + this
				.gap + eG * (this.gap + this.a2i) + .53 * this.a2i))
	}
}

function bi() {
	var a2r, a2s, xI, xR, yK, a2t, a2u, a2v, a2w, g5, fontSize, jz, a2x, a2z, a2y = 0;

	function a32() {
		return aN.iy.a33[(a2x + a2y) % aN.iy.a34]
	}

	function a30() {
		a2x++, jz = b3.db, aN.iy.zP(a32(), 4) && (a2z = !0, aN.la.a35(a32()))
	}

	function a36() {
		0 === a2x ? bB.sJ(3249) : (a2x === aN.iy.a34 - 1 && (a2x = -1), a30())
	}

	function a3D(fM, zB, a3C) {
		var jd = Math.floor((aK.g6 - xR) / 2) + a2u,
			jf = jd + Math.floor(a3C * (xR - 2 * a2u));
		gG.lineWidth = zB, gG.beginPath(), gG.moveTo(jd, fM), gG.lineTo(jf, fM), gG.lineTo(Math.floor(jd - a2u + a3C * xR), fM + xI), gG.lineTo(jd - a2u, fM + xI), gG.closePath()
	}
	this.cq = function() {
		x.setState(6), a2r = 0, a2s = 1, a2v = "rgba(0,220,120,0.4)", a2w = "rgba(0,0,0,0.8)", this.resize(), b3.d1 = !0, a2x = 0, a2z = !1, a30()
	}, this.resize = function() {
		xR = Math.floor((b7.cv.fw() ? .5 : .25) * aK.fx), yK = xR + 12, xI = Math.floor(.125 * xR), a2u = 3 * xI, a2t = Math.floor(.225 * xR), fontSize = Math.floor(.3 * xI), g5 = aY.g1.g2(0, fontSize)
	}, this.a31 = function(hb) {
		a2y = hb
	}, this.sE = function(s7) {
		s7 === a32() && (a2z = !1, a36())
	}, this.zR = function(s7) {
		6 !== x.dZ() || a2z || (jz = b3.db, a2z = !0, aN.la.a35(s7))
	}, this.g9 = function(fL, fM) {
		var jd = Math.floor((aK.g6 - yK) / 2),
			je = Math.floor(.5 * (aK.gC - b0.gap - xI - a2t)) + xI + b0.gap;
		return jd < fL && fL < jd + yK && je < fM && fM < je + a2t && (this.a38(), v.sZ(fL, fM, !1), !0)
	}, this.a38 = function() {
		aN.iy.sN(3260), a0.cq(), b3.d1 = !0
	}, this.i8 = function() {
		6 === x.dZ() && (a2z ? b3.db > jz + 12e3 && bB.sJ(3250) : b3.db > jz + 12e3 && a36(), 100 < (a2r += .07 * a2s * (a2r < 16 ? 5 + a2r : 84 < a2r ? 105 - a2r : 17)) ? (a2r = 100, a2s = -1) : a2r < 0 && (a2r = 0, a2s = 1), a2v = "rgba(0," +
			Math.floor(190 - 1.9 * a2r) + "," + Math.floor(120 - 1.2 * a2r) + "," + (.4 + .004 * a2r) + ")", a2w = "rgba(0," + Math.floor(1.9 * a2r) + "," + Math.floor(1.2 * a2r) + "," + (.8 - .004 * a2r) + ")", b3.d1 = !0)
	}, this.gF = function() {
		var fL = Math.floor((aK.g6 - yK) / 2),
			fM = Math.floor(.5 * (aK.gC - b0.gap - xI - a2t));
		! function(title, fM, zB, a3C) {
			gG.fillStyle = a2w, a3D(fM, zB, 1), gG.fill(), gG.fillStyle = a2v, a3D(fM, zB, a3C), gG.fill(), gG.strokeStyle = aZ.gH, a3D(fM, zB, 1), gG.stroke(),
				function(a3F, fM) {
					aY.g1.textAlign(gG, 1), aY.g1.textBaseline(gG, 1), gG.font = g5, gG.fillStyle = aZ.gH, gG.fillText(a3F, Math.floor(.5 * aK.g6), Math.floor(fM + .58 * xI))
				}(title, fM)
		}("Loading", fM, 3, a2r / 100),
		function(fL, fM, g6, gC, nc) {
			gG.fillStyle = aZ.kZ, gG.fillRect(fL, fM, g6, gC), gG.lineWidth = 3, gG.strokeStyle = aZ.gH, gG.strokeRect(fL, fM, g6, gC);
			var ec = Math.floor(.3 * gC);
			aY.g1.textAlign(gG, 1), aY.g1.textBaseline(gG, 1), gG.font = aY.g1.g2(0, ec), gG.fillStyle = aZ.gH, gG.fillText(nc, Math.floor(fL + g6 / 2), Math.floor(fM + gC / 2 + .1 * ec))
		}(fL, fM + xI + b0.gap, yK, a2t, "Back")
	}
}

function bj() {
	var dX;
	this.cq = function() {
		v.cq(), y.cq(), dX = 0, a0.cq()
	}, this.setState = function(a3G) {
		dX = a3G
	}, this.dZ = function() {
		return dX
	}, this.a3H = function() {
		0 === x.dZ() && a0.sM(), this.setState(8), aG.sM(), a8.t7(), b6.da = !1, av.g9(-1e3, -1e3)
	}, this.t7 = function(dE) {
		if (!ap.pC) return !1;
		if (!(b3.db < 400)) {
			if ("Enter" === dE.key || "Escape" === dE.key) {
				if (this.a3I()) return 0 === dX && y.gD(!0), !0;
				if ("Enter" === dE.key) {
					if (0 === dX) return a0.a3J(), !0;
					if (7 === dX) return !0
				}
			}
			return !1
		}
	}, this.a3K = function() {
		b6.resize(), av.resize(), a8.resize()
	}, this.a3I = function() {
		return !!av.o3() || !!a8.t7() || !!b6.da && !(b6.da = !1)
	}, this.dg = function() {
		b3.d1 = !0, 8 === dX ? kA ? aa.t9(!1) : (b2.da ? b2 : j).tA() : 7 === dX ? aG.a3L() : 6 === dX ? w.a38() : 2 === dX ? z.a3M() : 0 !== dX || this.a3I() || b7.cv.setState(11)
	}, this.g9 = function(fL, fM) {
		if (ap.pC && !av.g9(fL, fM) && !(6 === dX && w.g9(fL, fM) || 2 === dX && z.g9(fL, fM) || b6.g9(fL, fM) || au.g9(fL, fM, !0) || a8.g9(fL, fM, !0))) {
			if (q.g9(fL, fM), 0 === dX) a0.g9(fL, fM);
			else if (7 === dX && aG.g9(fL, fM)) return;
			aw.g9(fL, fM)
		}
	}, this.sZ = function(fL, fM) {
		if (!q.zN) {
			if (0 <= a8.t4(fL, fM)) return void q.sy();
			if (a8.sZ(fL, fM)) return void q.sy();
			if (2 === dX && z.sZ(fL, fM)) return void q.sy();
			if (v.sZ(fL, fM, !0)) return
		}
		q.sZ(fL, fM)
	}, this.click = function(fL, fM) {
		q.sz(), a8.a2o() || au.g9(fL, fM, !1) || a8.g9(fL, fM, !1)
	}, this.sc = function(fL, fM, deltaY) {
		a8.va[1].rE.da || (a8.va[2].rE.da ? a8.va[2].rE.sc(fL, fM, deltaY) : 0 === dX && q.sc(fL, deltaY))
	}, this.a3N = function() {
		v.zX(), a8.zX(), 0 === dX ? (y.resize(), q.zX()) : 7 === dX && aG.resize(), b3.d1 = !0
	}, this.gF = function() {
		var fM, gP, gO, fL;
		8 !== dX && 10 !== dX && (gG.imageSmoothingEnabled = !0, this.qJ(), q.gF(), l.gF(), fM = Math.floor(.3 * aK.gC), gP = a1.us("territorial.io"), gO = (gO = 1.75 * aK.gC / gP.width) * gP.width < .98 * aK.g6 ? .98 * aK.g6 / gP.width : gO, gG
			.globalAlpha = .15, fL = Math.floor(.5 * (aK.g6 - gO * gP.width)), fL = Math.floor(fL / gO), fM = Math.floor(fM - .5 * gP.height * gO), fM = Math.floor(fM / gO), gG.setTransform(gO, 0, 0, gO, fL, fM), gG.drawImage(gP, fL, fM), gG
			.setTransform(1, 0, 0, 1, 0, 0), gG.globalAlpha = 1, au.gF(), aw.gF(), a8.gF(), 0 === dX ? a0.gF() : 2 === dX ? z.gF() : 6 === dX ? w.gF() : 7 === dX && aG.gF(), a8.a3P(), b6.gF(), av.gF())
	}, this.qJ = function() {
		var a3R, a3Q;
		if (makeMainMenuTransparent) gG.clearRect(0, 0, aK.g6, aK.gC);
		else ap.pC ? (a3Q = aK.g6 / ap.eB, a3R = aK.gC / ap.eC, gG.setTransform(a3Q = a3R < a3Q ? a3Q : a3R, 0, 0, a3Q, Math.floor((aK.g6 - a3Q * ap.eB) / 2), Math.floor((aK.gC - a3Q * ap.eC) / 2)), gG.drawImage(ap.pE, 0, 0), gG.setTransform(1,
			0, 0, 1, 0, 0), gG.fillStyle = aZ.kZ) : gG.fillStyle = aZ.jj, gG.fillRect(0, 0, aK.g6, aK.gC)
	}
}

function a3S() {
	this.g6 = 0, this.gC = 0, this.a3T = 0, this.da = !1, this.wn = 10, this.ej = .12, this.a2f = !1, this.a3U = !1, this.a3V = !1, this.cq = function() {
		this.da = !0, this.resize(), this.a2f = !1
	}, this.resize = function() {
		this.da && (1.15 * aK.g6 < aK.gC ? this.g6 = Math.floor((b7.cv.fw() ? .94 : .69) * aK.g6) : this.g6 = Math.floor((b7.cv.fw() ? .94 : .69) * aK.gC / 1.15), this.g6 -= this.g6 % this.wn, this.gC = +this.g6, this.a3T = Math.floor(.15 * this
			.g6))
	}, this.g9 = function(gA, gB, dX) {
		var jd = (aK.g6 - this.g6) / 2;
		return gB -= (aK.gC - this.gC - this.a3T) / 2, (gA -= jd) < 0 || gB < 0 || gA >= this.g6 - 1 || gB >= this.gC + this.a3T - 1 || gA >= this.g6 - this.a3T && gB < this.a3T ? (0 === dX && (this.da = !1, 0 === x.dZ() && y.gD(!0), b3.d1 = !0),
			!1) : (gB < this.a3T || (gA = (gA = eU(gA, jd = Math.floor(this.g6 / this.wn)) + this.wn * eU(gB - this.a3T, jd)) < 0 ? 0 : gA >= az.wr ? az.wr - 1 : gA, (0 === dX || 1 === dX && !az.s1[gA] || 2 === dX && az.s1[gA]) && (this
			.a3U = !az.s1[gA], this.a2f = !0, this.a3V = !0, az.s1[gA] = !az.s1[gA], az.x7(), b3.d1 = !0)), !0)
	}, this.sZ = function(gA, gB) {
		this.a2f && this.g9(gA, gB, this.a3U ? 1 : 2)
	}, this.a2o = function() {
		this.a3V && (b7.cv.s0(), this.a3V = !1), this.a3V = !1, this.a2f = !1
	}, this.gF = function() {
		gG.imageSmoothingEnabled = !0;
		for (var jd = (aK.g6 - this.g6) / 2, je = (aK.gC - this.gC - this.a3T) / 2, qS = (gG.setTransform(1, 0, 0, 1, jd, je), gG.fillStyle = aZ.kb, gG.fillRect(0, this.a3T, this.g6, this.gC), gG.fillStyle = aZ.kr, gG.fillRect(0, 0, this.g6, this
					.a3T), gG.fillStyle = aZ.gH, gG.lineWidth = b0.ue, gG.strokeStyle = aZ.gH, gG.strokeRect(-1, -1, this.g6 + 2, this.gC + this.a3T + 2), gG.fillRect(0, this.a3T - b0.ue, this.g6, b0.ue), gG.font = aY.g1.g2(1, .44 * this
				.a3T), aY.g1.textAlign(gG, 1), aY.g1.textBaseline(gG, 1), gG.fillText("Select Your Emojis!", Math.floor((this.g6 - .725 * this.a3T) / 2), Math.floor(.55 * this.a3T)), Math.floor(this.g6 / this.wn)), zoom = (qS - 2 * this.ej *
				qS) / az.g6, eG = az.wr - 1; 0 <= eG; eG--) gG.setTransform(1, 0, 0, 1, Math.floor(jd + eG % this.wn * qS), Math.floor(je + this.a3T + eU(eG, this.wn) * qS)), az.s1[eG] && (gG.fillStyle = aZ.kt, gG.fillRect(0, 0, qS, qS)), gG
			.setTransform(zoom, 0, 0, zoom, Math.floor(jd + eG % this.wn * qS + this.ej * qS), Math.floor(je + this.a3T + eU(eG, this.wn) * qS + this.ej * qS)), gG.drawImage(az.ur[eG], 0, 0);
		j.vY(Math.floor(jd + this.g6 - .725 * this.a3T), Math.floor(je + .275 * this.a3T), Math.floor(.45 * this.a3T)), gG.setTransform(1, 0, 0, 1, 0, 0), gG.imageSmoothingEnabled = !1
	}
}

function bk() {
	var input, color;
	this.da = !1, this.t5 = !1, this.cq = function() {
		color = aZ.kb, (input = document.createElement("INPUT")).setAttribute("type", "text"), input.setAttribute("name", "username"), input.setAttribute("id", "usernameField"), input.setAttribute("autocomplete", "username"), input.value = "",
			input.style.textAlign = "center", input.style.backgroundColor = color, input.style.borderRadius = "0", input.style.color = aZ.gH, input.style.position = "absolute", input.readOnly = !1, input.addEventListener("input", function() {
				a0.a3W()
			}), input.addEventListener("focus", function() {
				y.t5 = !0
			}), input.addEventListener("blur", function() {
				y.t5 = !1
			})
	}, this.resize = function() {
		var fontSize, a2A, vb;
		this.da && (a2A = .3 * (fontSize = .22 * v.gC / aK.nH), vb = b0.ue / aK.nH, input.style.border = vb.toFixed(2) + "px solid " + aZ.gH, input.style.font = aY.g1.g2(1, fontSize), input.style.padding = a2A.toFixed(2) + "px", input.style
			.left = (((aK.g6 - v.g6) / aK.nH - vb) / 2).toFixed(2) + "px", input.style.width = (v.g6 / aK.nH).toFixed(2) + "px", input.style.top = ((v.fM - .52 * v.gC) / aK.nH).toFixed(2) + "px")
	}, this.get = function() {
		return input
	}, this.gD = function(gD) {
		this.da !== gD && ((this.da = gD) ? (this.resize(), document.body.appendChild(input)) : (this.t5 = !1, document.body.removeChild(input)))
	}, this.tC = function(a3X) {
		a3X && color === aZ.kb || !a3X && color === aZ.l4 || (color = a3X ? aZ.kb : aZ.l4, input.style.backgroundColor = color)
	}
}

function c8() {
	var mK, a3a, a3b, a3c;
	this.a3Y = 0, this.a3Z = 0, this.cq = function() {
		var gP, kI;
		7 === x.dZ() && (mK = ae.mK, a3a = 0, a3b = b3.db + 4500, a3c = aN.wF.a3d() ? 2 : 0, x.setState(10), gG.imageSmoothingEnabled = !0, x.qJ(), gP = a1.us("loading"), kI = 1, kI = (b7.cv.fw() ? .396 : .25) * aK.fx / gP.width, gG.setTransform(
			kI, 0, 0, kI, Math.floor((aK.g6 - kI * gP.width) / 2), Math.floor((aK.gC - kI * gP.height) / 2)), gG.drawImage(gP, 0, 0), gG.setTransform(1, 0, 0, 1, 0, 0))
	}, this.j5 = function() {
		0 < a3c && b3.db > a3b && (a3c--, a3b += 4500, 0 === b3.a3e) && 0 === b3.iM() && (0 === a3c && aN.iy.sG < aN.iy.a3f && (aN.iy.sG += aN.iy.a3g), aN.iy.zP(aN.iy.sG, 5))
	}, this.a3h = function() {
		var ej, eG;
		return 10 === x.dZ() && (ej = ae.mK, eG = ae.g0, aN.wF.a3i(mK), mK = null, ae.cq(ej), ae.g0 = eG, !0)
	}, this.a3j = function() {
		10 === x.dZ() && 2 <= ++a3a && (aN.wF.a3i(mK), mK = null)
	}
}

function c5() {
	var a3l, a3m, a3n, a3o, a3p, a3q, a3r, n9, a3t, a3v, a3w, a3x, a40, a41, a42, a43, a44, a3s = 48,
		a3y = ["Joined", "Skipped", "Multiplayer", "Singleplayer"],
		a3z = [0, 0, 0, 0];

	function a49(eG, ur) {
		var eG = a3r[eG].getContext("2d", {
				alpha: !0
			}),
			zoom = (eG.clearRect(0, 0, a3s, a3s), a3s / ur.width),
			dc = a3s / ur.height,
			zoom = dc < zoom ? dc : zoom;
		eG.imageSmoothingEnabled = !0, eG.setTransform(zoom, 0, 0, zoom, Math.floor((a3s - zoom * ur.width) / 2), Math.floor((a3s - zoom * ur.height) / 2)), eG.drawImage(ur, 0, 0), eG.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a4D(iN, gS, a4G, gQ) {
		gQ.beginPath(), gQ.moveTo(iN, iN), gQ.lineTo(iN + Math.cos(a4G) * gS, iN + Math.cos(a4G + 1.5 * Math.PI) * gS), gQ.stroke()
	}

	function a4U() {
		if (7 === x.dZ()) {
			for (var gc, ur, gQ, zoom, dc, hb = -1, eG = n9.length - 1; 0 <= eG; eG--)
				if (null === n9[eG].gP) {
					hb = eG;
					break
				} - 1 !== hb && (null !== (gc = a4K(n9[hb].a4O, n9[hb].a4P)) ? n9[hb].gP = gc : (gc = {
					eB: ap.eB,
					eC: ap.eC,
					pE: ap.pE,
					pA: ap.pA,
					pB: ap.pB,
					pF: ap.pF,
					pc: ap.pc,
					a4L: ap.a4L
				}, ap.d2(n9[hb].a4O, n9[hb].a4P), ap.pD.a4V(), (ur = document.createElement("canvas")).width = 128, ur.height = 128, gQ = ur.getContext("2d", {
					alpha: !1
				}), (zoom = 128 / ap.eB) < (dc = 128 / ap.eC) && (zoom = dc), gQ.imageSmoothingEnabled = !0, gQ.setTransform(zoom, 0, 0, zoom, (128 - zoom * ap.eB) / 2, (128 - zoom * ap.eC) / 2), gQ.drawImage(ap.pE, 0, 0), ap.eB = gc.eB, ap
				.eC = gc.eC, ap.pE = gc.pE, ap.pA = gc.pA, ap.pB = gc.pB, ap.pF = gc.pF, ap.pc = gc.pc, ap.a4L = gc.a4L, n9[hb].gP = ur), b3.d1 = !0)
		}
	}

	function a4K(a4O, a4P) {
		for (var eG = n9.length - 1; 0 <= eG; eG--)
			if (null !== n9[eG].gP && n9[eG].a4O === a4O && n9[eG].a4P === a4P) return n9[eG].gP;
		return null
	}
	this.cq = function() {
		var eG;
		for (a44 = 0, a3v = -1, x.setState(7), n9 = [], this.resize(), a3r = new Array(13), eG = a3r.length; 0 <= eG; eG--) a3r[eG] = document.createElement("canvas"), a3r[eG].width = a3s, a3r[eG].height = a3s;
		for (eG = 0; eG < 7; eG++) ! function(wN) {
			var a4B, gQ = a3r[wN - 2].getContext("2d", {
					alpha: !0
				}),
				a4A = 1.5 * Math.PI,
				iN = Math.floor(.5 * a3s),
				gS = Math.floor(.48 * a3s);
			gQ.lineWidth = 2, gQ.strokeStyle = aZ.gH, gQ.clearRect(0, 0, a3s, a3s);
			for (var eG = 0; eG < wN; eG++) a4B = a4A + 2 * Math.PI / wN,
				function(eG, iN, gS, a4A, a4B, gQ) {
					gQ.fillStyle = b4.a4F[eG], gQ.beginPath(), gQ.arc(iN, iN, gS, a4A, a4B), gQ.lineTo(iN, iN), gQ.fill()
				}(eG + 1, iN, gS, a4A, a4B, gQ), 0 !== eG && a4D(iN, gS, a4A, gQ), a4A = a4B;
			a4D(iN, gS, 1.5 * Math.PI, gQ),
				function(iN, gS, gQ) {
					gQ.beginPath(), gQ.arc(iN, iN, gS, 0, 2 * Math.PI), gQ.stroke()
				}(iN, gS, gQ)
		}(eG + 2);
		a49(7, a1.get(4)), a49(8, az.ur[27]), a49(9, az.ur[46]), a49(10, az.ur[36]), a49(11, a1.get(19)), a49(12, a1.get(20)), b3.d1 = !0
	}, this.a3L = function() {
		this.sM(), aN.iy.sN(3240), a0.cq(), b3.d1 = !0
	}, this.sM = function() {
		n9 = [], a3r = [], b8.a46.a47()
	}, this.wm = function() {
		return a3x
	}, this.resize = function() {
		var a4H, p1, yZ, a4I;
		for (a3n = [0, 0], a3t = [0, 0, 0, 0], a43 = b7.cv.fw() ? (a3w = Math.floor(.8 * .4 * aK.fx), a3x = Math.floor(.56 * a3w), a3t[0] = b0.gap, aK.g6 < aK.gC ? (a3t[1] = a3x + 2 * b0.gap, a3t[2] = aK.g6 - 3 * a3t[0], a3t[3] = aw.gE() - 3 * b0
				.gap - a3x, a41 = Math.floor(.95 * a3x), a42 = Math.floor((aK.g6 - a3w - b0.gap) / 2), Math.floor(b0.gap + a3x / 2)) : (a3t[1] = b0.gap, a3t[2] = aK.g6 - 3 * b0.gap - a3w, a3t[3] = aw.gE() - 2 * b0.gap, a41 = Math.floor(.8 *
				a3w), a3t[3] - a3x < a3w && (a41 = Math.floor(.8 * (a3t[3] - a3x)), a41 = vz(a3x, a41)), a42 = Math.floor(aK.g6 - a3w / 2 - b0.gap), vz(a43 = Math.floor(b0.gap + a3x + (a3t[3] - a3x) / 2), Math.floor(a3x + 2 * b0.gap +
				a41 / 2)))) : (a3w = Math.floor(.2016 * aK.fx), a3x = Math.floor(.56 * a3w), a3t[2] = Math.floor(.5 * aK.g6), a3t[3] = Math.floor(.5 * aK.gC), a3t[1] = Math.floor(.45 * (aK.gC - a3t[3])), a3t[0] = Math.floor((aK.g6 - a3t[2]) / 2),
				a41 = Math.floor(.75 * a3x), a42 = Math.floor(aK.g6 / 2), Math.floor(a3t[1] + a3t[3] + (aK.gC - a3t[3] - a3t[1]) / 2)), a40 = aY.g1.g2(1, .65 * a3x / 4), a4H = p1 = 1; a4H * p1 < n9.length;) a3t[3] / (p1 + 1) < a3t[2] / (a4H +
			1) ? a4H++ : p1++;
		yZ = (a3t[2] - (a4H - 1) * b0.gap) / a4H, a4I = (a3t[3] - (p1 - 1) * b0.gap) / p1, a3l = yZ < a4I ? yZ : a4I, a3m = Math.floor(a3l), a3q = aY.g1.g2(1, .5 * a3l / 5), a3n[0] = a4H, a3n[1] = p1, a3o = a3t[0] + Math.floor((a3t[2] - a3n[0] *
			a3l - (a3n[0] - 1) * b0.gap) / 2), a3p = a3t[1] + Math.floor((a3t[3] - a3n[1] * a3l - (a3n[1] - 1) * b0.gap) / 2)
	}, this.ne = function(a4J, ej) {
		var eG, dc, gP, ec = n9.length;
		for (a3z = a4J, eG = 0; eG < ej.length; eG++) gP = a4K(ej[eG].pc, ej[eG].a4L), n9.push({
			a4M: ej[eG].id,
			uN: ej[eG].uN,
			uO: ej[eG].a4N,
			a4O: ej[eG].pc,
			a4P: ej[eG].a4L,
			joined: ej[eG].a4Q,
			wj: ej[eG].a3C,
			a4R: ej[eG].a4R,
			gP: gP,
			a4S: ej[eG].a4S,
			re: ej[eG].re
		});
		for (eG = ec - 1; 0 <= eG; eG--) n9.shift();
		if (-1 !== a3v)
			for (dc = a3v, a3v = -1, eG = n9.length - 1; 0 <= eG; eG--)
				if (n9[eG].a4M === dc) {
					a3v = dc;
					break
				}(n9.length > a44 || n9.length < a44) && (a44 = n9.length, this.resize()), this.a4T(), b3.d1 = !0
	}, this.a4T = function() {
		for (var eG = n9.length - 1; 0 <= eG; eG--) null === n9[eG].gP && setTimeout(a4U, 0)
	}, this.g9 = function(fL, fM) {
		return 4 * ((fL - a42) * (fL - a42) + (fM - a43) * (fM - a43)) <= a41 * a41 ? (this.a3L(), v.sZ(fL, fM, !1), !0) : function(fL, fM) {
			var hb, hk, jd, je;
			if (0 !== n9.length) {
				var eG = 0;
				for (je = a3p, hk = 0; hk < a3n[1]; hk++) {
					for (jd = a3o, hb = 0; hb < a3n[0]; hb++) {
						if (jd < fL && fL < jd + a3l && je < fM && fM < je + a3l) return !!aN.a4X.a4Y(n9[eG].a4M) && (a3v = n9[eG].a4M !== a3v ? n9[eG].a4M : -1, b3.d1 = !0);
						if (++eG >= n9.length) return !1;
						jd += a3l + b0.gap
					}
					je += a3l + b0.gap
				}
			}
			return !1
		}(fL, fM)
	}, this.gF = function() {
		var hb, hk, fL, gS, zoom, eG = 0,
			fM = a3p;
		if (gG.imageSmoothingEnabled = !0, gG.lineWidth = 3, gS = Math.floor(.5 * a41), gG.fillStyle = aZ.kZ, gG.beginPath(), gG.arc(a42, a43, gS, 0, 2 * Math.PI), gG.fill(), gG.strokeStyle = aZ.gH, gG.beginPath(), gG.arc(a42, a43, gS, 0, 2 *
				Math.PI), gG.stroke(), gS = a1.get(0).height, zoom = .6 * a41 / gS, gG.setTransform(zoom, 0, 0, zoom, Math.floor(a42 - .56 * zoom * a1.get(0).width), Math.floor(a43 - .5 * zoom * gS)), gG.drawImage(a1.get(0), 0, 0), gG
			.setTransform(1, 0, 0, 1, 0, 0),
			function() {
				gG.fillStyle = aZ.kZ, gG.fillRect(aK.g6 - a3w - b0.gap, b0.gap, a3w, a3x), 0 <= a3v ? (gG.fillStyle = aZ.kt, gG.fillRect(aK.g6 - a3w - b0.gap, b0.gap, a3w, Math.floor(.25 * a3x))) : (gG.fillStyle = aZ.lI, gG.fillRect(aK.g6 - a3w -
					b0.gap, b0.gap + Math.floor(.25 * a3x), a3w, Math.floor(.25 * a3x)));
				gG.strokeStyle = aZ.gH, gG.strokeRect(aK.g6 - a3w - b0.gap, b0.gap, a3w, a3x), gG.fillStyle = aZ.gH, gG.font = a40, aY.g1.textBaseline(gG, 1);
				for (var fM, a2A = Math.floor(.04 * a3w), vb = Math.floor(.08 * a3x), eG = 3; 0 <= eG; eG--) fM = Math.floor(b0.gap + (eG + 1) * (a3x + 2 * vb) / 5 - vb), aY.g1.textAlign(gG, 0), gG.fillText(a3y[eG], aK.g6 - a3w - b0.gap + a2A,
					fM), aY.g1.textAlign(gG, 2), gG.fillText(aY.jl.jm(a3z[eG]), aK.g6 - b0.gap - a2A, fM)
			}(), 0 !== n9.length)
			for (hk = 0; hk < a3n[1]; hk++) {
				for (fL = a3o, hb = 0; hb < a3n[0]; hb++) {
					if (! function(eG, fL, fM) {
							var zoom, hk, a4c, a4e, a4f;
							null === n9[eG].gP ? (gG.fillStyle = aZ.kZ, gG.fillRect(fL, fM, a3m, a3m)) : (zoom = a3m / 128, gG.setTransform(zoom, 0, 0, zoom, fL, fM), gG.drawImage(n9[eG].gP, 0, 0), gG.setTransform(1, 0, 0, 1, 0, 0));
							a3v === n9[eG].a4M ? (function(fL, fM) {
								var qS = Math.floor(.2 * a3m),
									qT = Math.floor(.3 * qS);
								gG.fillStyle = aZ.kw, gG.fillRect(fL + a3m - qS, fM, qS, qS), gG.fillStyle = aZ.jj, gG.fillRect(fL + a3m - qS, fM, 2, qS), gG.fillRect(fL + a3m - qS, fM + qS - 2, qS, 2), j.vY(fL + a3m - qS + qT, fM + qT,
									qS - 2 * qT), gG.setTransform(1, 0, 0, 1, 0, 0)
							}(fL, fM), gG.lineWidth = 3, gG.fillStyle = aZ.kw) : gG.fillStyle = aZ.kX;
							if (a4e = Math.floor(a3l / 4), gG.fillRect(fL, fM, a4e, a4e), a4f = Math.floor(fM + .8 * a3l), gG.fillRect(fL, a4f, a3m, Math.floor(a3l / 5)), function(eG, fL, fM) {
									var zoom;
									n9[eG].uO && (eG = a1.get(4), zoom = .5 * a3l / eG.width, gG.setTransform(zoom, 0, 0, zoom, Math.floor(fL + (a3l - zoom * eG.width) / 2), Math.floor(fM + (a3l - zoom * eG.height) / 2)), gG.globalAlpha = .6, gG
										.drawImage(eG, 0, 0), gG.globalAlpha = 1, gG.setTransform(1, 0, 0, 1, 0, 0))
								}(eG, fL, fM), n9[eG].a4S) {
								for (hk = a4c = 0; hk < n9[eG].a4S; hk++) a4c = Math.max(a4c, n.measureText(n9[eG].re[hk], a3q));
								a4c += .05 * a3l, hk = 5 === n9[eG].a4S, a4e = hk ? fM + a4e : Math.max(fM + .8 * a3l - .11 * n9[eG].a4S * a3l, fM + a4e), a4f = hk ? a4f : Math.min(a4e + .11 * n9[eG].a4S * a3l + .05 * a3l, a4f), gG.fillRect(fL,
									a4e, a4c, a4f - a4e)
							}
							for (gG.font = a3q, aY.g1.textBaseline(gG, 1), aY.g1.textAlign(gG, 0), gG.fillStyle = aZ.lD, gG.fillText(n9[eG].joined.toString(), Math.floor(fL + .22 * a3l), Math.floor(fM + .9 * a3l)), gG.fillStyle = aZ.gH, hk =
								0; hk < n9[eG].a4S; hk++) gG.fillText(n9[eG].re[n9[eG].a4S - hk - 1], Math.floor(fL + .03 * a3l), Math.floor(fM + .77 * a3l - .11 * hk * a3l));
							aY.g1.textAlign(gG, 2), gG.fillStyle = aZ.l0, gG.fillText(n9[eG].wj.toString(), Math.floor(fL + .81 * a3l), Math.floor(fM + .9 * a3l)), gG.strokeStyle = a3v === n9[eG].a4M ? aZ.ku : aZ.kf, gG.strokeRect(fL, fM, a3m,
								a3m), a4f = Math.floor(.16 * a3l), zoom = a4f / a3s, gG.setTransform(zoom, 0, 0, zoom, Math.floor(fL + .33 * a4f), Math.floor(fM + .33 * a4f)), a3r.length > n9[eG].uN && gG.drawImage(a3r[n9[eG].uN], 0, 0);
							gG.setTransform(zoom, 0, 0, zoom, Math.floor(fL + .15 * a4f), Math.floor(fM + a3l - 1.08 * a4f)), gG.drawImage(a3r[11], 0, 0), gG.setTransform(zoom, 0, 0, zoom, Math.floor(fL + a3l - 1.05 * a4f), Math.floor(fM + a3l -
								1.15 * a4f)), gG.drawImage(a3r[12], 0, 0), gG.setTransform(1, 0, 0, 1, 0, 0)
						}(eG, Math.floor(fL), Math.floor(fM)), ++eG >= n9.length) return;
					fL += a3l + b0.gap
				}
				fM += a3l + b0.gap
			}
	}
}

function bl() {
	var a4i = [0, 0, 0, 0];

	function a2C(fL, fM, gJ, a50) {
		gG.fillStyle = aZ.gH;
		var qS = vz(2, Math.floor((a50 ? .5 : .35) * gJ)),
			xC = (qS -= qS % 2, vz(2, Math.floor(.1 * gJ))),
			gJ = (xC -= xC % 2, Math.floor((gJ - qS) / 2)),
			jf = Math.floor(gJ + (qS - xC) / 2);
		gG.fillRect(fL + gJ, fM + jf, qS, xC), a50 && gG.fillRect(fL + jf, fM + gJ, xC, qS)
	}

	function a3B(fL, fM, g6, gC, uu, fu, nc, hV, wN) {
		gG.fillStyle = uu, gG.fillRect(fL, fM, g6, gC), 0 <= hV && function(fL, fM, g6, gC, hV) {
			gG.fillStyle = "rgba(" + 22 * hV + "," + (110 - 22 * hV) + ",0,0.75)", gG.fillRect(fL, fM, (1 + hV) * g6 / 6, gC)
		}(fL, fM, g6, gC, hV), 0 < wN && function(fL, fM, g6, gC, wN) {
			gG.fillStyle = "rgba(255,255,255,0.3)", gG.fillRect(fL, fM, wN * g6 / eg, gC)
		}(fL, fM, g6, gC, wN), gG.strokeStyle = aZ.gH, gG.strokeRect(fL, fM, g6, gC), 0 !== fu && (gG.fillStyle = aZ.gH, gG.font = aY.g1.g2(1, fu * gC), gG.fillText(nc, Math.floor(fL + g6 / 2), Math.floor(fM + .52 * gC)))
	}
	this.iq = [{
		el: 0,
		wN: 512
	}], this.cq = function() {
		aH.da = !1, x.setState(2), this.resize(), b3.d1 = !0
	}, this.sM = function() {}, this.resize = function() {
		a4i[2] = Math.floor((b7.cv.fw() ? .49 : .4) * aK.fx), a4i[1] = Math.floor((aK.gC - a4i[2] / 6 - this.iq.length * (b0.gap + a4i[2] / 10)) / 2), a4i[0] = Math.floor((aK.g6 - a4i[2]) / 2), aH.da && aH.resize()
	}, this.a4j = function(uN) {
		var eG;
		if (6 < uN) this.iq = [{
			el: 0,
			wN: 512
		}];
		else {
			for (this.iq = [], eG = 0; eG < uN + 2; eG++) this.iq.push({
				el: 0,
				wN: 0
			});
			this.a4k()
		}
	}, this.a4l = function(a4m, a4n) {
		for (var ec = a4m.length, eG = 0; eG < ec; eG++) this.iq[eG].el = a4m[eG], this.iq[eG].wN = a4n[eG]
	}, this.a4o = function(tc) {
		var eG, ec;
		if (1 === tc.qW.length)
			for (ec = this.iq.length, tc.a4m = new Array(ec), tc.a4n = new Array(ec), eG = 0; eG < ec; eG++) tc.a4m[eG] = this.iq[eG].el, tc.a4n[eG] = this.iq[eG].wN
	}, this.a3M = function() {
		b3.d1 = !0, aH.da ? aH.da = !1 : (this.sM(), a0.cq())
	}, this.uR = function() {
		var eG, wN;
		if (aU.ij) return aU.ik.a4p;
		for (wN = 0, eG = this.iq.length - 1; 0 <= eG; eG--) wN += this.iq[eG].wN;
		return wN
	}, this.sZ = function(fL, fM) {
		return !(!aH.da || !aH.sZ(fL, fM)) || -1 !== this.t4(fL, fM)
	}, this.a4q = function() {
		aN.iy.sG = 0, aN.iy.zP(0, 3) && aN.la.a4r(0)
	}, this.a4s = function() {
		var hb;
		this.a4q(), x.a3H(), aU.ij ? aU.a4t() : (hb = (hb = this.iq.length - 2) < 0 ? 7 : hb, uK(Math.floor(16384 * Math.random()), 0, [{
			name: b9.dG.data[100].value,
			a4u: a8.va[2].rE.a2m(),
			a4v: 0
		}], hb, !1, !1))
	}, this.g9 = function(fL, fM) {
		if (b6.da || a8.va[1].rE.da || a8.va[2].rE.da) return !1;
		if (aH.da && !aU.ij) return aH.g9(fL, fM);
		var eG, hb, max, qS, fM = this.t4(fL, fM);
		if (-1 === fM) return !1;
		if (0 === fM) this.a3M();
		else if (1 === fM) aU.ij ? (aU.sy(), b3.d1 = !0) : aH.show();
		else if (100 === fM) aT.a4w();
		else if (2 === fM) this.sM(), this.a4s();
		else {
			if (aU.ij) return !1;
			if (27 === fM) this.iq.length < 8 && (this.iq.push({
				el: 0,
				wN: eg
			}), this.a4k(), this.resize(), b3.d1 = !0);
			else if (eG = Math.floor((fM - 3) / 3), fM % 3 == 0) 1 < this.iq.length && (this.iq.splice(eG, 1), this.resize(), b3.d1 = !0);
			else if (qS = (a4i[2] - a4i[2] / 10 - 2 * b0.gap) / 2, fM % 3 == 1) 0 === eG && 1 === this.iq[eG].wN || (fL < a4i[0] + a4i[2] - 1.5 * qS - b0.gap ? this.iq[eG].el-- : this.iq[eG].el++, this.iq[eG].el < 0 ? this.iq[eG].el = 5 : 5 <
				this.iq[eG].el && (this.iq[eG].el = 0), b3.d1 = !0);
			else {
				for (b3.d1 = !0, fM = (fL - (a4i[0] + a4i[2] - qS)) / qS - .5, fM *= fM < 0 ? -fM : fM, fM = 0 === (fM = Math.floor(fM * eg)) ? 1 : fM, max = eg, hb = this.iq.length - 1; 0 <= hb; hb--) eG !== hb && (max -= this.iq[hb].wN);
				if (fM < 0) {
					if (1 === this.iq[eG].wN) return this.iq[eG].wN = max, !0
				} else if (this.iq[eG].wN === max) return this.iq[eG].wN = 1, !0;
				this.iq[eG].wN += fM, this.iq[eG].wN < 1 ? this.iq[eG].wN = 1 : this.iq[eG].wN > max && (this.iq[eG].wN = max)
			}
		}
		return !0
	}, this.a4k = function() {
		for (var wN = Math.floor(eg / this.iq.length), a4x = eg % this.iq.length, eG = this.iq.length - 1; 0 <= eG; eG--) this.iq[eG].wN = wN;
		this.iq[0].wN += a4x
	}, this.t4 = function(fL, fM) {
		var qS = (a4i[2] - 3 * b0.gap) / 4,
			xC = a4i[2] / 6;
		if (fL < a4i[0] || fM < a4i[1] || a4i[0] + a4i[2] <= fL) return -1;
		if (fM < a4i[1] + xC) return fL < a4i[0] + qS ? 0 : fL < a4i[0] + qS + b0.gap ? -1 : fL < a4i[0] + 2 * qS + b0.gap ? 100 : fL < a4i[0] + 2 * (qS + b0.gap) ? -1 : fL < a4i[0] + 3 * qS + 2 * b0.gap ? 1 : fL < a4i[0] + 3 * (qS + b0.gap) ? -
			1 : 2;
		for (var je, a4y = a4i[2] / 10, qS = (a4i[2] - a4y - 2 * b0.gap) / 2, eG = 0; eG < this.iq.length; eG++) {
			if (fM < (je = a4i[1] + xC + b0.gap + eG * (a4y + b0.gap))) return -1;
			if (!(je + a4y < fM)) return fL < a4i[0] + a4y ? 3 + 3 * eG : fL < a4i[0] + a4y + b0.gap ? -1 : fL < a4i[0] + a4i[2] - qS - b0.gap ? 4 + 3 * eG : fL < a4i[0] + a4i[2] - qS ? -1 : 5 + 3 * eG
		}
		return !(this.iq.length < 8) || fM < (je = a4i[1] + xC + b0.gap + this.iq.length * (a4y + b0.gap)) || je + a4y < fM || a4i[0] + a4y < fL ? -1 : 27
	}, this.gF = function() {
		gG.lineWidth = b0.ue, aY.g1.textAlign(gG, 1), aY.g1.textBaseline(gG, 1);
		var qS = (a4i[2] - 3 * b0.gap) / 4,
			xC = a4i[2] / 6;
		if (a3B(a4i[0], a4i[1], qS, xC, "rgba(128,0,0,0.75)", .34, "Back", -1, -1), a3B(a4i[0] + qS + b0.gap, a4i[1], qS, xC, "rgba(128,0,128,0.75)", .31, "Custom", -1, -1), a3B(a4i[0] + 2 * (qS + b0.gap), a4i[1], qS, xC, "rgba(" + (aU.ij ? 128 :
				0) + ",128,128,0.75)", .34, aU.ij ? "Reset" : "Maps", -1, -1), a3B(a4i[0] + a4i[2] - qS, a4i[1], qS, xC, "rgba(0,128,0,0.75)", .34, "Start", -1, -1), !aU.ij) {
			for (var je, a4y = a4i[2] / 10, qS = (a4i[2] - a4y - 2 * b0.gap) / 2, eG = 0; eG < this.iq.length; eG++) je = a4i[1] + xC + b0.gap + eG * (a4y + b0.gap), a3B(a4i[0], je, a4y, a4y, 1 < this.iq.length ? "rgba(128,0,0,0.75)" :
				"rgba(90,90,90,0.75)", 0, null, -1), 1 < this.iq.length && a2C(a4i[0], je, a4y, !1), a3B(a4i[0] + a4y + b0.gap, je, qS, a4y, aZ.kb, .4, this.a4z(eG), this.iq[eG].el, -1), a3B(a4i[0] + a4i[2] - qS, je, qS, a4y, aZ.kb, .4, this
				.wE(eG), -1, this.iq[eG].wN);
			this.iq.length < 8 && (je = a4i[1] + xC + b0.gap + this.iq.length * (a4y + b0.gap), a3B(a4i[0], je, a4y, a4y, "rgba(0,128,20,0.75)", 0, null, -1, -1), a2C(a4i[0], je, a4y, !0)), aH.da && aH.gF()
		}
	}, this.a4z = function(eG) {
		return 0 === eG && 1 === this.iq[eG].wN ? "You" : b.ic[this.iq[eG].el]
	}, this.wE = function(eG) {
		return 1 === this.iq[eG].wN ? "1 Player" : this.iq[eG].wN + " Players"
	}
}

function cz() {
	this.ec = 0, this.g6 = 0, this.va = null, this.cq = function() {
		this.va = [], this.va.push({
			fL: 0,
			fM: 0,
			up: b7.cv.fw(),
			rE: null
		}), this.va.push({
			fL: 0,
			fM: 0,
			up: !1,
			rE: new a3S
		}), this.va.push({
			fL: 0,
			fM: 0,
			up: !1,
			rE: new a2e
		}), this.va[2].rE.a2j(), this.ec = this.va.length, this.g6 = 0
	}, this.zX = function() {
		this.g6 = Math.floor((b7.cv.fw() ? .063 : .04) * aK.fx), this.g6 += 4 - this.g6 % 4, this.va[0].fL = b0.gap, this.va[0].fM = aK.gC - this.g6 - b0.gap;
		for (var eG = 1; eG < this.ec; eG++) this.va[eG].fL = this.va[eG - 1].fL + Math.floor(b7.cv.fw() ? 1.5 * b0.gap : 3.7 * b0.gap) + this.g6, this.va[eG].fM = this.va[0].fM
	}, this.t4 = function(gA, gB) {
		if (a1.g4())
			for (var eG = this.ec - 1; 0 <= eG; eG--)
				if (gA >= this.va[eG].fL && gB >= this.va[eG].fM && gA < this.va[eG].fL + this.g6 && gB < this.va[eG].fM + this.g6) return eG;
		return -1
	}, this.a53 = function() {
		for (var eG = 2; 1 <= eG; eG--)
			if (this.va[eG].rE.da) return !0;
		return !1
	}, this.resize = function() {
		for (var eG = 2; 1 <= eG; eG--) this.va[eG].rE.resize()
	}, this.t7 = function() {
		return this.va[1].rE.da ? (this.va[1].rE.g9(-5e3, -5e3, 0), !0) : !!this.va[2].rE.da && (this.va[2].rE.g9(-5e3, -5e3), !0)
	}, this.g9 = function(gA, gB, a2L) {
		if (a2L) {
			if (this.va[1].rE.da) return this.va[1].rE.g9(gA, gB, 0), !0;
			if (this.va[2].rE.da) return this.va[2].rE.g9(gA, gB), !0
		}
		gA = this.t4(gA, gB);
		if (a2L) {
			if (0 === gA) return this.va[gA].up = !this.va[gA].up, b9.dG.dH(2, this.va[gA].up ? 1 : 0), aK.oc(0), !0;
			if (1 <= gA && gA < 3) return this.va[gA].rE.cq(), y.gD(!1), b3.d1 = !0
		}
		return !1
	}, this.sZ = function(gA, gB) {
		return this.va[1].rE.da ? (this.va[1].rE.sZ(gA, gB), !0) : !!this.va[2].rE.da && (this.va[2].rE.sZ(gA), !0)
	}, this.a2o = function() {
		for (var eG = 2; 1 <= eG; eG--)
			if (this.va[eG].rE.da) return this.va[eG].rE.a2o(), !0;
		return !1
	}, this.gF = function() {
		if (a1.g4()) {
			gG.imageSmoothingEnabled = !0;
			for (var eG = this.ec - 1; 0 <= eG; eG--) gG.fillStyle = this.va[eG].up ? aZ.kv : aZ.kb, gG.fillRect(this.va[eG].fL, this.va[eG].fM, this.g6, this.g6), 0 === eG ? this.a54(eG, a1.get(15)) : 1 === eG ? this.a55() : 2 === eG && this
				.a56(), gG.setTransform(1, 0, 0, 1, 0, 0), gG.lineWidth = b0.ue, gG.strokeStyle = aZ.gH, gG.strokeRect(this.va[eG].fL, this.va[eG].fM, this.g6, this.g6);
			gG.imageSmoothingEnabled = !1
		}
	}, this.a54 = function(eG, ur) {
		var gap = .08 * this.g6,
			zoom = (this.g6 - 2 * gap) / ur.width;
		gG.setTransform(zoom, 0, 0, zoom, this.va[eG].fL + gap, this.va[eG].fM + (this.g6 - zoom * ur.height) / 2), gG.drawImage(ur, 0, 0)
	}, this.a55 = function() {
		var gap = .06 * this.g6,
			zoom = (this.g6 - 2 * gap) / az.g6;
		gG.setTransform(zoom, 0, 0, zoom, this.va[1].fL + gap, this.va[1].fM + gap), gG.drawImage(az.ur[4], 0, 0)
	}, this.a56 = function() {
		gG.setTransform(1, 0, 0, 1, this.va[2].fL, this.va[2].fM);
		for (var el = this.g6 / 4, fL = 3; 0 <= fL; fL--)
			for (var fM = 3; 0 <= fM; fM--) {
				var gS = Math.floor(367 * (fL + 1) * (fM + 1) % 256),
					tc = Math.floor(687 * (fL + 1) * (fM + 1) % 256),
					hk = Math.floor(651 * (fL + 1) * (fM + 1) % 256);
				gG.fillStyle = "rgb(" + gS + "," + tc + "," + hk + ")", gG.fillRect(fL * el, fM * el, el, el)
			}
	}, this.a3P = function() {
		for (var eG = 2; 1 <= eG; eG--)
			if (this.va[eG].rE.da) return void this.va[eG].rE.gF()
	}
}

function bm() {
	var a57;
	this.a58 = "", this.a59 = -7e3, this.cq = function(a5A) {
		b7.df < 5 || (a57 && b3.db > a57 + 144e5 ? b7.oV.setState(14) : a57 = b3.db), x.setState(0), v.zX(), y.gD(!0), l.cq(), a8.zX(), a5A && at.dK.show() ? setTimeout(function() {
			0 === x.dZ() && b7.cv.setState(12)
		}, 15e3) : b7.cv.setState(12), y.get().value = b9.dG.data[100].value
	}, this.sM = function() {
		b7.cv.setState(13), y.gD(!1)
	}, this.a3W = function() {
		b9.dG.dH(100, ad.oi.om(y.get().value))
	}, this.g9 = function(fL, fM) {
		var gap, je, qS;
		1 === v.t4(fL, fM, 1, 1) ? (b7.cv.setState(10), a1.g4() || a1.a5C(), this.sM(), z.cq()) : 0 === v.t4(fL, fM, 0, 1) ? this.a3J() : (qS = Math.floor((b7.cv.fw() ? .145 : .09) * aK.fx), gap = Math.floor(.065 * (b7.cv.fw() ? .53 : .36) * aK
				.fx), gap = aK.g6 - qS - gap, je = b0.gap, qS = Math.floor(.35 * qS),
			(gap <= fL && fM < je + qS && (ar.ob(1), true)) || (fL >= gap - qS / 0.7 && fM < je + qS && WindowManager.openWindow("settings"))
		)
	}, this.a3J = function() {
		b7.cv.setState(10), w.a31(b9.dG.data[10].value), a1.g4() || a1.a5C(), this.sM(), aU.sy(), w.cq()
	}, this.a5E = function() {
		return !a8.a53() && !b6.da && !av.da
	}, this.gF = function() {
		this.a5E() && (gG.imageSmoothingEnabled = !0, iN = a1.us("territorial.io"), kI = 1.1 * v.g6 / iN.width, gG.setTransform(kI, 0, 0, kI, Math.floor((aK.g6 - kI * iN.width) / 2), v.fM - kI * iN.height - .72 * v.gC), gG.drawImage(iN, 0, 0), gG
			.setTransform(1, 0, 0, 1, 0, 0), v.a2Y());
		var g6, gS, tc, hk, fz, fontSize, kI = Math.floor((b7.cv.fw() ? .145 : .09) * aK.fx),
			iN = Math.floor(.065 * (b7.cv.fw() ? .53 : .36) * aK.fx),
			jd = aK.g6 - kI - iN,
			je = b0.gap,
			xC = Math.floor(.35 * kI);
		jd = jd, je = je, g6 = kI, xC = xC, tc = gS = 180, hk = 0, fz = aV.nc[80], fontSize = .65 * xC,
			gG.imageSmoothingEnabled = true,
			gG.drawImage(settingsGearIcon, jd - g6 / 2, je, xC, xC),
			gG.imageSmoothingEnabled = false,
			(settings.displayWinCounter && (gG.font = aY.g1.g2(1, Math.floor(xC * 0.4)), gG.fillText("Win count: " + wins_counter, Math.floor(jd + g6 / 2), Math.floor((je + xC / 2) * 2)))),
			gG.font = aY.g1.g2(1, fontSize), gG.fillStyle = "rgba(" + gS + "," + tc + "," + hk + ",0.6)", gG.fillRect(jd, je, g6, xC), gG.fillStyle = aZ.gH, gG.fillRect(jd, je, g6, b0.ue), gG.fillRect(jd, je + xC - b0.ue, g6, b0.ue), gG.fillRect(
				jd, je, b0.ue, xC), gG.fillRect(jd + g6 - b0.ue, je, b0.ue, xC), gG.fillText(fz, Math.floor(jd + g6 / 2), Math.floor(je + xC / 2 + .1 * fontSize))
	}
}

function bn() {
	var a5G, gP, fv, a5H;

	function a5L(g0, name, a5M, fz) {
		fv[g0] = name, gP[g0] = new Image, gP[g0].onload = function() {
			0 < a5M && ! function(g0, a5M) {
				var fL, fM, eG, iN = document.createElement("canvas"),
					g6 = gP[g0].width,
					gC = gP[g0].height,
					gQ = (iN.width = g6, iN.height = gC, iN.getContext("2d", {
						alpha: !0
					})),
					gM = (gQ.drawImage(gP[g0], 0, 0), gQ.getImageData(0, 0, g6, gC)),
					pI = gM.data;
				if (a5M < 3) {
					var a5P = 2 === a5M ? 160 : 600;
					for (fL = g6 - 1; 0 <= fL; fL--)
						for (fM = gC - 1; 0 <= fM; fM--) pI[eG = 4 * (fL + fM * g6)] + pI[eG + 1] + pI[eG + 2] < a5P && (pI[eG + 3] = Math.floor(255 * (pI[eG] + pI[eG + 1] + pI[eG + 2]) / a5P))
				} else if (3 === a5M)
					for (fL = g6 - 1; 0 <= fL; fL--)
						for (fM = gC - 1; 0 <= fM; fM--) 0 === pI[eG = 4 * (fL + fM * g6)] && 200 < pI[eG + 1] && 0 === pI[eG + 2] && (pI[eG + 3] = 0);
				else if (4 === a5M) ! function(pI, g6, gC) {
					var fL, fM, eG;
					for (fL = g6 - 1; 0 <= fL; fL--)
						for (fM = gC - 1; 0 <= fM; fM--) pI[1 + (eG = 4 * (fL + fM * g6))] > pI[eG] + 20 && pI[1 + eG] > pI[2 + eG] + 20 && pI[eG] + pI[2] < 40 && (pI[3 + eG] = 255 - pI[1 + eG], pI[eG] = pI[1 + eG] = pI[2 + eG] = pI[eG])
				}(pI, g6, gC);
				else if (5 === a5M) ! function(pI, g6, gC, id) {
					var fL, fM, eG;
					for (fL = g6 - 1; 0 <= fL; fL--)
						for (fM = gC - 1; 0 <= fM; fM--) 200 < pI[1 + (eG = 4 * (fL + fM * g6))] && pI[1 + eG] - 20 > pI[eG] && pI[1 + eG] - 20 > pI[2 + eG] ? pI[eG] + pI[2 + eG] < 40 ? pI[3 + eG] = 0 : (pI[3 + eG] = pI[eG], pI[eG] = 255,
							pI[1 + eG] = 255, pI[2 + eG] = 255) : pI[eG] < 50 && pI[1 + eG] < 50 && pI[2 + eG] < 50 && (pI[eG] + pI[1 + eG] + pI[2 + eG] < 50 ? (pI[1 + eG] = 0 === id ? pI[1 + eG] : 160, pI[3 + eG] = 180) : (pI[1 +
							eG] = 0 === id ? pI[1 + eG] : 160, pI[3 + eG] = 180 + Math.floor(75 * (pI[eG] + pI[1 + eG] + pI[2 + eG] - 50) / 100)))
				}(pI, g6, gC, 0);
				else if (6 === a5M)
					for (fL = g6 - 1; 0 <= fL; fL--)
						for (fM = gC - 1; 0 <= fM; fM--) pI[(eG = 4 * (fL + fM * g6)) + 3] = Math.floor(255 * (pI[eG] + pI[eG + 1] + pI[eG + 2]) / 765), pI[eG] = pI[eG + 1] = pI[eG + 2] = 255;
				else if (7 === a5M)
					for (fL = g6 - 1; 0 <= fL; fL--)
						for (fM = gC - 1; 0 <= fM; fM--) pI[(eG = 4 * (fL + fM * g6)) + 1] > pI[eG + 2] + 10 && (pI[eG + 3] = pI[eG], pI[eG + 1] = pI[eG + 2]);
				gQ.putImageData(gM, 0, 0), gP[g0] = iN
			}(g0, a5M), a5O()
		}, gP[g0].onerror = function(dE) {
			console.error("Error loading image at index", g0, "Error:", dE), a5O()
		}, gP[g0].src = "data:image/png;base64," + fz
	}

	function a5O() {
		a5G--, a5J()
	}

	function a5J() {
		0 === a5G && (a5G = -1, aw.g3(), i.ul(), az.cq(), au.a2N([gP[8], gP[16], gP[7], gP[9], gP[10]], [2 !== b7.id, 1 !== b7.id, !0, !0, !0]), b3.d1 = !0, gP[7] = a5H, gP[8] = a5H, gP[9] = a5H, gP[10] = a5H)
	}
	this.cq = function() {
		if (void 0 === gP) {
			a5G = 22, gP = new Array(a5G), fv = new Array(a5G), (a5H = document.createElement("canvas")).width = 1, a5H.height = 1;
			for (var eG = a5G - 1; 0 <= eG; eG--) gP[eG] = a5H;
			a5L(0, "exit", 6,
				"iVBORw0KGgoAAAANSUhEUgAAAFYAAABGBAMAAACkrn5fAAAAHlBMVEUAAAAiJCI4OjdcXltoameIioejpqPExsPY29j///9xarZIAAAAyUlEQVRIx+3WQQqCQBTG8TdOB5DUI+S6nRcoPIFhu1bBHGGO4Any3TYxAkWTv1DSYr71D4b5mOE9kWmszkeC/ZptT6Ocl+xj5qgtbVR1iZn9VE2wU2uO2Jryhm2h2OaKbdZgu/NKrXVK7f6q1JpaqTWFYpvrUtqhPTTYpst0aBOv2Drltlxh392iu0U1t5I4biX13PZvF7+zvOFWihXWlNy+aqZ/M3LcivXcds1xK9kKK3GYAVtYe+8CZ/c/7Br9blSNcgn75O/tE26TasUvH0ImAAAAAElFTkSuQmCC"
				), a5L(1, "victory", 6,
				"iVBORw0KGgoAAAANSUhEUgAAAUIAAABBBAMAAABWYLC1AAAAElBMVEUAAAA6PDlbXVqEhoO4urf///8hX3N2AAAEcklEQVRo3s2ZyZKcMAyGWdx3alLcSaW4k8lwZ9LjuwH3+79KlkljLb/czFJp+tYusD8k/ZItF/5y/a0F/dXb+KW472/cQCIbd8b4//+dDFu12/ByZ8Jkq0uHbRvuTFglwomOezx8j5/HxkrgTXEYqSxQyvcWCpVEhOG53p3QQTGfDiMUlppJxPXHEQrVxIT0092fEOaVw9Q8LpV5GysPJGUsWweojyCVCAgPIBQYc8nzwxEIvcYZjyQUmPv8kYQC68dhNoeWmOsD1Tyc/G5L+elvHLzs0tG3l7/PPn6KVJTfGxqpG0+9vXFW2w+ZGaoU0x3YrfwZP3dkrONijUK5ndBOLBAh2Wz8CwybMAESRPX4kDwZuGODMNkkjLoiwtLTyac8IXs2NpbJO2E0YVInhSH/c8LxolY1CVs+tFiEi2TqGW8lZqikTRlhLSYPGcIK2Ao/3gi/ilwiErQz4nIAJnx9xyJsga3w4xN3s6EbTVhowhJNbhCWyFaYcOVUvShpLZ+glfmREurZZ5MQ2wqOx/Q9k3YyeWNgJp0B4YgmNwh7aCv8eJp61U4mwT+xsJwA4Zarv37xm+ENQr89+/BCAwc93qXhRjmZpJeZ/Rs0YU1scU2MU1FkM/tKbT8kwt8+LB+8TtrT9dMCqHsrsyhYmdnfiYkEoaPBXRG/sPd8eunqZqfPmS1MHRGsfGLF5nX2Z4OwZWm6T15ihK3+/D7XBKFFcAErjzKVx3NTGIT8WZe+jRGSl0pdC7RUBqJW5D3P7O/iI9itDzx2Gla5oiAs6YwjKEBSKhOQMiDMnicGNmkUwc6V8sPTmHeyWAGpBELbgJWzx5c3Emqc0nIyya1Lqvax+BhhKfoE4/bdgHDR+6YOn6Zien0FK5fZpiInrITeRpWaL6qr5SwnUzGftJXTytUbCGszIzhjR8HcHKzTVNfqU9SHCGeRdAdjB1vgE4mWyuR1Q0QRLm8gDHsI9SErmg334HVD5EOE8w4vP2tnBrPxsICPeJ9SjDgESnkGpurMxkMEnUOVbT5Xy2cAEnN3U7rd8Kn5EGRscJOz5LqIunNoElbx+0eq3hev17IJRyNDwbpMGjwv3V5CsHOotRFtwhYWSmvn0BB9nfftbUq0txlV3rAJHTry6JVR+yG+f3/oVNDbhKiVYO+xWftkNQhPbLEW7bEr5WabsLClDM4p7Og/7zmnlPic4mVMZQj9xdzgkpUrmmTfctbr4VlvC/9hB2FvCoWtnM7A31SukJ1Qcl5+Audl2pMKOwidKRS2cm81WwHhmO85BOL8dQdhLZsxmNDhRSHhjb5NoF+xg7AwhcJX9nZ5lIRFvvcV6JZl2kHojZonVm7t4tMbG0ujfxio6+YdhD2MLbVyZZd9RVjhYo+6InEH4ck8q/KVezMt9daeA/exWc/h6oocoTP2Q/m7gKXIEZa5u4DAlp1uE5aWUHL3KbHIEvL7FFFsAouE+TYhlcqQIyR3UrG5QZi7kwoFCMT6k648n17v6n7uv9eL5/et9Asv0oTxJYkUxgAAAABJRU5ErkJggg=="
				), a5L(2, "defeat", 6,
				"iVBORw0KGgoAAAANSUhEUgAAARMAAABABAMAAADL6o5mAAAAHlBMVEUAAAAlJyU7PTtUVlNsbmuJi4ijpaLCxMHX2db///+Cup+UAAACo0lEQVRo3s3ZsW7bMBAAUNqyZWUzsnT1VECbhy7ZvHTwlqmAN6PoUG0CggzairpIyi1Nk1b629awTPGOpHm0DyE1WYJEPlHk3UkW6w5t7eMXEWczKHvN52QoXfcjHUoUi4PSbdOhtItkKBEekZPSLdOh7NKhtOlQ3nwRnaC8pENp06F0t+lQvsWi/O/4+uPXiJNljcbgvUb5G5ci3mmWeVyKqGLNW5MyGyh1ZMo41hIyKaJRh573u9JY5HDo1LMsjBOfBLq9/oC0Rg4L5UYdeuWi5HqDAZShyT9clAKGBzJlBgMLB0UN9CKMksOEyEFpYOFBpkxBpywU1AmZkrFThpv7HUYZwcjPQEGzj04RsOpnoJRwnGNScFo7h7JS16HqcmbJDIUzW0hrWstQVfQWlMkhXg655BzKkoVyOPn7EMDjUa4Os0SidsIoCxbK5tBWhV7FCZSRJ8RtT1M6mE2PYb/tE1EdQsnoFNCpizLudwqYDCiUqScdhlLyfunkeslCo+TMlKJvPkNvNASKr14JpayPV0mtZKFRfFVcKKU5Cir4rYRAWXtq21CKetY31uVxiiI9FX8gZap+F7BrP2WC3oMupRSqZprBeeunlCiNXkopVesTrWShUDJpLS7sgd9GwYG/cn1B8lFGVWctuc7PQcao1hTK9YdP0hjgCykTo1579lLM7RcHxSg9VZYMoWw5KFfOL58BlHbOQdmYDa+CKeC1/2yKpbqvgyk1B2VsafgplNI6b6smVnH7wJq7h5tO2bFQCvdNkintkoVibX8RRtkJFkoDUmCpRwkqpZ3zUMDsgDObStkKFspUj9tqEr+EUO4EDwUt8Ez/ykKj3AkmSonGWGopn0J5WAkuSoX+KG60ksVL+Xm/8kXuAAoO1RvtOkT5B9F51EylDpRdAAAAAElFTkSuQmCC"
				), a5L(3, "orders", 6,
				"iVBORw0KGgoAAAANSUhEUgAAAbAAAABIBAMAAABl1r3ZAAAAGFBMVEUAAAAqLCpGSEVkZmOHiYanqabJzMj///+NZwUtAAALoUlEQVRo3t1bS3Pbug6WLMlnq7SNs3VvW3ur9jbR1m6daOu8rK3tONb21A/x7x/wDVCU3JPp9PaGM5mJ5U8gPxIAAZAOAtw+XG8ZtO3Dl6C1/T9iriumWv3wijBvFgy15/evBRNVckHTUC5unb0OTA8w9feh+vCVfxq+BkxY0JXka3xIWzFnP4EJ/gRMcMXYhjwLbxh7asV8O4mJH35Gzi/AfFxsH9JWzDvg6qxiD+Zj2oKJ1ycxJZuflvMzfZ3AjLjXOKYtmLD02B1Y5jH1Y652pzAR9BoE70/ICbLTfXWPJ5b+cOPHBOeM3Yaudoqn3k9htTuFScCQ05vtsFNO0Juf7Kt7PMBOtokXA18/Bcmh4VGuEH2BUS1mu07Mmy8feIcL3V+bnCBenuyrezyJ3sIOPgzQhEUdseOwufi3BKNajoh5MGYaGcs65QT9/cm+useTg31NezfIz2MMDAScQeyoJ28j80hizPax68JEhlfdKSe8qernYXdfJ8ZTCXrc78+bGNAswReYbYaNHXBCMNp+dl2Yngnf9l1yuHOGCc86++oeT6y6iNGILAbWU2r0x4o9N7R6TzHyf0zMgzGquO6SM6IOzd9X93j6eqVKa2QWE1bKFIJ3lbMrglbVKcXIBdl1Ysaa2LxDjlnXSUdfDSujGJibVPGsGxhYx6N+9qmxc5eyX4ThHpUQa2KMr5p0yBk1HJqnr0ajmJHmM0LENAbmd2WeXTLHbgeSA8YUgljcgTHeY9ghx+hrnbb31WgUk+s56GNiChOQlYc1u7f728e7SL6BMCJV2AXJBK89xYQVdYo+TM+mUXMP5t7H6qsrxxAbePqKkN1xZpVhFi2qNaxPRjEDJonZLaiJKRrEGpjEEls1MZFv1QZcA4gcvypKDMCJ8oWwZncifLgUfY54FxhTKGJ1irYXBzNqEnMxfUvs0MT0sX2aXYktHTkDHQIUxC4FBtRVioin1s6A2eVWaokIn8a2G6GJnBiKyVyMXo4jGRbFjC2xYxNTOP5JvbF35CRquUH3925fQammvqgnhtleuD5h/WF1tBgz05yY1TwXo105DmQdTFKhWsWyganswwD1XDtyIjUrfUZUV2CC6qhVrP6sl/JW+axaELcYGb0oYiieoxjO7KZi2yl11ATTx0WYv11MYj3q18ftdvug3c3EkVMK7XpbOZrLMSZS7y1Yrac4ja2SwLKjaF55ck4M2RTFgCw1C4/ToAWTbFFbupgLmNMolWGenOHn2XUGLH44ckb8K16Bq2emfZOqmphF7EHmNrVRk471BmxuMdotCGI2ZqYYmMEn/tXZjRXoYsIz1BpygMKuz5ONHK/rhZhpLCe8Yp72xDEwUrOIfM2mJNz5ISxxbTE6IxHE7JsEI/zL82wmC2JTP8bfFIYr3Rx62oR4vEepoFjODfM2WNI1zIk1Fb5mE7NXqa0zYnuLUSqqiO2tgiJMr8SdGEskmMGWtGeK4QbIOe2JJbJU+Bkk59zPi+0BA84QpQic2eeAJty96mAxI0LMPCYYRz10QYxgxhRTUzmggAcuf17wwrXxn/zjHskJqxZi9ZvqIBwIYrbga5aQBLg6WkxJiFl/jjB6UQ9aym0TIyaIm7z6O1I53NkD9bonAkktEMxOTIGRk4gy8MxtMMYM3GZ1dItcSx0RqfC0rA3G9iGJ2cDcYtTLz9+ia2UbaQPDjfjwEcwcCK5zVDITGN7LpJJElvF2qGeojoQSGTlls0an+E6AenVwktTFMKIhQVEbzJVDzBiQxeB6WEz2aSSHL8oBkGueKebICwlMX3FYwhwNIfkfalvKKr7naTkR82fasM6Tog5s+p6SMNeOKGcoJaXEzFZmMTlORUZ4yXLkbdqICUwhF4tlAEjE+2pCuX4ejZyE+UsjIHeSs8Dsdee6SGWGr8x+bOI2o4mGmFYzg1EbxYrkJhNHTjsxjgnVYsHYNtKoD0q/hdmmWs4Fw/nWf0wDedkYXv5h1ExVjPTC69jxgmlM3iCmcymDSWjqXKKajpXTToxjxHYlNO+99sJrNV+c81zLIRH9ud07uIZeADEdqL0tVSmnMBu4bH/pYM5Wnyyxg4NRL6dBeB9nVDH/QkFhGzGOGau9GAZgNuC5VBa+a++0HBLR52SHATmWGA8YePlNuw5jmGZAKDc0xBRKY5Qacyd9SPYfvpZoAX+WWCmjJ7ozDYWZcVJHJSciJlZg9FwQ+4ELrZvUeL5brB7urBhiCqYxMUPE6orkyEQVrx/ve4+P0/jxcfLp8XGI+xpxd+3uuQeh1TWfDCUnQUUwSuzI5QQ4KH9b1UOtb/YETRsr0kRE7EgwA7sBfkMLvG84j5YmMEXda0YTKzFnfHdSckYis3nzafv8WSZd2sYehlxOQFPPjXYdKNnS7hVHZjsnOsnt4E15CuWSNcb0/uttnw0mvA88wVI24t9dploOLyX2RKB9FKUQMmk5czboVAdNqLyoN8TCT2yNMSXOiT9ahRoiTNISuWI5Y1Y1lVGVphSG+47SaLpDDDZoJ6SKaRiEQqGo8hMTLk+HORWpz9hjlwnCDDqIaUw0gbHN9Ou1UJZlssbjUbu3UgiHGIRUNjDtTayDwNUKFXSS8SBiAqswNn+6Q5Uftd3p4JUHWs8wGr7hLCCMreTfmgTK0V28tIXXbIDctMTAd3OR1dTCHBxiQN2mEgP4TzmIAznhkGlC0UZsbzERSmNTrL4rnLZAbpQ67r6Uw7aYMWhvNdGvy6Bqj8eTiHyS1ffvR3zeKDHA2EQTtqAntdOTYzeV2FFHhYkBWid/katafUvMJojtxCym4uvBty3s7Z1kNAtu+BlKxERCQs9J9rY0wA1C7R9rT7r+iRBbYxdwZ9L1GBt7fGsdxQqXBtqJGUzEI3ScQYugCo8HFbWbxGIxwBWq+DQ8hymekOrLWYo/p6bAglfskKAkcYWLMO3EDCYSWeZSRgtHPt3zqKrxeGxRO24SG+hKL7X0ibNn0tKaf1+VGBOOPXy/gFA8Mw9WWE47MYRZwVfD78IAduJqURZnuK+xDoH5CbRrY6JSbP19Ts9X24qhvlMrhelZ++Ih1dCs2BzLaSeG+yo5Yi5sY87n/ED7GssVO7usxDZJiZV1gMvOUdNz4JLyWUtzStPaq36P76zzmOPSdCsxXL7mLiFnf+dySImpi2jMiDsPcTFMfEWIyRK3PSiQvn7t5qP6EOBy6233GFM6Z3m5ibvQYUIrMXzgAFTOIIw/r2Rwf67HpTHw5kbeLRU7KSEm1dke7QyangMf27RU8W4xJqdneegEEB3/tBLDR0Q94RN5xUyEg8EbZzwxLfAV9IbGCh/8yQVzajvooK3nLePV5DBuwEhIdm5TAIOJZhWrZ/DsGv7A8Dewyrx2OJvSQ73LDFLkaDussiusRwZj4i1x940QK/RemOEazsQ9pjeYkY/YmmBihtNv42dXCJO3VDnZwT3Ordjygi2LA3f6u8Z4VCxx/15x2blj1gfVekGeWg+zI99wMooxYe/zXWTvIWcI007MPVwveb3t74JtYErnzfGU9k4TJaYP183VAl4ORIbfvH5QeEbjYM7RBm3+3WDM21lLm7rXIZJNrA4nvOMJZ9d+Yvo6hLwMIuxclBZWrRdGPJnU3MGERZMYmOELLqfoWw4VNg+Kib3EzAUWeX1nJA0GzGLVesUnbJQiuAgHoy+M1wtUxnvBdSLtt99t0YpRjJ+YwcgLV7nycCNy+uJcyhp5XIeLCb9uCfWH7GUXwERbZF0YLzF0SUxckesrn9r71nGNLnLtIvNdxzt7e71Q514PX85efGXvNCbyEUPX+sSlRl+J/2WXI38jpmgSwxh5DdUzTS+7zvrbMGvQxQYxcnVWXBHuXQ9/9rLzH4Kpp8GNS8x5899eT//zMIqYez39F1/y/x9gJLEG5lf/LOP3Y262d17MH/djm3+L4fmu90c7r/ZnVq/3h3Gv96eMwav98Wnwqn4u/A/xnpi6RePJDQAAAABJRU5ErkJggg=="
				), a5L(4, "crown", 4,
				"iVBORw0KGgoAAAANSUhEUgAAANIAAADSCAIAAACw+wkVAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0xMi0yM1QxNDowNDo0NyswMzozMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1ZmFkNDE3NC03OWNiLTUwNDgtYWIyMi04NThmMGExODUzZTEiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4ZDQ1NTIyYS02MDRlLWYxNDUtYWM3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"
				), a5L(5, "arena", 6,
				"iVBORw0KGgoAAAANSUhEUgAAAQAAAABABAMAAAAHc7SNAAAAHlBMVEUAAAAjJSM7PTpUVlNqbWqHiYalp6S/wr7W2NX////RSpP4AAAD9klEQVRo3sWZvW+bQBiHiSGAt6hdki1Dh7Jl9eapkjdPrbxV6lCxeaw3okqpbqNuzMd/2yRw3PvJkQVYYhHgnvfer9/dBQG4WnftgwWuawBwXAIgBQB/lwDIAEC1BEAOAJolAAwAaB/mHz+C4y8RhQkCKOcHuEMAl/kBDgigWTgG2/Z+7vFDPH77fW6AmAAUSxbi1+t5boAdAajnBjgRgHbm8a/o+HNLgiEGfy0UhUMMfrU/zvMCbOy4HxeSBKehBJtlirGze9AlW1GqtM2fH0rp6HroCTWzNcnpTMmxa+f5HZcEORnnyQ9gewkFyJUcS1zsp1wSUID2tx/gKAMYJccy14MSLgkYQOeeUYCLCBBqOZY7LRhxScABzl6A3gcEINFyDIY+lwQcoPEDFBLAWhE8IQQ7MUnAAd58MA5wkQAOiuxOYBM+sGIsABy9AN0QBMAosnsNx7xjkkAAKP0ABQdYabL7IBpWjwD88wNUHCDWZLeBPditkm8wwMuvD1+Mez8VU/qE3IwBUkV2r5AKWTFJkIPymUwHKBhAV2VzJrtjPOmGRiEECKcDVAzg7X9NxmR3ih2TQ0dTgGg6wKsPMED3aspe2+F9iYyWKwjwmQWhDlAQgC66zjGyLmCZ4yakYQCffo6lYUUAKgLQmx4y2U2WQ3FLJMHUQkQBXt5HANb5hkiCa1L9Q1quppZiBlBgABv+OZEEvKCQvSoOUAeTAGoMYHq/bkjsZCpA9b52zADaLQSI7EMpkQS5CtC8T5AAgEt35xECJHbcmEgCowL0TXOqJAMAZfenhgBrO/MhLsaRPn4fhRSgvvED9H7dAYDDkGkGye5kBKCUAJ7uAz9An1qGlfiH4ZmjuDvVCntVGKDZBxMASDYMTa5xpbcUd6ekXQIyA80WAYiluAxu6Wdi2brRGOxLUw+w+obfHAeIvGWjkXenhL2qoRfsUHKMA0Af1NIejC288ShAgQBs0X6cAnBLAE6ydSOFeGiarhsaGBoegIgAKNYJM8Oi0AHshEqoAQCTa3Igg2T3aRSgxQAJZPcBpAggVay7Ek9JDBKmDmAF88AHEKGRMsW6WNyazJGfcjYZytqwRgDuK7XS8vboK6V4fnTGAHfiqwoAWuIYJcc24motRY7J+YQVUwBCcF9seWc0M3vx+KQhqtg4Li/A8PF6+OIRLYUqNDP38gHSFgMc3LLND5C6+2tspbHWXStnJEgSQIDUVTE/QOjuH8Tl5hbMdaWcn5TiyujVfX4A+2YNTEYbo0cgBp6VU8wLBrCFq54EkNr7K2Jlaq3LlR2DDLoGAWyGjjgBILT3Y7zadItsbc8khU0TASTD8xMAetfXrGr2sdf8B96/CJXN/8t1AAAAAElFTkSuQmCC"
				), a5L(6, "territorial.io", 6,
				"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phjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAA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jz//+c+xZMmS+PWvfx3Lly9PnQXUssWLF8c3vvGN1BmZM3To0Jg1a1bqDBJp3rx5LF++PHbcccfUKZm2dOnS+PrXv546AwAAAAAAAAAAAACAWlYvdQAAAAAAAAAAAAAAAGxLRUVFcfzxx8fhhx8eBxxwQLRv3z6aNm2aOiuv7bDDDrHffvvFfvvtFyeddFJcddVVsWrVqnjppZdi8eLFcd9998Wrr76aOhMA8t7IkSON9uSAAw44II455piYP39+6hQAAAAAAAAAAAAAAGqR4R4AAAAAAAAAAAAAAPJe7969o0+fPtG9e/fo1KlTNGrUKHVSnVZQUBB77rln7LnnntG3b9+49NJL469//Ws899xz8cQTT8Ttt98eH330UepMAMg7/fv3T53APw0ZMsRwDwAAAAAAAAAAAABAHWe4BwAAAAAAAAAAAACAvNOyZcs49dRT49BDD41u3bpF8+bNUydlWkFBQbRp0ybatGkTJ554Ylx77bXxwgsvxJNPPhn33HNPLF26NHUiAOS83r17x9577506g3864ogjon79+rFhw4bUKQAAAAAAAAAAAAAA1BLDPQAAAAAAAAAAAAAA5IX9998/TjnllDj88MNj//33j3r1XBKfq0pKSuKggw6Kgw46KC688MJYtmxZPPnkk3HXXXfFU089lToPAHLSwIEDUyfwb5o2bRpnn312zJw5M3UKAAAAAAAAAAAAAAC1xKcUAQAAAAAAAAAAAADIWd26dYvBgwfHEUccER06dIiCgoLUSVRTQUFBdOjQITp06BDnnHNOrFixIhYsWBCzZ8+ORYsWpc4DgJzRs2fP1Al8QZ8+fQz3AAAAAAAAAAAAAADUYYZ7AAAAAAAAAAAAAADIKR06dIgzzzwzevfuHZ06dTLWU8e0adMmvve978XZZ58dr776asydOzdmzpwZK1asSJ0GAMkccsghsccee6TO4AsOOuig1AkAAAAAAAAAAAAAANSiwtQBAAAAAAAAAAAAAABQv379GD58eCxcuDD++Mc/xsiRI6Nz585Ge+qwgoKC2GeffWLEiBHx5z//OZ588sk477zzoqioKHUaAGx3/fr1S53AlygtLY3evXunzgAAAAAAAAAAAAAAoJbUSx0AAAAAAAAAsK3df//9sdtuu6XOAHLE9OnT44477kidwSaMGzfOgZR1wG233RYzZ85MnUEeuuWWW2KfffZJnUEVvffee16zAagVRx55ZJx99tlx1FFHRdOmTVPnkEj9+vWjV69e0atXrxg/fnw8/PDDMW3atHj++edTpwHAdtG9e/fUCWzC0UcfHfPmzUudAQAAAAAAAAAAAABALTDcAwAAAAAAANQ5Xbp0iT333DN1BpAjdt9999QJbMacOXOivLw8iouLU6ewFZo2bWq4h2rr2bNnDBw4MIqKilKnUEVXXHFF6gQA6pD69evHiBEj4uSTT479998/dQ45plmzZnHaaafFwIEDY8mSJTF79uy48cYbU2cBQK0ybpy7unbtmjoBAAAAAAAAAAAAAIBaUpg6AAAAAAAAAACA7HrxxRfjvvvuS53BVmrXrl2cddZZqTPIM6NGjTLak0dWrVoV48aNS50BQB3QsWPHuOWWW+Lvf/97TJ482WgPm1VUVBQHHXRQXH/99bFy5cqYMmVKlJaWps4CgG1u//33j2bNmqXOYBP23nvv1AkAAAAAAAAAAAAAANQSwz0AAAAAAAAAACQ1bty4WLduXeoMttK5556bOoE80rlz5zjmmGNSZ1AN11xzTVRUVKTOACCPHXPMMfHQQw/F888/H6eddprxFaptjz32iAsvvDBWrFgRs2fPjs6dO6dOAoBt5rDDDkudwGbstttu0bp169QZAAAAAAAAAAAAAADUAsM9AAAAAAAAAAAktXLlyrjjjjtSZ7CVunbtGv3790+dQZ4oKyuLBg0apM6gil588cWYNm1a6gwA8tSgQYNi8eLF8cgjj8Q3v/lN7wHYajvuuGMMGjQolixZEg8++GD07NkzdRIAbLX27dunTmALevTokToBAAAAAAAAAAAAAIBaYLgHAAAAAAAAAIDkxo4dG++//37qDLbSj370o9QJ5IFWrVrFcccdlzqDKtq4cWNceumlqTMAyEPf+9734oUXXojZs2fHN77xjSgoKEidRB1TXFwcxx57bDzxxBMxb968OPLII1MnAUCNfe1rX0udwBZ06tQpdQIAAAAAAAAAAAAAALXAcA8AAAAAAAAAAMmtWbMmbrrpptQZbKVevXpFr169UmeQ48rLy6NRo0apM6iixx9/PO6///7UGQDkkWHDhsUrr7wSN9xwQ+y3336pc8iAoqKiOProo2PevHmxYMECAz4A5KUWLVqkTmALvvrVr6ZOAAAAAAAAAAAAAACgFhju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FpLMnDkzmjZtmp1RdEpLS7MTAAAAAAAAAFhKDbIDAAAAAAAAAACgEAwdOjR23333qKioyE5hMcrKyuKUU06JX/ziF9kpNebggw822lPH3HDDDUZ7AOqhX//610Z7CtT8+fPj5ptvjr59+0ZVVVV2TkEZPnx4PPvss3HddddFx44ds3NYRj169Iju3bvH2LFjs1MAAChSO+ywQ/Ts2TM23njjWGeddWLNNdes80MFy2qVVVaJVVZZJbp06fKtf//ZZ5/FO++8E//6179izJgx8fjjj8f777+fVAnA8tS2bds46KCDomfPnrHRRhtFu3btspOW2P//eLbRRhvFvvvuGxdddFF88sknMW7cuBg7dmzcc889fucEAAAAAAAAAECdVBIR87MjAAAAAAAAAGrSv//971hzzTWzM4raBx98EGuvvXZ2BkCtu+yyy+K4447LzqAa5s6dG926dYu33347O6VGjB49Onr06JGdwQIfffRRdOrUKebNm5edAsASeu+99/w8W4Bmz54dQ4YMiUsvvTQ7paCVl5fHyJEjY/vtt89OYRndcMMNcdRRR2VnUEe89NJLsemmm2ZnFJ1+/frFddddl50BAMtdw4YNY++9946tt946unfvHuutt140b948O6vOmj9/fnz00Ucxbty4GDNmTDz22GPx4osvZmcBsJS6d+8eBx98cGy11VbRtWvXaNCgQXbScjdhwoR44YUX4vHHH4877rjD86mwnMycOTOaNm2anVF0SktLsxMAAAAAAAAAWEqGewAAAAAAAICCY7gnn+EeoFiVl5fHW2+9Fa1bt85OoRpuvvnmOPzww7Mzltmuu+4af/rTn7IzWMivf/3ruOSSS7IzAFhCBx98cNx8883ZGdSwKVOmxGGHHRaPPPJIdkrRuPTSS6N///5RVlaWncJS+vjjj2ONNdbIzqCOMNyTw3APAIWsd+/esdtuu8UWW2wRG2ywQTRp0iQ7qV77z3/+E6+99lq88MILMXLkyHj33XezkwBYhE6dOsWRRx4ZO+20U2ywwQZRUlKSnZTmyy+/jOeffz7uvffeuOmmm6Kqqio7CQqG4Z4chnsAAAAAAAAA6i/DPQAAAAAAAEDBMdyTz3APUMzOOuusGDJkSHYG1fDll19Gp06dYsqUKdkpy+Svf/1rbL311tkZLPDGG29Et27dsjMAWApPPvlkbLPN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ZwAAUIPatm0bd955Zzz22GPxk5/8JDuHeqisrCz22GOPGDNmTFx22WXRsGHD7CSAGtOtW7d45ZVXYu+9985OYRmsscYacffdd8dZZ52VnQIAAAAAAAAAQB1nuAcAAAAAAAAAAGrBxIkT45ZbbsnOoBp23nnn6NSpU3bG/zjyyCOzE1hg1KhR8dRTT2VnALAMDj744OwElkJlZWWccsopMWHChOwUatCbb74ZJ510UnzzzTfZKSzCLrvskp0AAEANOfPMM+ONN96IfffdNxo0aJCdQz3XvHnzOO644+Ktt96KQw45JDsHYJn16dMn/vKXv8QGG2yQnUINaNSoUQwZMiQefPBBI3MAAAAAAAAAAPwgwz0AAAAAAAAAAFBLBg0aFJ999ll2BouxwgorxODBg7MzvuWggw6KLl26ZGcQEbNnz46BAwdmZwCwjHr37p2dwFK46aab4tZbb83OYDm47bbb4qabbsrOYBG23HLL7AQAAJZR796947XXXoszzjgjVl555ewcCsxaa60VN910Uzz22GOx7rrrZucALJWBAwfGjTfeGKusskp2CjXs5z//ebz88sseowAAAAAAAAAA+F6GewAAAAAAAAAAoJbMmDEjbrjhhuwMqmHPPfeMli1bZmf8V//+/bMTWOC2226LN998MzsDgGWw0047xRprrJGdwRJ6/fXX4+ijj87OYDn61a9+FePHj8/O4Ad07NjRwaYAAPVU48aN4/e//338+c9/jm7dumXnUOC22267GD16dAwePDg7BWCJXHvttTFixIho1KhRdgrLSbdu3eKvf/1rbLXVVtkpAAAAAAAAAADUMYZ7AAAAAAAAAACgFg0dOjQmTpyYncFilJeX15lD5XbZZZfYdNNNszOIiM8++ywGDBiQnQHAMvrFL36RncASmjNnTvTv3z+qqqqyU1iOKisr45hjjok5c+Zkp/A9SkpKYu+9987OAABgCe2+++4xbty4OPzww6Nhw4bZORSJlVZaKc4+++x48cUXo2vXrtk5AItUWloa999/fxx55JFRUlKSncNy1rZt23jggQdin332yU4BAAAAAAAAAKAOMdwDAAAAAAAAAAC1qLKyMq644orsDKph//33j8aNG2dnxIknnuiQqDrimmuuienTp2dnALCMevXqlZ3AErrmmmvihRdeyM6gFjz77LNxzTXXZGfwA7ba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XFRVVWXnLFcnnHBC7LfffjF58uTsFBY44ogjshMAKDAbbLBBdgIAAAAAAAAAAAsx3AMAAAAAAAAAAEXq+uuvj9deey07A37QXXfdFW+88UZ2BgB1WIsWLbITWMg777yTnQAAALDM9t9//+wEFjJmzJjYcsst4/77789OqTX3339/bL311jFu3LjsFCKid+/e0axZs+wMAApIhw4dshMAAAAAAAAAAFhIg+wAAAAAAAAAAAAgz/nnnx933nlnlJSUZKfAt0ybNi0GDBiQnQFAHdapU6do2LBhdgYLGTt2bHYCAADAMtlyyy1jk002yc5ggbvuuisOPPDAqKqqyk6pdW+++WZsuumm8fDDD0evXr2yc4raSiutFP369YuLL744OwWoY6ZNmxZTp06NL774Ij7//PP46quvIiJi5syZ0bx584iIaNSoUZSXl8eKK64YK6+8cqy66qrRuHHjzGzqgDXWWCM7AQAAAAAAAACAhRjuAQAAAAAAAACAInb33XfHscceGz/96U+zU+Bbrr322pgyZUp2BgB12DrrrJOdwELmzJljuAcAAKj3jj76aEP3dcD8+fPjiiuuiBNPPDE7JdWcOXNiu+22i3vvvTd233337JyitsceexjugSJWVVUV77zzTvzrX/+KcePGxauvvhrPPPNMTJ8+famut/7668emm24a3bp1i/XWWy822GCDaN++ve9BishKK60U66+/frz55pvZKQAAAAAAAAAAhOEeAAAAAAAAAAAoemeffXY88sgjUVZWlp0CERExYcKEOOOMM7IzAKjjVl999ewEFvLZZ59lJwAAACyTsrKy2HHHHbMzit78+fPjnHPO8TviBaqqqmLPPfeMe+65J/baa6/snKK16aabRocOHeL999/PTgFqyaxZs+LFF1+Mxx9/PEaOHBkffvhhjV37zTff/J/Blg4dOsTee+8dvXv3jk033TRWWmmlGrsfdVPPnj0N9wAAAAAAAAAA1BGl2QEAAAAAAAAAAECuJ598Mh577LHsDPiviy++OCorK7MzAKjjVltttewEFjJlypTsBAAAgGVy5JFHRsuWLbMziprRnh+27777xiOPPJKdUbQaNmwYRx55ZHYGsJxVVVXFyy+/HKecckq0adMmtt9++7joootqdLTnh7z//vtx4YUXxg477BCtWrWKE044IZ599tn45ptvlvu9ydG5c+fsBAAAAAAAAAAAFjDcAwAAAAAAAAAAxJlnnhlff/11dgbEa6+9FldddVV2BgD1wKqrrpqdwEI+/fTT7AQAAIBlst9++2UnFL0LLrjAaM8PqKqqij322CNGjx6dnVK0dthhh+wEYDmZO3du3H///fGTn/wkNt988/jtb38bs2bNSuuZN29eXHHFFbH11ltHjx494rbbbouZM2em9bB8dOzYMTsBAAAAAAAAAIAFGmQHAAAAAAAAAAAA+caMGRP333+/gwlJNX/+/Dj77LOzMwCoJwz31C2GewAAgPqsXbt2scUWW2RnFLUbbrghBg0alJ1Rp82bNy/23HPPeO655xz2n6Br166x/vrrx5tvvpmdAtSQb775Jh588MEYNmxYjB8/Pjvne73++utx8MEHR7t27eKcc86JvffeO5o0aZKdRQ1o165ddgLV8Jvf/Cbuuuuu7Iwl9uijj0bjxo2zM4rO1ltvnZ1Qaz755JPsBAAAAAAAAIAaZbgHAAAAAAAAAACIiIihQ4fGLrvsEs2bN89OoUg9+eST8cADD2RnAFBPrLzyytkJLOTjjz/OTgAAAFhqRx99dDRq1Cg7o2g98sgjcdRRR2Vn1AuTJk2KQw45JB555JEoLy/PzikqZWVlcfjhh8eAAQOyU4Aa8OKLL8bAgQPj2WefzU6plokTJ8ahhx4al156afz2t7+Nn/3sZ9lJLKPVVlstO4FqmDBhQkyYMCE7Y4lVVVVlJxSl+vKYAgAAAAAAAMD/Ks0OAAAAAAAAAAAA6oZ333037rjjjuwMitTXX38dQ4YMyc4AoB5ZaaWVshNYyAcffJCdAAAAsNR22WWX7ISiNX78+Nh3332zM+qVF198MQYMGBDz58/PTik62223XXYCsIw+//zzOP300+MnP/lJvRxYeO2116JXr15x/PHHx+eff56dwzJo2bJllJWVZWcAAAAAAAAAABCGewAAAAAAAAAAgIUMGTIkpk2blp1BEbrnnnvilVdeyc4AoB5ZccUVsxNYyLvvvpudAAAAsFS6desW3bp1y84oSp9//nn06dMnZs2alZ1S71x77bUxcuTI7Iyi07Vr1+jUqVN2BrCUXn755fjJT34SF154YXbKMrvyyivjpz/9qedX67GysrLYYostsjMAAAAAAAAAAAjDPQAAAAAAAAAAwEKmTJkSf/jDH7IzKDJffPFFnH766dkZANQz5eXl2Qks5B//+Ed2AgAAwFI59NBDo6SkJDuj6MyfPz9OP/30eOONN7JT6q2+ffvG+++/n51RVMrKyuLggw/OzgCWUFVVVVx11VWx+eabx5tvvpmdU2PGjx8fW2yxRdx2223ZKSylzp07ZycAAAAAAAAAABCGewAAAAAAAABYDtZcc82oqqry4aPGPvbee+/s/62hqJxxxhnxySefZGdQRH7/+9/HxIkTszMAqGeaN2+encACc+bMialTp2ZnAAAALJVtt902O6Eo3XnnnXH99ddnZ9Rrs2bNipNOOikqKyuzU4pK7969sxOAJTBr1qw4/vjj47jjjstOWS6qqqri4IMPjnPOOcfjQT209tprZycAAAAAAAAAABCGewAAAAAAAAAAgO+YM2dOXHPNNdkZFImPP/44hgwZkp0BQD1kuKfumD59enYCAADAUunWrVtssMEG2RlF54MPPoijjjoqO6MgPPTQQ3HvvfdmZxSV7t27R3l5eXYGUA3Tpk2L/fffP66++urslOVu6NChMWDAgPjmm2+yU1gC7du3z04AAAAAAAAAACAM9wAAAAAAAAAAAN/jvPPOi/feey87gyJw6aWXxpw5c7IzAKhnWrRoEY0aNcrOYIEZM2ZkJwAAACyVQw89NEpKSrIzikplZWWceuqpMWvWrOyUgtG/f/+YMmVKdkbRaNy4cRxwwAHZGcBifPrpp7HHHnvEww8/nJ1Sa37729/G4MGDo7KyMjuFamrVqlV2AgAAAAAAAAAAYbgHAAAAAAAAAAD4HlVVVXHJJZdkZ1Dg/vnPf8bFF1+cnQFAPdShQ4fsBBYybdq07AQAAIClss0222QnFJ377rsv7rnnnuyMgjJ16tS46qqrsjOKSq9evbITgEWYPHly7LXXXvH8889np9S63/zmN3HeeedlZ1BNLVq0yE4AAAAAAAAAACAM9wAAAAAAAAAAAD/g6quvjjfeeCM7gwI2YsSI7AQA6qlVV101O4GFTJ8+PTsBAABgiXXo0CE22GCD7IyiMm3atDjppJOyMwrSiBEj4u23387OKBo9evTITgB+wPTp0+Oggw6KF198MTslzRlnnBG33XZbdgbVsMoqq2QnAAAAAAAAAAAQhnsAAAAAAAAAAIBFOP/887MTKFDPPPNM3HXXXdkZANRTK6+8cnYCC5k2bVp2AgAAwBI75JBDoqysLDujqFxxxRXxySefZGcUpKqqqvjtb3+bnVE01lprrejWrVt2BvAdX3/9dfTr1y+efPLJ7JR0hx56aIwePTo7g8WoqKjITgAAAAAAAAAAIAz3AAAAAAAAAAAAi3DHHXfEiy++mJ1Bgfnmm2/ijDPOyM4AoB5zmF3dMnXq1OwEAACAJbbNNttkJxSV9957L84+++zsjIJ23XXXxfjx47MzisY+++yTnQB8x9ChQ2PkyJHZGXVCVVVVHHroofHZZ59lp7AI5eXlUV5enp0BAAAAAAAAAFD0DPcAAAAAAAAAAACLdNZZZ0VVVVV2BgXkwQcfjOeeey47A4B6zEF2dcuMGTOyEwAAAJZI48aNo3v37tkZReXiiy/2XEMtuPrqq7MTisaWW26ZnQAs5K677orf/OY32Rl1yttvvx2nn356zJ8/PzuFRdhwww2zEwAAAAAAAAAAip7hHgAAAAAAAAAAYJEee+yxePLJJ7MzKBAzZ86MgQMHZmcAUM+ttNJK2QksZPr06dkJAAAAS+Sggw6Kpk2bZmcUjfHjx8fvfve77IyicPXVV8eECROyM4pC9+7do7TUW/WhLhg3blwccsgh2Rl10h/+8Id46KGHsjNYhLXXXjs7AQAAAAAAAACg6Hk1IAAAAAAAAAAAsFjDhg2LefPmZWdQAP74xz/Gu+++m50BQD234oorZiewkM8//zw7AQAAYIlsu+222QlF5fLLL89OKCq33XZbdkJRKC8vj7322is7A4re7Nmz4+ijj/Zc9iIce+yxMXXq1OwMfkDLli2zEwAAAAAAAAAAip7hHgAAAAAAAAAAYLFGjx4df/rTn7IzqOc+/fTTGDRoUHYGAAWgadOm2QksZNq0adkJAAAAS2SzzTbLTiga77zzTlx33XXZGUXlN7/5TcyYMSM7oyhsvfXW2QlQ9C655JJ48cUXszPqtIkTJ8YVV1yRncEPWHnllbMTAAAAAAAAAACKnuEeAAAAAAAAAACgWgYPHhyzZ8/OzqAeu/LKKx0WCECNaNiwYXYCC5k8eXJ2AgAAQLV179491lxzzeyMonHLLbdkJxSdGTNmxBNPPJGdURQ22mij7AQoaq+99loMHTo0O6NeGDFiRLz11lvZGXyPioqK7AQAAAAAAAAAgKJnuAcAAAAAAAAAAKiWt99+O0aOHJmdQT319ttvx3nnnZedAUCBWHHFFbMTWMjEiROzEwAAAKptzz33zE4oGlOnTo2LLrooO6Mo/f73v89OKAqdO3fOToCiNW/evDjllFOyM+qNqqqquOSSS7Iz+B4rr7xydgIAAAAAAAAAQNEz3AMAAAAAAAAAAFTboEGDYvr06dkZ1EMXXHBBVFVVZWcAUCAaNGiQncAC8+fPjw8//DA7AwAAoNo233zz7ISi8eCDD8acOXOyM4rSo48+Gu+88052RsGrqKiIXr16ZWdAUbrzzjvjqaeeys6oV6677roYP358dgbfUV5enp0AAAAAAAAAAFD0DPcAAAAAAAAAAADVNmnSpLj55puzM6hnXnrppbjxxhuzMwAoII0bN85OYIGvvvoqOwEAAGCJbLTRRtkJRaGqqiquvvrq7Iyi9vjjj2cnFIXevXtnJ0DRmT59egwcODA7o1668sorsxP4DsM9AAAAAAAAAAD5DPcAAAAAAAAAAABLZMiQIfHpp59mZ1BPVFZWxrBhw7IzACgwTZs2zU5ggXnz5mUnAAAAVNu2224bLVq0yM4oCmPHjo2xY8dmZxS1m2++OebPn5+dUfC6d++enQBF54YbbohPPvkkO6Ne+t3vfhcffPBBdgYLWXHFFbMTAAAAAAAAAACKnuEeAAAAAAAAAABgicyaNSuuvfba7AzqiUceeSSeeOKJ7AwACkxpqZdB1xWGewAAgPpk2223zU4oGg888EB2QtEbM2ZMvP3229kZBW+DDTbIToCi8umnn8YZZ5yRnVGv3XHHHdkJLGSFFVbITgAAAAAAAAAAKHresQoAAAAAAAAAACyxs846KyZMmJCdQR03e/bsGDRoUHYGAAWoefPm2Qks8NVXX2UnAAAAVFv37t2zE4rCV199FVdffXV2BhHx/PPPZycUvHbt2sW6666bnQFF44477og5c+ZkZ9Rrl19+ecyePTs7gwWaNWuWnQAAAAAAAAAAUPQM9wAAAAAAAAAAAEusqqoqLrvssuwM6rg77rgjxo0bl50BACxHlZWV2QkAAADV1rlz5+yEovDyyy/H9OnTszOIiAcffDA7oeCVlJTETjvtlJ0BReHzzz+PM888Mzuj3ps0aVI8/fTT2Rks0LBhw+wEAAAAAAAAAICiZ7gHAAAAAAAAAABYKpdddlmMHz8+O4M66rPPPotBgwZlZwBQoMrKyrITWGD27NnZCQAAANXSpUuXaNu2bXZGUXjkkUeyE1hg1KhRMW3atOyMgrfhhhtmJ0BRePDBB2PGjBnZGQXhzjvvzE5ggUaNGmUnAAAAAAAAAAAUPcM9AAAAAAAAAADAUrvggguyE6ijrrvuupgyZUp2BgAFqnHjxtkJLDBv3rzsBAAAgGrZaaedshOKwrx58+KPf/xjdgYL+fvf/56dUPDWW2+97AQoePPmzYvf/va32RkF49Zbb43JkydnZxARTZs2zU4AAAAAAAAAACh6hnsAAAAAAAAAAICldsstt8To0aOzM6hj/v3vf8ewYcOyMwCAWjB37tzsBAAAgGrp0aNHdkJReOONN2LSpEnZGSzE8zjLX4cOHbIToOD97W9/i3HjxmVnFJRnnnkmO4GIaNCgQXYCAAAAAAAAAEDRM9wDAAAAAAAAAAAsk3POOSfmz5+fnUEdcvHFF0dlZWV2BgAFrFGjRtkJAAAA1DNdu3bNTigKL7zwQnYC3/HYY49lJxS81q1bR/v27bMzoKDdcccd2QkFZ9SoUdkJhOc7AAAAAAAAAADqAsM9AAAAAAAAAADAMhk1alT89a9/zc6gjnj11Vfj6quvzs4AoMA1bNgwO4EFjPUBAAD1QUVFRXTs2DE7oyg88sgj2Ql8x7PPPhszZszIzihoJSUlsd1222VnQMH69NNP4/e//312RsG5/fbb48svv8zOICLWWmut7AQAAAAAAAAAgKJmuAcAAAAAAAAAAFhmw4cPj2+++SY7g2RVVVUxYsSI7AwAoBZ99dVX2QkAAACLtccee0SDBg2yMwreF198YbinjnrzzTezEwreRhttlJ0ABeuvf/1rVFVVZWcUnMrKynj11VezM4jwfSoAAAAAAAAAQDLDPQAAAAAAAAAAwDJ7/vnn4+GHH87OINmTTz4ZDz74YHYGAAAAAMC3bLzxxtkJReGNN97ITuAHjB8/Pjuh4K2//vrZCVCw7r777uyEgjV69OjsBAAAAAAAAAAASGe4BwAAAAAAAAAAqBFDhw6NOXPmZGeQZO7cuTFkyJDsDAAAAACA/2FQo3b8/e9/z07gBxhVWv46duyYnQAF6ZNPPokHHnggO6NgPfTQQ9kJAAAAAAAAAACQznAPAAAAAAAAAABQI8aNGxd33313dgZJ7r777hgzZkx2BgAAAADA/+jUqVN2QlEYPXp0dgI/4IUXXshOKHhrrLFGNGzYMDsDCo6/v5avF154ISZPnpydUfRWXHHF7AQAAAAAAAAAgKJmuAcAAAAAAAAAAKgxb731VnYCCaZPnx6DBg3KzgAAAAAA+B/NmjWLNdZYIzuj4H3zzTfx0EMPZWfwA0aPHh2zZs3KzihoZWVl0bNnz+wMKDiPP/54dkLBe/PNN7MTip7hHgAAAAAAAACAXIZ7AAAAAAAAAACAGlFWVhb9+vXLziDBCy+8EBMnTszOAKCINGnSJDuBBWbOnJmdAAAAsEjbb799NGjQIDuj4H300UcxY8aM7AwWwe/xl7+NNtooOwEKyuzZs+Pmm2/Ozih4b7zxRnYCAAAAAAAAAACkMtwDAAAAAAAAAADUiDPPPDPatWuXnUGC3r17R/fu3bMzAIAEK6ywQnYCAADAIvXo0SM7oSi8//772QkshuGe5a9Tp07ZCVBQxo0bF/PmzcvOKHgvv/xydgIAAAAAAAAAAKQy3AMAAAAAAAAAACyzZs2aRd++fbMzSLLCCivE2WefnZ0BQBH56quvshNYoGHDhtkJAAAAi9S5c+fshKLw9ttvZyewGB9++GF2QsFba621shOgoLz66qvZCUXhiSeeiPnz52dnAAAAAAAAAABAGsM9AAAAAAAAAADAMjv77LOjdevW2Rkk2mGHHWKHHXbIzgAAAAAA+JZOnTplJxSFf/3rX9kJLIbhnuWvffv22QlQUJ566qnshKIwadKk+PTTT7MzAAAAAAAAAAAgjeEeAAAAAAAAAABgmbRs2TIOO+yw7AySlZaWxrBhw7IzAAAAAAC+Ze21185OKAr/+Mc/shNYjA8++CA7oeCtttpq2QlQMObOnRsPPvhgdkbRmDBhQnYCAAAAAAAAAACkMdwDAAAAAAAAAAAskxEjRkRFRUV2BnXA5ptvbsQJAAAAAKgzevToEU2aNMnOKHjffPNN/O1vf8vOYDHeeuut7ISCt8oqq0T79u2zM6AgvPfeezFv3rzsjKLx73//OzsBAAAAAAAAAADSGO4BAAAAAAAAAACW2lprrRV9+vTJzqAOOe2007ITAIBa1KBBg+wEAACAH7TxxhtnJxSFTz/9NCorK7MzWIwxY8bE/PnzszMK3uabb56dAAXhX//6V3ZCUfnggw+yEwAAAAAAAAAAII3hHgAAAAAAAAAAYKmdffbZ0bx58+wM6pD1118/Tj311OwMAKCWNG7cODsBAADgB6233nrZCUVhypQp2QlUw7x58+LLL7/Mzih4/t6BmjF+/PjshKLyzjvvZCcAAAAAAAAAAEAawz0AAAAAAAAAAMBS6dKlS/ziF7/IzqAOOv744x3iD8ByNW/evOwEAAAA6oEOHTpkJxSFyZMnZydQTTNmzMhOKHjt2rXLToCCMHbs2OyEovL3v/89OwEAAAAAAAAAANIY7gEAAAAAAAAAAJbK8OHDjbPwvVZfffU466yzsjMAKGBff/11dgILlJZ6SToAAFB3GdCoHYZ76o/p06dnJxS8Nm3aZCdAvVdZWRlPPvlkdkZRee211+Kbb77JzgAAAAAAAAAAgBTeJQkAAAAAAAAAACyxzTbbLHbdddfsDOqwvn37OpwOAIpA06ZNsxMAAAB+0BprrJGdUBSmTJmSnUA1zZw5Mzuh4LVq1So7Aeq9//znPzFr1qzsjKIzderU7AQAAAAAAAAAAEhhuAcAAAAAAAAAAFhiw4YNi4YNG2ZnUIdVVFTEeeedl50BQIGaM2dOdgIL+J4QAACoq8rLy2PVVVfNzigK06ZNy06gmgxhLH/+3oFl95///Cc7oSgZ7gEAAAAAAAAAoFgZ7gEAAAAAAAAAAJbItttuG9tvv312BvXAvvvuG126dMnOAKAAVVZWZiewQKNGjbITAAAAvtdWW20VpaXeRlsbJk+enJ1ANRnuWf5atmyZnQD13sSJE7MTipIhPgAAAAAAAAAAilWD7AAAAAAAAAAAAKB+GTp0qMMOqZYmTZrEOeecE7vvvnt2CgCwnDRu3Dg7AQAA4HsZFa89PXv2jA4dOmRnUA1t27bNTih45eXlUVFREdOnT89OgXrro48+yk4oSv7eAgAAAAAAAACgWBnuAQAAAAAAAAAAqm3PPfeMnj17ZmdQj+y8887Rq1eveOqpp7JTACggM2fOzE5ggbKysuwEAACA77XWWmtlJxSNgw8+ODsB6pQePXrEE088kZ0B9dbEiROzE4rS1KlTsxMAAAAAAAAAACBFaXYAAAAAAAAAAABQf5x++ulRUlKSnUE9UlZWFsOHD8/OAKDAVFVVZSewQNOmTbMTAAAAvtdqq62WnQAUqY4dO2YnQL320UcfZScUpenTp2cnAAAAAAAAAABACsM9AAAAAAAAAABAtRx88MHRo0eP7AzqoZ49e0afPn2yMwAoILNnz85OYIEGDRpkJwAAAHyvVq1aZScARapdu3bZCVCvvf3229kJRWnGjBnZCQAAAAAAAAAAkMJwDwAAAAAAAAAAUC2nnXZadgL12MCBA7MTACggc+fOzU5ggUaNGkWzZs2yMwAAAP7Hqquump0AFKmWLVtmJ0C99o9//CM7oShNnz49OwEAAAAAAAAAAFIY7gEAAAAAAAAAABarf//+scEGG2RnUI916dIlTjzxxOwMAArEvHnzshNYSIcOHbITAAAA/ofhDCBLRUVFdgLUWzNnzozKysrsjKJkuAcAAAAAAAAAgGJluAcAAAAAAAAAAFik0tLSOOGEE7IzKAAnnnhilJWVZWcAUAC+/PLL7AQW0qZNm+wEAACAb6moqIjy8vLsDKBIGe6BpTdz5szshKLl9+4AAAAAAAAAABQrwz0AAAAAAAAAAMAinXrqqdGpU6fsDApA+/bt46yzzsrOAKAAzJs3LzuBhay66qrZCQAAAN/So0eP7ASgiK288srZCVBvGY8BAAAAAAAAAABqm+EeAAAAAAAAAADgB5WVlUX//v2zMyggRx11VLRs2TI7A4B6bvbs2dkJLGSVVVbJTgAAAPiWjh07ZicARay8vDw7AeqtuXPnZicULaNJAAAAAAAAAAAUK8M9AAAAAAAAAADADxo+fHi0a9cuO4MC0qJFixgxYkR2BgD1nAME65aKiorsBAAAgG9p3759dgJQxAz3wNIz2p7nq6++yk4AAAAAAAAAAIAUhnsAAAAAAAAAAIDvVV5eHkcccUR2BgXowAMPjHXXXTc7A4B67IsvvshOYCErrbRSdgIAAMC3rLbaatkJQBFbccUVsxOg3jIeAwAAAAAAAAAA1DbDPQAAAAAAAAAAwPc688wzo3Xr1tkZFKCmTZvGeeedl50BQD02Y8aM7AQWUlFRkZ0AAADwLS1btsxOAIpYs2bNonHjxtkZUC9VVlZmJxStyZMnZycAAAAAAAAAAEAKwz0AAAAAAAAAAMD/aNmyZRx22GHZGRSwXXfdNXr27JmdAUA9NX369OwEFrLKKqtkJwAAAHxLeXl5dgJQ5Dp37pydALBEvvnmm+wEAAAAAAAAAABIYbgHAAAAAAAAAAD4HyNGjIiKiorsDApYw4YN46yzzsrOAKCemjZtWnYCC2nRokV2AgAAwLestNJK2QlAkVtttdWyE6Bemj17dnYCAAAAAAAAAABQZAz3AAAAAAAAAAAA39KhQ4fo06dPdgZF4Gc/+1nstdde2RkA1ENTp07NTmAhBh8BAIC6xnAPkK158+bZCVAvVVVVZScAAAAAAAAAAABFxnAPAAAAAAAAAADwLcOHD3eYGLWipKQkBg8enJ0BQD30/vvvZyewEAdiAwAAdU15eXl2AlDk/L4EAAAAAAAAAAAA6gfDPQAAAAAAAAAAwH916dIl9t577+wMisjGG28cxxxzTHYGAPXM1KlT4+uvv87OYIGKiorsBAAAgG9ZccUVsxOAIme4BwAAAAAAAAAAAOoHwz0AAAAAAAAAAMB/nXXWWbHCCitkZ1Bkfv3rX0dpqZezAbBkZs6cmZ3AAg7EBgAA6pIOHTpEWVlZdgZQ5Jo1a5adAAAAAAAAAAAAAFSDkw4AAAAA+P/Y+/M4r+t6//9/zIwIIY64gOZCJJw0RUvDT0ckjiZW6DE1TUtTE7T0gFKoiArDNoC4JW65YLmhx31JIxWVECnREI6KuKMhgQgiAoIww++f8+trHkZnYGYe75n39Xq58M8s79dtvIwwy+v9vAMAAABARETsu+++ccghh2RnUIS++tWvRkVFRXYGAE2M4Z7CUVZWFl26dMnOAAAAiIiITp06ZScAROvWrbMTAAAAAAAAAAAAgFow3AMAAAAAAAAAAEREREVFRbRo0SI7gyJ16qmnRnl5eXYGAE3IsmXLshP4lK997WvZCQAAABER8eUvfzk7ASA222yz7AQAAAAAAAAAAACgFgz3AAAAAAAAAAAA0bNnzzjooIOyMyhi7du3j9GjR2dnANCEfPTRR9kJfMrOO++cnQAAABAREe3atctOAIg2bdpkJwAAAAAAAAAAAAC1YLgHAAAAAAAAAACIIUOGRGmp24nIdcIJJzj0H4Ba+/DDD7MT+JQdd9wxOwEAACAiItq2bZudABBf+tKXshMAAAAAAAAAAACAWnDSBgAAAAAAAAAAFLkjjjgiunfvnp0B0aZNmxg1alR2BgBNxAcffJCdwKd8+ctfzk4AAACIiIjWrVtnJwAY7gEAAAAAAAAAAIAmwnAPAAAAAAAAAAAUuUGDBkVJSUl2BkRExI9+9KPYZ599sjMAaAIWLVqUncCnbLfddtkJAAAAEWG4BygMhnsAAAAAAAAAAACgaTDcAwAAAAAAAAAARez44483kkJBadGiRVRWVmZnANAELF68ODuBT2nfvn12AgAAQEREtGnTJjsBAAAAAAAAAAAAAGgiDPcAAAAAAAAAAEARGzhwYHYC/B8HHnhgHHroodkZABS4+fPnZyfwKVtvvXV2AgAAQEREtG7dOjsBAAAAAAAAAAAAAGgiDPcAAAAAAAAAAECR6tu3b+y+++7ZGfB/lJaWxpAhQ7IzAChwhnsKy9Zbbx3l5eXZGQAAAPGlL30pOwEgNt100+wEAAAAAAAAAAAAoBYM9wAAAAAAAAAAQBEqLS2N/v37Z2dAjbp27Rp9+vTJzgCggL322mvZCXxKSUlJ7LffftkZAAAAhnuAgmC4BwAAAAAAAAAAAJoGwz0AAAAAAAAAAFCEzj777OjcuXN2BnyugQMHRmmp29wAWL/XX3891qxZk53Bp+y+++7ZCQAAAIZ7AAAAAAAAAAAAAIBac6IBAAAAAAAAAAAUmbKysujbt292Bnyhf/u3f4tBgwZlZwBQwBYvXpydwKd06tQpOwEAACBat26dnQAAAAAAAAAAAAAANBGGewAAAAAAAAAAoMgMHz48dtxxx+wMqJV+/fpFq1atsjMAKFBLlizJTuBTvvKVr2QnAAAARMuWLbMTAKJFixbZCQAAAAAAAAAAAEAtGO4BAAAAAAAAAIAiUl5eHn369MnOgFrbbrvt4oILLsjOAKBALV68ODuBTzEOCQAAFIJNN900OwHAiBgAAAAAAAAAAAA0EYZ7AAAAAAAAAACgiAwbNiy23Xbb7AyokxNPPNEQAADrtXDhwuwEPmW77bbLTgAAAAAAAAAAAAAAAAAAqDXDPQAAAAAAAAAAUCTatWsXP//5z7MzoM622GKLGDNmTHYGAAXovffey07gU7bZZhtjewAAQLpNNtkkOwEAAAAAAAAAAAAAaCIM9wAAAAAAAAAAQJGorKyMtm3bZmfABjnqqKNir732ys4AoMD8/e9/z07gMw444IDsBAAAoMi1bNkyOwEAAAAAAAAAAAAAaCIM9wAAAAAAAAAAQBHYeeed46c//Wl2Bmywli1bxsiRI7MzACgwb775ZnYCn7HnnntmJwAAAAAAAAAAAAAAAAAA1IrhHgAAAAAAAAAAKALDhw+PNm3aZGfARvnBD34Q3//+97MzACggL7zwQnYCn/G1r30tOwEAAAAAAAAAAAAAAAAAoFYM9wAAAAAAAAAAQDPXpUuXOOqoo7IzYKOVlpZGRUVFdgYABWTOnDmxatWq7Aw+pVOnTtkJAABAkSsrK8tOAAAAAAAAAAAAAACaCMM9AAAAAAAAAADQzI0YMSJatmyZnQH1Yt99943jjz8+OwOAAvLee+9lJ/ApHTp0yE4AAACKnJ+HAwAAAAAAAAAAAAC1ZbgHAAAAAAAAAACasX333TcOOeSQ7AyoV+eee252AgAFZNGiRdkJfEqbNm2ia9eu2RkAAAAAAAAAAAAAAAAAAF/IcA8AAAAAAAAAADRjFRUV0aJFi+wMqFe77rprnHXWWdkZABSI+fPnZyfwGT169MhOAAAAAAAAAAAAAAAAAAD4QoZ7AAAAAAAAAACgmerZs2ccdNBB2RnQIM4444xo1apVdgYABeDtt9/OTuAz9t577+wEAAAAAAAAAAAAAAAAAIAvZLgHAAAAAAAAAACaqSFDhkRpqVuEaJ523HHHGDFiRHYGAAXgzTffzE7gM77+9a9nJwAAAAAAAAAAAAAAAAAAfCGncgAAAAAAAAAAQDN0xBFHRPfu3bMzoEH16dMn2rVrl50BQLKXXnopO4HP6Ny5c3YCAAAAAAAAAAAAAAAAAMAX2iQ7AAAAAAAAAIDmp6qqKj744IPsDJqRVatWZSdAkzNo0KAoKSnJzoAGteWWW8aFF14YJ510UnYKAImmTZsW1dXVUVpamp3C/9p8883jgAMOiCeffDI7BQAAAAAAAAAAAAAAAACgRoZ7AAAAAAAAAKh38+bNi69+9avZGQBF6/jjj4999tknOwMaxY9//OO45JJL4sUXX8xOASDJihUr4v3334/27dtnp/ApPXr0MNwDAACkWL16dbRu3To7AwAAAAAAAAAAAABoAkqzAwAAAAAAAAAAgPo1cODA7ARoNK1bt47KysrsDACSvfvuu9kJfMaee+6ZnQAAABSpqqqq7AQAAAAAAAAAAAAAoIkw3AMAAAAAAAAAAM1I3759Y/fdd8/OgEZ1yCGHxAEHHJCdAUCit99+OzuBz/jGN76RnQAAAAAAAAAAAAAAAAAA8LkM9wAAAAAAAAAAQDNRWloa/fv3z86ARldWVhZDhw7NzgAg0euvv56dwGd89atfjQ4dOmRnAAAAAAAAAAAAAAAAAADUaJPsAAAAAAAAAAAAoH6cffbZ0blz5+wMSNGjR4845phj4o477shOASDBK6+8kp3AZ5SUlMQRRxwR48aNy06hyBx00EExYcKE7Iyic99998Uvf/nL7AwAgIiIWL16dXYCAAAAAAAAAAAAANBEGO4BAAAAAAAAAIBmoKysLPr27ZudAanOP/98wz0ARerpp5/OTmA9unXrZriHRrfHHnvENttsk51RdL70pS9lJwAA/NPatWuzEwAAAAAAAAAAAACAJqI0OwAAAAAAAAAAANh4w4cPjx133DE7A1J16dIlzjjjjOwMABLMmTMnPvroo+wMPmPPPffMTqAIdezYMTuhKPk7GAAAAAAAAAAAAAAAAGiKDPcAAAAAAAAAAEATV15eHn369MnOgIIwYMCAKCsry84AIMHf//737AQ+o3PnzrHddttlZ1Bkdtppp+yEorRq1arsBACAf/rkk0+yEwAAAAAAAAAAAACAJsJwDwAAAAAAAAAANHHDhg2LbbfdNjsDCkKHDh1ixIgR2RkAJHjjjTeyE/iMsrKy+MlPfpKdQZHZYYcdshOK0urVq7MTAAD+yaggAAAAAAAAAAAAAFBbhnsAAAAAAAAAAKAJa9euXfz85z/PzoCCcsopp8TWW2+dnQFAI3vllVeyE1iP/fffPzuBItOhQ4fshKK0dOnS7AQAgH/6+OOPsxMAAAAAAAAAAAAAgCbCcA8AAAAAAAAAADRhlZWV0bZt2+wMKCjbbLNNjB49OjsDgEY2a9as7ATWo2vXrtkJFJHtt98+2rVrl51RlD744IPsBACAf1q5cmV2AgAAAAAAAAAAAADQRBjuAQAAAAAAAACAJmrnnXeOn/70p9kZUJCOO+646Ny5c3YGAI3oySefjHXr1mVn8Bnbb7999OjRIzuDIrH//vtHSUlJdkZRev/997MTAAD+6eOPP85OAAAAAAAAAAAAAACaCMM9AAAAAAAAAADQRA0fPjzatGmTnQEFqXXr1nHBBRdkZwDQiObPnx/vvfdedgbrcfjhh2cnUCT22GOP7ISitWjRouwEAIB/WrVqVXYCAAAAAAAAAAAAANBEGO4BAAAAAAAAAIAmqEuXLnHUUUdlZ0BBO/TQQ6N79+7ZGQA0ojfffDM7gfXo1q1bdgJFokuXLtkJReudd97JTgAA+KeVK1dmJwAAAAAAAAAAAAAATYThHgAAAAAAAAAAaIJGjBgRLVu2zM6AgtaiRYsYPnx4dgYAjejll1/OTmA9vvGNb0S7du2yMygCu+yyS3ZCUVq7dq3hHgCgoCxfvjw7AQAAAAAAAAAAAABoIgz3AAAAAAAAAABAE7PvvvvGIYcckp0BTcL+++8fRxxxRHYGAI1k5syZ2QmsR8uWLeOkk07KzqCZKy8vj44dO2ZnFKWPPvooOwEA4F+sXLkyOwEAAAAAAAAAAAAAaCIM9wAAAAAAAAAAQBNTUVERLVq0yM6AJqGkpCQGDx6cnQFAI3niiSeyE6hBr169shNo5v7zP/8zNtlkk+yMovTBBx9kJwAA/IuPP/44OwEAAAAAAAAAAAAAaCIM9wAAAAAAAAAAQBPSs2fPOOigg7IzoEnZa6+94tRTT83OAKARzJ49OxYvXpydwXp07do1Nttss+wMmrH99tsvO6FoLVu2LDsBAOBfLFmyJDsBAAAAAAAAAAAAAGgiNskOAAAAAAAAAAAAam/IkCFRWlqanQFNzllnnRXXXXddVFdXZ6cA0MBef/312HrrrbMz+IzNNtssevfuHVdccUV2Cs3Ut771reyEovXBBx9kJwAA/ItFixZlJxSVN954Ix599NHsDCg48+fPz04AAAAAAAAAAAAAasFwDwAAAAAAAAAANBFHHHFEdO/ePTsDmqSdd945hgwZEsOHD89OAaCBvfjii/Htb387O4P16NWrl+EeGkRZWVnsvvvu2RlFy8H4AECh+cc//pGdUFTefvvt6Nu3b3YGAAAAAAAAAAAAAGyQ0uwAAAAAAAAAAACgdgYNGhQlJSXZGdBknXbaaVFeXp6dAUADe/bZZ7MTqEH37t1js802y86gGTriiCN8biVasGBBdgIAwL94/fXXsxMAAAAAAAAAAAAAgCbCcA8AAAAAAAAAADQBxx9/fOyzzz7ZGdCktW/fPkaNGpWdAUADe+ihh2LdunXZGaxHmzZtom/fvtkZNEPf/e53sxOK2vz587MTAAD+xdy5c6Oqqio7AwAAAAAAAAAAAABoAgz3AAAAAAAAAABAEzBw4MDsBGgWTjzxxOjYsWN2BgANaP78+fHOO+9kZ1CDww47LDuBZmi//fbLTihq8+bNy04AAPg/Pvroo+wEAAAAAAAAAAAAAKAJMNwDAAAAAAAAAAAFrl+/frH77rtnZ0Cz0KZNmxg9enR2BgANbM6cOdkJ1GCfffaJzp07Z2fQjHTo0CG+/vWvZ2cUtZdeeik7AQDg/1i2bFl2AgAAAAAAAAAAAADQBBjuAQAAAAAAAACAAlZaWhr9+/fPzqAGS5cujffff/9f/qxduzY7iy/wox/9KPbZZ5/sDAAa0MyZM7MTqMEmm2wSp556anYGzchPf/rT2GSTTbIzitbq1atj1qxZ2RkAAP/Hhx9+mJ0AAAAAAAAAAAAAADQBhnsAAAAAAAAAAKCAnX322dGpU6fsDNZj8eLFsfPOO0f79u3/5c/NN9+cncYX2HTTTWPkyJHZGQA0oMcffzw7gc9xyCGHZCfQjPTs2TM7oagtWrQoOwEAYL0M9zSeNm3aZCcAAAAAAAAAAAAAwAYz3AMAAAAAAAAAAAWqrKws+vXrl51BDW688cZYunTp/3l5RUXFel9OYenZs6fRAIBmbNKkSQ5pLmC77LJLHHbYYdkZNAObbbZZ/Pu//3t2RlFbsGBBdgIAwHotW7YsO6FolJZ6qjIAAAAAAAAAAAAATZe7YQEAAAAAAAAAoECNGDEidthhh+wM1mPhwoUxZMiQ9b5u/vz5cfvttzdyEXVVWloaQ4cOzc4AoAG99NJL2Ql8jpNPPjk7gWbg5JNPjs022yw7o6j94x//yE4AAFiv9957LzuhaLRu3To7AQAAAAAAAAAAAAA2mOEeAAAAAAAAAAAoQOXl5dGnT5/sDGpw/fXXx6pVq2p8fUVFRSxevLgRi9gQXbt2jd69e2dnANBAZsyYkZ3A5zjwwANjxx13zM6giTvkkEOyE4re3LlzsxMAANZr/vz52QlFY9NNN81OAAAAAAAAAAAAAIANZrgHAAAAAAAAAAAK0PDhw6N9+/bZGazHvHnzYvjw4Z/7NosXL45bbrmlkYrYGAMHDozSUrfSATRHU6ZMyU7gc7Rq1Sp+9atfZWfQhG299dbRrVu37Iyi9+qrr2YnAACs19tvv52dUDTatGmTnQAAAAAAAAAAAAAAG8xpAwAAAAAAAAAAUGDatWsXJ554YnYGNbjqqquiqqrqC99uyJAhsXDhwkYoYmN87Wtfi0GDBmVnANAAHnjggVixYkV2Bp/jyCOPzE6gCTv99NOjdevW2RlFb9asWdkJAADr9eabb2YnFA1flwMAAAAAAAAAAADQlBnuAQAAAAAAAACAAjNq1Kho27Ztdgbr8cYbb8RFF11Uq7ddsWJF3HjjjQ0bRL3o27dvtGrVKjsDgHq2Zs2aeOmll7Iz+Bxf+cpX4he/+EV2Bk3UYYcdlp1Q9D755JOYNm1adgYAwHo9++yz2QlFY7PNNstOAAAAAAAAAAAAAIANZrgHAAAAAAAAAAAKSOfOneMnP/lJdgY1uPLKK6O6urrWb19RURHvvvtuAxZRH7785S/HmDFjsjMAaADPPPNMdgJf4Je//GV2Ak1Q9+7dY88998zOKHrz58+v0/dHAACNadmyZfHhhx9mZxSFsrKy6NixY3YGAAAAAAAAAAAAAGwQwz0AAAAAAAAAAFBAhg0bFm3atMnOYD1mz54d48aNq9P7rFmzJsaPH99ARdSnE088MXbcccfsDADq2aRJk7IT+AJ77bVXHH744dkZNDGnnXZalJSUZGcUvbfeeis7AQDgc73//vvZCUXj61//enYCAAAAAAAAAAAAAGwQwz0AAAAAAAAAAFAgunTpEkceeWR2BjX4zW9+s0HvN3LkyJg7d279xlDv2rZtG6NGjcrOAKCe/eEPf4gPP/wwO4Mv0L9//+wEmpDy8vI45JBDsjOIiNdffz07AQDgcy1atCg7oWjstNNO2QkAAAAAAAAAAAAAsEEM9wAAAAAAAAAAQIEYOXJktGzZMjuD9Zg5c2bccMMNG/S+1dXVce2119ZzEQ3h6KOPjr322is7A4B6NmvWrOwEvkD37t2jW7du2Rk0EQMHDozy8vLsDCJi9uzZ2QkAAJ9r4cKF2QlFY/vtt89OAAAAAAAAAAAAAIANYrgHAAAAAAAAAAAKQLdu3eLggw/OzqAGF1xwwUa9/9ixY+O1116rpxoaSsuWLWPEiBHZGQDUs2nTpmUn8AXKyspi0KBB2Rk0Ecccc0x2Av/rr3/9a3YCAMDn+sc//pGdUDQM9wAAAAAAAAAAAADQVBnuAQAAAAAAAACAAlBRUREtWrTIzmA9nnnmmbjzzjs3+nGuuuqqeqihof3gBz+Igw46KDsDgHp09913ZydQC7169Yru3btnZ1DgTj311OjUqVN2BhHx4YcfxjPPPJOdAQDwud54443shKKxww47ZCcAAAAAAAAAAAAAwAYx3AMAAAAAAAAAAMl69uwZPXv2zM5gPdatWxejRo2ql8e6/PLLY/bs2fXyWDScsrKyGDZsWHYGAPVoxowZMXfu3OwMvkBZWVkMGTIkO4MC91//9V/ZCfyvt956KzsBAOALzZo1KzuhaGy//fbZCQAAAAAAAAAAAACwQQz3AAAAAAAAAABAsoqKiigtdStPIfrzn/8cDz30UL093rhx4+rtsWg4++67bxx33HHZGQDUo+nTp2cnUAsHHnigQUtqdPzxx0eXLl2yM/hfr7zySnYCAMAXmjp1alRVVWVnFIVtt902OwEAAAAAAAAAAAAANojTPgAAAAAAAAAAINGPfvSj2G+//bIzWI+qqqoYPXp0vT7m9ddfHzNnzqzXx6RhnHfeedkJANSjJ554IjuBWigtLY3BgwdnZ1Cg+vfvn53Ap/zP//xPdgIAwBdatWpVLFy4MDujKLRv3z7Ky8uzMwAAAAAAAAAAAACgzgz3AAAAAAAAAABAokGDBkVJSUl2Buvx2GOPxaRJk+r9cS+99NJ6f0zq39e//vU466yzsjMAqCcTJkyIlStXZmdQC9/5znfi6KOPzs6gwPTu3Tv23nvv7Aw+ZfLkydkJAAC1Mm/evOyEolBaWhoHHnhgdgYAAAAAAAAAAAAA1JnhHgAAAAAAAAAASHL88cdH165dszNYjzVr1sTIkSMb5LFvvfXWmD59eoM8NvXrjDPOiBYtWmRnAFAPVqxYETNmzMjOoBZKSkpi2LBhUVrqVnf+P2effXZ2Ap+yZMmS+Mtf/pKdAQBQK3//+9+zE4rGnnvumZ0AAAAAAAAAAAAAAHXm2YwAAAAAAAAAAJDknHPOyU6gBhMnTmzQg6gvvvjiWLduXYM9PvVjxx13jMrKyuwMAOrJk08+mZ1ALe26664xZMiQ7AwKxJlnnhm77LJLdgafMmfOnOwEAIBae+ONN7ITisbXvva17AQAAAAAAAAAAAAAqDPDPQAAAAAAAAAAkKBfv36x2267ZWewHqtXr47Bgwc36DXuvvvuePrppxv0GtSPk08+Odq1a5edAUA9mDBhQlRXV2dnUEv9+vWL7bbbLjuDZOXl5TFgwIDsDD7jpZdeyk4AAKi11157LTuhaBjcBAAAAAAAAAAAAKApMtwDAAAAAAAAAACNrLS0NPr375+dQQ3uu+++ePHFFxv8OmPHjjUe0ARsueWWccEFF2RnAFAPXn311Xj55ZezM6ilrbfeOi6++OLsDJJdfPHF8eUvfzk7g8+YOnVqdgIAQK0988wz2QlFo1OnTtkJAAAAAAAAAAAAAFBnhnsAAAAAAAAAAKCRnX322Q6wK1ArV66MioqKRrnWww8/HJMnT26Ua7FxjjnmmOjSpUt2BgD14KmnnspOoA6OPvroOOSQQ7IzSNK1a9f42c9+lp3BZ3zyySdx7733ZmcAANTaiy++GEuXLs3OKApbbLFFdO/ePTsDAAAAAAAAAAAAAOrEcA8AAAAAAAAAADSisrKy6NevX3YGNbjjjjvi9ddfb7TrjRkzJqqqqhrtemyY1q1bx4gRI7IzAKgHt912W3YCdbDJJpvEJZdcEmVlZdkpJPjNb34TrVq1ys7gM1555ZVYsWJFdgYAQJ289dZb2QlFY//9989OAAAAAAAAAAAAAIA6MdwDAAAAAAAAAACNaMSIEbHDDjtkZ7Aey5Yti6FDhzbqNR9//PF47LHHGvWabJhDDz3UoZMAzcDUqVMbdaSPjfe1r30tLrvssuwMGtk555wT++23X3YG6/H8889nJwAA1Nmrr76anVA0vv3tb2cnAAAAAAAAAAAAAECdGO4BAAAAAAAAAIBGUl5eHn369MnOoAYTJkyIefPmNfp1KysrY82aNY1+XeqmrKwshg0blp0BQD2YMmVKdgJ1dPLJJ8d3vvOd7AwaSefOnWPgwIHZGdRg2rRp2QkAAHX20ksvZScUjS5dumQnAAAApGjbtm12AgAAAAAAAAAbyHAPAAAAAAAAAAA0kuHDh0f79u2zM1iPxYsXR0VFRcq1p02bFhMnTky5NnXzne98J44++ujsDAA20u23356dQB21bNkyrrrqqigrK8tOoRH89re/jS233DI7g/X45JNP4r//+7+zMwAA6uyvf/1rdkLR6NChQ+y6667ZGQAAAI1um222yU4AAAAAAAAAYAMZ7gEAAAAAAAAAgEbQrl27OPHEE7MzqMFNN90UixcvTrv+iBEjYvXq1WnXp3ZKSkri/PPPz84AYCM9/vjj8dZbb2VnUEddunSJ6667LjuDBjZkyJA48MADszOowUsvvRTLli3LzgAAqLMnnngiVq1alZ1RFEpKSoyfAwAARalVq1bZCQAAAAAAAABsIMM9AAAAAAAAAADQCEaNGhVt27bNzmA9Fi5cGIMHD05tmDFjRjz44IOpDdTOHnvsEaeffnp2BgAb6cknn8xOYAOccMIJcfzxx2dn0EC6desW55xzTnYGn2P69OnZCQAAG6S6ujrmzp2bnVE0evTokZ0AAADQ6HbYYYfsBAAAAAAAAAA2kOEeAAAAAAAAAABoYJ07d46f/OQn2RnU4Prrr49Vq1ZlZ8Tw4cNj5cqV2RnUwoABA6KsrCw7A4CNcOONN2YnsAHKysrioosuio4dO2anUM9atWoV48ePj9atW2en8DkeeeSR7AQAgA322muvZScUjW9961tRWurpywAAQHHZfvvtsxMAAAAAAAAA2EDufAUAAAAAAAAAgAY2bNiwaNOmTXYG6zFv3rwYPnx4dkZERMyePTvuu+++7Axq4Stf+UrBfN4AsGGmTp0ar7zySnYGG6B9+/Zx6623OgS6mbn99ttj1113zc7gcyxZsiTuv//+7AwAgA02e/bs7ISiscUWW8Rxxx2XnQEAANCodthhh+wEAAAAAAAAADaQZysCAAAAAAAAAEAD6tKlSxx55JHZGdTgqquuiqqqquyMfxo6dGgsX748O4Na+MUvfhFt27bNzgBgIzzyyCPZCWygbt26xfXXX5+dQT0ZOnRoHHbYYdkZfIFnn302OwEAYKNMmTIlO6Go+BofAAAoNttss012AgAAAAAAAAAbyHAPAAAAAAAAAAA0oJEjR0bLli2zM1iPN954Iy666KLsjH/x5ptvxp133pmdQS1ss802ccEFF2RnALARfv/73xfUgB918/Of/zzOPPPM7Aw20tFHHx3nnntudga18MQTT2QnAABslEceecRoeiPq3r17dgIAAECj2nbbbbMTAAAAAAAAANhAhnsAAAAAAAAAAKCBdOvWLQ4++ODsDGpw5ZVXRnV1dXbG/1FRURFLly7NzqAWjjvuuOjcuXN2BgAbaNasWTFz5szsDDZQSUlJjBgxInr16pWdwgbq1q1bXHPNNbHppptmp/AF1q5dGxMmTMjOAADYKNXV1TFnzpzsjKLRvn37OO6447IzAAAAGk3Hjh2zEwAAAAAAAADYQIZ7AAAAAAAAAACggVRUVESLFi2yM1iP2bNnx7hx47Iz1mv+/Plx++23Z2dQC5tttlmMGTMmOwOAjXD//fdnJ7ARvvSlL8UNN9wQXbp0yU6hjjp27Bi33XZbtG3bNjuFWvif//mfmD9/fnYGAMBGmzVrVnZCUfnpT3+anQAAANBodtppp+wEAAAAAAAAADaQ4R4AAAAAAAAAAGgAPXv2jJ49e2ZnUIPLLrssO+FzVVRUxOLFi7MzqIUf/vCH0a1bt+wMADbQVVddFcuXL8/OYCNst912cffdd8d2222XnUIttWvXLh588MHo0KFDdgq19Pjjj2cnAADUi2nTpmUnFJX9998/tt566+wMAACARrHddttFeXl5dgYAAAAAAAAAG8BwDwAAAAAAAAAANICKioooLXV7TiGaOXNmjB8/Pjvjcy1evDhuueWW7AxqoUWLFjFixIjsDAA20NKlS2Py5MnZGWykr33ta/Hggw86DK0JKC8vj4cffji6dOmSnUItrVu3Lm677bbsDACAenHffffF2rVrszOKRuvWreP000/PzgAAAGgUpaWl8b3vfS87AwAAAAAAAIAN4GQQAAAAAAAAAACoZz/60Y9iv/32y86gBmPHjs1OqJUhQ4bEwoULszOohQMOOCAOP/zw7AwANtCtt96anUA96Nq1a/zhD3+IFi1aZKdQgxYtWsRDDz0UXbt2zU6hDl5++eWYNWtWdgYAQL1YunRpvPHGG9kZReWYY47JTgAAAGg03/nOd7ITAAAAAAAAANgAhnsAAAAAAAAAAKCeDRo0KEpKSrIzWI9nnnkm7rjjjuyMWlmxYkXceOON2RnUQklJSQwePDg7A4ANdOedd8bbb7+dnUE9+M53vhOPPfaY8Z4CVF5eHk8++WR07949O4U6euKJJ7ITAADq1QsvvJCdUFR22WUX4z0AAEDR6Nq1a3YCAAAAAAAAABvAcA8AAAAAAAAAANSj448/3iEMBWrdunUxatSo7Iw6qaioiHfffTc7g1rYe++945e//GV2BgAb6IEHHshOoJ706NHDeE+Badu2bUyaNCm6deuWnUIdrVu3Lm6++ebsDACAevXMM89kJxSdU089NTsBAACgUXTp0iVKSx3nBAAAAAAAANDUbJIdAAAAAAAAAAAAzck555yTnUANpkyZEg899FB2Rp2sWbMmxo8fH0OHDs1OoRbOOuusuP7666O6ujo7BYA6uuyyy+LUU0+NTTfdNDuFetCjR4+YPHly9OrVK5YtW5adU9R23nnneOCBB2L33XfPTmEDvPTSS/Hcc89lZwAA1Kt77rknxo4d6yDlRvSd73wnunfvHlOnTs1O4TO23nrrOPnkk7Mzmp2VK1fGFVdckZ0BAECCzTffPA4//PC49957s1MAAAAAAAAAqAPDPQAAAAAAAAAAUE/69esXu+22W3YG61FdXR2jRo3KztggI0eOjBNPPDE6duyYncIX6NSpUwwePDhGjBiR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qsrOaHSVlZWxZs2a7AxqoW3btlFZWZmdAUAdDR8+PN57773sDApIaWlpdO3aNSorK+Ott96K6dOnx4UXXhh77bVXdlqNysrK4rjjjosbb7wxXn755fjrX/8a/fr1i1133TVKSkqy80h26623ZicAAKS67bbbshOIiK222iruueee6Nq1a3ZKs3DsscfGhRde6Hu+RvLcc89lJwAA/JPhnsK3+eabx+WXXx4PPPBAdOjQITsHAAAAAAAAoOgZ7gEAAAAAAAAAgFqqqKiI0lK33BSiN998My666KLsjBTTpk2LiRMnZmdQS0cffXR84xvfyM4AoA5WrVoVEyZMyM6gQLVo0SK6du0aZ511Vjz33HMxd+7ceOihh2LYsGHRrVu3tK527dpF796947rrrou//OUv8cEHH8Qtt9wSJ5xwQuyyyy4ObuaflixZEqNHj87OAABI9cADD8Tbb7+dnUFEbLvttnHPPff4GepGOvzww+O3v/1tbLrpptkpReOJJ57ITgAA+Kfly5dnJ1BLhx56aDz//PMxZsyYaNWqVXYOAAAAAAAAQNHaJDsAAAAAAAAAAACagh/96Eex3377ZWdQgyuuuCKqq6uzM9KMGDEivv/970fLli2zU/gCrVq1isrKyjj00EOzUwCog/PPPz+OPfbY2HbbbbNTKGAlJSXRoUOH6NChQxx88MFRUVERS5YsiXfeeSfmzp0br732WsyZMydmzJgRL7zwQr18/dqlS5fYbbfdolOnTrHrrrvGV7/61fjKV74S22+/fZSVldXDR0Vzd8cdd8SqVauyMwAA0j366KNxyimnZGcQETvttFP86U9/ih//+McxderU7Jwm57jjjourr746Nt988+yUorFy5UqjzwBAQVm9enV2AnWw5ZZbxjnnnBM/+9nP4vbbb4+xY8fG4sWLs7MAAAAAAAAAiorhHgAAAAAAAAAAqIVBgwZFSUlJdgbrMXv27Bg3blx2RqoZM2bEgw8+GD/+8Y+zU6iFH/zgB9GzZ8+YNGlSdgoAtbRq1aq48cYb45xzzslOoYnZaqutYquttopvfvOb//LyqqqqWLZsWSxZsiSWLl0aH374YVRVVcXHH38ca9eujY8//jgiIlq0aBGtWrWKiIjy8vLYfPPNY/PNN482bdrENttsE5tuumljf0g0I8uXL4+RI0dmZwAAFITx48fHySef7PcABWLbbbeN+++/P04++eS4//77s3OajDPOOCPGjh0bLVu2zE4pKjNmzIg1a9ZkZwAA/JOx9qZphx12iLPOOitOPfXUePLJJ+Puu++OCRMmRHV1dXYaAAAAAAAAQLNnuAcAAAAAAAAAAL7A8ccfH127ds3OoAaXXXZZdkJBGD58eBxyyCHRunXr7BS+QFlZWQwfPtxwD0ATU1FRET/72c9ihx12yE6hGSgrK4stt9wyttxyy+wUitidd94ZCxYsyM4AACgIzz77bMycOTP22muv7BT+11ZbbRW33XZbDB48OC699NLsnII3bty46Nevn/GpBI8++mh2AgDAv1i2bFl2AhuhTZs2ceihh8ahhx4al112WcyYMSOeeeaZePrpp2PSpEkpo5G77rpr7LnnntGpU6fo0KFDvPTSS3HllVc2egcAAAAAAABAQzHcAwAAAAAAAAAAX+Ccc87JTqAGM2fOjPHjx2dnFITZs2fHfffdF8cdd1x2CrWw7777xnHHHRcTJkzITgGgltasWRPjx4+PoUOHZqcAbLSVK1fG6NGjszMAAArKPffcY7inwLRq1Souuuii2H333eOUU06J6urq7KSCs/3228eECRPiP/7jP7JTitKaNWvixhtvzM4AAPgXS5cuzU6gnmy55ZZx4IEHxoEHHhgREZ988km89dZbMXfu3FiwYEEsWLAg3n333Zg3b14sWbIkVq9eHYsXL44PP/wwqqurY8stt/znY2222WaxxRZbRETEl770pWjbtm1sscUWseWWW8bmm28ebdq0ifLy8thmm21iq622iq222uqfr2/VqtW/dE2YMMFwDwAAAAAAANCsGO4BAAAAAAAAAIDP0a9fv9htt92yM6jBRRddlJ1QUIYOHRqHHXZYtGnTJjuFWjj33HMN9wA0MSNHjowTTjghvvrVr2anAGyU++67L958883sDACAgnLllVfGwIEDo7y8PDuFTykpKYmTTjop9t577/j5z38es2bNyk4qGMcee2xcdNFF8eUvfzk7pWjNnDkz5s2bl50BAPAvlixZkp1AA9l0001jl112iV122SU7BQAAAAAAAKBZKc0OAAAAAAAAAACAQlVaWhr9+/fPzqAG06dPj9tvvz07o6C8+eabceedd2ZnUEu77bZbnHnmmdkZANRBdXV1XHLJJdkZABtl+fLlMWTIkOwMAICCs2zZsnj88cezM6jBN77xjZg8eXKce+652Snptt566/jv//7vuOmmm4z2JHvssceyEwAA/o/33nsvOwEAAAAAAAAAmhTDPQAAAAAAAAAAUIOzzz47OnXqlJ3Beqxbty4qKyuzMwpSRUVFLF26NDuDWurfv3+UlZVlZwBQB1dffXU8//zz2RkAG+zOO++MuXPnZmcAABSk3/72t9kJfI4tttgiRo0aFU8//XR07do1O6fRlZaWxpAhQ+Kll16Ko48+2s+Wk1VVVcWtt96anQEA8H8sWrQoOwEAAAAAAAAAmhTDPQAAAAAAAAAAsB5lZWXRr1+/7AxqMGXKlHjooYeyMwrS/Pnz4/bbb8/OoJZ23HHHGDVqVHYGAHVUWVkZ69aty84AqLNly5bFsGHDsjMAAArWpEmTYtasWdkZfIF99903pkyZEjfccENsvfXW2TmNonfv3vHyyy/H8OHDo3379tk5RMTf/va3mDNnTnYGAMD/8Y9//CM7AQAAAAAAAACaFMM9AAAAAAAAAACwHiNHjowddtghO4P1qK6uNnTyBSoqKmLx4sXZGdTSySefHO3atcvOAKAO7rvvvnjiiSeyMwDq7Kabbop58+ZlZwAAFDTD6E1Dq1at4qSTToo5c+bEpZdeGuXl5dlJ9a60tDROP/30mDlzZowfPz7+7d/+LTuJT7nvvvuyEwAA1mvGjBnZCQAAAAAAAADQpBjuAQAAAAAAAACAzygvL4/evXtnZ1CDxx57LCZNmpSdUdAWL14ct9xyS3YGtbTVVlvFmDFjsjMAqKNzzjknVq1alZ0BUGsLFiyI8847LzsDAKDg/eY3v4n3338/O4Na2nrrreNXv/pVvPHGG3H55ZdHhw4dspM22vbbbx9jxoyJt956K8aNGxd77rlndhKf8dFHH8WVV16ZnQEAsF6LFy+Ojz76KDsDAAAAAAAAAJoMwz0AAAAAAAAAAPAZI0aMiPbt22dnsB5r1qyJUaNGZWc0CUOGDImFCxdmZ1BLP/nJT2K33XbLzgCgDmbMmBETJkzIzgCotauvvjpWrFiRnQEAUPDWrFkT9957b3YGdbT11ltHv3794uWXX4777rsvDj/88OykOikrK4u+ffvG448/Hm+88Uacc845sdNOO2VnUYMnn3zS91cAQEEzRgoAAAAAAAAAtWe4BwAAAAAAAAAAPqVdu3ZxwgknZGdQg4kTJ8bUqVOzM5qEFStWxI033pidQS21bt06KisrszMAqKOzzz7bUB7QJLz22msxevTo7AwAgCbjwgsvjFWrVmVnsAG+9KUvxWGHHRb33ntvvPXWW3HttdfGgQcemJ21Xh07doxzzz03HnnkkVi0aFFcccUVccABB0TLli2z0/gCxpwBgEL33nvvZScAAAAAAAAAQJNhuAcAAAAAAAAAAD5l9OjR0bZt2+wM1mP16tUxdOjQ7IwmpaKiIt59993sDGrp0EMPjR49emRnAFAHS5cujUsvvTQ7A+ALVVZWRnV1dXYGAECT8eabb8ajjz6ancFG+spXvhKnnHJKPPbYYzFv3ry455574swzz4xdd901pWfvvfeOgQMHxu233x4vvvhivPbaazFq1Kg46KCD/G6qCZk7d27cdddd2RkAAJ/LcA8AAAAAAAAA1N4m2QEAAAAAAAAAAFAoOnfuHMccc0x2BjV44IEHYtasWdkZTcqaNWti/PjxBo+aiLKyshg+fHgccMAB2SkA1MFFF10UxxxzTOy9997ZKQDrNXny5LjllluyMwAAmpxLLrkk/vM//zNKS0uzU6gH22+/fRxxxBFxxBFHxIUXXhjz5s2LN998M1599dV46aWX4oUXXojp06fHihUrNuo6LVq0iH322Sf22GOP+Ld/+7f46le/GjvuuGN06tQpttpqq3r6aMh0xx13ZCcAAHyhefPmZScAAAAAAAAAQJNhuAcAAAAAAAAAAP7XsGHDok2bNtkZrMfKlStj8ODB2RlN0siRI+PEE0+Mjh07ZqdQCz169Igf//jHcdddd2WnAFAHZ511VjzyyCPRokWL7BSAf/HJJ5/Eueeem50BANAkPfXUUzFlypTYf//9s1OoZyUlJbHTTjvFTjvtFP/xH//xz5evW7culixZEkuXLo2PPvooli1bFsuXL4+1a9fGunXr4uOPP47WrVtHRMRmm20WJSUl8aUvfSnatm0bW2yxRWy++eax+eabZ31YNIKPPvooLr744uwMAIAv9Morr2QnAAAAAAAAAECTYbgHAAAAAAAAAAAiokuXLnHkkUdmZ1CDu+66K15//fXsjCapuro6rr322hgzZkx2CrVQUlIS559/vuEegCZm8uTJcdttt8WJJ56YnQLwL2699dZ45plnsjMAAJqsSy+9NP7jP/4jSkpKslNoBCUl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N96II488Mqqrq7NTAACohdmzZ8f5558f69aty04BvkBVVVWceeaZficCABSVe++9NzsBAAAAAAAAAAqO4R4AAAAAAAAAAJql7t27R69evbIzqMEDDzwQzz//fHYG6zF//vy4/fbbszOog29/+9tx0kknZWcAsJGOOOKImDVrVnYGUEAWL14cP/3pT2PRokXZKQAA1ME111wTd911V3YG8AWuu+46/68CAEXnsssuiwULFmRnAAAAAAAAAEBBMdwDAAAAAAAAAECzNHjw4GjRokV2BuuxcuXKGDx4cHYGn6OioiIWL16cnUEdDBw4MDsBgI20atWqOPLII2PevHnZKUAB+Pjjj6N3797x3HPPZacAALAB+vTpE6+//np2BlCDZ555Jk4//fTsDACARldVVWW8EAAAAAAAAAA+w3APAAAAAAAAAADNTs+ePaNnz57ZGdTgrrvucmBhgVu8eHHccsst2RnUwS677BLnnHNOdgYAG+nNN9+M4447Lj744IPsFCBRVVVVnHnmmfGHP/whOwUAgA20YsWK6N27d6xYsSI7BfiMRYsWxYknnhjV1dXZKQAAKS666KJYuXJldgYAAAAAAAAAFAzDPQAAAAAAAAAANDsVFRVRWurWmEK0fPnyGDJkSHYGtTBkyJBYuHBhdgZ1cPrpp0erVq2yMwDYSE899VScfPLJ8fHHH2enAEkuuOCCuOaaa7IzAADYSFOnTo0hQ4bEunXrslOA/1VVVRUDBgyIV199NTsFACDNvHnz4pFHHsnOAAAAAAAAAICC4XQSAAAAAAAAAACalaOOOir222+/7AxqcMstt8S8efOyM6iFFStWxI033pidQR1sv/32UVlZmZ0BQD247777on///rFmzZrsFKCR/fa3vzV2CgDQjFx22WVx++23Z2cA/+uqq66KCRMmZGcAAKSrrKyM1atXZ2cAAAAAAAAAQEEw3AMAAAAAAAAAQLMycODAKCkpyc5gPZYsWRLDhg3LzqAOKioq4t13383OoA569+4d22+/fXYGAPVg/PjxMXTo0Fi3bl12CtBIbr/99ujbt292BgAA9ezEE0+M5557LjsDit4f//jH+NWvfpWdAQBQEJ5//vl48MEHszMAAAAAAAAAoCAY7gEAAAAAAAAAoNk44YQTomvXrtkZ1ODmm2+ORYsWZWdQB2vWrInx48dnZ1AHbdu2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L14c06ZNiyeffDKamppST6KXO378eKxevTpKS0vjrrvuihMnTqSeBAAAPVZnZ2esXLkyJk+eHLfeemvs2LEjOjs7U88ioa6urti5c2fceeedH4adhFIBAPi07dmzJ+69996YN29ejBo1Ku644454+umn480334wzZ86kngcAAAAAAABADybcAwAAAAAAAABAUl/84hdj0aJFqWfwMXbt2hUbN25MPYNe4Oc//3ns378/9QzO09e//vWYPXt26hkA9FC1tbVx++23x8SJE2PVqlVRW1ubehK9TFVVVfz4xz+OSy65JJYuXRrNzc2pJwEAQK/yy1/+MubNmxcLFiyIX/3qV665M9PQ0BDPPPNMXHnllXH55ZfHunXrUk8CAICIiGhra4snnngibrnllqioqIgRI0bEN7/5zVi3bl3s2LEj/vGPf6Se2Ou0t7dHVVVVbN68OZ577rnUcwAAAAAAAAD+o/qlHgAAAAAAAAAAQN7uu+++6NfP31i6o66urvjpT3+aega9yMMPP+zGfj3MwIEDY/ny5XHttdemngJAD9bY2Bh333133HPPPfG9730vFi9eHNOnT089ix6qs7Mzdu3aFevXr4+nnnoq9RwAAMjC1q1bY+vWrVFUVBRLly6NG264IS699NLUs7gA2tvbY+fOnfHss8/GY489Fh0dHaknAQDA/6mtrS02bdoUmzZt+vBYaWlpLFy4MGbOnBlTp06NSy65JEpKSmLAgAEJl/YMra2t8e6778ahQ4fi73//e7zxxhvx/PPPR2NjY+ppAAAAAAAAABeEO54AAAAAAAAAAJDMVVddFVdeeWXqGXyMbdu2xW9/+9vUM+hFnnjiiViyZElUVFSknsJ5uPrqq+Oaa66JP/zhD6mnANDDdXZ2xkMPPRQPPfRQXHvttXHHHXfEVVddFYWFhamn0QM0NzfH73//+3j00Udj+/btqecAAECWmpubY9myZbFs2bKYP39+3HbbbXH11VfHqFGjUk/j/6GrqysOHjwYL730Ujz++OOxf//+1JMAAOD/7dChQ7F27dqPHOvbt2/MmzcvZs2aFZMnT46JEyfGxRdfHGPGjIkxY8ZEv3753Iqpubk56uvr49ixY1FTUxPvvPNOVFdXx969e2PPnj2p5wEAAAAAAAB8qvL5tRgAAAAAAAAAgG7nvvvui4KCgtQz+Cc6OztjxYoV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"
				), a5L(7, "youtube", 7,
				"iVBORw0KGgoAAAANSUhEUgAAAKEAAAAkCAMAAADW8qrvAAAANlBMVEX+AgDxYgDjhgD/eXnQpAC7vAD/oaMA/wClzwCH4QAx/zdf/1ty/3Sf/6D/3d2+/77d/93///85QMf8AAACr0lEQVRYw8WYWbaDIAxAsdVqAzzi/jf7GBIGZxxO89GiUbgGEkJEH+Q7DF3bti8rjRPhxTftLavpuuH77X8gwv10BLQrTfsEpHECG4TwEhUy0ItKW1Gh7Zp6AwF0KRP16GSLsApQCLKidt1igE3NZZFjKZWEXR2gaMguaSwPa54jbCoJ2Yjo+lWxpR8jhFpA0dH6jlzbIzhCdOIf8606wm814atPq8+whXDXY+WS+Y4QDtWETdYxHlmGFwm7akLRZwsRaLrVc4TtAsL7vUkIWbxRRBrCngu9xArSinvS/cuccKYhQpletjrXl3ZasRQNP+Pfe9+ZZZhd4EnW5KmYHNxwVFIZ4UwTCP1U0GqhC3+5QjiOn11CPxQGj9EJ0Io8QchM6fMIcZVw/PvsEfpOAxkUMQ9PEObvZh87KtGsEY6rU81bs46zg4SLoNiI1YRaYvGECl2aLcI1Rib0Q2gM42HuN7qeUFOEtV8HZMvwv2ikTzLyZ4PQj2WK5U62NCc8Jd2ImcghwiUzRkI/wWHcOD7nPCcI2ZhxC/BPXiJUaXWrOwjxDOHmLLMXxlhzD6EpCbc9ZdOXadF5172dEJUK83Il2jBXCmE3Eka5ErF5EPMbwgO7Xp5e30+IJBcyh2cJzQ3ZV0GoniM8n8HeTziN2DZH1PrCKaAghCd2PZ/enT9JlYQ9D8dHQFNPqMYskUuEp0+jE0IaVxakCJQt54SswYIQZci+MGVfwZaitihSuHJGSMF7MQstCWea4tpM+tKiHy4sw7zcgMWoNIdOOyWcaRIOnSAAs5T7dGVpRpi61dmOOCqYEs403nQqf1dyXwjnq3NZXU5yMmbsFmA0ZJdGhmeAS3RJA1ET6nyg7c14GtW+L8UVzuEo4zMVzgM1WKoSU5m44TJxw0VirhLDL6rE/6vBvdrCmmWnAAAAAElFTkSuQmCC"
				), a5L(8, "googleplay", 3,
				"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"
				), a5L(9, "discord", 7,
				"iVBORw0KGgoAAAANSUhEUgAAACwAAAAyBAMAAADVdiTZAAAAG1BMVEUA/wBI/0lu/26P/5Cl/6O8/73R/9Hn/+j///+iRuwXAAABJUlEQVQ4y83TvW7CMBQF4BsKdKVIpYxIRaJjVLUSI6JDGSNlCCOq1JC1f+CxFIL92D22E+di/ABciZB8seRj35joVZ3VN1FXBSqhRYgPJEIsSQXrAnmjL2uP5Usm81z83Bec5WM+J9T4vS8Yfzz1yFQ0v2ackKsrxr2G7d4ZPjK1O214z3no+Jdz1/EKTy1NI/w6jmcIID6JJirGe8cYdIdGIcQOwx3j/gEpI6X+qoRkGqrnd6OXFR/NRAcdOWFc6hDPera0Xk/Fozo1ck4bHsSVpg0jYJSlervGW9zWSdQXhhXozlbGek1uY9/s2hRWect7ucnsf5ld7DfosX+kcsv+AdwtDfvHdW877x/u0raB6Oa0qG35rKZhbokg41sKclQEmTr/f+SUPtWxuyYAAAAASUVORK5CYII="
				), a5L(10, "insta", 3,
				"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"
				), a5L(11, "emojis", 4,
				"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"
				), a5L(12, "flags", 3,
				"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"
				), a5L(13, "bestTeam", 5,
				"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"
				), a5L(14, "bestPlayer", 5,
				"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"
				), a5L(15, "zoom", 6,
				"iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuBAMAAACllzYEAAAAHlBMVEUAAAAhIyA3ODZTVVJrbWqEhoOkpqO8v7vX2tb///8goTJXAAABaElEQVQ4y32Tu1ODQBDGL8QAdlg5dml8dZTa2TijXQpnIh2TwoQOxwehi2PB0flKYP/b7HFv5nALBn5337d7ewshXZyuKX2PST8egUW76OE7EJFa+BhJ9bSsUWFaeTV3GKHbn8EvlB79bjSv4VO8jUr4VdiHNnK938MHPie0Yh+ZLqmGuNsJ7CNURgewI5qPoRE86GwkJyWIBIfcUfJrmMm0sclDyDnPWmLyADacl8jnRbEGKIoiJRP4EmU2LJmIDfLvAf7z/37mv6IUm08pzbV/rx5f1pPA1Fn/iX3eS3nekAslz7gcGw9bg3uqn6Rup5oH+uaTLpO4r0SmZVuUFE2lfTc+z1qr9+BVtGJqzq1RHNfQdAtnrEW75UwuXOFgvj3crpCyDu6UIpP9fPHZU5XkiYVXvsXIPcc+VwspzY2pPorE/NgCfYK+QJ5+QFA6fjQt2A4IWuIWODixe2ELcuIUNJGL+zQle92exY5pfDIaAAAAAElFTkSuQmCC"
				), a5L(16, "apple", 3,
				"iVBORw0KGgoAAAANSUhEUgAAALQAAAA8BAMAAAA9AI20AAAAG1BMVEUAAAAjJCJUVlOEhoOanZkA/wC8vrvW2dX7/fq38z8cAAAEbUlEQVRYw+2YzXOiSBTAGzW6x8ZY6pGYFMMxUct4JGbLcMwld9QpliNkLeUqUvT7s+e9BoUITpIpuWxtp0IJdP943/3B3t7eXtnF2xViGZIbf1+8mVcS3YQKmk3o16AKtLhCdAsqad4be3WrQcdX7BUqalesURXaZM2q0DZr/TfQQVVo8fTXb/LgzO9SiQpon/WPg0fjk5j3cuNnH74ZQPcztOBsegz6xnP7i+i99Tk6ZOwoadwH34LnR5jDBB6j9RjR4vkF4pEF6wmho1EQOyP83uwWuisX1uPgPNpmdciho/5efwiWoiZau86T5QX+ZACL+S0MpEKDVW9/PTMAljq0R026P4/WmJFHx30v2E/9+GFj7KzI8IIZ+K6AZdyCAXbowd3ewN9kkA4McYB+Hs078BG9gNgI/12trJ1L6BGEVjRoRwbZOsbrfipaqa1nUXvQOY+eB1kUIXpv+BAZ0VM8DI5od7id4auh7DBK0VOJ/rEtt7WYqXoAmxvlLn0f94Tp7qx3K24LFRL0IrCDOxiIzgZtLbqim6INQosevJSiTZwtr2ccr6lWsaJ2IFaRocM4Re/x0WIwhEV7hD2e1GmCjtUA0fB0Y5Shw9x8bCWPtlu6BIeswD95K7YiTT6xpWQJZG7ic7ovQ9/n0MZFa4jIkeuXLU/hpYXO0H4O7V4WbWfkWvZ6NT4zbp3F6HfQOVNzpXx8RDHalcX0c7SZobM5XpwzjqlMHA0/azf/FL1XeKlLBccKF6G7v4vObL2rm6WzciznC631NXTO1pl97ZZHKtxMl/wOdWiLG+UxQVO+btwFV7AMrDk99bvvbYhvFL2A9op5jnL1Q1KB38lgDxUz/a5gvYM8CsToUsUFr85rMqWnp+hdDt08mtSKGKI413/yOmaVMl8m+aQpE9nBbGzBV17WaHtPuXYipm+0xil6n0Mr7sGkgSAVUBxMqSAkWbVmmmBtqp9k63v8t2uotgs+dgwP9jyi4/xOJHVkqJBNEN2ieLBCikSvlqxWsJcu0YKCCHn0wqb6eojXrPLxIpp8aKJMvE/mnYZknJ1ySEfyCaFJL7SbVycFHMc5uCpDm0Vjmw3HMXGEDG5mkBJSk6Qt0T6IllLihdCaHD09RfvF0id7KglaFNBk9lN0nXZfBYNEhdInmIoNbwoGiZ1EqYJBWuWrJ+20PkX0CZQWeDN1I0LsuizuFAWmlBoSNwKhZXJugwLaP7VH4jGth8EXwELB4OtiPDRlOP3ACwazjY6+J2fXJdrHjlExQmRWfUh0WwY/ysbV6xkWrZDx8cMxZRwNlfDYLYqkk0cJHbGOo9VKljgLpky2K04SJROxfIXxynVOfg+VBcal/O47S9YUe/Sy0ORTQsswM0rQ4iepsnEO96pcaYdqwI31YCINOrtNtV2pqpxl1nNUd0hPo7lcJg0m39rLpEU7F3cX2yb9jz5paRJ8WNF9BV3hRrrC7X+FhxYVHrVUeEBU5bFWhYdxb6+Nf7YXbpv0CLGqg89fkK30UIXyeWIAAAAASUVORK5CYII="
				), a5L(17, "loading", 6,
				"iVBORw0KGgoAAAANSUhEUgAAAZEAAABGBAMAAAD/Q7RHAAAAGFBMVEUAAAAnKSZKTElucG2Fh4SoqqfLzcr///+y5yZlAAAEnUlEQVRo3u3aS3PaMBAAYGNsuHoy0+TKTJv6SjNNfeWSciVNJlydF7qGl/n7JTGSd1e7wgaFaWfMKfFD1qeXV5KD8cb8kuC//rWSVtJKWkkraSWtpJW0klbSSlpJK2klraSV/KuSbw9qe8HsfnCyfHVuZu95Kmb3iUdJ+KAvKf7gM119vDoUb8Bv9gLsu2PD97+n4O/tr1/+OzHXXiqTRjHyJukqkLcndKqnDw94yTYfty7JoyD5jtIYeZJ0FEr2Fp670EcnkgScYiRrXkJLI/EjyUjOhtzduSwpBrJEJ4YloSJJPHqRRDRnK3DSPHIpS8w5TjLnJJlVGIkPydjKWdVsw+pZDokueE5SMJKunULuQcIky5a/S7KQJbtiQZLUTmHlQcIkW13YYyqKkRQOycKWKNcjD5dwyebMYJA7JLscspLCknAJgLHxUEnEJbtkmAuXZC5LysqEEq4V1OkoeySm/bxenf22ujd41NolWTskCyoxxfNydXajrL55qCSDXe4LeaNHdl8wkiLofP2NxwNeUhBJiKKJiBbUwRKFBtIxbrVlha3wCzMGGYzROMxLPhIDkhjn/aOtFa93x0o6uHJ1Cb3Bce1NoZYMJabN5w7JEkv6uLSibQT+w0PcFZGhQyFYmZ18CnVY0q0hKbAks6JrL1F9j4S6Gar50jVK0csLSTR97pC85x9IprW7+CESU0B9psCTHroGS8ZgwJAkSyRRqAF7k/TJyIFkWhCjesOSC5CAJNk+GEjqvwobSVIS9sRwVO3vzoXo2TEXGhZOSQ4knUazq/qSDMXe1QgAbp3rBpFzkl4dyQpIurBnqibhilsyJo2WeU6us7U8WLIZ2JLgkyUhkFSNKoN5x5K4liSvJNEnSaZE0gG5ic1dfThFaSTRQ9vpJbBOqsE3hp20kUS/r9JPl0itKzGjwbrqPXlzia5jdXIJ7I+qCsrhFKVRjyeLD6DHJ54lrlEYVIQC789mkliSDD1LUhIEgTdjJEzXm0nw7Bq840eeJY5opSesBrHv+LUoyQTJ5BgJM113RJCpMNnGknSfJKYSGEH6l3BR/dS+4c2WwBidlaDmxUX1oR+JMNNa8MtHK0vSgUZekhIJnWl5kpDZb7fKGLM2iebuBZqp5bIk3rBTepN1TxJT8gO00jJhO3x5FZSYDYuJLKGdgaxI6P9BwxuZgyt4cI8kYxrOR4770kphJTm7VmhZSZCk+H68ShRcbjxJ4MrdNWxFY2mlMJaanSSJyAClwCN/Pmx8SaJ9zc46wUkWLglISl5NPV4irXCH7B1F0xVuvMXnWOH2IBF2HWLcLUE81mjXgWzRTODI7VvSdfafBZmBjRruBKHXp667jKvt5GiJsDuXkXBfmXbXaHeuPHGOJVzfHAXHS/gdU0W2Naam9BvtmJIdwIn0jnsKPEj4XWy6KlVFio12sXE5aElX2GY8VkJ2xx9hRSV2kByLW8WypEcilHNuI+l4Cf7a45ldLzZ5GVrfN4yC/ZKQhu6/ECTxJQnCKoK/s6cdqDfl5AscuIMjS/S/7Bc4z3SlR5DU+5VfRRWvp/sqKiy/iqr/IdZfF1HJgRmsN+0AAAAASUVORK5CYII="
				), a5L(18, "target", 7,
				"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAMFBMVEXUAADUISLWQkLMTQDZZmXAdwC0lADgiIioqQCWvgCE0QAA/wDnra1i6ADw0tL////afMd+AAAC6klEQVRIx42WTWgTURCApzFNY2lLBKEX0dy8iA0UxB8CKgUv0gaKBS2B3HOJnkUDQrENQi6KEITcgydR0l0CUYReJBZCi3YpaC+9FANS6GXZ5+6+eT+z+1adS/ImX97Mzs4f2ET2916vPV9/61At6Ifeq2UIZWXDSYK+IxLIlY4Z+ga6jL8xQbsFoFQrDtF7QqoThaxSDIKsE4HqYJAyhXZNDJxq6VCvZIQgq0NDSJCGgnqFJCiroB2lHTvjS06dWxJSHl0cjBjztm5JxXUBdaXqro8E4j2UD+gg1BamFpkQ75GgVjkkn/8SU+LVUHmaQx/wmB5pEHNzyh4oa08ZkU+oroZQhR8mKMO8PNdPBpBlvoixA67PBBC6lI4yzJVOgb3Nv1+OQawm3h9gJo19jUPHHLrhQ4UEazIKkzZYHJoRvxwuLAzE95voOWzyO5dQ/zkw/QQPfe65DfhwGO2T8JBCB39zqAM8l1Ij3QBMkSC0YFsP94nIB/4fj3vegLb+175IkCX94io0w8/zXJkX0IwezjLUNciTKZrWoSJCF4hLvlCookHHChppPhaB5+7c36BpvOm/oH+Y0x13VSFTx5vGEEzQOPGInyO5KPOUR3yVvrsDIFWBBVOFoR5hlwYczTfgPUmVj1y9SJKiBdhSMM3c0ItZzMwfWFMifeeYomZHpKb89MVWOCWr++hXpNCzfkmViFO6oEvTPtROaAWM/RRtDOx3QO0pyYveCjZ6HreH1saDhiGaeKxj9GUrBzl70iNj54FiCA3BeFVNtXsfEq2Odh/xrjPYxyuG9nuU00YC6DPqrKTcvD6nAshSNclbk3coR1BGDqCmpFJ3Hg++bN2OTNgQ6uojTh9kfP7g5KwnDcWiNl67CQy/SEzzhKvKZORvGqdwxqHLw47JWCOyYfSexaEHsYUmvj9cM6xG1jJlrjqmJcsiFu875nWt91I+4/yLxMXP3lu753PzK+tO8nYY3LbvS2SDtP8A+ntynBIvYeAAAAAASUVORK5CYII="
				), a5L(19, "members", 7,
				"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABSVFGanJkA/wDMz8x4/3ey/7L///+GDHoaAAACZElEQVRIx9WWwYrjMAyGlVCYa6cs5JqGQh5gaObaDYU8QJnOA5SS66RN49dfSZZt2U2WZZeFXc9h2r9fZEmRJcPbLyz4d6GzMdM1/uXcG3PV0KehFVFnlh4Baoxdl8BEEkF7EcwUoN5pJ4HenRBMNV66C4QfxxI2nTKFhsYt5CgZC9FTawDIxbg4UKKUWevAuw1Aq/D7NUq6M9RbQ2zKhkwpKVnK2AWGRrCrc04lEpDfgyg1u8mh3EQqSGLoS5QXY/a4+XSKJIIwkkNQOIlTgFYUcQq59TuQcrwI0PDk+M3Hayh2+RcC1smkl3DDj1ltlMR5old38LutHT04l/BVAVfOSL9lnXelUBKaAltxt2gTv3Ft6w6k4sajdtf6zhLVHUHltzTwkIzvOUGf9PhOJJdVdphWS0YfFnJUCrVgISmdTVWVnVQa19+YV9VWKgohl2+MRUFKjaAXDX0tQCvt0+HPIJWnJajWGV9wPDPutPFhXs9CK+PLr1aJjSF+5aUzpOQY6mwZURWNCRRO9JZq43ikMtnog44v2LlojK1EW6n4zYXz4HqSb/gsty1qaWjAt5o7NAEiL7Jdu2vX7IqHLikEIYdzUJ5CZQQdJJcJ5GSE9i5tC1BNR4oadGub76ChwrZfKn48wTRXsGfrQvHFQr0dmy245o8nMYHGoxsToMZIAoWBA2qOzEMXmVJiK4nO2jn5oXju5yGZpn4Gf/QpNH08D+pn6O3vQqOGulkIX0+1fbXd93VT+dkXQe/SO3F1fkSnUBjgT7cEdVdJodkLTbNkKLr1NH1ApstPrkbnK/39B9e1H85NJPjxrK7zAAAAAElFTkSuQmCC"
				), a5L(20, "hourglass", 7,
				"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABKTEqZm5gA/wDJzMh3/3iz/7L///+iyVF/AAACjklEQVRIx72W3aqyQBSGJwk6dceGTv1C8AJEO60QvACJLkDI02xPrtvf75pJ58cx2iffIqT0aWb9vGuNIrft0hSX8WqZ4Etxg9HM+G4zQVdatOcEdSSrqkr3juFOVdMwQXQUC7YmAyVLUPQZ1PxtJSJ5js7KX7j/+pKkNR5Y0RE9Ij/6JMPFRFfebt0cOmbD7dZOEOwQgn7ssnwOrf8rJAMp8KFSrnwormcQCR8S1HpQgT8qVVXnVCsJS/tQzlV4mMpmJLUCXOi4I2mgmnotOAfqcJPiCUIGNsMMunJdEqMjbP+cQQcOrx+hnZ0BA5XsuTQuPUxwBoLnZj98Oxq/LaiTHNK4G34MAQj7jfGhQqeIfgJQzm7ofELccUZ5CDpQjKBO3LbUr+gZhAo8QhMl8FoCb4IQhkvyUt7JWciBCnhUa5VkJkkexEtxQ3KjPvMlqKD7hk7fdF/bHnlQfoUU4LglgBCElVCP+ztIbQfDdXk7OL5jqH/juE7BA4pBUZr8XTJZMadoKZklKlxriMvSBqGO4m8ejJmuy5AH9aTqq02CbwPQlfeYDH94ziEWilqDW5xniiUWq6VUjs6szFTnat5SHYuXdcnGAcTZrINLrpmZGJnqqXY26WLONJ7rfqm5qfwh1vXckPahAh8HD/Imjzt7xJgACLe3oZ01xYQ1Mo/umWmGprBOjcQ96cyEEtacc89DrDx6PkJQrHSh2kjdgh4ulH0C7YIQuS8P3nYlDa9ecg33OpUF8TqnFyB9UitIVujsALSmqp6g+/5fHKVpxQfQqM6q2ier7X5joFdAMX++YrEyMc6hgP0RkuoVZbvfTqfU6gs/VbZG6M3bmn5fE0pxb6x1Ori4eNbkY3f+AriuYpjQCOoxAAAAAElFTkSuQmCC"
				), a5L(21, "stalemate", 6,
				"iVBORw0KGgoAAAANSUhEUgAAAeoAAABABAMAAAAnsyk1AAAAElBMVEUAAAA8PjxeYF2Rk5C6vLn////ACCfyAAAFMklEQVRo3uXby3qjIBQAYBEfwO+buM9c3Ntp2ZOZ8ADx8v6vMp2qybmBCK6SbNomEc4vcAS0RbG+1Iebvl5/vxev8lIf0+M1nl8DXboJvd5eET1N3QuoGfoVOvlp4q/+6fv3JL2evY83orp/uVH9NbLrp0braXrBLt541LenVpsH9Ao7+/DUc1E0kuF85ZkHdokHMriMPfNEpbo39fx3e1fbV1D3NKVb8KEn1TkpCShvbxET50gvnzdaDG4A520mfhHSvg+oWsHaN9QlCf0Ydc+vqFYqfUk8SeqGNpcDtW+oKzEJ5KqHghYO1ZrOKPLUa842oPYNdbPRGmnqka+JrDAi13eT1Cd6jj9LuV7ff/+g51tQG3FOk6sWei5Qt3Qo5I1raVG9oXbinCZb3dFTCtWszlz1ZwRve9Qli/0YtfW8QzP73CmS1OQD7A6r0aHn49QXxrPyWqlLVrM9BegOqxt5iZat7tleh5UjsslqYXk91HFqIy/RstWDzOOjuE9XC0eNXZQana/hOPUYUBtWZ5q6CmwpBNWlEHykug9v6NQUY8VkNu/3RKlH/1KTs4NqciLPx6k72qjWs/HTJavlw/C1Wwz35Nlxyldb6Q2pGay0OyJNX8fIneFhM9ylmhFeb45RX2gPtKSFRmGXa6e6+LW5WyiGuwTaO3KactTj+nGJdJbQBsebZq9a3hseNsJdcdaRgnPUw1q1FtVq+drNcMxudSmyz+Fw1xK7luyzZandEuM8gP8SyFqnbXkNu9Uy+xIOd00s54YMiZ3X65qrP9+bv/pOIGudXcWFJrwYl4auxB7C6jWx1DSCLLVZDpx//iRFrwXUmqezBHVRfPji8anvw1mTz7LUzRL4/Pc3ArkP55K3TJI6eOteUKv7O4qMnSz13HHsnLZGjSHqkbodG69p6qL45nxzAEEN+pjDfSNLPRfbl/CveyTlIwrDqkhV0/a+hdRgNBtcXJYacXuiBnW2jJCuxjOWPqRu+YajPUA9HzwuHZ2oG77ddztEDWe6Q0htHkFXvh31BPXySyuqQbeuWIz71OWP948rOLyNUsMUpvH389Rz8MsFjKgduA3Jph971C2bvegoNZSWGJCnhivAGquhVLE68tTKxagraVOlO0ANd6oLrEYTA0dH6R51w0OMUouLcps/D8d5BavFk3ZJmYdXPLWZGLXxP7eUpy5hcVhtgkvDNPWlEG7v+cJVgcVpnlrBZtTe+wJ8v26PmucuFTNL0YGntfLUwGaxWt7zua8W9qgVu3rrmBlpFXhaK1NtQGlIrcNPiO1aXzva2CZm9eF5XMseoG5BKyL1Sa7zkqIGKeIPKTuw0jSBmwPK+1GU+gQiRWpPnX2KGp7B8ffPa9SugpzMlkMi1LyLOv6kwEDUnjrHvdfr/6H4HqhE+xRU7UksczrLVGtQF1QrX5x1gtp3CtHahKq990TO+WolNIkNPO+6xrlP7btjMgbSUOOLwOar781gsfoUqnO3Wm93cKY25MxoeFCu2vD7VBa0zkhv2fQpal9urANq55vZDAeowV63Fm58DXR6OCSpq+AFQVKXrD84aRGYqG74yt2CUns206hT1GI+w/8KQNTV5Ln/9NVAuepKVGt2pg1OZ3vVenNziagb9q12ElolUa0fVQE1P9PNJK/IItVCerwEp5KGTTkbUGKuuuSZFmyKPs505QkqVs3Yf8ITaMeGAZxQ5aqX3y1WO5ZlNZ5E7lfjjfCxK4Lqkl/S4YT3IHWH1IrXWeIclKD+LGP9T+Tr8/9r6j/yRPVUqj3rEAAAAABJRU5ErkJggg=="
				)
		}
	}, this.get = function(g0) {
		return gP[g0]
	}, this.us = function(name) {
		for (var eG = fv.length - 1; 0 <= eG; eG--)
			if (fv[eG] === name) return gP[eG];
		return a5H
	}, this.g4 = function() {
		return a5G <= 0
	}, this.a5C = function() {
		a5G = 0, a5J()
	}
}

function bo() {
	var a5W, a5X, a5Y, a5Z, a5a, a5b, a5c, a5d, a5e, a5f, a5g, a5T = [224, 224, 224],
		a5U = [
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
		a5V = [
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

	function a62(ej, a64) {
		a1W[ej] = 0, a1W[ej + 1] = 0, a1W[ej + 2] = a64, a1W[ej + 3] = 0, a65(ej)
	}

	function a65(ej) {
		var fL;
		ay.kV || (fL = a2.jh(ej), ej = a2.gE(ej), ay.kV = fL >= ax.a1V[0] && fL <= ax.a1V[2] && ej >= ax.a1V[1] && ej <= ax.a1V[3])
	}
	this.cq = function(qW) {
		if (a5W = new Uint8Array(eg), a5X = new Uint8Array(eg), a5Y = new Uint8Array(eg), a5Z = new Uint8Array(eg), a5a = new Uint8Array(eg), a5b = new Uint8Array(eg), a5c = new Uint8Array(eg), a5d = new Uint8Array(eg), a5e = new Uint8Array(eg),
			a5f = new Uint8Array(eg), this.yQ = new Uint8Array(eg), (a5g = new Int32Array(4))[0] = -4 * ap.eB, a5g[1] = 4, a5g[2] = -a5g[0], a5g[3] = -a5g[1], hO)
			for (var p2, iN, eG = eg - 1; 0 <= eG; eG--) iN = b4.rW[b4.iO[eG]], p2 = eU((a5V[iN][3] + 1) * aL.random(), aL.value(100)), a5W[eG] = a5U[iN][0] + p2 * a5V[iN][0], a5X[eG] = a5U[iN][1] + p2 * a5V[iN][1], a5Y[eG] = a5U[iN][2] + p2 *
				a5V[iN][2];
		else aU.ij && aU.ik.a5n ? function(dp) {
			var eG;
			for (eG = po - 1; 0 <= eG; eG--) a5W[eG] = 4 * dp[eG][0], a5X[eG] = 4 * dp[eG][1], a5Y[eG] = 4 * dp[eG][2]
		}(aU.ik.a5n) : (function() {
			for (var eG = eg - 1; h3 <= eG; eG--) a5W[eG] = 4 * eU(64 * aL.random(), aL.value(100)), a5X[eG] = 4 * eU(64 * aL.random(), aL.value(100)), a5Y[eG] = 4 * eU(64 * aL.random(), aL.value(100))
		}(), function(qW) {
			for (var eG = h3 - 1; 0 <= eG; eG--) a5W[eG] = 4 * qW[eG].a4u[0], a5X[eG] = 4 * qW[eG].a4u[1], a5Y[eG] = 4 * qW[eG].a4u[2]
		}(qW));
		! function() {
			var eG, el;
			for (eG = eg - 1; 0 <= eG; eG--) el = eU(a5W[eG] + a5X[eG] + a5Y[eG], 3), a5W[eG] += a5w(el - a5W[eG], 2), a5X[eG] += a5w(el - a5X[eG], 2), a5Y[eG] += a5w(el - a5Y[eG], 2), a5W[eG] -= a5W[eG] % 4, a5X[eG] -= a5X[eG] % 4, a5Y[eG] -=
				a5Y[eG] % 4
		}(),
		function() {
			for (var eG = eg - 1; 0 <= eG; eG--) a5W[eG] += eU(eG, 128), a5X[eG] += eU(eG % 128, 32), a5Y[eG] += eU(eG % 32, 8), a5Z[eG] = eG % 8
		}(), this.a5t(),
			function() {
				for (var eG = eg - 1; 0 <= eG; eG--) a5a[eG] = a5W[eG] < 32 ? a5W[eG] + 32 : a5W[eG] - 32, a5b[eG] = a5X[eG] < 32 ? a5X[eG] + 32 : a5X[eG] - 32, a5c[eG] = a5Y[eG] < 32 ? a5Y[eG] + 32 : a5Y[eG] - 32
			}(),
			function() {
				for (var eG = eg - 1; 0 <= eG; eG--) a5d[eG] = 235 < a5W[eG] ? a5W[eG] - 20 : a5W[eG] + 20, a5e[eG] = 235 < a5X[eG] ? a5X[eG] - 20 : a5X[eG] + 20, a5f[eG] = 235 < a5Y[eG] ? a5Y[eG] - 20 : a5Y[eG] + 20
			}()
	}, this.xM = function(player) {
		var dp = al.dj;
		return dp[0] = a5W[player], dp[1] = a5X[player], dp[2] = a5Y[player], dp
	}, this.a5t = function() {
		for (var eG = eg - 1; 0 <= eG; eG--) this.yQ[eG] = a5W[eG] + a5X[eG] + a5Y[eG] < 280 ? 0 : 1
	}, this.jh = function(ej) {
		return eU(ej, 4) % ap.eB
	}, this.gE = function(ej) {
		return eU(ej, 4 * ap.eB)
	}, this.pv = function(fL, fM) {
		return Math.floor(4 * (fM * ap.eB + fL))
	}, this.qA = function(ej) {
		return this.pS(ej + a5g[0]) || this.pS(ej + a5g[1]) || this.pS(ej + a5g[2]) || this.pS(ej + a5g[3])
	}, this.q8 = function(ej, player) {
		return this.a5x(ej + a5g[0], player) || this.a5x(ej + a5g[1], player) || this.a5x(ej + a5g[2], player) || this.a5x(ej + a5g[3], player)
	}, this.v7 = function(player) {
		return player < h3 && 2 !== h5[player]
	}, this.em = function(ej) {
		return 208 <= a1W[ej + 3]
	}, this.qF = function(player, ej) {
		return this.em(ej) && this.a5y(player, ej)
	}, this.a5y = function(player, ej) {
		return player === this.en(ej)
	}, this.a5z = function(ej) {
		return 208 <= a1W[ej + 3] && a1W[ej + 3] < 224
	}, this.hX = function(ej) {
		return 224 <= a1W[ej + 3] && a1W[ej + 3] < 248
	}, this.q9 = function(ej) {
		for (var eG = 3; 0 <= eG; eG--)
			if (this.fk(ej + a5g[eG])) return !0;
		return !1
	}, this.a60 = function(ej) {
		return 192 <= a1W[ej + 3] && a1W[ej + 3] < 208
	}, this.a61 = function(ej, player) {
		return this.a60(ej) && player === this.en(ej)
	}, this.ee = function(ej) {
		return this.em(ej) || this.eo(ej)
	}, this.fk = function(ej) {
		return 0 === a1W[ej + 3] && 2 === a1W[ej + 2]
	}, this.eo = function(ej) {
		return 0 === a1W[ej + 3] && 1 === a1W[ej + 2]
	}, this.pS = function(ej) {
		return 0 === a1W[ej + 3] && 3 === a1W[ej + 2]
	}, this.fj = function(ej) {
		return this.pS(ej)
	}, this.a5x = function(ej, player) {
		return this.eo(ej) || this.em(ej) && player !== this.en(ej)
	}, this.en = function(ej) {
		return a1W[ej] % 4 * 128 + a1W[ej + 1] % 4 * 32 + a1W[ej + 2] % 4 * 8 + a1W[ej + 3] % 8
	}, this.qG = function(ej) {
		a62(ej, 1)
	}, this.a63 = function(ej) {
		a62(ej, 2)
	}, this.q7 = function(ej, player) {
		a1W[ej] = a5W[player], a1W[ej + 1] = a5X[player], a1W[ej + 2] = a5Y[player], a1W[ej + 3] = 208 + a5Z[player], a65(ej)
	}, this.ef = function(ej, player) {
		a1W[ej] = a5a[player], a1W[ej + 1] = a5b[player], a1W[ej + 2] = a5c[player], a1W[ej + 3] = 224 + a5Z[player], a65(ej)
	}, this.hY = function(ej, player) {
		a1W[ej] = a5d[player], a1W[ej + 1] = a5e[player], a1W[ej + 2] = a5f[player], a1W[ej + 3] = 248 + a5Z[player], a65(ej)
	}, this.a66 = function(ej, player) {
		a1W[ej] = a5T[0] + a5W[player] % 4, a1W[ej + 1] = a5T[1] + a5X[player] % 4, a1W[ej + 2] = a5T[2] + a5Y[player] % 4, a1W[ej + 3] = 192 + a5Z[player], a65(ej)
	}
}

function bp() {
	var fv, ea, ec, a67, a68;

	function a6D() {
		for (var a6L = 0, eG = 1; eG < 5; eG++) a6L += ea[eG] % 1024;
		return a6L
	}

	function a6C() {
		for (var eG = 1; eG < ec - a68; eG++) ea[eG] = parseInt(ea[eG])
	}

	function a6E() {
		ea[0] = "Player " + Math.floor(1e3 * Math.random()), ea[1] = aK.g6 < aK.gC ? Math.floor(1 + Math.random() * (Math.pow(2, 30) - 1)) : 0, ea[2] = 1, ea[3] = 1, ea[4] = aK.g6 < aK.gC ? 0 : 1, ea[5] = 0, ea[6] = "000", ea[7] = "0", ea[8] = "0",
			ea[9] = "0", a3.a6F()
	}

	function a6B() {
		for (var eG = ec - a68 - 1; 0 <= eG; eG--) ea[eG] = h.r0(ea[eG]);
		ea[0] = h.qy(ea[0])
	}

	function a6O(name, value, a6P) {
		var a6Q = new Date,
			a6P = (a6Q.setTime(a6Q.getTime() + Math.floor(31536e6 * a6P)), name + "=" + value + ";expires=" + a6Q.toUTCString() + ";SameSite=Strict;Secure;path=/");
		document.cookie = a6P
	}
	this.cq = function() {
		if (!(5 <= b7.df || 2 === b7.id)) {
			a68 = 4, fv = [], ec = 10;
			for (var eG = a67 = 0; eG < ec; eG++) fv.push("u" + eG);
			ea = new Array(ec), ! function(a6M) {
				for (var hb, ej, a6N = a6M.split(";"), eG = a6N.length - 1; 0 <= eG; eG--) {
					for (a6N[eG] = a6N[eG].trim(), hb = 2; 0 <= hb; hb--) a6N[eG] = a6N[eG].replace(" ", "");
					3 < a6N[eG].length && (hb = fv.indexOf(a6N[eG].substring(0, 2)), ej = a6N[eG].indexOf("="), 0 <= hb && 2 === ej ? ea[hb] = a6N[eG].substring(ej + 1, a6N[eG].length) : 0 < ej && a6O(a6N[eG].substring(0, ej), "0", 0))
				}
			}(document.cookie), ea[9] || (ea[9] = "0"), (! function() {
				for (var eG = ec - 1; 0 <= eG; eG--)
					if (void 0 === ea[eG]) return;
				return 1
			}() || (a67 = 2, a6B(), a6C(), a6D() !== ea[5])) && a6E()
		}
	}, this.a6F = function() {
		if (2 === a67) {
			ea[1] = 0 === ea[1] ? Math.floor(1 + Math.random() * (Math.pow(2, 30) - 1)) : ea[1], ea[5] = a6D(), ! function() {
				for (var eG = 1; eG < ec - a68; eG++) ea[eG] = ea[eG].toString()
			}(), ! function() {
				ea[0] = h.qx(ea[0]);
				for (var eG = ec - a68 - 1; 0 <= eG; eG--) ea[eG] = h.qz(ea[eG])
			}();
			for (var eG = ec - 1; 0 <= eG; eG--) a6O(fv[eG], ea[eG], 1);
			a6B(), a6C()
		}
	}, this.a67 = function() {
		return a67
	}, this.a6J = function(hb) {
		a67 = hb, this.a6F()
	}, this.a6K = function(eG, value) {
		5 <= b7.df || 2 === b7.id || (ea[eG] = value)
	}, this.rz = function(eG) {
		return 5 <= b7.df || 2 === b7.id ? 0 : ea[eG]
	}
}

function c9() {
	var g0 = 0,
		a6R = new Uint16Array(32);

	function remove(uv) {
		var eG;
		for (g0 -= 2, eG = uv; eG < g0; eG += 2) a6R[eG] = a6R[eG + 2], a6R[eG + 1] = a6R[eG + 3]
	}
	this.cq = function() {
		g0 = 0
	}, this.i8 = function() {
		var eG, hU, h7;
		if (0 !== g0)
			if (0 === h4[eX] || a4.a6S(eX) === a4.eH(eX)) g0 = 0;
			else
				for (eG = g0 - 2; 0 <= eG; eG -= 2)(hU = a6R[eG]) < eg && 0 === h4[hU] ? remove(eG) : (h7 = a6R[eG + 1], (eg <= hU && fo(eX) || hU < eg && ft(eX, hU)) && (aW.fe.fp(h7, hU), remove(eG)))
	}, this.fr = function(hU, h7) {
		! function(hU, h7) {
			var eG;
			for (eG = 0; eG < g0; eG += 2)
				if (a6R[eG] === hU) return a6R[eG + 1] = Math.min(a6R[eG + 1] + h7, 1023), 1;
			return
		}(hU, h7) && 32 !== g0 && (a6R[g0] = hU, a6R[g0 + 1] = h7, g0 += 2)
	}
}

function a6U(player) {
	a6V(player), a6W(player), a6X(player), c.eW(player), e.jV(player), a4.clear(player), ak.a6Y.a6Z(player)
}

function a6V(player) {
	a2.v7(player) && rL++;
	var a6a = a4.a6b(player);
	0 === a6a.length ? player === eX && a6c() : (a6d(player, a6a), a6e(player, a6a))
}

function a6c() {
	b1.ea[17] += eY[eX] + a4.a6f(eX), u.show(!1, !1, !1, !0), t.a10()
}

function a6d(player, a6a) {
	for (var eG = a6a.length - 1; 0 <= eG; eG--) a4.a6g(a6a[eG], player)
}

function a6h(a6a) {
	for (var g0 = 0, eG = a6a.length - 1; 1 <= eG; eG--) f2[a6a[eG]] > f2[a6a[g0]] && (g0 = eG);
	return g0
}

function a6e(player, a6a) {
	var eG, wO, a6i = a6a[a6h(a6a)];
	if (9 === im && 1 === b4.iO[player] && aL.iH(8) && aM.a6j(a6i), player === eX) 2 !== h5[player] && k.rA(a6i, 1), a6c();
	else {
		for (wO = !1, eG = a6a.length - 1; 0 <= eG; eG--)
			if (a6a[eG] === eX) return wO = !0, void k.rA(player, 0);
		!wO && player < h3 && 2 !== h5[player] && k.w7(0, player, a6i)
	}
}

function a6X(player) {
	h4[player] = eY[player] = 0, ed[player] = null, eu[player] = null, ev[player] = null, ey[player] = null, aQ.a6k(player)
}

function a6W(player) {
	for (var ej, fM, fL = hv[player]; fL >= hw[player]; fL--)
		for (fM = hy[player]; fM >= hz[player]; fM--) ej = 4 * (fM * ap.eB + fL), a2.qF(player, ej) && (a2.qG(ej), f2[player]--)
}

function cE() {
	var input;

	function a6l(dE) {
		a6n(dE.target.files)
	}

	function a6n(files) {
		files && 0 < files.length && aT.a6o(files[0])
	}

	function a6t(dE) {
		var iN = new Image;
		iN.onload = a6u, iN.src = dE.target.result
	}

	function a6u(dE) {
		var a6v, dE = dE.target,
			g6 = dE.width,
			gC = dE.height;
		4096 < g6 || 4096 < gC || g6 < 10 || gC < 10 ? (a6v = "Image w & h must be between 10 and 4096.", b7.oV ? b7.oV.showToast(a6v) : alert(a6v)) : (aU.sy(), ap.pc = ap.a6s(), ap.a4L = 0, ap.eB = g6, ap.eC = gC, ap.pE.width = ap.eB, ap.pE.height =
			ap.eC, ap.pA.drawImage(dE, 0, 0), a6v = ap.pA.getImageData(0, 0, ap.eB, ap.eC), ap.pF = a6v.data)
	}

	function a6w(dE) {
		dE.stopPropagation(), dE.preventDefault()
	}

	function a6x() {
		return 0 === x.dZ() || 2 === x.dZ()
	}
	this.cq = function() {
		(input = document.createElement("input")).type = "file", input.setAttribute("accept", ".json, .png, .jpg, .gif, .jpeg"), input.onchange = a6l
	}, this.a4w = function() {
		input.click()
	}, this.a6m = function(dE) {
		a6l(dE)
	}, this.a6o = function(a6p) {
		var dp = a6p.name.split("."),
			a6q = dp[dp.length - 1].toLowerCase();
		"json" === a6q ? aU.oT(a6p) : "gif" !== a6q && "jpg" !== a6q && "jpeg" !== a6q && "png" !== a6q || (ap.ik.pb[ap.a6s()].name = dp[0], (a6q = new FileReader).onload = a6t, a6q.readAsDataURL(a6p))
	}, this.sh = function(dE) {
		a6x() && (a6w(dE), dE.dataTransfer.dropEffect = "copy")
	}, this.si = function(dE) {
		a6x() && (a6w(dE), a6n(dE.dataTransfer.files))
	}
}

function cC() {
	this.a6y = null, this.cq = function() {
		this.a6y = 10 !== im ? null : new Uint32Array(eg)
	}, this.i8 = function() {
		10 === im && this.sD()
	}, this.sD = function() {
		for (var ej, target, a1B, a6y = this.a6y, qW = iQ, tm = eY, eG = iP - 1; 0 <= eG; eG--) ej = qW[eG], h3 <= ej || (target = Math.max(eU(tm[ej], 4), 2048), a1B = Math.max(a5.a1C(ej), 100), a6y[ej] += eU(a1B * target, 1e4), a6y[ej] >
			target && (a6y[ej] = target))
	}, this.ts = function(player, hV) {
		return hV > this.a6y[player] ? (hV = this.a6y[player], this.a6y[player] = 0) : this.a6y[player] -= hV, hV
	}
}

function cF() {
	function a6t(dE) {
		aU.ij = !0, aU.a74(JSON.parse(dE.target.result)), aU.xD()
	}

	function a7A(fz, min, max, a7J) {
		return "string" != typeof fz || fz.length < min ? a7J : fz.length > max ? fz.substring(0, max) : fz
	}

	function a75(de, min, max) {
		return de = "number" == typeof de ? Math.floor(de) : min, Math.min(Math.max(de, min), max)
	}

	function a78(de, oR) {
		return "boolean" == typeof de ? de : oR
	}

	function a7C(de, ec, max, a7L) {
		var eG, dp, p2;
		if (!Array.isArray(de) || de.length < 1) return null;
		for (dp = new(8 === a7L ? Uint8Array : Uint16Array)(ec), p2 = de.length, eG = 0; eG < ec; eG++) dp[eG] = a75(de[eG % p2], 0, max);
		return dp
	}
	this.ij = !1, this.ik = null, this.sy = function() {
		this.ij = !1, this.ik = null
	}, this.a4t = function() {
		this.ik.a5n && this.ik.a6z && (this.ik.a5n[0] = a8.va[2].rE.a2m()), uK(this.ik.a70, 0, this.a71(), this.ik.uN, !1, !1)
	}, this.a71 = function() {
		return [{
			name: this.ik.a72 ? b9.dG.data[100].value : this.ik.a73[0],
			a4u: [0, 0, 0],
			a4v: 0
		}]
	}, this.oT = function(a6p) {
		var a6r = new FileReader;
		a6r.onload = a6t, a6r.readAsText(a6p)
	}, this.a74 = function(n6) {
		this.ik = {}, this.ik.a4p = a75(n6.numberPlayers, 1, 512), this.ik.a76 = a75(n6.modeID, 0, 1), this.ik.pc = a75(n6["gMap.mapID"], 0, ap.a77 - 1), this.ik.a4P = a75(n6.seedMap, 0, 16383), this.ik.a70 = a75(n6.seedSpawn, 0, 16383), this.ik
			.uQ = a78(n6.selectableSpawn, !1), this.ik.a72 = a78(n6.selectableName, !1), this.ik.a6z = a78(n6.selectableColor, !1), ap.ik.pb[ap.a6s()].name = this.ik.a79 = a7A(n6.mapName, 1, 25, "Custom Map"), this.ik.vp = function(de) {
				var eG, ec;
				if (!Array.isArray(de) || de.length < 1) return [];
				for (ec = de.length, eG = 0; eG < ec; eG++) de[eG] = a7A(de[eG], 0, 100, "");
				return de
			}(n6.description), this.ik.pj = a7C(n6.playerX, this.ik.a4p, 4096, 16), this.ik.pu = a7C(n6.playerY, this.ik.a4p, 4096, 16), this.ik.a7D = a7C(n6.playerTeam, this.ik.a4p, 8, 8), this.ik.il = a7C(n6.playerStrength, this.ik.a4p, 5, 8),
			this.ik.a5n = function(de, ec) {
				var eG, dp, p2;
				if (!Array.isArray(de) || de.length < 1) return null;
				for (dp = new Array(ec), p2 = de.length, eG = 0; eG < ec; eG++) dp[eG] = a7C(de[eG % p2], 3, 63, 8);
				return dp
			}(n6.playerColor, this.ik.a4p), this.ik.a73 = function(de, ec) {
				var eG, dp, p2;
				if (!Array.isArray(de) || de.length < 1) return null;
				for (dp = new Array(ec), p2 = de.length, eG = 0; eG < ec; eG++) dp[eG] = a7A(de[eG % p2], 3, 26, "Bot");
				return dp
			}(n6.playerName, this.ik.a4p), this.ik.a7G = "string" == typeof n6.mapBase64 ? n6.mapBase64 : "", this.ik.a72 = this.ik.a72 || !this.ik.a73, this.ik.uN = 0 === this.ik.a76 ? 7 : 2 === this.ik.a76 ? 9 : 6, this.ik.pj = this.ik.pu ?
			this.ik.pj : null
	}, this.xD = function() {
		! function(fz) {
			var gP, gM, a7I = "data:image/png;base64,";
			if (fz.length <= a7I.length) return;
			aU.ik.pc = 0, aU.ik.a4P = 0, ap.d2(0, 0), fz.substring(0, a7I.length) !== a7I && (fz = a7I + fz);
			return (gP = new Image).onload = function() {
				ap.eB = gP.width, ap.eC = gP.height, 4096 < ap.eB || 4096 < ap.eC || ap.eB < 10 || ap.eC < 10 ? (ap.d2(0, 0), alert("Image w & h must be between 10 and 4096.")) : (ap.pc = ap.a6s(), ap.a4L = 0, ap.pE.width = ap.eB, ap.pE
					.height = ap.eC, ap.pA.drawImage(gP, 0, 0), gM = ap.pA.getImageData(0, 0, ap.eB, ap.eC), ap.pF = gM.data)
			}, gP.src = fz, aU.ik.a7G = "", 1
		}(this.ik.a7G) && ap.d2(this.ik.pc, this.ik.a4P)
	}, this.a7M = function() {
		for (var max = 0, ec = this.ik.a4p, eG = 0; eG < ec; eG++) this.ik.a7D[eG] > max && (max = this.ik.a7D[eG]);
		return Math.max(0, max - 1)
	}
}

function bq() {
	var a7N, a7O, size, hU, hV, id;

	function a7P(player) {
		return player < h3 ? a7N * player : a7N * h3 + a7O * (player - h3)
	}
	this.cq = function() {
		a7N = h3 < 16 ? 12 : 8, a7O = 4;
		var ec = a7P(eg);
		size = new Uint8Array(eg), hU = new Uint16Array(ec), hV = new Uint32Array(ec), id = new Uint16Array(ec)
	}, this.mq = function(xu, a7Q) {
		var a7R = this.fG(xu, a7Q);
		this.fF(xu, a7Q, 0), a7R = aY.fQ.m0(xu, a7R), xu === eX && (b1.ea[13] -= a7R)
	}, this.clear = function(player) {
		size[player] = 0
	}, this.a6g = function(player, a7Q) {
		var iU, a7Q = function(player, a7Q) {
			var eG, p2 = a7P(player);
			for (eG = size[player] - 1; 0 <= eG; eG--)
				if (0 === id[p2 + eG] && hU[p2 + eG] === a7Q) return eG;
			return size[player]
		}(player, a7Q);
		a7Q !== size[player] && (iU = hV[a7P(player) + a7Q], this.eb(player, a7Q), this.hR(player, iU, eg))
	}, this.hm = function(player, a7Q) {
		for (var p2 = a7P(player), eG = size[player] - 1; 0 <= eG; eG--)
			if (0 === id[p2 + eG] && hU[p2 + eG] === a7Q) return !0;
		return !1
	}, this.i6 = function(player) {
		return player < h3 ? size[player] < a7N : size[player] < a7O
	}, this.eH = function(player) {
		return size[player]
	}, this.eN = function(player, eG) {
		return hU[a7P(player) + eG]
	}, this.eI = function(player, eG) {
		return id[a7P(player) + eG]
	}, this.jk = function(player, a7T) {
		for (var p2 = a7P(player), eG = size[player] - 1; 0 <= eG; eG--)
			if (id[p2 + eG] === a7T) return eG;
		return -1
	}, this.eO = function(player, eG) {
		return hV[a7P(player) + eG]
	}, this.fG = function(player, a7Q) {
		for (var p2 = a7P(player), eG = size[player] - 1; 0 <= eG; eG--)
			if (0 === id[p2 + eG] && hU[p2 + eG] === a7Q) return hV[p2 + eG];
		return 0
	}, this.a6f = function(player) {
		for (var p2 = a7P(player), de = 0, eG = size[player] - 1; 0 <= eG; eG--) de += hV[p2 + eG];
		return de
	}, this.a7U = function(player) {
		for (var p2 = a7P(player), de = 0, eG = size[player] - 1; 0 <= eG; eG--) 0 === id[p2 + eG] && (de += hV[p2 + eG]);
		return de
	}, this.a6S = function(player) {
		for (var p2 = a7P(player), wN = 0, eG = size[player] - 1; 0 <= eG; eG--) 0 < id[p2 + eG] && wN++;
		return wN
	}, this.fF = function(player, a7Q, iU) {
		for (var p2 = a7P(player), eG = size[player] - 1; 0 <= eG; eG--) 0 === id[p2 + eG] && hU[p2 + eG] === a7Q && (hV[p2 + eG] = iU)
	}, this.f1 = function(player, eG, iU) {
		hV[a7P(player) + eG] = iU
	}, this.hR = function(player, iU, a7Q) {
		var eG, p2 = a7P(player);
		for (a7Q === eX && b1.ea[player < h3 ? 6 : 5]++, eG = size[player] - 1; 0 <= eG; eG--)
			if (0 === id[p2 + eG] && hU[p2 + eG] === a7Q) return hV[p2 + eG] += iU, void(hV[p2 + eG] = hV[p2 + eG] > to ? to : hV[p2 + eG]);
		hU[p2 + size[player]] = a7Q, hV[p2 + size[player]] = iU, id[p2 + size[player]] = 0, size[player]++, player < h3 && (a7Q === eX ? k.rA(player, 5) : player === eX && a6.w9(a7Q))
	}, this.a7V = function(player, iU, a7T) {
		var p2 = a7P(player);
		h4[player] = 2, hU[p2 + size[player]] = 0, hV[p2 + size[player]] = iU, id[p2 + size[player]] = a7T, size[player]++
	}, this.eb = function(player, g0) {
		var hb, p2;
		if (0 !== size[player])
			for (p2 = a7P(player), size[player]--, hb = g0; hb < size[player]; hb++) hU[p2 + hb] = hU[p2 + hb + 1], hV[p2 + hb] = hV[p2 + hb + 1], id[p2 + hb] = id[p2 + hb + 1]
	}, this.a6b = function(player) {
		for (var hb, p2, a6a = [], eG = iP - 1; 0 <= eG; eG--)
			for (p2 = a7P(iQ[eG]), hb = size[iQ[eG]] - 1; 0 <= hb; hb--)
				if (0 === id[p2 + hb] && hU[p2 + hb] === player) {
					a6a.push(iQ[eG]);
					break
				} return a6a
	}
}

function br() {
	var a7W, a7X, a7Y, a7Z, a7a, a7b;
	this.cq = function() {
		a7Y = a7W = 10, a7Z = a7X = 10
	}, this.d0 = function() {
		a7b = 512, a7a = new Uint16Array(a7b);
		for (var eG = 0; eG < a7b; eG++) a7a[eG] = 100 + a7c(eU(25600 * eG, a7b - 4), 9)
	}, this.zv = function() {
		return a7Z
	}, this.i8 = function() {
		if (--a7Y <= 0 && (a7Y = a7W, function() {
				var eG, a7h, dc = eY[eX];
				for (ip && !hO && 0 !== h4[0] && 0 === z.iq[0].el && (eY[0] += eU(f2[0], 6)), eG = iP - 1; 0 <= eG; eG--) a7h = eU(a5.a1C(iQ[eG]) * eY[iQ[eG]], 1e4), eY[iQ[eG]] += a7h < 1 ? 1 : a7h, a5.eZ(iQ[eG]);
				b1.ea[9] += eY[eX] - dc
			}(), --a7Z <= 0)) {
			a7Z = a7X;
			for (var dc = eY[eX], eG = iP - 1; 0 <= eG; eG--) eY[iQ[eG]] += f2[iQ[eG]], a5.eZ(iQ[eG]);
			b1.ea[8] += eY[eX] - dc
		}
	}, this.a1C = function(player) {
		var gS = a7a[eU((a7b - 1) * f2[player], uF)],
			a7g = (b3.iM() < 1920 && (gS = gS < (a7g = eU(100 * (13440 - 6 * b3.iM()), 1920)) ? a7g : gS), this.iB(player));
		return eY[player] > a7g && (gS -= eU(2 * gS * (eY[player] - a7g), a7g)), gS < 0 ? 0 : 700 < gS ? 700 : gS
	}, this.iB = function(player) {
		player = 100 * f2[player];
		return uG < player ? uG : player
	}, this.eZ = function(player) {
		var de = f2[player] * tn;
		eY[player] = Math.min(Math.min(eY[player], to), de)
	}, this.le = function(player, lf) {
		aY.fQ.m0(lf, al.di[0]), b1.m1(player, lf), a6.a7j(player, al.di[0] + al.di[1]), a6.m2(lf, al.di[0]), aY.fQ.mf(player)
	}
}

function bs() {
	var a7k, a7l, a7m, a7n, a7o, a7p, a7q, a7r, a7s, a7t, a7u, a7v, a7w, a7x, a7y, a7z, a80, a81, a83, a84, a85, a86, a87, a8E, a8F, a82 = null,
		a89 = 0,
		a8A = !1,
		a8B = new Float32Array(4),
		a8C = 0,
		a8D = !1,
		a0Q = 1;

	function a8G() {
		a82.width = aK.g6, a82.height = aK.gC, a83 = a82.getContext("2d", {
			alpha: !0
		}), aY.g1.textAlign(a83, 1), aY.g1.textBaseline(a83, 1), a83.imageSmoothingEnabled = !0
	}

	function a8H() {
		var eG, a8L;
		for (gG.font = aY.g1.g2(1, 100 * a7u), a8L = 80 / Math.floor(gG.measureText(aY.jl.jm(to)).width), gG.font = aY.g1.g2(1, 100), eG = eg - 1; 0 <= eG; eG--) a7r[eG] = 100 / Math.floor(gG.measureText(jn[eG]).width), a7q[eG] = Math.min(a8L, a7r[
			eG])
	}

	function a8M(eG) {
		return !b9.dG.data[7].value || eY[eG] < 1e6 ? 1 : eY[eG] < 1e7 ? a8B[0] : a8B[Math.min(Math.floor(Math.log10(eY[eG])) - 6, 3)]
	}

	function a8K(gQ) {
		a81 = !1, a80 = 1, a7y = a7z = 0, a8D ? (aY.g1.textAlign(gQ, 1), aY.g1.textBaseline(gQ, 1)) : gQ.clearRect(0, 0, aK.g6, aK.gC);
		for (var ja, jb, eG, fontSize, jc, jd = h8 / h9, je = hA / h9, jf = (aK.g6 + h8) / h9, jg = (aK.gC + hA) / h9, a8Q = 0 !== h4[eX] && a2.v7(eX), hb = iP - 1; 0 <= hb; hb--) eG = iQ[hb], (fontSize = a7x * h9 * a8M(eG) * a7q[eG] * a7o[eG]) <
			a7w || a7s <= fontSize || a7m[eG] + a7o[eG] > jd && a7m[eG] < jf && a7n[eG] + a7p[eG] > je && a7n[eG] < jg && (ja = aK.g6 * (a7m[eG] + a7o[eG] / 2 - jd) / (jf - jd), jb = aK.gC * (a7n[eG] + a7p[eG] / 2 - je) / (jg - je) - .1 * fontSize,
				gQ.font = aY.g1.g2(1 === h5[eG] ? 4 : 1, fontSize), gQ.fillStyle = function(fontSize, eG) {
					if (a7t <= fontSize && fontSize < a7s) return b4.a8d[a2.yQ[eG]] + a8Z(fontSize).toFixed(3) + ")";
					return b4.a8e[a2.yQ[eG]]
				}(fontSize, eG), b9.dG.data[7].value ? gQ.fillText(aY.jl.jm(eY[eG]), ja, jb) : a8S(eG, fontSize, ja, jb, gQ), a81 = !0, 0 < a85[eG] ? function(ja, jb, fontSize, eG, gQ) {
					0 === zw[eG] ? az.xF(a84[eG]) ? (function(ja, jb, fontSize, player, lp, gQ) {
						for (var vQ = .9 * fontSize / az.g6, pn = jb - .5 * vQ * az.g6 - .05 * fontSize, gO = (gQ.globalAlpha = a8Z(fontSize), a8M(player) * (b9.dG.data[7].value ? a8C : a7r[player])), pm = ja - .5 * fontSize / gO - .4 *
								fontSize - vQ * az.g6, hk = 0; hk < 2; hk++) gQ.setTransform(vQ, 0, 0, vQ, pm, pn), gQ.drawImage(az.ur[lp], 0, 0), pm = ja + .5 * fontSize / gO + .4 * fontSize;
						gQ.globalAlpha = 1, gQ.setTransform(1, 0, 0, 1, 0, 0)
					}(ja, jb, fontSize, eG, a84[eG], gQ), a8U(ja, jb, fontSize, 0, 0, gQ)) : az.xE(a84[eG]) ? (a8c(ja, jb, fontSize, a84[eG], 0, gQ), a8U(ja, jb, fontSize, 0, 1, gQ)) : (a8c(ja, jb, fontSize, a84[eG], 1, gQ), a8U(ja, jb, fontSize,
						1, 0, gQ)) : a8c(ja, jb, fontSize, a84[eG], 0, gQ)
				}(ja, jb, fontSize, eG, gQ) : 0 === zw[eG] && a8U(ja, jb, fontSize, 0, 0, gQ), a8Q && (0 < a85[eG + eg] || 0 < a85[eG + 2 * eg] || 0 < a85[eG + 3 * eg] || 0 < a85[eG + 4 * eg]) && function(ja, jb, fontSize, eG, gQ) {
					var iN, wN = -1;
					for (iN = 4; 1 <= iN; iN--) 0 < a85[eG + iN * eg] && wN++;
					for (iN = 1; iN < 5; iN++) 0 < a85[eG + iN * eg] && (! function(ja, jb, fontSize, iN, eG, a8X, dc, gQ) {
						var vQ = .8 * fontSize / az.g6,
							ja = ja - .5 * vQ * az.g6 - .534 * a8X * fontSize,
							a8X = jb + 1.4 * vQ * az.g6;
						gQ.setTransform(vQ, 0, 0, vQ, ja, a8X), gQ.globalAlpha = a8Z(fontSize), jb = 1 === iN ? az.ur[a84[eG + eg]] : 2 === iN ? i.un()[4].gP[dc < 255 ? 1 : 0] : (3 === iN ? i.un()[5] : i.un()[6]).gP[0];
						gQ.drawImage(jb, 0, 0), gQ.globalAlpha = 1, gQ.setTransform(1, 0, 0, 1, 0, 0)
					}(ja, jb, fontSize, iN, eG, wN, a85[eG + iN * eg], gQ), wN -= 2)
				}(ja, jb, fontSize, eG, gQ), (jc = a7u * fontSize) < a7w || (gQ.font = aY.g1.g2(1, jc), b9.dG.data[7].value ? a8S(eG, jc, ja, jb + .78 * fontSize, gQ) : (gQ.fillText(aY.jl.jm(eY[eG]), ja, jb + .78 * fontSize), settings
					.showPlayerDensity && (settings.coloredDensity && (gQ.fillStyle = utils.textStyleBasedOnDensity(eG)), gQ.fillText(utils.getDensity(eG), ja, jb + fontSize * 1.5)))))
	}

	function a8S(eG, fontSize, fL, fM, gQ) {
		var ___id = eG;
		gQ.fillText(jn[eG], fL, fM), eG < h3 && 2 !== h5[eG] || (eG = fontSize / a7r[eG], gQ.fillRect(fL - .5 * eG, fM + aY.g1.tb * fontSize, eG, Math.max(1, .1 * fontSize)));
		b9.dG.data[7].value && settings.showPlayerDensity && (settings.coloredDensity && (gQ.fillStyle = utils.textStyleBasedOnDensity(___id)), gQ.fillText(utils.getDensity(___id), fL, fM + fontSize));
	}

	function a8U(ja, jb, fontSize, a8X, a8Y, gQ) {
		var vQ = .95 * fontSize / a87,
			ja = ja - .5 * vQ * a86 + .8 * a8X * fontSize,
			a8X = jb - 1.76 * vQ * a87 - .82 * a8Y * fontSize;
		gQ.setTransform(vQ, 0, 0, vQ, ja, a8X), gQ.globalAlpha = a8Z(fontSize), gQ.drawImage(a1.get(4), 0, 0), gQ.globalAlpha = 1, gQ.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a8c(ja, jb, fontSize, lp, a8X, gQ) {
		var vQ = 1.2 * fontSize / az.g6,
			ja = ja - .5 * vQ * az.g6 - .8 * a8X * fontSize,
			a8X = jb - 1.5 * vQ * az.g6;
		gQ.setTransform(vQ, 0, 0, vQ, ja, a8X), gQ.globalAlpha = a8Z(fontSize), gQ.drawImage(az.ur[lp], 0, 0), gQ.globalAlpha = 1, gQ.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a8Z(fontSize) {
		return a7t <= fontSize && fontSize < a7s ? 1 - (fontSize - a7t) / (a7s - a7t) : 1
	}

	function a8n(gO, g6) {
		return 1 + Math.floor(a7v * gO * g6)
	}

	function a8k(eG) {
		for (var left = a7m[eG], hb = a7m[eG] - hw[eG] - 1; 0 <= hb; hb--)
			if (!a8p(eG, --left, a7n[eG], a7p[eG])) {
				left++;
				break
			} var right = a7m[eG];
		for (hb = hv[eG] - a7m[eG] - a7o[eG]; 0 <= hb; hb--)
			if (!a8p(eG, ++right + a7o[eG] - 1, a7n[eG], a7p[eG])) {
				right--;
				break
			} var fL = Math.floor((left + right) / 2),
			top = a7n[eG];
		for (hb = a7n[eG] - hz[eG] - 1; 0 <= hb; hb--)
			if (!a8q(eG, fL, --top, a7o[eG])) {
				top++;
				break
			} var bottom = a7n[eG];
		for (hb = hy[eG] - a7n[eG] - a7p[eG]; 0 <= hb; hb--)
			if (!a8q(eG, fL, ++bottom + a7p[eG] - 1, a7o[eG])) {
				bottom--;
				break
			} var fM = Math.floor((top + bottom) / 2);
		a8h(eG, fL, fM, a7o[eG], a7p[eG]) && (a7m[eG] = fL, a7n[eG] = fM)
	}

	function a8h(player, fL, fM, g6, gC) {
		el = Math.floor(.2 * g6);
		for (var el, iN = fL + g6 - 1; fL <= iN; iN--)
			if (!a8p(player, iN, fM, gC)) return;
		for (iN = fM + gC - 1 - (el = (el = Math.floor(.25 * gC)) < 1 ? 1 : el); fM + el <= iN; iN--)
			if (!a8q(player, fL, iN, g6)) return;
		return 1
	}

	function a8p(player, fL, fM, gC) {
		return a2.qF(player, 4 * (fM * ap.eB + fL)) && a2.qF(player, 4 * ((fM + gC - 1) * ap.eB + fL))
	}

	function a8q(player, fL, fM, g6) {
		return a2.qF(player, 4 * (fM * ap.eB + fL)) && a2.qF(player, 4 * (fM * ap.eB + fL + g6 - 1))
	}
	this.cq = function() {
		if (a0Q = 0 === (a0Q = b9.dG.data[11].value) ? 400 : 1 === a0Q ? 200 : 100, a81 = !1, a7x = .88, a7u = .5, a7v = 1.8, a7s = Math.floor(.5 * aK.min), a7t = Math.floor(.2 * a7s), a7w = 12 - 3 * b9.dG.data[9].value, a7l = a7k = 0, a7m =
			new Uint16Array(eg), a7n = new Uint16Array(eg), a7o = new Uint16Array(eg), a7p = new Uint16Array(eg), a7q = new Float32Array(eg), a7r = new Float32Array(eg), a84 = new Uint8Array(2 * eg), a85 = new Uint8Array(5 * eg), a8E =
			new Uint8Array(eg), a8F = new Uint8Array(eg), a8D || (a82 = a82 || document.createElement("canvas"), a8G()), a7z = a7y = 0, a80 = 1, b9.dG.data[7].value) {
			var eG, a8L;
			for (a8H(), gG.font = aY.g1.g2(1, 100), a8L = 100 / Math.floor(gG.measureText("900 000").width), eG = eg - 1; 0 <= eG; eG--) a7q[eG] = Math.min(a8L, 2 * a7r[eG]);
			a8C = a8L, a8B[0] = 100 / (a8L * Math.floor(gG.measureText("5 000 000").width)), a8B[1] = 100 / (a8L * Math.floor(gG.measureText("50 000 000").width)), a8B[2] = 100 / (a8L * Math.floor(gG.measureText("500 000 000").width)), a8B[3] =
				100 / (a8L * Math.floor(gG.measureText("1 000 000 000").width))
		} else a8H();
		! function() {
			var eG;
			for (eG = eg - 1; 0 <= eG; eG--) f2[eG] < 12 ? (a7m[eG] = hw[eG] + 1, a7n[eG] = hz[eG] + 1, a7o[eG] = 1, a7p[eG] = 1) : (a7m[eG] = hw[eG], a7n[eG] = hz[eG] + 1, a7o[eG] = 4, a7p[eG] = 2);
			if (fd)
				for (eG = 0; eG < h3; eG++) a7o[eG] = 0;
			a86 = a1.get(4).width, a87 = a1.get(4).height
		}()
	}, this.a7j = function(ej, wQ) {
		wQ > 18 * f2[ej] ? (a8F[ej] = 6, a2.yQ[ej] = 2 + a2.yQ[ej] % 2) : (a8E[ej] = 4, (a2.yQ[ej] < 2 || 3 < a2.yQ[ej]) && (a2.yQ[ej] = 6 + a2.yQ[ej] % 2))
	}, this.m2 = function(ej, wQ) {
		wQ > 6 * f2[ej] ? (a8F[ej] = 6, a2.yQ[ej] = 4 + a2.yQ[ej] % 2) : (a8E[ej] = 4, (a2.yQ[ej] < 4 || 5 < a2.yQ[ej]) && (a2.yQ[ej] = 8 + a2.yQ[ej] % 2))
	}, this.resize = function() {
		a8D || (a8G(), a8K(a83))
	}, this.uB = function() {
		for (var eG = 0; eG < h3; eG++) hv[eG] - hw[eG] != 3 || hy[eG] - hz[eG] != 3 ? (a7m[eG] = hw[eG] + (hv[eG] !== hw[eG] ? 1 : 0), a7n[eG] = hz[eG], a7o[eG] = 1, a7p[eG] = 1) : (a7m[eG] = hw[eG], a7n[eG] = hz[eG] + 1, a7o[eG] = 4, a7p[eG] =
			2)
	}, this.ms = function(player, g0, a8N) {
		player += g0 * eg;
		if (0 === g0) return a84[player] === a8N && 0 < a85[player] ? void(a85[player] = 0) : (a84[player] = a8N, void(a85[player] = az.xF(a8N) ? 255 : 64));
		1 === g0 ? (a85[player] = 64, a84[player] = a8N) : a85[player] = a8N
	}, this.gF = function() {
		a8D ? a8K(gG) : a81 && (1 !== a80 ? (gG.imageSmoothingEnabled = !0, gG.setTransform(a80, 0, 0, a80, 0, 0), gG.drawImage(a82, -a7y / a80, -a7z / a80), gG.setTransform(1, 0, 0, 1, 0, 0), gG.imageSmoothingEnabled = !1) : gG.drawImage(a82, -
			a7y, -a7z))
	}, this.z8 = function(gv, gy) {
		a7y += gv, a7z += gy
	}, this.sZ = function(gv, gy) {
		a6.z8(gv, gy)
	}, this.zoom = function(fu, gA, gB) {
		a80 *= fu, a7y = (a7y + gA) * fu - gA, a7z = (a7z + gB) * fu - gB
	}, this.j7 = function(wZ) {
		return !a8D && !(!a8A && !wZ && b3.db < a89 + (1 !== a80 || 0 !== a7y || 0 !== a7z ? a0Q : fO ? aa.vR ? a0Q : 1e3 : fd ? 1e3 : ip ? j.fP || 2 === rJ ? 1e3 : a0Q : 2 === rJ ? 500 : a0Q) || (a8A = !1, a89 = b3.db, a8K(a83), 0))
	}, this.ji = function(eG) {
		return a8M(eG) * a7q[eG]
	}, this.a8P = function(player) {
		return a7q[player]
	}, this.i8 = function() {
		b3.iM() % 10 == 9 && (a8A = !0), 4 <= ++a7l && function() {
			var eG, hb, hk;
			for (a7l = 0, hk = 4; 1 <= hk; hk--)
				for (hb = iP - 1; 0 <= hb; hb--) eG = iQ[hb] + hk * eg, 0 < a85[eG] && a85[eG] < 255 && a85[eG]--;
			if (2 !== rJ)
				for (hb = iP - 1; 0 <= hb; hb--) eG = iQ[hb], 0 < a85[eG] && a85[eG] < 255 && a85[eG]--
		}();
		for (var ec = Math.floor(.1 * iP), eG = a7k + (ec = iP < (ec = ec < 8 ? 8 : ec) ? iP : ec) - 1; a7k <= eG; eG--) ! function(eG) {
			var gO = a8M(eG) * a7q[eG];
			0 < a7o[eG] && a8h(eG, a7m[eG], a7n[eG], a7o[eG], a7p[eG]) ? ! function(eG) {
				for (var fL, fM, g6, gC, fa = !1, hk = 0; hk < 8; hk++) {
					if (g6 = a7o[eG] + 2, gC = a7p[eG] + 2, g6 > hv[eG] - hw[eG] + 1 || gC > hy[eG] - hz[eG] + 1) return fa;
					if (fL = a7m[eG] - 1, fM = a7n[eG] - 1, !a8h(eG, fL, fM, g6, gC)) return fa;
					a7m[eG] = fL, a7n[eG] = fM, a7o[eG] = g6, a7p[eG] = gC, fa = !0
				}
				return fa
			}(eG) && function(eG, gO) {
				for (var fL, fM, g6, gC, fa = !1, a2M = a7o[eG], kI = 1 + Math.floor(.02 * a2M), hk = 1; hk < 5; hk++) {
					if ((g6 = a2M + hk * kI) > hv[eG] - hw[eG] + 1) return fa;
					if ((gC = a8n(gO, g6)) > hy[eG] - hz[eG] + 1) return fa;
					fL = hw[eG] + Math.floor(Math.random() * (hv[eG] - hw[eG] + 2 - g6)), fM = hz[eG] + Math.floor(Math.random() * (hy[eG] - hz[eG] + 2 - gC)), a8h(eG, fL, fM, g6, gC) && (a7m[eG] = fL, a7n[eG] = fM, a7o[eG] = g6, a7p[
						eG] = gC, fa = !0)
				}
				return fa
			}(eG, gO) && a8k(eG) : ! function(eG, gO) {
				var gC, fL = a7m[eG] + 1,
					fM = a7n[eG] + 1,
					g6 = a7o[eG] - 2;
				for (;;) {
					if (g6 < 1) {
						a7o[eG] = 0;
						break
					}
					if (gC = a8n(gO, g6), a8h(eG, fL, fM, g6, gC)) return a7m[eG] = fL, a7n[eG] = fM, a7o[eG] = g6, a7p[eG] = gC, 1;
					fL++, fM++, g6 -= 2
				}
				return
			}(eG, gO) ? function(eG, gO) {
				var fL, fM, g6, gC, hk, kN, hd = hv[eG] - hw[eG] + 1,
					a8o = Math.floor(.02 * hd);
				for (kN = -6 * (a8o = a8o < 1 ? 1 : a8o), hk = hd; kN <= hk; hk -= a8o)
					if (gC = a8n(gO, g6 = 0 < hk ? hk : 1), fL = hw[eG] + Math.floor(Math.random() * (hv[eG] - hw[eG] + 2 - g6)), fM = hz[eG] + Math.floor(Math.random() * (hy[eG] - hz[eG] + 2 - gC)), a8h(eG, fL, fM, g6, gC)) return a7m[
						eG] = fL, a7n[eG] = fM, a7o[eG] = g6, a7p[eG] = gC
			}(eG, gO) : a8k(eG)
		}(iQ[eG % iP]);
		a7k = (a7k + ec) % iP
	}, this.j3 = function() {
		var eG, ej, gc, gd;
		if (b3.iM() % 4 == 1)
			for (eG = iP - 1; 0 <= eG; eG--) ej = iQ[eG], a2.yQ[ej] < 2 || ((gc = Math.max(a8E[ej] - 1, 0)) === (gd = Math.max(a8F[ej] - 1, 0)) ? 0 === gc && (a2.yQ[ej] %= 2) : 0 === gd && a2.yQ[ej] < 6 && (a2.yQ[ej] += 4), a8E[ej] = gc, a8F[
				ej] = gd)
	}, this.w9 = function(player) {
		var eG = player + 2 * eg,
			dc = a85[eG];
		return 0 < dc && (k.r9(50, player), a85[eG] = 0, 255 === dc)
	}, this.v9 = function(player) {
		return 255 === a85[player + 2 * eg]
	}
}

function bt() {
	var fv, a8r;
	this.cq = function() {
		fv = "Abbasid Caliphate;Aceh s;Achaemenid Z;Afsharid z;Aghlabid Emirate;Ahom z;Akkadian Z;Aksumite Z;Akwamu;Alaouite z;Almohad Caliphate;Almoravid z;Angevin Z;Aq Qoyunlu;Armenian Z;Assyria;Ashanti Z;Austrian Z;Austria-Hungary;Ayyubid z;Aztec Z;Aulikara Z;Babylonian Z;Balhae;Banten s;S Banjar;Bamana Z;Bengal s;Benin Z;Kadamba z;Bornu Z;E Brazil;Britannic Z;British Z;British Raj;Bruneian Z;Bukhara Z;Burgundian State;Buyid z;Byzantine Z;Caliphate of Córdoba;Cao Wei;Carthaginian Z;Cebu Rajahnate;Chagatai Khanate;Chalukya z;Chauhan z;Chavín Z;Chenla;Chera z;Chola z;Comanche Z;Congo Free State;Crimean Khanate;Dacian Z;Delhi s;Demak s;Durrani Z;Dutch Z;Egyptian Z;Elamite Z;Exarchate of Africa;Abyssinia;Fatimid Caliphate;First French Z;Frankish Z;Funan;Gallic Z;Gaza Z;Republic of Genoa;German Z;Ghana Z;Ghaznavid z;Ghurid z;Goguryeo;Goryeo;Gorkha Z;Göktürk Khaganate;Golden Horde;S Gowa;Seljuq Z;Gupta Z;Hafsid Y;Han z;Hanseatic League;E Harsha;Hephthalite Z;Hittite Z;Holy Roman Z;Hotak z;Hoysala Z;Hunnic Z;Husainid z;Idrisid z;Ilkhanate;K Israel;K Judah;Inca Z;Italian Z;E Japan;Jin z;Johor Z;Jolof Z;Joseon;Kaabu Z;Kachari Y;Kalmar Union;Kanem Z;Kanva z;Kara-Khanid Khanate;Kazakh Khanate;Khazar Khaganate;Khmer Z;Khilji z;Khwarazmian z;Kievan Rus';Konbaung z;Kong Z;Korean Z;Kushan Z;K Kush;Lakota;Latin Z;Later Lê z;Liao z;Lodi s;Khmer Z;Macedonian Z;Majapahit Z;Mali Z;Malacca Z;Mamluk s;Manchukuo;Maratha Z;Marinid z;Massina Z;Mataram s;Mauretania;Mauryan Z;Median Z;Mlechchha z;Ming z;Mitanni Z;Mongol Z;Mughal Z;Nanda Z;Nguyễn z;North Sea Z;E Nicaea;Numidia;Omani Z;Ottoman Z;Oyo Z;Pagan Z;Pahlavi z;Pala Z;Palmyrene Z;Parthian Z;Pontic Z;Portuguese Z;K Prussia;Ptolemaic Z;Qajar z;Qara Qoyunlu;Qin z;Qing z;Ramnad Sethupathis;Rashidun Caliphate;Rashtrakuta z;Roman Z;Rouran Khaganate;Rozwi Z;Rustamid z;Russian Z;Tsardom of Russia;Saadi z;Safavid z;Saffarid z;Sassanid z;Satavahana z;Samanid Z;Soviet Union;Saudeleur z;Duchy of Savoy;Seleucid Z;Serbian Z;Shu Han;Shang z;Siam Z;Sikh Z;Singhasari;Sokoto Caliphate;Song z;Songhai Z;Spanish Z;Srivijaya Z;Sui z;K Mysore;Shunga Z;S Sulu;Sumer;Sur Z;Swedish Z;Tahirid z;Tang z;Tây Sơn z;S Ternate;E Thessalonica;German Reich;Tibetan Z;Tondo z;S Tidore;Timurid Z;K Tlemcen;E Trebizond;Toltec Z;Toungoo z;Toucouleur Z;Tu'i Tonga Z;Turgesh Khaganate;Umayyad Caliphate;Uyunid Emirate;Uyghur Khaganate;Uzbek Khanate;Vandal Y;Vijayanagara Z;Republic of Venice;Wari Z;Wassoulou Z;Wattasids;Western Roman Z;Eastern Wu;Western Xia z;Xin z;Yuan z;Zand z;Zhou z;Zulu Z;Yugoslavia;Kosovo;Sikkim;Kanem–Bornu Z;Wadai Z;Ethiopian Z;Rozvi Z;Sasanian Z;E Vietnam;Shilluk Y;K Aksum;Gwiriko Y;Toro Y;Malindi Y;K Loango;K Mapungubwe;Ryukyu Y;K Cyprus;K Jerusalem;Garhwal Y;K Nepal;K Cambodia;Champa Y;Hanthawaddy Y;Phayao Y;K Sardinia;K Sicily;K Gwynedd;K Scotland;K Desmond;K Poland;K Hungary;K Croatia;K Bohemia;Albanian Y;K Georgia;K Portugal;Khanate of Sibir;K Romania;Cossack Hetmanate;Duchy of Bouillon;K Ireland;Lordship of Ireland;K Italy;Republic of Pisa;Idrisid z;Almoravid z;Almohad Caliphate;Marinid z;Wattasid z;Saadian z;Republic of Salé;Rif Republic;K Kush;Makuria;Alodia;Ayyubid z;Mamluk s;Egypt Eyalet;K Fazughli;S Sennar;S Darfur;Mahdist State;S Egypt;K Egypt;Emirate of Cyrenaica;K Libya;Republic of Egypt;Republic of the Sudan;United Arab Republic;Libyan Arab Republic;Zirid z;Hafsid z;K Kuku;Regency of Algiers;Gurunsi;Liptako;Tenkodogo;Wogodogo;Yatenga;Bilanga;Bilayanga;Bongandini;Con;Macakoali;Piela;Nungu;K Sine;K Saloum;K Baol;K Cayor;K Waalo;Bundu;Bonoman;Gyaaman;Denkyira;Mankessim Y;K Dahomey;Oyo Z;K Nri;Aro Confederacy;Kwararafa;Biafra;Buganda;Bunyoro;Ankole;Busoga;Tanganyika;Kuba Y;K Luba;K Lunda;Yeke Y;K Ndongo;Kasanje Y;K Matamba;Mbunda Y;Chokwe Y;Kazembe Y;K Butua;Ndebele Y;Mthethwa Z;Bophuthatswana;Ciskei;Transkei;Venda;Rhodesia;Kart z;Nogai Horde;Khanate of Bukhara;Khanate of Khiva;Khamag Mongol;Northern Fujiwara;Kamakura Shogunate;Ashikaga Shogunate;Jaxa;Republic of Ezo;Jiangxi Soviet;Hunan Soviet;Guangzhou Commune;Gojoseon;Alaiye;Beylik of Bafra;Kara Koyunlu;Kars Republic;K Iraq;Arab Federation;Kar-Kiya z;Baduspanids;Marashiyan z;Afrasiyab z;Mihrabanid z;Safavid Iran;Sheikhdom of Kuwait;Bani Khalid Emirate;Emirate of Diriyah;Emirate of Najd;Muscat and Oman;Emirate of Riyadh;S Najd;K Hejaz;Fadhli s;Emirate of Beihan;Emirate of Dhala;S Lahej;Republic of Kuwait;K Cochin;Jaffna Y;Laur Y;Pandya z;Jaunpur s;Jaintia Y;Hyderabad State;Travancore;Udaipur State;Manikya z;Lan Xang;K Vientiane;K Champasak;Lao Issara;K Laos;Pyu States;Ava;Mon Ys;Pegu;K Mrauk U;Taungoo z;Shan States;Arakan;Raktamaritika;Singhanavati;Dvaravati;Ngoenyang;Hariphunchai;Tambralinga;Lavo Y;Langkasuka;Sukhothai Y;S Singora;Ayutthaya Y;Thonburi Y;Lan Na;Pattani Y;Jambi s;Palembang s;S Deli;S Langkat;S Serdang;S Cirebon;K Pajang;K Bali;Bima s;K Larantuka;K Banggai;Luwu;S Bone;Caucasian Albania;Kabardia;Circassia;K Abkhazia;Elisu s;Avar Khanate;Caucasian Imamate;K Imereti;K Kartli;K Kakheti;Crown of Aragon;Emirate of Granada;K Majorca;Crown of Castile;K Haiti;Cocollán;Zapotec Civilization;Mosquito Y;Somoza Regime;Iroquois Confederacy;Cherokee Nation;Vermont Republic;State of Muskogee;K Alo;K Sigave;K Fiji;K Nauru;K Chile;Muisca Confederation;El Stronato;K Chimor;Jungle Republic;Liga Federal;Supreme Junta;Weimar Republic;K Bavaria;Bremen;Frankfurt;Hamburg;K Hanover;Holstein;Lippe;Nassau;Oldenburg;Pomerania;Reuss;Saxe-Altenburg;Saxony;Schleswig;Waldeck;Württemberg;Helvetic Republic;Republic of Florence;Duchy of Urbino;Republic of Cospaia;Duchy of Lucca;Duchy of Mantua;Duchy of Milan;Papal States"
			.split(";");
		var eG, hb, a8s = ["K ", " Y", "E ", " Z", " z", " s", "S "],
			a8t = ["Kingdom of ", " Kingdom", "Empire of ", " Empire", " Dynasty", " Sultanate", "Sultanate of "];
		for (a8r =
			"Pestilent Dominion;Wretched Realm;Damned Province;Corrupt Zone;Cursed Territory;Blight Nation;Haunted Expanse;Malevolent State;Ruined Empire;Contaminated Land;Epidemic Domain;Forsaken District;Abandoned Wasteland;Necrotic Enclave;Tainted Domain;Decayed Principality;Infested Region;Malignant Territory;Toxic Dominion;Ravaged Sector;Ghostly Realm;Plagued Commonwealth;Afflicted State;Desolate Nation;Apocalyptic Zone;Radiated Province;Deathly District;Pestilence Haven;Doom Territory;Malefic Expanse;Abandoned State;Cursed Haven;Corroded Zone;Hauntland;Noxious Nation;Infected Enclave;Ruinous Domain;Wasteland Woe;Rotten Principality;Voided Land;Vile Dominion;Catastrophic Region;Eerie Expanse;Desolation State;Forsaken Outpost;Contagion District;Damaged Province;Abhorrent Sector;Accursed Nation;Doomstruck Land;Radiant Ruin;Deathly Enclave;Malefic Dominion;Plague District;Infected Haven;Corrupt State;Pestilent Territory;Razed Realm;Haunted Wasteland;Toxic Sector;Cursed Dominion;Decaying Province;Forsaken Enclave;Ruinous Region;Malignant Haven;Infested State;Ghostly Nation;Tainted Territory;Damned District;Radiated Dominion;Desolate Expanse;Apocalyptic Land;Death Zone;Wretched State;Malevolent Haven;Plagued Nation;Noxious Domain;Voided Territory;Eerie Sector;Accursed Province;Necrotic District;Doom Haven;Haunt Realm;Rotten Nation;Forsaken Territory;Infected State;Abhorrent Expanse;Malignant Land;Toxic Dominion;Ruined District;Ghostland;Cursed Sector;Radiant Nation"
			.split(";"), eG = fv.length - 1; 0 <= eG; eG--)
			for (hb = a8s.length - 1; 0 <= hb; hb--) fv[eG] = fv[eG].replace(a8s[hb], a8t[hb]);
		if (settings.realisticNames) fv = realisticNames;
	}, this.d2 = function() {
		var eG;
		if (aU.ij && aU.ik.a73)
			for (eG = h3; eG < eg; eG++) jn[eG] = aU.ik.a73[eG % po];
		else(9 === im ? function() {
			var eG, gS = aL.random(),
				ec = fv.length,
				p2 = h3 + aM.a8z;
			for (eG = p2 - 1; h3 <= eG; eG--) jn[eG] = fv[(eG + gS) % ec];
			for (ec = a8r.length, eG = p2; eG < eg; eG++) jn[eG] = a8r[eG % ec]
		} : ip ? function() {
			var eG, gS = aL.random();
			for (eG = h3; eG < eg; eG++) jn[eG] = fv[(eG + gS) % eg]
		} : function() {
			var eG, ec = fv.length,
				gS = aL.random();
			for (eG = h3; eG < eg; eG++) jn[eG] = fv[(eG + gS) % ec]
		})()
	}, this.uW = function() {
		var eG, ec, p2, gS;
		if (!ip) {
			for (wd = new Array(h3), ec = h3, eG = 0; eG < ec; eG++) wd[eG] = jn[eG];
			if (b9.dG.data[6].value) {
				for (p2 = fv.length, gS = aL.a8y(), eG = 0; eG < ec; eG++) jn[eG] = fv[(eG + gS) % p2];
				jn[eX] = wd[eX]
			}
		}
	}
}

function cD() {
	this.a90 = [], this.a91 = [], this.cq = function() {
		this.a90 = [], this.a91 = []
	}, this.i8 = function() {
		0 <= this.a90.length && this.a92(this.a90), 0 <= this.a91.length && this.a92(this.a91)
	}, this.a92 = function(dp) {
		for (var hk = -1, eG = dp.length - 1; 0 <= eG; eG--)
			if (dp[eG].db--, dp[eG].db <= 0) {
				hk = eG;
				break
			} for (eG = hk; 0 <= eG; eG--) dp.shift()
	}, this.v1 = function(id, qW, a93) {
		return this.a94(this.a90, id, qW, a93)
	}, this.a95 = function(id, qW, a93) {
		return this.a94(this.a91, id, qW, a93)
	}, this.a94 = function(dp, id, qW, a93) {
		return ! function(dp, id, qW) {
			var eG, pV;
			for (eG = qW.length - 1; 0 <= eG; eG--)
				for (pV = dp.length - 1; 0 <= pV; pV--)
					if (dp[pV].player === qW[eG] && id === dp[pV].id) return 1;
			return
		}(dp, id, qW) && (a93 && function(dp, id, qW) {
			var eG;
			for (eG = qW.length - 1; 0 <= eG; eG--) dp.push({
				player: qW[eG],
				id: id,
				db: 384
			})
		}(dp, id, qW), !0)
	}
}

function uT(qW) {
	var eG;
	for (jn = new Array(eg), wd = jn, h4 = new Uint8Array(eg), hw = new Uint16Array(eg), hz = new Uint16Array(eg), hv = new Uint16Array(eg), hy = new Uint16Array(eg), f2 = new Uint32Array(eg), q3 = new Uint32Array(eg), eY = new Uint32Array(eg),
		donationsTracker.reset(), ed = new Array(eg), eu = new Array(eg), ev = new Array(eg), ey = new Array(eg), h5 = new Uint8Array(eg), eG = qW.length - 1; 0 <= eG; eG--) jn[eG] = qW[eG].name, h5[eG] = qW[eG].a4v
}

function cB() {
	this.wf = 0, this.qW = null, this.cq = function() {
		this.wf = 0, this.qW = []
	}, this.a98 = function(player) {
		this.qW.push(player), rL++, h5[player] = 2, player === eX && (u.show(!1, !1), t.a10()), a6.w9(player)
	}, this.a6k = function(player) {
		var eG, qW;
		if (2 !== h5[player])
			for (eG = (qW = this.qW).length - 1; 0 <= eG; eG--)
				if (qW[eG] === player) return void qW.splice(eG, 1)
	}, this.i8 = function() {
		ip || (30 === this.wf && 2140 <= b3.iM() && this.a99(), this.wf = (this.wf + 1) % 60)
	}, this.a99 = function() {
		for (var qW = this.qW, eG = qW.length - 1; 0 <= eG; eG--) ! function(player, h7) {
			!a4.i6(player) || (h7 = Math.max(Math.min(100, eY[player]), eU(h7 * eY[player], 100))) < 100 || (0 === eu[player].length ? !ak.i7.i8(player) && hO && iA(player, h7, 0, 0) : (hO ? iL : iT)(player, h7))
		}(qW[eG], 12)
	}
}

function uX() {
	for (iP = 0, eG = eg - 1; 0 <= eG; eG--) 0 !== h4[eG] && iP++;
	iQ = new Uint16Array(iP);
	for (var ec = 0, eG = 0; eG < eg; eG++) 0 !== h4[eG] && (iQ[ec++] = eG)
}

function j2() {
	a9B(), a9C()
}

function a9C() {
	for (var eG = iP - 1; 0 <= eG; eG--) 0 === h4[iQ[eG]] && a9D(eG)
}

function a9D(eG) {
	iP--;
	for (var hb = eG; hb < iP; hb++) iQ[hb] = iQ[hb + 1]
}

function a9B() {
	for (var gh, eG = iP - 1; 0 <= eG; eG--) f2[iQ[eG]] <= eU(q3[iQ[eG]], 4) ? f2[iQ[eG]] <= 1e3 && (2 !== h4[iQ[eG]] || 0 === f2[iQ[eG]]) && a6U(iQ[eG]) : f2[iQ[eG]] >= q3[iQ[eG]] ? q3[iQ[eG]] = f2[iQ[eG]] : (gh = eU(q3[iQ[eG]] - f2[iQ[eG]], 1e3),
		q3[iQ[eG]] -= gh < 1 ? 1 : gh)
}

function mF() {
	for (var a6L = 0, eG = iP - 1; 0 <= eG; eG--) a6L += eY[iQ[eG]];
	return a6L % 4096
}

function bu() {
	var a9E;
	this.is = null, this.cq = function() {
		a9E = [], 9 === im && this.a9F()
	}, this.a9F = function() {
		var eG, a9G = [50, 74, 95, 150, 190, 333];
		if (this.a8z = 0, this.is = [0, 0, 0, 0, 0, 0], h3 <= a9G[0]) this.is[0] = Math.max(ai.fH(h3 * (512 - h3), a9G[0]), 13), ii = this.is[0];
		else
			for (ii = eg - h3, eG = 1; eG < 6; eG++)
				if (h3 <= a9G[eG]) {
					this.is[eG - 1] = 512 - a9G[eG - 1] - eU((512 - a9G[eG - 1]) * (h3 - a9G[eG - 1]), a9G[eG] - a9G[eG - 1]), this.is[eG] = 512 - h3 - this.is[eG - 1];
					break
				} po = h3 + ii
	}, this.a6j = function(player) {
		a9E.push({
			player: player,
			wN: 14 + aL.he(20)
		})
	}, this.i8 = function() {
		var eG;
		if (9 === im)
			for (eG = a9E.length - 1; 0 <= eG; eG--) --a9E[eG].wN <= 0 && (a6.ms(a9E[eG].player, 0, 46), a9E.splice(eG))
	}
}

function cT() {
	function a9M(eG) {
		return eG >= ap.a9R() && eG !== ap.a6s()
	}

	function a9K(eG) {
		return 1 !== eG && !a9M(eG) && eG !== ap.a6s()
	}
	this.eB = 0, this.eC = 0, this.pE = null, this.pA = null, this.pB = null, this.pF = null, this.pc = 0, this.a4L = 0, this.pC = !1, this.a77 = 20, this.pD = new a9I, this.ik = new a9J, this.cq = function() {
		this.ik.cq()
	}, this.d2 = function(map, a4P) {
		((map %= this.a77) !== this.pc || a9K(this.pc) && a4P !== this.a4L) && (this.pC = !1, this.pD.a4V(), aL.uS(map), this.pc = map, this.a4L = a4P, a9K(map) && (ap.ik.pb[map].a9L = a4P), a9M(this.pc) ? a9N() : (map = ap.ik.pb[this.pc], this
			.eB = map.g6, this.eC = map.gC, aL.uS(map.a9L), aA.d2([this.eB, this.eC, map.jr, map.jo]), a9O(), a9.a9P(), aA.a9Q()))
	}, this.a9R = function() {
		return 10
	}, this.a9S = function(eG) {
		return 3 === eG || 7 === eG || 9 === eG || eG === this.a6s()
	}, this.a9T = function(eG) {
		return 2 === eG || 7 === eG || 9 === eG
	}, this.a9U = function(eG) {
		return 1 === eG
	}, this.a6s = function() {
		return this.a77
	}
}

function a9I() {
	function a9e() {
		ap.pD.i8()
	}

	function a9j(ej, a9i) {
		0 < a9i && (ap.pF[ej] += a9i, ap.pF[ej + 1] += a9i, ap.pF[ej + 2] += a9i)
	}

	function fk(ej) {
		return ap.pF[ej + 2] > ap.pF[ej] && ap.pF[ej + 2] > ap.pF[ej + 1]
	}
	this.zK = -1, this.dX = 0, this.a9V = 0, this.a9W = 8, this.a9X = 32, this.a9Y = 8, this.a9Z = 32, this.a9a = [0, 0], this.yQ = [0, 0, 0, 0], this.hG = null, this.a9b = !0, this.a9c = !1, this.a4V = function() {
		-1 !== this.zK && clearTimeout(this.zK), this.zK = -1, this.hG = null, aA.a9Q()
	}, this.cq = function() {
		7 === x.dZ() || this.a9c || (this.a9b = !0, this.dX = 0, this.a9V = 1, this.a9a = [ap.ik.pb[ap.pc].pa[0], ap.ik.pb[ap.pc].pd[0]], this.yQ = [ap.ik.pb[ap.pc].a9d[3], ap.ik.pb[ap.pc].a9d[4], ap.ik.pb[ap.pc].a9d[5], ap.ik.pb[ap.pc].a9d[6]],
			this.a9W = ap.ik.pb[ap.pc].a9d[7], this.a9X = ap.ik.pb[ap.pc].a9d[8], this.a9Y = ap.ik.pb[ap.pc].a9d[9], this.a9Z = ap.ik.pb[ap.pc].a9d[10], this.a9b ? this.zK = setTimeout(a9e, 16) : this.i8())
	}, this.i8 = function() {
		if (8 === x.dZ() && f.k5()) this.zK = setTimeout(a9e, 16);
		else {
			if (0 === this.dX) {
				var a9L = aL.a8y();
				if (aL.uS(ap.ik.pb[ap.pc].a9d[2]), aA.d2([ap.eB, ap.eC, ap.ik.pb[ap.pc].a9d[0], ap.ik.pb[ap.pc].a9d[1]]), aL.uS(a9L), this.hG = aA.a9f(), this.dX++, this.a9b) return void(this.zK = setTimeout(a9e, 16))
			}
			for (var ej, fY, a9L = this.a9b ? 10 : 1e6, a9L = ap.eC - this.a9V - 1 < a9L ? ap.eC - this.a9V - 1 : a9L, q0 = this.a9V + a9L, fM = this.a9V; fM < q0; fM++)
				for (var fL = 1; fL < ap.eB - 1; fL++) fk(ej = 4 * (fY = fL + fM * ap.eB)) ? this.a9g(ej, fY, 1) : (this.a9g(ej, fY, 0), function(fL, fM, ej) {
					return 1 < fL && fk(ej - 4) || fL < ap.eB - 2 && fk(ej + 4) || 1 < fM && fk(ej - 4 * ap.eB) || fM < ap.eC - 2 && fk(ej + 4 * ap.eB)
				}(fL, fM, ej) && this.a9h(fL, fM));
			this.a9V = q0, this.a9V >= ap.eC - 1 ? (ap.pA.putImageData(ap.pB, 0, 0, 1, 1, ap.eB - 2, ap.eC - 2), b3.d1 = !0, this.a4V()) : this.a9b && (this.zK = setTimeout(a9e, 16))
		}
	}, this.a9g = function(ej, fY, g0) {
		a9j(ej, Math.floor(this.a9a[g0] + this.yQ[g0] * this.hG[fY] / 1e4) - ap.pF[ej])
	}, this.a9k = function(ej, gS, a9l, g0, yQ) {
		a9j(ej, Math.floor(this.a9a[g0] + (1 - gS / a9l) * yQ) - ap.pF[ej])
	}, this.a9h = function(gA, gB) {
		for (var ej, gS, a9l, pf = gA - this.a9X, pg = gB - this.a9X, q1 = gA + this.a9X, q0 = gB + this.a9X, pf = pf < 1 ? 1 : pf, q1 = q1 > ap.eB - 2 ? ap.eB - 2 : q1, q0 = q0 > ap.eC - 2 ? ap.eC - 2 : q0, fM = pg < 1 ? 1 : pg; fM <= q0; fM++)
			for (var fL = pf; fL <= q1; fL++) fk(ej = 4 * (fL + fM * ap.eB)) ? (a9l = this.a9W + (this.a9X - this.a9W) * this.hG[fL + ap.eB * fM] / 1e4, Math.abs(gA - fL) > a9l || Math.abs(gB - fM) > a9l || a9l <= (gS = Math.sqrt((gA - fL) * (
				gA - fL) + (gB - fM) * (gB - fM))) || this.a9k(ej, gS, a9l, 1, this.yQ[3])) : (a9l = this.a9Y + (this.a9Z - this.a9Y) * this.hG[fL + ap.eB * fM] / 1e4, Math.abs(gA - fL) > a9l || Math.abs(gB - fM) > a9l || a9l <= (gS = Math
				.sqrt((gA - fL) * (gA - fL) + (gB - fM) * (gB - fM))) || this.a9k(ej, gS, a9l, 0, this.yQ[2]))
	}
}

function a9O() {
	2 === ap.pc ? a9m([256], [256], [0, 205, 256], [500, 500, 0], [0, 0, 0]) : 7 === ap.pc ? a9m([512], [512], [0, 380, 512], [500, 500, 0], [0, 0, 0]) : 8 === ap.pc ? a9m([410], [410], [0, 120, 210], [0, 80, 640], [0, 0, 0]) : 9 === ap.pc && a9m([
		512
	], [512], [0, 70, 180, 200, 290, 420, 512], [500, 500, 0, 0, 500, 500, 0], [0, 0, 0, 0, 0, 0, 0])
}

function a9m(a9n, a9o, a9p, a9q, a9r) {
	for (var fL, fM, a9t, a9u, fu, a9v, gu = a9n.length - 1, a9s = ap.eB + ap.eC, ec = (a9s *= a9s, a9p.length), eG = ec - 1; 0 <= eG; eG--) a9p[eG] *= a9p[eG];
	var a9w = new Array(ec),
		a9x = new Array(ec),
		a9y = new Array(ec),
		de = aA.a9f();
	if (void 0 === a9r)
		for (a9r = new Array(ec), eG = ec - 1; 0 <= eG; eG--) a9r[eG] = 0;
	for (eG = 1; eG < ec; eG++) a9w[eG] = a9p[eG] - a9p[eG - 1], a9x[eG] = a9q[eG] - a9q[eG - 1], a9y[eG] = a9r[eG] - a9r[eG - 1];
	for (fL = ap.eB - 1; 0 <= fL; fL--)
		for (fM = ap.eC - 1; 0 <= fM; fM--) {
			for (a9t = a9s, eG = gu; 0 <= eG; eG--) a9t = (a9u = (fL - a9n[eG]) * (fL - a9n[eG]) + (fM - a9o[eG]) * (fM - a9o[eG])) < a9t ? a9u : a9t;
			for (fu = a9q[ec - 1], a9v = a9r[ec - 1], eG = 1; eG < ec; eG++)
				if (a9t < a9p[eG]) {
					fu = a9q[eG - 1] + a5w((a9t - a9p[eG - 1]) * a9x[eG], a9w[eG]), a9v = a9r[eG - 1] + a5w((a9t - a9p[eG - 1]) * a9y[eG], a9w[eG]);
					break
				} a9z(ap.eB * fM + fL, fu, a9v, de)
		}
}

function a9z(g0, fu, a9v, de) {
	fu < 500 ? de[g0] = eU(de[g0] * fu * 2, 1e3) : 500 < fu && (de[g0] += eU(2 * (1e4 - de[g0]) * (fu - 500), 1e3)), de[g0] += eU(a9v * (10 * fu - de[g0]), 1e3)
}

function bv() {
	var aA0;
	this.wU = 0, this.wV = 0, this.wX = 0, this.wY = 0, this.cq = function() {
		(aA0 = new Array(ap.a9R()))[0] = {
			g6: [0, 5e3, 8e3, 1e4],
			gS: [220, 250, 255, 220],
			tc: [190, 220, 0, 0],
			hk: [170, 200, 0, 0]
		}, aA0[1] = {
			g6: [0, 4e3, 5e3, 6e3, 1e4],
			gS: [25, 0, 100, 0, 25],
			tc: [25, 0, 0, 0, 25],
			hk: [25, 0, 0, 0, 25]
		}, aA0[2] = {
			g6: [0, 500, 2500, 2999, 3e3, 3200, 4200, 5200, 5700, 8800, 1e4],
			gS: [15, 15, 70, 40, 48, 48, 252, 40, 40, 20, 30],
			tc: [80, 80, 190, 90, 46, 46, 248, 180, 180, 90, 140],
			hk: [120, 120, 220, 110, 37, 37, 217, 10, 10, 10, 10]
		}, aA0[3] = {
			g6: [0, 400, 1800, 2e3, 3200, 4500, 6e3, 7700, 8500, 9500, 1e4],
			gS: [10, 10, 20, 10, 30, 10, 16, 40, 55, 230, 230],
			tc: [10, 10, 40, 50, 100, 40, 80, 120, 55, 230, 230],
			hk: [80, 80, 200, 10, 60, 10, 16, 40, 55, 230, 230]
		}, aA0[4] = {
			g6: [0, 300, 1400, 1700, 3e3, 4e3, 1e4],
			gS: [10, 10, 20, 10, 10, 170, 212],
			tc: [20, 20, 60, 100, 100, 110, 170],
			hk: [70, 70, 160, 30, 30, 60, 120]
		}, aA0[5] = {
			g6: [0, 1e3, 3e3, 3500, 4e3, 4500, 7e3, 7500, 8e3, 1e4],
			gS: [10, 10, 20, 10, 5, 10, 20, 5, 20, 25],
			tc: [30, 30, 50, 100, 30, 100, 140, 60, 140, 200],
			hk: [80, 80, 200, 10, 5, 10, 20, 5, 20, 25]
		}, aA0[6] = {
			g6: [0, 700, 2650, 3200, 5e3, 8e3, 1e4],
			gS: [10, 10, 60, 255, 255, 200, 200],
			tc: [10, 10, 60, 255, 255, 200, 200],
			hk: [80, 80, 255, 255, 255, 200, 200]
		}, aA0[7] = {
			g6: [0, 400, 1999, 2e3, 3200, 4e3, 4700, 5500, 6500, 9500, 1e4],
			gS: [10, 10, 80, 255, 255, 55, 6, 70, 20, 155, 255],
			tc: [10, 10, 90, 245, 245, 170, 80, 190, 20, 155, 255],
			hk: [80, 80, 255, 235, 235, 55, 26, 10, 20, 155, 255]
		}, aA0[8] = {
			g6: [0, 700, 1300, 1900, 1901, 2500, 3400, 6e3, 1e4],
			gS: [25, 30, 30, 30, 255, 255, 30, 40, 20],
			tc: [25, 30, 150, 150, 245, 245, 80, 150, 70],
			hk: [60, 170, 170, 170, 235, 235, 30, 40, 40]
		}, aA0[9] = {
			g6: [0, 400, 2009, 2010, 3300, 4e3, 5200, 6500, 8e3, 9500, 1e4],
			gS: [10, 10, 80, 255, 255, 55, 23, 36, 20, 155, 255],
			tc: [10, 10, 90, 245, 245, 170, 60, 160, 20, 155, 255],
			hk: [80, 80, 255, 235, 235, 55, 9, 72, 20, 155, 255]
		}
	}, this.a9P = function() {
		var eG, hb, dq, gM = function() {
				var gM;
				return ap.pE = document.createElement("canvas"), ap.pE.width = ap.eB, ap.pE.height = ap.eC, ap.pA = ap.pE.getContext("2d", {
					alpha: !1
				}), gM = ap.pA.getImageData(0, 0, ap.eB, ap.eC), ap.pF = gM.data, gM
			}(),
			g6 = aA0[ap.pc].g6,
			gS = aA0[ap.pc].gS,
			tc = aA0[ap.pc].tc,
			hk = aA0[ap.pc].hk,
			de = aA.a9f(),
			ec = g6.length - 2,
			aA4 = new Array(1 + ec),
			aA5 = new Array(1 + ec),
			aA6 = new Array(1 + ec),
			aA7 = new Array(1 + ec);
		for (hb = ec; 0 <= hb; hb--) aA4[hb] = g6[hb + 1] - g6[hb], aA5[hb] = gS[hb + 1] - gS[hb], aA6[hb] = tc[hb + 1] - tc[hb], aA7[hb] = hk[hb + 1] - hk[hb];
		for (eG = ap.eB * ap.eC - 1; 0 <= eG; eG--)
			for (hb = ec; 0 <= hb; hb--)
				if (de[eG] >= g6[hb]) {
					dq = de[eG] - g6[hb], ap.pF[4 * eG] = gS[hb] + a5w(aA5[hb] * dq, aA4[hb]), ap.pF[4 * eG + 1] = tc[hb] + a5w(aA6[hb] * dq, aA4[hb]), ap.pF[4 * eG + 2] = hk[hb] + a5w(aA7[hb] * dq, aA4[hb]), ap.pF[4 * eG + 3] = 255;
					break
				} ap.pA.putImageData(gM, 0, 0), ap.a9U(ap.pc) && a1.g4() && ap.a9U(ap.pc) && (gM = a1.us("arena"), ap.pA.save(), ap.pA.globalAlpha = 1 === ap.pc ? .1 : 1, ap.pA.imageSmoothingEnabled = !0, ap.pA.scale(2.8, 2.8), ap.pA.drawImage(
				gM, Math.floor((ap.eB / 2.8 - gM.width) / 2), Math.floor(.5 * ap.eC / 2.8 - gM.height / 2)), ap.pA.restore(), gM = a1.us("territorial.io"), ap.pA.save(), ap.pA.globalAlpha = 1 === ap.pc ? .1 : 1, ap.pA
			.imageSmoothingEnabled = !0, ap.pA.scale(.87, .87), ap.pA.drawImage(gM, Math.floor(.745 * (ap.eB / .87 - gM.width)), Math.floor(.422 * ap.eC / .87 - gM.height / 2)), ap.pA.restore()), ap.pC = !0, b3.d1 = !0
	}, this.uV = function() {
		for (var ej, fL, fM, aAA, aAB, ds, wV = 0, g6 = ap.eB, gC = ap.eC, dq = g6 * gC * 4, aAC = a1W, aAD = ap.pF, eG = g6 - 1; 0 <= eG; eG--) aAC[(ej = eG << 2) + 2] = aAC[dq - ej - 2] = 3;
		for (dq = 4 * g6, eG = gC - 1; 0 <= eG; eG--) aAC[(ej = eG * dq) + 2] = aAC[ej + dq - 2] = 3;
		for (aAA = g6 - 1, aAB = gC - 1, fM = 1; fM < aAB; fM++)
			for (dq = fM * g6, fL = 1; fL < aAA; fL++) ds = 1 - (aAD[(ej = dq + fL << 2) + 2] > aAD[ej + 1] && aAD[ej + 2] > aAD[ej]), aAC[ej + 2] = 2 - ds, wV += ds;
		this.wU = (g6 - 2) * (gC - 2), this.wY = 0, ap.a9S(ap.pc) && function() {
			var ej, fL, fM, dq, aAC = a1W,
				aAD = ap.pF,
				g6 = ap.eB,
				aAA = g6 - 1,
				aAB = ap.eC - 1,
				wN = 0;
			for (fM = 1; fM < aAB; fM++)
				for (dq = fM * g6, fL = 1; fL < aAA; fL++) aAD[ej = dq + fL << 2] === aAD[1 + ej] && aAD[ej] === aAD[2 + ej] && (wN++, aAC[2 + ej] = 3);
			a9.wY = wN
		}(), this.wV = uF = wV - this.wY, this.wX = this.wU - this.wV - this.wY
	}
}

function a9N() {
	var fz, aAF = ap.a9R();
	ap.pc === aAF ? fz =
		"DYDz2ESNu-0UYCCrS9c3pBUrKHc94BhIBhIJpIIBnMIAAIrKSSpKABmgf9e7X7ecX-5P0baOy191XXX7eegf9mcfUrrxrKppppKpKSrzUMMMSKKKrJcXcXcmgcXnKIKBmnCIJonCKrrSrrSSxSS9XcJnBe9XemmWXeX99chMIAEprrSrrtbrxIrMKBn9eBcecX9X7f99X90e577VX1VcOWX16XX7X999cX7eWyXXccVVX6rUSrrwUrlzpbbrrU6xzztzxzrztzbaOtaOa5-0WV-77e-9119HcXXZecccceXXX7ce9Xcce9e9meeVof919ee9Wzy5XeXYS9KBcXee_He6ce1ee0zxzta5UaX99c1mXcXhEJp9cNHWcTN9BcnAzJoorIBe0c--nIJoonSIBe-OX-NNOXWbcBgzIHX9xHzS9mcCSI9-nBrrorK9VcP-jHe9_BhxzKHcWC9mZp9-3n9fBnS970a6zs7egrIAAIRUKocXX9gx9npKaUxBppABe5OdHpBe-AC9-17TOWABpKI9-7JmnC6zGtxIBmen9egp6aUlyOzbrbbqUzxHXgjKKBc-ZehlxoeeoxObonox9XonAUbzS9efBdCAArHmjISBhEJnAofBUIJgrpocXxIBUoxHVmnBmmXAExoUxABmdAIBgnBonIAC6oxHVgfMHcXcUXAAGxIBgfxJch9c3enCMzSBe9eXomxHeBgmeCSBgpKMp9hzHfIEzHnArSxHX7pSrUHcnCMrUpSa5UIonABrSBccnBopJttzbxpBonHXpIEKMrMSrxpKxzUzltyUtaTOaOaObaT5UzNTOV0c116rMMKSKrxIKpJpKMSKMGxISCrKMSpKMKrSpSpI9xp9_pMMMMSBoxSryTUUxa5P7-0ttbWzzzxzaN5-NOWVN--0Wa5-0X-0VNVN7TOzaOWzL0bbX0y7NN5Ua17V111749c79e1c-V-----Ow7--N57-OzaN0ba156byNNT6q5OzWaT55-OsOX1777Oa55-5T5UX16tzUOyUtzrpzUrSKKSSAoemnKCIAIICI9KHn9CKBhCSHgenSAJnIJxSMMKKSSpKoopKKHpSoorSzxpWxMS-UKISaOxMOxttyOzy5OzbbtyTOzbtaUxyUyTT6porUrSztzzMSp9eceoogeZp9ZxJx9geeeXe9eZgeC9gegemp9gmpKMSonSxKrrbaUMIKJpMKKKpIACBmeccV71XX7V1mmmmhCCCKJompKKJpMKSKSKpKMJpKBeeceenKpzHnBnBmceee-X1117ememfBn9mfCBmgemf9mfBmf9xromcec7Us8He0u99cWtbc-PeCCS9VecZnBnBemfBn9X9c6aOXA997Y99755VXc6tXXmV5Os-ObVN0yN0bzaT-7ec7N70Wa-OV-5eggnHon9f9efCBpMzop97epCKIpSIBpKrrSKKIKKMKMJehzKKErJeABnIAJc717f9eBnAJzrHe7V9d9ef9gmopKUKC9gmcV6tX73eCIJoonIBnBnBgnCHgjJeZfA9megeegfKCICCJnIA9meZf9mfIEMof9XceXe97X-59XdCIKKpKKCJoeVcf97mZmVVV199YJmX7gceY9gpEOxMMJecrSSGzOxSrxprSxzJzUopSrIxKBpUMIpMprSropEMHnBrpprK91AJpJpIICpBopICCJonKBn9mcme9VcX9ee7X7e9ece9Xe19XcX91Xee9Xcce9VVVccefAAABe7emhBnSSKMSIJhCIJpKJppCKKIIIICJgpIBpAIHpBcoooonIKLObpBnKlzrKIKCJpCJpBnBpUzrrxpxSbbwUxzUprpppppJppMMIrrSSRUbWsOwUzUltbzrxzUzSzUbrrTTUUrSbbV6WbaTOzxzyN5TN-T5TOxbtts71-X-70V0sOWsObbaT0sTObw70tbbzbxbzzyOtyUtbyUaOV1-N0cVN-50aOtza6tzlxzUxSrzUzSSxUSzzOzzs5OyOtyOyUztyObaNOtaUrUxrrUSrrUrMSJrSIMSpKISzKUSpSrSSrzSMMxMSrMSpSrUzSSzzrTUMSpprSzMSzUxSSIEUSrzrUSpMKKxpKrKMKBmmrIKBgpKrzs6VOsUa--5ObzyN77-7X7e970V-5Oa5ObzxSxrzzSrKMUw-OV17X7X1X99X97X9X99cXXXXX977OaOVXeeeeecX7cX7X7X177-7-X-71-7XX97X97cX7VVV1--VObs970cVObtzbtyObrzxSomdKKSSMKqTN5NN0xrMIM5UrKKKpEKrSMSMprSrxMMUzrzrzSrSrSrHXenOtxrrxrxzSrrSrUrrSrSxMSxxKJpKKKJnKKrKIUUSrSrKKzKxKrSrSwUxIBnrxpSSpUzyOzzzzyUSxzRUpCBee7ecXce89omegpIBrpxzSrMJnKrMSFT0tbrMKxKL0VObxprSSlXV-11-c-X-WxzxFUaPcX777OzztzrSrMV-V75X96zzMKrUa9e-7V17gc9XeV90Bf957cVOzrMOX17X7X-X7X7V-N-6aUxCKzUUKprcX-UzSrN17WzrxrNX7ecV17WzzbaOtbxraObrOxrbxwUxpUzrzraOy5OVOWtzyOzzxbzVNXccXcXcX1-V197V-ec5Oy5N1--555UyN-N1---VOWX0Wtcc0aUMMyOs----Zc5-TOtsOWX7c0xzLN-NWbyOyUyUzrbxJe9gfTUxAMxrxzlbzbzbq5UKrJnAABnAAICETUtxSrzrpIpKIUSxraOaOVNTObzWa5NOtxxyOyOc-5A9YBmnBfHceX7-XXcX9e9Y9e5OzUbxSyVUX5OcUa1-UMqNNUbyOtsUWtWbWaObtzbyUWy6bzpJmoh9nIUI99oghSUzrrrSHeHohKCJgrKJemgcrS9nry6xSrUMStxzUSzqUrbrUxUSxxrrprUU6zSrbrtzUSUSzxMKxSMprMKIIIoonIBmohAIAHgf9eHeemfI9nA9mf9c9n9ZeXc9d9n9ccX7VZmoceeHVX1Zn9meZegegegfBhABehABonAHnABhCIBemee9eBfBeecgeohCUxzUbzxI9egegfAUUrHmegemecWcfCUp9meX9Beeef9onrSpAAKKKIyOzyUzJnBjSrxSSIBhMSHgcVYKxBmnzrROzpzxzSKKCKUzKBnoUzzbzpJmegfzyUzFObyUzrrzpKUSlzry6sUyUVN-7NOzbzzlzrzUrUSrrURUxzbzsTUsUWts5NOWa5ObzrUxrtyOWWaOzMSJnIAIprMJorKMIrSKMKKpUKCBonKMJnCJpCIKIKMJmpKIMKJpCJpBxBonHomoemmegnHf9f9cX7ce99emecgn9h9eA9nCHgfBnAIBfHh9eXXce9emec7f9ec1me89eeceme89fHeemX77-ceeeemeX9X9eeecV-V9e9Xe7e9eefBnBeefBfHmnBnBnKBpIEpKxMSKJnBpBnBnBmgmeeX9cXXVcX7Xce1eXcXe7ee9eXeeeX9X7V7V77V--XcXee7ec7X9eXXceX9f9eeee997X9Ve7Zee7WaX5X2Be-cee17X--0tsUbtaT0ta5-Oc--7Xe-X7--OVUtbVT--QA9nBmcXV--97X9ememggnBecJceeXme-cXdABeXeX97cnHgeeI9IA9XcVX7eX99e9e9mgeXeXemmceZmXe9ceXemXmggf9mmnAI9X1eIHcXfBghBmf9BemcX9Y9Ve9--JmZeccXA9Xd9cX9VXVVc7-V-Xee_BnJhIIBnJnBmohBgohBcmmf9eHf99Hf9HmommmmV5N-MvxppxrIICWzsOxX--OV5s0i1mopMKppzTOaN-0XXceV--0lJ7-90mzBlV2N7tRof9JqUsOaW7c8bwrrJchpK9-X7PBfHjKogcP0Jd92SMUwUlxMSErHegnrlxI9X7cY99e7hSzxpxSIIUHozogmgecYIExxxrrrKpKrSrMMrrlxtyUtxblxUyTUbyUUSaUy6Wzttbbc5N5N7V7XWaT7V6aZeVWsV9nIA9X2BmcWc7ooc--f9IBomV-0cnICBeXgn90Wc5TOa7-1-5cX---d11---esD---m8D-1VvAYqV-92glC5--NEEiqV-7Hsjk014I4wognBxwOs0Wc-D4y4gcT--0Y8X-0WalAk--0pHX-1Wsy6EV-a7EDhCBtaT9--X3IIV--_VJV0Ndepmzq1-0XeJbD-5XhvrCqTe-07iCnpteV-7iejk-iAtCxEIrrX71-2smknnEUUpze-e-c-1BtMB--2Kbq--YMmzV-sqPmrF7--Culc-HCwyxxcV-DEWXhte-DZ7mzorSr56eX170LG-rUSrSItzOueVc93c-5ZH-rrRP9-2d613nHdRUR6kP7-CZVZUEKUyUe91e-2ZYhnTPV-t8OMny7-1HZrT-DZf16A9mjFUzlsV--Hh_N-1HlyB-CZhCrSpzrkX7cX-2ZibAr-VMdC8brSrzUxSSIBxpHX17c8CrJe7rrUIpSrUxxzSrMIMOs5OVV7X7X7977V-7P19Xcce--8DNHk-LIcPSpN7-0ODtgnMN1-7Zz5USxyX9c--J2As-9J2CSu-08FHSrR7V-0G5xV-OH5vqV-0LEoV0OLiAnMN70D_f4UKIBnSBgzSrSxSSMSxpSpppzc-5TTUMbV716s117X1Xcce-cXXHcX--0Rs7V3dS04nKonpSSkV7----TMGPxrS-V7--MN-c0HMYnBnrIAIrK-OWV75V-tTEHotV-qMoqSMUUbe9HXV-mNcawnr6xtcVe-3aNiUIq1-6aOwMISlc1-6aSe6rROec-8ac9fISzuX-V1tf-1mnBrlWaN-NajMY9ggeoopCTTTTN6aN1HdgkXoohABnK9n9KJmpogeV-0XJenppSrUzJgghomhp9VnxIAAzOxWbbrIBnJmenBegozlWyObxIKBonIGaOVT50xSk6xJpEpIHnBonBoptxpr56xrzzbonCBnCMMSonzxJmopCIJomX7mceHcV7nJxSABhrbxEKCIJhAA9HgenABrUMbqUpSUrprSrbzzp9hABeXce9YAHcoomnBmmnBmmnpzaTTUrzzMpzWWblbyUUSrUrxbbzzblxrUUbrzSrtztzw6btV19ceWXWzq0aU6aTOta0a0V5777Xce7nA97VOa0X-17VUVV0V17-17X7V7-V----1-V-VcX9A9cWbbzyV-U5T5TOa5NNOaOV1Xe9ce99mZee5OtcWbaTTTTTOWe9ZeXcmcXVV38gtRnCMzSw1X6VcV08hu4rq9--tiGRrac-1Qfbg-dax4zrrIKoeBxErUlzSGbs0VP3eXX97XV-9R0KCsV1OlXjprrP7X7-HRQsCpVc2TRgLxJrKBeKKJe7BhIKKBlwOaUrNTUsNNNcNP91V---PS6VgopVN-LbHRrK999ezrxxoy5Tc7-0bJGjF--6Spy-5bU7rSbuXV4tsIYpKSSrSp50aX-177e-2baNMC5-2Otd7nHrpOba7cV2tv2dnICxz-Uk7cc0mUIkRnBpCBpCIJOWa0VNOtc-19UQnBeegmnIISxJns56zaOWtu7TV--URWN--VDLc-eVE7zSrUX7Xc-5WM4BN1DWTIggpBnEKKKESCWV5T5Wa-N0a9VsP6YRn9cmY9JggoggzUKHfA9XmcP9XZfIJhronABfISpxrUrrI9ABnBggrxxoe9fHmeBdCDUUrHf9orUogrzzJfUU6zUzbbbzrty6brbrxxz57OtsN5OsN5V5VT5V57N56yTUtsNN1cNNVV5VNeeeZeWtu77-XX-KgxCqWVV-P8w5qV-uAjtz5c15XwhBooopBonIKKJNN5-N5-6WVN-8ckmzArUOVeV-uDoWxNV--YoA7-TYoYRoxa57-1_P1T--8NKD-9dNS2ACAUta---dQzr-DPM79mmgcpI9chMKCppxxxrSzIbXc0aT1WVOxk7-N-9c0eauZgfAKrSrrSla-5-7n9-V1eVE3nKUwNVcV0eWZinCF5N0TcbkCMSrzr5OVPXCA9VXV-1b0uV0ezUBxUsXc--mhTc--n9_c1DnTIxCCSMKC9eCKClsT5OsN-V7NNV6QJcYxzUSxzSwUa7X9I99Xd9X-BhW8EE6rUw7ceV6fXkApBmf9f9hKGaOWzzzObV1V-PuipRpJ5--6iiarprP77--DrhL-0iv-fN-7jNKjExzXcc-Y1kshKK-5-V-wF2umWs-03EWs-03_Ms-23gdy-qlmyACJmcgfBnCIIrKpICUSIprUa0VOV5N5---V5---wRnFru7-E6kMClX-4lwIAzq9c-A7r-z5V7gdk8monBgfCCCElzbzxsN995-T5-KgiSunBnABmeeIHprrKJxpIISKICJpKprUzOcOzzUTN---0V--50aN1-1-PV7XX-SnCeY9f9mnUSSKzMtaOWa9VX--bBy1gzSxX-e-4nFNEAqTc-6C7Wgs-EC_DBjN-0nVb2N-3n_EYByN--nfWnV1Bx8ZorUaV9-CnqgbKISrNN9-9-8o5aACrSVWXV-C0gPk-jFRwSM6rsW9VV3h23TmfBjOxMUtaX17-6GYfE-0UHSjwfEzbxpUUq17ZcXeV-h8rqr--3odX6MF--8ogzvMJrN--V1xAI4npKwT7cV0Xp-Yf9nBeehKMKrzzSxrSxrUSzzSxrSMzSzzV-T-7V10Wa6VOWVT1mmeeegn9eeeXmcX97V-IJGnCr1--2JVvD-Bp7gzSxw6aeZcV0hHX5merts-EJjUhq7-2pGMvBtV-hJmVz1-1pJofqV-0KQ3c-0KztN-0L5k7-6LYvE--ILYxhTNc-0LZ57-ALu1CaV-4SIqV-hSQ3na--KpjX--ppknVESTPknBgmgn9f9f9onBmenSpMGzxbtbzbaOV6zbX9-NObWV-4TmmV3SToLnBnJnST5Oa-1-0px0YD-0pylvD--L3Ge--q54IV2CWmWnUUz5Pcec-nO-URhBoUy6VX-1qFuQGc-MOcagpR---CcERs-0PQUc3MPs8gehClzSzbzzUzxMr6tyUzzbzaTP0HgmcVXegeeeXeh9eX7e-JqqUEKIMpzz5T7cXX97-bRBpSKoT5X7--M4g1-grMIbBecemgfMxUpzMzObtu7V0zrrq7e9eV-MTaFhOy9VfLnt2-9-17117VcX1-1X97cVXX9177V-VXV9-WaOSMSSSSrrUSKMKxrrrUSxrrUzsOV7--N-tVN--N0bKIKKQCKRnKQCUtrTUtUSxpMprrUUKxSpxrpprMrxF-EcVGxTX" :
		ap.pc === aAF + 1 ? fz =
		"QREc7lR7oVUYGy_KJOJKKKKuK4OKT_K4KG_u_GJJO_3K_KKKL_4KL__KK_4_LKK_MjzuOOK_KKKOKLKKLLUjzji_KKMgyzdMjzgzzzEszzyzzjvuQvieeid_POOvzkzvzy_TvuOK4GKKvyyzzydJQi_OdKKaLOLajdOPuueaYBzydJdPOybvdbjeuvizwzujuQnunl2wBnBE2-EYBz2nk2kFzwBzznBydnwznEYwnnEBnnwkyvwzEgznzzEwwwwznnxK4KGOJ2zl2nzifvwyw-J0GGJ042nvzEvzwznJEnzlG42zg02KKGFzzEzzeT-woKK3EvoKLOJBnBnzE2EznnwnwznznzpJKKKKOOKG_G_LKFwl2zK8K4JK4KKKKKKKKKKKKF_g38EBemXeeeeeemeemgeXeegf9XgeeexCxzzzoenErMroeXeeegfEzSS9eVcghoeemf9YBe9ee9eXghrzzzKBfIUzrbzUzzzbryOxrzzbbsTXe9geY9egeeBeY91cUy6z6xtxbxzbzlzObrx6ztztue5UyT6zzbzbae7UxyOzzbzzbbtzyUyUtzztbyUzzbuecZeBeXeeecgeV--1ViZ-00JJIV379xwOLKKgzyzK2zF5g4ccBgcn9ggepUxAprzztxtyOzbzzbe90f9cXX99V-cAQAOx-PFLqqmemxp9zzttzIAzrrzzxzzze7X9ZeceX5ece---AorF0B4uUghzzae9-6VjJh_UznK---NUXV1NBEpOLYnzlJ--0X1X--Vl4pk-B5KYEc-D29vazJ-HkP9DmexzxxzzzrbztbseeeHeYHceXV-NC5uUF-R5YYCyX-2Vpc0jCF--5lM7-12TuM-hkQrZrS9X7f9e9enrSxrzaUxx9f9zzHhzUxqOaOsObbzSxoqUxyUY999c9Xcecce7eV5NDrSOLauUwzzzzEGK4K_0F2Z6YfEUoefUtzUzMyNNe9ceec0a2zdLQdyjwynxKKFznpGGJ--1-_X-AW0ZpjvnzCKKJ--1309--02HO---WrDV1sGfOOjzzn4KK-0FYN1qP-2W7RtfkF6J8G-geeemf9gemegfEbqUrxEbyTgecOwUbbxEbyTTUac-H3crrjCLEE1KoQBrofHegeecBefBeeegfAACxUHemeeeeegxrSrzxxoeeXXe9ecdAzUomXexzrzroeXeecc711_rI9nUSxxKMSryUzrzUpxKx9cV7cceghrrJnJmhBe9ee9VUrxy0a5-7e7VVX-7XccOVX99eefKKAAMxMIUxzMrxK9XXXXeXceXceee9mxxp9oeV9mf9eHgmeeWsXnHcmfA9oenJf9XcXcOby999exKKzMIJcceYBggghxrI9e9e99pxzpHeccceX110cXe7cXWzrUzUxzzrzrtzbaOcVcceXccce9Xceegcce6emeZe96buXeXoe7TZhBe2Bmc6eIBdC9eC9fHcHcAC9erxHed90C9MTUzoh9ZjJeofIAzHghHzI9nHYACCA9VxIHcfx9gmmnEJrKErJzSC9xrrrtyTOaUa0xSxKroxMSSrIMKqUlc6bztWx51--P7OyOy0tcX997V-NP6WsUaUbaOaX6VTOzzzxxpHnBnBggofCKSpJxUUo6pzzbtzyUzbxSzogfABeceef9mpSzoppI9e7X9nCCKMMK9fEI9ee19mfBgemh9W91WuI9gf9e5eX17N5NUXc0a1nBenUHfSorpMKMrHXh9XgmY9nMJmV1nIISC93fA9gnKBemp9e9XxKoeeeA9fSMzrxrpMSxMMHorIKII9eecgeceeee9gmghrKKCpKCIJonMozKJp6xyUzSppr5OttzzzzWWtyN5ObcV-5OaOWttyTTN5VWWbbzzrrxaOtbyNTUUrrSMMSpxrrSrUxxUUpSzSMKonIOaN6aVcVNOzUrL17ccXccVPeccX7717cXX-5V0zbzJxOboUKrKrrUxxrrSxxrSorIKSrMpUUISxxAESpGxrsVWzP7XXWzrrxVNXoccWcOcX-6xrV6tx0zxzUtbtzq99777WWVUV-50xaV0tsNUbzpUUzp9nUrpIyOzaUy9ge197e6zlbbbzbbyUzommhxonCHeIxxrxrxrUSxrUrrMKoogmmecmeeZcceX7eXHeeemmmn9eedCzHfoeeeZe_IMzIpoxHXKzUJxxUoUUprza0zxxxrUtyOaUUlbxIMKKKoopCIJpJoommeeeX9A9mmn9cce9Xe9ee19eXe17eA9mgnCKpJnBee7XXXcee7X-99XXeee9993cXV0ba5-XV0aOA919HgmeeBeY9mmX9ememef9ggn9ghA9mXcmeecX7gpCCCBnAAAABnCIICIKpJonCABnBgf9hBpBnBnCCCJonBnJnJonCIKprSKIMKKpJpCIKIIIHrSMpJjJxMpz6zHxCrrMMUSprKSIrMrMUUMrSxrSrSrrUUyTUbbtz6zbr6xxxtbtyOtyU56tzyUTUxzrSpxKMU6lWxzqNUSxpUxEMKJxCJnMKEUHhICEMrHxSUMSrMSrSppppMKMSSMKpKBxMKpppKKCBnCBopIKIKCEKCKKMMSpppSSSMMMMSSKKKKpSKKSKSMMMSrSSSMKpSSSppKICppMrUSyTUztbzzbrxaUq6zttbaObaOa5TOa5NOWWa5TT5-N50V7WWbaUbbtaOX-N-7-1-170cTT5ObaOa5OtttttbaOa5N5-1510c5V--0VVcX-1-V51-N7X-WWV55N55550ta6aNNOa5Oa5OaOaOtbaOaOaOaNOa55NNOV50a5-T50WWV-N--7nBf9mcmgcmmmeBgmee7X17eWba11X7VX7X79X97Jc7V7-V7117X7cV7---V1-X7X97--7X111111711-VX77V7-UMMMSMSrN0V5-UKKCMxpprSSSrMSSKprxrSSSMKKSKrMrrSrMKpprSrKrSSCKKppKpoxMUOzaTOzyUaTUttWtzbbyOts-OyUbbztVObyNNOyTV-0WxWWaNNN7X7VXceXXX17-7WWIBnIBonBd9eAA9Vc7NNV1CIK9117-797X7VX1111WbWy0xUzprSSSpprUxrSxxrzTUbqP6zrSKprxzxzzTUUUztzztxzzbtzSSUSMSzprSrrtzJmmfrSrSUSzaTN756xKxCSSIKMMKKpSKpMKprKprMKpSKpprMMMMMKrJxSSrSaNNOtVN6s---0WV17N-V-0aUWbyN0baOaOaNNOWbyOsN70btaUL0xLT6o-UM6lX6brSppSSSUUSrppEF6pSSSMKKCKVUMUL0tba-USSUKSKSSMKrMKpKSKKCKpIKIM6rSSpxMSppKSMKSSSpSrSxrUSlwT777VV---777X7XX19XXX--7V1Hc1--N0VN570c6bzKMUzrSxprK6xMxxrpCKS5NTT6cN0zltaTOa--57-11-V7X7VcX7c7X77977VN-Oa0aTObaUUoOxpKpqP70btyOwUsOw776rS6twUkUOtWaObX6ta0bVcOcWy5N-5T96XWaWccZeWWtaX97cecWzUxxq1X7cVX77VX999750a6VOttw1XecXnIBe9-VZceX7V0zTT-OtWWbrzSpCCUJltWbbbzxzUpoxopxTUUxprS9zMMSKKxGtaUtzV177177cX7X7X997-OtWaNX150a6V6rxUxtbaOV-NN0WV-75-0V77777X711-1X195XccccXZe_on9c29c799ecVOWaN-55NP-T-TUzzzzlzzzsUzxzzrxAqUyUzuA9770V-5UzbzOzSSUrOVOac7WzzxCrSUMJgpIJrKIHgrSJxSrMSrSrSrrSrSrSrrSrSrU55-X77TOe775OxsXX7X15WzMcXccX-Xee77-VX-UzkOzSq7UbzzxzSX5OVNUbaTP6xzrzccccce1XXeccWzzsP7ce-U6rSzSzbzUxxxzxzUwUqXcPVTT99XXce9eeXzS9cXXX9XceXe9e9ce9cece9e9ececeeeeeceexxxxrHee7ece7Ue9omeeXeeeeeeeccX999e9eeXgef9eeXXXeceec5eXefC9eWcPn9WeXeeef9hzSxHcfx9cBe9emee9X_Sp9e9Xe999XWyce7X9ceeeeXerp9eeeceecVeeeeen97d9ec_BemgeemVTOyTNUbttXVe9cce9eeef9e1ee95eeec--3mJ3-01RcfV-NIoOUF8R8uLgf9hIHeec1Xe9fBeh9mfEzzyUrHenxyUyUtzyUxzzbyTTNf9e0a0cWEvKdK_KKKLKOK_aJaPPOOUeKdUddLTyEukyvizjzzzGK43G3322EBkwBzkwwzwzwzwznwoKKJ0K1X2ABrpzzozzzaUWtacme9hxBcXBoeV9--7KZ5R0K1i5QpxUxzUyUzbxztyX9e9oe7eAHXe9eV--KycF0gAC-Bf9rUzta7c-54dtbV-61qbAAy---LztF1oAWqEUzrzxzbeXeecf9V-94pL6xF--Agu7--4xl31226aIBogfABfBf9nxxMyUztttttzbbzbyUtzbsX9f9e99eeec--5HLZ-A28MQry9f055LVqKKPKOaOddaKaKOOd_bizvy_MeOOOK_LPPK42BnJFzszEo0G4aLKOUjuOLO__GKKKKJHKG32K_KOKbnzzdKOLOeOO_-EoJG5KK_KKKGK2wzElGLK4K44JGJKLLLKFnLLOJF23dLLLK43_OK_KOOKFqKOKeK4KG43KKGGGOKKGKKJKKKKG0OKF_FOK_OKKKPLJK_KLK____LKOKKOLLMjidbzzdPPKOKJOG2pOKOKLLKOUu_PUzzzzYwzwydKdaOOKKOOKKLKaOK_OO__aEeOLTdzzEBydaaKdbEnzjfBnuzdPLLO_OLLOK_OLLLUzEnnEnzEnwwnz42zuRzEwwwwznK2nnwzEnEEEnnwzEzvdKKOLO_OOdOUEnwznnzYwnkEEzyEiuUvjzzzvjnyaTyuiz02yyawBkyeQeeOueddaUibuPJi__9gwnyaOOPTvuPJTbeLzEiYuEiaQEeRydiddddaJ-x4K4deadddaa_daaOdaOaOddePaPOaauddeufEeaLiuOfevduazjuzfvieeeuPueefiviiebe_3KvfjfEfiveePivjfiuiE-FGJ--3--4-FFF-FF33F-B-22vjyjeauefeiiuzefujidavuyuivfiuuvfeeuePaPiuvvjiiyyzyivvvvvyziyvzjzEnnEvyviviuvivjjzvjyyzwEii_viuviuo-2vjffdKHPdivgEijjieEigzjvfYyfno3-z2BzvvjeOiivffdideeeieOdeLKbeLuOOOOedaeOeidjgnueaaLOaafeveLyyvivffiiuuiiiiiiiivevfiiieiiviviyyvvvvvvvjiuvvjefeueieieeeddveTefeaieeeeQePevedeffeuieeuaeeeaeee_fiffiieeQeffideufj3323FwEjdyuMeuaveTuQeuLEeudG33_eLVzizvdjfzi_JibeJF44fzeeu2vc3BEfdvdjfy_vvfyEvd_TyfyeTgyY2yzFF-wz2zJGF3F-kz-F22Bn-0GKG43F-2BwzFk3-BoFC4300-EyzjzBo3-l0-zzzwzwzEBk2B-440-04443-EivzjjvzzwwkkBn2-B322BB-zyadY2-B2-nBkk-oF0-o-o2wBnnBnnEsnE2Ezsnvzk2nn32-nB-kk--BBl-2-23-3-BF-B-ysn2-kBBnEBBkn22-B--00-00GKK43GG03JG43KKOGJ_444OOFddF23BJHJGGGJJKOddG-kBKHJ44G-nB-K3-F3-F403JG3GJK45KGdGK8J3G44-3G04J3_LK2B23JK8G3FExKOLK__KGG4KOKG-3K4OHLK_affedaK-G-n2-F-wn3_aO___KaPJ4aOeadaOaLdG3G3GGK5O_OOOGGJFG3FFFF-k-22--n--GJ2K4KK_KKG_KF2n2-2-C-nu22-2-nBn-KKKOK_OPaeOdd_eOK0O_KOLJG44J33-FFF3-F-2-B-B-k2E202--n-wnE2yEEEB2ynkygEfynEvijz2y2GJ2zgzEgwygwyzvyigwwziiiveaaidfuuevfiE22-k-0---F----knBnBnnnnBnBwzBnnEwx-EsnGJEnkCJBBBFkB22nyaLdfeaBknB-EsnBnB-zznzKK2nzznEzx03BknBnBwznByEwzBnzBynnzjzdLJ_OL_aOigwnnBnyEnzEEnlGOJK4FpF-FnBOJGFzywnwkoJKOK_OK____aOJBEBwnEEEwwknwzzzzzzzzzzzEBwnnwzEswwwk-nC3LK2BLKK2wznJK4JK23J4-FzYsCG2lFoJEC332JCaOT_aLPJ8_OOJ34JBFnFwBEK4JF3G48K_4_44HLLPdaPaeOOaLLQiuudeOdaLOOOOOLKOeePPduOaOdGOdGJB3G2FFnBB-nB4K4_GG44GJC3GJK4KOKFwB-kG_F2BknBnnBwnEBzBwwnzwzC3EzwnEjzEEEEE4KK0-zjizwwwwFzzvih-yC02yijEnnnwkF2Ez2CJGGKKdeOKaO_Gbd___Fo-nEB48O_aOG2k2pK3EBzF2042wwwnzznnEEnlK_4F--Bnu7-D5P0Mj4-NFneHn99fHdEpA9e1mrUrMMy6rbyObacVUbsXc-95VQqU-0RC72gfrLTUX9WL7PGHOKOLKaLLO_aOzjzdKK8fyy2yvzzzzjnvEyszn-yvuyji_KjEzfvvdedLOOK_au_K_8KK4O_Oavznwzj2vYyiizdQjjyvjvzjnFJ43FEvyyvysEV2vkG-oJJ-J2vC2nzfvdvcyvB2EgwkznoHKJEKF44K444Fwkzjx4JEwoLK2EGKJ34KOGFCFK2C3GKKKLujnzuK_aK4K2Bl0KK_K__OOd_id_032E-wwwznKK-5koy5rxzzye9XeV0NQGfQzp409Fr2emf9gemeoemhxzoeenrzzzzzzxoeeeeHeeemnrUzzJr6zzzzbyUztttzIzrzrtzaP5Uxy1XXc7TOVNOcXemnCBoeVOX9IHeX9ec9V-7QyMR-O2VLYCrzOcTXeV-7R7oR-42W7vEc-16Tkb---xZJV2sUexOjjEzzlK4KJ--2yzH--10C8--0-gFV-7VNER-038rYV-7WePR--3FiX-8X7VOizvlGJF--GAnc-q7b4qavzwz43KJ--3In9--193W--G5YBk--7uzo-03SVI---Z6nF-JH3JgtV1NZFfOiznCGJ-03ZUnV-NZy-Ok--HUC7-18Epr--G9ncs--8SB3-23innD--1O-0-6lCPTmmnCzzbWa9c--8glJ--3qO1-3XRYCbzK-XlIJjmegemef9efDUzwUzx9fHfBfxyTTTUpsTUxzWttf9eeWtzu7-19Vk6-2lJH2nUze9VKcf22OuK5ObzzuOLKUzviaKzzzfzvwwzEwwwzYBzB0GF5JGaKOJOG__3a_OJBG4-PlNXPmfBnBnBofADUzJzbbbbbzpxzbXe0ccX9Bc6s--1mmx-6lYOwmextzUrP7cc-5BSZbV-45HC2T7-9BdhMxF6JOkqwemmmmf9e19nJemmmenzryUyTTUyUbbbbzbtzue7-qBstqKOOYvEEBo-45TmAqV-1Bzxq-CGcDCxzS9dEMrxowOX7V19X-6YINKaOgnk--leh3lV-cqZnQo-AGhLznASpxpObxa-cXcXV--sj9F--RjYc-9DO8aRk-JRodC5V1Ntt6OKvznCJ--6Flm--Yf48k-BTXJhc-LEJ7aTYC-0BTkwjJhyP7P1LYtQd_KPPLbePLnuafp-yEeddzzEuOiydeKOGdzeaK_jzjjuKKaOaOUEnynBzvnzVyzzEE4FnBwBGGOJBF334G0-3JKJEknBBlKKK-wnCF-RUIqgju-4Yv7daLnB--6voH-EYxyt_ueaYBBE24F-wUjugoqOWc09F4K5OGOOYyzBzElK-1m02NnLNP--32h4-0m0qgnqV-1FPCq--H2Gus--FRXJ--7Gue--38td-6H3zimfGzxLPWaX--3E7C--16gBV2O3CZOuLecn-n3--RX7jgyP--3G5C--18RXV3t3nbP_3_iju_Hz2-B-03XWAgfxyTcV-047KF--Xjy7--GPHJ0W7iC6CSKKIICJnCBemzqUbV6sUa5PX6w1711-V0d4t8OOwwo--7o-P-3ZP3pin4--1CVBV-85mEN0d7rPv9hEIBeXrICxpCAIBtxrtbttztWV--UWc7ec--ZRVOk-3Y_fi--3SWl-1HE1urq7V-06YZF0JYnKBgltzy9c-1GuEq--1Ey3V-87P_R--8B0X--3aep-1HIL9xw7V-08jeF1RZt2BoxCKLV5NOaTeV-LHXk5OUn-3B_KjRnEJxK6xSIBnGsOV5-5-N7e0PZfppdQivevivviuviuvfffiviiiuuivV2vxJG3G400-F2zoG43G3G3G43G3043FJF-B_XHC--1HrHb--1Ml9V0OBPSTykK--mPGuw--0CdCF-3bQrg--_-bGk--c3w7-1J1Tb-nHWSNmnBmnCBnBognAxAACOzzzUbzOzIAAEbaOtbpICxtaNHW9WWttge-Ou9dHce0uXWaOaNTc0qJ_j5Tfuiyfuvyn-43-C4GJJF-ZdZ-CEN--qKF5MivvzoGGJJ--9fZm--4NVG0OHj5Imgmgn9mggggggzbxlyUttxUxrltzzxUp9mcegf9nBx9HzICBnICCIKMbaOWa0c55OWaUlaOaUxxrIJogmqTUpK6aNNOaN0xMUNT1-XXceee7cN575ec0cecV-0P9QF-3hh-D-7_jKnaJ2nyZ-YA_nYBnBnEUttXVOc8aMCmTLLKaaLKPddbjiuievivijivfivy_PPeaeffjyyvjjvzEnzso3-F-3G42l4J-2zvEBGG00LLuJF-3KFK003GFEyxG-nEzvp-B33G_JK--muI9w-5OSJStaOeji--wBzzzKGOK-0JieNwmeCzzaV-TMQgDzvlJJ-GAk2vrxkPe7--MV8o-6At0AC5--OURXy--gjqMEraeV2OUrqueTfVFl22F--jvyN-PNAgydcnF-Yn1WRrSpppMJeYrJnrUKq6ce7WzTUzUUUNVNUtsX7VJece9XXX97c--5440-2I2OHnJsOV-1NxR5-Bn6z2mgeegenBzbzzUbtsN--0_72F--nKlc11OxXDLKKO_OKLQvzwwwzEnnnnKF0RnydBghMMNN--dOfypPMdfibveueeaPaOO_3eafd_J8KOKKaaOaLuLaLvcyEieQevy2l---GFpJFzz-ynwwzzyeiyv-Bx3FEjjzVEvV2s2ufk2G0--3FF2020003JG33F-dC_NYAASKopSbtV--77--QufZ--CxYX-5b-NCbjY3F--sGR7-DRSQ6v4--2ZTFV-OmFuQF--tWp7--Rrk3-2DRQfF-ObG_p_LKK4LQjvvvvjk3BB--2cnkV-0opdF-BuUUE--1SP5b--2fOPV-0qQ8F-JvLKBlV-ttYkOgB--EKfm-GbimObjzjzzK4JOJJ-QEW629fAEU6aT5-Kbx48aOGeQiv-nzVk1K--4-Bei-2c4b_aEF-00fX7--VsoZ--FYHH--7bwK--3KeVV-19ymF-456Wg-0cmm4s--oPB-o--PCDOOk-46F9i--7vjd--oSsBlV-uEMIQY3-0GwSv--1EeMF-06tTc-5Z2ZLk-2HUyYu-0dG4tY--3dhcV-1KhfF-09wIc0ea0y5OddePfiivc-kk---0--hB85hIq---PPqqQ-ACDhYBegf9nBoyOyOtzzxAUzUxrxzxKrqUSHnEyUzzOzbcXXe5e9X97XXXccX9Xee--1UpAF-SFcxhOX-1eB0xgo--Jd31--9KJS-9pBVymefBnKMUUaOVNN72Xdb-LMveiuLKJKMinzzzvfY2BzjEzzY3GK3FK4KOGKF-0Ji17-ueZcLLyvwzYGGK-0KK8igpzza9cc4aecw5eQeefeK3iifeyVyyaPysnzivW-yvivjf3G32JdFG5OJG-3--EB2003-C_GGF-0M4Pc--fYVJ-0L1VIV-1kjSF-0NOQ7--gXeJ--LIdm--AAXh--Kaimk--h2YJ--LYMm--fHOlV-4QMoB-1fQzGbV-OM1DQUKrSV17XV-PsGvQ--0R8xc-Pi9hLee----4n7gV0uuK8Ovwo_F-0SPF7-Tihf5jioG3-rMLqIMSxJfMpp51-Uk7-X7mV-1vH3F-0SiM7--ivJJ-4MU-YL--5j0_5V--MW4m-Ffnz4uebcnu-E0K3--4umFV-1xQQF0KULdhJnCaOX--5ji96o-jMt7YCKBproNN55-KC9-7-Pjp4LPbw---4zuVV-2-p7F-4VdEB-3g5r8awo-6q3GTnIBnBlaOaOV--kXLJ-0NJ5IV7f1wFOePedueiffjEBwB-FFFFFG0F7pWV6CJfCAHcXBnHgpIN5Ox6lbxrJpMSxbpNN7V56rMF5-7-X577V--lo2Z-0O25AV-28oRFJ__7yBm_ICCAEJgcnBdJonCBgegnJpS9XXe7nIKCSSKpxppCpKUrbzKOzaUUoUzKLOttxGVV557-OWtbVWV0a6ryX7X70cX1-cUu-Uy90zaPcXe90XX--AA8ER--Oap9--gnQdkH4b2ThSprSrUSrMSSUSxpMKpUSprMKrMKSpprUMMSrrSrSR6rbr--N--0X71d9-VV7e7WaWu1Zc-cVe95BcZe7917X7cXV7VX9eeX9--Bw-4--LXIak-9oUkasF-KdZHh5--QKOSQF-0f7Ac-DpZnLQC--5ifVV-2M_TF2_g-RhCKoxKSR7-6xX7OVh9-77uqCsLOaOKKK4K45PKaadudaaeddaejyeedeTsz--o-k0-nzuafiueskznG3FB3FG3EBnknEs4_OOGa_K03F-BBzvnywzvvzEBBkk-EQ93ASrF17--hcV8V-0ho3c-1r18a-KLsKtn9ghIKopJxGbzlz5PcOWWV6bZeVXV-erChLbuawo3F-0QgRIV0AS_oTz4F-0iqsc-LrVEayh0F-0jBw7-1raaM0sqwtimmmocCrUzKrUzbxJeYBexrSIoT50xMUUSrzrrxxxrppMMIrI9gnJzzaUOzSrSUUzxtbX7OsU-UOzrUxxSSSpxSrzxzrr57cWue-BcVX-X7X10bqN7e7ce7-7cX7eX7ecccXce9e9997eBhHmhBnBme7791-5119cXV-ATZeR--Qs0X--CxF4-2M-EHrMNVV-1s18b-0M09Rrc-3i33Gcy3-7r1pBmhExpSrcP9-7-3i6ThbzJ-0r2kLmxV-LsT9bywKF-Cl8ajc-5sg76o--RNyP--DBcS--r75Dw--AZP8N-CRYLYIrWcV-AZ_gR-hRb0Q9efBUUzzxrq7Ve9--DIcG--69X3V-2_KXF0CmrNBxUTN7e--DM2x--MBNss1qtbGTeeeiebfeviufifjG-FF-FK-2F-F0-F--6CEoV-2b0EF-pnx7hKlVX--DWBO-IrGX5pJgomd9Beefrr6rUttyNUsWaN9c-iuOLLLPjcnF2--0p_uc--uwAJ-ISZnnCIKWa---QgbdT-0_qJ7CprKy7917--Do60-0MPdwpc0LirO4eLzjezyyzzzyyzjzjzzzvvsFEiyn3OJFKKJFEwwKOKJJKGd_GKKG3JK4KJ-ESx2nSrP79-5j2XKaPVn--_t4Cgjtc-1wYGa--6ZPXV-Ama9N-CTK4nUSXX--2n3-F24thzhrHcXnIqUttxbcd97-3jCxpvh0-1rbiZpEa1-JjETd_azzgznzC_KK4F-0TTz2V-2nrwF-Ctvzgs-Dwy-LEp--Mcags11x3uLKKLPLLLOeNwzBknnwwzECF-0uAGc-ax4e5iii30---6dYeV-2pDWF-0v0pc-uxhu5KvzivnG3GF-0vS9c-Tximavyl4F0GTtRbKpKKKIMKorSKxcP77--50cV1--X-0jSM8x--MlFHs-PyMyriv3J--6njmV-AuIRR--UKqu7wjf1GaaeOdiaPdeeaeadePOdd_OGG3FK43G443G3G-nBB-En2B3P_3HKJKGJJHPdOKJO_aOeOaaQe_K4_F3G3O_8PKOeLOPeOK9TddJ01OaPPu_aOdaO__OKKaK___GOOOaLLLOd_-9PPeaPPefeueOH_Afeeeueuaeaieeeaadd_OdvvivzynwnnwnEnzzzzzznBnBzEEEEzznwzEnwzzzzvizyzuuaveuePv-wnBwwnBnEePaOaPaOLEwBknueaaMwzeeePPujjczvyvwnnnEuuusEnnEEEEzznEBBBkn2BnE2BknknBnBwwn2Bn2B2BBBkkn2--3Bk-k-F3F3J0F-BK8J-0-3Fl43J0JJFC0220-FFB--434_F02-3-FoF-3--ULK1-9jk6__KPzsnC-0rs2uxu7-5z6oLo-0Ua7Y--2yTuFFpzEegnKCAHYSIEIBgmnBen9mhJonKKpKpKIICCBopKMKpCMMMSxxtbbyOVNN50V550VN50VN50WVN-0a--0xLN-V--711-V0R4w-PfBJ-5sCnMpUSzGcVcX--36DPF-a3T2CpX7-21Rkb--7L9iV-3CdyF-D7K1E--E3yyLPB-AsdryprMSrUMUXVXX77X7-0lNuCb-0sh-cpsV-24z4a-0O5skoP--HJcO--8cjcVMwvW_PePffuOedddaOd_OLivedaLOQswwnnBwnnBBEEz2EknBl___JJF2-ddFJBB-kFJF-3Oxo3mryUe9--oNo0k-L_0tBtV-x9UXPVk0Kd_2QCCKJnKMU6Wy6x0a5OtWWaA9f9eX9VNhBeeOaOaK_aOaOOOOOOOLK___aLLLL_aLbzjjjEnnnEEBnEBnBwwzEzFnBzBnnnBwkBOJ3--9Q2JV0hFDWPTj03-0esaIV-4M3pF-DfxqCV-0LPM3-8fbYnBy5-Cq8_WadYzEwLK3--A59FV-CZXbR-2ghDYk--LQk_-0vCsPnTV-0OncZ--gxEe--LXbt-4QGLNnIMaTP9V-4d4NF0DoYGBxBttWe--LdTx--AJjgV-4fDgF-1q1n72bQ0Tq_fzyaLyy__JbzjyiyEvnzoEzz4K44GG440J0GJ--AQaoV-hj4xQW--QUtTs-0QzBZ-2hzuIu--M0W0-3QVpXzUSX9X--r954k-6-LVD--s6udk-U12pBUe--NKbO--B9nkV-55gUGAILAU-ee9eeXeeXeee9eeXeyN9eeeee9XAzbzzzUUtzxzrza1fzrzs7Xe9XmeeiUzrWztzbzzsUztbyUUrztzUzzyUVfzMzzzzzzzzzzyUzzzy1SzSxzrzVczzSpUzbrzzztzzzzrzzy1cXXecXe9zzxzV9eeee99USzzzztzSzzzzzzzzzzWtzMUbUztUSzzzrzzsD2xzxrzbxrzbVeXUzMMzbztzztyUWVX7cX7X7ccX8rtVX2Vc1gVWrVNOta1UbbaT6byOyTMqXggpFemnBnLpThScXXopfJppUhSzt_USUrxSxSzUUKwepzznMzUwefMzSCJXAKRemgegeeoeeeeeeXe99eACMxzUrxzUzzzPmeceeeeXeepzrzzzr9eee9e9ehUrxzrzryUzzzxwg-3sRUlgzK-1wGfBrUXc-1s_20ck-8lARQMsc-6sakWaUYsG--BJEyXtygSR0KGMwzkKK_KK_KJKK4JRnEEEEzEnwznzwzwzzzwzzwzjw3wkznnnkKOKGnEzwEEwzB0wn2vyizz0nEEqPvnzzzwjjEjzEEwznzzEzzwnvz2jjvvzwnkTzzzj2vznzvzyzzyzzwzzwzzwzwzzzEnwnknzfjvuzECfjDzEBBwzEwzEwzwzzE2vfwzk6njvw-nzEEzEzyzvjvLizyyzzzyzzzzzvzzzzzeOPPKd_4aPuwnaLK_aOezjEwznnn2EEnn2wzzEmwznzEn2nwwzznwwnywwzzvzEznwwnDPzzwzzzzvzEvznzjEyjEEnnwzzzzvzvzywviwzzEBwzwzzveznyuzjEzzzwznzjwzjwwztfvzznEEEnzzzzzwn2BwuO_fizzvzzjzjDywzjjEqKfyvzEOfzzyLjzmzzn2hPjjAwzjvjezvnfzzzjAzfjjqKOO___OL_KKKOK_LKLO_KKaKKOaOOLOO_ePLiKKKLKKLKKLOOKa--wN-ww--DBg5N-4latIyc-MYUfaRyCF066q1CJxa5X--5F6mF7z9BugfEUSrSArzxBefBeJcrrzbtzUzHmfUzzzttVX7X7XXX7XXX9--yKGGTsF-2mkw2k-3tQstjx4--BkdsV0DNK7PzGF-6B9ki-9tXkO_K_zznl-0RovXrc--OeZW-IRqTXoeXefUzzzxHYUyWzzzu9XZmZe7-1tmAWzJ-0nbeYV0DRxYTvG--2Dto7-0bYlJ-0nm6v-4DTdBTzyzvzvlJKJK4K-8wxJTrrrzrzOceXce9V-DTg9R-dnsbYExxryUzaeeceec-6bz2Lk-2o5Gnu-1u2YOv3-0oCyAV-iaLAUp--CCXRV2Db2oOOwzvnpKF-ppYW0bVVaOyUzzzrxpxpzPk-2eBMb-8xGoerUUxzry9Xce9XV2ydQ2OK_OjjnBwnJ--pC19-2uliNEyk" :
		ap.pc === aAF + 2 ? fz =
		"JJAf2uP6y-0nEiiuyywnyueuTbfevfvvjivivivjfvivviyvuuyEgzjjzzvviyvizvviuNziyvijvijfvyvgzvvvvfeu0-F-n5a_GG4KJGGG3G3G3FFJFmKGJ4JGGGG3GJJFJG3G3G323G--kLPeduaKGFGGGG443JJJJJJG--B-C0FJK__443-BJ-66wmpBnJopCMJpCCCIIIJoopKKICKCBnCKJgooopMIDOzzSzUzbzzUSyTUxxrrrrrP1XcXXX9Hcn9cceemece7cPIoeX0sWWaOWVNTOcTNNcN0V0V5-N0aOa-0V--N50a5Obyc-M0z3TPOdgBnBF0NOpxpMV7-M2mMiLbinz03F0sTx8mfrNT-2l6QEdMwwp-5XX7UMTP1V1GIuvaNn-5Xfxrpw5XV1GNTEfn4-_XvzjAAA9mfA9ed9fpzyTUzyUaUyOX3n59NTKLLKHPPPO_LK4iidea_O_QeideeaLOLLJG3-0eeddOaPO_OKLKzEznzjgnnzBykknByEYnByug-3332ElJ222-2wBko2BnBnBwwzwx-9Y6j6rrrkccc-E5ctEizpJF-aDYgSMGz-X10G6VyjiyuuPeiuzjivh3G3K3G--k-9JGFAPEIZSKBghKSMIpKpCJnI9gcXeccehHccoeXBeoppKIJoghIHnCJnJmemmecmfA9jyTUzzzbbxbV0WaTT-OtWWWV0zxtyUN6yUzSxrSqTUztaN71190V7-5V15VUy--V-lxHEg--33oL-67Dhyu0--3FoL--7ahw-LGYowfzu-0HFMIfF-aHWWwxxxcXX-E8ZrUdfVl--TIJLzSr17V0wcDLvivjysGK3G4XaJb1zppIJpBccccge7fUxx9eocX7cXX6y7Y99Heggen9nJdAHp9Xnp9IIJfICIBdCKKIIMMJme19eXxxp9X9VVfEMMMSBpooe7XCSBomccxxpHcrKKCMHmXXmcxoeX1mpJe70BrMJmVV--gxExIpJcX71nKCJmhCKKCIJoopCKKKHX8KHd9nKrKBj6xrSrKpz6xSMMSrKppwObaP-UzSCAICIKCIKKKCMMKKCpCMMSrrrKpKprUSprMUSMrSprKrSpSrUrUSxpxprSrMrMprSSSppMKprSprrSrxKSUSqUGbqUbbrxrSxrSrKHXXeggeYBnBgmnBnKCrJnKpIKpBnKCMMrSS9chKKIBeX77EIAE5OxIIKKKIIEKSKSKKSKKMKpKpKKSMSSSSrSzxxxzlzzUzzzzzUxrMMMMSxxxrrxrrxxxxzUzOzrbxzrxzzzw6w6yOtttttyUbbyTTTTTTTTTUtzIrzbzbzbba-71-VVV77V--7711-V1-1---51--1-1-V0cN-N5VN1e-ee7-1mc71Xe9fIBcVV0WbyOzxX-VV7VNN5TUzUu1ce9menBecmf9gxHc7c7V-777---50VP-V-N-0WxppSJpr6zyObzttV6rMKpUyObttbryUbzWaP0sNNOX757X97X7ce9XXXXXVc7-V-X7VX5-V7eeA9menA9fBnCBnIIJoorMIRObpIKMJpppSSSMSoeX71-V7777X97c5V-ccWV0VX77--NN55-N--7U5111cXXenBcc7fABgcX117X7c-gf9emV---1--XXXVX7X17579VVV117Xed9XecXX--WV5Uzz6zyUzrSrUUaNUlxtzXXXee1777X1e-5NOy--WV5OttttaTUzyUrxxtzzzlzMUrzzxaUttbbxWzxpSonBmpCCJpCKCIJpJooeACHpprSxaOV577U6sOWV-NNN70WVOWzwTTT5NUxryUba5NNOba1cc79cXX199X-91X99mhIHfJmXgxxxpHe9XccX997c7X0zV--V-N7P6k49V711-111X-77cX79mmeHeccV1mdbn_Uno-DKNVSo1-O9kaiKKzzEzpK-8_SLEzzzeeeV1Hinzjh3-8_UsM9mjtyTVBHk8AfiyvivizpG43G3GG--0OIzV2mnjMaLEBxn29mc4SSpprSSSUprrKprSSpppKMMSrMrxrKIKHhKHfIKKpIBpCIIJpIJnIKpSKJo1AKKpppxprSprpMKphIKhMUSrCKMRpMKrrSMMMMSKUVUxxUxSJe19efAKKUbKnMxKKUKIKUStaSrUMTUrzbzxxrSzzUy5SSKtbqprTprzSxxSrBXe9ghSrMMUyUzzbySKrUKpUSpSUMtV---D--0aN-X9997977VVe9XD-19XX1-9XcXXXXYxzUttzbV-7VX78by0rUSppKMbs5-V77V77X-X71--17-X-7V-0WWVN-6byTOrJepKpSrpxrUSSIKSKSzrrrs797c1711ObUSxxpSSSSSSy5--7997VV6z_rrSrxpSprs-7VX17XeXVXN-11-TUUSxztyTT5ObzrSSrzbtbbtUKzrxrSxzUrzUzShKhMKrxzzzxyMtzqnAA9mgfAAACKICBnKzbbWWbaOtbaOaTUbtyUyTTTOaOa556zyMxrUtaTUzrxrrrzSzxzbta5N0s-ee997cX97cX7cX7X771-V-aT--V17V7X1--V7Xea6ty5T5Mts5--5-550aT55NU_ySxxta5OVD--0VN5NND-N--8a6a5OsN1og55OVVOta-75OTSqhCMrBmhMbbtzzzzta--NN5-8Us0V-N1eD-XN0VOKppraT18zs0SyOUaOa5OaN1-VcX7X5OSpSxpMSra5NNObV5-N19cVc-W_KMSrrxxztzsND--MJpKMrzb_pyTMzUa5-0a5-X-VOIMMMSBnKKSMrMzprzaQBen1ceeXcccempprtzUUSv9mmfMrxzUMxpUUUrzbztrxyOzUxrrMzbWbJppSvC7gmenA9mgggfABgnBf9nBppUrttbzUzCKrSSxzbaUxPfMSKpKnJhRpIAIIKrSzUMMzxztyTObaTOWWaTTTUbzzrza5ObaTOWbbbUrSrStzyUUzbyN--s5T2rs-1XeXeefBn97VfBnIBemf97cXcX7bWV1111c1eiN7f-ABa6s19n77X7g97cceX7f11UzUppry-N0MMAIKzV4UW_rJoppza55-TMSsNObztaOa6KzV-77N-SKKSUzbaOaOyUtzzzyTUbtzxrsOaObtttSraOWaObzzzzz_ptaUbyMzzyUtbVUyUrUzzzzzUzzxyQMzzUzzzeeeeXee9Xeee9eeeefKMIKcf9ggnABemefCCKzrLf99X1fABgeeXAKSSMKxxzUSrSraMRpSxrQA7X7X9oopBo1N9gnIKCIJmmmnKIKJomn7emfMBc51997cenKMUzPmegmfMMSzzyNA9OzzUUIKMUKrKpSSrUrxza6SrMSrrMSrUUxzrxxxrUSSzSSxSUSxSrSSrSrpUrMMUSprrUUUUSpKrySzSrxzzxpzSppprrzUrSpSSCSRprSMKKpMKrMKKCIIIBohIBonAAABnABmgemhBmmmeenBnA9X9ecceeXX7Xemmcemgef9nA7en9kecee9eXeX1-enBkeX7XeXce92VXX99ceACBn9XX77XVVV--X7XemmgeeXXX997VVc75OVeX9hAAA7eeme9eXe9Xeeee9e9ceemmmmf9meegfHenBmfBnA9mgggemnBggfBnIHmmekeeceX9e9cXXXmoeceeXce9Xce99eXnBpCBpSrSrSrMSxzzxyeeeeemkeemgf9pprUzUHmeXXem99e9eceef1dbs17ecepKrMgg9XeXccX-Xeen7cXeenBmnBghCBgnBACCCMCKJohCCMrzzzyUzzzzqognBmnCKprMSMACKpz_wmoogepCKrMSMStUZkeeeeAH15-11-X9hCKMSRomcgpKzprpprs0z_rKppzrSrzSpIKIBgXmprrUKIKKrttpKzSUBomm97ghJpSyUzSzzzUbzzUtrzfAI9epnHceceemegghUUzxzWbzzrbTopMSta5OVOrzzUSKUUxrsOrpxQCSrIIKSxSrSzSrzUrUUtttztUtbzxxMaOV-sOWV5--NNOUzUzxzxzUUrSxrrUSrrSzrrSxSprSppprSpxrrrUUrbbtzrbbrztzzrbbyTT6bSyOa0aTOaOy5T6aTOzbzpxxxxpzUSxs7XESrKyOUrtaOa17zyUaTOaOSxprKCKgnIAAABnBnKppppppJnHnCMJnCCKMSrSSKKICCKKKKppKo-2AYFDB--MPns--j8uk-0TwQV7mzO6ievyyvFGK3F--qNX0zxzxrXce9c-3mKUw-DOJuzw9-lBkNyuuuviyzjJK43G000-OaPJEprzSKMrrkccc-1997-2C8pDo-uPOqwf9mnbbtyTV-2Jzv--5gXT-CCmSUvvGG--5xsy-0D-rE-4b-qzSqX7--sMmk-0lNEV-IZ0nk-tm6EnFN-Rt3BvgF-5ReOUc-otNAvisG30DRoZzUzzzrwP9eeecc-3uJps0eSSKRrMGzrzrrM-V-eXXeX--2fpn--6MiT-0DoXD--6ULD--E2lg--TGhs--wrkk-0uNAV-npyzx-0bkCEF-6EeL6jG-5bpJQAEbaV0nuubvp-0dya3mhrk--BzMKzF28zMOzrMUP779c-gziXufkG-2byBQrcV-J-IhV490elopIKKJzlX70V---2FCPyV-HVlaxpX7-x0_hzvvGGF-12_CV1o6LCaeB---Vy4s-K15tuR-0cH3EP-AFalyPf--1u44Wxxxr17cc-CFkqTusBG-2cO5jMcV3oE3YuuiB3FF0P7tWrre9-4GLRUh--19rRV-JN8nk-1B7iV-3OQA--cpNzV8oQxrjjizyyw4KKG44-1d-ezGV-_77wzvGF0eJQZmxL0V-C9jlvF09OI0rTX--JoI0k-PTDyyV-40oK--e5AbV7K29M_OLMfgznEB4-IfrEMASpSUSq-7-Nee-ANaSDyx3F0A69npL--1qoP6bvVF-qtlNxCKCUa0V7V0xqOguudaNznk-G3-Lvq2RrOc-2N7SOfvlG-2g3LFmnKUrla-7X--Vg031A1AJgoxMSporMSSr-XV--10aNXeV-y7CVQfz0GF0RIcNptae02XdsiLTezvzyyyzjzGGGGGGGGG3--GRVT-QXt0TTyyzwK4GJ-r5K0genCxtwT-V-yBnotTvg-F-RR4WyVBNuCtdejvYyi-knBLOFJJF3BSAjnMSzUbsX9XeV3t0vf_fzv-GF0wZ8bxrOe9--8AQA--HN1m-CZlGTLRwx-cmONzIxrprppKprUyUts-XccX1e97cXc--_7pw029QbgoonJUROV5-V-iJrguik4--mdjY-0tQAdaRk-BiCss-aMQLTjJ--3jUaV4tUqAvjzx5KGF-YB7rwfzwOeVuOXlO_O__Kbj2vizuviyuuvfeveTiviynvYziefiiefvfiYvjB-444G3F-0-2-kJ304K3GGG3JG34--F3GJ-IBbGxS--3yOw8PPd_GaaiC-Eueibvyvx-304--C-2IBzcggmeenCMSrwOaOzKHmnrUSxzTOu--V7VVV9c-yPFVPuf0-F0gt0ZpKs17-aTPhOiBFxRy2ZmgnJeeXAICBnBenJzSrKKrrSSrKpMKJnBnCKMSMIKMrxSOV0V0zzUKSpppSKSEKIESOV-Oa0sOzUrMKSppSUMMkP77V-0a1--VP-17--71--7-UxSrrrrSJpqOtzzOX770hBcX7V5--XXV11cc717X7X9XX999777X7e-_chDLLiiivYEl33G3-Vock29fSpSKonCMU5OaNV-NNX7c2DaQYtPjzvjfiywGK33G3G-0xDlzpUyX9V5PSx2jyuzVGGK-0CFZWnwNV1uXF0_fBo1IJJoSSJnACCCKppSxyUV-117-N711-6evlav4-JpSyQKUSSSpaX517c-c-yg6luPzk3F0CNJQpy9-iumBnaLKKeudOKG_KLKLLLueLOaQEEjEjyinEyzejjnskBnwC043F2-nn2zE2EEoKGKFASOdporHX8CBhzxraUqUzSlzSX77eeeXBc0V-LhikvW--KmlL-EfebDLTskk-YMe-RrMTV7V2uyCCaPEBC-5q1sjK6a7V-A2Ih-Aq892rMUNP7cc-TlB1tv--ANsVBjV2v6d6aOwnp-7qIGAIJlaNV1imQQOPszivwzE8GGGGJ0vODuRhCrppCBpULN5N7NX90WX-6gppqPk-GqSXfBnqOxtaUemec-5nnTs-YPD2wz6re9-3QGmz__bnno-2PJQD-KhKnTaaTn-nF-0Pg_N-aphUzj4FKhhRbmhUrKHohIzMpxrpKKKSMKSKxrU5N5OaUL--X11777Hf9VX-N7--5P-XHXe-0hhca-WqtqMCppppSJp6ltz5NVXV-X17eV0QUJbjJ-nREfwnBwOtbae-IiGGaLPvEk0-Er7eI9nCKpUa0V--1v_ZSfcl--0T7Zc0TwsLPNzgz8K4--MdCP-8jMTqMno-QTv6BfDUs-CjSgLdjBG--rknYV0vttlfW-0CxT2mcUV6Qv4daeffkn3J3B-EUOXBja1CjifiOvd_LdKKaaOaK--nBw8aOFFeeKbfivzjix3En-2Ennz-n-3-2UYTi-bkAQ5LLKaRzgwnznGJ-MWJCRr5NV0wBylcwF0D6jaola--BJZx--NfgX-6lRkav3--sx_2V7RUnUaK_aLLQjzzz-atBrI9mgmnICCpCKLTOaOzs0aNOWV9c-E9stskaiM_-pIJnKoxxzxzrUrrxzUxzSrUSzSpISxzxbxzzzzrzzrzxbzrzUta-0YBe7mf9eeV--P9eee7XXcecVXeXceA9eeeXX-c7T9Bee997n9X-0wqC2ylF4iQ5frxSUzJzqNX9cX97V1wr6EuslF-YbY3xSUaeX--x1Jxc--uDnn-6S8wKaPedvn-FFB-zea6RfESrSq7-WX-6pPVqNx-dun9rIIKMSrSrSxxBzbts7XeX97XX7N---2MXGF3ilDMnrSppGa50VeXcHjS0jOLKO_LOaK_K_K_LKK_JKK4K4KGPedaOK44KOPaK_3aefffeTzivizzzyuvkBzwzszEEnwnn-nzyzwzv03G00-B2EzBEBwzBwnEE2-ow4SEIJmcccxxrUJnBonSrrztzyTOts-9X7VX7X9-YvBN2wwwwzvvjjzzk0zOXTUyUxzV" :
		ap.pc === aAF + 3 ? fz =
		"C0DX0NP1V--QqeadnzzjynEEzzjjivdivfezjj2BBwzwnEzzzzzEjnnvYBBBBEBnzz-UV-hflzUUSrrUzSxSxzk0a1-V50K-0pMiudevf-zvfeBnyviVF-F33-yzgp3bVV02IKUrHnUzzpHz5UzUzSKrUrzbyNN-OzzxzUUUSrSrrrtzttzWaOaTUzSxxaOaOxrKBnCSKCIMSKKKKIBpIJoonIJopCJpJpCCCBnBggeXn9eccc9X7geXXn9efHfBnABemcXX9eece7XHXeXecegeeVV1ee9eX9ecc70eXcXe9enA9fAABnBnJpMKpKJnBnHmmeeXX7X7cceXXce9eeccXVVVV-VeXe97Xcee9f9eXeXXXXceWVWBc29cX7V-6aOaTOWWV-1XX17-NOtWaNVnBn97X-7cf9mmnBemXgece9I9eXXomgeh9eX99eeeemf9BmmeHgeeegfBggmnHoeABeggnIBggeeeecVI9eeemeXe7cX1-ZmfIKCCIJooonIIBnAAAA9mmgnIIBnBpKCBnCCCKKKMSKJoonIBohBmnABnCABfA9gd9mhBopCIJonABgmnJopCCKJpBnBnBnCJnCCCJnKBoggpIKCKJ-UMSGxrMMKKIIISrKpSKKKKJopCIIKKKCCCBnIBjSrSSpKppqUI9cpKIKrrrKSzyUpKpMxS5UKxMSrSxxxpSrSKpIrHxrSMSzHfrxxzUUUSxrSrSxxxrSrrSrSrrrrrrUUxryOtttzbttyUzzbtzzUzzxzzUxzrTTTTUbyTTTTTUbbxy0byUtzyUzyUzzzzxzrrSrSSSppSSMrRN-OxpSMztzbzzzVUrLUSpprUtxKbxBfrSKJpKKJonICppKHnKKJoopKISppSrMKrSrrUSSpxxMSxprUSMMSSpKMSttzzI9f9hMMMSrKSMKpprKKHnCSSKpMMSSrKKKKKCIIC9gnJonBpKAKJpJpBpKBnCpMKKCKCKpKSSSrSrMMMMKrMSSMKSSSprMMMpUKppSJpKKKKMKSSppIMIpKKMSKSpKMSSSprMrSrMMSSrKppMMKSSMSSSSSprSMKKSKBmgprSSppSIMzxCUzprMUyTObbyUzzzaOaUzzzUtzzzUUqOaUxy0bzzzbbtaTOaTOaOaObaOa5OWbaOtWaOWa555555NNOWaOaObaOa57-6WV0WWV--O97VWWWaObbbtyTUttyTOaNNNHV0V-N---9-V-777579775-0taTOaOaObyNOa5OaOWbbaTTTTTUztWbbbaOVOWaOa5-5N-7X--V-517T7---7-Wa0V-X7ccX7-7-77VV-5-7-5N17X7XV-0VN5-N5TNNNNN50aN-5Oza5OaOtsOWWaOWaOWaOaOaOaOaObaOaObaTTTOtbaTOtaOaOWaOaOaNOaOWWWaNOa5NNNN5-Oa5NN0WaT550WaNNN--N0aN7--0WcefIBf9en9geecmmf9eAAABgee9egfBgmeee7cX7X777cce5TTT-VVX1cX1c7197X977X7Xe79eX15hHX11717-7-V-V71177VXX7X7ce-V-1-1-----117--cXX77ce1-VVV-0u7X777117771177V771-717VV-977X77VVV-7X-OWxpSSMSrMKMSSrSrSy5150WV0V5OzJpKCKCCUzSrSSSrKrSprMKprpMUMMMpKKSpzSxxrUMSSMKpppSCKKSMISMSrMMUUrrSrUKSSpppMpSSSpxrrSKrSpSMKKJhSMKppKKppSKKSSprxtzaUTObbaObzzzbyUby5OtzrtzWsObbbtzttbtztzaTTUs-o-9SuvkpF---4GN0--Akuevkk-0Z-5DzUUzzUMMSrUUrrxzzV0k24nbEF-72uPs-31lfR-X0zvBgpOsN---Fjh-1VahUR-033plvivC44-bVp12CUzzrxpztzzzy2A979eeXd9eXXVGkPch_OLJKKa_OLujjznwwkzo-Eno-q32WRrMKpkV7-V--7jXk2-IvW9e-7xySpV2kZ-vaazk0-HWAOjKHprsWxta7ccV2FavYivl3F2cIsAppKMwN117X-81g-ifoF-L4N9UrkcVDFfPz___bjvjjEB3ByvEGJKK--WQlvV0kn8QjoF0NPnGrScX-E2V6yPuEF3-D6-ISGX-42b3rh-0NYH_ooy-3P8eEOJFGGIB-B-0-2043LaPdaeeiZ30003G002j-03-JGFGJ-4K-03G-3303330NBzB-UzzB3DvzuzByyfiivieivifevefjzyw-D9vlxqX-A58vaOYw-07nF-rFPV4lbM4aaabBn3B-mC6fBmmjSOa5N-25o35o--CiYN-gQSZPTw0--2QiX--66YJ-9FT6CN-BHQ8jadHQyddcyvG2232-F-8Hr8k--dcfk6dIezn9YpIBhC5Oa6y5UrWZmX70C2JVtUzzp4J-mXEjworrq557e-6IQmyv4--dmmEV-JuCMk-9SVlk3KDxRuPiueObi_JGTyycnBk--4-BF-eicPos02KqRDLPefeTiuiviuk-K33F-----6f9qfBnUWV-jMD3iO_aOaPOiwBnBnn--0evOEn5U5c1_T5ktLKKGTvjzzYp-w0Rg9s6ABmeWBmghJonKxCIKIKKSKWa6zzro5Uxltbe9e5OtVOWaN-N6w6y2ABcX17cXV-SWU2PBo-alHDReopsOa-OOYdiPPPgnE00--BsPu--Oo5J-5oKjx-AxeUxtaeeTeeffeuePauuvivijfieiivePgyvvC000000-3-3G35JG-2BF0-30-2FFFF--3hlWISD1-ER5o5evV0-0eu7_RjSSprzrSrcX7X7X7X--6KDt-HirDjBnBnKMba5551-3rQbzaaEBnpFJAmhxnKSSSSKKKKonIKKpKpMKrSKIr5UrNV79V1----V55N-1V1-7-7-X79-IUBriLagwC2-3jm7YKkV7jUvJLaLMeudeP_LPK3PfeaLeaa_F8aaLLOaO__KHdOK8__KeePOdaaieeeiiefifeeddddaaPadOPePPeeiiveueaeeivfeiuyzjvvizEBwwwzzEE2-kkBB2-2-kB-2-B222-B-k22-BB2-B-BB222-k-kF-B22Bk0-F32nyevg220-FF-0--0-F003G-G0-Cl0ab9eefxzzba-AX5ODuklF2RKFUonyUUaPXeV9sgwrddaLaPNn2BnEE0F3RULpn9opxbbbtXVe-Y_1riO_LKfvEink--0BfCIpy1V" :
		ap.pc === aAF + 4 ? fz =
		"EcA20EP9t--46idaPadePOddiaeuuuebieeiiivuO_aRnufezijzzvzjvfuuPKJFJGG3GPKGPOaTiiiedaduus2EYuiedn2nyffdv32--0202EzeRwoG--Ezzjevck20202zeufik43BFBFK0G4-0_J--nyioC03-0002-n22wyddyjfzven3Eyv3JJ20-zynnEyjnnvjizjjejzyy_wznnBn2zvnzyvzBl3GG3G--23FFo0-wzBB8m--ZISrMUUSpzrxxrKrrSKpppKKIACBnAA9mmgfBcee9cXef9geeeXVf9999199ge17V7Hgce7c15ABee99eeXegegegfBgfA9mgomeecXcXgeXceXnBrxSxxzHecefAUUJceccgce0AxBeXXXeceY9nTUJgoepCJnzzzxIBfrMpIJmnpHmc58EJmnrSbrMrUKJnIKxrHgrUzrxKCbtzprzxKISpxzU5Ulzq0a-NOzzxxzSxrprSSpxxrzrtztyUtaOaTObzxpxrUyObaOxMKBn9pMKICCKSKIKKCMKCACBpCACBonIJnKIHhKBpKBpBonCBmnHmgeme1ggeeeX17Xc7VY9e7emdBe97gfBfBfBfBf9e7X7cXeXc19eX-ecXceX9Vf9cee7V-P1e9cecX7e9X7X-0XcX7c97e9V0--O6glDk-BjnBnJpKKMSKrrMSSpSSrxMrSSrMKMprSKzUzzSI9cmgonCKIJppI9YKCKCKKSKKSMMrrUzzzUSMSrUUUSzrzUzryUaUyUyUbxlzzs7-V15X----V---NNccX-ccc0y10WeeeeV--70V6xUztWxMSzbbc6xta11cX9X7V7-X-eHeggnCISpKHX1V1X-7-Oa-N5Xe98HeVVVeeV0X9711-3--XjabvBG-0s7nSrxGc9-BFOunededziszBzG0-G-KF2NDz6rSzzu9d99-0FVIObk153LiReenAUbbxzxzrpxq--e9e9e-A1JTaukCF07J23pq7---cVM--WN3QV1khy_awxF-H4kIRjyV-oCGnvjx3J-16-Ny-U2iSDjyffv33G4F-CWtG2GxSUlV79e--2nbB--6j1s0REhiviizkJG4-4X-vYML77-ZHJ3Pv3-1cZeNponGtV-V4lDIreOiuBl-3-DAESjT9-r4cgTLLKKOaQjzyvgn3FBEB--1pnH-E4zQyafnG--5BKbgN-3Oxws0iCDazIKxKMMIr5OVX1V7759-05hoa-4YPwIzTXc0oS4-OaOaanwnB0-qYoDA9pIrzxzpzpKzzzzUzrWVf9cP1ceceVemcc7cV0H9uMvF-eGU9USSbuX975JYvsOLKOKKK4OaLJKPueTzjEzjzBn2zj3-Bnwn-B_HnzBpIzyNX7V1mi7bfz3J09L-pSKKCSrs5P7VX7-YBjWieueuusF-F03-0dhx_nILN-03vANuaQYl---6b56-jf6VcBknBBn-Bk2BnEBkBkn-BnBkBw-----n2Bk------kn04GKKKaOaO__KKKPLOKLKGKKLKaKKKKKLLKaOOLGKKK3KaKLKOaKaOKKKG3G43G3J33F3G4G4JGznnE2--G-G3334L33G43J-33JG3KG303F433GK3K3GKG3G3k3GKOffaF--GG-FG3---F-3I-3F0-0303F40GGG-G03GG4FF0--FF2-----0---k-G-F3--04343G-G3KG030-0-Gk-2DwkG43F3G0-30-F3F30-00-G30-0-F-3--G33I--03FG3303F3-I0--3F-nDtfefeuvfideeviivfiuviuzwn--B2BBB22--wn9PeLeeLeaPOfjzyvuiveuifhfifiivevefffjiafjiuifeypeeeiivejEivjiivijfiuieiiueuieeeeeafieeeujvifffiuzziviuzivieifiififPivfeifivPvyvijviefivevevafieeaOeueevfeeveeeuiufiaeefifivizizzwmznEzzBnEzBnBnznEzzzzwzwEzwnBnEnAyzzBzzBn-nEnBznEwzzwnBnzzEEzBznnnBznEk--22B2zkzwnnwnzznBnnEzzzmvwEEBkBk-B2znEzEznBn--kBnBEnzBzzw---4--2-n-RB2Dvfzn0n-kB2BnB2nBknBBB2-n-3-KK3JG0304-G43GLJJK_K4JJJKJG3F43G03F3-Fk3-3-k--FLOadeOaOaOOaPOada__aOe_LPaPOK_KOGGKKKKOaOKKJG-K3Gk--nB-FF-3Rk-JGGKaPPeaPPeuieW00-FF3G3FFF--2-J0-GJ43G3JG-0KK2-3G3G-3F0-3G00-F4N2znB-3jEzzBk-ivzzfjEBAzievivivieevivueiuiuufivzzzvivzuivivjvyvzejvjwzzvyvzwnnBzn_ejEBzzEB2-LOKOaMBBzzBnzwzizieveefifieizzzvyzzznyyvzznvjEzzwzBijzjyzznDzzwnnEyznzznEnEEw2yajzDjwBvnznEnzkzEznivvheejwzjefievveyzByvnmeziuvfiyvyzjnzjBwnkzaeO_PO_dLLG4PPvjivjivjiuviyviyzjwzwnE2zBnBnB2-k--4222BzEOOaeiejxPeeuuuuqeuaeeuuefifefefeeffeuuifeveffeueiieuvfiiveufiivvfeuuiuffieeuufuffieyvjiyfeveiuiffifefieevuiivfjivvjwwnBn2BB--BBnnBwn--2-k2BBwzE---0--0B3F-k2-kBB--k---JF-3B---3F03-k2--wkzEn2-B2wEEE2Bn0BB0-kknBkwE-kk22--eUSCSJrLT7V71K0YLtevvyl3KFzwGJ-DWcRRqP-hG7KyLafizivwwG03G0F-acjpSSKy-VX-IJltLePvV---PeSVrBgmoxprMRTTOa77X77-0N3vk7eoElnII93nzSKBooUSX0aNX0a5V-1pfNUugBJ-9iOdUNV-4v1z-Sfs-zBgmX8MKAxy5NOzKbse7V-0U-Fk-1y-lV-4x-6--g6bj-3L4kbaTYn2J-apmECIJlaN--MR8FTPQYEwpGF-2W9GV-62Hz-7i5cMKKGV---y2dwQvz4K-NgIMwmnUzJopKCCKKIJnKKpKSKKSKMKrMMbrWbWtaT6a550VN---X157cV-VX77VVX7ce7V-nZT45OKJLLPzjzzBz2wLJF0I80TwpCpzpOWa5P7eeV-9fnj-3pOZ6JOX-2f5dcs" :
		ap.pc === aAF + 5 ? fz =
		"CoE-7lR-YWRa2AEJenMxJpbqTObaOBcX5NeW_xnVto5UUzzrzUrtxtxrMKMUSSyN1XXV5NNOtaUUxzztzUxxpUSIBpSSyNN1aUrSpCCIJpKs50WVNN--7N6bbzrzxzrrpSMMSSMSzs9X7-X-VVVX99ccVVDUV19D--998a6rztVXaOV1771-78VN0V0V-7V---YV7Xh17XOWWV0V6pTOs-8V7XXpCF5-N-N-N-N0VObSxrSrSUyN-aNOsObrxMABnKUaUs-V1-N5NUzrxUWbzUSxprzCKHenMtzKoopSSSzzxxrMCJmnABegmXOs1ABmnCSKCKIC77gcepzSKBe9XfKrHh9eprxmnKMKLmehKCUrSrII7XnMUSxrUSIMpIABpryURpMbtxrrSrMUWtbzSnKKABgnAAKUxztrMUxrsObWtWzzUttraOtbUtbbVefaOrxxpStySStzVXaNTNN5SJhSry1zzSgmpSM9mmgofKpxryU_rUSxrPXmhMQIKSxrUrrxSxrprKLpMa-2V7Va-OV1XXAI97ee9m8a6TNSxSzzrtyTStbtzyUbzzbtztzzzyObaNObaOyUtzzaOttyUMy-f_zztztztzzxxrSopKprKKMSzrzzxzztttyOtaOaOZnBnBmn9mmmpMzbbzWaTOta5UyObtV9eg7XnBNN-7-ObrTUzztaOaOaOaNOa555-4KCCCBnIBnBnBnBpzzSzzxzba-7--6WV-1--771-VV------71-----NN-5---OaTOaNN---0WWWaNN56bzzbbaTTTTUCKSSprrSrMrrSMKpKSUUrSxzzzttaTNOaOVN---VV--X--1N0WVN5-7-0aN79enKBmVX9e9177-X770Ws7VX-WbVccOa-7OtzaUzy1WbyObaMxyN6UV4rUUy4zzaOaMWxyOzrzxrrTOzUUUrztzUzzzzzaNN--770aSSSztV-6rxzbbs5-NOUzzyMxzUxzV-1X9777e9gf9ege997VX7X9X71MMrV-V75-gnAHommmgf9emem9eefBmenA1AHmmfCC9h9m91AIHegn9emnAABnIBmV1mmegon9f9mXenI9fbV1ge7tzV--cgoon99gc0s76tV99nCLo1977Ebs50Vf-AKJcc-1fMMKr9c7-Aa-1mpBme9c-5OWWV-XV-50a0VVUV---1N18xy11--V1717V-0a0VV117V7-0VcWaN7Oa6aNN--OVV0SrWyUxzVe8UxyNN7X2bVSMVN50bbzWVXhH7aNTSraTObbWV0Us0WVOaN55OaOaOV5-OsND0tbzaUrrtVXX6rrV-X91V0V-N-V7X17X99f17X1XXeemXcgeA9hBce17XpA17fKKCK9e97hSrSHpomf9ABpSxHpKIKHhHhIJhMUhKnKUrKKyICCBnABpAAJpKBnIICA9opBme9hC9nCKQ97-XhJmfIKBhJoXA9empmpHhMTehICIBehIKSRkgomfKQ1971hKxQBpprSghCCJonCKKqpMSpBX17XhSnBopKSgpKopnKpIJpKSppIJprSzzKMTTTUQKMrKrrps5-KpUKKSSpMppSSKrrKMI9fBnBpHnK779nAMrSxzwonBmXXppQAI9fCLmhBop-s1-WV1hKBAJpBofBegp9mefKrpqfABfKzbpIAKMKHpKKBpIBpqmpKKKRnABooppKpLmnKJpCBpKABoonIIJpBpBnIHVX9e9f7ceeceegpSRe7f9mmonCJpKSpSQIIHn99cXee9mgf9Xce97V-5OV511711-V--7X1--MrSTT--VcNUUWV-7971--X77c1-VV-V1---AJXN--N5-7eYWs17Wa---cXcWs2aOVgc1ca0tVVD---V0V--55-1eX7X511V-8V5-ge9pMKpKJoepIIBmegXc-fCBmgfCIABfIBogmnAC1gnBnBfAABgm99ggefBXXccXf7VXe9XX6ba-XXX7c91X7VV7X1VV1-D0s55--6USrMSMSrWWbzs1menB1N7VUsN----2bVemACUSKKBk-VVfICKSpg9777--7hCSJpC-----bsN-OaOa56rJnIKT0a5SrtaUs99150zy50ty-55ObaOzbopHpMWa555Uzs9ef79gf9eopBcgnKRkAJomVa0V1da5-gnIBmWVVVWWzV-VXAMLkVVXNOVza-1hRmVNEtSrrpMSy17VTN1mgX7X2yN56zrMTUtztzSxzMrStbtyMxSppKST-V-UTUraUy1Xe-OaN9nHpKLegA9a1ccX1nIBcXXXcXcefA9gX7VVzs9XVbzyUVef-Obzs91UV-e9WWaUWaUzrUSrUrpzzUUrsUrs7efB999e971ceXX9ec7c4rMyTN11X-SprMMMbVcYa4xzzrIMpry1X-V19ge-zza5OzMUUUKpKps1-1OyTSzKMKnIKKSy1V0WxzT19XX-V-Xcf7gekcaUby19f9mdtyMtbzxtzSrWUzrSyOzzbrtrV9gXf1me-eecaTMs7cX8aTTMxSrMtrxtzrKKs--VXDOxSSSSCMUy-XUs7gV97V6tV6xprV7tVA8ySrVEzzxRopzbVXOVaUzbtzKopxRpMrV5StxzrzUV7TOVgiOtbaUzba-emVOtbaTObtbzbztbs9emgf9fBggf9mnAKRpgmmn9mmn9egge1-0ttV9mmme6a-iUbbzaOV7NSs5O_s8baNUVaMT0brs54SMMUICMaNOzzMsD1eeccXUSs8WVObttVVgfAIV71g7XmkXtaT2rxrSryOyMsAxs8a5UKtWWxpKztyObWs1mmon9Yy-X7N9on8V5OWVaNMMSrStVXVcV0WaST-aN55OVfABda6bUthMSrT17XN1fVU_ttzyUwprs2zzbWa6s1eopAA99eef9ttbyN9gcX0y-VDMptzs9cdV6s8WvKy0zy171OsUxT0V2brBpMs8s51kTTUxzxzxxrV17es1mfA-egeiTTOtV55OtttppSzUMV199-8bbrUVcAtSrs7XX7gnBnA9eTOs1cT5T2WxRpzbtyN9bs9ABkYWbbaShMsOWt_QMIKKxzT18VXTTUT-1hPecVOUVbaUzUU_rSSUVVX8tzzUT-ce9f9VemeeABfB8a5UzbWWWzzbbs6tSrVVWxrV79f755OWtyUs1-0aN-OUKMpry-c17aOzWUIMKprUUIMa-1X918V770aTObyUxIKSIJpCUVNN5--sNOMVN56_pKCJpSJoonKMVNNOa---OVsOptaKMT55NNUrKxxrMMT11115N7s9kc9V9VttMT0UTNO_xU_nJpUs7NUSzzSKKUMUts1e1T-c5TOVNOaOaUy2V50_zSUVX119X7USxs7--OzSCUbbKSzsUxRnCBnCCBnKrCIKJnIKM_pUVN5NN-7T50a5OWV0aNNNOWWxKKMBnAMxpIKKIMaSxs1X6rV-D6V-sT-UUVX1e9Os7zy-5SMUTOtpKySqpCBoe9nCTURnBpyOt_oonBnKttU_zV7a-5-tWWWtxxrqpKTOttSMsOrSxhBpT6bxSxrtUUIKAA9nHpHnBgeecf1ee9XnMxzxrUzUQCUxSs6SompyMs-0rSTUxtTMzzrrrUV1-sSxs777UrrrUMUtzUpMJn9e9ee-VhKgnMzUrynKtWzrzzzUxJpSKJnACKKs0Wba0V--UTOxyUrxzxyUxs-xyUrxzrUzprzUrpzUrrUrSyMrUSrrSUUUSxUaSfMT6xrSzrUrUUby18SrSrxrUpMUTNSUUzSSKSMSrMKhSzTKSpMLpMCSCCJopCIJpJonBonIIHnABggnBnA9nBf9geeg9ecce9cf1e9mm9mecf1eeece9X7cXXfBn97V9eA9cX7XfMQB97cX9997VV7ceXXnKSxxpSKxSxzQMUtxxhUr9Xs1AJmhUzUUSzzKSz1hUU_Sz_xrrSzUMUKrSxprqnH19pSKSpBpQABhMrKSxrKSzMBpxrppIMygpSrBopryKpzKy0nMMzba0rrUMStUSpSrMryMrxzbyUUMUty5-Ortbs78V77X77--Xe79pHfBg997X7X7X77ce-X7-zTOa0VV75TUUzUrrxSrrUrzzwfACKrsObs6TSz_zxrzxrrrtVN5Sy-4W_BQCq0c--5XUc-X5rCBxMa7PVDNUK-nSJp971_ESHe-mocmeKzxIIOxttzsTT-Ota0ee-057TlBpMMMlsOV7Xe---Z41V6NZVgpBmXJgnKMpr6WaNT0c7--3XZyYK57-DXainASrrUs-cXc0D9q9BhrKpMy6e7VHVV-19qEB--1him-7XjEvIohy--0DA35ggnKEGzTOs90X7-DANdhT7-7Xt_vISba9c11AoEBnACBxrSxSa0Wbba7ZmcWXV0Nl-LpUX7--232P--Y4hn-1NmHcmmnUy5--yBtECSKpGaNP197-0YF0nN-QYKBvKofomhMUtzba-1WcBcV17r9ZnpzsX9-4YWUUKaNc-1DHqB03YaRQJjHc9K9Mp9XmrHhrJhromghUxoOVT5OzMxtV5VNT--7VBc--DVec-5DXQxV-9EWOSk-7cyKynBpBnABoopJ5OaTT5NOs-OcVH7zjtnSIAHcgnCBomn9gjzUxrxCBeo6yT5Uc5Wzxru-e-Wy0s0aPc-39Fz7gpKSBcCHgcWggnIpRObztbxHggpoehryP6tbaT-VN-17---ZFFrV-t3OTpa7--GJ2c--GJFN-5GL3xc-9GPigq-T84fLpBpAMHpSBfACoemeoefCACAJrzttaUM5TUa5TUIErr0WWxOtWaOzyNNNN77977KACKBnAC90aTN1VN-7c-eGPvhSrq0ceV-1GRaD-9ZO8jSpKF--7--ZPZE--O6VKyV1O6qJppObVXc-aHHGgonUbVV-1ZZurAs1XHQCRnMzMppopDOVNWbttbYBec3mgce---HWfN-LHY8SS5X--09ahV-tAuEpN--TI4hxDUT7c-PI_QzrqXX-3ZxNzHzV--ZyYEV0dEl0pKsV---J06s--J71N--J8is--JDws-5JFcRs--JKrN0iJQsgnonCCL6xba6yOWXe9e--_6BUV2dHDArSUrz1XXX9-E_ADrICMKoN176X--0I2AV58JkgmgfIIICCTOaT0wNN--PKIxzUTcc-3_KPjIqV-1_MDbCV0yKYtSHpIpCSKHZlzLNV-10V55--5Kcizc-9KeMwq--0MPIV-dMpxrc--_Ul6V0OMzAnSN7-O_Wd6ppSppKMwNP-7X97V7-F_Zn6CzUrMOX9Xc7--_a82V-0OcIV-8OxHk--LW2N-DLaXxTX--4fBH-2_fwzLPV-0QFUV3OQn6xKMSxy0X-ee7-F_tjEBemhT6zzP7N-1_yrzR71uMvlwxIBemeefSu6zp9zTOzq-5TUxxWc9A97-9N1TU5V-0Va0V-8W-ps--NFDs--NFLN0aNK0UKptxxxrUNXXX9997V-DOBAzTX-2aJfQBy--0a2hV-0a3SV08aU0zT9V-taUEntc-5OtESV-eP2MzUSk6e9c-XPIwxMSN7VV-ddFArc-7aafrpUq-e7-TPquRnTTNc-mPxXxrrKlcVV9-3amCbSkV--5oXa-Gat6zSSzrUR7X7ec7-HQgPwxu7-9R1zzP-1tkzEmgj6zzXc-2b3DrLP--Ol2rq-78lqzrHegrzzzKEUTN6seVNcgeX-kbAFvBghCIKIIBpBognIJpMKSSxUSrSSxUrpK--0ogPV0OpIUnBOs-SbSprpUSI9jxa6aPeWzz5XeeV-PSyVwpEsV-CbXszKCCGWbsV7-0bZmzN--bbTv--0uTlV08uUInDTV-OulbqV1tuqQnCMF-5Ue-2bh7jJP--0vJ6V-0vjlV-OwCMqV-OwVCw-0twdKojFTNV3dwdbnUSMzs-PCA91V-HUDFBraV-5UKsSc-DUR5ByP--6rqa-2bsubMc--tyOApa7-yUdojJmnIqOtWV9--bxunV-0zWdVAOzeUnxBmfrrICrUUUUrpHzWVcWX1175X-Xc--UzJs-9VELhk--e0DGpX-2c8yvE5V0P1YAmzTX-Fc9eEBhHgn5Uta5N-OcBY6pSrIAUJgTOa-09We7-GcENbMSppzye9777c-9VzggtV-94IUs-9WO6SNV-95_ss-DWdaSDP-mcR2MBoggxrpUzzKSEzxUqUyX9ecWaNVe79V79c--WkEs-9WoBzNV2u6I8rMJpGaOV7Xc-9WxeRyV197X5onrsN9-1cXrMEc-uXElzMKM575NHe-09AHrpNP--1AZrV-eBC4rX--7ndq-4coH6ETP70HYKWxSMOxxc9XWbkd9V-9Edzk-HZ0xhyPc09Z7pBmpSxpy5O9V79--82Ca--86Zu-2dAgzUcV-PI-Bq--eIQcrX-1dKuADN-H_k1UrXc-9_qWSsV8uMPGmzMTNUUUSEMSxxze7e71c-XHee7-Ha0vzScV--aLfs01aO1woxIC6a-0tuc-DaUtSq7-6dh56pM0X7-7dp2zMSR-X--abWegmjUOWc-EdszfAKSzV5UNe9V1PUQ2nABUzc7-5by5U---cAvN--cHps-5cLGhV-DcONzR7--98tL-4e9eMrR7V-HciUxpX7-udBoSJfErlbuVX-29aVfmxIpGa7P--DdjHRtu-6eW7EKSN11--9XeD-jeZFrBfCpCSxpSrzJ5TUcOzaOXfBh9X9X--1c-1eGYR-5efWrCracV-1fXrV-ufyWxkV-ufAyBoeezUrzV-V-ugwopa7--fJNN-LfPwSpkVV-9iyzs--fqes-ifsnRxzxyXecV0ejZ8nMbe7-9ftmzP-FujbporSIzSpMUISCxzx-VUzrrTc6zy7Xh9ecVWuXX-7mcVHe1--ejc_xc-3ezMzK51-4ezOMKGV7-1g-Dw-Rf-nQAA9gnpMtzzzbttXXX7e-1f-oITV-agD2xzola9X-Ff2bjASrxSr-97VV-4f47MJyP7-9gJYUP--9lWRs-qg_aBfJxrzs117--gavs-PghqUKGX---fCFz-09nVOpqV--9njxk--gyON-Dh4IxL7-2fGYEENV-1ob8V-upTOpa7--hVws-XhbrSpLOcXV1eqiCpKR0yX7--9qk6k-PhjSS9c6y-7fR-rUrR7Xc-ehsTBgrqUscc-PiJ1hASaV-bfaA6AI9MMMHhzpUbzOyOz1X97-1ge7V-1tzIV1uu69nCrtwP-e-9ffCUprUkVXc-5fgVYCM5-V-9vpss-5jH-E--HjT-wxu--XjYHx9xSVN-19yPqognyT--pfugbS9rSrSMSrzpaUpSUMSkVV-VVVPHgccX1XX1c-9jiyz5V0Pz_GnSN1-4g0rMKR-7-HkBVxlu7--kCK70LkGUSpMSrOzuXWse7X9-4g57jrTXV-DkQfwxX--B98T--g9En-1v1y0pKorN7-7--gDm6V-v2vCxNV--l12N-Pl34RxUcX-0gHXnD-7gHhbKrq7X7-TlB1xMxcVcJ1lBSSrSSppzUzxpzT6xSSrKrMJopBmcXcxrMRUSpMKBgc7N1cX97971AMHYSSrMHcce7eVVN77XVX7-Oc1dMSHooe-V-CMKSSKq1VUpkUSrUSCMMMUSzSprKKHexxrSSxSxxyUSzzSUUSpSpSxKKBhUpttx57OaP0WyOaP-9-0V7X5CHcV77X1VVXXV-97cV----0c-7VXcY97X7ece1XABcc9--23yxV3v42inCMKrbVBe-0xXV-A4Ugk-aliIwpIMs----BS4D-2gSBER5V1v6fGpCCptV-X--BTnq-7gVUzKKT-VV--m1DN-qm1FRfpppNVN7N-DmEsxT9-QgZUjCSKEKR6xGWe57N-ZmVV0A8RQxR7--A8TUk-imT5xSTTTd9cV4Q8thxpponSpTN7-X77V--mZcN1immTUMSKCKMR16VUSprGbxkXBcVcX77V7V-TmmkSpUVcV-un7nSrMSxkX797V1ABckpMba99-0go5MN-5gpKjMMX7V-QCSMnV-vCllpk7-Pn_7wppc--6gu_jIIqN7-3gwCEUP1-HgwGzMMMSxlu7X7X1V1vETrmxSrTVX1--C-0D-Eh0RESoxSRN-X09--AFrbk--oIos-aoMTSIKFN5--5h58vIRNNV-2GitV-vH2_psV--oc-s0aoc_xKMSJe9JUUqN5P17VV-XoimSI5OycV-fHxjnk--CB5q-0hHcbN-VhHl6KpASSSKIMxsVWyP77VXV-7-HpEKxUX7-mpKbRoeKSo-NN--CNDi-7hOczxzTcXc--pboN-DpiAwpV-5hTmMpR5X-0QMjrnMN7-1hUQAT7-HqBoxK---DqWZRr--IhdNrKrSzOV5QBeX3e-9hfVIBpUzX17--CfpD-phgbjBmccjMJrzke76zrrMMSrUrpSyc17VVX7X7X7-HqmXSSX---qmvs--qqEN0HqtqSrxKESrNN7Xc1XV-2R4lV-fTzpnk-1hwNUTV4Prr2xMJnIC9EIrJomnqUKKCJeIIMOxp9MKzKSr6XX7--V57OV70WXV-5-N6a--V5fUUEofHchpKMOba7X5UTP7-0hzqEP-2i1rMSX-2vVmOnHpplxk-WcV-9sS7x5-2fXLhnESoxu7T17-2iCDURP-3fYKfrK9fISr6s-57---sq1c-DsqBSTX--DFu5-1iHcjR7Bmt9wxogcf95IIESpAAJegxUJfxI9onJeCrrrUrSUSSrSpMKSpUSrMKrMMMSMSppSKCyUUz5N71-0aP5OzyOzUSrUN6aOX10ty-7-0s-7cV-7X1X1-VX9XX7e9cecge16yX-X7X7BmXXcV-2iHoMUcV4Q_4_nBrpyOzSq5cXX7c-HtGWSpX7--tUGs-5u0pzc-Tu6aUSS-17-Tu7VxACOa---u7iN-5uEYS--5uEcz--auFlSKqNO99-2i_aUGuV0QdwKony7-BicpMJrMSc1-5V0feEApSWcc-5uYrSV-1uf6R--igpMV9vfYUppKHexxMzxxrUROttX1e7cW97HX17--2fYfV-Qf_oq-0Afj_rL7V0vfwMpMaX5V3Ag7opBpKpT575-7--fgPSna-4iqejAoOV-avQIxxrycce-0isQUF-1is_AGc-LvkFzM5X--fjqbr1--Dz_T-6j-zjASq75-1j1jzlc-9wL5ww--2lNpV-flSUxX-3j5MbM5X-Hj6HUJm_prMSk--7X--vlsIpk7-HwadwjOV-1wepR-2jAT6Ia-1fnTTxHnEy0X--Anark-9wvRwtV5QospnoxMSOzr0aNn9X797V-Qp0rq--QpG4o-0QpR0mxlX-4jL0rSq-c0XxPBBfBnEMKKyNNTOVN1e-6jMXUJlz11-EEgqwecX-s5OaSs-AjV-jKppq-17c-9y-hSkV3fsD9ppKIKDNNOVV17-Ty3bxJp0V--9yERww-0Ax-_npV--Ax2Ik-9zfaxkV-vzr2xk7-A-1BRy--3-zvV-w0lpqTc-I-kixr-c-A0MPENV3R55SnBpKkWa0zGVX-nkNrfACJeonMrxSrrrSrT55-IC9e-0ztVNX7X99--35IBV-R5UCqV-35iqV-w6ltpWc-60xjx--A1PugyV-B95ws-E1cpgpV--ki4IV1wAqXpUTUa1ee-4kl7ACOa7-02LhN-02YwN-I2aoBjy7-f2fQUKrScVc--I2gExS-V-b2tvSppo-7X-0kyWUF-1kyZMq7-036Ns-M36nwhr---RFUnqV-BFvKk-03Kgs-A3kyxNV-wI34p57-644wwN-64BcS--04PSN064PVSKSTUF14HcWc--BL4Uk-64ckSV-04jBN7r4jQxHppKKpMJxHe7V1-ecnIIKABoopUSognBnIAUtbotyOyNOsNTUSJnKq0a6ztbttVOzOVOX-5c0a5OV1XX7Ze9jpI977AI97--lSWj-FgMRSmf9zbrpzMKc0bxrKESxrlVXHVUbbpSkV7XccomXX9ZcP7-E4xwwja--lXvjV-wQInrsc0Q5ozSpKEryObbuVgce1c-Q64OwhMWX-0lmZbk-0lpy6P--GtFD-2lu5jKVV0RUb6mp6V-0m9erN-5mBT2BjNOV0wZLzpUk5XVPBZWrmmmmnIJrMSrSSSSKSMUxKpKrSESpbxSSrMOts7-7Ve7cnA9119-Oa0Wba7V---V7---ece-cmKJQBmp9ggzzrSKMMy-OyTTOX7X997X06mLdEBgnABnIIIICCAJnJpCCJnKJ0a5OtWa55Oa0WbaTObcV0WWV--I8QGBxs7-U8RIgpzs7c-29W_w-3mdg6Ctc-0mguE5-ZmlOjKBmmonUUUUbw-OzwN-VHmc1eV-wgZprsc-rANbgnKrUtX17c4UAhBhBenHYBocVgprSCHZnrrUMSxHnIKLOa-0VObaUzxWza0bsNOy1X7Xe9n9cV-1n8XjDN-IBkvzxXc-2BlYi-RnBjzIEMMKppKKF51-1-0V-9--nBzMVXBp7smn9f9XehBnCAIBomnABmceXeZegccZmonAAIBnKSMSrMVc57OyOaVUzWzOzxxzzztxzxxrrSrtbVOWtVN-OVP7V-0aT--RstSq--gtJnqP-3nilrCq7-AniufCAM0bbcV4UEFHBomghIHoonBnCKpKICSKpMxIBnJOtV-OsTOtsN0aUX7VN---6zOa--7fJe1-7nuYnACrtVc0EFVzgfBofKUUaOV0a73zH2ShKICCCCICCIBgnBpBpCICKpKCKRN55N-5N5OV0a0aN5-NNNOWV-NP7-zHTMwnJhpJ5-OVP-5oiBECSkV-0hBVAn9M6V-IIDDgzZc-2IgAR-1pHnrR--2KH6w-4pLvUIOaV-0KUwN92LmEgfBfBgqUSCrKKKBeVUX5-X4JmoocX-57NNmconHdBpJce99pKppppKIKopMrtxxxprKrMUStaN7-6yUza-7X9775ObzzStV--51--N-PcXX7-ILxOwoOV-UMCUghM5N--AMQdSNV0STQGrScX-8ptlrCCCta1-0CTnYnqP-0SVFsrM-70Eq1sfHnA9XcYCppSKKSErrSSCzpUUzKTOWaN0V0WX7VXWa-2KBme0WX19c-4qODnHrVN-2OnhB-Cqb12CCKJ-UcWV-IqjjQSrKAMzTNV7VXc-Nqu9fBnACIHnSLNOWWaOV--hjnFrX--r-vI-1xkFZpprOu97V-zr6zAApICSUpzKUxlyUrwUxKV56a6a7VVXY9_HmmeXVX1X9V4CmRVp9mrMaTUxT-e7c-OrAdfJnKrrSrrsN0X979X9-0rFTQP--MKdX--M_8P-DreVnCCSrzVVNec-AVFgBTV-T02FyV0L0slMs1c-6VTDEc-6V_Ajc-AV_JBtV-D5hsk-b_7iwnSROX1--OPBa-1tQurDN-Ya80xERTNXV" :
		ap.pc === aAF + 6 ? fz =
		"DwCd1sP0j--RaO__ddedddifv2EEznnnyfEeRwyzBBBB2Bn00-17-2fEMK9dCrtzUrrMMqN-X-789V----Sf-T--yfzIrzohrxy6kX6rSk16k7---11J7Z-35CISoOxsUKESpEP6qOV6pJp9mec17cmhpxUSogfBnMMGWxptyUUzc5UrtttzpoTOV6lVVZme-gcfBc5cUrztbV73cWztaEO-1I5dLOfvkygzEyaOdzjzsl2knvg2EW2zEznvzzyzyfyyzzvjuMyzdzjivvvyyinyaTVyydzufvevjgwBoG-znzdiEdbg2vkyjEyiazuK_4OGaJaPjzYnzzjBwnvyfiigEnuP_vjuiaOMdezeififiiEfgzfusnEeO_ivviEuvjzyzivivivg3EjuyjiezjjisnvvEffvznviyviYEYyzjygnBz1_Fl-zivjEzyuwnB2z0434-4G304-44-CGJFKJEK42Bo-38G-340403LK2kl44G_GFn-G402l2x2433432vuvfvY4-l-0-FkF3G-J43G3FJ3-G5J2---20L-Y-8CqLKOzvEjYn3GF5N0A3mrIprrIryT1Wace1XV0F2MKYo-H05ahSVV1R1RHOKefiznn0-z4KUy5MEe17X7Xa17X7X7X7X7e7X7-17Xe1XeX1VXT0aN7X7X9X7V19X7V17-Xec7X-7X77X7VfBctaT-17917-X--7V0V-9Xe19X1cX991hJpKJpKMSKMSKUIMUrMprSrMSrKMSKrKKrMSrSKrMprSrMpKMSMMpMSKrKKCKMUzrxrSUMUKIABceV17-XcX7X7917X9X7X7e--0aN-7V17XcX77eceVX7X17919X1EzyTN5T-c-7X77X7V197XcVXN-7V-17-X18VXD---X7a11--7a17-99177Vce91X7XX1cVXe9XV-N-7a11177VVX12V0V-VX9-N0VVVX1-1171777s0V5-N7V7Va0bVN0VUV-VN-2Vs--a-NTN0WbV50WsN5-N5-N5-N5-OrxzST-VXcc-VN-1N5-V51-15OxUSxUrxSxSJpMs0V-8V5Oa1D18V91191X11-VVX19nCSSKSSSrMrKQKpK7cXXX7Xcs-1X1VXVV7777719-csN7714yUSpUSSryN77c7X0V-16a0VenB5-D0WV9X-a0WWVN-gpC7X-gm10tV0yN7NNN1VV-N1mm-N--s-7WWyN--fLocccAAC9555NUsSpy-Wa555-c--hIJpCCBmg5NN-NNN8_y--N0VD-epnIKCCLVXYWV-919prKSC9cV77-V0Vc11111TTUVVgkf1991D-e1-ceXX7X-WWs9cXXgcUxy10Va1cXei1monICI7g9-XgegmVgem7X6xyUVc8bbta6bbtrzMST--15NAA9egemfABXnBm9n9XmfBpMI9mggfA1eceeegn9eeXe9AIBme7g7Vecg7dV9mgecVfWzzyUzxSvCMtbtbzxtUryOzzttbtaOaTOzs97ea0VenBmN5N-XN9X9XiOa5ObtaNNNNOttVgggnB7e17OVN0WbtT-tWV5MV0ztbaUzMy2aOyStI7fCMtxrzzbKrUyUa5Oa0bUsOa1me7f9cD-1997-VTOWaUV-WWrzzxprWzUrqnBnCKrSSzySSza19Es9aOs-c-WsOaN50V-NObttrSSxzzbtyUbzzUUzUtxrUUTUyULpf7hKyTSBpMzpompqpSxUrSSrKprUSMMUTMxSrKSKrrrppMKMSSprSy50byOSzaKgpxza6zUtbz_zUmgf9mA1egmgf9pMsOzbtzMyTOzzMbttWy2WrKKIKSKSUtVOsUCLnKUtza5SzUxSSrSSzUSrMrUzMttSxxMSSHemgnKzUSzrzxzyUrtbbpSrzKtKrSAMKSs-T---X55UbsN9eem7iObtztyU_rQMKrUSMzzSrxUzzbyUxxyUs18s1UaUprzxMKJhSrMxpps-V-798VUtaOVOVD-XhHDN-6V9XXm7ce7VVtV-951-Ors18Wa-7-177--1-UVcOyUbzMTUbURopIKCIA7f1hMShJonIMTUMUSUKKUMrSrRchMJpSryOxxhIMprSJpxrs---Wa4xxrSprKmpKKxUSrUT5OV7N2a--7-ztVYVXcVV2aOzrzzxrSrbrIMxJogAMSMSUUSrrKJgpQJnAJX97hMMU7fHeX-en99pSrxwopCICBmcXXccXehSrprUxzbztTpKJonKCBfHeXnCLpBmX9XpSzrpKpABeepS9nKnBofKwnBopRpBopCJpKpKKMKIKxzSzzzxKMSSSSKxKSIKtTUWyTObUrrxzrzrbrSzrMSrpzUxySrxxzrrrzzbtztzyMxrUKQKKSSppMKpSKpxprrSrUUSxxrMprrttVD5SrV-a-NN71-cX7791-77VVVVX71-TT6WWbWWWVN-NN8V711-V777X11XVcccceXVXXNNN8V-15-9-VV791dV1-VVX7X1-sNOtrtxtxtySyUVNStUrUrrbUMrppzzrbbry6pKKrMMMrMMCSUUKepKxs0aTTMUUU_rMT-OVN-6T-7-a-777V-5-XMxSSxxrxMU_pzhUxSmpra6QKUbSyOSSnMxSyUKSxCMKUtprySzrxxKttbzbSrbTN0xzUKBpyTSrrMtttzprrSSrMSpprKCILpJhBhIBonKMKLnKICJnBgmmpBm9mnAABgggmeommnAAAJghKKKhKgmpAAJpIJopCIMIMIJpCKJpKUa-s550V2VN50VNT0s5OWs6VT5NNTTTTTMyUSSxQJpJpAA7fBprxpttWbbSSQKSSSMMzSrt_rUUbUbaMyTOVzTOs7777N70V70_pzKKzbbSJpBp11hIKqnKUtIAJmnJnJmnIBnBnJnKKLpBnJhI7e9778V1N5-NT0VOtbaNN9gmmmkfICCACBgonCBpQICBnI1fJo9pSQJohBchKhCKJopSMKSSMrSMCIBomooenABfAIABgnIIMtsOaObbxI9mmon9gnKUwpMJpJpJpBmpSCShMKCMKCBpCK10V7-77X1-cVV-7hKKCMKrppMKSKpIAKtxzxSKpxnHghUySrvCICBfCJpMbnAIBhBgompIIMC9mgfCCKBoonIIICBfIIICBopIIIKKCKKSKMUKpKxpSSxxMUMKKSKxpUpKrSKSKSKnICCJnCA1999-1A9e-7-cXXX17V70a-f7VV-1--7XXm997cXX9AAC9mgoekccXg97XXABmkf9f9fA9emXn9emgmgonKtxgnBfI9nBemef1X9-9gn9meeXA9eemegoefBmgnBnC9gnC9eeggnCJhBpBnKJnKKKKxpIKrRhBhAKBhKSKKKIMKKKF7Z2MkT__44OOaO__O_LLTbYvkyffBkEcw2knyaaiBkyEC-x-nl3-3VQ3QMsc-O-txaOjzzk4K_-7VS-vCSzc7V0J2qEPevjFF3F--6mTV-FGRlV--92TV0kLotbx-a7AuPnIUUoxxzbzrKrpKKMSSSlWxrUsWtzKlzTUyOzbw516xSUzWbsX6wNgc55Xc7mcXmgmeJmofomXXIBcYHcVPXZcVTUceX1d9me17ee9-A0Y6qioC-asBoenIBjSUIBjUSJe9ceV7177eV7fC9gpzzHeeICyUxA9efIrzM0zKaP6kOxIMtxzbxBgef9gfMSxyU6ttaUttzGzryOa-OV1XCJc9VcN7---40ekqQ--NDEDyV--Red-6VumnMUacX--0pcZ3P2fIBnrozKocX7X7poxognBU6zbzojHxISryUWX-U0XV--V9YHX7--6M-k--Do0VDFSy8__bfuePPaEykFkk03C2-3VwCbAMV--0t6o-92oUS0V4FUCSaOQzBn4---ywe-Y13Y5KOjuRyaEBG2F--GW_V0FZtli---3co7-38GgR-93kCEP-1kaQpeNn--L4BWBn5T-BFdZS_ePOvjjjjwk3-FJGF0sL9epCyN9-mkhAhaefdPOOaOd_eO_dPLyiiveeeyEnnEiEwBk2nEnBnEEEnnwwznnF3333GGKJJG3G4KKGJ-94g9CkV--ipW-VWVbABxrMKz5OzJxsNNNVXmXe9c--B49F--PnOV-FqcSV7sQLqmeeppUUSSxtaTU6yT97997eeMC2a-LKOaOaOi_vdPiuzjd_dvijyu_KFJGF33303FC2-oBBB4KLOOaaOiaeduaeeffdiuzzzyyydKKJLfivjjjYBwyuyynzyEnznvszkxFzwzjvEBG0G2zjgyuyYvybvzjyieKbfYBkwzivYvyvyEiviyvfuuuPfePPaadvvvjjeOLP_MdOKKK_UeaPMefvjjYzYknkkzznFzyEjzjfyvvEzjeQfjYvzznzyiyEsywzwzYvEgkG43K4GJJKGJJK3-zjsEzjjvzwyyvvC3J2G3FJ2yjFG04FK4F4K-OKGJGJG0GK43EB4GG2EEzyvvn2yduyvjyinzx33G033Eiw-o-KF2k-GGJeKO_-0PL_JBFGKOF_KOHK4GFxOHKGGFwp08J-yEYnlKKFJBwFJK9eOFHLTdJ-kkn0KKdFPPe_3-B3HeOaJ_2-EeVC-3JKLdi_FHK20dPJFk0O_JBl3KT_3K5LLfjdJeu_Fo3_JiePJF30-l3FGJFoGF-X6dJBfEOtsV0FxOWbo-D6uCS6X1v2zp5_4fu_4ivEdiuPdKJF45aiivivyyiviiijsn-znBkBF235J-GG_-nBl-w44aKKG-KX2_nCErSSSkOWa11XeXLG1g8_OK_OOO_aPuKOdajsydQjznzydLKK_5KaiuyzyvzzzyzjvjidLK3KKGKKKKKaQfefjizjzyvdefiiznyzzyEwznBzwzkn2Eifzjufwyyzjwww--GPO_--zVBnvgEekk3K3GG3JGGFFG2B-333-0--03G3HK4ePeefeQiaOK--3-0-JFKiydeJHKJ2C40GG_ddKFnB2-JF0cWyMmmyTN-ZGfute2---ZAWV0G8Ihi3--8AO7--I0sk-7aWNk-RIFpuEF018vKgpKEM6tWV7XV--L5Mk-NgeYlV6GUzf_eczf24_-k-1C0lB-I5ZZqOynkqK-5YJBIArlX-1Gfu8_yC-6YOlnKIOV---5qJB-DCgdwja-C61_LTvoG-kYgE2KIJnAAMUxzUrOxzTOWaZcV9176qXeX7cVDlqEh_PPeffijjnEBC203FFGJ-mDm3BfEMtyP89-C6VITdTn---2mET-26bSqk--EMts2wUQzuiijiibfV-EYnn3G4LJJGF1szi7nJnr550e--78qw-1FShy-27J7aR-eFczBxKoT7-V-oWi1tLgwk-9FyXENV7H7Of_bisywyoGJG-GZSgYBepxxpyN5X97-gZ3Btfw30yZX6E9mY9eememXeefSzxzT6xzUrMommceKIABhBeMUSxyOWbbbxzHpATTTV5OzxzSy15Ua5O93eme9cXWWbbyVcmVAmK5MiyiajY2Eil3G445J--Hp-s--aMYk-0CdpV2HW8xuvoG-28GGLmemxr6tsV-oczDQis3F11JY8BgnBopr6ztzzNOWX7e7omX-0mZRx_UkRdHRBnKMKpMJppJxponBop6bbzxpxKlbWa0WWWX-UzUUrMzlxrWaWXVd9n9WVVc91e99X7eeVjHcccOe1V--dDLF0OOWLmpy1-6AISazG-5_hMYrq3e-2mvLGeyn04-Ca5w69nUrSq17--QBDVUivzzlJKJJ-qNYawozzyNn97c23mKCO_OLdiffgwnBBBl-J-5OPQhV0wnGIOeeyin0230F5uPAsSSUrHprMSI9BenCHoeXAIrrUUUzTUzyN56rzbV0bxbtcOyOttztcmefBgfBn9ef9X7VXX7X7X7V9IG_jaaeivzB-pFn2KJ09Pe2Rhbzzxxu7cemc-CCRoydz-p--5k5q-ICZKiPvjk34--5npT0dDEw5Oeuaufdeu_PeijB-BBFkoFG2EfswFk3-JLJ-9Ul6xk-7nzgraaOeQfVBB-n-1XVgnghCEpKSIIIMKxML5-0Wc0c5V71-7-C0ccQ-B92pWnABnIBgmxUa-UbtbrzzrtbbueXBee5Pec-C21Ktk6e6I4rJpIBrMM0c-0zzbae91c7Qh2tpO_ddeeTbeeiiduuffeeefydbefjiedeeaijY-nnBwnznEBnnEwk-nveefdbYw3B-2koFFnyjueuTw2FyvfiB-32G0-oGK3-OdveeJFFFo3BoLK0JF-40OOaOa_8KKFB3OKefddFF0--02F-00G2--5cWxzMSV1V0JNHMaB-uYI9RnKMGWWaNe-HJRYn_aayu_jjjeBC-FJFFEjiwC44F2uEcgpJxIIy5-NVV-07cwk-PGjhlV3oZcraOPzkC-5eHK_nABpKKrK55-575TT-e0fHO2qaaabeuauQeiffeQffF-33-kk-BB222n4J3K--9LCls-CAWRtk-1QXrVIK7Wd___4aLywyizYzYEyEBw0JOJOJJ-edEvRpK5Os1V1CKLfOdOyszywkGG4-5etPbKtae-jKWNneePfiuiifiijifiw2yfeii-zefeeeeefYBBn--0033F3F03-G-3F03-4-0GGGKJ-ufB4MHjSzSomcXfMpzS6xKKKKMSsV-10a7V-75Ouec17-6Lbx5JE-PfeifA9eme9AJzrzxztyN57-SVW5uU-0qkprRxMSKSpKSrtV7X7X17--V-58t6-LgVLbBpIKrWzSqV0V7Ve--O0SB8LoLpxJnBgmpICBomogn9oghBnIBpUbWxpMOzzVUsUbaTOa55ObxonKESyUSzrzRUtWztsTUzrMtcVV-V-eX-0Zegee977XX-cemcY9ecV8q__U_OdujEvnBmK30--hDurV-5vfz37hzjz9gemecf9genrI9ggn97gegegoenBgopCJonEJUzpCKKIKonKSKMKKKSMSpUKrbzV0V5NN-77VV-7X-WWVV-N-0aNOWWbsN-0yUUUxzrzSMKrSICpJnIIErL5NOaUSxpSUMSSkOWWaV1-1-55--Vc7X5UxrpUSUxty51-cVXX97VcXZecV9r1ep_LLasznvgyw343F-AZ4Kk6pnU1tLuaOG5K_a_OLLPKeOddYzwwwzEnzEnwzE2E2C-JF3-4id5YIMV7-Cs_ftkIvpQOmnA9nBgf9YBoooofICBeeCBoqUUUxtza6aNUWba6aOaOWba5T5THcV7NLKvdveejzG-33F-5q05bAzy9VCvXK8_eeiyvujin304_-3-0FZT-95mmcgfAACBn9ggeAA9mmnCUtzrprpUSAAIBggecmmggghM6tzNOtttyTTTUbbbxzKa5N0bbbbbbaNTTTTTTUy551ccfAA99XXcWnw5hG_OLKOLKaO_LKOK_POOKdaPOaPOaaUzBnEknwknzE2En2nzEnzeKazEyzzjnwzzznyszgzzzwziyzjvvzjEnueOOdawzEnnwzEEnwwzEEnknEnB0JLJJ__OJ0K_JLK4K4_G8K4445K_48LK_OK4G44K4OKGF1TETamnMTOVc" :
		ap.pc === aAF + 7 ? fz =
		"9mDS-FP-F--0TedPPOXo0HCGSpxrMptUSrUztztbbsUtaTTOzzzzStzSzSrSrSrppT-0btaOaNNUttVOa---56y6aOSrUaN5OzztztaOtTObtaNNUzaOSrSvHogmgfKpKSrCJgnIICMKrSryUWs--17XD--OaUzaOzyObzzztzrrUxUKprrzyUzzzzzzrSrrbzUSzyOaOsOzzzztbzzrAMSKzrUzzUSrUrrMKKSzzxrrxrxrrSrSrUSpMJnCKUV6aSxxUSxrSSMzzzWzz_zzzzzzxrUzxUzzrSzpxpxUSUxrxxSrrMSrSKKMKMSKKxrSKxzxpJmegnKzWzzoeepBpABgohBnBpMSKyOsT5T---OWWt_onKzzS9ehSrUzzzzrzzKKAILmfHnBpUztWsT0WaOaUzzzUrUrSzpxzzrSMSrzzzSKKKKpyTUaOzxzxrxxrxrUzzxzzzzzzzSrxrUrSrSzMSrSSrSrUprMKzUUUrbrbrbrrSMKxKKKpIKKKMKKKIBpKBnJnBhBgnCAIBnBnBnBgonIJoonIJnBnKBen17AKICIKKJgpKKCSSKKCKJpBpKIKBnKKKCACBpKMIKponBgfBnCHoonBnAKCKKCI9nBenBnBgmepCBn9cecegX-9eenHmognBmegefBnBenBnBenBgmonAKICCKKCKKKIKKJnCJnBmfBnBmpBnICIBpIBmpBmnBnABn8aObbaOa0bVOV1n9fCBonIHmonCMpQ9hCAJnJgnCBnBmpBpBgfA9nBmX9eeeXeXcXX9eee77gpKrSrzSrSrJnKKrrrrKJnCBnCBhCIBgemggeggef9eemmeecceAKKrKICJproomgmgeee9X9eXfKMSMAKMzrMyOtxrKCBe7VcfBprrBAIHnKhSKIBp9emgfBnCBpSMSUSxrrzzrKKLmnBmmnABpIKIBmgmnKSpSKUSrPkf9en9nAIKpIBgmXEV9gpB7Ve9VX9XbrUV1cc9V7Ws11chBeaN7tV7AIC7XN1N1777c2V-a5USy117aNN-ceef97Oa-Wzy1N-17WbyMMKSCKrs10WV-Ws978V-5-D5-s-7VcgmfMopCSppIA7XV--1-2bs717V15--a52aN-X1-cVN-X-V-ts-0V0VOV1OaOa1-2WV-sOV--7OV-V--VX-7--7-0yN7--7-X1OWa--1-0WVT--9N7OV--1-NN---V-17V-15Us--V--15NN7----VX1N7---X71--17eX7X7XX1VcX9XXcX9999A77eVeX9A17X9cX7X7X9cX7V7VV---717cV1717X717X-X7X71177X-X71N19--97X-X7-X7c-91X-X-7X7g7XVeX7Ws-177-17-5Oa5NOsOa5OaOV1XmX7eVcOV-95--5-sUWVNT5N--0WWtztaTT6WaOV7-0aOaOzza0aN0a--7VOV7s-s--6V-X---17X1Vc118V5OV7eX7XcXemnCCBfBnBoprSp9gn9cV17ee-9eee7eV4kDJ_aeiwn-FJ-u28mgpMSzsN-XeV5Fop6aeecBBk-F1t5Zdn9xxrs-9-O9QZyeevz-G3G-YcmK6CIIrUrrSrrrqOa9-X9X7X9cV1_beTuOPOPfznwwC3-4-Jh78rBeejprrSrNN--7-T5ITPw30U8E3BgonBzrtWzzaNVeeV8t9XtaOdOyzBwnEBKK-AmPDvCxrr-7X7ByJT4OdKaTizEydLQi_G48_OUdOvEvyuv-zyevvnzyBFzjvyBnzzznE0KKJJJK43JJG3JF0GKK-2BiSRpxxpWX7Xc" :
		ap.pc === aAF + 8 ? fz =
		"DgBy1vR-AV60YBnopk-O_9DCIs4rUUrSSMUrSrSSSMKzypKSSMRpKMSrUKMSpKSSrUrSKIKSueXgnCKBgme9XenIKKMBpSKpKMMxpLppKKpnBoopKMMMMKpMKKKKrSzzza55ObzzUUSxppppCCSSpSSrRopSrrSSSppMMSSrKSzUtpxrxxphSMUMUSrrUzzaOtbaOtbbbaOzWWaN5Os6yN-ee117eme97cX--1117XmmccVaN1-Xy-XD-NT-6sDOa0y-cWtzrrKrrSpptWSxs1W_rMUMMUTUUzrrrrSrSxKSrKKzKSrMSrxxprUUzUyTOa-N-1-X-7--1-VV1D-EUUaOtSs-SyMzy-Xe1XXe999XcefCIKKUUn7X7eXee8aOV11UUUa-X7X0Ss1N1mVcf9ecekgk1AJmnABgn99mn9hIJhKKMB7797ee17y17V79Ve79nFX8s19nAIKI1n9pMKKT5Jp-hFgV1goV1nIF-hB-1kOsN56rSpppMtVX-77c7a5N-D550V-ObbaTTN-OVa----N--7s50y0VTNN-9maOzV17cVeepABnBpKKCBnBoopIKMMS9pKKKKKKIBWV-D-XemgpKBe9gm9eOzbyOa5OWV15NN7-N--V5-OV55-50aOaOa----99e77X9e770V1OVX-ccefABn997Xc77VccgceXegfBnH7cegcVX9ecD-VV-7-XV7Xcs5OaUT155-51XD--UtyUy--zWzzUzrbzyMT5OtztyOaOzKpxxIKKKKpIKKSMIKSKKSzztzbyUxtaUaNN5OyKs-6V0WV0_y-SppSICMKMTTTOtQBpSCMSsSrMSzyTMSprSptSUbzzygfKxUaObrMJpTO_pmpUxraTTOtttVUtaSSptzIAK99eXegfKgpCLmpMrUSpz7fKBoohUttrSrUrrSrSAKKUUra4pSzbaNTObaUyUxopBpSrzbaOyN10baSrrpzKpSSUtSzpUs-75N7cc91cXoX7V7Ws1-5TUbaOaOaSySzzzrzzzUtaN0V971A9eenBeee7Xe9cgcfAA9gggnKJgpgeee9eA9mfBgf9geVVX9fB7X6baOTTNNOtaOty52tzVNN9m7Xcce9715N5ObKt_y-8rMbzs90My6_s4raOUxrrpUMrz_rCMUry-eXUzrpySrxyObrztrzUMUttpztrVMrzrMsURhUxpsOpCUbrzqmenMtzmpzb_mfKzpooXX1pBpxSSKpSMSMKKCMKQKnCBmmeXcc71171-V--XpIIKKnIAAIBnCMMCKprzWV7sObKKrKUMsNN5UyMzzrBpztttWVaTObW_xpI99ghKKMxztaUUbzzzMy6vBgnACUtz_yTMrUzbnIMUtttV-UrUSrSSprMSSMyOWVX-18a0a-0yTOa5NOzrrRoonBpSKBpCKCCKSnCCBhBmme7efMSUSzUUaOyT5OaN-0aUxpoopMSzTN99WbV2VVXX9eYV0WaN-V-OtvKKUSzMrs1797VtpzV6rrSSrzBhKCKMSrT-Wa-V0V-X77ca--UzzzyHpMT-yT-7-sOaObbyTTOzUtsUIMSpSRnMzMT0WsTOs97hIBeX-X7tVVtzVc8WWaUonMzbKUsTUbSxrnMUKBoonJnJgpBpBoptaNOttaT5NUxprCUT1-VObbzrUzzyTUzzzy2zSxxxzry-1-Wrbtbs9zbzV9UV19-fa-taTOpUWxMsN716aUKyUps0xzaNN0VOWbaUzSrzaMrzVcX155OVOV0ztby-199f1XOWa-N-TOWa5UaNUaOa5OaUtzxtaN7egYy-VTOaUrnMwnKtzxpzaICTmoomenCKS9e9hSKxzbrSrSKBgpMKrWs-_yTNMbMyTOzrJnHnKxrKpSMKMSpprKSSMU9fBopKKpcfKSMAIKSrUMMpSSrUzVbrMUUTMympKrSrUUzMBnKSKrSxpJpMrUSSpSKS97cXXXXcXXXX9997ccX7c7X7V11171N-V-VVX1-71117-7-X19997V1mopKrSxpMMKpPeVX7hJfKCCKMMMMMKKpprUa6BpepKAK8V1meommnKMPgpAACReonACBopKSIKMMCKKKKKRpKCKJoprUtbbSSUs4MtaT-78sUxzzwpxxpxrKKSSSUSpUSSSSSKKKSKKMKSKJpKKKIKKKJoopBn9mccgpKICAMIKKKrKCJnIIBopMMzxxrrSxxxrSpSMSpKABofBnBn97710VA112V1171mmgn9k7V51-7XecXpAHhAIBooo-X75NN-XeXnBnKIBnCCKBnB9gpKprryU_ppSzyOWVObrzyTShPfIBnCK9hKCCJpKzrzxprSrSSUrxxqeeehUxzUrrABnIBhMzsOxrxSmgpxnMHnHhMnMICHmpMnHhSyMBhLopC9fIMhBnBnCJommmfAA1nBo97c9nMMrFhBgnBehBgfABfIKSx9X17N1emXABf9gmnJepJmhRmopKCMSUSxrMSrrUSxrrxrSrSrMSSMKKppCKKRognBggogeefI9mpxrr9nBggoog7--N-e999fAa-XfJV17s7XA97XcgecWV7eeAJpKKJoopCKBpKKKrTTMMKSxRpKrSzrzxxrStSrUUUSSpLpCMSKMSzMSSRef7Xce7e9X997-cX9-c-777-11197VXX17X7cgc0V0VNN1VOV-1-WVV-77VcV71-V-71--AJVV7XhMCBmfBnC797g-ACI7-Oa--11-Vc-1XVX9979X17V1-VV7cec9oppnBn1gXo71oome-1nHmgfBpKIBgmmcenIBnBnBnAAAIA9mmonI9egoXmggopCMKKKLpQCIBoopKopJcgnIBp9fACJmge7X77VVa-11-V7-VVVX-V72V7-7-VVV11-V7----V---N78V5NN-V6s9XOy1cepgpQIA9f9e7X777VX7UTUbta1eekXX7X0VcX91c--g7-11emXceeXX9ee99ce9g7cX999XXXX99X7XV-5-V7ceeegeX7X977X77-X7XVV-5-1-7--ecD-9hBX99onAMSKIMJpKSpKrMKJhIMKopST-NOaOrRopIBfIMSSMzxzUpzUUaUaUbttyUaOhBpIJppMKprSxrUrrKMKprRnBn9ggnBms9gnICIK99efBomceXgnIBcXceeeXeefBp9emceececeegmeXXeekee9X9Xf9ecee7X7-5N-a-N--NOWVN--V-1-V1--5---711171--550aN5--0V1-V77-55---------N-7XOta6aN1ggnBmnI7VD-VNN--NN1ghKBpKIKKJpKIIKCKKKCKIKKRnBopKKrKSSIJpIIJoopCIJpKUKSMLpSKKIIJpKKMSnKrUSSppKpMSMKpSKrKp9eepUrpSSKpSprrrzzzSrrzzzrUrzxrUzUzUyTSxnICKCACCCBnABnBgnBmnABnCBnBgmnBgmmmgggggf9meemeXggf9mgemmmenAAABmmmmXhA7cgnIIAIBnBmhBnIBnKKSMSpgnCKRnKKMKKpKSprQMQCIKKCKMKCJpKKpMBohRmnABfB-1V9sQR73q09kCIBed989cCHZpMUMMSMSUOxbpy0bbxSraOaOc7TVP29C9Vc0VBecV--7NVV-N8H9w--c9BgrX-BVhQICKrSsV-1VkNB1Dn9choeAEHp9A9eAKKp9fCI9Xme118BgecX7IKKAKrJce70cXXXcXMSppCzSpJxSMKSKSSrk-0xpxxzba-17Oxta56paOsNNTOyTOa--USkWzMUUzs--VWbrxrrVV-d9e7VHsFGFpA9BnCzzII9X97pxS9XHVZoogqUtzqUyUxx50WsTOXmgcOuVOXc0T4CohpochopxzyN7X7NXV-cNWurX-AW_mQ9horyWa--D6JABqN-51WZ4aN79-1XOJ2Oc-58_IBN-i8hrCBfItza-V2Nd5onEIMLOs-X-0se3gprOX1V5NezHrS9eACprpxy0aN7cVV07h4Zpy1V3shEFnKMUrzcVN7I91V-chgRwP--Xvb6V37jO2mfSxrUba79cV3cjXTpJpJOyTOX7gc--1B70i-6Y102KttXe-4Y2-QBrWV-qBklBoptztf9-7-aBzewzzyPee--YGg2-DspvZoeeeXmeA9mgmogn9fSApra0tzWzy6tzzbzztza-e-1YR0fR--PDnihKtVX-SYi0nMS9VecnMSUzxc7UNN5eV4HE3LxHx9HfA9nBxpaX5TUbzUpKDNUKBh9e5BfCMSFT6zUbaOd9V0aP7OZecWV-dYlL2AAIBmcozMopohpzU---NOaOa6X97-LEHZBzbeV07yFszq9V-cz9FrX-4YxwbHc6s-9FJpByV0d0kXnUT7V--FTac-5FvBCV-XGFeBnEUa1-686HMnJmxCIATUpUzV5--57eV2t6dDnABplyUaN1c--GxMc-9HB5gtV38862nCBopa0taT7V0d8AyppN7-1THOURmocpAKpBc9zSMU0aN551-USL---WZbifBogn9ghCUrLTTTOyOWs7e7V08F5moo5-48NGSmzJmVCKK6ls-0V-1_meQFN19MIGBrKKKKopKzWaUbsX7X77-17c-1P80D09ablQKBxrSSMSxzUSpSrSrSprMMUSVVVVV0baXX997XX7ccXVX17X7c-DQ9vBxX-PblGIMMSrMMMkVVOte97eX7-DUDUCL1-0bwmfD-3c-SvC55-NcAPfppppSrSr1117X171-Ju42Zn9gmd9ceceAMSrSppKrSIBfrKCMUUKk-T9mcV5Ua5Ubz6tX--0aOa1X902cKbrCKKJpHpIJnIKBnCCBfBfEryOttVOu5OaTN5OX0a-7--1---cRyM--P9esnVneG9xnBmn9grKKJnIJpKSKMKJporUonHe2IBmmnCBpCKrSrKpppxrSzUzxxrV5-NNNOV-Ws-XV55UrSrxyOc775-7egoe50Wta7X777N--7VOxrSVWtbzUUSqV6bWaN19cVX99gecemd9ec1xdFn2SrJeCpKrMSrKpSKSKIKKIICCI9XKMKCMSII9comomnAABpCIJpBmrTObs0taT5OsNOzaUSKMUtV-0aXX0WxOzaOV0zr1750zrGWX--XVVV-77X7V0VV-117XXXcHX1V39Nu-nKrUUyP7X9XVFeTW0xrI997KBcXBgnCAJpta50aUpIIBnKSzba-0VVUzbqNX1c--dA_c19eGowgggnCSSGWWWbaUsUUUccee705ejHzrzUUyNA9eXeV19fFvonOaTX-Rf_UfKCBeISJxrT-0WbbVNXe--AcyX--Aenu-lfzAABeconJnUP5UrSpKIpxLV0zML5-V7--1X7-2gTJfAOV-AQx3k--sU3c1TvB1BnKCIKIKCpMSGzr-0VN--751-19-0iur2k0FkOrQBgceZgnKKMMKKSJmXxpSSprMs6rJnrUra5NX7-X10X0aOVN-1cV70c16258gfA9fJmnIMKxzyOaOs-NNNX-7lElAMryXe7-042oc-A4AKhN-7gKbcmpIrX6zrxrMzUVeVX-gocVXV-3MmVV-3NpHV4wNq3mmmrUUrMUTP77-X7--lazYV3RQ6imfrrSprs-1X9-7liMQEOxse70E6TIBmZxlxxKOa77VV0I6vXBefKMIM5Ota50cV-RW4Rw-0RW5cnK5--Om5EABpMKBhSxxs17-0V5X--H5H1-9mCaYBoxbaP70emCc2MSIBepJfIIBmVP7mnCIAACCKIlV50bxqUV6zxxpCKprzzaUKa577cWVNUrOtV17V17V7Xcc--HEP1-0mI5IF-0mLgQF-amT1YIBonIIICBgonGaOaNOWVNOWba-02AS3hKIKIJN0V-5--AByfCsV-BqE5k-6CtMgN-0D4wcDzDLQCCCBpIIAAUJmmfBnAAJonCBoomgggfABpAKCJeecme9IBnKKKrMJrSrzUSKpMKpzrtttbxpMbbqOaUwUxObzrrK6aTTTOa5550Vc155ObWaOs9--0WWbtzyNce9cc-Ne7Vcc90zbcV0ztte90byTOXeXeeeVNXeeV0RupTnClV-hngH2CCCCJpKKKppUUtzbta5-V777-X177XV1wx_ZnIKKaN-V-PnvrYCJooerSo-OzuXVTOV71MEjtggeeeggnIAACJoTUzrMUbbttyN-AEykhD--x0GZrsc-2FY2g-4o9gQCSX-CjFseBonHonBf9en9eegf9XfCIBfBpCKMMHhCCKpCKICIpOtzSMMKKIJxUbbs7VN1---VV5ObbxrKCESzUpISy0bbbse1cX5-XVcXeV6y6aTNNNfBmehCCBee19cVV-0a6bzttyUyTUtzwUtttaNNOWV-1oImQL--AGQ0CNV-x5IkxkV0IIIYXm2V7XXeyUta5UV-46fyV0C78BrT7V0S83qnAyP2IoidnCSprrSxrSzrUMSxpMxzUUSSMMMMSzSSrrSprMSpMSSxrSxxxprrrrrUrxrSUUbtaUUL----WX-5N97X9emVP97719ecX-0aNcgmme6a9eX7199e77gecVX7cXXXXXcXX77X7X9egeeXX9-2oitACsV0hAoJnEbsc1EIX0Bgeen9gf9rSaOzzWyUrzqNX9-0CE-XnxVV-4FqeV0SGIunObe-1p622T7-0JRDc-0JfGc-vK0CgggrUzaT19V-CLDDs-6Ku0CV-ALMbENV-COvBk-bLoRjSrR-cX-8pp72IJoOWV--4T3HV-STYBq--hTbPoN-6pzxnBpT0X-5q4TfCGaNV-xXFHpN7-6N_hh--2NfsB-NqBUQHeCCtzSSSzT1cX11-1CZ-NpprX17-7qMXnCMyN7c-IOb-BnaN-0Owzc2fPAlBgggf9fAHoonAABgnCKCbbaT5OWaOaTOtbaTTOaN-0PiN7-MPkJBf6tV-4fLuV-SgO9lV-phLT7tV-4gqNV-4hl5V3xiFwnA9nAROzqOaOXV-SifanVGKwWFOaOV6zzzzUUy6tztbKta56s-WrzzsN-5T4rKpppSKSKKKM-6Sk2RmmeXgeggnTUbxyTUbyOe-OMnm0a50aOV-NNOyNOxtyN-fRZugenzttuc6MRg2gooef9eemeX7XeeeA9Y9BehCIUzrMUzzbrxzttzztzUzrzqUzzbzzzbbzrzzV-9fA9eeX0XeBeeY9e7-DrA8vSzrOtaXeec-0S7u7-rS8wBhCUbttcec-bSGCgnCzaN9-BrL6QBezxyTPXV4hpYLmgfCtzxzSttX9ce-" :
		ap.pc === aAF + 9 && (fz =
			"EcCx-VQCO1iiqOLOKeeedae_ddadadadOfiveOeLeeeedadaPiuuiePPeeyeeeeOeaPadaeeydPeOedaOPLOeeeOadLOKLKKLJG4G3G4G4G3F-3GJG4G4KKG443G3G3G3G4K3K3K3GKKK3FJ40F33GK0K0K3G3F3F2nBnBnBnB-Bn-04G--BzzwEByvn-wG-BnnB2BkG44K-4KPKQyde_K-G3GKFwGPKO_O_K3J4KG4KKG4KKKJG4KJKK30304LOJG3GKKKKKQvjzuzziviueeaKaKPKKKKKKKKK3K_eOKO_OedaKaLaOevedaOGOeOeeaOaOaOeOjzvjyaPeOKKKOK43K_KKaveJGJ0-JG3G3GF3G3G43KaKF3G4aOedaOFKLK4_eee_dJK33KeaOLOaOjveeKLO_OaOaeKLPeivjeaOeOaJKGKJ4PdadafiyjedLPeueK3F-G30F3G3-3LOaOjeKLPe_O_OeaPfieieeyeaOaPOKOeedeOdada_daOdaKd_O_aOKPOKLKaKdK4LK3LTdaOdKaOK_KLPOaaO_LPKGKKK_KOaLO_aOOaaOdaPOdaO_OaKOdaPOdaPedeOJF--00LaPdeaeOfeyeiuudaueaaPdbeOeuefefuivfifujifieviivifeeid_G-04OF0-03KaPvievjizfeeLJ0-JG-KdOTvfiyviyujffviujeiufeiefivivfivvfeevivveiuueieiefeeiyejffuiuuiviuvfiifiieePeeaieieveuePdaPKJKefefefiuzzvzivviyfvnvjvzEzzjzwzzzBnzwnnk2Bwkn2zzknB-n2BnEBzyzzBzzEwnzznzzzjfzBzwzznziz2zwnBnBBkB--B2EBznEzBwnBnBzzBknEnEByywzzzzzEzz2wnzkzznEBwwEnEnEzznEzzzzzzzzEzwwEEizizizivjvjfznnzyyyvivzzwnyviuizyeyeKbifiuizzvifieeuyviuiuefie_iviiyjzvn3F3Bnw-BnBn2BnBnwnwnwnBkBBk22nEn-EeeieKdeiudaOaOPedaeePeee_KKLPOefzkzEEjzwk2B-k-kBB2yiiuieueeaeeaOOaOvzzzBzvjivjuiuyevieifiedaOeueuivivieuvfyvzvyvvuuvwzzyyvzzvjivvivvjyvznBnn2wzznwoLK-z2BknzEivePPLOOvjBwnEffeuyzefzuuujnkkGG-yzEEzBnEBnnBwnEBnznzzvzzznzvzzEBnzn-k-k-k-2-wB2B-k2-2nBB2kBBwnBw-nB-2Bk22Bw-BkknnBBBBBnBE-znznkkEnE2--kEBknBBkBBk2E-3-2Bk-k2B22BB2k-k-k2BBn-w2-32k-C3F--k-FG0G-22-2-FB--k-2-w-G32En--nB-2kKLePLdFJG3-F0033G043-l3-G3K3JK-32B3G4K4F--B--B--FGLJGJ3F03JLaeKFG--0---BFK--203FGGFG33F2nBFG3FGJ4GJ4K02GKF03-GKKG3K0JFK3G03F--G--l43--Bk--kG-FF3F03G-403G----l0----G--Bn33GJG340JG3-G4KaLKPKG-4-3F3F03-B-------G3FJ00--3KGF--0---03G0032T4mfgmegmeX7fBnJnKIEzzzzbrpzzaObtVOaNX9c9c0JN9cQfjzGG0F4NoWynBpJnKzzzV---Xc1RfMlOOvfvzwEw3GKKF-0gAIV-2OK2-3aoazBjs-pIUdyOaKaKaOfzzvgBnBF---1gInV-4OaA-BexerKESrs-V9V3q6e6dauVn3-0fPHBpMs-c-SiqWQwJ1mtRSUSKKKKKKJOzzxrROc11--TX-X7V7eeV4Meo2avi2kCK--EcNy-OUJfiLKdTzsBk-0kCPrF0fVVRjiveveiueOuveeeeaNn-n22-BG--030303K3F3B6-nnBnBrSr0a---EsTXQudeviviedazk-2-G-030K-4l1tMCkOc-57MIs-E3IhS5P-CYA-DLew--koIyA9emmfACMSrUtbzzzTTObrUtV7ge7X7eeV8QnZxddaebjwnB-30F3xzBZnMKCMzra71-7cV3wA4p_Qzzo4Ffy5yanHpIKSKMKSMSSrKKMofJppMKSKrSpSMKSzrzzrUtaOzsTN1oc5OaUzrHnCTOtaP755N5-T-NUTNN-N-5-5-N-P7X97gn9gmeee9n9meeX97cX7eVeX9cXV"
			), (new oy).p0(fz)
}

function a9J() {
	this.pb = null, this.cq = function() {
		var aAG = [120, 105, 92],
			cos = [12, 12, 60],
			aAH = [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
			aAI = [140, 130, 120],
			aAJ = [12, 12, 76],
			aAK = [240, 120, 1024, 30, 19, 30, 70, 8, 20, 3, 9],
			aAL = [130, 117, 106],
			aAM = [12, 12, 68],
			aAN = [270, 210, 1024, 28, 19, 33, 50, 8, 26, 3, 9];
		this.pb = new Array(ap.a77 + 1), this.pb[0] = {
			name: "White Arena",
			g6: 230,
			gC: 230,
			jr: 1e3,
			jo: 2e3,
			a9L: 173
		}, this.pb[1] = {
			name: "Black Arena",
			g6: 800,
			gC: 800,
			jr: 100,
			jo: 50,
			a9L: 43
		}, this.pb[2] = {
			name: "Island",
			g6: 512,
			gC: 512,
			jr: 128,
			jo: 32,
			a9L: 0
		}, this.pb[3] = {
			name: "Mountains",
			g6: 960,
			gC: 960,
			jr: 60,
			jo: 8,
			a9L: 0
		}, this.pb[4] = {
			name: "Desert",
			g6: 900,
			gC: 900,
			jr: 100,
			jo: 5,
			a9L: 0
		}, this.pb[5] = {
			name: "Swamp",
			g6: 1e3,
			gC: 1e3,
			jr: 100,
			jo: 40,
			a9L: 0
		}, this.pb[6] = {
			name: "Snow",
			g6: 1e3,
			gC: 1e3,
			jr: 100,
			jo: 20,
			a9L: 0
		}, this.pb[7] = {
			name: "Cliffs",
			g6: 1024,
			gC: 1024,
			jr: 128,
			jo: 32,
			a9L: 0
		}, this.pb[8] = {
			name: "Pond",
			g6: 820,
			gC: 820,
			jr: 200,
			jo: 100,
			a9L: 0
		}, this.pb[9] = {
			name: "Halo",
			g6: 1024,
			gC: 1024,
			jr: 128,
			jo: 32,
			a9L: 0
		}, this.pb[10] = {
			name: "Europe",
			pa: aAI,
			pd: aAJ,
			a9d: aAK
		}, this.pb[11] = {
			name: "World",
			pa: aAL,
			pd: aAM,
			a9d: aAN
		}, this.pb[12] = {
			name: "Caucasia",
			pa: aAL,
			pd: aAM,
			a9d: aAN
		}, this.pb[13] = {
			name: "Africa",
			pa: aAG,
			pd: cos,
			a9d: aAH
		}, this.pb[14] = {
			name: "Middle East",
			pa: aAG,
			pd: cos,
			a9d: aAH
		}, this.pb[15] = {
			name: "Scandinavia",
			pa: aAI,
			pd: aAJ,
			a9d: aAK
		}, this.pb[16] = {
			name: "North America",
			pa: aAI,
			pd: aAJ,
			a9d: aAK
		}, this.pb[17] = {
			name: "South America",
			pa: aAG,
			pd: cos,
			a9d: aAH
		}, this.pb[18] = {
			name: "Asia",
			pa: aAL,
			pd: aAM,
			a9d: aAN
		}, this.pb[19] = {
			name: "Australia",
			pa: aAG,
			pd: cos,
			a9d: aAH
		}, this.pb[20] = {}
	}
}

function uU() {
	(qL = void 0 === qL ? document.createElement("canvas") : qL).width = ap.eB, qL.height = ap.eC, uY = qL.getContext("2d", {
		alpha: !0
	}), uZ = uY.getImageData(0, 0, ap.eB, ap.eC), a1W = uZ.data, aY.pG.pH(a1W)
}

function bw() {
	var de, g6, gC, max, aAO, jo, aAQ, aAR, aAS, aAT, aAU, aAV, aAW, aAX, aAP = 1e4;

	function aAf(aAe, jr, ec) {
		var eG;
		for (aAQ[0] = aAe, eG = 1; eG < ec; eG++) aAQ[eG] = aAQ[eG - 1] + jr, jr = aAQ[eG] >= aAP ? (aAQ[eG] = aAP - 1, -jr) : aAQ[eG] < 0 ? (aAQ[eG] = 0, -jr) : (jr += 16384 <= aL.random() ? jo : -jo) < -aAO ? -aAO : aAO < jr ? aAO : jr
	}

	function aAh(fL, fM, aAi, ec) {
		(aAi ? function(fL, fM, ec) {
			var eG;
			for (eG = 0; eG < ec; eG++) de[fM * g6 + fL + eG] = aAQ[eG]
		} : function(fL, fM, ec) {
			var eG;
			for (eG = 0; eG < ec; eG++) de[fM * g6 + fL + eG * g6] = aAQ[eG]
		})(fL, fM, ec)
	}

	function aAl(value, ec) {
		var eG, a8o, fa, gh = value - aAQ[ec - 1];
		if (0 != gh) {
			for (a8o = 1 + eU(Math.abs(gh), ec - 1), a8o = gh < 0 ? -a8o : a8o, aAQ[ec - 1] = value, fa = (fa = ec - 1 - eU(Math.abs(gh), Math.abs(a8o))) < 1 ? 1 : ec - 2 < fa ? ec - 2 : fa, eG = ec - 2; fa <= eG; eG--) aAQ[eG] += gh - (ec - 1 -
				eG) * a8o;
			(gh < 0 ? function(ec) {
				var eG;
				for (eG = ec - 2; 1 <= eG; eG--) aAQ[eG] < 0 && (aAQ[eG] = -aAQ[eG] - 1)
			} : function(ec) {
				var eG;
				for (eG = ec - 2; 1 <= eG; eG--) aAQ[eG] >= aAP && (aAQ[eG] = 2 * aAP - aAQ[eG] - 1)
			})(ec)
		}
	}

	function aAo(aAp, aAq, ec) {
		for (var eG = 0; eG < ec; eG++) aAp[eG] = aAq[eG]
	}

	function aAr(dp) {
		for (var eG = 0; eG < dp.length - 1; eG++) dp[eG] = dp[eG + 1] - dp[eG];
		dp[dp.length - 1] = dp[dp.length - 3]
	}

	function aAs(uv, gap, gg) {
		aAR.push(uv), aAS.push(gap), aAT.push(gg)
	}
	this.d2 = function(aAY) {
		! function(aAY) {
			var eG;
			for (g6 = aAY[0], gC = aAY[1], aAO = aAY[2], jo = aAY[3], de = new Int16Array(g6 * gC), max = gC < g6 ? g6 : gC, aAQ = new Int16Array(max), aAR = [], aAS = [], aAT = [], aAU = new Array(g6), aAV = new Array(gC), eG = g6 - 1; 0 <=
				eG; eG--) aAU[eG] = !1;
			for (eG = gC - 1; 0 <= eG; eG--) aAV[eG] = !1;
			aAW = new Int16Array(g6), aAX = new Int16Array(gC)
		}(aAY),
		function(ec) {
			var aAe = aL.random() % aAP,
				jr = aL.random() % (2 * aAO + 1) - aAO;
			aAf(aAe, jr, ec)
		}(max), aAo(aAX, aAQ, gC), aAh(0, 0, !0, g6);
		var fL, fM, aAY = de[0],
			ec = max,
			jr = aL.random() % (2 * aAO + 1) - aAO;
		for (aAf(aAY, jr, ec), aAo(aAW, aAQ, g6), aAh(0, 0, !1, gC), aAr(aAW), aAr(aAX), aAf(de[g6 - 1], aAW[g6 - 1], gC), aAh(g6 - 1, 0, !1, gC), aAf(de[g6 * (gC - 1)], aAX[gC - 1], g6), aAl(de[g6 * gC - 1], g6), aAh(0, gC - 1, !0, g6), aAU[g6 -
				1] = aAU[0] = !0, aAV[gC - 1] = aAV[0] = !0, aAs(0, g6, !0), aAs(0, gC, !1), ! function() {
				var aAu, uv;
				for (;;) {
					if (aAu = function() {
							var eG, aAu = aAR.length - 1;
							for (eG = aAu - 1; 0 <= eG; eG--) aAS[eG] > aAS[aAu] && (aAu = eG);
							return aAu
						}(), aAS[aAu] < 5) return;
					uv = aAR[aAu] + eU(aAS[aAu], 2), (aAT[aAu] ? function(fL) {
						var ec, aAx, eG, a2c = 0,
							aAy = 0;
						for (; aAy < gC - 1;) {
							for (eG = a2c + 1; eG < gC; eG++)
								if (aAV[eG]) {
									aAy = eG;
									break
								} ec = aAy - a2c + 1, aAf(de[fL + g6 * a2c], 0 === a2c ? aAW[fL] : aAQ[aAx - 1] - aAQ[aAx - 2], ec), aAl(de[aAy * g6 + fL], ec), aAh(fL, a2c, !1, ec), aAx = ec, a2c = aAy
						}
						aAU[fL] = !0
					} : function(fM) {
						var ec, aAx, eG, a2c = 0,
							aAy = 0;
						for (; aAy < g6 - 1;) {
							for (eG = a2c + 1; eG < g6; eG++)
								if (aAU[eG]) {
									aAy = eG;
									break
								} ec = aAy - a2c + 1, aAf(de[fM * g6 + a2c], 0 === a2c ? aAX[fM] : aAQ[aAx - 1] - aAQ[aAx - 2], ec), aAl(de[fM * g6 + aAy], ec), aAh(a2c, fM, !0, ec), aAx = ec, a2c = aAy
						}
						aAV[fM] = !0
					})(uv), aAs(uv, aAR[aAu] + aAS[aAu] - uv, aAT[aAu]), aAS[aAu] = uv - aAR[aAu] + 1
				}
			}(), fL = 0; fL < g6; fL++)
			if (!aAU[fL])
				for (fM = 0; fM < gC; fM++) aAV[fM] || ! function(fL, fM) {
					var value = de[fM * g6 + fL - 1] + de[(fM - 1) * g6 + fL],
						wl = 2;
					aAU[fL + 1] && (wl++, value += de[fM * g6 + fL + 1]);
					aAV[fM + 1] && (wl++, value += de[(fM + 1) * g6 + fL]);
					de[fM * g6 + fL] = eU(value, wl)
				}(fL, fM)
	}, this.a9f = function() {
		return de
	}, this.a9Q = function() {
		de = null
	}
}

function eU(hb, hk) {
	return Math.floor(hb / hk + 1 / (2 * hk))
}

function a5w(hb, hk) {
	return 0 <= hb ? eU(hb, hk) : -eU(-hb, hk)
}

function i1(de) {
	return de * de
}

function vz(hb, hk) {
	return hk < hb ? hb : hk
}

function yH(hb, hk) {
	return hb < hk ? hb : hk
}

function yh(hb, de, hk) {
	return de < hb ? hb : hk < de ? hk : de
}

function aB0(de, ec) {
	for (var iN = eU(de + 1, 2), eG = 0; eG < ec; eG++) iN = eU(iN + eU(de, iN), 2);
	return iN
}

function a7c(de, ec) {
	return de < 1 ? 0 : aB0(de, ec)
}

function aB1(jd, je, qS, xC, jf, jg, qT, a4y) {
	return !(jd + qS <= jf || je + xC <= jg || jf + qT <= jd || jg + a4y <= je)
}

function aB2(jd, je, qS, xC, jf, jg, qT, a4y) {
	return jd <= jf && je <= jg && jf + qT <= jd + qS && jg + a4y <= je + xC
}

function p7(de) {
	return Math.floor(!!de * (1 + Math.log2(de + .5)))
}

function bH() {
	this.fH = function(hb, hk) {
		return Math.floor((hb + .5) / hk)
	}, this.aB3 = function(hb, hk) {
		return Math.floor(hb * (hk + .5))
	}, this.sqrt = function(de) {
		return ~~Math.sqrt(de + .5)
	}, this.pow = function(dE) {
		return Math.floor(Math.pow(2, dE) + .5)
	}, this.lS = function(value, min, max) {
		return Math.min(Math.max(value, min), max)
	}, this.aB4 = function(dq, ds, du) {
		return Math.max(Math.min(dq, ds), du)
	}, this.aB5 = function(aB6, aB7, fL, fM) {
		fL -= aB6, aB6 = fM - aB7, fM = 0;
		return 0 == fL ? fM = 0 <= aB6 ? Math.PI : 0 : (fM = Math.atan(aB6 / fL), fM += 0 < fL ? .5 * Math.PI : 1.5 * Math.PI), fM
	}, this.log2 = function(de) {
		return Math.floor(!!de * (1 + Math.log2(de + .5)))
	}
}

function cV() {
	this.s8 = 0;
	var map = new Map;
	this.ob = function(g0, aB8 = 0, aAY = void 0) {
		this.o3(), this.s8 = g0;
		let p2 = map.get(g0);
		if (!p2 || 4 === g0 || 7 === g0 || 8 === g0) {
			if (0 === g0) return void map.clear();
			1 === g0 ? p2 = new aB9 : 2 === g0 ? p2 = new aBA : 3 === g0 ? p2 = new aBB : 4 === g0 ? p2 = aAY : 5 === g0 ? p2 = new aBC : 6 === g0 ? p2 = new aBD : 7 === g0 ? p2 = new aBE : 8 === g0 && (p2 = aAY), p2.aB8 = aB8, map.set(g0, p2)
		}
		p2.show(aAY)
	}, this.aBF = function() {
		this.da() && this.ob(map.get(this.s8).aB8)
	}, this.o3 = function() {
		this.da() && map.get(this.s8).o3()
	}, this.resize = function() {
		if (!this.da()) return !1;
		map.get(this.s8).resize()
	}, this.t7 = function(dE) {
		return !!this.da() && ("Enter" === dE.key ? map.get(this.s8).t7(1) : "Escape" === dE.key && map.get(this.s8).t7(2), !0)
	}, this.i8 = function() {
		var p2;
		this.da() && (p2 = map.get(this.s8)) && p2.i8 && p2.i8()
	}, this.da = function() {
		return 0 < this.s8
	}, this.s9 = function() {
		return map.get(this.s8)
	}
}

function aBC() {
	var aBG, aBH, aBI, nv;
	this.show = function() {
		aBG.show(), this.resize()
	}, this.o3 = function() {
		aBG.o3()
	}, this.resize = function() {
		aBG.resize(), aBH.resize()
	}, this.t7 = function(iN) {
		2 === iN && ar.ob(0)
	}, aBI = [new nN("Create New Account", function() {
		ar.ob(8, 5, new aBK("⏳ Connecting...", 8))
	}), new nN("Log In To Account", function() {
		ar.ob(6)
	})], nv = [new nN("❌ " + aV.nc[92], function() {
		ar.ob(1)
	}, aZ.l9)], aBG = new nu("Account Menu", nv), aBH = new nT(aBI, aBG.nz)
}

function aBE() {
	var aBG, aBL;
	this.show = function() {
		aBG.show(), this.resize()
	}, this.o3 = function() {
		aBG.o3()
	}, this.resize = function() {
		aBG.resize(), aBL.resize()
	}, this.t7 = function(iN) {
		1 !== iN && ar.ob(1)
	}, aBG = new nu("👤 " + aV.nc[125], [new nN("💾 " + aV.nc[97], function() {
		ar.ob(1)
	}, aZ.kv)]), aBL = new n7(aBG.nz, function() {
		let aBN, n9 = [];
		return (aBN = new mu).mx("Account Information"), aBN.my("Under Construction."), n9.push(aBN), n9.push(function() {
			let aBN = new mu,
				aBQ = (aBN.mx("Account Name"), new nk(b9.dG.data[105]));
			return aBQ.dE.readOnly = !0, aBN.n5(aBQ), aBN.n5(new ni([new nN("Copy", function() {
				aY.g1.th(aBQ.dE), aY.g1.ti(this)
			}).button])), aBN
		}()), n9.push(function() {
			let aBN = new mu,
				aBR = (aBN.mx("Password"), new nk(b9.dG.data[106]));
			return aBR.dE.readOnly = !0, aBR.dE.type = "password", aBN.n5(aBR), aBN.n5(new ni([new nN("Show", function() {
				"Show" === this.innerText ? (this.innerText = "Hide", aBR.dE.type = "text") : (this.innerText = "Show", aBR.dE.type = "password")
			}).button, new nN("Copy", function() {
				aY.g1.th(aBR.dE), aY.g1.ti(this)
			}).button])), aBN.n5(new ni([new nN("Request New Password", function() {
				ar.ob(8, 1, new aBK("⏳ Connecting...", 15))
			}).button])), aBN
		}()), (aBN = new mu).mx("1v1 Rating"), aBN.n0("Elo: " + aY.jl.u4(b9.dG.data[107].value, .1, 1) + "<br>Rank: " + (b9.dG.data[108].value + 1) + " / " + b9.dG.data[111].value + "<br>Played Games: " + b9.dG.data[112].value), n9.push(
			aBN), n9
	}())
}

function aBK(title, id) {
	var aBG, aBS;

	function aBW() {
		aBS.ng.innerHTML += "<br>New Connection..."
	}
	this.aBT = !0, this.show = function() {
		aBG.show(), this.resize(), 8 === id ? aN.iy.zP(0, 50 + id) ? aN.aBU.aBV(id) : aBW() : 15 === id ? aN.iy.zP(0, id) ? this.aBX() : aBW() : 16 === id && (aN.iy.zP(0, id) ? aN.aBY.aBZ() : aBW())
	}, this.aBX = function() {
		ab.d2(48), ab.ov(24, Math.floor(ai.pow(24) * Math.random())), ab.ov(24, Math.floor(ai.pow(24) * Math.random())), ae.cq(ab.mK), b9.nd.ne(110, ac.og.ql(ac.og.qj(8))), aN.aBY.aBa()
	}, this.aBb = function() {
		15 === id && (b9.nd.ne(106, b9.dG.data[110].value), b9.nd.ne(110, ""), ar.ob(7))
	}, this.o3 = function() {
		aBG.o3()
	}, this.resize = function() {
		aBG.resize(), aBS.resize()
	}, this.t7 = function(iN) {
		2 === iN && ar.aBF()
	}, this.aBc = function(n6) {
		var aBd = [];
		for (let eG = 0; eG < n6.length; eG++) b8.a46.cq(n6[0].aBe, n6[0].aBf, n6[0].aBg), aBd.push(b8.a46.aBh());
		b8.a46.a47(), aN.aBU.aBi(0, aBd)
	}, this.aBj = function() {
		ar.ob(7)
	}, this.sA = function(dE) {
		return 4387 === dE && 16 === id && 0 !== b9.dG.data[110].value.length && (console.log("tryFallBackPassword"), b9.nd.ne(106, b9.dG.data[110].value), b9.nd.ne(110, ""), aN.iy.zP(0, id), !0)
	}, aBG = new nu(title, [new nN("❌ " + aV.nc[92], function() {
		ar.aBF()
	}, aZ.l9)]), aBS = new nf(aBG.nz, "Find Server...")
}

function aBk(title) {
	var aBG, aBl, aBm;
	this.show = function() {
		aBG.show(), this.resize()
	}, this.o3 = function() {
		aBG.o3()
	}, this.resize = function() {
		aBG.resize(), aBl.resize()
	}, this.t7 = function(iN) {
		2 === iN && aBm[0].nQ()
	}, aBm = [new nN("❌ " + aV.nc[92], function() {
		ar.ob(0)
	}, aZ.l9)], aBG = new nu(title, aBm), aBl = new nl(aBG.nz, [
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

function aBD() {
	var aBG, aBL, n9;
	this.show = function() {
		aBG.show(), this.resize()
	}, this.o3 = function() {
		aBG.o3()
	}, this.resize = function() {
		aBG.resize(), aBL.resize()
	}, this.t7 = function(iN) {
		2 === iN && ar.ob(7)
	}, aBG = new nu("Log In", [new nN("❌ " + aV.nc[92], function() {
		ar.ob(5)
	}, aZ.l9), new nN("➡️ Log In", function() {
		b9.nd.ne(105, ad.og.op(aBL.nA[0].mv[0].dE.value, 5)), b9.nd.ne(110, ad.og.op(aBL.nA[1].mv[0].dE.value, 8)), b9.nd.ne(106, "k05hbHxa"), ar.ob(8, 6, new aBK("⏳ Connecting...", 16))
	}, aZ.kv)]), aBL = new n7(aBG.nz, ((n9 = []).push(function() {
		var aBN = new mu;
		return aBN.mx("Account Name"), aBN.n5(new nk({
			title: "AccountName",
			value: "",
			g0: -1
		})), aBN
	}()), n9.push(function() {
		let aBN = new mu,
			aBR = (aBN.mx("Password"), new nk({
				title: "Password",
				value: "",
				g0: -1
			}));
		return aBR.dE.type = "password", aBN.n5(aBR), aBN.n5(new ni([new nN("Show", function() {
			"Show" === this.innerText ? (this.innerText = "Hide", aBR.dE.type = "text") : (this.innerText = "Show", aBR.dE.type = "password")
		}).button])), aBN
	}()), n9))
}

function s4(title, n1, aBo = !1, aBm = [new nN("❌ " + aV.nc[92], function() {
	ar.aBF()
}, aZ.l9)]) {
	var aBG, aBS;
	this.show = function() {
		aBG.show(), this.resize()
	}, this.o3 = function() {
		aBG.o3()
	}, this.resize = function() {
		aBG.resize(), aBS.resize()
	}, this.t7 = function(iN) {
		2 === iN && aBm[0].nQ()
	}, aBG = new nu(title, aBm), aBS = new nf(aBG.nz, n1), aBo && aY.g1.textAlign(aBG.nz.style, 1)
}

function aBB() {
	var aBG, o8;

	function aBp() {
		var fz = aX.aBv(o8.oD());
		(0 < fz.length && fz === aX.mZ.aBs || aX.aBx.p0(fz)) && (ar.ob(0), aX.aBw())
	}
	this.show = function(aBq) {
		! function(aBq) {
			0 === rJ ? (aBq = aBq || o8.oD(), o8.oB(aBq)) : (aX.mZ.aBs.length && (fO || 1 !== rJ) || (aX.mZ.aBs = aX.aBt.qw()), o8.oB(aX.aBu(aX.mZ.aBs)))
		}(aBq), aBG.show(), this.resize()
	}, this.o3 = function() {
		aBG.o3()
	}, this.resize = function() {
		aBG.resize(), o8.resize()
	}, this.t7 = function(iN) {
		1 === iN ? aBp() : ar.aBF()
	}, aBG = new nu("▶️ " + aV.nc[82], [new nN("❌ " + aV.nc[92], function() {
		ar.aBF()
	}, aZ.l9), new nN("🔲 " + aV.nc[93], function() {
		o8.oE()
	}), new nN("📋 " + aV.nc[94], function() {
		o8.oF()
	}), new nN("🗑️ " + aV.nc[95], function() {
		o8.clear()
	}), new nN("▶️ " + aV.nc[96], function() {
		aBp()
	}, aZ.kz)]), o8 = new o7, aBG.nz.appendChild(o8.o9)
}

function aBA() {
	var aBG, aBL, n9, aBy, aBN;
	this.show = function() {
			aBG.show(), this.resize()
		}, this.o3 = function() {
			aBG.o3()
		}, this.resize = function() {
			aBG.resize(), aBL.resize()
		}, this.t7 = function(iN) {
			1 === iN ? aBy.dE.blur() : ar.ob(1)
		}, aBG = new nu("⚙️ " + aV.nc[81], [new nN("💾 " + aV.nc[97], function() {
			ar.ob(1)
		}, aZ.kv), new nN("🔄 " + aV.nc[98], function() {
			ar.ob(0), b9.nd.oe(), ar.ob(2)
		})]), n9 = [], (aBN = new mu).mx(aV.nc[99]), aBN.my(aV.nc[100]), n9.push(aBN), (aBN = new mu).mx(b9.dG.data[0].title), aBN.n2(new nq(b9.dG.data[0])), n9.push(aBN), (aBN = new mu).mx(b9.dG.data[10].title), aBN.n2(new nq(b9.dG.data[10])), n9
		.push(aBN), (aBN = new mu).mx(b9.dG.data[1].title), aBN.n2(new nq(b9.dG.data[1])), n9.push(aBN), (aBN = new mu).mx(b9.dG.data[9].title), aBN.n2(new nq(b9.dG.data[9])), n9.push(aBN), (aBN = new mu).mx(b9.dG.data[11].title), aBN.n2(new nq(b9.dG
			.data[11])), n9.push(aBN), (aBN = new mu).mx(b9.dG.data[2].title), aBN.n5(new na(b9.dG.data[2])), n9.push(aBN), (aBN = new mu).mx(b9.dG.data[6].title), aBN.n5(new na(b9.dG.data[6])), n9.push(aBN), (aBN = new mu).mx(b9.dG.data[7].title),
		aBN.n5(new na(b9.dG.data[7])), n9.push(aBN), (aBN = new mu).mx(b9.dG.data[8].title), aBN.n5(new na(b9.dG.data[8])), n9.push(aBN), (aBN = new mu).mx(b9.dG.data[5].title), aBy = new nk(b9.dG.data[5]), aBN.n5(aBy), n9.push(aBN), aBL = new n7(aBG
			.nz, n9)
}

function aB9() {
	var aBG, aBH, aBI, nv, aBz = !1;
	this.show = function() {
		aBG.show(), this.resize(), this.i8()
	}, this.o3 = function() {
		aBG.o3()
	}, this.resize = function() {
		aBG.resize(), aBH.resize()
	}, this.t7 = function(iN) {
		2 === iN && ar.ob(0)
	}, this.i8 = function() {
		!aBz || j.vX(eX) || (ar.ob(0), ar.ob(1))
	}, aBI = [new nN("👤 " + aV.nc[125], function() {
		0 === b9.dG.data[105].value.length ? ar.ob(5) : ar.ob(8, 1, new aBK("⏳ Connecting...", 16))
	}), new nN("⚙️ " + aV.nc[81], function() {
		ar.ob(2)
	}), new nN("▶️ " + aV.nc[82], function() {
		ar.ob(3, 1, "")
	}), new nN("🔗 " + aV.nc[83], function() {
		ar.ob(4, 1, new s4("🔗 " + aV.nc[83], aY.g1.te(["Android App", "iOS App", "Discord", "Changelog", "Clans", "Clan Results", "Players", "Tutorial", "Terms", "Privacy"], [ah.a2P, ah.s5, ah.a2R, ah.aC5, ah.aC6, ah.aC7, ah.aC8, ah.aC9,
			ah.aCA, ah.aCB
		]), !1, [new nN("❌ " + aV.nc[92], function() {
			ar.ob(1)
		}, aZ.l9)]))
	}), new nN("ℹ️ " + aV.nc[84], function() {
		ar.ob(4, 1, new s4("ℹ️ " + aV.nc[84], d7 + "<br><a href='" + ah.aC5 + "' target='_blank'>" + ah.aC5 + "</a>" +
			"<br><br><b>" + "FX Client v" + fx_version + " " + fx_update + "<br><a href='https://discord.gg/dyxcwdNKwK' target='_blank'>FX Client Discord server</a>" +
			"<br><a href='https://github.com/fxclient/FXclient' target='_blank'>Github repository</a></b>", !0, [new nN("❌ " + aV.nc[92], function() {
				ar.ob(1)
			}, aZ.l9)]))
	}), new nN("🗑️ " + aV.nc[85], function() {
		ar.ob(4, 1, new s4("🗑️ " + aV.nc[85],
			"Do you want to delete all locally stored data, like usernames, account data and setting data? Your account will be deleted automatically after 3 months of inactivity. To prevent the storage of new data, it is recommended to close the game after deletion.",
			!1, [new nN("❌ " + aV.nc[92], function() {
				ar.ob(1)
			}), new nN("🗑️ Delete", function() {
				b7.cv.rr(), ar.ob(1)
			})]))
	}), new nN(aV.nc[86], function() {
		b7.cv.rs(), ar.ob(4, 1, new s4("User Privacy", "If the privacy window doesn't open, please deactivate all your adblockers.<br>Additionally, check out our Privacy Policy: <a href='" + ah.aCB + "' target='_blank'>" + ah.aCB +
			"</a>", !1, [new nN("❌ " + aV.nc[92], function() {
				ar.ob(1)
			}, aZ.l9)]))
	})], nv = [new nN("❌ " + aV.nc[87], function() {
		ar.ob(0)
	}, aZ.l9)], 8 === x.dZ() && aBI.unshift(new nN("📈 " + aV.nc[88], function() {
		ar.ob(0), 2 <= b1.aC4 && (b2.tA(), b3.d1 = !0)
	})), 8 === x.dZ() && !fO && j.vX(eX) && (aBz = !0, aBI.unshift(new nN("🏳️ " + aV.nc[89], function() {
		aW.fe.lv(), ar.ob(0), j.fP && j.tA()
	}))), 1 === b7.id && 5 <= b7.df && aBI.push(new nN(aV.nc[90], function() {
		b7.cv.rt()
	})), aBG = new nu("📙 " + aV.nc[91], nv), aBH = new nT(aBI, aBG.nz)
}

function bG() {
	"function" != typeof Math.log2 && (Math.log2 = function(fL) {
		return Math.log(fL) / Math.log(2)
	}), "function" != typeof Math.log10 && (Math.log10 = function(fL) {
		return Math.log(fL) / Math.log(10)
	}), "function" != typeof Math.sign && (Math.sign = function(fL) {
		return 0 < fL ? 1 : fL < 0 ? -1 : 0
	})
}

function bx() {
	var zK, aCD, aCE, aCF, aCC = !1;

	function aCG() {
		aCC = !0, zK = -1, aCD = new Array(4);
		for (var eG = 3; 0 <= eG; eG--) aCD[eG] = !1;
		var aCH = Math.floor(1 + .02 * aK.min);
		aCE = new Array(4), (aCF = new Array(4))[1] = aCF[3] = aCE[0] = aCE[2] = 0, aCF[0] = aCE[3] = -aCH, aCE[1] = aCF[2] = aCH
	}

	function aCI() {
		if (-1 !== zK)
			if (0 !== rJ && f.kN()) {
				for (var aCJ = !1, eG = 3; 0 <= eG; eG--) aCD[eG] && (aCJ = !0, h8 += aCE[eG], hA += aCF[eG], a6.sZ(aCE[eG], aCF[eG]), p.z2());
				aCJ ? b3.d1 = !0 : aB.kE()
			} else aB.kE()
	}
	this.tC = function(g0) {
		0 !== rJ && f.kN() && (aCC || aCG(), aCD[g0] = !0, -1 === zK) && (zK = setInterval(aCI, 20), aCI())
	}, this.t8 = function(g0) {
		if (0 !== rJ && (aCC || aCG(), aCD[g0] = !1, -1 !== zK)) {
			for (var aCJ = !1, eG = 3; 0 <= eG; eG--) aCJ = aCJ || aCD[eG];
			aCJ || this.kE()
		}
	}, this.kE = function() {
		if (aCC && -1 !== zK) {
			for (var eG = 3; 0 <= eG; eG--) aCD[eG] = !1;
			clearInterval(zK), zK = -1
		}
	}
}

function by() {
	this.iy = new aCK, this.a4X = new aCL, this.la = new aCM, this.aBU = new aCN, this.aBY = new aCO, this.wF = new aCP, this.aCQ = new aCR, this.aCS = new aCT, this.cq = function() {
		this.iy.cq()
	}
}

function aCL() {
	var aCU = [];
	this.aCV = function(s7) {
		var eG, hb, a4S, re, aCW, aCX, a3z, aCY, aCZ, aCa, aBf, aBg;
		if (s7 !== aN.iy.sF) aN.iy.close(s7, 3239);
		else if (6 === x.dZ() && (b8.a46.a47(), aCU = [], aG.cq()), 7 !== x.dZ()) aN.iy.close(s7, 3251);
		else {
			for (a3z = [0, 0, 0, 0], aCY = ae.mL(6), eG = 0; eG < 4; eG++) a3z[eG] = ae.mL(aCY);
			for (aCZ = ae.mL(4), aCa = [], eG = 0; eG < aCZ; eG++) {
				for (aCa.push({
						id: ae.mL(5),
						uN: ae.mL(4),
						a4N: 1 === ae.mL(1),
						pc: ae.mL(6),
						a4L: ae.mL(14),
						a4Q: ae.mL(aCY),
						a4R: ae.mL(9) + 1,
						a3C: ae.mL(10)
					}), a4S = ae.mL(3), re = new Array(a4S), console.log("nClans " + a4S), hb = 0; hb < a4S; hb++) aCW = ae.mL(9) + 1, aCX = ad.oi.ok(ae.mL(3)), re[hb] = ("" === aCX ? "other: " : "[" + aCX + "]: ") + aCW;
				aCa[eG].a4S = a4S, aCa[eG].re = re
			}
			s7 = ae.mL(16), aBf = ae.mL(20), aBg = ae.mL(12), 0 !== s7 && (b8.a46.ij ? aCU.push({
				aBe: s7,
				aBf: aBf,
				aBg: aBg
			}) : b8.a46.cq(s7, aBf, aBg)), aG.ne(a3z, aCa)
		}
	}, this.a4Y = function(a4M) {
		var aCc;
		return !!b8.a46.ij && (aCc = b8.a46.aBh(), ab.d2(37), ab.ov(1, 0), ab.ov(6, 2), ab.ov(4, a4M), ab.ov(16, aCc[0]), ab.ov(10, aCc[1]), aN.iy.send(aN.iy.sF, ab.mK), 0 !== aCU.length && (b8.a46.cq(aCU[0].aBe, aCU[0].aBf, aCU[0].aBg), aCU
			.shift()), !0)
	}
}

function aCK() {
	var aCd, aCf;
	this.a3f = 5, this.a3g = this.a3f - 1, this.a34 = this.a3f + this.a3g, this.a33 = [0, 1, 5, 2, 6, 3, 7, 4, 8], this.aCe = null;

	function dP(eG) {
		return aCf[eG].aCC && aCd[eG].dP()
	}

	function aCl(s7) {
		aCf[s7].db = b3.db, aCf[s7].aCh = !1
	}
	this.sG = 0, this.sF = 0, this.cq = function() {
		this.aCe = new Array(this.a3f);
		this.aCe[0] = "territorial.io";
		var eG, a9L = aL.a8y(0);
		for (aL.uS(0), eG = 1; eG < this.a3f; eG++) this.aCe[eG] = h.r2() + ".territorial.io";
		for (aL.uS(a9L), aCd = new Array(this.a34), aCf = new Array(this.a34), eG = this.a34 - 1; 0 <= eG; eG--) aCf[eG] = {
			aCC: !1,
			db: 0,
			aCh: !1
		}
	}, this.wL = function() {
		return this.sF < this.a3f ? this.sF : this.sF - this.a3g
	}, this.i8 = function() {
		for (var eG = this.a34 - 1; 0 <= eG; eG--) this.a2z(eG) && b3.db > aCf[eG].db + 15e3 && aN.la.aCi(eG, aCf[eG].aCh)
	}, this.zP = function(s7, aB8) {
		if (aCf[s7].aCC) {
			if (aCd[s7].dP()) return aCd[s7].aCk(aB8), aCd[s7].a2z();
			aCd[s7].o3()
		}
		return this.aCj(s7, aB8), !1
	}, this.aCj = function(s7, aB8) {
		aCf[s7].aCC = !0, aCl(s7), aCd[s7] = new aCm, aCd[s7].cq(s7, aB8)
	}, this.aCk = function(s7, aB8) {
		dP(s7) && aCd[s7].aCk(aB8)
	}, this.aCn = function(s7, aB8) {
		0 === aB8 ? q.zR() : aB8 < 3 ? aN.la.a1x(s7, aB8 - 1) : 3 === aB8 ? aN.la.a4r(s7) : 4 === aB8 ? w.zR(s7) : 5 === aB8 ? s7 === this.sG && aN.la.aCo() : 6 !== aB8 && 7 !== aB8 && (15 === aB8 ? 8 === ar.s8 && ar.s9().aBX() : 16 === aB8 ?
			8 === ar.s8 && aN.aBY.aBZ() : 50 <= aB8 && aN.aBU.aBV(aB8 - 50))
	}, this.a2z = function(eG) {
		return aCf[eG].aCC && aCd[eG].a2z()
	}, this.send = function(s7, mK) {
		console.log("send " + s7 + " " + mK.length), aCl(s7), aCd[s7].send(mK)
	}, this.sq = function(s7) {
		aCf[s7].aCh = !0
	}, this.close = function(s7, aCp) {
		dP(s7) && aCd[s7].close(aCp)
	}, this.aCq = function(s7, aCp) {
		bB.sJ(aCp), dP(s7) && aCd[s7].close(aCp)
	}, this.sN = function(aCp) {
		for (var eG = this.a34 - 1; 0 <= eG; eG--) this.close(eG, aCp)
	}, this.aCr = function(s7, aCp) {
		for (var eG = this.a34 - 1; 0 <= eG; eG--) eG !== s7 && this.close(eG, aCp)
	}, this.aCs = function(s7, dE) {
		aCd[s7].o3(), bB.s6(s7, dE.code)
	}
}

function aCP() {
	this.aCt = function(s7, mK) {
		ae.cq(mK), 0 === ae.size ? aN.iy.aCq(s7, 3205) : ((0 === ae.mL(1) ? function(s7) {
			var aCx = ae.mL(6);
			console.log("idY " + aCx), 0 === aCx ? function(s7) {
				var eG;
				if (0 === s7 && 8 !== x.dZ()) {
					aw.fy(0, ad.oi.ok(ae.mL(5))), aw.fy(1, "[" + ad.oi.ok(ae.mL(3)) + "]");
					var aD4 = ae.mL(12),
						aD5 = ae.mL(6),
						dp = new Array(aD4);
					for (eG = 0; eG < aD4; eG++) dp[eG] = ae.mL(aD5);
					q.zT(dp)
				}
			}(s7) : 1 === aCx ? function() {
				var eG;
				if (8 !== x.dZ()) {
					var qa, id = ae.mL(1),
						position = ae.mL(16),
						wl = ae.mL(4),
						dp = [];
					for (eG = 0; eG < wl; eG++) qa = ae.mL(14), console.log(ae.g0), dp.push({
						name: ad.oi.ok(ae.mL(5)),
						qa: qa
					});
					0 === id ? b6.a1z(0, dp, 10, 1, .36, .55, position) : b6.a1z(1, dp, 100, 2, .47, .5, position)
				}
			}() : 2 === aCx ? aN.a4X.aCV(s7) : 3 === aCx || 4 === aCx ? aJ.cq() : 5 === aCx ? aN.aCQ.aD0() : 6 === aCx ? aN.aCS.aD1() : 7 === aCx ? aN.aCQ.aD2() : 8 === aCx && aN.aCS.aD3()
		} : function(s7) {
			if (8 !== x.dZ() && !aJ.a3h()) return;
			if (s7 !== aN.iy.sG) aN.iy.aCq(s7, 3244);
			else if (0 === ae.mL(1)) b3.rP.aDA(ae.mK);
			else {
				var eG, s7 = ae.mL(2);
				if (0 === s7) {
					var la = ae.mL(9),
						lp = ae.mL(7);
					0 !== h4[la] && 0 !== h4[eX] && (lp %= az.mr, k.lo(la, eX, lp), a6.ms(la, 1, lp))
				} else if (1 === s7) ! function() {
					var la = ae.mL(9);
					0 !== h4[la] && 0 !== h4[eX] && aS.a95(0, [la], !0) && k.m6(la, 1)
				}();
				else if (2 === s7) ! function() {
					var la = ae.mL(9),
						target = ae.mL(9);
					0 !== h4[la] && 0 !== h4[target] && 0 !== h4[eX] && aS.a95(1, [la], !0) && (a6.ms(la, 3, 96), a6.ms(target, 4, 96), k.wM(la, target))
				}();
				else if (d9 && !dB) {
					var ec = 720;
					for (ab.d2(14407), ab.ov(1, 0), ab.ov(6, 10), ec = Math.min(aW.lX.mO.length, 720), eG = 0; eG < ec; eG++) ab.ov(20, aW.lX.mO[eG]);
					aN.iy.send(aN.iy.sG, ab.mK)
				}
			}
		})(s7), b3.aCw())
	}, this.a3i = function(mK) {
		if (ae.cq(mK), ae.g0 = 1, 3 === ae.mL(6)) {
			ae.g0 += 20;
			for (var a4v, a4u, name, mK = ae.mL(9), uL = ae.mL(14), uN = ae.mL(4), a4N = 1 === ae.mL(1), a4O = ae.mL(6), a4P = ae.mL(14), aD9 = ae.mL(9) + 1, qW = [], eG = 0; eG < aD9; eG++) a4v = ae.mL(1), a4u = [ae.mL(6), ae.mL(6), ae.mL(6)],
				name = ad.oi.ok(ae.mL(5)), qW.push({
					name: name,
					a4u: a4u,
					a4v: a4v
				});
			x.a3H(), ap.d2(a4O, a4P), 1 === qW.length && z.a4j(uN), uK(uL, mK, qW, uN, a4N, !1)
		} else ! function() {
			ae.g0 += 20;
			for (var a4v, a4u, qa, name, a3Z = ae.mL(1), uL = ae.mL(14), uN = ae.mL(4), a4N = 1 === ae.mL(1), a4O = ae.mL(6), a4P = ae.mL(14), qW = [], eG = 0; eG < 2; eG++) a4v = ae.mL(1), a4u = [ae.mL(6), ae.mL(6), ae.mL(6)], qa = ae.mL(
				14), name = ad.oi.ok(ae.mL(5)), qW.push({
					name: name,
					a4u: a4u,
					qa: qa,
					a4v: a4v
				});
			x.a3H(), ap.d2(a4O, a4P), uK(uL, a3Z, qW, uN, a4N, !1)
		}()
	}, this.a3d = function() {
		ae.g0 = 1;
		var aCx = ae.mL(6),
			aD8 = ae.mL(10);
		return aN.iy.sF > aN.iy.a3g && (aD8 += aN.iy.a3g), aN.iy.sF === aD8 ? (aN.iy.sG = aD8, !1) : (aN.iy.close(aN.iy.sF, 3247), aN.iy.sG = aD8, aJ.a3Y = ae.mL(10), aJ.a3Z = ae.mL(3 === aCx ? 9 : 1), aN.iy.zP(aD8, 5) && aN.la.aCo(), !0)
	}
}

function aCT() {
	this.aD1 = function() {
		8 === ar.s8 && (b9.nd.ne(105, ac.og.ql(ac.og.qj(5))), b9.nd.ne(106, ac.og.ql(ac.og.qj(8))), b9.nd.ne(109, ae.mL(30)), console.log("receiveNewAccountData " + b9.dG.data[106].value), b9.nd.ne(108, b9.dG.data[109].value), b9.nd.ne(111, b9.dG
			.data[109].value + 1), b9.nd.ne(107, 0), b9.nd.ne(110, ""), ar.s9().aBj())
	}, this.aD3 = function() {
		8 === ar.s8 && (b9.nd.ne(109, ae.mL(30)), b9.nd.ne(107, ae.mL(16)), b9.nd.ne(108, ae.mL(30)), b9.nd.ne(112, ae.mL(30)), b9.nd.ne(111, ae.mL(30)), b9.nd.ne(110, ""), ar.s9().aBj())
	}
}

function aCR() {
	this.aD2 = function() {
		b9.nd.ne(109, ae.mL(30)), 8 === ar.s8 && ar.s9().aBb()
	}, this.aD0 = function() {
		if (ar.da() && ar.s9().aBc) {
			var size = ae.mL(6),
				aDG = [];
			for (let eG = 0; eG < size; eG++) aDG.push([ae.mL(16), ae.mL(20), ae.mL(12)]);
			ar.s9().aBc(aDG)
		}
	}
}

function aCM() {
	function aDJ() {
		ab.ov(14, a.dC), ab.ov(4, 2 === b7.id ? 2 : 12 <= b7.df ? 1 : 0 < b7.df ? 3 : 0), ab.ov(1, d9 ? 1 : 0), ab.ov(1, dB ? 1 : 0), ab.ov(5, (new Date).getHours() % 24)
	}
	this.zS = function() {
		ab.d2(21), ab.ov(1, 0), ab.ov(6, 0), ab.ov(14, a.dC), aN.iy.send(0, ab.mK)
	}, this.a35 = function(s7) {
		ab.d2(238 + 16 * b9.dG.data[100].value.length), ab.ov(1, 0), ab.ov(6, 1), ab.ov(10, dA), aDK = Math.floor((new Date).getTime() / 36e5) - b9.dG.data[181].value, ab.ov(30, b9.dG.data[180].value), ab.ov(20, ai.lS(aDK, 0, 1048575));
		var aDK = a8.va[2].rE.a2m();
		ab.ov(6, aDK[0]), ab.ov(6, aDK[1]), ab.ov(6, aDK[2]), ab.ov(1, +(0 !== b9.dG.data[105].value.length)), aN.aBY.aDI(), aDJ(), ab.ov(5, b9.dG.data[100].value.length), ac.oi.ow(b9.dG.data[100].value), aN.iy.sF = s7, aN.iy.send(s7, ab.mK)
	}, this.a1x = function(s7, id) {
		console.log("wrapPackageLeaderboard"), ab.d2(38), ab.ov(1, 0), ab.ov(6, 6), ab.ov(14, a.dC), ab.ov(1, id), ab.ov(16, Math.abs(4096 + b6.position[id] + b6.a1w[id]) % 65536), aN.iy.send(s7, ab.mK)
	}, this.aCi = function(s7, aCh) {
		ab.d2(8), ab.ov(1, 0), ab.ov(6, 4), ab.ov(1, aCh ? 1 : 0), aN.iy.send(s7, ab.mK)
	}, this.aCo = function() {
		ab.d2(58), ab.ov(1, 0), ab.ov(6, 5), ab.ov(8, aN.iy.wL()), ab.ov(10, aJ.a3Y), ab.ov(9, aJ.a3Z), ab.ov(10, dA), ab.ov(14, a.dC), aN.iy.send(aN.iy.sG, ab.mK)
	}, this.lb = function(fY) {
		ab.d2(27), ab.ov(1, 1), ab.ov(4, 0), ab.ov(22, fY), aN.iy.send(aN.iy.sG, ab.mK)
	}, this.ld = function(h7, hU) {
		ab.d2(25), ab.ov(1, 1), ab.ov(4, 1), ab.ov(10, h7), ab.ov(10, hU), aN.iy.send(aN.iy.sG, ab.mK)
	}, this.lh = function(h7, lf) {
		ab.d2(24), ab.ov(1, 1), ab.ov(4, 2), ab.ov(10, h7), ab.ov(9, lf), aN.iy.send(aN.iy.sG, ab.mK)
	}, this.li = function(h7, fY) {
		ab.d2(37), ab.ov(1, 1), ab.ov(4, 3), ab.ov(10, h7), ab.ov(22, fY), aN.iy.send(aN.iy.sG, ab.mK)
	}, this.ll = function(lj, fY) {
		ab.d2(37), ab.ov(1, 1), ab.ov(4, 4), ab.ov(10, lj), ab.ov(22, fY), aN.iy.send(aN.iy.sG, ab.mK)
	}, this.ln = function(hU) {
		ab.d2(15), ab.ov(1, 1), ab.ov(4, 5), ab.ov(10, hU), aN.iy.send(aN.iy.sG, ab.mK)
	}, this.lr = function(g0) {
		ab.d2(12), ab.ov(1, 1), ab.ov(4, 6), ab.ov(7, g0), aN.iy.send(aN.iy.sG, ab.mK)
	}, this.lu = function(lt) {
		ab.d2(6), ab.ov(1, 1), ab.ov(4, 7), ab.ov(1, lt), aN.iy.send(aN.iy.sG, ab.mK)
	}, this.lw = function() {
		ab.d2(5), ab.ov(1, 1), ab.ov(4, 8), aN.iy.send(aN.iy.sG, ab.mK)
	}, this.mE = function(a6L, mD) {
		ab.d2(29), ab.ov(1, 1), ab.ov(4, 10), ab.ov(12, a6L), ab.ov(2, 0), ab.ov(10, mD), aN.iy.send(aN.iy.sG, ab.mK)
	}, this.mH = function(a6L, pQ, pR, aDL) {
		ab.d2(46), ab.ov(1, 1), ab.ov(4, 10), ab.ov(12, a6L), ab.ov(2, 1), ab.ov(9, pQ), ab.ov(9, pR), ab.ov(9, aDL), aN.iy.send(aN.iy.sG, ab.mK)
	}, this.mJ = function(a6L) {
		var eG, rU = ao.iz.rU;
		for (ab.d2(47 + 33 * rU.length), ab.ov(1, 1), ab.ov(4, 10), ab.ov(12, a6L), ab.ov(2, 2), ab.ov(24, ao.iz.rT), ab.ov(4, rU.length), eG = 0; eG < rU.length; eG++) ab.ov(9, rU[eG].player), ab.ov(24, rU[eG].rg);
		aN.iy.send(aN.iy.sG, ab.mK)
	}, this.m4 = function(aDM, aDN) {
		ab.d2(21), ab.ov(1, 1), ab.ov(4, 15), ab.ov(9, aDN), ab.ov(7, aDM), aN.iy.send(aN.iy.sG, ab.mK)
	}, this.m7 = function(wF) {
		ab.d2(14), ab.ov(1, 1), ab.ov(4, 14), ab.ov(9, wF), aN.iy.send(aN.iy.sG, ab.mK)
	}, this.mB = function(aDO, target) {
		var eG, ec = aDO.length;
		for (ab.d2(14 + 9 * ec), ab.ov(1, 1), ab.ov(4, 13), ab.ov(9, target), eG = 0; eG < ec; eG++) ab.ov(9, aDO[eG]);
		aN.iy.send(aN.iy.sG, ab.mK)
	}, this.a4r = function(s7) {
		ab.d2(32), ab.ov(1, 0), ab.ov(6, 3), aDJ(), aN.iy.send(s7, ab.mK)
	}
}

function aCO() {
	this.aBa = function() {
		ab.d2(177), ab.ov(1, 0), ab.ov(6, 11), this.aDI(), ad.og.ow(b9.dG.data[110].value), aN.iy.send(0, ab.mK)
	}, this.aBZ = function() {
		ab.d2(129), ab.ov(1, 0), ab.ov(6, 13), this.aDI(), aN.iy.send(0, ab.mK)
	}, this.aDI = function() {
		ab.ov(14, a.dC), ad.og.ox(b9.dG.data[105].value, 5), ad.og.ox(b9.dG.data[106].value, 8), ab.ov(30, b9.dG.data[109].value)
	}
}

function aCN() {
	this.aBV = function(id) {
		ab.d2(21), ab.ov(1, 0), ab.ov(6, id), ab.ov(14, a.dC), aN.iy.send(0, ab.mK)
	}, this.aBi = function(aD8, n6) {
		ab.d2(7 + 26 * n6.length), ab.ov(1, 0), ab.ov(6, 9);
		for (let eG = 0; eG < n6.length; eG++) ab.ov(16, n6[eG][0]), ab.ov(10, n6[eG][1]);
		aN.iy.send(aD8, ab.mK)
	}
}

function aCm() {
	var s7, aB8, sP, aDP = ["wss://", "/s50/", "/s51/", "/s52/"];

	function aCn() {
		aN.iy.aCn(s7, aB8)
	}

	function aDU(dE) {
		aN.wF.aCt(s7, new Uint8Array(dE.data))
	}

	function aDV() {}

	function aCs(dE) {
		aN.iy.aCs(s7, dE)
	}
	this.cq = function(g0, aDQ) {
		s7 = g0, aB8 = aDQ;
		g0 = aDP[0];
		s7 < aN.iy.a3f ? g0 += aN.iy.aCe[s7] + aDP[1 + d6] : g0 += aN.iy.aCe[0] + "/i" + (1 + d6) + (s7 - aN.iy.a3g) + "/", (sP = new WebSocket(g0)).binaryType = "arraybuffer", sP.onopen = aCn, sP.onmessage = aDU, sP.onclose = aCs, sP.onerror =
			aDV
	}, this.aDS = function() {
		return sP.readyState === sP.CONNECTING
	}, this.a2z = function() {
		return sP.readyState === sP.OPEN
	}, this.dP = function() {
		return this.aDS() || this.a2z()
	}, this.aCk = function(aDQ) {
		aB8 = aDQ
	}, this.send = function(mK) {
		this.a2z() && sP.send(mK)
	}, this.close = function(aCp) {
		this.dP() && (sP.close(aCp), this.o3())
	}, this.o3 = function() {
		sP.onopen = null, sP.onmessage = null, sP.onclose = null, sP.onerror = null
	}
}

function cd() {
	var aDW = !1,
		wf = 0,
		g6 = 0,
		qS = 0,
		gap = 0,
		gP = null,
		qN = null,
		tV = null;

	function aDY() {
		for (var a4B, aDb = 0, ec = 0, iN = Math.floor(g6 / 2), gS = Math.floor(qS / 2), a4A = 1.5 * Math.PI, eG = uI; 0 <= eG; eG--) ec += tV[eG], 0 === tV[eG] && aDb++;
		if (aDW = !1, qN.clearRect(0, 0, g6, g6), qN.fillStyle = aZ.kb, qN.fillRect(0, 0, g6, g6), qN.fillStyle = aZ.gH, qN.fillRect(0, 0, g6, gap), qN.fillRect(0, 0, gap, g6), qN.fillRect(g6 - gap, 0, gap, g6), qN.fillRect(0, g6 - gap, g6, gap), 0 <
			ec)
			if (aDb === uI) {
				for (eG = uI; 0 <= eG; eG--)
					if (0 < tV[eG]) {
						! function(eG, iN, gS) {
							qN.fillStyle = b4.a4F[b4.rW[eG]], qN.beginPath(), qN.arc(iN, iN, gS, 0, 2 * Math.PI), qN.fill()
						}(eG, iN, gS);
						break
					}!
				function(iN) {
					var fontSize = iN / 3;
					qN.font = aY.g1.g2(1, fontSize), qN.fillStyle = aZ.gH, qN.fillText("100%", iN, iN + .1 * fontSize)
				}(iN)
			} else {
				for (eG = 0; eG <= uI; eG++) 0 < tV[eG] && (! function(eG, iN, gS, a4A, a4B) {
					qN.fillStyle = b4.a4F[b4.rW[eG]], qN.beginPath(), qN.arc(iN, iN, gS, a4A, a4B), qN.lineTo(iN, iN), qN.fill()
				}(eG, iN, gS, a4A, a4B = a4A + 2 * Math.PI * tV[eG] / ec), function(iN, gS, a4A, a4B) {
					var de = (a4B - a4A) / (2 * Math.PI),
						fontSize = +gS * Math.min(de, .37);
					fontSize < 8 || (a4A = (a4A + a4B) / 2, a4B = Math.floor(100 * de + .5) + "%", gS *= .525 - Math.max(.6 * (de - .7), 0), qN.font = aY.g1.g2(1, fontSize), qN.fillStyle = aZ.gH, qN.fillText(a4B, iN + Math.cos(a4A) * gS, iN +
						Math.cos(a4A + 1.5 * Math.PI) * gS))
				}(iN, gS, a4A, a4B), 0 !== eG && a4D(iN, gS, a4A), a4A = a4B);
				a4D(iN, gS, 1.5 * Math.PI)
			}!
		function(iN, gS) {
			qN.beginPath(), qN.arc(iN, iN, gS, 0, 2 * Math.PI), qN.stroke()
		}(iN, gS)
	}

	function a4D(iN, gS, a4G) {
		qN.beginPath(), qN.moveTo(iN, iN), qN.lineTo(iN + Math.cos(a4G) * gS, iN + Math.cos(a4G + 1.5 * Math.PI) * gS), qN.stroke()
	}
	this.cq = function() {
		if (hO) {
			var eG;
			for (wf = 0, tV = new Uint32Array(uI + 1), eG = uI; 0 <= eG; eG--) tV[eG] = 0;
			for (eG = iP - 1; 0 <= eG; eG--) tV[b4.iO[iQ[eG]]] += 1;
			this.resize()
		} else tV = qN = gP = null
	}, this.xy = function() {
		return g6
	}, this.resize = function() {
		hO && (g6 = Math.floor(b7.cv.fw() && !kA ? .18 * aK.min : .13 * aK.fx), g6 = (g6 *= 1 + (.5 + .2 * b7.cv.fw()) * kA) + g6 % 2, qS = Math.floor(7 * g6 / 8), (gP = gP || document.createElement("canvas")).width = g6, gP.height = g6, qN = gP
			.getContext("2d", {
				alpha: !0
			}), gap = Math.max(1, .015 * g6), qN.lineWidth = gap, qN.strokeStyle = aZ.gH, aY.g1.textAlign(qN, 1), aY.g1.textBaseline(qN, 1), aDY())
	}, this.rY = function() {
		return tV[this.rX()]
	}, this.rG = function() {
		return wf = 31, this.i8(), this.rX()
	}, this.rX = function() {
		for (var aDZ = 0, eG = uI; 0 < eG; eG--) tV[eG] > tV[aDZ] && (aDZ = eG);
		return aDZ
	}, this.i8 = function() {
		if (hO && 32 <= ++wf) {
			var eG;
			for (wf = 0, eG = uI; 0 <= eG; eG--) tV[eG] = 0;
			for (eG = iP - 1; 0 <= eG; eG--) tV[b4.iO[iQ[eG]]] += f2[iQ[eG]];
			aDW = !0
		}
	}, this.g3 = function() {
		hO && aDW && aDY()
	}, this.gF = function() {
		hO && (kA ? gG.drawImage(gP, b0.gap, b0.gap) : gG.drawImage(gP, b0.gap, xz + 2 * b0.gap))
	}
}

function cL() {
	this.d3 = function() {
		var value;
		b7.oV || 2 === b7.id || (value = function(key) {
			if ("undefined" == typeof URLSearchParams) return null;
			var aBq = window.location.search,
				aBq = new URLSearchParams(aBq).get(key);
			if ("string" != typeof aBq || aBq.length < 1) return null;
			return aBq
		}("replay")) && ar.ob(3, 0, value)
	}, this.clear = function() {
		var s3;
		b7.oV || 2 === b7.id || ((s3 = new URL(window.location.href)).search = "", history.replaceState(null, "", s3.toString()))
	}
}

function bz() {
	var aDg, dp;
	this.cq = function() {
		for (var eG = (dp = new Uint16Array(101)).length - 1; 0 <= eG; eG--) dp[eG] = eU(32768 * eG, 100);
		this.uS(0)
	}, this.value = function(ej) {
		return dp[ej]
	}, this.a8y = function() {
		return eU(aDg - 1, 2)
	}, this.uS = function(a9L) {
		aDg = 2 * a9L % 32768 + 1
	}, this.random = function() {
		return aDg = 167 * aDg % 32768
	}, this.he = function(jK) {
		return eU(jK * this.random(), 32768)
	}, this.iH = function(ej) {
		return 0 !== ej && this.random() < this.value(ej)
	}
}

function cH() {
	this.mZ = new aDh, this.aBt = new aDi, this.aBx = new aDj, this.cq = function(uL, qW, uN, uO) {
		var aDk;
		fO || ((aDk = {}).uM = eX, aDk.uL = uL, aDk.qW = qW, aDk.uN = uN, aDk.uO = uO, aDk.a4O = ap.pc, aDk.a4P = ap.a4L, z.a4o(aDk), this.mZ.cq(aDk))
	}, this.i8 = function() {
		fO || this.mZ.i8()
	}, this.aBw = function() {
		var tc = this.mZ.aDk;
		0 === rJ && x.a3H(), ap.d2(tc.a4O, tc.a4P), 1 === tc.qW.length && (z.a4j(tc.uN), z.a4l(tc.a4m, tc.a4n)), aN.iy.close(aN.iy.sG, 3246), z.a4q(), uK(tc.uL, tc.uM, tc.qW, tc.uN, tc.uO, !0)
	}, this.aBv = function(fz) {
		var eG = fz.indexOf("=");
		return 0 <= eG ? fz.substring(eG + 1) : fz
	}, this.aBu = function(fz) {
		return "https://territorial.io/?replay=" + fz
	}
}

function aDh() {
	this.aDl = null, this.aDm = null, this.aDn = null, this.aDo = null, this.aDp = null, this.aDq = null;
	var aDr = 0;
	this.aDk = null, this.aBs = "", this.cq = function(aDk) {
		this.aDl = [], this.aDm = [], this.aDn = [], this.aDo = [], this.aDp = [0], this.aDq = [0], aDr = 0, this.aDk = aDk, this.aBs = ""
	}, this.ma = function(id, dq, ds, du) {
		fO || 2 === rJ || (0 === this.aDp[aDr] && (this.aDq[aDr] ? (this.aDp.push(1), this.aDq.push(0), aDr++) : this.aDp[aDr] = 1), this.aDl.push(id), this.aDm.push(dq), this.aDn.push(void 0 === ds ? 0 : ds), this.aDo.push(void 0 === du ? 0 :
			du), this.aDq[aDr]++)
	}, this.i8 = function() {
		0 === this.aDp[aDr] ? this.aDq[aDr]++ : (this.aDp.push(0), this.aDq.push(0), aDr++)
	}
}

function aDj() {
	function aDx(fz, aDz = !1) {
		aDz ? k.vi = "Replay Error: " + fz : ar.ob(4, 3, new s4("⚠️ Replay Error", fz, !0))
	}
	this.p0 = function(fz) {
		if (ad.og.os(ad.og.oq(ad.og.oo(fz))), k.vi = "", ! function() {
				if (ae.size < 10) aDx("File Too Small");
				else if (ae.mL(9) !== d8 && aDx("Incompatible Version Error", !0), ae.mL(31) !== ae.size) aDx("Size Error");
				else {
					if (function(gC) {
							var eG, ej = ae.mK,
								ec = ae.size,
								a6L = 0;
							for (eG = 7; eG < ec; eG++) a6L = a6L + ej[eG] & 65535;
							return a6L === gC
						}(ae.mL(16))) return 1;
					aDx("Hash Error")
				}
				return
			}()) return !1;
		(aDk = {}).uM = ae.mL(9), aDk.uL = ae.mL(14), aDk.uN = ae.mL(4), aDk.uO = 1 === ae.mL(1), aDk.a4O = ae.mL(6), aDk.a4P = ae.mL(14), aDk.aE0 = ae.mL(10), aX.mZ.aDk = aDk,
			function() {
				var eG, a4v, a4u, name, ec = aX.mZ.aDk.aE0,
					qW = [];
				for (eG = 0; eG < ec; eG++) a4v = ae.mL(1), a4u = [ae.mL(6), ae.mL(6), ae.mL(6)], name = ad.oi.ok(ae.mL(5)), qW.push({
					name: name,
					a4u: a4u,
					a4v: a4v
				});
				if (aX.mZ.aDk.qW = qW, 8 === aX.mZ.aDk.uN)
					for (eG = 0; eG < ec; eG++) qW[eG].qa = ae.mL(14)
			}(),
			function() {
				var eG, ec, aE1 = aX.mZ.aDk;
				if (1 === aE1.qW.length)
					for (ec = 6 < aE1.uN ? 1 : aE1.uN + 2, aE1.a4m = new Array(ec), aE1.a4n = new Array(ec), eG = 0; eG < ec; eG++) aE1.a4m[eG] = ae.mL(3), aE1.a4n[eG] = ae.mL(9) + 1
			}(), aDk = ae.mL(5), aE2 = ae.mL(30), aE3 = ae.mL(30);
		var aDk, aE2, aE3, eG, id, ec = aE2,
			aE6 = new Uint8Array(ec),
			aE7 = new Uint16Array(ec),
			aE8 = new Uint32Array(ec),
			aE9 = new Uint32Array(ec);
		for (aX.mZ.aDl = aE6, aX.mZ.aDm = aE7, aX.mZ.aDn = aE8, aX.mZ.aDo = aE9, eG = 0; eG < ec; eG++) aE6[eG] = id = ae.mL(4), aE7[eG] = ae.mL(9), 0 === id ? aE8[eG] = ae.mL(22) : 1 === id ? (aE8[eG] = ae.mL(10), aE9[eG] = ae.mL(10)) : 2 ===
			id ? (aE8[eG] = ae.mL(10), aE9[eG] = ae.mL(9)) : 3 === id || 4 === id ? (aE8[eG] = ae.mL(10), aE9[eG] = ae.mL(22)) : 5 === id ? aE8[eG] = ae.mL(10) : 6 === id ? aE8[eG] = ae.mL(7) : 7 === id && (aE8[eG] = ae.mL(1));
		return function(ec, p1) {
			var eG, aDp = new Uint8Array(ec),
				aDq = new Array(ec);
			for (aDq.fill(0), aX.mZ.aDp = aDp, aX.mZ.aDq = aDq, eG = 0; eG < ec; eG++) aDp[eG] = ae.mL(1), aDq[eG] = ae.mL(p1)
		}(aE3, aDk), ae.g0 < 8 * ae.size - 13 || ae.g0 > 8 * ae.size ? (aDx("Out Of Bounds Error: " + ae.g0 + " " + 8 * ae.size), !1) : (aX.mZ.aBs = fz, !0)
	}
}

function aDi() {
	this.qw = function() {
		var aE1, p1 = function() {
				var eG, aDq = aX.mZ.aDq,
					ec = aDq.length,
					max = 0;
				for (eG = 0; eG < ec; eG++) max = Math.max(max, aDq[eG]);
				return p7(Math.max(max, 1))
			}(),
			aEB = function(p1) {
				return 179 + function() {
					var eG, qW = aX.mZ.aDk.qW,
						ec = qW.length,
						aEB = 24 * ec;
					for (eG = 0; eG < ec; eG++) aEB += 16 * qW[eG].name.length;
					8 === aX.mZ.aDk.uN && (aEB += 14 * ec);
					return aEB
				}() + (1 === aX.mZ.aDk.qW.length ? 12 * aX.mZ.aDk.a4m.length : 0) + function() {
					var eG, aDl = aX.mZ.aDl,
						ec = aDl.length,
						aEB = 13 * ec,
						aEN = [22, 20, 19, 32, 32, 10, 7, 1, 0, 0];
					for (eG = 0; eG < ec; eG++) aEB += aEN[aDl[eG]];
					return aEB
				}() + function(p1) {
					return aX.mZ.aDq.length * (1 + p1)
				}(p1)
			}(p1);
		ab.d2(aEB + (6 - aEB % 6) % 6), aE1 = aX.mZ.aDk, ab.ov(9, d8), ab.ov(31, ab.size), ab.g0 += 16, ab.ov(9, aE1.uM), ab.ov(14, aE1.uL), ab.ov(4, aE1.uN), ab.ov(1, aE1.uO), ab.ov(6, aE1.a4O), ab.ov(14, aE1.a4P), ab.ov(10, aE1.qW.length);
		var eG, qW = aX.mZ.aDk.qW,
			ec = qW.length;
		for (eG = 0; eG < ec; eG++) ab.ov(1, qW[eG].a4v), ab.ov(18, (qW[eG].a4u[0] << 12) + (qW[eG].a4u[1] << 6) + qW[eG].a4u[2]), ab.ov(5, qW[eG].name.length), ac.oi.ow(qW[eG].name);
		if (8 === aX.mZ.aDk.uN)
			for (eG = 0; eG < ec; eG++) ab.ov(14, qW[eG].qa);
		return function() {
				var eG, aE1 = aX.mZ.aDk;
				if (1 === aE1.qW.length)
					for (eG = 0; eG < aE1.a4m.length; eG++) ab.ov(3, aE1.a4m[eG]), ab.ov(9, aE1.a4n[eG] - 1)
			}(),
			function(p1) {
				var eG, aDl = aX.mZ.aDl,
					dq = aX.mZ.aDm,
					ds = aX.mZ.aDn,
					du = aX.mZ.aDo,
					ec = aDl.length;
				for (ab.ov(5, p1), ab.ov(30, ec), ab.ov(30, aX.mZ.aDq.length), eG = 0; eG < ec; eG++) ab.ov(4, aDl[eG]), ab.ov(9, dq[eG]), 0 === aDl[eG] ? ab.ov(22, ds[eG]) : 1 === aDl[eG] ? (ab.ov(10, ds[eG]), ab.ov(10, du[eG])) : 2 === aDl[
					eG] ? (ab.ov(10, ds[eG]), ab.ov(9, du[eG])) : 3 === aDl[eG] || 4 === aDl[eG] ? (ab.ov(10, ds[eG]), ab.ov(22, du[eG])) : 5 === aDl[eG] ? ab.ov(10, ds[eG]) : 6 === aDl[eG] ? ab.ov(7, ds[eG]) : 7 === aDl[eG] && ab.ov(1, ds[eG])
			}(p1),
			function(p1) {
				var eG, aDp = aX.mZ.aDp,
					aDq = aX.mZ.aDq,
					ec = aDp.length;
				for (eG = 0; eG < ec; eG++) ab.ov(1, aDp[eG]), ab.ov(p1, aDq[eG])
			}(p1), ab.g0 !== aEB && k.sH("Encoder Index Error: " + ab.g0 + " " + aEB), ab.g0 = 40, ab.ov(16, function() {
				var eG, ej = ab.mK,
					ec = ab.size,
					a6L = 0;
				for (eG = 7; eG < ec; eG++) a6L = a6L + ej[eG] & 65535;
				return a6L
			}()), ae.cq(ab.mK), ac.og.ql(ac.og.qj(eU(aEB - 1, 6) + 1))
	}
}

function c4() {
	var iN, wZ = !1,
		aEO = !1,
		aEP = -1e4;

	function resize(gh) {
		iN = 0, a1.g4() && (aER(gh) || wZ) && (wZ = !1, b0.resize(), aw.cq(), v.cq(), y.resize(), au.cq(), w.resize(), q.resize(), l.resize(), b6.resize(), az.cq(), ar.resize(), 1 <= rJ ? (s.resize(!1), r.resize(), t.resize(), p.resize(), o.resize(),
			k.resize(), j.resize(), aa.resize(), aI.resize(), m.resize(), n.resize(), i.resize(), b2.resize(), a6.resize(), u.resize(), b5.resize(), p.z2()) : (2 === x.dZ() && z.resize(), x.a3K(), x.a3N()), b3.d1 = !0)
	}

	function aEQ(de) {
		return de && 128 < de ? Math.floor(de) : 128
	}

	function aER(gh) {
		var g6, gC, aET, qS = aEQ(document.documentElement.clientWidth),
			xC = aEQ(window.visualViewport && 2 !== b7.id ? window.visualViewport.height : document.documentElement.clientHeight);
		return g6 = qS, gC = xC, aET = 0 !== b7.id || g6 < gC ? 700 : 1200, aET = Math.min(aET / ((g6 + gC) / 2), 1), aET = 0 === b9.dG.data[1].value ? 2 * aET / 3 : Math.min(aET + (b9.dG.data[1].value - 1) * (1 - aET) / 2, 1), aK.nH = (window
			.devicePixelRatio || 1) * aET, gh && !aEO ? (aEO = !0, document.body.removeChild(sY)) : aEO && (aEO = !1, document.body.appendChild(sY)), g6 = Math.floor(.5 + qS * aK.nH), gC = Math.floor(.5 + xC * aK.nH), !(g6 === aK.g6 && gC === aK
			.gC || ag.tG() && y.t5) && (aK.g6 = g6, aK.gC = gC, aK.min = yH(g6, gC), aK.max = vz(g6, gC), aK.fx = eU(g6 + gC, 2), aK.o6 = g6 / gC, sY.width = g6, sY.height = gC, sY.style.width = qS + "px", sY.style.height = xC + "px", 1)
	}
	this.g6 = 0, this.gC = 0, this.min = 0, this.max = 0, this.fx = 0, this.o6 = 1, this.nH = 1, this.cr = function() {
		this.g6 = aEQ(document.documentElement.clientWidth) + 2, this.gC = aEQ(document.documentElement.clientHeight) + 2
	}, this.cq = function() {
		iN = 1, sY = document.getElementById("canvasA"), (gG = sY.getContext("2d", {
			alpha: makeMainMenuTransparent
		})).imageSmoothingEnabled = !1, aER(0)
	}, this.i8 = function() {
		aP.i8(), 50 <= ++iN && resize(0)
	}, this.oc = function(gh) {
		wZ = !0, resize(gh)
	}, this.tH = function() {
		aEP + 1e3 > b3.db || (aEP = b3.db, resize(0))
	}
}

function c0() {
	var player, hV, pQ, pK, jd, je, jf, jg, g0, aEV, id;

	function aEb() {
		var hU;
		if (a2.eo(pQ)) hU = eg;
		else {
			if ((hU = a2.en(pQ)) === player) return void aEd(!0);
			if (!fs(player, hU)) return function(hU) {
				var max = f2[hU] * tn - eY[hU];
				max <= 0 || (hV -= max = max < hV ? max : hV, player === eX && (k.m1(max, 0, hU), b1.ea[16] += max), hU === eX && (k.wS(max, player), b1.ea[10] += max), eY[hU] += max, a6.m2(hU, max))
			}(hU), void aEd(!0)
		}
		player === eX && (b1.ea[13] += hV), e.eW(player, id), a4.eb(player, aEV), ed[player].push(pK), a4.hR(player, hV, hU), c.hS(player, !0)
	}

	function aEd(aEg) {
		e.eW(player, id), a4.eb(player, aEV), aEg && (eY[player] += hV)
	}

	function aEX() {
		a2.a61(pQ, player) && a2.a63(pQ)
	}

	function aEW(eG, a7T, xu, hd, kN) {
		if (g0 = eG, id = a7T, player = xu, jd = a2.jh(hd), je = a2.gE(hd), jf = a2.jh(kN), jg = a2.gE(kN), pK = pQ = a2.pv(jd, je), -1 !== (aEV = a4.jk(player, id))) return hV = a4.eO(player, aEV), 1;
		aEX(), e.eW(player, id)
	}
	this.i8 = function(eG, id, xu, hd, kN) {
		aEW(eG, id, xu, hd, kN) && (aEX(), function() {
			var aEh = eU(hV, 128);
			hV -= aEh = aEh < 1 ? 1 : aEh, player === eX && (b1.ea[15] += aEh);
			if (hV <= eV) return player === eX && (b1.ea[15] += hV), void aEd(!1);
			return a4.f1(player, aEV, hV), 1
		}()) && (eG = a2.pv(jd, je), pQ = Math.abs(jf - jd) >= Math.abs(jg - je) ? eG + e7[jd < jf ? 1 : 3] : eG + e7[je < jg ? 2 : 0], jd = a2.jh(pQ), je = a2.gE(pQ), e.jT(g0, pQ), ! function() {
			if (a2.ee(pQ)) return;
			return 1
		}() ? aEb() : a2.fk(pQ) && a2.a66(pQ, player))
	}, this.jW = function(xu, hd) {
		player = xu, pQ = a2.pv(a2.jh(hd), a2.gE(hd)), aEX()
	}
}

function ca() {
	this.a46 = new aEi
}

function aEi() {
	var yZ = 0,
		a4I = 0,
		db = 0,
		ea = [1, 0, 0, 1, 0, 0];

	function aEj(hk) {
		var eG, aEk = ea[0],
			aBe = ea[1],
			aBf = ea[2],
			hb = ea[3];
		if ((hk = Math.min(hk, ea[4])) < hb) yZ = a4I = 0;
		else {
			for (yZ = performance.now(), eG = hb; eG <= hk; eG++) aBe = aEm(aBe, aEk = function(aEk, aBe, aBf, fa) {
				var eG, ec = 65536 + (aEk * fa & 16383);
				for (eG = 0; eG < ec; eG++) aEk = 1 + aEk * aBe % aBf;
				return aEk
			}(aEk, aBe, aBf, eG), 16384, 65536), aBf = aEm(aBf, aEk, 1 << 18, 1 << 20);
			ea[0] = aEk, ea[1] = aBe, ea[2] = aBf, ea[3] = eG, a4I = performance.now(), ea[5] += a4I - yZ
		}
	}

	function aEm(de, a9L, min, max) {
		return min + (de * a9L + 137) % (max - min)
	}
	this.ij = !1, this.cq = function(aBe, aBf, aBg) {
		ea[0] = 1, ea[1] = aBe, ea[2] = aBf, ea[3] = 0, ea[4] = aBg, ea[5] = 0, this.ij = !0
	}, this.a47 = function() {
		this.ij = !1, ea[3] = ea[4] + 1
	}, this.aBh = function() {
		return aEj(ea[4]), this.ij = !1, [ea[0] - 1 & 65535, Math.min(Math.floor(Math.sqrt(ea[5])), 1023)]
	}, this.i8 = function() {
		7 !== x.dZ() || ea[4] < ea[3] || b3.db < db || (aEj(ea[3] + Math.floor(ea[4] / 20)), db = a4I + 250)
	}
}

function c1() {
	var aEn, aEo, fk, aEp;
	this.cq = function() {
		var eG, fL, fM, a4u, aEq, g6, gC, qN, gM, pI, de, ej, i0, hb, aEt;
		if (function() {
				if (fk = !0, aEp = "rgb(" + ap.pF[0] + "," + ap.pF[1] + "," + ap.pF[2] + ")", ap.a9T(ap.pc)) return 1;
				return fk = !1, 0
			}()) aEo = null;
		else {
			for (aEn = eU(96, 4), aEq = 1 === ap.pc ? (a4u = 0, 160) : (a4u = 128, 32), aEp = "rgb(" + a4u + "," + a4u + "," + a4u + ")", aEo = new Array(4), eG = 3; 0 <= eG; eG--) {
				if (aEo[eG] = document.createElement("canvas"), g6 = eG % 2 == 0 ? ap.eB : aEn, gC = eG % 2 == 0 ? aEn : ap.eC + 2 * aEn, aEo[eG].width = g6, aEo[eG].height = gC, pI = (gM = (qN = aEo[eG].getContext("2d", {
						alpha: !1
					})).getImageData(0, 0, g6, gC)).data, eG % 2 == 0)
					for (fM = aEn - 1; 0 <= fM; fM--)
						for (de = aEq + Math.floor((fM + 1) * (a4u - aEq) / (aEn + 1)), fL = g6 - 1; 0 <= fL; fL--) pI[ej = 4 * ((0 === eG ? aEn - fM - 1 : fM) * g6 + fL)] = de, pI[ej + 1] = de, pI[ej + 2] = de, pI[ej + 3] = 255;
				else {
					for (fL = aEn - 1; 0 <= fL; fL--)
						for (de = aEq + Math.floor((fL + 1) * (a4u - aEq) / (aEn + 1)), fM = gC - 1 - aEn; aEn <= fM; fM--) pI[ej = 4 * (fM * g6 + (3 === eG ? aEn - fL - 1 : fL))] = de, pI[ej + 1] = de, pI[ej + 2] = de, pI[ej + 3] = 255;
					for (hb = 1; 0 <= hb; hb--)
						for (fL = aEn - 1; 0 <= fL; fL--)
							for (fM = aEn - 1; 0 <= fM; fM--) i0 = (Math.pow(fL * fL + fM * fM, .5) + 1) / (aEn + 1), de = aEq + Math.floor((1 < i0 ? 1 : i0) * (a4u - aEq)), pI[ej = 4 * ((0 === hb ? aEn - fM - 1 : fM + hb * (gC - aEn)) * g6 + (
								1 === eG ? fL : aEn - fL - 1))] = de, pI[ej + 1] = de, pI[ej + 2] = de, pI[ej + 3] = 255
				}
				qN.putImageData(gM, 0, 0)
			}
			aEt = aEq, ap.pA.fillStyle = "rgb(" + aEt + "," + aEt + "," + aEt + ")", ap.pA.fillRect(0, 0, ap.eB, 1), ap.pA.fillRect(0, ap.eC - 1, ap.eB, 1), ap.pA.fillRect(0, 0, 1, ap.eC), ap.pA.fillRect(ap.eB - 1, 0, 1, ap.eC)
		}
	}, this.qJ = function() {
		var hb = fk ? 0 : -aEn;
		aB2(hb, hb, ap.eB - 2 * hb, ap.eC - 2 * hb, ax.aEu, ax.aEv, ax.aEw, ax.aEx) || (gG.fillStyle = aEp, gG.fillRect(0, 0, aK.g6, aK.gC))
	}, this.gF = function() {
		fk || (aB1(0, -aEn, ap.eB, aEn, ax.aEu, ax.aEv, ax.aEw, ax.aEx) && gG.drawImage(aEo[0], ax.aEy, ax.aEz - aEn), aB1(ap.eB, -aEn, aEn, ap.eC + 2 * aEn, ax.aEu, ax.aEv, ax.aEw, ax.aEx) && gG.drawImage(aEo[1], ax.aEy + ap.eB, ax.aEz - aEn),
			aB1(0, ap.eC, ap.eB, aEn, ax.aEu, ax.aEv, ax.aEw, ax.aEx) && gG.drawImage(aEo[2], ax.aEy, ax.aEz + ap.eC), aB1(-aEn, -aEn, aEn, ap.eC + 2 * aEn, ax.aEu, ax.aEv, ax.aEw, ax.aEx) && gG.drawImage(aEo[3], ax.aEy - aEn, ax.aEz - aEn))
	}
}

function cO() {
	this.fg = new aF0, this.a6Y = new aF1, this.qK = new aF2, this.iy = new aF3, this.hG = new aF4, this.aEt = new aF5, this.aF6 = new aF7, this.i7 = new aF8, this.mk = new aF9, this.cq = function() {
		this.qK.cq(), this.iy.cq(), this.hG.cq(), this.aEt.cq()
	}
}

function aF8() {
	function aFF(player, hd, aFH, aFI) {
		for (var jd, je, g6, gC, gS, aFJ, jf, jg, ec = hd + aFI, eG = hd; eG < ec; eG += aFH)
			if (jd = (jd = hw[player] - eG) < 1 ? 1 : jd, je = hz[player] - eG, jf = (jf = hv[player] + eG) >= ap.eB - 1 ? ap.eB - 2 : jf, gC = (jg = (jg = hy[player] + eG) >= ap.eC - 1 ? ap.eC - 2 : jg) - (je = je < 1 ? 1 : je), jf = (gS = eU(aL
					.random() * (2 * (jf - jd + jg - je)), aL.value(100))) <= (g6 = jf - jd) ? (aFJ = jd + gS, je) : gS <= g6 + gC ? (aFJ = jf, je + gS - g6) : gS <= 2 * g6 + gC ? (aFJ = jd + gS - g6 - gC, jg) : (aFJ = jd, je + gS - 2 * g6 - gC),
				aFG(player, jg = a2.pv(aFJ, jf))) return jg;
		return -1
	}

	function aFG(tj, ek) {
		return a2.ee(ek) && (a2.eo(ek) || tj !== (ek = a2.en(ek)) && fs(tj, ek) && 0 < ev[ek].length)
	}
	this.i8 = function(player) {
		return !(0 === ev[player].length || eY[player] < 100) && ak.iy.mX !== ak.iy.mi && (ak.iy.mW[player] !== ak.iy.mj && aY.fQ.md(player, 203, 32, 16) ? !! function(player) {
			var ek = function(player) {
				var eG, pz, py, jd = hw[player],
					je = hz[player],
					gv = hv[player] - jd + 1,
					gy = hy[player] - je + 1,
					de = aL.value(100);
				for (eG = 0; eG < 32; eG++)
					if (pz = jd + ai.fH(aL.random() * gv, de), py = je + ai.fH(aL.random() * gy, de), pz = a2.pv(pz, py), aFG(player, pz)) return pz;
				return -1
			}(player);
			if (0 <= ek) return ak.mk.ml(player, ek >> 2);
			if (0 <= (ek = aFF(player, 1, 4, 40))) return ak.mk.ml(player, ek >> 2);
			if (0 <= (ek = aFF(player, 40, 8, 200))) return ak.mk.ml(player, ek >> 2);
			return
		}(player) && !! function(tj) {
			if (0 === al.dl[2]) return void console.log("error 325234");
			var aFD = al.dl[1] + aj.gT[al.dl[2] - 1] << 2;
			if (a2.eo(aFD)) return 1;
			return aFD = a2.en(aFD), tj !== aFD && !!fs(tj, aFD)
		}(player) && function(player) {
			return aY.fQ.mf(player), ak.iy.mm(player), !0
		}(player) : void 0)
	}
}

function aF0() {
	function aFM(aFL) {
		var aFW = 4 + .03 * (1 + 1.5 * b7.cv.fw()) * aK.fx / h9;
		return aj.h1(aFL, al.dl[1]) < aFW
	}
	this.fl = function(player, aFL) {
		return !!aj.hB(aFL) && ak.iy.mX !== ak.iy.mi && ak.iy.mW[player] !== ak.iy.mj && 0 !== ev[player].length && !!ak.mk.ml(player, aFL) && !!aFM(aFL)
	}, this.lk = function(player, lj, aFL) {
		return !!(aj.hB(aFL) && this.mn(player, lj) && ak.mk.mo(aFL) && aFM(aFL))
	}, this.mn = function(player, id) {
		for (var aFN, tT = player << 3, tU = tT + ak.iy.mW[player], aFO = ak.iy.aFO, aFP = ak.iy.aFP, eG = tT; eG < tU; eG++)
			if (id === aFP[aFN = aFO[eG]]) return al.dl[3] = aFN, !0;
		return !1
	}, this.fh = function(fY) {
		var aFQ = ak.aEt.aFQ;
		return ak.aEt.aFQ = -1, !!this.mn(eX, aFQ) && (aW.fe.fh(aFQ, fY), !0)
	}, this.fi = function(gA, gB) {
		var eG, tU, aFR, aFO, aFS, aFT, aFU, i0, wD, aFV, player = eX,
			ec = ak.iy.mW[player];
		if (0 === ec) return !1;
		for (aFO = ak.iy.aFO, aFT = ak.iy.aFT, wD = ak.iy.wD, tU = (player = player << 3) + ec, aFS = .4 * aY.g1.nD(.5) * aK.fx / h9, aFR = -1, eG = player; eG < tU; eG++) aFV = aFO[eG], aFU = 16 * (.625 + .125 * Math.sqrt(Math.sqrt(wD[aFV]))), (
			i0 = aj.gr(gA, gB, aFT[aFV])) - aFU < aFS && (aFS = i0, aFR = aFV);
		return !(aFR < 0 || (ak.aEt.aFQ = ak.iy.aFP[aFR], 0))
	}, this.vE = function(gA, gB) {
		var eG, aFR, aFS, aFT, aFU, i0, wD, ec = ak.iy.mX;
		if (ec < 1) return -1;
		for (aFT = ak.iy.aFT, wD = ak.iy.wD, aFS = 1e3, aFR = -1, eG = 0; eG < ec; eG++) aFU = 16 * aY.g1.nD(.5) * (.625 + .125 * Math.sqrt(Math.sqrt(wD[eG]))), (i0 = aj.gr(gA, gB, aFT[eG])) < aFS && i0 < aFU && (aFS = i0, aFR = eG);
		return aFR
	}
}

function aF1() {
	this.a6Z = function(player) {
		for (var aFO = ak.iy.aFO, tT = player << 3, eG = tT + ak.iy.mW[player] - 1; tT <= eG; eG--) this.aFX(aFO[eG])
	}, this.aFX = function(aFY) {
		var iy = ak.iy,
			aFZ = iy.mX - 1,
			aFa = iy.wC[aFY],
			aFb = iy.aFc[aFY],
			aFd = iy.aFT[aFY];
		iy.mX = aFZ, iy.wC[aFY] = iy.wC[aFZ], iy.aFe[aFY] = iy.aFe[aFZ], iy.aFf[aFY] = iy.aFf[aFZ], iy.aFT[aFY] = iy.aFT[aFZ], iy.aFg[aFY] = iy.aFg[aFZ], iy.wD[aFY] = iy.wD[aFZ], iy.aFc[aFY] = iy.aFc[aFZ], iy.aFP[aFY] = iy.aFP[aFZ], iy.aFh[aFY] =
			iy.aFh[aFZ], iy.aFO[iy.wC[aFY]] = aFY,
			function(a4G) {
				var player = a4G >> 3,
					iy = ak.iy,
					ec = iy.mW[player] - 1,
					aFk = (player << 3) + ec;
				iy.mW[player] = ec, aFk !== a4G && (iy.aFO[a4G] = iy.aFO[aFk], iy.wC[iy.aFO[a4G]] = a4G)
			}(aFa), ak.hG.hG[aj.hF(iy.aFT[aFY])][iy.aFc[aFY]] = aFY, aFZ = aj.hF(aFd), aFa = aFb, aFZ = ak.hG.hG[aFZ], iy = aFZ.pop(), aFa !== aFZ.length && (aFZ[aFa] = iy, ak.iy.aFc[iy] = aFa)
	}
}

function aF2() {
	var aFm, aFn = 8,
		aFo = new Array(2);

	function aFp(g0) {
		var gJ = aFn + 4,
			ur = aY.g1.p6(gJ, gJ),
			gQ = aY.g1.getContext(ur, !0),
			gM = aY.g1.getImageData(gQ, gJ, gJ),
			pI = gM.data;
		return aFq(pI, gJ + 1, g0), aFq(pI, gJ + 2, g0), aFq(pI, 2 * gJ + 1, g0), aFq(pI, 2 * gJ - 3, g0), aFq(pI, 2 * gJ - 2, g0), aFq(pI, 3 * gJ - 2, g0), aFq(pI, gJ * (gJ - 3) + 1, g0), aFq(pI, gJ * (gJ - 2) + 1, g0), aFq(pI, gJ * (gJ - 2) + 2,
			g0), aFq(pI, gJ * (gJ - 2) - 2, g0), aFq(pI, gJ * (gJ - 1) - 3, g0), aFq(pI, gJ * (gJ - 1) - 2, g0), gQ.putImageData(gM, 0, 0), ur
	}

	function aFq(pI, fY, g0) {
		fY *= 4;
		pI[fY] = 255, pI[1 + fY] = 255, pI[2 + fY] = g0, pI[3 + fY] = 255
	}

	function p6(player) {
		var ur = aY.g1.p6(aFn, aFn);
		return function(gQ, player) {
			var fL, fM, gv, fY, aFs, a4H, gJ = aFn,
				gM = aY.g1.getImageData(gQ, gJ, gJ),
				pI = gM.data,
				p2 = (gJ >> 1) - .5,
				aEp = a2.xM(player),
				aFu = aY.pG.tN(aEp, .5);
			aY.pG.tO(aEp, aFu, 300) || aY.pG.tQ(aEp, 100);
			for (fM = 0; fM < gJ; fM++)
				for (fL = 0; fL < gJ; fL++) a4H = (gJ - 1.5) * (gJ - 1.5) / 4, aFs = (gv = (gv = fL - p2) * gv + (gv = fM - p2) * gv) <= (gJ - 4.5) * (gJ - 4.5) / 4 ? aFu : aEp, pI[fY = 4 * (fM * gJ + fL)] = aFs[0], pI[1 + fY] = aFs[1], pI[2 +
					fY] = aFs[2], pI[3 + fY] = a4H < gv ? 0 : 255;
			gQ.putImageData(gM, 0, 0)
		}(aY.g1.getContext(ur, !0), player), ur
	}
	this.cq = function() {
		aFm = new Array(eg), aFo[0] = aFp(255), aFo[1] = aFp(0)
	}, this.gF = function() {
		var eG, player, aFv, hV, aFw, gu, aFz, aG1, aG2, aFT = ak.iy.aFT,
			wC = ak.iy.wC,
			wD = ak.iy.wD,
			aG3 = aFm,
			aG4 = eX,
			aG5 = -1,
			ec = ak.iy.mX,
			aG6 = aK.g6,
			aG7 = aK.gC,
			aG8 = ap.eB << 4,
			u6 = h9,
			fa = u6 / aFn,
			jd = h8 / u6,
			je = hA / u6,
			gv = (aG6 + h8) / u6 - jd,
			gy = (aG7 + hA) / u6 - je,
			gQ = gG;
		for (ak.fg.mn(eX, ak.aEt.aFQ) && (aG5 = al.dl[3]), gQ.fillStyle = aZ.gH, aY.g1.textAlign(gQ, 1), eG = 0; eG < ec; eG++) player = wC[eG] >> 3, hV = wD[eG], aFv = .625 + .125 * Math.sqrt(Math.sqrt(hV)), aFw = (gu = aFT[eG]) % aG8 / 16 -
			aFv, gu = aG7 * (Math.floor(gu / aG8) / 16 - aFv - je) / gy, aFz = -2 * (aG2 = u6 * aFv) * (1 + (aG1 = +(player === aG4)) / 8), aG1 = aG1 * aG2 / 4, (aG2 = aG6 * (aFw - jd) / gv) < aFz || gu < aFz || aG6 + aG1 < aG2 || aG7 + aG1 <
			gu || (aFw = aFv * u6, gQ.imageSmoothingEnabled = (aFz = 2 * aFv * fa) < 3, void 0 === (aG1 = aG3[player]) && (aG3[player] = aG1 = p6(player)), player === aG4 && (gQ.setTransform(aFz, 0, 0, aFz, aG2 - 2 * aFz, gu - 2 * aFz), gQ
				.drawImage(aFo[+(eG === aG5)], 0, 0)), gQ.setTransform(aFz, 0, 0, aFz, aG2, gu), gQ.drawImage(aG1, 0, 0), (aFv = Math.floor(function(hV) {
				if (hV < 1e3) return .42;
				if (hV < 1e4) return .34;
				if (hV < 1e6) return .26;
				if (hV < 1e8) return .19;
				return .15
			}(hV) * aFw)) < 6) || (gQ.setTransform(1, 0, 0, 1, 0, 0), 20 <= aFv ? (gQ.font = aY.g1.g2(1, .85 * aFv), gQ.fillText(aY.jl.jm(hV), aG2 + aFw, gu + .93 * aFw + .085 * aFv), (aFv *= a6.a8P(player)) < 6 || (gQ.font = aY.g1.g2(1, aFv), gQ
				.fillText(jn[player], aG2 + aFw, gu + 1.16 * aFw + .1 * aFv))) : (gQ.font = aY.g1.g2(1, aFv), gQ.fillText(aY.jl.jm(hV), aG2 + aFw, gu + aFw + .1 * aFv)));
		gQ.imageSmoothingEnabled = !1, gQ.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function aF7() {
	this.i8 = function() {
		for (var aGA, aF6, aFh = ak.iy.aFh, aFT = ak.iy.aFT, aFf = ak.iy.aFf, eG = ak.iy.mX - 1; 0 <= eG; eG--) aGA = aFT[eG], 0 !== (aF6 = aFh[eG]) && aGA === aFf[eG] && (! function(eG, aGC, gg) {
			var hU, player = ak.iy.wC[eG] >> 3,
				gg = aGC + aj.gT[gg] << 2,
				eG = ak.iy.wD[eG];
			if (a2.eo(gg)) hU = eg;
			else {
				if ((hU = a2.en(gg)) === player) return aY.fQ.m0(player, eG);
				if (!fs(player, hU)) return aW.iR.ly(player, hU, eG)
			}
			player === eX && (b1.ea[13] += eG);
			ed[player].push(aGC << 2), a4.hR(player, eG, hU), c.hS(player, !0)
		}(eG, aj.hE(aGA), aF6 - 1), ak.a6Y.aFX(eG))
	}
}

function aF3() {
	this.aGD = null, this.mi = 512, this.mj = 8, this.mX = 0, this.jO = 0, this.wC = new Uint16Array(this.mi), this.aFe = new Uint32Array(this.mi), this.aFf = new Uint32Array(this.mi), this.aFT = new Uint32Array(this.mi), this.aFg = new Uint16Array(
			this.mi), this.wD = new Uint32Array(this.mi), this.aFc = new Uint16Array(this.mi), this.aFP = new Uint16Array(this.mi), this.aFh = new Uint8Array(this.mi), this.mW = new Uint8Array(eg), this.aFO = new Uint16Array(this.mj * eg), this.cq =
		function() {
			this.jO = 0, this.mX = 0, this.aGD = new Uint8Array(ap.eB + ap.eC), this.mW.fill(0)
		}, this.mm = function(player) {
			var ec = this.mX,
				aGE = aj.hD(al.dl[0]),
				aGF = this.mW[player],
				aGG = (player << 3) + aGF;
			h4[player] = 2, this.wC[ec] = aGG, this.aFe[ec] = aGE, this.aFT[ec] = aGE, this.aFf[ec] = aj.hD(al.dl[1]), this.aFg[ec] = 0, this.wD[ec] = al.di[0], this.aFc[ec] = ak.hG.mm(ec, aj.hF(aGE)), this.aFP[ec] = this.jO, this.aFh[ec] = al.dl[2],
				this.jO = this.jO + 1 & 1023, this.aFO[aGG] = ec, this.mW[player] = aGF + 1, this.mX++
		}, this.fh = function() {
			var aFN = al.dl[3];
			this.aFe[aFN] = this.aFT[aFN], this.aFf[aFN] = aj.hD(al.dl[1]), this.aFg[aFN] = 0, this.aFh[aFN] = al.dl[2]
		}, this.i8 = function() {
			if (b3.iM() % 5 == 3) {
				ak.aF6.i8(), ! function(vK) {
					var eG, aGK, aGL, aGM, aGN, aGE, aGR, aGS, el, ek, aFe = vK.aFe,
						aFf = vK.aFf,
						aFT = vK.aFT,
						wD = vK.wD,
						aFg = vK.aFg,
						aFc = vK.aFc,
						vK = vK.mX,
						aG8 = ap.eB << 4;
					for (eG = vK - 1; 0 <= eG; eG--) aGL = aFT[eG], aGK = aFf[eG], aGL !== aGK && (aGE = aFe[eG], aGR = aGK % aG8 - (aGN = aGE % aG8), aGS = ~~((aGK + .5) / aG8) - (aGE = ~~((aGE + .5) / aG8)), el = ~~Math.sqrt(aGR * aGR + aGS *
						aGS + .5), ek = 4e5 + 2e4 * ~~Math.sqrt(.5 + (Math.sqrt(wD[eG] + .5) << 4)), 65535 <= (ek = aFg[eG] + Math.max(~~((.5 + ek) / el), 1)) ? aFT[eG] = aGM = aGK : (aFg[eG] = ek, aFT[eG] = aGM = aGN + ai.fH(ek * aGR,
						65536) + aG8 * (aGE + ai.fH(ek * aGS, 65536))), aFc[eG] = ak.hG.aGU(aFc[eG], aGL, aGM))
				}(this), ! function(vK) {
					var eG, pV, p2, hk, iN, aGV, aGW, aGX, pQ, gY, jd, je, aGY, aFS, aGZ, pR, aGE, aGc, ec = vK.mX,
						aFT = vK.aFT,
						wC = vK.wC,
						wD = vK.wD,
						hG = ak.hG.hG,
						aGd = hG.length,
						aGe = ak.hG.aGe,
						aG8 = ap.eB << 4,
						aGf = hO,
						aGg = b4.iO,
						ek = (ec - 1) * (b3.iM() % 2);
					for (eG = 0; eG < ec; eG++) {
						for (pV = Math.abs(eG - ek), aGE = aFT[pV], p2 = aj.hF(aGE), pQ = wC[pV] >> 3, jd = aGE % aG8, je = ~~((aGE + .5) / aG8), aGE = wD[pV], aGc = 80 + ~~Math.sqrt(.5 + (Math.sqrt(aGE + .5) << 8)), aFS = Math.min(aGc * aGc,
								262144), aGZ = -1, hk = 0; hk < 9; hk++)
							if (!((aGV = p2 + aGe[hk]) < 0 || aGd <= aGV))
								for (aGX = hG[aGV], aGW = aGX.length, iN = 0; iN < aGW; iN++) aGY = aGX[iN], pR = wC[aGY] >> 3, pQ == pR || aGf && aGg[pQ] === aGg[pR] || (pR = aFT[aGY], (pR = (gY = jd - pR % aG8) * gY + (gY = je - ~~((pR + .5) /
									aG8)) * gY) < aFS && (aGZ = aGY, aFS = pR)); - 1 !== aGZ && (aGE = Math.min(Math.max(1, ai.fH(aGE * (aGc - Math.floor(Math.sqrt(aFS + .5))), 5 * aGc)), wD[aGZ]), wD[pV] -= aGE >> 4, wD[aGZ] -= aGE)
					}
				}(this);
				var eG, hV, wD = (vK = this).wD,
					vK = vK.mX;
				for (eG = vK - 1; 0 <= eG; eG--) hV = wD[eG], 0 < (hV -= Math.max(1, hV >> 7)) ? wD[eG] = hV : ak.a6Y.aFX(eG)
			}
		}
}

function aF4() {
	this.aGh = 32, this.fL = 0, this.fM = 0, this.hH = 0, this.aGi = 0, this.aGj = 4, this.hG = null, this.aGe = new Int16Array(9), this.cq = function() {
		this.hH = 1 + ai.fH(ap.eB - 1, this.aGh), this.aGi = 1 + ai.fH(ap.eC - 1, this.aGh), this.hG = new Array(this.hH * this.aGi), aY.pG.tM(this.hG);
		var fL, fM, aGe = this.aGe,
			g6 = this.hH;
		for (fL = -1; fL <= 1; fL++)
			for (fM = -1; fM <= 1; fM++) aGe[3 * (1 + fM) + 1 + fL] = fM * g6 + fL
	}, this.mm = function(aGl, eG) {
		return this.hG[eG].push(aGl), this.hG[eG].length - 1
	}, this.aGU = function(aGm, aGE, aGK) {
		var aGn, aGo, aGE = aj.hF(aGE),
			aGK = aj.hF(aGK);
		return aGE === aGK ? aGm : (aGn = this.hG[aGE].pop(), this.hG[aGE].length === aGm ? this.mm(aGn, aGK) : (aGo = this.hG[aGE][aGm], this.hG[aGE][aGm] = aGn, ak.iy.aFc[aGn] = aGm, this.mm(aGo, aGK)))
	}
}

function aF9() {
	function sD(aGK, aGp) {
		if (function(aGK, aFL) {
				var gX = aj.hE(aGK),
					aGs = Math.abs(aj.gZ(aFL) - aj.gZ(gX)),
					gX = Math.abs(aj.gb(aFL) - aj.gb(gX));
				return 0 !== Math.max(aGs, gX) && (function(aGE, aGK, aGs, aGt) {
					var aGv = aj.gx(aGE),
						aGE = aj.h0(aGE),
						aGx = aj.gx(aGK),
						aGK = aj.h0(aGK),
						aGx = aGx - aGv,
						aGK = aGK - aGE,
						aH1 = Math.abs(aGx),
						aH2 = Math.abs(aGK),
						aGx = 0 < aGx ? 1 : 3,
						aGK = 0 < aGK ? 2 : 0;
					aH2 < aH1 ? aH5(aGv, aGE, aGv + aH1, aGE + aH2, aGx, aGK, aGs) : aH5(aGE, aGv, aGE + aH2, aGv + aH1, aGK, aGx, aGt)
				}(aGK, aj.hD(aFL), aGs, gX), !0)
			}(aGK, aGp)) {
			if (0 === al.dh[0]) return !!a2.fk(aGp << 2);
			if (function(aFL) {
					if (a2.fk(aFL << 2)) return 1;
					return function(aFL) {
						var eG, gg, aGD = ak.iy.aGD,
							aH9 = aj,
							ec = al.dh[0],
							aHA = 4 * aFL;
						for (eG = ec - 1; 0 <= eG; eG--)
							if (gg = aGD[eG], aHA = aH9.hJ(aHA, gg + 2 & 3), a2.fk(aHA)) return al.dh[0] = eG, al.dl[1] = aHA >> 2, al.dl[2] = 1 + gg, 1;
						return
					}(aFL)
				}(aGp)) {
				var eG, aGp = aj.hE(aGK),
					pI = a1W,
					aGD = ak.iy.aGD,
					ec = al.dh[0] - 1,
					aHA = 4 * aGp,
					gU = aj.gU;
				for (eG = 0; eG < ec; eG++)
					if (aHA += gU[aGD[eG]], 0 !== pI[aHA + 3] || 2 !== pI[aHA + 2]) return !!void 0;
				return !!1
			}
		}
		return !1
	}

	function aH5(aGv, aGw, aGx, aGy, aH3, aH4, aGs) {
		for (var fM, aGD = ak.iy.aGD, ek = 0, aH6 = 0, gC = aGy - aGw, g6 = aGx - aGv, aH7 = aGv % 16, eG = 1; eG <= aGs; eG++) aGD[ek++] = aH3, aGD[ek] = aH4, ek += (fM = (gC * (aH7 + (eG << 4)) + .5) / g6 >> 4) - aH6, aH6 = fM;
		al.dn(al.dh, ek)
	}
	this.ml = function(player, aGp) {
		var gg, gX, gW = aj.gi(player, aGp);
		return gW !== aGp && (gg = aj.gV(gW, aGp), gX = aj.hI(gW, gg), !(!a2.fk(gX << 2) && (gg = aj.gf(gW, aGp, gg), gX = aj.hI(gW, gg), a2.pS(gX << 2) || !a2.fk(gX << 2)) || (al.dl[0] = gX, al.dl[1] = aGp, al.dl[2] = 0, !sD(aj.hD(gX), aGp)) ||
			0 !== al.dl[2] && aj.gq(player, al.dl[1] + aj.gT[al.dl[2] - 1] << 2)))
	}, this.mo = function(aGp) {
		var aGE = ak.iy.aFT[al.dl[3]];
		return al.dl[1] = aGp, al.dl[2] = 0, sD(aGE, aGp)
	}
}

function aF5() {
	var aFn = 32,
		aHC = new Array(2);

	function p6(iN) {
		var fL, fM, fY, gy, gv, gJ = aFn,
			ur = aY.g1.p6(gJ, gJ),
			gQ = aY.g1.getContext(ur, !0),
			gM = aY.g1.getImageData(gQ, gJ, gJ),
			pI = gM.data,
			p2 = (gJ >> 1) - .5,
			aHD = Math.sqrt(p2 * p2);
		for (pI.fill(255), fM = 0; fM < gJ; fM++)
			for (fL = 0; fL < gJ; fL++) gv = fL - p2, gy = fM - p2, fY = 4 * (fM * gJ + fL), gv = 714 * (aHD - Math.sqrt(gv * gv + gy * gy)) / aHD, pI[2 + fY] = iN, pI[3 + fY] = 255 < gv ? 0 : gv;
		return gQ.putImageData(gM, 0, 0), ur
	}
	this.aFQ = -1, this.cq = function() {
		this.aFQ = -1, aHC[0] || (aHC[0] = p6(255), aHC[1] = p6(0))
	}, this.aHE = function(gQ, fa, fL, fM, gS, eG) {
		aY.fQ.fS(eX) && (gQ.setTransform(fa *= 4 / 3 * .625, 0, 0, fa, fL - (gS *= 4 / 3), fM - gS), gQ.drawImage(aHC[+(ak.iy.aFP[eG] === this.aFQ)], 0, 0))
	}
}

function yF() {
	if (iP < 3) return !1;
	if (ai.fH(3 * f2[jH[2]], 2) < f2[jH[0]]) return !1;
	if (f2[jH[0]] + f2[jH[1]] + f2[jH[2]] < uF - ai.fH(uF, 10)) return !1;
	if (8 * Math.min(Math.min(eY[jH[0]], eY[jH[1]]), eY[jH[2]]) < 5 * Math.max(Math.max(eY[jH[0]], eY[jH[1]]), eY[jH[2]])) return !1;
	if (hO) {
		if (b4.iO[jH[0]] === b4.iO[jH[1]]) return !1;
		if (b4.iO[jH[0]] === b4.iO[jH[2]]) return !1;
		if (b4.iO[jH[1]] === b4.iO[jH[2]]) return !1
	}
	return !0
}

function ci() {
	this.size = 501, this.rg = new Uint32Array(this.size), this.tm = new Uint32Array(this.size), this.a1B = new Uint16Array(this.size), this.aC4 = 0, this.aHH = 1, this.iN = 0, this.max = [0, 0, 0], this.ea = 0, this.aHI = ["Avg. Attack Strength",
		"Number Attacks", "Ships sent", "Bots conquered", "Humans conquered", "Attacked by Bots", "Attacked by Humans", "Territorial Loss", "Territorial Income", "Interest Income", "Received Support", "Overall Income", "Commanding Costs",
		"Attack Losses", "Defense Losses", "Shipping Losses", "Transmitted Support", "Overall Expenses"
	], this.cq = function() {
		this.aC4 = 0, this.aHH = 1, this.iN = 0, this.aHJ(), this.aHK()
	}, this.mg = function(player, h7) {
		player === eX && (this.ea[0] += h7, this.ea[1]++, this.ea[12] += al.di[1], this.ea[13] += al.di[0])
	}, this.m1 = function(player, lf) {
		donationsTracker.logDonation(player, lf, al.di[0]);
		player === eX && (k.m1(al.di[0], al.di[1], lf), this.ea[12] += al.di[1], this.ea[16] += al.di[0]), lf === eX && (k.wS(al.di[0], player), this.ea[10] += al.di[0])
	}, this.i8 = function() {
		0 < this.iN-- || this.aHL()
	}, this.aHL = function() {
		0 !== h4[eX] && (this.rg[this.aC4] = f2[eX], this.tm[this.aC4] = eY[eX], this.a1B[this.aC4] = a5.a1C(eX), this.aHM(this.aC4), this.aC4++, this.aC4 === this.size && this.aHN(), this.iN = this.aHH - 1, b2.g3())
	}, this.aHN = function() {
		this.aHJ(), this.aHM(0), this.aC4 = 1 + eU(this.size, 2);
		for (var eG = 1; eG < this.aC4; eG++) this.rg[eG] = this.rg[2 * eG], this.tm[eG] = this.tm[2 * eG], this.a1B[eG] = this.a1B[2 * eG], this.aHM(eG);
		this.aHH *= 2
	}, this.aHJ = function() {
		this.max[0] = this.max[1] = this.max[2] = 0
	}, this.aHK = function() {
		this.ea = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	}, this.aHM = function(eG) {
		this.max[0] = this.rg[eG] > this.max[0] ? this.rg[eG] : this.max[0], this.max[1] = this.tm[eG] > this.max[1] ? this.tm[eG] : this.max[1], this.max[2] = this.a1B[eG] > this.max[2] ? this.a1B[eG] : this.max[2]
	}
}

function cj() {
	this.g6 = 0, this.gC = 0, this.qS = 0, this.qT = 0, this.a28 = 0, this.a29 = 0, this.xC = 0, this.a4y = 0, this.a4h = 0, this.a3T = 0, this.aHO = 0, this.aHP = 0, this.xo = 0, this.g0 = 0, this.a0q = ["Territory", "Balance", "Interest",
		"Numbers"], this.da = !1, this.aHQ = -1, this.aHR = !1, this.aHS = [0, 0], this.cq = function() {
		this.da = !1, this.aHQ = -1, this.aHR = !1, this.resize()
	}, this.resize = function() {
		this.g6 = aK.g6 < 1.369 * aK.gC ? aK.g6 : 1.369 * aK.gC;
		var el = b7.cv.fw() && aK.g6 < aK.gC ? 1 : b7.cv.fw() ? .8 : aK.g6 < aK.gC ? .65 : .59;
		this.g6 = Math.floor(el * this.g6), this.g6 -= b7.cv.fw() && aK.g6 < aK.gC ? 2 * b0.gap + 2 : 0, this.gC = Math.floor(this.g6 / 1.369), this.xo = Math.floor(this.gC / 150), this.xo = Math.max(this.xo, 1.5), this.qS = Math.floor(1 + .02 *
				this.g6), this.qT = Math.floor(1 + .04 * this.g6), this.xC = this.qT, this.a4y = Math.floor(1 + .075 * this.g6), this.a3T = Math.floor(1 + .1125 * this.g6), this.aHO = Math.floor(this.g6 * (b7.cv.fw() ? .03 : .029)), this.aHO =
			Math.max(this.aHO, 4), this.aHP = Math.floor(.035 * this.g6), this.aHP = Math.max(this.aHP, 4), this.a4h = this.gC - 2 * this.xC - this.a4y - this.a3T, this.da && this.aHT()
	}, this.g9 = function(gA, gB) {
		var pn, pm;
		return !!this.da && (pm = gA, pn = gB, gA -= eU(aK.g6 - this.g6, 2), gB -= eU(aK.gC - this.gC, 2), gA < 0 || gB < 0 || gA >= this.g6 || gB >= this.gC || gA >= this.g6 - this.a3T && gB < this.a3T ? 1 < j.g9(pm, pn) || this.o3() : gB < this
			.a3T || (gB < this.gC - this.a4y ? (this.aHR = !0, this.aHQ = (gA - 2 * this.qS - this.a28) / this.a29, 3 !== this.g0 && (b3.d1 = !0)) : (pm = (pm = Math.floor(gA / (this.g6 / this.a0q.length))) < 0 ? 0 : pm >= this.a0q.length ?
				this.a0q.length - 1 : pm) !== this.g0 && (this.g0 = pm, this.aHT(), b3.d1 = !0)), !0)
	}, this.tE = function() {
		var aHU = Math.floor((this.aHS[0] + h8) / h9),
			aHV = Math.floor((this.aHS[1] + hA) / h9);
		aHU < 1 || aHV < 1 || aHU >= ap.eB - 1 || aHV >= ap.eC - 1 || console.log(aHU + " " + aHV)
	}, this.sZ = function(gA, gB) {
		return this.aHS[0] = gA, this.aHS[1] = gB, !(!this.da || !this.aHR || (gA -= eU(aK.g6 - this.g6, 2), gB = this.aHQ, this.aHQ = (gA - 2 * this.qS - this.a28) / this.a29, (0 <= this.aHQ && this.aHQ <= 1 || 0 <= gB && gB <= 1) && (b3.d1 = !
			0), 0))
	}, this.sz = function() {
		this.aHR && (this.aHR = !1)
	}, this.tA = function() {
		this.da ? this.o3() : this.show()
	}, this.show = function() {
		b1.aC4 < 2 || (this.da = !0, this.aHT())
	}, this.o3 = function() {
		this.da = !1, this.aHQ = -1, b3.d1 = !0
	}, this.aHT = function() {
		this.g0 < 2 ? this.a28 = n.measureText(aY.jl.jm(b1.max[this.g0]), aY.g1.g2(0, this.aHO)) : 2 === this.g0 && (this.a28 = n.measureText(aY.jl.u1(6, 2), aY.g1.g2(0, this.aHO))), this.a29 = this.g6 - 2 * this.qS - this.a28 - this.qT
	}, this.g3 = function() {
		this.da && this.aHT()
	}, this.gF = function() {
		this.da && this.yi()
	}, this.yi = function() {
		var fL = eU(aK.g6 - this.g6, 2),
			fM = eU(aK.gC - this.gC, 2);
		gG.setTransform(1, 0, 0, 1, fL, fM), gG.fillStyle = aZ.kb, gG.fillRect(0, this.a3T, this.g6, this.gC - this.a3T), this.aHW(), this.aHX(), gG.strokeRect(0, 0, this.g6, this.gC), aY.g1.textAlign(gG, 2), gG.font = aY.g1.g2(0, this.aHO),
			0 === this.g0 ? this.aHY(b1.rg, fL, fM) : 1 === this.g0 ? this.aHY(b1.tm, fL, fM) : 2 === this.g0 ? this.aHZ(fL, fM) : 3 === this.g0 && (this.aHa(fL, fM), this.aHb(fL, fM)), j.vY(Math.floor(fL + this.g6 - .725 * this.a3T), Math.floor(
				fM + .275 * this.a3T), Math.floor(.45 * this.a3T)), gG.setTransform(1, 0, 0, 1, 0, 0)
	}, this.aHW = function() {
		var eG, dc;
		for (gG.lineWidth = this.xo, aY.g1.textBaseline(gG, 1), aY.g1.textAlign(gG, 1), gG.strokeStyle = aZ.gH, gG.font = aY.g1.g2(1, this.aHP), dc = this.g6 / this.a0q.length, gG.fillStyle = aZ.ku, gG.fillRect(this.g0 * dc, this.gC - this.a4y,
				dc, this.a4y), gG.fillStyle = aZ.gH, gG.fillRect(0, this.gC - this.a4y - .5 * this.xo, this.g6, this.xo), eG = 1; eG <= 3; eG++) gG.fillRect(eG * dc, this.gC - this.a4y, this.xo, this.a4y);
		for (eG = this.a0q.length - 1; 0 <= eG; eG--) gG.fillText(this.a0q[eG], (eG + .5) * dc, this.gC - .46 * this.a4y)
	}, this.aHX = function() {
		gG.fillStyle = aZ.lB, gG.fillRect(0, 0, this.g6, this.a3T), gG.fillStyle = aZ.gH, gG.fillRect(0, this.a3T - .5 * this.xo, this.g6, this.xo), gG.font = aY.g1.g2(1, .39 * this.a3T), gG.fillText("Statistics", Math.floor(this.g6 / 2), Math
			.floor(.55 * this.a3T))
	}, this.aHY = function(dp, fL, fM) {
		var p2 = b1.max[this.g0],
			fu = (gG.setTransform(1, 0, 0, 1, fL + 2 * this.qS + this.a28, fM + this.xC + this.a3T), gG.lineWidth = 2, this.a4h / Math.sqrt(p2));
		gG.beginPath(), gG.moveTo(this.a29, this.a4h - fu * Math.sqrt(dp[b1.aC4 - 1]));
		for (var eG = b1.aC4 - 2; 0 <= eG; eG--) gG.lineTo(eG * this.a29 / (b1.aC4 - 1), this.a4h - fu * Math.sqrt(dp[eG]));
		gG.stroke();
		fL = this.vY(dp, fu, .5);
		fL < .95 && gG.fillText(aY.jl.jm(p2), -this.qS, 0), .05 < Math.abs(fL - .5) && gG.fillText(aY.jl.jm(Math.floor(p2 / 4)), -this.qS, Math.floor(this.a4h / 2)), .05 < fL && gG.fillText("0", -this.qS, this.a4h)
	}, this.aHZ = function(fL, fM) {
		gG.setTransform(1, 0, 0, 1, fL + 2 * this.qS + this.a28, fM + this.xC + this.a3T), gG.lineWidth = 2;
		var fu = this.a4h / Math.max(b1.max[this.g0], 1);
		gG.beginPath(), gG.moveTo(this.a29, this.a4h - fu * b1.a1B[b1.aC4 - 1]);
		for (var eG = b1.aC4 - 2; 0 <= eG; eG--) gG.lineTo(eG * this.a29 / (b1.aC4 - 1), this.a4h - fu * b1.a1B[eG]);
		gG.stroke();
		fL = this.vY(b1.a1B, fu, 1), fM = b1.max[this.g0] / 100;
		fL < .95 && gG.fillText(aY.jl.u1(fM, 2), -this.qS, 0), .05 < Math.abs(fL - .5) && gG.fillText(aY.jl.u1(fM / 2, 2), -this.qS, Math.floor(this.a4h / 2)), .05 < fL && gG.fillText(aY.jl.u1(0, 2), -this.qS, this.a4h)
	}, this.aHa = function(fL, fM) {
		gG.setTransform(1, 0, 0, 1, fL + .34 * this.g6, fM + 2 * this.xC + this.a3T), aY.g1.textAlign(gG, 2);
		for (var a0a = this.gC - 4 * this.xC - this.a4y - this.a3T, eG = 7; 0 <= eG; eG--) gG.fillText(b1.aHI[eG], 0, eG * a0a / 7);
		gG.setTransform(1, 0, 0, 1, fL + .39 * this.g6, fM + 2 * this.xC + this.a3T), aY.g1.textAlign(gG, 0);
		fL = b1.ea[1];
		for (gG.fillText(aY.jl.u1(b1.ea[0] / (10 * (fL < 1 ? 1 : fL)), 1), 0, 0), eG = 6; 1 <= eG; eG--) gG.fillText(b1.ea[eG].toString(), 0, eG * a0a / 7);
		gG.fillText(aY.jl.u1(100 * (1 - f2[eX] / b1.ea[7]), 0), 0, a0a)
	}, this.aHb = function(fL, fM) {
		gG.setTransform(1, 0, 0, 1, fL + .79 * this.g6, fM + 2 * this.xC + this.a3T), aY.g1.textAlign(gG, 2);
		var eG, a0a = this.gC - 4 * this.xC - this.a4y - this.a3T;
		for (gG.fillStyle = aZ.kp, eG = 2; 0 <= eG; eG--) gG.fillText(b1.aHI[eG + 8], 0, eG * a0a / 9);
		for (gG.fillStyle = aZ.ko, gG.fillText(b1.aHI[11], 0, 3 * a0a / 9), gG.fillStyle = aZ.l3, eG = 8; 4 <= eG; eG--) gG.fillText(b1.aHI[eG + 8], 0, eG * a0a / 9);
		gG.fillStyle = aZ.l2, gG.fillText(b1.aHI[17], 0, 9 * a0a / 9), gG.fillStyle = aZ.kp;
		var wA = aY.jl.jm(b1.ea[8] + b1.ea[9] + b1.ea[10] + b1.ea[11]),
			aHc = gG.measureText(wA).width,
			fL = (gG.setTransform(1, 0, 0, 1, fL + .83 * this.g6 + aHc, fM + 2 * this.xC + this.a3T), gG.fillText(aY.jl.jm(b1.ea[8]), 0, 0), gG.fillText(aY.jl.jm(b1.ea[9]), 0, a0a / 9), gG.fillText(aY.jl.jm(b1.ea[10]), 0, 2 * a0a / 9), gG
				.fillStyle = aZ.ko, gG.fillText(wA, 0, 3 * a0a / 9), gG.fillStyle = aZ.l3, b1.ea[13] - a4.a7U(eX)),
			aHc = (gG.fillText(aY.jl.jm(b1.ea[12]), 0, 4 * a0a / 9), gG.fillText(aY.jl.jm(fL), 0, 5 * a0a / 9), gG.fillText(aY.jl.jm(b1.ea[14]), 0, 6 * a0a / 9), gG.fillText(aY.jl.jm(b1.ea[15]), 0, 7 * a0a / 9), gG.fillText(aY.jl.jm(b1.ea[16]),
				0, 8 * a0a / 9), b1.ea[12] + fL + b1.ea[14] + b1.ea[15] + b1.ea[16] + b1.ea[17]);
		gG.fillStyle = aZ.l2, gG.fillText(aY.jl.jm(aHc), 0, a0a), gG.fillStyle = aZ.gH
	}, this.vY = function(dp, fu, zJ) {
		var eG, dE, dq;
		return this.aHQ < 0 || 1 < this.aHQ ? .25 : (eG = this.aHQ * (b1.aC4 - 1), dq = dp[dE = Math.floor(eG)], dq += (eG - dE) * (dp[dE < b1.aC4 - 1 ? dE + 1 : dE] - dq), gG.strokeStyle = aZ.kg, .04 < this.aHQ && this.aHf(0, this.a4h - fu *
				Math.pow(dq, zJ), eG * this.a29 / (b1.aC4 - 1), this.a4h - fu * Math.pow(dq, zJ)), .04 < dq / b1.max[this.g0] && this.aHf(eG * this.a29 / (b1.aC4 - 1), this.a4h, eG * this.a29 / (b1.aC4 - 1), this.a4h - fu * Math.pow(dq, zJ)),
			gG.fillStyle = aZ.l5, gG.beginPath(), gG.arc(eG * this.a29 / (b1.aC4 - 1), this.a4h - fu * Math.pow(dq, zJ), Math.max(2, .014 * this.gC), 0, 2 * Math.PI), gG.fill(), dp = this.aHQ * b3.a1D, dp = 0 === h4[eX] ? Math.floor(dp * u
				.a1K) : Math.floor(dp * b3.iM()), gG.fillStyle = aZ.gH, gG.fillText(1 === zJ ? aY.jl.u1(dq / 100, 2) : aY.jl.jm(Math.floor(dq)), -this.qS, this.a4h - fu * Math.pow(dq, zJ)), aY.g1.textAlign(gG, 1), gG.fillText(t.zv(dp), eG *
				this.a29 / (b1.aC4 - 1), this.a4h + this.aHO - (b7.cv.fw() ? 2 : 0) - this.xo), aY.g1.textAlign(gG, 2), fu * Math.pow(dq, zJ) / this.a4h)
	}, this.aHf = function(jd, je, jf, jg) {
		gG.beginPath(), gG.moveTo(jd, je), gG.lineTo(jf, jg), gG.stroke()
	}
}

function bI() {
	this.aHg = "https://", this.aHh = this.aHg + "territorial.io/", this.aC5 = this.aHh + "changelog", this.aCA = this.aHh + "terms", this.aHi = this.aHh + "cookie_policy", this.aCB = this.aHh + "privacy", this.aC9 = this.aHh + "tutorial", this.aC8 =
		this.aHh + "players", this.aC6 = this.aHh + "clans", this.aC7 = this.aHh + "clan-results", this.a2P = this.aHg + "play.google.com/store/apps/details?id=territorial.io", this.s5 = this.aHg + "apps.apple.com/app/id1581110913", this.a2Q = this
		.aHg + "www.youtube.com/watch?v=toZTQ8aRdFc", this.a2R = this.aHg + "discord.gg/pthqvpTXmh", this.a2S = this.aHg + "www.instagram.com/davidtschacher/"
}

function cQ() {
	this.iy = new aHj, this.qK = new aHk, this.cq = function() {
		this.iy.cq()
	}, this.i8 = function() {
		0 !== this.iy.wf && this.iy.wf--
	}
}

function aHk() {
	this.gF = function() {
		if (0 !== am.iy.wf && (gG.globalAlpha = Math.min(am.iy.wf / 580, 1), gG.drawImage(am.iy.aHn, 1 + p.jh(), 1 + p.gE()), gG.globalAlpha = 1, fd)) {
			var eG, jd = h8 / h9,
				je = hA / h9,
				jf = (aK.g6 + h8) / h9,
				jg = (aK.gC + hA) / h9,
				ek = am.iy.aHo * h9,
				aHp = am.iy.aHp;
			for (eG = h3 - 1; 0 <= eG; eG--) ! function(eG, ek, jd, je, jf, jg, aHp) {
				0 === h4[eG] || 0 === f2[eG] || (jf = aK.g6 * ((hw[eG] + hv[eG] + 1) / 2 - jd) / (jf - jd) - .5 * ek, jd = aK.gC * ((hz[eG] + hy[eG] + 1) / 2 - je) / (jg - je) - .5 * ek, jf > aK.g6) || jd > aK.gC || jf < -ek || jd < -ek || (
					gG.setTransform(h9, 0, 0, h9, jf, jd), gG.drawImage(aHp[hO ? b4.iO[eG] : 1], 0, 0))
			}(eG, ek, jd, je, jf, jg, aHp);
			gG.setTransform(h9, 0, 0, h9, 0, 0)
		}
	}
}

function aHj() {
	this.aHo = 28, this.wf = 0, this.aHn = null;
	var aHr = this.aHp = null;

	function aHu(gJ, aHw) {
		var fL, fM, fY, gv, ur = aY.g1.p6(gJ, gJ),
			gQ = aY.g1.getContext(ur, !0),
			gM = aY.g1.getImageData(gQ, gJ, gJ),
			pI = gM.data,
			p2 = (gJ >> 1) - .5,
			aHx = .5 + p2;
		for (aHx *= aHx, fM = 0; fM < gJ; fM++)
			for (fL = 0; fL < gJ; fL++) gv = (gv = fL - p2) * gv + (gv = fM - p2) * gv, pI[fY = 4 * (fM * gJ + fL)] = aHw[0], pI[1 + fY] = aHw[1], pI[2 + fY] = aHw[2], pI[3 + fY] = (aHx - gv) * aHw[3] / aHx;
		return gQ.putImageData(gM, 0, 0), ur
	}

	function aHE(eG, gQ, ur, gJ) {
		var fL;
		0 !== h4[eG] && 0 !== f2[eG] && (fL = hw[eG] + hv[eG] + 1 - gJ - 2 >> 1, gJ = hz[eG] + hy[eG] + 1 - gJ - 2 >> 1, gQ.drawImage(ur[hO ? b4.iO[eG] : eG < h3 ? 1 : 0], fL, gJ))
	}
	this.cq = function() {
		var vK;
		this.wf = 700,
			function(vK) {
				var eG, gJ = vK.aHo;
				if (vK.aHp = [], aHr = [], hO)
					for (eG = 0; eG <= uI; eG++) vK.aHp.push(aHu(gJ, b4.aHv[b4.rW[eG]])), aHr.push(aHu(gJ >> 1, b4.aHv[b4.rW[eG]]));
				else vK.aHp.push(aHu(gJ, b4.aHv[0])), vK.aHp.push(aHu(gJ, b4.aHv[4])), aHr.push(aHu(gJ >> 1, b4.aHv[0]))
			}(this),
			function(vK, aHy) {
				var eG, aHn = vK.aHn,
					gQ = aY.g1.getContext(aHn, !0),
					ec = eg,
					gJ = vK.aHo >> 1;
				gQ.imageSmoothingEnabled = !1, gQ.setTransform(1, 0, 0, 1, 0, 0), aHy && gQ.clearRect(0, 0, aHn.width, aHn.height);
				for (eG = h3; eG < ec; eG++) aHE(eG, gQ, aHr, gJ)
			}(this, null !== (vK = this).aHn && vK.aHn.width === ap.eB - 2 && vK.aHn.height === ap.eC - 2 || (vK.aHn = aY.g1.p6(ap.eB - 2, ap.eC - 2), !1))
	}, this.uC = function() {
		for (var ec = h3, gJ = this.aHo, aHp = this.aHp, gQ = aY.g1.getContext(this.aHn, !0), eG = 0; eG < ec; eG++) aHE(eG, gQ, aHp, gJ)
	}
}

function cR() {
	this.aHz = -1, this.cq = function() {
		this.aHz = -1
	}, this.i8 = function() {
		-1 !== this.aHz && ao.r4.rC(this.aHz)
	}, this.lv = function(player) {
		return !!j.vX(player) && (1 === iP ? (this.aHz = player, ip && fd && mb.i8()) : (k.rA(player, player === eX ? 21 : 22), 8 === im ? this.aHz = 1 - player : ip ? (a6U(player), a9C(), fd && mb.i8()) : this.aI0(player)), !0)
	}, this.mY = function(player) {
		1 === rJ && 0 !== h4[player] && 2 !== h5[player] && (8 === im ? this.aHz = 1 - player : this.aI0(player)), k.rA(player, 4)
	}, this.aI0 = function(player) {
		fd ? (a6U(player), a9C()) : aQ.a98(player)
	}
}

function cc() {
	this.a4F = ["rgba(130,130,130,0.88)", "rgba(130,12,12,0.88)", "rgba(12,130,12,0.88)", "rgba(12,12,130,0.88)", "rgba(130,130,12,0.88)", "rgba(130,12,130,0.88)", "rgba(12,130,130,0.88)", "rgba(130,130,130,0.88)", "rgba(0,0,0,0.88)"], this.a0Z = [aZ
		.gH, "rgb(255,120,120)", "rgb(0,230,0)", "rgb(150,150,255)", "rgb(240,240,25)", "rgb(255,70,255)", "rgb(25,240,240)", aZ.gH, "rgb(170,170,170)"
	], this.aI1 = [aZ.gH, "rgb(255,0,0)", "rgb(0,255,0)", "rgb(0,0,255)", "rgb(255,255,0)", "rgb(255,0,255)", "rgb(0,255,255)", aZ.gH, aZ.jj], this.aI2 = [aZ.jj, aZ.gH, aZ.gH, aZ.gH, aZ.jj, aZ.jj, aZ.jj, aZ.jj, aZ.gH];
	var aI3 = ["255,255,255", "0,0,0", "255,4,4", "200,4,4", "4,255,4", "4,180,4", "255,195,195", "90,3,3", "200,255,200", "3,84,3"],
		aI4 = (this.a8d = ["rgba(" + aI3[0] + ",", "rgba(" + aI3[1] + ",", "rgba(" + aI3[2] + ",", "rgba(" + aI3[3] + ",", "rgba(" + aI3[4] + ",", "rgba(" + aI3[5] + ",", "rgba(" + aI3[6] + ",", "rgba(" + aI3[7] + ",", "rgba(" + aI3[8] + ",",
			"rgba(" + aI3[9] + ","
		], this.a8e = ["rgb(" + aI3[0] + ")", "rgb(" + aI3[1] + ")", "rgb(" + aI3[2] + ")", "rgb(" + aI3[3] + ")", "rgb(" + aI3[4] + ")", "rgb(" + aI3[5] + ")", "rgb(" + aI3[6] + ")", "rgb(" + aI3[7] + ")", "rgb(" + aI3[8] + ")", "rgb(" + aI3[
			9] + ")"
		], this.fv = ["White", "Red", "Green", "Blue", "Yellow", "Magenta", "Cyan", "White", "Black"], this.aHv = [
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
	this.rW = [0, 1, 2, 3, 4, 5, 6, 7, 8], this.iO = new Uint8Array(eg), this.re = null, this.rf = null, this.cq = function(qW) {
		this.iO.fill(0), this.aI5(), hO && (aU.ij && aU.ik.a7D ? this.a5o() : 9 === im ? this.aI6() : this.i8(qW))
	}, this.a5o = function() {
		var eG, ec = po;
		for (this.rW = [0, 1, 2, 3, 4, 5, 6, 7, 8], eG = 0; eG < ec; eG++) this.iO[eG] = aU.ik.a7D[eG]
	}, this.aI5 = function() {
		for (var eG = this.rW.length - 1; 0 <= eG; eG--) this.rW[eG] = eG;
		this.re = [], this.rf = []
	}, this.aI6 = function() {
		for (var eG = h3 + aM.a8z - 1; 0 <= eG; eG--) this.iO[eG] = 1;
		for (eG = h3 + aM.a8z; eG < eg; eG++) this.iO[eG] = 2;
		this.rW[1] = 7, this.rW[2] = 8
	}, this.i8 = function(qW) {
		var gc = new Uint8Array(h3),
			gd = new Uint8Array(h3),
			aI7 = new Uint16Array(8),
			aI8 = new Uint16Array(this.rW.length);
		this.aI9(qW, gc, gd, aI7), this.a5m(aI7), ip || this.aIA(aI8, gc, gd), this.aIB(gc, gd, aI8), ip ? this.aIC() : this.aID()
	}, this.aI9 = function(qW, gc, gd, aIE) {
		for (var hk, dE, aIF, ec = this.rW.length - 1, dp = new Uint16Array(ec), eG = h3 - 1; 0 <= eG; eG--) {
			for (hk = ec; 1 <= hk; hk--) dp[hk - 1] = Math.abs(4 * qW[eG].a4u[0] - aI4[hk][0]) + Math.abs(4 * qW[eG].a4u[1] - aI4[hk][1]) + Math.abs(4 * qW[eG].a4u[2] - aI4[hk][2]);
			for (aIF = 768, hk = ec - 1; 0 <= hk; hk--) dp[dE = (hk + eG) % ec] < aIF && (aIF = dp[dE], gc[eG] = dE);
			for (aIE[gc[eG]] += 4, aIF = 768, hk = ec - 1; 0 <= hk; hk--) dp[dE = (hk + eG) % ec] < aIF && dE !== gc[eG] && (aIF = dp[dE], gd[eG] = dE);
			aIE[gd[eG]]++
		}
	}, this.a5m = function(aIE) {
		for (var hk, up, ec = this.rW.length - 1, eG = ec; 0 <= eG; eG--) this.rW[eG] = eG;
		for (eG = ec - 1; 0 <= eG; eG--) aIE[eG]++;
		for (eG = 1; eG <= ec; eG++) {
			for (up = 0, hk = 1; hk < ec; hk++) aIE[hk] > aIE[up] && (up = hk);
			aIE[up] = 0, this.rW[eG] = up + 1
		}
	}, this.aIA = function(aI8, gc, gd) {
		var eG, hk, aIG, iN, el, dE, kI, tc, aIH = this.rW.length - 1,
			aII = new Uint16Array(aIH),
			aIJ = [],
			xC = Math.max(h3 + 1 >> 1, 6);
		loop: for (eG = 0; eG < h3; eG++)
			if (null !== (aIG = aY.jl.u5(wd[eG]))) {
				for (hk = this.re.length - 1; 0 <= hk; hk--)
					if (aIG === this.re[hk] && this.rf[hk].length < xC) {
						this.rf[hk].push(eG);
						continue loop
					} this.re.push(aIG), aIJ.push(!1), this.rf.push([eG])
			}
		for (hk = this.re.length - 1; 0 <= hk; hk--) {
			for (el = -1, iN = this.re.length - 1; 0 <= iN; iN--) !aIJ[iN] && (-1 === el || this.rf[iN].length > this.rf[el].length) && (el = iN);
			for (iN = aIH - 1; 0 <= iN; iN--) aII[iN] = 1;
			for (iN = this.rf[el].length - 1; 0 <= iN; iN--) aII[gc[this.rf[el][iN]]] += 3, aII[gd[this.rf[el][iN]]]++;
			for (eG = aIH - 1; 0 <= eG; eG--) {
				for (dE = el % aIH, iN = aIH - 1; 0 <= iN; iN--) aII[iN] > aII[dE] && (dE = iN);
				for (kI = -1, iN = uI; 0 < iN; iN--)
					if (this.rW[iN] === dE + 1) {
						kI = iN;
						break
					} if (aII[dE] = 0, -1 !== kI) {
					for (tc = 0, iN = uI; 0 < iN; iN--) aI8[kI] > aI8[iN] && tc++;
					if (tc !== uI - 1) {
						for (iN = this.rf[el].length - 1; 0 <= iN; iN--) aI8[kI]++, this.iO[this.rf[el][iN]] = kI;
						break
					}
				}
			}
			aIJ[el] = !0
		}
	}, this.aIB = function(gc, gd, aI8) {
		for (var eG, gu, ec = this.rW.length - 1, border = eU(h3, uI), aIK = (0 < h3 % uI && border++, new Uint8Array(1 + ec)), hk = ec; 1 <= hk; hk--) aIK[this.rW[hk]] = hk;
		for (eG = 0; eG < h3; eG++) gu = aIK[gc[eG] + 1], 0 === this.iO[eG] && gu <= uI && aI8[gu] < border && (aI8[gu]++, this.iO[eG] = gu);
		for (eG = 0; eG < h3; eG++) gu = aIK[gd[eG] + 1], 0 === this.iO[eG] && gu <= uI && aI8[gu] < border && (aI8[gu]++, this.iO[eG] = gu);
		for (hk = uI; 1 <= hk; hk--)
			for (eG = h3 - 1; 0 <= eG && !(aI8[hk] >= border); eG--) 0 === this.iO[eG] && (aI8[hk]++, this.iO[eG] = hk)
	}, this.aIC = function() {
		var eG, hb, aIE = new Uint16Array(uI);
		for (aIE[uI - 1] = eg, eG = uI - 2; 0 <= eG; eG--) aIE[eG] = z.iq[eG].wN;
		for (aIE[0]--, hb = 0 === aIE[0] ? 1 : 0, eG = h3; eG < eg; eG++) this.iO[eG] = hb + 1, aIE[hb]--, aIE[hb] <= 0 && hb++
	}, this.aID = function() {
		for (var eG = h3; eG < eg; eG++) this.iO[eG] = 1 + eG % uI
	}
}

function f3() {
	for (var fL, fM, eG = e2 - 1; 0 <= eG; eG--) fL = eU(e4[eG], 4) % ap.eB, fM = eU(e4[eG], 4 * ap.eB), hw[dy] = hw[dy] > fL ? fL : hw[dy], hz[dy] = hz[dy] > fM ? fM : hz[dy], hv[dy] = hv[dy] < fL ? fL : hv[dy], hy[dy] = hy[dy] < fM ? fM : hy[dy]
}

function eL() {
	var el, ej, eG, ec = ed[dy].length;
	loop: for (eG = ec - 1; 0 <= eG; eG--) {
		for (el = 3; 0 <= el; el--)
			if (ej = ed[dy][eG] + e7[el], a2.eo(ej) || a2.em(ej) && a2.en(ej) !== dy) {
				a2.hY(ed[dy][eG], dy);
				continue loop
			} ed[dy][eG] = ed[dy][ec - 1], ed[dy].pop(), ec--
	}
}

function eM() {
	var el, ej, aIL, aIM, ec = eu[dy].length;
	loop: for (var eG = ec - 1; 0 <= eG; eG--) {
		for (aIL = aIM = !1, el = 3; 0 <= el; el--) {
			if (ej = eu[dy][eG] + e7[el], a2.a5x(ej, dy)) continue loop;
			aIL = aIL || a2.fk(ej), aIM = aIM || a2.pS(ej)
		}
		aIL ? ev[dy].push(eu[dy][eG]) : aIM ? ey[dy].push(eu[dy][eG]) : a2.q7(eu[dy][eG], dy), eu[dy][eG] = eu[dy][ec - 1], eu[dy].pop(), ec--
	}
}

function es() {
	f2[e1] -= e2
}

function et(border) {
	for (var ec = border.length, eG = ec - 1; 0 <= eG; eG--) a2.qF(e1, border[eG]) || (border[eG] = border[ec - 1], border.pop(), ec--)
}

function ew(border) {
	for (var ec = border.length, eG = ec - 1; 0 <= eG; eG--) !a2.qF(e1, border[eG]) && a2.ee(border[eG]) && (border[eG] = border[ec - 1], border.pop(), ec--)
}

function ex(border) {
	for (var el, ej, ec = border.length, eG = ec - 1; 0 <= eG; eG--)
		for (el = 3; 0 <= el; el--)
			if (ej = border[eG] + e7[el], a2.a5x(ej, e1)) {
				eu[e1].push(border[eG]), border[eG] = border[ec - 1], border.pop(), ec--;
				break
			}
}

function ez() {
	for (var el, ej, eG = e2 - 1; 0 <= eG; eG--)
		for (el = 3; 0 <= el; el--) ej = e4[eG] + e7[el], a2.a5y(e1, ej) && a2.a5z(ej) && (eu[e1].push(ej), a2.ef(ej, e1))
}

function f0() {
	var fL, fM;
	loop: for (; hz[e1] < hy[e1];) {
		for (fL = hv[e1]; fL >= hw[e1]; fL--)
			if (a2.qF(e1, 4 * (hz[e1] * ap.eB + fL))) break loop;
		hz[e1]++
	}
	loop: for (; hz[e1] < hy[e1];) {
		for (fL = hv[e1]; fL >= hw[e1]; fL--)
			if (a2.qF(e1, 4 * (hy[e1] * ap.eB + fL))) break loop;
		hy[e1]--
	}
	loop: for (; hw[e1] < hv[e1];) {
		for (fM = hy[e1]; fM >= hz[e1]; fM--)
			if (a2.qF(e1, 4 * (fM * ap.eB + hw[e1]))) break loop;
		hw[e1]++
	}
	loop: for (; hw[e1] < hv[e1];) {
		for (fM = hy[e1]; fM >= hz[e1]; fM--)
			if (a2.qF(e1, 4 * (fM * ap.eB + hv[e1]))) break loop;
		hv[e1]--
	}
}

function fs(player, hU) {
	return 0 === b4.iO[player] || b4.iO[player] !== b4.iO[hU]
}

function fq(player, hU) {
	for (var dE, aIN = a4.eH(player), eG = 0; eG < aIN; eG++)
		if (0 === a4.eI(player, eG))
			if ((dE = a4.eN(player, eG)) === eg) {
				if (hU === eg) return !1;
				if (fo(hU)) return !0
			} else if (hU === eg) {
		if (fo(dE)) return !0
	} else if (ft(hU, dE)) return !0;
	return !1
}

function fo(player) {
	for (var eG, ek, ec = eu[player].length, el = 3; 0 <= el; el--)
		for (ek = e7[el], eG = 0; eG < ec; eG++)
			if (a2.eo(eu[player][eG] + ek)) return !0;
	return !1
}

function ft(tj, tk) {
	var eG, dc, el, ek, ej, aGF = eu[tj].length,
		aGG = eu[tk].length;
	for (aGG < aGF && (dc = tj, tj = tk, tk = dc, dc = aGF, aGF = aGG, 0), el = 3; 0 <= el; el--)
		for (ek = e7[el], eG = 0; eG < aGF; eG++)
			if (ej = eu[tj][eG] + ek, a2.em(ej) && a2.en(ej) === tk) return !0;
	return !1
}

function aIO() {
	this.i8 = function() {
		at.dI.dY(), l.i8(), w.i8(), aK.i8(), aN.iy.i8(), aJ.a3j(), b6.i8(), b8.a46.i8(), b3.d1 && (b3.d1 = !1, x.gF())
	}
}

function aIP() {
	this.db = b3.db, this.g0 = 0, this.aIQ = 0, this.a3e = 0, this.aIR = null, this.aIS = 7, this.wg = 0, this.cq = function() {
		this.a3e = 0, this.aIR = [], this.g0 = 0, this.aIQ = 0
	}, this.aDA = function(mK) {
		var eG;
		if (fd) this.a1E(mK);
		else if (this.aIR.push(mK), 2 === rJ) {
			for (eG = 0; eG < this.aIR.length; eG++) aW.lX.i8(this.aIR[eG]);
			this.aIR = []
		}
	}, this.a1E = function(mK) {
		aW.lX.i8(mK), aX.i8(), t.a1E(this.a3e), this.a3e === uJ ? (mb.i8(), this.a3e = 0, this.g0 = 0, this.aIQ = 0, this.db = b3.db) : (this.a3e++, a6.uB(), a6.j7(!0), ay.a1U())
	}, this.i8 = function() {
		aK.i8(), fd ? (b3.d1 = t.a1E(-1) || b3.d1, j8()) : (0 !== this.g0 || b3.db >= this.db && (this.db += b3.a1D * Math.floor(1 + (b3.db - this.db) / b3.a1D), 2 === rJ ? iw() : this.aIT(), this.g0++, 27 < b3.db - this.wg)) && this.aIU(), j4(),
			b3.d1 && (b3.d1 = !1, qI()), this.wg = b3.db
	}, this.aIU = function() {
		b3.d1 = !0, j6(), this.g0 = 0
	}, this.aIT = function() {
		var aIV, eG;
		if (this.aIQ !== 7 * this.a3e) j1(), ay.a1U();
		else {
			for (aIV = !1; this.aIW() && (aIV = !0, j1(), 0 < this.aIR.length);)
				for (eG = this.aIS - 2; 0 <= eG; eG--) j1();
			aIV ? ay.a1U() : (iw(), ay.uE())
		}
	}, this.aIW = function() {
		return 0 < this.aIR.length && (this.a3e++, aW.lX.i8(this.aIR[0]), this.aIR.shift(), !0)
	}
}

function aIX() {
	var aIY, aIZ, aIa, a3e, aIb, g0 = 0,
		db = b3.db;

	function aIe() {
		! function() {
			if (!fd) return;
			if (ip) return;
			return aIb % 7 != 0 ? aIb++ : a3e === uJ ? (aIh(), t.a1E(a3e), mb.i8()) : (aIh(), aIb++, a3e++, a6.uB(), a6.j7(!0)), 1
		}() && (aIh(), j1())
	}

	function aIf() {
		g0 = 0, (fd ? (b3.d1 = t.a1E(a3e - (aIb % 7 == 0 ? 0 : 1) + aIb % 7 / 7) || b3.d1, j8) : j.fP || !aa.vR ? j8 : (b3.d1 = !0, j6))()
	}

	function aIh() {
		var eG, ec, aIi = aX.mZ.aDl,
			dq = aX.mZ.aDm,
			ds = aX.mZ.aDn,
			du = aX.mZ.aDo,
			aIj = aX.mZ.aDp,
			aIk = aX.mZ.aDq;
		if (aIY >= aIk.length) k.sH("Replay file smaller than expected."), ao.r4.rC(-1);
		else if (aIk = aIk[aIY], aIj[aIY]) {
			for (ec = aIZ + aIk, eG = aIZ; eG < ec; eG++) aW.lX.mM(aIi[eG], dq[eG], ds[eG], du[eG]);
			aIZ += aIk, aIY++
		} else ++aIa >= aIk && (aIY++, aIa = 0)
	}
	this.aIQ = 0, this.cq = function() {
		aIb = a3e = aIa = aIZ = aIY = 0
	}, this.i8 = function() {
		var aGd;
		aK.i8(), aa.yd() < 1.7 ? 0 === g0 ? b3.db >= db && (aGd = b3.a1D / aa.yd(), db += aGd * Math.floor(1 + (b3.db - db) / aGd), 2 === rJ || j.fP || !aa.vR ? iw() : (aIe(), ay.a1U()), g0++) : aIf() : function() {
			var aGd;
			if (b3.db >= db)
				if (2 === rJ || j.fP || !aa.vR) iw(), db = b3.db;
				else {
					for (aGd = b3.a1D / aa.yd(), 16 < (b3.db - db) / aGd && (db = b3.db - 16 * aGd); b3.db >= db && 2 !== rJ;) db += aGd, aIe();
					ay.a1U()
				} aIf()
		}(), j4(), b3.d1 && (b3.d1 = !1, qI())
	}, this.rQ = function() {
		aIY !== aX.mZ.aDq.length && k.sH("Replay file larger than expected.")
	}
}

function aIl() {
	var g0 = 0,
		db = b3.db;
	this.aIQ = 0, this.i8 = function() {
		aK.i8(), fd ? j8() : 0 === g0 ? b3.db >= db && (db += b3.a1D * Math.floor(1 + (b3.db - db) / b3.a1D), 2 === rJ || j.fP ? iw() : (j1(), ay.a1U()), g0++) : ((j.fP ? j8 : (b3.d1 = !0, j6))(), g0 = 0), j4(), b3.d1 && (b3.d1 = !1, qI())
	}
}

function ck() {
	this.rP = null, this.d1 = !1, this.db = 0, this.a1D = 56;
	var aIm = 0;

	function aIn() {
		b3.db = aIm = performance.now(), b3.rP.i8(), window.requestAnimationFrame(aIn)
	}
	this.cq = function() {
		this.ud(), window.requestAnimationFrame(aIn), this.db = performance.now()
	}, this.ua = function() {
		fO ? (this.rP = new aIX, this.rP.cq()) : ip ? this.rP = new aIl : (this.rP = new aIP, this.rP.cq())
	}, this.ud = function() {
		this.rP = new aIO, this.d1 = !0
	}, this.i8 = function() {
		this.rP.aIQ++
	}, this.iM = function() {
		return this.rP.aIQ
	}, this.aCw = function() {
		var dc = performance.now();
		dc < aIm + 1e3 || (this.db = dc, this.rP.i8())
	}
}

function cA() {
	var jz = 0,
		aIo = !0;

	function aIq(fz) {
		8 !== x.dZ() || 2 !== h5[eX] && (0 !== h4[eX] || fd) || k.wI(fz)
	}
	this.i8 = function() {
		var dc, wj;
		b3.db > jz && (jz = b3.db + 2500, dc = new Date, wj = dc.getUTCSeconds(), aIo ? wj < 45 && (aIo = !1) : wj < 45 || (aIo = !0, (wj = dc.getUTCMinutes() + 1) % 15 == 0 && aIq(30 === wj ? "Upcoming Battle Royale Contest!" :
			"Upcoming Alliance Contest!")))
	}
}

function c2() {
	var jd, je, jf, jg, aIr = 0,
		aIs = 0;

	function aIu() {
		return Math.pow(Math.pow(jf - jd, 2) + Math.pow(jg - je, 2), .5)
	}

	function aIt(dE) {
		jd = aK.nH * dE.touches[0].clientX, je = aK.nH * dE.touches[0].clientY, jf = aK.nH * dE.touches[1].clientX, jg = aK.nH * dE.touches[1].clientY
	}
	this.sd = function(dE) {
		return 1 < dE.touches.length ? (aIs = b3.db, aIr = 3, aIt(dE), i.o3(), !0) : (aIr = 0, !1)
	}, this.se = function(dE) {
		var a9t, gs, gt;
		return 0 !== rJ && 1 < dE.touches.length && (aIr = Math.max(aIr - 1, 0), f.kN() && (a9t = aIu(), aIt(dE), dE = aIu(), gs = Math.floor((jd + jf) / 2), gt = Math.floor((je + jg) / 2), p.z3(gs, gt, Math.max(.125, dE) / Math.max(.125, a9t)),
			b3.d1 = !0), !0)
	}, this.t2 = function() {
		var fL, fM;
		return !!(aIr && (aIr = 0, b3.db < aIs + 500)) && (fL = (jd + jf) / 2, fM = (je + jg) / 2, i.sv(fL, fM), i.click(fL, fM, !0) && (b3.d1 = !0), !0)
	}
}

function cK() {
	this.size = 0, this.g0 = 0, this.mK = null, this.cq = function(mK) {
		this.g0 = 0, this.mK = mK, this.size = mK.length
	}, this.sM = function() {
		this.mK = null
	}, this.mL = function(size) {
		for (var de = 0, mK = this.mK, kN = this.g0 + size - 1, eG = this.g0; eG <= kN; eG++) de |= (mK[eG >> 3] >> 7 - (7 & eG) & 1) << kN - eG;
		return this.g0 += size, this.g0 > 8 * this.size && console.log("error unwrapper"), de
	}, this.aIv = function(size) {
		for (var dp = new Array(size), eG = 0; eG < size; eG++) dp[eG] = this.mL(10);
		return h.p0(dp)
	}, this.aIw = function(aEB) {
		return this.size === ab.aIx(aEB)
	}
}

function cf() {
	this.aEy = 0, this.aEz = 0, this.aEu = 0, this.aEv = 0, this.aEw = 0, this.aEx = 0, this.a1V = [0, 0, 0, 0], this.kM = function() {
		this.aEy = p.jh(), this.aEz = p.gE(), this.aEu = -this.aEy, this.aEv = -this.aEz, this.aEw = aK.g6 / h9, this.aEx = aK.gC / h9, this.a1V[0] = Math.floor(this.aEu), this.a1V[1] = Math.floor(this.aEv), this.a1V[2] = Math.floor(this.a1V[0] +
			this.aEw + 1), this.a1V[3] = Math.floor(this.a1V[1] + this.aEx + 1), ay.a1S = !0
	}
}

function c3() {
	var xk, jz;
	this.cq = function() {
		xk = 1, jz = 0
	}, this.i8 = function() {
		0 < xk && (jz = 0 === jz ? b3.db + 16 : jz, xk = (xk -= .001 * (b3.db - jz)) < 0 ? 0 : xk, jz = b3.db, b3.d1 = !0)
	}, this.gF = function() {
		0 < xk && (gG.fillStyle = "rgba(0,0,0," + xk + ")", gG.fillRect(0, 0, aK.g6, aK.gC))
	}
}

function c6() {
	function aJ1(map, fL, fM, g6, gC) {
		map >= ap.a77 || (ap.pc === map && (gG.fillStyle = aZ.lC, gG.fillRect(fL, fM, g6, gC), gG.fillStyle = aZ.gH), gG.strokeRect(fL, fM, g6, gC), gG.fillText(ap.ik.pb[map].name, Math.floor(fL + .5 * g6), Math.floor(fM + .55 * gC)))
	}
	this.da = !1, this.a4i = [0, 0, 0, 0], this.show = function() {
		this.da = !0, this.resize(), b3.d1 = !0
	}, this.resize = function() {
		var aGF = eU(ap.a77 + ap.a77 % 2, 2),
			aGF = aK.gC - aGF * b0.gap;
		b7.cv.fw() ? this.a4i[2] = Math.floor(.75 * aK.min) : this.a4i[2] = Math.floor(.5 * aK.min), this.a4i[3] = Math.floor(1.25 * this.a4i[2]), this.a4i[3] > aGF && (this.a4i[3] = aGF, this.a4i[2] = Math.floor(aGF / 1.2)), this.a4i[0] = Math
			.floor((aK.g6 - this.a4i[2]) / 2), this.a4i[1] = Math.floor((aK.gC - this.a4i[3]) / 2)
	}, this.sZ = function(fL, fM) {
		return !(fL < this.a4i[0] || fM < this.a4i[1] || fL > this.a4i[0] + this.a4i[2] || fM > this.a4i[1] + this.a4i[3])
	}, this.g9 = function(fL, fM) {
		var xC, aGF = eU(ap.a77 + ap.a77 % 2, 2);
		return b3.d1 = !0, fL < this.a4i[0] || fM < this.a4i[1] || fL > this.a4i[0] + this.a4i[2] || fM > this.a4i[1] + this.a4i[3] ? !(this.da = !1) : (xC = Math.floor(.17 * this.a4i[3]), fM < this.a4i[1] + xC ? fL > this.a4i[0] + this.a4i[2] -
			xC && (this.da = !1) : (fM = (fM = Math.floor(aGF * (fM - this.a4i[1] - xC - .00576 * aK.fx) / (this.a4i[3] - xC - .01152 * aK.fx))) < 0 ? 0 : aGF - 1 < fM ? aGF - 1 : fM, fL > this.a4i[0] + this.a4i[2] / 2 && (fM += aGF), fM >=
				ap.a77 || ap.d2(fM, Math.floor(16384 * Math.random()))), !0)
	}, this.gF = function() {
		var eG, je, xC = Math.floor(.17 * this.a4i[3]),
			aGF = eU(ap.a77 + ap.a77 % 2, 2),
			gap = .6 * .01152 * aK.fx,
			a4y = (this.a4i[3] - xC - (aGF + 1) * gap) / aGF,
			qS = Math.floor((this.a4i[2] - 3 * gap) / 2);
		for (gG.lineWidth = b0.ue, aY.g1.textAlign(gG, 1), aY.g1.textBaseline(gG, 1), gG.fillStyle = aZ.kb, gG.fillRect(this.a4i[0], this.a4i[1] + xC, this.a4i[2], this.a4i[3] - xC), gG.fillStyle = aZ.lC, gG.fillRect(this.a4i[0], this.a4i[1],
				this.a4i[2], xC), gG.strokeStyle = aZ.gH, gG.strokeRect(this.a4i[0], this.a4i[1], this.a4i[2], this.a4i[3]), gG.fillStyle = aZ.gH, gG.fillRect(this.a4i[0], this.a4i[1] + xC, this.a4i[2], 2), gG.font = aY.g1.g2(1, .48 * xC), gG
			.fillText("Maps", Math.floor(this.a4i[0] + this.a4i[2] / 2), Math.floor(this.a4i[1] + .55 * xC)), gG.font = aY.g1.g2(1, .48 * a4y), eG = aGF - 1; 0 <= eG; eG--) je = Math.floor(this.a4i[1] + xC + gap + eG * (a4y + gap)), aJ1(eG, this
			.a4i[0] + gap, je, qS, a4y), aJ1(eG + aGF, this.a4i[0] + qS + 2 * gap, je, qS, a4y);
		j.vY(Math.floor(this.a4i[0] + this.a4i[2] - .7 * xC), Math.floor(this.a4i[1] + .3 * xC), Math.floor(.4 * xC)), gG.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function cJ() {
	this.size = 0, this.g0 = 0, this.mK = null, this.cq = function(mK) {
		this.g0 = 0, this.mK = mK, this.size = mK.length
	}, this.d2 = function(aEB) {
		return this.cq(new Uint8Array(this.aIx(aEB))), this.mK
	}, this.sM = function() {
		this.mK = null
	}, this.ov = function(size, wl) {
		for (var mK = this.mK, kN = this.g0 + size - 1, eG = this.g0; eG <= kN; eG++) mK[eG >> 3] |= (wl >> kN - eG & 1) << 7 - (7 & eG);
		this.g0 += size, this.g0 > 8 * this.size && console.log("error wrapper")
	}, this.aJ2 = function(size) {
		for (var mK = this.mK, kN = this.g0 + size, eG = this.g0; eG < kN; eG++) mK[eG >> 3] &= 255 ^ 128 >>> (7 & eG)
	}, this.aIx = function(aEB) {
		return aEB + 7 >> 3
	}, this.aJ3 = function(dp, hd, kN, aJ4) {
		for (var eG = hd; eG < kN; eG++) this.ov(aJ4, dp[eG])
	}
}
setTimeout(bD, 1e4), window.onload = function() {
	bD()
};