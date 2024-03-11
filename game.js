var a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, aA, aB, aC, aD, aE, aF, aG, aH, aI, aJ, aK, aL, aM, aN, aO, aP, aQ, aR, aS, aT, aU, aV, aW, aX, aY, aZ, aa, ab, ac, ad, ae, af,
	ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, as, at, au, av, aw, ax, ay, az, b0, b1, b2, b3, b4, b5, b6, b7, b8, b9, bA, bB, bC, bD, d8, d9, dA, dB, dC, dD, dE, eL, eM, eN, eO, eP, eQ, eR, eS, eT, eU, eV, eW, eX, hu, hr, ht, hb;

function bE() {
	var cn;
	a || (bG(), bH(), an = new bI, am = new bJ, b = new bK, c = new bL, d = new bM, e = new bN, f = new bO, g = new bP, h = new bQ, i = new bR, j = new bS, k = new bT, l = new bU, m = new bV, n = new bW, o = new bX, p = new bY, q = new bZ, r =
		new ba, s = new bb, t = new bc, u = new bd, v = new be, w = new bf, x = new bg, (y = new bh).bi(), z = new bj, a0 = new bk, a1 = new bl, a2 = new bm, a3 = new bn, a4 = new bo, a5 = new bp, a6 = new bq, a7 = new br, a8 = new bs, a9 =
		new bt, aA = new bu, aB = new bv, aC = new bw, aD = new bx, aP = new by, aE = new bz, aF = new c0, aG = new c1, aH = new c2, aI = new c3, aJ = new c4, aK = new c5, aL = new c6, aM = new c7, aN = new c8, aO = new c9, aQ = new cA, aR =
		new cB, aS = new cC, aT = new cD, aU = new cE, aV = new cF, aW = new cG, aX = new cH, aZ = new cI, aa = new cJ, ab = new cK, ac = new cL, ad = new cM, ae = new cN, af = new cO, ag = new cP, ah = new cQ, ai = new cR, aj = new cS, ak =
		new cT, al = new cU, ao = new cV, ap = new cW, aq = new cX, ar = new cY, as = new cZ, at = new ca, au = new cb, av = new cc, aw = new cd, ax = new ce, aY = new cf, bB = new cg, a = new ch, bC = new ci, bD = new cj, a.cl(), aP.cl(), ah
		.cl(), aj.cl(), au.cl(), cm(), (cn = document.getElementById("usernameField")) && document.body.removeChild(cn), bB.cl(), a5.cl(), ay = new co, aR.cl(), aK.cl(), cp(), cq(), b1 = new cr, b2 = new cs, b3 = new ct, b4 = new cu, b5 = new cv,
		b6 = new cw, (b7 = new cx).cl(), b8 = new cy, b9 = new cz, (b0 = new d0).cl(), (bA = new d1).cl(), az = new d2, d3(), aF.cl(), a7.d4(), aB.cl(), x.cl(), aW.cl(), aP.cl(), q.cl(), a9.cl(), al.cl(), a3.cl(), aZ.cl(), bD.cl(), ax.cl(), ak
		.d5(), b7.d6 = !0, setTimeout(function() {
			au.bi(2, 14071)
		}, 0), a.d7 = 1)
}

function ch() {
	this.cl = function() {
		d8 = 2, d9 = 1027, dB = 15, dA = "1.92.9   24 Feb 2024", dC = 0 <= window.location.hostname.toLowerCase().indexOf("territorial.io"), dE = function() {
			try {
				return window.self !== window.top
			} catch (dG) {
				return !0
			}
		}(), dD = (new Date).getTime() % 1024
	}, this.d7 = 0
}

function ce() {
	this.dH = new dI, this.dJ = new dK, this.cl = function() {
		this.dH.cl()
	}
}

function dI() {
	function dM(dS) {
		console.log("Video Ad Completed: " + dS)
	}

	function dL() {
		return dV || dW || !dC
	}
	this.cl = function() {
		var dP;
		dL() || (window.aiptag = window.aiptag || {
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
				AIP_COMPLETE: dM
			})
		}), (dP = document.createElement("div")).id = "videoad", document.body.appendChild(dP), (dP = document.createElement("script")).async = !0, dP.src = "", document.head.appendChild(dP))
	}, this.dR = function() {
		if (console.log("showVideo"), dL()) console.log("error 0");
		else {
			if (void 0 !== aiptag.adplayer) return console.log("Success: Ad will be shown!"), aiptag.cmd.player.push(function() {
				aiptag.adplayer.startVideoAd()
			}), !0;
			console.log("error: aiptag.adplayer is undefined")
		}
		return !1
	}, this.dT = function(dU) {
		dL() || "undefined" != typeof aipAPItag && (dU ? aipAPItag.showCMPButton() : aipAPItag.hideCMPButton())
	}
}

function dK() {
	var dX = 6e4;
	this.show = function() {
		return b7.dX < dX ? (console.log("can't show ad, next ad will be shown in " + ((dX - b7.dX) / 1e3).toFixed(0) + "s"), !1) : (dX = b7.dX + 135e4, !!ax.dH.dR() || (dV ? (window.webkit.messageHandlers.iosCommandA.postMessage("show ad " +
			Math.floor(135e4)), !0) : 12 <= dZ && (dW.presentAd(Math.floor(135e4)), !0)))
	}
}

function da() {
	var username;
	return dV ? db.username : (12 <= dZ ? "" === (username = dW.loadString(20)) && (username = "Android User " + Math.floor(1e3 * Math.random()), dW.saveString(20, username)) : 5 <= dZ ? "" === (username = dW.loadString(0)) && (username = "Player " +
		Math.floor(1e3 * Math.random()), dW.saveString(0, username)) : username = a5.dc(0), username)
}

function dd() {
	var df, max;
	if (dV) df = db.password;
	else if (12 <= dZ) df = dW.loadString(22);
	else {
		if (5 <= dZ) return 0;
		df = a5.dc(9)
	}
	return max = Math.floor(Math.pow(2, 48)), 0 < (df = Math.floor(parseInt(h.dg(df)))) && df < max || dh(df = Math.floor(1 + (max - 1) * Math.random())) ? df : 0
}

function cp() {
	var dY;
	dV ? di = db.zoom || dj < dk : 12 <= dZ ? -1 === (dY = dW.loadNumber(21)) ? (di = dW.getNumber(0) <= 100 || dj < dk, dW.saveNumber(21, di ? 1 : 0)) : di = 1 === dY || dj < dk : 5 <= dZ ? 2 === (dY = dW.loadNumber(1)) ? (di = !0, dW.saveNumber(1,
		di ? 1 : 0)) : di = 1 === dY : di = 0 === a5.dc(4) || dj < dk
}

function dl() {
	return dV ? db.emojis : 5 <= dZ ? dW.loadString(1) : a5.dc(7)
}

function dm() {
	return dV ? db.colors : 12 <= dZ ? dW.loadString(21) : 5 <= dZ ? dW.loadString(2) : a5.dc(8)
}

function dn(username) {
	dV ? window.webkit.messageHandlers.iosCommandA.postMessage("username " + username) : 12 <= dZ ? (dW.saveString(20, username), dW.setState(10)) : 5 <= dZ ? dW.saveString(0, username) : ((username.length < 3 || 0 <= username.indexOf(";")) && (
		username = "Player 666"), a5.dp(0, username), a5.dq())
}

function dh(de) {
	de = h.dr(de.toString());
	return dV ? (db.password = de, window.webkit.messageHandlers.iosCommandA.postMessage("password " + de), !0) : 12 <= dZ ? (dW.saveString(22, de), !0) : !(5 <= dZ || 2 !== a5.ds() || (a5.dp(9, de), a5.dq(), 0))
}

function dt(zoom, du) {
	dV ? (window.webkit.messageHandlers.iosCommandA.postMessage("zoom " + (zoom ? 1 : 0)), window.webkit.messageHandlers.iosCommandA.postMessage("sound " + (du ? 1 : 0))) : 12 <= dZ ? (dW.saveNumber(22, du ? 1 : 0), dW.saveNumber(21, zoom ? 1 : 0)) :
		5 <= dZ ? (dW.saveNumber(1, zoom ? 1 : 0), dW.saveNumber(11, du ? 1 : 0)) : (a5.dp(2, du ? 1 : 0), a5.dp(4, zoom ? 0 : 1), a5.dq())
}

function dv() {
	for (var df = "", dw = 0; dw < b3.dx; dw += 2) df += b3.dy[dw] || b3.dy[dw + 1] ? b3.dy[dw] && !b3.dy[dw + 1] ? "1" : !b3.dy[dw] && b3.dy[dw + 1] ? "2" : "3" : "0";
	dV ? window.webkit.messageHandlers.iosCommandA.postMessage("emojis " + df) : 5 <= dZ ? dW.saveString(1, df) : (a5.dp(7, df), a5.dq())
}

function dz(df) {
	if (dV) window.webkit.messageHandlers.iosCommandA.postMessage("colors " + df);
	else {
		if (12 <= dZ) dW.saveString(21, df);
		else if (5 <= dZ) return void dW.saveString(2, df);
		a5.dp(8, df), a5.dq()
	}
}

function e0(dS) {
	dV || 5 <= dZ && dW.setState(dS)
}

function e1() {
	!dV && 7 <= dZ ? dW.setState(5) : e2()
}

function e2() {
	var e3 = new URL(window.location);
	e3.searchParams.set("v", "" + Math.floor(1e3 * Math.random())), window.location.href = e3.toString()
}

function cq() {
	dZ < 17 || dW.saveString(23, document.documentElement.outerHTML)
}

function cX() {
	this.e6 = new Uint16Array(2), this.e7 = new Uint32Array(2), this.e8 = new Uint8Array(4), this.e9 = new Uint8Array(4), this.eA = new Uint32Array(5), this.eB = new Uint32Array(8), this.eC = function(eD, eE) {
		return eD[0] = eE, eD
	}, this.eF = function(eD, eE, eG) {
		return eD[0] = eE, eD[1] = eG, eD
	}, this.eH = function(eD, eE, eG, eI) {
		return eD[0] = eE, eD[1] = eG, eD[2] = eI, eD
	}, this.eJ = function(eD, eE, eG, eI, eK) {
		return eD[0] = eE, eD[1] = eG, eD[2] = eI, eD[3] = eK, eD
	}
}

function eY() {
	eQ = 0, eR = 2048, eS = new Uint32Array(4 * eR), eT = 0, eU = new Uint32Array(eR), (eV = new Int32Array(4))[0] = -4 * au.eZ, eV[1] = 4, eV[2] = -eV[0], eV[3] = -eV[1], eW = new Uint8Array(au.eZ * au.ea)
}

function eb(player) {
	eM = player, eX = !1, ec(), ed();
	for (var dw = a6.ee(eM) - 1; 0 <= dw; dw--) 0 === a6.ef(eM, dw) && (eL = dw, eg());
	eX && eh()
}

function eh() {
	ei(), ej()
}

function eg() {
	eP = a6.ek(eM, eL), eN = a6.el(eM, eL), em(), (0 !== eQ && (eo(), ep()) ? eq : en)()
}

function ep() {
	return eO = er(eN, eQ), es < eO
}

function eo() {
	for (var dw = eQ - 1; 0 <= dw; dw--) eW[er(eS[dw], 4)] = 0
}

function en() {
	var dY;
	1 === a6.ee(eM) && c.et(eM), eM !== eu ? (ev[eM] += eN, a7.ew(eM)) : (dY = ev[eM], ev[eM] += eN, a7.ew(eM), b4.ex[13] -= ev[eM] - dY), a6.ey(eM, eL)
}

function ec() {
	var dw, ez = f0[eM].length;
	for (eT = 0, dw = (eR < ez ? eR : ez) - 1; 0 <= dw; dw--) eU[eT++] = f0[eM][dw]
}

function ed() {
	for (var dw = f0[eM].length - 1; 0 <= dw; dw--) a4.f1(f0[eM][dw]) && a4.f2(f0[eM][dw], eM);
	f0[eM] = []
}

function em() {
	eQ = 0, (eP === f3 ? f4 : f5)()
}

function f5() {
	for (var f6, f7, dw, f8 = 3; 0 <= f8; f8--)
		for (dw = eT - 1; 0 <= dw; dw--) f7 = er(f6 = eU[dw] + eV[f8], 4), 0 === eW[f7] && a4.f9(f6) && a4.fA(f6) === eP && (eW[f7] = 1, eS[eQ++] = f6)
}

function f4() {
	for (var f6, f7, dw, f8 = 3; 0 <= f8; f8--)
		for (dw = eT - 1; 0 <= dw; dw--) f7 = er(f6 = eU[dw] + eV[f8], 4), 0 === eW[f7] && a4.fB(f6) && (eW[f7] = 1, eS[eQ++] = f6)
}

function eq() {
	fC() ? (fD(), eP !== f3 && fE()) : en()
}

function fE() {
	fF(), fG(fH[eP]), fG(fI[eP]), fJ(f0[eP]), fK(fI[eP]), fK(fL[eP]), fM(), fN()
}

function fD() {
	eX = !0, a6.fO(eM, eL, eN), fP[eM] += eQ, fQ(), fR()
}

function fC() {
	return (eP === f3 ? fS : fT)()
}

function fT() {
	var fU = eQ * es,
		fV = fW(),
		fX = fY(),
		fV = fU + 2 * fV + fX,
		fa = eO * eQ;
	return fV < fa ? (eN -= fV, fb(fV - fU, fX), !0) : (eN -= fa, fb(fa - fU, fX), !1)
}

function fb(fa, fX) {
	if (0 < fX) {
		if (!(fX <= fa)) return a6.fc(eP, eM, fX - fa), void(fa = 0);
		a6.fc(eP, eM, 0), fa -= fX
	}
	fa = er(fa, 2), ev[eP] >= fa ? ev[eP] -= fa : ev[eP] = 0
}

function fY() {
	return a6.fd(eP, eM)
}

function fW() {
	return an.fe(eQ * ev[eP], 1 + an.fe(10 * fP[eP], 16))
}

function ff() {
	return Math.floor(2 + fg(er(fP[eP], 100), 8))
}

function fh() {
	return fH[eP].length + er(fI[eP].length + fL[eP].length, 50)
}

function fS() {
	return eN -= eQ * es, !0
}

function fR() {
	for (var dw = eQ - 1; 0 <= dw; dw--) f0[eM].push(eS[dw]), fH[eM].push(eS[dw]), a4.f2(eS[dw], eM)
}

function cc() {
	this.fi = function() {
		fj || j.fk || ad.fl.fm(1) && ad.fl.fn(eu) && a6.fo(eu) && (a6.fp(eu, f3) || function(player) {
			var dw, fu, fv = fH[player],
				ez = fv.length;
			for (fu = 0; fu < 4; fu++)
				for (dw = 0; dw < ez; dw++)
					if (a4.fB(fv[dw] + eV[fu])) return 1;
			return
		}(eu)) && aa.fr.fs(o.ft(), f3)
	}
}

function d0() {
	var fw = 1,
		fx = [null, null];
	this.cl = function() {
		fw = .72 * (di ? .0011 : .001) * fy;
		for (var dw = 1; 0 <= dw; dw--) fx[dw] && this.fz(dw, fx[dw].df)
	}, this.fz = function(g0, df) {
		fx[g0] = {
			df: df,
			font: g1 + 10 + g2
		}, this.g3(g0)
	}, this.g3 = function(g0) {
		var df, fontSize, g5, g6, g7;
		a3.g4() && fx[g0] && (df = fx[g0].df, fontSize = Math.floor(.15 * fw * a3.get(13).height), g6 = n.measureText(df, g5 = g1 + fontSize + g2), (g7 = .8 * fw * a3.get(13).width) < g6 && (fontSize = Math.floor(fontSize * g7 / g6), g5 = g1 +
			fontSize + g2), fx[g0] = {
			df: df,
			font: g5
		}, b7.d6 = !0)
	}, this.g8 = function() {
		return Math.floor(fw * a3.get(13).height)
	}, this.g9 = function(gA, gB) {
		return !!a3.g4() && !(gA < gC || gB < gD - gE.g6 - fw * a3.get(13).height - 2 * gC || gB > gD - gE.g6 - 2 * gC || (gA < gC + fw * a3.get(13).width ? (bA.dU(0), 0) : gA < 2 * gC + fw * a3.get(13).width || !(gA < 2 * gC + 2 * fw * a3.get(
			13).width) || (bA.dU(1), 0)))
	}, this.gF = function() {
		return Math.floor(gD - gE.g6 - fw * a3.get(13).height - 2 * gC)
	}, this.gG = function() {
		if (a3.g4()) {
			gH.imageSmoothingEnabled = !0, gH.setTransform(fw, 0, 0, fw, gC, this.gF()), gH.drawImage(a3.get(14), 0, 0), gH.setTransform(fw, 0, 0, fw, 2 * gC + fw * a3.get(13).width, this.gF()), gH.drawImage(a3.get(13), 0, 0);
			for (var dw = 1; 0 <= dw; dw--) fx[dw] && (gH.setTransform(1, 0, 0, 1, (1 + dw) * gC + dw * fw * a3.get(13).width, this.gF()), gH.font = fx[dw].font, gH.textBaseline = gI, gH.textAlign = gJ, gH.fillStyle = ae.gK, gH.fillText(fx[dw]
				.df, .5 * fw * a3.get(13).width, .86 * fw * a3.get(13).height));
			gH.setTransform(1, 0, 0, 1, 0, 0)
		}
	}
}

function gL(gM, size, gN, gO) {
	var dw, gR = .2,
		gS = document.createElement("canvas"),
		gT = gS.getContext("2d", {
			alpha: !1
		});
	for (gS.width = gM, gS.height = gM, gT.font = size + "px " + settings.fontName, gT.textAlign = "center", gT.textBaseline = "middle", gT.fillStyle = "red", dw = 0; dw < gN.length; dw++) gT.fillText(gN[dw], .5 * gM, .5 * gM);
	return -1 < (gS = function(gP) {
		var dw, gV;
		for (dw = gP.data.length - 4; 0 <= dw; dw -= 4)
			if (gV = gP.data[dw], gO <= gV) return Math.floor(dw / (4 * gM));
		return -1
	}(gT.getImageData(0, 0, gM, gM))) && (gR = (gS - .5 * gM + .1 * size) / size), Math.max(gR, 0)
}

function cV() {
	this.gW = new Int16Array(4), this.gX = new Int16Array(4), this.cl = function() {
		var dw;
		for (this.gW[0] = -au.eZ, this.gW[1] = 1, this.gW[2] = au.eZ, this.gW[3] = -1, dw = 0; dw < 4; dw++) this.gX[dw] = 4 * this.gW[dw]
	}, this.gY = function(gZ, ga) {
		var gb = this.gc(ga) - this.gc(gZ),
			ga = this.ge(ga) - this.ge(gZ),
			gZ = gb >>> 31 << 1;
		return 5 + gZ + (1 - gZ) * (1 - (ga >>> 31 << 1)) * (Math.abs(gb) - Math.abs(ga) >>> 31) & 3
	}, this.gi = function(gZ, ga, fu) {
		return fu % 2 == 0 ? fu + (1 - fu) * (1 - (this.gc(ga) - this.gc(gZ) >>> 31 << 1)) + 4 & 3 : fu + (2 - fu) * (1 - (this.ge(ga) - this.ge(gZ) >>> 31 << 1)) + 4 & 3
	}, this.gk = function(f6, gl) {
		for (var ga, gm, go = fI[f6], ez = go.length, g6 = au.eZ, gp = this.gc(gl), gq = this.ge(gl), gr = go[0] >> 2, min = this.gs(gp, gq, gr), dw = 1; dw < ez; dw++)(gm = (gm = gp - (ga = go[dw] >> 2) % g6) * gm + (gm = gq - ~~((.5 + ga) /
			g6)) * gm) < min && (min = gm, gr = ga);
		return gr
	}, this.gt = function(player, gu) {
		return !a4.fB(gu) && player === a4.fA(gu)
	}, this.gs = function(gv, gw, gl) {
		return (gv -= this.gc(gl)) * gv + (gw -= this.ge(gl)) * gw
	}, this.gx = function(gy, gz, h0) {
		gy = this.h2(gy) - this.h3(h0), gz = this.h5(gz) - this.h6(h0);
		return Math.sqrt(gy * gy + gz * gz)
	}, this.h7 = function(gZ, ga) {
		var h1 = this.gc(gZ) - this.gc(ga),
			gZ = this.ge(gZ) - this.ge(ga);
		return Math.sqrt(h1 * h1 + gZ * gZ)
	}, this.h8 = function(f6) {
		return f6 < h9 && 0 !== hA[f6] && 2 !== hB[f6]
	}, this.hC = function() {
		return 0 !== hA[eu] && 2 !== hB[eu]
	}, this.hD = function(f6, hE) {
		return an.fe(hE * ev[f6], 1e3)
	}, this.h2 = function(gy) {
		return 16 * (gy + hF) / hG
	}, this.h5 = function(gz) {
		return 16 * (gz + hH) / hG
	}, this.hI = function(gy) {
		return Math.floor((gy + hF) / hG)
	}, this.hJ = function(gz) {
		return Math.floor((gz + hH) / hG)
	}, this.hK = function(gv, gw) {
		return 1 <= gv && 1 <= gw && gv < au.eZ - 1 && gw < au.ea - 1
	}, this.gc = function(gl) {
		return gl % au.eZ
	}, this.ge = function(gl) {
		return an.fe(gl, au.eZ)
	}, this.hL = function(gv, gw) {
		return gw * au.eZ + gv
	}, this.hM = function(gl) {
		var gv = this.gc(gl),
			gl = this.ge(gl);
		return 0 < gv && gv < au.eZ - 1 && 0 < gl && gl < au.ea - 1
	}, this.hN = function(gl) {
		return gl << 2
	}, this.hO = function(gl) {
		return au.eZ * this.ge(gl) * 256 + (this.gc(gl) << 4)
	}, this.hP = function(gl) {
		return this.hO(gl) + 8 + (au.eZ << 7)
	}, this.hQ = function(h0) {
		return au.eZ * (this.h6(h0) >> 4) + (this.h3(h0) >> 4)
	}, this.hR = function(h0) {
		h0 = this.hQ(h0);
		return (this.gc(h0) >> 5) + ap.hS.hT * (this.ge(h0) >> 5)
	}, this.h3 = function(h0) {
		return h0 % (au.eZ << 4)
	}, this.h6 = function(h0) {
		return an.fe(h0, au.eZ << 4)
	}, this.hU = function(gl, fu) {
		return gl + this.gW[fu]
	}, this.hV = function(gu, fu) {
		return gu + this.gX[fu]
	}
}

function hW(player) {
	return aq.eB[1] = f0[player].length, aq.eB[0] === f3 ? hX(player) : hY(player, aq.eB[0]), 0 !== aq.eB[1] || 0 !== f0[player].length
}

function hZ(player) {
	ha && (hb[player] = 1), hc(aq.eB[1], player), a6.hd(player, aq.e7[0], aq.eB[0]), c.he(player, !1)
}

function hf(player, hg, ez, hh) {
	var hi = er(3 * ev[player], 256);
	hh -= hh >= er(ev[player], 2) ? hi : 0, hc(ez, player), a6.hd(player, hh, hg), ev[player] -= hh + hi, c.he(player, !1)
}

function hY(player, hg) {
	for (var fu, dw = fH[player].length - 1; 0 <= dw; dw--)
		if (a4.hj(fH[player][dw]))
			for (fu = 3; 0 <= fu; fu--)
				if (a4.f9(fH[player][dw] + eV[fu]) && a4.fA(fH[player][dw] + eV[fu]) === hg) {
					f0[player].push(fH[player][dw]);
					break
				}
}

function hc(size, player) {
	for (var dw = f0[player].length - 1; size <= dw; dw--) a4.hk(f0[player][dw], player)
}

function hX(player) {
	for (var fu, dw = fH[player].length - 1; 0 <= dw; dw--)
		if (a4.hj(fH[player][dw]))
			for (fu = 3; 0 <= fu; fu--)
				if (a4.fB(fH[player][dw] + eV[fu])) {
					f0[player].push(fH[player][dw]);
					break
				}
}

function hl(player, hm) {
	var dw, hn, fu, ho, ez = fH[player].length,
		gj = 256 <= ez ? 12 : 32 <= ez ? 6 : 1,
		hp = ez - 1 - aF.hq(gj);
	hr = 0;
	loop: for (dw = hp; 0 <= dw; dw -= gj)
		for (fu = 3; 0 <= fu; fu--)
			if ((ho = a4.fB(fH[player][dw] + eV[fu]) ? f3 : a4.fA(fH[player][dw] + eV[fu])) === f3 || a4.f9(fH[player][dw] + eV[fu]) && ho !== player && (hm || hs(player, ho))) {
				for (hn = hr - 1; 0 <= hn; hn--)
					if (ht[hn] === ho) continue loop;
				if (ht[hr] = ho, ++hr >= hu) return !0
			}
	return 0 < hr
}

function hv(player, hm) {
	var dw, fu, ho;
	for (hr = 0, dw = fH[player].length - 1; 0 <= dw; dw--)
		for (fu = 3; 0 <= fu; fu--)
			if ((ho = a4.fB(fH[player][dw] + eV[fu]) ? f3 : a4.fA(fH[player][dw] + eV[fu])) === f3 || a4.f9(fH[player][dw] + eV[fu]) && ho !== player && (hm || hs(player, ho))) return ht[hr++] = ho, !0;
	return !1
}

function hw() {
	for (var hx, dw = hr - 1; 0 <= dw; dw--)
		if (ht[dw] === f3) {
			for (hr--, hx = dw; hx < hr; hx++) ht[hx] = ht[hx + 1];
			return !0
		} return !1
}

function hy(player) {
	for (var hx, dw = hr - 1; 0 <= dw; dw--)
		if (a6.fp(player, ht[dw]))
			for (hr--, hx = dw; hx < hr; hx++) ht[hx] = ht[hx + 1];
	return 0 === hr
}

function hz() {
	for (var dw = hr - 1; 0 <= dw; dw--)
		if (ht[dw] >= h9) return !0;
	return !1
}

function i0() {
	for (var dw = hr - 1; 0 <= dw; dw--) ht[dw] < h9 && (ht[dw] = ht[--hr]);
	return 0 < hr
}

function i1(player) {
	for (var hx, i2 = ht[0], i3 = ev[i2] + a6.fd(i2, player), dw = hr - 1; 1 <= dw; dw--)(hx = ev[ht[dw]] + a6.fd(ht[dw], player)) < i3 && (i2 = ht[dw], i3 = hx);
	return i2
}

function i4(player) {
	var i5, i6 = ht[0];
	if (1 !== hr)
		for (var i7 = er(i8[player] + i9[player], 2), iA = er(iB[player] + iC[player], 2), iD = iE(i7 - er(i8[i6] + i9[i6], 2)) + iE(iA - er(iB[i6] + iC[i6], 2)), dw = hr - 1; 1 <= dw; dw--)(i5 = iE(i7 - er(i8[ht[dw]] + i9[ht[dw]], 2)) + iE(iA - er(
			iB[ht[dw]] + iC[ht[dw]], 2))) < iD && (iD = i5, i6 = ht[dw]);
	return i6
}

function iF() {
	return ht[aF.hq(hr)]
}

function cm() {
	hu = 8, hr = 0, ht = new Uint16Array(hu)
}

function iG() {
	hb = ha ? new Uint8Array(f3) : null
}

function iH(player, hh) {
	var iI;
	ha && (hb[player] = 0), !a6.fo(player) || hh < 60 || (0 === fH[player].length ? ap.iJ.iK(player) || (b.iL(player - h9, 200), iM(player, hh, b.hh[player - h9], a7.iN(player))) : 0 < fI[player].length && aF.random() < aF.value(fI[player].length >
		fH[player].length ? 7 : 3) && ap.iJ.iK(player) || (iI = a7.iN(player), ev[player] > iI && hh < ev[player] - iI && (hh = ev[player] - iI), ha ? iO(player, hh, b.hh[player - h9], iI) : iP(player, hh, b.hh[player - h9])))
}

function iO(player, hh, iQ, iI) {
	var hg;
	hl(player, !1) || hv(player, !1) ? (hb[player] = 1, hy(player) || (hw() ? (iR(player, hh), iS(player, f3, iQ)) : (aF.iT(b.iU[iQ]) ? iV(player, hh, hg = i1(player)) : (hz() && aF.iT(b.iW[iQ]) && i0(), iV(player, hh, hg = i4(player))), iS(player,
		hg, iQ)))) : 0 < fI[player].length && aF.random() < aF.value(60) && ap.iJ.iK(player) || (b.iL(player - h9, 200), iM(player, hh, iQ, iI))
}

function iX(player, hh) {
	hl(player, !1) || hv(player, !1) ? (hb[player] = 1, hw() ? iR(player, hh) : iV(player, hh, iF())) : iM(player, hh, 0, 0)
}

function iS(player, hg, iQ) {
	3 <= iQ && 2142 < b7.iY() && (hg === f3 || ev[hg] < er(ev[player], 20)) && b.iL(player - h9, 25)
}

function iM(player, hh, iQ, iI) {
	var dw, hx, iZ;
	if (0 !== b8.ia[player] && !(5 === iQ && ev[player] < iI || 4 === iQ && ev[player] < er(iI, 2)))
		for (dw = aF.hq(ib), hx = 0; hx < ib; hx++)
			if (iZ = ic[(hx + dw) % ib], b8.ia[iZ] === b8.ia[player] && 1 === hb[iZ]) return void aa.ie.ig(player, iZ, hh)
}

function iP(player, hh, iQ) {
	!hl(player, !0) && !hv(player, !0) || hy(player) || (hw() ? iR(player, hh) : aF.iT(b.iU[iQ]) ? iV(player, hh, i1(player)) : (hz() && aF.iT(b.iW[iQ]) && i0(), iV(player, hh, i4(player))))
}

function ih(player, hh) {
	(hl(player, !0) || hv(player, !0)) && (hw() ? iR(player, hh) : iV(player, hh, iF()))
}

function iV(player, hh, hg) {
	er(ev[player], 8) > ev[hg] && (hh = (ii = er(11 * ev[hg], 5)) < hh ? hh : ii);
	var ii = f0[player].length;
	hY(player, hg), hf(player, hg, ii, hh)
}

function iR(player, hh) {
	var hg = f3,
		ez = f0[player].length;
	return hX(player), f0[player].length !== ez && (hf(player, hg, ez, hh), !0)
}
self.aiCommand746 = function(e4) {
	0 === e4 ? bE() : 1 !== e4 || dZ < 14 || x.e5()
};
var dV, db, dW, dZ, h9, rO, iv, rN, ij = [60, 74, 112, 200, 256, 512];

function bK() {
	var ik, il, im, io, ip, iq;

	function j3(dw) {
		ik[dw] = 1 + er(ip[dw] * aF.random(), 10 * aF.value(100))
	}
	this.ir = ["Very Easy", "Easy", "Normal", "Hard", "Harder", "Very Hard"], this.is = [97, 95, 93, 90, 87, 84], this.iW = [98, 95, 70, 40, 20, 0], this.it = [85, 70, 50, 30, 7, 3], this.iU = [0, 0, 5, 25, 50, 90], this.hh = null, this.cl =
		function() {
			var dw, iu;
			if (ik = new Uint8Array(iv), il = new Uint16Array(iv), im = new Uint16Array(iv), io = new Uint8Array(iv), this.hh = new Uint8Array(iv), ip = new Uint16Array(iv), iq = new Uint16Array(iv), aX.iw) {
				if (aX.ix.iy)
					for (dw = iv - 1; 0 <= dw; dw--) this.hh[dw] = aX.ix.iy[dw + 1]
			} else if (9 === iz) this.j0();
			else if (j1)
				if (ha)
					for (dw = iv - 1; 0 <= dw; dw--) this.hh[dw] = a1.j2[b8.ia[dw + h9] - 1].f8;
				else
					for (dw = iv - 1; 0 <= dw; dw--) this.hh[dw] = a1.j2[0].f8;
			else
				for (iu = 8 === iz ? 1 : 0, dw = iv - 1; 0 <= dw; dw--) this.hh[dw] = iu;
			for (dw = iv - 1; 0 <= dw; dw--) this.hh[dw] <= 2 ? (io[dw] = 5, ip[dw] = iq[dw] = 1040, 0 === this.hh[dw] ? (il[dw] = 1e3, im[dw] = 1e3) : 1 === this.hh[dw] ? (il[dw] = 1e3, im[dw] = 920, ip[dw] = iq[dw] = 1100) : (il[dw] = 825, im[dw] =
				750)) : this.hh[dw] <= 4 ? (io[dw] = 1 + aF.hq(20), 3 === this.hh[dw] ? (il[dw] = im[dw] = 500, ip[dw] = iq[dw] = 1e3) : (iq[dw] = 250 + aF.hq(1501), ip[dw] = 500 + aF.hq(501), il[dw] = 300 + aF.hq(201), im[dw] = 100 + aF.hq(
				201))) : (ip[dw] = 1e3, iq[dw] = 1e3, io[dw] = 35 + aF.hq(16), il[dw] = 300 + aF.hq(201), im[dw] = 50 + aF.hq(101)), j3(dw)
		}, this.j0 = function() {
			for (var dw, gu = 0, hx = 0; hx < 6; hx++) {
				for (dw = gu + aA.j4[hx] - 1; gu <= dw; dw--) this.hh[dw] = hx;
				gu += aA.j4[hx]
			}
		}, this.iL = function(j5, value) {
			0 <= j5 && (ik[j5] = value)
		}, this.iK = function(j5) {
			0 == --ik[j5] && ! function(j5) {
				! function(j5) {
					ip[j5] !== iq[j5] && (ip[j5] += ip[j5] < iq[j5] ? 3 : -3);
					il[j5] !== im[j5] && (il[j5] += il[j5] < im[j5] ? io[j5] : -io[j5], il[j5] = (Math.abs(il[j5] - im[j5]) <= io[j5] ? im : il)[j5]);
					ik[j5] = er(ip[j5], 10)
				}(j5);
				var player = j5 + h9;
				iH(player, er(il[j5] * ev[player], 1e3))
			}(j5)
		}
}

function j8() {
	k.iK(), a8.iK(), t.j9(), aP.jA.iK(), at.jB.jC()
}

function jD() {
	aQ.iK(), d.iK(), a7.iK(), aU.iK(), aT.iK(), c.iK(), e.iK(), ap.jA.iK(), jE(), s.iK(), aA.iK(), a8.iK(), a8.jF(), t.iK(), ar.iK(), r.iK(), m.iK(), k.iK(), aV.iK(), o.iK(), aN.iK(), b4.iK(), b9.iK(), as.iK(), aP.jA.iK(), ab.iK(), b7.iK()
}

function jG() {
	f.iK(), u.iK(), n.iK(), aJ.iK(), af.iK(), aO.jH()
}

function jI() {
	s.jJ(!1), m.jJ(), t.jJ(!1), r.jJ(), o.jJ(), aN.jJ(), a8.jJ(2 === jK), b9.g3()
}

function jL() {
	a8.jJ(!0) && (b7.d6 = !0), aP.jA.iK()
}

function bL() {
	var jM, jN, jO, jP, jQ, jR;

	function jV(jX) {
		for (var dw = jN - 1; 0 <= dw; dw--) 0 === jP[jO[dw]] && fP[jO[dw]] >= jX && eb(jO[dw])
	}

	function jT(player) {
		10 === jP[player] ? jP[player] = jM : fP[player] < 1e3 ? jP[player] = 3 : fP[player] < 1e4 ? jP[player] = 2 : fP[player] < 6e4 ? jP[player] = 1 : jP[player] = 0
	}
	this.cl = function() {
		jQ = jR = 0, jM = 6, jN = 0, jO = new Uint16Array(f3), jP = new Uint8Array(f3)
	}, this.iK = function() {
		var dw;
		for (jQ = b4.ex[13], jR = ev[eu], dw = jN - 1; 0 <= dw; dw--) 10 === jP[jO[dw]] ? jT(jO[dw]) : 0 == jP[jO[dw]]-- && (jT(jO[dw]), eb(jO[dw]));
		16e4 <= fP[jU[0]] && (jV(16e4), 3e5 <= fP[jU[0]]) && jV(3e5), fP[eu] > b4.ex[7] && (b4.ex[7] = fP[eu]), b4.ex[14] += jR - ev[eu] + jQ - b4.ex[13]
	}, this.et = function(player) {
		for (var hn, dw = jN - 1; 0 <= dw; dw--)
			if (player === jO[dw]) {
				for (jN--, hn = dw; hn < jN; hn++) jO[hn] = jO[hn + 1];
				return
			}
	}, this.he = function(player, jY) {
		for (var dw = jN - 1; 0 <= dw; dw--)
			if (player === jO[dw]) return;
		jO[jN++] = player, jP[player] = jY ? 2 : 10
	}
}

function bM() {
	var size, iJ;
	this.cl = function() {
		size = iv, iJ = new Uint16Array(iv);
		for (var dw = iv - 1; 0 <= dw; dw--) iJ[dw] = dw
	}, this.iK = function() {
		for (var dw = size - 1; 0 <= dw; dw--) 0 === hA[iJ[dw] + h9] ? function(hn) {
			size--;
			for (var dw = hn; dw < size; dw++) iJ[dw] = iJ[dw + 1]
		}(dw) : b.iK(iJ[dw])
	}
}

function bN() {
	var jb, jc, jN, jO, jP, jd, je, jf;

	function jh(dw) {
		var hn;
		for (jN--, hn = dw; hn < jN; hn++) jO[hn] = jO[hn + 1], jP[hn] = jP[hn + 1], jd[hn] = jd[hn + 1], je[hn] = je[hn + 1], jf[hn] = jf[hn + 1]
	}
	this.cl = function() {
		jb = 1, jN = 0, jc = 2 * f3, jO = new Uint16Array(jc), jP = new Uint8Array(jc), jd = new Uint16Array(jc), je = new Uint32Array(jc), jf = new Uint32Array(jc)
	}, this.jg = function(g0, position) {
		je[g0] = position
	}, this.iK = function() {
		for (var dw = jN - 1; 0 <= dw; dw--) 0 == jP[dw]-- && (jP[dw] = 2, aG.iK(dw, jd[dw], jO[dw], je[dw], jf[dw]))
	}, this.et = function(player, id) {
		for (var dw = jN - 1; 0 <= dw; dw--)
			if (player === jO[dw] && id === jd[dw]) return void jh(dw)
	}, this.ji = function(player) {
		for (var dw = jN - 1; 0 <= dw; dw--) player === jO[dw] && (aG.jj(player, je[dw]), jh(dw))
	}, this.he = function(player, hp, jk) {
		if (jc <= jN) return 0;
		jO[jN] = player, jP[jN] = 0, jd[jN] = jb, je[jN] = hp, jf[jN] = jk;
		player = jb;
		return jN++, jb = 2 * jc < ++jb ? 1 : jb, player
	}, this.gG = function() {
		if (!(hG < 40 || 0 === jN)) {
			var hn, jn, jo, dw, fontSize, jr, hh, js = hF / hG,
				jt = hH / hG,
				ju = (jv + hF) / hG,
				jw = (gD + hH) / hG;
			for (gH.textAlign = gJ, gH.textBaseline = gI, hn = jN - 1; 0 <= hn; hn--) jn = a4.jx(je[hn]), jo = a4.gF(je[hn]), dw = jO[hn], js - 1 < jn && jn < ju && jt - 1 < jo && jo < jw && 0 !== hA[dw] && ((fontSize = Math.floor(.94 * hG * a8
				.jy(dw))) < 6 || (jn = Math.floor(jv * (jn + .5 - js) / (ju - js)), jo = Math.floor(gD * (jo + .48 - jt) / (jw - jt)), gH.font = g1 + fontSize + g2, gH.fillStyle = ae.jz, hh = a6.el(dw, a6.k0(dw, jd[hn])), gH.fillText(aR
				.k1.k2 ? ad.k3.k4(hh) : k5[dw], jn, jo), (jr = Math.floor(.5 * fontSize)) < 6) || (gH.font = g1 + jr + g2, gH.fillText(aR.k1.k2 ? k5[dw] : ad.k3.k4(hh), jn, jo + Math.floor(.82 * fontSize))))
		}
	}
}

function bO() {
	var k6, k7, k8, k9, kA, kB, kC, kD, kE, kF, kG, kH, kI, kJ = !1,
		kK = !1;

	function kL(kM) {
		kH = b7.dX, k8 = k9 = k7 = 0, kA = (kI = 33) / kM, k6 = 1 / (kM / kI / 4), kB = (jv / 2 + hF) / hG, kC = (gD / 2 + hH) / hG, kD = hG
	}

	function ka(kc) {
		Math.abs(Math.log(kG / kD)) < .125 && (kG = kc * kD)
	}

	function kZ(js, jt, ju, jw) {
		kE = (js + ju + 1) / 2, kF = (jt + jw + 1) / 2;
		ju = jv / (ju - js + 1), js = gD / (jw - jt + 1);
		kG = .9 * (ju < js ? ju : js)
	}
	this.kN = function() {
		return kJ
	}, this.kO = function() {
		kL(1), this.kP(0, 0, au.eZ - 1, au.ea - 1), kQ || fj || this.kR(eu, 3e3, !0, .3)
	}, this.kR = function(player, kM, kS, zoom) {
		kT || kJ && !kS && kK || 0 === fP[player] || (p.kU = !1, kK = kS, kL(kM), function(player) {
			kE = (i9[player] + i8[player] + 1) / 2, kF = (iC[player] + iB[player] + 1) / 2
		}(player), function(zoom, player) {
			var h1 = i8[player] - i9[player] + 1,
				player = iB[player] - iC[player] + 1,
				hn = jv / h1,
				hx = gD / player,
				hn = (kG = hn < hx ? hn : hx, 0 !== zoom ? zoom : h1 < 20 && player < 20 ? .5 : .9);
			kG *= hn, ka(7 / 8)
		}(zoom, player), kJ = !0, aD.kX())
	}, this.kY = function(kM) {
		fj || kT || (p.kU = !1, kK = !1, kL(kM), kZ(0, 0, au.eZ - 1, au.ea - 1), ka(7 / 8), kJ = !0, aD.kX())
	}, this.kP = function(js, jt, ju, jw) {
		kZ(js, jt, ju, jw), hG = kG, p.kd(kE, jv / 2), p.ke(kF, gD / 2), b1.kf()
	}, this.kg = function() {
		return !(kJ && kK || (kJ = !1))
	}, this.iK = function() {
		var kj, kk, f8, kn;
		kJ && (k7 < .5 ? k9 < kA && (k9 += kA * k6, k8 = k7) : 1 - k8 < k7 && (k9 = (k9 -= kA * k6) < kA * k6 ? kA * k6 : k9), kH = kH >= b7.dX ? b7.dX - 1 : kH, f8 = b7.dX - kH, k7 = 1e3 < f8 || 1 < (k7 += k9 * f8 / kI) ? 1 : k7, kH = b7.dX,
			f8 = hG, kj = hF, kk = hH, f8 = (hG = kD * Math.pow(kG / kD, k7)) / f8, kn = 1 - (kD * Math.pow(kG / kD, 1 - k7) - kD) / (kG - kD), p.kd(kB + kn * (kE - kB), jv / 2), p.ke(kC + kn * (kF - kC), gD / 2), a8.zoom(f8, (kj * f8 - hF) /
				(1 - f8), (kk * f8 - hH) / (1 - f8)), b1.kf(), 1 <= k7 && (kJ = !1, b2.ko = !0), b7.d6 = !0)
	}
}

function cN() {
	var iZ = ad.kp;
	this.jz = iZ.kq(0, 0, 0), this.kr = iZ.ks(0, 0, 0, .7), this.kt = iZ.ks(0, 0, 0, .5), this.ku = iZ.ks(0, 0, 0, .85), this.kv = iZ.ks(0, 0, 0, .75), this.kw = iZ.ks(0, 0, 0, .6), this.kx = iZ.ks(0, 0, 0, .35), this.gK = iZ.kq(255, 255, 255), this
		.ky = iZ.ks(255, 255, 255, .3), this.kz = iZ.ks(255, 255, 255, .6), this.l0 = iZ.ks(255, 255, 255, .4), this.l1 = iZ.ks(255, 255, 255, .25), this.l2 = iZ.ks(255, 255, 255, .85), this.l3 = iZ.ks(255, 255, 255, .75), this.l4 = iZ.ks(255, 255,
			255, .15), this.l5 = iZ.kq(128, 128, 128), this.l6 = iZ.ks(64, 64, 64, .75), this.l7 = iZ.kq(30, 255, 30), this.l8 = iZ.kq(0, 200, 0), this.l9 = iZ.kq(128, 255, 128), this.lA = iZ.ks(10, 65, 10, .75), this.lB = iZ.ks(0, 255, 0, .6), this
		.lC = iZ.ks(0, 255, 0, .5), this.lD = iZ.ks(0, 200, 0, .5), this.lE = iZ.ks(0, 100, 0, .75), this.lF = iZ.ks(0, 60, 0, .8), this.lG = iZ.ks(0, 255, 0, .3), this.lH = iZ.ks(0, 180, 0, .6), this.lI = iZ.kq(255, 120, 120), this.lJ = iZ.kq(255,
			160, 160), this.lK = iZ.kq(255, 70, 70), this.lL = iZ.kq(230, 0, 0), this.lM = iZ.ks(220, 0, 0, .6), this.lN = iZ.ks(255, 100, 100, .8), this.lO = iZ.ks(100, 0, 0, .85), this.lP = iZ.ks(60, 0, 0, .85), this.lQ = iZ.ks(200, 0, 0, .6), this
		.lR = iZ.ks(0, 60, 60, .85), this.lS = iZ.ks(10, 60, 60, .9), this.lT = iZ.ks(0, 96, 96, .75), this.lU = iZ.kq(160, 160, 255), this.lV = iZ.ks(0, 40, 90, .75), this.lW = iZ.ks(0, 0, 255, .6), this.lX = iZ.kq(255, 120, 100), this.lY = iZ.ks(
			255, 255, 0, .5), this.lZ = iZ.ks(255, 255, 150, .2), this.la = iZ.kq(255, 255, 0), this.lb = iZ.kq(255, 255, 200), this.lc = iZ.ks(200, 200, 0, .6), this.ld = iZ.ks(255, 140, 0, .75)
}

function cJ() {
	this.fr = new le, this.fl = new lf, this.lg = new lh, this.li = new lj, this.ie = new lk
}

function le() {
	this.ll = function(gl) {
		j1 ? aa.lg.ll(eu, gl) : aP.lm.ln(gl)
	}, this.fs = function(hE, hg) {
		k.lo(), j1 ? aa.lg.fs(eu, hE, hg) : aP.lm.lp(hE, hg)
	}, this.lq = function(hE, lr) {
		k.lo(), j1 ? aa.lg.ls(eu, hE, lr) : aP.lm.lt(hE, lr)
	}, this.lu = function(hE, gl) {
		j1 ? aa.lg.lu(eu, hE, gl) : ap.lv.lw(eu, gl) && aP.lm.lx(hE, gl)
	}, this.ly = function(lz, gl) {
		j1 ? aa.lg.ly(eu, lz, gl) : ap.lv.m0(eu, lz, gl) && aP.lm.m1(lz, gl)
	}, this.m2 = function(hg) {
		j1 ? aa.lg.m2(eu, hg) : aP.lm.m3(hg)
	}, this.m4 = function(m5) {
		j1 ? aa.lg.m6(eu, m5) : aP.lm.m7(m5)
	}, this.m8 = function(m9) {
		j1 ? aa.lg.m8(eu, m9) : aP.lm.mA(m9)
	}, this.mB = function() {
		j1 ? aa.lg.mB(eu) : aP.lm.mC()
	}
}

function lk() {
	this.ig = function(player, lr, hh) {
		ad.fl.mD(player, hh, lr) && (a7.lq(player, lr), lr < h9) && aF.random() < aF.value(10) && (hb[lr] = 0)
	}, this.mE = function(player, lr, hh) {
		ad.fl.mF(hh, lr) && (ad.fl.mG(lr, aq.e7[0]), b4.mH(player, lr), a8.mI(lr, aq.e7[0]))
	}
}

function lf() {
	this.mJ = function(m5, player) {
		k.m4(eu, player, m5), aP.lm.mK(m5, player)
	}, this.mL = function(player) {
		k.mM(player, 0), aP.lm.mN(player)
	}, this.mO = function(mP, player) {
		k.mQ(mP, player), aP.lm.mR(mP, player)
	}, this.mS = function(mT) {
		j1 || fj || aP.lm.mU(mV(), mT)
	}, this.mW = function() {
		j1 || fj || aP.lm.mX(mV(), jU[0], jU[1], jU[2])
	}, this.mY = function() {
		j1 || fj || aP.lm.mZ(mV())
	}
}

function lj() {
	this.iK = function(ma) {
		var id, eE, kg;
		for (ai.cl(ma), ai.g0 += 2, kg = 8 * ai.size; ai.g0 + 8 <= kg;) id = ai.mb(4), eE = ai.mb(9), 0 === id ? this.mc(id, eE, ai.mb(22)) : 1 === id ? this.mc(id, eE, ai.mb(10), ai.mb(10)) : 2 === id ? this.mc(id, eE, ai.mb(10), ai.mb(9)) :
			3 === id || 4 === id ? this.mc(id, eE, ai.mb(10), ai.mb(22)) : 5 === id ? this.mc(id, eE, ai.mb(10)) : 6 === id ? this.mc(id, eE, ai.mb(7)) : 7 === id ? this.mc(id, eE, ai.mb(1)) : this.mc(id, eE);
		this.md()
	}, this.me = [], this.md = function() {
		for (var mg = 0, mh = 0, mi = 0, mj = 0, mk = 0, ml = 0, dw = 0; dw < 512; dw++) mg += hA[dw], mh += fP[dw], mi += ev[dw], mj += ap.jA.mm[dw];
		mk += ap.jA.mn, ml += ib, this.me.push(((255 & mg + mh + mi + mj + mk + ml) << 12) + ((3 & mg) << 10) + ((3 & mh) << 8) + ((3 & mi) << 6) + ((3 & mj) << 4) + ((3 & mk) << 2) + (3 & ml))
	}, this.mc = function(id, eE, eG, eI) {
		0 === id ? aa.lg.ll(eE, eG) : 1 === id ? aa.lg.fs(eE, eG, eI) : 2 === id ? aa.lg.ls(eE, eG, eI) : 3 === id ? aa.lg.lu(eE, eG, eI) : 4 === id ? aa.lg.ly(eE, eG, eI) : 5 === id ? aa.lg.m2(eE, eG) : 6 === id ? aa.lg.m6(eE, eG) : 7 === id ?
			aa.lg.m8(eE, eG) : 8 === id ? aa.lg.mB(eE) : aa.lg.mo(eE)
	}
}

function lh() {
	this.ll = function(player, gl) {
		ad.fl.fm(0) && ad.fl.fn(player) && ao.hM(gl) && (ab.mp.mq(0, player, gl), mr.hd(player, gl))
	}, this.fs = function(player, hE, hg) {
		ad.fl.fm(1) && ad.fl.fn(player) && ad.fl.ms(player, hg) && ad.fl.mt(player, hE, 12, es) && a6.fo(player) && ad.fl.mu(player, hg) && hW(player) && (ab.mp.mq(1, player, hE, aq.eB[0]), ad.fl.mv(player), b4.mw(player, hE), hZ(player))
	}, this.ls = function(player, hE, lr) {
		ad.fl.fm(1) && ad.fl.fn(player) && ha && ad.fl.ms(player, lr) && ad.fl.mx(player, lr) && ad.fl.mD(player, ad.fl.hD(player, hE), lr) && (ab.mp.mq(2, player, hE, lr), a7.lq(player, lr))
	}, this.lu = function(player, hE, gl) {
		ad.fl.fm(1) && ad.fl.fn(player) && ao.hM(gl) && ap.jA.mn !== ap.jA.my && ap.jA.mm[player] !== ap.jA.mz && 0 !== fI[player].length && ad.fl.mt(player, hE, 32, 16) && ap.n0.n1(player, gl) && (ab.mp.mq(3, player, hE, gl), ad.fl.mv(player),
			ap.jA.n2(player))
	}, this.ly = function(player, lz, gl) {
		ad.fl.fm(1) && ad.fl.fn(player) && ao.hM(gl) && ap.lv.n3(player, lz) && ap.n0.n4(gl) && (ab.mp.mq(4, player, lz, gl), ad.fl.n5(player, 8), ap.jA.ly())
	}, this.m2 = function(player, hg) {
		ad.fl.fm(1) && ad.fl.fn(player) && (hg = Math.min(hg, f3), a6.fp(player, hg)) && (ab.mp.mq(5, player, hg), a6.n6(player, hg))
	}, this.m6 = function(player, m5) {
		ad.fl.fm(2) && ad.fl.fn(player) && (m5 = Math.min(m5, b3.dx - 1), ab.mp.mq(6, player, m5), a8.n7(player, 0, m5))
	}, this.m8 = function(player, m9) {
		ad.fl.fm(1) && ad.fl.fn(player) && (ab.mp.mq(7, player, m9), aN.n8(player, m9))
	}, this.mB = function(player) {
		(ad.fl.fm(0) || ad.fl.fm(1)) && ad.fl.fn(player) && as.mB(player) && ab.mp.mq(8, player)
	}, this.mo = function(player) {
		as.mo(player), ab.mp.mq(9, player)
	}
}

function n9(title, nA, nB, nC) {
	var nD;
	this.nK = function() {
		var nE, nG;
		return nD || (nE = new nF("Back", () => aw.show(nC), ae.lO, ae.lQ, ae.lM), (nG = []).push(new nH(nA)), 0 < nB.length && nG.push(new nI(nB)), nD = new nJ(title, nE, nG)), nD
	}
}

function nF(nL, nM, color, nN, nO) {
	var button = document.createElement("button"),
		scale = 1;

	function nQ() {
		button.style.backgroundColor = color || ae.kx
	}

	function nR() {
		button.style.backgroundColor = nN || ae.l4
	}

	function nS() {
		button.style.backgroundColor = nO || ae.l1
	}
	this.cl = function(nP) {
		button.style.position = "relative", button.innerText = nL, button.style.color = ae.gK, button.style.fontSize = "inherit", button.style.wordBreak = "break-word", nQ(), button.onmouseover = nR, button.onmouseout = nQ, button.onmousedown =
			nS, button.onmouseup = nR, button.onclick = () => {
				nQ(), nM()
			}, this.resize(), nP.appendChild(button)
	}, this.nT = function(ez) {
		scale = ez, this.resize()
	}, this.resize = function() {
		var height = ad.kp.nU(.5) * fy / nV * .09;
		button.style.height = (scale * height).toFixed(1) + "px", button.style.border = (.02 * height).toFixed(1) + "px solid " + ae.gK
	}, this.nW = function() {
		button.style.width = "100%"
	}, this.nX = function() {
		button.style.flexGrow = "1", button.style.flexBasis = "0"
	}, this.nY = function(nZ) {
		button.prepend(nZ)
	}
}

function nI(na) {
	var nb = document.createElement("div");
	this.cl = function(nP) {
		var dw;
		for (nb.width = "100%", nb.height = "auto", nb.style.display = "flex", dw = 0; dw < na.length; dw++) na[dw].nX(), na[dw].cl(nb);
		this.resize(), nP.appendChild(nb)
	}, this.resize = function() {
		var dw, margin = ad.kp.nU(.5) * fy / nV * .3 * .04;
		for (nb.style.margin = "0 " + margin.toFixed(1) + "px", nb.style.gap = margin.toFixed(1) + "px", dw = 0; dw < na.length; dw++) na[dw].resize()
	}
}

function nc(nd, ne) {
	this.jn = 0, this.jo = 0, this.g6 = 0, this.i5 = 0, this.resize = function() {
		this.i5 = Math.min(ad.kp.nU(.5) * nd[1] * fy, gD - 2 * nf), this.g6 = Math.min(this.i5 * (nd[0] / nd[1]), jv - 2 * nf), this.i5 = nd[1] * this.g6 / nd[0], this.jn = nf + ne[0] * (jv - this.g6 - 2 * nf), this.jo = nf + ne[1] * (gD - this
			.i5 - 2 * nf)
	}, this.ng = function() {
		return this.jn + .5 * this.g6
	}
}

function nh(nL, ni, nM, nj) {
	var nl, nk = document.createElement("input");
	this.cl = function(nP) {
		var nm = document.createElement("label");
		nm.innerText = nL, nm.style.color = ae.gK, nm.style.marginLeft = "0.5em", nk.type = "checkbox", nk.style.marginRight = "1em", nk.style.verticalAlign = "middle", nk.style.position = "relative", nk.style.bottom = "0.2em", nk.onchange = nM,
			nk.title = ni, nl = new nn(ni), this.resize(), nm.prepend(nk), nl.cl(nm), nP.appendChild(nm)
	}, this.setState = function(dS) {
		nk.no = dS
	}, this.resize = function() {
		var size = ad.kp.nU(.5) * fy / nV * .04;
		nk.style.width = size.toFixed(1) + "px", nk.style.height = size.toFixed(1) + "px", nl.resize(), nj && this.setState(nj())
	}
}

function np() {
	var nq = document.createElement("div"),
		na = [];
	this.cl = function(nP) {
		nq.style.position = "absolute", this.resize(), nP.appendChild(nq)
	}, this.nr = function(g6, i5) {
		var ns = document.createElement("div");
		ns.style.width = g6.toFixed(1) + "px", ns.style.height = i5.toFixed(1) + "px", nq.appendChild(ns)
	}, this.nt = function(color) {
		nq.style.backgroundColor = color
	}, this.resize = function() {
		for (var dw = 0; dw < na.length; dw++) na[dw].resize();
		nq.style.height = "max-content", nq.style.width = "max-content"
	}, this.jg = function(jn, jo, g6) {
		nq.style.left = jn.toFixed(1) + "px", nq.style.top = jo.toFixed(1) + "px", nq.style.width = g6.toFixed(1) + "px", nq.style.setProperty("--brick-width", g6.toFixed(1) + "px")
	}, this.nu = function(ns) {
		ns.cl(nq), na.push(ns)
	}, this.nv = function() {
		return nq.offsetWidth
	}, this.nw = function() {
		return nq.offsetHeight
	}
}

function nx() {
	var ny = document.createElement("div"),
		na = [];
	this.cl = function(nP) {
		ny.width = "100%", ny.height = "auto", ny.style.display = "grid", ny.style.overflow = "auto", ny.style.maxWidth = "100%", this.resize(), nP.appendChild(ny)
	}, this.resize = function() {
		var dw, nz = ad.kp.nU(.5) * fy / nV * .3;
		for (ny.style.gridTemplateColumns = "repeat(auto-fit, minmax(clamp(64px, " + nz.toFixed(1) + "px, 100%), auto))", ny.style.gap = (.04 * nz).toFixed(1) + "px", dw = 0; dw < na.length; dw++) na[dw].resize()
	}, this.nu = function(ns) {
		ns.cl(ny), na.push(ns)
	}
}

function o0(title, nA) {
	this.cl = function(nP) {
		var o1 = document.createElement("h3");
		o1.style.color = ae.gK, o1.style.marginTop = "0", ad.kp.o2(o1, title), nP.appendChild(o1), nA && ((o1 = document.createElement("p")).style.color = ae.gK, ad.kp.o2(o1, nA), nP.appendChild(o1)), this.resize()
	}, this.resize = function() {}
}

function o3() {
	var nq = document.createElement("div"),
		o4 = [];
	this.cl = function(nP) {
		nq.style.position = "relative", nP.appendChild(nq)
	}, this.resize = function() {
		for (var o5, o8, o9, gap, o6 = [], o7 = 0, dw = 0; dw < o4.length; dw++) o4[dw].resize(), o7 = Math.max(o7, o4[dw].nv());
		if (0 !== o7) {
			for (gap = .009 * (o9 = nq.offsetWidth), o5 = dj < dk ? 1 : Math.max(1, Math.floor(o9 / (o7 + gap))), dw = 0; dw < o5; dw++) o6.push(0);
			for (dw = 0; dw < o4.length; dw++) o8 = o6.indexOf(Math.min(...o6)), o4[dw].jg(o8 * o9 / o5, o6[o8], o9 / o5 - gap), o6[o8] += o4[dw].nw() + gap;
			nq.style.height = Math.max(...o6).toFixed(1) + "px"
		}
	}, this.oA = function(ns) {
		ns.cl(nq), o4.push(ns)
	}
}

function nJ(title, oB, nG) {
	var oC, oD, oE, oF, dw, oG;
	for ((oC = document.createElement("div")).style.position = "absolute", oC.style.top = "0", oC.style.left = "0", oC.style.width = "100vw", oC.style.height = "100vh", oC.style.maxHeight = "100vh", oC.style.backgroundColor = ae.kt, oC.style
		.backdropFilter = "blur(5px)", (oD = document.createElement("div")).style.width = "100%", oD.style.display = "flex", oD.style.backgroundColor = ae.kx, (oG = document.createElement("h1")).innerText = title, oG.style.textAlign = "center", oG
		.style.width = "70%", oG.style.margin = "auto", oG.style.color = ae.gK, (oF = document.createElement("div")).style.right = "0", oF.style.width = "30%", (oE = document.createElement("div")).style.overflowY = "auto", oE.style.position =
		"absolute", oE.style.left = "0", oE.style.right = "0", oE.style.bottom = "0", oD.appendChild(oG), oD.appendChild(oF), oC.appendChild(oD), oC.appendChild(oE), oB.cl(oF), oB.nW(), dw = 0; dw < nG.length; dw++) nG[dw].cl(oE);
	this.resize = function() {
		var dw, oH = ad.kp.nU(.5) * fy / nV * .09,
			oI = .12 * oH,
			oJ = .02 * oH;
		for (oD.style.height = (oH + 2 * oI).toFixed(1) + "px", oD.style.borderBottom = oJ.toFixed(1) + "px solid " + ae.gK, oF.style.padding = oI.toFixed(1) + "px", oE.style.top = (oH + 2 * oI + oJ).toFixed(1) + "px", oE.style.padding = oI
			.toFixed(1) + "px", oE.style.paddingBottom = (2 * oI).toFixed(1) + "px", oC.style.font = ad.kp.oK(.23 * oH, 0), dw = 0; dw < nG.length; dw++) nG[dw].resize();
		oB.resize()
	}, this.show = function() {
		document.body.appendChild(oC)
	}, this.oL = function() {
		document.body.removeChild(oC)
	}
}

function nH(nL) {
	this.cl = function(nP) {
		var ns = document.createElement("p");
		ns.style.color = ae.gK, ad.kp.o2(ns, nL), nP.appendChild(ns)
	}, this.resize = function() {}
}

function oM(nL, ni, nM, oN, oO) {
	var nq, select, oP, nl, oQ = oO || [],
		oR = !1;

	function oL() {
		oR && (oP.innerHTML = "", nq.removeChild(oP), oR = !1)
	}
	this.cl = function(nP) {
		var nm = document.createElement("label");
		nm.innerText = nL, nm.style.color = ae.gK, nm.style.marginLeft = "0.5em", nm.style.display = "block", nm.style.margin = "0.5em 0", nm.style.width = "max-content", (nq = document.createElement("div")).style.position = "relative", nq.style
			.display = "inline-block", nq.style.marginLeft = "1em", (select = document.createElement("button")).innerText = oQ[oN], select.style.position = "relative", select.style.border = "none", select.style.padding = "0 0.5em", select.style
			.color = ae.gK, select.style.font = "inherit", select.style.backgroundColor = ae.kx, select.onclick = dG => {
				(oR ? oL : function() {
					var dw, oS;
					if (!oR) {
						for (dw = 0; dw < oQ.length; dw++)(oS = document.createElement("div")).innerText = oQ[dw], oS.style.textAlign = "center", oP.appendChild(oS);
						nq.appendChild(oP), oR = !0
					}
				})(), select.focus(), dG.preventDefault()
			}, select.onblur = oL, (oP = document.createElement("div")).style.position = "absolute", oP.style.left = "50%", oP.style.transform = "translateX(-50%)", oP.style.zIndex = "100", oP.style.backgroundColor = ae.ku, oP.style.color = ae
			.gK, oP.style.width = "max-content", oP.style.padding = "0.5em", oP.style.fontSize = "inherit", oP.style.userSelect = "none", oP.onmousedown = function(dG) {
				for (var dw = 0; dw < oP.children.length; dw++)
					if (dG.target === oP.children[dw]) {
						select.innerText = oQ[dw], nM(dw);
						break
					} dG.stopPropagation()
			}, nl = new nn(ni), this.resize(), nq.appendChild(select), nm.appendChild(nq), nl.cl(nm), nP.appendChild(nm)
	}, this.resize = function() {
		var size = ad.kp.nU(.5) * fy / nV * .04;
		select.style.height = size.toFixed(1) + "px", select.style.outline = (.06 * size).toFixed(1) + "px solid " + ae.gK, oP.style.top = (1.06 * size).toFixed(1) + "px", oP.style.outline = (.06 * size).toFixed(1) + "px solid " + ae.gK, nl
			.resize()
	}, this.oT = function(oU) {
		oQ.push(oU)
	}
}

function oV() {
	var oW, oX = !0;

	function oe() {
		oW.select(), document.execCommand("copy")
	}
	this.oY = !1, this.cl = function() {
		(oW = document.createElement("textarea")).setAttribute("name", "replayData"), oW.setAttribute("id", "replayDataField"), oW.setAttribute("autocomplete", "off"), oW.setAttribute("placeholder", "Insert the replay link here!"), oW.style
			.position = "absolute", oW.style.resize = "none", oW.style.borderRadius = "0", oW.style.color = ae.gK, oW.style.backgroundColor = ae.kr, oW.addEventListener("focus", function() {
				ac.oY = !0
			}), oW.addEventListener("blur", function() {
				ac.oY = !1
			})
	}, this.show = function() {
		document.body.appendChild(oW)
	}, this.oL = function() {
		document.body.removeChild(oW)
	}, this.resize = function(jn, jo, g6, i5) {
		ad.kp.oZ(oW.style, jn, jo, g6, i5), oW.style.font = ad.kp.oK(Math.max(5, .1 * i5 / nV), 0)
	}, this.oa = function(nL) {
		oW.value = nL
	}, this.ob = function() {
		return oW.value
	}, this.oc = function() {
		oW.select()
	}, this.clear = function() {
		oW.value = ""
	}, this.od = function() {
		oX && navigator.clipboard ? (oW.select(), navigator.clipboard.writeText(oW.value).catch(function() {
			oX = !1, oe()
		})) : oe()
	}
}

function nn(nL) {
	var nq = document.createElement("div"),
		og = document.createElement("span"),
		oh = !1,
		oR = !1;

	function show() {
		oR || (og.parentNode.appendChild(nq), oR = !0)
	}

	function oL() {
		oR && !oh && (og.parentNode.removeChild(nq), oR = !1)
	}
	this.cl = function(nP) {
		nq.style.position = "absolute", nq.style.zIndex = "100", nq.style.backgroundColor = ae.ku, nq.style.color = ae.gK, nq.width = "auto", nq.style.padding = "0.5em", nq.style.fontSize = "inherit", nq.style.wordBreak = "break-word", nq
			.innerText = nL, og.style.position = "relative", og.style.display = "inline-block", og.style.marginLeft = "1em", og.style.textAlign = "center", og.innerText = "?", og.tabIndex = 0, og.onmouseover = show, og.onmouseout = oL, og
			.onclick = dG => {
				((oh = !oh) ? oL : show)(), og.focus(), dG.preventDefault()
			}, og.onblur = () => {
				oh = !1, oL()
			}, this.resize(), nP.appendChild(og)
	}, this.resize = function() {
		var size = ad.kp.nU(.5) * fy / nV * .04;
		og.style.width = size.toFixed(1) + "px", og.style.height = size.toFixed(1) + "px", og.style.lineHeight = size.toFixed(1) + "px", og.style.outline = (.06 * size).toFixed(1) + "px solid " + ae.gK, nq.style.border = (.06 * size).toFixed(1) +
			"px solid " + ae.gK
	}
}

function oi(nL) {
	this.cl = function(nP) {
		var ns, oj = document.createElement("div");
		oj.style.height = "max-content", oj.style.width = "0", (ns = document.createElement("p")).style.color = ae.gK, ns.style.margin = "0", ns.style.width = "var(--brick-width)", ad.kp.o2(ns, nL), oj.appendChild(ns), nP.appendChild(oj), this
			.resize()
	}, this.resize = function() {}
}

function cj() {
	this.ok = new ol, this.cl = function() {
		this.ok.cl()
	}, this.dp = function(g0, value) {
		this.ok.get(g0).value = value
	}, this.om = function(g0) {
		return Number(this.ok.get(g0).value)
	}, this.on = function(g0) {
		return String(this.ok.get(g0).value)
	}, this.oo = function() {}, this.clear = function() {}
}

function ol() {
	var data = [],
		op = new oq;

	function or(dw, title, type, oQ, ot = 0, ou = 0) {
		data.push({
			g0: dw,
			title: title,
			type: type,
			oQ: oQ,
			value: ot,
			ot: ot,
			ou: ou,
			nA: op.nL[dw]
		})
	}
	this.cl = function() {
		or(0, "Language", 1, ["English", "Russian", "Turkish"]), or(1, "Resolution", 1, ["Medium", "High", "Very High"]), or(2, "Mobile Friendly", 0, [0, 1]), or(3, "Username", 2, null), or(4, "Font", 1, ["Default", "Custom"]), or(5,
			"Custom Font", 2, null, "Arial"), or(6, "Hide Usernames", 0, [0, 1]), or(7, "Place Balance Above", 0, [0, 1]), or(8, "Hide Zoom Buttons", 0, [0, 1])
	}, this.os = function() {}, this.get = function(g0) {
		return data[g0]
	}
}

function oq() {
	this.nL = ["", "", "", "", "", "", "", "", ""]
}

function cS() {
	var ov = new Uint8Array(78);
	this.cl = function() {
		var dw;
		for (ov[50] = 37, dw = 0; dw < 10; dw++) ov[dw + 3] = dw + 1;
		for (dw = 0; dw < 26; dw++) ov[dw + 20] = dw + 11, ov[dw + 52] = dw + 38
	}, this.ow = function(df) {
		return df.trim().replace(new RegExp("[^a-zA-Z0-9_\\-]", "g"), "_")
	}, this.ox = function(df, oy) {
		for (var oz = ov, ez = df.length, eD = new Uint8Array(oy || ez), dw = 0; dw < ez; dw++) eD[dw] = oz[df.charCodeAt(dw) - 45];
		return eD
	}, this.p0 = function(p1) {
		var dw, ez = p1.length,
			g6 = ag;
		for (g6.bi(6 * ez), dw = 0; dw < ez; dw++) g6.p2(6, p1[dw]);
		ai.cl(g6.ma)
	}
}

function p3() {
	var g6, i5, p4;

	function pV(pW, f8, pT, pA, pO) {
		f8 = pU(pW, f8 + 1 + 2 * pA & 3);
		! function(pW, pX) {
			return 1 < Math.abs(pW % g6 - pX % g6) || 1 < Math.abs(pa(pW) - pa(pX))
		}(pW, f8) && 0 === pO[f8 << 2] && (pO[f8 << 2] = pT)
	}

	function pa(f6) {
		return Math.floor((f6 + .5) / g6) % i5
	}

	function pU(f6, f8) {
		return f6 + p4[f8]
	}
	this.p5 = function(df) {
		var dw, p6, ez, p8, pB = ai;
		for (aj.p0(aj.ox(df)), au.eZ = g6 = pB.mb(12), au.ea = i5 = pB.mb(12), p4 = [-g6, -1, g6, 1], au.pK = document.createElement("canvas"), au.pK.width = au.eZ, au.pK.height = au.ea, au.pG = au.pK.getContext("2d", {
				alpha: !1
			}), au.pH = au.pG.getImageData(0, 0, au.eZ, au.ea), au.pL = au.pH.data, ad.pM.pN(au.pL), ez = pB.mb(12), p6 = pB.mb(5), p8 = pD(g6 * i5 - 1), dw = 0; dw < ez; dw++) ! function(p7, f6, p9, pA) {
			var dw, f8, pB = ai,
				pO = au.pL,
				pP = f6,
				pQ = f6,
				pR = 0,
				pS = 1 + p9,
				pT = 2 - p9;
			for (pO[f6 << 2] = pS, dw = 0; dw < p7; dw++) f8 = pB.mb(2), f6 = pU(f6, f8), pO[f6 << 2] === pS ? pR % 2 == 1 && pV(pQ, pR + 2 * pA + 3, pT, pA, pO) : pO[f6 << 2] = pS, pV(f6, f8, pT, pA, pO), pV(pQ, f8, pT, pA, pO), pQ = f6,
				pR = f8;
			pU(f6, 0) === pP ? (pV(f6, 0, pT, pA, pO), pV(pP, 0, pT, pA, pO)) : pU(f6, 1) === pP && (pV(f6, 0, pT, pA, pO), pV(pP, 2, pT, pA, pO));
			0 === p7 && (pV(pP, 0, pT, pA, pO), pV(pP, 2, pT, pA, pO))
		}(pB.mb(p6), pB.mb(p8), 1 === pB.mb(1), 1 === pB.mb(1));
		var jn, jo, pb, pc, pd, pe, pO = au.pL,
			pf = !0,
			pg = au.ix.ph[au.pi].pg,
			pj = au.ix.ph[au.pi].pj;
		for (jo = 0; jo < i5; jo++)
			for (pc = !0, pd = pf, jn = pe = 0; jn < g6; jn++) pb = 4 * jo * g6 + 4 * jn, pe <= jn && 0 < pO[pb] && (pd = 2 === pO[pb], pc) && (pc = !1, pd !== pf) ? (pf = pd, pe = jn + 1, jn = -1) : (pd ? (pO[pb] = pj[0], pO[1 + pb] = pj[1], pO[
				2 + pb] = pj[2]) : (pO[pb] = pg[0], pO[1 + pb] = pg[1], pO[2 + pb] = pg[2]), pO[3 + pb] = 255);
		au.pG.putImageData(au.pH, 0, 0), au.pI = !0, au.pJ.cl(), b7.d6 = !0
	}
}

function bP() {
	var jn, jo, g6, i5, pk, pl, pm, pn, player, eD;

	function pv() {
		return function() {
			var dw;
			for (dw = 0; dw < 8; dw++)
				if (jn = er(g6 * aF.random(), aF.value(100)), jo = er(i5 * aF.random(), aF.value(100)), q3()) return 1;
			return
		}() || function() {
			var h1, h4, hn, pt, hx, ps;
			for (h1 = er(g6 * aF.random(), aF.value(100)), h4 = er(i5 * aF.random(), aF.value(100)), hn = 40; 1 <= hn; hn--)
				for (pt = i5 - hn; 0 <= pt; pt -= 40)
					for (jo = (pt + h4) % i5, hx = 40; 1 <= hx; hx--)
						for (ps = g6 - hx; 0 <= ps; ps -= 40)
							if (jn = (ps + h1) % g6, q3()) return 1;
			return
		}()
	}

	function q3() {
		for (var f6, q5, gap = er(pk - pn, 2), q6 = pm + jo * pk + gap, q7 = pl + jn * pk + gap, q4 = q6 + pn - 1; q6 <= q4; q4--)
			for (q5 = q7 + pn - 1; q7 <= q5; q5--)
				if (f6 = a4.q1(q5, q4), !a4.f1(f6) || a4.hj(f6)) return;
		return 1
	}

	function pw(ps, pt) {
		po(), q8(ps - 2, pt - 2)
	}

	function po() {
		hA[player] = 0, ev[player] = 0, fP[player] = q9[player] = 0, f0[player] = [], fH[player] = [], fI[player] = [], fL[player] = [], i9[player] = iC[player] = i8[player] = iB[player] = 0
	}

	function q8(ps, pt) {
		var f6, dw, qB, qC;
		for (hA[player] = 1, ev[player] = player < h9 ? qA : ij[b.hh[player - h9]], i9[player] = ps + 10, iC[player] = pt + 10, iB[player] = i8[player] = 0, qB = ps; qB < ps + 4; qB++)
			for (qC = pt; qC < pt + 4; qC++)(ps < qB && qB < ps + 3 || pt < qC && qC < pt + 3) && (f6 = a4.q1(qB, qC), a4.f1(f6)) && (i9[player] = qB < i9[player] ? qB : i9[player], i8[player] = qB > i8[player] ? qB : i8[player], iC[player] = qC <
				iC[player] ? qC : iC[player], iB[player] = qC > iB[player] ? qC : iB[player], eD[fP[player]] = f6, fP[player]++, a4.qD(f6, player));
		for (q9[player] = fP[player], dw = fP[player] - 1; 0 <= dw; dw--) a4.qE(eD[dw], player) ? (a4.f2(eD[dw], player), fH[player].push(eD[dw])) : a4.qF(eD[dw]) ? (a4.f2(eD[dw], player), fI[player].push(eD[dw])) : a4.qG(eD[dw]) && (a4.f2(eD[dw],
			player), fL[player].push(eD[dw]))
	}

	function q2(ps, pt) {
		for (var f6, q5, q4 = pt; pt - 6 < q4; q4--)
			for (q5 = ps; ps - 6 < q5; q5--)
				if (f6 = a4.q1(q5, q4), a4.hj(f6)) return;
		return 1
	}
	this.cl = function() {
		var dw, ps, pt;
		if (eD = new Array(12), pn = 6, pk = 10, g6 = er(au.eZ, pk), i5 = er(au.ea, pk), pl = er(au.eZ - pk * g6, 2), pm = er(au.ea - pk * i5, 2), kQ)
			for (dw = 0; dw < h9; dw++) player = dw, po(), hA[player] = 1;
		if (aX.iw && aX.ix.pp) {
			for (player = 0; player < f3; player++)
				if (1 !== hA[player]) {
					if (player < pu) {
						if (function() {
								var ps = aX.ix.pp[player] + 1,
									pt = aX.ix.q0[player] + 1;
								if (3 < ps && ps < au.eZ - 5 && 3 < pt && pt < au.ea - 5 && a4.f1(a4.q1(ps, pt)) && q2(ps + 3, pt + 3)) return pw(ps + 1, pt + 1), 1;
								return
							}()) continue;
						if (pv()) {
							ps = pl + jn * pk + er(pk, 2), pt = pm + jo * pk + er(pk, 2), pw(ps, pt);
							continue
						}
					}
					po()
				}
		} else ! function() {
			var ps, pt;
			for (player = 0; player < f3; player++) 1 !== hA[player] && (player < pu && pv() ? (ps = pl + jn * pk + er(pk, 2), pt = pm + jo * pk + er(pk, 2), pw(ps, pt)) : po())
		}();
		b4.ex[7] = fP[eu], b4.ex[8] = ev[eu]
	}, this.qH = function(hg, qI, qJ) {
		var dw, ps, pt, f6, jn, jo;
		for (player = hg, dw = 0; dw < 20; dw++)
			for (ps = qI + dw; qI - dw <= ps; ps--)
				for (pt = qJ + dw; qJ - dw <= pt; pt--)
					if ((ps === qI + dw || ps === qI - dw || pt === qJ + dw || pt === qJ - dw) && 3 < ps && ps < au.eZ - 5 && 3 < pt && pt < au.ea - 5 && a4.f1(a4.q1(ps, pt)) && q2(ps + 3, pt + 3)) {
						if (0 < fP[player]) {
							for (jo = jn = f6 = void 0, jn = i8[player]; jn >= i9[player]; jn--)
								for (jo = iB[player]; jo >= iC[player]; jo--) f6 = 4 * (jo * au.eZ + jn), a4.qL(player, f6) && (a4.qM(f6), fP[player]--);
							po()
						}
						return q8(ps - 1, pt - 1), !0
					} return !1
	}, this.qN = function(hg) {
		player = hg, pv() ? pw(pl + jn * pk + er(pk, 2), pm + jo * pk + er(pk, 2)) : po()
	}
}

function qO() {
	aH.qP(), gH.setTransform(hG, 0, 0, hG, 0, 0), gH.imageSmoothingEnabled = hG < 3, gH.drawImage(au.pK, p.jx(), p.gF()), ar.qQ.gG(), gH.drawImage(qR, p.jx(), p.gF()), aH.gG(), gH.imageSmoothingEnabled = !1, gH.setTransform(1, 0, 0, 1, 0, 0), ap.qQ
		.gG(), a8.gG(), e.gG(), (kT ? (b9.gG(), af) : (gH.imageSmoothingEnabled = !1, k.gG(), s.gG(), o.gG(), af.gG(), aN.gG(), t.gG(), p.gG(), n.gG(), b9.gG(), r.gG(), m.gG(), j.gG(), i.gG(), u.gG(), b5.gG(), ac.gG(), aJ)).gG()
}

function qS(qT, g6, i5) {
	qT.clearRect(0, 0, g6, i5), qT.fillStyle = ae.kv, qT.fillRect(0, 0, g6, i5)
}

function qU(qT, g6, i5, qV) {
	qT.fillStyle = ae.gK, qT.fillRect(0, 0, g6, qV), qT.fillRect(0, 0, qV, i5), qT.fillRect(g6 - qV, 0, qV, i5), qT.fillRect(0, i5 - qV, g6, qV)
}

function qW(qT, jn, jo, gM, qV, f6, qX) {
	qT.fillStyle = ae.gK;
	var f6 = Math.floor(gM * f6),
		qZ = (f6 += (f6 - qV) % 2, Math.floor((f6 - qV) / 2)),
		gM = Math.floor((gM - f6) / 2);
	qT.fillRect(jn + gM, jo + gM + qZ, f6, qV), qX && qT.fillRect(jn + gM + qZ, jo + gM, qV, f6)
}

function qb() {
	this.qc = null, this.cl = function(qc) {
		this.qc = qc, k.qd(this.qc)
	}, this.qe = function(qf) {
		var gj = (this.qc[qf].qg - this.qc[1 - qf].qg) / 10,
			gj = 8 / (1 + Math.pow(2, gj / 32)),
			gj = Math.floor(10 * gj + .5),
			qi = this.qj(this.qc[qf].qg + gj + 1),
			gj = this.qj(this.qc[1 - qf].qg - gj);
		0 === qf ? k.ql(this.qc, qi, gj, ["rgba(10,140,10,0.75)", "rgba(140,10,10,0.75)"]) : k.ql(this.qc, gj, qi, ["rgba(140,10,10,0.75)", "rgba(10,140,10,0.75)"])
	}, this.qj = function(qg) {
		return 16e3 <= (qg = qg < 0 ? 0 : 16e3 < qg ? 16e3 : qg) ? "Unknown" : (qg / 10).toFixed(1)
	}
}

function cQ() {
	var qm = new Uint8Array(64);
	this.cl = function() {
		var dw;
		for (qm[0] = 45, qm[37] = 95, dw = 0; dw < 10; dw++) qm[dw + 1] = 48 + dw;
		for (dw = 0; dw < 26; dw++) qm[dw + 11] = 65 + dw, qm[dw + 38] = 97 + dw
	}, this.qn = function(qo) {
		for (var pB = ai, p1 = new Uint8Array(qo), dw = 0; dw < qo; dw++) p1[dw] = pB.mb(6);
		return p1
	}, this.qp = function(p1) {
		for (var ez = p1.length, qq = qm, eD = [], dw = 0; dw < ez; dw++) eD.push(String.fromCharCode(qq[p1[dw]]));
		return eD.join("")
	}
}

function bQ() {
	var qr, qs, qt;
	qr = [32, 65, 191, 913, 931], qs = [64, 127, 688, 930, 1155], qt = new Array(qr.length + 1);
	for (var dw = 0; dw < qt.length; dw++) {
		qt[dw] = 0;
		for (var hn = dw - 1; 0 <= hn; hn--) qt[dw] += qs[hn] - qr[hn]
	}

	function r0(iZ) {
		for (var dw = qr.length - 1; 0 <= dw; dw--)
			if (iZ >= qr[dw] && iZ < qs[dw]) return dw;
		return -1
	}
	this.qv = function(df) {
		return 0 !== (df = df.trim()).indexOf("Bot ") && 0 !== df.indexOf("[Bot] ") && function(df, qx, qy) {
			var ez = (df = df.trim()).length;
			if (ez < qx || qy < ez) return !1;
			for (var iZ, qz = 0, dw = 0; dw < ez; dw++)
				if (iZ = df.charCodeAt(dw), qz += 65 <= iZ && iZ <= 90 || 1040 <= iZ && iZ <= 1071 ? 1 : 0, -1 === r0(iZ)) return !1;
			if (3 < qz && qz > Math.floor(ez / 2)) return !1;
			return !0
		}(df, 3, 20)
	}, this.r1 = function(df) {
		for (var ez = (df = df.trim()).length, eD = [], dw = 0; dw < ez; dw++) {
			var iZ, f6 = r0(iZ = df.charCodeAt(dw));
			eD.push(qt[f6] + iZ - qr[f6])
		}
		return eD
	}, this.p5 = function(eD) {
		for (var iZ, hx, df = "", ez = eD.length, dw = 0; dw < ez; dw++)
			for (hx = 1; hx < qt.length; hx++)
				if (eD[dw] < qt[hx]) {
					iZ = qr[hx - 1] + eD[dw] - qt[hx - 1], df += String.fromCharCode(iZ);
					break
				} return df
	}, this.r2 = function(df) {
		for (var eD = this.r1(df), result = "", dw = 0; dw < eD.length; dw++) result = (result += eD[dw] < 10 ? "00" : eD[dw] < 100 ? "0" : "") + eD[dw].toString(10);
		return result
	}, this.r3 = function(df) {
		for (var eD = new Array(Math.floor(df.length / 3)), dw = 0; dw < df.length; dw += 3) eD[Math.floor(dw / 3)] = parseInt(df.substring(dw, dw + 3));
		return this.p5(eD)
	}, this.dr = function(df) {
		for (var e4, eD = [df.length], dw = 0; dw < df.length; dw++) eD[dw] = df.charCodeAt(dw) - 48;
		var result = "";
		for (dw = 0; dw < df.length; dw++) dw === df.length - 1 || 51 < 10 * eD[dw] + eD[dw + 1] ? result += eD[dw].toString() : (e4 = 10 * eD[dw] + eD[dw + 1], result += String.fromCharCode(e4 + (e4 < 26 ? 65 : 71)), dw++);
		return result
	}, this.dg = function(df) {
		for (var iZ, result = "", dw = 0; dw < df.length; dw++) 48 <= (iZ = df.charCodeAt(dw)) && iZ < 58 ? result += String.fromCharCode(iZ) : 65 <= iZ && iZ < 75 ? result += "0" + (iZ - 65).toString() : 75 <= iZ && iZ < 91 ? result += (iZ - 65)
			.toString() : 97 <= iZ && iZ < 123 && (result += (iZ - 71).toString());
		return result
	}, this.r4 = function(df) {
		for (var ez = df.length, eD = [], dw = 0; dw < ez; dw++)(iZ = df.charCodeAt(dw)) < 58 ? eD.push(df[dw]) : (iZ -= iZ < 91 ? 65 : 71, eD.push(String(er(iZ, 10))), eD.push(String(iZ - 10 * er(iZ, 10))));
		var ez = eD.length - 2,
			iZ = 0,
			p1 = [];
		for (dw = 0; dw < ez; dw += 3) p1[iZ++] = parseInt(eD[dw] + eD[dw + 1] + eD[dw + 2]);
		return p1
	}, this.r5 = function() {
		for (var gV, r6 = "", dw = 0; dw < 6; dw++) gV = 48 + aF.random() % 36, gV += 58 <= gV ? 39 : 0, r6 += String.fromCharCode(gV);
		return r6
	}
}

function ca() {
	this.r7 = new r8, this.jB = new r9, this.cl = function() {
		this.jB.cl()
	}
}

function r8() {
	function rB() {
		if (2 === jK) return 1;
		aN.rM(), jK = 2, rN = rO
	}

	function rE() {
		k.rP(!0), s.jJ(!0), t.jJ(!0), aN.jJ(), af.rQ(), fj && b7.rR.rS(), b7.d6 = !0, b2.rT(), e0(0)
	}
	this.rA = function() {
		rB() || (aa.fl.mW(), k.rC(247, 0), k.rD(0, 59), f.kY(2700), u.show(!1, !1, !0), rE())
	}, this.rF = function(rG) {
		var mT = 0,
			rH = !1;
		rB() || (8 === iz ? ((rH = (mT = rG < 0 ? fP[0] >= fP[1] ? 0 : 1 : rG) === eu) ? k.rD(mT, 2) : k.rD(1 - eu, 3), rI.qe(mT), aa.fl.mS(mT)) : ha ? (rH = b8.ia[eu] === b9.rJ(), 9 === iz ? (aa.fl.mS(rH ? jU[0] : 512), k.rK(rH)) : at.jB.iK(
			rH)) : (rH = (mT = jU[0]) === eu, k.rL(mT), aa.fl.mS(mT)), u.show(rH, !1), rE())
	}
}

function r9() {
	var rU;

	function ro(rW, f7) {
		for (var df = "", dw = f7; dw < rW.length && dw < f7 + 4; dw++) df += (dw === f7 ? "" : "   ") + "[" + b8.rg[rW[dw].id] + "]: " + rW[dw].rl.toFixed(Math.max(Math.floor(3 - Math.log10(rW[dw].rl)), 0));
		df.length && k.rn(0, df, 45, 0, ad.kp.kq(225, 240, 255), ae.kv, -1, !1)
	}
	this.rV = 0, this.rW = null, this.cl = function() {
		rU = 0, this.rV = 0, this.rW = null
	}, this.iK = function(rH) {
		var rX = b8.rY[b9.rZ()];
		this.rV = b9.ra(), this.rW = function(rX, rV) {
				var dw, hx, ez, ia = b8.ia,
					rY = b8.rY,
					rg = b8.rg,
					rh = b8.rh,
					ri = fP,
					rj = h9,
					rk = [],
					g0 = 0;
				for (hx = rg.length - 1; 0 <= hx; hx--)
					if (rY[ia[rh[hx][0]]] === rX) {
						for (rk.push({
								id: hx,
								ri: 0,
								player: rh[hx][0],
								rl: 0
							}), ez = rh[hx].length, dw = 0; dw < ez; dw++) rk[g0].ri += ri[rh[hx][dw]];
						for (rk[g0].rl = (1 + rm) * rj * rk[g0].ri / rV, dw = 0; dw < g0; dw++)
							if (rk[g0].ri > rk[dw].ri) {
								rk.splice(dw, 0, rk[g0]), rk.pop();
								break
							} g0++
					} 8 < rk.length && (rk.length = 8);
				for (; 0 < rk.length && 0 === rk[rk.length - 1].ri;) rk.pop();
				return rk
			}(rX, this.rV), n.rc("Team " + b8.fx[rX], 2, 1, 12),
			function(rH, rX) {
				var color;
				rH = rH ? (color = ad.kp.kq(10, 220, 10), "Congratulations! Team " + b8.fx[rX] + " won the game!") : (color = ad.kp.kq(200, 80, 80), "Our alliance was defeated! Team " + b8.fx[rX] + " won the game.");
				k.rn(0, rH, 40, 0, color, ae.kv, -1, !1)
			}(rH, rX), 0 !== (rH = this.rW).length && (k.rn(0, "The allied clans of the winning team have earned these glorious points:", 40, 0, ae.gK, ae.kv, -1, !1), ro(rH, 0), ro(rH, 4)), aa.fl.mY(), f.kY(2700)
	}, this.jC = function() {
		2 === jK && -1 !== rU && (0 === rU ? rU = this.rW && 0 !== this.rW.length ? b7.dX + 8e3 : -1 : b7.dX < rU || (rU = -1, k.rn(255, "Clan rankings and results can also be accessed under:", 735, 0, ae.gK, ae.kv, -1, !1), k.rn(255,
			"territorial.io/clans", 736, 0, ae.gK, ae.kv, -1, !1), k.rn(255, "territorial.io/clan-results", 736, 0, ae.gK, ae.kv, -1, !1)))
	}
}

function cg() {
	this.cl = function() {
		dW = "undefined" != typeof Android ? Android : null, 12 <= (dZ = dW ? dW.getVersion() : 0) && dW.prepareAd("1688441405"), dV = !1, window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.iosCommandA && (dV = !0,
			window.webkit.messageHandlers.iosCommandA.postMessage("prepare ad 4500876070"), db = "undefined" != typeof mwIOSdataX ? mwIOSdataX : {
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
			}), dW || dV || (am.rr += "_browser")
	}
}

function bG() {
	var rs, p1;

	function rv() {
		var dw, g6 = new cP;
		for (g6.bi(800), g6.p2(1, 0), g6.p2(3, 7), g6.p2(3, 1), g6.p2(2, dV ? 2 : 12 <= dZ ? 1 : 0 < dZ ? 3 : 0), g6.p2(1, dC ? 1 : 0), g6.p2(1, dE ? 1 : 0), g6.p2(1, a.d7), dw = 0; dw < p1.length && !(g6.g0 + 6 > 8 * g6.size); dw++) g6.p2(6, p1[
		dw]);
		rs.send(g6.ma), rs.onopen = null
	}
	window.addEventListener("error", function error(dG) {
		window.removeEventListener("error", error);
		return alert("Error:\n" + dG.filename + " " + dG.lineno + " " + dG.colno + " " + dG.message);
		var ru;
		0 === dG.lineno && 0 === dG.colno || (window.removeEventListener("error", error), dG = dG.lineno + " " + dG.colno + " " + dG.message, (ru = new cS).cl(), p1 = ru.ox(ru.ow(dG)), (rs = new WebSocket("wss://territorial.io/s52/"))
			.onopen = rv, dW ? dW.showToast(dG) : alert(dG))
	})
}

function cU() {
	var rw = -15e3,
		rx = !1;

	function g9(dG) {
		sG() || (rx = !0, sH(dG, 1), aP.jA.sI(aP.jA.sJ), sK(Math.floor(nV * dG.clientX), Math.floor(nV * dG.clientY)))
	}

	function s5(dG) {
		rw = b7.dX, sH(dG, 1), aP.jA.sI(aP.jA.sJ), 0 < dG.touches.length && (sL = Math.floor(nV * dG.touches[0].clientX), sM = Math.floor(nV * dG.touches[0].clientY), aI.s5(dG) || sK(sL, sM))
	}

	function sK(jn, jo) {
		0 === jK ? x.g9(jn, jo) : af.sN(jn, jo) || b5.g9(jn, jo) || ac.g9(jn, jo) || u.g9(jn, jo) || i.sO(jn, jo) || m.g9(jn, jo) || j.g9(jn, jo) || al.sP(jn, jo) || aN.g9(jn, jo) || i.sQ(jn, jo)
	}

	function s1(dG) {
		sG() || (rx = !0, sH(dG, 1), sR(Math.floor(nV * dG.clientX), Math.floor(nV * dG.clientY)))
	}

	function s6(dG) {
		rw = b7.dX, sH(dG, 1), 0 < dG.touches.length && (sL = Math.floor(nV * dG.touches[0].clientX), sM = Math.floor(nV * dG.touches[0].clientY), aI.s6(dG) || sR(sL, sM))
	}

	function sR(jn, jo) {
		0 === jK ? x.s1(jn, jo) : b5.s1(jn, jo) || (j.s1(jn, jo), i.sS() ? i.s1(jn, jo) : o.sT ? o.s1(jn, jo) && (b7.d6 = !0) : (s.s1(jn, jo), p.kU && p.s1(jn, jo) && (b7.d6 = !0)))
	}

	function s3(dG) {
		sG() || (sH(dG, 1), 0 === jK ? (x.click(-1024, -1024), q.oo()) : (s.sU(-1024, -1024), j.s1(-1024, -1024), o.sV(), p.kU && (p.kU = !1)))
	}

	function s2(dG) {
		sG() || (sH(dG, 1), sW(Math.floor(nV * dG.clientX), Math.floor(nV * dG.clientY), 2 === dG.button))
	}

	function click(dG) {
		sG() || sH(dG, 1)
	}

	function s7(dG) {
		rw = b7.dX, sH(dG, 1), dG && dG.touches && 0 < dG.touches.length && 0 !== jK ? p.kU = !1 : aI.sX() || sW(sL, sM, !1)
	}

	function s8(dG) {
		rw = b7.dX, sH(dG, 1), sW(sL, sM, !1)
	}

	function s9(dG) {
		aW.s9(dG)
	}

	function sA(dG) {
		aW.sA(dG)
	}

	function sB(dG) {
		sG() || sH(dG, 0)
	}

	function sW(jn, jo, sY) {
		0 === jK ? x.click(jn, jo) : (s.sU(jn, jo), b5.sU(), o.sV(), p.kU = !1, i.click(jn, jo, sY) && (b7.d6 = !0))
	}

	function s4(dG) {
		var jn, jo, deltaY;
		sG() || (sH(dG, 1), aP.jA.sI(aP.jA.sJ), jn = Math.floor(nV * dG.clientX), jo = Math.floor(nV * dG.clientY), deltaY = dG.deltaY, 1 === dG.deltaMode && (deltaY *= 16), 0 === jK ? x.s4(jn, jo, deltaY) : s.s4(jn, jo, deltaY) || (o.sZ(jn, jo) ? o
			.s4(deltaY) && (b7.d6 = !0) : p.s4(jn, jo, +deltaY)))
	}

	function sC(dG) {
		sH(dG, 0)
	}

	function sH(dG, id) {
		0 === id && (az.sS || ac.sS || z.sS) || 1 === id && (z.oY || ac.oY) || (id = window.innerWidth / document.documentElement.clientWidth) < .999 || 1.001 < id || 0 !== x.sb() && dG.preventDefault()
	}

	function sD(dG) {
		sG() || b7.dX < 400 || (8 !== x.sb() && x.sc(dG) ? b7.d6 = !0 : "Escape" === dG.key ? x.e5() : "ArrowLeft" === dG.key || "a" === dG.key ? aD.sd(3) : "ArrowUp" === dG.key || "w" === dG.key ? aD.sd(0) : "ArrowRight" === dG.key || "d" === dG
			.key ? aD.sd(1) : "ArrowDown" === dG.key || "s" === dG.key ? aD.sd(2) : "h" === dG.key ? 1 <= jK && af.se(!kT) : " " === dG.key && jK && (av.fi(), j.fk && j.sf(), fj) && af.sg(!1))
	}

	function sE(dG) {
		if (keybindHandler(dG.key)) return;
		sG() || ("ArrowLeft" === dG.key || "a" === dG.key ? aD.sh(3) : "ArrowUp" === dG.key || "w" === dG.key ? aD.sh(0) : "ArrowRight" === dG.key || "d" === dG.key ? aD.sh(1) : "ArrowDown" === dG.key || "s" === dG.key ? aD.sh(2) : "1" === dG.key ? o
			.si(.75) : "2" === dG.key ? o.si(7 / 8) : "3" === dG.key ? o.si(.9375) : "4" === dG.key ? o.si(31 / 32) : "5" === dG.key ? o.si(32 / 31) : "6" === dG.key ? o.si(16 / 15) : "7" === dG.key ? o.si(8 / 7) : "8" === dG.key ? o.si(4 / 3) :
			"+" === dG.key ? 0 !== jK && p.s4(Math.floor(jv / 2), Math.floor(gD / 2), -200) : "-" === dG.key ? 0 !== jK && p.s4(Math.floor(jv / 2), Math.floor(gD / 2), 200) : "c" === dG.key && 0 !== jK && b5.sj())
	}

	function sF() {
		"hidden" === document.visibilityState ? 1 === jK && (fj ? af.sg(!1) : !j1 || j.fk || kQ || j.sf()) : b7.d6 = !0
	}

	function sG() {
		return rw + 15e3 > b7.dX
	}

	function resize() {
		aK.sm()
	}
	this.ry = 0, this.rz = "", this.cl = function() {
		s0.addEventListener("mousedown", g9, {
			passive: !1
		}), s0.addEventListener("mousemove", s1, {
			passive: !1
		}), s0.addEventListener("mouseup", s2, {
			passive: !1
		}), s0.addEventListener("click", click, {
			passive: !1
		}), s0.addEventListener("mouseleave", s3, {
			passive: !1
		}), s0.addEventListener("wheel", s4, {
			passive: !1
		}), s0.addEventListener("touchstart", s5, {
			passive: !1
		}), s0.addEventListener("touchmove", s6, {
			passive: !1
		}), s0.addEventListener("touchend", s7, {
			passive: !1
		}), s0.addEventListener("touchcancel", s8, {
			passive: !1
		}), s0.addEventListener("dragover", s9), s0.addEventListener("drop", sA), s0.addEventListener("dblclick", sB), document.addEventListener("contextmenu", sC), document.addEventListener("keyup", sD), document.addEventListener("keydown",
			sE), document.addEventListener("visibilitychange", sF), window.addEventListener("resize", resize)
	}, this.sP = function(jn, jo) {
		return !!af.g9(jn, jo) || !!(s.g9(jn, jo) || p.g9(jn, jo) || o.g9(jn, jo) || k.g9(jn, jo))
	}, this.sk = sG, this.sl = function() {
		return !rx || 0 < rw
	}
}

function cM() {
	this.kp = new sn, this.pM = new so, this.fl = new sp, this.k3 = new sq
}

function so() {
	this.pN = function(eD) {
		eD.fill(0)
	}, this.sr = function(eD) {
		for (var ez = eD.length, dw = 0; dw < ez; dw++) eD[dw] = []
	}, this.ss = function(gf, fw) {
		for (var gg = aq.e9, dw = 0; dw < 3; dw++) gg[dw] = fw * gf[dw];
		return gg
	}, this.st = function(gf, gg, su) {
		for (var gj = 0, dw = 0; dw < 3; dw++) gj += Math.abs(gf[dw] - gg[dw]);
		return su <= gj
	}, this.sv = function(gf, sw) {
		for (var dw = 0; dw < 3; dw++) gf[dw] = an.sx(gf[dw] + sw, 0, 255);
		return gf
	}, this.sy = function(eD, sz = 0, t0 = eD.length - 1) {
		for (var t1 = 0, dw = sz; dw <= t0; dw++) t1 += eD[dw];
		return t1
	}, this.t2 = function(eD, t3) {
		for (var dw, t4, ez = eD.length, t5 = [], hn = ez - 1; 0 <= hn; hn--) {
			for (dw = t4 = 0; dw < ez; dw++) t3(eD[dw]) < t3(eD[t4]) && (t4 = dw);
			ez--, t5.push(eD[t4]), eD[t4] = eD[ez], eD.pop()
		}
		return t5
	}
}

function sn() {
	this.t6 = gL(32, 32, ["a", "b", "m"], 200), this.pC = function(g6, i5) {
		var iZ = document.createElement("canvas");
		return iZ.width = g6, iZ.height = i5, iZ
	}, this.getContext = function(gS, alpha) {
		return gS.getContext("2d", {
			alpha: alpha
		})
	}, this.getImageData = function(qT, g6, i5) {
		return qT.getImageData(0, 0, g6, i5)
	}, this.kq = function(gV, t7, hx) {
		return "rgb(" + gV + "," + t7 + "," + hx + ")"
	}, this.ks = function(gV, t7, hx, hn) {
		return "rgba(" + gV + "," + t7 + "," + hx + "," + hn.toFixed(3) + ")"
	}, this.oZ = function(t8, jn, jo, g6, i5) {
		var kb = 1 / nV,
			t9 = .02 * kb * i5,
			tA = kb * tB;
		t8.padding = t9.toFixed(2) + "px", t8.border = tA.toFixed(2) + "px solid " + ae.gK, t8.left = (kb * jn).toFixed(2) + "px", t8.top = (kb * jo).toFixed(2) + "px", t8.width = (kb * g6 - 2 * t9 - 2 * tA).toFixed(2) + "px", t8.height = (kb *
			i5 - 2 * t9 - 2 * tA).toFixed(2) + "px"
	}, this.oK = function(size, type) {
		return size = size.toFixed(2), 0 === type ? size + "px " + settings.fontName : 1 === type ? "bold " + size + "px " + settings.fontName : 2 === type ? "small-caps " + size + "px " + settings.fontName : "small-caps bold " + size + "px " +
			settings.fontName
	}, this.textAlign = function(gT, id) {
		gT.textAlign = 0 === id ? "left" : 1 === id ? "center" : "right"
	}, this.textBaseline = function(gT, id) {
		gT.textBaseline = 1 === id ? "middle" : "bottom"
	}, this.nU = function(e4) {
		return 1 + e4 * di
	}, this.o2 = function(ns, nL) {
		"<" === nL[0] ? (ns.style.textAlign = "left", nL = nL.substring(1)) : "|" === nL[0] ? (ns.style.textAlign = "center", nL = nL.substring(1)) : ">" === nL[0] && (ns.style.textAlign = "right", nL = nL.substring(1)), ns.innerHTML = nL
			.replace(new RegExp("\\\\_", "g"), "&#95;").replace(new RegExp("\\\\\\*", "g"), "&#42;").replace(new RegExp("\\\\\\[", "g"), "&#91;").replace(new RegExp("\\*\\*(.*?)\\*\\*", "g"), "<b>$1</b>").replace(new RegExp("__(.*?)__", "g"),
				"<u>$1</u>").replace(new RegExp("\\[([^\\]]+?)]\\(([^)]+?)\\)", "g"), "<a href='$2' style='color: " + ae.lU + "; font-weight: normal;'>$1</a>").replace(new RegExp("\n", "g"), "<br>")
	}
}

function tC() {
	document.tD[0].tE(".closeIcon {position: absolute; width: 24px; height: 24px; top: calc(50% - 12px);}", 0), document.tD[0].tE(
		".closeIcon:before {content: ' '; position: absolute; left: 50%; top: 0; width: 2px; height: 100%; background-color: #222; transform: translateX(-50%) rotate(45deg);}", 0), document.tD[0].tE(
		".closeIcon:after {content: ' '; position: absolute; left: 50%; top: 0; width: 2px; height: 100%; background-color: #222; transform: translateX(-50%) rotate(-45deg);}", 0), this.tF = function() {
		var nZ = document.createElement("div");
		return nZ.tG = "closeIcon", nZ
	}
}

function sp() {
	this.fm = function(dS) {
		return 0 === dS ? 1 === jK && kQ : 1 === dS ? 1 === jK && !kQ : 1 <= jK && !kQ
	}, this.fn = function(player) {
		return 0 !== hA[player] && 2 !== hB[player]
	}, this.ms = function(tH, tI) {
		return tH !== tI
	}, this.mG = function(player, e4) {
		return e4 = this.tJ(player, e4), ev[player] += e4, e4
	}, this.tJ = function(player, e4) {
		var tK = ev[player];
		return e4 = Math.min(e4, fP[player] * tL - tK), e4 = Math.min(e4, tM - tK), Math.max(e4, 0)
	}, this.mt = function(player, hE, tN, tO) {
		var tK = ev[player],
			hE = an.fe(tK * (hE + 1), 1024),
			tN = an.fe(tN * tK, 1024),
			hE = Math.min(hE, tK - tN);
		return 10 === iz && (hE = aU.tQ(player, hE)), aq.e7[0] = hE, aq.e7[1] = tN, tO <= hE
	}, this.mD = function(player, ls, lr) {
		var player = ev[player],
			tP = an.fe(64 * player, 1024);
		return ls = Math.min(ls, player - tP), tP += player = this.tS(ls), ls = this.tJ(lr, ls -= player), aq.e7[0] = ls, aq.e7[1] = tP, 1 <= ls
	}, this.mF = function(ls, lr) {
		var tR = this.tS(ls);
		return ls = this.tJ(lr, ls -= tR), aq.e7[0] = ls, aq.e7[1] = tR, 1 <= ls
	}, this.hD = function(player, tT) {
		return an.fe(ev[player] * (tT + 1), 1024)
	}, this.tS = function(tU) {
		return an.fe(Math.max(2142 - b7.iY(), 0) * tU, 2142)
	}, this.n5 = function(player, tN) {
		ev[player] -= an.fe(tN * ev[player], 1024)
	}, this.mv = function(player) {
		ev[player] -= aq.e7[0] + aq.e7[1]
	}, this.mu = function(player, hg) {
		return (hg = Math.min(hg, f3)) < f3 && 0 === hA[hg] && (hg = f3), (aq.eB[0] = hg) === f3 || hs(player, hg)
	}, this.mx = function(player, lr) {
		return 0 !== hA[lr] && !hs(player, lr)
	}
}

function sq() {
	this.k4 = function(e4) {
		var dw, tV, tW, tX, tY;
		if (e4 < 0) return "-" + this.k4(Math.abs(e4));
		if (e4 < 1e3) return e4.toString();
		for (tV = Math.floor(Math.log(e4 + .5) / Math.log(10)) + 1, tW = Math.floor((tV - 1) / 3), tY = (tX = e4.toString()).substring(tV - 3, tV), dw = 1; dw < tW; dw++) tY = tX.substring(tV - 3 * (dw + 1), tV - 3 * dw) + " " + tY;
		return tX.substring(0, tV - 3 * tW) + " " + tY
	}, this.tZ = function(f6, tV) {
		return f6.toFixed(tV) + "%"
	}, this.ta = function(e4, tb = 3) {
		return e4.toFixed(Math.max(Math.floor(tb - Math.log10(e4)), 0))
	}, this.tc = function(username) {
		var te, td = username.indexOf("[");
		return !(td < 0) && 1 < (te = username.indexOf("]")) - td && te - td <= 8 ? username.substring(td + 1, te).toUpperCase().trim() : null
	}
}

function tf() {
	this.hd = function(player, gl) {
		g.qH(player, ao.gc(gl), ao.ge(gl)) && (b7.d6 = !0), j1 && this.iK()
	}, this.iK = function() {
		var dw;
		for (kQ = !1, dw = 0; dw < h9; dw++) 0 !== hA[dw] && 0 === fP[dw] && g.qN(dw);
		0 !== hA[eu] ? (b4.ex[7] = fP[eu], b4.ex[8] = ev[eu], o.dU(), t.tg(), fj || f.kP(i9[eu] - 5, iC[eu] - 5, i8[eu] + 5, iB[eu] + 5), aJ.cl()) : u.show(!1, !1, !1, !0), k.th(18), a8.ti(), a8.jJ(!0), ar.jA.tj(), mr = null, b2.tk = !0, b2.tl(),
			j1 && e0(1)
	}
}
var j1, fj, tm, tM, tn, eu, kT, kQ, to, ha, tp, iz, rm, mr, rI, tq, f3 = 512,
	pu = 512,
	tL = 150,
	jK = 0,
	qA = 512,
	es = 2;

function tr(ts, tt, qc, tu, tv, tw) {
	kT = !1, fj = tw, rm = tv, ha = (iz = tu) < 7 || 9 === iz, rO = h9 = qc.length, j1 = 1 === rO, tp = 9 === (iz = 8 === (iz = 10 === iz && j1 ? 7 : iz) && 2 !== h9 ? 7 : iz) ? 2 : iz + 2, tq = h9 <= 2 ? 30 : h9 <= 50 ? 40 : 50, to = kQ = !(aX.iw &&
			!aX.ix.tx) && (ha || h9 < 100), mr = kQ ? new tf : null, qA = 512, pu = f3, j1 && (pu = a1.ty()), iv = pu - h9, rN = 0, eu = tt, aF.tz(ts), aA.cl(), u0(qc), aa.li.me = [], b8.cl(qc), jK = 1, tM = 15e8, tn = 1e9, b4.cl(), u1(), aB.u2(), b2
		.cl(), a7.cl(), iG(), a4.cl(qc), aH.cl(), ao.cl(), ap.cl(), at.cl(), b.cl(), a9.bi(), a9.u3(), g.cl(), u4(), ab.cl(ts, qc, tu, tv), b9.cl(), as.cl(), ar.cl(), b5.cl(), u5.putImageData(u6, 0, 0), s.cl(), p.cl(), o.cl(), af.cl(), aN.cl(), r
		.cl(), t.cl(), j.cl(), n.cl(), k.cl(), m.cl(), i.cl(), u.cl(), e.cl(), c.cl(), d.cl(), eY(), a6.cl(), a8.cl(), aU.cl(), aT.cl(), aV.cl(), aQ.cl(), ax.dH.dT(!1), 8 === iz ? (rI = new qb).cl(qc) : rI = null, b7.u7(), u8(), aJ.cl(), b7.d6 = !0,
		fj || j1 && kQ || e0(1)
}

function u8() {
	f.kO(), 0 === hA[eu] && u.show(!1, !0), a8.jJ(!0)
}

function u9(uA) {
	ac.oL(), aP.jA.close(aP.jA.sJ, 3246), jK = 0, b7.uB(), e0(0), ax.dH.dT(!0), a2.cl(!uA)
}

function bR() {
	var nB, jn, jo, uC, uD, uE, dX, player, uF, gap, zoom, mP, uG;

	function uW(player) {
		for (var dw = mP.length - 1; 0 <= dw; dw--)
			if (mP[dw] === player) return 1
	}

	function uU(uR) {
		var dw, ez;
		if (-1 !== uR)
			for (ez = nB.length, dw = 0; dw < ez; dw++)
				if (nB[dw].sS && nB[dw].jn + 1 === uR % 4 && nB[dw].jo + 1 === uR >> 2) return dw;
		return -1
	}

	function uT(gA, gB) {
		var t7 = gap / 2;
		return gA < jn - uC - 3 * t7 || jn + 3 * uC + 5 * t7 < gA || gB < jo - uC - 3 * t7 || jo + 2 * uC + 3 * t7 < gB ? -1 : 4 * (gB < jo - t7 ? 0 : gB < jo + uC + t7 ? 1 : 2) + (gA < jn - t7 ? 0 : gA < jn + uC + t7 ? 1 : gA < jn + 2 * uC + 3 *
			t7 ? 2 : 3)
	}
	this.uH = function() {
		var dw, hx, uK = [ae.lH, ae.lQ, ae.kw, ae.lc, ae.lW];
		for (nB = new Array(8), dw = 0; dw < 8; dw++) nB[dw] = {
			id: dw,
			sS: !1,
			uL: 0,
			gS: [],
			jn: 0,
			jo: 0
		};
		for (nB[0].colors = [0, 1, 2, 3], nB[0].jn = 0, nB[0].jo = 0, nB[1].colors = [0, 1, 4], nB[1].jn = 1, nB[1].jo = 0, nB[2].colors = [0, 2], nB[2].jn = -1, nB[2].jo = 0, nB[3].colors = [0], nB[3].jn = 0, nB[3].jo = 0, nB[4].colors = [0, 2],
			nB[4].jn = 1, nB[4].jo = 1, nB[5].colors = [3], nB[5].jn = 0, nB[5].jo = -1, nB[6].id = 20, nB[6].colors = [0], nB[6].jn = 1, nB[6].jo = -1, nB[7].id = 21, nB[7].colors = [0], nB[7].jn = 0, nB[7].jo = 1, dw = 0; dw < 8; dw++)
			for (hx = 0; hx < nB[dw].colors.length; hx++) nB[dw].gS.push(function(id, uM) {
				var gM = a3.get(3).height,
					uN = ad.kp.pC(gM, gM),
					gT = ad.kp.getContext(uN);
				20 === id ? gT.drawImage(a3.get(18), 0, 0) : 21 === id ? gT.drawImage(a3.uO("emojis"), -4 * gM, 0) : (function(g6, qT, uQ) {
					qT.fillStyle = uQ, qT.beginPath(), qT.arc(Math.floor(g6 / 2), Math.floor(g6 / 2), Math.floor(.47 * g6), 0, 2 * Math.PI), qT.fill()
				}(gM, gT, uM), gT.drawImage(a3.get(3), -id * gM, 0));
				return uN
			}(nB[dw].id, uK[nB[dw].colors[hx]]))
	}, this.uJ = function() {
		return nB
	}, this.cl = function() {
		mP = [], jn = jo = dX = 0, uD = uE = -1e3, this.resize()
	}, this.resize = function() {
		uC = Math.floor((di ? .075 : .0468) * fy), zoom = uC / a3.get(3).height, gap = Math.floor(uC / 3)
	}, this.sO = function(gA, gB) {
		return !!this.sS() && (b7.d6 = !0, !!b3.g9(gA, gB, player) || (gA = function(gA, gB) {
			var uR, dw;
			if (uE = uD = -1e3, uR = uT(gA, gB), -1 === (uR = uU(uR))) return 0;
			if (1 === nB[uR].colors[nB[uR].uL]) return 0;
			if (5 === uR) {
				if (! function() {
						var dY = (new Date).getTime();
						uG + 4e3 < dY && (mP = []);
						uG = dY
					}(), uW(player)) return 1;
				mP.push(player), 16 < mP.length && mP.shift()
			} else if (6 === uR) {
				for (dw = mP.length - 1; 0 <= dw; dw--) 0 === hA[mP[dw]] && mP.splice(dw, 1);
				0 < mP.length && (aV.uX(1, mP, !0) && aa.fl.mO(mP, player), mP = [])
			} else if (2 === uR) aa.fr.lq(o.ft(), player);
			else if (3 === uR) kQ && aa.fr.ll(uF);
			else if (0 === uR)
				if (0 === nB[0].uL) {
					if (to && t.uY() < 300) return 1;
					aa.fr.fs(o.ft(), player)
				} else aQ.uZ(player, o.ft());
			else if (1 === uR) aa.fr.lu(o.ft(), uF);
			else {
				if (7 === uR) return b3.show(gA, gB), 2;
				if (4 !== uR) return 0;
				aV.uX(0, [player], !0) && aa.fl.mL(player)
			}
			return 1
		}(gA, gB), this.oL(), 2 === gA && (b3.sS = !0), 0 < gA))
	}, this.sQ = function(gA, gB) {
		this.sS() || (uD = gA, uE = gB, dX = (new Date).getTime())
	}, this.click = function(gA, gB, sY) {
		var gv = ao.hI(gA),
			gw = ao.hJ(gB),
			gl = ao.hL(gv, gw),
			gu = ao.hN(gl);
		return !(!ao.hK(gv, gw) || (gv = (di ? .025 : .0144) * fy, Math.abs(gA - uD) > gv) || Math.abs(gB - uE) > gv || performance.now() > dX + 425) && (sY ? (function(gA, gB, gu) {
			a4.f1(gu) || -1 === (gA = ap.lv.ur(gA, gB)) ? k.uq(gu) : k.us(gA)
		}(gA, gB, gu), !1) : j.fk || this.sS() || !ao.hC() || fj ? (this.oL(), !1) : kQ ? !!a4.f1(gu) && (uF = gl, nB[3].sS = !0, this.uc(gA, gB)) : (ap.lv.ly(gl) || ap.lv.ud(gA, gB) || (2 === jK ? a4.f9(gu) && 0 < b3.ue && (player = a4
			.fA(gu), a4.uf(player)) && (nB[0].sS = !0, nB[0].uL = 1, nB[7].sS = !0) : a4.ug(gu) || (uF = gl, ap.lv.lw(eu, gl) && (nB[0].sS = !0, nB[0].uL = 1, nB[1].sS = !0, nB[1].uL = aq.eA[2] ? 0 : 2), a4.uh(gu)) || (a4.fB(gu) ?
			(player = f3, ui(eu) ? (nB[0].sS = !0, nB[0].uL = 0) : uj(eu, player) && (nB[0].sS = !0, nB[0].uL = 3)) : (player = a4.fA(gu)) === eu ? 0 !== b3.ue && (nB[0].sS = !0, nB[0].uL = 1, nB[7].sS = !0) : (nB[0].uL = 1, nB[5]
				.sS = function(player) {
					return a4.uf(player) && !uW(player) && aV.uX(1, [player], !1)
				}(player), nB[7].sS = 1 <= b3.ue && a4.uf(player), hs(player, eu) ? (nB[4].sS = a4.uf(player) && !a8.ul(player) && aV.uX(0, [player], !1), nB[6].sS = function(player) {
					if (0 === mP.length) return !1;
					if ((new Date).getTime() > uG + 4e3) return !(mP = []);
					return !uW(player) && ! function(player) {
						var dw;
						if (ha)
							for (dw = mP.length - 1; 0 <= dw; dw--)
								if (!hs(player, mP[dw])) return 1;
						return
					}(player)
				}(player), un(eu, player) ? (nB[0].uL = 0, nB[0].sS = !0) : uj(eu, player) && (nB[0].uL = 3, nB[0].sS = !0), nB[0].sS = this.uo()) : (nB[2].sS = !0, nB[0].sS = !0)))), this.uc(gA, gB)))
	}, this.uc = function(gA, gB) {
		return jn = gA - Math.floor(uC / 2), jo = gB - Math.floor(uC / 2), !!this.sS()
	}, this.s1 = function(gA, gB) {
		return !!this.sS() && (b3.sS ? !b3.uu(gA, gB) && (b3.uv(), b3.sS = !1, b7.d6 = !0) : function(ux, gA, gB) {
			gA = uT(gA, gB);
			if (0 <= uU(gA)) return !1;
			if ((1 === gA || 6 === gA) && 0 <= uU(2)) return !1;
			if ((6 === gA || 9 === gA) && 0 <= uU(10)) return !1;
			return ux.oL(), b7.d6 = !0
		}(this, gA, gB))
	}, this.oL = function() {
		for (var dw = nB.length - 1; 0 <= dw; dw--) nB[dw].sS = !1, nB[dw].uL = 0;
		b3.sS = !1
	}, this.sS = function() {
		return this.uo() || b3.sS
	}, this.uo = function() {
		for (var ez = nB.length, dw = 0; dw < ez; dw++)
			if (nB[dw].sS) return !0;
		return !1
	}, this.gG = function() {
		if (this.sS())
			if (b3.sS) b3.gG();
			else {
				var dw, gT = gH,
					hx = nB,
					ez = hx.length,
					uz = (uC + gap) / zoom;
				for (gT.imageSmoothingEnabled = !0, gT.setTransform(zoom, 0, 0, zoom, jn, jo), dw = 0; dw < ez; dw++) hx[dw].sS && gH.drawImage(hx[dw].gS[hx[dw].uL], hx[dw].jn * uz, hx[dw].jo * uz);
				gT.imageSmoothingEnabled = !1, gT.setTransform(1, 0, 0, 1, 0, 0)
			}
	}
}

function bS() {
	var i5, gS, g5, v1, v2, v0 = ["Quit Game", "Surrender", "Statistics", "Replay"];

	function v3() {
		var v4, qT = gS.getContext("2d", {
			alpha: !0
		});
		qT.clearRect(0, 0, i5, i5), qT.fillStyle = ae.kt, qT.fillRect(0, 0, i5, i5), 0 === v1 && (qT.fillStyle = ae.ky, qT.fillRect(0, 0, i5, i5)), qT.fillStyle = ae.gK, qT.fillRect(0, 0, i5, 1), qT.fillRect(0, 0, 1, i5), qT.fillRect(0, i5 - 1, i5,
			1), qT.fillRect(i5 - 1, 0, 1, i5), v4 = .9 * i5 / a3.get(0).width, qT.imageSmoothingEnabled = !0, qT.setTransform(v4, 0, 0, v4, Math.floor((i5 - v4 * a3.get(0).width) / 2), Math.floor((i5 - v4 * a3.get(0).height) / 2)), qT.drawImage(
			a3.get(0), 0, 0), qT.setTransform(1, 0, 0, 1, 0, 0)
	}

	function v7(gA, gB) {
		if (!j.fk) return gA <= i5 + nf && gB >= o.jo ? 0 : -1;
		if (gA <= 4 * i5 + nf) {
			if (gB >= o.jo) return 0;
			if (gB >= o.jo - i5 - v2 * nf) return vA(2) ? 2 : -1;
			if (gB >= o.jo - 2 * (i5 + v2 * nf)) return vA(3) ? 3 : -1;
			if (gB >= o.jo - 3 * (i5 + v2 * nf)) return vA(4) ? 4 : -1
		} else if (gA <= 7 * i5 + nf && gB >= o.jo - i5 - v2 * nf) return 1;
		return -1
	}

	function vA(dw) {
		return 2 === dw ? v8(2) || v8(3) || v8(4) : 3 === dw && v8(3) || v8(4)
	}

	function v8(dw) {
		return 2 === dw ? !fj && j.vF(eu) : 3 === dw ? 2 <= b4.vG : ac.vH()
	}

	function vJ(dw, uM) {
		gH.setTransform(1, 0, 0, 1, nf, o.jo - dw * v2 * nf - dw * i5), gH.fillStyle = ae.kt, gH.fillRect(0, 0, 4 * i5, i5), v1 === dw + 1 && uM === ae.gK && (gH.fillStyle = ae.ky, gH.fillRect(0, 0, 4 * i5, i5)), gH.fillStyle = uM, gH.fillRect(0, 0,
			4 * i5, 1), gH.fillRect(0, 0, 1, i5), gH.fillRect(4 * i5, 0, 1, i5), gH.fillRect(0, i5 - 1, 4 * i5, 1), gH.fillText(v0[dw], 2 * i5, .54 * i5)
	}
	this.fk = !1, this.cl = function() {
		v1 = -1, this.fk = !1, v2 = di ? 1.2 : .6, this.resize()
	}, this.resize = function() {
		i5 = o.i5, (gS = document.createElement("canvas")).width = i5, gS.height = i5, g5 = g1 + Math.floor((di ? .5 : .45) * i5) + g2, v3()
	}, this.sf = function() {
		this.fk = !this.fk, this.fk ? (af.se(!1), fj && af.v5 && af.sg(!0), this.v6()) : (v1 = -1, v3(), j1 && 1 === jK && !kQ && e0(1)), b7.d6 = !0
	}, this.v6 = function() {
		(j1 || fj) && 1 === jK && (s.jJ(!0), kQ || setTimeout(function() {
			b2.rT()
		}, 0), e0(0))
	}, this.g9 = function(gA, gB) {
		var uL = v7(gA, gB);
		if (this.fk) {
			if (kT) return 0 <= uL && af.se(!1), !fj;
			if (0 === uL) u9();
			else if (1 === uL) this.sf();
			else if (2 === uL) v8(uL) && (aa.fr.mB(), this.sf());
			else if (3 === uL) v8(uL) && (b5.sf(), b7.d6 = !0, ac.sS) && ac.oL();
			else if (4 === uL) v8(uL) && (ac.sS ? ac.oL() : ac.show(), b5.sS) && b5.sf();
			else {
				if (!(j1 || 1 !== jK || fj || b5.sS || ac.sS) && (j.sf(), 1)) return !1;
				al.sP(gA, gB) || i.sQ(gA, gB)
			}
			return !0
		}
		return 0 === uL && (this.sf(), !0)
	}, this.s1 = function(gA, gB) {
		gA = v7(gA, gB);
		gA !== v1 && (v1 = gA, this.fk || v3(), b7.d6 = !0)
	}, this.gG = function() {
		var g6;
		this.fk ? (g6 = Math.floor(5.5 * i5), gH.setTransform(1, 0, 0, 1, nf, o.jo), gH.fillStyle = ae.kt, gH.fillRect(0, 0, g6, i5), 0 === v1 ? (gH.fillStyle = ae.ky, gH.fillRect(0, 0, 4 * i5, i5)) : 1 === v1 && (gH.fillStyle = ae.ky, gH
				.fillRect(4 * i5, 0, Math.floor(1.5 * i5), i5)), gH.fillStyle = ae.gK, gH.fillRect(0, 0, g6, 1), gH.fillRect(0, 0, 1, i5), gH.fillRect(4 * i5, 0, 1, i5), gH.fillRect(0, i5 - 1, g6, 1), gH.fillRect(g6 - 1, 0, 1, i5), gH.font =
			g5, gH.textBaseline = gI, gH.textAlign = gJ, gH.fillText(v0[0], 2 * i5, .54 * i5), g6 = .4 * i5, j.vI(nf + 4 * i5 + (1.5 * i5 - g6) / 2, o.jo + .3 * i5, g6), vA(2) && vJ(1, v8(2) ? ae.gK : ae.l5), vA(3) && vJ(2, v8(3) ? ae.gK : ae
				.l5), vA(4) && vJ(3, ae.gK), gH.setTransform(1, 0, 0, 1, 0, 0)) : gH.drawImage(gS, nf, o.jo)
	}, this.vF = function(player) {
		return 0 !== hA[player] && 2 !== jK && a4.uf(player)
	}, this.vI = function(jn, jo, ez) {
		gH.setTransform(1, 0, 0, 1, jn, jo), gH.lineWidth = tB, gH.strokeStyle = ae.gK, gH.beginPath(), gH.moveTo(0, 0), gH.lineTo(ez, ez), gH.moveTo(0, ez), gH.lineTo(ez, 0), gH.stroke()
	}
}

function bT() {
	var vK, i5, tA, vL, vM, vN, vO, vP, vQ;

	function gF() {
		return o.vi(k.ve()) ? aN.sS ? o.jo - o.i5 - 2 * tA : o.jo - tA : af.vi(k.vh()) ? aN.sS ? af.gF() - o.i5 - 2 * tA : af.gF() - tA : aN.sS ? dk - o.i5 - (aR.vj() + 1) * tA : dk - aR.vj() * nf
	}

	function vV(dY, df, id, f6, vY, vZ, pX, va, vb) {
		var dw, qT, vf, uN, vm, vn = void 0 !== vb,
			g6 = Math.floor(n.measureText(df, k.g5) + 1.5 * vL + (vn ? i5 : 1.5 * vL));
		if (b7.d6 = !0, dj < g6 + tA && !vn && 50 !== id && 20 < df.length) vf = Math.floor(.5 * df.length), vV(dY, df.substring(0, vf), id, f6, vY, vZ, pX, va, vb), vV(dY, df.substring(vf), id, f6, vY, vZ, pX, va, vb);
		else if (vf = g6 + (50 === id ? vM : 0), (uN = document.createElement("canvas")).width = g6, uN.height = i5, (qT = uN.getContext("2d", {
				alpha: !0
			})).font = k.g5, qT.textBaseline = gI, qT.textAlign = vo, qT.clearRect(0, 0, g6, i5), qT.fillStyle = vZ, qT.fillRect(0, 0, g6, i5), qT.fillStyle = vY, qT.fillText(df, Math.floor(1.5 * vL), Math.floor(i5 / 2)), vn && (vn = i5 / b3.g6, qT
				.imageSmoothingEnabled = !0, qT.setTransform(vn, 0, 0, vn, g6 - i5, 0), qT.drawImage(b3.uN[vb], 0, 0)), 0 === (vm = {
				dX: dY,
				df: df,
				id: id,
				player: f6,
				gS: uN,
				vY: vY,
				vZ: vZ,
				g6: g6,
				vf: vf,
				pX: pX,
				va: va,
				vb: vb
			}).dX || 0 < vK.length && 0 < vK[0].dX) vK.unshift(vm);
		else {
			for (dw = 1; dw < vK.length; dw++)
				if (0 < vK[dw].dX) return void vK.splice(dw, 0, vm);
			vK.push(vm)
		}
	}

	function vW(gV, t7, hx) {
		return "rgb(" + gV + "," + t7 + "," + hx + ")"
	}

	function vp(id, w9) {
		for (var ez = vK.length, dw = 0; dw < ez; dw++) vK[dw].id === id && w9-- <= 0 && (vK.splice(dw, 1), dw--, ez--)
	}

	function vq(id, player) {
		for (var wA = !1, dw = vK.length - 1; 0 <= dw; dw--) vK[dw].id !== id || player !== f3 && vK[dw].player !== player || (vK.splice(dw, 1), wA = !0);
		return wA
	}

	function wF(df) {
		vV(340, df, 6, 0, vW(215, 245, 255), ae.kv, -1, !1)
	}

	function wN(player, wO) {
		return (j1 || h9 <= player || wO || aR.k1.wP ? k5 : wQ)[player]
	}
	this.cl = function() {
		vO = di ? 7 : 12, vN = {
			qc: [vP = 0, 0, 0],
			vR: [0, 0, 0],
			kM: [220, 180, 180],
			vS: [0, 0, 0],
			iZ: [0, 0, 0]
		}, vK = [], this.resize(), kQ && this.rD(0, 18), wF(aY.vd(37, [au.ix.ph[au.pi].name])), wF(aY.vd(38, [au.eZ - 2, au.ea - 2])), wF(aY.vd(39, [aB.wG], {
			w0: [0]
		})), aB.wG !== aB.wH && wF(aY.vd(40, [aB.wH, aB.wH / aB.wG], {
			w0: [0],
			wI: [1]
		})), 0 < aB.wJ && wF(aY.vd(41, [aB.wJ, aB.wJ / aB.wG], {
			w0: [0],
			wI: [1]
		})), 0 < aB.wK && wF(aY.vd(42, [aB.wK, aB.wK / aB.wG], {
			w0: [0],
			wI: [1]
		})), 10 === iz && vV(120, aY.vd(43), 6, 0, vW(235, 255, 120), ae.kv, -1, !1), this.vU()
	}, this.vU = function() {
		var dw, ez;
		if (aX.iw)
			for (ez = aX.ix.nA.length, dw = 0; dw < ez; dw++) vV(400, aX.ix.nA[dw], 6, 0, vW(255, 255, 255), ae.kv, -1, !1)
	}, this.resize = function() {
		var vX, dw;
		if (i5 = (i5 = Math.floor((di ? .031 : .0249) * fy)) < 10 ? 10 : i5, this.fontSize = Math.floor(2 * i5 / 3), this.g5 = g1 + this.fontSize + g2, tA = nf, vL = Math.floor(i5 / 5), 0 < vK.length)
			for (vX = vK, vK = [], dw = vX.length - 1; 0 <= dw; dw--) vV(vX[dw].dX, vX[dw].df, vX[dw].id, vX[dw].player, vX[dw].vY, vX[dw].vZ, vX[dw].pX, vX[dw].va, vX[dw].vb);
		this.vc()
	}, this.vc = function() {
		vQ = document.createElement("canvas");
		var df = aY.vd(0),
			qT = (vM = n.measureText(df, this.g5) + 5 * vL, vQ.height = i5, vQ.width = vM, vQ.getContext("2d", {
				alpha: !0
			}));
		qT.font = this.g5, qT.textBaseline = gI, qT.textAlign = gJ, qT.clearRect(0, 0, vM, i5), qT.fillStyle = ae.lE, qT.fillRect(0, 0, vM, i5), qT.fillStyle = ae.gK, qT.fillText(df, Math.floor(vM / 2), Math.floor(i5 / 2))
	}, this.ve = function() {
		var ez;
		return aN.sS ? aN.g6 : 0 === (ez = vK.length) ? 0 : 1 === ez ? vK[0].vf : vg(vK[0].vf, vK[1].vf)
	}, this.vh = function() {
		var ez = vK.length;
		return aN.sS ? ez ? vg(aN.g6, vK[0].vf) : aN.g6 : 0 === ez ? 0 : 1 === ez ? vK[0].vf : 2 === ez ? vg(vK[0].vf, vK[1].vf) : vg(vg(vK[0].vf, vK[1].vf), vK[2].vf)
	}, this.g9 = function(jn, jo) {
		for (var vk, vl = gF(), dw = vK.length - 1; 0 <= dw; dw--)
			if ((vk = vl - (dw + 1) * i5) <= jo && jo < vk + i5) return 50 === vK[dw].id ? jn >= jv - vM - tA - vK[dw].g6 && (jv - vM - tA <= jn ? aa.fl.mL(vK[dw].player) : f.kR(vK[dw].player, 800, !1, 0), !0) : jn >= jv - vK[dw].g6 - tA && (
				736 === vK[dw].id ? window.open("https://" + vK[dw].df, "_blank") : vK[dw].va && (f.kR(vK[dw].player, 800, !1, 0), 0 <= vK[dw].pX) && (vk = vK[dw].pX, vK[dw].pX = vK[dw].player, vK[dw].player = vk), !0);
		return !1
	}, this.rn = function(dY, df, id, f6, vY, vZ, pX, va, vb) {
		vV(dY, df, id, f6, vY, vZ, pX, va, vb)
	}, this.th = function(id) {
		for (var dw = vK.length - 1; 0 <= dw; dw--) vK[dw].id === id && (vK[dw].dX = 1)
	}, this.rD = function(player, id) {
		0 === id ? (b4.ex[player < h9 ? 4 : 3]++, n.hd(player, 0), vp(423, 0), vV(160, aY.vd(1, [k5[player]]), 423, player, "rgb(10,220,10)", ae.kv, -1, !1)) : 1 === id ? (vq(50, f3), n.hd(player, 1), vV(360, aY.vd(2, [k5[player]]), 0, player,
			"rgb(255,40,40)", ae.kv, -1, !0), f.kR(player, 2700, !1, 0)) : 2 === id ? (n.hd(player, 2), vV(0, aY.vd(3), 0, player, "rgb(10,255,255)", ae.kv, -1, !0), f.kR(player, 2700, !1, 0)) : 3 === id ? (n.hd(player, 2), vV(0, aY.vd(4, [
			k5[player]
		]), 0, player, ae.gK, ae.kv, -1, !0), f.kR(player, 2700, !1, 0)) : 4 === id ? (rO--, rN--, this.vr(1, player, player)) : 5 === id ? 2 !== hB[player] && a4.uf(eu) && (function(id, jX) {
			var dw, w3 = 0,
				ez = vK.length;
			for (dw = 0; dw < ez; dw++)
				if (vK[dw].id === id && jX <= ++w3) return vK.splice(dw, 1)
		}(1, 5), a8.vt(player) ? vV(180, aY.vd(5, [k5[player]]), 1, player, vW(255, 200, 180), ae.kv, -1, !0) : (vp(573, 0), vV(180, aY.vd(6, [k5[player]]), 573, player, "rgb(255,70,10)", ae.kv, -1, !0))) : 18 === id ? vV(255, aY.vd(7), 18,
			0, ae.gK, ae.kv, -1, !1) : 21 === id ? vV(220, aY.vd(8), id, 0, "rgb(255,40,40)", ae.kv, -1, !1) : 22 === id ? this.vr(2, player, player) : 59 === id && vV(0, aY.vd(9), id, 0, ae.lb, ae.kv, 0, !1)
	}, this.vu = function(vv) {
		vV(200, aY.vd(10, [vv]), 94, 0, ae.gK, ae.lO, -1, !1)
	}, this.rL = function(rG) {
		if (eu === rG) wins_counter++, window.localStorage.setItem("fx_winCount", wins_counter);
		n.hd(rG, 2), vV(0, h9 < 100 ? aY.vd(11, [k5[rG]]) : aY.vd(12, [k5[rG]]), 3, rG, ae.gK, ae.kv, -1, !0), vV(0, "Your Current Win Count is Now " + wins_counter, 3, rG, ae.gK, ae.kv, -1, !0), f.kR(rG, 2700, !1, 0)
	}, this.uq = function(gu) {
		var vw = "(" + ao.gc(gu >> 2) + ", " + ao.ge(gu >> 2) + ")",
			va = !1,
			player = 0;
		a4.f1(gu) ? a4.fB(gu) ? vw = aY.vd(13, [vw]) : (player = a4.fA(gu), vw = aY.vd(14, [k5[player], ad.k3.k4(ev[player]), ad.k3.k4(fP[player]), vw]), va = !0) : vw = a4.ug(gu) ? aY.vd(15, [vw]) : aY.vd(16, [vw]), b7.d6 = !0, vp(55, 0), vV(
			220, vw, 55, player, ae.gK, ae.kv, -1, va)
	}, this.us = function(vx) {
		var p7 = ap.jA,
			player = p7.vy[vx] >> 3;
		b7.d6 = !0, vp(55, 0), vV(220, aY.vd(17, [k5[player], p7.vz[vx]], {
			w0: [1]
		}), 55, player, ae.gK, ae.kv, -1, !0)
	}, this.m4 = function(lm, w1, m5) {
		lm === eu ? vV(175, aY.vd(18, [k5[w1]]), 1001, w1, vW(200, 255, 210), ae.kv, -1, !0, m5) : this.w2(lm, m5)
	}, this.w2 = function(lm, m5) {
		vp(1e3, 0), vV(175, aY.vd(19, [k5[lm]]), 1e3, lm, ae.gK, "rgba(5,60,25,0.9)", -1, !0, m5)
	}, this.rK = function(rH) {
		var vv;
		rH ? (vv = aY.vd(20), n.rc(aY.vd(21), 2, 1, 12), vV(0, vv, 40, 0, "rgb(10,220,10)", ae.kv, -1, !1)) : (vv = aY.vd(22), n.rc(aY.vd(23), 2, 0, 16), vV(0, vv, 41, 0, "rgb(200,80,80)", ae.kv, -1, !1)), f.kY(2700)
	}, this.qd = function(qc) {
		vV(300, qc[0].name + " [" + rI.qj(qc[0].qg) + "] vs " + qc[1].name + " [" + rI.qj(qc[1].qg) + "]", 65, 0, ae.jz, "rgba(100,255,255,0.75)", -1, !1)
	}, this.w4 = function(vv) {
		vV(200, vv, 0, 0, "rgb(40,255,200)", "rgba(10,60,40,0.9)", -1, !1)
	}, this.w5 = function() {
		vV(0, aY.vd(24), 247, 0, ae.la, ae.kv, -1, !1)
	}, this.ql = function(qc, qi, qk, w6) {
		1 === aP.jA.w7() && (vV(0, qc[0].name + ": " + rI.qj(qc[0].qg) + " -> " + qi, 66, 0, ae.gK, w6[0], -1, !1), vV(0, qc[1].name + ": " + rI.qj(qc[1].qg) + " -> " + qk, 66, 1, ae.gK, w6[1], -1, !1))
	}, this.mM = function(player, id) {
		0 === id ? vq(50, player) ? (vV(128, aY.vd(25, [k5[player]]), 52, player, vW(180, 255, 180), ae.kv, -1, !0), a8.n7(player, 2, 255)) : vV(384, aY.vd(26, [k5[player]]), 51, player, vW(210, 210, 255), ae.kv, -1, !0) : vq(51, player) ? (vV(
			128, aY.vd(27, [k5[player]]), 52, player, ae.gK, "rgba(60,120,10,0.9)", -1, !0), a8.n7(player, 2, 255)) : (vV(384, aY.vd(28, [k5[player]]), 50, player, ae.gK, "rgba(90,90,90,0.9)", -1, !0), a8.n7(player, 2, 96))
	}, this.mQ = function(qc, target) {
		var color = vW(210, 255, 210);
		1 < qc.length ? vV(230, aY.vd(29, [qc.length, k5[target]]), 66, target, color, ae.kv, -1, !0) : vV(230, aY.vd(30, [k5[qc[0]], k5[target]]), 66, qc[0], color, ae.kv, target, !0)
	}, this.w8 = function(player, target) {
		vV(230, aY.vd(31, [k5[player], k5[target]]), 66, player, ae.gK, "rgba(75,65,5,0.9)", target, !0)
	}, this.rC = function(id, player) {
		vq(id, player)
	}, this.lo = function() {
		var g0;
		100 <= ev[eu] || (-1 === (g0 = function(id) {
			for (var dw = vK.length - 1; 0 <= dw; dw--)
				if (vK[dw].id === id) return dw;
			return -1
		}(143)) ? vV(80, aY.vd(32), 143, 0, ae.gK, ae.kv, -1, !1) : vK[g0].dX = 80)
	}, this.mH = function(wC, wD, player) {
		2 !== hB[eu] && (vV(200, aY.vd(33, [wC, k5[player]], {
			w0: [0]
		}), 30, player, "rgb(190,255,190)", ae.kv, -1, !0), wD) && vV(30, aY.vd(34, [wD], {
			w0: [0]
		}), 30, 0, ae.gK, ae.kv, -1, !1)
	}, this.wE = function(wC, player) {
		2 !== hB[eu] && (vp(31, 0), 2 === hB[player] || h9 <= player ? vV(150, aY.vd(36, [k5[player], wC], {
			w0: [1]
		}), 31, player, ae.jz, "rgba(205,205,205,0.9)", -1, !0) : vV(150, aY.vd(35, [k5[player], wC], {
			w0: [1]
		}), 31, player, ae.jz, "rgba(205,255,205,0.9)", -1, !0))
	}, this.rP = function(wL) {
		for (var iZ = b7.iY(), dw = 2; 0 <= dw; dw--) 0 < vN.vS[dw] && (wL || vN.iZ[dw] < iZ - 220) && this.wM(dw)
	}, this.wM = function(id) {
		var df, ez = vN.vS[id],
			player = vN.qc[id];
		vN.vS[id] = 0, 1 === ez ? (df = 0 === id ? aY.vd(47, [wN(player, !0), wN(vN.vR[0], !0)]) : aY.vd(47 + id, [wN(player, !1)]), vp(7, 0), vV(vN.kM[id], df, 7, vN.vR[id], ae.gK, ae.kv, -1, !0)) : 2 <= ez && (df = aY.vd(44 + id, [wN(player,
			0 === id), ez - 1]), vp(7, 0), vV(vN.kM[id], df, 7, player, ae.gK, ae.kv, -1, !1))
	}, this.vr = function(id, pW, pX) {
		var iZ = b7.iY(),
			ez = vN.vS[id] + 1;
		vN.vS[id]++, vN.qc[id] = pW, vN.vR[id] = pX, 1 === ez && (vN.iZ[id] = iZ), (1 === ez && (rO < 32 || 2 === jK) || 1 < ez && (vN.iZ[id] < iZ - 140 || 2 === jK)) && this.wM(id)
	}, this.iK = function() {
		for (var gj = (gj = vK.length - vO) <= 1 ? 1 : gj * gj, dw = vK.length - 1; 0 <= dw; dw--) 0 < vK[dw].dX && (vK[dw].dX -= gj, vK[dw].dX <= 0) && (b7.d6 = !0, vK.splice(dw, 1));
		! function() {
			var w9, dw;
			if (128 !== vP && !(++vP < 128))
				for (w9 = 5, dw = ib - 1; 0 <= dw; dw--) 1 === hB[ic[dw]] && 0 < w9-- && vV(240, aY.vd(50, [k5[ic[dw]]]), 1, ic[dw], ae.jz, "rgba(255,255,255,0.75)", -1, !0)
		}(), this.rP(!1)
	}, this.gG = function() {
		for (var pt, jo = gF(), dw = vK.length - 1; 0 <= dw; dw--) pt = jo - (dw + 1) * i5, 50 === vK[dw].id ? (gH.drawImage(vK[dw].gS, jv - vK[dw].g6 - vM - tA, pt), gH.drawImage(vQ, jv - vM - tA, pt)) : gH.drawImage(vK[dw].gS, jv - vK[dw].g6 -
			tA, pt)
	}
}

function cw() {
	this.g6 = 0, this.i5 = 0, this.qY = 0, this.wS = 0, this.wT = 0, this.fontSize = 0, this.g0 = -1, this.v0 = ["Accept Cookies", "More Information", "Decline"], this.colors = ["rgba(0,255,0,0.4)", "rgba(0,0,255,0.4)", "rgba(255,0,0,0.4)"], this
		.sS = !1, this.cl = function() {
			this.resize(), this.sS = dZ < 5 && !dV && 0 === a5.ds()
		}, this.resize = function() {
			this.g6 = Math.floor(2.8 * Math.floor((di ? .09 : .062) * fy)), this.i5 = Math.floor(+this.g6), this.qY = Math.floor(.06 * this.g6), this.qZ = this.g6 - 2 * this.qY, this.wS = this.qY, this.wT = (this.i5 - (this.v0.length + 1) * this
				.wS) / this.v0.length, this.fontSize = Math.floor(.3 * this.wT)
		}, this.g9 = function(gA, gB) {
			return !!this.sS && -1 !== (gA = this.wU(gA, gB)) && (0 === gA ? (a5.wV(2), this.sS = !1) : 1 === gA ? az.cl(am.wW, !0) : 2 === gA && (a5.wV(1), this.sS = !1), b7.d6 = !0)
		}, this.s1 = function(gA, gB) {
			var dY;
			return !!this.sS && (dY = this.g0, this.g0 = this.wU(gA, gB), dY !== this.g0 && (b7.d6 = !0), -1 !== this.g0)
		}, this.wU = function(gA, gB) {
			return gA -= gC, gB -= Math.floor(gD - this.i5 - gC), gA < 0 || gB < 0 || gA >= this.g6 || gB >= this.i5 ? -1 : (gA = Math.floor((gB - .5 * this.wS) / ((this.i5 - this.wS) / this.v0.length))) < 0 ? 0 : gA >= this.v0.length ? this.v0
				.length - 1 : gA
		}, this.gG = function() {
			this.sS && this.wX()
		}, this.wX = function() {
			var jn = gC,
				jo = Math.floor(gD - this.i5 - gC);
			gH.setTransform(1, 0, 0, 1, jn, jo), gH.fillStyle = ae.kv, gH.fillRect(0, 0, this.g6, this.i5), gH.textBaseline = gI, gH.textAlign = gJ, gH.strokeStyle = ae.gK, gH.font = g1 + this.fontSize + g2, gH.strokeRect(0, 0, this.g6, this.i5);
			for (var dw = this.v0.length - 1; 0 <= dw; dw--) gH.setTransform(1, 0, 0, 1, jn + this.qY, jo + this.wS + dw * (this.wS + this.wT)), gH.fillStyle = this.colors[dw], gH.fillRect(0, 0, this.qZ, this.wT), this.g0 === dw && (gH.fillStyle = ae
				.l1, gH.fillRect(0, 0, this.qZ, this.wT)), gH.fillStyle = ae.gK, gH.fillText(this.v0[dw], this.qZ / 2, .54 * this.wT), gH.strokeRect(0, 0, this.qZ, this.wT);
			gH.setTransform(1, 0, 0, 1, 0, 0)
		}
}

function bU() {
	var wY, wZ, wa, g6, i5, font;

	function we(wf) {
		return wf < 10 ? "0" + wf : String(wf)
	}
	this.cl = function() {
		void 0 === g6 && this.resize(), this.setTime()
	}, this.resize = function() {
		g6 = Math.floor((di ? .53 : .36) * fy), i5 = Math.floor(.065 * g6), font = g1 + Math.floor(.9 * i5) + g2, wa--, this.setTime()
	}, this.iK = function() {
		this.setTime() && (b7.d6 = !0)
	}, this.setTime = function() {
		var dY = new Date,
			wc = dY.getUTCMinutes(),
			dY = dY.getUTCSeconds();
		return wZ = 3600 - 60 * wc - dY, wZ %= 900, wY = "Next Contest: " + we(Math.floor(wZ / 60)) + ":" + we(wZ % 60), wa !== (wa = 60 * wc + dY) && (g6 = n.measureText(wY, font), g6 += Math.floor(.4 * i5), !0)
	}, this.gG = function() {
		gH.lineWidth = 1 + Math.floor(i5 / 15), 7 === x.sb() && aL.wg() + 2 * gC > .5 * (gD - g6) ? gH.translate(jv - i5, Math.floor(aL.wg() + 2 * gC + g6)) : gH.translate(jv - i5, Math.floor(.5 * (gD + g6))), gH.rotate(-Math.PI / 2), gH
			.fillStyle = ae.gK, gH.fillRect(0, 0, g6, i5), gH.strokeStyle = ae.jz, gH.strokeRect(0, 0, g6, i5 + 10), gH.fillStyle = ae.jz, gH.font = font, gH.textBaseline = gI, gH.textAlign = gJ, gH.fillText(wY, Math.floor(g6 / 2), Math.floor(
				.59 * i5)), gH.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function ct() {
	this.wh = 10, this.wi = 50, this.wj = 50, this.wk = 8, this.wl = this.wi + this.wj, this.dx = this.wi + this.wj + this.wk, this.g6 = 72, this.wm = 0, this.wn = 0, this.uN = new Array(this.dx), this.wo = 8, this.wp = new Array(this.wi + this.wj),
		this.wq = new Array(this.wi + this.wj), this.ju = 0, this.jw = 0, this.zoom = 1, this.wr = .2, this.ue = 0, this.dy = null, this.ws = null, this.sS = !1, this.cl = function() {
			var dw, wt, wu;
			for (this.dy = new Array(this.dx), this.ws = new Array(this.dx), wt = a3.uO("emojis"), this.wv(), dw = this.ue = 0; dw < this.wi; dw++) this.ww(dw, dw, wt);
			for (wu = a3.uO("flags"), dw = 0; dw < this.wj; dw++) this.ww(dw, this.wi + dw, wu);
			this.wx(), this.uN[26] = this.wy(25, 2), this.wz()
		}, this.ww = function(dw, hn, iZ) {
			this.dy[hn] = !1, this.ws[hn] = 0;
			var gS = document.createElement("canvas"),
				qT = (gS.width = this.g6, gS.height = this.g6, gS.getContext("2d", {
					alpha: !0
				}));
			qT.clearRect(0, 0, this.g6, this.g6), 23 === hn ? qT.drawImage(i.uJ()[4].gS[1], 0, 0) : 36 === hn ? qT.drawImage(i.uJ()[0].gS[2], 0, 0) : 49 === hn ? qT.drawImage(i.uJ()[2].gS[1], 0, 0) : qT.drawImage(iZ, this.g6 * dw % (dw === hn ? this
				.wh * this.g6 : 4e3), dw === hn ? er(dw, this.wh) * this.g6 : 0, this.g6, this.g6, 0, 0, this.g6, this.g6), this.uN[hn] = gS
		}, this.wx = function() {
			this.uN[this.dx - 5] = this.uN[26], this.uN[this.dx - 4] = this.wy(this.dx - 5, 2), this.uN[this.dx - 1] = this.wy(this.dx - 5, 1), this.uN[this.dx - 8] = this.wy(this.dx - 4, 1), this.uN[this.dx - 3] = this.uN[39], this.uN[this.dx - 2] =
				this.wy(this.dx - 3, 1), this.uN[this.dx - 7] = this.wy(this.dx - 2, 1), this.uN[this.dx - 6] = this.wy(this.dx - 7, 1)
		}, this.wy = function(dw, x0) {
			var gS = document.createElement("canvas"),
				qT = (gS.width = this.g6, gS.height = this.g6, gS.getContext("2d", {
					alpha: !0
				}));
			return qT.clearRect(0, 0, this.g6, this.g6), qT.rotate(x0 * Math.PI / 2), qT.drawImage(this.uN[dw], 1 === x0 ? 0 : -this.g6, -this.g6), gS
		}, this.wz = function() {
			var dw, e4, gN = dl().split("");
			if (2 * gN.length !== this.dx) this.ue = 0;
			else {
				for (dw = 0; dw < this.dx; dw += 2) e4 = parseInt(gN[Math.floor(dw / 2)]), this.dy[dw] = e4 % 2 == 1, this.dy[dw + 1] = 1 < e4;
				this.x1()
			}
		}, this.x1 = function() {
			for (var dw = this.ue = 0; dw < this.dx; dw++) this.dy[dw] && (this.ws[this.ue++] = dw)
		}, this.uv = function() {
			8 === this.ue && this.ws[0] === this.wl && this.x1()
		}, this.x2 = function() {
			var dw;
			for (this.ue = this.wk, dw = 0; dw < this.wk; dw++) this.ws[dw] = this.wl + dw
		}, this.wv = function() {
			this.wm = Math.floor((di ? .075 : .0468) * fy), this.zoom = this.wm / this.g6, this.wn = (1 + this.wr) * this.wm
		}, this.show = function(gA, gB) {
			var dw, x4, x3, qY, js, jt;
			if (this.ue < 1) this.sS = !1;
			else {
				for (x3 = (x3 = Math.floor(jv / this.wn)) < 3 ? 3 : x3 > this.wo ? this.wo : x3, x4 = this.ue > x3 ? x3 : this.ue, x3 = 1 + er(this.ue - 1, x4), qY = Math.floor(x4 * this.wn), js = Math.floor(gA - qY / 2), js = (js = jv < js + qY ?
						jv - qY : js) < 0 ? 0 : js, jt = Math.floor(gB - this.wn / 2), gA = Math.floor(x3 * this.wn), jt = (jt = gD < jt + gA ? gD - gA : jt) < 0 ? 0 : jt, this.ju = js + qY, this.jw = jt + gA, dw = 0; dw < this.ue; dw++) this.wp[
					dw] = Math.floor(js + dw % x4 * this.wn), this.wq[dw] = Math.floor(jt + er(dw, x4) * this.wn);
				this.sS = !0
			}
		}, this.g9 = function(gA, gB, player) {
			return !!this.sS && (this.sS = !1, this.uu(gA, gB) && this.x6(gA, gB, player) && this.sS || (this.uv(), i.oL()), !0)
		}, this.uu = function(gA, gB) {
			return !(gA < this.wp[0] || gB < this.wq[0] || gA >= this.ju || gB >= this.jw)
		}, this.x6 = function(gA, gB, player) {
			for (var dw = this.ue - 1; 0 <= dw; dw--)
				if (gA >= this.wp[dw] && gB >= this.wq[dw] && gA <= this.wp[dw] + this.wn && gB <= this.wq[dw] + this.wn) return 39 === this.ws[dw] ? (this.x2(), this.show(gA, gB)) : (player === eu ? aa.fr.m4(this.ws[dw]) : aa.fl.mJ(this.ws[dw],
					player), this.x1()), !0;
			return !1
		}, this.x7 = function(dw) {
			return dw < 16 || 40 <= dw && dw < 47
		}, this.x8 = function(dw) {
			return dw >= this.wi && dw < this.wi + this.wj
		}, this.gG = function() {
			gH.imageSmoothingEnabled = !0;
			for (var gap = this.wr * this.wm / 2, dw = this.ue - 1; 0 <= dw; dw--) gH.setTransform(this.zoom, 0, 0, this.zoom, this.wp[dw] + gap, this.wq[dw] + gap), gH.drawImage(this.uN[this.ws[dw]], 0, 0);
			gH.imageSmoothingEnabled = !1, gH.setTransform(1, 0, 0, 1, 0, 0)
		}, this.x9 = function(jn, jo, m5) {
			gH.imageSmoothingEnabled = !0, gH.setTransform(this.zoom, 0, 0, this.zoom, jn, jo), gH.drawImage(this.uN[m5], 0, 0), gH.imageSmoothingEnabled = !1, gH.setTransform(1, 0, 0, 1, 0, 0)
		}
}
var nf, xF, gC, tB, sL, sM, gE, hG, hF, hH, y5, jU, a0E, k5, wQ, hA, i9, iC, i8, iB, fP, q9, ev, f0, fH, fI, fL, hB, ic, ib, s0, gH, dj, dk, xJ, fy, jv, gD, nV, di, qR, a1n, u5, u6, gI = "middle",
	xA = "bottom",
	gJ = "center",
	vo = "left",
	xB = "right",
	g1 = "bold ",
	xC = "italic ",
	xD = "normal ",
	g2 = "px " + settings.fontName,
	xE = [g1, xC + g1, g1],
	xG = ["wss://", "/s50/", "/s51/", "/s52/"];

function d3() {
	xH(), (gE = new xI).cl()
}

function xH() {
	tB = .0022 * (1 + .5 * di) * fy, gC = (gC = Math.floor((di ? .02 : .01152) * fy)) < 2 ? 2 : gC, nf = (nf = Math.floor((di ? .0114 : .01296) * fy)) < 2 ? 2 : nf, xF = (xF = Math.floor(.005 * xJ)) < 1 ? 1 : xF
}

function xK(qT, g6, i5) {
	qT.fillStyle = ae.gK, qT.fillRect(0, 0, g6, 1), qT.fillRect(0, i5 - 1, g6, 1), qT.fillRect(0, 0, 1, i5), qT.fillRect(g6 - 1, 0, 1, i5)
}

function bV() {
	var vK, xL, g5, i5, xM;

	function xS(dw) {
		var g6 = vK[dw].gS.width,
			qY = (vK[dw].qT.clearRect(0, 0, g6, i5), vK[dw].qT.fillStyle = 0 !== vK[dw].id ? "rgba(33,33,120,0.83)" : vK[dw].hg === f3 ? "rgba(88,88,88,0.83)" : vK[dw].hg < h9 ? "rgba(100,70,33,0.83)" : "rgba(33,100,80,0.83)", vK[dw].qT.fillRect(0,
				0, g6, i5), xK(vK[dw].qT, g6, i5), xL + 2 * i5 < g6 && (vK[dw].qT.fillRect(g6 - xL - i5, 0, 1, i5), vK[dw].qT.fillText(k5[vK[dw].hg], Math.floor((g6 - xL) / 2), Math.floor(.57 * i5))), 0 !== vK[dw].id ? 0 : i5);
		vK[dw].qT.fillText(ad.k3.k4(vK[dw].hh), Math.floor(g6 - xL / 2 - qY), Math.floor(.57 * i5)),
			function(dw, g6, qY) {
				vK[dw].qT.fillStyle = ae.kz;
				var xX = Math.floor(xL * vK[dw].hh / vK[dw].xY);
				vK[dw].qT.fillRect(Math.floor(g6 - xL - qY), i5 - xM, xX, xM)
			}(dw, g6, qY), 0 === vK[dw].id ? (xV(dw, g6), function(dw, g6) {
				vK[dw].qT.strokeStyle = ae.l9, vK[dw].qT.fillRect(i5, 0, 1, i5);
				g6 -= i5;
				vK[dw].qT.beginPath(), vK[dw].qT.moveTo(Math.floor(.3 * i5 + g6), Math.floor(i5 / 2)), vK[dw].qT.lineTo(Math.floor(i5 - .3 * i5 + 0 + g6), Math.floor(i5 / 2)), vK[dw].qT.stroke(), vK[dw].qT.beginPath(), vK[dw].qT.moveTo(Math
					.floor(i5 / 2 + g6), Math.floor(.3 * i5)), vK[dw].qT.lineTo(Math.floor(i5 / 2 + g6), Math.floor(i5 - .3 * i5 + 0)), vK[dw].qT.stroke()
			}(dw, g6)) : xV(dw, 2 * i5)
	}

	function xV(dw, g6) {
		vK[dw].qT.strokeStyle = vK[dw].xZ ? ae.l5 : ae.lJ, vK[dw].qT.fillStyle = ae.gK, vK[dw].qT.fillRect(g6 - i5, 0, 1, i5);
		var xa = Math.floor(i5 / 12),
			xa = (vK[dw].qT.lineWidth = xa < 3 ? 3 : xa, vK[dw].qT.lineCap = "round", .35);
		g6 = i5 + 1, vK[dw].qT.beginPath(), vK[dw].qT.moveTo(Math.floor(g6 - xa * i5 + 0), Math.floor(xa * i5)), vK[dw].qT.lineTo(Math.floor(g6 - i5 + xa * i5), Math.floor(i5 - xa * i5 + 0)), vK[dw].qT.stroke(), vK[dw].qT.beginPath(), vK[dw].qT
			.moveTo(Math.floor(g6 - i5 + xa * i5), Math.floor(xa * i5)), vK[dw].qT.lineTo(Math.floor(g6 - xa * i5 + 0), Math.floor(i5 - xa * i5 + 0)), vK[dw].qT.stroke()
	}

	function xl(ez) {
		for (var hh, dw = ez - 1; 0 <= dw; dw--) hh = a6.el(eu, dw), vK[dw].hh !== hh && (vK[dw].hh = hh, vK[dw].xY = hh > vK[dw].xY ? hh : vK[dw].xY, vK[dw].xT = !0)
	}

	function xR(xn) {
		xn.gS = document.createElement("canvas"), au.pG.font = g5;
		var g6 = xL;
		xn.hg < f3 && 0 === xn.id && (g6 += Math.floor(au.pG.measureText(k5[xn.hg] + "000").width)), g6 += i5, 0 === xn.id && (g6 += i5), xn.gS.width = g6, xn.gS.height = i5, xn.qT = xn.gS.getContext("2d", {
			alpha: !0
		}), xn.qT.font = g5, xn.qT.textBaseline = gI, xn.qT.textAlign = gJ
	}

	function xh(dw) {
		return r.xp() ? jv - vK[dw].gS.width - nf : r.jn
	}

	function xi(dw) {
		return Math.floor(2 * nf + (r.xp() ? t.i5 + nf : 0) + r.i5 + dw * (1.3 * i5))
	}
	this.cl = function() {
		vK = [], this.resize()
	}, this.resize = function() {
		g5 = k.g5, i5 = k.fontSize + 5, i5 = Math.floor(1.25 * i5), di && (i5 = Math.floor(1.25 * i5)), xM = Math.floor(.15 * i5), au.pG.font = g5, xL = Math.floor(au.pG.measureText("02 000 000 0000").width);
		for (var dw = vK.length - 1; 0 <= dw; dw--) xR(vK[dw]), xS(dw)
	}, this.jJ = function() {
		for (var dw = vK.length - 1; 0 <= dw; dw--) vK[dw].xT && (vK[dw].xT = !1, xS(dw))
	}, this.g9 = function(gA, jo) {
		if (2 !== jK && 0 !== hA[eu] && !fj && a4.uf(eu))
			for (var xc, xd, xe, xf = di ? i5 : 0, xg = di ? Math.floor(.15 * i5) : 0, dw = vK.length - 1; 0 <= dw; dw--)
				if (xc = xh(dw), xd = xi(dw), xe = vK[dw].gS.width, xd - xg <= jo && jo <= xd + i5 + xg) {
					if (xc - xf <= gA && gA <= xc + i5 + xf) return vK[dw].xZ || (vK[dw].xT = !0, vK[dw].xZ = !0, 0 === vK[dw].id && aa.fr.m2(vK[dw].hg)), !0;
					if (0 === vK[dw].id && xc + xe - i5 - xf <= gA && gA <= xc + xe + xf) return aa.fr.fs(o.ft(), vK[dw].hg), !0
				} return !1
	}, this.iK = function() {
		var ez;
		2 !== jK && 0 !== hA[eu] && !fj && a4.uf(eu) && (function(ez) {
			if (vK.length !== ez) return 1;
			for (var dw = ez - 1; 0 <= dw; dw--)
				if (vK[dw].id !== a6.ef(eu, dw) || vK[dw].hg !== a6.ek(eu, dw)) return 1;
			return
		}(ez = a6.ee(eu)) && function(ez) {
			var dw, id, hg, hx, hh, vX = [];
			loop: for (dw = 0; dw < ez; dw++) {
				for (id = a6.ef(eu, dw), hg = a6.ek(eu, dw), hx = 0; hx < vK.length; hx++)
					if (vK[hx].id === id && vK[hx].hg === hg) {
						vX.push(vK.splice(hx, 1)[0]);
						continue loop
					} hh = a6.el(eu, dw), xR(hh = {
					hg: hg,
					hh: hh,
					xY: hh,
					id: id,
					xT: !0,
					xZ: !1,
					gS: null,
					qT: null
				}), vX.push(hh)
			}
			vK = vX
		}(ez), xl(ez))
	}, this.xo = function(f6) {
		for (var ez = Math.min(vK.length, a6.ee(eu)), dw = 0; dw < ez; dw++)
			if (vK[dw].hg === f6) return void(vK = [])
	}, this.gG = function() {
		if (0 !== hA[eu] && a4.uf(eu) && !fj)
			for (var dw = vK.length - 1; 0 <= dw; dw--) gH.drawImage(vK[dw].gS, xh(dw), xi(dw))
	}
}

function bW() {
	var vK, ik, xq, xr, i5, g5, fontSize, xs, wY, xt, xu, xv, gS, qT, kH, xw;

	function y3() {
		gH.drawImage(gS, nf + (ha ? nf + b9.y4() : 0), y5 + 2 * nf)
	}

	function xx() {
		gS.width = vK[0].width + xu, gS.height = i5 + xu, (qT = gS.getContext("2d", {
				alpha: !0
			})).clearRect(0, 0, vK[0].width + xu, i5 + xu), qT.translate(Math.floor(xu / 2), Math.floor(xu / 2)), qT.lineWidth = xu, qT.fillStyle = 1 === vK[0].y2 ? ae.l2 : ae.kv, y6(), qT.fill(), qT.strokeStyle = 1 === vK[0].y2 ? ae.jz : ae.gK,
		y6(), qT.stroke(), qT.textAlign = gJ, qT.textBaseline = gI, qT.fillStyle = 1 === vK[0].y2 ? ae.jz : ae.gK, qT.font = g5[0], qT.fillText(wY[vK[0].y1], Math.floor(vK[0].width / 2), Math.floor(.72 * xs[0] * i5)), qT.font = g5[1], qT.fillText(vK[
				0].df, Math.floor(vK[0].width / 2), Math.floor((xs[0] + .48 * xs[1]) * i5))
	}

	function y6() {
		qT.beginPath(), qT.moveTo(xv, 0), qT.lineTo(vK[0].width - xv, 0), qT.lineTo(vK[0].width, xv), qT.lineTo(vK[0].width, i5 - xv), qT.lineTo(vK[0].width - xv, i5), qT.lineTo(xv, i5), qT.lineTo(0, i5 - xv), qT.lineTo(0, xv), qT.closePath()
	}
	this.cl = function() {
		ik = 4, xq = xr = kH = 0, vK = [], g5 = new Array(2), fontSize = new Array(2), xs = new Array(2), wY = ["YOU ERASED", "YOU WERE ERASED BY", "THE GAME WAS WON BY", "MAP:"], xs[0] = .3, xs[1] = .7, xt = new Array(4), gS = document
			.createElement("canvas"), xw = b7.dX + 2e3, this.resize()
	}, this.resize = function() {
		var dw, g6;
		for (i5 = Math.floor((di ? .0725 : .058) * fy), fontSize[0] = Math.floor(.85 * xs[0] * i5), fontSize[1] = Math.floor(.85 * xs[1] * i5), g5[0] = g1 + fontSize[0] + g2, g5[1] = g1 + fontSize[1] + g2, dw = xt.length - 1; 0 <= dw; dw--) xt[
			dw] = this.measureText(wY[dw] + "000", g5[0]);
		if (xu = Math.floor(1 + .05 * i5), xv = Math.floor(.2 * i5), 0 < vK.length) {
			for (dw = vK.length - 1; 0 <= dw; dw--) g6 = this.measureText(vK[dw].df + "00", g5[1]), vK[dw].width = g6 < xt[dw] ? xt[dw] : g6;
			xx()
		}
	}, this.iK = function() {
		0 !== ik && (4 === ik ? b7.dX > xw && (ik = 0, 1 === jK) && n.rc(au.ix.ph[au.pi].name, 3, 1, 9) : (1 === ik ? (0 === xq && (xx(), xq = 1e-4), 1 <= (xq += .002 * (b7.dX - kH)) && (xr = 0, ik = 2, xq = 1), b7.d6 = !0) : 2 === ik ? ((xr += (
			b7.dX - kH) / 1e3) > vK[0].kM || 1 < xr && 1 < vK.length) && (ik = 3) : 3 === ik && ((xq -= .002 * (b7.dX - kH)) <= 0 && (xq = 0, vK.shift(), ik = 0 < vK.length ? 1 : 0), b7.d6 = !0), kH = b7.dX))
	}, this.measureText = function(df, g5) {
		return gH.font = g5, Math.floor(gH.measureText(df).width)
	}, this.hd = function(y0, dw) {
		this.rc(k5[y0], dw, 1, 0 === dw ? 3 : 7)
	}, this.rc = function(df, y1, y2, kM) {
		var g6 = (g6 = this.measureText(df + "00", g5[1])) < xt[y1] ? xt[y1] : g6;
		vK.push({
			df: df,
			width: g6,
			y1: y1,
			y2: y2,
			kM: kM
		}), 0 === ik && (xq = 0, ik = 1, kH = b7.dX)
	}, this.gG = function() {
		0 !== ik && 0 !== xq && (xq < 1 ? (gH.globalAlpha = xq, y3(), gH.globalAlpha = 1) : y3())
	}
}

function c8() {
	var i5, gS, qT, y7, y8, y9, yA, yB, xT, yC, yD, yE, yF, yG;

	function g3() {
		var g6 = aN.g6,
			p7 = (xT = !1, qS(qT, g6, i5), Math.floor(g6 / 2));
		1 === y8 ? (qT.fillStyle = ae.lB, qT.fillRect(p7, 0, p7, i5)) : -1 === y8 && (qT.fillStyle = ae.lM, qT.fillRect(0, 0, p7, i5)), qU(qT, g6, i5, 2);
		var p7 = (p7 = Math.floor(.25 * i5)) < 2 ? 2 : p7,
			wG = (qT.fillStyle = ae.l3, Math.floor((i5 - 4) * y9[1] / yA[1]));
		0 < wG && qT.fillRect(2, i5 - 2 - wG, p7, wG), 0 < (wG = Math.floor((i5 - 4) * y9[0] / yA[0])) && qT.fillRect(g6 - 2 - p7, i5 - 2 - wG, p7, wG);
		p7 = (p7 = Math.floor(i5 / 8)) < 2 ? 2 : p7;
		qW(qT, Math.floor(.4 * i5), 0, i5, p7, .5, !1), qW(qT, Math.floor(g6 - 1.4 * i5), 0, i5, p7, .5, !0), qT.drawImage(y7, Math.floor((g6 - y7.width) / 2), 3)
	}

	function yI() {
		xT = !0, yC = 140, y8 = 0, yB = [], aN.sS = !1, k.rC(247, 0), y9[0] = y9[1] = 0
	}

	function gF() {
		return o.vi(k.ve()) ? o.jo - i5 - nf : af.vi(k.vh()) ? af.gF() - i5 - nf : dk - i5 - aR.vj() * nf
	}
	this.sS = !1, this.g6 = 0, this.cl = function() {
		yE = yF = 0, this.sS = !1, xT = yG = !1, yC = 140, y9 = [y8 = 0, 0], yA = [1, 1], yB = [], yD = new Uint32Array(10), this.resize()
	}, this.resize = function() {
		i5 = o.i5, this.g6 = 4 * i5, this.yH(), (gS = document.createElement("canvas")).width = this.g6, gS.height = i5, qT = gS.getContext("2d", {
			alpha: !0
		}), g3()
	}, this.jJ = function() {
		xT && g3()
	}, this.yH = function() {
		var gT, xu, p7, wS = (wS = i5 - 6) < 6 ? 6 : wS;
		void 0 !== y7 && y7.width === wS || ((y7 = document.createElement("canvas")).width = wS, y7.height = wS, (gT = y7.getContext("2d", {
				alpha: !0
			})).clearRect(0, 0, wS, wS), xu = Math.floor(wS / 8), gT.lineWidth = xu = xu < 1 ? 1 : xu, gT.strokeStyle = ae.gK, p7 = Math.floor(wS / 2), wS = Math.floor((wS - xu) / 2), gT.beginPath(), gT.arc(p7, p7, wS, 0, 2 * Math.PI), gT
			.moveTo(p7, p7 - wS), gT.lineTo(p7, p7 + wS), gT.moveTo(p7 + Math.cos(.78 * Math.PI) * wS, p7 + Math.cos(.28 * Math.PI) * wS), gT.lineTo(p7, p7), gT.lineTo(p7 + Math.cos(.22 * Math.PI) * wS, p7 + Math.cos(1.72 * Math.PI) * wS), gT
			.stroke())
	}, this.g9 = function(jn, jo) {
		var jt;
		return !(jn < dj - this.g6 - nf || jo < (jt = gF()) || jt + i5 < jo || (fj || aa.fr.m8(jn > dj - nf - this.g6 / 2 ? 1 : 0), 0))
	}, this.iK = function() {
		if (0 < yF) 0 === --yF && yI();
		else if (this.sS) 270 == --yC && 2 <= yE && function() {
			var dw;
			for (dw = ib - 1; 0 <= dw; dw--)
				if (a4.uf(ic[dw])) return;
			return 1
		}() && (xT = !0, y9[0] += yA[0]), 180 === yC && 3 * y9[0] < yA[0] ? yI() : y9[0] >= yA[0] ? yG ? at.r7.rA() : at.r7.rF(-1) : y9[1] >= yA[1] ? yF = 4 : yC <= 0 && yI();
		else if (function() {
				var dw;
				for (dw = 9; 0 <= dw; dw--) 12 < Math.abs(yD[dw] - fP[jU[dw]]) && (yC = 140), yD[dw] = fP[jU[dw]];
				if (--yC <= 0) return 1;
				return
			}()) {
			(yG = yL()) && k.w5(), this.sS = !0, yC = 360;
			var dw, dY = 0;
			for (dw = ib - 1; 0 <= dw; dw--) a4.uf(ic[dw]) && (dY += fP[ic[dw]]);
			yA[0] = vg(er(3 * dY, 5), 1), ha && 9 !== iz && (yA[0] = yN(vg(er(dY * (100 - er(100 * b9.ra(), tm)), 100), 1), yA[0])), yA[1] = vg(dY - yA[0], 1), yE++
		}
	}, this.rM = function() {
		this.sS && y9[0] < yA[0] && yI()
	}, this.n8 = function(player, yP) {
		var dw, dY;
		if (this.sS) {
			for (dw = yB.length - 1; 0 <= dw; dw--)
				if (yB[dw] === player) return;
			yB.push(player), xT = !0, dY = j1 ? yA[0] : fP[player], yP ? y9[0] += dY : y9[1] += dY, player === eu && (y8 = yP ? 1 : -1)
		}
	}, this.gG = function() {
		var jo;
		this.sS && (jo = gF(), gH.drawImage(gS, dj - this.g6 - nf, jo))
	}
}

function bX() {
	var g6, jn, yQ, gS, qT, sS, hE, yR, g5, xT, yS = 11 / 12;

	function yU() {
		var xX = Math.floor(hE * (g6 - 2 * yQ)),
			yX = 1 + Math.floor(.0625 * o.i5),
			yY = 1 + Math.floor(.3 * o.i5),
			wS = Math.floor(.55 * o.i5);
		qT.clearRect(0, 0, g6, o.i5), qT.fillStyle = ae.ku, qT.fillRect(0, 0, yQ, o.i5), qT.fillRect(yQ + xX, 0, g6 - yQ - xX, o.i5), qT.fillStyle = hE < 1 / 3 ? "rgba(" + Math.floor(3 * hE * 130) + ",130,0,0.85)" : hE < 2 / 3 ? "rgba(130," + (130 -
				Math.floor(3 * (hE - 1 / 3) * 130)) + ",0,0.85)" : "rgba(130,0," + Math.floor(3 * (hE - 2 / 3) * 130) + ",0.85)", qT.fillRect(yQ, 0, xX, o.i5), qT.fillStyle = ae.gK, qT.fillRect(0, 0, g6, 1), qT.fillRect(0, o.i5 - 1, g6, 1), qT
			.fillRect(0, 0, 1, o.i5), qT.fillRect(yQ, 0, 1, o.i5), qT.fillRect(yQ + xX, 0, 1, o.i5), qT.fillRect(g6 - yQ, 0, 1, o.i5), qT.fillRect(g6 - 1, 0, 1, o.i5), qT.fillRect(Math.floor(.25 * o.i5) + yY, Math.floor((o.i5 - yX) / 2), o.i5 - 2 *
				yY, yX), qT.fillRect(Math.floor(g6 - 1.25 * o.i5) + yY, Math.floor((o.i5 - yX) / 2), o.i5 - 2 * yY - yY % 2, yX), qT.fillRect(Math.floor(g6 - 1.25 * o.i5) + Math.floor((o.i5 - yX) / 2), yY, yX, o.i5 - 2 * yY - yY % 2), yR = ad.fl.hD(
				eu, o.ft()), qT.fillText(ad.k3.k4(yR) + " (" + ad.k3.tZ(100 * hE, 0) + ")", Math.floor(.5 * g6), wS)
	}
	this.setAbsolutePercentage = function(newPercentage) {
		hE = newPercentage;
	};
	keybindFunctions.setAbsolute = this.setAbsolutePercentage;
	keybindFunctions.setRelative = (arg1) => o.si(arg1);

	function yc(fw) {
		return !(1 < fw && 1 === hE || (1 < fw && fw * hE - hE < 1 / 1024 ? fw = (hE + 1 / 1024) / hE : fw < 1 && hE - fw * hE < 1 / 1024 && (fw = (hE - 1 / 1024) / hE), hE = an.sx(hE * fw, 1 / 1024, 1), yU(), 0))
	}

	function yd(gA) {
		return hE !== (hE = an.sx((gA - jn - yQ) / (g6 - 2 * yQ), 1 / 1024, 1)) && (yU(), !0)
	}
	this.jo = 0, this.sT = !1, this.cl = function() {
		sS = !kQ && !fj, xT = !1, hE = .5, yR = 0, this.sT = !1, this.resize()
	}, this.resize = function() {
		di && dj < .8 * dk ? (this.i5 = Math.floor(.0536 * fy), g6 = dj - 4 * nf - this.i5) : (g6 = Math.floor((di ? .65 : .389) * fy), g6 += 12 - g6 % 12, this.i5 = Math.floor(g6 / 12)), yQ = Math.floor(3 * this.i5 / 2), g5 = g1 + Math.floor(
			.5 * this.i5) + g2, (gS = document.createElement("canvas")).width = g6, gS.height = this.i5, (qT = gS.getContext("2d", {
			alpha: !0
		})).font = g5, qT.textBaseline = gI, ad.kp.textAlign(qT, 1), this.yT(), yU()
	}, this.yT = function() {
		jn = di && dj < .8 * dk ? this.i5 + 3 * nf : Math.floor((jv - g6) / 2), this.jo = gD - this.i5 - aR.vj() * nf
	}, this.jJ = function() {
		xT && (xT = !1, yU())
	}, this.sS = function() {
		return !(!sS || j.fk && jn < Math.floor(nf + 5.5 * this.i5))
	}, this.vi = function(g7) {
		return !!this.sS() && dj - g7 - nf < jn + g6
	}, this.dU = function() {
		sS = !fj
	}, this.yI = function() {
		sS = !1
	}, this.ft = function() {
		return an.sx(Math.floor(1024 * hE + .5) - 1, 0, 1023)
	}, this.sZ = function(gA, gB) {
		return this.sS() && jn < gA && gA < jn + g6 && gB > this.jo
	}, this.g9 = function(gA, gB) {
		return !!this.sS() && !!o.sZ(gA, gB) && (p.kU = !1, function(ux, gA, gB) {
			if (function(gA, gB) {
					return jn < gA && gA < jn + yQ && gB > o.jo
				}(gA, gB)) return yc(yS);
			if (function(gA, gB) {
					return jn + g6 - yQ < gA && gA < jn + g6 && gB > o.jo
				}(gA, gB)) return yc(1 / yS);
			return ux.sT = !0, yd(gA)
		}(this, gA, gB) && (b7.d6 = !0), !0)
	}, this.si = function(kb) {
		0 !== jK && this.sS() && yc(kb) && (b7.d6 = !0)
	}, this.s4 = function(deltaY) {
		var kb;
		return !(0 === deltaY || !this.sS()) && yc(kb = 0 < deltaY ? (kb = 400 / (400 + deltaY)) < yS ? yS : kb : 1 / yS < (kb = (400 - deltaY) / 400) ? 1 / yS : kb)
	}, this.s1 = function(gA, gB) {
		return !!this.sT && yd(gA)
	}, this.sV = function() {
		this.sT = !1
	}, this.iK = function() {
		this.sS() && yR !== ad.fl.hD(eu, this.ft()) && (xT = !0)
	}, this.gG = function() {
		this.sS() && gH.drawImage(gS, jn, this.jo)
	}
}

function cO() {
	var gS, qT, ye, font, yf = 0,
		yg = !1,
		yh = [10, 5, 3, 2, 1.5, 1, .75, .5, .25],
		yi = 5;

	function wX() {
		if (yg) {
			var dw, ez = yh.length,
				wS = Math.floor(.5 * ye.i5),
				i5 = ez * wS,
				jn = Math.floor(Math.floor(ye.jn) + .3 * ye.g6 - .5),
				jo = Math.floor(Math.floor(ye.jo) - i5),
				g6 = Math.floor(.4 * ye.g6 + 2.5);
			for (gH.fillStyle = ae.ku, gH.fillRect(jn, jo, g6, i5), gH.fillStyle = ae.lG, gH.fillRect(jn, jo + yi * wS, g6, wS), gH.fillStyle = ae.gK, gH.fillRect(jn, jo, 2, i5), gH.fillRect(jn, jo, g6, 2), gH.fillRect(jn + g6 - 2, jo, 2, i5), dw =
				1; dw < ez; dw++) gH.fillRect(jn, jo + dw * wS, g6, 2);
			for (gH.fillStyle = ae.gK, ad.kp.textAlign(gH, 1), ad.kp.textBaseline(gH, 1), gH.font = ad.kp.oK(.6 * wS, 0), jn += .5 * g6, dw = 0; dw < ez; dw++) gH.fillText(yv(dw), jn, jo + (dw + .6) * wS)
		}
		gH.drawImage(gS, Math.floor(ye.jn), Math.floor(ye.jo))
	}

	function g3(ux) {
		var jn, js, jt, wS;
		qT.clearRect(0, 0, Math.floor(ye.g6), Math.floor(ye.i5)), qT.fillStyle = ae.ku, qT.fillRect(0, 0, Math.floor(ye.g6), Math.floor(ye.i5)), kT && (qT.fillStyle = ae.lG, qT.fillRect(0, 0, Math.floor(.3 * ye.g6), Math.floor(ye.i5))), qT
			.fillStyle = ae.gK, qT.fillText("Hide UI", .15 * ye.g6, .5 * ye.i5), qT.fillRect(Math.floor(.3 * ye.g6 - .5), 0, 2, Math.floor(ye.i5)), jn = .5 * ye.g6, qT.fillText("Replay Speed", jn, .31 * ye.i5), qT.fillText(yv(yi), jn, .69 * ye.i5),
			qT.fillRect(Math.floor(.7 * ye.g6 - .5), 0, 2, Math.floor(ye.i5)), ux.v5 ? (jn = Math.floor(.02 * ye.g6), ux = Math.floor(.025 * ye.g6), js = Math.floor(.85 * ye.g6 - jn - .5 * ux), jt = Math.floor(.25 * ye.i5), wS = Math.floor(ye.i5) -
				2 * jt, qT.fillRect(js, jt, jn, wS), qT.fillRect(js + jn + ux, jt, jn, wS)) : function() {
				var g6 = Math.floor(.46 * ye.i5),
					i5 = Math.floor(.23 * ye.i5),
					jn = Math.floor(.85 * ye.g6 - .5 * g6 + g6 / 12),
					jo = Math.floor(.5 * ye.i5 - i5);
				qT.beginPath(), qT.moveTo(jn, jo), qT.lineTo(jn + g6, jo + i5), qT.lineTo(jn, jo + (i5 << 1)), qT.fill()
			}(), qT.fillRect(0, 0, Math.floor(ye.g6), 2), qT.fillRect(0, 0, 2, Math.floor(ye.i5)), qT.fillRect(0, Math.floor(ye.i5) - 2, Math.floor(ye.g6), 2), qT.fillRect(Math.floor(ye.g6 - 2), 0, 2, Math.floor(ye.i5))
	}

	function yv(dw) {
		return 5 === dw ? "Normal" : "" + yh[dw]
	}
	this.v5 = !1, this.cl = function() {
		fj && (yi = 5, this.v5 = !1, yg = !1, ye = new nc([.3, .3 / 6], [.5, 1]), this.resize())
	}, this.yj = function() {
		return yh[yi]
	}, this.gF = function() {
		return ye.jo
	}, this.vi = function(g7) {
		return !!fj && ye.jn + ye.g6 > dj - g7 - nf
	}, this.resize = function() {
		fj && (ye.resize(), ye.jo -= (aR.vj() - 1) * nf, font = ad.kp.oK(.3 * ye.i5, 0), (gS = document.createElement("canvas")).width = Math.floor(ye.g6), gS.height = Math.floor(ye.i5), (qT = gS.getContext("2d", {
			alpha: !0
		})).font = font, ad.kp.textAlign(qT, 1), ad.kp.textBaseline(qT, 1), g3(this))
	}, this.se = function(yk) {
		yk !== kT && (kT = yk, b9.resize(), b7.d6 = !0, fj) && (yf = b7.dX + 2e3, g3(this))
	}, this.g9 = function(jn, jo) {
		if (!fj) return !1;
		if (jn < ye.jn || jo < ye.jo || jn > ye.jn + ye.g6) return yg && function(ux, jn, jo) {
			var ez = yh.length,
				wS = Math.floor(.5 * ye.i5),
				i5 = ez * wS,
				js = Math.floor(Math.floor(ye.jn) + .3 * ye.g6 - .5),
				i5 = Math.floor(Math.floor(ye.jo) - i5),
				g6 = Math.floor(.4 * ye.g6 + 2.5);
			return yg = !1, b7.d6 = !0, jn < js || js + g6 < jn || jo < i5 || (yi = yn(0, Math.floor((jo - i5) / wS), ez - 1), g3(ux)), !0
		}(this, jn, jo);
		if ((jn -= ye.jn) < .3 * ye.g6) yg = !1, this.se(!kT);
		else {
			if (jn < .7 * ye.g6) return yg = !yg, b7.d6 = !0;
			this.sg(!1)
		}
		return !0
	}, this.sg = function(ym) {
		2 === jK ? (this.se(!1), ac.show()) : (yg = !1, this.v5 = !this.v5, this.v5 ? j.fk ? j.sf() : e0(1) : ym || j.v6(), b7.d6 = !0, g3(this))
	}, this.sN = function(jn, jo) {
		return !!kT && (j.g9(jn, jo) || (fj ? ((b7.dX > yf || !this.g9(jn, jo)) && p.g9(jn, jo), b7.d6 = !0, yf = b7.dX + 2e3) : p.g9(jn, jo)), !0)
	}, this.iK = function() {
		fj && kT && b7.dX > yf - 1e3 && b7.dX < yf && (b7.d6 = !0)
	}, this.rQ = function() {
		fj && (this.v5 = !1, b7.d6 = !0, g3(this))
	}, this.gG = function() {
		if (fj) {
			if (kT) {
				if (b7.dX > yf) return;
				if (b7.dX > yf - 1e3) return gH.globalAlpha = yn(0, (1e3 - (b7.dX - (yf - 1e3))) / 1e3, 1), wX(), void(gH.globalAlpha = 1)
			}
			wX()
		}
	}
}

function cL() {
	var ye, oW, t9, wS;
	this.sS = !1, this.oY = !1, this.vH = function() {
		return !aX.iw && au.pi !== au.yw() && (fj || 2 === jK)
	}, this.show = function(yx = "") {
		this.sS = !0, ye || (ye = new nc([.55, .35], [.5, .5]), (oW = new oV).cl()), this.resize(),
			function(yx) {
				0 === jK ? oW.oa(yx) : (ab.mp.z1.length || (ab.mp.z1 = ab.z4.r1()), oW.oa(ab.z5(ab.mp.z1)))
			}(yx), oW.show(), b7.d6 = !0, z.dU(!1)
	}, this.oL = function() {
		this.sS && (this.sS = !1, this.oY = !1, oW.oL(), b7.d6 = !0, 0 === jK && ak.clear(), 0 === x.sb()) && z.dU(!0)
	}, this.resize = function() {
		this.sS && (ye.resize(), t9 = .03 * ye.i5, wS = .2 * ye.i5, oW.resize(ye.jn + t9, ye.jo + wS + t9, ye.g6 - 2 * t9, ye.i5 - 2 * (wS + t9)))
	}, this.g9 = function(jn, jo) {
		return !!this.sS && (jn < ye.jn || jo < ye.jo || jn > ye.jn + ye.g6 || jo > ye.jo + ye.i5 ? 2 !== j.g9(jn, jo) && this.oL() : jo < ye.jo + ye.i5 - wS ? jn > ye.jn + ye.g6 - wS && jo < ye.jo + wS && this.oL() : (jn -= ye.jn) < .25 * ye
			.g6 ? oW.oc() : jn < .5 * ye.g6 ? oW.od() : jn < .75 * ye.g6 ? oW.clear() : (jo = this, jn = ab.z0(oW.ob()), jo.oL(), (0 < jn.length && jn === ab.mp.z1 || ab.z3.p5(jn)) && ab.z2()), !0)
	}, this.gG = function() {
		var dw;
		if (this.sS)
			for (ad.kp.textAlign(gH, 1), gH.fillStyle = ae.lP, gH.fillRect(ye.jn, ye.jo, ye.g6, wS), gH.fillStyle = ae.ku, gH.fillRect(ye.jn, ye.jo + wS, ye.g6, ye.i5 - wS), gH.fillStyle = ae.gK, gH.fillRect(ye.jn, ye.jo, 2, ye.i5), gH.fillRect(
					ye.jn, ye.jo, ye.g6, 2), gH.fillRect(ye.jn + ye.g6 - 2, ye.jo, 2, ye.i5), gH.fillRect(ye.jn, ye.jo + ye.i5 - 2, ye.g6, 2), gH.fillRect(ye.jn + 1, ye.jo + wS, ye.g6 - 2, 2), gH.fillRect(ye.jn + 1, ye.jo + ye.i5 - wS, ye.g6 - 2,
					2), gH.font = g1 + Math.floor(.39 * wS) + g2, gH.fillText("Replay", ye.jn + .5 * ye.g6, ye.jo + .55 * wS), j.vI(ye.jn + ye.g6 - .725 * wS, ye.jo + .275 * wS, .45 * wS), gH.setTransform(1, 0, 0, 1, 0, 0), gH.font = ad.kp.oK(
					.3 * wS, 0), gH.fillText("Select All", ye.jn + .125 * ye.g6, ye.jo + ye.i5 - .48 * wS), gH.fillText("Copy", ye.jn + .375 * ye.g6, ye.jo + ye.i5 - .48 * wS), gH.fillText("Clear", ye.jn + .625 * ye.g6, ye.jo + ye.i5 - .48 * wS),
				gH.fillText("Launch", ye.jn + .875 * ye.g6, ye.jo + ye.i5 - .48 * wS), dw = 1; dw < 4; dw++) gH.fillRect(ye.jn + .25 * dw * ye.g6 - 1, ye.jo + ye.i5 - wS + 1, 2, wS - 2)
	}
}

function bY() {
	var z7, z8, g6, jn, jo, z9, zA;
	this.cl = function() {
		z7 = new Array(2), z8 = new Array(2), this.kU = !1, zA = z9 = hH = hF = 0, hG = 1, this.resize()
	}, this.resize = function() {
		g6 = (g6 = Math.floor((di ? .072 : .0502) * fy)) < 8 ? 8 : g6;
		for (var dw = 1; 0 <= dw; dw--) z7[dw] = document.createElement("canvas"), z7[dw].width = g6, z7[dw].height = g6, z8[dw] = z7[dw].getContext("2d", {
			alpha: !0
		});
		this.yT(),
			function() {
				for (var zQ = Math.floor(1 + g6 / 20), dw = 1; 0 <= dw; dw--) z8[dw].clearRect(0, 0, g6, g6), z8[dw].fillStyle = ae.kr, z8[dw].beginPath(), z8[dw].arc(g6 / 2, g6 / 2, g6 / 2 - zQ, 0, 2 * Math.PI), z8[dw].fill(), z8[dw].lineWidth =
					zQ, z8[dw].fillStyle = ae.gK, z8[dw].strokeStyle = ae.gK, z8[dw].beginPath(), z8[dw].arc(g6 / 2, g6 / 2, g6 / 2 - zQ, 0, 2 * Math.PI), z8[dw].stroke(), qW(z8[dw], 0, 0, g6, zQ, .3, 0 === dw)
			}()
	}, this.jx = function() {
		return -hF / hG
	}, this.gF = function() {
		return -hH / hG
	}, this.kd = function(zE, gy) {
		hF = hG * zE - gy
	}, this.ke = function(zF, gz) {
		hH = hG * zF - gz
	}, this.g9 = function(zD, vk) {
		return kT || ! function(zD, vk) {
			return Math.pow(zD - (jn + g6 / 2), 2) + Math.pow(vk - (jo + g6 / 2), 2) < g6 * g6 / 4 || Math.pow(zD - (jn + g6 / 2), 2) + Math.pow(vk - (jo + 2 * g6), 2) < g6 * g6 / 4
		}(zD, vk) || aR.k1.zG ? (f.kg() && (this.kU = !0, z9 = zD, zA = vk), !1) : vk < jo + 1.25 * g6 ? this.s4(Math.floor(jv / 2), Math.floor(gD / 2), -200) : this.s4(Math.floor(jv / 2), Math.floor(gD / 2), 200)
	}, this.s1 = function(zD, vk) {
		var zH, zI, h1, h4;
		return !f.kg() || (zH = hF, zI = hH, hF += h1 = z9 - zD, hH += h4 = zA - vk, a8.s1(h1, h4), this.zJ(), z9 = zD, zA = vk, zH !== hF) || zI !== hH
	}, this.s4 = function(gA, gB, deltaY) {
		var kb;
		if (f.kg()) {
			if (0 < deltaY) kb = (kb = 500 / (500 + deltaY)) < .5 ? .5 : kb;
			else {
				if (!(deltaY < 0)) return !1;
				kb = 2 < (kb = (500 - deltaY) / 500) ? 2 : kb
			}
			this.zK(gA, gB, kb), b7.d6 = !0
		}
		return !0
	}, this.zK = function(jn, jo, gu) {
		var fw;
		gu = fw = (fw = 1024 < (fw = gu) * hG ? 1024 / hG : fw) * hG < .125 ? .125 / hG : fw, a8.zoom(gu, jn, jo),
			function(fw, gA, gB) {
				hG *= fw, hF = (hF + gA) * fw - gA, hH = (hH + gB) * fw - gB, p.zJ()
			}(gu, jn, jo)
	}, this.zJ = function() {
		var zN = dj / 16,
			gb = 0,
			zO = dk / 16,
			gd = 0;
		hF < zN - dj && (gb = zN - dj - hF), hF > hG * au.eZ - zN && (gb = hG * au.eZ - zN - hF), hH < zO - dk && (gd = zO - dk - hH), hH > hG * au.ea - zO && (gd = hG * au.ea - zO - hH), hF += gb, hH += gd, b1.kf(), a8.zP(gb, gd)
	}, this.yT = function() {
		jn = jv - g6 - nf, jo = Math.floor(gD / 2 - 1.25 * g6)
	}, this.gG = function() {
		aR.k1.zG || (gH.drawImage(z7[0], jn, jo), gH.drawImage(z7[1], jn, Math.floor(jo + 3 * g6 / 2)))
	}
}

function bZ() {
	var eD, pl, zR, zS, gap, zT, zU, zV, zW, zX, g5, zY, zZ, za, zb, xX, zc, zd, ze;

	function zi() {
		zS = Math.floor(.2 * (di ? .07 : .035) * fy), zS = vg(di ? 3 : 1, zS);
		var zn = dj / (eD.length + gap);
		zS = zS < zn ? zn : zS, xX = Math.floor((1 - gap) * zS), pl = 0, zo()
	}

	function zo() {
		pl = (pl = pl < -20 ? -20 : pl) > (eD.length - 15) * zS ? (eD.length - 15) * zS : pl, zU = Math.floor(pl / zS), zV = (zV = zU + Math.floor(jv / zS)) > eD.length - 1 ? eD.length - 1 : zV, zU = (zU = zV < zU ? zV : zU) < 0 ? 0 : zU;
		var p7 = zV;
		zT = zR / eD[p7];
		for (var dw = zV - 1; zU <= dw; dw--) eD[dw] > eD[p7] && (p7 = dw, zT = zR / Math.pow(eD[dw], zb))
	}

	function zr(jn) {
		jn = Math.floor((pl + jv - jn - gap * zS) / zS);
		return (jn = jn < -1 ? -1 : -1 === jn ? 0 : jn > eD.length - 1 ? -1 : jn) !== zW && (zW = jn, -1 === zc && 0 === zW && za && (zc = setInterval(zs, 100)), 1)
	}

	function zt(dw) {
		var xM = Math.floor(zT * Math.pow(eD[dw], zb));
		gH.fillRect(pl + jv - (dw + 1) * zS, gD - xM, xX, xM)
	}

	function zs() {
		var f6;
		0 !== (zW = 8 === x.sb() ? -1 : zW) ? (zd = (new Date).getTime(), clearInterval(zc), zc = -1) : (f6 = eD[1] / 864e3, -1 !== zd && (f6 += ((new Date).getTime() - zd) * eD[1] / 864e5, zd = -1), 0 < f6 && (eD[0] += Math.floor(f6), b7.d6 = !0))
	}
	this.cl = function() {
		za = !(zd = zc = -1), zW = -(zb = 1), this.zf = !1, zZ = 0, zY = new Date, pl = 0, gap = .3, (ze = []).push({
			w9: "Plateau A",
			ez: 0,
			dG: 57
		}), ze.push({
			w9: "Max A",
			ez: 1,
			dG: 1
		}), ze.push({
			w9: "Black Friday",
			ez: 15,
			dG: 15
		}), ze.push({
			w9: "Max B",
			ez: 19,
			dG: 19
		}), ze.push({
			w9: "Max C",
			ez: 44,
			dG: 44
		}), ze.push({
			w9: "First Android Version",
			ez: 58,
			dG: 58
		}), ze.push({
			w9: "Max D",
			ez: 67,
			dG: 67
		}), ze.push({
			w9: "The iFrame Explosion",
			ez: 98,
			dG: 99
		}), ze.push({
			w9: "The 155-Day Uptrend",
			ez: 58,
			dG: 213
		}), ze.push({
			w9: "Max E",
			ez: 213,
			dG: 213
		}), ze.push({
			w9: "Plateau B",
			ez: 214,
			dG: 259
		}), ze.push({
			w9: "Turbulent Times",
			ez: 260,
			dG: 344
		}), ze.push({
			w9: "Max F",
			ez: 262,
			dG: 262
		}), ze.push({
			w9: "Max G",
			ez: 282,
			dG: 282
		}), ze.push({
			w9: "Max H",
			ez: 333,
			dG: 333
		}), ze.push({
			w9: "The 19-Day Downtrend",
			ez: 283,
			dG: 301
		}), ze.push({
			w9: "Plateau C",
			ez: 345,
			dG: 385
		}), ze.push({
			w9: "The Alliance Ascent",
			ez: 386,
			dG: 395
		}), ze.push({
			w9: "Max I",
			ez: 395,
			dG: 395
		}), ze.push({
			w9: "First iOS Version",
			ez: 411,
			dG: 411
		}), ze.push({
			w9: "Plateau D",
			ez: 396,
			dG: 453
		}), ze.push({
			w9: "The TikTok Revolution",
			ez: 454,
			dG: 470
		}), ze.push({
			w9: "Max J",
			ez: 456,
			dG: 456
		}), ze.push({
			w9: "Max K",
			ez: 472,
			dG: 472
		}), ze.push({
			w9: "Max L",
			ez: 478,
			dG: 478
		}), ze.push({
			w9: "YT Drew",
			ez: 471,
			dG: 485
		}), ze.push({
			w9: "Plateau E",
			ez: 485,
			dG: 600
		}), ze.push({
			w9: "Uptrend A",
			ez: 600,
			dG: 613
		}), ze.push({
			w9: "Max M",
			ez: 613,
			dG: 613
		}), ze.push({
			w9: "Downtrend A",
			ez: 614,
			dG: 635
		}), ze.push({
			w9: "Plateau F",
			ez: 636,
			dG: 737
		}), ze.push({
			w9: "End of Record",
			ez: 738,
			dG: 738
		}), eD = [208644377, 208644377, 208644377, 206964709, 205156594, 250680803, 249089835, 234476552, 252346209, 263196406, 270821533, 291436400, 294907103, 288866179, 297960890, 310165928, 323215738, 326005712, 312078872, 282668674,
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
		], this.resize(), aP.jA.zh(0, 0)
	}, this.resize = function() {
		zR = Math.floor(.15 * dk), zX = Math.floor((di ? .018 : .0137) * fy), g5 = g1 + (zX = zX < 2 ? 2 : zX) + g2, zi()
	}, this.zj = function() {
		za || aP.lm.zk()
	}, this.zl = function(zm) {
		var dw;
		for (za = !0, dw = 0; dw < zm.length; dw++) eD.unshift(zm[dw]);
		zi(), b7.d6 = !0
	}, this.zp = function() {
		zo()
	}, this.s1 = function(jn, jo) {
		gD - .6 * zR < jo ? this.zf ? jn !== zZ && (pl += jn - zZ, zZ = jn, zo(), zr(jn), this.zf = -1 !== zW, b7.d6 = !0) : zr(jn) && (b7.d6 = !0) : this.oo()
	}, this.oo = function() {
		-1 !== zW && (this.zf = !1, zW = -1, b7.d6 = !0)
	}, this.s4 = function(jn, deltaY) {
		-1 !== zW && (pl += Math.floor(deltaY), zo(), zr(jn), b7.d6 = !0)
	}, this.g9 = function(jn, jo) {
		this.s1(jn, jo), -1 !== zW && (zZ = jn, this.zf = !0)
	}, this.sU = function() {
		-1 !== zW && (this.zf = !1)
	}, this.gG = function() {
		gH.fillStyle = ae.l0;
		for (var zv, month, dY, qZ, zy, zz, jt, a00, a01, dw = zV; zU <= dw; dw--) zt(dw);
		za && 0 === zU && (gH.fillStyle = ae.lM, zt(0)), -1 !== zW && (gH.fillStyle = ae.kz, zt(zW)), -1 !== zW && (gH.font = g5, gH.textBaseline = xA, (dY = new Date).setTime(zY.getTime() - 1e3 * zW * 60 * 60 * 24), month = "month", zv = "day",
			"undefined" != typeof Intl && (month = new Intl.DateTimeFormat("en-US", {
				month: "long"
			}).format(dY), zv = new Intl.DateTimeFormat("en-US", {
				weekday: "long"
			}).format(dY)), zv = zv + ", " + dY.getUTCDate() + " " + month + " " + dY.getFullYear(), month = 1 === eD[zW] ? " second played" : " seconds played", month = ad.k3.k4(eD[zW]) + month, dY = Math.floor(gH.measureText(zv).width),
			qZ = Math.floor(gH.measureText(month).width), zy = Math.floor(.5 * (dY + zX)), zz = (zz = pl + jv - (zW + 1) * zS) < zy ? zy : jv - zy < zz ? jv - zy : zz, jt = gD - Math.floor(zT * Math.pow(eD[zW], zb)), a00 = Math.floor(1.1 *
				zX), a01 = gD - a00 < jt ? gD - a00 : jt, gH.fillStyle = ae.kv, gH.fillRect(jv - qZ - zX, a01 - a00, qZ + zX, a00), gH.fillRect(zz - zy, gD - a00, dY + zX, a00), gH.fillStyle = ae.gK, gH.textAlign = xB, gH.fillText(month, Math
				.floor(jv - .5 * zX), a01),
			function(jt, a00) {
				for (var qY, uL = -1, g0 = eD.length - zW - 1, dw = ze.length - 1; 0 <= dw; dw--) g0 >= ze[dw].ez && g0 <= ze[dw].dG && (-1 === uL || ze[dw].dG - ze[dw].ez < ze[uL].dG - ze[uL].ez) && (uL = dw); - 1 !== uL && (qY = Math.floor(
					gH.measureText(ze[uL].w9).width), gH.fillStyle = ae.kv, gH.fillRect(jv - qY - zX, jt, qY + zX, a00), gH.fillStyle = ae.gK, gH.fillText(ze[uL].w9, Math.floor(jv - .5 * zX), jt + a00))
			}(a01 - 2 * a00, a00), gH.textAlign = gJ, gH.fillText(zv, zz, gD), gH.strokeStyle = ae.l1, gH.lineWidth = 1, gH.beginPath(), gH.moveTo(0, jt), gH.lineTo(jv, jt), gH.closePath(), gH.stroke())
	}
}

function ba() {
	var g5, g6, jo, a03, a04, gS, qT, xT, tK, a05, a06, a07, a08;
	this.jn = 0, this.i5 = 0, this.cl = function() {
		a04 = qA, a06 = "rgba(0,100,0,0.8)", a07 = "rgba(150,0,0,0.8)", xT = !(a05 = !0), tK = ev[eu], this.resize()
	}, this.resize = function() {
		g6 = Math.floor((di ? .305 : .24) * fy), this.i5 = Math.floor(.5 + .13 * g6), g6 = Math.floor(6 * this.i5), g5 = g1 + Math.floor(.8 * this.i5) + g2, a08 = Math.floor(.5 * this.i5), au.pG.font = g5, jo = nf, a03 = Math.floor(1 + .13 * this
			.i5), (gS = document.createElement("canvas")).width = g6, gS.height = this.i5, (qT = gS.getContext("2d", {
			alpha: !0
		})).font = g5, qT.textBaseline = gI, qT.textAlign = gJ, this.a09()
	}, this.xp = function() {
		return di && dj < 1.2 * dk
	}, this.yT = function() {
		this.xp() ? this.jn = jv - g6 - nf : this.jn = Math.floor(s.a0A() + (jv - s.a0A() - t.g6 - g6) / 2 - .5 * nf)
	}, this.jJ = function() {
		xT && (xT = !1, this.a09())
	}, this.a09 = function() {
		qT.clearRect(0, 0, g6, this.i5), qT.fillStyle = a05 ? a06 : a07, qT.fillRect(0, 0, g6, this.i5), qT.fillStyle = ae.kz, this.a0B(), this.a0C(), qT.fillStyle = ev[eu] >= a7.iN(eu) ? ae.lJ : ae.gK, qT.fillText(ad.k3.k4(tK), Math.floor(g6 /
			2), a08), qT.fillStyle = ae.gK, qT.fillRect(0, 0, g6, 1), qT.fillRect(0, 0, 1, this.i5), qT.fillRect(0, this.i5 - 1, g6, 1), qT.fillRect(g6 - 1, 0, 1, this.i5)
	}, this.a0B = function() {
		var pt = yN(Math.floor((a7.a0D() - 1) * this.i5 / 9), this.i5 - a03);
		qT.fillRect(0, pt, a03, this.i5 - pt), qT.fillRect(g6 - a03, pt, a03, this.i5 - pt)
	}, this.a0C = function() {
		qT.fillRect(a03, this.i5 - a03, Math.floor((g6 - 2 * a03) * ev[eu] / a04), a03)
	}, this.iK = function() {
		0 !== hA[eu] && 2 !== hB[eu] && tK !== ev[eu] && (a04 = vg(ev[eu], a04), a05 = ev[eu] > tK && 10 <= ev[eu], tK = ev[eu], xT = !0)
	}, this.gG = function() {
		0 === hA[eu] || kQ || 2 === hB[eu] || gH.drawImage(gS, this.jn, jo)
	}
}

function bb() {
	var a0F, a0G, a0H, a0I, a0J, a0K, a0L, a0M, a0N, a0O, a0P, a0Q, a0R, a0S, a0T, a0U, a0V, a0W, a0X, title, a0Y, a0Z, a0a, a0b, a0c, position, a0d, a0e, a0f, a0g, a0h = 1;

	function a0j() {
		a0L.clearRect(0, 0, a0F, y5), a0L.fillStyle = ae.lV, a0L.fillRect(0, 0, a0F, a0Q), a0L.fillStyle = ae.ku, a0L.fillRect(0, a0Q, a0F, y5 - a0Q), a0E[eu] >= position && a0m(a0E[eu] - position, ae.lG), 0 !== a0E[eu] && 0 === position && a0m(0, ae
				.lZ), -1 !== a0c && a0m(a0c, ae.ky), a0L.fillStyle = ae.gK, a0L.fillRect(0, a0Q, a0F, 1), a0L.fillRect(0, 0, a0F, xF), a0L.fillRect(0, 0, xF, y5), a0L.fillRect(a0F - xF, 0, xF, y5), a0L.fillRect(0, y5 - xF, a0F, xF), a0L.font = a0G,
			a0L.textBaseline = gI, a0L.textAlign = gJ, a0L.fillText(title, Math.floor((a0F + a0Q - 22) / 2), Math.floor(a0O + a0H / 2));
		playerList.drawButton(a0L, 12, 12, a0Q - 22);
		var hn, f7 = a0E[eu] < position + a0J - 1 ? 1 : 2;
		for (a0L.font = a0I, a0L.textAlign = vo, hn = a0J - f7; 0 <= hn; hn--) a0n(jU[hn + position]), a0o(hn, hn + position, jU[hn + position]);
		for (a0L.textAlign = xB, hn = a0J - f7; 0 <= hn; hn--) a0n(jU[hn + position]), a0p(hn, jU[hn + position]);
		2 == f7 && (a0n(eu), a0L.textAlign = vo, a0o(a0J - 1, a0E[eu], eu), a0L.textAlign = xB, a0p(a0J - 1, eu)), 0 === position && (f7 = .7 * a0R / a3.get(4).height, a0L.setTransform(f7, 0, 0, f7, Math.floor(a0S + .58 * a0R + .5 * f7 * a3.get(4)
			.width), Math.floor(a0O + a0H + .4 * a0R)), a0L.imageSmoothingEnabled = !0, a0L.drawImage(a3.get(4), -Math.floor(a3.get(4).width / 2), -Math.floor(a3.get(4).height / 2)), a0L.setTransform(1, 0, 0, 1, 0, 0))
	}

	function a0n(player) {
		ha && (a0L.fillStyle = b8.a0r[b8.rY[b8.ia[player]]])
	}

	function a0m(dw, uQ) {
		a0L.fillStyle = uQ, dw = a0J - 1 < dw ? a0J - 1 : dw;
		uQ = Math.floor((dw === a0J - 1 ? 2 : 0 === dw ? 1.15 : 1) * a0R), uQ = dw === a0J - 2 ? Math.floor(a0Q + 9.15 * a0R) - Math.floor(a0Q + 8.15 * a0R) : uQ;
		a0L.fillRect(0, Math.floor(a0Q + (dw + (0 === dw ? 0 : .15)) * a0R), a0F, uQ)
	}

	function a0o(a0t, a0u, dw) {
		a0L.fillText(a0Y[a0u], a0S, Math.floor(a0O + a0H + (a0t + .5) * a0R)), 1 === hB[dw] && (a0L.font = xC + a0I);
		a0u = Math.floor(a0O + a0H + (a0t + .5) * a0R);
		a0L.fillText(a0W[dw] === dw ? k5[dw] : a0V[a0W[dw] % f3], a0T, a0u), 0 !== hB[dw] && (a0L.font = a0I), dw < h9 && 2 !== hB[dw] || a0L.fillRect(a0T, a0u + .35 * a0h, a0X[dw], Math.max(1, .1 * a0h))
	}

	function a0p(a0t, dw) {
		a0L.fillText(fP[dw], a0U, Math.floor(a0O + a0H + (a0t + .5) * a0R))
	}

	function a13(jo) {
		return (jo -= nf + a0Q) < 0 ? Math.floor(jo / a0R) - 1 : jo < (a0J - 1) * a0R ? Math.floor(jo / a0R) : jo < y5 - a0Q ? a0J - 1 : (jo -= y5 - a0Q, a0J + Math.floor(jo / a0R))
	}

	function uu(jn, jo) {
		return nf <= jn && jn < nf + a0F && nf <= jo && jo < nf + y5
	}
	this.cl = function() {
		var dw, df, hn;
		for (a0e = !1, title = "LEADERBOARD", a0J = di ? 6 : 10, position = a0g = a0f = a0d = 0, a0b = !(a0c = -1), a0Z = new Uint16Array(a0J + 1), a0a = new Uint32Array(a0J + 1), a0N = f3, jU = new Uint16Array(a0N), a0E = new Uint16Array(a0N),
			dw = a0N - 1; 0 <= dw; dw--) jU[dw] = dw, a0E[dw] = dw;
		this.resize(!0), a0V = [], a0W = new Uint16Array(f3), a0X = new Uint16Array(f3);
		var o7 = Math.floor(a0F - a0T - a0S - a0M),
			a0i = 0;
		for (a0Y = new Array(f3), a0L.font = a0I, dw = f3 - 1; 0 <= dw; dw--)
			if (a0Y[dw] = dw + 1 + ".", a0W[dw] = dw, a0X[dw] = Math.floor(a0L.measureText(k5[dw]).width), a0X[dw] > o7) {
				for (df = k5[dw], hn = k5[dw].length - 1; 1 <= hn && (df = df.substring(0, hn), a0X[dw] = Math.floor(a0L.measureText(df + "...").width), !(a0X[dw] <= o7)); hn--);
				df += "...", a0V.push(df), a0W[dw] = f3 + a0i++
			} a0j()
	}, this.resize = function(cl) {
		if (y5 = di ? (a0F = Math.floor(.335 * fy), Math.floor(a0J * a0F / 8)) : (a0F = Math.floor(.27 * fy), Math.floor(a0J * a0F / 10)), a0F = Math.floor(.97 * a0F), (a0K = document.createElement("canvas")).width = a0F, a0K.height = y5, a0L =
			a0K.getContext("2d", {
				alpha: !0
			}), a0O = .025 * a0F, a0H = .16 * a0F, a0P = 0 * a0F, a0Q = Math.floor(.45 * a0O + a0H), a0R = (y5 - a0H - 2 * a0O - a0P) / a0J, a0G = g1 + Math.floor(.55 * a0H) + g2, a0h = Math.floor((di ? .67 : .72) * a0R), a0I = a0h + g2, a0L
			.font = a0I, a0S = Math.floor(.04 * a0F), a0T = Math.floor((di ? .195 : .18) * a0F), a0M = Math.floor(a0L.measureText("00920600").width), a0L.font = a0G, a0U = a0F - a0S, !cl) {
			a0L.font = a0I;
			for (var dw = f3 - 1; 0 <= dw; dw--) a0X[dw] = Math.floor(a0L.measureText(a0W[dw] === dw ? k5[dw] : a0V[a0W[dw] % f3]).width);
			a0j()
		}
	}, this.a0A = function() {
		return a0F
	}, this.jJ = function(wL) {
		a0b && (wL || b7.iY() % aR.a0k[aR.k1.a0l] == 0) && (a0b = !1, a0j())
	}, this.iK = function() {
		! function() {
			for (var hn = a0N - 1; 0 <= hn; hn--) 0 === hA[jU[hn]] && ! function(hn) {
				var a11 = jU[hn];
				a0N--;
				for (var dw = hn; dw < a0N; dw++) jU[dw] = jU[dw + 1], a0E[jU[dw]] = dw;
				jU[a0N] = a11, a0E[jU[a0N]] = a0N
			}(hn)
		}();
		for (var a0z, kg = a0N - 1, hn = 0; hn < kg; hn++) fP[jU[hn]] < fP[jU[hn + 1]] && (a0z = jU[hn], jU[hn] = jU[hn + 1], jU[hn + 1] = a0z, a0E[jU[hn]] = hn, a0E[jU[hn + 1]] = hn + 1);
		! function() {
			for (var dY = a0b, f7 = (a0b = !0, a0E[eu] >= a0J - 1 ? a0J - 2 : a0J - 1), dw = f7; 0 <= dw; dw--)
				if (a0Z[dw] !== jU[dw] || a0a[dw] !== fP[jU[dw]]) return;
			(f7 != a0J - 2 || a0Z[a0J] === a0E[eu] && a0a[a0J] === fP[eu]) && (a0b = dY)
		}();
		for (var dw = a0J - 1; 0 <= dw; dw--) a0Z[dw] = jU[dw], a0a[dw] = fP[jU[dw]];
		a0Z[a0J] = a0E[eu], a0a[a0J] = fP[eu]
	}, this.g9 = function(jn, jo) {
		return !!uu(jn, jo) && (utils.isPointInRectangle(jn, jo, nf + 12, nf + 12, a0Q - 22, a0Q - 22) && playerList.display(k5), true) && (a0d = b7.dX, a0e = !0, a0f = a0g = a13(jo), al.sk() && (jn = yn(-1, a0g, a0J), a0c !== (jn = jn === a0J ?
			-1 : jn)) && (a0c = jn, a0j(), b7.d6 = !0), !0)
	}, this.s1 = function(jn, jo) {
		if (utils.isPointInRectangle(jn, jo, nf + 12, nf + 12, a0Q - 22, a0Q - 22)) {
			playerList.hoveringOverButton === false && (playerList.hoveringOverButton = true, a0j(), b7.d6 = !0);
		} else {
			playerList.hoveringOverButton === true && (playerList.hoveringOverButton = false, a0j(), b7.d6 = !0);
		}
		var dY, a12 = a13(jo);
		return a0e ? (dY = position, (position = yn(0, position += a0f - a12, f3 - a0J)) !== dY && (a12 = (a12 = yn(-1, a0f = a12, a0J)) !== a0J && uu(jn, jo) ? a12 : -1, a0c = a12, a0j(), b7.d6 = !0), !0) : (a12 = (a12 = yn(-1, a12, a0J)) ===
			a0J || !uu(jn, jo) || al.sk() ? -1 : a12, a0c !== a12 && (a0c = a12, a0j(), b7.d6 = !0))
	}, this.sU = function(jn, jo) {
		if (!a0e) return !1;
		a0e = !1;
		var a12 = a13(jo);
		return al.sk() && -1 !== a0c && (a0c = -1, a0j(), b7.d6 = !0), b7.dX - a0d < 350 && a0g === a12 && -1 !== (a12 = (a12 = yn(-1, a12, a0J)) !== a0J && uu(jn, jo) ? a12 : -1) && (jn = jU[a12 + position], a12 === a0J - 1 && a0E[eu] >=
			position + a0J - 1 && (jn = eu), ha && donationsTracker.displayHistory(jn, k5, j1), 0 !== hA[jn]) && f.kR(jn, 800, !1, 0), !0
	}, this.s4 = function(jn, jo, deltaY) {
		var a14;
		return !(a0e || kT || (a14 = Math.max(Math.floor(Math.abs(deltaY) / 40), 1), !uu(jn, jo)) || (jn = (jn = yn(-1, a13(jo), a0J)) === a0J || al.sk() ? -1 : jn, 0 < deltaY ? position < f3 - a0J && (position += Math.min(f3 - a0J - position,
			a14), a0c = jn, a0j(), b7.d6 = !0) : 0 < position && (position -= Math.min(position, a14), a0c = jn, a0j(), b7.d6 = !0), 0))
	}, this.gG = function() {
		gH.drawImage(a0K, nf, nf)
	}
}

function bc() {
	var gS, qT, jn, jo, xM, a15, gap, a16, fontSize, a17, v0, ex, a18, a19, a1A, a1B, a1C, a1D;

	function a1G() {
		qT.clearRect(0, 0, t.g6, t.i5), qT.fillStyle = ae.kv, qT.fillRect(0, 0, t.g6, t.i5), qT.fillStyle = ae.lB, gu = 0 < a1A ? a1A : Math.sqrt(ex[4] / 1e4), qT.fillRect(0, t.i5 - xM - 1, Math.floor(gu * t.g6), xM), qT.fillStyle = ae.gK, qT
			.fillRect(0, 0, t.g6, 1), qT.fillRect(0, 0, 1, t.i5), qT.fillRect(t.g6 - 1, 0, 1, t.i5), qT.fillRect(0, t.i5 - 1, t.g6, 1), qT.fillRect(0, t.i5 - xM - 1, t.g6, 1);
		for (var gu, a1I, dY = 0, dw = 0; dw < v0.length; dw++) a18[dw] ? (qT.textAlign = vo, a1I = Math.floor((a15 - xM + 2 * a16) * (dw - dY + 1) / (v0.length + 1) - .7 * a16), qT.fillText(v0[dw], gap, a1I), qT.textAlign = xB, 5 === dw && 0 !== hA[
			eu] && ev[eu] >= a7.iN(eu) ? (qT.fillStyle = ae.lX, qT.fillText(a1F(dw), t.g6 - gap, a1I), qT.fillStyle = ae.gK) : qT.fillText(a1F(dw), t.g6 - gap, a1I)) : dY++
	}

	function a1F(dw) {
		return dw < 3 ? ex[dw].toString() : 3 === dw || 4 === dw || 5 === dw ? ad.k3.tZ(ex[dw] / 100, 2) : dw < 7 ? ad.k3.k4(ex[dw]) : dw === 7 ? t.a0D(ex[7]) : dw === 8 ? utils.getMaxTroops(fP, eu) : utils.getDensity(eu)
	}

	function a1E() {
		fP[eu] !== ex[6] && (ex[6] = fP[eu], a17++)
	}
	this.cl = function() {
		a1A = a1B = 0, (v0 = new Array(8))[0] = "Humans", v0[1] = j1 ? "Players" : "Bots", v0[2] = "Spectators", v0[3] = "Threshold", v0[4] = "Occupation", v0[5] = "Interest", v0[6] = "Income", v0[7] = "Time", v0.push("Max Troops", "Density"),
			a1D = tm - er(tm, 100), (ex = new Array(v0.length))[0] = j1 ? 0 : h9, ex[1] = j1 ? ib : iv, ex[2] = rN, ex[3] = 0, ex[4] = er(1e4 * fP[0], tm), ex[5] = 700, ex[6] = 0, a1E(), ex[7] = 0, a19 = a1F(6), a18 = new Array(v0.length);
		for (var dw = v0.length - 1; 0 <= dw; dw--) a18[dw] = !0;
		a1C = 0, a1C = j1 ? (a18[0] = !1, a18[2] = !1, a18[3] = !1, 3) : (a18[3] = !1, 1), a17 = 0, this.resize()
	}, this.resize = function() {
		this.g6 = Math.floor((di ? .1646 : .126) * 1.25 * fy), this.i5 = Math.floor(1.18 * this.g6), xM = Math.floor(.04 * this.g6), gap = Math.floor(.035 * this.g6), a16 = .04 * this.g6, a15 = this.i5, this.i5 -= Math.floor(a1C * (this.i5 - 2 *
			xM) / v0.length), fontSize = Math.floor(.7 * (a15 - xM) / v0.length), fontSize = g1 + fontSize + g2, (gS = document.createElement("canvas")).width = this.g6, gS.height = this.i5, (qT = gS.getContext("2d", {
			alpha: !0
		})).font = fontSize, qT.textBaseline = gI, qT.lineWidth = 1, this.tg(), this.yT(), r.yT(), a1G()
	}, this.yT = function() {
		jn = jv - this.g6 - nf
	}, this.a1H = function() {
		jo = nf
	}, this.tg = function() {
		jo = nf + (r.xp() && 0 !== hA[eu] && !kQ ? r.i5 + nf : 0)
	}, this.jJ = function(wL) {
		0 < a17 && (wL || 100 <= a17) && (a17 = 0, a1G())
	}, this.uY = function() {
		return ex[7]
	}, this.a0D = function(value) {
		var p7 = Math.floor(value / 1e3 / 60),
			value = Math.floor((value - 6e4 * p7) / 1e3);
		return value < 10 ? p7 + ":0" + value : p7 + ":" + value
	}, this.iK = function() {
		var a1S, per;
		a18[0] && rO - rN !== ex[0] && (ex[0] = rO - rN, a17++), ib - ex[0] !== ex[1] && (ex[1] = ib - ex[0], a17++), this.j9(), (a1S = a7.a1T(eu)) !== ex[5] && (ex[5] = a1S, a17++), a1E(), ex[7] += b7.a1U, a1S = a1F(7), a19 !== a1S && (a19 =
			a1S, a17 += 100), a1S = ha ? b9.ra() : fP[jU[0]], per = er(1e4 * a1S, tm), ex[3] = a1S, ex[4] !== per && (a17++, ex[4] = per), 8 === iz && function() {
			if (0 === hA[0]) at.r7.rF(1);
			else {
				if (0 !== hA[1]) return;
				at.r7.rF(0)
			}
			return 1
		}() || ex[3] < a1D || ex[3] !== tm && ! function() {
			for (var dw = ib - 1; 0 <= dw; dw--)
				if (0 < f0[ic[dw]].length) return;
			return 1
		}() || at.r7.rF(-1)
	}, this.j9 = function() {
		a18[2] && rN !== ex[2] && (ex[2] = rN, a17++)
	}, this.a1V = function(dw) {
		var t7, a1W, dY;
		return 2 !== jK && (dw === tq ? (a1A = 0, a1G(), !1) : (-1 !== dw || 0 !== a1B) && (a1W = a1A, a1A = fj ? dw / tq : (dY = performance.now(), 0 <= dw && (t7 = dY - 392 * dw, a1B = 0 === dw || t7 < a1B ? t7 : a1B), 1 < (a1A = (dY - a1B) / (
			392 * tq)) ? 1 : a1A), a1G(), a1A !== a1W))
	}, this.gG = function() {
		gH.drawImage(gS, jn, jo)
	}
}

function bd() {
	var sS, a1X, g6, i5, wS, a1Y, a1Z, xq, gS, kH, a1a;

	function gF() {
		return Math.floor((jv - g6) / 2) < o.i5 + 2 * nf ? gD - i5 - 4 * nf - o.i5 : gD - i5 - 2 * nf
	}
	this.a1b = -1, this.cl = function() {
		a1a = sS = !1, wS = .61, a1Y = .07, a1Z = .09, kH = xq = i5 = 0, this.a1b = -1
	}, this.resize = function() {
		var qT, js, iZ, a1g, a1h, v4;
		sS && (g6 = yN(g6 = di ? Math.floor(.69 * fy) : Math.floor(.5 * fy), vg(dj - 2 * nf, 10)), g6 = yN(g6, Math.floor(3.57 * vg(dk - 2 * nf, 3))), i5 = Math.floor(.28 * g6), (gS = document.createElement("canvas")).width = g6, gS.height = i5,
			qT = gS.getContext("2d", {
				alpha: !0
			}), js = Math.floor(1 + i5 / 40), qT.clearRect(0, 0, g6, i5), qT.fillStyle = ae.kv, qT.fillRect(js, js, g6 - 2 * js, i5 - 2 * js), qT.lineJoin = "bevel", qT.lineWidth = 2 * js, qT.strokeStyle = ae.gK, qT.strokeRect(js, js, g6 -
				2 * js, i5 - 2 * js), qT.imageSmoothingEnabled = !0, iZ = a3.get(a1X), a1g = iZ.width, a1h = iZ.height, v4 = (21 === a1X ? .666 : 1) * wS * i5 / a1h, qT.setTransform(v4, 0, 0, v4, Math.floor((g6 - v4 * a1g) / 2), Math.floor((
				i5 - v4 * a1h) / 2)), qT.drawImage(iZ, 0, 0), qT.setTransform(1, 0, 0, 1, Math.floor(g6 - a1Z * i5 - a1Y * i5 - js), Math.floor(js + a1Y * i5)),
			function(qT, ez) {
				qT.lineWidth = Math.floor(1 + i5 / 80), qT.strokeStyle = ae.gK, qT.beginPath(), qT.moveTo(0, 0), qT.lineTo(ez, ez), qT.moveTo(0, ez), qT.lineTo(ez, 0), qT.stroke()
			}(qT, Math.floor(a1Z * i5)), qT.setTransform(1, 0, 0, 1, 0, 0))
	}, this.show = function(e4, a1d, a1e, a1f) {
		sS || a1f && a1a || (a1X = a1e ? 21 : e4 ? 1 : 2, sS = a1a = !0, this.resize(), i.oL(), o.yI(), kH = b7.dX, -1 === this.a1b && (this.a1b = b7.iY()), xq = a1d ? 1 : 0)
	}, this.iK = function() {
		!sS || 1 <= xq || (xq = 1 < (xq += 5e-4 * (b7.dX - kH)) ? 1 : xq, kH = b7.dX, b7.d6 = !0)
	}, this.g9 = function(jn, jo) {
		return !(!sS || xq <= 0 || (jn -= Math.floor((jv - g6) / 2), jo -= gF(), jn < 0) || jo < 0 || g6 < jn || i5 < jo || (g6 - i5 / 3 < jn && jo < i5 / 3 && (sS = !1, b7.d6 = !0), 0))
	}, this.gG = function() {
		!sS || xq <= 0 || (gH.globalAlpha = xq, gH.drawImage(gS, Math.floor((jv - g6) / 2), gF()), gH.globalAlpha = 1)
	}
}

function cs() {
	this.a1j = !1, this.ko = !1, this.tk = !1, this.a1k = [0, 0, 0, 0], this.a1l = function() {
		var js, jt, ju, jw;
		this.tk = this.tk || this.ko, (this.ko || this.a1j && this.tk) && (js = b1.a1m[0], jt = b1.a1m[1], ju = b1.a1m[2], jw = b1.a1m[3], js = js < this.a1k[0] ? this.a1k[0] : js, jt = jt < this.a1k[1] ? this.a1k[1] : jt, ju = ju > this.a1k[2] ?
			this.a1k[2] : ju, jw = jw > this.a1k[3] ? this.a1k[3] : jw, this.ko = !1, this.a1j = !1, js === this.a1k[0] && jt === this.a1k[1] && ju === this.a1k[2] && jw === this.a1k[3] ? this.tl() : js <= ju && jt <= jw && u5.putImageData(
				u6, 0, 0, js, jt, ju - js + 1, jw - jt + 1))
	}, this.tl = function() {
		this.tk && this.a1k[2] >= this.a1k[0] && this.a1k[3] >= this.a1k[1] && u5.putImageData(u6, 0, 0, this.a1k[0], this.a1k[1], this.a1k[2] - this.a1k[0] + 1, this.a1k[3] - this.a1k[1] + 1), this.tk = !1
	}, this.rT = function() {
		this.a1k[2] >= this.a1k[0] && this.a1k[3] >= this.a1k[1] && u5.putImageData(u6, 0, 0, this.a1k[0], this.a1k[1], this.a1k[2] - this.a1k[0] + 1, this.a1k[3] - this.a1k[1] + 1), this.tk = !1
	}, this.cl = function() {
		var jn, jo;
		this.a1j = !1, this.ko = !1, this.tk = !1, this.a1k[0] = au.eZ, this.a1k[1] = au.ea, this.a1k[2] = this.a1k[3] = 0;
		loop: for (jn = 1; jn < au.eZ - 1; jn++)
			for (jo = au.ea - 2; 1 < jo; jo--)
				if (1 === a1n[a4.q1(jn, jo) + 2]) {
					this.a1k[0] = jn;
					break loop
				} loop: for (jo = 1; jo < au.ea - 1; jo++)
			for (jn = au.eZ - 2; 1 < jn; jn--)
				if (1 === a1n[a4.q1(jn, jo) + 2]) {
					this.a1k[1] = jo;
					break loop
				} loop: for (jn = au.eZ - 2; 0 < jn; jn--)
			for (jo = au.ea - 2; 1 < jo; jo--)
				if (1 === a1n[a4.q1(jn, jo) + 2]) {
					this.a1k[2] = jn;
					break loop
				} loop: for (jo = au.ea - 2; 0 < jo; jo--)
			for (jn = au.eZ - 2; 1 < jn; jn--)
				if (1 === a1n[a4.q1(jn, jo) + 2]) {
					this.a1k[3] = jo;
					break loop
				}
	}
}

function cf() {
	var a1o = new a1p;
	this.vd = function(g0, a1q, oQ) {
		return a1o.vd(g0, a1q, oQ)
	}
}

function a1p() {
	var eD = ["Accept", "You erased {0}.", "You were erased by {0}.", "Congratulations! You won the game.", "{0} won the game.", "{0} broke the non-aggression pact.", "{0} is attacking you!", "Choose your start position!", "You surrendered!",
		"The game ended in a stalemate!", "Error: {0}", "{0} won the game.", "{0} was immortalized!", "Unclaimed Land {0}", "Player: {0}   Balance: {1}   Territory: {2}   Coords: {3}", "Mountains {0}", "Water {0}",
		"Ship Owner: {0}   Strength: {1}", " Message to {0}: ", "{0}: ", "Humanity triumphs! The undead have been beaten back.", "The Resistance", "Mankind's era ends, overrun by the relentless tide of the undead.", "The Virus",
		"Agreeing to peace concludes the game in a stalemate!", "You signed a non-aggression pact with {0}.", "You asked {0} to sign a non-aggression pact.", "{0} accepted the non-aggression pact.", "{0} requested a non-aggression pact.",
		"You asked {0} players to attack {1}.", "You asked {0} to attack {1}.", "{0} suggested you attack {1}.", "Your balance is too low!", "You exported {0} resource{20} to {1}.", "A tax of {0} unit{20} was deducted.",
		"{0} supported you with {1} resource{21}.", "A bot ({0}) supported you with {1} resource{21}.", "Map: {0}", "Dimension: {0}x{1}", "Overall Pixels: {0}", "Land: {0} ({1})", "Water: {0} ({1})", "Mountains: {0} ({1})",
		"Full sending against human players is disabled.", "{0} and {1} other player{21} were erased.", "{0} and {1} other player{21} left the game.", "{0} and {1} other player{21} surrendered.", "{0} was erased by {1}.", "{0} left the game.",
		"{0} surrendered.", "{0} joined the game."
	];
	this.vd = function(g0, a1q, oQ) {
		var dw, ez, df;
		if (!a1q) return eD[g0];
		for (ez = a1q.length, df = eD[g0], dw = 0; dw < ez; dw++) Number.isInteger(a1q[dw]) && (df = df.replace("{" + (20 + dw) + "}", 1 === a1q[dw] ? "" : "s"));
		if (oQ) {
			if (oQ.w0)
				for (dw = 0; dw < oQ.w0.length; dw++) a1q[oQ.w0[dw]] = ad.k3.k4(a1q[oQ.w0[dw]]);
			if (oQ.wI)
				for (dw = 0; dw < oQ.wI.length; dw++) a1q[oQ.wI[dw]] = ad.k3.tZ(100 * a1q[oQ.wI[dw]], 1)
		}
		for (dw = 0; dw < ez; dw++) df = df.replace("{" + dw + "}", a1q[dw]);
		return df
	}
}

function a1r() {}

function d1() {
	this.sS = !1, this.vK = null, this.a1s = 0, this.g6 = null, this.i5 = null, this.a1t = .013, this.a1u = .022, this.a1v = .025;
	this.a1x = 3, this.a1y = 1.2, this.a1z = .2, this.a20 = .235, this.a21 = .9, this.a22 = .08;
	var a24, a23 = ["Best Players", "Best Clans", "LEGENDS NEVER DIE", "THE NEVER ENDING WAR"],
		a25 = [-1e6, -1e6];
	this.position = [0, 0], this.a27 = [0, 0], this.cl = function() {
		this.vK = [null, null], this.sS = !1, this.a1s = 0
	}, this.dU = function(id) {
		this.sS = !0, this.resize(), this.a1s = id, this.g3(), z.dU(!1), b7.d6 = !0
	}, this.iK = function() {
		this.sS && this.g3()
	}, this.g3 = function() {
		b7.dX - 12e4 >= a25[this.a1s] && (a25[this.a1s] = b7.dX, this.a27 = [0, 0], aP.jA.zh(0, 1 + this.a1s)) && aP.lm.a28(0, this.a1s)
	}, this.resize = function() {
		if (this.sS) {
			var dw;
			for (this.g6 = this.a29(di ? .85 : .66, .75, dj, dk), this.i5 = Math.floor(this.g6 / .75), dw = 1; 0 <= dw; dw--) this.vK[dw] && (this.vK[dw][4] = g1 + Math.floor(this.vK[dw][5] * this.i5 / 10) + g2);
			a24 = g1 + Math.floor(.1 * this.i5) + g2
		}
	}, this.a29 = function(fw, gR, g6, i5) {
		return g6 < gR * i5 ? Math.floor(fw * g6) : Math.floor(gR * fw * i5)
	}, this.a2A = function(g0, a2B, a2C, tV, a2D, a2E, a0t) {
		this.position[g0] = a0t;
		for (var xn, size = a2B.length, g5 = g1 + Math.floor(a2D * this.i5 / 10) + g2, eD = (this.a2F(a2B, g5, a2E * this.g6), [
				[], size, -1, tV, g5, a2D, 10 * a0t
			]), dw = 0; dw < size; dw++) xn = {
			name: a2B[dw].name,
			value: a2B[dw].qg / a2C,
			colorIndex: a2B[dw].colorIndex
		}, eD[0].push(xn);
		this.vK[g0] = eD, this.a2G(g0);
		a2E = this.vK[g0][0][0].name;
		1 === g0 && (a2E = "[" + a2E + "]"), 0 === a0t && b0.fz(g0, a2E), b7.d6 = !0
	}, this.a2G = function(dw) {
		this.vK[dw][0].sort(function(hn, hx) {
			return hx.value - hn.value
		})
	}, this.a2H = function(g0, name, a2I, a2J) {
		if (this.vK && this.vK[g0]) {
			var dw, wA = !1;
			if (0 === g0) {
				for (dw = 0; dw < this.vK[g0][0].length; dw++)
					if (name === this.vK[g0][0][dw].name && a2I > .99 * this.vK[g0][0][dw].value && a2I < 1.01 * this.vK[g0][0][dw].value) {
						this.vK[g0][0][dw].value = a2J, wA = !0;
						break
					} wA || this.vK[g0][0].push({
					name: name,
					value: a2J
				})
			} else {
				for (dw = 0; dw < this.vK[g0][0].length; dw++)
					if (name === this.vK[g0][0][dw].name) {
						this.vK[g0][0][dw].value += 32 < this.vK[g0][0][dw].value ? (64 - this.vK[g0][0][dw].value) / 256 : .25, this.vK[g0][0][dw].value *= 1 / (383 / 384), wA = !0;
						break
					} for (dw = 0; dw < this.vK[g0][0].length; dw++) this.vK[g0][0][dw].value *= 383 / 384;
				wA || this.vK[g0][0].push({
					name: name,
					value: .25
				})
			}
			this.a2G(g0)
		}
	}, this.a2F = function(a2B, g5, g7) {
		for (var dw = a2B.length - 1; 0 <= dw; dw--)
			for (; 3 < a2B[dw].name.length && n.measureText(a2B[dw].name, g5) > g7;) a2B[dw].name = a2B[dw].name.substring(0, a2B[dw].name.length - 4) + "..."
	}, this.g9 = function(gy, gz) {
		return !!this.sS && (gy -= (jv - this.g6) / 2, gz -= (gD - this.i5) / 2, gy < 0 || gy > this.g6 || gz < 0 || gz > this.i5 ? (this.sS = !1, 0 === x.sb() && z.dU(!0), b7.d6 = !0) : (gz = gz < .3 * this.i5 ? 1 : gz < .85 * this.i5 ? (gz = (
				0 === this.a1s ? 14.1 : 3) * (gz - .3 * this.i5) / (.55 * this.i5), Math.floor(1 + gz * gz)) : 0 === this.a1s ? 200 : 10, gy < this.g6 / 2 ? this.a27[this.a1s] = -gz : this.a27[this.a1s] = gz, a25[this.a1s] + 50 > b7.dX ||
			(a25[this.a1s] = b7.dX, aP.jA.zh(0, 1 + this.a1s) && aP.lm.a28(0, this.a1s)), !0))
	}, this.gG = function() {
		var js, jt, qY, qZ, a2K, a2L, t9, tA;
		this.sS && (js = (jv - this.g6) / 2, jt = (gD - this.i5) / 2, qY = this.a1t * this.g6, qZ = this.a1x * qY, a2K = this.a1u * this.g6, a2L = this.a1y * a2K, t9 = this.a1v * this.g6, tA = Math.floor(.25 * this.i5), gH.setTransform(1, 0, 0,
				1, js, jt), gH.fillStyle = 0 === this.a1s ? ae.lR : ae.lP, gH.fillRect(0, 0, this.g6, tA), gH.fillStyle = ae.ku, gH.fillRect(0, tA, this.g6, this.i5 - tA), gH.fillStyle = ae.gK, gH.font = a24, gH.textBaseline = gI, gH
			.textAlign = gJ, gH.fillText(a23[this.a1s], Math.floor(this.g6 / 2), Math.floor(.135 * this.i5)), gH.font = g1 + Math.floor(.025 * this.i5) + g2, gH.fillText(a23[this.a1s + 2], Math.floor(this.g6 / 2), Math.floor(.2125 * this
			.i5)), gH.beginPath(), gH.moveTo(this.g6 / 4, 0), gH.lineTo(this.g6 / 2 - qY, 0), gH.lineTo(this.g6 / 2, -qZ), gH.lineTo(this.g6 / 2 + qY, 0), gH.lineTo(this.g6 - a2K, 0), gH.lineTo(this.g6 + a2L, -a2L), gH.lineTo(this.g6, a2K),
			gH.lineTo(this.g6, this.i5 / 2 - qY), gH.lineTo(this.g6 + qZ, this.i5 / 2), gH.lineTo(this.g6, this.i5 / 2 + qY), gH.lineTo(this.g6, this.i5 - a2K), gH.lineTo(this.g6 + a2L, this.i5 + a2L), gH.lineTo(this.g6 - a2K, this.i5), gH
			.lineTo(this.g6 / 2 + qY, this.i5), gH.lineTo(this.g6 / 2, this.i5 + qZ), gH.lineTo(this.g6 / 2 - qY, this.i5), gH.lineTo(a2K, this.i5), gH.lineTo(-a2L, this.i5 + a2L), gH.lineTo(0, this.i5 - a2K), gH.lineTo(0, this.i5 / 2 + qY),
			gH.lineTo(-qZ, this.i5 / 2), gH.lineTo(0, this.i5 / 2 - qY), gH.lineTo(0, a2K), gH.lineTo(-a2L, -a2L), gH.lineTo(a2K, 0), gH.lineTo(this.g6 / 4, 0), gH.lineTo(this.g6 / 4, t9), gH.lineTo(t9, t9), gH.lineTo(t9, this.i5 - t9), gH
			.lineTo(this.g6 - t9, this.i5 - t9), gH.lineTo(this.g6 - t9, t9), gH.lineTo(this.g6 / 4, t9), gH.fill(), this.vK[this.a1s] && this.a2M(tA), this.a2N(tA), gH.setTransform(1, 0, 0, 1, 0, 0))
	}, this.a2N = function(tA) {
		var qY = vg(2, Math.floor(.06 * this.g6)),
			wS = (qY -= qY % 2, vg(2, Math.floor(.01 * this.g6))),
			tA = (wS -= wS % 2, Math.floor(.82 * tA));
		gH.fillRect(qY, tA, qY, wS), gH.fillRect(this.g6 - qY - qY, tA, qY, wS), gH.fillRect(Math.floor(this.g6 - qY - qY + (qY - wS) / 2), Math.floor(tA - (qY - wS) / 2), wS, qY)
	}, this.a2M = function(tA) {
		var jo;
		gH.font = this.vK[this.a1s][4];
		for (var dw = this.vK[this.a1s][1] - 1; 0 <= dw; dw--) gH.textAlign = xB, jo = Math.floor(this.a22 * this.i5 + tA + dw * ((1 - 2 * this.a22) * this.i5 - tA) / 9), gH.fillText(this.vK[this.a1s][0][dw].value.toFixed(this.vK[this.a1s][3]),
			Math.floor(this.a21 * this.g6), jo), gH.fillText(dw + 1 + this.vK[this.a1s][6] + ".", Math.floor(this.a1z * this.g6), jo), gH.textAlign = vo, gH.fillText(this.vK[this.a1s][0][dw].name, Math.floor(this.a20 * this.g6), jo)
	}
}

function d2() {
	var jn, jo, i5, a2O, a2P, a2Q, a2R, a2S, a2T, g6, a2U, a2V;
	this.sS = !1, this.cl = function(df, a2W) {
		if (13 <= dZ && dZ < 18) return a2W ? void(a2U = df) : a2U !== df ? void 0 : void dW.saveString(200, df);
		a2W && ((gE.vK[1].rH.sS || gE.vK[2].rH.sS) && gE.sc(), z.dU(!1), a2U = df, (a2V = document.createElement("a")).appendChild(document.createTextNode(a2U)), this.sS = !0, a2V.title = a2U, a2V.target = "_blank", a2V.href = a2U, a2V.style
			.textAlign = "center", a2V.style.color = ae.gK, a2V.style.position = "absolute", a2V.style.padding = "0px", a2V.style.margin = "0px", this.resize(), document.body.appendChild(a2V), b7.d6 = !0)
	}, this.oL = function() {
		return !(!this.sS || (document.body.removeChild(a2V), this.sS = !1))
	}, this.g9 = function(gy, gz) {
		return !!this.sS && ((gy < jn || gz < jo || jn + g6 < gy || jo + i5 < gz || jn + g6 - a2O < gy && gz < jo + a2O) && (b7.d6 = !0, this.sS = !1, document.body.removeChild(a2V), 0 === x.sb()) && z.dU(!0), !0)
	}, this.resize = function() {
		var g5, a2X;
		this.sS && (a2S = Math.floor(.8 * (di ? dk < dj ? .6 : .55 : .4) * fy), a2O = Math.floor(.15 * a2S), a2P = Math.floor(.35 * a2O), a2Q = Math.floor(.5 * a2O), a2R = Math.floor(2.5 * a2Q), i5 = a2O + a2P + 3 * a2Q, g5 = g1 + Math.floor(
			a2P / nV) + g2, a2T = Math.floor(nV * n.measureText(a2U, g5)), a2X = g6 = (a2S < a2T ? a2T : a2S) + 2 * a2R, g6 = Math.min(g6, dj - 2 * (di ? 2 : 1) * nf), g5 = g1 + Math.floor(g6 / a2X * a2P / nV) + g2, a2T = Math.floor(nV *
			n.measureText(a2U, g5)), jn = Math.floor((jv - g6) / 2), jo = Math.floor((gD - i5) / 2), a2V.style.font = g5, a2V.style.top = Math.floor((jo + 1.4 * a2Q + a2O) / nV) + "px", a2V.style.left = Math.floor((jn + (g6 - a2T) / 2) /
			nV) + "px")
	}, this.gG = function() {
		this.sS && (gH.fillStyle = ae.kv, gH.fillRect(jn, jo + a2O, g6, i5 - a2O), gH.fillStyle = ae.ld, gH.fillRect(jn, jo, g6, a2O), gH.fillStyle = ae.gK, gH.lineWidth = tB, gH.strokeStyle = ae.gK, gH.strokeRect(jn, jo, g6, i5), gH.fillRect(jn,
			jo + a2O, g6, tB), gH.font = g1 + Math.floor(.48 * a2O) + g2, gH.textAlign = gJ, gH.textBaseline = gI, gH.fillText("You are leaving Territorial.io!", Math.floor(jn + (g6 - .5 * a2O) / 2), Math.floor(jo + .55 * a2O)), j.vI(Math
			.floor(jn + g6 - .8 * a2O), Math.floor(jo + .25 * a2O), Math.floor(.5 * a2O)), gH.setTransform(1, 0, 0, 1, 0, 0))
	}
}

function co() {
	var gap, v0, jn = [0, 0, 0, 0, 0],
		jo = [0, 0, 0, 0, 0],
		kb = [1, 1, 1, 1, 1],
		e4 = [!0, !0, !0, !0, !0],
		iZ = (this.eI = [!0, !0, !0, !0, !0], null);
	this.a2Y = function(uN, a2Z) {
		iZ = uN, e4 = a2Z, v0 = [am.a2a, am.a2b, am.a2c, am.a2d, am.a2e], this.cl()
	}, this.cl = function() {
		if (a3.g4()) {
			var dw, qY = Math.floor((di ? .261 : .195) * fy),
				qZ = Math.floor(.9 * qY),
				wS = Math.floor(.17 * qZ);
			if (gap = di ? 2 * nf : nf, kb[0] = qY / iZ[0].width, kb[1] = qZ / iZ[1].width, kb[2] = wS / iZ[2].height, kb[3] = wS / iZ[3].height, kb[4] = wS / iZ[4].height, kb[3] *= 1.07, jn[0] = gap, jn[1] = gap, jn[2] = gap, jn[3] = gap, jn[
				4] = Math.floor(2 * gap + kb[3] * iZ[3].width), jo[0] = gap, jo[1] = jo[0] + gap + kb[0] * iZ[0].height, jo[2] = jo[1] + gap + kb[1] * iZ[1].height, jo[3] = jo[2] + gap + kb[2] * iZ[2].height, jo[4] = jo[3], !e4[0])
				for (dw = 0; dw < 5; dw++) jo[dw] -= kb[0] * iZ[0].height + gap;
			if (!e4[1])
				for (dw = 2; dw < 5; dw++) jo[dw] -= kb[1] * iZ[1].height + gap
		}
	}, this.sS = function() {
		return !(7 === x.sb() && di)
	}, this.g9 = function(gy, gz, a2W) {
		if (iZ && this.sS())
			for (var dw = e4.length - 1; 0 <= dw; dw--)
				if (e4[dw] && this.eI[dw] && jn[dw] < gy && jo[dw] < gz && gy < jn[dw] + kb[dw] * iZ[dw].width && gz < jo[dw] + kb[dw] * iZ[dw].height) return az.cl(v0[dw], a2W), !0;
		return !1
	}, this.gG = function() {
		if (iZ && this.sS()) {
			var dw;
			for (gH.imageSmoothingEnabled = !0, dw = 0; dw < 5; dw++) e4[dw] && this.eI[dw] && (gH.setTransform(kb[dw], 0, 0, kb[dw], jn[dw], jo[dw]), gH.drawImage(iZ[dw], 0, 0));
			gH.setTransform(1, 0, 0, 1, 0, 0)
		}
	}
}

function cI() {
	this.id = 0, this.wc = 0;
	var a2f = null,
		a2g = !1;
	this.cl = function() {
		var ux, eE, eG;
		dW ? this.id = 1 : dV ? this.id = 2 : (function() {
			try {
				if (!(a2f = window.localStorage)) return a2f = null;
				a2f.setItem("testLS", "1"), a2f.removeItem("testLS")
			} catch (error) {
				return a2f = null
			}
			a2g = !0
		}(), ux = this, a2g && (eE = Number(a2f.getItem("zt0")), eG = Number(a2f.getItem("zt1")), eE && eG ? (ux.id = eE, ux.wc = Math.floor(Date.now() / 3e5) - eG) : (a2f.setItem("zt0", "" + Math.floor(3 + Math.random() * (Math.pow(2,
			20) - 3))), a2f.setItem("zt1", "" + Math.floor(Date.now() / 3e5)))))
	}
}

function be() {
	var a1s, a2l, a2m;

	function a2r(dw) {
		var button = v.nB[dw],
			jn = button.jn,
			jo = button.jo,
			g6 = button.g6,
			i5 = button.i5;
		gH.fillStyle = button.a2p, gH.fillRect(jn, jo, g6, i5), dw === a1s && (gH.fillStyle = a2m, gH.fillRect(jn, jo, g6, i5)), gH.lineWidth = tB, gH.strokeStyle = a2l, gH.strokeRect(jn, jo, g6, i5),
			function(button) {
				var jn = button.jn,
					jo = button.jo,
					g6 = button.g6,
					i5 = button.i5;
				gH.textAlign = gJ, gH.textBaseline = gI, gH.font = button.font, gH.fillStyle = a2l, gH.fillText(button.wY, Math.floor(jn + g6 / 2), Math.floor(jo + i5 / 2 + .1 * button.fontSize))
			}(button)
	}
	this.g6 = 0, this.i5 = 0, this.jo = 0, this.gap = 0, this.cl = function() {
		a1s = -1, a2l = ae.gK, a2m = "rgba(255,255,255,0.16)", this.nB = new Array(7), this.i5 = Math.floor((di ? .123 : .093) * fy), this.g6 = Math.floor((di ? 3.96 : 4.2) * this.i5), this.gap = Math.floor(.025 * this.g6);
		var a2n = Math.floor(.26 * this.i5),
			a2o = g1 + a2n + g2;
		this.nB[0] = {
			jn: 0,
			jo: 0,
			g6: Math.floor(.6 * this.g6 - this.gap / 2),
			i5: this.i5,
			wY: "Multiplayer",
			font: a2o,
			a2p: "rgba(22,88,22,0.8)",
			fontSize: a2n
		}, a2n = Math.floor(.18 * this.i5), this.nB[1] = {
			jn: 0,
			jo: 0,
			g6: this.g6 - this.nB[0].g6 - this.gap,
			i5: this.i5,
			wY: "Single Player",
			font: g1 + a2n + g2,
			a2p: "rgba(22,88,88,0.8)",
			fontSize: a2n
		}, this.nB[2] = {
			jn: 0,
			jo: 0,
			g6: this.g6,
			i5: Math.floor(.3 * this.i5),
			wY: "",
			font: this.nB[1].font,
			a2p: "rgba(100,0,0,0.8)",
			fontSize: this.nB[1].fontSize
		}, this.nB[3] = {
			jn: 0,
			jo: 0,
			g6: this.g6,
			i5: this.i5,
			wY: "Back",
			font: this.nB[0].font,
			a2p: "rgba(0,0,0,0.8)",
			fontSize: this.nB[0].fontSize
		}, this.nB[4] = {
			jn: 0,
			jo: 0,
			g6: this.g6,
			i5: Math.floor(.3 * this.i5),
			wY: "The game was updated!",
			font: this.nB[1].font,
			a2p: "rgba(100,0,0,0.8)",
			fontSize: this.nB[1].fontSize
		}, this.nB[5] = {
			jn: 0,
			jo: 0,
			g6: this.nB[0].g6,
			i5: Math.floor(.8 * this.i5),
			wY: "Reload",
			font: this.nB[0].font,
			a2p: "rgba(0,100,0,0.8)",
			fontSize: this.nB[0].fontSize
		}, this.nB[6] = {
			jn: 0,
			jo: 0,
			g6: this.nB[1].g6,
			i5: this.nB[5].i5,
			wY: "Back",
			font: this.nB[0].font,
			a2p: "rgba(0,0,0,0.8)",
			fontSize: this.nB[0].fontSize
		}, this.zp()
	}, this.zp = function() {
		this.jo = Math.floor(.54 * gD), this.nB[0].jn = Math.floor(.5 * jv - .5 * this.g6), this.nB[1].jn = this.nB[0].jn + this.nB[0].g6 + this.gap, this.nB[2].jn = this.nB[3].jn = this.nB[0].jn, this.nB[4].jn = this.nB[5].jn = this.nB[0].jn,
			this.nB[6].jn = this.nB[1].jn, this.nB[0].jo = Math.floor(.54 * gD), this.nB[1].jo = this.nB[0].jo, this.nB[2].jo = Math.floor((gD - this.nB[2].i5 - this.nB[3].i5 - this.gap) / 2), this.nB[3].jo = this.nB[2].jo + this.nB[2].i5 + this
			.gap, this.nB[4].jo = Math.floor((gD - this.nB[4].i5 - this.nB[5].i5 - this.gap) / 2), this.nB[5].jo = this.nB[6].jo = this.nB[4].jo + this.nB[4].i5 + this.gap
	}, this.a2q = function() {
		a2r(0), a2r(1)
	}, this.a2s = function() {
		a2r(2), a2r(3)
	}, this.a2t = function() {
		a2r(4), a2r(5), a2r(6)
	}, this.s1 = function(jn, jo, jJ) {
		var dw = -1;
		return 0 === x.sb() ? dw = this.sZ(jn, jo, 0, 2) : 3 === x.sb() ? dw = this.sZ(jn, jo, 3, 1) : 5 === x.sb() && (dw = this.sZ(jn, jo, 5, 2)), a1s !== dw && (a1s = dw, jJ) && (b7.d6 = !0), -1 !== dw && (q.oo(), !0)
	}, this.sZ = function(jn, jo, a2u, size) {
		for (var dw = a2u; dw < a2u + size; dw++)
			if (jn >= this.nB[dw].jn && jo >= this.nB[dw].jo && jn <= this.nB[dw].jn + this.nB[dw].g6 && jo <= this.nB[dw].jo + this.nB[dw].i5) return dw;
		return -1
	}
}

function a2w() {
	function a32(uQ) {
		return uQ < 0 ? 0 : 255 < uQ ? 255 : Math.floor(uQ)
	}
	this.g6 = 0, this.i5 = 0, this.sS = !1, this.a2x = 0, this.gap = 0, this.ws = 0, this.a2O = 0, this.a2y = 0, this.a2z = 0, this.a30 = 0, this.colors = null, this.cl = function() {
		this.sS = !0, this.a2x = 0, this.resize()
	}, this.resize = function() {
		this.sS && (dj < 1.4 * dk ? this.g6 = Math.floor((di ? .94 : .43) * dj) : (this.i5 = Math.floor((di ? .88 : .43) * dk), this.g6 = Math.floor(1.4 * this.i5)), this.i5 = this.g6 / 1.4, this.gap = this.g6 / 32, this.a2O = Math.floor(.25 *
			this.i5), this.a2y = (this.i5 - this.a2O - 3 * this.gap) / 2, this.a2z = this.g6 - 3 * this.gap - this.a2y, this.a30 = (this.i5 - this.a2O - 4 * this.gap) / 3)
	}, this.a31 = function() {
		this.colors = [
			[0, 0, 0],
			[0, 0, 0]
		];
		var df = dm().split("");
		if (df.length < 6)
			for (var hx = 2; 0 <= hx; hx--) this.colors[0][hx] = a32(256 * Math.random());
		else
			for (var dw = 2; 0 <= dw; dw--) this.colors[0][dw] = a32(4 * (10 * parseInt(df[2 * dw]) + parseInt(df[2 * dw + 1])));
		this.a33()
	}, this.a34 = function() {
		return [er(this.colors[0][0], 4), er(this.colors[0][1], 4), er(this.colors[0][2], 4)]
	}, this.s4 = function(gA, gB, deltaY) {
		var js = (jv - this.g6) / 2;
		gB -= (gD - this.i5) / 2 + this.a2O, (gA -= js) < 0 || gB < 0 || gA >= this.g6 || gB >= this.i5 - this.a2O || (js = Math.floor(3 * gB / (this.i5 - this.a2O)), this.colors[this.ws][js] = a32(this.colors[this.ws][js] + (deltaY < 0 ? 1 : -
			1) * Math.max(Math.abs(.05 * deltaY), 1)), b7.d6 = !0)
	}, this.g9 = function(gA, gB) {
		this.a2x = 0;
		var js = (jv - this.g6) / 2;
		return gB -= (gD - this.i5) / 2, (gA -= js) < 0 || gB < 0 || gA >= this.g6 - 1 || gB >= this.i5 - 1 || gA > this.g6 - (.4 * this.a2O + 3 * this.gap) && gB < this.a2O ? (this.sS = !1, 0 === x.sb() && z.dU(!0), !(b7.d6 = !0)) : gA < this
			.gap || gB < this.gap + this.a2O || gA >= this.g6 || gB >= this.i5 - this.gap || (gA < this.gap + this.a2y ? (gB < this.gap + this.a2O + this.a2y && 0 !== this.ws && (this.ws = 0, b7.d6 = !0), !0) : gA < this.gap + this.a2y || (gA -=
				2 * this.gap + this.a2y, gB < this.gap + this.a2O + this.a30 ? (this.a2x = 1, this.colors[this.ws][0] = a32(256 * gA / this.a2z), b7.d6 = !0) : gB < 2 * this.gap + this.a2O + this.a30 || (gB < 2 * this.gap + this.a2O + 2 *
					this.a30 ? (this.a2x = 2, this.colors[this.ws][1] = a32(256 * gA / this.a2z), b7.d6 = !0) : !(gB >= 3 * this.gap + this.a2O + 2 * this.a30) || (this.a2x = 3, this.colors[this.ws][2] = a32(256 * gA / this.a2z), b7.d6 = !0))
				))
	}, this.a33 = function() {
		for (var hx = 2; 0 <= hx; hx--) this.colors[0][hx] = a32(this.colors[0][hx])
	}, this.a35 = function() {
		for (var e4, df = "", dw = 0; dw < 3; dw++)(e4 = er(this.colors[0][dw], 4)) < 10 && (df += "0"), df += e4.toString();
		return df
	}, this.s1 = function(gA) {
		0 !== this.a2x && (gA -= 2 * this.gap + this.a2y + (jv - this.g6) / 2, this.colors[this.ws][this.a2x - 1] = a32(256 * gA / this.a2z), b7.d6 = !0)
	}, this.a36 = function() {
		0 < this.a2x && (this.a2x = 0, this.a33(), aR.a37(), b7.d6 = !0)
	}, this.gG = function() {
		var js = (jv - this.g6) / 2,
			jt = (gD - this.i5) / 2;
		gH.setTransform(1, 0, 0, 1, js, jt), gH.fillStyle = ae.kv, gH.fillRect(0, this.a2O, this.g6, this.i5 - this.a2O), gH.fillStyle = ae.l6, gH.fillRect(0, 0, this.g6, this.a2O), gH.fillStyle = ae.gK, gH.lineWidth = tB, gH.strokeStyle = ae.gK,
			gH.strokeRect(-1, -1, this.g6 + 2, this.i5 + 2), gH.fillRect(0, this.a2O, this.g6, tB), gH.font = g1 + Math.floor(.31 * this.a2O) + g2, gH.textBaseline = gI, gH.textAlign = gJ, gH.fillText("Choose Your Nation's Color!", Math.floor((
				this.g6 - this.gap - .4 * this.a2O) / 2), Math.floor(.55 * this.a2O)), this.a38(0), gH.lineWidth = tB, this.a39(0), this.a39(1), this.a39(2), j.vI(Math.floor(js + this.g6 - .4 * this.a2O - this.gap), Math.floor(jt + .3 * this
				.a2O), Math.floor(.4 * this.a2O)), gH.setTransform(1, 0, 0, 1, 0, 0)
	}, this.a38 = function(dw) {
		var gV = this.colors[dw][0],
			t7 = this.colors[dw][1],
			dw = this.colors[dw][2];
		gH.fillStyle = "rgb(" + gV + "," + t7 + "," + dw + ")", gH.fillRect(this.gap, this.a2O + this.gap, this.a2y, 2 * this.a2y + this.gap), gH.lineWidth = tB, gH.strokeStyle = ae.gK, gH.strokeRect(this.gap, this.a2O + this.gap, this.a2y, 2 *
			this.a2y + this.gap), gH.fillStyle = gV + t7 + dw < 306 && t7 < 150 ? ae.gK : ae.jz, gH.font = g1 + Math.floor(.32 * this.a30) + g2, gH.textAlign = gJ, gH.textBaseline = gI, gH.rotate(-Math.PI / 2), gH.fillText("National Color",
			Math.floor(-1.5 * this.gap - this.a2O - this.a2y), Math.floor(this.gap + .5 * this.a2y)), gH.rotate(Math.PI / 2)
	}, this.a39 = function(dw) {
		gH.fillStyle = "rgb(" + (0 === dw ? 150 : 2 === dw ? 30 : 0) + "," + (1 === dw ? 130 : 2 === dw ? 30 : 0) + "," + (2 === dw ? 220 : 0) + ")", gH.fillRect(2 * this.gap + this.a2y, this.a2O + this.gap + dw * (this.gap + this.a30), Math
				.floor(this.colors[this.ws][dw] * this.a2z / 255), this.a30), gH.strokeStyle = ae.gK, gH.strokeRect(2 * this.gap + this.a2y, this.a2O + this.gap + dw * (this.gap + this.a30), this.a2z, this.a30), gH.fillStyle = ae.gK, gH.font =
			g1 + Math.floor(.32 * this.a30) + g2, gH.textBaseline = gI, gH.textAlign = vo, gH.fillText((0 === dw ? "Red: " : 1 === dw ? "Green: " : "Blue: ") + this.colors[0][dw].toString(), 3 * this.gap + this.a2y, Math.floor(this.a2O + this
				.gap + dw * (this.gap + this.a30) + .53 * this.a30))
	}
}

function bf() {
	var a3A, a3B, xM, xX, yQ, a3C, a3D, a3E, a3F, g5, fontSize, kH, a3G, a3I, a3H = 0;

	function a3L() {
		return aP.jA.a3M[(a3G + a3H) % aP.jA.a3N]
	}

	function a3J() {
		a3G++, kH = b7.dX, aP.jA.zh(a3L(), 4) && (a3I = !0, aP.lm.a3O(a3L()))
	}

	function a3R() {
		0 === a3G ? y.a3T(3249) : (a3G === aP.jA.a3N - 1 && (a3G = -1), a3J())
	}

	function a3a(jo, zS, a3Z) {
		var js = Math.floor((jv - xX) / 2) + a3D,
			ju = js + Math.floor(a3Z * (xX - 2 * a3D));
		gH.lineWidth = zS, gH.beginPath(), gH.moveTo(js, jo), gH.lineTo(ju, jo), gH.lineTo(Math.floor(js - a3D + a3Z * xX), jo + xM), gH.lineTo(js - a3D, jo + xM), gH.closePath()
	}
	this.cl = function() {
		x.setState(6), a3A = 0, a3B = 1, a3E = "rgba(0,220,120,0.4)", a3F = "rgba(0,0,0,0.8)", this.resize(), b7.d6 = !0, a3G = 0, a3I = !1, a3J()
	}, this.resize = function() {
		xX = Math.floor((di ? .5 : .25) * fy), yQ = xX + 12, xM = Math.floor(.125 * xX), a3D = 3 * xM, a3C = Math.floor(.225 * xX), fontSize = Math.floor(.3 * xM), g5 = xD + fontSize + g2
	}, this.a3K = function(hn) {
		a3H = hn
	}, this.a3P = function(a3Q) {
		a3Q === a3L() && (a3I = !1, a3R())
	}, this.zj = function(a3Q) {
		6 !== x.sb() || a3I || (kH = b7.dX, a3I = !0, aP.lm.a3O(a3Q))
	}, this.g9 = function(jn, jo) {
		var js = Math.floor((jv - yQ) / 2),
			jt = Math.floor(.5 * (gD - gC - xM - a3C)) + xM + gC;
		return js < jn && jn < js + yQ && jt < jo && jo < jt + a3C && (this.a3U(), v.s1(jn, jo, !1), !0)
	}, this.a3U = function() {
		aP.jA.a3V(3260), a2.cl(), b7.d6 = !0
	}, this.iK = function() {
		6 === x.sb() && (a3I ? b7.dX > kH + 12e3 && y.a3T(3250) : b7.dX > kH + 12e3 && a3R(), 100 < (a3A += .07 * a3B * (a3A < 16 ? 5 + a3A : 84 < a3A ? 105 - a3A : 17)) ? (a3A = 100, a3B = -1) : a3A < 0 && (a3A = 0, a3B = 1), a3E = "rgba(0," +
			Math.floor(190 - 1.9 * a3A) + "," + Math.floor(120 - 1.2 * a3A) + "," + (.4 + .004 * a3A) + ")", a3F = "rgba(0," + Math.floor(1.9 * a3A) + "," + Math.floor(1.2 * a3A) + "," + (.8 - .004 * a3A) + ")", b7.d6 = !0)
	}, this.gG = function() {
		var jn = Math.floor((jv - yQ) / 2),
			jo = Math.floor(.5 * (gD - gC - xM - a3C));
		! function(title, jo, zS, a3Z) {
			gH.fillStyle = a3F, a3a(jo, zS, 1), gH.fill(), gH.fillStyle = a3E, a3a(jo, zS, a3Z), gH.fill(), gH.strokeStyle = ae.gK, a3a(jo, zS, 1), gH.stroke(),
				function(a3c, jo) {
					gH.textAlign = gJ, gH.textBaseline = gI, gH.font = g5, gH.fillStyle = ae.gK, gH.fillText(a3c, Math.floor(.5 * jv), Math.floor(jo + .58 * xM))
				}(title, jo)
		}("Loading", jo, 3, a3A / 100),
		function(jn, jo, g6, i5, wY) {
			gH.fillStyle = ae.kt, gH.fillRect(jn, jo, g6, i5), gH.lineWidth = 3, gH.strokeStyle = ae.gK, gH.strokeRect(jn, jo, g6, i5);
			var ez = Math.floor(.3 * i5);
			gH.textAlign = gJ, gH.textBaseline = gI, gH.font = xD + ez + g2, gH.fillStyle = ae.gK, gH.fillText(wY, Math.floor(jn + g6 / 2), Math.floor(jo + i5 / 2 + .1 * ez))
		}(jn, jo + xM + gC, yQ, a3C, "Back")
	}
}

function bg() {
	var dS;
	this.cl = function() {
		v.cl(), z.cl(), dS = 0, b6.cl(), a2.cl()
	}, this.setState = function(a3d) {
		dS = a3d
	}, this.sb = function() {
		return dS
	}, this.a3e = function() {
		0 === x.sb() && a2.a3f(), this.setState(8), aL.a3f(), gE.sc(), bA.sS = !1, az.g9(-1e3, -1e3)
	}, this.sc = function(dG) {
		if (!au.pI) return !1;
		if (!(b7.dX < 400)) {
			if ("Enter" === dG.key || "Escape" === dG.key) {
				if (this.a3g()) return 0 === dS && z.dU(!0), !0;
				if ("Enter" === dG.key) {
					if (0 === dS) return a2.a3h(), !0;
					if (7 === dS) return !0
				}
			}
			return !1
		}
	}, this.a3i = function() {
		return ac.sS || bA.sS || az.sS || gE.a3j()
	}, this.a3k = function() {
		bA.resize(), ac.resize(), az.resize(), gE.resize()
	}, this.a3g = function() {
		return !!az.oL() || !(!gE.sc() && (bA.sS ? bA.sS = !1 : !ac.sS || (ac.oL(), 0)))
	}, this.e5 = function() {
		b7.d6 = !0, 8 === dS ? kT ? af.se(!1) : b5.sS ? b5.sf() : ac.sS ? ac.oL() : j.sf() : 7 === dS ? aL.a3l() : 6 === dS ? w.a3U() : 3 === dS ? y.a3m(0, 0) : 2 === dS ? a1.a3m() : 0 !== dS || this.a3g() || e0(11)
	}, this.g9 = function(jn, jo) {
		if (!b6.g9(jn, jo) && au.pI && !az.g9(jn, jo) && !ac.g9(jn, jo) && !(6 === dS && w.g9(jn, jo) || 2 === dS && a1.g9(jn, jo) || aR.g9(jn, jo) || bA.g9(jn, jo) || ay.g9(jn, jo, !0) || gE.g9(jn, jo, !0))) {
			if (q.g9(jn, jo), 0 === dS) a2.g9(jn, jo);
			else if (3 === dS) y.g9(jn, jo);
			else if (5 === dS) a0.g9(jn, jo);
			else if (7 === dS && aL.g9(jn, jo)) return;
			b0.g9(jn, jo)
		}
	}, this.s1 = function(jn, jo) {
		if (aR.s1(jn, jo), !q.zf) {
			if (b6.s1(jn, jo)) return void q.oo();
			if (0 <= gE.sZ(jn, jo)) return void q.oo();
			if (gE.s1(jn, jo)) return void q.oo();
			if (2 === dS && a1.s1(jn, jo)) return void q.oo();
			if (v.s1(jn, jo, !0)) return
		}
		q.s1(jn, jo)
	}, this.click = function(jn, jo) {
		q.sU(), gE.a36() || ay.g9(jn, jo, !1) || gE.g9(jn, jo, !1)
	}, this.s4 = function(jn, jo, deltaY) {
		gE.vK[1].rH.sS || (gE.vK[2].rH.sS ? gE.vK[2].rH.s4(jn, jo, deltaY) : 0 === dS && q.s4(jn, deltaY))
	}, this.a3n = function() {
		v.zp(), gE.zp(), 0 === dS ? (z.resize(), q.zp()) : 7 === dS && aL.resize(), b7.d6 = !0
	}, this.gG = function() {
		var jo, gS, gR, jn;
		8 !== dS && 10 !== dS && (gH.imageSmoothingEnabled = !0, this.qP(), q.gG(), l.gG(), jo = Math.floor(.3 * gD), gS = a3.uO("territorial.io"), gR = (gR = 1.75 * gD / gS.width) * gS.width < .98 * jv ? .98 * jv / gS.width : gR, gH
			.globalAlpha = .15, jn = Math.floor(.5 * (jv - gR * gS.width)), jn = Math.floor(jn / gR), jo = Math.floor(jo - .5 * gS.height * gR), jo = Math.floor(jo / gR), gH.setTransform(gR, 0, 0, gR, jn, jo), gH.drawImage(gS, jn, jo), gH
			.setTransform(1, 0, 0, 1, 0, 0), gH.globalAlpha = 1, ay.gG(), b0.gG(), gE.gG(), aR.gG(), 0 === dS ? a2.gG() : 2 === dS ? a1.gG() : 3 === dS ? y.gG() : 5 === dS ? a0.gG() : 6 === dS ? w.gG() : 7 === dS && aL.gG(), gE.a3p(), b6
		.gG(), bA.gG(), az.gG(), ac.gG())
	}, this.qP = function() {
		var a3r, a3q;
		if (makeMainMenuTransparent) gH.clearRect(0, 0, dj, dk);
		else au.pI ? (a3q = dj / au.eZ, a3r = dk / au.ea, gH.setTransform(a3q = a3r < a3q ? a3q : a3r, 0, 0, a3q, Math.floor((dj - a3q * au.eZ) / 2), Math.floor((dk - a3q * au.ea) / 2)), gH.drawImage(au.pK, 0, 0), gH.setTransform(1, 0, 0, 1, 0,
			0), gH.fillStyle = ae.kt) : gH.fillStyle = ae.jz, gH.fillRect(0, 0, dj, dk)
	}
}

function a3s() {
	this.g6 = 0, this.i5 = 0, this.a3t = 0, this.sS = !1, this.wh = 10, this.f6 = .12, this.a2x = !1, this.a3u = !1, this.a3v = !1, this.cl = function() {
		this.sS = !0, this.resize(), this.a2x = !1
	}, this.resize = function() {
		this.sS && (this.g6 = 1.15 * dj < dk ? Math.floor((di ? .94 : .69) * dj) : Math.floor((di ? .94 : .69) * dk / 1.15), this.g6 -= this.g6 % this.wh, this.i5 = +this.g6, this.a3t = Math.floor(.15 * this.g6))
	}, this.g9 = function(gA, gB, dS) {
		var js = (jv - this.g6) / 2;
		return gB -= (gD - this.i5 - this.a3t) / 2, (gA -= js) < 0 || gB < 0 || gA >= this.g6 - 1 || gB >= this.i5 + this.a3t - 1 || gA >= this.g6 - this.a3t && gB < this.a3t ? (0 === dS && (this.sS = !1, 0 === x.sb() && z.dU(!0), b7.d6 = !0), !
			1) : (gB < this.a3t || (gA = (gA = er(gA, js = Math.floor(this.g6 / this.wh)) + this.wh * er(gB - this.a3t, js)) < 0 ? 0 : gA >= b3.wl ? b3.wl - 1 : gA, (0 === dS || 1 === dS && !b3.dy[gA] || 2 === dS && b3.dy[gA]) && (this
			.a3u = !b3.dy[gA], this.a2x = !0, this.a3v = !0, b3.dy[gA] = !b3.dy[gA], b3.x1(), b7.d6 = !0)), !0)
	}, this.s1 = function(gA, gB) {
		this.a2x && this.g9(gA, gB, this.a3u ? 1 : 2)
	}, this.a36 = function() {
		this.a3v && (dv(), this.a3v = !1), this.a3v = !1, this.a2x = !1
	}, this.gG = function() {
		gH.imageSmoothingEnabled = !0;
		for (var js = (jv - this.g6) / 2, jt = (gD - this.i5 - this.a3t) / 2, qY = (gH.setTransform(1, 0, 0, 1, js, jt), gH.fillStyle = ae.kv, gH.fillRect(0, this.a3t, this.g6, this.i5), gH.fillStyle = ae.lA, gH.fillRect(0, 0, this.g6, this.a3t),
					gH.fillStyle = ae.gK, gH.lineWidth = tB, gH.strokeStyle = ae.gK, gH.strokeRect(-1, -1, this.g6 + 2, this.i5 + this.a3t + 2), gH.fillRect(0, this.a3t - tB, this.g6, tB), gH.font = g1 + Math.floor(.44 * this.a3t) + g2, gH
					.textAlign = gJ, gH.textBaseline = gI, gH.fillText("Select Your Emojis!", Math.floor((this.g6 - .725 * this.a3t) / 2), Math.floor(.55 * this.a3t)), Math.floor(this.g6 / this.wh)), zoom = (qY - 2 * this.f6 * qY) / b3.g6, dw =
				b3.wl - 1; 0 <= dw; dw--) gH.setTransform(1, 0, 0, 1, Math.floor(js + dw % this.wh * qY), Math.floor(jt + this.a3t + er(dw, this.wh) * qY)), b3.dy[dw] && (gH.fillStyle = ae.lC, gH.fillRect(0, 0, qY, qY)), gH.setTransform(zoom, 0,
			0, zoom, Math.floor(js + dw % this.wh * qY + this.f6 * qY), Math.floor(jt + this.a3t + er(dw, this.wh) * qY + this.f6 * qY)), gH.drawImage(b3.uN[dw], 0, 0);
		j.vI(Math.floor(js + this.g6 - .725 * this.a3t), Math.floor(jt + .275 * this.a3t), Math.floor(.45 * this.a3t)), gH.setTransform(1, 0, 0, 1, 0, 0), gH.imageSmoothingEnabled = !1
	}
}

function bh() {
	var a3w, eD, a3x;

	function ww() {
		var dS;
		0 === (dS = x.sb()) ? a2.a3f() : 6 === dS ? aP.jA.a3V(a3w) : 7 === dS ? (aL.a3f(), aP.jA.close(aP.jA.a3y, 3240)) : 8 === dS && (u9(!0), a2.a3f()), x.setState(3), v.zp(), a41(a3w), b7.d6 = !0
	}

	function a3z(dG) {
		for (var dw = eD.length - 1; 0 <= dw; dw--)
			if (dG === eD[dw].code) return eD[dw].df;
		return a3x + dG
	}

	function a41(dG) {
		v.nB[2].wY = a3z(dG)
	}
	this.bi = function() {
		(eD = []).push({
			df: "No Server Response",
			code: 1006
		}), eD.push({
			df: "Account successfully saved!",
			code: 3231
		}), eD.push({
			df: "Account Error",
			code: 3232
		}), eD.push({
			df: "No Servers Found",
			code: 3249
		}), eD.push({
			df: "Thanks for the vote.",
			code: 3252
		}), eD.push({
			df: "Please accept Cookies",
			code: 3265
		}), eD.push({
			df: "Invalid Password Format",
			code: 3266
		}), eD.push({
			df: "Invalid Replay Format",
			code: 3605
		}), eD.push({
			df: "Lobby Timeout",
			code: 4207
		}), eD.push({
			df: "Invalid Username",
			code: 4214
		}), eD.push({
			df: "User already exists.",
			code: 4224
		}), eD.push({
			df: "No Client Response Error",
			code: 4229
		}), a3x = "Error "
	}, this.cl = function(a3Q, dG) {
		a3w = dG;
		var dS = x.sb();
		if (6 === dS) {
			if (4211 === dG) return void a0.cl(0, 0);
			if (4214 !== dG) return void w.a3P(a3Q)
		} else {
			if (7 !== dS) return 8 === dS ? void(a3Q !== aP.jA.sJ || j1 || k.vu(a3z(dG))) : void 0;
			if (a3Q !== aP.jA.a3y) return
		}
		ww()
	}, this.a3T = function(dG) {
		a3w = dG, 8 === x.sb() ? k.vu(a3z(dG)) : ww()
	}, this.resize = function() {
		a41(a3w)
	}, this.g9 = function(jn, jo) {
		3 === v.sZ(jn, jo, 3, 1) && this.a3m(jn, jo)
	}, this.a3m = function(jn, jo) {
		a2.cl(), v.s1(jn, jo, !1), b7.d6 = !0
	}, this.gG = function() {
		v.a2s()
	}
}

function bj() {
	var input, color;
	this.sS = !1, this.oY = !1, this.cl = function() {
		color = ae.kv, (input = document.createElement("INPUT")).setAttribute("type", "text"), input.setAttribute("name", "username"), input.setAttribute("id", "usernameField"), input.setAttribute("autocomplete", "username"), input.value = "",
			input.style.textAlign = "center", input.style.backgroundColor = color, input.style.borderRadius = "0", input.style.color = ae.gK, input.style.position = "absolute", input.readOnly = !1, input.addEventListener("input", function() {
				a2.a42()
			}), input.addEventListener("focus", function() {
				z.oY = !0
			}), input.addEventListener("blur", function() {
				z.oY = !1
			})
	}, this.resize = function() {
		var fontSize, t9, tA;
		this.sS && (t9 = .3 * (fontSize = .22 * v.i5 / nV), tA = tB / nV, input.style.border = tA.toFixed(2) + "px solid " + ae.gK, input.style.font = g1 + fontSize + g2, input.style.padding = t9.toFixed(2) + "px", input.style.left = (((jv - v
			.g6) / nV - tA) / 2).toFixed(2) + "px", input.style.width = (v.g6 / nV - 2 * t9 - tA).toFixed(2) + "px", input.style.top = ((v.jo - .52 * v.i5) / nV).toFixed(2) + "px")
	}, this.get = function() {
		return input
	}, this.dU = function(dU) {
		this.sS !== dU && ((this.sS = dU) ? (this.resize(), document.body.appendChild(input)) : (this.oY = !1, document.body.removeChild(input)))
	}, this.sh = function(a43) {
		a43 && color === ae.kv || !a43 && color === ae.lM || (color = a43 ? ae.kv : ae.lM, input.style.backgroundColor = color)
	}
}

function c9() {
	var ma, a46, a47, a48;
	this.a44 = 0, this.a45 = 0, this.cl = function() {
		var gS, kb;
		7 === x.sb() && (ma = ai.ma, a46 = 0, a47 = b7.dX + 4500, a48 = aP.w1.a49() ? 2 : 0, x.setState(10), gH.imageSmoothingEnabled = !0, x.qP(), gS = a3.uO("loading"), kb = 1, kb = (di ? .396 : .25) * fy / gS.width, gH.setTransform(kb, 0, 0,
			kb, Math.floor((dj - kb * gS.width) / 2), Math.floor((dk - kb * gS.height) / 2)), gH.drawImage(gS, 0, 0), gH.setTransform(1, 0, 0, 1, 0, 0))
	}, this.jH = function() {
		0 < a48 && b7.dX > a47 && (a48--, a47 += 4500, 0 === b7.a4A) && 0 === b7.iY() && (0 === a48 && aP.jA.sJ < aP.jA.a4B && (aP.jA.sJ += aP.jA.a4C), aP.jA.zh(aP.jA.sJ, 5))
	}, this.a4D = function() {
		var f6, dw;
		return 10 === x.sb() && (f6 = ai.ma, dw = ai.g0, aP.w1.a4E(ma), ma = null, ai.cl(f6), ai.g0 = dw, !0)
	}, this.a4F = function() {
		10 === x.sb() && 2 <= ++a46 && (aP.w1.a4E(ma), ma = null)
	}
}

function c6() {
	var a4H, a4I, a4J, a4K, a4L, a4M, a4N, a4P, a4Q, a4S, a4T, a4U, a4X, a4Y, a4Z, a4a, a4b, a4O = 48,
		a4V = ["Joined", "Skipped", "Multiplayer", "Singleplayer"],
		a4W = [0, 0, 0, 0];

	function a4g(dw, uN) {
		var dw = a4N[dw].getContext("2d", {
				alpha: !0
			}),
			zoom = (dw.clearRect(0, 0, a4O, a4O), a4O / uN.width),
			dY = a4O / uN.height,
			zoom = dY < zoom ? dY : zoom;
		dw.imageSmoothingEnabled = !0, dw.setTransform(zoom, 0, 0, zoom, Math.floor((a4O - zoom * uN.width) / 2), Math.floor((a4O - zoom * uN.height) / 2)), dw.drawImage(uN, 0, 0), dw.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a4k(iZ, gV, a4n, gT) {
		gT.beginPath(), gT.moveTo(iZ, iZ), gT.lineTo(iZ + Math.cos(a4n) * gV, iZ + Math.cos(a4n + 1.5 * Math.PI) * gV), gT.stroke()
	}

	function a51() {
		if (7 === x.sb()) {
			for (var gf, uN, gT, zoom, dY, hn = -1, dw = a4P.length - 1; 0 <= dw; dw--)
				if (null === a4P[dw].gS) {
					hn = dw;
					break
				} - 1 !== hn && (null !== (gf = a4r(a4P[hn].a4v, a4P[hn].a4w)) ? a4P[hn].gS = gf : (gf = {
					eZ: au.eZ,
					ea: au.ea,
					pK: au.pK,
					pG: au.pG,
					pH: au.pH,
					pL: au.pL,
					pi: au.pi,
					a4s: au.a4s
				}, au.bi(a4P[hn].a4v, a4P[hn].a4w), au.pJ.a52(), (uN = document.createElement("canvas")).width = 128, uN.height = 128, gT = uN.getContext("2d", {
					alpha: !1
				}), (zoom = 128 / au.eZ) < (dY = 128 / au.ea) && (zoom = dY), gT.imageSmoothingEnabled = !0, gT.setTransform(zoom, 0, 0, zoom, (128 - zoom * au.eZ) / 2, (128 - zoom * au.ea) / 2), gT.drawImage(au.pK, 0, 0), au.eZ = gf.eZ, au
				.ea = gf.ea, au.pK = gf.pK, au.pG = gf.pG, au.pH = gf.pH, au.pL = gf.pL, au.pi = gf.pi, au.a4s = gf.a4s, a4P[hn].gS = uN), b7.d6 = !0)
		}
	}

	function a4r(a4v, a4w) {
		for (var dw = a4P.length - 1; 0 <= dw; dw--)
			if (null !== a4P[dw].gS && a4P[dw].a4v === a4v && a4P[dw].a4w === a4w) return a4P[dw].gS;
		return null
	}
	this.cl = function() {
		var dw;
		for (a4b = 0, a4S = -1, x.setState(7), a4P = [], this.resize(), a4N = new Array(13), dw = a4N.length; 0 <= dw; dw--) a4N[dw] = document.createElement("canvas"), a4N[dw].width = a4O, a4N[dw].height = a4O;
		for (dw = 0; dw < 7; dw++) ! function(w9) {
			var a4i, gT = a4N[w9 - 2].getContext("2d", {
					alpha: !0
				}),
				a4h = 1.5 * Math.PI,
				iZ = Math.floor(.5 * a4O),
				gV = Math.floor(.48 * a4O);
			gT.lineWidth = 2, gT.strokeStyle = ae.gK, gT.clearRect(0, 0, a4O, a4O);
			for (var dw = 0; dw < w9; dw++) a4i = a4h + 2 * Math.PI / w9,
				function(dw, iZ, gV, a4h, a4i, gT) {
					gT.fillStyle = b8.a4m[dw], gT.beginPath(), gT.arc(iZ, iZ, gV, a4h, a4i), gT.lineTo(iZ, iZ), gT.fill()
				}(dw + 1, iZ, gV, a4h, a4i, gT), 0 !== dw && a4k(iZ, gV, a4h, gT), a4h = a4i;
			a4k(iZ, gV, 1.5 * Math.PI, gT),
				function(iZ, gV, gT) {
					gT.beginPath(), gT.arc(iZ, iZ, gV, 0, 2 * Math.PI), gT.stroke()
				}(iZ, gV, gT)
		}(dw + 2);
		a4g(7, a3.get(4)), a4g(8, b3.uN[27]), a4g(9, b3.uN[46]), a4g(10, b3.uN[36]), a4g(11, a3.get(19)), a4g(12, a3.get(20)), b7.d6 = !0
	}, this.a3l = function() {
		this.a3f(), aP.jA.a3V(3240), a2.cl(), b7.d6 = !0
	}, this.a3f = function() {
		a4P = [], a4N = [], bC.a4d.a4e()
	}, this.wg = function() {
		return a4U
	}, this.resize = function() {
		var a4o, p6, yf, a4p;
		for (a4J = [0, 0], a4Q = [0, 0, 0, 0], a4a = di ? (a4T = Math.floor(.8 * .4 * fy), a4U = Math.floor(.56 * a4T), a4Q[0] = gC, dj < dk ? (a4Q[1] = a4U + 2 * gC, a4Q[2] = dj - 3 * a4Q[0], a4Q[3] = b0.gF() - 3 * gC - a4U, a4Y = Math.floor(
				.95 * a4U), a4Z = Math.floor((dj - a4T - gC) / 2), Math.floor(gC + a4U / 2)) : (a4Q[1] = gC, a4Q[2] = dj - 3 * gC - a4T, a4Q[3] = b0.gF() - 2 * gC, a4Y = Math.floor(.8 * a4T), a4Q[3] - a4U < a4T && (a4Y = Math.floor(.8 * (a4Q[
				3] - a4U)), a4Y = vg(a4U, a4Y)), a4Z = Math.floor(dj - a4T / 2 - gC), vg(a4a = Math.floor(gC + a4U + (a4Q[3] - a4U) / 2), Math.floor(a4U + 2 * gC + a4Y / 2)))) : (a4T = Math.floor(.2016 * fy), a4U = Math.floor(.56 * a4T), a4Q[2] =
				Math.floor(.5 * dj), a4Q[3] = Math.floor(.5 * dk), a4Q[1] = Math.floor(.45 * (dk - a4Q[3])), a4Q[0] = Math.floor((dj - a4Q[2]) / 2), a4Y = Math.floor(.75 * a4U), a4Z = Math.floor(dj / 2), Math.floor(a4Q[1] + a4Q[3] + (dk - a4Q[
					3] - a4Q[1]) / 2)), a4X = g1 + Math.floor(.65 * a4U / 4) + g2, a4o = p6 = 1; a4o * p6 < a4P.length;) a4Q[3] / (p6 + 1) < a4Q[2] / (a4o + 1) ? a4o++ : p6++;
		a4H = (yf = (a4Q[2] - (a4o - 1) * gC) / a4o) < (a4p = (a4Q[3] - (p6 - 1) * gC) / p6) ? yf : a4p, a4I = Math.floor(a4H), a4M = g1 + Math.floor(.5 * a4H / 5) + g2, a4J[0] = a4o, a4J[1] = p6, a4K = a4Q[0] + Math.floor((a4Q[2] - a4J[0] *
			a4H - (a4J[0] - 1) * gC) / 2), a4L = a4Q[1] + Math.floor((a4Q[3] - a4J[1] * a4H - (a4J[1] - 1) * gC) / 2)
	}, this.a2H = function(a4q, f6) {
		var dw, dY, gS, ez = a4P.length;
		for (a4W = a4q, dw = 0; dw < f6.length; dw++) gS = a4r(f6[dw].pi, f6[dw].a4s), a4P.push({
			a4t: f6[dw].id,
			tu: f6[dw].tu,
			tv: f6[dw].a4u,
			a4v: f6[dw].pi,
			a4w: f6[dw].a4s,
			joined: f6[dw].a4x,
			wd: f6[dw].a3Z,
			a4y: f6[dw].a4y,
			gS: gS,
			a4z: f6[dw].a4z,
			rg: f6[dw].rg
		});
		for (dw = ez - 1; 0 <= dw; dw--) a4P.shift();
		if (-1 !== a4S)
			for (dY = a4S, a4S = -1, dw = a4P.length - 1; 0 <= dw; dw--)
				if (a4P[dw].a4t === dY) {
					a4S = dY;
					break
				}(a4P.length > a4b || a4P.length < a4b) && (a4b = a4P.length, this.resize()), this.a50(), b7.d6 = !0
	}, this.a50 = function() {
		for (var dw = a4P.length - 1; 0 <= dw; dw--) null === a4P[dw].gS && setTimeout(a51, 0)
	}, this.g9 = function(jn, jo) {
		return 4 * ((jn - a4Z) * (jn - a4Z) + (jo - a4a) * (jo - a4a)) <= a4Y * a4Y ? (this.a3l(), v.s1(jn, jo, !1), !0) : function(jn, jo) {
			var hn, hx, js, jt;
			if (0 !== a4P.length) {
				var dw = 0;
				for (jt = a4L, hx = 0; hx < a4J[1]; hx++) {
					for (js = a4K, hn = 0; hn < a4J[0]; hn++) {
						if (js < jn && jn < js + a4H && jt < jo && jo < jt + a4H) return !!aP.a54.a55(a4P[dw].a4t) && (a4S = a4P[dw].a4t !== a4S ? a4P[dw].a4t : -1, b7.d6 = !0);
						if (++dw >= a4P.length) return !1;
						js += a4H + gC
					}
					jt += a4H + gC
				}
			}
			return !1
		}(jn, jo)
	}, this.gG = function() {
		var hn, hx, jn, gV, zoom, dw = 0,
			jo = a4L;
		if (gH.imageSmoothingEnabled = !0, gH.lineWidth = 3, gV = Math.floor(.5 * a4Y), gH.fillStyle = ae.kt, gH.beginPath(), gH.arc(a4Z, a4a, gV, 0, 2 * Math.PI), gH.fill(), gH.strokeStyle = ae.gK, gH.beginPath(), gH.arc(a4Z, a4a, gV, 0, 2 *
				Math.PI), gH.stroke(), gV = a3.get(0).height, zoom = .6 * a4Y / gV, gH.setTransform(zoom, 0, 0, zoom, Math.floor(a4Z - .56 * zoom * a3.get(0).width), Math.floor(a4a - .5 * zoom * gV)), gH.drawImage(a3.get(0), 0, 0), gH
			.setTransform(1, 0, 0, 1, 0, 0),
			function() {
				gH.fillStyle = ae.kt, gH.fillRect(dj - a4T - gC, gC, a4T, a4U), 0 <= a4S ? (gH.fillStyle = ae.lC, gH.fillRect(dj - a4T - gC, gC, a4T, Math.floor(.25 * a4U))) : (gH.fillStyle = ae.lY, gH.fillRect(dj - a4T - gC, gC + Math.floor(
					.25 * a4U), a4T, Math.floor(.25 * a4U)));
				gH.strokeStyle = ae.gK, gH.strokeRect(dj - a4T - gC, gC, a4T, a4U), gH.fillStyle = ae.gK, gH.font = a4X, gH.textBaseline = gI;
				for (var jo, t9 = Math.floor(.04 * a4T), tA = Math.floor(.08 * a4U), dw = 3; 0 <= dw; dw--) jo = Math.floor(gC + (dw + 1) * (a4U + 2 * tA) / 5 - tA), gH.textAlign = vo, gH.fillText(a4V[dw], dj - a4T - gC + t9, jo), gH.textAlign =
					xB, gH.fillText(ad.k3.k4(a4W[dw]), dj - gC - t9, jo)
			}(), 0 !== a4P.length)
			for (hx = 0; hx < a4J[1]; hx++) {
				for (jn = a4K, hn = 0; hn < a4J[0]; hn++) {
					if (! function(dw, jn, jo) {
							var zoom, hx, a59, a5B, a5C;
							null === a4P[dw].gS ? (gH.fillStyle = ae.kt, gH.fillRect(jn, jo, a4I, a4I)) : (zoom = a4I / 128, gH.setTransform(zoom, 0, 0, zoom, jn, jo), gH.drawImage(a4P[dw].gS, 0, 0), gH.setTransform(1, 0, 0, 1, 0, 0));
							a4S === a4P[dw].a4t ? (function(jn, jo) {
								var qY = Math.floor(.2 * a4I),
									qZ = Math.floor(.3 * qY);
								gH.fillStyle = ae.lF, gH.fillRect(jn + a4I - qY, jo, qY, qY), gH.fillStyle = ae.jz, gH.fillRect(jn + a4I - qY, jo, 2, qY), gH.fillRect(jn + a4I - qY, jo + qY - 2, qY, 2), j.vI(jn + a4I - qY + qZ, jo + qZ,
									qY - 2 * qZ), gH.setTransform(1, 0, 0, 1, 0, 0)
							}(jn, jo), gH.lineWidth = 3, gH.fillStyle = ae.lF) : gH.fillStyle = ae.kr;
							if (a5B = Math.floor(a4H / 4), gH.fillRect(jn, jo, a5B, a5B), a5C = Math.floor(jo + .8 * a4H), gH.fillRect(jn, a5C, a4I, Math.floor(a4H / 5)), function(dw, jn, jo) {
									var zoom;
									a4P[dw].tv && (dw = a3.get(4), zoom = .5 * a4H / dw.width, gH.setTransform(zoom, 0, 0, zoom, Math.floor(jn + (a4H - zoom * dw.width) / 2), Math.floor(jo + (a4H - zoom * dw.height) / 2)), gH.globalAlpha = .6, gH
										.drawImage(dw, 0, 0), gH.globalAlpha = 1, gH.setTransform(1, 0, 0, 1, 0, 0))
								}(dw, jn, jo), a4P[dw].a4z) {
								for (hx = a59 = 0; hx < a4P[dw].a4z; hx++) a59 = Math.max(a59, n.measureText(a4P[dw].rg[hx], a4M));
								a59 += .05 * a4H, hx = 5 === a4P[dw].a4z, a5B = hx ? jo + a5B : Math.max(jo + .8 * a4H - .11 * a4P[dw].a4z * a4H, jo + a5B), a5C = hx ? a5C : Math.min(a5B + .11 * a4P[dw].a4z * a4H + .05 * a4H, a5C), gH.fillRect(
									jn, a5B, a59, a5C - a5B)
							}
							for (gH.font = a4M, gH.textBaseline = gI, gH.textAlign = vo, gH.fillStyle = ae.lU, gH.fillText(a4P[dw].joined.toString(), Math.floor(jn + .22 * a4H), Math.floor(jo + .9 * a4H)), gH.fillStyle = ae.gK, hx = 0; hx < a4P[
									dw].a4z; hx++) gH.fillText(a4P[dw].rg[a4P[dw].a4z - hx - 1], Math.floor(jn + .03 * a4H), Math.floor(jo + .77 * a4H - .11 * hx * a4H));
							gH.textAlign = xB, gH.fillStyle = ae.lI, gH.fillText(a4P[dw].wd.toString(), Math.floor(jn + .81 * a4H), Math.floor(jo + .9 * a4H)), gH.strokeStyle = a4S === a4P[dw].a4t ? ae.lD : ae.kz, gH.strokeRect(jn, jo, a4I, a4I),
								a5C = Math.floor(.16 * a4H), zoom = a5C / a4O, gH.setTransform(zoom, 0, 0, zoom, Math.floor(jn + .33 * a5C), Math.floor(jo + .33 * a5C)), a4N.length > a4P[dw].tu && gH.drawImage(a4N[a4P[dw].tu], 0, 0);
							gH.setTransform(zoom, 0, 0, zoom, Math.floor(jn + .15 * a5C), Math.floor(jo + a4H - 1.08 * a5C)), gH.drawImage(a4N[11], 0, 0), gH.setTransform(zoom, 0, 0, zoom, Math.floor(jn + a4H - 1.05 * a5C), Math.floor(jo + a4H -
								1.15 * a5C)), gH.drawImage(a4N[12], 0, 0), gH.setTransform(1, 0, 0, 1, 0, 0)
						}(dw, Math.floor(jn), Math.floor(jo)), ++dw >= a4P.length) return;
					jn += a4H + gC
				}
				jo += a4H + gC
			}
	}
}

function bk() {
	this.cl = function(jn, jo) {
		x.setState(5), v.s1(jn, jo, !1), b7.d6 = !0
	}, this.gG = function() {
		v.a2t()
	}, this.g9 = function(jn, jo) {
		var dw = v.sZ(jn, jo, 5, 2);
		5 === dw ? e1() : 6 === dw && (a2.cl(), v.s1(jn, jo, !1), b7.d6 = !0)
	}
}

function bl() {
	var a5F = [0, 0, 0, 0];

	function a2N(jn, jo, gM, a5X) {
		gH.fillStyle = ae.gK;
		var qY = vg(2, Math.floor((a5X ? .5 : .35) * gM)),
			wS = (qY -= qY % 2, vg(2, Math.floor(.1 * gM))),
			gM = (wS -= wS % 2, Math.floor((gM - qY) / 2)),
			ju = Math.floor(gM + (qY - wS) / 2);
		gH.fillRect(jn + gM, jo + ju, qY, wS), a5X && gH.fillRect(jn + ju, jo + gM, wS, qY)
	}

	function a3Y(jn, jo, g6, i5, uQ, fw, wY, hh, w9) {
		gH.fillStyle = uQ, gH.fillRect(jn, jo, g6, i5), 0 <= hh && function(jn, jo, g6, i5, hh) {
			gH.fillStyle = "rgba(" + 22 * hh + "," + (110 - 22 * hh) + ",0,0.75)", gH.fillRect(jn, jo, (1 + hh) * g6 / 6, i5)
		}(jn, jo, g6, i5, hh), 0 < w9 && function(jn, jo, g6, i5, w9) {
			gH.fillStyle = "rgba(255,255,255,0.3)", gH.fillRect(jn, jo, w9 * g6 / f3, i5)
		}(jn, jo, g6, i5, w9), gH.strokeStyle = ae.gK, gH.strokeRect(jn, jo, g6, i5), 0 !== fw && (gH.fillStyle = ae.gK, gH.font = g1 + Math.floor(fw * i5) + g2, gH.fillText(wY, Math.floor(jn + g6 / 2), Math.floor(jo + .52 * i5)))
	}
	this.j2 = [{
		f8: 0,
		w9: 512
	}], this.cl = function() {
		aM.sS = !1, x.setState(2), this.resize(), b7.d6 = !0
	}, this.a3f = function() {}, this.resize = function() {
		a5F[2] = Math.floor((di ? .49 : .4) * fy), a5F[1] = Math.floor((dk - a5F[2] / 6 - this.j2.length * (gC + a5F[2] / 10)) / 2), a5F[0] = Math.floor((dj - a5F[2]) / 2), aM.sS && aM.resize()
	}, this.a5G = function(tu) {
		var dw;
		if (6 < tu) this.j2 = [{
			f8: 0,
			w9: 512
		}];
		else {
			for (this.j2 = [], dw = 0; dw < tu + 2; dw++) this.j2.push({
				f8: 0,
				w9: 0
			});
			this.a5H()
		}
	}, this.a5I = function(a5J, a5K) {
		for (var ez = a5J.length, dw = 0; dw < ez; dw++) this.j2[dw].f8 = a5J[dw], this.j2[dw].w9 = a5K[dw]
	}, this.a5L = function(t7) {
		var dw, ez;
		if (1 === t7.qc.length)
			for (ez = this.j2.length, t7.a5J = new Array(ez), t7.a5K = new Array(ez), dw = 0; dw < ez; dw++) t7.a5J[dw] = this.j2[dw].f8, t7.a5K[dw] = this.j2[dw].w9
	}, this.a3m = function() {
		b7.d6 = !0, aM.sS ? aM.sS = !1 : (this.a3f(), a2.cl())
	}, this.ty = function() {
		var dw, w9;
		if (aX.iw) return aX.ix.a5M;
		for (w9 = 0, dw = this.j2.length - 1; 0 <= dw; dw--) w9 += this.j2[dw].w9;
		return w9
	}, this.s1 = function(jn, jo) {
		return !(!aM.sS || !aM.s1(jn, jo)) || -1 !== this.sZ(jn, jo)
	}, this.a5N = function() {
		aP.jA.sJ = 0, aP.jA.zh(0, 3) && aP.lm.a5O(0)
	}, this.a5P = function() {
		var hn;
		this.a5N(), x.a3e(), aX.iw ? aX.a5Q() : (hn = (hn = this.j2.length - 2) < 0 ? 7 : hn, tr(Math.floor(16384 * Math.random()), 0, [{
			name: a2.a5R(),
			a5S: gE.vK[2].rH.a34(),
			a5T: 0
		}], hn, !1, !1))
	}, this.g9 = function(jn, jo) {
		if (bA.sS || gE.vK[1].rH.sS || gE.vK[2].rH.sS) return !1;
		if (aM.sS && !aX.iw) return aM.g9(jn, jo);
		var dw, hn, max, qY, jo = this.sZ(jn, jo);
		if (-1 === jo) return !1;
		if (0 === jo) this.a3m();
		else if (1 === jo) aX.iw ? (aX.oo(), b7.d6 = !0) : aM.show();
		else if (100 === jo) aW.a5U();
		else if (2 === jo) this.a3f(), this.a5P();
		else {
			if (aX.iw) return !1;
			if (27 === jo) this.j2.length < 8 && (this.j2.push({
				f8: 0,
				w9: f3
			}), this.a5H(), this.resize(), b7.d6 = !0);
			else if (dw = Math.floor((jo - 3) / 3), jo % 3 == 0) 1 < this.j2.length && (this.j2.splice(dw, 1), this.resize(), b7.d6 = !0);
			else if (qY = (a5F[2] - a5F[2] / 10 - 2 * gC) / 2, jo % 3 == 1) 0 === dw && 1 === this.j2[dw].w9 || (jn < a5F[0] + a5F[2] - 1.5 * qY - gC ? this.j2[dw].f8-- : this.j2[dw].f8++, this.j2[dw].f8 < 0 ? this.j2[dw].f8 = 5 : 5 < this.j2[dw]
				.f8 && (this.j2[dw].f8 = 0), b7.d6 = !0);
			else {
				for (b7.d6 = !0, jo = (jn - (a5F[0] + a5F[2] - qY)) / qY - .5, jo *= jo < 0 ? -jo : jo, jo = 0 === (jo = Math.floor(jo * f3)) ? 1 : jo, max = f3, hn = this.j2.length - 1; 0 <= hn; hn--) dw !== hn && (max -= this.j2[hn].w9);
				if (jo < 0) {
					if (1 === this.j2[dw].w9) return this.j2[dw].w9 = max, !0
				} else if (this.j2[dw].w9 === max) return this.j2[dw].w9 = 1, !0;
				this.j2[dw].w9 += jo, this.j2[dw].w9 < 1 ? this.j2[dw].w9 = 1 : this.j2[dw].w9 > max && (this.j2[dw].w9 = max)
			}
		}
		return !0
	}, this.a5H = function() {
		for (var w9 = Math.floor(f3 / this.j2.length), a5V = f3 % this.j2.length, dw = this.j2.length - 1; 0 <= dw; dw--) this.j2[dw].w9 = w9;
		this.j2[0].w9 += a5V
	}, this.sZ = function(jn, jo) {
		var qY = (a5F[2] - 3 * gC) / 4,
			wS = a5F[2] / 6;
		if (jn < a5F[0] || jo < a5F[1] || a5F[0] + a5F[2] <= jn) return -1;
		if (jo < a5F[1] + wS) return jn < a5F[0] + qY ? 0 : jn < a5F[0] + qY + gC ? -1 : jn < a5F[0] + 2 * qY + gC ? 100 : jn < a5F[0] + 2 * (qY + gC) ? -1 : jn < a5F[0] + 3 * qY + 2 * gC ? 1 : jn < a5F[0] + 3 * (qY + gC) ? -1 : 2;
		for (var jt, wT = a5F[2] / 10, qY = (a5F[2] - wT - 2 * gC) / 2, dw = 0; dw < this.j2.length; dw++) {
			if (jo < (jt = a5F[1] + wS + gC + dw * (wT + gC))) return -1;
			if (!(jt + wT < jo)) return jn < a5F[0] + wT ? 3 + 3 * dw : jn < a5F[0] + wT + gC ? -1 : jn < a5F[0] + a5F[2] - qY - gC ? 4 + 3 * dw : jn < a5F[0] + a5F[2] - qY ? -1 : 5 + 3 * dw
		}
		return !(this.j2.length < 8) || jo < (jt = a5F[1] + wS + gC + this.j2.length * (wT + gC)) || jt + wT < jo || a5F[0] + wT < jn ? -1 : 27
	}, this.gG = function() {
		gH.lineWidth = tB, gH.textAlign = gJ, gH.textBaseline = gI;
		var qY = (a5F[2] - 3 * gC) / 4,
			wS = a5F[2] / 6;
		if (a3Y(a5F[0], a5F[1], qY, wS, "rgba(128,0,0,0.75)", .34, "Back", -1, -1), a3Y(a5F[0] + qY + gC, a5F[1], qY, wS, "rgba(128,0,128,0.75)", .31, "Custom", -1, -1), a3Y(a5F[0] + 2 * (qY + gC), a5F[1], qY, wS, "rgba(" + (aX.iw ? 128 : 0) +
				",128,128,0.75)", .34, aX.iw ? "Reset" : "Maps", -1, -1), a3Y(a5F[0] + a5F[2] - qY, a5F[1], qY, wS, "rgba(0,128,0,0.75)", .34, "Start", -1, -1), !aX.iw) {
			for (var jt, wT = a5F[2] / 10, qY = (a5F[2] - wT - 2 * gC) / 2, dw = 0; dw < this.j2.length; dw++) jt = a5F[1] + wS + gC + dw * (wT + gC), a3Y(a5F[0], jt, wT, wT, 1 < this.j2.length ? "rgba(128,0,0,0.75)" : "rgba(90,90,90,0.75)", 0,
				null, -1), 1 < this.j2.length && a2N(a5F[0], jt, wT, !1), a3Y(a5F[0] + wT + gC, jt, qY, wT, ae.kv, .4, this.a5W(dw), this.j2[dw].f8, -1), a3Y(a5F[0] + a5F[2] - qY, jt, qY, wT, ae.kv, .4, this.w0(dw), -1, this.j2[dw].w9);
			this.j2.length < 8 && (jt = a5F[1] + wS + gC + this.j2.length * (wT + gC), a3Y(a5F[0], jt, wT, wT, "rgba(0,128,20,0.75)", 0, null, -1, -1), a2N(a5F[0], jt, wT, !0)), aM.sS && aM.gG()
		}
	}, this.a5W = function(dw) {
		return 0 === dw && 1 === this.j2[dw].w9 ? "You" : b.ir[this.j2[dw].f8]
	}, this.w0 = function(dw) {
		return 1 === this.j2[dw].w9 ? "1 Player" : this.j2[dw].w9 + " Players"
	}
}

function xI() {
	this.ez = 0, this.g6 = 0, this.vK = null, this.cl = function() {
		this.vK = [], this.vK.push({
			jn: 0,
			jo: 0,
			uL: di,
			rH: null
		}), this.vK.push({
			jn: 0,
			jo: 0,
			uL: !1,
			rH: new a3s
		}), this.vK.push({
			jn: 0,
			jo: 0,
			uL: !1,
			rH: new a2w
		}), this.vK[2].rH.a31(), this.ez = this.vK.length, this.g6 = 0
	}, this.zp = function() {
		this.g6 = Math.floor((di ? .063 : .04) * fy), this.g6 += 4 - this.g6 % 4, this.vK[0].jn = gC, this.vK[0].jo = gD - this.g6 - gC;
		for (var dw = 1; dw < this.ez; dw++) this.vK[dw].jn = this.vK[dw - 1].jn + Math.floor(di ? 1.5 * gC : 3.7 * gC) + this.g6, this.vK[dw].jo = this.vK[0].jo
	}, this.sZ = function(gA, gB) {
		if (a3.g4())
			for (var dw = this.ez - 1; 0 <= dw; dw--)
				if (gA >= this.vK[dw].jn && gB >= this.vK[dw].jo && gA < this.vK[dw].jn + this.g6 && gB < this.vK[dw].jo + this.g6) return dw;
		return -1
	}, this.a3j = function() {
		for (var dw = 2; 1 <= dw; dw--)
			if (this.vK[dw].rH.sS) return !0;
		return !1
	}, this.resize = function() {
		for (var dw = 2; 1 <= dw; dw--) this.vK[dw].rH.resize()
	}, this.sc = function() {
		return this.vK[1].rH.sS ? (this.vK[1].rH.g9(-5e3, -5e3, 0), !0) : !!this.vK[2].rH.sS && (this.vK[2].rH.g9(-5e3, -5e3), !0)
	}, this.g9 = function(gA, gB, a2W) {
		if (a2W) {
			if (this.vK[1].rH.sS) return this.vK[1].rH.g9(gA, gB, 0), !0;
			if (this.vK[2].rH.sS) return this.vK[2].rH.g9(gA, gB), !0
		}
		gA = this.sZ(gA, gB);
		if (a2W) {
			if (0 === gA) return this.vK[gA].uL = !this.vK[gA].uL, di = this.vK[gA].uL, aK.a5a(0), dt(this.vK[0].uL, !1), !0;
			if (1 <= gA && gA < 3) return this.vK[gA].rH.cl(), z.dU(!1), b7.d6 = !0
		}
		return !1
	}, this.s1 = function(gA, gB) {
		return this.vK[1].rH.sS ? (this.vK[1].rH.s1(gA, gB), !0) : !!this.vK[2].rH.sS && (this.vK[2].rH.s1(gA), !0)
	}, this.a36 = function() {
		for (var dw = 2; 1 <= dw; dw--)
			if (this.vK[dw].rH.sS) return this.vK[dw].rH.a36(), !0;
		return !1
	}, this.gG = function() {
		if (a3.g4()) {
			gH.imageSmoothingEnabled = !0;
			for (var dw = this.ez - 1; 0 <= dw; dw--) gH.fillStyle = this.vK[dw].uL ? ae.lE : ae.kv, gH.fillRect(this.vK[dw].jn, this.vK[dw].jo, this.g6, this.g6), 0 === dw ? this.a5b(dw, a3.get(15)) : 1 === dw ? this.a5c() : 2 === dw && this
				.a5d(), gH.setTransform(1, 0, 0, 1, 0, 0), gH.lineWidth = tB, gH.strokeStyle = ae.gK, gH.strokeRect(this.vK[dw].jn, this.vK[dw].jo, this.g6, this.g6);
			gH.imageSmoothingEnabled = !1
		}
	}, this.a5b = function(dw, uN) {
		var gap = .08 * this.g6,
			zoom = (this.g6 - 2 * gap) / uN.width;
		gH.setTransform(zoom, 0, 0, zoom, this.vK[dw].jn + gap, this.vK[dw].jo + (this.g6 - zoom * uN.height) / 2), gH.drawImage(uN, 0, 0)
	}, this.a5c = function() {
		var gap = .06 * this.g6,
			zoom = (this.g6 - 2 * gap) / b3.g6;
		gH.setTransform(zoom, 0, 0, zoom, this.vK[1].jn + gap, this.vK[1].jo + gap), gH.drawImage(b3.uN[4], 0, 0)
	}, this.a5d = function() {
		gH.setTransform(1, 0, 0, 1, this.vK[2].jn, this.vK[2].jo);
		for (var f8 = this.g6 / 4, jn = 3; 0 <= jn; jn--)
			for (var jo = 3; 0 <= jo; jo--) {
				var gV = Math.floor(367 * (jn + 1) * (jo + 1) % 256),
					t7 = Math.floor(687 * (jn + 1) * (jo + 1) % 256),
					hx = Math.floor(651 * (jn + 1) * (jo + 1) % 256);
				gH.fillStyle = "rgb(" + gV + "," + t7 + "," + hx + ")", gH.fillRect(jn * f8, jo * f8, f8, f8)
			}
	}, this.a3p = function() {
		for (var dw = 2; 1 <= dw; dw--)
			if (this.vK[dw].rH.sS) return void this.vK[dw].rH.gG()
	}
}

function bm() {
	var username, a5e;

	function a5m() {
		var v0;
		return 0 === username.indexOf("vote ") && 2 === (v0 = username.split(" ")).length ? (a2.a5f = v0[1], a5q(), aP.jA.zh(0, 7) && aP.lm.a5r(0), y.a3T(3252), 1) : void 0
	}

	function a5q() {
		username = da(), z.get().value = username, z.sh(!0)
	}

	function a5l() {
		var max, a5s;
		if (0 === username.indexOf("account ")) return 2 !== (a5s = username.split(" ")).length || (max = Math.floor(Math.pow(2, 48)), (a5s = parseInt(h.dg(a5s[1]))) <= 0) || max <= a5s ? (a5q(), y.a3T(3266)) : dh(a5s) ? (a5q(), y.a3T(3231)) : (
		a5q(), 5 <= dZ ? y.a3T(3232) : (y.a3T(3265), b6.sS = !0, b6.g0 = -1)), 1
	}

	function a5p() {
		return void 0 !== username && h.qv(username)
	}

	function a5j() {
		if (a5p()) return z.sh(!0), 1;
		z.sh(!1)
	}
	this.a5f = "", this.a5g = -7e3, this.cl = function(a5h) {
		dZ < 5 || (a5e && b7.dX > a5e + 144e5 ? dW.setState(14) : a5e = b7.dX), x.setState(0), v.zp(), z.dU(!0), l.cl(), gE.zp(), a5h && ax.dJ.show() ? setTimeout(function() {
			0 === x.sb() && e0(12)
		}, 15e3) : e0(12), void 0 === username && (username = da(), z.get().value = username, a5j())
	}, this.a3f = function() {
		e0(13), z.dU(!1)
	}, this.a5k = function(g0) {
		return 0 === g0 ? v.g6 : 1 === g0 ? Math.floor(.3 * v.i5) : 2 === g0 ? z.get().style.font : username
	}, this.a42 = function() {
		var de;
		username = z.get().value.trim(), a5j(), "password" !== username && "account" !== username || (de = h.dr(dd().toString()), username = "account " + de, z.get().value = username)
	}, this.g9 = function(jn, jo) {
		1 === v.sZ(jn, jo, 1, 1) ? a5l() || a5m() || (e0(10), a5j() ? (a3.g4() || a3.a5n(), this.a3f(), dn(username), a1.cl()) : y.a3T(4214)) : 0 === v.sZ(jn, jo, 0, 1) && this.a3h()
	}, this.a3h = function() {
		a5l() || a5m() || (e0(10), a5p() && 5 <= username.length && 40 === username.charCodeAt(0) && 40 === username.charCodeAt(1) && 41 === username.charCodeAt(3) && 41 === username.charCodeAt(4) ? w.a3K(Math.abs(username.charCodeAt(2) + 5)) : w
			.a3K(aR.a54), a5j() ? (a3.g4() || a3.a5n(), this.a3f(), dn(username), aX.oo(), w.cl()) : y.a3T(4214))
	}, this.a5t = function() {
		return !gE.a3j() && !bA.sS && !az.sS
	}, this.gG = function() {
		var iZ, kb;
		this.a5t() && (gH.imageSmoothingEnabled = !0, iZ = a3.uO("territorial.io"), kb = 1.1 * v.g6 / iZ.width, gH.setTransform(kb, 0, 0, kb, Math.floor((jv - kb * iZ.width) / 2), v.jo - kb * iZ.height - .72 * v.i5), gH.drawImage(iZ, 0, 0), gH
			.setTransform(1, 0, 0, 1, 0, 0), v.a2q())
	}, this.a5R = function() {
		return username
	}
}

function bn() {
	var a5v, gS, fx, a5w;

	function a60(g0, name, a61, df) {
		fx[g0] = name, gS[g0] = new Image, gS[g0].onload = function() {
			0 < a61 && ! function(g0, a61) {
				var jn, jo, dw, iZ = document.createElement("canvas"),
					g6 = gS[g0].width,
					i5 = gS[g0].height,
					gT = (iZ.width = g6, iZ.height = i5, iZ.getContext("2d", {
						alpha: !0
					})),
					gP = (gT.drawImage(gS[g0], 0, 0), gT.getImageData(0, 0, g6, i5)),
					pO = gP.data;
				if (a61 < 3) {
					var a64 = 2 === a61 ? 160 : 600;
					for (jn = g6 - 1; 0 <= jn; jn--)
						for (jo = i5 - 1; 0 <= jo; jo--) pO[dw = 4 * (jn + jo * g6)] + pO[dw + 1] + pO[dw + 2] < a64 && (pO[dw + 3] = Math.floor(255 * (pO[dw] + pO[dw + 1] + pO[dw + 2]) / a64))
				} else if (3 === a61)
					for (jn = g6 - 1; 0 <= jn; jn--)
						for (jo = i5 - 1; 0 <= jo; jo--) 0 === pO[dw = 4 * (jn + jo * g6)] && 200 < pO[dw + 1] && 0 === pO[dw + 2] && (pO[dw + 3] = 0);
				else if (4 === a61) ! function(pO, g6, i5) {
					var jn, jo, dw;
					for (jn = g6 - 1; 0 <= jn; jn--)
						for (jo = i5 - 1; 0 <= jo; jo--) pO[1 + (dw = 4 * (jn + jo * g6))] > pO[dw] + 20 && pO[1 + dw] > pO[2 + dw] + 20 && pO[dw] + pO[2] < 40 && (pO[3 + dw] = 255 - pO[1 + dw], pO[dw] = pO[1 + dw] = pO[2 + dw] = pO[dw])
				}(pO, g6, i5);
				else if (5 === a61) ! function(pO, g6, i5, id) {
					var jn, jo, dw;
					for (jn = g6 - 1; 0 <= jn; jn--)
						for (jo = i5 - 1; 0 <= jo; jo--) 200 < pO[1 + (dw = 4 * (jn + jo * g6))] && pO[1 + dw] - 20 > pO[dw] && pO[1 + dw] - 20 > pO[2 + dw] ? pO[dw] + pO[2 + dw] < 40 ? pO[3 + dw] = 0 : (pO[3 + dw] = pO[dw], pO[dw] = 255,
							pO[1 + dw] = 255, pO[2 + dw] = 255) : pO[dw] < 50 && pO[1 + dw] < 50 && pO[2 + dw] < 50 && (pO[dw] + pO[1 + dw] + pO[2 + dw] < 50 ? (pO[1 + dw] = 0 === id ? pO[1 + dw] : 160, pO[3 + dw] = 180) : (pO[1 +
							dw] = 0 === id ? pO[1 + dw] : 160, pO[3 + dw] = 180 + Math.floor(75 * (pO[dw] + pO[1 + dw] + pO[2 + dw] - 50) / 100)))
				}(pO, g6, i5, 0);
				else if (6 === a61)
					for (jn = g6 - 1; 0 <= jn; jn--)
						for (jo = i5 - 1; 0 <= jo; jo--) pO[(dw = 4 * (jn + jo * g6)) + 3] = Math.floor(255 * (pO[dw] + pO[dw + 1] + pO[dw + 2]) / 765), pO[dw] = pO[dw + 1] = pO[dw + 2] = 255;
				else if (7 === a61)
					for (jn = g6 - 1; 0 <= jn; jn--)
						for (jo = i5 - 1; 0 <= jo; jo--) pO[(dw = 4 * (jn + jo * g6)) + 1] > pO[dw + 2] + 10 && (pO[dw + 3] = pO[dw], pO[dw + 1] = pO[dw + 2]);
				gT.putImageData(gP, 0, 0), gS[g0] = iZ
			}(g0, a61), a63()
		}, gS[g0].onerror = function(dG) {
			console.error("Error loading image at index", g0, "Error:", dG), a63()
		}, gS[g0].src = "data:image/png;base64," + df
	}

	function a63() {
		a5v--, a5y()
	}

	function a5y() {
		0 === a5v && (a5v = -1, b0.g3(), i.uH(), b3.cl(), ay.a2Y([gS[8], gS[16], gS[7], gS[9], gS[10]], [!dV, 0 === dZ, !0, !0, !0]), b7.d6 = !0, gS[7] = a5w, gS[8] = a5w, gS[9] = a5w, gS[10] = a5w)
	}
	this.cl = function() {
		if (void 0 === gS) {
			a5v = 22, gS = new Array(a5v), fx = new Array(a5v), (a5w = document.createElement("canvas")).width = 1, a5w.height = 1;
			for (var dw = a5v - 1; 0 <= dw; dw--) gS[dw] = a5w;
			a60(0, "exit", 6,
				"iVBORw0KGgoAAAANSUhEUgAAAFYAAABGBAMAAACkrn5fAAAAHlBMVEUAAAAiJCI4OjdcXltoameIioejpqPExsPY29j///9xarZIAAAAyUlEQVRIx+3WQQqCQBTG8TdOB5DUI+S6nRcoPIFhu1bBHGGO4Any3TYxAkWTv1DSYr71D4b5mOE9kWmszkeC/ZptT6Ocl+xj5qgtbVR1iZn9VE2wU2uO2Jryhm2h2OaKbdZgu/NKrXVK7f6q1JpaqTWFYpvrUtqhPTTYpst0aBOv2Drltlxh392iu0U1t5I4biX13PZvF7+zvOFWihXWlNy+aqZ/M3LcivXcds1xK9kKK3GYAVtYe+8CZ/c/7Br9blSNcgn75O/tE26TasUvH0ImAAAAAElFTkSuQmCC"
				), a60(1, "victory", 6,
				"iVBORw0KGgoAAAANSUhEUgAAAUIAAABBBAMAAABWYLC1AAAAElBMVEUAAAA6PDlbXVqEhoO4urf///8hX3N2AAAEcklEQVRo3s2ZyZKcMAyGWdx3alLcSaW4k8lwZ9LjuwH3+79KlkljLb/czFJp+tYusD8k/ZItF/5y/a0F/dXb+KW472/cQCIbd8b4//+dDFu12/ByZ8Jkq0uHbRvuTFglwomOezx8j5/HxkrgTXEYqSxQyvcWCpVEhOG53p3QQTGfDiMUlppJxPXHEQrVxIT0092fEOaVw9Q8LpV5GysPJGUsWweojyCVCAgPIBQYc8nzwxEIvcYZjyQUmPv8kYQC68dhNoeWmOsD1Tyc/G5L+elvHLzs0tG3l7/PPn6KVJTfGxqpG0+9vXFW2w+ZGaoU0x3YrfwZP3dkrONijUK5ndBOLBAh2Wz8CwybMAESRPX4kDwZuGODMNkkjLoiwtLTyac8IXs2NpbJO2E0YVInhSH/c8LxolY1CVs+tFiEi2TqGW8lZqikTRlhLSYPGcIK2Ao/3gi/ilwiErQz4nIAJnx9xyJsga3w4xN3s6EbTVhowhJNbhCWyFaYcOVUvShpLZ+glfmREurZZ5MQ2wqOx/Q9k3YyeWNgJp0B4YgmNwh7aCv8eJp61U4mwT+xsJwA4Zarv37xm+ENQr89+/BCAwc93qXhRjmZpJeZ/Rs0YU1scU2MU1FkM/tKbT8kwt8+LB+8TtrT9dMCqHsrsyhYmdnfiYkEoaPBXRG/sPd8eunqZqfPmS1MHRGsfGLF5nX2Z4OwZWm6T15ihK3+/D7XBKFFcAErjzKVx3NTGIT8WZe+jRGSl0pdC7RUBqJW5D3P7O/iI9itDzx2Gla5oiAs6YwjKEBSKhOQMiDMnicGNmkUwc6V8sPTmHeyWAGpBELbgJWzx5c3Emqc0nIyya1Lqvax+BhhKfoE4/bdgHDR+6YOn6Zien0FK5fZpiInrITeRpWaL6qr5SwnUzGftJXTytUbCGszIzhjR8HcHKzTVNfqU9SHCGeRdAdjB1vgE4mWyuR1Q0QRLm8gDHsI9SErmg334HVD5EOE8w4vP2tnBrPxsICPeJ9SjDgESnkGpurMxkMEnUOVbT5Xy2cAEnN3U7rd8Kn5EGRscJOz5LqIunNoElbx+0eq3hev17IJRyNDwbpMGjwv3V5CsHOotRFtwhYWSmvn0BB9nfftbUq0txlV3rAJHTry6JVR+yG+f3/oVNDbhKiVYO+xWftkNQhPbLEW7bEr5WabsLClDM4p7Og/7zmnlPic4mVMZQj9xdzgkpUrmmTfctbr4VlvC/9hB2FvCoWtnM7A31SukJ1Qcl5+Audl2pMKOwidKRS2cm81WwHhmO85BOL8dQdhLZsxmNDhRSHhjb5NoF+xg7AwhcJX9nZ5lIRFvvcV6JZl2kHojZonVm7t4tMbG0ujfxio6+YdhD2MLbVyZZd9RVjhYo+6InEH4ck8q/KVezMt9daeA/exWc/h6oocoTP2Q/m7gKXIEZa5u4DAlp1uE5aWUHL3KbHIEvL7FFFsAouE+TYhlcqQIyR3UrG5QZi7kwoFCMT6k648n17v6n7uv9eL5/et9Asv0oTxJYkUxgAAAABJRU5ErkJggg=="
				), a60(2, "defeat", 6,
				"iVBORw0KGgoAAAANSUhEUgAAARMAAABABAMAAADL6o5mAAAAHlBMVEUAAAAlJyU7PTtUVlNsbmuJi4ijpaLCxMHX2db///+Cup+UAAACo0lEQVRo3s3ZsW7bMBAAUNqyZWUzsnT1VECbhy7ZvHTwlqmAN6PoUG0CggzairpIyi1Nk1b629awTPGOpHm0DyE1WYJEPlHk3UkW6w5t7eMXEWczKHvN52QoXfcjHUoUi4PSbdOhtItkKBEekZPSLdOh7NKhtOlQ3nwRnaC8pENp06F0t+lQvsWi/O/4+uPXiJNljcbgvUb5G5ci3mmWeVyKqGLNW5MyGyh1ZMo41hIyKaJRh573u9JY5HDo1LMsjBOfBLq9/oC0Rg4L5UYdeuWi5HqDAZShyT9clAKGBzJlBgMLB0UN9CKMksOEyEFpYOFBpkxBpywU1AmZkrFThpv7HUYZwcjPQEGzj04RsOpnoJRwnGNScFo7h7JS16HqcmbJDIUzW0hrWstQVfQWlMkhXg655BzKkoVyOPn7EMDjUa4Os0SidsIoCxbK5tBWhV7FCZSRJ8RtT1M6mE2PYb/tE1EdQsnoFNCpizLudwqYDCiUqScdhlLyfunkeslCo+TMlKJvPkNvNASKr14JpayPV0mtZKFRfFVcKKU5Cir4rYRAWXtq21CKetY31uVxiiI9FX8gZap+F7BrP2WC3oMupRSqZprBeeunlCiNXkopVesTrWShUDJpLS7sgd9GwYG/cn1B8lFGVWctuc7PQcao1hTK9YdP0hjgCykTo1579lLM7RcHxSg9VZYMoWw5KFfOL58BlHbOQdmYDa+CKeC1/2yKpbqvgyk1B2VsafgplNI6b6smVnH7wJq7h5tO2bFQCvdNkintkoVibX8RRtkJFkoDUmCpRwkqpZ3zUMDsgDObStkKFspUj9tqEr+EUO4EDwUt8Ez/ykKj3AkmSonGWGopn0J5WAkuSoX+KG60ksVL+Xm/8kXuAAoO1RvtOkT5B9F51EylDpRdAAAAAElFTkSuQmCC"
				), a60(3, "orders", 6,
				"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"
				), a60(4, "crown", 4,
				"iVBORw0KGgoAAAANSUhEUgAAANIAAADSCAIAAACw+wkVAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0xMi0yM1QxNDowNDo0NyswMzozMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1ZmFkNDE3NC03OWNiLTUwNDgtYWIyMi04NThmMGExODUzZTEiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4ZDQ1NTIyYS02MDRlLWYxNDUtYWM3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"
				), a60(5, "arena", 6,
				"iVBORw0KGgoAAAANSUhEUgAAAQAAAABABAMAAAAHc7SNAAAAHlBMVEUAAAAjJSM7PTpUVlNqbWqHiYalp6S/wr7W2NX////RSpP4AAAD9klEQVRo3sWZvW+bQBiHiSGAt6hdki1Dh7Jl9eapkjdPrbxV6lCxeaw3okqpbqNuzMd/2yRw3PvJkQVYYhHgnvfer9/dBQG4WnftgwWuawBwXAIgBQB/lwDIAEC1BEAOAJolAAwAaB/mHz+C4y8RhQkCKOcHuEMAl/kBDgigWTgG2/Z+7vFDPH77fW6AmAAUSxbi1+t5boAdAajnBjgRgHbm8a/o+HNLgiEGfy0UhUMMfrU/zvMCbOy4HxeSBKehBJtlirGze9AlW1GqtM2fH0rp6HroCTWzNcnpTMmxa+f5HZcEORnnyQ9gewkFyJUcS1zsp1wSUID2tx/gKAMYJccy14MSLgkYQOeeUYCLCBBqOZY7LRhxScABzl6A3gcEINFyDIY+lwQcoPEDFBLAWhE8IQQ7MUnAAd58MA5wkQAOiuxOYBM+sGIsABy9AN0QBMAosnsNx7xjkkAAKP0ABQdYabL7IBpWjwD88wNUHCDWZLeBPditkm8wwMuvD1+Mez8VU/qE3IwBUkV2r5AKWTFJkIPymUwHKBhAV2VzJrtjPOmGRiEECKcDVAzg7X9NxmR3ih2TQ0dTgGg6wKsPMED3aspe2+F9iYyWKwjwmQWhDlAQgC66zjGyLmCZ4yakYQCffo6lYUUAKgLQmx4y2U2WQ3FLJMHUQkQBXt5HANb5hkiCa1L9Q1quppZiBlBgABv+OZEEvKCQvSoOUAeTAGoMYHq/bkjsZCpA9b52zADaLQSI7EMpkQS5CtC8T5AAgEt35xECJHbcmEgCowL0TXOqJAMAZfenhgBrO/MhLsaRPn4fhRSgvvED9H7dAYDDkGkGye5kBKCUAJ7uAz9An1qGlfiH4ZmjuDvVCntVGKDZBxMASDYMTa5xpbcUd6ekXQIyA80WAYiluAxu6Wdi2brRGOxLUw+w+obfHAeIvGWjkXenhL2qoRfsUHKMA0Af1NIejC288ShAgQBs0X6cAnBLAE6ydSOFeGiarhsaGBoegIgAKNYJM8Oi0AHshEqoAQCTa3Igg2T3aRSgxQAJZPcBpAggVay7Ek9JDBKmDmAF88AHEKGRMsW6WNyazJGfcjYZytqwRgDuK7XS8vboK6V4fnTGAHfiqwoAWuIYJcc24motRY7J+YQVUwBCcF9seWc0M3vx+KQhqtg4Li/A8PF6+OIRLYUqNDP38gHSFgMc3LLND5C6+2tspbHWXStnJEgSQIDUVTE/QOjuH8Tl5hbMdaWcn5TiyujVfX4A+2YNTEYbo0cgBp6VU8wLBrCFq54EkNr7K2Jlaq3LlR2DDLoGAWyGjjgBILT3Y7zadItsbc8khU0TASTD8xMAetfXrGr2sdf8B96/CJXN/8t1AAAAAElFTkSuQmCC"
				), a60(6, "territorial.io", 6,
				"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phjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAA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jz//+c+xZMmS+PWvfx3Lly9PnQXUssWLF8c3vvGN1BmZM3To0Jg1a1bqDBJp3rx5LF++PHbcccfUKZm2dOnS+PrXv546AwAAAAAAAAAAAACAWlYvdQAAAAAAAAAAAAAAAGxLRUVFcfzxx8fhhx8eBxxwQLRv3z6aNm2aOiuv7bDDDrHffvvFfvvtFyeddFJcddVVsWrVqnjppZdi8eLFcd9998Wrr76aOhMA8t7IkSON9uSAAw44II455piYP39+6hQAAAAAAAAAAAAAAGqR4R4AAAAAAAAAAAAAAPJe7969o0+fPtG9e/fo1KlTNGrUKHVSnVZQUBB77rln7LnnntG3b9+49NJL469//Ws899xz8cQTT8Ttt98eH330UepMAMg7/fv3T53APw0ZMsRwDwAAAAAAAAAAAABAHWe4BwAAAAAAAAAAAACAvNOyZcs49dRT49BDD41u3bpF8+bNUydlWkFBQbRp0ybatGkTJ554Ylx77bXxwgsvxJNPPhn33HNPLF26NHUiAOS83r17x9577506g3864ogjon79+rFhw4bUKQAAAAAAAAAAAAAA1BLDPQAAAAAAAAAAAAAA5IX9998/TjnllDj88MNj//33j3r1XBKfq0pKSuKggw6Kgw46KC688MJYtmxZPPnkk3HXXXfFU089lToPAHLSwIEDUyfwb5o2bRpnn312zJw5M3UKAAAAAAAAAAAAAAC1xKcUAQAAAAAAAAAAAADIWd26dYvBgwfHEUccER06dIiCgoLUSVRTQUFBdOjQITp06BDnnHNOrFixIhYsWBCzZ8+ORYsWpc4DgJzRs2fP1Al8QZ8+fQz3AAAAAAAAAAAAAADUYYZ7AAAAAAAAAAAAAADIKR06dIgzzzwzevfuHZ06dTLWU8e0adMmvve978XZZ58dr776asydOzdmzpwZK1asSJ0GAMkccsghsccee6TO4AsOOuig1AkAAAAAAAAAAAAAANSiwtQBAAAAAAAAAAAAAABQv379GD58eCxcuDD++Mc/xsiRI6Nz585Ge+qwgoKC2GeffWLEiBHx5z//OZ588sk477zzoqioKHUaAGx3/fr1S53AlygtLY3evXunzgAAAAAAAAAAAAAAoJbUSx0AAAAAAAAAsK3df//9sdtuu6XOAHLE9OnT44477kidwSaMGzfOgZR1wG233RYzZ85MnUEeuuWWW2KfffZJnUEVvffee16zAagVRx55ZJx99tlx1FFHRdOmTVPnkEj9+vWjV69e0atXrxg/fnw8/PDDMW3atHj++edTpwHAdtG9e/fUCWzC0UcfHfPmzUudAQAAAAAAAAAAAABALTDcAwAAAAAAANQ5Xbp0iT333DN1BpAjdt9999QJbMacOXOivLw8iouLU6ewFZo2bWq4h2rr2bNnDBw4MIqKilKnUEVXXHFF6gQA6pD69evHiBEj4uSTT479998/dQ45plmzZnHaaafFwIEDY8mSJTF79uy48cYbU2cBQK0ybpy7unbtmjoBAAAAAAAAAAAAAIBaUpg6AAAAAAAAAACA7HrxxRfjvvvuS53BVmrXrl2cddZZqTPIM6NGjTLak0dWrVoV48aNS50BQB3QsWPHuOWWW+Lvf/97TJ482WgPm1VUVBQHHXRQXH/99bFy5cqYMmVKlJaWps4CgG1u//33j2bNmqXOYBP23nvv1AkAAAAAAAAAAAAAANQSwz0AAAAAAAAAACQ1bty4WLduXeoMttK5556bOoE80rlz5zjmmGNSZ1AN11xzTVRUVKTOACCPHXPMMfHQQw/F888/H6eddprxFaptjz32iAsvvDBWrFgRs2fPjs6dO6dOAoBt5rDDDkudwGbstttu0bp169QZAAAAAAAAAAAAAADUAsM9AAAAAAAAAAAktXLlyrjjjjtSZ7CVunbtGv3790+dQZ4oKyuLBg0apM6gil588cWYNm1a6gwA8tSgQYNi8eLF8cgjj8Q3v/lN7wHYajvuuGMMGjQolixZEg8++GD07NkzdRIAbLX27dunTmALevTokToBAAAAAAAAAAAAAIBaYLgHAAAAAAAAAIDkxo4dG++//37qDLbSj370o9QJ5IFWrVrFcccdlzqDKtq4cWNceumlqTMAyEPf+9734oUXXojZs2fHN77xjSgoKEidRB1TXFwcxx57bDzxxBMxb968OPLII1MnAUCNfe1rX0udwBZ06tQpdQIAAAAAAAAAAAAAALXAcA8AAAAAAAAAAMmtWbMmbrrpptQZbKVevXpFr169UmeQ48rLy6NRo0apM6iixx9/PO6///7UGQDkkWHDhsUrr7wSN9xwQ+y3336pc8iAoqKiOProo2PevHmxYMECAz4A5KUWLVqkTmALvvrVr6ZOAAAAAAAAAAAAAACgFhju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FpLMnDkzmjZtmp1RdEpLS7MTAAAAAAAAAFhKDbIDAAAAAAAAAACgEAwdOjR23333qKioyE5hMcrKyuKUU06JX/ziF9kpNebggw822lPH3HDDDUZ7AOqhX//610Z7CtT8+fPj5ptvjr59+0ZVVVV2TkEZPnx4PPvss3HddddFx44ds3NYRj169Iju3bvH2LFjs1MAAChSO+ywQ/Ts2TM23njjWGeddWLNNdes80MFy2qVVVaJVVZZJbp06fKtf//ZZ5/FO++8E//6179izJgx8fjjj8f777+fVAnA8tS2bds46KCDomfPnrHRRhtFu3btspOW2P//eLbRRhvFvvvuGxdddFF88sknMW7cuBg7dmzcc889fucEAAAAAAAAAECdVBIR87MjAAAAAAAAAGrSv//971hzzTWzM4raBx98EGuvvXZ2BkCtu+yyy+K4447LzqAa5s6dG926dYu33347O6VGjB49Onr06JGdwQIfffRRdOrUKebNm5edAsASeu+99/w8W4Bmz54dQ4YMiUsvvTQ7paCVl5fHyJEjY/vtt89OYRndcMMNcdRRR2VnUEe89NJLsemmm2ZnFJ1+/frFddddl50BAMtdw4YNY++9946tt946unfvHuutt140b948O6vOmj9/fnz00Ucxbty4GDNmTDz22GPx4osvZmcBsJS6d+8eBx98cGy11VbRtWvXaNCgQXbScjdhwoR44YUX4vHHH4877rjD86mwnMycOTOaNm2anVF0SktLsxMAAAAAAAAAWEqGewAAAAAAAICCY7gnn+EeoFiVl5fHW2+9Fa1bt85OoRpuvvnmOPzww7Mzltmuu+4af/rTn7IzWMivf/3ruOSSS7IzAFhCBx98cNx8883ZGdSwKVOmxGGHHRaPPPJIdkrRuPTSS6N///5RVlaWncJS+vjjj2ONNdbIzqCOMNyTw3APAIWsd+/esdtuu8UWW2wRG2ywQTRp0iQ7qV77z3/+E6+99lq88MILMXLkyHj33XezkwBYhE6dOsWRRx4ZO+20U2ywwQZRUlKSnZTmyy+/jOeffz7uvffeuOmmm6Kqqio7CQqG4Z4chnsAAAAAAAAA6i/DPQAAAAAAAEDBMdyTz3APUMzOOuusGDJkSHYG1fDll19Gp06dYsqUKdkpy+Svf/1rbL311tkZLPDGG29Et27dsjMAWApPPvlkbLPN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ZwAAUIPatm0bd955Zzz22GPxk5/8JDuHeqisrCz22GOPGDNmTFx22WXRsGHD7CSAGtOtW7d45ZVXYu+9985OYRmsscYacffdd8dZZ52VnQIAAAAAAAAAQB1nuAcAAAAAAAAAAGrBxIkT45ZbbsnOoBp23nnn6NSpU3bG/zjyyCOzE1hg1KhR8dRTT2VnALAMDj744OwElkJlZWWccsopMWHChOwUatCbb74ZJ510UnzzzTfZKSzCLrvskp0AAEANOfPMM+ONN96IfffdNxo0aJCdQz3XvHnzOO644+Ktt96KQw45JDsHYJn16dMn/vKXv8QGG2yQnUINaNSoUQwZMiQefPBBI3MAAAAAAAAAAPwgwz0AAAAAAAAAAFBLBg0aFJ999ll2BouxwgorxODBg7MzvuWggw6KLl26ZGcQEbNnz46BAwdmZwCwjHr37p2dwFK46aab4tZbb83OYDm47bbb4qabbsrOYBG23HLL7AQAAJZR796947XXXoszzjgjVl555ewcCsxaa60VN910Uzz22GOx7rrrZucALJWBAwfGjTfeGKusskp2CjXs5z//ebz88sseowAAAAAAAAAA+F6GewAAAAAAAAAAoJbMmDEjbrjhhuwMqmHPPfeMli1bZmf8V//+/bMTWOC2226LN998MzsDgGWw0047xRprrJGdwRJ6/fXX4+ijj87OYDn61a9+FePHj8/O4Ad07NjRwaYAAPVU48aN4/e//338+c9/jm7dumXnUOC22267GD16dAwePDg7BWCJXHvttTFixIho1KhRdgrLSbdu3eKvf/1rbLXVVtkpAAAAAAAAAADUMYZ7AAAAAAAAAACgFg0dOjQmTpyYncFilJeX15lD5XbZZZfYdNNNszOIiM8++ywGDBiQnQHAMvrFL36RncASmjNnTvTv3z+qqqqyU1iOKisr45hjjok5c+Zkp/A9SkpKYu+9987OAABgCe2+++4xbty4OPzww6Nhw4bZORSJlVZaKc4+++x48cUXo2vXrtk5AItUWloa999/fxx55JFRUlKSncNy1rZt23jggQdin332yU4BAAAAAAAAAKAOMdwDAAAAAAAAAAC1qLKyMq644orsDKph//33j8aNG2dnxIknnuiQqDrimmuuienTp2dnALCMevXqlZ3AErrmmmvihRdeyM6gFjz77LNxzTXXZGfwA7ba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XFRVVWXnLFcnnHBC7LfffjF58uTsFBY44ogjshMAKDAbbLBBdgIAAAAAAAAAAAsx3AMAAAAAAAAAAEXq+uuvj9deey07A37QXXfdFW+88UZ2BgB1WIsWLbITWMg777yTnQAAALDM9t9//+wEFjJmzJjYcsst4/77789OqTX3339/bL311jFu3LjsFCKid+/e0axZs+wMAApIhw4dshMAAAAAAAAAAFhIg+wAAAAAAAAAAAAgz/nnnx933nlnlJSUZKfAt0ybNi0GDBiQnQFAHdapU6do2LBhdgYLGTt2bHYCAADAMtlyyy1jk002yc5ggbvuuisOPPDAqKqqyk6pdW+++WZsuumm8fDDD0evXr2yc4raSiutFP369YuLL744OwWoY6ZNmxZTp06NL774Ij7//PP46quvIiJi5syZ0bx584iIaNSoUZSXl8eKK64YK6+8cqy66qrRuHHjzGzqgDXWWCM7AQAAAAAAAACAhRjuAQAAAAAAAACAInb33XfHscceGz/96U+zU+Bbrr322pgyZUp2BgB12DrrrJOdwELmzJljuAcAAKj3jj76aEP3dcD8+fPjiiuuiBNPPDE7JdWcOXNiu+22i3vvvTd233337JyitsceexjugSJWVVUV77zzTvzrX/+KcePGxauvvhrPPPNMTJ8+famut/7668emm24a3bp1i/XWWy822GCDaN++ve9BishKK60U66+/frz55pvZKQAAAAAAAAAAhOEeAAAAAAAAAAAoemeffXY88sgjUVZWlp0CERExYcKEOOOMM7IzAKjjVl999ewEFvLZZ59lJwAAACyTsrKy2HHHHbMzit78+fPjnHPO8TviBaqqqmLPPfeMe+65J/baa6/snKK16aabRocOHeL999/PTgFqyaxZs+LFF1+Mxx9/PEaOHBkffvhhjV37zTff/J/Blg4dOsTee+8dvXv3jk033TRWWmmlGrsfdVPPnj0N9wAAAAAAAAAA1BGl2QEAAAAAAAAAAECuJ598Mh577LHsDPiviy++OCorK7MzAKjjVltttewEFjJlypTsBAAAgGVy5JFHRsuWLbMziprRnh+27777xiOPPJKdUbQaNmwYRx55ZHYGsJxVVVXFyy+/HKecckq0adMmtt9++7joootqdLTnh7z//vtx4YUXxg477BCtWrWKE044IZ599tn45ptvlvu9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222XnUIttWvXLh588MHo0KFDdgq19Pjjj2cnAADUi2nTpmUnFJX9998/tt566+wMAACARrHddttFeXl5dgYAAAAAAAAAG8BwDwAAAAAAAAAANICKioooLXV7TiGaOXNmjB8/Pjvjcy1evDhuueWW7AxqoUWLFjFixIjsDAA20NKlS2Py5MnZGWykr33ta/Hggw86DK0JKC8vj4cffji6dOmSnUItrVu3Lm677bbsDACAenHffffF2rVrszOKRuvWreP000/PzgAAAGgUpaWl8b3vfS87AwAAAAAAAIAN4GQQAAAAAAAAAACoZz/60Y9iv/32y86gBmPHjs1OqJUhQ4bEwoULszOohQMOOCAOP/zw7AwANtCtt96anUA96Nq1a/zhD3+IFi1aZKdQgxYtWsRDDz0UXbt2zU6hDl5++eWYNWtWdgYAQL1YunRpvPHGG9kZReWYY47JTgAAAGg03/nOd7ITAAAAAAAAANgAhnsAAAAAAAAAAKCeDRo0KEpKSrIzWI9nnnkm7rjjjuyMWlmxYkXceOON2RnUQklJSQwePDg7A4ANdOedd8bbb7+dnUE9+M53vhOPPfaY8Z4CVF5eHk8++WR07949O4U6euKJJ7ITAADq1QsvvJCdUFR22WUX4z0AAEDR6Nq1a3YCAAAAAAAAABvAcA8AAAAAAAAAANSj448/3iEMBWrdunUxatSo7Iw6qaioiHfffTc7g1rYe++945e//GV2BgAb6IEHHshOoJ706NHDeE+Badu2bUyaNCm6deuWnUIdrVu3Lm6++ebsDACAevXMM89kJxSdU089NTsBAACgUXTp0iVKSx3nBAAAAAAAANDUbJIdAAAAAAAAAAAAzck555yTnUANpkyZEg899FB2Rp2sWbMmxo8fH0OHDs1OoRbOOuusuP7666O6ujo7BYA6uuyyy+LUU0+NTTfdNDuFetCjR4+YPHly9OrVK5YtW5adU9R23nnneOCBB2L33XfPTmEDvPTSS/Hcc89lZwAA1Kt77rknxo4d6yDlRvSd73wnunfvHlOnTs1O4TO23nrrOPnkk7Mzmp2VK1fGFVdckZ0BAECCzTffPA4//PC49957s1MAAAAAAAAAqAPDPQAAAAAAAAAAUE/69esXu+22W3YG61FdXR2jRo3KztggI0eOjBNPPDE6duyYncIX6NSpUwwePDhGjBiR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qsrOaHSVlZWxZs2a7AxqoW3btlFZWZmdAUAdDR8+PN57773sDApIaWlpdO3aNSorK+Ott96K6dOnx4UXXhh77bVXdlqNysrK4rjjjosbb7wxXn755fjrX/8a/fr1i1133TVKSkqy80h26623ZicAAKS67bbbshOIiK222iruueee6Nq1a3ZKs3DsscfGhRde6Hu+RvLcc89lJwAA/JPhnsK3+eabx+WXXx4PPPBAdOjQITsHAAAAAAAAoOgZ7gEAAAAAAAAAgFqqqKiI0lK33BSiN998My666KLsjBTTpk2LiRMnZmdQS0cffXR84xvfyM4AoA5WrVoVEyZMyM6gQLVo0SK6du0aZ511Vjz33HMxd+7ceOihh2LYsGHRrVu3tK527dpF796947rrrou//OUv8cEHH8Qtt9wSJ5xwQuyyyy4ObuaflixZEqNHj87OAABI9cADD8Tbb7+dnUFEbLvttnHPPff4GepGOvzww+O3v/1tbLrpptkpReOJJ57ITgAA+Kfly5dnJ1BLhx56aDz//PMxZsyYaNWqVXYOAAAAAAAAQNHaJDsAAAAAAAAAAACagh/96Eex3377ZWdQgyuuuCKqq6uzM9KMGDEivv/970fLli2zU/gCrVq1isrKyjj00EOzUwCog/PPPz+OPfbY2HbbbbNTKGAlJSXRoUOH6NChQxx88MFRUVERS5YsiXfeeSfmzp0br732WsyZMydmzJgRL7zwQr18/dqlS5fYbbfdolOnTrHrrrvGV7/61fjKV74S22+/fZSVldXDR0Vzd8cdd8SqVauyMwAA0j366KNxyimnZGcQETvttFP86U9/ih//+McxderU7Jwm57jjjourr746Nt988+yUorFy5UqjzwBAQVm9enV2AnWw5ZZbxjnnnBM/+9nP4vbbb4+xY8fG4sWLs7MAAAAAAAAAiorhHgAAAAAAAAAAqIVBgwZFSUlJdgbrMXv27Bg3blx2RqoZM2bEgw8+GD/+8Y+zU6iFH/zgB9GzZ8+YNGlSdgoAtbRq1aq48cYb45xzzslOoYnZaqutYquttopvfvOb//LyqqqqWLZsWSxZsiSWLl0aH374YVRVVcXHH38ca9eujY8//jgiIlq0aBGtWrWKiIjy8vLYfPPNY/PNN482bdrENttsE5tuumljf0g0I8uXL4+RI0dmZwAAFITx48fHySef7PcABWLbbbeN+++/P04++eS4//77s3OajDPOOCPGjh0bLVu2zE4pKjNmzIg1a9ZkZwAA/JOx9qZphx12iLPOOitOPfXUePLJJ+Puu++OCRMmRHV1dXYaAAAAAAAAQLNnuAcAAAAAAAAAAL7A8ccfH127ds3OoAaXXXZZdkJBGD58eBxyyCHRunXr7BS+QFlZWQwfPtxwD0ATU1FRET/72c9ihx12yE6hGSgrK4stt9wyttxyy+wUitidd94ZCxYsyM4AACgIzz77bMycOTP22muv7BT+11ZbbRW33XZbDB48OC699NLsnII3bty46Nevn/GpBI8++mh2AgDAv1i2bFl2AhuhTZs2ceihh8ahhx4al112WcyYMSOeeeaZePrpp2PSpEkpo5G77rpr7LnnntGpU6fo0KFDvPTSS3HllVc2egcAAAAAAABAQzHcAwAAAAAAAAAAX+Ccc87JTqAGM2fOjPHjx2dnFITZs2fHfffdF8cdd1x2CrWw7777xnHHHRcTJkzITgGgltasWRPjx4+PoUOHZqcAbLSVK1fG6NGjszMAAArKPffcY7inwLRq1Souuuii2H333eOUU06J6urq7KSCs/3228eECRPiP/7jP7JTitKaNWvixhtvzM4AAPgXS5cuzU6gnmy55ZZx4IEHxoEHHhgREZ988km89dZbMXfu3FiwYEEsWLAg3n333Zg3b14sWbIkVq9eHYsXL44PP/wwqqurY8stt/znY2222WaxxRZbRETEl770pWjbtm1sscUWseWWW8bmm28ebdq0ifLy8thmm21iq622iq222uqfr2/VqtW/dE2YMMFwDwAAAAAAANCsGO4BAAAAAAAAAIDP0a9fv9htt92yM6jBRRddlJ1QUIYOHRqHHXZYtGnTJjuFWjj33HMN9wA0MSNHjowTTjghvvrVr2anAGyU++67L958883sDACAgnLllVfGwIEDo7y8PDuFTykpKYmTTjop9t577/j5z38es2bNyk4qGMcee2xcdNFF8eUvfzk7pWjNnDkz5s2bl50BAPAvlixZkp1AA9l0001jl112iV122SU7BQAAAAAAAKBZKc0OAAAAAAAAAACAQlVaWhr9+/fPzqAG06dPj9tvvz07o6C8+eabceedd2ZnUEu77bZbnHnmmdkZANRBdXV1XHLJJdkZABtl+fLlMWTIkOwMAICCs2zZsnj88cezM6jBN77xjZg8eXKce+652Snptt566/jv//7vuOmmm4z2JHvssceyEwAA/o/33nsvOwEAAAAAAAAAmhTDPQAAAAAAAAAAUIOzzz47OnXqlJ3Beqxbty4qKyuzMwpSRUVFLF26NDuDWurfv3+UlZVlZwBQB1dffXU8//zz2RkAG+zOO++MuXPnZmcAABSk3/72t9kJfI4tttgiRo0aFU8//XR07do1O6fRlZaWxpAhQ+Kll16Ko48+2s+Wk1VVVcWtt96anQEA8H8sWrQoOwEAAAAAAAAAmhTDPQAAAAAAAAAAsB5lZWXRr1+/7AxqMGXKlHjooYeyMwrS/Pnz4/bbb8/OoJZ23HHHGDVqVHYGAHVUWVkZ69aty84AqLNly5bFsGHDsjMAAArWpEmTYtasWdkZfIF99903pkyZEjfccENsvfXW2TmNonfv3vHyyy/H8OHDo3379tk5RMTf/va3mDNnTnYGAMD/8Y9//CM7AQAAAAAAAACaFMM9AAAAAAAAAACwHiNHjowddtghO4P1qK6uNnTyBSoqKmLx4sXZGdTSySefHO3atcvOAKAO7rvvvnjiiSeyMwDq7Kabbop58+ZlZwAAFDTD6E1Dq1at4qSTToo5c+bEpZdeGuXl5dlJ9a60tDROP/30mDlzZowfPz7+7d/+LTuJT7nvvvuyEwAA1mvGjBnZCQAAAAAAAADQpBjuAQAAAAAAAACAzygvL4/evXtnZ1CDxx57LCZNmpSdUdAWL14ct9xyS3YGtbTVVlvFmDFjsjMAqKNzzjknVq1alZ0BUGsLFiyI8847LzsDAKDg/eY3v4n3338/O4Na2nrrreNXv/pVvPHGG3H55ZdHhw4dspM22vbbbx9jxoyJt956K8aNGxd77rlndhKf8dFHH8WVV16ZnQEAsF6LFy+Ojz76KDsDAAAAAAAAAJoMwz0AAAAAAAAAAPAZI0aMiPbt22dnsB5r1qyJUaNGZWc0CUOGDImFCxdmZ1BLP/nJT2K33XbLzgCgDmbMmBETJkzIzgCotauvvjpWrFiRnQEAUPDWrFkT9957b3YGdbT11ltHv3794uWXX4777rsvDj/88OykOikrK4u+ffvG448/Hm+88Uacc845sdNOO2VnUYMnn3zS91cAQEEzRgoAAAAAAAAAtWe4BwAAAAAAAAAAPqVdu3ZxwgknZGdQg4kTJ8bUqVOzM5qEFStWxI033pidQS21bt06KisrszMAqKOzzz7bUB7QJLz22msxevTo7AwAgCbjwgsvjFWrVmVnsAG+9KUvxWGHHRb33ntvvPXWW3HttdfGgQcemJ21Xh07doxzzz03HnnkkVi0aFFcccUVccABB0TLli2z0/gCxpwBgEL33nvvZScAAAAAAAAAQJNhuAcAAAAAAAAAAD5l9OjR0bZt2+wM1mP16tUxdOjQ7IwmpaKiIt59993sDGrp0EMPjR49emRnAFAHS5cujUsvvTQ7A+ALVVZWRnV1dXYGAECT8eabb8ajjz6ancFG+spXvhKnnHJKPPbYYzFv3ry455574swzz4xdd901pWfvvfeOgQMHxu233x4vvvhivPbaazFq1Kg46KCD/G6qCZk7d27cdddd2RkAAJ/LcA8AAAAAAAAA1N4m2QEAAAAAAAAAAFAoOnfuHMccc0x2BjV44IEHYtasWdkZTcqaNWti/PjxBo+aiLKyshg+fHgccMAB2SkA1MFFF10UxxxzTOy9997ZKQDrNXny5LjllluyMwAAmpxLLrkk/vM//zNKS0uzU6gH22+/fRxxxBFxxBFHxIUXXhjz5s2LN998M1599dV46aWX4oUXXojp06fHihUrNuo6LVq0iH322Sf22GOP+Ld/+7f46le/GjvuuGN06tQpttpqq3r6aMh0xx13ZCcAAHyhefPmZScAAAAAAAAAQJNhuAcAAAAAAAAAAP7XsGHDok2bNtkZrMfKlStj8ODB2RlN0siRI+PEE0+Mjh07ZqdQCz169Igf//jHcdddd2WnAFAHZ511VjzyyCPRokWL7BSAf/HJJ5/Eueeem50BANAkPfXUUzFlypTYf//9s1OoZyUlJbHTTjvFTjvtFP/xH//xz5evW7culixZEkuXLo2PPvooli1bFsuXL4+1a9fGunXr4uOPP47WrVtHRMRmm20WJSUl8aUvfSnatm0bW2yxRWy++eax+eabZ31YNIKPPvooLr744uwMAIAv9Morr2QnAAAAAAAAAECTYbgHAAAAAAAAAAAiokuXLnHkkUdmZ1CDu+66K15//fXsjCapuro6rr322hgzZkx2CrVQUlIS559/vuEegCZm8uTJcdttt8WJJ56YnQLwL2699dZ45plnsjMAAJqsSy+9NP7jP/4jSkpKslNoBCUl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N96II488Mqqrq7NTAACohdmzZ8f5558f69aty04BvkBVVVWceeaZficCABSVe++9NzsBAAAAAAAAAAqO4R4AAAAAAAAAAJql7t27R69evbIzqMEDDzwQzz//fHYG6zF//vy4/fbbszOog29/+9tx0kknZWcAsJGOOOKImDVrVnYGUEAWL14cP/3pT2PRokXZKQAA1ME111wTd911V3YG8AWuu+46/68CAEXnsssuiwULFmRnAAAAAAAAAEBBMdwDAAAAAAAAAECzNHjw4GjRokV2BuuxcuXKGDx4cHYGn6OioiIWL16cnUEdDBw4MDsBgI20atWqOPLII2PevHnZKUAB+Pjjj6N3797x3HPPZacAALAB+vTpE6+//np2BlCDZ555Jk4//fTsDACARldVVWW8EAAAAAAAAAA+w3APAAAAAAAAAADNTs+ePaNnz57ZGdTgrrvucmBhgVu8eHHccsst2RnUwS677BLnnHNOdgYAG+nNN9+M4447Lj744IPsFCBRVVVVnHnmmfGHP/whOwUAgA20YsWK6N27d6xYsSI7BfiMRYsWxYknnhjV1dXZKQAAKS666KJYuXJldgYAAAAAAAAAFAzDPQAAAAAAAAAANDsVFRVRWurWmEK0fPnyGDJkSHYGtTBkyJBYuHBhdgZ1cPrpp0erVq2yMwDYSE899VScfPLJ8fHHH2enAEkuuOCCuOaaa7IzAADYSFOnTo0hQ4bEunXrslOA/1VVVRUDBgyIV199NTsFACDNvHnz4pFHHsnOAAAAAAAAAICC4XQSAAAAAAAAAACalaOOOir222+/7AxqcMstt8S8efOyM6iFFStWxI033pidQR1sv/32UVlZmZ0BQD247777on///rFmzZrsFKCR/fa3vzV2CgDQjFx22WVx++23Z2cA/+uqq66KCRMmZGcAAKSrrKyM1atXZ2cAAAAAAAAAQEEw3AMAAAAAAAAAQLMycODAKCkpyc5gPZYsWRLDhg3LzqAOKioq4t13383OoA569+4d22+/fXYGAPVg/PjxMXTo0Fi3bl12CtBIbr/99ujbt292BgAA9ezEE0+M5557LjsDit4f//jH+NWvfpWdAQBQEJ5//vl48MEHszMAAAAAAAAAoCAY7gEAAAAAAAAAoNk44YQTomvXrtkZ1ODmm2+ORYsWZWdQB2vWrInx48dnZ1AHbdu2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L14c06ZNiyeffDKamppST6KXO378eKxevTpKS0vjrrvuihMnTqSeBAAAPVZnZ2esXLkyJk+eHLfeemvs2LEjOjs7U88ioa6urti5c2fceeedH4adhFIBAPi07dmzJ+69996YN29ejBo1Ku644454+umn480334wzZ86kngcAAAAAAABADybcAwAAAAAAAABAUl/84hdj0aJFqWfwMXbt2hUbN25MPYNe4Oc//3ns378/9QzO09e//vWYPXt26hkA9FC1tbVx++23x8SJE2PVqlVRW1ubehK9TFVVVfz4xz+OSy65JJYuXRrNzc2pJwEAQK/yy1/+MubNmxcLFiyIX/3qV665M9PQ0BDPPPNMXHnllXH55ZfHunXrUk8CAICIiGhra4snnngibrnllqioqIgRI0bEN7/5zVi3bl3s2LEj/vGPf6Se2Ou0t7dHVVVVbN68OZ577rnUcwAAAAAAAAD+o/qlHgAAAAAAAAAAQN7uu+++6NfP31i6o66urvjpT3+aega9yMMPP+zGfj3MwIEDY/ny5XHttdemngJAD9bY2Bh333133HPPPfG9730vFi9eHNOnT089ix6qs7Mzdu3aFevXr4+nnnoq9RwAAMjC1q1bY+vWrVFUVBRLly6NG264IS699NLUs7gA2tvbY+fOnfHss8/GY489Fh0dHaknAQDA/6mtrS02bdoUmzZt+vBYaWlpLFy4MGbOnBlTp06NSy65JEpKSmLAgAEJl/YMra2t8e6778ahQ4fi73//e7zxxhvx/PPPR2NjY+ppAAAAAAAAABeEO54AAAAAAAAAAJDMVVddFVdeeWXqGXyMbdu2xW9/+9vUM+hFnnjiiViyZElUVFSknsJ5uPrqq+Oaa66JP/zhD6mnANDDdXZ2xkMPPRQPPfRQXHvttXHHHXfEVVddFYWFhamn0QM0NzfH73//+3j00Udj+/btqecAAECWmpubY9myZbFs2bKYP39+3HbbbXH11VfHqFGjUk/j/6GrqysOHjwYL730Ujz++OOxf//+1JMAAOD/7dChQ7F27dqPHOvbt2/MmzcvZs2aFZMnT46JEyfGxRdfHGPGjIkxY8ZEv3753Iqpubk56uvr49ixY1FTUxPvvPNOVFdXx969e2PPnj2p5wEAAAAAAAB8qvL5tRgAAAAAAAAAgG7nvvvui4KCgtQz+Cc6OztjxYoV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"
				), a60(7, "youtube", 7,
				"iVBORw0KGgoAAAANSUhEUgAAAKEAAAAkCAMAAADW8qrvAAAANlBMVEX+AgDxYgDjhgD/eXnQpAC7vAD/oaMA/wClzwCH4QAx/zdf/1ty/3Sf/6D/3d2+/77d/93///85QMf8AAACr0lEQVRYw8WYWbaDIAxAsdVqAzzi/jf7GBIGZxxO89GiUbgGEkJEH+Q7DF3bti8rjRPhxTftLavpuuH77X8gwv10BLQrTfsEpHECG4TwEhUy0ItKW1Gh7Zp6AwF0KRP16GSLsApQCLKidt1igE3NZZFjKZWEXR2gaMguaSwPa54jbCoJ2Yjo+lWxpR8jhFpA0dH6jlzbIzhCdOIf8606wm814atPq8+whXDXY+WS+Y4QDtWETdYxHlmGFwm7akLRZwsRaLrVc4TtAsL7vUkIWbxRRBrCngu9xArSinvS/cuccKYhQpletjrXl3ZasRQNP+Pfe9+ZZZhd4EnW5KmYHNxwVFIZ4UwTCP1U0GqhC3+5QjiOn11CPxQGj9EJ0Io8QchM6fMIcZVw/PvsEfpOAxkUMQ9PEObvZh87KtGsEY6rU81bs46zg4SLoNiI1YRaYvGECl2aLcI1Rib0Q2gM42HuN7qeUFOEtV8HZMvwv2ikTzLyZ4PQj2WK5U62NCc8Jd2ImcghwiUzRkI/wWHcOD7nPCcI2ZhxC/BPXiJUaXWrOwjxDOHmLLMXxlhzD6EpCbc9ZdOXadF5172dEJUK83Il2jBXCmE3Eka5ErF5EPMbwgO7Xp5e30+IJBcyh2cJzQ3ZV0GoniM8n8HeTziN2DZH1PrCKaAghCd2PZ/enT9JlYQ9D8dHQFNPqMYskUuEp0+jE0IaVxakCJQt54SswYIQZci+MGVfwZaitihSuHJGSMF7MQstCWea4tpM+tKiHy4sw7zcgMWoNIdOOyWcaRIOnSAAs5T7dGVpRpi61dmOOCqYEs403nQqf1dyXwjnq3NZXU5yMmbsFmA0ZJdGhmeAS3RJA1ET6nyg7c14GtW+L8UVzuEo4zMVzgM1WKoSU5m44TJxw0VirhLDL6rE/6vBvdrCmmWnAAAAAElFTkSuQmCC"
				), a60(8, "googleplay", 3,
				"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"
				), a60(9, "discord", 7,
				"iVBORw0KGgoAAAANSUhEUgAAACwAAAAyBAMAAADVdiTZAAAAG1BMVEUA/wBI/0lu/26P/5Cl/6O8/73R/9Hn/+j///+iRuwXAAABJUlEQVQ4y83TvW7CMBQF4BsKdKVIpYxIRaJjVLUSI6JDGSNlCCOq1JC1f+CxFIL92D22E+di/ABciZB8seRj35joVZ3VN1FXBSqhRYgPJEIsSQXrAnmjL2uP5Usm81z83Bec5WM+J9T4vS8Yfzz1yFQ0v2ackKsrxr2G7d4ZPjK1O214z3no+Jdz1/EKTy1NI/w6jmcIID6JJirGe8cYdIdGIcQOwx3j/gEpI6X+qoRkGqrnd6OXFR/NRAcdOWFc6hDPera0Xk/Fozo1ck4bHsSVpg0jYJSlervGW9zWSdQXhhXozlbGek1uY9/s2hRWect7ucnsf5ld7DfosX+kcsv+AdwtDfvHdW877x/u0raB6Oa0qG35rKZhbokg41sKclQEmTr/f+SUPtWxuyYAAAAASUVORK5CYII="
				), a60(10, "insta", 3,
				"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"
				), a60(11, "emojis", 4,
				"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"
				), a60(12, "flags", 3,
				"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"
				), a60(13, "bestTeam", 5,
				"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"
				), a60(14, "bestPlayer", 5,
				"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"
				), a60(15, "zoom", 6,
				"iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuBAMAAACllzYEAAAAHlBMVEUAAAAhIyA3ODZTVVJrbWqEhoOkpqO8v7vX2tb///8goTJXAAABaElEQVQ4y32Tu1ODQBDGL8QAdlg5dml8dZTa2TijXQpnIh2TwoQOxwehi2PB0flKYP/b7HFv5nALBn5337d7ewshXZyuKX2PST8egUW76OE7EJFa+BhJ9bSsUWFaeTV3GKHbn8EvlB79bjSv4VO8jUr4VdiHNnK938MHPie0Yh+ZLqmGuNsJ7CNURgewI5qPoRE86GwkJyWIBIfcUfJrmMm0sclDyDnPWmLyADacl8jnRbEGKIoiJRP4EmU2LJmIDfLvAf7z/37mv6IUm08pzbV/rx5f1pPA1Fn/iX3eS3nekAslz7gcGw9bg3uqn6Rup5oH+uaTLpO4r0SmZVuUFE2lfTc+z1qr9+BVtGJqzq1RHNfQdAtnrEW75UwuXOFgvj3crpCyDu6UIpP9fPHZU5XkiYVXvsXIPcc+VwspzY2pPorE/NgCfYK+QJ5+QFA6fjQt2A4IWuIWODixe2ELcuIUNJGL+zQle92exY5pfDIaAAAAAElFTkSuQmCC"
				), a60(16, "apple", 3,
				"iVBORw0KGgoAAAANSUhEUgAAALQAAAA8BAMAAAA9AI20AAAAG1BMVEUAAAAjJCJUVlOEhoOanZkA/wC8vrvW2dX7/fq38z8cAAAEbUlEQVRYw+2YzXOiSBTAGzW6x8ZY6pGYFMMxUct4JGbLcMwld9QpliNkLeUqUvT7s+e9BoUITpIpuWxtp0IJdP943/3B3t7eXtnF2xViGZIbf1+8mVcS3YQKmk3o16AKtLhCdAsqad4be3WrQcdX7BUqalesURXaZM2q0DZr/TfQQVVo8fTXb/LgzO9SiQpon/WPg0fjk5j3cuNnH74ZQPcztOBsegz6xnP7i+i99Tk6ZOwoadwH34LnR5jDBB6j9RjR4vkF4pEF6wmho1EQOyP83uwWuisX1uPgPNpmdciho/5efwiWoiZau86T5QX+ZACL+S0MpEKDVW9/PTMAljq0R026P4/WmJFHx30v2E/9+GFj7KzI8IIZ+K6AZdyCAXbowd3ewN9kkA4McYB+Hs078BG9gNgI/12trJ1L6BGEVjRoRwbZOsbrfipaqa1nUXvQOY+eB1kUIXpv+BAZ0VM8DI5od7id4auh7DBK0VOJ/rEtt7WYqXoAmxvlLn0f94Tp7qx3K24LFRL0IrCDOxiIzgZtLbqim6INQosevJSiTZwtr2ccr6lWsaJ2IFaRocM4Re/x0WIwhEV7hD2e1GmCjtUA0fB0Y5Shw9x8bCWPtlu6BIeswD95K7YiTT6xpWQJZG7ic7ovQ9/n0MZFa4jIkeuXLU/hpYXO0H4O7V4WbWfkWvZ6NT4zbp3F6HfQOVNzpXx8RDHalcX0c7SZobM5XpwzjqlMHA0/azf/FL1XeKlLBccKF6G7v4vObL2rm6WzciznC631NXTO1pl97ZZHKtxMl/wOdWiLG+UxQVO+btwFV7AMrDk99bvvbYhvFL2A9op5jnL1Q1KB38lgDxUz/a5gvYM8CsToUsUFr85rMqWnp+hdDt08mtSKGKI413/yOmaVMl8m+aQpE9nBbGzBV17WaHtPuXYipm+0xil6n0Mr7sGkgSAVUBxMqSAkWbVmmmBtqp9k63v8t2uotgs+dgwP9jyi4/xOJHVkqJBNEN2ieLBCikSvlqxWsJcu0YKCCHn0wqb6eojXrPLxIpp8aKJMvE/mnYZknJ1ySEfyCaFJL7SbVycFHMc5uCpDm0Vjmw3HMXGEDG5mkBJSk6Qt0T6IllLihdCaHD09RfvF0id7KglaFNBk9lN0nXZfBYNEhdInmIoNbwoGiZ1EqYJBWuWrJ+20PkX0CZQWeDN1I0LsuizuFAWmlBoSNwKhZXJugwLaP7VH4jGth8EXwELB4OtiPDRlOP3ACwazjY6+J2fXJdrHjlExQmRWfUh0WwY/ysbV6xkWrZDx8cMxZRwNlfDYLYqkk0cJHbGOo9VKljgLpky2K04SJROxfIXxynVOfg+VBcal/O47S9YUe/Sy0ORTQsswM0rQ4iepsnEO96pcaYdqwI31YCINOrtNtV2pqpxl1nNUd0hPo7lcJg0m39rLpEU7F3cX2yb9jz5paRJ8WNF9BV3hRrrC7X+FhxYVHrVUeEBU5bFWhYdxb6+Nf7YXbpv0CLGqg89fkK30UIXyeWIAAAAASUVORK5CYII="
				), a60(17, "loading", 6,
				"iVBORw0KGgoAAAANSUhEUgAAAZEAAABGBAMAAAD/Q7RHAAAAGFBMVEUAAAAnKSZKTElucG2Fh4SoqqfLzcr///+y5yZlAAAEnUlEQVRo3u3aS3PaMBAAYGNsuHoy0+TKTJv6SjNNfeWSciVNJlydF7qGl/n7JTGSd1e7wgaFaWfMKfFD1qeXV5KD8cb8kuC//rWSVtJKWkkraSWtpJW0klbSSlpJK2klraSV/KuSbw9qe8HsfnCyfHVuZu95Kmb3iUdJ+KAvKf7gM119vDoUb8Bv9gLsu2PD97+n4O/tr1/+OzHXXiqTRjHyJukqkLcndKqnDw94yTYfty7JoyD5jtIYeZJ0FEr2Fp670EcnkgScYiRrXkJLI/EjyUjOhtzduSwpBrJEJ4YloSJJPHqRRDRnK3DSPHIpS8w5TjLnJJlVGIkPydjKWdVsw+pZDokueE5SMJKunULuQcIky5a/S7KQJbtiQZLUTmHlQcIkW13YYyqKkRQOycKWKNcjD5dwyebMYJA7JLscspLCknAJgLHxUEnEJbtkmAuXZC5LysqEEq4V1OkoeySm/bxenf22ujd41NolWTskCyoxxfNydXajrL55qCSDXe4LeaNHdl8wkiLofP2NxwNeUhBJiKKJiBbUwRKFBtIxbrVlha3wCzMGGYzROMxLPhIDkhjn/aOtFa93x0o6uHJ1Cb3Bce1NoZYMJabN5w7JEkv6uLSibQT+w0PcFZGhQyFYmZ18CnVY0q0hKbAks6JrL1F9j4S6Gar50jVK0csLSTR97pC85x9IprW7+CESU0B9psCTHroGS8ZgwJAkSyRRqAF7k/TJyIFkWhCjesOSC5CAJNk+GEjqvwobSVIS9sRwVO3vzoXo2TEXGhZOSQ4knUazq/qSDMXe1QgAbp3rBpFzkl4dyQpIurBnqibhilsyJo2WeU6us7U8WLIZ2JLgkyUhkFSNKoN5x5K4liSvJNEnSaZE0gG5ic1dfThFaSTRQ9vpJbBOqsE3hp20kUS/r9JPl0itKzGjwbrqPXlzia5jdXIJ7I+qCsrhFKVRjyeLD6DHJ54lrlEYVIQC789mkliSDD1LUhIEgTdjJEzXm0nw7Bq840eeJY5opSesBrHv+LUoyQTJ5BgJM113RJCpMNnGknSfJKYSGEH6l3BR/dS+4c2WwBidlaDmxUX1oR+JMNNa8MtHK0vSgUZekhIJnWl5kpDZb7fKGLM2iebuBZqp5bIk3rBTepN1TxJT8gO00jJhO3x5FZSYDYuJLKGdgaxI6P9BwxuZgyt4cI8kYxrOR4770kphJTm7VmhZSZCk+H68ShRcbjxJ4MrdNWxFY2mlMJaanSSJyAClwCN/Pmx8SaJ9zc46wUkWLglISl5NPV4irXCH7B1F0xVuvMXnWOH2IBF2HWLcLUE81mjXgWzRTODI7VvSdfafBZmBjRruBKHXp667jKvt5GiJsDuXkXBfmXbXaHeuPHGOJVzfHAXHS/gdU0W2Naam9BvtmJIdwIn0jnsKPEj4XWy6KlVFio12sXE5aElX2GY8VkJ2xx9hRSV2kByLW8WypEcilHNuI+l4Cf7a45ldLzZ5GVrfN4yC/ZKQhu6/ECTxJQnCKoK/s6cdqDfl5AscuIMjS/S/7Bc4z3SlR5DU+5VfRRWvp/sqKiy/iqr/IdZfF1HJgRmsN+0AAAAASUVORK5CYII="
				), a60(18, "target", 7,
				"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAMFBMVEXUAADUISLWQkLMTQDZZmXAdwC0lADgiIioqQCWvgCE0QAA/wDnra1i6ADw0tL////afMd+AAAC6klEQVRIx42WTWgTURCApzFNY2lLBKEX0dy8iA0UxB8CKgUv0gaKBS2B3HOJnkUDQrENQi6KEITcgydR0l0CUYReJBZCi3YpaC+9FANS6GXZ5+6+eT+z+1adS/ImX97Mzs4f2ET2916vPV9/61At6Ifeq2UIZWXDSYK+IxLIlY4Z+ga6jL8xQbsFoFQrDtF7QqoThaxSDIKsE4HqYJAyhXZNDJxq6VCvZIQgq0NDSJCGgnqFJCiroB2lHTvjS06dWxJSHl0cjBjztm5JxXUBdaXqro8E4j2UD+gg1BamFpkQ75GgVjkkn/8SU+LVUHmaQx/wmB5pEHNzyh4oa08ZkU+oroZQhR8mKMO8PNdPBpBlvoixA67PBBC6lI4yzJVOgb3Nv1+OQawm3h9gJo19jUPHHLrhQ4UEazIKkzZYHJoRvxwuLAzE95voOWzyO5dQ/zkw/QQPfe65DfhwGO2T8JBCB39zqAM8l1Ij3QBMkSC0YFsP94nIB/4fj3vegLb+175IkCX94io0w8/zXJkX0IwezjLUNciTKZrWoSJCF4hLvlCookHHChppPhaB5+7c36BpvOm/oH+Y0x13VSFTx5vGEEzQOPGInyO5KPOUR3yVvrsDIFWBBVOFoR5hlwYczTfgPUmVj1y9SJKiBdhSMM3c0ItZzMwfWFMifeeYomZHpKb89MVWOCWr++hXpNCzfkmViFO6oEvTPtROaAWM/RRtDOx3QO0pyYveCjZ6HreH1saDhiGaeKxj9GUrBzl70iNj54FiCA3BeFVNtXsfEq2Odh/xrjPYxyuG9nuU00YC6DPqrKTcvD6nAshSNclbk3coR1BGDqCmpFJ3Hg++bN2OTNgQ6uojTh9kfP7g5KwnDcWiNl67CQy/SEzzhKvKZORvGqdwxqHLw47JWCOyYfSexaEHsYUmvj9cM6xG1jJlrjqmJcsiFu875nWt91I+4/yLxMXP3lu753PzK+tO8nYY3LbvS2SDtP8A+ntynBIvYeAAAAAASUVORK5CYII="
				), a60(19, "members", 7,
				"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABSVFGanJkA/wDMz8x4/3ey/7L///+GDHoaAAACZElEQVRIx9WWwYrjMAyGlVCYa6cs5JqGQh5gaObaDYU8QJnOA5SS66RN49dfSZZt2U2WZZeFXc9h2r9fZEmRJcPbLyz4d6GzMdM1/uXcG3PV0KehFVFnlh4Baoxdl8BEEkF7EcwUoN5pJ4HenRBMNV66C4QfxxI2nTKFhsYt5CgZC9FTawDIxbg4UKKUWevAuw1Aq/D7NUq6M9RbQ2zKhkwpKVnK2AWGRrCrc04lEpDfgyg1u8mh3EQqSGLoS5QXY/a4+XSKJIIwkkNQOIlTgFYUcQq59TuQcrwI0PDk+M3Hayh2+RcC1smkl3DDj1ltlMR5old38LutHT04l/BVAVfOSL9lnXelUBKaAltxt2gTv3Ft6w6k4sajdtf6zhLVHUHltzTwkIzvOUGf9PhOJJdVdphWS0YfFnJUCrVgISmdTVWVnVQa19+YV9VWKgohl2+MRUFKjaAXDX0tQCvt0+HPIJWnJajWGV9wPDPutPFhXs9CK+PLr1aJjSF+5aUzpOQY6mwZURWNCRRO9JZq43ikMtnog44v2LlojK1EW6n4zYXz4HqSb/gsty1qaWjAt5o7NAEiL7Jdu2vX7IqHLikEIYdzUJ5CZQQdJJcJ5GSE9i5tC1BNR4oadGub76ChwrZfKn48wTRXsGfrQvHFQr0dmy245o8nMYHGoxsToMZIAoWBA2qOzEMXmVJiK4nO2jn5oXju5yGZpn4Gf/QpNH08D+pn6O3vQqOGulkIX0+1fbXd93VT+dkXQe/SO3F1fkSnUBjgT7cEdVdJodkLTbNkKLr1NH1ApstPrkbnK/39B9e1H85NJPjxrK7zAAAAAElFTkSuQmCC"
				), a60(20, "hourglass", 7,
				"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABKTEqZm5gA/wDJzMh3/3iz/7L///+iyVF/AAACjklEQVRIx72W3aqyQBSGJwk6dceGTv1C8AJEO60QvACJLkDI02xPrtvf75pJ58cx2iffIqT0aWb9vGuNIrft0hSX8WqZ4Etxg9HM+G4zQVdatOcEdSSrqkr3juFOVdMwQXQUC7YmAyVLUPQZ1PxtJSJ5js7KX7j/+pKkNR5Y0RE9Ij/6JMPFRFfebt0cOmbD7dZOEOwQgn7ssnwOrf8rJAMp8KFSrnwormcQCR8S1HpQgT8qVVXnVCsJS/tQzlV4mMpmJLUCXOi4I2mgmnotOAfqcJPiCUIGNsMMunJdEqMjbP+cQQcOrx+hnZ0BA5XsuTQuPUxwBoLnZj98Oxq/LaiTHNK4G34MAQj7jfGhQqeIfgJQzm7ofELccUZ5CDpQjKBO3LbUr+gZhAo8QhMl8FoCb4IQhkvyUt7JWciBCnhUa5VkJkkexEtxQ3KjPvMlqKD7hk7fdF/bHnlQfoUU4LglgBCElVCP+ztIbQfDdXk7OL5jqH/juE7BA4pBUZr8XTJZMadoKZklKlxriMvSBqGO4m8ejJmuy5AH9aTqq02CbwPQlfeYDH94ziEWilqDW5xniiUWq6VUjs6szFTnat5SHYuXdcnGAcTZrINLrpmZGJnqqXY26WLONJ7rfqm5qfwh1vXckPahAh8HD/Imjzt7xJgACLe3oZ01xYQ1Mo/umWmGprBOjcQ96cyEEtacc89DrDx6PkJQrHSh2kjdgh4ulH0C7YIQuS8P3nYlDa9ecg33OpUF8TqnFyB9UitIVujsALSmqp6g+/5fHKVpxQfQqM6q2ier7X5joFdAMX++YrEyMc6hgP0RkuoVZbvfTqfU6gs/VbZG6M3bmn5fE0pxb6x1Ori4eNbkY3f+AriuYpjQCOoxAAAAAElFTkSuQmCC"
				), a60(21, "stalemate", 6,
				"iVBORw0KGgoAAAANSUhEUgAAAeoAAABABAMAAAAnsyk1AAAAElBMVEUAAAA8PjxeYF2Rk5C6vLn////ACCfyAAAFMklEQVRo3uXby3qjIBQAYBEfwO+buM9c3Ntp2ZOZ8ADx8v6vMp2qybmBCK6SbNomEc4vcAS0RbG+1Iebvl5/vxev8lIf0+M1nl8DXboJvd5eET1N3QuoGfoVOvlp4q/+6fv3JL2evY83orp/uVH9NbLrp0braXrBLt541LenVpsH9Ao7+/DUc1E0kuF85ZkHdokHMriMPfNEpbo39fx3e1fbV1D3NKVb8KEn1TkpCShvbxET50gvnzdaDG4A520mfhHSvg+oWsHaN9QlCf0Ydc+vqFYqfUk8SeqGNpcDtW+oKzEJ5KqHghYO1ZrOKPLUa842oPYNdbPRGmnqka+JrDAi13eT1Cd6jj9LuV7ff/+g51tQG3FOk6sWei5Qt3Qo5I1raVG9oXbinCZb3dFTCtWszlz1ZwRve9Qli/0YtfW8QzP73CmS1OQD7A6r0aHn49QXxrPyWqlLVrM9BegOqxt5iZat7tleh5UjsslqYXk91HFqIy/RstWDzOOjuE9XC0eNXZQana/hOPUYUBtWZ5q6CmwpBNWlEHykug9v6NQUY8VkNu/3RKlH/1KTs4NqciLPx6k72qjWs/HTJavlw/C1Wwz35Nlxyldb6Q2pGay0OyJNX8fIneFhM9ylmhFeb45RX2gPtKSFRmGXa6e6+LW5WyiGuwTaO3KactTj+nGJdJbQBsebZq9a3hseNsJdcdaRgnPUw1q1FtVq+drNcMxudSmyz+Fw1xK7luyzZandEuM8gP8SyFqnbXkNu9Uy+xIOd00s54YMiZ3X65qrP9+bv/pOIGudXcWFJrwYl4auxB7C6jWx1DSCLLVZDpx//iRFrwXUmqezBHVRfPji8anvw1mTz7LUzRL4/Pc3ArkP55K3TJI6eOteUKv7O4qMnSz13HHsnLZGjSHqkbodG69p6qL45nxzAEEN+pjDfSNLPRfbl/CveyTlIwrDqkhV0/a+hdRgNBtcXJYacXuiBnW2jJCuxjOWPqRu+YajPUA9HzwuHZ2oG77ddztEDWe6Q0htHkFXvh31BPXySyuqQbeuWIz71OWP948rOLyNUsMUpvH389Rz8MsFjKgduA3Jph971C2bvegoNZSWGJCnhivAGquhVLE68tTKxagraVOlO0ANd6oLrEYTA0dH6R51w0OMUouLcps/D8d5BavFk3ZJmYdXPLWZGLXxP7eUpy5hcVhtgkvDNPWlEG7v+cJVgcVpnlrBZtTe+wJ8v26PmucuFTNL0YGntfLUwGaxWt7zua8W9qgVu3rrmBlpFXhaK1NtQGlIrcNPiO1aXzva2CZm9eF5XMseoG5BKyL1Sa7zkqIGKeIPKTuw0jSBmwPK+1GU+gQiRWpPnX2KGp7B8ffPa9SugpzMlkMi1LyLOv6kwEDUnjrHvdfr/6H4HqhE+xRU7UksczrLVGtQF1QrX5x1gtp3CtHahKq990TO+WolNIkNPO+6xrlP7btjMgbSUOOLwOar781gsfoUqnO3Wm93cKY25MxoeFCu2vD7VBa0zkhv2fQpal9urANq55vZDAeowV63Fm58DXR6OCSpq+AFQVKXrD84aRGYqG74yt2CUns206hT1GI+w/8KQNTV5Ln/9NVAuepKVGt2pg1OZ3vVenNziagb9q12ElolUa0fVQE1P9PNJK/IItVCerwEp5KGTTkbUGKuuuSZFmyKPs505QkqVs3Yf8ITaMeGAZxQ5aqX3y1WO5ZlNZ5E7lfjjfCxK4Lqkl/S4YT3IHWH1IrXWeIclKD+LGP9T+Tr8/9r6j/yRPVUqj3rEAAAAABJRU5ErkJggg=="
				)
		}
	}, this.get = function(g0) {
		return gS[g0]
	}, this.uO = function(name) {
		for (var dw = fx.length - 1; 0 <= dw; dw--)
			if (fx[dw] === name) return gS[dw];
		return a5w
	}, this.g4 = function() {
		return a5v <= 0
	}, this.a5n = function() {
		a5v = 0, a5y()
	}
}

function bo() {
	var a6B, a6C, a6D, a6E, a6F, a6G, a6H, a6I, a6J, a6K, a6L, a68 = [224, 224, 224],
		a69 = [
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
		a6A = [
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

	function a6i(f6, a6k) {
		a1n[f6] = 0, a1n[f6 + 1] = 0, a1n[f6 + 2] = a6k, a1n[f6 + 3] = 0, a6l(f6)
	}

	function a6l(f6) {
		var jn;
		b2.ko || (jn = a4.jx(f6), f6 = a4.gF(f6), b2.ko = jn >= b1.a1m[0] && jn <= b1.a1m[2] && f6 >= b1.a1m[1] && f6 <= b1.a1m[3])
	}
	this.cl = function(qc) {
		if (a6B = new Uint8Array(f3), a6C = new Uint8Array(f3), a6D = new Uint8Array(f3), a6E = new Uint8Array(f3), a6F = new Uint8Array(f3), a6G = new Uint8Array(f3), a6H = new Uint8Array(f3), a6I = new Uint8Array(f3), a6J = new Uint8Array(f3),
			a6K = new Uint8Array(f3), this.yW = new Uint8Array(f3), (a6L = new Int32Array(4))[0] = -4 * au.eZ, a6L[1] = 4, a6L[2] = -a6L[0], a6L[3] = -a6L[1], ha)
			for (var p7, iZ, dw = f3 - 1; 0 <= dw; dw--) iZ = b8.rY[b8.ia[dw]], p7 = er((a6A[iZ][3] + 1) * aF.random(), aF.value(100)), a6B[dw] = a69[iZ][0] + p7 * a6A[iZ][0], a6C[dw] = a69[iZ][1] + p7 * a6A[iZ][1], a6D[dw] = a69[iZ][2] + p7 *
				a6A[iZ][2];
		else aX.iw && aX.ix.a6S ? function(eD) {
			var dw;
			for (dw = pu - 1; 0 <= dw; dw--) a6B[dw] = 4 * eD[dw][0], a6C[dw] = 4 * eD[dw][1], a6D[dw] = 4 * eD[dw][2]
		}(aX.ix.a6S) : (function() {
			for (var dw = f3 - 1; h9 <= dw; dw--) a6B[dw] = 4 * er(64 * aF.random(), aF.value(100)), a6C[dw] = 4 * er(64 * aF.random(), aF.value(100)), a6D[dw] = 4 * er(64 * aF.random(), aF.value(100))
		}(), function(qc) {
			for (var dw = h9 - 1; 0 <= dw; dw--) a6B[dw] = 4 * qc[dw].a5S[0], a6C[dw] = 4 * qc[dw].a5S[1], a6D[dw] = 4 * qc[dw].a5S[2]
		}(qc));
		! function() {
			var dw, f8;
			for (dw = f3 - 1; 0 <= dw; dw--) f8 = er(a6B[dw] + a6C[dw] + a6D[dw], 3), a6B[dw] += a6c(f8 - a6B[dw], 2), a6C[dw] += a6c(f8 - a6C[dw], 2), a6D[dw] += a6c(f8 - a6D[dw], 2), a6B[dw] -= a6B[dw] % 4, a6C[dw] -= a6C[dw] % 4, a6D[dw] -=
				a6D[dw] % 4
		}(),
		function() {
			for (var dw = f3 - 1; 0 <= dw; dw--) a6B[dw] += er(dw, 128), a6C[dw] += er(dw % 128, 32), a6D[dw] += er(dw % 32, 8), a6E[dw] = dw % 8
		}(), this.a6Y(),
			function() {
				for (var dw = f3 - 1; 0 <= dw; dw--) a6F[dw] = a6B[dw] < 32 ? a6B[dw] + 32 : a6B[dw] - 32, a6G[dw] = a6C[dw] < 32 ? a6C[dw] + 32 : a6C[dw] - 32, a6H[dw] = a6D[dw] < 32 ? a6D[dw] + 32 : a6D[dw] - 32
			}(),
			function() {
				for (var dw = f3 - 1; 0 <= dw; dw--) a6I[dw] = 235 < a6B[dw] ? a6B[dw] - 20 : a6B[dw] + 20, a6J[dw] = 235 < a6C[dw] ? a6C[dw] - 20 : a6C[dw] + 20, a6K[dw] = 235 < a6D[dw] ? a6D[dw] - 20 : a6D[dw] + 20
			}()
	}, this.a6b = function(player) {
		var eD = aq.e8;
		return eD[0] = a6B[player], eD[1] = a6C[player], eD[2] = a6D[player], eD
	}, this.a6Y = function() {
		for (var dw = f3 - 1; 0 <= dw; dw--) this.yW[dw] = a6B[dw] + a6C[dw] + a6D[dw] < 280 ? 0 : 1
	}, this.jx = function(f6) {
		return er(f6, 4) % au.eZ
	}, this.gF = function(f6) {
		return er(f6, 4 * au.eZ)
	}, this.q1 = function(jn, jo) {
		return Math.floor(4 * (jo * au.eZ + jn))
	}, this.qG = function(f6) {
		return this.pY(f6 + a6L[0]) || this.pY(f6 + a6L[1]) || this.pY(f6 + a6L[2]) || this.pY(f6 + a6L[3])
	}, this.qE = function(f6, player) {
		return this.a6d(f6 + a6L[0], player) || this.a6d(f6 + a6L[1], player) || this.a6d(f6 + a6L[2], player) || this.a6d(f6 + a6L[3], player)
	}, this.uf = function(player) {
		return player < h9 && 2 !== hB[player]
	}, this.f9 = function(f6) {
		return 208 <= a1n[f6 + 3]
	}, this.qL = function(player, f6) {
		return this.f9(f6) && this.a6e(player, f6)
	}, this.a6e = function(player, f6) {
		return player === this.fA(f6)
	}, this.a6f = function(f6) {
		return 208 <= a1n[f6 + 3] && a1n[f6 + 3] < 224
	}, this.hj = function(f6) {
		return 224 <= a1n[f6 + 3] && a1n[f6 + 3] < 248
	}, this.qF = function(f6) {
		for (var dw = 3; 0 <= dw; dw--)
			if (this.uh(f6 + a6L[dw])) return !0;
		return !1
	}, this.a6g = function(f6) {
		return 192 <= a1n[f6 + 3] && a1n[f6 + 3] < 208
	}, this.a6h = function(f6, player) {
		return this.a6g(f6) && player === this.fA(f6)
	}, this.f1 = function(f6) {
		return this.f9(f6) || this.fB(f6)
	}, this.uh = function(f6) {
		return 0 === a1n[f6 + 3] && 2 === a1n[f6 + 2]
	}, this.fB = function(f6) {
		return 0 === a1n[f6 + 3] && 1 === a1n[f6 + 2]
	}, this.pY = function(f6) {
		return 0 === a1n[f6 + 3] && 3 === a1n[f6 + 2]
	}, this.ug = function(f6) {
		return this.pY(f6)
	}, this.a6d = function(f6, player) {
		return this.fB(f6) || this.f9(f6) && player !== this.fA(f6)
	}, this.fA = function(f6) {
		return a1n[f6] % 4 * 128 + a1n[f6 + 1] % 4 * 32 + a1n[f6 + 2] % 4 * 8 + a1n[f6 + 3] % 8
	}, this.qM = function(f6) {
		a6i(f6, 1)
	}, this.a6j = function(f6) {
		a6i(f6, 2)
	}, this.qD = function(f6, player) {
		a1n[f6] = a6B[player], a1n[f6 + 1] = a6C[player], a1n[f6 + 2] = a6D[player], a1n[f6 + 3] = 208 + a6E[player], a6l(f6)
	}, this.f2 = function(f6, player) {
		a1n[f6] = a6F[player], a1n[f6 + 1] = a6G[player], a1n[f6 + 2] = a6H[player], a1n[f6 + 3] = 224 + a6E[player], a6l(f6)
	}, this.hk = function(f6, player) {
		a1n[f6] = a6I[player], a1n[f6 + 1] = a6J[player], a1n[f6 + 2] = a6K[player], a1n[f6 + 3] = 248 + a6E[player], a6l(f6)
	}, this.a6m = function(f6, player) {
		a1n[f6] = a68[0] + a6B[player] % 4, a1n[f6 + 1] = a68[1] + a6C[player] % 4, a1n[f6 + 2] = a68[2] + a6D[player] % 4, a1n[f6 + 3] = 192 + a6E[player], a6l(f6)
	}
}

function bp() {
	var fx, ex, ez, ds, a6n;

	function a6s() {
		for (var a6x = 0, dw = 1; dw < 5; dw++) a6x += ex[dw] % 1024;
		return a6x
	}

	function a6r() {
		for (var dw = 1; dw < ez - a6n; dw++) ex[dw] = parseInt(ex[dw])
	}

	function a6t() {
		ex[0] = "Player " + Math.floor(1e3 * Math.random()), ex[1] = dj < dk ? Math.floor(1 + Math.random() * (Math.pow(2, 30) - 1)) : 0, ex[2] = 1, ex[3] = 1, ex[4] = dj < dk ? 0 : 1, ex[5] = 0, ex[6] = "000", ex[7] = "0", ex[8] = "0", ex[9] = "0",
			a5.dq()
	}

	function a6q() {
		for (var dw = ez - a6n - 1; 0 <= dw; dw--) ex[dw] = h.dg(ex[dw]);
		ex[0] = h.r3(ex[0])
	}

	function a70(name, value, a71) {
		var a72 = new Date,
			a71 = (a72.setTime(a72.getTime() + Math.floor(31536e6 * a71)), name + "=" + value + ";expires=" + a72.toUTCString() + ";SameSite=Strict;Secure;path=/");
		document.cookie = a71
	}
	this.cl = function() {
		if (!(5 <= dZ || dV)) {
			a6n = 4, fx = [], ez = 10;
			for (var dw = ds = 0; dw < ez; dw++) fx.push("u" + dw);
			ex = new Array(ez), ! function(a6y) {
				for (var hn, f6, a6z = a6y.split(";"), dw = a6z.length - 1; 0 <= dw; dw--) {
					for (a6z[dw] = a6z[dw].trim(), hn = 2; 0 <= hn; hn--) a6z[dw] = a6z[dw].replace(" ", "");
					3 < a6z[dw].length && (hn = fx.indexOf(a6z[dw].substring(0, 2)), f6 = a6z[dw].indexOf("="), 0 <= hn && 2 === f6 ? ex[hn] = a6z[dw].substring(f6 + 1, a6z[dw].length) : 0 < f6 && a70(a6z[dw].substring(0, f6), "0", 0))
				}
			}(document.cookie), ex[9] || (ex[9] = "0"), (! function() {
				for (var dw = ez - 1; 0 <= dw; dw--)
					if (void 0 === ex[dw]) return;
				return 1
			}() || (ds = 2, a6q(), a6r(), a6s() !== ex[5])) && a6t()
		}
	}, this.dq = function() {
		if (2 === ds) {
			ex[1] = 0 === ex[1] ? Math.floor(1 + Math.random() * (Math.pow(2, 30) - 1)) : ex[1], ex[5] = a6s(), ! function() {
				for (var dw = 1; dw < ez - a6n; dw++) ex[dw] = ex[dw].toString()
			}(), ! function() {
				ex[0] = h.r2(ex[0]);
				for (var dw = ez - a6n - 1; 0 <= dw; dw--) ex[dw] = h.dr(ex[dw])
			}();
			for (var dw = ez - 1; 0 <= dw; dw--) a70(fx[dw], ex[dw], 1);
			a6q(), a6r()
		}
	}, this.ds = function() {
		return ds
	}, this.wV = function(hn) {
		ds = hn, this.dq()
	}, this.dp = function(dw, value) {
		5 <= dZ || dV || (ex[dw] = value)
	}, this.dc = function(dw) {
		return 5 <= dZ || dV ? 0 : ex[dw]
	}
}

function cA() {
	var g0 = 0,
		a73 = new Uint16Array(32);

	function remove(uR) {
		var dw;
		for (g0 -= 2, dw = uR; dw < g0; dw += 2) a73[dw] = a73[dw + 2], a73[dw + 1] = a73[dw + 3]
	}
	this.cl = function() {
		g0 = 0
	}, this.iK = function() {
		var dw, hg, hE;
		if (0 !== g0)
			if (0 === hA[eu] || a6.a74(eu) === a6.ee(eu)) g0 = 0;
			else
				for (dw = g0 - 2; 0 <= dw; dw -= 2)(hg = a73[dw]) < f3 && 0 === hA[hg] ? remove(dw) : (hE = a73[dw + 1], (f3 <= hg && ui(eu) || hg < f3 && un(eu, hg)) && (aa.fr.fs(hE, hg), remove(dw)))
	}, this.uZ = function(hg, hE) {
		! function(hg, hE) {
			var dw;
			for (dw = 0; dw < g0; dw += 2)
				if (a73[dw] === hg) return a73[dw + 1] = Math.min(a73[dw + 1] + hE, 1023), 1;
			return
		}(hg, hE) && 32 !== g0 && (a73[g0] = hg, a73[g0 + 1] = hE, g0 += 2)
	}
}

function a76(player) {
	a77(player), a78(player), a79(player), c.et(player), e.ji(player), a6.clear(player), ap.a7A.a7B(player)
}

function a77(player) {
	a4.uf(player) && rN++;
	var a7C = a6.a7D(player);
	0 === a7C.length ? player === eu && a7E() : (a7F(player, a7C), a7G(player, a7C))
}

function a7E() {
	b4.ex[17] += ev[eu] + a6.a7H(eu), u.show(!1, !1, !1, !0), t.a1H()
}

function a7F(player, a7C) {
	for (var dw = a7C.length - 1; 0 <= dw; dw--) a6.a7I(a7C[dw], player)
}

function a7J(a7C) {
	for (var g0 = 0, dw = a7C.length - 1; 1 <= dw; dw--) fP[a7C[dw]] > fP[a7C[g0]] && (g0 = dw);
	return g0
}

function a7G(player, a7C) {
	var dw, wA, a7K = a7C[a7J(a7C)];
	if (9 === iz && 1 === b8.ia[player] && aF.iT(8) && aA.a7L(a7K), player === eu) 2 !== hB[player] && k.rD(a7K, 1), a7E();
	else {
		for (wA = !1, dw = a7C.length - 1; 0 <= dw; dw--)
			if (a7C[dw] === eu) return wA = !0, void k.rD(player, 0);
		!wA && player < h9 && 2 !== hB[player] && k.vr(0, player, a7K)
	}
}

function a79(player) {
	hA[player] = ev[player] = 0, f0[player] = null, fH[player] = null, fI[player] = null, fL[player] = null, aT.a7M(player)
}

function a78(player) {
	for (var f6, jo, jn = i8[player]; jn >= i9[player]; jn--)
		for (jo = iB[player]; jo >= iC[player]; jo--) f6 = 4 * (jo * au.eZ + jn), a4.qL(player, f6) && (a4.qM(f6), fP[player]--)
}

function cG() {
	var input;

	function a7N(dG) {
		a7P(dG.target.files)
	}

	function a7P(files) {
		files && 0 < files.length && aW.a7Q(files[0])
	}

	function a7V(dG) {
		var iZ = new Image;
		iZ.onload = a7W, iZ.src = dG.target.result
	}

	function a7W(dG) {
		var a7X, dG = dG.target,
			g6 = dG.width,
			i5 = dG.height;
		4096 < g6 || 4096 < i5 || g6 < 10 || i5 < 10 ? (a7X = "Image w & h must be between 10 and 4096.", dW ? dW.showToast(a7X) : alert(a7X)) : (aX.oo(), au.pi = au.yw(), au.a4s = 0, au.eZ = g6, au.ea = i5, au.pK.width = au.eZ, au.pK.height = au.ea,
			au.pG.drawImage(dG, 0, 0), a7X = au.pG.getImageData(0, 0, au.eZ, au.ea), au.pL = a7X.data)
	}

	function a7Y(dG) {
		dG.stopPropagation(), dG.preventDefault()
	}

	function a7Z() {
		return 0 === x.sb() || 2 === x.sb()
	}
	this.cl = function() {
		(input = document.createElement("input")).type = "file", input.setAttribute("accept", ".json, .png, .jpg, .gif, .jpeg"), input.onchange = a7N
	}, this.a5U = function() {
		input.click()
	}, this.a7O = function(dG) {
		a7N(dG)
	}, this.a7Q = function(a7R) {
		var eD = a7R.name.split("."),
			a7S = eD[eD.length - 1].toLowerCase();
		"json" === a7S ? aX.a7U(a7R) : "gif" !== a7S && "jpg" !== a7S && "jpeg" !== a7S && "png" !== a7S || (au.ix.ph[au.yw()].name = eD[0], (a7S = new FileReader).onload = a7V, a7S.readAsDataURL(a7R))
	}, this.s9 = function(dG) {
		a7Z() && (a7Y(dG), dG.dataTransfer.dropEffect = "copy")
	}, this.sA = function(dG) {
		a7Z() && (a7Y(dG), a7P(dG.dataTransfer.files))
	}
}

function cE() {
	this.a7a = null, this.cl = function() {
		this.a7a = 10 !== iz ? null : new Uint32Array(f3)
	}, this.iK = function() {
		10 === iz && this.a7b()
	}, this.a7b = function() {
		for (var f6, target, a1S, a7a = this.a7a, qc = ic, tK = ev, dw = ib - 1; 0 <= dw; dw--) f6 = qc[dw], h9 <= f6 || (target = Math.max(er(tK[f6], 4), 2048), a1S = Math.max(a7.a1T(f6), 100), a7a[f6] += er(a1S * target, 1e4), a7a[f6] >
			target && (a7a[f6] = target))
	}, this.tQ = function(player, hh) {
		return hh > this.a7a[player] ? (hh = this.a7a[player], this.a7a[player] = 0) : this.a7a[player] -= hh, hh
	}
}

function cH() {
	function a7V(dG) {
		aX.iw = !0, aX.a7h(JSON.parse(dG.target.result)), aX.x6()
	}

	function a7n(df, min, max, a7w) {
		return "string" != typeof df || df.length < min ? a7w : df.length > max ? df.substring(0, max) : df
	}

	function a7i(e4, min, max) {
		return e4 = "number" == typeof e4 ? Math.floor(e4) : min, Math.min(Math.max(e4, min), max)
	}

	function a7l(e4, ot) {
		return "boolean" == typeof e4 ? e4 : ot
	}

	function a7p(e4, ez, max, a7y) {
		var dw, eD, p7;
		if (!Array.isArray(e4) || e4.length < 1) return null;
		for (eD = new(8 === a7y ? Uint8Array : Uint16Array)(ez), p7 = e4.length, dw = 0; dw < ez; dw++) eD[dw] = a7i(e4[dw % p7], 0, max);
		return eD
	}
	this.iw = !1, this.ix = null, this.oo = function() {
		this.iw = !1, this.ix = null
	}, this.a5Q = function() {
		this.ix.a6S && this.ix.a7c && (this.ix.a6S[0] = gE.vK[2].rH.a34()), tr(this.ix.a7d, 0, this.a7e(), this.ix.tu, !1, !1)
	}, this.a7e = function() {
		return [{
			name: this.ix.a7f ? a2.a5R() : this.ix.a7g[0],
			a5S: [0, 0, 0],
			a5T: 0
		}]
	}, this.a7U = function(a7R) {
		var a7T = new FileReader;
		a7T.onload = a7V, a7T.readAsText(a7R)
	}, this.a7h = function(vm) {
		this.ix = {}, this.ix.a5M = a7i(vm.numberPlayers, 1, 512), this.ix.a7j = a7i(vm.modeID, 0, 1), this.ix.pi = a7i(vm["gMap.mapID"], 0, au.a7k - 1), this.ix.a4w = a7i(vm.seedMap, 0, 16383), this.ix.a7d = a7i(vm.seedSpawn, 0, 16383), this.ix
			.tx = a7l(vm.selectableSpawn, !1), this.ix.a7f = a7l(vm.selectableName, !1), this.ix.a7c = a7l(vm.selectableColor, !1), au.ix.ph[au.yw()].name = this.ix.a7m = a7n(vm.mapName, 1, 25, "Custom Map"), this.ix.nA = function(e4) {
				var dw, ez;
				if (!Array.isArray(e4) || e4.length < 1) return [];
				for (ez = e4.length, dw = 0; dw < ez; dw++) e4[dw] = a7n(e4[dw], 0, 100, "");
				return e4
			}(vm.description), this.ix.pp = a7p(vm.playerX, this.ix.a5M, 4096, 16), this.ix.q0 = a7p(vm.playerY, this.ix.a5M, 4096, 16), this.ix.a7q = a7p(vm.playerTeam, this.ix.a5M, 8, 8), this.ix.iy = a7p(vm.playerStrength, this.ix.a5M, 5, 8),
			this.ix.a6S = function(e4, ez) {
				var dw, eD, p7;
				if (!Array.isArray(e4) || e4.length < 1) return null;
				for (eD = new Array(ez), p7 = e4.length, dw = 0; dw < ez; dw++) eD[dw] = a7p(e4[dw % p7], 3, 63, 8);
				return eD
			}(vm.playerColor, this.ix.a5M), this.ix.a7g = function(e4, ez) {
				var dw, eD, p7;
				if (!Array.isArray(e4) || e4.length < 1) return null;
				for (eD = new Array(ez), p7 = e4.length, dw = 0; dw < ez; dw++) eD[dw] = a7n(e4[dw % p7], 3, 26, "Bot");
				return eD
			}(vm.playerName, this.ix.a5M), this.ix.a7t = "string" == typeof vm.mapBase64 ? vm.mapBase64 : "", this.ix.a7f = this.ix.a7f || !this.ix.a7g, this.ix.tu = 0 === this.ix.a7j ? 7 : 2 === this.ix.a7j ? 9 : 6, this.ix.pp = this.ix.q0 ?
			this.ix.pp : null
	}, this.x6 = function() {
		! function(df) {
			var gS, gP, a7v = "data:image/png;base64,";
			if (df.length <= a7v.length) return;
			aX.ix.pi = 0, aX.ix.a4w = 0, au.bi(0, 0), df.substring(0, a7v.length) !== a7v && (df = a7v + df);
			return (gS = new Image).onload = function() {
				au.eZ = gS.width, au.ea = gS.height, 4096 < au.eZ || 4096 < au.ea || au.eZ < 10 || au.ea < 10 ? (au.bi(0, 0), alert("Image w & h must be between 10 and 4096.")) : (au.pi = au.yw(), au.a4s = 0, au.pK.width = au.eZ, au.pK
					.height = au.ea, au.pG.drawImage(gS, 0, 0), gP = au.pG.getImageData(0, 0, au.eZ, au.ea), au.pL = gP.data)
			}, gS.src = df, aX.ix.a7t = "", 1
		}(this.ix.a7t) && au.bi(this.ix.pi, this.ix.a4w)
	}, this.a7z = function() {
		for (var max = 0, ez = this.ix.a5M, dw = 0; dw < ez; dw++) this.ix.a7q[dw] > max && (max = this.ix.a7q[dw]);
		return Math.max(0, max - 1)
	}
}

function bq() {
	var a80, a81, size, hg, hh, id;

	function a82(player) {
		return player < h9 ? a80 * player : a80 * h9 + a81 * (player - h9)
	}
	this.cl = function() {
		a80 = h9 < 16 ? 12 : 8, a81 = 4;
		var ez = a82(f3);
		size = new Uint8Array(f3), hg = new Uint16Array(ez), hh = new Uint32Array(ez), id = new Uint16Array(ez)
	}, this.n6 = function(y0, a83) {
		var a84 = this.fd(y0, a83);
		this.fc(y0, a83, 0), a84 = ad.fl.mG(y0, a84), y0 === eu && (b4.ex[13] -= a84)
	}, this.clear = function(player) {
		size[player] = 0
	}, this.a7I = function(player, a83) {
		var ii, a83 = function(player, a83) {
			var dw, p7 = a82(player);
			for (dw = size[player] - 1; 0 <= dw; dw--)
				if (0 === id[p7 + dw] && hg[p7 + dw] === a83) return dw;
			return size[player]
		}(player, a83);
		a83 !== size[player] && (ii = hh[a82(player) + a83], this.ey(player, a83), this.hd(player, ii, f3))
	}, this.fp = function(player, a83) {
		for (var p7 = a82(player), dw = size[player] - 1; 0 <= dw; dw--)
			if (0 === id[p7 + dw] && hg[p7 + dw] === a83) return !0;
		return !1
	}, this.fo = function(player) {
		return player < h9 ? size[player] < a80 : size[player] < a81
	}, this.ee = function(player) {
		return size[player]
	}, this.ek = function(player, dw) {
		return hg[a82(player) + dw]
	}, this.ef = function(player, dw) {
		return id[a82(player) + dw]
	}, this.k0 = function(player, a86) {
		for (var p7 = a82(player), dw = size[player] - 1; 0 <= dw; dw--)
			if (id[p7 + dw] === a86) return dw;
		return -1
	}, this.el = function(player, dw) {
		return hh[a82(player) + dw]
	}, this.fd = function(player, a83) {
		for (var p7 = a82(player), dw = size[player] - 1; 0 <= dw; dw--)
			if (0 === id[p7 + dw] && hg[p7 + dw] === a83) return hh[p7 + dw];
		return 0
	}, this.a7H = function(player) {
		for (var p7 = a82(player), e4 = 0, dw = size[player] - 1; 0 <= dw; dw--) e4 += hh[p7 + dw];
		return e4
	}, this.a87 = function(player) {
		for (var p7 = a82(player), e4 = 0, dw = size[player] - 1; 0 <= dw; dw--) 0 === id[p7 + dw] && (e4 += hh[p7 + dw]);
		return e4
	}, this.a74 = function(player) {
		for (var p7 = a82(player), w9 = 0, dw = size[player] - 1; 0 <= dw; dw--) 0 < id[p7 + dw] && w9++;
		return w9
	}, this.fc = function(player, a83, ii) {
		for (var p7 = a82(player), dw = size[player] - 1; 0 <= dw; dw--) 0 === id[p7 + dw] && hg[p7 + dw] === a83 && (hh[p7 + dw] = ii)
	}, this.fO = function(player, dw, ii) {
		hh[a82(player) + dw] = ii
	}, this.hd = function(player, ii, a83) {
		var dw, p7 = a82(player);
		for (a83 === eu && b4.ex[player < h9 ? 6 : 5]++, dw = size[player] - 1; 0 <= dw; dw--)
			if (0 === id[p7 + dw] && hg[p7 + dw] === a83) return hh[p7 + dw] += ii, void(hh[p7 + dw] = hh[p7 + dw] > tM ? tM : hh[p7 + dw]);
		hg[p7 + size[player]] = a83, hh[p7 + size[player]] = ii, id[p7 + size[player]] = 0, size[player]++, player < h9 && (a83 === eu ? k.rD(player, 5) : player === eu && a8.vt(a83))
	}, this.a88 = function(player, ii, a86) {
		var p7 = a82(player);
		hA[player] = 2, hg[p7 + size[player]] = 0, hh[p7 + size[player]] = ii, id[p7 + size[player]] = a86, size[player]++
	}, this.ey = function(player, g0) {
		var hn, p7;
		if (0 !== size[player])
			for (p7 = a82(player), size[player]--, hn = g0; hn < size[player]; hn++) hg[p7 + hn] = hg[p7 + hn + 1], hh[p7 + hn] = hh[p7 + hn + 1], id[p7 + hn] = id[p7 + hn + 1]
	}, this.a7D = function(player) {
		for (var hn, p7, a7C = [], dw = ib - 1; 0 <= dw; dw--)
			for (p7 = a82(ic[dw]), hn = size[ic[dw]] - 1; 0 <= hn; hn--)
				if (0 === id[p7 + hn] && hg[p7 + hn] === player) {
					a7C.push(ic[dw]);
					break
				} return a7C
	}
}

function br() {
	var a89, a8A, a8B, a8C, a8D, a8E;
	this.cl = function() {
		a8B = a89 = 10, a8C = a8A = 10
	}, this.d4 = function() {
		a8E = 512, a8D = new Uint16Array(a8E);
		for (var dw = 0; dw < a8E; dw++) a8D[dw] = 100 + fg(er(25600 * dw, a8E - 4), 9)
	}, this.a0D = function() {
		return a8C
	}, this.iK = function() {
		if (--a8B <= 0 && (a8B = a89, function() {
				var dw, a8J, dY = ev[eu];
				for (j1 && !ha && 0 !== hA[0] && 0 === a1.j2[0].f8 && (ev[0] += er(fP[0], 6)), dw = ib - 1; 0 <= dw; dw--) a8J = er(a7.a1T(ic[dw]) * ev[ic[dw]], 1e4), ev[ic[dw]] += a8J < 1 ? 1 : a8J, a7.ew(ic[dw]);
				b4.ex[9] += ev[eu] - dY
			}(), --a8C <= 0)) {
			a8C = a8A;
			for (var dY = ev[eu], dw = ib - 1; 0 <= dw; dw--) ev[ic[dw]] += fP[ic[dw]], a7.ew(ic[dw]);
			b4.ex[8] += ev[eu] - dY
		}
	}, this.a1T = function(player) {
		var gV = a8D[er((a8E - 1) * fP[player], tm)],
			a8I = (b7.iY() < 1920 && (gV = gV < (a8I = er(100 * (13440 - 6 * b7.iY()), 1920)) ? a8I : gV), this.iN(player));
		return ev[player] > a8I && (gV -= er(2 * gV * (ev[player] - a8I), a8I)), gV < 0 ? 0 : 700 < gV ? 700 : gV
	}, this.iN = function(player) {
		player = 100 * fP[player];
		return tn < player ? tn : player
	}, this.ew = function(player) {
		var e4 = fP[player] * tL;
		ev[player] = Math.min(Math.min(ev[player], tM), e4)
	}, this.lq = function(player, lr) {
		ad.fl.mG(lr, aq.e7[0]), b4.mH(player, lr), a8.a8L(player, aq.e7[0] + aq.e7[1]), a8.mI(lr, aq.e7[0]), ad.fl.mv(player)
	}
}

function bs() {
	var a8M, a8N, a8O, a8P, a8Q, a8R, a8S, a8T, a8U, a8V, a8W, a8X, a8Y, a8Z, a8a, a8b, a8c, a8d, a8f, a8g, a8h, a8i, a8j, a8p, a8q, a8e = null,
		a8l = 0,
		a8m = new Float32Array(4),
		a8n = 0,
		a8o = !0;

	function a8s() {
		a8e.width = jv, a8e.height = gD, (a8f = a8e.getContext("2d", {
			alpha: !0
		})).textAlign = gJ, a8f.textBaseline = gI, a8f.imageSmoothingEnabled = !0
	}

	function a8t() {
		var dw, a8x;
		for (gH.font = g1 + Math.floor(100 * a8W) + g2, a8x = 80 / Math.floor(gH.measureText(ad.k3.k4(tM)).width), gH.font = g1 + 100 + g2, dw = f3 - 1; 0 <= dw; dw--) a8T[dw] = 100 / Math.floor(gH.measureText(k5[dw]).width), a8S[dw] = Math.min(a8x,
			a8T[dw])
	}

	function a8y(dw) {
		return !aR.k1.k2 || ev[dw] < 1e6 ? 1 : ev[dw] < 1e7 ? a8m[0] : a8m[Math.min(Math.floor(Math.log10(ev[dw])) - 6, 3)]
	}

	function a8w(gT) {
		a8d = !1, a8c = 1, a8a = a8b = 0, a8o ? (gT.textAlign = gJ, gT.textBaseline = gI) : gT.clearRect(0, 0, jv, gD);
		var jp, jq, dw, fontSize, jr, js = hF / hG,
			jt = hH / hG,
			ju = (jv + hF) / hG,
			jw = (gD + hH) / hG,
			a92 = 0 !== hA[eu] && a4.uf(eu);
		gT.imageSmoothingEnabled = !0;
		for (var hn = ib - 1; 0 <= hn; hn--) dw = ic[hn], (fontSize = a8Z * hG * a8y(dw) * a8S[dw] * a8Q[dw]) < a8Y || a8U <= fontSize || a8O[dw] + a8Q[dw] > js && a8O[dw] < ju && a8P[dw] + a8R[dw] > jt && a8P[dw] < jw && (jp = jv * (a8O[dw] + a8Q[
			dw] / 2 - js) / (ju - js), jq = gD * (a8P[dw] + a8R[dw] / 2 - jt) / (jw - jt) - .1 * fontSize, gT.font = xE[hB[dw]] + fontSize + g2, gT.fillStyle = function(fontSize, dw) {
			if (a8V <= fontSize && fontSize < a8U) return b8.a9F[a4.yW[dw]] + a9B(fontSize).toFixed(3) + ")";
			return b8.a9G[a4.yW[dw]]
		}(fontSize, dw), aR.k1.k2 ? gT.fillText(ad.k3.k4(ev[dw]), jp, jq) : a94(dw, fontSize, jp, jq, gT), a8d = !0, 0 < a8h[dw] ? function(jp, jq, fontSize, dw, gT) {
			0 === a0E[dw] ? b3.x8(a8g[dw]) ? (function(jp, jq, fontSize, player, m5, gT) {
				for (var v4 = .9 * fontSize / b3.g6, pt = jq - .5 * v4 * b3.g6 - .05 * fontSize, gR = (gT.globalAlpha = a9B(fontSize), a8y(player) * (aR.k1.k2 ? a8n : a8T[player])), ps = jp - .5 * fontSize / gR - .4 * fontSize - v4 *
						b3.g6, hx = 0; hx < 2; hx++) gT.setTransform(v4, 0, 0, v4, ps, pt), gT.drawImage(b3.uN[m5], 0, 0), ps = jp + .5 * fontSize / gR + .4 * fontSize;
				gT.globalAlpha = 1, gT.setTransform(1, 0, 0, 1, 0, 0)
			}(jp, jq, fontSize, dw, a8g[dw], gT), a96(jp, jq, fontSize, 0, 0, gT)) : b3.x7(a8g[dw]) ? (a9E(jp, jq, fontSize, a8g[dw], 0, gT), a96(jp, jq, fontSize, 0, 1, gT)) : (a9E(jp, jq, fontSize, a8g[dw], 1, gT), a96(jp, jq, fontSize,
				1, 0, gT)) : a9E(jp, jq, fontSize, a8g[dw], 0, gT)
		}(jp, jq, fontSize, dw, gT) : 0 === a0E[dw] && a96(jp, jq, fontSize, 0, 0, gT), a92 && (0 < a8h[dw + f3] || 0 < a8h[dw + 2 * f3] || 0 < a8h[dw + 3 * f3] || 0 < a8h[dw + 4 * f3]) && function(jp, jq, fontSize, dw, gT) {
			var iZ, w9 = -1;
			for (iZ = 4; 1 <= iZ; iZ--) 0 < a8h[dw + iZ * f3] && w9++;
			for (iZ = 1; iZ < 5; iZ++) 0 < a8h[dw + iZ * f3] && (! function(jp, jq, fontSize, iZ, dw, a99, dY, gT) {
				var v4 = .8 * fontSize / b3.g6,
					jp = jp - .5 * v4 * b3.g6 - .534 * a99 * fontSize,
					a99 = jq + 1.4 * v4 * b3.g6;
				gT.setTransform(v4, 0, 0, v4, jp, a99), gT.globalAlpha = a9B(fontSize), jq = 1 === iZ ? b3.uN[a8g[dw + f3]] : 2 === iZ ? i.uJ()[4].gS[dY < 255 ? 1 : 0] : (3 === iZ ? i.uJ()[5] : i.uJ()[6]).gS[0];
				gT.drawImage(jq, 0, 0), gT.globalAlpha = 1, gT.setTransform(1, 0, 0, 1, 0, 0)
			}(jp, jq, fontSize, iZ, dw, w9, a8h[dw + iZ * f3], gT), w9 -= 2)
		}(jp, jq, fontSize, dw, gT), (jr = a8W * fontSize) < a8Y || (gT.font = g1 + jr + g2, aR.k1.k2 ? a94(dw, jr, jp, jq + .78 * fontSize, gT) : (gT.fillText(ad.k3.k4(ev[dw]), jp, jq + .78 * fontSize), settings.showPlayerDensity && gT
			.fillText(utils.getDensity(dw), jp, jq + fontSize * 1.5))));
		gT.imageSmoothingEnabled = !1
	}

	function a94(dw, fontSize, jn, jo, gT) {
		gT.fillText(k5[dw], jn, jo), aR.k1.k2 && settings.showPlayerDensity && gT.fillText(utils.getDensity(dw), jn, jo + fontSize), dw < h9 && 2 !== hB[dw] || (dw = fontSize / a8T[dw], gT.fillRect(jn - .5 * dw, jo + ad.kp.t6 * fontSize, dw, Math
			.max(1, .1 * fontSize)))
	}

	function a96(jp, jq, fontSize, a99, a9A, gT) {
		var v4 = .95 * fontSize / a8j,
			jp = jp - .5 * v4 * a8i + .8 * a99 * fontSize,
			a99 = jq - 1.76 * v4 * a8j - .82 * a9A * fontSize;
		gT.setTransform(v4, 0, 0, v4, jp, a99), gT.globalAlpha = a9B(fontSize), gT.drawImage(a3.get(4), 0, 0), gT.globalAlpha = 1, gT.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a9E(jp, jq, fontSize, m5, a99, gT) {
		var v4 = 1.2 * fontSize / b3.g6,
			jp = jp - .5 * v4 * b3.g6 - .8 * a99 * fontSize,
			a99 = jq - 1.5 * v4 * b3.g6;
		gT.setTransform(v4, 0, 0, v4, jp, a99), gT.globalAlpha = a9B(fontSize), gT.drawImage(b3.uN[m5], 0, 0), gT.globalAlpha = 1, gT.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a9B(fontSize) {
		return a8V <= fontSize && fontSize < a8U ? 1 - (fontSize - a8V) / (a8U - a8V) : 1
	}

	function a9P(gR, g6) {
		return 1 + Math.floor(a8X * gR * g6)
	}

	function a9M(dw) {
		for (var left = a8O[dw], hn = a8O[dw] - i9[dw] - 1; 0 <= hn; hn--)
			if (!a9R(dw, --left, a8P[dw], a8R[dw])) {
				left++;
				break
			} var right = a8O[dw];
		for (hn = i8[dw] - a8O[dw] - a8Q[dw]; 0 <= hn; hn--)
			if (!a9R(dw, ++right + a8Q[dw] - 1, a8P[dw], a8R[dw])) {
				right--;
				break
			} var jn = Math.floor((left + right) / 2),
			top = a8P[dw];
		for (hn = a8P[dw] - iC[dw] - 1; 0 <= hn; hn--)
			if (!a9S(dw, jn, --top, a8Q[dw])) {
				top++;
				break
			} var bottom = a8P[dw];
		for (hn = iB[dw] - a8P[dw] - a8R[dw]; 0 <= hn; hn--)
			if (!a9S(dw, jn, ++bottom + a8R[dw] - 1, a8Q[dw])) {
				bottom--;
				break
			} var jo = Math.floor((top + bottom) / 2);
		a9J(dw, jn, jo, a8Q[dw], a8R[dw]) && (a8O[dw] = jn, a8P[dw] = jo)
	}

	function a9J(player, jn, jo, g6, i5) {
		f8 = Math.floor(.2 * g6);
		for (var f8, iZ = jn + g6 - 1; jn <= iZ; iZ--)
			if (!a9R(player, iZ, jo, i5)) return;
		for (iZ = jo + i5 - 1 - (f8 = (f8 = Math.floor(.25 * i5)) < 1 ? 1 : f8); jo + f8 <= iZ; iZ--)
			if (!a9S(player, jn, iZ, g6)) return;
		return 1
	}

	function a9R(player, jn, jo, i5) {
		return a4.qL(player, 4 * (jo * au.eZ + jn)) && a4.qL(player, 4 * ((jo + i5 - 1) * au.eZ + jn))
	}

	function a9S(player, jn, jo, g6) {
		return a4.qL(player, 4 * (jo * au.eZ + jn)) && a4.qL(player, 4 * (jo * au.eZ + jn + g6 - 1))
	}
	this.cl = function() {
		if (a8d = !1, a8Z = .88, a8W = .5, a8X = 1.8, a8U = Math.floor(.5 * xJ), a8V = Math.floor(.2 * a8U), a8Y = aR.k1.a8r < 4 ? 1 + aR.k1.a8r : 2 * (aR.k1.a8r - 1), a8N = a8M = 0, a8O = new Uint16Array(f3), a8P = new Uint16Array(f3), a8Q =
			new Uint16Array(f3), a8R = new Uint16Array(f3), a8S = new Float32Array(f3), a8T = new Float32Array(f3), a8g = new Uint8Array(2 * f3), a8h = new Uint8Array(5 * f3), a8p = new Uint8Array(f3), a8q = new Uint8Array(f3), a8o || (a8e =
				a8e || document.createElement("canvas"), a8s()), a8b = a8a = 0, a8c = 1, aR.k1.k2) {
			var dw, a8x;
			for (a8t(), gH.font = g1 + Math.floor(100) + g2, a8x = 100 / Math.floor(gH.measureText("900 000").width), dw = f3 - 1; 0 <= dw; dw--) a8S[dw] = Math.min(a8x, 2 * a8T[dw]);
			a8n = a8x, a8m[0] = 100 / (a8x * Math.floor(gH.measureText("5 000 000").width)), a8m[1] = 100 / (a8x * Math.floor(gH.measureText("50 000 000").width)), a8m[2] = 100 / (a8x * Math.floor(gH.measureText("500 000 000").width)), a8m[3] =
				100 / (a8x * Math.floor(gH.measureText("1 000 000 000").width))
		} else a8t();
		! function() {
			var dw;
			for (dw = f3 - 1; 0 <= dw; dw--) fP[dw] < 12 ? (a8O[dw] = i9[dw] + 1, a8P[dw] = iC[dw] + 1, a8Q[dw] = 1, a8R[dw] = 1) : (a8O[dw] = i9[dw], a8P[dw] = iC[dw] + 1, a8Q[dw] = 4, a8R[dw] = 2);
			if (kQ)
				for (dw = 0; dw < h9; dw++) a8Q[dw] = 0;
			a8i = a3.get(4).width, a8j = a3.get(4).height
		}()
	}, this.a8L = function(f6, wC) {
		wC > 18 * fP[f6] ? (a8q[f6] = 6, a4.yW[f6] = 2 + a4.yW[f6] % 2) : (a8p[f6] = 4, (a4.yW[f6] < 2 || 3 < a4.yW[f6]) && (a4.yW[f6] = 6 + a4.yW[f6] % 2))
	}, this.mI = function(f6, wC) {
		wC > 6 * fP[f6] ? (a8q[f6] = 6, a4.yW[f6] = 4 + a4.yW[f6] % 2) : (a8p[f6] = 4, (a4.yW[f6] < 4 || 5 < a4.yW[f6]) && (a4.yW[f6] = 8 + a4.yW[f6] % 2))
	}, this.resize = function() {
		a8o || (a8s(), a8w(a8f))
	}, this.ti = function() {
		for (var dw = 0; dw < h9; dw++) i8[dw] - i9[dw] != 3 || iB[dw] - iC[dw] != 3 ? (a8O[dw] = i9[dw] + (i8[dw] !== i9[dw] ? 1 : 0), a8P[dw] = iC[dw], a8Q[dw] = 1, a8R[dw] = 1) : (a8O[dw] = i9[dw], a8P[dw] = iC[dw] + 1, a8Q[dw] = 4, a8R[dw] =
			2)
	}, this.n7 = function(player, g0, a8z) {
		player += g0 * f3;
		if (0 === g0) return a8g[player] === a8z && 0 < a8h[player] ? void(a8h[player] = 0) : (a8g[player] = a8z, void(a8h[player] = b3.x8(a8z) ? 255 : 64));
		1 === g0 ? (a8h[player] = 64, a8g[player] = a8z) : a8h[player] = a8z
	}, this.gG = function() {
		a8o ? a8w(gH) : a8d && (1 !== a8c ? (gH.imageSmoothingEnabled = !0, gH.setTransform(a8c, 0, 0, a8c, 0, 0), gH.drawImage(a8e, -a8a / a8c, -a8b / a8c), gH.setTransform(1, 0, 0, 1, 0, 0)) : (gH.imageSmoothingEnabled = !1, gH.drawImage(a8e, -
			a8a, -a8b)))
	}, this.zP = function(h1, h4) {
		a8a += h1, a8b += h4
	}, this.s1 = function(h1, h4) {
		a8.zP(h1, h4)
	}, this.zoom = function(fw, gA, gB) {
		a8c *= fw, a8a = (a8a + gA) * fw - gA, a8b = (a8b + gB) * fw - gB
	}, this.jJ = function(wL) {
		return !a8o && (wL ? ++a8l % aR.a0k[aR.k1.a90] == 0 : b7.iY() % aR.a0k[aR.k1.a90] == 0) && (a8l = 0, a8w(a8f), !0)
	}, this.jy = function(dw) {
		return a8y(dw) * a8S[dw]
	}, this.a91 = function(player) {
		return a8S[player]
	}, this.iK = function() {
		4 <= ++a8N && ! function() {
			var dw, hn, hx;
			for (a8N = 0, hx = 4; 1 <= hx; hx--)
				for (hn = ib - 1; 0 <= hn; hn--) dw = ic[hn] + hx * f3, 0 < a8h[dw] && a8h[dw] < 255 && a8h[dw]--;
			if (2 !== jK)
				for (hn = ib - 1; 0 <= hn; hn--) dw = ic[hn], 0 < a8h[dw] && a8h[dw] < 255 && a8h[dw]--
		}();
		for (var ez = Math.floor(.1 * ib), dw = a8M + (ez = ib < (ez = ez < 8 ? 8 : ez) ? ib : ez) - 1; a8M <= dw; dw--) ! function(dw) {
			var gR = a8y(dw) * a8S[dw];
			0 < a8Q[dw] && a9J(dw, a8O[dw], a8P[dw], a8Q[dw], a8R[dw]) ? ! function(dw) {
				for (var jn, jo, g6, i5, gu = !1, hx = 0; hx < 8; hx++) {
					if (g6 = a8Q[dw] + 2, i5 = a8R[dw] + 2, g6 > i8[dw] - i9[dw] + 1 || i5 > iB[dw] - iC[dw] + 1) return gu;
					if (jn = a8O[dw] - 1, jo = a8P[dw] - 1, !a9J(dw, jn, jo, g6, i5)) return gu;
					a8O[dw] = jn, a8P[dw] = jo, a8Q[dw] = g6, a8R[dw] = i5, gu = !0
				}
				return gu
			}(dw) && function(dw, gR) {
				for (var jn, jo, g6, i5, gu = !1, a2X = a8Q[dw], kb = 1 + Math.floor(.02 * a2X), hx = 1; hx < 5; hx++) {
					if ((g6 = a2X + hx * kb) > i8[dw] - i9[dw] + 1) return gu;
					if ((i5 = a9P(gR, g6)) > iB[dw] - iC[dw] + 1) return gu;
					jn = i9[dw] + Math.floor(Math.random() * (i8[dw] - i9[dw] + 2 - g6)), jo = iC[dw] + Math.floor(Math.random() * (iB[dw] - iC[dw] + 2 - i5)), a9J(dw, jn, jo, g6, i5) && (a8O[dw] = jn, a8P[dw] = jo, a8Q[dw] = g6, a8R[
						dw] = i5, gu = !0)
				}
				return gu
			}(dw, gR) && a9M(dw) : ! function(dw, gR) {
				var i5, jn = a8O[dw] + 1,
					jo = a8P[dw] + 1,
					g6 = a8Q[dw] - 2;
				for (;;) {
					if (g6 < 1) {
						a8Q[dw] = 0;
						break
					}
					if (i5 = a9P(gR, g6), a9J(dw, jn, jo, g6, i5)) return a8O[dw] = jn, a8P[dw] = jo, a8Q[dw] = g6, a8R[dw] = i5, 1;
					jn++, jo++, g6 -= 2
				}
				return
			}(dw, gR) ? function(dw, gR) {
				var jn, jo, g6, i5, hx, kg, hp = i8[dw] - i9[dw] + 1,
					a9Q = Math.floor(.02 * hp);
				for (kg = -6 * (a9Q = a9Q < 1 ? 1 : a9Q), hx = hp; kg <= hx; hx -= a9Q)
					if (i5 = a9P(gR, g6 = 0 < hx ? hx : 1), jn = i9[dw] + Math.floor(Math.random() * (i8[dw] - i9[dw] + 2 - g6)), jo = iC[dw] + Math.floor(Math.random() * (iB[dw] - iC[dw] + 2 - i5)), a9J(dw, jn, jo, g6, i5)) return a8O[
						dw] = jn, a8P[dw] = jo, a8Q[dw] = g6, a8R[dw] = i5
			}(dw, gR) : a9M(dw)
		}(ic[dw % ib]);
		a8M = (a8M + ez) % ib
	}, this.jF = function() {
		var dw, f6, gf, gg;
		if (b7.iY() % 4 == 1)
			for (dw = ib - 1; 0 <= dw; dw--) f6 = ic[dw], a4.yW[f6] < 2 || ((gf = Math.max(a8p[f6] - 1, 0)) === (gg = Math.max(a8q[f6] - 1, 0)) ? 0 === gf && (a4.yW[f6] %= 2) : 0 === gg && a4.yW[f6] < 6 && (a4.yW[f6] += 4), a8p[f6] = gf, a8q[
				f6] = gg)
	}, this.vt = function(player) {
		var dw = player + 2 * f3,
			dY = a8h[dw];
		return 0 < dY && (k.rC(50, player), a8h[dw] = 0, 255 === dY)
	}, this.ul = function(player) {
		return 255 === a8h[player + 2 * f3]
	}
}

function bt() {
	var fx, a9T;
	this.cl = function() {
		fx = "Abbasid Caliphate;Aceh s;Achaemenid Z;Afsharid z;Aghlabid Emirate;Ahom z;Akkadian Z;Aksumite Z;Akwamu;Alaouite z;Almohad Caliphate;Almoravid z;Angevin Z;Aq Qoyunlu;Armenian Z;Assyria;Ashanti Z;Austrian Z;Austria-Hungary;Ayyubid z;Aztec Z;Aulikara Z;Babylonian Z;Balhae;Banten s;S Banjar;Bamana Z;Bengal s;Benin Z;Kadamba z;Bornu Z;E Brazil;Britannic Z;British Z;British Raj;Bruneian Z;Bukhara Z;Burgundian State;Buyid z;Byzantine Z;Caliphate of Córdoba;Cao Wei;Carthaginian Z;Cebu Rajahnate;Chagatai Khanate;Chalukya z;Chauhan z;Chavín Z;Chenla;Chera z;Chola z;Comanche Z;Congo Free State;Crimean Khanate;Dacian Z;Delhi s;Demak s;Durrani Z;Dutch Z;Egyptian Z;Elamite Z;Exarchate of Africa;Abyssinia;Fatimid Caliphate;First French Z;Frankish Z;Funan;Gallic Z;Gaza Z;Republic of Genoa;German Z;Ghana Z;Ghaznavid z;Ghurid z;Goguryeo;Goryeo;Gorkha Z;Göktürk Khaganate;Golden Horde;S Gowa;Seljuq Z;Gupta Z;Hafsid Y;Han z;Hanseatic League;E Harsha;Hephthalite Z;Hittite Z;Holy Roman Z;Hotak z;Hoysala Z;Hunnic Z;Husainid z;Idrisid z;Ilkhanate;K Israel;K Judah;Inca Z;Italian Z;E Japan;Jin z;Johor Z;Jolof Z;Joseon;Kaabu Z;Kachari Y;Kalmar Union;Kanem Z;Kanva z;Kara-Khanid Khanate;Kazakh Khanate;Khazar Khaganate;Khmer Z;Khilji z;Khwarazmian z;Kievan Rus';Konbaung z;Kong Z;Korean Z;Kushan Z;K Kush;Lakota;Latin Z;Later Lê z;Liao z;Lodi s;Khmer Z;Macedonian Z;Majapahit Z;Mali Z;Malacca Z;Mamluk s;Manchukuo;Maratha Z;Marinid z;Massina Z;Mataram s;Mauretania;Mauryan Z;Median Z;Mlechchha z;Ming z;Mitanni Z;Mongol Z;Mughal Z;Nanda Z;Nguyễn z;North Sea Z;E Nicaea;Numidia;Omani Z;Ottoman Z;Oyo Z;Pagan Z;Pahlavi z;Pala Z;Palmyrene Z;Parthian Z;Pontic Z;Portuguese Z;K Prussia;Ptolemaic Z;Qajar z;Qara Qoyunlu;Qin z;Qing z;Ramnad Sethupathis;Rashidun Caliphate;Rashtrakuta z;Roman Z;Rouran Khaganate;Rozwi Z;Rustamid z;Russian Z;Tsardom of Russia;Saadi z;Safavid z;Saffarid z;Sassanid z;Satavahana z;Samanid Z;Soviet Union;Saudeleur z;Duchy of Savoy;Seleucid Z;Serbian Z;Shu Han;Shang z;Siam Z;Sikh Z;Singhasari;Sokoto Caliphate;Song z;Songhai Z;Spanish Z;Srivijaya Z;Sui z;K Mysore;Shunga Z;S Sulu;Sumer;Sur Z;Swedish Z;Tahirid z;Tang z;Tây Sơn z;S Ternate;E Thessalonica;German Reich;Tibetan Z;Tondo z;S Tidore;Timurid Z;K Tlemcen;E Trebizond;Toltec Z;Toungoo z;Toucouleur Z;Tu'i Tonga Z;Turgesh Khaganate;Umayyad Caliphate;Uyunid Emirate;Uyghur Khaganate;Uzbek Khanate;Vandal Y;Vijayanagara Z;Republic of Venice;Wari Z;Wassoulou Z;Wattasids;Western Roman Z;Eastern Wu;Western Xia z;Xin z;Yuan z;Zand z;Zhou z;Zulu Z;Yugoslavia;Kosovo;Sikkim;Kanem–Bornu Z;Wadai Z;Ethiopian Z;Rozvi Z;Sasanian Z;E Vietnam;Shilluk Y;K Aksum;Gwiriko Y;Toro Y;Malindi Y;K Loango;K Mapungubwe;Ryukyu Y;K Cyprus;K Jerusalem;Garhwal Y;K Nepal;K Cambodia;Champa Y;Hanthawaddy Y;Phayao Y;K Sardinia;K Sicily;K Gwynedd;K Scotland;K Desmond;K Poland;K Hungary;K Croatia;K Bohemia;Albanian Y;K Georgia;K Portugal;Khanate of Sibir;K Romania;Cossack Hetmanate;Duchy of Bouillon;K Ireland;Lordship of Ireland;K Italy;Republic of Pisa;Idrisid z;Almoravid z;Almohad Caliphate;Marinid z;Wattasid z;Saadian z;Republic of Salé;Rif Republic;K Kush;Makuria;Alodia;Ayyubid z;Mamluk s;Egypt Eyalet;K Fazughli;S Sennar;S Darfur;Mahdist State;S Egypt;K Egypt;Emirate of Cyrenaica;K Libya;Republic of Egypt;Republic of the Sudan;United Arab Republic;Libyan Arab Republic;Zirid z;Hafsid z;K Kuku;Regency of Algiers;Gurunsi;Liptako;Tenkodogo;Wogodogo;Yatenga;Bilanga;Bilayanga;Bongandini;Con;Macakoali;Piela;Nungu;K Sine;K Saloum;K Baol;K Cayor;K Waalo;Bundu;Bonoman;Gyaaman;Denkyira;Mankessim Y;K Dahomey;Oyo Z;K Nri;Aro Confederacy;Kwararafa;Biafra;Buganda;Bunyoro;Ankole;Busoga;Tanganyika;Kuba Y;K Luba;K Lunda;Yeke Y;K Ndongo;Kasanje Y;K Matamba;Mbunda Y;Chokwe Y;Kazembe Y;K Butua;Ndebele Y;Mthethwa Z;Bophuthatswana;Ciskei;Transkei;Venda;Rhodesia;Kart z;Nogai Horde;Khanate of Bukhara;Khanate of Khiva;Khamag Mongol;Northern Fujiwara;Kamakura Shogunate;Ashikaga Shogunate;Jaxa;Republic of Ezo;Jiangxi Soviet;Hunan Soviet;Guangzhou Commune;Gojoseon;Alaiye;Beylik of Bafra;Kara Koyunlu;Kars Republic;K Iraq;Arab Federation;Kar-Kiya z;Baduspanids;Marashiyan z;Afrasiyab z;Mihrabanid z;Safavid Iran;Sheikhdom of Kuwait;Bani Khalid Emirate;Emirate of Diriyah;Emirate of Najd;Muscat and Oman;Emirate of Riyadh;S Najd;K Hejaz;Fadhli s;Emirate of Beihan;Emirate of Dhala;S Lahej;Republic of Kuwait;K Cochin;Jaffna Y;Laur Y;Pandya z;Jaunpur s;Jaintia Y;Hyderabad State;Travancore;Udaipur State;Manikya z;Lan Xang;K Vientiane;K Champasak;Lao Issara;K Laos;Pyu States;Ava;Mon Ys;Pegu;K Mrauk U;Taungoo z;Shan States;Arakan;Raktamaritika;Singhanavati;Dvaravati;Ngoenyang;Hariphunchai;Tambralinga;Lavo Y;Langkasuka;Sukhothai Y;S Singora;Ayutthaya Y;Thonburi Y;Lan Na;Pattani Y;Jambi s;Palembang s;S Deli;S Langkat;S Serdang;S Cirebon;K Pajang;K Bali;Bima s;K Larantuka;K Banggai;Luwu;S Bone;Caucasian Albania;Kabardia;Circassia;K Abkhazia;Elisu s;Avar Khanate;Caucasian Imamate;K Imereti;K Kartli;K Kakheti;Crown of Aragon;Emirate of Granada;K Majorca;Crown of Castile;K Haiti;Cocollán;Zapotec Civilization;Mosquito Y;Somoza Regime;Iroquois Confederacy;Cherokee Nation;Vermont Republic;State of Muskogee;K Alo;K Sigave;K Fiji;K Nauru;K Chile;Muisca Confederation;El Stronato;K Chimor;Jungle Republic;Liga Federal;Supreme Junta;Weimar Republic;K Bavaria;Bremen;Frankfurt;Hamburg;K Hanover;Holstein;Lippe;Nassau;Oldenburg;Pomerania;Reuss;Saxe-Altenburg;Saxony;Schleswig;Waldeck;Württemberg;Helvetic Republic;Republic of Florence;Duchy of Urbino;Republic of Cospaia;Duchy of Lucca;Duchy of Mantua;Duchy of Milan;Papal States"
			.split(";");
		var dw, hn, a9U = ["K ", " Y", "E ", " Z", " z", " s", "S "],
			a9V = ["Kingdom of ", " Kingdom", "Empire of ", " Empire", " Dynasty", " Sultanate", "Sultanate of "];
		for (a9T =
			"Pestilent Dominion;Wretched Realm;Damned Province;Corrupt Zone;Cursed Territory;Blight Nation;Haunted Expanse;Malevolent State;Ruined Empire;Contaminated Land;Epidemic Domain;Forsaken District;Abandoned Wasteland;Necrotic Enclave;Tainted Domain;Decayed Principality;Infested Region;Malignant Territory;Toxic Dominion;Ravaged Sector;Ghostly Realm;Plagued Commonwealth;Afflicted State;Desolate Nation;Apocalyptic Zone;Radiated Province;Deathly District;Pestilence Haven;Doom Territory;Malefic Expanse;Abandoned State;Cursed Haven;Corroded Zone;Hauntland;Noxious Nation;Infected Enclave;Ruinous Domain;Wasteland Woe;Rotten Principality;Voided Land;Vile Dominion;Catastrophic Region;Eerie Expanse;Desolation State;Forsaken Outpost;Contagion District;Damaged Province;Abhorrent Sector;Accursed Nation;Doomstruck Land;Radiant Ruin;Deathly Enclave;Malefic Dominion;Plague District;Infected Haven;Corrupt State;Pestilent Territory;Razed Realm;Haunted Wasteland;Toxic Sector;Cursed Dominion;Decaying Province;Forsaken Enclave;Ruinous Region;Malignant Haven;Infested State;Ghostly Nation;Tainted Territory;Damned District;Radiated Dominion;Desolate Expanse;Apocalyptic Land;Death Zone;Wretched State;Malevolent Haven;Plagued Nation;Noxious Domain;Voided Territory;Eerie Sector;Accursed Province;Necrotic District;Doom Haven;Haunt Realm;Rotten Nation;Forsaken Territory;Infected State;Abhorrent Expanse;Malignant Land;Toxic Dominion;Ruined District;Ghostland;Cursed Sector;Radiant Nation"
			.split(";"), dw = fx.length - 1; 0 <= dw; dw--)
			for (hn = a9U.length - 1; 0 <= hn; hn--) fx[dw] = fx[dw].replace(a9U[hn], a9V[hn]);
		if (settings.realisticNames) fx = realisticNames;
	}, this.bi = function() {
		var dw;
		if (aX.iw && aX.ix.a7g)
			for (dw = h9; dw < f3; dw++) k5[dw] = aX.ix.a7g[dw % pu];
		else(9 === iz ? function() {
			var dw, gV = aF.random(),
				ez = fx.length,
				p7 = h9 + aA.a9b;
			for (dw = p7 - 1; h9 <= dw; dw--) k5[dw] = fx[(dw + gV) % ez];
			for (ez = a9T.length, dw = p7; dw < f3; dw++) k5[dw] = a9T[dw % ez]
		} : j1 ? function() {
			var dw, gV = aF.random();
			for (dw = h9; dw < f3; dw++) k5[dw] = fx[(dw + gV) % f3]
		} : function() {
			var dw, ez = fx.length,
				gV = aF.random();
			for (dw = h9; dw < f3; dw++) k5[dw] = fx[(dw + gV) % ez]
		})()
	}, this.u3 = function() {
		var dw, ez, p7, gV;
		if (!j1) {
			for (wQ = new Array(h9), ez = h9, dw = 0; dw < ez; dw++) wQ[dw] = k5[dw];
			if (aR.k1.wP) {
				for (p7 = fx.length, gV = aF.a9a(), dw = 0; dw < ez; dw++) k5[dw] = fx[(dw + gV) % p7];
				k5[eu] = wQ[eu]
			}
		}
	}
}

function cF() {
	this.a9c = [], this.a9d = [], this.cl = function() {
		this.a9c = [], this.a9d = []
	}, this.iK = function() {
		0 <= this.a9c.length && this.a9e(this.a9c), 0 <= this.a9d.length && this.a9e(this.a9d)
	}, this.a9e = function(eD) {
		for (var hx = -1, dw = eD.length - 1; 0 <= dw; dw--)
			if (eD[dw].dX--, eD[dw].dX <= 0) {
				hx = dw;
				break
			} for (dw = hx; 0 <= dw; dw--) eD.shift()
	}, this.uX = function(id, qc, a9f) {
		return this.a9g(this.a9c, id, qc, a9f)
	}, this.a9h = function(id, qc, a9f) {
		return this.a9g(this.a9d, id, qc, a9f)
	}, this.a9g = function(eD, id, qc, a9f) {
		return ! function(eD, id, qc) {
			var dw, pb;
			for (dw = qc.length - 1; 0 <= dw; dw--)
				for (pb = eD.length - 1; 0 <= pb; pb--)
					if (eD[pb].player === qc[dw] && id === eD[pb].id) return 1;
			return
		}(eD, id, qc) && (a9f && function(eD, id, qc) {
			var dw;
			for (dw = qc.length - 1; 0 <= dw; dw--) eD.push({
				player: qc[dw],
				id: id,
				dX: 384
			})
		}(eD, id, qc), !0)
	}
}

function u0(qc) {
	var dw;
	for (k5 = new Array(f3), wQ = k5, hA = new Uint8Array(f3), i9 = new Uint16Array(f3), iC = new Uint16Array(f3), i8 = new Uint16Array(f3), iB = new Uint16Array(f3), fP = new Uint32Array(f3), q9 = new Uint32Array(f3), ev = new Uint32Array(f3),
		donationsTracker.reset(), f0 = new Array(f3), fH = new Array(f3), fI = new Array(f3), fL = new Array(f3), hB = new Uint8Array(f3), dw = qc.length - 1; 0 <= dw; dw--) k5[dw] = qc[dw].name, hB[dw] = qc[dw].a5T
}

function cD() {
	this.wZ = 0, this.qc = null, this.cl = function() {
		this.wZ = 0, this.qc = []
	}, this.a9k = function(player) {
		this.qc.push(player), rN++, hB[player] = 2, player === eu && (u.show(!1, !1), t.a1H()), a8.vt(player)
	}, this.a7M = function(player) {
		var dw, qc;
		if (2 !== hB[player])
			for (dw = (qc = this.qc).length - 1; 0 <= dw; dw--)
				if (qc[dw] === player) return void qc.splice(dw, 1)
	}, this.iK = function() {
		j1 || (30 === this.wZ && 2140 <= b7.iY() && this.a9l(), this.wZ = (this.wZ + 1) % 60)
	}, this.a9l = function() {
		for (var qc = this.qc, dw = qc.length - 1; 0 <= dw; dw--) ! function(player, hE) {
			!a6.fo(player) || (hE = Math.max(Math.min(100, ev[player]), er(hE * ev[player], 100))) < 100 || (0 === fH[player].length ? !ap.iJ.iK(player) && ha && iM(player, hE, 0, 0) : (ha ? iX : ih)(player, hE))
		}(qc[dw], 12)
	}
}

function u4() {
	for (ib = 0, dw = f3 - 1; 0 <= dw; dw--) 0 !== hA[dw] && ib++;
	ic = new Uint16Array(ib);
	for (var ez = 0, dw = 0; dw < f3; dw++) 0 !== hA[dw] && (ic[ez++] = dw)
}

function jE() {
	a9n(), a9o()
}

function a9o() {
	for (var dw = ib - 1; 0 <= dw; dw--) 0 === hA[ic[dw]] && a9p(dw)
}

function a9p(dw) {
	ib--;
	for (var hn = dw; hn < ib; hn++) ic[hn] = ic[hn + 1]
}

function a9n() {
	for (var gj, dw = ib - 1; 0 <= dw; dw--) fP[ic[dw]] <= er(q9[ic[dw]], 4) ? fP[ic[dw]] <= 1e3 && (2 !== hA[ic[dw]] || 0 === fP[ic[dw]]) && a76(ic[dw]) : fP[ic[dw]] >= q9[ic[dw]] ? q9[ic[dw]] = fP[ic[dw]] : (gj = er(q9[ic[dw]] - fP[ic[dw]], 1e3),
		q9[ic[dw]] -= gj < 1 ? 1 : gj)
}

function mV() {
	for (var a6x = 0, dw = ib - 1; 0 <= dw; dw--) a6x += ev[ic[dw]];
	return a6x % 4096
}

function bu() {
	var a9q;
	this.j4 = null, this.cl = function() {
		a9q = [], 9 === iz && this.a9r()
	}, this.a9r = function() {
		var dw, a9s = [50, 74, 95, 150, 190, 333];
		if (this.a9b = 0, this.j4 = [0, 0, 0, 0, 0, 0], h9 <= a9s[0]) this.j4[0] = Math.max(an.fe(h9 * (512 - h9), a9s[0]), 13), iv = this.j4[0];
		else
			for (iv = f3 - h9, dw = 1; dw < 6; dw++)
				if (h9 <= a9s[dw]) {
					this.j4[dw - 1] = 512 - a9s[dw - 1] - er((512 - a9s[dw - 1]) * (h9 - a9s[dw - 1]), a9s[dw] - a9s[dw - 1]), this.j4[dw] = 512 - h9 - this.j4[dw - 1];
					break
				} pu = h9 + iv
	}, this.a7L = function(player) {
		a9q.push({
			player: player,
			w9: 14 + aF.hq(20)
		})
	}, this.iK = function() {
		var dw;
		if (9 === iz)
			for (dw = a9q.length - 1; 0 <= dw; dw--) --a9q[dw].w9 <= 0 && (a8.n7(a9q[dw].player, 0, 46), a9q.splice(dw))
	}
}

function cb() {
	function a9z(dw) {
		return dw >= au.aA4() && dw !== au.yw()
	}

	function a9x(dw) {
		return 1 !== dw && !a9z(dw) && dw !== au.yw()
	}
	this.eZ = 0, this.ea = 0, this.pK = null, this.pG = null, this.pH = null, this.pL = null, this.pi = 0, this.a4s = 0, this.pI = !1, this.a7k = 20, this.pJ = new a9u, this.ix = new a9v, this.cl = function() {
		this.ix.cl()
	}, this.bi = function(a9w, a4w) {
		((a9w %= this.a7k) !== this.pi || a9x(this.pi) && a4w !== this.a4s) && (this.pI = !1, this.pJ.a52(), aF.tz(a9w), this.pi = a9w, this.a4s = a4w, a9x(a9w) && (au.ix.ph[a9w].a9y = a4w), a9z(this.pi) ? aA0() : (a9w = au.ix.ph[this.pi], this
			.eZ = a9w.g6, this.ea = a9w.i5, aF.tz(a9w.a9y), aC.bi([this.eZ, this.ea, a9w.k9, a9w.k6]), aA1(), aB.aA2(), aC.aA3()))
	}, this.aA4 = function() {
		return 10
	}, this.aA5 = function(dw) {
		return 3 === dw || 7 === dw || 9 === dw || dw === this.yw()
	}, this.aA6 = function(dw) {
		return 2 === dw || 7 === dw || 9 === dw
	}, this.aA7 = function(dw) {
		return 1 === dw
	}, this.yw = function() {
		return this.a7k
	}
}

function a9u() {
	function aAH() {
		au.pJ.iK()
	}

	function aAM(f6, aAL) {
		0 < aAL && (au.pL[f6] += aAL, au.pL[f6 + 1] += aAL, au.pL[f6 + 2] += aAL)
	}

	function uh(f6) {
		return au.pL[f6 + 2] > au.pL[f6] && au.pL[f6 + 2] > au.pL[f6 + 1]
	}
	this.zc = -1, this.dS = 0, this.aA8 = 0, this.aA9 = 8, this.aAA = 32, this.aAB = 8, this.aAC = 32, this.aAD = [0, 0], this.yW = [0, 0, 0, 0], this.hS = null, this.aAE = !0, this.aAF = !1, this.a52 = function() {
		-1 !== this.zc && clearTimeout(this.zc), this.zc = -1, this.hS = null, aC.aA3()
	}, this.cl = function() {
		7 === x.sb() || this.aAF || (this.aAE = !0, this.dS = 0, this.aA8 = 1, this.aAD = [au.ix.ph[au.pi].pg[0], au.ix.ph[au.pi].pj[0]], this.yW = [au.ix.ph[au.pi].aAG[3], au.ix.ph[au.pi].aAG[4], au.ix.ph[au.pi].aAG[5], au.ix.ph[au.pi].aAG[6]],
			this.aA9 = au.ix.ph[au.pi].aAG[7], this.aAA = au.ix.ph[au.pi].aAG[8], this.aAB = au.ix.ph[au.pi].aAG[9], this.aAC = au.ix.ph[au.pi].aAG[10], this.aAE ? this.zc = setTimeout(aAH, 16) : this.iK())
	}, this.iK = function() {
		if (8 === x.sb() && f.kN()) this.zc = setTimeout(aAH, 16);
		else {
			if (0 === this.dS) {
				var a9y = aF.a9a();
				if (aF.tz(au.ix.ph[au.pi].aAG[2]), aC.bi([au.eZ, au.ea, au.ix.ph[au.pi].aAG[0], au.ix.ph[au.pi].aAG[1]]), aF.tz(a9y), this.hS = aC.aAI(), this.dS++, this.aAE) return void(this.zc = setTimeout(aAH, 16))
			}
			for (var f6, gl, a9y = this.aAE ? 10 : 1e6, a9y = au.ea - this.aA8 - 1 < a9y ? au.ea - this.aA8 - 1 : a9y, q6 = this.aA8 + a9y, jo = this.aA8; jo < q6; jo++)
				for (var jn = 1; jn < au.eZ - 1; jn++) uh(f6 = 4 * (gl = jn + jo * au.eZ)) ? this.aAJ(f6, gl, 1) : (this.aAJ(f6, gl, 0), function(jn, jo, f6) {
					return 1 < jn && uh(f6 - 4) || jn < au.eZ - 2 && uh(f6 + 4) || 1 < jo && uh(f6 - 4 * au.eZ) || jo < au.ea - 2 && uh(f6 + 4 * au.eZ)
				}(jn, jo, f6) && this.aAK(jn, jo));
			this.aA8 = q6, this.aA8 >= au.ea - 1 ? (au.pG.putImageData(au.pH, 0, 0, 1, 1, au.eZ - 2, au.ea - 2), b7.d6 = !0, this.a52()) : this.aAE && (this.zc = setTimeout(aAH, 16))
		}
	}, this.aAJ = function(f6, gl, g0) {
		aAM(f6, Math.floor(this.aAD[g0] + this.yW[g0] * this.hS[gl] / 1e4) - au.pL[f6])
	}, this.aAN = function(f6, gV, aAO, g0, yW) {
		aAM(f6, Math.floor(this.aAD[g0] + (1 - gV / aAO) * yW) - au.pL[f6])
	}, this.aAK = function(gA, gB) {
		for (var f6, gV, aAO, pl = gA - this.aAA, pm = gB - this.aAA, q7 = gA + this.aAA, q6 = gB + this.aAA, pl = pl < 1 ? 1 : pl, q7 = q7 > au.eZ - 2 ? au.eZ - 2 : q7, q6 = q6 > au.ea - 2 ? au.ea - 2 : q6, jo = pm < 1 ? 1 : pm; jo <= q6; jo++)
			for (var jn = pl; jn <= q7; jn++) uh(f6 = 4 * (jn + jo * au.eZ)) ? (aAO = this.aA9 + (this.aAA - this.aA9) * this.hS[jn + au.eZ * jo] / 1e4, Math.abs(gA - jn) > aAO || Math.abs(gB - jo) > aAO || aAO <= (gV = Math.sqrt((gA - jn) * (
				gA - jn) + (gB - jo) * (gB - jo))) || this.aAN(f6, gV, aAO, 1, this.yW[3])) : (aAO = this.aAB + (this.aAC - this.aAB) * this.hS[jn + au.eZ * jo] / 1e4, Math.abs(gA - jn) > aAO || Math.abs(gB - jo) > aAO || aAO <= (gV = Math
				.sqrt((gA - jn) * (gA - jn) + (gB - jo) * (gB - jo))) || this.aAN(f6, gV, aAO, 0, this.yW[2]))
	}
}

function aA1() {
	2 === au.pi ? aAP([256], [256], [0, 205, 256], [500, 500, 0], [0, 0, 0]) : 7 === au.pi ? aAP([512], [512], [0, 380, 512], [500, 500, 0], [0, 0, 0]) : 8 === au.pi ? aAP([410], [410], [0, 120, 210], [0, 80, 640], [0, 0, 0]) : 9 === au.pi && aAP([
		512
	], [512], [0, 70, 180, 200, 290, 420, 512], [500, 500, 0, 0, 500, 500, 0], [0, 0, 0, 0, 0, 0, 0])
}

function aAP(aAQ, aAR, aAS, aAT, aAU) {
	for (var jn, jo, aAW, aAX, fw, aAY, h0 = aAQ.length - 1, aAV = au.eZ + au.ea, ez = (aAV *= aAV, aAS.length), dw = ez - 1; 0 <= dw; dw--) aAS[dw] *= aAS[dw];
	var aAZ = new Array(ez),
		aAa = new Array(ez),
		aAb = new Array(ez),
		e4 = aC.aAI();
	if (void 0 === aAU)
		for (aAU = new Array(ez), dw = ez - 1; 0 <= dw; dw--) aAU[dw] = 0;
	for (dw = 1; dw < ez; dw++) aAZ[dw] = aAS[dw] - aAS[dw - 1], aAa[dw] = aAT[dw] - aAT[dw - 1], aAb[dw] = aAU[dw] - aAU[dw - 1];
	for (jn = au.eZ - 1; 0 <= jn; jn--)
		for (jo = au.ea - 1; 0 <= jo; jo--) {
			for (aAW = aAV, dw = h0; 0 <= dw; dw--) aAW = (aAX = (jn - aAQ[dw]) * (jn - aAQ[dw]) + (jo - aAR[dw]) * (jo - aAR[dw])) < aAW ? aAX : aAW;
			for (fw = aAT[ez - 1], aAY = aAU[ez - 1], dw = 1; dw < ez; dw++)
				if (aAW < aAS[dw]) {
					fw = aAT[dw - 1] + a6c((aAW - aAS[dw - 1]) * aAa[dw], aAZ[dw]), aAY = aAU[dw - 1] + a6c((aAW - aAS[dw - 1]) * aAb[dw], aAZ[dw]);
					break
				} aAc(au.eZ * jo + jn, fw, aAY, e4)
		}
}

function aAc(g0, fw, aAY, e4) {
	fw < 500 ? e4[g0] = er(e4[g0] * fw * 2, 1e3) : 500 < fw && (e4[g0] += er(2 * (1e4 - e4[g0]) * (fw - 500), 1e3)), e4[g0] += er(aAY * (10 * fw - e4[g0]), 1e3)
}

function bv() {
	var aAd;
	this.wG = 0, this.wH = 0, this.wJ = 0, this.wK = 0, this.cl = function() {
		(aAd = new Array(au.aA4()))[0] = {
			g6: [0, 5e3, 8e3, 1e4],
			gV: [220, 250, 255, 220],
			t7: [190, 220, 0, 0],
			hx: [170, 200, 0, 0]
		}, aAd[1] = {
			g6: [0, 4e3, 5e3, 6e3, 1e4],
			gV: [25, 0, 100, 0, 25],
			t7: [25, 0, 0, 0, 25],
			hx: [25, 0, 0, 0, 25]
		}, aAd[2] = {
			g6: [0, 500, 2500, 2999, 3e3, 3200, 4200, 5200, 5700, 8800, 1e4],
			gV: [15, 15, 70, 40, 48, 48, 252, 40, 40, 20, 30],
			t7: [80, 80, 190, 90, 46, 46, 248, 180, 180, 90, 140],
			hx: [120, 120, 220, 110, 37, 37, 217, 10, 10, 10, 10]
		}, aAd[3] = {
			g6: [0, 400, 1800, 2e3, 3200, 4500, 6e3, 7700, 8500, 9500, 1e4],
			gV: [10, 10, 20, 10, 30, 10, 16, 40, 55, 230, 230],
			t7: [10, 10, 40, 50, 100, 40, 80, 120, 55, 230, 230],
			hx: [80, 80, 200, 10, 60, 10, 16, 40, 55, 230, 230]
		}, aAd[4] = {
			g6: [0, 300, 1400, 1700, 3e3, 4e3, 1e4],
			gV: [10, 10, 20, 10, 10, 170, 212],
			t7: [20, 20, 60, 100, 100, 110, 170],
			hx: [70, 70, 160, 30, 30, 60, 120]
		}, aAd[5] = {
			g6: [0, 1e3, 3e3, 3500, 4e3, 4500, 7e3, 7500, 8e3, 1e4],
			gV: [10, 10, 20, 10, 5, 10, 20, 5, 20, 25],
			t7: [30, 30, 50, 100, 30, 100, 140, 60, 140, 200],
			hx: [80, 80, 200, 10, 5, 10, 20, 5, 20, 25]
		}, aAd[6] = {
			g6: [0, 700, 2650, 3200, 5e3, 8e3, 1e4],
			gV: [10, 10, 60, 255, 255, 200, 200],
			t7: [10, 10, 60, 255, 255, 200, 200],
			hx: [80, 80, 255, 255, 255, 200, 200]
		}, aAd[7] = {
			g6: [0, 400, 1999, 2e3, 3200, 4e3, 4700, 5500, 6500, 9500, 1e4],
			gV: [10, 10, 80, 255, 255, 55, 6, 70, 20, 155, 255],
			t7: [10, 10, 90, 245, 245, 170, 80, 190, 20, 155, 255],
			hx: [80, 80, 255, 235, 235, 55, 26, 10, 20, 155, 255]
		}, aAd[8] = {
			g6: [0, 700, 1300, 1900, 1901, 2500, 3400, 6e3, 1e4],
			gV: [25, 30, 30, 30, 255, 255, 30, 40, 20],
			t7: [25, 30, 150, 150, 245, 245, 80, 150, 70],
			hx: [60, 170, 170, 170, 235, 235, 30, 40, 40]
		}, aAd[9] = {
			g6: [0, 400, 2009, 2010, 3300, 4e3, 5200, 6500, 8e3, 9500, 1e4],
			gV: [10, 10, 80, 255, 255, 55, 23, 36, 20, 155, 255],
			t7: [10, 10, 90, 245, 245, 170, 60, 160, 20, 155, 255],
			hx: [80, 80, 255, 235, 235, 55, 9, 72, 20, 155, 255]
		}
	}, this.aA2 = function() {
		var dw, hn, eE, gP = function() {
				var gP;
				return au.pK = document.createElement("canvas"), au.pK.width = au.eZ, au.pK.height = au.ea, au.pG = au.pK.getContext("2d", {
					alpha: !1
				}), gP = au.pG.getImageData(0, 0, au.eZ, au.ea), au.pL = gP.data, gP
			}(),
			g6 = aAd[au.pi].g6,
			gV = aAd[au.pi].gV,
			t7 = aAd[au.pi].t7,
			hx = aAd[au.pi].hx,
			e4 = aC.aAI(),
			ez = g6.length - 2,
			aAh = new Array(1 + ez),
			aAi = new Array(1 + ez),
			aAj = new Array(1 + ez),
			aAk = new Array(1 + ez);
		for (hn = ez; 0 <= hn; hn--) aAh[hn] = g6[hn + 1] - g6[hn], aAi[hn] = gV[hn + 1] - gV[hn], aAj[hn] = t7[hn + 1] - t7[hn], aAk[hn] = hx[hn + 1] - hx[hn];
		for (dw = au.eZ * au.ea - 1; 0 <= dw; dw--)
			for (hn = ez; 0 <= hn; hn--)
				if (e4[dw] >= g6[hn]) {
					eE = e4[dw] - g6[hn], au.pL[4 * dw] = gV[hn] + a6c(aAi[hn] * eE, aAh[hn]), au.pL[4 * dw + 1] = t7[hn] + a6c(aAj[hn] * eE, aAh[hn]), au.pL[4 * dw + 2] = hx[hn] + a6c(aAk[hn] * eE, aAh[hn]), au.pL[4 * dw + 3] = 255;
					break
				} au.pG.putImageData(gP, 0, 0), au.aA7(au.pi) && a3.g4() && au.aA7(au.pi) && (gP = a3.uO("arena"), au.pG.save(), au.pG.globalAlpha = 1 === au.pi ? .1 : 1, au.pG.imageSmoothingEnabled = !0, au.pG.scale(2.8, 2.8), au.pG.drawImage(
				gP, Math.floor((au.eZ / 2.8 - gP.width) / 2), Math.floor(.5 * au.ea / 2.8 - gP.height / 2)), au.pG.restore(), gP = a3.uO("territorial.io"), au.pG.save(), au.pG.globalAlpha = 1 === au.pi ? .1 : 1, au.pG
			.imageSmoothingEnabled = !0, au.pG.scale(.87, .87), au.pG.drawImage(gP, Math.floor(.745 * (au.eZ / .87 - gP.width)), Math.floor(.422 * au.ea / .87 - gP.height / 2)), au.pG.restore()), au.pI = !0, b7.d6 = !0
	}, this.u2 = function() {
		for (var f6, jn, jo, aAn, aAo, eG, wH = 0, g6 = au.eZ, i5 = au.ea, eE = g6 * i5 * 4, aAp = a1n, aAq = au.pL, dw = g6 - 1; 0 <= dw; dw--) aAp[(f6 = dw << 2) + 2] = aAp[eE - f6 - 2] = 3;
		for (eE = 4 * g6, dw = i5 - 1; 0 <= dw; dw--) aAp[(f6 = dw * eE) + 2] = aAp[f6 + eE - 2] = 3;
		for (aAn = g6 - 1, aAo = i5 - 1, jo = 1; jo < aAo; jo++)
			for (eE = jo * g6, jn = 1; jn < aAn; jn++) eG = 1 - (aAq[(f6 = eE + jn << 2) + 2] > aAq[f6 + 1] && aAq[f6 + 2] > aAq[f6]), aAp[f6 + 2] = 2 - eG, wH += eG;
		this.wG = (g6 - 2) * (i5 - 2), this.wK = 0, au.aA5(au.pi) && function() {
			var f6, jn, jo, eE, aAp = a1n,
				aAq = au.pL,
				g6 = au.eZ,
				aAn = g6 - 1,
				aAo = au.ea - 1,
				w9 = 0;
			for (jo = 1; jo < aAo; jo++)
				for (eE = jo * g6, jn = 1; jn < aAn; jn++) aAq[f6 = eE + jn << 2] === aAq[1 + f6] && aAq[f6] === aAq[2 + f6] && (w9++, aAp[2 + f6] = 3);
			aB.wK = w9
		}(), this.wH = tm = wH - this.wK, this.wJ = this.wG - this.wH - this.wK
	}
}

function aA0() {
	var df, aAs = au.aA4();
	au.pi === aAs ? df =
		"DYDz2ESNu-0UYCCrS9c3pBUrKHc94BhIBhIJpIIBnMIAAIrKSSpKABmgf9e7X7ecX-5P0baOy191XXX7eegf9mcfUrrxrKppppKpKSrzUMMMSKKKrJcXcXcmgcXnKIKBmnCIJonCKrrSrrSSxSS9XcJnBe9XemmWXeX99chMIAEprrSrrtbrxIrMKBn9eBcecX9X7f99X90e577VX1VcOWX16XX7X999cX7eWyXXccVVX6rUSrrwUrlzpbbrrU6xzztzxzrztzbaOtaOa5-0WV-77e-9119HcXXZecccceXXX7ce9Xcce9e9meeVof919ee9Wzy5XeXYS9KBcXee_He6ce1ee0zxzta5UaX99c1mXcXhEJp9cNHWcTN9BcnAzJoorIBe0c--nIJoonSIBe-OX-NNOXWbcBgzIHX9xHzS9mcCSI9-nBrrorK9VcP-jHe9_BhxzKHcWC9mZp9-3n9fBnS970a6zs7egrIAAIRUKocXX9gx9npKaUxBppABe5OdHpBe-AC9-17TOWABpKI9-7JmnC6zGtxIBmen9egp6aUlyOzbrbbqUzxHXgjKKBc-ZehlxoeeoxObonox9XonAUbzS9efBdCAArHmjISBhEJnAofBUIJgrpocXxIBUoxHVmnBmmXAExoUxABmdAIBgnBonIAC6oxHVgfMHcXcUXAAGxIBgfxJch9c3enCMzSBe9eXomxHeBgmeCSBgpKMp9hzHfIEzHnArSxHX7pSrUHcnCMrUpSa5UIonABrSBccnBopJttzbxpBonHXpIEKMrMSrxpKxzUzltyUtaTOaOaObaT5UzNTOV0c116rMMKSKrxIKpJpKMSKMGxISCrKMSpKMKrSpSpI9xp9_pMMMMSBoxSryTUUxa5P7-0ttbWzzzxzaN5-NOWVN--0Wa5-0X-0VNVN7TOzaOWzL0bbX0y7NN5Ua17V111749c79e1c-V-----Ow7--N57-OzaN0ba156byNNT6q5OzWaT55-OsOX1777Oa55-5T5UX16tzUOyUtzrpzUrSKKSSAoemnKCIAIICI9KHn9CKBhCSHgenSAJnIJxSMMKKSSpKoopKKHpSoorSzxpWxMS-UKISaOxMOxttyOzy5OzbbtyTOzbtaUxyUyTT6porUrSztzzMSp9eceoogeZp9ZxJx9geeeXe9eZgeC9gegemp9gmpKMSonSxKrrbaUMIKJpMKKKpIACBmeccV71XX7V1mmmmhCCCKJompKKJpMKSKSKpKMJpKBeeceenKpzHnBnBmceee-X1117ememfBn9mfCBmgemf9mfBmf9xromcec7Us8He0u99cWtbc-PeCCS9VecZnBnBemfBn9X9c6aOXA997Y99755VXc6tXXmV5Os-ObVN0yN0bzaT-7ec7N70Wa-OV-5eggnHon9f9efCBpMzop97epCKIpSIBpKrrSKKIKKMKMJehzKKErJeABnIAJc717f9eBnAJzrHe7V9d9ef9gmopKUKC9gmcV6tX73eCIJoonIBnBnBgnCHgjJeZfA9megeegfKCICCJnIA9meZf9mfIEMof9XceXe97X-59XdCIKKpKKCJoeVcf97mZmVVV199YJmX7gceY9gpEOxMMJecrSSGzOxSrxprSxzJzUopSrIxKBpUMIpMprSropEMHnBrpprK91AJpJpIICpBopICCJonKBn9mcme9VcX9ee7X7e9ece9Xe19XcX91Xee9Xcce9VVVccefAAABe7emhBnSSKMSIJhCIJpKJppCKKIIIICJgpIBpAIHpBcoooonIKLObpBnKlzrKIKCJpCJpBnBpUzrrxpxSbbwUxzUprpppppJppMMIrrSSRUbWsOwUzUltbzrxzUzSzUbrrTTUUrSbbV6WbaTOzxzyN5TN-T5TOxbtts71-X-70V0sOWsObbaT0sTObw70tbbzbxbzzyOtyUtbyUaOV1-N0cVN-50aOtza6tzlxzUxSrzUzSSxUSzzOzzs5OyOtyOyUztyObaNOtaUrUxrrUSrrUrMSJrSIMSpKISzKUSpSrSSrzSMMxMSrMSpSrUzSSzzrTUMSpprSzMSzUxSSIEUSrzrUSpMKKxpKrKMKBmmrIKBgpKrzs6VOsUa--5ObzyN77-7X7e970V-5Oa5ObzxSxrzzSrKMUw-OV17X7X1X99X97X9X99cXXXXX977OaOVXeeeeecX7cX7X7X177-7-X-71-7XX97X97cX7VVV1--VObs970cVObtzbtyObrzxSomdKKSSMKqTN5NN0xrMIM5UrKKKpEKrSMSMprSrxMMUzrzrzSrSrSrHXenOtxrrxrxzSrrSrUrrSrSxMSxxKJpKKKJnKKrKIUUSrSrKKzKxKrSrSwUxIBnrxpSSpUzyOzzzzyUSxzRUpCBee7ecXce89omegpIBrpxzSrMJnKrMSFT0tbrMKxKL0VObxprSSlXV-11-c-X-WxzxFUaPcX777OzztzrSrMV-V75X96zzMKrUa9e-7V17gc9XeV90Bf957cVOzrMOX17X7X-X7X7V-N-6aUxCKzUUKprcX-UzSrN17WzrxrNX7ecV17WzzbaOtbxraObrOxrbxwUxpUzrzraOy5OVOWtzyOzzxbzVNXccXcXcX1-V197V-ec5Oy5N1--555UyN-N1---VOWX0Wtcc0aUMMyOs----Zc5-TOtsOWX7c0xzLN-NWbyOyUyUzrbxJe9gfTUxAMxrxzlbzbzbq5UKrJnAABnAAICETUtxSrzrpIpKIUSxraOaOVNTObzWa5NOtxxyOyOc-5A9YBmnBfHceX7-XXcX9e9Y9e5OzUbxSyVUX5OcUa1-UMqNNUbyOtsUWtWbWaObtzbyUWy6bzpJmoh9nIUI99oghSUzrrrSHeHohKCJgrKJemgcrS9nry6xSrUMStxzUSzqUrbrUxUSxxrrprUU6zSrbrtzUSUSzxMKxSMprMKIIIoonIBmohAIAHgf9eHeemfI9nA9mf9c9n9ZeXc9d9n9ccX7VZmoceeHVX1Zn9meZegegegfBhABehABonAHnABhCIBemee9eBfBeecgeohCUxzUbzxI9egegfAUUrHmegemecWcfCUp9meX9Beeef9onrSpAAKKKIyOzyUzJnBjSrxSSIBhMSHgcVYKxBmnzrROzpzxzSKKCKUzKBnoUzzbzpJmegfzyUzFObyUzrrzpKUSlzry6sUyUVN-7NOzbzzlzrzUrUSrrURUxzbzsTUsUWts5NOWa5ObzrUxrtyOWWaOzMSJnIAIprMJorKMIrSKMKKpUKCBonKMJnCJpCIKIKMJmpKIMKJpCJpBxBonHomoemmegnHf9f9cX7ce99emecgn9h9eA9nCHgfBnAIBfHh9eXXce9emec7f9ec1me89eeceme89fHeemX77-ceeeemeX9X9eeecV-V9e9Xe7e9eefBnBeefBfHmnBnBnKBpIEpKxMSKJnBpBnBnBmgmeeX9cXXVcX7Xce1eXcXe7ee9eXeeeX9X7V7V77V--XcXee7ec7X9eXXceX9f9eeee997X9Ve7Zee7WaX5X2Be-cee17X--0tsUbtaT0ta5-Oc--7Xe-X7--OVUtbVT--QA9nBmcXV--97X9ememggnBecJceeXme-cXdABeXeX97cnHgeeI9IA9XcVX7eX99e9e9mgeXeXemmceZmXe9ceXemXmggf9mmnAI9X1eIHcXfBghBmf9BemcX9Y9Ve9--JmZeccXA9Xd9cX9VXVVc7-V-Xee_BnJhIIBnJnBmohBgohBcmmf9eHf99Hf9HmommmmV5N-MvxppxrIICWzsOxX--OV5s0i1mopMKppzTOaN-0XXceV--0lJ7-90mzBlV2N7tRof9JqUsOaW7c8bwrrJchpK9-X7PBfHjKogcP0Jd92SMUwUlxMSErHegnrlxI9X7cY99e7hSzxpxSIIUHozogmgecYIExxxrrrKpKrSrMMrrlxtyUtxblxUyTUbyUUSaUy6Wzttbbc5N5N7V7XWaT7V6aZeVWsV9nIA9X2BmcWc7ooc--f9IBomV-0cnICBeXgn90Wc5TOa7-1-5cX---d11---esD---m8D-1VvAYqV-92glC5--NEEiqV-7Hsjk014I4wognBxwOs0Wc-D4y4gcT--0Y8X-0WalAk--0pHX-1Wsy6EV-a7EDhCBtaT9--X3IIV--_VJV0Ndepmzq1-0XeJbD-5XhvrCqTe-07iCnpteV-7iejk-iAtCxEIrrX71-2smknnEUUpze-e-c-1BtMB--2Kbq--YMmzV-sqPmrF7--Culc-HCwyxxcV-DEWXhte-DZ7mzorSr56eX170LG-rUSrSItzOueVc93c-5ZH-rrRP9-2d613nHdRUR6kP7-CZVZUEKUyUe91e-2ZYhnTPV-t8OMny7-1HZrT-DZf16A9mjFUzlsV--Hh_N-1HlyB-CZhCrSpzrkX7cX-2ZibAr-VMdC8brSrzUxSSIBxpHX17c8CrJe7rrUIpSrUxxzSrMIMOs5OVV7X7X7977V-7P19Xcce--8DNHk-LIcPSpN7-0ODtgnMN1-7Zz5USxyX9c--J2As-9J2CSu-08FHSrR7V-0G5xV-OH5vqV-0LEoV0OLiAnMN70D_f4UKIBnSBgzSrSxSSMSxpSpppzc-5TTUMbV716s117X1Xcce-cXXHcX--0Rs7V3dS04nKonpSSkV7----TMGPxrS-V7--MN-c0HMYnBnrIAIrK-OWV75V-tTEHotV-qMoqSMUUbe9HXV-mNcawnr6xtcVe-3aNiUIq1-6aOwMISlc1-6aSe6rROec-8ac9fISzuX-V1tf-1mnBrlWaN-NajMY9ggeoopCTTTTN6aN1HdgkXoohABnK9n9KJmpogeV-0XJenppSrUzJgghomhp9VnxIAAzOxWbbrIBnJmenBegozlWyObxIKBonIGaOVT50xSk6xJpEpIHnBonBoptxpr56xrzzbonCBnCMMSonzxJmopCIJomX7mceHcV7nJxSABhrbxEKCIJhAA9HgenABrUMbqUpSUrprSrbzzp9hABeXce9YAHcoomnBmmnBmmnpzaTTUrzzMpzWWblbyUUSrUrxbbzzblxrUUbrzSrtztzw6btV19ceWXWzq0aU6aTOta0a0V5777Xce7nA97VOa0X-17VUVV0V17-17X7V7-V----1-V-VcX9A9cWbbzyV-U5T5TOa5NNOaOV1Xe9ce99mZee5OtcWbaTTTTTOWe9ZeXcmcXVV38gtRnCMzSw1X6VcV08hu4rq9--tiGRrac-1Qfbg-dax4zrrIKoeBxErUlzSGbs0VP3eXX97XV-9R0KCsV1OlXjprrP7X7-HRQsCpVc2TRgLxJrKBeKKJe7BhIKKBlwOaUrNTUsNNNcNP91V---PS6VgopVN-LbHRrK999ezrxxoy5Tc7-0bJGjF--6Spy-5bU7rSbuXV4tsIYpKSSrSp50aX-177e-2baNMC5-2Otd7nHrpOba7cV2tv2dnICxz-Uk7cc0mUIkRnBpCBpCIJOWa0VNOtc-19UQnBeegmnIISxJns56zaOWtu7TV--URWN--VDLc-eVE7zSrUX7Xc-5WM4BN1DWTIggpBnEKKKESCWV5T5Wa-N0a9VsP6YRn9cmY9JggoggzUKHfA9XmcP9XZfIJhronABfISpxrUrrI9ABnBggrxxoe9fHmeBdCDUUrHf9orUogrzzJfUU6zUzbbbzrty6brbrxxz57OtsN5OsN5V5VT5V57N56yTUtsNN1cNNVV5VNeeeZeWtu77-XX-KgxCqWVV-P8w5qV-uAjtz5c15XwhBooopBonIKKJNN5-N5-6WVN-8ckmzArUOVeV-uDoWxNV--YoA7-TYoYRoxa57-1_P1T--8NKD-9dNS2ACAUta---dQzr-DPM79mmgcpI9chMKCppxxxrSzIbXc0aT1WVOxk7-N-9c0eauZgfAKrSrrSla-5-7n9-V1eVE3nKUwNVcV0eWZinCF5N0TcbkCMSrzr5OVPXCA9VXV-1b0uV0ezUBxUsXc--mhTc--n9_c1DnTIxCCSMKC9eCKClsT5OsN-V7NNV6QJcYxzUSxzSwUa7X9I99Xd9X-BhW8EE6rUw7ceV6fXkApBmf9f9hKGaOWzzzObV1V-PuipRpJ5--6iiarprP77--DrhL-0iv-fN-7jNKjExzXcc-Y1kshKK-5-V-wF2umWs-03EWs-03_Ms-23gdy-qlmyACJmcgfBnCIIrKpICUSIprUa0VOV5N5---V5---wRnFru7-E6kMClX-4lwIAzq9c-A7r-z5V7gdk8monBgfCCCElzbzxsN995-T5-KgiSunBnABmeeIHprrKJxpIISKICJpKprUzOcOzzUTN---0V--50aN1-1-PV7XX-SnCeY9f9mnUSSKzMtaOWa9VX--bBy1gzSxX-e-4nFNEAqTc-6C7Wgs-EC_DBjN-0nVb2N-3n_EYByN--nfWnV1Bx8ZorUaV9-CnqgbKISrNN9-9-8o5aACrSVWXV-C0gPk-jFRwSM6rsW9VV3h23TmfBjOxMUtaX17-6GYfE-0UHSjwfEzbxpUUq17ZcXeV-h8rqr--3odX6MF--8ogzvMJrN--V1xAI4npKwT7cV0Xp-Yf9nBeehKMKrzzSxrSxrUSzzSxrSMzSzzV-T-7V10Wa6VOWVT1mmeeegn9eeeXmcX97V-IJGnCr1--2JVvD-Bp7gzSxw6aeZcV0hHX5merts-EJjUhq7-2pGMvBtV-hJmVz1-1pJofqV-0KQ3c-0KztN-0L5k7-6LYvE--ILYxhTNc-0LZ57-ALu1CaV-4SIqV-hSQ3na--KpjX--ppknVESTPknBgmgn9f9f9onBmenSpMGzxbtbzbaOV6zbX9-NObWV-4TmmV3SToLnBnJnST5Oa-1-0px0YD-0pylvD--L3Ge--q54IV2CWmWnUUz5Pcec-nO-URhBoUy6VX-1qFuQGc-MOcagpR---CcERs-0PQUc3MPs8gehClzSzbzzUzxMr6tyUzzbzaTP0HgmcVXegeeeXeh9eX7e-JqqUEKIMpzz5T7cXX97-bRBpSKoT5X7--M4g1-grMIbBecemgfMxUpzMzObtu7V0zrrq7e9eV-MTaFhOy9VfLnt2-9-17117VcX1-1X97cVXX9177V-VXV9-WaOSMSSSSrrUSKMKxrrrUSxrrUzsOV7--N-tVN--N0bKIKKQCKRnKQCUtrTUtUSxpMprrUUKxSpxrpprMrxF-EcVGxTX" :
		au.pi === aAs + 1 ? df =
		"QREc7lR7oVUYGy_KJOJKKKKuK4OKT_K4KG_u_GJJO_3K_KKKL_4KL__KK_4_LKK_MjzuOOK_KKKOKLKKLLUjzji_KKMgyzdMjzgzzzEszzyzzjvuQvieeid_POOvzkzvzy_TvuOK4GKKvyyzzydJQi_OdKKaLOLajdOPuueaYBzydJdPOybvdbjeuvizwzujuQnunl2wBnBE2-EYBz2nk2kFzwBzznBydnwznEYwnnEBnnwkyvwzEgznzzEwwwwznnxK4KGOJ2zl2nzifvwyw-J0GGJ042nvzEvzwznJEnzlG42zg02KKGFzzEzzeT-woKK3EvoKLOJBnBnzE2EznnwnwznznzpJKKKKOOKG_G_LKFwl2zK8K4JK4KKKKKKKKKKKKF_g38EBemXeeeeeemeemgeXeegf9XgeeexCxzzzoenErMroeXeeegfEzSS9eVcghoeemf9YBe9ee9eXghrzzzKBfIUzrbzUzzzbryOxrzzbbsTXe9geY9egeeBeY91cUy6z6xtxbxzbzlzObrx6ztztue5UyT6zzbzbae7UxyOzzbzzbbtzyUyUtzztbyUzzbuecZeBeXeeecgeV--1ViZ-00JJIV379xwOLKKgzyzK2zF5g4ccBgcn9ggepUxAprzztxtyOzbzzbe90f9cXX99V-cAQAOx-PFLqqmemxp9zzttzIAzrrzzxzzze7X9ZeceX5ece---AorF0B4uUghzzae9-6VjJh_UznK---NUXV1NBEpOLYnzlJ--0X1X--Vl4pk-B5KYEc-D29vazJ-HkP9DmexzxxzzzrbztbseeeHeYHceXV-NC5uUF-R5YYCyX-2Vpc0jCF--5lM7-12TuM-hkQrZrS9X7f9e9enrSxrzaUxx9f9zzHhzUxqOaOsObbzSxoqUxyUY999c9Xcecce7eV5NDrSOLauUwzzzzEGK4K_0F2Z6YfEUoefUtzUzMyNNe9ceec0a2zdLQdyjwynxKKFznpGGJ--1-_X-AW0ZpjvnzCKKJ--1309--02HO---WrDV1sGfOOjzzn4KK-0FYN1qP-2W7RtfkF6J8G-geeemf9gemegfEbqUrxEbyTgecOwUbbxEbyTTUac-H3crrjCLEE1KoQBrofHegeecBefBeeegfAACxUHemeeeeegxrSrzxxoeeXXe9ecdAzUomXexzrzroeXeecc711_rI9nUSxxKMSryUzrzUpxKx9cV7cceghrrJnJmhBe9ee9VUrxy0a5-7e7VVX-7XccOVX99eefKKAAMxMIUxzMrxK9XXXXeXceXceee9mxxp9oeV9mf9eHgmeeWsXnHcmfA9oenJf9XcXcOby999exKKzMIJcceYBggghxrI9e9e99pxzpHeccceX110cXe7cXWzrUzUxzzrzrtzbaOcVcceXccce9Xceegcce6emeZe96buXeXoe7TZhBe2Bmc6eIBdC9eC9fHcHcAC9erxHed90C9MTUzoh9ZjJeofIAzHghHzI9nHYACCA9VxIHcfx9gmmnEJrKErJzSC9xrrrtyTOaUa0xSxKroxMSSrIMKqUlc6bztWx51--P7OyOy0tcX997V-NP6WsUaUbaOaX6VTOzzzxxpHnBnBggofCKSpJxUUo6pzzbtzyUzbxSzogfABeceef9mpSzoppI9e7X9nCCKMMK9fEI9ee19mfBgemh9W91WuI9gf9e5eX17N5NUXc0a1nBenUHfSorpMKMrHXh9XgmY9nMJmV1nIISC93fA9gnKBemp9e9XxKoeeeA9fSMzrxrpMSxMMHorIKII9eecgeceeee9gmghrKKCpKCIJonMozKJp6xyUzSppr5OttzzzzWWtyN5ObcV-5OaOWttyTTN5VWWbbzzrrxaOtbyNTUUrrSMMSpxrrSrUxxUUpSzSMKonIOaN6aVcVNOzUrL17ccXccVPeccX7717cXX-5V0zbzJxOboUKrKrrUxxrrSxxrSorIKSrMpUUISxxAESpGxrsVWzP7XXWzrrxVNXoccWcOcX-6xrV6tx0zxzUtbtzq99777WWVUV-50xaV0tsNUbzpUUzp9nUrpIyOzaUy9ge197e6zlbbbzbbyUzommhxonCHeIxxrxrxrUSxrUrrMKoogmmecmeeZcceX7eXHeeemmmn9eedCzHfoeeeZe_IMzIpoxHXKzUJxxUoUUprza0zxxxrUtyOaUUlbxIMKKKoopCIJpJoommeeeX9A9mmn9cce9Xe9ee19eXe17eA9mgnCKpJnBee7XXXcee7X-99XXeee9993cXV0ba5-XV0aOA919HgmeeBeY9mmX9ememef9ggn9ghA9mXcmeecX7gpCCCBnAAAABnCIICIKpJonCABnBgf9hBpBnBnCCCJonBnJnJonCIKprSKIMKKpJpCIKIIIHrSMpJjJxMpz6zHxCrrMMUSprKSIrMrMUUMrSxrSrSrrUUyTUbbtz6zbr6xxxtbtyOtyU56tzyUTUxzrSpxKMU6lWxzqNUSxpUxEMKJxCJnMKEUHhICEMrHxSUMSrMSrSppppMKMSSMKpKBxMKpppKKCBnCBopIKIKCEKCKKMMSpppSSSMMMMSSKKKKpSKKSKSMMMSrSSSMKpSSSppKICppMrUSyTUztbzzbrxaUq6zttbaObaOa5TOa5NOWWa5TT5-N50V7WWbaUbbtaOX-N-7-1-170cTT5ObaOa5OtttttbaOa5N5-1510c5V--0VVcX-1-V51-N7X-WWV55N55550ta6aNNOa5Oa5OaOaOtbaOaOaOaNOa55NNOV50a5-T50WWV-N--7nBf9mcmgcmmmeBgmee7X17eWba11X7VX7X79X97Jc7V7-V7117X7cV7---V1-X7X97--7X111111711-VX77V7-UMMMSMSrN0V5-UKKCMxpprSSSrMSSKprxrSSSMKKSKrMrrSrMKpprSrKrSSCKKppKpoxMUOzaTOzyUaTUttWtzbbyOts-OyUbbztVObyNNOyTV-0WxWWaNNN7X7VXceXXX17-7WWIBnIBonBd9eAA9Vc7NNV1CIK9117-797X7VX1111WbWy0xUzprSSSpprUxrSxxrzTUbqP6zrSKprxzxzzTUUUztzztxzzbtzSSUSMSzprSrrtzJmmfrSrSUSzaTN756xKxCSSIKMMKKpSKpMKprKprMKpSKpprMMMMMKrJxSSrSaNNOtVN6s---0WV17N-V-0aUWbyN0baOaOaNNOWbyOsN70btaUL0xLT6o-UM6lX6brSppSSSUUSrppEF6pSSSMKKCKVUMUL0tba-USSUKSKSSMKrMKpKSKKCKpIKIM6rSSpxMSppKSMKSSSpSrSxrUSlwT777VV---777X7XX19XXX--7V1Hc1--N0VN570c6bzKMUzrSxprK6xMxxrpCKS5NTT6cN0zltaTOa--57-11-V7X7VcX7c7X77977VN-Oa0aTObaUUoOxpKpqP70btyOwUsOw776rS6twUkUOtWaObX6ta0bVcOcWy5N-5T96XWaWccZeWWtaX97cecWzUxxq1X7cVX77VX999750a6VOttw1XecXnIBe9-VZceX7V0zTT-OtWWbrzSpCCUJltWbbbzxzUpoxopxTUUxprS9zMMSKKxGtaUtzV177177cX7X7X997-OtWaNX150a6V6rxUxtbaOV-NN0WV-75-0V77777X711-1X195XccccXZe_on9c29c799ecVOWaN-55NP-T-TUzzzzlzzzsUzxzzrxAqUyUzuA9770V-5UzbzOzSSUrOVOac7WzzxCrSUMJgpIJrKIHgrSJxSrMSrSrSrrSrSrSrrSrSrU55-X77TOe775OxsXX7X15WzMcXccX-Xee77-VX-UzkOzSq7UbzzxzSX5OVNUbaTP6xzrzccccce1XXeccWzzsP7ce-U6rSzSzbzUxxxzxzUwUqXcPVTT99XXce9eeXzS9cXXX9XceXe9e9ce9cece9e9ececeeeeeceexxxxrHee7ece7Ue9omeeXeeeeeeeccX999e9eeXgef9eeXXXeceec5eXefC9eWcPn9WeXeeef9hzSxHcfx9cBe9emee9X_Sp9e9Xe999XWyce7X9ceeeeXerp9eeeceecVeeeeen97d9ec_BemgeemVTOyTNUbttXVe9cce9eeef9e1ee95eeec--3mJ3-01RcfV-NIoOUF8R8uLgf9hIHeec1Xe9fBeh9mfEzzyUrHenxyUyUtzyUxzzbyTTNf9e0a0cWEvKdK_KKKLKOK_aJaPPOOUeKdUddLTyEukyvizjzzzGK43G3322EBkwBzkwwzwzwzwznwoKKJ0K1X2ABrpzzozzzaUWtacme9hxBcXBoeV9--7KZ5R0K1i5QpxUxzUyUzbxztyX9e9oe7eAHXe9eV--KycF0gAC-Bf9rUzta7c-54dtbV-61qbAAy---LztF1oAWqEUzrzxzbeXeecf9V-94pL6xF--Agu7--4xl31226aIBogfABfBf9nxxMyUztttttzbbzbyUtzbsX9f9e99eeec--5HLZ-A28MQry9f055LVqKKPKOaOddaKaKOOd_bizvy_MeOOOK_LPPK42BnJFzszEo0G4aLKOUjuOLO__GKKKKJHKG32K_KOKbnzzdKOLOeOO_-EoJG5KK_KKKGK2wzElGLK4K44JGJKLLLKFnLLOJF23dLLLK43_OK_KOOKFqKOKeK4KG43KKGGGOKKGKKJKKKKG0OKF_FOK_OKKKPLJK_KLK____LKOKKOLLMjidbzzdPPKOKJOG2pOKOKLLKOUu_PUzzzzYwzwydKdaOOKKOOKKLKaOK_OO__aEeOLTdzzEBydaaKdbEnzjfBnuzdPLLO_OLLOK_OLLLUzEnnEnzEnwwnz42zuRzEwwwwznK2nnwzEnEEEnnwzEzvdKKOLO_OOdOUEnwznnzYwnkEEzyEiuUvjzzzvjnyaTyuiz02yyawBkyeQeeOueddaUibuPJi__9gwnyaOOPTvuPJTbeLzEiYuEiaQEeRydiddddaJ-x4K4deadddaa_daaOdaOaOddePaPOaauddeufEeaLiuOfevduazjuzfvieeeuPueefiviiebe_3KvfjfEfiveePivjfiuiE-FGJ--3--4-FFF-FF33F-B-22vjyjeauefeiiuzefujidavuyuivfiuuvfeeuePaPiuvvjiiyyzyivvvvvyziyvzjzEnnEvyviviuvivjjzvjyyzwEii_viuviuo-2vjffdKHPdivgEijjieEigzjvfYyfno3-z2BzvvjeOiivffdideeeieOdeLKbeLuOOOOedaeOeidjgnueaaLOaafeveLyyvivffiiuuiiiiiiiivevfiiieiiviviyyvvvvvvvjiuvvjefeueieieeeddveTefeaieeeeQePevedeffeuieeuaeeeaeee_fiffiieeQeffideufj3323FwEjdyuMeuaveTuQeuLEeudG33_eLVzizvdjfzi_JibeJF44fzeeu2vc3BEfdvdjfy_vvfyEvd_TyfyeTgyY2yzFF-wz2zJGF3F-kz-F22Bn-0GKG43F-2BwzFk3-BoFC4300-EyzjzBo3-l0-zzzwzwzEBk2B-440-04443-EivzjjvzzwwkkBn2-B322BB-zyadY2-B2-nBkk-oF0-o-o2wBnnBnnEsnE2Ezsnvzk2nn32-nB-kk--BBl-2-23-3-BF-B-ysn2-kBBnEBBkn22-B--00-00GKK43GG03JG43KKOGJ_444OOFddF23BJHJGGGJJKOddG-kBKHJ44G-nB-K3-F3-F403JG3GJK45KGdGK8J3G44-3G04J3_LK2B23JK8G3FExKOLK__KGG4KOKG-3K4OHLK_affedaK-G-n2-F-wn3_aO___KaPJ4aOeadaOaLdG3G3GGK5O_OOOGGJFG3FFFF-k-22--n--GJ2K4KK_KKG_KF2n2-2-C-nu22-2-nBn-KKKOK_OPaeOdd_eOK0O_KOLJG44J33-FFF3-F-2-B-B-k2E202--n-wnE2yEEEB2ynkygEfynEvijz2y2GJ2zgzEgwygwyzvyigwwziiiveaaidfuuevfiE22-k-0---F----knBnBnnnnBnBwzBnnEwx-EsnGJEnkCJBBBFkB22nyaLdfeaBknB-EsnBnB-zznzKK2nzznEzx03BknBnBwznByEwzBnzBynnzjzdLJ_OL_aOigwnnBnyEnzEEnlGOJK4FpF-FnBOJGFzywnwkoJKOK_OK____aOJBEBwnEEEwwknwzzzzzzzzzzzEBwnnwzEswwwk-nC3LK2BLKK2wznJK4JK23J4-FzYsCG2lFoJEC332JCaOT_aLPJ8_OOJ34JBFnFwBEK4JF3G48K_4_44HLLPdaPaeOOaLLQiuudeOdaLOOOOOLKOeePPduOaOdGOdGJB3G2FFnBB-nB4K4_GG44GJC3GJK4KOKFwB-kG_F2BknBnnBwnEBzBwwnzwzC3EzwnEjzEEEEE4KK0-zjizwwwwFzzvih-yC02yijEnnnwkF2Ez2CJGGKKdeOKaO_Gbd___Fo-nEB48O_aOG2k2pK3EBzF2042wwwnzznnEEnlK_4F--Bnu7-D5P0Mj4-NFneHn99fHdEpA9e1mrUrMMy6rbyObacVUbsXc-95VQqU-0RC72gfrLTUX9WL7PGHOKOLKaLLO_aOzjzdKK8fyy2yvzzzzjnvEyszn-yvuyji_KjEzfvvdedLOOK_au_K_8KK4O_Oavznwzj2vYyiizdQjjyvjvzjnFJ43FEvyyvysEV2vkG-oJJ-J2vC2nzfvdvcyvB2EgwkznoHKJEKF44K444Fwkzjx4JEwoLK2EGKJ34KOGFCFK2C3GKKKLujnzuK_aK4K2Bl0KK_K__OOd_id_032E-wwwznKK-5koy5rxzzye9XeV0NQGfQzp409Fr2emf9gemeoemhxzoeenrzzzzzzxoeeeeHeeemnrUzzJr6zzzzbyUztttzIzrzrtzaP5Uxy1XXc7TOVNOcXemnCBoeVOX9IHeX9ec9V-7QyMR-O2VLYCrzOcTXeV-7R7oR-42W7vEc-16Tkb---xZJV2sUexOjjEzzlK4KJ--2yzH--10C8--0-gFV-7VNER-038rYV-7WePR--3FiX-8X7VOizvlGJF--GAnc-q7b4qavzwz43KJ--3In9--193W--G5YBk--7uzo-03SVI---Z6nF-JH3JgtV1NZFfOiznCGJ-03ZUnV-NZy-Ok--HUC7-18Epr--G9ncs--8SB3-23innD--1O-0-6lCPTmmnCzzbWa9c--8glJ--3qO1-3XRYCbzK-XlIJjmegemef9efDUzwUzx9fHfBfxyTTTUpsTUxzWttf9eeWtzu7-19Vk6-2lJH2nUze9VKcf22OuK5ObzzuOLKUzviaKzzzfzvwwzEwwwzYBzB0GF5JGaKOJOG__3a_OJBG4-PlNXPmfBnBnBofADUzJzbbbbbzpxzbXe0ccX9Bc6s--1mmx-6lYOwmextzUrP7cc-5BSZbV-45HC2T7-9BdhMxF6JOkqwemmmmf9e19nJemmmenzryUyTTUyUbbbbzbtzue7-qBstqKOOYvEEBo-45TmAqV-1Bzxq-CGcDCxzS9dEMrxowOX7V19X-6YINKaOgnk--leh3lV-cqZnQo-AGhLznASpxpObxa-cXcXV--sj9F--RjYc-9DO8aRk-JRodC5V1Ntt6OKvznCJ--6Flm--Yf48k-BTXJhc-LEJ7aTYC-0BTkwjJhyP7P1LYtQd_KPPLbePLnuafp-yEeddzzEuOiydeKOGdzeaK_jzjjuKKaOaOUEnynBzvnzVyzzEE4FnBwBGGOJBF334G0-3JKJEknBBlKKK-wnCF-RUIqgju-4Yv7daLnB--6voH-EYxyt_ueaYBBE24F-wUjugoqOWc09F4K5OGOOYyzBzElK-1m02NnLNP--32h4-0m0qgnqV-1FPCq--H2Gus--FRXJ--7Gue--38td-6H3zimfGzxLPWaX--3E7C--16gBV2O3CZOuLecn-n3--RX7jgyP--3G5C--18RXV3t3nbP_3_iju_Hz2-B-03XWAgfxyTcV-047KF--Xjy7--GPHJ0W7iC6CSKKIICJnCBemzqUbV6sUa5PX6w1711-V0d4t8OOwwo--7o-P-3ZP3pin4--1CVBV-85mEN0d7rPv9hEIBeXrICxpCAIBtxrtbttztWV--UWc7ec--ZRVOk-3Y_fi--3SWl-1HE1urq7V-06YZF0JYnKBgltzy9c-1GuEq--1Ey3V-87P_R--8B0X--3aep-1HIL9xw7V-08jeF1RZt2BoxCKLV5NOaTeV-LHXk5OUn-3B_KjRnEJxK6xSIBnGsOV5-5-N7e0PZfppdQivevivviuviuvfffiviiiuuivV2vxJG3G400-F2zoG43G3G3G43G3043FJF-B_XHC--1HrHb--1Ml9V0OBPSTykK--mPGuw--0CdCF-3bQrg--_-bGk--c3w7-1J1Tb-nHWSNmnBmnCBnBognAxAACOzzzUbzOzIAAEbaOtbpICxtaNHW9WWttge-Ou9dHce0uXWaOaNTc0qJ_j5Tfuiyfuvyn-43-C4GJJF-ZdZ-CEN--qKF5MivvzoGGJJ--9fZm--4NVG0OHj5Imgmgn9mggggggzbxlyUttxUxrltzzxUp9mcegf9nBx9HzICBnICCIKMbaOWa0c55OWaUlaOaUxxrIJogmqTUpK6aNNOaN0xMUNT1-XXceee7cN575ec0cecV-0P9QF-3hh-D-7_jKnaJ2nyZ-YA_nYBnBnEUttXVOc8aMCmTLLKaaLKPddbjiuievivijivfivy_PPeaeffjyyvjjvzEnzso3-F-3G42l4J-2zvEBGG00LLuJF-3KFK003GFEyxG-nEzvp-B33G_JK--muI9w-5OSJStaOeji--wBzzzKGOK-0JieNwmeCzzaV-TMQgDzvlJJ-GAk2vrxkPe7--MV8o-6At0AC5--OURXy--gjqMEraeV2OUrqueTfVFl22F--jvyN-PNAgydcnF-Yn1WRrSpppMJeYrJnrUKq6ce7WzTUzUUUNVNUtsX7VJece9XXX97c--5440-2I2OHnJsOV-1NxR5-Bn6z2mgeegenBzbzzUbtsN--0_72F--nKlc11OxXDLKKO_OKLQvzwwwzEnnnnKF0RnydBghMMNN--dOfypPMdfibveueeaPaOO_3eafd_J8KOKKaaOaLuLaLvcyEieQevy2l---GFpJFzz-ynwwzzyeiyv-Bx3FEjjzVEvV2s2ufk2G0--3FF2020003JG33F-dC_NYAASKopSbtV--77--QufZ--CxYX-5b-NCbjY3F--sGR7-DRSQ6v4--2ZTFV-OmFuQF--tWp7--Rrk3-2DRQfF-ObG_p_LKK4LQjvvvvjk3BB--2cnkV-0opdF-BuUUE--1SP5b--2fOPV-0qQ8F-JvLKBlV-ttYkOgB--EKfm-GbimObjzjzzK4JOJJ-QEW629fAEU6aT5-Kbx48aOGeQiv-nzVk1K--4-Bei-2c4b_aEF-00fX7--VsoZ--FYHH--7bwK--3KeVV-19ymF-456Wg-0cmm4s--oPB-o--PCDOOk-46F9i--7vjd--oSsBlV-uEMIQY3-0GwSv--1EeMF-06tTc-5Z2ZLk-2HUyYu-0dG4tY--3dhcV-1KhfF-09wIc0ea0y5OddePfiivc-kk---0--hB85hIq---PPqqQ-ACDhYBegf9nBoyOyOtzzxAUzUxrxzxKrqUSHnEyUzzOzbcXXe5e9X97XXXccX9Xee--1UpAF-SFcxhOX-1eB0xgo--Jd31--9KJS-9pBVymefBnKMUUaOVNN72Xdb-LMveiuLKJKMinzzzvfY2BzjEzzY3GK3FK4KOGKF-0Ji17-ueZcLLyvwzYGGK-0KK8igpzza9cc4aecw5eQeefeK3iifeyVyyaPysnzivW-yvivjf3G32JdFG5OJG-3--EB2003-C_GGF-0M4Pc--fYVJ-0L1VIV-1kjSF-0NOQ7--gXeJ--LIdm--AAXh--Kaimk--h2YJ--LYMm--fHOlV-4QMoB-1fQzGbV-OM1DQUKrSV17XV-PsGvQ--0R8xc-Pi9hLee----4n7gV0uuK8Ovwo_F-0SPF7-Tihf5jioG3-rMLqIMSxJfMpp51-Uk7-X7mV-1vH3F-0SiM7--ivJJ-4MU-YL--5j0_5V--MW4m-Ffnz4uebcnu-E0K3--4umFV-1xQQF0KULdhJnCaOX--5ji96o-jMt7YCKBproNN55-KC9-7-Pjp4LPbw---4zuVV-2-p7F-4VdEB-3g5r8awo-6q3GTnIBnBlaOaOV--kXLJ-0NJ5IV7f1wFOePedueiffjEBwB-FFFFFG0F7pWV6CJfCAHcXBnHgpIN5Ox6lbxrJpMSxbpNN7V56rMF5-7-X577V--lo2Z-0O25AV-28oRFJ__7yBm_ICCAEJgcnBdJonCBgegnJpS9XXe7nIKCSSKpxppCpKUrbzKOzaUUoUzKLOttxGVV557-OWtbVWV0a6ryX7X70cX1-cUu-Uy90zaPcXe90XX--AA8ER--Oap9--gnQdkH4b2ThSprSrUSrMSSUSxpMKpUSprMKrMKSpprUMMSrrSrSR6rbr--N--0X71d9-VV7e7WaWu1Zc-cVe95BcZe7917X7cXV7VX9eeX9--Bw-4--LXIak-9oUkasF-KdZHh5--QKOSQF-0f7Ac-DpZnLQC--5ifVV-2M_TF2_g-RhCKoxKSR7-6xX7OVh9-77uqCsLOaOKKK4K45PKaadudaaeddaejyeedeTsz--o-k0-nzuafiueskznG3FB3FG3EBnknEs4_OOGa_K03F-BBzvnywzvvzEBBkk-EQ93ASrF17--hcV8V-0ho3c-1r18a-KLsKtn9ghIKopJxGbzlz5PcOWWV6bZeVXV-erChLbuawo3F-0QgRIV0AS_oTz4F-0iqsc-LrVEayh0F-0jBw7-1raaM0sqwtimmmocCrUzKrUzbxJeYBexrSIoT50xMUUSrzrrxxxrppMMIrI9gnJzzaUOzSrSUUzxtbX7OsU-UOzrUxxSSSpxSrzxzrr57cWue-BcVX-X7X10bqN7e7ce7-7cX7eX7ecccXce9e9997eBhHmhBnBme7791-5119cXV-ATZeR--Qs0X--CxF4-2M-EHrMNVV-1s18b-0M09Rrc-3i33Gcy3-7r1pBmhExpSrcP9-7-3i6ThbzJ-0r2kLmxV-LsT9bywKF-Cl8ajc-5sg76o--RNyP--DBcS--r75Dw--AZP8N-CRYLYIrWcV-AZ_gR-hRb0Q9efBUUzzxrq7Ve9--DIcG--69X3V-2_KXF0CmrNBxUTN7e--DM2x--MBNss1qtbGTeeeiebfeviufifjG-FF-FK-2F-F0-F--6CEoV-2b0EF-pnx7hKlVX--DWBO-IrGX5pJgomd9Beefrr6rUttyNUsWaN9c-iuOLLLPjcnF2--0p_uc--uwAJ-ISZnnCIKWa---QgbdT-0_qJ7CprKy7917--Do60-0MPdwpc0LirO4eLzjezyyzzzyyzjzjzzzvvsFEiyn3OJFKKJFEwwKOKJJKGd_GKKG3JK4KJ-ESx2nSrP79-5j2XKaPVn--_t4Cgjtc-1wYGa--6ZPXV-Ama9N-CTK4nUSXX--2n3-F24thzhrHcXnIqUttxbcd97-3jCxpvh0-1rbiZpEa1-JjETd_azzgznzC_KK4F-0TTz2V-2nrwF-Ctvzgs-Dwy-LEp--Mcags11x3uLKKLPLLLOeNwzBknnwwzECF-0uAGc-ax4e5iii30---6dYeV-2pDWF-0v0pc-uxhu5KvzivnG3GF-0vS9c-Tximavyl4F0GTtRbKpKKKIMKorSKxcP77--50cV1--X-0jSM8x--MlFHs-PyMyriv3J--6njmV-AuIRR--UKqu7wjf1GaaeOdiaPdeeaeadePOdd_OGG3FK43G443G3G-nBB-En2B3P_3HKJKGJJHPdOKJO_aOeOaaQe_K4_F3G3O_8PKOeLOPeOK9TddJ01OaPPu_aOdaO__OKKaK___GOOOaLLLOd_-9PPeaPPefeueOH_Afeeeueuaeaieeeaadd_OdvvivzynwnnwnEnzzzzzznBnBzEEEEzznwzEnwzzzzvizyzuuaveuePv-wnBwwnBnEePaOaPaOLEwBknueaaMwzeeePPujjczvyvwnnnEuuusEnnEEEEzznEBBBkn2BnE2BknknBnBwwn2Bn2B2BBBkkn2--3Bk-k-F3F3J0F-BK8J-0-3Fl43J0JJFC0220-FFB--434_F02-3-FoF-3--ULK1-9jk6__KPzsnC-0rs2uxu7-5z6oLo-0Ua7Y--2yTuFFpzEegnKCAHYSIEIBgmnBen9mhJonKKpKpKIICCBopKMKpCMMMSxxtbbyOVNN50V550VN50VN50WVN-0a--0xLN-V--711-V0R4w-PfBJ-5sCnMpUSzGcVcX--36DPF-a3T2CpX7-21Rkb--7L9iV-3CdyF-D7K1E--E3yyLPB-AsdryprMSrUMUXVXX77X7-0lNuCb-0sh-cpsV-24z4a-0O5skoP--HJcO--8cjcVMwvW_PePffuOedddaOd_OLivedaLOQswwnnBwnnBBEEz2EknBl___JJF2-ddFJBB-kFJF-3Oxo3mryUe9--oNo0k-L_0tBtV-x9UXPVk0Kd_2QCCKJnKMU6Wy6x0a5OtWWaA9f9eX9VNhBeeOaOaK_aOaOOOOOOOLK___aLLLL_aLbzjjjEnnnEEBnEBnBwwzEzFnBzBnnnBwkBOJ3--9Q2JV0hFDWPTj03-0esaIV-4M3pF-DfxqCV-0LPM3-8fbYnBy5-Cq8_WadYzEwLK3--A59FV-CZXbR-2ghDYk--LQk_-0vCsPnTV-0OncZ--gxEe--LXbt-4QGLNnIMaTP9V-4d4NF0DoYGBxBttWe--LdTx--AJjgV-4fDgF-1q1n72bQ0Tq_fzyaLyy__JbzjyiyEvnzoEzz4K44GG440J0GJ--AQaoV-hj4xQW--QUtTs-0QzBZ-2hzuIu--M0W0-3QVpXzUSX9X--r954k-6-LVD--s6udk-U12pBUe--NKbO--B9nkV-55gUGAILAU-ee9eeXeeXeee9eeXeyN9eeeee9XAzbzzzUUtzxzrza1fzrzs7Xe9XmeeiUzrWztzbzzsUztbyUUrztzUzzyUVfzMzzzzzzzzzzyUzzzy1SzSxzrzVczzSpUzbrzzztzzzzrzzy1cXXecXe9zzxzV9eeee99USzzzztzSzzzzzzzzzzWtzMUbUztUSzzzrzzsD2xzxrzbxrzbVeXUzMMzbztzztyUWVX7cX7X7ccX8rtVX2Vc1gVWrVNOta1UbbaT6byOyTMqXggpFemnBnLpThScXXopfJppUhSzt_USUrxSxSzUUKwepzznMzUwefMzSCJXAKRemgegeeoeeeeeeXe99eACMxzUrxzUzzzPmeceeeeXeepzrzzzr9eee9e9ehUrxzrzryUzzzxwg-3sRUlgzK-1wGfBrUXc-1s_20ck-8lARQMsc-6sakWaUYsG--BJEyXtygSR0KGMwzkKK_KK_KJKK4JRnEEEEzEnwznzwzwzzzwzzwzjw3wkznnnkKOKGnEzwEEwzB0wn2vyizz0nEEqPvnzzzwjjEjzEEwznzzEzzwnvz2jjvvzwnkTzzzj2vznzvzyzzyzzwzzwzzwzwzzzEnwnknzfjvuzECfjDzEBBwzEwzEwzwzzE2vfwzk6njvw-nzEEzEzyzvjvLizyyzzzyzzzzzvzzzzzeOPPKd_4aPuwnaLK_aOezjEwznnn2EEnn2wzzEmwznzEn2nwwzznwwnywwzzvzEznwwnDPzzwzzzzvzEvznzjEyjEEnnwzzzzvzvzywviwzzEBwzwzzveznyuzjEzzzwznzjwzjwwztfvzznEEEnzzzzzwn2BwuO_fizzvzzjzjDywzjjEqKfyvzEOfzzyLjzmzzn2hPjjAwzjvjezvnfzzzjAzfjjqKOO___OL_KKKOK_LKLO_KKaKKOaOOLOO_ePLiKKKLKKLKKLOOKa--wN-ww--DBg5N-4latIyc-MYUfaRyCF066q1CJxa5X--5F6mF7z9BugfEUSrSArzxBefBeJcrrzbtzUzHmfUzzzttVX7X7XXX7XXX9--yKGGTsF-2mkw2k-3tQstjx4--BkdsV0DNK7PzGF-6B9ki-9tXkO_K_zznl-0RovXrc--OeZW-IRqTXoeXefUzzzxHYUyWzzzu9XZmZe7-1tmAWzJ-0nbeYV0DRxYTvG--2Dto7-0bYlJ-0nm6v-4DTdBTzyzvzvlJKJK4K-8wxJTrrrzrzOceXce9V-DTg9R-dnsbYExxryUzaeeceec-6bz2Lk-2o5Gnu-1u2YOv3-0oCyAV-iaLAUp--CCXRV2Db2oOOwzvnpKF-ppYW0bVVaOyUzzzrxpxpzPk-2eBMb-8xGoerUUxzry9Xce9XV2ydQ2OK_OjjnBwnJ--pC19-2uliNEyk" :
		au.pi === aAs + 2 ? df =
		"JJAf2uP6y-0nEiiuyywnyueuTbfevfvvjivivivjfvivviyvuuyEgzjjzzvviyvizvviuNziyvijvijfvyvgzvvvvfeu0-F-n5a_GG4KJGGG3G3G3FFJFmKGJ4JGGGG3GJJFJG3G3G323G--kLPeduaKGFGGGG443JJJJJJG--B-C0FJK__443-BJ-66wmpBnJopCMJpCCCIIIJoopKKICKCBnCKJgooopMIDOzzSzUzbzzUSyTUxxrrrrrP1XcXXX9Hcn9cceemece7cPIoeX0sWWaOWVNTOcTNNcN0V0V5-N0aOa-0V--N50a5Obyc-M0z3TPOdgBnBF0NOpxpMV7-M2mMiLbinz03F0sTx8mfrNT-2l6QEdMwwp-5XX7UMTP1V1GIuvaNn-5Xfxrpw5XV1GNTEfn4-_XvzjAAA9mfA9ed9fpzyTUzyUaUyOX3n59NTKLLKHPPPO_LK4iidea_O_QeideeaLOLLJG3-0eeddOaPO_OKLKzEznzjgnnzBykknByEYnByug-3332ElJ222-2wBko2BnBnBwwzwx-9Y6j6rrrkccc-E5ctEizpJF-aDYgSMGz-X10G6VyjiyuuPeiuzjivh3G3K3G--k-9JGFAPEIZSKBghKSMIpKpCJnI9gcXeccehHccoeXBeoppKIJoghIHnCJnJmemmecmfA9jyTUzzzbbxbV0WaTT-OtWWWV0zxtyUN6yUzSxrSqTUztaN71190V7-5V15VUy--V-lxHEg--33oL-67Dhyu0--3FoL--7ahw-LGYowfzu-0HFMIfF-aHWWwxxxcXX-E8ZrUdfVl--TIJLzSr17V0wcDLvivjysGK3G4XaJb1zppIJpBccccge7fUxx9eocX7cXX6y7Y99Heggen9nJdAHp9Xnp9IIJfICIBdCKKIIMMJme19eXxxp9X9VVfEMMMSBpooe7XCSBomccxxpHcrKKCMHmXXmcxoeX1mpJe70BrMJmVV--gxExIpJcX71nKCJmhCKKCIJoopCKKKHX8KHd9nKrKBj6xrSrKpz6xSMMSrKppwObaP-UzSCAICIKCIKKKCMMKKCpCMMSrrrKpKprUSprMUSMrSprKrSpSrUrUSxpxprSrMrMprSSSppMKprSprrSrxKSUSqUGbqUbbrxrSxrSrKHXXeggeYBnBgmnBnKCrJnKpIKpBnKCMMrSS9chKKIBeX77EIAE5OxIIKKKIIEKSKSKKSKKMKpKpKKSMSSSSrSzxxxzlzzUzzzzzUxrMMMMSxxxrrxrrxxxxzUzOzrbxzrxzzzw6w6yOtttttyUbbyTTTTTTTTTUtzIrzbzbzbba-71-VVV77V--7711-V1-1---51--1-1-V0cN-N5VN1e-ee7-1mc71Xe9fIBcVV0WbyOzxX-VV7VNN5TUzUu1ce9menBecmf9gxHc7c7V-777---50VP-V-N-0WxppSJpr6zyObzttV6rMKpUyObttbryUbzWaP0sNNOX757X97X7ce9XXXXXVc7-V-X7VX5-V7eeA9menA9fBnCBnIIJoorMIRObpIKMJpppSSSMSoeX71-V7777X97c5V-ccWV0VX77--NN55-N--7U5111cXXenBcc7fABgcX117X7c-gf9emV---1--XXXVX7X17579VVV117Xed9XecXX--WV5Uzz6zyUzrSrUUaNUlxtzXXXee1777X1e-5NOy--WV5OttttaTUzyUrxxtzzzlzMUrzzxaUttbbxWzxpSonBmpCCJpCKCIJpJooeACHpprSxaOV577U6sOWV-NNN70WVOWzwTTT5NUxryUba5NNOba1cc79cXX199X-91X99mhIHfJmXgxxxpHe9XccX997c7X0zV--V-N7P6k49V711-111X-77cX79mmeHeccV1mdbn_Uno-DKNVSo1-O9kaiKKzzEzpK-8_SLEzzzeeeV1Hinzjh3-8_UsM9mjtyTVBHk8AfiyvivizpG43G3GG--0OIzV2mnjMaLEBxn29mc4SSpprSSSUprrKprSSpppKMMSrMrxrKIKHhKHfIKKpIBpCIIJpIJnIKpSKJo1AKKpppxprSprpMKphIKhMUSrCKMRpMKrrSMMMMSKUVUxxUxSJe19efAKKUbKnMxKKUKIKUStaSrUMTUrzbzxxrSzzUy5SSKtbqprTprzSxxSrBXe9ghSrMMUyUzzbySKrUKpUSpSUMtV---D--0aN-X9997977VVe9XD-19XX1-9XcXXXXYxzUttzbV-7VX78by0rUSppKMbs5-V77V77X-X71--17-X-7V-0WWVN-6byTOrJepKpSrpxrUSSIKSKSzrrrs797c1711ObUSxxpSSSSSSy5--7997VV6z_rrSrxpSprs-7VX17XeXVXN-11-TUUSxztyTT5ObzrSSrzbtbbtUKzrxrSxzUrzUzShKhMKrxzzzxyMtzqnAA9mgfAAACKICBnKzbbWWbaOtbaOaTUbtyUyTTTOaOa556zyMxrUtaTUzrxrrrzSzxzbta5N0s-ee997cX97cX7cX7X771-V-aT--V17V7X1--V7Xea6ty5T5Mts5--5-550aT55NU_ySxxta5OVD--0VN5NND-N--8a6a5OsN1og55OVVOta-75OTSqhCMrBmhMbbtzzzzta--NN5-8Us0V-N1eD-XN0VOKppraT18zs0SyOUaOa5OaN1-VcX7X5OSpSxpMSra5NNObV5-N19cVc-W_KMSrrxxztzsND--MJpKMrzb_pyTMzUa5-0a5-X-VOIMMMSBnKKSMrMzprzaQBen1ceeXcccempprtzUUSv9mmfMrxzUMxpUUUrzbztrxyOzUxrrMzbWbJppSvC7gmenA9mgggfABgnBf9nBppUrttbzUzCKrSSxzbaUxPfMSKpKnJhRpIAIIKrSzUMMzxztyTObaTOWWaTTTUbzzrza5ObaTOWbbbUrSrStzyUUzbyN--s5T2rs-1XeXeefBn97VfBnIBemf97cXcX7bWV1111c1eiN7f-ABa6s19n77X7g97cceX7f11UzUppry-N0MMAIKzV4UW_rJoppza55-TMSsNObztaOa6KzV-77N-SKKSUzbaOaOyUtzzzyTUbtzxrsOaObtttSraOWaObzzzzz_ptaUbyMzzyUtbVUyUrUzzzzzUzzxyQMzzUzzzeeeeXee9Xeee9eeeefKMIKcf9ggnABemefCCKzrLf99X1fABgeeXAKSSMKxxzUSrSraMRpSxrQA7X7X9oopBo1N9gnIKCIJmmmnKIKJomn7emfMBc51997cenKMUzPmegmfMMSzzyNA9OzzUUIKMUKrKpSSrUrxza6SrMSrrMSrUUxzrxxxrUSSzSSxSUSxSrSSrSrpUrMMUSprrUUUUSpKrySzSrxzzxpzSppprrzUrSpSSCSRprSMKKpMKrMKKCIIIBohIBonAAABnABmgemhBmmmeenBnA9X9ecceeXX7Xemmcemgef9nA7en9kecee9eXeX1-enBkeX7XeXce92VXX99ceACBn9XX77XVVV--X7XemmgeeXXX997VVc75OVeX9hAAA7eeme9eXe9Xeeee9e9ceemmmmf9meegfHenBmfBnA9mgggemnBggfBnIHmmekeeceX9e9cXXXmoeceeXce9Xce99eXnBpCBpSrSrSrMSxzzxyeeeeemkeemgf9pprUzUHmeXXem99e9eceef1dbs17ecepKrMgg9XeXccX-Xeen7cXeenBmnBghCBgnBACCCMCKJohCCMrzzzyUzzzzqognBmnCKprMSMACKpz_wmoogepCKrMSMStUZkeeeeAH15-11-X9hCKMSRomcgpKzprpprs0z_rKppzrSrzSpIKIBgXmprrUKIKKrttpKzSUBomm97ghJpSyUzSzzzUbzzUtrzfAI9epnHceceemegghUUzxzWbzzrbTopMSta5OVOrzzUSKUUxrsOrpxQCSrIIKSxSrSzSrzUrUUtttztUtbzxxMaOV-sOWV5--NNOUzUzxzxzUUrSxrrUSrrSzrrSxSprSppprSpxrrrUUrbbtzrbbrztzzrbbyTT6bSyOa0aTOaOy5T6aTOzbzpxxxxpzUSxs7XESrKyOUrtaOa17zyUaTOaOSxprKCKgnIAAABnBnKppppppJnHnCMJnCCKMSrSSKKICCKKKKppKo-2AYFDB--MPns--j8uk-0TwQV7mzO6ievyyvFGK3F--qNX0zxzxrXce9c-3mKUw-DOJuzw9-lBkNyuuuviyzjJK43G000-OaPJEprzSKMrrkccc-1997-2C8pDo-uPOqwf9mnbbtyTV-2Jzv--5gXT-CCmSUvvGG--5xsy-0D-rE-4b-qzSqX7--sMmk-0lNEV-IZ0nk-tm6EnFN-Rt3BvgF-5ReOUc-otNAvisG30DRoZzUzzzrwP9eeecc-3uJps0eSSKRrMGzrzrrM-V-eXXeX--2fpn--6MiT-0DoXD--6ULD--E2lg--TGhs--wrkk-0uNAV-npyzx-0bkCEF-6EeL6jG-5bpJQAEbaV0nuubvp-0dya3mhrk--BzMKzF28zMOzrMUP779c-gziXufkG-2byBQrcV-J-IhV490elopIKKJzlX70V---2FCPyV-HVlaxpX7-x0_hzvvGGF-12_CV1o6LCaeB---Vy4s-K15tuR-0cH3EP-AFalyPf--1u44Wxxxr17cc-CFkqTusBG-2cO5jMcV3oE3YuuiB3FF0P7tWrre9-4GLRUh--19rRV-JN8nk-1B7iV-3OQA--cpNzV8oQxrjjizyyw4KKG44-1d-ezGV-_77wzvGF0eJQZmxL0V-C9jlvF09OI0rTX--JoI0k-PTDyyV-40oK--e5AbV7K29M_OLMfgznEB4-IfrEMASpSUSq-7-Nee-ANaSDyx3F0A69npL--1qoP6bvVF-qtlNxCKCUa0V7V0xqOguudaNznk-G3-Lvq2RrOc-2N7SOfvlG-2g3LFmnKUrla-7X--Vg031A1AJgoxMSporMSSr-XV--10aNXeV-y7CVQfz0GF0RIcNptae02XdsiLTezvzyyyzjzGGGGGGGGG3--GRVT-QXt0TTyyzwK4GJ-r5K0genCxtwT-V-yBnotTvg-F-RR4WyVBNuCtdejvYyi-knBLOFJJF3BSAjnMSzUbsX9XeV3t0vf_fzv-GF0wZ8bxrOe9--8AQA--HN1m-CZlGTLRwx-cmONzIxrprppKprUyUts-XccX1e97cXc--_7pw029QbgoonJUROV5-V-iJrguik4--mdjY-0tQAdaRk-BiCss-aMQLTjJ--3jUaV4tUqAvjzx5KGF-YB7rwfzwOeVuOXlO_O__Kbj2vizuviyuuvfeveTiviynvYziefiiefvfiYvjB-444G3F-0-2-kJ304K3GGG3JG34--F3GJ-IBbGxS--3yOw8PPd_GaaiC-Eueibvyvx-304--C-2IBzcggmeenCMSrwOaOzKHmnrUSxzTOu--V7VVV9c-yPFVPuf0-F0gt0ZpKs17-aTPhOiBFxRy2ZmgnJeeXAICBnBenJzSrKKrrSSrKpMKJnBnCKMSMIKMrxSOV0V0zzUKSpppSKSEKIESOV-Oa0sOzUrMKSppSUMMkP77V-0a1--VP-17--71--7-UxSrrrrSJpqOtzzOX770hBcX7V5--XXV11cc717X7X9XX999777X7e-_chDLLiiivYEl33G3-Vock29fSpSKonCMU5OaNV-NNX7c2DaQYtPjzvjfiywGK33G3G-0xDlzpUyX9V5PSx2jyuzVGGK-0CFZWnwNV1uXF0_fBo1IJJoSSJnACCCKppSxyUV-117-N711-6evlav4-JpSyQKUSSSpaX517c-c-yg6luPzk3F0CNJQpy9-iumBnaLKKeudOKG_KLKLLLueLOaQEEjEjyinEyzejjnskBnwC043F2-nn2zE2EEoKGKFASOdporHX8CBhzxraUqUzSlzSX77eeeXBc0V-LhikvW--KmlL-EfebDLTskk-YMe-RrMTV7V2uyCCaPEBC-5q1sjK6a7V-A2Ih-Aq892rMUNP7cc-TlB1tv--ANsVBjV2v6d6aOwnp-7qIGAIJlaNV1imQQOPszivwzE8GGGGJ0vODuRhCrppCBpULN5N7NX90WX-6gppqPk-GqSXfBnqOxtaUemec-5nnTs-YPD2wz6re9-3QGmz__bnno-2PJQD-KhKnTaaTn-nF-0Pg_N-aphUzj4FKhhRbmhUrKHohIzMpxrpKKKSMKSKxrU5N5OaUL--X11777Hf9VX-N7--5P-XHXe-0hhca-WqtqMCppppSJp6ltz5NVXV-X17eV0QUJbjJ-nREfwnBwOtbae-IiGGaLPvEk0-Er7eI9nCKpUa0V--1v_ZSfcl--0T7Zc0TwsLPNzgz8K4--MdCP-8jMTqMno-QTv6BfDUs-CjSgLdjBG--rknYV0vttlfW-0CxT2mcUV6Qv4daeffkn3J3B-EUOXBja1CjifiOvd_LdKKaaOaK--nBw8aOFFeeKbfivzjix3En-2Ennz-n-3-2UYTi-bkAQ5LLKaRzgwnznGJ-MWJCRr5NV0wBylcwF0D6jaola--BJZx--NfgX-6lRkav3--sx_2V7RUnUaK_aLLQjzzz-atBrI9mgmnICCpCKLTOaOzs0aNOWV9c-E9stskaiM_-pIJnKoxxzxzrUrrxzUxzSrUSzSpISxzxbxzzzzrzzrzxbzrzUta-0YBe7mf9eeV--P9eee7XXcecVXeXceA9eeeXX-c7T9Bee997n9X-0wqC2ylF4iQ5frxSUzJzqNX9cX97V1wr6EuslF-YbY3xSUaeX--x1Jxc--uDnn-6S8wKaPedvn-FFB-zea6RfESrSq7-WX-6pPVqNx-dun9rIIKMSrSrSxxBzbts7XeX97XX7N---2MXGF3ilDMnrSppGa50VeXcHjS0jOLKO_LOaK_K_K_LKK_JKK4K4KGPedaOK44KOPaK_3aefffeTzivizzzyuvkBzwzszEEnwnn-nzyzwzv03G00-B2EzBEBwzBwnEE2-ow4SEIJmcccxxrUJnBonSrrztzyTOts-9X7VX7X9-YvBN2wwwwzvvjjzzk0zOXTUyUxzV" :
		au.pi === aAs + 3 ? df =
		"C0DX0NP1V--QqeadnzzjynEEzzjjivdivfezjj2BBwzwnEzzzzzEjnnvYBBBBEBnzz-UV-hflzUUSrrUzSxSxzk0a1-V50K-0pMiudevf-zvfeBnyviVF-F33-yzgp3bVV02IKUrHnUzzpHz5UzUzSKrUrzbyNN-OzzxzUUUSrSrrrtzttzWaOaTUzSxxaOaOxrKBnCSKCIMSKKKKIBpIJoonIJopCJpJpCCCBnBggeXn9eccc9X7geXXn9efHfBnABemcXX9eece7XHXeXecegeeVV1ee9eX9ecc70eXcXe9enA9fAABnBnJpMKpKJnBnHmmeeXX7X7cceXXce9eeccXVVVV-VeXe97Xcee9f9eXeXXXXceWVWBc29cX7V-6aOaTOWWV-1XX17-NOtWaNVnBn97X-7cf9mmnBemXgece9I9eXXomgeh9eX99eeeemf9BmmeHgeeegfBggmnHoeABeggnIBggeeeecVI9eeemeXe7cX1-ZmfIKCCIJooonIIBnAAAA9mmgnIIBnBpKCBnCCCKKKMSKJoonIBohBmnABnCABfA9gd9mhBopCIJonABgmnJopCCKJpBnBnBnCJnCCCJnKBoggpIKCKJ-UMSGxrMMKKIIISrKpSKKKKJopCIIKKKCCCBnIBjSrSSpKppqUI9cpKIKrrrKSzyUpKpMxS5UKxMSrSxxxpSrSKpIrHxrSMSzHfrxxzUUUSxrSrSxxxrSrrSrSrrrrrrUUxryOtttzbttyUzzbtzzUzzxzzUxzrTTTTUbyTTTTTUbbxy0byUtzyUzyUzzzzxzrrSrSSSppSSMrRN-OxpSMztzbzzzVUrLUSpprUtxKbxBfrSKJpKKJonICppKHnKKJoopKISppSrMKrSrrUSSpxxMSxprUSMMSSpKMSttzzI9f9hMMMSrKSMKpprKKHnCSSKpMMSSrKKKKKCIIC9gnJonBpKAKJpJpBpKBnCpMKKCKCKpKSSSrSrMMMMKrMSSMKSSSprMMMpUKppSJpKKKKMKSSppIMIpKKMSKSpKMSSSprMrSrMMSSrKppMMKSSMSSSSSprSMKKSKBmgprSSppSIMzxCUzprMUyTObbyUzzzaOaUzzzUtzzzUUqOaUxy0bzzzbbtaTOaTOaOaObaOa5OWbaOtWaOWa555555NNOWaOaObaOa57-6WV0WWV--O97VWWWaObbbtyTUttyTOaNNNHV0V-N---9-V-777579775-0taTOaOaObyNOa5OaOWbbaTTTTTUztWbbbaOVOWaOa5-5N-7X--V-517T7---7-Wa0V-X7ccX7-7-77VV-5-7-5N17X7XV-0VN5-N5TNNNNN50aN-5Oza5OaOtsOWWaOWaOWaOaOaOaOaObaOaObaTTTOtbaTOtaOaOWaOaOaNOaOWWWaNOa5NNNN5-Oa5NN0WaT550WaNNN--N0aN7--0WcefIBf9en9geecmmf9eAAABgee9egfBgmeee7cX7X777cce5TTT-VVX1cX1c7197X977X7Xe79eX15hHX11717-7-V-V71177VXX7X7ce-V-1-1-----117--cXX77ce1-VVV-0u7X777117771177V771-717VV-977X77VVV-7X-OWxpSSMSrMKMSSrSrSy5150WV0V5OzJpKCKCCUzSrSSSrKrSprMKprpMUMMMpKKSpzSxxrUMSSMKpppSCKKSMISMSrMMUUrrSrUKSSpppMpSSSpxrrSKrSpSMKKJhSMKppKKppSKKSSprxtzaUTObbaObzzzbyUby5OtzrtzWsObbbtzttbtztzaTTUs-o-9SuvkpF---4GN0--Akuevkk-0Z-5DzUUzzUMMSrUUrrxzzV0k24nbEF-72uPs-31lfR-X0zvBgpOsN---Fjh-1VahUR-033plvivC44-bVp12CUzzrxpztzzzy2A979eeXd9eXXVGkPch_OLJKKa_OLujjznwwkzo-Eno-q32WRrMKpkV7-V--7jXk2-IvW9e-7xySpV2kZ-vaazk0-HWAOjKHprsWxta7ccV2FavYivl3F2cIsAppKMwN117X-81g-ifoF-L4N9UrkcVDFfPz___bjvjjEB3ByvEGJKK--WQlvV0kn8QjoF0NPnGrScX-E2V6yPuEF3-D6-ISGX-42b3rh-0NYH_ooy-3P8eEOJFGGIB-B-0-2043LaPdaeeiZ30003G002j-03-JGFGJ-4K-03G-3303330NBzB-UzzB3DvzuzByyfiivieivifevefjzyw-D9vlxqX-A58vaOYw-07nF-rFPV4lbM4aaabBn3B-mC6fBmmjSOa5N-25o35o--CiYN-gQSZPTw0--2QiX--66YJ-9FT6CN-BHQ8jadHQyddcyvG2232-F-8Hr8k--dcfk6dIezn9YpIBhC5Oa6y5UrWZmX70C2JVtUzzp4J-mXEjworrq557e-6IQmyv4--dmmEV-JuCMk-9SVlk3KDxRuPiueObi_JGTyycnBk--4-BF-eicPos02KqRDLPefeTiuiviuk-K33F-----6f9qfBnUWV-jMD3iO_aOaPOiwBnBnn--0evOEn5U5c1_T5ktLKKGTvjzzYp-w0Rg9s6ABmeWBmghJonKxCIKIKKSKWa6zzro5Uxltbe9e5OtVOWaN-N6w6y2ABcX17cXV-SWU2PBo-alHDReopsOa-OOYdiPPPgnE00--BsPu--Oo5J-5oKjx-AxeUxtaeeTeeffeuePauuvivijfieiivePgyvvC000000-3-3G35JG-2BF0-30-2FFFF--3hlWISD1-ER5o5evV0-0eu7_RjSSprzrSrcX7X7X7X--6KDt-HirDjBnBnKMba5551-3rQbzaaEBnpFJAmhxnKSSSSKKKKonIKKpKpMKrSKIr5UrNV79V1----V55N-1V1-7-7-X79-IUBriLagwC2-3jm7YKkV7jUvJLaLMeudeP_LPK3PfeaLeaa_F8aaLLOaO__KHdOK8__KeePOdaaieeeiiefifeeddddaaPadOPePPeeiiveueaeeivfeiuyzjvvizEBwwwzzEE2-kkBB2-2-kB-2-B222-B-k22-BB2-B-BB222-k-kF-B22Bk0-F32nyevg220-FF-0--0-F003G-G0-Cl0ab9eefxzzba-AX5ODuklF2RKFUonyUUaPXeV9sgwrddaLaPNn2BnEE0F3RULpn9opxbbbtXVe-Y_1riO_LKfvEink--0BfCIpy1V" :
		au.pi === aAs + 4 ? df =
		"EcA20EP9t--46idaPadePOddiaeuuuebieeiiivuO_aRnufezijzzvzjvfuuPKJFJGG3GPKGPOaTiiiedaduus2EYuiedn2nyffdv32--0202EzeRwoG--Ezzjevck20202zeufik43BFBFK0G4-0_J--nyioC03-0002-n22wyddyjfzven3Eyv3JJ20-zynnEyjnnvjizjjejzyy_wznnBn2zvnzyvzBl3GG3G--23FFo0-wzBB8m--ZISrMUUSpzrxxrKrrSKpppKKIACBnAA9mmgfBcee9cXef9geeeXVf9999199ge17V7Hgce7c15ABee99eeXegegegfBgfA9mgomeecXcXgeXceXnBrxSxxzHecefAUUJceccgce0AxBeXXXeceY9nTUJgoepCJnzzzxIBfrMpIJmnpHmc58EJmnrSbrMrUKJnIKxrHgrUzrxKCbtzprzxKISpxzU5Ulzq0a-NOzzxxzSxrprSSpxxrzrtztyUtaOaTObzxpxrUyObaOxMKBn9pMKICCKSKIKKCMKCACBpCACBonIJnKIHhKBpKBpBonCBmnHmgeme1ggeeeX17Xc7VY9e7emdBe97gfBfBfBfBf9e7X7cXeXc19eX-ecXceX9Vf9cee7V-P1e9cecX7e9X7X-0XcX7c97e9V0--O6glDk-BjnBnJpKKMSKrrMSSpSSrxMrSSrMKMprSKzUzzSI9cmgonCKIJppI9YKCKCKKSKKSMMrrUzzzUSMSrUUUSzrzUzryUaUyUyUbxlzzs7-V15X----V---NNccX-ccc0y10WeeeeV--70V6xUztWxMSzbbc6xta11cX9X7V7-X-eHeggnCISpKHX1V1X-7-Oa-N5Xe98HeVVVeeV0X9711-3--XjabvBG-0s7nSrxGc9-BFOunededziszBzG0-G-KF2NDz6rSzzu9d99-0FVIObk153LiReenAUbbxzxzrpxq--e9e9e-A1JTaukCF07J23pq7---cVM--WN3QV1khy_awxF-H4kIRjyV-oCGnvjx3J-16-Ny-U2iSDjyffv33G4F-CWtG2GxSUlV79e--2nbB--6j1s0REhiviizkJG4-4X-vYML77-ZHJ3Pv3-1cZeNponGtV-V4lDIreOiuBl-3-DAESjT9-r4cgTLLKKOaQjzyvgn3FBEB--1pnH-E4zQyafnG--5BKbgN-3Oxws0iCDazIKxKMMIr5OVX1V7759-05hoa-4YPwIzTXc0oS4-OaOaanwnB0-qYoDA9pIrzxzpzpKzzzzUzrWVf9cP1ceceVemcc7cV0H9uMvF-eGU9USSbuX975JYvsOLKOKKK4OaLJKPueTzjEzjzBn2zj3-Bnwn-B_HnzBpIzyNX7V1mi7bfz3J09L-pSKKCSrs5P7VX7-YBjWieueuusF-F03-0dhx_nILN-03vANuaQYl---6b56-jf6VcBknBBn-Bk2BnEBkBkn-BnBkBw-----n2Bk------kn04GKKKaOaO__KKKPLOKLKGKKLKaKKKKKLLKaOOLGKKK3KaKLKOaKaOKKKG3G43G3J33F3G4G4JGznnE2--G-G3334L33G43J-33JG3KG303F433GK3K3GKG3G3k3GKOffaF--GG-FG3---F-3I-3F0-0303F40GGG-G03GG4FF0--FF2-----0---k-G-F3--04343G-G3KG030-0-Gk-2DwkG43F3G0-30-F3F30-00-G30-0-F-3--G33I--03FG3303F3-I0--3F-nDtfefeuvfideeviivfiuviuzwn--B2BBB22--wn9PeLeeLeaPOfjzyvuiveuifhfifiivevefffjiafjiuifeypeeeiivejEivjiivijfiuieiiueuieeeeeafieeeujvifffiuzziviuzivieifiififPivfeifivPvyvijviefivevevafieeaOeueevfeeveeeuiufiaeefifivizizzwmznEzzBnEzBnBnznEzzzzwzwEzwnBnEnAyzzBzzBn-nEnBznEwzzwnBnzzEEzBznnnBznEk--22B2zkzwnnwnzznBnnEzzzmvwEEBkBk-B2znEzEznBn--kBnBEnzBzzw---4--2-n-RB2Dvfzn0n-kB2BnB2nBknBBB2-n-3-KK3JG0304-G43GLJJK_K4JJJKJG3F43G03F3-Fk3-3-k--FLOadeOaOaOOaPOada__aOe_LPaPOK_KOGGKKKKOaOKKJG-K3Gk--nB-FF-3Rk-JGGKaPPeaPPeuieW00-FF3G3FFF--2-J0-GJ43G3JG-0KK2-3G3G-3F0-3G00-F4N2znB-3jEzzBk-ivzzfjEBAzievivivieevivueiuiuufivzzzvivzuivivjvyvzejvjwzzvyvzwnnBzn_ejEBzzEB2-LOKOaMBBzzBnzwzizieveefifieizzzvyzzznyyvzznvjEzzwzBijzjyzznDzzwnnEyznzznEnEEw2yajzDjwBvnznEnzkzEznivvheejwzjefievveyzByvnmeziuvfiyvyzjnzjBwnkzaeO_PO_dLLG4PPvjivjivjiuviyviyzjwzwnE2zBnBnB2-k--4222BzEOOaeiejxPeeuuuuqeuaeeuuefifefefeeffeuuifeveffeueiieuvfiiveufiivvfeuuiuffieeuufuffieyvjiyfeveiuiffifefieevuiivfjivvjwwnBn2BB--BBnnBwn--2-k2BBwzE---0--0B3F-k2-kBB--k---JF-3B---3F03-k2--wkzEn2-B2wEEE2Bn0BB0-kknBkwE-kk22--eUSCSJrLT7V71K0YLtevvyl3KFzwGJ-DWcRRqP-hG7KyLafizivwwG03G0F-acjpSSKy-VX-IJltLePvV---PeSVrBgmoxprMRTTOa77X77-0N3vk7eoElnII93nzSKBooUSX0aNX0a5V-1pfNUugBJ-9iOdUNV-4v1z-Sfs-zBgmX8MKAxy5NOzKbse7V-0U-Fk-1y-lV-4x-6--g6bj-3L4kbaTYn2J-apmECIJlaN--MR8FTPQYEwpGF-2W9GV-62Hz-7i5cMKKGV---y2dwQvz4K-NgIMwmnUzJopKCCKKIJnKKpKSKKSKMKrMMbrWbWtaT6a550VN---X157cV-VX77VVX7ce7V-nZT45OKJLLPzjzzBz2wLJF0I80TwpCpzpOWa5P7eeV-9fnj-3pOZ6JOX-2f5dcs" :
		au.pi === aAs + 5 ? df =
		"CoE-7lR-YWRa2AEJenMxJpbqTObaOBcX5NeW_xnVto5UUzzrzUrtxtxrMKMUSSyN1XXV5NNOtaUUxzztzUxxpUSIBpSSyNN1aUrSpCCIJpKs50WVNN--7N6bbzrzxzrrpSMMSSMSzs9X7-X-VVVX99ccVVDUV19D--998a6rztVXaOV1771-78VN0V0V-7V---YV7Xh17XOWWV0V6pTOs-8V7XXpCF5-N-N-N-N0VObSxrSrSUyN-aNOsObrxMABnKUaUs-V1-N5NUzrxUWbzUSxprzCKHenMtzKoopSSSzzxxrMCJmnABegmXOs1ABmnCSKCKIC77gcepzSKBe9XfKrHh9eprxmnKMKLmehKCUrSrII7XnMUSxrUSIMpIABpryURpMbtxrrSrMUWtbzSnKKABgnAAKUxztrMUxrsObWtWzzUttraOtbUtbbVefaOrxxpStySStzVXaNTNN5SJhSry1zzSgmpSM9mmgofKpxryU_rUSxrPXmhMQIKSxrUrrxSxrprKLpMa-2V7Va-OV1XXAI97ee9m8a6TNSxSzzrtyTStbtzyUbzzbtztzzzyObaNObaOyUtzzaOttyUMy-f_zztztztzzxxrSopKprKKMSzrzzxzztttyOtaOaOZnBnBmn9mmmpMzbbzWaTOta5UyObtV9eg7XnBNN-7-ObrTUzztaOaOaOaNOa555-4KCCCBnIBnBnBnBpzzSzzxzba-7--6WV-1--771-VV------71-----NN-5---OaTOaNN---0WWWaNN56bzzbbaTTTTUCKSSprrSrMrrSMKpKSUUrSxzzzttaTNOaOVN---VV--X--1N0WVN5-7-0aN79enKBmVX9e9177-X770Ws7VX-WbVccOa-7OtzaUzy1WbyObaMxyN6UV4rUUy4zzaOaMWxyOzrzxrrTOzUUUrztzUzzzzzaNN--770aSSSztV-6rxzbbs5-NOUzzyMxzUxzV-1X9777e9gf9ege997VX7X9X71MMrV-V75-gnAHommmgf9emem9eefBmenA1AHmmfCC9h9m91AIHegn9emnAABnIBmV1mmegon9f9mXenI9fbV1ge7tzV--cgoon99gc0s76tV99nCLo1977Ebs50Vf-AKJcc-1fMMKr9c7-Aa-1mpBme9c-5OWWV-XV-50a0VVUV---1N18xy11--V1717V-0a0VV117V7-0VcWaN7Oa6aNN--OVV0SrWyUxzVe8UxyNN7X2bVSMVN50bbzWVXhH7aNTSraTObbWV0Us0WVOaN55OaOaOV5-OsND0tbzaUrrtVXX6rrV-X91V0V-N-V7X17X99f17X1XXeemXcgeA9hBce17XpA17fKKCK9e97hSrSHpomf9ABpSxHpKIKHhHhIJhMUhKnKUrKKyICCBnABpAAJpKBnIICA9opBme9hC9nCKQ97-XhJmfIKBhJoXA9empmpHhMTehICIBehIKSRkgomfKQ1971hKxQBpprSghCCJonCKKqpMSpBX17XhSnBopKSgpKopnKpIJpKSppIJprSzzKMTTTUQKMrKrrps5-KpUKKSSpMppSSKrrKMI9fBnBpHnK779nAMrSxzwonBmXXppQAI9fCLmhBop-s1-WV1hKBAJpBofBegp9mefKrpqfABfKzbpIAKMKHpKKBpIBpqmpKKKRnABooppKpLmnKJpCBpKABoonIIJpBpBnIHVX9e9f7ceeceegpSRe7f9mmonCJpKSpSQIIHn99cXee9mgf9Xce97V-5OV511711-V--7X1--MrSTT--VcNUUWV-7971--X77c1-VV-V1---AJXN--N5-7eYWs17Wa---cXcWs2aOVgc1ca0tVVD---V0V--55-1eX7X511V-8V5-ge9pMKpKJoepIIBmegXc-fCBmgfCIABfIBogmnAC1gnBnBfAABgm99ggefBXXccXf7VXe9XX6ba-XXX7c91X7VV7X1VV1-D0s55--6USrMSMSrWWbzs1menB1N7VUsN----2bVemACUSKKBk-VVfICKSpg9777--7hCSJpC-----bsN-OaOa56rJnIKT0a5SrtaUs99150zy50ty-55ObaOzbopHpMWa555Uzs9ef79gf9eopBcgnKRkAJomVa0V1da5-gnIBmWVVVWWzV-VXAMLkVVXNOVza-1hRmVNEtSrrpMSy17VTN1mgX7X2yN56zrMTUtztzSxzMrStbtyMxSppKST-V-UTUraUy1Xe-OaN9nHpKLegA9a1ccX1nIBcXXXcXcefA9gX7VVzs9XVbzyUVef-Obzs91UV-e9WWaUWaUzrUSrUrpzzUUrsUrs7efB999e971ceXX9ec7c4rMyTN11X-SprMMMbVcYa4xzzrIMpry1X-V19ge-zza5OzMUUUKpKps1-1OyTSzKMKnIKKSy1V0WxzT19XX-V-Xcf7gekcaUby19f9mdtyMtbzxtzSrWUzrSyOzzbrtrV9gXf1me-eecaTMs7cX8aTTMxSrMtrxtzrKKs--VXDOxSSSSCMUy-XUs7gV97V6tV6xprV7tVA8ySrVEzzxRopzbVXOVaUzbtzKopxRpMrV5StxzrzUV7TOVgiOtbaUzba-emVOtbaTObtbzbztbs9emgf9fBggf9mnAKRpgmmn9mmn9egge1-0ttV9mmme6a-iUbbzaOV7NSs5O_s8baNUVaMT0brs54SMMUICMaNOzzMsD1eeccXUSs8WVObttVVgfAIV71g7XmkXtaT2rxrSryOyMsAxs8a5UKtWWxpKztyObWs1mmon9Yy-X7N9on8V5OWVaNMMSrStVXVcV0WaST-aN55OVfABda6bUthMSrT17XN1fVU_ttzyUwprs2zzbWa6s1eopAA99eef9ttbyN9gcX0y-VDMptzs9cdV6s8WvKy0zy171OsUxT0V2brBpMs8s51kTTUxzxzxxrV17es1mfA-egeiTTOtV55OtttppSzUMV199-8bbrUVcAtSrs7XX7gnBnA9eTOs1cT5T2WxRpzbtyN9bs9ABkYWbbaShMsOWt_QMIKKxzT18VXTTUT-1hPecVOUVbaUzUU_rSSUVVX8tzzUT-ce9f9VemeeABfB8a5UzbWWWzzbbs6tSrVVWxrV79f755OWtyUs1-0aN-OUKMpry-c17aOzWUIMKprUUIMa-1X918V770aTObyUxIKSIJpCUVNN5--sNOMVN56_pKCJpSJoonKMVNNOa---OVsOptaKMT55NNUrKxxrMMT11115N7s9kc9V9VttMT0UTNO_xU_nJpUs7NUSzzSKKUMUts1e1T-c5TOVNOaOaUy2V50_zSUVX119X7USxs7--OzSCUbbKSzsUxRnCBnCCBnKrCIKJnIKM_pUVN5NN-7T50a5OWV0aNNNOWWxKKMBnAMxpIKKIMaSxs1X6rV-D6V-sT-UUVX1e9Os7zy-5SMUTOtpKySqpCBoe9nCTURnBpyOt_oonBnKttU_zV7a-5-tWWWtxxrqpKTOttSMsOrSxhBpT6bxSxrtUUIKAA9nHpHnBgeecf1ee9XnMxzxrUzUQCUxSs6SompyMs-0rSTUxtTMzzrrrUV1-sSxs777UrrrUMUtzUpMJn9e9ee-VhKgnMzUrynKtWzrzzzUxJpSKJnACKKs0Wba0V--UTOxyUrxzxyUxs-xyUrxzrUzprzUrpzUrrUrSyMrUSrrSUUUSxUaSfMT6xrSzrUrUUby18SrSrxrUpMUTNSUUzSSKSMSrMKhSzTKSpMLpMCSCCJopCIJpJonBonIIHnABggnBnA9nBf9geeg9ecce9cf1e9mm9mecf1eeece9X7cXXfBn97V9eA9cX7XfMQB97cX9997VV7ceXXnKSxxpSKxSxzQMUtxxhUr9Xs1AJmhUzUUSzzKSz1hUU_Sz_xrrSzUMUKrSxprqnH19pSKSpBpQABhMrKSxrKSzMBpxrppIMygpSrBopryKpzKy0nMMzba0rrUMStUSpSrMryMrxzbyUUMUty5-Ortbs78V77X77--Xe79pHfBg997X7X7X77ce-X7-zTOa0VV75TUUzUrrxSrrUrzzwfACKrsObs6TSz_zxrzxrrrtVN5Sy-4W_BQCq0c--5XUc-X5rCBxMa7PVDNUK-nSJp971_ESHe-mocmeKzxIIOxttzsTT-Ota0ee-057TlBpMMMlsOV7Xe---Z41V6NZVgpBmXJgnKMpr6WaNT0c7--3XZyYK57-DXainASrrUs-cXc0D9q9BhrKpMy6e7VHVV-19qEB--1him-7XjEvIohy--0DA35ggnKEGzTOs90X7-DANdhT7-7Xt_vISba9c11AoEBnACBxrSxSa0Wbba7ZmcWXV0Nl-LpUX7--232P--Y4hn-1NmHcmmnUy5--yBtECSKpGaNP197-0YF0nN-QYKBvKofomhMUtzba-1WcBcV17r9ZnpzsX9-4YWUUKaNc-1DHqB03YaRQJjHc9K9Mp9XmrHhrJhromghUxoOVT5OzMxtV5VNT--7VBc--DVec-5DXQxV-9EWOSk-7cyKynBpBnABoopJ5OaTT5NOs-OcVH7zjtnSIAHcgnCBomn9gjzUxrxCBeo6yT5Uc5Wzxru-e-Wy0s0aPc-39Fz7gpKSBcCHgcWggnIpRObztbxHggpoehryP6tbaT-VN-17---ZFFrV-t3OTpa7--GJ2c--GJFN-5GL3xc-9GPigq-T84fLpBpAMHpSBfACoemeoefCACAJrzttaUM5TUa5TUIErr0WWxOtWaOzyNNNN77977KACKBnAC90aTN1VN-7c-eGPvhSrq0ceV-1GRaD-9ZO8jSpKF--7--ZPZE--O6VKyV1O6qJppObVXc-aHHGgonUbVV-1ZZurAs1XHQCRnMzMppopDOVNWbttbYBec3mgce---HWfN-LHY8SS5X--09ahV-tAuEpN--TI4hxDUT7c-PI_QzrqXX-3ZxNzHzV--ZyYEV0dEl0pKsV---J06s--J71N--J8is--JDws-5JFcRs--JKrN0iJQsgnonCCL6xba6yOWXe9e--_6BUV2dHDArSUrz1XXX9-E_ADrICMKoN176X--0I2AV58JkgmgfIIICCTOaT0wNN--PKIxzUTcc-3_KPjIqV-1_MDbCV0yKYtSHpIpCSKHZlzLNV-10V55--5Kcizc-9KeMwq--0MPIV-dMpxrc--_Ul6V0OMzAnSN7-O_Wd6ppSppKMwNP-7X97V7-F_Zn6CzUrMOX9Xc7--_a82V-0OcIV-8OxHk--LW2N-DLaXxTX--4fBH-2_fwzLPV-0QFUV3OQn6xKMSxy0X-ee7-F_tjEBemhT6zzP7N-1_yrzR71uMvlwxIBemeefSu6zp9zTOzq-5TUxxWc9A97-9N1TU5V-0Va0V-8W-ps--NFDs--NFLN0aNK0UKptxxxrUNXXX9997V-DOBAzTX-2aJfQBy--0a2hV-0a3SV08aU0zT9V-taUEntc-5OtESV-eP2MzUSk6e9c-XPIwxMSN7VV-ddFArc-7aafrpUq-e7-TPquRnTTNc-mPxXxrrKlcVV9-3amCbSkV--5oXa-Gat6zSSzrUR7X7ec7-HQgPwxu7-9R1zzP-1tkzEmgj6zzXc-2b3DrLP--Ol2rq-78lqzrHegrzzzKEUTN6seVNcgeX-kbAFvBghCIKIIBpBognIJpMKSSxUSrSSxUrpK--0ogPV0OpIUnBOs-SbSprpUSI9jxa6aPeWzz5XeeV-PSyVwpEsV-CbXszKCCGWbsV7-0bZmzN--bbTv--0uTlV08uUInDTV-OulbqV1tuqQnCMF-5Ue-2bh7jJP--0vJ6V-0vjlV-OwCMqV-OwVCw-0twdKojFTNV3dwdbnUSMzs-PCA91V-HUDFBraV-5UKsSc-DUR5ByP--6rqa-2bsubMc--tyOApa7-yUdojJmnIqOtWV9--bxunV-0zWdVAOzeUnxBmfrrICrUUUUrpHzWVcWX1175X-Xc--UzJs-9VELhk--e0DGpX-2c8yvE5V0P1YAmzTX-Fc9eEBhHgn5Uta5N-OcBY6pSrIAUJgTOa-09We7-GcENbMSppzye9777c-9VzggtV-94IUs-9WO6SNV-95_ss-DWdaSDP-mcR2MBoggxrpUzzKSEzxUqUyX9ecWaNVe79V79c--WkEs-9WoBzNV2u6I8rMJpGaOV7Xc-9WxeRyV197X5onrsN9-1cXrMEc-uXElzMKM575NHe-09AHrpNP--1AZrV-eBC4rX--7ndq-4coH6ETP70HYKWxSMOxxc9XWbkd9V-9Edzk-HZ0xhyPc09Z7pBmpSxpy5O9V79--82Ca--86Zu-2dAgzUcV-PI-Bq--eIQcrX-1dKuADN-H_k1UrXc-9_qWSsV8uMPGmzMTNUUUSEMSxxze7e71c-XHee7-Ha0vzScV--aLfs01aO1woxIC6a-0tuc-DaUtSq7-6dh56pM0X7-7dp2zMSR-X--abWegmjUOWc-EdszfAKSzV5UNe9V1PUQ2nABUzc7-5by5U---cAvN--cHps-5cLGhV-DcONzR7--98tL-4e9eMrR7V-HciUxpX7-udBoSJfErlbuVX-29aVfmxIpGa7P--DdjHRtu-6eW7EKSN11--9XeD-jeZFrBfCpCSxpSrzJ5TUcOzaOXfBh9X9X--1c-1eGYR-5efWrCracV-1fXrV-ufyWxkV-ufAyBoeezUrzV-V-ugwopa7--fJNN-LfPwSpkVV-9iyzs--fqes-ifsnRxzxyXecV0ejZ8nMbe7-9ftmzP-FujbporSIzSpMUISCxzx-VUzrrTc6zy7Xh9ecVWuXX-7mcVHe1--ejc_xc-3ezMzK51-4ezOMKGV7-1g-Dw-Rf-nQAA9gnpMtzzzbttXXX7e-1f-oITV-agD2xzola9X-Ff2bjASrxSr-97VV-4f47MJyP7-9gJYUP--9lWRs-qg_aBfJxrzs117--gavs-PghqUKGX---fCFz-09nVOpqV--9njxk--gyON-Dh4IxL7-2fGYEENV-1ob8V-upTOpa7--hVws-XhbrSpLOcXV1eqiCpKR0yX7--9qk6k-PhjSS9c6y-7fR-rUrR7Xc-ehsTBgrqUscc-PiJ1hASaV-bfaA6AI9MMMHhzpUbzOyOz1X97-1ge7V-1tzIV1uu69nCrtwP-e-9ffCUprUkVXc-5fgVYCM5-V-9vpss-5jH-E--HjT-wxu--XjYHx9xSVN-19yPqognyT--pfugbS9rSrSMSrzpaUpSUMSkVV-VVVPHgccX1XX1c-9jiyz5V0Pz_GnSN1-4g0rMKR-7-HkBVxlu7--kCK70LkGUSpMSrOzuXWse7X9-4g57jrTXV-DkQfwxX--B98T--g9En-1v1y0pKorN7-7--gDm6V-v2vCxNV--l12N-Pl34RxUcX-0gHXnD-7gHhbKrq7X7-TlB1xMxcVcJ1lBSSrSSppzUzxpzT6xSSrKrMJopBmcXcxrMRUSpMKBgc7N1cX97971AMHYSSrMHcce7eVVN77XVX7-Oc1dMSHooe-V-CMKSSKq1VUpkUSrUSCMMMUSzSprKKHexxrSSxSxxyUSzzSUUSpSpSxKKBhUpttx57OaP0WyOaP-9-0V7X5CHcV77X1VVXXV-97cV----0c-7VXcY97X7ece1XABcc9--23yxV3v42inCMKrbVBe-0xXV-A4Ugk-aliIwpIMs----BS4D-2gSBER5V1v6fGpCCptV-X--BTnq-7gVUzKKT-VV--m1DN-qm1FRfpppNVN7N-DmEsxT9-QgZUjCSKEKR6xGWe57N-ZmVV0A8RQxR7--A8TUk-imT5xSTTTd9cV4Q8thxpponSpTN7-X77V--mZcN1immTUMSKCKMR16VUSprGbxkXBcVcX77V7V-TmmkSpUVcV-un7nSrMSxkX797V1ABckpMba99-0go5MN-5gpKjMMX7V-QCSMnV-vCllpk7-Pn_7wppc--6gu_jIIqN7-3gwCEUP1-HgwGzMMMSxlu7X7X1V1vETrmxSrTVX1--C-0D-Eh0RESoxSRN-X09--AFrbk--oIos-aoMTSIKFN5--5h58vIRNNV-2GitV-vH2_psV--oc-s0aoc_xKMSJe9JUUqN5P17VV-XoimSI5OycV-fHxjnk--CB5q-0hHcbN-VhHl6KpASSSKIMxsVWyP77VXV-7-HpEKxUX7-mpKbRoeKSo-NN--CNDi-7hOczxzTcXc--pboN-DpiAwpV-5hTmMpR5X-0QMjrnMN7-1hUQAT7-HqBoxK---DqWZRr--IhdNrKrSzOV5QBeX3e-9hfVIBpUzX17--CfpD-phgbjBmccjMJrzke76zrrMMSrUrpSyc17VVX7X7X7-HqmXSSX---qmvs--qqEN0HqtqSrxKESrNN7Xc1XV-2R4lV-fTzpnk-1hwNUTV4Prr2xMJnIC9EIrJomnqUKKCJeIIMOxp9MKzKSr6XX7--V57OV70WXV-5-N6a--V5fUUEofHchpKMOba7X5UTP7-0hzqEP-2i1rMSX-2vVmOnHpplxk-WcV-9sS7x5-2fXLhnESoxu7T17-2iCDURP-3fYKfrK9fISr6s-57---sq1c-DsqBSTX--DFu5-1iHcjR7Bmt9wxogcf95IIESpAAJegxUJfxI9onJeCrrrUrSUSSrSpMKSpUSrMKrMMMSMSppSKCyUUz5N71-0aP5OzyOzUSrUN6aOX10ty-7-0s-7cV-7X1X1-VX9XX7e9cecge16yX-X7X7BmXXcV-2iHoMUcV4Q_4_nBrpyOzSq5cXX7c-HtGWSpX7--tUGs-5u0pzc-Tu6aUSS-17-Tu7VxACOa---u7iN-5uEYS--5uEcz--auFlSKqNO99-2i_aUGuV0QdwKony7-BicpMJrMSc1-5V0feEApSWcc-5uYrSV-1uf6R--igpMV9vfYUppKHexxMzxxrUROttX1e7cW97HX17--2fYfV-Qf_oq-0Afj_rL7V0vfwMpMaX5V3Ag7opBpKpT575-7--fgPSna-4iqejAoOV-avQIxxrycce-0isQUF-1is_AGc-LvkFzM5X--fjqbr1--Dz_T-6j-zjASq75-1j1jzlc-9wL5ww--2lNpV-flSUxX-3j5MbM5X-Hj6HUJm_prMSk--7X--vlsIpk7-HwadwjOV-1wepR-2jAT6Ia-1fnTTxHnEy0X--Anark-9wvRwtV5QospnoxMSOzr0aNn9X797V-Qp0rq--QpG4o-0QpR0mxlX-4jL0rSq-c0XxPBBfBnEMKKyNNTOVN1e-6jMXUJlz11-EEgqwecX-s5OaSs-AjV-jKppq-17c-9y-hSkV3fsD9ppKIKDNNOVV17-Ty3bxJp0V--9yERww-0Ax-_npV--Ax2Ik-9zfaxkV-vzr2xk7-A-1BRy--3-zvV-w0lpqTc-I-kixr-c-A0MPENV3R55SnBpKkWa0zGVX-nkNrfACJeonMrxSrrrSrT55-IC9e-0ztVNX7X99--35IBV-R5UCqV-35iqV-w6ltpWc-60xjx--A1PugyV-B95ws-E1cpgpV--ki4IV1wAqXpUTUa1ee-4kl7ACOa7-02LhN-02YwN-I2aoBjy7-f2fQUKrScVc--I2gExS-V-b2tvSppo-7X-0kyWUF-1kyZMq7-036Ns-M36nwhr---RFUnqV-BFvKk-03Kgs-A3kyxNV-wI34p57-644wwN-64BcS--04PSN064PVSKSTUF14HcWc--BL4Uk-64ckSV-04jBN7r4jQxHppKKpMJxHe7V1-ecnIIKABoopUSognBnIAUtbotyOyNOsNTUSJnKq0a6ztbttVOzOVOX-5c0a5OV1XX7Ze9jpI977AI97--lSWj-FgMRSmf9zbrpzMKc0bxrKESxrlVXHVUbbpSkV7XccomXX9ZcP7-E4xwwja--lXvjV-wQInrsc0Q5ozSpKEryObbuVgce1c-Q64OwhMWX-0lmZbk-0lpy6P--GtFD-2lu5jKVV0RUb6mp6V-0m9erN-5mBT2BjNOV0wZLzpUk5XVPBZWrmmmmnIJrMSrSSSSKSMUxKpKrSESpbxSSrMOts7-7Ve7cnA9119-Oa0Wba7V---V7---ece-cmKJQBmp9ggzzrSKMMy-OyTTOX7X997X06mLdEBgnABnIIIICCAJnJpCCJnKJ0a5OtWa55Oa0WbaTObcV0WWV--I8QGBxs7-U8RIgpzs7c-29W_w-3mdg6Ctc-0mguE5-ZmlOjKBmmonUUUUbw-OzwN-VHmc1eV-wgZprsc-rANbgnKrUtX17c4UAhBhBenHYBocVgprSCHZnrrUMSxHnIKLOa-0VObaUzxWza0bsNOy1X7Xe9n9cV-1n8XjDN-IBkvzxXc-2BlYi-RnBjzIEMMKppKKF51-1-0V-9--nBzMVXBp7smn9f9XehBnCAIBomnABmceXeZegccZmonAAIBnKSMSrMVc57OyOaVUzWzOzxxzzztxzxxrrSrtbVOWtVN-OVP7V-0aT--RstSq--gtJnqP-3nilrCq7-AniufCAM0bbcV4UEFHBomghIHoonBnCKpKICSKpMxIBnJOtV-OsTOtsN0aUX7VN---6zOa--7fJe1-7nuYnACrtVc0EFVzgfBofKUUaOV0a73zH2ShKICCCCICCIBgnBpBpCICKpKCKRN55N-5N5OV0a0aN5-NNNOWV-NP7-zHTMwnJhpJ5-OVP-5oiBECSkV-0hBVAn9M6V-IIDDgzZc-2IgAR-1pHnrR--2KH6w-4pLvUIOaV-0KUwN92LmEgfBfBgqUSCrKKKBeVUX5-X4JmoocX-57NNmconHdBpJce99pKppppKIKopMrtxxxprKrMUStaN7-6yUza-7X9775ObzzStV--51--N-PcXX7-ILxOwoOV-UMCUghM5N--AMQdSNV0STQGrScX-8ptlrCCCta1-0CTnYnqP-0SVFsrM-70Eq1sfHnA9XcYCppSKKSErrSSCzpUUzKTOWaN0V0WX7VXWa-2KBme0WX19c-4qODnHrVN-2OnhB-Cqb12CCKJ-UcWV-IqjjQSrKAMzTNV7VXc-Nqu9fBnACIHnSLNOWWaOV--hjnFrX--r-vI-1xkFZpprOu97V-zr6zAApICSUpzKUxlyUrwUxKV56a6a7VVXY9_HmmeXVX1X9V4CmRVp9mrMaTUxT-e7c-OrAdfJnKrrSrrsN0X979X9-0rFTQP--MKdX--M_8P-DreVnCCSrzVVNec-AVFgBTV-T02FyV0L0slMs1c-6VTDEc-6V_Ajc-AV_JBtV-D5hsk-b_7iwnSROX1--OPBa-1tQurDN-Ya80xERTNXV" :
		au.pi === aAs + 6 ? df =
		"DwCd1sP0j--RaO__ddedddifv2EEznnnyfEeRwyzBBBB2Bn00-17-2fEMK9dCrtzUrrMMqN-X-789V----Sf-T--yfzIrzohrxy6kX6rSk16k7---11J7Z-35CISoOxsUKESpEP6qOV6pJp9mec17cmhpxUSogfBnMMGWxptyUUzc5UrtttzpoTOV6lVVZme-gcfBc5cUrztbV73cWztaEO-1I5dLOfvkygzEyaOdzjzsl2knvg2EW2zEznvzzyzyfyyzzvjuMyzdzjivvvyyinyaTVyydzufvevjgwBoG-znzdiEdbg2vkyjEyiazuK_4OGaJaPjzYnzzjBwnvyfiigEnuP_vjuiaOMdezeififiiEfgzfusnEeO_ivviEuvjzyzivivivg3EjuyjiezjjisnvvEffvznviyviYEYyzjygnBz1_Fl-zivjEzyuwnB2z0434-4G304-44-CGJFKJEK42Bo-38G-340403LK2kl44G_GFn-G402l2x2433432vuvfvY4-l-0-FkF3G-J43G3FJ3-G5J2---20L-Y-8CqLKOzvEjYn3GF5N0A3mrIprrIryT1Wace1XV0F2MKYo-H05ahSVV1R1RHOKefiznn0-z4KUy5MEe17X7Xa17X7X7X7X7e7X7-17Xe1XeX1VXT0aN7X7X9X7V19X7V17-Xec7X-7X77X7VfBctaT-17917-X--7V0V-9Xe19X1cX991hJpKJpKMSKMSKUIMUrMprSrMSrKMSKrKKrMSrSKrMprSrMpKMSMMpMSKrKKCKMUzrxrSUMUKIABceV17-XcX7X7917X9X7X7e--0aN-7V17XcX77eceVX7X17919X1EzyTN5T-c-7X77X7V197XcVXN-7V-17-X18VXD---X7a11--7a17-99177Vce91X7XX1cVXe9XV-N-7a11177VVX12V0V-VX9-N0VVVX1-1171777s0V5-N7V7Va0bVN0VUV-VN-2Vs--a-NTN0WbV50WsN5-N5-N5-N5-OrxzST-VXcc-VN-1N5-V51-15OxUSxUrxSxSJpMs0V-8V5Oa1D18V91191X11-VVX19nCSSKSSSrMrKQKpK7cXXX7Xcs-1X1VXVV7777719-csN7714yUSpUSSryN77c7X0V-16a0VenB5-D0WV9X-a0WWVN-gpC7X-gm10tV0yN7NNN1VV-N1mm-N--s-7WWyN--fLocccAAC9555NUsSpy-Wa555-c--hIJpCCBmg5NN-NNN8_y--N0VD-epnIKCCLVXYWV-919prKSC9cV77-V0Vc11111TTUVVgkf1991D-e1-ceXX7X-WWs9cXXgcUxy10Va1cXei1monICI7g9-XgegmVgem7X6xyUVc8bbta6bbtrzMST--15NAA9egemfABXnBm9n9XmfBpMI9mggfA1eceeegn9eeXe9AIBme7g7Vecg7dV9mgecVfWzzyUzxSvCMtbtbzxtUryOzzttbtaOaTOzs97ea0VenBmN5N-XN9X9XiOa5ObtaNNNNOttVgggnB7e17OVN0WbtT-tWV5MV0ztbaUzMy2aOyStI7fCMtxrzzbKrUyUa5Oa0bUsOa1me7f9cD-1997-VTOWaUV-WWrzzxprWzUrqnBnCKrSSzySSza19Es9aOs-c-WsOaN50V-NObttrSSxzzbtyUbzzUUzUtxrUUTUyULpf7hKyTSBpMzpompqpSxUrSSrKprUSMMUTMxSrKSKrrrppMKMSSprSy50byOSzaKgpxza6zUtbz_zUmgf9mA1egmgf9pMsOzbtzMyTOzzMbttWy2WrKKIKSKSUtVOsUCLnKUtza5SzUxSSrSSzUSrMrUzMttSxxMSSHemgnKzUSzrzxzyUrtbbpSrzKtKrSAMKSs-T---X55UbsN9eem7iObtztyU_rQMKrUSMzzSrxUzzbyUxxyUs18s1UaUprzxMKJhSrMxpps-V-798VUtaOVOVD-XhHDN-6V9XXm7ce7VVtV-951-Ors18Wa-7-177--1-UVcOyUbzMTUbURopIKCIA7f1hMShJonIMTUMUSUKKUMrSrRchMJpSryOxxhIMprSJpxrs---Wa4xxrSprKmpKKxUSrUT5OV7N2a--7-ztVYVXcVV2aOzrzzxrSrbrIMxJogAMSMSUUSrrKJgpQJnAJX97hMMU7fHeX-en99pSrxwopCICBmcXXccXehSrprUxzbztTpKJonKCBfHeXnCLpBmX9XpSzrpKpABeepS9nKnBofKwnBopRpBopCJpKpKKMKIKxzSzzzxKMSSSSKxKSIKtTUWyTObUrrxzrzrbrSzrMSrpzUxySrxxzrrrzzbtztzyMxrUKQKKSSppMKpSKpxprrSrUUSxxrMprrttVD5SrV-a-NN71-cX7791-77VVVVX71-TT6WWbWWWVN-NN8V711-V777X11XVcccceXVXXNNN8V-15-9-VV791dV1-VVX7X1-sNOtrtxtxtySyUVNStUrUrrbUMrppzzrbbry6pKKrMMMrMMCSUUKepKxs0aTTMUUU_rMT-OVN-6T-7-a-777V-5-XMxSSxxrxMU_pzhUxSmpra6QKUbSyOSSnMxSyUKSxCMKUtprySzrxxKttbzbSrbTN0xzUKBpyTSrrMtttzprrSSrMSpprKCILpJhBhIBonKMKLnKICJnBgmmpBm9mnAABgggmeommnAAAJghKKKhKgmpAAJpIJopCIMIMIJpCKJpKUa-s550V2VN50VNT0s5OWs6VT5NNTTTTTMyUSSxQJpJpAA7fBprxpttWbbSSQKSSSMMzSrt_rUUbUbaMyTOVzTOs7777N70V70_pzKKzbbSJpBp11hIKqnKUtIAJmnJnJmnIBnBnJnKKLpBnJhI7e9778V1N5-NT0VOtbaNN9gmmmkfICCACBgonCBpQICBnI1fJo9pSQJohBchKhCKJopSMKSSMrSMCIBomooenABfAIABgnIIMtsOaObbxI9mmon9gnKUwpMJpJpJpBmpSCShMKCMKCBpCK10V7-77X1-cVV-7hKKCMKrppMKSKpIAKtxzxSKpxnHghUySrvCICBfCJpMbnAIBhBgompIIMC9mgfCCKBoonIIICBfIIICBopIIIKKCKKSKMUKpKxpSSxxMUMKKSKxpUpKrSKSKSKnICCJnCA1999-1A9e-7-cXXX17V70a-f7VV-1--7XXm997cXX9AAC9mgoekccXg97XXABmkf9f9fA9emXn9emgmgonKtxgnBfI9nBemef1X9-9gn9meeXA9eemegoefBmgnBnC9gnC9eeggnCJhBpBnKJnKKKKxpIKrRhBhAKBhKSKKKIMKKKF7Z2MkT__44OOaO__O_LLTbYvkyffBkEcw2knyaaiBkyEC-x-nl3-3VQ3QMsc-O-txaOjzzk4K_-7VS-vCSzc7V0J2qEPevjFF3F--6mTV-FGRlV--92TV0kLotbx-a7AuPnIUUoxxzbzrKrpKKMSSSlWxrUsWtzKlzTUyOzbw516xSUzWbsX6wNgc55Xc7mcXmgmeJmofomXXIBcYHcVPXZcVTUceX1d9me17ee9-A0Y6qioC-asBoenIBjSUIBjUSJe9ceV7177eV7fC9gpzzHeeICyUxA9efIrzM0zKaP6kOxIMtxzbxBgef9gfMSxyU6ttaUttzGzryOa-OV1XCJc9VcN7---40ekqQ--NDEDyV--Red-6VumnMUacX--0pcZ3P2fIBnrozKocX7X7poxognBU6zbzojHxISryUWX-U0XV--V9YHX7--6M-k--Do0VDFSy8__bfuePPaEykFkk03C2-3VwCbAMV--0t6o-92oUS0V4FUCSaOQzBn4---ywe-Y13Y5KOjuRyaEBG2F--GW_V0FZtli---3co7-38GgR-93kCEP-1kaQpeNn--L4BWBn5T-BFdZS_ePOvjjjjwk3-FJGF0sL9epCyN9-mkhAhaefdPOOaOd_eO_dPLyiiveeeyEnnEiEwBk2nEnBnEEEnnwwznnF3333GGKJJG3G4KKGJ-94g9CkV--ipW-VWVbABxrMKz5OzJxsNNNVXmXe9c--B49F--PnOV-FqcSV7sQLqmeeppUUSSxtaTU6yT97997eeMC2a-LKOaOaOi_vdPiuzjd_dvijyu_KFJGF33303FC2-oBBB4KLOOaaOiaeduaeeffdiuzzzyyydKKJLfivjjjYBwyuyynzyEnznvszkxFzwzjvEBG0G2zjgyuyYvybvzjyieKbfYBkwzivYvyvyEiviyvfuuuPfePPaadvvvjjeOLP_MdOKKK_UeaPMefvjjYzYknkkzznFzyEjzjfyvvEzjeQfjYvzznzyiyEsywzwzYvEgkG43K4GJJKGJJK3-zjsEzjjvzwyyvvC3J2G3FJ2yjFG04FK4F4K-OKGJGJG0GK43EB4GG2EEzyvvn2yduyvjyinzx33G033Eiw-o-KF2k-GGJeKO_-0PL_JBFGKOF_KOHK4GFxOHKGGFwp08J-yEYnlKKFJBwFJK9eOFHLTdJ-kkn0KKdFPPe_3-B3HeOaJ_2-EeVC-3JKLdi_FHK20dPJFk0O_JBl3KT_3K5LLfjdJeu_Fo3_JiePJF30-l3FGJFoGF-X6dJBfEOtsV0FxOWbo-D6uCS6X1v2zp5_4fu_4ivEdiuPdKJF45aiivivyyiviiijsn-znBkBF235J-GG_-nBl-w44aKKG-KX2_nCErSSSkOWa11XeXLG1g8_OK_OOO_aPuKOdajsydQjznzydLKK_5KaiuyzyvzzzyzjvjidLK3KKGKKKKKaQfefjizjzyvdefiiznyzzyEwznBzwzkn2Eifzjufwyyzjwww--GPO_--zVBnvgEekk3K3GG3JGGFFG2B-333-0--03G3HK4ePeefeQiaOK--3-0-JFKiydeJHKJ2C40GG_ddKFnB2-JF0cWyMmmyTN-ZGfute2---ZAWV0G8Ihi3--8AO7--I0sk-7aWNk-RIFpuEF018vKgpKEM6tWV7XV--L5Mk-NgeYlV6GUzf_eczf24_-k-1C0lB-I5ZZqOynkqK-5YJBIArlX-1Gfu8_yC-6YOlnKIOV---5qJB-DCgdwja-C61_LTvoG-kYgE2KIJnAAMUxzUrOxzTOWaZcV9176qXeX7cVDlqEh_PPeffijjnEBC203FFGJ-mDm3BfEMtyP89-C6VITdTn---2mET-26bSqk--EMts2wUQzuiijiibfV-EYnn3G4LJJGF1szi7nJnr550e--78qw-1FShy-27J7aR-eFczBxKoT7-V-oWi1tLgwk-9FyXENV7H7Of_bisywyoGJG-GZSgYBepxxpyN5X97-gZ3Btfw30yZX6E9mY9eememXeefSzxzT6xzUrMommceKIABhBeMUSxyOWbbbxzHpATTTV5OzxzSy15Ua5O93eme9cXWWbbyVcmVAmK5MiyiajY2Eil3G445J--Hp-s--aMYk-0CdpV2HW8xuvoG-28GGLmemxr6tsV-oczDQis3F11JY8BgnBopr6ztzzNOWX7e7omX-0mZRx_UkRdHRBnKMKpMJppJxponBop6bbzxpxKlbWa0WWWX-UzUUrMzlxrWaWXVd9n9WVVc91e99X7eeVjHcccOe1V--dDLF0OOWLmpy1-6AISazG-5_hMYrq3e-2mvLGeyn04-Ca5w69nUrSq17--QBDVUivzzlJKJJ-qNYawozzyNn97c23mKCO_OLdiffgwnBBBl-J-5OPQhV0wnGIOeeyin0230F5uPAsSSUrHprMSI9BenCHoeXAIrrUUUzTUzyN56rzbV0bxbtcOyOttztcmefBgfBn9ef9X7VXX7X7X7V9IG_jaaeivzB-pFn2KJ09Pe2Rhbzzxxu7cemc-CCRoydz-p--5k5q-ICZKiPvjk34--5npT0dDEw5Oeuaufdeu_PeijB-BBFkoFG2EfswFk3-JLJ-9Ul6xk-7nzgraaOeQfVBB-n-1XVgnghCEpKSIIIMKxML5-0Wc0c5V71-7-C0ccQ-B92pWnABnIBgmxUa-UbtbrzzrtbbueXBee5Pec-C21Ktk6e6I4rJpIBrMM0c-0zzbae91c7Qh2tpO_ddeeTbeeiiduuffeeefydbefjiedeeaijY-nnBwnznEBnnEwk-nveefdbYw3B-2koFFnyjueuTw2FyvfiB-32G0-oGK3-OdveeJFFFo3BoLK0JF-40OOaOa_8KKFB3OKefddFF0--02F-00G2--5cWxzMSV1V0JNHMaB-uYI9RnKMGWWaNe-HJRYn_aayu_jjjeBC-FJFFEjiwC44F2uEcgpJxIIy5-NVV-07cwk-PGjhlV3oZcraOPzkC-5eHK_nABpKKrK55-575TT-e0fHO2qaaabeuauQeiffeQffF-33-kk-BB222n4J3K--9LCls-CAWRtk-1QXrVIK7Wd___4aLywyizYzYEyEBw0JOJOJJ-edEvRpK5Os1V1CKLfOdOyszywkGG4-5etPbKtae-jKWNneePfiuiifiijifiw2yfeii-zefeeeeefYBBn--0033F3F03-G-3F03-4-0GGGKJ-ufB4MHjSzSomcXfMpzS6xKKKKMSsV-10a7V-75Ouec17-6Lbx5JE-PfeifA9eme9AJzrzxztyN57-SVW5uU-0qkprRxMSKSpKSrtV7X7X17--V-58t6-LgVLbBpIKrWzSqV0V7Ve--O0SB8LoLpxJnBgmpICBomogn9oghBnIBpUbWxpMOzzVUsUbaTOa55ObxonKESyUSzrzRUtWztsTUzrMtcVV-V-eX-0Zegee977XX-cemcY9ecV8q__U_OdujEvnBmK30--hDurV-5vfz37hzjz9gemecf9genrI9ggn97gegegoenBgopCJonEJUzpCKKIKonKSKMKKKSMSpUKrbzV0V5NN-77VV-7X-WWVV-N-0aNOWWbsN-0yUUUxzrzSMKrSICpJnIIErL5NOaUSxpSUMSSkOWWaV1-1-55--Vc7X5UxrpUSUxty51-cVXX97VcXZecV9r1ep_LLasznvgyw343F-AZ4Kk6pnU1tLuaOG5K_a_OLLPKeOddYzwwwzEnzEnwzE2E2C-JF3-4id5YIMV7-Cs_ftkIvpQOmnA9nBgf9YBoooofICBeeCBoqUUUxtza6aNUWba6aOaOWba5T5THcV7NLKvdveejzG-33F-5q05bAzy9VCvXK8_eeiyvujin304_-3-0FZT-95mmcgfAACBn9ggeAA9mmnCUtzrprpUSAAIBggecmmggghM6tzNOtttyTTTUbbbxzKa5N0bbbbbbaNTTTTTTUy551ccfAA99XXcWnw5hG_OLKOLKaO_LKOK_POOKdaPOaPOaaUzBnEknwknzE2En2nzEnzeKazEyzzjnwzzznyszgzzzwziyzjvvzjEnueOOdawzEnnwzEEnwwzEEnknEnB0JLJJ__OJ0K_JLK4K4_G8K4445K_48LK_OK4G44K4OKGF1TETamnMTOVc" :
		au.pi === aAs + 7 ? df =
		"9mDS-FP-F--0TedPPOXo0HCGSpxrMptUSrUztztbbsUtaTTOzzzzStzSzSrSrSrppT-0btaOaNNUttVOa---56y6aOSrUaN5OzztztaOtTObtaNNUzaOSrSvHogmgfKpKSrCJgnIICMKrSryUWs--17XD--OaUzaOzyObzzztzrrUxUKprrzyUzzzzzzrSrrbzUSzyOaOsOzzzztbzzrAMSKzrUzzUSrUrrMKKSzzxrrxrxrrSrSrUSpMJnCKUV6aSxxUSxrSSMzzzWzz_zzzzzzxrUzxUzzrSzpxpxUSUxrxxSrrMSrSKKMKMSKKxrSKxzxpJmegnKzWzzoeepBpABgohBnBpMSKyOsT5T---OWWt_onKzzS9ehSrUzzzzrzzKKAILmfHnBpUztWsT0WaOaUzzzUrUrSzpxzzrSMSrzzzSKKKKpyTUaOzxzxrxxrxrUzzxzzzzzzzSrxrUrSrSzMSrSSrSrUprMKzUUUrbrbrbrrSMKxKKKpIKKKMKKKIBpKBnJnBhBgnCAIBnBnBnBgonIJoonIJnBnKBen17AKICIKKJgpKKCSSKKCKJpBpKIKBnKKKCACBpKMIKponBgfBnCHoonBnAKCKKCI9nBenBnBgmepCBn9cecegX-9eenHmognBmegefBnBenBnBenBgmonAKICCKKCKKKIKKJnCJnBmfBnBmpBnICIBpIBmpBmnBnABn8aObbaOa0bVOV1n9fCBonIHmonCMpQ9hCAJnJgnCBnBmpBpBgfA9nBmX9eeeXeXcXX9eee77gpKrSrzSrSrJnKKrrrrKJnCBnCBhCIBgemggeggef9eemmeecceAKKrKICJproomgmgeee9X9eXfKMSMAKMzrMyOtxrKCBe7VcfBprrBAIHnKhSKIBp9emgfBnCBpSMSUSxrrzzrKKLmnBmmnABpIKIBmgmnKSpSKUSrPkf9en9nAIKpIBgmXEV9gpB7Ve9VX9XbrUV1cc9V7Ws11chBeaN7tV7AIC7XN1N1777c2V-a5USy117aNN-ceef97Oa-Wzy1N-17WbyMMKSCKrs10WV-Ws978V-5-D5-s-7VcgmfMopCSppIA7XV--1-2bs717V15--a52aN-X1-cVN-X-V-ts-0V0VOV1OaOa1-2WV-sOV--7OV-V--VX-7--7-0yN7--7-X1OWa--1-0WVT--9N7OV--1-NN---V-17V-15Us--V--15NN7----VX1N7---X71--17eX7X7XX1VcX9XXcX9999A77eVeX9A17X9cX7X7X9cX7V7VV---717cV1717X717X-X7X71177X-X71N19--97X-X7-X7c-91X-X-7X7g7XVeX7Ws-177-17-5Oa5NOsOa5OaOV1XmX7eVcOV-95--5-sUWVNT5N--0WWtztaTT6WaOV7-0aOaOzza0aN0a--7VOV7s-s--6V-X---17X1Vc118V5OV7eX7XcXemnCCBfBnBoprSp9gn9cV17ee-9eee7eV4kDJ_aeiwn-FJ-u28mgpMSzsN-XeV5Fop6aeecBBk-F1t5Zdn9xxrs-9-O9QZyeevz-G3G-YcmK6CIIrUrrSrrrqOa9-X9X7X9cV1_beTuOPOPfznwwC3-4-Jh78rBeejprrSrNN--7-T5ITPw30U8E3BgonBzrtWzzaNVeeV8t9XtaOdOyzBwnEBKK-AmPDvCxrr-7X7ByJT4OdKaTizEydLQi_G48_OUdOvEvyuv-zyevvnzyBFzjvyBnzzznE0KKJJJK43JJG3JF0GKK-2BiSRpxxpWX7Xc" :
		au.pi === aAs + 8 ? df =
		"DgBy1vR-AV60YBnopk-O_9DCIs4rUUrSSMUrSrSSSMKzypKSSMRpKMSrUKMSpKSSrUrSKIKSueXgnCKBgme9XenIKKMBpSKpKMMxpLppKKpnBoopKMMMMKpMKKKKrSzzza55ObzzUUSxppppCCSSpSSrRopSrrSSSppMMSSrKSzUtpxrxxphSMUMUSrrUzzaOtbaOtbbbaOzWWaN5Os6yN-ee117eme97cX--1117XmmccVaN1-Xy-XD-NT-6sDOa0y-cWtzrrKrrSpptWSxs1W_rMUMMUTUUzrrrrSrSxKSrKKzKSrMSrxxprUUzUyTOa-N-1-X-7--1-VV1D-EUUaOtSs-SyMzy-Xe1XXe999XcefCIKKUUn7X7eXee8aOV11UUUa-X7X0Ss1N1mVcf9ecekgk1AJmnABgn99mn9hIJhKKMB7797ee17y17V79Ve79nFX8s19nAIKI1n9pMKKT5Jp-hFgV1goV1nIF-hB-1kOsN56rSpppMtVX-77c7a5N-D550V-ObbaTTN-OVa----N--7s50y0VTNN-9maOzV17cVeepABnBpKKCBnBoopIKMMS9pKKKKKKIBWV-D-XemgpKBe9gm9eOzbyOa5OWV15NN7-N--V5-OV55-50aOaOa----99e77X9e770V1OVX-ccefABn997Xc77VccgceXegfBnH7cegcVX9ecD-VV-7-XV7Xcs5OaUT155-51XD--UtyUy--zWzzUzrbzyMT5OtztyOaOzKpxxIKKKKpIKKSMIKSKKSzztzbyUxtaUaNN5OyKs-6V0WV0_y-SppSICMKMTTTOtQBpSCMSsSrMSzyTMSprSptSUbzzygfKxUaObrMJpTO_pmpUxraTTOtttVUtaSSptzIAK99eXegfKgpCLmpMrUSpz7fKBoohUttrSrUrrSrSAKKUUra4pSzbaNTObaUyUxopBpSrzbaOyN10baSrrpzKpSSUtSzpUs-75N7cc91cXoX7V7Ws1-5TUbaOaOaSySzzzrzzzUtaN0V971A9eenBeee7Xe9cgcfAA9gggnKJgpgeee9eA9mfBgf9geVVX9fB7X6baOTTNNOtaOty52tzVNN9m7Xcce9715N5ObKt_y-8rMbzs90My6_s4raOUxrrpUMrz_rCMUry-eXUzrpySrxyObrztrzUMUttpztrVMrzrMsURhUxpsOpCUbrzqmenMtzmpzb_mfKzpooXX1pBpxSSKpSMSMKKCMKQKnCBmmeXcc71171-V--XpIIKKnIAAIBnCMMCKprzWV7sObKKrKUMsNN5UyMzzrBpztttWVaTObW_xpI99ghKKMxztaUUbzzzMy6vBgnACUtz_yTMrUzbnIMUtttV-UrUSrSSprMSSMyOWVX-18a0a-0yTOa5NOzrrRoonBpSKBpCKCCKSnCCBhBmme7efMSUSzUUaOyT5OaN-0aUxpoopMSzTN99WbV2VVXX9eYV0WaN-V-OtvKKUSzMrs1797VtpzV6rrSSrzBhKCKMSrT-Wa-V0V-X77ca--UzzzyHpMT-yT-7-sOaObbyTTOzUtsUIMSpSRnMzMT0WsTOs97hIBeX-X7tVVtzVc8WWaUonMzbKUsTUbSxrnMUKBoonJnJgpBpBoptaNOttaT5NUxprCUT1-VObbzrUzzyTUzzzy2zSxxxzry-1-Wrbtbs9zbzV9UV19-fa-taTOpUWxMsN716aUKyUps0xzaNN0VOWbaUzSrzaMrzVcX155OVOV0ztby-199f1XOWa-N-TOWa5UaNUaOa5OaUtzxtaN7egYy-VTOaUrnMwnKtzxpzaICTmoomenCKS9e9hSKxzbrSrSKBgpMKrWs-_yTNMbMyTOzrJnHnKxrKpSMKMSpprKSSMU9fBopKKpcfKSMAIKSrUMMpSSrUzVbrMUUTMympKrSrUUzMBnKSKrSxpJpMrUSSpSKS97cXXXXcXXXX9997ccX7c7X7V11171N-V-VVX1-71117-7-X19997V1mopKrSxpMMKpPeVX7hJfKCCKMMMMMKKpprUa6BpepKAK8V1meommnKMPgpAACReonACBopKSIKMMCKKKKKRpKCKJoprUtbbSSUs4MtaT-78sUxzzwpxxpxrKKSSSUSpUSSSSSKKKSKKMKSKJpKKKIKKKJoopBn9mccgpKICAMIKKKrKCJnIIBopMMzxxrrSxxxrSpSMSpKABofBnBn97710VA112V1171mmgn9k7V51-7XecXpAHhAIBooo-X75NN-XeXnBnKIBnCCKBnB9gpKprryU_ppSzyOWVObrzyTShPfIBnCK9hKCCJpKzrzxprSrSSUrxxqeeehUxzUrrABnIBhMzsOxrxSmgpxnMHnHhMnMICHmpMnHhSyMBhLopC9fIMhBnBnCJommmfAA1nBo97c9nMMrFhBgnBehBgfABfIKSx9X17N1emXABf9gmnJepJmhRmopKCMSUSxrMSrrUSxrrxrSrSrMSSMKKppCKKRognBggogeefI9mpxrr9nBggoog7--N-e999fAa-XfJV17s7XA97XcgecWV7eeAJpKKJoopCKBpKKKrTTMMKSxRpKrSzrzxxrStSrUUUSSpLpCMSKMSzMSSRef7Xce7e9X997-cX9-c-777-11197VXX17X7cgc0V0VNN1VOV-1-WVV-77VcV71-V-71--AJVV7XhMCBmfBnC797g-ACI7-Oa--11-Vc-1XVX9979X17V1-VV7cec9oppnBn1gXo71oome-1nHmgfBpKIBgmmcenIBnBnBnAAAIA9mmonI9egoXmggopCMKKKLpQCIBoopKopJcgnIBp9fACJmge7X77VVa-11-V7-VVVX-V72V7-7-VVV11-V7----V---N78V5NN-V6s9XOy1cepgpQIA9f9e7X777VX7UTUbta1eekXX7X0VcX91c--g7-11emXceeXX9ee99ce9g7cX999XXXX99X7XV-5-V7ceeegeX7X977X77-X7XVV-5-1-7--ecD-9hBX99onAMSKIMJpKSpKrMKJhIMKopST-NOaOrRopIBfIMSSMzxzUpzUUaUaUbttyUaOhBpIJppMKprSxrUrrKMKprRnBn9ggnBms9gnICIK99efBomceXgnIBcXceeeXeefBp9emceececeegmeXXeekee9X9Xf9ecee7X7-5N-a-N--NOWVN--V-1-V1--5---711171--550aN5--0V1-V77-55---------N-7XOta6aN1ggnBmnI7VD-VNN--NN1ghKBpKIKKJpKIIKCKKKCKIKKRnBopKKrKSSIJpIIJoopCIJpKUKSMLpSKKIIJpKKMSnKrUSSppKpMSMKpSKrKp9eepUrpSSKpSprrrzzzSrrzzzrUrzxrUzUzUyTSxnICKCACCCBnABnBgnBmnABnCBnBgmnBgmmmgggggf9meemeXggf9mgemmmenAAABmmmmXhA7cgnIIAIBnBmhBnIBnKKSMSpgnCKRnKKMKKpKSprQMQCIKKCKMKCJpKKpMBohRmnABfB-1V9sQR73q09kCIBed989cCHZpMUMMSMSUOxbpy0bbxSraOaOc7TVP29C9Vc0VBecV--7NVV-N8H9w--c9BgrX-BVhQICKrSsV-1VkNB1Dn9choeAEHp9A9eAKKp9fCI9Xme118BgecX7IKKAKrJce70cXXXcXMSppCzSpJxSMKSKSSrk-0xpxxzba-17Oxta56paOsNNTOyTOa--USkWzMUUzs--VWbrxrrVV-d9e7VHsFGFpA9BnCzzII9X97pxS9XHVZoogqUtzqUyUxx50WsTOXmgcOuVOXc0T4CohpochopxzyN7X7NXV-cNWurX-AW_mQ9horyWa--D6JABqN-51WZ4aN79-1XOJ2Oc-58_IBN-i8hrCBfItza-V2Nd5onEIMLOs-X-0se3gprOX1V5NezHrS9eACprpxy0aN7cVV07h4Zpy1V3shEFnKMUrzcVN7I91V-chgRwP--Xvb6V37jO2mfSxrUba79cV3cjXTpJpJOyTOX7gc--1B70i-6Y102KttXe-4Y2-QBrWV-qBklBoptztf9-7-aBzewzzyPee--YGg2-DspvZoeeeXmeA9mgmogn9fSApra0tzWzy6tzzbzztza-e-1YR0fR--PDnihKtVX-SYi0nMS9VecnMSUzxc7UNN5eV4HE3LxHx9HfA9nBxpaX5TUbzUpKDNUKBh9e5BfCMSFT6zUbaOd9V0aP7OZecWV-dYlL2AAIBmcozMopohpzU---NOaOa6X97-LEHZBzbeV07yFszq9V-cz9FrX-4YxwbHc6s-9FJpByV0d0kXnUT7V--FTac-5FvBCV-XGFeBnEUa1-686HMnJmxCIATUpUzV5--57eV2t6dDnABplyUaN1c--GxMc-9HB5gtV38862nCBopa0taT7V0d8AyppN7-1THOURmocpAKpBc9zSMU0aN551-USL---WZbifBogn9ghCUrLTTTOyOWs7e7V08F5moo5-48NGSmzJmVCKK6ls-0V-1_meQFN19MIGBrKKKKopKzWaUbsX7X77-17c-1P80D09ablQKBxrSSMSxzUSpSrSrSprMMUSVVVVV0baXX997XX7ccXVX17X7c-DQ9vBxX-PblGIMMSrMMMkVVOte97eX7-DUDUCL1-0bwmfD-3c-SvC55-NcAPfppppSrSr1117X171-Ju42Zn9gmd9ceceAMSrSppKrSIBfrKCMUUKk-T9mcV5Ua5Ubz6tX--0aOa1X902cKbrCKKJpHpIJnIKBnCCBfBfEryOttVOu5OaTN5OX0a-7--1---cRyM--P9esnVneG9xnBmn9grKKJnIJpKSKMKJporUonHe2IBmmnCBpCKrSrKpppxrSzUzxxrV5-NNNOV-Ws-XV55UrSrxyOc775-7egoe50Wta7X777N--7VOxrSVWtbzUUSqV6bWaN19cVX99gecemd9ec1xdFn2SrJeCpKrMSrKpSKSKIKKIICCI9XKMKCMSII9comomnAABpCIJpBmrTObs0taT5OsNOzaUSKMUtV-0aXX0WxOzaOV0zr1750zrGWX--XVVV-77X7V0VV-117XXXcHX1V39Nu-nKrUUyP7X9XVFeTW0xrI997KBcXBgnCAJpta50aUpIIBnKSzba-0VVUzbqNX1c--dA_c19eGowgggnCSSGWWWbaUsUUUccee705ejHzrzUUyNA9eXeV19fFvonOaTX-Rf_UfKCBeISJxrT-0WbbVNXe--AcyX--Aenu-lfzAABeconJnUP5UrSpKIpxLV0zML5-V7--1X7-2gTJfAOV-AQx3k--sU3c1TvB1BnKCIKIKCpMSGzr-0VN--751-19-0iur2k0FkOrQBgceZgnKKMMKKSJmXxpSSprMs6rJnrUra5NX7-X10X0aOVN-1cV70c16258gfA9fJmnIMKxzyOaOs-NNNX-7lElAMryXe7-042oc-A4AKhN-7gKbcmpIrX6zrxrMzUVeVX-gocVXV-3MmVV-3NpHV4wNq3mmmrUUrMUTP77-X7--lazYV3RQ6imfrrSprs-1X9-7liMQEOxse70E6TIBmZxlxxKOa77VV0I6vXBefKMIM5Ota50cV-RW4Rw-0RW5cnK5--Om5EABpMKBhSxxs17-0V5X--H5H1-9mCaYBoxbaP70emCc2MSIBepJfIIBmVP7mnCIAACCKIlV50bxqUV6zxxpCKprzzaUKa577cWVNUrOtV17V17V7Xcc--HEP1-0mI5IF-0mLgQF-amT1YIBonIIICBgonGaOaNOWVNOWba-02AS3hKIKIJN0V-5--AByfCsV-BqE5k-6CtMgN-0D4wcDzDLQCCCBpIIAAUJmmfBnAAJonCBoomgggfABpAKCJeecme9IBnKKKrMJrSrzUSKpMKpzrtttbxpMbbqOaUwUxObzrrK6aTTTOa5550Vc155ObWaOs9--0WWbtzyNce9cc-Ne7Vcc90zbcV0ztte90byTOXeXeeeVNXeeV0RupTnClV-hngH2CCCCJpKKKppUUtzbta5-V777-X177XV1wx_ZnIKKaN-V-PnvrYCJooerSo-OzuXVTOV71MEjtggeeeggnIAACJoTUzrMUbbttyN-AEykhD--x0GZrsc-2FY2g-4o9gQCSX-CjFseBonHonBf9en9eegf9XfCIBfBpCKMMHhCCKpCKICIpOtzSMMKKIJxUbbs7VN1---VV5ObbxrKCESzUpISy0bbbse1cX5-XVcXeV6y6aTNNNfBmehCCBee19cVV-0a6bzttyUyTUtzwUtttaNNOWV-1oImQL--AGQ0CNV-x5IkxkV0IIIYXm2V7XXeyUta5UV-46fyV0C78BrT7V0S83qnAyP2IoidnCSprrSxrSzrUMSxpMxzUUSSMMMMSzSSrrSprMSpMSSxrSxxxprrrrrUrxrSUUbtaUUL----WX-5N97X9emVP97719ecX-0aNcgmme6a9eX7199e77gecVX7cXXXXXcXX77X7X9egeeXX9-2oitACsV0hAoJnEbsc1EIX0Bgeen9gf9rSaOzzWyUrzqNX9-0CE-XnxVV-4FqeV0SGIunObe-1p622T7-0JRDc-0JfGc-vK0CgggrUzaT19V-CLDDs-6Ku0CV-ALMbENV-COvBk-bLoRjSrR-cX-8pp72IJoOWV--4T3HV-STYBq--hTbPoN-6pzxnBpT0X-5q4TfCGaNV-xXFHpN7-6N_hh--2NfsB-NqBUQHeCCtzSSSzT1cX11-1CZ-NpprX17-7qMXnCMyN7c-IOb-BnaN-0Owzc2fPAlBgggf9fAHoonAABgnCKCbbaT5OWaOaTOtbaTTOaN-0PiN7-MPkJBf6tV-4fLuV-SgO9lV-phLT7tV-4gqNV-4hl5V3xiFwnA9nAROzqOaOXV-SifanVGKwWFOaOV6zzzzUUy6tztbKta56s-WrzzsN-5T4rKpppSKSKKKM-6Sk2RmmeXgeggnTUbxyTUbyOe-OMnm0a50aOV-NNOyNOxtyN-fRZugenzttuc6MRg2gooef9eemeX7XeeeA9Y9BehCIUzrMUzzbrxzttzztzUzrzqUzzbzzzbbzrzzV-9fA9eeX0XeBeeY9e7-DrA8vSzrOtaXeec-0S7u7-rS8wBhCUbttcec-bSGCgnCzaN9-BrL6QBezxyTPXV4hpYLmgfCtzxzSttX9ce-" :
		au.pi === aAs + 9 && (df =
			"EcCx-VQCO1iiqOLOKeeedae_ddadadadOfiveOeLeeeedadaPiuuiePPeeyeeeeOeaPadaeeydPeOedaOPLOeeeOadLOKLKKLJG4G3G4G4G3F-3GJG4G4KKG443G3G3G3G4K3K3K3GKKK3FJ40F33GK0K0K3G3F3F2nBnBnBnB-Bn-04G--BzzwEByvn-wG-BnnB2BkG44K-4KPKQyde_K-G3GKFwGPKO_O_K3J4KG4KKG4KKKJG4KJKK30304LOJG3GKKKKKQvjzuzziviueeaKaKPKKKKKKKKK3K_eOKO_OedaKaLaOevedaOGOeOeeaOaOaOeOjzvjyaPeOKKKOK43K_KKaveJGJ0-JG3G3GF3G3G43KaKF3G4aOedaOFKLK4_eee_dJK33KeaOLOaOjveeKLO_OaOaeKLPeivjeaOeOaJKGKJ4PdadafiyjedLPeueK3F-G30F3G3-3LOaOjeKLPe_O_OeaPfieieeyeaOaPOKOeedeOdada_daOdaKd_O_aOKPOKLKaKdK4LK3LTdaOdKaOK_KLPOaaO_LPKGKKK_KOaLO_aOOaaOdaPOdaO_OaKOdaPOdaPedeOJF--00LaPdeaeOfeyeiuudaueaaPdbeOeuefefuivfifujifieviivifeeid_G-04OF0-03KaPvievjizfeeLJ0-JG-KdOTvfiyviyujffviujeiufeiefivivfivvfeevivveiuueieiefeeiyejffuiuuiviuvfiifiieePeeaieieveuePdaPKJKefefefiuzzvzivviyfvnvjvzEzzjzwzzzBnzwnnk2Bwkn2zzknB-n2BnEBzyzzBzzEwnzznzzzjfzBzwzznziz2zwnBnBBkB--B2EBznEzBwnBnBzzBknEnEByywzzzzzEzz2wnzkzznEBwwEnEnEzznEzzzzzzzzEzwwEEizizizivjvjfznnzyyyvivzzwnyviuizyeyeKbifiuizzvifieeuyviuiuefie_iviiyjzvn3F3Bnw-BnBn2BnBnwnwnwnBkBBk22nEn-EeeieKdeiudaOaOPedaeePeee_KKLPOefzkzEEjzwk2B-k-kBB2yiiuieueeaeeaOOaOvzzzBzvjivjuiuyevieifiedaOeueuivivieuvfyvzvyvvuuvwzzyyvzzvjivvivvjyvznBnn2wzznwoLK-z2BknzEivePPLOOvjBwnEffeuyzefzuuujnkkGG-yzEEzBnEBnnBwnEBnznzzvzzznzvzzEBnzn-k-k-k-2-wB2B-k2-2nBB2kBBwnBw-nB-2Bk22Bw-BkknnBBBBBnBE-znznkkEnE2--kEBknBBkBBk2E-3-2Bk-k2B22BB2k-k-k2BBn-w2-32k-C3F--k-FG0G-22-2-FB--k-2-w-G32En--nB-2kKLePLdFJG3-F0033G043-l3-G3K3JK-32B3G4K4F--B--B--FGLJGJ3F03JLaeKFG--0---BFK--203FGGFG33F2nBFG3FGJ4GJ4K02GKF03-GKKG3K0JFK3G03F--G--l43--Bk--kG-FF3F03G-403G----l0----G--Bn33GJG340JG3-G4KaLKPKG-4-3F3F03-B-------G3FJ00--3KGF--0---03G0032T4mfgmegmeX7fBnJnKIEzzzzbrpzzaObtVOaNX9c9c0JN9cQfjzGG0F4NoWynBpJnKzzzV---Xc1RfMlOOvfvzwEw3GKKF-0gAIV-2OK2-3aoazBjs-pIUdyOaKaKaOfzzvgBnBF---1gInV-4OaA-BexerKESrs-V9V3q6e6dauVn3-0fPHBpMs-c-SiqWQwJ1mtRSUSKKKKKKJOzzxrROc11--TX-X7V7eeV4Meo2avi2kCK--EcNy-OUJfiLKdTzsBk-0kCPrF0fVVRjiveveiueOuveeeeaNn-n22-BG--030303K3F3B6-nnBnBrSr0a---EsTXQudeviviedazk-2-G-030K-4l1tMCkOc-57MIs-E3IhS5P-CYA-DLew--koIyA9emmfACMSrUtbzzzTTObrUtV7ge7X7eeV8QnZxddaebjwnB-30F3xzBZnMKCMzra71-7cV3wA4p_Qzzo4Ffy5yanHpIKSKMKSMSSrKKMofJppMKSKrSpSMKSzrzzrUtaOzsTN1oc5OaUzrHnCTOtaP755N5-T-NUTNN-N-5-5-N-P7X97gn9gmeee9n9meeX97cX7eVeX9cXV"
			), (new p3).p5(df)
}

function a9v() {
	this.ph = null, this.cl = function() {
		var aAt = [120, 105, 92],
			cos = [12, 12, 60],
			aAu = [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
			aAv = [140, 130, 120],
			aAw = [12, 12, 76],
			aAx = [240, 120, 1024, 30, 19, 30, 70, 8, 20, 3, 9],
			aAy = [130, 117, 106],
			aAz = [12, 12, 68],
			aB0 = [270, 210, 1024, 28, 19, 33, 50, 8, 26, 3, 9];
		this.ph = new Array(au.a7k + 1), this.ph[0] = {
			name: "White Arena",
			g6: 230,
			i5: 230,
			k9: 1e3,
			k6: 2e3,
			a9y: 173
		}, this.ph[1] = {
			name: "Black Arena",
			g6: 800,
			i5: 800,
			k9: 100,
			k6: 50,
			a9y: 43
		}, this.ph[2] = {
			name: "Island",
			g6: 512,
			i5: 512,
			k9: 128,
			k6: 32,
			a9y: 0
		}, this.ph[3] = {
			name: "Mountains",
			g6: 960,
			i5: 960,
			k9: 60,
			k6: 8,
			a9y: 0
		}, this.ph[4] = {
			name: "Desert",
			g6: 900,
			i5: 900,
			k9: 100,
			k6: 5,
			a9y: 0
		}, this.ph[5] = {
			name: "Swamp",
			g6: 1e3,
			i5: 1e3,
			k9: 100,
			k6: 40,
			a9y: 0
		}, this.ph[6] = {
			name: "Snow",
			g6: 1e3,
			i5: 1e3,
			k9: 100,
			k6: 20,
			a9y: 0
		}, this.ph[7] = {
			name: "Cliffs",
			g6: 1024,
			i5: 1024,
			k9: 128,
			k6: 32,
			a9y: 0
		}, this.ph[8] = {
			name: "Pond",
			g6: 820,
			i5: 820,
			k9: 200,
			k6: 100,
			a9y: 0
		}, this.ph[9] = {
			name: "Halo",
			g6: 1024,
			i5: 1024,
			k9: 128,
			k6: 32,
			a9y: 0
		}, this.ph[10] = {
			name: "Europe",
			pg: aAv,
			pj: aAw,
			aAG: aAx
		}, this.ph[11] = {
			name: "World",
			pg: aAy,
			pj: aAz,
			aAG: aB0
		}, this.ph[12] = {
			name: "Caucasia",
			pg: aAy,
			pj: aAz,
			aAG: aB0
		}, this.ph[13] = {
			name: "Africa",
			pg: aAt,
			pj: cos,
			aAG: aAu
		}, this.ph[14] = {
			name: "Middle East",
			pg: aAt,
			pj: cos,
			aAG: aAu
		}, this.ph[15] = {
			name: "Scandinavia",
			pg: aAv,
			pj: aAw,
			aAG: aAx
		}, this.ph[16] = {
			name: "North America",
			pg: aAv,
			pj: aAw,
			aAG: aAx
		}, this.ph[17] = {
			name: "South America",
			pg: aAt,
			pj: cos,
			aAG: aAu
		}, this.ph[18] = {
			name: "Asia",
			pg: aAy,
			pj: aAz,
			aAG: aB0
		}, this.ph[19] = {
			name: "Australia",
			pg: aAt,
			pj: cos,
			aAG: aAu
		}, this.ph[20] = {}
	}
}

function u1() {
	(qR = void 0 === qR ? document.createElement("canvas") : qR).width = au.eZ, qR.height = au.ea, u5 = qR.getContext("2d", {
		alpha: !0
	}), u6 = u5.getImageData(0, 0, au.eZ, au.ea), a1n = u6.data, ad.pM.pN(a1n)
}

function bw() {
	var e4, g6, i5, max, aB1, k6, aB3, aB4, aB5, aB6, aB7, aB8, aB9, aBA, aB2 = 1e4;

	function aBI(aBH, k9, ez) {
		var dw;
		for (aB3[0] = aBH, dw = 1; dw < ez; dw++) aB3[dw] = aB3[dw - 1] + k9, k9 = aB3[dw] >= aB2 ? (aB3[dw] = aB2 - 1, -k9) : aB3[dw] < 0 ? (aB3[dw] = 0, -k9) : (k9 += 16384 <= aF.random() ? k6 : -k6) < -aB1 ? -aB1 : aB1 < k9 ? aB1 : k9
	}

	function aBK(jn, jo, aBL, ez) {
		(aBL ? function(jn, jo, ez) {
			var dw;
			for (dw = 0; dw < ez; dw++) e4[jo * g6 + jn + dw] = aB3[dw]
		} : function(jn, jo, ez) {
			var dw;
			for (dw = 0; dw < ez; dw++) e4[jo * g6 + jn + dw * g6] = aB3[dw]
		})(jn, jo, ez)
	}

	function aBO(value, ez) {
		var dw, a9Q, gu, gj = value - aB3[ez - 1];
		if (0 != gj) {
			for (a9Q = 1 + er(Math.abs(gj), ez - 1), a9Q = gj < 0 ? -a9Q : a9Q, aB3[ez - 1] = value, gu = (gu = ez - 1 - er(Math.abs(gj), Math.abs(a9Q))) < 1 ? 1 : ez - 2 < gu ? ez - 2 : gu, dw = ez - 2; gu <= dw; dw--) aB3[dw] += gj - (ez - 1 -
				dw) * a9Q;
			(gj < 0 ? function(ez) {
				var dw;
				for (dw = ez - 2; 1 <= dw; dw--) aB3[dw] < 0 && (aB3[dw] = -aB3[dw] - 1)
			} : function(ez) {
				var dw;
				for (dw = ez - 2; 1 <= dw; dw--) aB3[dw] >= aB2 && (aB3[dw] = 2 * aB2 - aB3[dw] - 1)
			})(ez)
		}
	}

	function aBR(aBS, aBT, ez) {
		for (var dw = 0; dw < ez; dw++) aBS[dw] = aBT[dw]
	}

	function aBU(eD) {
		for (var dw = 0; dw < eD.length - 1; dw++) eD[dw] = eD[dw + 1] - eD[dw];
		eD[eD.length - 1] = eD[eD.length - 3]
	}

	function aBV(uR, gap, fu) {
		aB4.push(uR), aB5.push(gap), aB6.push(fu)
	}
	this.bi = function(aBB) {
		! function(aBB) {
			var dw;
			for (g6 = aBB[0], i5 = aBB[1], aB1 = aBB[2], k6 = aBB[3], e4 = new Int16Array(g6 * i5), max = i5 < g6 ? g6 : i5, aB3 = new Int16Array(max), aB4 = [], aB5 = [], aB6 = [], aB7 = new Array(g6), aB8 = new Array(i5), dw = g6 - 1; 0 <=
				dw; dw--) aB7[dw] = !1;
			for (dw = i5 - 1; 0 <= dw; dw--) aB8[dw] = !1;
			aB9 = new Int16Array(g6), aBA = new Int16Array(i5)
		}(aBB),
		function(ez) {
			var aBH = aF.random() % aB2,
				k9 = aF.random() % (2 * aB1 + 1) - aB1;
			aBI(aBH, k9, ez)
		}(max), aBR(aBA, aB3, i5), aBK(0, 0, !0, g6);
		var jn, jo, aBB = e4[0],
			ez = max,
			k9 = aF.random() % (2 * aB1 + 1) - aB1;
		for (aBI(aBB, k9, ez), aBR(aB9, aB3, g6), aBK(0, 0, !1, i5), aBU(aB9), aBU(aBA), aBI(e4[g6 - 1], aB9[g6 - 1], i5), aBK(g6 - 1, 0, !1, i5), aBI(e4[g6 * (i5 - 1)], aBA[i5 - 1], g6), aBO(e4[g6 * i5 - 1], g6), aBK(0, i5 - 1, !0, g6), aB7[g6 -
				1] = aB7[0] = !0, aB8[i5 - 1] = aB8[0] = !0, aBV(0, g6, !0), aBV(0, i5, !1), ! function() {
				var aBX, uR;
				for (;;) {
					if (aBX = function() {
							var dw, aBX = aB4.length - 1;
							for (dw = aBX - 1; 0 <= dw; dw--) aB5[dw] > aB5[aBX] && (aBX = dw);
							return aBX
						}(), aB5[aBX] < 5) return;
					uR = aB4[aBX] + er(aB5[aBX], 2), (aB6[aBX] ? function(jn) {
						var ez, aBa, dw, a2u = 0,
							aBb = 0;
						for (; aBb < i5 - 1;) {
							for (dw = a2u + 1; dw < i5; dw++)
								if (aB8[dw]) {
									aBb = dw;
									break
								} ez = aBb - a2u + 1, aBI(e4[jn + g6 * a2u], 0 === a2u ? aB9[jn] : aB3[aBa - 1] - aB3[aBa - 2], ez), aBO(e4[aBb * g6 + jn], ez), aBK(jn, a2u, !1, ez), aBa = ez, a2u = aBb
						}
						aB7[jn] = !0
					} : function(jo) {
						var ez, aBa, dw, a2u = 0,
							aBb = 0;
						for (; aBb < g6 - 1;) {
							for (dw = a2u + 1; dw < g6; dw++)
								if (aB7[dw]) {
									aBb = dw;
									break
								} ez = aBb - a2u + 1, aBI(e4[jo * g6 + a2u], 0 === a2u ? aBA[jo] : aB3[aBa - 1] - aB3[aBa - 2], ez), aBO(e4[jo * g6 + aBb], ez), aBK(a2u, jo, !0, ez), aBa = ez, a2u = aBb
						}
						aB8[jo] = !0
					})(uR), aBV(uR, aB4[aBX] + aB5[aBX] - uR, aB6[aBX]), aB5[aBX] = uR - aB4[aBX] + 1
				}
			}(), jn = 0; jn < g6; jn++)
			if (!aB7[jn])
				for (jo = 0; jo < i5; jo++) aB8[jo] || ! function(jn, jo) {
					var value = e4[jo * g6 + jn - 1] + e4[(jo - 1) * g6 + jn],
						wf = 2;
					aB7[jn + 1] && (wf++, value += e4[jo * g6 + jn + 1]);
					aB8[jo + 1] && (wf++, value += e4[(jo + 1) * g6 + jn]);
					e4[jo * g6 + jn] = er(value, wf)
				}(jn, jo)
	}, this.aAI = function() {
		return e4
	}, this.aA3 = function() {
		e4 = null
	}
}

function er(hn, hx) {
	return Math.floor(hn / hx + 1 / (2 * hx))
}

function a6c(hn, hx) {
	return 0 <= hn ? er(hn, hx) : -er(-hn, hx)
}

function iE(e4) {
	return e4 * e4
}

function vg(hn, hx) {
	return hx < hn ? hn : hx
}

function yN(hn, hx) {
	return hn < hx ? hn : hx
}

function yn(hn, e4, hx) {
	return e4 < hn ? hn : hx < e4 ? hx : e4
}

function aBd(e4, ez) {
	for (var iZ = er(e4 + 1, 2), dw = 0; dw < ez; dw++) iZ = er(iZ + er(e4, iZ), 2);
	return iZ
}

function fg(e4, ez) {
	return e4 < 1 ? 0 : aBd(e4, ez)
}

function aBe(js, jt, qY, wS, ju, jw, qZ, wT) {
	return !(js + qY <= ju || jt + wS <= jw || ju + qZ <= js || jw + wT <= jt)
}

function aBf(js, jt, qY, wS, ju, jw, qZ, wT) {
	return js <= ju && jt <= jw && ju + qZ <= js + qY && jw + wT <= jt + wS
}

function pD(e4) {
	return Math.floor(!!e4 * (1 + Math.log2(e4 + .5)))
}

function bI() {
	this.fe = function(hn, hx) {
		return Math.floor((hn + .5) / hx)
	}, this.aBg = function(hn, hx) {
		return Math.floor(hn * (hx + .5))
	}, this.sqrt = function(e4) {
		return ~~Math.sqrt(e4 + .5)
	}, this.pow = function(dG) {
		return Math.floor(Math.pow(2, dG) + .5)
	}, this.sx = function(value, min, max) {
		return Math.min(Math.max(value, min), max)
	}, this.aBh = function(eE, eG, eI) {
		return Math.max(Math.min(eE, eG), eI)
	}, this.aBi = function(aBj, aBk, jn, jo) {
		jn -= aBj, aBj = jo - aBk, jo = 0;
		return 0 == jn ? jo = 0 <= aBj ? Math.PI : 0 : (jo = Math.atan(aBj / jn), jo += 0 < jn ? .5 * Math.PI : 1.5 * Math.PI), jo
	}, this.log2 = function(e4) {
		return Math.floor(!!e4 * (1 + Math.log2(e4 + .5)))
	}
}

function cd() {
	var aBl = new Map,
		aBm = null;
	this.resize = function() {
		null !== aBm && aBl.get(aBm).nK().resize()
	}, this.show = function(key) {
		null !== aBm && aBl.get(aBm).nK().oL(), 0 === aBl.size && (aBl.set("Main", new aBn), aBl.set("Settings", new aBo)), aBm = key, aBl.get(aBm).nK().show(), aBl.get(aBm).nK().resize()
	}, this.oL = function() {
		null !== aBm && (aBl.get(aBm).nK().oL(), aBm = null), aBl.clear()
	}, this.aBp = function(title, nA, aBq) {
		aBl.has(title) || aBl.set(title, new n9(title, nA, aBq, aBm)), this.show(title)
	}
}

function aBn() {
	var nD;

	function cl() {
		var nE, ny = new nx;
		ny.nu(new nF("Account", () => {
			console.log("Account")
		})), ny.nu(new nF("Settings", () => aw.show("Settings"))), ny.nu(new nF("Links", () => {
			return aw.aBp("Links", (aBs = "Tutorial: [" + am.aBt + "](" + am.aBt + ")\n\n", aBs = (aBs = (aBs = (aBs = (aBs = (aBs = (aBs += "Player List: [" + am.aBu + "](" + am.aBu + ")\n\n") + "Clan List: [" + am.aBv + "](" + am.aBv +
					")\n\n") + "Privacy Policy: [" + am.rr + "](" + am.rr + ")\n\n") + "Changelog: [" + am.aBw + "](" + am.aBw + ")\n\n") + "Terms of Service: [" + am.aBx + "](" + am.aBx + ")\n\n") + "iOS App: [" + am.a2b +
				"](" + am.a2b + ")\n\n") + "Android App: [" + am.a2a + "](" + am.a2a + ")"), []);
			var aBs
		})), ny.nu(new nF("Replay", () => {
			console.log("Replay")
		})), ny.nu(new nF("Game Version", () => {
			console.log("Game Version")
		})), nE = new nF("Close", aw.oL, ae.lO, ae.lQ, ae.lM), nD = new nJ("Menu", nE, [ny])
	}
	this.nK = function() {
		return nD || cl(), nD
	}
}

function aBo() {
	var nD;

	function cl() {
		var dw, aBy, aBz, aC0 = new o3;
		for (aC0.oA(function() {
				var dw, ns, aBy = new np;
				for (aBy.nu(new o0("Graphics", "Some example text which won't wrap. \n As long as the screen is wide enough ofc ")), aBy.nu(new oi(
						"Some example text which is marked to wrap (CuiWrappingParagraph), this text does not have any influence on the width of the different sections and fits into the available space.")), ns = new oM("Resolution",
						"Select the relative resolution to render the game at", g0 => console.log(g0), 0), dw = 0; dw < 10; dw++) ns.oT(10 * (dw + 1) + "%");
				return aBy.nu(ns), aBy.nu(new oM("Quality", "Select the quality of the graphics", g0 => console.log(g0), 2, ["Low", "Medium", "High", "Very High"])), aBy
			}()), aC0.oA(function() {
				var aBy = new np;
				return aBy.nu(new o0("Gameplay", "<Some **left aligned** text")), aBy
			}()), aC0.oA(function() {
				var aBy = new np;
				return aBy.nu(new o0("Accessibility")), aBy.nu(new nh("Mobile Friendly", "Increase size of user interface to better support mobile devices", aC5, () => di)), aBy
			}()), aC0.oA(function() {
				var oo, aBy = new np;
				return aBy.nu(new o0("General")), (oo = new nF("Reset Settings", () => aw.aBp("Reset settings",
					"Lorem ipsum dolor sit amet, **consetetur sadipscing elitr**, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et [accusam](https://territorial.io) et justo duo dolores et ea rebum.\nStet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, __sed diam voluptua__. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, \\**escaped text\\** sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. At vero eos et accusam et justo duo dolores et ea rebum. **Stet clita kasd gubergren, no sea takimata [sanctum](https://example.com) est Lorem ipsum dolor sit amet.** Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
					[new nF("Confirm", () => console.log("Resetting settings"), ae.lB, ae.lC, ae.lD), new nF("Other Button", () => console.log("Other button"), ae.lO, ae.lQ, ae.lM), new nF("Yet Another Button", () => console.log(
						"Yet another button"), ae.lU, ae.lV, ae.lW)]))).nT(.5), aBy.nu(oo), aBy
			}()), dw = 0; dw < 10; dw++)(aBy = new np).nu(new oi("Sample Container " + dw)), aBy.nr(0, 500 * Math.random() + 100), aBy.nt(dw % 2 == 0 ? ae.lU : ae.lO), aC0.oA(aBy);
		aBz = new nF("Back", () => aw.show("Main"), ae.lO, ae.lQ, ae.lM), nD = new nJ("Settings", aBz, [aC0])
	}

	function aC5() {
		di = !di, gE.vK[0].uL = di, aK.a5a(0), dt(di, !1)
	}
	this.nK = function() {
		return nD || cl(), nD
	}
}

function bH() {
	"function" != typeof Math.log2 && (Math.log2 = function(jn) {
		return Math.log(jn) / Math.log(2)
	}), "function" != typeof Math.log10 && (Math.log10 = function(jn) {
		return Math.log(jn) / Math.log(10)
	}), "function" != typeof Math.sign && (Math.sign = function(jn) {
		return 0 < jn ? 1 : jn < 0 ? -1 : 0
	})
}

function cB() {
	this.a54 = 0;
	var a1s = -1,
		aC6 = !1,
		xn = [],
		aC7 = 0;

	function sZ(jn, jo, aCG, dw) {
		return 0 === dw ? jn >= aCG.js && (0 === dw || jo >= aCG.jt) && jo <= aCG.jt + aCG.wS : (jo -= dw * (aCG.wS - tB), jn >= aCG.ju && jo >= aCG.jt && jo <= aCG.jt + aCG.wS)
	}

	function aCH() {
		var qY = Math.floor((di ? .145 : .09) * fy),
			qZ = Math.floor(2.25 * qY),
			gap = Math.floor(.065 * (di ? .53 : .36) * fy),
			ju = dj - qZ - gap;
		return {
			js: dj - qY - gap,
			jt: gC,
			qY: qY,
			wS: Math.floor(.35 * (1 + .35 * di) * qY),
			ju: ju,
			qZ: qZ,
			zN: gap
		}
	}

	function a38(jn, jo, g6, i5, gV, t7, hx, aCK, df) {
		var fontSize = (df === xn[0][0].name ? .65 : .5) * i5,
			font = ad.kp.oK(fontSize, 1),
			font = n.measureText(df, font);
		.92 * g6 < font && (fontSize *= .92 * g6 / font), gH.font = ad.kp.oK(fontSize, 1), aCK && (gV += 80, t7 += 80, hx += 80), gH.fillStyle = "rgba(" + gV + "," + t7 + "," + hx + ",0.6)", gH.fillRect(jn, jo, g6, i5), gH.fillStyle = ae.gK, gH
			.fillRect(jn, jo, g6, tB), gH.fillRect(jn, jo + i5 - tB, g6, tB), gH.fillRect(jn, jo, tB, i5), gH.fillRect(jn + g6 - tB, jo, tB, i5), gH.fillText(df, Math.floor(jn + g6 / 2), Math.floor(jo + i5 / 2 + .1 * fontSize))
	}
	this.k1 = null, this.a0k = new Uint8Array(4), this.vj = function() {
		return dV ? 4 : di ? 2 : 1
	}, this.cl = function() {
		var aC9;
		this.aC8(), xn = [new Array(6), new Array(10), new Array(7)], this.a0k[0] = 10, this.a0k[1] = 5, this.a0k[2] = 2, this.a0k[3] = 1, xn[0][0] = {
			name: "More",
			id: 0,
			gV: 140,
			t7: 120,
			hx: 0
		}, xn[0][1] = {
			name: "Lobby 1",
			id: 1,
			gV: 0,
			t7: 0,
			hx: 0
		}, xn[0][2] = {
			name: "Settings",
			id: 2,
			gV: 0,
			t7: 0,
			hx: 0
		}, xn[0][3] = {
			name: "More Information",
			id: 3,
			gV: 0,
			t7: 0,
			hx: 0
		}, xn[0][4] = {
			name: "Replay",
			id: 4,
			gV: 0,
			t7: 0,
			hx: 0
		}, xn[0][5] = {
			name: dA,
			id: 5,
			gV: 90,
			t7: 0,
			hx: 0
		}, xn[0].push({
			name: "FX Client v" + fx_version + " " + fx_update,
			id: 20,
			gV: 0,
			t7: 0,
			hx: 70
		}), xn[1][0] = xn[0][0], xn[1][1] = {
			name: "Hide Usernames",
			id: 1,
			gV: 0,
			t7: 0,
			hx: 0
		}, xn[1][2] = {
			name: "Hide Links",
			id: 2,
			gV: 0,
			t7: 0,
			hx: 0
		}, xn[1][3] = {
			name: "Hide Zoom Buttons",
			id: 3,
			gV: 0,
			t7: 0,
			hx: 0
		}, xn[1][4] = {
			name: "Reverse Name/Balance",
			id: 4,
			gV: 0,
			t7: 0,
			hx: 0
		}, xn[1][5] = {
			name: "Resolution",
			id: 5,
			gV: 0,
			t7: 0,
			hx: 0
		}, xn[1][6] = {
			name: "Country Minimum Font Size",
			id: 6,
			gV: 0,
			t7: 0,
			hx: 0
		}, xn[1][7] = {
			name: "Leaderboard Refresh Rate",
			id: 7,
			gV: 0,
			t7: 0,
			hx: 0
		}, xn[1][8] = {
			name: "Reset Settings",
			id: 8,
			gV: 0,
			t7: 0,
			hx: 0
		}, xn[1][9] = {
			name: "Back",
			id: 9,
			gV: 0,
			t7: 0,
			hx: 0
		}, xn[2][0] = xn[0][0], xn[2][1] = {
			name: "Tutorial",
			id: 1,
			gV: 0,
			t7: 0,
			hx: 0
		}, xn[2][2] = {
			name: "Player List",
			id: 2,
			gV: 0,
			t7: 0,
			hx: 0
		}, xn[2][3] = {
			name: "Clan List",
			id: 3,
			gV: 0,
			t7: 0,
			hx: 0
		}, xn[2][4] = {
			name: "Privacy Policy",
			id: 4,
			gV: 0,
			t7: 0,
			hx: 0
		}, xn[2][5] = {
			name: "Changelog",
			id: 13,
			gV: 0,
			t7: 0,
			hx: 0
		}, xn[2][6] = {
			name: "Terms of Service",
			id: 14,
			gV: 0,
			t7: 0,
			hx: 0
		}, !dV && dZ < 5 && xn[2].push({
			name: "Cookie Policy",
			id: 5,
			gV: 0,
			t7: 0,
			hx: 0
		}), (dV || 5 <= dZ) && (dV ? !db.mustShowConsentButton || "0" !== db.mustShowConsentButton && "1" !== db.mustShowConsentButton || xn[2].push({
			name: "Consent Form",
			id: 7,
			gV: 0,
			t7: 0,
			hx: 0
		}) : "" !== (aC9 = dW.loadString(187)) && "1" !== aC9 || xn[2].push({
			name: "Consent Form",
			id: 7,
			gV: 0,
			t7: 0,
			hx: 0
		})), 5 <= dZ && xn[2].push({
			name: "Force Restart Game",
			id: 12,
			gV: 0,
			t7: 0,
			hx: 0
		}), xn[2].push({
			name: "Back",
			id: 6,
			gV: 0,
			t7: 0,
			hx: 0
		}), this.aCA(), this.aCB()
	}, this.aC8 = function() {
		this.k1 = {
			wP: 0,
			aCC: 0,
			zG: 0,
			k2: 1,
			aCD: 2,
			a8r: 4,
			a0l: 2,
			a90: 2
		}
	}, this.aCB = function() {
		if (settings.hideAllLinks) ay.eI[0] = ay.eI[1] = !this.k1.aCC;
		else ay.eI[0] = ay.eI[1] = true;
		ay.eI[2] = ay.eI[3] = ay.eI[4] = !this.k1.aCC, xn[1][1].t7 = this.k1.wP ? 130 : 0, xn[1][2].t7 = this.k1.aCC ? 130 : 0, xn[1][3].t7 = this.k1.zG ? 130 : 0, xn[1][4].t7 = this.k1.k2 ? 130 : 0, this.aCE(5), this.aCE(6), this.aCE(7)
	}, this.aCA = function() {
		var v0 = dm().split("");
		v0.length < 14 ? this.aC8() : (this.k1.wP = parseInt(v0[6]), this.k1.aCC = parseInt(v0[7]), this.k1.zG = parseInt(v0[8]), this.k1.k2 = parseInt(v0[9]), this.k1.aCD = parseInt(v0[10]), this.k1.a8r = parseInt(v0[11]), this.k1.a0l =
			parseInt(v0[12]))
	}, this.a37 = function() {
		var df = gE.vK[2].rH.a35();
		dz((df += ~~this.k1.wP) + ~~this.k1.aCC + ~~this.k1.zG + ~~this.k1.k2 + ~~this.k1.aCD + ~~this.k1.a8r + ~~this.k1.a0l + "0")
	}, this.aCE = function(dw) {
		5 === dw ? xn[1][dw].name = "Resolution: " + ad.k3.tZ(100 * aK.aCF(), 1) : 6 === dw ? xn[1][dw].name = "Country Minimum Font Size: " + (this.k1.a8r < 4 ? 1 + this.k1.a8r : 2 * (this.k1.a8r - 1)) : 7 === dw && (xn[1][dw].name =
			"Leaderboard Refresh Rate: " + ad.k3.tZ(100 / this.a0k[this.k1.a0l], 1))
	}, this.g9 = function(jn, jo) {
		var dw, aCG, aCJ;
		if (!(7 <= x.sb())) {
			aCG = aCH();
			var gearIconX = aCG.js - aCG.qY / 2;
			if (jn > gearIconX && jn < (gearIconX + aCG.wS) && jo > aCG.jt && jo < (aCG.jt + aCG.wS)) return WindowManager.openWindow("settings");
			if (aC6) {
				for (dw = 1; dw < xn[aC7].length; dw++)
					if (sZ(jn, jo, aCG, dw)) return aCJ = xn[aC7][dw], 0 === aC7 ? 1 === aCJ.id ? (aR.a54 = (aR.a54 + 1) % 4, aCJ.name = (aR.a54 % 2 ? "Proxy " : "Lobby ") + (1 + (aR.a54 >> 1)), b7.d6 = !0) : 2 === aCJ.id ? (aC7 = 1, b7.d6 = !
						0) : 3 === aCJ.id ? (aC7 = 2, b7.d6 = !0) : 4 === aCJ.id ? ac.show() : 5 === aCJ.id && (console.log("try showing ad:"), ax.dH.dR()) : 1 === aC7 ? 1 === aCJ.id ? (aR.k1.wP = !aR.k1.wP, aCJ.t7 = aR.k1.wP ? 130 : 0, aR
							.a37(), b7.d6 = !0) : 2 === aCJ.id ? (aR.k1.aCC = !aR.k1.aCC, aR.aCB(), aR.a37(), b7.d6 = !0) : 3 === aCJ.id ? (aR.k1.zG = !aR.k1.zG, aCJ.t7 = aR.k1.zG ? 130 : 0, aR.a37(), b7.d6 = !0) : 4 === aCJ.id ? (aR.k1
							.k2 = !aR.k1.k2, aCJ.t7 = aR.k1.k2 ? 130 : 0, aR.a37(), b7.d6 = !0) : 5 === aCJ.id ? (aR.k1.aCD++, aR.k1.aCD %= 8, aR.aCE(aCJ.id), aR.a37(), aK.a5a(1), b7.d6 = !0) : 6 === aCJ.id ? (aR.k1.a8r++, aR.k1.a8r %= 10, aR
							.aCE(aCJ.id), aR.a37(), b7.d6 = !0) : 7 === aCJ.id ? (aR.k1.a0l++, aR.k1.a0l %= 4, aR.aCE(aCJ.id), aR.a37(), b7.d6 = !0) : 8 === aCJ.id ? (aR.aC8(), aR.aCB(), aR.a37(), aK.a5a(1), b7.d6 = !0) : 9 === aCJ.id && (
							aC7 = 0, b7.d6 = !0) : 1 === aCJ.id ? (az.cl(am.aBt, !0), az.cl(am.aBt, !1)) : 2 === aCJ.id ? (az.cl(am.aBu, !0), az.cl(am.aBu, !1)) : 3 === aCJ.id ? (az.cl(am.aBv, !0), az.cl(am.aBv, !1)) : 4 === aCJ.id ? (az.cl(
							am.rr, !0), az.cl(am.rr, !1)) : 5 === aCJ.id ? (az.cl(am.wW, !0), az.cl(am.wW, !1)) : 13 === aCJ.id ? (az.cl(am.aBw, !0), az.cl(am.aBw, !1)) : 14 === aCJ.id ? (az.cl(am.aBx, !0), az.cl(am.aBx, !1)) : 6 === aCJ.id ?
						(aC7 = 0, b7.d6 = !0) : 7 === aCJ.id ? dV ? window.webkit.messageHandlers.iosCommandA.postMessage("showConsentForm") : dW.setState(7) : 12 === aCJ.id && dW.setState(14), !0;
				return aC6 = !1, !(b7.d6 = !0)
			}
			return !!sZ(jn, jo, aCG, 0) && (aC6 = !(aC7 = 0), b7.d6 = !0)
		}
	}, this.s1 = function(jn, jo) {
		var dw, aCG, t8, kg;
		if (!(7 <= x.sb())) {
			for (aCG = aCH(), t8 = a1s, kg = aC6 ? 0 === aC7 ? xn[aC7].length - 2 : xn[aC7].length : 1, a1s = -1, dw = 0; dw < kg; dw++)
				if (sZ(jn, jo, aCG, dw)) {
					a1s = dw;
					break
				} t8 !== a1s && (b7.d6 = !0)
		}
	}, this.gG = function() {
		var dw, kg, aCG;
		if (!(7 <= x.sb()) && (aCG = aCH(), gH.textAlign = gJ, gH.textBaseline = gI, a38(aCG.js, aCG.jt, aCG.qY, aCG.wS, xn[aC7][0].gV, xn[aC7][0].t7, xn[aC7][0].hx, 0 === a1s, xn[aC7][0].name), gH.imageSmoothingEnabled = true, gH.drawImage(
				settingsGearIcon, aCG.js - aCG.qY / 2, aCG.jt, aCG.wS, aCG.wS), gH.imageSmoothingEnabled = false, gH.font = "bold " + Math.floor(aCG.wS * 0.4) + "px " + settings.fontName, (settings.displayWinCounter && !aC6 && gH.fillText(
				"Win count: " + wins_counter, Math.floor(aCG.js + aCG.qY / 2), Math.floor((aCG.jt + aCG.wS / 2) * 2.1))), aC6))
			for (kg = xn[aC7].length, dw = 1; dw < kg; dw++) a38(aCG.ju, aCG.jt + dw * aCG.wS - dw * tB, aCG.qZ, aCG.wS, xn[aC7][dw].gV, xn[aC7][dw].t7, xn[aC7][dw].hx, a1s === dw, xn[aC7][dw].name)
	}
}

function bx() {
	var zc, aCN, aCO, aCP, aCM = !1;

	function aCQ() {
		aCM = !0, zc = -1, aCN = new Array(4);
		for (var dw = 3; 0 <= dw; dw--) aCN[dw] = !1;
		var aCR = Math.floor(1 + .02 * xJ);
		aCO = new Array(4), (aCP = new Array(4))[1] = aCP[3] = aCO[0] = aCO[2] = 0, aCP[0] = aCO[3] = -aCR, aCO[1] = aCP[2] = aCR
	}

	function aCS() {
		if (-1 !== zc)
			if (0 !== jK && f.kg()) {
				for (var aCT = !1, dw = 3; 0 <= dw; dw--) aCN[dw] && (aCT = !0, hF += aCO[dw], hH += aCP[dw], a8.s1(aCO[dw], aCP[dw]), p.zJ());
				aCT ? b7.d6 = !0 : aD.kX()
			} else aD.kX()
	}
	this.sh = function(g0) {
		0 !== jK && f.kg() && (aCM || aCQ(), aCN[g0] = !0, -1 === zc) && (zc = setInterval(aCS, 20), aCS())
	}, this.sd = function(g0) {
		if (0 !== jK && (aCM || aCQ(), aCN[g0] = !1, -1 !== zc)) {
			for (var aCT = !1, dw = 3; 0 <= dw; dw--) aCT = aCT || aCN[dw];
			aCT || this.kX()
		}
	}, this.kX = function() {
		if (aCM && -1 !== zc) {
			for (var dw = 3; 0 <= dw; dw--) aCN[dw] = !1;
			clearInterval(zc), zc = -1
		}
	}
}

function by() {
	this.jA = new aCU, this.w1 = new aCV, this.lm = new aCW, this.a54 = new aCX, this.cl = function() {
		this.jA.cl()
	}
}

function aCX() {
	var aCY = [];
	this.aCZ = function(a3Q) {
		var dw, hn, a4z, rg, aCa, aCb, a4W, aCc, aCd, aCe, aCi, aCj;
		if (a3Q !== aP.jA.a3y) aP.jA.close(a3Q, 3239);
		else if (6 === x.sb() && (bC.a4d.a4e(), aCY = [], aL.cl()), 7 !== x.sb()) aP.jA.close(a3Q, 3251);
		else {
			for (a4W = [0, 0, 0, 0], aCc = ai.mb(6), dw = 0; dw < 4; dw++) a4W[dw] = ai.mb(aCc);
			for (aCd = ai.mb(4), aCe = [], dw = 0; dw < aCd; dw++) {
				for (aCe.push({
						id: ai.mb(5),
						tu: ai.mb(4),
						a4u: 1 === ai.mb(1),
						pi: ai.mb(6),
						a4s: ai.mb(14),
						a4x: ai.mb(aCc),
						a4y: ai.mb(9) + 1,
						a3Z: ai.mb(10)
					}), a4z = ai.mb(3), rg = new Array(a4z), hn = 0; hn < a4z; hn++) aCa = ai.mb(9) + 1, aCb = ai.aCf(ai.mb(3)), rg[hn] = ("" === aCb ? "other: " : "[" + aCb + "]: ") + aCa;
				aCe[dw].a4z = a4z, aCe[dw].rg = rg
			}
			a3Q = ai.mb(16), aCi = ai.mb(20), aCj = ai.mb(12), 0 !== a3Q && (bC.a4d.iw ? aCY.push({
				aCh: a3Q,
				aCi: aCi,
				aCj: aCj
			}) : bC.a4d.cl(a3Q, aCi, aCj)), aL.a2H(a4W, aCe)
		}
	}, this.a55 = function(a4t) {
		var aCk;
		return !!bC.a4d.iw && (aCk = bC.a4d.aCl(), ag.bi(34), ag.p2(1, 0), ag.p2(3, 2), ag.p2(4, a4t), ag.p2(16, aCk[0]), ag.p2(10, aCk[1]), aP.jA.send(aP.jA.a3y, ag.ma), 0 !== aCY.length && (bC.a4d.cl(aCY[0].aCh, aCY[0].aCi, aCY[0].aCj), aCY
			.shift()), !0)
	}
}

function aCU() {
	var aCm, aCo;
	this.a4B = 5, this.a4C = this.a4B - 1, this.a3N = this.a4B + this.a4C, this.a3M = [0, 1, 5, 2, 6, 3, 7, 4, 8], this.aCn = null;

	function aCu(dw) {
		return aCo[dw].aCM && aCm[dw].aCu()
	}

	function aCw(a3Q) {
		aCo[a3Q].dX = b7.dX, aCo[a3Q].aCq = !1
	}
	this.sJ = 0, this.a3y = 0, this.cl = function() {
		this.aCn = new Array(this.a4B);
		this.aCn[0] = "territorial.io";
		var dw, a9y = aF.a9a(0);
		for (aF.tz(0), dw = 1; dw < this.a4B; dw++) this.aCn[dw] = h.r5() + ".territorial.io";
		for (aF.tz(a9y), aCm = new Array(this.a3N), aCo = new Array(this.a3N), dw = this.a3N - 1; 0 <= dw; dw--) aCo[dw] = {
			aCM: !1,
			dX: 0,
			aCq: !1
		}
	}, this.w7 = function() {
		return this.a3y < this.a4B ? this.a3y : this.a3y - this.a4C
	}, this.iK = function() {
		for (var dw = this.a3N - 1; 0 <= dw; dw--) this.a3I(dw) && b7.dX > aCo[dw].dX + 15e3 && aP.lm.aCr(dw, aCo[dw].aCq)
	}, this.zh = function(a3Q, aCs) {
		if (aCo[a3Q].aCM) {
			if (aCm[a3Q].aCu()) return aCm[a3Q].aCv(aCs), aCm[a3Q].a3I();
			aCm[a3Q].oL()
		}
		return this.aCt(a3Q, aCs), !1
	}, this.aCt = function(a3Q, aCs) {
		aCo[a3Q].aCM = !0, aCw(a3Q), aCm[a3Q] = new aCx, aCm[a3Q].cl(a3Q, aCs)
	}, this.aCv = function(a3Q, aCs) {
		aCu(a3Q) && aCm[a3Q].aCv(aCs)
	}, this.aCy = function(a3Q, aCs) {
		0 === aCs ? q.zj() : aCs < 3 ? aP.lm.a28(a3Q, aCs - 1) : 3 === aCs ? aP.lm.a5O(a3Q) : 4 === aCs ? w.zj(a3Q) : 5 === aCs ? a3Q === this.sJ && aP.lm.aCz() : 6 !== aCs && 7 === aCs && aP.lm.a5r(a3Q)
	}, this.a3I = function(dw) {
		return aCo[dw].aCM && aCm[dw].a3I()
	}, this.send = function(a3Q, ma) {
		aCw(a3Q), aCm[a3Q].send(ma)
	}, this.sI = function(a3Q) {
		aCo[a3Q].aCq = !0
	}, this.close = function(a3Q, aD0) {
		aCu(a3Q) && aCm[a3Q].close(aD0)
	}, this.aD1 = function(a3Q, aD0) {
		y.a3T(aD0), aCu(a3Q) && aCm[a3Q].close(aD0)
	}, this.a3V = function(aD0) {
		for (var dw = this.a3N - 1; 0 <= dw; dw--) this.close(dw, aD0)
	}, this.aD2 = function(a3Q, aD0) {
		for (var dw = this.a3N - 1; 0 <= dw; dw--) dw !== a3Q && this.close(dw, aD0)
	}, this.aD3 = function(a3Q, dG) {
		aCm[a3Q].oL(), y.cl(a3Q, dG.code)
	}
}

function aCV() {
	this.aD4 = function(a3Q, ma) {
		ai.cl(ma), 0 === ai.size ? aP.jA.aD1(a3Q, 3205) : (0 === (ma = ai.mb(1)) ? function(a3Q) {
			var aD9 = ai.mb(2);
			0 === aD9 ? (0 === ai.mb(1) ? function(a3Q) {
				var dw;
				if (0 === a3Q && 8 !== x.sb() && !(ai.size < 4)) {
					b0.fz(0, ai.aCf(ai.mb(5))), b0.fz(1, "[" + ai.aCf(ai.mb(3)) + "]");
					var aDC = ai.mb(12),
						aDD = ai.mb(6),
						eD = new Array(aDC);
					for (dw = 0; dw < aDC; dw++) eD[dw] = ai.mb(aDD);
					q.zl(eD)
				}
			} : function(a3Q) {
				var dw;
				if (8 !== x.sb())
					if (ai.size < 3) aP.jA.aD1(a3Q, 3208);
					else {
						var aDE, qg, a3Q = ai.mb(1),
							position = ai.mb(16),
							wf = ai.mb(4),
							eD = [];
						for (dw = 0; dw < wf; dw++) qg = ai.mb(14), aDE = ai.mb(5), aDE = ai.aCf(aDE), eD.push({
							name: aDE,
							qg: qg
						});
						0 === a3Q ? bA.a2A(0, eD, 10, 1, .36, .55, position) : bA.a2A(1, eD, 100, 2, .47, .5, position)
					}
			})(a3Q) : 1 === aD9 ? aP.a54.aCZ(a3Q) : 2 !== aD9 && 3 !== aD9 || aO.cl()
		}(a3Q) : 1 === ma && function(a3Q) {
			if (8 !== x.sb() && !aO.a4D()) return;
			if (a3Q !== aP.jA.sJ) aP.jA.aD1(a3Q, 3244);
			else if (0 === ai.mb(1)) b7.rR.aDJ(ai.ma);
			else {
				var dw, lm, m5, a3Q = ai.mb(2);
				if (0 === a3Q) 3 !== ai.size ? aP.jA.aD1(aP.jA.sJ, 3230) : (lm = ai.mb(9), m5 = ai.mb(7), 0 !== hA[lm] && 0 !== hA[eu] && (m5 %= b3.dx, k.m4(lm, eu, m5), a8.n7(lm, 1, m5)));
				else if (1 === a3Q) ! function() {
					var lm;
					2 !== ai.size ? aP.jA.aD1(aP.jA.sJ, 3235) : (lm = ai.mb(9), 0 !== hA[lm] && 0 !== hA[eu] && aV.a9h(0, [lm], !0) && k.mM(lm, 1))
				}();
				else if (2 === a3Q) ! function() {
					var lm, target;
					3 !== ai.size ? aP.jA.aD1(aP.jA.sJ, 3236) : (lm = ai.mb(9), target = ai.mb(9), 0 !== hA[lm] && 0 !== hA[target] && 0 !== hA[eu] && aV.a9h(1, [lm], !0) && (a8.n7(lm, 3, 96), a8.n7(target, 4, 96), k.w8(lm, target)))
				}();
				else if (dC && !dE) {
					var ez = 720;
					for (ag.bi(14404), ag.p2(1, 0), ag.p2(3, 4), ez = Math.min(aa.li.me.length, 720), dw = 0; dw < ez; dw++) ag.p2(20, aa.li.me[dw]);
					aP.jA.send(aP.jA.sJ, ag.ma)
				}
			}
		}(a3Q), b7.aD8())
	}, this.a4E = function(ma) {
		if (ai.cl(ma), ai.g0 = 1, 2 === ai.mb(2)) {
			ai.g0 += 20;
			for (var a5T, a5S, name, ma = ai.mb(9), ts = ai.mb(14), tu = ai.mb(4), a4u = 1 === ai.mb(1), a4v = ai.mb(6), a4w = ai.mb(14), aDI = ai.mb(9) + 1, qc = [], dw = 0; dw < aDI; dw++) a5T = ai.mb(1), a5S = [ai.mb(6), ai.mb(6), ai.mb(6)],
				name = ai.aCf(ai.mb(5)), qc.push({
					name: name,
					a5S: a5S,
					a5T: a5T
				});
			x.a3e(), au.bi(a4v, a4w), 1 === qc.length && a1.a5G(tu), tr(ts, ma, qc, tu, a4u, !1)
		} else ! function() {
			ai.g0 += 20;
			for (var a5T, a5S, qg, name, a45 = ai.mb(1), ts = ai.mb(14), tu = ai.mb(4), a4u = 1 === ai.mb(1), a4v = ai.mb(6), a4w = ai.mb(14), qc = [], dw = 0; dw < 2; dw++) a5T = ai.mb(1), a5S = [ai.mb(6), ai.mb(6), ai.mb(6)], qg = ai.mb(
				14), name = ai.aCf(ai.mb(5)), qc.push({
					name: name,
					a5S: a5S,
					qg: qg,
					a5T: a5T
				});
			x.a3e(), au.bi(a4v, a4w), tr(ts, a45, qc, tu, a4u, !1)
		}()
	}, this.a49 = function() {
		ai.g0 = 1;
		var aD9 = ai.mb(2),
			aDH = ai.mb(10);
		return aP.jA.a3y > aP.jA.a4C && (aDH += aP.jA.a4C), aP.jA.a3y === aDH ? (aP.jA.sJ = aDH, !1) : (aP.jA.close(aP.jA.a3y, 3247), aP.jA.sJ = aDH, aO.a44 = ai.mb(10), aO.a45 = ai.mb(2 === aD9 ? 9 : 1), aP.jA.zh(aDH, 5) && aP.lm.aCz(), !0)
	}
}

function aCW() {
	function aDP() {
		var de = dd(),
			aDR = Math.floor(de / 16777216);
		ag.p2(24, aDR), ag.p2(24, de - 16777216 * aDR)
	}

	function aDQ() {
		ag.p2(14, d9), ag.p2(4, dV ? 2 : 12 <= dZ ? 1 : 0 < dZ ? 3 : 0), ag.p2(1, dC ? 1 : 0), ag.p2(1, dE ? 1 : 0), ag.p2(5, (new Date).getHours() % 24)
	}
	this.zk = function() {
		ag.bi(18), ag.p2(1, 0), ag.p2(3, 0), ag.p2(14, d9), aP.jA.send(0, ag.ma)
	}, this.a3O = function(a3Q) {
		var eD = h.r1(a2.a5R()),
			w9 = eD.length,
			a5S = (ag.bi(151 + 10 * w9), ag.p2(1, 0), ag.p2(3, 1), ag.p2(20, dD), ag.p2(26, aZ.id), ag.p2(10, Math.min(aZ.wc, 1023)), gE.vK[2].rH.a34());
		ag.p2(6, a5S[0]), ag.p2(6, a5S[1]), ag.p2(6, a5S[2]), aDP(), aDQ();
		for (var dw = 0; dw < w9; dw++) ag.p2(10, eD[dw]);
		aP.jA.a3y = a3Q, aP.jA.send(a3Q, ag.ma)
	}, this.a28 = function(a3Q, id) {
		ag.bi(38), ag.p2(1, 0), ag.p2(3, 7), ag.p2(3, 0), ag.p2(14, d9), ag.p2(1, id), ag.p2(16, Math.abs(4096 + bA.position[id] + bA.a27[id]) % 65536), aP.jA.send(a3Q, ag.ma)
	}, this.a5r = function(a3Q) {
		var dw, dG;
		if (!(a2.a5g + 7e3 > b7.dX)) {
			for (a2.a5g = b7.dX, ag.bi(136), ag.p2(1, 0), ag.p2(3, 7), ag.p2(3, 2), aDP(), dG = vg(a2.a5f.length - 20, 0), dw = a2.a5f.length - 1; dG <= dw; dw--) ag.p2(4, Math.abs(a2.a5f.charCodeAt(dw) - 48) % 10);
			aP.jA.send(a3Q, ag.ma)
		}
	}, this.aCr = function(a3Q, aCq) {
		ag.bi(13), ag.p2(1, 0), ag.p2(3, 5), ag.p2(9, aCq ? 1 : 0), aP.jA.send(a3Q, ag.ma)
	}, this.aCz = function() {
		ag.bi(55), ag.p2(1, 0), ag.p2(3, 6), ag.p2(8, aP.jA.w7()), ag.p2(10, aO.a44), ag.p2(9, aO.a45), ag.p2(10, dD), ag.p2(14, d9), aP.jA.send(aP.jA.sJ, ag.ma)
	}, this.ln = function(gl) {
		ag.bi(27), ag.p2(1, 1), ag.p2(4, 0), ag.p2(22, gl), aP.jA.send(aP.jA.sJ, ag.ma)
	}, this.lp = function(hE, hg) {
		ag.bi(25), ag.p2(1, 1), ag.p2(4, 1), ag.p2(10, hE), ag.p2(10, hg), aP.jA.send(aP.jA.sJ, ag.ma)
	}, this.lt = function(hE, lr) {
		ag.bi(24), ag.p2(1, 1), ag.p2(4, 2), ag.p2(10, hE), ag.p2(9, lr), aP.jA.send(aP.jA.sJ, ag.ma)
	}, this.lx = function(hE, gl) {
		ag.bi(37), ag.p2(1, 1), ag.p2(4, 3), ag.p2(10, hE), ag.p2(22, gl), aP.jA.send(aP.jA.sJ, ag.ma)
	}, this.m1 = function(lz, gl) {
		ag.bi(37), ag.p2(1, 1), ag.p2(4, 4), ag.p2(10, lz), ag.p2(22, gl), aP.jA.send(aP.jA.sJ, ag.ma)
	}, this.m3 = function(hg) {
		ag.bi(15), ag.p2(1, 1), ag.p2(4, 5), ag.p2(10, hg), aP.jA.send(aP.jA.sJ, ag.ma)
	}, this.m7 = function(g0) {
		ag.bi(12), ag.p2(1, 1), ag.p2(4, 6), ag.p2(7, g0), aP.jA.send(aP.jA.sJ, ag.ma)
	}, this.mA = function(m9) {
		ag.bi(6), ag.p2(1, 1), ag.p2(4, 7), ag.p2(1, m9), aP.jA.send(aP.jA.sJ, ag.ma)
	}, this.mC = function() {
		ag.bi(5), ag.p2(1, 1), ag.p2(4, 8), aP.jA.send(aP.jA.sJ, ag.ma)
	}, this.mU = function(a6x, mT) {
		ag.bi(29), ag.p2(1, 1), ag.p2(4, 10), ag.p2(12, a6x), ag.p2(2, 0), ag.p2(10, mT), aP.jA.send(aP.jA.sJ, ag.ma)
	}, this.mX = function(a6x, pW, pX, aDS) {
		ag.bi(46), ag.p2(1, 1), ag.p2(4, 10), ag.p2(12, a6x), ag.p2(2, 1), ag.p2(9, pW), ag.p2(9, pX), ag.p2(9, aDS), aP.jA.send(aP.jA.sJ, ag.ma)
	}, this.mZ = function(a6x) {
		var dw, rW = at.jB.rW;
		for (ag.bi(47 + 33 * rW.length), ag.p2(1, 1), ag.p2(4, 10), ag.p2(12, a6x), ag.p2(2, 2), ag.p2(24, at.jB.rV), ag.p2(4, rW.length), dw = 0; dw < rW.length; dw++) ag.p2(9, rW[dw].player), ag.p2(24, rW[dw].ri);
		aP.jA.send(aP.jA.sJ, ag.ma)
	}, this.mK = function(aDT, aDU) {
		ag.bi(21), ag.p2(1, 1), ag.p2(4, 15), ag.p2(9, aDU), ag.p2(7, aDT), aP.jA.send(aP.jA.sJ, ag.ma)
	}, this.mN = function(w1) {
		ag.bi(14), ag.p2(1, 1), ag.p2(4, 14), ag.p2(9, w1), aP.jA.send(aP.jA.sJ, ag.ma)
	}, this.mR = function(aDV, target) {
		var dw, ez = aDV.length;
		for (ag.bi(14 + 9 * ez), ag.p2(1, 1), ag.p2(4, 13), ag.p2(9, target), dw = 0; dw < ez; dw++) ag.p2(9, aDV[dw]);
		aP.jA.send(aP.jA.sJ, ag.ma)
	}, this.a5O = function(a3Q) {
		ag.bi(29), ag.p2(1, 0), ag.p2(3, 3), aDQ(), aP.jA.send(a3Q, ag.ma)
	}
}

function aCx() {
	var a3Q, aCs, rs;

	function aDZ() {}

	function aCy() {
		aP.jA.aCy(a3Q, aCs)
	}

	function aDb(dG) {
		aP.w1.aD4(a3Q, new Uint8Array(dG.data))
	}

	function aDc() {}

	function aD3(dG) {
		aP.jA.aD3(a3Q, dG)
	}
	this.cl = function(g0, aDW) {
		a3Q = g0, aCs = aDW, 0;
		g0 = xG[0];
		a3Q < aP.jA.a4B ? g0 += aP.jA.aCn[a3Q] + xG[1 + d8] : g0 += aP.jA.aCn[0] + "/i" + (1 + d8) + (a3Q - aP.jA.a4C) + "/", (rs = new WebSocket(g0)).binaryType = "arraybuffer", rs.onopen = aCy, rs.onmessage = aDb, rs.onclose = aD3, rs.onerror =
			aDc
	}, this.aDY = function() {
		return rs.readyState === rs.CONNECTING
	}, this.a3I = function() {
		return rs.readyState === rs.OPEN
	}, this.aCu = function() {
		return this.aDY() || this.a3I()
	}, this.aCv = function(aDW) {
		aCs = aDW
	}, this.send = function(ma) {
		this.a3I() && rs.send(ma)
	}, this.close = function(aD0) {
		this.aCu() && (rs.close(aD0), this.oL())
	}, this.oL = function() {
		rs.onopen = aDZ, rs.onmessage = aDZ, rs.onclose = aDZ, rs.onerror = aDZ
	}
}

function bz() {
	var aDe;

	function aDk(js, jt, ju, jw) {
		return Math.abs(ju - js) + Math.abs(jw - jt)
	}
	this.aDf = function() {
		return aDe
	}, this.fp = function(player, aDg) {
		var dw;
		if (0 !== fI[player].length && a4.f1(aDg) && (a4.fB(aDg) || a4.fA(aDg) !== player))
			for (dw = 21; 0 <= dw; dw--)
				if (function(aDe, aDg) {
						var aDj, dw, pl = a4.jx(aDe),
							pm = a4.gF(aDe),
							q7 = a4.jx(aDg),
							q6 = a4.gF(aDg),
							aCR = aDk(pl, pm, q7, q6);
						if (!(aCR < 2))
							for (aDj = aDe, dw = 0; dw < aCR; dw++)
								if (Math.abs(q7 - a4.jx(aDj)) >= Math.abs(q6 - a4.gF(aDj)) ? aDj += eV[pl < q7 ? 1 : 3] : aDj += eV[pm < q6 ? 2 : 0], !a4.uh(aDj)) return !!a4.f1(aDj) && !(0 === dw || dw + 20 < aCR);
						return
					}(aDe = 21 === dw ? function(border, aDg) {
						for (var aCR, q7 = a4.jx(aDg), q6 = a4.gF(aDg), g0 = 0, min = aDk(q7, q6, a4.jx(border[0]), a4.gF(border[0])), dw = border.length - 1; 1 <= dw; dw--)(aCR = aDk(q7, q6, a4.jx(border[dw]), a4.gF(border[dw]))) < min && (
							min = aCR, g0 = dw);
						return border[g0]
					}(fI[player], aDg) : fI[player][er(dw * fI[player].length, 21)], aDg)) return !0;
		return !1
	}
}

function cz() {
	var aDl = !1,
		wZ = 0,
		g6 = 0,
		qY = 0,
		gap = 0,
		gS = null,
		qT = null,
		t1 = null;

	function aDn() {
		for (var a4i, aDq = 0, ez = 0, iZ = Math.floor(g6 / 2), gV = Math.floor(qY / 2), a4h = 1.5 * Math.PI, dw = tp; 0 <= dw; dw--) ez += t1[dw], 0 === t1[dw] && aDq++;
		if (aDl = !1, qT.clearRect(0, 0, g6, g6), qT.fillStyle = ae.kv, qT.fillRect(0, 0, g6, g6), qT.fillStyle = ae.gK, qT.fillRect(0, 0, g6, gap), qT.fillRect(0, 0, gap, g6), qT.fillRect(g6 - gap, 0, gap, g6), qT.fillRect(0, g6 - gap, g6, gap), 0 <
			ez)
			if (aDq === tp) {
				for (dw = tp; 0 <= dw; dw--)
					if (0 < t1[dw]) {
						! function(dw, iZ, gV) {
							qT.fillStyle = b8.a4m[b8.rY[dw]], qT.beginPath(), qT.arc(iZ, iZ, gV, 0, 2 * Math.PI), qT.fill()
						}(dw, iZ, gV);
						break
					}!
				function(iZ) {
					var fontSize = iZ / 3;
					qT.font = ad.kp.oK(fontSize, 1), qT.fillStyle = ae.gK, qT.fillText("100%", iZ, iZ + .1 * fontSize)
				}(iZ)
			} else {
				for (dw = 0; dw <= tp; dw++) 0 < t1[dw] && (! function(dw, iZ, gV, a4h, a4i) {
					qT.fillStyle = b8.a4m[b8.rY[dw]], qT.beginPath(), qT.arc(iZ, iZ, gV, a4h, a4i), qT.lineTo(iZ, iZ), qT.fill()
				}(dw, iZ, gV, a4h, a4i = a4h + 2 * Math.PI * t1[dw] / ez), function(iZ, gV, a4h, a4i) {
					var e4 = (a4i - a4h) / (2 * Math.PI),
						fontSize = +gV * Math.min(e4, .37);
					fontSize < 8 || (a4h = (a4h + a4i) / 2, a4i = Math.floor(100 * e4 + .5) + "%", gV *= .525 - Math.max(.6 * (e4 - .7), 0), qT.font = ad.kp.oK(fontSize, 1), qT.fillStyle = ae.gK, qT.fillText(a4i, iZ + Math.cos(a4h) * gV, iZ +
						Math.cos(a4h + 1.5 * Math.PI) * gV))
				}(iZ, gV, a4h, a4i), 0 !== dw && a4k(iZ, gV, a4h), a4h = a4i);
				a4k(iZ, gV, 1.5 * Math.PI)
			}!
		function(iZ, gV) {
			qT.beginPath(), qT.arc(iZ, iZ, gV, 0, 2 * Math.PI), qT.stroke()
		}(iZ, gV)
	}

	function a4k(iZ, gV, a4n) {
		qT.beginPath(), qT.moveTo(iZ, iZ), qT.lineTo(iZ + Math.cos(a4n) * gV, iZ + Math.cos(a4n + 1.5 * Math.PI) * gV), qT.stroke()
	}
	this.cl = function() {
		if (ha) {
			var dw;
			for (wZ = 0, t1 = new Uint32Array(tp + 1), dw = tp; 0 <= dw; dw--) t1[dw] = 0;
			for (dw = ib - 1; 0 <= dw; dw--) t1[b8.ia[ic[dw]]] += 1;
			this.resize()
		} else t1 = qT = gS = null
	}, this.y4 = function() {
		return g6
	}, this.resize = function() {
		ha && (g6 = Math.floor(di && !kT ? .18 * xJ : .13 * fy), g6 = (g6 *= 1 + (.5 + .2 * di) * kT) + g6 % 2, qY = Math.floor(7 * g6 / 8), (gS = gS || document.createElement("canvas")).width = g6, gS.height = g6, qT = gS.getContext("2d", {
			alpha: !0
		}), gap = Math.max(1, .015 * g6), qT.lineWidth = gap, qT.strokeStyle = ae.gK, ad.kp.textAlign(qT, 1), ad.kp.textBaseline(qT, 1), aDn())
	}, this.ra = function() {
		return t1[this.rZ()]
	}, this.rJ = function() {
		return wZ = 31, this.iK(), this.rZ()
	}, this.rZ = function() {
		for (var aDo = 0, dw = tp; 0 < dw; dw--) t1[dw] > t1[aDo] && (aDo = dw);
		return aDo
	}, this.iK = function() {
		if (ha && 32 <= ++wZ) {
			var dw;
			for (wZ = 0, dw = tp; 0 <= dw; dw--) t1[dw] = 0;
			for (dw = ib - 1; 0 <= dw; dw--) t1[b8.ia[ic[dw]]] += fP[ic[dw]];
			aDl = !0
		}
	}, this.g3 = function() {
		ha && aDl && aDn()
	}, this.gG = function() {
		ha && (kT ? gH.drawImage(gS, nf, nf) : gH.drawImage(gS, nf, y5 + 2 * nf))
	}
}

function cT() {
	this.d5 = function() {
		var value;
		dW || dV || (value = function(key) {
			if ("undefined" == typeof URLSearchParams) return null;
			var yx = window.location.search,
				yx = new URLSearchParams(yx).get(key);
			if ("string" != typeof yx || yx.length < 1) return null;
			return yx
		}("replay")) && ac.show(value)
	}, this.clear = function() {
		var e3;
		dW || dV || ((e3 = new URL(window.location.href)).search = "", history.replaceState(null, "", e3.toString()))
	}
}

function c0() {
	var aDv, eD;
	this.cl = function() {
		for (var dw = (eD = new Uint16Array(101)).length - 1; 0 <= dw; dw--) eD[dw] = er(32768 * dw, 100);
		this.tz(0)
	}, this.value = function(f6) {
		return eD[f6]
	}, this.a9a = function() {
		return er(aDv - 1, 2)
	}, this.tz = function(a9y) {
		aDv = 2 * a9y % 32768 + 1
	}, this.random = function() {
		return aDv = 167 * aDv % 32768
	}, this.hq = function(jX) {
		return er(jX * this.random(), 32768)
	}, this.iT = function(f6) {
		return 0 !== f6 && this.random() < this.value(f6)
	}
}

function cK() {
	this.mp = new aDw, this.z4 = new aDx, this.z3 = new aDy, this.cl = function(ts, qc, tu, tv) {
		var aDz;
		fj || ((aDz = {}).tt = eu, aDz.ts = ts, aDz.qc = qc, aDz.tu = tu, aDz.tv = tv, aDz.a4v = au.pi, aDz.a4w = au.a4s, a1.a5L(aDz), this.mp.cl(aDz))
	}, this.iK = function() {
		fj || this.mp.iK()
	}, this.z2 = function() {
		var t7 = this.mp.aDz;
		0 === jK && x.a3e(), au.bi(t7.a4v, t7.a4w), 1 === t7.qc.length && (a1.a5G(t7.tu), a1.a5I(t7.a5J, t7.a5K)), aP.jA.close(aP.jA.sJ, 3246), a1.a5N(), tr(t7.ts, t7.tt, t7.qc, t7.tu, t7.tv, !0)
	}, this.z0 = function(df) {
		var dw = df.indexOf("=");
		return 0 <= dw ? df.substring(dw + 1) : df
	}, this.z5 = function(df) {
		return "https://territorial.io/?replay=" + df
	}
}

function aDw() {
	this.aE0 = null, this.aE1 = null, this.aE2 = null, this.aE3 = null, this.aE4 = null, this.aE5 = null;
	var aE6 = 0;
	this.aDz = null, this.z1 = "", this.cl = function(aDz) {
		this.aE0 = [], this.aE1 = [], this.aE2 = [], this.aE3 = [], this.aE4 = [0], this.aE5 = [0], aE6 = 0, this.aDz = aDz, this.z1 = ""
	}, this.mq = function(id, eE, eG, eI) {
		fj || 2 === jK || (0 === this.aE4[aE6] && (this.aE5[aE6] ? (this.aE4.push(1), this.aE5.push(0), aE6++) : this.aE4[aE6] = 1), this.aE0.push(id), this.aE1.push(eE), this.aE2.push(void 0 === eG ? 0 : eG), this.aE3.push(void 0 === eI ? 0 :
			eI), this.aE5[aE6]++)
	}, this.iK = function() {
		0 === this.aE4[aE6] ? this.aE5[aE6]++ : (this.aE4.push(0), this.aE5.push(0), aE6++)
	}
}

function aDy() {
	function aEC(df) {
		0 === jK ? y.a3T(3605) : k.vu(df)
	}
	this.p5 = function(df) {
		if (aj.p0(aj.ox(aj.ow(df))), ! function() {
				if (ai.size < 10) aEC("File Too Small");
				else if (ai.mb(9) !== dB && aEC("Game Version Error"), ai.mb(31) !== ai.size) aEC("Size Error");
				else {
					if (function(i5) {
							var dw, f6 = ai.ma,
								ez = ai.size,
								a6x = 0;
							for (dw = 7; dw < ez; dw++) a6x = a6x + f6[dw] & 65535;
							return a6x === i5
						}(ai.mb(16))) return 1;
					aEC("Hash Error")
				}
				return
			}()) return !1;
		(aDz = {}).tt = ai.mb(9), aDz.ts = ai.mb(14), aDz.tu = ai.mb(4), aDz.tv = 1 === ai.mb(1), aDz.a4v = ai.mb(6), aDz.a4w = ai.mb(14), aDz.aEE = ai.mb(10), ab.mp.aDz = aDz,
			function() {
				var dw, a5T, a5S, name, ez = ab.mp.aDz.aEE,
					qc = [];
				for (dw = 0; dw < ez; dw++) a5T = ai.mb(1), a5S = [ai.mb(6), ai.mb(6), ai.mb(6)], name = ai.aCf(ai.mb(5)), qc.push({
					name: name,
					a5S: a5S,
					a5T: a5T
				});
				if (ab.mp.aDz.qc = qc, 8 === ab.mp.aDz.tu)
					for (dw = 0; dw < ez; dw++) qc[dw].qg = ai.mb(14)
			}(),
			function() {
				var dw, ez, aEF = ab.mp.aDz;
				if (1 === aEF.qc.length)
					for (ez = 6 < aEF.tu ? 1 : aEF.tu + 2, aEF.a5J = new Array(ez), aEF.a5K = new Array(ez), dw = 0; dw < ez; dw++) aEF.a5J[dw] = ai.mb(3), aEF.a5K[dw] = ai.mb(9) + 1
			}(), aDz = ai.mb(5), aEG = ai.mb(30), aEH = ai.mb(30);
		var aDz, aEG, aEH, dw, id, ez = aEG,
			aEK = new Uint8Array(ez),
			aEL = new Uint16Array(ez),
			aEM = new Uint32Array(ez),
			aEN = new Uint32Array(ez);
		for (ab.mp.aE0 = aEK, ab.mp.aE1 = aEL, ab.mp.aE2 = aEM, ab.mp.aE3 = aEN, dw = 0; dw < ez; dw++) aEK[dw] = id = ai.mb(4), aEL[dw] = ai.mb(9), 0 === id ? aEM[dw] = ai.mb(22) : 1 === id ? (aEM[dw] = ai.mb(10), aEN[dw] = ai.mb(10)) : 2 ===
			id ? (aEM[dw] = ai.mb(10), aEN[dw] = ai.mb(9)) : 3 === id || 4 === id ? (aEM[dw] = ai.mb(10), aEN[dw] = ai.mb(22)) : 5 === id ? aEM[dw] = ai.mb(10) : 6 === id ? aEM[dw] = ai.mb(7) : 7 === id && (aEM[dw] = ai.mb(1));
		return function(ez, p6) {
			var dw, aE4 = new Uint8Array(ez),
				aE5 = new Array(ez);
			for (aE5.fill(0), ab.mp.aE4 = aE4, ab.mp.aE5 = aE5, dw = 0; dw < ez; dw++) aE4[dw] = ai.mb(1), aE5[dw] = ai.mb(p6)
		}(aEH, aDz), ai.g0 < 8 * ai.size - 13 || ai.g0 > 8 * ai.size ? (aEC("Out Of Bounds Error: " + ai.g0 + " " + 8 * ai.size), !1) : (ab.mp.z1 = df, !0)
	}
}

function aDx() {
	this.r1 = function() {
		var aEF, p6 = function() {
				var dw, aE5 = ab.mp.aE5,
					ez = aE5.length,
					max = 0;
				for (dw = 0; dw < ez; dw++) max = Math.max(max, aE5[dw]);
				return pD(Math.max(max, 1))
			}(),
			aEP = function(p6) {
				return 179 + function() {
					var dw, qc = ab.mp.aDz.qc,
						ez = qc.length,
						aEP = 24 * ez;
					for (dw = 0; dw < ez; dw++) aEP += 10 * h.r1(qc[dw].name).length;
					8 === ab.mp.aDz.tu && (aEP += 14 * ez);
					return aEP
				}() + (1 === ab.mp.aDz.qc.length ? 12 * ab.mp.aDz.a5J.length : 0) + function() {
					var dw, aE0 = ab.mp.aE0,
						ez = aE0.length,
						aEP = 13 * ez,
						aEd = [22, 20, 19, 32, 32, 10, 7, 1, 0, 0];
					for (dw = 0; dw < ez; dw++) aEP += aEd[aE0[dw]];
					return aEP
				}() + function(p6) {
					return ab.mp.aE5.length * (1 + p6)
				}(p6)
			}(p6);
		ag.bi(aEP + (6 - aEP % 6) % 6), aEF = ab.mp.aDz, ag.p2(9, dB), ag.p2(31, ag.size), ag.g0 += 16, ag.p2(9, aEF.tt), ag.p2(14, aEF.ts), ag.p2(4, aEF.tu), ag.p2(1, aEF.tv), ag.p2(6, aEF.a4v), ag.p2(14, aEF.a4w), ag.p2(10, aEF.qc.length);
		var dw, hx, aEX, aEY, qc = ab.mp.aDz.qc,
			ez = qc.length;
		for (dw = 0; dw < ez; dw++)
			for (ag.p2(1, qc[dw].a5T), ag.p2(18, (qc[dw].a5S[0] << 12) + (qc[dw].a5S[1] << 6) + qc[dw].a5S[2]), aEX = h.r1(qc[dw].name), aEY = aEX.length, ag.p2(5, aEY), hx = 0; hx < aEY; hx++) ag.p2(10, aEX[hx]);
		if (8 === ab.mp.aDz.tu)
			for (dw = 0; dw < ez; dw++) ag.p2(14, qc[dw].qg);
		return function() {
				var dw, aEF = ab.mp.aDz;
				if (1 === aEF.qc.length)
					for (dw = 0; dw < aEF.a5J.length; dw++) ag.p2(3, aEF.a5J[dw]), ag.p2(9, aEF.a5K[dw] - 1)
			}(),
			function(p6) {
				var dw, aE0 = ab.mp.aE0,
					eE = ab.mp.aE1,
					eG = ab.mp.aE2,
					eI = ab.mp.aE3,
					ez = aE0.length;
				for (ag.p2(5, p6), ag.p2(30, ez), ag.p2(30, ab.mp.aE5.length), dw = 0; dw < ez; dw++) ag.p2(4, aE0[dw]), ag.p2(9, eE[dw]), 0 === aE0[dw] ? ag.p2(22, eG[dw]) : 1 === aE0[dw] ? (ag.p2(10, eG[dw]), ag.p2(10, eI[dw])) : 2 === aE0[
					dw] ? (ag.p2(10, eG[dw]), ag.p2(9, eI[dw])) : 3 === aE0[dw] || 4 === aE0[dw] ? (ag.p2(10, eG[dw]), ag.p2(22, eI[dw])) : 5 === aE0[dw] ? ag.p2(10, eG[dw]) : 6 === aE0[dw] ? ag.p2(7, eG[dw]) : 7 === aE0[dw] && ag.p2(1, eG[dw])
			}(p6),
			function(p6) {
				var dw, aE4 = ab.mp.aE4,
					aE5 = ab.mp.aE5,
					ez = aE4.length;
				for (dw = 0; dw < ez; dw++) ag.p2(1, aE4[dw]), ag.p2(p6, aE5[dw])
			}(p6), ag.g0 !== aEP && k.vu("Encoder Index Error: " + ag.g0 + " " + aEP), ag.g0 = 40, ag.p2(16, function() {
				var dw, f6 = ag.ma,
					ez = ag.size,
					a6x = 0;
				for (dw = 7; dw < ez; dw++) a6x = a6x + f6[dw] & 65535;
				return a6x
			}()), ai.cl(ag.ma), ah.qp(ah.qn(er(aEP - 1, 6) + 1))
	}
}

function c5() {
	var iZ, wL = !1,
		aEe = !1,
		aEf = -1e4;

	function resize(gj) {
		iZ = 0, a3.g4() && (aEg(gj) || wL) && (wL = !1, xH(), b0.cl(), v.cl(), z.resize(), ay.cl(), w.resize(), q.resize(), l.resize(), b6.resize(), bA.resize(), b3.cl(), aw.resize(), 1 <= jK ? (s.resize(!1), r.resize(), t.resize(), p.resize(), o
			.resize(), k.resize(), j.resize(), ac.resize(), af.resize(), aN.resize(), m.resize(), n.resize(), i.resize(), b5.resize(), a8.resize(), u.resize(), b9.resize(), p.zJ()) : (2 === x.sb() ? a1.resize() : 3 === x.sb() && y.resize(), x
			.a3k(), x.a3n()), b7.d6 = !0)
	}

	function aEh(e4) {
		return e4 && 128 < e4 ? Math.floor(e4) : 128
	}

	function aEg(gj) {
		var qY, wS, wT;
		return aK.aCF(), qY = aEh(document.documentElement.clientWidth), wS = window.visualViewport ? aEh(window.visualViewport.height) : aEh(document.documentElement.clientHeight), gj && !aEe ? (aEe = !0, document.body.removeChild(s0)) : aEe && (
			aEe = !1, document.body.appendChild(s0)), gj = Math.floor(.5 + nV * qY), wT = Math.floor(.5 + nV * wS), !(gj === jv && wT === gD || al.sl() && (z.oY || ac.oY)) && (jv = dj = gj, gD = dk = wT, xJ = yN(dj, dk), fy = er(dk + dj, 2), s0
			.width = gj, s0.height = wT, s0.style.width = qY + "px", s0.style.height = wS + "px", 1)
	}
	this.cl = function() {
		dj = dk = xJ = jv = gD = fy = 0, nV = iZ = 1, s0 = document.getElementById("canvasA"), (gH = s0.getContext("2d", {
			alpha: makeMainMenuTransparent
		})).imageSmoothingEnabled = !1, aEg(0)
	}, this.iK = function() {
		aS.iK(), 50 <= ++iZ && resize(0)
	}, this.a5a = function(gj) {
		wL = !0, resize(gj)
	}, this.sm = function() {
		aEf + 1e3 > b7.dX || (aEf = b7.dX, resize(0))
	}, this.aCF = function() {
		var aEi = window.devicePixelRatio || 1,
			dw = aR.k1.aCD,
			dw = (nV = dw < 3 ? .5 + .25 * dw : (.5 + .125 * (dw - 3)) * aEi, aEh(document.documentElement.clientWidth)),
			i5 = window.visualViewport ? aEh(window.visualViewport.height) : aEh(document.documentElement.clientHeight),
			aEk = dV || dW || dw < i5 ? 700 : 1200,
			kb = nV / aEi,
			kb = Math.min(Math.max(kb, aEk / ((dw + i5) / 2)), 1);
		return nV = aEi * kb, kb
	}
}

function c1() {
	var player, hh, pW, pQ, js, jt, ju, jw, g0, aEl, id;

	function aEr() {
		var hg;
		if (a4.fB(pW)) hg = f3;
		else {
			if ((hg = a4.fA(pW)) === player) return void aEt(!0);
			if (!hs(player, hg)) return function(hg) {
				var max = fP[hg] * tL - ev[hg];
				max <= 0 || (hh -= max = max < hh ? max : hh, player === eu && (k.mH(max, 0, hg), b4.ex[16] += max), hg === eu && (k.wE(max, player), b4.ex[10] += max), ev[hg] += max, a8.mI(hg, max))
			}(hg), void aEt(!0)
		}
		player === eu && (b4.ex[13] += hh), e.et(player, id), a6.ey(player, aEl), f0[player].push(pQ), a6.hd(player, hh, hg), c.he(player, !0)
	}

	function aEt(aEw) {
		e.et(player, id), a6.ey(player, aEl), aEw && (ev[player] += hh)
	}

	function aEn() {
		a4.a6h(pW, player) && a4.a6j(pW)
	}

	function aEm(dw, a86, y0, hp, kg) {
		if (g0 = dw, id = a86, player = y0, js = a4.jx(hp), jt = a4.gF(hp), ju = a4.jx(kg), jw = a4.gF(kg), pQ = pW = a4.q1(js, jt), -1 !== (aEl = a6.k0(player, id))) return hh = a6.el(player, aEl), 1;
		aEn(), e.et(player, id)
	}
	this.iK = function(dw, id, y0, hp, kg) {
		aEm(dw, id, y0, hp, kg) && (aEn(), function() {
			var aEx = er(hh, 128);
			hh -= aEx = aEx < 1 ? 1 : aEx, player === eu && (b4.ex[15] += aEx);
			if (hh <= es) return player === eu && (b4.ex[15] += hh), void aEt(!1);
			return a6.fO(player, aEl, hh), 1
		}()) && (dw = a4.q1(js, jt), pW = Math.abs(ju - js) >= Math.abs(jw - jt) ? dw + eV[js < ju ? 1 : 3] : dw + eV[jt < jw ? 2 : 0], js = a4.jx(pW), jt = a4.gF(pW), e.jg(g0, pW), ! function() {
			if (a4.f1(pW)) return;
			return 1
		}() ? aEr() : a4.uh(pW) && a4.a6m(pW, player))
	}, this.jj = function(y0, hp) {
		player = y0, pW = a4.q1(a4.jx(hp), a4.gF(hp)), aEn()
	}
}

function ci() {
	this.a4d = new aEy
}

function aEy() {
	var yf = 0,
		a4p = 0,
		dX = 0,
		ex = [1, 0, 0, 1, 0, 0];

	function aEz(hx) {
		var dw, aF0 = ex[0],
			aCh = ex[1],
			aCi = ex[2],
			hn = ex[3];
		if ((hx = Math.min(hx, ex[4])) < hn) yf = a4p = 0;
		else {
			for (yf = performance.now(), dw = hn; dw <= hx; dw++) aCh = aF2(aCh, aF0 = function(aF0, aCh, aCi, gu) {
				var dw, ez = 65536 + (aF0 * gu & 16383);
				for (dw = 0; dw < ez; dw++) aF0 = 1 + aF0 * aCh % aCi;
				return aF0
			}(aF0, aCh, aCi, dw), 16384, 65536), aCi = aF2(aCi, aF0, 1 << 18, 1 << 20);
			ex[0] = aF0, ex[1] = aCh, ex[2] = aCi, ex[3] = dw, a4p = performance.now(), ex[5] += a4p - yf
		}
	}

	function aF2(e4, a9y, min, max) {
		return min + (e4 * a9y + 137) % (max - min)
	}
	this.iw = !1, this.cl = function(aCh, aCi, aCj) {
		ex[0] = 1, ex[1] = aCh, ex[2] = aCi, ex[3] = 0, ex[4] = aCj, ex[5] = 0, this.iw = !0
	}, this.a4e = function() {
		this.iw = !1, ex[3] = ex[4] + 1
	}, this.aCl = function() {
		return aEz(ex[4]), this.iw = !1, [ex[0] - 1 & 65535, Math.min(Math.floor(Math.sqrt(ex[5])), 1023)]
	}, this.iK = function() {
		7 !== x.sb() || ex[4] < ex[3] || b7.dX < dX || (aEz(ex[3] + Math.floor(ex[4] / 20)), dX = a4p + 250)
	}
}

function c2() {
	var aF3, aF4, uh, aF5;
	this.cl = function() {
		var dw, jn, jo, a5S, aF6, g6, i5, qT, gP, pO, e4, f6, iD, hn, aF9;
		if (function() {
				if (uh = !0, aF5 = "rgb(" + au.pL[0] + "," + au.pL[1] + "," + au.pL[2] + ")", au.aA6(au.pi)) return 1;
				return uh = !1, 0
			}()) aF4 = null;
		else {
			for (aF3 = er(96, 4), aF6 = 1 === au.pi ? (a5S = 0, 160) : (a5S = 128, 32), aF5 = "rgb(" + a5S + "," + a5S + "," + a5S + ")", aF4 = new Array(4), dw = 3; 0 <= dw; dw--) {
				if (aF4[dw] = document.createElement("canvas"), g6 = dw % 2 == 0 ? au.eZ : aF3, i5 = dw % 2 == 0 ? aF3 : au.ea + 2 * aF3, aF4[dw].width = g6, aF4[dw].height = i5, pO = (gP = (qT = aF4[dw].getContext("2d", {
						alpha: !1
					})).getImageData(0, 0, g6, i5)).data, dw % 2 == 0)
					for (jo = aF3 - 1; 0 <= jo; jo--)
						for (e4 = aF6 + Math.floor((jo + 1) * (a5S - aF6) / (aF3 + 1)), jn = g6 - 1; 0 <= jn; jn--) pO[f6 = 4 * ((0 === dw ? aF3 - jo - 1 : jo) * g6 + jn)] = e4, pO[f6 + 1] = e4, pO[f6 + 2] = e4, pO[f6 + 3] = 255;
				else {
					for (jn = aF3 - 1; 0 <= jn; jn--)
						for (e4 = aF6 + Math.floor((jn + 1) * (a5S - aF6) / (aF3 + 1)), jo = i5 - 1 - aF3; aF3 <= jo; jo--) pO[f6 = 4 * (jo * g6 + (3 === dw ? aF3 - jn - 1 : jn))] = e4, pO[f6 + 1] = e4, pO[f6 + 2] = e4, pO[f6 + 3] = 255;
					for (hn = 1; 0 <= hn; hn--)
						for (jn = aF3 - 1; 0 <= jn; jn--)
							for (jo = aF3 - 1; 0 <= jo; jo--) iD = (Math.pow(jn * jn + jo * jo, .5) + 1) / (aF3 + 1), e4 = aF6 + Math.floor((1 < iD ? 1 : iD) * (a5S - aF6)), pO[f6 = 4 * ((0 === hn ? aF3 - jo - 1 : jo + hn * (i5 - aF3)) * g6 + (
								1 === dw ? jn : aF3 - jn - 1))] = e4, pO[f6 + 1] = e4, pO[f6 + 2] = e4, pO[f6 + 3] = 255
				}
				qT.putImageData(gP, 0, 0)
			}
			aF9 = aF6, au.pG.fillStyle = "rgb(" + aF9 + "," + aF9 + "," + aF9 + ")", au.pG.fillRect(0, 0, au.eZ, 1), au.pG.fillRect(0, au.ea - 1, au.eZ, 1), au.pG.fillRect(0, 0, 1, au.ea), au.pG.fillRect(au.eZ - 1, 0, 1, au.ea)
		}
	}, this.qP = function() {
		var hn = uh ? 0 : -aF3;
		aBf(hn, hn, au.eZ - 2 * hn, au.ea - 2 * hn, b1.aFA, b1.aFB, b1.aFC, b1.aFD) || (gH.fillStyle = aF5, gH.fillRect(0, 0, jv, gD))
	}, this.gG = function() {
		uh || (aBe(0, -aF3, au.eZ, aF3, b1.aFA, b1.aFB, b1.aFC, b1.aFD) && gH.drawImage(aF4[0], b1.aFE, b1.aFF - aF3), aBe(au.eZ, -aF3, aF3, au.ea + 2 * aF3, b1.aFA, b1.aFB, b1.aFC, b1.aFD) && gH.drawImage(aF4[1], b1.aFE + au.eZ, b1.aFF - aF3),
			aBe(0, au.ea, au.eZ, aF3, b1.aFA, b1.aFB, b1.aFC, b1.aFD) && gH.drawImage(aF4[2], b1.aFE, b1.aFF + au.ea), aBe(-aF3, -aF3, aF3, au.ea + 2 * aF3, b1.aFA, b1.aFB, b1.aFC, b1.aFD) && gH.drawImage(aF4[3], b1.aFE - aF3, b1.aFF - aF3))
	}
}

function cW() {
	this.lv = new aFG, this.a7A = new aFH, this.qQ = new aFI, this.jA = new aFJ, this.hS = new aFK, this.aF9 = new aFL, this.aFM = new aFN, this.iJ = new aFO, this.n0 = new aFP, this.cl = function() {
		this.qQ.cl(), this.jA.cl(), this.hS.cl(), this.aF9.cl()
	}
}

function aFO() {
	function aFV(player, hp, aFX, aFY) {
		for (var js, jt, g6, i5, gV, aFZ, ju, jw, ez = hp + aFY, dw = hp; dw < ez; dw += aFX)
			if (js = (js = i9[player] - dw) < 1 ? 1 : js, jt = iC[player] - dw, ju = (ju = i8[player] + dw) >= au.eZ - 1 ? au.eZ - 2 : ju, i5 = (jw = (jw = iB[player] + dw) >= au.ea - 1 ? au.ea - 2 : jw) - (jt = jt < 1 ? 1 : jt), ju = (gV = er(aF
					.random() * (2 * (ju - js + jw - jt)), aF.value(100))) <= (g6 = ju - js) ? (aFZ = js + gV, jt) : gV <= g6 + i5 ? (aFZ = ju, jt + gV - g6) : gV <= 2 * g6 + i5 ? (aFZ = js + gV - g6 - i5, jw) : (aFZ = js, jt + gV - 2 * g6 - i5),
				aFW(player, jw = a4.q1(aFZ, ju))) return jw;
		return -1
	}

	function aFW(tH, f7) {
		return a4.f1(f7) && (a4.fB(f7) || tH !== (f7 = a4.fA(f7)) && hs(tH, f7) && 0 < fI[f7].length)
	}
	this.iK = function(player) {
		return !(0 === fI[player].length || ev[player] < 100) && ap.jA.mn !== ap.jA.my && (ap.jA.mm[player] !== ap.jA.mz && ad.fl.mt(player, 203, 32, 16) ? !! function(player) {
			var f7 = function(player) {
				var dw, q5, q4, js = i9[player],
					jt = iC[player],
					h1 = i8[player] - js + 1,
					h4 = iB[player] - jt + 1,
					e4 = aF.value(100);
				for (dw = 0; dw < 32; dw++)
					if (q5 = js + an.fe(aF.random() * h1, e4), q4 = jt + an.fe(aF.random() * h4, e4), q5 = a4.q1(q5, q4), aFW(player, q5)) return q5;
				return -1
			}(player);
			if (0 <= f7) return ap.n0.n1(player, f7 >> 2);
			if (0 <= (f7 = aFV(player, 1, 4, 40))) return ap.n0.n1(player, f7 >> 2);
			if (0 <= (f7 = aFV(player, 40, 8, 200))) return ap.n0.n1(player, f7 >> 2);
			return
		}(player) && !! function(tH) {
			if (0 === aq.eA[2]) return void console.log("error 325234");
			var aFT = aq.eA[1] + ao.gW[aq.eA[2] - 1] << 2;
			if (a4.fB(aFT)) return 1;
			return aFT = a4.fA(aFT), tH !== aFT && !!hs(tH, aFT)
		}(player) && function(player) {
			return ad.fl.mv(player), ap.jA.n2(player), !0
		}(player) : void 0)
	}
}

function aFG() {
	function aFc(aFb) {
		var aFl = 4 + .03 * (1 + 1.5 * di) * fy / hG;
		return ao.h7(aFb, aq.eA[1]) < aFl
	}
	this.lw = function(player, aFb) {
		return !!ao.hM(aFb) && ap.jA.mn !== ap.jA.my && ap.jA.mm[player] !== ap.jA.mz && 0 !== fI[player].length && !!ap.n0.n1(player, aFb) && !!aFc(aFb)
	}, this.m0 = function(player, lz, aFb) {
		return !!(ao.hM(aFb) && this.n3(player, lz) && ap.n0.n4(aFb) && aFc(aFb))
	}, this.n3 = function(player, id) {
		for (var aFd, sz = player << 3, t0 = sz + ap.jA.mm[player], aFe = ap.jA.aFe, aFf = ap.jA.aFf, dw = sz; dw < t0; dw++)
			if (id === aFf[aFd = aFe[dw]]) return aq.eA[3] = aFd, !0;
		return !1
	}, this.ly = function(gl) {
		var aFg = ap.aF9.aFg;
		return ap.aF9.aFg = -1, !!this.n3(eu, aFg) && (aa.fr.ly(aFg, gl), !0)
	}, this.ud = function(gA, gB) {
		var dw, t0, o8, aFe, aFh, aFi, aFj, iD, vz, aFk, player = eu,
			ez = ap.jA.mm[player];
		if (0 === ez) return !1;
		for (aFe = ap.jA.aFe, aFi = ap.jA.aFi, vz = ap.jA.vz, t0 = (player = player << 3) + ez, aFh = .4 * ad.kp.nU(.5) * fy / hG, o8 = -1, dw = player; dw < t0; dw++) aFk = aFe[dw], aFj = 16 * (.625 + .125 * Math.sqrt(Math.sqrt(vz[aFk]))), (iD =
			ao.gx(gA, gB, aFi[aFk])) - aFj < aFh && (aFh = iD, o8 = aFk);
		return !(o8 < 0 || (ap.aF9.aFg = ap.jA.aFf[o8], 0))
	}, this.ur = function(gA, gB) {
		var dw, o8, aFh, aFi, aFj, iD, vz, ez = ap.jA.mn;
		if (ez < 1) return -1;
		for (aFi = ap.jA.aFi, vz = ap.jA.vz, aFh = 1e3, o8 = -1, dw = 0; dw < ez; dw++) aFj = 16 * ad.kp.nU(.5) * (.625 + .125 * Math.sqrt(Math.sqrt(vz[dw]))), (iD = ao.gx(gA, gB, aFi[dw])) < aFh && iD < aFj && (aFh = iD, o8 = dw);
		return o8
	}
}

function aFH() {
	this.a7B = function(player) {
		for (var aFe = ap.jA.aFe, sz = player << 3, dw = sz + ap.jA.mm[player] - 1; sz <= dw; dw--) this.aFm(aFe[dw])
	}, this.aFm = function(aFn) {
		var jA = ap.jA,
			aFo = jA.mn - 1,
			aFp = jA.vy[aFn],
			aFq = jA.aFr[aFn],
			aFs = jA.aFi[aFn];
		jA.mn = aFo, jA.vy[aFn] = jA.vy[aFo], jA.aFt[aFn] = jA.aFt[aFo], jA.aFu[aFn] = jA.aFu[aFo], jA.aFi[aFn] = jA.aFi[aFo], jA.aFv[aFn] = jA.aFv[aFo], jA.vz[aFn] = jA.vz[aFo], jA.aFr[aFn] = jA.aFr[aFo], jA.aFf[aFn] = jA.aFf[aFo], jA.aFw[aFn] =
			jA.aFw[aFo], jA.aFe[jA.vy[aFn]] = aFn,
			function(a4n) {
				var player = a4n >> 3,
					jA = ap.jA,
					ez = jA.mm[player] - 1,
					aFz = (player << 3) + ez;
				jA.mm[player] = ez, aFz !== a4n && (jA.aFe[a4n] = jA.aFe[aFz], jA.vy[jA.aFe[a4n]] = a4n)
			}(aFp), ap.hS.hS[ao.hR(jA.aFi[aFn])][jA.aFr[aFn]] = aFn, aFo = ao.hR(aFs), aFp = aFq, aFo = ap.hS.hS[aFo], jA = aFo.pop(), aFp !== aFo.length && (aFo[aFp] = jA, ap.jA.aFr[jA] = aFp)
	}
}

function aFI() {
	var aG2, aG3 = 8,
		aG4 = new Array(2);

	function aG5(g0) {
		var gM = aG3 + 4,
			uN = ad.kp.pC(gM, gM),
			gT = ad.kp.getContext(uN, !0),
			gP = ad.kp.getImageData(gT, gM, gM),
			pO = gP.data;
		return aG6(pO, gM + 1, g0), aG6(pO, gM + 2, g0), aG6(pO, 2 * gM + 1, g0), aG6(pO, 2 * gM - 3, g0), aG6(pO, 2 * gM - 2, g0), aG6(pO, 3 * gM - 2, g0), aG6(pO, gM * (gM - 3) + 1, g0), aG6(pO, gM * (gM - 2) + 1, g0), aG6(pO, gM * (gM - 2) + 2,
			g0), aG6(pO, gM * (gM - 2) - 2, g0), aG6(pO, gM * (gM - 1) - 3, g0), aG6(pO, gM * (gM - 1) - 2, g0), gT.putImageData(gP, 0, 0), uN
	}

	function aG6(pO, gl, g0) {
		gl *= 4;
		pO[gl] = 255, pO[1 + gl] = 255, pO[2 + gl] = g0, pO[3 + gl] = 255
	}

	function pC(player) {
		var aG7 = aG3 >> 1,
			uN = ad.kp.pC(aG3, aG3);
		return function(gT, player, jn, jo) {
			var h1, gl, aG9, a4o, gM = aG3,
				gP = ad.kp.getImageData(gT, gM, gM),
				pO = gP.data,
				p7 = (gM >> 1) - .5,
				aF5 = a4.a6b(player),
				aGB = ad.pM.ss(aF5, .5);
			ad.pM.st(aF5, aGB, 300) || ad.pM.sv(aF5, 100);
			for (jo = 0; jo < gM; jo++)
				for (jn = 0; jn < gM; jn++) a4o = (gM - 1.5) * (gM - 1.5) / 4, aG9 = (h1 = (h1 = jn - p7) * h1 + (h1 = jo - p7) * h1) <= (gM - 4.5) * (gM - 4.5) / 4 ? aGB : aF5, pO[gl = 4 * (jo * gM + jn)] = aG9[0], pO[1 + gl] = aG9[1], pO[2 +
					gl] = aG9[2], pO[3 + gl] = a4o < h1 ? 0 : 255;
			gT.putImageData(gP, 0, 0)
		}(ad.kp.getContext(uN, !0), player, aG7, aG7), uN
	}
	this.cl = function() {
		aG2 = new Array(f3), aG4[0] = aG5(255), aG4[1] = aG5(0)
	}, this.gG = function() {
		var dw, player, aGC, hh, aGD, h0, aGG, aGI, aGJ, aFi = ap.jA.aFi,
			vy = ap.jA.vy,
			vz = ap.jA.vz,
			aGK = aG2,
			aGL = eu,
			aGM = -1,
			ez = ap.jA.mn,
			aGN = jv,
			aGO = gD,
			aGP = au.eZ << 4,
			td = hG,
			gu = td / aG3,
			js = hF / td,
			jt = hH / td,
			h1 = (aGN + hF) / td - js,
			h4 = (aGO + hH) / td - jt,
			gT = gH;
		for (ap.lv.n3(eu, ap.aF9.aFg) && (aGM = aq.eA[3]), gT.fillStyle = ae.gK, dw = 0; dw < ez; dw++) player = vy[dw] >> 3, hh = vz[dw], aGC = .625 + .125 * Math.sqrt(Math.sqrt(hh)), aGD = (h0 = aFi[dw]) % aGP / 16 - aGC, h0 = aGO * (Math
			.floor(h0 / aGP) / 16 - aGC - jt) / h4, aGG = -2 * (aGJ = td * aGC) * (1 + (aGI = +(player === aGL)) / 8), aGI = aGI * aGJ / 4, (aGJ = aGN * (aGD - js) / h1) < aGG || h0 < aGG || aGN + aGI < aGJ || aGO + aGI < h0 || (aGD = aGC *
			td, gT.imageSmoothingEnabled = (aGG = 2 * aGC * gu) < 3, void 0 === (aGI = aGK[player]) && (aGK[player] = aGI = pC(player)), player === aGL && (gT.setTransform(aGG, 0, 0, aGG, aGJ - 2 * aGG, h0 - 2 * aGG), gT.drawImage(aG4[+(
				dw === aGM)], 0, 0)), gT.setTransform(aGG, 0, 0, aGG, aGJ, h0), gT.drawImage(aGI, 0, 0), (aGC = Math.floor(function(hh) {
				if (hh < 1e3) return .42;
				if (hh < 1e4) return .34;
				if (hh < 1e6) return .26;
				if (hh < 1e8) return .19;
				return .15
			}(hh) * aGD)) < 6) || (gT.setTransform(1, 0, 0, 1, 0, 0), 20 <= aGC ? (gT.font = ad.kp.oK(.85 * aGC, 1), gT.fillText(ad.k3.k4(hh), aGJ + aGD, h0 + .93 * aGD + .085 * aGC), (aGC *= a8.a91(player)) < 6 || (gT.font = ad.kp.oK(aGC,
			1), gT.fillText(k5[player], aGJ + aGD, h0 + 1.16 * aGD + .1 * aGC))) : (gT.font = ad.kp.oK(aGC, 1), gT.fillText(ad.k3.k4(hh), aGJ + aGD, h0 + aGD + .1 * aGC)));
		gT.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function aFN() {
	this.iK = function() {
		for (var aGR, aFM, aFw = ap.jA.aFw, aFi = ap.jA.aFi, aFu = ap.jA.aFu, dw = ap.jA.mn - 1; 0 <= dw; dw--) aGR = aFi[dw], 0 !== (aFM = aFw[dw]) && aGR === aFu[dw] && (! function(dw, aGT, fu) {
			var hg, player = ap.jA.vy[dw] >> 3,
				fu = aGT + ao.gW[fu] << 2,
				dw = ap.jA.vz[dw];
			if (a4.fB(fu)) hg = f3;
			else {
				if ((hg = a4.fA(fu)) === player) return ad.fl.mG(player, dw);
				if (!hs(player, hg)) return aa.ie.mE(player, hg, dw)
			}
			player === eu && (b4.ex[13] += dw);
			f0[player].push(aGT << 2), a6.hd(player, dw, hg), c.he(player, !0)
		}(dw, ao.hQ(aGR), aFM - 1), ap.a7A.aFm(dw))
	}
}

function aFJ() {
	this.aGU = null, this.my = 512, this.mz = 8, this.mn = 0, this.jb = 0, this.vy = new Uint16Array(this.my), this.aFt = new Uint32Array(this.my), this.aFu = new Uint32Array(this.my), this.aFi = new Uint32Array(this.my), this.aFv = new Uint16Array(
			this.my), this.vz = new Uint32Array(this.my), this.aFr = new Uint16Array(this.my), this.aFf = new Uint16Array(this.my), this.aFw = new Uint8Array(this.my), this.mm = new Uint8Array(f3), this.aFe = new Uint16Array(this.mz * f3), this.cl =
		function() {
			this.jb = 0, this.mn = 0, this.aGU = new Uint8Array(au.eZ + au.ea), this.mm.fill(0)
		}, this.n2 = function(player) {
			var ez = this.mn,
				aGV = ao.hP(aq.eA[0]),
				aEY = this.mm[player],
				aGW = (player << 3) + aEY;
			hA[player] = 2, this.vy[ez] = aGW, this.aFt[ez] = aGV, this.aFi[ez] = aGV, this.aFu[ez] = ao.hP(aq.eA[1]), this.aFv[ez] = 0, this.vz[ez] = aq.e7[0], this.aFr[ez] = ap.hS.n2(ez, ao.hR(aGV)), this.aFf[ez] = this.jb, this.aFw[ez] = aq.eA[2],
				this.jb = this.jb + 1 & 1023, this.aFe[aGW] = ez, this.mm[player] = aEY + 1, this.mn++
		}, this.ly = function() {
			var aFd = aq.eA[3];
			this.aFt[aFd] = this.aFi[aFd], this.aFu[aFd] = ao.hP(aq.eA[1]), this.aFv[aFd] = 0, this.aFw[aFd] = aq.eA[2]
		}, this.iK = function() {
			if (b7.iY() % 5 == 3) {
				ap.aFM.iK(), ! function(ux) {
					var dw, aGa, aGb, aGc, aGd, aGV, aGh, aGi, f8, f7, aFt = ux.aFt,
						aFu = ux.aFu,
						aFi = ux.aFi,
						vz = ux.vz,
						aFv = ux.aFv,
						aFr = ux.aFr,
						ux = ux.mn,
						aGP = au.eZ << 4;
					for (dw = ux - 1; 0 <= dw; dw--) aGb = aFi[dw], aGa = aFu[dw], aGb !== aGa && (aGV = aFt[dw], aGh = aGa % aGP - (aGd = aGV % aGP), aGi = ~~((aGa + .5) / aGP) - (aGV = ~~((aGV + .5) / aGP)), f8 = ~~Math.sqrt(aGh * aGh + aGi *
						aGi + .5), f7 = 4e5 + 2e4 * ~~Math.sqrt(.5 + (Math.sqrt(vz[dw] + .5) << 4)), 65535 <= (f7 = aFv[dw] + Math.max(~~((.5 + f7) / f8), 1)) ? aFi[dw] = aGc = aGa : (aFv[dw] = f7, aFi[dw] = aGc = aGd + an.fe(f7 * aGh,
						65536) + aGP * (aGV + an.fe(f7 * aGi, 65536))), aFr[dw] = ap.hS.aGk(aFr[dw], aGb, aGc))
				}(this), ! function(ux) {
					var dw, pb, p7, hx, iZ, aGl, aGm, aGn, pW, gb, js, jt, aGo, aFh, aGp, pX, aGV, aGs, ez = ux.mn,
						aFi = ux.aFi,
						vy = ux.vy,
						vz = ux.vz,
						hS = ap.hS.hS,
						aGt = hS.length,
						aGu = ap.hS.aGu,
						aGP = au.eZ << 4,
						aGv = ha,
						aGw = b8.ia,
						f7 = (ez - 1) * (b7.iY() % 2);
					for (dw = 0; dw < ez; dw++) {
						for (pb = Math.abs(dw - f7), aGV = aFi[pb], p7 = ao.hR(aGV), pW = vy[pb] >> 3, js = aGV % aGP, jt = ~~((aGV + .5) / aGP), aGV = vz[pb], aGs = 80 + ~~Math.sqrt(.5 + (Math.sqrt(aGV + .5) << 8)), aFh = Math.min(aGs * aGs,
								262144), aGp = -1, hx = 0; hx < 9; hx++)
							if (!((aGl = p7 + aGu[hx]) < 0 || aGt <= aGl))
								for (aGn = hS[aGl], aGm = aGn.length, iZ = 0; iZ < aGm; iZ++) aGo = aGn[iZ], pX = vy[aGo] >> 3, pW == pX || aGv && aGw[pW] === aGw[pX] || (pX = aFi[aGo], (pX = (gb = js - pX % aGP) * gb + (gb = jt - ~~((pX + .5) /
									aGP)) * gb) < aFh && (aGp = aGo, aFh = pX)); - 1 !== aGp && (aGV = Math.min(Math.max(1, an.fe(aGV * (aGs - Math.floor(Math.sqrt(aFh + .5))), 5 * aGs)), vz[aGp]), vz[pb] -= aGV >> 4, vz[aGp] -= aGV)
					}
				}(this);
				var dw, hh, vz = (ux = this).vz,
					ux = ux.mn;
				for (dw = ux - 1; 0 <= dw; dw--) hh = vz[dw], 0 < (hh -= Math.max(1, hh >> 7)) ? vz[dw] = hh : ap.a7A.aFm(dw)
			}
		}
}

function aFK() {
	this.aGx = 32, this.jn = 0, this.jo = 0, this.hT = 0, this.aGy = 0, this.aGz = 4, this.hS = null, this.aGu = new Int16Array(9), this.cl = function() {
		this.hT = 1 + an.fe(au.eZ - 1, this.aGx), this.aGy = 1 + an.fe(au.ea - 1, this.aGx), this.hS = new Array(this.hT * this.aGy), ad.pM.sr(this.hS);
		var jn, jo, aGu = this.aGu,
			g6 = this.hT;
		for (jn = -1; jn <= 1; jn++)
			for (jo = -1; jo <= 1; jo++) aGu[3 * (1 + jo) + 1 + jn] = jo * g6 + jn
	}, this.n2 = function(aH1, dw) {
		return this.hS[dw].push(aH1), this.hS[dw].length - 1
	}, this.aGk = function(aH2, aGV, aGa) {
		var aH3, aH4, aGV = ao.hR(aGV),
			aGa = ao.hR(aGa);
		return aGV === aGa ? aH2 : (aH3 = this.hS[aGV].pop(), this.hS[aGV].length === aH2 ? this.n2(aH3, aGa) : (aH4 = this.hS[aGV][aH2], this.hS[aGV][aH2] = aH3, ap.jA.aFr[aH3] = aH2, this.n2(aH4, aGa)))
	}
}

function aFP() {
	function a7b(aGa, aH5) {
		if (function(aGa, aFb) {
				var ga = ao.hQ(aGa),
					aH8 = Math.abs(ao.gc(aFb) - ao.gc(ga)),
					ga = Math.abs(ao.ge(aFb) - ao.ge(ga));
				return 0 !== Math.max(aH8, ga) && (function(aGV, aGa, aH8, aH9) {
					var aHB = ao.h3(aGV),
						aGV = ao.h6(aGV),
						aHD = ao.h3(aGa),
						aGa = ao.h6(aGa),
						aHD = aHD - aHB,
						aGa = aGa - aGV,
						aHH = Math.abs(aHD),
						aHI = Math.abs(aGa),
						aHD = 0 < aHD ? 1 : 3,
						aGa = 0 < aGa ? 2 : 0;
					aHI < aHH ? aHL(aHB, aGV, aHB + aHH, aGV + aHI, aHD, aGa, aH8) : aHL(aGV, aHB, aGV + aHI, aHB + aHH, aGa, aHD, aH9)
				}(aGa, ao.hP(aFb), aH8, ga), !0)
			}(aGa, aH5)) {
			if (0 === aq.e6[0]) return !!a4.uh(aH5 << 2);
			if (function(aFb) {
					if (a4.uh(aFb << 2)) return 1;
					return function(aFb) {
						var dw, fu, aGU = ap.jA.aGU,
							aHP = ao,
							ez = aq.e6[0],
							aHQ = 4 * aFb;
						for (dw = ez - 1; 0 <= dw; dw--)
							if (fu = aGU[dw], aHQ = aHP.hV(aHQ, fu + 2 & 3), a4.uh(aHQ)) return aq.e6[0] = dw, aq.eA[1] = aHQ >> 2, aq.eA[2] = 1 + fu, 1;
						return
					}(aFb)
				}(aH5)) {
				var dw, aH5 = ao.hQ(aGa),
					pO = a1n,
					aGU = ap.jA.aGU,
					ez = aq.e6[0] - 1,
					aHQ = 4 * aH5,
					gX = ao.gX;
				for (dw = 0; dw < ez; dw++)
					if (aHQ += gX[aGU[dw]], 0 !== pO[aHQ + 3] || 2 !== pO[aHQ + 2]) return !!void 0;
				return !!1
			}
		}
		return !1
	}

	function aHL(aHB, aHC, aHD, aHE, aHJ, aHK, aH8) {
		for (var jo, aGU = ap.jA.aGU, f7 = 0, aHM = 0, i5 = aHE - aHC, g6 = aHD - aHB, aHN = aHB % 16, dw = 1; dw <= aH8; dw++) aGU[f7++] = aHJ, aGU[f7] = aHK, f7 += (jo = (i5 * (aHN + (dw << 4)) + .5) / g6 >> 4) - aHM, aHM = jo;
		aq.eC(aq.e6, f7)
	}
	this.n1 = function(player, aH5) {
		var fu, ga, gZ = ao.gk(player, aH5);
		return gZ !== aH5 && (fu = ao.gY(gZ, aH5), ga = ao.hU(gZ, fu), !(!a4.uh(ga << 2) && (fu = ao.gi(gZ, aH5, fu), ga = ao.hU(gZ, fu), a4.pY(ga << 2) || !a4.uh(ga << 2)) || (aq.eA[0] = ga, aq.eA[1] = aH5, aq.eA[2] = 0, !a7b(ao.hP(ga), aH5)) ||
			0 !== aq.eA[2] && ao.gt(player, aq.eA[1] + ao.gW[aq.eA[2] - 1] << 2)))
	}, this.n4 = function(aH5) {
		var aGV = ap.jA.aFi[aq.eA[3]];
		return aq.eA[1] = aH5, aq.eA[2] = 0, a7b(aGV, aH5)
	}
}

function aFL() {
	var aG3 = 32,
		aHS = new Array(2);

	function pC(iZ) {
		var jn, jo, gl, h4, h1, gM = aG3,
			uN = ad.kp.pC(gM, gM),
			gT = ad.kp.getContext(uN, !0),
			gP = ad.kp.getImageData(gT, gM, gM),
			pO = gP.data,
			p7 = (gM >> 1) - .5,
			aHT = Math.sqrt(p7 * p7);
		for (pO.fill(255), jo = 0; jo < gM; jo++)
			for (jn = 0; jn < gM; jn++) h1 = jn - p7, h4 = jo - p7, gl = 4 * (jo * gM + jn), h1 = 714 * (aHT - Math.sqrt(h1 * h1 + h4 * h4)) / aHT, pO[2 + gl] = iZ, pO[3 + gl] = 255 < h1 ? 0 : h1;
		return gT.putImageData(gP, 0, 0), uN
	}
	this.aFg = -1, this.cl = function() {
		this.aFg = -1, aHS[0] || (aHS[0] = pC(255), aHS[1] = pC(0))
	}, this.aHU = function(gT, gu, jn, jo, gV, dw) {
		ao.hC() && (gT.setTransform(gu *= 4 / 3 * .625, 0, 0, gu, jn - (gV *= 4 / 3), jo - gV), gT.drawImage(aHS[+(ap.jA.aFf[dw] === this.aFg)], 0, 0))
	}
}

function yL() {
	if (ib < 3) return !1;
	if (an.fe(3 * fP[jU[2]], 2) < fP[jU[0]]) return !1;
	if (fP[jU[0]] + fP[jU[1]] + fP[jU[2]] < tm - an.fe(tm, 10)) return !1;
	if (8 * Math.min(Math.min(ev[jU[0]], ev[jU[1]]), ev[jU[2]]) < 5 * Math.max(Math.max(ev[jU[0]], ev[jU[1]]), ev[jU[2]])) return !1;
	if (ha) {
		if (b8.ia[jU[0]] === b8.ia[jU[1]]) return !1;
		if (b8.ia[jU[0]] === b8.ia[jU[2]]) return !1;
		if (b8.ia[jU[1]] === b8.ia[jU[2]]) return !1
	}
	return !0
}

function cu() {
	this.size = 501, this.ri = new Uint32Array(this.size), this.tK = new Uint32Array(this.size), this.a1S = new Uint16Array(this.size), this.vG = 0, this.aHX = 1, this.iZ = 0, this.max = [0, 0, 0], this.ex = 0, this.aHY = ["Avg. Attack Strength",
		"Number Attacks", "Ships sent", "Bots conquered", "Humans conquered", "Attacked by Bots", "Attacked by Humans", "Territorial Loss", "Territorial Income", "Interest Income", "Received Support", "Overall Income", "Commanding Costs",
		"Attack Losses", "Defense Losses", "Shipping Losses", "Transmitted Support", "Overall Expenses"
	], this.cl = function() {
		this.vG = 0, this.aHX = 1, this.iZ = 0, this.aHZ(), this.aHa()
	}, this.mw = function(player, hE) {
		player === eu && (this.ex[0] += hE, this.ex[1]++, this.ex[12] += aq.e7[1], this.ex[13] += aq.e7[0])
	}, this.mH = function(player, lr) {
		donationsTracker.logDonation(player, lr, aq.e7[0]);
		player === eu && (k.mH(aq.e7[0], aq.e7[1], lr), this.ex[12] += aq.e7[1], this.ex[16] += aq.e7[0]), lr === eu && (k.wE(aq.e7[0], player), this.ex[10] += aq.e7[0])
	}, this.iK = function() {
		0 < this.iZ-- || this.aHb()
	}, this.aHb = function() {
		0 !== hA[eu] && (this.ri[this.vG] = fP[eu], this.tK[this.vG] = ev[eu], this.a1S[this.vG] = a7.a1T(eu), this.aHc(this.vG), this.vG++, this.vG === this.size && this.aHd(), this.iZ = this.aHX - 1, b5.g3())
	}, this.aHd = function() {
		this.aHZ(), this.aHc(0), this.vG = 1 + er(this.size, 2);
		for (var dw = 1; dw < this.vG; dw++) this.ri[dw] = this.ri[2 * dw], this.tK[dw] = this.tK[2 * dw], this.a1S[dw] = this.a1S[2 * dw], this.aHc(dw);
		this.aHX *= 2
	}, this.aHZ = function() {
		this.max[0] = this.max[1] = this.max[2] = 0
	}, this.aHa = function() {
		this.ex = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	}, this.aHc = function(dw) {
		this.max[0] = this.ri[dw] > this.max[0] ? this.ri[dw] : this.max[0], this.max[1] = this.tK[dw] > this.max[1] ? this.tK[dw] : this.max[1], this.max[2] = this.a1S[dw] > this.max[2] ? this.a1S[dw] : this.max[2]
	}
}

function cv() {
	this.g6 = 0, this.i5 = 0, this.qY = 0, this.qZ = 0, this.a2K = 0, this.a2L = 0, this.wS = 0, this.wT = 0, this.a5E = 0, this.a3t = 0, this.aHe = 0, this.aHf = 0, this.xu = 0, this.g0 = 0, this.v0 = ["Territory", "Balance", "Interest", "Numbers"],
		this.sS = !1, this.aHg = -1, this.aHh = !1, this.aHi = [0, 0], this.cl = function() {
			this.sS = !1, this.aHg = -1, this.aHh = !1, this.resize()
		}, this.resize = function() {
			this.g6 = dj < 1.369 * dk ? dj : 1.369 * dk;
			var f8 = di && dj < dk ? 1 : di ? .8 : dj < dk ? .65 : .59;
			this.g6 = Math.floor(f8 * this.g6), this.g6 -= di && dj < dk ? 2 * nf + 2 : 0, this.i5 = Math.floor(this.g6 / 1.369), this.xu = Math.floor(this.i5 / 150), this.xu = Math.max(this.xu, 1.5), this.qY = Math.floor(1 + .02 * this.g6), this
				.qZ = Math.floor(1 + .04 * this.g6), this.wS = this.qZ, this.wT = Math.floor(1 + .075 * this.g6), this.a3t = Math.floor(1 + .1125 * this.g6), this.aHe = Math.floor(this.g6 * (di ? .03 : .029)), this.aHe = Math.max(this.aHe, 4), this
				.aHf = Math.floor(.035 * this.g6), this.aHf = Math.max(this.aHf, 4), this.a5E = this.i5 - 2 * this.wS - this.wT - this.a3t, this.sS && this.aHj()
		}, this.g9 = function(gA, gB) {
			var pt, ps;
			return !!this.sS && (ps = gA, pt = gB, gA -= er(jv - this.g6, 2), gB -= er(gD - this.i5, 2), gA < 0 || gB < 0 || gA >= this.g6 || gB >= this.i5 || gA >= this.g6 - this.a3t && gB < this.a3t ? 1 < j.g9(ps, pt) || this.oL() : gB < this
				.a3t || (gB < this.i5 - this.wT ? (this.aHh = !0, this.aHg = (gA - 2 * this.qY - this.a2K) / this.a2L, 3 !== this.g0 && (b7.d6 = !0)) : (ps = (ps = Math.floor(gA / (this.g6 / this.v0.length))) < 0 ? 0 : ps >= this.v0.length ? this
					.v0.length - 1 : ps) !== this.g0 && (this.g0 = ps, this.aHj(), b7.d6 = !0)), !0)
		}, this.sj = function() {
			var aHk = Math.floor((this.aHi[0] + hF) / hG),
				aHl = Math.floor((this.aHi[1] + hH) / hG);
			aHk < 1 || aHl < 1 || aHk >= au.eZ - 1 || aHl >= au.ea - 1 || console.log(aHk + " " + aHl)
		}, this.s1 = function(gA, gB) {
			return this.aHi[0] = gA, this.aHi[1] = gB, !(!this.sS || !this.aHh || (gA -= er(jv - this.g6, 2), gB = this.aHg, this.aHg = (gA - 2 * this.qY - this.a2K) / this.a2L, (0 <= this.aHg && this.aHg <= 1 || 0 <= gB && gB <= 1) && (b7.d6 = !0),
				0))
		}, this.sU = function() {
			this.aHh && (this.aHh = !1)
		}, this.sf = function() {
			this.sS ? this.oL() : this.show()
		}, this.show = function() {
			b4.vG < 2 || (this.sS = !0, this.aHj())
		}, this.oL = function() {
			this.sS = !1, this.aHg = -1, b7.d6 = !0
		}, this.aHj = function() {
			this.g0 < 2 ? this.a2K = n.measureText(ad.k3.k4(b4.max[this.g0]), this.aHe + g2) : 2 === this.g0 && (this.a2K = n.measureText(ad.k3.tZ(6, 2), this.aHe + g2)), this.a2L = this.g6 - 2 * this.qY - this.a2K - this.qZ
		}, this.g3 = function() {
			this.sS && this.aHj()
		}, this.gG = function() {
			this.sS && this.wX()
		}, this.wX = function() {
			var jn = er(jv - this.g6, 2),
				jo = er(gD - this.i5, 2);
			gH.setTransform(1, 0, 0, 1, jn, jo), gH.fillStyle = ae.kv, gH.fillRect(0, this.a3t, this.g6, this.i5 - this.a3t), this.aHm(), this.aHn(), gH.strokeRect(0, 0, this.g6, this.i5), gH.textAlign = xB, gH.font = this.aHe + g2, 0 === this.g0 ?
				this.aHo(b4.ri, jn, jo) : 1 === this.g0 ? this.aHo(b4.tK, jn, jo) : 2 === this.g0 ? this.aHp(jn, jo) : 3 === this.g0 && (this.aHq(jn, jo), this.aHr(jn, jo)), j.vI(Math.floor(jn + this.g6 - .725 * this.a3t), Math.floor(jo + .275 * this
					.a3t), Math.floor(.45 * this.a3t)), gH.setTransform(1, 0, 0, 1, 0, 0)
		}, this.aHm = function() {
			var dw, dY;
			for (gH.lineWidth = this.xu, gH.textBaseline = gI, gH.textAlign = gJ, gH.strokeStyle = ae.gK, gH.font = g1 + this.aHf + g2, dY = this.g6 / this.v0.length, gH.fillStyle = ae.lD, gH.fillRect(this.g0 * dY, this.i5 - this.wT, dY, this.wT), gH
				.fillStyle = ae.gK, gH.fillRect(0, this.i5 - this.wT - .5 * this.xu, this.g6, this.xu), dw = 1; dw <= 3; dw++) gH.fillRect(dw * dY, this.i5 - this.wT, this.xu, this.wT);
			for (dw = this.v0.length - 1; 0 <= dw; dw--) gH.fillText(this.v0[dw], (dw + .5) * dY, this.i5 - .46 * this.wT)
		}, this.aHn = function() {
			gH.fillStyle = ae.lS, gH.fillRect(0, 0, this.g6, this.a3t), gH.fillStyle = ae.gK, gH.fillRect(0, this.a3t - .5 * this.xu, this.g6, this.xu), gH.font = g1 + Math.floor(.39 * this.a3t) + g2, gH.fillText("Statistics", Math.floor(this.g6 /
				2), Math.floor(.55 * this.a3t))
		}, this.aHo = function(eD, jn, jo) {
			var p7 = b4.max[this.g0],
				fw = (gH.setTransform(1, 0, 0, 1, jn + 2 * this.qY + this.a2K, jo + this.wS + this.a3t), gH.lineWidth = 2, this.a5E / Math.sqrt(p7));
			gH.beginPath(), gH.moveTo(this.a2L, this.a5E - fw * Math.sqrt(eD[b4.vG - 1]));
			for (var dw = b4.vG - 2; 0 <= dw; dw--) gH.lineTo(dw * this.a2L / (b4.vG - 1), this.a5E - fw * Math.sqrt(eD[dw]));
			gH.stroke();
			jn = this.vI(eD, fw, .5);
			jn < .95 && gH.fillText(ad.k3.k4(p7), -this.qY, 0), .05 < Math.abs(jn - .5) && gH.fillText(ad.k3.k4(Math.floor(p7 / 4)), -this.qY, Math.floor(this.a5E / 2)), .05 < jn && gH.fillText("0", -this.qY, this.a5E)
		}, this.aHp = function(jn, jo) {
			gH.setTransform(1, 0, 0, 1, jn + 2 * this.qY + this.a2K, jo + this.wS + this.a3t), gH.lineWidth = 2;
			var fw = this.a5E / Math.max(b4.max[this.g0], 1);
			gH.beginPath(), gH.moveTo(this.a2L, this.a5E - fw * b4.a1S[b4.vG - 1]);
			for (var dw = b4.vG - 2; 0 <= dw; dw--) gH.lineTo(dw * this.a2L / (b4.vG - 1), this.a5E - fw * b4.a1S[dw]);
			gH.stroke();
			jn = this.vI(b4.a1S, fw, 1), jo = b4.max[this.g0] / 100;
			jn < .95 && gH.fillText(ad.k3.tZ(jo, 2), -this.qY, 0), .05 < Math.abs(jn - .5) && gH.fillText(ad.k3.tZ(jo / 2, 2), -this.qY, Math.floor(this.a5E / 2)), .05 < jn && gH.fillText(ad.k3.tZ(0, 2), -this.qY, this.a5E)
		}, this.aHq = function(jn, jo) {
			gH.setTransform(1, 0, 0, 1, jn + .34 * this.g6, jo + 2 * this.wS + this.a3t), gH.textAlign = xB;
			for (var a0s = this.i5 - 4 * this.wS - this.wT - this.a3t, dw = 7; 0 <= dw; dw--) gH.fillText(b4.aHY[dw], 0, dw * a0s / 7);
			gH.setTransform(1, 0, 0, 1, jn + .39 * this.g6, jo + 2 * this.wS + this.a3t), gH.textAlign = vo;
			jn = b4.ex[1];
			for (gH.fillText(ad.k3.tZ(b4.ex[0] / (10 * (jn < 1 ? 1 : jn)), 1), 0, 0), dw = 6; 1 <= dw; dw--) gH.fillText(b4.ex[dw].toString(), 0, dw * a0s / 7);
			gH.fillText(ad.k3.tZ(100 * (1 - fP[eu] / b4.ex[7]), 0), 0, a0s)
		}, this.aHr = function(jn, jo) {
			gH.setTransform(1, 0, 0, 1, jn + .79 * this.g6, jo + 2 * this.wS + this.a3t), gH.textAlign = xB;
			var dw, a0s = this.i5 - 4 * this.wS - this.wT - this.a3t;
			for (gH.fillStyle = ae.l8, dw = 2; 0 <= dw; dw--) gH.fillText(b4.aHY[dw + 8], 0, dw * a0s / 9);
			for (gH.fillStyle = ae.l7, gH.fillText(b4.aHY[11], 0, 3 * a0s / 9), gH.fillStyle = ae.lL, dw = 8; 4 <= dw; dw--) gH.fillText(b4.aHY[dw + 8], 0, dw * a0s / 9);
			gH.fillStyle = ae.lK, gH.fillText(b4.aHY[17], 0, 9 * a0s / 9), gH.fillStyle = ae.l8;
			var vw = ad.k3.k4(b4.ex[8] + b4.ex[9] + b4.ex[10] + b4.ex[11]),
				aHs = gH.measureText(vw).width,
				jn = (gH.setTransform(1, 0, 0, 1, jn + .83 * this.g6 + aHs, jo + 2 * this.wS + this.a3t), gH.fillText(ad.k3.k4(b4.ex[8]), 0, 0), gH.fillText(ad.k3.k4(b4.ex[9]), 0, a0s / 9), gH.fillText(ad.k3.k4(b4.ex[10]), 0, 2 * a0s / 9), gH
					.fillStyle = ae.l7, gH.fillText(vw, 0, 3 * a0s / 9), gH.fillStyle = ae.lL, b4.ex[13] - a6.a87(eu)),
				aHs = (gH.fillText(ad.k3.k4(b4.ex[12]), 0, 4 * a0s / 9), gH.fillText(ad.k3.k4(jn), 0, 5 * a0s / 9), gH.fillText(ad.k3.k4(b4.ex[14]), 0, 6 * a0s / 9), gH.fillText(ad.k3.k4(b4.ex[15]), 0, 7 * a0s / 9), gH.fillText(ad.k3.k4(b4.ex[16]),
					0, 8 * a0s / 9), b4.ex[12] + jn + b4.ex[14] + b4.ex[15] + b4.ex[16] + b4.ex[17]);
			gH.fillStyle = ae.lK, gH.fillText(ad.k3.k4(aHs), 0, a0s), gH.fillStyle = ae.gK
		}, this.vI = function(eD, fw, zb) {
			var dw, dG, eE;
			return this.aHg < 0 || 1 < this.aHg ? .25 : (dw = this.aHg * (b4.vG - 1), eE = eD[dG = Math.floor(dw)], eE += (dw - dG) * (eD[dG < b4.vG - 1 ? dG + 1 : dG] - eE), gH.strokeStyle = ae.l0, .04 < this.aHg && this.aHv(0, this.a5E - fw * Math
					.pow(eE, zb), dw * this.a2L / (b4.vG - 1), this.a5E - fw * Math.pow(eE, zb)), .04 < eE / b4.max[this.g0] && this.aHv(dw * this.a2L / (b4.vG - 1), this.a5E, dw * this.a2L / (b4.vG - 1), this.a5E - fw * Math.pow(eE, zb)), gH
				.fillStyle = ae.lN, gH.beginPath(), gH.arc(dw * this.a2L / (b4.vG - 1), this.a5E - fw * Math.pow(eE, zb), Math.max(2, .014 * this.i5), 0, 2 * Math.PI), gH.fill(), eD = this.aHg * b7.a1U, eD = 0 === hA[eu] ? Math.floor(eD * u
				.a1b) : Math.floor(eD * b7.iY()), gH.fillStyle = ae.gK, gH.fillText(1 === zb ? ad.k3.tZ(eE / 100, 2) : ad.k3.k4(Math.floor(eE)), -this.qY, this.a5E - fw * Math.pow(eE, zb)), gH.textAlign = gJ, gH.fillText(t.a0D(eD), dw * this
					.a2L / (b4.vG - 1), this.a5E + this.aHe - (di ? 2 : 0) - this.xu), gH.textAlign = xB, fw * Math.pow(eE, zb) / this.a5E)
		}, this.aHv = function(js, jt, ju, jw) {
			gH.beginPath(), gH.moveTo(js, jt), gH.lineTo(ju, jw), gH.stroke()
		}
}

function bJ() {
	this.aHw = "https://", this.aHx = this.aHw + "territorial.io/", this.aBw = this.aHx + "changelog", this.aBx = this.aHx + "terms", this.wW = this.aHx + "cookie_policy", this.rr = this.aHx + "privacy_policy", this.aBt = this.aHx + "tutorial", this
		.aBu = this.aHx + "players", this.aBv = this.aHx + "clans", this.a2a = this.aHw + "play.google.com/store/apps/details?id=territorial.io", this.a2b = this.aHw + "apps.apple.com/app/id1581110913", this.a2c = this.aHw +
		"www.youtube.com/watch?v=toZTQ8aRdFc", this.a2d = this.aHw + "discord.gg/pthqvpTXmh", this.a2e = this.aHw + "www.instagram.com/davidtschacher/"
}

function cY() {
	this.jA = new aHy, this.qQ = new aHz, this.cl = function() {
		this.jA.cl()
	}, this.iK = function() {
		0 !== this.jA.wZ && this.jA.wZ--
	}
}

function aHz() {
	this.gG = function() {
		if (0 !== ar.jA.wZ && (gH.globalAlpha = Math.min(ar.jA.wZ / 580, 1), gH.drawImage(ar.jA.aI2, 1 + p.jx(), 1 + p.gF()), gH.globalAlpha = 1, kQ)) {
			var dw, js = hF / hG,
				jt = hH / hG,
				ju = (jv + hF) / hG,
				jw = (gD + hH) / hG,
				f7 = ar.jA.aI3 * hG,
				aI4 = ar.jA.aI4;
			for (dw = h9 - 1; 0 <= dw; dw--) ! function(dw, f7, js, jt, ju, jw, aI4) {
				0 === hA[dw] || 0 === fP[dw] || (ju = jv * ((i9[dw] + i8[dw] + 1) / 2 - js) / (ju - js) - .5 * f7, js = gD * ((iC[dw] + iB[dw] + 1) / 2 - jt) / (jw - jt) - .5 * f7, jv < ju) || gD < js || ju < -f7 || js < -f7 || (gH
					.setTransform(hG, 0, 0, hG, ju, js), gH.drawImage(aI4[ha ? b8.ia[dw] : 1], 0, 0))
			}(dw, f7, js, jt, ju, jw, aI4);
			gH.setTransform(hG, 0, 0, hG, 0, 0)
		}
	}
}

function aHy() {
	this.aI3 = 28, this.wZ = 0, this.aI2 = null;
	var aI6 = this.aI4 = null;

	function aI9(gM, aIB) {
		var jn, jo, gl, h1, uN = ad.kp.pC(gM, gM),
			gT = ad.kp.getContext(uN, !0),
			gP = ad.kp.getImageData(gT, gM, gM),
			pO = gP.data,
			p7 = (gM >> 1) - .5,
			aIC = .5 + p7;
		for (aIC *= aIC, jo = 0; jo < gM; jo++)
			for (jn = 0; jn < gM; jn++) h1 = (h1 = jn - p7) * h1 + (h1 = jo - p7) * h1, pO[gl = 4 * (jo * gM + jn)] = aIB[0], pO[1 + gl] = aIB[1], pO[2 + gl] = aIB[2], pO[3 + gl] = (aIC - h1) * aIB[3] / aIC;
		return gT.putImageData(gP, 0, 0), uN
	}

	function aHU(dw, gT, uN, gM) {
		var jn;
		0 !== hA[dw] && 0 !== fP[dw] && (jn = i9[dw] + i8[dw] + 1 - gM - 2 >> 1, gM = iC[dw] + iB[dw] + 1 - gM - 2 >> 1, gT.drawImage(uN[ha ? b8.ia[dw] : dw < h9 ? 1 : 0], jn, gM))
	}
	this.cl = function() {
		var ux;
		this.wZ = 700,
			function(ux) {
				var dw, gM = ux.aI3;
				if (ux.aI4 = [], aI6 = [], ha)
					for (dw = 0; dw <= tp; dw++) ux.aI4.push(aI9(gM, b8.aIA[b8.rY[dw]])), aI6.push(aI9(gM >> 1, b8.aIA[b8.rY[dw]]));
				else ux.aI4.push(aI9(gM, b8.aIA[0])), ux.aI4.push(aI9(gM, b8.aIA[4])), aI6.push(aI9(gM >> 1, b8.aIA[0]))
			}(this),
			function(ux, aID) {
				var dw, aI2 = ux.aI2,
					gT = ad.kp.getContext(aI2, !0),
					ez = f3,
					gM = ux.aI3 >> 1;
				gT.imageSmoothingEnabled = !1, gT.setTransform(1, 0, 0, 1, 0, 0), aID && gT.clearRect(0, 0, aI2.width, aI2.height);
				for (dw = h9; dw < ez; dw++) aHU(dw, gT, aI6, gM)
			}(this, null !== (ux = this).aI2 && ux.aI2.width === au.eZ - 2 && ux.aI2.height === au.ea - 2 || (ux.aI2 = ad.kp.pC(au.eZ - 2, au.ea - 2), !1))
	}, this.tj = function() {
		for (var ez = h9, gM = this.aI3, aI4 = this.aI4, gT = ad.kp.getContext(this.aI2, !0), dw = 0; dw < ez; dw++) aHU(dw, gT, aI4, gM)
	}
}

function cZ() {
	this.aIE = -1, this.cl = function() {
		this.aIE = -1
	}, this.iK = function() {
		-1 !== this.aIE && at.r7.rF(this.aIE)
	}, this.mB = function(player) {
		return !!j.vF(player) && (1 === ib ? (this.aIE = player, j1 && kQ && mr.iK()) : (k.rD(player, player === eu ? 21 : 22), 8 === iz ? this.aIE = 1 - player : j1 ? (a76(player), a9o(), kQ && mr.iK()) : this.aIF(player)), !0)
	}, this.mo = function(player) {
		1 === jK && 0 !== hA[player] && 2 !== hB[player] && (8 === iz ? this.aIE = 1 - player : this.aIF(player)), k.rD(player, 4)
	}, this.aIF = function(player) {
		kQ ? (a76(player), a9o()) : aT.a9k(player)
	}
}

function cy() {
	this.a4m = ["rgba(130,130,130,0.88)", "rgba(130,12,12,0.88)", "rgba(12,130,12,0.88)", "rgba(12,12,130,0.88)", "rgba(130,130,12,0.88)", "rgba(130,12,130,0.88)", "rgba(12,130,130,0.88)", "rgba(130,130,130,0.88)", "rgba(0,0,0,0.88)"], this.a0r = [ae
		.gK, "rgb(255,120,120)", "rgb(0,230,0)", "rgb(150,150,255)", "rgb(240,240,25)", "rgb(255,70,255)", "rgb(25,240,240)", ae.gK, "rgb(170,170,170)"
	], this.aIG = [ae.gK, "rgb(255,0,0)", "rgb(0,255,0)", "rgb(0,0,255)", "rgb(255,255,0)", "rgb(255,0,255)", "rgb(0,255,255)", ae.gK, ae.jz], this.aIH = [ae.jz, ae.gK, ae.gK, ae.gK, ae.jz, ae.jz, ae.jz, ae.jz, ae.gK];
	var aII = ["255,255,255", "0,0,0", "255,4,4", "200,4,4", "4,255,4", "4,180,4", "255,195,195", "90,3,3", "200,255,200", "3,84,3"],
		aIJ = (this.a9F = ["rgba(" + aII[0] + ",", "rgba(" + aII[1] + ",", "rgba(" + aII[2] + ",", "rgba(" + aII[3] + ",", "rgba(" + aII[4] + ",", "rgba(" + aII[5] + ",", "rgba(" + aII[6] + ",", "rgba(" + aII[7] + ",", "rgba(" + aII[8] + ",",
			"rgba(" + aII[9] + ","
		], this.a9G = ["rgb(" + aII[0] + ")", "rgb(" + aII[1] + ")", "rgb(" + aII[2] + ")", "rgb(" + aII[3] + ")", "rgb(" + aII[4] + ")", "rgb(" + aII[5] + ")", "rgb(" + aII[6] + ")", "rgb(" + aII[7] + ")", "rgb(" + aII[8] + ")", "rgb(" + aII[
			9] + ")"
		], this.fx = ["White", "Red", "Green", "Blue", "Yellow", "Magenta", "Cyan", "White", "Black"], this.aIA = [
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
	this.rY = [0, 1, 2, 3, 4, 5, 6, 7, 8], this.ia = new Uint8Array(f3), this.rg = null, this.rh = null, this.cl = function(qc) {
		this.ia.fill(0), this.aIK(), ha && (aX.iw && aX.ix.a7q ? this.a6T() : 9 === iz ? this.aIL() : this.iK(qc))
	}, this.a6T = function() {
		var dw, ez = pu;
		for (this.rY = [0, 1, 2, 3, 4, 5, 6, 7, 8], dw = 0; dw < ez; dw++) this.ia[dw] = aX.ix.a7q[dw]
	}, this.aIK = function() {
		for (var dw = this.rY.length - 1; 0 <= dw; dw--) this.rY[dw] = dw;
		this.rg = [], this.rh = []
	}, this.aIL = function() {
		for (var dw = h9 + aA.a9b - 1; 0 <= dw; dw--) this.ia[dw] = 1;
		for (dw = h9 + aA.a9b; dw < f3; dw++) this.ia[dw] = 2;
		this.rY[1] = 7, this.rY[2] = 8
	}, this.iK = function(qc) {
		var gf = new Uint8Array(h9),
			gg = new Uint8Array(h9),
			aIM = new Uint16Array(8),
			aIN = new Uint16Array(this.rY.length);
		this.aIO(qc, gf, gg, aIM), this.a6R(aIM), j1 || this.aIP(aIN, gf, gg), this.aIQ(gf, gg, aIN), j1 ? this.aIR() : this.aIS()
	}, this.aIO = function(qc, gf, gg, aIT) {
		for (var hx, dG, aIU, ez = this.rY.length - 1, eD = new Uint16Array(ez), dw = h9 - 1; 0 <= dw; dw--) {
			for (hx = ez; 1 <= hx; hx--) eD[hx - 1] = Math.abs(4 * qc[dw].a5S[0] - aIJ[hx][0]) + Math.abs(4 * qc[dw].a5S[1] - aIJ[hx][1]) + Math.abs(4 * qc[dw].a5S[2] - aIJ[hx][2]);
			for (aIU = 768, hx = ez - 1; 0 <= hx; hx--) eD[dG = (hx + dw) % ez] < aIU && (aIU = eD[dG], gf[dw] = dG);
			for (aIT[gf[dw]] += 4, aIU = 768, hx = ez - 1; 0 <= hx; hx--) eD[dG = (hx + dw) % ez] < aIU && dG !== gf[dw] && (aIU = eD[dG], gg[dw] = dG);
			aIT[gg[dw]]++
		}
	}, this.a6R = function(aIT) {
		for (var hx, uL, ez = this.rY.length - 1, dw = ez; 0 <= dw; dw--) this.rY[dw] = dw;
		for (dw = ez - 1; 0 <= dw; dw--) aIT[dw]++;
		for (dw = 1; dw <= ez; dw++) {
			for (uL = 0, hx = 1; hx < ez; hx++) aIT[hx] > aIT[uL] && (uL = hx);
			aIT[uL] = 0, this.rY[dw] = uL + 1
		}
	}, this.aIP = function(aIN, gf, gg) {
		var dw, hx, aIV, iZ, f8, dG, kb, t7, aIW = this.rY.length - 1,
			aIX = new Uint16Array(aIW),
			aIY = [],
			wS = Math.max(h9 + 1 >> 1, 6);
		loop: for (dw = 0; dw < h9; dw++)
			if (null !== (aIV = ad.k3.tc(wQ[dw]))) {
				for (hx = this.rg.length - 1; 0 <= hx; hx--)
					if (aIV === this.rg[hx] && this.rh[hx].length < wS) {
						this.rh[hx].push(dw);
						continue loop
					} this.rg.push(aIV), aIY.push(!1), this.rh.push([dw])
			}
		for (hx = this.rg.length - 1; 0 <= hx; hx--) {
			for (f8 = -1, iZ = this.rg.length - 1; 0 <= iZ; iZ--) !aIY[iZ] && (-1 === f8 || this.rh[iZ].length > this.rh[f8].length) && (f8 = iZ);
			for (iZ = aIW - 1; 0 <= iZ; iZ--) aIX[iZ] = 1;
			for (iZ = this.rh[f8].length - 1; 0 <= iZ; iZ--) aIX[gf[this.rh[f8][iZ]]] += 3, aIX[gg[this.rh[f8][iZ]]]++;
			for (dw = aIW - 1; 0 <= dw; dw--) {
				for (dG = f8 % aIW, iZ = aIW - 1; 0 <= iZ; iZ--) aIX[iZ] > aIX[dG] && (dG = iZ);
				for (kb = -1, iZ = tp; 0 < iZ; iZ--)
					if (this.rY[iZ] === dG + 1) {
						kb = iZ;
						break
					} if (aIX[dG] = 0, -1 !== kb) {
					for (t7 = 0, iZ = tp; 0 < iZ; iZ--) aIN[kb] > aIN[iZ] && t7++;
					if (t7 !== tp - 1) {
						for (iZ = this.rh[f8].length - 1; 0 <= iZ; iZ--) aIN[kb]++, this.ia[this.rh[f8][iZ]] = kb;
						break
					}
				}
			}
			aIY[f8] = !0
		}
	}, this.aIQ = function(gf, gg, aIN) {
		for (var dw, h0, ez = this.rY.length - 1, border = er(h9, tp), aIZ = (0 < h9 % tp && border++, new Uint8Array(1 + ez)), hx = ez; 1 <= hx; hx--) aIZ[this.rY[hx]] = hx;
		for (dw = 0; dw < h9; dw++) h0 = aIZ[gf[dw] + 1], 0 === this.ia[dw] && h0 <= tp && aIN[h0] < border && (aIN[h0]++, this.ia[dw] = h0);
		for (dw = 0; dw < h9; dw++) h0 = aIZ[gg[dw] + 1], 0 === this.ia[dw] && h0 <= tp && aIN[h0] < border && (aIN[h0]++, this.ia[dw] = h0);
		for (hx = tp; 1 <= hx; hx--)
			for (dw = h9 - 1; 0 <= dw && !(aIN[hx] >= border); dw--) 0 === this.ia[dw] && (aIN[hx]++, this.ia[dw] = hx)
	}, this.aIR = function() {
		var dw, hn, aIT = new Uint16Array(tp);
		for (aIT[tp - 1] = f3, dw = tp - 2; 0 <= dw; dw--) aIT[dw] = a1.j2[dw].w9;
		for (aIT[0]--, hn = 0 === aIT[0] ? 1 : 0, dw = h9; dw < f3; dw++) this.ia[dw] = hn + 1, aIT[hn]--, aIT[hn] <= 0 && hn++
	}, this.aIS = function() {
		for (var dw = h9; dw < f3; dw++) this.ia[dw] = 1 + dw % tp
	}
}

function fQ() {
	for (var jn, jo, dw = eQ - 1; 0 <= dw; dw--) jn = er(eS[dw], 4) % au.eZ, jo = er(eS[dw], 4 * au.eZ), i9[eM] = i9[eM] > jn ? jn : i9[eM], iC[eM] = iC[eM] > jo ? jo : iC[eM], i8[eM] = i8[eM] < jn ? jn : i8[eM], iB[eM] = iB[eM] < jo ? jo : iB[eM]
}

function ei() {
	var f8, f6, dw, ez = f0[eM].length;
	loop: for (dw = ez - 1; 0 <= dw; dw--) {
		for (f8 = 3; 0 <= f8; f8--)
			if (f6 = f0[eM][dw] + eV[f8], a4.fB(f6) || a4.f9(f6) && a4.fA(f6) !== eM) {
				a4.hk(f0[eM][dw], eM);
				continue loop
			} f0[eM][dw] = f0[eM][ez - 1], f0[eM].pop(), ez--
	}
}

function ej() {
	var f8, f6, aIa, aIb, ez = fH[eM].length;
	loop: for (var dw = ez - 1; 0 <= dw; dw--) {
		for (aIa = aIb = !1, f8 = 3; 0 <= f8; f8--) {
			if (f6 = fH[eM][dw] + eV[f8], a4.a6d(f6, eM)) continue loop;
			aIa = aIa || a4.uh(f6), aIb = aIb || a4.pY(f6)
		}
		aIa ? fI[eM].push(fH[eM][dw]) : aIb ? fL[eM].push(fH[eM][dw]) : a4.qD(fH[eM][dw], eM), fH[eM][dw] = fH[eM][ez - 1], fH[eM].pop(), ez--
	}
}

function fF() {
	fP[eP] -= eQ
}

function fG(border) {
	for (var ez = border.length, dw = ez - 1; 0 <= dw; dw--) a4.qL(eP, border[dw]) || (border[dw] = border[ez - 1], border.pop(), ez--)
}

function fJ(border) {
	for (var ez = border.length, dw = ez - 1; 0 <= dw; dw--) !a4.qL(eP, border[dw]) && a4.f1(border[dw]) && (border[dw] = border[ez - 1], border.pop(), ez--)
}

function fK(border) {
	for (var f8, f6, ez = border.length, dw = ez - 1; 0 <= dw; dw--)
		for (f8 = 3; 0 <= f8; f8--)
			if (f6 = border[dw] + eV[f8], a4.a6d(f6, eP)) {
				fH[eP].push(border[dw]), border[dw] = border[ez - 1], border.pop(), ez--;
				break
			}
}

function fM() {
	for (var f8, f6, dw = eQ - 1; 0 <= dw; dw--)
		for (f8 = 3; 0 <= f8; f8--) f6 = eS[dw] + eV[f8], a4.a6e(eP, f6) && a4.a6f(f6) && (fH[eP].push(f6), a4.f2(f6, eP))
}

function fN() {
	var jn, jo;
	loop: for (; iC[eP] < iB[eP];) {
		for (jn = i8[eP]; jn >= i9[eP]; jn--)
			if (a4.qL(eP, 4 * (iC[eP] * au.eZ + jn))) break loop;
		iC[eP]++
	}
	loop: for (; iC[eP] < iB[eP];) {
		for (jn = i8[eP]; jn >= i9[eP]; jn--)
			if (a4.qL(eP, 4 * (iB[eP] * au.eZ + jn))) break loop;
		iB[eP]--
	}
	loop: for (; i9[eP] < i8[eP];) {
		for (jo = iB[eP]; jo >= iC[eP]; jo--)
			if (a4.qL(eP, 4 * (jo * au.eZ + i9[eP]))) break loop;
		i9[eP]++
	}
	loop: for (; i9[eP] < i8[eP];) {
		for (jo = iB[eP]; jo >= iC[eP]; jo--)
			if (a4.qL(eP, 4 * (jo * au.eZ + i8[eP]))) break loop;
		i8[eP]--
	}
}

function hs(player, hg) {
	return 0 === b8.ia[player] || b8.ia[player] !== b8.ia[hg]
}

function uj(player, hg) {
	for (var dG, aIc = a6.ee(player), dw = 0; dw < aIc; dw++)
		if (0 === a6.ef(player, dw))
			if ((dG = a6.ek(player, dw)) === f3) {
				if (hg === f3) return !1;
				if (ui(hg)) return !0
			} else if (hg === f3) {
		if (ui(dG)) return !0
	} else if (un(hg, dG)) return !0;
	return !1
}

function ui(player) {
	for (var dw, f7, ez = fH[player].length, f8 = 3; 0 <= f8; f8--)
		for (f7 = eV[f8], dw = 0; dw < ez; dw++)
			if (a4.fB(fH[player][dw] + f7)) return !0;
	return !1
}

function un(tH, tI) {
	var dw, dY, f8, f7, f6, aEY = fH[tH].length,
		aGW = fH[tI].length;
	for (aGW < aEY && (dY = tH, tH = tI, tI = dY, dY = aEY, aEY = aGW, 0), f8 = 3; 0 <= f8; f8--)
		for (f7 = eV[f8], dw = 0; dw < aEY; dw++)
			if (f6 = fH[tH][dw] + f7, a4.f9(f6) && a4.fA(f6) === tI) return !0;
	return !1
}

function aId() {
	this.iK = function() {
		l.iK(), w.iK(), aK.iK(), aP.jA.iK(), aO.a4F(), bA.iK(), bC.a4d.iK(), b7.d6 && (b7.d6 = !1, x.gG())
	}
}

function aIe() {
	this.dX = b7.dX, this.g0 = 0, this.aIf = 0, this.a4A = 0, this.aIg = null, this.aIh = 7, this.wa = 0, this.cl = function() {
		this.a4A = 0, this.aIg = [], this.g0 = 0, this.aIf = 0
	}, this.aDJ = function(ma) {
		var dw;
		if (kQ) this.a1V(ma);
		else if (this.aIg.push(ma), 2 === jK) {
			for (dw = 0; dw < this.aIg.length; dw++) aa.li.iK(this.aIg[dw]);
			this.aIg = []
		}
	}, this.a1V = function(ma) {
		aa.li.iK(ma), ab.iK(), t.a1V(this.a4A), this.a4A === tq ? (mr.iK(), this.a4A = 0, this.g0 = 0, this.aIf = 0, this.dX = b7.dX) : (this.a4A++, a8.ti(), a8.jJ(!0), b2.a1l())
	}, this.iK = function() {
		aK.iK(), kQ ? (b7.d6 = t.a1V(-1) || b7.d6, jL()) : (0 !== this.g0 || b7.dX >= this.dX && (this.dX += b7.a1U * Math.floor(1 + (b7.dX - this.dX) / b7.a1U), 2 === jK ? j8() : this.aIi(), this.g0++, 27 < b7.dX - this.wa)) && this.aIj(), jG(),
			b7.d6 && (b7.d6 = !1, qO()), this.wa = b7.dX
	}, this.aIj = function() {
		b7.d6 = !0, jI(), this.g0 = 0
	}, this.aIi = function() {
		var aIk, dw;
		if (this.aIf !== 7 * this.a4A) jD(), b2.a1l();
		else {
			for (aIk = !1; this.aIl() && (aIk = !0, jD(), 0 < this.aIg.length);)
				for (dw = this.aIh - 2; 0 <= dw; dw--) jD();
			aIk ? b2.a1l() : (j8(), b2.tl())
		}
	}, this.aIl = function() {
		return 0 < this.aIg.length && (this.a4A++, aa.li.iK(this.aIg[0]), this.aIg.shift(), !0)
	}
}

function aIm() {
	var aIn, aIo, aIp, a4A, aIq, g0 = 0,
		dX = b7.dX;

	function aIt() {
		! function() {
			if (!kQ) return;
			if (j1) return;
			return aIq % 7 != 0 ? aIq++ : a4A === tq ? (aIw(), t.a1V(a4A), mr.iK()) : (aIw(), aIq++, a4A++, a8.ti(), a8.jJ(!0)), 1
		}() && (aIw(), jD())
	}

	function aIu() {
		g0 = 0, (kQ ? (b7.d6 = t.a1V(a4A - (aIq % 7 == 0 ? 0 : 1) + aIq % 7 / 7) || b7.d6, jL) : j.fk || !af.v5 ? jL : (b7.d6 = !0, jI))()
	}

	function aIw() {
		var dw, ez, aIx = ab.mp.aE0,
			eE = ab.mp.aE1,
			eG = ab.mp.aE2,
			eI = ab.mp.aE3,
			aIy = ab.mp.aE4,
			aIz = ab.mp.aE5;
		if (aIn >= aIz.length) k.vu("Replay file smaller than expected."), at.r7.rF(-1);
		else if (aIz = aIz[aIn], aIy[aIn]) {
			for (ez = aIo + aIz, dw = aIo; dw < ez; dw++) aa.li.mc(aIx[dw], eE[dw], eG[dw], eI[dw]);
			aIo += aIz, aIn++
		} else ++aIp >= aIz && (aIn++, aIp = 0)
	}
	this.aIf = 0, this.cl = function() {
		aIq = a4A = aIp = aIo = aIn = 0
	}, this.iK = function() {
		var aGt;
		aK.iK(), af.yj() < 1.7 ? 0 === g0 ? b7.dX >= dX && (aGt = b7.a1U / af.yj(), dX += aGt * Math.floor(1 + (b7.dX - dX) / aGt), 2 === jK || j.fk || !af.v5 ? j8() : (aIt(), b2.a1l()), g0++) : aIu() : function() {
			var aGt;
			if (b7.dX >= dX)
				if (2 === jK || j.fk || !af.v5) j8(), dX = b7.dX;
				else {
					for (aGt = b7.a1U / af.yj(), 16 < (b7.dX - dX) / aGt && (dX = b7.dX - 16 * aGt); b7.dX >= dX && 2 !== jK;) dX += aGt, aIt();
					b2.a1l()
				} aIu()
		}(), jG(), b7.d6 && (b7.d6 = !1, qO())
	}, this.rS = function() {
		aIn !== ab.mp.aE5.length && k.vu("Replay file larger than expected.")
	}
}

function aJ0() {
	var g0 = 0,
		dX = b7.dX;
	this.aIf = 0, this.iK = function() {
		aK.iK(), kQ ? jL() : 0 === g0 ? b7.dX >= dX && (dX += b7.a1U * Math.floor(1 + (b7.dX - dX) / b7.a1U), 2 === jK || j.fk ? j8() : (jD(), b2.a1l()), g0++) : ((j.fk ? jL : (b7.d6 = !0, jI))(), g0 = 0), jG(), b7.d6 && (b7.d6 = !1, qO())
	}
}

function cx() {
	this.rR = null, this.d6 = !1, this.dX = 0, this.a1U = 56;
	var aJ1 = 0;

	function aJ2() {
		b7.dX = aJ1 = performance.now(), b7.rR.iK(), window.requestAnimationFrame(aJ2)
	}
	this.cl = function() {
		this.uB(), window.requestAnimationFrame(aJ2), this.dX = performance.now()
	}, this.u7 = function() {
		fj ? (this.rR = new aIm, this.rR.cl()) : j1 ? this.rR = new aJ0 : (this.rR = new aIe, this.rR.cl())
	}, this.uB = function() {
		this.rR = new aId, this.d6 = !0
	}, this.iK = function() {
		this.rR.aIf++
	}, this.iY = function() {
		return this.rR.aIf
	}, this.aD8 = function() {
		var dY = performance.now();
		dY < aJ1 + 1e3 || (this.dX = dY, this.rR.iK())
	}
}

function cC() {
	var kH = 0,
		aJ3 = !0;

	function aJ5(df) {
		8 !== x.sb() || 2 !== hB[eu] && (0 !== hA[eu] || kQ) || k.w4(df)
	}
	this.iK = function() {
		var dY, wd;
		b7.dX > kH && (kH = b7.dX + 2500, dY = new Date, wd = dY.getUTCSeconds(), aJ3 ? wd < 45 && (aJ3 = !1) : wd < 45 || (aJ3 = !0, (wd = dY.getUTCMinutes() + 1) % 15 == 0 && aJ5(30 === wd ? "Upcoming Battle Royale Contest!" :
			"Upcoming Alliance Contest!")))
	}
}

function c3() {
	var js, jt, ju, jw, aJ6 = 0,
		aJ7 = 0;

	function aJ9() {
		return Math.pow(Math.pow(ju - js, 2) + Math.pow(jw - jt, 2), .5)
	}

	function aJ8(dG) {
		js = nV * dG.touches[0].clientX, jt = nV * dG.touches[0].clientY, ju = nV * dG.touches[1].clientX, jw = nV * dG.touches[1].clientY
	}
	this.s5 = function(dG) {
		return 1 < dG.touches.length ? (aJ7 = b7.dX, aJ6 = 3, aJ8(dG), i.oL(), !0) : (aJ6 = 0, !1)
	}, this.s6 = function(dG) {
		var aAW, gy, gz;
		return 0 !== jK && 1 < dG.touches.length && (aJ6 = Math.max(aJ6 - 1, 0), f.kg() && (aAW = aJ9(), aJ8(dG), dG = aJ9(), gy = Math.floor((js + ju) / 2), gz = Math.floor((jt + jw) / 2), p.zK(gy, gz, Math.max(.125, dG) / Math.max(.125, aAW)),
			b7.d6 = !0), !0)
	}, this.sX = function() {
		var jn, jo;
		return !!(aJ6 && (aJ6 = 0, b7.dX < aJ7 + 500)) && (jn = (js + ju) / 2, jo = (jt + jw) / 2, i.sQ(jn, jo), i.click(jn, jo, !0) && (b7.d6 = !0), !0)
	}
}

function cR() {
	this.size = 0, this.g0 = 0, this.ma = null, this.cl = function(ma) {
		this.g0 = 0, this.ma = ma, this.size = ma.length
	}, this.a3f = function() {
		this.ma = null
	}, this.mb = function(size) {
		for (var e4 = 0, ma = this.ma, kg = this.g0 + size - 1, dw = this.g0; dw <= kg; dw++) e4 |= (ma[dw >> 3] >> 7 - (7 & dw) & 1) << kg - dw;
		return this.g0 += size, this.g0 > 8 * this.size && console.log("error unwrapper"), e4
	}, this.aCf = function(size) {
		for (var eD = new Array(size), dw = 0; dw < size; dw++) eD[dw] = this.mb(10);
		return h.p5(eD)
	}, this.aJA = function(aEP) {
		return this.size === ag.aJB(aEP)
	}
}

function cr() {
	this.aFE = 0, this.aFF = 0, this.aFA = 0, this.aFB = 0, this.aFC = 0, this.aFD = 0, this.a1m = [0, 0, 0, 0], this.kf = function() {
		this.aFE = p.jx(), this.aFF = p.gF(), this.aFA = -this.aFE, this.aFB = -this.aFF, this.aFC = jv / hG, this.aFD = gD / hG, this.a1m[0] = Math.floor(this.aFA), this.a1m[1] = Math.floor(this.aFB), this.a1m[2] = Math.floor(this.a1m[0] + this
			.aFC + 1), this.a1m[3] = Math.floor(this.a1m[1] + this.aFD + 1), b2.a1j = !0
	}
}

function c4() {
	var xq, kH;
	this.cl = function() {
		xq = 1, kH = 0
	}, this.iK = function() {
		0 < xq && (kH = 0 === kH ? b7.dX + 16 : kH, xq = (xq -= .001 * (b7.dX - kH)) < 0 ? 0 : xq, kH = b7.dX, b7.d6 = !0)
	}, this.gG = function() {
		0 < xq && (gH.fillStyle = "rgba(0,0,0," + xq + ")", gH.fillRect(0, 0, jv, gD))
	}
}

function c7() {
	function aJF(a9w, jn, jo, g6, i5) {
		a9w >= au.a7k || (au.pi === a9w && (gH.fillStyle = ae.lT, gH.fillRect(jn, jo, g6, i5), gH.fillStyle = ae.gK), gH.strokeRect(jn, jo, g6, i5), gH.fillText(au.ix.ph[a9w].name, Math.floor(jn + .5 * g6), Math.floor(jo + .55 * i5)))
	}
	this.sS = !1, this.a5F = [0, 0, 0, 0], this.show = function() {
		this.sS = !0, this.resize(), b7.d6 = !0
	}, this.resize = function() {
		var aEY = er(au.a7k + au.a7k % 2, 2),
			aEY = dk - aEY * gC;
		this.a5F[2] = di ? Math.floor(.75 * xJ) : Math.floor(.5 * xJ), this.a5F[3] = Math.floor(1.25 * this.a5F[2]), this.a5F[3] > aEY && (this.a5F[3] = aEY, this.a5F[2] = Math.floor(aEY / 1.2)), this.a5F[0] = Math.floor((dj - this.a5F[2]) / 2),
			this.a5F[1] = Math.floor((dk - this.a5F[3]) / 2)
	}, this.s1 = function(jn, jo) {
		return !(jn < this.a5F[0] || jo < this.a5F[1] || jn > this.a5F[0] + this.a5F[2] || jo > this.a5F[1] + this.a5F[3])
	}, this.g9 = function(jn, jo) {
		var wS, aEY = er(au.a7k + au.a7k % 2, 2);
		return b7.d6 = !0, jn < this.a5F[0] || jo < this.a5F[1] || jn > this.a5F[0] + this.a5F[2] || jo > this.a5F[1] + this.a5F[3] ? !(this.sS = !1) : (wS = Math.floor(.17 * this.a5F[3]), jo < this.a5F[1] + wS ? jn > this.a5F[0] + this.a5F[2] -
			wS && (this.sS = !1) : (jo = (jo = Math.floor(aEY * (jo - this.a5F[1] - wS - .00576 * fy) / (this.a5F[3] - wS - .01152 * fy))) < 0 ? 0 : aEY - 1 < jo ? aEY - 1 : jo, jn > this.a5F[0] + this.a5F[2] / 2 && (jo += aEY), jo >= au
				.a7k || au.bi(jo, Math.floor(16384 * Math.random()))), !0)
	}, this.gG = function() {
		var dw, jt, wS = Math.floor(.17 * this.a5F[3]),
			aEY = er(au.a7k + au.a7k % 2, 2),
			gap = .6 * .01152 * fy,
			wT = (this.a5F[3] - wS - (aEY + 1) * gap) / aEY,
			qY = Math.floor((this.a5F[2] - 3 * gap) / 2);
		for (gH.lineWidth = tB, gH.textAlign = gJ, gH.textBaseline = gI, gH.fillStyle = ae.kv, gH.fillRect(this.a5F[0], this.a5F[1] + wS, this.a5F[2], this.a5F[3] - wS), gH.fillStyle = ae.lT, gH.fillRect(this.a5F[0], this.a5F[1], this.a5F[2],
			wS), gH.strokeStyle = ae.gK, gH.strokeRect(this.a5F[0], this.a5F[1], this.a5F[2], this.a5F[3]), gH.fillStyle = ae.gK, gH.fillRect(this.a5F[0], this.a5F[1] + wS, this.a5F[2], 2), gH.font = g1 + Math.floor(.48 * wS) + g2, gH.fillText(
				"Maps", Math.floor(this.a5F[0] + this.a5F[2] / 2), Math.floor(this.a5F[1] + .55 * wS)), gH.font = g1 + Math.floor(.48 * wT) + g2, dw = aEY - 1; 0 <= dw; dw--) jt = Math.floor(this.a5F[1] + wS + gap + dw * (wT + gap)), aJF(dw, this
			.a5F[0] + gap, jt, qY, wT), aJF(dw + aEY, this.a5F[0] + qY + 2 * gap, jt, qY, wT);
		j.vI(Math.floor(this.a5F[0] + this.a5F[2] - .7 * wS), Math.floor(this.a5F[1] + .3 * wS), Math.floor(.4 * wS)), gH.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function cP() {
	this.size = 0, this.g0 = 0, this.ma = null, this.cl = function(ma) {
		this.g0 = 0, this.ma = ma, this.size = ma.length
	}, this.bi = function(aEP) {
		return this.cl(new Uint8Array(this.aJB(aEP))), this.ma
	}, this.a3f = function() {
		this.ma = null
	}, this.p2 = function(size, wf) {
		for (var ma = this.ma, kg = this.g0 + size - 1, dw = this.g0; dw <= kg; dw++) ma[dw >> 3] |= (wf >> kg - dw & 1) << 7 - (7 & dw);
		this.g0 += size, this.g0 > 8 * this.size && console.log("error wrapper")
	}, this.aJG = function(size) {
		for (var ma = this.ma, kg = this.g0 + size, dw = this.g0; dw < kg; dw++) ma[dw >> 3] &= 255 ^ 128 >>> (7 & dw)
	}, this.aJB = function(aEP) {
		return aEP + 7 >> 3
	}, this.aJH = function(eD, hp, kg, aJI) {
		for (var dw = hp; dw < kg; dw++) this.p2(aJI, eD[dw])
	}
}
setTimeout(bE, 1e4);