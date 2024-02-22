var a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, aA, aB, aC, aD, aE, aF, aG, aH, aI, aJ, aK, aL, aM, aN, aO, aP, aQ, aR, aS, aT, aU, aV, aW, aX, aY, aZ, aa, ab, ac, ad, ae, af,
	ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, as, at, au, av, aw, ax, ay, az, b0, b1, b2, b3, b4, b5, b6, b7, b8, b9, bA, bB, bC, d6, d7, d8, d9, dA, dB, dC, eH, eI, eJ, eK, eL, eM, eN, eO, eP, eQ, eR, eS, eT, hr, ho, hq, hY;

function bD() {
	var cl;
	a || (bF(), bG(), an = new bH, am = new bI, b = new bJ, c = new bK, d = new bL, e = new bM, f = new bN, g = new bO, h = new bP, i = new bQ, j = new bR, k = new bS, l = new bT, m = new bU, n = new bV, o = new bW, p = new bX, q = new bY, r =
		new bZ, s = new ba, t = new bb, u = new bc, v = new bd, w = new be, x = new bf, (y = new bg).bh(), z = new bi, a0 = new bj, a1 = new bk, a2 = new bl, a3 = new bm, a4 = new bn, a5 = new bo, a6 = new bp, a7 = new bq, a8 = new br, a9 =
		new bs, aA = new bt, aB = new bu, aC = new bv, aD = new bw, aP = new bx, aE = new by, aF = new bz, aG = new c0, aH = new c1, aI = new c2, aJ = new c3, aK = new c4, aL = new c5, aM = new c6, aN = new c7, aO = new c8, aQ = new c9, aR =
		new cA, aS = new cB, aT = new cC, aU = new cD, aV = new cE, aW = new cF, aX = new cG, aZ = new cH, aa = new cI, ab = new cJ, ac = new cK, ad = new cL, ae = new cM, af = new cN, ag = new cO, ah = new cP, ai = new cQ, aj = new cR, ak =
		new cS, al = new cT, ao = new cU, ap = new cV, aq = new cW, ar = new cX, as = new cY, at = new cZ, au = new ca, av = new cb, aw = new cc, ax = new cd, aY = new ce, bB = new cf, a = new cg, bC = new ch, a.cj(), aP.cj(), ah.cj(), aj.cj(),
		au.cj(), ck(), (cl = document.getElementById("usernameField")) && document.body.removeChild(cl), bB.cj(), a5.cj(), ay = new cm, aR.cj(), aK.cj(), cn(), co(), b1 = new cp, b2 = new cq, b3 = new cr, b4 = new cs, b5 = new ct, b6 = new cu, (
			b7 = new cv).cj(), b8 = new cw, b9 = new cx, (b0 = new cy).cj(), (bA = new cz).cj(), az = new d0, d1(), aF.cj(), a7.d2(), aB.cj(), x.cj(), aW.cj(), aP.cj(), q.cj(), a9.cj(), al.cj(), a3.cj(), aZ.cj(), ax.cj(), ak.d3(), b7.d4 = !0,
		setTimeout(function() {
			au.bh(2, 14071)
		}, 0), a.d5 = 1)
}

function cg() {
	this.cj = function() {
		d6 = 2, d7 = 1025, d9 = 14, d8 = "1.92.2   23 Feb 2024", dA = 0 <= window.location.hostname.toLowerCase().indexOf("territorial.io"), dC = function() {
			try {
				return window.self !== window.top
			} catch (dE) {
				return !0
			}
		}(), dB = (new Date).getTime() % 1024
	}, this.d5 = 0
}

function cd() {
	this.dF = new dG, this.dH = new dI, this.cj = function() {
		this.dF.cj()
	}
}

function dG() {
	function dK(dQ) {
		console.log("Video Ad Completed: " + dQ)
	}

	function dJ() {
		return dT || dU || !dA
	}
	this.cj = function() {
		var dN;
		dJ() || (window.aiptag = window.aiptag || {
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
					AIP_COMPLETE: dK
				})
			}), (dN = document.createElement("div")).id = "videoad", document.body.appendChild(dN), (dN = document.createElement("script")).async = !0, dN.src = "", document.head
			.appendChild(dN))
	}, this.dP = function() {
		if (console.log("showVideo"), dJ()) console.log("error 0");
		else {
			if (void 0 !== aiptag.adplayer) return console.log("Success: Ad will be shown!"), aiptag.cmd.player.push(function() {
				aiptag.adplayer.startVideoAd()
			}), !0;
			console.log("error: aiptag.adplayer is undefined")
		}
		return !1
	}, this.dR = function(dS) {
		dJ() || "undefined" != typeof aipAPItag && (dS ? aipAPItag.showCMPButton() : aipAPItag.hideCMPButton())
	}
}

function dI() {
	var dV = 6e4;
	this.show = function() {
		return b7.dV < dV ? (console.log("can't show ad, next ad will be shown in " + ((dV - b7.dV) / 1e3).toFixed(0) + "s"), !1) : (dV = b7.dV + 135e4, !!ax.dF.dP() || (dT ? (window.webkit.messageHandlers.iosCommandA.postMessage("show ad " +
			Math.floor(135e4)), !0) : 12 <= dX && (dU.presentAd(Math.floor(135e4)), !0)))
	}
}

function dY() {
	var username;
	return dT ? dZ.username : (12 <= dX ? "" === (username = dU.loadString(20)) && (username = "Android User " + Math.floor(1e3 * Math.random()), dU.saveString(20, username)) : 5 <= dX ? "" === (username = dU.loadString(0)) && (username = "Player " +
		Math.floor(1e3 * Math.random()), dU.saveString(0, username)) : username = a5.da(0), username)
}

function db() {
	var dd, max;
	if (dT) dd = dZ.password;
	else if (12 <= dX) dd = dU.loadString(22);
	else {
		if (5 <= dX) return 0;
		dd = a5.da(9)
	}
	return max = Math.floor(Math.pow(2, 48)), 0 < (dd = Math.floor(parseInt(h.de(dd)))) && dd < max || df(dd = Math.floor(1 + (max - 1) * Math.random())) ? dd : 0
}

function cn() {
	var dW;
	dT ? dg = dZ.zoom || dh < di : 12 <= dX ? -1 === (dW = dU.loadNumber(21)) ? (dg = dU.getNumber(0) <= 100 || dh < di, dU.saveNumber(21, dg ? 1 : 0)) : dg = 1 === dW || dh < di : 5 <= dX ? 2 === (dW = dU.loadNumber(1)) ? (dg = !0, dU.saveNumber(1,
		dg ? 1 : 0)) : dg = 1 === dW : dg = 0 === a5.da(4) || dh < di
}

function dj() {
	return dT ? dZ.emojis : 5 <= dX ? dU.loadString(1) : a5.da(7)
}

function dk() {
	return dT ? dZ.colors : 12 <= dX ? dU.loadString(21) : 5 <= dX ? dU.loadString(2) : a5.da(8)
}

function dl(username) {
	dT ? window.webkit.messageHandlers.iosCommandA.postMessage("username " + username) : 12 <= dX ? (dU.saveString(20, username), dU.setState(10)) : 5 <= dX ? dU.saveString(0, username) : ((username.length < 3 || 0 <= username.indexOf(";")) && (
		username = "Player 666"), a5.dm(0, username), a5.dn())
}

function df(dc) {
	dc = h.dp(dc.toString());
	return dT ? (dZ.password = dc, window.webkit.messageHandlers.iosCommandA.postMessage("password " + dc), !0) : 12 <= dX ? (dU.saveString(22, dc), !0) : !(5 <= dX || 2 !== a5.dq() || (a5.dm(9, dc), a5.dn(), 0))
}

function dr(zoom, ds) {
	dT ? (window.webkit.messageHandlers.iosCommandA.postMessage("zoom " + (zoom ? 1 : 0)), window.webkit.messageHandlers.iosCommandA.postMessage("sound " + (ds ? 1 : 0))) : 12 <= dX ? (dU.saveNumber(22, ds ? 1 : 0), dU.saveNumber(21, zoom ? 1 : 0)) :
		5 <= dX ? (dU.saveNumber(1, zoom ? 1 : 0), dU.saveNumber(11, ds ? 1 : 0)) : (a5.dm(2, ds ? 1 : 0), a5.dm(4, zoom ? 0 : 1), a5.dn())
}

function dt() {
	for (var dd = "", du = 0; du < b3.dv; du += 2) dd += b3.dw[du] || b3.dw[du + 1] ? b3.dw[du] && !b3.dw[du + 1] ? "1" : !b3.dw[du] && b3.dw[du + 1] ? "2" : "3" : "0";
	dT ? window.webkit.messageHandlers.iosCommandA.postMessage("emojis " + dd) : 5 <= dX ? dU.saveString(1, dd) : (a5.dm(7, dd), a5.dn())
}

function dx(dd) {
	if (dT) window.webkit.messageHandlers.iosCommandA.postMessage("colors " + dd);
	else {
		if (12 <= dX) dU.saveString(21, dd);
		else if (5 <= dX) return void dU.saveString(2, dd);
		a5.dm(8, dd), a5.dn()
	}
}

function dy(dQ) {
	dT || 5 <= dX && dU.setState(dQ)
}

function dz() {
	!dT && 7 <= dX ? dU.setState(5) : location.reload()
}

function co() {
	dX < 17 || dU.saveString(23, document.documentElement.outerHTML)
}

function cW() {
	this.e2 = new Uint16Array(2), this.e3 = new Uint32Array(2), this.e4 = new Uint8Array(4), this.e5 = new Uint8Array(4), this.e6 = new Uint32Array(5), this.e7 = new Uint32Array(8), this.e8 = function(e9, eA) {
		return e9[0] = eA, e9
	}, this.eB = function(e9, eA, eC) {
		return e9[0] = eA, e9[1] = eC, e9
	}, this.eD = function(e9, eA, eC, eE) {
		return e9[0] = eA, e9[1] = eC, e9[2] = eE, e9
	}, this.eF = function(e9, eA, eC, eE, eG) {
		return e9[0] = eA, e9[1] = eC, e9[2] = eE, e9[3] = eG, e9
	}
}

function eU() {
	eM = 0, eN = 2048, eO = new Uint32Array(4 * eN), eP = 0, eQ = new Uint32Array(eN), (eR = new Int32Array(4))[0] = -4 * au.eV, eR[1] = 4, eR[2] = -eR[0], eR[3] = -eR[1], eS = new Uint8Array(au.eV * au.eW)
}

function eX(player) {
	eI = player, eT = !1, eY(), eZ();
	for (var du = a6.ea(eI) - 1; 0 <= du; du--) 0 === a6.eb(eI, du) && (eH = du, ec());
	eT && ed()
}

function ed() {
	ee(), ef()
}

function ec() {
	eL = a6.eg(eI, eH), eJ = a6.eh(eI, eH), ei(), (0 !== eM && (ek(), el()) ? em : ej)()
}

function el() {
	return eK = en(eJ, eM), eo < eK
}

function ek() {
	for (var du = eM - 1; 0 <= du; du--) eS[en(eO[du], 4)] = 0
}

function ej() {
	var dW;
	1 === a6.ea(eI) && c.ep(eI), eI !== eq ? (er[eI] += eJ, a7.es(eI)) : (dW = er[eI], er[eI] += eJ, a7.es(eI), b4.et[13] -= er[eI] - dW), a6.eu(eI, eH)
}

function eY() {
	var du, ev = ew[eI].length;
	for (eP = 0, du = (eN < ev ? eN : ev) - 1; 0 <= du; du--) eQ[eP++] = ew[eI][du]
}

function eZ() {
	for (var du = ew[eI].length - 1; 0 <= du; du--) a4.ex(ew[eI][du]) && a4.ey(ew[eI][du], eI);
	ew[eI] = []
}

function ei() {
	eM = 0, (eL === ez ? f0 : f1)()
}

function f1() {
	for (var f2, f3, du, f4 = 3; 0 <= f4; f4--)
		for (du = eP - 1; 0 <= du; du--) f3 = en(f2 = eQ[du] + eR[f4], 4), 0 === eS[f3] && a4.f5(f2) && a4.f6(f2) === eL && (eS[f3] = 1, eO[eM++] = f2)
}

function f0() {
	for (var f2, f3, du, f4 = 3; 0 <= f4; f4--)
		for (du = eP - 1; 0 <= du; du--) f3 = en(f2 = eQ[du] + eR[f4], 4), 0 === eS[f3] && a4.f7(f2) && (eS[f3] = 1, eO[eM++] = f2)
}

function em() {
	f8() ? (f9(), eL !== ez && fA()) : ej()
}

function fA() {
	fB(), fC(fD[eL]), fC(fE[eL]), fF(ew[eL]), fG(fE[eL]), fG(fH[eL]), fI(), fJ()
}

function f9() {
	eT = !0, a6.fK(eI, eH, eJ), fL[eI] += eM, fM(), fN()
}

function f8() {
	return (eL === ez ? fO : fP)()
}

function fP() {
	var fQ = eM * eo,
		fR = fS(),
		fT = fU(),
		fR = fQ + 2 * fR + fT,
		fW = eK * eM;
	return fR < fW ? (eJ -= fR, fX(fR - fQ, fT), !0) : (eJ -= fW, fX(fW - fQ, fT), !1)
}

function fX(fW, fT) {
	if (0 < fT) {
		if (!(fT <= fW)) return a6.fY(eL, eI, fT - fW), void(fW = 0);
		a6.fY(eL, eI, 0), fW -= fT
	}
	fW = en(fW, 2), er[eL] >= fW ? er[eL] -= fW : er[eL] = 0
}

function fU() {
	return a6.fZ(eL, eI)
}

function fS() {
	return an.fa(eM * er[eL], 1 + an.fa(10 * fL[eL], 16))
}

function fb() {
	return Math.floor(2 + fc(en(fL[eL], 100), 8))
}

function fd() {
	return fD[eL].length + en(fE[eL].length + fH[eL].length, 50)
}

function fO() {
	return eJ -= eM * eo, !0
}

function fN() {
	for (var du = eM - 1; 0 <= du; du--) ew[eI].push(eO[du]), fD[eI].push(eO[du]), a4.ey(eO[du], eI)
}

function cb() {
	this.fe = function() {
		ff || j.fg || ad.fh.fi(1) && ad.fh.fj(eq) && a6.fk(eq) && (a6.fl(eq, ez) || function(player) {
			var du, fq, fr = fD[player],
				ev = fr.length;
			for (fq = 0; fq < 4; fq++)
				for (du = 0; du < ev; du++)
					if (a4.f7(fr[du] + eR[fq])) return 1;
			return
		}(eq)) && aa.fn.fo(o.fp(), ez)
	}
}

function cy() {
	var fs = 1,
		ft = [null, null];
	this.cj = function() {
		fs = .72 * (dg ? .0011 : .001) * fu;
		for (var du = 1; 0 <= du; du--) ft[du] && this.fv(du, ft[du].dd)
	}, this.fv = function(fw, dd) {
		ft[fw] = {
			dd: dd,
			font: fx + 10 + fy
		}, this.fz(fw)
	}, this.fz = function(fw) {
		var dd, fontSize, g1, g2, g3;
		a3.g0() && ft[fw] && (dd = ft[fw].dd, fontSize = Math.floor(.15 * fs * a3.get(13).height), g2 = n.measureText(dd, g1 = fx + fontSize + fy), (g3 = .8 * fs * a3.get(13).width) < g2 && (fontSize = Math.floor(fontSize * g3 / g2), g1 = fx +
			fontSize + fy), ft[fw] = {
			dd: dd,
			font: g1
		}, b7.d4 = !0)
	}, this.g4 = function() {
		return Math.floor(fs * a3.get(13).height)
	}, this.g5 = function(g6, g7) {
		return !!a3.g0() && !(g6 < g8 || g7 < g9 - gA.g2 - fs * a3.get(13).height - 2 * g8 || g7 > g9 - gA.g2 - 2 * g8 || (g6 < g8 + fs * a3.get(13).width ? (bA.dS(0), 0) : g6 < 2 * g8 + fs * a3.get(13).width || !(g6 < 2 * g8 + 2 * fs * a3.get(
			13).width) || (bA.dS(1), 0)))
	}, this.gB = function() {
		return Math.floor(g9 - gA.g2 - fs * a3.get(13).height - 2 * g8)
	}, this.gC = function() {
		if (a3.g0()) {
			gD.imageSmoothingEnabled = !0, gD.setTransform(fs, 0, 0, fs, g8, this.gB()), gD.drawImage(a3.get(14), 0, 0), gD.setTransform(fs, 0, 0, fs, 2 * g8 + fs * a3.get(13).width, this.gB()), gD.drawImage(a3.get(13), 0, 0);
			for (var du = 1; 0 <= du; du--) ft[du] && (gD.setTransform(1, 0, 0, 1, (1 + du) * g8 + du * fs * a3.get(13).width, this.gB()), gD.font = ft[du].font, gD.textBaseline = gE, gD.textAlign = gF, gD.fillStyle = ae.gG, gD.fillText(ft[du]
				.dd, .5 * fs * a3.get(13).width, .86 * fs * a3.get(13).height));
			gD.setTransform(1, 0, 0, 1, 0, 0)
		}
	}
}

function gH(gI, gJ, gK, gL) {
	var du, gO = .2,
		gP = document.createElement("canvas"),
		gQ = gP.getContext("2d", {
			alpha: !1
		});
	for (gP.width = gI, gP.height = gI, gQ.font = gJ + "px " + settings.fontName, gQ.textAlign = "center", gQ.textBaseline = "middle", gQ.fillStyle = "red", du = 0; du < gK.length; du++) gQ.fillText(gK[du], .5 * gI, .5 * gI);
	return -1 < (gP = function(gM) {
		var du, gS;
		for (du = gM.data.length - 4; 0 <= du; du -= 4)
			if (gS = gM.data[du], gL <= gS) return Math.floor(du / (4 * gI));
		return -1
	}(gQ.getImageData(0, 0, gI, gI))) && (gO = (gP - .5 * gI + .1 * gJ) / gJ), Math.max(gO, 0)
}

function cU() {
	this.gT = new Int16Array(4), this.gU = new Int16Array(4), this.cj = function() {
		var du;
		for (this.gT[0] = -au.eV, this.gT[1] = 1, this.gT[2] = au.eV, this.gT[3] = -1, du = 0; du < 4; du++) this.gU[du] = 4 * this.gT[du]
	}, this.gV = function(gW, gX) {
		var gY = this.gZ(gX) - this.gZ(gW),
			gX = this.gb(gX) - this.gb(gW),
			gW = gY >>> 31 << 1;
		return 5 + gW + (1 - gW) * (1 - (gX >>> 31 << 1)) * (Math.abs(gY) - Math.abs(gX) >>> 31) & 3
	}, this.gf = function(gW, gX, fq) {
		return fq % 2 == 0 ? fq + (1 - fq) * (1 - (this.gZ(gX) - this.gZ(gW) >>> 31 << 1)) + 4 & 3 : fq + (2 - fq) * (1 - (this.gb(gX) - this.gb(gW) >>> 31 << 1)) + 4 & 3
	}, this.gh = function(f2, gi) {
		for (var gX, gj, gl = fE[f2], ev = gl.length, g2 = au.eV, gm = this.gZ(gi), gn = this.gb(gi), go = gl[0] >> 2, min = this.gp(gm, gn, go), du = 1; du < ev; du++)(gj = (gj = gm - (gX = gl[du] >> 2) % g2) * gj + (gj = gn - ~~((.5 + gX) /
			g2)) * gj) < min && (min = gj, go = gX);
		return go
	}, this.gq = function(player, gr) {
		return !a4.f7(gr) && player === a4.f6(gr)
	}, this.gp = function(gs, gt, gi) {
		return (gs -= this.gZ(gi)) * gs + (gt -= this.gb(gi)) * gt
	}, this.gu = function(gv, gw, gx) {
		gv = this.gz(gv) - this.h0(gx), gw = this.h2(gw) - this.h3(gx);
		return Math.sqrt(gv * gv + gw * gw)
	}, this.h4 = function(gW, gX) {
		var gy = this.gZ(gW) - this.gZ(gX),
			gW = this.gb(gW) - this.gb(gX);
		return Math.sqrt(gy * gy + gW * gW)
	}, this.h5 = function(f2) {
		return f2 < h6 && 0 !== h7[f2] && 2 !== h8[f2]
	}, this.h9 = function() {
		return 0 !== h7[eq] && 2 !== h8[eq]
	}, this.hA = function(f2, hB) {
		return an.fa(hB * er[f2], 1e3)
	}, this.gz = function(gv) {
		return 16 * (gv + hC) / hD
	}, this.h2 = function(gw) {
		return 16 * (gw + hE) / hD
	}, this.hF = function(gv) {
		return Math.floor((gv + hC) / hD)
	}, this.hG = function(gw) {
		return Math.floor((gw + hE) / hD)
	}, this.hH = function(gs, gt) {
		return 1 <= gs && 1 <= gt && gs < au.eV - 1 && gt < au.eW - 1
	}, this.gZ = function(gi) {
		return gi % au.eV
	}, this.gb = function(gi) {
		return an.fa(gi, au.eV)
	}, this.hI = function(gs, gt) {
		return gt * au.eV + gs
	}, this.hJ = function(gi) {
		var gs = this.gZ(gi),
			gi = this.gb(gi);
		return 0 < gs && gs < au.eV - 1 && 0 < gi && gi < au.eW - 1
	}, this.hK = function(gi) {
		return gi << 2
	}, this.hL = function(gi) {
		return au.eV * this.gb(gi) * 256 + (this.gZ(gi) << 4)
	}, this.hM = function(gi) {
		return this.hL(gi) + 8 + (au.eV << 7)
	}, this.hN = function(gx) {
		return au.eV * (this.h3(gx) >> 4) + (this.h0(gx) >> 4)
	}, this.hO = function(gx) {
		gx = this.hN(gx);
		return (this.gZ(gx) >> 5) + ap.hP.hQ * (this.gb(gx) >> 5)
	}, this.h0 = function(gx) {
		return gx % (au.eV << 4)
	}, this.h3 = function(gx) {
		return an.fa(gx, au.eV << 4)
	}, this.hR = function(gi, fq) {
		return gi + this.gT[fq]
	}, this.hS = function(gr, fq) {
		return gr + this.gU[fq]
	}
}

function hT(player) {
	return aq.e7[1] = ew[player].length, aq.e7[0] === ez ? hU(player) : hV(player, aq.e7[0]), 0 !== aq.e7[1] || 0 !== ew[player].length
}

function hW(player) {
	hX && (hY[player] = 1), hZ(aq.e7[1], player), a6.ha(player, aq.e3[0], aq.e7[0]), c.hb(player, !1)
}

function hc(player, hd, ev, he) {
	var hf = en(3 * er[player], 256);
	he -= he >= en(er[player], 2) ? hf : 0, hZ(ev, player), a6.ha(player, he, hd), er[player] -= he + hf, c.hb(player, !1)
}

function hV(player, hd) {
	for (var fq, du = fD[player].length - 1; 0 <= du; du--)
		if (a4.hg(fD[player][du]))
			for (fq = 3; 0 <= fq; fq--)
				if (a4.f5(fD[player][du] + eR[fq]) && a4.f6(fD[player][du] + eR[fq]) === hd) {
					ew[player].push(fD[player][du]);
					break
				}
}

function hZ(gJ, player) {
	for (var du = ew[player].length - 1; gJ <= du; du--) a4.hh(ew[player][du], player)
}

function hU(player) {
	for (var fq, du = fD[player].length - 1; 0 <= du; du--)
		if (a4.hg(fD[player][du]))
			for (fq = 3; 0 <= fq; fq--)
				if (a4.f7(fD[player][du] + eR[fq])) {
					ew[player].push(fD[player][du]);
					break
				}
}

function hi(player, hj) {
	var du, hk, fq, hl, ev = fD[player].length,
		gg = 256 <= ev ? 12 : 32 <= ev ? 6 : 1,
		hm = ev - 1 - aF.hn(gg);
	ho = 0;
	loop: for (du = hm; 0 <= du; du -= gg)
		for (fq = 3; 0 <= fq; fq--)
			if ((hl = a4.f7(fD[player][du] + eR[fq]) ? ez : a4.f6(fD[player][du] + eR[fq])) === ez || a4.f5(fD[player][du] + eR[fq]) && hl !== player && (hj || hp(player, hl))) {
				for (hk = ho - 1; 0 <= hk; hk--)
					if (hq[hk] === hl) continue loop;
				if (hq[ho] = hl, ++ho >= hr) return !0
			}
	return 0 < ho
}

function hs(player, hj) {
	var du, fq, hl;
	for (ho = 0, du = fD[player].length - 1; 0 <= du; du--)
		for (fq = 3; 0 <= fq; fq--)
			if ((hl = a4.f7(fD[player][du] + eR[fq]) ? ez : a4.f6(fD[player][du] + eR[fq])) === ez || a4.f5(fD[player][du] + eR[fq]) && hl !== player && (hj || hp(player, hl))) return hq[ho++] = hl, !0;
	return !1
}

function ht() {
	for (var hu, du = ho - 1; 0 <= du; du--)
		if (hq[du] === ez) {
			for (ho--, hu = du; hu < ho; hu++) hq[hu] = hq[hu + 1];
			return !0
		} return !1
}

function hv(player) {
	for (var hu, du = ho - 1; 0 <= du; du--)
		if (a6.fl(player, hq[du]))
			for (ho--, hu = du; hu < ho; hu++) hq[hu] = hq[hu + 1];
	return 0 === ho
}

function hw() {
	for (var du = ho - 1; 0 <= du; du--)
		if (hq[du] >= h6) return !0;
	return !1
}

function hx() {
	for (var du = ho - 1; 0 <= du; du--) hq[du] < h6 && (hq[du] = hq[--ho]);
	return 0 < ho
}

function hy(player) {
	for (var hu, hz = hq[0], i0 = er[hz] + a6.fZ(hz, player), du = ho - 1; 1 <= du; du--)(hu = er[hq[du]] + a6.fZ(hq[du], player)) < i0 && (hz = hq[du], i0 = hu);
	return hz
}

function i1(player) {
	var i2, i3 = hq[0];
	if (1 !== ho)
		for (var i4 = en(i5[player] + i6[player], 2), i7 = en(i8[player] + i9[player], 2), iA = iB(i4 - en(i5[i3] + i6[i3], 2)) + iB(i7 - en(i8[i3] + i9[i3], 2)), du = ho - 1; 1 <= du; du--)(i2 = iB(i4 - en(i5[hq[du]] + i6[hq[du]], 2)) + iB(i7 - en(
			i8[hq[du]] + i9[hq[du]], 2))) < iA && (iA = i2, i3 = hq[du]);
	return i3
}

function iC() {
	return hq[aF.hn(ho)]
}

function ck() {
	hr = 8, ho = 0, hq = new Uint16Array(hr)
}

function iD() {
	hY = hX ? new Uint8Array(ez) : null
}

function iE(player, he) {
	var iF;
	hX && (hY[player] = 0), !a6.fk(player) || he < 60 || (0 === fD[player].length ? ap.iG.iH(player) || (b.iI(player - h6, 200), iJ(player, he, b.he[player - h6], a7.iK(player))) : 0 < fE[player].length && aF.random() < aF.value(fE[player].length >
		fD[player].length ? 7 : 3) && ap.iG.iH(player) || (iF = a7.iK(player), er[player] > iF && he < er[player] - iF && (he = er[player] - iF), hX ? iL(player, he, b.he[player - h6], iF) : iM(player, he, b.he[player - h6])))
}

function iL(player, he, iN, iF) {
	var hd;
	hi(player, !1) || hs(player, !1) ? (hY[player] = 1, hv(player) || (ht() ? (iO(player, he), iP(player, ez, iN)) : (aF.iQ(b.iR[iN]) ? iS(player, he, hd = hy(player)) : (hw() && aF.iQ(b.iT[iN]) && hx(), iS(player, he, hd = i1(player))), iP(player,
		hd, iN)))) : 0 < fE[player].length && aF.random() < aF.value(60) && ap.iG.iH(player) || (b.iI(player - h6, 200), iJ(player, he, iN, iF))
}

function iU(player, he) {
	hi(player, !1) || hs(player, !1) ? (hY[player] = 1, ht() ? iO(player, he) : iS(player, he, iC())) : iJ(player, he, 0, 0)
}

function iP(player, hd, iN) {
	3 <= iN && 2142 < b7.iV() && (hd === ez || er[hd] < en(er[player], 20)) && b.iI(player - h6, 25)
}

function iJ(player, he, iN, iF) {
	var du, hu, iW;
	if (0 !== b8.iX[player] && !(5 === iN && er[player] < iF || 4 === iN && er[player] < en(iF, 2)))
		for (du = aF.hn(iY), hu = 0; hu < iY; hu++)
			if (iW = iZ[(hu + du) % iY], b8.iX[iW] === b8.iX[player] && 1 === hY[iW]) return void aa.ia.ib(player, iW, he)
}

function iM(player, he, iN) {
	!hi(player, !0) && !hs(player, !0) || hv(player) || (ht() ? iO(player, he) : aF.iQ(b.iR[iN]) ? iS(player, he, hy(player)) : (hw() && aF.iQ(b.iT[iN]) && hx(), iS(player, he, i1(player))))
}

function ic(player, he) {
	(hi(player, !0) || hs(player, !0)) && (ht() ? iO(player, he) : iS(player, he, iC()))
}

function iS(player, he, hd) {
	en(er[player], 8) > er[hd] && (he = (ie = en(11 * er[hd], 5)) < he ? he : ie);
	var ie = ew[player].length;
	hV(player, hd), hc(player, hd, ie, he)
}

function iO(player, he) {
	var hd = ez,
		ev = ew[player].length;
	return hU(player), ew[player].length !== ev && (hc(player, hd, ev, he), !0)
}
self.aiCommand746 = function(e0) {
	0 === e0 ? bD() : 1 !== e0 || dX < 14 || x.e1()
};
var dT, dZ, dU, dX, h6, rT, is, rS, ig = [60, 74, 112, 200, 256, 512];

function bJ() {
	var ih, ii, ij, ik, il, im;

	function j0(du) {
		ih[du] = 1 + en(il[du] * aF.random(), 10 * aF.value(100))
	}
	this.io = ["Very Easy", "Easy", "Normal", "Hard", "Harder", "Very Hard"], this.ip = [97, 95, 93, 90, 87, 84], this.iT = [98, 95, 70, 40, 20, 0], this.iq = [85, 70, 50, 30, 7, 3], this.iR = [0, 0, 5, 25, 50, 90], this.he = null, this.cj =
		function() {
			var du, ir;
			if (ih = new Uint8Array(is), ii = new Uint16Array(is), ij = new Uint16Array(is), ik = new Uint8Array(is), this.he = new Uint8Array(is), il = new Uint16Array(is), im = new Uint16Array(is), aX.it) {
				if (aX.iu.iv)
					for (du = is - 1; 0 <= du; du--) this.he[du] = aX.iu.iv[du + 1]
			} else if (9 === iw) this.ix();
			else if (iy)
				if (hX)
					for (du = is - 1; 0 <= du; du--) this.he[du] = a1.iz[b8.iX[du + h6] - 1].f4;
				else
					for (du = is - 1; 0 <= du; du--) this.he[du] = a1.iz[0].f4;
			else
				for (ir = 8 === iw ? 1 : 0, du = is - 1; 0 <= du; du--) this.he[du] = ir;
			for (du = is - 1; 0 <= du; du--) this.he[du] <= 2 ? (ik[du] = 5, il[du] = im[du] = 1040, 0 === this.he[du] ? (ii[du] = 1e3, ij[du] = 1e3) : 1 === this.he[du] ? (ii[du] = 1e3, ij[du] = 920, il[du] = im[du] = 1100) : (ii[du] = 825, ij[du] =
				750)) : this.he[du] <= 4 ? (ik[du] = 1 + aF.hn(20), 3 === this.he[du] ? (ii[du] = ij[du] = 500, il[du] = im[du] = 1e3) : (im[du] = 250 + aF.hn(1501), il[du] = 500 + aF.hn(501), ii[du] = 300 + aF.hn(201), ij[du] = 100 + aF.hn(
				201))) : (il[du] = 1e3, im[du] = 1e3, ik[du] = 35 + aF.hn(16), ii[du] = 300 + aF.hn(201), ij[du] = 50 + aF.hn(101)), j0(du)
		}, this.ix = function() {
			for (var du, gr = 0, hu = 0; hu < 6; hu++) {
				for (du = gr + aA.j1[hu] - 1; gr <= du; du--) this.he[du] = hu;
				gr += aA.j1[hu]
			}
		}, this.iI = function(j2, value) {
			0 <= j2 && (ih[j2] = value)
		}, this.iH = function(j2) {
			0 == --ih[j2] && ! function(j2) {
				! function(j2) {
					il[j2] !== im[j2] && (il[j2] += il[j2] < im[j2] ? 3 : -3);
					ii[j2] !== ij[j2] && (ii[j2] += ii[j2] < ij[j2] ? ik[j2] : -ik[j2], ii[j2] = (Math.abs(ii[j2] - ij[j2]) <= ik[j2] ? ij : ii)[j2]);
					ih[j2] = en(il[j2], 10)
				}(j2);
				var player = j2 + h6;
				iE(player, en(ii[j2] * er[player], 1e3))
			}(j2)
		}
}

function j5() {
	k.iH(), a8.iH(), t.j6(), aP.j7.iH(), at.j8.j9()
}

function jA() {
	aQ.iH(), d.iH(), a7.iH(), aU.iH(), aT.iH(), c.iH(), e.iH(), ap.j7.iH(), jB(), s.iH(), aA.iH(), a8.iH(), a8.jC(), t.iH(), ar.iH(), r.iH(), m.iH(), k.iH(), aV.iH(), o.iH(), aN.iH(), b4.iH(), b9.iH(), as.iH(), aP.j7.iH(), ab.iH(), b7.iH()
}

function jD() {
	f.iH(), u.iH(), n.iH(), aJ.iH(), af.iH(), aO.jE()
}

function jF() {
	s.jG(!1), m.jG(), t.jG(!1), r.jG(), o.jG(), aN.jG(), a8.jG(2 === jH), b9.fz()
}

function jI() {
	a8.jG(!0) && (b7.d4 = !0), aP.j7.iH()
}

function bK() {
	var jJ, jK, jL, jM, jN, jO;

	function jS(jU) {
		for (var du = jK - 1; 0 <= du; du--) 0 === jM[jL[du]] && fL[jL[du]] >= jU && eX(jL[du])
	}

	function jQ(player) {
		10 === jM[player] ? jM[player] = jJ : fL[player] < 1e3 ? jM[player] = 3 : fL[player] < 1e4 ? jM[player] = 2 : fL[player] < 6e4 ? jM[player] = 1 : jM[player] = 0
	}
	this.cj = function() {
		jN = jO = 0, jJ = 6, jK = 0, jL = new Uint16Array(ez), jM = new Uint8Array(ez)
	}, this.iH = function() {
		var du;
		for (jN = b4.et[13], jO = er[eq], du = jK - 1; 0 <= du; du--) 10 === jM[jL[du]] ? jQ(jL[du]) : 0 == jM[jL[du]]-- && (jQ(jL[du]), eX(jL[du]));
		16e4 <= fL[jR[0]] && (jS(16e4), 3e5 <= fL[jR[0]]) && jS(3e5), fL[eq] > b4.et[7] && (b4.et[7] = fL[eq]), b4.et[14] += jO - er[eq] + jN - b4.et[13]
	}, this.ep = function(player) {
		for (var hk, du = jK - 1; 0 <= du; du--)
			if (player === jL[du]) {
				for (jK--, hk = du; hk < jK; hk++) jL[hk] = jL[hk + 1];
				return
			}
	}, this.hb = function(player, jV) {
		for (var du = jK - 1; 0 <= du; du--)
			if (player === jL[du]) return;
		jL[jK++] = player, jM[player] = jV ? 2 : 10
	}
}

function bL() {
	var gJ, iG;
	this.cj = function() {
		gJ = is, iG = new Uint16Array(is);
		for (var du = is - 1; 0 <= du; du--) iG[du] = du
	}, this.iH = function() {
		for (var du = gJ - 1; 0 <= du; du--) 0 === h7[iG[du] + h6] ? function(hk) {
			gJ--;
			for (var du = hk; du < gJ; du++) iG[du] = iG[du + 1]
		}(du) : b.iH(iG[du])
	}
}

function bM() {
	var jY, jZ, jK, jL, jM, ja, jb, jc;

	function je(du) {
		var hk;
		for (jK--, hk = du; hk < jK; hk++) jL[hk] = jL[hk + 1], jM[hk] = jM[hk + 1], ja[hk] = ja[hk + 1], jb[hk] = jb[hk + 1], jc[hk] = jc[hk + 1]
	}
	this.cj = function() {
		jY = 1, jK = 0, jZ = 2 * ez, jL = new Uint16Array(jZ), jM = new Uint8Array(jZ), ja = new Uint16Array(jZ), jb = new Uint32Array(jZ), jc = new Uint32Array(jZ)
	}, this.jd = function(fw, position) {
		jb[fw] = position
	}, this.iH = function() {
		for (var du = jK - 1; 0 <= du; du--) 0 == jM[du]-- && (jM[du] = 2, aG.iH(du, ja[du], jL[du], jb[du], jc[du]))
	}, this.ep = function(player, id) {
		for (var du = jK - 1; 0 <= du; du--)
			if (player === jL[du] && id === ja[du]) return void je(du)
	}, this.jf = function(player) {
		for (var du = jK - 1; 0 <= du; du--) player === jL[du] && (aG.jg(player, jb[du]), je(du))
	}, this.hb = function(player, hm, jh) {
		if (jZ <= jK) return 0;
		jL[jK] = player, jM[jK] = 0, ja[jK] = jY, jb[jK] = hm, jc[jK] = jh;
		player = jY;
		return jK++, jY = 2 * jZ < ++jY ? 1 : jY, player
	}, this.gC = function() {
		if (!(hD < 40 || 0 === jK)) {
			var hk, jk, jl, du, fontSize, jo, he, jp = hC / hD,
				jq = hE / hD,
				jr = (js + hC) / hD,
				jt = (g9 + hE) / hD;
			for (gD.textAlign = gF, gD.textBaseline = gE, hk = jK - 1; 0 <= hk; hk--) jk = a4.ju(jb[hk]), jl = a4.gB(jb[hk]), du = jL[hk], jp - 1 < jk && jk < jr && jq - 1 < jl && jl < jt && 0 !== h7[du] && ((fontSize = Math.floor(.94 * hD * a8
				.jv(du))) < 6 || (jk = Math.floor(js * (jk + .5 - jp) / (jr - jp)), jl = Math.floor(g9 * (jl + .48 - jq) / (jt - jq)), gD.font = fx + fontSize + fy, gD.fillStyle = ae.jw, he = a6.eh(du, a6.jx(du, ja[hk])), gD.fillText(aR
				.jy.jz ? ad.k0.k1(he) : k2[du], jk, jl), (jo = Math.floor(.5 * fontSize)) < 6) || (gD.font = fx + jo + fy, gD.fillText(aR.jy.jz ? k2[du] : ad.k0.k1(he), jk, jl + Math.floor(.82 * fontSize))))
		}
	}
}

function bN() {
	var k3, k4, k5, k6, k7, k8, k9, kA, kB, kC, kD, kE, kF, kG = !1,
		kH = !1;

	function kI(kJ) {
		kE = b7.dV, k5 = k6 = k4 = 0, k7 = (kF = 33) / kJ, k3 = 1 / (kJ / kF / 4), k8 = (js / 2 + hC) / hD, k9 = (g9 / 2 + hE) / hD, kA = hD
	}

	function kX(kZ) {
		Math.abs(Math.log(kD / kA)) < .125 && (kD = kZ * kA)
	}

	function kW(jp, jq, jr, jt) {
		kB = (jp + jr + 1) / 2, kC = (jq + jt + 1) / 2;
		jr = js / (jr - jp + 1), jp = g9 / (jt - jq + 1);
		kD = .9 * (jr < jp ? jr : jp)
	}
	this.kK = function() {
		return kG
	}, this.kL = function() {
		kI(1), this.kM(0, 0, au.eV - 1, au.eW - 1), kN || ff || this.kO(eq, 3e3, !0, .3)
	}, this.kO = function(player, kJ, kP, zoom) {
		kQ || kG && !kP && kH || 0 === fL[player] || (p.kR = !1, kH = kP, kI(kJ), function(player) {
			kB = (i6[player] + i5[player] + 1) / 2, kC = (i9[player] + i8[player] + 1) / 2
		}(player), function(zoom, player) {
			var gy = i5[player] - i6[player] + 1,
				player = i8[player] - i9[player] + 1,
				hk = js / gy,
				hu = g9 / player,
				hk = (kD = hk < hu ? hk : hu, 0 !== zoom ? zoom : gy < 20 && player < 20 ? .5 : .9);
			kD *= hk, kX(7 / 8)
		}(zoom, player), kG = !0, aD.kU())
	}, this.kV = function(kJ) {
		ff || kQ || (p.kR = !1, kH = !1, kI(kJ), kW(0, 0, au.eV - 1, au.eW - 1), kX(7 / 8), kG = !0, aD.kU())
	}, this.kM = function(jp, jq, jr, jt) {
		kW(jp, jq, jr, jt), hD = kD, p.ka(kB, js / 2), p.kb(kC, g9 / 2), b1.kc()
	}, this.kd = function() {
		return !(kG && kH || (kG = !1))
	}, this.iH = function() {
		var kg, kh, f4, kk;
		kG && (k4 < .5 ? k6 < k7 && (k6 += k7 * k3, k5 = k4) : 1 - k5 < k4 && (k6 = (k6 -= k7 * k3) < k7 * k3 ? k7 * k3 : k6), kE = kE >= b7.dV ? b7.dV - 1 : kE, f4 = b7.dV - kE, k4 = 1e3 < f4 || 1 < (k4 += k6 * f4 / kF) ? 1 : k4, kE = b7.dV,
			f4 = hD, kg = hC, kh = hE, f4 = (hD = kA * Math.pow(kD / kA, k4)) / f4, kk = 1 - (kA * Math.pow(kD / kA, 1 - k4) - kA) / (kD - kA), p.ka(k8 + kk * (kB - k8), js / 2), p.kb(k9 + kk * (kC - k9), g9 / 2), a8.zoom(f4, (kg * f4 - hC) /
				(1 - f4), (kh * f4 - hE) / (1 - f4)), b1.kc(), 1 <= k4 && (kG = !1, b2.kl = !0), b7.d4 = !0)
	}
}

function cM() {
	var iW = ad.km;
	this.jw = iW.kn(0, 0, 0), this.ko = iW.kp(0, 0, 0, .7), this.kq = iW.kp(0, 0, 0, .5), this.kr = iW.kp(0, 0, 0, .85), this.ks = iW.kp(0, 0, 0, .75), this.kt = iW.kp(0, 0, 0, .6), this.ku = iW.kp(0, 0, 0, .35), this.gG = iW.kn(255, 255, 255), this
		.kv = iW.kp(255, 255, 255, .3), this.kw = iW.kp(255, 255, 255, .6), this.kx = iW.kp(255, 255, 255, .4), this.ky = iW.kp(255, 255, 255, .25), this.kz = iW.kp(255, 255, 255, .85), this.l0 = iW.kp(255, 255, 255, .75), this.l1 = iW.kp(255, 255,
			255, .15), this.l2 = iW.kn(128, 128, 128), this.l3 = iW.kp(64, 64, 64, .75), this.l4 = iW.kn(30, 255, 30), this.l5 = iW.kn(0, 200, 0), this.l6 = iW.kn(128, 255, 128), this.l7 = iW.kp(10, 65, 10, .75), this.l8 = iW.kp(0, 255, 0, .6), this
		.l9 = iW.kp(0, 255, 0, .5), this.lA = iW.kp(0, 200, 0, .5), this.lB = iW.kp(0, 100, 0, .75), this.lC = iW.kp(0, 60, 0, .8), this.lD = iW.kp(0, 255, 0, .3), this.lE = iW.kp(0, 180, 0, .6), this.lF = iW.kn(255, 120, 120), this.lG = iW.kn(255,
			160, 160), this.lH = iW.kn(255, 70, 70), this.lI = iW.kn(230, 0, 0), this.lJ = iW.kp(220, 0, 0, .6), this.lK = iW.kp(255, 100, 100, .8), this.lL = iW.kp(100, 0, 0, .85), this.lM = iW.kp(60, 0, 0, .85), this.lN = iW.kp(200, 0, 0, .6), this
		.lO = iW.kp(0, 60, 60, .85), this.lP = iW.kp(10, 60, 60, .9), this.lQ = iW.kp(0, 96, 96, .75), this.lR = iW.kn(160, 160, 255), this.lS = iW.kp(0, 40, 90, .75), this.lT = iW.kp(0, 0, 255, .6), this.lU = iW.kn(255, 120, 100), this.lV = iW.kp(
			255, 255, 0, .5), this.lW = iW.kp(255, 255, 150, .2), this.lX = iW.kn(255, 255, 0), this.lY = iW.kn(255, 255, 200), this.lZ = iW.kp(200, 200, 0, .6), this.la = iW.kp(255, 140, 0, .75)
}

function cI() {
	this.fn = new lb, this.fh = new lc, this.ld = new le, this.lf = new lg, this.ia = new lh
}

function lb() {
	this.li = function(gi) {
		iy ? aa.ld.li(eq, gi) : aP.lj.lk(gi)
	}, this.fo = function(hB, hd) {
		k.ll(), iy ? aa.ld.fo(eq, hB, hd) : aP.lj.lm(hB, hd)
	}, this.ln = function(hB, lo) {
		k.ll(), iy ? aa.ld.lp(eq, hB, lo) : aP.lj.lq(hB, lo)
	}, this.lr = function(hB, gi) {
		iy ? aa.ld.lr(eq, hB, gi) : ap.ls.lt(eq, gi) && aP.lj.lu(hB, gi)
	}, this.lv = function(lw, gi) {
		iy ? aa.ld.lv(eq, lw, gi) : ap.ls.lx(eq, lw, gi) && aP.lj.ly(lw, gi)
	}, this.lz = function(hd) {
		iy ? aa.ld.lz(eq, hd) : aP.lj.m0(hd)
	}, this.m1 = function(m2) {
		iy ? aa.ld.m3(eq, m2) : aP.lj.m4(m2)
	}, this.m5 = function(m6) {
		iy ? aa.ld.m5(eq, m6) : aP.lj.m7(m6)
	}, this.m8 = function() {
		iy ? aa.ld.m8(eq) : aP.lj.m9()
	}
}

function lh() {
	this.ib = function(player, lo, he) {
		ad.fh.mA(player, he, lo) && (a7.ln(player, lo), lo < h6) && aF.random() < aF.value(10) && (hY[lo] = 0)
	}, this.mB = function(player, lo, he) {
		ad.fh.mC(he, lo) && (ad.fh.mD(lo, aq.e3[0]), b4.mE(player, lo), a8.mF(lo, aq.e3[0]))
	}
}

function lc() {
	this.mG = function(m2, player) {
		k.m1(eq, player, m2), aP.lj.mH(m2, player)
	}, this.mI = function(player) {
		k.mJ(player, 0), aP.lj.mK(player)
	}, this.mL = function(mM, player) {
		k.mN(mM, player), aP.lj.mO(mM, player)
	}, this.mP = function(mQ) {
		iy || ff || aP.lj.mR(mS(), mQ)
	}, this.mT = function() {
		iy || ff || aP.lj.mU(mS(), jR[0], jR[1], jR[2])
	}, this.mV = function() {
		iy || ff || aP.lj.mW(mS())
	}
}

function lg() {
	this.iH = function(mX) {
		var id, eA, kd;
		for (ai.cj(mX), ai.fw += 2, kd = 8 * ai.gJ; ai.fw + 8 <= kd;) id = ai.mY(4), eA = ai.mY(9), 0 === id ? this.mZ(id, eA, ai.mY(22)) : 1 === id ? this.mZ(id, eA, ai.mY(10), ai.mY(10)) : 2 === id ? this.mZ(id, eA, ai.mY(10), ai.mY(9)) : 3 ===
			id || 4 === id ? this.mZ(id, eA, ai.mY(10), ai.mY(22)) : 5 === id ? this.mZ(id, eA, ai.mY(10)) : 6 === id ? this.mZ(id, eA, ai.mY(7)) : 7 === id ? this.mZ(id, eA, ai.mY(1)) : this.mZ(id, eA);
		this.ma()
	}, this.mb = [], this.ma = function() {
		for (var md = 0, me = 0, mf = 0, mg = 0, mh = 0, mi = 0, du = 0; du < 512; du++) md += h7[du], me += fL[du], mf += er[du], mg += ap.j7.mj[du];
		mh += ap.j7.mk, mi += iY, this.mb.push(((255 & md + me + mf + mg + mh + mi) << 12) + ((3 & md) << 10) + ((3 & me) << 8) + ((3 & mf) << 6) + ((3 & mg) << 4) + ((3 & mh) << 2) + (3 & mi))
	}, this.mZ = function(id, eA, eC, eE) {
		0 === id ? aa.ld.li(eA, eC) : 1 === id ? aa.ld.fo(eA, eC, eE) : 2 === id ? aa.ld.lp(eA, eC, eE) : 3 === id ? aa.ld.lr(eA, eC, eE) : 4 === id ? aa.ld.lv(eA, eC, eE) : 5 === id ? aa.ld.lz(eA, eC) : 6 === id ? aa.ld.m3(eA, eC) : 7 === id ?
			aa.ld.m5(eA, eC) : 8 === id ? aa.ld.m8(eA) : aa.ld.ml(eA)
	}
}

function le() {
	this.li = function(player, gi) {
		ad.fh.fi(0) && ad.fh.fj(player) && ao.hJ(gi) && (ab.mm.mn(0, player, gi), mo.ha(player, gi))
	}, this.fo = function(player, hB, hd) {
		ad.fh.fi(1) && ad.fh.fj(player) && ad.fh.mp(player, hd) && ad.fh.mq(player, hB, 12, eo) && a6.fk(player) && ad.fh.mr(player, hd) && hT(player) && (ab.mm.mn(1, player, hB, aq.e7[0]), ad.fh.ms(player), b4.mt(player, hB), hW(player))
	}, this.lp = function(player, hB, lo) {
		ad.fh.fi(1) && ad.fh.fj(player) && hX && ad.fh.mp(player, lo) && ad.fh.mu(player, lo) && ad.fh.mA(player, ad.fh.hA(player, hB), lo) && (ab.mm.mn(2, player, hB, lo), a7.ln(player, lo))
	}, this.lr = function(player, hB, gi) {
		ad.fh.fi(1) && ad.fh.fj(player) && ao.hJ(gi) && ap.j7.mk !== ap.j7.mv && ap.j7.mj[player] !== ap.j7.mw && 0 !== fE[player].length && ad.fh.mq(player, hB, 32, 16) && ap.mx.my(player, gi) && (ab.mm.mn(3, player, hB, gi), ad.fh.ms(player),
			ap.j7.mz(player))
	}, this.lv = function(player, lw, gi) {
		ad.fh.fi(1) && ad.fh.fj(player) && ao.hJ(gi) && ap.ls.n0(player, lw) && ap.mx.n1(gi) && (ab.mm.mn(4, player, lw, gi), ad.fh.n2(player, 8), ap.j7.lv())
	}, this.lz = function(player, hd) {
		ad.fh.fi(1) && ad.fh.fj(player) && (hd = Math.min(hd, ez), a6.fl(player, hd)) && (ab.mm.mn(5, player, hd), a6.n3(player, hd))
	}, this.m3 = function(player, m2) {
		ad.fh.fi(2) && ad.fh.fj(player) && (m2 = Math.min(m2, b3.dv - 1), ab.mm.mn(6, player, m2), a8.n4(player, 0, m2))
	}, this.m5 = function(player, m6) {
		ad.fh.fi(1) && ad.fh.fj(player) && (ab.mm.mn(7, player, m6), aN.n5(player, m6))
	}, this.m8 = function(player) {
		(ad.fh.fi(0) || ad.fh.fi(1)) && ad.fh.fj(player) && as.m8(player) && ab.mm.mn(8, player)
	}, this.ml = function(player) {
		as.ml(player), ab.mm.mn(9, player)
	}
}

function n6(title, n7, n8, n9) {
	var nA;
	this.nG = function() {
		var nB;
		return nA || (nB = new nC("Back", () => aw.show(n9), ae.lL, ae.lN, ae.lJ), nA = new nD(title, nB, [new nE(n7), new nF(n8)])), nA
	}, this.nH = function() {
		return title
	}
}

function nC(nI, nJ, color, nK, nL) {
	var button = document.createElement("button"),
		scale = 1;

	function nN() {
		button.style.backgroundColor = color || ae.ku
	}

	function nO() {
		button.style.backgroundColor = nK || ae.l1
	}

	function nP() {
		button.style.backgroundColor = nL || ae.ky
	}
	this.cj = function(nM) {
		button.style.position = "relative", button.innerText = nI, button.style.color = ae.gG, button.style.fontSize = "inherit", button.style.wordBreak = "break-word", nN(), button.onmouseover = nO, button.onmouseout = nN, button.onmousedown =
			nP, button.onmouseup = nO, button.onclick = () => {
				nN(), nJ()
			}, this.resize(), nM.appendChild(button)
	}, this.nQ = function(ev) {
		scale = ev, this.resize()
	}, this.resize = function() {
		var height = ad.km.nR(.5) * fu / nS * .09;
		button.style.height = (scale * height).toFixed(1) + "px", button.style.border = (.02 * height).toFixed(1) + "px solid " + ae.gG
	}, this.nT = function() {
		button.style.width = "100%"
	}, this.nU = function() {
		button.style.flexGrow = "1", button.style.flexBasis = "0"
	}, this.nV = function(nW) {
		button.prepend(nW)
	}
}

function nF(nX) {
	var nY = document.createElement("div");
	this.cj = function(nM) {
		var du;
		for (nY.width = "100%", nY.height = "auto", nY.style.display = "flex", du = 0; du < nX.length; du++) nX[du].nU(), nX[du].cj(nY);
		this.resize(), nM.appendChild(nY)
	}, this.resize = function() {
		var du, margin = ad.km.nR(.5) * fu / nS * .3 * .04;
		for (nY.style.margin = "0 " + margin.toFixed(1) + "px", nY.style.gap = margin.toFixed(1) + "px", du = 0; du < nX.length; du++) nX[du].resize()
	}
}

function nZ(na, nb) {
	this.jk = 0, this.jl = 0, this.g2 = 0, this.i2 = 0, this.resize = function() {
		this.i2 = Math.min(ad.km.nR(.5) * na[1] * fu, g9 - 2 * nc), this.g2 = Math.min(this.i2 * (na[0] / na[1]), js - 2 * nc), this.i2 = na[1] * this.g2 / na[0], this.jk = nc + nb[0] * (js - this.g2 - 2 * nc), this.jl = nc + nb[1] * (g9 - this
			.i2 - 2 * nc)
	}, this.nd = function() {
		return this.jk + .5 * this.g2
	}
}

function ne(nI, nf, nJ, ng) {
	var ni, nh = document.createElement("input");
	this.cj = function(nM) {
		var nj = document.createElement("label");
		nj.innerText = nI, nj.style.color = ae.gG, nj.style.marginLeft = "0.5em", nh.type = "checkbox", nh.style.marginRight = "1em", nh.style.nk = "middle", nh.style.position = "relative", nh.style.bottom = "0.2em", nh.onchange = nJ, nh.title =
			nf, ni = new nl(nf), this.resize(), nj.prepend(nh), ni.cj(nj), nM.appendChild(nj)
	}, this.setState = function(dQ) {
		nh.nm = dQ
	}, this.resize = function() {
		var gJ = ad.km.nR(.5) * fu / nS * .04;
		nh.style.width = gJ.toFixed(1) + "px", nh.style.height = gJ.toFixed(1) + "px", ni.resize(), ng && this.setState(ng())
	}
}

function nn() {
	var no = document.createElement("div"),
		nX = [];
	this.cj = function(nM) {
		no.style.position = "absolute", this.resize(), nM.appendChild(no)
	}, this.np = function(g2, i2) {
		var nq = document.createElement("div");
		nq.style.width = g2.toFixed(1) + "px", nq.style.height = i2.toFixed(1) + "px", no.appendChild(nq)
	}, this.nr = function(color) {
		no.style.backgroundColor = color
	}, this.resize = function() {
		for (var du = 0; du < nX.length; du++) nX[du].resize();
		no.style.height = "max-content", no.style.width = "max-content"
	}, this.jd = function(jk, jl, g2) {
		no.style.left = jk.toFixed(1) + "px", no.style.top = jl.toFixed(1) + "px", no.style.width = g2.toFixed(1) + "px", no.style.ns("--brick-width", g2.toFixed(1) + "px")
	}, this.nt = function(nq) {
		nq.cj(no), nX.push(nq)
	}, this.nu = function() {
		return no.offsetWidth
	}, this.nv = function() {
		return no.offsetHeight
	}
}

function nw() {
	var nx = document.createElement("div"),
		nX = [];
	this.cj = function(nM) {
		nx.width = "100%", nx.height = "auto", nx.style.display = "grid", nx.style.overflow = "auto", nx.style.maxWidth = "100%", this.resize(), nM.appendChild(nx)
	}, this.resize = function() {
		var du, ny = ad.km.nR(.5) * fu / nS * .3;
		for (nx.style.gridTemplateColumns = "repeat(auto-fit, minmax(clamp(64px, " + ny.toFixed(1) + "px, 100%), auto))", nx.style.gap = (.04 * ny).toFixed(1) + "px", du = 0; du < nX.length; du++) nX[du].resize()
	}, this.nt = function(nq) {
		nq.cj(nx), nX.push(nq)
	}
}

function nz(title, n7) {
	this.cj = function(nM) {
		var o0 = document.createElement("h3");
		o0.style.color = ae.gG, o0.style.marginTop = "0", o0.innerText = title, nM.appendChild(o0), n7 && ((o0 = document.createElement("p")).style.color = ae.gG, o0.innerText = n7, nM.appendChild(o0)), this.resize()
	}, this.resize = function() {}
}

function o1() {
	var no = document.createElement("div"),
		o2 = [];
	this.cj = function(nM) {
		no.style.position = "relative", nM.appendChild(no)
	}, this.resize = function() {
		for (var o3, o6, o7, gap, o4 = [], o5 = 0, du = 0; du < o2.length; du++) o2[du].resize(), o5 = Math.max(o5, o2[du].nu());
		if (0 !== o5) {
			for (gap = .009 * (o7 = no.offsetWidth), o3 = dh < di ? 1 : Math.max(1, Math.floor(o7 / (o5 + gap))), du = 0; du < o3; du++) o4.push(0);
			for (du = 0; du < o2.length; du++) o6 = o4.indexOf(Math.min(...o4)), o2[du].jd(o6 * o7 / o3, o4[o6], o7 / o3 - gap), o4[o6] += o2[du].nv() + gap;
			no.style.height = Math.max(...o4).toFixed(1) + "px"
		}
	}, this.o8 = function(nq) {
		nq.cj(no), o2.push(nq)
	}
}

function nD(title, o9, oA) {
	var oB, oC, oD, oE, du, oF;
	for ((oB = document.createElement("div")).style.position = "absolute", oB.style.top = "0", oB.style.left = "0", oB.style.width = "100vw", oB.style.height = "100vh", oB.style.maxHeight = "100vh", oB.style.backgroundColor = ae.kq, oB.style
		.backdropFilter = "blur(5px)", (oC = document.createElement("div")).style.width = "100%", oC.style.display = "flex", oC.style.backgroundColor = ae.ku, (oF = document.createElement("h1")).innerText = title, oF.style.textAlign = "center", oF
		.style.width = "70%", oF.style.margin = "auto", oF.style.color = ae.gG, (oE = document.createElement("div")).style.right = "0", oE.style.width = "30%", (oD = document.createElement("div")).style.overflowY = "auto", oD.style.position =
		"absolute", oD.style.left = "0", oD.style.right = "0", oD.style.bottom = "0", oC.appendChild(oF), oC.appendChild(oE), oB.appendChild(oC), oB.appendChild(oD), o9.cj(oE), o9.nT(), du = 0; du < oA.length; du++) oA[du].cj(oD);
	this.resize = function() {
		var du, oG = ad.km.nR(.5) * fu / nS * .09,
			oH = .12 * oG,
			oI = .02 * oG;
		for (oC.style.height = (oG + 2 * oH).toFixed(1) + "px", oC.style.borderBottom = oI.toFixed(1) + "px solid " + ae.gG, oE.style.padding = oH.toFixed(1) + "px", oD.style.top = (oG + 2 * oH + oI).toFixed(1) + "px", oD.style.padding = oH
			.toFixed(1) + "px", oD.style.paddingBottom = (2 * oH).toFixed(1) + "px", oB.style.font = ad.km.oJ(.23 * oG, 0), du = 0; du < oA.length; du++) oA[du].resize();
		o9.resize()
	}, this.show = function() {
		document.body.appendChild(oB)
	}, this.oK = function() {
		document.body.removeChild(oB)
	}
}

function nE(nI) {
	this.cj = function(nM) {
		var nq = document.createElement("p");
		nq.style.color = ae.gG, nq.innerText = nI, nM.appendChild(nq)
	}, this.resize = function() {}
}

function oL(nI, nf, nJ, oM, oN) {
	var no, select, oO, ni, oP = oN || [],
		oQ = !1;

	function oK() {
		oQ && (oO.innerHTML = "", no.removeChild(oO), oQ = !1)
	}
	this.cj = function(nM) {
		var nj = document.createElement("label");
		nj.innerText = nI, nj.style.color = ae.gG, nj.style.marginLeft = "0.5em", nj.style.display = "block", nj.style.margin = "0.5em 0", nj.style.width = "max-content", (no = document.createElement("div")).style.position = "relative", no.style
			.display = "inline-block", no.style.marginLeft = "1em", (select = document.createElement("button")).innerText = oP[oM], select.style.position = "relative", select.style.border = "none", select.style.padding = "0 0.5em", select.style
			.color = ae.gG, select.style.font = "inherit", select.style.backgroundColor = ae.ku, select.onclick = dE => {
				(oQ ? oK : function() {
					var du, oU;
					if (!oQ) {
						for (du = 0; du < oP.length; du++)(oU = document.createElement("div")).innerText = oP[du], oU.style.textAlign = "center", oO.appendChild(oU);
						no.appendChild(oO), oQ = !0
					}
				})(), select.oR(), dE.preventDefault()
			}, select.oS = oK, (oO = document.createElement("div")).style.position = "absolute", oO.style.left = "50%", oO.style.transform = "translateX(-50%)", oO.style.zIndex = "100", oO.style.backgroundColor = ae.kr, oO.style.color = ae.gG, oO
			.style.width = "max-content", oO.style.padding = "0.5em", oO.style.fontSize = "inherit", oO.style.userSelect = "none", oO.onmousedown = function(dE) {
				for (var du = 0; du < oO.oT.length; du++)
					if (dE.target === oO.oT[du]) {
						select.innerText = oP[du], nJ(du);
						break
					} dE.stopPropagation()
			}, ni = new nl(nf), this.resize(), no.appendChild(select), nj.appendChild(no), ni.cj(nj), nM.appendChild(nj)
	}, this.resize = function() {
		var gJ = ad.km.nR(.5) * fu / nS * .04;
		select.style.height = gJ.toFixed(1) + "px", select.style.outline = (.06 * gJ).toFixed(1) + "px solid " + ae.gG, oO.style.top = (1.06 * gJ).toFixed(1) + "px", oO.style.outline = (.06 * gJ).toFixed(1) + "px solid " + ae.gG, ni.resize()
	}, this.oV = function(oW) {
		oP.push(oW)
	}
}

function oX() {
	var oY, oZ = !0;

	function oi() {
		oY.select(), document.execCommand("copy")
	}
	this.oa = !1, this.cj = function() {
		(oY = document.createElement("textarea")).setAttribute("name", "replayData"), oY.setAttribute("id", "replayDataField"), oY.setAttribute("autocomplete", "off"), oY.setAttribute("placeholder", "Insert the replay link here!"), oY.style
			.position = "absolute", oY.style.resize = "none", oY.style.borderRadius = "0", oY.style.color = ae.gG, oY.style.backgroundColor = ae.ko, oY.addEventListener("focus", function() {
				ac.oa = !0
			}), oY.addEventListener("blur", function() {
				ac.oa = !1
			})
	}, this.show = function() {
		document.body.appendChild(oY)
	}, this.oK = function() {
		document.body.removeChild(oY)
	}, this.resize = function(jk, jl, g2, i2) {
		ad.km.ob(oY.style, jk, jl, g2, i2), oY.style.font = ad.km.oJ(Math.max(5, .1 * i2 / nS), 0)
	}, this.oc = function(nI) {
		oY.value = nI
	}, this.od = function() {
		return oY.value
	}, this.oe = function() {
		oY.select()
	}, this.og = function() {
		oY.value = ""
	}, this.oh = function() {
		oZ && navigator.clipboard ? (oY.select(), navigator.clipboard.writeText(oY.value).catch(function() {
			oZ = !1, oi()
		})) : oi()
	}
}

function nl(nI) {
	var no = document.createElement("div"),
		oj = document.createElement("span"),
		ok = !1,
		oQ = !1;

	function show() {
		oQ || (oj.parentNode.appendChild(no), oQ = !0)
	}

	function oK() {
		oQ && !ok && (oj.parentNode.removeChild(no), oQ = !1)
	}
	this.cj = function(nM) {
		no.style.position = "absolute", no.style.zIndex = "100", no.style.backgroundColor = ae.kr, no.style.color = ae.gG, no.width = "auto", no.style.padding = "0.5em", no.style.fontSize = "inherit", no.style.wordBreak = "break-word", no
			.innerText = nI, oj.style.position = "relative", oj.style.display = "inline-block", oj.style.marginLeft = "1em", oj.style.textAlign = "center", oj.innerText = "?", oj.tabIndex = 0, oj.onmouseover = show, oj.onmouseout = oK, oj
			.onclick = dE => {
				((ok = !ok) ? oK : show)(), oj.oR(), dE.preventDefault()
			}, oj.oS = () => {
				ok = !1, oK()
			}, this.resize(), nM.appendChild(oj)
	}, this.resize = function() {
		var gJ = ad.km.nR(.5) * fu / nS * .04;
		oj.style.width = gJ.toFixed(1) + "px", oj.style.height = gJ.toFixed(1) + "px", oj.style.lineHeight = gJ.toFixed(1) + "px", oj.style.outline = (.06 * gJ).toFixed(1) + "px solid " + ae.gG, no.style.border = (.06 * gJ).toFixed(1) +
			"px solid " + ae.gG
	}
}

function ol(nI) {
	this.cj = function(nM) {
		var nq, om = document.createElement("div");
		om.style.height = "max-content", om.style.width = "0", (nq = document.createElement("p")).style.color = ae.gG, nq.style.margin = "0", nq.style.width = "var(--brick-width)", nq.innerText = nI, om.appendChild(nq), nM.appendChild(om), this
			.resize()
	}, this.resize = function() {}
}

function on() {
	this.oo = new op, this.oq = function(fw, value) {}, this.or = function(fw, dd) {}, this.os = function(fw) {}, this.ot = function(fw) {}, this.ou = function(fw) {
		return 1
	}, this.ov = function(fw) {
		return 1
	}, this.ow = function(fw) {}, this.ox = function() {}
}

function op() {
	var data = [];

	function oy(type, oP, value) {
		data.push({
			type: type,
			oP: oP,
			value: value,
			oz: value
		})
	}
	this.cj = function() {
		oy(1, ["English, Russian"], 0), oy(0, [5, 20, 5], 12), oy(0, [0, 2, 1], 0)
	}, this.get = function(fw) {
		return data[fw]
	}
}

function cR() {
	var p0 = new Uint8Array(78);
	this.cj = function() {
		var du;
		for (p0[50] = 37, du = 0; du < 10; du++) p0[du + 3] = du + 1;
		for (du = 0; du < 26; du++) p0[du + 20] = du + 11, p0[du + 52] = du + 38
	}, this.p1 = function(dd) {
		return dd.trim().replace(new RegExp("[^a-zA-Z0-9_\\-]", "g"), "_")
	}, this.p2 = function(dd, p3) {
		for (var p4 = p0, ev = dd.length, e9 = new Uint8Array(p3 || ev), du = 0; du < ev; du++) e9[du] = p4[dd.charCodeAt(du) - 45];
		return e9
	}, this.p5 = function(p6) {
		var du, ev = p6.length,
			g2 = ag;
		for (g2.bh(6 * ev), du = 0; du < ev; du++) g2.p7(6, p6[du]);
		ai.cj(g2.mX)
	}
}

function p8() {
	var g2, i2, p9;

	function pa(pb, f4, pY, pF, pT) {
		f4 = pZ(pb, f4 + 1 + 2 * pF & 3);
		! function(pb, pc) {
			return 1 < Math.abs(pb % g2 - pc % g2) || 1 < Math.abs(pf(pb) - pf(pc))
		}(pb, f4) && 0 === pT[f4 << 2] && (pT[f4 << 2] = pY)
	}

	function pf(f2) {
		return Math.floor((f2 + .5) / g2) % i2
	}

	function pZ(f2, f4) {
		return f2 + p9[f4]
	}
	this.pA = function(dd) {
		var du, pB, ev, pD, pG = ai;
		for (aj.p5(aj.p2(dd)), au.eV = g2 = pG.mY(12), au.eW = i2 = pG.mY(12), p9 = [-g2, -1, g2, 1], au.pP = document.createElement("canvas"), au.pP.width = au.eV, au.pP.height = au.eW, au.pL = au.pP.getContext("2d", {
				alpha: !1
			}), au.pM = au.pL.getImageData(0, 0, au.eV, au.eW), au.pQ = au.pM.data, ad.pR.pS(au.pQ), ev = pG.mY(12), pB = pG.mY(5), pD = pI(g2 * i2 - 1), du = 0; du < ev; du++) ! function(pC, f2, pE, pF) {
			var du, f4, pG = ai,
				pT = au.pQ,
				pU = f2,
				pV = f2,
				pW = 0,
				pX = 1 + pE,
				pY = 2 - pE;
			for (pT[f2 << 2] = pX, du = 0; du < pC; du++) f4 = pG.mY(2), f2 = pZ(f2, f4), pT[f2 << 2] === pX ? pW % 2 == 1 && pa(pV, pW + 2 * pF + 3, pY, pF, pT) : pT[f2 << 2] = pX, pa(f2, f4, pY, pF, pT), pa(pV, f4, pY, pF, pT), pV = f2,
				pW = f4;
			pZ(f2, 0) === pU ? (pa(f2, 0, pY, pF, pT), pa(pU, 0, pY, pF, pT)) : pZ(f2, 1) === pU && (pa(f2, 0, pY, pF, pT), pa(pU, 2, pY, pF, pT));
			0 === pC && (pa(pU, 0, pY, pF, pT), pa(pU, 2, pY, pF, pT))
		}(pG.mY(pB), pG.mY(pD), 1 === pG.mY(1), 1 === pG.mY(1));
		var jk, jl, pg, ph, pi, pj, pT = au.pQ,
			pk = !0,
			pl = au.iu.pm[au.pn].pl,
			po = au.iu.pm[au.pn].po;
		for (jl = 0; jl < i2; jl++)
			for (ph = !0, pi = pk, jk = pj = 0; jk < g2; jk++) pg = 4 * jl * g2 + 4 * jk, pj <= jk && 0 < pT[pg] && (pi = 2 === pT[pg], ph) && (ph = !1, pi !== pk) ? (pk = pi, pj = jk + 1, jk = -1) : (pi ? (pT[pg] = po[0], pT[1 + pg] = po[1], pT[
				2 + pg] = po[2]) : (pT[pg] = pl[0], pT[1 + pg] = pl[1], pT[2 + pg] = pl[2]), pT[3 + pg] = 255);
		au.pL.putImageData(au.pM, 0, 0), au.pN = !0, au.pO.cj(), b7.d4 = !0
	}
}

function bO() {
	var jk, jl, g2, i2, pp, pq, pr, ps, player, e9;

	function q0() {
		return function() {
			var du;
			for (du = 0; du < 8; du++)
				if (jk = en(g2 * aF.random(), aF.value(100)), jl = en(i2 * aF.random(), aF.value(100)), q8()) return 1;
			return
		}() || function() {
			var gy, h1, hk, py, hu, px;
			for (gy = en(g2 * aF.random(), aF.value(100)), h1 = en(i2 * aF.random(), aF.value(100)), hk = 40; 1 <= hk; hk--)
				for (py = i2 - hk; 0 <= py; py -= 40)
					for (jl = (py + h1) % i2, hu = 40; 1 <= hu; hu--)
						for (px = g2 - hu; 0 <= px; px -= 40)
							if (jk = (px + gy) % g2, q8()) return 1;
			return
		}()
	}

	function q8() {
		for (var f2, qA, gap = en(pp - ps, 2), qB = pr + jl * pp + gap, qC = pq + jk * pp + gap, q9 = qB + ps - 1; qB <= q9; q9--)
			for (qA = qC + ps - 1; qC <= qA; qA--)
				if (f2 = a4.q6(qA, q9), !a4.ex(f2) || a4.hg(f2)) return;
		return 1
	}

	function q1(px, py) {
		pt(), qD(px - 2, py - 2)
	}

	function pt() {
		h7[player] = 0, er[player] = 0, fL[player] = qE[player] = 0, ew[player] = [], fD[player] = [], fE[player] = [], fH[player] = [], i6[player] = i9[player] = i5[player] = i8[player] = 0
	}

	function qD(px, py) {
		var f2, du, qG, qH;
		for (h7[player] = 1, er[player] = player < h6 ? qF : ig[b.he[player - h6]], i6[player] = px + 10, i9[player] = py + 10, i8[player] = i5[player] = 0, qG = px; qG < px + 4; qG++)
			for (qH = py; qH < py + 4; qH++)(px < qG && qG < px + 3 || py < qH && qH < py + 3) && (f2 = a4.q6(qG, qH), a4.ex(f2)) && (i6[player] = qG < i6[player] ? qG : i6[player], i5[player] = qG > i5[player] ? qG : i5[player], i9[player] = qH <
				i9[player] ? qH : i9[player], i8[player] = qH > i8[player] ? qH : i8[player], e9[fL[player]] = f2, fL[player]++, a4.qI(f2, player));
		for (qE[player] = fL[player], du = fL[player] - 1; 0 <= du; du--) a4.qJ(e9[du], player) ? (a4.ey(e9[du], player), fD[player].push(e9[du])) : a4.qK(e9[du]) ? (a4.ey(e9[du], player), fE[player].push(e9[du])) : a4.qL(e9[du]) && (a4.ey(e9[du],
			player), fH[player].push(e9[du]))
	}

	function q7(px, py) {
		for (var f2, qA, q9 = py; py - 6 < q9; q9--)
			for (qA = px; px - 6 < qA; qA--)
				if (f2 = a4.q6(qA, q9), a4.hg(f2)) return;
		return 1
	}
	this.cj = function() {
		var du, px, py;
		if (e9 = new Array(12), ps = 6, pp = 10, g2 = en(au.eV, pp), i2 = en(au.eW, pp), pq = en(au.eV - pp * g2, 2), pr = en(au.eW - pp * i2, 2), kN)
			for (du = 0; du < h6; du++) player = du, pt(), h7[player] = 1;
		if (aX.it && aX.iu.pu) {
			for (player = 0; player < ez; player++)
				if (1 !== h7[player]) {
					if (player < pz) {
						if (function() {
								var px = aX.iu.pu[player] + 1,
									py = aX.iu.q5[player] + 1;
								if (3 < px && px < au.eV - 5 && 3 < py && py < au.eW - 5 && a4.ex(a4.q6(px, py)) && q7(px + 3, py + 3)) return q1(px + 1, py + 1), 1;
								return
							}()) continue;
						if (q0()) {
							px = pq + jk * pp + en(pp, 2), py = pr + jl * pp + en(pp, 2), q1(px, py);
							continue
						}
					}
					pt()
				}
		} else ! function() {
			var px, py;
			for (player = 0; player < ez; player++) 1 !== h7[player] && (player < pz && q0() ? (px = pq + jk * pp + en(pp, 2), py = pr + jl * pp + en(pp, 2), q1(px, py)) : pt())
		}();
		b4.et[7] = fL[eq], b4.et[8] = er[eq]
	}, this.qM = function(hd, qN, qO) {
		var du, px, py, f2, jk, jl;
		for (player = hd, du = 0; du < 20; du++)
			for (px = qN + du; qN - du <= px; px--)
				for (py = qO + du; qO - du <= py; py--)
					if ((px === qN + du || px === qN - du || py === qO + du || py === qO - du) && 3 < px && px < au.eV - 5 && 3 < py && py < au.eW - 5 && a4.ex(a4.q6(px, py)) && q7(px + 3, py + 3)) {
						if (0 < fL[player]) {
							for (jl = jk = f2 = void 0, jk = i5[player]; jk >= i6[player]; jk--)
								for (jl = i8[player]; jl >= i9[player]; jl--) f2 = 4 * (jl * au.eV + jk), a4.qQ(player, f2) && (a4.qR(f2), fL[player]--);
							pt()
						}
						return qD(px - 1, py - 1), !0
					} return !1
	}, this.qS = function(hd) {
		player = hd, q0() ? q1(pq + jk * pp + en(pp, 2), pr + jl * pp + en(pp, 2)) : pt()
	}
}

function qT() {
	aH.qU(), gD.setTransform(hD, 0, 0, hD, 0, 0), gD.imageSmoothingEnabled = hD < 3, gD.drawImage(au.pP, p.ju(), p.gB()), ar.qV.gC(), gD.drawImage(qW, p.ju(), p.gB()), aH.gC(), gD.imageSmoothingEnabled = !1, gD.setTransform(1, 0, 0, 1, 0, 0), ap.qV
		.gC(), a8.gC(), e.gC(), (kQ ? (b9.gC(), af) : (gD.imageSmoothingEnabled = !1, k.gC(), s.gC(), o.gC(), af.gC(), aN.gC(), t.gC(), p.gC(), n.gC(), b9.gC(), r.gC(), m.gC(), j.gC(), i.gC(), u.gC(), b5.gC(), ac.gC(), aJ)).gC()
}

function qX(qY, g2, i2) {
	qY.clearRect(0, 0, g2, i2), qY.fillStyle = ae.ks, qY.fillRect(0, 0, g2, i2)
}

function qZ(qY, g2, i2, qa) {
	qY.fillStyle = ae.gG, qY.fillRect(0, 0, g2, qa), qY.fillRect(0, 0, qa, i2), qY.fillRect(g2 - qa, 0, qa, i2), qY.fillRect(0, i2 - qa, g2, qa)
}

function qb(qY, jk, jl, gI, qa, f2, qc) {
	qY.fillStyle = ae.gG;
	var f2 = Math.floor(gI * f2),
		qe = (f2 += (f2 - qa) % 2, Math.floor((f2 - qa) / 2)),
		gI = Math.floor((gI - f2) / 2);
	qY.fillRect(jk + gI, jl + gI + qe, f2, qa), qc && qY.fillRect(jk + gI + qe, jl + gI, qa, f2)
}

function qg() {
	this.qh = null, this.cj = function(qh) {
		this.qh = qh, k.qi(this.qh)
	}, this.qj = function(qk) {
		var gg = (this.qh[qk].ql - this.qh[1 - qk].ql) / 10,
			gg = 8 / (1 + Math.pow(2, gg / 32)),
			gg = Math.floor(10 * gg + .5),
			qn = this.qo(this.qh[qk].ql + gg + 1),
			gg = this.qo(this.qh[1 - qk].ql - gg);
		0 === qk ? k.qq(this.qh, qn, gg, ["rgba(10,140,10,0.75)", "rgba(140,10,10,0.75)"]) : k.qq(this.qh, gg, qn, ["rgba(140,10,10,0.75)", "rgba(10,140,10,0.75)"])
	}, this.qo = function(ql) {
		return 16e3 <= (ql = ql < 0 ? 0 : 16e3 < ql ? 16e3 : ql) ? "Unknown" : (ql / 10).toFixed(1)
	}
}

function cP() {
	var qr = new Uint8Array(64);
	this.cj = function() {
		var du;
		for (qr[0] = 45, qr[37] = 95, du = 0; du < 10; du++) qr[du + 1] = 48 + du;
		for (du = 0; du < 26; du++) qr[du + 11] = 65 + du, qr[du + 38] = 97 + du
	}, this.qs = function(qt) {
		for (var pG = ai, p6 = new Uint8Array(qt), du = 0; du < qt; du++) p6[du] = pG.mY(6);
		return p6
	}, this.qu = function(p6) {
		for (var ev = p6.length, qv = qr, e9 = [], du = 0; du < ev; du++) e9.push(String.fromCharCode(qv[p6[du]]));
		return e9.join("")
	}
}

function bP() {
	var qw, qx, qy;
	qw = [32, 65, 191, 913, 931], qx = [64, 127, 688, 930, 1155], qy = new Array(qw.length + 1);
	for (var du = 0; du < qy.length; du++) {
		qy[du] = 0;
		for (var hk = du - 1; 0 <= hk; hk--) qy[du] += qx[hk] - qw[hk]
	}

	function r5(iW) {
		for (var du = qw.length - 1; 0 <= du; du--)
			if (iW >= qw[du] && iW < qx[du]) return du;
		return -1
	}
	this.r0 = function(dd) {
		return 0 !== (dd = dd.trim()).indexOf("Bot ") && 0 !== dd.indexOf("[Bot] ") && function(dd, r2, r3) {
			var ev = (dd = dd.trim()).length;
			if (ev < r2 || r3 < ev) return !1;
			for (var iW, r4 = 0, du = 0; du < ev; du++)
				if (iW = dd.charCodeAt(du), r4 += 65 <= iW && iW <= 90 || 1040 <= iW && iW <= 1071 ? 1 : 0, -1 === r5(iW)) return !1;
			if (3 < r4 && r4 > Math.floor(ev / 2)) return !1;
			return !0
		}(dd, 3, 20)
	}, this.r6 = function(dd) {
		for (var ev = (dd = dd.trim()).length, e9 = [], du = 0; du < ev; du++) {
			var iW, f2 = r5(iW = dd.charCodeAt(du));
			e9.push(qy[f2] + iW - qw[f2])
		}
		return e9
	}, this.pA = function(e9) {
		for (var iW, hu, dd = "", ev = e9.length, du = 0; du < ev; du++)
			for (hu = 1; hu < qy.length; hu++)
				if (e9[du] < qy[hu]) {
					iW = qw[hu - 1] + e9[du] - qy[hu - 1], dd += String.fromCharCode(iW);
					break
				} return dd
	}, this.r7 = function(dd) {
		for (var e9 = this.r6(dd), result = "", du = 0; du < e9.length; du++) result = (result += e9[du] < 10 ? "00" : e9[du] < 100 ? "0" : "") + e9[du].toString(10);
		return result
	}, this.r8 = function(dd) {
		for (var e9 = new Array(Math.floor(dd.length / 3)), du = 0; du < dd.length; du += 3) e9[Math.floor(du / 3)] = parseInt(dd.substring(du, du + 3));
		return this.pA(e9)
	}, this.dp = function(dd) {
		for (var e0, e9 = [dd.length], du = 0; du < dd.length; du++) e9[du] = dd.charCodeAt(du) - 48;
		var result = "";
		for (du = 0; du < dd.length; du++) du === dd.length - 1 || 51 < 10 * e9[du] + e9[du + 1] ? result += e9[du].toString() : (e0 = 10 * e9[du] + e9[du + 1], result += String.fromCharCode(e0 + (e0 < 26 ? 65 : 71)), du++);
		return result
	}, this.de = function(dd) {
		for (var iW, result = "", du = 0; du < dd.length; du++) 48 <= (iW = dd.charCodeAt(du)) && iW < 58 ? result += String.fromCharCode(iW) : 65 <= iW && iW < 75 ? result += "0" + (iW - 65).toString() : 75 <= iW && iW < 91 ? result += (iW - 65)
			.toString() : 97 <= iW && iW < 123 && (result += (iW - 71).toString());
		return result
	}, this.r9 = function(dd) {
		for (var ev = dd.length, e9 = [], du = 0; du < ev; du++)(iW = dd.charCodeAt(du)) < 58 ? e9.push(dd[du]) : (iW -= iW < 91 ? 65 : 71, e9.push(String(en(iW, 10))), e9.push(String(iW - 10 * en(iW, 10))));
		var ev = e9.length - 2,
			iW = 0,
			p6 = [];
		for (du = 0; du < ev; du += 3) p6[iW++] = parseInt(e9[du] + e9[du + 1] + e9[du + 2]);
		return p6
	}, this.rA = function() {
		for (var gS, rB = "", du = 0; du < 6; du++) gS = 48 + aF.random() % 36, gS += 58 <= gS ? 39 : 0, rB += String.fromCharCode(gS);
		return rB
	}
}

function cZ() {
	this.rC = new rD, this.j8 = new rE, this.cj = function() {
		this.j8.cj()
	}
}

function rD() {
	function rG() {
		if (2 === jH) return 1;
		aN.rR(), jH = 2, rS = rT
	}

	function rJ() {
		k.rU(!0), s.jG(!0), t.jG(!0), aN.jG(), af.rV(), ff && b7.rW.rX(), b7.d4 = !0, b2.rY(), dy(0)
	}
	this.rF = function() {
		rG() || (aa.fh.mT(), k.rH(247, 0), k.rI(0, 59), f.kV(2700), u.show(!1, !1, !0), rJ())
	}, this.rK = function(rL) {
		var mQ = 0,
			rM = !1;
		rG() || (8 === iw ? ((rM = (mQ = rL < 0 ? fL[0] >= fL[1] ? 0 : 1 : rL) === eq) ? k.rI(mQ, 2) : k.rI(1 - eq, 3), rN.qj(mQ), aa.fh.mP(mQ)) : hX ? (rM = b8.iX[eq] === b9.rO(), 9 === iw ? (aa.fh.mP(rM ? jR[0] : 512), k.rP(rM)) : at.j8.iH(
			rM)) : (rM = (mQ = jR[0]) === eq, k.rQ(mQ), aa.fh.mP(mQ)), u.show(rM, !1), rJ())
	}
}

function rE() {
	var rZ;

	function rt(rb, f3) {
		for (var dd = "", du = f3; du < rb.length && du < f3 + 4; du++) dd += (du === f3 ? "" : "   ") + "[" + b8.rl[rb[du].id] + "]: " + rb[du].rq.toFixed(Math.max(Math.floor(3 - Math.log10(rb[du].rq)), 0));
		dd.length && k.rs(0, dd, 45, 0, ad.km.kn(225, 240, 255), ae.ks, -1, !1)
	}
	this.ra = 0, this.rb = null, this.cj = function() {
		rZ = 0, this.ra = 0, this.rb = null
	}, this.iH = function(rM) {
		var rc = b8.rd[b9.re()];
		this.ra = b9.rf(), this.rb = function(rc, ra) {
				var du, hu, ev, iX = b8.iX,
					rd = b8.rd,
					rl = b8.rl,
					rm = b8.rm,
					rn = fL,
					ro = h6,
					rp = [],
					fw = 0;
				for (hu = rl.length - 1; 0 <= hu; hu--)
					if (rd[iX[rm[hu][0]]] === rc) {
						for (rp.push({
								id: hu,
								rn: 0,
								player: rm[hu][0],
								rq: 0
							}), ev = rm[hu].length, du = 0; du < ev; du++) rp[fw].rn += rn[rm[hu][du]];
						for (rp[fw].rq = (1 + rr) * ro * rp[fw].rn / ra, du = 0; du < fw; du++)
							if (rp[fw].rn > rp[du].rn) {
								rp.splice(du, 0, rp[fw]), rp.pop();
								break
							} fw++
					} 8 < rp.length && (rp.length = 8);
				for (; 0 < rp.length && 0 === rp[rp.length - 1].rn;) rp.pop();
				return rp
			}(rc, this.ra), n.rh("Team " + b8.ft[rc], 2, 1, 12),
			function(rM, rc) {
				var color;
				rM = rM ? (color = ad.km.kn(10, 220, 10), "Congratulations! Team " + b8.ft[rc] + " won the game!") : (color = ad.km.kn(200, 80, 80), "Our alliance was defeated! Team " + b8.ft[rc] + " won the game.");
				k.rs(0, rM, 40, 0, color, ae.ks, -1, !1)
			}(rM, rc), 0 !== (rM = this.rb).length && (k.rs(0, "The allied clans of the winning team have earned these glorious points:", 40, 0, ae.gG, ae.ks, -1, !1), rt(rM, 0), rt(rM, 4)), aa.fh.mV(), f.kV(2700)
	}, this.j9 = function() {
		2 === jH && -1 !== rZ && (0 === rZ ? rZ = this.rb && 0 !== this.rb.length ? b7.dV + 8e3 : -1 : b7.dV < rZ || (rZ = -1, k.rs(255, "Clan rankings and results can also be accessed under:", 735, 0, ae.gG, ae.ks, -1, !1), k.rs(255,
			"territorial.io/clans", 736, 0, ae.gG, ae.ks, -1, !1), k.rs(255, "territorial.io/clan-results", 736, 0, ae.gG, ae.ks, -1, !1)))
	}
}

function cf() {
	this.cj = function() {
		dU = "undefined" != typeof Android ? Android : null, 12 <= (dX = dU ? dU.getVersion() : 0) && dU.prepareAd("1688441405"), dT = !1, window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.iosCommandA && (dT = !0,
			window.webkit.messageHandlers.iosCommandA.postMessage("prepare ad 4500876070"), dZ = "undefined" != typeof mwIOSdataX ? mwIOSdataX : {
				username: "iOS User " + Math.floor(1e3 * Math.random()),
				id: Math.floor(1 + Math.random() * (Math.pow(2, 30) - 1)),
				zoom: !0,
				sound: !0,
				emojis: "0",
				colors: "0",
				password: "0",
				freeSpawn: !1,
				unlimitedTime: !1,
				alliances: !1,
				mustShowConsentButton: "0"
			}), dU || dT || (am.rw += "_browser")
	}
}

function bF() {
	var rx, p6;

	function s0() {
		var du, g2 = new cO;
		for (g2.bh(800), g2.p7(1, 0), g2.p7(3, 7), g2.p7(3, 1), g2.p7(2, dT ? 2 : 12 <= dX ? 1 : 0 < dX ? 3 : 0), g2.p7(1, dA ? 1 : 0), g2.p7(1, dC ? 1 : 0), g2.p7(1, a.d5), du = 0; du < p6.length && !(g2.fw + 6 > 8 * g2.gJ); du++) g2.p7(6, p6[du]);
		rx.send(g2.mX), rx.onopen = null
	}
	window.addEventListener("error", function error(dE) {
		var ry, rz;
		window.removeEventListener("error", error), ry = dE.lineno + " " + dE.colno + " " + dE.message, (rz = new cR).cj(), p6 = rz.p2(rz.p1(ry)), (rx = new WebSocket("wss://territorial.io/s52/")).onopen = s0, 0 === dE.lineno && 0 === dE
			.colno || (dU ? dU.showToast(ry) : alert(ry))
	})
}

function cT() {
	var s1 = -15e3,
		s2 = !1;

	function g5(dE) {
		sL() || (s2 = !0, sM(dE, 1), aP.j7.sN(aP.j7.sO), sP(Math.floor(nS * dE.clientX), Math.floor(nS * dE.clientY)))
	}

	function sA(dE) {
		s1 = b7.dV, sM(dE, 1), aP.j7.sN(aP.j7.sO), 0 < dE.touches.length && (sQ = Math.floor(nS * dE.touches[0].clientX), sR = Math.floor(nS * dE.touches[0].clientY), aI.sA(dE) || sP(sQ, sR))
	}

	function sP(jk, jl) {
		0 === jH ? x.g5(jk, jl) : af.sS(jk, jl) || b5.g5(jk, jl) || ac.g5(jk, jl) || u.g5(jk, jl) || i.sT(jk, jl) || m.g5(jk, jl) || j.g5(jk, jl) || al.sU(jk, jl) || aN.g5(jk, jl) || i.sV(jk, jl)
	}

	function s6(dE) {
		sL() || (s2 = !0, sM(dE, 1), sW(Math.floor(nS * dE.clientX), Math.floor(nS * dE.clientY)))
	}

	function sB(dE) {
		s1 = b7.dV, sM(dE, 1), 0 < dE.touches.length && (sQ = Math.floor(nS * dE.touches[0].clientX), sR = Math.floor(nS * dE.touches[0].clientY), aI.sB(dE) || sW(sQ, sR))
	}

	function sW(jk, jl) {
		0 === jH ? x.s6(jk, jl) : b5.s6(jk, jl) || (j.s6(jk, jl), i.sX() ? i.s6(jk, jl) : o.sY ? o.s6(jk, jl) && (b7.d4 = !0) : (s.s6(jk, jl), p.kR && p.s6(jk, jl) && (b7.d4 = !0)))
	}

	function s8(dE) {
		sL() || (sM(dE, 1), 0 === jH ? (x.click(-1024, -1024), q.ox()) : (s.sZ(-1024, -1024), j.s6(-1024, -1024), o.sa(), p.kR && (p.kR = !1)))
	}

	function s7(dE) {
		sL() || (sM(dE, 1), sb(Math.floor(nS * dE.clientX), Math.floor(nS * dE.clientY), 2 === dE.button))
	}

	function click(dE) {
		sL() || sM(dE, 1)
	}

	function sC(dE) {
		s1 = b7.dV, sM(dE, 1), dE && dE.touches && 0 < dE.touches.length && 0 !== jH ? p.kR = !1 : aI.sc() || sb(sQ, sR, !1)
	}

	function sD(dE) {
		s1 = b7.dV, sM(dE, 1), sb(sQ, sR, !1)
	}

	function sE(dE) {
		aW.sE(dE)
	}

	function sF(dE) {
		aW.sF(dE)
	}

	function sG(dE) {
		sL() || sM(dE, 0)
	}

	function sb(jk, jl, sd) {
		0 === jH ? x.click(jk, jl) : (s.sZ(jk, jl), b5.sZ(), o.sa(), p.kR = !1, i.click(jk, jl, sd) && (b7.d4 = !0))
	}

	function s9(dE) {
		var jk, jl, deltaY;
		sL() || (sM(dE, 1), aP.j7.sN(aP.j7.sO), jk = Math.floor(nS * dE.clientX), jl = Math.floor(nS * dE.clientY), deltaY = dE.deltaY, 1 === dE.deltaMode && (deltaY *= 16), 0 === jH ? x.s9(jk, jl, deltaY) : s.s9(jk, jl, deltaY) || (o.se(jk, jl) ? o
			.s9(deltaY) && (b7.d4 = !0) : p.s9(jk, jl, +deltaY)))
	}

	function sH(dE) {
		sM(dE, 0)
	}

	function sM(dE, id) {
		0 === id && (az.sX || ac.sX || z.sX) || 1 === id && (z.oa || ac.oa) || (id = window.innerWidth / document.documentElement.clientWidth) < .999 || 1.001 < id || 0 !== x.sg() && dE.preventDefault()
	}

	function sI(dE) {
		sL() || b7.dV < 400 || (8 !== x.sg() && x.sh(dE) ? b7.d4 = !0 : "Escape" === dE.key ? x.e1() : "ArrowLeft" === dE.key || "a" === dE.key ? aD.si(3) : "ArrowUp" === dE.key || "w" === dE.key ? aD.si(0) : "ArrowRight" === dE.key || "d" === dE
			.key ? aD.si(1) : "ArrowDown" === dE.key || "s" === dE.key ? aD.si(2) : "h" === dE.key ? 1 <= jH && af.sj(!kQ) : " " === dE.key && jH && (av.fe(), j.fg && j.sk(), ff) && af.sl(!1))
	}

	function sJ(dE) {
		if (keybindHandler(dE.key)) return;
		sL() || ("ArrowLeft" === dE.key || "a" === dE.key ? aD.sm(3) : "ArrowUp" === dE.key || "w" === dE.key ? aD.sm(0) : "ArrowRight" === dE.key || "d" === dE.key ? aD.sm(1) : "ArrowDown" === dE.key || "s" === dE.key ? aD.sm(2) : "1" === dE.key ? o
			.sn(.75) : "2" === dE.key ? o.sn(7 / 8) : "3" === dE.key ? o.sn(.9375) : "4" === dE.key ? o.sn(31 / 32) : "5" === dE.key ? o.sn(32 / 31) : "6" === dE.key ? o.sn(16 / 15) : "7" === dE.key ? o.sn(8 / 7) : "8" === dE.key ? o.sn(4 / 3) :
			"+" === dE.key ? 0 !== jH && p.s9(Math.floor(js / 2), Math.floor(g9 / 2), -200) : "-" === dE.key ? 0 !== jH && p.s9(Math.floor(js / 2), Math.floor(g9 / 2), 200) : "c" === dE.key && 0 !== jH && b5.so())
	}

	function sK() {
		"hidden" === document.visibilityState ? b7.sp() : b7.sq()
	}

	function sL() {
		return s1 + 15e3 > b7.dV
	}

	function resize() {
		aK.st()
	}
	this.s3 = 0, this.s4 = "", this.cj = function() {
		s5.addEventListener("mousedown", g5, {
			passive: !1
		}), s5.addEventListener("mousemove", s6, {
			passive: !1
		}), s5.addEventListener("mouseup", s7, {
			passive: !1
		}), s5.addEventListener("click", click, {
			passive: !1
		}), s5.addEventListener("mouseleave", s8, {
			passive: !1
		}), s5.addEventListener("wheel", s9, {
			passive: !1
		}), s5.addEventListener("touchstart", sA, {
			passive: !1
		}), s5.addEventListener("touchmove", sB, {
			passive: !1
		}), s5.addEventListener("touchend", sC, {
			passive: !1
		}), s5.addEventListener("touchcancel", sD, {
			passive: !1
		}), s5.addEventListener("dragover", sE), s5.addEventListener("drop", sF), s5.addEventListener("dblclick", sG), document.addEventListener("contextmenu", sH), document.addEventListener("keyup", sI), document.addEventListener("keydown",
			sJ), document.addEventListener("visibilitychange", sK), window.addEventListener("resize", resize)
	}, this.sU = function(jk, jl) {
		return !!af.g5(jk, jl) || !!(s.g5(jk, jl) || p.g5(jk, jl) || o.g5(jk, jl) || k.g5(jk, jl))
	}, this.sr = sL, this.ss = function() {
		return !s2 || 0 < s1
	}
}

function cL() {
	this.km = new su, this.pR = new sv, this.fh = new sw, this.k0 = new sx
}

function sv() {
	this.pS = function(e9) {
		e9.fill(0)
	}, this.sy = function(e9) {
		for (var ev = e9.length, du = 0; du < ev; du++) e9[du] = []
	}, this.sz = function(gc, fs) {
		for (var gd = aq.e5, du = 0; du < 3; du++) gd[du] = fs * gc[du];
		return gd
	}, this.t0 = function(gc, gd, t1) {
		for (var gg = 0, du = 0; du < 3; du++) gg += Math.abs(gc[du] - gd[du]);
		return t1 <= gg
	}, this.t2 = function(gc, t3) {
		for (var du = 0; du < 3; du++) gc[du] = an.t4(gc[du] + t3, 0, 255);
		return gc
	}, this.t5 = function(e9, t6 = 0, t7 = e9.length - 1) {
		for (var t8 = 0, du = t6; du <= t7; du++) t8 += e9[du];
		return t8
	}, this.t9 = function(e9, tA) {
		for (var du, tB, ev = e9.length, tC = [], hk = ev - 1; 0 <= hk; hk--) {
			for (du = tB = 0; du < ev; du++) tA(e9[du]) < tA(e9[tB]) && (tB = du);
			ev--, tC.push(e9[tB]), e9[tB] = e9[ev], e9.pop()
		}
		return tC
	}
}

function su() {
	this.tD = gH(32, 32, ["a", "b", "m"], 200), this.pH = function(g2, i2) {
		var iW = document.createElement("canvas");
		return iW.width = g2, iW.height = i2, iW
	}, this.getContext = function(gP, alpha) {
		return gP.getContext("2d", {
			alpha: alpha
		})
	}, this.getImageData = function(qY, g2, i2) {
		return qY.getImageData(0, 0, g2, i2)
	}, this.kn = function(gS, tE, hu) {
		return "rgb(" + gS + "," + tE + "," + hu + ")"
	}, this.kp = function(gS, tE, hu, hk) {
		return "rgba(" + gS + "," + tE + "," + hu + "," + hk.toFixed(3) + ")"
	}, this.ob = function(tF, jk, jl, g2, i2) {
		var kY = 1 / nS,
			tG = .02 * kY * i2,
			tH = kY * tI;
		tF.padding = tG.toFixed(2) + "px", tF.border = tH.toFixed(2) + "px solid " + ae.gG, tF.left = (kY * jk).toFixed(2) + "px", tF.top = (kY * jl).toFixed(2) + "px", tF.width = (kY * g2 - 2 * tG - 2 * tH).toFixed(2) + "px", tF.height = (kY *
			i2 - 2 * tG - 2 * tH).toFixed(2) + "px"
	}, this.oJ = function(gJ, type) {
		return gJ = gJ.toFixed(2), 0 === type ? gJ + "px " + settings.fontName : 1 === type ? "bold " + gJ + "px " + settings.fontName : 2 === type ? "small-caps " + gJ + "px " + settings.fontName : "small-caps bold " + gJ + "px " + settings
			.fontName
	}, this.textAlign = function(gQ, id) {
		gQ.textAlign = 0 === id ? "left" : 1 === id ? "center" : "right"
	}, this.textBaseline = function(gQ, id) {
		gQ.textBaseline = 1 === id ? "middle" : "bottom"
	}, this.nR = function(e0) {
		return 1 + e0 * dg
	}
}

function tJ() {
	document.tK[0].tL(".closeIcon {position: absolute; width: 24px; height: 24px; top: calc(50% - 12px);}", 0), document.tK[0].tL(
		".closeIcon:before {content: ' '; position: absolute; left: 50%; top: 0; width: 2px; height: 100%; background-color: #222; transform: translateX(-50%) rotate(45deg);}", 0), document.tK[0].tL(
		".closeIcon:after {content: ' '; position: absolute; left: 50%; top: 0; width: 2px; height: 100%; background-color: #222; transform: translateX(-50%) rotate(-45deg);}", 0), this.tM = function() {
		var nW = document.createElement("div");
		return nW.tN = "closeIcon", nW
	}
}

function sw() {
	this.fi = function(dQ) {
		return 0 === dQ ? 1 === jH && kN : 1 === dQ ? 1 === jH && !kN : 1 <= jH && !kN
	}, this.fj = function(player) {
		return 0 !== h7[player] && 2 !== h8[player]
	}, this.mp = function(tO, tP) {
		return tO !== tP
	}, this.mD = function(player, e0) {
		return e0 = this.tQ(player, e0), er[player] += e0, e0
	}, this.tQ = function(player, e0) {
		var tR = er[player];
		return e0 = Math.min(e0, fL[player] * tS - tR), e0 = Math.min(e0, tT - tR), Math.max(e0, 0)
	}, this.mq = function(player, hB, tU, tV) {
		var tR = er[player],
			hB = an.fa(tR * (hB + 1), 1024),
			tU = an.fa(tU * tR, 1024),
			hB = Math.min(hB, tR - tU);
		return 10 === iw && (hB = aU.tX(player, hB)), aq.e3[0] = hB, aq.e3[1] = tU, tV <= hB
	}, this.mA = function(player, lp, lo) {
		var player = er[player],
			tW = an.fa(64 * player, 1024);
		return lp = Math.min(lp, player - tW), tW += player = this.tZ(lp), lp = this.tQ(lo, lp -= player), aq.e3[0] = lp, aq.e3[1] = tW, 1 <= lp
	}, this.mC = function(lp, lo) {
		var tY = this.tZ(lp);
		return lp = this.tQ(lo, lp -= tY), aq.e3[0] = lp, aq.e3[1] = tY, 1 <= lp
	}, this.hA = function(player, ta) {
		return an.fa(er[player] * (ta + 1), 1024)
	}, this.tZ = function(tb) {
		return an.fa(Math.max(2142 - b7.iV(), 0) * tb, 2142)
	}, this.n2 = function(player, tU) {
		er[player] -= an.fa(tU * er[player], 1024)
	}, this.ms = function(player) {
		er[player] -= aq.e3[0] + aq.e3[1]
	}, this.mr = function(player, hd) {
		return (hd = Math.min(hd, ez)) < ez && 0 === h7[hd] && (hd = ez), (aq.e7[0] = hd) === ez || hp(player, hd)
	}, this.mu = function(player, lo) {
		return 0 !== h7[lo] && !hp(player, lo)
	}
}

function sx() {
	this.k1 = function(e0) {
		var du, tc, td, te, tf;
		if (e0 < 0) return "-" + this.k1(Math.abs(e0));
		if (e0 < 1e3) return e0.toString();
		for (tc = Math.floor(Math.log(e0 + .5) / Math.log(10)) + 1, td = Math.floor((tc - 1) / 3), tf = (te = e0.toString()).substring(tc - 3, tc), du = 1; du < td; du++) tf = te.substring(tc - 3 * (du + 1), tc - 3 * du) + " " + tf;
		return te.substring(0, tc - 3 * td) + " " + tf
	}, this.tg = function(f2, tc) {
		return f2.toFixed(tc) + "%"
	}, this.th = function(e0, ti = 3) {
		return e0.toFixed(Math.max(Math.floor(ti - Math.log10(e0)), 0))
	}, this.tj = function(username) {
		var tl, tk = username.indexOf("[");
		return !(tk < 0) && 1 < (tl = username.indexOf("]")) - tk && tl - tk <= 8 ? username.substring(tk + 1, tl).toUpperCase().trim() : null
	}
}

function tm() {
	this.ha = function(player, gi) {
		g.qM(player, ao.gZ(gi), ao.gb(gi)) && (b7.d4 = !0), iy && this.iH()
	}, this.iH = function() {
		var du;
		for (kN = !1, du = 0; du < h6; du++) 0 !== h7[du] && 0 === fL[du] && g.qS(du);
		0 !== h7[eq] ? (b4.et[7] = fL[eq], b4.et[8] = er[eq], o.dS(), t.tn(), ff || f.kM(i6[eq] - 5, i9[eq] - 5, i5[eq] + 5, i8[eq] + 5), aJ.cj()) : u.show(!1, !1, !1, !0), k.to(18), a8.tp(), a8.jG(!0), ar.j7.tq(), mo = null, b2.tr = !0, b2.ts(),
			iy && dy(1)
	}
}
var iy, ff, tt, tT, tu, eq, kQ, kN, tv, hX, tw, iw, rr, mo, rN, tx, ez = 512,
	pz = 512,
	tS = 150,
	jH = 0,
	qF = 512,
	eo = 2;

function ty(tz, u0, qh, u1, u2, u3) {
	kQ = !1, ff = u3, rr = u2, hX = (iw = u1) < 7 || 9 === iw, rT = h6 = qh.length, iy = 1 === rT, tw = 9 === (iw = 8 === (iw = 10 === iw && iy ? 7 : iw) && 2 !== h6 ? 7 : iw) ? 2 : iw + 2, tx = h6 <= 2 ? 30 : h6 <= 50 ? 40 : 50, tv = kN = !(aX.it &&
			!aX.iu.u4) && (hX || h6 < 100), mo = kN ? new tm : null, qF = 512, pz = ez, iy && (pz = a1.u5()), is = pz - h6, rS = 0, eq = u0, aF.u6(tz), aA.cj(), u7(qh), aa.lf.mb = [], b8.cj(qh), jH = 1, tT = 15e8, tu = 1e9, b4.cj(), u8(), aB.u9(), b2
		.cj(), a7.cj(), iD(), a4.cj(qh), aH.cj(), ao.cj(), ap.cj(), at.cj(), b.cj(), a9.bh(), a9.uA(), g.cj(), uB(), ab.cj(tz, qh, u1, u2), b9.cj(), as.cj(), ar.cj(), b5.cj(), uC.putImageData(uD, 0, 0), s.cj(), p.cj(), o.cj(), af.cj(), aN.cj(), r
		.cj(), t.cj(), j.cj(), n.cj(), k.cj(), m.cj(), i.cj(), u.cj(), e.cj(), c.cj(), d.cj(), eU(), a6.cj(), a8.cj(), aU.cj(), aT.cj(), aV.cj(), aQ.cj(), ax.dF.dR(!1), 8 === iw ? (rN = new qg).cj(qh) : rN = null, b7.uE(), uF(), aJ.cj(), b7.d4 = !0,
		ff || iy && kN || dy(1)
}

function uF() {
	f.kL(), 0 === h7[eq] && u.show(!1, !0), a8.jG(!0)
}

function uG(uH) {
	ac.oK(), aP.j7.close(aP.j7.sO, 3246), jH = 0, b7.uI(), dy(0), ax.dF.dR(!0), a2.cj(!uH)
}

function bQ() {
	var n8, jk, jl, uJ, uK, uL, dV, player, uM, gap, zoom, mM, uN;

	function ud(player) {
		for (var du = mM.length - 1; 0 <= du; du--)
			if (mM[du] === player) return 1
	}

	function ub(uY) {
		var du, ev;
		if (-1 !== uY)
			for (ev = n8.length, du = 0; du < ev; du++)
				if (n8[du].sX && n8[du].jk + 1 === uY % 4 && n8[du].jl + 1 === uY >> 2) return du;
		return -1
	}

	function ua(g6, g7) {
		var tE = gap / 2;
		return g6 < jk - uJ - 3 * tE || jk + 3 * uJ + 5 * tE < g6 || g7 < jl - uJ - 3 * tE || jl + 2 * uJ + 3 * tE < g7 ? -1 : 4 * (g7 < jl - tE ? 0 : g7 < jl + uJ + tE ? 1 : 2) + (g6 < jk - tE ? 0 : g6 < jk + uJ + tE ? 1 : g6 < jk + 2 * uJ + 3 *
			tE ? 2 : 3)
	}
	this.uO = function() {
		var du, hu, uR = [ae.lE, ae.lN, ae.kt, ae.lZ, ae.lT];
		for (n8 = new Array(8), du = 0; du < 8; du++) n8[du] = {
			id: du,
			sX: !1,
			uS: 0,
			gP: [],
			jk: 0,
			jl: 0
		};
		for (n8[0].colors = [0, 1, 2, 3], n8[0].jk = 0, n8[0].jl = 0, n8[1].colors = [0, 1, 4], n8[1].jk = 1, n8[1].jl = 0, n8[2].colors = [0, 2], n8[2].jk = -1, n8[2].jl = 0, n8[3].colors = [0], n8[3].jk = 0, n8[3].jl = 0, n8[4].colors = [0, 2],
			n8[4].jk = 1, n8[4].jl = 1, n8[5].colors = [3], n8[5].jk = 0, n8[5].jl = -1, n8[6].id = 20, n8[6].colors = [0], n8[6].jk = 1, n8[6].jl = -1, n8[7].id = 21, n8[7].colors = [0], n8[7].jk = 0, n8[7].jl = 1, du = 0; du < 8; du++)
			for (hu = 0; hu < n8[du].colors.length; hu++) n8[du].gP.push(function(id, uT) {
				var gI = a3.get(3).height,
					uU = ad.km.pH(gI, gI),
					gQ = ad.km.getContext(uU);
				20 === id ? gQ.drawImage(a3.get(18), 0, 0) : 21 === id ? gQ.drawImage(a3.uV("emojis"), -4 * gI, 0) : (function(g2, qY, uX) {
					qY.fillStyle = uX, qY.beginPath(), qY.arc(Math.floor(g2 / 2), Math.floor(g2 / 2), Math.floor(.47 * g2), 0, 2 * Math.PI), qY.fill()
				}(gI, gQ, uT), gQ.drawImage(a3.get(3), -id * gI, 0));
				return uU
			}(n8[du].id, uR[n8[du].colors[hu]]))
	}, this.uQ = function() {
		return n8
	}, this.cj = function() {
		mM = [], jk = jl = dV = 0, uK = uL = -1e3, this.resize()
	}, this.resize = function() {
		uJ = Math.floor((dg ? .075 : .0468) * fu), zoom = uJ / a3.get(3).height, gap = Math.floor(uJ / 3)
	}, this.sT = function(g6, g7) {
		return !!this.sX() && (b7.d4 = !0, !!b3.g5(g6, g7, player) || (g6 = function(g6, g7) {
			var uY, du;
			if (uL = uK = -1e3, uY = ua(g6, g7), -1 === (uY = ub(uY))) return 0;
			if (1 === n8[uY].colors[n8[uY].uS]) return 0;
			if (5 === uY) {
				if (! function() {
						var dW = (new Date).getTime();
						uN + 4e3 < dW && (mM = []);
						uN = dW
					}(), ud(player)) return 1;
				mM.push(player), 16 < mM.length && mM.shift()
			} else if (6 === uY) {
				for (du = mM.length - 1; 0 <= du; du--) 0 === h7[mM[du]] && mM.splice(du, 1);
				0 < mM.length && (aV.ue(1, mM, !0) && aa.fh.mL(mM, player), mM = [])
			} else if (2 === uY) aa.fn.ln(o.fp(), player);
			else if (3 === uY) kN && aa.fn.li(uM);
			else if (0 === uY)
				if (0 === n8[0].uS) {
					if (tv && t.uf() < 300) return 1;
					aa.fn.fo(o.fp(), player)
				} else aQ.ug(player, o.fp());
			else if (1 === uY) aa.fn.lr(o.fp(), uM);
			else {
				if (7 === uY) return b3.show(g6, g7), 2;
				if (4 !== uY) return 0;
				aV.ue(0, [player], !0) && aa.fh.mI(player)
			}
			return 1
		}(g6, g7), this.oK(), 2 === g6 && (b3.sX = !0), 0 < g6))
	}, this.sV = function(g6, g7) {
		this.sX() || (uK = g6, uL = g7, dV = (new Date).getTime())
	}, this.click = function(g6, g7, sd) {
		var gs = ao.hF(g6),
			gt = ao.hG(g7),
			gi = ao.hI(gs, gt),
			gr = ao.hK(gi);
		return !(!ao.hH(gs, gt) || (gs = (dg ? .025 : .0144) * fu, Math.abs(g6 - uK) > gs) || Math.abs(g7 - uL) > gs || performance.now() > dV + 425) && (sd ? (function(g6, g7, gr) {
			a4.ex(gr) || -1 === (g6 = ap.ls.uy(g6, g7)) ? k.ux(gr) : k.uz(g6)
		}(g6, g7, gr), !1) : j.fg || this.sX() || !ao.h9() || ff ? (this.oK(), !1) : kN ? !!a4.ex(gr) && (uM = gi, n8[3].sX = !0, this.uj(g6, g7)) : (ap.ls.lv(gi) || ap.ls.uk(g6, g7) || (2 === jH ? a4.f5(gr) && 0 < b3.ul && (player = a4
			.f6(gr), a4.um(player)) && (n8[0].sX = !0, n8[0].uS = 1, n8[7].sX = !0) : a4.un(gr) || (uM = gi, ap.ls.lt(eq, gi) && (n8[0].sX = !0, n8[0].uS = 1, n8[1].sX = !0, n8[1].uS = aq.e6[2] ? 0 : 2), a4.uo(gr)) || (a4.f7(gr) ?
			(player = ez, up(eq) ? (n8[0].sX = !0, n8[0].uS = 0) : uq(eq, player) && (n8[0].sX = !0, n8[0].uS = 3)) : (player = a4.f6(gr)) === eq ? 0 !== b3.ul && (n8[0].sX = !0, n8[0].uS = 1, n8[7].sX = !0) : (n8[0].uS = 1, n8[5]
				.sX = function(player) {
					return a4.um(player) && !ud(player) && aV.ue(1, [player], !1)
				}(player), n8[7].sX = 1 <= b3.ul && a4.um(player), hp(player, eq) ? (n8[4].sX = a4.um(player) && !a8.us(player) && aV.ue(0, [player], !1), n8[6].sX = function(player) {
					if (0 === mM.length) return !1;
					if ((new Date).getTime() > uN + 4e3) return !(mM = []);
					return !ud(player) && ! function(player) {
						var du;
						if (hX)
							for (du = mM.length - 1; 0 <= du; du--)
								if (!hp(player, mM[du])) return 1;
						return
					}(player)
				}(player), uu(eq, player) ? (n8[0].uS = 0, n8[0].sX = !0) : uq(eq, player) && (n8[0].uS = 3, n8[0].sX = !0), n8[0].sX = this.uv()) : (n8[2].sX = !0, n8[0].sX = !0)))), this.uj(g6, g7)))
	}, this.uj = function(g6, g7) {
		return jk = g6 - Math.floor(uJ / 2), jl = g7 - Math.floor(uJ / 2), !!this.sX()
	}, this.s6 = function(g6, g7) {
		return !!this.sX() && (b3.sX ? !b3.v1(g6, g7) && (b3.v2(), b3.sX = !1, b7.d4 = !0) : function(v4, g6, g7) {
			g6 = ua(g6, g7);
			if (0 <= ub(g6)) return !1;
			if ((1 === g6 || 6 === g6) && 0 <= ub(2)) return !1;
			if ((6 === g6 || 9 === g6) && 0 <= ub(10)) return !1;
			return v4.oK(), b7.d4 = !0
		}(this, g6, g7))
	}, this.oK = function() {
		for (var du = n8.length - 1; 0 <= du; du--) n8[du].sX = !1, n8[du].uS = 0;
		b3.sX = !1
	}, this.sX = function() {
		return this.uv() || b3.sX
	}, this.uv = function() {
		for (var ev = n8.length, du = 0; du < ev; du++)
			if (n8[du].sX) return !0;
		return !1
	}, this.gC = function() {
		if (this.sX())
			if (b3.sX) b3.gC();
			else {
				var du, gQ = gD,
					hu = n8,
					ev = hu.length,
					v6 = (uJ + gap) / zoom;
				for (gQ.imageSmoothingEnabled = !0, gQ.setTransform(zoom, 0, 0, zoom, jk, jl), du = 0; du < ev; du++) hu[du].sX && gD.drawImage(hu[du].gP[hu[du].uS], hu[du].jk * v6, hu[du].jl * v6);
				gQ.imageSmoothingEnabled = !1, gQ.setTransform(1, 0, 0, 1, 0, 0)
			}
	}
}

function bR() {
	var i2, gP, g1, v8, v9, v7 = ["Quit Game", "Surrender", "Statistics", "Replay"];

	function vA() {
		var vB, qY = gP.getContext("2d", {
			alpha: !0
		});
		qY.clearRect(0, 0, i2, i2), qY.fillStyle = ae.kq, qY.fillRect(0, 0, i2, i2), 0 === v8 && (qY.fillStyle = ae.kv, qY.fillRect(0, 0, i2, i2)), qY.fillStyle = ae.gG, qY.fillRect(0, 0, i2, 1), qY.fillRect(0, 0, 1, i2), qY.fillRect(0, i2 - 1, i2,
			1), qY.fillRect(i2 - 1, 0, 1, i2), vB = .9 * i2 / a3.get(0).width, qY.imageSmoothingEnabled = !0, qY.setTransform(vB, 0, 0, vB, Math.floor((i2 - vB * a3.get(0).width) / 2), Math.floor((i2 - vB * a3.get(0).height) / 2)), qY.drawImage(
			a3.get(0), 0, 0), qY.setTransform(1, 0, 0, 1, 0, 0)
	}

	function vE(g6, g7) {
		if (!j.fg) return g6 <= i2 + nc && g7 >= o.jl ? 0 : -1;
		if (g6 <= 4 * i2 + nc) {
			if (g7 >= o.jl) return 0;
			if (g7 >= o.jl - i2 - v9 * nc) return vH(2) ? 2 : -1;
			if (g7 >= o.jl - 2 * (i2 + v9 * nc)) return vH(3) ? 3 : -1;
			if (g7 >= o.jl - 3 * (i2 + v9 * nc)) return vH(4) ? 4 : -1
		} else if (g6 <= 7 * i2 + nc && g7 >= o.jl - i2 - v9 * nc) return 1;
		return -1
	}

	function vH(du) {
		return 2 === du ? vF(2) || vF(3) || vF(4) : 3 === du && vF(3) || vF(4)
	}

	function vF(du) {
		return 2 === du ? !ff && j.vM(eq) : 3 === du ? 2 <= b4.vN : ac.vO()
	}

	function vQ(du, uT) {
		gD.setTransform(1, 0, 0, 1, nc, o.jl - du * v9 * nc - du * i2), gD.fillStyle = ae.kq, gD.fillRect(0, 0, 4 * i2, i2), v8 === du + 1 && uT === ae.gG && (gD.fillStyle = ae.kv, gD.fillRect(0, 0, 4 * i2, i2)), gD.fillStyle = uT, gD.fillRect(0, 0,
			4 * i2, 1), gD.fillRect(0, 0, 1, i2), gD.fillRect(4 * i2, 0, 1, i2), gD.fillRect(0, i2 - 1, 4 * i2, 1), gD.fillText(v7[du], 2 * i2, .54 * i2)
	}
	this.fg = !1, this.cj = function() {
		v8 = -1, this.fg = !1, v9 = dg ? 1.2 : .6, this.resize()
	}, this.resize = function() {
		i2 = o.i2, (gP = document.createElement("canvas")).width = i2, gP.height = i2, g1 = fx + Math.floor((dg ? .5 : .45) * i2) + fy, vA()
	}, this.sk = function() {
		this.fg = !this.fg, this.fg ? (af.sj(!1), ff && af.vC && af.sl(!0), this.vD()) : (v8 = -1, vA(), iy && 1 === jH && !kN && dy(1)), b7.d4 = !0
	}, this.vD = function() {
		(iy || ff) && 1 === jH && (s.jG(!0), kN || setTimeout(function() {
			b2.rY()
		}, 0), dy(0))
	}, this.g5 = function(g6, g7) {
		var uS = vE(g6, g7);
		if (this.fg) {
			if (kQ) return 0 <= uS && af.sj(!1), !ff;
			if (0 === uS) uG();
			else if (1 === uS) this.sk();
			else if (2 === uS) vF(uS) && (aa.fn.m8(), this.sk());
			else if (3 === uS) vF(uS) && (b5.sk(), b7.d4 = !0, ac.sX) && ac.oK();
			else if (4 === uS) vF(uS) && (ac.sX ? ac.oK() : ac.show(), b5.sX) && b5.sk();
			else {
				if (!(iy || 1 !== jH || ff || b5.sX || ac.sX) && (j.sk(), 1)) return !1;
				al.sU(g6, g7) || i.sV(g6, g7)
			}
			return !0
		}
		return 0 === uS && (this.sk(), !0)
	}, this.s6 = function(g6, g7) {
		g6 = vE(g6, g7);
		g6 !== v8 && (v8 = g6, this.fg || vA(), b7.d4 = !0)
	}, this.gC = function() {
		var g2;
		this.fg ? (g2 = Math.floor(5.5 * i2), gD.setTransform(1, 0, 0, 1, nc, o.jl), gD.fillStyle = ae.kq, gD.fillRect(0, 0, g2, i2), 0 === v8 ? (gD.fillStyle = ae.kv, gD.fillRect(0, 0, 4 * i2, i2)) : 1 === v8 && (gD.fillStyle = ae.kv, gD
				.fillRect(4 * i2, 0, Math.floor(1.5 * i2), i2)), gD.fillStyle = ae.gG, gD.fillRect(0, 0, g2, 1), gD.fillRect(0, 0, 1, i2), gD.fillRect(4 * i2, 0, 1, i2), gD.fillRect(0, i2 - 1, g2, 1), gD.fillRect(g2 - 1, 0, 1, i2), gD.font =
			g1, gD.textBaseline = gE, gD.textAlign = gF, gD.fillText(v7[0], 2 * i2, .54 * i2), g2 = .4 * i2, j.vP(nc + 4 * i2 + (1.5 * i2 - g2) / 2, o.jl + .3 * i2, g2), vH(2) && vQ(1, vF(2) ? ae.gG : ae.l2), vH(3) && vQ(2, vF(3) ? ae.gG : ae
				.l2), vH(4) && vQ(3, ae.gG), gD.setTransform(1, 0, 0, 1, 0, 0)) : gD.drawImage(gP, nc, o.jl)
	}, this.vM = function(player) {
		return 0 !== h7[player] && 2 !== jH && a4.um(player)
	}, this.vP = function(jk, jl, ev) {
		gD.setTransform(1, 0, 0, 1, jk, jl), gD.lineWidth = tI, gD.strokeStyle = ae.gG, gD.beginPath(), gD.moveTo(0, 0), gD.lineTo(ev, ev), gD.moveTo(0, ev), gD.lineTo(ev, 0), gD.stroke()
	}
}

function bS() {
	var vR, i2, tH, vS, vT, vU, vV, vW, vX;

	function gB() {
		return o.vo(k.vk()) ? aN.sX ? o.jl - o.i2 - 2 * tH : o.jl - tH : af.vo(k.vn()) ? aN.sX ? af.gB() - o.i2 - 2 * tH : af.gB() - tH : aN.sX ? di - o.i2 - (aR.vp() + 1) * tH : di - aR.vp() * nc
	}

	function vc(dW, dd, id, f2, vf, vg, pc, vh, vi) {
		var du, qY, vl, uU, vs, vt = void 0 !== vi,
			g2 = Math.floor(n.measureText(dd, k.g1) + 1.5 * vS + (vt ? i2 : 1.5 * vS));
		if (b7.d4 = !0, dh < g2 + tH && !vt && 50 !== id && 20 < dd.length) vl = Math.floor(.5 * dd.length), vc(dW, dd.substring(0, vl), id, f2, vf, vg, pc, vh, vi), vc(dW, dd.substring(vl), id, f2, vf, vg, pc, vh, vi);
		else if (vl = g2 + (50 === id ? vT : 0), (uU = document.createElement("canvas")).width = g2, uU.height = i2, (qY = uU.getContext("2d", {
				alpha: !0
			})).font = k.g1, qY.textBaseline = gE, qY.textAlign = vu, qY.clearRect(0, 0, g2, i2), qY.fillStyle = vg, qY.fillRect(0, 0, g2, i2), qY.fillStyle = vf, qY.fillText(dd, Math.floor(1.5 * vS), Math.floor(i2 / 2)), vt && (vt = i2 / b3.g2, qY
				.imageSmoothingEnabled = !0, qY.setTransform(vt, 0, 0, vt, g2 - i2, 0), qY.drawImage(b3.uU[vi], 0, 0)), 0 === (vs = {
				dV: dW,
				dd: dd,
				id: id,
				player: f2,
				gP: uU,
				vf: vf,
				vg: vg,
				g2: g2,
				vl: vl,
				pc: pc,
				vh: vh,
				vi: vi
			}).dV || 0 < vR.length && 0 < vR[0].dV) vR.unshift(vs);
		else {
			for (du = 1; du < vR.length; du++)
				if (0 < vR[du].dV) return void vR.splice(du, 0, vs);
			vR.push(vs)
		}
	}

	function vd(gS, tE, hu) {
		return "rgb(" + gS + "," + tE + "," + hu + ")"
	}

	function vv(id, wF) {
		for (var ev = vR.length, du = 0; du < ev; du++) vR[du].id === id && wF-- <= 0 && (vR.splice(du, 1), du--, ev--)
	}

	function vw(id, player) {
		for (var wG = !1, du = vR.length - 1; 0 <= du; du--) vR[du].id !== id || player !== ez && vR[du].player !== player || (vR.splice(du, 1), wG = !0);
		return wG
	}

	function wL(dd) {
		vc(340, dd, 6, 0, vd(215, 245, 255), ae.ks, -1, !1)
	}

	function wT(player, wU) {
		return (iy || h6 <= player || wU || aR.jy.wV ? k2 : wW)[player]
	}
	this.cj = function() {
		vV = dg ? 7 : 12, vU = {
			qh: [vW = 0, 0, 0],
			vY: [0, 0, 0],
			kJ: [220, 180, 180],
			vZ: [0, 0, 0],
			iW: [0, 0, 0]
		}, vR = [], this.resize(), kN && this.rI(0, 18), wL(aY.ot(37, [au.iu.pm[au.pn].name])), wL(aY.ot(38, [au.eV - 2, au.eW - 2])), wL(aY.ot(39, [aB.wM], {
			w6: [0]
		})), aB.wM !== aB.wN && wL(aY.ot(40, [aB.wN, aB.wN / aB.wM], {
			w6: [0],
			wO: [1]
		})), 0 < aB.wP && wL(aY.ot(41, [aB.wP, aB.wP / aB.wM], {
			w6: [0],
			wO: [1]
		})), 0 < aB.wQ && wL(aY.ot(42, [aB.wQ, aB.wQ / aB.wM], {
			w6: [0],
			wO: [1]
		})), 10 === iw && vc(120, aY.ot(43), 6, 0, vd(235, 255, 120), ae.ks, -1, !1), this.vb()
	}, this.vb = function() {
		var du, ev;
		if (aX.it)
			for (ev = aX.iu.n7.length, du = 0; du < ev; du++) vc(400, aX.iu.n7[du], 6, 0, vd(255, 255, 255), ae.ks, -1, !1)
	}, this.resize = function() {
		var ve, du;
		if (i2 = (i2 = Math.floor((dg ? .031 : .0249) * fu)) < 10 ? 10 : i2, this.fontSize = Math.floor(2 * i2 / 3), this.g1 = fx + this.fontSize + fy, tH = nc, vS = Math.floor(i2 / 5), 0 < vR.length)
			for (ve = vR, vR = [], du = ve.length - 1; 0 <= du; du--) vc(ve[du].dV, ve[du].dd, ve[du].id, ve[du].player, ve[du].vf, ve[du].vg, ve[du].pc, ve[du].vh, ve[du].vi);
		this.vj()
	}, this.vj = function() {
		vX = document.createElement("canvas");
		var dd = aY.ot(0),
			qY = (vT = n.measureText(dd, this.g1) + 5 * vS, vX.height = i2, vX.width = vT, vX.getContext("2d", {
				alpha: !0
			}));
		qY.font = this.g1, qY.textBaseline = gE, qY.textAlign = gF, qY.clearRect(0, 0, vT, i2), qY.fillStyle = ae.lB, qY.fillRect(0, 0, vT, i2), qY.fillStyle = ae.gG, qY.fillText(dd, Math.floor(vT / 2), Math.floor(i2 / 2))
	}, this.vk = function() {
		var ev;
		return aN.sX ? aN.g2 : 0 === (ev = vR.length) ? 0 : 1 === ev ? vR[0].vl : vm(vR[0].vl, vR[1].vl)
	}, this.vn = function() {
		var ev = vR.length;
		return aN.sX ? ev ? vm(aN.g2, vR[0].vl) : aN.g2 : 0 === ev ? 0 : 1 === ev ? vR[0].vl : 2 === ev ? vm(vR[0].vl, vR[1].vl) : vm(vm(vR[0].vl, vR[1].vl), vR[2].vl)
	}, this.g5 = function(jk, jl) {
		for (var vq, vr = gB(), du = vR.length - 1; 0 <= du; du--)
			if ((vq = vr - (du + 1) * i2) <= jl && jl < vq + i2) return 50 === vR[du].id ? jk >= js - vT - tH - vR[du].g2 && (js - vT - tH <= jk ? aa.fh.mI(vR[du].player) : f.kO(vR[du].player, 800, !1, 0), !0) : jk >= js - vR[du].g2 - tH && (
				736 === vR[du].id ? window.open("https://" + vR[du].dd, "_blank") : vR[du].vh && (f.kO(vR[du].player, 800, !1, 0), 0 <= vR[du].pc) && (vq = vR[du].pc, vR[du].pc = vR[du].player, vR[du].player = vq), !0);
		return !1
	}, this.rs = function(dW, dd, id, f2, vf, vg, pc, vh, vi) {
		vc(dW, dd, id, f2, vf, vg, pc, vh, vi)
	}, this.to = function(id) {
		for (var du = vR.length - 1; 0 <= du; du--) vR[du].id === id && (vR[du].dV = 1)
	}, this.rI = function(player, id) {
		0 === id ? (b4.et[player < h6 ? 4 : 3]++, n.ha(player, 0), vv(423, 0), vc(160, aY.ot(1, [k2[player]]), 423, player, "rgb(10,220,10)", ae.ks, -1, !1)) : 1 === id ? (vw(50, ez), n.ha(player, 1), vc(360, aY.ot(2, [k2[player]]), 0, player,
			"rgb(255,40,40)", ae.ks, -1, !0), f.kO(player, 2700, !1, 0)) : 2 === id ? (n.ha(player, 2), vc(0, aY.ot(3), 0, player, "rgb(10,255,255)", ae.ks, -1, !0), f.kO(player, 2700, !1, 0)) : 3 === id ? (n.ha(player, 2), vc(0, aY.ot(4, [
			k2[player]
		]), 0, player, ae.gG, ae.ks, -1, !0), f.kO(player, 2700, !1, 0)) : 4 === id ? (rT--, rS--, this.vx(1, player, player)) : 5 === id ? 2 !== h8[player] && a4.um(eq) && (function(id, jU) {
			var du, w9 = 0,
				ev = vR.length;
			for (du = 0; du < ev; du++)
				if (vR[du].id === id && jU <= ++w9) return vR.splice(du, 1)
		}(1, 5), a8.vz(player) ? vc(180, aY.ot(5, [k2[player]]), 1, player, vd(255, 200, 180), ae.ks, -1, !0) : (vv(573, 0), vc(180, aY.ot(6, [k2[player]]), 573, player, "rgb(255,70,10)", ae.ks, -1, !0))) : 18 === id ? vc(255, aY.ot(7), 18,
			0, ae.gG, ae.ks, -1, !1) : 21 === id ? vc(220, aY.ot(8), id, 0, "rgb(255,40,40)", ae.ks, -1, !1) : 22 === id ? this.vx(2, player, player) : 59 === id && vc(0, aY.ot(9), id, 0, ae.lY, ae.ks, 0, !1)
	}, this.w0 = function(w1) {
		vc(200, aY.ot(10, [w1]), 94, 0, ae.gG, ae.lL, -1, !1)
	}, this.rQ = function(rL) {
		if (eq === rL) wins_counter++, window.localStorage.setItem("fx_winCount", wins_counter);
		n.ha(rL, 2), vc(0, h6 < 100 ? aY.ot(11, [k2[rL]]) : aY.ot(12, [k2[rL]]), 3, rL, ae.gG, ae.ks, -1, !0), vc(0, "Your Current Win Count is Now " + wins_counter, 3, rL, ae.gG, ae.ks, -1, !0), f.kO(rL, 2700, !1, 0)
	}, this.ux = function(gr) {
		var w2 = "(" + ao.gZ(gr >> 2) + ", " + ao.gb(gr >> 2) + ")",
			vh = !1,
			player = 0;
		a4.ex(gr) ? a4.f7(gr) ? w2 = aY.ot(13, [w2]) : (player = a4.f6(gr), w2 = aY.ot(14, [k2[player], ad.k0.k1(er[player]), ad.k0.k1(fL[player]), w2]), vh = !0) : w2 = a4.un(gr) ? aY.ot(15, [w2]) : aY.ot(16, [w2]), b7.d4 = !0, vv(55, 0), vc(
			220, w2, 55, player, ae.gG, ae.ks, -1, vh)
	}, this.uz = function(w3) {
		var pC = ap.j7,
			player = pC.w4[w3] >> 3;
		b7.d4 = !0, vv(55, 0), vc(220, aY.ot(17, [k2[player], pC.w5[w3]], {
			w6: [1]
		}), 55, player, ae.gG, ae.ks, -1, !0)
	}, this.m1 = function(lj, w7, m2) {
		lj === eq ? vc(175, aY.ot(18, [k2[w7]]), 1001, w7, vd(200, 255, 210), ae.ks, -1, !0, m2) : this.w8(lj, m2)
	}, this.w8 = function(lj, m2) {
		vv(1e3, 0), vc(175, aY.ot(19, [k2[lj]]), 1e3, lj, ae.gG, "rgba(5,60,25,0.9)", -1, !0, m2)
	}, this.rP = function(rM) {
		var w1;
		rM ? (w1 = aY.ot(20), n.rh(aY.ot(21), 2, 1, 12), vc(0, w1, 40, 0, "rgb(10,220,10)", ae.ks, -1, !1)) : (w1 = aY.ot(22), n.rh(aY.ot(23), 2, 0, 16), vc(0, w1, 41, 0, "rgb(200,80,80)", ae.ks, -1, !1)), f.kV(2700)
	}, this.qi = function(qh) {
		vc(300, qh[0].name + " [" + rN.qo(qh[0].ql) + "] vs " + qh[1].name + " [" + rN.qo(qh[1].ql) + "]", 65, 0, ae.jw, "rgba(100,255,255,0.75)", -1, !1)
	}, this.wA = function(w1) {
		vc(200, w1, 0, 0, "rgb(40,255,200)", "rgba(10,60,40,0.9)", -1, !1)
	}, this.wB = function() {
		vc(0, aY.ot(24), 247, 0, ae.lX, ae.ks, -1, !1)
	}, this.qq = function(qh, qn, qp, wC) {
		1 === aP.j7.wD() && (vc(0, qh[0].name + ": " + rN.qo(qh[0].ql) + " -> " + qn, 66, 0, ae.gG, wC[0], -1, !1), vc(0, qh[1].name + ": " + rN.qo(qh[1].ql) + " -> " + qp, 66, 1, ae.gG, wC[1], -1, !1))
	}, this.mJ = function(player, id) {
		0 === id ? vw(50, player) ? (vc(128, aY.ot(25, [k2[player]]), 52, player, vd(180, 255, 180), ae.ks, -1, !0), a8.n4(player, 2, 255)) : vc(384, aY.ot(26, [k2[player]]), 51, player, vd(210, 210, 255), ae.ks, -1, !0) : vw(51, player) ? (vc(
			128, aY.ot(27, [k2[player]]), 52, player, ae.gG, "rgba(60,120,10,0.9)", -1, !0), a8.n4(player, 2, 255)) : (vc(384, aY.ot(28, [k2[player]]), 50, player, ae.gG, "rgba(90,90,90,0.9)", -1, !0), a8.n4(player, 2, 96))
	}, this.mN = function(qh, target) {
		var color = vd(210, 255, 210);
		1 < qh.length ? vc(230, aY.ot(29, [qh.length, k2[target]]), 66, target, color, ae.ks, -1, !0) : vc(230, aY.ot(30, [k2[qh[0]], k2[target]]), 66, qh[0], color, ae.ks, target, !0)
	}, this.wE = function(player, target) {
		vc(230, aY.ot(31, [k2[player], k2[target]]), 66, player, ae.gG, "rgba(75,65,5,0.9)", target, !0)
	}, this.rH = function(id, player) {
		vw(id, player)
	}, this.ll = function() {
		var fw;
		100 <= er[eq] || (-1 === (fw = function(id) {
			for (var du = vR.length - 1; 0 <= du; du--)
				if (vR[du].id === id) return du;
			return -1
		}(143)) ? vc(80, aY.ot(32), 143, 0, ae.gG, ae.ks, -1, !1) : vR[fw].dV = 80)
	}, this.mE = function(wI, wJ, player) {
		2 !== h8[eq] && (vc(200, aY.ot(33, [wI, k2[player]], {
			w6: [0]
		}), 30, player, "rgb(190,255,190)", ae.ks, -1, !0), wJ) && vc(30, aY.ot(34, [wJ], {
			w6: [0]
		}), 30, 0, ae.gG, ae.ks, -1, !1)
	}, this.wK = function(wI, player) {
		2 !== h8[eq] && (vv(31, 0), 2 === h8[player] || h6 <= player ? vc(150, aY.ot(36, [k2[player], wI], {
			w6: [1]
		}), 31, player, ae.jw, "rgba(205,205,205,0.9)", -1, !0) : vc(150, aY.ot(35, [k2[player], wI], {
			w6: [1]
		}), 31, player, ae.jw, "rgba(205,255,205,0.9)", -1, !0))
	}, this.rU = function(wR) {
		for (var iW = b7.iV(), du = 2; 0 <= du; du--) 0 < vU.vZ[du] && (wR || vU.iW[du] < iW - 220) && this.wS(du)
	}, this.wS = function(id) {
		var dd, ev = vU.vZ[id],
			player = vU.qh[id];
		vU.vZ[id] = 0, 1 === ev ? (dd = 0 === id ? aY.ot(47, [wT(player, !0), wT(vU.vY[0], !0)]) : aY.ot(47 + id, [wT(player, !1)]), vv(7, 0), vc(vU.kJ[id], dd, 7, vU.vY[id], ae.gG, ae.ks, -1, !0)) : 2 <= ev && (dd = aY.ot(44 + id, [wT(player,
			0 === id), ev - 1]), vv(7, 0), vc(vU.kJ[id], dd, 7, player, ae.gG, ae.ks, -1, !1))
	}, this.vx = function(id, pb, pc) {
		var iW = b7.iV(),
			ev = vU.vZ[id] + 1;
		vU.vZ[id]++, vU.qh[id] = pb, vU.vY[id] = pc, 1 === ev && (vU.iW[id] = iW), (1 === ev && (rT < 32 || 2 === jH) || 1 < ev && (vU.iW[id] < iW - 140 || 2 === jH)) && this.wS(id)
	}, this.iH = function() {
		for (var gg = (gg = vR.length - vV) <= 1 ? 1 : gg * gg, du = vR.length - 1; 0 <= du; du--) 0 < vR[du].dV && (vR[du].dV -= gg, vR[du].dV <= 0) && (b7.d4 = !0, vR.splice(du, 1));
		! function() {
			var wF, du;
			if (128 !== vW && !(++vW < 128))
				for (wF = 5, du = iY - 1; 0 <= du; du--) 1 === h8[iZ[du]] && 0 < wF-- && vc(240, aY.ot(50, [k2[iZ[du]]]), 1, iZ[du], ae.jw, "rgba(255,255,255,0.75)", -1, !0)
		}(), this.rU(!1)
	}, this.gC = function() {
		for (var py, jl = gB(), du = vR.length - 1; 0 <= du; du--) py = jl - (du + 1) * i2, 50 === vR[du].id ? (gD.drawImage(vR[du].gP, js - vR[du].g2 - vT - tH, py), gD.drawImage(vX, js - vT - tH, py)) : gD.drawImage(vR[du].gP, js - vR[du].g2 -
			tH, py)
	}
}

function cu() {
	this.g2 = 0, this.i2 = 0, this.qd = 0, this.wY = 0, this.wZ = 0, this.fontSize = 0, this.fw = -1, this.v7 = ["Accept Cookies", "More Information", "Decline"], this.colors = ["rgba(0,255,0,0.4)", "rgba(0,0,255,0.4)", "rgba(255,0,0,0.4)"], this
		.sX = !1, this.cj = function() {
			this.resize(), this.sX = dX < 5 && !dT && 0 === a5.dq()
		}, this.resize = function() {
			this.g2 = Math.floor(2.8 * Math.floor((dg ? .09 : .062) * fu)), this.i2 = Math.floor(+this.g2), this.qd = Math.floor(.06 * this.g2), this.qe = this.g2 - 2 * this.qd, this.wY = this.qd, this.wZ = (this.i2 - (this.v7.length + 1) * this
				.wY) / this.v7.length, this.fontSize = Math.floor(.3 * this.wZ)
		}, this.g5 = function(g6, g7) {
			return !!this.sX && -1 !== (g6 = this.wa(g6, g7)) && (0 === g6 ? (a5.wb(2), this.sX = !1) : 1 === g6 ? az.cj(am.wc, !0) : 2 === g6 && (a5.wb(1), this.sX = !1), b7.d4 = !0)
		}, this.s6 = function(g6, g7) {
			var dW;
			return !!this.sX && (dW = this.fw, this.fw = this.wa(g6, g7), dW !== this.fw && (b7.d4 = !0), -1 !== this.fw)
		}, this.wa = function(g6, g7) {
			return g6 -= g8, g7 -= Math.floor(g9 - this.i2 - g8), g6 < 0 || g7 < 0 || g6 >= this.g2 || g7 >= this.i2 ? -1 : (g6 = Math.floor((g7 - .5 * this.wY) / ((this.i2 - this.wY) / this.v7.length))) < 0 ? 0 : g6 >= this.v7.length ? this.v7
				.length - 1 : g6
		}, this.gC = function() {
			this.sX && this.wd()
		}, this.wd = function() {
			var jk = g8,
				jl = Math.floor(g9 - this.i2 - g8);
			gD.setTransform(1, 0, 0, 1, jk, jl), gD.fillStyle = ae.ks, gD.fillRect(0, 0, this.g2, this.i2), gD.textBaseline = gE, gD.textAlign = gF, gD.strokeStyle = ae.gG, gD.font = fx + this.fontSize + fy, gD.strokeRect(0, 0, this.g2, this.i2);
			for (var du = this.v7.length - 1; 0 <= du; du--) gD.setTransform(1, 0, 0, 1, jk + this.qd, jl + this.wY + du * (this.wY + this.wZ)), gD.fillStyle = this.colors[du], gD.fillRect(0, 0, this.qe, this.wZ), this.fw === du && (gD.fillStyle = ae
				.ky, gD.fillRect(0, 0, this.qe, this.wZ)), gD.fillStyle = ae.gG, gD.fillText(this.v7[du], this.qe / 2, .54 * this.wZ), gD.strokeRect(0, 0, this.qe, this.wZ);
			gD.setTransform(1, 0, 0, 1, 0, 0)
		}
}

function bT() {
	var we, wf, wg, g2, i2, font;

	function wk(wl) {
		return wl < 10 ? "0" + wl : String(wl)
	}
	this.cj = function() {
		void 0 === g2 && this.resize(), this.setTime()
	}, this.resize = function() {
		g2 = Math.floor((dg ? .53 : .36) * fu), i2 = Math.floor(.065 * g2), font = fx + Math.floor(.9 * i2) + fy, wg--, this.setTime()
	}, this.iH = function() {
		this.setTime() && (b7.d4 = !0)
	}, this.setTime = function() {
		var dW = new Date,
			wi = dW.getUTCMinutes(),
			dW = dW.getUTCSeconds();
		return wf = 3600 - 60 * wi - dW, wf %= 900, we = "Next Contest: " + wk(Math.floor(wf / 60)) + ":" + wk(wf % 60), wg !== (wg = 60 * wi + dW) && (g2 = n.measureText(we, font), g2 += Math.floor(.4 * i2), !0)
	}, this.gC = function() {
		gD.lineWidth = 1 + Math.floor(i2 / 15), 7 === x.sg() && aL.wm() + 2 * g8 > .5 * (g9 - g2) ? gD.translate(js - i2, Math.floor(aL.wm() + 2 * g8 + g2)) : gD.translate(js - i2, Math.floor(.5 * (g9 + g2))), gD.rotate(-Math.PI / 2), gD
			.fillStyle = ae.gG, gD.fillRect(0, 0, g2, i2), gD.strokeStyle = ae.jw, gD.strokeRect(0, 0, g2, i2 + 10), gD.fillStyle = ae.jw, gD.font = font, gD.textBaseline = gE, gD.textAlign = gF, gD.fillText(we, Math.floor(g2 / 2), Math.floor(
				.59 * i2)), gD.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function cr() {
	this.wn = 10, this.wo = 50, this.wp = 50, this.wq = 8, this.wr = this.wo + this.wp, this.dv = this.wo + this.wp + this.wq, this.g2 = 72, this.ws = 0, this.wt = 0, this.uU = new Array(this.dv), this.wu = 8, this.wv = new Array(this.wo + this.wp),
		this.ww = new Array(this.wo + this.wp), this.jr = 0, this.jt = 0, this.zoom = 1, this.wx = .2, this.ul = 0, this.dw = null, this.wy = null, this.sX = !1, this.cj = function() {
			var du, wz, x0;
			for (this.dw = new Array(this.dv), this.wy = new Array(this.dv), wz = a3.uV("emojis"), this.x1(), du = this.ul = 0; du < this.wo; du++) this.x2(du, du, wz);
			for (x0 = a3.uV("flags"), du = 0; du < this.wp; du++) this.x2(du, this.wo + du, x0);
			this.x3(), this.uU[26] = this.x4(25, 2), this.x5()
		}, this.x2 = function(du, hk, iW) {
			this.dw[hk] = !1, this.wy[hk] = 0;
			var gP = document.createElement("canvas"),
				qY = (gP.width = this.g2, gP.height = this.g2, gP.getContext("2d", {
					alpha: !0
				}));
			qY.clearRect(0, 0, this.g2, this.g2), 23 === hk ? qY.drawImage(i.uQ()[4].gP[1], 0, 0) : 36 === hk ? qY.drawImage(i.uQ()[0].gP[2], 0, 0) : 49 === hk ? qY.drawImage(i.uQ()[2].gP[1], 0, 0) : qY.drawImage(iW, this.g2 * du % (du === hk ? this
				.wn * this.g2 : 4e3), du === hk ? en(du, this.wn) * this.g2 : 0, this.g2, this.g2, 0, 0, this.g2, this.g2), this.uU[hk] = gP
		}, this.x3 = function() {
			this.uU[this.dv - 5] = this.uU[26], this.uU[this.dv - 4] = this.x4(this.dv - 5, 2), this.uU[this.dv - 1] = this.x4(this.dv - 5, 1), this.uU[this.dv - 8] = this.x4(this.dv - 4, 1), this.uU[this.dv - 3] = this.uU[39], this.uU[this.dv - 2] =
				this.x4(this.dv - 3, 1), this.uU[this.dv - 7] = this.x4(this.dv - 2, 1), this.uU[this.dv - 6] = this.x4(this.dv - 7, 1)
		}, this.x4 = function(du, x6) {
			var gP = document.createElement("canvas"),
				qY = (gP.width = this.g2, gP.height = this.g2, gP.getContext("2d", {
					alpha: !0
				}));
			return qY.clearRect(0, 0, this.g2, this.g2), qY.rotate(x6 * Math.PI / 2), qY.drawImage(this.uU[du], 1 === x6 ? 0 : -this.g2, -this.g2), gP
		}, this.x5 = function() {
			var du, e0, gK = dj().split("");
			if (2 * gK.length !== this.dv) this.ul = 0;
			else {
				for (du = 0; du < this.dv; du += 2) e0 = parseInt(gK[Math.floor(du / 2)]), this.dw[du] = e0 % 2 == 1, this.dw[du + 1] = 1 < e0;
				this.x7()
			}
		}, this.x7 = function() {
			for (var du = this.ul = 0; du < this.dv; du++) this.dw[du] && (this.wy[this.ul++] = du)
		}, this.v2 = function() {
			8 === this.ul && this.wy[0] === this.wr && this.x7()
		}, this.x8 = function() {
			var du;
			for (this.ul = this.wq, du = 0; du < this.wq; du++) this.wy[du] = this.wr + du
		}, this.x1 = function() {
			this.ws = Math.floor((dg ? .075 : .0468) * fu), this.zoom = this.ws / this.g2, this.wt = (1 + this.wx) * this.ws
		}, this.show = function(g6, g7) {
			var du, xA, x9, qd, jp, jq;
			if (this.ul < 1) this.sX = !1;
			else {
				for (x9 = (x9 = Math.floor(js / this.wt)) < 3 ? 3 : x9 > this.wu ? this.wu : x9, xA = this.ul > x9 ? x9 : this.ul, x9 = 1 + en(this.ul - 1, xA), qd = Math.floor(xA * this.wt), jp = Math.floor(g6 - qd / 2), jp = (jp = js < jp + qd ?
						js - qd : jp) < 0 ? 0 : jp, jq = Math.floor(g7 - this.wt / 2), g6 = Math.floor(x9 * this.wt), jq = (jq = g9 < jq + g6 ? g9 - g6 : jq) < 0 ? 0 : jq, this.jr = jp + qd, this.jt = jq + g6, du = 0; du < this.ul; du++) this.wv[
					du] = Math.floor(jp + du % xA * this.wt), this.ww[du] = Math.floor(jq + en(du, xA) * this.wt);
				this.sX = !0
			}
		}, this.g5 = function(g6, g7, player) {
			return !!this.sX && (this.sX = !1, this.v1(g6, g7) && this.xC(g6, g7, player) && this.sX || (this.v2(), i.oK()), !0)
		}, this.v1 = function(g6, g7) {
			return !(g6 < this.wv[0] || g7 < this.ww[0] || g6 >= this.jr || g7 >= this.jt)
		}, this.xC = function(g6, g7, player) {
			for (var du = this.ul - 1; 0 <= du; du--)
				if (g6 >= this.wv[du] && g7 >= this.ww[du] && g6 <= this.wv[du] + this.wt && g7 <= this.ww[du] + this.wt) return 39 === this.wy[du] ? (this.x8(), this.show(g6, g7)) : (player === eq ? aa.fn.m1(this.wy[du]) : aa.fh.mG(this.wy[du],
					player), this.x7()), !0;
			return !1
		}, this.xD = function(du) {
			return du < 16 || 40 <= du && du < 47
		}, this.xE = function(du) {
			return du >= this.wo && du < this.wo + this.wp
		}, this.gC = function() {
			gD.imageSmoothingEnabled = !0;
			for (var gap = this.wx * this.ws / 2, du = this.ul - 1; 0 <= du; du--) gD.setTransform(this.zoom, 0, 0, this.zoom, this.wv[du] + gap, this.ww[du] + gap), gD.drawImage(this.uU[this.wy[du]], 0, 0);
			gD.imageSmoothingEnabled = !1, gD.setTransform(1, 0, 0, 1, 0, 0)
		}, this.xF = function(jk, jl, m2) {
			gD.imageSmoothingEnabled = !0, gD.setTransform(this.zoom, 0, 0, this.zoom, jk, jl), gD.drawImage(this.uU[m2], 0, 0), gD.imageSmoothingEnabled = !1, gD.setTransform(1, 0, 0, 1, 0, 0)
		}
}
var nc, xL, g8, tI, sQ, sR, gA, hD, hC, hE, yB, jR, a0J, k2, wW, h7, i6, i9, i5, i8, fL, qE, er, ew, fD, fE, fH, h8, iZ, iY, s5, gD, dh, di, xP, fu, js, g9, nS, dg, qW, a1s, uC, uD, gE = "middle",
	xG = "bottom",
	gF = "center",
	vu = "left",
	xH = "right",
	fx = "bold ",
	xI = "italic ",
	xJ = "normal ",
	fy = "px " + settings.fontName,
	xK = [fx, xI + fx, fx],
	xM = ["wss://", "/s50/", "/s51/", "/s52/"];

function d1() {
	xN(), (gA = new xO).cj()
}

function xN() {
	tI = .0022 * (1 + .5 * dg) * fu, g8 = (g8 = Math.floor((dg ? .02 : .01152) * fu)) < 2 ? 2 : g8, nc = (nc = Math.floor((dg ? .0114 : .01296) * fu)) < 2 ? 2 : nc, xL = (xL = Math.floor(.005 * xP)) < 1 ? 1 : xL
}

function xQ(qY, g2, i2) {
	qY.fillStyle = ae.gG, qY.fillRect(0, 0, g2, 1), qY.fillRect(0, i2 - 1, g2, 1), qY.fillRect(0, 0, 1, i2), qY.fillRect(g2 - 1, 0, 1, i2)
}

function bU() {
	var vR, xR, g1, i2, xS;

	function xY(du) {
		var g2 = vR[du].gP.width,
			qd = (vR[du].qY.clearRect(0, 0, g2, i2), vR[du].qY.fillStyle = 0 !== vR[du].id ? "rgba(33,33,120,0.83)" : vR[du].hd === ez ? "rgba(88,88,88,0.83)" : vR[du].hd < h6 ? "rgba(100,70,33,0.83)" : "rgba(33,100,80,0.83)", vR[du].qY.fillRect(0,
				0, g2, i2), xQ(vR[du].qY, g2, i2), xR + 2 * i2 < g2 && (vR[du].qY.fillRect(g2 - xR - i2, 0, 1, i2), vR[du].qY.fillText(k2[vR[du].hd], Math.floor((g2 - xR) / 2), Math.floor(.57 * i2))), 0 !== vR[du].id ? 0 : i2);
		vR[du].qY.fillText(ad.k0.k1(vR[du].he), Math.floor(g2 - xR / 2 - qd), Math.floor(.57 * i2)),
			function(du, g2, qd) {
				vR[du].qY.fillStyle = ae.kw;
				var xd = Math.floor(xR * vR[du].he / vR[du].xe);
				vR[du].qY.fillRect(Math.floor(g2 - xR - qd), i2 - xS, xd, xS)
			}(du, g2, qd), 0 === vR[du].id ? (xb(du, g2), function(du, g2) {
				vR[du].qY.strokeStyle = ae.l6, vR[du].qY.fillRect(i2, 0, 1, i2);
				g2 -= i2;
				vR[du].qY.beginPath(), vR[du].qY.moveTo(Math.floor(.3 * i2 + g2), Math.floor(i2 / 2)), vR[du].qY.lineTo(Math.floor(i2 - .3 * i2 + 0 + g2), Math.floor(i2 / 2)), vR[du].qY.stroke(), vR[du].qY.beginPath(), vR[du].qY.moveTo(Math
					.floor(i2 / 2 + g2), Math.floor(.3 * i2)), vR[du].qY.lineTo(Math.floor(i2 / 2 + g2), Math.floor(i2 - .3 * i2 + 0)), vR[du].qY.stroke()
			}(du, g2)) : xb(du, 2 * i2)
	}

	function xb(du, g2) {
		vR[du].qY.strokeStyle = vR[du].xf ? ae.l2 : ae.lG, vR[du].qY.fillStyle = ae.gG, vR[du].qY.fillRect(g2 - i2, 0, 1, i2);
		var xg = Math.floor(i2 / 12),
			xg = (vR[du].qY.lineWidth = xg < 3 ? 3 : xg, vR[du].qY.lineCap = "round", .35);
		g2 = i2 + 1, vR[du].qY.beginPath(), vR[du].qY.moveTo(Math.floor(g2 - xg * i2 + 0), Math.floor(xg * i2)), vR[du].qY.lineTo(Math.floor(g2 - i2 + xg * i2), Math.floor(i2 - xg * i2 + 0)), vR[du].qY.stroke(), vR[du].qY.beginPath(), vR[du].qY
			.moveTo(Math.floor(g2 - i2 + xg * i2), Math.floor(xg * i2)), vR[du].qY.lineTo(Math.floor(g2 - xg * i2 + 0), Math.floor(i2 - xg * i2 + 0)), vR[du].qY.stroke()
	}

	function xr(ev) {
		for (var he, du = ev - 1; 0 <= du; du--) he = a6.eh(eq, du), vR[du].he !== he && (vR[du].he = he, vR[du].xe = he > vR[du].xe ? he : vR[du].xe, vR[du].xZ = !0)
	}

	function xX(xt) {
		xt.gP = document.createElement("canvas"), au.pL.font = g1;
		var g2 = xR;
		xt.hd < ez && 0 === xt.id && (g2 += Math.floor(au.pL.measureText(k2[xt.hd] + "000").width)), g2 += i2, 0 === xt.id && (g2 += i2), xt.gP.width = g2, xt.gP.height = i2, xt.qY = xt.gP.getContext("2d", {
			alpha: !0
		}), xt.qY.font = g1, xt.qY.textBaseline = gE, xt.qY.textAlign = gF
	}

	function xn(du) {
		return r.xv() ? js - vR[du].gP.width - nc : r.jk
	}

	function xo(du) {
		return Math.floor(2 * nc + (r.xv() ? t.i2 + nc : 0) + r.i2 + du * (1.3 * i2))
	}
	this.cj = function() {
		vR = [], this.resize()
	}, this.resize = function() {
		g1 = k.g1, i2 = k.fontSize + 5, i2 = Math.floor(1.25 * i2), dg && (i2 = Math.floor(1.25 * i2)), xS = Math.floor(.15 * i2), au.pL.font = g1, xR = Math.floor(au.pL.measureText("02 000 000 0000").width);
		for (var du = vR.length - 1; 0 <= du; du--) xX(vR[du]), xY(du)
	}, this.jG = function() {
		for (var du = vR.length - 1; 0 <= du; du--) vR[du].xZ && (vR[du].xZ = !1, xY(du))
	}, this.g5 = function(g6, jl) {
		if (2 !== jH && 0 !== h7[eq] && !ff && a4.um(eq))
			for (var xi, xj, xk, xl = dg ? i2 : 0, xm = dg ? Math.floor(.15 * i2) : 0, du = vR.length - 1; 0 <= du; du--)
				if (xi = xn(du), xj = xo(du), xk = vR[du].gP.width, xj - xm <= jl && jl <= xj + i2 + xm) {
					if (xi - xl <= g6 && g6 <= xi + i2 + xl) return vR[du].xf || (vR[du].xZ = !0, vR[du].xf = !0, 0 === vR[du].id && aa.fn.lz(vR[du].hd)), !0;
					if (0 === vR[du].id && xi + xk - i2 - xl <= g6 && g6 <= xi + xk + xl) return aa.fn.fo(o.fp(), vR[du].hd), !0
				} return !1
	}, this.iH = function() {
		var ev;
		2 !== jH && 0 !== h7[eq] && !ff && a4.um(eq) && (function(ev) {
			if (vR.length !== ev) return 1;
			for (var du = ev - 1; 0 <= du; du--)
				if (vR[du].id !== a6.eb(eq, du) || vR[du].hd !== a6.eg(eq, du)) return 1;
			return
		}(ev = a6.ea(eq)) && function(ev) {
			var du, id, hd, hu, he, ve = [];
			loop: for (du = 0; du < ev; du++) {
				for (id = a6.eb(eq, du), hd = a6.eg(eq, du), hu = 0; hu < vR.length; hu++)
					if (vR[hu].id === id && vR[hu].hd === hd) {
						ve.push(vR.splice(hu, 1)[0]);
						continue loop
					} he = a6.eh(eq, du), xX(he = {
					hd: hd,
					he: he,
					xe: he,
					id: id,
					xZ: !0,
					xf: !1,
					gP: null,
					qY: null
				}), ve.push(he)
			}
			vR = ve
		}(ev), xr(ev))
	}, this.xu = function(f2) {
		for (var ev = Math.min(vR.length, a6.ea(eq)), du = 0; du < ev; du++)
			if (vR[du].hd === f2) return void(vR = [])
	}, this.gC = function() {
		if (0 !== h7[eq] && a4.um(eq) && !ff)
			for (var du = vR.length - 1; 0 <= du; du--) gD.drawImage(vR[du].gP, xn(du), xo(du))
	}
}

function bV() {
	var vR, ih, xw, xx, i2, g1, fontSize, xy, we, xz, y0, y1, gP, qY, kE, y2;

	function y9() {
		gD.drawImage(gP, nc + (hX ? nc + b9.yA() : 0), yB + 2 * nc)
	}

	function y3() {
		gP.width = vR[0].width + y0, gP.height = i2 + y0, (qY = gP.getContext("2d", {
				alpha: !0
			})).clearRect(0, 0, vR[0].width + y0, i2 + y0), qY.translate(Math.floor(y0 / 2), Math.floor(y0 / 2)), qY.lineWidth = y0, qY.fillStyle = 1 === vR[0].y8 ? ae.kz : ae.ks, yC(), qY.fill(), qY.strokeStyle = 1 === vR[0].y8 ? ae.jw : ae.gG,
		yC(), qY.stroke(), qY.textAlign = gF, qY.textBaseline = gE, qY.fillStyle = 1 === vR[0].y8 ? ae.jw : ae.gG, qY.font = g1[0], qY.fillText(we[vR[0].y7], Math.floor(vR[0].width / 2), Math.floor(.72 * xy[0] * i2)), qY.font = g1[1], qY.fillText(vR[
				0].dd, Math.floor(vR[0].width / 2), Math.floor((xy[0] + .48 * xy[1]) * i2))
	}

	function yC() {
		qY.beginPath(), qY.moveTo(y1, 0), qY.lineTo(vR[0].width - y1, 0), qY.lineTo(vR[0].width, y1), qY.lineTo(vR[0].width, i2 - y1), qY.lineTo(vR[0].width - y1, i2), qY.lineTo(y1, i2), qY.lineTo(0, i2 - y1), qY.lineTo(0, y1), qY.closePath()
	}
	this.cj = function() {
		ih = 4, xw = xx = kE = 0, vR = [], g1 = new Array(2), fontSize = new Array(2), xy = new Array(2), we = ["YOU ERASED", "YOU WERE ERASED BY", "THE GAME WAS WON BY", "MAP:"], xy[0] = .3, xy[1] = .7, xz = new Array(4), gP = document
			.createElement("canvas"), y2 = b7.dV + 2e3, this.resize()
	}, this.resize = function() {
		var du, g2;
		for (i2 = Math.floor((dg ? .0725 : .058) * fu), fontSize[0] = Math.floor(.85 * xy[0] * i2), fontSize[1] = Math.floor(.85 * xy[1] * i2), g1[0] = fx + fontSize[0] + fy, g1[1] = fx + fontSize[1] + fy, du = xz.length - 1; 0 <= du; du--) xz[
			du] = this.measureText(we[du] + "000", g1[0]);
		if (y0 = Math.floor(1 + .05 * i2), y1 = Math.floor(.2 * i2), 0 < vR.length) {
			for (du = vR.length - 1; 0 <= du; du--) g2 = this.measureText(vR[du].dd + "00", g1[1]), vR[du].width = g2 < xz[du] ? xz[du] : g2;
			y3()
		}
	}, this.iH = function() {
		0 !== ih && (4 === ih ? b7.dV > y2 && (ih = 0, 1 === jH) && n.rh(au.iu.pm[au.pn].name, 3, 1, 9) : (1 === ih ? (0 === xw && (y3(), xw = 1e-4), 1 <= (xw += .002 * (b7.dV - kE)) && (xx = 0, ih = 2, xw = 1), b7.d4 = !0) : 2 === ih ? ((xx += (
			b7.dV - kE) / 1e3) > vR[0].kJ || 1 < xx && 1 < vR.length) && (ih = 3) : 3 === ih && ((xw -= .002 * (b7.dV - kE)) <= 0 && (xw = 0, vR.shift(), ih = 0 < vR.length ? 1 : 0), b7.d4 = !0), kE = b7.dV))
	}, this.measureText = function(dd, g1) {
		return gD.font = g1, Math.floor(gD.measureText(dd).width)
	}, this.ha = function(y6, du) {
		this.rh(k2[y6], du, 1, 0 === du ? 3 : 7)
	}, this.rh = function(dd, y7, y8, kJ) {
		var g2 = (g2 = this.measureText(dd + "00", g1[1])) < xz[y7] ? xz[y7] : g2;
		vR.push({
			dd: dd,
			width: g2,
			y7: y7,
			y8: y8,
			kJ: kJ
		}), 0 === ih && (xw = 0, ih = 1, kE = b7.dV)
	}, this.gC = function() {
		0 !== ih && 0 !== xw && (xw < 1 ? (gD.globalAlpha = xw, y9(), gD.globalAlpha = 1) : y9())
	}
}

function c7() {
	var i2, gP, qY, yD, yE, yF, yG, yH, xZ, yI, yJ, yK, yL, yM;

	function fz() {
		var g2 = aN.g2,
			pC = (xZ = !1, qX(qY, g2, i2), Math.floor(g2 / 2));
		1 === yE ? (qY.fillStyle = ae.l8, qY.fillRect(pC, 0, pC, i2)) : -1 === yE && (qY.fillStyle = ae.lJ, qY.fillRect(0, 0, pC, i2)), qZ(qY, g2, i2, 2);
		var pC = (pC = Math.floor(.25 * i2)) < 2 ? 2 : pC,
			wM = (qY.fillStyle = ae.l0, Math.floor((i2 - 4) * yF[1] / yG[1]));
		0 < wM && qY.fillRect(2, i2 - 2 - wM, pC, wM), 0 < (wM = Math.floor((i2 - 4) * yF[0] / yG[0])) && qY.fillRect(g2 - 2 - pC, i2 - 2 - wM, pC, wM);
		pC = (pC = Math.floor(i2 / 8)) < 2 ? 2 : pC;
		qb(qY, Math.floor(.4 * i2), 0, i2, pC, .5, !1), qb(qY, Math.floor(g2 - 1.4 * i2), 0, i2, pC, .5, !0), qY.drawImage(yD, Math.floor((g2 - yD.width) / 2), 3)
	}

	function yO() {
		xZ = !0, yI = 140, yE = 0, yH = [], aN.sX = !1, k.rH(247, 0), yF[0] = yF[1] = 0
	}

	function gB() {
		return o.vo(k.vk()) ? o.jl - i2 - nc : af.vo(k.vn()) ? af.gB() - i2 - nc : di - i2 - aR.vp() * nc
	}
	this.sX = !1, this.g2 = 0, this.cj = function() {
		yK = yL = 0, this.sX = !1, xZ = yM = !1, yI = 140, yF = [yE = 0, 0], yG = [1, 1], yH = [], yJ = new Uint32Array(10), this.resize()
	}, this.resize = function() {
		i2 = o.i2, this.g2 = 4 * i2, this.yN(), (gP = document.createElement("canvas")).width = this.g2, gP.height = i2, qY = gP.getContext("2d", {
			alpha: !0
		}), fz()
	}, this.jG = function() {
		xZ && fz()
	}, this.yN = function() {
		var gQ, y0, pC, wY = (wY = i2 - 6) < 6 ? 6 : wY;
		void 0 !== yD && yD.width === wY || ((yD = document.createElement("canvas")).width = wY, yD.height = wY, (gQ = yD.getContext("2d", {
				alpha: !0
			})).clearRect(0, 0, wY, wY), y0 = Math.floor(wY / 8), gQ.lineWidth = y0 = y0 < 1 ? 1 : y0, gQ.strokeStyle = ae.gG, pC = Math.floor(wY / 2), wY = Math.floor((wY - y0) / 2), gQ.beginPath(), gQ.arc(pC, pC, wY, 0, 2 * Math.PI), gQ
			.moveTo(pC, pC - wY), gQ.lineTo(pC, pC + wY), gQ.moveTo(pC + Math.cos(.78 * Math.PI) * wY, pC + Math.cos(.28 * Math.PI) * wY), gQ.lineTo(pC, pC), gQ.lineTo(pC + Math.cos(.22 * Math.PI) * wY, pC + Math.cos(1.72 * Math.PI) * wY), gQ
			.stroke())
	}, this.g5 = function(jk, jl) {
		var jq;
		return !(jk < dh - this.g2 - nc || jl < (jq = gB()) || jq + i2 < jl || (ff || aa.fn.m5(jk > dh - nc - this.g2 / 2 ? 1 : 0), 0))
	}, this.iH = function() {
		if (0 < yL) 0 === --yL && yO();
		else if (this.sX) 270 == --yI && 2 <= yK && function() {
			var du;
			for (du = iY - 1; 0 <= du; du--)
				if (a4.um(iZ[du])) return;
			return 1
		}() && (xZ = !0, yF[0] += yG[0]), 180 === yI && 3 * yF[0] < yG[0] ? yO() : yF[0] >= yG[0] ? yM ? at.rC.rF() : at.rC.rK(-1) : yF[1] >= yG[1] ? yL = 4 : yI <= 0 && yO();
		else if (function() {
				var du;
				for (du = 9; 0 <= du; du--) 12 < Math.abs(yJ[du] - fL[jR[du]]) && (yI = 140), yJ[du] = fL[jR[du]];
				if (--yI <= 0) return 1;
				return
			}()) {
			(yM = yR()) && k.wB(), this.sX = !0, yI = 360;
			var du, dW = 0;
			for (du = iY - 1; 0 <= du; du--) a4.um(iZ[du]) && (dW += fL[iZ[du]]);
			yG[0] = vm(en(3 * dW, 5), 1), hX && 9 !== iw && (yG[0] = yT(vm(en(dW * (100 - en(100 * b9.rf(), tt)), 100), 1), yG[0])), yG[1] = vm(dW - yG[0], 1), yK++
		}
	}, this.rR = function() {
		this.sX && yF[0] < yG[0] && yO()
	}, this.n5 = function(player, yV) {
		var du, dW;
		if (this.sX) {
			for (du = yH.length - 1; 0 <= du; du--)
				if (yH[du] === player) return;
			yH.push(player), xZ = !0, dW = iy ? yG[0] : fL[player], yV ? yF[0] += dW : yF[1] += dW, player === eq && (yE = yV ? 1 : -1)
		}
	}, this.gC = function() {
		var jl;
		this.sX && (jl = gB(), gD.drawImage(gP, dh - this.g2 - nc, jl))
	}
}

function bW() {
	var g2, jk, yW, gP, qY, sX, hB, yX, g1, xZ, yY = 11 / 12;

	function ya() {
		var xd = Math.floor(hB * (g2 - 2 * yW)),
			yd = 1 + Math.floor(.0625 * o.i2),
			ye = 1 + Math.floor(.3 * o.i2),
			wY = Math.floor(.55 * o.i2);
		qY.clearRect(0, 0, g2, o.i2), qY.fillStyle = ae.kr, qY.fillRect(0, 0, yW, o.i2), qY.fillRect(yW + xd, 0, g2 - yW - xd, o.i2), qY.fillStyle = hB < 1 / 3 ? "rgba(" + Math.floor(3 * hB * 130) + ",130,0,0.85)" : hB < 2 / 3 ? "rgba(130," + (130 -
				Math.floor(3 * (hB - 1 / 3) * 130)) + ",0,0.85)" : "rgba(130,0," + Math.floor(3 * (hB - 2 / 3) * 130) + ",0.85)", qY.fillRect(yW, 0, xd, o.i2), qY.fillStyle = ae.gG, qY.fillRect(0, 0, g2, 1), qY.fillRect(0, o.i2 - 1, g2, 1), qY
			.fillRect(0, 0, 1, o.i2), qY.fillRect(yW, 0, 1, o.i2), qY.fillRect(yW + xd, 0, 1, o.i2), qY.fillRect(g2 - yW, 0, 1, o.i2), qY.fillRect(g2 - 1, 0, 1, o.i2), qY.fillRect(Math.floor(.25 * o.i2) + ye, Math.floor((o.i2 - yd) / 2), o.i2 - 2 *
				ye, yd), qY.fillRect(Math.floor(g2 - 1.25 * o.i2) + ye, Math.floor((o.i2 - yd) / 2), o.i2 - 2 * ye - ye % 2, yd), qY.fillRect(Math.floor(g2 - 1.25 * o.i2) + Math.floor((o.i2 - yd) / 2), ye, yd, o.i2 - 2 * ye - ye % 2), yX = ad.fh.hA(
				eq, o.fp()), qY.fillText(ad.k0.k1(yX) + " (" + ad.k0.tg(100 * hB, 0) + ")", Math.floor(.5 * g2), wY)
	}
	this.setAbsolutePercentage = function(newPercentage) {
		hB = newPercentage;
	};
	keybindFunctions.setAbsolute = this.setAbsolutePercentage;
	keybindFunctions.setRelative = (arg1) => o.sn(arg1);

	function yi(fs) {
		return !(1 < fs && 1 === hB || (1 < fs && fs * hB - hB < 1 / 1024 ? fs = (hB + 1 / 1024) / hB : fs < 1 && hB - fs * hB < 1 / 1024 && (fs = (hB - 1 / 1024) / hB), hB = an.t4(hB * fs, 1 / 1024, 1), ya(), 0))
	}

	function yj(g6) {
		return hB !== (hB = an.t4((g6 - jk - yW) / (g2 - 2 * yW), 1 / 1024, 1)) && (ya(), !0)
	}
	this.jl = 0, this.sY = !1, this.cj = function() {
		sX = !kN && !ff, xZ = !1, hB = .5, yX = 0, this.sY = !1, this.resize()
	}, this.resize = function() {
		dg && dh < .8 * di ? (this.i2 = Math.floor(.0536 * fu), g2 = dh - 4 * nc - this.i2) : (g2 = Math.floor((dg ? .65 : .389) * fu), g2 += 12 - g2 % 12, this.i2 = Math.floor(g2 / 12)), yW = Math.floor(3 * this.i2 / 2), g1 = fx + Math.floor(
			.5 * this.i2) + fy, (gP = document.createElement("canvas")).width = g2, gP.height = this.i2, (qY = gP.getContext("2d", {
			alpha: !0
		})).font = g1, qY.textBaseline = gE, ad.km.textAlign(qY, 1), this.yZ(), ya()
	}, this.yZ = function() {
		jk = dg && dh < .8 * di ? this.i2 + 3 * nc : Math.floor((js - g2) / 2), this.jl = g9 - this.i2 - aR.vp() * nc
	}, this.jG = function() {
		xZ && (xZ = !1, ya())
	}, this.sX = function() {
		return !(!sX || j.fg && jk < Math.floor(nc + 5.5 * this.i2))
	}, this.vo = function(g3) {
		return !!this.sX() && dh - g3 - nc < jk + g2
	}, this.dS = function() {
		sX = !ff
	}, this.yO = function() {
		sX = !1
	}, this.fp = function() {
		return an.t4(Math.floor(1024 * hB + .5) - 1, 0, 1023)
	}, this.se = function(g6, g7) {
		return this.sX() && jk < g6 && g6 < jk + g2 && g7 > this.jl
	}, this.g5 = function(g6, g7) {
		return !!this.sX() && !!o.se(g6, g7) && (p.kR = !1, function(v4, g6, g7) {
			if (function(g6, g7) {
					return jk < g6 && g6 < jk + yW && g7 > o.jl
				}(g6, g7)) return yi(yY);
			if (function(g6, g7) {
					return jk + g2 - yW < g6 && g6 < jk + g2 && g7 > o.jl
				}(g6, g7)) return yi(1 / yY);
			return v4.sY = !0, yj(g6)
		}(this, g6, g7) && (b7.d4 = !0), !0)
	}, this.sn = function(kY) {
		0 !== jH && this.sX() && yi(kY) && (b7.d4 = !0)
	}, this.s9 = function(deltaY) {
		var kY;
		return !(0 === deltaY || !this.sX()) && yi(kY = 0 < deltaY ? (kY = 400 / (400 + deltaY)) < yY ? yY : kY : 1 / yY < (kY = (400 - deltaY) / 400) ? 1 / yY : kY)
	}, this.s6 = function(g6, g7) {
		return !!this.sY && yj(g6)
	}, this.sa = function() {
		this.sY = !1
	}, this.iH = function() {
		this.sX() && yX !== ad.fh.hA(eq, this.fp()) && (xZ = !0)
	}, this.gC = function() {
		this.sX() && gD.drawImage(gP, jk, this.jl)
	}
}

function cN() {
	var gP, qY, yk, font, yl = 0,
		ym = !1,
		yn = [10, 5, 3, 2, 1.5, 1, .75, .5, .25],
		yo = 5;

	function wd() {
		if (ym) {
			var du, ev = yn.length,
				wY = Math.floor(.5 * yk.i2),
				i2 = ev * wY,
				jk = Math.floor(Math.floor(yk.jk) + .3 * yk.g2 - .5),
				jl = Math.floor(Math.floor(yk.jl) - i2),
				g2 = Math.floor(.4 * yk.g2 + 2.5);
			for (gD.fillStyle = ae.kr, gD.fillRect(jk, jl, g2, i2), gD.fillStyle = ae.lD, gD.fillRect(jk, jl + yo * wY, g2, wY), gD.fillStyle = ae.gG, gD.fillRect(jk, jl, 2, i2), gD.fillRect(jk, jl, g2, 2), gD.fillRect(jk + g2 - 2, jl, 2, i2), du =
				1; du < ev; du++) gD.fillRect(jk, jl + du * wY, g2, 2);
			for (gD.fillStyle = ae.gG, ad.km.textAlign(gD, 1), ad.km.textBaseline(gD, 1), gD.font = ad.km.oJ(.6 * wY, 0), jk += .5 * g2, du = 0; du < ev; du++) gD.fillText(z1(du), jk, jl + (du + .6) * wY)
		}
		gD.drawImage(gP, Math.floor(yk.jk), Math.floor(yk.jl))
	}

	function fz(v4) {
		var jk, jp, jq, wY;
		qY.clearRect(0, 0, Math.floor(yk.g2), Math.floor(yk.i2)), qY.fillStyle = ae.kr, qY.fillRect(0, 0, Math.floor(yk.g2), Math.floor(yk.i2)), kQ && (qY.fillStyle = ae.lD, qY.fillRect(0, 0, Math.floor(.3 * yk.g2), Math.floor(yk.i2))), qY
			.fillStyle = ae.gG, qY.fillText("Hide UI", .15 * yk.g2, .5 * yk.i2), qY.fillRect(Math.floor(.3 * yk.g2 - .5), 0, 2, Math.floor(yk.i2)), jk = .5 * yk.g2, qY.fillText("Replay Speed", jk, .31 * yk.i2), qY.fillText(z1(yo), jk, .69 * yk.i2),
			qY.fillRect(Math.floor(.7 * yk.g2 - .5), 0, 2, Math.floor(yk.i2)), v4.vC ? (jk = Math.floor(.02 * yk.g2), v4 = Math.floor(.025 * yk.g2), jp = Math.floor(.85 * yk.g2 - jk - .5 * v4), jq = Math.floor(.25 * yk.i2), wY = Math.floor(yk.i2) -
				2 * jq, qY.fillRect(jp, jq, jk, wY), qY.fillRect(jp + jk + v4, jq, jk, wY)) : function() {
				var g2 = Math.floor(.46 * yk.i2),
					i2 = Math.floor(.23 * yk.i2),
					jk = Math.floor(.85 * yk.g2 - .5 * g2 + g2 / 12),
					jl = Math.floor(.5 * yk.i2 - i2);
				qY.beginPath(), qY.moveTo(jk, jl), qY.lineTo(jk + g2, jl + i2), qY.lineTo(jk, jl + (i2 << 1)), qY.fill()
			}(), qY.fillRect(0, 0, Math.floor(yk.g2), 2), qY.fillRect(0, 0, 2, Math.floor(yk.i2)), qY.fillRect(0, Math.floor(yk.i2) - 2, Math.floor(yk.g2), 2), qY.fillRect(Math.floor(yk.g2 - 2), 0, 2, Math.floor(yk.i2))
	}

	function z1(du) {
		return 5 === du ? "Normal" : "" + yn[du]
	}
	this.vC = !1, this.cj = function() {
		ff && (yo = 5, this.vC = !1, ym = !1, yk = new nZ([.3, .3 / 6], [.5, 1]), this.resize())
	}, this.yp = function() {
		return yn[yo]
	}, this.gB = function() {
		return yk.jl
	}, this.vo = function(g3) {
		return !!ff && yk.jk + yk.g2 > dh - g3 - nc
	}, this.resize = function() {
		ff && (yk.resize(), yk.jl -= (aR.vp() - 1) * nc, font = ad.km.oJ(.3 * yk.i2, 0), (gP = document.createElement("canvas")).width = Math.floor(yk.g2), gP.height = Math.floor(yk.i2), (qY = gP.getContext("2d", {
			alpha: !0
		})).font = font, ad.km.textAlign(qY, 1), ad.km.textBaseline(qY, 1), fz(this))
	}, this.sj = function(yq) {
		yq !== kQ && (kQ = yq, b9.resize(), b7.d4 = !0, ff) && (yl = b7.dV + 2e3, fz(this))
	}, this.g5 = function(jk, jl) {
		if (!ff) return !1;
		if (jk < yk.jk || jl < yk.jl || jk > yk.jk + yk.g2) return ym && function(v4, jk, jl) {
			var ev = yn.length,
				wY = Math.floor(.5 * yk.i2),
				i2 = ev * wY,
				jp = Math.floor(Math.floor(yk.jk) + .3 * yk.g2 - .5),
				i2 = Math.floor(Math.floor(yk.jl) - i2),
				g2 = Math.floor(.4 * yk.g2 + 2.5);
			return ym = !1, b7.d4 = !0, jk < jp || jp + g2 < jk || jl < i2 || (yo = yt(0, Math.floor((jl - i2) / wY), ev - 1), fz(v4)), !0
		}(this, jk, jl);
		if ((jk -= yk.jk) < .3 * yk.g2) ym = !1, this.sj(!kQ);
		else {
			if (jk < .7 * yk.g2) return ym = !ym, b7.d4 = !0;
			this.sl(!1)
		}
		return !0
	}, this.sl = function(ys) {
		2 === jH ? (this.sj(!1), ac.show()) : (ym = !1, this.vC = !this.vC, this.vC ? j.fg ? j.sk() : dy(1) : ys || j.vD(), b7.d4 = !0, fz(this))
	}, this.sS = function(jk, jl) {
		return !!kQ && (j.g5(jk, jl) || (ff ? ((b7.dV > yl || !this.g5(jk, jl)) && p.g5(jk, jl), b7.d4 = !0, yl = b7.dV + 2e3) : p.g5(jk, jl)), !0)
	}, this.iH = function() {
		ff && kQ && b7.dV > yl - 1e3 && b7.dV < yl && (b7.d4 = !0)
	}, this.rV = function() {
		ff && (this.vC = !1, b7.d4 = !0, fz(this))
	}, this.gC = function() {
		if (ff) {
			if (kQ) {
				if (b7.dV > yl) return;
				if (b7.dV > yl - 1e3) return gD.globalAlpha = yt(0, (1e3 - (b7.dV - (yl - 1e3))) / 1e3, 1), wd(), void(gD.globalAlpha = 1)
			}
			wd()
		}
	}
}

function cK() {
	var yk, oY, tG, wY;
	this.sX = !1, this.oa = !1, this.vO = function() {
		return !aX.it && au.pn !== au.z2() && (ff || 2 === jH)
	}, this.show = function() {
		this.sX = !0, yk || (yk = new nZ([.55, .35], [.5, .5]), (oY = new oX).cj()), this.resize(), 0 === jH ? oY.oc("") : (ab.mm.z6.length || (ab.mm.z6 = ab.z9.r6()), oY.oc(ab.zA(ab.mm.z6))), oY.show(), b7.d4 = !0, z.dS(!1)
	}, this.oK = function() {
		this.sX && (this.sX = !1, this.oa = !1, oY.oK(), b7.d4 = !0, 0 === jH && ak.og(), 0 === x.sg()) && z.dS(!0)
	}, this.resize = function() {
		this.sX && (yk.resize(), tG = .03 * yk.i2, wY = .2 * yk.i2, oY.resize(yk.jk + tG, yk.jl + wY + tG, yk.g2 - 2 * tG, yk.i2 - 2 * (wY + tG)))
	}, this.g5 = function(jk, jl) {
		return !!this.sX && (jk < yk.jk || jl < yk.jl || jk > yk.jk + yk.g2 || jl > yk.jl + yk.i2 ? 2 !== j.g5(jk, jl) && this.oK() : jl < yk.jl + yk.i2 - wY ? jk > yk.jk + yk.g2 - wY && jl < yk.jl + wY && this.oK() : (jk -= yk.jk) < .25 * yk
			.g2 ? oY.oe() : jk < .5 * yk.g2 ? oY.oh() : jk < .75 * yk.g2 ? oY.og() : (jl = this, jk = ab.z5(oY.od()), jl.oK(), (0 < jk.length && jk === ab.mm.z6 || ab.z8.pA(jk)) && ab.z7()), !0)
	}, this.gC = function() {
		var du;
		if (this.sX)
			for (ad.km.textAlign(gD, 1), gD.fillStyle = ae.lM, gD.fillRect(yk.jk, yk.jl, yk.g2, wY), gD.fillStyle = ae.kr, gD.fillRect(yk.jk, yk.jl + wY, yk.g2, yk.i2 - wY), gD.fillStyle = ae.gG, gD.fillRect(yk.jk, yk.jl, 2, yk.i2), gD.fillRect(
					yk.jk, yk.jl, yk.g2, 2), gD.fillRect(yk.jk + yk.g2 - 2, yk.jl, 2, yk.i2), gD.fillRect(yk.jk, yk.jl + yk.i2 - 2, yk.g2, 2), gD.fillRect(yk.jk + 1, yk.jl + wY, yk.g2 - 2, 2), gD.fillRect(yk.jk + 1, yk.jl + yk.i2 - wY, yk.g2 - 2,
					2), gD.font = fx + Math.floor(.39 * wY) + fy, gD.fillText("Replay", yk.jk + .5 * yk.g2, yk.jl + .55 * wY), j.vP(yk.jk + yk.g2 - .725 * wY, yk.jl + .275 * wY, .45 * wY), gD.setTransform(1, 0, 0, 1, 0, 0), gD.font = ad.km.oJ(
					.3 * wY, 0), gD.fillText("Select All", yk.jk + .125 * yk.g2, yk.jl + yk.i2 - .48 * wY), gD.fillText("Copy", yk.jk + .375 * yk.g2, yk.jl + yk.i2 - .48 * wY), gD.fillText("Clear", yk.jk + .625 * yk.g2, yk.jl + yk.i2 - .48 * wY),
				gD.fillText("Launch", yk.jk + .875 * yk.g2, yk.jl + yk.i2 - .48 * wY), du = 1; du < 4; du++) gD.fillRect(yk.jk + .25 * du * yk.g2 - 1, yk.jl + yk.i2 - wY + 1, 2, wY - 2)
	}
}

function bX() {
	var zC, zD, g2, jk, jl, zE, zF;
	this.cj = function() {
		zC = new Array(2), zD = new Array(2), this.kR = !1, zF = zE = hE = hC = 0, hD = 1, this.resize()
	}, this.resize = function() {
		g2 = (g2 = Math.floor((dg ? .072 : .0502) * fu)) < 8 ? 8 : g2;
		for (var du = 1; 0 <= du; du--) zC[du] = document.createElement("canvas"), zC[du].width = g2, zC[du].height = g2, zD[du] = zC[du].getContext("2d", {
			alpha: !0
		});
		this.yZ(),
			function() {
				for (var zV = Math.floor(1 + g2 / 20), du = 1; 0 <= du; du--) zD[du].clearRect(0, 0, g2, g2), zD[du].fillStyle = ae.ko, zD[du].beginPath(), zD[du].arc(g2 / 2, g2 / 2, g2 / 2 - zV, 0, 2 * Math.PI), zD[du].fill(), zD[du].lineWidth =
					zV, zD[du].fillStyle = ae.gG, zD[du].strokeStyle = ae.gG, zD[du].beginPath(), zD[du].arc(g2 / 2, g2 / 2, g2 / 2 - zV, 0, 2 * Math.PI), zD[du].stroke(), qb(zD[du], 0, 0, g2, zV, .3, 0 === du)
			}()
	}, this.ju = function() {
		return -hC / hD
	}, this.gB = function() {
		return -hE / hD
	}, this.ka = function(zJ, gv) {
		hC = hD * zJ - gv
	}, this.kb = function(zK, gw) {
		hE = hD * zK - gw
	}, this.g5 = function(zI, vq) {
		return kQ || ! function(zI, vq) {
			return Math.pow(zI - (jk + g2 / 2), 2) + Math.pow(vq - (jl + g2 / 2), 2) < g2 * g2 / 4 || Math.pow(zI - (jk + g2 / 2), 2) + Math.pow(vq - (jl + 2 * g2), 2) < g2 * g2 / 4
		}(zI, vq) || aR.jy.zL ? (f.kd() && (this.kR = !0, zE = zI, zF = vq), !1) : vq < jl + 1.25 * g2 ? this.s9(Math.floor(js / 2), Math.floor(g9 / 2), -200) : this.s9(Math.floor(js / 2), Math.floor(g9 / 2), 200)
	}, this.s6 = function(zI, vq) {
		var zM, zN, gy, h1;
		return !f.kd() || (zM = hC, zN = hE, hC += gy = zE - zI, hE += h1 = zF - vq, a8.s6(gy, h1), this.zO(), zE = zI, zF = vq, zM !== hC) || zN !== hE
	}, this.s9 = function(g6, g7, deltaY) {
		var kY;
		if (f.kd()) {
			if (0 < deltaY) kY = (kY = 500 / (500 + deltaY)) < .5 ? .5 : kY;
			else {
				if (!(deltaY < 0)) return !1;
				kY = 2 < (kY = (500 - deltaY) / 500) ? 2 : kY
			}
			this.zP(g6, g7, kY), b7.d4 = !0
		}
		return !0
	}, this.zP = function(jk, jl, gr) {
		var fs;
		gr = fs = (fs = 1024 < (fs = gr) * hD ? 1024 / hD : fs) * hD < .125 ? .125 / hD : fs, a8.zoom(gr, jk, jl),
			function(fs, g6, g7) {
				hD *= fs, hC = (hC + g6) * fs - g6, hE = (hE + g7) * fs - g7, p.zO()
			}(gr, jk, jl)
	}, this.zO = function() {
		var zS = dh / 16,
			gY = 0,
			zT = di / 16,
			ga = 0;
		hC < zS - dh && (gY = zS - dh - hC), hC > hD * au.eV - zS && (gY = hD * au.eV - zS - hC), hE < zT - di && (ga = zT - di - hE), hE > hD * au.eW - zT && (ga = hD * au.eW - zT - hE), hC += gY, hE += ga, b1.kc(), a8.zU(gY, ga)
	}, this.yZ = function() {
		jk = js - g2 - nc, jl = Math.floor(g9 / 2 - 1.25 * g2)
	}, this.gC = function() {
		aR.jy.zL || (gD.drawImage(zC[0], jk, jl), gD.drawImage(zC[1], jk, Math.floor(jl + 3 * g2 / 2)))
	}
}

function bY() {
	var e9, pq, zW, zX, gap, zY, zZ, za, zb, zc, g1, zd, ze, zf, zg, xd, zh, zi, zj;

	function zn() {
		zX = Math.floor(.2 * (dg ? .07 : .035) * fu), zX = vm(dg ? 3 : 1, zX);
		var zs = dh / (e9.length + gap);
		zX = zX < zs ? zs : zX, xd = Math.floor((1 - gap) * zX), pq = 0, zt()
	}

	function zt() {
		pq = (pq = pq < -20 ? -20 : pq) > (e9.length - 15) * zX ? (e9.length - 15) * zX : pq, zZ = Math.floor(pq / zX), za = (za = zZ + Math.floor(js / zX)) > e9.length - 1 ? e9.length - 1 : za, zZ = (zZ = za < zZ ? za : zZ) < 0 ? 0 : zZ;
		var pC = za;
		zY = zW / e9[pC];
		for (var du = za - 1; zZ <= du; du--) e9[du] > e9[pC] && (pC = du, zY = zW / Math.pow(e9[du], zg))
	}

	function zw(jk) {
		jk = Math.floor((pq + js - jk - gap * zX) / zX);
		return (jk = jk < -1 ? -1 : -1 === jk ? 0 : jk > e9.length - 1 ? -1 : jk) !== zb && (zb = jk, -1 === zh && 0 === zb && zf && (zh = setInterval(zx, 100)), 1)
	}

	function zy(du) {
		var xS = Math.floor(zY * Math.pow(e9[du], zg));
		gD.fillRect(pq + js - (du + 1) * zX, g9 - xS, xd, xS)
	}

	function zx() {
		var f2;
		0 !== (zb = 8 === x.sg() ? -1 : zb) ? (zi = (new Date).getTime(), clearInterval(zh), zh = -1) : (f2 = e9[1] / 864e3, -1 !== zi && (f2 += ((new Date).getTime() - zi) * e9[1] / 864e5, zi = -1), 0 < f2 && (e9[0] += Math.floor(f2), b7.d4 = !0))
	}
	this.cj = function() {
		zf = !(zi = zh = -1), zb = -(zg = 1), this.zk = !1, ze = 0, zd = new Date, pq = 0, gap = .3, (zj = []).push({
			wF: "Plateau A",
			ev: 0,
			dE: 57
		}), zj.push({
			wF: "Max A",
			ev: 1,
			dE: 1
		}), zj.push({
			wF: "Black Friday",
			ev: 15,
			dE: 15
		}), zj.push({
			wF: "Max B",
			ev: 19,
			dE: 19
		}), zj.push({
			wF: "Max C",
			ev: 44,
			dE: 44
		}), zj.push({
			wF: "First Android Version",
			ev: 58,
			dE: 58
		}), zj.push({
			wF: "Max D",
			ev: 67,
			dE: 67
		}), zj.push({
			wF: "The iFrame Explosion",
			ev: 98,
			dE: 99
		}), zj.push({
			wF: "The 155-Day Uptrend",
			ev: 58,
			dE: 213
		}), zj.push({
			wF: "Max E",
			ev: 213,
			dE: 213
		}), zj.push({
			wF: "Plateau B",
			ev: 214,
			dE: 259
		}), zj.push({
			wF: "Turbulent Times",
			ev: 260,
			dE: 344
		}), zj.push({
			wF: "Max F",
			ev: 262,
			dE: 262
		}), zj.push({
			wF: "Max G",
			ev: 282,
			dE: 282
		}), zj.push({
			wF: "Max H",
			ev: 333,
			dE: 333
		}), zj.push({
			wF: "The 19-Day Downtrend",
			ev: 283,
			dE: 301
		}), zj.push({
			wF: "Plateau C",
			ev: 345,
			dE: 385
		}), zj.push({
			wF: "The Alliance Ascent",
			ev: 386,
			dE: 395
		}), zj.push({
			wF: "Max I",
			ev: 395,
			dE: 395
		}), zj.push({
			wF: "First iOS Version",
			ev: 411,
			dE: 411
		}), zj.push({
			wF: "Plateau D",
			ev: 396,
			dE: 453
		}), zj.push({
			wF: "The TikTok Revolution",
			ev: 454,
			dE: 470
		}), zj.push({
			wF: "Max J",
			ev: 456,
			dE: 456
		}), zj.push({
			wF: "Max K",
			ev: 472,
			dE: 472
		}), zj.push({
			wF: "Max L",
			ev: 478,
			dE: 478
		}), zj.push({
			wF: "YT Drew",
			ev: 471,
			dE: 485
		}), zj.push({
			wF: "Plateau E",
			ev: 485,
			dE: 600
		}), zj.push({
			wF: "Uptrend A",
			ev: 600,
			dE: 613
		}), zj.push({
			wF: "Max M",
			ev: 613,
			dE: 613
		}), zj.push({
			wF: "Downtrend A",
			ev: 614,
			dE: 635
		}), zj.push({
			wF: "Plateau F",
			ev: 636,
			dE: 737
		}), zj.push({
			wF: "End of Record",
			ev: 738,
			dE: 738
		}), e9 = [208644377, 208644377, 208644377, 206964709, 205156594, 250680803, 249089835, 234476552, 252346209, 263196406, 270821533, 291436400, 294907103, 288866179, 297960890, 310165928, 323215738, 326005712, 312078872, 282668674,
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
		], this.resize(), aP.j7.zm(0, 0)
	}, this.resize = function() {
		zW = Math.floor(.15 * di), zc = Math.floor((dg ? .018 : .0137) * fu), g1 = fx + (zc = zc < 2 ? 2 : zc) + fy, zn()
	}, this.zo = function() {
		zf || aP.lj.zp()
	}, this.zq = function(zr) {
		var du;
		for (zf = !0, du = 0; du < zr.length; du++) e9.unshift(zr[du]);
		zn(), b7.d4 = !0
	}, this.zu = function() {
		zt()
	}, this.s6 = function(jk, jl) {
		g9 - .6 * zW < jl ? this.zk ? jk !== ze && (pq += jk - ze, ze = jk, zt(), zw(jk), this.zk = -1 !== zb, b7.d4 = !0) : zw(jk) && (b7.d4 = !0) : this.ox()
	}, this.ox = function() {
		-1 !== zb && (this.zk = !1, zb = -1, b7.d4 = !0)
	}, this.s9 = function(jk, deltaY) {
		-1 !== zb && (pq += Math.floor(deltaY), zt(), zw(jk), b7.d4 = !0)
	}, this.g5 = function(jk, jl) {
		this.s6(jk, jl), -1 !== zb && (ze = jk, this.zk = !0)
	}, this.sZ = function() {
		-1 !== zb && (this.zk = !1)
	}, this.gC = function() {
		gD.fillStyle = ae.kx;
		for (var a00, month, dW, qe, a03, a04, jq, a05, a06, du = za; zZ <= du; du--) zy(du);
		zf && 0 === zZ && (gD.fillStyle = ae.lJ, zy(0)), -1 !== zb && (gD.fillStyle = ae.kw, zy(zb)), -1 !== zb && (gD.font = g1, gD.textBaseline = xG, (dW = new Date).setTime(zd.getTime() - 1e3 * zb * 60 * 60 * 24), month = "month", a00 = "day",
			"undefined" != typeof Intl && (month = new Intl.DateTimeFormat("en-US", {
				month: "long"
			}).format(dW), a00 = new Intl.DateTimeFormat("en-US", {
				weekday: "long"
			}).format(dW)), a00 = a00 + ", " + dW.getUTCDate() + " " + month + " " + dW.getFullYear(), month = 1 === e9[zb] ? " second played" : " seconds played", month = ad.k0.k1(e9[zb]) + month, dW = Math.floor(gD.measureText(a00).width),
			qe = Math.floor(gD.measureText(month).width), a03 = Math.floor(.5 * (dW + zc)), a04 = (a04 = pq + js - (zb + 1) * zX) < a03 ? a03 : js - a03 < a04 ? js - a03 : a04, jq = g9 - Math.floor(zY * Math.pow(e9[zb], zg)), a05 = Math
			.floor(1.1 * zc), a06 = g9 - a05 < jq ? g9 - a05 : jq, gD.fillStyle = ae.ks, gD.fillRect(js - qe - zc, a06 - a05, qe + zc, a05), gD.fillRect(a04 - a03, g9 - a05, dW + zc, a05), gD.fillStyle = ae.gG, gD.textAlign = xH, gD.fillText(
				month, Math.floor(js - .5 * zc), a06),
			function(jq, a05) {
				for (var qd, uS = -1, fw = e9.length - zb - 1, du = zj.length - 1; 0 <= du; du--) fw >= zj[du].ev && fw <= zj[du].dE && (-1 === uS || zj[du].dE - zj[du].ev < zj[uS].dE - zj[uS].ev) && (uS = du); - 1 !== uS && (qd = Math.floor(
					gD.measureText(zj[uS].wF).width), gD.fillStyle = ae.ks, gD.fillRect(js - qd - zc, jq, qd + zc, a05), gD.fillStyle = ae.gG, gD.fillText(zj[uS].wF, Math.floor(js - .5 * zc), jq + a05))
			}(a06 - 2 * a05, a05), gD.textAlign = gF, gD.fillText(a00, a04, g9), gD.strokeStyle = ae.ky, gD.lineWidth = 1, gD.beginPath(), gD.moveTo(0, jq), gD.lineTo(js, jq), gD.closePath(), gD.stroke())
	}
}

function bZ() {
	var g1, g2, jl, a08, a09, gP, qY, xZ, tR, a0A, a0B, a0C, a0D;
	this.jk = 0, this.i2 = 0, this.cj = function() {
		a09 = qF, a0B = "rgba(0,100,0,0.8)", a0C = "rgba(150,0,0,0.8)", xZ = !(a0A = !0), tR = er[eq], this.resize()
	}, this.resize = function() {
		g2 = Math.floor((dg ? .305 : .24) * fu), this.i2 = Math.floor(.5 + .13 * g2), g2 = Math.floor(6 * this.i2), g1 = fx + Math.floor(.8 * this.i2) + fy, a0D = Math.floor(.5 * this.i2), au.pL.font = g1, jl = nc, a08 = Math.floor(1 + .13 * this
			.i2), (gP = document.createElement("canvas")).width = g2, gP.height = this.i2, (qY = gP.getContext("2d", {
			alpha: !0
		})).font = g1, qY.textBaseline = gE, qY.textAlign = gF, this.a0E()
	}, this.xv = function() {
		return dg && dh < 1.2 * di
	}, this.yZ = function() {
		this.xv() ? this.jk = js - g2 - nc : this.jk = Math.floor(s.a0F() + (js - s.a0F() - t.g2 - g2) / 2 - .5 * nc)
	}, this.jG = function() {
		xZ && (xZ = !1, this.a0E())
	}, this.a0E = function() {
		qY.clearRect(0, 0, g2, this.i2), qY.fillStyle = a0A ? a0B : a0C, qY.fillRect(0, 0, g2, this.i2), qY.fillStyle = ae.kw, this.a0G(), this.a0H(), qY.fillStyle = er[eq] >= a7.iK(eq) ? ae.lG : ae.gG, qY.fillText(ad.k0.k1(tR), Math.floor(g2 /
			2), a0D), qY.fillStyle = ae.gG, qY.fillRect(0, 0, g2, 1), qY.fillRect(0, 0, 1, this.i2), qY.fillRect(0, this.i2 - 1, g2, 1), qY.fillRect(g2 - 1, 0, 1, this.i2)
	}, this.a0G = function() {
		var py = yT(Math.floor((a7.a0I() - 1) * this.i2 / 9), this.i2 - a08);
		qY.fillRect(0, py, a08, this.i2 - py), qY.fillRect(g2 - a08, py, a08, this.i2 - py)
	}, this.a0H = function() {
		qY.fillRect(a08, this.i2 - a08, Math.floor((g2 - 2 * a08) * er[eq] / a09), a08)
	}, this.iH = function() {
		0 !== h7[eq] && 2 !== h8[eq] && tR !== er[eq] && (a09 = vm(er[eq], a09), a0A = er[eq] > tR && 10 <= er[eq], tR = er[eq], xZ = !0)
	}, this.gC = function() {
		0 === h7[eq] || kN || 2 === h8[eq] || gD.drawImage(gP, this.jk, jl)
	}
}

function ba() {
	var a0K, a0L, a0M, a0N, a0O, a0P, a0Q, a0R, a0S, a0T, a0U, a0V, a0W, a0X, a0Y, a0Z, a0a, a0b, a0c, title, a0d, a0e, a0f, a0g, a0h, position, a0i, a0j, a0k, a0l, a0m = 1;

	function a0o() {
		a0Q.clearRect(0, 0, a0K, yB), a0Q.fillStyle = ae.lS, a0Q.fillRect(0, 0, a0K, a0V), a0Q.fillStyle = ae.kr, a0Q.fillRect(0, a0V, a0K, yB - a0V), a0J[eq] >= position && a0r(a0J[eq] - position, ae.lD), 0 !== a0J[eq] && 0 === position && a0r(0, ae
				.lW), -1 !== a0h && a0r(a0h, ae.kv), a0Q.fillStyle = ae.gG, a0Q.fillRect(0, a0V, a0K, 1), a0Q.fillRect(0, 0, a0K, xL), a0Q.fillRect(0, 0, xL, yB), a0Q.fillRect(a0K - xL, 0, xL, yB), a0Q.fillRect(0, yB - xL, a0K, xL), a0Q.font = a0L,
			a0Q.textBaseline = gE, a0Q.textAlign = gF, a0Q.fillText(title, Math.floor(a0K / 2), Math.floor(a0T + a0M / 2));
		var hk, f3 = a0J[eq] < position + a0O - 1 ? 1 : 2;
		for (a0Q.font = a0N, a0Q.textAlign = vu, hk = a0O - f3; 0 <= hk; hk--) a0s(jR[hk + position]), a0t(hk, hk + position, jR[hk + position]);
		for (a0Q.textAlign = xH, hk = a0O - f3; 0 <= hk; hk--) a0s(jR[hk + position]), a0u(hk, jR[hk + position]);
		2 == f3 && (a0s(eq), a0Q.textAlign = vu, a0t(a0O - 1, a0J[eq], eq), a0Q.textAlign = xH, a0u(a0O - 1, eq)), 0 === position && (f3 = .7 * a0W / a3.get(4).height, a0Q.setTransform(f3, 0, 0, f3, Math.floor(a0X + .58 * a0W + .5 * f3 * a3.get(4)
			.width), Math.floor(a0T + a0M + .4 * a0W)), a0Q.imageSmoothingEnabled = !0, a0Q.drawImage(a3.get(4), -Math.floor(a3.get(4).width / 2), -Math.floor(a3.get(4).height / 2)), a0Q.setTransform(1, 0, 0, 1, 0, 0))
	}

	function a0s(player) {
		hX && (a0Q.fillStyle = b8.a0w[b8.rd[b8.iX[player]]])
	}

	function a0r(du, uX) {
		a0Q.fillStyle = uX, du = a0O - 1 < du ? a0O - 1 : du;
		uX = Math.floor((du === a0O - 1 ? 2 : 0 === du ? 1.15 : 1) * a0W), uX = du === a0O - 2 ? Math.floor(a0V + 9.15 * a0W) - Math.floor(a0V + 8.15 * a0W) : uX;
		a0Q.fillRect(0, Math.floor(a0V + (du + (0 === du ? 0 : .15)) * a0W), a0K, uX)
	}

	function a0t(a0y, a0z, du) {
		a0Q.fillText(a0d[a0z], a0X, Math.floor(a0T + a0M + (a0y + .5) * a0W)), 1 === h8[du] && (a0Q.font = xI + a0N);
		a0z = Math.floor(a0T + a0M + (a0y + .5) * a0W);
		a0Q.fillText(a0b[du] === du ? k2[du] : a0a[a0b[du] % ez], a0Y, a0z), 0 !== h8[du] && (a0Q.font = a0N), du < h6 && 2 !== h8[du] || a0Q.fillRect(a0Y, a0z + .35 * a0m, a0c[du], Math.max(1, .1 * a0m))
	}

	function a0u(a0y, du) {
		a0Q.fillText(fL[du], a0Z, Math.floor(a0T + a0M + (a0y + .5) * a0W))
	}

	function a18(jl) {
		return (jl -= nc + a0V) < 0 ? Math.floor(jl / a0W) - 1 : jl < (a0O - 1) * a0W ? Math.floor(jl / a0W) : jl < yB - a0V ? a0O - 1 : (jl -= yB - a0V, a0O + Math.floor(jl / a0W))
	}

	function v1(jk, jl) {
		return nc <= jk && jk < nc + a0K && nc <= jl && jl < nc + yB
	}
	this.cj = function() {
		var du, dd, hk;
		for (a0j = !1, title = "LEADERBOARD", a0O = dg ? 6 : 10, position = a0l = a0k = a0i = 0, a0g = !(a0h = -1), a0e = new Uint16Array(a0O + 1), a0f = new Uint32Array(a0O + 1), a0S = ez, jR = new Uint16Array(a0S), a0J = new Uint16Array(a0S),
			du = a0S - 1; 0 <= du; du--) jR[du] = du, a0J[du] = du;
		this.resize(!0), a0a = [], a0b = new Uint16Array(ez), a0c = new Uint16Array(ez);
		var o5 = Math.floor(a0K - a0Y - a0X - a0R),
			a0n = 0;
		for (a0d = new Array(ez), a0Q.font = a0N, du = ez - 1; 0 <= du; du--)
			if (a0d[du] = du + 1 + ".", a0b[du] = du, a0c[du] = Math.floor(a0Q.measureText(k2[du]).width), a0c[du] > o5) {
				for (dd = k2[du], hk = k2[du].length - 1; 1 <= hk && (dd = dd.substring(0, hk), a0c[du] = Math.floor(a0Q.measureText(dd + "...").width), !(a0c[du] <= o5)); hk--);
				dd += "...", a0a.push(dd), a0b[du] = ez + a0n++
			} a0o()
	}, this.resize = function(cj) {
		if (yB = dg ? (a0K = Math.floor(.335 * fu), Math.floor(a0O * a0K / 8)) : (a0K = Math.floor(.27 * fu), Math.floor(a0O * a0K / 10)), a0K = Math.floor(.97 * a0K), (a0P = document.createElement("canvas")).width = a0K, a0P.height = yB, a0Q =
			a0P.getContext("2d", {
				alpha: !0
			}), a0T = .025 * a0K, a0M = .16 * a0K, a0U = 0 * a0K, a0V = Math.floor(.45 * a0T + a0M), a0W = (yB - a0M - 2 * a0T - a0U) / a0O, a0L = fx + Math.floor(.55 * a0M) + fy, a0m = Math.floor((dg ? .67 : .72) * a0W), a0N = a0m + fy, a0Q
			.font = a0N, a0X = Math.floor(.04 * a0K), a0Y = Math.floor((dg ? .195 : .18) * a0K), a0R = Math.floor(a0Q.measureText("00920600").width), a0Q.font = a0L, a0Z = a0K - a0X, !cj) {
			a0Q.font = a0N;
			for (var du = ez - 1; 0 <= du; du--) a0c[du] = Math.floor(a0Q.measureText(a0b[du] === du ? k2[du] : a0a[a0b[du] % ez]).width);
			a0o()
		}
	}, this.a0F = function() {
		return a0K
	}, this.jG = function(wR) {
		a0g && (wR || b7.iV() % aR.a0p[aR.jy.a0q] == 0) && (a0g = !1, a0o())
	}, this.iH = function() {
		! function() {
			for (var hk = a0S - 1; 0 <= hk; hk--) 0 === h7[jR[hk]] && ! function(hk) {
				var a16 = jR[hk];
				a0S--;
				for (var du = hk; du < a0S; du++) jR[du] = jR[du + 1], a0J[jR[du]] = du;
				jR[a0S] = a16, a0J[jR[a0S]] = a0S
			}(hk)
		}();
		for (var a14, kd = a0S - 1, hk = 0; hk < kd; hk++) fL[jR[hk]] < fL[jR[hk + 1]] && (a14 = jR[hk], jR[hk] = jR[hk + 1], jR[hk + 1] = a14, a0J[jR[hk]] = hk, a0J[jR[hk + 1]] = hk + 1);
		! function() {
			for (var dW = a0g, f3 = (a0g = !0, a0J[eq] >= a0O - 1 ? a0O - 2 : a0O - 1), du = f3; 0 <= du; du--)
				if (a0e[du] !== jR[du] || a0f[du] !== fL[jR[du]]) return;
			(f3 != a0O - 2 || a0e[a0O] === a0J[eq] && a0f[a0O] === fL[eq]) && (a0g = dW)
		}();
		for (var du = a0O - 1; 0 <= du; du--) a0e[du] = jR[du], a0f[du] = fL[jR[du]];
		a0e[a0O] = a0J[eq], a0f[a0O] = fL[eq]
	}, this.g5 = function(jk, jl) {
		return !!v1(jk, jl) && (a0i = b7.dV, a0j = !0, a0k = a0l = a18(jl), al.sr() && (jk = yt(-1, a0l, a0O), a0h !== (jk = jk === a0O ? -1 : jk)) && (a0h = jk, a0o(), b7.d4 = !0), !0)
	}, this.s6 = function(jk, jl) {
		var dW, a17 = a18(jl);
		return a0j ? (dW = position, (position = yt(0, position += a0k - a17, ez - a0O)) !== dW && (a17 = (a17 = yt(-1, a0k = a17, a0O)) !== a0O && v1(jk, jl) ? a17 : -1, a0h = a17, a0o(), b7.d4 = !0), !0) : (a17 = (a17 = yt(-1, a17, a0O)) ===
			a0O || !v1(jk, jl) || al.sr() ? -1 : a17, a0h !== a17 && (a0h = a17, a0o(), b7.d4 = !0))
	}, this.sZ = function(jk, jl) {
		if (!a0j) return !1;
		a0j = !1;
		var a17 = a18(jl);
		return al.sr() && -1 !== a0h && (a0h = -1, a0o(), b7.d4 = !0), b7.dV - a0i < 350 && a0l === a17 && -1 !== (a17 = (a17 = yt(-1, a17, a0O)) !== a0O && v1(jk, jl) ? a17 : -1) && (jk = jR[a17 + position], a17 === a0O - 1 && a0J[eq] >=
			position + a0O - 1 && (jk = eq), hX && displayDonationsHistory(jk, k2, iy), 0 !== h7[jk]) && f.kO(jk, 800, !1, 0), !0
	}, this.s9 = function(jk, jl, deltaY) {
		var a19;
		return !(a0j || kQ || (a19 = Math.max(Math.floor(Math.abs(deltaY) / 40), 1), !v1(jk, jl)) || (jk = (jk = yt(-1, a18(jl), a0O)) === a0O || al.sr() ? -1 : jk, 0 < deltaY ? position < ez - a0O && (position += Math.min(ez - a0O - position,
			a19), a0h = jk, a0o(), b7.d4 = !0) : 0 < position && (position -= Math.min(position, a19), a0h = jk, a0o(), b7.d4 = !0), 0))
	}, this.gC = function() {
		gD.drawImage(a0P, nc, nc)
	}
}

function bb() {
	var gP, qY, jk, jl, xS, a1A, gap, a1B, fontSize, a1C, v7, et, a1D, a1E, a1F, a1G, a1H, a1I;

	function a1L() {
		qY.clearRect(0, 0, t.g2, t.i2), qY.fillStyle = ae.ks, qY.fillRect(0, 0, t.g2, t.i2), qY.fillStyle = ae.l8, gr = 0 < a1F ? a1F : Math.sqrt(et[4] / 1e4), qY.fillRect(0, t.i2 - xS - 1, Math.floor(gr * t.g2), xS), qY.fillStyle = ae.gG, qY
			.fillRect(0, 0, t.g2, 1), qY.fillRect(0, 0, 1, t.i2), qY.fillRect(t.g2 - 1, 0, 1, t.i2), qY.fillRect(0, t.i2 - 1, t.g2, 1), qY.fillRect(0, t.i2 - xS - 1, t.g2, 1);
		for (var gr, a1N, dW = 0, du = 0; du < v7.length; du++) a1D[du] ? (qY.textAlign = vu, a1N = Math.floor((a1A - xS + 2 * a1B) * (du - dW + 1) / (v7.length + 1) - .7 * a1B), qY.fillText(v7[du], gap, a1N), qY.textAlign = xH, 5 === du && 0 !== h7[
			eq] && er[eq] >= a7.iK(eq) ? (qY.fillStyle = ae.lU, qY.fillText(a1K(du), t.g2 - gap, a1N), qY.fillStyle = ae.gG) : qY.fillText(a1K(du), t.g2 - gap, a1N)) : dW++
	}

	function a1K(du) {
		return du < 3 ? et[du].toString() : 3 === du || 4 === du || 5 === du ? ad.k0.tg(et[du] / 100, 2) : du < 7 ? ad.k0.k1(et[du]) : du === 7 ? t.a0I(et[7]) : du === 8 ? utils.getMaxTroops(fL, eq) : utils.getDensity(er, fL, eq)
	}

	function a1J() {
		fL[eq] !== et[6] && (et[6] = fL[eq], a1C++)
	}
	this.cj = function() {
		a1F = a1G = 0, (v7 = new Array(8))[0] = "Humans", v7[1] = iy ? "Players" : "Bots", v7[2] = "Spectators", v7[3] = "Threshold", v7[4] = "Occupation", v7[5] = "Interest", v7[6] = "Income", v7[7] = "Time", v7.push("Max Troops", "Density"),
			a1I = tt - en(tt, 100), (et = new Array(v7.length))[0] = iy ? 0 : h6, et[1] = iy ? iY : is, et[2] = rS, et[3] = 0, et[4] = en(1e4 * fL[0], tt), et[5] = 700, et[6] = 0, a1J(), et[7] = 0, a1E = a1K(6), a1D = new Array(v7.length);
		for (var du = v7.length - 1; 0 <= du; du--) a1D[du] = !0;
		a1H = 0, a1H = iy ? (a1D[0] = !1, a1D[2] = !1, a1D[3] = !1, 3) : (a1D[3] = !1, 1), a1C = 0, this.resize()
	}, this.resize = function() {
		this.g2 = Math.floor((dg ? .1646 : .126) * 1.25 * fu), this.i2 = Math.floor(1.18 * this.g2), xS = Math.floor(.04 * this.g2), gap = Math.floor(.035 * this.g2), a1B = .04 * this.g2, a1A = this.i2, this.i2 -= Math.floor(a1H * (this.i2 - 2 *
			xS) / v7.length), fontSize = Math.floor(.7 * (a1A - xS) / v7.length), fontSize = fx + fontSize + fy, (gP = document.createElement("canvas")).width = this.g2, gP.height = this.i2, (qY = gP.getContext("2d", {
			alpha: !0
		})).font = fontSize, qY.textBaseline = gE, qY.lineWidth = 1, this.tn(), this.yZ(), r.yZ(), a1L()
	}, this.yZ = function() {
		jk = js - this.g2 - nc
	}, this.a1M = function() {
		jl = nc
	}, this.tn = function() {
		jl = nc + (r.xv() && 0 !== h7[eq] && !kN ? r.i2 + nc : 0)
	}, this.jG = function(wR) {
		0 < a1C && (wR || 100 <= a1C) && (a1C = 0, a1L())
	}, this.uf = function() {
		return et[7]
	}, this.a0I = function(value) {
		var pC = Math.floor(value / 1e3 / 60),
			value = Math.floor((value - 6e4 * pC) / 1e3);
		return value < 10 ? pC + ":0" + value : pC + ":" + value
	}, this.iH = function() {
		var a1X, per;
		a1D[0] && rT - rS !== et[0] && (et[0] = rT - rS, a1C++), iY - et[0] !== et[1] && (et[1] = iY - et[0], a1C++), this.j6(), (a1X = a7.a1Y(eq)) !== et[5] && (et[5] = a1X, a1C++), a1J(), et[7] += b7.a1Z, a1X = a1K(7), a1E !== a1X && (a1E =
			a1X, a1C += 100), a1X = hX ? b9.rf() : fL[jR[0]], per = en(1e4 * a1X, tt), et[3] = a1X, et[4] !== per && (a1C++, et[4] = per), 8 === iw && function() {
			if (0 === h7[0]) at.rC.rK(1);
			else {
				if (0 !== h7[1]) return;
				at.rC.rK(0)
			}
			return 1
		}() || et[3] < a1I || et[3] !== tt && ! function() {
			for (var du = iY - 1; 0 <= du; du--)
				if (0 < ew[iZ[du]].length) return;
			return 1
		}() || at.rC.rK(-1)
	}, this.j6 = function() {
		a1D[2] && rS !== et[2] && (et[2] = rS, a1C++)
	}, this.a1a = function(du) {
		var tE, a1b, dW;
		return 2 !== jH && (du === tx ? (a1F = 0, a1L(), !1) : (-1 !== du || 0 !== a1G) && (a1b = a1F, a1F = ff ? du / tx : (dW = performance.now(), 0 <= du && (tE = dW - 392 * du, a1G = 0 === du || tE < a1G ? tE : a1G), 1 < (a1F = (dW - a1G) / (
			392 * tx)) ? 1 : a1F), a1L(), a1F !== a1b))
	}, this.gC = function() {
		gD.drawImage(gP, jk, jl)
	}
}

function bc() {
	var sX, a1c, g2, i2, wY, a1d, a1e, xw, gP, kE, a1f;

	function gB() {
		return Math.floor((js - g2) / 2) < o.i2 + 2 * nc ? g9 - i2 - 4 * nc - o.i2 : g9 - i2 - 2 * nc
	}
	this.a1g = -1, this.cj = function() {
		a1f = sX = !1, wY = .61, a1d = .07, a1e = .09, kE = xw = i2 = 0, this.a1g = -1
	}, this.resize = function() {
		var qY, jp, iW, a1l, a1m, vB;
		sX && (g2 = yT(g2 = dg ? Math.floor(.69 * fu) : Math.floor(.5 * fu), vm(dh - 2 * nc, 10)), g2 = yT(g2, Math.floor(3.57 * vm(di - 2 * nc, 3))), i2 = Math.floor(.28 * g2), (gP = document.createElement("canvas")).width = g2, gP.height = i2,
			qY = gP.getContext("2d", {
				alpha: !0
			}), jp = Math.floor(1 + i2 / 40), qY.clearRect(0, 0, g2, i2), qY.fillStyle = ae.ks, qY.fillRect(jp, jp, g2 - 2 * jp, i2 - 2 * jp), qY.lineJoin = "bevel", qY.lineWidth = 2 * jp, qY.strokeStyle = ae.gG, qY.strokeRect(jp, jp, g2 -
				2 * jp, i2 - 2 * jp), qY.imageSmoothingEnabled = !0, iW = a3.get(a1c), a1l = iW.width, a1m = iW.height, vB = (21 === a1c ? .666 : 1) * wY * i2 / a1m, qY.setTransform(vB, 0, 0, vB, Math.floor((g2 - vB * a1l) / 2), Math.floor((
				i2 - vB * a1m) / 2)), qY.drawImage(iW, 0, 0), qY.setTransform(1, 0, 0, 1, Math.floor(g2 - a1e * i2 - a1d * i2 - jp), Math.floor(jp + a1d * i2)),
			function(qY, ev) {
				qY.lineWidth = Math.floor(1 + i2 / 80), qY.strokeStyle = ae.gG, qY.beginPath(), qY.moveTo(0, 0), qY.lineTo(ev, ev), qY.moveTo(0, ev), qY.lineTo(ev, 0), qY.stroke()
			}(qY, Math.floor(a1e * i2)), qY.setTransform(1, 0, 0, 1, 0, 0))
	}, this.show = function(e0, a1i, a1j, a1k) {
		sX || a1k && a1f || (a1c = a1j ? 21 : e0 ? 1 : 2, sX = a1f = !0, this.resize(), i.oK(), o.yO(), kE = b7.dV, -1 === this.a1g && (this.a1g = b7.iV()), xw = a1i ? 1 : 0)
	}, this.iH = function() {
		!sX || 1 <= xw || (xw = 1 < (xw += 5e-4 * (b7.dV - kE)) ? 1 : xw, kE = b7.dV, b7.d4 = !0)
	}, this.g5 = function(jk, jl) {
		return !(!sX || xw <= 0 || (jk -= Math.floor((js - g2) / 2), jl -= gB(), jk < 0) || jl < 0 || g2 < jk || i2 < jl || (g2 - i2 / 3 < jk && jl < i2 / 3 && (sX = !1, b7.d4 = !0), 0))
	}, this.gC = function() {
		!sX || xw <= 0 || (gD.globalAlpha = xw, gD.drawImage(gP, Math.floor((js - g2) / 2), gB()), gD.globalAlpha = 1)
	}
}

function cq() {
	this.a1o = !1, this.kl = !1, this.tr = !1, this.a1p = [0, 0, 0, 0], this.a1q = function() {
		var jp, jq, jr, jt;
		this.tr = this.tr || this.kl, (this.kl || this.a1o && this.tr) && (jp = b1.a1r[0], jq = b1.a1r[1], jr = b1.a1r[2], jt = b1.a1r[3], jp = jp < this.a1p[0] ? this.a1p[0] : jp, jq = jq < this.a1p[1] ? this.a1p[1] : jq, jr = jr > this.a1p[2] ?
			this.a1p[2] : jr, jt = jt > this.a1p[3] ? this.a1p[3] : jt, this.kl = !1, this.a1o = !1, jp === this.a1p[0] && jq === this.a1p[1] && jr === this.a1p[2] && jt === this.a1p[3] ? this.ts() : jp <= jr && jq <= jt && uC.putImageData(
				uD, 0, 0, jp, jq, jr - jp + 1, jt - jq + 1))
	}, this.ts = function() {
		this.tr && this.a1p[2] >= this.a1p[0] && this.a1p[3] >= this.a1p[1] && uC.putImageData(uD, 0, 0, this.a1p[0], this.a1p[1], this.a1p[2] - this.a1p[0] + 1, this.a1p[3] - this.a1p[1] + 1), this.tr = !1
	}, this.rY = function() {
		this.a1p[2] >= this.a1p[0] && this.a1p[3] >= this.a1p[1] && uC.putImageData(uD, 0, 0, this.a1p[0], this.a1p[1], this.a1p[2] - this.a1p[0] + 1, this.a1p[3] - this.a1p[1] + 1), this.tr = !1
	}, this.cj = function() {
		var jk, jl;
		this.a1o = !1, this.kl = !1, this.tr = !1, this.a1p[0] = au.eV, this.a1p[1] = au.eW, this.a1p[2] = this.a1p[3] = 0;
		loop: for (jk = 1; jk < au.eV - 1; jk++)
			for (jl = au.eW - 2; 1 < jl; jl--)
				if (1 === a1s[a4.q6(jk, jl) + 2]) {
					this.a1p[0] = jk;
					break loop
				} loop: for (jl = 1; jl < au.eW - 1; jl++)
			for (jk = au.eV - 2; 1 < jk; jk--)
				if (1 === a1s[a4.q6(jk, jl) + 2]) {
					this.a1p[1] = jl;
					break loop
				} loop: for (jk = au.eV - 2; 0 < jk; jk--)
			for (jl = au.eW - 2; 1 < jl; jl--)
				if (1 === a1s[a4.q6(jk, jl) + 2]) {
					this.a1p[2] = jk;
					break loop
				} loop: for (jl = au.eW - 2; 0 < jl; jl--)
			for (jk = au.eV - 2; 1 < jk; jk--)
				if (1 === a1s[a4.q6(jk, jl) + 2]) {
					this.a1p[3] = jl;
					break loop
				}
	}
}

function ce() {
	var a1t = new a1u;
	this.ot = function(fw, a1v, oP) {
		return a1t.ot(fw, a1v, oP)
	}
}

function a1u() {
	var e9 = ["Accept", "You erased {0}.", "You were erased by {0}.", "Congratulations! You won the game.", "{0} won the game.", "{0} broke the non-aggression pact.", "{0} is attacking you!", "Choose your start position!", "You surrendered!",
		"The game ended in a stalemate!", "Error: {0}", "{0} won the game.", "{0} was immortalized!", "Unclaimed Land {0}", "Player: {0}   Balance: {1}   Territory: {2}   Coords: {3}", "Mountains {0}", "Water {0}",
		"Ship Owner: {0}   Strength: {1}", " Message to {0}: ", "{0}: ", "Humanity triumphs! The undead have been beaten back.", "The Resistance", "Mankind's era ends, overrun by the relentless tide of the undead.", "The Virus",
		"Agreeing to peace concludes the game in a stalemate!", "You signed a non-aggression pact with {0}.", "You asked {0} to sign a non-aggression pact.", "{0} accepted the non-aggression pact.", "{0} requested a non-aggression pact.",
		"You asked {0} players to attack {1}.", "You asked {0} to attack {1}.", "{0} suggested you attack {1}.", "Your balance is too low!", "You exported {0} resource{20} to {1}.", "A tax of {0} unit{20} was deducted.",
		"{0} supported you with {1} resource{21}.", "A bot ({0}) supported you with {1} resource{21}.", "Map: {0}", "Dimension: {0}x{1}", "Overall Pixels: {0}", "Land: {0} ({1})", "Water: {0} ({1})", "Mountains: {0} ({1})",
		"Full sending against human players is disabled.", "{0} and {1} other player{21} were erased.", "{0} and {1} other player{21} left the game.", "{0} and {1} other player{21} surrendered.", "{0} was erased by {1}.", "{0} left the game.",
		"{0} surrendered.", "{0} joined the game."
	];
	this.ot = function(fw, a1v, oP) {
		var du, ev, dd;
		if (!a1v) return e9[fw];
		for (ev = a1v.length, dd = e9[fw], du = 0; du < ev; du++) Number.isInteger(a1v[du]) && 1 !== a1v[du] && (dd = dd.replace("{" + (20 + du) + "}", "s"));
		if (oP) {
			if (oP.w6)
				for (du = 0; du < oP.w6.length; du++) a1v[oP.w6[du]] = ad.k0.k1(a1v[oP.w6[du]]);
			if (oP.wO)
				for (du = 0; du < oP.wO.length; du++) a1v[oP.wO[du]] = ad.k0.tg(100 * a1v[oP.wO[du]], 1)
		}
		for (du = 0; du < ev; du++) dd = dd.replace("{" + du + "}", a1v[du]);
		return dd
	}
}

function a1w() {}

function cz() {
	this.sX = !1, this.vR = null, this.a1x = 0, this.g2 = null, this.i2 = null, this.a1y = .013, this.a1z = .022, this.a20 = .025;
	this.a22 = 3, this.a23 = 1.2, this.a24 = .2, this.a25 = .235, this.a26 = .9, this.a27 = .08;
	var a29, a28 = ["Best Players", "Best Clans", "LEGENDS NEVER DIE", "THE NEVER ENDING WAR"],
		a2A = [-1e6, -1e6];
	this.position = [0, 0], this.a2C = [0, 0], this.cj = function() {
		this.vR = [null, null], this.sX = !1, this.a1x = 0
	}, this.dS = function(id) {
		this.sX = !0, this.resize(), this.a1x = id, this.fz(), z.dS(!1), b7.d4 = !0
	}, this.iH = function() {
		this.sX && this.fz()
	}, this.fz = function() {
		b7.dV - 12e4 >= a2A[this.a1x] && (a2A[this.a1x] = b7.dV, this.a2C = [0, 0], aP.j7.zm(0, 1 + this.a1x)) && aP.lj.a2D(0, this.a1x)
	}, this.resize = function() {
		if (this.sX) {
			var du;
			for (this.g2 = this.a2E(dg ? .85 : .66, .75, dh, di), this.i2 = Math.floor(this.g2 / .75), du = 1; 0 <= du; du--) this.vR[du] && (this.vR[du][4] = fx + Math.floor(this.vR[du][5] * this.i2 / 10) + fy);
			a29 = fx + Math.floor(.1 * this.i2) + fy
		}
	}, this.a2E = function(fs, gO, g2, i2) {
		return g2 < gO * i2 ? Math.floor(fs * g2) : Math.floor(gO * fs * i2)
	}, this.a2F = function(fw, a2G, a2H, tc, a2I, a2J, a0y) {
		this.position[fw] = a0y;
		for (var xt, gJ = a2G.length, g1 = fx + Math.floor(a2I * this.i2 / 10) + fy, e9 = (this.a2K(a2G, g1, a2J * this.g2), [
				[], gJ, -1, tc, g1, a2I, 10 * a0y
			]), du = 0; du < gJ; du++) xt = {
			name: a2G[du].name,
			value: a2G[du].ql / a2H,
			colorIndex: a2G[du].colorIndex
		}, e9[0].push(xt);
		this.vR[fw] = e9, this.a2L(fw);
		a2J = this.vR[fw][0][0].name;
		1 === fw && (a2J = "[" + a2J + "]"), 0 === a0y && b0.fv(fw, a2J), b7.d4 = !0
	}, this.a2L = function(du) {
		this.vR[du][0].sort(function(hk, hu) {
			return hu.value - hk.value
		})
	}, this.a2M = function(fw, name, a2N, a2O) {
		if (this.vR && this.vR[fw]) {
			var du, wG = !1;
			if (0 === fw) {
				for (du = 0; du < this.vR[fw][0].length; du++)
					if (name === this.vR[fw][0][du].name && a2N > .99 * this.vR[fw][0][du].value && a2N < 1.01 * this.vR[fw][0][du].value) {
						this.vR[fw][0][du].value = a2O, wG = !0;
						break
					} wG || this.vR[fw][0].push({
					name: name,
					value: a2O
				})
			} else {
				for (du = 0; du < this.vR[fw][0].length; du++)
					if (name === this.vR[fw][0][du].name) {
						this.vR[fw][0][du].value += 32 < this.vR[fw][0][du].value ? (64 - this.vR[fw][0][du].value) / 256 : .25, this.vR[fw][0][du].value *= 1 / (383 / 384), wG = !0;
						break
					} for (du = 0; du < this.vR[fw][0].length; du++) this.vR[fw][0][du].value *= 383 / 384;
				wG || this.vR[fw][0].push({
					name: name,
					value: .25
				})
			}
			this.a2L(fw)
		}
	}, this.a2K = function(a2G, g1, g3) {
		for (var du = a2G.length - 1; 0 <= du; du--)
			for (; 3 < a2G[du].name.length && n.measureText(a2G[du].name, g1) > g3;) a2G[du].name = a2G[du].name.substring(0, a2G[du].name.length - 4) + "..."
	}, this.g5 = function(gv, gw) {
		return !!this.sX && (gv -= (js - this.g2) / 2, gw -= (g9 - this.i2) / 2, gv < 0 || gv > this.g2 || gw < 0 || gw > this.i2 ? (this.sX = !1, 0 === x.sg() && z.dS(!0), b7.d4 = !0) : (gw = gw < .3 * this.i2 ? 1 : gw < .85 * this.i2 ? (gw = (
				0 === this.a1x ? 14.1 : 3) * (gw - .3 * this.i2) / (.55 * this.i2), Math.floor(1 + gw * gw)) : 0 === this.a1x ? 200 : 10, gv < this.g2 / 2 ? this.a2C[this.a1x] = -gw : this.a2C[this.a1x] = gw, a2A[this.a1x] + 50 > b7.dV ||
			(a2A[this.a1x] = b7.dV, aP.j7.zm(0, 1 + this.a1x) && aP.lj.a2D(0, this.a1x)), !0))
	}, this.gC = function() {
		var jp, jq, qd, qe, a2P, a2Q, tG, tH;
		this.sX && (jp = (js - this.g2) / 2, jq = (g9 - this.i2) / 2, qd = this.a1y * this.g2, qe = this.a22 * qd, a2P = this.a1z * this.g2, a2Q = this.a23 * a2P, tG = this.a20 * this.g2, tH = Math.floor(.25 * this.i2), gD.setTransform(1, 0, 0,
				1, jp, jq), gD.fillStyle = 0 === this.a1x ? ae.lO : ae.lM, gD.fillRect(0, 0, this.g2, tH), gD.fillStyle = ae.kr, gD.fillRect(0, tH, this.g2, this.i2 - tH), gD.fillStyle = ae.gG, gD.font = a29, gD.textBaseline = gE, gD
			.textAlign = gF, gD.fillText(a28[this.a1x], Math.floor(this.g2 / 2), Math.floor(.135 * this.i2)), gD.font = fx + Math.floor(.025 * this.i2) + fy, gD.fillText(a28[this.a1x + 2], Math.floor(this.g2 / 2), Math.floor(.2125 * this
			.i2)), gD.beginPath(), gD.moveTo(this.g2 / 4, 0), gD.lineTo(this.g2 / 2 - qd, 0), gD.lineTo(this.g2 / 2, -qe), gD.lineTo(this.g2 / 2 + qd, 0), gD.lineTo(this.g2 - a2P, 0), gD.lineTo(this.g2 + a2Q, -a2Q), gD.lineTo(this.g2, a2P),
			gD.lineTo(this.g2, this.i2 / 2 - qd), gD.lineTo(this.g2 + qe, this.i2 / 2), gD.lineTo(this.g2, this.i2 / 2 + qd), gD.lineTo(this.g2, this.i2 - a2P), gD.lineTo(this.g2 + a2Q, this.i2 + a2Q), gD.lineTo(this.g2 - a2P, this.i2), gD
			.lineTo(this.g2 / 2 + qd, this.i2), gD.lineTo(this.g2 / 2, this.i2 + qe), gD.lineTo(this.g2 / 2 - qd, this.i2), gD.lineTo(a2P, this.i2), gD.lineTo(-a2Q, this.i2 + a2Q), gD.lineTo(0, this.i2 - a2P), gD.lineTo(0, this.i2 / 2 + qd),
			gD.lineTo(-qe, this.i2 / 2), gD.lineTo(0, this.i2 / 2 - qd), gD.lineTo(0, a2P), gD.lineTo(-a2Q, -a2Q), gD.lineTo(a2P, 0), gD.lineTo(this.g2 / 4, 0), gD.lineTo(this.g2 / 4, tG), gD.lineTo(tG, tG), gD.lineTo(tG, this.i2 - tG), gD
			.lineTo(this.g2 - tG, this.i2 - tG), gD.lineTo(this.g2 - tG, tG), gD.lineTo(this.g2 / 4, tG), gD.fill(), this.vR[this.a1x] && this.a2R(tH), this.a2S(tH), gD.setTransform(1, 0, 0, 1, 0, 0))
	}, this.a2S = function(tH) {
		var qd = vm(2, Math.floor(.06 * this.g2)),
			wY = (qd -= qd % 2, vm(2, Math.floor(.01 * this.g2))),
			tH = (wY -= wY % 2, Math.floor(.82 * tH));
		gD.fillRect(qd, tH, qd, wY), gD.fillRect(this.g2 - qd - qd, tH, qd, wY), gD.fillRect(Math.floor(this.g2 - qd - qd + (qd - wY) / 2), Math.floor(tH - (qd - wY) / 2), wY, qd)
	}, this.a2R = function(tH) {
		var jl;
		gD.font = this.vR[this.a1x][4];
		for (var du = this.vR[this.a1x][1] - 1; 0 <= du; du--) gD.textAlign = xH, jl = Math.floor(this.a27 * this.i2 + tH + du * ((1 - 2 * this.a27) * this.i2 - tH) / 9), gD.fillText(this.vR[this.a1x][0][du].value.toFixed(this.vR[this.a1x][3]),
			Math.floor(this.a26 * this.g2), jl), gD.fillText(du + 1 + this.vR[this.a1x][6] + ".", Math.floor(this.a24 * this.g2), jl), gD.textAlign = vu, gD.fillText(this.vR[this.a1x][0][du].name, Math.floor(this.a25 * this.g2), jl)
	}
}

function d0() {
	var jk, jl, i2, a2T, a2U, a2V, a2W, a2X, a2Y, g2, a2Z, a2a;
	this.sX = !1, this.cj = function(dd, a2b) {
		if (13 <= dX && dX < 18) return a2b ? void(a2Z = dd) : a2Z !== dd ? void 0 : void dU.saveString(200, dd);
		a2b && ((gA.vR[1].rM.sX || gA.vR[2].rM.sX) && gA.sh(), z.dS(!1), a2Z = dd, (a2a = document.createElement("a")).appendChild(document.createTextNode(a2Z)), this.sX = !0, a2a.title = a2Z, a2a.target = "_blank", a2a.href = a2Z, a2a.style
			.textAlign = "center", a2a.style.color = ae.gG, a2a.style.position = "absolute", a2a.style.padding = "0px", a2a.style.margin = "0px", this.resize(), document.body.appendChild(a2a), b7.d4 = !0)
	}, this.oK = function() {
		return !(!this.sX || (document.body.removeChild(a2a), this.sX = !1))
	}, this.g5 = function(gv, gw) {
		return !!this.sX && ((gv < jk || gw < jl || jk + g2 < gv || jl + i2 < gw || jk + g2 - a2T < gv && gw < jl + a2T) && (b7.d4 = !0, this.sX = !1, document.body.removeChild(a2a), 0 === x.sg()) && z.dS(!0), !0)
	}, this.resize = function() {
		var g1, a2c;
		this.sX && (a2X = Math.floor(.8 * (dg ? di < dh ? .6 : .55 : .4) * fu), a2T = Math.floor(.15 * a2X), a2U = Math.floor(.35 * a2T), a2V = Math.floor(.5 * a2T), a2W = Math.floor(2.5 * a2V), i2 = a2T + a2U + 3 * a2V, g1 = fx + Math.floor(
			a2U / nS) + fy, a2Y = Math.floor(nS * n.measureText(a2Z, g1)), a2c = g2 = (a2X < a2Y ? a2Y : a2X) + 2 * a2W, g2 = Math.min(g2, dh - 2 * (dg ? 2 : 1) * nc), g1 = fx + Math.floor(g2 / a2c * a2U / nS) + fy, a2Y = Math.floor(nS *
			n.measureText(a2Z, g1)), jk = Math.floor((js - g2) / 2), jl = Math.floor((g9 - i2) / 2), a2a.style.font = g1, a2a.style.top = Math.floor((jl + 1.4 * a2V + a2T) / nS) + "px", a2a.style.left = Math.floor((jk + (g2 - a2Y) / 2) /
			nS) + "px")
	}, this.gC = function() {
		this.sX && (gD.fillStyle = ae.ks, gD.fillRect(jk, jl + a2T, g2, i2 - a2T), gD.fillStyle = ae.la, gD.fillRect(jk, jl, g2, a2T), gD.fillStyle = ae.gG, gD.lineWidth = tI, gD.strokeStyle = ae.gG, gD.strokeRect(jk, jl, g2, i2), gD.fillRect(jk,
			jl + a2T, g2, tI), gD.font = fx + Math.floor(.48 * a2T) + fy, gD.textAlign = gF, gD.textBaseline = gE, gD.fillText("You are leaving Territorial.io!", Math.floor(jk + (g2 - .5 * a2T) / 2), Math.floor(jl + .55 * a2T)), j.vP(Math
			.floor(jk + g2 - .8 * a2T), Math.floor(jl + .25 * a2T), Math.floor(.5 * a2T)), gD.setTransform(1, 0, 0, 1, 0, 0))
	}
}

function cm() {
	var gap, v7, jk = [0, 0, 0, 0, 0],
		jl = [0, 0, 0, 0, 0],
		kY = [1, 1, 1, 1, 1],
		e0 = [!0, !0, !0, !0, !0],
		iW = (this.eE = [!0, !0, !0, !0, !0], null);
	this.a2d = function(uU, a2e) {
		iW = uU, e0 = a2e, v7 = [am.a2f, am.a2g, am.a2h, am.a2i, am.a2j], this.cj()
	}, this.cj = function() {
		if (a3.g0()) {
			var du, qd = Math.floor((dg ? .261 : .195) * fu),
				qe = Math.floor(.9 * qd),
				wY = Math.floor(.17 * qe);
			if (gap = dg ? 2 * nc : nc, kY[0] = qd / iW[0].width, kY[1] = qe / iW[1].width, kY[2] = wY / iW[2].height, kY[3] = wY / iW[3].height, kY[4] = wY / iW[4].height, kY[3] *= 1.07, jk[0] = gap, jk[1] = gap, jk[2] = gap, jk[3] = gap, jk[
				4] = Math.floor(2 * gap + kY[3] * iW[3].width), jl[0] = gap, jl[1] = jl[0] + gap + kY[0] * iW[0].height, jl[2] = jl[1] + gap + kY[1] * iW[1].height, jl[3] = jl[2] + gap + kY[2] * iW[2].height, jl[4] = jl[3], !e0[0])
				for (du = 0; du < 5; du++) jl[du] -= kY[0] * iW[0].height + gap;
			if (!e0[1])
				for (du = 2; du < 5; du++) jl[du] -= kY[1] * iW[1].height + gap
		}
	}, this.sX = function() {
		return !(7 === x.sg() && dg)
	}, this.g5 = function(gv, gw, a2b) {
		if (iW && this.sX())
			for (var du = e0.length - 1; 0 <= du; du--)
				if (e0[du] && this.eE[du] && jk[du] < gv && jl[du] < gw && gv < jk[du] + kY[du] * iW[du].width && gw < jl[du] + kY[du] * iW[du].height) return az.cj(v7[du], a2b), !0;
		return !1
	}, this.gC = function() {
		if (iW && this.sX()) {
			var du;
			for (gD.imageSmoothingEnabled = !0, du = 0; du < 5; du++) e0[du] && this.eE[du] && (gD.setTransform(kY[du], 0, 0, kY[du], jk[du], jl[du]), gD.drawImage(iW[du], 0, 0));
			gD.setTransform(1, 0, 0, 1, 0, 0)
		}
	}
}

function cH() {
	this.id = 0, this.wi = 0;
	var a2k = null,
		a2l = !1;
	this.cj = function() {
		var v4, eA, eC;
		dU ? this.id = 1 : dT ? this.id = 2 : (function() {
			try {
				if (!(a2k = window.localStorage)) return a2k = null;
				a2k.setItem("testLS", "1"), a2k.removeItem("testLS")
			} catch (error) {
				return a2k = null
			}
			a2l = !0
		}(), v4 = this, a2l && (eA = Number(a2k.getItem("zt0")), eC = Number(a2k.getItem("zt1")), eA && eC ? (v4.id = eA, v4.wi = Math.floor(Date.now() / 3e5) - eC) : (a2k.setItem("zt0", "" + Math.floor(3 + Math.random() * (Math.pow(2,
			20) - 3))), a2k.setItem("zt1", "" + Math.floor(Date.now() / 3e5)))))
	}
}

function bd() {
	var a1x, a2q, a2r;

	function a2w(du) {
		var button = v.n8[du],
			jk = button.jk,
			jl = button.jl,
			g2 = button.g2,
			i2 = button.i2;
		gD.fillStyle = button.a2u, gD.fillRect(jk, jl, g2, i2), du === a1x && (gD.fillStyle = a2r, gD.fillRect(jk, jl, g2, i2)), gD.lineWidth = tI, gD.strokeStyle = a2q, gD.strokeRect(jk, jl, g2, i2),
			function(button) {
				var jk = button.jk,
					jl = button.jl,
					g2 = button.g2,
					i2 = button.i2;
				gD.textAlign = gF, gD.textBaseline = gE, gD.font = button.font, gD.fillStyle = a2q, gD.fillText(button.we, Math.floor(jk + g2 / 2), Math.floor(jl + i2 / 2 + .1 * button.fontSize))
			}(button)
	}
	this.g2 = 0, this.i2 = 0, this.jl = 0, this.gap = 0, this.cj = function() {
		a1x = -1, a2q = ae.gG, a2r = "rgba(255,255,255,0.16)", this.n8 = new Array(7), this.i2 = Math.floor((dg ? .123 : .093) * fu), this.g2 = Math.floor((dg ? 3.96 : 4.2) * this.i2), this.gap = Math.floor(.025 * this.g2);
		var a2s = Math.floor(.26 * this.i2),
			a2t = fx + a2s + fy;
		this.n8[0] = {
			jk: 0,
			jl: 0,
			g2: Math.floor(.6 * this.g2 - this.gap / 2),
			i2: this.i2,
			we: "Multiplayer",
			font: a2t,
			a2u: "rgba(22,88,22,0.8)",
			fontSize: a2s
		}, a2s = Math.floor(.18 * this.i2), this.n8[1] = {
			jk: 0,
			jl: 0,
			g2: this.g2 - this.n8[0].g2 - this.gap,
			i2: this.i2,
			we: "Single Player",
			font: fx + a2s + fy,
			a2u: "rgba(22,88,88,0.8)",
			fontSize: a2s
		}, this.n8[2] = {
			jk: 0,
			jl: 0,
			g2: this.g2,
			i2: Math.floor(.3 * this.i2),
			we: "",
			font: this.n8[1].font,
			a2u: "rgba(100,0,0,0.8)",
			fontSize: this.n8[1].fontSize
		}, this.n8[3] = {
			jk: 0,
			jl: 0,
			g2: this.g2,
			i2: this.i2,
			we: "Back",
			font: this.n8[0].font,
			a2u: "rgba(0,0,0,0.8)",
			fontSize: this.n8[0].fontSize
		}, this.n8[4] = {
			jk: 0,
			jl: 0,
			g2: this.g2,
			i2: Math.floor(.3 * this.i2),
			we: "The game was updated!",
			font: this.n8[1].font,
			a2u: "rgba(100,0,0,0.8)",
			fontSize: this.n8[1].fontSize
		}, this.n8[5] = {
			jk: 0,
			jl: 0,
			g2: this.n8[0].g2,
			i2: Math.floor(.8 * this.i2),
			we: "Reload",
			font: this.n8[0].font,
			a2u: "rgba(0,100,0,0.8)",
			fontSize: this.n8[0].fontSize
		}, this.n8[6] = {
			jk: 0,
			jl: 0,
			g2: this.n8[1].g2,
			i2: this.n8[5].i2,
			we: "Back",
			font: this.n8[0].font,
			a2u: "rgba(0,0,0,0.8)",
			fontSize: this.n8[0].fontSize
		}, this.zu()
	}, this.zu = function() {
		this.jl = Math.floor(.54 * g9), this.n8[0].jk = Math.floor(.5 * js - .5 * this.g2), this.n8[1].jk = this.n8[0].jk + this.n8[0].g2 + this.gap, this.n8[2].jk = this.n8[3].jk = this.n8[0].jk, this.n8[4].jk = this.n8[5].jk = this.n8[0].jk,
			this.n8[6].jk = this.n8[1].jk, this.n8[0].jl = Math.floor(.54 * g9), this.n8[1].jl = this.n8[0].jl, this.n8[2].jl = Math.floor((g9 - this.n8[2].i2 - this.n8[3].i2 - this.gap) / 2), this.n8[3].jl = this.n8[2].jl + this.n8[2].i2 + this
			.gap, this.n8[4].jl = Math.floor((g9 - this.n8[4].i2 - this.n8[5].i2 - this.gap) / 2), this.n8[5].jl = this.n8[6].jl = this.n8[4].jl + this.n8[4].i2 + this.gap
	}, this.a2v = function() {
		a2w(0), a2w(1)
	}, this.a2x = function() {
		a2w(2), a2w(3)
	}, this.a2y = function() {
		a2w(4), a2w(5), a2w(6)
	}, this.s6 = function(jk, jl, jG) {
		var du = -1;
		return 0 === x.sg() ? du = this.se(jk, jl, 0, 2) : 3 === x.sg() ? du = this.se(jk, jl, 3, 1) : 5 === x.sg() && (du = this.se(jk, jl, 5, 2)), a1x !== du && (a1x = du, jG) && (b7.d4 = !0), -1 !== du && (q.ox(), !0)
	}, this.se = function(jk, jl, a2z, gJ) {
		for (var du = a2z; du < a2z + gJ; du++)
			if (jk >= this.n8[du].jk && jl >= this.n8[du].jl && jk <= this.n8[du].jk + this.n8[du].g2 && jl <= this.n8[du].jl + this.n8[du].i2) return du;
		return -1
	}
}

function a31() {
	function a37(uX) {
		return uX < 0 ? 0 : 255 < uX ? 255 : Math.floor(uX)
	}
	this.g2 = 0, this.i2 = 0, this.sX = !1, this.a32 = 0, this.gap = 0, this.wy = 0, this.a2T = 0, this.a33 = 0, this.a34 = 0, this.a35 = 0, this.colors = null, this.cj = function() {
		this.sX = !0, this.a32 = 0, this.resize()
	}, this.resize = function() {
		this.sX && (dh < 1.4 * di ? this.g2 = Math.floor((dg ? .94 : .43) * dh) : (this.i2 = Math.floor((dg ? .88 : .43) * di), this.g2 = Math.floor(1.4 * this.i2)), this.i2 = this.g2 / 1.4, this.gap = this.g2 / 32, this.a2T = Math.floor(.25 *
			this.i2), this.a33 = (this.i2 - this.a2T - 3 * this.gap) / 2, this.a34 = this.g2 - 3 * this.gap - this.a33, this.a35 = (this.i2 - this.a2T - 4 * this.gap) / 3)
	}, this.a36 = function() {
		this.colors = [
			[0, 0, 0],
			[0, 0, 0]
		];
		var dd = dk().split("");
		if (dd.length < 6)
			for (var hu = 2; 0 <= hu; hu--) this.colors[0][hu] = a37(256 * Math.random());
		else
			for (var du = 2; 0 <= du; du--) this.colors[0][du] = a37(4 * (10 * parseInt(dd[2 * du]) + parseInt(dd[2 * du + 1])));
		this.a38()
	}, this.a39 = function() {
		return [en(this.colors[0][0], 4), en(this.colors[0][1], 4), en(this.colors[0][2], 4)]
	}, this.s9 = function(g6, g7, deltaY) {
		var jp = (js - this.g2) / 2;
		g7 -= (g9 - this.i2) / 2 + this.a2T, (g6 -= jp) < 0 || g7 < 0 || g6 >= this.g2 || g7 >= this.i2 - this.a2T || (jp = Math.floor(3 * g7 / (this.i2 - this.a2T)), this.colors[this.wy][jp] = a37(this.colors[this.wy][jp] + (deltaY < 0 ? 1 : -
			1) * Math.max(Math.abs(.05 * deltaY), 1)), b7.d4 = !0)
	}, this.g5 = function(g6, g7) {
		this.a32 = 0;
		var jp = (js - this.g2) / 2;
		return g7 -= (g9 - this.i2) / 2, (g6 -= jp) < 0 || g7 < 0 || g6 >= this.g2 - 1 || g7 >= this.i2 - 1 || g6 > this.g2 - (.4 * this.a2T + 3 * this.gap) && g7 < this.a2T ? (this.sX = !1, 0 === x.sg() && z.dS(!0), !(b7.d4 = !0)) : g6 < this
			.gap || g7 < this.gap + this.a2T || g6 >= this.g2 || g7 >= this.i2 - this.gap || (g6 < this.gap + this.a33 ? (g7 < this.gap + this.a2T + this.a33 && 0 !== this.wy && (this.wy = 0, b7.d4 = !0), !0) : g6 < this.gap + this.a33 || (g6 -=
				2 * this.gap + this.a33, g7 < this.gap + this.a2T + this.a35 ? (this.a32 = 1, this.colors[this.wy][0] = a37(256 * g6 / this.a34), b7.d4 = !0) : g7 < 2 * this.gap + this.a2T + this.a35 || (g7 < 2 * this.gap + this.a2T + 2 *
					this.a35 ? (this.a32 = 2, this.colors[this.wy][1] = a37(256 * g6 / this.a34), b7.d4 = !0) : !(g7 >= 3 * this.gap + this.a2T + 2 * this.a35) || (this.a32 = 3, this.colors[this.wy][2] = a37(256 * g6 / this.a34), b7.d4 = !0))
				))
	}, this.a38 = function() {
		for (var hu = 2; 0 <= hu; hu--) this.colors[0][hu] = a37(this.colors[0][hu])
	}, this.a3A = function() {
		for (var e0, dd = "", du = 0; du < 3; du++)(e0 = en(this.colors[0][du], 4)) < 10 && (dd += "0"), dd += e0.toString();
		return dd
	}, this.s6 = function(g6) {
		0 !== this.a32 && (g6 -= 2 * this.gap + this.a33 + (js - this.g2) / 2, this.colors[this.wy][this.a32 - 1] = a37(256 * g6 / this.a34), b7.d4 = !0)
	}, this.a3B = function() {
		0 < this.a32 && (this.a32 = 0, this.a38(), aR.a3C(), b7.d4 = !0)
	}, this.gC = function() {
		var jp = (js - this.g2) / 2,
			jq = (g9 - this.i2) / 2;
		gD.setTransform(1, 0, 0, 1, jp, jq), gD.fillStyle = ae.ks, gD.fillRect(0, this.a2T, this.g2, this.i2 - this.a2T), gD.fillStyle = ae.l3, gD.fillRect(0, 0, this.g2, this.a2T), gD.fillStyle = ae.gG, gD.lineWidth = tI, gD.strokeStyle = ae.gG,
			gD.strokeRect(-1, -1, this.g2 + 2, this.i2 + 2), gD.fillRect(0, this.a2T, this.g2, tI), gD.font = fx + Math.floor(.31 * this.a2T) + fy, gD.textBaseline = gE, gD.textAlign = gF, gD.fillText("Choose Your Nation's Color!", Math.floor((
				this.g2 - this.gap - .4 * this.a2T) / 2), Math.floor(.55 * this.a2T)), this.a3D(0), gD.lineWidth = tI, this.a3E(0), this.a3E(1), this.a3E(2), j.vP(Math.floor(jp + this.g2 - .4 * this.a2T - this.gap), Math.floor(jq + .3 * this
				.a2T), Math.floor(.4 * this.a2T)), gD.setTransform(1, 0, 0, 1, 0, 0)
	}, this.a3D = function(du) {
		var gS = this.colors[du][0],
			tE = this.colors[du][1],
			du = this.colors[du][2];
		gD.fillStyle = "rgb(" + gS + "," + tE + "," + du + ")", gD.fillRect(this.gap, this.a2T + this.gap, this.a33, 2 * this.a33 + this.gap), gD.lineWidth = tI, gD.strokeStyle = ae.gG, gD.strokeRect(this.gap, this.a2T + this.gap, this.a33, 2 *
			this.a33 + this.gap), gD.fillStyle = gS + tE + du < 306 && tE < 150 ? ae.gG : ae.jw, gD.font = fx + Math.floor(.32 * this.a35) + fy, gD.textAlign = gF, gD.textBaseline = gE, gD.rotate(-Math.PI / 2), gD.fillText("National Color",
			Math.floor(-1.5 * this.gap - this.a2T - this.a33), Math.floor(this.gap + .5 * this.a33)), gD.rotate(Math.PI / 2)
	}, this.a3E = function(du) {
		gD.fillStyle = "rgb(" + (0 === du ? 150 : 2 === du ? 30 : 0) + "," + (1 === du ? 130 : 2 === du ? 30 : 0) + "," + (2 === du ? 220 : 0) + ")", gD.fillRect(2 * this.gap + this.a33, this.a2T + this.gap + du * (this.gap + this.a35), Math
				.floor(this.colors[this.wy][du] * this.a34 / 255), this.a35), gD.strokeStyle = ae.gG, gD.strokeRect(2 * this.gap + this.a33, this.a2T + this.gap + du * (this.gap + this.a35), this.a34, this.a35), gD.fillStyle = ae.gG, gD.font =
			fx + Math.floor(.32 * this.a35) + fy, gD.textBaseline = gE, gD.textAlign = vu, gD.fillText((0 === du ? "Red: " : 1 === du ? "Green: " : "Blue: ") + this.colors[0][du].toString(), 3 * this.gap + this.a33, Math.floor(this.a2T + this
				.gap + du * (this.gap + this.a35) + .53 * this.a35))
	}
}

function be() {
	var a3F, a3G, xS, xd, yW, a3H, a3I, a3J, a3K, g1, fontSize, kE, a3L, a3N, a3M = 0;

	function a3Q() {
		return aP.j7.a3R[(a3L + a3M) % aP.j7.a3S]
	}

	function a3O() {
		a3L++, kE = b7.dV, aP.j7.zm(a3Q(), 4) && (a3N = !0, aP.lj.a3T(a3Q()))
	}

	function a3W() {
		0 === a3L ? y.a3Y(3249) : (a3L === aP.j7.a3S - 1 && (a3L = -1), a3O())
	}

	function a3f(jl, zX, a3e) {
		var jp = Math.floor((js - xd) / 2) + a3I,
			jr = jp + Math.floor(a3e * (xd - 2 * a3I));
		gD.lineWidth = zX, gD.beginPath(), gD.moveTo(jp, jl), gD.lineTo(jr, jl), gD.lineTo(Math.floor(jp - a3I + a3e * xd), jl + xS), gD.lineTo(jp - a3I, jl + xS), gD.closePath()
	}
	this.cj = function() {
		x.setState(6), a3F = 0, a3G = 1, a3J = "rgba(0,220,120,0.4)", a3K = "rgba(0,0,0,0.8)", this.resize(), b7.d4 = !0, a3L = 0, a3N = !1, a3O()
	}, this.resize = function() {
		xd = Math.floor((dg ? .5 : .25) * fu), yW = xd + 12, xS = Math.floor(.125 * xd), a3I = 3 * xS, a3H = Math.floor(.225 * xd), fontSize = Math.floor(.3 * xS), g1 = xJ + fontSize + fy
	}, this.a3P = function(hk) {
		a3M = hk
	}, this.a3U = function(a3V) {
		a3V === a3Q() && (a3N = !1, a3W())
	}, this.zo = function(a3V) {
		6 !== x.sg() || a3N || (kE = b7.dV, a3N = !0, aP.lj.a3T(a3V))
	}, this.g5 = function(jk, jl) {
		var jp = Math.floor((js - yW) / 2),
			jq = Math.floor(.5 * (g9 - g8 - xS - a3H)) + xS + g8;
		return jp < jk && jk < jp + yW && jq < jl && jl < jq + a3H && (this.a3Z(), v.s6(jk, jl, !1), !0)
	}, this.a3Z = function() {
		aP.j7.a3a(3260), a2.cj(), b7.d4 = !0
	}, this.iH = function() {
		6 === x.sg() && (a3N ? b7.dV > kE + 12e3 && y.a3Y(3250) : b7.dV > kE + 12e3 && a3W(), 100 < (a3F += .07 * a3G * (a3F < 16 ? 5 + a3F : 84 < a3F ? 105 - a3F : 17)) ? (a3F = 100, a3G = -1) : a3F < 0 && (a3F = 0, a3G = 1), a3J = "rgba(0," +
			Math.floor(190 - 1.9 * a3F) + "," + Math.floor(120 - 1.2 * a3F) + "," + (.4 + .004 * a3F) + ")", a3K = "rgba(0," + Math.floor(1.9 * a3F) + "," + Math.floor(1.2 * a3F) + "," + (.8 - .004 * a3F) + ")", b7.d4 = !0)
	}, this.gC = function() {
		var jk = Math.floor((js - yW) / 2),
			jl = Math.floor(.5 * (g9 - g8 - xS - a3H));
		! function(title, jl, zX, a3e) {
			gD.fillStyle = a3K, a3f(jl, zX, 1), gD.fill(), gD.fillStyle = a3J, a3f(jl, zX, a3e), gD.fill(), gD.strokeStyle = ae.gG, a3f(jl, zX, 1), gD.stroke(),
				function(a3h, jl) {
					gD.textAlign = gF, gD.textBaseline = gE, gD.font = g1, gD.fillStyle = ae.gG, gD.fillText(a3h, Math.floor(.5 * js), Math.floor(jl + .58 * xS))
				}(title, jl)
		}("Loading", jl, 3, a3F / 100),
		function(jk, jl, g2, i2, we) {
			gD.fillStyle = ae.kq, gD.fillRect(jk, jl, g2, i2), gD.lineWidth = 3, gD.strokeStyle = ae.gG, gD.strokeRect(jk, jl, g2, i2);
			var ev = Math.floor(.3 * i2);
			gD.textAlign = gF, gD.textBaseline = gE, gD.font = xJ + ev + fy, gD.fillStyle = ae.gG, gD.fillText(we, Math.floor(jk + g2 / 2), Math.floor(jl + i2 / 2 + .1 * ev))
		}(jk, jl + xS + g8, yW, a3H, "Back")
	}
}

function bf() {
	var dQ;
	this.cj = function() {
		v.cj(), z.cj(), dQ = 0, b6.cj(), a2.cj()
	}, this.setState = function(a3i) {
		dQ = a3i
	}, this.sg = function() {
		return dQ
	}, this.a3j = function() {
		0 === x.sg() && a2.a3k(), this.setState(8), aL.a3k(), gA.sh(), bA.sX = !1, az.g5(-1e3, -1e3)
	}, this.sh = function(dE) {
		if (!au.pN) return !1;
		if (!(b7.dV < 400)) {
			if ("Enter" === dE.key || "Escape" === dE.key) {
				if (this.a3l()) return 0 === dQ && z.dS(!0), !0;
				if ("Enter" === dE.key) {
					if (0 === dQ) return a2.a3m(), !0;
					if (7 === dQ) return !0
				}
			}
			return !1
		}
	}, this.a3n = function() {
		return ac.sX || bA.sX || az.sX || gA.a3o()
	}, this.a3p = function() {
		bA.resize(), ac.resize(), az.resize(), gA.resize()
	}, this.a3l = function() {
		return !!az.oK() || !(!gA.sh() && (bA.sX ? bA.sX = !1 : !ac.sX || (ac.oK(), 0)))
	}, this.e1 = function() {
		b7.d4 = !0, 8 === dQ ? kQ ? af.sj(!1) : b5.sX ? b5.sk() : ac.sX ? ac.oK() : j.sk() : 7 === dQ ? aL.a3q() : 6 === dQ ? w.a3Z() : 3 === dQ ? y.a3r(0, 0) : 2 === dQ ? a1.a3r() : 0 !== dQ || this.a3l() || dy(11)
	}, this.g5 = function(jk, jl) {
		if (!b6.g5(jk, jl) && au.pN && !az.g5(jk, jl) && !ac.g5(jk, jl) && !(6 === dQ && w.g5(jk, jl) || 2 === dQ && a1.g5(jk, jl) || aR.g5(jk, jl) || bA.g5(jk, jl) || ay.g5(jk, jl, !0) || gA.g5(jk, jl, !0))) {
			if (q.g5(jk, jl), 0 === dQ) a2.g5(jk, jl);
			else if (3 === dQ) y.g5(jk, jl);
			else if (5 === dQ) a0.g5(jk, jl);
			else if (7 === dQ && aL.g5(jk, jl)) return;
			b0.g5(jk, jl)
		}
	}, this.s6 = function(jk, jl) {
		if (aR.s6(jk, jl), !q.zk) {
			if (b6.s6(jk, jl)) return void q.ox();
			if (0 <= gA.se(jk, jl)) return void q.ox();
			if (gA.s6(jk, jl)) return void q.ox();
			if (2 === dQ && a1.s6(jk, jl)) return void q.ox();
			if (v.s6(jk, jl, !0)) return
		}
		q.s6(jk, jl)
	}, this.click = function(jk, jl) {
		q.sZ(), gA.a3B() || ay.g5(jk, jl, !1) || gA.g5(jk, jl, !1)
	}, this.s9 = function(jk, jl, deltaY) {
		gA.vR[1].rM.sX || (gA.vR[2].rM.sX ? gA.vR[2].rM.s9(jk, jl, deltaY) : 0 === dQ && q.s9(jk, deltaY))
	}, this.a3s = function() {
		v.zu(), gA.zu(), 0 === dQ ? (z.resize(), q.zu()) : 7 === dQ && aL.resize(), b7.d4 = !0
	}, this.gC = function() {
		var jl, gP, gO, jk;
		8 !== dQ && 10 !== dQ && (gD.imageSmoothingEnabled = !0, this.qU(), q.gC(), l.gC(), jl = Math.floor(.3 * g9), gP = a3.uV("territorial.io"), gO = (gO = 1.75 * g9 / gP.width) * gP.width < .98 * js ? .98 * js / gP.width : gO, gD
			.globalAlpha = .15, jk = Math.floor(.5 * (js - gO * gP.width)), jk = Math.floor(jk / gO), jl = Math.floor(jl - .5 * gP.height * gO), jl = Math.floor(jl / gO), gD.setTransform(gO, 0, 0, gO, jk, jl), gD.drawImage(gP, jk, jl), gD
			.setTransform(1, 0, 0, 1, 0, 0), gD.globalAlpha = 1, ay.gC(), b0.gC(), gA.gC(), aR.gC(), 0 === dQ ? a2.gC() : 2 === dQ ? a1.gC() : 3 === dQ ? y.gC() : 5 === dQ ? a0.gC() : 6 === dQ ? w.gC() : 7 === dQ && aL.gC(), gA.a3u(), b6
		.gC(), bA.gC(), az.gC(), ac.gC())
	}, this.qU = function() {
		var a3w, a3v;
		au.pN ? (a3v = dh / au.eV, a3w = di / au.eW, gD.setTransform(a3v = a3w < a3v ? a3v : a3w, 0, 0, a3v, Math.floor((dh - a3v * au.eV) / 2), Math.floor((di - a3v * au.eW) / 2)), gD.drawImage(au.pP, 0, 0), gD.setTransform(1, 0, 0, 1, 0, 0), gD
			.fillStyle = ae.kq) : gD.fillStyle = ae.jw, gD.fillRect(0, 0, dh, di)
	}
}

function a3x() {
	this.g2 = 0, this.i2 = 0, this.a3y = 0, this.sX = !1, this.wn = 10, this.f2 = .12, this.a32 = !1, this.a3z = !1, this.a40 = !1, this.cj = function() {
		this.sX = !0, this.resize(), this.a32 = !1
	}, this.resize = function() {
		this.sX && (this.g2 = 1.15 * dh < di ? Math.floor((dg ? .94 : .69) * dh) : Math.floor((dg ? .94 : .69) * di / 1.15), this.g2 -= this.g2 % this.wn, this.i2 = +this.g2, this.a3y = Math.floor(.15 * this.g2))
	}, this.g5 = function(g6, g7, dQ) {
		var jp = (js - this.g2) / 2;
		return g7 -= (g9 - this.i2 - this.a3y) / 2, (g6 -= jp) < 0 || g7 < 0 || g6 >= this.g2 - 1 || g7 >= this.i2 + this.a3y - 1 || g6 >= this.g2 - this.a3y && g7 < this.a3y ? (0 === dQ && (this.sX = !1, 0 === x.sg() && z.dS(!0), b7.d4 = !0), !
			1) : (g7 < this.a3y || (g6 = (g6 = en(g6, jp = Math.floor(this.g2 / this.wn)) + this.wn * en(g7 - this.a3y, jp)) < 0 ? 0 : g6 >= b3.wr ? b3.wr - 1 : g6, (0 === dQ || 1 === dQ && !b3.dw[g6] || 2 === dQ && b3.dw[g6]) && (this
			.a3z = !b3.dw[g6], this.a32 = !0, this.a40 = !0, b3.dw[g6] = !b3.dw[g6], b3.x7(), b7.d4 = !0)), !0)
	}, this.s6 = function(g6, g7) {
		this.a32 && this.g5(g6, g7, this.a3z ? 1 : 2)
	}, this.a3B = function() {
		this.a40 && (dt(), this.a40 = !1), this.a40 = !1, this.a32 = !1
	}, this.gC = function() {
		gD.imageSmoothingEnabled = !0;
		for (var jp = (js - this.g2) / 2, jq = (g9 - this.i2 - this.a3y) / 2, qd = (gD.setTransform(1, 0, 0, 1, jp, jq), gD.fillStyle = ae.ks, gD.fillRect(0, this.a3y, this.g2, this.i2), gD.fillStyle = ae.l7, gD.fillRect(0, 0, this.g2, this.a3y),
					gD.fillStyle = ae.gG, gD.lineWidth = tI, gD.strokeStyle = ae.gG, gD.strokeRect(-1, -1, this.g2 + 2, this.i2 + this.a3y + 2), gD.fillRect(0, this.a3y - tI, this.g2, tI), gD.font = fx + Math.floor(.44 * this.a3y) + fy, gD
					.textAlign = gF, gD.textBaseline = gE, gD.fillText("Select Your Emojis!", Math.floor((this.g2 - .725 * this.a3y) / 2), Math.floor(.55 * this.a3y)), Math.floor(this.g2 / this.wn)), zoom = (qd - 2 * this.f2 * qd) / b3.g2, du =
				b3.wr - 1; 0 <= du; du--) gD.setTransform(1, 0, 0, 1, Math.floor(jp + du % this.wn * qd), Math.floor(jq + this.a3y + en(du, this.wn) * qd)), b3.dw[du] && (gD.fillStyle = ae.l9, gD.fillRect(0, 0, qd, qd)), gD.setTransform(zoom, 0,
			0, zoom, Math.floor(jp + du % this.wn * qd + this.f2 * qd), Math.floor(jq + this.a3y + en(du, this.wn) * qd + this.f2 * qd)), gD.drawImage(b3.uU[du], 0, 0);
		j.vP(Math.floor(jp + this.g2 - .725 * this.a3y), Math.floor(jq + .275 * this.a3y), Math.floor(.45 * this.a3y)), gD.setTransform(1, 0, 0, 1, 0, 0), gD.imageSmoothingEnabled = !1
	}
}

function bg() {
	var a41, e9, a42;

	function x2() {
		var dQ;
		0 === (dQ = x.sg()) ? a2.a3k() : 6 === dQ ? aP.j7.a3a(a41) : 7 === dQ ? (aL.a3k(), aP.j7.close(aP.j7.a43, 3240)) : 8 === dQ && (uG(!0), a2.a3k()), x.setState(3), v.zu(), a46(a41), b7.d4 = !0
	}

	function a44(dE) {
		for (var du = e9.length - 1; 0 <= du; du--)
			if (dE === e9[du].code) return e9[du].dd;
		return a42 + dE
	}

	function a46(dE) {
		v.n8[2].we = a44(dE)
	}
	this.bh = function() {
		(e9 = []).push({
			dd: "No Server Response",
			code: 1006
		}), e9.push({
			dd: "Account successfully saved!",
			code: 3231
		}), e9.push({
			dd: "Account Error",
			code: 3232
		}), e9.push({
			dd: "No Servers Found",
			code: 3249
		}), e9.push({
			dd: "Thanks for the vote.",
			code: 3252
		}), e9.push({
			dd: "Please accept Cookies",
			code: 3265
		}), e9.push({
			dd: "Invalid Password Format",
			code: 3266
		}), e9.push({
			dd: "Invalid Replay Format",
			code: 3605
		}), e9.push({
			dd: "Lobby Timeout",
			code: 4207
		}), e9.push({
			dd: "Invalid Username",
			code: 4214
		}), e9.push({
			dd: "User already exists.",
			code: 4224
		}), e9.push({
			dd: "No Client Response Error",
			code: 4229
		}), a42 = "Error "
	}, this.cj = function(a3V, dE) {
		a41 = dE;
		var dQ = x.sg();
		if (6 === dQ) {
			if (4211 === dE) return void a0.cj(0, 0);
			if (4214 !== dE) return void w.a3U(a3V)
		} else {
			if (7 !== dQ) return 8 === dQ ? void(a3V !== aP.j7.sO || iy || k.w0(a44(dE))) : void 0;
			if (a3V !== aP.j7.a43) return
		}
		x2()
	}, this.a3Y = function(dE) {
		a41 = dE, 8 === x.sg() ? k.w0(a44(dE)) : x2()
	}, this.resize = function() {
		a46(a41)
	}, this.g5 = function(jk, jl) {
		3 === v.se(jk, jl, 3, 1) && this.a3r(jk, jl)
	}, this.a3r = function(jk, jl) {
		a2.cj(), v.s6(jk, jl, !1), b7.d4 = !0
	}, this.gC = function() {
		v.a2x()
	}
}

function bi() {
	var input, color;
	this.sX = !1, this.oa = !1, this.cj = function() {
		color = ae.ks, (input = document.createElement("INPUT")).setAttribute("type", "text"), input.setAttribute("name", "username"), input.setAttribute("id", "usernameField"), input.setAttribute("autocomplete", "username"), input.value = "",
			input.style.textAlign = "center", input.style.backgroundColor = color, input.style.borderRadius = "0", input.style.color = ae.gG, input.style.position = "absolute", input.readOnly = !1, input.addEventListener("input", function() {
				a2.a47()
			}), input.addEventListener("focus", function() {
				z.oa = !0
			}), input.addEventListener("blur", function() {
				z.oa = !1
			})
	}, this.resize = function() {
		var fontSize, tG, tH;
		this.sX && (tG = .3 * (fontSize = .22 * v.i2 / nS), tH = tI / nS, input.style.border = tH.toFixed(2) + "px solid " + ae.gG, input.style.font = fx + fontSize + fy, input.style.padding = tG.toFixed(2) + "px", input.style.left = (((js - v
			.g2) / nS - tH) / 2).toFixed(2) + "px", input.style.width = (v.g2 / nS - 2 * tG - tH).toFixed(2) + "px", input.style.top = ((v.jl - .52 * v.i2) / nS).toFixed(2) + "px")
	}, this.get = function() {
		return input
	}, this.dS = function(dS) {
		this.sX !== dS && ((this.sX = dS) ? (this.resize(), document.body.appendChild(input)) : (this.oa = !1, document.body.removeChild(input)))
	}, this.sm = function(a48) {
		a48 && color === ae.ks || !a48 && color === ae.lJ || (color = a48 ? ae.ks : ae.lJ, input.style.backgroundColor = color)
	}
}

function c8() {
	var mX, a4B, a4C, a4D;
	this.a49 = 0, this.a4A = 0, this.cj = function() {
		var gP, kY;
		7 === x.sg() && (mX = ai.mX, a4B = 0, a4C = b7.dV + 4500, a4D = aP.w7.a4E() ? 2 : 0, x.setState(10), gD.imageSmoothingEnabled = !0, x.qU(), gP = a3.uV("loading"), kY = 1, kY = (dg ? .396 : .25) * fu / gP.width, gD.setTransform(kY, 0, 0,
			kY, Math.floor((dh - kY * gP.width) / 2), Math.floor((di - kY * gP.height) / 2)), gD.drawImage(gP, 0, 0), gD.setTransform(1, 0, 0, 1, 0, 0))
	}, this.jE = function() {
		0 < a4D && b7.dV > a4C && (a4D--, a4C += 4500, 0 === b7.a4F) && 0 === b7.iV() && (0 === a4D && aP.j7.sO < aP.j7.a4G && (aP.j7.sO += aP.j7.a4H), aP.j7.zm(aP.j7.sO, 5))
	}, this.a4I = function() {
		10 === x.sg() && 2 <= ++a4B && (aP.w7.a4J(mX), mX = null)
	}
}

function c5() {
	var a4L, a4M, a4N, a4O, a4P, a4Q, a4R, a4T, a4U, a4W, a4X, a4Y, a4b, a4c, a4d, a4e, a4f, a4S = 48,
		a4Z = ["Joined", "Skipped", "Multiplayer", "Singleplayer"],
		a4a = [0, 0, 0, 0];

	function a4k(du, uU) {
		var du = a4R[du].getContext("2d", {
				alpha: !0
			}),
			zoom = (du.clearRect(0, 0, a4S, a4S), a4S / uU.width),
			dW = a4S / uU.height,
			zoom = dW < zoom ? dW : zoom;
		du.imageSmoothingEnabled = !0, du.setTransform(zoom, 0, 0, zoom, Math.floor((a4S - zoom * uU.width) / 2), Math.floor((a4S - zoom * uU.height) / 2)), du.drawImage(uU, 0, 0), du.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a4o(iW, gS, a4r, gQ) {
		gQ.beginPath(), gQ.moveTo(iW, iW), gQ.lineTo(iW + Math.cos(a4r) * gS, iW + Math.cos(a4r + 1.5 * Math.PI) * gS), gQ.stroke()
	}

	function a55() {
		if (7 === x.sg()) {
			for (var gc, uU, gQ, zoom, dW, hk = -1, du = a4T.length - 1; 0 <= du; du--)
				if (null === a4T[du].gP) {
					hk = du;
					break
				} - 1 !== hk && (null !== (gc = a4v(a4T[hk].a4z, a4T[hk].a50)) ? a4T[hk].gP = gc : (gc = {
					eV: au.eV,
					eW: au.eW,
					pP: au.pP,
					pL: au.pL,
					pM: au.pM,
					pQ: au.pQ,
					pn: au.pn,
					a4w: au.a4w
				}, au.bh(a4T[hk].a4z, a4T[hk].a50), au.pO.a56(), (uU = document.createElement("canvas")).width = 128, uU.height = 128, gQ = uU.getContext("2d", {
					alpha: !1
				}), (zoom = 128 / au.eV) < (dW = 128 / au.eW) && (zoom = dW), gQ.imageSmoothingEnabled = !0, gQ.setTransform(zoom, 0, 0, zoom, (128 - zoom * au.eV) / 2, (128 - zoom * au.eW) / 2), gQ.drawImage(au.pP, 0, 0), au.eV = gc.eV, au
				.eW = gc.eW, au.pP = gc.pP, au.pL = gc.pL, au.pM = gc.pM, au.pQ = gc.pQ, au.pn = gc.pn, au.a4w = gc.a4w, a4T[hk].gP = uU), b7.d4 = !0)
		}
	}

	function a4v(a4z, a50) {
		for (var du = a4T.length - 1; 0 <= du; du--)
			if (null !== a4T[du].gP && a4T[du].a4z === a4z && a4T[du].a50 === a50) return a4T[du].gP;
		return null
	}
	this.cj = function() {
		var du;
		for (a4f = 0, a4W = -1, x.setState(7), a4T = [], this.resize(), a4R = new Array(13), du = a4R.length; 0 <= du; du--) a4R[du] = document.createElement("canvas"), a4R[du].width = a4S, a4R[du].height = a4S;
		for (du = 0; du < 7; du++) ! function(wF) {
			var a4m, gQ = a4R[wF - 2].getContext("2d", {
					alpha: !0
				}),
				a4l = 1.5 * Math.PI,
				iW = Math.floor(.5 * a4S),
				gS = Math.floor(.48 * a4S);
			gQ.lineWidth = 2, gQ.strokeStyle = ae.gG, gQ.clearRect(0, 0, a4S, a4S);
			for (var du = 0; du < wF; du++) a4m = a4l + 2 * Math.PI / wF,
				function(du, iW, gS, a4l, a4m, gQ) {
					gQ.fillStyle = b8.a4q[du], gQ.beginPath(), gQ.arc(iW, iW, gS, a4l, a4m), gQ.lineTo(iW, iW), gQ.fill()
				}(du + 1, iW, gS, a4l, a4m, gQ), 0 !== du && a4o(iW, gS, a4l, gQ), a4l = a4m;
			a4o(iW, gS, 1.5 * Math.PI, gQ),
				function(iW, gS, gQ) {
					gQ.beginPath(), gQ.arc(iW, iW, gS, 0, 2 * Math.PI), gQ.stroke()
				}(iW, gS, gQ)
		}(du + 2);
		a4k(7, a3.get(4)), a4k(8, b3.uU[27]), a4k(9, b3.uU[46]), a4k(10, b3.uU[36]), a4k(11, a3.get(19)), a4k(12, a3.get(20)), b7.d4 = !0
	}, this.a3q = function() {
		this.a3k(), aP.j7.a3a(3240), a2.cj(), b7.d4 = !0
	}, this.a3k = function() {
		a4T = [], a4R = [], bC.a4h.a4i()
	}, this.wm = function() {
		return a4Y
	}, this.resize = function() {
		var a4s, pB, yl, a4t;
		for (a4N = [0, 0], a4U = [0, 0, 0, 0], a4e = dg ? (a4X = Math.floor(.8 * .4 * fu), a4Y = Math.floor(.56 * a4X), a4U[0] = g8, dh < di ? (a4U[1] = a4Y + 2 * g8, a4U[2] = dh - 3 * a4U[0], a4U[3] = b0.gB() - 3 * g8 - a4Y, a4c = Math.floor(
				.95 * a4Y), a4d = Math.floor((dh - a4X - g8) / 2), Math.floor(g8 + a4Y / 2)) : (a4U[1] = g8, a4U[2] = dh - 3 * g8 - a4X, a4U[3] = b0.gB() - 2 * g8, a4c = Math.floor(.8 * a4X), a4U[3] - a4Y < a4X && (a4c = Math.floor(.8 * (a4U[
				3] - a4Y)), a4c = vm(a4Y, a4c)), a4d = Math.floor(dh - a4X / 2 - g8), vm(a4e = Math.floor(g8 + a4Y + (a4U[3] - a4Y) / 2), Math.floor(a4Y + 2 * g8 + a4c / 2)))) : (a4X = Math.floor(.2016 * fu), a4Y = Math.floor(.56 * a4X), a4U[2] =
				Math.floor(.5 * dh), a4U[3] = Math.floor(.5 * di), a4U[1] = Math.floor(.45 * (di - a4U[3])), a4U[0] = Math.floor((dh - a4U[2]) / 2), a4c = Math.floor(.75 * a4Y), a4d = Math.floor(dh / 2), Math.floor(a4U[1] + a4U[3] + (di - a4U[
					3] - a4U[1]) / 2)), a4b = fx + Math.floor(.65 * a4Y / 4) + fy, a4s = pB = 1; a4s * pB < a4T.length;) a4U[3] / (pB + 1) < a4U[2] / (a4s + 1) ? a4s++ : pB++;
		a4L = (yl = (a4U[2] - (a4s - 1) * g8) / a4s) < (a4t = (a4U[3] - (pB - 1) * g8) / pB) ? yl : a4t, a4M = Math.floor(a4L), a4Q = fx + Math.floor(.5 * a4L / 5) + fy, a4N[0] = a4s, a4N[1] = pB, a4O = a4U[0] + Math.floor((a4U[2] - a4N[0] *
			a4L - (a4N[0] - 1) * g8) / 2), a4P = a4U[1] + Math.floor((a4U[3] - a4N[1] * a4L - (a4N[1] - 1) * g8) / 2)
	}, this.a2M = function(a4u, f2) {
		var du, dW, gP, ev = a4T.length;
		for (a4a = a4u, du = 0; du < f2.length; du++) gP = a4v(f2[du].pn, f2[du].a4w), a4T.push({
			a4x: f2[du].id,
			u1: f2[du].u1,
			u2: f2[du].a4y,
			a4z: f2[du].pn,
			a50: f2[du].a4w,
			joined: f2[du].a51,
			wj: f2[du].a3e,
			a52: f2[du].a52,
			gP: gP,
			a53: f2[du].a53,
			rl: f2[du].rl
		});
		for (du = ev - 1; 0 <= du; du--) a4T.shift();
		if (-1 !== a4W)
			for (dW = a4W, a4W = -1, du = a4T.length - 1; 0 <= du; du--)
				if (a4T[du].a4x === dW) {
					a4W = dW;
					break
				}(a4T.length > a4f || a4T.length < a4f) && (a4f = a4T.length, this.resize()), this.a54(), b7.d4 = !0
	}, this.a54 = function() {
		for (var du = a4T.length - 1; 0 <= du; du--) null === a4T[du].gP && setTimeout(a55, 0)
	}, this.g5 = function(jk, jl) {
		return 4 * ((jk - a4d) * (jk - a4d) + (jl - a4e) * (jl - a4e)) <= a4c * a4c ? (this.a3q(), v.s6(jk, jl, !1), !0) : function(jk, jl) {
			var hk, hu, jp, jq;
			if (0 !== a4T.length) {
				var du = 0;
				for (jq = a4P, hu = 0; hu < a4N[1]; hu++) {
					for (jp = a4O, hk = 0; hk < a4N[0]; hk++) {
						if (jp < jk && jk < jp + a4L && jq < jl && jl < jq + a4L) return !!aP.a58.a59(a4T[du].a4x) && (a4W = a4T[du].a4x !== a4W ? a4T[du].a4x : -1, b7.d4 = !0);
						if (++du >= a4T.length) return !1;
						jp += a4L + g8
					}
					jq += a4L + g8
				}
			}
			return !1
		}(jk, jl)
	}, this.gC = function() {
		var hk, hu, jk, gS, zoom, du = 0,
			jl = a4P;
		if (gD.imageSmoothingEnabled = !0, gD.lineWidth = 3, gS = Math.floor(.5 * a4c), gD.fillStyle = ae.kq, gD.beginPath(), gD.arc(a4d, a4e, gS, 0, 2 * Math.PI), gD.fill(), gD.strokeStyle = ae.gG, gD.beginPath(), gD.arc(a4d, a4e, gS, 0, 2 *
				Math.PI), gD.stroke(), gS = a3.get(0).height, zoom = .6 * a4c / gS, gD.setTransform(zoom, 0, 0, zoom, Math.floor(a4d - .56 * zoom * a3.get(0).width), Math.floor(a4e - .5 * zoom * gS)), gD.drawImage(a3.get(0), 0, 0), gD
			.setTransform(1, 0, 0, 1, 0, 0),
			function() {
				gD.fillStyle = ae.kq, gD.fillRect(dh - a4X - g8, g8, a4X, a4Y), 0 <= a4W ? (gD.fillStyle = ae.l9, gD.fillRect(dh - a4X - g8, g8, a4X, Math.floor(.25 * a4Y))) : (gD.fillStyle = ae.lV, gD.fillRect(dh - a4X - g8, g8 + Math.floor(
					.25 * a4Y), a4X, Math.floor(.25 * a4Y)));
				gD.strokeStyle = ae.gG, gD.strokeRect(dh - a4X - g8, g8, a4X, a4Y), gD.fillStyle = ae.gG, gD.font = a4b, gD.textBaseline = gE;
				for (var jl, tG = Math.floor(.04 * a4X), tH = Math.floor(.08 * a4Y), du = 3; 0 <= du; du--) jl = Math.floor(g8 + (du + 1) * (a4Y + 2 * tH) / 5 - tH), gD.textAlign = vu, gD.fillText(a4Z[du], dh - a4X - g8 + tG, jl), gD.textAlign =
					xH, gD.fillText(ad.k0.k1(a4a[du]), dh - g8 - tG, jl)
			}(), 0 !== a4T.length)
			for (hu = 0; hu < a4N[1]; hu++) {
				for (jk = a4O, hk = 0; hk < a4N[0]; hk++) {
					if (! function(du, jk, jl) {
							var zoom, hu, a5D, a5F, a5G;
							null === a4T[du].gP ? (gD.fillStyle = ae.kq, gD.fillRect(jk, jl, a4M, a4M)) : (zoom = a4M / 128, gD.setTransform(zoom, 0, 0, zoom, jk, jl), gD.drawImage(a4T[du].gP, 0, 0), gD.setTransform(1, 0, 0, 1, 0, 0));
							a4W === a4T[du].a4x ? (function(jk, jl) {
								var qd = Math.floor(.2 * a4M),
									qe = Math.floor(.3 * qd);
								gD.fillStyle = ae.lC, gD.fillRect(jk + a4M - qd, jl, qd, qd), gD.fillStyle = ae.jw, gD.fillRect(jk + a4M - qd, jl, 2, qd), gD.fillRect(jk + a4M - qd, jl + qd - 2, qd, 2), j.vP(jk + a4M - qd + qe, jl + qe,
									qd - 2 * qe), gD.setTransform(1, 0, 0, 1, 0, 0)
							}(jk, jl), gD.lineWidth = 3, gD.fillStyle = ae.lC) : gD.fillStyle = ae.ko;
							if (a5F = Math.floor(a4L / 4), gD.fillRect(jk, jl, a5F, a5F), a5G = Math.floor(jl + .8 * a4L), gD.fillRect(jk, a5G, a4M, Math.floor(a4L / 5)), function(du, jk, jl) {
									var zoom;
									a4T[du].u2 && (du = a3.get(4), zoom = .5 * a4L / du.width, gD.setTransform(zoom, 0, 0, zoom, Math.floor(jk + (a4L - zoom * du.width) / 2), Math.floor(jl + (a4L - zoom * du.height) / 2)), gD.globalAlpha = .6, gD
										.drawImage(du, 0, 0), gD.globalAlpha = 1, gD.setTransform(1, 0, 0, 1, 0, 0))
								}(du, jk, jl), a4T[du].a53) {
								for (hu = a5D = 0; hu < a4T[du].a53; hu++) a5D = Math.max(a5D, n.measureText(a4T[du].rl[hu], a4Q));
								a5D += .05 * a4L, hu = 5 === a4T[du].a53, a5F = hu ? jl + a5F : Math.max(jl + .8 * a4L - .11 * a4T[du].a53 * a4L, jl + a5F), a5G = hu ? a5G : Math.min(a5F + .11 * a4T[du].a53 * a4L + .05 * a4L, a5G), gD.fillRect(
									jk, a5F, a5D, a5G - a5F)
							}
							for (gD.font = a4Q, gD.textBaseline = gE, gD.textAlign = vu, gD.fillStyle = ae.lR, gD.fillText(a4T[du].joined.toString(), Math.floor(jk + .22 * a4L), Math.floor(jl + .9 * a4L)), gD.fillStyle = ae.gG, hu = 0; hu < a4T[
									du].a53; hu++) gD.fillText(a4T[du].rl[a4T[du].a53 - hu - 1], Math.floor(jk + .03 * a4L), Math.floor(jl + .77 * a4L - .11 * hu * a4L));
							gD.textAlign = xH, gD.fillStyle = ae.lF, gD.fillText(a4T[du].wj.toString(), Math.floor(jk + .81 * a4L), Math.floor(jl + .9 * a4L)), gD.strokeStyle = a4W === a4T[du].a4x ? ae.lA : ae.kw, gD.strokeRect(jk, jl, a4M, a4M),
								a5G = Math.floor(.16 * a4L), zoom = a5G / a4S, gD.setTransform(zoom, 0, 0, zoom, Math.floor(jk + .33 * a5G), Math.floor(jl + .33 * a5G)), a4R.length > a4T[du].u1 && gD.drawImage(a4R[a4T[du].u1], 0, 0);
							gD.setTransform(zoom, 0, 0, zoom, Math.floor(jk + .15 * a5G), Math.floor(jl + a4L - 1.08 * a5G)), gD.drawImage(a4R[11], 0, 0), gD.setTransform(zoom, 0, 0, zoom, Math.floor(jk + a4L - 1.05 * a5G), Math.floor(jl + a4L -
								1.15 * a5G)), gD.drawImage(a4R[12], 0, 0), gD.setTransform(1, 0, 0, 1, 0, 0)
						}(du, Math.floor(jk), Math.floor(jl)), ++du >= a4T.length) return;
					jk += a4L + g8
				}
				jl += a4L + g8
			}
	}
}

function bj() {
	this.cj = function(jk, jl) {
		x.setState(5), v.s6(jk, jl, !1), b7.d4 = !0
	}, this.gC = function() {
		v.a2y()
	}, this.g5 = function(jk, jl) {
		var du = v.se(jk, jl, 5, 2);
		5 === du ? dz() : 6 === du && (a2.cj(), v.s6(jk, jl, !1), b7.d4 = !0)
	}
}

function bk() {
	var a5J = [0, 0, 0, 0];

	function a2S(jk, jl, gI, a5b) {
		gD.fillStyle = ae.gG;
		var qd = vm(2, Math.floor((a5b ? .5 : .35) * gI)),
			wY = (qd -= qd % 2, vm(2, Math.floor(.1 * gI))),
			gI = (wY -= wY % 2, Math.floor((gI - qd) / 2)),
			jr = Math.floor(gI + (qd - wY) / 2);
		gD.fillRect(jk + gI, jl + jr, qd, wY), a5b && gD.fillRect(jk + jr, jl + gI, wY, qd)
	}

	function a3d(jk, jl, g2, i2, uX, fs, we, he, wF) {
		gD.fillStyle = uX, gD.fillRect(jk, jl, g2, i2), 0 <= he && function(jk, jl, g2, i2, he) {
			gD.fillStyle = "rgba(" + 22 * he + "," + (110 - 22 * he) + ",0,0.75)", gD.fillRect(jk, jl, (1 + he) * g2 / 6, i2)
		}(jk, jl, g2, i2, he), 0 < wF && function(jk, jl, g2, i2, wF) {
			gD.fillStyle = "rgba(255,255,255,0.3)", gD.fillRect(jk, jl, wF * g2 / ez, i2)
		}(jk, jl, g2, i2, wF), gD.strokeStyle = ae.gG, gD.strokeRect(jk, jl, g2, i2), 0 !== fs && (gD.fillStyle = ae.gG, gD.font = fx + Math.floor(fs * i2) + fy, gD.fillText(we, Math.floor(jk + g2 / 2), Math.floor(jl + .52 * i2)))
	}
	this.iz = [{
		f4: 0,
		wF: 512
	}], this.cj = function() {
		aM.sX = !1, x.setState(2), this.resize(), b7.d4 = !0
	}, this.a3k = function() {}, this.resize = function() {
		a5J[2] = Math.floor((dg ? .49 : .4) * fu), a5J[1] = Math.floor((di - a5J[2] / 6 - this.iz.length * (g8 + a5J[2] / 10)) / 2), a5J[0] = Math.floor((dh - a5J[2]) / 2), aM.sX && aM.resize()
	}, this.a5K = function(u1) {
		var du;
		if (6 < u1) this.iz = [{
			f4: 0,
			wF: 512
		}];
		else {
			for (this.iz = [], du = 0; du < u1 + 2; du++) this.iz.push({
				f4: 0,
				wF: 0
			});
			this.a5L()
		}
	}, this.a5M = function(a5N, a5O) {
		for (var ev = a5N.length, du = 0; du < ev; du++) this.iz[du].f4 = a5N[du], this.iz[du].wF = a5O[du]
	}, this.a5P = function(tE) {
		var du, ev;
		if (1 === tE.qh.length)
			for (ev = this.iz.length, tE.a5N = new Array(ev), tE.a5O = new Array(ev), du = 0; du < ev; du++) tE.a5N[du] = this.iz[du].f4, tE.a5O[du] = this.iz[du].wF
	}, this.a3r = function() {
		b7.d4 = !0, aM.sX ? aM.sX = !1 : (this.a3k(), a2.cj())
	}, this.u5 = function() {
		var du, wF;
		if (aX.it) return aX.iu.a5Q;
		for (wF = 0, du = this.iz.length - 1; 0 <= du; du--) wF += this.iz[du].wF;
		return wF
	}, this.s6 = function(jk, jl) {
		return !(!aM.sX || !aM.s6(jk, jl)) || -1 !== this.se(jk, jl)
	}, this.a5R = function() {
		aP.j7.sO = 0, aP.j7.zm(0, 3) && aP.lj.a5S(0)
	}, this.a5T = function() {
		var hk;
		this.a5R(), x.a3j(), aX.it ? aX.a5U() : (hk = (hk = this.iz.length - 2) < 0 ? 7 : hk, ty(Math.floor(16384 * Math.random()), 0, [{
			name: a2.a5V(),
			a5W: gA.vR[2].rM.a39(),
			a5X: 0
		}], hk, !1, !1))
	}, this.g5 = function(jk, jl) {
		if (bA.sX || gA.vR[1].rM.sX || gA.vR[2].rM.sX) return !1;
		if (aM.sX && !aX.it) return aM.g5(jk, jl);
		var du, hk, max, qd, jl = this.se(jk, jl);
		if (-1 === jl) return !1;
		if (0 === jl) this.a3r();
		else if (1 === jl) aX.it ? (aX.ox(), b7.d4 = !0) : aM.show();
		else if (100 === jl) aW.a5Y();
		else if (2 === jl) this.a3k(), this.a5T();
		else {
			if (aX.it) return !1;
			if (27 === jl) this.iz.length < 8 && (this.iz.push({
				f4: 0,
				wF: ez
			}), this.a5L(), this.resize(), b7.d4 = !0);
			else if (du = Math.floor((jl - 3) / 3), jl % 3 == 0) 1 < this.iz.length && (this.iz.splice(du, 1), this.resize(), b7.d4 = !0);
			else if (qd = (a5J[2] - a5J[2] / 10 - 2 * g8) / 2, jl % 3 == 1) 0 === du && 1 === this.iz[du].wF || (jk < a5J[0] + a5J[2] - 1.5 * qd - g8 ? this.iz[du].f4-- : this.iz[du].f4++, this.iz[du].f4 < 0 ? this.iz[du].f4 = 5 : 5 < this.iz[du]
				.f4 && (this.iz[du].f4 = 0), b7.d4 = !0);
			else {
				for (b7.d4 = !0, jl = (jk - (a5J[0] + a5J[2] - qd)) / qd - .5, jl *= jl < 0 ? -jl : jl, jl = 0 === (jl = Math.floor(jl * ez)) ? 1 : jl, max = ez, hk = this.iz.length - 1; 0 <= hk; hk--) du !== hk && (max -= this.iz[hk].wF);
				if (jl < 0) {
					if (1 === this.iz[du].wF) return this.iz[du].wF = max, !0
				} else if (this.iz[du].wF === max) return this.iz[du].wF = 1, !0;
				this.iz[du].wF += jl, this.iz[du].wF < 1 ? this.iz[du].wF = 1 : this.iz[du].wF > max && (this.iz[du].wF = max)
			}
		}
		return !0
	}, this.a5L = function() {
		for (var wF = Math.floor(ez / this.iz.length), a5Z = ez % this.iz.length, du = this.iz.length - 1; 0 <= du; du--) this.iz[du].wF = wF;
		this.iz[0].wF += a5Z
	}, this.se = function(jk, jl) {
		var qd = (a5J[2] - 3 * g8) / 4,
			wY = a5J[2] / 6;
		if (jk < a5J[0] || jl < a5J[1] || a5J[0] + a5J[2] <= jk) return -1;
		if (jl < a5J[1] + wY) return jk < a5J[0] + qd ? 0 : jk < a5J[0] + qd + g8 ? -1 : jk < a5J[0] + 2 * qd + g8 ? 100 : jk < a5J[0] + 2 * (qd + g8) ? -1 : jk < a5J[0] + 3 * qd + 2 * g8 ? 1 : jk < a5J[0] + 3 * (qd + g8) ? -1 : 2;
		for (var jq, wZ = a5J[2] / 10, qd = (a5J[2] - wZ - 2 * g8) / 2, du = 0; du < this.iz.length; du++) {
			if (jl < (jq = a5J[1] + wY + g8 + du * (wZ + g8))) return -1;
			if (!(jq + wZ < jl)) return jk < a5J[0] + wZ ? 3 + 3 * du : jk < a5J[0] + wZ + g8 ? -1 : jk < a5J[0] + a5J[2] - qd - g8 ? 4 + 3 * du : jk < a5J[0] + a5J[2] - qd ? -1 : 5 + 3 * du
		}
		return !(this.iz.length < 8) || jl < (jq = a5J[1] + wY + g8 + this.iz.length * (wZ + g8)) || jq + wZ < jl || a5J[0] + wZ < jk ? -1 : 27
	}, this.gC = function() {
		gD.lineWidth = tI, gD.textAlign = gF, gD.textBaseline = gE;
		var qd = (a5J[2] - 3 * g8) / 4,
			wY = a5J[2] / 6;
		if (a3d(a5J[0], a5J[1], qd, wY, "rgba(128,0,0,0.75)", .34, "Back", -1, -1), a3d(a5J[0] + qd + g8, a5J[1], qd, wY, "rgba(128,0,128,0.75)", .31, "Custom", -1, -1), a3d(a5J[0] + 2 * (qd + g8), a5J[1], qd, wY, "rgba(" + (aX.it ? 128 : 0) +
				",128,128,0.75)", .34, aX.it ? "Reset" : "Maps", -1, -1), a3d(a5J[0] + a5J[2] - qd, a5J[1], qd, wY, "rgba(0,128,0,0.75)", .34, "Start", -1, -1), !aX.it) {
			for (var jq, wZ = a5J[2] / 10, qd = (a5J[2] - wZ - 2 * g8) / 2, du = 0; du < this.iz.length; du++) jq = a5J[1] + wY + g8 + du * (wZ + g8), a3d(a5J[0], jq, wZ, wZ, 1 < this.iz.length ? "rgba(128,0,0,0.75)" : "rgba(90,90,90,0.75)", 0,
				null, -1), 1 < this.iz.length && a2S(a5J[0], jq, wZ, !1), a3d(a5J[0] + wZ + g8, jq, qd, wZ, ae.ks, .4, this.a5a(du), this.iz[du].f4, -1), a3d(a5J[0] + a5J[2] - qd, jq, qd, wZ, ae.ks, .4, this.w6(du), -1, this.iz[du].wF);
			this.iz.length < 8 && (jq = a5J[1] + wY + g8 + this.iz.length * (wZ + g8), a3d(a5J[0], jq, wZ, wZ, "rgba(0,128,20,0.75)", 0, null, -1, -1), a2S(a5J[0], jq, wZ, !0)), aM.sX && aM.gC()
		}
	}, this.a5a = function(du) {
		return 0 === du && 1 === this.iz[du].wF ? "You" : b.io[this.iz[du].f4]
	}, this.w6 = function(du) {
		return 1 === this.iz[du].wF ? "1 Player" : this.iz[du].wF + " Players"
	}
}

function xO() {
	this.ev = 0, this.g2 = 0, this.vR = null, this.cj = function() {
		this.vR = [], this.vR.push({
			jk: 0,
			jl: 0,
			uS: dg,
			rM: null
		}), this.vR.push({
			jk: 0,
			jl: 0,
			uS: !1,
			rM: new a3x
		}), this.vR.push({
			jk: 0,
			jl: 0,
			uS: !1,
			rM: new a31
		}), this.vR[2].rM.a36(), this.ev = this.vR.length, this.g2 = 0
	}, this.zu = function() {
		this.g2 = Math.floor((dg ? .063 : .04) * fu), this.g2 += 4 - this.g2 % 4, this.vR[0].jk = g8, this.vR[0].jl = g9 - this.g2 - g8;
		for (var du = 1; du < this.ev; du++) this.vR[du].jk = this.vR[du - 1].jk + Math.floor(dg ? 1.5 * g8 : 3.7 * g8) + this.g2, this.vR[du].jl = this.vR[0].jl
	}, this.se = function(g6, g7) {
		if (a3.g0())
			for (var du = this.ev - 1; 0 <= du; du--)
				if (g6 >= this.vR[du].jk && g7 >= this.vR[du].jl && g6 < this.vR[du].jk + this.g2 && g7 < this.vR[du].jl + this.g2) return du;
		return -1
	}, this.a3o = function() {
		for (var du = 2; 1 <= du; du--)
			if (this.vR[du].rM.sX) return !0;
		return !1
	}, this.resize = function() {
		for (var du = 2; 1 <= du; du--) this.vR[du].rM.resize()
	}, this.sh = function() {
		return this.vR[1].rM.sX ? (this.vR[1].rM.g5(-5e3, -5e3, 0), !0) : !!this.vR[2].rM.sX && (this.vR[2].rM.g5(-5e3, -5e3), !0)
	}, this.g5 = function(g6, g7, a2b) {
		if (a2b) {
			if (this.vR[1].rM.sX) return this.vR[1].rM.g5(g6, g7, 0), !0;
			if (this.vR[2].rM.sX) return this.vR[2].rM.g5(g6, g7), !0
		}
		g6 = this.se(g6, g7);
		if (a2b) {
			if (0 === g6) return this.vR[g6].uS = !this.vR[g6].uS, dg = this.vR[g6].uS, aK.a5e(0), dr(this.vR[0].uS, !1), !0;
			if (1 <= g6 && g6 < 3) return this.vR[g6].rM.cj(), z.dS(!1), b7.d4 = !0
		}
		return !1
	}, this.s6 = function(g6, g7) {
		return this.vR[1].rM.sX ? (this.vR[1].rM.s6(g6, g7), !0) : !!this.vR[2].rM.sX && (this.vR[2].rM.s6(g6), !0)
	}, this.a3B = function() {
		for (var du = 2; 1 <= du; du--)
			if (this.vR[du].rM.sX) return this.vR[du].rM.a3B(), !0;
		return !1
	}, this.gC = function() {
		if (a3.g0()) {
			gD.imageSmoothingEnabled = !0;
			for (var du = this.ev - 1; 0 <= du; du--) gD.fillStyle = this.vR[du].uS ? ae.lB : ae.ks, gD.fillRect(this.vR[du].jk, this.vR[du].jl, this.g2, this.g2), 0 === du ? this.a5f(du, a3.get(15)) : 1 === du ? this.a5g() : 2 === du && this
				.a5h(), gD.setTransform(1, 0, 0, 1, 0, 0), gD.lineWidth = tI, gD.strokeStyle = ae.gG, gD.strokeRect(this.vR[du].jk, this.vR[du].jl, this.g2, this.g2);
			gD.imageSmoothingEnabled = !1
		}
	}, this.a5f = function(du, uU) {
		var gap = .08 * this.g2,
			zoom = (this.g2 - 2 * gap) / uU.width;
		gD.setTransform(zoom, 0, 0, zoom, this.vR[du].jk + gap, this.vR[du].jl + (this.g2 - zoom * uU.height) / 2), gD.drawImage(uU, 0, 0)
	}, this.a5g = function() {
		var gap = .06 * this.g2,
			zoom = (this.g2 - 2 * gap) / b3.g2;
		gD.setTransform(zoom, 0, 0, zoom, this.vR[1].jk + gap, this.vR[1].jl + gap), gD.drawImage(b3.uU[4], 0, 0)
	}, this.a5h = function() {
		gD.setTransform(1, 0, 0, 1, this.vR[2].jk, this.vR[2].jl);
		for (var f4 = this.g2 / 4, jk = 3; 0 <= jk; jk--)
			for (var jl = 3; 0 <= jl; jl--) {
				var gS = Math.floor(367 * (jk + 1) * (jl + 1) % 256),
					tE = Math.floor(687 * (jk + 1) * (jl + 1) % 256),
					hu = Math.floor(651 * (jk + 1) * (jl + 1) % 256);
				gD.fillStyle = "rgb(" + gS + "," + tE + "," + hu + ")", gD.fillRect(jk * f4, jl * f4, f4, f4)
			}
	}, this.a3u = function() {
		for (var du = 2; 1 <= du; du--)
			if (this.vR[du].rM.sX) return void this.vR[du].rM.gC()
	}
}

function bl() {
	var username, a5i;

	function a5q() {
		var v7;
		return 0 === username.indexOf("vote ") && 2 === (v7 = username.split(" ")).length ? (a2.a5j = v7[1], a5t(), aP.j7.zm(0, 7) && aP.lj.a5u(0), y.a3Y(3252), 1) : void 0
	}

	function a5t() {
		username = dY(), z.get().value = username, z.sm(!0)
	}

	function a5p() {
		var max, a5v;
		if (0 === username.indexOf("account ")) return 2 !== (a5v = username.split(" ")).length || (max = Math.floor(Math.pow(2, 48)), (a5v = parseInt(h.de(a5v[1]))) <= 0) || max <= a5v ? (a5t(), y.a3Y(3266)) : df(a5v) ? (a5t(), y.a3Y(3231)) : (
		a5t(), 5 <= dX ? y.a3Y(3232) : (y.a3Y(3265), b6.sX = !0, b6.fw = -1)), 1
	}

	function a5s() {
		return void 0 !== username && h.r0(username)
	}

	function a5n() {
		if (a5s()) return z.sm(!0), 1;
		z.sm(!1)
	}
	this.a5j = "", this.a5k = -7e3, this.cj = function(a5l) {
		dX < 5 || (a5i && b7.dV > a5i + 144e5 ? dU.setState(14) : a5i = b7.dV), x.setState(0), v.zu(), z.dS(!0), l.cj(), gA.zu(), a5l && ax.dH.show() ? setTimeout(function() {
			0 === x.sg() && dy(12)
		}, 15e3) : dy(12), void 0 === username && (username = dY(), z.get().value = username, a5n())
	}, this.a3k = function() {
		dy(13), z.dS(!1)
	}, this.a5o = function(fw) {
		return 0 === fw ? v.g2 : 1 === fw ? Math.floor(.3 * v.i2) : 2 === fw ? z.get().style.font : username
	}, this.a47 = function() {
		var dc;
		username = z.get().value.trim(), a5n(), "password" !== username && "account" !== username || (dc = h.dp(db().toString()), username = "account " + dc, z.get().value = username)
	}, this.g5 = function(jk, jl) {
		b7.sq(), 1 === v.se(jk, jl, 1, 1) ? a5p() || a5q() || (dy(10), a5n() ? (this.a3k(), dl(username), a1.cj()) : y.a3Y(4214)) : 0 === v.se(jk, jl, 0, 1) && this.a3m()
	}, this.a3m = function() {
		a5p() || a5q() || (dy(10), a5s() && 5 <= username.length && 40 === username.charCodeAt(0) && 40 === username.charCodeAt(1) && 41 === username.charCodeAt(3) && 41 === username.charCodeAt(4) ? w.a3P(Math.abs(username.charCodeAt(2) + 5)) : w
			.a3P(aR.a58), a5n() ? a3.g0() ? (this.a3k(), dl(username), aX.ox(), w.cj()) : y.a3Y(3228) : y.a3Y(4214))
	}, this.a5w = function() {
		return !gA.a3o() && !bA.sX && !az.sX
	}, this.gC = function() {
		var iW, kY;
		this.a5w() && (gD.imageSmoothingEnabled = !0, iW = a3.uV("territorial.io"), kY = 1.1 * v.g2 / iW.width, gD.setTransform(kY, 0, 0, kY, Math.floor((js - kY * iW.width) / 2), v.jl - kY * iW.height - .72 * v.i2), gD.drawImage(iW, 0, 0), gD
			.setTransform(1, 0, 0, 1, 0, 0), v.a2v())
	}, this.a5V = function() {
		return username
	}
}

function bm() {
	var a5y, gP, ft, a5z;

	function a62(fw, name, a63, dd) {
		ft[fw] = name, gP[fw] = new Image, gP[fw].onload = function() {
			0 < a63 && ! function(fw, a63) {
				var jk, jl, du, iW = document.createElement("canvas"),
					g2 = gP[fw].width,
					i2 = gP[fw].height,
					gQ = (iW.width = g2, iW.height = i2, iW.getContext("2d", {
						alpha: !0
					})),
					gM = (gQ.drawImage(gP[fw], 0, 0), gQ.getImageData(0, 0, g2, i2)),
					pT = gM.data;
				if (a63 < 3) {
					var a66 = 2 === a63 ? 160 : 600;
					for (jk = g2 - 1; 0 <= jk; jk--)
						for (jl = i2 - 1; 0 <= jl; jl--) pT[du = 4 * (jk + jl * g2)] + pT[du + 1] + pT[du + 2] < a66 && (pT[du + 3] = Math.floor(255 * (pT[du] + pT[du + 1] + pT[du + 2]) / a66))
				} else if (3 === a63)
					for (jk = g2 - 1; 0 <= jk; jk--)
						for (jl = i2 - 1; 0 <= jl; jl--) 0 === pT[du = 4 * (jk + jl * g2)] && 200 < pT[du + 1] && 0 === pT[du + 2] && (pT[du + 3] = 0);
				else if (4 === a63) ! function(pT, g2, i2) {
					var jk, jl, du;
					for (jk = g2 - 1; 0 <= jk; jk--)
						for (jl = i2 - 1; 0 <= jl; jl--) pT[1 + (du = 4 * (jk + jl * g2))] > pT[du] + 20 && pT[1 + du] > pT[2 + du] + 20 && pT[du] + pT[2] < 40 && (pT[3 + du] = 255 - pT[1 + du], pT[du] = pT[1 + du] = pT[2 + du] = pT[du])
				}(pT, g2, i2);
				else if (5 === a63) ! function(pT, g2, i2, id) {
					var jk, jl, du;
					for (jk = g2 - 1; 0 <= jk; jk--)
						for (jl = i2 - 1; 0 <= jl; jl--) 200 < pT[1 + (du = 4 * (jk + jl * g2))] && pT[1 + du] - 20 > pT[du] && pT[1 + du] - 20 > pT[2 + du] ? pT[du] + pT[2 + du] < 40 ? pT[3 + du] = 0 : (pT[3 + du] = pT[du], pT[du] = 255,
							pT[1 + du] = 255, pT[2 + du] = 255) : pT[du] < 50 && pT[1 + du] < 50 && pT[2 + du] < 50 && (pT[du] + pT[1 + du] + pT[2 + du] < 50 ? (pT[1 + du] = 0 === id ? pT[1 + du] : 160, pT[3 + du] = 180) : (pT[1 +
							du] = 0 === id ? pT[1 + du] : 160, pT[3 + du] = 180 + Math.floor(75 * (pT[du] + pT[1 + du] + pT[2 + du] - 50) / 100)))
				}(pT, g2, i2, 0);
				else if (6 === a63)
					for (jk = g2 - 1; 0 <= jk; jk--)
						for (jl = i2 - 1; 0 <= jl; jl--) pT[(du = 4 * (jk + jl * g2)) + 3] = Math.floor(255 * (pT[du] + pT[du + 1] + pT[du + 2]) / 765), pT[du] = pT[du + 1] = pT[du + 2] = 255;
				else if (7 === a63)
					for (jk = g2 - 1; 0 <= jk; jk--)
						for (jl = i2 - 1; 0 <= jl; jl--) pT[(du = 4 * (jk + jl * g2)) + 1] > pT[du + 2] + 10 && (pT[du + 3] = pT[du], pT[du + 1] = pT[du + 2]);
				gQ.putImageData(gM, 0, 0), gP[fw] = iW
			}(fw, a63), a65()
		}, gP[fw].onerror = function(dE) {
			console.error("Error loading image at index", fw, "Error:", dE), a65()
		}, gP[fw].src = "data:image/png;base64," + dd
	}

	function a65() {
		a3.g0() || (a5y--, a3.g0() && (b0.fz(), i.uO(), b3.cj(), ay.a2d([gP[8], gP[16], gP[7], gP[9], gP[10]], [!dT, 0 === dX, !0, !0, !0]), b7.d4 = !0, gP[7] = a5z, gP[8] = a5z, gP[9] = a5z, gP[10] = a5z))
	}
	this.cj = function() {
		if (void 0 === gP) {
			a5y = 22, gP = new Array(a5y), ft = new Array(a5y), (a5z = document.createElement("canvas")).width = 1, a5z.height = 1;
			for (var du = a5y - 1; 0 <= du; du--) gP[du] = a5z;
			a62(0, "exit", 6,
				"iVBORw0KGgoAAAANSUhEUgAAAFYAAABGBAMAAACkrn5fAAAAHlBMVEUAAAAiJCI4OjdcXltoameIioejpqPExsPY29j///9xarZIAAAAyUlEQVRIx+3WQQqCQBTG8TdOB5DUI+S6nRcoPIFhu1bBHGGO4Any3TYxAkWTv1DSYr71D4b5mOE9kWmszkeC/ZptT6Ocl+xj5qgtbVR1iZn9VE2wU2uO2Jryhm2h2OaKbdZgu/NKrXVK7f6q1JpaqTWFYpvrUtqhPTTYpst0aBOv2Drltlxh392iu0U1t5I4biX13PZvF7+zvOFWihXWlNy+aqZ/M3LcivXcds1xK9kKK3GYAVtYe+8CZ/c/7Br9blSNcgn75O/tE26TasUvH0ImAAAAAElFTkSuQmCC"
				), a62(1, "victory", 6,
				"iVBORw0KGgoAAAANSUhEUgAAAUIAAABBBAMAAABWYLC1AAAAElBMVEUAAAA6PDlbXVqEhoO4urf///8hX3N2AAAEcklEQVRo3s2ZyZKcMAyGWdx3alLcSaW4k8lwZ9LjuwH3+79KlkljLb/czFJp+tYusD8k/ZItF/5y/a0F/dXb+KW472/cQCIbd8b4//+dDFu12/ByZ8Jkq0uHbRvuTFglwomOezx8j5/HxkrgTXEYqSxQyvcWCpVEhOG53p3QQTGfDiMUlppJxPXHEQrVxIT0092fEOaVw9Q8LpV5GysPJGUsWweojyCVCAgPIBQYc8nzwxEIvcYZjyQUmPv8kYQC68dhNoeWmOsD1Tyc/G5L+elvHLzs0tG3l7/PPn6KVJTfGxqpG0+9vXFW2w+ZGaoU0x3YrfwZP3dkrONijUK5ndBOLBAh2Wz8CwybMAESRPX4kDwZuGODMNkkjLoiwtLTyac8IXs2NpbJO2E0YVInhSH/c8LxolY1CVs+tFiEi2TqGW8lZqikTRlhLSYPGcIK2Ao/3gi/ilwiErQz4nIAJnx9xyJsga3w4xN3s6EbTVhowhJNbhCWyFaYcOVUvShpLZ+glfmREurZZ5MQ2wqOx/Q9k3YyeWNgJp0B4YgmNwh7aCv8eJp61U4mwT+xsJwA4Zarv37xm+ENQr89+/BCAwc93qXhRjmZpJeZ/Rs0YU1scU2MU1FkM/tKbT8kwt8+LB+8TtrT9dMCqHsrsyhYmdnfiYkEoaPBXRG/sPd8eunqZqfPmS1MHRGsfGLF5nX2Z4OwZWm6T15ihK3+/D7XBKFFcAErjzKVx3NTGIT8WZe+jRGSl0pdC7RUBqJW5D3P7O/iI9itDzx2Gla5oiAs6YwjKEBSKhOQMiDMnicGNmkUwc6V8sPTmHeyWAGpBELbgJWzx5c3Emqc0nIyya1Lqvax+BhhKfoE4/bdgHDR+6YOn6Zien0FK5fZpiInrITeRpWaL6qr5SwnUzGftJXTytUbCGszIzhjR8HcHKzTVNfqU9SHCGeRdAdjB1vgE4mWyuR1Q0QRLm8gDHsI9SErmg334HVD5EOE8w4vP2tnBrPxsICPeJ9SjDgESnkGpurMxkMEnUOVbT5Xy2cAEnN3U7rd8Kn5EGRscJOz5LqIunNoElbx+0eq3hev17IJRyNDwbpMGjwv3V5CsHOotRFtwhYWSmvn0BB9nfftbUq0txlV3rAJHTry6JVR+yG+f3/oVNDbhKiVYO+xWftkNQhPbLEW7bEr5WabsLClDM4p7Og/7zmnlPic4mVMZQj9xdzgkpUrmmTfctbr4VlvC/9hB2FvCoWtnM7A31SukJ1Qcl5+Audl2pMKOwidKRS2cm81WwHhmO85BOL8dQdhLZsxmNDhRSHhjb5NoF+xg7AwhcJX9nZ5lIRFvvcV6JZl2kHojZonVm7t4tMbG0ujfxio6+YdhD2MLbVyZZd9RVjhYo+6InEH4ck8q/KVezMt9daeA/exWc/h6oocoTP2Q/m7gKXIEZa5u4DAlp1uE5aWUHL3KbHIEvL7FFFsAouE+TYhlcqQIyR3UrG5QZi7kwoFCMT6k648n17v6n7uv9eL5/et9Asv0oTxJYkUxgAAAABJRU5ErkJggg=="
				), a62(2, "defeat", 6,
				"iVBORw0KGgoAAAANSUhEUgAAARMAAABABAMAAADL6o5mAAAAHlBMVEUAAAAlJyU7PTtUVlNsbmuJi4ijpaLCxMHX2db///+Cup+UAAACo0lEQVRo3s3ZsW7bMBAAUNqyZWUzsnT1VECbhy7ZvHTwlqmAN6PoUG0CggzairpIyi1Nk1b629awTPGOpHm0DyE1WYJEPlHk3UkW6w5t7eMXEWczKHvN52QoXfcjHUoUi4PSbdOhtItkKBEekZPSLdOh7NKhtOlQ3nwRnaC8pENp06F0t+lQvsWi/O/4+uPXiJNljcbgvUb5G5ci3mmWeVyKqGLNW5MyGyh1ZMo41hIyKaJRh573u9JY5HDo1LMsjBOfBLq9/oC0Rg4L5UYdeuWi5HqDAZShyT9clAKGBzJlBgMLB0UN9CKMksOEyEFpYOFBpkxBpywU1AmZkrFThpv7HUYZwcjPQEGzj04RsOpnoJRwnGNScFo7h7JS16HqcmbJDIUzW0hrWstQVfQWlMkhXg655BzKkoVyOPn7EMDjUa4Os0SidsIoCxbK5tBWhV7FCZSRJ8RtT1M6mE2PYb/tE1EdQsnoFNCpizLudwqYDCiUqScdhlLyfunkeslCo+TMlKJvPkNvNASKr14JpayPV0mtZKFRfFVcKKU5Cir4rYRAWXtq21CKetY31uVxiiI9FX8gZap+F7BrP2WC3oMupRSqZprBeeunlCiNXkopVesTrWShUDJpLS7sgd9GwYG/cn1B8lFGVWctuc7PQcao1hTK9YdP0hjgCykTo1579lLM7RcHxSg9VZYMoWw5KFfOL58BlHbOQdmYDa+CKeC1/2yKpbqvgyk1B2VsafgplNI6b6smVnH7wJq7h5tO2bFQCvdNkintkoVibX8RRtkJFkoDUmCpRwkqpZ3zUMDsgDObStkKFspUj9tqEr+EUO4EDwUt8Ez/ykKj3AkmSonGWGopn0J5WAkuSoX+KG60ksVL+Xm/8kXuAAoO1RvtOkT5B9F51EylDpRdAAAAAElFTkSuQmCC"
				), a62(3, "orders", 6,
				"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"
				), a62(4, "crown", 4,
				"iVBORw0KGgoAAAANSUhEUgAAANIAAADSCAIAAACw+wkVAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0xMi0yM1QxNDowNDo0NyswMzozMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1ZmFkNDE3NC03OWNiLTUwNDgtYWIyMi04NThmMGExODUzZTEiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4ZDQ1NTIyYS02MDRlLWYxNDUtYWM3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"
				), a62(5, "arena", 6,
				"iVBORw0KGgoAAAANSUhEUgAAAQAAAABABAMAAAAHc7SNAAAAHlBMVEUAAAAjJSM7PTpUVlNqbWqHiYalp6S/wr7W2NX////RSpP4AAAD9klEQVRo3sWZvW+bQBiHiSGAt6hdki1Dh7Jl9eapkjdPrbxV6lCxeaw3okqpbqNuzMd/2yRw3PvJkQVYYhHgnvfer9/dBQG4WnftgwWuawBwXAIgBQB/lwDIAEC1BEAOAJolAAwAaB/mHz+C4y8RhQkCKOcHuEMAl/kBDgigWTgG2/Z+7vFDPH77fW6AmAAUSxbi1+t5boAdAajnBjgRgHbm8a/o+HNLgiEGfy0UhUMMfrU/zvMCbOy4HxeSBKehBJtlirGze9AlW1GqtM2fH0rp6HroCTWzNcnpTMmxa+f5HZcEORnnyQ9gewkFyJUcS1zsp1wSUID2tx/gKAMYJccy14MSLgkYQOeeUYCLCBBqOZY7LRhxScABzl6A3gcEINFyDIY+lwQcoPEDFBLAWhE8IQQ7MUnAAd58MA5wkQAOiuxOYBM+sGIsABy9AN0QBMAosnsNx7xjkkAAKP0ABQdYabL7IBpWjwD88wNUHCDWZLeBPditkm8wwMuvD1+Mez8VU/qE3IwBUkV2r5AKWTFJkIPymUwHKBhAV2VzJrtjPOmGRiEECKcDVAzg7X9NxmR3ih2TQ0dTgGg6wKsPMED3aspe2+F9iYyWKwjwmQWhDlAQgC66zjGyLmCZ4yakYQCffo6lYUUAKgLQmx4y2U2WQ3FLJMHUQkQBXt5HANb5hkiCa1L9Q1quppZiBlBgABv+OZEEvKCQvSoOUAeTAGoMYHq/bkjsZCpA9b52zADaLQSI7EMpkQS5CtC8T5AAgEt35xECJHbcmEgCowL0TXOqJAMAZfenhgBrO/MhLsaRPn4fhRSgvvED9H7dAYDDkGkGye5kBKCUAJ7uAz9An1qGlfiH4ZmjuDvVCntVGKDZBxMASDYMTa5xpbcUd6ekXQIyA80WAYiluAxu6Wdi2brRGOxLUw+w+obfHAeIvGWjkXenhL2qoRfsUHKMA0Af1NIejC288ShAgQBs0X6cAnBLAE6ydSOFeGiarhsaGBoegIgAKNYJM8Oi0AHshEqoAQCTa3Igg2T3aRSgxQAJZPcBpAggVay7Ek9JDBKmDmAF88AHEKGRMsW6WNyazJGfcjYZytqwRgDuK7XS8vboK6V4fnTGAHfiqwoAWuIYJcc24motRY7J+YQVUwBCcF9seWc0M3vx+KQhqtg4Li/A8PF6+OIRLYUqNDP38gHSFgMc3LLND5C6+2tspbHWXStnJEgSQIDUVTE/QOjuH8Tl5hbMdaWcn5TiyujVfX4A+2YNTEYbo0cgBp6VU8wLBrCFq54EkNr7K2Jlaq3LlR2DDLoGAWyGjjgBILT3Y7zadItsbc8khU0TASTD8xMAetfXrGr2sdf8B96/CJXN/8t1AAAAAElFTkSuQmCC"
				), a62(6, "territorial.io", 6,
				"iVBORw0KGgoAAAANSUhEUgAAAjIAAABBCAIAAABEh9lIAAAACXBIWXMAAFxGAABcRgEUlENBAAAJJWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMi0xMi0yM1QxMzoyNTo1OSswMzozMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMi0xMi0yM1QxMzoyNjowNSswMzozMCIgeG1wOk1vZGlmeURhdGU9IjIwMjItMTItMjNUMTM6MjY6MDUrMDM6MzAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmY4ZGZmYjhkLWEyNDEtMTg0Mi1hNGYxLTk2ODMyZGFjYThjYSIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmE4YTU4YWFiLWE4ODYtNWI0Ni04OTk1LTI3MTdiYWZmOWMzYSIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjNhNTMxM2RiLWY0ZGItN2Q0Mi1hZDc1LTEyMTJiNGE0NThjZSIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6M2E1MzEzZGItZjRkYi03ZDQyLWFkNzUtMTIxMmI0YTQ1OGNlIiBzdEV2dDp3aGVuPSIyMDIyLTEyLTIzVDEzOjI1OjU5KzAzOjMwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjU4NjhhNzU5LWRjNDctNGM0My1iYzA1LTllM2ZjOGMwZjY0YSIgc3RFdnQ6d2hlbj0iMjAyMi0xMi0yM1QxMzoyNjowNSswMzozMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjb252ZXJ0ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImZyb20gYXBwbGljYXRpb24vdm5kLmFkb2JlLnBob3Rvc2hvcCB0byBpbWFnZS9wbmciLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImRlcml2ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImNvbnZlcnRlZCBmcm9tIGFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5waG90b3Nob3AgdG8gaW1hZ2UvcG5nIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpmOGRmZmI4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"
				), a62(7, "youtube", 7,
				"iVBORw0KGgoAAAANSUhEUgAAAKEAAAAkCAMAAADW8qrvAAAANlBMVEX+AgDxYgDjhgD/eXnQpAC7vAD/oaMA/wClzwCH4QAx/zdf/1ty/3Sf/6D/3d2+/77d/93///85QMf8AAACr0lEQVRYw8WYWbaDIAxAsdVqAzzi/jf7GBIGZxxO89GiUbgGEkJEH+Q7DF3bti8rjRPhxTftLavpuuH77X8gwv10BLQrTfsEpHECG4TwEhUy0ItKW1Gh7Zp6AwF0KRP16GSLsApQCLKidt1igE3NZZFjKZWEXR2gaMguaSwPa54jbCoJ2Yjo+lWxpR8jhFpA0dH6jlzbIzhCdOIf8606wm814atPq8+whXDXY+WS+Y4QDtWETdYxHlmGFwm7akLRZwsRaLrVc4TtAsL7vUkIWbxRRBrCngu9xArSinvS/cuccKYhQpletjrXl3ZasRQNP+Pfe9+ZZZhd4EnW5KmYHNxwVFIZ4UwTCP1U0GqhC3+5QjiOn11CPxQGj9EJ0Io8QchM6fMIcZVw/PvsEfpOAxkUMQ9PEObvZh87KtGsEY6rU81bs46zg4SLoNiI1YRaYvGECl2aLcI1Rib0Q2gM42HuN7qeUFOEtV8HZMvwv2ikTzLyZ4PQj2WK5U62NCc8Jd2ImcghwiUzRkI/wWHcOD7nPCcI2ZhxC/BPXiJUaXWrOwjxDOHmLLMXxlhzD6EpCbc9ZdOXadF5172dEJUK83Il2jBXCmE3Eka5ErF5EPMbwgO7Xp5e30+IJBcyh2cJzQ3ZV0GoniM8n8HeTziN2DZH1PrCKaAghCd2PZ/enT9JlYQ9D8dHQFNPqMYskUuEp0+jE0IaVxakCJQt54SswYIQZci+MGVfwZaitihSuHJGSMF7MQstCWea4tpM+tKiHy4sw7zcgMWoNIdOOyWcaRIOnSAAs5T7dGVpRpi61dmOOCqYEs403nQqf1dyXwjnq3NZXU5yMmbsFmA0ZJdGhmeAS3RJA1ET6nyg7c14GtW+L8UVzuEo4zMVzgM1WKoSU5m44TJxw0VirhLDL6rE/6vBvdrCmmWnAAAAAElFTkSuQmCC"
				), a62(8, "googleplay", 3,
				"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"
				), a62(9, "discord", 7,
				"iVBORw0KGgoAAAANSUhEUgAAACwAAAAyBAMAAADVdiTZAAAAG1BMVEUA/wBI/0lu/26P/5Cl/6O8/73R/9Hn/+j///+iRuwXAAABJUlEQVQ4y83TvW7CMBQF4BsKdKVIpYxIRaJjVLUSI6JDGSNlCCOq1JC1f+CxFIL92D22E+di/ABciZB8seRj35joVZ3VN1FXBSqhRYgPJEIsSQXrAnmjL2uP5Usm81z83Bec5WM+J9T4vS8Yfzz1yFQ0v2ackKsrxr2G7d4ZPjK1O214z3no+Jdz1/EKTy1NI/w6jmcIID6JJirGe8cYdIdGIcQOwx3j/gEpI6X+qoRkGqrnd6OXFR/NRAcdOWFc6hDPera0Xk/Fozo1ck4bHsSVpg0jYJSlervGW9zWSdQXhhXozlbGek1uY9/s2hRWect7ucnsf5ld7DfosX+kcsv+AdwtDfvHdW877x/u0raB6Oa0qG35rKZhbokg41sKclQEmTr/f+SUPtWxuyYAAAAASUVORK5CYII="
				), a62(10, "insta", 3,
				"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"
				), a62(11, "emojis", 4,
				"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"
				), a62(12, "flags", 3,
				"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"
				), a62(13, "bestTeam", 5,
				"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"
				), a62(14, "bestPlayer", 5,
				"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"
				), a62(15, "zoom", 6,
				"iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuBAMAAACllzYEAAAAHlBMVEUAAAAhIyA3ODZTVVJrbWqEhoOkpqO8v7vX2tb///8goTJXAAABaElEQVQ4y32Tu1ODQBDGL8QAdlg5dml8dZTa2TijXQpnIh2TwoQOxwehi2PB0flKYP/b7HFv5nALBn5337d7ewshXZyuKX2PST8egUW76OE7EJFa+BhJ9bSsUWFaeTV3GKHbn8EvlB79bjSv4VO8jUr4VdiHNnK938MHPie0Yh+ZLqmGuNsJ7CNURgewI5qPoRE86GwkJyWIBIfcUfJrmMm0sclDyDnPWmLyADacl8jnRbEGKIoiJRP4EmU2LJmIDfLvAf7z/37mv6IUm08pzbV/rx5f1pPA1Fn/iX3eS3nekAslz7gcGw9bg3uqn6Rup5oH+uaTLpO4r0SmZVuUFE2lfTc+z1qr9+BVtGJqzq1RHNfQdAtnrEW75UwuXOFgvj3crpCyDu6UIpP9fPHZU5XkiYVXvsXIPcc+VwspzY2pPorE/NgCfYK+QJ5+QFA6fjQt2A4IWuIWODixe2ELcuIUNJGL+zQle92exY5pfDIaAAAAAElFTkSuQmCC"
				), a62(16, "apple", 3,
				"iVBORw0KGgoAAAANSUhEUgAAALQAAAA8BAMAAAA9AI20AAAAG1BMVEUAAAAjJCJUVlOEhoOanZkA/wC8vrvW2dX7/fq38z8cAAAEbUlEQVRYw+2YzXOiSBTAGzW6x8ZY6pGYFMMxUct4JGbLcMwld9QpliNkLeUqUvT7s+e9BoUITpIpuWxtp0IJdP943/3B3t7eXtnF2xViGZIbf1+8mVcS3YQKmk3o16AKtLhCdAsqad4be3WrQcdX7BUqalesURXaZM2q0DZr/TfQQVVo8fTXb/LgzO9SiQpon/WPg0fjk5j3cuNnH74ZQPcztOBsegz6xnP7i+i99Tk6ZOwoadwH34LnR5jDBB6j9RjR4vkF4pEF6wmho1EQOyP83uwWuisX1uPgPNpmdciho/5efwiWoiZau86T5QX+ZACL+S0MpEKDVW9/PTMAljq0R026P4/WmJFHx30v2E/9+GFj7KzI8IIZ+K6AZdyCAXbowd3ewN9kkA4McYB+Hs078BG9gNgI/12trJ1L6BGEVjRoRwbZOsbrfipaqa1nUXvQOY+eB1kUIXpv+BAZ0VM8DI5od7id4auh7DBK0VOJ/rEtt7WYqXoAmxvlLn0f94Tp7qx3K24LFRL0IrCDOxiIzgZtLbqim6INQosevJSiTZwtr2ccr6lWsaJ2IFaRocM4Re/x0WIwhEV7hD2e1GmCjtUA0fB0Y5Shw9x8bCWPtlu6BIeswD95K7YiTT6xpWQJZG7ic7ovQ9/n0MZFa4jIkeuXLU/hpYXO0H4O7V4WbWfkWvZ6NT4zbp3F6HfQOVNzpXx8RDHalcX0c7SZobM5XpwzjqlMHA0/azf/FL1XeKlLBccKF6G7v4vObL2rm6WzciznC631NXTO1pl97ZZHKtxMl/wOdWiLG+UxQVO+btwFV7AMrDk99bvvbYhvFL2A9op5jnL1Q1KB38lgDxUz/a5gvYM8CsToUsUFr85rMqWnp+hdDt08mtSKGKI413/yOmaVMl8m+aQpE9nBbGzBV17WaHtPuXYipm+0xil6n0Mr7sGkgSAVUBxMqSAkWbVmmmBtqp9k63v8t2uotgs+dgwP9jyi4/xOJHVkqJBNEN2ieLBCikSvlqxWsJcu0YKCCHn0wqb6eojXrPLxIpp8aKJMvE/mnYZknJ1ySEfyCaFJL7SbVycFHMc5uCpDm0Vjmw3HMXGEDG5mkBJSk6Qt0T6IllLihdCaHD09RfvF0id7KglaFNBk9lN0nXZfBYNEhdInmIoNbwoGiZ1EqYJBWuWrJ+20PkX0CZQWeDN1I0LsuizuFAWmlBoSNwKhZXJugwLaP7VH4jGth8EXwELB4OtiPDRlOP3ACwazjY6+J2fXJdrHjlExQmRWfUh0WwY/ysbV6xkWrZDx8cMxZRwNlfDYLYqkk0cJHbGOo9VKljgLpky2K04SJROxfIXxynVOfg+VBcal/O47S9YUe/Sy0ORTQsswM0rQ4iepsnEO96pcaYdqwI31YCINOrtNtV2pqpxl1nNUd0hPo7lcJg0m39rLpEU7F3cX2yb9jz5paRJ8WNF9BV3hRrrC7X+FhxYVHrVUeEBU5bFWhYdxb6+Nf7YXbpv0CLGqg89fkK30UIXyeWIAAAAASUVORK5CYII="
				), a62(17, "loading", 6,
				"iVBORw0KGgoAAAANSUhEUgAAAZEAAABGBAMAAAD/Q7RHAAAAGFBMVEUAAAAnKSZKTElucG2Fh4SoqqfLzcr///+y5yZlAAAEnUlEQVRo3u3aS3PaMBAAYGNsuHoy0+TKTJv6SjNNfeWSciVNJlydF7qGl/n7JTGSd1e7wgaFaWfMKfFD1qeXV5KD8cb8kuC//rWSVtJKWkkraSWtpJW0klbSSlpJK2klraSV/KuSbw9qe8HsfnCyfHVuZu95Kmb3iUdJ+KAvKf7gM119vDoUb8Bv9gLsu2PD97+n4O/tr1/+OzHXXiqTRjHyJukqkLcndKqnDw94yTYfty7JoyD5jtIYeZJ0FEr2Fp670EcnkgScYiRrXkJLI/EjyUjOhtzduSwpBrJEJ4YloSJJPHqRRDRnK3DSPHIpS8w5TjLnJJlVGIkPydjKWdVsw+pZDokueE5SMJKunULuQcIky5a/S7KQJbtiQZLUTmHlQcIkW13YYyqKkRQOycKWKNcjD5dwyebMYJA7JLscspLCknAJgLHxUEnEJbtkmAuXZC5LysqEEq4V1OkoeySm/bxenf22ujd41NolWTskCyoxxfNydXajrL55qCSDXe4LeaNHdl8wkiLofP2NxwNeUhBJiKKJiBbUwRKFBtIxbrVlha3wCzMGGYzROMxLPhIDkhjn/aOtFa93x0o6uHJ1Cb3Bce1NoZYMJabN5w7JEkv6uLSibQT+w0PcFZGhQyFYmZ18CnVY0q0hKbAks6JrL1F9j4S6Gar50jVK0csLSTR97pC85x9IprW7+CESU0B9psCTHroGS8ZgwJAkSyRRqAF7k/TJyIFkWhCjesOSC5CAJNk+GEjqvwobSVIS9sRwVO3vzoXo2TEXGhZOSQ4knUazq/qSDMXe1QgAbp3rBpFzkl4dyQpIurBnqibhilsyJo2WeU6us7U8WLIZ2JLgkyUhkFSNKoN5x5K4liSvJNEnSaZE0gG5ic1dfThFaSTRQ9vpJbBOqsE3hp20kUS/r9JPl0itKzGjwbrqPXlzia5jdXIJ7I+qCsrhFKVRjyeLD6DHJ54lrlEYVIQC789mkliSDD1LUhIEgTdjJEzXm0nw7Bq840eeJY5opSesBrHv+LUoyQTJ5BgJM113RJCpMNnGknSfJKYSGEH6l3BR/dS+4c2WwBidlaDmxUX1oR+JMNNa8MtHK0vSgUZekhIJnWl5kpDZb7fKGLM2iebuBZqp5bIk3rBTepN1TxJT8gO00jJhO3x5FZSYDYuJLKGdgaxI6P9BwxuZgyt4cI8kYxrOR4770kphJTm7VmhZSZCk+H68ShRcbjxJ4MrdNWxFY2mlMJaanSSJyAClwCN/Pmx8SaJ9zc46wUkWLglISl5NPV4irXCH7B1F0xVuvMXnWOH2IBF2HWLcLUE81mjXgWzRTODI7VvSdfafBZmBjRruBKHXp667jKvt5GiJsDuXkXBfmXbXaHeuPHGOJVzfHAXHS/gdU0W2Naam9BvtmJIdwIn0jnsKPEj4XWy6KlVFio12sXE5aElX2GY8VkJ2xx9hRSV2kByLW8WypEcilHNuI+l4Cf7a45ldLzZ5GVrfN4yC/ZKQhu6/ECTxJQnCKoK/s6cdqDfl5AscuIMjS/S/7Bc4z3SlR5DU+5VfRRWvp/sqKiy/iqr/IdZfF1HJgRmsN+0AAAAASUVORK5CYII="
				), a62(18, "target", 7,
				"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAMFBMVEXUAADUISLWQkLMTQDZZmXAdwC0lADgiIioqQCWvgCE0QAA/wDnra1i6ADw0tL////afMd+AAAC6klEQVRIx42WTWgTURCApzFNY2lLBKEX0dy8iA0UxB8CKgUv0gaKBS2B3HOJnkUDQrENQi6KEITcgydR0l0CUYReJBZCi3YpaC+9FANS6GXZ5+6+eT+z+1adS/ImX97Mzs4f2ET2916vPV9/61At6Ifeq2UIZWXDSYK+IxLIlY4Z+ga6jL8xQbsFoFQrDtF7QqoThaxSDIKsE4HqYJAyhXZNDJxq6VCvZIQgq0NDSJCGgnqFJCiroB2lHTvjS06dWxJSHl0cjBjztm5JxXUBdaXqro8E4j2UD+gg1BamFpkQ75GgVjkkn/8SU+LVUHmaQx/wmB5pEHNzyh4oa08ZkU+oroZQhR8mKMO8PNdPBpBlvoixA67PBBC6lI4yzJVOgb3Nv1+OQawm3h9gJo19jUPHHLrhQ4UEazIKkzZYHJoRvxwuLAzE95voOWzyO5dQ/zkw/QQPfe65DfhwGO2T8JBCB39zqAM8l1Ij3QBMkSC0YFsP94nIB/4fj3vegLb+175IkCX94io0w8/zXJkX0IwezjLUNciTKZrWoSJCF4hLvlCookHHChppPhaB5+7c36BpvOm/oH+Y0x13VSFTx5vGEEzQOPGInyO5KPOUR3yVvrsDIFWBBVOFoR5hlwYczTfgPUmVj1y9SJKiBdhSMM3c0ItZzMwfWFMifeeYomZHpKb89MVWOCWr++hXpNCzfkmViFO6oEvTPtROaAWM/RRtDOx3QO0pyYveCjZ6HreH1saDhiGaeKxj9GUrBzl70iNj54FiCA3BeFVNtXsfEq2Odh/xrjPYxyuG9nuU00YC6DPqrKTcvD6nAshSNclbk3coR1BGDqCmpFJ3Hg++bN2OTNgQ6uojTh9kfP7g5KwnDcWiNl67CQy/SEzzhKvKZORvGqdwxqHLw47JWCOyYfSexaEHsYUmvj9cM6xG1jJlrjqmJcsiFu875nWt91I+4/yLxMXP3lu753PzK+tO8nYY3LbvS2SDtP8A+ntynBIvYeAAAAAASUVORK5CYII="
				), a62(19, "members", 7,
				"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABSVFGanJkA/wDMz8x4/3ey/7L///+GDHoaAAACZElEQVRIx9WWwYrjMAyGlVCYa6cs5JqGQh5gaObaDYU8QJnOA5SS66RN49dfSZZt2U2WZZeFXc9h2r9fZEmRJcPbLyz4d6GzMdM1/uXcG3PV0KehFVFnlh4Baoxdl8BEEkF7EcwUoN5pJ4HenRBMNV66C4QfxxI2nTKFhsYt5CgZC9FTawDIxbg4UKKUWevAuw1Aq/D7NUq6M9RbQ2zKhkwpKVnK2AWGRrCrc04lEpDfgyg1u8mh3EQqSGLoS5QXY/a4+XSKJIIwkkNQOIlTgFYUcQq59TuQcrwI0PDk+M3Hayh2+RcC1smkl3DDj1ltlMR5old38LutHT04l/BVAVfOSL9lnXelUBKaAltxt2gTv3Ft6w6k4sajdtf6zhLVHUHltzTwkIzvOUGf9PhOJJdVdphWS0YfFnJUCrVgISmdTVWVnVQa19+YV9VWKgohl2+MRUFKjaAXDX0tQCvt0+HPIJWnJajWGV9wPDPutPFhXs9CK+PLr1aJjSF+5aUzpOQY6mwZURWNCRRO9JZq43ikMtnog44v2LlojK1EW6n4zYXz4HqSb/gsty1qaWjAt5o7NAEiL7Jdu2vX7IqHLikEIYdzUJ5CZQQdJJcJ5GSE9i5tC1BNR4oadGub76ChwrZfKn48wTRXsGfrQvHFQr0dmy245o8nMYHGoxsToMZIAoWBA2qOzEMXmVJiK4nO2jn5oXju5yGZpn4Gf/QpNH08D+pn6O3vQqOGulkIX0+1fbXd93VT+dkXQe/SO3F1fkSnUBjgT7cEdVdJodkLTbNkKLr1NH1ApstPrkbnK/39B9e1H85NJPjxrK7zAAAAAElFTkSuQmCC"
				), a62(20, "hourglass", 7,
				"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABKTEqZm5gA/wDJzMh3/3iz/7L///+iyVF/AAACjklEQVRIx72W3aqyQBSGJwk6dceGTv1C8AJEO60QvACJLkDI02xPrtvf75pJ58cx2iffIqT0aWb9vGuNIrft0hSX8WqZ4Etxg9HM+G4zQVdatOcEdSSrqkr3juFOVdMwQXQUC7YmAyVLUPQZ1PxtJSJ5js7KX7j/+pKkNR5Y0RE9Ij/6JMPFRFfebt0cOmbD7dZOEOwQgn7ssnwOrf8rJAMp8KFSrnwormcQCR8S1HpQgT8qVVXnVCsJS/tQzlV4mMpmJLUCXOi4I2mgmnotOAfqcJPiCUIGNsMMunJdEqMjbP+cQQcOrx+hnZ0BA5XsuTQuPUxwBoLnZj98Oxq/LaiTHNK4G34MAQj7jfGhQqeIfgJQzm7ofELccUZ5CDpQjKBO3LbUr+gZhAo8QhMl8FoCb4IQhkvyUt7JWciBCnhUa5VkJkkexEtxQ3KjPvMlqKD7hk7fdF/bHnlQfoUU4LglgBCElVCP+ztIbQfDdXk7OL5jqH/juE7BA4pBUZr8XTJZMadoKZklKlxriMvSBqGO4m8ejJmuy5AH9aTqq02CbwPQlfeYDH94ziEWilqDW5xniiUWq6VUjs6szFTnat5SHYuXdcnGAcTZrINLrpmZGJnqqXY26WLONJ7rfqm5qfwh1vXckPahAh8HD/Imjzt7xJgACLe3oZ01xYQ1Mo/umWmGprBOjcQ96cyEEtacc89DrDx6PkJQrHSh2kjdgh4ulH0C7YIQuS8P3nYlDa9ecg33OpUF8TqnFyB9UitIVujsALSmqp6g+/5fHKVpxQfQqM6q2ier7X5joFdAMX++YrEyMc6hgP0RkuoVZbvfTqfU6gs/VbZG6M3bmn5fE0pxb6x1Ori4eNbkY3f+AriuYpjQCOoxAAAAAElFTkSuQmCC"
				), a62(21, "stalemate", 6,
				"iVBORw0KGgoAAAANSUhEUgAAAeoAAABABAMAAAAnsyk1AAAAElBMVEUAAAA8PjxeYF2Rk5C6vLn////ACCfyAAAFMklEQVRo3uXby3qjIBQAYBEfwO+buM9c3Ntp2ZOZ8ADx8v6vMp2qybmBCK6SbNomEc4vcAS0RbG+1Iebvl5/vxev8lIf0+M1nl8DXboJvd5eET1N3QuoGfoVOvlp4q/+6fv3JL2evY83orp/uVH9NbLrp0braXrBLt541LenVpsH9Ao7+/DUc1E0kuF85ZkHdokHMriMPfNEpbo39fx3e1fbV1D3NKVb8KEn1TkpCShvbxET50gvnzdaDG4A520mfhHSvg+oWsHaN9QlCf0Ydc+vqFYqfUk8SeqGNpcDtW+oKzEJ5KqHghYO1ZrOKPLUa842oPYNdbPRGmnqka+JrDAi13eT1Cd6jj9LuV7ff/+g51tQG3FOk6sWei5Qt3Qo5I1raVG9oXbinCZb3dFTCtWszlz1ZwRve9Qli/0YtfW8QzP73CmS1OQD7A6r0aHn49QXxrPyWqlLVrM9BegOqxt5iZat7tleh5UjsslqYXk91HFqIy/RstWDzOOjuE9XC0eNXZQana/hOPUYUBtWZ5q6CmwpBNWlEHykug9v6NQUY8VkNu/3RKlH/1KTs4NqciLPx6k72qjWs/HTJavlw/C1Wwz35Nlxyldb6Q2pGay0OyJNX8fIneFhM9ylmhFeb45RX2gPtKSFRmGXa6e6+LW5WyiGuwTaO3KactTj+nGJdJbQBsebZq9a3hseNsJdcdaRgnPUw1q1FtVq+drNcMxudSmyz+Fw1xK7luyzZandEuM8gP8SyFqnbXkNu9Uy+xIOd00s54YMiZ3X65qrP9+bv/pOIGudXcWFJrwYl4auxB7C6jWx1DSCLLVZDpx//iRFrwXUmqezBHVRfPji8anvw1mTz7LUzRL4/Pc3ArkP55K3TJI6eOteUKv7O4qMnSz13HHsnLZGjSHqkbodG69p6qL45nxzAEEN+pjDfSNLPRfbl/CveyTlIwrDqkhV0/a+hdRgNBtcXJYacXuiBnW2jJCuxjOWPqRu+YajPUA9HzwuHZ2oG77ddztEDWe6Q0htHkFXvh31BPXySyuqQbeuWIz71OWP948rOLyNUsMUpvH389Rz8MsFjKgduA3Jph971C2bvegoNZSWGJCnhivAGquhVLE68tTKxagraVOlO0ANd6oLrEYTA0dH6R51w0OMUouLcps/D8d5BavFk3ZJmYdXPLWZGLXxP7eUpy5hcVhtgkvDNPWlEG7v+cJVgcVpnlrBZtTe+wJ8v26PmucuFTNL0YGntfLUwGaxWt7zua8W9qgVu3rrmBlpFXhaK1NtQGlIrcNPiO1aXzva2CZm9eF5XMseoG5BKyL1Sa7zkqIGKeIPKTuw0jSBmwPK+1GU+gQiRWpPnX2KGp7B8ffPa9SugpzMlkMi1LyLOv6kwEDUnjrHvdfr/6H4HqhE+xRU7UksczrLVGtQF1QrX5x1gtp3CtHahKq990TO+WolNIkNPO+6xrlP7btjMgbSUOOLwOar781gsfoUqnO3Wm93cKY25MxoeFCu2vD7VBa0zkhv2fQpal9urANq55vZDAeowV63Fm58DXR6OCSpq+AFQVKXrD84aRGYqG74yt2CUns206hT1GI+w/8KQNTV5Ln/9NVAuepKVGt2pg1OZ3vVenNziagb9q12ElolUa0fVQE1P9PNJK/IItVCerwEp5KGTTkbUGKuuuSZFmyKPs505QkqVs3Yf8ITaMeGAZxQ5aqX3y1WO5ZlNZ5E7lfjjfCxK4Lqkl/S4YT3IHWH1IrXWeIclKD+LGP9T+Tr8/9r6j/yRPVUqj3rEAAAAABJRU5ErkJggg=="
				)
		}
	}, this.get = function(fw) {
		return gP[fw]
	}, this.uV = function(name) {
		for (var du = ft.length - 1; 0 <= du; du--)
			if (ft[du] === name) return gP[du];
		return a5z
	}, this.g0 = function() {
		return 0 === a5y
	}
}

function bn() {
	var a6E, a6F, a6G, a6H, a6I, a6J, a6K, a6L, a6M, a6N, a6O, a6B = [224, 224, 224],
		a6C = [
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
		a6D = [
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

	function a6l(f2, a6n) {
		a1s[f2] = 0, a1s[f2 + 1] = 0, a1s[f2 + 2] = a6n, a1s[f2 + 3] = 0, a6o(f2)
	}

	function a6o(f2) {
		var jk;
		b2.kl || (jk = a4.ju(f2), f2 = a4.gB(f2), b2.kl = jk >= b1.a1r[0] && jk <= b1.a1r[2] && f2 >= b1.a1r[1] && f2 <= b1.a1r[3])
	}
	this.cj = function(qh) {
		if (a6E = new Uint8Array(ez), a6F = new Uint8Array(ez), a6G = new Uint8Array(ez), a6H = new Uint8Array(ez), a6I = new Uint8Array(ez), a6J = new Uint8Array(ez), a6K = new Uint8Array(ez), a6L = new Uint8Array(ez), a6M = new Uint8Array(ez),
			a6N = new Uint8Array(ez), this.yc = new Uint8Array(ez), (a6O = new Int32Array(4))[0] = -4 * au.eV, a6O[1] = 4, a6O[2] = -a6O[0], a6O[3] = -a6O[1], hX)
			for (var pC, iW, du = ez - 1; 0 <= du; du--) iW = b8.rd[b8.iX[du]], pC = en((a6D[iW][3] + 1) * aF.random(), aF.value(100)), a6E[du] = a6C[iW][0] + pC * a6D[iW][0], a6F[du] = a6C[iW][1] + pC * a6D[iW][1], a6G[du] = a6C[iW][2] + pC *
				a6D[iW][2];
		else aX.it && aX.iu.a6V ? function(e9) {
			var du;
			for (du = pz - 1; 0 <= du; du--) a6E[du] = 4 * e9[du][0], a6F[du] = 4 * e9[du][1], a6G[du] = 4 * e9[du][2]
		}(aX.iu.a6V) : (function() {
			for (var du = ez - 1; h6 <= du; du--) a6E[du] = 4 * en(64 * aF.random(), aF.value(100)), a6F[du] = 4 * en(64 * aF.random(), aF.value(100)), a6G[du] = 4 * en(64 * aF.random(), aF.value(100))
		}(), function(qh) {
			for (var du = h6 - 1; 0 <= du; du--) a6E[du] = 4 * qh[du].a5W[0], a6F[du] = 4 * qh[du].a5W[1], a6G[du] = 4 * qh[du].a5W[2]
		}(qh));
		! function() {
			var du, f4;
			for (du = ez - 1; 0 <= du; du--) f4 = en(a6E[du] + a6F[du] + a6G[du], 3), a6E[du] += a6f(f4 - a6E[du], 2), a6F[du] += a6f(f4 - a6F[du], 2), a6G[du] += a6f(f4 - a6G[du], 2), a6E[du] -= a6E[du] % 4, a6F[du] -= a6F[du] % 4, a6G[du] -=
				a6G[du] % 4
		}(),
		function() {
			for (var du = ez - 1; 0 <= du; du--) a6E[du] += en(du, 128), a6F[du] += en(du % 128, 32), a6G[du] += en(du % 32, 8), a6H[du] = du % 8
		}(), this.a6b(),
			function() {
				for (var du = ez - 1; 0 <= du; du--) a6I[du] = a6E[du] < 32 ? a6E[du] + 32 : a6E[du] - 32, a6J[du] = a6F[du] < 32 ? a6F[du] + 32 : a6F[du] - 32, a6K[du] = a6G[du] < 32 ? a6G[du] + 32 : a6G[du] - 32
			}(),
			function() {
				for (var du = ez - 1; 0 <= du; du--) a6L[du] = 235 < a6E[du] ? a6E[du] - 20 : a6E[du] + 20, a6M[du] = 235 < a6F[du] ? a6F[du] - 20 : a6F[du] + 20, a6N[du] = 235 < a6G[du] ? a6G[du] - 20 : a6G[du] + 20
			}()
	}, this.a6e = function(player) {
		var e9 = aq.e4;
		return e9[0] = a6E[player], e9[1] = a6F[player], e9[2] = a6G[player], e9
	}, this.a6b = function() {
		for (var du = ez - 1; 0 <= du; du--) this.yc[du] = a6E[du] + a6F[du] + a6G[du] < 280 ? 0 : 1
	}, this.ju = function(f2) {
		return en(f2, 4) % au.eV
	}, this.gB = function(f2) {
		return en(f2, 4 * au.eV)
	}, this.q6 = function(jk, jl) {
		return Math.floor(4 * (jl * au.eV + jk))
	}, this.qL = function(f2) {
		return this.pd(f2 + a6O[0]) || this.pd(f2 + a6O[1]) || this.pd(f2 + a6O[2]) || this.pd(f2 + a6O[3])
	}, this.qJ = function(f2, player) {
		return this.a6g(f2 + a6O[0], player) || this.a6g(f2 + a6O[1], player) || this.a6g(f2 + a6O[2], player) || this.a6g(f2 + a6O[3], player)
	}, this.um = function(player) {
		return player < h6 && 2 !== h8[player]
	}, this.f5 = function(f2) {
		return 208 <= a1s[f2 + 3]
	}, this.qQ = function(player, f2) {
		return this.f5(f2) && this.a6h(player, f2)
	}, this.a6h = function(player, f2) {
		return player === this.f6(f2)
	}, this.a6i = function(f2) {
		return 208 <= a1s[f2 + 3] && a1s[f2 + 3] < 224
	}, this.hg = function(f2) {
		return 224 <= a1s[f2 + 3] && a1s[f2 + 3] < 248
	}, this.qK = function(f2) {
		for (var du = 3; 0 <= du; du--)
			if (this.uo(f2 + a6O[du])) return !0;
		return !1
	}, this.a6j = function(f2) {
		return 192 <= a1s[f2 + 3] && a1s[f2 + 3] < 208
	}, this.a6k = function(f2, player) {
		return this.a6j(f2) && player === this.f6(f2)
	}, this.ex = function(f2) {
		return this.f5(f2) || this.f7(f2)
	}, this.uo = function(f2) {
		return 0 === a1s[f2 + 3] && 2 === a1s[f2 + 2]
	}, this.f7 = function(f2) {
		return 0 === a1s[f2 + 3] && 1 === a1s[f2 + 2]
	}, this.pd = function(f2) {
		return 0 === a1s[f2 + 3] && 3 === a1s[f2 + 2]
	}, this.un = function(f2) {
		return this.pd(f2)
	}, this.a6g = function(f2, player) {
		return this.f7(f2) || this.f5(f2) && player !== this.f6(f2)
	}, this.f6 = function(f2) {
		return a1s[f2] % 4 * 128 + a1s[f2 + 1] % 4 * 32 + a1s[f2 + 2] % 4 * 8 + a1s[f2 + 3] % 8
	}, this.qR = function(f2) {
		a6l(f2, 1)
	}, this.a6m = function(f2) {
		a6l(f2, 2)
	}, this.qI = function(f2, player) {
		a1s[f2] = a6E[player], a1s[f2 + 1] = a6F[player], a1s[f2 + 2] = a6G[player], a1s[f2 + 3] = 208 + a6H[player], a6o(f2)
	}, this.ey = function(f2, player) {
		a1s[f2] = a6I[player], a1s[f2 + 1] = a6J[player], a1s[f2 + 2] = a6K[player], a1s[f2 + 3] = 224 + a6H[player], a6o(f2)
	}, this.hh = function(f2, player) {
		a1s[f2] = a6L[player], a1s[f2 + 1] = a6M[player], a1s[f2 + 2] = a6N[player], a1s[f2 + 3] = 248 + a6H[player], a6o(f2)
	}, this.a6p = function(f2, player) {
		a1s[f2] = a6B[0] + a6E[player] % 4, a1s[f2 + 1] = a6B[1] + a6F[player] % 4, a1s[f2 + 2] = a6B[2] + a6G[player] % 4, a1s[f2 + 3] = 192 + a6H[player], a6o(f2)
	}
}

function bo() {
	var ft, et, ev, dq, a6q;

	function a6v() {
		for (var a70 = 0, du = 1; du < 5; du++) a70 += et[du] % 1024;
		return a70
	}

	function a6u() {
		for (var du = 1; du < ev - a6q; du++) et[du] = parseInt(et[du])
	}

	function a6w() {
		et[0] = "Player " + Math.floor(1e3 * Math.random()), et[1] = dh < di ? Math.floor(1 + Math.random() * (Math.pow(2, 30) - 1)) : 0, et[2] = 1, et[3] = 1, et[4] = dh < di ? 0 : 1, et[5] = 0, et[6] = "000", et[7] = "0", et[8] = "0", et[9] = "0",
			a5.dn()
	}

	function a6t() {
		for (var du = ev - a6q - 1; 0 <= du; du--) et[du] = h.de(et[du]);
		et[0] = h.r8(et[0])
	}

	function a73(name, value, a74) {
		var a75 = new Date,
			a74 = (a75.setTime(a75.getTime() + Math.floor(31536e6 * a74)), name + "=" + value + ";expires=" + a75.toUTCString() + ";SameSite=Strict;Secure;path=/");
		document.cookie = a74
	}
	this.cj = function() {
		if (!(5 <= dX || dT)) {
			a6q = 4, ft = [], ev = 10;
			for (var du = dq = 0; du < ev; du++) ft.push("u" + du);
			et = new Array(ev), ! function(a71) {
				for (var hk, f2, a72 = a71.split(";"), du = a72.length - 1; 0 <= du; du--) {
					for (a72[du] = a72[du].trim(), hk = 2; 0 <= hk; hk--) a72[du] = a72[du].replace(" ", "");
					3 < a72[du].length && (hk = ft.indexOf(a72[du].substring(0, 2)), f2 = a72[du].indexOf("="), 0 <= hk && 2 === f2 ? et[hk] = a72[du].substring(f2 + 1, a72[du].length) : 0 < f2 && a73(a72[du].substring(0, f2), "0", 0))
				}
			}(document.cookie), et[9] || (et[9] = "0"), (! function() {
				for (var du = ev - 1; 0 <= du; du--)
					if (void 0 === et[du]) return;
				return 1
			}() || (dq = 2, a6t(), a6u(), a6v() !== et[5])) && a6w()
		}
	}, this.dn = function() {
		if (2 === dq) {
			et[1] = 0 === et[1] ? Math.floor(1 + Math.random() * (Math.pow(2, 30) - 1)) : et[1], et[5] = a6v(), ! function() {
				for (var du = 1; du < ev - a6q; du++) et[du] = et[du].toString()
			}(), ! function() {
				et[0] = h.r7(et[0]);
				for (var du = ev - a6q - 1; 0 <= du; du--) et[du] = h.dp(et[du])
			}();
			for (var du = ev - 1; 0 <= du; du--) a73(ft[du], et[du], 1);
			a6t(), a6u()
		}
	}, this.dq = function() {
		return dq
	}, this.wb = function(hk) {
		dq = hk, this.dn()
	}, this.dm = function(du, value) {
		5 <= dX || dT || (et[du] = value)
	}, this.da = function(du) {
		return 5 <= dX || dT ? 0 : et[du]
	}
}

function c9() {
	var fw = 0,
		a76 = new Uint16Array(32);

	function remove(uY) {
		var du;
		for (fw -= 2, du = uY; du < fw; du += 2) a76[du] = a76[du + 2], a76[du + 1] = a76[du + 3]
	}
	this.cj = function() {
		fw = 0
	}, this.iH = function() {
		var du, hd, hB;
		if (0 !== fw)
			if (0 === h7[eq] || a6.a77(eq) === a6.ea(eq)) fw = 0;
			else
				for (du = fw - 2; 0 <= du; du -= 2)(hd = a76[du]) < ez && 0 === h7[hd] ? remove(du) : (hB = a76[du + 1], (ez <= hd && up(eq) || hd < ez && uu(eq, hd)) && (aa.fn.fo(hB, hd), remove(du)))
	}, this.ug = function(hd, hB) {
		! function(hd, hB) {
			var du;
			for (du = 0; du < fw; du += 2)
				if (a76[du] === hd) return a76[du + 1] = Math.min(a76[du + 1] + hB, 1023), 1;
			return
		}(hd, hB) && 32 !== fw && (a76[fw] = hd, a76[fw + 1] = hB, fw += 2)
	}
}

function a79(player) {
	a7A(player), a7B(player), a7C(player), c.ep(player), e.jf(player), a6.og(player), ap.a7D.a7E(player)
}

function a7A(player) {
	a4.um(player) && rS++;
	var a7F = a6.a7G(player);
	0 === a7F.length ? player === eq && a7H() : (a7I(player, a7F), a7J(player, a7F))
}

function a7H() {
	b4.et[17] += er[eq] + a6.a7K(eq), u.show(!1, !1, !1, !0), t.a1M()
}

function a7I(player, a7F) {
	for (var du = a7F.length - 1; 0 <= du; du--) a6.a7L(a7F[du], player)
}

function a7M(a7F) {
	for (var fw = 0, du = a7F.length - 1; 1 <= du; du--) fL[a7F[du]] > fL[a7F[fw]] && (fw = du);
	return fw
}

function a7J(player, a7F) {
	var du, wG, a7N = a7F[a7M(a7F)];
	if (9 === iw && 1 === b8.iX[player] && aF.iQ(8) && aA.a7O(a7N), player === eq) 2 !== h8[player] && k.rI(a7N, 1), a7H();
	else {
		for (wG = !1, du = a7F.length - 1; 0 <= du; du--)
			if (a7F[du] === eq) return wG = !0, void k.rI(player, 0);
		!wG && player < h6 && 2 !== h8[player] && k.vx(0, player, a7N)
	}
}

function a7C(player) {
	h7[player] = er[player] = 0, ew[player] = null, fD[player] = null, fE[player] = null, fH[player] = null, aT.a7P(player)
}

function a7B(player) {
	for (var f2, jl, jk = i5[player]; jk >= i6[player]; jk--)
		for (jl = i8[player]; jl >= i9[player]; jl--) f2 = 4 * (jl * au.eV + jk), a4.qQ(player, f2) && (a4.qR(f2), fL[player]--)
}

function cF() {
	var input;

	function a7Q(dE) {
		a7S(dE.target.files)
	}

	function a7S(files) {
		files && 0 < files.length && aW.a7T(files[0])
	}

	function a7Y(dE) {
		var iW = new Image;
		iW.onload = a7Z, iW.src = dE.target.result
	}

	function a7Z(dE) {
		var a7a, dE = dE.target,
			g2 = dE.width,
			i2 = dE.height;
		4096 < g2 || 4096 < i2 || g2 < 10 || i2 < 10 ? (a7a = "Image w & h must be between 10 and 4096.", dU ? dU.showToast(a7a) : alert(a7a)) : (aX.ox(), au.pn = au.z2(), au.a4w = 0, au.eV = g2, au.eW = i2, au.pP.width = au.eV, au.pP.height = au.eW,
			au.pL.drawImage(dE, 0, 0), a7a = au.pL.getImageData(0, 0, au.eV, au.eW), au.pQ = a7a.data)
	}

	function a7b(dE) {
		dE.stopPropagation(), dE.preventDefault()
	}

	function a7c() {
		return 0 === x.sg() || 2 === x.sg()
	}
	this.cj = function() {
		(input = document.createElement("input")).type = "file", input.setAttribute("accept", ".json, .png, .jpg, .gif, .jpeg"), input.onchange = a7Q
	}, this.a5Y = function() {
		input.click()
	}, this.a7R = function(dE) {
		a7Q(dE)
	}, this.a7T = function(a7U) {
		var e9 = a7U.name.split("."),
			a7V = e9[e9.length - 1].toLowerCase();
		"json" === a7V ? aX.a7X(a7U) : "gif" !== a7V && "jpg" !== a7V && "jpeg" !== a7V && "png" !== a7V || (au.iu.pm[au.z2()].name = e9[0], (a7V = new FileReader).onload = a7Y, a7V.readAsDataURL(a7U))
	}, this.sE = function(dE) {
		a7c() && (a7b(dE), dE.dataTransfer.dropEffect = "copy")
	}, this.sF = function(dE) {
		a7c() && (a7b(dE), a7S(dE.dataTransfer.files))
	}
}

function cD() {
	this.a7d = null, this.cj = function() {
		this.a7d = 10 !== iw ? null : new Uint32Array(ez)
	}, this.iH = function() {
		10 === iw && this.a7e()
	}, this.a7e = function() {
		for (var f2, target, a1X, a7d = this.a7d, qh = iZ, tR = er, du = iY - 1; 0 <= du; du--) f2 = qh[du], h6 <= f2 || (target = Math.max(en(tR[f2], 4), 2048), a1X = Math.max(a7.a1Y(f2), 100), a7d[f2] += en(a1X * target, 1e4), a7d[f2] >
			target && (a7d[f2] = target))
	}, this.tX = function(player, he) {
		return he > this.a7d[player] ? (he = this.a7d[player], this.a7d[player] = 0) : this.a7d[player] -= he, he
	}
}

function cG() {
	function a7Y(dE) {
		aX.it = !0, aX.a7k(JSON.parse(dE.target.result)), aX.xC()
	}

	function a7q(dd, min, max, a7z) {
		return "string" != typeof dd || dd.length < min ? a7z : dd.length > max ? dd.substring(0, max) : dd
	}

	function a7l(e0, min, max) {
		return e0 = "number" == typeof e0 ? Math.floor(e0) : min, Math.min(Math.max(e0, min), max)
	}

	function a7o(e0, oz) {
		return "boolean" == typeof e0 ? e0 : oz
	}

	function a7s(e0, ev, max, a81) {
		var du, e9, pC;
		if (!Array.isArray(e0) || e0.length < 1) return null;
		for (e9 = new(8 === a81 ? Uint8Array : Uint16Array)(ev), pC = e0.length, du = 0; du < ev; du++) e9[du] = a7l(e0[du % pC], 0, max);
		return e9
	}
	this.it = !1, this.iu = null, this.ox = function() {
		this.it = !1, this.iu = null
	}, this.a5U = function() {
		this.iu.a6V && this.iu.a7f && (this.iu.a6V[0] = gA.vR[2].rM.a39()), ty(this.iu.a7g, 0, this.a7h(), this.iu.u1, !1, !1)
	}, this.a7h = function() {
		return [{
			name: this.iu.a7i ? a2.a5V() : this.iu.a7j[0],
			a5W: [0, 0, 0],
			a5X: 0
		}]
	}, this.a7X = function(a7U) {
		var a7W = new FileReader;
		a7W.onload = a7Y, a7W.readAsText(a7U)
	}, this.a7k = function(vs) {
		this.iu = {}, this.iu.a5Q = a7l(vs.numberPlayers, 1, 512), this.iu.a7m = a7l(vs.modeID, 0, 1), this.iu.pn = a7l(vs["gMap.mapID"], 0, au.a7n - 1), this.iu.a50 = a7l(vs.seedMap, 0, 16383), this.iu.a7g = a7l(vs.seedSpawn, 0, 16383), this.iu
			.u4 = a7o(vs.selectableSpawn, !1), this.iu.a7i = a7o(vs.selectableName, !1), this.iu.a7f = a7o(vs.selectableColor, !1), au.iu.pm[au.z2()].name = this.iu.a7p = a7q(vs.mapName, 1, 25, "Custom Map"), this.iu.n7 = function(e0) {
				var du, ev;
				if (!Array.isArray(e0) || e0.length < 1) return [];
				for (ev = e0.length, du = 0; du < ev; du++) e0[du] = a7q(e0[du], 0, 100, "");
				return e0
			}(vs.description), this.iu.pu = a7s(vs.playerX, this.iu.a5Q, 4096, 16), this.iu.q5 = a7s(vs.playerY, this.iu.a5Q, 4096, 16), this.iu.a7t = a7s(vs.playerTeam, this.iu.a5Q, 8, 8), this.iu.iv = a7s(vs.playerStrength, this.iu.a5Q, 5, 8),
			this.iu.a6V = function(e0, ev) {
				var du, e9, pC;
				if (!Array.isArray(e0) || e0.length < 1) return null;
				for (e9 = new Array(ev), pC = e0.length, du = 0; du < ev; du++) e9[du] = a7s(e0[du % pC], 3, 63, 8);
				return e9
			}(vs.playerColor, this.iu.a5Q), this.iu.a7j = function(e0, ev) {
				var du, e9, pC;
				if (!Array.isArray(e0) || e0.length < 1) return null;
				for (e9 = new Array(ev), pC = e0.length, du = 0; du < ev; du++) e9[du] = a7q(e0[du % pC], 3, 26, "Bot");
				return e9
			}(vs.playerName, this.iu.a5Q), this.iu.a7w = "string" == typeof vs.mapBase64 ? vs.mapBase64 : "", this.iu.a7i = this.iu.a7i || !this.iu.a7j, this.iu.u1 = 0 === this.iu.a7m ? 7 : 2 === this.iu.a7m ? 9 : 6, this.iu.pu = this.iu.q5 ?
			this.iu.pu : null
	}, this.xC = function() {
		! function(dd) {
			var gP, gM, a7y = "data:image/png;base64,";
			if (dd.length <= a7y.length) return;
			aX.iu.pn = 0, aX.iu.a50 = 0, au.bh(0, 0), dd.substring(0, a7y.length) !== a7y && (dd = a7y + dd);
			return (gP = new Image).onload = function() {
				au.eV = gP.width, au.eW = gP.height, 4096 < au.eV || 4096 < au.eW || au.eV < 10 || au.eW < 10 ? (au.bh(0, 0), alert("Image w & h must be between 10 and 4096.")) : (au.pn = au.z2(), au.a4w = 0, au.pP.width = au.eV, au.pP
					.height = au.eW, au.pL.drawImage(gP, 0, 0), gM = au.pL.getImageData(0, 0, au.eV, au.eW), au.pQ = gM.data)
			}, gP.src = dd, aX.iu.a7w = "", 1
		}(this.iu.a7w) && au.bh(this.iu.pn, this.iu.a50)
	}, this.a82 = function() {
		for (var max = 0, ev = this.iu.a5Q, du = 0; du < ev; du++) this.iu.a7t[du] > max && (max = this.iu.a7t[du]);
		return Math.max(0, max - 1)
	}
}

function bp() {
	var a83, a84, gJ, hd, he, id;

	function a85(player) {
		return player < h6 ? a83 * player : a83 * h6 + a84 * (player - h6)
	}
	this.cj = function() {
		a83 = h6 < 16 ? 12 : 8, a84 = 4;
		var ev = a85(ez);
		gJ = new Uint8Array(ez), hd = new Uint16Array(ev), he = new Uint32Array(ev), id = new Uint16Array(ev)
	}, this.n3 = function(y6, a86) {
		var a87 = this.fZ(y6, a86);
		this.fY(y6, a86, 0), a87 = ad.fh.mD(y6, a87), y6 === eq && (b4.et[13] -= a87)
	}, this.og = function(player) {
		gJ[player] = 0
	}, this.a7L = function(player, a86) {
		var ie, a86 = function(player, a86) {
			var du, pC = a85(player);
			for (du = gJ[player] - 1; 0 <= du; du--)
				if (0 === id[pC + du] && hd[pC + du] === a86) return du;
			return gJ[player]
		}(player, a86);
		a86 !== gJ[player] && (ie = he[a85(player) + a86], this.eu(player, a86), this.ha(player, ie, ez))
	}, this.fl = function(player, a86) {
		for (var pC = a85(player), du = gJ[player] - 1; 0 <= du; du--)
			if (0 === id[pC + du] && hd[pC + du] === a86) return !0;
		return !1
	}, this.fk = function(player) {
		return player < h6 ? gJ[player] < a83 : gJ[player] < a84
	}, this.ea = function(player) {
		return gJ[player]
	}, this.eg = function(player, du) {
		return hd[a85(player) + du]
	}, this.eb = function(player, du) {
		return id[a85(player) + du]
	}, this.jx = function(player, a89) {
		for (var pC = a85(player), du = gJ[player] - 1; 0 <= du; du--)
			if (id[pC + du] === a89) return du;
		return -1
	}, this.eh = function(player, du) {
		return he[a85(player) + du]
	}, this.fZ = function(player, a86) {
		for (var pC = a85(player), du = gJ[player] - 1; 0 <= du; du--)
			if (0 === id[pC + du] && hd[pC + du] === a86) return he[pC + du];
		return 0
	}, this.a7K = function(player) {
		for (var pC = a85(player), e0 = 0, du = gJ[player] - 1; 0 <= du; du--) e0 += he[pC + du];
		return e0
	}, this.a8A = function(player) {
		for (var pC = a85(player), e0 = 0, du = gJ[player] - 1; 0 <= du; du--) 0 === id[pC + du] && (e0 += he[pC + du]);
		return e0
	}, this.a77 = function(player) {
		for (var pC = a85(player), wF = 0, du = gJ[player] - 1; 0 <= du; du--) 0 < id[pC + du] && wF++;
		return wF
	}, this.fY = function(player, a86, ie) {
		for (var pC = a85(player), du = gJ[player] - 1; 0 <= du; du--) 0 === id[pC + du] && hd[pC + du] === a86 && (he[pC + du] = ie)
	}, this.fK = function(player, du, ie) {
		he[a85(player) + du] = ie
	}, this.ha = function(player, ie, a86) {
		var du, pC = a85(player);
		for (a86 === eq && b4.et[player < h6 ? 6 : 5]++, du = gJ[player] - 1; 0 <= du; du--)
			if (0 === id[pC + du] && hd[pC + du] === a86) return he[pC + du] += ie, void(he[pC + du] = he[pC + du] > tT ? tT : he[pC + du]);
		hd[pC + gJ[player]] = a86, he[pC + gJ[player]] = ie, id[pC + gJ[player]] = 0, gJ[player]++, player < h6 && (a86 === eq ? k.rI(player, 5) : player === eq && a8.vz(a86))
	}, this.a8B = function(player, ie, a89) {
		var pC = a85(player);
		h7[player] = 2, hd[pC + gJ[player]] = 0, he[pC + gJ[player]] = ie, id[pC + gJ[player]] = a89, gJ[player]++
	}, this.eu = function(player, fw) {
		var hk, pC;
		if (0 !== gJ[player])
			for (pC = a85(player), gJ[player]--, hk = fw; hk < gJ[player]; hk++) hd[pC + hk] = hd[pC + hk + 1], he[pC + hk] = he[pC + hk + 1], id[pC + hk] = id[pC + hk + 1]
	}, this.a7G = function(player) {
		for (var hk, pC, a7F = [], du = iY - 1; 0 <= du; du--)
			for (pC = a85(iZ[du]), hk = gJ[iZ[du]] - 1; 0 <= hk; hk--)
				if (0 === id[pC + hk] && hd[pC + hk] === player) {
					a7F.push(iZ[du]);
					break
				} return a7F
	}
}

function bq() {
	var a8C, a8D, a8E, a8F, a8G, a8H;
	this.cj = function() {
		a8E = a8C = 10, a8F = a8D = 10
	}, this.d2 = function() {
		a8H = 512, a8G = new Uint16Array(a8H);
		for (var du = 0; du < a8H; du++) a8G[du] = 100 + fc(en(25600 * du, a8H - 4), 9)
	}, this.a0I = function() {
		return a8F
	}, this.iH = function() {
		if (--a8E <= 0 && (a8E = a8C, function() {
				var du, a8M, dW = er[eq];
				for (iy && !hX && 0 !== h7[0] && 0 === a1.iz[0].f4 && (er[0] += en(fL[0], 6)), du = iY - 1; 0 <= du; du--) a8M = en(a7.a1Y(iZ[du]) * er[iZ[du]], 1e4), er[iZ[du]] += a8M < 1 ? 1 : a8M, a7.es(iZ[du]);
				b4.et[9] += er[eq] - dW
			}(), --a8F <= 0)) {
			a8F = a8D;
			for (var dW = er[eq], du = iY - 1; 0 <= du; du--) er[iZ[du]] += fL[iZ[du]], a7.es(iZ[du]);
			b4.et[8] += er[eq] - dW
		}
	}, this.a1Y = function(player) {
		var gS = a8G[en((a8H - 1) * fL[player], tt)],
			a8L = (b7.iV() < 1920 && (gS = gS < (a8L = en(100 * (13440 - 6 * b7.iV()), 1920)) ? a8L : gS), this.iK(player));
		return er[player] > a8L && (gS -= en(2 * gS * (er[player] - a8L), a8L)), gS < 0 ? 0 : 700 < gS ? 700 : gS
	}, this.iK = function(player) {
		player = 100 * fL[player];
		return tu < player ? tu : player
	}, this.es = function(player) {
		var e0 = fL[player] * tS;
		er[player] = Math.min(Math.min(er[player], tT), e0)
	}, this.ln = function(player, lo) {
		ad.fh.mD(lo, aq.e3[0]), b4.mE(player, lo), a8.a8O(player, aq.e3[0] + aq.e3[1]), a8.mF(lo, aq.e3[0]), ad.fh.ms(player)
	}
}

function br() {
	var a8P, a8Q, a8R, a8S, a8T, a8U, a8V, a8W, a8X, a8Y, a8Z, a8a, a8b, a8c, a8d, a8e, a8f, a8g, a8i, a8j, a8k, a8l, a8m, a8s, a8t, a8h = null,
		a8o = 0,
		a8p = new Float32Array(4),
		a8q = 0,
		a8r = !0;

	function a8v() {
		a8h.width = js, a8h.height = g9, (a8i = a8h.getContext("2d", {
			alpha: !0
		})).textAlign = gF, a8i.textBaseline = gE, a8i.imageSmoothingEnabled = !0
	}

	function a8w() {
		var du, a90;
		for (gD.font = fx + Math.floor(100 * a8Z) + fy, a90 = 80 / Math.floor(gD.measureText(ad.k0.k1(tT)).width), gD.font = fx + 100 + fy, du = ez - 1; 0 <= du; du--) a8W[du] = 100 / Math.floor(gD.measureText(k2[du]).width), a8V[du] = Math.min(a90,
			a8W[du])
	}

	function a91(du) {
		return !aR.jy.jz || er[du] < 1e6 ? 1 : er[du] < 1e7 ? a8p[0] : a8p[Math.min(Math.floor(Math.log10(er[du])) - 6, 3)]
	}

	function a8z(gQ) {
		a8g = !1, a8f = 1, a8d = a8e = 0, a8r ? (gQ.textAlign = gF, gQ.textBaseline = gE) : gQ.clearRect(0, 0, js, g9);
		var jm, jn, du, fontSize, jo, jp = hC / hD,
			jq = hE / hD,
			jr = (js + hC) / hD,
			jt = (g9 + hE) / hD,
			a95 = 0 !== h7[eq] && a4.um(eq);
		gQ.imageSmoothingEnabled = !0;
		for (var hk = iY - 1; 0 <= hk; hk--) du = iZ[hk], (fontSize = a8c * hD * a91(du) * a8V[du] * a8T[du]) < a8b || a8X <= fontSize || a8R[du] + a8T[du] > jp && a8R[du] < jr && a8S[du] + a8U[du] > jq && a8S[du] < jt && (jm = js * (a8R[du] + a8T[
			du] / 2 - jp) / (jr - jp), jn = g9 * (a8S[du] + a8U[du] / 2 - jq) / (jt - jq) - .1 * fontSize, gQ.font = xK[h8[du]] + fontSize + fy, gQ.fillStyle = function(fontSize, du) {
			if (a8Y <= fontSize && fontSize < a8X) return b8.a9I[a4.yc[du]] + a9E(fontSize).toFixed(3) + ")";
			return b8.a9J[a4.yc[du]]
		}(fontSize, du), aR.jy.jz ? gQ.fillText(ad.k0.k1(er[du]), jm, jn) : a97(du, fontSize, jm, jn, gQ), a8g = !0, 0 < a8k[du] ? function(jm, jn, fontSize, du, gQ) {
			0 === a0J[du] ? b3.xE(a8j[du]) ? (function(jm, jn, fontSize, player, m2, gQ) {
				for (var vB = .9 * fontSize / b3.g2, py = jn - .5 * vB * b3.g2 - .05 * fontSize, gO = (gQ.globalAlpha = a9E(fontSize), a91(player) * (aR.jy.jz ? a8q : a8W[player])), px = jm - .5 * fontSize / gO - .4 * fontSize - vB *
						b3.g2, hu = 0; hu < 2; hu++) gQ.setTransform(vB, 0, 0, vB, px, py), gQ.drawImage(b3.uU[m2], 0, 0), px = jm + .5 * fontSize / gO + .4 * fontSize;
				gQ.globalAlpha = 1, gQ.setTransform(1, 0, 0, 1, 0, 0)
			}(jm, jn, fontSize, du, a8j[du], gQ), a99(jm, jn, fontSize, 0, 0, gQ)) : b3.xD(a8j[du]) ? (a9H(jm, jn, fontSize, a8j[du], 0, gQ), a99(jm, jn, fontSize, 0, 1, gQ)) : (a9H(jm, jn, fontSize, a8j[du], 1, gQ), a99(jm, jn, fontSize,
				1, 0, gQ)) : a9H(jm, jn, fontSize, a8j[du], 0, gQ)
		}(jm, jn, fontSize, du, gQ) : 0 === a0J[du] && a99(jm, jn, fontSize, 0, 0, gQ), a95 && (0 < a8k[du + ez] || 0 < a8k[du + 2 * ez] || 0 < a8k[du + 3 * ez] || 0 < a8k[du + 4 * ez]) && function(jm, jn, fontSize, du, gQ) {
			var iW, wF = -1;
			for (iW = 4; 1 <= iW; iW--) 0 < a8k[du + iW * ez] && wF++;
			for (iW = 1; iW < 5; iW++) 0 < a8k[du + iW * ez] && (! function(jm, jn, fontSize, iW, du, a9C, dW, gQ) {
				var vB = .8 * fontSize / b3.g2,
					jm = jm - .5 * vB * b3.g2 - .534 * a9C * fontSize,
					a9C = jn + 1.4 * vB * b3.g2;
				gQ.setTransform(vB, 0, 0, vB, jm, a9C), gQ.globalAlpha = a9E(fontSize), jn = 1 === iW ? b3.uU[a8j[du + ez]] : 2 === iW ? i.uQ()[4].gP[dW < 255 ? 1 : 0] : (3 === iW ? i.uQ()[5] : i.uQ()[6]).gP[0];
				gQ.drawImage(jn, 0, 0), gQ.globalAlpha = 1, gQ.setTransform(1, 0, 0, 1, 0, 0)
			}(jm, jn, fontSize, iW, du, wF, a8k[du + iW * ez], gQ), wF -= 2)
		}(jm, jn, fontSize, du, gQ), (jo = a8Z * fontSize) < a8b || (gQ.font = fx + jo + fy, aR.jy.jz ? a97(du, jo, jm, jn + .78 * fontSize, gQ) : gQ.fillText(ad.k0.k1(er[du]), jm, jn + .78 * fontSize)));
		gQ.imageSmoothingEnabled = !1
	}

	function a97(du, fontSize, jk, jl, gQ) {
		gQ.fillText(k2[du], jk, jl), du < h6 && 2 !== h8[du] || (du = fontSize / a8W[du], gQ.fillRect(jk - .5 * du, jl + ad.km.tD * fontSize, du, Math.max(1, .1 * fontSize)))
	}

	function a99(jm, jn, fontSize, a9C, a9D, gQ) {
		var vB = .95 * fontSize / a8m,
			jm = jm - .5 * vB * a8l + .8 * a9C * fontSize,
			a9C = jn - 1.76 * vB * a8m - .82 * a9D * fontSize;
		gQ.setTransform(vB, 0, 0, vB, jm, a9C), gQ.globalAlpha = a9E(fontSize), gQ.drawImage(a3.get(4), 0, 0), gQ.globalAlpha = 1, gQ.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a9H(jm, jn, fontSize, m2, a9C, gQ) {
		var vB = 1.2 * fontSize / b3.g2,
			jm = jm - .5 * vB * b3.g2 - .8 * a9C * fontSize,
			a9C = jn - 1.5 * vB * b3.g2;
		gQ.setTransform(vB, 0, 0, vB, jm, a9C), gQ.globalAlpha = a9E(fontSize), gQ.drawImage(b3.uU[m2], 0, 0), gQ.globalAlpha = 1, gQ.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a9E(fontSize) {
		return a8Y <= fontSize && fontSize < a8X ? 1 - (fontSize - a8Y) / (a8X - a8Y) : 1
	}

	function a9S(gO, g2) {
		return 1 + Math.floor(a8a * gO * g2)
	}

	function a9P(du) {
		for (var left = a8R[du], hk = a8R[du] - i6[du] - 1; 0 <= hk; hk--)
			if (!a9U(du, --left, a8S[du], a8U[du])) {
				left++;
				break
			} var right = a8R[du];
		for (hk = i5[du] - a8R[du] - a8T[du]; 0 <= hk; hk--)
			if (!a9U(du, ++right + a8T[du] - 1, a8S[du], a8U[du])) {
				right--;
				break
			} var jk = Math.floor((left + right) / 2),
			top = a8S[du];
		for (hk = a8S[du] - i9[du] - 1; 0 <= hk; hk--)
			if (!a9V(du, jk, --top, a8T[du])) {
				top++;
				break
			} var bottom = a8S[du];
		for (hk = i8[du] - a8S[du] - a8U[du]; 0 <= hk; hk--)
			if (!a9V(du, jk, ++bottom + a8U[du] - 1, a8T[du])) {
				bottom--;
				break
			} var jl = Math.floor((top + bottom) / 2);
		a9M(du, jk, jl, a8T[du], a8U[du]) && (a8R[du] = jk, a8S[du] = jl)
	}

	function a9M(player, jk, jl, g2, i2) {
		f4 = Math.floor(.2 * g2);
		for (var f4, iW = jk + g2 - 1; jk <= iW; iW--)
			if (!a9U(player, iW, jl, i2)) return;
		for (iW = jl + i2 - 1 - (f4 = (f4 = Math.floor(.25 * i2)) < 1 ? 1 : f4); jl + f4 <= iW; iW--)
			if (!a9V(player, jk, iW, g2)) return;
		return 1
	}

	function a9U(player, jk, jl, i2) {
		return a4.qQ(player, 4 * (jl * au.eV + jk)) && a4.qQ(player, 4 * ((jl + i2 - 1) * au.eV + jk))
	}

	function a9V(player, jk, jl, g2) {
		return a4.qQ(player, 4 * (jl * au.eV + jk)) && a4.qQ(player, 4 * (jl * au.eV + jk + g2 - 1))
	}
	this.cj = function() {
		if (a8g = !1, a8c = .88, a8Z = .5, a8a = 1.8, a8X = Math.floor(.5 * xP), a8Y = Math.floor(.2 * a8X), a8b = aR.jy.a8u < 4 ? 1 + aR.jy.a8u : 2 * (aR.jy.a8u - 1), a8Q = a8P = 0, a8R = new Uint16Array(ez), a8S = new Uint16Array(ez), a8T =
			new Uint16Array(ez), a8U = new Uint16Array(ez), a8V = new Float32Array(ez), a8W = new Float32Array(ez), a8j = new Uint8Array(2 * ez), a8k = new Uint8Array(5 * ez), a8s = new Uint8Array(ez), a8t = new Uint8Array(ez), a8r || (a8h =
				a8h || document.createElement("canvas"), a8v()), a8e = a8d = 0, a8f = 1, aR.jy.jz) {
			var du, a90;
			for (a8w(), gD.font = fx + Math.floor(100) + fy, a90 = 100 / Math.floor(gD.measureText("900 000").width), du = ez - 1; 0 <= du; du--) a8V[du] = Math.min(a90, 2 * a8W[du]);
			a8q = a90, a8p[0] = 100 / (a90 * Math.floor(gD.measureText("5 000 000").width)), a8p[1] = 100 / (a90 * Math.floor(gD.measureText("50 000 000").width)), a8p[2] = 100 / (a90 * Math.floor(gD.measureText("500 000 000").width)), a8p[3] =
				100 / (a90 * Math.floor(gD.measureText("1 000 000 000").width))
		} else a8w();
		! function() {
			var du;
			for (du = ez - 1; 0 <= du; du--) fL[du] < 12 ? (a8R[du] = i6[du] + 1, a8S[du] = i9[du] + 1, a8T[du] = 1, a8U[du] = 1) : (a8R[du] = i6[du], a8S[du] = i9[du] + 1, a8T[du] = 4, a8U[du] = 2);
			if (kN)
				for (du = 0; du < h6; du++) a8T[du] = 0;
			a8l = a3.get(4).width, a8m = a3.get(4).height
		}()
	}, this.a8O = function(f2, wI) {
		wI > 18 * fL[f2] ? (a8t[f2] = 6, a4.yc[f2] = 2 + a4.yc[f2] % 2) : (a8s[f2] = 4, (a4.yc[f2] < 2 || 3 < a4.yc[f2]) && (a4.yc[f2] = 6 + a4.yc[f2] % 2))
	}, this.mF = function(f2, wI) {
		wI > 6 * fL[f2] ? (a8t[f2] = 6, a4.yc[f2] = 4 + a4.yc[f2] % 2) : (a8s[f2] = 4, (a4.yc[f2] < 4 || 5 < a4.yc[f2]) && (a4.yc[f2] = 8 + a4.yc[f2] % 2))
	}, this.resize = function() {
		a8r || (a8v(), a8z(a8i))
	}, this.tp = function() {
		for (var du = 0; du < h6; du++) i5[du] - i6[du] != 3 || i8[du] - i9[du] != 3 ? (a8R[du] = i6[du] + (i5[du] !== i6[du] ? 1 : 0), a8S[du] = i9[du], a8T[du] = 1, a8U[du] = 1) : (a8R[du] = i6[du], a8S[du] = i9[du] + 1, a8T[du] = 4, a8U[du] =
			2)
	}, this.n4 = function(player, fw, a92) {
		player += fw * ez;
		if (0 === fw) return a8j[player] === a92 && 0 < a8k[player] ? void(a8k[player] = 0) : (a8j[player] = a92, void(a8k[player] = b3.xE(a92) ? 255 : 64));
		1 === fw ? (a8k[player] = 64, a8j[player] = a92) : a8k[player] = a92
	}, this.gC = function() {
		a8r ? a8z(gD) : a8g && (1 !== a8f ? (gD.imageSmoothingEnabled = !0, gD.setTransform(a8f, 0, 0, a8f, 0, 0), gD.drawImage(a8h, -a8d / a8f, -a8e / a8f), gD.setTransform(1, 0, 0, 1, 0, 0)) : (gD.imageSmoothingEnabled = !1, gD.drawImage(a8h, -
			a8d, -a8e)))
	}, this.zU = function(gy, h1) {
		a8d += gy, a8e += h1
	}, this.s6 = function(gy, h1) {
		a8.zU(gy, h1)
	}, this.zoom = function(fs, g6, g7) {
		a8f *= fs, a8d = (a8d + g6) * fs - g6, a8e = (a8e + g7) * fs - g7
	}, this.jG = function(wR) {
		return !a8r && (wR ? ++a8o % aR.a0p[aR.jy.a93] == 0 : b7.iV() % aR.a0p[aR.jy.a93] == 0) && (a8o = 0, a8z(a8i), !0)
	}, this.jv = function(du) {
		return a91(du) * a8V[du]
	}, this.a94 = function(player) {
		return a8V[player]
	}, this.iH = function() {
		4 <= ++a8Q && ! function() {
			var du, hk, hu;
			for (a8Q = 0, hu = 4; 1 <= hu; hu--)
				for (hk = iY - 1; 0 <= hk; hk--) du = iZ[hk] + hu * ez, 0 < a8k[du] && a8k[du] < 255 && a8k[du]--;
			if (2 !== jH)
				for (hk = iY - 1; 0 <= hk; hk--) du = iZ[hk], 0 < a8k[du] && a8k[du] < 255 && a8k[du]--
		}();
		for (var ev = Math.floor(.1 * iY), du = a8P + (ev = iY < (ev = ev < 8 ? 8 : ev) ? iY : ev) - 1; a8P <= du; du--) ! function(du) {
			var gO = a91(du) * a8V[du];
			0 < a8T[du] && a9M(du, a8R[du], a8S[du], a8T[du], a8U[du]) ? ! function(du) {
				for (var jk, jl, g2, i2, gr = !1, hu = 0; hu < 8; hu++) {
					if (g2 = a8T[du] + 2, i2 = a8U[du] + 2, g2 > i5[du] - i6[du] + 1 || i2 > i8[du] - i9[du] + 1) return gr;
					if (jk = a8R[du] - 1, jl = a8S[du] - 1, !a9M(du, jk, jl, g2, i2)) return gr;
					a8R[du] = jk, a8S[du] = jl, a8T[du] = g2, a8U[du] = i2, gr = !0
				}
				return gr
			}(du) && function(du, gO) {
				for (var jk, jl, g2, i2, gr = !1, a2c = a8T[du], kY = 1 + Math.floor(.02 * a2c), hu = 1; hu < 5; hu++) {
					if ((g2 = a2c + hu * kY) > i5[du] - i6[du] + 1) return gr;
					if ((i2 = a9S(gO, g2)) > i8[du] - i9[du] + 1) return gr;
					jk = i6[du] + Math.floor(Math.random() * (i5[du] - i6[du] + 2 - g2)), jl = i9[du] + Math.floor(Math.random() * (i8[du] - i9[du] + 2 - i2)), a9M(du, jk, jl, g2, i2) && (a8R[du] = jk, a8S[du] = jl, a8T[du] = g2, a8U[
						du] = i2, gr = !0)
				}
				return gr
			}(du, gO) && a9P(du) : ! function(du, gO) {
				var i2, jk = a8R[du] + 1,
					jl = a8S[du] + 1,
					g2 = a8T[du] - 2;
				for (;;) {
					if (g2 < 1) {
						a8T[du] = 0;
						break
					}
					if (i2 = a9S(gO, g2), a9M(du, jk, jl, g2, i2)) return a8R[du] = jk, a8S[du] = jl, a8T[du] = g2, a8U[du] = i2, 1;
					jk++, jl++, g2 -= 2
				}
				return
			}(du, gO) ? function(du, gO) {
				var jk, jl, g2, i2, hu, kd, hm = i5[du] - i6[du] + 1,
					a9T = Math.floor(.02 * hm);
				for (kd = -6 * (a9T = a9T < 1 ? 1 : a9T), hu = hm; kd <= hu; hu -= a9T)
					if (i2 = a9S(gO, g2 = 0 < hu ? hu : 1), jk = i6[du] + Math.floor(Math.random() * (i5[du] - i6[du] + 2 - g2)), jl = i9[du] + Math.floor(Math.random() * (i8[du] - i9[du] + 2 - i2)), a9M(du, jk, jl, g2, i2)) return a8R[
						du] = jk, a8S[du] = jl, a8T[du] = g2, a8U[du] = i2
			}(du, gO) : a9P(du)
		}(iZ[du % iY]);
		a8P = (a8P + ev) % iY
	}, this.jC = function() {
		var du, f2, gc, gd;
		if (b7.iV() % 4 == 1)
			for (du = iY - 1; 0 <= du; du--) f2 = iZ[du], a4.yc[f2] < 2 || ((gc = Math.max(a8s[f2] - 1, 0)) === (gd = Math.max(a8t[f2] - 1, 0)) ? 0 === gc && (a4.yc[f2] %= 2) : 0 === gd && a4.yc[f2] < 6 && (a4.yc[f2] += 4), a8s[f2] = gc, a8t[
				f2] = gd)
	}, this.vz = function(player) {
		var du = player + 2 * ez,
			dW = a8k[du];
		return 0 < dW && (k.rH(50, player), a8k[du] = 0, 255 === dW)
	}, this.us = function(player) {
		return 255 === a8k[player + 2 * ez]
	}
}

function bs() {
	var ft, a9W;
	this.cj = function() {
		ft = "Abbasid Caliphate;Aceh s;Achaemenid Z;Afsharid z;Aghlabid Emirate;Ahom z;Akkadian Z;Aksumite Z;Akwamu;Alaouite z;Almohad Caliphate;Almoravid z;Angevin Z;Aq Qoyunlu;Armenian Z;Assyria;Ashanti Z;Austrian Z;Austria-Hungary;Ayyubid z;Aztec Z;Aulikara Z;Babylonian Z;Balhae;Banten s;S Banjar;Bamana Z;Bengal s;Benin Z;Kadamba z;Bornu Z;E Brazil;Britannic Z;British Z;British Raj;Bruneian Z;Bukhara Z;Burgundian State;Buyid z;Byzantine Z;Caliphate of Córdoba;Cao Wei;Carthaginian Z;Cebu Rajahnate;Chagatai Khanate;Chalukya z;Chauhan z;Chavín Z;Chenla;Chera z;Chola z;Comanche Z;Congo Free State;Crimean Khanate;Dacian Z;Delhi s;Demak s;Durrani Z;Dutch Z;Egyptian Z;Elamite Z;Exarchate of Africa;Abyssinia;Fatimid Caliphate;First French Z;Frankish Z;Funan;Gallic Z;Gaza Z;Republic of Genoa;German Z;Ghana Z;Ghaznavid z;Ghurid z;Goguryeo;Goryeo;Gorkha Z;Göktürk Khaganate;Golden Horde;S Gowa;Seljuq Z;Gupta Z;Hafsid Y;Han z;Hanseatic League;E Harsha;Hephthalite Z;Hittite Z;Holy Roman Z;Hotak z;Hoysala Z;Hunnic Z;Husainid z;Idrisid z;Ilkhanate;K Israel;K Judah;Inca Z;Italian Z;E Japan;Jin z;Johor Z;Jolof Z;Joseon;Kaabu Z;Kachari Y;Kalmar Union;Kanem Z;Kanva z;Kara-Khanid Khanate;Kazakh Khanate;Khazar Khaganate;Khmer Z;Khilji z;Khwarazmian z;Kievan Rus';Konbaung z;Kong Z;Korean Z;Kushan Z;K Kush;Lakota;Latin Z;Later Lê z;Liao z;Lodi s;Khmer Z;Macedonian Z;Majapahit Z;Mali Z;Malacca Z;Mamluk s;Manchukuo;Maratha Z;Marinid z;Massina Z;Mataram s;Mauretania;Mauryan Z;Median Z;Mlechchha z;Ming z;Mitanni Z;Mongol Z;Mughal Z;Nanda Z;Nguyễn z;North Sea Z;E Nicaea;Numidia;Omani Z;Ottoman Z;Oyo Z;Pagan Z;Pahlavi z;Pala Z;Palmyrene Z;Parthian Z;Pontic Z;Portuguese Z;K Prussia;Ptolemaic Z;Qajar z;Qara Qoyunlu;Qin z;Qing z;Ramnad Sethupathis;Rashidun Caliphate;Rashtrakuta z;Roman Z;Rouran Khaganate;Rozwi Z;Rustamid z;Russian Z;Tsardom of Russia;Saadi z;Safavid z;Saffarid z;Sassanid z;Satavahana z;Samanid Z;Soviet Union;Saudeleur z;Duchy of Savoy;Seleucid Z;Serbian Z;Shu Han;Shang z;Siam Z;Sikh Z;Singhasari;Sokoto Caliphate;Song z;Songhai Z;Spanish Z;Srivijaya Z;Sui z;K Mysore;Shunga Z;S Sulu;Sumer;Sur Z;Swedish Z;Tahirid z;Tang z;Tây Sơn z;S Ternate;E Thessalonica;German Reich;Tibetan Z;Tondo z;S Tidore;Timurid Z;K Tlemcen;E Trebizond;Toltec Z;Toungoo z;Toucouleur Z;Tu'i Tonga Z;Turgesh Khaganate;Umayyad Caliphate;Uyunid Emirate;Uyghur Khaganate;Uzbek Khanate;Vandal Y;Vijayanagara Z;Republic of Venice;Wari Z;Wassoulou Z;Wattasids;Western Roman Z;Eastern Wu;Western Xia z;Xin z;Yuan z;Zand z;Zhou z;Zulu Z;Yugoslavia;Kosovo;Sikkim;Kanem–Bornu Z;Wadai Z;Ethiopian Z;Rozvi Z;Sasanian Z;E Vietnam;Shilluk Y;K Aksum;Gwiriko Y;Toro Y;Malindi Y;K Loango;K Mapungubwe;Ryukyu Y;K Cyprus;K Jerusalem;Garhwal Y;K Nepal;K Cambodia;Champa Y;Hanthawaddy Y;Phayao Y;K Sardinia;K Sicily;K Gwynedd;K Scotland;K Desmond;K Poland;K Hungary;K Croatia;K Bohemia;Albanian Y;K Georgia;K Portugal;Khanate of Sibir;K Romania;Cossack Hetmanate;Duchy of Bouillon;K Ireland;Lordship of Ireland;K Italy;Republic of Pisa;Idrisid z;Almoravid z;Almohad Caliphate;Marinid z;Wattasid z;Saadian z;Republic of Salé;Rif Republic;K Kush;Makuria;Alodia;Ayyubid z;Mamluk s;Egypt Eyalet;K Fazughli;S Sennar;S Darfur;Mahdist State;S Egypt;K Egypt;Emirate of Cyrenaica;K Libya;Republic of Egypt;Republic of the Sudan;United Arab Republic;Libyan Arab Republic;Zirid z;Hafsid z;K Kuku;Regency of Algiers;Gurunsi;Liptako;Tenkodogo;Wogodogo;Yatenga;Bilanga;Bilayanga;Bongandini;Con;Macakoali;Piela;Nungu;K Sine;K Saloum;K Baol;K Cayor;K Waalo;Bundu;Bonoman;Gyaaman;Denkyira;Mankessim Y;K Dahomey;Oyo Z;K Nri;Aro Confederacy;Kwararafa;Biafra;Buganda;Bunyoro;Ankole;Busoga;Tanganyika;Kuba Y;K Luba;K Lunda;Yeke Y;K Ndongo;Kasanje Y;K Matamba;Mbunda Y;Chokwe Y;Kazembe Y;K Butua;Ndebele Y;Mthethwa Z;Bophuthatswana;Ciskei;Transkei;Venda;Rhodesia;Kart z;Nogai Horde;Khanate of Bukhara;Khanate of Khiva;Khamag Mongol;Northern Fujiwara;Kamakura Shogunate;Ashikaga Shogunate;Jaxa;Republic of Ezo;Jiangxi Soviet;Hunan Soviet;Guangzhou Commune;Gojoseon;Alaiye;Beylik of Bafra;Kara Koyunlu;Kars Republic;K Iraq;Arab Federation;Kar-Kiya z;Baduspanids;Marashiyan z;Afrasiyab z;Mihrabanid z;Safavid Iran;Sheikhdom of Kuwait;Bani Khalid Emirate;Emirate of Diriyah;Emirate of Najd;Muscat and Oman;Emirate of Riyadh;S Najd;K Hejaz;Fadhli s;Emirate of Beihan;Emirate of Dhala;S Lahej;Republic of Kuwait;K Cochin;Jaffna Y;Laur Y;Pandya z;Jaunpur s;Jaintia Y;Hyderabad State;Travancore;Udaipur State;Manikya z;Lan Xang;K Vientiane;K Champasak;Lao Issara;K Laos;Pyu States;Ava;Mon Ys;Pegu;K Mrauk U;Taungoo z;Shan States;Arakan;Raktamaritika;Singhanavati;Dvaravati;Ngoenyang;Hariphunchai;Tambralinga;Lavo Y;Langkasuka;Sukhothai Y;S Singora;Ayutthaya Y;Thonburi Y;Lan Na;Pattani Y;Jambi s;Palembang s;S Deli;S Langkat;S Serdang;S Cirebon;K Pajang;K Bali;Bima s;K Larantuka;K Banggai;Luwu;S Bone;Caucasian Albania;Kabardia;Circassia;K Abkhazia;Elisu s;Avar Khanate;Caucasian Imamate;K Imereti;K Kartli;K Kakheti;Crown of Aragon;Emirate of Granada;K Majorca;Crown of Castile;K Haiti;Cocollán;Zapotec Civilization;Mosquito Y;Somoza Regime;Iroquois Confederacy;Cherokee Nation;Vermont Republic;State of Muskogee;K Alo;K Sigave;K Fiji;K Nauru;K Chile;Muisca Confederation;El Stronato;K Chimor;Jungle Republic;Liga Federal;Supreme Junta;Weimar Republic;K Bavaria;Bremen;Frankfurt;Hamburg;K Hanover;Holstein;Lippe;Nassau;Oldenburg;Pomerania;Reuss;Saxe-Altenburg;Saxony;Schleswig;Waldeck;Württemberg;Helvetic Republic;Republic of Florence;Duchy of Urbino;Republic of Cospaia;Duchy of Lucca;Duchy of Mantua;Duchy of Milan;Papal States"
			.split(";");
		var du, hk, a9X = ["K ", " Y", "E ", " Z", " z", " s", "S "],
			a9Y = ["Kingdom of ", " Kingdom", "Empire of ", " Empire", " Dynasty", " Sultanate", "Sultanate of "];
		for (a9W =
			"Pestilent Dominion;Wretched Realm;Damned Province;Corrupt Zone;Cursed Territory;Blight Nation;Haunted Expanse;Malevolent State;Ruined Empire;Contaminated Land;Epidemic Domain;Forsaken District;Abandoned Wasteland;Necrotic Enclave;Tainted Domain;Decayed Principality;Infested Region;Malignant Territory;Toxic Dominion;Ravaged Sector;Ghostly Realm;Plagued Commonwealth;Afflicted State;Desolate Nation;Apocalyptic Zone;Radiated Province;Deathly District;Pestilence Haven;Doom Territory;Malefic Expanse;Abandoned State;Cursed Haven;Corroded Zone;Hauntland;Noxious Nation;Infected Enclave;Ruinous Domain;Wasteland Woe;Rotten Principality;Voided Land;Vile Dominion;Catastrophic Region;Eerie Expanse;Desolation State;Forsaken Outpost;Contagion District;Damaged Province;Abhorrent Sector;Accursed Nation;Doomstruck Land;Radiant Ruin;Deathly Enclave;Malefic Dominion;Plague District;Infected Haven;Corrupt State;Pestilent Territory;Razed Realm;Haunted Wasteland;Toxic Sector;Cursed Dominion;Decaying Province;Forsaken Enclave;Ruinous Region;Malignant Haven;Infested State;Ghostly Nation;Tainted Territory;Damned District;Radiated Dominion;Desolate Expanse;Apocalyptic Land;Death Zone;Wretched State;Malevolent Haven;Plagued Nation;Noxious Domain;Voided Territory;Eerie Sector;Accursed Province;Necrotic District;Doom Haven;Haunt Realm;Rotten Nation;Forsaken Territory;Infected State;Abhorrent Expanse;Malignant Land;Toxic Dominion;Ruined District;Ghostland;Cursed Sector;Radiant Nation"
			.split(";"), du = ft.length - 1; 0 <= du; du--)
			for (hk = a9X.length - 1; 0 <= hk; hk--) ft[du] = ft[du].replace(a9X[hk], a9Y[hk]);
		if (settings.realisticNames) ft = realisticNames;
	}, this.bh = function() {
		var du;
		if (aX.it && aX.iu.a7j)
			for (du = h6; du < ez; du++) k2[du] = aX.iu.a7j[du % pz];
		else(9 === iw ? function() {
			var du, gS = aF.random(),
				ev = ft.length,
				pC = h6 + aA.a9e;
			for (du = pC - 1; h6 <= du; du--) k2[du] = ft[(du + gS) % ev];
			for (ev = a9W.length, du = pC; du < ez; du++) k2[du] = a9W[du % ev]
		} : iy ? function() {
			var du, gS = aF.random();
			for (du = h6; du < ez; du++) k2[du] = ft[(du + gS) % ez]
		} : function() {
			var du, ev = ft.length,
				gS = aF.random();
			for (du = h6; du < ez; du++) k2[du] = ft[(du + gS) % ev]
		})()
	}, this.uA = function() {
		var du, ev, pC, gS;
		if (!iy) {
			for (wW = new Array(h6), ev = h6, du = 0; du < ev; du++) wW[du] = k2[du];
			if (aR.jy.wV) {
				for (pC = ft.length, gS = aF.a9d(), du = 0; du < ev; du++) k2[du] = ft[(du + gS) % pC];
				k2[eq] = wW[eq]
			}
		}
	}
}

function cE() {
	this.a9f = [], this.a9g = [], this.cj = function() {
		this.a9f = [], this.a9g = []
	}, this.iH = function() {
		0 <= this.a9f.length && this.a9h(this.a9f), 0 <= this.a9g.length && this.a9h(this.a9g)
	}, this.a9h = function(e9) {
		for (var hu = -1, du = e9.length - 1; 0 <= du; du--)
			if (e9[du].dV--, e9[du].dV <= 0) {
				hu = du;
				break
			} for (du = hu; 0 <= du; du--) e9.shift()
	}, this.ue = function(id, qh, a9i) {
		return this.a9j(this.a9f, id, qh, a9i)
	}, this.a9k = function(id, qh, a9i) {
		return this.a9j(this.a9g, id, qh, a9i)
	}, this.a9j = function(e9, id, qh, a9i) {
		return ! function(e9, id, qh) {
			var du, pg;
			for (du = qh.length - 1; 0 <= du; du--)
				for (pg = e9.length - 1; 0 <= pg; pg--)
					if (e9[pg].player === qh[du] && id === e9[pg].id) return 1;
			return
		}(e9, id, qh) && (a9i && function(e9, id, qh) {
			var du;
			for (du = qh.length - 1; 0 <= du; du--) e9.push({
				player: qh[du],
				id: id,
				dV: 384
			})
		}(e9, id, qh), !0)
	}
}

function u7(qh) {
	var du;
	for (k2 = new Array(ez), wW = k2, h7 = new Uint8Array(ez), i6 = new Uint16Array(ez), i9 = new Uint16Array(ez), i5 = new Uint16Array(ez), i8 = new Uint16Array(ez), fL = new Uint32Array(ez), qE = new Uint32Array(ez), er = new Uint32Array(ez),
		donationsTracker.reset(), ew = new Array(ez), fD = new Array(ez), fE = new Array(ez), fH = new Array(ez), h8 = new Uint8Array(ez), du = qh.length - 1; 0 <= du; du--) k2[du] = qh[du].name, h8[du] = qh[du].a5X
}

function cC() {
	this.wf = 0, this.qh = null, this.cj = function() {
		this.wf = 0, this.qh = []
	}, this.a9n = function(player) {
		this.qh.push(player), rS++, h8[player] = 2, player === eq && (u.show(!1, !1), t.a1M()), a8.vz(player)
	}, this.a7P = function(player) {
		var du, qh;
		if (2 !== h8[player])
			for (du = (qh = this.qh).length - 1; 0 <= du; du--)
				if (qh[du] === player) return void qh.splice(du, 1)
	}, this.iH = function() {
		iy || (30 === this.wf && 2140 <= b7.iV() && this.a9o(), this.wf = (this.wf + 1) % 60)
	}, this.a9o = function() {
		for (var qh = this.qh, du = qh.length - 1; 0 <= du; du--) ! function(player, hB) {
			!a6.fk(player) || (hB = Math.max(Math.min(100, er[player]), en(hB * er[player], 100))) < 100 || (0 === fD[player].length ? !ap.iG.iH(player) && hX && iJ(player, hB, 0, 0) : (hX ? iU : ic)(player, hB))
		}(qh[du], 12)
	}
}

function uB() {
	for (iY = 0, du = ez - 1; 0 <= du; du--) 0 !== h7[du] && iY++;
	iZ = new Uint16Array(iY);
	for (var ev = 0, du = 0; du < ez; du++) 0 !== h7[du] && (iZ[ev++] = du)
}

function jB() {
	a9q(), a9r()
}

function a9r() {
	for (var du = iY - 1; 0 <= du; du--) 0 === h7[iZ[du]] && a9s(du)
}

function a9s(du) {
	iY--;
	for (var hk = du; hk < iY; hk++) iZ[hk] = iZ[hk + 1]
}

function a9q() {
	for (var gg, du = iY - 1; 0 <= du; du--) fL[iZ[du]] <= en(qE[iZ[du]], 4) ? fL[iZ[du]] <= 1e3 && (2 !== h7[iZ[du]] || 0 === fL[iZ[du]]) && a79(iZ[du]) : fL[iZ[du]] >= qE[iZ[du]] ? qE[iZ[du]] = fL[iZ[du]] : (gg = en(qE[iZ[du]] - fL[iZ[du]], 1e3),
		qE[iZ[du]] -= gg < 1 ? 1 : gg)
}

function mS() {
	for (var a70 = 0, du = iY - 1; 0 <= du; du--) a70 += er[iZ[du]];
	return a70 % 4096
}

function bt() {
	var a9t;
	this.j1 = null, this.cj = function() {
		a9t = [], 9 === iw && this.a9u()
	}, this.a9u = function() {
		var du, a9v = [50, 74, 95, 150, 190, 333];
		if (this.a9e = 0, this.j1 = [0, 0, 0, 0, 0, 0], h6 <= a9v[0]) this.j1[0] = Math.max(an.fa(h6 * (512 - h6), a9v[0]), 13), is = this.j1[0];
		else
			for (is = ez - h6, du = 1; du < 6; du++)
				if (h6 <= a9v[du]) {
					this.j1[du - 1] = 512 - a9v[du - 1] - en((512 - a9v[du - 1]) * (h6 - a9v[du - 1]), a9v[du] - a9v[du - 1]), this.j1[du] = 512 - h6 - this.j1[du - 1];
					break
				} pz = h6 + is
	}, this.a7O = function(player) {
		a9t.push({
			player: player,
			wF: 14 + aF.hn(20)
		})
	}, this.iH = function() {
		var du;
		if (9 === iw)
			for (du = a9t.length - 1; 0 <= du; du--) --a9t[du].wF <= 0 && (a8.n4(a9t[du].player, 0, 46), a9t.splice(du))
	}
}

function ca() {
	function aA2(du) {
		return du >= au.aA7() && du !== au.z2()
	}

	function aA0(du) {
		return 1 !== du && !aA2(du) && du !== au.z2()
	}
	this.eV = 0, this.eW = 0, this.pP = null, this.pL = null, this.pM = null, this.pQ = null, this.pn = 0, this.a4w = 0, this.pN = !1, this.a7n = 20, this.pO = new a9x, this.iu = new a9y, this.cj = function() {
		this.iu.cj()
	}, this.bh = function(a9z, a50) {
		((a9z %= this.a7n) !== this.pn || aA0(this.pn) && a50 !== this.a4w) && (this.pN = !1, this.pO.a56(), aF.u6(a9z), this.pn = a9z, this.a4w = a50, aA0(a9z) && (au.iu.pm[a9z].aA1 = a50), aA2(this.pn) ? aA3() : (a9z = au.iu.pm[this.pn], this
			.eV = a9z.g2, this.eW = a9z.i2, aF.u6(a9z.aA1), aC.bh([this.eV, this.eW, a9z.k6, a9z.k3]), aA4(), aB.aA5(), aC.aA6()))
	}, this.aA7 = function() {
		return 10
	}, this.aA8 = function(du) {
		return 3 === du || 7 === du || 9 === du || du === this.z2()
	}, this.aA9 = function(du) {
		return 2 === du || 7 === du || 9 === du
	}, this.aAA = function(du) {
		return 1 === du
	}, this.z2 = function() {
		return this.a7n
	}
}

function a9x() {
	function aAK() {
		au.pO.iH()
	}

	function aAP(f2, aAO) {
		0 < aAO && (au.pQ[f2] += aAO, au.pQ[f2 + 1] += aAO, au.pQ[f2 + 2] += aAO)
	}

	function uo(f2) {
		return au.pQ[f2 + 2] > au.pQ[f2] && au.pQ[f2 + 2] > au.pQ[f2 + 1]
	}
	this.zh = -1, this.dQ = 0, this.aAB = 0, this.aAC = 8, this.aAD = 32, this.aAE = 8, this.aAF = 32, this.aAG = [0, 0], this.yc = [0, 0, 0, 0], this.hP = null, this.aAH = !0, this.aAI = !1, this.a56 = function() {
		-1 !== this.zh && clearTimeout(this.zh), this.zh = -1, this.hP = null, aC.aA6()
	}, this.cj = function() {
		7 === x.sg() || this.aAI || (this.aAH = !0, this.dQ = 0, this.aAB = 1, this.aAG = [au.iu.pm[au.pn].pl[0], au.iu.pm[au.pn].po[0]], this.yc = [au.iu.pm[au.pn].aAJ[3], au.iu.pm[au.pn].aAJ[4], au.iu.pm[au.pn].aAJ[5], au.iu.pm[au.pn].aAJ[6]],
			this.aAC = au.iu.pm[au.pn].aAJ[7], this.aAD = au.iu.pm[au.pn].aAJ[8], this.aAE = au.iu.pm[au.pn].aAJ[9], this.aAF = au.iu.pm[au.pn].aAJ[10], this.aAH ? this.zh = setTimeout(aAK, 16) : this.iH())
	}, this.iH = function() {
		if (8 === x.sg() && f.kK()) this.zh = setTimeout(aAK, 16);
		else {
			if (0 === this.dQ) {
				var aA1 = aF.a9d();
				if (aF.u6(au.iu.pm[au.pn].aAJ[2]), aC.bh([au.eV, au.eW, au.iu.pm[au.pn].aAJ[0], au.iu.pm[au.pn].aAJ[1]]), aF.u6(aA1), this.hP = aC.aAL(), this.dQ++, this.aAH) return void(this.zh = setTimeout(aAK, 16))
			}
			for (var f2, gi, aA1 = this.aAH ? 10 : 1e6, aA1 = au.eW - this.aAB - 1 < aA1 ? au.eW - this.aAB - 1 : aA1, qB = this.aAB + aA1, jl = this.aAB; jl < qB; jl++)
				for (var jk = 1; jk < au.eV - 1; jk++) uo(f2 = 4 * (gi = jk + jl * au.eV)) ? this.aAM(f2, gi, 1) : (this.aAM(f2, gi, 0), function(jk, jl, f2) {
					return 1 < jk && uo(f2 - 4) || jk < au.eV - 2 && uo(f2 + 4) || 1 < jl && uo(f2 - 4 * au.eV) || jl < au.eW - 2 && uo(f2 + 4 * au.eV)
				}(jk, jl, f2) && this.aAN(jk, jl));
			this.aAB = qB, this.aAB >= au.eW - 1 ? (au.pL.putImageData(au.pM, 0, 0, 1, 1, au.eV - 2, au.eW - 2), b7.d4 = !0, this.a56()) : this.aAH && (this.zh = setTimeout(aAK, 16))
		}
	}, this.aAM = function(f2, gi, fw) {
		aAP(f2, Math.floor(this.aAG[fw] + this.yc[fw] * this.hP[gi] / 1e4) - au.pQ[f2])
	}, this.aAQ = function(f2, gS, aAR, fw, yc) {
		aAP(f2, Math.floor(this.aAG[fw] + (1 - gS / aAR) * yc) - au.pQ[f2])
	}, this.aAN = function(g6, g7) {
		for (var f2, gS, aAR, pq = g6 - this.aAD, pr = g7 - this.aAD, qC = g6 + this.aAD, qB = g7 + this.aAD, pq = pq < 1 ? 1 : pq, qC = qC > au.eV - 2 ? au.eV - 2 : qC, qB = qB > au.eW - 2 ? au.eW - 2 : qB, jl = pr < 1 ? 1 : pr; jl <= qB; jl++)
			for (var jk = pq; jk <= qC; jk++) uo(f2 = 4 * (jk + jl * au.eV)) ? (aAR = this.aAC + (this.aAD - this.aAC) * this.hP[jk + au.eV * jl] / 1e4, Math.abs(g6 - jk) > aAR || Math.abs(g7 - jl) > aAR || aAR <= (gS = Math.sqrt((g6 - jk) * (
				g6 - jk) + (g7 - jl) * (g7 - jl))) || this.aAQ(f2, gS, aAR, 1, this.yc[3])) : (aAR = this.aAE + (this.aAF - this.aAE) * this.hP[jk + au.eV * jl] / 1e4, Math.abs(g6 - jk) > aAR || Math.abs(g7 - jl) > aAR || aAR <= (gS = Math
				.sqrt((g6 - jk) * (g6 - jk) + (g7 - jl) * (g7 - jl))) || this.aAQ(f2, gS, aAR, 0, this.yc[2]))
	}
}

function aA4() {
	2 === au.pn ? aAS([256], [256], [0, 205, 256], [500, 500, 0], [0, 0, 0]) : 7 === au.pn ? aAS([512], [512], [0, 380, 512], [500, 500, 0], [0, 0, 0]) : 8 === au.pn ? aAS([410], [410], [0, 120, 210], [0, 80, 640], [0, 0, 0]) : 9 === au.pn && aAS([
		512
	], [512], [0, 70, 180, 200, 290, 420, 512], [500, 500, 0, 0, 500, 500, 0], [0, 0, 0, 0, 0, 0, 0])
}

function aAS(aAT, aAU, aAV, aAW, aAX) {
	for (var jk, jl, aAZ, aAa, fs, aAb, gx = aAT.length - 1, aAY = au.eV + au.eW, ev = (aAY *= aAY, aAV.length), du = ev - 1; 0 <= du; du--) aAV[du] *= aAV[du];
	var aAc = new Array(ev),
		aAd = new Array(ev),
		aAe = new Array(ev),
		e0 = aC.aAL();
	if (void 0 === aAX)
		for (aAX = new Array(ev), du = ev - 1; 0 <= du; du--) aAX[du] = 0;
	for (du = 1; du < ev; du++) aAc[du] = aAV[du] - aAV[du - 1], aAd[du] = aAW[du] - aAW[du - 1], aAe[du] = aAX[du] - aAX[du - 1];
	for (jk = au.eV - 1; 0 <= jk; jk--)
		for (jl = au.eW - 1; 0 <= jl; jl--) {
			for (aAZ = aAY, du = gx; 0 <= du; du--) aAZ = (aAa = (jk - aAT[du]) * (jk - aAT[du]) + (jl - aAU[du]) * (jl - aAU[du])) < aAZ ? aAa : aAZ;
			for (fs = aAW[ev - 1], aAb = aAX[ev - 1], du = 1; du < ev; du++)
				if (aAZ < aAV[du]) {
					fs = aAW[du - 1] + a6f((aAZ - aAV[du - 1]) * aAd[du], aAc[du]), aAb = aAX[du - 1] + a6f((aAZ - aAV[du - 1]) * aAe[du], aAc[du]);
					break
				} aAf(au.eV * jl + jk, fs, aAb, e0)
		}
}

function aAf(fw, fs, aAb, e0) {
	fs < 500 ? e0[fw] = en(e0[fw] * fs * 2, 1e3) : 500 < fs && (e0[fw] += en(2 * (1e4 - e0[fw]) * (fs - 500), 1e3)), e0[fw] += en(aAb * (10 * fs - e0[fw]), 1e3)
}

function bu() {
	var aAg;
	this.wM = 0, this.wN = 0, this.wP = 0, this.wQ = 0, this.cj = function() {
		(aAg = new Array(au.aA7()))[0] = {
			g2: [0, 5e3, 8e3, 1e4],
			gS: [220, 250, 255, 220],
			tE: [190, 220, 0, 0],
			hu: [170, 200, 0, 0]
		}, aAg[1] = {
			g2: [0, 4e3, 5e3, 6e3, 1e4],
			gS: [25, 0, 100, 0, 25],
			tE: [25, 0, 0, 0, 25],
			hu: [25, 0, 0, 0, 25]
		}, aAg[2] = {
			g2: [0, 500, 2500, 2999, 3e3, 3200, 4200, 5200, 5700, 8800, 1e4],
			gS: [15, 15, 70, 40, 48, 48, 252, 40, 40, 20, 30],
			tE: [80, 80, 190, 90, 46, 46, 248, 180, 180, 90, 140],
			hu: [120, 120, 220, 110, 37, 37, 217, 10, 10, 10, 10]
		}, aAg[3] = {
			g2: [0, 400, 1800, 2e3, 3200, 4500, 6e3, 7700, 8500, 9500, 1e4],
			gS: [10, 10, 20, 10, 30, 10, 16, 40, 55, 230, 230],
			tE: [10, 10, 40, 50, 100, 40, 80, 120, 55, 230, 230],
			hu: [80, 80, 200, 10, 60, 10, 16, 40, 55, 230, 230]
		}, aAg[4] = {
			g2: [0, 300, 1400, 1700, 3e3, 4e3, 1e4],
			gS: [10, 10, 20, 10, 10, 170, 212],
			tE: [20, 20, 60, 100, 100, 110, 170],
			hu: [70, 70, 160, 30, 30, 60, 120]
		}, aAg[5] = {
			g2: [0, 1e3, 3e3, 3500, 4e3, 4500, 7e3, 7500, 8e3, 1e4],
			gS: [10, 10, 20, 10, 5, 10, 20, 5, 20, 25],
			tE: [30, 30, 50, 100, 30, 100, 140, 60, 140, 200],
			hu: [80, 80, 200, 10, 5, 10, 20, 5, 20, 25]
		}, aAg[6] = {
			g2: [0, 700, 2650, 3200, 5e3, 8e3, 1e4],
			gS: [10, 10, 60, 255, 255, 200, 200],
			tE: [10, 10, 60, 255, 255, 200, 200],
			hu: [80, 80, 255, 255, 255, 200, 200]
		}, aAg[7] = {
			g2: [0, 400, 1999, 2e3, 3200, 4e3, 4700, 5500, 6500, 9500, 1e4],
			gS: [10, 10, 80, 255, 255, 55, 6, 70, 20, 155, 255],
			tE: [10, 10, 90, 245, 245, 170, 80, 190, 20, 155, 255],
			hu: [80, 80, 255, 235, 235, 55, 26, 10, 20, 155, 255]
		}, aAg[8] = {
			g2: [0, 700, 1300, 1900, 1901, 2500, 3400, 6e3, 1e4],
			gS: [25, 30, 30, 30, 255, 255, 30, 40, 20],
			tE: [25, 30, 150, 150, 245, 245, 80, 150, 70],
			hu: [60, 170, 170, 170, 235, 235, 30, 40, 40]
		}, aAg[9] = {
			g2: [0, 400, 2009, 2010, 3300, 4e3, 5200, 6500, 8e3, 9500, 1e4],
			gS: [10, 10, 80, 255, 255, 55, 23, 36, 20, 155, 255],
			tE: [10, 10, 90, 245, 245, 170, 60, 160, 20, 155, 255],
			hu: [80, 80, 255, 235, 235, 55, 9, 72, 20, 155, 255]
		}
	}, this.aA5 = function() {
		var du, hk, eA, gM = function() {
				var gM;
				return au.pP = document.createElement("canvas"), au.pP.width = au.eV, au.pP.height = au.eW, au.pL = au.pP.getContext("2d", {
					alpha: !1
				}), gM = au.pL.getImageData(0, 0, au.eV, au.eW), au.pQ = gM.data, gM
			}(),
			g2 = aAg[au.pn].g2,
			gS = aAg[au.pn].gS,
			tE = aAg[au.pn].tE,
			hu = aAg[au.pn].hu,
			e0 = aC.aAL(),
			ev = g2.length - 2,
			aAk = new Array(1 + ev),
			aAl = new Array(1 + ev),
			aAm = new Array(1 + ev),
			aAn = new Array(1 + ev);
		for (hk = ev; 0 <= hk; hk--) aAk[hk] = g2[hk + 1] - g2[hk], aAl[hk] = gS[hk + 1] - gS[hk], aAm[hk] = tE[hk + 1] - tE[hk], aAn[hk] = hu[hk + 1] - hu[hk];
		for (du = au.eV * au.eW - 1; 0 <= du; du--)
			for (hk = ev; 0 <= hk; hk--)
				if (e0[du] >= g2[hk]) {
					eA = e0[du] - g2[hk], au.pQ[4 * du] = gS[hk] + a6f(aAl[hk] * eA, aAk[hk]), au.pQ[4 * du + 1] = tE[hk] + a6f(aAm[hk] * eA, aAk[hk]), au.pQ[4 * du + 2] = hu[hk] + a6f(aAn[hk] * eA, aAk[hk]), au.pQ[4 * du + 3] = 255;
					break
				} au.pL.putImageData(gM, 0, 0), au.aAA(au.pn) && a3.g0() && au.aAA(au.pn) && (gM = a3.uV("arena"), au.pL.save(), au.pL.globalAlpha = 1 === au.pn ? .1 : 1, au.pL.imageSmoothingEnabled = !0, au.pL.scale(2.8, 2.8), au.pL.drawImage(
				gM, Math.floor((au.eV / 2.8 - gM.width) / 2), Math.floor(.5 * au.eW / 2.8 - gM.height / 2)), au.pL.restore(), gM = a3.uV("territorial.io"), au.pL.save(), au.pL.globalAlpha = 1 === au.pn ? .1 : 1, au.pL
			.imageSmoothingEnabled = !0, au.pL.scale(.87, .87), au.pL.drawImage(gM, Math.floor(.745 * (au.eV / .87 - gM.width)), Math.floor(.422 * au.eW / .87 - gM.height / 2)), au.pL.restore()), au.pN = !0, b7.d4 = !0
	}, this.u9 = function() {
		for (var f2, jk, jl, aAq, aAr, eC, wN = 0, g2 = au.eV, i2 = au.eW, eA = g2 * i2 * 4, aAs = a1s, aAt = au.pQ, du = g2 - 1; 0 <= du; du--) aAs[(f2 = du << 2) + 2] = aAs[eA - f2 - 2] = 3;
		for (eA = 4 * g2, du = i2 - 1; 0 <= du; du--) aAs[(f2 = du * eA) + 2] = aAs[f2 + eA - 2] = 3;
		for (aAq = g2 - 1, aAr = i2 - 1, jl = 1; jl < aAr; jl++)
			for (eA = jl * g2, jk = 1; jk < aAq; jk++) eC = 1 - (aAt[(f2 = eA + jk << 2) + 2] > aAt[f2 + 1] && aAt[f2 + 2] > aAt[f2]), aAs[f2 + 2] = 2 - eC, wN += eC;
		this.wM = (g2 - 2) * (i2 - 2), this.wQ = 0, au.aA8(au.pn) && function() {
			var f2, jk, jl, eA, aAs = a1s,
				aAt = au.pQ,
				g2 = au.eV,
				aAq = g2 - 1,
				aAr = au.eW - 1,
				wF = 0;
			for (jl = 1; jl < aAr; jl++)
				for (eA = jl * g2, jk = 1; jk < aAq; jk++) aAt[f2 = eA + jk << 2] === aAt[1 + f2] && aAt[f2] === aAt[2 + f2] && (wF++, aAs[2 + f2] = 3);
			aB.wQ = wF
		}(), this.wN = tt = wN - this.wQ, this.wP = this.wM - this.wN - this.wQ
	}
}

function aA3() {
	var dd, aAv = au.aA7();
	au.pn === aAv ? dd =
		"DYDz2ESNu-0UYCCrS9c3pBUrKHc94BhIBhIJpIIBnMIAAIrKSSpKABmgf9e7X7ecX-5P0baOy191XXX7eegf9mcfUrrxrKppppKpKSrzUMMMSKKKrJcXcXcmgcXnKIKBmnCIJonCKrrSrrSSxSS9XcJnBe9XemmWXeX99chMIAEprrSrrtbrxIrMKBn9eBcecX9X7f99X90e577VX1VcOWX16XX7X999cX7eWyXXccVVX6rUSrrwUrlzpbbrrU6xzztzxzrztzbaOtaOa5-0WV-77e-9119HcXXZecccceXXX7ce9Xcce9e9meeVof919ee9Wzy5XeXYS9KBcXee_He6ce1ee0zxzta5UaX99c1mXcXhEJp9cNHWcTN9BcnAzJoorIBe0c--nIJoonSIBe-OX-NNOXWbcBgzIHX9xHzS9mcCSI9-nBrrorK9VcP-jHe9_BhxzKHcWC9mZp9-3n9fBnS970a6zs7egrIAAIRUKocXX9gx9npKaUxBppABe5OdHpBe-AC9-17TOWABpKI9-7JmnC6zGtxIBmen9egp6aUlyOzbrbbqUzxHXgjKKBc-ZehlxoeeoxObonox9XonAUbzS9efBdCAArHmjISBhEJnAofBUIJgrpocXxIBUoxHVmnBmmXAExoUxABmdAIBgnBonIAC6oxHVgfMHcXcUXAAGxIBgfxJch9c3enCMzSBe9eXomxHeBgmeCSBgpKMp9hzHfIEzHnArSxHX7pSrUHcnCMrUpSa5UIonABrSBccnBopJttzbxpBonHXpIEKMrMSrxpKxzUzltyUtaTOaOaObaT5UzNTOV0c116rMMKSKrxIKpJpKMSKMGxISCrKMSpKMKrSpSpI9xp9_pMMMMSBoxSryTUUxa5P7-0ttbWzzzxzaN5-NOWVN--0Wa5-0X-0VNVN7TOzaOWzL0bbX0y7NN5Ua17V111749c79e1c-V-----Ow7--N57-OzaN0ba156byNNT6q5OzWaT55-OsOX1777Oa55-5T5UX16tzUOyUtzrpzUrSKKSSAoemnKCIAIICI9KHn9CKBhCSHgenSAJnIJxSMMKKSSpKoopKKHpSoorSzxpWxMS-UKISaOxMOxttyOzy5OzbbtyTOzbtaUxyUyTT6porUrSztzzMSp9eceoogeZp9ZxJx9geeeXe9eZgeC9gegemp9gmpKMSonSxKrrbaUMIKJpMKKKpIACBmeccV71XX7V1mmmmhCCCKJompKKJpMKSKSKpKMJpKBeeceenKpzHnBnBmceee-X1117ememfBn9mfCBmgemf9mfBmf9xromcec7Us8He0u99cWtbc-PeCCS9VecZnBnBemfBn9X9c6aOXA997Y99755VXc6tXXmV5Os-ObVN0yN0bzaT-7ec7N70Wa-OV-5eggnHon9f9efCBpMzop97epCKIpSIBpKrrSKKIKKMKMJehzKKErJeABnIAJc717f9eBnAJzrHe7V9d9ef9gmopKUKC9gmcV6tX73eCIJoonIBnBnBgnCHgjJeZfA9megeegfKCICCJnIA9meZf9mfIEMof9XceXe97X-59XdCIKKpKKCJoeVcf97mZmVVV199YJmX7gceY9gpEOxMMJecrSSGzOxSrxprSxzJzUopSrIxKBpUMIpMprSropEMHnBrpprK91AJpJpIICpBopICCJonKBn9mcme9VcX9ee7X7e9ece9Xe19XcX91Xee9Xcce9VVVccefAAABe7emhBnSSKMSIJhCIJpKJppCKKIIIICJgpIBpAIHpBcoooonIKLObpBnKlzrKIKCJpCJpBnBpUzrrxpxSbbwUxzUprpppppJppMMIrrSSRUbWsOwUzUltbzrxzUzSzUbrrTTUUrSbbV6WbaTOzxzyN5TN-T5TOxbtts71-X-70V0sOWsObbaT0sTObw70tbbzbxbzzyOtyUtbyUaOV1-N0cVN-50aOtza6tzlxzUxSrzUzSSxUSzzOzzs5OyOtyOyUztyObaNOtaUrUxrrUSrrUrMSJrSIMSpKISzKUSpSrSSrzSMMxMSrMSpSrUzSSzzrTUMSpprSzMSzUxSSIEUSrzrUSpMKKxpKrKMKBmmrIKBgpKrzs6VOsUa--5ObzyN77-7X7e970V-5Oa5ObzxSxrzzSrKMUw-OV17X7X1X99X97X9X99cXXXXX977OaOVXeeeeecX7cX7X7X177-7-X-71-7XX97X97cX7VVV1--VObs970cVObtzbtyObrzxSomdKKSSMKqTN5NN0xrMIM5UrKKKpEKrSMSMprSrxMMUzrzrzSrSrSrHXenOtxrrxrxzSrrSrUrrSrSxMSxxKJpKKKJnKKrKIUUSrSrKKzKxKrSrSwUxIBnrxpSSpUzyOzzzzyUSxzRUpCBee7ecXce89omegpIBrpxzSrMJnKrMSFT0tbrMKxKL0VObxprSSlXV-11-c-X-WxzxFUaPcX777OzztzrSrMV-V75X96zzMKrUa9e-7V17gc9XeV90Bf957cVOzrMOX17X7X-X7X7V-N-6aUxCKzUUKprcX-UzSrN17WzrxrNX7ecV17WzzbaOtbxraObrOxrbxwUxpUzrzraOy5OVOWtzyOzzxbzVNXccXcXcX1-V197V-ec5Oy5N1--555UyN-N1---VOWX0Wtcc0aUMMyOs----Zc5-TOtsOWX7c0xzLN-NWbyOyUyUzrbxJe9gfTUxAMxrxzlbzbzbq5UKrJnAABnAAICETUtxSrzrpIpKIUSxraOaOVNTObzWa5NOtxxyOyOc-5A9YBmnBfHceX7-XXcX9e9Y9e5OzUbxSyVUX5OcUa1-UMqNNUbyOtsUWtWbWaObtzbyUWy6bzpJmoh9nIUI99oghSUzrrrSHeHohKCJgrKJemgcrS9nry6xSrUMStxzUSzqUrbrUxUSxxrrprUU6zSrbrtzUSUSzxMKxSMprMKIIIoonIBmohAIAHgf9eHeemfI9nA9mf9c9n9ZeXc9d9n9ccX7VZmoceeHVX1Zn9meZegegegfBhABehABonAHnABhCIBemee9eBfBeecgeohCUxzUbzxI9egegfAUUrHmegemecWcfCUp9meX9Beeef9onrSpAAKKKIyOzyUzJnBjSrxSSIBhMSHgcVYKxBmnzrROzpzxzSKKCKUzKBnoUzzbzpJmegfzyUzFObyUzrrzpKUSlzry6sUyUVN-7NOzbzzlzrzUrUSrrURUxzbzsTUsUWts5NOWa5ObzrUxrtyOWWaOzMSJnIAIprMJorKMIrSKMKKpUKCBonKMJnCJpCIKIKMJmpKIMKJpCJpBxBonHomoemmegnHf9f9cX7ce99emecgn9h9eA9nCHgfBnAIBfHh9eXXce9emec7f9ec1me89eeceme89fHeemX77-ceeeemeX9X9eeecV-V9e9Xe7e9eefBnBeefBfHmnBnBnKBpIEpKxMSKJnBpBnBnBmgmeeX9cXXVcX7Xce1eXcXe7ee9eXeeeX9X7V7V77V--XcXee7ec7X9eXXceX9f9eeee997X9Ve7Zee7WaX5X2Be-cee17X--0tsUbtaT0ta5-Oc--7Xe-X7--OVUtbVT--QA9nBmcXV--97X9ememggnBecJceeXme-cXdABeXeX97cnHgeeI9IA9XcVX7eX99e9e9mgeXeXemmceZmXe9ceXemXmggf9mmnAI9X1eIHcXfBghBmf9BemcX9Y9Ve9--JmZeccXA9Xd9cX9VXVVc7-V-Xee_BnJhIIBnJnBmohBgohBcmmf9eHf99Hf9HmommmmV5N-MvxppxrIICWzsOxX--OV5s0i1mopMKppzTOaN-0XXceV--0lJ7-90mzBlV2N7tRof9JqUsOaW7c8bwrrJchpK9-X7PBfHjKogcP0Jd92SMUwUlxMSErHegnrlxI9X7cY99e7hSzxpxSIIUHozogmgecYIExxxrrrKpKrSrMMrrlxtyUtxblxUyTUbyUUSaUy6Wzttbbc5N5N7V7XWaT7V6aZeVWsV9nIA9X2BmcWc7ooc--f9IBomV-0cnICBeXgn90Wc5TOa7-1-5cX---d11---esD---m8D-1VvAYqV-92glC5--NEEiqV-7Hsjk014I4wognBxwOs0Wc-D4y4gcT--0Y8X-0WalAk--0pHX-1Wsy6EV-a7EDhCBtaT9--X3IIV--_VJV0Ndepmzq1-0XeJbD-5XhvrCqTe-07iCnpteV-7iejk-iAtCxEIrrX71-2smknnEUUpze-e-c-1BtMB--2Kbq--YMmzV-sqPmrF7--Culc-HCwyxxcV-DEWXhte-DZ7mzorSr56eX170LG-rUSrSItzOueVc93c-5ZH-rrRP9-2d613nHdRUR6kP7-CZVZUEKUyUe91e-2ZYhnTPV-t8OMny7-1HZrT-DZf16A9mjFUzlsV--Hh_N-1HlyB-CZhCrSpzrkX7cX-2ZibAr-VMdC8brSrzUxSSIBxpHX17c8CrJe7rrUIpSrUxxzSrMIMOs5OVV7X7X7977V-7P19Xcce--8DNHk-LIcPSpN7-0ODtgnMN1-7Zz5USxyX9c--J2As-9J2CSu-08FHSrR7V-0G5xV-OH5vqV-0LEoV0OLiAnMN70D_f4UKIBnSBgzSrSxSSMSxpSpppzc-5TTUMbV716s117X1Xcce-cXXHcX--0Rs7V3dS04nKonpSSkV7----TMGPxrS-V7--MN-c0HMYnBnrIAIrK-OWV75V-tTEHotV-qMoqSMUUbe9HXV-mNcawnr6xtcVe-3aNiUIq1-6aOwMISlc1-6aSe6rROec-8ac9fISzuX-V1tf-1mnBrlWaN-NajMY9ggeoopCTTTTN6aN1HdgkXoohABnK9n9KJmpogeV-0XJenppSrUzJgghomhp9VnxIAAzOxWbbrIBnJmenBegozlWyObxIKBonIGaOVT50xSk6xJpEpIHnBonBoptxpr56xrzzbonCBnCMMSonzxJmopCIJomX7mceHcV7nJxSABhrbxEKCIJhAA9HgenABrUMbqUpSUrprSrbzzp9hABeXce9YAHcoomnBmmnBmmnpzaTTUrzzMpzWWblbyUUSrUrxbbzzblxrUUbrzSrtztzw6btV19ceWXWzq0aU6aTOta0a0V5777Xce7nA97VOa0X-17VUVV0V17-17X7V7-V----1-V-VcX9A9cWbbzyV-U5T5TOa5NNOaOV1Xe9ce99mZee5OtcWbaTTTTTOWe9ZeXcmcXVV38gtRnCMzSw1X6VcV08hu4rq9--tiGRrac-1Qfbg-dax4zrrIKoeBxErUlzSGbs0VP3eXX97XV-9R0KCsV1OlXjprrP7X7-HRQsCpVc2TRgLxJrKBeKKJe7BhIKKBlwOaUrNTUsNNNcNP91V---PS6VgopVN-LbHRrK999ezrxxoy5Tc7-0bJGjF--6Spy-5bU7rSbuXV4tsIYpKSSrSp50aX-177e-2baNMC5-2Otd7nHrpOba7cV2tv2dnICxz-Uk7cc0mUIkRnBpCBpCIJOWa0VNOtc-19UQnBeegmnIISxJns56zaOWtu7TV--URWN--VDLc-eVE7zSrUX7Xc-5WM4BN1DWTIggpBnEKKKESCWV5T5Wa-N0a9VsP6YRn9cmY9JggoggzUKHfA9XmcP9XZfIJhronABfISpxrUrrI9ABnBggrxxoe9fHmeBdCDUUrHf9orUogrzzJfUU6zUzbbbzrty6brbrxxz57OtsN5OsN5V5VT5V57N56yTUtsNN1cNNVV5VNeeeZeWtu77-XX-KgxCqWVV-P8w5qV-uAjtz5c15XwhBooopBonIKKJNN5-N5-6WVN-8ckmzArUOVeV-uDoWxNV--YoA7-TYoYRoxa57-1_P1T--8NKD-9dNS2ACAUta---dQzr-DPM79mmgcpI9chMKCppxxxrSzIbXc0aT1WVOxk7-N-9c0eauZgfAKrSrrSla-5-7n9-V1eVE3nKUwNVcV0eWZinCF5N0TcbkCMSrzr5OVPXCA9VXV-1b0uV0ezUBxUsXc--mhTc--n9_c1DnTIxCCSMKC9eCKClsT5OsN-V7NNV6QJcYxzUSxzSwUa7X9I99Xd9X-BhW8EE6rUw7ceV6fXkApBmf9f9hKGaOWzzzObV1V-PuipRpJ5--6iiarprP77--DrhL-0iv-fN-7jNKjExzXcc-Y1kshKK-5-V-wF2umWs-03EWs-03_Ms-23gdy-qlmyACJmcgfBnCIIrKpICUSIprUa0VOV5N5---V5---wRnFru7-E6kMClX-4lwIAzq9c-A7r-z5V7gdk8monBgfCCCElzbzxsN995-T5-KgiSunBnABmeeIHprrKJxpIISKICJpKprUzOcOzzUTN---0V--50aN1-1-PV7XX-SnCeY9f9mnUSSKzMtaOWa9VX--bBy1gzSxX-e-4nFNEAqTc-6C7Wgs-EC_DBjN-0nVb2N-3n_EYByN--nfWnV1Bx8ZorUaV9-CnqgbKISrNN9-9-8o5aACrSVWXV-C0gPk-jFRwSM6rsW9VV3h23TmfBjOxMUtaX17-6GYfE-0UHSjwfEzbxpUUq17ZcXeV-h8rqr--3odX6MF--8ogzvMJrN--V1xAI4npKwT7cV0Xp-Yf9nBeehKMKrzzSxrSxrUSzzSxrSMzSzzV-T-7V10Wa6VOWVT1mmeeegn9eeeXmcX97V-IJGnCr1--2JVvD-Bp7gzSxw6aeZcV0hHX5merts-EJjUhq7-2pGMvBtV-hJmVz1-1pJofqV-0KQ3c-0KztN-0L5k7-6LYvE--ILYxhTNc-0LZ57-ALu1CaV-4SIqV-hSQ3na--KpjX--ppknVESTPknBgmgn9f9f9onBmenSpMGzxbtbzbaOV6zbX9-NObWV-4TmmV3SToLnBnJnST5Oa-1-0px0YD-0pylvD--L3Ge--q54IV2CWmWnUUz5Pcec-nO-URhBoUy6VX-1qFuQGc-MOcagpR---CcERs-0PQUc3MPs8gehClzSzbzzUzxMr6tyUzzbzaTP0HgmcVXegeeeXeh9eX7e-JqqUEKIMpzz5T7cXX97-bRBpSKoT5X7--M4g1-grMIbBecemgfMxUpzMzObtu7V0zrrq7e9eV-MTaFhOy9VfLnt2-9-17117VcX1-1X97cVXX9177V-VXV9-WaOSMSSSSrrUSKMKxrrrUSxrrUzsOV7--N-tVN--N0bKIKKQCKRnKQCUtrTUtUSxpMprrUUKxSpxrpprMrxF-EcVGxTX" :
		au.pn === aAv + 1 ? dd =
		"QREc7lR7oVUYGy_KJOJKKKKuK4OKT_K4KG_u_GJJO_3K_KKKL_4KL__KK_4_LKK_MjzuOOK_KKKOKLKKLLUjzji_KKMgyzdMjzgzzzEszzyzzjvuQvieeid_POOvzkzvzy_TvuOK4GKKvyyzzydJQi_OdKKaLOLajdOPuueaYBzydJdPOybvdbjeuvizwzujuQnunl2wBnBE2-EYBz2nk2kFzwBzznBydnwznEYwnnEBnnwkyvwzEgznzzEwwwwznnxK4KGOJ2zl2nzifvwyw-J0GGJ042nvzEvzwznJEnzlG42zg02KKGFzzEzzeT-woKK3EvoKLOJBnBnzE2EznnwnwznznzpJKKKKOOKG_G_LKFwl2zK8K4JK4KKKKKKKKKKKKF_g38EBemXeeeeeemeemgeXeegf9XgeeexCxzzzoenErMroeXeeegfEzSS9eVcghoeemf9YBe9ee9eXghrzzzKBfIUzrbzUzzzbryOxrzzbbsTXe9geY9egeeBeY91cUy6z6xtxbxzbzlzObrx6ztztue5UyT6zzbzbae7UxyOzzbzzbbtzyUyUtzztbyUzzbuecZeBeXeeecgeV--1ViZ-00JJIV379xwOLKKgzyzK2zF5g4ccBgcn9ggepUxAprzztxtyOzbzzbe90f9cXX99V-cAQAOx-PFLqqmemxp9zzttzIAzrrzzxzzze7X9ZeceX5ece---AorF0B4uUghzzae9-6VjJh_UznK---NUXV1NBEpOLYnzlJ--0X1X--Vl4pk-B5KYEc-D29vazJ-HkP9DmexzxxzzzrbztbseeeHeYHceXV-NC5uUF-R5YYCyX-2Vpc0jCF--5lM7-12TuM-hkQrZrS9X7f9e9enrSxrzaUxx9f9zzHhzUxqOaOsObbzSxoqUxyUY999c9Xcecce7eV5NDrSOLauUwzzzzEGK4K_0F2Z6YfEUoefUtzUzMyNNe9ceec0a2zdLQdyjwynxKKFznpGGJ--1-_X-AW0ZpjvnzCKKJ--1309--02HO---WrDV1sGfOOjzzn4KK-0FYN1qP-2W7RtfkF6J8G-geeemf9gemegfEbqUrxEbyTgecOwUbbxEbyTTUac-H3crrjCLEE1KoQBrofHegeecBefBeeegfAACxUHemeeeeegxrSrzxxoeeXXe9ecdAzUomXexzrzroeXeecc711_rI9nUSxxKMSryUzrzUpxKx9cV7cceghrrJnJmhBe9ee9VUrxy0a5-7e7VVX-7XccOVX99eefKKAAMxMIUxzMrxK9XXXXeXceXceee9mxxp9oeV9mf9eHgmeeWsXnHcmfA9oenJf9XcXcOby999exKKzMIJcceYBggghxrI9e9e99pxzpHeccceX110cXe7cXWzrUzUxzzrzrtzbaOcVcceXccce9Xceegcce6emeZe96buXeXoe7TZhBe2Bmc6eIBdC9eC9fHcHcAC9erxHed90C9MTUzoh9ZjJeofIAzHghHzI9nHYACCA9VxIHcfx9gmmnEJrKErJzSC9xrrrtyTOaUa0xSxKroxMSSrIMKqUlc6bztWx51--P7OyOy0tcX997V-NP6WsUaUbaOaX6VTOzzzxxpHnBnBggofCKSpJxUUo6pzzbtzyUzbxSzogfABeceef9mpSzoppI9e7X9nCCKMMK9fEI9ee19mfBgemh9W91WuI9gf9e5eX17N5NUXc0a1nBenUHfSorpMKMrHXh9XgmY9nMJmV1nIISC93fA9gnKBemp9e9XxKoeeeA9fSMzrxrpMSxMMHorIKII9eecgeceeee9gmghrKKCpKCIJonMozKJp6xyUzSppr5OttzzzzWWtyN5ObcV-5OaOWttyTTN5VWWbbzzrrxaOtbyNTUUrrSMMSpxrrSrUxxUUpSzSMKonIOaN6aVcVNOzUrL17ccXccVPeccX7717cXX-5V0zbzJxOboUKrKrrUxxrrSxxrSorIKSrMpUUISxxAESpGxrsVWzP7XXWzrrxVNXoccWcOcX-6xrV6tx0zxzUtbtzq99777WWVUV-50xaV0tsNUbzpUUzp9nUrpIyOzaUy9ge197e6zlbbbzbbyUzommhxonCHeIxxrxrxrUSxrUrrMKoogmmecmeeZcceX7eXHeeemmmn9eedCzHfoeeeZe_IMzIpoxHXKzUJxxUoUUprza0zxxxrUtyOaUUlbxIMKKKoopCIJpJoommeeeX9A9mmn9cce9Xe9ee19eXe17eA9mgnCKpJnBee7XXXcee7X-99XXeee9993cXV0ba5-XV0aOA919HgmeeBeY9mmX9ememef9ggn9ghA9mXcmeecX7gpCCCBnAAAABnCIICIKpJonCABnBgf9hBpBnBnCCCJonBnJnJonCIKprSKIMKKpJpCIKIIIHrSMpJjJxMpz6zHxCrrMMUSprKSIrMrMUUMrSxrSrSrrUUyTUbbtz6zbr6xxxtbtyOtyU56tzyUTUxzrSpxKMU6lWxzqNUSxpUxEMKJxCJnMKEUHhICEMrHxSUMSrMSrSppppMKMSSMKpKBxMKpppKKCBnCBopIKIKCEKCKKMMSpppSSSMMMMSSKKKKpSKKSKSMMMSrSSSMKpSSSppKICppMrUSyTUztbzzbrxaUq6zttbaObaOa5TOa5NOWWa5TT5-N50V7WWbaUbbtaOX-N-7-1-170cTT5ObaOa5OtttttbaOa5N5-1510c5V--0VVcX-1-V51-N7X-WWV55N55550ta6aNNOa5Oa5OaOaOtbaOaOaOaNOa55NNOV50a5-T50WWV-N--7nBf9mcmgcmmmeBgmee7X17eWba11X7VX7X79X97Jc7V7-V7117X7cV7---V1-X7X97--7X111111711-VX77V7-UMMMSMSrN0V5-UKKCMxpprSSSrMSSKprxrSSSMKKSKrMrrSrMKpprSrKrSSCKKppKpoxMUOzaTOzyUaTUttWtzbbyOts-OyUbbztVObyNNOyTV-0WxWWaNNN7X7VXceXXX17-7WWIBnIBonBd9eAA9Vc7NNV1CIK9117-797X7VX1111WbWy0xUzprSSSpprUxrSxxrzTUbqP6zrSKprxzxzzTUUUztzztxzzbtzSSUSMSzprSrrtzJmmfrSrSUSzaTN756xKxCSSIKMMKKpSKpMKprKprMKpSKpprMMMMMKrJxSSrSaNNOtVN6s---0WV17N-V-0aUWbyN0baOaOaNNOWbyOsN70btaUL0xLT6o-UM6lX6brSppSSSUUSrppEF6pSSSMKKCKVUMUL0tba-USSUKSKSSMKrMKpKSKKCKpIKIM6rSSpxMSppKSMKSSSpSrSxrUSlwT777VV---777X7XX19XXX--7V1Hc1--N0VN570c6bzKMUzrSxprK6xMxxrpCKS5NTT6cN0zltaTOa--57-11-V7X7VcX7c7X77977VN-Oa0aTObaUUoOxpKpqP70btyOwUsOw776rS6twUkUOtWaObX6ta0bVcOcWy5N-5T96XWaWccZeWWtaX97cecWzUxxq1X7cVX77VX999750a6VOttw1XecXnIBe9-VZceX7V0zTT-OtWWbrzSpCCUJltWbbbzxzUpoxopxTUUxprS9zMMSKKxGtaUtzV177177cX7X7X997-OtWaNX150a6V6rxUxtbaOV-NN0WV-75-0V77777X711-1X195XccccXZe_on9c29c799ecVOWaN-55NP-T-TUzzzzlzzzsUzxzzrxAqUyUzuA9770V-5UzbzOzSSUrOVOac7WzzxCrSUMJgpIJrKIHgrSJxSrMSrSrSrrSrSrSrrSrSrU55-X77TOe775OxsXX7X15WzMcXccX-Xee77-VX-UzkOzSq7UbzzxzSX5OVNUbaTP6xzrzccccce1XXeccWzzsP7ce-U6rSzSzbzUxxxzxzUwUqXcPVTT99XXce9eeXzS9cXXX9XceXe9e9ce9cece9e9ececeeeeeceexxxxrHee7ece7Ue9omeeXeeeeeeeccX999e9eeXgef9eeXXXeceec5eXefC9eWcPn9WeXeeef9hzSxHcfx9cBe9emee9X_Sp9e9Xe999XWyce7X9ceeeeXerp9eeeceecVeeeeen97d9ec_BemgeemVTOyTNUbttXVe9cce9eeef9e1ee95eeec--3mJ3-01RcfV-NIoOUF8R8uLgf9hIHeec1Xe9fBeh9mfEzzyUrHenxyUyUtzyUxzzbyTTNf9e0a0cWEvKdK_KKKLKOK_aJaPPOOUeKdUddLTyEukyvizjzzzGK43G3322EBkwBzkwwzwzwzwznwoKKJ0K1X2ABrpzzozzzaUWtacme9hxBcXBoeV9--7KZ5R0K1i5QpxUxzUyUzbxztyX9e9oe7eAHXe9eV--KycF0gAC-Bf9rUzta7c-54dtbV-61qbAAy---LztF1oAWqEUzrzxzbeXeecf9V-94pL6xF--Agu7--4xl31226aIBogfABfBf9nxxMyUztttttzbbzbyUtzbsX9f9e99eeec--5HLZ-A28MQry9f055LVqKKPKOaOddaKaKOOd_bizvy_MeOOOK_LPPK42BnJFzszEo0G4aLKOUjuOLO__GKKKKJHKG32K_KOKbnzzdKOLOeOO_-EoJG5KK_KKKGK2wzElGLK4K44JGJKLLLKFnLLOJF23dLLLK43_OK_KOOKFqKOKeK4KG43KKGGGOKKGKKJKKKKG0OKF_FOK_OKKKPLJK_KLK____LKOKKOLLMjidbzzdPPKOKJOG2pOKOKLLKOUu_PUzzzzYwzwydKdaOOKKOOKKLKaOK_OO__aEeOLTdzzEBydaaKdbEnzjfBnuzdPLLO_OLLOK_OLLLUzEnnEnzEnwwnz42zuRzEwwwwznK2nnwzEnEEEnnwzEzvdKKOLO_OOdOUEnwznnzYwnkEEzyEiuUvjzzzvjnyaTyuiz02yyawBkyeQeeOueddaUibuPJi__9gwnyaOOPTvuPJTbeLzEiYuEiaQEeRydiddddaJ-x4K4deadddaa_daaOdaOaOddePaPOaauddeufEeaLiuOfevduazjuzfvieeeuPueefiviiebe_3KvfjfEfiveePivjfiuiE-FGJ--3--4-FFF-FF33F-B-22vjyjeauefeiiuzefujidavuyuivfiuuvfeeuePaPiuvvjiiyyzyivvvvvyziyvzjzEnnEvyviviuvivjjzvjyyzwEii_viuviuo-2vjffdKHPdivgEijjieEigzjvfYyfno3-z2BzvvjeOiivffdideeeieOdeLKbeLuOOOOedaeOeidjgnueaaLOaafeveLyyvivffiiuuiiiiiiiivevfiiieiiviviyyvvvvvvvjiuvvjefeueieieeeddveTefeaieeeeQePevedeffeuieeuaeeeaeee_fiffiieeQeffideufj3323FwEjdyuMeuaveTuQeuLEeudG33_eLVzizvdjfzi_JibeJF44fzeeu2vc3BEfdvdjfy_vvfyEvd_TyfyeTgyY2yzFF-wz2zJGF3F-kz-F22Bn-0GKG43F-2BwzFk3-BoFC4300-EyzjzBo3-l0-zzzwzwzEBk2B-440-04443-EivzjjvzzwwkkBn2-B322BB-zyadY2-B2-nBkk-oF0-o-o2wBnnBnnEsnE2Ezsnvzk2nn32-nB-kk--BBl-2-23-3-BF-B-ysn2-kBBnEBBkn22-B--00-00GKK43GG03JG43KKOGJ_444OOFddF23BJHJGGGJJKOddG-kBKHJ44G-nB-K3-F3-F403JG3GJK45KGdGK8J3G44-3G04J3_LK2B23JK8G3FExKOLK__KGG4KOKG-3K4OHLK_affedaK-G-n2-F-wn3_aO___KaPJ4aOeadaOaLdG3G3GGK5O_OOOGGJFG3FFFF-k-22--n--GJ2K4KK_KKG_KF2n2-2-C-nu22-2-nBn-KKKOK_OPaeOdd_eOK0O_KOLJG44J33-FFF3-F-2-B-B-k2E202--n-wnE2yEEEB2ynkygEfynEvijz2y2GJ2zgzEgwygwyzvyigwwziiiveaaidfuuevfiE22-k-0---F----knBnBnnnnBnBwzBnnEwx-EsnGJEnkCJBBBFkB22nyaLdfeaBknB-EsnBnB-zznzKK2nzznEzx03BknBnBwznByEwzBnzBynnzjzdLJ_OL_aOigwnnBnyEnzEEnlGOJK4FpF-FnBOJGFzywnwkoJKOK_OK____aOJBEBwnEEEwwknwzzzzzzzzzzzEBwnnwzEswwwk-nC3LK2BLKK2wznJK4JK23J4-FzYsCG2lFoJEC332JCaOT_aLPJ8_OOJ34JBFnFwBEK4JF3G48K_4_44HLLPdaPaeOOaLLQiuudeOdaLOOOOOLKOeePPduOaOdGOdGJB3G2FFnBB-nB4K4_GG44GJC3GJK4KOKFwB-kG_F2BknBnnBwnEBzBwwnzwzC3EzwnEjzEEEEE4KK0-zjizwwwwFzzvih-yC02yijEnnnwkF2Ez2CJGGKKdeOKaO_Gbd___Fo-nEB48O_aOG2k2pK3EBzF2042wwwnzznnEEnlK_4F--Bnu7-D5P0Mj4-NFneHn99fHdEpA9e1mrUrMMy6rbyObacVUbsXc-95VQqU-0RC72gfrLTUX9WL7PGHOKOLKaLLO_aOzjzdKK8fyy2yvzzzzjnvEyszn-yvuyji_KjEzfvvdedLOOK_au_K_8KK4O_Oavznwzj2vYyiizdQjjyvjvzjnFJ43FEvyyvysEV2vkG-oJJ-J2vC2nzfvdvcyvB2EgwkznoHKJEKF44K444Fwkzjx4JEwoLK2EGKJ34KOGFCFK2C3GKKKLujnzuK_aK4K2Bl0KK_K__OOd_id_032E-wwwznKK-5koy5rxzzye9XeV0NQGfQzp409Fr2emf9gemeoemhxzoeenrzzzzzzxoeeeeHeeemnrUzzJr6zzzzbyUztttzIzrzrtzaP5Uxy1XXc7TOVNOcXemnCBoeVOX9IHeX9ec9V-7QyMR-O2VLYCrzOcTXeV-7R7oR-42W7vEc-16Tkb---xZJV2sUexOjjEzzlK4KJ--2yzH--10C8--0-gFV-7VNER-038rYV-7WePR--3FiX-8X7VOizvlGJF--GAnc-q7b4qavzwz43KJ--3In9--193W--G5YBk--7uzo-03SVI---Z6nF-JH3JgtV1NZFfOiznCGJ-03ZUnV-NZy-Ok--HUC7-18Epr--G9ncs--8SB3-23innD--1O-0-6lCPTmmnCzzbWa9c--8glJ--3qO1-3XRYCbzK-XlIJjmegemef9efDUzwUzx9fHfBfxyTTTUpsTUxzWttf9eeWtzu7-19Vk6-2lJH2nUze9VKcf22OuK5ObzzuOLKUzviaKzzzfzvwwzEwwwzYBzB0GF5JGaKOJOG__3a_OJBG4-PlNXPmfBnBnBofADUzJzbbbbbzpxzbXe0ccX9Bc6s--1mmx-6lYOwmextzUrP7cc-5BSZbV-45HC2T7-9BdhMxF6JOkqwemmmmf9e19nJemmmenzryUyTTUyUbbbbzbtzue7-qBstqKOOYvEEBo-45TmAqV-1Bzxq-CGcDCxzS9dEMrxowOX7V19X-6YINKaOgnk--leh3lV-cqZnQo-AGhLznASpxpObxa-cXcXV--sj9F--RjYc-9DO8aRk-JRodC5V1Ntt6OKvznCJ--6Flm--Yf48k-BTXJhc-LEJ7aTYC-0BTkwjJhyP7P1LYtQd_KPPLbePLnuafp-yEeddzzEuOiydeKOGdzeaK_jzjjuKKaOaOUEnynBzvnzVyzzEE4FnBwBGGOJBF334G0-3JKJEknBBlKKK-wnCF-RUIqgju-4Yv7daLnB--6voH-EYxyt_ueaYBBE24F-wUjugoqOWc09F4K5OGOOYyzBzElK-1m02NnLNP--32h4-0m0qgnqV-1FPCq--H2Gus--FRXJ--7Gue--38td-6H3zimfGzxLPWaX--3E7C--16gBV2O3CZOuLecn-n3--RX7jgyP--3G5C--18RXV3t3nbP_3_iju_Hz2-B-03XWAgfxyTcV-047KF--Xjy7--GPHJ0W7iC6CSKKIICJnCBemzqUbV6sUa5PX6w1711-V0d4t8OOwwo--7o-P-3ZP3pin4--1CVBV-85mEN0d7rPv9hEIBeXrICxpCAIBtxrtbttztWV--UWc7ec--ZRVOk-3Y_fi--3SWl-1HE1urq7V-06YZF0JYnKBgltzy9c-1GuEq--1Ey3V-87P_R--8B0X--3aep-1HIL9xw7V-08jeF1RZt2BoxCKLV5NOaTeV-LHXk5OUn-3B_KjRnEJxK6xSIBnGsOV5-5-N7e0PZfppdQivevivviuviuvfffiviiiuuivV2vxJG3G400-F2zoG43G3G3G43G3043FJF-B_XHC--1HrHb--1Ml9V0OBPSTykK--mPGuw--0CdCF-3bQrg--_-bGk--c3w7-1J1Tb-nHWSNmnBmnCBnBognAxAACOzzzUbzOzIAAEbaOtbpICxtaNHW9WWttge-Ou9dHce0uXWaOaNTc0qJ_j5Tfuiyfuvyn-43-C4GJJF-ZdZ-CEN--qKF5MivvzoGGJJ--9fZm--4NVG0OHj5Imgmgn9mggggggzbxlyUttxUxrltzzxUp9mcegf9nBx9HzICBnICCIKMbaOWa0c55OWaUlaOaUxxrIJogmqTUpK6aNNOaN0xMUNT1-XXceee7cN575ec0cecV-0P9QF-3hh-D-7_jKnaJ2nyZ-YA_nYBnBnEUttXVOc8aMCmTLLKaaLKPddbjiuievivijivfivy_PPeaeffjyyvjjvzEnzso3-F-3G42l4J-2zvEBGG00LLuJF-3KFK003GFEyxG-nEzvp-B33G_JK--muI9w-5OSJStaOeji--wBzzzKGOK-0JieNwmeCzzaV-TMQgDzvlJJ-GAk2vrxkPe7--MV8o-6At0AC5--OURXy--gjqMEraeV2OUrqueTfVFl22F--jvyN-PNAgydcnF-Yn1WRrSpppMJeYrJnrUKq6ce7WzTUzUUUNVNUtsX7VJece9XXX97c--5440-2I2OHnJsOV-1NxR5-Bn6z2mgeegenBzbzzUbtsN--0_72F--nKlc11OxXDLKKO_OKLQvzwwwzEnnnnKF0RnydBghMMNN--dOfypPMdfibveueeaPaOO_3eafd_J8KOKKaaOaLuLaLvcyEieQevy2l---GFpJFzz-ynwwzzyeiyv-Bx3FEjjzVEvV2s2ufk2G0--3FF2020003JG33F-dC_NYAASKopSbtV--77--QufZ--CxYX-5b-NCbjY3F--sGR7-DRSQ6v4--2ZTFV-OmFuQF--tWp7--Rrk3-2DRQfF-ObG_p_LKK4LQjvvvvjk3BB--2cnkV-0opdF-BuUUE--1SP5b--2fOPV-0qQ8F-JvLKBlV-ttYkOgB--EKfm-GbimObjzjzzK4JOJJ-QEW629fAEU6aT5-Kbx48aOGeQiv-nzVk1K--4-Bei-2c4b_aEF-00fX7--VsoZ--FYHH--7bwK--3KeVV-19ymF-456Wg-0cmm4s--oPB-o--PCDOOk-46F9i--7vjd--oSsBlV-uEMIQY3-0GwSv--1EeMF-06tTc-5Z2ZLk-2HUyYu-0dG4tY--3dhcV-1KhfF-09wIc0ea0y5OddePfiivc-kk---0--hB85hIq---PPqqQ-ACDhYBegf9nBoyOyOtzzxAUzUxrxzxKrqUSHnEyUzzOzbcXXe5e9X97XXXccX9Xee--1UpAF-SFcxhOX-1eB0xgo--Jd31--9KJS-9pBVymefBnKMUUaOVNN72Xdb-LMveiuLKJKMinzzzvfY2BzjEzzY3GK3FK4KOGKF-0Ji17-ueZcLLyvwzYGGK-0KK8igpzza9cc4aecw5eQeefeK3iifeyVyyaPysnzivW-yvivjf3G32JdFG5OJG-3--EB2003-C_GGF-0M4Pc--fYVJ-0L1VIV-1kjSF-0NOQ7--gXeJ--LIdm--AAXh--Kaimk--h2YJ--LYMm--fHOlV-4QMoB-1fQzGbV-OM1DQUKrSV17XV-PsGvQ--0R8xc-Pi9hLee----4n7gV0uuK8Ovwo_F-0SPF7-Tihf5jioG3-rMLqIMSxJfMpp51-Uk7-X7mV-1vH3F-0SiM7--ivJJ-4MU-YL--5j0_5V--MW4m-Ffnz4uebcnu-E0K3--4umFV-1xQQF0KULdhJnCaOX--5ji96o-jMt7YCKBproNN55-KC9-7-Pjp4LPbw---4zuVV-2-p7F-4VdEB-3g5r8awo-6q3GTnIBnBlaOaOV--kXLJ-0NJ5IV7f1wFOePedueiffjEBwB-FFFFFG0F7pWV6CJfCAHcXBnHgpIN5Ox6lbxrJpMSxbpNN7V56rMF5-7-X577V--lo2Z-0O25AV-28oRFJ__7yBm_ICCAEJgcnBdJonCBgegnJpS9XXe7nIKCSSKpxppCpKUrbzKOzaUUoUzKLOttxGVV557-OWtbVWV0a6ryX7X70cX1-cUu-Uy90zaPcXe90XX--AA8ER--Oap9--gnQdkH4b2ThSprSrUSrMSSUSxpMKpUSprMKrMKSpprUMMSrrSrSR6rbr--N--0X71d9-VV7e7WaWu1Zc-cVe95BcZe7917X7cXV7VX9eeX9--Bw-4--LXIak-9oUkasF-KdZHh5--QKOSQF-0f7Ac-DpZnLQC--5ifVV-2M_TF2_g-RhCKoxKSR7-6xX7OVh9-77uqCsLOaOKKK4K45PKaadudaaeddaejyeedeTsz--o-k0-nzuafiueskznG3FB3FG3EBnknEs4_OOGa_K03F-BBzvnywzvvzEBBkk-EQ93ASrF17--hcV8V-0ho3c-1r18a-KLsKtn9ghIKopJxGbzlz5PcOWWV6bZeVXV-erChLbuawo3F-0QgRIV0AS_oTz4F-0iqsc-LrVEayh0F-0jBw7-1raaM0sqwtimmmocCrUzKrUzbxJeYBexrSIoT50xMUUSrzrrxxxrppMMIrI9gnJzzaUOzSrSUUzxtbX7OsU-UOzrUxxSSSpxSrzxzrr57cWue-BcVX-X7X10bqN7e7ce7-7cX7eX7ecccXce9e9997eBhHmhBnBme7791-5119cXV-ATZeR--Qs0X--CxF4-2M-EHrMNVV-1s18b-0M09Rrc-3i33Gcy3-7r1pBmhExpSrcP9-7-3i6ThbzJ-0r2kLmxV-LsT9bywKF-Cl8ajc-5sg76o--RNyP--DBcS--r75Dw--AZP8N-CRYLYIrWcV-AZ_gR-hRb0Q9efBUUzzxrq7Ve9--DIcG--69X3V-2_KXF0CmrNBxUTN7e--DM2x--MBNss1qtbGTeeeiebfeviufifjG-FF-FK-2F-F0-F--6CEoV-2b0EF-pnx7hKlVX--DWBO-IrGX5pJgomd9Beefrr6rUttyNUsWaN9c-iuOLLLPjcnF2--0p_uc--uwAJ-ISZnnCIKWa---QgbdT-0_qJ7CprKy7917--Do60-0MPdwpc0LirO4eLzjezyyzzzyyzjzjzzzvvsFEiyn3OJFKKJFEwwKOKJJKGd_GKKG3JK4KJ-ESx2nSrP79-5j2XKaPVn--_t4Cgjtc-1wYGa--6ZPXV-Ama9N-CTK4nUSXX--2n3-F24thzhrHcXnIqUttxbcd97-3jCxpvh0-1rbiZpEa1-JjETd_azzgznzC_KK4F-0TTz2V-2nrwF-Ctvzgs-Dwy-LEp--Mcags11x3uLKKLPLLLOeNwzBknnwwzECF-0uAGc-ax4e5iii30---6dYeV-2pDWF-0v0pc-uxhu5KvzivnG3GF-0vS9c-Tximavyl4F0GTtRbKpKKKIMKorSKxcP77--50cV1--X-0jSM8x--MlFHs-PyMyriv3J--6njmV-AuIRR--UKqu7wjf1GaaeOdiaPdeeaeadePOdd_OGG3FK43G443G3G-nBB-En2B3P_3HKJKGJJHPdOKJO_aOeOaaQe_K4_F3G3O_8PKOeLOPeOK9TddJ01OaPPu_aOdaO__OKKaK___GOOOaLLLOd_-9PPeaPPefeueOH_Afeeeueuaeaieeeaadd_OdvvivzynwnnwnEnzzzzzznBnBzEEEEzznwzEnwzzzzvizyzuuaveuePv-wnBwwnBnEePaOaPaOLEwBknueaaMwzeeePPujjczvyvwnnnEuuusEnnEEEEzznEBBBkn2BnE2BknknBnBwwn2Bn2B2BBBkkn2--3Bk-k-F3F3J0F-BK8J-0-3Fl43J0JJFC0220-FFB--434_F02-3-FoF-3--ULK1-9jk6__KPzsnC-0rs2uxu7-5z6oLo-0Ua7Y--2yTuFFpzEegnKCAHYSIEIBgmnBen9mhJonKKpKpKIICCBopKMKpCMMMSxxtbbyOVNN50V550VN50VN50WVN-0a--0xLN-V--711-V0R4w-PfBJ-5sCnMpUSzGcVcX--36DPF-a3T2CpX7-21Rkb--7L9iV-3CdyF-D7K1E--E3yyLPB-AsdryprMSrUMUXVXX77X7-0lNuCb-0sh-cpsV-24z4a-0O5skoP--HJcO--8cjcVMwvW_PePffuOedddaOd_OLivedaLOQswwnnBwnnBBEEz2EknBl___JJF2-ddFJBB-kFJF-3Oxo3mryUe9--oNo0k-L_0tBtV-x9UXPVk0Kd_2QCCKJnKMU6Wy6x0a5OtWWaA9f9eX9VNhBeeOaOaK_aOaOOOOOOOLK___aLLLL_aLbzjjjEnnnEEBnEBnBwwzEzFnBzBnnnBwkBOJ3--9Q2JV0hFDWPTj03-0esaIV-4M3pF-DfxqCV-0LPM3-8fbYnBy5-Cq8_WadYzEwLK3--A59FV-CZXbR-2ghDYk--LQk_-0vCsPnTV-0OncZ--gxEe--LXbt-4QGLNnIMaTP9V-4d4NF0DoYGBxBttWe--LdTx--AJjgV-4fDgF-1q1n72bQ0Tq_fzyaLyy__JbzjyiyEvnzoEzz4K44GG440J0GJ--AQaoV-hj4xQW--QUtTs-0QzBZ-2hzuIu--M0W0-3QVpXzUSX9X--r954k-6-LVD--s6udk-U12pBUe--NKbO--B9nkV-55gUGAILAU-ee9eeXeeXeee9eeXeyN9eeeee9XAzbzzzUUtzxzrza1fzrzs7Xe9XmeeiUzrWztzbzzsUztbyUUrztzUzzyUVfzMzzzzzzzzzzyUzzzy1SzSxzrzVczzSpUzbrzzztzzzzrzzy1cXXecXe9zzxzV9eeee99USzzzztzSzzzzzzzzzzWtzMUbUztUSzzzrzzsD2xzxrzbxrzbVeXUzMMzbztzztyUWVX7cX7X7ccX8rtVX2Vc1gVWrVNOta1UbbaT6byOyTMqXggpFemnBnLpThScXXopfJppUhSzt_USUrxSxSzUUKwepzznMzUwefMzSCJXAKRemgegeeoeeeeeeXe99eACMxzUrxzUzzzPmeceeeeXeepzrzzzr9eee9e9ehUrxzrzryUzzzxwg-3sRUlgzK-1wGfBrUXc-1s_20ck-8lARQMsc-6sakWaUYsG--BJEyXtygSR0KGMwzkKK_KK_KJKK4JRnEEEEzEnwznzwzwzzzwzzwzjw3wkznnnkKOKGnEzwEEwzB0wn2vyizz0nEEqPvnzzzwjjEjzEEwznzzEzzwnvz2jjvvzwnkTzzzj2vznzvzyzzyzzwzzwzzwzwzzzEnwnknzfjvuzECfjDzEBBwzEwzEwzwzzE2vfwzk6njvw-nzEEzEzyzvjvLizyyzzzyzzzzzvzzzzzeOPPKd_4aPuwnaLK_aOezjEwznnn2EEnn2wzzEmwznzEn2nwwzznwwnywwzzvzEznwwnDPzzwzzzzvzEvznzjEyjEEnnwzzzzvzvzywviwzzEBwzwzzveznyuzjEzzzwznzjwzjwwztfvzznEEEnzzzzzwn2BwuO_fizzvzzjzjDywzjjEqKfyvzEOfzzyLjzmzzn2hPjjAwzjvjezvnfzzzjAzfjjqKOO___OL_KKKOK_LKLO_KKaKKOaOOLOO_ePLiKKKLKKLKKLOOKa--wN-ww--DBg5N-4latIyc-MYUfaRyCF066q1CJxa5X--5F6mF7z9BugfEUSrSArzxBefBeJcrrzbtzUzHmfUzzzttVX7X7XXX7XXX9--yKGGTsF-2mkw2k-3tQstjx4--BkdsV0DNK7PzGF-6B9ki-9tXkO_K_zznl-0RovXrc--OeZW-IRqTXoeXefUzzzxHYUyWzzzu9XZmZe7-1tmAWzJ-0nbeYV0DRxYTvG--2Dto7-0bYlJ-0nm6v-4DTdBTzyzvzvlJKJK4K-8wxJTrrrzrzOceXce9V-DTg9R-dnsbYExxryUzaeeceec-6bz2Lk-2o5Gnu-1u2YOv3-0oCyAV-iaLAUp--CCXRV2Db2oOOwzvnpKF-ppYW0bVVaOyUzzzrxpxpzPk-2eBMb-8xGoerUUxzry9Xce9XV2ydQ2OK_OjjnBwnJ--pC19-2uliNEyk" :
		au.pn === aAv + 2 ? dd =
		"JJAf2uP6y-0nEiiuyywnyueuTbfevfvvjivivivjfvivviyvuuyEgzjjzzvviyvizvviuNziyvijvijfvyvgzvvvvfeu0-F-n5a_GG4KJGGG3G3G3FFJFmKGJ4JGGGG3GJJFJG3G3G323G--kLPeduaKGFGGGG443JJJJJJG--B-C0FJK__443-BJ-66wmpBnJopCMJpCCCIIIJoopKKICKCBnCKJgooopMIDOzzSzUzbzzUSyTUxxrrrrrP1XcXXX9Hcn9cceemece7cPIoeX0sWWaOWVNTOcTNNcN0V0V5-N0aOa-0V--N50a5Obyc-M0z3TPOdgBnBF0NOpxpMV7-M2mMiLbinz03F0sTx8mfrNT-2l6QEdMwwp-5XX7UMTP1V1GIuvaNn-5Xfxrpw5XV1GNTEfn4-_XvzjAAA9mfA9ed9fpzyTUzyUaUyOX3n59NTKLLKHPPPO_LK4iidea_O_QeideeaLOLLJG3-0eeddOaPO_OKLKzEznzjgnnzBykknByEYnByug-3332ElJ222-2wBko2BnBnBwwzwx-9Y6j6rrrkccc-E5ctEizpJF-aDYgSMGz-X10G6VyjiyuuPeiuzjivh3G3K3G--k-9JGFAPEIZSKBghKSMIpKpCJnI9gcXeccehHccoeXBeoppKIJoghIHnCJnJmemmecmfA9jyTUzzzbbxbV0WaTT-OtWWWV0zxtyUN6yUzSxrSqTUztaN71190V7-5V15VUy--V-lxHEg--33oL-67Dhyu0--3FoL--7ahw-LGYowfzu-0HFMIfF-aHWWwxxxcXX-E8ZrUdfVl--TIJLzSr17V0wcDLvivjysGK3G4XaJb1zppIJpBccccge7fUxx9eocX7cXX6y7Y99Heggen9nJdAHp9Xnp9IIJfICIBdCKKIIMMJme19eXxxp9X9VVfEMMMSBpooe7XCSBomccxxpHcrKKCMHmXXmcxoeX1mpJe70BrMJmVV--gxExIpJcX71nKCJmhCKKCIJoopCKKKHX8KHd9nKrKBj6xrSrKpz6xSMMSrKppwObaP-UzSCAICIKCIKKKCMMKKCpCMMSrrrKpKprUSprMUSMrSprKrSpSrUrUSxpxprSrMrMprSSSppMKprSprrSrxKSUSqUGbqUbbrxrSxrSrKHXXeggeYBnBgmnBnKCrJnKpIKpBnKCMMrSS9chKKIBeX77EIAE5OxIIKKKIIEKSKSKKSKKMKpKpKKSMSSSSrSzxxxzlzzUzzzzzUxrMMMMSxxxrrxrrxxxxzUzOzrbxzrxzzzw6w6yOtttttyUbbyTTTTTTTTTUtzIrzbzbzbba-71-VVV77V--7711-V1-1---51--1-1-V0cN-N5VN1e-ee7-1mc71Xe9fIBcVV0WbyOzxX-VV7VNN5TUzUu1ce9menBecmf9gxHc7c7V-777---50VP-V-N-0WxppSJpr6zyObzttV6rMKpUyObttbryUbzWaP0sNNOX757X97X7ce9XXXXXVc7-V-X7VX5-V7eeA9menA9fBnCBnIIJoorMIRObpIKMJpppSSSMSoeX71-V7777X97c5V-ccWV0VX77--NN55-N--7U5111cXXenBcc7fABgcX117X7c-gf9emV---1--XXXVX7X17579VVV117Xed9XecXX--WV5Uzz6zyUzrSrUUaNUlxtzXXXee1777X1e-5NOy--WV5OttttaTUzyUrxxtzzzlzMUrzzxaUttbbxWzxpSonBmpCCJpCKCIJpJooeACHpprSxaOV577U6sOWV-NNN70WVOWzwTTT5NUxryUba5NNOba1cc79cXX199X-91X99mhIHfJmXgxxxpHe9XccX997c7X0zV--V-N7P6k49V711-111X-77cX79mmeHeccV1mdbn_Uno-DKNVSo1-O9kaiKKzzEzpK-8_SLEzzzeeeV1Hinzjh3-8_UsM9mjtyTVBHk8AfiyvivizpG43G3GG--0OIzV2mnjMaLEBxn29mc4SSpprSSSUprrKprSSpppKMMSrMrxrKIKHhKHfIKKpIBpCIIJpIJnIKpSKJo1AKKpppxprSprpMKphIKhMUSrCKMRpMKrrSMMMMSKUVUxxUxSJe19efAKKUbKnMxKKUKIKUStaSrUMTUrzbzxxrSzzUy5SSKtbqprTprzSxxSrBXe9ghSrMMUyUzzbySKrUKpUSpSUMtV---D--0aN-X9997977VVe9XD-19XX1-9XcXXXXYxzUttzbV-7VX78by0rUSppKMbs5-V77V77X-X71--17-X-7V-0WWVN-6byTOrJepKpSrpxrUSSIKSKSzrrrs797c1711ObUSxxpSSSSSSy5--7997VV6z_rrSrxpSprs-7VX17XeXVXN-11-TUUSxztyTT5ObzrSSrzbtbbtUKzrxrSxzUrzUzShKhMKrxzzzxyMtzqnAA9mgfAAACKICBnKzbbWWbaOtbaOaTUbtyUyTTTOaOa556zyMxrUtaTUzrxrrrzSzxzbta5N0s-ee997cX97cX7cX7X771-V-aT--V17V7X1--V7Xea6ty5T5Mts5--5-550aT55NU_ySxxta5OVD--0VN5NND-N--8a6a5OsN1og55OVVOta-75OTSqhCMrBmhMbbtzzzzta--NN5-8Us0V-N1eD-XN0VOKppraT18zs0SyOUaOa5OaN1-VcX7X5OSpSxpMSra5NNObV5-N19cVc-W_KMSrrxxztzsND--MJpKMrzb_pyTMzUa5-0a5-X-VOIMMMSBnKKSMrMzprzaQBen1ceeXcccempprtzUUSv9mmfMrxzUMxpUUUrzbztrxyOzUxrrMzbWbJppSvC7gmenA9mgggfABgnBf9nBppUrttbzUzCKrSSxzbaUxPfMSKpKnJhRpIAIIKrSzUMMzxztyTObaTOWWaTTTUbzzrza5ObaTOWbbbUrSrStzyUUzbyN--s5T2rs-1XeXeefBn97VfBnIBemf97cXcX7bWV1111c1eiN7f-ABa6s19n77X7g97cceX7f11UzUppry-N0MMAIKzV4UW_rJoppza55-TMSsNObztaOa6KzV-77N-SKKSUzbaOaOyUtzzzyTUbtzxrsOaObtttSraOWaObzzzzz_ptaUbyMzzyUtbVUyUrUzzzzzUzzxyQMzzUzzzeeeeXee9Xeee9eeeefKMIKcf9ggnABemefCCKzrLf99X1fABgeeXAKSSMKxxzUSrSraMRpSxrQA7X7X9oopBo1N9gnIKCIJmmmnKIKJomn7emfMBc51997cenKMUzPmegmfMMSzzyNA9OzzUUIKMUKrKpSSrUrxza6SrMSrrMSrUUxzrxxxrUSSzSSxSUSxSrSSrSrpUrMMUSprrUUUUSpKrySzSrxzzxpzSppprrzUrSpSSCSRprSMKKpMKrMKKCIIIBohIBonAAABnABmgemhBmmmeenBnA9X9ecceeXX7Xemmcemgef9nA7en9kecee9eXeX1-enBkeX7XeXce92VXX99ceACBn9XX77XVVV--X7XemmgeeXXX997VVc75OVeX9hAAA7eeme9eXe9Xeeee9e9ceemmmmf9meegfHenBmfBnA9mgggemnBggfBnIHmmekeeceX9e9cXXXmoeceeXce9Xce99eXnBpCBpSrSrSrMSxzzxyeeeeemkeemgf9pprUzUHmeXXem99e9eceef1dbs17ecepKrMgg9XeXccX-Xeen7cXeenBmnBghCBgnBACCCMCKJohCCMrzzzyUzzzzqognBmnCKprMSMACKpz_wmoogepCKrMSMStUZkeeeeAH15-11-X9hCKMSRomcgpKzprpprs0z_rKppzrSrzSpIKIBgXmprrUKIKKrttpKzSUBomm97ghJpSyUzSzzzUbzzUtrzfAI9epnHceceemegghUUzxzWbzzrbTopMSta5OVOrzzUSKUUxrsOrpxQCSrIIKSxSrSzSrzUrUUtttztUtbzxxMaOV-sOWV5--NNOUzUzxzxzUUrSxrrUSrrSzrrSxSprSppprSpxrrrUUrbbtzrbbrztzzrbbyTT6bSyOa0aTOaOy5T6aTOzbzpxxxxpzUSxs7XESrKyOUrtaOa17zyUaTOaOSxprKCKgnIAAABnBnKppppppJnHnCMJnCCKMSrSSKKICCKKKKppKo-2AYFDB--MPns--j8uk-0TwQV7mzO6ievyyvFGK3F--qNX0zxzxrXce9c-3mKUw-DOJuzw9-lBkNyuuuviyzjJK43G000-OaPJEprzSKMrrkccc-1997-2C8pDo-uPOqwf9mnbbtyTV-2Jzv--5gXT-CCmSUvvGG--5xsy-0D-rE-4b-qzSqX7--sMmk-0lNEV-IZ0nk-tm6EnFN-Rt3BvgF-5ReOUc-otNAvisG30DRoZzUzzzrwP9eeecc-3uJps0eSSKRrMGzrzrrM-V-eXXeX--2fpn--6MiT-0DoXD--6ULD--E2lg--TGhs--wrkk-0uNAV-npyzx-0bkCEF-6EeL6jG-5bpJQAEbaV0nuubvp-0dya3mhrk--BzMKzF28zMOzrMUP779c-gziXufkG-2byBQrcV-J-IhV490elopIKKJzlX70V---2FCPyV-HVlaxpX7-x0_hzvvGGF-12_CV1o6LCaeB---Vy4s-K15tuR-0cH3EP-AFalyPf--1u44Wxxxr17cc-CFkqTusBG-2cO5jMcV3oE3YuuiB3FF0P7tWrre9-4GLRUh--19rRV-JN8nk-1B7iV-3OQA--cpNzV8oQxrjjizyyw4KKG44-1d-ezGV-_77wzvGF0eJQZmxL0V-C9jlvF09OI0rTX--JoI0k-PTDyyV-40oK--e5AbV7K29M_OLMfgznEB4-IfrEMASpSUSq-7-Nee-ANaSDyx3F0A69npL--1qoP6bvVF-qtlNxCKCUa0V7V0xqOguudaNznk-G3-Lvq2RrOc-2N7SOfvlG-2g3LFmnKUrla-7X--Vg031A1AJgoxMSporMSSr-XV--10aNXeV-y7CVQfz0GF0RIcNptae02XdsiLTezvzyyyzjzGGGGGGGGG3--GRVT-QXt0TTyyzwK4GJ-r5K0genCxtwT-V-yBnotTvg-F-RR4WyVBNuCtdejvYyi-knBLOFJJF3BSAjnMSzUbsX9XeV3t0vf_fzv-GF0wZ8bxrOe9--8AQA--HN1m-CZlGTLRwx-cmONzIxrprppKprUyUts-XccX1e97cXc--_7pw029QbgoonJUROV5-V-iJrguik4--mdjY-0tQAdaRk-BiCss-aMQLTjJ--3jUaV4tUqAvjzx5KGF-YB7rwfzwOeVuOXlO_O__Kbj2vizuviyuuvfeveTiviynvYziefiiefvfiYvjB-444G3F-0-2-kJ304K3GGG3JG34--F3GJ-IBbGxS--3yOw8PPd_GaaiC-Eueibvyvx-304--C-2IBzcggmeenCMSrwOaOzKHmnrUSxzTOu--V7VVV9c-yPFVPuf0-F0gt0ZpKs17-aTPhOiBFxRy2ZmgnJeeXAICBnBenJzSrKKrrSSrKpMKJnBnCKMSMIKMrxSOV0V0zzUKSpppSKSEKIESOV-Oa0sOzUrMKSppSUMMkP77V-0a1--VP-17--71--7-UxSrrrrSJpqOtzzOX770hBcX7V5--XXV11cc717X7X9XX999777X7e-_chDLLiiivYEl33G3-Vock29fSpSKonCMU5OaNV-NNX7c2DaQYtPjzvjfiywGK33G3G-0xDlzpUyX9V5PSx2jyuzVGGK-0CFZWnwNV1uXF0_fBo1IJJoSSJnACCCKppSxyUV-117-N711-6evlav4-JpSyQKUSSSpaX517c-c-yg6luPzk3F0CNJQpy9-iumBnaLKKeudOKG_KLKLLLueLOaQEEjEjyinEyzejjnskBnwC043F2-nn2zE2EEoKGKFASOdporHX8CBhzxraUqUzSlzSX77eeeXBc0V-LhikvW--KmlL-EfebDLTskk-YMe-RrMTV7V2uyCCaPEBC-5q1sjK6a7V-A2Ih-Aq892rMUNP7cc-TlB1tv--ANsVBjV2v6d6aOwnp-7qIGAIJlaNV1imQQOPszivwzE8GGGGJ0vODuRhCrppCBpULN5N7NX90WX-6gppqPk-GqSXfBnqOxtaUemec-5nnTs-YPD2wz6re9-3QGmz__bnno-2PJQD-KhKnTaaTn-nF-0Pg_N-aphUzj4FKhhRbmhUrKHohIzMpxrpKKKSMKSKxrU5N5OaUL--X11777Hf9VX-N7--5P-XHXe-0hhca-WqtqMCppppSJp6ltz5NVXV-X17eV0QUJbjJ-nREfwnBwOtbae-IiGGaLPvEk0-Er7eI9nCKpUa0V--1v_ZSfcl--0T7Zc0TwsLPNzgz8K4--MdCP-8jMTqMno-QTv6BfDUs-CjSgLdjBG--rknYV0vttlfW-0CxT2mcUV6Qv4daeffkn3J3B-EUOXBja1CjifiOvd_LdKKaaOaK--nBw8aOFFeeKbfivzjix3En-2Ennz-n-3-2UYTi-bkAQ5LLKaRzgwnznGJ-MWJCRr5NV0wBylcwF0D6jaola--BJZx--NfgX-6lRkav3--sx_2V7RUnUaK_aLLQjzzz-atBrI9mgmnICCpCKLTOaOzs0aNOWV9c-E9stskaiM_-pIJnKoxxzxzrUrrxzUxzSrUSzSpISxzxbxzzzzrzzrzxbzrzUta-0YBe7mf9eeV--P9eee7XXcecVXeXceA9eeeXX-c7T9Bee997n9X-0wqC2ylF4iQ5frxSUzJzqNX9cX97V1wr6EuslF-YbY3xSUaeX--x1Jxc--uDnn-6S8wKaPedvn-FFB-zea6RfESrSq7-WX-6pPVqNx-dun9rIIKMSrSrSxxBzbts7XeX97XX7N---2MXGF3ilDMnrSppGa50VeXcHjS0jOLKO_LOaK_K_K_LKK_JKK4K4KGPedaOK44KOPaK_3aefffeTzivizzzyuvkBzwzszEEnwnn-nzyzwzv03G00-B2EzBEBwzBwnEE2-ow4SEIJmcccxxrUJnBonSrrztzyTOts-9X7VX7X9-YvBN2wwwwzvvjjzzk0zOXTUyUxzV" :
		au.pn === aAv + 3 ? dd =
		"C0DX0NP1V--QqeadnzzjynEEzzjjivdivfezjj2BBwzwnEzzzzzEjnnvYBBBBEBnzz-UV-hflzUUSrrUzSxSxzk0a1-V50K-0pMiudevf-zvfeBnyviVF-F33-yzgp3bVV02IKUrHnUzzpHz5UzUzSKrUrzbyNN-OzzxzUUUSrSrrrtzttzWaOaTUzSxxaOaOxrKBnCSKCIMSKKKKIBpIJoonIJopCJpJpCCCBnBggeXn9eccc9X7geXXn9efHfBnABemcXX9eece7XHXeXecegeeVV1ee9eX9ecc70eXcXe9enA9fAABnBnJpMKpKJnBnHmmeeXX7X7cceXXce9eeccXVVVV-VeXe97Xcee9f9eXeXXXXceWVWBc29cX7V-6aOaTOWWV-1XX17-NOtWaNVnBn97X-7cf9mmnBemXgece9I9eXXomgeh9eX99eeeemf9BmmeHgeeegfBggmnHoeABeggnIBggeeeecVI9eeemeXe7cX1-ZmfIKCCIJooonIIBnAAAA9mmgnIIBnBpKCBnCCCKKKMSKJoonIBohBmnABnCABfA9gd9mhBopCIJonABgmnJopCCKJpBnBnBnCJnCCCJnKBoggpIKCKJ-UMSGxrMMKKIIISrKpSKKKKJopCIIKKKCCCBnIBjSrSSpKppqUI9cpKIKrrrKSzyUpKpMxS5UKxMSrSxxxpSrSKpIrHxrSMSzHfrxxzUUUSxrSrSxxxrSrrSrSrrrrrrUUxryOtttzbttyUzzbtzzUzzxzzUxzrTTTTUbyTTTTTUbbxy0byUtzyUzyUzzzzxzrrSrSSSppSSMrRN-OxpSMztzbzzzVUrLUSpprUtxKbxBfrSKJpKKJonICppKHnKKJoopKISppSrMKrSrrUSSpxxMSxprUSMMSSpKMSttzzI9f9hMMMSrKSMKpprKKHnCSSKpMMSSrKKKKKCIIC9gnJonBpKAKJpJpBpKBnCpMKKCKCKpKSSSrSrMMMMKrMSSMKSSSprMMMpUKppSJpKKKKMKSSppIMIpKKMSKSpKMSSSprMrSrMMSSrKppMMKSSMSSSSSprSMKKSKBmgprSSppSIMzxCUzprMUyTObbyUzzzaOaUzzzUtzzzUUqOaUxy0bzzzbbtaTOaTOaOaObaOa5OWbaOtWaOWa555555NNOWaOaObaOa57-6WV0WWV--O97VWWWaObbbtyTUttyTOaNNNHV0V-N---9-V-777579775-0taTOaOaObyNOa5OaOWbbaTTTTTUztWbbbaOVOWaOa5-5N-7X--V-517T7---7-Wa0V-X7ccX7-7-77VV-5-7-5N17X7XV-0VN5-N5TNNNNN50aN-5Oza5OaOtsOWWaOWaOWaOaOaOaOaObaOaObaTTTOtbaTOtaOaOWaOaOaNOaOWWWaNOa5NNNN5-Oa5NN0WaT550WaNNN--N0aN7--0WcefIBf9en9geecmmf9eAAABgee9egfBgmeee7cX7X777cce5TTT-VVX1cX1c7197X977X7Xe79eX15hHX11717-7-V-V71177VXX7X7ce-V-1-1-----117--cXX77ce1-VVV-0u7X777117771177V771-717VV-977X77VVV-7X-OWxpSSMSrMKMSSrSrSy5150WV0V5OzJpKCKCCUzSrSSSrKrSprMKprpMUMMMpKKSpzSxxrUMSSMKpppSCKKSMISMSrMMUUrrSrUKSSpppMpSSSpxrrSKrSpSMKKJhSMKppKKppSKKSSprxtzaUTObbaObzzzbyUby5OtzrtzWsObbbtzttbtztzaTTUs-o-9SuvkpF---4GN0--Akuevkk-0Z-5DzUUzzUMMSrUUrrxzzV0k24nbEF-72uPs-31lfR-X0zvBgpOsN---Fjh-1VahUR-033plvivC44-bVp12CUzzrxpztzzzy2A979eeXd9eXXVGkPch_OLJKKa_OLujjznwwkzo-Eno-q32WRrMKpkV7-V--7jXk2-IvW9e-7xySpV2kZ-vaazk0-HWAOjKHprsWxta7ccV2FavYivl3F2cIsAppKMwN117X-81g-ifoF-L4N9UrkcVDFfPz___bjvjjEB3ByvEGJKK--WQlvV0kn8QjoF0NPnGrScX-E2V6yPuEF3-D6-ISGX-42b3rh-0NYH_ooy-3P8eEOJFGGIB-B-0-2043LaPdaeeiZ30003G002j-03-JGFGJ-4K-03G-3303330NBzB-UzzB3DvzuzByyfiivieivifevefjzyw-D9vlxqX-A58vaOYw-07nF-rFPV4lbM4aaabBn3B-mC6fBmmjSOa5N-25o35o--CiYN-gQSZPTw0--2QiX--66YJ-9FT6CN-BHQ8jadHQyddcyvG2232-F-8Hr8k--dcfk6dIezn9YpIBhC5Oa6y5UrWZmX70C2JVtUzzp4J-mXEjworrq557e-6IQmyv4--dmmEV-JuCMk-9SVlk3KDxRuPiueObi_JGTyycnBk--4-BF-eicPos02KqRDLPefeTiuiviuk-K33F-----6f9qfBnUWV-jMD3iO_aOaPOiwBnBnn--0evOEn5U5c1_T5ktLKKGTvjzzYp-w0Rg9s6ABmeWBmghJonKxCIKIKKSKWa6zzro5Uxltbe9e5OtVOWaN-N6w6y2ABcX17cXV-SWU2PBo-alHDReopsOa-OOYdiPPPgnE00--BsPu--Oo5J-5oKjx-AxeUxtaeeTeeffeuePauuvivijfieiivePgyvvC000000-3-3G35JG-2BF0-30-2FFFF--3hlWISD1-ER5o5evV0-0eu7_RjSSprzrSrcX7X7X7X--6KDt-HirDjBnBnKMba5551-3rQbzaaEBnpFJAmhxnKSSSSKKKKonIKKpKpMKrSKIr5UrNV79V1----V55N-1V1-7-7-X79-IUBriLagwC2-3jm7YKkV7jUvJLaLMeudeP_LPK3PfeaLeaa_F8aaLLOaO__KHdOK8__KeePOdaaieeeiiefifeeddddaaPadOPePPeeiiveueaeeivfeiuyzjvvizEBwwwzzEE2-kkBB2-2-kB-2-B222-B-k22-BB2-B-BB222-k-kF-B22Bk0-F32nyevg220-FF-0--0-F003G-G0-Cl0ab9eefxzzba-AX5ODuklF2RKFUonyUUaPXeV9sgwrddaLaPNn2BnEE0F3RULpn9opxbbbtXVe-Y_1riO_LKfvEink--0BfCIpy1V" :
		au.pn === aAv + 4 ? dd =
		"EcA20EP9t--46idaPadePOddiaeuuuebieeiiivuO_aRnufezijzzvzjvfuuPKJFJGG3GPKGPOaTiiiedaduus2EYuiedn2nyffdv32--0202EzeRwoG--Ezzjevck20202zeufik43BFBFK0G4-0_J--nyioC03-0002-n22wyddyjfzven3Eyv3JJ20-zynnEyjnnvjizjjejzyy_wznnBn2zvnzyvzBl3GG3G--23FFo0-wzBB8m--ZISrMUUSpzrxxrKrrSKpppKKIACBnAA9mmgfBcee9cXef9geeeXVf9999199ge17V7Hgce7c15ABee99eeXegegegfBgfA9mgomeecXcXgeXceXnBrxSxxzHecefAUUJceccgce0AxBeXXXeceY9nTUJgoepCJnzzzxIBfrMpIJmnpHmc58EJmnrSbrMrUKJnIKxrHgrUzrxKCbtzprzxKISpxzU5Ulzq0a-NOzzxxzSxrprSSpxxrzrtztyUtaOaTObzxpxrUyObaOxMKBn9pMKICCKSKIKKCMKCACBpCACBonIJnKIHhKBpKBpBonCBmnHmgeme1ggeeeX17Xc7VY9e7emdBe97gfBfBfBfBf9e7X7cXeXc19eX-ecXceX9Vf9cee7V-P1e9cecX7e9X7X-0XcX7c97e9V0--O6glDk-BjnBnJpKKMSKrrMSSpSSrxMrSSrMKMprSKzUzzSI9cmgonCKIJppI9YKCKCKKSKKSMMrrUzzzUSMSrUUUSzrzUzryUaUyUyUbxlzzs7-V15X----V---NNccX-ccc0y10WeeeeV--70V6xUztWxMSzbbc6xta11cX9X7V7-X-eHeggnCISpKHX1V1X-7-Oa-N5Xe98HeVVVeeV0X9711-3--XjabvBG-0s7nSrxGc9-BFOunededziszBzG0-G-KF2NDz6rSzzu9d99-0FVIObk153LiReenAUbbxzxzrpxq--e9e9e-A1JTaukCF07J23pq7---cVM--WN3QV1khy_awxF-H4kIRjyV-oCGnvjx3J-16-Ny-U2iSDjyffv33G4F-CWtG2GxSUlV79e--2nbB--6j1s0REhiviizkJG4-4X-vYML77-ZHJ3Pv3-1cZeNponGtV-V4lDIreOiuBl-3-DAESjT9-r4cgTLLKKOaQjzyvgn3FBEB--1pnH-E4zQyafnG--5BKbgN-3Oxws0iCDazIKxKMMIr5OVX1V7759-05hoa-4YPwIzTXc0oS4-OaOaanwnB0-qYoDA9pIrzxzpzpKzzzzUzrWVf9cP1ceceVemcc7cV0H9uMvF-eGU9USSbuX975JYvsOLKOKKK4OaLJKPueTzjEzjzBn2zj3-Bnwn-B_HnzBpIzyNX7V1mi7bfz3J09L-pSKKCSrs5P7VX7-YBjWieueuusF-F03-0dhx_nILN-03vANuaQYl---6b56-jf6VcBknBBn-Bk2BnEBkBkn-BnBkBw-----n2Bk------kn04GKKKaOaO__KKKPLOKLKGKKLKaKKKKKLLKaOOLGKKK3KaKLKOaKaOKKKG3G43G3J33F3G4G4JGznnE2--G-G3334L33G43J-33JG3KG303F433GK3K3GKG3G3k3GKOffaF--GG-FG3---F-3I-3F0-0303F40GGG-G03GG4FF0--FF2-----0---k-G-F3--04343G-G3KG030-0-Gk-2DwkG43F3G0-30-F3F30-00-G30-0-F-3--G33I--03FG3303F3-I0--3F-nDtfefeuvfideeviivfiuviuzwn--B2BBB22--wn9PeLeeLeaPOfjzyvuiveuifhfifiivevefffjiafjiuifeypeeeiivejEivjiivijfiuieiiueuieeeeeafieeeujvifffiuzziviuzivieifiififPivfeifivPvyvijviefivevevafieeaOeueevfeeveeeuiufiaeefifivizizzwmznEzzBnEzBnBnznEzzzzwzwEzwnBnEnAyzzBzzBn-nEnBznEwzzwnBnzzEEzBznnnBznEk--22B2zkzwnnwnzznBnnEzzzmvwEEBkBk-B2znEzEznBn--kBnBEnzBzzw---4--2-n-RB2Dvfzn0n-kB2BnB2nBknBBB2-n-3-KK3JG0304-G43GLJJK_K4JJJKJG3F43G03F3-Fk3-3-k--FLOadeOaOaOOaPOada__aOe_LPaPOK_KOGGKKKKOaOKKJG-K3Gk--nB-FF-3Rk-JGGKaPPeaPPeuieW00-FF3G3FFF--2-J0-GJ43G3JG-0KK2-3G3G-3F0-3G00-F4N2znB-3jEzzBk-ivzzfjEBAzievivivieevivueiuiuufivzzzvivzuivivjvyvzejvjwzzvyvzwnnBzn_ejEBzzEB2-LOKOaMBBzzBnzwzizieveefifieizzzvyzzznyyvzznvjEzzwzBijzjyzznDzzwnnEyznzznEnEEw2yajzDjwBvnznEnzkzEznivvheejwzjefievveyzByvnmeziuvfiyvyzjnzjBwnkzaeO_PO_dLLG4PPvjivjivjiuviyviyzjwzwnE2zBnBnB2-k--4222BzEOOaeiejxPeeuuuuqeuaeeuuefifefefeeffeuuifeveffeueiieuvfiiveufiivvfeuuiuffieeuufuffieyvjiyfeveiuiffifefieevuiivfjivvjwwnBn2BB--BBnnBwn--2-k2BBwzE---0--0B3F-k2-kBB--k---JF-3B---3F03-k2--wkzEn2-B2wEEE2Bn0BB0-kknBkwE-kk22--eUSCSJrLT7V71K0YLtevvyl3KFzwGJ-DWcRRqP-hG7KyLafizivwwG03G0F-acjpSSKy-VX-IJltLePvV---PeSVrBgmoxprMRTTOa77X77-0N3vk7eoElnII93nzSKBooUSX0aNX0a5V-1pfNUugBJ-9iOdUNV-4v1z-Sfs-zBgmX8MKAxy5NOzKbse7V-0U-Fk-1y-lV-4x-6--g6bj-3L4kbaTYn2J-apmECIJlaN--MR8FTPQYEwpGF-2W9GV-62Hz-7i5cMKKGV---y2dwQvz4K-NgIMwmnUzJopKCCKKIJnKKpKSKKSKMKrMMbrWbWtaT6a550VN---X157cV-VX77VVX7ce7V-nZT45OKJLLPzjzzBz2wLJF0I80TwpCpzpOWa5P7eeV-9fnj-3pOZ6JOX-2f5dcs" :
		au.pn === aAv + 5 ? dd =
		"CoE-7lR-YWRa2AEJenMxJpbqTObaOBcX5NeW_xnVto5UUzzrzUrtxtxrMKMUSSyN1XXV5NNOtaUUxzztzUxxpUSIBpSSyNN1aUrSpCCIJpKs50WVNN--7N6bbzrzxzrrpSMMSSMSzs9X7-X-VVVX99ccVVDUV19D--998a6rztVXaOV1771-78VN0V0V-7V---YV7Xh17XOWWV0V6pTOs-8V7XXpCF5-N-N-N-N0VObSxrSrSUyN-aNOsObrxMABnKUaUs-V1-N5NUzrxUWbzUSxprzCKHenMtzKoopSSSzzxxrMCJmnABegmXOs1ABmnCSKCKIC77gcepzSKBe9XfKrHh9eprxmnKMKLmehKCUrSrII7XnMUSxrUSIMpIABpryURpMbtxrrSrMUWtbzSnKKABgnAAKUxztrMUxrsObWtWzzUttraOtbUtbbVefaOrxxpStySStzVXaNTNN5SJhSry1zzSgmpSM9mmgofKpxryU_rUSxrPXmhMQIKSxrUrrxSxrprKLpMa-2V7Va-OV1XXAI97ee9m8a6TNSxSzzrtyTStbtzyUbzzbtztzzzyObaNObaOyUtzzaOttyUMy-f_zztztztzzxxrSopKprKKMSzrzzxzztttyOtaOaOZnBnBmn9mmmpMzbbzWaTOta5UyObtV9eg7XnBNN-7-ObrTUzztaOaOaOaNOa555-4KCCCBnIBnBnBnBpzzSzzxzba-7--6WV-1--771-VV------71-----NN-5---OaTOaNN---0WWWaNN56bzzbbaTTTTUCKSSprrSrMrrSMKpKSUUrSxzzzttaTNOaOVN---VV--X--1N0WVN5-7-0aN79enKBmVX9e9177-X770Ws7VX-WbVccOa-7OtzaUzy1WbyObaMxyN6UV4rUUy4zzaOaMWxyOzrzxrrTOzUUUrztzUzzzzzaNN--770aSSSztV-6rxzbbs5-NOUzzyMxzUxzV-1X9777e9gf9ege997VX7X9X71MMrV-V75-gnAHommmgf9emem9eefBmenA1AHmmfCC9h9m91AIHegn9emnAABnIBmV1mmegon9f9mXenI9fbV1ge7tzV--cgoon99gc0s76tV99nCLo1977Ebs50Vf-AKJcc-1fMMKr9c7-Aa-1mpBme9c-5OWWV-XV-50a0VVUV---1N18xy11--V1717V-0a0VV117V7-0VcWaN7Oa6aNN--OVV0SrWyUxzVe8UxyNN7X2bVSMVN50bbzWVXhH7aNTSraTObbWV0Us0WVOaN55OaOaOV5-OsND0tbzaUrrtVXX6rrV-X91V0V-N-V7X17X99f17X1XXeemXcgeA9hBce17XpA17fKKCK9e97hSrSHpomf9ABpSxHpKIKHhHhIJhMUhKnKUrKKyICCBnABpAAJpKBnIICA9opBme9hC9nCKQ97-XhJmfIKBhJoXA9empmpHhMTehICIBehIKSRkgomfKQ1971hKxQBpprSghCCJonCKKqpMSpBX17XhSnBopKSgpKopnKpIJpKSppIJprSzzKMTTTUQKMrKrrps5-KpUKKSSpMppSSKrrKMI9fBnBpHnK779nAMrSxzwonBmXXppQAI9fCLmhBop-s1-WV1hKBAJpBofBegp9mefKrpqfABfKzbpIAKMKHpKKBpIBpqmpKKKRnABooppKpLmnKJpCBpKABoonIIJpBpBnIHVX9e9f7ceeceegpSRe7f9mmonCJpKSpSQIIHn99cXee9mgf9Xce97V-5OV511711-V--7X1--MrSTT--VcNUUWV-7971--X77c1-VV-V1---AJXN--N5-7eYWs17Wa---cXcWs2aOVgc1ca0tVVD---V0V--55-1eX7X511V-8V5-ge9pMKpKJoepIIBmegXc-fCBmgfCIABfIBogmnAC1gnBnBfAABgm99ggefBXXccXf7VXe9XX6ba-XXX7c91X7VV7X1VV1-D0s55--6USrMSMSrWWbzs1menB1N7VUsN----2bVemACUSKKBk-VVfICKSpg9777--7hCSJpC-----bsN-OaOa56rJnIKT0a5SrtaUs99150zy50ty-55ObaOzbopHpMWa555Uzs9ef79gf9eopBcgnKRkAJomVa0V1da5-gnIBmWVVVWWzV-VXAMLkVVXNOVza-1hRmVNEtSrrpMSy17VTN1mgX7X2yN56zrMTUtztzSxzMrStbtyMxSppKST-V-UTUraUy1Xe-OaN9nHpKLegA9a1ccX1nIBcXXXcXcefA9gX7VVzs9XVbzyUVef-Obzs91UV-e9WWaUWaUzrUSrUrpzzUUrsUrs7efB999e971ceXX9ec7c4rMyTN11X-SprMMMbVcYa4xzzrIMpry1X-V19ge-zza5OzMUUUKpKps1-1OyTSzKMKnIKKSy1V0WxzT19XX-V-Xcf7gekcaUby19f9mdtyMtbzxtzSrWUzrSyOzzbrtrV9gXf1me-eecaTMs7cX8aTTMxSrMtrxtzrKKs--VXDOxSSSSCMUy-XUs7gV97V6tV6xprV7tVA8ySrVEzzxRopzbVXOVaUzbtzKopxRpMrV5StxzrzUV7TOVgiOtbaUzba-emVOtbaTObtbzbztbs9emgf9fBggf9mnAKRpgmmn9mmn9egge1-0ttV9mmme6a-iUbbzaOV7NSs5O_s8baNUVaMT0brs54SMMUICMaNOzzMsD1eeccXUSs8WVObttVVgfAIV71g7XmkXtaT2rxrSryOyMsAxs8a5UKtWWxpKztyObWs1mmon9Yy-X7N9on8V5OWVaNMMSrStVXVcV0WaST-aN55OVfABda6bUthMSrT17XN1fVU_ttzyUwprs2zzbWa6s1eopAA99eef9ttbyN9gcX0y-VDMptzs9cdV6s8WvKy0zy171OsUxT0V2brBpMs8s51kTTUxzxzxxrV17es1mfA-egeiTTOtV55OtttppSzUMV199-8bbrUVcAtSrs7XX7gnBnA9eTOs1cT5T2WxRpzbtyN9bs9ABkYWbbaShMsOWt_QMIKKxzT18VXTTUT-1hPecVOUVbaUzUU_rSSUVVX8tzzUT-ce9f9VemeeABfB8a5UzbWWWzzbbs6tSrVVWxrV79f755OWtyUs1-0aN-OUKMpry-c17aOzWUIMKprUUIMa-1X918V770aTObyUxIKSIJpCUVNN5--sNOMVN56_pKCJpSJoonKMVNNOa---OVsOptaKMT55NNUrKxxrMMT11115N7s9kc9V9VttMT0UTNO_xU_nJpUs7NUSzzSKKUMUts1e1T-c5TOVNOaOaUy2V50_zSUVX119X7USxs7--OzSCUbbKSzsUxRnCBnCCBnKrCIKJnIKM_pUVN5NN-7T50a5OWV0aNNNOWWxKKMBnAMxpIKKIMaSxs1X6rV-D6V-sT-UUVX1e9Os7zy-5SMUTOtpKySqpCBoe9nCTURnBpyOt_oonBnKttU_zV7a-5-tWWWtxxrqpKTOttSMsOrSxhBpT6bxSxrtUUIKAA9nHpHnBgeecf1ee9XnMxzxrUzUQCUxSs6SompyMs-0rSTUxtTMzzrrrUV1-sSxs777UrrrUMUtzUpMJn9e9ee-VhKgnMzUrynKtWzrzzzUxJpSKJnACKKs0Wba0V--UTOxyUrxzxyUxs-xyUrxzrUzprzUrpzUrrUrSyMrUSrrSUUUSxUaSfMT6xrSzrUrUUby18SrSrxrUpMUTNSUUzSSKSMSrMKhSzTKSpMLpMCSCCJopCIJpJonBonIIHnABggnBnA9nBf9geeg9ecce9cf1e9mm9mecf1eeece9X7cXXfBn97V9eA9cX7XfMQB97cX9997VV7ceXXnKSxxpSKxSxzQMUtxxhUr9Xs1AJmhUzUUSzzKSz1hUU_Sz_xrrSzUMUKrSxprqnH19pSKSpBpQABhMrKSxrKSzMBpxrppIMygpSrBopryKpzKy0nMMzba0rrUMStUSpSrMryMrxzbyUUMUty5-Ortbs78V77X77--Xe79pHfBg997X7X7X77ce-X7-zTOa0VV75TUUzUrrxSrrUrzzwfACKrsObs6TSz_zxrzxrrrtVN5Sy-4W_BQCq0c--5XUc-X5rCBxMa7PVDNUK-nSJp971_ESHe-mocmeKzxIIOxttzsTT-Ota0ee-057TlBpMMMlsOV7Xe---Z41V6NZVgpBmXJgnKMpr6WaNT0c7--3XZyYK57-DXainASrrUs-cXc0D9q9BhrKpMy6e7VHVV-19qEB--1him-7XjEvIohy--0DA35ggnKEGzTOs90X7-DANdhT7-7Xt_vISba9c11AoEBnACBxrSxSa0Wbba7ZmcWXV0Nl-LpUX7--232P--Y4hn-1NmHcmmnUy5--yBtECSKpGaNP197-0YF0nN-QYKBvKofomhMUtzba-1WcBcV17r9ZnpzsX9-4YWUUKaNc-1DHqB03YaRQJjHc9K9Mp9XmrHhrJhromghUxoOVT5OzMxtV5VNT--7VBc--DVec-5DXQxV-9EWOSk-7cyKynBpBnABoopJ5OaTT5NOs-OcVH7zjtnSIAHcgnCBomn9gjzUxrxCBeo6yT5Uc5Wzxru-e-Wy0s0aPc-39Fz7gpKSBcCHgcWggnIpRObztbxHggpoehryP6tbaT-VN-17---ZFFrV-t3OTpa7--GJ2c--GJFN-5GL3xc-9GPigq-T84fLpBpAMHpSBfACoemeoefCACAJrzttaUM5TUa5TUIErr0WWxOtWaOzyNNNN77977KACKBnAC90aTN1VN-7c-eGPvhSrq0ceV-1GRaD-9ZO8jSpKF--7--ZPZE--O6VKyV1O6qJppObVXc-aHHGgonUbVV-1ZZurAs1XHQCRnMzMppopDOVNWbttbYBec3mgce---HWfN-LHY8SS5X--09ahV-tAuEpN--TI4hxDUT7c-PI_QzrqXX-3ZxNzHzV--ZyYEV0dEl0pKsV---J06s--J71N--J8is--JDws-5JFcRs--JKrN0iJQsgnonCCL6xba6yOWXe9e--_6BUV2dHDArSUrz1XXX9-E_ADrICMKoN176X--0I2AV58JkgmgfIIICCTOaT0wNN--PKIxzUTcc-3_KPjIqV-1_MDbCV0yKYtSHpIpCSKHZlzLNV-10V55--5Kcizc-9KeMwq--0MPIV-dMpxrc--_Ul6V0OMzAnSN7-O_Wd6ppSppKMwNP-7X97V7-F_Zn6CzUrMOX9Xc7--_a82V-0OcIV-8OxHk--LW2N-DLaXxTX--4fBH-2_fwzLPV-0QFUV3OQn6xKMSxy0X-ee7-F_tjEBemhT6zzP7N-1_yrzR71uMvlwxIBemeefSu6zp9zTOzq-5TUxxWc9A97-9N1TU5V-0Va0V-8W-ps--NFDs--NFLN0aNK0UKptxxxrUNXXX9997V-DOBAzTX-2aJfQBy--0a2hV-0a3SV08aU0zT9V-taUEntc-5OtESV-eP2MzUSk6e9c-XPIwxMSN7VV-ddFArc-7aafrpUq-e7-TPquRnTTNc-mPxXxrrKlcVV9-3amCbSkV--5oXa-Gat6zSSzrUR7X7ec7-HQgPwxu7-9R1zzP-1tkzEmgj6zzXc-2b3DrLP--Ol2rq-78lqzrHegrzzzKEUTN6seVNcgeX-kbAFvBghCIKIIBpBognIJpMKSSxUSrSSxUrpK--0ogPV0OpIUnBOs-SbSprpUSI9jxa6aPeWzz5XeeV-PSyVwpEsV-CbXszKCCGWbsV7-0bZmzN--bbTv--0uTlV08uUInDTV-OulbqV1tuqQnCMF-5Ue-2bh7jJP--0vJ6V-0vjlV-OwCMqV-OwVCw-0twdKojFTNV3dwdbnUSMzs-PCA91V-HUDFBraV-5UKsSc-DUR5ByP--6rqa-2bsubMc--tyOApa7-yUdojJmnIqOtWV9--bxunV-0zWdVAOzeUnxBmfrrICrUUUUrpHzWVcWX1175X-Xc--UzJs-9VELhk--e0DGpX-2c8yvE5V0P1YAmzTX-Fc9eEBhHgn5Uta5N-OcBY6pSrIAUJgTOa-09We7-GcENbMSppzye9777c-9VzggtV-94IUs-9WO6SNV-95_ss-DWdaSDP-mcR2MBoggxrpUzzKSEzxUqUyX9ecWaNVe79V79c--WkEs-9WoBzNV2u6I8rMJpGaOV7Xc-9WxeRyV197X5onrsN9-1cXrMEc-uXElzMKM575NHe-09AHrpNP--1AZrV-eBC4rX--7ndq-4coH6ETP70HYKWxSMOxxc9XWbkd9V-9Edzk-HZ0xhyPc09Z7pBmpSxpy5O9V79--82Ca--86Zu-2dAgzUcV-PI-Bq--eIQcrX-1dKuADN-H_k1UrXc-9_qWSsV8uMPGmzMTNUUUSEMSxxze7e71c-XHee7-Ha0vzScV--aLfs01aO1woxIC6a-0tuc-DaUtSq7-6dh56pM0X7-7dp2zMSR-X--abWegmjUOWc-EdszfAKSzV5UNe9V1PUQ2nABUzc7-5by5U---cAvN--cHps-5cLGhV-DcONzR7--98tL-4e9eMrR7V-HciUxpX7-udBoSJfErlbuVX-29aVfmxIpGa7P--DdjHRtu-6eW7EKSN11--9XeD-jeZFrBfCpCSxpSrzJ5TUcOzaOXfBh9X9X--1c-1eGYR-5efWrCracV-1fXrV-ufyWxkV-ufAyBoeezUrzV-V-ugwopa7--fJNN-LfPwSpkVV-9iyzs--fqes-ifsnRxzxyXecV0ejZ8nMbe7-9ftmzP-FujbporSIzSpMUISCxzx-VUzrrTc6zy7Xh9ecVWuXX-7mcVHe1--ejc_xc-3ezMzK51-4ezOMKGV7-1g-Dw-Rf-nQAA9gnpMtzzzbttXXX7e-1f-oITV-agD2xzola9X-Ff2bjASrxSr-97VV-4f47MJyP7-9gJYUP--9lWRs-qg_aBfJxrzs117--gavs-PghqUKGX---fCFz-09nVOpqV--9njxk--gyON-Dh4IxL7-2fGYEENV-1ob8V-upTOpa7--hVws-XhbrSpLOcXV1eqiCpKR0yX7--9qk6k-PhjSS9c6y-7fR-rUrR7Xc-ehsTBgrqUscc-PiJ1hASaV-bfaA6AI9MMMHhzpUbzOyOz1X97-1ge7V-1tzIV1uu69nCrtwP-e-9ffCUprUkVXc-5fgVYCM5-V-9vpss-5jH-E--HjT-wxu--XjYHx9xSVN-19yPqognyT--pfugbS9rSrSMSrzpaUpSUMSkVV-VVVPHgccX1XX1c-9jiyz5V0Pz_GnSN1-4g0rMKR-7-HkBVxlu7--kCK70LkGUSpMSrOzuXWse7X9-4g57jrTXV-DkQfwxX--B98T--g9En-1v1y0pKorN7-7--gDm6V-v2vCxNV--l12N-Pl34RxUcX-0gHXnD-7gHhbKrq7X7-TlB1xMxcVcJ1lBSSrSSppzUzxpzT6xSSrKrMJopBmcXcxrMRUSpMKBgc7N1cX97971AMHYSSrMHcce7eVVN77XVX7-Oc1dMSHooe-V-CMKSSKq1VUpkUSrUSCMMMUSzSprKKHexxrSSxSxxyUSzzSUUSpSpSxKKBhUpttx57OaP0WyOaP-9-0V7X5CHcV77X1VVXXV-97cV----0c-7VXcY97X7ece1XABcc9--23yxV3v42inCMKrbVBe-0xXV-A4Ugk-aliIwpIMs----BS4D-2gSBER5V1v6fGpCCptV-X--BTnq-7gVUzKKT-VV--m1DN-qm1FRfpppNVN7N-DmEsxT9-QgZUjCSKEKR6xGWe57N-ZmVV0A8RQxR7--A8TUk-imT5xSTTTd9cV4Q8thxpponSpTN7-X77V--mZcN1immTUMSKCKMR16VUSprGbxkXBcVcX77V7V-TmmkSpUVcV-un7nSrMSxkX797V1ABckpMba99-0go5MN-5gpKjMMX7V-QCSMnV-vCllpk7-Pn_7wppc--6gu_jIIqN7-3gwCEUP1-HgwGzMMMSxlu7X7X1V1vETrmxSrTVX1--C-0D-Eh0RESoxSRN-X09--AFrbk--oIos-aoMTSIKFN5--5h58vIRNNV-2GitV-vH2_psV--oc-s0aoc_xKMSJe9JUUqN5P17VV-XoimSI5OycV-fHxjnk--CB5q-0hHcbN-VhHl6KpASSSKIMxsVWyP77VXV-7-HpEKxUX7-mpKbRoeKSo-NN--CNDi-7hOczxzTcXc--pboN-DpiAwpV-5hTmMpR5X-0QMjrnMN7-1hUQAT7-HqBoxK---DqWZRr--IhdNrKrSzOV5QBeX3e-9hfVIBpUzX17--CfpD-phgbjBmccjMJrzke76zrrMMSrUrpSyc17VVX7X7X7-HqmXSSX---qmvs--qqEN0HqtqSrxKESrNN7Xc1XV-2R4lV-fTzpnk-1hwNUTV4Prr2xMJnIC9EIrJomnqUKKCJeIIMOxp9MKzKSr6XX7--V57OV70WXV-5-N6a--V5fUUEofHchpKMOba7X5UTP7-0hzqEP-2i1rMSX-2vVmOnHpplxk-WcV-9sS7x5-2fXLhnESoxu7T17-2iCDURP-3fYKfrK9fISr6s-57---sq1c-DsqBSTX--DFu5-1iHcjR7Bmt9wxogcf95IIESpAAJegxUJfxI9onJeCrrrUrSUSSrSpMKSpUSrMKrMMMSMSppSKCyUUz5N71-0aP5OzyOzUSrUN6aOX10ty-7-0s-7cV-7X1X1-VX9XX7e9cecge16yX-X7X7BmXXcV-2iHoMUcV4Q_4_nBrpyOzSq5cXX7c-HtGWSpX7--tUGs-5u0pzc-Tu6aUSS-17-Tu7VxACOa---u7iN-5uEYS--5uEcz--auFlSKqNO99-2i_aUGuV0QdwKony7-BicpMJrMSc1-5V0feEApSWcc-5uYrSV-1uf6R--igpMV9vfYUppKHexxMzxxrUROttX1e7cW97HX17--2fYfV-Qf_oq-0Afj_rL7V0vfwMpMaX5V3Ag7opBpKpT575-7--fgPSna-4iqejAoOV-avQIxxrycce-0isQUF-1is_AGc-LvkFzM5X--fjqbr1--Dz_T-6j-zjASq75-1j1jzlc-9wL5ww--2lNpV-flSUxX-3j5MbM5X-Hj6HUJm_prMSk--7X--vlsIpk7-HwadwjOV-1wepR-2jAT6Ia-1fnTTxHnEy0X--Anark-9wvRwtV5QospnoxMSOzr0aNn9X797V-Qp0rq--QpG4o-0QpR0mxlX-4jL0rSq-c0XxPBBfBnEMKKyNNTOVN1e-6jMXUJlz11-EEgqwecX-s5OaSs-AjV-jKppq-17c-9y-hSkV3fsD9ppKIKDNNOVV17-Ty3bxJp0V--9yERww-0Ax-_npV--Ax2Ik-9zfaxkV-vzr2xk7-A-1BRy--3-zvV-w0lpqTc-I-kixr-c-A0MPENV3R55SnBpKkWa0zGVX-nkNrfACJeonMrxSrrrSrT55-IC9e-0ztVNX7X99--35IBV-R5UCqV-35iqV-w6ltpWc-60xjx--A1PugyV-B95ws-E1cpgpV--ki4IV1wAqXpUTUa1ee-4kl7ACOa7-02LhN-02YwN-I2aoBjy7-f2fQUKrScVc--I2gExS-V-b2tvSppo-7X-0kyWUF-1kyZMq7-036Ns-M36nwhr---RFUnqV-BFvKk-03Kgs-A3kyxNV-wI34p57-644wwN-64BcS--04PSN064PVSKSTUF14HcWc--BL4Uk-64ckSV-04jBN7r4jQxHppKKpMJxHe7V1-ecnIIKABoopUSognBnIAUtbotyOyNOsNTUSJnKq0a6ztbttVOzOVOX-5c0a5OV1XX7Ze9jpI977AI97--lSWj-FgMRSmf9zbrpzMKc0bxrKESxrlVXHVUbbpSkV7XccomXX9ZcP7-E4xwwja--lXvjV-wQInrsc0Q5ozSpKEryObbuVgce1c-Q64OwhMWX-0lmZbk-0lpy6P--GtFD-2lu5jKVV0RUb6mp6V-0m9erN-5mBT2BjNOV0wZLzpUk5XVPBZWrmmmmnIJrMSrSSSSKSMUxKpKrSESpbxSSrMOts7-7Ve7cnA9119-Oa0Wba7V---V7---ece-cmKJQBmp9ggzzrSKMMy-OyTTOX7X997X06mLdEBgnABnIIIICCAJnJpCCJnKJ0a5OtWa55Oa0WbaTObcV0WWV--I8QGBxs7-U8RIgpzs7c-29W_w-3mdg6Ctc-0mguE5-ZmlOjKBmmonUUUUbw-OzwN-VHmc1eV-wgZprsc-rANbgnKrUtX17c4UAhBhBenHYBocVgprSCHZnrrUMSxHnIKLOa-0VObaUzxWza0bsNOy1X7Xe9n9cV-1n8XjDN-IBkvzxXc-2BlYi-RnBjzIEMMKppKKF51-1-0V-9--nBzMVXBp7smn9f9XehBnCAIBomnABmceXeZegccZmonAAIBnKSMSrMVc57OyOaVUzWzOzxxzzztxzxxrrSrtbVOWtVN-OVP7V-0aT--RstSq--gtJnqP-3nilrCq7-AniufCAM0bbcV4UEFHBomghIHoonBnCKpKICSKpMxIBnJOtV-OsTOtsN0aUX7VN---6zOa--7fJe1-7nuYnACrtVc0EFVzgfBofKUUaOV0a73zH2ShKICCCCICCIBgnBpBpCICKpKCKRN55N-5N5OV0a0aN5-NNNOWV-NP7-zHTMwnJhpJ5-OVP-5oiBECSkV-0hBVAn9M6V-IIDDgzZc-2IgAR-1pHnrR--2KH6w-4pLvUIOaV-0KUwN92LmEgfBfBgqUSCrKKKBeVUX5-X4JmoocX-57NNmconHdBpJce99pKppppKIKopMrtxxxprKrMUStaN7-6yUza-7X9775ObzzStV--51--N-PcXX7-ILxOwoOV-UMCUghM5N--AMQdSNV0STQGrScX-8ptlrCCCta1-0CTnYnqP-0SVFsrM-70Eq1sfHnA9XcYCppSKKSErrSSCzpUUzKTOWaN0V0WX7VXWa-2KBme0WX19c-4qODnHrVN-2OnhB-Cqb12CCKJ-UcWV-IqjjQSrKAMzTNV7VXc-Nqu9fBnACIHnSLNOWWaOV--hjnFrX--r-vI-1xkFZpprOu97V-zr6zAApICSUpzKUxlyUrwUxKV56a6a7VVXY9_HmmeXVX1X9V4CmRVp9mrMaTUxT-e7c-OrAdfJnKrrSrrsN0X979X9-0rFTQP--MKdX--M_8P-DreVnCCSrzVVNec-AVFgBTV-T02FyV0L0slMs1c-6VTDEc-6V_Ajc-AV_JBtV-D5hsk-b_7iwnSROX1--OPBa-1tQurDN-Ya80xERTNXV" :
		au.pn === aAv + 6 ? dd =
		"DwCd1sP0j--RaO__ddedddifv2EEznnnyfEeRwyzBBBB2Bn00-17-2fEMK9dCrtzUrrMMqN-X-789V----Sf-T--yfzIrzohrxy6kX6rSk16k7---11J7Z-35CISoOxsUKESpEP6qOV6pJp9mec17cmhpxUSogfBnMMGWxptyUUzc5UrtttzpoTOV6lVVZme-gcfBc5cUrztbV73cWztaEO-1I5dLOfvkygzEyaOdzjzsl2knvg2EW2zEznvzzyzyfyyzzvjuMyzdzjivvvyyinyaTVyydzufvevjgwBoG-znzdiEdbg2vkyjEyiazuK_4OGaJaPjzYnzzjBwnvyfiigEnuP_vjuiaOMdezeififiiEfgzfusnEeO_ivviEuvjzyzivivivg3EjuyjiezjjisnvvEffvznviyviYEYyzjygnBz1_Fl-zivjEzyuwnB2z0434-4G304-44-CGJFKJEK42Bo-38G-340403LK2kl44G_GFn-G402l2x2433432vuvfvY4-l-0-FkF3G-J43G3FJ3-G5J2---20L-Y-8CqLKOzvEjYn3GF5N0A3mrIprrIryT1Wace1XV0F2MKYo-H05ahSVV1R1RHOKefiznn0-z4KUy5MEe17X7Xa17X7X7X7X7e7X7-17Xe1XeX1VXT0aN7X7X9X7V19X7V17-Xec7X-7X77X7VfBctaT-17917-X--7V0V-9Xe19X1cX991hJpKJpKMSKMSKUIMUrMprSrMSrKMSKrKKrMSrSKrMprSrMpKMSMMpMSKrKKCKMUzrxrSUMUKIABceV17-XcX7X7917X9X7X7e--0aN-7V17XcX77eceVX7X17919X1EzyTN5T-c-7X77X7V197XcVXN-7V-17-X18VXD---X7a11--7a17-99177Vce91X7XX1cVXe9XV-N-7a11177VVX12V0V-VX9-N0VVVX1-1171777s0V5-N7V7Va0bVN0VUV-VN-2Vs--a-NTN0WbV50WsN5-N5-N5-N5-OrxzST-VXcc-VN-1N5-V51-15OxUSxUrxSxSJpMs0V-8V5Oa1D18V91191X11-VVX19nCSSKSSSrMrKQKpK7cXXX7Xcs-1X1VXVV7777719-csN7714yUSpUSSryN77c7X0V-16a0VenB5-D0WV9X-a0WWVN-gpC7X-gm10tV0yN7NNN1VV-N1mm-N--s-7WWyN--fLocccAAC9555NUsSpy-Wa555-c--hIJpCCBmg5NN-NNN8_y--N0VD-epnIKCCLVXYWV-919prKSC9cV77-V0Vc11111TTUVVgkf1991D-e1-ceXX7X-WWs9cXXgcUxy10Va1cXei1monICI7g9-XgegmVgem7X6xyUVc8bbta6bbtrzMST--15NAA9egemfABXnBm9n9XmfBpMI9mggfA1eceeegn9eeXe9AIBme7g7Vecg7dV9mgecVfWzzyUzxSvCMtbtbzxtUryOzzttbtaOaTOzs97ea0VenBmN5N-XN9X9XiOa5ObtaNNNNOttVgggnB7e17OVN0WbtT-tWV5MV0ztbaUzMy2aOyStI7fCMtxrzzbKrUyUa5Oa0bUsOa1me7f9cD-1997-VTOWaUV-WWrzzxprWzUrqnBnCKrSSzySSza19Es9aOs-c-WsOaN50V-NObttrSSxzzbtyUbzzUUzUtxrUUTUyULpf7hKyTSBpMzpompqpSxUrSSrKprUSMMUTMxSrKSKrrrppMKMSSprSy50byOSzaKgpxza6zUtbz_zUmgf9mA1egmgf9pMsOzbtzMyTOzzMbttWy2WrKKIKSKSUtVOsUCLnKUtza5SzUxSSrSSzUSrMrUzMttSxxMSSHemgnKzUSzrzxzyUrtbbpSrzKtKrSAMKSs-T---X55UbsN9eem7iObtztyU_rQMKrUSMzzSrxUzzbyUxxyUs18s1UaUprzxMKJhSrMxpps-V-798VUtaOVOVD-XhHDN-6V9XXm7ce7VVtV-951-Ors18Wa-7-177--1-UVcOyUbzMTUbURopIKCIA7f1hMShJonIMTUMUSUKKUMrSrRchMJpSryOxxhIMprSJpxrs---Wa4xxrSprKmpKKxUSrUT5OV7N2a--7-ztVYVXcVV2aOzrzzxrSrbrIMxJogAMSMSUUSrrKJgpQJnAJX97hMMU7fHeX-en99pSrxwopCICBmcXXccXehSrprUxzbztTpKJonKCBfHeXnCLpBmX9XpSzrpKpABeepS9nKnBofKwnBopRpBopCJpKpKKMKIKxzSzzzxKMSSSSKxKSIKtTUWyTObUrrxzrzrbrSzrMSrpzUxySrxxzrrrzzbtztzyMxrUKQKKSSppMKpSKpxprrSrUUSxxrMprrttVD5SrV-a-NN71-cX7791-77VVVVX71-TT6WWbWWWVN-NN8V711-V777X11XVcccceXVXXNNN8V-15-9-VV791dV1-VVX7X1-sNOtrtxtxtySyUVNStUrUrrbUMrppzzrbbry6pKKrMMMrMMCSUUKepKxs0aTTMUUU_rMT-OVN-6T-7-a-777V-5-XMxSSxxrxMU_pzhUxSmpra6QKUbSyOSSnMxSyUKSxCMKUtprySzrxxKttbzbSrbTN0xzUKBpyTSrrMtttzprrSSrMSpprKCILpJhBhIBonKMKLnKICJnBgmmpBm9mnAABgggmeommnAAAJghKKKhKgmpAAJpIJopCIMIMIJpCKJpKUa-s550V2VN50VNT0s5OWs6VT5NNTTTTTMyUSSxQJpJpAA7fBprxpttWbbSSQKSSSMMzSrt_rUUbUbaMyTOVzTOs7777N70V70_pzKKzbbSJpBp11hIKqnKUtIAJmnJnJmnIBnBnJnKKLpBnJhI7e9778V1N5-NT0VOtbaNN9gmmmkfICCACBgonCBpQICBnI1fJo9pSQJohBchKhCKJopSMKSSMrSMCIBomooenABfAIABgnIIMtsOaObbxI9mmon9gnKUwpMJpJpJpBmpSCShMKCMKCBpCK10V7-77X1-cVV-7hKKCMKrppMKSKpIAKtxzxSKpxnHghUySrvCICBfCJpMbnAIBhBgompIIMC9mgfCCKBoonIIICBfIIICBopIIIKKCKKSKMUKpKxpSSxxMUMKKSKxpUpKrSKSKSKnICCJnCA1999-1A9e-7-cXXX17V70a-f7VV-1--7XXm997cXX9AAC9mgoekccXg97XXABmkf9f9fA9emXn9emgmgonKtxgnBfI9nBemef1X9-9gn9meeXA9eemegoefBmgnBnC9gnC9eeggnCJhBpBnKJnKKKKxpIKrRhBhAKBhKSKKKIMKKKF7Z2MkT__44OOaO__O_LLTbYvkyffBkEcw2knyaaiBkyEC-x-nl3-3VQ3QMsc-O-txaOjzzk4K_-7VS-vCSzc7V0J2qEPevjFF3F--6mTV-FGRlV--92TV0kLotbx-a7AuPnIUUoxxzbzrKrpKKMSSSlWxrUsWtzKlzTUyOzbw516xSUzWbsX6wNgc55Xc7mcXmgmeJmofomXXIBcYHcVPXZcVTUceX1d9me17ee9-A0Y6qioC-asBoenIBjSUIBjUSJe9ceV7177eV7fC9gpzzHeeICyUxA9efIrzM0zKaP6kOxIMtxzbxBgef9gfMSxyU6ttaUttzGzryOa-OV1XCJc9VcN7---40ekqQ--NDEDyV--Red-6VumnMUacX--0pcZ3P2fIBnrozKocX7X7poxognBU6zbzojHxISryUWX-U0XV--V9YHX7--6M-k--Do0VDFSy8__bfuePPaEykFkk03C2-3VwCbAMV--0t6o-92oUS0V4FUCSaOQzBn4---ywe-Y13Y5KOjuRyaEBG2F--GW_V0FZtli---3co7-38GgR-93kCEP-1kaQpeNn--L4BWBn5T-BFdZS_ePOvjjjjwk3-FJGF0sL9epCyN9-mkhAhaefdPOOaOd_eO_dPLyiiveeeyEnnEiEwBk2nEnBnEEEnnwwznnF3333GGKJJG3G4KKGJ-94g9CkV--ipW-VWVbABxrMKz5OzJxsNNNVXmXe9c--B49F--PnOV-FqcSV7sQLqmeeppUUSSxtaTU6yT97997eeMC2a-LKOaOaOi_vdPiuzjd_dvijyu_KFJGF33303FC2-oBBB4KLOOaaOiaeduaeeffdiuzzzyyydKKJLfivjjjYBwyuyynzyEnznvszkxFzwzjvEBG0G2zjgyuyYvybvzjyieKbfYBkwzivYvyvyEiviyvfuuuPfePPaadvvvjjeOLP_MdOKKK_UeaPMefvjjYzYknkkzznFzyEjzjfyvvEzjeQfjYvzznzyiyEsywzwzYvEgkG43K4GJJKGJJK3-zjsEzjjvzwyyvvC3J2G3FJ2yjFG04FK4F4K-OKGJGJG0GK43EB4GG2EEzyvvn2yduyvjyinzx33G033Eiw-o-KF2k-GGJeKO_-0PL_JBFGKOF_KOHK4GFxOHKGGFwp08J-yEYnlKKFJBwFJK9eOFHLTdJ-kkn0KKdFPPe_3-B3HeOaJ_2-EeVC-3JKLdi_FHK20dPJFk0O_JBl3KT_3K5LLfjdJeu_Fo3_JiePJF30-l3FGJFoGF-X6dJBfEOtsV0FxOWbo-D6uCS6X1v2zp5_4fu_4ivEdiuPdKJF45aiivivyyiviiijsn-znBkBF235J-GG_-nBl-w44aKKG-KX2_nCErSSSkOWa11XeXLG1g8_OK_OOO_aPuKOdajsydQjznzydLKK_5KaiuyzyvzzzyzjvjidLK3KKGKKKKKaQfefjizjzyvdefiiznyzzyEwznBzwzkn2Eifzjufwyyzjwww--GPO_--zVBnvgEekk3K3GG3JGGFFG2B-333-0--03G3HK4ePeefeQiaOK--3-0-JFKiydeJHKJ2C40GG_ddKFnB2-JF0cWyMmmyTN-ZGfute2---ZAWV0G8Ihi3--8AO7--I0sk-7aWNk-RIFpuEF018vKgpKEM6tWV7XV--L5Mk-NgeYlV6GUzf_eczf24_-k-1C0lB-I5ZZqOynkqK-5YJBIArlX-1Gfu8_yC-6YOlnKIOV---5qJB-DCgdwja-C61_LTvoG-kYgE2KIJnAAMUxzUrOxzTOWaZcV9176qXeX7cVDlqEh_PPeffijjnEBC203FFGJ-mDm3BfEMtyP89-C6VITdTn---2mET-26bSqk--EMts2wUQzuiijiibfV-EYnn3G4LJJGF1szi7nJnr550e--78qw-1FShy-27J7aR-eFczBxKoT7-V-oWi1tLgwk-9FyXENV7H7Of_bisywyoGJG-GZSgYBepxxpyN5X97-gZ3Btfw30yZX6E9mY9eememXeefSzxzT6xzUrMommceKIABhBeMUSxyOWbbbxzHpATTTV5OzxzSy15Ua5O93eme9cXWWbbyVcmVAmK5MiyiajY2Eil3G445J--Hp-s--aMYk-0CdpV2HW8xuvoG-28GGLmemxr6tsV-oczDQis3F11JY8BgnBopr6ztzzNOWX7e7omX-0mZRx_UkRdHRBnKMKpMJppJxponBop6bbzxpxKlbWa0WWWX-UzUUrMzlxrWaWXVd9n9WVVc91e99X7eeVjHcccOe1V--dDLF0OOWLmpy1-6AISazG-5_hMYrq3e-2mvLGeyn04-Ca5w69nUrSq17--QBDVUivzzlJKJJ-qNYawozzyNn97c23mKCO_OLdiffgwnBBBl-J-5OPQhV0wnGIOeeyin0230F5uPAsSSUrHprMSI9BenCHoeXAIrrUUUzTUzyN56rzbV0bxbtcOyOttztcmefBgfBn9ef9X7VXX7X7X7V9IG_jaaeivzB-pFn2KJ09Pe2Rhbzzxxu7cemc-CCRoydz-p--5k5q-ICZKiPvjk34--5npT0dDEw5Oeuaufdeu_PeijB-BBFkoFG2EfswFk3-JLJ-9Ul6xk-7nzgraaOeQfVBB-n-1XVgnghCEpKSIIIMKxML5-0Wc0c5V71-7-C0ccQ-B92pWnABnIBgmxUa-UbtbrzzrtbbueXBee5Pec-C21Ktk6e6I4rJpIBrMM0c-0zzbae91c7Qh2tpO_ddeeTbeeiiduuffeeefydbefjiedeeaijY-nnBwnznEBnnEwk-nveefdbYw3B-2koFFnyjueuTw2FyvfiB-32G0-oGK3-OdveeJFFFo3BoLK0JF-40OOaOa_8KKFB3OKefddFF0--02F-00G2--5cWxzMSV1V0JNHMaB-uYI9RnKMGWWaNe-HJRYn_aayu_jjjeBC-FJFFEjiwC44F2uEcgpJxIIy5-NVV-07cwk-PGjhlV3oZcraOPzkC-5eHK_nABpKKrK55-575TT-e0fHO2qaaabeuauQeiffeQffF-33-kk-BB222n4J3K--9LCls-CAWRtk-1QXrVIK7Wd___4aLywyizYzYEyEBw0JOJOJJ-edEvRpK5Os1V1CKLfOdOyszywkGG4-5etPbKtae-jKWNneePfiuiifiijifiw2yfeii-zefeeeeefYBBn--0033F3F03-G-3F03-4-0GGGKJ-ufB4MHjSzSomcXfMpzS6xKKKKMSsV-10a7V-75Ouec17-6Lbx5JE-PfeifA9eme9AJzrzxztyN57-SVW5uU-0qkprRxMSKSpKSrtV7X7X17--V-58t6-LgVLbBpIKrWzSqV0V7Ve--O0SB8LoLpxJnBgmpICBomogn9oghBnIBpUbWxpMOzzVUsUbaTOa55ObxonKESyUSzrzRUtWztsTUzrMtcVV-V-eX-0Zegee977XX-cemcY9ecV8q__U_OdujEvnBmK30--hDurV-5vfz37hzjz9gemecf9genrI9ggn97gegegoenBgopCJonEJUzpCKKIKonKSKMKKKSMSpUKrbzV0V5NN-77VV-7X-WWVV-N-0aNOWWbsN-0yUUUxzrzSMKrSICpJnIIErL5NOaUSxpSUMSSkOWWaV1-1-55--Vc7X5UxrpUSUxty51-cVXX97VcXZecV9r1ep_LLasznvgyw343F-AZ4Kk6pnU1tLuaOG5K_a_OLLPKeOddYzwwwzEnzEnwzE2E2C-JF3-4id5YIMV7-Cs_ftkIvpQOmnA9nBgf9YBoooofICBeeCBoqUUUxtza6aNUWba6aOaOWba5T5THcV7NLKvdveejzG-33F-5q05bAzy9VCvXK8_eeiyvujin304_-3-0FZT-95mmcgfAACBn9ggeAA9mmnCUtzrprpUSAAIBggecmmggghM6tzNOtttyTTTUbbbxzKa5N0bbbbbbaNTTTTTTUy551ccfAA99XXcWnw5hG_OLKOLKaO_LKOK_POOKdaPOaPOaaUzBnEknwknzE2En2nzEnzeKazEyzzjnwzzznyszgzzzwziyzjvvzjEnueOOdawzEnnwzEEnwwzEEnknEnB0JLJJ__OJ0K_JLK4K4_G8K4445K_48LK_OK4G44K4OKGF1TETamnMTOVc" :
		au.pn === aAv + 7 ? dd =
		"9mDS-FP-F--0TedPPOXo0HCGSpxrMptUSrUztztbbsUtaTTOzzzzStzSzSrSrSrppT-0btaOaNNUttVOa---56y6aOSrUaN5OzztztaOtTObtaNNUzaOSrSvHogmgfKpKSrCJgnIICMKrSryUWs--17XD--OaUzaOzyObzzztzrrUxUKprrzyUzzzzzzrSrrbzUSzyOaOsOzzzztbzzrAMSKzrUzzUSrUrrMKKSzzxrrxrxrrSrSrUSpMJnCKUV6aSxxUSxrSSMzzzWzz_zzzzzzxrUzxUzzrSzpxpxUSUxrxxSrrMSrSKKMKMSKKxrSKxzxpJmegnKzWzzoeepBpABgohBnBpMSKyOsT5T---OWWt_onKzzS9ehSrUzzzzrzzKKAILmfHnBpUztWsT0WaOaUzzzUrUrSzpxzzrSMSrzzzSKKKKpyTUaOzxzxrxxrxrUzzxzzzzzzzSrxrUrSrSzMSrSSrSrUprMKzUUUrbrbrbrrSMKxKKKpIKKKMKKKIBpKBnJnBhBgnCAIBnBnBnBgonIJoonIJnBnKBen17AKICIKKJgpKKCSSKKCKJpBpKIKBnKKKCACBpKMIKponBgfBnCHoonBnAKCKKCI9nBenBnBgmepCBn9cecegX-9eenHmognBmegefBnBenBnBenBgmonAKICCKKCKKKIKKJnCJnBmfBnBmpBnICIBpIBmpBmnBnABn8aObbaOa0bVOV1n9fCBonIHmonCMpQ9hCAJnJgnCBnBmpBpBgfA9nBmX9eeeXeXcXX9eee77gpKrSrzSrSrJnKKrrrrKJnCBnCBhCIBgemggeggef9eemmeecceAKKrKICJproomgmgeee9X9eXfKMSMAKMzrMyOtxrKCBe7VcfBprrBAIHnKhSKIBp9emgfBnCBpSMSUSxrrzzrKKLmnBmmnABpIKIBmgmnKSpSKUSrPkf9en9nAIKpIBgmXEV9gpB7Ve9VX9XbrUV1cc9V7Ws11chBeaN7tV7AIC7XN1N1777c2V-a5USy117aNN-ceef97Oa-Wzy1N-17WbyMMKSCKrs10WV-Ws978V-5-D5-s-7VcgmfMopCSppIA7XV--1-2bs717V15--a52aN-X1-cVN-X-V-ts-0V0VOV1OaOa1-2WV-sOV--7OV-V--VX-7--7-0yN7--7-X1OWa--1-0WVT--9N7OV--1-NN---V-17V-15Us--V--15NN7----VX1N7---X71--17eX7X7XX1VcX9XXcX9999A77eVeX9A17X9cX7X7X9cX7V7VV---717cV1717X717X-X7X71177X-X71N19--97X-X7-X7c-91X-X-7X7g7XVeX7Ws-177-17-5Oa5NOsOa5OaOV1XmX7eVcOV-95--5-sUWVNT5N--0WWtztaTT6WaOV7-0aOaOzza0aN0a--7VOV7s-s--6V-X---17X1Vc118V5OV7eX7XcXemnCCBfBnBoprSp9gn9cV17ee-9eee7eV4kDJ_aeiwn-FJ-u28mgpMSzsN-XeV5Fop6aeecBBk-F1t5Zdn9xxrs-9-O9QZyeevz-G3G-YcmK6CIIrUrrSrrrqOa9-X9X7X9cV1_beTuOPOPfznwwC3-4-Jh78rBeejprrSrNN--7-T5ITPw30U8E3BgonBzrtWzzaNVeeV8t9XtaOdOyzBwnEBKK-AmPDvCxrr-7X7ByJT4OdKaTizEydLQi_G48_OUdOvEvyuv-zyevvnzyBFzjvyBnzzznE0KKJJJK43JJG3JF0GKK-2BiSRpxxpWX7Xc" :
		au.pn === aAv + 8 ? dd =
		"DgBy1vR-AV60YBnopk-O_9DCIs4rUUrSSMUrSrSSSMKzypKSSMRpKMSrUKMSpKSSrUrSKIKSueXgnCKBgme9XenIKKMBpSKpKMMxpLppKKpnBoopKMMMMKpMKKKKrSzzza55ObzzUUSxppppCCSSpSSrRopSrrSSSppMMSSrKSzUtpxrxxphSMUMUSrrUzzaOtbaOtbbbaOzWWaN5Os6yN-ee117eme97cX--1117XmmccVaN1-Xy-XD-NT-6sDOa0y-cWtzrrKrrSpptWSxs1W_rMUMMUTUUzrrrrSrSxKSrKKzKSrMSrxxprUUzUyTOa-N-1-X-7--1-VV1D-EUUaOtSs-SyMzy-Xe1XXe999XcefCIKKUUn7X7eXee8aOV11UUUa-X7X0Ss1N1mVcf9ecekgk1AJmnABgn99mn9hIJhKKMB7797ee17y17V79Ve79nFX8s19nAIKI1n9pMKKT5Jp-hFgV1goV1nIF-hB-1kOsN56rSpppMtVX-77c7a5N-D550V-ObbaTTN-OVa----N--7s50y0VTNN-9maOzV17cVeepABnBpKKCBnBoopIKMMS9pKKKKKKIBWV-D-XemgpKBe9gm9eOzbyOa5OWV15NN7-N--V5-OV55-50aOaOa----99e77X9e770V1OVX-ccefABn997Xc77VccgceXegfBnH7cegcVX9ecD-VV-7-XV7Xcs5OaUT155-51XD--UtyUy--zWzzUzrbzyMT5OtztyOaOzKpxxIKKKKpIKKSMIKSKKSzztzbyUxtaUaNN5OyKs-6V0WV0_y-SppSICMKMTTTOtQBpSCMSsSrMSzyTMSprSptSUbzzygfKxUaObrMJpTO_pmpUxraTTOtttVUtaSSptzIAK99eXegfKgpCLmpMrUSpz7fKBoohUttrSrUrrSrSAKKUUra4pSzbaNTObaUyUxopBpSrzbaOyN10baSrrpzKpSSUtSzpUs-75N7cc91cXoX7V7Ws1-5TUbaOaOaSySzzzrzzzUtaN0V971A9eenBeee7Xe9cgcfAA9gggnKJgpgeee9eA9mfBgf9geVVX9fB7X6baOTTNNOtaOty52tzVNN9m7Xcce9715N5ObKt_y-8rMbzs90My6_s4raOUxrrpUMrz_rCMUry-eXUzrpySrxyObrztrzUMUttpztrVMrzrMsURhUxpsOpCUbrzqmenMtzmpzb_mfKzpooXX1pBpxSSKpSMSMKKCMKQKnCBmmeXcc71171-V--XpIIKKnIAAIBnCMMCKprzWV7sObKKrKUMsNN5UyMzzrBpztttWVaTObW_xpI99ghKKMxztaUUbzzzMy6vBgnACUtz_yTMrUzbnIMUtttV-UrUSrSSprMSSMyOWVX-18a0a-0yTOa5NOzrrRoonBpSKBpCKCCKSnCCBhBmme7efMSUSzUUaOyT5OaN-0aUxpoopMSzTN99WbV2VVXX9eYV0WaN-V-OtvKKUSzMrs1797VtpzV6rrSSrzBhKCKMSrT-Wa-V0V-X77ca--UzzzyHpMT-yT-7-sOaObbyTTOzUtsUIMSpSRnMzMT0WsTOs97hIBeX-X7tVVtzVc8WWaUonMzbKUsTUbSxrnMUKBoonJnJgpBpBoptaNOttaT5NUxprCUT1-VObbzrUzzyTUzzzy2zSxxxzry-1-Wrbtbs9zbzV9UV19-fa-taTOpUWxMsN716aUKyUps0xzaNN0VOWbaUzSrzaMrzVcX155OVOV0ztby-199f1XOWa-N-TOWa5UaNUaOa5OaUtzxtaN7egYy-VTOaUrnMwnKtzxpzaICTmoomenCKS9e9hSKxzbrSrSKBgpMKrWs-_yTNMbMyTOzrJnHnKxrKpSMKMSpprKSSMU9fBopKKpcfKSMAIKSrUMMpSSrUzVbrMUUTMympKrSrUUzMBnKSKrSxpJpMrUSSpSKS97cXXXXcXXXX9997ccX7c7X7V11171N-V-VVX1-71117-7-X19997V1mopKrSxpMMKpPeVX7hJfKCCKMMMMMKKpprUa6BpepKAK8V1meommnKMPgpAACReonACBopKSIKMMCKKKKKRpKCKJoprUtbbSSUs4MtaT-78sUxzzwpxxpxrKKSSSUSpUSSSSSKKKSKKMKSKJpKKKIKKKJoopBn9mccgpKICAMIKKKrKCJnIIBopMMzxxrrSxxxrSpSMSpKABofBnBn97710VA112V1171mmgn9k7V51-7XecXpAHhAIBooo-X75NN-XeXnBnKIBnCCKBnB9gpKprryU_ppSzyOWVObrzyTShPfIBnCK9hKCCJpKzrzxprSrSSUrxxqeeehUxzUrrABnIBhMzsOxrxSmgpxnMHnHhMnMICHmpMnHhSyMBhLopC9fIMhBnBnCJommmfAA1nBo97c9nMMrFhBgnBehBgfABfIKSx9X17N1emXABf9gmnJepJmhRmopKCMSUSxrMSrrUSxrrxrSrSrMSSMKKppCKKRognBggogeefI9mpxrr9nBggoog7--N-e999fAa-XfJV17s7XA97XcgecWV7eeAJpKKJoopCKBpKKKrTTMMKSxRpKrSzrzxxrStSrUUUSSpLpCMSKMSzMSSRef7Xce7e9X997-cX9-c-777-11197VXX17X7cgc0V0VNN1VOV-1-WVV-77VcV71-V-71--AJVV7XhMCBmfBnC797g-ACI7-Oa--11-Vc-1XVX9979X17V1-VV7cec9oppnBn1gXo71oome-1nHmgfBpKIBgmmcenIBnBnBnAAAIA9mmonI9egoXmggopCMKKKLpQCIBoopKopJcgnIBp9fACJmge7X77VVa-11-V7-VVVX-V72V7-7-VVV11-V7----V---N78V5NN-V6s9XOy1cepgpQIA9f9e7X777VX7UTUbta1eekXX7X0VcX91c--g7-11emXceeXX9ee99ce9g7cX999XXXX99X7XV-5-V7ceeegeX7X977X77-X7XVV-5-1-7--ecD-9hBX99onAMSKIMJpKSpKrMKJhIMKopST-NOaOrRopIBfIMSSMzxzUpzUUaUaUbttyUaOhBpIJppMKprSxrUrrKMKprRnBn9ggnBms9gnICIK99efBomceXgnIBcXceeeXeefBp9emceececeegmeXXeekee9X9Xf9ecee7X7-5N-a-N--NOWVN--V-1-V1--5---711171--550aN5--0V1-V77-55---------N-7XOta6aN1ggnBmnI7VD-VNN--NN1ghKBpKIKKJpKIIKCKKKCKIKKRnBopKKrKSSIJpIIJoopCIJpKUKSMLpSKKIIJpKKMSnKrUSSppKpMSMKpSKrKp9eepUrpSSKpSprrrzzzSrrzzzrUrzxrUzUzUyTSxnICKCACCCBnABnBgnBmnABnCBnBgmnBgmmmgggggf9meemeXggf9mgemmmenAAABmmmmXhA7cgnIIAIBnBmhBnIBnKKSMSpgnCKRnKKMKKpKSprQMQCIKKCKMKCJpKKpMBohRmnABfB-1V9sQR73q09kCIBed989cCHZpMUMMSMSUOxbpy0bbxSraOaOc7TVP29C9Vc0VBecV--7NVV-N8H9w--c9BgrX-BVhQICKrSsV-1VkNB1Dn9choeAEHp9A9eAKKp9fCI9Xme118BgecX7IKKAKrJce70cXXXcXMSppCzSpJxSMKSKSSrk-0xpxxzba-17Oxta56paOsNNTOyTOa--USkWzMUUzs--VWbrxrrVV-d9e7VHsFGFpA9BnCzzII9X97pxS9XHVZoogqUtzqUyUxx50WsTOXmgcOuVOXc0T4CohpochopxzyN7X7NXV-cNWurX-AW_mQ9horyWa--D6JABqN-51WZ4aN79-1XOJ2Oc-58_IBN-i8hrCBfItza-V2Nd5onEIMLOs-X-0se3gprOX1V5NezHrS9eACprpxy0aN7cVV07h4Zpy1V3shEFnKMUrzcVN7I91V-chgRwP--Xvb6V37jO2mfSxrUba79cV3cjXTpJpJOyTOX7gc--1B70i-6Y102KttXe-4Y2-QBrWV-qBklBoptztf9-7-aBzewzzyPee--YGg2-DspvZoeeeXmeA9mgmogn9fSApra0tzWzy6tzzbzztza-e-1YR0fR--PDnihKtVX-SYi0nMS9VecnMSUzxc7UNN5eV4HE3LxHx9HfA9nBxpaX5TUbzUpKDNUKBh9e5BfCMSFT6zUbaOd9V0aP7OZecWV-dYlL2AAIBmcozMopohpzU---NOaOa6X97-LEHZBzbeV07yFszq9V-cz9FrX-4YxwbHc6s-9FJpByV0d0kXnUT7V--FTac-5FvBCV-XGFeBnEUa1-686HMnJmxCIATUpUzV5--57eV2t6dDnABplyUaN1c--GxMc-9HB5gtV38862nCBopa0taT7V0d8AyppN7-1THOURmocpAKpBc9zSMU0aN551-USL---WZbifBogn9ghCUrLTTTOyOWs7e7V08F5moo5-48NGSmzJmVCKK6ls-0V-1_meQFN19MIGBrKKKKopKzWaUbsX7X77-17c-1P80D09ablQKBxrSSMSxzUSpSrSrSprMMUSVVVVV0baXX997XX7ccXVX17X7c-DQ9vBxX-PblGIMMSrMMMkVVOte97eX7-DUDUCL1-0bwmfD-3c-SvC55-NcAPfppppSrSr1117X171-Ju42Zn9gmd9ceceAMSrSppKrSIBfrKCMUUKk-T9mcV5Ua5Ubz6tX--0aOa1X902cKbrCKKJpHpIJnIKBnCCBfBfEryOttVOu5OaTN5OX0a-7--1---cRyM--P9esnVneG9xnBmn9grKKJnIJpKSKMKJporUonHe2IBmmnCBpCKrSrKpppxrSzUzxxrV5-NNNOV-Ws-XV55UrSrxyOc775-7egoe50Wta7X777N--7VOxrSVWtbzUUSqV6bWaN19cVX99gecemd9ec1xdFn2SrJeCpKrMSrKpSKSKIKKIICCI9XKMKCMSII9comomnAABpCIJpBmrTObs0taT5OsNOzaUSKMUtV-0aXX0WxOzaOV0zr1750zrGWX--XVVV-77X7V0VV-117XXXcHX1V39Nu-nKrUUyP7X9XVFeTW0xrI997KBcXBgnCAJpta50aUpIIBnKSzba-0VVUzbqNX1c--dA_c19eGowgggnCSSGWWWbaUsUUUccee705ejHzrzUUyNA9eXeV19fFvonOaTX-Rf_UfKCBeISJxrT-0WbbVNXe--AcyX--Aenu-lfzAABeconJnUP5UrSpKIpxLV0zML5-V7--1X7-2gTJfAOV-AQx3k--sU3c1TvB1BnKCIKIKCpMSGzr-0VN--751-19-0iur2k0FkOrQBgceZgnKKMMKKSJmXxpSSprMs6rJnrUra5NX7-X10X0aOVN-1cV70c16258gfA9fJmnIMKxzyOaOs-NNNX-7lElAMryXe7-042oc-A4AKhN-7gKbcmpIrX6zrxrMzUVeVX-gocVXV-3MmVV-3NpHV4wNq3mmmrUUrMUTP77-X7--lazYV3RQ6imfrrSprs-1X9-7liMQEOxse70E6TIBmZxlxxKOa77VV0I6vXBefKMIM5Ota50cV-RW4Rw-0RW5cnK5--Om5EABpMKBhSxxs17-0V5X--H5H1-9mCaYBoxbaP70emCc2MSIBepJfIIBmVP7mnCIAACCKIlV50bxqUV6zxxpCKprzzaUKa577cWVNUrOtV17V17V7Xcc--HEP1-0mI5IF-0mLgQF-amT1YIBonIIICBgonGaOaNOWVNOWba-02AS3hKIKIJN0V-5--AByfCsV-BqE5k-6CtMgN-0D4wcDzDLQCCCBpIIAAUJmmfBnAAJonCBoomgggfABpAKCJeecme9IBnKKKrMJrSrzUSKpMKpzrtttbxpMbbqOaUwUxObzrrK6aTTTOa5550Vc155ObWaOs9--0WWbtzyNce9cc-Ne7Vcc90zbcV0ztte90byTOXeXeeeVNXeeV0RupTnClV-hngH2CCCCJpKKKppUUtzbta5-V777-X177XV1wx_ZnIKKaN-V-PnvrYCJooerSo-OzuXVTOV71MEjtggeeeggnIAACJoTUzrMUbbttyN-AEykhD--x0GZrsc-2FY2g-4o9gQCSX-CjFseBonHonBf9en9eegf9XfCIBfBpCKMMHhCCKpCKICIpOtzSMMKKIJxUbbs7VN1---VV5ObbxrKCESzUpISy0bbbse1cX5-XVcXeV6y6aTNNNfBmehCCBee19cVV-0a6bzttyUyTUtzwUtttaNNOWV-1oImQL--AGQ0CNV-x5IkxkV0IIIYXm2V7XXeyUta5UV-46fyV0C78BrT7V0S83qnAyP2IoidnCSprrSxrSzrUMSxpMxzUUSSMMMMSzSSrrSprMSpMSSxrSxxxprrrrrUrxrSUUbtaUUL----WX-5N97X9emVP97719ecX-0aNcgmme6a9eX7199e77gecVX7cXXXXXcXX77X7X9egeeXX9-2oitACsV0hAoJnEbsc1EIX0Bgeen9gf9rSaOzzWyUrzqNX9-0CE-XnxVV-4FqeV0SGIunObe-1p622T7-0JRDc-0JfGc-vK0CgggrUzaT19V-CLDDs-6Ku0CV-ALMbENV-COvBk-bLoRjSrR-cX-8pp72IJoOWV--4T3HV-STYBq--hTbPoN-6pzxnBpT0X-5q4TfCGaNV-xXFHpN7-6N_hh--2NfsB-NqBUQHeCCtzSSSzT1cX11-1CZ-NpprX17-7qMXnCMyN7c-IOb-BnaN-0Owzc2fPAlBgggf9fAHoonAABgnCKCbbaT5OWaOaTOtbaTTOaN-0PiN7-MPkJBf6tV-4fLuV-SgO9lV-phLT7tV-4gqNV-4hl5V3xiFwnA9nAROzqOaOXV-SifanVGKwWFOaOV6zzzzUUy6tztbKta56s-WrzzsN-5T4rKpppSKSKKKM-6Sk2RmmeXgeggnTUbxyTUbyOe-OMnm0a50aOV-NNOyNOxtyN-fRZugenzttuc6MRg2gooef9eemeX7XeeeA9Y9BehCIUzrMUzzbrxzttzztzUzrzqUzzbzzzbbzrzzV-9fA9eeX0XeBeeY9e7-DrA8vSzrOtaXeec-0S7u7-rS8wBhCUbttcec-bSGCgnCzaN9-BrL6QBezxyTPXV4hpYLmgfCtzxzSttX9ce-" :
		au.pn === aAv + 9 && (dd =
			"EcCx-VQCO1iiqOLOKeeedae_ddadadadOfiveOeLeeeedadaPiuuiePPeeyeeeeOeaPadaeeydPeOedaOPLOeeeOadLOKLKKLJG4G3G4G4G3F-3GJG4G4KKG443G3G3G3G4K3K3K3GKKK3FJ40F33GK0K0K3G3F3F2nBnBnBnB-Bn-04G--BzzwEByvn-wG-BnnB2BkG44K-4KPKQyde_K-G3GKFwGPKO_O_K3J4KG4KKG4KKKJG4KJKK30304LOJG3GKKKKKQvjzuzziviueeaKaKPKKKKKKKKK3K_eOKO_OedaKaLaOevedaOGOeOeeaOaOaOeOjzvjyaPeOKKKOK43K_KKaveJGJ0-JG3G3GF3G3G43KaKF3G4aOedaOFKLK4_eee_dJK33KeaOLOaOjveeKLO_OaOaeKLPeivjeaOeOaJKGKJ4PdadafiyjedLPeueK3F-G30F3G3-3LOaOjeKLPe_O_OeaPfieieeyeaOaPOKOeedeOdada_daOdaKd_O_aOKPOKLKaKdK4LK3LTdaOdKaOK_KLPOaaO_LPKGKKK_KOaLO_aOOaaOdaPOdaO_OaKOdaPOdaPedeOJF--00LaPdeaeOfeyeiuudaueaaPdbeOeuefefuivfifujifieviivifeeid_G-04OF0-03KaPvievjizfeeLJ0-JG-KdOTvfiyviyujffviujeiufeiefivivfivvfeevivveiuueieiefeeiyejffuiuuiviuvfiifiieePeeaieieveuePdaPKJKefefefiuzzvzivviyfvnvjvzEzzjzwzzzBnzwnnk2Bwkn2zzknB-n2BnEBzyzzBzzEwnzznzzzjfzBzwzznziz2zwnBnBBkB--B2EBznEzBwnBnBzzBknEnEByywzzzzzEzz2wnzkzznEBwwEnEnEzznEzzzzzzzzEzwwEEizizizivjvjfznnzyyyvivzzwnyviuizyeyeKbifiuizzvifieeuyviuiuefie_iviiyjzvn3F3Bnw-BnBn2BnBnwnwnwnBkBBk22nEn-EeeieKdeiudaOaOPedaeePeee_KKLPOefzkzEEjzwk2B-k-kBB2yiiuieueeaeeaOOaOvzzzBzvjivjuiuyevieifiedaOeueuivivieuvfyvzvyvvuuvwzzyyvzzvjivvivvjyvznBnn2wzznwoLK-z2BknzEivePPLOOvjBwnEffeuyzefzuuujnkkGG-yzEEzBnEBnnBwnEBnznzzvzzznzvzzEBnzn-k-k-k-2-wB2B-k2-2nBB2kBBwnBw-nB-2Bk22Bw-BkknnBBBBBnBE-znznkkEnE2--kEBknBBkBBk2E-3-2Bk-k2B22BB2k-k-k2BBn-w2-32k-C3F--k-FG0G-22-2-FB--k-2-w-G32En--nB-2kKLePLdFJG3-F0033G043-l3-G3K3JK-32B3G4K4F--B--B--FGLJGJ3F03JLaeKFG--0---BFK--203FGGFG33F2nBFG3FGJ4GJ4K02GKF03-GKKG3K0JFK3G03F--G--l43--Bk--kG-FF3F03G-403G----l0----G--Bn33GJG340JG3-G4KaLKPKG-4-3F3F03-B-------G3FJ00--3KGF--0---03G0032T4mfgmegmeX7fBnJnKIEzzzzbrpzzaObtVOaNX9c9c0JN9cQfjzGG0F4NoWynBpJnKzzzV---Xc1RfMlOOvfvzwEw3GKKF-0gAIV-2OK2-3aoazBjs-pIUdyOaKaKaOfzzvgBnBF---1gInV-4OaA-BexerKESrs-V9V3q6e6dauVn3-0fPHBpMs-c-SiqWQwJ1mtRSUSKKKKKKJOzzxrROc11--TX-X7V7eeV4Meo2avi2kCK--EcNy-OUJfiLKdTzsBk-0kCPrF0fVVRjiveveiueOuveeeeaNn-n22-BG--030303K3F3B6-nnBnBrSr0a---EsTXQudeviviedazk-2-G-030K-4l1tMCkOc-57MIs-E3IhS5P-CYA-DLew--koIyA9emmfACMSrUtbzzzTTObrUtV7ge7X7eeV8QnZxddaebjwnB-30F3xzBZnMKCMzra71-7cV3wA4p_Qzzo4Ffy5yanHpIKSKMKSMSSrKKMofJppMKSKrSpSMKSzrzzrUtaOzsTN1oc5OaUzrHnCTOtaP755N5-T-NUTNN-N-5-5-N-P7X97gn9gmeee9n9meeX97cX7eVeX9cXV"
			), (new p8).pA(dd)
}

function a9y() {
	this.pm = null, this.cj = function() {
		var aAw = [120, 105, 92],
			cos = [12, 12, 60],
			aAx = [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
			aAy = [140, 130, 120],
			aAz = [12, 12, 76],
			aB0 = [240, 120, 1024, 30, 19, 30, 70, 8, 20, 3, 9],
			aB1 = [130, 117, 106],
			aB2 = [12, 12, 68],
			aB3 = [270, 210, 1024, 28, 19, 33, 50, 8, 26, 3, 9];
		this.pm = new Array(au.a7n + 1), this.pm[0] = {
			name: "White Arena",
			g2: 230,
			i2: 230,
			k6: 1e3,
			k3: 2e3,
			aA1: 173
		}, this.pm[1] = {
			name: "Black Arena",
			g2: 800,
			i2: 800,
			k6: 100,
			k3: 50,
			aA1: 43
		}, this.pm[2] = {
			name: "Island",
			g2: 512,
			i2: 512,
			k6: 128,
			k3: 32,
			aA1: 0
		}, this.pm[3] = {
			name: "Mountains",
			g2: 960,
			i2: 960,
			k6: 60,
			k3: 8,
			aA1: 0
		}, this.pm[4] = {
			name: "Desert",
			g2: 900,
			i2: 900,
			k6: 100,
			k3: 5,
			aA1: 0
		}, this.pm[5] = {
			name: "Swamp",
			g2: 1e3,
			i2: 1e3,
			k6: 100,
			k3: 40,
			aA1: 0
		}, this.pm[6] = {
			name: "Snow",
			g2: 1e3,
			i2: 1e3,
			k6: 100,
			k3: 20,
			aA1: 0
		}, this.pm[7] = {
			name: "Cliffs",
			g2: 1024,
			i2: 1024,
			k6: 128,
			k3: 32,
			aA1: 0
		}, this.pm[8] = {
			name: "Pond",
			g2: 820,
			i2: 820,
			k6: 200,
			k3: 100,
			aA1: 0
		}, this.pm[9] = {
			name: "Halo",
			g2: 1024,
			i2: 1024,
			k6: 128,
			k3: 32,
			aA1: 0
		}, this.pm[10] = {
			name: "Europe",
			pl: aAy,
			po: aAz,
			aAJ: aB0
		}, this.pm[11] = {
			name: "World",
			pl: aB1,
			po: aB2,
			aAJ: aB3
		}, this.pm[12] = {
			name: "Caucasia",
			pl: aB1,
			po: aB2,
			aAJ: aB3
		}, this.pm[13] = {
			name: "Africa",
			pl: aAw,
			po: cos,
			aAJ: aAx
		}, this.pm[14] = {
			name: "Middle East",
			pl: aAw,
			po: cos,
			aAJ: aAx
		}, this.pm[15] = {
			name: "Scandinavia",
			pl: aAy,
			po: aAz,
			aAJ: aB0
		}, this.pm[16] = {
			name: "North America",
			pl: aAy,
			po: aAz,
			aAJ: aB0
		}, this.pm[17] = {
			name: "South America",
			pl: aAw,
			po: cos,
			aAJ: aAx
		}, this.pm[18] = {
			name: "Asia",
			pl: aB1,
			po: aB2,
			aAJ: aB3
		}, this.pm[19] = {
			name: "Australia",
			pl: aAw,
			po: cos,
			aAJ: aAx
		}, this.pm[20] = {}
	}
}

function u8() {
	(qW = void 0 === qW ? document.createElement("canvas") : qW).width = au.eV, qW.height = au.eW, uC = qW.getContext("2d", {
		alpha: !0
	}), uD = uC.getImageData(0, 0, au.eV, au.eW), a1s = uD.data, ad.pR.pS(a1s)
}

function bv() {
	var e0, g2, i2, max, aB4, k3, aB6, aB7, aB8, aB9, aBA, aBB, aBC, aBD, aB5 = 1e4;

	function aBL(aBK, k6, ev) {
		var du;
		for (aB6[0] = aBK, du = 1; du < ev; du++) aB6[du] = aB6[du - 1] + k6, k6 = aB6[du] >= aB5 ? (aB6[du] = aB5 - 1, -k6) : aB6[du] < 0 ? (aB6[du] = 0, -k6) : (k6 += 16384 <= aF.random() ? k3 : -k3) < -aB4 ? -aB4 : aB4 < k6 ? aB4 : k6
	}

	function aBN(jk, jl, aBO, ev) {
		(aBO ? function(jk, jl, ev) {
			var du;
			for (du = 0; du < ev; du++) e0[jl * g2 + jk + du] = aB6[du]
		} : function(jk, jl, ev) {
			var du;
			for (du = 0; du < ev; du++) e0[jl * g2 + jk + du * g2] = aB6[du]
		})(jk, jl, ev)
	}

	function aBR(value, ev) {
		var du, a9T, gr, gg = value - aB6[ev - 1];
		if (0 != gg) {
			for (a9T = 1 + en(Math.abs(gg), ev - 1), a9T = gg < 0 ? -a9T : a9T, aB6[ev - 1] = value, gr = (gr = ev - 1 - en(Math.abs(gg), Math.abs(a9T))) < 1 ? 1 : ev - 2 < gr ? ev - 2 : gr, du = ev - 2; gr <= du; du--) aB6[du] += gg - (ev - 1 -
				du) * a9T;
			(gg < 0 ? function(ev) {
				var du;
				for (du = ev - 2; 1 <= du; du--) aB6[du] < 0 && (aB6[du] = -aB6[du] - 1)
			} : function(ev) {
				var du;
				for (du = ev - 2; 1 <= du; du--) aB6[du] >= aB5 && (aB6[du] = 2 * aB5 - aB6[du] - 1)
			})(ev)
		}
	}

	function aBU(aBV, aBW, ev) {
		for (var du = 0; du < ev; du++) aBV[du] = aBW[du]
	}

	function aBX(e9) {
		for (var du = 0; du < e9.length - 1; du++) e9[du] = e9[du + 1] - e9[du];
		e9[e9.length - 1] = e9[e9.length - 3]
	}

	function aBY(uY, gap, fq) {
		aB7.push(uY), aB8.push(gap), aB9.push(fq)
	}
	this.bh = function(aBE) {
		! function(aBE) {
			var du;
			for (g2 = aBE[0], i2 = aBE[1], aB4 = aBE[2], k3 = aBE[3], e0 = new Int16Array(g2 * i2), max = i2 < g2 ? g2 : i2, aB6 = new Int16Array(max), aB7 = [], aB8 = [], aB9 = [], aBA = new Array(g2), aBB = new Array(i2), du = g2 - 1; 0 <=
				du; du--) aBA[du] = !1;
			for (du = i2 - 1; 0 <= du; du--) aBB[du] = !1;
			aBC = new Int16Array(g2), aBD = new Int16Array(i2)
		}(aBE),
		function(ev) {
			var aBK = aF.random() % aB5,
				k6 = aF.random() % (2 * aB4 + 1) - aB4;
			aBL(aBK, k6, ev)
		}(max), aBU(aBD, aB6, i2), aBN(0, 0, !0, g2);
		var jk, jl, aBE = e0[0],
			ev = max,
			k6 = aF.random() % (2 * aB4 + 1) - aB4;
		for (aBL(aBE, k6, ev), aBU(aBC, aB6, g2), aBN(0, 0, !1, i2), aBX(aBC), aBX(aBD), aBL(e0[g2 - 1], aBC[g2 - 1], i2), aBN(g2 - 1, 0, !1, i2), aBL(e0[g2 * (i2 - 1)], aBD[i2 - 1], g2), aBR(e0[g2 * i2 - 1], g2), aBN(0, i2 - 1, !0, g2), aBA[g2 -
				1] = aBA[0] = !0, aBB[i2 - 1] = aBB[0] = !0, aBY(0, g2, !0), aBY(0, i2, !1), ! function() {
				var aBa, uY;
				for (;;) {
					if (aBa = function() {
							var du, aBa = aB7.length - 1;
							for (du = aBa - 1; 0 <= du; du--) aB8[du] > aB8[aBa] && (aBa = du);
							return aBa
						}(), aB8[aBa] < 5) return;
					uY = aB7[aBa] + en(aB8[aBa], 2), (aB9[aBa] ? function(jk) {
						var ev, aBd, du, a2z = 0,
							aBe = 0;
						for (; aBe < i2 - 1;) {
							for (du = a2z + 1; du < i2; du++)
								if (aBB[du]) {
									aBe = du;
									break
								} ev = aBe - a2z + 1, aBL(e0[jk + g2 * a2z], 0 === a2z ? aBC[jk] : aB6[aBd - 1] - aB6[aBd - 2], ev), aBR(e0[aBe * g2 + jk], ev), aBN(jk, a2z, !1, ev), aBd = ev, a2z = aBe
						}
						aBA[jk] = !0
					} : function(jl) {
						var ev, aBd, du, a2z = 0,
							aBe = 0;
						for (; aBe < g2 - 1;) {
							for (du = a2z + 1; du < g2; du++)
								if (aBA[du]) {
									aBe = du;
									break
								} ev = aBe - a2z + 1, aBL(e0[jl * g2 + a2z], 0 === a2z ? aBD[jl] : aB6[aBd - 1] - aB6[aBd - 2], ev), aBR(e0[jl * g2 + aBe], ev), aBN(a2z, jl, !0, ev), aBd = ev, a2z = aBe
						}
						aBB[jl] = !0
					})(uY), aBY(uY, aB7[aBa] + aB8[aBa] - uY, aB9[aBa]), aB8[aBa] = uY - aB7[aBa] + 1
				}
			}(), jk = 0; jk < g2; jk++)
			if (!aBA[jk])
				for (jl = 0; jl < i2; jl++) aBB[jl] || ! function(jk, jl) {
					var value = e0[jl * g2 + jk - 1] + e0[(jl - 1) * g2 + jk],
						wl = 2;
					aBA[jk + 1] && (wl++, value += e0[jl * g2 + jk + 1]);
					aBB[jl + 1] && (wl++, value += e0[(jl + 1) * g2 + jk]);
					e0[jl * g2 + jk] = en(value, wl)
				}(jk, jl)
	}, this.aAL = function() {
		return e0
	}, this.aA6 = function() {
		e0 = null
	}
}

function en(hk, hu) {
	return Math.floor(hk / hu + 1 / (2 * hu))
}

function a6f(hk, hu) {
	return 0 <= hk ? en(hk, hu) : -en(-hk, hu)
}

function iB(e0) {
	return e0 * e0
}

function vm(hk, hu) {
	return hu < hk ? hk : hu
}

function yT(hk, hu) {
	return hk < hu ? hk : hu
}

function yt(hk, e0, hu) {
	return e0 < hk ? hk : hu < e0 ? hu : e0
}

function aBg(e0, ev) {
	for (var iW = en(e0 + 1, 2), du = 0; du < ev; du++) iW = en(iW + en(e0, iW), 2);
	return iW
}

function fc(e0, ev) {
	return e0 < 1 ? 0 : aBg(e0, ev)
}

function aBh(jp, jq, qd, wY, jr, jt, qe, wZ) {
	return !(jp + qd <= jr || jq + wY <= jt || jr + qe <= jp || jt + wZ <= jq)
}

function aBi(jp, jq, qd, wY, jr, jt, qe, wZ) {
	return jp <= jr && jq <= jt && jr + qe <= jp + qd && jt + wZ <= jq + wY
}

function pI(e0) {
	return Math.floor(!!e0 * (1 + Math.log2(e0 + .5)))
}

function bH() {
	this.fa = function(hk, hu) {
		return Math.floor((hk + .5) / hu)
	}, this.aBj = function(hk, hu) {
		return Math.floor(hk * (hu + .5))
	}, this.sqrt = function(e0) {
		return ~~Math.sqrt(e0 + .5)
	}, this.pow = function(dE) {
		return Math.floor(Math.pow(2, dE) + .5)
	}, this.t4 = function(value, min, max) {
		return Math.min(Math.max(value, min), max)
	}, this.aBk = function(eA, eC, eE) {
		return Math.max(Math.min(eA, eC), eE)
	}, this.aBl = function(aBm, aBn, jk, jl) {
		jk -= aBm, aBm = jl - aBn, jl = 0;
		return 0 == jk ? jl = 0 <= aBm ? Math.PI : 0 : (jl = Math.atan(aBm / jk), jl += 0 < jk ? .5 * Math.PI : 1.5 * Math.PI), jl
	}, this.log2 = function(e0) {
		return Math.floor(!!e0 * (1 + Math.log2(e0 + .5)))
	}
}

function cc() {
	var aBo = [new aBp, new aBq],
		aBr = aBo.length,
		fw = -1;
	this.resize = function() {
		0 <= fw && aBo[fw].nG().resize()
	}, this.show = function(du) {
		0 <= fw && aBo[fw].nG().oK(), aBo[fw = du].nG().show(), aBo[fw].nG().resize()
	}, this.oK = function() {
		0 <= fw && (aBo[fw].nG().oK(), fw = -1)
	}, this.aBs = function(title, n7, aBt) {
		for (var du = aBr; du < aBo.length; du++)
			if (aBo[du].nH() === title) return void this.show(du);
		aBo.push(new n6(title, n7, aBt, fw)), this.show(aBo.length - 1)
	}
}

function aBu() {
	var nA, aBv;

	function aBw() {
		dg = !dg, gA.vR[0].uS = dg, aK.a5e(0), dr(dg, !1)
	}
	this.show = function() {
		nA || (aBv = new ne("Mobile Friendly", "Increase size of user interface to better support mobile devices", aBw), (nA = new nD).cj("Accessibility", new nC("Back", () => {
			nA.oK(), aw.jy.show()
		}, ae.lL), [aBv])), aBv.setState(dg), nA.show()
	}, this.resize = function() {
		nA && (nA.resize(), aBv.resize())
	}
}

function aBp() {
	var nA;
	this.nG = function() {
		var nB, nx;
		return nA || ((nx = new nw).nt(new nC("Account", () => {
			console.log("Account")
		})), nx.nt(new nC("Settings", () => aw.show(1))), nx.nt(new nC("Links", () => {
			console.log("Links")
		})), nx.nt(new nC("Replay", () => {
			console.log("Replay")
		})), nx.nt(new nC("Game Version", () => {
			console.log("Game Version")
		})), nB = new nC("Close", aw.oK, ae.lL, ae.lN, ae.lJ), nA = new nD("Menu", nB, [nx])), nA
	}
}

function aBq() {
	var nA;

	function cj() {
		var du, aBx, aBy, aBz = new o1;
		for (aBz.o8(function() {
				var du, nq, aBx = new nn;
				for (aBx.nt(new nz("Graphics", "Some example text which won't wrap. \n As long as the screen is wide enough ofc ")), aBx.nt(new ol(
						"Some example text which is marked to wrap (CuiWrappingParagraph), this text does not have any influence on the width of the different sections and fits into the available space.")), nq = new oL("Resolution",
						"Select the relative resolution to render the game at", fw => console.log(fw), 0), du = 0; du < 10; du++) nq.oV(10 * (du + 1) + "%");
				return aBx.nt(nq), aBx.nt(new oL("Quality", "Select the quality of the graphics", fw => console.log(fw), 2, ["Low", "Medium", "High", "Very High"])), aBx
			}()), aBz.o8(function() {
				var aBx = new nn;
				return aBx.nt(new nz("Gameplay")), aBx
			}()), aBz.o8(function() {
				var aBx = new nn;
				return aBx.nt(new nz("Accessibility")), aBx.nt(new ne("Mobile Friendly", "Increase size of user interface to better support mobile devices", aBw, () => dg)), aBx
			}()), aBz.o8(function() {
				var ox, aBx = new nn;
				return aBx.nt(new nz("General")), (ox = new nC("Reset Settings", () => aw.aBs("Reset settings",
					"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
					[new nC("Confirm", () => console.log("Resetting settings"), ae.l8, ae.l9, ae.lA), new nC("Other Button", () => console.log("Other button"), ae.lL, ae.lN, ae.lJ), new nC("Yet Another Button", () => console.log(
						"Yet another button"), ae.lR, ae.lS, ae.lT)]))).nQ(.5), aBx.nt(ox), aBx
			}()), du = 0; du < 10; du++)(aBx = new nn).nt(new ol("Sample Container " + du)), aBx.np(0, 500 * Math.random() + 100), aBx.nr(du % 2 == 0 ? ae.lR : ae.lL), aBz.o8(aBx);
		aBy = new nC("Back", () => aw.show(0), ae.lL, ae.lN, ae.lJ), nA = new nD("Settings", aBy, [aBz])
	}

	function aBw() {
		dg = !dg, gA.vR[0].uS = dg, aK.a5e(0), dr(dg, !1)
	}
	this.nG = function() {
		return nA || cj(), nA
	}
}

function bG() {
	"function" != typeof Math.log2 && (Math.log2 = function(jk) {
		return Math.log(jk) / Math.log(2)
	}), "function" != typeof Math.log10 && (Math.log10 = function(jk) {
		return Math.log(jk) / Math.log(10)
	}), "function" != typeof Math.sign && (Math.sign = function(jk) {
		return 0 < jk ? 1 : jk < 0 ? -1 : 0
	})
}

function cA() {
	this.a58 = 0;
	var a1x = -1,
		aC4 = !1,
		xt = [],
		aC5 = 0;

	function se(jk, jl, aCE, du) {
		return 0 === du ? jk >= aCE.jp && (0 === du || jl >= aCE.jq) && jl <= aCE.jq + aCE.wY : (jl -= du * (aCE.wY - tI), jk >= aCE.jr && jl >= aCE.jq && jl <= aCE.jq + aCE.wY)
	}

	function aCF() {
		var qd = Math.floor((dg ? .145 : .09) * fu),
			qe = Math.floor(2.25 * qd),
			gap = Math.floor(.065 * (dg ? .53 : .36) * fu),
			jr = dh - qe - gap;
		return {
			jp: dh - qd - gap,
			jq: g8,
			qd: qd,
			wY: Math.floor(.35 * (1 + .35 * dg) * qd),
			jr: jr,
			qe: qe,
			zS: gap
		}
	}

	function a3D(jk, jl, g2, i2, gS, tE, hu, aCN, dd) {
		var fontSize = (dd === xt[0][0].name ? .65 : .5) * i2,
			font = ad.km.oJ(fontSize, 1),
			font = n.measureText(dd, font);
		.92 * g2 < font && (fontSize *= .92 * g2 / font), gD.font = ad.km.oJ(fontSize, 1), aCN && (gS += 80, tE += 80, hu += 80), gD.fillStyle = "rgba(" + gS + "," + tE + "," + hu + ",0.6)", gD.fillRect(jk, jl, g2, i2), gD.fillStyle = ae.gG, gD
			.fillRect(jk, jl, g2, tI), gD.fillRect(jk, jl + i2 - tI, g2, tI), gD.fillRect(jk, jl, tI, i2), gD.fillRect(jk + g2 - tI, jl, tI, i2), gD.fillText(dd, Math.floor(jk + g2 / 2), Math.floor(jl + i2 / 2 + .1 * fontSize))
	}
	this.jy = null, this.a0p = new Uint8Array(4), this.vp = function() {
		return dT ? 4 : dg ? 2 : 1
	}, this.cj = function() {
		var aC7;
		this.aC6(), xt = [new Array(6), new Array(10), new Array(7)], this.a0p[0] = 10, this.a0p[1] = 5, this.a0p[2] = 2, this.a0p[3] = 1, xt[0][0] = {
			name: "More",
			id: 0,
			gS: 140,
			tE: 120,
			hu: 0
		}, xt[0][1] = {
			name: "Lobby 1",
			id: 1,
			gS: 0,
			tE: 0,
			hu: 0
		}, xt[0][2] = {
			name: "Settings",
			id: 2,
			gS: 0,
			tE: 0,
			hu: 0
		}, xt[0][3] = {
			name: "More Information",
			id: 3,
			gS: 0,
			tE: 0,
			hu: 0
		}, xt[0][4] = {
			name: "Replay",
			id: 4,
			gS: 0,
			tE: 0,
			hu: 0
		}, xt[0][5] = {
			name: d8,
			id: 5,
			gS: 90,
			tE: 0,
			hu: 0
		}, xt[0].push({
			name: "FX Client v" + fx_version + " " + fx_update,
			id: 20,
			gS: 0,
			tE: 0,
			hu: 70
		}), xt[1][0] = xt[0][0], xt[1][1] = {
			name: "Hide Usernames",
			id: 1,
			gS: 0,
			tE: 0,
			hu: 0
		}, xt[1][2] = {
			name: "Hide Links",
			id: 2,
			gS: 0,
			tE: 0,
			hu: 0
		}, xt[1][3] = {
			name: "Hide Zoom Buttons",
			id: 3,
			gS: 0,
			tE: 0,
			hu: 0
		}, xt[1][4] = {
			name: "Reverse Name/Balance",
			id: 4,
			gS: 0,
			tE: 0,
			hu: 0
		}, xt[1][5] = {
			name: "Resolution",
			id: 5,
			gS: 0,
			tE: 0,
			hu: 0
		}, xt[1][6] = {
			name: "Country Minimum Font Size",
			id: 6,
			gS: 0,
			tE: 0,
			hu: 0
		}, xt[1][7] = {
			name: "Leaderboard Refresh Rate",
			id: 7,
			gS: 0,
			tE: 0,
			hu: 0
		}, xt[1][8] = {
			name: "Reset Settings",
			id: 8,
			gS: 0,
			tE: 0,
			hu: 0
		}, xt[1][9] = {
			name: "Back",
			id: 9,
			gS: 0,
			tE: 0,
			hu: 0
		}, xt[2][0] = xt[0][0], xt[2][1] = {
			name: "Tutorial",
			id: 1,
			gS: 0,
			tE: 0,
			hu: 0
		}, xt[2][2] = {
			name: "Player List",
			id: 2,
			gS: 0,
			tE: 0,
			hu: 0
		}, xt[2][3] = {
			name: "Clan List",
			id: 3,
			gS: 0,
			tE: 0,
			hu: 0
		}, xt[2][4] = {
			name: "Privacy Policy",
			id: 4,
			gS: 0,
			tE: 0,
			hu: 0
		}, xt[2][5] = {
			name: "Changelog",
			id: 13,
			gS: 0,
			tE: 0,
			hu: 0
		}, xt[2][6] = {
			name: "Terms of Service",
			id: 14,
			gS: 0,
			tE: 0,
			hu: 0
		}, !dT && dX < 5 && xt[2].push({
			name: "Cookie Policy",
			id: 5,
			gS: 0,
			tE: 0,
			hu: 0
		}), (dT || 5 <= dX) && (dT ? !dZ.mustShowConsentButton || "0" !== dZ.mustShowConsentButton && "1" !== dZ.mustShowConsentButton || xt[2].push({
			name: "Consent Form",
			id: 7,
			gS: 0,
			tE: 0,
			hu: 0
		}) : "" !== (aC7 = dU.loadString(187)) && "1" !== aC7 || xt[2].push({
			name: "Consent Form",
			id: 7,
			gS: 0,
			tE: 0,
			hu: 0
		})), 5 <= dX && xt[2].push({
			name: "Force Restart Game",
			id: 12,
			gS: 0,
			tE: 0,
			hu: 0
		}), xt[2].push({
			name: "Back",
			id: 6,
			gS: 0,
			tE: 0,
			hu: 0
		}), this.aC8(), this.aC9()
	}, this.aC6 = function() {
		this.jy = {
			wV: 0,
			aCA: 0,
			zL: 0,
			jz: 1,
			aCB: 2,
			a8u: 4,
			a0q: 2,
			a93: 2
		}
	}, this.aC9 = function() {
		if (settings.hideAllLinks) ay.eE[0] = ay.eE[1] = !this.jy.aCA;
		else ay.eE[0] = ay.eE[1] = true;
		ay.eE[2] = ay.eE[3] = ay.eE[4] = !this.jy.aCA, xt[1][1].tE = this.jy.wV ? 130 : 0, xt[1][2].tE = this.jy.aCA ? 130 : 0, xt[1][3].tE = this.jy.zL ? 130 : 0, xt[1][4].tE = this.jy.jz ? 130 : 0, this.aCC(5), this.aCC(6), this.aCC(7)
	}, this.aC8 = function() {
		var v7 = dk().split("");
		v7.length < 14 ? this.aC6() : (this.jy.wV = parseInt(v7[6]), this.jy.aCA = parseInt(v7[7]), this.jy.zL = parseInt(v7[8]), this.jy.jz = parseInt(v7[9]), this.jy.aCB = parseInt(v7[10]), this.jy.a8u = parseInt(v7[11]), this.jy.a0q =
			parseInt(v7[12]))
	}, this.a3C = function() {
		var dd = gA.vR[2].rM.a3A();
		dx((dd += ~~this.jy.wV) + ~~this.jy.aCA + ~~this.jy.zL + ~~this.jy.jz + ~~this.jy.aCB + ~~this.jy.a8u + ~~this.jy.a0q + "0")
	}, this.aCC = function(du) {
		5 === du ? xt[1][du].name = "Resolution: " + ad.k0.tg(100 * aK.aCD(), 1) : 6 === du ? xt[1][du].name = "Country Minimum Font Size: " + (this.jy.a8u < 4 ? 1 + this.jy.a8u : 2 * (this.jy.a8u - 1)) : 7 === du && (xt[1][du].name =
			"Leaderboard Refresh Rate: " + ad.k0.tg(100 / this.a0p[this.jy.a0q], 1))
	}, this.g5 = function(jk, jl) {
		var du, aCE, aCH;
		if (!(7 <= x.sg())) {
			aCE = aCF();
			var gearIconX = aCE.jp - aCE.qd / 2;
			if (jk > gearIconX && jk < (gearIconX + aCE.wY) && jl > aCE.jq && jl < (aCE.jq + aCE.wY)) return WindowManager.openWindow("settings");
			if (aC4) {
				for (du = 1; du < xt[aC5].length; du++)
					if (se(jk, jl, aCE, du)) return aCH = xt[aC5][du], 0 === aC5 ? 1 === aCH.id ? (aR.a58 = (aR.a58 + 1) % 4, aCH.name = (aR.a58 % 2 ? "Proxy " : "Lobby ") + (1 + (aR.a58 >> 1)), b7.d4 = !0) : 2 === aCH.id ? (aC5 = 1, b7.d4 = !
						0) : 3 === aCH.id ? (aC5 = 2, b7.d4 = !0) : 4 === aCH.id ? ac.show() : 5 === aCH.id && (console.log("try showing ad:"), ax.dF.dP()) : 1 === aC5 ? 1 === aCH.id ? (aR.jy.wV = !aR.jy.wV, aCH.tE = aR.jy.wV ? 130 : 0, aR
							.a3C(), b7.d4 = !0) : 2 === aCH.id ? (aR.jy.aCA = !aR.jy.aCA, aR.aC9(), aR.a3C(), b7.d4 = !0) : 3 === aCH.id ? (aR.jy.zL = !aR.jy.zL, aCH.tE = aR.jy.zL ? 130 : 0, aR.a3C(), b7.d4 = !0) : 4 === aCH.id ? (aR.jy
							.jz = !aR.jy.jz, aCH.tE = aR.jy.jz ? 130 : 0, aR.a3C(), b7.d4 = !0) : 5 === aCH.id ? (aR.jy.aCB++, aR.jy.aCB %= 8, aR.aCC(aCH.id), aR.a3C(), aK.a5e(1), b7.d4 = !0) : 6 === aCH.id ? (aR.jy.a8u++, aR.jy.a8u %= 10, aR
							.aCC(aCH.id), aR.a3C(), b7.d4 = !0) : 7 === aCH.id ? (aR.jy.a0q++, aR.jy.a0q %= 4, aR.aCC(aCH.id), aR.a3C(), b7.d4 = !0) : 8 === aCH.id ? (aR.aC6(), aR.aC9(), aR.a3C(), aK.a5e(1), b7.d4 = !0) : 9 === aCH.id && (
							aC5 = 0, b7.d4 = !0) : 1 === aCH.id ? (az.cj(am.aCI, !0), az.cj(am.aCI, !1)) : 2 === aCH.id ? (az.cj(am.aCJ, !0), az.cj(am.aCJ, !1)) : 3 === aCH.id ? (az.cj(am.aCK, !0), az.cj(am.aCK, !1)) : 4 === aCH.id ? (az.cj(
							am.rw, !0), az.cj(am.rw, !1)) : 5 === aCH.id ? (az.cj(am.wc, !0), az.cj(am.wc, !1)) : 13 === aCH.id ? (az.cj(am.aCL, !0), az.cj(am.aCL, !1)) : 14 === aCH.id ? (az.cj(am.aCM, !0), az.cj(am.aCM, !1)) : 6 === aCH.id ?
						(aC5 = 0, b7.d4 = !0) : 7 === aCH.id ? dT ? window.webkit.messageHandlers.iosCommandA.postMessage("showConsentForm") : dU.setState(7) : 12 === aCH.id && dU.setState(14), !0;
				return aC4 = !1, !(b7.d4 = !0)
			}
			return !!se(jk, jl, aCE, 0) && (aC4 = !(aC5 = 0), b7.d4 = !0)
		}
	}, this.s6 = function(jk, jl) {
		var du, aCE, tF, kd;
		if (!(7 <= x.sg())) {
			for (aCE = aCF(), tF = a1x, kd = aC4 ? 0 === aC5 ? xt[aC5].length - 2 : xt[aC5].length : 1, a1x = -1, du = 0; du < kd; du++)
				if (se(jk, jl, aCE, du)) {
					a1x = du;
					break
				} tF !== a1x && (b7.d4 = !0)
		}
	}, this.gC = function() {
		var du, kd, aCE;
		if (!(7 <= x.sg()) && (aCE = aCF(), gD.textAlign = gF, gD.textBaseline = gE, a3D(aCE.jp, aCE.jq, aCE.qd, aCE.wY, xt[aC5][0].gS, xt[aC5][0].tE, xt[aC5][0].hu, 0 === a1x, xt[aC5][0].name), gD.imageSmoothingEnabled = true, gD.drawImage(
				settingsGearIcon, aCE.jp - aCE.qd / 2, aCE.jq, aCE.wY, aCE.wY), gD.imageSmoothingEnabled = false, gD.font = "bold " + Math.floor(aCE.wY * 0.4) + "px " + settings.fontName, (!aC4 && gD.fillText("Win count: " + wins_counter,
				Math.floor(aCE.jp + aCE.qd / 2), Math.floor((aCE.jq + aCE.wY / 2) * 2.1))), aC4))
			for (kd = xt[aC5].length, du = 1; du < kd; du++) a3D(aCE.jr, aCE.jq + du * aCE.wY - du * tI, aCE.qe, aCE.wY, xt[aC5][du].gS, xt[aC5][du].tE, xt[aC5][du].hu, a1x === du, xt[aC5][du].name)
	}
}

function bw() {
	var zh, aCQ, aCR, aCS, aCP = !1;

	function aCT() {
		aCP = !0, zh = -1, aCQ = new Array(4);
		for (var du = 3; 0 <= du; du--) aCQ[du] = !1;
		var aCU = Math.floor(1 + .02 * xP);
		aCR = new Array(4), (aCS = new Array(4))[1] = aCS[3] = aCR[0] = aCR[2] = 0, aCS[0] = aCR[3] = -aCU, aCR[1] = aCS[2] = aCU
	}

	function aCV() {
		if (-1 !== zh)
			if (0 !== jH && f.kd()) {
				for (var aCW = !1, du = 3; 0 <= du; du--) aCQ[du] && (aCW = !0, hC += aCR[du], hE += aCS[du], a8.s6(aCR[du], aCS[du]), p.zO());
				aCW ? b7.d4 = !0 : aD.kU()
			} else aD.kU()
	}
	this.sm = function(fw) {
		0 !== jH && f.kd() && (aCP || aCT(), aCQ[fw] = !0, -1 === zh) && (zh = setInterval(aCV, 20), aCV())
	}, this.si = function(fw) {
		if (0 !== jH && (aCP || aCT(), aCQ[fw] = !1, -1 !== zh)) {
			for (var aCW = !1, du = 3; 0 <= du; du--) aCW = aCW || aCQ[du];
			aCW || this.kU()
		}
	}, this.kU = function() {
		if (aCP && -1 !== zh) {
			for (var du = 3; 0 <= du; du--) aCQ[du] = !1;
			clearInterval(zh), zh = -1
		}
	}
}

function bx() {
	this.j7 = new aCX, this.w7 = new aCY, this.lj = new aCZ, this.a58 = new aCa, this.cj = function() {
		this.j7.cj()
	}
}

function aCa() {
	var aCb = [];
	this.aCc = function(a3V) {
		var du, hk, a53, rl, aCd, aCe, a4a, aCf, aCg, aCh, aCl, aCm;
		if (a3V !== aP.j7.a43) aP.j7.close(a3V, 3239);
		else if (6 === x.sg() && (bC.a4h.a4i(), aCb = [], aL.cj()), 7 !== x.sg()) aP.j7.close(a3V, 3251);
		else {
			for (a4a = [0, 0, 0, 0], aCf = ai.mY(6), du = 0; du < 4; du++) a4a[du] = ai.mY(aCf);
			for (aCg = ai.mY(4), aCh = [], du = 0; du < aCg; du++) {
				for (aCh.push({
						id: ai.mY(5),
						u1: ai.mY(4),
						a4y: 1 === ai.mY(1),
						pn: ai.mY(6),
						a4w: ai.mY(14),
						a51: ai.mY(aCf),
						a52: ai.mY(9) + 1,
						a3e: ai.mY(10)
					}), a53 = ai.mY(3), rl = new Array(a53), hk = 0; hk < a53; hk++) aCd = ai.mY(9) + 1, aCe = ai.aCi(ai.mY(3)), rl[hk] = ("" === aCe ? "other: " : "[" + aCe + "]: ") + aCd;
				aCh[du].a53 = a53, aCh[du].rl = rl
			}
			a3V = ai.mY(16), aCl = ai.mY(20), aCm = ai.mY(12), 0 !== a3V && (bC.a4h.it ? aCb.push({
				aCk: a3V,
				aCl: aCl,
				aCm: aCm
			}) : bC.a4h.cj(a3V, aCl, aCm)), aL.a2M(a4a, aCh)
		}
	}, this.a59 = function(a4x) {
		var aCn;
		return !!bC.a4h.it && (aCn = bC.a4h.aCo(), ag.bh(34), ag.p7(1, 0), ag.p7(3, 2), ag.p7(4, a4x), ag.p7(16, aCn[0]), ag.p7(10, aCn[1]), aP.j7.send(aP.j7.a43, ag.mX), 0 !== aCb.length && (bC.a4h.cj(aCb[0].aCk, aCb[0].aCl, aCb[0].aCm), aCb
			.shift()), !0)
	}
}

function aCX() {
	var aCp, aCr;
	this.a4G = 5, this.a4H = this.a4G - 1, this.a3S = this.a4G + this.a4H, this.a3R = [0, 1, 5, 2, 6, 3, 7, 4, 8], this.aCq = null;

	function aCx(du) {
		return aCr[du].aCP && aCp[du].aCx()
	}

	function aCz(a3V) {
		aCr[a3V].dV = b7.dV, aCr[a3V].aCt = !1
	}
	this.sO = 0, this.a43 = 0, this.cj = function() {
		this.aCq = new Array(this.a4G);
		this.aCq[0] = "territorial.io";
		var du, aA1 = aF.a9d(0);
		for (aF.u6(0), du = 1; du < this.a4G; du++) this.aCq[du] = h.rA() + ".territorial.io";
		for (aF.u6(aA1), aCp = new Array(this.a3S), aCr = new Array(this.a3S), du = this.a3S - 1; 0 <= du; du--) aCr[du] = {
			aCP: !1,
			dV: 0,
			aCt: !1
		}
	}, this.wD = function() {
		return this.a43 < this.a4G ? this.a43 : this.a43 - this.a4H
	}, this.iH = function() {
		for (var du = this.a3S - 1; 0 <= du; du--) this.a3N(du) && b7.dV > aCr[du].dV + 15e3 && aP.lj.aCu(du, aCr[du].aCt)
	}, this.zm = function(a3V, aCv) {
		if (aCr[a3V].aCP) {
			if (aCp[a3V].aCx()) return aCp[a3V].aCy(aCv), aCp[a3V].a3N();
			aCp[a3V].oK()
		}
		return this.aCw(a3V, aCv), !1
	}, this.aCw = function(a3V, aCv) {
		aCr[a3V].aCP = !0, aCz(a3V), aCp[a3V] = new aD0, aCp[a3V].cj(a3V, aCv)
	}, this.aCy = function(a3V, aCv) {
		aCx(a3V) && aCp[a3V].aCy(aCv)
	}, this.aD1 = function(a3V, aCv) {
		0 === aCv ? q.zo() : aCv < 3 ? aP.lj.a2D(a3V, aCv - 1) : 3 === aCv ? aP.lj.a5S(a3V) : 4 === aCv ? w.zo(a3V) : 5 === aCv ? a3V === this.sO && aP.lj.aD2() : 6 !== aCv && 7 === aCv && aP.lj.a5u(a3V)
	}, this.a3N = function(du) {
		return aCr[du].aCP && aCp[du].a3N()
	}, this.send = function(a3V, mX) {
		aCz(a3V), aCp[a3V].send(mX)
	}, this.sN = function(a3V) {
		aCr[a3V].aCt = !0
	}, this.close = function(a3V, aD3) {
		aCx(a3V) && aCp[a3V].close(aD3)
	}, this.aD4 = function(a3V, aD3) {
		y.a3Y(aD3), aCx(a3V) && aCp[a3V].close(aD3)
	}, this.a3a = function(aD3) {
		for (var du = this.a3S - 1; 0 <= du; du--) this.close(du, aD3)
	}, this.aD5 = function(a3V, aD3) {
		for (var du = this.a3S - 1; 0 <= du; du--) du !== a3V && this.close(du, aD3)
	}, this.aD6 = function(a3V, dE) {
		aCp[a3V].oK(), y.cj(a3V, dE.code)
	}
}

function aCY() {
	this.aD7 = function(a3V, mX) {
		ai.cj(mX), 0 === ai.gJ ? aP.j7.aD4(a3V, 3205) : 0 === (mX = ai.mY(1)) ? function(a3V) {
			var aDB = ai.mY(2);
			0 === aDB ? (0 === ai.mY(1) ? function(a3V) {
				var du;
				if (0 === a3V && 8 !== x.sg() && !(ai.gJ < 4)) {
					b0.fv(0, ai.aCi(ai.mY(5))), b0.fv(1, "[" + ai.aCi(ai.mY(3)) + "]");
					var aDE = ai.mY(12),
						aDF = ai.mY(6),
						e9 = new Array(aDE);
					for (du = 0; du < aDE; du++) e9[du] = ai.mY(aDF);
					q.zq(e9)
				}
			} : function(a3V) {
				var du;
				if (8 !== x.sg())
					if (ai.gJ < 3) aP.j7.aD4(a3V, 3208);
					else {
						var aDG, ql, a3V = ai.mY(1),
							position = ai.mY(16),
							wl = ai.mY(4),
							e9 = [];
						for (du = 0; du < wl; du++) ql = ai.mY(14), aDG = ai.mY(5), aDG = ai.aCi(aDG), e9.push({
							name: aDG,
							ql: ql
						});
						0 === a3V ? bA.a2F(0, e9, 10, 1, .36, .55, position) : bA.a2F(1, e9, 100, 2, .47, .5, position)
					}
			})(a3V) : 1 === aDB ? aP.a58.aCc(a3V) : 2 !== aDB && 3 !== aDB || aO.cj()
		}(a3V) : 1 === mX && function(a3V) {
			var tF = x.sg();
			if (8 !== tF) 10 === tF && aP.j7.aD4(a3V, 3243);
			else if (a3V !== aP.j7.sO) aP.j7.aD4(a3V, 3244);
			else if (0 === ai.mY(1)) b7.rW.aDL(ai.mX);
			else {
				var du, m2, tF = ai.mY(2);
				if (0 === tF) 3 !== ai.gJ ? aP.j7.aD4(aP.j7.sO, 3230) : (a3V = ai.mY(9), m2 = ai.mY(7), 0 !== h7[a3V] && 0 !== h7[eq] && (m2 %= b3.dv, k.m1(a3V, eq, m2), a8.n4(a3V, 1, m2)));
				else if (1 === tF) ! function() {
					var lj;
					2 !== ai.gJ ? aP.j7.aD4(aP.j7.sO, 3235) : (lj = ai.mY(9), 0 !== h7[lj] && 0 !== h7[eq] && aV.a9k(0, [lj], !0) && k.mJ(lj, 1))
				}();
				else if (2 === tF) ! function() {
					var lj, target;
					3 !== ai.gJ ? aP.j7.aD4(aP.j7.sO, 3236) : (lj = ai.mY(9), target = ai.mY(9), 0 !== h7[lj] && 0 !== h7[target] && 0 !== h7[eq] && aV.a9k(1, [lj], !0) && (a8.n4(lj, 3, 96), a8.n4(target, 4, 96), k.wE(lj, target)))
				}();
				else if (dA && !dC) {
					var ev = 720;
					for (ag.bh(14404), ag.p7(1, 0), ag.p7(3, 4), ev = Math.min(aa.lf.mb.length, 720), du = 0; du < ev; du++) ag.p7(20, aa.lf.mb[du]);
					aP.j7.send(aP.j7.sO, ag.mX)
				}
			}
		}(a3V)
	}, this.a4J = function(mX) {
		if (ai.cj(mX), ai.fw = 1, 2 === ai.mY(2)) {
			ai.fw += 20;
			for (var a5X, a5W, name, mX = ai.mY(9), tz = ai.mY(14), u1 = ai.mY(4), a4y = 1 === ai.mY(1), a4z = ai.mY(6), a50 = ai.mY(14), aDK = ai.mY(9) + 1, qh = [], du = 0; du < aDK; du++) a5X = ai.mY(1), a5W = [ai.mY(6), ai.mY(6), ai.mY(6)],
				name = ai.aCi(ai.mY(5)), qh.push({
					name: name,
					a5W: a5W,
					a5X: a5X
				});
			x.a3j(), au.bh(a4z, a50), 1 === qh.length && a1.a5K(u1), ty(tz, mX, qh, u1, a4y, !1)
		} else ! function() {
			ai.fw += 20;
			for (var a5X, a5W, ql, name, a4A = ai.mY(1), tz = ai.mY(14), u1 = ai.mY(4), a4y = 1 === ai.mY(1), a4z = ai.mY(6), a50 = ai.mY(14), qh = [], du = 0; du < 2; du++) a5X = ai.mY(1), a5W = [ai.mY(6), ai.mY(6), ai.mY(6)], ql = ai.mY(
				14), name = ai.aCi(ai.mY(5)), qh.push({
					name: name,
					a5W: a5W,
					ql: ql,
					a5X: a5X
				});
			x.a3j(), au.bh(a4z, a50), ty(tz, a4A, qh, u1, a4y, !1)
		}()
	}, this.a4E = function() {
		ai.fw = 1;
		var aDB = ai.mY(2),
			aDJ = ai.mY(10);
		return aP.j7.a43 > aP.j7.a4H && (aDJ += aP.j7.a4H), aP.j7.a43 === aDJ ? (aP.j7.sO = aDJ, !1) : (aP.j7.close(aP.j7.a43, 3247), aP.j7.sO = aDJ, aO.a49 = ai.mY(10), aO.a4A = ai.mY(2 === aDB ? 9 : 1), aP.j7.zm(aDJ, 5) && aP.lj.aD2(), !0)
	}
}

function aCZ() {
	function aDR() {
		var dc = db(),
			aDT = Math.floor(dc / 16777216);
		ag.p7(24, aDT), ag.p7(24, dc - 16777216 * aDT)
	}

	function aDS() {
		ag.p7(14, d7), ag.p7(4, dT ? 2 : 12 <= dX ? 1 : 0 < dX ? 3 : 0), ag.p7(1, dA ? 1 : 0), ag.p7(1, dC ? 1 : 0), ag.p7(5, (new Date).getHours() % 24)
	}
	this.zp = function() {
		ag.bh(18), ag.p7(1, 0), ag.p7(3, 0), ag.p7(14, d7), aP.j7.send(0, ag.mX)
	}, this.a3T = function(a3V) {
		var e9 = h.r6(a2.a5V()),
			wF = e9.length,
			a5W = (ag.bh(151 + 10 * wF), ag.p7(1, 0), ag.p7(3, 1), ag.p7(20, dB), ag.p7(26, aZ.id), ag.p7(10, Math.min(aZ.wi, 1023)), gA.vR[2].rM.a39());
		ag.p7(6, a5W[0]), ag.p7(6, a5W[1]), ag.p7(6, a5W[2]), aDR(), aDS();
		for (var du = 0; du < wF; du++) ag.p7(10, e9[du]);
		aP.j7.a43 = a3V, aP.j7.send(a3V, ag.mX)
	}, this.a2D = function(a3V, id) {
		ag.bh(38), ag.p7(1, 0), ag.p7(3, 7), ag.p7(3, 0), ag.p7(14, d7), ag.p7(1, id), ag.p7(16, Math.abs(4096 + bA.position[id] + bA.a2C[id]) % 65536), aP.j7.send(a3V, ag.mX)
	}, this.a5u = function(a3V) {
		var du, dE;
		if (!(a2.a5k + 7e3 > b7.dV)) {
			for (a2.a5k = b7.dV, ag.bh(136), ag.p7(1, 0), ag.p7(3, 7), ag.p7(3, 2), aDR(), dE = vm(a2.a5j.length - 20, 0), du = a2.a5j.length - 1; dE <= du; du--) ag.p7(4, Math.abs(a2.a5j.charCodeAt(du) - 48) % 10);
			aP.j7.send(a3V, ag.mX)
		}
	}, this.aCu = function(a3V, aCt) {
		ag.bh(13), ag.p7(1, 0), ag.p7(3, 5), ag.p7(9, aCt ? 1 : 0), aP.j7.send(a3V, ag.mX)
	}, this.aD2 = function() {
		ag.bh(55), ag.p7(1, 0), ag.p7(3, 6), ag.p7(8, aP.j7.wD()), ag.p7(10, aO.a49), ag.p7(9, aO.a4A), ag.p7(10, dB), ag.p7(14, d7), aP.j7.send(aP.j7.sO, ag.mX)
	}, this.lk = function(gi) {
		ag.bh(27), ag.p7(1, 1), ag.p7(4, 0), ag.p7(22, gi), aP.j7.send(aP.j7.sO, ag.mX)
	}, this.lm = function(hB, hd) {
		ag.bh(25), ag.p7(1, 1), ag.p7(4, 1), ag.p7(10, hB), ag.p7(10, hd), aP.j7.send(aP.j7.sO, ag.mX)
	}, this.lq = function(hB, lo) {
		ag.bh(24), ag.p7(1, 1), ag.p7(4, 2), ag.p7(10, hB), ag.p7(9, lo), aP.j7.send(aP.j7.sO, ag.mX)
	}, this.lu = function(hB, gi) {
		ag.bh(37), ag.p7(1, 1), ag.p7(4, 3), ag.p7(10, hB), ag.p7(22, gi), aP.j7.send(aP.j7.sO, ag.mX)
	}, this.ly = function(lw, gi) {
		ag.bh(37), ag.p7(1, 1), ag.p7(4, 4), ag.p7(10, lw), ag.p7(22, gi), aP.j7.send(aP.j7.sO, ag.mX)
	}, this.m0 = function(hd) {
		ag.bh(15), ag.p7(1, 1), ag.p7(4, 5), ag.p7(10, hd), aP.j7.send(aP.j7.sO, ag.mX)
	}, this.m4 = function(fw) {
		ag.bh(12), ag.p7(1, 1), ag.p7(4, 6), ag.p7(7, fw), aP.j7.send(aP.j7.sO, ag.mX)
	}, this.m7 = function(m6) {
		ag.bh(6), ag.p7(1, 1), ag.p7(4, 7), ag.p7(1, m6), aP.j7.send(aP.j7.sO, ag.mX)
	}, this.m9 = function() {
		ag.bh(5), ag.p7(1, 1), ag.p7(4, 8), aP.j7.send(aP.j7.sO, ag.mX)
	}, this.mR = function(a70, mQ) {
		ag.bh(29), ag.p7(1, 1), ag.p7(4, 10), ag.p7(12, a70), ag.p7(2, 0), ag.p7(10, mQ), aP.j7.send(aP.j7.sO, ag.mX)
	}, this.mU = function(a70, pb, pc, aDU) {
		ag.bh(46), ag.p7(1, 1), ag.p7(4, 10), ag.p7(12, a70), ag.p7(2, 1), ag.p7(9, pb), ag.p7(9, pc), ag.p7(9, aDU), aP.j7.send(aP.j7.sO, ag.mX)
	}, this.mW = function(a70) {
		var du, rb = at.j8.rb;
		for (ag.bh(47 + 33 * rb.length), ag.p7(1, 1), ag.p7(4, 10), ag.p7(12, a70), ag.p7(2, 2), ag.p7(24, at.j8.ra), ag.p7(4, rb.length), du = 0; du < rb.length; du++) ag.p7(9, rb[du].player), ag.p7(24, rb[du].rn);
		aP.j7.send(aP.j7.sO, ag.mX)
	}, this.mH = function(aDV, aDW) {
		ag.bh(21), ag.p7(1, 1), ag.p7(4, 15), ag.p7(9, aDW), ag.p7(7, aDV), aP.j7.send(aP.j7.sO, ag.mX)
	}, this.mK = function(w7) {
		ag.bh(14), ag.p7(1, 1), ag.p7(4, 14), ag.p7(9, w7), aP.j7.send(aP.j7.sO, ag.mX)
	}, this.mO = function(aDX, target) {
		var du, ev = aDX.length;
		for (ag.bh(14 + 9 * ev), ag.p7(1, 1), ag.p7(4, 13), ag.p7(9, target), du = 0; du < ev; du++) ag.p7(9, aDX[du]);
		aP.j7.send(aP.j7.sO, ag.mX)
	}, this.a5S = function(a3V) {
		ag.bh(29), ag.p7(1, 0), ag.p7(3, 3), aDS(), aP.j7.send(a3V, ag.mX)
	}
}

function aD0() {
	var a3V, aCv, rx;

	function aDb() {}

	function aD1() {
		aP.j7.aD1(a3V, aCv)
	}

	function aDd(dE) {
		aP.w7.aD7(a3V, new Uint8Array(dE.data))
	}

	function aDe() {}

	function aD6(dE) {
		aP.j7.aD6(a3V, dE)
	}
	this.cj = function(fw, aDY) {
		a3V = fw, aCv = aDY, 0;
		fw = xM[0];
		a3V < aP.j7.a4G ? fw += aP.j7.aCq[a3V] + xM[1 + d6] : fw += aP.j7.aCq[0] + "/i" + (1 + d6) + (a3V - aP.j7.a4H) + "/", (rx = new WebSocket(fw)).binaryType = "arraybuffer", rx.onopen = aD1, rx.onmessage = aDd, rx.onclose = aD6, rx.onerror =
			aDe
	}, this.aDa = function() {
		return rx.readyState === rx.CONNECTING
	}, this.a3N = function() {
		return rx.readyState === rx.OPEN
	}, this.aCx = function() {
		return this.aDa() || this.a3N()
	}, this.aCy = function(aDY) {
		aCv = aDY
	}, this.send = function(mX) {
		this.a3N() && rx.send(mX)
	}, this.close = function(aD3) {
		this.aCx() && (rx.close(aD3), this.oK())
	}, this.oK = function() {
		rx.onopen = aDb, rx.onmessage = aDb, rx.onclose = aDb, rx.onerror = aDb
	}
}

function by() {
	var aDg;

	function aDm(jp, jq, jr, jt) {
		return Math.abs(jr - jp) + Math.abs(jt - jq)
	}
	this.aDh = function() {
		return aDg
	}, this.fl = function(player, aDi) {
		var du;
		if (0 !== fE[player].length && a4.ex(aDi) && (a4.f7(aDi) || a4.f6(aDi) !== player))
			for (du = 21; 0 <= du; du--)
				if (function(aDg, aDi) {
						var aDl, du, pq = a4.ju(aDg),
							pr = a4.gB(aDg),
							qC = a4.ju(aDi),
							qB = a4.gB(aDi),
							aCU = aDm(pq, pr, qC, qB);
						if (!(aCU < 2))
							for (aDl = aDg, du = 0; du < aCU; du++)
								if (Math.abs(qC - a4.ju(aDl)) >= Math.abs(qB - a4.gB(aDl)) ? aDl += eR[pq < qC ? 1 : 3] : aDl += eR[pr < qB ? 2 : 0], !a4.uo(aDl)) return !!a4.ex(aDl) && !(0 === du || du + 20 < aCU);
						return
					}(aDg = 21 === du ? function(border, aDi) {
						for (var aCU, qC = a4.ju(aDi), qB = a4.gB(aDi), fw = 0, min = aDm(qC, qB, a4.ju(border[0]), a4.gB(border[0])), du = border.length - 1; 1 <= du; du--)(aCU = aDm(qC, qB, a4.ju(border[du]), a4.gB(border[du]))) < min && (
							min = aCU, fw = du);
						return border[fw]
					}(fE[player], aDi) : fE[player][en(du * fE[player].length, 21)], aDi)) return !0;
		return !1
	}
}

function cx() {
	var aDn = !1,
		wf = 0,
		g2 = 0,
		qd = 0,
		gap = 0,
		gP = null,
		qY = null,
		t8 = null;

	function aDp() {
		for (var a4m, aDs = 0, ev = 0, iW = Math.floor(g2 / 2), gS = Math.floor(qd / 2), a4l = 1.5 * Math.PI, du = tw; 0 <= du; du--) ev += t8[du], 0 === t8[du] && aDs++;
		if (aDn = !1, qY.clearRect(0, 0, g2, g2), qY.fillStyle = ae.ks, qY.fillRect(0, 0, g2, g2), qY.fillStyle = ae.gG, qY.fillRect(0, 0, g2, gap), qY.fillRect(0, 0, gap, g2), qY.fillRect(g2 - gap, 0, gap, g2), qY.fillRect(0, g2 - gap, g2, gap), 0 <
			ev)
			if (aDs === tw) {
				for (du = tw; 0 <= du; du--)
					if (0 < t8[du]) {
						! function(du, iW, gS) {
							qY.fillStyle = b8.a4q[b8.rd[du]], qY.beginPath(), qY.arc(iW, iW, gS, 0, 2 * Math.PI), qY.fill()
						}(du, iW, gS);
						break
					}!
				function(iW) {
					var fontSize = iW / 3;
					qY.font = ad.km.oJ(fontSize, 1), qY.fillStyle = ae.gG, qY.fillText("100%", iW, iW + .1 * fontSize)
				}(iW)
			} else {
				for (du = 0; du <= tw; du++) 0 < t8[du] && (! function(du, iW, gS, a4l, a4m) {
					qY.fillStyle = b8.a4q[b8.rd[du]], qY.beginPath(), qY.arc(iW, iW, gS, a4l, a4m), qY.lineTo(iW, iW), qY.fill()
				}(du, iW, gS, a4l, a4m = a4l + 2 * Math.PI * t8[du] / ev), function(iW, gS, a4l, a4m) {
					var e0 = (a4m - a4l) / (2 * Math.PI),
						fontSize = +gS * Math.min(e0, .37);
					fontSize < 8 || (a4l = (a4l + a4m) / 2, a4m = Math.floor(100 * e0 + .5) + "%", gS *= .525 - Math.max(.6 * (e0 - .7), 0), qY.font = ad.km.oJ(fontSize, 1), qY.fillStyle = ae.gG, qY.fillText(a4m, iW + Math.cos(a4l) * gS, iW +
						Math.cos(a4l + 1.5 * Math.PI) * gS))
				}(iW, gS, a4l, a4m), 0 !== du && a4o(iW, gS, a4l), a4l = a4m);
				a4o(iW, gS, 1.5 * Math.PI)
			}!
		function(iW, gS) {
			qY.beginPath(), qY.arc(iW, iW, gS, 0, 2 * Math.PI), qY.stroke()
		}(iW, gS)
	}

	function a4o(iW, gS, a4r) {
		qY.beginPath(), qY.moveTo(iW, iW), qY.lineTo(iW + Math.cos(a4r) * gS, iW + Math.cos(a4r + 1.5 * Math.PI) * gS), qY.stroke()
	}
	this.cj = function() {
		if (hX) {
			var du;
			for (wf = 0, t8 = new Uint32Array(tw + 1), du = tw; 0 <= du; du--) t8[du] = 0;
			for (du = iY - 1; 0 <= du; du--) t8[b8.iX[iZ[du]]] += 1;
			this.resize()
		} else t8 = qY = gP = null
	}, this.yA = function() {
		return g2
	}, this.resize = function() {
		hX && (g2 = Math.floor(dg && !kQ ? .18 * xP : .13 * fu), g2 = (g2 *= 1 + (.5 + .2 * dg) * kQ) + g2 % 2, qd = Math.floor(7 * g2 / 8), (gP = gP || document.createElement("canvas")).width = g2, gP.height = g2, qY = gP.getContext("2d", {
			alpha: !0
		}), gap = Math.max(1, .015 * g2), qY.lineWidth = gap, qY.strokeStyle = ae.gG, ad.km.textAlign(qY, 1), ad.km.textBaseline(qY, 1), aDp())
	}, this.rf = function() {
		return t8[this.re()]
	}, this.rO = function() {
		return wf = 31, this.iH(), this.re()
	}, this.re = function() {
		for (var aDq = 0, du = tw; 0 < du; du--) t8[du] > t8[aDq] && (aDq = du);
		return aDq
	}, this.iH = function() {
		if (hX && 32 <= ++wf) {
			var du;
			for (wf = 0, du = tw; 0 <= du; du--) t8[du] = 0;
			for (du = iY - 1; 0 <= du; du--) t8[b8.iX[iZ[du]]] += fL[iZ[du]];
			aDn = !0
		}
	}, this.fz = function() {
		hX && aDn && aDp()
	}, this.gC = function() {
		hX && (kQ ? gD.drawImage(gP, nc, nc) : gD.drawImage(gP, nc, yB + 2 * nc))
	}
}

function cS() {
	this.d3 = function() {
		dU || dT || function(key) {
			if ("undefined" == typeof URLSearchParams) return null;
			var aDx = window.location.search,
				aDx = new URLSearchParams(aDx).get(key);
			if ("string" != typeof aDx || aDx.length < 1) return null;
			return aDx
		}("replay") && ac.show()
	}, this.og = function() {
		var aDw;
		dU || dT || ((aDw = new URL(window.location.href)).search = "", history.replaceState(null, "", aDw.toString()))
	}
}

function bz() {
	var aDz, e9;
	this.cj = function() {
		for (var du = (e9 = new Uint16Array(101)).length - 1; 0 <= du; du--) e9[du] = en(32768 * du, 100);
		this.u6(0)
	}, this.value = function(f2) {
		return e9[f2]
	}, this.a9d = function() {
		return en(aDz - 1, 2)
	}, this.u6 = function(aA1) {
		aDz = 2 * aA1 % 32768 + 1
	}, this.random = function() {
		return aDz = 167 * aDz % 32768
	}, this.hn = function(jU) {
		return en(jU * this.random(), 32768)
	}, this.iQ = function(f2) {
		return 0 !== f2 && this.random() < this.value(f2)
	}
}

function cJ() {
	this.mm = new aE0, this.z9 = new aE1, this.z8 = new aE2, this.cj = function(tz, qh, u1, u2) {
		var aE3;
		ff || ((aE3 = {}).u0 = eq, aE3.tz = tz, aE3.qh = qh, aE3.u1 = u1, aE3.u2 = u2, aE3.a4z = au.pn, aE3.a50 = au.a4w, a1.a5P(aE3), this.mm.cj(aE3))
	}, this.iH = function() {
		ff || this.mm.iH()
	}, this.z7 = function() {
		var tE = this.mm.aE3;
		0 === jH && x.a3j(), au.bh(tE.a4z, tE.a50), 1 === tE.qh.length && (a1.a5K(tE.u1), a1.a5M(tE.a5N, tE.a5O)), aP.j7.close(aP.j7.sO, 3246), a1.a5R(), ty(tE.tz, tE.u0, tE.qh, tE.u1, tE.u2, !0)
	}, this.z5 = function(dd) {
		var du = dd.indexOf("=");
		return 0 <= du ? dd.substring(du + 1) : dd
	}, this.zA = function(dd) {
		return "https://territorial.io/?replay=" + dd
	}
}

function aE0() {
	this.aE4 = null, this.aE5 = null, this.aE6 = null, this.aE7 = null, this.aE8 = null, this.aE9 = null;
	var aEA = 0;
	this.aE3 = null, this.z6 = "", this.cj = function(aE3) {
		this.aE4 = [], this.aE5 = [], this.aE6 = [], this.aE7 = [], this.aE8 = [0], this.aE9 = [0], aEA = 0, this.aE3 = aE3, this.z6 = ""
	}, this.mn = function(id, eA, eC, eE) {
		ff || 2 === jH || (0 === this.aE8[aEA] && (this.aE9[aEA] ? (this.aE8.push(1), this.aE9.push(0), aEA++) : this.aE8[aEA] = 1), this.aE4.push(id), this.aE5.push(eA), this.aE6.push(void 0 === eC ? 0 : eC), this.aE7.push(void 0 === eE ? 0 :
			eE), this.aE9[aEA]++)
	}, this.iH = function() {
		0 === this.aE8[aEA] ? this.aE9[aEA]++ : (this.aE8.push(0), this.aE9.push(0), aEA++)
	}
}

function aE2() {
	function aEG(dd) {
		0 === jH ? y.a3Y(3605) : k.w0(dd)
	}
	this.pA = function(dd) {
		if (aj.p5(aj.p2(aj.p1(dd))), ! function() {
				if (ai.gJ < 10) aEG("File Too Small");
				else if (ai.mY(9) !== d9 && aEG("Game Version Error"), ai.mY(31) !== ai.gJ) aEG("Size Error");
				else {
					if (function(i2) {
							var du, f2 = ai.mX,
								ev = ai.gJ,
								a70 = 0;
							for (du = 7; du < ev; du++) a70 = a70 + f2[du] & 65535;
							return a70 === i2
						}(ai.mY(16))) return 1;
					aEG("Hash Error")
				}
				return
			}()) return !1;
		(aE3 = {}).u0 = ai.mY(9), aE3.tz = ai.mY(14), aE3.u1 = ai.mY(4), aE3.u2 = 1 === ai.mY(1), aE3.a4z = ai.mY(6), aE3.a50 = ai.mY(14), aE3.aEI = ai.mY(10), ab.mm.aE3 = aE3,
			function() {
				var du, a5X, a5W, name, ev = ab.mm.aE3.aEI,
					qh = [];
				for (du = 0; du < ev; du++) a5X = ai.mY(1), a5W = [ai.mY(6), ai.mY(6), ai.mY(6)], name = ai.aCi(ai.mY(5)), qh.push({
					name: name,
					a5W: a5W,
					a5X: a5X
				});
				if (ab.mm.aE3.qh = qh, 8 === ab.mm.aE3.u1)
					for (du = 0; du < ev; du++) qh[du].ql = ai.mY(14)
			}(),
			function() {
				var du, ev, aEJ = ab.mm.aE3;
				if (1 === aEJ.qh.length)
					for (ev = 6 < aEJ.u1 ? 1 : aEJ.u1 + 2, aEJ.a5N = new Array(ev), aEJ.a5O = new Array(ev), du = 0; du < ev; du++) aEJ.a5N[du] = ai.mY(3), aEJ.a5O[du] = ai.mY(9) + 1
			}(), aE3 = ai.mY(5), aEK = ai.mY(30), aEL = ai.mY(30);
		var aE3, aEK, aEL, du, id, ev = aEK,
			aEO = new Uint8Array(ev),
			aEP = new Uint16Array(ev),
			aEQ = new Uint32Array(ev),
			aER = new Uint32Array(ev);
		for (ab.mm.aE4 = aEO, ab.mm.aE5 = aEP, ab.mm.aE6 = aEQ, ab.mm.aE7 = aER, du = 0; du < ev; du++) aEO[du] = id = ai.mY(4), aEP[du] = ai.mY(9), 0 === id ? aEQ[du] = ai.mY(22) : 1 === id ? (aEQ[du] = ai.mY(10), aER[du] = ai.mY(10)) : 2 ===
			id ? (aEQ[du] = ai.mY(10), aER[du] = ai.mY(9)) : 3 === id || 4 === id ? (aEQ[du] = ai.mY(10), aER[du] = ai.mY(22)) : 5 === id ? aEQ[du] = ai.mY(10) : 6 === id ? aEQ[du] = ai.mY(7) : 7 === id && (aEQ[du] = ai.mY(1));
		return function(ev, pB) {
			var du, aE8 = new Uint8Array(ev),
				aE9 = new Array(ev);
			for (aE9.fill(0), ab.mm.aE8 = aE8, ab.mm.aE9 = aE9, du = 0; du < ev; du++) aE8[du] = ai.mY(1), aE9[du] = ai.mY(pB)
		}(aEL, aE3), ai.fw < 8 * ai.gJ - 13 || ai.fw > 8 * ai.gJ ? (aEG("Out Of Bounds Error: " + ai.fw + " " + 8 * ai.gJ), !1) : (ab.mm.z6 = dd, !0)
	}
}

function aE1() {
	this.r6 = function() {
		var aEJ, pB = function() {
				var du, aE9 = ab.mm.aE9,
					ev = aE9.length,
					max = 0;
				for (du = 0; du < ev; du++) max = Math.max(max, aE9[du]);
				return pI(Math.max(max, 1))
			}(),
			aET = function(pB) {
				return 179 + function() {
					var du, qh = ab.mm.aE3.qh,
						ev = qh.length,
						aET = 24 * ev;
					for (du = 0; du < ev; du++) aET += 10 * h.r6(qh[du].name).length;
					8 === ab.mm.aE3.u1 && (aET += 14 * ev);
					return aET
				}() + (1 === ab.mm.aE3.qh.length ? 12 * ab.mm.aE3.a5N.length : 0) + function() {
					var du, aE4 = ab.mm.aE4,
						ev = aE4.length,
						aET = 13 * ev,
						aEh = [22, 20, 19, 32, 32, 10, 7, 1, 0, 0];
					for (du = 0; du < ev; du++) aET += aEh[aE4[du]];
					return aET
				}() + function(pB) {
					return ab.mm.aE9.length * (1 + pB)
				}(pB)
			}(pB);
		ag.bh(aET + (6 - aET % 6) % 6), aEJ = ab.mm.aE3, ag.p7(9, d9), ag.p7(31, ag.gJ), ag.fw += 16, ag.p7(9, aEJ.u0), ag.p7(14, aEJ.tz), ag.p7(4, aEJ.u1), ag.p7(1, aEJ.u2), ag.p7(6, aEJ.a4z), ag.p7(14, aEJ.a50), ag.p7(10, aEJ.qh.length);
		var du, hu, aEb, aEc, qh = ab.mm.aE3.qh,
			ev = qh.length;
		for (du = 0; du < ev; du++)
			for (ag.p7(1, qh[du].a5X), ag.p7(18, (qh[du].a5W[0] << 12) + (qh[du].a5W[1] << 6) + qh[du].a5W[2]), aEb = h.r6(qh[du].name), aEc = aEb.length, ag.p7(5, aEc), hu = 0; hu < aEc; hu++) ag.p7(10, aEb[hu]);
		if (8 === ab.mm.aE3.u1)
			for (du = 0; du < ev; du++) ag.p7(14, qh[du].ql);
		return function() {
				var du, aEJ = ab.mm.aE3;
				if (1 === aEJ.qh.length)
					for (du = 0; du < aEJ.a5N.length; du++) ag.p7(3, aEJ.a5N[du]), ag.p7(9, aEJ.a5O[du] - 1)
			}(),
			function(pB) {
				var du, aE4 = ab.mm.aE4,
					eA = ab.mm.aE5,
					eC = ab.mm.aE6,
					eE = ab.mm.aE7,
					ev = aE4.length;
				for (ag.p7(5, pB), ag.p7(30, ev), ag.p7(30, ab.mm.aE9.length), du = 0; du < ev; du++) ag.p7(4, aE4[du]), ag.p7(9, eA[du]), 0 === aE4[du] ? ag.p7(22, eC[du]) : 1 === aE4[du] ? (ag.p7(10, eC[du]), ag.p7(10, eE[du])) : 2 === aE4[
					du] ? (ag.p7(10, eC[du]), ag.p7(9, eE[du])) : 3 === aE4[du] || 4 === aE4[du] ? (ag.p7(10, eC[du]), ag.p7(22, eE[du])) : 5 === aE4[du] ? ag.p7(10, eC[du]) : 6 === aE4[du] ? ag.p7(7, eC[du]) : 7 === aE4[du] && ag.p7(1, eC[du])
			}(pB),
			function(pB) {
				var du, aE8 = ab.mm.aE8,
					aE9 = ab.mm.aE9,
					ev = aE8.length;
				for (du = 0; du < ev; du++) ag.p7(1, aE8[du]), ag.p7(pB, aE9[du])
			}(pB), ag.fw !== aET && k.w0("Encoder Index Error: " + ag.fw + " " + aET), ag.fw = 40, ag.p7(16, function() {
				var du, f2 = ag.mX,
					ev = ag.gJ,
					a70 = 0;
				for (du = 7; du < ev; du++) a70 = a70 + f2[du] & 65535;
				return a70
			}()), ai.cj(ag.mX), ah.qu(ah.qs(en(aET - 1, 6) + 1))
	}
}

function c4() {
	var iW, wR = !1,
		aEi = !1,
		aEj = -1e4;

	function resize(gg) {
		iW = 0, a3.g0() && (aEk(gg) || wR) && (wR = !1, xN(), b0.cj(), v.cj(), z.resize(), ay.cj(), w.resize(), q.resize(), l.resize(), b6.resize(), bA.resize(), b3.cj(), aw.resize(), 1 <= jH ? (s.resize(!1), r.resize(), t.resize(), p.resize(), o
			.resize(), k.resize(), j.resize(), ac.resize(), af.resize(), aN.resize(), m.resize(), n.resize(), i.resize(), b5.resize(), a8.resize(), u.resize(), b9.resize(), p.zO()) : (2 === x.sg() ? a1.resize() : 3 === x.sg() && y.resize(), x
			.a3p(), x.a3s()), b7.d4 = !0)
	}

	function aEl(e0) {
		return e0 && 128 < e0 ? Math.floor(e0) : 128
	}

	function aEk(gg) {
		var qd, wY, wZ;
		return aK.aCD(), qd = aEl(document.documentElement.clientWidth), wY = window.visualViewport ? aEl(window.visualViewport.height) : aEl(document.documentElement.clientHeight), gg && !aEi ? (aEi = !0, document.body.removeChild(s5)) : aEi && (
			aEi = !1, document.body.appendChild(s5)), gg = Math.floor(.5 + nS * qd), wZ = Math.floor(.5 + nS * wY), !(gg === js && wZ === g9 || al.ss() && (z.oa || ac.oa)) && (js = dh = gg, g9 = di = wZ, xP = yT(dh, di), fu = en(di + dh, 2), s5
			.width = gg, s5.height = wZ, s5.style.width = qd + "px", s5.style.height = wY + "px", 1)
	}
	this.cj = function() {
		dh = di = xP = js = g9 = fu = 0, nS = iW = 1, s5 = document.getElementById("canvasA"), (gD = s5.getContext("2d", {
			alpha: !1
		})).imageSmoothingEnabled = !1, aEk(0)
	}, this.iH = function() {
		aS.iH(), 50 <= ++iW && resize(0)
	}, this.a5e = function(gg) {
		wR = !0, resize(gg)
	}, this.st = function() {
		aEj + 1e3 > b7.dV || (aEj = b7.dV, resize(0))
	}, this.aCD = function() {
		var aEm = window.devicePixelRatio || 1,
			du = aR.jy.aCB,
			du = (nS = du < 3 ? .5 + .25 * du : (.5 + .125 * (du - 3)) * aEm, aEl(document.documentElement.clientWidth)),
			i2 = window.visualViewport ? aEl(window.visualViewport.height) : aEl(document.documentElement.clientHeight),
			aEo = dT || dU || du < i2 ? 700 : 1200,
			kY = nS / aEm,
			kY = Math.min(Math.max(kY, aEo / ((du + i2) / 2)), 1);
		return nS = aEm * kY, kY
	}
}

function c0() {
	var player, he, pb, pV, jp, jq, jr, jt, fw, aEp, id;

	function aEv() {
		var hd;
		if (a4.f7(pb)) hd = ez;
		else {
			if ((hd = a4.f6(pb)) === player) return void aEx(!0);
			if (!hp(player, hd)) return function(hd) {
				var max = fL[hd] * tS - er[hd];
				max <= 0 || (he -= max = max < he ? max : he, player === eq && (k.mE(max, 0, hd), b4.et[16] += max), hd === eq && (k.wK(max, player), b4.et[10] += max), er[hd] += max, a8.mF(hd, max))
			}(hd), void aEx(!0)
		}
		player === eq && (b4.et[13] += he), e.ep(player, id), a6.eu(player, aEp), ew[player].push(pV), a6.ha(player, he, hd), c.hb(player, !0)
	}

	function aEx(aF0) {
		e.ep(player, id), a6.eu(player, aEp), aF0 && (er[player] += he)
	}

	function aEr() {
		a4.a6k(pb, player) && a4.a6m(pb)
	}

	function aEq(du, a89, y6, hm, kd) {
		if (fw = du, id = a89, player = y6, jp = a4.ju(hm), jq = a4.gB(hm), jr = a4.ju(kd), jt = a4.gB(kd), pV = pb = a4.q6(jp, jq), -1 !== (aEp = a6.jx(player, id))) return he = a6.eh(player, aEp), 1;
		aEr(), e.ep(player, id)
	}
	this.iH = function(du, id, y6, hm, kd) {
		aEq(du, id, y6, hm, kd) && (aEr(), function() {
			var aF1 = en(he, 128);
			he -= aF1 = aF1 < 1 ? 1 : aF1, player === eq && (b4.et[15] += aF1);
			if (he <= eo) return player === eq && (b4.et[15] += he), void aEx(!1);
			return a6.fK(player, aEp, he), 1
		}()) && (du = a4.q6(jp, jq), pb = Math.abs(jr - jp) >= Math.abs(jt - jq) ? du + eR[jp < jr ? 1 : 3] : du + eR[jq < jt ? 2 : 0], jp = a4.ju(pb), jq = a4.gB(pb), e.jd(fw, pb), ! function() {
			if (a4.ex(pb)) return;
			return 1
		}() ? aEv() : a4.uo(pb) && a4.a6p(pb, player))
	}, this.jg = function(y6, hm) {
		player = y6, pb = a4.q6(a4.ju(hm), a4.gB(hm)), aEr()
	}
}

function ch() {
	this.a4h = new aF2
}

function aF2() {
	var yl = 0,
		a4t = 0,
		dV = 0,
		et = [1, 0, 0, 1, 0, 0];

	function aF3(hu) {
		var du, aF4 = et[0],
			aCk = et[1],
			aCl = et[2],
			hk = et[3];
		if ((hu = Math.min(hu, et[4])) < hk) yl = a4t = 0;
		else {
			for (yl = performance.now(), du = hk; du <= hu; du++) aCk = aF6(aCk, aF4 = function(aF4, aCk, aCl, gr) {
				var du, ev = 65536 + (aF4 * gr & 16383);
				for (du = 0; du < ev; du++) aF4 = 1 + aF4 * aCk % aCl;
				return aF4
			}(aF4, aCk, aCl, du), 16384, 65536), aCl = aF6(aCl, aF4, 1 << 18, 1 << 20);
			et[0] = aF4, et[1] = aCk, et[2] = aCl, et[3] = du, a4t = performance.now(), et[5] += a4t - yl
		}
	}

	function aF6(e0, aA1, min, max) {
		return min + (e0 * aA1 + 137) % (max - min)
	}
	this.it = !1, this.cj = function(aCk, aCl, aCm) {
		et[0] = 1, et[1] = aCk, et[2] = aCl, et[3] = 0, et[4] = aCm, et[5] = 0, this.it = !0
	}, this.a4i = function() {
		this.it = !1, et[3] = et[4] + 1
	}, this.aCo = function() {
		return aF3(et[4]), this.it = !1, [et[0] - 1 & 65535, Math.min(Math.floor(Math.sqrt(et[5])), 1023)]
	}, this.iH = function() {
		7 !== x.sg() || et[4] < et[3] || b7.dV < dV || (aF3(et[3] + Math.floor(et[4] / 20)), dV = a4t + 250)
	}
}

function c1() {
	var aF7, aF8, uo, aF9;
	this.cj = function() {
		var du, jk, jl, a5W, aFA, g2, i2, qY, gM, pT, e0, f2, iA, hk, aFD;
		if (function() {
				if (uo = !0, aF9 = "rgb(" + au.pQ[0] + "," + au.pQ[1] + "," + au.pQ[2] + ")", au.aA9(au.pn)) return 1;
				return uo = !1, 0
			}()) aF8 = null;
		else {
			for (aF7 = en(96, 4), aFA = 1 === au.pn ? (a5W = 0, 160) : (a5W = 128, 32), aF9 = "rgb(" + a5W + "," + a5W + "," + a5W + ")", aF8 = new Array(4), du = 3; 0 <= du; du--) {
				if (aF8[du] = document.createElement("canvas"), g2 = du % 2 == 0 ? au.eV : aF7, i2 = du % 2 == 0 ? aF7 : au.eW + 2 * aF7, aF8[du].width = g2, aF8[du].height = i2, pT = (gM = (qY = aF8[du].getContext("2d", {
						alpha: !1
					})).getImageData(0, 0, g2, i2)).data, du % 2 == 0)
					for (jl = aF7 - 1; 0 <= jl; jl--)
						for (e0 = aFA + Math.floor((jl + 1) * (a5W - aFA) / (aF7 + 1)), jk = g2 - 1; 0 <= jk; jk--) pT[f2 = 4 * ((0 === du ? aF7 - jl - 1 : jl) * g2 + jk)] = e0, pT[f2 + 1] = e0, pT[f2 + 2] = e0, pT[f2 + 3] = 255;
				else {
					for (jk = aF7 - 1; 0 <= jk; jk--)
						for (e0 = aFA + Math.floor((jk + 1) * (a5W - aFA) / (aF7 + 1)), jl = i2 - 1 - aF7; aF7 <= jl; jl--) pT[f2 = 4 * (jl * g2 + (3 === du ? aF7 - jk - 1 : jk))] = e0, pT[f2 + 1] = e0, pT[f2 + 2] = e0, pT[f2 + 3] = 255;
					for (hk = 1; 0 <= hk; hk--)
						for (jk = aF7 - 1; 0 <= jk; jk--)
							for (jl = aF7 - 1; 0 <= jl; jl--) iA = (Math.pow(jk * jk + jl * jl, .5) + 1) / (aF7 + 1), e0 = aFA + Math.floor((1 < iA ? 1 : iA) * (a5W - aFA)), pT[f2 = 4 * ((0 === hk ? aF7 - jl - 1 : jl + hk * (i2 - aF7)) * g2 + (
								1 === du ? jk : aF7 - jk - 1))] = e0, pT[f2 + 1] = e0, pT[f2 + 2] = e0, pT[f2 + 3] = 255
				}
				qY.putImageData(gM, 0, 0)
			}
			aFD = aFA, au.pL.fillStyle = "rgb(" + aFD + "," + aFD + "," + aFD + ")", au.pL.fillRect(0, 0, au.eV, 1), au.pL.fillRect(0, au.eW - 1, au.eV, 1), au.pL.fillRect(0, 0, 1, au.eW), au.pL.fillRect(au.eV - 1, 0, 1, au.eW)
		}
	}, this.qU = function() {
		var hk = uo ? 0 : -aF7;
		aBi(hk, hk, au.eV - 2 * hk, au.eW - 2 * hk, b1.aFE, b1.aFF, b1.aFG, b1.aFH) || (gD.fillStyle = aF9, gD.fillRect(0, 0, js, g9))
	}, this.gC = function() {
		uo || (aBh(0, -aF7, au.eV, aF7, b1.aFE, b1.aFF, b1.aFG, b1.aFH) && gD.drawImage(aF8[0], b1.aFI, b1.aFJ - aF7), aBh(au.eV, -aF7, aF7, au.eW + 2 * aF7, b1.aFE, b1.aFF, b1.aFG, b1.aFH) && gD.drawImage(aF8[1], b1.aFI + au.eV, b1.aFJ - aF7),
			aBh(0, au.eW, au.eV, aF7, b1.aFE, b1.aFF, b1.aFG, b1.aFH) && gD.drawImage(aF8[2], b1.aFI, b1.aFJ + au.eW), aBh(-aF7, -aF7, aF7, au.eW + 2 * aF7, b1.aFE, b1.aFF, b1.aFG, b1.aFH) && gD.drawImage(aF8[3], b1.aFI - aF7, b1.aFJ - aF7))
	}
}

function cV() {
	this.ls = new aFK, this.a7D = new aFL, this.qV = new aFM, this.j7 = new aFN, this.hP = new aFO, this.aFD = new aFP, this.aFQ = new aFR, this.iG = new aFS, this.mx = new aFT, this.cj = function() {
		this.qV.cj(), this.j7.cj(), this.hP.cj(), this.aFD.cj()
	}
}

function aFS() {
	function aFZ(player, hm, aFb, aFc) {
		for (var jp, jq, g2, i2, gS, aFd, jr, jt, ev = hm + aFc, du = hm; du < ev; du += aFb)
			if (jp = (jp = i6[player] - du) < 1 ? 1 : jp, jq = i9[player] - du, jr = (jr = i5[player] + du) >= au.eV - 1 ? au.eV - 2 : jr, i2 = (jt = (jt = i8[player] + du) >= au.eW - 1 ? au.eW - 2 : jt) - (jq = jq < 1 ? 1 : jq), jr = (gS = en(aF
					.random() * (2 * (jr - jp + jt - jq)), aF.value(100))) <= (g2 = jr - jp) ? (aFd = jp + gS, jq) : gS <= g2 + i2 ? (aFd = jr, jq + gS - g2) : gS <= 2 * g2 + i2 ? (aFd = jp + gS - g2 - i2, jt) : (aFd = jp, jq + gS - 2 * g2 - i2),
				aFa(player, jt = a4.q6(aFd, jr))) return jt;
		return -1
	}

	function aFa(tO, f3) {
		return a4.ex(f3) && (a4.f7(f3) || tO !== (f3 = a4.f6(f3)) && hp(tO, f3) && 0 < fE[f3].length)
	}
	this.iH = function(player) {
		return !(0 === fE[player].length || er[player] < 100) && ap.j7.mk !== ap.j7.mv && (ap.j7.mj[player] !== ap.j7.mw && ad.fh.mq(player, 203, 32, 16) ? !! function(player) {
			var f3 = function(player) {
				var du, qA, q9, jp = i6[player],
					jq = i9[player],
					gy = i5[player] - jp + 1,
					h1 = i8[player] - jq + 1,
					e0 = aF.value(100);
				for (du = 0; du < 32; du++)
					if (qA = jp + an.fa(aF.random() * gy, e0), q9 = jq + an.fa(aF.random() * h1, e0), qA = a4.q6(qA, q9), aFa(player, qA)) return qA;
				return -1
			}(player);
			if (0 <= f3) return ap.mx.my(player, f3 >> 2);
			if (0 <= (f3 = aFZ(player, 1, 4, 40))) return ap.mx.my(player, f3 >> 2);
			if (0 <= (f3 = aFZ(player, 40, 8, 200))) return ap.mx.my(player, f3 >> 2);
			return
		}(player) && !! function(tO) {
			if (0 === aq.e6[2]) return void console.log("error 325234");
			var aFX = aq.e6[1] + ao.gT[aq.e6[2] - 1] << 2;
			if (a4.f7(aFX)) return 1;
			return aFX = a4.f6(aFX), tO !== aFX && !!hp(tO, aFX)
		}(player) && function(player) {
			return ad.fh.ms(player), ap.j7.mz(player), !0
		}(player) : void 0)
	}
}

function aFK() {
	function aFg(aFf) {
		var aFp = 4 + .03 * (1 + 1.5 * dg) * fu / hD;
		return ao.h4(aFf, aq.e6[1]) < aFp
	}
	this.lt = function(player, aFf) {
		return !!ao.hJ(aFf) && ap.j7.mk !== ap.j7.mv && ap.j7.mj[player] !== ap.j7.mw && 0 !== fE[player].length && !!ap.mx.my(player, aFf) && !!aFg(aFf)
	}, this.lx = function(player, lw, aFf) {
		return !!(ao.hJ(aFf) && this.n0(player, lw) && ap.mx.n1(aFf) && aFg(aFf))
	}, this.n0 = function(player, id) {
		for (var aFh, t6 = player << 3, t7 = t6 + ap.j7.mj[player], aFi = ap.j7.aFi, aFj = ap.j7.aFj, du = t6; du < t7; du++)
			if (id === aFj[aFh = aFi[du]]) return aq.e6[3] = aFh, !0;
		return !1
	}, this.lv = function(gi) {
		var aFk = ap.aFD.aFk;
		return ap.aFD.aFk = -1, !!this.n0(eq, aFk) && (aa.fn.lv(aFk, gi), !0)
	}, this.uk = function(g6, g7) {
		var du, t7, o6, aFi, aFl, aFm, aFn, iA, w5, aFo, player = eq,
			ev = ap.j7.mj[player];
		if (0 === ev) return !1;
		for (aFi = ap.j7.aFi, aFm = ap.j7.aFm, w5 = ap.j7.w5, t7 = (player = player << 3) + ev, aFl = .4 * ad.km.nR(.5) * fu / hD, o6 = -1, du = player; du < t7; du++) aFo = aFi[du], aFn = 16 * (.625 + .125 * Math.sqrt(Math.sqrt(w5[aFo]))), (iA =
			ao.gu(g6, g7, aFm[aFo])) - aFn < aFl && (aFl = iA, o6 = aFo);
		return !(o6 < 0 || (ap.aFD.aFk = ap.j7.aFj[o6], 0))
	}, this.uy = function(g6, g7) {
		var du, o6, aFl, aFm, aFn, iA, w5, ev = ap.j7.mk;
		if (ev < 1) return -1;
		for (aFm = ap.j7.aFm, w5 = ap.j7.w5, aFl = 1e3, o6 = -1, du = 0; du < ev; du++) aFn = 16 * ad.km.nR(.5) * (.625 + .125 * Math.sqrt(Math.sqrt(w5[du]))), (iA = ao.gu(g6, g7, aFm[du])) < aFl && iA < aFn && (aFl = iA, o6 = du);
		return o6
	}
}

function aFL() {
	this.a7E = function(player) {
		for (var aFi = ap.j7.aFi, t6 = player << 3, du = t6 + ap.j7.mj[player] - 1; t6 <= du; du--) this.aFq(aFi[du])
	}, this.aFq = function(aFr) {
		var j7 = ap.j7,
			aFs = j7.mk - 1,
			aFt = j7.w4[aFr],
			aFu = j7.aFv[aFr],
			aFw = j7.aFm[aFr];
		j7.mk = aFs, j7.w4[aFr] = j7.w4[aFs], j7.aFx[aFr] = j7.aFx[aFs], j7.aFy[aFr] = j7.aFy[aFs], j7.aFm[aFr] = j7.aFm[aFs], j7.aFz[aFr] = j7.aFz[aFs], j7.w5[aFr] = j7.w5[aFs], j7.aFv[aFr] = j7.aFv[aFs], j7.aFj[aFr] = j7.aFj[aFs], j7.aG0[aFr] =
			j7.aG0[aFs], j7.aFi[j7.w4[aFr]] = aFr,
			function(a4r) {
				var player = a4r >> 3,
					j7 = ap.j7,
					ev = j7.mj[player] - 1,
					aG3 = (player << 3) + ev;
				j7.mj[player] = ev, aG3 !== a4r && (j7.aFi[a4r] = j7.aFi[aG3], j7.w4[j7.aFi[a4r]] = a4r)
			}(aFt), ap.hP.hP[ao.hO(j7.aFm[aFr])][j7.aFv[aFr]] = aFr, aFs = ao.hO(aFw), aFt = aFu, aFs = ap.hP.hP[aFs], j7 = aFs.pop(), aFt !== aFs.length && (aFs[aFt] = j7, ap.j7.aFv[j7] = aFt)
	}
}

function aFM() {
	var aG6, aG7 = 8,
		aG8 = new Array(2);

	function aG9(fw) {
		var gI = aG7 + 4,
			uU = ad.km.pH(gI, gI),
			gQ = ad.km.getContext(uU, !0),
			gM = ad.km.getImageData(gQ, gI, gI),
			pT = gM.data;
		return aGA(pT, gI + 1, fw), aGA(pT, gI + 2, fw), aGA(pT, 2 * gI + 1, fw), aGA(pT, 2 * gI - 3, fw), aGA(pT, 2 * gI - 2, fw), aGA(pT, 3 * gI - 2, fw), aGA(pT, gI * (gI - 3) + 1, fw), aGA(pT, gI * (gI - 2) + 1, fw), aGA(pT, gI * (gI - 2) + 2,
			fw), aGA(pT, gI * (gI - 2) - 2, fw), aGA(pT, gI * (gI - 1) - 3, fw), aGA(pT, gI * (gI - 1) - 2, fw), gQ.putImageData(gM, 0, 0), uU
	}

	function aGA(pT, gi, fw) {
		gi *= 4;
		pT[gi] = 255, pT[1 + gi] = 255, pT[2 + gi] = fw, pT[3 + gi] = 255
	}

	function pH(player) {
		var aGB = aG7 >> 1,
			uU = ad.km.pH(aG7, aG7);
		return function(gQ, player, jk, jl) {
			var gy, gi, aGD, a4s, gI = aG7,
				gM = ad.km.getImageData(gQ, gI, gI),
				pT = gM.data,
				pC = (gI >> 1) - .5,
				aF9 = a4.a6e(player),
				aGF = ad.pR.sz(aF9, .5);
			ad.pR.t0(aF9, aGF, 300) || ad.pR.t2(aF9, 100);
			for (jl = 0; jl < gI; jl++)
				for (jk = 0; jk < gI; jk++) a4s = (gI - 1.5) * (gI - 1.5) / 4, aGD = (gy = (gy = jk - pC) * gy + (gy = jl - pC) * gy) <= (gI - 4.5) * (gI - 4.5) / 4 ? aGF : aF9, pT[gi = 4 * (jl * gI + jk)] = aGD[0], pT[1 + gi] = aGD[1], pT[2 +
					gi] = aGD[2], pT[3 + gi] = a4s < gy ? 0 : 255;
			gQ.putImageData(gM, 0, 0)
		}(ad.km.getContext(uU, !0), player, aGB, aGB), uU
	}
	this.cj = function() {
		aG6 = new Array(ez), aG8[0] = aG9(255), aG8[1] = aG9(0)
	}, this.gC = function() {
		var du, player, aGG, he, aGH, gx, aGK, aGM, aGN, aFm = ap.j7.aFm,
			w4 = ap.j7.w4,
			w5 = ap.j7.w5,
			aGO = aG6,
			aGP = eq,
			aGQ = -1,
			ev = ap.j7.mk,
			aGR = js,
			aGS = g9,
			aGT = au.eV << 4,
			tk = hD,
			gr = tk / aG7,
			jp = hC / tk,
			jq = hE / tk,
			gy = (aGR + hC) / tk - jp,
			h1 = (aGS + hE) / tk - jq,
			gQ = gD;
		for (ap.ls.n0(eq, ap.aFD.aFk) && (aGQ = aq.e6[3]), gQ.fillStyle = ae.gG, du = 0; du < ev; du++) player = w4[du] >> 3, he = w5[du], aGG = .625 + .125 * Math.sqrt(Math.sqrt(he)), aGH = (gx = aFm[du]) % aGT / 16 - aGG, gx = aGS * (Math
			.floor(gx / aGT) / 16 - aGG - jq) / h1, aGK = -2 * (aGN = tk * aGG) * (1 + (aGM = +(player === aGP)) / 8), aGM = aGM * aGN / 4, (aGN = aGR * (aGH - jp) / gy) < aGK || gx < aGK || aGR + aGM < aGN || aGS + aGM < gx || (aGH = aGG *
			tk, gQ.imageSmoothingEnabled = (aGK = 2 * aGG * gr) < 3, void 0 === (aGM = aGO[player]) && (aGO[player] = aGM = pH(player)), player === aGP && (gQ.setTransform(aGK, 0, 0, aGK, aGN - 2 * aGK, gx - 2 * aGK), gQ.drawImage(aG8[+(
				du === aGQ)], 0, 0)), gQ.setTransform(aGK, 0, 0, aGK, aGN, gx), gQ.drawImage(aGM, 0, 0), (aGG = Math.floor(function(he) {
				if (he < 1e3) return .42;
				if (he < 1e4) return .34;
				if (he < 1e6) return .26;
				if (he < 1e8) return .19;
				return .15
			}(he) * aGH)) < 6) || (gQ.setTransform(1, 0, 0, 1, 0, 0), 20 <= aGG ? (gQ.font = ad.km.oJ(.85 * aGG, 1), gQ.fillText(ad.k0.k1(he), aGN + aGH, gx + .93 * aGH + .085 * aGG), (aGG *= a8.a94(player)) < 6 || (gQ.font = ad.km.oJ(aGG,
			1), gQ.fillText(k2[player], aGN + aGH, gx + 1.16 * aGH + .1 * aGG))) : (gQ.font = ad.km.oJ(aGG, 1), gQ.fillText(ad.k0.k1(he), aGN + aGH, gx + aGH + .1 * aGG)));
		gQ.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function aFR() {
	this.iH = function() {
		for (var aGV, aFQ, aG0 = ap.j7.aG0, aFm = ap.j7.aFm, aFy = ap.j7.aFy, du = ap.j7.mk - 1; 0 <= du; du--) aGV = aFm[du], 0 !== (aFQ = aG0[du]) && aGV === aFy[du] && (! function(du, aGX, fq) {
			var hd, player = ap.j7.w4[du] >> 3,
				fq = aGX + ao.gT[fq] << 2,
				du = ap.j7.w5[du];
			if (a4.f7(fq)) hd = ez;
			else {
				if ((hd = a4.f6(fq)) === player) return ad.fh.mD(player, du);
				if (!hp(player, hd)) return aa.ia.mB(player, hd, du)
			}
			player === eq && (b4.et[13] += du);
			ew[player].push(aGX << 2), a6.ha(player, du, hd), c.hb(player, !0)
		}(du, ao.hN(aGV), aFQ - 1), ap.a7D.aFq(du))
	}
}

function aFN() {
	this.aGY = null, this.mv = 512, this.mw = 8, this.mk = 0, this.jY = 0, this.w4 = new Uint16Array(this.mv), this.aFx = new Uint32Array(this.mv), this.aFy = new Uint32Array(this.mv), this.aFm = new Uint32Array(this.mv), this.aFz = new Uint16Array(
			this.mv), this.w5 = new Uint32Array(this.mv), this.aFv = new Uint16Array(this.mv), this.aFj = new Uint16Array(this.mv), this.aG0 = new Uint8Array(this.mv), this.mj = new Uint8Array(ez), this.aFi = new Uint16Array(this.mw * ez), this.cj =
		function() {
			this.jY = 0, this.mk = 0, this.aGY = new Uint8Array(au.eV + au.eW), this.mj.fill(0)
		}, this.mz = function(player) {
			var ev = this.mk,
				aGZ = ao.hM(aq.e6[0]),
				aEc = this.mj[player],
				aGa = (player << 3) + aEc;
			h7[player] = 2, this.w4[ev] = aGa, this.aFx[ev] = aGZ, this.aFm[ev] = aGZ, this.aFy[ev] = ao.hM(aq.e6[1]), this.aFz[ev] = 0, this.w5[ev] = aq.e3[0], this.aFv[ev] = ap.hP.mz(ev, ao.hO(aGZ)), this.aFj[ev] = this.jY, this.aG0[ev] = aq.e6[2],
				this.jY = this.jY + 1 & 1023, this.aFi[aGa] = ev, this.mj[player] = aEc + 1, this.mk++
		}, this.lv = function() {
			var aFh = aq.e6[3];
			this.aFx[aFh] = this.aFm[aFh], this.aFy[aFh] = ao.hM(aq.e6[1]), this.aFz[aFh] = 0, this.aG0[aFh] = aq.e6[2]
		}, this.iH = function() {
			if (b7.iV() % 5 == 3) {
				ap.aFQ.iH(), ! function(v4) {
					var du, aGe, aGf, aGg, aGh, aGZ, aGl, aGm, f4, f3, aFx = v4.aFx,
						aFy = v4.aFy,
						aFm = v4.aFm,
						w5 = v4.w5,
						aFz = v4.aFz,
						aFv = v4.aFv,
						v4 = v4.mk,
						aGT = au.eV << 4;
					for (du = v4 - 1; 0 <= du; du--) aGf = aFm[du], aGe = aFy[du], aGf !== aGe && (aGZ = aFx[du], aGl = aGe % aGT - (aGh = aGZ % aGT), aGm = ~~((aGe + .5) / aGT) - (aGZ = ~~((aGZ + .5) / aGT)), f4 = ~~Math.sqrt(aGl * aGl + aGm *
						aGm + .5), f3 = 4e5 + 2e4 * ~~Math.sqrt(.5 + (Math.sqrt(w5[du] + .5) << 4)), 65535 <= (f3 = aFz[du] + Math.max(~~((.5 + f3) / f4), 1)) ? aFm[du] = aGg = aGe : (aFz[du] = f3, aFm[du] = aGg = aGh + an.fa(f3 * aGl,
						65536) + aGT * (aGZ + an.fa(f3 * aGm, 65536))), aFv[du] = ap.hP.aGo(aFv[du], aGf, aGg))
				}(this), ! function(v4) {
					var du, pg, pC, hu, iW, aGp, aGq, aGr, pb, gY, jp, jq, aGs, aFl, aGt, pc, aGZ, aGw, ev = v4.mk,
						aFm = v4.aFm,
						w4 = v4.w4,
						w5 = v4.w5,
						hP = ap.hP.hP,
						aGx = hP.length,
						aGy = ap.hP.aGy,
						aGT = au.eV << 4,
						aGz = hX,
						aH0 = b8.iX,
						f3 = (ev - 1) * (b7.iV() % 2);
					for (du = 0; du < ev; du++) {
						for (pg = Math.abs(du - f3), aGZ = aFm[pg], pC = ao.hO(aGZ), pb = w4[pg] >> 3, jp = aGZ % aGT, jq = ~~((aGZ + .5) / aGT), aGZ = w5[pg], aGw = 80 + ~~Math.sqrt(.5 + (Math.sqrt(aGZ + .5) << 8)), aFl = Math.min(aGw * aGw,
								262144), aGt = -1, hu = 0; hu < 9; hu++)
							if (!((aGp = pC + aGy[hu]) < 0 || aGx <= aGp))
								for (aGr = hP[aGp], aGq = aGr.length, iW = 0; iW < aGq; iW++) aGs = aGr[iW], pc = w4[aGs] >> 3, pb == pc || aGz && aH0[pb] === aH0[pc] || (pc = aFm[aGs], (pc = (gY = jp - pc % aGT) * gY + (gY = jq - ~~((pc + .5) /
									aGT)) * gY) < aFl && (aGt = aGs, aFl = pc)); - 1 !== aGt && (aGZ = Math.min(Math.max(1, an.fa(aGZ * (aGw - Math.floor(Math.sqrt(aFl + .5))), 5 * aGw)), w5[aGt]), w5[pg] -= aGZ >> 4, w5[aGt] -= aGZ)
					}
				}(this);
				var du, he, w5 = (v4 = this).w5,
					v4 = v4.mk;
				for (du = v4 - 1; 0 <= du; du--) he = w5[du], 0 < (he -= Math.max(1, he >> 7)) ? w5[du] = he : ap.a7D.aFq(du)
			}
		}
}

function aFO() {
	this.aH1 = 32, this.jk = 0, this.jl = 0, this.hQ = 0, this.aH2 = 0, this.aH3 = 4, this.hP = null, this.aGy = new Int16Array(9), this.cj = function() {
		this.hQ = 1 + an.fa(au.eV - 1, this.aH1), this.aH2 = 1 + an.fa(au.eW - 1, this.aH1), this.hP = new Array(this.hQ * this.aH2), ad.pR.sy(this.hP);
		var jk, jl, aGy = this.aGy,
			g2 = this.hQ;
		for (jk = -1; jk <= 1; jk++)
			for (jl = -1; jl <= 1; jl++) aGy[3 * (1 + jl) + 1 + jk] = jl * g2 + jk
	}, this.mz = function(aH5, du) {
		return this.hP[du].push(aH5), this.hP[du].length - 1
	}, this.aGo = function(aH6, aGZ, aGe) {
		var aH7, aH8, aGZ = ao.hO(aGZ),
			aGe = ao.hO(aGe);
		return aGZ === aGe ? aH6 : (aH7 = this.hP[aGZ].pop(), this.hP[aGZ].length === aH6 ? this.mz(aH7, aGe) : (aH8 = this.hP[aGZ][aH6], this.hP[aGZ][aH6] = aH7, ap.j7.aFv[aH7] = aH6, this.mz(aH8, aGe)))
	}
}

function aFT() {
	function a7e(aGe, aH9) {
		if (function(aGe, aFf) {
				var gX = ao.hN(aGe),
					aHC = Math.abs(ao.gZ(aFf) - ao.gZ(gX)),
					gX = Math.abs(ao.gb(aFf) - ao.gb(gX));
				return 0 !== Math.max(aHC, gX) && (function(aGZ, aGe, aHC, aHD) {
					var aHF = ao.h0(aGZ),
						aGZ = ao.h3(aGZ),
						aHH = ao.h0(aGe),
						aGe = ao.h3(aGe),
						aHH = aHH - aHF,
						aGe = aGe - aGZ,
						aHL = Math.abs(aHH),
						aHM = Math.abs(aGe),
						aHH = 0 < aHH ? 1 : 3,
						aGe = 0 < aGe ? 2 : 0;
					aHM < aHL ? aHP(aHF, aGZ, aHF + aHL, aGZ + aHM, aHH, aGe, aHC) : aHP(aGZ, aHF, aGZ + aHM, aHF + aHL, aGe, aHH, aHD)
				}(aGe, ao.hM(aFf), aHC, gX), !0)
			}(aGe, aH9)) {
			if (0 === aq.e2[0]) return !!a4.uo(aH9 << 2);
			if (function(aFf) {
					if (a4.uo(aFf << 2)) return 1;
					return function(aFf) {
						var du, fq, aGY = ap.j7.aGY,
							aHT = ao,
							ev = aq.e2[0],
							aHU = 4 * aFf;
						for (du = ev - 1; 0 <= du; du--)
							if (fq = aGY[du], aHU = aHT.hS(aHU, fq + 2 & 3), a4.uo(aHU)) return aq.e2[0] = du, aq.e6[1] = aHU >> 2, aq.e6[2] = 1 + fq, 1;
						return
					}(aFf)
				}(aH9)) {
				var du, aH9 = ao.hN(aGe),
					pT = a1s,
					aGY = ap.j7.aGY,
					ev = aq.e2[0] - 1,
					aHU = 4 * aH9,
					gU = ao.gU;
				for (du = 0; du < ev; du++)
					if (aHU += gU[aGY[du]], 0 !== pT[aHU + 3] || 2 !== pT[aHU + 2]) return !!void 0;
				return !!1
			}
		}
		return !1
	}

	function aHP(aHF, aHG, aHH, aHI, aHN, aHO, aHC) {
		for (var jl, aGY = ap.j7.aGY, f3 = 0, aHQ = 0, i2 = aHI - aHG, g2 = aHH - aHF, aHR = aHF % 16, du = 1; du <= aHC; du++) aGY[f3++] = aHN, aGY[f3] = aHO, f3 += (jl = (i2 * (aHR + (du << 4)) + .5) / g2 >> 4) - aHQ, aHQ = jl;
		aq.e8(aq.e2, f3)
	}
	this.my = function(player, aH9) {
		var fq, gX, gW = ao.gh(player, aH9);
		return gW !== aH9 && (fq = ao.gV(gW, aH9), gX = ao.hR(gW, fq), !(!a4.uo(gX << 2) && (fq = ao.gf(gW, aH9, fq), gX = ao.hR(gW, fq), a4.pd(gX << 2) || !a4.uo(gX << 2)) || (aq.e6[0] = gX, aq.e6[1] = aH9, aq.e6[2] = 0, !a7e(ao.hM(gX), aH9)) ||
			0 !== aq.e6[2] && ao.gq(player, aq.e6[1] + ao.gT[aq.e6[2] - 1] << 2)))
	}, this.n1 = function(aH9) {
		var aGZ = ap.j7.aFm[aq.e6[3]];
		return aq.e6[1] = aH9, aq.e6[2] = 0, a7e(aGZ, aH9)
	}
}

function aFP() {
	var aG7 = 32,
		aHW = new Array(2);

	function pH(iW) {
		var jk, jl, gi, h1, gy, gI = aG7,
			uU = ad.km.pH(gI, gI),
			gQ = ad.km.getContext(uU, !0),
			gM = ad.km.getImageData(gQ, gI, gI),
			pT = gM.data,
			pC = (gI >> 1) - .5,
			aHX = Math.sqrt(pC * pC);
		for (pT.fill(255), jl = 0; jl < gI; jl++)
			for (jk = 0; jk < gI; jk++) gy = jk - pC, h1 = jl - pC, gi = 4 * (jl * gI + jk), gy = 714 * (aHX - Math.sqrt(gy * gy + h1 * h1)) / aHX, pT[2 + gi] = iW, pT[3 + gi] = 255 < gy ? 0 : gy;
		return gQ.putImageData(gM, 0, 0), uU
	}
	this.aFk = -1, this.cj = function() {
		this.aFk = -1, aHW[0] || (aHW[0] = pH(255), aHW[1] = pH(0))
	}, this.aHY = function(gQ, gr, jk, jl, gS, du) {
		ao.h9() && (gQ.setTransform(gr *= 4 / 3 * .625, 0, 0, gr, jk - (gS *= 4 / 3), jl - gS), gQ.drawImage(aHW[+(ap.j7.aFj[du] === this.aFk)], 0, 0))
	}
}

function yR() {
	if (iY < 3) return !1;
	if (an.fa(3 * fL[jR[2]], 2) < fL[jR[0]]) return !1;
	if (fL[jR[0]] + fL[jR[1]] + fL[jR[2]] < tt - an.fa(tt, 10)) return !1;
	if (8 * Math.min(Math.min(er[jR[0]], er[jR[1]]), er[jR[2]]) < 5 * Math.max(Math.max(er[jR[0]], er[jR[1]]), er[jR[2]])) return !1;
	if (hX) {
		if (b8.iX[jR[0]] === b8.iX[jR[1]]) return !1;
		if (b8.iX[jR[0]] === b8.iX[jR[2]]) return !1;
		if (b8.iX[jR[1]] === b8.iX[jR[2]]) return !1
	}
	return !0
}

function cs() {
	this.gJ = 501, this.rn = new Uint32Array(this.gJ), this.tR = new Uint32Array(this.gJ), this.a1X = new Uint16Array(this.gJ), this.vN = 0, this.aHb = 1, this.iW = 0, this.max = [0, 0, 0], this.et = 0, this.aHc = ["Avg. Attack Strength",
		"Number Attacks", "Ships sent", "Bots conquered", "Humans conquered", "Attacked by Bots", "Attacked by Humans", "Territorial Loss", "Territorial Income", "Interest Income", "Received Support", "Overall Income", "Commanding Costs",
		"Attack Losses", "Defense Losses", "Shipping Losses", "Transmitted Support", "Overall Expenses"
	], this.cj = function() {
		this.vN = 0, this.aHb = 1, this.iW = 0, this.aHd(), this.aHe()
	}, this.mt = function(player, hB) {
		player === eq && (this.et[0] += hB, this.et[1]++, this.et[12] += aq.e3[1], this.et[13] += aq.e3[0])
	}, this.mE = function(player, lo) {
		donationsTracker.logDonation(player, lo, aq.e3[0]);
		player === eq && (k.mE(aq.e3[0], aq.e3[1], lo), this.et[12] += aq.e3[1], this.et[16] += aq.e3[0]), lo === eq && (k.wK(aq.e3[0], player), this.et[10] += aq.e3[0])
	}, this.iH = function() {
		0 < this.iW-- || this.aHf()
	}, this.aHf = function() {
		0 !== h7[eq] && (this.rn[this.vN] = fL[eq], this.tR[this.vN] = er[eq], this.a1X[this.vN] = a7.a1Y(eq), this.aHg(this.vN), this.vN++, this.vN === this.gJ && this.aHh(), this.iW = this.aHb - 1, b5.fz())
	}, this.aHh = function() {
		this.aHd(), this.aHg(0), this.vN = 1 + en(this.gJ, 2);
		for (var du = 1; du < this.vN; du++) this.rn[du] = this.rn[2 * du], this.tR[du] = this.tR[2 * du], this.a1X[du] = this.a1X[2 * du], this.aHg(du);
		this.aHb *= 2
	}, this.aHd = function() {
		this.max[0] = this.max[1] = this.max[2] = 0
	}, this.aHe = function() {
		this.et = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	}, this.aHg = function(du) {
		this.max[0] = this.rn[du] > this.max[0] ? this.rn[du] : this.max[0], this.max[1] = this.tR[du] > this.max[1] ? this.tR[du] : this.max[1], this.max[2] = this.a1X[du] > this.max[2] ? this.a1X[du] : this.max[2]
	}
}

function ct() {
	this.g2 = 0, this.i2 = 0, this.qd = 0, this.qe = 0, this.a2P = 0, this.a2Q = 0, this.wY = 0, this.wZ = 0, this.a5I = 0, this.a3y = 0, this.aHi = 0, this.aHj = 0, this.y0 = 0, this.fw = 0, this.v7 = ["Territory", "Balance", "Interest", "Numbers"],
		this.sX = !1, this.aHk = -1, this.aHl = !1, this.aHm = [0, 0], this.cj = function() {
			this.sX = !1, this.aHk = -1, this.aHl = !1, this.resize()
		}, this.resize = function() {
			this.g2 = dh < 1.369 * di ? dh : 1.369 * di;
			var f4 = dg && dh < di ? 1 : dg ? .8 : dh < di ? .65 : .59;
			this.g2 = Math.floor(f4 * this.g2), this.g2 -= dg && dh < di ? 2 * nc + 2 : 0, this.i2 = Math.floor(this.g2 / 1.369), this.y0 = Math.floor(this.i2 / 150), this.y0 = Math.max(this.y0, 1.5), this.qd = Math.floor(1 + .02 * this.g2), this
				.qe = Math.floor(1 + .04 * this.g2), this.wY = this.qe, this.wZ = Math.floor(1 + .075 * this.g2), this.a3y = Math.floor(1 + .1125 * this.g2), this.aHi = Math.floor(this.g2 * (dg ? .03 : .029)), this.aHi = Math.max(this.aHi, 4), this
				.aHj = Math.floor(.035 * this.g2), this.aHj = Math.max(this.aHj, 4), this.a5I = this.i2 - 2 * this.wY - this.wZ - this.a3y, this.sX && this.aHn()
		}, this.g5 = function(g6, g7) {
			var py, px;
			return !!this.sX && (px = g6, py = g7, g6 -= en(js - this.g2, 2), g7 -= en(g9 - this.i2, 2), g6 < 0 || g7 < 0 || g6 >= this.g2 || g7 >= this.i2 || g6 >= this.g2 - this.a3y && g7 < this.a3y ? 1 < j.g5(px, py) || this.oK() : g7 < this
				.a3y || (g7 < this.i2 - this.wZ ? (this.aHl = !0, this.aHk = (g6 - 2 * this.qd - this.a2P) / this.a2Q, 3 !== this.fw && (b7.d4 = !0)) : (px = (px = Math.floor(g6 / (this.g2 / this.v7.length))) < 0 ? 0 : px >= this.v7.length ? this
					.v7.length - 1 : px) !== this.fw && (this.fw = px, this.aHn(), b7.d4 = !0)), !0)
		}, this.so = function() {
			var aHo = Math.floor((this.aHm[0] + hC) / hD),
				aHp = Math.floor((this.aHm[1] + hE) / hD);
			aHo < 1 || aHp < 1 || aHo >= au.eV - 1 || aHp >= au.eW - 1 || console.log(aHo + " " + aHp)
		}, this.s6 = function(g6, g7) {
			return this.aHm[0] = g6, this.aHm[1] = g7, !(!this.sX || !this.aHl || (g6 -= en(js - this.g2, 2), g7 = this.aHk, this.aHk = (g6 - 2 * this.qd - this.a2P) / this.a2Q, (0 <= this.aHk && this.aHk <= 1 || 0 <= g7 && g7 <= 1) && (b7.d4 = !0),
				0))
		}, this.sZ = function() {
			this.aHl && (this.aHl = !1)
		}, this.sk = function() {
			this.sX ? this.oK() : this.show()
		}, this.show = function() {
			b4.vN < 2 || (this.sX = !0, this.aHn())
		}, this.oK = function() {
			this.sX = !1, this.aHk = -1, b7.d4 = !0
		}, this.aHn = function() {
			this.fw < 2 ? this.a2P = n.measureText(ad.k0.k1(b4.max[this.fw]), this.aHi + fy) : 2 === this.fw && (this.a2P = n.measureText(ad.k0.tg(6, 2), this.aHi + fy)), this.a2Q = this.g2 - 2 * this.qd - this.a2P - this.qe
		}, this.fz = function() {
			this.sX && this.aHn()
		}, this.gC = function() {
			this.sX && this.wd()
		}, this.wd = function() {
			var jk = en(js - this.g2, 2),
				jl = en(g9 - this.i2, 2);
			gD.setTransform(1, 0, 0, 1, jk, jl), gD.fillStyle = ae.ks, gD.fillRect(0, this.a3y, this.g2, this.i2 - this.a3y), this.aHq(), this.aHr(), gD.strokeRect(0, 0, this.g2, this.i2), gD.textAlign = xH, gD.font = this.aHi + fy, 0 === this.fw ?
				this.aHs(b4.rn, jk, jl) : 1 === this.fw ? this.aHs(b4.tR, jk, jl) : 2 === this.fw ? this.aHt(jk, jl) : 3 === this.fw && (this.aHu(jk, jl), this.aHv(jk, jl)), j.vP(Math.floor(jk + this.g2 - .725 * this.a3y), Math.floor(jl + .275 * this
					.a3y), Math.floor(.45 * this.a3y)), gD.setTransform(1, 0, 0, 1, 0, 0)
		}, this.aHq = function() {
			var du, dW;
			for (gD.lineWidth = this.y0, gD.textBaseline = gE, gD.textAlign = gF, gD.strokeStyle = ae.gG, gD.font = fx + this.aHj + fy, dW = this.g2 / this.v7.length, gD.fillStyle = ae.lA, gD.fillRect(this.fw * dW, this.i2 - this.wZ, dW, this.wZ), gD
				.fillStyle = ae.gG, gD.fillRect(0, this.i2 - this.wZ - .5 * this.y0, this.g2, this.y0), du = 1; du <= 3; du++) gD.fillRect(du * dW, this.i2 - this.wZ, this.y0, this.wZ);
			for (du = this.v7.length - 1; 0 <= du; du--) gD.fillText(this.v7[du], (du + .5) * dW, this.i2 - .46 * this.wZ)
		}, this.aHr = function() {
			gD.fillStyle = ae.lP, gD.fillRect(0, 0, this.g2, this.a3y), gD.fillStyle = ae.gG, gD.fillRect(0, this.a3y - .5 * this.y0, this.g2, this.y0), gD.font = fx + Math.floor(.39 * this.a3y) + fy, gD.fillText("Statistics", Math.floor(this.g2 /
				2), Math.floor(.55 * this.a3y))
		}, this.aHs = function(e9, jk, jl) {
			var pC = b4.max[this.fw],
				fs = (gD.setTransform(1, 0, 0, 1, jk + 2 * this.qd + this.a2P, jl + this.wY + this.a3y), gD.lineWidth = 2, this.a5I / Math.sqrt(pC));
			gD.beginPath(), gD.moveTo(this.a2Q, this.a5I - fs * Math.sqrt(e9[b4.vN - 1]));
			for (var du = b4.vN - 2; 0 <= du; du--) gD.lineTo(du * this.a2Q / (b4.vN - 1), this.a5I - fs * Math.sqrt(e9[du]));
			gD.stroke();
			jk = this.vP(e9, fs, .5);
			jk < .95 && gD.fillText(ad.k0.k1(pC), -this.qd, 0), .05 < Math.abs(jk - .5) && gD.fillText(ad.k0.k1(Math.floor(pC / 4)), -this.qd, Math.floor(this.a5I / 2)), .05 < jk && gD.fillText("0", -this.qd, this.a5I)
		}, this.aHt = function(jk, jl) {
			gD.setTransform(1, 0, 0, 1, jk + 2 * this.qd + this.a2P, jl + this.wY + this.a3y), gD.lineWidth = 2;
			var fs = this.a5I / Math.max(b4.max[this.fw], 1);
			gD.beginPath(), gD.moveTo(this.a2Q, this.a5I - fs * b4.a1X[b4.vN - 1]);
			for (var du = b4.vN - 2; 0 <= du; du--) gD.lineTo(du * this.a2Q / (b4.vN - 1), this.a5I - fs * b4.a1X[du]);
			gD.stroke();
			jk = this.vP(b4.a1X, fs, 1), jl = b4.max[this.fw] / 100;
			jk < .95 && gD.fillText(ad.k0.tg(jl, 2), -this.qd, 0), .05 < Math.abs(jk - .5) && gD.fillText(ad.k0.tg(jl / 2, 2), -this.qd, Math.floor(this.a5I / 2)), .05 < jk && gD.fillText(ad.k0.tg(0, 2), -this.qd, this.a5I)
		}, this.aHu = function(jk, jl) {
			gD.setTransform(1, 0, 0, 1, jk + .34 * this.g2, jl + 2 * this.wY + this.a3y), gD.textAlign = xH;
			for (var a0x = this.i2 - 4 * this.wY - this.wZ - this.a3y, du = 7; 0 <= du; du--) gD.fillText(b4.aHc[du], 0, du * a0x / 7);
			gD.setTransform(1, 0, 0, 1, jk + .39 * this.g2, jl + 2 * this.wY + this.a3y), gD.textAlign = vu;
			jk = b4.et[1];
			for (gD.fillText(ad.k0.tg(b4.et[0] / (10 * (jk < 1 ? 1 : jk)), 1), 0, 0), du = 6; 1 <= du; du--) gD.fillText(b4.et[du].toString(), 0, du * a0x / 7);
			gD.fillText(ad.k0.tg(100 * (1 - fL[eq] / b4.et[7]), 0), 0, a0x)
		}, this.aHv = function(jk, jl) {
			gD.setTransform(1, 0, 0, 1, jk + .79 * this.g2, jl + 2 * this.wY + this.a3y), gD.textAlign = xH;
			var du, a0x = this.i2 - 4 * this.wY - this.wZ - this.a3y;
			for (gD.fillStyle = ae.l5, du = 2; 0 <= du; du--) gD.fillText(b4.aHc[du + 8], 0, du * a0x / 9);
			for (gD.fillStyle = ae.l4, gD.fillText(b4.aHc[11], 0, 3 * a0x / 9), gD.fillStyle = ae.lI, du = 8; 4 <= du; du--) gD.fillText(b4.aHc[du + 8], 0, du * a0x / 9);
			gD.fillStyle = ae.lH, gD.fillText(b4.aHc[17], 0, 9 * a0x / 9), gD.fillStyle = ae.l5;
			var w2 = ad.k0.k1(b4.et[8] + b4.et[9] + b4.et[10] + b4.et[11]),
				aHw = gD.measureText(w2).width,
				jk = (gD.setTransform(1, 0, 0, 1, jk + .83 * this.g2 + aHw, jl + 2 * this.wY + this.a3y), gD.fillText(ad.k0.k1(b4.et[8]), 0, 0), gD.fillText(ad.k0.k1(b4.et[9]), 0, a0x / 9), gD.fillText(ad.k0.k1(b4.et[10]), 0, 2 * a0x / 9), gD
					.fillStyle = ae.l4, gD.fillText(w2, 0, 3 * a0x / 9), gD.fillStyle = ae.lI, b4.et[13] - a6.a8A(eq)),
				aHw = (gD.fillText(ad.k0.k1(b4.et[12]), 0, 4 * a0x / 9), gD.fillText(ad.k0.k1(jk), 0, 5 * a0x / 9), gD.fillText(ad.k0.k1(b4.et[14]), 0, 6 * a0x / 9), gD.fillText(ad.k0.k1(b4.et[15]), 0, 7 * a0x / 9), gD.fillText(ad.k0.k1(b4.et[16]),
					0, 8 * a0x / 9), b4.et[12] + jk + b4.et[14] + b4.et[15] + b4.et[16] + b4.et[17]);
			gD.fillStyle = ae.lH, gD.fillText(ad.k0.k1(aHw), 0, a0x), gD.fillStyle = ae.gG
		}, this.vP = function(e9, fs, zg) {
			var du, dE, eA;
			return this.aHk < 0 || 1 < this.aHk ? .25 : (du = this.aHk * (b4.vN - 1), eA = e9[dE = Math.floor(du)], eA += (du - dE) * (e9[dE < b4.vN - 1 ? dE + 1 : dE] - eA), gD.strokeStyle = ae.kx, .04 < this.aHk && this.aHz(0, this.a5I - fs * Math
					.pow(eA, zg), du * this.a2Q / (b4.vN - 1), this.a5I - fs * Math.pow(eA, zg)), .04 < eA / b4.max[this.fw] && this.aHz(du * this.a2Q / (b4.vN - 1), this.a5I, du * this.a2Q / (b4.vN - 1), this.a5I - fs * Math.pow(eA, zg)), gD
				.fillStyle = ae.lK, gD.beginPath(), gD.arc(du * this.a2Q / (b4.vN - 1), this.a5I - fs * Math.pow(eA, zg), Math.max(2, .014 * this.i2), 0, 2 * Math.PI), gD.fill(), e9 = this.aHk * b7.a1Z, e9 = 0 === h7[eq] ? Math.floor(e9 * u
				.a1g) : Math.floor(e9 * b7.iV()), gD.fillStyle = ae.gG, gD.fillText(1 === zg ? ad.k0.tg(eA / 100, 2) : ad.k0.k1(Math.floor(eA)), -this.qd, this.a5I - fs * Math.pow(eA, zg)), gD.textAlign = gF, gD.fillText(t.a0I(e9), du * this
					.a2Q / (b4.vN - 1), this.a5I + this.aHi - (dg ? 2 : 0) - this.y0), gD.textAlign = xH, fs * Math.pow(eA, zg) / this.a5I)
		}, this.aHz = function(jp, jq, jr, jt) {
			gD.beginPath(), gD.moveTo(jp, jq), gD.lineTo(jr, jt), gD.stroke()
		}
}

function bI() {
	this.aI0 = "https://", this.aI1 = this.aI0 + "territorial.io/", this.aCL = this.aI1 + "changelog", this.aCM = this.aI1 + "terms", this.wc = this.aI1 + "cookie_policy", this.rw = this.aI1 + "privacy_policy", this.aCI = this.aI1 + "tutorial", this
		.aCJ = this.aI1 + "players", this.aCK = this.aI1 + "clans", this.a2f = this.aI0 + "play.google.com/store/apps/details?id=territorial.io", this.a2g = this.aI0 + "apps.apple.com/app/id1581110913", this.a2h = this.aI0 +
		"www.youtube.com/watch?v=toZTQ8aRdFc", this.a2i = this.aI0 + "discord.gg/pthqvpTXmh", this.a2j = this.aI0 + "www.instagram.com/davidtschacher/"
}

function cX() {
	this.j7 = new aI2, this.qV = new aI3, this.cj = function() {
		this.j7.cj()
	}, this.iH = function() {
		0 !== this.j7.wf && this.j7.wf--
	}
}

function aI3() {
	this.gC = function() {
		if (0 !== ar.j7.wf && (gD.globalAlpha = Math.min(ar.j7.wf / 580, 1), gD.drawImage(ar.j7.aI6, 1 + p.ju(), 1 + p.gB()), gD.globalAlpha = 1, kN)) {
			var du, jp = hC / hD,
				jq = hE / hD,
				jr = (js + hC) / hD,
				jt = (g9 + hE) / hD,
				f3 = ar.j7.aI7 * hD,
				aI8 = ar.j7.aI8;
			for (du = h6 - 1; 0 <= du; du--) ! function(du, f3, jp, jq, jr, jt, aI8) {
				0 === h7[du] || 0 === fL[du] || (jr = js * ((i6[du] + i5[du] + 1) / 2 - jp) / (jr - jp) - .5 * f3, jp = g9 * ((i9[du] + i8[du] + 1) / 2 - jq) / (jt - jq) - .5 * f3, js < jr) || g9 < jp || jr < -f3 || jp < -f3 || (gD
					.setTransform(hD, 0, 0, hD, jr, jp), gD.drawImage(aI8[hX ? b8.iX[du] : 1], 0, 0))
			}(du, f3, jp, jq, jr, jt, aI8);
			gD.setTransform(hD, 0, 0, hD, 0, 0)
		}
	}
}

function aI2() {
	this.aI7 = 28, this.wf = 0, this.aI6 = null;
	var aIA = this.aI8 = null;

	function aID(gI, aIF) {
		var jk, jl, gi, gy, uU = ad.km.pH(gI, gI),
			gQ = ad.km.getContext(uU, !0),
			gM = ad.km.getImageData(gQ, gI, gI),
			pT = gM.data,
			pC = (gI >> 1) - .5,
			aIG = .5 + pC;
		for (aIG *= aIG, jl = 0; jl < gI; jl++)
			for (jk = 0; jk < gI; jk++) gy = (gy = jk - pC) * gy + (gy = jl - pC) * gy, pT[gi = 4 * (jl * gI + jk)] = aIF[0], pT[1 + gi] = aIF[1], pT[2 + gi] = aIF[2], pT[3 + gi] = (aIG - gy) * aIF[3] / aIG;
		return gQ.putImageData(gM, 0, 0), uU
	}

	function aHY(du, gQ, uU, gI) {
		var jk;
		0 !== h7[du] && 0 !== fL[du] && (jk = i6[du] + i5[du] + 1 - gI - 2 >> 1, gI = i9[du] + i8[du] + 1 - gI - 2 >> 1, gQ.drawImage(uU[hX ? b8.iX[du] : du < h6 ? 1 : 0], jk, gI))
	}
	this.cj = function() {
		var v4;
		this.wf = 700,
			function(v4) {
				var du, gI = v4.aI7;
				if (v4.aI8 = [], aIA = [], hX)
					for (du = 0; du <= tw; du++) v4.aI8.push(aID(gI, b8.aIE[b8.rd[du]])), aIA.push(aID(gI >> 1, b8.aIE[b8.rd[du]]));
				else v4.aI8.push(aID(gI, b8.aIE[0])), v4.aI8.push(aID(gI, b8.aIE[4])), aIA.push(aID(gI >> 1, b8.aIE[0]))
			}(this),
			function(v4, aIH) {
				var du, aI6 = v4.aI6,
					gQ = ad.km.getContext(aI6, !0),
					ev = ez,
					gI = v4.aI7 >> 1;
				gQ.imageSmoothingEnabled = !1, gQ.setTransform(1, 0, 0, 1, 0, 0), aIH && gQ.clearRect(0, 0, aI6.width, aI6.height);
				for (du = h6; du < ev; du++) aHY(du, gQ, aIA, gI)
			}(this, null !== (v4 = this).aI6 && v4.aI6.width === au.eV - 2 && v4.aI6.height === au.eW - 2 || (v4.aI6 = ad.km.pH(au.eV - 2, au.eW - 2), !1))
	}, this.tq = function() {
		for (var ev = h6, gI = this.aI7, aI8 = this.aI8, gQ = ad.km.getContext(this.aI6, !0), du = 0; du < ev; du++) aHY(du, gQ, aI8, gI)
	}
}

function cY() {
	this.aII = -1, this.cj = function() {
		this.aII = -1
	}, this.iH = function() {
		-1 !== this.aII && at.rC.rK(this.aII)
	}, this.m8 = function(player) {
		return !!j.vM(player) && (1 === iY ? (this.aII = player, iy && kN && mo.iH()) : (k.rI(player, player === eq ? 21 : 22), 8 === iw ? this.aII = 1 - player : iy ? (a79(player), a9r(), kN && mo.iH()) : this.aIJ(player)), !0)
	}, this.ml = function(player) {
		1 === jH && 0 !== h7[player] && 2 !== h8[player] && (8 === iw ? this.aII = 1 - player : this.aIJ(player)), k.rI(player, 4)
	}, this.aIJ = function(player) {
		kN ? (a79(player), a9r()) : aT.a9n(player)
	}
}

function cw() {
	this.a4q = ["rgba(130,130,130,0.88)", "rgba(130,12,12,0.88)", "rgba(12,130,12,0.88)", "rgba(12,12,130,0.88)", "rgba(130,130,12,0.88)", "rgba(130,12,130,0.88)", "rgba(12,130,130,0.88)", "rgba(130,130,130,0.88)", "rgba(0,0,0,0.88)"], this.a0w = [ae
		.gG, "rgb(255,120,120)", "rgb(0,230,0)", "rgb(150,150,255)", "rgb(240,240,25)", "rgb(255,70,255)", "rgb(25,240,240)", ae.gG, "rgb(170,170,170)"
	], this.aIK = [ae.gG, "rgb(255,0,0)", "rgb(0,255,0)", "rgb(0,0,255)", "rgb(255,255,0)", "rgb(255,0,255)", "rgb(0,255,255)", ae.gG, ae.jw], this.aIL = [ae.jw, ae.gG, ae.gG, ae.gG, ae.jw, ae.jw, ae.jw, ae.jw, ae.gG];
	var aIM = ["255,255,255", "0,0,0", "255,4,4", "200,4,4", "4,255,4", "4,180,4", "255,195,195", "90,3,3", "200,255,200", "3,84,3"],
		aIN = (this.a9I = ["rgba(" + aIM[0] + ",", "rgba(" + aIM[1] + ",", "rgba(" + aIM[2] + ",", "rgba(" + aIM[3] + ",", "rgba(" + aIM[4] + ",", "rgba(" + aIM[5] + ",", "rgba(" + aIM[6] + ",", "rgba(" + aIM[7] + ",", "rgba(" + aIM[8] + ",",
			"rgba(" + aIM[9] + ","
		], this.a9J = ["rgb(" + aIM[0] + ")", "rgb(" + aIM[1] + ")", "rgb(" + aIM[2] + ")", "rgb(" + aIM[3] + ")", "rgb(" + aIM[4] + ")", "rgb(" + aIM[5] + ")", "rgb(" + aIM[6] + ")", "rgb(" + aIM[7] + ")", "rgb(" + aIM[8] + ")", "rgb(" + aIM[
			9] + ")"
		], this.ft = ["White", "Red", "Green", "Blue", "Yellow", "Magenta", "Cyan", "White", "Black"], this.aIE = [
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
	this.rd = [0, 1, 2, 3, 4, 5, 6, 7, 8], this.iX = new Uint8Array(ez), this.rl = null, this.rm = null, this.cj = function(qh) {
		this.iX.fill(0), this.aIO(), hX && (aX.it && aX.iu.a7t ? this.a6W() : 9 === iw ? this.aIP() : this.iH(qh))
	}, this.a6W = function() {
		var du, ev = pz;
		for (this.rd = [0, 1, 2, 3, 4, 5, 6, 7, 8], du = 0; du < ev; du++) this.iX[du] = aX.iu.a7t[du]
	}, this.aIO = function() {
		for (var du = this.rd.length - 1; 0 <= du; du--) this.rd[du] = du;
		this.rl = [], this.rm = []
	}, this.aIP = function() {
		for (var du = h6 + aA.a9e - 1; 0 <= du; du--) this.iX[du] = 1;
		for (du = h6 + aA.a9e; du < ez; du++) this.iX[du] = 2;
		this.rd[1] = 7, this.rd[2] = 8
	}, this.iH = function(qh) {
		var gc = new Uint8Array(h6),
			gd = new Uint8Array(h6),
			aIQ = new Uint16Array(8),
			aIR = new Uint16Array(this.rd.length);
		this.aIS(qh, gc, gd, aIQ), this.a6U(aIQ), iy || this.aIT(aIR, gc, gd), this.aIU(gc, gd, aIR), iy ? this.aIV() : this.aIW()
	}, this.aIS = function(qh, gc, gd, aIX) {
		for (var hu, dE, aIY, ev = this.rd.length - 1, e9 = new Uint16Array(ev), du = h6 - 1; 0 <= du; du--) {
			for (hu = ev; 1 <= hu; hu--) e9[hu - 1] = Math.abs(4 * qh[du].a5W[0] - aIN[hu][0]) + Math.abs(4 * qh[du].a5W[1] - aIN[hu][1]) + Math.abs(4 * qh[du].a5W[2] - aIN[hu][2]);
			for (aIY = 768, hu = ev - 1; 0 <= hu; hu--) e9[dE = (hu + du) % ev] < aIY && (aIY = e9[dE], gc[du] = dE);
			for (aIX[gc[du]] += 4, aIY = 768, hu = ev - 1; 0 <= hu; hu--) e9[dE = (hu + du) % ev] < aIY && dE !== gc[du] && (aIY = e9[dE], gd[du] = dE);
			aIX[gd[du]]++
		}
	}, this.a6U = function(aIX) {
		for (var hu, uS, ev = this.rd.length - 1, du = ev; 0 <= du; du--) this.rd[du] = du;
		for (du = ev - 1; 0 <= du; du--) aIX[du]++;
		for (du = 1; du <= ev; du++) {
			for (uS = 0, hu = 1; hu < ev; hu++) aIX[hu] > aIX[uS] && (uS = hu);
			aIX[uS] = 0, this.rd[du] = uS + 1
		}
	}, this.aIT = function(aIR, gc, gd) {
		var du, hu, aIZ, iW, f4, dE, kY, tE, aIa = this.rd.length - 1,
			aIb = new Uint16Array(aIa),
			aIc = [];
		loop: for (du = h6 - 1; 0 <= du; du--)
			if (null !== (aIZ = ad.k0.tj(wW[du]))) {
				for (hu = this.rl.length - 1; 0 <= hu; hu--)
					if (aIZ === this.rl[hu]) {
						this.rm[hu].push(du);
						continue loop
					} this.rl.push(aIZ), aIc.push(!1), this.rm.push([]), this.rm[this.rl.length - 1].push(du)
			}
		for (hu = this.rl.length - 1; 0 <= hu; hu--) {
			for (f4 = -1, iW = this.rl.length - 1; 0 <= iW; iW--) !aIc[iW] && (-1 === f4 || this.rm[iW].length > this.rm[f4].length) && (f4 = iW);
			for (iW = aIa - 1; 0 <= iW; iW--) aIb[iW] = 1;
			for (iW = this.rm[f4].length - 1; 0 <= iW; iW--) aIb[gc[this.rm[f4][iW]]] += 3, aIb[gd[this.rm[f4][iW]]]++;
			for (du = aIa - 1; 0 <= du; du--) {
				for (dE = f4 % aIa, iW = aIa - 1; 0 <= iW; iW--) aIb[iW] > aIb[dE] && (dE = iW);
				for (kY = -1, iW = tw; 0 < iW; iW--)
					if (this.rd[iW] === dE + 1) {
						kY = iW;
						break
					} if (aIb[dE] = 0, -1 !== kY) {
					for (tE = 0, iW = tw; 0 < iW; iW--) aIR[kY] > aIR[iW] && tE++;
					if (tE !== tw - 1) {
						for (iW = this.rm[f4].length - 1; 0 <= iW; iW--) aIR[kY]++, this.iX[this.rm[f4][iW]] = kY;
						break
					}
				}
			}
			aIc[f4] = !0
		}
	}, this.aIU = function(gc, gd, aIR) {
		for (var du, gx, ev = this.rd.length - 1, border = en(h6, tw), aId = (0 < h6 % tw && border++, new Uint8Array(1 + ev)), hu = ev; 1 <= hu; hu--) aId[this.rd[hu]] = hu;
		for (du = 0; du < h6; du++) gx = aId[gc[du] + 1], 0 === this.iX[du] && gx <= tw && aIR[gx] < border && (aIR[gx]++, this.iX[du] = gx);
		for (du = 0; du < h6; du++) gx = aId[gd[du] + 1], 0 === this.iX[du] && gx <= tw && aIR[gx] < border && (aIR[gx]++, this.iX[du] = gx);
		for (hu = tw; 1 <= hu; hu--)
			for (du = h6 - 1; 0 <= du && !(aIR[hu] >= border); du--) 0 === this.iX[du] && (aIR[hu]++, this.iX[du] = hu)
	}, this.aIV = function() {
		var du, hk, aIX = new Uint16Array(tw);
		for (aIX[tw - 1] = ez, du = tw - 2; 0 <= du; du--) aIX[du] = a1.iz[du].wF;
		for (aIX[0]--, hk = 0 === aIX[0] ? 1 : 0, du = h6; du < ez; du++) this.iX[du] = hk + 1, aIX[hk]--, aIX[hk] <= 0 && hk++
	}, this.aIW = function() {
		for (var du = h6; du < ez; du++) this.iX[du] = 1 + du % tw
	}
}

function fM() {
	for (var jk, jl, du = eM - 1; 0 <= du; du--) jk = en(eO[du], 4) % au.eV, jl = en(eO[du], 4 * au.eV), i6[eI] = i6[eI] > jk ? jk : i6[eI], i9[eI] = i9[eI] > jl ? jl : i9[eI], i5[eI] = i5[eI] < jk ? jk : i5[eI], i8[eI] = i8[eI] < jl ? jl : i8[eI]
}

function ee() {
	var f4, f2, du, ev = ew[eI].length;
	loop: for (du = ev - 1; 0 <= du; du--) {
		for (f4 = 3; 0 <= f4; f4--)
			if (f2 = ew[eI][du] + eR[f4], a4.f7(f2) || a4.f5(f2) && a4.f6(f2) !== eI) {
				a4.hh(ew[eI][du], eI);
				continue loop
			} ew[eI][du] = ew[eI][ev - 1], ew[eI].pop(), ev--
	}
}

function ef() {
	var f4, f2, aIe, aIf, ev = fD[eI].length;
	loop: for (var du = ev - 1; 0 <= du; du--) {
		for (aIe = aIf = !1, f4 = 3; 0 <= f4; f4--) {
			if (f2 = fD[eI][du] + eR[f4], a4.a6g(f2, eI)) continue loop;
			aIe = aIe || a4.uo(f2), aIf = aIf || a4.pd(f2)
		}
		aIe ? fE[eI].push(fD[eI][du]) : aIf ? fH[eI].push(fD[eI][du]) : a4.qI(fD[eI][du], eI), fD[eI][du] = fD[eI][ev - 1], fD[eI].pop(), ev--
	}
}

function fB() {
	fL[eL] -= eM
}

function fC(border) {
	for (var ev = border.length, du = ev - 1; 0 <= du; du--) a4.qQ(eL, border[du]) || (border[du] = border[ev - 1], border.pop(), ev--)
}

function fF(border) {
	for (var ev = border.length, du = ev - 1; 0 <= du; du--) !a4.qQ(eL, border[du]) && a4.ex(border[du]) && (border[du] = border[ev - 1], border.pop(), ev--)
}

function fG(border) {
	for (var f4, f2, ev = border.length, du = ev - 1; 0 <= du; du--)
		for (f4 = 3; 0 <= f4; f4--)
			if (f2 = border[du] + eR[f4], a4.a6g(f2, eL)) {
				fD[eL].push(border[du]), border[du] = border[ev - 1], border.pop(), ev--;
				break
			}
}

function fI() {
	for (var f4, f2, du = eM - 1; 0 <= du; du--)
		for (f4 = 3; 0 <= f4; f4--) f2 = eO[du] + eR[f4], a4.a6h(eL, f2) && a4.a6i(f2) && (fD[eL].push(f2), a4.ey(f2, eL))
}

function fJ() {
	var jk, jl;
	loop: for (; i9[eL] < i8[eL];) {
		for (jk = i5[eL]; jk >= i6[eL]; jk--)
			if (a4.qQ(eL, 4 * (i9[eL] * au.eV + jk))) break loop;
		i9[eL]++
	}
	loop: for (; i9[eL] < i8[eL];) {
		for (jk = i5[eL]; jk >= i6[eL]; jk--)
			if (a4.qQ(eL, 4 * (i8[eL] * au.eV + jk))) break loop;
		i8[eL]--
	}
	loop: for (; i6[eL] < i5[eL];) {
		for (jl = i8[eL]; jl >= i9[eL]; jl--)
			if (a4.qQ(eL, 4 * (jl * au.eV + i6[eL]))) break loop;
		i6[eL]++
	}
	loop: for (; i6[eL] < i5[eL];) {
		for (jl = i8[eL]; jl >= i9[eL]; jl--)
			if (a4.qQ(eL, 4 * (jl * au.eV + i5[eL]))) break loop;
		i5[eL]--
	}
}

function hp(player, hd) {
	return 0 === b8.iX[player] || b8.iX[player] !== b8.iX[hd]
}

function uq(player, hd) {
	for (var dE, aIg = a6.ea(player), du = 0; du < aIg; du++)
		if (0 === a6.eb(player, du))
			if ((dE = a6.eg(player, du)) === ez) {
				if (hd === ez) return !1;
				if (up(hd)) return !0
			} else if (hd === ez) {
		if (up(dE)) return !0
	} else if (uu(hd, dE)) return !0;
	return !1
}

function up(player) {
	for (var du, f3, ev = fD[player].length, f4 = 3; 0 <= f4; f4--)
		for (f3 = eR[f4], du = 0; du < ev; du++)
			if (a4.f7(fD[player][du] + f3)) return !0;
	return !1
}

function uu(tO, tP) {
	var du, dW, f4, f3, f2, aEc = fD[tO].length,
		aGa = fD[tP].length;
	for (aGa < aEc && (dW = tO, tO = tP, tP = dW, dW = aEc, aEc = aGa, 0), f4 = 3; 0 <= f4; f4--)
		for (f3 = eR[f4], du = 0; du < aEc; du++)
			if (f2 = fD[tO][du] + f3, a4.f5(f2) && a4.f6(f2) === tP) return !0;
	return !1
}

function aIh() {
	this.iH = function() {
		l.iH(), w.iH(), aK.iH(), aP.j7.iH(), aO.a4I(), bA.iH(), bC.a4h.iH(), b7.d4 && (b7.d4 = !1, x.gC())
	}
}

function aIi() {
	this.dV = b7.dV, this.fw = 0, this.aIj = 0, this.a4F = 0, this.aIk = null, this.aIl = 7, this.wg = 0, this.cj = function() {
		this.a4F = 0, this.aIk = [], this.fw = 0, this.aIj = 0
	}, this.aDL = function(mX) {
		var du;
		if (kN) this.a1a(mX);
		else if (this.aIk.push(mX), 2 === jH) {
			for (du = 0; du < this.aIk.length; du++) aa.lf.iH(this.aIk[du]);
			this.aIk = []
		}
	}, this.a1a = function(mX) {
		aa.lf.iH(mX), ab.iH(), t.a1a(this.a4F), this.a4F === tx ? (mo.iH(), this.a4F = 0, this.fw = 0, this.aIj = 0, this.dV = b7.dV) : (this.a4F++, a8.tp(), a8.jG(!0), b2.a1q())
	}, this.iH = function() {
		aK.iH(), kN ? (b7.d4 = t.a1a(-1) || b7.d4, jI()) : (0 !== this.fw || b7.dV >= this.dV && (this.dV += b7.a1Z * Math.floor(1 + (b7.dV - this.dV) / b7.a1Z), 2 === jH ? j5() : this.aIm(), this.fw++, 27 < b7.dV - this.wg)) && this.aIn(), jD(),
			b7.d4 && (b7.d4 = !1, qT()), this.wg = b7.dV
	}, this.aIn = function() {
		b7.d4 = !0, jF(), this.fw = 0
	}, this.aIm = function() {
		var aIo, du;
		if (this.aIj !== 7 * this.a4F) jA(), b2.a1q();
		else {
			for (aIo = !1; this.aIp() && (aIo = !0, jA(), 0 < this.aIk.length);)
				for (du = this.aIl - 2; 0 <= du; du--) jA();
			aIo ? b2.a1q() : (j5(), b2.ts())
		}
	}, this.aIp = function() {
		return 0 < this.aIk.length && (this.a4F++, aa.lf.iH(this.aIk[0]), this.aIk.shift(), !0)
	}
}

function aIq() {
	var aIr, aIs, aIt, a4F, aIu, fw = 0,
		dV = b7.dV;

	function aIx() {
		! function() {
			if (!kN) return;
			if (iy) return;
			return aIu % 7 != 0 ? aIu++ : a4F === tx ? (aJ0(), t.a1a(a4F), mo.iH()) : (aJ0(), aIu++, a4F++, a8.tp(), a8.jG(!0)), 1
		}() && (aJ0(), jA())
	}

	function aIy() {
		fw = 0, (kN ? (b7.d4 = t.a1a(a4F - (aIu % 7 == 0 ? 0 : 1) + aIu % 7 / 7) || b7.d4, jI) : j.fg || !af.vC ? jI : (b7.d4 = !0, jF))()
	}

	function aJ0() {
		var du, ev, aJ1 = ab.mm.aE4,
			eA = ab.mm.aE5,
			eC = ab.mm.aE6,
			eE = ab.mm.aE7,
			aJ2 = ab.mm.aE8,
			aJ3 = ab.mm.aE9;
		if (aIr >= aJ3.length) k.w0("Replay file smaller than expected."), at.rC.rK(-1);
		else if (aJ3 = aJ3[aIr], aJ2[aIr]) {
			for (ev = aIs + aJ3, du = aIs; du < ev; du++) aa.lf.mZ(aJ1[du], eA[du], eC[du], eE[du]);
			aIs += aJ3, aIr++
		} else ++aIt >= aJ3 && (aIr++, aIt = 0)
	}
	this.aIj = 0, this.cj = function() {
		aIu = a4F = aIt = aIs = aIr = 0
	}, this.iH = function() {
		var aGx;
		aK.iH(), af.yp() < 1.7 ? 0 === fw ? b7.dV >= dV && (aGx = b7.a1Z / af.yp(), dV += aGx * Math.floor(1 + (b7.dV - dV) / aGx), 2 === jH || j.fg || !af.vC ? j5() : (aIx(), b2.a1q()), fw++) : aIy() : function() {
			var aGx;
			if (b7.dV >= dV)
				if (2 === jH || j.fg || !af.vC) j5(), dV = b7.dV;
				else {
					for (aGx = b7.a1Z / af.yp(), 16 < (b7.dV - dV) / aGx && (dV = b7.dV - 16 * aGx); b7.dV >= dV && 2 !== jH;) dV += aGx, aIx();
					b2.a1q()
				} aIy()
		}(), jD(), b7.d4 && (b7.d4 = !1, qT())
	}, this.rX = function() {
		aIr !== ab.mm.aE9.length && k.w0("Replay file larger than expected.")
	}
}

function aJ4() {
	var fw = 0,
		dV = b7.dV;
	this.aIj = 0, this.iH = function() {
		aK.iH(), kN ? jI() : 0 === fw ? b7.dV >= dV && (dV += b7.a1Z * Math.floor(1 + (b7.dV - dV) / b7.a1Z), 2 === jH || j.fg ? j5() : (jA(), b2.a1q()), fw++) : ((j.fg ? jI : (b7.d4 = !0, jF))(), fw = 0), jD(), b7.d4 && (b7.d4 = !1, qT())
	}
}

function cv() {
	function aJ6() {
		b7.dV = performance.now(), b7.rW.iH(), window.requestAnimationFrame(aJ6)
	}

	function aJ7() {
		var dW = performance.now();
		b7.dV + 1500 < dW && (b7.dV = dW, b7.rW.iH())
	}
	this.rW = null, this.d4 = !1, this.dV = 0, this.aJ5 = -1, this.a1Z = 56, this.cj = function() {
		this.uI(), window.requestAnimationFrame(aJ6), this.dV = performance.now()
	}, this.uE = function() {
		ff ? (this.rW = new aIq, this.rW.cj()) : iy ? this.rW = new aJ4 : (this.rW = new aIi, this.rW.cj())
	}, this.uI = function() {
		this.rW = new aIh, this.d4 = !0
	}, this.sp = function() {
		1 !== jH || !iy || j.fg || kN || j.sk(), -1 === this.aJ5 && (this.aJ5 = setInterval(aJ7, 2e3))
	}, this.sq = function() {
		this.d4 = !0, -1 !== this.aJ5 && (clearInterval(this.aJ5), this.aJ5 = -1)
	}, this.iH = function() {
		this.rW.aIj++
	}, this.iV = function() {
		return this.rW.aIj
	}
}

function cB() {
	var kE = 0,
		aJ8 = !0;

	function aJA(dd) {
		8 !== x.sg() || 2 !== h8[eq] && (0 !== h7[eq] || kN) || k.wA(dd)
	}
	this.iH = function() {
		var dW, wj;
		b7.dV > kE && (kE = b7.dV + 2500, dW = new Date, wj = dW.getUTCSeconds(), aJ8 ? wj < 45 && (aJ8 = !1) : wj < 45 || -1 !== b7.aJ5 || (aJ8 = !0, (wj = dW.getUTCMinutes() + 1) % 15 == 0 && aJA(30 === wj ? "Upcoming Battle Royale Contest!" :
			"Upcoming Alliance Contest!")))
	}
}

function c2() {
	var jp, jq, jr, jt, aJB = 0,
		aJC = 0;

	function aJE() {
		return Math.pow(Math.pow(jr - jp, 2) + Math.pow(jt - jq, 2), .5)
	}

	function aJD(dE) {
		jp = nS * dE.touches[0].clientX, jq = nS * dE.touches[0].clientY, jr = nS * dE.touches[1].clientX, jt = nS * dE.touches[1].clientY
	}
	this.sA = function(dE) {
		return 1 < dE.touches.length ? (aJC = b7.dV, aJB = 3, aJD(dE), i.oK(), !0) : (aJB = 0, !1)
	}, this.sB = function(dE) {
		var aAZ, gv, gw;
		return 0 !== jH && 1 < dE.touches.length && (aJB = Math.max(aJB - 1, 0), f.kd() && (aAZ = aJE(), aJD(dE), dE = aJE(), gv = Math.floor((jp + jr) / 2), gw = Math.floor((jq + jt) / 2), p.zP(gv, gw, Math.max(.125, dE) / Math.max(.125, aAZ)),
			b7.d4 = !0), !0)
	}, this.sc = function() {
		var jk, jl;
		return !!(aJB && (aJB = 0, b7.dV < aJC + 500)) && (jk = (jp + jr) / 2, jl = (jq + jt) / 2, i.sV(jk, jl), i.click(jk, jl, !0) && (b7.d4 = !0), !0)
	}
}

function cQ() {
	this.gJ = 0, this.fw = 0, this.mX = null, this.cj = function(mX) {
		this.fw = 0, this.mX = mX, this.gJ = mX.length
	}, this.a3k = function() {
		this.mX = null
	}, this.mY = function(gJ) {
		for (var e0 = 0, mX = this.mX, kd = this.fw + gJ - 1, du = this.fw; du <= kd; du++) e0 |= (mX[du >> 3] >> 7 - (7 & du) & 1) << kd - du;
		return this.fw += gJ, this.fw > 8 * this.gJ && console.log("error unwrapper"), e0
	}, this.aCi = function(gJ) {
		for (var e9 = new Array(gJ), du = 0; du < gJ; du++) e9[du] = this.mY(10);
		return h.pA(e9)
	}, this.aJF = function(aET) {
		return this.gJ === ag.aJG(aET)
	}
}

function cp() {
	this.aFI = 0, this.aFJ = 0, this.aFE = 0, this.aFF = 0, this.aFG = 0, this.aFH = 0, this.a1r = [0, 0, 0, 0], this.kc = function() {
		this.aFI = p.ju(), this.aFJ = p.gB(), this.aFE = -this.aFI, this.aFF = -this.aFJ, this.aFG = js / hD, this.aFH = g9 / hD, this.a1r[0] = Math.floor(this.aFE), this.a1r[1] = Math.floor(this.aFF), this.a1r[2] = Math.floor(this.a1r[0] + this
			.aFG + 1), this.a1r[3] = Math.floor(this.a1r[1] + this.aFH + 1), b2.a1o = !0
	}
}

function c3() {
	var xw, kE;
	this.cj = function() {
		xw = 1, kE = 0
	}, this.iH = function() {
		0 < xw && (kE = 0 === kE ? b7.dV + 16 : kE, xw = (xw -= .001 * (b7.dV - kE)) < 0 ? 0 : xw, kE = b7.dV, b7.d4 = !0)
	}, this.gC = function() {
		0 < xw && (gD.fillStyle = "rgba(0,0,0," + xw + ")", gD.fillRect(0, 0, js, g9))
	}
}

function c6() {
	function aJK(a9z, jk, jl, g2, i2) {
		a9z >= au.a7n || (au.pn === a9z && (gD.fillStyle = ae.lQ, gD.fillRect(jk, jl, g2, i2), gD.fillStyle = ae.gG), gD.strokeRect(jk, jl, g2, i2), gD.fillText(au.iu.pm[a9z].name, Math.floor(jk + .5 * g2), Math.floor(jl + .55 * i2)))
	}
	this.sX = !1, this.a5J = [0, 0, 0, 0], this.show = function() {
		this.sX = !0, this.resize(), b7.d4 = !0
	}, this.resize = function() {
		var aEc = en(au.a7n + au.a7n % 2, 2),
			aEc = di - aEc * g8;
		this.a5J[2] = dg ? Math.floor(.75 * xP) : Math.floor(.5 * xP), this.a5J[3] = Math.floor(1.25 * this.a5J[2]), this.a5J[3] > aEc && (this.a5J[3] = aEc, this.a5J[2] = Math.floor(aEc / 1.2)), this.a5J[0] = Math.floor((dh - this.a5J[2]) / 2),
			this.a5J[1] = Math.floor((di - this.a5J[3]) / 2)
	}, this.s6 = function(jk, jl) {
		return !(jk < this.a5J[0] || jl < this.a5J[1] || jk > this.a5J[0] + this.a5J[2] || jl > this.a5J[1] + this.a5J[3])
	}, this.g5 = function(jk, jl) {
		var wY, aEc = en(au.a7n + au.a7n % 2, 2);
		return b7.d4 = !0, jk < this.a5J[0] || jl < this.a5J[1] || jk > this.a5J[0] + this.a5J[2] || jl > this.a5J[1] + this.a5J[3] ? !(this.sX = !1) : (wY = Math.floor(.17 * this.a5J[3]), jl < this.a5J[1] + wY ? jk > this.a5J[0] + this.a5J[2] -
			wY && (this.sX = !1) : (jl = (jl = Math.floor(aEc * (jl - this.a5J[1] - wY - .00576 * fu) / (this.a5J[3] - wY - .01152 * fu))) < 0 ? 0 : aEc - 1 < jl ? aEc - 1 : jl, jk > this.a5J[0] + this.a5J[2] / 2 && (jl += aEc), jl >= au
				.a7n || au.bh(jl, Math.floor(16384 * Math.random()))), !0)
	}, this.gC = function() {
		var du, jq, wY = Math.floor(.17 * this.a5J[3]),
			aEc = en(au.a7n + au.a7n % 2, 2),
			gap = .6 * .01152 * fu,
			wZ = (this.a5J[3] - wY - (aEc + 1) * gap) / aEc,
			qd = Math.floor((this.a5J[2] - 3 * gap) / 2);
		for (gD.lineWidth = tI, gD.textAlign = gF, gD.textBaseline = gE, gD.fillStyle = ae.ks, gD.fillRect(this.a5J[0], this.a5J[1] + wY, this.a5J[2], this.a5J[3] - wY), gD.fillStyle = ae.lQ, gD.fillRect(this.a5J[0], this.a5J[1], this.a5J[2],
			wY), gD.strokeStyle = ae.gG, gD.strokeRect(this.a5J[0], this.a5J[1], this.a5J[2], this.a5J[3]), gD.fillStyle = ae.gG, gD.fillRect(this.a5J[0], this.a5J[1] + wY, this.a5J[2], 2), gD.font = fx + Math.floor(.48 * wY) + fy, gD.fillText(
				"Maps", Math.floor(this.a5J[0] + this.a5J[2] / 2), Math.floor(this.a5J[1] + .55 * wY)), gD.font = fx + Math.floor(.48 * wZ) + fy, du = aEc - 1; 0 <= du; du--) jq = Math.floor(this.a5J[1] + wY + gap + du * (wZ + gap)), aJK(du, this
			.a5J[0] + gap, jq, qd, wZ), aJK(du + aEc, this.a5J[0] + qd + 2 * gap, jq, qd, wZ);
		j.vP(Math.floor(this.a5J[0] + this.a5J[2] - .7 * wY), Math.floor(this.a5J[1] + .3 * wY), Math.floor(.4 * wY)), gD.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function cO() {
	this.gJ = 0, this.fw = 0, this.mX = null, this.cj = function(mX) {
		this.fw = 0, this.mX = mX, this.gJ = mX.length
	}, this.bh = function(aET) {
		return this.cj(new Uint8Array(this.aJG(aET))), this.mX
	}, this.a3k = function() {
		this.mX = null
	}, this.p7 = function(gJ, wl) {
		for (var mX = this.mX, kd = this.fw + gJ - 1, du = this.fw; du <= kd; du++) mX[du >> 3] |= (wl >> kd - du & 1) << 7 - (7 & du);
		this.fw += gJ, this.fw > 8 * this.gJ && console.log("error wrapper")
	}, this.aJL = function(gJ) {
		for (var mX = this.mX, kd = this.fw + gJ, du = this.fw; du < kd; du++) mX[du >> 3] &= 255 ^ 128 >>> (7 & du)
	}, this.aJG = function(aET) {
		return aET + 7 >> 3
	}, this.aJM = function(e9, hm, kd, aJN) {
		for (var du = hm; du < kd; du++) this.p7(aJN, e9[du])
	}
}
setTimeout(bD, 1e4);