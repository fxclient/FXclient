var a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, aA, aB, aC, aD, aE, aF, aG, aH, aI, aJ, aK, aL, aM, aN, aO, aP, aQ, aR, aS, aT, aU, aV, aW, aX, aY, aZ, aa, ab, ac, ad, ae, af,
	ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, as, at, au, av, aw, ax, ay, az, b0, b1, b2, b3, b4, b5, b6, b7, b8, b9, bA, bB, d4, d5, d6, d7, d8, d9, dA, eF, eG, eH, eI, eJ, eK, eL, eM, eN, eO, eP, eQ, eR, hp, hm, ho, hW;

function bC() {
	var cj;
	a || (bE(), bF(), an = new bG, am = new bH, b = new bI, c = new bJ, d = new bK, e = new bL, f = new bM, g = new bN, h = new bO, i = new bP, j = new bQ, k = new bR, l = new bS, m = new bT, n = new bU, o = new bV, p = new bW, q = new bX, r =
		new bY, s = new bZ, t = new ba, u = new bb, v = new bc, w = new bd, x = new be, (y = new bf).bg(), z = new bh, a0 = new bi, a1 = new bj, a2 = new bk, a3 = new bl, a4 = new bm, a5 = new bn, a6 = new bo, a7 = new bp, a8 = new bq, a9 =
		new br, aA = new bs, aB = new bt, aC = new bu, aD = new bv, aP = new bw, aE = new bx, aF = new by, aG = new bz, aH = new c0, aI = new c1, aJ = new c2, aK = new c3, aL = new c4, aM = new c5, aN = new c6, aO = new c7, aQ = new c8, aR =
		new c9, aS = new cA, aT = new cB, aU = new cC, aV = new cD, aW = new cE, aX = new cF, aZ = new cG, aa = new cH, ab = new cI, ac = new cJ, ad = new cK, ae = new cL, af = new cM, ag = new cN, ah = new cO, ai = new cP, aj = new cQ, ak =
		new cR, al = new cS, ao = new cT, ap = new cU, aq = new cV, ar = new cW, as = new cX, at = new cY, au = new cZ, av = new ca, aw = new cb, ax = new cc, aY = new cd, bB = new ce, (a = new cf).ch(), aP.ch(), ah.ch(), aj.ch(), au.ch(), ci(),
		(cj = document.getElementById("usernameField")) && document.body.removeChild(cj), bB.ch(), a5.ch(), ay = new ck, aR.ch(), aK.ch(), cl(), cm(), b1 = new cn, b2 = new co, b3 = new cp, b4 = new cq, b5 = new cr, b6 = new cs, (b7 = new ct)
		.ch(), b8 = new cu, b9 = new cv, (b0 = new cw).ch(), (bA = new cx).ch(), az = new cy, cz(), aF.ch(), a7.d0(), aB.ch(), x.ch(), aW.ch(), aP.ch(), q.ch(), a9.ch(), al.ch(), a3.ch(), aZ.ch(), ax.ch(), ak.d1(), b7.d2 = !0, setTimeout(
			function() {
				au.bg(2, 14071)
			}, 0), a.d3 = 1)
}

function cf() {
	this.ch = function() {
		d4 = 2, d5 = 2180, d7 = 14, d6 = "1.91.7   18 Feb 2024", d8 = 0 <= window.location.hostname.toLowerCase().indexOf("territorial.io"), dA = function() {
			try {
				return window.self !== window.top
			} catch (dC) {
				return !0
			}
		}(), d9 = (new Date).getTime() % 1024
	}, this.d3 = 0
}

function cc() {
	this.dD = new dE, this.dF = new dG, this.ch = function() {
		this.dD.ch()
	}
}

function dE() {
	function dI(dO) {
		console.log("Video Ad Completed: " + dO)
	}

	function dH() {
		return dR || dS
	}
	this.ch = function() {
		var dL;
		dH() || (window.aiptag = window.aiptag || {
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
					AIP_COMPLETE: dI
				})
			}), (dL = document.createElement("div")).id = "videoad", document.body.appendChild(dL), (dL = document.createElement("script")).async = !0, dL.src = "//api.adinplay.com/libs/aiptag/pub/TRT/territorial.io/tag.min.js", document.head
			.appendChild(dL))
	}, this.dN = function() {
		if (console.log("showVideo"), dH()) console.log("error 0");
		else {
			if (void 0 !== aiptag.adplayer) return console.log("Success: Ad will be shown!"), aiptag.cmd.player.push(function() {
				aiptag.adplayer.startVideoAd()
			}), !0;
			console.log("error: aiptag.adplayer is undefined")
		}
		return !1
	}, this.dP = function(dQ) {
		dH() || "undefined" != typeof aipAPItag && (dQ ? aipAPItag.showCMPButton() : aipAPItag.hideCMPButton())
	}
}

function dG() {
	var dT = 6e4;
	this.show = function() {
		return b7.dT < dT ? (console.log("can't show ad, next ad will be shown in " + ((dT - b7.dT) / 1e3).toFixed(0) + "s"), !1) : (dT = b7.dT + 135e4, !!ax.dD.dN() || (dR ? (window.webkit.messageHandlers.iosCommandA.postMessage("show ad " +
			Math.floor(135e4)), !0) : 12 <= dV && (dS.presentAd(Math.floor(135e4)), !0)))
	}
}

function dW() {
	var username;
	return dR ? dX.username : (12 <= dV ? "" === (username = dS.loadString(20)) && (username = "Android User " + Math.floor(1e3 * Math.random()), dS.saveString(20, username)) : 5 <= dV ? "" === (username = dS.loadString(0)) && (username = "Player " +
		Math.floor(1e3 * Math.random()), dS.saveString(0, username)) : username = a5.dY(0), username)
}

function dZ() {
	var db, max;
	if (dR) db = dX.password;
	else if (12 <= dV) db = dS.loadString(22);
	else {
		if (5 <= dV) return 0;
		db = a5.dY(9)
	}
	return max = Math.floor(Math.pow(2, 48)), 0 < (db = Math.floor(parseInt(h.dc(db)))) && db < max || dd(db = Math.floor(1 + (max - 1) * Math.random())) ? db : 0
}

function cl() {
	var dU;
	dR ? de = dX.zoom || df < dg : 12 <= dV ? -1 === (dU = dS.loadNumber(21)) ? (de = dS.getNumber(0) <= 100 || df < dg, dS.saveNumber(21, de ? 1 : 0)) : de = 1 === dU || df < dg : 5 <= dV ? 2 === (dU = dS.loadNumber(1)) ? (de = !0, dS.saveNumber(1,
		de ? 1 : 0)) : de = 1 === dU : de = 0 === a5.dY(4) || df < dg
}

function dh() {
	return dR ? dX.emojis : 5 <= dV ? dS.loadString(1) : a5.dY(7)
}

function di() {
	return dR ? dX.colors : 12 <= dV ? dS.loadString(21) : 5 <= dV ? dS.loadString(2) : a5.dY(8)
}

function dj(username) {
	dR ? window.webkit.messageHandlers.iosCommandA.postMessage("username " + username) : 12 <= dV ? (dS.saveString(20, username), dS.setState(10)) : 5 <= dV ? dS.saveString(0, username) : ((username.length < 3 || 0 <= username.indexOf(";")) && (
		username = "Player 666"), a5.dk(0, username), a5.dl())
}

function dd(da) {
	da = h.dm(da.toString());
	return dR ? (dX.password = da, window.webkit.messageHandlers.iosCommandA.postMessage("password " + da), !0) : 12 <= dV ? (dS.saveString(22, da), !0) : !(5 <= dV || 2 !== a5.dn() || (a5.dk(9, da), a5.dl(), 0))
}

function dp(zoom, dq) {
	dR ? (window.webkit.messageHandlers.iosCommandA.postMessage("zoom " + (zoom ? 1 : 0)), window.webkit.messageHandlers.iosCommandA.postMessage("sound " + (dq ? 1 : 0))) : 12 <= dV ? (dS.saveNumber(22, dq ? 1 : 0), dS.saveNumber(21, zoom ? 1 : 0)) :
		5 <= dV ? (dS.saveNumber(1, zoom ? 1 : 0), dS.saveNumber(11, dq ? 1 : 0)) : (a5.dk(2, dq ? 1 : 0), a5.dk(4, zoom ? 0 : 1), a5.dl())
}

function dr() {
	for (var db = "", ds = 0; ds < b3.dt; ds += 2) db += b3.du[ds] || b3.du[ds + 1] ? b3.du[ds] && !b3.du[ds + 1] ? "1" : !b3.du[ds] && b3.du[ds + 1] ? "2" : "3" : "0";
	dR ? window.webkit.messageHandlers.iosCommandA.postMessage("emojis " + db) : 5 <= dV ? dS.saveString(1, db) : (a5.dk(7, db), a5.dl())
}

function dv(db) {
	if (dR) window.webkit.messageHandlers.iosCommandA.postMessage("colors " + db);
	else {
		if (12 <= dV) dS.saveString(21, db);
		else if (5 <= dV) return void dS.saveString(2, db);
		a5.dk(8, db), a5.dl()
	}
}

function dw(dO) {
	dR || 5 <= dV && dS.setState(dO)
}

function dx() {
	!dR && 7 <= dV ? dS.setState(5) : location.reload()
}

function cm() {
	dV < 17 || dS.saveString(23, document.documentElement.outerHTML)
}

function cV() {
	this.e0 = new Uint16Array(2), this.e1 = new Uint32Array(2), this.e2 = new Uint8Array(4), this.e3 = new Uint8Array(4), this.e4 = new Uint32Array(5), this.e5 = new Uint32Array(8), this.e6 = function(e7, e8) {
		return e7[0] = e8, e7
	}, this.e9 = function(e7, e8, eA) {
		return e7[0] = e8, e7[1] = eA, e7
	}, this.eB = function(e7, e8, eA, eC) {
		return e7[0] = e8, e7[1] = eA, e7[2] = eC, e7
	}, this.eD = function(e7, e8, eA, eC, eE) {
		return e7[0] = e8, e7[1] = eA, e7[2] = eC, e7[3] = eE, e7
	}
}

function eS() {
	eK = 0, eL = 2048, eM = new Uint32Array(4 * eL), eN = 0, eO = new Uint32Array(eL), (eP = new Int32Array(4))[0] = -4 * au.eT, eP[1] = 4, eP[2] = -eP[0], eP[3] = -eP[1], eQ = new Uint8Array(au.eT * au.eU)
}

function eV(player) {
	eG = player, eR = !1, eW(), eX();
	for (var ds = a6.eY(eG) - 1; 0 <= ds; ds--) 0 === a6.eZ(eG, ds) && (eF = ds, ea());
	eR && eb()
}

function eb() {
	ec(), ed()
}

function ea() {
	eJ = a6.ee(eG, eF), eH = a6.ef(eG, eF), eg(), (0 !== eK && (ei(), ej()) ? ek : eh)()
}

function ej() {
	return eI = el(eH, eK), em < eI
}

function ei() {
	for (var ds = eK - 1; 0 <= ds; ds--) eQ[el(eM[ds], 4)] = 0
}

function eh() {
	var dU;
	1 === a6.eY(eG) && c.en(eG), eG !== eo ? (ep[eG] += eH, a7.eq(eG)) : (dU = ep[eG], ep[eG] += eH, a7.eq(eG), b4.er[13] -= ep[eG] - dU), a6.es(eG, eF)
}

function eW() {
	var ds, et = eu[eG].length;
	for (eN = 0, ds = (eL < et ? eL : et) - 1; 0 <= ds; ds--) eO[eN++] = eu[eG][ds]
}

function eX() {
	for (var ds = eu[eG].length - 1; 0 <= ds; ds--) a4.ev(eu[eG][ds]) && a4.ew(eu[eG][ds], eG);
	eu[eG] = []
}

function eg() {
	eK = 0, (eJ === ex ? ey : ez)()
}

function ez() {
	for (var f0, f1, ds, f2 = 3; 0 <= f2; f2--)
		for (ds = eN - 1; 0 <= ds; ds--) f1 = el(f0 = eO[ds] + eP[f2], 4), 0 === eQ[f1] && a4.f3(f0) && a4.f4(f0) === eJ && (eQ[f1] = 1, eM[eK++] = f0)
}

function ey() {
	for (var f0, f1, ds, f2 = 3; 0 <= f2; f2--)
		for (ds = eN - 1; 0 <= ds; ds--) f1 = el(f0 = eO[ds] + eP[f2], 4), 0 === eQ[f1] && a4.f5(f0) && (eQ[f1] = 1, eM[eK++] = f0)
}

function ek() {
	f6() ? (f7(), eJ !== ex && f8()) : eh()
}

function f8() {
	f9(), fA(fB[eJ]), fA(fC[eJ]), fD(eu[eJ]), fE(fC[eJ]), fE(fF[eJ]), fG(), fH()
}

function f7() {
	eR = !0, a6.fI(eG, eF, eH), fJ[eG] += eK, fK(), fL()
}

function f6() {
	return (eJ === ex ? fM : fN)()
}

function fN() {
	var fO = eK * em,
		fP = fQ(),
		fR = fS(),
		fP = fO + 2 * fP + fR,
		fU = eI * eK;
	return fP < fU ? (eH -= fP, fV(fP - fO, fR), !0) : (eH -= fU, fV(fU - fO, fR), !1)
}

function fV(fU, fR) {
	if (0 < fR) {
		if (!(fR <= fU)) return a6.fW(eJ, eG, fR - fU), void(fU = 0);
		a6.fW(eJ, eG, 0), fU -= fR
	}
	fU = el(fU, 2), ep[eJ] >= fU ? ep[eJ] -= fU : ep[eJ] = 0
}

function fS() {
	return a6.fX(eJ, eG)
}

function fQ() {
	return an.fY(eK * ep[eJ], 1 + an.fY(10 * fJ[eJ], 16))
}

function fZ() {
	return Math.floor(2 + fa(el(fJ[eJ], 100), 8))
}

function fb() {
	return fB[eJ].length + el(fC[eJ].length + fF[eJ].length, 50)
}

function fM() {
	return eH -= eK * em, !0
}

function fL() {
	for (var ds = eK - 1; 0 <= ds; ds--) eu[eG].push(eM[ds]), fB[eG].push(eM[ds]), a4.ew(eM[ds], eG)
}

function ca() {
	this.fc = function() {
		fd || j.fe || ad.ff.fg(1) && ad.ff.fh(eo) && a6.fi(eo) && (a6.fj(eo, ex) || function(player) {
			var ds, fo, fp = fB[player],
				et = fp.length;
			for (fo = 0; fo < 4; fo++)
				for (ds = 0; ds < et; ds++)
					if (a4.f5(fp[ds] + eP[fo])) return 1;
			return
		}(eo)) && aa.fl.fm(o.fn(), ex)
	}
}

function cw() {
	var fq = 1,
		fr = [null, null];
	this.ch = function() {
		fq = .72 * (de ? .0011 : .001) * fs;
		for (var ds = 1; 0 <= ds; ds--) fr[ds] && this.ft(ds, fr[ds].db)
	}, this.ft = function(fu, db) {
		fr[fu] = {
			db: db,
			font: fv + 10 + fw
		}, this.fx(fu)
	}, this.fx = function(fu) {
		var db, fontSize, fz, g0, g1;
		a3.fy() && fr[fu] && (db = fr[fu].db, fontSize = Math.floor(.15 * fq * a3.get(13).height), g0 = n.measureText(db, fz = fv + fontSize + fw), (g1 = .8 * fq * a3.get(13).width) < g0 && (fontSize = Math.floor(fontSize * g1 / g0), fz = fv +
			fontSize + fw), fr[fu] = {
			db: db,
			font: fz
		}, b7.d2 = !0)
	}, this.g2 = function() {
		return Math.floor(fq * a3.get(13).height)
	}, this.g3 = function(g4, g5) {
		return !!a3.fy() && !(g4 < g6 || g5 < g7 - g8.g0 - fq * a3.get(13).height - 2 * g6 || g5 > g7 - g8.g0 - 2 * g6 || (g4 < g6 + fq * a3.get(13).width ? (bA.dQ(0), 0) : g4 < 2 * g6 + fq * a3.get(13).width || !(g4 < 2 * g6 + 2 * fq * a3.get(
			13).width) || (bA.dQ(1), 0)))
	}, this.g9 = function() {
		return Math.floor(g7 - g8.g0 - fq * a3.get(13).height - 2 * g6)
	}, this.gA = function() {
		if (a3.fy()) {
			gB.imageSmoothingEnabled = !0, gB.setTransform(fq, 0, 0, fq, g6, this.g9()), gB.drawImage(a3.get(14), 0, 0), gB.setTransform(fq, 0, 0, fq, 2 * g6 + fq * a3.get(13).width, this.g9()), gB.drawImage(a3.get(13), 0, 0);
			for (var ds = 1; 0 <= ds; ds--) fr[ds] && (gB.setTransform(1, 0, 0, 1, (1 + ds) * g6 + ds * fq * a3.get(13).width, this.g9()), gB.font = fr[ds].font, gB.textBaseline = gC, gB.textAlign = gD, gB.fillStyle = ae.gE, gB.fillText(fr[ds]
				.db, .5 * fq * a3.get(13).width, .86 * fq * a3.get(13).height));
			gB.setTransform(1, 0, 0, 1, 0, 0)
		}
	}
}

function gF(gG, gH, gI, gJ) {
	var ds, gM = .2,
		gN = document.createElement("canvas"),
		gO = gN.getContext("2d", {
			alpha: !1
		});
	for (gN.width = gG, gN.height = gG, gO.font = gH + "px " + settings.fontName, gO.textAlign = "center", gO.textBaseline = "middle", gO.fillStyle = "red", ds = 0; ds < gI.length; ds++) gO.fillText(gI[ds], .5 * gG, .5 * gG);
	return -1 < (gN = function(gK) {
		var ds, gQ;
		for (ds = gK.data.length - 4; 0 <= ds; ds -= 4)
			if (gQ = gK.data[ds], gJ <= gQ) return Math.floor(ds / (4 * gG));
		return -1
	}(gO.getImageData(0, 0, gG, gG))) && (gM = (gN - .5 * gG + .1 * gH) / gH), Math.max(gM, 0)
}

function cT() {
	this.gR = new Int16Array(4), this.gS = new Int16Array(4), this.ch = function() {
		var ds;
		for (this.gR[0] = -au.eT, this.gR[1] = 1, this.gR[2] = au.eT, this.gR[3] = -1, ds = 0; ds < 4; ds++) this.gS[ds] = 4 * this.gR[ds]
	}, this.gT = function(gU, gV) {
		var gW = this.gX(gV) - this.gX(gU),
			gV = this.gZ(gV) - this.gZ(gU),
			gU = gW >>> 31 << 1;
		return 5 + gU + (1 - gU) * (1 - (gV >>> 31 << 1)) * (Math.abs(gW) - Math.abs(gV) >>> 31) & 3
	}, this.gd = function(gU, gV, fo) {
		return fo % 2 == 0 ? fo + (1 - fo) * (1 - (this.gX(gV) - this.gX(gU) >>> 31 << 1)) + 4 & 3 : fo + (2 - fo) * (1 - (this.gZ(gV) - this.gZ(gU) >>> 31 << 1)) + 4 & 3
	}, this.gf = function(f0, gg) {
		for (var gV, gh, gj = fC[f0], et = gj.length, g0 = au.eT, gk = this.gX(gg), gl = this.gZ(gg), gm = gj[0] >> 2, min = this.gn(gk, gl, gm), ds = 1; ds < et; ds++)(gh = (gh = gk - (gV = gj[ds] >> 2) % g0) * gh + (gh = gl - ~~((.5 + gV) /
			g0)) * gh) < min && (min = gh, gm = gV);
		return gm
	}, this.go = function(player, gp) {
		return !a4.f5(gp) && player === a4.f4(gp)
	}, this.gn = function(gq, gr, gg) {
		return (gq -= this.gX(gg)) * gq + (gr -= this.gZ(gg)) * gr
	}, this.gs = function(gt, gu, gv) {
		gt = this.gx(gt) - this.gy(gv), gu = this.h0(gu) - this.h1(gv);
		return Math.sqrt(gt * gt + gu * gu)
	}, this.h2 = function(gU, gV) {
		var gw = this.gX(gU) - this.gX(gV),
			gU = this.gZ(gU) - this.gZ(gV);
		return Math.sqrt(gw * gw + gU * gU)
	}, this.h3 = function(f0) {
		return f0 < h4 && 0 !== h5[f0] && 2 !== h6[f0]
	}, this.h7 = function() {
		return 0 !== h5[eo] && 2 !== h6[eo]
	}, this.h8 = function(f0, h9) {
		return an.fY(h9 * ep[f0], 1e3)
	}, this.gx = function(gt) {
		return 16 * (gt + hA) / hB
	}, this.h0 = function(gu) {
		return 16 * (gu + hC) / hB
	}, this.hD = function(gt) {
		return Math.floor((gt + hA) / hB)
	}, this.hE = function(gu) {
		return Math.floor((gu + hC) / hB)
	}, this.hF = function(gq, gr) {
		return 1 <= gq && 1 <= gr && gq < au.eT - 1 && gr < au.eU - 1
	}, this.gX = function(gg) {
		return gg % au.eT
	}, this.gZ = function(gg) {
		return an.fY(gg, au.eT)
	}, this.hG = function(gq, gr) {
		return gr * au.eT + gq
	}, this.hH = function(gg) {
		var gq = this.gX(gg),
			gg = this.gZ(gg);
		return 0 < gq && gq < au.eT - 1 && 0 < gg && gg < au.eU - 1
	}, this.hI = function(gg) {
		return gg << 2
	}, this.hJ = function(gg) {
		return au.eT * this.gZ(gg) * 256 + (this.gX(gg) << 4)
	}, this.hK = function(gg) {
		return this.hJ(gg) + 8 + (au.eT << 7)
	}, this.hL = function(gv) {
		return au.eT * (this.h1(gv) >> 4) + (this.gy(gv) >> 4)
	}, this.hM = function(gv) {
		gv = this.hL(gv);
		return (this.gX(gv) >> 5) + ap.hN.hO * (this.gZ(gv) >> 5)
	}, this.gy = function(gv) {
		return gv % (au.eT << 4)
	}, this.h1 = function(gv) {
		return an.fY(gv, au.eT << 4)
	}, this.hP = function(gg, fo) {
		return gg + this.gR[fo]
	}, this.hQ = function(gp, fo) {
		return gp + this.gS[fo]
	}
}

function hR(player) {
	return aq.e5[1] = eu[player].length, aq.e5[0] === ex ? hS(player) : hT(player, aq.e5[0]), 0 !== aq.e5[1] || 0 !== eu[player].length
}

function hU(player) {
	hV && (hW[player] = 1), hX(aq.e5[1], player), a6.hY(player, aq.e1[0], aq.e5[0]), c.hZ(player, !1)
}

function ha(player, hb, et, hc) {
	var hd = el(3 * ep[player], 256);
	hc -= hc >= el(ep[player], 2) ? hd : 0, hX(et, player), a6.hY(player, hc, hb), ep[player] -= hc + hd, c.hZ(player, !1)
}

function hT(player, hb) {
	for (var fo, ds = fB[player].length - 1; 0 <= ds; ds--)
		if (a4.he(fB[player][ds]))
			for (fo = 3; 0 <= fo; fo--)
				if (a4.f3(fB[player][ds] + eP[fo]) && a4.f4(fB[player][ds] + eP[fo]) === hb) {
					eu[player].push(fB[player][ds]);
					break
				}
}

function hX(gH, player) {
	for (var ds = eu[player].length - 1; gH <= ds; ds--) a4.hf(eu[player][ds], player)
}

function hS(player) {
	for (var fo, ds = fB[player].length - 1; 0 <= ds; ds--)
		if (a4.he(fB[player][ds]))
			for (fo = 3; 0 <= fo; fo--)
				if (a4.f5(fB[player][ds] + eP[fo])) {
					eu[player].push(fB[player][ds]);
					break
				}
}

function hg(player, hh) {
	var ds, hi, fo, hj, et = fB[player].length,
		ge = 256 <= et ? 12 : 32 <= et ? 6 : 1,
		hk = et - 1 - aF.hl(ge);
	hm = 0;
	loop: for (ds = hk; 0 <= ds; ds -= ge)
		for (fo = 3; 0 <= fo; fo--)
			if ((hj = a4.f5(fB[player][ds] + eP[fo]) ? ex : a4.f4(fB[player][ds] + eP[fo])) === ex || a4.f3(fB[player][ds] + eP[fo]) && hj !== player && (hh || hn(player, hj))) {
				for (hi = hm - 1; 0 <= hi; hi--)
					if (ho[hi] === hj) continue loop;
				if (ho[hm] = hj, ++hm >= hp) return !0
			}
	return 0 < hm
}

function hq(player, hh) {
	var ds, fo, hj;
	for (hm = 0, ds = fB[player].length - 1; 0 <= ds; ds--)
		for (fo = 3; 0 <= fo; fo--)
			if ((hj = a4.f5(fB[player][ds] + eP[fo]) ? ex : a4.f4(fB[player][ds] + eP[fo])) === ex || a4.f3(fB[player][ds] + eP[fo]) && hj !== player && (hh || hn(player, hj))) return ho[hm++] = hj, !0;
	return !1
}

function hr() {
	for (var hs, ds = hm - 1; 0 <= ds; ds--)
		if (ho[ds] === ex) {
			for (hm--, hs = ds; hs < hm; hs++) ho[hs] = ho[hs + 1];
			return !0
		} return !1
}

function ht(player) {
	for (var hs, ds = hm - 1; 0 <= ds; ds--)
		if (a6.fj(player, ho[ds]))
			for (hm--, hs = ds; hs < hm; hs++) ho[hs] = ho[hs + 1];
	return 0 === hm
}

function hu() {
	for (var ds = hm - 1; 0 <= ds; ds--)
		if (ho[ds] >= h4) return !0;
	return !1
}

function hv() {
	for (var ds = hm - 1; 0 <= ds; ds--) ho[ds] < h4 && (ho[ds] = ho[--hm]);
	return 0 < hm
}

function hw(player) {
	for (var hs, hx = ho[0], hy = ep[hx] + a6.fX(hx, player), ds = hm - 1; 1 <= ds; ds--)(hs = ep[ho[ds]] + a6.fX(ho[ds], player)) < hy && (hx = ho[ds], hy = hs);
	return hx
}

function hz(player) {
	var i0, i1 = ho[0];
	if (1 !== hm)
		for (var i2 = el(i3[player] + i4[player], 2), i5 = el(i6[player] + i7[player], 2), i8 = i9(i2 - el(i3[i1] + i4[i1], 2)) + i9(i5 - el(i6[i1] + i7[i1], 2)), ds = hm - 1; 1 <= ds; ds--)(i0 = i9(i2 - el(i3[ho[ds]] + i4[ho[ds]], 2)) + i9(i5 - el(
			i6[ho[ds]] + i7[ho[ds]], 2))) < i8 && (i8 = i0, i1 = ho[ds]);
	return i1
}

function iA() {
	return ho[aF.hl(hm)]
}

function ci() {
	hp = 8, hm = 0, ho = new Uint16Array(hp)
}

function iB() {
	hW = hV ? new Uint8Array(ex) : null
}

function iC(player, hc) {
	var iD;
	hV && (hW[player] = 0), !a6.fi(player) || hc < 60 || (0 === fB[player].length ? ap.iE.iF(player) || (b.iG(player - h4, 200), iH(player, hc, b.hc[player - h4], a7.iI(player))) : 0 < fC[player].length && aF.random() < aF.value(fC[player].length >
		fB[player].length ? 7 : 3) && ap.iE.iF(player) || (iD = a7.iI(player), ep[player] > iD && hc < ep[player] - iD && (hc = ep[player] - iD), hV ? iJ(player, hc, b.hc[player - h4], iD) : iK(player, hc, b.hc[player - h4])))
}

function iJ(player, hc, iL, iD) {
	var hb;
	hg(player, !1) || hq(player, !1) ? (hW[player] = 1, ht(player) || (hr() ? (iM(player, hc), iN(player, ex, iL)) : (aF.iO(b.iP[iL]) ? iQ(player, hc, hb = hw(player)) : (hu() && aF.iO(b.iR[iL]) && hv(), iQ(player, hc, hb = hz(player))), iN(player,
		hb, iL)))) : 0 < fC[player].length && aF.random() < aF.value(60) && ap.iE.iF(player) || (b.iG(player - h4, 200), iH(player, hc, iL, iD))
}

function iS(player, hc) {
	hg(player, !1) || hq(player, !1) ? (hW[player] = 1, hr() ? iM(player, hc) : iQ(player, hc, iA())) : iH(player, hc, 0, 0)
}

function iN(player, hb, iL) {
	3 <= iL && 2142 < b7.iT() && (hb === ex || ep[hb] < el(ep[player], 20)) && b.iG(player - h4, 25)
}

function iH(player, hc, iL, iD) {
	var ds, hs, iU;
	if (0 !== b8.iV[player] && !(5 === iL && ep[player] < iD || 4 === iL && ep[player] < el(iD, 2)))
		for (ds = aF.hl(iW), hs = 0; hs < iW; hs++)
			if (iU = iX[(hs + ds) % iW], b8.iV[iU] === b8.iV[player] && 1 === hW[iU]) return void aa.iY.iZ(player, iU, hc)
}

function iK(player, hc, iL) {
	!hg(player, !0) && !hq(player, !0) || ht(player) || (hr() ? iM(player, hc) : aF.iO(b.iP[iL]) ? iQ(player, hc, hw(player)) : (hu() && aF.iO(b.iR[iL]) && hv(), iQ(player, hc, hz(player))))
}

function ia(player, hc) {
	(hg(player, !0) || hq(player, !0)) && (hr() ? iM(player, hc) : iQ(player, hc, iA()))
}

function iQ(player, hc, hb) {
	el(ep[player], 8) > ep[hb] && (hc = (ib = el(11 * ep[hb], 5)) < hc ? hc : ib);
	var ib = eu[player].length;
	hT(player, hb), ha(player, hb, ib, hc)
}

function iM(player, hc) {
	var hb = ex,
		et = eu[player].length;
	return hS(player), eu[player].length !== et && (ha(player, hb, et, hc), !0)
}
self.aiCommand746 = function(dy) {
	0 === dy ? bC() : 1 !== dy || dV < 14 || x.dz()
};
var dR, dX, dS, dV, h4, rD, ip, rC, ic = [60, 74, 112, 200, 256, 512];

function bI() {
	var id, ie, ig, ih, ii, ij;

	function ix(ds) {
		id[ds] = 1 + el(ii[ds] * aF.random(), 10 * aF.value(100))
	}
	this.ik = ["Very Easy", "Easy", "Normal", "Hard", "Harder", "Very Hard"], this.il = [97, 95, 93, 90, 87, 84], this.iR = [98, 95, 70, 40, 20, 0], this.im = [85, 70, 50, 30, 7, 3], this.iP = [0, 0, 5, 25, 50, 90], this.hc = null, this.ch =
		function() {
			var ds, io;
			if (id = new Uint8Array(ip), ie = new Uint16Array(ip), ig = new Uint16Array(ip), ih = new Uint8Array(ip), this.hc = new Uint8Array(ip), ii = new Uint16Array(ip), ij = new Uint16Array(ip), aX.iq) {
				if (aX.ir.is)
					for (ds = ip - 1; 0 <= ds; ds--) this.hc[ds] = aX.ir.is[ds + 1]
			} else if (9 === it) this.iu();
			else if (iv)
				if (hV)
					for (ds = ip - 1; 0 <= ds; ds--) this.hc[ds] = a1.iw[b8.iV[ds + h4] - 1].f2;
				else
					for (ds = ip - 1; 0 <= ds; ds--) this.hc[ds] = a1.iw[0].f2;
			else
				for (io = 8 === it ? 1 : 0, ds = ip - 1; 0 <= ds; ds--) this.hc[ds] = io;
			for (ds = ip - 1; 0 <= ds; ds--) this.hc[ds] <= 2 ? (ih[ds] = 5, ii[ds] = ij[ds] = 1040, 0 === this.hc[ds] ? (ie[ds] = 1e3, ig[ds] = 1e3) : 1 === this.hc[ds] ? (ie[ds] = 1e3, ig[ds] = 920, ii[ds] = ij[ds] = 1100) : (ie[ds] = 825, ig[ds] =
				750)) : this.hc[ds] <= 4 ? (ih[ds] = 1 + aF.hl(20), 3 === this.hc[ds] ? (ie[ds] = ig[ds] = 500, ii[ds] = ij[ds] = 1e3) : (ij[ds] = 250 + aF.hl(1501), ii[ds] = 500 + aF.hl(501), ie[ds] = 300 + aF.hl(201), ig[ds] = 100 + aF.hl(
				201))) : (ii[ds] = 1e3, ij[ds] = 1e3, ih[ds] = 35 + aF.hl(16), ie[ds] = 300 + aF.hl(201), ig[ds] = 50 + aF.hl(101)), ix(ds)
		}, this.iu = function() {
			for (var ds, gp = 0, hs = 0; hs < 6; hs++) {
				for (ds = gp + aA.iy[hs] - 1; gp <= ds; ds--) this.hc[ds] = hs;
				gp += aA.iy[hs]
			}
		}, this.iG = function(iz, value) {
			0 <= iz && (id[iz] = value)
		}, this.iF = function(iz) {
			0 == --id[iz] && ! function(iz) {
				! function(iz) {
					ii[iz] !== ij[iz] && (ii[iz] += ii[iz] < ij[iz] ? 3 : -3);
					ie[iz] !== ig[iz] && (ie[iz] += ie[iz] < ig[iz] ? ih[iz] : -ih[iz], ie[iz] = (Math.abs(ie[iz] - ig[iz]) <= ih[iz] ? ig : ie)[iz]);
					id[iz] = el(ii[iz], 10)
				}(iz);
				var player = iz + h4;
				iC(player, el(ie[iz] * ep[player], 1e3))
			}(iz)
		}
}

function j2() {
	k.iF(), a8.iF(), t.j3(), aP.j4.iF(), at.j5.j6()
}

function j7() {
	aQ.iF(), d.iF(), a7.iF(), aU.iF(), aT.iF(), c.iF(), e.iF(), ap.j4.iF(), j8(), s.iF(), aA.iF(), a8.iF(), a8.j9(), t.iF(), ar.iF(), r.iF(), m.iF(), k.iF(), aV.iF(), o.iF(), aN.iF(), b4.iF(), b9.iF(), as.iF(), aP.j4.iF(), ab.iF(), b7.iF()
}

function jA() {
	f.iF(), u.iF(), n.iF(), aJ.iF(), af.iF(), aO.jB()
}

function jC() {
	s.jD(!1), m.jD(), t.jD(!1), r.jD(), o.jD(), aN.jD(), a8.jD(2 === jE), b9.fx()
}

function jF() {
	a8.jD(!0) && (b7.d2 = !0), aP.j4.iF()
}

function bJ() {
	var jG, jH, jI, jJ, jK, jL;

	function jP(jR) {
		for (var ds = jH - 1; 0 <= ds; ds--) 0 === jJ[jI[ds]] && fJ[jI[ds]] >= jR && eV(jI[ds])
	}

	function jN(player) {
		10 === jJ[player] ? jJ[player] = jG : fJ[player] < 1e3 ? jJ[player] = 3 : fJ[player] < 1e4 ? jJ[player] = 2 : fJ[player] < 6e4 ? jJ[player] = 1 : jJ[player] = 0
	}
	this.ch = function() {
		jK = jL = 0, jG = 6, jH = 0, jI = new Uint16Array(ex), jJ = new Uint8Array(ex)
	}, this.iF = function() {
		var ds;
		for (jK = b4.er[13], jL = ep[eo], ds = jH - 1; 0 <= ds; ds--) 10 === jJ[jI[ds]] ? jN(jI[ds]) : 0 == jJ[jI[ds]]-- && (jN(jI[ds]), eV(jI[ds]));
		16e4 <= fJ[jO[0]] && (jP(16e4), 3e5 <= fJ[jO[0]]) && jP(3e5), fJ[eo] > b4.er[7] && (b4.er[7] = fJ[eo]), b4.er[14] += jL - ep[eo] + jK - b4.er[13]
	}, this.en = function(player) {
		for (var hi, ds = jH - 1; 0 <= ds; ds--)
			if (player === jI[ds]) {
				for (jH--, hi = ds; hi < jH; hi++) jI[hi] = jI[hi + 1];
				return
			}
	}, this.hZ = function(player, jS) {
		for (var ds = jH - 1; 0 <= ds; ds--)
			if (player === jI[ds]) return;
		jI[jH++] = player, jJ[player] = jS ? 2 : 10
	}
}

function bK() {
	var gH, iE;
	this.ch = function() {
		gH = ip, iE = new Uint16Array(ip);
		for (var ds = ip - 1; 0 <= ds; ds--) iE[ds] = ds
	}, this.iF = function() {
		for (var ds = gH - 1; 0 <= ds; ds--) 0 === h5[iE[ds] + h4] ? function(hi) {
			gH--;
			for (var ds = hi; ds < gH; ds++) iE[ds] = iE[ds + 1]
		}(ds) : b.iF(iE[ds])
	}
}

function bL() {
	var jV, jW, jH, jI, jJ, jX, jY, jZ;

	function jb(ds) {
		var hi;
		for (jH--, hi = ds; hi < jH; hi++) jI[hi] = jI[hi + 1], jJ[hi] = jJ[hi + 1], jX[hi] = jX[hi + 1], jY[hi] = jY[hi + 1], jZ[hi] = jZ[hi + 1]
	}
	this.ch = function() {
		jV = 1, jH = 0, jW = 2 * ex, jI = new Uint16Array(jW), jJ = new Uint8Array(jW), jX = new Uint16Array(jW), jY = new Uint32Array(jW), jZ = new Uint32Array(jW)
	}, this.ja = function(fu, position) {
		jY[fu] = position
	}, this.iF = function() {
		for (var ds = jH - 1; 0 <= ds; ds--) 0 == jJ[ds]-- && (jJ[ds] = 2, aG.iF(ds, jX[ds], jI[ds], jY[ds], jZ[ds]))
	}, this.en = function(player, id) {
		for (var ds = jH - 1; 0 <= ds; ds--)
			if (player === jI[ds] && id === jX[ds]) return void jb(ds)
	}, this.jc = function(player) {
		for (var ds = jH - 1; 0 <= ds; ds--) player === jI[ds] && (aG.jd(player, jY[ds]), jb(ds))
	}, this.hZ = function(player, hk, je) {
		if (jW <= jH) return 0;
		jI[jH] = player, jJ[jH] = 0, jX[jH] = jV, jY[jH] = hk, jZ[jH] = je;
		player = jV;
		return jH++, jV = 2 * jW < ++jV ? 1 : jV, player
	}, this.gA = function() {
		if (!(hB < 40 || 0 === jH)) {
			var hi, jh, ji, ds, fontSize, jl, hc, jm = hA / hB,
				jn = hC / hB,
				jo = (jp + hA) / hB,
				jq = (g7 + hC) / hB;
			for (gB.textAlign = gD, gB.textBaseline = gC, hi = jH - 1; 0 <= hi; hi--) jh = a4.jr(jY[hi]), ji = a4.g9(jY[hi]), ds = jI[hi], jm - 1 < jh && jh < jo && jn - 1 < ji && ji < jq && 0 !== h5[ds] && ((fontSize = Math.floor(.94 * hB * a8
				.js(ds))) < 6 || (jh = Math.floor(jp * (jh + .5 - jm) / (jo - jm)), ji = Math.floor(g7 * (ji + .48 - jn) / (jq - jn)), gB.font = fv + fontSize + fw, gB.fillStyle = ae.jt, hc = a6.ef(ds, a6.ju(ds, jX[hi])), gB.fillText(aR
				.jv.jw ? ad.jx.jy(hc) : jz[ds], jh, ji), (jl = Math.floor(.5 * fontSize)) < 6) || (gB.font = fv + jl + fw, gB.fillText(aR.jv.jw ? jz[ds] : ad.jx.jy(hc), jh, ji + Math.floor(.82 * fontSize))))
		}
	}
}

function bM() {
	var k0, k1, k2, k3, k4, k5, k6, k7, k8, k9, kA, kB, kC, kD = !1,
		kE = !1;

	function kF(kG) {
		kB = b7.dT, k2 = k3 = k1 = 0, k4 = (kC = 33) / kG, k0 = 1 / (kG / kC / 4), k5 = (jp / 2 + hA) / hB, k6 = (g7 / 2 + hC) / hB, k7 = hB
	}

	function kU(kW) {
		Math.abs(Math.log(kA / k7)) < .125 && (kA = kW * k7)
	}

	function kT(jm, jn, jo, jq) {
		k8 = (jm + jo + 1) / 2, k9 = (jn + jq + 1) / 2;
		jo = jp / (jo - jm + 1), jm = g7 / (jq - jn + 1);
		kA = .9 * (jo < jm ? jo : jm)
	}
	this.kH = function() {
		return kD
	}, this.kI = function() {
		kF(1), this.kJ(0, 0, au.eT - 1, au.eU - 1), kK || fd || this.kL(eo, 3e3, !0, .3)
	}, this.kL = function(player, kG, kM, zoom) {
		kN || kD && !kM && kE || 0 === fJ[player] || (p.kO = !1, kE = kM, kF(kG), function(player) {
			k8 = (i4[player] + i3[player] + 1) / 2, k9 = (i7[player] + i6[player] + 1) / 2
		}(player), function(zoom, player) {
			var gw = i3[player] - i4[player] + 1,
				player = i6[player] - i7[player] + 1,
				hi = jp / gw,
				hs = g7 / player,
				hi = (kA = hi < hs ? hi : hs, 0 !== zoom ? zoom : gw < 20 && player < 20 ? .5 : .9);
			kA *= hi, kU(7 / 8)
		}(zoom, player), kD = !0, aD.kR())
	}, this.kS = function(kG) {
		fd || kN || (p.kO = !1, kE = !1, kF(kG), kT(0, 0, au.eT - 1, au.eU - 1), kU(7 / 8), kD = !0, aD.kR())
	}, this.kJ = function(jm, jn, jo, jq) {
		kT(jm, jn, jo, jq), hB = kA, p.kX(k8, jp / 2), p.kY(k9, g7 / 2), b1.kZ()
	}, this.ka = function() {
		return !(kD && kE || (kD = !1))
	}, this.iF = function() {
		var kd, ke, f2, kh;
		kD && (k1 < .5 ? k3 < k4 && (k3 += k4 * k0, k2 = k1) : 1 - k2 < k1 && (k3 = (k3 -= k4 * k0) < k4 * k0 ? k4 * k0 : k3), kB = kB >= b7.dT ? b7.dT - 1 : kB, f2 = b7.dT - kB, k1 = 1e3 < f2 || 1 < (k1 += k3 * f2 / kC) ? 1 : k1, kB = b7.dT,
			f2 = hB, kd = hA, ke = hC, f2 = (hB = k7 * Math.pow(kA / k7, k1)) / f2, kh = 1 - (k7 * Math.pow(kA / k7, 1 - k1) - k7) / (kA - k7), p.kX(k5 + kh * (k8 - k5), jp / 2), p.kY(k6 + kh * (k9 - k6), g7 / 2), a8.zoom(f2, (kd * f2 - hA) /
				(1 - f2), (ke * f2 - hC) / (1 - f2)), b1.kZ(), 1 <= k1 && (kD = !1, b2.ki = !0), b7.d2 = !0)
	}
}

function cL() {
	var iU = ad.kj;
	this.jt = iU.kk(0, 0, 0), this.kl = iU.km(0, 0, 0, .7), this.kn = iU.km(0, 0, 0, .5), this.ko = iU.km(0, 0, 0, .85), this.kp = iU.km(0, 0, 0, .75), this.kq = iU.km(0, 0, 0, .6), this.kr = iU.km(0, 0, 0, .35), this.gE = iU.kk(255, 255, 255), this
		.ks = iU.km(255, 255, 255, .3), this.kt = iU.km(255, 255, 255, .6), this.ku = iU.km(255, 255, 255, .4), this.kv = iU.km(255, 255, 255, .25), this.kw = iU.km(255, 255, 255, .85), this.kx = iU.km(255, 255, 255, .75), this.ky = iU.km(255, 255,
			255, .15), this.kz = iU.kk(128, 128, 128), this.l0 = iU.km(64, 64, 64, .75), this.l1 = iU.kk(30, 255, 30), this.l2 = iU.kk(0, 200, 0), this.l3 = iU.kk(128, 255, 128), this.l4 = iU.km(10, 65, 10, .75), this.l5 = iU.km(0, 255, 0, .6), this
		.l6 = iU.km(0, 255, 0, .5), this.l7 = iU.km(0, 200, 0, .5), this.l8 = iU.km(0, 100, 0, .75), this.l9 = iU.km(0, 60, 0, .8), this.lA = iU.km(0, 255, 0, .3), this.lB = iU.km(0, 180, 0, .6), this.lC = iU.kk(255, 120, 120), this.lD = iU.kk(255,
			160, 160), this.lE = iU.kk(255, 70, 70), this.lF = iU.kk(230, 0, 0), this.lG = iU.km(220, 0, 0, .6), this.lH = iU.km(255, 100, 100, .8), this.lI = iU.km(100, 0, 0, .85), this.lJ = iU.km(60, 0, 0, .85), this.lK = iU.km(200, 0, 0, .6), this
		.lL = iU.km(0, 60, 60, .85), this.lM = iU.km(10, 60, 60, .9), this.lN = iU.km(0, 96, 96, .75), this.lO = iU.kk(160, 160, 255), this.lP = iU.km(0, 40, 90, .75), this.lQ = iU.km(0, 0, 255, .6), this.lR = iU.kk(255, 120, 100), this.lS = iU.km(
			255, 255, 0, .5), this.lT = iU.km(255, 255, 150, .2), this.lU = iU.kk(255, 255, 0), this.lV = iU.kk(255, 255, 200), this.lW = iU.km(200, 200, 0, .6), this.lX = iU.km(255, 140, 0, .75)
}

function cH() {
	this.fl = new lY, this.ff = new lZ, this.la = new lb, this.lc = new ld, this.iY = new le
}

function lY() {
	this.lf = function(gg) {
		iv ? aa.la.lf(eo, gg) : aP.lg.lh(gg)
	}, this.fm = function(h9, hb) {
		k.li(), iv ? aa.la.fm(eo, h9, hb) : aP.lg.lj(h9, hb)
	}, this.lk = function(h9, ll) {
		k.li(), iv ? aa.la.lm(eo, h9, ll) : aP.lg.ln(h9, ll)
	}, this.lo = function(h9, gg) {
		iv ? aa.la.lo(eo, h9, gg) : ap.lp.lq(eo, gg) && aP.lg.lr(h9, gg)
	}, this.ls = function(lt, gg) {
		iv ? aa.la.ls(eo, lt, gg) : ap.lp.lu(eo, lt, gg) && aP.lg.lv(lt, gg)
	}, this.lw = function(hb) {
		iv ? aa.la.lw(eo, hb) : aP.lg.lx(hb)
	}, this.ly = function(lz) {
		iv ? aa.la.m0(eo, lz) : aP.lg.m1(lz)
	}, this.m2 = function(m3) {
		iv ? aa.la.m2(eo, m3) : aP.lg.m4(m3)
	}, this.m5 = function() {
		iv ? aa.la.m5(eo) : aP.lg.m6()
	}
}

function le() {
	this.iZ = function(player, ll, hc) {
		ad.ff.m7(player, hc, ll) && (a7.lk(player, ll), ll < h4) && aF.random() < aF.value(10) && (hW[ll] = 0)
	}, this.m8 = function(player, ll, hc) {
		ad.ff.m9(hc, ll) && (ad.ff.mA(ll, aq.e1[0]), b4.mB(player, ll), a8.mC(ll, aq.e1[0]))
	}
}

function lZ() {
	this.mD = function(lz, player) {
		k.ly(eo, player, lz), aP.lg.mE(lz, player)
	}, this.mF = function(player) {
		k.mG(player, 0), aP.lg.mH(player)
	}, this.mI = function(mJ, player) {
		k.mK(mJ, player), aP.lg.mL(mJ, player)
	}, this.mM = function(mN) {
		iv || fd || aP.lg.mO(mP(), mN)
	}, this.mQ = function() {
		iv || fd || aP.lg.mR(mP(), jO[0], jO[1], jO[2])
	}, this.mS = function() {
		iv || fd || aP.lg.mT(mP())
	}
}

function ld() {
	this.iF = function(mU) {
		var id, e8, ka;
		for (ai.ch(mU), ai.fu += 2, ka = 8 * ai.gH; ai.fu + 8 <= ka;) id = ai.mV(4), e8 = ai.mV(9), 0 === id ? this.mW(id, e8, ai.mV(22)) : 1 === id ? this.mW(id, e8, ai.mV(10), ai.mV(10)) : 2 === id ? this.mW(id, e8, ai.mV(10), ai.mV(9)) : 3 ===
			id || 4 === id ? this.mW(id, e8, ai.mV(10), ai.mV(22)) : 5 === id ? this.mW(id, e8, ai.mV(10)) : 6 === id ? this.mW(id, e8, ai.mV(7)) : 7 === id ? this.mW(id, e8, ai.mV(1)) : this.mW(id, e8);
		this.mX()
	}, this.mY = [], this.mX = function() {
		for (var ma = 0, mb = 0, mc = 0, md = 0, me = 0, mf = 0, ds = 0; ds < 512; ds++) ma += h5[ds], mb += fJ[ds], mc += ep[ds], md += ap.j4.mg[ds];
		me += ap.j4.mh, mf += iW, this.mY.push(((255 & ma + mb + mc + md + me + mf) << 12) + ((3 & ma) << 10) + ((3 & mb) << 8) + ((3 & mc) << 6) + ((3 & md) << 4) + ((3 & me) << 2) + (3 & mf))
	}, this.mW = function(id, e8, eA, eC) {
		0 === id ? aa.la.lf(e8, eA) : 1 === id ? aa.la.fm(e8, eA, eC) : 2 === id ? aa.la.lm(e8, eA, eC) : 3 === id ? aa.la.lo(e8, eA, eC) : 4 === id ? aa.la.ls(e8, eA, eC) : 5 === id ? aa.la.lw(e8, eA) : 6 === id ? aa.la.m0(e8, eA) : 7 === id ?
			aa.la.m2(e8, eA) : 8 === id ? aa.la.m5(e8) : aa.la.mi(e8)
	}
}

function lb() {
	this.lf = function(player, gg) {
		ad.ff.fg(0) && ad.ff.fh(player) && ao.hH(gg) && (ab.mj.mk(0, player, gg), ml.hY(player, gg))
	}, this.fm = function(player, h9, hb) {
		ad.ff.fg(1) && ad.ff.fh(player) && ad.ff.mm(player, hb) && ad.ff.mn(player, h9, 12, em) && a6.fi(player) && ad.ff.mo(player, hb) && hR(player) && (ab.mj.mk(1, player, h9, aq.e5[0]), ad.ff.mp(player), b4.mq(player, h9), hU(player))
	}, this.lm = function(player, h9, ll) {
		ad.ff.fg(1) && ad.ff.fh(player) && hV && ad.ff.mm(player, ll) && ad.ff.mr(player, ll) && ad.ff.m7(player, ad.ff.h8(player, h9), ll) && (ab.mj.mk(2, player, h9, ll), a7.lk(player, ll))
	}, this.lo = function(player, h9, gg) {
		ad.ff.fg(1) && ad.ff.fh(player) && ao.hH(gg) && ap.j4.mh !== ap.j4.ms && ap.j4.mg[player] !== ap.j4.mt && 0 !== fC[player].length && ad.ff.mn(player, h9, 32, 16) && ap.mu.mv(player, gg) && (ab.mj.mk(3, player, h9, gg), ad.ff.mp(player),
			ap.j4.mw(player))
	}, this.ls = function(player, lt, gg) {
		ad.ff.fg(1) && ad.ff.fh(player) && ao.hH(gg) && ap.lp.mx(player, lt) && ap.mu.my(gg) && (ab.mj.mk(4, player, lt, gg), ad.ff.mz(player, 8), ap.j4.ls())
	}, this.lw = function(player, hb) {
		ad.ff.fg(1) && ad.ff.fh(player) && (hb = Math.min(hb, ex), a6.fj(player, hb)) && (ab.mj.mk(5, player, hb), a6.n0(player, hb))
	}, this.m0 = function(player, lz) {
		ad.ff.fg(2) && ad.ff.fh(player) && (lz = Math.min(lz, b3.dt - 1), ab.mj.mk(6, player, lz), a8.n1(player, 0, lz))
	}, this.m2 = function(player, m3) {
		ad.ff.fg(1) && ad.ff.fh(player) && (ab.mj.mk(7, player, m3), aN.n2(player, m3))
	}, this.m5 = function(player) {
		(ad.ff.fg(0) || ad.ff.fg(1)) && ad.ff.fh(player) && as.m5(player) && ab.mj.mk(8, player)
	}, this.mi = function(player) {
		as.mi(player), ab.mj.mk(9, player)
	}
}

function n3(title, n4, n5, n6) {
	var n7;
	this.nD = function() {
		var n8;
		return n7 || (n8 = new n9("Back", () => aw.show(n6), ae.lI, ae.lK, ae.lG), n7 = new nA(title, n8, [new nB(n4), new nC(n5)])), n7
	}, this.nE = function() {
		return title
	}
}

function n9(nF, nG, color, nH, nI) {
	var button = document.createElement("button"),
		scale = 1;

	function nK() {
		button.style.backgroundColor = color || ae.kr
	}

	function nL() {
		button.style.backgroundColor = nH || ae.ky
	}

	function nM() {
		button.style.backgroundColor = nI || ae.kv
	}
	this.ch = function(nJ) {
		button.style.position = "relative", button.innerText = nF, button.style.color = ae.gE, button.style.fontSize = "inherit", button.style.wordBreak = "break-word", nK(), button.onmouseover = nL, button.onmouseout = nK, button.onmousedown =
			nM, button.onmouseup = nL, button.onclick = () => {
				nK(), nG()
			}, this.resize(), nJ.appendChild(button)
	}, this.nN = function(et) {
		scale = et, this.resize()
	}, this.resize = function() {
		var height = ad.kj.nO(.5) * fs / nP * .09;
		button.style.height = (scale * height).toFixed(1) + "px", button.style.border = (.02 * height).toFixed(1) + "px solid " + ae.gE
	}, this.nQ = function() {
		button.style.width = "100%"
	}, this.nR = function() {
		button.style.flexGrow = "1", button.style.flexBasis = "0"
	}, this.nS = function(nT) {
		button.prepend(nT)
	}
}

function nC(nU) {
	var nV = document.createElement("div");
	this.ch = function(nJ) {
		var ds;
		for (nV.width = "100%", nV.height = "auto", nV.style.display = "flex", ds = 0; ds < nU.length; ds++) nU[ds].nR(), nU[ds].ch(nV);
		this.resize(), nJ.appendChild(nV)
	}, this.resize = function() {
		var ds, margin = ad.kj.nO(.5) * fs / nP * .3 * .04;
		for (nV.style.margin = "0 " + margin.toFixed(1) + "px", nV.style.gap = margin.toFixed(1) + "px", ds = 0; ds < nU.length; ds++) nU[ds].resize()
	}
}

function nW(nX, nY) {
	this.jh = 0, this.ji = 0, this.g0 = 0, this.i0 = 0, this.resize = function() {
		this.i0 = Math.min(ad.kj.nO(.5) * nX[1] * fs, g7 - 2 * nZ), this.g0 = Math.min(this.i0 * (nX[0] / nX[1]), jp - 2 * nZ), this.i0 = nX[1] * this.g0 / nX[0], this.jh = nZ + nY[0] * (jp - this.g0 - 2 * nZ), this.ji = nZ + nY[1] * (g7 - this
			.i0 - 2 * nZ)
	}, this.na = function() {
		return this.jh + .5 * this.g0
	}
}

function nb(nF, nc, nG, nd) {
	var nf, ne = document.createElement("input");
	this.ch = function(nJ) {
		var ng = document.createElement("label");
		ng.innerText = nF, ng.style.color = ae.gE, ng.style.marginLeft = "0.5em", ne.type = "checkbox", ne.style.marginRight = "1em", ne.style.nh = "middle", ne.style.position = "relative", ne.style.bottom = "0.2em", ne.onchange = nG, ne.title =
			nc, nf = new ni(nc), this.resize(), ng.prepend(ne), nf.ch(ng), nJ.appendChild(ng)
	}, this.setState = function(dO) {
		ne.nj = dO
	}, this.resize = function() {
		var gH = ad.kj.nO(.5) * fs / nP * .04;
		ne.style.width = gH.toFixed(1) + "px", ne.style.height = gH.toFixed(1) + "px", nf.resize(), nd && this.setState(nd())
	}
}

function nk() {
	var nl = document.createElement("div"),
		nU = [];
	this.ch = function(nJ) {
		nl.style.position = "absolute", this.resize(), nJ.appendChild(nl)
	}, this.nm = function(g0, i0) {
		var nn = document.createElement("div");
		nn.style.width = g0.toFixed(1) + "px", nn.style.height = i0.toFixed(1) + "px", nl.appendChild(nn)
	}, this.no = function(color) {
		nl.style.backgroundColor = color
	}, this.resize = function() {
		for (var ds = 0; ds < nU.length; ds++) nU[ds].resize();
		nl.style.height = "max-content", nl.style.width = "max-content"
	}, this.ja = function(jh, ji, g0) {
		nl.style.left = jh.toFixed(1) + "px", nl.style.top = ji.toFixed(1) + "px", nl.style.width = g0.toFixed(1) + "px", nl.style.np("--brick-width", g0.toFixed(1) + "px")
	}, this.nq = function(nn) {
		nn.ch(nl), nU.push(nn)
	}, this.nr = function() {
		return nl.offsetWidth
	}, this.ns = function() {
		return nl.offsetHeight
	}
}

function nt() {
	var nu = document.createElement("div"),
		nU = [];
	this.ch = function(nJ) {
		nu.width = "100%", nu.height = "auto", nu.style.display = "grid", nu.style.overflow = "auto", nu.style.maxWidth = "100%", this.resize(), nJ.appendChild(nu)
	}, this.resize = function() {
		var ds, nv = ad.kj.nO(.5) * fs / nP * .3;
		for (nu.style.gridTemplateColumns = "repeat(auto-fit, minmax(clamp(64px, " + nv.toFixed(1) + "px, 100%), auto))", nu.style.gap = (.04 * nv).toFixed(1) + "px", ds = 0; ds < nU.length; ds++) nU[ds].resize()
	}, this.nq = function(nn) {
		nn.ch(nu), nU.push(nn)
	}
}

function nw(title, n4) {
	this.ch = function(nJ) {
		var nx = document.createElement("h3");
		nx.style.color = ae.gE, nx.style.marginTop = "0", nx.innerText = title, nJ.appendChild(nx), n4 && ((nx = document.createElement("p")).style.color = ae.gE, nx.innerText = n4, nJ.appendChild(nx)), this.resize()
	}, this.resize = function() {}
}

function ny() {
	var nl = document.createElement("div"),
		nz = [];
	this.ch = function(nJ) {
		nl.style.position = "relative", nJ.appendChild(nl)
	}, this.resize = function() {
		for (var o0, o3, o4, gap, o1 = [], o2 = 0, ds = 0; ds < nz.length; ds++) nz[ds].resize(), o2 = Math.max(o2, nz[ds].nr());
		if (0 !== o2) {
			for (gap = .009 * (o4 = nl.offsetWidth), o0 = df < dg ? 1 : Math.max(1, Math.floor(o4 / (o2 + gap))), ds = 0; ds < o0; ds++) o1.push(0);
			for (ds = 0; ds < nz.length; ds++) o3 = o1.indexOf(Math.min(...o1)), nz[ds].ja(o3 * o4 / o0, o1[o3], o4 / o0 - gap), o1[o3] += nz[ds].ns() + gap;
			nl.style.height = Math.max(...o1).toFixed(1) + "px"
		}
	}, this.o5 = function(nn) {
		nn.ch(nl), nz.push(nn)
	}
}

function nA(title, o6, o7) {
	var o8, o9, oA, oB, ds, oC;
	for ((o8 = document.createElement("div")).style.position = "absolute", o8.style.top = "0", o8.style.left = "0", o8.style.width = "100vw", o8.style.height = "100vh", o8.style.maxHeight = "100vh", o8.style.backgroundColor = ae.kn, o8.style
		.backdropFilter = "blur(5px)", (o9 = document.createElement("div")).style.width = "100%", o9.style.display = "flex", o9.style.backgroundColor = ae.kr, (oC = document.createElement("h1")).innerText = title, oC.style.textAlign = "center", oC
		.style.width = "70%", oC.style.margin = "auto", oC.style.color = ae.gE, (oB = document.createElement("div")).style.right = "0", oB.style.width = "30%", (oA = document.createElement("div")).style.overflowY = "auto", oA.style.position =
		"absolute", oA.style.left = "0", oA.style.right = "0", oA.style.bottom = "0", o9.appendChild(oC), o9.appendChild(oB), o8.appendChild(o9), o8.appendChild(oA), o6.ch(oB), o6.nQ(), ds = 0; ds < o7.length; ds++) o7[ds].ch(oA);
	this.resize = function() {
		var ds, oD = ad.kj.nO(.5) * fs / nP * .09,
			oE = .12 * oD,
			oF = .02 * oD;
		for (o9.style.height = (oD + 2 * oE).toFixed(1) + "px", o9.style.borderBottom = oF.toFixed(1) + "px solid " + ae.gE, oB.style.padding = oE.toFixed(1) + "px", oA.style.top = (oD + 2 * oE + oF).toFixed(1) + "px", oA.style.padding = oE
			.toFixed(1) + "px", oA.style.paddingBottom = (2 * oE).toFixed(1) + "px", o8.style.font = ad.kj.oG(.23 * oD, 0), ds = 0; ds < o7.length; ds++) o7[ds].resize();
		o6.resize()
	}, this.show = function() {
		document.body.appendChild(o8)
	}, this.oH = function() {
		document.body.removeChild(o8)
	}
}

function nB(nF) {
	this.ch = function(nJ) {
		var nn = document.createElement("p");
		nn.style.color = ae.gE, nn.innerText = nF, nJ.appendChild(nn)
	}, this.resize = function() {}
}

function oI(nF, nc, nG, oJ, oK) {
	var nl, select, oL, nf, oM = oK || [],
		oN = !1;

	function oH() {
		oN && (oL.innerHTML = "", nl.removeChild(oL), oN = !1)
	}
	this.ch = function(nJ) {
		var ng = document.createElement("label");
		ng.innerText = nF, ng.style.color = ae.gE, ng.style.marginLeft = "0.5em", ng.style.display = "block", ng.style.margin = "0.5em 0", ng.style.width = "max-content", (nl = document.createElement("div")).style.position = "relative", nl.style
			.display = "inline-block", nl.style.marginLeft = "1em", (select = document.createElement("button")).innerText = oM[oJ], select.style.position = "relative", select.style.border = "none", select.style.padding = "0 0.5em", select.style
			.color = ae.gE, select.style.font = "inherit", select.style.backgroundColor = ae.kr, select.onclick = dC => {
				(oN ? oH : function() {
					var ds, oR;
					if (!oN) {
						for (ds = 0; ds < oM.length; ds++)(oR = document.createElement("div")).innerText = oM[ds], oR.style.textAlign = "center", oL.appendChild(oR);
						nl.appendChild(oL), oN = !0
					}
				})(), select.oO(), dC.preventDefault()
			}, select.oP = oH, (oL = document.createElement("div")).style.position = "absolute", oL.style.left = "50%", oL.style.transform = "translateX(-50%)", oL.style.zIndex = "100", oL.style.backgroundColor = ae.ko, oL.style.color = ae.gE, oL
			.style.width = "max-content", oL.style.padding = "0.5em", oL.style.fontSize = "inherit", oL.style.userSelect = "none", oL.onmousedown = function(dC) {
				for (var ds = 0; ds < oL.oQ.length; ds++)
					if (dC.target === oL.oQ[ds]) {
						select.innerText = oM[ds], nG(ds);
						break
					} dC.stopPropagation()
			}, nf = new ni(nc), this.resize(), nl.appendChild(select), ng.appendChild(nl), nf.ch(ng), nJ.appendChild(ng)
	}, this.resize = function() {
		var gH = ad.kj.nO(.5) * fs / nP * .04;
		select.style.height = gH.toFixed(1) + "px", select.style.outline = (.06 * gH).toFixed(1) + "px solid " + ae.gE, oL.style.top = (1.06 * gH).toFixed(1) + "px", oL.style.outline = (.06 * gH).toFixed(1) + "px solid " + ae.gE, nf.resize()
	}, this.oS = function(oT) {
		oM.push(oT)
	}
}

function oU() {
	var oV, oW = !0;

	function oe() {
		oV.select(), document.execCommand("copy")
	}
	this.oX = !1, this.ch = function() {
		(oV = document.createElement("textarea")).setAttribute("name", "replayData"), oV.setAttribute("id", "replayDataField"), oV.setAttribute("autocomplete", "off"), oV.setAttribute("placeholder", "Insert the replay link here!"), oV.style
			.position = "absolute", oV.style.resize = "none", oV.style.borderRadius = "0", oV.style.color = ae.gE, oV.style.backgroundColor = ae.kl, oV.addEventListener("focus", function() {
				ac.oX = !0
			}), oV.addEventListener("blur", function() {
				ac.oX = !1
			})
	}, this.show = function() {
		document.body.appendChild(oV)
	}, this.oH = function() {
		document.body.removeChild(oV)
	}, this.resize = function(jh, ji, g0, i0) {
		ad.kj.oY(oV.style, jh, ji, g0, i0), oV.style.font = ad.kj.oG(Math.max(5, .1 * i0 / nP), 0)
	}, this.oZ = function(nF) {
		oV.value = nF
	}, this.oa = function() {
		return oV.value
	}, this.ob = function() {
		oV.select()
	}, this.oc = function() {
		oV.value = ""
	}, this.od = function() {
		oW && navigator.clipboard ? (oV.select(), navigator.clipboard.writeText(oV.value).catch(function() {
			oW = !1, oe()
		})) : oe()
	}
}

function ni(nF) {
	var nl = document.createElement("div"),
		og = document.createElement("span"),
		oh = !1,
		oN = !1;

	function show() {
		oN || (og.parentNode.appendChild(nl), oN = !0)
	}

	function oH() {
		oN && !oh && (og.parentNode.removeChild(nl), oN = !1)
	}
	this.ch = function(nJ) {
		nl.style.position = "absolute", nl.style.zIndex = "100", nl.style.backgroundColor = ae.ko, nl.style.color = ae.gE, nl.width = "auto", nl.style.padding = "0.5em", nl.style.fontSize = "inherit", nl.style.wordBreak = "break-word", nl
			.innerText = nF, og.style.position = "relative", og.style.display = "inline-block", og.style.marginLeft = "1em", og.style.textAlign = "center", og.innerText = "?", og.tabIndex = 0, og.onmouseover = show, og.onmouseout = oH, og
			.onclick = dC => {
				((oh = !oh) ? oH : show)(), og.oO(), dC.preventDefault()
			}, og.oP = () => {
				oh = !1, oH()
			}, this.resize(), nJ.appendChild(og)
	}, this.resize = function() {
		var gH = ad.kj.nO(.5) * fs / nP * .04;
		og.style.width = gH.toFixed(1) + "px", og.style.height = gH.toFixed(1) + "px", og.style.lineHeight = gH.toFixed(1) + "px", og.style.outline = (.06 * gH).toFixed(1) + "px solid " + ae.gE, nl.style.border = (.06 * gH).toFixed(1) +
			"px solid " + ae.gE
	}
}

function oi(nF) {
	this.ch = function(nJ) {
		var nn, oj = document.createElement("div");
		oj.style.height = "max-content", oj.style.width = "0", (nn = document.createElement("p")).style.color = ae.gE, nn.style.margin = "0", nn.style.width = "var(--brick-width)", nn.innerText = nF, oj.appendChild(nn), nJ.appendChild(oj), this
			.resize()
	}, this.resize = function() {}
}

function cQ() {
	var ok = new Uint8Array(78);
	this.ch = function() {
		var ds;
		for (ok[50] = 37, ds = 0; ds < 10; ds++) ok[ds + 3] = ds + 1;
		for (ds = 0; ds < 26; ds++) ok[ds + 20] = ds + 11, ok[ds + 52] = ds + 38
	}, this.ol = function(db) {
		return db.trim().replace(new RegExp("[^a-zA-Z0-9_\\-]", "g"), "_")
	}, this.om = function(db, on) {
		for (var oo = ok, et = db.length, e7 = new Uint8Array(on || et), ds = 0; ds < et; ds++) e7[ds] = oo[db.charCodeAt(ds) - 45];
		return e7
	}, this.op = function(oq) {
		var ds, et = oq.length,
			g0 = ag;
		for (g0.bg(6 * et), ds = 0; ds < et; ds++) g0.or(6, oq[ds]);
		ai.ch(g0.mU)
	}
}

function os() {
	var g0, i0, ot;

	function pK(pL, f2, pI, oz, pD) {
		f2 = pJ(pL, f2 + 1 + 2 * oz & 3);
		! function(pL, pM) {
			return 1 < Math.abs(pL % g0 - pM % g0) || 1 < Math.abs(pP(pL) - pP(pM))
		}(pL, f2) && 0 === pD[f2 << 2] && (pD[f2 << 2] = pI)
	}

	function pP(f0) {
		return Math.floor((f0 + .5) / g0) % i0
	}

	function pJ(f0, f2) {
		return f0 + ot[f2]
	}
	this.ou = function(db) {
		var ds, ov, et, ox, p0 = ai;
		for (aj.op(aj.om(db)), au.eT = g0 = p0.mV(12), au.eU = i0 = p0.mV(12), ot = [-g0, -1, g0, 1], au.p9 = document.createElement("canvas"), au.p9.width = au.eT, au.p9.height = au.eU, au.p5 = au.p9.getContext("2d", {
				alpha: !1
			}), au.p6 = au.p5.getImageData(0, 0, au.eT, au.eU), au.pA = au.p6.data, ad.pB.pC(au.pA), et = p0.mV(12), ov = p0.mV(5), ox = p2(g0 * i0 - 1), ds = 0; ds < et; ds++) ! function(ow, f0, oy, oz) {
			var ds, f2, p0 = ai,
				pD = au.pA,
				pE = f0,
				pF = f0,
				pG = 0,
				pH = 1 + oy,
				pI = 2 - oy;
			for (pD[f0 << 2] = pH, ds = 0; ds < ow; ds++) f2 = p0.mV(2), f0 = pJ(f0, f2), pD[f0 << 2] === pH ? pG % 2 == 1 && pK(pF, pG + 2 * oz + 3, pI, oz, pD) : pD[f0 << 2] = pH, pK(f0, f2, pI, oz, pD), pK(pF, f2, pI, oz, pD), pF = f0,
				pG = f2;
			pJ(f0, 0) === pE ? (pK(f0, 0, pI, oz, pD), pK(pE, 0, pI, oz, pD)) : pJ(f0, 1) === pE && (pK(f0, 0, pI, oz, pD), pK(pE, 2, pI, oz, pD));
			0 === ow && (pK(pE, 0, pI, oz, pD), pK(pE, 2, pI, oz, pD))
		}(p0.mV(ov), p0.mV(ox), 1 === p0.mV(1), 1 === p0.mV(1));
		var jh, ji, pQ, pR, pS, pT, pD = au.pA,
			pU = !0,
			pV = au.ir.pW[au.pX].pV,
			pY = au.ir.pW[au.pX].pY;
		for (ji = 0; ji < i0; ji++)
			for (pR = !0, pS = pU, jh = pT = 0; jh < g0; jh++) pQ = 4 * ji * g0 + 4 * jh, pT <= jh && 0 < pD[pQ] && (pS = 2 === pD[pQ], pR) && (pR = !1, pS !== pU) ? (pU = pS, pT = jh + 1, jh = -1) : (pS ? (pD[pQ] = pY[0], pD[1 + pQ] = pY[1], pD[
				2 + pQ] = pY[2]) : (pD[pQ] = pV[0], pD[1 + pQ] = pV[1], pD[2 + pQ] = pV[2]), pD[3 + pQ] = 255);
		au.p5.putImageData(au.p6, 0, 0), au.p7 = !0, au.p8.ch(), b7.d2 = !0
	}
}

function bN() {
	var jh, ji, g0, i0, pZ, pa, pb, pc, player, e7;

	function pk() {
		return function() {
			var ds;
			for (ds = 0; ds < 8; ds++)
				if (jh = el(g0 * aF.random(), aF.value(100)), ji = el(i0 * aF.random(), aF.value(100)), ps()) return 1;
			return
		}() || function() {
			var gw, gz, hi, pi, hs, ph;
			for (gw = el(g0 * aF.random(), aF.value(100)), gz = el(i0 * aF.random(), aF.value(100)), hi = 40; 1 <= hi; hi--)
				for (pi = i0 - hi; 0 <= pi; pi -= 40)
					for (ji = (pi + gz) % i0, hs = 40; 1 <= hs; hs--)
						for (ph = g0 - hs; 0 <= ph; ph -= 40)
							if (jh = (ph + gw) % g0, ps()) return 1;
			return
		}()
	}

	function ps() {
		for (var f0, pu, gap = el(pZ - pc, 2), pv = pb + ji * pZ + gap, pw = pa + jh * pZ + gap, pt = pv + pc - 1; pv <= pt; pt--)
			for (pu = pw + pc - 1; pw <= pu; pu--)
				if (f0 = a4.pq(pu, pt), !a4.ev(f0) || a4.he(f0)) return;
		return 1
	}

	function pl(ph, pi) {
		pd(), px(ph - 2, pi - 2)
	}

	function pd() {
		h5[player] = 0, ep[player] = 0, fJ[player] = py[player] = 0, eu[player] = [], fB[player] = [], fC[player] = [], fF[player] = [], i4[player] = i7[player] = i3[player] = i6[player] = 0
	}

	function px(ph, pi) {
		var f0, ds, q0, q1;
		for (h5[player] = 1, ep[player] = player < h4 ? pz : ic[b.hc[player - h4]], i4[player] = ph + 10, i7[player] = pi + 10, i6[player] = i3[player] = 0, q0 = ph; q0 < ph + 4; q0++)
			for (q1 = pi; q1 < pi + 4; q1++)(ph < q0 && q0 < ph + 3 || pi < q1 && q1 < pi + 3) && (f0 = a4.pq(q0, q1), a4.ev(f0)) && (i4[player] = q0 < i4[player] ? q0 : i4[player], i3[player] = q0 > i3[player] ? q0 : i3[player], i7[player] = q1 <
				i7[player] ? q1 : i7[player], i6[player] = q1 > i6[player] ? q1 : i6[player], e7[fJ[player]] = f0, fJ[player]++, a4.q2(f0, player));
		for (py[player] = fJ[player], ds = fJ[player] - 1; 0 <= ds; ds--) a4.q3(e7[ds], player) ? (a4.ew(e7[ds], player), fB[player].push(e7[ds])) : a4.q4(e7[ds]) ? (a4.ew(e7[ds], player), fC[player].push(e7[ds])) : a4.q5(e7[ds]) && (a4.ew(e7[ds],
			player), fF[player].push(e7[ds]))
	}

	function pr(ph, pi) {
		for (var f0, pu, pt = pi; pi - 6 < pt; pt--)
			for (pu = ph; ph - 6 < pu; pu--)
				if (f0 = a4.pq(pu, pt), a4.he(f0)) return;
		return 1
	}
	this.ch = function() {
		var ds, ph, pi;
		if (e7 = new Array(12), pc = 6, pZ = 10, g0 = el(au.eT, pZ), i0 = el(au.eU, pZ), pa = el(au.eT - pZ * g0, 2), pb = el(au.eU - pZ * i0, 2), kK)
			for (ds = 0; ds < h4; ds++) player = ds, pd(), h5[player] = 1;
		if (aX.iq && aX.ir.pe) {
			for (player = 0; player < ex; player++)
				if (1 !== h5[player]) {
					if (player < pj) {
						if (function() {
								var ph = aX.ir.pe[player] + 1,
									pi = aX.ir.pp[player] + 1;
								if (3 < ph && ph < au.eT - 5 && 3 < pi && pi < au.eU - 5 && a4.ev(a4.pq(ph, pi)) && pr(ph + 3, pi + 3)) return pl(ph + 1, pi + 1), 1;
								return
							}()) continue;
						if (pk()) {
							ph = pa + jh * pZ + el(pZ, 2), pi = pb + ji * pZ + el(pZ, 2), pl(ph, pi);
							continue
						}
					}
					pd()
				}
		} else ! function() {
			var ph, pi;
			for (player = 0; player < ex; player++) 1 !== h5[player] && (player < pj && pk() ? (ph = pa + jh * pZ + el(pZ, 2), pi = pb + ji * pZ + el(pZ, 2), pl(ph, pi)) : pd())
		}();
		b4.er[7] = fJ[eo], b4.er[8] = ep[eo]
	}, this.q6 = function(hb, q7, q8) {
		var ds, ph, pi, f0, jh, ji;
		for (player = hb, ds = 0; ds < 20; ds++)
			for (ph = q7 + ds; q7 - ds <= ph; ph--)
				for (pi = q8 + ds; q8 - ds <= pi; pi--)
					if ((ph === q7 + ds || ph === q7 - ds || pi === q8 + ds || pi === q8 - ds) && 3 < ph && ph < au.eT - 5 && 3 < pi && pi < au.eU - 5 && a4.ev(a4.pq(ph, pi)) && pr(ph + 3, pi + 3)) {
						if (0 < fJ[player]) {
							for (ji = jh = f0 = void 0, jh = i3[player]; jh >= i4[player]; jh--)
								for (ji = i6[player]; ji >= i7[player]; ji--) f0 = 4 * (ji * au.eT + jh), a4.qA(player, f0) && (a4.qB(f0), fJ[player]--);
							pd()
						}
						return px(ph - 1, pi - 1), !0
					} return !1
	}, this.qC = function(hb) {
		player = hb, pk() ? pl(pa + jh * pZ + el(pZ, 2), pb + ji * pZ + el(pZ, 2)) : pd()
	}
}

function qD() {
	aH.qE(), gB.setTransform(hB, 0, 0, hB, 0, 0), gB.imageSmoothingEnabled = hB < 3, gB.drawImage(au.p9, p.jr(), p.g9()), ar.qF.gA(), gB.drawImage(qG, p.jr(), p.g9()), aH.gA(), gB.imageSmoothingEnabled = !1, gB.setTransform(1, 0, 0, 1, 0, 0), ap.qF
		.gA(), a8.gA(), e.gA(), (kN ? (b9.gA(), af) : (gB.imageSmoothingEnabled = !1, k.gA(), s.gA(), o.gA(), af.gA(), aN.gA(), t.gA(), p.gA(), n.gA(), b9.gA(), r.gA(), m.gA(), j.gA(), i.gA(), u.gA(), b5.gA(), ac.gA(), aJ)).gA()
}

function qH(qI, g0, i0) {
	qI.clearRect(0, 0, g0, i0), qI.fillStyle = ae.kp, qI.fillRect(0, 0, g0, i0)
}

function qJ(qI, g0, i0, qK) {
	qI.fillStyle = ae.gE, qI.fillRect(0, 0, g0, qK), qI.fillRect(0, 0, qK, i0), qI.fillRect(g0 - qK, 0, qK, i0), qI.fillRect(0, i0 - qK, g0, qK)
}

function qL(qI, jh, ji, gG, qK, f0, qM) {
	qI.fillStyle = ae.gE;
	var f0 = Math.floor(gG * f0),
		qO = (f0 += (f0 - qK) % 2, Math.floor((f0 - qK) / 2)),
		gG = Math.floor((gG - f0) / 2);
	qI.fillRect(jh + gG, ji + gG + qO, f0, qK), qM && qI.fillRect(jh + gG + qO, ji + gG, qK, f0)
}

function qQ() {
	this.qR = null, this.ch = function(qR) {
		this.qR = qR, k.qS(this.qR)
	}, this.qT = function(qU) {
		var ge = (this.qR[qU].qV - this.qR[1 - qU].qV) / 10,
			ge = 8 / (1 + Math.pow(2, ge / 32)),
			ge = Math.floor(10 * ge + .5),
			qX = this.qY(this.qR[qU].qV + ge + 1),
			ge = this.qY(this.qR[1 - qU].qV - ge);
		0 === qU ? k.qa(this.qR, qX, ge, ["rgba(10,140,10,0.75)", "rgba(140,10,10,0.75)"]) : k.qa(this.qR, ge, qX, ["rgba(140,10,10,0.75)", "rgba(10,140,10,0.75)"])
	}, this.qY = function(qV) {
		return 16e3 <= (qV = qV < 0 ? 0 : 16e3 < qV ? 16e3 : qV) ? "Unknown" : (qV / 10).toFixed(1)
	}
}

function cO() {
	var qb = new Uint8Array(64);
	this.ch = function() {
		var ds;
		for (qb[0] = 45, qb[37] = 95, ds = 0; ds < 10; ds++) qb[ds + 1] = 48 + ds;
		for (ds = 0; ds < 26; ds++) qb[ds + 11] = 65 + ds, qb[ds + 38] = 97 + ds
	}, this.qc = function(qd) {
		for (var p0 = ai, oq = new Uint8Array(qd), ds = 0; ds < qd; ds++) oq[ds] = p0.mV(6);
		return oq
	}, this.qe = function(oq) {
		for (var et = oq.length, qf = qb, e7 = [], ds = 0; ds < et; ds++) e7.push(String.fromCharCode(qf[oq[ds]]));
		return e7.join("")
	}
}

function bO() {
	var qg, qh, qi;
	qg = [32, 65, 191, 913, 931], qh = [64, 127, 688, 930, 1155], qi = new Array(qg.length + 1);
	for (var ds = 0; ds < qi.length; ds++) {
		qi[ds] = 0;
		for (var hi = ds - 1; 0 <= hi; hi--) qi[ds] += qh[hi] - qg[hi]
	}

	function qp(iU) {
		for (var ds = qg.length - 1; 0 <= ds; ds--)
			if (iU >= qg[ds] && iU < qh[ds]) return ds;
		return -1
	}
	this.qk = function(db) {
		return 0 !== (db = db.trim()).indexOf("Bot ") && 0 !== db.indexOf("[Bot] ") && function(db, qm, qn) {
			var et = (db = db.trim()).length;
			if (et < qm || qn < et) return !1;
			for (var iU, qo = 0, ds = 0; ds < et; ds++)
				if (iU = db.charCodeAt(ds), qo += 65 <= iU && iU <= 90 || 1040 <= iU && iU <= 1071 ? 1 : 0, -1 === qp(iU)) return !1;
			if (3 < qo && qo > Math.floor(et / 2)) return !1;
			return !0
		}(db, 3, 20)
	}, this.qq = function(db) {
		for (var et = (db = db.trim()).length, e7 = [], ds = 0; ds < et; ds++) {
			var iU, f0 = qp(iU = db.charCodeAt(ds));
			e7.push(qi[f0] + iU - qg[f0])
		}
		return e7
	}, this.ou = function(e7) {
		for (var iU, hs, db = "", et = e7.length, ds = 0; ds < et; ds++)
			for (hs = 1; hs < qi.length; hs++)
				if (e7[ds] < qi[hs]) {
					iU = qg[hs - 1] + e7[ds] - qi[hs - 1], db += String.fromCharCode(iU);
					break
				} return db
	}, this.qr = function(db) {
		for (var e7 = this.qq(db), result = "", ds = 0; ds < e7.length; ds++) result = (result += e7[ds] < 10 ? "00" : e7[ds] < 100 ? "0" : "") + e7[ds].toString(10);
		return result
	}, this.qs = function(db) {
		for (var e7 = new Array(Math.floor(db.length / 3)), ds = 0; ds < db.length; ds += 3) e7[Math.floor(ds / 3)] = parseInt(db.substring(ds, ds + 3));
		return this.ou(e7)
	}, this.dm = function(db) {
		for (var dy, e7 = [db.length], ds = 0; ds < db.length; ds++) e7[ds] = db.charCodeAt(ds) - 48;
		var result = "";
		for (ds = 0; ds < db.length; ds++) ds === db.length - 1 || 51 < 10 * e7[ds] + e7[ds + 1] ? result += e7[ds].toString() : (dy = 10 * e7[ds] + e7[ds + 1], result += String.fromCharCode(dy + (dy < 26 ? 65 : 71)), ds++);
		return result
	}, this.dc = function(db) {
		for (var iU, result = "", ds = 0; ds < db.length; ds++) 48 <= (iU = db.charCodeAt(ds)) && iU < 58 ? result += String.fromCharCode(iU) : 65 <= iU && iU < 75 ? result += "0" + (iU - 65).toString() : 75 <= iU && iU < 91 ? result += (iU - 65)
			.toString() : 97 <= iU && iU < 123 && (result += (iU - 71).toString());
		return result
	}, this.qt = function(db) {
		for (var et = db.length, e7 = [], ds = 0; ds < et; ds++)(iU = db.charCodeAt(ds)) < 58 ? e7.push(db[ds]) : (iU -= iU < 91 ? 65 : 71, e7.push(String(el(iU, 10))), e7.push(String(iU - 10 * el(iU, 10))));
		var et = e7.length - 2,
			iU = 0,
			oq = [];
		for (ds = 0; ds < et; ds += 3) oq[iU++] = parseInt(e7[ds] + e7[ds + 1] + e7[ds + 2]);
		return oq
	}, this.qu = function() {
		for (var gQ, qv = "", ds = 0; ds < 6; ds++) gQ = 48 + aF.random() % 36, gQ += 58 <= gQ ? 39 : 0, qv += String.fromCharCode(gQ);
		return qv
	}
}

function cY() {
	this.qw = new qx, this.j5 = new qy, this.ch = function() {
		this.j5.ch()
	}
}

function qx() {
	function r0() {
		if (2 === jE) return 1;
		aN.rB(), jE = 2, rC = rD
	}

	function r3() {
		k.rE(!0), s.jD(!0), t.jD(!0), aN.jD(), af.rF(), fd && b7.rG.rH(), b7.d2 = !0, b2.rI(), dw(0)
	}
	this.qz = function() {
		r0() || (aa.ff.mQ(), k.r1(247, 0), k.r2(0, 59), f.kS(2700), u.show(!1, !1, !0), r3())
	}, this.r4 = function(r5) {
		var mN = 0,
			r6 = !1;
		r0() || (8 === it ? ((r6 = (mN = r5 < 0 ? fJ[0] >= fJ[1] ? 0 : 1 : r5) === eo) ? k.r2(mN, 2) : k.r2(1 - eo, 3), r7.qT(mN), aa.ff.mM(mN)) : hV ? (r6 = b8.iV[eo] === b9.r8(), 9 === it ? (aa.ff.mM(r6 ? jO[0] : 512), k.r9(r6)) : at.j5.iF(
			r6)) : (r6 = (mN = jO[0]) === eo, k.rA(mN), aa.ff.mM(mN)), u.show(r6, !1), r3())
	}
}

function qy() {
	var rJ;

	function rd(rL, f1) {
		for (var db = "", ds = f1; ds < rL.length && ds < f1 + 4; ds++) db += (ds === f1 ? "" : "   ") + "[" + b8.rV[rL[ds].id] + "]: " + rL[ds].ra.toFixed(Math.max(Math.floor(3 - Math.log10(rL[ds].ra)), 0));
		db.length && k.rc(0, db, 45, 0, ad.kj.kk(225, 240, 255), ae.kp, -1, !1)
	}
	this.rK = 0, this.rL = null, this.ch = function() {
		rJ = 0, this.rK = 0, this.rL = null
	}, this.iF = function(r6) {
		var rM = b8.rN[b9.rO()];
		this.rK = b9.rP(), this.rL = function(rM, rK) {
				var ds, hs, et, iV = b8.iV,
					rN = b8.rN,
					rV = b8.rV,
					rW = b8.rW,
					rX = fJ,
					rY = h4,
					rZ = [],
					fu = 0;
				for (hs = rV.length - 1; 0 <= hs; hs--)
					if (rN[iV[rW[hs][0]]] === rM) {
						for (rZ.push({
								id: hs,
								rX: 0,
								player: rW[hs][0],
								ra: 0
							}), et = rW[hs].length, ds = 0; ds < et; ds++) rZ[fu].rX += rX[rW[hs][ds]];
						for (rZ[fu].ra = (1 + rb) * rY * rZ[fu].rX / rK, ds = 0; ds < fu; ds++)
							if (rZ[fu].rX > rZ[ds].rX) {
								rZ.splice(ds, 0, rZ[fu]), rZ.pop();
								break
							} fu++
					} 8 < rZ.length && (rZ.length = 8);
				for (; 0 < rZ.length && 0 === rZ[rZ.length - 1].rX;) rZ.pop();
				return rZ
			}(rM, this.rK), n.rR("Team " + b8.fr[rM], 2, 1, 12),
			function(r6, rM) {
				var color;
				r6 = r6 ? (color = ad.kj.kk(10, 220, 10), "Congratulations! Team " + b8.fr[rM] + " won the game!") : (color = ad.kj.kk(200, 80, 80), "Our alliance was defeated! Team " + b8.fr[rM] + " won the game.");
				k.rc(0, r6, 40, 0, color, ae.kp, -1, !1)
			}(r6, rM), 0 !== (r6 = this.rL).length && (k.rc(0, "The allied clans of the winning team have earned these glorious points:", 40, 0, ae.gE, ae.kp, -1, !1), rd(r6, 0), rd(r6, 4)), aa.ff.mS(), f.kS(2700)
	}, this.j6 = function() {
		2 === jE && -1 !== rJ && (0 === rJ ? rJ = this.rL && 0 !== this.rL.length ? b7.dT + 8e3 : -1 : b7.dT < rJ || (rJ = -1, k.rc(255, "Clan rankings and results can also be accessed under:", 735, 0, ae.gE, ae.kp, -1, !1), k.rc(255,
			"territorial.io/clans", 736, 0, ae.gE, ae.kp, -1, !1), k.rc(255, "territorial.io/clan-results", 736, 0, ae.gE, ae.kp, -1, !1)))
	}
}

function ce() {
	this.ch = function() {
		dS = "undefined" != typeof Android ? Android : null, 12 <= (dV = dS ? dS.getVersion() : 0) && dS.prepareAd("1688441405"), dR = !1, window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.iosCommandA && (dR = !0,
			window.webkit.messageHandlers.iosCommandA.postMessage("prepare ad 4500876070"), dX = "undefined" != typeof mwIOSdataX ? mwIOSdataX : {
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
			}), dS || dR || (am.rg += "_browser")
	}
}

function bE() {
	var rh, oq;

	function rk() {
		var ds, g0 = new cN;
		for (g0.bg(800), g0.or(1, 0), g0.or(3, 7), g0.or(3, 1), g0.or(2, dR ? 2 : 12 <= dV ? 1 : 0 < dV ? 3 : 0), g0.or(1, d8 ? 1 : 0), g0.or(1, dA ? 1 : 0), g0.or(1, a.d3), ds = 0; ds < oq.length && !(g0.fu + 6 > 8 * g0.gH); ds++) g0.or(6, oq[ds]);
		rh.send(g0.mU), rh.onopen = null
	}
	window.addEventListener("error", function error(dC) {
		var ri, rj;
		window.removeEventListener("error", error), ri = dC.lineno + " " + dC.colno + " " + dC.message, (rj = new cQ).ch(), oq = rj.om(rj.ol(ri)), (rh = new WebSocket("wss://territorial.io/s52/")).onopen = rk, 0 === dC.lineno && 0 === dC
			.colno || (dS ? dS.showToast(ri) : alert(ri))
	})
}

function cS() {
	var rl = -15e3,
		rm = !1;

	function g3(dC) {
		s5() || (rm = !0, s6(dC, 1), aP.j4.s7(aP.j4.s8), s9(Math.floor(nP * dC.clientX), Math.floor(nP * dC.clientY)))
	}

	function ru(dC) {
		rl = b7.dT, s6(dC, 1), aP.j4.s7(aP.j4.s8), 0 < dC.touches.length && (sA = Math.floor(nP * dC.touches[0].clientX), sB = Math.floor(nP * dC.touches[0].clientY), aI.ru(dC) || s9(sA, sB))
	}

	function s9(jh, ji) {
		0 === jE ? x.g3(jh, ji) : af.sC(jh, ji) || b5.g3(jh, ji) || ac.g3(jh, ji) || u.g3(jh, ji) || i.sD(jh, ji) || m.g3(jh, ji) || j.g3(jh, ji) || al.sE(jh, ji) || aN.g3(jh, ji) || i.sF(jh, ji)
	}

	function rq(dC) {
		s5() || (rm = !0, s6(dC, 1), sG(Math.floor(nP * dC.clientX), Math.floor(nP * dC.clientY)))
	}

	function rv(dC) {
		rl = b7.dT, s6(dC, 1), 0 < dC.touches.length && (sA = Math.floor(nP * dC.touches[0].clientX), sB = Math.floor(nP * dC.touches[0].clientY), aI.rv(dC) || sG(sA, sB))
	}

	function sG(jh, ji) {
		0 === jE ? x.rq(jh, ji) : b5.rq(jh, ji) || (j.rq(jh, ji), i.sH() ? i.rq(jh, ji) : o.sI ? o.rq(jh, ji) && (b7.d2 = !0) : (s.rq(jh, ji), p.kO && p.rq(jh, ji) && (b7.d2 = !0)))
	}

	function rs(dC) {
		s5() || (s6(dC, 1), 0 === jE ? (x.click(-1024, -1024), q.sJ()) : (s.sK(-1024, -1024), j.rq(-1024, -1024), o.sL(), p.kO && (p.kO = !1)))
	}

	function rr(dC) {
		s5() || (s6(dC, 1), sM(Math.floor(nP * dC.clientX), Math.floor(nP * dC.clientY), 2 === dC.button))
	}

	function click(dC) {
		s5() || s6(dC, 1)
	}

	function rw(dC) {
		rl = b7.dT, s6(dC, 1), dC && dC.touches && 0 < dC.touches.length && 0 !== jE ? p.kO = !1 : aI.sN() || sM(sA, sB, !1)
	}

	function rx(dC) {
		rl = b7.dT, s6(dC, 1), sM(sA, sB, !1)
	}

	function ry(dC) {
		aW.ry(dC)
	}

	function rz(dC) {
		aW.rz(dC)
	}

	function s0(dC) {
		s5() || s6(dC, 0)
	}

	function sM(jh, ji, sO) {
		0 === jE ? x.click(jh, ji) : (s.sK(jh, ji), b5.sK(), o.sL(), p.kO = !1, i.click(jh, ji, sO) && (b7.d2 = !0))
	}

	function rt(dC) {
		var jh, ji, deltaY;
		s5() || (s6(dC, 1), aP.j4.s7(aP.j4.s8), jh = Math.floor(nP * dC.clientX), ji = Math.floor(nP * dC.clientY), deltaY = dC.deltaY, 1 === dC.deltaMode && (deltaY *= 16), 0 === jE ? x.rt(jh, ji, deltaY) : s.rt(jh, ji, deltaY) || (o.sP(jh, ji) ? o
			.rt(deltaY) && (b7.d2 = !0) : p.rt(jh, ji, +deltaY)))
	}

	function s1(dC) {
		s6(dC, 0)
	}

	function s6(dC, id) {
		0 === id && (az.sH || ac.sH || z.sH) || 1 === id && (z.oX || ac.oX) || (id = window.innerWidth / document.documentElement.clientWidth) < .999 || 1.001 < id || 0 !== x.sR() && dC.preventDefault()
	}

	function s2(dC) {
		s5() || b7.dT < 400 || (8 !== x.sR() && x.sS(dC) ? b7.d2 = !0 : "Escape" === dC.key ? x.dz() : "ArrowLeft" === dC.key || "a" === dC.key ? aD.sT(3) : "ArrowUp" === dC.key || "w" === dC.key ? aD.sT(0) : "ArrowRight" === dC.key || "d" === dC
			.key ? aD.sT(1) : "ArrowDown" === dC.key || "s" === dC.key ? aD.sT(2) : "h" === dC.key ? 1 <= jE && af.sU(!kN) : " " === dC.key && jE && (av.fc(), j.fe && j.sV(), fd) && af.sW(!1))
	}

	function s3(dC) {
		s5() || ("ArrowLeft" === dC.key || "a" === dC.key ? aD.sX(3) : "ArrowUp" === dC.key || "w" === dC.key ? aD.sX(0) : "ArrowRight" === dC.key || "d" === dC.key ? aD.sX(1) : "ArrowDown" === dC.key || "s" === dC.key ? aD.sX(2) : "1" === dC.key ? o
			.sY(.75) : "2" === dC.key ? o.sY(7 / 8) : "3" === dC.key ? o.sY(.9375) : "4" === dC.key ? o.sY(31 / 32) : "5" === dC.key ? o.sY(32 / 31) : "6" === dC.key ? o.sY(16 / 15) : "7" === dC.key ? o.sY(8 / 7) : "8" === dC.key ? o.sY(4 / 3) :
			"+" === dC.key ? 0 !== jE && p.rt(Math.floor(jp / 2), Math.floor(g7 / 2), -200) : "-" === dC.key ? 0 !== jE && p.rt(Math.floor(jp / 2), Math.floor(g7 / 2), 200) : "c" === dC.key && 0 !== jE && b5.sZ())
	}

	function s4() {
		"hidden" === document.visibilityState ? b7.sa() : b7.sb()
	}

	function s5() {
		return rl + 15e3 > b7.dT
	}

	function resize() {
		aK.se()
	}
	this.rn = 0, this.ro = "", this.ch = function() {
		rp.addEventListener("mousedown", g3, {
			passive: !1
		}), rp.addEventListener("mousemove", rq, {
			passive: !1
		}), rp.addEventListener("mouseup", rr, {
			passive: !1
		}), rp.addEventListener("click", click, {
			passive: !1
		}), rp.addEventListener("mouseleave", rs, {
			passive: !1
		}), rp.addEventListener("wheel", rt, {
			passive: !1
		}), rp.addEventListener("touchstart", ru, {
			passive: !1
		}), rp.addEventListener("touchmove", rv, {
			passive: !1
		}), rp.addEventListener("touchend", rw, {
			passive: !1
		}), rp.addEventListener("touchcancel", rx, {
			passive: !1
		}), rp.addEventListener("dragover", ry), rp.addEventListener("drop", rz), rp.addEventListener("dblclick", s0), document.addEventListener("contextmenu", s1), document.addEventListener("keyup", s2), document.addEventListener("keydown",
			s3), document.addEventListener("visibilitychange", s4), window.addEventListener("resize", resize)
	}, this.sE = function(jh, ji) {
		return !!af.g3(jh, ji) || !!(s.g3(jh, ji) || p.g3(jh, ji) || o.g3(jh, ji) || k.g3(jh, ji))
	}, this.sc = s5, this.sd = function() {
		return !rm || 0 < rl
	}
}

function cK() {
	this.kj = new sf, this.pB = new sg, this.ff = new sh, this.jx = new si
}

function sg() {
	this.pC = function(e7) {
		e7.fill(0)
	}, this.sj = function(e7) {
		for (var et = e7.length, ds = 0; ds < et; ds++) e7[ds] = []
	}, this.sk = function(ga, fq) {
		for (var gb = aq.e3, ds = 0; ds < 3; ds++) gb[ds] = fq * ga[ds];
		return gb
	}, this.sl = function(ga, gb, sm) {
		for (var ge = 0, ds = 0; ds < 3; ds++) ge += Math.abs(ga[ds] - gb[ds]);
		return sm <= ge
	}, this.sn = function(ga, so) {
		for (var ds = 0; ds < 3; ds++) ga[ds] = an.sp(ga[ds] + so, 0, 255);
		return ga
	}, this.sq = function(e7, sr = 0, ss = e7.length - 1) {
		for (var st = 0, ds = sr; ds <= ss; ds++) st += e7[ds];
		return st
	}, this.su = function(e7, sv) {
		for (var ds, sw, et = e7.length, sx = [], hi = et - 1; 0 <= hi; hi--) {
			for (ds = sw = 0; ds < et; ds++) sv(e7[ds]) < sv(e7[sw]) && (sw = ds);
			et--, sx.push(e7[sw]), e7[sw] = e7[et], e7.pop()
		}
		return sx
	}
}

function sf() {
	this.sy = gF(32, 32, ["a", "b", "m"], 200), this.p1 = function(g0, i0) {
		var iU = document.createElement("canvas");
		return iU.width = g0, iU.height = i0, iU
	}, this.getContext = function(gN, alpha) {
		return gN.getContext("2d", {
			alpha: alpha
		})
	}, this.getImageData = function(qI, g0, i0) {
		return qI.getImageData(0, 0, g0, i0)
	}, this.kk = function(gQ, sz, hs) {
		return "rgb(" + gQ + "," + sz + "," + hs + ")"
	}, this.km = function(gQ, sz, hs, hi) {
		return "rgba(" + gQ + "," + sz + "," + hs + "," + hi.toFixed(3) + ")"
	}, this.oY = function(t0, jh, ji, g0, i0) {
		var kV = 1 / nP,
			t1 = .02 * kV * i0,
			t2 = kV * t3;
		t0.padding = t1.toFixed(2) + "px", t0.border = t2.toFixed(2) + "px solid " + ae.gE, t0.left = (kV * jh).toFixed(2) + "px", t0.top = (kV * ji).toFixed(2) + "px", t0.width = (kV * g0 - 2 * t1 - 2 * t2).toFixed(2) + "px", t0.height = (kV *
			i0 - 2 * t1 - 2 * t2).toFixed(2) + "px"
	}, this.oG = function(gH, type) {
		return gH = gH.toFixed(2), 0 === type ? gH + "px " + settings.fontName : 1 === type ? "bold " + gH + "px " + settings.fontName : 2 === type ? "small-caps " + gH + "px " + settings.fontName : "small-caps bold " + gH + "px " + settings
			.fontName
	}, this.textAlign = function(gO, id) {
		gO.textAlign = 0 === id ? "left" : 1 === id ? "center" : "right"
	}, this.textBaseline = function(gO, id) {
		gO.textBaseline = 1 === id ? "middle" : "bottom"
	}, this.nO = function(dy) {
		return 1 + dy * de
	}
}

function t4() {
	document.t5[0].t6(".closeIcon {position: absolute; width: 24px; height: 24px; top: calc(50% - 12px);}", 0), document.t5[0].t6(
		".closeIcon:before {content: ' '; position: absolute; left: 50%; top: 0; width: 2px; height: 100%; background-color: #222; transform: translateX(-50%) rotate(45deg);}", 0), document.t5[0].t6(
		".closeIcon:after {content: ' '; position: absolute; left: 50%; top: 0; width: 2px; height: 100%; background-color: #222; transform: translateX(-50%) rotate(-45deg);}", 0), this.t7 = function() {
		var nT = document.createElement("div");
		return nT.t8 = "closeIcon", nT
	}
}

function sh() {
	this.fg = function(dO) {
		return 0 === dO ? 1 === jE && kK : 1 === dO ? 1 === jE && !kK : 1 <= jE && !kK
	}, this.fh = function(player) {
		return 0 !== h5[player] && 2 !== h6[player]
	}, this.mm = function(t9, tA) {
		return t9 !== tA
	}, this.mA = function(player, dy) {
		return dy = this.tB(player, dy), ep[player] += dy, dy
	}, this.tB = function(player, dy) {
		var tC = ep[player];
		return dy = Math.min(dy, fJ[player] * tD - tC), dy = Math.min(dy, tE - tC), Math.max(dy, 0)
	}, this.mn = function(player, h9, tF, tG) {
		var tC = ep[player],
			h9 = an.fY(tC * (h9 + 1), 1024),
			tF = an.fY(tF * tC, 1024),
			h9 = Math.min(h9, tC - tF);
		return 10 === it && (h9 = aU.tI(player, h9)), aq.e1[0] = h9, aq.e1[1] = tF, tG <= h9
	}, this.m7 = function(player, lm, ll) {
		var player = ep[player],
			tH = an.fY(64 * player, 1024);
		return lm = Math.min(lm, player - tH), tH += player = this.tK(lm), lm = this.tB(ll, lm -= player), aq.e1[0] = lm, aq.e1[1] = tH, 1 <= lm
	}, this.m9 = function(lm, ll) {
		var tJ = this.tK(lm);
		return lm = this.tB(ll, lm -= tJ), aq.e1[0] = lm, aq.e1[1] = tJ, 1 <= lm
	}, this.h8 = function(player, tL) {
		return an.fY(ep[player] * (tL + 1), 1024)
	}, this.tK = function(tM) {
		return an.fY(Math.max(2142 - b7.iT(), 0) * tM, 2142)
	}, this.mz = function(player, tF) {
		ep[player] -= an.fY(tF * ep[player], 1024)
	}, this.mp = function(player) {
		ep[player] -= aq.e1[0] + aq.e1[1]
	}, this.mo = function(player, hb) {
		return (hb = Math.min(hb, ex)) < ex && 0 === h5[hb] && (hb = ex), (aq.e5[0] = hb) === ex || hn(player, hb)
	}, this.mr = function(player, ll) {
		return 0 !== h5[ll] && !hn(player, ll)
	}
}

function si() {
	this.jy = function(dy) {
		var ds, tN, tO, tP, tQ;
		if (dy < 0) return "-" + this.jy(Math.abs(dy));
		if (dy < 1e3) return dy.toString();
		for (tN = Math.floor(Math.log(dy + .5) / Math.log(10)) + 1, tO = Math.floor((tN - 1) / 3), tQ = (tP = dy.toString()).substring(tN - 3, tN), ds = 1; ds < tO; ds++) tQ = tP.substring(tN - 3 * (ds + 1), tN - 3 * ds) + " " + tQ;
		return tP.substring(0, tN - 3 * tO) + " " + tQ
	}, this.tR = function(f0, tN) {
		return f0.toFixed(tN) + "%"
	}, this.tS = function(dy, tT = 3) {
		return dy.toFixed(Math.max(Math.floor(tT - Math.log10(dy)), 0))
	}, this.tU = function(username) {
		var tW, tV = username.indexOf("[");
		return !(tV < 0) && 1 < (tW = username.indexOf("]")) - tV && tW - tV <= 8 ? username.substring(tV + 1, tW).toUpperCase().trim() : null
	}
}

function tX() {
	this.hY = function(player, gg) {
		g.q6(player, ao.gX(gg), ao.gZ(gg)) && (b7.d2 = !0), iv && this.iF()
	}, this.iF = function() {
		var ds;
		for (kK = !1, ds = 0; ds < h4; ds++) 0 !== h5[ds] && 0 === fJ[ds] && g.qC(ds);
		0 !== h5[eo] ? (b4.er[7] = fJ[eo], b4.er[8] = ep[eo], o.dQ(), t.tY(), fd || f.kJ(i4[eo] - 5, i7[eo] - 5, i3[eo] + 5, i6[eo] + 5), aJ.ch()) : u.show(!1, !1, !1, !0), k.tZ(18), a8.ta(), a8.jD(!0), ar.j4.tb(), ml = null, b2.tc = !0, b2.td(),
			iv && dw(1)
	}
}
var iv, fd, te, tE, tf, eo, kN, kK, tg, hV, th, it, rb, ml, r7, ti, ex = 512,
	pj = 512,
	tD = 150,
	jE = 0,
	pz = 512,
	em = 2;

function tj(tk, tl, qR, tm, tn, to) {
	kN = !1, fd = to, rb = tn, hV = (it = tm) < 7 || 9 === it, rD = h4 = qR.length, iv = 1 === rD, th = 9 === (it = 8 === (it = 10 === it && iv ? 7 : it) && 2 !== h4 ? 7 : it) ? 2 : it + 2, ti = h4 <= 2 ? 30 : h4 <= 50 ? 40 : 50, tg = kK = !(aX.iq &&
			!aX.ir.tp) && (hV || h4 < 100), ml = kK ? new tX : null, pz = 512, pj = ex, iv && (pj = a1.tq()), ip = pj - h4, rC = 0, eo = tl, aF.tr(tk), aA.ch(), ts(qR), aa.lc.mY = [], b8.ch(qR), jE = 1, tE = 15e8, tf = 1e9, b4.ch(), tt(), aB.tu(), b2
		.ch(), a7.ch(), iB(), a4.ch(qR), aH.ch(), ao.ch(), ap.ch(), at.ch(), b.ch(), a9.bg(), a9.tv(), g.ch(), tw(), ab.ch(tk, qR, tm, tn), b9.ch(), as.ch(), ar.ch(), b5.ch(), tx.putImageData(ty, 0, 0), s.ch(), p.ch(), o.ch(), af.ch(), aN.ch(), r
		.ch(), t.ch(), j.ch(), n.ch(), k.ch(), m.ch(), i.ch(), u.ch(), e.ch(), c.ch(), d.ch(), eS(), a6.ch(), a8.ch(), aU.ch(), aT.ch(), aV.ch(), aQ.ch(), ax.dD.dP(!1), 8 === it ? (r7 = new qQ).ch(qR) : r7 = null, b7.tz(), u0(), aJ.ch(), b7.d2 = !0,
		fd || iv && kK || dw(1)
}

function u0() {
	f.kI(), 0 === h5[eo] && u.show(!1, !0), a8.jD(!0)
}

function u1(u2) {
	ac.oH(), aP.j4.close(aP.j4.s8, 3246), jE = 0, b7.u3(), dw(0), ax.dD.dP(!0), a2.ch(!u2)
}

function bP() {
	var n5, jh, ji, u4, u5, u6, dT, player, u7, gap, zoom, mJ, u8;

	function uO(player) {
		for (var ds = mJ.length - 1; 0 <= ds; ds--)
			if (mJ[ds] === player) return 1
	}

	function uM(uJ) {
		var ds, et;
		if (-1 !== uJ)
			for (et = n5.length, ds = 0; ds < et; ds++)
				if (n5[ds].sH && n5[ds].jh + 1 === uJ % 4 && n5[ds].ji + 1 === uJ >> 2) return ds;
		return -1
	}

	function uL(g4, g5) {
		var sz = gap / 2;
		return g4 < jh - u4 - 3 * sz || jh + 3 * u4 + 5 * sz < g4 || g5 < ji - u4 - 3 * sz || ji + 2 * u4 + 3 * sz < g5 ? -1 : 4 * (g5 < ji - sz ? 0 : g5 < ji + u4 + sz ? 1 : 2) + (g4 < jh - sz ? 0 : g4 < jh + u4 + sz ? 1 : g4 < jh + 2 * u4 + 3 *
			sz ? 2 : 3)
	}
	this.u9 = function() {
		var ds, hs, uC = [ae.lB, ae.lK, ae.kq, ae.lW, ae.lQ];
		for (n5 = new Array(8), ds = 0; ds < 8; ds++) n5[ds] = {
			id: ds,
			sH: !1,
			uD: 0,
			gN: [],
			jh: 0,
			ji: 0
		};
		for (n5[0].colors = [0, 1, 2, 3], n5[0].jh = 0, n5[0].ji = 0, n5[1].colors = [0, 1, 4], n5[1].jh = 1, n5[1].ji = 0, n5[2].colors = [0, 2], n5[2].jh = -1, n5[2].ji = 0, n5[3].colors = [0], n5[3].jh = 0, n5[3].ji = 0, n5[4].colors = [0, 2],
			n5[4].jh = 1, n5[4].ji = 1, n5[5].colors = [3], n5[5].jh = 0, n5[5].ji = -1, n5[6].id = 20, n5[6].colors = [0], n5[6].jh = 1, n5[6].ji = -1, n5[7].id = 21, n5[7].colors = [0], n5[7].jh = 0, n5[7].ji = 1, ds = 0; ds < 8; ds++)
			for (hs = 0; hs < n5[ds].colors.length; hs++) n5[ds].gN.push(function(id, uE) {
				var gG = a3.get(3).height,
					uF = ad.kj.p1(gG, gG),
					gO = ad.kj.getContext(uF);
				20 === id ? gO.drawImage(a3.get(18), 0, 0) : 21 === id ? gO.drawImage(a3.uG("emojis"), -4 * gG, 0) : (function(g0, qI, uI) {
					qI.fillStyle = uI, qI.beginPath(), qI.arc(Math.floor(g0 / 2), Math.floor(g0 / 2), Math.floor(.47 * g0), 0, 2 * Math.PI), qI.fill()
				}(gG, gO, uE), gO.drawImage(a3.get(3), -id * gG, 0));
				return uF
			}(n5[ds].id, uC[n5[ds].colors[hs]]))
	}, this.uB = function() {
		return n5
	}, this.ch = function() {
		mJ = [], jh = ji = dT = 0, u5 = u6 = -1e3, this.resize()
	}, this.resize = function() {
		u4 = Math.floor((de ? .075 : .0468) * fs), zoom = u4 / a3.get(3).height, gap = Math.floor(u4 / 3)
	}, this.sD = function(g4, g5) {
		return !!this.sH() && (b7.d2 = !0, !!b3.g3(g4, g5, player) || (g4 = function(g4, g5) {
			var uJ, ds;
			if (u6 = u5 = -1e3, uJ = uL(g4, g5), -1 === (uJ = uM(uJ))) return 0;
			if (1 === n5[uJ].colors[n5[uJ].uD]) return 0;
			if (5 === uJ) {
				if (! function() {
						var dU = (new Date).getTime();
						u8 + 4e3 < dU && (mJ = []);
						u8 = dU
					}(), uO(player)) return 1;
				mJ.push(player), 16 < mJ.length && mJ.shift()
			} else if (6 === uJ) {
				for (ds = mJ.length - 1; 0 <= ds; ds--) 0 === h5[mJ[ds]] && mJ.splice(ds, 1);
				0 < mJ.length && (aV.uP(1, mJ, !0) && aa.ff.mI(mJ, player), mJ = [])
			} else if (2 === uJ) aa.fl.lk(o.fn(), player);
			else if (3 === uJ) kK && aa.fl.lf(u7);
			else if (0 === uJ)
				if (0 === n5[0].uD) {
					if (tg && t.uQ() < 300) return 1;
					aa.fl.fm(o.fn(), player)
				} else aQ.uR(player, o.fn());
			else if (1 === uJ) aa.fl.lo(o.fn(), u7);
			else {
				if (7 === uJ) return b3.show(g4, g5), 2;
				if (4 !== uJ) return 0;
				aV.uP(0, [player], !0) && aa.ff.mF(player)
			}
			return 1
		}(g4, g5), this.oH(), 2 === g4 && (b3.sH = !0), 0 < g4))
	}, this.sF = function(g4, g5) {
		this.sH() || (u5 = g4, u6 = g5, dT = (new Date).getTime())
	}, this.click = function(g4, g5, sO) {
		var gq = ao.hD(g4),
			gr = ao.hE(g5),
			gg = ao.hG(gq, gr),
			gp = ao.hI(gg);
		return !(!ao.hF(gq, gr) || (gq = (de ? .025 : .0144) * fs, Math.abs(g4 - u5) > gq) || Math.abs(g5 - u6) > gq || performance.now() > dT + 425) && (sO ? (function(g4, g5, gp) {
			a4.ev(gp) || -1 === (g4 = ap.lp.uj(g4, g5)) ? k.ui(gp) : k.uk(g4)
		}(g4, g5, gp), !1) : j.fe || this.sH() || !ao.h7() || fd ? (this.oH(), !1) : kK ? !!a4.ev(gp) && (u7 = gg, n5[3].sH = !0, this.uU(g4, g5)) : (ap.lp.ls(gg) || ap.lp.uV(g4, g5) || (2 === jE ? a4.f3(gp) && 0 < b3.uW && (player = a4
			.f4(gp), a4.uX(player)) && (n5[0].sH = !0, n5[0].uD = 1, n5[7].sH = !0) : a4.uY(gp) || (u7 = gg, ap.lp.lq(eo, gg) && (n5[0].sH = !0, n5[0].uD = 1, n5[1].sH = !0, n5[1].uD = aq.e4[2] ? 0 : 2), a4.uZ(gp)) || (a4.f5(gp) ?
			(player = ex, ua(eo) ? (n5[0].sH = !0, n5[0].uD = 0) : ub(eo, player) && (n5[0].sH = !0, n5[0].uD = 3)) : (player = a4.f4(gp)) === eo ? 0 !== b3.uW && (n5[0].sH = !0, n5[0].uD = 1, n5[7].sH = !0) : (n5[0].uD = 1, n5[5]
				.sH = function(player) {
					return a4.uX(player) && !uO(player) && aV.uP(1, [player], !1)
				}(player), n5[7].sH = 1 <= b3.uW && a4.uX(player), hn(player, eo) ? (n5[4].sH = a4.uX(player) && !a8.ud(player) && aV.uP(0, [player], !1), n5[6].sH = function(player) {
					if (0 === mJ.length) return !1;
					if ((new Date).getTime() > u8 + 4e3) return !(mJ = []);
					return !uO(player) && ! function(player) {
						var ds;
						if (hV)
							for (ds = mJ.length - 1; 0 <= ds; ds--)
								if (!hn(player, mJ[ds])) return 1;
						return
					}(player)
				}(player), uf(eo, player) ? (n5[0].uD = 0, n5[0].sH = !0) : ub(eo, player) && (n5[0].uD = 3, n5[0].sH = !0), n5[0].sH = this.ug()) : (n5[2].sH = !0, n5[0].sH = !0)))), this.uU(g4, g5)))
	}, this.uU = function(g4, g5) {
		return jh = g4 - Math.floor(u4 / 2), ji = g5 - Math.floor(u4 / 2), !!this.sH()
	}, this.rq = function(g4, g5) {
		return !!this.sH() && (b3.sH ? !b3.um(g4, g5) && (b3.un(), b3.sH = !1, b7.d2 = !0) : function(up, g4, g5) {
			g4 = uL(g4, g5);
			if (0 <= uM(g4)) return !1;
			if ((1 === g4 || 6 === g4) && 0 <= uM(2)) return !1;
			if ((6 === g4 || 9 === g4) && 0 <= uM(10)) return !1;
			return up.oH(), b7.d2 = !0
		}(this, g4, g5))
	}, this.oH = function() {
		for (var ds = n5.length - 1; 0 <= ds; ds--) n5[ds].sH = !1, n5[ds].uD = 0;
		b3.sH = !1
	}, this.sH = function() {
		return this.ug() || b3.sH
	}, this.ug = function() {
		for (var et = n5.length, ds = 0; ds < et; ds++)
			if (n5[ds].sH) return !0;
		return !1
	}, this.gA = function() {
		if (this.sH())
			if (b3.sH) b3.gA();
			else {
				var ds, gO = gB,
					hs = n5,
					et = hs.length,
					ur = (u4 + gap) / zoom;
				for (gO.imageSmoothingEnabled = !0, gO.setTransform(zoom, 0, 0, zoom, jh, ji), ds = 0; ds < et; ds++) hs[ds].sH && gB.drawImage(hs[ds].gN[hs[ds].uD], hs[ds].jh * ur, hs[ds].ji * ur);
				gO.imageSmoothingEnabled = !1, gO.setTransform(1, 0, 0, 1, 0, 0)
			}
	}
}

function bQ() {
	var i0, gN, fz, ut, uu, us = ["Quit Game", "Surrender", "Statistics", "Replay"];

	function uv() {
		var uw, qI = gN.getContext("2d", {
			alpha: !0
		});
		qI.clearRect(0, 0, i0, i0), qI.fillStyle = ae.kn, qI.fillRect(0, 0, i0, i0), 0 === ut && (qI.fillStyle = ae.ks, qI.fillRect(0, 0, i0, i0)), qI.fillStyle = ae.gE, qI.fillRect(0, 0, i0, 1), qI.fillRect(0, 0, 1, i0), qI.fillRect(0, i0 - 1, i0,
			1), qI.fillRect(i0 - 1, 0, 1, i0), uw = .9 * i0 / a3.get(0).width, qI.imageSmoothingEnabled = !0, qI.setTransform(uw, 0, 0, uw, Math.floor((i0 - uw * a3.get(0).width) / 2), Math.floor((i0 - uw * a3.get(0).height) / 2)), qI.drawImage(
			a3.get(0), 0, 0), qI.setTransform(1, 0, 0, 1, 0, 0)
	}

	function uz(g4, g5) {
		if (!j.fe) return g4 <= i0 + nZ && g5 >= o.ji ? 0 : -1;
		if (g4 <= 4 * i0 + nZ) {
			if (g5 >= o.ji) return 0;
			if (g5 >= o.ji - i0 - uu * nZ) return v2(2) ? 2 : -1;
			if (g5 >= o.ji - 2 * (i0 + uu * nZ)) return v2(3) ? 3 : -1;
			if (g5 >= o.ji - 3 * (i0 + uu * nZ)) return v2(4) ? 4 : -1
		} else if (g4 <= 7 * i0 + nZ && g5 >= o.ji - i0 - uu * nZ) return 1;
		return -1
	}

	function v2(ds) {
		return 2 === ds ? v0(2) || v0(3) || v0(4) : 3 === ds && v0(3) || v0(4)
	}

	function v0(ds) {
		return 2 === ds ? !fd && j.v7(eo) : 3 === ds ? 2 <= b4.v8 : ac.v9()
	}

	function vB(ds, uE) {
		gB.setTransform(1, 0, 0, 1, nZ, o.ji - ds * uu * nZ - ds * i0), gB.fillStyle = ae.kn, gB.fillRect(0, 0, 4 * i0, i0), ut === ds + 1 && uE === ae.gE && (gB.fillStyle = ae.ks, gB.fillRect(0, 0, 4 * i0, i0)), gB.fillStyle = uE, gB.fillRect(0, 0,
			4 * i0, 1), gB.fillRect(0, 0, 1, i0), gB.fillRect(4 * i0, 0, 1, i0), gB.fillRect(0, i0 - 1, 4 * i0, 1), gB.fillText(us[ds], 2 * i0, .54 * i0)
	}
	this.fe = !1, this.ch = function() {
		ut = -1, this.fe = !1, uu = de ? 1.2 : .6, this.resize()
	}, this.resize = function() {
		i0 = o.i0, (gN = document.createElement("canvas")).width = i0, gN.height = i0, fz = fv + Math.floor((de ? .5 : .45) * i0) + fw, uv()
	}, this.sV = function() {
		this.fe = !this.fe, this.fe ? (af.sU(!1), fd && af.ux && af.sW(!0), this.uy()) : (ut = -1, uv(), iv && 1 === jE && !kK && dw(1)), b7.d2 = !0
	}, this.uy = function() {
		(iv || fd) && 1 === jE && (s.jD(!0), kK || setTimeout(function() {
			b2.rI()
		}, 0), dw(0))
	}, this.g3 = function(g4, g5) {
		var uD = uz(g4, g5);
		if (this.fe) {
			if (kN) return 0 <= uD && af.sU(!1), !fd;
			if (0 === uD) u1();
			else if (1 === uD) this.sV();
			else if (2 === uD) v0(uD) && (aa.fl.m5(), this.sV());
			else if (3 === uD) v0(uD) && (b5.sV(), b7.d2 = !0, ac.sH) && ac.oH();
			else if (4 === uD) v0(uD) && (ac.sH ? ac.oH() : ac.show(), b5.sH) && b5.sV();
			else {
				if (!(iv || 1 !== jE || fd || b5.sH || ac.sH) && (j.sV(), 1)) return !1;
				al.sE(g4, g5) || i.sF(g4, g5)
			}
			return !0
		}
		return 0 === uD && (this.sV(), !0)
	}, this.rq = function(g4, g5) {
		g4 = uz(g4, g5);
		g4 !== ut && (ut = g4, this.fe || uv(), b7.d2 = !0)
	}, this.gA = function() {
		var g0;
		this.fe ? (g0 = Math.floor(5.5 * i0), gB.setTransform(1, 0, 0, 1, nZ, o.ji), gB.fillStyle = ae.kn, gB.fillRect(0, 0, g0, i0), 0 === ut ? (gB.fillStyle = ae.ks, gB.fillRect(0, 0, 4 * i0, i0)) : 1 === ut && (gB.fillStyle = ae.ks, gB
				.fillRect(4 * i0, 0, Math.floor(1.5 * i0), i0)), gB.fillStyle = ae.gE, gB.fillRect(0, 0, g0, 1), gB.fillRect(0, 0, 1, i0), gB.fillRect(4 * i0, 0, 1, i0), gB.fillRect(0, i0 - 1, g0, 1), gB.fillRect(g0 - 1, 0, 1, i0), gB.font =
			fz, gB.textBaseline = gC, gB.textAlign = gD, gB.fillText(us[0], 2 * i0, .54 * i0), g0 = .4 * i0, j.vA(nZ + 4 * i0 + (1.5 * i0 - g0) / 2, o.ji + .3 * i0, g0), v2(2) && vB(1, v0(2) ? ae.gE : ae.kz), v2(3) && vB(2, v0(3) ? ae.gE : ae
				.kz), v2(4) && vB(3, ae.gE), gB.setTransform(1, 0, 0, 1, 0, 0)) : gB.drawImage(gN, nZ, o.ji)
	}, this.v7 = function(player) {
		return 0 !== h5[player] && 2 !== jE && a4.uX(player)
	}, this.vA = function(jh, ji, et) {
		gB.setTransform(1, 0, 0, 1, jh, ji), gB.lineWidth = t3, gB.strokeStyle = ae.gE, gB.beginPath(), gB.moveTo(0, 0), gB.lineTo(et, et), gB.moveTo(0, et), gB.lineTo(et, 0), gB.stroke()
	}
}

function bR() {
	var vC, i0, t2, vD, vE, vF, vG, vH, vI;

	function g9() {
		return o.va(k.vW()) ? aN.sH ? o.ji - o.i0 - 2 * t2 : o.ji - t2 : af.va(k.vZ()) ? aN.sH ? af.g9() - o.i0 - 2 * t2 : af.g9() - t2 : aN.sH ? dg - o.i0 - (aR.vb() + 1) * t2 : dg - aR.vb() * nZ
	}

	function vN(dU, db, id, f0, vQ, vR, pM, vS, vT) {
		var ds, qI, vX, uF, ve, vf = void 0 !== vT,
			g0 = Math.floor(n.measureText(db, k.fz) + 1.5 * vD + (vf ? i0 : 1.5 * vD));
		if (b7.d2 = !0, df < g0 + t2 && !vf && 50 !== id && 20 < db.length) vX = Math.floor(.5 * db.length), vN(dU, db.substring(0, vX), id, f0, vQ, vR, pM, vS, vT), vN(dU, db.substring(vX), id, f0, vQ, vR, pM, vS, vT);
		else if (vX = g0 + (50 === id ? vE : 0), (uF = document.createElement("canvas")).width = g0, uF.height = i0, (qI = uF.getContext("2d", {
				alpha: !0
			})).font = k.fz, qI.textBaseline = gC, qI.textAlign = vg, qI.clearRect(0, 0, g0, i0), qI.fillStyle = vR, qI.fillRect(0, 0, g0, i0), qI.fillStyle = vQ, qI.fillText(db, Math.floor(1.5 * vD), Math.floor(i0 / 2)), vf && (vf = i0 / b3.g0, qI
				.imageSmoothingEnabled = !0, qI.setTransform(vf, 0, 0, vf, g0 - i0, 0), qI.drawImage(b3.uF[vT], 0, 0)), 0 === (ve = {
				dT: dU,
				db: db,
				id: id,
				player: f0,
				gN: uF,
				vQ: vQ,
				vR: vR,
				g0: g0,
				vX: vX,
				pM: pM,
				vS: vS,
				vT: vT
			}).dT || 0 < vC.length && 0 < vC[0].dT) vC.unshift(ve);
		else {
			for (ds = 1; ds < vC.length; ds++)
				if (0 < vC[ds].dT) return void vC.splice(ds, 0, ve);
			vC.push(ve)
		}
	}

	function vO(gQ, sz, hs) {
		return "rgb(" + gQ + "," + sz + "," + hs + ")"
	}

	function vh(id, w1) {
		for (var et = vC.length, ds = 0; ds < et; ds++) vC[ds].id === id && w1-- <= 0 && (vC.splice(ds, 1), ds--, et--)
	}

	function vi(id, player) {
		for (var w2 = !1, ds = vC.length - 1; 0 <= ds; ds--) vC[ds].id !== id || player !== ex && vC[ds].player !== player || (vC.splice(ds, 1), w2 = !0);
		return w2
	}

	function w7(db) {
		vN(340, db, 6, 0, vO(215, 245, 255), ae.kp, -1, !1)
	}

	function wF(player, wG) {
		return (iv || h4 <= player || wG || aR.jv.wH ? jz : wI)[player]
	}
	this.ch = function() {
		vG = de ? 7 : 12, vF = {
			qR: [vH = 0, 0, 0],
			vJ: [0, 0, 0],
			kG: [220, 180, 180],
			vK: [0, 0, 0],
			iU: [0, 0, 0]
		}, vC = [], this.resize(), kK && this.r2(0, 18), w7(aY.vV(37, [au.ir.pW[au.pX].name])), w7(aY.vV(38, [au.eT - 2, au.eU - 2])), w7(aY.vV(39, [aB.w8], {
			vs: [0]
		})), aB.w8 !== aB.w9 && w7(aY.vV(40, [aB.w9, aB.w9 / aB.w8], {
			vs: [0],
			wA: [1]
		})), 0 < aB.wB && w7(aY.vV(41, [aB.wB, aB.wB / aB.w8], {
			vs: [0],
			wA: [1]
		})), 0 < aB.wC && w7(aY.vV(42, [aB.wC, aB.wC / aB.w8], {
			vs: [0],
			wA: [1]
		})), 10 === it && vN(120, aY.vV(43), 6, 0, vO(235, 255, 120), ae.kp, -1, !1), this.vM()
	}, this.vM = function() {
		var ds, et;
		if (aX.iq)
			for (et = aX.ir.n4.length, ds = 0; ds < et; ds++) vN(400, aX.ir.n4[ds], 6, 0, vO(255, 255, 255), ae.kp, -1, !1)
	}, this.resize = function() {
		var vP, ds;
		if (i0 = (i0 = Math.floor((de ? .031 : .0249) * fs)) < 10 ? 10 : i0, this.fontSize = Math.floor(2 * i0 / 3), this.fz = fv + this.fontSize + fw, t2 = nZ, vD = Math.floor(i0 / 5), 0 < vC.length)
			for (vP = vC, vC = [], ds = vP.length - 1; 0 <= ds; ds--) vN(vP[ds].dT, vP[ds].db, vP[ds].id, vP[ds].player, vP[ds].vQ, vP[ds].vR, vP[ds].pM, vP[ds].vS, vP[ds].vT);
		this.vU()
	}, this.vU = function() {
		vI = document.createElement("canvas");
		var db = aY.vV(0),
			qI = (vE = n.measureText(db, this.fz) + 5 * vD, vI.height = i0, vI.width = vE, vI.getContext("2d", {
				alpha: !0
			}));
		qI.font = this.fz, qI.textBaseline = gC, qI.textAlign = gD, qI.clearRect(0, 0, vE, i0), qI.fillStyle = ae.l8, qI.fillRect(0, 0, vE, i0), qI.fillStyle = ae.gE, qI.fillText(db, Math.floor(vE / 2), Math.floor(i0 / 2))
	}, this.vW = function() {
		var et;
		return aN.sH ? aN.g0 : 0 === (et = vC.length) ? 0 : 1 === et ? vC[0].vX : vY(vC[0].vX, vC[1].vX)
	}, this.vZ = function() {
		var et = vC.length;
		return aN.sH ? et ? vY(aN.g0, vC[0].vX) : aN.g0 : 0 === et ? 0 : 1 === et ? vC[0].vX : 2 === et ? vY(vC[0].vX, vC[1].vX) : vY(vY(vC[0].vX, vC[1].vX), vC[2].vX)
	}, this.g3 = function(jh, ji) {
		for (var vc, vd = g9(), ds = vC.length - 1; 0 <= ds; ds--)
			if ((vc = vd - (ds + 1) * i0) <= ji && ji < vc + i0) return 50 === vC[ds].id ? jh >= jp - vE - t2 - vC[ds].g0 && (jp - vE - t2 <= jh ? aa.ff.mF(vC[ds].player) : f.kL(vC[ds].player, 800, !1, 0), !0) : jh >= jp - vC[ds].g0 - t2 && (
				736 === vC[ds].id ? window.open("https://" + vC[ds].db, "_blank") : vC[ds].vS && (f.kL(vC[ds].player, 800, !1, 0), 0 <= vC[ds].pM) && (vc = vC[ds].pM, vC[ds].pM = vC[ds].player, vC[ds].player = vc), !0);
		return !1
	}, this.rc = function(dU, db, id, f0, vQ, vR, pM, vS, vT) {
		vN(dU, db, id, f0, vQ, vR, pM, vS, vT)
	}, this.tZ = function(id) {
		for (var ds = vC.length - 1; 0 <= ds; ds--) vC[ds].id === id && (vC[ds].dT = 1)
	}, this.r2 = function(player, id) {
		0 === id ? (b4.er[player < h4 ? 4 : 3]++, n.hY(player, 0), vh(423, 0), vN(160, aY.vV(1, [jz[player]]), 423, player, "rgb(10,220,10)", ae.kp, -1, !1)) : 1 === id ? (vi(50, ex), n.hY(player, 1), vN(360, aY.vV(2, [jz[player]]), 0, player,
			"rgb(255,40,40)", ae.kp, -1, !0), f.kL(player, 2700, !1, 0)) : 2 === id ? (n.hY(player, 2), vN(0, aY.vV(3), 0, player, "rgb(10,255,255)", ae.kp, -1, !0), f.kL(player, 2700, !1, 0)) : 3 === id ? (n.hY(player, 2), vN(0, aY.vV(4, [
			jz[player]
		]), 0, player, ae.gE, ae.kp, -1, !0), f.kL(player, 2700, !1, 0)) : 4 === id ? (rD--, rC--, this.vj(1, player, player)) : 5 === id ? 2 !== h6[player] && a4.uX(eo) && (function(id, jR) {
			var ds, vv = 0,
				et = vC.length;
			for (ds = 0; ds < et; ds++)
				if (vC[ds].id === id && jR <= ++vv) return vC.splice(ds, 1)
		}(1, 5), a8.vl(player) ? vN(180, aY.vV(5, [jz[player]]), 1, player, vO(255, 200, 180), ae.kp, -1, !0) : (vh(573, 0), vN(180, aY.vV(6, [jz[player]]), 573, player, "rgb(255,70,10)", ae.kp, -1, !0))) : 18 === id ? vN(255, aY.vV(7), 18,
			0, ae.gE, ae.kp, -1, !1) : 21 === id ? vN(220, aY.vV(8), id, 0, "rgb(255,40,40)", ae.kp, -1, !1) : 22 === id ? this.vj(2, player, player) : 59 === id && vN(0, aY.vV(9), id, 0, ae.lV, ae.kp, 0, !1)
	}, this.vm = function(vn) {
		vN(200, aY.vV(10, [vn]), 94, 0, ae.gE, ae.lI, -1, !1)
	}, this.rA = function(r5) {
		if (eo === r5) wins_counter++, window.localStorage.setItem("fx_winCount", wins_counter);
		n.hY(r5, 2), vN(0, h4 < 100 ? aY.vV(11, [jz[r5]]) : aY.vV(12, [jz[r5]]), 3, r5, ae.gE, ae.kp, -1, !0), vN(0, "Your Current Win Count is Now " + wins_counter, 3, r5, ae.gE, ae.kp, -1, !0), f.kL(r5, 2700, !1, 0)
	}, this.ui = function(gp) {
		var vo = "(" + ao.gX(gp >> 2) + ", " + ao.gZ(gp >> 2) + ")",
			vS = !1,
			player = 0;
		a4.ev(gp) ? a4.f5(gp) ? vo = aY.vV(13, [vo]) : (player = a4.f4(gp), vo = aY.vV(14, [jz[player], ad.jx.jy(ep[player]), ad.jx.jy(fJ[player]), vo]), vS = !0) : vo = a4.uY(gp) ? aY.vV(15, [vo]) : aY.vV(16, [vo]), b7.d2 = !0, vh(55, 0), vN(
			220, vo, 55, player, ae.gE, ae.kp, -1, vS)
	}, this.uk = function(vp) {
		var ow = ap.j4,
			player = ow.vq[vp] >> 3;
		b7.d2 = !0, vh(55, 0), vN(220, aY.vV(17, [jz[player], ow.vr[vp]], {
			vs: [1]
		}), 55, player, ae.gE, ae.kp, -1, !0)
	}, this.ly = function(lg, vt, lz) {
		lg === eo ? vN(175, aY.vV(18, [jz[vt]]), 1001, vt, vO(200, 255, 210), ae.kp, -1, !0, lz) : this.vu(lg, lz)
	}, this.vu = function(lg, lz) {
		vh(1e3, 0), vN(175, aY.vV(19, [jz[lg]]), 1e3, lg, ae.gE, "rgba(5,60,25,0.9)", -1, !0, lz)
	}, this.r9 = function(r6) {
		var vn;
		r6 ? (vn = aY.vV(20), n.rR(aY.vV(21), 2, 1, 12), vN(0, vn, 40, 0, "rgb(10,220,10)", ae.kp, -1, !1)) : (vn = aY.vV(22), n.rR(aY.vV(23), 2, 0, 16), vN(0, vn, 41, 0, "rgb(200,80,80)", ae.kp, -1, !1)), f.kS(2700)
	}, this.qS = function(qR) {
		vN(300, qR[0].name + " [" + r7.qY(qR[0].qV) + "] vs " + qR[1].name + " [" + r7.qY(qR[1].qV) + "]", 65, 0, ae.jt, "rgba(100,255,255,0.75)", -1, !1)
	}, this.vw = function(vn) {
		vN(200, vn, 0, 0, "rgb(40,255,200)", "rgba(10,60,40,0.9)", -1, !1)
	}, this.vx = function() {
		vN(0, aY.vV(24), 247, 0, ae.lU, ae.kp, -1, !1)
	}, this.qa = function(qR, qX, qZ, vy) {
		1 === aP.j4.vz() && (vN(0, qR[0].name + ": " + r7.qY(qR[0].qV) + " -> " + qX, 66, 0, ae.gE, vy[0], -1, !1), vN(0, qR[1].name + ": " + r7.qY(qR[1].qV) + " -> " + qZ, 66, 1, ae.gE, vy[1], -1, !1))
	}, this.mG = function(player, id) {
		0 === id ? vi(50, player) ? (vN(128, aY.vV(25, [jz[player]]), 52, player, vO(180, 255, 180), ae.kp, -1, !0), a8.n1(player, 2, 255)) : vN(384, aY.vV(26, [jz[player]]), 51, player, vO(210, 210, 255), ae.kp, -1, !0) : vi(51, player) ? (vN(
			128, aY.vV(27, [jz[player]]), 52, player, ae.gE, "rgba(60,120,10,0.9)", -1, !0), a8.n1(player, 2, 255)) : (vN(384, aY.vV(28, [jz[player]]), 50, player, ae.gE, "rgba(90,90,90,0.9)", -1, !0), a8.n1(player, 2, 96))
	}, this.mK = function(qR, target) {
		var color = vO(210, 255, 210);
		1 < qR.length ? vN(230, aY.vV(29, [qR.length, jz[target]]), 66, target, color, ae.kp, -1, !0) : vN(230, aY.vV(30, [jz[qR[0]], jz[target]]), 66, qR[0], color, ae.kp, target, !0)
	}, this.w0 = function(player, target) {
		vN(230, aY.vV(31, [jz[player], jz[target]]), 66, player, ae.gE, "rgba(75,65,5,0.9)", target, !0)
	}, this.r1 = function(id, player) {
		vi(id, player)
	}, this.li = function() {
		var fu;
		100 <= ep[eo] || (-1 === (fu = function(id) {
			for (var ds = vC.length - 1; 0 <= ds; ds--)
				if (vC[ds].id === id) return ds;
			return -1
		}(143)) ? vN(80, aY.vV(32), 143, 0, ae.gE, ae.kp, -1, !1) : vC[fu].dT = 80)
	}, this.mB = function(w4, w5, player) {
		2 !== h6[eo] && (vN(200, aY.vV(33, [w4, jz[player]], {
			vs: [0]
		}), 30, player, "rgb(190,255,190)", ae.kp, -1, !0), w5) && vN(30, aY.vV(34, [w5], {
			vs: [0]
		}), 30, 0, ae.gE, ae.kp, -1, !1)
	}, this.w6 = function(w4, player) {
		2 !== h6[eo] && (vh(31, 0), 2 === h6[player] || h4 <= player ? vN(150, aY.vV(36, [jz[player], w4], {
			vs: [1]
		}), 31, player, ae.jt, "rgba(205,205,205,0.9)", -1, !0) : vN(150, aY.vV(35, [jz[player], w4], {
			vs: [1]
		}), 31, player, ae.jt, "rgba(205,255,205,0.9)", -1, !0))
	}, this.rE = function(wD) {
		for (var iU = b7.iT(), ds = 2; 0 <= ds; ds--) 0 < vF.vK[ds] && (wD || vF.iU[ds] < iU - 220) && this.wE(ds)
	}, this.wE = function(id) {
		var db, et = vF.vK[id],
			player = vF.qR[id];
		vF.vK[id] = 0, 1 === et ? (db = 0 === id ? aY.vV(47, [wF(player, !0), wF(vF.vJ[0], !0)]) : aY.vV(47 + id, [wF(player, !1)]), vh(7, 0), vN(vF.kG[id], db, 7, vF.vJ[id], ae.gE, ae.kp, -1, !0)) : 2 <= et && (db = aY.vV(44 + id, [wF(player,
			0 === id), et - 1]), vh(7, 0), vN(vF.kG[id], db, 7, player, ae.gE, ae.kp, -1, !1))
	}, this.vj = function(id, pL, pM) {
		var iU = b7.iT(),
			et = vF.vK[id] + 1;
		vF.vK[id]++, vF.qR[id] = pL, vF.vJ[id] = pM, 1 === et && (vF.iU[id] = iU), (1 === et && (rD < 32 || 2 === jE) || 1 < et && (vF.iU[id] < iU - 140 || 2 === jE)) && this.wE(id)
	}, this.iF = function() {
		for (var ge = (ge = vC.length - vG) <= 1 ? 1 : ge * ge, ds = vC.length - 1; 0 <= ds; ds--) 0 < vC[ds].dT && (vC[ds].dT -= ge, vC[ds].dT <= 0) && (b7.d2 = !0, vC.splice(ds, 1));
		! function() {
			var w1, ds;
			if (128 !== vH && !(++vH < 128))
				for (w1 = 5, ds = iW - 1; 0 <= ds; ds--) 1 === h6[iX[ds]] && 0 < w1-- && vN(240, aY.vV(50, [jz[iX[ds]]]), 1, iX[ds], ae.jt, "rgba(255,255,255,0.75)", -1, !0)
		}(), this.rE(!1)
	}, this.gA = function() {
		for (var pi, ji = g9(), ds = vC.length - 1; 0 <= ds; ds--) pi = ji - (ds + 1) * i0, 50 === vC[ds].id ? (gB.drawImage(vC[ds].gN, jp - vC[ds].g0 - vE - t2, pi), gB.drawImage(vI, jp - vE - t2, pi)) : gB.drawImage(vC[ds].gN, jp - vC[ds].g0 -
			t2, pi)
	}
}

function cs() {
	this.g0 = 0, this.i0 = 0, this.qN = 0, this.wK = 0, this.wL = 0, this.fontSize = 0, this.fu = -1, this.us = ["Accept Cookies", "More Information", "Decline"], this.colors = ["rgba(0,255,0,0.4)", "rgba(0,0,255,0.4)", "rgba(255,0,0,0.4)"], this
		.sH = !1, this.ch = function() {
			this.resize(), this.sH = dV < 5 && !dR && 0 === a5.dn()
		}, this.resize = function() {
			this.g0 = Math.floor(2.8 * Math.floor((de ? .09 : .062) * fs)), this.i0 = Math.floor(+this.g0), this.qN = Math.floor(.06 * this.g0), this.qO = this.g0 - 2 * this.qN, this.wK = this.qN, this.wL = (this.i0 - (this.us.length + 1) * this
				.wK) / this.us.length, this.fontSize = Math.floor(.3 * this.wL)
		}, this.g3 = function(g4, g5) {
			return !!this.sH && -1 !== (g4 = this.wM(g4, g5)) && (0 === g4 ? (a5.wN(2), this.sH = !1) : 1 === g4 ? az.ch(am.wO, !0) : 2 === g4 && (a5.wN(1), this.sH = !1), b7.d2 = !0)
		}, this.rq = function(g4, g5) {
			var dU;
			return !!this.sH && (dU = this.fu, this.fu = this.wM(g4, g5), dU !== this.fu && (b7.d2 = !0), -1 !== this.fu)
		}, this.wM = function(g4, g5) {
			return g4 -= g6, g5 -= Math.floor(g7 - this.i0 - g6), g4 < 0 || g5 < 0 || g4 >= this.g0 || g5 >= this.i0 ? -1 : (g4 = Math.floor((g5 - .5 * this.wK) / ((this.i0 - this.wK) / this.us.length))) < 0 ? 0 : g4 >= this.us.length ? this.us
				.length - 1 : g4
		}, this.gA = function() {
			this.sH && this.wP()
		}, this.wP = function() {
			var jh = g6,
				ji = Math.floor(g7 - this.i0 - g6);
			gB.setTransform(1, 0, 0, 1, jh, ji), gB.fillStyle = ae.kp, gB.fillRect(0, 0, this.g0, this.i0), gB.textBaseline = gC, gB.textAlign = gD, gB.strokeStyle = ae.gE, gB.font = fv + this.fontSize + fw, gB.strokeRect(0, 0, this.g0, this.i0);
			for (var ds = this.us.length - 1; 0 <= ds; ds--) gB.setTransform(1, 0, 0, 1, jh + this.qN, ji + this.wK + ds * (this.wK + this.wL)), gB.fillStyle = this.colors[ds], gB.fillRect(0, 0, this.qO, this.wL), this.fu === ds && (gB.fillStyle = ae
				.kv, gB.fillRect(0, 0, this.qO, this.wL)), gB.fillStyle = ae.gE, gB.fillText(this.us[ds], this.qO / 2, .54 * this.wL), gB.strokeRect(0, 0, this.qO, this.wL);
			gB.setTransform(1, 0, 0, 1, 0, 0)
		}
}

function bS() {
	var wQ, wR, wS, g0, i0, font;

	function wW(wX) {
		return wX < 10 ? "0" + wX : String(wX)
	}
	this.ch = function() {
		void 0 === g0 && this.resize(), this.setTime()
	}, this.resize = function() {
		g0 = Math.floor((de ? .53 : .36) * fs), i0 = Math.floor(.065 * g0), font = fv + Math.floor(.9 * i0) + fw, wS--, this.setTime()
	}, this.iF = function() {
		this.setTime() && (b7.d2 = !0)
	}, this.setTime = function() {
		var dU = new Date,
			wU = dU.getUTCMinutes(),
			dU = dU.getUTCSeconds();
		return wR = 3600 - 60 * wU - dU, wR %= 900, wQ = "Next Contest: " + wW(Math.floor(wR / 60)) + ":" + wW(wR % 60), wS !== (wS = 60 * wU + dU) && (g0 = n.measureText(wQ, font), g0 += Math.floor(.4 * i0), !0)
	}, this.gA = function() {
		gB.lineWidth = 1 + Math.floor(i0 / 15), 7 === x.sR() && aL.wY() + 2 * g6 > .5 * (g7 - g0) ? gB.translate(jp - i0, Math.floor(aL.wY() + 2 * g6 + g0)) : gB.translate(jp - i0, Math.floor(.5 * (g7 + g0))), gB.rotate(-Math.PI / 2), gB
			.fillStyle = ae.gE, gB.fillRect(0, 0, g0, i0), gB.strokeStyle = ae.jt, gB.strokeRect(0, 0, g0, i0 + 10), gB.fillStyle = ae.jt, gB.font = font, gB.textBaseline = gC, gB.textAlign = gD, gB.fillText(wQ, Math.floor(g0 / 2), Math.floor(
				.59 * i0)), gB.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function cp() {
	this.wZ = 10, this.wa = 50, this.wb = 50, this.wc = 8, this.wd = this.wa + this.wb, this.dt = this.wa + this.wb + this.wc, this.g0 = 72, this.we = 0, this.wf = 0, this.uF = new Array(this.dt), this.wg = 8, this.wh = new Array(this.wa + this.wb),
		this.wi = new Array(this.wa + this.wb), this.jo = 0, this.jq = 0, this.zoom = 1, this.wj = .2, this.uW = 0, this.du = null, this.wk = null, this.sH = !1, this.ch = function() {
			var ds, wl, wm;
			for (this.du = new Array(this.dt), this.wk = new Array(this.dt), wl = a3.uG("emojis"), this.wn(), ds = this.uW = 0; ds < this.wa; ds++) this.wo(ds, ds, wl);
			for (wm = a3.uG("flags"), ds = 0; ds < this.wb; ds++) this.wo(ds, this.wa + ds, wm);
			this.wp(), this.uF[26] = this.wq(25, 2), this.wr()
		}, this.wo = function(ds, hi, iU) {
			this.du[hi] = !1, this.wk[hi] = 0;
			var gN = document.createElement("canvas"),
				qI = (gN.width = this.g0, gN.height = this.g0, gN.getContext("2d", {
					alpha: !0
				}));
			qI.clearRect(0, 0, this.g0, this.g0), 23 === hi ? qI.drawImage(i.uB()[4].gN[1], 0, 0) : 36 === hi ? qI.drawImage(i.uB()[0].gN[2], 0, 0) : 49 === hi ? qI.drawImage(i.uB()[2].gN[1], 0, 0) : qI.drawImage(iU, this.g0 * ds % (ds === hi ? this
				.wZ * this.g0 : 4e3), ds === hi ? el(ds, this.wZ) * this.g0 : 0, this.g0, this.g0, 0, 0, this.g0, this.g0), this.uF[hi] = gN
		}, this.wp = function() {
			this.uF[this.dt - 5] = this.uF[26], this.uF[this.dt - 4] = this.wq(this.dt - 5, 2), this.uF[this.dt - 1] = this.wq(this.dt - 5, 1), this.uF[this.dt - 8] = this.wq(this.dt - 4, 1), this.uF[this.dt - 3] = this.uF[39], this.uF[this.dt - 2] =
				this.wq(this.dt - 3, 1), this.uF[this.dt - 7] = this.wq(this.dt - 2, 1), this.uF[this.dt - 6] = this.wq(this.dt - 7, 1)
		}, this.wq = function(ds, ws) {
			var gN = document.createElement("canvas"),
				qI = (gN.width = this.g0, gN.height = this.g0, gN.getContext("2d", {
					alpha: !0
				}));
			return qI.clearRect(0, 0, this.g0, this.g0), qI.rotate(ws * Math.PI / 2), qI.drawImage(this.uF[ds], 1 === ws ? 0 : -this.g0, -this.g0), gN
		}, this.wr = function() {
			var ds, dy, gI = dh().split("");
			if (2 * gI.length !== this.dt) this.uW = 0;
			else {
				for (ds = 0; ds < this.dt; ds += 2) dy = parseInt(gI[Math.floor(ds / 2)]), this.du[ds] = dy % 2 == 1, this.du[ds + 1] = 1 < dy;
				this.wt()
			}
		}, this.wt = function() {
			for (var ds = this.uW = 0; ds < this.dt; ds++) this.du[ds] && (this.wk[this.uW++] = ds)
		}, this.un = function() {
			8 === this.uW && this.wk[0] === this.wd && this.wt()
		}, this.wu = function() {
			var ds;
			for (this.uW = this.wc, ds = 0; ds < this.wc; ds++) this.wk[ds] = this.wd + ds
		}, this.wn = function() {
			this.we = Math.floor((de ? .075 : .0468) * fs), this.zoom = this.we / this.g0, this.wf = (1 + this.wj) * this.we
		}, this.show = function(g4, g5) {
			var ds, ww, wv, qN, jm, jn;
			if (this.uW < 1) this.sH = !1;
			else {
				for (wv = (wv = Math.floor(jp / this.wf)) < 3 ? 3 : wv > this.wg ? this.wg : wv, ww = this.uW > wv ? wv : this.uW, wv = 1 + el(this.uW - 1, ww), qN = Math.floor(ww * this.wf), jm = Math.floor(g4 - qN / 2), jm = (jm = jp < jm + qN ?
						jp - qN : jm) < 0 ? 0 : jm, jn = Math.floor(g5 - this.wf / 2), g4 = Math.floor(wv * this.wf), jn = (jn = g7 < jn + g4 ? g7 - g4 : jn) < 0 ? 0 : jn, this.jo = jm + qN, this.jq = jn + g4, ds = 0; ds < this.uW; ds++) this.wh[
					ds] = Math.floor(jm + ds % ww * this.wf), this.wi[ds] = Math.floor(jn + el(ds, ww) * this.wf);
				this.sH = !0
			}
		}, this.g3 = function(g4, g5, player) {
			return !!this.sH && (this.sH = !1, this.um(g4, g5) && this.wy(g4, g5, player) && this.sH || (this.un(), i.oH()), !0)
		}, this.um = function(g4, g5) {
			return !(g4 < this.wh[0] || g5 < this.wi[0] || g4 >= this.jo || g5 >= this.jq)
		}, this.wy = function(g4, g5, player) {
			for (var ds = this.uW - 1; 0 <= ds; ds--)
				if (g4 >= this.wh[ds] && g5 >= this.wi[ds] && g4 <= this.wh[ds] + this.wf && g5 <= this.wi[ds] + this.wf) return 39 === this.wk[ds] ? (this.wu(), this.show(g4, g5)) : (player === eo ? aa.fl.ly(this.wk[ds]) : aa.ff.mD(this.wk[ds],
					player), this.wt()), !0;
			return !1
		}, this.wz = function(ds) {
			return ds < 16 || 40 <= ds && ds < 47
		}, this.x0 = function(ds) {
			return ds >= this.wa && ds < this.wa + this.wb
		}, this.gA = function() {
			gB.imageSmoothingEnabled = !0;
			for (var gap = this.wj * this.we / 2, ds = this.uW - 1; 0 <= ds; ds--) gB.setTransform(this.zoom, 0, 0, this.zoom, this.wh[ds] + gap, this.wi[ds] + gap), gB.drawImage(this.uF[this.wk[ds]], 0, 0);
			gB.imageSmoothingEnabled = !1, gB.setTransform(1, 0, 0, 1, 0, 0)
		}, this.x1 = function(jh, ji, lz) {
			gB.imageSmoothingEnabled = !0, gB.setTransform(this.zoom, 0, 0, this.zoom, jh, ji), gB.drawImage(this.uF[lz], 0, 0), gB.imageSmoothingEnabled = !1, gB.setTransform(1, 0, 0, 1, 0, 0)
		}
}
var nZ, x7, g6, t3, sA, sB, g8, hB, hA, hC, xx, jO, a05, jz, wI, h5, i4, i7, i3, i6, fJ, py, ep, eu, fB, fC, fF, h6, iX, iW, rp, gB, df, dg, xB, fs, jp, g7, nP, de, qG, a1e, tx, ty, gC = "middle",
	x2 = "bottom",
	gD = "center",
	vg = "left",
	x3 = "right",
	fv = "bold ",
	x4 = "italic ",
	x5 = "normal ",
	fw = "px " + settings.fontName,
	x6 = [fv, x4 + fv, fv],
	x8 = ["wss://", "/s50/", "/s51/", "/s52/"];

function cz() {
	x9(), (g8 = new xA).ch()
}

function x9() {
	t3 = .0022 * (1 + .5 * de) * fs, g6 = (g6 = Math.floor((de ? .02 : .01152) * fs)) < 2 ? 2 : g6, nZ = (nZ = Math.floor((de ? .0114 : .01296) * fs)) < 2 ? 2 : nZ, x7 = (x7 = Math.floor(.005 * xB)) < 1 ? 1 : x7
}

function xC(qI, g0, i0) {
	qI.fillStyle = ae.gE, qI.fillRect(0, 0, g0, 1), qI.fillRect(0, i0 - 1, g0, 1), qI.fillRect(0, 0, 1, i0), qI.fillRect(g0 - 1, 0, 1, i0)
}

function bT() {
	var vC, xD, fz, i0, xE;

	function xK(ds) {
		var g0 = vC[ds].gN.width,
			qN = (vC[ds].qI.clearRect(0, 0, g0, i0), vC[ds].qI.fillStyle = 0 !== vC[ds].id ? "rgba(33,33,120,0.83)" : vC[ds].hb === ex ? "rgba(88,88,88,0.83)" : vC[ds].hb < h4 ? "rgba(100,70,33,0.83)" : "rgba(33,100,80,0.83)", vC[ds].qI.fillRect(0,
				0, g0, i0), xC(vC[ds].qI, g0, i0), xD + 2 * i0 < g0 && (vC[ds].qI.fillRect(g0 - xD - i0, 0, 1, i0), vC[ds].qI.fillText(jz[vC[ds].hb], Math.floor((g0 - xD) / 2), Math.floor(.57 * i0))), 0 !== vC[ds].id ? 0 : i0);
		vC[ds].qI.fillText(ad.jx.jy(vC[ds].hc), Math.floor(g0 - xD / 2 - qN), Math.floor(.57 * i0)),
			function(ds, g0, qN) {
				vC[ds].qI.fillStyle = ae.kt;
				var xP = Math.floor(xD * vC[ds].hc / vC[ds].xQ);
				vC[ds].qI.fillRect(Math.floor(g0 - xD - qN), i0 - xE, xP, xE)
			}(ds, g0, qN), 0 === vC[ds].id ? (xN(ds, g0), function(ds, g0) {
				vC[ds].qI.strokeStyle = ae.l3, vC[ds].qI.fillRect(i0, 0, 1, i0);
				g0 -= i0;
				vC[ds].qI.beginPath(), vC[ds].qI.moveTo(Math.floor(.3 * i0 + g0), Math.floor(i0 / 2)), vC[ds].qI.lineTo(Math.floor(i0 - .3 * i0 + 0 + g0), Math.floor(i0 / 2)), vC[ds].qI.stroke(), vC[ds].qI.beginPath(), vC[ds].qI.moveTo(Math
					.floor(i0 / 2 + g0), Math.floor(.3 * i0)), vC[ds].qI.lineTo(Math.floor(i0 / 2 + g0), Math.floor(i0 - .3 * i0 + 0)), vC[ds].qI.stroke()
			}(ds, g0)) : xN(ds, 2 * i0)
	}

	function xN(ds, g0) {
		vC[ds].qI.strokeStyle = vC[ds].xR ? ae.kz : ae.lD, vC[ds].qI.fillStyle = ae.gE, vC[ds].qI.fillRect(g0 - i0, 0, 1, i0);
		var xS = Math.floor(i0 / 12),
			xS = (vC[ds].qI.lineWidth = xS < 3 ? 3 : xS, vC[ds].qI.lineCap = "round", .35);
		g0 = i0 + 1, vC[ds].qI.beginPath(), vC[ds].qI.moveTo(Math.floor(g0 - xS * i0 + 0), Math.floor(xS * i0)), vC[ds].qI.lineTo(Math.floor(g0 - i0 + xS * i0), Math.floor(i0 - xS * i0 + 0)), vC[ds].qI.stroke(), vC[ds].qI.beginPath(), vC[ds].qI
			.moveTo(Math.floor(g0 - i0 + xS * i0), Math.floor(xS * i0)), vC[ds].qI.lineTo(Math.floor(g0 - xS * i0 + 0), Math.floor(i0 - xS * i0 + 0)), vC[ds].qI.stroke()
	}

	function xd(et) {
		for (var hc, ds = et - 1; 0 <= ds; ds--) hc = a6.ef(eo, ds), vC[ds].hc !== hc && (vC[ds].hc = hc, vC[ds].xQ = hc > vC[ds].xQ ? hc : vC[ds].xQ, vC[ds].xL = !0)
	}

	function xJ(xf) {
		xf.gN = document.createElement("canvas"), au.p5.font = fz;
		var g0 = xD;
		xf.hb < ex && 0 === xf.id && (g0 += Math.floor(au.p5.measureText(jz[xf.hb] + "000").width)), g0 += i0, 0 === xf.id && (g0 += i0), xf.gN.width = g0, xf.gN.height = i0, xf.qI = xf.gN.getContext("2d", {
			alpha: !0
		}), xf.qI.font = fz, xf.qI.textBaseline = gC, xf.qI.textAlign = gD
	}

	function xZ(ds) {
		return r.xh() ? jp - vC[ds].gN.width - nZ : r.jh
	}

	function xa(ds) {
		return Math.floor(2 * nZ + (r.xh() ? t.i0 + nZ : 0) + r.i0 + ds * (1.3 * i0))
	}
	this.ch = function() {
		vC = [], this.resize()
	}, this.resize = function() {
		fz = k.fz, i0 = k.fontSize + 5, i0 = Math.floor(1.25 * i0), de && (i0 = Math.floor(1.25 * i0)), xE = Math.floor(.15 * i0), au.p5.font = fz, xD = Math.floor(au.p5.measureText("02 000 000 0000").width);
		for (var ds = vC.length - 1; 0 <= ds; ds--) xJ(vC[ds]), xK(ds)
	}, this.jD = function() {
		for (var ds = vC.length - 1; 0 <= ds; ds--) vC[ds].xL && (vC[ds].xL = !1, xK(ds))
	}, this.g3 = function(g4, ji) {
		if (2 !== jE && 0 !== h5[eo] && !fd && a4.uX(eo))
			for (var xU, xV, xW, xX = de ? i0 : 0, xY = de ? Math.floor(.15 * i0) : 0, ds = vC.length - 1; 0 <= ds; ds--)
				if (xU = xZ(ds), xV = xa(ds), xW = vC[ds].gN.width, xV - xY <= ji && ji <= xV + i0 + xY) {
					if (xU - xX <= g4 && g4 <= xU + i0 + xX) return vC[ds].xR || (vC[ds].xL = !0, vC[ds].xR = !0, 0 === vC[ds].id && aa.fl.lw(vC[ds].hb)), !0;
					if (0 === vC[ds].id && xU + xW - i0 - xX <= g4 && g4 <= xU + xW + xX) return aa.fl.fm(o.fn(), vC[ds].hb), !0
				} return !1
	}, this.iF = function() {
		var et;
		2 !== jE && 0 !== h5[eo] && !fd && a4.uX(eo) && (function(et) {
			if (vC.length !== et) return 1;
			for (var ds = et - 1; 0 <= ds; ds--)
				if (vC[ds].id !== a6.eZ(eo, ds) || vC[ds].hb !== a6.ee(eo, ds)) return 1;
			return
		}(et = a6.eY(eo)) && function(et) {
			var ds, id, hb, hs, hc, vP = [];
			loop: for (ds = 0; ds < et; ds++) {
				for (id = a6.eZ(eo, ds), hb = a6.ee(eo, ds), hs = 0; hs < vC.length; hs++)
					if (vC[hs].id === id && vC[hs].hb === hb) {
						vP.push(vC.splice(hs, 1)[0]);
						continue loop
					} hc = a6.ef(eo, ds), xJ(hc = {
					hb: hb,
					hc: hc,
					xQ: hc,
					id: id,
					xL: !0,
					xR: !1,
					gN: null,
					qI: null
				}), vP.push(hc)
			}
			vC = vP
		}(et), xd(et))
	}, this.xg = function(f0) {
		for (var et = Math.min(vC.length, a6.eY(eo)), ds = 0; ds < et; ds++)
			if (vC[ds].hb === f0) return void(vC = [])
	}, this.gA = function() {
		if (0 !== h5[eo] && a4.uX(eo) && !fd)
			for (var ds = vC.length - 1; 0 <= ds; ds--) gB.drawImage(vC[ds].gN, xZ(ds), xa(ds))
	}
}

function bU() {
	var vC, id, xi, xj, i0, fz, fontSize, xk, wQ, xl, xm, xn, gN, qI, kB, xo;

	function xv() {
		gB.drawImage(gN, nZ + (hV ? nZ + b9.xw() : 0), xx + 2 * nZ)
	}

	function xp() {
		gN.width = vC[0].width + xm, gN.height = i0 + xm, (qI = gN.getContext("2d", {
				alpha: !0
			})).clearRect(0, 0, vC[0].width + xm, i0 + xm), qI.translate(Math.floor(xm / 2), Math.floor(xm / 2)), qI.lineWidth = xm, qI.fillStyle = 1 === vC[0].xu ? ae.kw : ae.kp, xy(), qI.fill(), qI.strokeStyle = 1 === vC[0].xu ? ae.jt : ae.gE,
		xy(), qI.stroke(), qI.textAlign = gD, qI.textBaseline = gC, qI.fillStyle = 1 === vC[0].xu ? ae.jt : ae.gE, qI.font = fz[0], qI.fillText(wQ[vC[0].xt], Math.floor(vC[0].width / 2), Math.floor(.72 * xk[0] * i0)), qI.font = fz[1], qI.fillText(vC[
				0].db, Math.floor(vC[0].width / 2), Math.floor((xk[0] + .48 * xk[1]) * i0))
	}

	function xy() {
		qI.beginPath(), qI.moveTo(xn, 0), qI.lineTo(vC[0].width - xn, 0), qI.lineTo(vC[0].width, xn), qI.lineTo(vC[0].width, i0 - xn), qI.lineTo(vC[0].width - xn, i0), qI.lineTo(xn, i0), qI.lineTo(0, i0 - xn), qI.lineTo(0, xn), qI.closePath()
	}
	this.ch = function() {
		id = 4, xi = xj = kB = 0, vC = [], fz = new Array(2), fontSize = new Array(2), xk = new Array(2), wQ = ["YOU ERASED", "YOU WERE ERASED BY", "THE GAME WAS WON BY", "MAP:"], xk[0] = .3, xk[1] = .7, xl = new Array(4), gN = document
			.createElement("canvas"), xo = b7.dT + 2e3, this.resize()
	}, this.resize = function() {
		var ds, g0;
		for (i0 = Math.floor((de ? .0725 : .058) * fs), fontSize[0] = Math.floor(.85 * xk[0] * i0), fontSize[1] = Math.floor(.85 * xk[1] * i0), fz[0] = fv + fontSize[0] + fw, fz[1] = fv + fontSize[1] + fw, ds = xl.length - 1; 0 <= ds; ds--) xl[
			ds] = this.measureText(wQ[ds] + "000", fz[0]);
		if (xm = Math.floor(1 + .05 * i0), xn = Math.floor(.2 * i0), 0 < vC.length) {
			for (ds = vC.length - 1; 0 <= ds; ds--) g0 = this.measureText(vC[ds].db + "00", fz[1]), vC[ds].width = g0 < xl[ds] ? xl[ds] : g0;
			xp()
		}
	}, this.iF = function() {
		0 !== id && (4 === id ? b7.dT > xo && (id = 0, 1 === jE) && n.rR(au.ir.pW[au.pX].name, 3, 1, 9) : (1 === id ? (0 === xi && (xp(), xi = 1e-4), 1 <= (xi += .002 * (b7.dT - kB)) && (xj = 0, id = 2, xi = 1), b7.d2 = !0) : 2 === id ? ((xj += (
			b7.dT - kB) / 1e3) > vC[0].kG || 1 < xj && 1 < vC.length) && (id = 3) : 3 === id && ((xi -= .002 * (b7.dT - kB)) <= 0 && (xi = 0, vC.shift(), id = 0 < vC.length ? 1 : 0), b7.d2 = !0), kB = b7.dT))
	}, this.measureText = function(db, fz) {
		return gB.font = fz, Math.floor(gB.measureText(db).width)
	}, this.hY = function(xs, ds) {
		this.rR(jz[xs], ds, 1, 0 === ds ? 3 : 7)
	}, this.rR = function(db, xt, xu, kG) {
		var g0 = (g0 = this.measureText(db + "00", fz[1])) < xl[xt] ? xl[xt] : g0;
		vC.push({
			db: db,
			width: g0,
			xt: xt,
			xu: xu,
			kG: kG
		}), 0 === id && (xi = 0, id = 1, kB = b7.dT)
	}, this.gA = function() {
		0 !== id && 0 !== xi && (xi < 1 ? (gB.globalAlpha = xi, xv(), gB.globalAlpha = 1) : xv())
	}
}

function c6() {
	var i0, gN, qI, xz, y0, y1, y2, y3, xL, y4, y5, y6, y7, y8;

	function fx() {
		var g0 = aN.g0,
			ow = (xL = !1, qH(qI, g0, i0), Math.floor(g0 / 2));
		1 === y0 ? (qI.fillStyle = ae.l5, qI.fillRect(ow, 0, ow, i0)) : -1 === y0 && (qI.fillStyle = ae.lG, qI.fillRect(0, 0, ow, i0)), qJ(qI, g0, i0, 2);
		var ow = (ow = Math.floor(.25 * i0)) < 2 ? 2 : ow,
			w8 = (qI.fillStyle = ae.kx, Math.floor((i0 - 4) * y1[1] / y2[1]));
		0 < w8 && qI.fillRect(2, i0 - 2 - w8, ow, w8), 0 < (w8 = Math.floor((i0 - 4) * y1[0] / y2[0])) && qI.fillRect(g0 - 2 - ow, i0 - 2 - w8, ow, w8);
		ow = (ow = Math.floor(i0 / 8)) < 2 ? 2 : ow;
		qL(qI, Math.floor(.4 * i0), 0, i0, ow, .5, !1), qL(qI, Math.floor(g0 - 1.4 * i0), 0, i0, ow, .5, !0), qI.drawImage(xz, Math.floor((g0 - xz.width) / 2), 3)
	}

	function yA() {
		xL = !0, y4 = 140, y0 = 0, y3 = [], aN.sH = !1, k.r1(247, 0), y1[0] = y1[1] = 0
	}

	function g9() {
		return o.va(k.vW()) ? o.ji - i0 - nZ : af.va(k.vZ()) ? af.g9() - i0 - nZ : dg - i0 - aR.vb() * nZ
	}
	this.sH = !1, this.g0 = 0, this.ch = function() {
		y6 = y7 = 0, this.sH = !1, xL = y8 = !1, y4 = 140, y1 = [y0 = 0, 0], y2 = [1, 1], y3 = [], y5 = new Uint32Array(10), this.resize()
	}, this.resize = function() {
		i0 = o.i0, this.g0 = 4 * i0, this.y9(), (gN = document.createElement("canvas")).width = this.g0, gN.height = i0, qI = gN.getContext("2d", {
			alpha: !0
		}), fx()
	}, this.jD = function() {
		xL && fx()
	}, this.y9 = function() {
		var gO, xm, ow, wK = (wK = i0 - 6) < 6 ? 6 : wK;
		void 0 !== xz && xz.width === wK || ((xz = document.createElement("canvas")).width = wK, xz.height = wK, (gO = xz.getContext("2d", {
				alpha: !0
			})).clearRect(0, 0, wK, wK), xm = Math.floor(wK / 8), gO.lineWidth = xm = xm < 1 ? 1 : xm, gO.strokeStyle = ae.gE, ow = Math.floor(wK / 2), wK = Math.floor((wK - xm) / 2), gO.beginPath(), gO.arc(ow, ow, wK, 0, 2 * Math.PI), gO
			.moveTo(ow, ow - wK), gO.lineTo(ow, ow + wK), gO.moveTo(ow + Math.cos(.78 * Math.PI) * wK, ow + Math.cos(.28 * Math.PI) * wK), gO.lineTo(ow, ow), gO.lineTo(ow + Math.cos(.22 * Math.PI) * wK, ow + Math.cos(1.72 * Math.PI) * wK), gO
			.stroke())
	}, this.g3 = function(jh, ji) {
		var jn;
		return !(jh < df - this.g0 - nZ || ji < (jn = g9()) || jn + i0 < ji || (fd || aa.fl.m2(jh > df - nZ - this.g0 / 2 ? 1 : 0), 0))
	}, this.iF = function() {
		if (0 < y7) 0 === --y7 && yA();
		else if (this.sH) 270 == --y4 && 2 <= y6 && function() {
			var ds;
			for (ds = iW - 1; 0 <= ds; ds--)
				if (a4.uX(iX[ds])) return;
			return 1
		}() && (xL = !0, y1[0] += y2[0]), 180 === y4 && 3 * y1[0] < y2[0] ? yA() : y1[0] >= y2[0] ? y8 ? at.qw.qz() : at.qw.r4(-1) : y1[1] >= y2[1] ? y7 = 4 : y4 <= 0 && yA();
		else if (function() {
				var ds;
				for (ds = 9; 0 <= ds; ds--) 12 < Math.abs(y5[ds] - fJ[jO[ds]]) && (y4 = 140), y5[ds] = fJ[jO[ds]];
				if (--y4 <= 0) return 1;
				return
			}()) {
			(y8 = yD()) && k.vx(), this.sH = !0, y4 = 360;
			var ds, dU = 0;
			for (ds = iW - 1; 0 <= ds; ds--) a4.uX(iX[ds]) && (dU += fJ[iX[ds]]);
			y2[0] = vY(el(3 * dU, 5), 1), hV && 9 !== it && (y2[0] = yF(vY(el(dU * (100 - el(100 * b9.rP(), te)), 100), 1), y2[0])), y2[1] = vY(dU - y2[0], 1), y6++
		}
	}, this.rB = function() {
		this.sH && y1[0] < y2[0] && yA()
	}, this.n2 = function(player, yH) {
		var ds, dU;
		if (this.sH) {
			for (ds = y3.length - 1; 0 <= ds; ds--)
				if (y3[ds] === player) return;
			y3.push(player), xL = !0, dU = iv ? y2[0] : fJ[player], yH ? y1[0] += dU : y1[1] += dU, player === eo && (y0 = yH ? 1 : -1)
		}
	}, this.gA = function() {
		var ji;
		this.sH && (ji = g9(), gB.drawImage(gN, df - this.g0 - nZ, ji))
	}
}

function bV() {
	var g0, jh, yI, gN, qI, sH, h9, yJ, fz, xL, yK = 11 / 12;

	function yM() {
		var xP = Math.floor(h9 * (g0 - 2 * yI)),
			yP = 1 + Math.floor(.0625 * o.i0),
			yQ = 1 + Math.floor(.3 * o.i0),
			wK = Math.floor(.55 * o.i0);
		qI.clearRect(0, 0, g0, o.i0), qI.fillStyle = ae.ko, qI.fillRect(0, 0, yI, o.i0), qI.fillRect(yI + xP, 0, g0 - yI - xP, o.i0), qI.fillStyle = h9 < 1 / 3 ? "rgba(" + Math.floor(3 * h9 * 130) + ",130,0,0.85)" : h9 < 2 / 3 ? "rgba(130," + (130 -
				Math.floor(3 * (h9 - 1 / 3) * 130)) + ",0,0.85)" : "rgba(130,0," + Math.floor(3 * (h9 - 2 / 3) * 130) + ",0.85)", qI.fillRect(yI, 0, xP, o.i0), qI.fillStyle = ae.gE, qI.fillRect(0, 0, g0, 1), qI.fillRect(0, o.i0 - 1, g0, 1), qI
			.fillRect(0, 0, 1, o.i0), qI.fillRect(yI, 0, 1, o.i0), qI.fillRect(yI + xP, 0, 1, o.i0), qI.fillRect(g0 - yI, 0, 1, o.i0), qI.fillRect(g0 - 1, 0, 1, o.i0), qI.fillRect(Math.floor(.25 * o.i0) + yQ, Math.floor((o.i0 - yP) / 2), o.i0 - 2 *
				yQ, yP), qI.fillRect(Math.floor(g0 - 1.25 * o.i0) + yQ, Math.floor((o.i0 - yP) / 2), o.i0 - 2 * yQ - yQ % 2, yP), qI.fillRect(Math.floor(g0 - 1.25 * o.i0) + Math.floor((o.i0 - yP) / 2), yQ, yP, o.i0 - 2 * yQ - yQ % 2), yJ = ad.ff.h8(
				eo, o.fn()), qI.fillText(ad.jx.jy(yJ) + " (" + ad.jx.tR(100 * h9, 0) + ")", Math.floor(.5 * g0), wK)
	}

	function yU(fq) {
		return !(1 < fq && 1 === h9 || (1 < fq && fq * h9 - h9 < 1 / 1024 ? fq = (h9 + 1 / 1024) / h9 : fq < 1 && h9 - fq * h9 < 1 / 1024 && (fq = (h9 - 1 / 1024) / h9), h9 = an.sp(h9 * fq, 1 / 1024, 1), yM(), 0))
	}

	function yV(g4) {
		return h9 !== (h9 = an.sp((g4 - jh - yI) / (g0 - 2 * yI), 1 / 1024, 1)) && (yM(), !0)
	}
	this.ji = 0, this.sI = !1, this.ch = function() {
		sH = !kK && !fd, xL = !1, h9 = .5, yJ = 0, this.sI = !1, this.resize()
	}, this.resize = function() {
		de && df < .8 * dg ? (this.i0 = Math.floor(.0536 * fs), g0 = df - 4 * nZ - this.i0) : (g0 = Math.floor((de ? .65 : .389) * fs), g0 += 12 - g0 % 12, this.i0 = Math.floor(g0 / 12)), yI = Math.floor(3 * this.i0 / 2), fz = fv + Math.floor(
			.5 * this.i0) + fw, (gN = document.createElement("canvas")).width = g0, gN.height = this.i0, (qI = gN.getContext("2d", {
			alpha: !0
		})).font = fz, qI.textBaseline = gC, ad.kj.textAlign(qI, 1), this.yL(), yM()
	}, this.yL = function() {
		jh = de && df < .8 * dg ? this.i0 + 3 * nZ : Math.floor((jp - g0) / 2), this.ji = g7 - this.i0 - aR.vb() * nZ
	}, this.jD = function() {
		xL && (xL = !1, yM())
	}, this.sH = function() {
		return !(!sH || j.fe && jh < Math.floor(nZ + 5.5 * this.i0))
	}, this.va = function(g1) {
		return !!this.sH() && df - g1 - nZ < jh + g0
	}, this.dQ = function() {
		sH = !fd
	}, this.yA = function() {
		sH = !1
	}, this.fn = function() {
		return an.sp(Math.floor(1024 * h9 + .5) - 1, 0, 1023)
	}, this.sP = function(g4, g5) {
		return this.sH() && jh < g4 && g4 < jh + g0 && g5 > this.ji
	}, this.g3 = function(g4, g5) {
		return !!this.sH() && !!o.sP(g4, g5) && (p.kO = !1, function(up, g4, g5) {
			if (function(g4, g5) {
					return jh < g4 && g4 < jh + yI && g5 > o.ji
				}(g4, g5)) return yU(yK);
			if (function(g4, g5) {
					return jh + g0 - yI < g4 && g4 < jh + g0 && g5 > o.ji
				}(g4, g5)) return yU(1 / yK);
			return up.sI = !0, yV(g4)
		}(this, g4, g5) && (b7.d2 = !0), !0)
	}, this.sY = function(kV) {
		0 !== jE && this.sH() && yU(kV) && (b7.d2 = !0)
	}, this.rt = function(deltaY) {
		var kV;
		return !(0 === deltaY || !this.sH()) && yU(kV = 0 < deltaY ? (kV = 400 / (400 + deltaY)) < yK ? yK : kV : 1 / yK < (kV = (400 - deltaY) / 400) ? 1 / yK : kV)
	}, this.rq = function(g4, g5) {
		return !!this.sI && yV(g4)
	}, this.sL = function() {
		this.sI = !1
	}, this.iF = function() {
		this.sH() && yJ !== ad.ff.h8(eo, this.fn()) && (xL = !0)
	}, this.gA = function() {
		this.sH() && gB.drawImage(gN, jh, this.ji)
	}
}

function cM() {
	var gN, qI, yW, font, yX = 0,
		yY = !1,
		yZ = [10, 5, 3, 2, 1.5, 1, .75, .5, .25],
		ya = 5;

	function wP() {
		if (yY) {
			var ds, et = yZ.length,
				wK = Math.floor(.5 * yW.i0),
				i0 = et * wK,
				jh = Math.floor(Math.floor(yW.jh) + .3 * yW.g0 - .5),
				ji = Math.floor(Math.floor(yW.ji) - i0),
				g0 = Math.floor(.4 * yW.g0 + 2.5);
			for (gB.fillStyle = ae.ko, gB.fillRect(jh, ji, g0, i0), gB.fillStyle = ae.lA, gB.fillRect(jh, ji + ya * wK, g0, wK), gB.fillStyle = ae.gE, gB.fillRect(jh, ji, 2, i0), gB.fillRect(jh, ji, g0, 2), gB.fillRect(jh + g0 - 2, ji, 2, i0), ds =
				1; ds < et; ds++) gB.fillRect(jh, ji + ds * wK, g0, 2);
			for (gB.fillStyle = ae.gE, ad.kj.textAlign(gB, 1), ad.kj.textBaseline(gB, 1), gB.font = ad.kj.oG(.6 * wK, 0), jh += .5 * g0, ds = 0; ds < et; ds++) gB.fillText(yn(ds), jh, ji + (ds + .6) * wK)
		}
		gB.drawImage(gN, Math.floor(yW.jh), Math.floor(yW.ji))
	}

	function fx(up) {
		var jh, jm, jn, wK;
		qI.clearRect(0, 0, Math.floor(yW.g0), Math.floor(yW.i0)), qI.fillStyle = ae.ko, qI.fillRect(0, 0, Math.floor(yW.g0), Math.floor(yW.i0)), kN && (qI.fillStyle = ae.lA, qI.fillRect(0, 0, Math.floor(.3 * yW.g0), Math.floor(yW.i0))), qI
			.fillStyle = ae.gE, qI.fillText("Hide UI", .15 * yW.g0, .5 * yW.i0), qI.fillRect(Math.floor(.3 * yW.g0 - .5), 0, 2, Math.floor(yW.i0)), jh = .5 * yW.g0, qI.fillText("Replay Speed", jh, .31 * yW.i0), qI.fillText(yn(ya), jh, .69 * yW.i0),
			qI.fillRect(Math.floor(.7 * yW.g0 - .5), 0, 2, Math.floor(yW.i0)), up.ux ? (jh = Math.floor(.02 * yW.g0), up = Math.floor(.025 * yW.g0), jm = Math.floor(.85 * yW.g0 - jh - .5 * up), jn = Math.floor(.25 * yW.i0), wK = Math.floor(yW.i0) -
				2 * jn, qI.fillRect(jm, jn, jh, wK), qI.fillRect(jm + jh + up, jn, jh, wK)) : function() {
				var g0 = Math.floor(.46 * yW.i0),
					i0 = Math.floor(.23 * yW.i0),
					jh = Math.floor(.85 * yW.g0 - .5 * g0 + g0 / 12),
					ji = Math.floor(.5 * yW.i0 - i0);
				qI.beginPath(), qI.moveTo(jh, ji), qI.lineTo(jh + g0, ji + i0), qI.lineTo(jh, ji + (i0 << 1)), qI.fill()
			}(), qI.fillRect(0, 0, Math.floor(yW.g0), 2), qI.fillRect(0, 0, 2, Math.floor(yW.i0)), qI.fillRect(0, Math.floor(yW.i0) - 2, Math.floor(yW.g0), 2), qI.fillRect(Math.floor(yW.g0 - 2), 0, 2, Math.floor(yW.i0))
	}

	function yn(ds) {
		return 5 === ds ? "Normal" : "" + yZ[ds]
	}
	this.ux = !1, this.ch = function() {
		fd && (ya = 5, this.ux = !1, yY = !1, yW = new nW([.3, .3 / 6], [.5, 1]), this.resize())
	}, this.yb = function() {
		return yZ[ya]
	}, this.g9 = function() {
		return yW.ji
	}, this.va = function(g1) {
		return !!fd && yW.jh + yW.g0 > df - g1 - nZ
	}, this.resize = function() {
		fd && (yW.resize(), yW.ji -= (aR.vb() - 1) * nZ, font = ad.kj.oG(.3 * yW.i0, 0), (gN = document.createElement("canvas")).width = Math.floor(yW.g0), gN.height = Math.floor(yW.i0), (qI = gN.getContext("2d", {
			alpha: !0
		})).font = font, ad.kj.textAlign(qI, 1), ad.kj.textBaseline(qI, 1), fx(this))
	}, this.sU = function(yc) {
		yc !== kN && (kN = yc, b9.resize(), b7.d2 = !0, fd) && (yX = b7.dT + 2e3, fx(this))
	}, this.g3 = function(jh, ji) {
		if (!fd) return !1;
		if (jh < yW.jh || ji < yW.ji || jh > yW.jh + yW.g0) return yY && function(up, jh, ji) {
			var et = yZ.length,
				wK = Math.floor(.5 * yW.i0),
				i0 = et * wK,
				jm = Math.floor(Math.floor(yW.jh) + .3 * yW.g0 - .5),
				i0 = Math.floor(Math.floor(yW.ji) - i0),
				g0 = Math.floor(.4 * yW.g0 + 2.5);
			return yY = !1, b7.d2 = !0, jh < jm || jm + g0 < jh || ji < i0 || (ya = yf(0, Math.floor((ji - i0) / wK), et - 1), fx(up)), !0
		}(this, jh, ji);
		if ((jh -= yW.jh) < .3 * yW.g0) yY = !1, this.sU(!kN);
		else {
			if (jh < .7 * yW.g0) return yY = !yY, b7.d2 = !0;
			this.sW(!1)
		}
		return !0
	}, this.sW = function(ye) {
		2 === jE ? (this.sU(!1), ac.show()) : (yY = !1, this.ux = !this.ux, this.ux ? j.fe ? j.sV() : dw(1) : ye || j.uy(), b7.d2 = !0, fx(this))
	}, this.sC = function(jh, ji) {
		return !!kN && (j.g3(jh, ji) || (fd ? ((b7.dT > yX || !this.g3(jh, ji)) && p.g3(jh, ji), b7.d2 = !0, yX = b7.dT + 2e3) : p.g3(jh, ji)), !0)
	}, this.iF = function() {
		fd && kN && b7.dT > yX - 1e3 && b7.dT < yX && (b7.d2 = !0)
	}, this.rF = function() {
		fd && (this.ux = !1, b7.d2 = !0, fx(this))
	}, this.gA = function() {
		if (fd) {
			if (kN) {
				if (b7.dT > yX) return;
				if (b7.dT > yX - 1e3) return gB.globalAlpha = yf(0, (1e3 - (b7.dT - (yX - 1e3))) / 1e3, 1), wP(), void(gB.globalAlpha = 1)
			}
			wP()
		}
	}
}

function cJ() {
	var yW, oV, t1, wK;
	this.sH = !1, this.oX = !1, this.v9 = function() {
		return !aX.iq && au.pX !== au.yo() && (fd || 2 === jE)
	}, this.show = function() {
		this.sH = !0, yW || (yW = new nW([.55, .35], [.5, .5]), (oV = new oU).ch()), this.resize(), 0 === jE ? oV.oZ("") : (ab.mj.ys.length || (ab.mj.ys = ab.yv.qq()), oV.oZ(ab.yw(ab.mj.ys))), oV.show(), b7.d2 = !0, z.dQ(!1)
	}, this.oH = function() {
		this.sH && (this.sH = !1, this.oX = !1, oV.oH(), b7.d2 = !0, 0 === jE && ak.oc(), 0 === x.sR()) && z.dQ(!0)
	}, this.resize = function() {
		this.sH && (yW.resize(), t1 = .03 * yW.i0, wK = .2 * yW.i0, oV.resize(yW.jh + t1, yW.ji + wK + t1, yW.g0 - 2 * t1, yW.i0 - 2 * (wK + t1)))
	}, this.g3 = function(jh, ji) {
		return !!this.sH && (jh < yW.jh || ji < yW.ji || jh > yW.jh + yW.g0 || ji > yW.ji + yW.i0 ? 2 !== j.g3(jh, ji) && this.oH() : ji < yW.ji + yW.i0 - wK ? jh > yW.jh + yW.g0 - wK && ji < yW.ji + wK && this.oH() : (jh -= yW.jh) < .25 * yW
			.g0 ? oV.ob() : jh < .5 * yW.g0 ? oV.od() : jh < .75 * yW.g0 ? oV.oc() : (ji = this, jh = ab.yr(oV.oa()), ji.oH(), (0 < jh.length && jh === ab.mj.ys || ab.yu.ou(jh)) && ab.yt()), !0)
	}, this.gA = function() {
		var ds;
		if (this.sH)
			for (ad.kj.textAlign(gB, 1), gB.fillStyle = ae.lJ, gB.fillRect(yW.jh, yW.ji, yW.g0, wK), gB.fillStyle = ae.ko, gB.fillRect(yW.jh, yW.ji + wK, yW.g0, yW.i0 - wK), gB.fillStyle = ae.gE, gB.fillRect(yW.jh, yW.ji, 2, yW.i0), gB.fillRect(
					yW.jh, yW.ji, yW.g0, 2), gB.fillRect(yW.jh + yW.g0 - 2, yW.ji, 2, yW.i0), gB.fillRect(yW.jh, yW.ji + yW.i0 - 2, yW.g0, 2), gB.fillRect(yW.jh + 1, yW.ji + wK, yW.g0 - 2, 2), gB.fillRect(yW.jh + 1, yW.ji + yW.i0 - wK, yW.g0 - 2,
					2), gB.font = fv + Math.floor(.39 * wK) + fw, gB.fillText("Replay", yW.jh + .5 * yW.g0, yW.ji + .55 * wK), j.vA(yW.jh + yW.g0 - .725 * wK, yW.ji + .275 * wK, .45 * wK), gB.setTransform(1, 0, 0, 1, 0, 0), gB.font = ad.kj.oG(
					.3 * wK, 0), gB.fillText("Select All", yW.jh + .125 * yW.g0, yW.ji + yW.i0 - .48 * wK), gB.fillText("Copy", yW.jh + .375 * yW.g0, yW.ji + yW.i0 - .48 * wK), gB.fillText("Clear", yW.jh + .625 * yW.g0, yW.ji + yW.i0 - .48 * wK),
				gB.fillText("Launch", yW.jh + .875 * yW.g0, yW.ji + yW.i0 - .48 * wK), ds = 1; ds < 4; ds++) gB.fillRect(yW.jh + .25 * ds * yW.g0 - 1, yW.ji + yW.i0 - wK + 1, 2, wK - 2)
	}
}

function bW() {
	var yy, yz, g0, jh, ji, z0, z1;
	this.ch = function() {
		yy = new Array(2), yz = new Array(2), this.kO = !1, z1 = z0 = hC = hA = 0, hB = 1, this.resize()
	}, this.resize = function() {
		g0 = (g0 = Math.floor((de ? .072 : .0502) * fs)) < 8 ? 8 : g0;
		for (var ds = 1; 0 <= ds; ds--) yy[ds] = document.createElement("canvas"), yy[ds].width = g0, yy[ds].height = g0, yz[ds] = yy[ds].getContext("2d", {
			alpha: !0
		});
		this.yL(),
			function() {
				for (var zH = Math.floor(1 + g0 / 20), ds = 1; 0 <= ds; ds--) yz[ds].clearRect(0, 0, g0, g0), yz[ds].fillStyle = ae.kl, yz[ds].beginPath(), yz[ds].arc(g0 / 2, g0 / 2, g0 / 2 - zH, 0, 2 * Math.PI), yz[ds].fill(), yz[ds].lineWidth =
					zH, yz[ds].fillStyle = ae.gE, yz[ds].strokeStyle = ae.gE, yz[ds].beginPath(), yz[ds].arc(g0 / 2, g0 / 2, g0 / 2 - zH, 0, 2 * Math.PI), yz[ds].stroke(), qL(yz[ds], 0, 0, g0, zH, .3, 0 === ds)
			}()
	}, this.jr = function() {
		return -hA / hB
	}, this.g9 = function() {
		return -hC / hB
	}, this.kX = function(z5, gt) {
		hA = hB * z5 - gt
	}, this.kY = function(z6, gu) {
		hC = hB * z6 - gu
	}, this.g3 = function(z4, vc) {
		return kN || ! function(z4, vc) {
			return Math.pow(z4 - (jh + g0 / 2), 2) + Math.pow(vc - (ji + g0 / 2), 2) < g0 * g0 / 4 || Math.pow(z4 - (jh + g0 / 2), 2) + Math.pow(vc - (ji + 2 * g0), 2) < g0 * g0 / 4
		}(z4, vc) || aR.jv.z7 ? (f.ka() && (this.kO = !0, z0 = z4, z1 = vc), !1) : vc < ji + 1.25 * g0 ? this.rt(Math.floor(jp / 2), Math.floor(g7 / 2), -200) : this.rt(Math.floor(jp / 2), Math.floor(g7 / 2), 200)
	}, this.rq = function(z4, vc) {
		var z8, z9, gw, gz;
		return !f.ka() || (z8 = hA, z9 = hC, hA += gw = z0 - z4, hC += gz = z1 - vc, a8.rq(gw, gz), this.zA(), z0 = z4, z1 = vc, z8 !== hA) || z9 !== hC
	}, this.rt = function(g4, g5, deltaY) {
		var kV;
		if (f.ka()) {
			if (0 < deltaY) kV = (kV = 500 / (500 + deltaY)) < .5 ? .5 : kV;
			else {
				if (!(deltaY < 0)) return !1;
				kV = 2 < (kV = (500 - deltaY) / 500) ? 2 : kV
			}
			this.zB(g4, g5, kV), b7.d2 = !0
		}
		return !0
	}, this.zB = function(jh, ji, gp) {
		var fq;
		gp = fq = (fq = 1024 < (fq = gp) * hB ? 1024 / hB : fq) * hB < .125 ? .125 / hB : fq, a8.zoom(gp, jh, ji),
			function(fq, g4, g5) {
				hB *= fq, hA = (hA + g4) * fq - g4, hC = (hC + g5) * fq - g5, p.zA()
			}(gp, jh, ji)
	}, this.zA = function() {
		var zE = df / 16,
			gW = 0,
			zF = dg / 16,
			gY = 0;
		hA < zE - df && (gW = zE - df - hA), hA > hB * au.eT - zE && (gW = hB * au.eT - zE - hA), hC < zF - dg && (gY = zF - dg - hC), hC > hB * au.eU - zF && (gY = hB * au.eU - zF - hC), hA += gW, hC += gY, b1.kZ(), a8.zG(gW, gY)
	}, this.yL = function() {
		jh = jp - g0 - nZ, ji = Math.floor(g7 / 2 - 1.25 * g0)
	}, this.gA = function() {
		aR.jv.z7 || (gB.drawImage(yy[0], jh, ji), gB.drawImage(yy[1], jh, Math.floor(ji + 3 * g0 / 2)))
	}
}

function bX() {
	var e7, pa, zI, zJ, gap, zK, zL, zM, zN, zO, fz, zP, zQ, zR, zS, xP, zT, zU, zV;

	function zZ() {
		zJ = Math.floor(.2 * (de ? .07 : .035) * fs), zJ = vY(de ? 3 : 1, zJ);
		var ze = df / (e7.length + gap);
		zJ = zJ < ze ? ze : zJ, xP = Math.floor((1 - gap) * zJ), pa = 0, zf()
	}

	function zf() {
		pa = (pa = pa < -20 ? -20 : pa) > (e7.length - 15) * zJ ? (e7.length - 15) * zJ : pa, zL = Math.floor(pa / zJ), zM = (zM = zL + Math.floor(jp / zJ)) > e7.length - 1 ? e7.length - 1 : zM, zL = (zL = zM < zL ? zM : zL) < 0 ? 0 : zL;
		var ow = zM;
		zK = zI / e7[ow];
		for (var ds = zM - 1; zL <= ds; ds--) e7[ds] > e7[ow] && (ow = ds, zK = zI / Math.pow(e7[ds], zS))
	}

	function zi(jh) {
		jh = Math.floor((pa + jp - jh - gap * zJ) / zJ);
		return (jh = jh < -1 ? -1 : -1 === jh ? 0 : jh > e7.length - 1 ? -1 : jh) !== zN && (zN = jh, -1 === zT && 0 === zN && zR && (zT = setInterval(zj, 100)), 1)
	}

	function zk(ds) {
		var xE = Math.floor(zK * Math.pow(e7[ds], zS));
		gB.fillRect(pa + jp - (ds + 1) * zJ, g7 - xE, xP, xE)
	}

	function zj() {
		var f0;
		0 !== (zN = 8 === x.sR() ? -1 : zN) ? (zU = (new Date).getTime(), clearInterval(zT), zT = -1) : (f0 = e7[1] / 864e3, -1 !== zU && (f0 += ((new Date).getTime() - zU) * e7[1] / 864e5, zU = -1), 0 < f0 && (e7[0] += Math.floor(f0), b7.d2 = !0))
	}
	this.ch = function() {
		zR = !(zU = zT = -1), zN = -(zS = 1), this.zW = !1, zQ = 0, zP = new Date, pa = 0, gap = .3, (zV = []).push({
			w1: "Plateau A",
			et: 0,
			dC: 57
		}), zV.push({
			w1: "Max A",
			et: 1,
			dC: 1
		}), zV.push({
			w1: "Black Friday",
			et: 15,
			dC: 15
		}), zV.push({
			w1: "Max B",
			et: 19,
			dC: 19
		}), zV.push({
			w1: "Max C",
			et: 44,
			dC: 44
		}), zV.push({
			w1: "First Android Version",
			et: 58,
			dC: 58
		}), zV.push({
			w1: "Max D",
			et: 67,
			dC: 67
		}), zV.push({
			w1: "The iFrame Explosion",
			et: 98,
			dC: 99
		}), zV.push({
			w1: "The 155-Day Uptrend",
			et: 58,
			dC: 213
		}), zV.push({
			w1: "Max E",
			et: 213,
			dC: 213
		}), zV.push({
			w1: "Plateau B",
			et: 214,
			dC: 259
		}), zV.push({
			w1: "Turbulent Times",
			et: 260,
			dC: 344
		}), zV.push({
			w1: "Max F",
			et: 262,
			dC: 262
		}), zV.push({
			w1: "Max G",
			et: 282,
			dC: 282
		}), zV.push({
			w1: "Max H",
			et: 333,
			dC: 333
		}), zV.push({
			w1: "The 19-Day Downtrend",
			et: 283,
			dC: 301
		}), zV.push({
			w1: "Plateau C",
			et: 345,
			dC: 385
		}), zV.push({
			w1: "The Alliance Ascent",
			et: 386,
			dC: 395
		}), zV.push({
			w1: "Max I",
			et: 395,
			dC: 395
		}), zV.push({
			w1: "First iOS Version",
			et: 411,
			dC: 411
		}), zV.push({
			w1: "Plateau D",
			et: 396,
			dC: 453
		}), zV.push({
			w1: "The TikTok Revolution",
			et: 454,
			dC: 470
		}), zV.push({
			w1: "Max J",
			et: 456,
			dC: 456
		}), zV.push({
			w1: "Max K",
			et: 472,
			dC: 472
		}), zV.push({
			w1: "Max L",
			et: 478,
			dC: 478
		}), zV.push({
			w1: "YT Drew",
			et: 471,
			dC: 485
		}), zV.push({
			w1: "Plateau E",
			et: 485,
			dC: 600
		}), zV.push({
			w1: "Uptrend A",
			et: 600,
			dC: 613
		}), zV.push({
			w1: "Max M",
			et: 613,
			dC: 613
		}), zV.push({
			w1: "Downtrend A",
			et: 614,
			dC: 635
		}), zV.push({
			w1: "Plateau F",
			et: 636,
			dC: 737
		}), zV.push({
			w1: "End of Record",
			et: 738,
			dC: 738
		}), e7 = [208644377, 208644377, 208644377, 206964709, 205156594, 250680803, 249089835, 234476552, 252346209, 263196406, 270821533, 291436400, 294907103, 288866179, 297960890, 310165928, 323215738, 326005712, 312078872, 282668674,
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
		], this.resize(), aP.j4.zY(0, 0)
	}, this.resize = function() {
		zI = Math.floor(.15 * dg), zO = Math.floor((de ? .018 : .0137) * fs), fz = fv + (zO = zO < 2 ? 2 : zO) + fw, zZ()
	}, this.za = function() {
		zR || aP.lg.zb()
	}, this.zc = function(zd) {
		var ds;
		for (zR = !0, ds = 0; ds < zd.length; ds++) e7.unshift(zd[ds]);
		zZ(), b7.d2 = !0
	}, this.zg = function() {
		zf()
	}, this.rq = function(jh, ji) {
		g7 - .6 * zI < ji ? this.zW ? jh !== zQ && (pa += jh - zQ, zQ = jh, zf(), zi(jh), this.zW = -1 !== zN, b7.d2 = !0) : zi(jh) && (b7.d2 = !0) : this.sJ()
	}, this.sJ = function() {
		-1 !== zN && (this.zW = !1, zN = -1, b7.d2 = !0)
	}, this.rt = function(jh, deltaY) {
		-1 !== zN && (pa += Math.floor(deltaY), zf(), zi(jh), b7.d2 = !0)
	}, this.g3 = function(jh, ji) {
		this.rq(jh, ji), -1 !== zN && (zQ = jh, this.zW = !0)
	}, this.sK = function() {
		-1 !== zN && (this.zW = !1)
	}, this.gA = function() {
		gB.fillStyle = ae.ku;
		for (var zm, month, dU, qO, zp, zq, jn, zr, zs, ds = zM; zL <= ds; ds--) zk(ds);
		zR && 0 === zL && (gB.fillStyle = ae.lG, zk(0)), -1 !== zN && (gB.fillStyle = ae.kt, zk(zN)), -1 !== zN && (gB.font = fz, gB.textBaseline = x2, (dU = new Date).setTime(zP.getTime() - 1e3 * zN * 60 * 60 * 24), month = "month", zm = "day",
			"undefined" != typeof Intl && (month = new Intl.DateTimeFormat("en-US", {
				month: "long"
			}).format(dU), zm = new Intl.DateTimeFormat("en-US", {
				weekday: "long"
			}).format(dU)), zm = zm + ", " + dU.getUTCDate() + " " + month + " " + dU.getFullYear(), month = 1 === e7[zN] ? " second played" : " seconds played", month = ad.jx.jy(e7[zN]) + month, dU = Math.floor(gB.measureText(zm).width),
			qO = Math.floor(gB.measureText(month).width), zp = Math.floor(.5 * (dU + zO)), zq = (zq = pa + jp - (zN + 1) * zJ) < zp ? zp : jp - zp < zq ? jp - zp : zq, jn = g7 - Math.floor(zK * Math.pow(e7[zN], zS)), zr = Math.floor(1.1 *
			zO), zs = g7 - zr < jn ? g7 - zr : jn, gB.fillStyle = ae.kp, gB.fillRect(jp - qO - zO, zs - zr, qO + zO, zr), gB.fillRect(zq - zp, g7 - zr, dU + zO, zr), gB.fillStyle = ae.gE, gB.textAlign = x3, gB.fillText(month, Math.floor(jp -
				.5 * zO), zs),
			function(jn, zr) {
				for (var qN, uD = -1, fu = e7.length - zN - 1, ds = zV.length - 1; 0 <= ds; ds--) fu >= zV[ds].et && fu <= zV[ds].dC && (-1 === uD || zV[ds].dC - zV[ds].et < zV[uD].dC - zV[uD].et) && (uD = ds); - 1 !== uD && (qN = Math.floor(
					gB.measureText(zV[uD].w1).width), gB.fillStyle = ae.kp, gB.fillRect(jp - qN - zO, jn, qN + zO, zr), gB.fillStyle = ae.gE, gB.fillText(zV[uD].w1, Math.floor(jp - .5 * zO), jn + zr))
			}(zs - 2 * zr, zr), gB.textAlign = gD, gB.fillText(zm, zq, g7), gB.strokeStyle = ae.kv, gB.lineWidth = 1, gB.beginPath(), gB.moveTo(0, jn), gB.lineTo(jp, jn), gB.closePath(), gB.stroke())
	}
}

function bY() {
	var fz, g0, ji, zu, zv, gN, qI, xL, tC, zw, zx, zy, zz;
	this.jh = 0, this.i0 = 0, this.ch = function() {
		zv = pz, zx = "rgba(0,100,0,0.8)", zy = "rgba(150,0,0,0.8)", xL = !(zw = !0), tC = ep[eo], this.resize()
	}, this.resize = function() {
		g0 = Math.floor((de ? .305 : .24) * fs), this.i0 = Math.floor(.5 + .13 * g0), g0 = Math.floor(6 * this.i0), fz = fv + Math.floor(.8 * this.i0) + fw, zz = Math.floor(.5 * this.i0), au.p5.font = fz, ji = nZ, zu = Math.floor(1 + .13 * this
			.i0), (gN = document.createElement("canvas")).width = g0, gN.height = this.i0, (qI = gN.getContext("2d", {
			alpha: !0
		})).font = fz, qI.textBaseline = gC, qI.textAlign = gD, this.a00()
	}, this.xh = function() {
		return de && df < 1.2 * dg
	}, this.yL = function() {
		this.xh() ? this.jh = jp - g0 - nZ : this.jh = Math.floor(s.a01() + (jp - s.a01() - t.g0 - g0) / 2 - .5 * nZ)
	}, this.jD = function() {
		xL && (xL = !1, this.a00())
	}, this.a00 = function() {
		qI.clearRect(0, 0, g0, this.i0), qI.fillStyle = zw ? zx : zy, qI.fillRect(0, 0, g0, this.i0), qI.fillStyle = ae.kt, this.a02(), this.a03(), qI.fillStyle = ep[eo] >= a7.iI(eo) ? ae.lD : ae.gE, qI.fillText(ad.jx.jy(tC), Math.floor(g0 / 2),
			zz), qI.fillStyle = ae.gE, qI.fillRect(0, 0, g0, 1), qI.fillRect(0, 0, 1, this.i0), qI.fillRect(0, this.i0 - 1, g0, 1), qI.fillRect(g0 - 1, 0, 1, this.i0)
	}, this.a02 = function() {
		var pi = yF(Math.floor((a7.a04() - 1) * this.i0 / 9), this.i0 - zu);
		qI.fillRect(0, pi, zu, this.i0 - pi), qI.fillRect(g0 - zu, pi, zu, this.i0 - pi)
	}, this.a03 = function() {
		qI.fillRect(zu, this.i0 - zu, Math.floor((g0 - 2 * zu) * ep[eo] / zv), zu)
	}, this.iF = function() {
		0 !== h5[eo] && 2 !== h6[eo] && tC !== ep[eo] && (zv = vY(ep[eo], zv), zw = ep[eo] > tC && 10 <= ep[eo], tC = ep[eo], xL = !0)
	}, this.gA = function() {
		0 === h5[eo] || kK || 2 === h6[eo] || gB.drawImage(gN, this.jh, ji)
	}
}

function bZ() {
	var a06, a07, a08, a09, a0A, a0B, a0C, a0D, a0E, a0F, a0G, a0H, a0I, a0J, a0K, a0L, a0M, a0N, a0O, title, a0P, a0Q, a0R, a0S, a0T, position, a0U, a0V, a0W, a0X, a0Y = 1;

	function a0a() {
		a0C.clearRect(0, 0, a06, xx), a0C.fillStyle = ae.lP, a0C.fillRect(0, 0, a06, a0H), a0C.fillStyle = ae.ko, a0C.fillRect(0, a0H, a06, xx - a0H), a05[eo] >= position && a0d(a05[eo] - position, ae.lA), 0 !== a05[eo] && 0 === position && a0d(0, ae
				.lT), -1 !== a0T && a0d(a0T, ae.ks), a0C.fillStyle = ae.gE, a0C.fillRect(0, a0H, a06, 1), a0C.fillRect(0, 0, a06, x7), a0C.fillRect(0, 0, x7, xx), a0C.fillRect(a06 - x7, 0, x7, xx), a0C.fillRect(0, xx - x7, a06, x7), a0C.font = a07,
			a0C.textBaseline = gC, a0C.textAlign = gD, a0C.fillText(title, Math.floor(a06 / 2), Math.floor(a0F + a08 / 2));
		var hi, f1 = a05[eo] < position + a0A - 1 ? 1 : 2;
		for (a0C.font = a09, a0C.textAlign = vg, hi = a0A - f1; 0 <= hi; hi--) a0e(jO[hi + position]), a0f(hi, hi + position, jO[hi + position]);
		for (a0C.textAlign = x3, hi = a0A - f1; 0 <= hi; hi--) a0e(jO[hi + position]), a0g(hi, jO[hi + position]);
		2 == f1 && (a0e(eo), a0C.textAlign = vg, a0f(a0A - 1, a05[eo], eo), a0C.textAlign = x3, a0g(a0A - 1, eo)), 0 === position && (f1 = .7 * a0I / a3.get(4).height, a0C.setTransform(f1, 0, 0, f1, Math.floor(a0J + .58 * a0I + .5 * f1 * a3.get(4)
			.width), Math.floor(a0F + a08 + .4 * a0I)), a0C.imageSmoothingEnabled = !0, a0C.drawImage(a3.get(4), -Math.floor(a3.get(4).width / 2), -Math.floor(a3.get(4).height / 2)), a0C.setTransform(1, 0, 0, 1, 0, 0))
	}

	function a0e(player) {
		hV && (a0C.fillStyle = b8.a0i[b8.rN[b8.iV[player]]])
	}

	function a0d(ds, uI) {
		a0C.fillStyle = uI, ds = a0A - 1 < ds ? a0A - 1 : ds;
		uI = Math.floor((ds === a0A - 1 ? 2 : 0 === ds ? 1.15 : 1) * a0I), uI = ds === a0A - 2 ? Math.floor(a0H + 9.15 * a0I) - Math.floor(a0H + 8.15 * a0I) : uI;
		a0C.fillRect(0, Math.floor(a0H + (ds + (0 === ds ? 0 : .15)) * a0I), a06, uI)
	}

	function a0f(a0k, a0l, ds) {
		a0C.fillText(a0P[a0l], a0J, Math.floor(a0F + a08 + (a0k + .5) * a0I)), 1 === h6[ds] && (a0C.font = x4 + a09);
		a0l = Math.floor(a0F + a08 + (a0k + .5) * a0I);
		a0C.fillText(a0N[ds] === ds ? jz[ds] : a0M[a0N[ds] % ex], a0K, a0l), 0 !== h6[ds] && (a0C.font = a09), ds < h4 && 2 !== h6[ds] || a0C.fillRect(a0K, a0l + .35 * a0Y, a0O[ds], Math.max(1, .1 * a0Y))
	}

	function a0g(a0k, ds) {
		a0C.fillText(fJ[ds], a0L, Math.floor(a0F + a08 + (a0k + .5) * a0I))
	}

	function a0u(ji) {
		return (ji -= nZ + a0H) < 0 ? Math.floor(ji / a0I) - 1 : ji < (a0A - 1) * a0I ? Math.floor(ji / a0I) : ji < xx - a0H ? a0A - 1 : (ji -= xx - a0H, a0A + Math.floor(ji / a0I))
	}

	function um(jh, ji) {
		return nZ <= jh && jh < nZ + a06 && nZ <= ji && ji < nZ + xx
	}
	this.ch = function() {
		var ds, db, hi;
		for (a0V = !1, title = "LEADERBOARD", a0A = de ? 6 : 10, position = a0X = a0W = a0U = 0, a0S = !(a0T = -1), a0Q = new Uint16Array(a0A + 1), a0R = new Uint32Array(a0A + 1), a0E = ex, jO = new Uint16Array(a0E), a05 = new Uint16Array(a0E),
			ds = a0E - 1; 0 <= ds; ds--) jO[ds] = ds, a05[ds] = ds;
		this.resize(!0), a0M = [], a0N = new Uint16Array(ex), a0O = new Uint16Array(ex);
		var o2 = Math.floor(a06 - a0K - a0J - a0D),
			a0Z = 0;
		for (a0P = new Array(ex), a0C.font = a09, ds = ex - 1; 0 <= ds; ds--)
			if (a0P[ds] = ds + 1 + ".", a0N[ds] = ds, a0O[ds] = Math.floor(a0C.measureText(jz[ds]).width), a0O[ds] > o2) {
				for (db = jz[ds], hi = jz[ds].length - 1; 1 <= hi && (db = db.substring(0, hi), a0O[ds] = Math.floor(a0C.measureText(db + "...").width), !(a0O[ds] <= o2)); hi--);
				db += "...", a0M.push(db), a0N[ds] = ex + a0Z++
			} a0a()
	}, this.resize = function(ch) {
		if (xx = de ? (a06 = Math.floor(.335 * fs), Math.floor(a0A * a06 / 8)) : (a06 = Math.floor(.27 * fs), Math.floor(a0A * a06 / 10)), a06 = Math.floor(.97 * a06), (a0B = document.createElement("canvas")).width = a06, a0B.height = xx, a0C =
			a0B.getContext("2d", {
				alpha: !0
			}), a0F = .025 * a06, a08 = .16 * a06, a0G = 0 * a06, a0H = Math.floor(.45 * a0F + a08), a0I = (xx - a08 - 2 * a0F - a0G) / a0A, a07 = fv + Math.floor(.55 * a08) + fw, a0Y = Math.floor((de ? .67 : .72) * a0I), a09 = a0Y + fw, a0C
			.font = a09, a0J = Math.floor(.04 * a06), a0K = Math.floor((de ? .195 : .18) * a06), a0D = Math.floor(a0C.measureText("00920600").width), a0C.font = a07, a0L = a06 - a0J, !ch) {
			a0C.font = a09;
			for (var ds = ex - 1; 0 <= ds; ds--) a0O[ds] = Math.floor(a0C.measureText(a0N[ds] === ds ? jz[ds] : a0M[a0N[ds] % ex]).width);
			a0a()
		}
	}, this.a01 = function() {
		return a06
	}, this.jD = function(wD) {
		a0S && (wD || b7.iT() % aR.a0b[aR.jv.a0c] == 0) && (a0S = !1, a0a())
	}, this.iF = function() {
		! function() {
			for (var hi = a0E - 1; 0 <= hi; hi--) 0 === h5[jO[hi]] && ! function(hi) {
				var a0s = jO[hi];
				a0E--;
				for (var ds = hi; ds < a0E; ds++) jO[ds] = jO[ds + 1], a05[jO[ds]] = ds;
				jO[a0E] = a0s, a05[jO[a0E]] = a0E
			}(hi)
		}();
		for (var a0q, ka = a0E - 1, hi = 0; hi < ka; hi++) fJ[jO[hi]] < fJ[jO[hi + 1]] && (a0q = jO[hi], jO[hi] = jO[hi + 1], jO[hi + 1] = a0q, a05[jO[hi]] = hi, a05[jO[hi + 1]] = hi + 1);
		! function() {
			for (var dU = a0S, f1 = (a0S = !0, a05[eo] >= a0A - 1 ? a0A - 2 : a0A - 1), ds = f1; 0 <= ds; ds--)
				if (a0Q[ds] !== jO[ds] || a0R[ds] !== fJ[jO[ds]]) return;
			(f1 != a0A - 2 || a0Q[a0A] === a05[eo] && a0R[a0A] === fJ[eo]) && (a0S = dU)
		}();
		for (var ds = a0A - 1; 0 <= ds; ds--) a0Q[ds] = jO[ds], a0R[ds] = fJ[jO[ds]];
		a0Q[a0A] = a05[eo], a0R[a0A] = fJ[eo]
	}, this.g3 = function(jh, ji) {
		return !!um(jh, ji) && (a0U = b7.dT, a0V = !0, a0W = a0X = a0u(ji), al.sc() && (jh = yf(-1, a0X, a0A), a0T !== (jh = jh === a0A ? -1 : jh)) && (a0T = jh, a0a(), b7.d2 = !0), !0)
	}, this.rq = function(jh, ji) {
		var dU, a0t = a0u(ji);
		return a0V ? (dU = position, (position = yf(0, position += a0W - a0t, ex - a0A)) !== dU && (a0t = (a0t = yf(-1, a0W = a0t, a0A)) !== a0A && um(jh, ji) ? a0t : -1, a0T = a0t, a0a(), b7.d2 = !0), !0) : (a0t = (a0t = yf(-1, a0t, a0A)) ===
			a0A || !um(jh, ji) || al.sc() ? -1 : a0t, a0T !== a0t && (a0T = a0t, a0a(), b7.d2 = !0))
	}, this.sK = function(jh, ji) {
		if (!a0V) return !1;
		a0V = !1;
		var a0t = a0u(ji);
		return al.sc() && -1 !== a0T && (a0T = -1, a0a(), b7.d2 = !0), b7.dT - a0U < 350 && a0X === a0t && -1 !== (a0t = (a0t = yf(-1, a0t, a0A)) !== a0A && um(jh, ji) ? a0t : -1) && (jh = jO[a0t + position], a0t === a0A - 1 && a05[eo] >=
			position + a0A - 1 && (jh = eo), hV && displayDonationsHistory(jh, jz, iv), 0 !== h5[jh]) && f.kL(jh, 800, !1, 0), !0
	}, this.rt = function(jh, ji, deltaY) {
		var a0v;
		return !(a0V || kN || (a0v = Math.max(Math.floor(Math.abs(deltaY) / 40), 1), !um(jh, ji)) || (jh = (jh = yf(-1, a0u(ji), a0A)) === a0A || al.sc() ? -1 : jh, 0 < deltaY ? position < ex - a0A && (position += Math.min(ex - a0A - position,
			a0v), a0T = jh, a0a(), b7.d2 = !0) : 0 < position && (position -= Math.min(position, a0v), a0T = jh, a0a(), b7.d2 = !0), 0))
	}, this.gA = function() {
		gB.drawImage(a0B, nZ, nZ)
	}
}

function ba() {
	var gN, qI, jh, ji, xE, a0w, gap, a0x, fontSize, a0y, us, er, a0z, a10, a11, a12, a13, a14;

	function a17() {
		qI.clearRect(0, 0, t.g0, t.i0), qI.fillStyle = ae.kp, qI.fillRect(0, 0, t.g0, t.i0), qI.fillStyle = ae.l5, gp = 0 < a11 ? a11 : Math.sqrt(er[4] / 1e4), qI.fillRect(0, t.i0 - xE - 1, Math.floor(gp * t.g0), xE), qI.fillStyle = ae.gE, qI
			.fillRect(0, 0, t.g0, 1), qI.fillRect(0, 0, 1, t.i0), qI.fillRect(t.g0 - 1, 0, 1, t.i0), qI.fillRect(0, t.i0 - 1, t.g0, 1), qI.fillRect(0, t.i0 - xE - 1, t.g0, 1);
		for (var gp, a19, dU = 0, ds = 0; ds < us.length; ds++) a0z[ds] ? (qI.textAlign = vg, a19 = Math.floor((a0w - xE + 2 * a0x) * (ds - dU + 1) / (us.length + 1) - .7 * a0x), qI.fillText(us[ds], gap, a19), qI.textAlign = x3, 5 === ds && 0 !== h5[
			eo] && ep[eo] >= a7.iI(eo) ? (qI.fillStyle = ae.lR, qI.fillText(a16(ds), t.g0 - gap, a19), qI.fillStyle = ae.gE) : qI.fillText(a16(ds), t.g0 - gap, a19)) : dU++
	}

	function a16(ds) {
		return ds < 3 ? er[ds].toString() : 3 === ds || 4 === ds || 5 === ds ? ad.jx.tR(er[ds] / 100, 2) : ds < 7 ? ad.jx.jy(er[ds]) : ds === 7 ? t.a04(er[7]) : ds === 8 ? utils.getMaxTroops(fJ, eo) : utils.getDensity(ep, fJ, eo)
	}

	function a15() {
		fJ[eo] !== er[6] && (er[6] = fJ[eo], a0y++)
	}
	this.ch = function() {
		a11 = a12 = 0, (us = new Array(8))[0] = "Humans", us[1] = iv ? "Players" : "Bots", us[2] = "Spectators", us[3] = "Threshold", us[4] = "Occupation", us[5] = "Interest", us[6] = "Income", us[7] = "Time", us.push("Max Troops", "Density"),
			a14 = te - el(te, 100), (er = new Array(us.length))[0] = iv ? 0 : h4, er[1] = iv ? iW : ip, er[2] = rC, er[3] = 0, er[4] = el(1e4 * fJ[0], te), er[5] = 700, er[6] = 0, a15(), er[7] = 0, a10 = a16(6), a0z = new Array(us.length);
		for (var ds = us.length - 1; 0 <= ds; ds--) a0z[ds] = !0;
		a13 = 0, a13 = iv ? (a0z[0] = !1, a0z[2] = !1, a0z[3] = !1, 3) : (a0z[3] = !1, 1), a0y = 0, this.resize()
	}, this.resize = function() {
		this.g0 = Math.floor((de ? .1646 : .126) * 1.25 * fs), this.i0 = Math.floor(1.18 * this.g0), xE = Math.floor(.04 * this.g0), gap = Math.floor(.035 * this.g0), a0x = .04 * this.g0, a0w = this.i0, this.i0 -= Math.floor(a13 * (this.i0 - 2 *
			xE) / us.length), fontSize = Math.floor(.7 * (a0w - xE) / us.length), fontSize = fv + fontSize + fw, (gN = document.createElement("canvas")).width = this.g0, gN.height = this.i0, (qI = gN.getContext("2d", {
			alpha: !0
		})).font = fontSize, qI.textBaseline = gC, qI.lineWidth = 1, this.tY(), this.yL(), r.yL(), a17()
	}, this.yL = function() {
		jh = jp - this.g0 - nZ
	}, this.a18 = function() {
		ji = nZ
	}, this.tY = function() {
		ji = nZ + (r.xh() && 0 !== h5[eo] && !kK ? r.i0 + nZ : 0)
	}, this.jD = function(wD) {
		0 < a0y && (wD || 100 <= a0y) && (a0y = 0, a17())
	}, this.uQ = function() {
		return er[7]
	}, this.a04 = function(value) {
		var ow = Math.floor(value / 1e3 / 60),
			value = Math.floor((value - 6e4 * ow) / 1e3);
		return value < 10 ? ow + ":0" + value : ow + ":" + value
	}, this.iF = function() {
		var a1J, per;
		a0z[0] && rD - rC !== er[0] && (er[0] = rD - rC, a0y++), iW - er[0] !== er[1] && (er[1] = iW - er[0], a0y++), this.j3(), (a1J = a7.a1K(eo)) !== er[5] && (er[5] = a1J, a0y++), a15(), er[7] += b7.a1L, a1J = a16(7), a10 !== a1J && (a10 =
			a1J, a0y += 100), a1J = hV ? b9.rP() : fJ[jO[0]], per = el(1e4 * a1J, te), er[3] = a1J, er[4] !== per && (a0y++, er[4] = per), 8 === it && function() {
			if (0 === h5[0]) at.qw.r4(1);
			else {
				if (0 !== h5[1]) return;
				at.qw.r4(0)
			}
			return 1
		}() || er[3] < a14 || er[3] !== te && ! function() {
			for (var ds = iW - 1; 0 <= ds; ds--)
				if (0 < eu[iX[ds]].length) return;
			return 1
		}() || at.qw.r4(-1)
	}, this.j3 = function() {
		a0z[2] && rC !== er[2] && (er[2] = rC, a0y++)
	}, this.a1M = function(ds) {
		var sz, a1N, dU;
		return 2 !== jE && (ds === ti ? (a11 = 0, a17(), !1) : (-1 !== ds || 0 !== a12) && (a1N = a11, a11 = fd ? ds / ti : (dU = performance.now(), 0 <= ds && (sz = dU - 392 * ds, a12 = 0 === ds || sz < a12 ? sz : a12), 1 < (a11 = (dU - a12) / (
			392 * ti)) ? 1 : a11), a17(), a11 !== a1N))
	}, this.gA = function() {
		gB.drawImage(gN, jh, ji)
	}
}

function bb() {
	var sH, a1O, g0, i0, wK, a1P, a1Q, xi, gN, kB, a1R;

	function g9() {
		return Math.floor((jp - g0) / 2) < o.i0 + 2 * nZ ? g7 - i0 - 4 * nZ - o.i0 : g7 - i0 - 2 * nZ
	}
	this.a1S = -1, this.ch = function() {
		a1R = sH = !1, wK = .61, a1P = .07, a1Q = .09, kB = xi = i0 = 0, this.a1S = -1
	}, this.resize = function() {
		var qI, jm, iU, a1X, a1Y, uw;
		sH && (g0 = yF(g0 = de ? Math.floor(.69 * fs) : Math.floor(.5 * fs), vY(df - 2 * nZ, 10)), g0 = yF(g0, Math.floor(3.57 * vY(dg - 2 * nZ, 3))), i0 = Math.floor(.28 * g0), (gN = document.createElement("canvas")).width = g0, gN.height = i0,
			qI = gN.getContext("2d", {
				alpha: !0
			}), jm = Math.floor(1 + i0 / 40), qI.clearRect(0, 0, g0, i0), qI.fillStyle = ae.kp, qI.fillRect(jm, jm, g0 - 2 * jm, i0 - 2 * jm), qI.lineJoin = "bevel", qI.lineWidth = 2 * jm, qI.strokeStyle = ae.gE, qI.strokeRect(jm, jm, g0 -
				2 * jm, i0 - 2 * jm), qI.imageSmoothingEnabled = !0, iU = a3.get(a1O), a1X = iU.width, a1Y = iU.height, uw = (21 === a1O ? .666 : 1) * wK * i0 / a1Y, qI.setTransform(uw, 0, 0, uw, Math.floor((g0 - uw * a1X) / 2), Math.floor((
				i0 - uw * a1Y) / 2)), qI.drawImage(iU, 0, 0), qI.setTransform(1, 0, 0, 1, Math.floor(g0 - a1Q * i0 - a1P * i0 - jm), Math.floor(jm + a1P * i0)),
			function(qI, et) {
				qI.lineWidth = Math.floor(1 + i0 / 80), qI.strokeStyle = ae.gE, qI.beginPath(), qI.moveTo(0, 0), qI.lineTo(et, et), qI.moveTo(0, et), qI.lineTo(et, 0), qI.stroke()
			}(qI, Math.floor(a1Q * i0)), qI.setTransform(1, 0, 0, 1, 0, 0))
	}, this.show = function(dy, a1U, a1V, a1W) {
		sH || a1W && a1R || (a1O = a1V ? 21 : dy ? 1 : 2, sH = a1R = !0, this.resize(), i.oH(), o.yA(), kB = b7.dT, -1 === this.a1S && (this.a1S = b7.iT()), xi = a1U ? 1 : 0)
	}, this.iF = function() {
		!sH || 1 <= xi || (xi = 1 < (xi += 5e-4 * (b7.dT - kB)) ? 1 : xi, kB = b7.dT, b7.d2 = !0)
	}, this.g3 = function(jh, ji) {
		return !(!sH || xi <= 0 || (jh -= Math.floor((jp - g0) / 2), ji -= g9(), jh < 0) || ji < 0 || g0 < jh || i0 < ji || (g0 - i0 / 3 < jh && ji < i0 / 3 && (sH = !1, b7.d2 = !0), 0))
	}, this.gA = function() {
		!sH || xi <= 0 || (gB.globalAlpha = xi, gB.drawImage(gN, Math.floor((jp - g0) / 2), g9()), gB.globalAlpha = 1)
	}
}

function co() {
	this.a1a = !1, this.ki = !1, this.tc = !1, this.a1b = [0, 0, 0, 0], this.a1c = function() {
		var jm, jn, jo, jq;
		this.tc = this.tc || this.ki, (this.ki || this.a1a && this.tc) && (jm = b1.a1d[0], jn = b1.a1d[1], jo = b1.a1d[2], jq = b1.a1d[3], jm = jm < this.a1b[0] ? this.a1b[0] : jm, jn = jn < this.a1b[1] ? this.a1b[1] : jn, jo = jo > this.a1b[2] ?
			this.a1b[2] : jo, jq = jq > this.a1b[3] ? this.a1b[3] : jq, this.ki = !1, this.a1a = !1, jm === this.a1b[0] && jn === this.a1b[1] && jo === this.a1b[2] && jq === this.a1b[3] ? this.td() : jm <= jo && jn <= jq && tx.putImageData(
				ty, 0, 0, jm, jn, jo - jm + 1, jq - jn + 1))
	}, this.td = function() {
		this.tc && this.a1b[2] >= this.a1b[0] && this.a1b[3] >= this.a1b[1] && tx.putImageData(ty, 0, 0, this.a1b[0], this.a1b[1], this.a1b[2] - this.a1b[0] + 1, this.a1b[3] - this.a1b[1] + 1), this.tc = !1
	}, this.rI = function() {
		this.a1b[2] >= this.a1b[0] && this.a1b[3] >= this.a1b[1] && tx.putImageData(ty, 0, 0, this.a1b[0], this.a1b[1], this.a1b[2] - this.a1b[0] + 1, this.a1b[3] - this.a1b[1] + 1), this.tc = !1
	}, this.ch = function() {
		var jh, ji;
		this.a1a = !1, this.ki = !1, this.tc = !1, this.a1b[0] = au.eT, this.a1b[1] = au.eU, this.a1b[2] = this.a1b[3] = 0;
		loop: for (jh = 1; jh < au.eT - 1; jh++)
			for (ji = au.eU - 2; 1 < ji; ji--)
				if (1 === a1e[a4.pq(jh, ji) + 2]) {
					this.a1b[0] = jh;
					break loop
				} loop: for (ji = 1; ji < au.eU - 1; ji++)
			for (jh = au.eT - 2; 1 < jh; jh--)
				if (1 === a1e[a4.pq(jh, ji) + 2]) {
					this.a1b[1] = ji;
					break loop
				} loop: for (jh = au.eT - 2; 0 < jh; jh--)
			for (ji = au.eU - 2; 1 < ji; ji--)
				if (1 === a1e[a4.pq(jh, ji) + 2]) {
					this.a1b[2] = jh;
					break loop
				} loop: for (ji = au.eU - 2; 0 < ji; ji--)
			for (jh = au.eT - 2; 1 < jh; jh--)
				if (1 === a1e[a4.pq(jh, ji) + 2]) {
					this.a1b[3] = ji;
					break loop
				}
	}
}

function cd() {
	var a1f = new a1g;
	this.vV = function(fu, a1h, oM) {
		return a1f.vV(fu, a1h, oM)
	}
}

function a1g() {
	var e7 = ["Accept", "You erased {0}.", "You were erased by {0}.", "Congratulations! You won the game.", "{0} won the game.", "{0} broke the non-aggression pact.", "{0} is attacking you!", "Choose your start position!", "You surrendered!",
		"The game ended in a stalemate!", "Error: {0}", "{0} won the game.", "{0} was immortalized!", "Unclaimed Land {0}", "Player: {0}   Balance: {1}   Territory: {2}   Coords: {3}", "Mountains {0}", "Water {0}",
		"Ship Owner: {0}   Strength: {1}", " Message to {0}: ", "{0}: ", "Humanity triumphs! The undead have been beaten back.", "The Resistance", "Mankind's era ends, overrun by the relentless tide of the undead.", "The Virus",
		"Agreeing to peace concludes the game in a stalemate!", "You signed a non-aggression pact with {0}.", "You asked {0} to sign a non-aggression pact.", "{0} accepted the non-aggression pact.", "{0} requested a non-aggression pact.",
		"You asked {0} players to attack {1}.", "You asked {0} to attack {1}.", "{0} suggested you attack {1}.", "Your balance is too low!", "You exported {0} resource{20} to {1}.", "A tax of {0} unit{20} was deducted.",
		"{0} supported you with {1} resource{21}.", "A bot ({0}) supported you with {1} resource{21}.", "Map: {0}", "Dimension: {0}x{1}", "Overall Pixels: {0}", "Land: {0} ({1})", "Water: {0} ({1})", "Mountains: {0} ({1})",
		"Full sending against human players is disabled.", "{0} and {1} other player{21} were erased.", "{0} and {1} other player{21} left the game.", "{0} and {1} other player{21} surrendered.", "{0} was erased by {1}.", "{0} left the game.",
		"{0} surrendered.", "{0} joined the game."
	];
	this.vV = function(fu, a1h, oM) {
		var ds, et, db;
		if (!a1h) return e7[fu];
		for (et = a1h.length, db = e7[fu], ds = 0; ds < et; ds++) Number.isInteger(a1h[ds]) && 1 !== a1h[ds] && (db = db.replace("{" + (20 + ds) + "}", "s"));
		if (oM) {
			if (oM.vs)
				for (ds = 0; ds < oM.vs.length; ds++) a1h[oM.vs[ds]] = ad.jx.jy(a1h[oM.vs[ds]]);
			if (oM.wA)
				for (ds = 0; ds < oM.wA.length; ds++) a1h[oM.wA[ds]] = ad.jx.tR(100 * a1h[oM.wA[ds]], 1)
		}
		for (ds = 0; ds < et; ds++) db = db.replace("{" + ds + "}", a1h[ds]);
		return db
	}
}

function a1i() {}

function cx() {
	this.sH = !1, this.vC = null, this.a1j = 0, this.g0 = null, this.i0 = null, this.a1k = .013, this.a1l = .022, this.a1m = .025;
	this.a1o = 3, this.a1p = 1.2, this.a1q = .2, this.a1r = .235, this.a1s = .9, this.a1t = .08;
	var a1v, a1u = ["Best Players", "Best Clans", "LEGENDS NEVER DIE", "THE NEVER ENDING WAR"],
		a1w = [-1e6, -1e6];
	this.position = [0, 0], this.a1y = [0, 0], this.ch = function() {
		this.vC = [null, null], this.sH = !1, this.a1j = 0
	}, this.dQ = function(id) {
		this.sH = !0, this.resize(), this.a1j = id, this.fx(), z.dQ(!1), b7.d2 = !0
	}, this.iF = function() {
		this.sH && this.fx()
	}, this.fx = function() {
		b7.dT - 12e4 >= a1w[this.a1j] && (a1w[this.a1j] = b7.dT, this.a1y = [0, 0], aP.j4.zY(0, 1 + this.a1j)) && aP.lg.a1z(0, this.a1j)
	}, this.resize = function() {
		if (this.sH) {
			var ds;
			for (this.g0 = this.a20(de ? .85 : .66, .75, df, dg), this.i0 = Math.floor(this.g0 / .75), ds = 1; 0 <= ds; ds--) this.vC[ds] && (this.vC[ds][4] = fv + Math.floor(this.vC[ds][5] * this.i0 / 10) + fw);
			a1v = fv + Math.floor(.1 * this.i0) + fw
		}
	}, this.a20 = function(fq, gM, g0, i0) {
		return g0 < gM * i0 ? Math.floor(fq * g0) : Math.floor(gM * fq * i0)
	}, this.a21 = function(fu, a22, a23, tN, a24, a25, a0k) {
		this.position[fu] = a0k;
		for (var xf, gH = a22.length, fz = fv + Math.floor(a24 * this.i0 / 10) + fw, e7 = (this.a26(a22, fz, a25 * this.g0), [
				[], gH, -1, tN, fz, a24, 10 * a0k
			]), ds = 0; ds < gH; ds++) xf = {
			name: a22[ds].name,
			value: a22[ds].qV / a23,
			colorIndex: a22[ds].colorIndex
		}, e7[0].push(xf);
		this.vC[fu] = e7, this.a27(fu);
		a25 = this.vC[fu][0][0].name;
		1 === fu && (a25 = "[" + a25 + "]"), 0 === a0k && b0.ft(fu, a25), b7.d2 = !0
	}, this.a27 = function(ds) {
		this.vC[ds][0].sort(function(hi, hs) {
			return hs.value - hi.value
		})
	}, this.a28 = function(fu, name, a29, a2A) {
		if (this.vC && this.vC[fu]) {
			var ds, w2 = !1;
			if (0 === fu) {
				for (ds = 0; ds < this.vC[fu][0].length; ds++)
					if (name === this.vC[fu][0][ds].name && a29 > .99 * this.vC[fu][0][ds].value && a29 < 1.01 * this.vC[fu][0][ds].value) {
						this.vC[fu][0][ds].value = a2A, w2 = !0;
						break
					} w2 || this.vC[fu][0].push({
					name: name,
					value: a2A
				})
			} else {
				for (ds = 0; ds < this.vC[fu][0].length; ds++)
					if (name === this.vC[fu][0][ds].name) {
						this.vC[fu][0][ds].value += 32 < this.vC[fu][0][ds].value ? (64 - this.vC[fu][0][ds].value) / 256 : .25, this.vC[fu][0][ds].value *= 1 / (383 / 384), w2 = !0;
						break
					} for (ds = 0; ds < this.vC[fu][0].length; ds++) this.vC[fu][0][ds].value *= 383 / 384;
				w2 || this.vC[fu][0].push({
					name: name,
					value: .25
				})
			}
			this.a27(fu)
		}
	}, this.a26 = function(a22, fz, g1) {
		for (var ds = a22.length - 1; 0 <= ds; ds--)
			for (; 3 < a22[ds].name.length && n.measureText(a22[ds].name, fz) > g1;) a22[ds].name = a22[ds].name.substring(0, a22[ds].name.length - 4) + "..."
	}, this.g3 = function(gt, gu) {
		return !!this.sH && (gt -= (jp - this.g0) / 2, gu -= (g7 - this.i0) / 2, gt < 0 || gt > this.g0 || gu < 0 || gu > this.i0 ? (this.sH = !1, 0 === x.sR() && z.dQ(!0), b7.d2 = !0) : (gu = gu < .3 * this.i0 ? 1 : gu < .85 * this.i0 ? (gu = (
				0 === this.a1j ? 14.1 : 3) * (gu - .3 * this.i0) / (.55 * this.i0), Math.floor(1 + gu * gu)) : 0 === this.a1j ? 200 : 10, gt < this.g0 / 2 ? this.a1y[this.a1j] = -gu : this.a1y[this.a1j] = gu, a1w[this.a1j] + 50 > b7.dT ||
			(a1w[this.a1j] = b7.dT, aP.j4.zY(0, 1 + this.a1j) && aP.lg.a1z(0, this.a1j)), !0))
	}, this.gA = function() {
		var jm, jn, qN, qO, a2B, a2C, t1, t2;
		this.sH && (jm = (jp - this.g0) / 2, jn = (g7 - this.i0) / 2, qN = this.a1k * this.g0, qO = this.a1o * qN, a2B = this.a1l * this.g0, a2C = this.a1p * a2B, t1 = this.a1m * this.g0, t2 = Math.floor(.25 * this.i0), gB.setTransform(1, 0, 0,
				1, jm, jn), gB.fillStyle = 0 === this.a1j ? ae.lL : ae.lJ, gB.fillRect(0, 0, this.g0, t2), gB.fillStyle = ae.ko, gB.fillRect(0, t2, this.g0, this.i0 - t2), gB.fillStyle = ae.gE, gB.font = a1v, gB.textBaseline = gC, gB
			.textAlign = gD, gB.fillText(a1u[this.a1j], Math.floor(this.g0 / 2), Math.floor(.135 * this.i0)), gB.font = fv + Math.floor(.025 * this.i0) + fw, gB.fillText(a1u[this.a1j + 2], Math.floor(this.g0 / 2), Math.floor(.2125 * this
			.i0)), gB.beginPath(), gB.moveTo(this.g0 / 4, 0), gB.lineTo(this.g0 / 2 - qN, 0), gB.lineTo(this.g0 / 2, -qO), gB.lineTo(this.g0 / 2 + qN, 0), gB.lineTo(this.g0 - a2B, 0), gB.lineTo(this.g0 + a2C, -a2C), gB.lineTo(this.g0, a2B),
			gB.lineTo(this.g0, this.i0 / 2 - qN), gB.lineTo(this.g0 + qO, this.i0 / 2), gB.lineTo(this.g0, this.i0 / 2 + qN), gB.lineTo(this.g0, this.i0 - a2B), gB.lineTo(this.g0 + a2C, this.i0 + a2C), gB.lineTo(this.g0 - a2B, this.i0), gB
			.lineTo(this.g0 / 2 + qN, this.i0), gB.lineTo(this.g0 / 2, this.i0 + qO), gB.lineTo(this.g0 / 2 - qN, this.i0), gB.lineTo(a2B, this.i0), gB.lineTo(-a2C, this.i0 + a2C), gB.lineTo(0, this.i0 - a2B), gB.lineTo(0, this.i0 / 2 + qN),
			gB.lineTo(-qO, this.i0 / 2), gB.lineTo(0, this.i0 / 2 - qN), gB.lineTo(0, a2B), gB.lineTo(-a2C, -a2C), gB.lineTo(a2B, 0), gB.lineTo(this.g0 / 4, 0), gB.lineTo(this.g0 / 4, t1), gB.lineTo(t1, t1), gB.lineTo(t1, this.i0 - t1), gB
			.lineTo(this.g0 - t1, this.i0 - t1), gB.lineTo(this.g0 - t1, t1), gB.lineTo(this.g0 / 4, t1), gB.fill(), this.vC[this.a1j] && this.a2D(t2), this.a2E(t2), gB.setTransform(1, 0, 0, 1, 0, 0))
	}, this.a2E = function(t2) {
		var qN = vY(2, Math.floor(.06 * this.g0)),
			wK = (qN -= qN % 2, vY(2, Math.floor(.01 * this.g0))),
			t2 = (wK -= wK % 2, Math.floor(.82 * t2));
		gB.fillRect(qN, t2, qN, wK), gB.fillRect(this.g0 - qN - qN, t2, qN, wK), gB.fillRect(Math.floor(this.g0 - qN - qN + (qN - wK) / 2), Math.floor(t2 - (qN - wK) / 2), wK, qN)
	}, this.a2D = function(t2) {
		var ji;
		gB.font = this.vC[this.a1j][4];
		for (var ds = this.vC[this.a1j][1] - 1; 0 <= ds; ds--) gB.textAlign = x3, ji = Math.floor(this.a1t * this.i0 + t2 + ds * ((1 - 2 * this.a1t) * this.i0 - t2) / 9), gB.fillText(this.vC[this.a1j][0][ds].value.toFixed(this.vC[this.a1j][3]),
			Math.floor(this.a1s * this.g0), ji), gB.fillText(ds + 1 + this.vC[this.a1j][6] + ".", Math.floor(this.a1q * this.g0), ji), gB.textAlign = vg, gB.fillText(this.vC[this.a1j][0][ds].name, Math.floor(this.a1r * this.g0), ji)
	}
}

function cy() {
	var jh, ji, i0, a2F, a2G, a2H, a2I, a2J, a2K, g0, a2L, a2M;
	this.sH = !1, this.ch = function(db, a2N) {
		if (13 <= dV && dV < 18) return a2N ? void(a2L = db) : a2L !== db ? void 0 : void dS.saveString(200, db);
		a2N && ((g8.vC[1].r6.sH || g8.vC[2].r6.sH) && g8.sS(), z.dQ(!1), a2L = db, (a2M = document.createElement("a")).appendChild(document.createTextNode(a2L)), this.sH = !0, a2M.title = a2L, a2M.target = "_blank", a2M.href = a2L, a2M.style
			.textAlign = "center", a2M.style.color = ae.gE, a2M.style.position = "absolute", a2M.style.padding = "0px", a2M.style.margin = "0px", this.resize(), document.body.appendChild(a2M), b7.d2 = !0)
	}, this.oH = function() {
		return !(!this.sH || (document.body.removeChild(a2M), this.sH = !1))
	}, this.g3 = function(gt, gu) {
		return !!this.sH && ((gt < jh || gu < ji || jh + g0 < gt || ji + i0 < gu || jh + g0 - a2F < gt && gu < ji + a2F) && (b7.d2 = !0, this.sH = !1, document.body.removeChild(a2M), 0 === x.sR()) && z.dQ(!0), !0)
	}, this.resize = function() {
		var fz, a2O;
		this.sH && (a2J = Math.floor(.8 * (de ? dg < df ? .6 : .55 : .4) * fs), a2F = Math.floor(.15 * a2J), a2G = Math.floor(.35 * a2F), a2H = Math.floor(.5 * a2F), a2I = Math.floor(2.5 * a2H), i0 = a2F + a2G + 3 * a2H, fz = fv + Math.floor(
			a2G / nP) + fw, a2K = Math.floor(nP * n.measureText(a2L, fz)), a2O = g0 = (a2J < a2K ? a2K : a2J) + 2 * a2I, g0 = Math.min(g0, df - 2 * (de ? 2 : 1) * nZ), fz = fv + Math.floor(g0 / a2O * a2G / nP) + fw, a2K = Math.floor(nP *
			n.measureText(a2L, fz)), jh = Math.floor((jp - g0) / 2), ji = Math.floor((g7 - i0) / 2), a2M.style.font = fz, a2M.style.top = Math.floor((ji + 1.4 * a2H + a2F) / nP) + "px", a2M.style.left = Math.floor((jh + (g0 - a2K) / 2) /
			nP) + "px")
	}, this.gA = function() {
		this.sH && (gB.fillStyle = ae.kp, gB.fillRect(jh, ji + a2F, g0, i0 - a2F), gB.fillStyle = ae.lX, gB.fillRect(jh, ji, g0, a2F), gB.fillStyle = ae.gE, gB.lineWidth = t3, gB.strokeStyle = ae.gE, gB.strokeRect(jh, ji, g0, i0), gB.fillRect(jh,
			ji + a2F, g0, t3), gB.font = fv + Math.floor(.48 * a2F) + fw, gB.textAlign = gD, gB.textBaseline = gC, gB.fillText("You are leaving Territorial.io!", Math.floor(jh + (g0 - .5 * a2F) / 2), Math.floor(ji + .55 * a2F)), j.vA(Math
			.floor(jh + g0 - .8 * a2F), Math.floor(ji + .25 * a2F), Math.floor(.5 * a2F)), gB.setTransform(1, 0, 0, 1, 0, 0))
	}
}

function ck() {
	var gap, us, jh = [0, 0, 0, 0, 0],
		ji = [0, 0, 0, 0, 0],
		kV = [1, 1, 1, 1, 1],
		dy = [!0, !0, !0, !0, !0],
		iU = (this.eC = [!0, !0, !0, !0, !0], null);
	this.a2P = function(uF, a2Q) {
		iU = uF, dy = a2Q, us = [am.a2R, am.a2S, am.a2T, am.a2U, am.a2V], this.ch()
	}, this.ch = function() {
		if (a3.fy()) {
			var ds, qN = Math.floor((de ? .261 : .195) * fs),
				qO = Math.floor(.9 * qN),
				wK = Math.floor(.17 * qO);
			if (gap = de ? 2 * nZ : nZ, kV[0] = qN / iU[0].width, kV[1] = qO / iU[1].width, kV[2] = wK / iU[2].height, kV[3] = wK / iU[3].height, kV[4] = wK / iU[4].height, kV[3] *= 1.07, jh[0] = gap, jh[1] = gap, jh[2] = gap, jh[3] = gap, jh[
				4] = Math.floor(2 * gap + kV[3] * iU[3].width), ji[0] = gap, ji[1] = ji[0] + gap + kV[0] * iU[0].height, ji[2] = ji[1] + gap + kV[1] * iU[1].height, ji[3] = ji[2] + gap + kV[2] * iU[2].height, ji[4] = ji[3], !dy[0])
				for (ds = 0; ds < 5; ds++) ji[ds] -= kV[0] * iU[0].height + gap;
			if (!dy[1])
				for (ds = 2; ds < 5; ds++) ji[ds] -= kV[1] * iU[1].height + gap
		}
	}, this.sH = function() {
		return !(7 === x.sR() && de)
	}, this.g3 = function(gt, gu, a2N) {
		if (iU && this.sH())
			for (var ds = dy.length - 1; 0 <= ds; ds--)
				if (dy[ds] && this.eC[ds] && jh[ds] < gt && ji[ds] < gu && gt < jh[ds] + kV[ds] * iU[ds].width && gu < ji[ds] + kV[ds] * iU[ds].height) return az.ch(us[ds], a2N), !0;
		return !1
	}, this.gA = function() {
		if (iU && this.sH()) {
			var ds;
			for (gB.imageSmoothingEnabled = !0, ds = 0; ds < 5; ds++) dy[ds] && this.eC[ds] && (gB.setTransform(kV[ds], 0, 0, kV[ds], jh[ds], ji[ds]), gB.drawImage(iU[ds], 0, 0));
			gB.setTransform(1, 0, 0, 1, 0, 0)
		}
	}
}

function cG() {
	this.id = 0, this.wU = 0;
	var a2W = null,
		a2X = !1;
	this.ch = function() {
		var up, e8, eA;
		dS ? this.id = 1 : dR ? this.id = 2 : (function() {
			try {
				if (!(a2W = window.localStorage)) return a2W = null;
				a2W.setItem("testLS", "1"), a2W.removeItem("testLS")
			} catch (error) {
				return a2W = null
			}
			a2X = !0
		}(), up = this, a2X && (e8 = Number(a2W.getItem("zt0")), eA = Number(a2W.getItem("zt1")), e8 && eA ? (up.id = e8, up.wU = Math.floor(Date.now() / 3e5) - eA) : (a2W.setItem("zt0", "" + Math.floor(3 + Math.random() * (Math.pow(2,
			20) - 3))), a2W.setItem("zt1", "" + Math.floor(Date.now() / 3e5)))))
	}
}

function bc() {
	var a1j, a2c, a2d;

	function a2i(ds) {
		var button = v.n5[ds],
			jh = button.jh,
			ji = button.ji,
			g0 = button.g0,
			i0 = button.i0;
		gB.fillStyle = button.a2g, gB.fillRect(jh, ji, g0, i0), ds === a1j && (gB.fillStyle = a2d, gB.fillRect(jh, ji, g0, i0)), gB.lineWidth = t3, gB.strokeStyle = a2c, gB.strokeRect(jh, ji, g0, i0),
			function(button) {
				var jh = button.jh,
					ji = button.ji,
					g0 = button.g0,
					i0 = button.i0;
				gB.textAlign = gD, gB.textBaseline = gC, gB.font = button.font, gB.fillStyle = a2c, gB.fillText(button.wQ, Math.floor(jh + g0 / 2), Math.floor(ji + i0 / 2 + .1 * button.fontSize))
			}(button)
	}
	this.g0 = 0, this.i0 = 0, this.ji = 0, this.gap = 0, this.ch = function() {
		a1j = -1, a2c = ae.gE, a2d = "rgba(255,255,255,0.16)", this.n5 = new Array(7), this.i0 = Math.floor((de ? .123 : .093) * fs), this.g0 = Math.floor((de ? 3.96 : 4.2) * this.i0), this.gap = Math.floor(.025 * this.g0);
		var a2e = Math.floor(.26 * this.i0),
			a2f = fv + a2e + fw;
		this.n5[0] = {
			jh: 0,
			ji: 0,
			g0: Math.floor(.6 * this.g0 - this.gap / 2),
			i0: this.i0,
			wQ: "Multiplayer",
			font: a2f,
			a2g: "rgba(22,88,22,0.8)",
			fontSize: a2e
		}, a2e = Math.floor(.18 * this.i0), this.n5[1] = {
			jh: 0,
			ji: 0,
			g0: this.g0 - this.n5[0].g0 - this.gap,
			i0: this.i0,
			wQ: "Single Player",
			font: fv + a2e + fw,
			a2g: "rgba(22,88,88,0.8)",
			fontSize: a2e
		}, this.n5[2] = {
			jh: 0,
			ji: 0,
			g0: this.g0,
			i0: Math.floor(.3 * this.i0),
			wQ: "",
			font: this.n5[1].font,
			a2g: "rgba(100,0,0,0.8)",
			fontSize: this.n5[1].fontSize
		}, this.n5[3] = {
			jh: 0,
			ji: 0,
			g0: this.g0,
			i0: this.i0,
			wQ: "Back",
			font: this.n5[0].font,
			a2g: "rgba(0,0,0,0.8)",
			fontSize: this.n5[0].fontSize
		}, this.n5[4] = {
			jh: 0,
			ji: 0,
			g0: this.g0,
			i0: Math.floor(.3 * this.i0),
			wQ: "The game was updated!",
			font: this.n5[1].font,
			a2g: "rgba(100,0,0,0.8)",
			fontSize: this.n5[1].fontSize
		}, this.n5[5] = {
			jh: 0,
			ji: 0,
			g0: this.n5[0].g0,
			i0: Math.floor(.8 * this.i0),
			wQ: "Reload",
			font: this.n5[0].font,
			a2g: "rgba(0,100,0,0.8)",
			fontSize: this.n5[0].fontSize
		}, this.n5[6] = {
			jh: 0,
			ji: 0,
			g0: this.n5[1].g0,
			i0: this.n5[5].i0,
			wQ: "Back",
			font: this.n5[0].font,
			a2g: "rgba(0,0,0,0.8)",
			fontSize: this.n5[0].fontSize
		}, this.zg()
	}, this.zg = function() {
		this.ji = Math.floor(.54 * g7), this.n5[0].jh = Math.floor(.5 * jp - .5 * this.g0), this.n5[1].jh = this.n5[0].jh + this.n5[0].g0 + this.gap, this.n5[2].jh = this.n5[3].jh = this.n5[0].jh, this.n5[4].jh = this.n5[5].jh = this.n5[0].jh,
			this.n5[6].jh = this.n5[1].jh, this.n5[0].ji = Math.floor(.54 * g7), this.n5[1].ji = this.n5[0].ji, this.n5[2].ji = Math.floor((g7 - this.n5[2].i0 - this.n5[3].i0 - this.gap) / 2), this.n5[3].ji = this.n5[2].ji + this.n5[2].i0 + this
			.gap, this.n5[4].ji = Math.floor((g7 - this.n5[4].i0 - this.n5[5].i0 - this.gap) / 2), this.n5[5].ji = this.n5[6].ji = this.n5[4].ji + this.n5[4].i0 + this.gap
	}, this.a2h = function() {
		a2i(0), a2i(1)
	}, this.a2j = function() {
		a2i(2), a2i(3)
	}, this.a2k = function() {
		a2i(4), a2i(5), a2i(6)
	}, this.rq = function(jh, ji, jD) {
		var ds = -1;
		return 0 === x.sR() ? ds = this.sP(jh, ji, 0, 2) : 3 === x.sR() ? ds = this.sP(jh, ji, 3, 1) : 5 === x.sR() && (ds = this.sP(jh, ji, 5, 2)), a1j !== ds && (a1j = ds, jD) && (b7.d2 = !0), -1 !== ds && (q.sJ(), !0)
	}, this.sP = function(jh, ji, a2l, gH) {
		for (var ds = a2l; ds < a2l + gH; ds++)
			if (jh >= this.n5[ds].jh && ji >= this.n5[ds].ji && jh <= this.n5[ds].jh + this.n5[ds].g0 && ji <= this.n5[ds].ji + this.n5[ds].i0) return ds;
		return -1
	}
}

function a2n() {
	function a2t(uI) {
		return uI < 0 ? 0 : 255 < uI ? 255 : Math.floor(uI)
	}
	this.g0 = 0, this.i0 = 0, this.sH = !1, this.a2o = 0, this.gap = 0, this.wk = 0, this.a2F = 0, this.a2p = 0, this.a2q = 0, this.a2r = 0, this.colors = null, this.ch = function() {
		this.sH = !0, this.a2o = 0, this.resize()
	}, this.resize = function() {
		this.sH && (df < 1.4 * dg ? this.g0 = Math.floor((de ? .94 : .43) * df) : (this.i0 = Math.floor((de ? .88 : .43) * dg), this.g0 = Math.floor(1.4 * this.i0)), this.i0 = this.g0 / 1.4, this.gap = this.g0 / 32, this.a2F = Math.floor(.25 *
			this.i0), this.a2p = (this.i0 - this.a2F - 3 * this.gap) / 2, this.a2q = this.g0 - 3 * this.gap - this.a2p, this.a2r = (this.i0 - this.a2F - 4 * this.gap) / 3)
	}, this.a2s = function() {
		this.colors = [
			[0, 0, 0],
			[0, 0, 0]
		];
		var db = di().split("");
		if (db.length < 6)
			for (var hs = 2; 0 <= hs; hs--) this.colors[0][hs] = a2t(256 * Math.random());
		else
			for (var ds = 2; 0 <= ds; ds--) this.colors[0][ds] = a2t(4 * (10 * parseInt(db[2 * ds]) + parseInt(db[2 * ds + 1])));
		this.a2u()
	}, this.a2v = function() {
		return [el(this.colors[0][0], 4), el(this.colors[0][1], 4), el(this.colors[0][2], 4)]
	}, this.rt = function(g4, g5, deltaY) {
		var jm = (jp - this.g0) / 2;
		g5 -= (g7 - this.i0) / 2 + this.a2F, (g4 -= jm) < 0 || g5 < 0 || g4 >= this.g0 || g5 >= this.i0 - this.a2F || (jm = Math.floor(3 * g5 / (this.i0 - this.a2F)), this.colors[this.wk][jm] = a2t(this.colors[this.wk][jm] + (deltaY < 0 ? 1 : -
			1) * Math.max(Math.abs(.05 * deltaY), 1)), b7.d2 = !0)
	}, this.g3 = function(g4, g5) {
		this.a2o = 0;
		var jm = (jp - this.g0) / 2;
		return g5 -= (g7 - this.i0) / 2, (g4 -= jm) < 0 || g5 < 0 || g4 >= this.g0 - 1 || g5 >= this.i0 - 1 || g4 > this.g0 - (.4 * this.a2F + 3 * this.gap) && g5 < this.a2F ? (this.sH = !1, 0 === x.sR() && z.dQ(!0), !(b7.d2 = !0)) : g4 < this
			.gap || g5 < this.gap + this.a2F || g4 >= this.g0 || g5 >= this.i0 - this.gap || (g4 < this.gap + this.a2p ? (g5 < this.gap + this.a2F + this.a2p && 0 !== this.wk && (this.wk = 0, b7.d2 = !0), !0) : g4 < this.gap + this.a2p || (g4 -=
				2 * this.gap + this.a2p, g5 < this.gap + this.a2F + this.a2r ? (this.a2o = 1, this.colors[this.wk][0] = a2t(256 * g4 / this.a2q), b7.d2 = !0) : g5 < 2 * this.gap + this.a2F + this.a2r || (g5 < 2 * this.gap + this.a2F + 2 *
					this.a2r ? (this.a2o = 2, this.colors[this.wk][1] = a2t(256 * g4 / this.a2q), b7.d2 = !0) : !(g5 >= 3 * this.gap + this.a2F + 2 * this.a2r) || (this.a2o = 3, this.colors[this.wk][2] = a2t(256 * g4 / this.a2q), b7.d2 = !0))
				))
	}, this.a2u = function() {
		for (var hs = 2; 0 <= hs; hs--) this.colors[0][hs] = a2t(this.colors[0][hs])
	}, this.a2w = function() {
		for (var dy, db = "", ds = 0; ds < 3; ds++)(dy = el(this.colors[0][ds], 4)) < 10 && (db += "0"), db += dy.toString();
		return db
	}, this.rq = function(g4) {
		0 !== this.a2o && (g4 -= 2 * this.gap + this.a2p + (jp - this.g0) / 2, this.colors[this.wk][this.a2o - 1] = a2t(256 * g4 / this.a2q), b7.d2 = !0)
	}, this.a2x = function() {
		0 < this.a2o && (this.a2o = 0, this.a2u(), aR.a2y(), b7.d2 = !0)
	}, this.gA = function() {
		var jm = (jp - this.g0) / 2,
			jn = (g7 - this.i0) / 2;
		gB.setTransform(1, 0, 0, 1, jm, jn), gB.fillStyle = ae.kp, gB.fillRect(0, this.a2F, this.g0, this.i0 - this.a2F), gB.fillStyle = ae.l0, gB.fillRect(0, 0, this.g0, this.a2F), gB.fillStyle = ae.gE, gB.lineWidth = t3, gB.strokeStyle = ae.gE,
			gB.strokeRect(-1, -1, this.g0 + 2, this.i0 + 2), gB.fillRect(0, this.a2F, this.g0, t3), gB.font = fv + Math.floor(.31 * this.a2F) + fw, gB.textBaseline = gC, gB.textAlign = gD, gB.fillText("Choose Your Nation's Color!", Math.floor((
				this.g0 - this.gap - .4 * this.a2F) / 2), Math.floor(.55 * this.a2F)), this.a2z(0), gB.lineWidth = t3, this.a30(0), this.a30(1), this.a30(2), j.vA(Math.floor(jm + this.g0 - .4 * this.a2F - this.gap), Math.floor(jn + .3 * this
				.a2F), Math.floor(.4 * this.a2F)), gB.setTransform(1, 0, 0, 1, 0, 0)
	}, this.a2z = function(ds) {
		var gQ = this.colors[ds][0],
			sz = this.colors[ds][1],
			ds = this.colors[ds][2];
		gB.fillStyle = "rgb(" + gQ + "," + sz + "," + ds + ")", gB.fillRect(this.gap, this.a2F + this.gap, this.a2p, 2 * this.a2p + this.gap), gB.lineWidth = t3, gB.strokeStyle = ae.gE, gB.strokeRect(this.gap, this.a2F + this.gap, this.a2p, 2 *
			this.a2p + this.gap), gB.fillStyle = gQ + sz + ds < 306 && sz < 150 ? ae.gE : ae.jt, gB.font = fv + Math.floor(.32 * this.a2r) + fw, gB.textAlign = gD, gB.textBaseline = gC, gB.rotate(-Math.PI / 2), gB.fillText("National Color",
			Math.floor(-1.5 * this.gap - this.a2F - this.a2p), Math.floor(this.gap + .5 * this.a2p)), gB.rotate(Math.PI / 2)
	}, this.a30 = function(ds) {
		gB.fillStyle = "rgb(" + (0 === ds ? 150 : 2 === ds ? 30 : 0) + "," + (1 === ds ? 130 : 2 === ds ? 30 : 0) + "," + (2 === ds ? 220 : 0) + ")", gB.fillRect(2 * this.gap + this.a2p, this.a2F + this.gap + ds * (this.gap + this.a2r), Math
				.floor(this.colors[this.wk][ds] * this.a2q / 255), this.a2r), gB.strokeStyle = ae.gE, gB.strokeRect(2 * this.gap + this.a2p, this.a2F + this.gap + ds * (this.gap + this.a2r), this.a2q, this.a2r), gB.fillStyle = ae.gE, gB.font =
			fv + Math.floor(.32 * this.a2r) + fw, gB.textBaseline = gC, gB.textAlign = vg, gB.fillText((0 === ds ? "Red: " : 1 === ds ? "Green: " : "Blue: ") + this.colors[0][ds].toString(), 3 * this.gap + this.a2p, Math.floor(this.a2F + this
				.gap + ds * (this.gap + this.a2r) + .53 * this.a2r))
	}
}

function bd() {
	var a31, a32, xE, xP, yI, a33, a34, a35, a36, fz, fontSize, kB, a37, a39, a38 = 0;

	function a3C() {
		return aP.j4.a3D[(a37 + a38) % aP.j4.a3E]
	}

	function a3A() {
		a37++, kB = b7.dT, aP.j4.zY(a3C(), 4) && (a39 = !0, aP.lg.a3F(a3C()))
	}

	function a3I() {
		0 === a37 ? y.a3K(3249) : (a37 === aP.j4.a3E - 1 && (a37 = -1), a3A())
	}

	function a3R(ji, zJ, a3Q) {
		var jm = Math.floor((jp - xP) / 2) + a34,
			jo = jm + Math.floor(a3Q * (xP - 2 * a34));
		gB.lineWidth = zJ, gB.beginPath(), gB.moveTo(jm, ji), gB.lineTo(jo, ji), gB.lineTo(Math.floor(jm - a34 + a3Q * xP), ji + xE), gB.lineTo(jm - a34, ji + xE), gB.closePath()
	}
	this.ch = function() {
		x.setState(6), a31 = 0, a32 = 1, a35 = "rgba(0,220,120,0.4)", a36 = "rgba(0,0,0,0.8)", this.resize(), b7.d2 = !0, a37 = 0, a39 = !1, a3A()
	}, this.resize = function() {
		xP = Math.floor((de ? .5 : .25) * fs), yI = xP + 12, xE = Math.floor(.125 * xP), a34 = 3 * xE, a33 = Math.floor(.225 * xP), fontSize = Math.floor(.3 * xE), fz = x5 + fontSize + fw
	}, this.a3B = function(hi) {
		a38 = hi
	}, this.a3G = function(a3H) {
		a3H === a3C() && (a39 = !1, a3I())
	}, this.za = function(a3H) {
		6 !== x.sR() || a39 || (kB = b7.dT, a39 = !0, aP.lg.a3F(a3H))
	}, this.g3 = function(jh, ji) {
		var jm = Math.floor((jp - yI) / 2),
			jn = Math.floor(.5 * (g7 - g6 - xE - a33)) + xE + g6;
		return jm < jh && jh < jm + yI && jn < ji && ji < jn + a33 && (this.a3L(), v.rq(jh, ji, !1), !0)
	}, this.a3L = function() {
		aP.j4.a3M(3260), a2.ch(), b7.d2 = !0
	}, this.iF = function() {
		6 === x.sR() && (a39 ? b7.dT > kB + 12e3 && y.a3K(3250) : b7.dT > kB + 12e3 && a3I(), 100 < (a31 += .07 * a32 * (a31 < 16 ? 5 + a31 : 84 < a31 ? 105 - a31 : 17)) ? (a31 = 100, a32 = -1) : a31 < 0 && (a31 = 0, a32 = 1), a35 = "rgba(0," +
			Math.floor(190 - 1.9 * a31) + "," + Math.floor(120 - 1.2 * a31) + "," + (.4 + .004 * a31) + ")", a36 = "rgba(0," + Math.floor(1.9 * a31) + "," + Math.floor(1.2 * a31) + "," + (.8 - .004 * a31) + ")", b7.d2 = !0)
	}, this.gA = function() {
		var jh = Math.floor((jp - yI) / 2),
			ji = Math.floor(.5 * (g7 - g6 - xE - a33));
		! function(title, ji, zJ, a3Q) {
			gB.fillStyle = a36, a3R(ji, zJ, 1), gB.fill(), gB.fillStyle = a35, a3R(ji, zJ, a3Q), gB.fill(), gB.strokeStyle = ae.gE, a3R(ji, zJ, 1), gB.stroke(),
				function(a3T, ji) {
					gB.textAlign = gD, gB.textBaseline = gC, gB.font = fz, gB.fillStyle = ae.gE, gB.fillText(a3T, Math.floor(.5 * jp), Math.floor(ji + .58 * xE))
				}(title, ji)
		}("Loading", ji, 3, a31 / 100),
		function(jh, ji, g0, i0, wQ) {
			gB.fillStyle = ae.kn, gB.fillRect(jh, ji, g0, i0), gB.lineWidth = 3, gB.strokeStyle = ae.gE, gB.strokeRect(jh, ji, g0, i0);
			var et = Math.floor(.3 * i0);
			gB.textAlign = gD, gB.textBaseline = gC, gB.font = x5 + et + fw, gB.fillStyle = ae.gE, gB.fillText(wQ, Math.floor(jh + g0 / 2), Math.floor(ji + i0 / 2 + .1 * et))
		}(jh, ji + xE + g6, yI, a33, "Back")
	}
}

function be() {
	var dO;
	this.ch = function() {
		v.ch(), z.ch(), dO = 0, b6.ch(), a2.ch()
	}, this.setState = function(a3U) {
		dO = a3U
	}, this.sR = function() {
		return dO
	}, this.a3V = function() {
		0 === x.sR() && a2.a3W(), this.setState(8), aL.a3W(), g8.sS(), bA.sH = !1, az.g3(-1e3, -1e3)
	}, this.sS = function(dC) {
		if (!au.p7) return !1;
		if (!(b7.dT < 400)) {
			if ("Enter" === dC.key || "Escape" === dC.key) {
				if (this.a3X()) return 0 === dO && z.dQ(!0), !0;
				if ("Enter" === dC.key) {
					if (0 === dO) return a2.a3Y(), !0;
					if (7 === dO) return !0
				}
			}
			return !1
		}
	}, this.a3Z = function() {
		return ac.sH || bA.sH || az.sH || g8.a3a()
	}, this.a3b = function() {
		bA.resize(), ac.resize(), az.resize(), g8.resize()
	}, this.a3X = function() {
		return !!az.oH() || !(!g8.sS() && (bA.sH ? bA.sH = !1 : !ac.sH || (ac.oH(), 0)))
	}, this.dz = function() {
		b7.d2 = !0, 8 === dO ? kN ? af.sU(!1) : b5.sH ? b5.sV() : ac.sH ? ac.oH() : j.sV() : 7 === dO ? aL.a3c() : 6 === dO ? w.a3L() : 3 === dO ? y.a3d(0, 0) : 2 === dO ? a1.a3d() : 0 !== dO || this.a3X() || dw(11)
	}, this.g3 = function(jh, ji) {
		if (!b6.g3(jh, ji) && au.p7 && !az.g3(jh, ji) && !ac.g3(jh, ji) && !(6 === dO && w.g3(jh, ji) || 2 === dO && a1.g3(jh, ji) || aR.g3(jh, ji) || bA.g3(jh, ji) || ay.g3(jh, ji, !0) || g8.g3(jh, ji, !0))) {
			if (q.g3(jh, ji), 0 === dO) a2.g3(jh, ji);
			else if (3 === dO) y.g3(jh, ji);
			else if (5 === dO) a0.g3(jh, ji);
			else if (7 === dO && aL.g3(jh, ji)) return;
			b0.g3(jh, ji)
		}
	}, this.rq = function(jh, ji) {
		if (aR.rq(jh, ji), !q.zW) {
			if (b6.rq(jh, ji)) return void q.sJ();
			if (0 <= g8.sP(jh, ji)) return void q.sJ();
			if (g8.rq(jh, ji)) return void q.sJ();
			if (2 === dO && a1.rq(jh, ji)) return void q.sJ();
			if (v.rq(jh, ji, !0)) return
		}
		q.rq(jh, ji)
	}, this.click = function(jh, ji) {
		q.sK(), g8.a2x() || ay.g3(jh, ji, !1) || g8.g3(jh, ji, !1)
	}, this.rt = function(jh, ji, deltaY) {
		g8.vC[1].r6.sH || (g8.vC[2].r6.sH ? g8.vC[2].r6.rt(jh, ji, deltaY) : 0 === dO && q.rt(jh, deltaY))
	}, this.a3e = function() {
		v.zg(), g8.zg(), 0 === dO ? (z.resize(), q.zg()) : 7 === dO && aL.resize(), b7.d2 = !0
	}, this.gA = function() {
		var ji, gN, gM, jh;
		8 !== dO && 10 !== dO && (gB.imageSmoothingEnabled = !0, this.qE(), q.gA(), l.gA(), ji = Math.floor(.3 * g7), gN = a3.uG("territorial.io"), gM = (gM = 1.75 * g7 / gN.width) * gN.width < .98 * jp ? .98 * jp / gN.width : gM, gB
			.globalAlpha = .15, jh = Math.floor(.5 * (jp - gM * gN.width)), jh = Math.floor(jh / gM), ji = Math.floor(ji - .5 * gN.height * gM), ji = Math.floor(ji / gM), gB.setTransform(gM, 0, 0, gM, jh, ji), gB.drawImage(gN, jh, ji), gB
			.setTransform(1, 0, 0, 1, 0, 0), gB.globalAlpha = 1, ay.gA(), b0.gA(), g8.gA(), aR.gA(), 0 === dO ? a2.gA() : 2 === dO ? a1.gA() : 3 === dO ? y.gA() : 5 === dO ? a0.gA() : 6 === dO ? w.gA() : 7 === dO && aL.gA(), g8.a3g(), b6
		.gA(), bA.gA(), az.gA(), ac.gA())
	}, this.qE = function() {
		var a3i, a3h;
		au.p7 ? (a3h = df / au.eT, a3i = dg / au.eU, gB.setTransform(a3h = a3i < a3h ? a3h : a3i, 0, 0, a3h, Math.floor((df - a3h * au.eT) / 2), Math.floor((dg - a3h * au.eU) / 2)), gB.drawImage(au.p9, 0, 0), gB.setTransform(1, 0, 0, 1, 0, 0), gB
			.fillStyle = ae.kn) : gB.fillStyle = ae.jt, gB.fillRect(0, 0, df, dg)
	}
}

function a3j() {
	this.g0 = 0, this.i0 = 0, this.a3k = 0, this.sH = !1, this.wZ = 10, this.f0 = .12, this.a2o = !1, this.a3l = !1, this.a3m = !1, this.ch = function() {
		this.sH = !0, this.resize(), this.a2o = !1
	}, this.resize = function() {
		this.sH && (this.g0 = 1.15 * df < dg ? Math.floor((de ? .94 : .69) * df) : Math.floor((de ? .94 : .69) * dg / 1.15), this.g0 -= this.g0 % this.wZ, this.i0 = +this.g0, this.a3k = Math.floor(.15 * this.g0))
	}, this.g3 = function(g4, g5, dO) {
		var jm = (jp - this.g0) / 2;
		return g5 -= (g7 - this.i0 - this.a3k) / 2, (g4 -= jm) < 0 || g5 < 0 || g4 >= this.g0 - 1 || g5 >= this.i0 + this.a3k - 1 || g4 >= this.g0 - this.a3k && g5 < this.a3k ? (0 === dO && (this.sH = !1, 0 === x.sR() && z.dQ(!0), b7.d2 = !0), !
			1) : (g5 < this.a3k || (g4 = (g4 = el(g4, jm = Math.floor(this.g0 / this.wZ)) + this.wZ * el(g5 - this.a3k, jm)) < 0 ? 0 : g4 >= b3.wd ? b3.wd - 1 : g4, (0 === dO || 1 === dO && !b3.du[g4] || 2 === dO && b3.du[g4]) && (this
			.a3l = !b3.du[g4], this.a2o = !0, this.a3m = !0, b3.du[g4] = !b3.du[g4], b3.wt(), b7.d2 = !0)), !0)
	}, this.rq = function(g4, g5) {
		this.a2o && this.g3(g4, g5, this.a3l ? 1 : 2)
	}, this.a2x = function() {
		this.a3m && (dr(), this.a3m = !1), this.a3m = !1, this.a2o = !1
	}, this.gA = function() {
		gB.imageSmoothingEnabled = !0;
		for (var jm = (jp - this.g0) / 2, jn = (g7 - this.i0 - this.a3k) / 2, qN = (gB.setTransform(1, 0, 0, 1, jm, jn), gB.fillStyle = ae.kp, gB.fillRect(0, this.a3k, this.g0, this.i0), gB.fillStyle = ae.l4, gB.fillRect(0, 0, this.g0, this.a3k),
					gB.fillStyle = ae.gE, gB.lineWidth = t3, gB.strokeStyle = ae.gE, gB.strokeRect(-1, -1, this.g0 + 2, this.i0 + this.a3k + 2), gB.fillRect(0, this.a3k - t3, this.g0, t3), gB.font = fv + Math.floor(.44 * this.a3k) + fw, gB
					.textAlign = gD, gB.textBaseline = gC, gB.fillText("Select Your Emojis!", Math.floor((this.g0 - .725 * this.a3k) / 2), Math.floor(.55 * this.a3k)), Math.floor(this.g0 / this.wZ)), zoom = (qN - 2 * this.f0 * qN) / b3.g0, ds =
				b3.wd - 1; 0 <= ds; ds--) gB.setTransform(1, 0, 0, 1, Math.floor(jm + ds % this.wZ * qN), Math.floor(jn + this.a3k + el(ds, this.wZ) * qN)), b3.du[ds] && (gB.fillStyle = ae.l6, gB.fillRect(0, 0, qN, qN)), gB.setTransform(zoom, 0,
			0, zoom, Math.floor(jm + ds % this.wZ * qN + this.f0 * qN), Math.floor(jn + this.a3k + el(ds, this.wZ) * qN + this.f0 * qN)), gB.drawImage(b3.uF[ds], 0, 0);
		j.vA(Math.floor(jm + this.g0 - .725 * this.a3k), Math.floor(jn + .275 * this.a3k), Math.floor(.45 * this.a3k)), gB.setTransform(1, 0, 0, 1, 0, 0), gB.imageSmoothingEnabled = !1
	}
}

function bf() {
	var a3n, e7, a3o;

	function wo() {
		var dO;
		0 === (dO = x.sR()) ? a2.a3W() : 6 === dO ? aP.j4.a3M(a3n) : 7 === dO ? (aL.a3W(), aP.j4.close(aP.j4.a3p, 3240)) : 8 === dO && (u1(!0), a2.a3W()), x.setState(3), v.zg(), a3s(a3n), b7.d2 = !0
	}

	function a3q(dC) {
		for (var ds = e7.length - 1; 0 <= ds; ds--)
			if (dC === e7[ds].code) return e7[ds].db;
		return a3o + dC
	}

	function a3s(dC) {
		v.n5[2].wQ = a3q(dC)
	}
	this.bg = function() {
		(e7 = []).push({
			db: "No Server Response",
			code: 1006
		}), e7.push({
			db: "Account successfully saved!",
			code: 3231
		}), e7.push({
			db: "Account Error",
			code: 3232
		}), e7.push({
			db: "No Servers Found",
			code: 3249
		}), e7.push({
			db: "Thanks for the vote.",
			code: 3252
		}), e7.push({
			db: "Please accept Cookies",
			code: 3265
		}), e7.push({
			db: "Invalid Password Format",
			code: 3266
		}), e7.push({
			db: "Invalid Replay Format",
			code: 3605
		}), e7.push({
			db: "Lobby Timeout",
			code: 4207
		}), e7.push({
			db: "Invalid Username",
			code: 4214
		}), e7.push({
			db: "User already exists.",
			code: 4224
		}), e7.push({
			db: "No Client Response Error",
			code: 4229
		}), a3o = "Error "
	}, this.ch = function(a3H, dC) {
		a3n = dC;
		var dO = x.sR();
		if (6 === dO) {
			if (4211 === dC) return void a0.ch(0, 0);
			if (4214 !== dC) return void w.a3G(a3H)
		} else {
			if (7 !== dO) return 8 === dO ? void(a3H !== aP.j4.s8 || iv || k.vm(a3q(dC))) : void 0;
			if (a3H !== aP.j4.a3p) return
		}
		wo()
	}, this.a3K = function(dC) {
		a3n = dC, 8 === x.sR() ? k.vm(a3q(dC)) : wo()
	}, this.resize = function() {
		a3s(a3n)
	}, this.g3 = function(jh, ji) {
		3 === v.sP(jh, ji, 3, 1) && this.a3d(jh, ji)
	}, this.a3d = function(jh, ji) {
		a2.ch(), v.rq(jh, ji, !1), b7.d2 = !0
	}, this.gA = function() {
		v.a2j()
	}
}

function bh() {
	var input, color;
	this.sH = !1, this.oX = !1, this.ch = function() {
		color = ae.kp, (input = document.createElement("INPUT")).setAttribute("type", "text"), input.setAttribute("name", "username"), input.setAttribute("id", "usernameField"), input.setAttribute("autocomplete", "username"), input.value = "",
			input.style.textAlign = "center", input.style.backgroundColor = color, input.style.borderRadius = "0", input.style.color = ae.gE, input.style.position = "absolute", input.readOnly = !1, input.addEventListener("input", function() {
				a2.a3t()
			}), input.addEventListener("focus", function() {
				z.oX = !0
			}), input.addEventListener("blur", function() {
				z.oX = !1
			})
	}, this.resize = function() {
		var fontSize, t1, t2;
		this.sH && (t1 = .3 * (fontSize = .22 * v.i0 / nP), t2 = t3 / nP, input.style.border = t2.toFixed(2) + "px solid " + ae.gE, input.style.font = fv + fontSize + fw, input.style.padding = t1.toFixed(2) + "px", input.style.left = (((jp - v
			.g0) / nP - t2) / 2).toFixed(2) + "px", input.style.width = (v.g0 / nP - 2 * t1 - t2).toFixed(2) + "px", input.style.top = ((v.ji - .52 * v.i0) / nP).toFixed(2) + "px")
	}, this.get = function() {
		return input
	}, this.dQ = function(dQ) {
		this.sH !== dQ && ((this.sH = dQ) ? (this.resize(), document.body.appendChild(input)) : (this.oX = !1, document.body.removeChild(input)))
	}, this.sX = function(a3u) {
		a3u && color === ae.kp || !a3u && color === ae.lG || (color = a3u ? ae.kp : ae.lG, input.style.backgroundColor = color)
	}
}

function c7() {
	var mU, a3x, a3y, a3z;
	this.a3v = 0, this.a3w = 0, this.ch = function() {
		var gN, kV;
		7 === x.sR() && (mU = ai.mU, a3x = 0, a3y = b7.dT + 4500, a3z = aP.vt.a40() ? 2 : 0, x.setState(10), gB.imageSmoothingEnabled = !0, x.qE(), gN = a3.uG("loading"), kV = 1, kV = (de ? .396 : .25) * fs / gN.width, gB.setTransform(kV, 0, 0,
			kV, Math.floor((df - kV * gN.width) / 2), Math.floor((dg - kV * gN.height) / 2)), gB.drawImage(gN, 0, 0), gB.setTransform(1, 0, 0, 1, 0, 0))
	}, this.jB = function() {
		0 < a3z && b7.dT > a3y && (a3z--, a3y += 4500, 0 === b7.a41) && 0 === b7.iT() && (0 === a3z && aP.j4.s8 < aP.j4.a42 && (aP.j4.s8 += aP.j4.a43), aP.j4.zY(aP.j4.s8, 5))
	}, this.a44 = function() {
		10 === x.sR() && 2 <= ++a3x && (aP.vt.a45(mU), mU = null)
	}
}

function c4() {
	var a47, a48, a49, a4A, a4B, a4C, a4D, a4F, a4G, a4I, a4J, a4K, a4N, a4O, a4P, a4Q, a4R, a4E = 48,
		a4L = ["Joined", "Skipped", "Multiplayer", "Singleplayer"],
		a4M = [0, 0, 0, 0];

	function a4U(ds, uF) {
		var ds = a4D[ds].getContext("2d", {
				alpha: !0
			}),
			zoom = (ds.clearRect(0, 0, a4E, a4E), a4E / uF.width),
			dU = a4E / uF.height,
			zoom = dU < zoom ? dU : zoom;
		ds.imageSmoothingEnabled = !0, ds.setTransform(zoom, 0, 0, zoom, Math.floor((a4E - zoom * uF.width) / 2), Math.floor((a4E - zoom * uF.height) / 2)), ds.drawImage(uF, 0, 0), ds.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a4Y(iU, gQ, a4b, gO) {
		gO.beginPath(), gO.moveTo(iU, iU), gO.lineTo(iU + Math.cos(a4b) * gQ, iU + Math.cos(a4b + 1.5 * Math.PI) * gQ), gO.stroke()
	}

	function a4p() {
		if (7 === x.sR()) {
			for (var ga, uF, gO, zoom, dU, hi = -1, ds = a4F.length - 1; 0 <= ds; ds--)
				if (null === a4F[ds].gN) {
					hi = ds;
					break
				} - 1 !== hi && (null !== (ga = a4f(a4F[hi].a4j, a4F[hi].a4k)) ? a4F[hi].gN = ga : (ga = {
					eT: au.eT,
					eU: au.eU,
					p9: au.p9,
					p5: au.p5,
					p6: au.p6,
					pA: au.pA,
					pX: au.pX,
					a4g: au.a4g
				}, au.bg(a4F[hi].a4j, a4F[hi].a4k), au.p8.a4q(), (uF = document.createElement("canvas")).width = 128, uF.height = 128, gO = uF.getContext("2d", {
					alpha: !1
				}), (zoom = 128 / au.eT) < (dU = 128 / au.eU) && (zoom = dU), gO.imageSmoothingEnabled = !0, gO.setTransform(zoom, 0, 0, zoom, (128 - zoom * au.eT) / 2, (128 - zoom * au.eU) / 2), gO.drawImage(au.p9, 0, 0), au.eT = ga.eT, au
				.eU = ga.eU, au.p9 = ga.p9, au.p5 = ga.p5, au.p6 = ga.p6, au.pA = ga.pA, au.pX = ga.pX, au.a4g = ga.a4g, a4F[hi].gN = uF), b7.d2 = !0)
		}
	}

	function a4f(a4j, a4k) {
		for (var ds = a4F.length - 1; 0 <= ds; ds--)
			if (null !== a4F[ds].gN && a4F[ds].a4j === a4j && a4F[ds].a4k === a4k) return a4F[ds].gN;
		return null
	}
	this.ch = function() {
		var ds;
		for (a4R = 0, a4I = -1, x.setState(7), a4F = [], this.resize(), a4D = new Array(13), ds = a4D.length; 0 <= ds; ds--) a4D[ds] = document.createElement("canvas"), a4D[ds].width = a4E, a4D[ds].height = a4E;
		for (ds = 0; ds < 7; ds++) ! function(w1) {
			var a4W, gO = a4D[w1 - 2].getContext("2d", {
					alpha: !0
				}),
				a4V = 1.5 * Math.PI,
				iU = Math.floor(.5 * a4E),
				gQ = Math.floor(.48 * a4E);
			gO.lineWidth = 2, gO.strokeStyle = ae.gE, gO.clearRect(0, 0, a4E, a4E);
			for (var ds = 0; ds < w1; ds++) a4W = a4V + 2 * Math.PI / w1,
				function(ds, iU, gQ, a4V, a4W, gO) {
					gO.fillStyle = b8.a4a[ds], gO.beginPath(), gO.arc(iU, iU, gQ, a4V, a4W), gO.lineTo(iU, iU), gO.fill()
				}(ds + 1, iU, gQ, a4V, a4W, gO), 0 !== ds && a4Y(iU, gQ, a4V, gO), a4V = a4W;
			a4Y(iU, gQ, 1.5 * Math.PI, gO),
				function(iU, gQ, gO) {
					gO.beginPath(), gO.arc(iU, iU, gQ, 0, 2 * Math.PI), gO.stroke()
				}(iU, gQ, gO)
		}(ds + 2);
		a4U(7, a3.get(4)), a4U(8, b3.uF[27]), a4U(9, b3.uF[46]), a4U(10, b3.uF[36]), a4U(11, a3.get(19)), a4U(12, a3.get(20)), b7.d2 = !0
	}, this.a3c = function() {
		this.a3W(), aP.j4.a3M(3240), a2.ch(), b7.d2 = !0
	}, this.a3W = function() {
		a4F = [], a4D = []
	}, this.wY = function() {
		return a4K
	}, this.resize = function() {
		var a4c, ov, yX, a4d;
		for (a49 = [0, 0], a4G = [0, 0, 0, 0], a4Q = de ? (a4J = Math.floor(.8 * .4 * fs), a4K = Math.floor(.56 * a4J), a4G[0] = g6, df < dg ? (a4G[1] = a4K + 2 * g6, a4G[2] = df - 3 * a4G[0], a4G[3] = b0.g9() - 3 * g6 - a4K, a4O = Math.floor(
				.95 * a4K), a4P = Math.floor((df - a4J - g6) / 2), Math.floor(g6 + a4K / 2)) : (a4G[1] = g6, a4G[2] = df - 3 * g6 - a4J, a4G[3] = b0.g9() - 2 * g6, a4O = Math.floor(.8 * a4J), a4G[3] - a4K < a4J && (a4O = Math.floor(.8 * (a4G[
				3] - a4K)), a4O = vY(a4K, a4O)), a4P = Math.floor(df - a4J / 2 - g6), vY(a4Q = Math.floor(g6 + a4K + (a4G[3] - a4K) / 2), Math.floor(a4K + 2 * g6 + a4O / 2)))) : (a4J = Math.floor(.2016 * fs), a4K = Math.floor(.56 * a4J), a4G[2] =
				Math.floor(.5 * df), a4G[3] = Math.floor(.5 * dg), a4G[1] = Math.floor(.45 * (dg - a4G[3])), a4G[0] = Math.floor((df - a4G[2]) / 2), a4O = Math.floor(.75 * a4K), a4P = Math.floor(df / 2), Math.floor(a4G[1] + a4G[3] + (dg - a4G[
					3] - a4G[1]) / 2)), a4N = fv + Math.floor(.65 * a4K / 4) + fw, a4c = ov = 1; a4c * ov < a4F.length;) a4G[3] / (ov + 1) < a4G[2] / (a4c + 1) ? a4c++ : ov++;
		a47 = (yX = (a4G[2] - (a4c - 1) * g6) / a4c) < (a4d = (a4G[3] - (ov - 1) * g6) / ov) ? yX : a4d, a48 = Math.floor(a47), a4C = fv + Math.floor(.5 * a47 / 5) + fw, a49[0] = a4c, a49[1] = ov, a4A = a4G[0] + Math.floor((a4G[2] - a49[0] *
			a47 - (a49[0] - 1) * g6) / 2), a4B = a4G[1] + Math.floor((a4G[3] - a49[1] * a47 - (a49[1] - 1) * g6) / 2)
	}, this.a28 = function(a4e, f0) {
		var ds, dU, gN, et = a4F.length;
		for (a4M = a4e, ds = 0; ds < f0.length; ds++) gN = a4f(f0[ds].pX, f0[ds].a4g), a4F.push({
			a4h: f0[ds].id,
			tm: f0[ds].tm,
			tn: f0[ds].a4i,
			a4j: f0[ds].pX,
			a4k: f0[ds].a4g,
			joined: f0[ds].a4l,
			wV: f0[ds].a3Q,
			a4m: f0[ds].a4m,
			gN: gN,
			a4n: f0[ds].a4n,
			rV: f0[ds].rV
		});
		for (ds = et - 1; 0 <= ds; ds--) a4F.shift();
		if (-1 !== a4I)
			for (dU = a4I, a4I = -1, ds = a4F.length - 1; 0 <= ds; ds--)
				if (a4F[ds].a4h === dU) {
					a4I = dU;
					break
				}(a4F.length > a4R || a4F.length < a4R) && (a4R = a4F.length, this.resize()), this.a4o(), b7.d2 = !0
	}, this.a4o = function() {
		for (var ds = a4F.length - 1; 0 <= ds; ds--) null === a4F[ds].gN && setTimeout(a4p, 0)
	}, this.g3 = function(jh, ji) {
		return 4 * ((jh - a4P) * (jh - a4P) + (ji - a4Q) * (ji - a4Q)) <= a4O * a4O ? (this.a3c(), v.rq(jh, ji, !1), !0) : function(jh, ji) {
			var hi, hs, jm, jn;
			if (0 !== a4F.length) {
				var ds = 0;
				for (jn = a4B, hs = 0; hs < a49[1]; hs++) {
					for (jm = a4A, hi = 0; hi < a49[0]; hi++) {
						if (jm < jh && jh < jm + a47 && jn < ji && ji < jn + a47) return aP.lg.a4s(a4F[ds].a4h), a4I = a4F[ds].a4h !== a4I ? a4F[ds].a4h : -1, b7.d2 = !0;
						if (++ds >= a4F.length) return !1;
						jm += a47 + g6
					}
					jn += a47 + g6
				}
			}
			return !1
		}(jh, ji)
	}, this.gA = function() {
		var hi, hs, jh, gQ, zoom, ds = 0,
			ji = a4B;
		if (gB.imageSmoothingEnabled = !0, gB.lineWidth = 3, gQ = Math.floor(.5 * a4O), gB.fillStyle = ae.kn, gB.beginPath(), gB.arc(a4P, a4Q, gQ, 0, 2 * Math.PI), gB.fill(), gB.strokeStyle = ae.gE, gB.beginPath(), gB.arc(a4P, a4Q, gQ, 0, 2 *
				Math.PI), gB.stroke(), gQ = a3.get(0).height, zoom = .6 * a4O / gQ, gB.setTransform(zoom, 0, 0, zoom, Math.floor(a4P - .56 * zoom * a3.get(0).width), Math.floor(a4Q - .5 * zoom * gQ)), gB.drawImage(a3.get(0), 0, 0), gB
			.setTransform(1, 0, 0, 1, 0, 0),
			function() {
				gB.fillStyle = ae.kn, gB.fillRect(df - a4J - g6, g6, a4J, a4K), 0 <= a4I ? (gB.fillStyle = ae.l6, gB.fillRect(df - a4J - g6, g6, a4J, Math.floor(.25 * a4K))) : (gB.fillStyle = ae.lS, gB.fillRect(df - a4J - g6, g6 + Math.floor(
					.25 * a4K), a4J, Math.floor(.25 * a4K)));
				gB.strokeStyle = ae.gE, gB.strokeRect(df - a4J - g6, g6, a4J, a4K), gB.fillStyle = ae.gE, gB.font = a4N, gB.textBaseline = gC;
				for (var ji, t1 = Math.floor(.04 * a4J), t2 = Math.floor(.08 * a4K), ds = 3; 0 <= ds; ds--) ji = Math.floor(g6 + (ds + 1) * (a4K + 2 * t2) / 5 - t2), gB.textAlign = vg, gB.fillText(a4L[ds], df - a4J - g6 + t1, ji), gB.textAlign =
					x3, gB.fillText(ad.jx.jy(a4M[ds]), df - g6 - t1, ji)
			}(), 0 !== a4F.length)
			for (hs = 0; hs < a49[1]; hs++) {
				for (jh = a4A, hi = 0; hi < a49[0]; hi++) {
					if (! function(ds, jh, ji) {
							var zoom, hs, a4w, a4y, a4z;
							null === a4F[ds].gN ? (gB.fillStyle = ae.kn, gB.fillRect(jh, ji, a48, a48)) : (zoom = a48 / 128, gB.setTransform(zoom, 0, 0, zoom, jh, ji), gB.drawImage(a4F[ds].gN, 0, 0), gB.setTransform(1, 0, 0, 1, 0, 0));
							a4I === a4F[ds].a4h ? (function(jh, ji) {
								var qN = Math.floor(.2 * a48),
									qO = Math.floor(.3 * qN);
								gB.fillStyle = ae.l9, gB.fillRect(jh + a48 - qN, ji, qN, qN), gB.fillStyle = ae.jt, gB.fillRect(jh + a48 - qN, ji, 2, qN), gB.fillRect(jh + a48 - qN, ji + qN - 2, qN, 2), j.vA(jh + a48 - qN + qO, ji + qO,
									qN - 2 * qO), gB.setTransform(1, 0, 0, 1, 0, 0)
							}(jh, ji), gB.lineWidth = 3, gB.fillStyle = ae.l9) : gB.fillStyle = ae.kl;
							if (a4y = Math.floor(a47 / 4), gB.fillRect(jh, ji, a4y, a4y), a4z = Math.floor(ji + .8 * a47), gB.fillRect(jh, a4z, a48, Math.floor(a47 / 5)), function(ds, jh, ji) {
									var zoom;
									a4F[ds].tn && (ds = a3.get(4), zoom = .5 * a47 / ds.width, gB.setTransform(zoom, 0, 0, zoom, Math.floor(jh + (a47 - zoom * ds.width) / 2), Math.floor(ji + (a47 - zoom * ds.height) / 2)), gB.globalAlpha = .6, gB
										.drawImage(ds, 0, 0), gB.globalAlpha = 1, gB.setTransform(1, 0, 0, 1, 0, 0))
								}(ds, jh, ji), a4F[ds].a4n) {
								for (hs = a4w = 0; hs < a4F[ds].a4n; hs++) a4w = Math.max(a4w, n.measureText(a4F[ds].rV[hs], a4C));
								a4w += .05 * a47, hs = 5 === a4F[ds].a4n, a4y = hs ? ji + a4y : Math.max(ji + .8 * a47 - .11 * a4F[ds].a4n * a47, ji + a4y), a4z = hs ? a4z : Math.min(a4y + .11 * a4F[ds].a4n * a47 + .05 * a47, a4z), gB.fillRect(
									jh, a4y, a4w, a4z - a4y)
							}
							for (gB.font = a4C, gB.textBaseline = gC, gB.textAlign = vg, gB.fillStyle = ae.lO, gB.fillText(a4F[ds].joined.toString(), Math.floor(jh + .22 * a47), Math.floor(ji + .9 * a47)), gB.fillStyle = ae.gE, hs = 0; hs < a4F[
									ds].a4n; hs++) gB.fillText(a4F[ds].rV[a4F[ds].a4n - hs - 1], Math.floor(jh + .03 * a47), Math.floor(ji + .77 * a47 - .11 * hs * a47));
							gB.textAlign = x3, gB.fillStyle = ae.lC, gB.fillText(a4F[ds].wV.toString(), Math.floor(jh + .81 * a47), Math.floor(ji + .9 * a47)), gB.strokeStyle = a4I === a4F[ds].a4h ? ae.l7 : ae.kt, gB.strokeRect(jh, ji, a48, a48),
								a4z = Math.floor(.16 * a47), zoom = a4z / a4E, gB.setTransform(zoom, 0, 0, zoom, Math.floor(jh + .33 * a4z), Math.floor(ji + .33 * a4z)), a4D.length > a4F[ds].tm && gB.drawImage(a4D[a4F[ds].tm], 0, 0);
							gB.setTransform(zoom, 0, 0, zoom, Math.floor(jh + .15 * a4z), Math.floor(ji + a47 - 1.08 * a4z)), gB.drawImage(a4D[11], 0, 0), gB.setTransform(zoom, 0, 0, zoom, Math.floor(jh + a47 - 1.05 * a4z), Math.floor(ji + a47 -
								1.15 * a4z)), gB.drawImage(a4D[12], 0, 0), gB.setTransform(1, 0, 0, 1, 0, 0)
						}(ds, Math.floor(jh), Math.floor(ji)), ++ds >= a4F.length) return;
					jh += a47 + g6
				}
				ji += a47 + g6
			}
	}
}

function bi() {
	this.ch = function(jh, ji) {
		x.setState(5), v.rq(jh, ji, !1), b7.d2 = !0
	}, this.gA = function() {
		v.a2k()
	}, this.g3 = function(jh, ji) {
		var ds = v.sP(jh, ji, 5, 2);
		5 === ds ? dx() : 6 === ds && (a2.ch(), v.rq(jh, ji, !1), b7.d2 = !0)
	}
}

function bj() {
	var a52 = [0, 0, 0, 0];

	function a2E(jh, ji, gG, a5K) {
		gB.fillStyle = ae.gE;
		var qN = vY(2, Math.floor((a5K ? .5 : .35) * gG)),
			wK = (qN -= qN % 2, vY(2, Math.floor(.1 * gG))),
			gG = (wK -= wK % 2, Math.floor((gG - qN) / 2)),
			jo = Math.floor(gG + (qN - wK) / 2);
		gB.fillRect(jh + gG, ji + jo, qN, wK), a5K && gB.fillRect(jh + jo, ji + gG, wK, qN)
	}

	function a3P(jh, ji, g0, i0, uI, fq, wQ, hc, w1) {
		gB.fillStyle = uI, gB.fillRect(jh, ji, g0, i0), 0 <= hc && function(jh, ji, g0, i0, hc) {
			gB.fillStyle = "rgba(" + 22 * hc + "," + (110 - 22 * hc) + ",0,0.75)", gB.fillRect(jh, ji, (1 + hc) * g0 / 6, i0)
		}(jh, ji, g0, i0, hc), 0 < w1 && function(jh, ji, g0, i0, w1) {
			gB.fillStyle = "rgba(255,255,255,0.3)", gB.fillRect(jh, ji, w1 * g0 / ex, i0)
		}(jh, ji, g0, i0, w1), gB.strokeStyle = ae.gE, gB.strokeRect(jh, ji, g0, i0), 0 !== fq && (gB.fillStyle = ae.gE, gB.font = fv + Math.floor(fq * i0) + fw, gB.fillText(wQ, Math.floor(jh + g0 / 2), Math.floor(ji + .52 * i0)))
	}
	this.iw = [{
		f2: 0,
		w1: 512
	}], this.ch = function() {
		aM.sH = !1, x.setState(2), this.resize(), b7.d2 = !0
	}, this.a3W = function() {}, this.resize = function() {
		a52[2] = Math.floor((de ? .49 : .4) * fs), a52[1] = Math.floor((dg - a52[2] / 6 - this.iw.length * (g6 + a52[2] / 10)) / 2), a52[0] = Math.floor((df - a52[2]) / 2), aM.sH && aM.resize()
	}, this.a53 = function(tm) {
		var ds;
		if (6 < tm) this.iw = [{
			f2: 0,
			w1: 512
		}];
		else {
			for (this.iw = [], ds = 0; ds < tm + 2; ds++) this.iw.push({
				f2: 0,
				w1: 0
			});
			this.a54()
		}
	}, this.a55 = function(a56, a57) {
		for (var et = a56.length, ds = 0; ds < et; ds++) this.iw[ds].f2 = a56[ds], this.iw[ds].w1 = a57[ds]
	}, this.a58 = function(sz) {
		var ds, et;
		if (1 === sz.qR.length)
			for (et = this.iw.length, sz.a56 = new Array(et), sz.a57 = new Array(et), ds = 0; ds < et; ds++) sz.a56[ds] = this.iw[ds].f2, sz.a57[ds] = this.iw[ds].w1
	}, this.a3d = function() {
		b7.d2 = !0, aM.sH ? aM.sH = !1 : (this.a3W(), a2.ch())
	}, this.tq = function() {
		var ds, w1;
		if (aX.iq) return aX.ir.a59;
		for (w1 = 0, ds = this.iw.length - 1; 0 <= ds; ds--) w1 += this.iw[ds].w1;
		return w1
	}, this.rq = function(jh, ji) {
		return !(!aM.sH || !aM.rq(jh, ji)) || -1 !== this.sP(jh, ji)
	}, this.a5A = function() {
		aP.j4.s8 = 0, aP.j4.zY(0, 3) && aP.lg.a5B(0)
	}, this.a5C = function() {
		var hi;
		this.a5A(), x.a3V(), aX.iq ? aX.a5D() : (hi = (hi = this.iw.length - 2) < 0 ? 7 : hi, tj(Math.floor(16384 * Math.random()), 0, [{
			name: a2.a5E(),
			a5F: g8.vC[2].r6.a2v(),
			a5G: 0
		}], hi, !1, !1))
	}, this.g3 = function(jh, ji) {
		if (bA.sH || g8.vC[1].r6.sH || g8.vC[2].r6.sH) return !1;
		if (aM.sH && !aX.iq) return aM.g3(jh, ji);
		var ds, hi, max, qN, ji = this.sP(jh, ji);
		if (-1 === ji) return !1;
		if (0 === ji) this.a3d();
		else if (1 === ji) aX.iq ? (aX.sJ(), b7.d2 = !0) : aM.show();
		else if (100 === ji) aW.a5H();
		else if (2 === ji) this.a3W(), this.a5C();
		else {
			if (aX.iq) return !1;
			if (27 === ji) this.iw.length < 8 && (this.iw.push({
				f2: 0,
				w1: ex
			}), this.a54(), this.resize(), b7.d2 = !0);
			else if (ds = Math.floor((ji - 3) / 3), ji % 3 == 0) 1 < this.iw.length && (this.iw.splice(ds, 1), this.resize(), b7.d2 = !0);
			else if (qN = (a52[2] - a52[2] / 10 - 2 * g6) / 2, ji % 3 == 1) 0 === ds && 1 === this.iw[ds].w1 || (jh < a52[0] + a52[2] - 1.5 * qN - g6 ? this.iw[ds].f2-- : this.iw[ds].f2++, this.iw[ds].f2 < 0 ? this.iw[ds].f2 = 5 : 5 < this.iw[ds]
				.f2 && (this.iw[ds].f2 = 0), b7.d2 = !0);
			else {
				for (b7.d2 = !0, ji = (jh - (a52[0] + a52[2] - qN)) / qN - .5, ji *= ji < 0 ? -ji : ji, ji = 0 === (ji = Math.floor(ji * ex)) ? 1 : ji, max = ex, hi = this.iw.length - 1; 0 <= hi; hi--) ds !== hi && (max -= this.iw[hi].w1);
				if (ji < 0) {
					if (1 === this.iw[ds].w1) return this.iw[ds].w1 = max, !0
				} else if (this.iw[ds].w1 === max) return this.iw[ds].w1 = 1, !0;
				this.iw[ds].w1 += ji, this.iw[ds].w1 < 1 ? this.iw[ds].w1 = 1 : this.iw[ds].w1 > max && (this.iw[ds].w1 = max)
			}
		}
		return !0
	}, this.a54 = function() {
		for (var w1 = Math.floor(ex / this.iw.length), a5I = ex % this.iw.length, ds = this.iw.length - 1; 0 <= ds; ds--) this.iw[ds].w1 = w1;
		this.iw[0].w1 += a5I
	}, this.sP = function(jh, ji) {
		var qN = (a52[2] - 3 * g6) / 4,
			wK = a52[2] / 6;
		if (jh < a52[0] || ji < a52[1] || a52[0] + a52[2] <= jh) return -1;
		if (ji < a52[1] + wK) return jh < a52[0] + qN ? 0 : jh < a52[0] + qN + g6 ? -1 : jh < a52[0] + 2 * qN + g6 ? 100 : jh < a52[0] + 2 * (qN + g6) ? -1 : jh < a52[0] + 3 * qN + 2 * g6 ? 1 : jh < a52[0] + 3 * (qN + g6) ? -1 : 2;
		for (var jn, wL = a52[2] / 10, qN = (a52[2] - wL - 2 * g6) / 2, ds = 0; ds < this.iw.length; ds++) {
			if (ji < (jn = a52[1] + wK + g6 + ds * (wL + g6))) return -1;
			if (!(jn + wL < ji)) return jh < a52[0] + wL ? 3 + 3 * ds : jh < a52[0] + wL + g6 ? -1 : jh < a52[0] + a52[2] - qN - g6 ? 4 + 3 * ds : jh < a52[0] + a52[2] - qN ? -1 : 5 + 3 * ds
		}
		return !(this.iw.length < 8) || ji < (jn = a52[1] + wK + g6 + this.iw.length * (wL + g6)) || jn + wL < ji || a52[0] + wL < jh ? -1 : 27
	}, this.gA = function() {
		gB.lineWidth = t3, gB.textAlign = gD, gB.textBaseline = gC;
		var qN = (a52[2] - 3 * g6) / 4,
			wK = a52[2] / 6;
		if (a3P(a52[0], a52[1], qN, wK, "rgba(128,0,0,0.75)", .34, "Back", -1, -1), a3P(a52[0] + qN + g6, a52[1], qN, wK, "rgba(128,0,128,0.75)", .31, "Custom", -1, -1), a3P(a52[0] + 2 * (qN + g6), a52[1], qN, wK, "rgba(" + (aX.iq ? 128 : 0) +
				",128,128,0.75)", .34, aX.iq ? "Reset" : "Maps", -1, -1), a3P(a52[0] + a52[2] - qN, a52[1], qN, wK, "rgba(0,128,0,0.75)", .34, "Start", -1, -1), !aX.iq) {
			for (var jn, wL = a52[2] / 10, qN = (a52[2] - wL - 2 * g6) / 2, ds = 0; ds < this.iw.length; ds++) jn = a52[1] + wK + g6 + ds * (wL + g6), a3P(a52[0], jn, wL, wL, 1 < this.iw.length ? "rgba(128,0,0,0.75)" : "rgba(90,90,90,0.75)", 0,
				null, -1), 1 < this.iw.length && a2E(a52[0], jn, wL, !1), a3P(a52[0] + wL + g6, jn, qN, wL, ae.kp, .4, this.a5J(ds), this.iw[ds].f2, -1), a3P(a52[0] + a52[2] - qN, jn, qN, wL, ae.kp, .4, this.vs(ds), -1, this.iw[ds].w1);
			this.iw.length < 8 && (jn = a52[1] + wK + g6 + this.iw.length * (wL + g6), a3P(a52[0], jn, wL, wL, "rgba(0,128,20,0.75)", 0, null, -1, -1), a2E(a52[0], jn, wL, !0)), aM.sH && aM.gA()
		}
	}, this.a5J = function(ds) {
		return 0 === ds && 1 === this.iw[ds].w1 ? "You" : b.ik[this.iw[ds].f2]
	}, this.vs = function(ds) {
		return 1 === this.iw[ds].w1 ? "1 Player" : this.iw[ds].w1 + " Players"
	}
}

function xA() {
	this.et = 0, this.g0 = 0, this.vC = null, this.ch = function() {
		this.vC = [], this.vC.push({
			jh: 0,
			ji: 0,
			uD: de,
			r6: null
		}), this.vC.push({
			jh: 0,
			ji: 0,
			uD: !1,
			r6: new a3j
		}), this.vC.push({
			jh: 0,
			ji: 0,
			uD: !1,
			r6: new a2n
		}), this.vC[2].r6.a2s(), this.et = this.vC.length, this.g0 = 0
	}, this.zg = function() {
		this.g0 = Math.floor((de ? .063 : .04) * fs), this.g0 += 4 - this.g0 % 4, this.vC[0].jh = g6, this.vC[0].ji = g7 - this.g0 - g6;
		for (var ds = 1; ds < this.et; ds++) this.vC[ds].jh = this.vC[ds - 1].jh + Math.floor(de ? 1.5 * g6 : 3.7 * g6) + this.g0, this.vC[ds].ji = this.vC[0].ji
	}, this.sP = function(g4, g5) {
		if (a3.fy())
			for (var ds = this.et - 1; 0 <= ds; ds--)
				if (g4 >= this.vC[ds].jh && g5 >= this.vC[ds].ji && g4 < this.vC[ds].jh + this.g0 && g5 < this.vC[ds].ji + this.g0) return ds;
		return -1
	}, this.a3a = function() {
		for (var ds = 2; 1 <= ds; ds--)
			if (this.vC[ds].r6.sH) return !0;
		return !1
	}, this.resize = function() {
		for (var ds = 2; 1 <= ds; ds--) this.vC[ds].r6.resize()
	}, this.sS = function() {
		return this.vC[1].r6.sH ? (this.vC[1].r6.g3(-5e3, -5e3, 0), !0) : !!this.vC[2].r6.sH && (this.vC[2].r6.g3(-5e3, -5e3), !0)
	}, this.g3 = function(g4, g5, a2N) {
		if (a2N) {
			if (this.vC[1].r6.sH) return this.vC[1].r6.g3(g4, g5, 0), !0;
			if (this.vC[2].r6.sH) return this.vC[2].r6.g3(g4, g5), !0
		}
		g4 = this.sP(g4, g5);
		if (a2N) {
			if (0 === g4) return this.vC[g4].uD = !this.vC[g4].uD, de = this.vC[g4].uD, aK.a5N(0), dp(this.vC[0].uD, !1), !0;
			if (1 <= g4 && g4 < 3) return this.vC[g4].r6.ch(), z.dQ(!1), b7.d2 = !0
		}
		return !1
	}, this.rq = function(g4, g5) {
		return this.vC[1].r6.sH ? (this.vC[1].r6.rq(g4, g5), !0) : !!this.vC[2].r6.sH && (this.vC[2].r6.rq(g4), !0)
	}, this.a2x = function() {
		for (var ds = 2; 1 <= ds; ds--)
			if (this.vC[ds].r6.sH) return this.vC[ds].r6.a2x(), !0;
		return !1
	}, this.gA = function() {
		if (a3.fy()) {
			gB.imageSmoothingEnabled = !0;
			for (var ds = this.et - 1; 0 <= ds; ds--) gB.fillStyle = this.vC[ds].uD ? ae.l8 : ae.kp, gB.fillRect(this.vC[ds].jh, this.vC[ds].ji, this.g0, this.g0), 0 === ds ? this.a5O(ds, a3.get(15)) : 1 === ds ? this.a5P() : 2 === ds && this
				.a5Q(), gB.setTransform(1, 0, 0, 1, 0, 0), gB.lineWidth = t3, gB.strokeStyle = ae.gE, gB.strokeRect(this.vC[ds].jh, this.vC[ds].ji, this.g0, this.g0);
			gB.imageSmoothingEnabled = !1
		}
	}, this.a5O = function(ds, uF) {
		var gap = .08 * this.g0,
			zoom = (this.g0 - 2 * gap) / uF.width;
		gB.setTransform(zoom, 0, 0, zoom, this.vC[ds].jh + gap, this.vC[ds].ji + (this.g0 - zoom * uF.height) / 2), gB.drawImage(uF, 0, 0)
	}, this.a5P = function() {
		var gap = .06 * this.g0,
			zoom = (this.g0 - 2 * gap) / b3.g0;
		gB.setTransform(zoom, 0, 0, zoom, this.vC[1].jh + gap, this.vC[1].ji + gap), gB.drawImage(b3.uF[4], 0, 0)
	}, this.a5Q = function() {
		gB.setTransform(1, 0, 0, 1, this.vC[2].jh, this.vC[2].ji);
		for (var f2 = this.g0 / 4, jh = 3; 0 <= jh; jh--)
			for (var ji = 3; 0 <= ji; ji--) {
				var gQ = Math.floor(367 * (jh + 1) * (ji + 1) % 256),
					sz = Math.floor(687 * (jh + 1) * (ji + 1) % 256),
					hs = Math.floor(651 * (jh + 1) * (ji + 1) % 256);
				gB.fillStyle = "rgb(" + gQ + "," + sz + "," + hs + ")", gB.fillRect(jh * f2, ji * f2, f2, f2)
			}
	}, this.a3g = function() {
		for (var ds = 2; 1 <= ds; ds--)
			if (this.vC[ds].r6.sH) return void this.vC[ds].r6.gA()
	}
}

function bk() {
	var username, a5R;

	function a5Z() {
		var us;
		return 0 === username.indexOf("vote ") && 2 === (us = username.split(" ")).length ? (a2.a5S = us[1], a5d(), aP.j4.zY(0, 7) && aP.lg.a5e(0), y.a3K(3252), 1) : void 0
	}

	function a5d() {
		username = dW(), z.get().value = username, z.sX(!0)
	}

	function a5Y() {
		var max, a5f;
		if (0 === username.indexOf("account ")) return 2 !== (a5f = username.split(" ")).length || (max = Math.floor(Math.pow(2, 48)), (a5f = parseInt(h.dc(a5f[1]))) <= 0) || max <= a5f ? (a5d(), y.a3K(3266)) : dd(a5f) ? (a5d(), y.a3K(3231)) : (
		a5d(), 5 <= dV ? y.a3K(3232) : (y.a3K(3265), b6.sH = !0, b6.fu = -1)), 1
	}

	function a5b() {
		return void 0 !== username && h.qk(username)
	}

	function a5W() {
		if (a5b()) return z.sX(!0), 1;
		z.sX(!1)
	}
	this.a5S = "", this.a5T = -7e3, this.ch = function(a5U) {
		dV < 5 || (a5R && b7.dT > a5R + 144e5 ? dS.setState(14) : a5R = b7.dT), x.setState(0), v.zg(), z.dQ(!0), l.ch(), g8.zg(), a5U && ax.dF.show() ? setTimeout(function() {
			0 === x.sR() && dw(12)
		}, 15e3) : dw(12), void 0 === username && (username = dW(), z.get().value = username, a5W())
	}, this.a3W = function() {
		dw(13), z.dQ(!1)
	}, this.a5X = function(fu) {
		return 0 === fu ? v.g0 : 1 === fu ? Math.floor(.3 * v.i0) : 2 === fu ? z.get().style.font : username
	}, this.a3t = function() {
		var da;
		username = z.get().value.trim(), a5W(), "password" !== username && "account" !== username || (da = h.dm(dZ().toString()), username = "account " + da, z.get().value = username)
	}, this.g3 = function(jh, ji) {
		b7.sb(), 1 === v.sP(jh, ji, 1, 1) ? a5Y() || a5Z() || (dw(10), a5W() ? (this.a3W(), dj(username), a1.ch()) : y.a3K(4214)) : 0 === v.sP(jh, ji, 0, 1) && this.a3Y()
	}, this.a3Y = function() {
		a5Y() || a5Z() || (dw(10), a5b() && 5 <= username.length && 40 === username.charCodeAt(0) && 40 === username.charCodeAt(1) && 41 === username.charCodeAt(3) && 41 === username.charCodeAt(4) ? w.a3B(Math.abs(username.charCodeAt(2) + 5)) : w
			.a3B(aR.a5c), a5W() ? a3.fy() ? (this.a3W(), dj(username), aX.sJ(), w.ch()) : y.a3K(3228) : y.a3K(4214))
	}, this.a5g = function() {
		return !g8.a3a() && !bA.sH && !az.sH
	}, this.gA = function() {
		var iU, kV;
		this.a5g() && (gB.imageSmoothingEnabled = !0, iU = a3.uG("territorial.io"), kV = 1.1 * v.g0 / iU.width, gB.setTransform(kV, 0, 0, kV, Math.floor((jp - kV * iU.width) / 2), v.ji - kV * iU.height - .72 * v.i0), gB.drawImage(iU, 0, 0), gB
			.setTransform(1, 0, 0, 1, 0, 0), v.a2h())
	}, this.a5E = function() {
		return username
	}
}

function bl() {
	var a5i, gN, fr, a5j;

	function a5m(fu, name, a5n, db) {
		fr[fu] = name, gN[fu] = new Image, gN[fu].onload = function() {
			0 < a5n && ! function(fu, a5n) {
				var jh, ji, ds, iU = document.createElement("canvas"),
					g0 = gN[fu].width,
					i0 = gN[fu].height,
					gO = (iU.width = g0, iU.height = i0, iU.getContext("2d", {
						alpha: !0
					})),
					gK = (gO.drawImage(gN[fu], 0, 0), gO.getImageData(0, 0, g0, i0)),
					pD = gK.data;
				if (a5n < 3) {
					var a5q = 2 === a5n ? 160 : 600;
					for (jh = g0 - 1; 0 <= jh; jh--)
						for (ji = i0 - 1; 0 <= ji; ji--) pD[ds = 4 * (jh + ji * g0)] + pD[ds + 1] + pD[ds + 2] < a5q && (pD[ds + 3] = Math.floor(255 * (pD[ds] + pD[ds + 1] + pD[ds + 2]) / a5q))
				} else if (3 === a5n)
					for (jh = g0 - 1; 0 <= jh; jh--)
						for (ji = i0 - 1; 0 <= ji; ji--) 0 === pD[ds = 4 * (jh + ji * g0)] && 200 < pD[ds + 1] && 0 === pD[ds + 2] && (pD[ds + 3] = 0);
				else if (4 === a5n) ! function(pD, g0, i0) {
					var jh, ji, ds;
					for (jh = g0 - 1; 0 <= jh; jh--)
						for (ji = i0 - 1; 0 <= ji; ji--) pD[1 + (ds = 4 * (jh + ji * g0))] > pD[ds] + 20 && pD[1 + ds] > pD[2 + ds] + 20 && pD[ds] + pD[2] < 40 && (pD[3 + ds] = 255 - pD[1 + ds], pD[ds] = pD[1 + ds] = pD[2 + ds] = pD[ds])
				}(pD, g0, i0);
				else if (5 === a5n) ! function(pD, g0, i0, id) {
					var jh, ji, ds;
					for (jh = g0 - 1; 0 <= jh; jh--)
						for (ji = i0 - 1; 0 <= ji; ji--) 200 < pD[1 + (ds = 4 * (jh + ji * g0))] && pD[1 + ds] - 20 > pD[ds] && pD[1 + ds] - 20 > pD[2 + ds] ? pD[ds] + pD[2 + ds] < 40 ? pD[3 + ds] = 0 : (pD[3 + ds] = pD[ds], pD[ds] = 255,
							pD[1 + ds] = 255, pD[2 + ds] = 255) : pD[ds] < 50 && pD[1 + ds] < 50 && pD[2 + ds] < 50 && (pD[ds] + pD[1 + ds] + pD[2 + ds] < 50 ? (pD[1 + ds] = 0 === id ? pD[1 + ds] : 160, pD[3 + ds] = 180) : (pD[1 +
							ds] = 0 === id ? pD[1 + ds] : 160, pD[3 + ds] = 180 + Math.floor(75 * (pD[ds] + pD[1 + ds] + pD[2 + ds] - 50) / 100)))
				}(pD, g0, i0, 0);
				else if (6 === a5n)
					for (jh = g0 - 1; 0 <= jh; jh--)
						for (ji = i0 - 1; 0 <= ji; ji--) pD[(ds = 4 * (jh + ji * g0)) + 3] = Math.floor(255 * (pD[ds] + pD[ds + 1] + pD[ds + 2]) / 765), pD[ds] = pD[ds + 1] = pD[ds + 2] = 255;
				else if (7 === a5n)
					for (jh = g0 - 1; 0 <= jh; jh--)
						for (ji = i0 - 1; 0 <= ji; ji--) pD[(ds = 4 * (jh + ji * g0)) + 1] > pD[ds + 2] + 10 && (pD[ds + 3] = pD[ds], pD[ds + 1] = pD[ds + 2]);
				gO.putImageData(gK, 0, 0), gN[fu] = iU
			}(fu, a5n), a5p()
		}, gN[fu].onerror = function(dC) {
			console.error("Error loading image at index", fu, "Error:", dC), a5p()
		}, gN[fu].src = "data:image/png;base64," + db
	}

	function a5p() {
		a3.fy() || (a5i--, a3.fy() && (b0.fx(), i.u9(), b3.ch(), ay.a2P([gN[8], gN[16], gN[7], gN[9], gN[10]], [!dR, 0 === dV, !0, !0, !0]), b7.d2 = !0, gN[7] = a5j, gN[8] = a5j, gN[9] = a5j, gN[10] = a5j))
	}
	this.ch = function() {
		if (void 0 === gN) {
			a5i = 22, gN = new Array(a5i), fr = new Array(a5i), (a5j = document.createElement("canvas")).width = 1, a5j.height = 1;
			for (var ds = a5i - 1; 0 <= ds; ds--) gN[ds] = a5j;
			a5m(0, "exit", 6,
				"iVBORw0KGgoAAAANSUhEUgAAAFYAAABGBAMAAACkrn5fAAAAHlBMVEUAAAAiJCI4OjdcXltoameIioejpqPExsPY29j///9xarZIAAAAyUlEQVRIx+3WQQqCQBTG8TdOB5DUI+S6nRcoPIFhu1bBHGGO4Any3TYxAkWTv1DSYr71D4b5mOE9kWmszkeC/ZptT6Ocl+xj5qgtbVR1iZn9VE2wU2uO2Jryhm2h2OaKbdZgu/NKrXVK7f6q1JpaqTWFYpvrUtqhPTTYpst0aBOv2Drltlxh392iu0U1t5I4biX13PZvF7+zvOFWihXWlNy+aqZ/M3LcivXcds1xK9kKK3GYAVtYe+8CZ/c/7Br9blSNcgn75O/tE26TasUvH0ImAAAAAElFTkSuQmCC"
				), a5m(1, "victory", 6,
				"iVBORw0KGgoAAAANSUhEUgAAAUIAAABBBAMAAABWYLC1AAAAElBMVEUAAAA6PDlbXVqEhoO4urf///8hX3N2AAAEcklEQVRo3s2ZyZKcMAyGWdx3alLcSaW4k8lwZ9LjuwH3+79KlkljLb/czFJp+tYusD8k/ZItF/5y/a0F/dXb+KW472/cQCIbd8b4//+dDFu12/ByZ8Jkq0uHbRvuTFglwomOezx8j5/HxkrgTXEYqSxQyvcWCpVEhOG53p3QQTGfDiMUlppJxPXHEQrVxIT0092fEOaVw9Q8LpV5GysPJGUsWweojyCVCAgPIBQYc8nzwxEIvcYZjyQUmPv8kYQC68dhNoeWmOsD1Tyc/G5L+elvHLzs0tG3l7/PPn6KVJTfGxqpG0+9vXFW2w+ZGaoU0x3YrfwZP3dkrONijUK5ndBOLBAh2Wz8CwybMAESRPX4kDwZuGODMNkkjLoiwtLTyac8IXs2NpbJO2E0YVInhSH/c8LxolY1CVs+tFiEi2TqGW8lZqikTRlhLSYPGcIK2Ao/3gi/ilwiErQz4nIAJnx9xyJsga3w4xN3s6EbTVhowhJNbhCWyFaYcOVUvShpLZ+glfmREurZZ5MQ2wqOx/Q9k3YyeWNgJp0B4YgmNwh7aCv8eJp61U4mwT+xsJwA4Zarv37xm+ENQr89+/BCAwc93qXhRjmZpJeZ/Rs0YU1scU2MU1FkM/tKbT8kwt8+LB+8TtrT9dMCqHsrsyhYmdnfiYkEoaPBXRG/sPd8eunqZqfPmS1MHRGsfGLF5nX2Z4OwZWm6T15ihK3+/D7XBKFFcAErjzKVx3NTGIT8WZe+jRGSl0pdC7RUBqJW5D3P7O/iI9itDzx2Gla5oiAs6YwjKEBSKhOQMiDMnicGNmkUwc6V8sPTmHeyWAGpBELbgJWzx5c3Emqc0nIyya1Lqvax+BhhKfoE4/bdgHDR+6YOn6Zien0FK5fZpiInrITeRpWaL6qr5SwnUzGftJXTytUbCGszIzhjR8HcHKzTVNfqU9SHCGeRdAdjB1vgE4mWyuR1Q0QRLm8gDHsI9SErmg334HVD5EOE8w4vP2tnBrPxsICPeJ9SjDgESnkGpurMxkMEnUOVbT5Xy2cAEnN3U7rd8Kn5EGRscJOz5LqIunNoElbx+0eq3hev17IJRyNDwbpMGjwv3V5CsHOotRFtwhYWSmvn0BB9nfftbUq0txlV3rAJHTry6JVR+yG+f3/oVNDbhKiVYO+xWftkNQhPbLEW7bEr5WabsLClDM4p7Og/7zmnlPic4mVMZQj9xdzgkpUrmmTfctbr4VlvC/9hB2FvCoWtnM7A31SukJ1Qcl5+Audl2pMKOwidKRS2cm81WwHhmO85BOL8dQdhLZsxmNDhRSHhjb5NoF+xg7AwhcJX9nZ5lIRFvvcV6JZl2kHojZonVm7t4tMbG0ujfxio6+YdhD2MLbVyZZd9RVjhYo+6InEH4ck8q/KVezMt9daeA/exWc/h6oocoTP2Q/m7gKXIEZa5u4DAlp1uE5aWUHL3KbHIEvL7FFFsAouE+TYhlcqQIyR3UrG5QZi7kwoFCMT6k648n17v6n7uv9eL5/et9Asv0oTxJYkUxgAAAABJRU5ErkJggg=="
				), a5m(2, "defeat", 6,
				"iVBORw0KGgoAAAANSUhEUgAAARMAAABABAMAAADL6o5mAAAAHlBMVEUAAAAlJyU7PTtUVlNsbmuJi4ijpaLCxMHX2db///+Cup+UAAACo0lEQVRo3s3ZsW7bMBAAUNqyZWUzsnT1VECbhy7ZvHTwlqmAN6PoUG0CggzairpIyi1Nk1b629awTPGOpHm0DyE1WYJEPlHk3UkW6w5t7eMXEWczKHvN52QoXfcjHUoUi4PSbdOhtItkKBEekZPSLdOh7NKhtOlQ3nwRnaC8pENp06F0t+lQvsWi/O/4+uPXiJNljcbgvUb5G5ci3mmWeVyKqGLNW5MyGyh1ZMo41hIyKaJRh573u9JY5HDo1LMsjBOfBLq9/oC0Rg4L5UYdeuWi5HqDAZShyT9clAKGBzJlBgMLB0UN9CKMksOEyEFpYOFBpkxBpywU1AmZkrFThpv7HUYZwcjPQEGzj04RsOpnoJRwnGNScFo7h7JS16HqcmbJDIUzW0hrWstQVfQWlMkhXg655BzKkoVyOPn7EMDjUa4Os0SidsIoCxbK5tBWhV7FCZSRJ8RtT1M6mE2PYb/tE1EdQsnoFNCpizLudwqYDCiUqScdhlLyfunkeslCo+TMlKJvPkNvNASKr14JpayPV0mtZKFRfFVcKKU5Cir4rYRAWXtq21CKetY31uVxiiI9FX8gZap+F7BrP2WC3oMupRSqZprBeeunlCiNXkopVesTrWShUDJpLS7sgd9GwYG/cn1B8lFGVWctuc7PQcao1hTK9YdP0hjgCykTo1579lLM7RcHxSg9VZYMoWw5KFfOL58BlHbOQdmYDa+CKeC1/2yKpbqvgyk1B2VsafgplNI6b6smVnH7wJq7h5tO2bFQCvdNkintkoVibX8RRtkJFkoDUmCpRwkqpZ3zUMDsgDObStkKFspUj9tqEr+EUO4EDwUt8Ez/ykKj3AkmSonGWGopn0J5WAkuSoX+KG60ksVL+Xm/8kXuAAoO1RvtOkT5B9F51EylDpRdAAAAAElFTkSuQmCC"
				), a5m(3, "orders", 6,
				"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"
				), a5m(4, "crown", 4,
				"iVBORw0KGgoAAAANSUhEUgAAANIAAADSCAIAAACw+wkVAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0xMi0yM1QxNDowNDo0NyswMzozMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1ZmFkNDE3NC03OWNiLTUwNDgtYWIyMi04NThmMGExODUzZTEiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4ZDQ1NTIyYS02MDRlLWYxNDUtYWM3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"
				), a5m(5, "arena", 6,
				"iVBORw0KGgoAAAANSUhEUgAAAQAAAABABAMAAAAHc7SNAAAAHlBMVEUAAAAjJSM7PTpUVlNqbWqHiYalp6S/wr7W2NX////RSpP4AAAD9klEQVRo3sWZvW+bQBiHiSGAt6hdki1Dh7Jl9eapkjdPrbxV6lCxeaw3okqpbqNuzMd/2yRw3PvJkQVYYhHgnvfer9/dBQG4WnftgwWuawBwXAIgBQB/lwDIAEC1BEAOAJolAAwAaB/mHz+C4y8RhQkCKOcHuEMAl/kBDgigWTgG2/Z+7vFDPH77fW6AmAAUSxbi1+t5boAdAajnBjgRgHbm8a/o+HNLgiEGfy0UhUMMfrU/zvMCbOy4HxeSBKehBJtlirGze9AlW1GqtM2fH0rp6HroCTWzNcnpTMmxa+f5HZcEORnnyQ9gewkFyJUcS1zsp1wSUID2tx/gKAMYJccy14MSLgkYQOeeUYCLCBBqOZY7LRhxScABzl6A3gcEINFyDIY+lwQcoPEDFBLAWhE8IQQ7MUnAAd58MA5wkQAOiuxOYBM+sGIsABy9AN0QBMAosnsNx7xjkkAAKP0ABQdYabL7IBpWjwD88wNUHCDWZLeBPditkm8wwMuvD1+Mez8VU/qE3IwBUkV2r5AKWTFJkIPymUwHKBhAV2VzJrtjPOmGRiEECKcDVAzg7X9NxmR3ih2TQ0dTgGg6wKsPMED3aspe2+F9iYyWKwjwmQWhDlAQgC66zjGyLmCZ4yakYQCffo6lYUUAKgLQmx4y2U2WQ3FLJMHUQkQBXt5HANb5hkiCa1L9Q1quppZiBlBgABv+OZEEvKCQvSoOUAeTAGoMYHq/bkjsZCpA9b52zADaLQSI7EMpkQS5CtC8T5AAgEt35xECJHbcmEgCowL0TXOqJAMAZfenhgBrO/MhLsaRPn4fhRSgvvED9H7dAYDDkGkGye5kBKCUAJ7uAz9An1qGlfiH4ZmjuDvVCntVGKDZBxMASDYMTa5xpbcUd6ekXQIyA80WAYiluAxu6Wdi2brRGOxLUw+w+obfHAeIvGWjkXenhL2qoRfsUHKMA0Af1NIejC288ShAgQBs0X6cAnBLAE6ydSOFeGiarhsaGBoegIgAKNYJM8Oi0AHshEqoAQCTa3Igg2T3aRSgxQAJZPcBpAggVay7Ek9JDBKmDmAF88AHEKGRMsW6WNyazJGfcjYZytqwRgDuK7XS8vboK6V4fnTGAHfiqwoAWuIYJcc24motRY7J+YQVUwBCcF9seWc0M3vx+KQhqtg4Li/A8PF6+OIRLYUqNDP38gHSFgMc3LLND5C6+2tspbHWXStnJEgSQIDUVTE/QOjuH8Tl5hbMdaWcn5TiyujVfX4A+2YNTEYbo0cgBp6VU8wLBrCFq54EkNr7K2Jlaq3LlR2DDLoGAWyGjjgBILT3Y7zadItsbc8khU0TASTD8xMAetfXrGr2sdf8B96/CJXN/8t1AAAAAElFTkSuQmCC"
				), a5m(6, "territorial.io", 6,
				"iVBORw0KGgoAAAANSUhEUgAAAjIAAABBCAIAAABEh9lIAAAACXBIWXMAAFxGAABcRgEUlENBAAAJJWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMi0xMi0yM1QxMzoyNTo1OSswMzozMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMi0xMi0yM1QxMzoyNjowNSswMzozMCIgeG1wOk1vZGlmeURhdGU9IjIwMjItMTItMjNUMTM6MjY6MDUrMDM6MzAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmY4ZGZmYjhkLWEyNDEtMTg0Mi1hNGYxLTk2ODMyZGFjYThjYSIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmE4YTU4YWFiLWE4ODYtNWI0Ni04OTk1LTI3MTdiYWZmOWMzYSIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjNhNTMxM2RiLWY0ZGItN2Q0Mi1hZDc1LTEyMTJiNGE0NThjZSIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6M2E1MzEzZGItZjRkYi03ZDQyLWFkNzUtMTIxMmI0YTQ1OGNlIiBzdEV2dDp3aGVuPSIyMDIyLTEyLTIzVDEzOjI1OjU5KzAzOjMwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjU4NjhhNzU5LWRjNDctNGM0My1iYzA1LTllM2ZjOGMwZjY0YSIgc3RFdnQ6d2hlbj0iMjAyMi0xMi0yM1QxMzoyNjowNSswMzozMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjb252ZXJ0ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImZyb20gYXBwbGljYXRpb24vdm5kLmFkb2JlLnBob3Rvc2hvcCB0byBpbWFnZS9wbmciLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImRlcml2ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImNvbnZlcnRlZCBmcm9tIGFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5waG90b3Nob3AgdG8gaW1hZ2UvcG5nIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpmOGRmZmI4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"
				), a5m(7, "youtube", 7,
				"iVBORw0KGgoAAAANSUhEUgAAAKEAAAAkCAMAAADW8qrvAAAANlBMVEX+AgDxYgDjhgD/eXnQpAC7vAD/oaMA/wClzwCH4QAx/zdf/1ty/3Sf/6D/3d2+/77d/93///85QMf8AAACr0lEQVRYw8WYWbaDIAxAsdVqAzzi/jf7GBIGZxxO89GiUbgGEkJEH+Q7DF3bti8rjRPhxTftLavpuuH77X8gwv10BLQrTfsEpHECG4TwEhUy0ItKW1Gh7Zp6AwF0KRP16GSLsApQCLKidt1igE3NZZFjKZWEXR2gaMguaSwPa54jbCoJ2Yjo+lWxpR8jhFpA0dH6jlzbIzhCdOIf8606wm814atPq8+whXDXY+WS+Y4QDtWETdYxHlmGFwm7akLRZwsRaLrVc4TtAsL7vUkIWbxRRBrCngu9xArSinvS/cuccKYhQpletjrXl3ZasRQNP+Pfe9+ZZZhd4EnW5KmYHNxwVFIZ4UwTCP1U0GqhC3+5QjiOn11CPxQGj9EJ0Io8QchM6fMIcZVw/PvsEfpOAxkUMQ9PEObvZh87KtGsEY6rU81bs46zg4SLoNiI1YRaYvGECl2aLcI1Rib0Q2gM42HuN7qeUFOEtV8HZMvwv2ikTzLyZ4PQj2WK5U62NCc8Jd2ImcghwiUzRkI/wWHcOD7nPCcI2ZhxC/BPXiJUaXWrOwjxDOHmLLMXxlhzD6EpCbc9ZdOXadF5172dEJUK83Il2jBXCmE3Eka5ErF5EPMbwgO7Xp5e30+IJBcyh2cJzQ3ZV0GoniM8n8HeTziN2DZH1PrCKaAghCd2PZ/enT9JlYQ9D8dHQFNPqMYskUuEp0+jE0IaVxakCJQt54SswYIQZci+MGVfwZaitihSuHJGSMF7MQstCWea4tpM+tKiHy4sw7zcgMWoNIdOOyWcaRIOnSAAs5T7dGVpRpi61dmOOCqYEs403nQqf1dyXwjnq3NZXU5yMmbsFmA0ZJdGhmeAS3RJA1ET6nyg7c14GtW+L8UVzuEo4zMVzgM1WKoSU5m44TJxw0VirhLDL6rE/6vBvdrCmmWnAAAAAElFTkSuQmCC"
				), a5m(8, "googleplay", 3,
				"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"
				), a5m(9, "discord", 7,
				"iVBORw0KGgoAAAANSUhEUgAAACwAAAAyBAMAAADVdiTZAAAAG1BMVEUA/wBI/0lu/26P/5Cl/6O8/73R/9Hn/+j///+iRuwXAAABJUlEQVQ4y83TvW7CMBQF4BsKdKVIpYxIRaJjVLUSI6JDGSNlCCOq1JC1f+CxFIL92D22E+di/ABciZB8seRj35joVZ3VN1FXBSqhRYgPJEIsSQXrAnmjL2uP5Usm81z83Bec5WM+J9T4vS8Yfzz1yFQ0v2ackKsrxr2G7d4ZPjK1O214z3no+Jdz1/EKTy1NI/w6jmcIID6JJirGe8cYdIdGIcQOwx3j/gEpI6X+qoRkGqrnd6OXFR/NRAcdOWFc6hDPera0Xk/Fozo1ck4bHsSVpg0jYJSlervGW9zWSdQXhhXozlbGek1uY9/s2hRWect7ucnsf5ld7DfosX+kcsv+AdwtDfvHdW877x/u0raB6Oa0qG35rKZhbokg41sKclQEmTr/f+SUPtWxuyYAAAAASUVORK5CYII="
				), a5m(10, "insta", 3,
				"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"
				), a5m(11, "emojis", 4,
				"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"
				), a5m(12, "flags", 3,
				"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"
				), a5m(13, "bestTeam", 5,
				"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"
				), a5m(14, "bestPlayer", 5,
				"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"
				), a5m(15, "zoom", 6,
				"iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuBAMAAACllzYEAAAAHlBMVEUAAAAhIyA3ODZTVVJrbWqEhoOkpqO8v7vX2tb///8goTJXAAABaElEQVQ4y32Tu1ODQBDGL8QAdlg5dml8dZTa2TijXQpnIh2TwoQOxwehi2PB0flKYP/b7HFv5nALBn5337d7ewshXZyuKX2PST8egUW76OE7EJFa+BhJ9bSsUWFaeTV3GKHbn8EvlB79bjSv4VO8jUr4VdiHNnK938MHPie0Yh+ZLqmGuNsJ7CNURgewI5qPoRE86GwkJyWIBIfcUfJrmMm0sclDyDnPWmLyADacl8jnRbEGKIoiJRP4EmU2LJmIDfLvAf7z/37mv6IUm08pzbV/rx5f1pPA1Fn/iX3eS3nekAslz7gcGw9bg3uqn6Rup5oH+uaTLpO4r0SmZVuUFE2lfTc+z1qr9+BVtGJqzq1RHNfQdAtnrEW75UwuXOFgvj3crpCyDu6UIpP9fPHZU5XkiYVXvsXIPcc+VwspzY2pPorE/NgCfYK+QJ5+QFA6fjQt2A4IWuIWODixe2ELcuIUNJGL+zQle92exY5pfDIaAAAAAElFTkSuQmCC"
				), a5m(16, "apple", 3,
				"iVBORw0KGgoAAAANSUhEUgAAALQAAAA8BAMAAAA9AI20AAAAG1BMVEUAAAAjJCJUVlOEhoOanZkA/wC8vrvW2dX7/fq38z8cAAAEbUlEQVRYw+2YzXOiSBTAGzW6x8ZY6pGYFMMxUct4JGbLcMwld9QpliNkLeUqUvT7s+e9BoUITpIpuWxtp0IJdP943/3B3t7eXtnF2xViGZIbf1+8mVcS3YQKmk3o16AKtLhCdAsqad4be3WrQcdX7BUqalesURXaZM2q0DZr/TfQQVVo8fTXb/LgzO9SiQpon/WPg0fjk5j3cuNnH74ZQPcztOBsegz6xnP7i+i99Tk6ZOwoadwH34LnR5jDBB6j9RjR4vkF4pEF6wmho1EQOyP83uwWuisX1uPgPNpmdciho/5efwiWoiZau86T5QX+ZACL+S0MpEKDVW9/PTMAljq0R026P4/WmJFHx30v2E/9+GFj7KzI8IIZ+K6AZdyCAXbowd3ewN9kkA4McYB+Hs078BG9gNgI/12trJ1L6BGEVjRoRwbZOsbrfipaqa1nUXvQOY+eB1kUIXpv+BAZ0VM8DI5od7id4auh7DBK0VOJ/rEtt7WYqXoAmxvlLn0f94Tp7qx3K24LFRL0IrCDOxiIzgZtLbqim6INQosevJSiTZwtr2ccr6lWsaJ2IFaRocM4Re/x0WIwhEV7hD2e1GmCjtUA0fB0Y5Shw9x8bCWPtlu6BIeswD95K7YiTT6xpWQJZG7ic7ovQ9/n0MZFa4jIkeuXLU/hpYXO0H4O7V4WbWfkWvZ6NT4zbp3F6HfQOVNzpXx8RDHalcX0c7SZobM5XpwzjqlMHA0/azf/FL1XeKlLBccKF6G7v4vObL2rm6WzciznC631NXTO1pl97ZZHKtxMl/wOdWiLG+UxQVO+btwFV7AMrDk99bvvbYhvFL2A9op5jnL1Q1KB38lgDxUz/a5gvYM8CsToUsUFr85rMqWnp+hdDt08mtSKGKI413/yOmaVMl8m+aQpE9nBbGzBV17WaHtPuXYipm+0xil6n0Mr7sGkgSAVUBxMqSAkWbVmmmBtqp9k63v8t2uotgs+dgwP9jyi4/xOJHVkqJBNEN2ieLBCikSvlqxWsJcu0YKCCHn0wqb6eojXrPLxIpp8aKJMvE/mnYZknJ1ySEfyCaFJL7SbVycFHMc5uCpDm0Vjmw3HMXGEDG5mkBJSk6Qt0T6IllLihdCaHD09RfvF0id7KglaFNBk9lN0nXZfBYNEhdInmIoNbwoGiZ1EqYJBWuWrJ+20PkX0CZQWeDN1I0LsuizuFAWmlBoSNwKhZXJugwLaP7VH4jGth8EXwELB4OtiPDRlOP3ACwazjY6+J2fXJdrHjlExQmRWfUh0WwY/ysbV6xkWrZDx8cMxZRwNlfDYLYqkk0cJHbGOo9VKljgLpky2K04SJROxfIXxynVOfg+VBcal/O47S9YUe/Sy0ORTQsswM0rQ4iepsnEO96pcaYdqwI31YCINOrtNtV2pqpxl1nNUd0hPo7lcJg0m39rLpEU7F3cX2yb9jz5paRJ8WNF9BV3hRrrC7X+FhxYVHrVUeEBU5bFWhYdxb6+Nf7YXbpv0CLGqg89fkK30UIXyeWIAAAAASUVORK5CYII="
				), a5m(17, "loading", 6,
				"iVBORw0KGgoAAAANSUhEUgAAAZEAAABGBAMAAAD/Q7RHAAAAGFBMVEUAAAAnKSZKTElucG2Fh4SoqqfLzcr///+y5yZlAAAEnUlEQVRo3u3aS3PaMBAAYGNsuHoy0+TKTJv6SjNNfeWSciVNJlydF7qGl/n7JTGSd1e7wgaFaWfMKfFD1qeXV5KD8cb8kuC//rWSVtJKWkkraSWtpJW0klbSSlpJK2klraSV/KuSbw9qe8HsfnCyfHVuZu95Kmb3iUdJ+KAvKf7gM119vDoUb8Bv9gLsu2PD97+n4O/tr1/+OzHXXiqTRjHyJukqkLcndKqnDw94yTYfty7JoyD5jtIYeZJ0FEr2Fp670EcnkgScYiRrXkJLI/EjyUjOhtzduSwpBrJEJ4YloSJJPHqRRDRnK3DSPHIpS8w5TjLnJJlVGIkPydjKWdVsw+pZDokueE5SMJKunULuQcIky5a/S7KQJbtiQZLUTmHlQcIkW13YYyqKkRQOycKWKNcjD5dwyebMYJA7JLscspLCknAJgLHxUEnEJbtkmAuXZC5LysqEEq4V1OkoeySm/bxenf22ujd41NolWTskCyoxxfNydXajrL55qCSDXe4LeaNHdl8wkiLofP2NxwNeUhBJiKKJiBbUwRKFBtIxbrVlha3wCzMGGYzROMxLPhIDkhjn/aOtFa93x0o6uHJ1Cb3Bce1NoZYMJabN5w7JEkv6uLSibQT+w0PcFZGhQyFYmZ18CnVY0q0hKbAks6JrL1F9j4S6Gar50jVK0csLSTR97pC85x9IprW7+CESU0B9psCTHroGS8ZgwJAkSyRRqAF7k/TJyIFkWhCjesOSC5CAJNk+GEjqvwobSVIS9sRwVO3vzoXo2TEXGhZOSQ4knUazq/qSDMXe1QgAbp3rBpFzkl4dyQpIurBnqibhilsyJo2WeU6us7U8WLIZ2JLgkyUhkFSNKoN5x5K4liSvJNEnSaZE0gG5ic1dfThFaSTRQ9vpJbBOqsE3hp20kUS/r9JPl0itKzGjwbrqPXlzia5jdXIJ7I+qCsrhFKVRjyeLD6DHJ54lrlEYVIQC789mkliSDD1LUhIEgTdjJEzXm0nw7Bq840eeJY5opSesBrHv+LUoyQTJ5BgJM113RJCpMNnGknSfJKYSGEH6l3BR/dS+4c2WwBidlaDmxUX1oR+JMNNa8MtHK0vSgUZekhIJnWl5kpDZb7fKGLM2iebuBZqp5bIk3rBTepN1TxJT8gO00jJhO3x5FZSYDYuJLKGdgaxI6P9BwxuZgyt4cI8kYxrOR4770kphJTm7VmhZSZCk+H68ShRcbjxJ4MrdNWxFY2mlMJaanSSJyAClwCN/Pmx8SaJ9zc46wUkWLglISl5NPV4irXCH7B1F0xVuvMXnWOH2IBF2HWLcLUE81mjXgWzRTODI7VvSdfafBZmBjRruBKHXp667jKvt5GiJsDuXkXBfmXbXaHeuPHGOJVzfHAXHS/gdU0W2Naam9BvtmJIdwIn0jnsKPEj4XWy6KlVFio12sXE5aElX2GY8VkJ2xx9hRSV2kByLW8WypEcilHNuI+l4Cf7a45ldLzZ5GVrfN4yC/ZKQhu6/ECTxJQnCKoK/s6cdqDfl5AscuIMjS/S/7Bc4z3SlR5DU+5VfRRWvp/sqKiy/iqr/IdZfF1HJgRmsN+0AAAAASUVORK5CYII="
				), a5m(18, "target", 7,
				"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAMFBMVEXUAADUISLWQkLMTQDZZmXAdwC0lADgiIioqQCWvgCE0QAA/wDnra1i6ADw0tL////afMd+AAAC6klEQVRIx42WTWgTURCApzFNY2lLBKEX0dy8iA0UxB8CKgUv0gaKBS2B3HOJnkUDQrENQi6KEITcgydR0l0CUYReJBZCi3YpaC+9FANS6GXZ5+6+eT+z+1adS/ImX97Mzs4f2ET2916vPV9/61At6Ifeq2UIZWXDSYK+IxLIlY4Z+ga6jL8xQbsFoFQrDtF7QqoThaxSDIKsE4HqYJAyhXZNDJxq6VCvZIQgq0NDSJCGgnqFJCiroB2lHTvjS06dWxJSHl0cjBjztm5JxXUBdaXqro8E4j2UD+gg1BamFpkQ75GgVjkkn/8SU+LVUHmaQx/wmB5pEHNzyh4oa08ZkU+oroZQhR8mKMO8PNdPBpBlvoixA67PBBC6lI4yzJVOgb3Nv1+OQawm3h9gJo19jUPHHLrhQ4UEazIKkzZYHJoRvxwuLAzE95voOWzyO5dQ/zkw/QQPfe65DfhwGO2T8JBCB39zqAM8l1Ij3QBMkSC0YFsP94nIB/4fj3vegLb+175IkCX94io0w8/zXJkX0IwezjLUNciTKZrWoSJCF4hLvlCookHHChppPhaB5+7c36BpvOm/oH+Y0x13VSFTx5vGEEzQOPGInyO5KPOUR3yVvrsDIFWBBVOFoR5hlwYczTfgPUmVj1y9SJKiBdhSMM3c0ItZzMwfWFMifeeYomZHpKb89MVWOCWr++hXpNCzfkmViFO6oEvTPtROaAWM/RRtDOx3QO0pyYveCjZ6HreH1saDhiGaeKxj9GUrBzl70iNj54FiCA3BeFVNtXsfEq2Odh/xrjPYxyuG9nuU00YC6DPqrKTcvD6nAshSNclbk3coR1BGDqCmpFJ3Hg++bN2OTNgQ6uojTh9kfP7g5KwnDcWiNl67CQy/SEzzhKvKZORvGqdwxqHLw47JWCOyYfSexaEHsYUmvj9cM6xG1jJlrjqmJcsiFu875nWt91I+4/yLxMXP3lu753PzK+tO8nYY3LbvS2SDtP8A+ntynBIvYeAAAAAASUVORK5CYII="
				), a5m(19, "members", 7,
				"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABSVFGanJkA/wDMz8x4/3ey/7L///+GDHoaAAACZElEQVRIx9WWwYrjMAyGlVCYa6cs5JqGQh5gaObaDYU8QJnOA5SS66RN49dfSZZt2U2WZZeFXc9h2r9fZEmRJcPbLyz4d6GzMdM1/uXcG3PV0KehFVFnlh4Baoxdl8BEEkF7EcwUoN5pJ4HenRBMNV66C4QfxxI2nTKFhsYt5CgZC9FTawDIxbg4UKKUWevAuw1Aq/D7NUq6M9RbQ2zKhkwpKVnK2AWGRrCrc04lEpDfgyg1u8mh3EQqSGLoS5QXY/a4+XSKJIIwkkNQOIlTgFYUcQq59TuQcrwI0PDk+M3Hayh2+RcC1smkl3DDj1ltlMR5old38LutHT04l/BVAVfOSL9lnXelUBKaAltxt2gTv3Ft6w6k4sajdtf6zhLVHUHltzTwkIzvOUGf9PhOJJdVdphWS0YfFnJUCrVgISmdTVWVnVQa19+YV9VWKgohl2+MRUFKjaAXDX0tQCvt0+HPIJWnJajWGV9wPDPutPFhXs9CK+PLr1aJjSF+5aUzpOQY6mwZURWNCRRO9JZq43ikMtnog44v2LlojK1EW6n4zYXz4HqSb/gsty1qaWjAt5o7NAEiL7Jdu2vX7IqHLikEIYdzUJ5CZQQdJJcJ5GSE9i5tC1BNR4oadGub76ChwrZfKn48wTRXsGfrQvHFQr0dmy245o8nMYHGoxsToMZIAoWBA2qOzEMXmVJiK4nO2jn5oXju5yGZpn4Gf/QpNH08D+pn6O3vQqOGulkIX0+1fbXd93VT+dkXQe/SO3F1fkSnUBjgT7cEdVdJodkLTbNkKLr1NH1ApstPrkbnK/39B9e1H85NJPjxrK7zAAAAAElFTkSuQmCC"
				), a5m(20, "hourglass", 7,
				"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABKTEqZm5gA/wDJzMh3/3iz/7L///+iyVF/AAACjklEQVRIx72W3aqyQBSGJwk6dceGTv1C8AJEO60QvACJLkDI02xPrtvf75pJ58cx2iffIqT0aWb9vGuNIrft0hSX8WqZ4Etxg9HM+G4zQVdatOcEdSSrqkr3juFOVdMwQXQUC7YmAyVLUPQZ1PxtJSJ5js7KX7j/+pKkNR5Y0RE9Ij/6JMPFRFfebt0cOmbD7dZOEOwQgn7ssnwOrf8rJAMp8KFSrnwormcQCR8S1HpQgT8qVVXnVCsJS/tQzlV4mMpmJLUCXOi4I2mgmnotOAfqcJPiCUIGNsMMunJdEqMjbP+cQQcOrx+hnZ0BA5XsuTQuPUxwBoLnZj98Oxq/LaiTHNK4G34MAQj7jfGhQqeIfgJQzm7ofELccUZ5CDpQjKBO3LbUr+gZhAo8QhMl8FoCb4IQhkvyUt7JWciBCnhUa5VkJkkexEtxQ3KjPvMlqKD7hk7fdF/bHnlQfoUU4LglgBCElVCP+ztIbQfDdXk7OL5jqH/juE7BA4pBUZr8XTJZMadoKZklKlxriMvSBqGO4m8ejJmuy5AH9aTqq02CbwPQlfeYDH94ziEWilqDW5xniiUWq6VUjs6szFTnat5SHYuXdcnGAcTZrINLrpmZGJnqqXY26WLONJ7rfqm5qfwh1vXckPahAh8HD/Imjzt7xJgACLe3oZ01xYQ1Mo/umWmGprBOjcQ96cyEEtacc89DrDx6PkJQrHSh2kjdgh4ulH0C7YIQuS8P3nYlDa9ecg33OpUF8TqnFyB9UitIVujsALSmqp6g+/5fHKVpxQfQqM6q2ier7X5joFdAMX++YrEyMc6hgP0RkuoVZbvfTqfU6gs/VbZG6M3bmn5fE0pxb6x1Ori4eNbkY3f+AriuYpjQCOoxAAAAAElFTkSuQmCC"
				), a5m(21, "stalemate", 6,
				"iVBORw0KGgoAAAANSUhEUgAAAeoAAABABAMAAAAnsyk1AAAAElBMVEUAAAA8PjxeYF2Rk5C6vLn////ACCfyAAAFMklEQVRo3uXby3qjIBQAYBEfwO+buM9c3Ntp2ZOZ8ADx8v6vMp2qybmBCK6SbNomEc4vcAS0RbG+1Iebvl5/vxev8lIf0+M1nl8DXboJvd5eET1N3QuoGfoVOvlp4q/+6fv3JL2evY83orp/uVH9NbLrp0braXrBLt541LenVpsH9Ao7+/DUc1E0kuF85ZkHdokHMriMPfNEpbo39fx3e1fbV1D3NKVb8KEn1TkpCShvbxET50gvnzdaDG4A520mfhHSvg+oWsHaN9QlCf0Ydc+vqFYqfUk8SeqGNpcDtW+oKzEJ5KqHghYO1ZrOKPLUa842oPYNdbPRGmnqka+JrDAi13eT1Cd6jj9LuV7ff/+g51tQG3FOk6sWei5Qt3Qo5I1raVG9oXbinCZb3dFTCtWszlz1ZwRve9Qli/0YtfW8QzP73CmS1OQD7A6r0aHn49QXxrPyWqlLVrM9BegOqxt5iZat7tleh5UjsslqYXk91HFqIy/RstWDzOOjuE9XC0eNXZQana/hOPUYUBtWZ5q6CmwpBNWlEHykug9v6NQUY8VkNu/3RKlH/1KTs4NqciLPx6k72qjWs/HTJavlw/C1Wwz35Nlxyldb6Q2pGay0OyJNX8fIneFhM9ylmhFeb45RX2gPtKSFRmGXa6e6+LW5WyiGuwTaO3KactTj+nGJdJbQBsebZq9a3hseNsJdcdaRgnPUw1q1FtVq+drNcMxudSmyz+Fw1xK7luyzZandEuM8gP8SyFqnbXkNu9Uy+xIOd00s54YMiZ3X65qrP9+bv/pOIGudXcWFJrwYl4auxB7C6jWx1DSCLLVZDpx//iRFrwXUmqezBHVRfPji8anvw1mTz7LUzRL4/Pc3ArkP55K3TJI6eOteUKv7O4qMnSz13HHsnLZGjSHqkbodG69p6qL45nxzAEEN+pjDfSNLPRfbl/CveyTlIwrDqkhV0/a+hdRgNBtcXJYacXuiBnW2jJCuxjOWPqRu+YajPUA9HzwuHZ2oG77ddztEDWe6Q0htHkFXvh31BPXySyuqQbeuWIz71OWP948rOLyNUsMUpvH389Rz8MsFjKgduA3Jph971C2bvegoNZSWGJCnhivAGquhVLE68tTKxagraVOlO0ANd6oLrEYTA0dH6R51w0OMUouLcps/D8d5BavFk3ZJmYdXPLWZGLXxP7eUpy5hcVhtgkvDNPWlEG7v+cJVgcVpnlrBZtTe+wJ8v26PmucuFTNL0YGntfLUwGaxWt7zua8W9qgVu3rrmBlpFXhaK1NtQGlIrcNPiO1aXzva2CZm9eF5XMseoG5BKyL1Sa7zkqIGKeIPKTuw0jSBmwPK+1GU+gQiRWpPnX2KGp7B8ffPa9SugpzMlkMi1LyLOv6kwEDUnjrHvdfr/6H4HqhE+xRU7UksczrLVGtQF1QrX5x1gtp3CtHahKq990TO+WolNIkNPO+6xrlP7btjMgbSUOOLwOar781gsfoUqnO3Wm93cKY25MxoeFCu2vD7VBa0zkhv2fQpal9urANq55vZDAeowV63Fm58DXR6OCSpq+AFQVKXrD84aRGYqG74yt2CUns206hT1GI+w/8KQNTV5Ln/9NVAuepKVGt2pg1OZ3vVenNziagb9q12ElolUa0fVQE1P9PNJK/IItVCerwEp5KGTTkbUGKuuuSZFmyKPs505QkqVs3Yf8ITaMeGAZxQ5aqX3y1WO5ZlNZ5E7lfjjfCxK4Lqkl/S4YT3IHWH1IrXWeIclKD+LGP9T+Tr8/9r6j/yRPVUqj3rEAAAAABJRU5ErkJggg=="
				)
		}
	}, this.get = function(fu) {
		return gN[fu]
	}, this.uG = function(name) {
		for (var ds = fr.length - 1; 0 <= ds; ds--)
			if (fr[ds] === name) return gN[ds];
		return a5j
	}, this.fy = function() {
		return 0 === a5i
	}
}

function bm() {
	var a5y, a5z, a60, a61, a62, a63, a64, a65, a66, a67, a68, a5v = [224, 224, 224],
		a5w = [
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
		a5x = [
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

	function a6V(f0, a6X) {
		a1e[f0] = 0, a1e[f0 + 1] = 0, a1e[f0 + 2] = a6X, a1e[f0 + 3] = 0, a6Y(f0)
	}

	function a6Y(f0) {
		var jh;
		b2.ki || (jh = a4.jr(f0), f0 = a4.g9(f0), b2.ki = jh >= b1.a1d[0] && jh <= b1.a1d[2] && f0 >= b1.a1d[1] && f0 <= b1.a1d[3])
	}
	this.ch = function(qR) {
		if (a5y = new Uint8Array(ex), a5z = new Uint8Array(ex), a60 = new Uint8Array(ex), a61 = new Uint8Array(ex), a62 = new Uint8Array(ex), a63 = new Uint8Array(ex), a64 = new Uint8Array(ex), a65 = new Uint8Array(ex), a66 = new Uint8Array(ex),
			a67 = new Uint8Array(ex), this.yO = new Uint8Array(ex), (a68 = new Int32Array(4))[0] = -4 * au.eT, a68[1] = 4, a68[2] = -a68[0], a68[3] = -a68[1], hV)
			for (var ow, iU, ds = ex - 1; 0 <= ds; ds--) iU = b8.rN[b8.iV[ds]], ow = el((a5x[iU][3] + 1) * aF.random(), aF.value(100)), a5y[ds] = a5w[iU][0] + ow * a5x[iU][0], a5z[ds] = a5w[iU][1] + ow * a5x[iU][1], a60[ds] = a5w[iU][2] + ow *
				a5x[iU][2];
		else aX.iq && aX.ir.a6F ? function(e7) {
			var ds;
			for (ds = pj - 1; 0 <= ds; ds--) a5y[ds] = 4 * e7[ds][0], a5z[ds] = 4 * e7[ds][1], a60[ds] = 4 * e7[ds][2]
		}(aX.ir.a6F) : (function() {
			for (var ds = ex - 1; h4 <= ds; ds--) a5y[ds] = 4 * el(64 * aF.random(), aF.value(100)), a5z[ds] = 4 * el(64 * aF.random(), aF.value(100)), a60[ds] = 4 * el(64 * aF.random(), aF.value(100))
		}(), function(qR) {
			for (var ds = h4 - 1; 0 <= ds; ds--) a5y[ds] = 4 * qR[ds].a5F[0], a5z[ds] = 4 * qR[ds].a5F[1], a60[ds] = 4 * qR[ds].a5F[2]
		}(qR));
		! function() {
			var ds, f2;
			for (ds = ex - 1; 0 <= ds; ds--) f2 = el(a5y[ds] + a5z[ds] + a60[ds], 3), a5y[ds] += a6P(f2 - a5y[ds], 2), a5z[ds] += a6P(f2 - a5z[ds], 2), a60[ds] += a6P(f2 - a60[ds], 2), a5y[ds] -= a5y[ds] % 4, a5z[ds] -= a5z[ds] % 4, a60[ds] -=
				a60[ds] % 4
		}(),
		function() {
			for (var ds = ex - 1; 0 <= ds; ds--) a5y[ds] += el(ds, 128), a5z[ds] += el(ds % 128, 32), a60[ds] += el(ds % 32, 8), a61[ds] = ds % 8
		}(), this.a6L(),
			function() {
				for (var ds = ex - 1; 0 <= ds; ds--) a62[ds] = a5y[ds] < 32 ? a5y[ds] + 32 : a5y[ds] - 32, a63[ds] = a5z[ds] < 32 ? a5z[ds] + 32 : a5z[ds] - 32, a64[ds] = a60[ds] < 32 ? a60[ds] + 32 : a60[ds] - 32
			}(),
			function() {
				for (var ds = ex - 1; 0 <= ds; ds--) a65[ds] = 235 < a5y[ds] ? a5y[ds] - 20 : a5y[ds] + 20, a66[ds] = 235 < a5z[ds] ? a5z[ds] - 20 : a5z[ds] + 20, a67[ds] = 235 < a60[ds] ? a60[ds] - 20 : a60[ds] + 20
			}()
	}, this.a6O = function(player) {
		var e7 = aq.e2;
		return e7[0] = a5y[player], e7[1] = a5z[player], e7[2] = a60[player], e7
	}, this.a6L = function() {
		for (var ds = ex - 1; 0 <= ds; ds--) this.yO[ds] = a5y[ds] + a5z[ds] + a60[ds] < 280 ? 0 : 1
	}, this.jr = function(f0) {
		return el(f0, 4) % au.eT
	}, this.g9 = function(f0) {
		return el(f0, 4 * au.eT)
	}, this.pq = function(jh, ji) {
		return Math.floor(4 * (ji * au.eT + jh))
	}, this.q5 = function(f0) {
		return this.pN(f0 + a68[0]) || this.pN(f0 + a68[1]) || this.pN(f0 + a68[2]) || this.pN(f0 + a68[3])
	}, this.q3 = function(f0, player) {
		return this.a6Q(f0 + a68[0], player) || this.a6Q(f0 + a68[1], player) || this.a6Q(f0 + a68[2], player) || this.a6Q(f0 + a68[3], player)
	}, this.uX = function(player) {
		return player < h4 && 2 !== h6[player]
	}, this.f3 = function(f0) {
		return 208 <= a1e[f0 + 3]
	}, this.qA = function(player, f0) {
		return this.f3(f0) && this.a6R(player, f0)
	}, this.a6R = function(player, f0) {
		return player === this.f4(f0)
	}, this.a6S = function(f0) {
		return 208 <= a1e[f0 + 3] && a1e[f0 + 3] < 224
	}, this.he = function(f0) {
		return 224 <= a1e[f0 + 3] && a1e[f0 + 3] < 248
	}, this.q4 = function(f0) {
		for (var ds = 3; 0 <= ds; ds--)
			if (this.uZ(f0 + a68[ds])) return !0;
		return !1
	}, this.a6T = function(f0) {
		return 192 <= a1e[f0 + 3] && a1e[f0 + 3] < 208
	}, this.a6U = function(f0, player) {
		return this.a6T(f0) && player === this.f4(f0)
	}, this.ev = function(f0) {
		return this.f3(f0) || this.f5(f0)
	}, this.uZ = function(f0) {
		return 0 === a1e[f0 + 3] && 2 === a1e[f0 + 2]
	}, this.f5 = function(f0) {
		return 0 === a1e[f0 + 3] && 1 === a1e[f0 + 2]
	}, this.pN = function(f0) {
		return 0 === a1e[f0 + 3] && 3 === a1e[f0 + 2]
	}, this.uY = function(f0) {
		return this.pN(f0)
	}, this.a6Q = function(f0, player) {
		return this.f5(f0) || this.f3(f0) && player !== this.f4(f0)
	}, this.f4 = function(f0) {
		return a1e[f0] % 4 * 128 + a1e[f0 + 1] % 4 * 32 + a1e[f0 + 2] % 4 * 8 + a1e[f0 + 3] % 8
	}, this.qB = function(f0) {
		a6V(f0, 1)
	}, this.a6W = function(f0) {
		a6V(f0, 2)
	}, this.q2 = function(f0, player) {
		a1e[f0] = a5y[player], a1e[f0 + 1] = a5z[player], a1e[f0 + 2] = a60[player], a1e[f0 + 3] = 208 + a61[player], a6Y(f0)
	}, this.ew = function(f0, player) {
		a1e[f0] = a62[player], a1e[f0 + 1] = a63[player], a1e[f0 + 2] = a64[player], a1e[f0 + 3] = 224 + a61[player], a6Y(f0)
	}, this.hf = function(f0, player) {
		a1e[f0] = a65[player], a1e[f0 + 1] = a66[player], a1e[f0 + 2] = a67[player], a1e[f0 + 3] = 248 + a61[player], a6Y(f0)
	}, this.a6Z = function(f0, player) {
		a1e[f0] = a5v[0] + a5y[player] % 4, a1e[f0 + 1] = a5v[1] + a5z[player] % 4, a1e[f0 + 2] = a5v[2] + a60[player] % 4, a1e[f0 + 3] = 192 + a61[player], a6Y(f0)
	}
}

function bn() {
	var fr, er, et, dn, a6a;

	function a6f() {
		for (var a6k = 0, ds = 1; ds < 5; ds++) a6k += er[ds] % 1024;
		return a6k
	}

	function a6e() {
		for (var ds = 1; ds < et - a6a; ds++) er[ds] = parseInt(er[ds])
	}

	function a6g() {
		er[0] = "Player " + Math.floor(1e3 * Math.random()), er[1] = df < dg ? Math.floor(1 + Math.random() * (Math.pow(2, 30) - 1)) : 0, er[2] = 1, er[3] = 1, er[4] = df < dg ? 0 : 1, er[5] = 0, er[6] = "000", er[7] = "0", er[8] = "0", er[9] = "0",
			a5.dl()
	}

	function a6d() {
		for (var ds = et - a6a - 1; 0 <= ds; ds--) er[ds] = h.dc(er[ds]);
		er[0] = h.qs(er[0])
	}

	function a6n(name, value, a6o) {
		var a6p = new Date,
			a6o = (a6p.setTime(a6p.getTime() + Math.floor(31536e6 * a6o)), name + "=" + value + ";expires=" + a6p.toUTCString() + ";SameSite=Strict;Secure;path=/");
		document.cookie = a6o
	}
	this.ch = function() {
		if (!(5 <= dV || dR)) {
			a6a = 4, fr = [], et = 10;
			for (var ds = dn = 0; ds < et; ds++) fr.push("u" + ds);
			er = new Array(et), ! function(a6l) {
				for (var hi, f0, a6m = a6l.split(";"), ds = a6m.length - 1; 0 <= ds; ds--) {
					for (a6m[ds] = a6m[ds].trim(), hi = 2; 0 <= hi; hi--) a6m[ds] = a6m[ds].replace(" ", "");
					3 < a6m[ds].length && (hi = fr.indexOf(a6m[ds].substring(0, 2)), f0 = a6m[ds].indexOf("="), 0 <= hi && 2 === f0 ? er[hi] = a6m[ds].substring(f0 + 1, a6m[ds].length) : 0 < f0 && a6n(a6m[ds].substring(0, f0), "0", 0))
				}
			}(document.cookie), er[9] || (er[9] = "0"), (! function() {
				for (var ds = et - 1; 0 <= ds; ds--)
					if (void 0 === er[ds]) return;
				return 1
			}() || (dn = 2, a6d(), a6e(), a6f() !== er[5])) && a6g()
		}
	}, this.dl = function() {
		if (2 === dn) {
			er[1] = 0 === er[1] ? Math.floor(1 + Math.random() * (Math.pow(2, 30) - 1)) : er[1], er[5] = a6f(), ! function() {
				for (var ds = 1; ds < et - a6a; ds++) er[ds] = er[ds].toString()
			}(), ! function() {
				er[0] = h.qr(er[0]);
				for (var ds = et - a6a - 1; 0 <= ds; ds--) er[ds] = h.dm(er[ds])
			}();
			for (var ds = et - 1; 0 <= ds; ds--) a6n(fr[ds], er[ds], 1);
			a6d(), a6e()
		}
	}, this.dn = function() {
		return dn
	}, this.wN = function(hi) {
		dn = hi, this.dl()
	}, this.dk = function(ds, value) {
		5 <= dV || dR || (er[ds] = value)
	}, this.dY = function(ds) {
		return 5 <= dV || dR ? 0 : er[ds]
	}
}

function c8() {
	var fu = 0,
		a6q = new Uint16Array(32);

	function remove(uJ) {
		var ds;
		for (fu -= 2, ds = uJ; ds < fu; ds += 2) a6q[ds] = a6q[ds + 2], a6q[ds + 1] = a6q[ds + 3]
	}
	this.ch = function() {
		fu = 0
	}, this.iF = function() {
		var ds, hb, h9;
		if (0 !== fu)
			if (0 === h5[eo] || a6.a6r(eo) === a6.eY(eo)) fu = 0;
			else
				for (ds = fu - 2; 0 <= ds; ds -= 2)(hb = a6q[ds]) < ex && 0 === h5[hb] ? remove(ds) : (h9 = a6q[ds + 1], (ex <= hb && ua(eo) || hb < ex && uf(eo, hb)) && (aa.fl.fm(h9, hb), remove(ds)))
	}, this.uR = function(hb, h9) {
		! function(hb, h9) {
			var ds;
			for (ds = 0; ds < fu; ds += 2)
				if (a6q[ds] === hb) return a6q[ds + 1] = Math.min(a6q[ds + 1] + h9, 1023), 1;
			return
		}(hb, h9) && 32 !== fu && (a6q[fu] = hb, a6q[fu + 1] = h9, fu += 2)
	}
}

function a6t(player) {
	a6u(player), a6v(player), a6w(player), c.en(player), e.jc(player), a6.oc(player), ap.a6x.a6y(player)
}

function a6u(player) {
	a4.uX(player) && rC++;
	var a6z = a6.a70(player);
	0 === a6z.length ? player === eo && a71() : (a72(player, a6z), a73(player, a6z))
}

function a71() {
	b4.er[17] += ep[eo] + a6.a74(eo), u.show(!1, !1, !1, !0), t.a18()
}

function a72(player, a6z) {
	for (var ds = a6z.length - 1; 0 <= ds; ds--) a6.a75(a6z[ds], player)
}

function a76(a6z) {
	for (var fu = 0, ds = a6z.length - 1; 1 <= ds; ds--) fJ[a6z[ds]] > fJ[a6z[fu]] && (fu = ds);
	return fu
}

function a73(player, a6z) {
	var ds, w2, a77 = a6z[a76(a6z)];
	if (9 === it && 1 === b8.iV[player] && aF.iO(8) && aA.a78(a77), player === eo) 2 !== h6[player] && k.r2(a77, 1), a71();
	else {
		for (w2 = !1, ds = a6z.length - 1; 0 <= ds; ds--)
			if (a6z[ds] === eo) return w2 = !0, void k.r2(player, 0);
		!w2 && player < h4 && 2 !== h6[player] && k.vj(0, player, a77)
	}
}

function a6w(player) {
	h5[player] = ep[player] = 0, eu[player] = null, fB[player] = null, fC[player] = null, fF[player] = null, aT.a79(player)
}

function a6v(player) {
	for (var f0, ji, jh = i3[player]; jh >= i4[player]; jh--)
		for (ji = i6[player]; ji >= i7[player]; ji--) f0 = 4 * (ji * au.eT + jh), a4.qA(player, f0) && (a4.qB(f0), fJ[player]--)
}

function cE() {
	var input;

	function a7A(dC) {
		a7C(dC.target.files)
	}

	function a7C(files) {
		files && 0 < files.length && aW.a7D(files[0])
	}

	function a7I(dC) {
		var iU = new Image;
		iU.onload = a7J, iU.src = dC.target.result
	}

	function a7J(dC) {
		var a7K, dC = dC.target,
			g0 = dC.width,
			i0 = dC.height;
		4096 < g0 || 4096 < i0 || g0 < 10 || i0 < 10 ? (a7K = "Image w & h must be between 10 and 4096.", dS ? dS.showToast(a7K) : alert(a7K)) : (aX.sJ(), au.pX = au.yo(), au.a4g = 0, au.eT = g0, au.eU = i0, au.p9.width = au.eT, au.p9.height = au.eU,
			au.p5.drawImage(dC, 0, 0), a7K = au.p5.getImageData(0, 0, au.eT, au.eU), au.pA = a7K.data)
	}

	function a7L(dC) {
		dC.stopPropagation(), dC.preventDefault()
	}

	function a7M() {
		return 0 === x.sR() || 2 === x.sR()
	}
	this.ch = function() {
		(input = document.createElement("input")).type = "file", input.setAttribute("accept", ".json, .png, .jpg, .gif, .jpeg"), input.onchange = a7A
	}, this.a5H = function() {
		input.click()
	}, this.a7B = function(dC) {
		a7A(dC)
	}, this.a7D = function(a7E) {
		var e7 = a7E.name.split("."),
			a7F = e7[e7.length - 1].toLowerCase();
		"json" === a7F ? aX.a7H(a7E) : "gif" !== a7F && "jpg" !== a7F && "jpeg" !== a7F && "png" !== a7F || (au.ir.pW[au.yo()].name = e7[0], (a7F = new FileReader).onload = a7I, a7F.readAsDataURL(a7E))
	}, this.ry = function(dC) {
		a7M() && (a7L(dC), dC.dataTransfer.dropEffect = "copy")
	}, this.rz = function(dC) {
		a7M() && (a7L(dC), a7C(dC.dataTransfer.files))
	}
}

function cC() {
	this.a7N = null, this.ch = function() {
		this.a7N = 10 !== it ? null : new Uint32Array(ex)
	}, this.iF = function() {
		10 === it && this.a7O()
	}, this.a7O = function() {
		for (var f0, target, a1J, a7N = this.a7N, qR = iX, tC = ep, ds = iW - 1; 0 <= ds; ds--) f0 = qR[ds], h4 <= f0 || (target = Math.max(el(tC[f0], 4), 2048), a1J = Math.max(a7.a1K(f0), 100), a7N[f0] += el(a1J * target, 1e4), a7N[f0] >
			target && (a7N[f0] = target))
	}, this.tI = function(player, hc) {
		return hc > this.a7N[player] ? (hc = this.a7N[player], this.a7N[player] = 0) : this.a7N[player] -= hc, hc
	}
}

function cF() {
	function a7I(dC) {
		aX.iq = !0, aX.a7U(JSON.parse(dC.target.result)), aX.wy()
	}

	function a7a(db, min, max, a7j) {
		return "string" != typeof db || db.length < min ? a7j : db.length > max ? db.substring(0, max) : db
	}

	function a7V(dy, min, max) {
		return dy = "number" == typeof dy ? Math.floor(dy) : min, Math.min(Math.max(dy, min), max)
	}

	function a7Y(dy, a7l) {
		return "boolean" == typeof dy ? dy : a7l
	}

	function a7c(dy, et, max, a7m) {
		var ds, e7, ow;
		if (!Array.isArray(dy) || dy.length < 1) return null;
		for (e7 = new(8 === a7m ? Uint8Array : Uint16Array)(et), ow = dy.length, ds = 0; ds < et; ds++) e7[ds] = a7V(dy[ds % ow], 0, max);
		return e7
	}
	this.iq = !1, this.ir = null, this.sJ = function() {
		this.iq = !1, this.ir = null
	}, this.a5D = function() {
		this.ir.a6F && this.ir.a7P && (this.ir.a6F[0] = g8.vC[2].r6.a2v()), tj(this.ir.a7Q, 0, this.a7R(), this.ir.tm, !1, !1)
	}, this.a7R = function() {
		return [{
			name: this.ir.a7S ? a2.a5E() : this.ir.a7T[0],
			a5F: [0, 0, 0],
			a5G: 0
		}]
	}, this.a7H = function(a7E) {
		var a7G = new FileReader;
		a7G.onload = a7I, a7G.readAsText(a7E)
	}, this.a7U = function(ve) {
		this.ir = {}, this.ir.a59 = a7V(ve.numberPlayers, 1, 512), this.ir.a7W = a7V(ve.modeID, 0, 1), this.ir.pX = a7V(ve["gMap.mapID"], 0, au.a7X - 1), this.ir.a4k = a7V(ve.seedMap, 0, 16383), this.ir.a7Q = a7V(ve.seedSpawn, 0, 16383), this.ir
			.tp = a7Y(ve.selectableSpawn, !1), this.ir.a7S = a7Y(ve.selectableName, !1), this.ir.a7P = a7Y(ve.selectableColor, !1), au.ir.pW[au.yo()].name = this.ir.a7Z = a7a(ve.mapName, 1, 25, "Custom Map"), this.ir.n4 = function(dy) {
				var ds, et;
				if (!Array.isArray(dy) || dy.length < 1) return [];
				for (et = dy.length, ds = 0; ds < et; ds++) dy[ds] = a7a(dy[ds], 0, 100, "");
				return dy
			}(ve.description), this.ir.pe = a7c(ve.playerX, this.ir.a59, 4096, 16), this.ir.pp = a7c(ve.playerY, this.ir.a59, 4096, 16), this.ir.a7d = a7c(ve.playerTeam, this.ir.a59, 8, 8), this.ir.is = a7c(ve.playerStrength, this.ir.a59, 5, 8),
			this.ir.a6F = function(dy, et) {
				var ds, e7, ow;
				if (!Array.isArray(dy) || dy.length < 1) return null;
				for (e7 = new Array(et), ow = dy.length, ds = 0; ds < et; ds++) e7[ds] = a7c(dy[ds % ow], 3, 63, 8);
				return e7
			}(ve.playerColor, this.ir.a59), this.ir.a7T = function(dy, et) {
				var ds, e7, ow;
				if (!Array.isArray(dy) || dy.length < 1) return null;
				for (e7 = new Array(et), ow = dy.length, ds = 0; ds < et; ds++) e7[ds] = a7a(dy[ds % ow], 3, 26, "Bot");
				return e7
			}(ve.playerName, this.ir.a59), this.ir.a7g = "string" == typeof ve.mapBase64 ? ve.mapBase64 : "", this.ir.a7S = this.ir.a7S || !this.ir.a7T, this.ir.tm = 0 === this.ir.a7W ? 7 : 2 === this.ir.a7W ? 9 : 6, this.ir.pe = this.ir.pp ?
			this.ir.pe : null
	}, this.wy = function() {
		! function(db) {
			var gN, gK, a7i = "data:image/png;base64,";
			if (db.length <= a7i.length) return;
			aX.ir.pX = 0, aX.ir.a4k = 0, au.bg(0, 0), db.substring(0, a7i.length) !== a7i && (db = a7i + db);
			return (gN = new Image).onload = function() {
				au.eT = gN.width, au.eU = gN.height, 4096 < au.eT || 4096 < au.eU || au.eT < 10 || au.eU < 10 ? (au.bg(0, 0), alert("Image w & h must be between 10 and 4096.")) : (au.pX = au.yo(), au.a4g = 0, au.p9.width = au.eT, au.p9
					.height = au.eU, au.p5.drawImage(gN, 0, 0), gK = au.p5.getImageData(0, 0, au.eT, au.eU), au.pA = gK.data)
			}, gN.src = db, aX.ir.a7g = "", 1
		}(this.ir.a7g) && au.bg(this.ir.pX, this.ir.a4k)
	}, this.a7n = function() {
		for (var max = 0, et = this.ir.a59, ds = 0; ds < et; ds++) this.ir.a7d[ds] > max && (max = this.ir.a7d[ds]);
		return Math.max(0, max - 1)
	}
}

function bo() {
	var a7o, a7p, gH, hb, hc, id;

	function a7q(player) {
		return player < h4 ? a7o * player : a7o * h4 + a7p * (player - h4)
	}
	this.ch = function() {
		a7o = h4 < 16 ? 12 : 8, a7p = 4;
		var et = a7q(ex);
		gH = new Uint8Array(ex), hb = new Uint16Array(et), hc = new Uint32Array(et), id = new Uint16Array(et)
	}, this.n0 = function(xs, a7r) {
		var a7s = this.fX(xs, a7r);
		this.fW(xs, a7r, 0), a7s = ad.ff.mA(xs, a7s), xs === eo && (b4.er[13] -= a7s)
	}, this.oc = function(player) {
		gH[player] = 0
	}, this.a75 = function(player, a7r) {
		var ib, a7r = function(player, a7r) {
			var ds, ow = a7q(player);
			for (ds = gH[player] - 1; 0 <= ds; ds--)
				if (0 === id[ow + ds] && hb[ow + ds] === a7r) return ds;
			return gH[player]
		}(player, a7r);
		a7r !== gH[player] && (ib = hc[a7q(player) + a7r], this.es(player, a7r), this.hY(player, ib, ex))
	}, this.fj = function(player, a7r) {
		for (var ow = a7q(player), ds = gH[player] - 1; 0 <= ds; ds--)
			if (0 === id[ow + ds] && hb[ow + ds] === a7r) return !0;
		return !1
	}, this.fi = function(player) {
		return player < h4 ? gH[player] < a7o : gH[player] < a7p
	}, this.eY = function(player) {
		return gH[player]
	}, this.ee = function(player, ds) {
		return hb[a7q(player) + ds]
	}, this.eZ = function(player, ds) {
		return id[a7q(player) + ds]
	}, this.ju = function(player, a7u) {
		for (var ow = a7q(player), ds = gH[player] - 1; 0 <= ds; ds--)
			if (id[ow + ds] === a7u) return ds;
		return -1
	}, this.ef = function(player, ds) {
		return hc[a7q(player) + ds]
	}, this.fX = function(player, a7r) {
		for (var ow = a7q(player), ds = gH[player] - 1; 0 <= ds; ds--)
			if (0 === id[ow + ds] && hb[ow + ds] === a7r) return hc[ow + ds];
		return 0
	}, this.a74 = function(player) {
		for (var ow = a7q(player), dy = 0, ds = gH[player] - 1; 0 <= ds; ds--) dy += hc[ow + ds];
		return dy
	}, this.a7v = function(player) {
		for (var ow = a7q(player), dy = 0, ds = gH[player] - 1; 0 <= ds; ds--) 0 === id[ow + ds] && (dy += hc[ow + ds]);
		return dy
	}, this.a6r = function(player) {
		for (var ow = a7q(player), w1 = 0, ds = gH[player] - 1; 0 <= ds; ds--) 0 < id[ow + ds] && w1++;
		return w1
	}, this.fW = function(player, a7r, ib) {
		for (var ow = a7q(player), ds = gH[player] - 1; 0 <= ds; ds--) 0 === id[ow + ds] && hb[ow + ds] === a7r && (hc[ow + ds] = ib)
	}, this.fI = function(player, ds, ib) {
		hc[a7q(player) + ds] = ib
	}, this.hY = function(player, ib, a7r) {
		var ds, ow = a7q(player);
		for (a7r === eo && b4.er[player < h4 ? 6 : 5]++, ds = gH[player] - 1; 0 <= ds; ds--)
			if (0 === id[ow + ds] && hb[ow + ds] === a7r) return hc[ow + ds] += ib, void(hc[ow + ds] = hc[ow + ds] > tE ? tE : hc[ow + ds]);
		hb[ow + gH[player]] = a7r, hc[ow + gH[player]] = ib, id[ow + gH[player]] = 0, gH[player]++, player < h4 && (a7r === eo ? k.r2(player, 5) : player === eo && a8.vl(a7r))
	}, this.a7w = function(player, ib, a7u) {
		var ow = a7q(player);
		h5[player] = 2, hb[ow + gH[player]] = 0, hc[ow + gH[player]] = ib, id[ow + gH[player]] = a7u, gH[player]++
	}, this.es = function(player, fu) {
		var hi, ow;
		if (0 !== gH[player])
			for (ow = a7q(player), gH[player]--, hi = fu; hi < gH[player]; hi++) hb[ow + hi] = hb[ow + hi + 1], hc[ow + hi] = hc[ow + hi + 1], id[ow + hi] = id[ow + hi + 1]
	}, this.a70 = function(player) {
		for (var hi, ow, a6z = [], ds = iW - 1; 0 <= ds; ds--)
			for (ow = a7q(iX[ds]), hi = gH[iX[ds]] - 1; 0 <= hi; hi--)
				if (0 === id[ow + hi] && hb[ow + hi] === player) {
					a6z.push(iX[ds]);
					break
				} return a6z
	}
}

function bp() {
	var a7x, a7y, a7z, a80, a81, a82;
	this.ch = function() {
		a7z = a7x = 10, a80 = a7y = 10
	}, this.d0 = function() {
		a82 = 512, a81 = new Uint16Array(a82);
		for (var ds = 0; ds < a82; ds++) a81[ds] = 100 + fa(el(25600 * ds, a82 - 4), 9)
	}, this.a04 = function() {
		return a80
	}, this.iF = function() {
		if (--a7z <= 0 && (a7z = a7x, function() {
				var ds, a87, dU = ep[eo];
				for (iv && !hV && 0 !== h5[0] && 0 === a1.iw[0].f2 && (ep[0] += el(fJ[0], 6)), ds = iW - 1; 0 <= ds; ds--) a87 = el(a7.a1K(iX[ds]) * ep[iX[ds]], 1e4), ep[iX[ds]] += a87 < 1 ? 1 : a87, a7.eq(iX[ds]);
				b4.er[9] += ep[eo] - dU
			}(), --a80 <= 0)) {
			a80 = a7y;
			for (var dU = ep[eo], ds = iW - 1; 0 <= ds; ds--) ep[iX[ds]] += fJ[iX[ds]], a7.eq(iX[ds]);
			b4.er[8] += ep[eo] - dU
		}
	}, this.a1K = function(player) {
		var gQ = a81[el((a82 - 1) * fJ[player], te)],
			a86 = (b7.iT() < 1920 && (gQ = gQ < (a86 = el(100 * (13440 - 6 * b7.iT()), 1920)) ? a86 : gQ), this.iI(player));
		return ep[player] > a86 && (gQ -= el(2 * gQ * (ep[player] - a86), a86)), gQ < 0 ? 0 : 700 < gQ ? 700 : gQ
	}, this.iI = function(player) {
		player = 100 * fJ[player];
		return tf < player ? tf : player
	}, this.eq = function(player) {
		var dy = fJ[player] * tD;
		ep[player] = Math.min(Math.min(ep[player], tE), dy)
	}, this.lk = function(player, ll) {
		ad.ff.mA(ll, aq.e1[0]), b4.mB(player, ll), a8.a89(player, aq.e1[0] + aq.e1[1]), a8.mC(ll, aq.e1[0]), ad.ff.mp(player)
	}
}

function bq() {
	var a8A, a8B, a8C, a8D, a8E, a8F, a8G, a8H, a8I, a8J, a8K, a8L, a8M, a8N, a8O, a8P, a8Q, a8R, a8T, a8U, a8V, a8W, a8X, a8d, a8e, a8S = null,
		a8Z = 0,
		a8a = new Float32Array(4),
		a8b = 0,
		a8c = !0;

	function a8g() {
		a8S.width = jp, a8S.height = g7, (a8T = a8S.getContext("2d", {
			alpha: !0
		})).textAlign = gD, a8T.textBaseline = gC, a8T.imageSmoothingEnabled = !0
	}

	function a8h() {
		var ds, a8l;
		for (gB.font = fv + Math.floor(100 * a8K) + fw, a8l = 80 / Math.floor(gB.measureText(ad.jx.jy(tE)).width), gB.font = fv + 100 + fw, ds = ex - 1; 0 <= ds; ds--) a8H[ds] = 100 / Math.floor(gB.measureText(jz[ds]).width), a8G[ds] = Math.min(a8l,
			a8H[ds])
	}

	function a8m(ds) {
		return !aR.jv.jw || ep[ds] < 1e6 ? 1 : ep[ds] < 1e7 ? a8a[0] : a8a[Math.min(Math.floor(Math.log10(ep[ds])) - 6, 3)]
	}

	function a8k(gO) {
		a8R = !1, a8Q = 1, a8O = a8P = 0, a8c ? (gO.textAlign = gD, gO.textBaseline = gC) : gO.clearRect(0, 0, jp, g7);
		var jj, jk, ds, fontSize, jl, jm = hA / hB,
			jn = hC / hB,
			jo = (jp + hA) / hB,
			jq = (g7 + hC) / hB,
			a8q = 0 !== h5[eo] && a4.uX(eo);
		gO.imageSmoothingEnabled = !0;
		for (var hi = iW - 1; 0 <= hi; hi--) ds = iX[hi], (fontSize = a8N * hB * a8m(ds) * a8G[ds] * a8E[ds]) < a8M || a8I <= fontSize || a8C[ds] + a8E[ds] > jm && a8C[ds] < jo && a8D[ds] + a8F[ds] > jn && a8D[ds] < jq && (jj = jp * (a8C[ds] + a8E[
			ds] / 2 - jm) / (jo - jm), jk = g7 * (a8D[ds] + a8F[ds] / 2 - jn) / (jq - jn) - .1 * fontSize, gO.font = x6[h6[ds]] + fontSize + fw, gO.fillStyle = function(fontSize, ds) {
			if (a8J <= fontSize && fontSize < a8I) return b8.a93[a4.yO[ds]] + a8z(fontSize).toFixed(3) + ")";
			return b8.a94[a4.yO[ds]]
		}(fontSize, ds), aR.jv.jw ? gO.fillText(ad.jx.jy(ep[ds]), jj, jk) : a8s(ds, fontSize, jj, jk, gO), a8R = !0, 0 < a8V[ds] ? function(jj, jk, fontSize, ds, gO) {
			0 === a05[ds] ? b3.x0(a8U[ds]) ? (function(jj, jk, fontSize, player, lz, gO) {
				for (var uw = .9 * fontSize / b3.g0, pi = jk - .5 * uw * b3.g0 - .05 * fontSize, gM = (gO.globalAlpha = a8z(fontSize), a8m(player) * (aR.jv.jw ? a8b : a8H[player])), ph = jj - .5 * fontSize / gM - .4 * fontSize - uw *
						b3.g0, hs = 0; hs < 2; hs++) gO.setTransform(uw, 0, 0, uw, ph, pi), gO.drawImage(b3.uF[lz], 0, 0), ph = jj + .5 * fontSize / gM + .4 * fontSize;
				gO.globalAlpha = 1, gO.setTransform(1, 0, 0, 1, 0, 0)
			}(jj, jk, fontSize, ds, a8U[ds], gO), a8u(jj, jk, fontSize, 0, 0, gO)) : b3.wz(a8U[ds]) ? (a92(jj, jk, fontSize, a8U[ds], 0, gO), a8u(jj, jk, fontSize, 0, 1, gO)) : (a92(jj, jk, fontSize, a8U[ds], 1, gO), a8u(jj, jk, fontSize,
				1, 0, gO)) : a92(jj, jk, fontSize, a8U[ds], 0, gO)
		}(jj, jk, fontSize, ds, gO) : 0 === a05[ds] && a8u(jj, jk, fontSize, 0, 0, gO), a8q && (0 < a8V[ds + ex] || 0 < a8V[ds + 2 * ex] || 0 < a8V[ds + 3 * ex] || 0 < a8V[ds + 4 * ex]) && function(jj, jk, fontSize, ds, gO) {
			var iU, w1 = -1;
			for (iU = 4; 1 <= iU; iU--) 0 < a8V[ds + iU * ex] && w1++;
			for (iU = 1; iU < 5; iU++) 0 < a8V[ds + iU * ex] && (! function(jj, jk, fontSize, iU, ds, a8x, dU, gO) {
				var uw = .8 * fontSize / b3.g0,
					jj = jj - .5 * uw * b3.g0 - .534 * a8x * fontSize,
					a8x = jk + 1.4 * uw * b3.g0;
				gO.setTransform(uw, 0, 0, uw, jj, a8x), gO.globalAlpha = a8z(fontSize), jk = 1 === iU ? b3.uF[a8U[ds + ex]] : 2 === iU ? i.uB()[4].gN[dU < 255 ? 1 : 0] : (3 === iU ? i.uB()[5] : i.uB()[6]).gN[0];
				gO.drawImage(jk, 0, 0), gO.globalAlpha = 1, gO.setTransform(1, 0, 0, 1, 0, 0)
			}(jj, jk, fontSize, iU, ds, w1, a8V[ds + iU * ex], gO), w1 -= 2)
		}(jj, jk, fontSize, ds, gO), (jl = a8K * fontSize) < a8M || (gO.font = fv + jl + fw, aR.jv.jw ? a8s(ds, jl, jj, jk + .78 * fontSize, gO) : gO.fillText(ad.jx.jy(ep[ds]), jj, jk + .78 * fontSize)));
		gO.imageSmoothingEnabled = !1
	}

	function a8s(ds, fontSize, jh, ji, gO) {
		gO.fillText(jz[ds], jh, ji), ds < h4 && 2 !== h6[ds] || (ds = fontSize / a8H[ds], gO.fillRect(jh - .5 * ds, ji + ad.kj.sy * fontSize, ds, Math.max(1, .1 * fontSize)))
	}

	function a8u(jj, jk, fontSize, a8x, a8y, gO) {
		var uw = .95 * fontSize / a8X,
			jj = jj - .5 * uw * a8W + .8 * a8x * fontSize,
			a8x = jk - 1.76 * uw * a8X - .82 * a8y * fontSize;
		gO.setTransform(uw, 0, 0, uw, jj, a8x), gO.globalAlpha = a8z(fontSize), gO.drawImage(a3.get(4), 0, 0), gO.globalAlpha = 1, gO.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a92(jj, jk, fontSize, lz, a8x, gO) {
		var uw = 1.2 * fontSize / b3.g0,
			jj = jj - .5 * uw * b3.g0 - .8 * a8x * fontSize,
			a8x = jk - 1.5 * uw * b3.g0;
		gO.setTransform(uw, 0, 0, uw, jj, a8x), gO.globalAlpha = a8z(fontSize), gO.drawImage(b3.uF[lz], 0, 0), gO.globalAlpha = 1, gO.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a8z(fontSize) {
		return a8J <= fontSize && fontSize < a8I ? 1 - (fontSize - a8J) / (a8I - a8J) : 1
	}

	function a9D(gM, g0) {
		return 1 + Math.floor(a8L * gM * g0)
	}

	function a9A(ds) {
		for (var left = a8C[ds], hi = a8C[ds] - i4[ds] - 1; 0 <= hi; hi--)
			if (!a9F(ds, --left, a8D[ds], a8F[ds])) {
				left++;
				break
			} var right = a8C[ds];
		for (hi = i3[ds] - a8C[ds] - a8E[ds]; 0 <= hi; hi--)
			if (!a9F(ds, ++right + a8E[ds] - 1, a8D[ds], a8F[ds])) {
				right--;
				break
			} var jh = Math.floor((left + right) / 2),
			top = a8D[ds];
		for (hi = a8D[ds] - i7[ds] - 1; 0 <= hi; hi--)
			if (!a9G(ds, jh, --top, a8E[ds])) {
				top++;
				break
			} var bottom = a8D[ds];
		for (hi = i6[ds] - a8D[ds] - a8F[ds]; 0 <= hi; hi--)
			if (!a9G(ds, jh, ++bottom + a8F[ds] - 1, a8E[ds])) {
				bottom--;
				break
			} var ji = Math.floor((top + bottom) / 2);
		a97(ds, jh, ji, a8E[ds], a8F[ds]) && (a8C[ds] = jh, a8D[ds] = ji)
	}

	function a97(player, jh, ji, g0, i0) {
		f2 = Math.floor(.2 * g0);
		for (var f2, iU = jh + g0 - 1; jh <= iU; iU--)
			if (!a9F(player, iU, ji, i0)) return;
		for (iU = ji + i0 - 1 - (f2 = (f2 = Math.floor(.25 * i0)) < 1 ? 1 : f2); ji + f2 <= iU; iU--)
			if (!a9G(player, jh, iU, g0)) return;
		return 1
	}

	function a9F(player, jh, ji, i0) {
		return a4.qA(player, 4 * (ji * au.eT + jh)) && a4.qA(player, 4 * ((ji + i0 - 1) * au.eT + jh))
	}

	function a9G(player, jh, ji, g0) {
		return a4.qA(player, 4 * (ji * au.eT + jh)) && a4.qA(player, 4 * (ji * au.eT + jh + g0 - 1))
	}
	this.ch = function() {
		if (a8R = !1, a8N = .88, a8K = .5, a8L = 1.8, a8I = Math.floor(.5 * xB), a8J = Math.floor(.2 * a8I), a8M = aR.jv.a8f < 4 ? 1 + aR.jv.a8f : 2 * (aR.jv.a8f - 1), a8B = a8A = 0, a8C = new Uint16Array(ex), a8D = new Uint16Array(ex), a8E =
			new Uint16Array(ex), a8F = new Uint16Array(ex), a8G = new Float32Array(ex), a8H = new Float32Array(ex), a8U = new Uint8Array(2 * ex), a8V = new Uint8Array(5 * ex), a8d = new Uint8Array(ex), a8e = new Uint8Array(ex), a8c || (a8S =
				a8S || document.createElement("canvas"), a8g()), a8P = a8O = 0, a8Q = 1, aR.jv.jw) {
			var ds, a8l;
			for (a8h(), gB.font = fv + Math.floor(100) + fw, a8l = 100 / Math.floor(gB.measureText("900 000").width), ds = ex - 1; 0 <= ds; ds--) a8G[ds] = Math.min(a8l, 2 * a8H[ds]);
			a8b = a8l, a8a[0] = 100 / (a8l * Math.floor(gB.measureText("5 000 000").width)), a8a[1] = 100 / (a8l * Math.floor(gB.measureText("50 000 000").width)), a8a[2] = 100 / (a8l * Math.floor(gB.measureText("500 000 000").width)), a8a[3] =
				100 / (a8l * Math.floor(gB.measureText("1 000 000 000").width))
		} else a8h();
		! function() {
			var ds;
			for (ds = ex - 1; 0 <= ds; ds--) fJ[ds] < 12 ? (a8C[ds] = i4[ds] + 1, a8D[ds] = i7[ds] + 1, a8E[ds] = 1, a8F[ds] = 1) : (a8C[ds] = i4[ds], a8D[ds] = i7[ds] + 1, a8E[ds] = 4, a8F[ds] = 2);
			if (kK)
				for (ds = 0; ds < h4; ds++) a8E[ds] = 0;
			a8W = a3.get(4).width, a8X = a3.get(4).height
		}()
	}, this.a89 = function(f0, w4) {
		w4 > 18 * fJ[f0] ? (a8e[f0] = 6, a4.yO[f0] = 2 + a4.yO[f0] % 2) : (a8d[f0] = 4, (a4.yO[f0] < 2 || 3 < a4.yO[f0]) && (a4.yO[f0] = 6 + a4.yO[f0] % 2))
	}, this.mC = function(f0, w4) {
		w4 > 6 * fJ[f0] ? (a8e[f0] = 6, a4.yO[f0] = 4 + a4.yO[f0] % 2) : (a8d[f0] = 4, (a4.yO[f0] < 4 || 5 < a4.yO[f0]) && (a4.yO[f0] = 8 + a4.yO[f0] % 2))
	}, this.resize = function() {
		a8c || (a8g(), a8k(a8T))
	}, this.ta = function() {
		for (var ds = 0; ds < h4; ds++) i3[ds] - i4[ds] != 3 || i6[ds] - i7[ds] != 3 ? (a8C[ds] = i4[ds] + (i3[ds] !== i4[ds] ? 1 : 0), a8D[ds] = i7[ds], a8E[ds] = 1, a8F[ds] = 1) : (a8C[ds] = i4[ds], a8D[ds] = i7[ds] + 1, a8E[ds] = 4, a8F[ds] =
			2)
	}, this.n1 = function(player, fu, a8n) {
		player += fu * ex;
		if (0 === fu) return a8U[player] === a8n && 0 < a8V[player] ? void(a8V[player] = 0) : (a8U[player] = a8n, void(a8V[player] = b3.x0(a8n) ? 255 : 64));
		1 === fu ? (a8V[player] = 64, a8U[player] = a8n) : a8V[player] = a8n
	}, this.gA = function() {
		a8c ? a8k(gB) : a8R && (1 !== a8Q ? (gB.imageSmoothingEnabled = !0, gB.setTransform(a8Q, 0, 0, a8Q, 0, 0), gB.drawImage(a8S, -a8O / a8Q, -a8P / a8Q), gB.setTransform(1, 0, 0, 1, 0, 0)) : (gB.imageSmoothingEnabled = !1, gB.drawImage(a8S, -
			a8O, -a8P)))
	}, this.zG = function(gw, gz) {
		a8O += gw, a8P += gz
	}, this.rq = function(gw, gz) {
		a8.zG(gw, gz)
	}, this.zoom = function(fq, g4, g5) {
		a8Q *= fq, a8O = (a8O + g4) * fq - g4, a8P = (a8P + g5) * fq - g5
	}, this.jD = function(wD) {
		return !a8c && (wD ? ++a8Z % aR.a0b[aR.jv.a8o] == 0 : b7.iT() % aR.a0b[aR.jv.a8o] == 0) && (a8Z = 0, a8k(a8T), !0)
	}, this.js = function(ds) {
		return a8m(ds) * a8G[ds]
	}, this.a8p = function(player) {
		return a8G[player]
	}, this.iF = function() {
		4 <= ++a8B && ! function() {
			var ds, hi, hs;
			for (a8B = 0, hs = 4; 1 <= hs; hs--)
				for (hi = iW - 1; 0 <= hi; hi--) ds = iX[hi] + hs * ex, 0 < a8V[ds] && a8V[ds] < 255 && a8V[ds]--;
			if (2 !== jE)
				for (hi = iW - 1; 0 <= hi; hi--) ds = iX[hi], 0 < a8V[ds] && a8V[ds] < 255 && a8V[ds]--
		}();
		for (var et = Math.floor(.1 * iW), ds = a8A + (et = iW < (et = et < 8 ? 8 : et) ? iW : et) - 1; a8A <= ds; ds--) ! function(ds) {
			var gM = a8m(ds) * a8G[ds];
			0 < a8E[ds] && a97(ds, a8C[ds], a8D[ds], a8E[ds], a8F[ds]) ? ! function(ds) {
				for (var jh, ji, g0, i0, gp = !1, hs = 0; hs < 8; hs++) {
					if (g0 = a8E[ds] + 2, i0 = a8F[ds] + 2, g0 > i3[ds] - i4[ds] + 1 || i0 > i6[ds] - i7[ds] + 1) return gp;
					if (jh = a8C[ds] - 1, ji = a8D[ds] - 1, !a97(ds, jh, ji, g0, i0)) return gp;
					a8C[ds] = jh, a8D[ds] = ji, a8E[ds] = g0, a8F[ds] = i0, gp = !0
				}
				return gp
			}(ds) && function(ds, gM) {
				for (var jh, ji, g0, i0, gp = !1, a2O = a8E[ds], kV = 1 + Math.floor(.02 * a2O), hs = 1; hs < 5; hs++) {
					if ((g0 = a2O + hs * kV) > i3[ds] - i4[ds] + 1) return gp;
					if ((i0 = a9D(gM, g0)) > i6[ds] - i7[ds] + 1) return gp;
					jh = i4[ds] + Math.floor(Math.random() * (i3[ds] - i4[ds] + 2 - g0)), ji = i7[ds] + Math.floor(Math.random() * (i6[ds] - i7[ds] + 2 - i0)), a97(ds, jh, ji, g0, i0) && (a8C[ds] = jh, a8D[ds] = ji, a8E[ds] = g0, a8F[
						ds] = i0, gp = !0)
				}
				return gp
			}(ds, gM) && a9A(ds) : ! function(ds, gM) {
				var i0, jh = a8C[ds] + 1,
					ji = a8D[ds] + 1,
					g0 = a8E[ds] - 2;
				for (;;) {
					if (g0 < 1) {
						a8E[ds] = 0;
						break
					}
					if (i0 = a9D(gM, g0), a97(ds, jh, ji, g0, i0)) return a8C[ds] = jh, a8D[ds] = ji, a8E[ds] = g0, a8F[ds] = i0, 1;
					jh++, ji++, g0 -= 2
				}
				return
			}(ds, gM) ? function(ds, gM) {
				var jh, ji, g0, i0, hs, ka, hk = i3[ds] - i4[ds] + 1,
					a9E = Math.floor(.02 * hk);
				for (ka = -6 * (a9E = a9E < 1 ? 1 : a9E), hs = hk; ka <= hs; hs -= a9E)
					if (i0 = a9D(gM, g0 = 0 < hs ? hs : 1), jh = i4[ds] + Math.floor(Math.random() * (i3[ds] - i4[ds] + 2 - g0)), ji = i7[ds] + Math.floor(Math.random() * (i6[ds] - i7[ds] + 2 - i0)), a97(ds, jh, ji, g0, i0)) return a8C[
						ds] = jh, a8D[ds] = ji, a8E[ds] = g0, a8F[ds] = i0
			}(ds, gM) : a9A(ds)
		}(iX[ds % iW]);
		a8A = (a8A + et) % iW
	}, this.j9 = function() {
		var ds, f0, ga, gb;
		if (b7.iT() % 4 == 1)
			for (ds = iW - 1; 0 <= ds; ds--) f0 = iX[ds], a4.yO[f0] < 2 || ((ga = Math.max(a8d[f0] - 1, 0)) === (gb = Math.max(a8e[f0] - 1, 0)) ? 0 === ga && (a4.yO[f0] %= 2) : 0 === gb && a4.yO[f0] < 6 && (a4.yO[f0] += 4), a8d[f0] = ga, a8e[
				f0] = gb)
	}, this.vl = function(player) {
		var ds = player + 2 * ex,
			dU = a8V[ds];
		return 0 < dU && (k.r1(50, player), a8V[ds] = 0, 255 === dU)
	}, this.ud = function(player) {
		return 255 === a8V[player + 2 * ex]
	}
}

function br() {
	var fr, a9H;
	this.ch = function() {
		fr = "Abbasid Caliphate;Aceh s;Achaemenid Z;Afsharid z;Aghlabid Emirate;Ahom z;Akkadian Z;Aksumite Z;Akwamu;Alaouite z;Almohad Caliphate;Almoravid z;Angevin Z;Aq Qoyunlu;Armenian Z;Assyria;Ashanti Z;Austrian Z;Austria-Hungary;Ayyubid z;Aztec Z;Aulikara Z;Babylonian Z;Balhae;Banten s;S Banjar;Bamana Z;Bengal s;Benin Z;Kadamba z;Bornu Z;E Brazil;Britannic Z;British Z;British Raj;Bruneian Z;Bukhara Z;Burgundian State;Buyid z;Byzantine Z;Caliphate of Córdoba;Cao Wei;Carthaginian Z;Cebu Rajahnate;Chagatai Khanate;Chalukya z;Chauhan z;Chavín Z;Chenla;Chera z;Chola z;Comanche Z;Congo Free State;Crimean Khanate;Dacian Z;Delhi s;Demak s;Durrani Z;Dutch Z;Egyptian Z;Elamite Z;Exarchate of Africa;Abyssinia;Fatimid Caliphate;First French Z;Frankish Z;Funan;Gallic Z;Gaza Z;Republic of Genoa;German Z;Ghana Z;Ghaznavid z;Ghurid z;Goguryeo;Goryeo;Gorkha Z;Göktürk Khaganate;Golden Horde;S Gowa;Seljuq Z;Gupta Z;Hafsid Y;Han z;Hanseatic League;E Harsha;Hephthalite Z;Hittite Z;Holy Roman Z;Hotak z;Hoysala Z;Hunnic Z;Husainid z;Idrisid z;Ilkhanate;K Israel;K Judah;Inca Z;Italian Z;E Japan;Jin z;Johor Z;Jolof Z;Joseon;Kaabu Z;Kachari Y;Kalmar Union;Kanem Z;Kanva z;Kara-Khanid Khanate;Kazakh Khanate;Khazar Khaganate;Khmer Z;Khilji z;Khwarazmian z;Kievan Rus';Konbaung z;Kong Z;Korean Z;Kushan Z;K Kush;Lakota;Latin Z;Later Lê z;Liao z;Lodi s;Khmer Z;Macedonian Z;Majapahit Z;Mali Z;Malacca Z;Mamluk s;Manchukuo;Maratha Z;Marinid z;Massina Z;Mataram s;Mauretania;Mauryan Z;Median Z;Mlechchha z;Ming z;Mitanni Z;Mongol Z;Mughal Z;Nanda Z;Nguyễn z;North Sea Z;E Nicaea;Numidia;Omani Z;Ottoman Z;Oyo Z;Pagan Z;Pahlavi z;Pala Z;Palmyrene Z;Parthian Z;Pontic Z;Portuguese Z;K Prussia;Ptolemaic Z;Qajar z;Qara Qoyunlu;Qin z;Qing z;Ramnad Sethupathis;Rashidun Caliphate;Rashtrakuta z;Roman Z;Rouran Khaganate;Rozwi Z;Rustamid z;Russian Z;Tsardom of Russia;Saadi z;Safavid z;Saffarid z;Sassanid z;Satavahana z;Samanid Z;Soviet Union;Saudeleur z;Duchy of Savoy;Seleucid Z;Serbian Z;Shu Han;Shang z;Siam Z;Sikh Z;Singhasari;Sokoto Caliphate;Song z;Songhai Z;Spanish Z;Srivijaya Z;Sui z;K Mysore;Shunga Z;S Sulu;Sumer;Sur Z;Swedish Z;Tahirid z;Tang z;Tây Sơn z;S Ternate;E Thessalonica;German Reich;Tibetan Z;Tondo z;S Tidore;Timurid Z;K Tlemcen;E Trebizond;Toltec Z;Toungoo z;Toucouleur Z;Tu'i Tonga Z;Turgesh Khaganate;Umayyad Caliphate;Uyunid Emirate;Uyghur Khaganate;Uzbek Khanate;Vandal Y;Vijayanagara Z;Republic of Venice;Wari Z;Wassoulou Z;Wattasids;Western Roman Z;Eastern Wu;Western Xia z;Xin z;Yuan z;Zand z;Zhou z;Zulu Z;Yugoslavia;Kosovo;Sikkim;Kanem–Bornu Z;Wadai Z;Ethiopian Z;Rozvi Z;Sasanian Z;E Vietnam;Shilluk Y;K Aksum;Gwiriko Y;Toro Y;Malindi Y;K Loango;K Mapungubwe;Ryukyu Y;K Cyprus;K Jerusalem;Garhwal Y;K Nepal;K Cambodia;Champa Y;Hanthawaddy Y;Phayao Y;K Sardinia;K Sicily;K Gwynedd;K Scotland;K Desmond;K Poland;K Hungary;K Croatia;K Bohemia;Albanian Y;K Georgia;K Portugal;Khanate of Sibir;K Romania;Cossack Hetmanate;Duchy of Bouillon;K Ireland;Lordship of Ireland;K Italy;Republic of Pisa;Idrisid z;Almoravid z;Almohad Caliphate;Marinid z;Wattasid z;Saadian z;Republic of Salé;Rif Republic;K Kush;Makuria;Alodia;Ayyubid z;Mamluk s;Egypt Eyalet;K Fazughli;S Sennar;S Darfur;Mahdist State;S Egypt;K Egypt;Emirate of Cyrenaica;K Libya;Republic of Egypt;Republic of the Sudan;United Arab Republic;Libyan Arab Republic;Zirid z;Hafsid z;K Kuku;Regency of Algiers;Gurunsi;Liptako;Tenkodogo;Wogodogo;Yatenga;Bilanga;Bilayanga;Bongandini;Con;Macakoali;Piela;Nungu;K Sine;K Saloum;K Baol;K Cayor;K Waalo;Bundu;Bonoman;Gyaaman;Denkyira;Mankessim Y;K Dahomey;Oyo Z;K Nri;Aro Confederacy;Kwararafa;Biafra;Buganda;Bunyoro;Ankole;Busoga;Tanganyika;Kuba Y;K Luba;K Lunda;Yeke Y;K Ndongo;Kasanje Y;K Matamba;Mbunda Y;Chokwe Y;Kazembe Y;K Butua;Ndebele Y;Mthethwa Z;Bophuthatswana;Ciskei;Transkei;Venda;Rhodesia;Kart z;Nogai Horde;Khanate of Bukhara;Khanate of Khiva;Khamag Mongol;Northern Fujiwara;Kamakura Shogunate;Ashikaga Shogunate;Jaxa;Republic of Ezo;Jiangxi Soviet;Hunan Soviet;Guangzhou Commune;Gojoseon;Alaiye;Beylik of Bafra;Kara Koyunlu;Kars Republic;K Iraq;Arab Federation;Kar-Kiya z;Baduspanids;Marashiyan z;Afrasiyab z;Mihrabanid z;Safavid Iran;Sheikhdom of Kuwait;Bani Khalid Emirate;Emirate of Diriyah;Emirate of Najd;Muscat and Oman;Emirate of Riyadh;S Najd;K Hejaz;Fadhli s;Emirate of Beihan;Emirate of Dhala;S Lahej;Republic of Kuwait;K Cochin;Jaffna Y;Laur Y;Pandya z;Jaunpur s;Jaintia Y;Hyderabad State;Travancore;Udaipur State;Manikya z;Lan Xang;K Vientiane;K Champasak;Lao Issara;K Laos;Pyu States;Ava;Mon Ys;Pegu;K Mrauk U;Taungoo z;Shan States;Arakan;Raktamaritika;Singhanavati;Dvaravati;Ngoenyang;Hariphunchai;Tambralinga;Lavo Y;Langkasuka;Sukhothai Y;S Singora;Ayutthaya Y;Thonburi Y;Lan Na;Pattani Y;Jambi s;Palembang s;S Deli;S Langkat;S Serdang;S Cirebon;K Pajang;K Bali;Bima s;K Larantuka;K Banggai;Luwu;S Bone;Caucasian Albania;Kabardia;Circassia;K Abkhazia;Elisu s;Avar Khanate;Caucasian Imamate;K Imereti;K Kartli;K Kakheti;Crown of Aragon;Emirate of Granada;K Majorca;Crown of Castile;K Haiti;Cocollán;Zapotec Civilization;Mosquito Y;Somoza Regime;Iroquois Confederacy;Cherokee Nation;Vermont Republic;State of Muskogee;K Alo;K Sigave;K Fiji;K Nauru;K Chile;Muisca Confederation;El Stronato;K Chimor;Jungle Republic;Liga Federal;Supreme Junta;Weimar Republic;K Bavaria;Bremen;Frankfurt;Hamburg;K Hanover;Holstein;Lippe;Nassau;Oldenburg;Pomerania;Reuss;Saxe-Altenburg;Saxony;Schleswig;Waldeck;Württemberg;Helvetic Republic;Republic of Florence;Duchy of Urbino;Republic of Cospaia;Duchy of Lucca;Duchy of Mantua;Duchy of Milan;Papal States"
			.split(";");
		var ds, hi, a9I = ["K ", " Y", "E ", " Z", " z", " s", "S "],
			a9J = ["Kingdom of ", " Kingdom", "Empire of ", " Empire", " Dynasty", " Sultanate", "Sultanate of "];
		for (a9H =
			"Pestilent Dominion;Wretched Realm;Damned Province;Corrupt Zone;Cursed Territory;Blight Nation;Haunted Expanse;Malevolent State;Ruined Empire;Contaminated Land;Epidemic Domain;Forsaken District;Abandoned Wasteland;Necrotic Enclave;Tainted Domain;Decayed Principality;Infested Region;Malignant Territory;Toxic Dominion;Ravaged Sector;Ghostly Realm;Plagued Commonwealth;Afflicted State;Desolate Nation;Apocalyptic Zone;Radiated Province;Deathly District;Pestilence Haven;Doom Territory;Malefic Expanse;Abandoned State;Cursed Haven;Corroded Zone;Hauntland;Noxious Nation;Infected Enclave;Ruinous Domain;Wasteland Woe;Rotten Principality;Voided Land;Vile Dominion;Catastrophic Region;Eerie Expanse;Desolation State;Forsaken Outpost;Contagion District;Damaged Province;Abhorrent Sector;Accursed Nation;Doomstruck Land;Radiant Ruin;Deathly Enclave;Malefic Dominion;Plague District;Infected Haven;Corrupt State;Pestilent Territory;Razed Realm;Haunted Wasteland;Toxic Sector;Cursed Dominion;Decaying Province;Forsaken Enclave;Ruinous Region;Malignant Haven;Infested State;Ghostly Nation;Tainted Territory;Damned District;Radiated Dominion;Desolate Expanse;Apocalyptic Land;Death Zone;Wretched State;Malevolent Haven;Plagued Nation;Noxious Domain;Voided Territory;Eerie Sector;Accursed Province;Necrotic District;Doom Haven;Haunt Realm;Rotten Nation;Forsaken Territory;Infected State;Abhorrent Expanse;Malignant Land;Toxic Dominion;Ruined District;Ghostland;Cursed Sector;Radiant Nation"
			.split(";"), ds = fr.length - 1; 0 <= ds; ds--)
			for (hi = a9I.length - 1; 0 <= hi; hi--) fr[ds] = fr[ds].replace(a9I[hi], a9J[hi]);
		if (settings.realisticNames) fr = realisticNames;
	}, this.bg = function() {
		var ds;
		if (aX.iq && aX.ir.a7T)
			for (ds = h4; ds < ex; ds++) jz[ds] = aX.ir.a7T[ds % pj];
		else(9 === it ? function() {
			var ds, gQ = aF.random(),
				et = fr.length,
				ow = h4 + aA.a9P;
			for (ds = ow - 1; h4 <= ds; ds--) jz[ds] = fr[(ds + gQ) % et];
			for (et = a9H.length, ds = ow; ds < ex; ds++) jz[ds] = a9H[ds % et]
		} : iv ? function() {
			var ds, gQ = aF.random();
			for (ds = h4; ds < ex; ds++) jz[ds] = fr[(ds + gQ) % ex]
		} : function() {
			var ds, et = fr.length,
				gQ = aF.random();
			for (ds = h4; ds < ex; ds++) jz[ds] = fr[(ds + gQ) % et]
		})()
	}, this.tv = function() {
		var ds, et, ow, gQ;
		if (!iv) {
			for (wI = new Array(h4), et = h4, ds = 0; ds < et; ds++) wI[ds] = jz[ds];
			if (aR.jv.wH) {
				for (ow = fr.length, gQ = aF.a9O(), ds = 0; ds < et; ds++) jz[ds] = fr[(ds + gQ) % ow];
				jz[eo] = wI[eo]
			}
		}
	}
}

function cD() {
	this.a9Q = [], this.a9R = [], this.ch = function() {
		this.a9Q = [], this.a9R = []
	}, this.iF = function() {
		0 <= this.a9Q.length && this.a9S(this.a9Q), 0 <= this.a9R.length && this.a9S(this.a9R)
	}, this.a9S = function(e7) {
		for (var hs = -1, ds = e7.length - 1; 0 <= ds; ds--)
			if (e7[ds].dT--, e7[ds].dT <= 0) {
				hs = ds;
				break
			} for (ds = hs; 0 <= ds; ds--) e7.shift()
	}, this.uP = function(id, qR, a9T) {
		return this.a9U(this.a9Q, id, qR, a9T)
	}, this.a9V = function(id, qR, a9T) {
		return this.a9U(this.a9R, id, qR, a9T)
	}, this.a9U = function(e7, id, qR, a9T) {
		return ! function(e7, id, qR) {
			var ds, pQ;
			for (ds = qR.length - 1; 0 <= ds; ds--)
				for (pQ = e7.length - 1; 0 <= pQ; pQ--)
					if (e7[pQ].player === qR[ds] && id === e7[pQ].id) return 1;
			return
		}(e7, id, qR) && (a9T && function(e7, id, qR) {
			var ds;
			for (ds = qR.length - 1; 0 <= ds; ds--) e7.push({
				player: qR[ds],
				id: id,
				dT: 384
			})
		}(e7, id, qR), !0)
	}
}

function ts(qR) {
	var ds;
	for (jz = new Array(ex), wI = jz, h5 = new Uint8Array(ex), i4 = new Uint16Array(ex), i7 = new Uint16Array(ex), i3 = new Uint16Array(ex), i6 = new Uint16Array(ex), fJ = new Uint32Array(ex), py = new Uint32Array(ex), ep = new Uint32Array(ex),
		donationsTracker.reset(), eu = new Array(ex), fB = new Array(ex), fC = new Array(ex), fF = new Array(ex), h6 = new Uint8Array(ex), ds = qR.length - 1; 0 <= ds; ds--) jz[ds] = qR[ds].name, h6[ds] = qR[ds].a5G
}

function cB() {
	this.wR = 0, this.qR = null, this.ch = function() {
		this.wR = 0, this.qR = []
	}, this.a9Y = function(player) {
		this.qR.push(player), rC++, h6[player] = 2, player === eo && (u.show(!1, !1), t.a18()), a8.vl(player)
	}, this.a79 = function(player) {
		var ds, qR;
		if (2 !== h6[player])
			for (ds = (qR = this.qR).length - 1; 0 <= ds; ds--)
				if (qR[ds] === player) return void qR.splice(ds, 1)
	}, this.iF = function() {
		iv || (30 === this.wR && 2140 <= b7.iT() && this.a9Z(), this.wR = (this.wR + 1) % 60)
	}, this.a9Z = function() {
		for (var qR = this.qR, ds = qR.length - 1; 0 <= ds; ds--) ! function(player, h9) {
			!a6.fi(player) || (h9 = Math.max(Math.min(100, ep[player]), el(h9 * ep[player], 100))) < 100 || (0 === fB[player].length ? !ap.iE.iF(player) && hV && iH(player, h9, 0, 0) : (hV ? iS : ia)(player, h9))
		}(qR[ds], 12)
	}
}

function tw() {
	for (iW = 0, ds = ex - 1; 0 <= ds; ds--) 0 !== h5[ds] && iW++;
	iX = new Uint16Array(iW);
	for (var et = 0, ds = 0; ds < ex; ds++) 0 !== h5[ds] && (iX[et++] = ds)
}

function j8() {
	a9b(), a9c()
}

function a9c() {
	for (var ds = iW - 1; 0 <= ds; ds--) 0 === h5[iX[ds]] && a9d(ds)
}

function a9d(ds) {
	iW--;
	for (var hi = ds; hi < iW; hi++) iX[hi] = iX[hi + 1]
}

function a9b() {
	for (var ge, ds = iW - 1; 0 <= ds; ds--) fJ[iX[ds]] <= el(py[iX[ds]], 4) ? fJ[iX[ds]] <= 1e3 && (2 !== h5[iX[ds]] || 0 === fJ[iX[ds]]) && a6t(iX[ds]) : fJ[iX[ds]] >= py[iX[ds]] ? py[iX[ds]] = fJ[iX[ds]] : (ge = el(py[iX[ds]] - fJ[iX[ds]], 1e3),
		py[iX[ds]] -= ge < 1 ? 1 : ge)
}

function mP() {
	for (var a6k = 0, ds = iW - 1; 0 <= ds; ds--) a6k += ep[iX[ds]];
	return a6k % 4096
}

function bs() {
	var a9e;
	this.iy = null, this.ch = function() {
		a9e = [], 9 === it && this.a9f()
	}, this.a9f = function() {
		var ds, a9g = [50, 74, 95, 150, 190, 333];
		if (this.a9P = 0, this.iy = [0, 0, 0, 0, 0, 0], h4 <= a9g[0]) this.iy[0] = Math.max(an.fY(h4 * (512 - h4), a9g[0]), 13), ip = this.iy[0];
		else
			for (ip = ex - h4, ds = 1; ds < 6; ds++)
				if (h4 <= a9g[ds]) {
					this.iy[ds - 1] = 512 - a9g[ds - 1] - el((512 - a9g[ds - 1]) * (h4 - a9g[ds - 1]), a9g[ds] - a9g[ds - 1]), this.iy[ds] = 512 - h4 - this.iy[ds - 1];
					break
				} pj = h4 + ip
	}, this.a78 = function(player) {
		a9e.push({
			player: player,
			w1: 14 + aF.hl(20)
		})
	}, this.iF = function() {
		var ds;
		if (9 === it)
			for (ds = a9e.length - 1; 0 <= ds; ds--) --a9e[ds].w1 <= 0 && (a8.n1(a9e[ds].player, 0, 46), a9e.splice(ds))
	}
}

function cZ() {
	function a9n(ds) {
		return ds >= au.a9s() && ds !== au.yo()
	}

	function a9l(ds) {
		return 1 !== ds && !a9n(ds) && ds !== au.yo()
	}
	this.eT = 0, this.eU = 0, this.p9 = null, this.p5 = null, this.p6 = null, this.pA = null, this.pX = 0, this.a4g = 0, this.p7 = !1, this.a7X = 20, this.p8 = new a9i, this.ir = new a9j, this.ch = function() {
		this.ir.ch()
	}, this.bg = function(a9k, a4k) {
		((a9k %= this.a7X) !== this.pX || a9l(this.pX) && a4k !== this.a4g) && (this.p7 = !1, this.p8.a4q(), aF.tr(a9k), this.pX = a9k, this.a4g = a4k, a9l(a9k) && (au.ir.pW[a9k].a9m = a4k), a9n(this.pX) ? a9o() : (a9k = au.ir.pW[this.pX], this
			.eT = a9k.g0, this.eU = a9k.i0, aF.tr(a9k.a9m), aC.bg([this.eT, this.eU, a9k.k3, a9k.k0]), a9p(), aB.a9q(), aC.a9r()))
	}, this.a9s = function() {
		return 10
	}, this.a9t = function(ds) {
		return 3 === ds || 7 === ds || 9 === ds || ds === this.yo()
	}, this.a9u = function(ds) {
		return 2 === ds || 7 === ds || 9 === ds
	}, this.a9v = function(ds) {
		return 1 === ds
	}, this.yo = function() {
		return this.a7X
	}
}

function a9i() {
	function aA5() {
		au.p8.iF()
	}

	function aAA(f0, aA9) {
		0 < aA9 && (au.pA[f0] += aA9, au.pA[f0 + 1] += aA9, au.pA[f0 + 2] += aA9)
	}

	function uZ(f0) {
		return au.pA[f0 + 2] > au.pA[f0] && au.pA[f0 + 2] > au.pA[f0 + 1]
	}
	this.zT = -1, this.dO = 0, this.a9w = 0, this.a9x = 8, this.a9y = 32, this.a9z = 8, this.aA0 = 32, this.aA1 = [0, 0], this.yO = [0, 0, 0, 0], this.hN = null, this.aA2 = !0, this.aA3 = !1, this.a4q = function() {
		-1 !== this.zT && clearTimeout(this.zT), this.zT = -1, this.hN = null, aC.a9r()
	}, this.ch = function() {
		7 === x.sR() || this.aA3 || (this.aA2 = !0, this.dO = 0, this.a9w = 1, this.aA1 = [au.ir.pW[au.pX].pV[0], au.ir.pW[au.pX].pY[0]], this.yO = [au.ir.pW[au.pX].aA4[3], au.ir.pW[au.pX].aA4[4], au.ir.pW[au.pX].aA4[5], au.ir.pW[au.pX].aA4[6]],
			this.a9x = au.ir.pW[au.pX].aA4[7], this.a9y = au.ir.pW[au.pX].aA4[8], this.a9z = au.ir.pW[au.pX].aA4[9], this.aA0 = au.ir.pW[au.pX].aA4[10], this.aA2 ? this.zT = setTimeout(aA5, 16) : this.iF())
	}, this.iF = function() {
		if (8 === x.sR() && f.kH()) this.zT = setTimeout(aA5, 16);
		else {
			if (0 === this.dO) {
				var a9m = aF.a9O();
				if (aF.tr(au.ir.pW[au.pX].aA4[2]), aC.bg([au.eT, au.eU, au.ir.pW[au.pX].aA4[0], au.ir.pW[au.pX].aA4[1]]), aF.tr(a9m), this.hN = aC.aA6(), this.dO++, this.aA2) return void(this.zT = setTimeout(aA5, 16))
			}
			for (var f0, gg, a9m = this.aA2 ? 10 : 1e6, a9m = au.eU - this.a9w - 1 < a9m ? au.eU - this.a9w - 1 : a9m, pv = this.a9w + a9m, ji = this.a9w; ji < pv; ji++)
				for (var jh = 1; jh < au.eT - 1; jh++) uZ(f0 = 4 * (gg = jh + ji * au.eT)) ? this.aA7(f0, gg, 1) : (this.aA7(f0, gg, 0), function(jh, ji, f0) {
					return 1 < jh && uZ(f0 - 4) || jh < au.eT - 2 && uZ(f0 + 4) || 1 < ji && uZ(f0 - 4 * au.eT) || ji < au.eU - 2 && uZ(f0 + 4 * au.eT)
				}(jh, ji, f0) && this.aA8(jh, ji));
			this.a9w = pv, this.a9w >= au.eU - 1 ? (au.p5.putImageData(au.p6, 0, 0, 1, 1, au.eT - 2, au.eU - 2), b7.d2 = !0, this.a4q()) : this.aA2 && (this.zT = setTimeout(aA5, 16))
		}
	}, this.aA7 = function(f0, gg, fu) {
		aAA(f0, Math.floor(this.aA1[fu] + this.yO[fu] * this.hN[gg] / 1e4) - au.pA[f0])
	}, this.aAB = function(f0, gQ, aAC, fu, yO) {
		aAA(f0, Math.floor(this.aA1[fu] + (1 - gQ / aAC) * yO) - au.pA[f0])
	}, this.aA8 = function(g4, g5) {
		for (var f0, gQ, aAC, pa = g4 - this.a9y, pb = g5 - this.a9y, pw = g4 + this.a9y, pv = g5 + this.a9y, pa = pa < 1 ? 1 : pa, pw = pw > au.eT - 2 ? au.eT - 2 : pw, pv = pv > au.eU - 2 ? au.eU - 2 : pv, ji = pb < 1 ? 1 : pb; ji <= pv; ji++)
			for (var jh = pa; jh <= pw; jh++) uZ(f0 = 4 * (jh + ji * au.eT)) ? (aAC = this.a9x + (this.a9y - this.a9x) * this.hN[jh + au.eT * ji] / 1e4, Math.abs(g4 - jh) > aAC || Math.abs(g5 - ji) > aAC || aAC <= (gQ = Math.sqrt((g4 - jh) * (
				g4 - jh) + (g5 - ji) * (g5 - ji))) || this.aAB(f0, gQ, aAC, 1, this.yO[3])) : (aAC = this.a9z + (this.aA0 - this.a9z) * this.hN[jh + au.eT * ji] / 1e4, Math.abs(g4 - jh) > aAC || Math.abs(g5 - ji) > aAC || aAC <= (gQ = Math
				.sqrt((g4 - jh) * (g4 - jh) + (g5 - ji) * (g5 - ji))) || this.aAB(f0, gQ, aAC, 0, this.yO[2]))
	}
}

function a9p() {
	2 === au.pX ? aAD([256], [256], [0, 205, 256], [500, 500, 0], [0, 0, 0]) : 7 === au.pX ? aAD([512], [512], [0, 380, 512], [500, 500, 0], [0, 0, 0]) : 8 === au.pX ? aAD([410], [410], [0, 120, 210], [0, 80, 640], [0, 0, 0]) : 9 === au.pX && aAD([
		512
	], [512], [0, 70, 180, 200, 290, 420, 512], [500, 500, 0, 0, 500, 500, 0], [0, 0, 0, 0, 0, 0, 0])
}

function aAD(aAE, aAF, aAG, aAH, aAI) {
	for (var jh, ji, aAK, aAL, fq, aAM, gv = aAE.length - 1, aAJ = au.eT + au.eU, et = (aAJ *= aAJ, aAG.length), ds = et - 1; 0 <= ds; ds--) aAG[ds] *= aAG[ds];
	var aAN = new Array(et),
		aAO = new Array(et),
		aAP = new Array(et),
		dy = aC.aA6();
	if (void 0 === aAI)
		for (aAI = new Array(et), ds = et - 1; 0 <= ds; ds--) aAI[ds] = 0;
	for (ds = 1; ds < et; ds++) aAN[ds] = aAG[ds] - aAG[ds - 1], aAO[ds] = aAH[ds] - aAH[ds - 1], aAP[ds] = aAI[ds] - aAI[ds - 1];
	for (jh = au.eT - 1; 0 <= jh; jh--)
		for (ji = au.eU - 1; 0 <= ji; ji--) {
			for (aAK = aAJ, ds = gv; 0 <= ds; ds--) aAK = (aAL = (jh - aAE[ds]) * (jh - aAE[ds]) + (ji - aAF[ds]) * (ji - aAF[ds])) < aAK ? aAL : aAK;
			for (fq = aAH[et - 1], aAM = aAI[et - 1], ds = 1; ds < et; ds++)
				if (aAK < aAG[ds]) {
					fq = aAH[ds - 1] + a6P((aAK - aAG[ds - 1]) * aAO[ds], aAN[ds]), aAM = aAI[ds - 1] + a6P((aAK - aAG[ds - 1]) * aAP[ds], aAN[ds]);
					break
				} aAQ(au.eT * ji + jh, fq, aAM, dy)
		}
}

function aAQ(fu, fq, aAM, dy) {
	fq < 500 ? dy[fu] = el(dy[fu] * fq * 2, 1e3) : 500 < fq && (dy[fu] += el(2 * (1e4 - dy[fu]) * (fq - 500), 1e3)), dy[fu] += el(aAM * (10 * fq - dy[fu]), 1e3)
}

function bt() {
	var aAR;
	this.w8 = 0, this.w9 = 0, this.wB = 0, this.wC = 0, this.ch = function() {
		(aAR = new Array(au.a9s()))[0] = {
			g0: [0, 5e3, 8e3, 1e4],
			gQ: [220, 250, 255, 220],
			sz: [190, 220, 0, 0],
			hs: [170, 200, 0, 0]
		}, aAR[1] = {
			g0: [0, 4e3, 5e3, 6e3, 1e4],
			gQ: [25, 0, 100, 0, 25],
			sz: [25, 0, 0, 0, 25],
			hs: [25, 0, 0, 0, 25]
		}, aAR[2] = {
			g0: [0, 500, 2500, 2999, 3e3, 3200, 4200, 5200, 5700, 8800, 1e4],
			gQ: [15, 15, 70, 40, 48, 48, 252, 40, 40, 20, 30],
			sz: [80, 80, 190, 90, 46, 46, 248, 180, 180, 90, 140],
			hs: [120, 120, 220, 110, 37, 37, 217, 10, 10, 10, 10]
		}, aAR[3] = {
			g0: [0, 400, 1800, 2e3, 3200, 4500, 6e3, 7700, 8500, 9500, 1e4],
			gQ: [10, 10, 20, 10, 30, 10, 16, 40, 55, 230, 230],
			sz: [10, 10, 40, 50, 100, 40, 80, 120, 55, 230, 230],
			hs: [80, 80, 200, 10, 60, 10, 16, 40, 55, 230, 230]
		}, aAR[4] = {
			g0: [0, 300, 1400, 1700, 3e3, 4e3, 1e4],
			gQ: [10, 10, 20, 10, 10, 170, 212],
			sz: [20, 20, 60, 100, 100, 110, 170],
			hs: [70, 70, 160, 30, 30, 60, 120]
		}, aAR[5] = {
			g0: [0, 1e3, 3e3, 3500, 4e3, 4500, 7e3, 7500, 8e3, 1e4],
			gQ: [10, 10, 20, 10, 5, 10, 20, 5, 20, 25],
			sz: [30, 30, 50, 100, 30, 100, 140, 60, 140, 200],
			hs: [80, 80, 200, 10, 5, 10, 20, 5, 20, 25]
		}, aAR[6] = {
			g0: [0, 700, 2650, 3200, 5e3, 8e3, 1e4],
			gQ: [10, 10, 60, 255, 255, 200, 200],
			sz: [10, 10, 60, 255, 255, 200, 200],
			hs: [80, 80, 255, 255, 255, 200, 200]
		}, aAR[7] = {
			g0: [0, 400, 1999, 2e3, 3200, 4e3, 4700, 5500, 6500, 9500, 1e4],
			gQ: [10, 10, 80, 255, 255, 55, 6, 70, 20, 155, 255],
			sz: [10, 10, 90, 245, 245, 170, 80, 190, 20, 155, 255],
			hs: [80, 80, 255, 235, 235, 55, 26, 10, 20, 155, 255]
		}, aAR[8] = {
			g0: [0, 700, 1300, 1900, 1901, 2500, 3400, 6e3, 1e4],
			gQ: [25, 30, 30, 30, 255, 255, 30, 40, 20],
			sz: [25, 30, 150, 150, 245, 245, 80, 150, 70],
			hs: [60, 170, 170, 170, 235, 235, 30, 40, 40]
		}, aAR[9] = {
			g0: [0, 400, 2009, 2010, 3300, 4e3, 5200, 6500, 8e3, 9500, 1e4],
			gQ: [10, 10, 80, 255, 255, 55, 23, 36, 20, 155, 255],
			sz: [10, 10, 90, 245, 245, 170, 60, 160, 20, 155, 255],
			hs: [80, 80, 255, 235, 235, 55, 9, 72, 20, 155, 255]
		}
	}, this.a9q = function() {
		var ds, hi, e8, gK = function() {
				var gK;
				return au.p9 = document.createElement("canvas"), au.p9.width = au.eT, au.p9.height = au.eU, au.p5 = au.p9.getContext("2d", {
					alpha: !1
				}), gK = au.p5.getImageData(0, 0, au.eT, au.eU), au.pA = gK.data, gK
			}(),
			g0 = aAR[au.pX].g0,
			gQ = aAR[au.pX].gQ,
			sz = aAR[au.pX].sz,
			hs = aAR[au.pX].hs,
			dy = aC.aA6(),
			et = g0.length - 2,
			aAV = new Array(1 + et),
			aAW = new Array(1 + et),
			aAX = new Array(1 + et),
			aAY = new Array(1 + et);
		for (hi = et; 0 <= hi; hi--) aAV[hi] = g0[hi + 1] - g0[hi], aAW[hi] = gQ[hi + 1] - gQ[hi], aAX[hi] = sz[hi + 1] - sz[hi], aAY[hi] = hs[hi + 1] - hs[hi];
		for (ds = au.eT * au.eU - 1; 0 <= ds; ds--)
			for (hi = et; 0 <= hi; hi--)
				if (dy[ds] >= g0[hi]) {
					e8 = dy[ds] - g0[hi], au.pA[4 * ds] = gQ[hi] + a6P(aAW[hi] * e8, aAV[hi]), au.pA[4 * ds + 1] = sz[hi] + a6P(aAX[hi] * e8, aAV[hi]), au.pA[4 * ds + 2] = hs[hi] + a6P(aAY[hi] * e8, aAV[hi]), au.pA[4 * ds + 3] = 255;
					break
				} au.p5.putImageData(gK, 0, 0), au.a9v(au.pX) && a3.fy() && au.a9v(au.pX) && (gK = a3.uG("arena"), au.p5.save(), au.p5.globalAlpha = 1 === au.pX ? .1 : 1, au.p5.imageSmoothingEnabled = !0, au.p5.scale(2.8, 2.8), au.p5.drawImage(
				gK, Math.floor((au.eT / 2.8 - gK.width) / 2), Math.floor(.5 * au.eU / 2.8 - gK.height / 2)), au.p5.restore(), gK = a3.uG("territorial.io"), au.p5.save(), au.p5.globalAlpha = 1 === au.pX ? .1 : 1, au.p5
			.imageSmoothingEnabled = !0, au.p5.scale(.87, .87), au.p5.drawImage(gK, Math.floor(.745 * (au.eT / .87 - gK.width)), Math.floor(.422 * au.eU / .87 - gK.height / 2)), au.p5.restore()), au.p7 = !0, b7.d2 = !0
	}, this.tu = function() {
		for (var f0, jh, ji, aAb, aAc, eA, w9 = 0, g0 = au.eT, i0 = au.eU, e8 = g0 * i0 * 4, aAd = a1e, aAe = au.pA, ds = g0 - 1; 0 <= ds; ds--) aAd[(f0 = ds << 2) + 2] = aAd[e8 - f0 - 2] = 3;
		for (e8 = 4 * g0, ds = i0 - 1; 0 <= ds; ds--) aAd[(f0 = ds * e8) + 2] = aAd[f0 + e8 - 2] = 3;
		for (aAb = g0 - 1, aAc = i0 - 1, ji = 1; ji < aAc; ji++)
			for (e8 = ji * g0, jh = 1; jh < aAb; jh++) eA = 1 - (aAe[(f0 = e8 + jh << 2) + 2] > aAe[f0 + 1] && aAe[f0 + 2] > aAe[f0]), aAd[f0 + 2] = 2 - eA, w9 += eA;
		this.w8 = (g0 - 2) * (i0 - 2), this.wC = 0, au.a9t(au.pX) && function() {
			var f0, jh, ji, e8, aAd = a1e,
				aAe = au.pA,
				g0 = au.eT,
				aAb = g0 - 1,
				aAc = au.eU - 1,
				w1 = 0;
			for (ji = 1; ji < aAc; ji++)
				for (e8 = ji * g0, jh = 1; jh < aAb; jh++) aAe[f0 = e8 + jh << 2] === aAe[1 + f0] && aAe[f0] === aAe[2 + f0] && (w1++, aAd[2 + f0] = 3);
			aB.wC = w1
		}(), this.w9 = te = w9 - this.wC, this.wB = this.w8 - this.w9 - this.wC
	}
}

function a9o() {
	var db, aAg = au.a9s();
	au.pX === aAg ? db =
		"DYDz2ESNu-0UYCCrS9c3pBUrKHc94BhIBhIJpIIBnMIAAIrKSSpKABmgf9e7X7ecX-5P0baOy191XXX7eegf9mcfUrrxrKppppKpKSrzUMMMSKKKrJcXcXcmgcXnKIKBmnCIJonCKrrSrrSSxSS9XcJnBe9XemmWXeX99chMIAEprrSrrtbrxIrMKBn9eBcecX9X7f99X90e577VX1VcOWX16XX7X999cX7eWyXXccVVX6rUSrrwUrlzpbbrrU6xzztzxzrztzbaOtaOa5-0WV-77e-9119HcXXZecccceXXX7ce9Xcce9e9meeVof919ee9Wzy5XeXYS9KBcXee_He6ce1ee0zxzta5UaX99c1mXcXhEJp9cNHWcTN9BcnAzJoorIBe0c--nIJoonSIBe-OX-NNOXWbcBgzIHX9xHzS9mcCSI9-nBrrorK9VcP-jHe9_BhxzKHcWC9mZp9-3n9fBnS970a6zs7egrIAAIRUKocXX9gx9npKaUxBppABe5OdHpBe-AC9-17TOWABpKI9-7JmnC6zGtxIBmen9egp6aUlyOzbrbbqUzxHXgjKKBc-ZehlxoeeoxObonox9XonAUbzS9efBdCAArHmjISBhEJnAofBUIJgrpocXxIBUoxHVmnBmmXAExoUxABmdAIBgnBonIAC6oxHVgfMHcXcUXAAGxIBgfxJch9c3enCMzSBe9eXomxHeBgmeCSBgpKMp9hzHfIEzHnArSxHX7pSrUHcnCMrUpSa5UIonABrSBccnBopJttzbxpBonHXpIEKMrMSrxpKxzUzltyUtaTOaOaObaT5UzNTOV0c116rMMKSKrxIKpJpKMSKMGxISCrKMSpKMKrSpSpI9xp9_pMMMMSBoxSryTUUxa5P7-0ttbWzzzxzaN5-NOWVN--0Wa5-0X-0VNVN7TOzaOWzL0bbX0y7NN5Ua17V111749c79e1c-V-----Ow7--N57-OzaN0ba156byNNT6q5OzWaT55-OsOX1777Oa55-5T5UX16tzUOyUtzrpzUrSKKSSAoemnKCIAIICI9KHn9CKBhCSHgenSAJnIJxSMMKKSSpKoopKKHpSoorSzxpWxMS-UKISaOxMOxttyOzy5OzbbtyTOzbtaUxyUyTT6porUrSztzzMSp9eceoogeZp9ZxJx9geeeXe9eZgeC9gegemp9gmpKMSonSxKrrbaUMIKJpMKKKpIACBmeccV71XX7V1mmmmhCCCKJompKKJpMKSKSKpKMJpKBeeceenKpzHnBnBmceee-X1117ememfBn9mfCBmgemf9mfBmf9xromcec7Us8He0u99cWtbc-PeCCS9VecZnBnBemfBn9X9c6aOXA997Y99755VXc6tXXmV5Os-ObVN0yN0bzaT-7ec7N70Wa-OV-5eggnHon9f9efCBpMzop97epCKIpSIBpKrrSKKIKKMKMJehzKKErJeABnIAJc717f9eBnAJzrHe7V9d9ef9gmopKUKC9gmcV6tX73eCIJoonIBnBnBgnCHgjJeZfA9megeegfKCICCJnIA9meZf9mfIEMof9XceXe97X-59XdCIKKpKKCJoeVcf97mZmVVV199YJmX7gceY9gpEOxMMJecrSSGzOxSrxprSxzJzUopSrIxKBpUMIpMprSropEMHnBrpprK91AJpJpIICpBopICCJonKBn9mcme9VcX9ee7X7e9ece9Xe19XcX91Xee9Xcce9VVVccefAAABe7emhBnSSKMSIJhCIJpKJppCKKIIIICJgpIBpAIHpBcoooonIKLObpBnKlzrKIKCJpCJpBnBpUzrrxpxSbbwUxzUprpppppJppMMIrrSSRUbWsOwUzUltbzrxzUzSzUbrrTTUUrSbbV6WbaTOzxzyN5TN-T5TOxbtts71-X-70V0sOWsObbaT0sTObw70tbbzbxbzzyOtyUtbyUaOV1-N0cVN-50aOtza6tzlxzUxSrzUzSSxUSzzOzzs5OyOtyOyUztyObaNOtaUrUxrrUSrrUrMSJrSIMSpKISzKUSpSrSSrzSMMxMSrMSpSrUzSSzzrTUMSpprSzMSzUxSSIEUSrzrUSpMKKxpKrKMKBmmrIKBgpKrzs6VOsUa--5ObzyN77-7X7e970V-5Oa5ObzxSxrzzSrKMUw-OV17X7X1X99X97X9X99cXXXXX977OaOVXeeeeecX7cX7X7X177-7-X-71-7XX97X97cX7VVV1--VObs970cVObtzbtyObrzxSomdKKSSMKqTN5NN0xrMIM5UrKKKpEKrSMSMprSrxMMUzrzrzSrSrSrHXenOtxrrxrxzSrrSrUrrSrSxMSxxKJpKKKJnKKrKIUUSrSrKKzKxKrSrSwUxIBnrxpSSpUzyOzzzzyUSxzRUpCBee7ecXce89omegpIBrpxzSrMJnKrMSFT0tbrMKxKL0VObxprSSlXV-11-c-X-WxzxFUaPcX777OzztzrSrMV-V75X96zzMKrUa9e-7V17gc9XeV90Bf957cVOzrMOX17X7X-X7X7V-N-6aUxCKzUUKprcX-UzSrN17WzrxrNX7ecV17WzzbaOtbxraObrOxrbxwUxpUzrzraOy5OVOWtzyOzzxbzVNXccXcXcX1-V197V-ec5Oy5N1--555UyN-N1---VOWX0Wtcc0aUMMyOs----Zc5-TOtsOWX7c0xzLN-NWbyOyUyUzrbxJe9gfTUxAMxrxzlbzbzbq5UKrJnAABnAAICETUtxSrzrpIpKIUSxraOaOVNTObzWa5NOtxxyOyOc-5A9YBmnBfHceX7-XXcX9e9Y9e5OzUbxSyVUX5OcUa1-UMqNNUbyOtsUWtWbWaObtzbyUWy6bzpJmoh9nIUI99oghSUzrrrSHeHohKCJgrKJemgcrS9nry6xSrUMStxzUSzqUrbrUxUSxxrrprUU6zSrbrtzUSUSzxMKxSMprMKIIIoonIBmohAIAHgf9eHeemfI9nA9mf9c9n9ZeXc9d9n9ccX7VZmoceeHVX1Zn9meZegegegfBhABehABonAHnABhCIBemee9eBfBeecgeohCUxzUbzxI9egegfAUUrHmegemecWcfCUp9meX9Beeef9onrSpAAKKKIyOzyUzJnBjSrxSSIBhMSHgcVYKxBmnzrROzpzxzSKKCKUzKBnoUzzbzpJmegfzyUzFObyUzrrzpKUSlzry6sUyUVN-7NOzbzzlzrzUrUSrrURUxzbzsTUsUWts5NOWa5ObzrUxrtyOWWaOzMSJnIAIprMJorKMIrSKMKKpUKCBonKMJnCJpCIKIKMJmpKIMKJpCJpBxBonHomoemmegnHf9f9cX7ce99emecgn9h9eA9nCHgfBnAIBfHh9eXXce9emec7f9ec1me89eeceme89fHeemX77-ceeeemeX9X9eeecV-V9e9Xe7e9eefBnBeefBfHmnBnBnKBpIEpKxMSKJnBpBnBnBmgmeeX9cXXVcX7Xce1eXcXe7ee9eXeeeX9X7V7V77V--XcXee7ec7X9eXXceX9f9eeee997X9Ve7Zee7WaX5X2Be-cee17X--0tsUbtaT0ta5-Oc--7Xe-X7--OVUtbVT--QA9nBmcXV--97X9ememggnBecJceeXme-cXdABeXeX97cnHgeeI9IA9XcVX7eX99e9e9mgeXeXemmceZmXe9ceXemXmggf9mmnAI9X1eIHcXfBghBmf9BemcX9Y9Ve9--JmZeccXA9Xd9cX9VXVVc7-V-Xee_BnJhIIBnJnBmohBgohBcmmf9eHf99Hf9HmommmmV5N-MvxppxrIICWzsOxX--OV5s0i1mopMKppzTOaN-0XXceV--0lJ7-90mzBlV2N7tRof9JqUsOaW7c8bwrrJchpK9-X7PBfHjKogcP0Jd92SMUwUlxMSErHegnrlxI9X7cY99e7hSzxpxSIIUHozogmgecYIExxxrrrKpKrSrMMrrlxtyUtxblxUyTUbyUUSaUy6Wzttbbc5N5N7V7XWaT7V6aZeVWsV9nIA9X2BmcWc7ooc--f9IBomV-0cnICBeXgn90Wc5TOa7-1-5cX---d11---esD---m8D-1VvAYqV-92glC5--NEEiqV-7Hsjk014I4wognBxwOs0Wc-D4y4gcT--0Y8X-0WalAk--0pHX-1Wsy6EV-a7EDhCBtaT9--X3IIV--_VJV0Ndepmzq1-0XeJbD-5XhvrCqTe-07iCnpteV-7iejk-iAtCxEIrrX71-2smknnEUUpze-e-c-1BtMB--2Kbq--YMmzV-sqPmrF7--Culc-HCwyxxcV-DEWXhte-DZ7mzorSr56eX170LG-rUSrSItzOueVc93c-5ZH-rrRP9-2d613nHdRUR6kP7-CZVZUEKUyUe91e-2ZYhnTPV-t8OMny7-1HZrT-DZf16A9mjFUzlsV--Hh_N-1HlyB-CZhCrSpzrkX7cX-2ZibAr-VMdC8brSrzUxSSIBxpHX17c8CrJe7rrUIpSrUxxzSrMIMOs5OVV7X7X7977V-7P19Xcce--8DNHk-LIcPSpN7-0ODtgnMN1-7Zz5USxyX9c--J2As-9J2CSu-08FHSrR7V-0G5xV-OH5vqV-0LEoV0OLiAnMN70D_f4UKIBnSBgzSrSxSSMSxpSpppzc-5TTUMbV716s117X1Xcce-cXXHcX--0Rs7V3dS04nKonpSSkV7----TMGPxrS-V7--MN-c0HMYnBnrIAIrK-OWV75V-tTEHotV-qMoqSMUUbe9HXV-mNcawnr6xtcVe-3aNiUIq1-6aOwMISlc1-6aSe6rROec-8ac9fISzuX-V1tf-1mnBrlWaN-NajMY9ggeoopCTTTTN6aN1HdgkXoohABnK9n9KJmpogeV-0XJenppSrUzJgghomhp9VnxIAAzOxWbbrIBnJmenBegozlWyObxIKBonIGaOVT50xSk6xJpEpIHnBonBoptxpr56xrzzbonCBnCMMSonzxJmopCIJomX7mceHcV7nJxSABhrbxEKCIJhAA9HgenABrUMbqUpSUrprSrbzzp9hABeXce9YAHcoomnBmmnBmmnpzaTTUrzzMpzWWblbyUUSrUrxbbzzblxrUUbrzSrtztzw6btV19ceWXWzq0aU6aTOta0a0V5777Xce7nA97VOa0X-17VUVV0V17-17X7V7-V----1-V-VcX9A9cWbbzyV-U5T5TOa5NNOaOV1Xe9ce99mZee5OtcWbaTTTTTOWe9ZeXcmcXVV38gtRnCMzSw1X6VcV08hu4rq9--tiGRrac-1Qfbg-dax4zrrIKoeBxErUlzSGbs0VP3eXX97XV-9R0KCsV1OlXjprrP7X7-HRQsCpVc2TRgLxJrKBeKKJe7BhIKKBlwOaUrNTUsNNNcNP91V---PS6VgopVN-LbHRrK999ezrxxoy5Tc7-0bJGjF--6Spy-5bU7rSbuXV4tsIYpKSSrSp50aX-177e-2baNMC5-2Otd7nHrpOba7cV2tv2dnICxz-Uk7cc0mUIkRnBpCBpCIJOWa0VNOtc-19UQnBeegmnIISxJns56zaOWtu7TV--URWN--VDLc-eVE7zSrUX7Xc-5WM4BN1DWTIggpBnEKKKESCWV5T5Wa-N0a9VsP6YRn9cmY9JggoggzUKHfA9XmcP9XZfIJhronABfISpxrUrrI9ABnBggrxxoe9fHmeBdCDUUrHf9orUogrzzJfUU6zUzbbbzrty6brbrxxz57OtsN5OsN5V5VT5V57N56yTUtsNN1cNNVV5VNeeeZeWtu77-XX-KgxCqWVV-P8w5qV-uAjtz5c15XwhBooopBonIKKJNN5-N5-6WVN-8ckmzArUOVeV-uDoWxNV--YoA7-TYoYRoxa57-1_P1T--8NKD-9dNS2ACAUta---dQzr-DPM79mmgcpI9chMKCppxxxrSzIbXc0aT1WVOxk7-N-9c0eauZgfAKrSrrSla-5-7n9-V1eVE3nKUwNVcV0eWZinCF5N0TcbkCMSrzr5OVPXCA9VXV-1b0uV0ezUBxUsXc--mhTc--n9_c1DnTIxCCSMKC9eCKClsT5OsN-V7NNV6QJcYxzUSxzSwUa7X9I99Xd9X-BhW8EE6rUw7ceV6fXkApBmf9f9hKGaOWzzzObV1V-PuipRpJ5--6iiarprP77--DrhL-0iv-fN-7jNKjExzXcc-Y1kshKK-5-V-wF2umWs-03EWs-03_Ms-23gdy-qlmyACJmcgfBnCIIrKpICUSIprUa0VOV5N5---V5---wRnFru7-E6kMClX-4lwIAzq9c-A7r-z5V7gdk8monBgfCCCElzbzxsN995-T5-KgiSunBnABmeeIHprrKJxpIISKICJpKprUzOcOzzUTN---0V--50aN1-1-PV7XX-SnCeY9f9mnUSSKzMtaOWa9VX--bBy1gzSxX-e-4nFNEAqTc-6C7Wgs-EC_DBjN-0nVb2N-3n_EYByN--nfWnV1Bx8ZorUaV9-CnqgbKISrNN9-9-8o5aACrSVWXV-C0gPk-jFRwSM6rsW9VV3h23TmfBjOxMUtaX17-6GYfE-0UHSjwfEzbxpUUq17ZcXeV-h8rqr--3odX6MF--8ogzvMJrN--V1xAI4npKwT7cV0Xp-Yf9nBeehKMKrzzSxrSxrUSzzSxrSMzSzzV-T-7V10Wa6VOWVT1mmeeegn9eeeXmcX97V-IJGnCr1--2JVvD-Bp7gzSxw6aeZcV0hHX5merts-EJjUhq7-2pGMvBtV-hJmVz1-1pJofqV-0KQ3c-0KztN-0L5k7-6LYvE--ILYxhTNc-0LZ57-ALu1CaV-4SIqV-hSQ3na--KpjX--ppknVESTPknBgmgn9f9f9onBmenSpMGzxbtbzbaOV6zbX9-NObWV-4TmmV3SToLnBnJnST5Oa-1-0px0YD-0pylvD--L3Ge--q54IV2CWmWnUUz5Pcec-nO-URhBoUy6VX-1qFuQGc-MOcagpR---CcERs-0PQUc3MPs8gehClzSzbzzUzxMr6tyUzzbzaTP0HgmcVXegeeeXeh9eX7e-JqqUEKIMpzz5T7cXX97-bRBpSKoT5X7--M4g1-grMIbBecemgfMxUpzMzObtu7V0zrrq7e9eV-MTaFhOy9VfLnt2-9-17117VcX1-1X97cVXX9177V-VXV9-WaOSMSSSSrrUSKMKxrrrUSxrrUzsOV7--N-tVN--N0bKIKKQCKRnKQCUtrTUtUSxpMprrUUKxSpxrpprMrxF-EcVGxTX" :
		au.pX === aAg + 1 ? db =
		"QREc7lR7oVUYGy_KJOJKKKKuK4OKT_K4KG_u_GJJO_3K_KKKL_4KL__KK_4_LKK_MjzuOOK_KKKOKLKKLLUjzji_KKMgyzdMjzgzzzEszzyzzjvuQvieeid_POOvzkzvzy_TvuOK4GKKvyyzzydJQi_OdKKaLOLajdOPuueaYBzydJdPOybvdbjeuvizwzujuQnunl2wBnBE2-EYBz2nk2kFzwBzznBydnwznEYwnnEBnnwkyvwzEgznzzEwwwwznnxK4KGOJ2zl2nzifvwyw-J0GGJ042nvzEvzwznJEnzlG42zg02KKGFzzEzzeT-woKK3EvoKLOJBnBnzE2EznnwnwznznzpJKKKKOOKG_G_LKFwl2zK8K4JK4KKKKKKKKKKKKF_g38EBemXeeeeeemeemgeXeegf9XgeeexCxzzzoenErMroeXeeegfEzSS9eVcghoeemf9YBe9ee9eXghrzzzKBfIUzrbzUzzzbryOxrzzbbsTXe9geY9egeeBeY91cUy6z6xtxbxzbzlzObrx6ztztue5UyT6zzbzbae7UxyOzzbzzbbtzyUyUtzztbyUzzbuecZeBeXeeecgeV--1ViZ-00JJIV379xwOLKKgzyzK2zF5g4ccBgcn9ggepUxAprzztxtyOzbzzbe90f9cXX99V-cAQAOx-PFLqqmemxp9zzttzIAzrrzzxzzze7X9ZeceX5ece---AorF0B4uUghzzae9-6VjJh_UznK---NUXV1NBEpOLYnzlJ--0X1X--Vl4pk-B5KYEc-D29vazJ-HkP9DmexzxxzzzrbztbseeeHeYHceXV-NC5uUF-R5YYCyX-2Vpc0jCF--5lM7-12TuM-hkQrZrS9X7f9e9enrSxrzaUxx9f9zzHhzUxqOaOsObbzSxoqUxyUY999c9Xcecce7eV5NDrSOLauUwzzzzEGK4K_0F2Z6YfEUoefUtzUzMyNNe9ceec0a2zdLQdyjwynxKKFznpGGJ--1-_X-AW0ZpjvnzCKKJ--1309--02HO---WrDV1sGfOOjzzn4KK-0FYN1qP-2W7RtfkF6J8G-geeemf9gemegfEbqUrxEbyTgecOwUbbxEbyTTUac-H3crrjCLEE1KoQBrofHegeecBefBeeegfAACxUHemeeeeegxrSrzxxoeeXXe9ecdAzUomXexzrzroeXeecc711_rI9nUSxxKMSryUzrzUpxKx9cV7cceghrrJnJmhBe9ee9VUrxy0a5-7e7VVX-7XccOVX99eefKKAAMxMIUxzMrxK9XXXXeXceXceee9mxxp9oeV9mf9eHgmeeWsXnHcmfA9oenJf9XcXcOby999exKKzMIJcceYBggghxrI9e9e99pxzpHeccceX110cXe7cXWzrUzUxzzrzrtzbaOcVcceXccce9Xceegcce6emeZe96buXeXoe7TZhBe2Bmc6eIBdC9eC9fHcHcAC9erxHed90C9MTUzoh9ZjJeofIAzHghHzI9nHYACCA9VxIHcfx9gmmnEJrKErJzSC9xrrrtyTOaUa0xSxKroxMSSrIMKqUlc6bztWx51--P7OyOy0tcX997V-NP6WsUaUbaOaX6VTOzzzxxpHnBnBggofCKSpJxUUo6pzzbtzyUzbxSzogfABeceef9mpSzoppI9e7X9nCCKMMK9fEI9ee19mfBgemh9W91WuI9gf9e5eX17N5NUXc0a1nBenUHfSorpMKMrHXh9XgmY9nMJmV1nIISC93fA9gnKBemp9e9XxKoeeeA9fSMzrxrpMSxMMHorIKII9eecgeceeee9gmghrKKCpKCIJonMozKJp6xyUzSppr5OttzzzzWWtyN5ObcV-5OaOWttyTTN5VWWbbzzrrxaOtbyNTUUrrSMMSpxrrSrUxxUUpSzSMKonIOaN6aVcVNOzUrL17ccXccVPeccX7717cXX-5V0zbzJxOboUKrKrrUxxrrSxxrSorIKSrMpUUISxxAESpGxrsVWzP7XXWzrrxVNXoccWcOcX-6xrV6tx0zxzUtbtzq99777WWVUV-50xaV0tsNUbzpUUzp9nUrpIyOzaUy9ge197e6zlbbbzbbyUzommhxonCHeIxxrxrxrUSxrUrrMKoogmmecmeeZcceX7eXHeeemmmn9eedCzHfoeeeZe_IMzIpoxHXKzUJxxUoUUprza0zxxxrUtyOaUUlbxIMKKKoopCIJpJoommeeeX9A9mmn9cce9Xe9ee19eXe17eA9mgnCKpJnBee7XXXcee7X-99XXeee9993cXV0ba5-XV0aOA919HgmeeBeY9mmX9ememef9ggn9ghA9mXcmeecX7gpCCCBnAAAABnCIICIKpJonCABnBgf9hBpBnBnCCCJonBnJnJonCIKprSKIMKKpJpCIKIIIHrSMpJjJxMpz6zHxCrrMMUSprKSIrMrMUUMrSxrSrSrrUUyTUbbtz6zbr6xxxtbtyOtyU56tzyUTUxzrSpxKMU6lWxzqNUSxpUxEMKJxCJnMKEUHhICEMrHxSUMSrMSrSppppMKMSSMKpKBxMKpppKKCBnCBopIKIKCEKCKKMMSpppSSSMMMMSSKKKKpSKKSKSMMMSrSSSMKpSSSppKICppMrUSyTUztbzzbrxaUq6zttbaObaOa5TOa5NOWWa5TT5-N50V7WWbaUbbtaOX-N-7-1-170cTT5ObaOa5OtttttbaOa5N5-1510c5V--0VVcX-1-V51-N7X-WWV55N55550ta6aNNOa5Oa5OaOaOtbaOaOaOaNOa55NNOV50a5-T50WWV-N--7nBf9mcmgcmmmeBgmee7X17eWba11X7VX7X79X97Jc7V7-V7117X7cV7---V1-X7X97--7X111111711-VX77V7-UMMMSMSrN0V5-UKKCMxpprSSSrMSSKprxrSSSMKKSKrMrrSrMKpprSrKrSSCKKppKpoxMUOzaTOzyUaTUttWtzbbyOts-OyUbbztVObyNNOyTV-0WxWWaNNN7X7VXceXXX17-7WWIBnIBonBd9eAA9Vc7NNV1CIK9117-797X7VX1111WbWy0xUzprSSSpprUxrSxxrzTUbqP6zrSKprxzxzzTUUUztzztxzzbtzSSUSMSzprSrrtzJmmfrSrSUSzaTN756xKxCSSIKMMKKpSKpMKprKprMKpSKpprMMMMMKrJxSSrSaNNOtVN6s---0WV17N-V-0aUWbyN0baOaOaNNOWbyOsN70btaUL0xLT6o-UM6lX6brSppSSSUUSrppEF6pSSSMKKCKVUMUL0tba-USSUKSKSSMKrMKpKSKKCKpIKIM6rSSpxMSppKSMKSSSpSrSxrUSlwT777VV---777X7XX19XXX--7V1Hc1--N0VN570c6bzKMUzrSxprK6xMxxrpCKS5NTT6cN0zltaTOa--57-11-V7X7VcX7c7X77977VN-Oa0aTObaUUoOxpKpqP70btyOwUsOw776rS6twUkUOtWaObX6ta0bVcOcWy5N-5T96XWaWccZeWWtaX97cecWzUxxq1X7cVX77VX999750a6VOttw1XecXnIBe9-VZceX7V0zTT-OtWWbrzSpCCUJltWbbbzxzUpoxopxTUUxprS9zMMSKKxGtaUtzV177177cX7X7X997-OtWaNX150a6V6rxUxtbaOV-NN0WV-75-0V77777X711-1X195XccccXZe_on9c29c799ecVOWaN-55NP-T-TUzzzzlzzzsUzxzzrxAqUyUzuA9770V-5UzbzOzSSUrOVOac7WzzxCrSUMJgpIJrKIHgrSJxSrMSrSrSrrSrSrSrrSrSrU55-X77TOe775OxsXX7X15WzMcXccX-Xee77-VX-UzkOzSq7UbzzxzSX5OVNUbaTP6xzrzccccce1XXeccWzzsP7ce-U6rSzSzbzUxxxzxzUwUqXcPVTT99XXce9eeXzS9cXXX9XceXe9e9ce9cece9e9ececeeeeeceexxxxrHee7ece7Ue9omeeXeeeeeeeccX999e9eeXgef9eeXXXeceec5eXefC9eWcPn9WeXeeef9hzSxHcfx9cBe9emee9X_Sp9e9Xe999XWyce7X9ceeeeXerp9eeeceecVeeeeen97d9ec_BemgeemVTOyTNUbttXVe9cce9eeef9e1ee95eeec--3mJ3-01RcfV-NIoOUF8R8uLgf9hIHeec1Xe9fBeh9mfEzzyUrHenxyUyUtzyUxzzbyTTNf9e0a0cWEvKdK_KKKLKOK_aJaPPOOUeKdUddLTyEukyvizjzzzGK43G3322EBkwBzkwwzwzwzwznwoKKJ0K1X2ABrpzzozzzaUWtacme9hxBcXBoeV9--7KZ5R0K1i5QpxUxzUyUzbxztyX9e9oe7eAHXe9eV--KycF0gAC-Bf9rUzta7c-54dtbV-61qbAAy---LztF1oAWqEUzrzxzbeXeecf9V-94pL6xF--Agu7--4xl31226aIBogfABfBf9nxxMyUztttttzbbzbyUtzbsX9f9e99eeec--5HLZ-A28MQry9f055LVqKKPKOaOddaKaKOOd_bizvy_MeOOOK_LPPK42BnJFzszEo0G4aLKOUjuOLO__GKKKKJHKG32K_KOKbnzzdKOLOeOO_-EoJG5KK_KKKGK2wzElGLK4K44JGJKLLLKFnLLOJF23dLLLK43_OK_KOOKFqKOKeK4KG43KKGGGOKKGKKJKKKKG0OKF_FOK_OKKKPLJK_KLK____LKOKKOLLMjidbzzdPPKOKJOG2pOKOKLLKOUu_PUzzzzYwzwydKdaOOKKOOKKLKaOK_OO__aEeOLTdzzEBydaaKdbEnzjfBnuzdPLLO_OLLOK_OLLLUzEnnEnzEnwwnz42zuRzEwwwwznK2nnwzEnEEEnnwzEzvdKKOLO_OOdOUEnwznnzYwnkEEzyEiuUvjzzzvjnyaTyuiz02yyawBkyeQeeOueddaUibuPJi__9gwnyaOOPTvuPJTbeLzEiYuEiaQEeRydiddddaJ-x4K4deadddaa_daaOdaOaOddePaPOaauddeufEeaLiuOfevduazjuzfvieeeuPueefiviiebe_3KvfjfEfiveePivjfiuiE-FGJ--3--4-FFF-FF33F-B-22vjyjeauefeiiuzefujidavuyuivfiuuvfeeuePaPiuvvjiiyyzyivvvvvyziyvzjzEnnEvyviviuvivjjzvjyyzwEii_viuviuo-2vjffdKHPdivgEijjieEigzjvfYyfno3-z2BzvvjeOiivffdideeeieOdeLKbeLuOOOOedaeOeidjgnueaaLOaafeveLyyvivffiiuuiiiiiiiivevfiiieiiviviyyvvvvvvvjiuvvjefeueieieeeddveTefeaieeeeQePevedeffeuieeuaeeeaeee_fiffiieeQeffideufj3323FwEjdyuMeuaveTuQeuLEeudG33_eLVzizvdjfzi_JibeJF44fzeeu2vc3BEfdvdjfy_vvfyEvd_TyfyeTgyY2yzFF-wz2zJGF3F-kz-F22Bn-0GKG43F-2BwzFk3-BoFC4300-EyzjzBo3-l0-zzzwzwzEBk2B-440-04443-EivzjjvzzwwkkBn2-B322BB-zyadY2-B2-nBkk-oF0-o-o2wBnnBnnEsnE2Ezsnvzk2nn32-nB-kk--BBl-2-23-3-BF-B-ysn2-kBBnEBBkn22-B--00-00GKK43GG03JG43KKOGJ_444OOFddF23BJHJGGGJJKOddG-kBKHJ44G-nB-K3-F3-F403JG3GJK45KGdGK8J3G44-3G04J3_LK2B23JK8G3FExKOLK__KGG4KOKG-3K4OHLK_affedaK-G-n2-F-wn3_aO___KaPJ4aOeadaOaLdG3G3GGK5O_OOOGGJFG3FFFF-k-22--n--GJ2K4KK_KKG_KF2n2-2-C-nu22-2-nBn-KKKOK_OPaeOdd_eOK0O_KOLJG44J33-FFF3-F-2-B-B-k2E202--n-wnE2yEEEB2ynkygEfynEvijz2y2GJ2zgzEgwygwyzvyigwwziiiveaaidfuuevfiE22-k-0---F----knBnBnnnnBnBwzBnnEwx-EsnGJEnkCJBBBFkB22nyaLdfeaBknB-EsnBnB-zznzKK2nzznEzx03BknBnBwznByEwzBnzBynnzjzdLJ_OL_aOigwnnBnyEnzEEnlGOJK4FpF-FnBOJGFzywnwkoJKOK_OK____aOJBEBwnEEEwwknwzzzzzzzzzzzEBwnnwzEswwwk-nC3LK2BLKK2wznJK4JK23J4-FzYsCG2lFoJEC332JCaOT_aLPJ8_OOJ34JBFnFwBEK4JF3G48K_4_44HLLPdaPaeOOaLLQiuudeOdaLOOOOOLKOeePPduOaOdGOdGJB3G2FFnBB-nB4K4_GG44GJC3GJK4KOKFwB-kG_F2BknBnnBwnEBzBwwnzwzC3EzwnEjzEEEEE4KK0-zjizwwwwFzzvih-yC02yijEnnnwkF2Ez2CJGGKKdeOKaO_Gbd___Fo-nEB48O_aOG2k2pK3EBzF2042wwwnzznnEEnlK_4F--Bnu7-D5P0Mj4-NFneHn99fHdEpA9e1mrUrMMy6rbyObacVUbsXc-95VQqU-0RC72gfrLTUX9WL7PGHOKOLKaLLO_aOzjzdKK8fyy2yvzzzzjnvEyszn-yvuyji_KjEzfvvdedLOOK_au_K_8KK4O_Oavznwzj2vYyiizdQjjyvjvzjnFJ43FEvyyvysEV2vkG-oJJ-J2vC2nzfvdvcyvB2EgwkznoHKJEKF44K444Fwkzjx4JEwoLK2EGKJ34KOGFCFK2C3GKKKLujnzuK_aK4K2Bl0KK_K__OOd_id_032E-wwwznKK-5koy5rxzzye9XeV0NQGfQzp409Fr2emf9gemeoemhxzoeenrzzzzzzxoeeeeHeeemnrUzzJr6zzzzbyUztttzIzrzrtzaP5Uxy1XXc7TOVNOcXemnCBoeVOX9IHeX9ec9V-7QyMR-O2VLYCrzOcTXeV-7R7oR-42W7vEc-16Tkb---xZJV2sUexOjjEzzlK4KJ--2yzH--10C8--0-gFV-7VNER-038rYV-7WePR--3FiX-8X7VOizvlGJF--GAnc-q7b4qavzwz43KJ--3In9--193W--G5YBk--7uzo-03SVI---Z6nF-JH3JgtV1NZFfOiznCGJ-03ZUnV-NZy-Ok--HUC7-18Epr--G9ncs--8SB3-23innD--1O-0-6lCPTmmnCzzbWa9c--8glJ--3qO1-3XRYCbzK-XlIJjmegemef9efDUzwUzx9fHfBfxyTTTUpsTUxzWttf9eeWtzu7-19Vk6-2lJH2nUze9VKcf22OuK5ObzzuOLKUzviaKzzzfzvwwzEwwwzYBzB0GF5JGaKOJOG__3a_OJBG4-PlNXPmfBnBnBofADUzJzbbbbbzpxzbXe0ccX9Bc6s--1mmx-6lYOwmextzUrP7cc-5BSZbV-45HC2T7-9BdhMxF6JOkqwemmmmf9e19nJemmmenzryUyTTUyUbbbbzbtzue7-qBstqKOOYvEEBo-45TmAqV-1Bzxq-CGcDCxzS9dEMrxowOX7V19X-6YINKaOgnk--leh3lV-cqZnQo-AGhLznASpxpObxa-cXcXV--sj9F--RjYc-9DO8aRk-JRodC5V1Ntt6OKvznCJ--6Flm--Yf48k-BTXJhc-LEJ7aTYC-0BTkwjJhyP7P1LYtQd_KPPLbePLnuafp-yEeddzzEuOiydeKOGdzeaK_jzjjuKKaOaOUEnynBzvnzVyzzEE4FnBwBGGOJBF334G0-3JKJEknBBlKKK-wnCF-RUIqgju-4Yv7daLnB--6voH-EYxyt_ueaYBBE24F-wUjugoqOWc09F4K5OGOOYyzBzElK-1m02NnLNP--32h4-0m0qgnqV-1FPCq--H2Gus--FRXJ--7Gue--38td-6H3zimfGzxLPWaX--3E7C--16gBV2O3CZOuLecn-n3--RX7jgyP--3G5C--18RXV3t3nbP_3_iju_Hz2-B-03XWAgfxyTcV-047KF--Xjy7--GPHJ0W7iC6CSKKIICJnCBemzqUbV6sUa5PX6w1711-V0d4t8OOwwo--7o-P-3ZP3pin4--1CVBV-85mEN0d7rPv9hEIBeXrICxpCAIBtxrtbttztWV--UWc7ec--ZRVOk-3Y_fi--3SWl-1HE1urq7V-06YZF0JYnKBgltzy9c-1GuEq--1Ey3V-87P_R--8B0X--3aep-1HIL9xw7V-08jeF1RZt2BoxCKLV5NOaTeV-LHXk5OUn-3B_KjRnEJxK6xSIBnGsOV5-5-N7e0PZfppdQivevivviuviuvfffiviiiuuivV2vxJG3G400-F2zoG43G3G3G43G3043FJF-B_XHC--1HrHb--1Ml9V0OBPSTykK--mPGuw--0CdCF-3bQrg--_-bGk--c3w7-1J1Tb-nHWSNmnBmnCBnBognAxAACOzzzUbzOzIAAEbaOtbpICxtaNHW9WWttge-Ou9dHce0uXWaOaNTc0qJ_j5Tfuiyfuvyn-43-C4GJJF-ZdZ-CEN--qKF5MivvzoGGJJ--9fZm--4NVG0OHj5Imgmgn9mggggggzbxlyUttxUxrltzzxUp9mcegf9nBx9HzICBnICCIKMbaOWa0c55OWaUlaOaUxxrIJogmqTUpK6aNNOaN0xMUNT1-XXceee7cN575ec0cecV-0P9QF-3hh-D-7_jKnaJ2nyZ-YA_nYBnBnEUttXVOc8aMCmTLLKaaLKPddbjiuievivijivfivy_PPeaeffjyyvjjvzEnzso3-F-3G42l4J-2zvEBGG00LLuJF-3KFK003GFEyxG-nEzvp-B33G_JK--muI9w-5OSJStaOeji--wBzzzKGOK-0JieNwmeCzzaV-TMQgDzvlJJ-GAk2vrxkPe7--MV8o-6At0AC5--OURXy--gjqMEraeV2OUrqueTfVFl22F--jvyN-PNAgydcnF-Yn1WRrSpppMJeYrJnrUKq6ce7WzTUzUUUNVNUtsX7VJece9XXX97c--5440-2I2OHnJsOV-1NxR5-Bn6z2mgeegenBzbzzUbtsN--0_72F--nKlc11OxXDLKKO_OKLQvzwwwzEnnnnKF0RnydBghMMNN--dOfypPMdfibveueeaPaOO_3eafd_J8KOKKaaOaLuLaLvcyEieQevy2l---GFpJFzz-ynwwzzyeiyv-Bx3FEjjzVEvV2s2ufk2G0--3FF2020003JG33F-dC_NYAASKopSbtV--77--QufZ--CxYX-5b-NCbjY3F--sGR7-DRSQ6v4--2ZTFV-OmFuQF--tWp7--Rrk3-2DRQfF-ObG_p_LKK4LQjvvvvjk3BB--2cnkV-0opdF-BuUUE--1SP5b--2fOPV-0qQ8F-JvLKBlV-ttYkOgB--EKfm-GbimObjzjzzK4JOJJ-QEW629fAEU6aT5-Kbx48aOGeQiv-nzVk1K--4-Bei-2c4b_aEF-00fX7--VsoZ--FYHH--7bwK--3KeVV-19ymF-456Wg-0cmm4s--oPB-o--PCDOOk-46F9i--7vjd--oSsBlV-uEMIQY3-0GwSv--1EeMF-06tTc-5Z2ZLk-2HUyYu-0dG4tY--3dhcV-1KhfF-09wIc0ea0y5OddePfiivc-kk---0--hB85hIq---PPqqQ-ACDhYBegf9nBoyOyOtzzxAUzUxrxzxKrqUSHnEyUzzOzbcXXe5e9X97XXXccX9Xee--1UpAF-SFcxhOX-1eB0xgo--Jd31--9KJS-9pBVymefBnKMUUaOVNN72Xdb-LMveiuLKJKMinzzzvfY2BzjEzzY3GK3FK4KOGKF-0Ji17-ueZcLLyvwzYGGK-0KK8igpzza9cc4aecw5eQeefeK3iifeyVyyaPysnzivW-yvivjf3G32JdFG5OJG-3--EB2003-C_GGF-0M4Pc--fYVJ-0L1VIV-1kjSF-0NOQ7--gXeJ--LIdm--AAXh--Kaimk--h2YJ--LYMm--fHOlV-4QMoB-1fQzGbV-OM1DQUKrSV17XV-PsGvQ--0R8xc-Pi9hLee----4n7gV0uuK8Ovwo_F-0SPF7-Tihf5jioG3-rMLqIMSxJfMpp51-Uk7-X7mV-1vH3F-0SiM7--ivJJ-4MU-YL--5j0_5V--MW4m-Ffnz4uebcnu-E0K3--4umFV-1xQQF0KULdhJnCaOX--5ji96o-jMt7YCKBproNN55-KC9-7-Pjp4LPbw---4zuVV-2-p7F-4VdEB-3g5r8awo-6q3GTnIBnBlaOaOV--kXLJ-0NJ5IV7f1wFOePedueiffjEBwB-FFFFFG0F7pWV6CJfCAHcXBnHgpIN5Ox6lbxrJpMSxbpNN7V56rMF5-7-X577V--lo2Z-0O25AV-28oRFJ__7yBm_ICCAEJgcnBdJonCBgegnJpS9XXe7nIKCSSKpxppCpKUrbzKOzaUUoUzKLOttxGVV557-OWtbVWV0a6ryX7X70cX1-cUu-Uy90zaPcXe90XX--AA8ER--Oap9--gnQdkH4b2ThSprSrUSrMSSUSxpMKpUSprMKrMKSpprUMMSrrSrSR6rbr--N--0X71d9-VV7e7WaWu1Zc-cVe95BcZe7917X7cXV7VX9eeX9--Bw-4--LXIak-9oUkasF-KdZHh5--QKOSQF-0f7Ac-DpZnLQC--5ifVV-2M_TF2_g-RhCKoxKSR7-6xX7OVh9-77uqCsLOaOKKK4K45PKaadudaaeddaejyeedeTsz--o-k0-nzuafiueskznG3FB3FG3EBnknEs4_OOGa_K03F-BBzvnywzvvzEBBkk-EQ93ASrF17--hcV8V-0ho3c-1r18a-KLsKtn9ghIKopJxGbzlz5PcOWWV6bZeVXV-erChLbuawo3F-0QgRIV0AS_oTz4F-0iqsc-LrVEayh0F-0jBw7-1raaM0sqwtimmmocCrUzKrUzbxJeYBexrSIoT50xMUUSrzrrxxxrppMMIrI9gnJzzaUOzSrSUUzxtbX7OsU-UOzrUxxSSSpxSrzxzrr57cWue-BcVX-X7X10bqN7e7ce7-7cX7eX7ecccXce9e9997eBhHmhBnBme7791-5119cXV-ATZeR--Qs0X--CxF4-2M-EHrMNVV-1s18b-0M09Rrc-3i33Gcy3-7r1pBmhExpSrcP9-7-3i6ThbzJ-0r2kLmxV-LsT9bywKF-Cl8ajc-5sg76o--RNyP--DBcS--r75Dw--AZP8N-CRYLYIrWcV-AZ_gR-hRb0Q9efBUUzzxrq7Ve9--DIcG--69X3V-2_KXF0CmrNBxUTN7e--DM2x--MBNss1qtbGTeeeiebfeviufifjG-FF-FK-2F-F0-F--6CEoV-2b0EF-pnx7hKlVX--DWBO-IrGX5pJgomd9Beefrr6rUttyNUsWaN9c-iuOLLLPjcnF2--0p_uc--uwAJ-ISZnnCIKWa---QgbdT-0_qJ7CprKy7917--Do60-0MPdwpc0LirO4eLzjezyyzzzyyzjzjzzzvvsFEiyn3OJFKKJFEwwKOKJJKGd_GKKG3JK4KJ-ESx2nSrP79-5j2XKaPVn--_t4Cgjtc-1wYGa--6ZPXV-Ama9N-CTK4nUSXX--2n3-F24thzhrHcXnIqUttxbcd97-3jCxpvh0-1rbiZpEa1-JjETd_azzgznzC_KK4F-0TTz2V-2nrwF-Ctvzgs-Dwy-LEp--Mcags11x3uLKKLPLLLOeNwzBknnwwzECF-0uAGc-ax4e5iii30---6dYeV-2pDWF-0v0pc-uxhu5KvzivnG3GF-0vS9c-Tximavyl4F0GTtRbKpKKKIMKorSKxcP77--50cV1--X-0jSM8x--MlFHs-PyMyriv3J--6njmV-AuIRR--UKqu7wjf1GaaeOdiaPdeeaeadePOdd_OGG3FK43G443G3G-nBB-En2B3P_3HKJKGJJHPdOKJO_aOeOaaQe_K4_F3G3O_8PKOeLOPeOK9TddJ01OaPPu_aOdaO__OKKaK___GOOOaLLLOd_-9PPeaPPefeueOH_Afeeeueuaeaieeeaadd_OdvvivzynwnnwnEnzzzzzznBnBzEEEEzznwzEnwzzzzvizyzuuaveuePv-wnBwwnBnEePaOaPaOLEwBknueaaMwzeeePPujjczvyvwnnnEuuusEnnEEEEzznEBBBkn2BnE2BknknBnBwwn2Bn2B2BBBkkn2--3Bk-k-F3F3J0F-BK8J-0-3Fl43J0JJFC0220-FFB--434_F02-3-FoF-3--ULK1-9jk6__KPzsnC-0rs2uxu7-5z6oLo-0Ua7Y--2yTuFFpzEegnKCAHYSIEIBgmnBen9mhJonKKpKpKIICCBopKMKpCMMMSxxtbbyOVNN50V550VN50VN50WVN-0a--0xLN-V--711-V0R4w-PfBJ-5sCnMpUSzGcVcX--36DPF-a3T2CpX7-21Rkb--7L9iV-3CdyF-D7K1E--E3yyLPB-AsdryprMSrUMUXVXX77X7-0lNuCb-0sh-cpsV-24z4a-0O5skoP--HJcO--8cjcVMwvW_PePffuOedddaOd_OLivedaLOQswwnnBwnnBBEEz2EknBl___JJF2-ddFJBB-kFJF-3Oxo3mryUe9--oNo0k-L_0tBtV-x9UXPVk0Kd_2QCCKJnKMU6Wy6x0a5OtWWaA9f9eX9VNhBeeOaOaK_aOaOOOOOOOLK___aLLLL_aLbzjjjEnnnEEBnEBnBwwzEzFnBzBnnnBwkBOJ3--9Q2JV0hFDWPTj03-0esaIV-4M3pF-DfxqCV-0LPM3-8fbYnBy5-Cq8_WadYzEwLK3--A59FV-CZXbR-2ghDYk--LQk_-0vCsPnTV-0OncZ--gxEe--LXbt-4QGLNnIMaTP9V-4d4NF0DoYGBxBttWe--LdTx--AJjgV-4fDgF-1q1n72bQ0Tq_fzyaLyy__JbzjyiyEvnzoEzz4K44GG440J0GJ--AQaoV-hj4xQW--QUtTs-0QzBZ-2hzuIu--M0W0-3QVpXzUSX9X--r954k-6-LVD--s6udk-U12pBUe--NKbO--B9nkV-55gUGAILAU-ee9eeXeeXeee9eeXeyN9eeeee9XAzbzzzUUtzxzrza1fzrzs7Xe9XmeeiUzrWztzbzzsUztbyUUrztzUzzyUVfzMzzzzzzzzzzyUzzzy1SzSxzrzVczzSpUzbrzzztzzzzrzzy1cXXecXe9zzxzV9eeee99USzzzztzSzzzzzzzzzzWtzMUbUztUSzzzrzzsD2xzxrzbxrzbVeXUzMMzbztzztyUWVX7cX7X7ccX8rtVX2Vc1gVWrVNOta1UbbaT6byOyTMqXggpFemnBnLpThScXXopfJppUhSzt_USUrxSxSzUUKwepzznMzUwefMzSCJXAKRemgegeeoeeeeeeXe99eACMxzUrxzUzzzPmeceeeeXeepzrzzzr9eee9e9ehUrxzrzryUzzzxwg-3sRUlgzK-1wGfBrUXc-1s_20ck-8lARQMsc-6sakWaUYsG--BJEyXtygSR0KGMwzkKK_KK_KJKK4JRnEEEEzEnwznzwzwzzzwzzwzjw3wkznnnkKOKGnEzwEEwzB0wn2vyizz0nEEqPvnzzzwjjEjzEEwznzzEzzwnvz2jjvvzwnkTzzzj2vznzvzyzzyzzwzzwzzwzwzzzEnwnknzfjvuzECfjDzEBBwzEwzEwzwzzE2vfwzk6njvw-nzEEzEzyzvjvLizyyzzzyzzzzzvzzzzzeOPPKd_4aPuwnaLK_aOezjEwznnn2EEnn2wzzEmwznzEn2nwwzznwwnywwzzvzEznwwnDPzzwzzzzvzEvznzjEyjEEnnwzzzzvzvzywviwzzEBwzwzzveznyuzjEzzzwznzjwzjwwztfvzznEEEnzzzzzwn2BwuO_fizzvzzjzjDywzjjEqKfyvzEOfzzyLjzmzzn2hPjjAwzjvjezvnfzzzjAzfjjqKOO___OL_KKKOK_LKLO_KKaKKOaOOLOO_ePLiKKKLKKLKKLOOKa--wN-ww--DBg5N-4latIyc-MYUfaRyCF066q1CJxa5X--5F6mF7z9BugfEUSrSArzxBefBeJcrrzbtzUzHmfUzzzttVX7X7XXX7XXX9--yKGGTsF-2mkw2k-3tQstjx4--BkdsV0DNK7PzGF-6B9ki-9tXkO_K_zznl-0RovXrc--OeZW-IRqTXoeXefUzzzxHYUyWzzzu9XZmZe7-1tmAWzJ-0nbeYV0DRxYTvG--2Dto7-0bYlJ-0nm6v-4DTdBTzyzvzvlJKJK4K-8wxJTrrrzrzOceXce9V-DTg9R-dnsbYExxryUzaeeceec-6bz2Lk-2o5Gnu-1u2YOv3-0oCyAV-iaLAUp--CCXRV2Db2oOOwzvnpKF-ppYW0bVVaOyUzzzrxpxpzPk-2eBMb-8xGoerUUxzry9Xce9XV2ydQ2OK_OjjnBwnJ--pC19-2uliNEyk" :
		au.pX === aAg + 2 ? db =
		"JJAf2uP6y-0nEiiuyywnyueuTbfevfvvjivivivjfvivviyvuuyEgzjjzzvviyvizvviuNziyvijvijfvyvgzvvvvfeu0-F-n5a_GG4KJGGG3G3G3FFJFmKGJ4JGGGG3GJJFJG3G3G323G--kLPeduaKGFGGGG443JJJJJJG--B-C0FJK__443-BJ-66wmpBnJopCMJpCCCIIIJoopKKICKCBnCKJgooopMIDOzzSzUzbzzUSyTUxxrrrrrP1XcXXX9Hcn9cceemece7cPIoeX0sWWaOWVNTOcTNNcN0V0V5-N0aOa-0V--N50a5Obyc-M0z3TPOdgBnBF0NOpxpMV7-M2mMiLbinz03F0sTx8mfrNT-2l6QEdMwwp-5XX7UMTP1V1GIuvaNn-5Xfxrpw5XV1GNTEfn4-_XvzjAAA9mfA9ed9fpzyTUzyUaUyOX3n59NTKLLKHPPPO_LK4iidea_O_QeideeaLOLLJG3-0eeddOaPO_OKLKzEznzjgnnzBykknByEYnByug-3332ElJ222-2wBko2BnBnBwwzwx-9Y6j6rrrkccc-E5ctEizpJF-aDYgSMGz-X10G6VyjiyuuPeiuzjivh3G3K3G--k-9JGFAPEIZSKBghKSMIpKpCJnI9gcXeccehHccoeXBeoppKIJoghIHnCJnJmemmecmfA9jyTUzzzbbxbV0WaTT-OtWWWV0zxtyUN6yUzSxrSqTUztaN71190V7-5V15VUy--V-lxHEg--33oL-67Dhyu0--3FoL--7ahw-LGYowfzu-0HFMIfF-aHWWwxxxcXX-E8ZrUdfVl--TIJLzSr17V0wcDLvivjysGK3G4XaJb1zppIJpBccccge7fUxx9eocX7cXX6y7Y99Heggen9nJdAHp9Xnp9IIJfICIBdCKKIIMMJme19eXxxp9X9VVfEMMMSBpooe7XCSBomccxxpHcrKKCMHmXXmcxoeX1mpJe70BrMJmVV--gxExIpJcX71nKCJmhCKKCIJoopCKKKHX8KHd9nKrKBj6xrSrKpz6xSMMSrKppwObaP-UzSCAICIKCIKKKCMMKKCpCMMSrrrKpKprUSprMUSMrSprKrSpSrUrUSxpxprSrMrMprSSSppMKprSprrSrxKSUSqUGbqUbbrxrSxrSrKHXXeggeYBnBgmnBnKCrJnKpIKpBnKCMMrSS9chKKIBeX77EIAE5OxIIKKKIIEKSKSKKSKKMKpKpKKSMSSSSrSzxxxzlzzUzzzzzUxrMMMMSxxxrrxrrxxxxzUzOzrbxzrxzzzw6w6yOtttttyUbbyTTTTTTTTTUtzIrzbzbzbba-71-VVV77V--7711-V1-1---51--1-1-V0cN-N5VN1e-ee7-1mc71Xe9fIBcVV0WbyOzxX-VV7VNN5TUzUu1ce9menBecmf9gxHc7c7V-777---50VP-V-N-0WxppSJpr6zyObzttV6rMKpUyObttbryUbzWaP0sNNOX757X97X7ce9XXXXXVc7-V-X7VX5-V7eeA9menA9fBnCBnIIJoorMIRObpIKMJpppSSSMSoeX71-V7777X97c5V-ccWV0VX77--NN55-N--7U5111cXXenBcc7fABgcX117X7c-gf9emV---1--XXXVX7X17579VVV117Xed9XecXX--WV5Uzz6zyUzrSrUUaNUlxtzXXXee1777X1e-5NOy--WV5OttttaTUzyUrxxtzzzlzMUrzzxaUttbbxWzxpSonBmpCCJpCKCIJpJooeACHpprSxaOV577U6sOWV-NNN70WVOWzwTTT5NUxryUba5NNOba1cc79cXX199X-91X99mhIHfJmXgxxxpHe9XccX997c7X0zV--V-N7P6k49V711-111X-77cX79mmeHeccV1mdbn_Uno-DKNVSo1-O9kaiKKzzEzpK-8_SLEzzzeeeV1Hinzjh3-8_UsM9mjtyTVBHk8AfiyvivizpG43G3GG--0OIzV2mnjMaLEBxn29mc4SSpprSSSUprrKprSSpppKMMSrMrxrKIKHhKHfIKKpIBpCIIJpIJnIKpSKJo1AKKpppxprSprpMKphIKhMUSrCKMRpMKrrSMMMMSKUVUxxUxSJe19efAKKUbKnMxKKUKIKUStaSrUMTUrzbzxxrSzzUy5SSKtbqprTprzSxxSrBXe9ghSrMMUyUzzbySKrUKpUSpSUMtV---D--0aN-X9997977VVe9XD-19XX1-9XcXXXXYxzUttzbV-7VX78by0rUSppKMbs5-V77V77X-X71--17-X-7V-0WWVN-6byTOrJepKpSrpxrUSSIKSKSzrrrs797c1711ObUSxxpSSSSSSy5--7997VV6z_rrSrxpSprs-7VX17XeXVXN-11-TUUSxztyTT5ObzrSSrzbtbbtUKzrxrSxzUrzUzShKhMKrxzzzxyMtzqnAA9mgfAAACKICBnKzbbWWbaOtbaOaTUbtyUyTTTOaOa556zyMxrUtaTUzrxrrrzSzxzbta5N0s-ee997cX97cX7cX7X771-V-aT--V17V7X1--V7Xea6ty5T5Mts5--5-550aT55NU_ySxxta5OVD--0VN5NND-N--8a6a5OsN1og55OVVOta-75OTSqhCMrBmhMbbtzzzzta--NN5-8Us0V-N1eD-XN0VOKppraT18zs0SyOUaOa5OaN1-VcX7X5OSpSxpMSra5NNObV5-N19cVc-W_KMSrrxxztzsND--MJpKMrzb_pyTMzUa5-0a5-X-VOIMMMSBnKKSMrMzprzaQBen1ceeXcccempprtzUUSv9mmfMrxzUMxpUUUrzbztrxyOzUxrrMzbWbJppSvC7gmenA9mgggfABgnBf9nBppUrttbzUzCKrSSxzbaUxPfMSKpKnJhRpIAIIKrSzUMMzxztyTObaTOWWaTTTUbzzrza5ObaTOWbbbUrSrStzyUUzbyN--s5T2rs-1XeXeefBn97VfBnIBemf97cXcX7bWV1111c1eiN7f-ABa6s19n77X7g97cceX7f11UzUppry-N0MMAIKzV4UW_rJoppza55-TMSsNObztaOa6KzV-77N-SKKSUzbaOaOyUtzzzyTUbtzxrsOaObtttSraOWaObzzzzz_ptaUbyMzzyUtbVUyUrUzzzzzUzzxyQMzzUzzzeeeeXee9Xeee9eeeefKMIKcf9ggnABemefCCKzrLf99X1fABgeeXAKSSMKxxzUSrSraMRpSxrQA7X7X9oopBo1N9gnIKCIJmmmnKIKJomn7emfMBc51997cenKMUzPmegmfMMSzzyNA9OzzUUIKMUKrKpSSrUrxza6SrMSrrMSrUUxzrxxxrUSSzSSxSUSxSrSSrSrpUrMMUSprrUUUUSpKrySzSrxzzxpzSppprrzUrSpSSCSRprSMKKpMKrMKKCIIIBohIBonAAABnABmgemhBmmmeenBnA9X9ecceeXX7Xemmcemgef9nA7en9kecee9eXeX1-enBkeX7XeXce92VXX99ceACBn9XX77XVVV--X7XemmgeeXXX997VVc75OVeX9hAAA7eeme9eXe9Xeeee9e9ceemmmmf9meegfHenBmfBnA9mgggemnBggfBnIHmmekeeceX9e9cXXXmoeceeXce9Xce99eXnBpCBpSrSrSrMSxzzxyeeeeemkeemgf9pprUzUHmeXXem99e9eceef1dbs17ecepKrMgg9XeXccX-Xeen7cXeenBmnBghCBgnBACCCMCKJohCCMrzzzyUzzzzqognBmnCKprMSMACKpz_wmoogepCKrMSMStUZkeeeeAH15-11-X9hCKMSRomcgpKzprpprs0z_rKppzrSrzSpIKIBgXmprrUKIKKrttpKzSUBomm97ghJpSyUzSzzzUbzzUtrzfAI9epnHceceemegghUUzxzWbzzrbTopMSta5OVOrzzUSKUUxrsOrpxQCSrIIKSxSrSzSrzUrUUtttztUtbzxxMaOV-sOWV5--NNOUzUzxzxzUUrSxrrUSrrSzrrSxSprSppprSpxrrrUUrbbtzrbbrztzzrbbyTT6bSyOa0aTOaOy5T6aTOzbzpxxxxpzUSxs7XESrKyOUrtaOa17zyUaTOaOSxprKCKgnIAAABnBnKppppppJnHnCMJnCCKMSrSSKKICCKKKKppKo-2AYFDB--MPns--j8uk-0TwQV7mzO6ievyyvFGK3F--qNX0zxzxrXce9c-3mKUw-DOJuzw9-lBkNyuuuviyzjJK43G000-OaPJEprzSKMrrkccc-1997-2C8pDo-uPOqwf9mnbbtyTV-2Jzv--5gXT-CCmSUvvGG--5xsy-0D-rE-4b-qzSqX7--sMmk-0lNEV-IZ0nk-tm6EnFN-Rt3BvgF-5ReOUc-otNAvisG30DRoZzUzzzrwP9eeecc-3uJps0eSSKRrMGzrzrrM-V-eXXeX--2fpn--6MiT-0DoXD--6ULD--E2lg--TGhs--wrkk-0uNAV-npyzx-0bkCEF-6EeL6jG-5bpJQAEbaV0nuubvp-0dya3mhrk--BzMKzF28zMOzrMUP779c-gziXufkG-2byBQrcV-J-IhV490elopIKKJzlX70V---2FCPyV-HVlaxpX7-x0_hzvvGGF-12_CV1o6LCaeB---Vy4s-K15tuR-0cH3EP-AFalyPf--1u44Wxxxr17cc-CFkqTusBG-2cO5jMcV3oE3YuuiB3FF0P7tWrre9-4GLRUh--19rRV-JN8nk-1B7iV-3OQA--cpNzV8oQxrjjizyyw4KKG44-1d-ezGV-_77wzvGF0eJQZmxL0V-C9jlvF09OI0rTX--JoI0k-PTDyyV-40oK--e5AbV7K29M_OLMfgznEB4-IfrEMASpSUSq-7-Nee-ANaSDyx3F0A69npL--1qoP6bvVF-qtlNxCKCUa0V7V0xqOguudaNznk-G3-Lvq2RrOc-2N7SOfvlG-2g3LFmnKUrla-7X--Vg031A1AJgoxMSporMSSr-XV--10aNXeV-y7CVQfz0GF0RIcNptae02XdsiLTezvzyyyzjzGGGGGGGGG3--GRVT-QXt0TTyyzwK4GJ-r5K0genCxtwT-V-yBnotTvg-F-RR4WyVBNuCtdejvYyi-knBLOFJJF3BSAjnMSzUbsX9XeV3t0vf_fzv-GF0wZ8bxrOe9--8AQA--HN1m-CZlGTLRwx-cmONzIxrprppKprUyUts-XccX1e97cXc--_7pw029QbgoonJUROV5-V-iJrguik4--mdjY-0tQAdaRk-BiCss-aMQLTjJ--3jUaV4tUqAvjzx5KGF-YB7rwfzwOeVuOXlO_O__Kbj2vizuviyuuvfeveTiviynvYziefiiefvfiYvjB-444G3F-0-2-kJ304K3GGG3JG34--F3GJ-IBbGxS--3yOw8PPd_GaaiC-Eueibvyvx-304--C-2IBzcggmeenCMSrwOaOzKHmnrUSxzTOu--V7VVV9c-yPFVPuf0-F0gt0ZpKs17-aTPhOiBFxRy2ZmgnJeeXAICBnBenJzSrKKrrSSrKpMKJnBnCKMSMIKMrxSOV0V0zzUKSpppSKSEKIESOV-Oa0sOzUrMKSppSUMMkP77V-0a1--VP-17--71--7-UxSrrrrSJpqOtzzOX770hBcX7V5--XXV11cc717X7X9XX999777X7e-_chDLLiiivYEl33G3-Vock29fSpSKonCMU5OaNV-NNX7c2DaQYtPjzvjfiywGK33G3G-0xDlzpUyX9V5PSx2jyuzVGGK-0CFZWnwNV1uXF0_fBo1IJJoSSJnACCCKppSxyUV-117-N711-6evlav4-JpSyQKUSSSpaX517c-c-yg6luPzk3F0CNJQpy9-iumBnaLKKeudOKG_KLKLLLueLOaQEEjEjyinEyzejjnskBnwC043F2-nn2zE2EEoKGKFASOdporHX8CBhzxraUqUzSlzSX77eeeXBc0V-LhikvW--KmlL-EfebDLTskk-YMe-RrMTV7V2uyCCaPEBC-5q1sjK6a7V-A2Ih-Aq892rMUNP7cc-TlB1tv--ANsVBjV2v6d6aOwnp-7qIGAIJlaNV1imQQOPszivwzE8GGGGJ0vODuRhCrppCBpULN5N7NX90WX-6gppqPk-GqSXfBnqOxtaUemec-5nnTs-YPD2wz6re9-3QGmz__bnno-2PJQD-KhKnTaaTn-nF-0Pg_N-aphUzj4FKhhRbmhUrKHohIzMpxrpKKKSMKSKxrU5N5OaUL--X11777Hf9VX-N7--5P-XHXe-0hhca-WqtqMCppppSJp6ltz5NVXV-X17eV0QUJbjJ-nREfwnBwOtbae-IiGGaLPvEk0-Er7eI9nCKpUa0V--1v_ZSfcl--0T7Zc0TwsLPNzgz8K4--MdCP-8jMTqMno-QTv6BfDUs-CjSgLdjBG--rknYV0vttlfW-0CxT2mcUV6Qv4daeffkn3J3B-EUOXBja1CjifiOvd_LdKKaaOaK--nBw8aOFFeeKbfivzjix3En-2Ennz-n-3-2UYTi-bkAQ5LLKaRzgwnznGJ-MWJCRr5NV0wBylcwF0D6jaola--BJZx--NfgX-6lRkav3--sx_2V7RUnUaK_aLLQjzzz-atBrI9mgmnICCpCKLTOaOzs0aNOWV9c-E9stskaiM_-pIJnKoxxzxzrUrrxzUxzSrUSzSpISxzxbxzzzzrzzrzxbzrzUta-0YBe7mf9eeV--P9eee7XXcecVXeXceA9eeeXX-c7T9Bee997n9X-0wqC2ylF4iQ5frxSUzJzqNX9cX97V1wr6EuslF-YbY3xSUaeX--x1Jxc--uDnn-6S8wKaPedvn-FFB-zea6RfESrSq7-WX-6pPVqNx-dun9rIIKMSrSrSxxBzbts7XeX97XX7N---2MXGF3ilDMnrSppGa50VeXcHjS0jOLKO_LOaK_K_K_LKK_JKK4K4KGPedaOK44KOPaK_3aefffeTzivizzzyuvkBzwzszEEnwnn-nzyzwzv03G00-B2EzBEBwzBwnEE2-ow4SEIJmcccxxrUJnBonSrrztzyTOts-9X7VX7X9-YvBN2wwwwzvvjjzzk0zOXTUyUxzV" :
		au.pX === aAg + 3 ? db =
		"C0DX0NP1V--QqeadnzzjynEEzzjjivdivfezjj2BBwzwnEzzzzzEjnnvYBBBBEBnzz-UV-hflzUUSrrUzSxSxzk0a1-V50K-0pMiudevf-zvfeBnyviVF-F33-yzgp3bVV02IKUrHnUzzpHz5UzUzSKrUrzbyNN-OzzxzUUUSrSrrrtzttzWaOaTUzSxxaOaOxrKBnCSKCIMSKKKKIBpIJoonIJopCJpJpCCCBnBggeXn9eccc9X7geXXn9efHfBnABemcXX9eece7XHXeXecegeeVV1ee9eX9ecc70eXcXe9enA9fAABnBnJpMKpKJnBnHmmeeXX7X7cceXXce9eeccXVVVV-VeXe97Xcee9f9eXeXXXXceWVWBc29cX7V-6aOaTOWWV-1XX17-NOtWaNVnBn97X-7cf9mmnBemXgece9I9eXXomgeh9eX99eeeemf9BmmeHgeeegfBggmnHoeABeggnIBggeeeecVI9eeemeXe7cX1-ZmfIKCCIJooonIIBnAAAA9mmgnIIBnBpKCBnCCCKKKMSKJoonIBohBmnABnCABfA9gd9mhBopCIJonABgmnJopCCKJpBnBnBnCJnCCCJnKBoggpIKCKJ-UMSGxrMMKKIIISrKpSKKKKJopCIIKKKCCCBnIBjSrSSpKppqUI9cpKIKrrrKSzyUpKpMxS5UKxMSrSxxxpSrSKpIrHxrSMSzHfrxxzUUUSxrSrSxxxrSrrSrSrrrrrrUUxryOtttzbttyUzzbtzzUzzxzzUxzrTTTTUbyTTTTTUbbxy0byUtzyUzyUzzzzxzrrSrSSSppSSMrRN-OxpSMztzbzzzVUrLUSpprUtxKbxBfrSKJpKKJonICppKHnKKJoopKISppSrMKrSrrUSSpxxMSxprUSMMSSpKMSttzzI9f9hMMMSrKSMKpprKKHnCSSKpMMSSrKKKKKCIIC9gnJonBpKAKJpJpBpKBnCpMKKCKCKpKSSSrSrMMMMKrMSSMKSSSprMMMpUKppSJpKKKKMKSSppIMIpKKMSKSpKMSSSprMrSrMMSSrKppMMKSSMSSSSSprSMKKSKBmgprSSppSIMzxCUzprMUyTObbyUzzzaOaUzzzUtzzzUUqOaUxy0bzzzbbtaTOaTOaOaObaOa5OWbaOtWaOWa555555NNOWaOaObaOa57-6WV0WWV--O97VWWWaObbbtyTUttyTOaNNNHV0V-N---9-V-777579775-0taTOaOaObyNOa5OaOWbbaTTTTTUztWbbbaOVOWaOa5-5N-7X--V-517T7---7-Wa0V-X7ccX7-7-77VV-5-7-5N17X7XV-0VN5-N5TNNNNN50aN-5Oza5OaOtsOWWaOWaOWaOaOaOaOaObaOaObaTTTOtbaTOtaOaOWaOaOaNOaOWWWaNOa5NNNN5-Oa5NN0WaT550WaNNN--N0aN7--0WcefIBf9en9geecmmf9eAAABgee9egfBgmeee7cX7X777cce5TTT-VVX1cX1c7197X977X7Xe79eX15hHX11717-7-V-V71177VXX7X7ce-V-1-1-----117--cXX77ce1-VVV-0u7X777117771177V771-717VV-977X77VVV-7X-OWxpSSMSrMKMSSrSrSy5150WV0V5OzJpKCKCCUzSrSSSrKrSprMKprpMUMMMpKKSpzSxxrUMSSMKpppSCKKSMISMSrMMUUrrSrUKSSpppMpSSSpxrrSKrSpSMKKJhSMKppKKppSKKSSprxtzaUTObbaObzzzbyUby5OtzrtzWsObbbtzttbtztzaTTUs-o-9SuvkpF---4GN0--Akuevkk-0Z-5DzUUzzUMMSrUUrrxzzV0k24nbEF-72uPs-31lfR-X0zvBgpOsN---Fjh-1VahUR-033plvivC44-bVp12CUzzrxpztzzzy2A979eeXd9eXXVGkPch_OLJKKa_OLujjznwwkzo-Eno-q32WRrMKpkV7-V--7jXk2-IvW9e-7xySpV2kZ-vaazk0-HWAOjKHprsWxta7ccV2FavYivl3F2cIsAppKMwN117X-81g-ifoF-L4N9UrkcVDFfPz___bjvjjEB3ByvEGJKK--WQlvV0kn8QjoF0NPnGrScX-E2V6yPuEF3-D6-ISGX-42b3rh-0NYH_ooy-3P8eEOJFGGIB-B-0-2043LaPdaeeiZ30003G002j-03-JGFGJ-4K-03G-3303330NBzB-UzzB3DvzuzByyfiivieivifevefjzyw-D9vlxqX-A58vaOYw-07nF-rFPV4lbM4aaabBn3B-mC6fBmmjSOa5N-25o35o--CiYN-gQSZPTw0--2QiX--66YJ-9FT6CN-BHQ8jadHQyddcyvG2232-F-8Hr8k--dcfk6dIezn9YpIBhC5Oa6y5UrWZmX70C2JVtUzzp4J-mXEjworrq557e-6IQmyv4--dmmEV-JuCMk-9SVlk3KDxRuPiueObi_JGTyycnBk--4-BF-eicPos02KqRDLPefeTiuiviuk-K33F-----6f9qfBnUWV-jMD3iO_aOaPOiwBnBnn--0evOEn5U5c1_T5ktLKKGTvjzzYp-w0Rg9s6ABmeWBmghJonKxCIKIKKSKWa6zzro5Uxltbe9e5OtVOWaN-N6w6y2ABcX17cXV-SWU2PBo-alHDReopsOa-OOYdiPPPgnE00--BsPu--Oo5J-5oKjx-AxeUxtaeeTeeffeuePauuvivijfieiivePgyvvC000000-3-3G35JG-2BF0-30-2FFFF--3hlWISD1-ER5o5evV0-0eu7_RjSSprzrSrcX7X7X7X--6KDt-HirDjBnBnKMba5551-3rQbzaaEBnpFJAmhxnKSSSSKKKKonIKKpKpMKrSKIr5UrNV79V1----V55N-1V1-7-7-X79-IUBriLagwC2-3jm7YKkV7jUvJLaLMeudeP_LPK3PfeaLeaa_F8aaLLOaO__KHdOK8__KeePOdaaieeeiiefifeeddddaaPadOPePPeeiiveueaeeivfeiuyzjvvizEBwwwzzEE2-kkBB2-2-kB-2-B222-B-k22-BB2-B-BB222-k-kF-B22Bk0-F32nyevg220-FF-0--0-F003G-G0-Cl0ab9eefxzzba-AX5ODuklF2RKFUonyUUaPXeV9sgwrddaLaPNn2BnEE0F3RULpn9opxbbbtXVe-Y_1riO_LKfvEink--0BfCIpy1V" :
		au.pX === aAg + 4 ? db =
		"EcA20EP9t--46idaPadePOddiaeuuuebieeiiivuO_aRnufezijzzvzjvfuuPKJFJGG3GPKGPOaTiiiedaduus2EYuiedn2nyffdv32--0202EzeRwoG--Ezzjevck20202zeufik43BFBFK0G4-0_J--nyioC03-0002-n22wyddyjfzven3Eyv3JJ20-zynnEyjnnvjizjjejzyy_wznnBn2zvnzyvzBl3GG3G--23FFo0-wzBB8m--ZISrMUUSpzrxxrKrrSKpppKKIACBnAA9mmgfBcee9cXef9geeeXVf9999199ge17V7Hgce7c15ABee99eeXegegegfBgfA9mgomeecXcXgeXceXnBrxSxxzHecefAUUJceccgce0AxBeXXXeceY9nTUJgoepCJnzzzxIBfrMpIJmnpHmc58EJmnrSbrMrUKJnIKxrHgrUzrxKCbtzprzxKISpxzU5Ulzq0a-NOzzxxzSxrprSSpxxrzrtztyUtaOaTObzxpxrUyObaOxMKBn9pMKICCKSKIKKCMKCACBpCACBonIJnKIHhKBpKBpBonCBmnHmgeme1ggeeeX17Xc7VY9e7emdBe97gfBfBfBfBf9e7X7cXeXc19eX-ecXceX9Vf9cee7V-P1e9cecX7e9X7X-0XcX7c97e9V0--O6glDk-BjnBnJpKKMSKrrMSSpSSrxMrSSrMKMprSKzUzzSI9cmgonCKIJppI9YKCKCKKSKKSMMrrUzzzUSMSrUUUSzrzUzryUaUyUyUbxlzzs7-V15X----V---NNccX-ccc0y10WeeeeV--70V6xUztWxMSzbbc6xta11cX9X7V7-X-eHeggnCISpKHX1V1X-7-Oa-N5Xe98HeVVVeeV0X9711-3--XjabvBG-0s7nSrxGc9-BFOunededziszBzG0-G-KF2NDz6rSzzu9d99-0FVIObk153LiReenAUbbxzxzrpxq--e9e9e-A1JTaukCF07J23pq7---cVM--WN3QV1khy_awxF-H4kIRjyV-oCGnvjx3J-16-Ny-U2iSDjyffv33G4F-CWtG2GxSUlV79e--2nbB--6j1s0REhiviizkJG4-4X-vYML77-ZHJ3Pv3-1cZeNponGtV-V4lDIreOiuBl-3-DAESjT9-r4cgTLLKKOaQjzyvgn3FBEB--1pnH-E4zQyafnG--5BKbgN-3Oxws0iCDazIKxKMMIr5OVX1V7759-05hoa-4YPwIzTXc0oS4-OaOaanwnB0-qYoDA9pIrzxzpzpKzzzzUzrWVf9cP1ceceVemcc7cV0H9uMvF-eGU9USSbuX975JYvsOLKOKKK4OaLJKPueTzjEzjzBn2zj3-Bnwn-B_HnzBpIzyNX7V1mi7bfz3J09L-pSKKCSrs5P7VX7-YBjWieueuusF-F03-0dhx_nILN-03vANuaQYl---6b56-jf6VcBknBBn-Bk2BnEBkBkn-BnBkBw-----n2Bk------kn04GKKKaOaO__KKKPLOKLKGKKLKaKKKKKLLKaOOLGKKK3KaKLKOaKaOKKKG3G43G3J33F3G4G4JGznnE2--G-G3334L33G43J-33JG3KG303F433GK3K3GKG3G3k3GKOffaF--GG-FG3---F-3I-3F0-0303F40GGG-G03GG4FF0--FF2-----0---k-G-F3--04343G-G3KG030-0-Gk-2DwkG43F3G0-30-F3F30-00-G30-0-F-3--G33I--03FG3303F3-I0--3F-nDtfefeuvfideeviivfiuviuzwn--B2BBB22--wn9PeLeeLeaPOfjzyvuiveuifhfifiivevefffjiafjiuifeypeeeiivejEivjiivijfiuieiiueuieeeeeafieeeujvifffiuzziviuzivieifiififPivfeifivPvyvijviefivevevafieeaOeueevfeeveeeuiufiaeefifivizizzwmznEzzBnEzBnBnznEzzzzwzwEzwnBnEnAyzzBzzBn-nEnBznEwzzwnBnzzEEzBznnnBznEk--22B2zkzwnnwnzznBnnEzzzmvwEEBkBk-B2znEzEznBn--kBnBEnzBzzw---4--2-n-RB2Dvfzn0n-kB2BnB2nBknBBB2-n-3-KK3JG0304-G43GLJJK_K4JJJKJG3F43G03F3-Fk3-3-k--FLOadeOaOaOOaPOada__aOe_LPaPOK_KOGGKKKKOaOKKJG-K3Gk--nB-FF-3Rk-JGGKaPPeaPPeuieW00-FF3G3FFF--2-J0-GJ43G3JG-0KK2-3G3G-3F0-3G00-F4N2znB-3jEzzBk-ivzzfjEBAzievivivieevivueiuiuufivzzzvivzuivivjvyvzejvjwzzvyvzwnnBzn_ejEBzzEB2-LOKOaMBBzzBnzwzizieveefifieizzzvyzzznyyvzznvjEzzwzBijzjyzznDzzwnnEyznzznEnEEw2yajzDjwBvnznEnzkzEznivvheejwzjefievveyzByvnmeziuvfiyvyzjnzjBwnkzaeO_PO_dLLG4PPvjivjivjiuviyviyzjwzwnE2zBnBnB2-k--4222BzEOOaeiejxPeeuuuuqeuaeeuuefifefefeeffeuuifeveffeueiieuvfiiveufiivvfeuuiuffieeuufuffieyvjiyfeveiuiffifefieevuiivfjivvjwwnBn2BB--BBnnBwn--2-k2BBwzE---0--0B3F-k2-kBB--k---JF-3B---3F03-k2--wkzEn2-B2wEEE2Bn0BB0-kknBkwE-kk22--eUSCSJrLT7V71K0YLtevvyl3KFzwGJ-DWcRRqP-hG7KyLafizivwwG03G0F-acjpSSKy-VX-IJltLePvV---PeSVrBgmoxprMRTTOa77X77-0N3vk7eoElnII93nzSKBooUSX0aNX0a5V-1pfNUugBJ-9iOdUNV-4v1z-Sfs-zBgmX8MKAxy5NOzKbse7V-0U-Fk-1y-lV-4x-6--g6bj-3L4kbaTYn2J-apmECIJlaN--MR8FTPQYEwpGF-2W9GV-62Hz-7i5cMKKGV---y2dwQvz4K-NgIMwmnUzJopKCCKKIJnKKpKSKKSKMKrMMbrWbWtaT6a550VN---X157cV-VX77VVX7ce7V-nZT45OKJLLPzjzzBz2wLJF0I80TwpCpzpOWa5P7eeV-9fnj-3pOZ6JOX-2f5dcs" :
		au.pX === aAg + 5 ? db =
		"CoE-7lR-YWRa2AEJenMxJpbqTObaOBcX5NeW_xnVto5UUzzrzUrtxtxrMKMUSSyN1XXV5NNOtaUUxzztzUxxpUSIBpSSyNN1aUrSpCCIJpKs50WVNN--7N6bbzrzxzrrpSMMSSMSzs9X7-X-VVVX99ccVVDUV19D--998a6rztVXaOV1771-78VN0V0V-7V---YV7Xh17XOWWV0V6pTOs-8V7XXpCF5-N-N-N-N0VObSxrSrSUyN-aNOsObrxMABnKUaUs-V1-N5NUzrxUWbzUSxprzCKHenMtzKoopSSSzzxxrMCJmnABegmXOs1ABmnCSKCKIC77gcepzSKBe9XfKrHh9eprxmnKMKLmehKCUrSrII7XnMUSxrUSIMpIABpryURpMbtxrrSrMUWtbzSnKKABgnAAKUxztrMUxrsObWtWzzUttraOtbUtbbVefaOrxxpStySStzVXaNTNN5SJhSry1zzSgmpSM9mmgofKpxryU_rUSxrPXmhMQIKSxrUrrxSxrprKLpMa-2V7Va-OV1XXAI97ee9m8a6TNSxSzzrtyTStbtzyUbzzbtztzzzyObaNObaOyUtzzaOttyUMy-f_zztztztzzxxrSopKprKKMSzrzzxzztttyOtaOaOZnBnBmn9mmmpMzbbzWaTOta5UyObtV9eg7XnBNN-7-ObrTUzztaOaOaOaNOa555-4KCCCBnIBnBnBnBpzzSzzxzba-7--6WV-1--771-VV------71-----NN-5---OaTOaNN---0WWWaNN56bzzbbaTTTTUCKSSprrSrMrrSMKpKSUUrSxzzzttaTNOaOVN---VV--X--1N0WVN5-7-0aN79enKBmVX9e9177-X770Ws7VX-WbVccOa-7OtzaUzy1WbyObaMxyN6UV4rUUy4zzaOaMWxyOzrzxrrTOzUUUrztzUzzzzzaNN--770aSSSztV-6rxzbbs5-NOUzzyMxzUxzV-1X9777e9gf9ege997VX7X9X71MMrV-V75-gnAHommmgf9emem9eefBmenA1AHmmfCC9h9m91AIHegn9emnAABnIBmV1mmegon9f9mXenI9fbV1ge7tzV--cgoon99gc0s76tV99nCLo1977Ebs50Vf-AKJcc-1fMMKr9c7-Aa-1mpBme9c-5OWWV-XV-50a0VVUV---1N18xy11--V1717V-0a0VV117V7-0VcWaN7Oa6aNN--OVV0SrWyUxzVe8UxyNN7X2bVSMVN50bbzWVXhH7aNTSraTObbWV0Us0WVOaN55OaOaOV5-OsND0tbzaUrrtVXX6rrV-X91V0V-N-V7X17X99f17X1XXeemXcgeA9hBce17XpA17fKKCK9e97hSrSHpomf9ABpSxHpKIKHhHhIJhMUhKnKUrKKyICCBnABpAAJpKBnIICA9opBme9hC9nCKQ97-XhJmfIKBhJoXA9empmpHhMTehICIBehIKSRkgomfKQ1971hKxQBpprSghCCJonCKKqpMSpBX17XhSnBopKSgpKopnKpIJpKSppIJprSzzKMTTTUQKMrKrrps5-KpUKKSSpMppSSKrrKMI9fBnBpHnK779nAMrSxzwonBmXXppQAI9fCLmhBop-s1-WV1hKBAJpBofBegp9mefKrpqfABfKzbpIAKMKHpKKBpIBpqmpKKKRnABooppKpLmnKJpCBpKABoonIIJpBpBnIHVX9e9f7ceeceegpSRe7f9mmonCJpKSpSQIIHn99cXee9mgf9Xce97V-5OV511711-V--7X1--MrSTT--VcNUUWV-7971--X77c1-VV-V1---AJXN--N5-7eYWs17Wa---cXcWs2aOVgc1ca0tVVD---V0V--55-1eX7X511V-8V5-ge9pMKpKJoepIIBmegXc-fCBmgfCIABfIBogmnAC1gnBnBfAABgm99ggefBXXccXf7VXe9XX6ba-XXX7c91X7VV7X1VV1-D0s55--6USrMSMSrWWbzs1menB1N7VUsN----2bVemACUSKKBk-VVfICKSpg9777--7hCSJpC-----bsN-OaOa56rJnIKT0a5SrtaUs99150zy50ty-55ObaOzbopHpMWa555Uzs9ef79gf9eopBcgnKRkAJomVa0V1da5-gnIBmWVVVWWzV-VXAMLkVVXNOVza-1hRmVNEtSrrpMSy17VTN1mgX7X2yN56zrMTUtztzSxzMrStbtyMxSppKST-V-UTUraUy1Xe-OaN9nHpKLegA9a1ccX1nIBcXXXcXcefA9gX7VVzs9XVbzyUVef-Obzs91UV-e9WWaUWaUzrUSrUrpzzUUrsUrs7efB999e971ceXX9ec7c4rMyTN11X-SprMMMbVcYa4xzzrIMpry1X-V19ge-zza5OzMUUUKpKps1-1OyTSzKMKnIKKSy1V0WxzT19XX-V-Xcf7gekcaUby19f9mdtyMtbzxtzSrWUzrSyOzzbrtrV9gXf1me-eecaTMs7cX8aTTMxSrMtrxtzrKKs--VXDOxSSSSCMUy-XUs7gV97V6tV6xprV7tVA8ySrVEzzxRopzbVXOVaUzbtzKopxRpMrV5StxzrzUV7TOVgiOtbaUzba-emVOtbaTObtbzbztbs9emgf9fBggf9mnAKRpgmmn9mmn9egge1-0ttV9mmme6a-iUbbzaOV7NSs5O_s8baNUVaMT0brs54SMMUICMaNOzzMsD1eeccXUSs8WVObttVVgfAIV71g7XmkXtaT2rxrSryOyMsAxs8a5UKtWWxpKztyObWs1mmon9Yy-X7N9on8V5OWVaNMMSrStVXVcV0WaST-aN55OVfABda6bUthMSrT17XN1fVU_ttzyUwprs2zzbWa6s1eopAA99eef9ttbyN9gcX0y-VDMptzs9cdV6s8WvKy0zy171OsUxT0V2brBpMs8s51kTTUxzxzxxrV17es1mfA-egeiTTOtV55OtttppSzUMV199-8bbrUVcAtSrs7XX7gnBnA9eTOs1cT5T2WxRpzbtyN9bs9ABkYWbbaShMsOWt_QMIKKxzT18VXTTUT-1hPecVOUVbaUzUU_rSSUVVX8tzzUT-ce9f9VemeeABfB8a5UzbWWWzzbbs6tSrVVWxrV79f755OWtyUs1-0aN-OUKMpry-c17aOzWUIMKprUUIMa-1X918V770aTObyUxIKSIJpCUVNN5--sNOMVN56_pKCJpSJoonKMVNNOa---OVsOptaKMT55NNUrKxxrMMT11115N7s9kc9V9VttMT0UTNO_xU_nJpUs7NUSzzSKKUMUts1e1T-c5TOVNOaOaUy2V50_zSUVX119X7USxs7--OzSCUbbKSzsUxRnCBnCCBnKrCIKJnIKM_pUVN5NN-7T50a5OWV0aNNNOWWxKKMBnAMxpIKKIMaSxs1X6rV-D6V-sT-UUVX1e9Os7zy-5SMUTOtpKySqpCBoe9nCTURnBpyOt_oonBnKttU_zV7a-5-tWWWtxxrqpKTOttSMsOrSxhBpT6bxSxrtUUIKAA9nHpHnBgeecf1ee9XnMxzxrUzUQCUxSs6SompyMs-0rSTUxtTMzzrrrUV1-sSxs777UrrrUMUtzUpMJn9e9ee-VhKgnMzUrynKtWzrzzzUxJpSKJnACKKs0Wba0V--UTOxyUrxzxyUxs-xyUrxzrUzprzUrpzUrrUrSyMrUSrrSUUUSxUaSfMT6xrSzrUrUUby18SrSrxrUpMUTNSUUzSSKSMSrMKhSzTKSpMLpMCSCCJopCIJpJonBonIIHnABggnBnA9nBf9geeg9ecce9cf1e9mm9mecf1eeece9X7cXXfBn97V9eA9cX7XfMQB97cX9997VV7ceXXnKSxxpSKxSxzQMUtxxhUr9Xs1AJmhUzUUSzzKSz1hUU_Sz_xrrSzUMUKrSxprqnH19pSKSpBpQABhMrKSxrKSzMBpxrppIMygpSrBopryKpzKy0nMMzba0rrUMStUSpSrMryMrxzbyUUMUty5-Ortbs78V77X77--Xe79pHfBg997X7X7X77ce-X7-zTOa0VV75TUUzUrrxSrrUrzzwfACKrsObs6TSz_zxrzxrrrtVN5Sy-4W_BQCq0c--5XUc-X5rCBxMa7PVDNUK-nSJp971_ESHe-mocmeKzxIIOxttzsTT-Ota0ee-057TlBpMMMlsOV7Xe---Z41V6NZVgpBmXJgnKMpr6WaNT0c7--3XZyYK57-DXainASrrUs-cXc0D9q9BhrKpMy6e7VHVV-19qEB--1him-7XjEvIohy--0DA35ggnKEGzTOs90X7-DANdhT7-7Xt_vISba9c11AoEBnACBxrSxSa0Wbba7ZmcWXV0Nl-LpUX7--232P--Y4hn-1NmHcmmnUy5--yBtECSKpGaNP197-0YF0nN-QYKBvKofomhMUtzba-1WcBcV17r9ZnpzsX9-4YWUUKaNc-1DHqB03YaRQJjHc9K9Mp9XmrHhrJhromghUxoOVT5OzMxtV5VNT--7VBc--DVec-5DXQxV-9EWOSk-7cyKynBpBnABoopJ5OaTT5NOs-OcVH7zjtnSIAHcgnCBomn9gjzUxrxCBeo6yT5Uc5Wzxru-e-Wy0s0aPc-39Fz7gpKSBcCHgcWggnIpRObztbxHggpoehryP6tbaT-VN-17---ZFFrV-t3OTpa7--GJ2c--GJFN-5GL3xc-9GPigq-T84fLpBpAMHpSBfACoemeoefCACAJrzttaUM5TUa5TUIErr0WWxOtWaOzyNNNN77977KACKBnAC90aTN1VN-7c-eGPvhSrq0ceV-1GRaD-9ZO8jSpKF--7--ZPZE--O6VKyV1O6qJppObVXc-aHHGgonUbVV-1ZZurAs1XHQCRnMzMppopDOVNWbttbYBec3mgce---HWfN-LHY8SS5X--09ahV-tAuEpN--TI4hxDUT7c-PI_QzrqXX-3ZxNzHzV--ZyYEV0dEl0pKsV---J06s--J71N--J8is--JDws-5JFcRs--JKrN0iJQsgnonCCL6xba6yOWXe9e--_6BUV2dHDArSUrz1XXX9-E_ADrICMKoN176X--0I2AV58JkgmgfIIICCTOaT0wNN--PKIxzUTcc-3_KPjIqV-1_MDbCV0yKYtSHpIpCSKHZlzLNV-10V55--5Kcizc-9KeMwq--0MPIV-dMpxrc--_Ul6V0OMzAnSN7-O_Wd6ppSppKMwNP-7X97V7-F_Zn6CzUrMOX9Xc7--_a82V-0OcIV-8OxHk--LW2N-DLaXxTX--4fBH-2_fwzLPV-0QFUV3OQn6xKMSxy0X-ee7-F_tjEBemhT6zzP7N-1_yrzR71uMvlwxIBemeefSu6zp9zTOzq-5TUxxWc9A97-9N1TU5V-0Va0V-8W-ps--NFDs--NFLN0aNK0UKptxxxrUNXXX9997V-DOBAzTX-2aJfQBy--0a2hV-0a3SV08aU0zT9V-taUEntc-5OtESV-eP2MzUSk6e9c-XPIwxMSN7VV-ddFArc-7aafrpUq-e7-TPquRnTTNc-mPxXxrrKlcVV9-3amCbSkV--5oXa-Gat6zSSzrUR7X7ec7-HQgPwxu7-9R1zzP-1tkzEmgj6zzXc-2b3DrLP--Ol2rq-78lqzrHegrzzzKEUTN6seVNcgeX-kbAFvBghCIKIIBpBognIJpMKSSxUSrSSxUrpK--0ogPV0OpIUnBOs-SbSprpUSI9jxa6aPeWzz5XeeV-PSyVwpEsV-CbXszKCCGWbsV7-0bZmzN--bbTv--0uTlV08uUInDTV-OulbqV1tuqQnCMF-5Ue-2bh7jJP--0vJ6V-0vjlV-OwCMqV-OwVCw-0twdKojFTNV3dwdbnUSMzs-PCA91V-HUDFBraV-5UKsSc-DUR5ByP--6rqa-2bsubMc--tyOApa7-yUdojJmnIqOtWV9--bxunV-0zWdVAOzeUnxBmfrrICrUUUUrpHzWVcWX1175X-Xc--UzJs-9VELhk--e0DGpX-2c8yvE5V0P1YAmzTX-Fc9eEBhHgn5Uta5N-OcBY6pSrIAUJgTOa-09We7-GcENbMSppzye9777c-9VzggtV-94IUs-9WO6SNV-95_ss-DWdaSDP-mcR2MBoggxrpUzzKSEzxUqUyX9ecWaNVe79V79c--WkEs-9WoBzNV2u6I8rMJpGaOV7Xc-9WxeRyV197X5onrsN9-1cXrMEc-uXElzMKM575NHe-09AHrpNP--1AZrV-eBC4rX--7ndq-4coH6ETP70HYKWxSMOxxc9XWbkd9V-9Edzk-HZ0xhyPc09Z7pBmpSxpy5O9V79--82Ca--86Zu-2dAgzUcV-PI-Bq--eIQcrX-1dKuADN-H_k1UrXc-9_qWSsV8uMPGmzMTNUUUSEMSxxze7e71c-XHee7-Ha0vzScV--aLfs01aO1woxIC6a-0tuc-DaUtSq7-6dh56pM0X7-7dp2zMSR-X--abWegmjUOWc-EdszfAKSzV5UNe9V1PUQ2nABUzc7-5by5U---cAvN--cHps-5cLGhV-DcONzR7--98tL-4e9eMrR7V-HciUxpX7-udBoSJfErlbuVX-29aVfmxIpGa7P--DdjHRtu-6eW7EKSN11--9XeD-jeZFrBfCpCSxpSrzJ5TUcOzaOXfBh9X9X--1c-1eGYR-5efWrCracV-1fXrV-ufyWxkV-ufAyBoeezUrzV-V-ugwopa7--fJNN-LfPwSpkVV-9iyzs--fqes-ifsnRxzxyXecV0ejZ8nMbe7-9ftmzP-FujbporSIzSpMUISCxzx-VUzrrTc6zy7Xh9ecVWuXX-7mcVHe1--ejc_xc-3ezMzK51-4ezOMKGV7-1g-Dw-Rf-nQAA9gnpMtzzzbttXXX7e-1f-oITV-agD2xzola9X-Ff2bjASrxSr-97VV-4f47MJyP7-9gJYUP--9lWRs-qg_aBfJxrzs117--gavs-PghqUKGX---fCFz-09nVOpqV--9njxk--gyON-Dh4IxL7-2fGYEENV-1ob8V-upTOpa7--hVws-XhbrSpLOcXV1eqiCpKR0yX7--9qk6k-PhjSS9c6y-7fR-rUrR7Xc-ehsTBgrqUscc-PiJ1hASaV-bfaA6AI9MMMHhzpUbzOyOz1X97-1ge7V-1tzIV1uu69nCrtwP-e-9ffCUprUkVXc-5fgVYCM5-V-9vpss-5jH-E--HjT-wxu--XjYHx9xSVN-19yPqognyT--pfugbS9rSrSMSrzpaUpSUMSkVV-VVVPHgccX1XX1c-9jiyz5V0Pz_GnSN1-4g0rMKR-7-HkBVxlu7--kCK70LkGUSpMSrOzuXWse7X9-4g57jrTXV-DkQfwxX--B98T--g9En-1v1y0pKorN7-7--gDm6V-v2vCxNV--l12N-Pl34RxUcX-0gHXnD-7gHhbKrq7X7-TlB1xMxcVcJ1lBSSrSSppzUzxpzT6xSSrKrMJopBmcXcxrMRUSpMKBgc7N1cX97971AMHYSSrMHcce7eVVN77XVX7-Oc1dMSHooe-V-CMKSSKq1VUpkUSrUSCMMMUSzSprKKHexxrSSxSxxyUSzzSUUSpSpSxKKBhUpttx57OaP0WyOaP-9-0V7X5CHcV77X1VVXXV-97cV----0c-7VXcY97X7ece1XABcc9--23yxV3v42inCMKrbVBe-0xXV-A4Ugk-aliIwpIMs----BS4D-2gSBER5V1v6fGpCCptV-X--BTnq-7gVUzKKT-VV--m1DN-qm1FRfpppNVN7N-DmEsxT9-QgZUjCSKEKR6xGWe57N-ZmVV0A8RQxR7--A8TUk-imT5xSTTTd9cV4Q8thxpponSpTN7-X77V--mZcN1immTUMSKCKMR16VUSprGbxkXBcVcX77V7V-TmmkSpUVcV-un7nSrMSxkX797V1ABckpMba99-0go5MN-5gpKjMMX7V-QCSMnV-vCllpk7-Pn_7wppc--6gu_jIIqN7-3gwCEUP1-HgwGzMMMSxlu7X7X1V1vETrmxSrTVX1--C-0D-Eh0RESoxSRN-X09--AFrbk--oIos-aoMTSIKFN5--5h58vIRNNV-2GitV-vH2_psV--oc-s0aoc_xKMSJe9JUUqN5P17VV-XoimSI5OycV-fHxjnk--CB5q-0hHcbN-VhHl6KpASSSKIMxsVWyP77VXV-7-HpEKxUX7-mpKbRoeKSo-NN--CNDi-7hOczxzTcXc--pboN-DpiAwpV-5hTmMpR5X-0QMjrnMN7-1hUQAT7-HqBoxK---DqWZRr--IhdNrKrSzOV5QBeX3e-9hfVIBpUzX17--CfpD-phgbjBmccjMJrzke76zrrMMSrUrpSyc17VVX7X7X7-HqmXSSX---qmvs--qqEN0HqtqSrxKESrNN7Xc1XV-2R4lV-fTzpnk-1hwNUTV4Prr2xMJnIC9EIrJomnqUKKCJeIIMOxp9MKzKSr6XX7--V57OV70WXV-5-N6a--V5fUUEofHchpKMOba7X5UTP7-0hzqEP-2i1rMSX-2vVmOnHpplxk-WcV-9sS7x5-2fXLhnESoxu7T17-2iCDURP-3fYKfrK9fISr6s-57---sq1c-DsqBSTX--DFu5-1iHcjR7Bmt9wxogcf95IIESpAAJegxUJfxI9onJeCrrrUrSUSSrSpMKSpUSrMKrMMMSMSppSKCyUUz5N71-0aP5OzyOzUSrUN6aOX10ty-7-0s-7cV-7X1X1-VX9XX7e9cecge16yX-X7X7BmXXcV-2iHoMUcV4Q_4_nBrpyOzSq5cXX7c-HtGWSpX7--tUGs-5u0pzc-Tu6aUSS-17-Tu7VxACOa---u7iN-5uEYS--5uEcz--auFlSKqNO99-2i_aUGuV0QdwKony7-BicpMJrMSc1-5V0feEApSWcc-5uYrSV-1uf6R--igpMV9vfYUppKHexxMzxxrUROttX1e7cW97HX17--2fYfV-Qf_oq-0Afj_rL7V0vfwMpMaX5V3Ag7opBpKpT575-7--fgPSna-4iqejAoOV-avQIxxrycce-0isQUF-1is_AGc-LvkFzM5X--fjqbr1--Dz_T-6j-zjASq75-1j1jzlc-9wL5ww--2lNpV-flSUxX-3j5MbM5X-Hj6HUJm_prMSk--7X--vlsIpk7-HwadwjOV-1wepR-2jAT6Ia-1fnTTxHnEy0X--Anark-9wvRwtV5QospnoxMSOzr0aNn9X797V-Qp0rq--QpG4o-0QpR0mxlX-4jL0rSq-c0XxPBBfBnEMKKyNNTOVN1e-6jMXUJlz11-EEgqwecX-s5OaSs-AjV-jKppq-17c-9y-hSkV3fsD9ppKIKDNNOVV17-Ty3bxJp0V--9yERww-0Ax-_npV--Ax2Ik-9zfaxkV-vzr2xk7-A-1BRy--3-zvV-w0lpqTc-I-kixr-c-A0MPENV3R55SnBpKkWa0zGVX-nkNrfACJeonMrxSrrrSrT55-IC9e-0ztVNX7X99--35IBV-R5UCqV-35iqV-w6ltpWc-60xjx--A1PugyV-B95ws-E1cpgpV--ki4IV1wAqXpUTUa1ee-4kl7ACOa7-02LhN-02YwN-I2aoBjy7-f2fQUKrScVc--I2gExS-V-b2tvSppo-7X-0kyWUF-1kyZMq7-036Ns-M36nwhr---RFUnqV-BFvKk-03Kgs-A3kyxNV-wI34p57-644wwN-64BcS--04PSN064PVSKSTUF14HcWc--BL4Uk-64ckSV-04jBN7r4jQxHppKKpMJxHe7V1-ecnIIKABoopUSognBnIAUtbotyOyNOsNTUSJnKq0a6ztbttVOzOVOX-5c0a5OV1XX7Ze9jpI977AI97--lSWj-FgMRSmf9zbrpzMKc0bxrKESxrlVXHVUbbpSkV7XccomXX9ZcP7-E4xwwja--lXvjV-wQInrsc0Q5ozSpKEryObbuVgce1c-Q64OwhMWX-0lmZbk-0lpy6P--GtFD-2lu5jKVV0RUb6mp6V-0m9erN-5mBT2BjNOV0wZLzpUk5XVPBZWrmmmmnIJrMSrSSSSKSMUxKpKrSESpbxSSrMOts7-7Ve7cnA9119-Oa0Wba7V---V7---ece-cmKJQBmp9ggzzrSKMMy-OyTTOX7X997X06mLdEBgnABnIIIICCAJnJpCCJnKJ0a5OtWa55Oa0WbaTObcV0WWV--I8QGBxs7-U8RIgpzs7c-29W_w-3mdg6Ctc-0mguE5-ZmlOjKBmmonUUUUbw-OzwN-VHmc1eV-wgZprsc-rANbgnKrUtX17c4UAhBhBenHYBocVgprSCHZnrrUMSxHnIKLOa-0VObaUzxWza0bsNOy1X7Xe9n9cV-1n8XjDN-IBkvzxXc-2BlYi-RnBjzIEMMKppKKF51-1-0V-9--nBzMVXBp7smn9f9XehBnCAIBomnABmceXeZegccZmonAAIBnKSMSrMVc57OyOaVUzWzOzxxzzztxzxxrrSrtbVOWtVN-OVP7V-0aT--RstSq--gtJnqP-3nilrCq7-AniufCAM0bbcV4UEFHBomghIHoonBnCKpKICSKpMxIBnJOtV-OsTOtsN0aUX7VN---6zOa--7fJe1-7nuYnACrtVc0EFVzgfBofKUUaOV0a73zH2ShKICCCCICCIBgnBpBpCICKpKCKRN55N-5N5OV0a0aN5-NNNOWV-NP7-zHTMwnJhpJ5-OVP-5oiBECSkV-0hBVAn9M6V-IIDDgzZc-2IgAR-1pHnrR--2KH6w-4pLvUIOaV-0KUwN92LmEgfBfBgqUSCrKKKBeVUX5-X4JmoocX-57NNmconHdBpJce99pKppppKIKopMrtxxxprKrMUStaN7-6yUza-7X9775ObzzStV--51--N-PcXX7-ILxOwoOV-UMCUghM5N--AMQdSNV0STQGrScX-8ptlrCCCta1-0CTnYnqP-0SVFsrM-70Eq1sfHnA9XcYCppSKKSErrSSCzpUUzKTOWaN0V0WX7VXWa-2KBme0WX19c-4qODnHrVN-2OnhB-Cqb12CCKJ-UcWV-IqjjQSrKAMzTNV7VXc-Nqu9fBnACIHnSLNOWWaOV--hjnFrX--r-vI-1xkFZpprOu97V-zr6zAApICSUpzKUxlyUrwUxKV56a6a7VVXY9_HmmeXVX1X9V4CmRVp9mrMaTUxT-e7c-OrAdfJnKrrSrrsN0X979X9-0rFTQP--MKdX--M_8P-DreVnCCSrzVVNec-AVFgBTV-T02FyV0L0slMs1c-6VTDEc-6V_Ajc-AV_JBtV-D5hsk-b_7iwnSROX1--OPBa-1tQurDN-Ya80xERTNXV" :
		au.pX === aAg + 6 ? db =
		"DwCd1sP0j--RaO__ddedddifv2EEznnnyfEeRwyzBBBB2Bn00-17-2fEMK9dCrtzUrrMMqN-X-789V----Sf-T--yfzIrzohrxy6kX6rSk16k7---11J7Z-35CISoOxsUKESpEP6qOV6pJp9mec17cmhpxUSogfBnMMGWxptyUUzc5UrtttzpoTOV6lVVZme-gcfBc5cUrztbV73cWztaEO-1I5dLOfvkygzEyaOdzjzsl2knvg2EW2zEznvzzyzyfyyzzvjuMyzdzjivvvyyinyaTVyydzufvevjgwBoG-znzdiEdbg2vkyjEyiazuK_4OGaJaPjzYnzzjBwnvyfiigEnuP_vjuiaOMdezeififiiEfgzfusnEeO_ivviEuvjzyzivivivg3EjuyjiezjjisnvvEffvznviyviYEYyzjygnBz1_Fl-zivjEzyuwnB2z0434-4G304-44-CGJFKJEK42Bo-38G-340403LK2kl44G_GFn-G402l2x2433432vuvfvY4-l-0-FkF3G-J43G3FJ3-G5J2---20L-Y-8CqLKOzvEjYn3GF5N0A3mrIprrIryT1Wace1XV0F2MKYo-H05ahSVV1R1RHOKefiznn0-z4KUy5MEe17X7Xa17X7X7X7X7e7X7-17Xe1XeX1VXT0aN7X7X9X7V19X7V17-Xec7X-7X77X7VfBctaT-17917-X--7V0V-9Xe19X1cX991hJpKJpKMSKMSKUIMUrMprSrMSrKMSKrKKrMSrSKrMprSrMpKMSMMpMSKrKKCKMUzrxrSUMUKIABceV17-XcX7X7917X9X7X7e--0aN-7V17XcX77eceVX7X17919X1EzyTN5T-c-7X77X7V197XcVXN-7V-17-X18VXD---X7a11--7a17-99177Vce91X7XX1cVXe9XV-N-7a11177VVX12V0V-VX9-N0VVVX1-1171777s0V5-N7V7Va0bVN0VUV-VN-2Vs--a-NTN0WbV50WsN5-N5-N5-N5-OrxzST-VXcc-VN-1N5-V51-15OxUSxUrxSxSJpMs0V-8V5Oa1D18V91191X11-VVX19nCSSKSSSrMrKQKpK7cXXX7Xcs-1X1VXVV7777719-csN7714yUSpUSSryN77c7X0V-16a0VenB5-D0WV9X-a0WWVN-gpC7X-gm10tV0yN7NNN1VV-N1mm-N--s-7WWyN--fLocccAAC9555NUsSpy-Wa555-c--hIJpCCBmg5NN-NNN8_y--N0VD-epnIKCCLVXYWV-919prKSC9cV77-V0Vc11111TTUVVgkf1991D-e1-ceXX7X-WWs9cXXgcUxy10Va1cXei1monICI7g9-XgegmVgem7X6xyUVc8bbta6bbtrzMST--15NAA9egemfABXnBm9n9XmfBpMI9mggfA1eceeegn9eeXe9AIBme7g7Vecg7dV9mgecVfWzzyUzxSvCMtbtbzxtUryOzzttbtaOaTOzs97ea0VenBmN5N-XN9X9XiOa5ObtaNNNNOttVgggnB7e17OVN0WbtT-tWV5MV0ztbaUzMy2aOyStI7fCMtxrzzbKrUyUa5Oa0bUsOa1me7f9cD-1997-VTOWaUV-WWrzzxprWzUrqnBnCKrSSzySSza19Es9aOs-c-WsOaN50V-NObttrSSxzzbtyUbzzUUzUtxrUUTUyULpf7hKyTSBpMzpompqpSxUrSSrKprUSMMUTMxSrKSKrrrppMKMSSprSy50byOSzaKgpxza6zUtbz_zUmgf9mA1egmgf9pMsOzbtzMyTOzzMbttWy2WrKKIKSKSUtVOsUCLnKUtza5SzUxSSrSSzUSrMrUzMttSxxMSSHemgnKzUSzrzxzyUrtbbpSrzKtKrSAMKSs-T---X55UbsN9eem7iObtztyU_rQMKrUSMzzSrxUzzbyUxxyUs18s1UaUprzxMKJhSrMxpps-V-798VUtaOVOVD-XhHDN-6V9XXm7ce7VVtV-951-Ors18Wa-7-177--1-UVcOyUbzMTUbURopIKCIA7f1hMShJonIMTUMUSUKKUMrSrRchMJpSryOxxhIMprSJpxrs---Wa4xxrSprKmpKKxUSrUT5OV7N2a--7-ztVYVXcVV2aOzrzzxrSrbrIMxJogAMSMSUUSrrKJgpQJnAJX97hMMU7fHeX-en99pSrxwopCICBmcXXccXehSrprUxzbztTpKJonKCBfHeXnCLpBmX9XpSzrpKpABeepS9nKnBofKwnBopRpBopCJpKpKKMKIKxzSzzzxKMSSSSKxKSIKtTUWyTObUrrxzrzrbrSzrMSrpzUxySrxxzrrrzzbtztzyMxrUKQKKSSppMKpSKpxprrSrUUSxxrMprrttVD5SrV-a-NN71-cX7791-77VVVVX71-TT6WWbWWWVN-NN8V711-V777X11XVcccceXVXXNNN8V-15-9-VV791dV1-VVX7X1-sNOtrtxtxtySyUVNStUrUrrbUMrppzzrbbry6pKKrMMMrMMCSUUKepKxs0aTTMUUU_rMT-OVN-6T-7-a-777V-5-XMxSSxxrxMU_pzhUxSmpra6QKUbSyOSSnMxSyUKSxCMKUtprySzrxxKttbzbSrbTN0xzUKBpyTSrrMtttzprrSSrMSpprKCILpJhBhIBonKMKLnKICJnBgmmpBm9mnAABgggmeommnAAAJghKKKhKgmpAAJpIJopCIMIMIJpCKJpKUa-s550V2VN50VNT0s5OWs6VT5NNTTTTTMyUSSxQJpJpAA7fBprxpttWbbSSQKSSSMMzSrt_rUUbUbaMyTOVzTOs7777N70V70_pzKKzbbSJpBp11hIKqnKUtIAJmnJnJmnIBnBnJnKKLpBnJhI7e9778V1N5-NT0VOtbaNN9gmmmkfICCACBgonCBpQICBnI1fJo9pSQJohBchKhCKJopSMKSSMrSMCIBomooenABfAIABgnIIMtsOaObbxI9mmon9gnKUwpMJpJpJpBmpSCShMKCMKCBpCK10V7-77X1-cVV-7hKKCMKrppMKSKpIAKtxzxSKpxnHghUySrvCICBfCJpMbnAIBhBgompIIMC9mgfCCKBoonIIICBfIIICBopIIIKKCKKSKMUKpKxpSSxxMUMKKSKxpUpKrSKSKSKnICCJnCA1999-1A9e-7-cXXX17V70a-f7VV-1--7XXm997cXX9AAC9mgoekccXg97XXABmkf9f9fA9emXn9emgmgonKtxgnBfI9nBemef1X9-9gn9meeXA9eemegoefBmgnBnC9gnC9eeggnCJhBpBnKJnKKKKxpIKrRhBhAKBhKSKKKIMKKKF7Z2MkT__44OOaO__O_LLTbYvkyffBkEcw2knyaaiBkyEC-x-nl3-3VQ3QMsc-O-txaOjzzk4K_-7VS-vCSzc7V0J2qEPevjFF3F--6mTV-FGRlV--92TV0kLotbx-a7AuPnIUUoxxzbzrKrpKKMSSSlWxrUsWtzKlzTUyOzbw516xSUzWbsX6wNgc55Xc7mcXmgmeJmofomXXIBcYHcVPXZcVTUceX1d9me17ee9-A0Y6qioC-asBoenIBjSUIBjUSJe9ceV7177eV7fC9gpzzHeeICyUxA9efIrzM0zKaP6kOxIMtxzbxBgef9gfMSxyU6ttaUttzGzryOa-OV1XCJc9VcN7---40ekqQ--NDEDyV--Red-6VumnMUacX--0pcZ3P2fIBnrozKocX7X7poxognBU6zbzojHxISryUWX-U0XV--V9YHX7--6M-k--Do0VDFSy8__bfuePPaEykFkk03C2-3VwCbAMV--0t6o-92oUS0V4FUCSaOQzBn4---ywe-Y13Y5KOjuRyaEBG2F--GW_V0FZtli---3co7-38GgR-93kCEP-1kaQpeNn--L4BWBn5T-BFdZS_ePOvjjjjwk3-FJGF0sL9epCyN9-mkhAhaefdPOOaOd_eO_dPLyiiveeeyEnnEiEwBk2nEnBnEEEnnwwznnF3333GGKJJG3G4KKGJ-94g9CkV--ipW-VWVbABxrMKz5OzJxsNNNVXmXe9c--B49F--PnOV-FqcSV7sQLqmeeppUUSSxtaTU6yT97997eeMC2a-LKOaOaOi_vdPiuzjd_dvijyu_KFJGF33303FC2-oBBB4KLOOaaOiaeduaeeffdiuzzzyyydKKJLfivjjjYBwyuyynzyEnznvszkxFzwzjvEBG0G2zjgyuyYvybvzjyieKbfYBkwzivYvyvyEiviyvfuuuPfePPaadvvvjjeOLP_MdOKKK_UeaPMefvjjYzYknkkzznFzyEjzjfyvvEzjeQfjYvzznzyiyEsywzwzYvEgkG43K4GJJKGJJK3-zjsEzjjvzwyyvvC3J2G3FJ2yjFG04FK4F4K-OKGJGJG0GK43EB4GG2EEzyvvn2yduyvjyinzx33G033Eiw-o-KF2k-GGJeKO_-0PL_JBFGKOF_KOHK4GFxOHKGGFwp08J-yEYnlKKFJBwFJK9eOFHLTdJ-kkn0KKdFPPe_3-B3HeOaJ_2-EeVC-3JKLdi_FHK20dPJFk0O_JBl3KT_3K5LLfjdJeu_Fo3_JiePJF30-l3FGJFoGF-X6dJBfEOtsV0FxOWbo-D6uCS6X1v2zp5_4fu_4ivEdiuPdKJF45aiivivyyiviiijsn-znBkBF235J-GG_-nBl-w44aKKG-KX2_nCErSSSkOWa11XeXLG1g8_OK_OOO_aPuKOdajsydQjznzydLKK_5KaiuyzyvzzzyzjvjidLK3KKGKKKKKaQfefjizjzyvdefiiznyzzyEwznBzwzkn2Eifzjufwyyzjwww--GPO_--zVBnvgEekk3K3GG3JGGFFG2B-333-0--03G3HK4ePeefeQiaOK--3-0-JFKiydeJHKJ2C40GG_ddKFnB2-JF0cWyMmmyTN-ZGfute2---ZAWV0G8Ihi3--8AO7--I0sk-7aWNk-RIFpuEF018vKgpKEM6tWV7XV--L5Mk-NgeYlV6GUzf_eczf24_-k-1C0lB-I5ZZqOynkqK-5YJBIArlX-1Gfu8_yC-6YOlnKIOV---5qJB-DCgdwja-C61_LTvoG-kYgE2KIJnAAMUxzUrOxzTOWaZcV9176qXeX7cVDlqEh_PPeffijjnEBC203FFGJ-mDm3BfEMtyP89-C6VITdTn---2mET-26bSqk--EMts2wUQzuiijiibfV-EYnn3G4LJJGF1szi7nJnr550e--78qw-1FShy-27J7aR-eFczBxKoT7-V-oWi1tLgwk-9FyXENV7H7Of_bisywyoGJG-GZSgYBepxxpyN5X97-gZ3Btfw30yZX6E9mY9eememXeefSzxzT6xzUrMommceKIABhBeMUSxyOWbbbxzHpATTTV5OzxzSy15Ua5O93eme9cXWWbbyVcmVAmK5MiyiajY2Eil3G445J--Hp-s--aMYk-0CdpV2HW8xuvoG-28GGLmemxr6tsV-oczDQis3F11JY8BgnBopr6ztzzNOWX7e7omX-0mZRx_UkRdHRBnKMKpMJppJxponBop6bbzxpxKlbWa0WWWX-UzUUrMzlxrWaWXVd9n9WVVc91e99X7eeVjHcccOe1V--dDLF0OOWLmpy1-6AISazG-5_hMYrq3e-2mvLGeyn04-Ca5w69nUrSq17--QBDVUivzzlJKJJ-qNYawozzyNn97c23mKCO_OLdiffgwnBBBl-J-5OPQhV0wnGIOeeyin0230F5uPAsSSUrHprMSI9BenCHoeXAIrrUUUzTUzyN56rzbV0bxbtcOyOttztcmefBgfBn9ef9X7VXX7X7X7V9IG_jaaeivzB-pFn2KJ09Pe2Rhbzzxxu7cemc-CCRoydz-p--5k5q-ICZKiPvjk34--5npT0dDEw5Oeuaufdeu_PeijB-BBFkoFG2EfswFk3-JLJ-9Ul6xk-7nzgraaOeQfVBB-n-1XVgnghCEpKSIIIMKxML5-0Wc0c5V71-7-C0ccQ-B92pWnABnIBgmxUa-UbtbrzzrtbbueXBee5Pec-C21Ktk6e6I4rJpIBrMM0c-0zzbae91c7Qh2tpO_ddeeTbeeiiduuffeeefydbefjiedeeaijY-nnBwnznEBnnEwk-nveefdbYw3B-2koFFnyjueuTw2FyvfiB-32G0-oGK3-OdveeJFFFo3BoLK0JF-40OOaOa_8KKFB3OKefddFF0--02F-00G2--5cWxzMSV1V0JNHMaB-uYI9RnKMGWWaNe-HJRYn_aayu_jjjeBC-FJFFEjiwC44F2uEcgpJxIIy5-NVV-07cwk-PGjhlV3oZcraOPzkC-5eHK_nABpKKrK55-575TT-e0fHO2qaaabeuauQeiffeQffF-33-kk-BB222n4J3K--9LCls-CAWRtk-1QXrVIK7Wd___4aLywyizYzYEyEBw0JOJOJJ-edEvRpK5Os1V1CKLfOdOyszywkGG4-5etPbKtae-jKWNneePfiuiifiijifiw2yfeii-zefeeeeefYBBn--0033F3F03-G-3F03-4-0GGGKJ-ufB4MHjSzSomcXfMpzS6xKKKKMSsV-10a7V-75Ouec17-6Lbx5JE-PfeifA9eme9AJzrzxztyN57-SVW5uU-0qkprRxMSKSpKSrtV7X7X17--V-58t6-LgVLbBpIKrWzSqV0V7Ve--O0SB8LoLpxJnBgmpICBomogn9oghBnIBpUbWxpMOzzVUsUbaTOa55ObxonKESyUSzrzRUtWztsTUzrMtcVV-V-eX-0Zegee977XX-cemcY9ecV8q__U_OdujEvnBmK30--hDurV-5vfz37hzjz9gemecf9genrI9ggn97gegegoenBgopCJonEJUzpCKKIKonKSKMKKKSMSpUKrbzV0V5NN-77VV-7X-WWVV-N-0aNOWWbsN-0yUUUxzrzSMKrSICpJnIIErL5NOaUSxpSUMSSkOWWaV1-1-55--Vc7X5UxrpUSUxty51-cVXX97VcXZecV9r1ep_LLasznvgyw343F-AZ4Kk6pnU1tLuaOG5K_a_OLLPKeOddYzwwwzEnzEnwzE2E2C-JF3-4id5YIMV7-Cs_ftkIvpQOmnA9nBgf9YBoooofICBeeCBoqUUUxtza6aNUWba6aOaOWba5T5THcV7NLKvdveejzG-33F-5q05bAzy9VCvXK8_eeiyvujin304_-3-0FZT-95mmcgfAACBn9ggeAA9mmnCUtzrprpUSAAIBggecmmggghM6tzNOtttyTTTUbbbxzKa5N0bbbbbbaNTTTTTTUy551ccfAA99XXcWnw5hG_OLKOLKaO_LKOK_POOKdaPOaPOaaUzBnEknwknzE2En2nzEnzeKazEyzzjnwzzznyszgzzzwziyzjvvzjEnueOOdawzEnnwzEEnwwzEEnknEnB0JLJJ__OJ0K_JLK4K4_G8K4445K_48LK_OK4G44K4OKGF1TETamnMTOVc" :
		au.pX === aAg + 7 ? db =
		"9mDS-FP-F--0TedPPOXo0HCGSpxrMptUSrUztztbbsUtaTTOzzzzStzSzSrSrSrppT-0btaOaNNUttVOa---56y6aOSrUaN5OzztztaOtTObtaNNUzaOSrSvHogmgfKpKSrCJgnIICMKrSryUWs--17XD--OaUzaOzyObzzztzrrUxUKprrzyUzzzzzzrSrrbzUSzyOaOsOzzzztbzzrAMSKzrUzzUSrUrrMKKSzzxrrxrxrrSrSrUSpMJnCKUV6aSxxUSxrSSMzzzWzz_zzzzzzxrUzxUzzrSzpxpxUSUxrxxSrrMSrSKKMKMSKKxrSKxzxpJmegnKzWzzoeepBpABgohBnBpMSKyOsT5T---OWWt_onKzzS9ehSrUzzzzrzzKKAILmfHnBpUztWsT0WaOaUzzzUrUrSzpxzzrSMSrzzzSKKKKpyTUaOzxzxrxxrxrUzzxzzzzzzzSrxrUrSrSzMSrSSrSrUprMKzUUUrbrbrbrrSMKxKKKpIKKKMKKKIBpKBnJnBhBgnCAIBnBnBnBgonIJoonIJnBnKBen17AKICIKKJgpKKCSSKKCKJpBpKIKBnKKKCACBpKMIKponBgfBnCHoonBnAKCKKCI9nBenBnBgmepCBn9cecegX-9eenHmognBmegefBnBenBnBenBgmonAKICCKKCKKKIKKJnCJnBmfBnBmpBnICIBpIBmpBmnBnABn8aObbaOa0bVOV1n9fCBonIHmonCMpQ9hCAJnJgnCBnBmpBpBgfA9nBmX9eeeXeXcXX9eee77gpKrSrzSrSrJnKKrrrrKJnCBnCBhCIBgemggeggef9eemmeecceAKKrKICJproomgmgeee9X9eXfKMSMAKMzrMyOtxrKCBe7VcfBprrBAIHnKhSKIBp9emgfBnCBpSMSUSxrrzzrKKLmnBmmnABpIKIBmgmnKSpSKUSrPkf9en9nAIKpIBgmXEV9gpB7Ve9VX9XbrUV1cc9V7Ws11chBeaN7tV7AIC7XN1N1777c2V-a5USy117aNN-ceef97Oa-Wzy1N-17WbyMMKSCKrs10WV-Ws978V-5-D5-s-7VcgmfMopCSppIA7XV--1-2bs717V15--a52aN-X1-cVN-X-V-ts-0V0VOV1OaOa1-2WV-sOV--7OV-V--VX-7--7-0yN7--7-X1OWa--1-0WVT--9N7OV--1-NN---V-17V-15Us--V--15NN7----VX1N7---X71--17eX7X7XX1VcX9XXcX9999A77eVeX9A17X9cX7X7X9cX7V7VV---717cV1717X717X-X7X71177X-X71N19--97X-X7-X7c-91X-X-7X7g7XVeX7Ws-177-17-5Oa5NOsOa5OaOV1XmX7eVcOV-95--5-sUWVNT5N--0WWtztaTT6WaOV7-0aOaOzza0aN0a--7VOV7s-s--6V-X---17X1Vc118V5OV7eX7XcXemnCCBfBnBoprSp9gn9cV17ee-9eee7eV4kDJ_aeiwn-FJ-u28mgpMSzsN-XeV5Fop6aeecBBk-F1t5Zdn9xxrs-9-O9QZyeevz-G3G-YcmK6CIIrUrrSrrrqOa9-X9X7X9cV1_beTuOPOPfznwwC3-4-Jh78rBeejprrSrNN--7-T5ITPw30U8E3BgonBzrtWzzaNVeeV8t9XtaOdOyzBwnEBKK-AmPDvCxrr-7X7ByJT4OdKaTizEydLQi_G48_OUdOvEvyuv-zyevvnzyBFzjvyBnzzznE0KKJJJK43JJG3JF0GKK-2BiSRpxxpWX7Xc" :
		au.pX === aAg + 8 ? db =
		"DgBy1vR-AV60YBnopk-O_9DCIs4rUUrSSMUrSrSSSMKzypKSSMRpKMSrUKMSpKSSrUrSKIKSueXgnCKBgme9XenIKKMBpSKpKMMxpLppKKpnBoopKMMMMKpMKKKKrSzzza55ObzzUUSxppppCCSSpSSrRopSrrSSSppMMSSrKSzUtpxrxxphSMUMUSrrUzzaOtbaOtbbbaOzWWaN5Os6yN-ee117eme97cX--1117XmmccVaN1-Xy-XD-NT-6sDOa0y-cWtzrrKrrSpptWSxs1W_rMUMMUTUUzrrrrSrSxKSrKKzKSrMSrxxprUUzUyTOa-N-1-X-7--1-VV1D-EUUaOtSs-SyMzy-Xe1XXe999XcefCIKKUUn7X7eXee8aOV11UUUa-X7X0Ss1N1mVcf9ecekgk1AJmnABgn99mn9hIJhKKMB7797ee17y17V79Ve79nFX8s19nAIKI1n9pMKKT5Jp-hFgV1goV1nIF-hB-1kOsN56rSpppMtVX-77c7a5N-D550V-ObbaTTN-OVa----N--7s50y0VTNN-9maOzV17cVeepABnBpKKCBnBoopIKMMS9pKKKKKKIBWV-D-XemgpKBe9gm9eOzbyOa5OWV15NN7-N--V5-OV55-50aOaOa----99e77X9e770V1OVX-ccefABn997Xc77VccgceXegfBnH7cegcVX9ecD-VV-7-XV7Xcs5OaUT155-51XD--UtyUy--zWzzUzrbzyMT5OtztyOaOzKpxxIKKKKpIKKSMIKSKKSzztzbyUxtaUaNN5OyKs-6V0WV0_y-SppSICMKMTTTOtQBpSCMSsSrMSzyTMSprSptSUbzzygfKxUaObrMJpTO_pmpUxraTTOtttVUtaSSptzIAK99eXegfKgpCLmpMrUSpz7fKBoohUttrSrUrrSrSAKKUUra4pSzbaNTObaUyUxopBpSrzbaOyN10baSrrpzKpSSUtSzpUs-75N7cc91cXoX7V7Ws1-5TUbaOaOaSySzzzrzzzUtaN0V971A9eenBeee7Xe9cgcfAA9gggnKJgpgeee9eA9mfBgf9geVVX9fB7X6baOTTNNOtaOty52tzVNN9m7Xcce9715N5ObKt_y-8rMbzs90My6_s4raOUxrrpUMrz_rCMUry-eXUzrpySrxyObrztrzUMUttpztrVMrzrMsURhUxpsOpCUbrzqmenMtzmpzb_mfKzpooXX1pBpxSSKpSMSMKKCMKQKnCBmmeXcc71171-V--XpIIKKnIAAIBnCMMCKprzWV7sObKKrKUMsNN5UyMzzrBpztttWVaTObW_xpI99ghKKMxztaUUbzzzMy6vBgnACUtz_yTMrUzbnIMUtttV-UrUSrSSprMSSMyOWVX-18a0a-0yTOa5NOzrrRoonBpSKBpCKCCKSnCCBhBmme7efMSUSzUUaOyT5OaN-0aUxpoopMSzTN99WbV2VVXX9eYV0WaN-V-OtvKKUSzMrs1797VtpzV6rrSSrzBhKCKMSrT-Wa-V0V-X77ca--UzzzyHpMT-yT-7-sOaObbyTTOzUtsUIMSpSRnMzMT0WsTOs97hIBeX-X7tVVtzVc8WWaUonMzbKUsTUbSxrnMUKBoonJnJgpBpBoptaNOttaT5NUxprCUT1-VObbzrUzzyTUzzzy2zSxxxzry-1-Wrbtbs9zbzV9UV19-fa-taTOpUWxMsN716aUKyUps0xzaNN0VOWbaUzSrzaMrzVcX155OVOV0ztby-199f1XOWa-N-TOWa5UaNUaOa5OaUtzxtaN7egYy-VTOaUrnMwnKtzxpzaICTmoomenCKS9e9hSKxzbrSrSKBgpMKrWs-_yTNMbMyTOzrJnHnKxrKpSMKMSpprKSSMU9fBopKKpcfKSMAIKSrUMMpSSrUzVbrMUUTMympKrSrUUzMBnKSKrSxpJpMrUSSpSKS97cXXXXcXXXX9997ccX7c7X7V11171N-V-VVX1-71117-7-X19997V1mopKrSxpMMKpPeVX7hJfKCCKMMMMMKKpprUa6BpepKAK8V1meommnKMPgpAACReonACBopKSIKMMCKKKKKRpKCKJoprUtbbSSUs4MtaT-78sUxzzwpxxpxrKKSSSUSpUSSSSSKKKSKKMKSKJpKKKIKKKJoopBn9mccgpKICAMIKKKrKCJnIIBopMMzxxrrSxxxrSpSMSpKABofBnBn97710VA112V1171mmgn9k7V51-7XecXpAHhAIBooo-X75NN-XeXnBnKIBnCCKBnB9gpKprryU_ppSzyOWVObrzyTShPfIBnCK9hKCCJpKzrzxprSrSSUrxxqeeehUxzUrrABnIBhMzsOxrxSmgpxnMHnHhMnMICHmpMnHhSyMBhLopC9fIMhBnBnCJommmfAA1nBo97c9nMMrFhBgnBehBgfABfIKSx9X17N1emXABf9gmnJepJmhRmopKCMSUSxrMSrrUSxrrxrSrSrMSSMKKppCKKRognBggogeefI9mpxrr9nBggoog7--N-e999fAa-XfJV17s7XA97XcgecWV7eeAJpKKJoopCKBpKKKrTTMMKSxRpKrSzrzxxrStSrUUUSSpLpCMSKMSzMSSRef7Xce7e9X997-cX9-c-777-11197VXX17X7cgc0V0VNN1VOV-1-WVV-77VcV71-V-71--AJVV7XhMCBmfBnC797g-ACI7-Oa--11-Vc-1XVX9979X17V1-VV7cec9oppnBn1gXo71oome-1nHmgfBpKIBgmmcenIBnBnBnAAAIA9mmonI9egoXmggopCMKKKLpQCIBoopKopJcgnIBp9fACJmge7X77VVa-11-V7-VVVX-V72V7-7-VVV11-V7----V---N78V5NN-V6s9XOy1cepgpQIA9f9e7X777VX7UTUbta1eekXX7X0VcX91c--g7-11emXceeXX9ee99ce9g7cX999XXXX99X7XV-5-V7ceeegeX7X977X77-X7XVV-5-1-7--ecD-9hBX99onAMSKIMJpKSpKrMKJhIMKopST-NOaOrRopIBfIMSSMzxzUpzUUaUaUbttyUaOhBpIJppMKprSxrUrrKMKprRnBn9ggnBms9gnICIK99efBomceXgnIBcXceeeXeefBp9emceececeegmeXXeekee9X9Xf9ecee7X7-5N-a-N--NOWVN--V-1-V1--5---711171--550aN5--0V1-V77-55---------N-7XOta6aN1ggnBmnI7VD-VNN--NN1ghKBpKIKKJpKIIKCKKKCKIKKRnBopKKrKSSIJpIIJoopCIJpKUKSMLpSKKIIJpKKMSnKrUSSppKpMSMKpSKrKp9eepUrpSSKpSprrrzzzSrrzzzrUrzxrUzUzUyTSxnICKCACCCBnABnBgnBmnABnCBnBgmnBgmmmgggggf9meemeXggf9mgemmmenAAABmmmmXhA7cgnIIAIBnBmhBnIBnKKSMSpgnCKRnKKMKKpKSprQMQCIKKCKMKCJpKKpMBohRmnABfB-1V9sQR73q09kCIBed989cCHZpMUMMSMSUOxbpy0bbxSraOaOc7TVP29C9Vc0VBecV--7NVV-N8H9w--c9BgrX-BVhQICKrSsV-1VkNB1Dn9choeAEHp9A9eAKKp9fCI9Xme118BgecX7IKKAKrJce70cXXXcXMSppCzSpJxSMKSKSSrk-0xpxxzba-17Oxta56paOsNNTOyTOa--USkWzMUUzs--VWbrxrrVV-d9e7VHsFGFpA9BnCzzII9X97pxS9XHVZoogqUtzqUyUxx50WsTOXmgcOuVOXc0T4CohpochopxzyN7X7NXV-cNWurX-AW_mQ9horyWa--D6JABqN-51WZ4aN79-1XOJ2Oc-58_IBN-i8hrCBfItza-V2Nd5onEIMLOs-X-0se3gprOX1V5NezHrS9eACprpxy0aN7cVV07h4Zpy1V3shEFnKMUrzcVN7I91V-chgRwP--Xvb6V37jO2mfSxrUba79cV3cjXTpJpJOyTOX7gc--1B70i-6Y102KttXe-4Y2-QBrWV-qBklBoptztf9-7-aBzewzzyPee--YGg2-DspvZoeeeXmeA9mgmogn9fSApra0tzWzy6tzzbzztza-e-1YR0fR--PDnihKtVX-SYi0nMS9VecnMSUzxc7UNN5eV4HE3LxHx9HfA9nBxpaX5TUbzUpKDNUKBh9e5BfCMSFT6zUbaOd9V0aP7OZecWV-dYlL2AAIBmcozMopohpzU---NOaOa6X97-LEHZBzbeV07yFszq9V-cz9FrX-4YxwbHc6s-9FJpByV0d0kXnUT7V--FTac-5FvBCV-XGFeBnEUa1-686HMnJmxCIATUpUzV5--57eV2t6dDnABplyUaN1c--GxMc-9HB5gtV38862nCBopa0taT7V0d8AyppN7-1THOURmocpAKpBc9zSMU0aN551-USL---WZbifBogn9ghCUrLTTTOyOWs7e7V08F5moo5-48NGSmzJmVCKK6ls-0V-1_meQFN19MIGBrKKKKopKzWaUbsX7X77-17c-1P80D09ablQKBxrSSMSxzUSpSrSrSprMMUSVVVVV0baXX997XX7ccXVX17X7c-DQ9vBxX-PblGIMMSrMMMkVVOte97eX7-DUDUCL1-0bwmfD-3c-SvC55-NcAPfppppSrSr1117X171-Ju42Zn9gmd9ceceAMSrSppKrSIBfrKCMUUKk-T9mcV5Ua5Ubz6tX--0aOa1X902cKbrCKKJpHpIJnIKBnCCBfBfEryOttVOu5OaTN5OX0a-7--1---cRyM--P9esnVneG9xnBmn9grKKJnIJpKSKMKJporUonHe2IBmmnCBpCKrSrKpppxrSzUzxxrV5-NNNOV-Ws-XV55UrSrxyOc775-7egoe50Wta7X777N--7VOxrSVWtbzUUSqV6bWaN19cVX99gecemd9ec1xdFn2SrJeCpKrMSrKpSKSKIKKIICCI9XKMKCMSII9comomnAABpCIJpBmrTObs0taT5OsNOzaUSKMUtV-0aXX0WxOzaOV0zr1750zrGWX--XVVV-77X7V0VV-117XXXcHX1V39Nu-nKrUUyP7X9XVFeTW0xrI997KBcXBgnCAJpta50aUpIIBnKSzba-0VVUzbqNX1c--dA_c19eGowgggnCSSGWWWbaUsUUUccee705ejHzrzUUyNA9eXeV19fFvonOaTX-Rf_UfKCBeISJxrT-0WbbVNXe--AcyX--Aenu-lfzAABeconJnUP5UrSpKIpxLV0zML5-V7--1X7-2gTJfAOV-AQx3k--sU3c1TvB1BnKCIKIKCpMSGzr-0VN--751-19-0iur2k0FkOrQBgceZgnKKMMKKSJmXxpSSprMs6rJnrUra5NX7-X10X0aOVN-1cV70c16258gfA9fJmnIMKxzyOaOs-NNNX-7lElAMryXe7-042oc-A4AKhN-7gKbcmpIrX6zrxrMzUVeVX-gocVXV-3MmVV-3NpHV4wNq3mmmrUUrMUTP77-X7--lazYV3RQ6imfrrSprs-1X9-7liMQEOxse70E6TIBmZxlxxKOa77VV0I6vXBefKMIM5Ota50cV-RW4Rw-0RW5cnK5--Om5EABpMKBhSxxs17-0V5X--H5H1-9mCaYBoxbaP70emCc2MSIBepJfIIBmVP7mnCIAACCKIlV50bxqUV6zxxpCKprzzaUKa577cWVNUrOtV17V17V7Xcc--HEP1-0mI5IF-0mLgQF-amT1YIBonIIICBgonGaOaNOWVNOWba-02AS3hKIKIJN0V-5--AByfCsV-BqE5k-6CtMgN-0D4wcDzDLQCCCBpIIAAUJmmfBnAAJonCBoomgggfABpAKCJeecme9IBnKKKrMJrSrzUSKpMKpzrtttbxpMbbqOaUwUxObzrrK6aTTTOa5550Vc155ObWaOs9--0WWbtzyNce9cc-Ne7Vcc90zbcV0ztte90byTOXeXeeeVNXeeV0RupTnClV-hngH2CCCCJpKKKppUUtzbta5-V777-X177XV1wx_ZnIKKaN-V-PnvrYCJooerSo-OzuXVTOV71MEjtggeeeggnIAACJoTUzrMUbbttyN-AEykhD--x0GZrsc-2FY2g-4o9gQCSX-CjFseBonHonBf9en9eegf9XfCIBfBpCKMMHhCCKpCKICIpOtzSMMKKIJxUbbs7VN1---VV5ObbxrKCESzUpISy0bbbse1cX5-XVcXeV6y6aTNNNfBmehCCBee19cVV-0a6bzttyUyTUtzwUtttaNNOWV-1oImQL--AGQ0CNV-x5IkxkV0IIIYXm2V7XXeyUta5UV-46fyV0C78BrT7V0S83qnAyP2IoidnCSprrSxrSzrUMSxpMxzUUSSMMMMSzSSrrSprMSpMSSxrSxxxprrrrrUrxrSUUbtaUUL----WX-5N97X9emVP97719ecX-0aNcgmme6a9eX7199e77gecVX7cXXXXXcXX77X7X9egeeXX9-2oitACsV0hAoJnEbsc1EIX0Bgeen9gf9rSaOzzWyUrzqNX9-0CE-XnxVV-4FqeV0SGIunObe-1p622T7-0JRDc-0JfGc-vK0CgggrUzaT19V-CLDDs-6Ku0CV-ALMbENV-COvBk-bLoRjSrR-cX-8pp72IJoOWV--4T3HV-STYBq--hTbPoN-6pzxnBpT0X-5q4TfCGaNV-xXFHpN7-6N_hh--2NfsB-NqBUQHeCCtzSSSzT1cX11-1CZ-NpprX17-7qMXnCMyN7c-IOb-BnaN-0Owzc2fPAlBgggf9fAHoonAABgnCKCbbaT5OWaOaTOtbaTTOaN-0PiN7-MPkJBf6tV-4fLuV-SgO9lV-phLT7tV-4gqNV-4hl5V3xiFwnA9nAROzqOaOXV-SifanVGKwWFOaOV6zzzzUUy6tztbKta56s-WrzzsN-5T4rKpppSKSKKKM-6Sk2RmmeXgeggnTUbxyTUbyOe-OMnm0a50aOV-NNOyNOxtyN-fRZugenzttuc6MRg2gooef9eemeX7XeeeA9Y9BehCIUzrMUzzbrxzttzztzUzrzqUzzbzzzbbzrzzV-9fA9eeX0XeBeeY9e7-DrA8vSzrOtaXeec-0S7u7-rS8wBhCUbttcec-bSGCgnCzaN9-BrL6QBezxyTPXV4hpYLmgfCtzxzSttX9ce-" :
		au.pX === aAg + 9 && (db =
			"EcCx-VQCO1iiqOLOKeeedae_ddadadadOfiveOeLeeeedadaPiuuiePPeeyeeeeOeaPadaeeydPeOedaOPLOeeeOadLOKLKKLJG4G3G4G4G3F-3GJG4G4KKG443G3G3G3G4K3K3K3GKKK3FJ40F33GK0K0K3G3F3F2nBnBnBnB-Bn-04G--BzzwEByvn-wG-BnnB2BkG44K-4KPKQyde_K-G3GKFwGPKO_O_K3J4KG4KKG4KKKJG4KJKK30304LOJG3GKKKKKQvjzuzziviueeaKaKPKKKKKKKKK3K_eOKO_OedaKaLaOevedaOGOeOeeaOaOaOeOjzvjyaPeOKKKOK43K_KKaveJGJ0-JG3G3GF3G3G43KaKF3G4aOedaOFKLK4_eee_dJK33KeaOLOaOjveeKLO_OaOaeKLPeivjeaOeOaJKGKJ4PdadafiyjedLPeueK3F-G30F3G3-3LOaOjeKLPe_O_OeaPfieieeyeaOaPOKOeedeOdada_daOdaKd_O_aOKPOKLKaKdK4LK3LTdaOdKaOK_KLPOaaO_LPKGKKK_KOaLO_aOOaaOdaPOdaO_OaKOdaPOdaPedeOJF--00LaPdeaeOfeyeiuudaueaaPdbeOeuefefuivfifujifieviivifeeid_G-04OF0-03KaPvievjizfeeLJ0-JG-KdOTvfiyviyujffviujeiufeiefivivfivvfeevivveiuueieiefeeiyejffuiuuiviuvfiifiieePeeaieieveuePdaPKJKefefefiuzzvzivviyfvnvjvzEzzjzwzzzBnzwnnk2Bwkn2zzknB-n2BnEBzyzzBzzEwnzznzzzjfzBzwzznziz2zwnBnBBkB--B2EBznEzBwnBnBzzBknEnEByywzzzzzEzz2wnzkzznEBwwEnEnEzznEzzzzzzzzEzwwEEizizizivjvjfznnzyyyvivzzwnyviuizyeyeKbifiuizzvifieeuyviuiuefie_iviiyjzvn3F3Bnw-BnBn2BnBnwnwnwnBkBBk22nEn-EeeieKdeiudaOaOPedaeePeee_KKLPOefzkzEEjzwk2B-k-kBB2yiiuieueeaeeaOOaOvzzzBzvjivjuiuyevieifiedaOeueuivivieuvfyvzvyvvuuvwzzyyvzzvjivvivvjyvznBnn2wzznwoLK-z2BknzEivePPLOOvjBwnEffeuyzefzuuujnkkGG-yzEEzBnEBnnBwnEBnznzzvzzznzvzzEBnzn-k-k-k-2-wB2B-k2-2nBB2kBBwnBw-nB-2Bk22Bw-BkknnBBBBBnBE-znznkkEnE2--kEBknBBkBBk2E-3-2Bk-k2B22BB2k-k-k2BBn-w2-32k-C3F--k-FG0G-22-2-FB--k-2-w-G32En--nB-2kKLePLdFJG3-F0033G043-l3-G3K3JK-32B3G4K4F--B--B--FGLJGJ3F03JLaeKFG--0---BFK--203FGGFG33F2nBFG3FGJ4GJ4K02GKF03-GKKG3K0JFK3G03F--G--l43--Bk--kG-FF3F03G-403G----l0----G--Bn33GJG340JG3-G4KaLKPKG-4-3F3F03-B-------G3FJ00--3KGF--0---03G0032T4mfgmegmeX7fBnJnKIEzzzzbrpzzaObtVOaNX9c9c0JN9cQfjzGG0F4NoWynBpJnKzzzV---Xc1RfMlOOvfvzwEw3GKKF-0gAIV-2OK2-3aoazBjs-pIUdyOaKaKaOfzzvgBnBF---1gInV-4OaA-BexerKESrs-V9V3q6e6dauVn3-0fPHBpMs-c-SiqWQwJ1mtRSUSKKKKKKJOzzxrROc11--TX-X7V7eeV4Meo2avi2kCK--EcNy-OUJfiLKdTzsBk-0kCPrF0fVVRjiveveiueOuveeeeaNn-n22-BG--030303K3F3B6-nnBnBrSr0a---EsTXQudeviviedazk-2-G-030K-4l1tMCkOc-57MIs-E3IhS5P-CYA-DLew--koIyA9emmfACMSrUtbzzzTTObrUtV7ge7X7eeV8QnZxddaebjwnB-30F3xzBZnMKCMzra71-7cV3wA4p_Qzzo4Ffy5yanHpIKSKMKSMSSrKKMofJppMKSKrSpSMKSzrzzrUtaOzsTN1oc5OaUzrHnCTOtaP755N5-T-NUTNN-N-5-5-N-P7X97gn9gmeee9n9meeX97cX7eVeX9cXV"
			), (new os).ou(db)
}

function a9j() {
	this.pW = null, this.ch = function() {
		var aAh = [120, 105, 92],
			cos = [12, 12, 60],
			aAi = [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
			aAj = [140, 130, 120],
			aAk = [12, 12, 76],
			aAl = [240, 120, 1024, 30, 19, 30, 70, 8, 20, 3, 9],
			aAm = [130, 117, 106],
			aAn = [12, 12, 68],
			aAo = [270, 210, 1024, 28, 19, 33, 50, 8, 26, 3, 9];
		this.pW = new Array(au.a7X + 1), this.pW[0] = {
			name: "White Arena",
			g0: 230,
			i0: 230,
			k3: 1e3,
			k0: 2e3,
			a9m: 173
		}, this.pW[1] = {
			name: "Black Arena",
			g0: 800,
			i0: 800,
			k3: 100,
			k0: 50,
			a9m: 43
		}, this.pW[2] = {
			name: "Island",
			g0: 512,
			i0: 512,
			k3: 128,
			k0: 32,
			a9m: 0
		}, this.pW[3] = {
			name: "Mountains",
			g0: 960,
			i0: 960,
			k3: 60,
			k0: 8,
			a9m: 0
		}, this.pW[4] = {
			name: "Desert",
			g0: 900,
			i0: 900,
			k3: 100,
			k0: 5,
			a9m: 0
		}, this.pW[5] = {
			name: "Swamp",
			g0: 1e3,
			i0: 1e3,
			k3: 100,
			k0: 40,
			a9m: 0
		}, this.pW[6] = {
			name: "Snow",
			g0: 1e3,
			i0: 1e3,
			k3: 100,
			k0: 20,
			a9m: 0
		}, this.pW[7] = {
			name: "Cliffs",
			g0: 1024,
			i0: 1024,
			k3: 128,
			k0: 32,
			a9m: 0
		}, this.pW[8] = {
			name: "Pond",
			g0: 820,
			i0: 820,
			k3: 200,
			k0: 100,
			a9m: 0
		}, this.pW[9] = {
			name: "Halo",
			g0: 1024,
			i0: 1024,
			k3: 128,
			k0: 32,
			a9m: 0
		}, this.pW[10] = {
			name: "Europe",
			pV: aAj,
			pY: aAk,
			aA4: aAl
		}, this.pW[11] = {
			name: "World",
			pV: aAm,
			pY: aAn,
			aA4: aAo
		}, this.pW[12] = {
			name: "Caucasia",
			pV: aAm,
			pY: aAn,
			aA4: aAo
		}, this.pW[13] = {
			name: "Africa",
			pV: aAh,
			pY: cos,
			aA4: aAi
		}, this.pW[14] = {
			name: "Middle East",
			pV: aAh,
			pY: cos,
			aA4: aAi
		}, this.pW[15] = {
			name: "Scandinavia",
			pV: aAj,
			pY: aAk,
			aA4: aAl
		}, this.pW[16] = {
			name: "North America",
			pV: aAj,
			pY: aAk,
			aA4: aAl
		}, this.pW[17] = {
			name: "South America",
			pV: aAh,
			pY: cos,
			aA4: aAi
		}, this.pW[18] = {
			name: "Asia",
			pV: aAm,
			pY: aAn,
			aA4: aAo
		}, this.pW[19] = {
			name: "Australia",
			pV: aAh,
			pY: cos,
			aA4: aAi
		}, this.pW[20] = {}
	}
}

function tt() {
	(qG = void 0 === qG ? document.createElement("canvas") : qG).width = au.eT, qG.height = au.eU, tx = qG.getContext("2d", {
		alpha: !0
	}), ty = tx.getImageData(0, 0, au.eT, au.eU), a1e = ty.data, ad.pB.pC(a1e)
}

function bu() {
	var dy, g0, i0, max, aAp, k0, aAr, aAs, aAt, aAu, aAv, aAw, aAx, aAy, aAq = 1e4;

	function aB6(aB5, k3, et) {
		var ds;
		for (aAr[0] = aB5, ds = 1; ds < et; ds++) aAr[ds] = aAr[ds - 1] + k3, k3 = aAr[ds] >= aAq ? (aAr[ds] = aAq - 1, -k3) : aAr[ds] < 0 ? (aAr[ds] = 0, -k3) : (k3 += 16384 <= aF.random() ? k0 : -k0) < -aAp ? -aAp : aAp < k3 ? aAp : k3
	}

	function aB8(jh, ji, aB9, et) {
		(aB9 ? function(jh, ji, et) {
			var ds;
			for (ds = 0; ds < et; ds++) dy[ji * g0 + jh + ds] = aAr[ds]
		} : function(jh, ji, et) {
			var ds;
			for (ds = 0; ds < et; ds++) dy[ji * g0 + jh + ds * g0] = aAr[ds]
		})(jh, ji, et)
	}

	function aBC(value, et) {
		var ds, a9E, gp, ge = value - aAr[et - 1];
		if (0 != ge) {
			for (a9E = 1 + el(Math.abs(ge), et - 1), a9E = ge < 0 ? -a9E : a9E, aAr[et - 1] = value, gp = (gp = et - 1 - el(Math.abs(ge), Math.abs(a9E))) < 1 ? 1 : et - 2 < gp ? et - 2 : gp, ds = et - 2; gp <= ds; ds--) aAr[ds] += ge - (et - 1 -
				ds) * a9E;
			(ge < 0 ? function(et) {
				var ds;
				for (ds = et - 2; 1 <= ds; ds--) aAr[ds] < 0 && (aAr[ds] = -aAr[ds] - 1)
			} : function(et) {
				var ds;
				for (ds = et - 2; 1 <= ds; ds--) aAr[ds] >= aAq && (aAr[ds] = 2 * aAq - aAr[ds] - 1)
			})(et)
		}
	}

	function aBF(aBG, aBH, et) {
		for (var ds = 0; ds < et; ds++) aBG[ds] = aBH[ds]
	}

	function aBI(e7) {
		for (var ds = 0; ds < e7.length - 1; ds++) e7[ds] = e7[ds + 1] - e7[ds];
		e7[e7.length - 1] = e7[e7.length - 3]
	}

	function aBJ(uJ, gap, fo) {
		aAs.push(uJ), aAt.push(gap), aAu.push(fo)
	}
	this.bg = function(aAz) {
		! function(aAz) {
			var ds;
			for (g0 = aAz[0], i0 = aAz[1], aAp = aAz[2], k0 = aAz[3], dy = new Int16Array(g0 * i0), max = i0 < g0 ? g0 : i0, aAr = new Int16Array(max), aAs = [], aAt = [], aAu = [], aAv = new Array(g0), aAw = new Array(i0), ds = g0 - 1; 0 <=
				ds; ds--) aAv[ds] = !1;
			for (ds = i0 - 1; 0 <= ds; ds--) aAw[ds] = !1;
			aAx = new Int16Array(g0), aAy = new Int16Array(i0)
		}(aAz),
		function(et) {
			var aB5 = aF.random() % aAq,
				k3 = aF.random() % (2 * aAp + 1) - aAp;
			aB6(aB5, k3, et)
		}(max), aBF(aAy, aAr, i0), aB8(0, 0, !0, g0);
		var jh, ji, aAz = dy[0],
			et = max,
			k3 = aF.random() % (2 * aAp + 1) - aAp;
		for (aB6(aAz, k3, et), aBF(aAx, aAr, g0), aB8(0, 0, !1, i0), aBI(aAx), aBI(aAy), aB6(dy[g0 - 1], aAx[g0 - 1], i0), aB8(g0 - 1, 0, !1, i0), aB6(dy[g0 * (i0 - 1)], aAy[i0 - 1], g0), aBC(dy[g0 * i0 - 1], g0), aB8(0, i0 - 1, !0, g0), aAv[g0 -
				1] = aAv[0] = !0, aAw[i0 - 1] = aAw[0] = !0, aBJ(0, g0, !0), aBJ(0, i0, !1), ! function() {
				var aBL, uJ;
				for (;;) {
					if (aBL = function() {
							var ds, aBL = aAs.length - 1;
							for (ds = aBL - 1; 0 <= ds; ds--) aAt[ds] > aAt[aBL] && (aBL = ds);
							return aBL
						}(), aAt[aBL] < 5) return;
					uJ = aAs[aBL] + el(aAt[aBL], 2), (aAu[aBL] ? function(jh) {
						var et, aBO, ds, a2l = 0,
							aBP = 0;
						for (; aBP < i0 - 1;) {
							for (ds = a2l + 1; ds < i0; ds++)
								if (aAw[ds]) {
									aBP = ds;
									break
								} et = aBP - a2l + 1, aB6(dy[jh + g0 * a2l], 0 === a2l ? aAx[jh] : aAr[aBO - 1] - aAr[aBO - 2], et), aBC(dy[aBP * g0 + jh], et), aB8(jh, a2l, !1, et), aBO = et, a2l = aBP
						}
						aAv[jh] = !0
					} : function(ji) {
						var et, aBO, ds, a2l = 0,
							aBP = 0;
						for (; aBP < g0 - 1;) {
							for (ds = a2l + 1; ds < g0; ds++)
								if (aAv[ds]) {
									aBP = ds;
									break
								} et = aBP - a2l + 1, aB6(dy[ji * g0 + a2l], 0 === a2l ? aAy[ji] : aAr[aBO - 1] - aAr[aBO - 2], et), aBC(dy[ji * g0 + aBP], et), aB8(a2l, ji, !0, et), aBO = et, a2l = aBP
						}
						aAw[ji] = !0
					})(uJ), aBJ(uJ, aAs[aBL] + aAt[aBL] - uJ, aAu[aBL]), aAt[aBL] = uJ - aAs[aBL] + 1
				}
			}(), jh = 0; jh < g0; jh++)
			if (!aAv[jh])
				for (ji = 0; ji < i0; ji++) aAw[ji] || ! function(jh, ji) {
					var value = dy[ji * g0 + jh - 1] + dy[(ji - 1) * g0 + jh],
						wX = 2;
					aAv[jh + 1] && (wX++, value += dy[ji * g0 + jh + 1]);
					aAw[ji + 1] && (wX++, value += dy[(ji + 1) * g0 + jh]);
					dy[ji * g0 + jh] = el(value, wX)
				}(jh, ji)
	}, this.aA6 = function() {
		return dy
	}, this.a9r = function() {
		dy = null
	}
}

function el(hi, hs) {
	return Math.floor(hi / hs + 1 / (2 * hs))
}

function a6P(hi, hs) {
	return 0 <= hi ? el(hi, hs) : -el(-hi, hs)
}

function i9(dy) {
	return dy * dy
}

function vY(hi, hs) {
	return hs < hi ? hi : hs
}

function yF(hi, hs) {
	return hi < hs ? hi : hs
}

function yf(hi, dy, hs) {
	return dy < hi ? hi : hs < dy ? hs : dy
}

function aBR(dy, et) {
	for (var iU = el(dy + 1, 2), ds = 0; ds < et; ds++) iU = el(iU + el(dy, iU), 2);
	return iU
}

function fa(dy, et) {
	return dy < 1 ? 0 : aBR(dy, et)
}

function aBS(jm, jn, qN, wK, jo, jq, qO, wL) {
	return !(jm + qN <= jo || jn + wK <= jq || jo + qO <= jm || jq + wL <= jn)
}

function aBT(jm, jn, qN, wK, jo, jq, qO, wL) {
	return jm <= jo && jn <= jq && jo + qO <= jm + qN && jq + wL <= jn + wK
}

function p2(dy) {
	return Math.floor(!!dy * (1 + Math.log2(dy + .5)))
}

function bG() {
	this.fY = function(hi, hs) {
		return Math.floor((hi + .5) / hs)
	}, this.aBU = function(hi, hs) {
		return Math.floor(hi * (hs + .5))
	}, this.sqrt = function(dy) {
		return ~~Math.sqrt(dy + .5)
	}, this.pow = function(dC) {
		return Math.floor(Math.pow(2, dC) + .5)
	}, this.sp = function(value, min, max) {
		return Math.min(Math.max(value, min), max)
	}, this.aBV = function(e8, eA, eC) {
		return Math.max(Math.min(e8, eA), eC)
	}, this.aBW = function(aBX, aBY, jh, ji) {
		jh -= aBX, aBX = ji - aBY, ji = 0;
		return 0 == jh ? ji = 0 <= aBX ? Math.PI : 0 : (ji = Math.atan(aBX / jh), ji += 0 < jh ? .5 * Math.PI : 1.5 * Math.PI), ji
	}, this.log2 = function(dy) {
		return Math.floor(!!dy * (1 + Math.log2(dy + .5)))
	}
}

function cb() {
	var aBZ = [new aBa, new aBb],
		aBc = aBZ.length,
		fu = -1;
	this.resize = function() {
		0 <= fu && aBZ[fu].nD().resize()
	}, this.show = function(ds) {
		0 <= fu && aBZ[fu].nD().oH(), aBZ[fu = ds].nD().show(), aBZ[fu].nD().resize()
	}, this.oH = function() {
		0 <= fu && (aBZ[fu].nD().oH(), fu = -1)
	}, this.aBd = function(title, n4, aBe) {
		for (var ds = aBc; ds < aBZ.length; ds++)
			if (aBZ[ds].nE() === title) return void this.show(ds);
		aBZ.push(new n3(title, n4, aBe, fu)), this.show(aBZ.length - 1)
	}
}

function aBf() {
	var n7, aBg;

	function aBh() {
		de = !de, g8.vC[0].uD = de, aK.a5N(0), dp(de, !1)
	}
	this.show = function() {
		n7 || (aBg = new nb("Mobile Friendly", "Increase size of user interface to better support mobile devices", aBh), (n7 = new nA).ch("Accessibility", new n9("Back", () => {
			n7.oH(), aw.jv.show()
		}, ae.lI), [aBg])), aBg.setState(de), n7.show()
	}, this.resize = function() {
		n7 && (n7.resize(), aBg.resize())
	}
}

function aBa() {
	var n7;
	this.nD = function() {
		var n8, nu;
		return n7 || ((nu = new nt).nq(new n9("Account", () => {
			console.log("Account")
		})), nu.nq(new n9("Settings", () => aw.show(1))), nu.nq(new n9("Links", () => {
			console.log("Links")
		})), nu.nq(new n9("Replay", () => {
			console.log("Replay")
		})), nu.nq(new n9("Game Version", () => {
			console.log("Game Version")
		})), n8 = new n9("Close", aw.oH, ae.lI, ae.lK, ae.lG), n7 = new nA("Menu", n8, [nu])), n7
	}
}

function aBb() {
	var n7;

	function ch() {
		var ds, aBi, aBj, aBk = new ny;
		for (aBk.o5(function() {
				var ds, nn, aBi = new nk;
				for (aBi.nq(new nw("Graphics", "Some example text which won't wrap. \n As long as the screen is wide enough ofc ")), aBi.nq(new oi(
						"Some example text which is marked to wrap (CuiWrappingParagraph), this text does not have any influence on the width of the different sections and fits into the available space.")), nn = new oI("Resolution",
						"Select the relative resolution to render the game at", fu => console.log(fu), 0), ds = 0; ds < 10; ds++) nn.oS(10 * (ds + 1) + "%");
				return aBi.nq(nn), aBi.nq(new oI("Quality", "Select the quality of the graphics", fu => console.log(fu), 2, ["Low", "Medium", "High", "Very High"])), aBi
			}()), aBk.o5(function() {
				var aBi = new nk;
				return aBi.nq(new nw("Gameplay")), aBi
			}()), aBk.o5(function() {
				var aBi = new nk;
				return aBi.nq(new nw("Accessibility")), aBi.nq(new nb("Mobile Friendly", "Increase size of user interface to better support mobile devices", aBh, () => de)), aBi
			}()), aBk.o5(function() {
				var sJ, aBi = new nk;
				return aBi.nq(new nw("General")), (sJ = new n9("Reset Settings", () => aw.aBd("Reset settings",
					"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
					[new n9("Confirm", () => console.log("Resetting settings"), ae.l5, ae.l6, ae.l7), new n9("Other Button", () => console.log("Other button"), ae.lI, ae.lK, ae.lG), new n9("Yet Another Button", () => console.log(
						"Yet another button"), ae.lO, ae.lP, ae.lQ)]))).nN(.5), aBi.nq(sJ), aBi
			}()), ds = 0; ds < 10; ds++)(aBi = new nk).nq(new oi("Sample Container " + ds)), aBi.nm(0, 500 * Math.random() + 100), aBi.no(ds % 2 == 0 ? ae.lO : ae.lI), aBk.o5(aBi);
		aBj = new n9("Back", () => aw.show(0), ae.lI, ae.lK, ae.lG), n7 = new nA("Settings", aBj, [aBk])
	}

	function aBh() {
		de = !de, g8.vC[0].uD = de, aK.a5N(0), dp(de, !1)
	}
	this.nD = function() {
		return n7 || ch(), n7
	}
}

function bF() {
	"function" != typeof Math.log2 && (Math.log2 = function(jh) {
		return Math.log(jh) / Math.log(2)
	}), "function" != typeof Math.log10 && (Math.log10 = function(jh) {
		return Math.log(jh) / Math.log(10)
	}), "function" != typeof Math.sign && (Math.sign = function(jh) {
		return 0 < jh ? 1 : jh < 0 ? -1 : 0
	})
}

function c9() {
	this.a5c = 0;
	var a1j = -1,
		aBp = !1,
		xf = [],
		aBq = 0;

	function sP(jh, ji, aBz, ds) {
		return 0 === ds ? jh >= aBz.jm && (0 === ds || ji >= aBz.jn) && ji <= aBz.jn + aBz.wK : (ji -= ds * (aBz.wK - t3), jh >= aBz.jo && ji >= aBz.jn && ji <= aBz.jn + aBz.wK)
	}

	function aC0() {
		var qN = Math.floor((de ? .145 : .09) * fs),
			qO = Math.floor(2.25 * qN),
			gap = Math.floor(.065 * (de ? .53 : .36) * fs),
			jo = df - qO - gap;
		return {
			jm: df - qN - gap,
			jn: g6,
			qN: qN,
			wK: Math.floor(.35 * (1 + .35 * de) * qN),
			jo: jo,
			qO: qO,
			zE: gap
		}
	}

	function a2z(jh, ji, g0, i0, gQ, sz, hs, aC8, db) {
		var fontSize = (db === xf[0][0].name ? .65 : .5) * i0,
			font = ad.kj.oG(fontSize, 1),
			font = n.measureText(db, font);
		.92 * g0 < font && (fontSize *= .92 * g0 / font), gB.font = ad.kj.oG(fontSize, 1), aC8 && (gQ += 80, sz += 80, hs += 80), gB.fillStyle = "rgba(" + gQ + "," + sz + "," + hs + ",0.6)", gB.fillRect(jh, ji, g0, i0), gB.fillStyle = ae.gE, gB
			.fillRect(jh, ji, g0, t3), gB.fillRect(jh, ji + i0 - t3, g0, t3), gB.fillRect(jh, ji, t3, i0), gB.fillRect(jh + g0 - t3, ji, t3, i0), gB.fillText(db, Math.floor(jh + g0 / 2), Math.floor(ji + i0 / 2 + .1 * fontSize))
	}
	this.jv = null, this.a0b = new Uint8Array(4), this.vb = function() {
		return dR ? 4 : de ? 2 : 1
	}, this.ch = function() {
		var aBs;
		this.aBr(), xf = [new Array(6), new Array(10), new Array(7)], this.a0b[0] = 10, this.a0b[1] = 5, this.a0b[2] = 2, this.a0b[3] = 1, xf[0][0] = {
			name: "More",
			id: 0,
			gQ: 140,
			sz: 120,
			hs: 0
		}, xf[0][1] = {
			name: "Lobby 1",
			id: 1,
			gQ: 0,
			sz: 0,
			hs: 0
		}, xf[0][2] = {
			name: "Settings",
			id: 2,
			gQ: 0,
			sz: 0,
			hs: 0
		}, xf[0][3] = {
			name: "More Information",
			id: 3,
			gQ: 0,
			sz: 0,
			hs: 0
		}, xf[0][4] = {
			name: "Replay",
			id: 4,
			gQ: 0,
			sz: 0,
			hs: 0
		}, xf[0][5] = {
			name: d6,
			id: 5,
			gQ: 90,
			sz: 0,
			hs: 0
		}, xf[0].push({
			name: "FX Client v" + fx_version + " " + fx_update,
			id: 20,
			gQ: 0,
			sz: 0,
			hs: 70
		}), xf[1][0] = xf[0][0], xf[1][1] = {
			name: "Hide Usernames",
			id: 1,
			gQ: 0,
			sz: 0,
			hs: 0
		}, xf[1][2] = {
			name: "Hide Links",
			id: 2,
			gQ: 0,
			sz: 0,
			hs: 0
		}, xf[1][3] = {
			name: "Hide Zoom Buttons",
			id: 3,
			gQ: 0,
			sz: 0,
			hs: 0
		}, xf[1][4] = {
			name: "Reverse Name/Balance",
			id: 4,
			gQ: 0,
			sz: 0,
			hs: 0
		}, xf[1][5] = {
			name: "Resolution",
			id: 5,
			gQ: 0,
			sz: 0,
			hs: 0
		}, xf[1][6] = {
			name: "Country Minimum Font Size",
			id: 6,
			gQ: 0,
			sz: 0,
			hs: 0
		}, xf[1][7] = {
			name: "Leaderboard Refresh Rate",
			id: 7,
			gQ: 0,
			sz: 0,
			hs: 0
		}, xf[1][8] = {
			name: "Reset Settings",
			id: 8,
			gQ: 0,
			sz: 0,
			hs: 0
		}, xf[1][9] = {
			name: "Back",
			id: 9,
			gQ: 0,
			sz: 0,
			hs: 0
		}, xf[2][0] = xf[0][0], xf[2][1] = {
			name: "Tutorial",
			id: 1,
			gQ: 0,
			sz: 0,
			hs: 0
		}, xf[2][2] = {
			name: "Player List",
			id: 2,
			gQ: 0,
			sz: 0,
			hs: 0
		}, xf[2][3] = {
			name: "Clan List",
			id: 3,
			gQ: 0,
			sz: 0,
			hs: 0
		}, xf[2][4] = {
			name: "Privacy Policy",
			id: 4,
			gQ: 0,
			sz: 0,
			hs: 0
		}, xf[2][5] = {
			name: "Changelog",
			id: 13,
			gQ: 0,
			sz: 0,
			hs: 0
		}, xf[2][6] = {
			name: "Terms of Service",
			id: 14,
			gQ: 0,
			sz: 0,
			hs: 0
		}, !dR && dV < 5 && xf[2].push({
			name: "Cookie Policy",
			id: 5,
			gQ: 0,
			sz: 0,
			hs: 0
		}), (dR || 5 <= dV) && (dR ? !dX.mustShowConsentButton || "0" !== dX.mustShowConsentButton && "1" !== dX.mustShowConsentButton || xf[2].push({
			name: "Consent Form",
			id: 7,
			gQ: 0,
			sz: 0,
			hs: 0
		}) : "" !== (aBs = dS.loadString(187)) && "1" !== aBs || xf[2].push({
			name: "Consent Form",
			id: 7,
			gQ: 0,
			sz: 0,
			hs: 0
		})), 5 <= dV && xf[2].push({
			name: "Force Restart Game",
			id: 12,
			gQ: 0,
			sz: 0,
			hs: 0
		}), xf[2].push({
			name: "Back",
			id: 6,
			gQ: 0,
			sz: 0,
			hs: 0
		}), this.aBt(), this.aBu()
	}, this.aBr = function() {
		this.jv = {
			wH: 0,
			aBv: 0,
			z7: 0,
			jw: 1,
			aBw: 2,
			a8f: 4,
			a0c: 2,
			a8o: 2
		}
	}, this.aBu = function() {
		if (settings.hideAllLinks) ay.eC[0] = ay.eC[1] = !this.jv.aBv;
		else ay.eC[0] = ay.eC[1] = true;
		ay.eC[2] = ay.eC[3] = ay.eC[4] = !this.jv.aBv, xf[1][1].sz = this.jv.wH ? 130 : 0, xf[1][2].sz = this.jv.aBv ? 130 : 0, xf[1][3].sz = this.jv.z7 ? 130 : 0, xf[1][4].sz = this.jv.jw ? 130 : 0, this.aBx(5), this.aBx(6), this.aBx(7)
	}, this.aBt = function() {
		var us = di().split("");
		us.length < 14 ? this.aBr() : (this.jv.wH = parseInt(us[6]), this.jv.aBv = parseInt(us[7]), this.jv.z7 = parseInt(us[8]), this.jv.jw = parseInt(us[9]), this.jv.aBw = parseInt(us[10]), this.jv.a8f = parseInt(us[11]), this.jv.a0c =
			parseInt(us[12]))
	}, this.a2y = function() {
		var db = g8.vC[2].r6.a2w();
		dv((db += ~~this.jv.wH) + ~~this.jv.aBv + ~~this.jv.z7 + ~~this.jv.jw + ~~this.jv.aBw + ~~this.jv.a8f + ~~this.jv.a0c + "0")
	}, this.aBx = function(ds) {
		5 === ds ? xf[1][ds].name = "Resolution: " + ad.jx.tR(100 * aK.aBy(), 1) : 6 === ds ? xf[1][ds].name = "Country Minimum Font Size: " + (this.jv.a8f < 4 ? 1 + this.jv.a8f : 2 * (this.jv.a8f - 1)) : 7 === ds && (xf[1][ds].name =
			"Leaderboard Refresh Rate: " + ad.jx.tR(100 / this.a0b[this.jv.a0c], 1))
	}, this.g3 = function(jh, ji) {
		var ds, aBz, aC2;
		if (!(7 <= x.sR())) {
			aBz = aC0();
			var gearIconX = aBz.jm - aBz.qN / 2;
			if (jh > gearIconX && jh < (gearIconX + aBz.wK) && ji > aBz.jn && ji < (aBz.jn + aBz.wK)) return WindowManager.openWindow("settings");
			if (aBp) {
				for (ds = 1; ds < xf[aBq].length; ds++)
					if (sP(jh, ji, aBz, ds)) return aC2 = xf[aBq][ds], 0 === aBq ? 1 === aC2.id ? (aR.a5c = (aR.a5c + 1) % 4, aC2.name = (aR.a5c % 2 ? "Proxy " : "Lobby ") + (1 + (aR.a5c >> 1)), b7.d2 = !0) : 2 === aC2.id ? (aBq = 1, b7.d2 = !
						0) : 3 === aC2.id ? (aBq = 2, b7.d2 = !0) : 4 === aC2.id ? ac.show() : 5 === aC2.id && (console.log("try showing ad:"), ax.dD.dN()) : 1 === aBq ? 1 === aC2.id ? (aR.jv.wH = !aR.jv.wH, aC2.sz = aR.jv.wH ? 130 : 0, aR
							.a2y(), b7.d2 = !0) : 2 === aC2.id ? (aR.jv.aBv = !aR.jv.aBv, aR.aBu(), aR.a2y(), b7.d2 = !0) : 3 === aC2.id ? (aR.jv.z7 = !aR.jv.z7, aC2.sz = aR.jv.z7 ? 130 : 0, aR.a2y(), b7.d2 = !0) : 4 === aC2.id ? (aR.jv
							.jw = !aR.jv.jw, aC2.sz = aR.jv.jw ? 130 : 0, aR.a2y(), b7.d2 = !0) : 5 === aC2.id ? (aR.jv.aBw++, aR.jv.aBw %= 8, aR.aBx(aC2.id), aR.a2y(), aK.a5N(1), b7.d2 = !0) : 6 === aC2.id ? (aR.jv.a8f++, aR.jv.a8f %= 10, aR
							.aBx(aC2.id), aR.a2y(), b7.d2 = !0) : 7 === aC2.id ? (aR.jv.a0c++, aR.jv.a0c %= 4, aR.aBx(aC2.id), aR.a2y(), b7.d2 = !0) : 8 === aC2.id ? (aR.aBr(), aR.aBu(), aR.a2y(), aK.a5N(1), b7.d2 = !0) : 9 === aC2.id && (
							aBq = 0, b7.d2 = !0) : 1 === aC2.id ? (az.ch(am.aC3, !0), az.ch(am.aC3, !1)) : 2 === aC2.id ? (az.ch(am.aC4, !0), az.ch(am.aC4, !1)) : 3 === aC2.id ? (az.ch(am.aC5, !0), az.ch(am.aC5, !1)) : 4 === aC2.id ? (az.ch(
							am.rg, !0), az.ch(am.rg, !1)) : 5 === aC2.id ? (az.ch(am.wO, !0), az.ch(am.wO, !1)) : 13 === aC2.id ? (az.ch(am.aC6, !0), az.ch(am.aC6, !1)) : 14 === aC2.id ? (az.ch(am.aC7, !0), az.ch(am.aC7, !1)) : 6 === aC2.id ?
						(aBq = 0, b7.d2 = !0) : 7 === aC2.id ? dR ? window.webkit.messageHandlers.iosCommandA.postMessage("showConsentForm") : dS.setState(7) : 12 === aC2.id && dS.setState(14), !0;
				return aBp = !1, !(b7.d2 = !0)
			}
			return !!sP(jh, ji, aBz, 0) && (aBp = !(aBq = 0), b7.d2 = !0)
		}
	}, this.rq = function(jh, ji) {
		var ds, aBz, t0, ka;
		if (!(7 <= x.sR())) {
			for (aBz = aC0(), t0 = a1j, ka = aBp ? 0 === aBq ? xf[aBq].length - 2 : xf[aBq].length : 1, a1j = -1, ds = 0; ds < ka; ds++)
				if (sP(jh, ji, aBz, ds)) {
					a1j = ds;
					break
				} t0 !== a1j && (b7.d2 = !0)
		}
	}, this.gA = function() {
		var ds, ka, aBz;
		if (!(7 <= x.sR()) && (aBz = aC0(), gB.textAlign = gD, gB.textBaseline = gC, a2z(aBz.jm, aBz.jn, aBz.qN, aBz.wK, xf[aBq][0].gQ, xf[aBq][0].sz, xf[aBq][0].hs, 0 === a1j, xf[aBq][0].name), gB.imageSmoothingEnabled = true, gB.drawImage(
				settingsGearIcon, aBz.jm - aBz.qN / 2, aBz.jn, aBz.wK, aBz.wK), gB.imageSmoothingEnabled = false, gB.font = "bold " + Math.floor(aBz.wK * 0.4) + "px " + settings.fontName, (!aBp && gB.fillText("Win count: " + wins_counter,
				Math.floor(aBz.jm + aBz.qN / 2), Math.floor((aBz.jn + aBz.wK / 2) * 2.1))), aBp))
			for (ka = xf[aBq].length, ds = 1; ds < ka; ds++) a2z(aBz.jo, aBz.jn + ds * aBz.wK - ds * t3, aBz.qO, aBz.wK, xf[aBq][ds].gQ, xf[aBq][ds].sz, xf[aBq][ds].hs, a1j === ds, xf[aBq][ds].name)
	}
}

function bv() {
	var zT, aCB, aCC, aCD, aCA = !1;

	function aCE() {
		aCA = !0, zT = -1, aCB = new Array(4);
		for (var ds = 3; 0 <= ds; ds--) aCB[ds] = !1;
		var aCF = Math.floor(1 + .02 * xB);
		aCC = new Array(4), (aCD = new Array(4))[1] = aCD[3] = aCC[0] = aCC[2] = 0, aCD[0] = aCC[3] = -aCF, aCC[1] = aCD[2] = aCF
	}

	function aCG() {
		if (-1 !== zT)
			if (0 !== jE && f.ka()) {
				for (var aCH = !1, ds = 3; 0 <= ds; ds--) aCB[ds] && (aCH = !0, hA += aCC[ds], hC += aCD[ds], a8.rq(aCC[ds], aCD[ds]), p.zA());
				aCH ? b7.d2 = !0 : aD.kR()
			} else aD.kR()
	}
	this.sX = function(fu) {
		0 !== jE && f.ka() && (aCA || aCE(), aCB[fu] = !0, -1 === zT) && (zT = setInterval(aCG, 20), aCG())
	}, this.sT = function(fu) {
		if (0 !== jE && (aCA || aCE(), aCB[fu] = !1, -1 !== zT)) {
			for (var aCH = !1, ds = 3; 0 <= ds; ds--) aCH = aCH || aCB[ds];
			aCH || this.kR()
		}
	}, this.kR = function() {
		if (aCA && -1 !== zT) {
			for (var ds = 3; 0 <= ds; ds--) aCB[ds] = !1;
			clearInterval(zT), zT = -1
		}
	}
}

function bw() {
	this.j4 = new aCI, this.vt = new aCJ, this.lg = new aCK, this.ch = function() {
		this.j4.ch()
	}
}

function aCI() {
	var aCL, aCN;
	this.a42 = 5, this.a43 = this.a42 - 1, this.a3E = this.a42 + this.a43, this.a3D = [0, 1, 5, 2, 6, 3, 7, 4, 8], this.aCM = null;

	function aCT(ds) {
		return aCN[ds].aCA && aCL[ds].aCT()
	}

	function aCV(a3H) {
		aCN[a3H].dT = b7.dT, aCN[a3H].aCP = !1
	}
	this.s8 = 0, this.a3p = 0, this.ch = function() {
		this.aCM = new Array(this.a42);
		this.aCM[0] = "territorial.io";
		var ds, a9m = aF.a9O(0);
		for (aF.tr(0), ds = 1; ds < this.a42; ds++) this.aCM[ds] = h.qu() + ".territorial.io";
		for (aF.tr(a9m), aCL = new Array(this.a3E), aCN = new Array(this.a3E), ds = this.a3E - 1; 0 <= ds; ds--) aCN[ds] = {
			aCA: !1,
			dT: 0,
			aCP: !1
		}
	}, this.vz = function() {
		return this.a3p < this.a42 ? this.a3p : this.a3p - this.a43
	}, this.iF = function() {
		for (var ds = this.a3E - 1; 0 <= ds; ds--) this.a39(ds) && b7.dT > aCN[ds].dT + 15e3 && aP.lg.aCQ(ds, aCN[ds].aCP)
	}, this.zY = function(a3H, aCR) {
		if (aCN[a3H].aCA) {
			if (aCL[a3H].aCT()) return aCL[a3H].aCU(aCR), aCL[a3H].a39();
			aCL[a3H].oH()
		}
		return this.aCS(a3H, aCR), !1
	}, this.aCS = function(a3H, aCR) {
		aCN[a3H].aCA = !0, aCV(a3H), aCL[a3H] = new aCW, aCL[a3H].ch(a3H, aCR)
	}, this.aCU = function(a3H, aCR) {
		aCT(a3H) && aCL[a3H].aCU(aCR)
	}, this.aCX = function(a3H, aCR) {
		0 === aCR ? q.za() : aCR < 3 ? aP.lg.a1z(a3H, aCR - 1) : 3 === aCR ? aP.lg.a5B(a3H) : 4 === aCR ? w.za(a3H) : 5 === aCR ? a3H === this.s8 && aP.lg.aCY() : 6 !== aCR && 7 === aCR && aP.lg.a5e(a3H)
	}, this.a39 = function(ds) {
		return aCN[ds].aCA && aCL[ds].a39()
	}, this.send = function(a3H, mU) {
		aCV(a3H), aCL[a3H].send(mU)
	}, this.s7 = function(a3H) {
		aCN[a3H].aCP = !0
	}, this.close = function(a3H, aCZ) {
		aCT(a3H) && aCL[a3H].close(aCZ)
	}, this.aCa = function(a3H, aCZ) {
		y.a3K(aCZ), aCT(a3H) && aCL[a3H].close(aCZ)
	}, this.a3M = function(aCZ) {
		for (var ds = this.a3E - 1; 0 <= ds; ds--) this.close(ds, aCZ)
	}, this.aCb = function(a3H, aCZ) {
		for (var ds = this.a3E - 1; 0 <= ds; ds--) ds !== a3H && this.close(ds, aCZ)
	}, this.aCc = function(a3H, dC) {
		aCL[a3H].oH(), y.ch(a3H, dC.code)
	}
}

function aCJ() {
	this.aCd = function(a3H, mU) {
		ai.ch(mU), 0 === ai.gH ? aP.j4.aCa(a3H, 3205) : 0 === (mU = ai.mV(1)) ? function(a3H) {
			var aCh = ai.mV(2);
			0 === aCh ? (0 === ai.mV(1) ? function(a3H) {
				var ds;
				if (0 === a3H && 8 !== x.sR() && !(ai.gH < 4)) {
					b0.ft(0, ai.aCl(ai.mV(5))), b0.ft(1, "[" + ai.aCl(ai.mV(3)) + "]");
					var aCm = ai.mV(12),
						aCn = ai.mV(6),
						e7 = new Array(aCm);
					for (ds = 0; ds < aCm; ds++) e7[ds] = ai.mV(aCn);
					q.zc(e7)
				}
			} : function(a3H) {
				var ds;
				if (8 !== x.sR())
					if (ai.gH < 3) aP.j4.aCa(a3H, 3208);
					else {
						var aCo, qV, a3H = ai.mV(1),
							position = ai.mV(16),
							wX = ai.mV(4),
							e7 = [];
						for (ds = 0; ds < wX; ds++) qV = ai.mV(14), aCo = ai.mV(5), aCo = ai.aCl(aCo), e7.push({
							name: aCo,
							qV: qV
						});
						0 === a3H ? bA.a21(0, e7, 10, 1, .36, .55, position) : bA.a21(1, e7, 100, 2, .47, .5, position)
					}
			})(a3H) : 1 === aCh ? function(a3H) {
				var ds, hi, a4n, rV, aCp, aCq;
				if (a3H !== aP.j4.a3p) aP.j4.close(a3H, 3239);
				else if (6 === x.sR() && aL.ch(), 7 !== x.sR()) aP.j4.close(a3H, 3251);
				else {
					var a4M = [0, 0, 0, 0],
						aCr = ai.mV(6);
					for (ds = 0; ds < 4; ds++) a4M[ds] = ai.mV(aCr);
					var aCs = ai.mV(5),
						aCt = [];
					for (ds = 0; ds < aCs; ds++) {
						for (aCt.push({
								id: ai.mV(5),
								tm: ai.mV(4),
								a4i: 1 === ai.mV(1),
								pX: ai.mV(6),
								a4g: ai.mV(14),
								a4l: ai.mV(aCr),
								a4m: ai.mV(9) + 1,
								a3Q: ai.mV(10)
							}), a4n = ai.mV(3), rV = new Array(a4n), hi = 0; hi < a4n; hi++) aCp = ai.mV(9) + 1, aCq = ai.aCl(ai.mV(3)), rV[hi] = ("" === aCq ? "other: " : "[" + aCq + "]: ") + aCp;
						aCt[ds].a4n = a4n, aCt[ds].rV = rV
					}
					aL.a28(a4M, aCt)
				}
			}(a3H) : 2 !== aCh && 3 !== aCh || aO.ch()
		}(a3H) : 1 === mU && function(a3H) {
			var t0 = x.sR();
			if (8 !== t0) 10 === t0 && aP.j4.aCa(a3H, 3243);
			else if (a3H !== aP.j4.s8) aP.j4.aCa(a3H, 3244);
			else if (0 === ai.mV(1)) b7.rG.aCy(ai.mU);
			else {
				var ds, lz, t0 = ai.mV(2);
				if (0 === t0) 3 !== ai.gH ? aP.j4.aCa(aP.j4.s8, 3230) : (a3H = ai.mV(9), lz = ai.mV(7), 0 !== h5[a3H] && 0 !== h5[eo] && (lz %= b3.dt, k.ly(a3H, eo, lz), a8.n1(a3H, 1, lz)));
				else if (1 === t0) ! function() {
					var lg;
					2 !== ai.gH ? aP.j4.aCa(aP.j4.s8, 3235) : (lg = ai.mV(9), 0 !== h5[lg] && 0 !== h5[eo] && aV.a9V(0, [lg], !0) && k.mG(lg, 1))
				}();
				else if (2 === t0) ! function() {
					var lg, target;
					3 !== ai.gH ? aP.j4.aCa(aP.j4.s8, 3236) : (lg = ai.mV(9), target = ai.mV(9), 0 !== h5[lg] && 0 !== h5[target] && 0 !== h5[eo] && aV.a9V(1, [lg], !0) && (a8.n1(lg, 3, 96), a8.n1(target, 4, 96), k.w0(lg, target)))
				}();
				else if (d8 && !dA) {
					var et = 720;
					for (ag.bg(14404), ag.or(1, 0), ag.or(3, 4), et = Math.min(aa.lc.mY.length, 720), ds = 0; ds < et; ds++) ag.or(20, aa.lc.mY[ds]);
					aP.j4.send(aP.j4.s8, ag.mU)
				}
			}
		}(a3H)
	}, this.a45 = function(mU) {
		if (ai.ch(mU), ai.fu = 1, 2 === ai.mV(2)) {
			ai.fu += 20;
			for (var a5G, a5F, name, mU = ai.mV(9), tk = ai.mV(14), tm = ai.mV(4), a4i = 1 === ai.mV(1), a4j = ai.mV(6), a4k = ai.mV(14), aCx = ai.mV(9) + 1, qR = [], ds = 0; ds < aCx; ds++) a5G = ai.mV(1), a5F = [ai.mV(6), ai.mV(6), ai.mV(6)],
				name = ai.aCl(ai.mV(5)), qR.push({
					name: name,
					a5F: a5F,
					a5G: a5G
				});
			x.a3V(), au.bg(a4j, a4k), 1 === qR.length && a1.a53(tm), tj(tk, mU, qR, tm, a4i, !1)
		} else ! function() {
			ai.fu += 20;
			for (var a5G, a5F, qV, name, a3w = ai.mV(1), tk = ai.mV(14), tm = ai.mV(4), a4i = 1 === ai.mV(1), a4j = ai.mV(6), a4k = ai.mV(14), qR = [], ds = 0; ds < 2; ds++) a5G = ai.mV(1), a5F = [ai.mV(6), ai.mV(6), ai.mV(6)], qV = ai.mV(
				14), name = ai.aCl(ai.mV(5)), qR.push({
					name: name,
					a5F: a5F,
					qV: qV,
					a5G: a5G
				});
			x.a3V(), au.bg(a4j, a4k), tj(tk, a3w, qR, tm, a4i, !1)
		}()
	}, this.a40 = function() {
		ai.fu = 1;
		var aCh = ai.mV(2),
			aCw = ai.mV(10);
		return aP.j4.a3p > aP.j4.a43 && (aCw += aP.j4.a43), aP.j4.a3p === aCw ? (aP.j4.s8 = aCw, !1) : (aP.j4.close(aP.j4.a3p, 3247), aP.j4.s8 = aCw, aO.a3v = ai.mV(10), aO.a3w = ai.mV(2 === aCh ? 9 : 1), aP.j4.zY(aCw, 5) && aP.lg.aCY(), !0)
	}
}

function aCK() {
	function aD4() {
		var da = dZ(),
			aD6 = Math.floor(da / 16777216);
		ag.or(24, aD6), ag.or(24, da - 16777216 * aD6)
	}

	function aD5() {
		ag.or(14, d5), ag.or(4, dR ? 2 : 12 <= dV ? 1 : 0 < dV ? 3 : 0), ag.or(1, d8 ? 1 : 0), ag.or(1, dA ? 1 : 0), ag.or(5, (new Date).getHours() % 24)
	}
	this.zb = function() {
		ag.bg(18), ag.or(1, 0), ag.or(3, 0), ag.or(14, d5), aP.j4.send(0, ag.mU)
	}, this.a3F = function(a3H) {
		var e7 = h.qq(a2.a5E()),
			w1 = e7.length,
			a5F = (ag.bg(135 + 10 * w1), ag.or(1, 0), ag.or(3, 1), ag.or(10, d9), ag.or(20, aZ.id), ag.or(10, Math.min(aZ.wU, 1023)), g8.vC[2].r6.a2v());
		ag.or(6, a5F[0]), ag.or(6, a5F[1]), ag.or(6, a5F[2]), aD4(), aD5();
		for (var ds = 0; ds < w1; ds++) ag.or(10, e7[ds]);
		aP.j4.a3p = a3H, aP.j4.send(a3H, ag.mU)
	}, this.a1z = function(a3H, id) {
		ag.bg(38), ag.or(1, 0), ag.or(3, 7), ag.or(3, 0), ag.or(14, d5), ag.or(1, id), ag.or(16, Math.abs(4096 + bA.position[id] + bA.a1y[id]) % 65536), aP.j4.send(a3H, ag.mU)
	}, this.a5e = function(a3H) {
		var ds, dC;
		if (!(a2.a5T + 7e3 > b7.dT)) {
			for (a2.a5T = b7.dT, ag.bg(136), ag.or(1, 0), ag.or(3, 7), ag.or(3, 2), aD4(), dC = vY(a2.a5S.length - 20, 0), ds = a2.a5S.length - 1; dC <= ds; ds--) ag.or(4, Math.abs(a2.a5S.charCodeAt(ds) - 48) % 10);
			aP.j4.send(a3H, ag.mU)
		}
	}, this.aCQ = function(a3H, aCP) {
		ag.bg(13), ag.or(1, 0), ag.or(3, 5), ag.or(9, aCP ? 1 : 0), aP.j4.send(a3H, ag.mU)
	}, this.a4s = function(a4h) {
		a4h <<= 4, ag.bg(24), ag.or(1, 0), ag.or(3, 2), ag.or(20, a4h), aP.j4.send(aP.j4.a3p, ag.mU)
	}, this.aCY = function() {
		ag.bg(55), ag.or(1, 0), ag.or(3, 6), ag.or(8, aP.j4.vz()), ag.or(10, aO.a3v), ag.or(9, aO.a3w), ag.or(10, d9), ag.or(14, d5), aP.j4.send(aP.j4.s8, ag.mU)
	}, this.lh = function(gg) {
		ag.bg(27), ag.or(1, 1), ag.or(4, 0), ag.or(22, gg), aP.j4.send(aP.j4.s8, ag.mU)
	}, this.lj = function(h9, hb) {
		ag.bg(25), ag.or(1, 1), ag.or(4, 1), ag.or(10, h9), ag.or(10, hb), aP.j4.send(aP.j4.s8, ag.mU)
	}, this.ln = function(h9, ll) {
		ag.bg(24), ag.or(1, 1), ag.or(4, 2), ag.or(10, h9), ag.or(9, ll), aP.j4.send(aP.j4.s8, ag.mU)
	}, this.lr = function(h9, gg) {
		ag.bg(37), ag.or(1, 1), ag.or(4, 3), ag.or(10, h9), ag.or(22, gg), aP.j4.send(aP.j4.s8, ag.mU)
	}, this.lv = function(lt, gg) {
		ag.bg(37), ag.or(1, 1), ag.or(4, 4), ag.or(10, lt), ag.or(22, gg), aP.j4.send(aP.j4.s8, ag.mU)
	}, this.lx = function(hb) {
		ag.bg(15), ag.or(1, 1), ag.or(4, 5), ag.or(10, hb), aP.j4.send(aP.j4.s8, ag.mU)
	}, this.m1 = function(fu) {
		ag.bg(12), ag.or(1, 1), ag.or(4, 6), ag.or(7, fu), aP.j4.send(aP.j4.s8, ag.mU)
	}, this.m4 = function(m3) {
		ag.bg(6), ag.or(1, 1), ag.or(4, 7), ag.or(1, m3), aP.j4.send(aP.j4.s8, ag.mU)
	}, this.m6 = function() {
		ag.bg(5), ag.or(1, 1), ag.or(4, 8), aP.j4.send(aP.j4.s8, ag.mU)
	}, this.mO = function(a6k, mN) {
		ag.bg(29), ag.or(1, 1), ag.or(4, 10), ag.or(12, a6k), ag.or(2, 0), ag.or(10, mN), aP.j4.send(aP.j4.s8, ag.mU)
	}, this.mR = function(a6k, pL, pM, aD7) {
		ag.bg(46), ag.or(1, 1), ag.or(4, 10), ag.or(12, a6k), ag.or(2, 1), ag.or(9, pL), ag.or(9, pM), ag.or(9, aD7), aP.j4.send(aP.j4.s8, ag.mU)
	}, this.mT = function(a6k) {
		var ds, rL = at.j5.rL;
		for (ag.bg(47 + 33 * rL.length), ag.or(1, 1), ag.or(4, 10), ag.or(12, a6k), ag.or(2, 2), ag.or(24, at.j5.rK), ag.or(4, rL.length), ds = 0; ds < rL.length; ds++) ag.or(9, rL[ds].player), ag.or(24, rL[ds].rX);
		aP.j4.send(aP.j4.s8, ag.mU)
	}, this.mE = function(aD8, aD9) {
		ag.bg(21), ag.or(1, 1), ag.or(4, 15), ag.or(9, aD9), ag.or(7, aD8), aP.j4.send(aP.j4.s8, ag.mU)
	}, this.mH = function(vt) {
		ag.bg(14), ag.or(1, 1), ag.or(4, 14), ag.or(9, vt), aP.j4.send(aP.j4.s8, ag.mU)
	}, this.mL = function(aDA, target) {
		var ds, et = aDA.length;
		for (ag.bg(14 + 9 * et), ag.or(1, 1), ag.or(4, 13), ag.or(9, target), ds = 0; ds < et; ds++) ag.or(9, aDA[ds]);
		aP.j4.send(aP.j4.s8, ag.mU)
	}, this.a5B = function(a3H) {
		ag.bg(29), ag.or(1, 0), ag.or(3, 3), aD5(), aP.j4.send(a3H, ag.mU)
	}
}

function aCW() {
	var a3H, aCR, rh;

	function aDE() {}

	function aCX() {
		aP.j4.aCX(a3H, aCR)
	}

	function aDG(dC) {
		aP.vt.aCd(a3H, new Uint8Array(dC.data))
	}

	function aDH() {}

	function aCc(dC) {
		aP.j4.aCc(a3H, dC)
	}
	this.ch = function(fu, aDB) {
		a3H = fu, aCR = aDB, 0;
		fu = x8[0];
		a3H < aP.j4.a42 ? fu += aP.j4.aCM[a3H] + x8[1 + d4] : fu += aP.j4.aCM[0] + "/i" + (1 + d4) + (a3H - aP.j4.a43) + "/", (rh = new WebSocket(fu)).binaryType = "arraybuffer", rh.onopen = aCX, rh.onmessage = aDG, rh.onclose = aCc, rh.onerror =
			aDH
	}, this.aDD = function() {
		return rh.readyState === rh.CONNECTING
	}, this.a39 = function() {
		return rh.readyState === rh.OPEN
	}, this.aCT = function() {
		return this.aDD() || this.a39()
	}, this.aCU = function(aDB) {
		aCR = aDB
	}, this.send = function(mU) {
		this.a39() && rh.send(mU)
	}, this.close = function(aCZ) {
		this.aCT() && (rh.close(aCZ), this.oH())
	}, this.oH = function() {
		rh.onopen = aDE, rh.onmessage = aDE, rh.onclose = aDE, rh.onerror = aDE
	}
}

function bx() {
	var aDJ;

	function aDP(jm, jn, jo, jq) {
		return Math.abs(jo - jm) + Math.abs(jq - jn)
	}
	this.aDK = function() {
		return aDJ
	}, this.fj = function(player, aDL) {
		var ds;
		if (0 !== fC[player].length && a4.ev(aDL) && (a4.f5(aDL) || a4.f4(aDL) !== player))
			for (ds = 21; 0 <= ds; ds--)
				if (function(aDJ, aDL) {
						var aDO, ds, pa = a4.jr(aDJ),
							pb = a4.g9(aDJ),
							pw = a4.jr(aDL),
							pv = a4.g9(aDL),
							aCF = aDP(pa, pb, pw, pv);
						if (!(aCF < 2))
							for (aDO = aDJ, ds = 0; ds < aCF; ds++)
								if (Math.abs(pw - a4.jr(aDO)) >= Math.abs(pv - a4.g9(aDO)) ? aDO += eP[pa < pw ? 1 : 3] : aDO += eP[pb < pv ? 2 : 0], !a4.uZ(aDO)) return !!a4.ev(aDO) && !(0 === ds || ds + 20 < aCF);
						return
					}(aDJ = 21 === ds ? function(border, aDL) {
						for (var aCF, pw = a4.jr(aDL), pv = a4.g9(aDL), fu = 0, min = aDP(pw, pv, a4.jr(border[0]), a4.g9(border[0])), ds = border.length - 1; 1 <= ds; ds--)(aCF = aDP(pw, pv, a4.jr(border[ds]), a4.g9(border[ds]))) < min && (
							min = aCF, fu = ds);
						return border[fu]
					}(fC[player], aDL) : fC[player][el(ds * fC[player].length, 21)], aDL)) return !0;
		return !1
	}
}

function cv() {
	var aDQ = !1,
		wR = 0,
		g0 = 0,
		qN = 0,
		gap = 0,
		gN = null,
		qI = null,
		st = null;

	function aDS() {
		for (var a4W, aDV = 0, et = 0, iU = Math.floor(g0 / 2), gQ = Math.floor(qN / 2), a4V = 1.5 * Math.PI, ds = th; 0 <= ds; ds--) et += st[ds], 0 === st[ds] && aDV++;
		if (aDQ = !1, qI.clearRect(0, 0, g0, g0), qI.fillStyle = ae.kp, qI.fillRect(0, 0, g0, g0), qI.fillStyle = ae.gE, qI.fillRect(0, 0, g0, gap), qI.fillRect(0, 0, gap, g0), qI.fillRect(g0 - gap, 0, gap, g0), qI.fillRect(0, g0 - gap, g0, gap), 0 <
			et)
			if (aDV === th) {
				for (ds = th; 0 <= ds; ds--)
					if (0 < st[ds]) {
						! function(ds, iU, gQ) {
							qI.fillStyle = b8.a4a[b8.rN[ds]], qI.beginPath(), qI.arc(iU, iU, gQ, 0, 2 * Math.PI), qI.fill()
						}(ds, iU, gQ);
						break
					}!
				function(iU) {
					var fontSize = iU / 3;
					qI.font = ad.kj.oG(fontSize, 1), qI.fillStyle = ae.gE, qI.fillText("100%", iU, iU + .1 * fontSize)
				}(iU)
			} else {
				for (ds = 0; ds <= th; ds++) 0 < st[ds] && (! function(ds, iU, gQ, a4V, a4W) {
					qI.fillStyle = b8.a4a[b8.rN[ds]], qI.beginPath(), qI.arc(iU, iU, gQ, a4V, a4W), qI.lineTo(iU, iU), qI.fill()
				}(ds, iU, gQ, a4V, a4W = a4V + 2 * Math.PI * st[ds] / et), function(iU, gQ, a4V, a4W) {
					var dy = (a4W - a4V) / (2 * Math.PI),
						fontSize = +gQ * Math.min(dy, .37);
					fontSize < 8 || (a4V = (a4V + a4W) / 2, a4W = Math.floor(100 * dy + .5) + "%", gQ *= .525 - Math.max(.6 * (dy - .7), 0), qI.font = ad.kj.oG(fontSize, 1), qI.fillStyle = ae.gE, qI.fillText(a4W, iU + Math.cos(a4V) * gQ, iU +
						Math.cos(a4V + 1.5 * Math.PI) * gQ))
				}(iU, gQ, a4V, a4W), 0 !== ds && a4Y(iU, gQ, a4V), a4V = a4W);
				a4Y(iU, gQ, 1.5 * Math.PI)
			}!
		function(iU, gQ) {
			qI.beginPath(), qI.arc(iU, iU, gQ, 0, 2 * Math.PI), qI.stroke()
		}(iU, gQ)
	}

	function a4Y(iU, gQ, a4b) {
		qI.beginPath(), qI.moveTo(iU, iU), qI.lineTo(iU + Math.cos(a4b) * gQ, iU + Math.cos(a4b + 1.5 * Math.PI) * gQ), qI.stroke()
	}
	this.ch = function() {
		if (hV) {
			var ds;
			for (wR = 0, st = new Uint32Array(th + 1), ds = th; 0 <= ds; ds--) st[ds] = 0;
			for (ds = iW - 1; 0 <= ds; ds--) st[b8.iV[iX[ds]]] += 1;
			this.resize()
		} else st = qI = gN = null
	}, this.xw = function() {
		return g0
	}, this.resize = function() {
		hV && (g0 = Math.floor(de && !kN ? .18 * xB : .13 * fs), g0 = (g0 *= 1 + (.5 + .2 * de) * kN) + g0 % 2, qN = Math.floor(7 * g0 / 8), (gN = gN || document.createElement("canvas")).width = g0, gN.height = g0, qI = gN.getContext("2d", {
			alpha: !0
		}), gap = Math.max(1, .015 * g0), qI.lineWidth = gap, qI.strokeStyle = ae.gE, ad.kj.textAlign(qI, 1), ad.kj.textBaseline(qI, 1), aDS())
	}, this.rP = function() {
		return st[this.rO()]
	}, this.r8 = function() {
		return wR = 31, this.iF(), this.rO()
	}, this.rO = function() {
		for (var aDT = 0, ds = th; 0 < ds; ds--) st[ds] > st[aDT] && (aDT = ds);
		return aDT
	}, this.iF = function() {
		if (hV && 32 <= ++wR) {
			var ds;
			for (wR = 0, ds = th; 0 <= ds; ds--) st[ds] = 0;
			for (ds = iW - 1; 0 <= ds; ds--) st[b8.iV[iX[ds]]] += fJ[iX[ds]];
			aDQ = !0
		}
	}, this.fx = function() {
		hV && aDQ && aDS()
	}, this.gA = function() {
		hV && (kN ? gB.drawImage(gN, nZ, nZ) : gB.drawImage(gN, nZ, xx + 2 * nZ))
	}
}

function cR() {
	this.d1 = function() {
		dS || dR || function(key) {
			if ("undefined" == typeof URLSearchParams) return null;
			var aDa = window.location.search,
				aDa = new URLSearchParams(aDa).get(key);
			if ("string" != typeof aDa || aDa.length < 1) return null;
			return aDa
		}("replay") && ac.show()
	}, this.oc = function() {
		var aDZ;
		dS || dR || ((aDZ = new URL(window.location.href)).search = "", history.replaceState(null, "", aDZ.toString()))
	}
}

function by() {
	var aDc, e7;
	this.ch = function() {
		for (var ds = (e7 = new Uint16Array(101)).length - 1; 0 <= ds; ds--) e7[ds] = el(32768 * ds, 100);
		this.tr(0)
	}, this.value = function(f0) {
		return e7[f0]
	}, this.a9O = function() {
		return el(aDc - 1, 2)
	}, this.tr = function(a9m) {
		aDc = 2 * a9m % 32768 + 1
	}, this.random = function() {
		return aDc = 167 * aDc % 32768
	}, this.hl = function(jR) {
		return el(jR * this.random(), 32768)
	}, this.iO = function(f0) {
		return 0 !== f0 && this.random() < this.value(f0)
	}
}

function cI() {
	this.mj = new aDd, this.yv = new aDe, this.yu = new aDf, this.ch = function(tk, qR, tm, tn) {
		var aDg;
		fd || ((aDg = {}).tl = eo, aDg.tk = tk, aDg.qR = qR, aDg.tm = tm, aDg.tn = tn, aDg.a4j = au.pX, aDg.a4k = au.a4g, a1.a58(aDg), this.mj.ch(aDg))
	}, this.iF = function() {
		fd || this.mj.iF()
	}, this.yt = function() {
		var sz = this.mj.aDg;
		0 === jE && x.a3V(), au.bg(sz.a4j, sz.a4k), 1 === sz.qR.length && (a1.a53(sz.tm), a1.a55(sz.a56, sz.a57)), aP.j4.close(aP.j4.s8, 3246), a1.a5A(), tj(sz.tk, sz.tl, sz.qR, sz.tm, sz.tn, !0)
	}, this.yr = function(db) {
		var ds = db.indexOf("=");
		return 0 <= ds ? db.substring(ds + 1) : db
	}, this.yw = function(db) {
		return "https://territorial.io/?replay=" + db
	}
}

function aDd() {
	this.aDh = null, this.aDi = null, this.aDj = null, this.aDk = null, this.aDl = null, this.aDm = null;
	var aDn = 0;
	this.aDg = null, this.ys = "", this.ch = function(aDg) {
		this.aDh = [], this.aDi = [], this.aDj = [], this.aDk = [], this.aDl = [0], this.aDm = [0], aDn = 0, this.aDg = aDg, this.ys = ""
	}, this.mk = function(id, e8, eA, eC) {
		fd || 2 === jE || (0 === this.aDl[aDn] && (this.aDm[aDn] ? (this.aDl.push(1), this.aDm.push(0), aDn++) : this.aDl[aDn] = 1), this.aDh.push(id), this.aDi.push(e8), this.aDj.push(void 0 === eA ? 0 : eA), this.aDk.push(void 0 === eC ? 0 :
			eC), this.aDm[aDn]++)
	}, this.iF = function() {
		0 === this.aDl[aDn] ? this.aDm[aDn]++ : (this.aDl.push(0), this.aDm.push(0), aDn++)
	}
}

function aDf() {
	function aDt(db) {
		0 === jE ? y.a3K(3605) : k.vm(db)
	}
	this.ou = function(db) {
		if (aj.op(aj.om(aj.ol(db))), ! function() {
				if (ai.gH < 10) aDt("File Too Small");
				else if (ai.mV(9) !== d7 && aDt("Game Version Error"), ai.mV(31) !== ai.gH) aDt("Size Error");
				else {
					if (function(i0) {
							var ds, f0 = ai.mU,
								et = ai.gH,
								a6k = 0;
							for (ds = 7; ds < et; ds++) a6k = a6k + f0[ds] & 65535;
							return a6k === i0
						}(ai.mV(16))) return 1;
					aDt("Hash Error")
				}
				return
			}()) return !1;
		(aDg = {}).tl = ai.mV(9), aDg.tk = ai.mV(14), aDg.tm = ai.mV(4), aDg.tn = 1 === ai.mV(1), aDg.a4j = ai.mV(6), aDg.a4k = ai.mV(14), aDg.aDv = ai.mV(10), ab.mj.aDg = aDg,
			function() {
				var ds, a5G, a5F, name, et = ab.mj.aDg.aDv,
					qR = [];
				for (ds = 0; ds < et; ds++) a5G = ai.mV(1), a5F = [ai.mV(6), ai.mV(6), ai.mV(6)], name = ai.aCl(ai.mV(5)), qR.push({
					name: name,
					a5F: a5F,
					a5G: a5G
				});
				if (ab.mj.aDg.qR = qR, 8 === ab.mj.aDg.tm)
					for (ds = 0; ds < et; ds++) qR[ds].qV = ai.mV(14)
			}(),
			function() {
				var ds, et, aDw = ab.mj.aDg;
				if (1 === aDw.qR.length)
					for (et = 6 < aDw.tm ? 1 : aDw.tm + 2, aDw.a56 = new Array(et), aDw.a57 = new Array(et), ds = 0; ds < et; ds++) aDw.a56[ds] = ai.mV(3), aDw.a57[ds] = ai.mV(9) + 1
			}(), aDg = ai.mV(5), aDx = ai.mV(30), aDy = ai.mV(30);
		var aDg, aDx, aDy, ds, id, et = aDx,
			aE1 = new Uint8Array(et),
			aE2 = new Uint16Array(et),
			aE3 = new Uint32Array(et),
			aE4 = new Uint32Array(et);
		for (ab.mj.aDh = aE1, ab.mj.aDi = aE2, ab.mj.aDj = aE3, ab.mj.aDk = aE4, ds = 0; ds < et; ds++) aE1[ds] = id = ai.mV(4), aE2[ds] = ai.mV(9), 0 === id ? aE3[ds] = ai.mV(22) : 1 === id ? (aE3[ds] = ai.mV(10), aE4[ds] = ai.mV(10)) : 2 ===
			id ? (aE3[ds] = ai.mV(10), aE4[ds] = ai.mV(9)) : 3 === id || 4 === id ? (aE3[ds] = ai.mV(10), aE4[ds] = ai.mV(22)) : 5 === id ? aE3[ds] = ai.mV(10) : 6 === id ? aE3[ds] = ai.mV(7) : 7 === id && (aE3[ds] = ai.mV(1));
		return function(et, ov) {
			var ds, aDl = new Uint8Array(et),
				aDm = new Array(et);
			for (aDm.fill(0), ab.mj.aDl = aDl, ab.mj.aDm = aDm, ds = 0; ds < et; ds++) aDl[ds] = ai.mV(1), aDm[ds] = ai.mV(ov)
		}(aDy, aDg), ai.fu < 8 * ai.gH - 13 || ai.fu > 8 * ai.gH ? (aDt("Out Of Bounds Error: " + ai.fu + " " + 8 * ai.gH), !1) : (ab.mj.ys = db, !0)
	}
}

function aDe() {
	this.qq = function() {
		var aDw, ov = function() {
				var ds, aDm = ab.mj.aDm,
					et = aDm.length,
					max = 0;
				for (ds = 0; ds < et; ds++) max = Math.max(max, aDm[ds]);
				return p2(Math.max(max, 1))
			}(),
			aE6 = function(ov) {
				return 179 + function() {
					var ds, qR = ab.mj.aDg.qR,
						et = qR.length,
						aE6 = 24 * et;
					for (ds = 0; ds < et; ds++) aE6 += 10 * h.qq(qR[ds].name).length;
					8 === ab.mj.aDg.tm && (aE6 += 14 * et);
					return aE6
				}() + (1 === ab.mj.aDg.qR.length ? 12 * ab.mj.aDg.a56.length : 0) + function() {
					var ds, aDh = ab.mj.aDh,
						et = aDh.length,
						aE6 = 13 * et,
						aEK = [22, 20, 19, 32, 32, 10, 7, 1, 0, 0];
					for (ds = 0; ds < et; ds++) aE6 += aEK[aDh[ds]];
					return aE6
				}() + function(ov) {
					return ab.mj.aDm.length * (1 + ov)
				}(ov)
			}(ov);
		ag.bg(aE6 + (6 - aE6 % 6) % 6), aDw = ab.mj.aDg, ag.or(9, d7), ag.or(31, ag.gH), ag.fu += 16, ag.or(9, aDw.tl), ag.or(14, aDw.tk), ag.or(4, aDw.tm), ag.or(1, aDw.tn), ag.or(6, aDw.a4j), ag.or(14, aDw.a4k), ag.or(10, aDw.qR.length);
		var ds, hs, aEE, aEF, qR = ab.mj.aDg.qR,
			et = qR.length;
		for (ds = 0; ds < et; ds++)
			for (ag.or(1, qR[ds].a5G), ag.or(18, (qR[ds].a5F[0] << 12) + (qR[ds].a5F[1] << 6) + qR[ds].a5F[2]), aEE = h.qq(qR[ds].name), aEF = aEE.length, ag.or(5, aEF), hs = 0; hs < aEF; hs++) ag.or(10, aEE[hs]);
		if (8 === ab.mj.aDg.tm)
			for (ds = 0; ds < et; ds++) ag.or(14, qR[ds].qV);
		return function() {
				var ds, aDw = ab.mj.aDg;
				if (1 === aDw.qR.length)
					for (ds = 0; ds < aDw.a56.length; ds++) ag.or(3, aDw.a56[ds]), ag.or(9, aDw.a57[ds] - 1)
			}(),
			function(ov) {
				var ds, aDh = ab.mj.aDh,
					e8 = ab.mj.aDi,
					eA = ab.mj.aDj,
					eC = ab.mj.aDk,
					et = aDh.length;
				for (ag.or(5, ov), ag.or(30, et), ag.or(30, ab.mj.aDm.length), ds = 0; ds < et; ds++) ag.or(4, aDh[ds]), ag.or(9, e8[ds]), 0 === aDh[ds] ? ag.or(22, eA[ds]) : 1 === aDh[ds] ? (ag.or(10, eA[ds]), ag.or(10, eC[ds])) : 2 === aDh[
					ds] ? (ag.or(10, eA[ds]), ag.or(9, eC[ds])) : 3 === aDh[ds] || 4 === aDh[ds] ? (ag.or(10, eA[ds]), ag.or(22, eC[ds])) : 5 === aDh[ds] ? ag.or(10, eA[ds]) : 6 === aDh[ds] ? ag.or(7, eA[ds]) : 7 === aDh[ds] && ag.or(1, eA[ds])
			}(ov),
			function(ov) {
				var ds, aDl = ab.mj.aDl,
					aDm = ab.mj.aDm,
					et = aDl.length;
				for (ds = 0; ds < et; ds++) ag.or(1, aDl[ds]), ag.or(ov, aDm[ds])
			}(ov), ag.fu !== aE6 && k.vm("Encoder Index Error: " + ag.fu + " " + aE6), ag.fu = 40, ag.or(16, function() {
				var ds, f0 = ag.mU,
					et = ag.gH,
					a6k = 0;
				for (ds = 7; ds < et; ds++) a6k = a6k + f0[ds] & 65535;
				return a6k
			}()), ai.ch(ag.mU), ah.qe(ah.qc(el(aE6 - 1, 6) + 1))
	}
}

function c3() {
	var iU, wD = !1,
		aEL = !1,
		aEM = -1e4;

	function resize(ge) {
		iU = 0, a3.fy() && (aEN(ge) || wD) && (wD = !1, x9(), b0.ch(), v.ch(), z.resize(), ay.ch(), w.resize(), q.resize(), l.resize(), b6.resize(), bA.resize(), b3.ch(), aw.resize(), 1 <= jE ? (s.resize(!1), r.resize(), t.resize(), p.resize(), o
			.resize(), k.resize(), j.resize(), ac.resize(), af.resize(), aN.resize(), m.resize(), n.resize(), i.resize(), b5.resize(), a8.resize(), u.resize(), b9.resize(), p.zA()) : (2 === x.sR() ? a1.resize() : 3 === x.sR() && y.resize(), x
			.a3b(), x.a3e()), b7.d2 = !0)
	}

	function aEO(dy) {
		return dy && 128 < dy ? Math.floor(dy) : 128
	}

	function aEN(ge) {
		var qN, wK, wL;
		return aK.aBy(), qN = aEO(document.documentElement.clientWidth), wK = window.visualViewport ? aEO(window.visualViewport.height) : aEO(document.documentElement.clientHeight), ge && !aEL ? (aEL = !0, document.body.removeChild(rp)) : aEL && (
			aEL = !1, document.body.appendChild(rp)), ge = Math.floor(.5 + nP * qN), wL = Math.floor(.5 + nP * wK), !(ge === jp && wL === g7 || al.sd() && (z.oX || ac.oX)) && (jp = df = ge, g7 = dg = wL, xB = yF(df, dg), fs = el(dg + df, 2), rp
			.width = ge, rp.height = wL, rp.style.width = qN + "px", rp.style.height = wK + "px", 1)
	}
	this.ch = function() {
		df = dg = xB = jp = g7 = fs = 0, nP = iU = 1, rp = document.getElementById("canvasA"), (gB = rp.getContext("2d", {
			alpha: !1
		})).imageSmoothingEnabled = !1, aEN(0)
	}, this.iF = function() {
		aS.iF(), 50 <= ++iU && resize(0)
	}, this.a5N = function(ge) {
		wD = !0, resize(ge)
	}, this.se = function() {
		aEM + 1e3 > b7.dT || (aEM = b7.dT, resize(0))
	}, this.aBy = function() {
		var aEP = window.devicePixelRatio || 1,
			ds = aR.jv.aBw;
		return (nP = ds < 3 ? .5 + .25 * ds : (.5 + .125 * (ds - 3)) * aEP) / aEP
	}
}

function bz() {
	var player, hc, pL, pF, jm, jn, jo, jq, fu, aEQ, id;

	function aEW() {
		var hb;
		if (a4.f5(pL)) hb = ex;
		else {
			if ((hb = a4.f4(pL)) === player) return void aEY(!0);
			if (!hn(player, hb)) return function(hb) {
				var max = fJ[hb] * tD - ep[hb];
				max <= 0 || (hc -= max = max < hc ? max : hc, player === eo && (k.mB(max, 0, hb), b4.er[16] += max), hb === eo && (k.w6(max, player), b4.er[10] += max), ep[hb] += max, a8.mC(hb, max))
			}(hb), void aEY(!0)
		}
		player === eo && (b4.er[13] += hc), e.en(player, id), a6.es(player, aEQ), eu[player].push(pF), a6.hY(player, hc, hb), c.hZ(player, !0)
	}

	function aEY(aEb) {
		e.en(player, id), a6.es(player, aEQ), aEb && (ep[player] += hc)
	}

	function aES() {
		a4.a6U(pL, player) && a4.a6W(pL)
	}

	function aER(ds, a7u, xs, hk, ka) {
		if (fu = ds, id = a7u, player = xs, jm = a4.jr(hk), jn = a4.g9(hk), jo = a4.jr(ka), jq = a4.g9(ka), pF = pL = a4.pq(jm, jn), -1 !== (aEQ = a6.ju(player, id))) return hc = a6.ef(player, aEQ), 1;
		aES(), e.en(player, id)
	}
	this.iF = function(ds, id, xs, hk, ka) {
		aER(ds, id, xs, hk, ka) && (aES(), function() {
			var aEc = el(hc, 128);
			hc -= aEc = aEc < 1 ? 1 : aEc, player === eo && (b4.er[15] += aEc);
			if (hc <= em) return player === eo && (b4.er[15] += hc), void aEY(!1);
			return a6.fI(player, aEQ, hc), 1
		}()) && (ds = a4.pq(jm, jn), pL = Math.abs(jo - jm) >= Math.abs(jq - jn) ? ds + eP[jm < jo ? 1 : 3] : ds + eP[jn < jq ? 2 : 0], jm = a4.jr(pL), jn = a4.g9(pL), e.ja(fu, pL), ! function() {
			if (a4.ev(pL)) return;
			return 1
		}() ? aEW() : a4.uZ(pL) && a4.a6Z(pL, player))
	}, this.jd = function(xs, hk) {
		player = xs, pL = a4.pq(a4.jr(hk), a4.g9(hk)), aES()
	}
}

function c0() {
	var aEd, aEe, uZ, aEf;
	this.ch = function() {
		var ds, jh, ji, a5F, aEg, g0, i0, qI, gK, pD, dy, f0, i8, hi, aEj;
		if (function() {
				if (uZ = !0, aEf = "rgb(" + au.pA[0] + "," + au.pA[1] + "," + au.pA[2] + ")", au.a9u(au.pX)) return 1;
				return uZ = !1, 0
			}()) aEe = null;
		else {
			for (aEd = el(96, 4), aEg = 1 === au.pX ? (a5F = 0, 160) : (a5F = 128, 32), aEf = "rgb(" + a5F + "," + a5F + "," + a5F + ")", aEe = new Array(4), ds = 3; 0 <= ds; ds--) {
				if (aEe[ds] = document.createElement("canvas"), g0 = ds % 2 == 0 ? au.eT : aEd, i0 = ds % 2 == 0 ? aEd : au.eU + 2 * aEd, aEe[ds].width = g0, aEe[ds].height = i0, pD = (gK = (qI = aEe[ds].getContext("2d", {
						alpha: !1
					})).getImageData(0, 0, g0, i0)).data, ds % 2 == 0)
					for (ji = aEd - 1; 0 <= ji; ji--)
						for (dy = aEg + Math.floor((ji + 1) * (a5F - aEg) / (aEd + 1)), jh = g0 - 1; 0 <= jh; jh--) pD[f0 = 4 * ((0 === ds ? aEd - ji - 1 : ji) * g0 + jh)] = dy, pD[f0 + 1] = dy, pD[f0 + 2] = dy, pD[f0 + 3] = 255;
				else {
					for (jh = aEd - 1; 0 <= jh; jh--)
						for (dy = aEg + Math.floor((jh + 1) * (a5F - aEg) / (aEd + 1)), ji = i0 - 1 - aEd; aEd <= ji; ji--) pD[f0 = 4 * (ji * g0 + (3 === ds ? aEd - jh - 1 : jh))] = dy, pD[f0 + 1] = dy, pD[f0 + 2] = dy, pD[f0 + 3] = 255;
					for (hi = 1; 0 <= hi; hi--)
						for (jh = aEd - 1; 0 <= jh; jh--)
							for (ji = aEd - 1; 0 <= ji; ji--) i8 = (Math.pow(jh * jh + ji * ji, .5) + 1) / (aEd + 1), dy = aEg + Math.floor((1 < i8 ? 1 : i8) * (a5F - aEg)), pD[f0 = 4 * ((0 === hi ? aEd - ji - 1 : ji + hi * (i0 - aEd)) * g0 + (
								1 === ds ? jh : aEd - jh - 1))] = dy, pD[f0 + 1] = dy, pD[f0 + 2] = dy, pD[f0 + 3] = 255
				}
				qI.putImageData(gK, 0, 0)
			}
			aEj = aEg, au.p5.fillStyle = "rgb(" + aEj + "," + aEj + "," + aEj + ")", au.p5.fillRect(0, 0, au.eT, 1), au.p5.fillRect(0, au.eU - 1, au.eT, 1), au.p5.fillRect(0, 0, 1, au.eU), au.p5.fillRect(au.eT - 1, 0, 1, au.eU)
		}
	}, this.qE = function() {
		var hi = uZ ? 0 : -aEd;
		aBT(hi, hi, au.eT - 2 * hi, au.eU - 2 * hi, b1.aEk, b1.aEl, b1.aEm, b1.aEn) || (gB.fillStyle = aEf, gB.fillRect(0, 0, jp, g7))
	}, this.gA = function() {
		uZ || (aBS(0, -aEd, au.eT, aEd, b1.aEk, b1.aEl, b1.aEm, b1.aEn) && gB.drawImage(aEe[0], b1.aEo, b1.aEp - aEd), aBS(au.eT, -aEd, aEd, au.eU + 2 * aEd, b1.aEk, b1.aEl, b1.aEm, b1.aEn) && gB.drawImage(aEe[1], b1.aEo + au.eT, b1.aEp - aEd),
			aBS(0, au.eU, au.eT, aEd, b1.aEk, b1.aEl, b1.aEm, b1.aEn) && gB.drawImage(aEe[2], b1.aEo, b1.aEp + au.eU), aBS(-aEd, -aEd, aEd, au.eU + 2 * aEd, b1.aEk, b1.aEl, b1.aEm, b1.aEn) && gB.drawImage(aEe[3], b1.aEo - aEd, b1.aEp - aEd))
	}
}

function cU() {
	this.lp = new aEq, this.a6x = new aEr, this.qF = new aEs, this.j4 = new aEt, this.hN = new aEu, this.aEj = new aEv, this.aEw = new aEx, this.iE = new aEy, this.mu = new aEz, this.ch = function() {
		this.qF.ch(), this.j4.ch(), this.hN.ch(), this.aEj.ch()
	}
}

function aEy() {
	function aF5(player, hk, aF7, aF8) {
		for (var jm, jn, g0, i0, gQ, aF9, jo, jq, et = hk + aF8, ds = hk; ds < et; ds += aF7)
			if (jm = (jm = i4[player] - ds) < 1 ? 1 : jm, jn = i7[player] - ds, jo = (jo = i3[player] + ds) >= au.eT - 1 ? au.eT - 2 : jo, i0 = (jq = (jq = i6[player] + ds) >= au.eU - 1 ? au.eU - 2 : jq) - (jn = jn < 1 ? 1 : jn), jo = (gQ = el(aF
					.random() * (2 * (jo - jm + jq - jn)), aF.value(100))) <= (g0 = jo - jm) ? (aF9 = jm + gQ, jn) : gQ <= g0 + i0 ? (aF9 = jo, jn + gQ - g0) : gQ <= 2 * g0 + i0 ? (aF9 = jm + gQ - g0 - i0, jq) : (aF9 = jm, jn + gQ - 2 * g0 - i0),
				aF6(player, jq = a4.pq(aF9, jo))) return jq;
		return -1
	}

	function aF6(t9, f1) {
		return a4.ev(f1) && (a4.f5(f1) || t9 !== (f1 = a4.f4(f1)) && hn(t9, f1) && 0 < fC[f1].length)
	}
	this.iF = function(player) {
		return !(0 === fC[player].length || ep[player] < 100) && ap.j4.mh !== ap.j4.ms && (ap.j4.mg[player] !== ap.j4.mt && ad.ff.mn(player, 203, 32, 16) ? !! function(player) {
			var f1 = function(player) {
				var ds, pu, pt, jm = i4[player],
					jn = i7[player],
					gw = i3[player] - jm + 1,
					gz = i6[player] - jn + 1,
					dy = aF.value(100);
				for (ds = 0; ds < 32; ds++)
					if (pu = jm + an.fY(aF.random() * gw, dy), pt = jn + an.fY(aF.random() * gz, dy), pu = a4.pq(pu, pt), aF6(player, pu)) return pu;
				return -1
			}(player);
			if (0 <= f1) return ap.mu.mv(player, f1 >> 2);
			if (0 <= (f1 = aF5(player, 1, 4, 40))) return ap.mu.mv(player, f1 >> 2);
			if (0 <= (f1 = aF5(player, 40, 8, 200))) return ap.mu.mv(player, f1 >> 2);
			return
		}(player) && !! function(t9) {
			if (0 === aq.e4[2]) return void console.log("error 325234");
			var aF3 = aq.e4[1] + ao.gR[aq.e4[2] - 1] << 2;
			if (a4.f5(aF3)) return 1;
			return aF3 = a4.f4(aF3), t9 !== aF3 && !!hn(t9, aF3)
		}(player) && function(player) {
			return ad.ff.mp(player), ap.j4.mw(player), !0
		}(player) : void 0)
	}
}

function aEq() {
	function aFC(aFB) {
		var aFL = 4 + .03 * (1 + 1.5 * de) * fs / hB;
		return ao.h2(aFB, aq.e4[1]) < aFL
	}
	this.lq = function(player, aFB) {
		return !!ao.hH(aFB) && ap.j4.mh !== ap.j4.ms && ap.j4.mg[player] !== ap.j4.mt && 0 !== fC[player].length && !!ap.mu.mv(player, aFB) && !!aFC(aFB)
	}, this.lu = function(player, lt, aFB) {
		return !!(ao.hH(aFB) && this.mx(player, lt) && ap.mu.my(aFB) && aFC(aFB))
	}, this.mx = function(player, id) {
		for (var aFD, sr = player << 3, ss = sr + ap.j4.mg[player], aFE = ap.j4.aFE, aFF = ap.j4.aFF, ds = sr; ds < ss; ds++)
			if (id === aFF[aFD = aFE[ds]]) return aq.e4[3] = aFD, !0;
		return !1
	}, this.ls = function(gg) {
		var aFG = ap.aEj.aFG;
		return ap.aEj.aFG = -1, !!this.mx(eo, aFG) && (aa.fl.ls(aFG, gg), !0)
	}, this.uV = function(g4, g5) {
		var ds, ss, o3, aFE, aFH, aFI, aFJ, i8, vr, aFK, player = eo,
			et = ap.j4.mg[player];
		if (0 === et) return !1;
		for (aFE = ap.j4.aFE, aFI = ap.j4.aFI, vr = ap.j4.vr, ss = (player = player << 3) + et, aFH = .4 * ad.kj.nO(.5) * fs / hB, o3 = -1, ds = player; ds < ss; ds++) aFK = aFE[ds], aFJ = 16 * (.625 + .125 * Math.sqrt(Math.sqrt(vr[aFK]))), (i8 =
			ao.gs(g4, g5, aFI[aFK])) - aFJ < aFH && (aFH = i8, o3 = aFK);
		return !(o3 < 0 || (ap.aEj.aFG = ap.j4.aFF[o3], 0))
	}, this.uj = function(g4, g5) {
		var ds, o3, aFH, aFI, aFJ, i8, vr, et = ap.j4.mh;
		if (et < 1) return -1;
		for (aFI = ap.j4.aFI, vr = ap.j4.vr, aFH = 1e3, o3 = -1, ds = 0; ds < et; ds++) aFJ = 16 * ad.kj.nO(.5) * (.625 + .125 * Math.sqrt(Math.sqrt(vr[ds]))), (i8 = ao.gs(g4, g5, aFI[ds])) < aFH && i8 < aFJ && (aFH = i8, o3 = ds);
		return o3
	}
}

function aEr() {
	this.a6y = function(player) {
		for (var aFE = ap.j4.aFE, sr = player << 3, ds = sr + ap.j4.mg[player] - 1; sr <= ds; ds--) this.aFM(aFE[ds])
	}, this.aFM = function(aFN) {
		var j4 = ap.j4,
			aFO = j4.mh - 1,
			aFP = j4.vq[aFN],
			aFQ = j4.aFR[aFN],
			aFS = j4.aFI[aFN];
		j4.mh = aFO, j4.vq[aFN] = j4.vq[aFO], j4.aFT[aFN] = j4.aFT[aFO], j4.aFU[aFN] = j4.aFU[aFO], j4.aFI[aFN] = j4.aFI[aFO], j4.aFV[aFN] = j4.aFV[aFO], j4.vr[aFN] = j4.vr[aFO], j4.aFR[aFN] = j4.aFR[aFO], j4.aFF[aFN] = j4.aFF[aFO], j4.aFW[aFN] =
			j4.aFW[aFO], j4.aFE[j4.vq[aFN]] = aFN,
			function(a4b) {
				var player = a4b >> 3,
					j4 = ap.j4,
					et = j4.mg[player] - 1,
					aFZ = (player << 3) + et;
				j4.mg[player] = et, aFZ !== a4b && (j4.aFE[a4b] = j4.aFE[aFZ], j4.vq[j4.aFE[a4b]] = a4b)
			}(aFP), ap.hN.hN[ao.hM(j4.aFI[aFN])][j4.aFR[aFN]] = aFN, aFO = ao.hM(aFS), aFP = aFQ, aFO = ap.hN.hN[aFO], j4 = aFO.pop(), aFP !== aFO.length && (aFO[aFP] = j4, ap.j4.aFR[j4] = aFP)
	}
}

function aEs() {
	var aFc, aFd = 8,
		aFe = new Array(2);

	function aFf(fu) {
		var gG = aFd + 4,
			uF = ad.kj.p1(gG, gG),
			gO = ad.kj.getContext(uF, !0),
			gK = ad.kj.getImageData(gO, gG, gG),
			pD = gK.data;
		return aFg(pD, gG + 1, fu), aFg(pD, gG + 2, fu), aFg(pD, 2 * gG + 1, fu), aFg(pD, 2 * gG - 3, fu), aFg(pD, 2 * gG - 2, fu), aFg(pD, 3 * gG - 2, fu), aFg(pD, gG * (gG - 3) + 1, fu), aFg(pD, gG * (gG - 2) + 1, fu), aFg(pD, gG * (gG - 2) + 2,
			fu), aFg(pD, gG * (gG - 2) - 2, fu), aFg(pD, gG * (gG - 1) - 3, fu), aFg(pD, gG * (gG - 1) - 2, fu), gO.putImageData(gK, 0, 0), uF
	}

	function aFg(pD, gg, fu) {
		gg *= 4;
		pD[gg] = 255, pD[1 + gg] = 255, pD[2 + gg] = fu, pD[3 + gg] = 255
	}

	function p1(player) {
		var aFh = aFd >> 1,
			uF = ad.kj.p1(aFd, aFd);
		return function(gO, player, jh, ji) {
			var gw, gg, aFj, a4c, gG = aFd,
				gK = ad.kj.getImageData(gO, gG, gG),
				pD = gK.data,
				ow = (gG >> 1) - .5,
				aEf = a4.a6O(player),
				aFl = ad.pB.sk(aEf, .5);
			ad.pB.sl(aEf, aFl, 300) || ad.pB.sn(aEf, 100);
			for (ji = 0; ji < gG; ji++)
				for (jh = 0; jh < gG; jh++) a4c = (gG - 1.5) * (gG - 1.5) / 4, aFj = (gw = (gw = jh - ow) * gw + (gw = ji - ow) * gw) <= (gG - 4.5) * (gG - 4.5) / 4 ? aFl : aEf, pD[gg = 4 * (ji * gG + jh)] = aFj[0], pD[1 + gg] = aFj[1], pD[2 +
					gg] = aFj[2], pD[3 + gg] = a4c < gw ? 0 : 255;
			gO.putImageData(gK, 0, 0)
		}(ad.kj.getContext(uF, !0), player, aFh, aFh), uF
	}
	this.ch = function() {
		aFc = new Array(ex), aFe[0] = aFf(255), aFe[1] = aFf(0)
	}, this.gA = function() {
		var ds, player, aFm, hc, aFn, gv, aFq, aFs, aFt, aFI = ap.j4.aFI,
			vq = ap.j4.vq,
			vr = ap.j4.vr,
			aFu = aFc,
			aFv = eo,
			aFw = -1,
			et = ap.j4.mh,
			aFx = jp,
			aFy = g7,
			aFz = au.eT << 4,
			tV = hB,
			gp = tV / aFd,
			jm = hA / tV,
			jn = hC / tV,
			gw = (aFx + hA) / tV - jm,
			gz = (aFy + hC) / tV - jn,
			gO = gB;
		for (ap.lp.mx(eo, ap.aEj.aFG) && (aFw = aq.e4[3]), gO.fillStyle = ae.gE, ds = 0; ds < et; ds++) player = vq[ds] >> 3, hc = vr[ds], aFm = .625 + .125 * Math.sqrt(Math.sqrt(hc)), aFn = (gv = aFI[ds]) % aFz / 16 - aFm, gv = aFy * (Math
			.floor(gv / aFz) / 16 - aFm - jn) / gz, aFq = -2 * (aFt = tV * aFm) * (1 + (aFs = +(player === aFv)) / 8), aFs = aFs * aFt / 4, (aFt = aFx * (aFn - jm) / gw) < aFq || gv < aFq || aFx + aFs < aFt || aFy + aFs < gv || (aFn = aFm *
			tV, gO.imageSmoothingEnabled = (aFq = 2 * aFm * gp) < 3, void 0 === (aFs = aFu[player]) && (aFu[player] = aFs = p1(player)), player === aFv && (gO.setTransform(aFq, 0, 0, aFq, aFt - 2 * aFq, gv - 2 * aFq), gO.drawImage(aFe[+(
				ds === aFw)], 0, 0)), gO.setTransform(aFq, 0, 0, aFq, aFt, gv), gO.drawImage(aFs, 0, 0), (aFm = Math.floor(function(hc) {
				if (hc < 1e3) return .42;
				if (hc < 1e4) return .34;
				if (hc < 1e6) return .26;
				if (hc < 1e8) return .19;
				return .15
			}(hc) * aFn)) < 6) || (gO.setTransform(1, 0, 0, 1, 0, 0), 20 <= aFm ? (gO.font = ad.kj.oG(.85 * aFm, 1), gO.fillText(ad.jx.jy(hc), aFt + aFn, gv + .93 * aFn + .085 * aFm), (aFm *= a8.a8p(player)) < 6 || (gO.font = ad.kj.oG(aFm,
			1), gO.fillText(jz[player], aFt + aFn, gv + 1.16 * aFn + .1 * aFm))) : (gO.font = ad.kj.oG(aFm, 1), gO.fillText(ad.jx.jy(hc), aFt + aFn, gv + aFn + .1 * aFm)));
		gO.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function aEx() {
	this.iF = function() {
		for (var aG1, aEw, aFW = ap.j4.aFW, aFI = ap.j4.aFI, aFU = ap.j4.aFU, ds = ap.j4.mh - 1; 0 <= ds; ds--) aG1 = aFI[ds], 0 !== (aEw = aFW[ds]) && aG1 === aFU[ds] && (! function(ds, aG3, fo) {
			var hb, player = ap.j4.vq[ds] >> 3,
				fo = aG3 + ao.gR[fo] << 2,
				ds = ap.j4.vr[ds];
			if (a4.f5(fo)) hb = ex;
			else {
				if ((hb = a4.f4(fo)) === player) return ad.ff.mA(player, ds);
				if (!hn(player, hb)) return aa.iY.m8(player, hb, ds)
			}
			player === eo && (b4.er[13] += ds);
			eu[player].push(aG3 << 2), a6.hY(player, ds, hb), c.hZ(player, !0)
		}(ds, ao.hL(aG1), aEw - 1), ap.a6x.aFM(ds))
	}
}

function aEt() {
	this.aG4 = null, this.ms = 512, this.mt = 8, this.mh = 0, this.jV = 0, this.vq = new Uint16Array(this.ms), this.aFT = new Uint32Array(this.ms), this.aFU = new Uint32Array(this.ms), this.aFI = new Uint32Array(this.ms), this.aFV = new Uint16Array(
			this.ms), this.vr = new Uint32Array(this.ms), this.aFR = new Uint16Array(this.ms), this.aFF = new Uint16Array(this.ms), this.aFW = new Uint8Array(this.ms), this.mg = new Uint8Array(ex), this.aFE = new Uint16Array(this.mt * ex), this.ch =
		function() {
			this.jV = 0, this.mh = 0, this.aG4 = new Uint8Array(au.eT + au.eU), this.mg.fill(0)
		}, this.mw = function(player) {
			var et = this.mh,
				aG5 = ao.hK(aq.e4[0]),
				aEF = this.mg[player],
				aG6 = (player << 3) + aEF;
			h5[player] = 2, this.vq[et] = aG6, this.aFT[et] = aG5, this.aFI[et] = aG5, this.aFU[et] = ao.hK(aq.e4[1]), this.aFV[et] = 0, this.vr[et] = aq.e1[0], this.aFR[et] = ap.hN.mw(et, ao.hM(aG5)), this.aFF[et] = this.jV, this.aFW[et] = aq.e4[2],
				this.jV = this.jV + 1 & 1023, this.aFE[aG6] = et, this.mg[player] = aEF + 1, this.mh++
		}, this.ls = function() {
			var aFD = aq.e4[3];
			this.aFT[aFD] = this.aFI[aFD], this.aFU[aFD] = ao.hK(aq.e4[1]), this.aFV[aFD] = 0, this.aFW[aFD] = aq.e4[2]
		}, this.iF = function() {
			if (b7.iT() % 5 == 3) {
				ap.aEw.iF(), ! function(up) {
					var ds, aGA, aGB, aGC, aGD, aG5, aGH, aGI, f2, f1, aFT = up.aFT,
						aFU = up.aFU,
						aFI = up.aFI,
						vr = up.vr,
						aFV = up.aFV,
						aFR = up.aFR,
						up = up.mh,
						aFz = au.eT << 4;
					for (ds = up - 1; 0 <= ds; ds--) aGB = aFI[ds], aGA = aFU[ds], aGB !== aGA && (aG5 = aFT[ds], aGH = aGA % aFz - (aGD = aG5 % aFz), aGI = ~~((aGA + .5) / aFz) - (aG5 = ~~((aG5 + .5) / aFz)), f2 = ~~Math.sqrt(aGH * aGH + aGI *
						aGI + .5), f1 = 4e5 + 2e4 * ~~Math.sqrt(.5 + (Math.sqrt(vr[ds] + .5) << 4)), 65535 <= (f1 = aFV[ds] + Math.max(~~((.5 + f1) / f2), 1)) ? aFI[ds] = aGC = aGA : (aFV[ds] = f1, aFI[ds] = aGC = aGD + an.fY(f1 * aGH,
						65536) + aFz * (aG5 + an.fY(f1 * aGI, 65536))), aFR[ds] = ap.hN.aGK(aFR[ds], aGB, aGC))
				}(this), ! function(up) {
					var ds, pQ, ow, hs, iU, aGL, aGM, aGN, pL, gW, jm, jn, aGO, aFH, aGP, pM, aG5, aGS, et = up.mh,
						aFI = up.aFI,
						vq = up.vq,
						vr = up.vr,
						hN = ap.hN.hN,
						aGT = hN.length,
						aGU = ap.hN.aGU,
						aFz = au.eT << 4,
						aGV = hV,
						aGW = b8.iV,
						f1 = (et - 1) * (b7.iT() % 2);
					for (ds = 0; ds < et; ds++) {
						for (pQ = Math.abs(ds - f1), aG5 = aFI[pQ], ow = ao.hM(aG5), pL = vq[pQ] >> 3, jm = aG5 % aFz, jn = ~~((aG5 + .5) / aFz), aG5 = vr[pQ], aGS = 80 + ~~Math.sqrt(.5 + (Math.sqrt(aG5 + .5) << 8)), aFH = Math.min(aGS * aGS,
								262144), aGP = -1, hs = 0; hs < 9; hs++)
							if (!((aGL = ow + aGU[hs]) < 0 || aGT <= aGL))
								for (aGN = hN[aGL], aGM = aGN.length, iU = 0; iU < aGM; iU++) aGO = aGN[iU], pM = vq[aGO] >> 3, pL == pM || aGV && aGW[pL] === aGW[pM] || (pM = aFI[aGO], (pM = (gW = jm - pM % aFz) * gW + (gW = jn - ~~((pM + .5) /
									aFz)) * gW) < aFH && (aGP = aGO, aFH = pM)); - 1 !== aGP && (aG5 = Math.min(Math.max(1, an.fY(aG5 * (aGS - Math.floor(Math.sqrt(aFH + .5))), 5 * aGS)), vr[aGP]), vr[pQ] -= aG5 >> 4, vr[aGP] -= aG5)
					}
				}(this);
				var ds, hc, vr = (up = this).vr,
					up = up.mh;
				for (ds = up - 1; 0 <= ds; ds--) hc = vr[ds], 0 < (hc -= Math.max(1, hc >> 7)) ? vr[ds] = hc : ap.a6x.aFM(ds)
			}
		}
}

function aEu() {
	this.aGX = 32, this.jh = 0, this.ji = 0, this.hO = 0, this.aGY = 0, this.aGZ = 4, this.hN = null, this.aGU = new Int16Array(9), this.ch = function() {
		this.hO = 1 + an.fY(au.eT - 1, this.aGX), this.aGY = 1 + an.fY(au.eU - 1, this.aGX), this.hN = new Array(this.hO * this.aGY), ad.pB.sj(this.hN);
		var jh, ji, aGU = this.aGU,
			g0 = this.hO;
		for (jh = -1; jh <= 1; jh++)
			for (ji = -1; ji <= 1; ji++) aGU[3 * (1 + ji) + 1 + jh] = ji * g0 + jh
	}, this.mw = function(aGb, ds) {
		return this.hN[ds].push(aGb), this.hN[ds].length - 1
	}, this.aGK = function(aGc, aG5, aGA) {
		var aGd, aGe, aG5 = ao.hM(aG5),
			aGA = ao.hM(aGA);
		return aG5 === aGA ? aGc : (aGd = this.hN[aG5].pop(), this.hN[aG5].length === aGc ? this.mw(aGd, aGA) : (aGe = this.hN[aG5][aGc], this.hN[aG5][aGc] = aGd, ap.j4.aFR[aGd] = aGc, this.mw(aGe, aGA)))
	}
}

function aEz() {
	function a7O(aGA, aGf) {
		if (function(aGA, aFB) {
				var gV = ao.hL(aGA),
					aGi = Math.abs(ao.gX(aFB) - ao.gX(gV)),
					gV = Math.abs(ao.gZ(aFB) - ao.gZ(gV));
				return 0 !== Math.max(aGi, gV) && (function(aG5, aGA, aGi, aGj) {
					var aGl = ao.gy(aG5),
						aG5 = ao.h1(aG5),
						aGn = ao.gy(aGA),
						aGA = ao.h1(aGA),
						aGn = aGn - aGl,
						aGA = aGA - aG5,
						aGr = Math.abs(aGn),
						aGs = Math.abs(aGA),
						aGn = 0 < aGn ? 1 : 3,
						aGA = 0 < aGA ? 2 : 0;
					aGs < aGr ? aGv(aGl, aG5, aGl + aGr, aG5 + aGs, aGn, aGA, aGi) : aGv(aG5, aGl, aG5 + aGs, aGl + aGr, aGA, aGn, aGj)
				}(aGA, ao.hK(aFB), aGi, gV), !0)
			}(aGA, aGf)) {
			if (0 === aq.e0[0]) return !!a4.uZ(aGf << 2);
			if (function(aFB) {
					if (a4.uZ(aFB << 2)) return 1;
					return function(aFB) {
						var ds, fo, aG4 = ap.j4.aG4,
							aGz = ao,
							et = aq.e0[0],
							aH0 = 4 * aFB;
						for (ds = et - 1; 0 <= ds; ds--)
							if (fo = aG4[ds], aH0 = aGz.hQ(aH0, fo + 2 & 3), a4.uZ(aH0)) return aq.e0[0] = ds, aq.e4[1] = aH0 >> 2, aq.e4[2] = 1 + fo, 1;
						return
					}(aFB)
				}(aGf)) {
				var ds, aGf = ao.hL(aGA),
					pD = a1e,
					aG4 = ap.j4.aG4,
					et = aq.e0[0] - 1,
					aH0 = 4 * aGf,
					gS = ao.gS;
				for (ds = 0; ds < et; ds++)
					if (aH0 += gS[aG4[ds]], 0 !== pD[aH0 + 3] || 2 !== pD[aH0 + 2]) return !!void 0;
				return !!1
			}
		}
		return !1
	}

	function aGv(aGl, aGm, aGn, aGo, aGt, aGu, aGi) {
		for (var ji, aG4 = ap.j4.aG4, f1 = 0, aGw = 0, i0 = aGo - aGm, g0 = aGn - aGl, aGx = aGl % 16, ds = 1; ds <= aGi; ds++) aG4[f1++] = aGt, aG4[f1] = aGu, f1 += (ji = (i0 * (aGx + (ds << 4)) + .5) / g0 >> 4) - aGw, aGw = ji;
		aq.e6(aq.e0, f1)
	}
	this.mv = function(player, aGf) {
		var fo, gV, gU = ao.gf(player, aGf);
		return gU !== aGf && (fo = ao.gT(gU, aGf), gV = ao.hP(gU, fo), !(!a4.uZ(gV << 2) && (fo = ao.gd(gU, aGf, fo), gV = ao.hP(gU, fo), a4.pN(gV << 2) || !a4.uZ(gV << 2)) || (aq.e4[0] = gV, aq.e4[1] = aGf, aq.e4[2] = 0, !a7O(ao.hK(gV), aGf)) ||
			0 !== aq.e4[2] && ao.go(player, aq.e4[1] + ao.gR[aq.e4[2] - 1] << 2)))
	}, this.my = function(aGf) {
		var aG5 = ap.j4.aFI[aq.e4[3]];
		return aq.e4[1] = aGf, aq.e4[2] = 0, a7O(aG5, aGf)
	}
}

function aEv() {
	var aFd = 32,
		aH2 = new Array(2);

	function p1(iU) {
		var jh, ji, gg, gz, gw, gG = aFd,
			uF = ad.kj.p1(gG, gG),
			gO = ad.kj.getContext(uF, !0),
			gK = ad.kj.getImageData(gO, gG, gG),
			pD = gK.data,
			ow = (gG >> 1) - .5,
			aH3 = Math.sqrt(ow * ow);
		for (pD.fill(255), ji = 0; ji < gG; ji++)
			for (jh = 0; jh < gG; jh++) gw = jh - ow, gz = ji - ow, gg = 4 * (ji * gG + jh), gw = 714 * (aH3 - Math.sqrt(gw * gw + gz * gz)) / aH3, pD[2 + gg] = iU, pD[3 + gg] = 255 < gw ? 0 : gw;
		return gO.putImageData(gK, 0, 0), uF
	}
	this.aFG = -1, this.ch = function() {
		this.aFG = -1, aH2[0] || (aH2[0] = p1(255), aH2[1] = p1(0))
	}, this.aH4 = function(gO, gp, jh, ji, gQ, ds) {
		ao.h7() && (gO.setTransform(gp *= 4 / 3 * .625, 0, 0, gp, jh - (gQ *= 4 / 3), ji - gQ), gO.drawImage(aH2[+(ap.j4.aFF[ds] === this.aFG)], 0, 0))
	}
}

function yD() {
	if (iW < 3) return !1;
	if (an.fY(3 * fJ[jO[2]], 2) < fJ[jO[0]]) return !1;
	if (fJ[jO[0]] + fJ[jO[1]] + fJ[jO[2]] < te - an.fY(te, 10)) return !1;
	if (8 * Math.min(Math.min(ep[jO[0]], ep[jO[1]]), ep[jO[2]]) < 5 * Math.max(Math.max(ep[jO[0]], ep[jO[1]]), ep[jO[2]])) return !1;
	if (hV) {
		if (b8.iV[jO[0]] === b8.iV[jO[1]]) return !1;
		if (b8.iV[jO[0]] === b8.iV[jO[2]]) return !1;
		if (b8.iV[jO[1]] === b8.iV[jO[2]]) return !1
	}
	return !0
}

function cq() {
	this.gH = 501, this.rX = new Uint32Array(this.gH), this.tC = new Uint32Array(this.gH), this.a1J = new Uint16Array(this.gH), this.v8 = 0, this.aH7 = 1, this.iU = 0, this.max = [0, 0, 0], this.er = 0, this.aH8 = ["Avg. Attack Strength",
		"Number Attacks", "Ships sent", "Bots conquered", "Humans conquered", "Attacked by Bots", "Attacked by Humans", "Territorial Loss", "Territorial Income", "Interest Income", "Received Support", "Overall Income", "Commanding Costs",
		"Attack Losses", "Defense Losses", "Shipping Losses", "Transmitted Support", "Overall Expenses"
	], this.ch = function() {
		this.v8 = 0, this.aH7 = 1, this.iU = 0, this.aH9(), this.aHA()
	}, this.mq = function(player, h9) {
		player === eo && (this.er[0] += h9, this.er[1]++, this.er[12] += aq.e1[1], this.er[13] += aq.e1[0])
	}, this.mB = function(player, ll) {
		donationsTracker.logDonation(player, ll, aq.e1[0]);
		player === eo && (k.mB(aq.e1[0], aq.e1[1], ll), this.er[12] += aq.e1[1], this.er[16] += aq.e1[0]), ll === eo && (k.w6(aq.e1[0], player), this.er[10] += aq.e1[0])
	}, this.iF = function() {
		0 < this.iU-- || this.aHB()
	}, this.aHB = function() {
		0 !== h5[eo] && (this.rX[this.v8] = fJ[eo], this.tC[this.v8] = ep[eo], this.a1J[this.v8] = a7.a1K(eo), this.aHC(this.v8), this.v8++, this.v8 === this.gH && this.aHD(), this.iU = this.aH7 - 1, b5.fx())
	}, this.aHD = function() {
		this.aH9(), this.aHC(0), this.v8 = 1 + el(this.gH, 2);
		for (var ds = 1; ds < this.v8; ds++) this.rX[ds] = this.rX[2 * ds], this.tC[ds] = this.tC[2 * ds], this.a1J[ds] = this.a1J[2 * ds], this.aHC(ds);
		this.aH7 *= 2
	}, this.aH9 = function() {
		this.max[0] = this.max[1] = this.max[2] = 0
	}, this.aHA = function() {
		this.er = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	}, this.aHC = function(ds) {
		this.max[0] = this.rX[ds] > this.max[0] ? this.rX[ds] : this.max[0], this.max[1] = this.tC[ds] > this.max[1] ? this.tC[ds] : this.max[1], this.max[2] = this.a1J[ds] > this.max[2] ? this.a1J[ds] : this.max[2]
	}
}

function cr() {
	this.g0 = 0, this.i0 = 0, this.qN = 0, this.qO = 0, this.a2B = 0, this.a2C = 0, this.wK = 0, this.wL = 0, this.a51 = 0, this.a3k = 0, this.aHE = 0, this.aHF = 0, this.xm = 0, this.fu = 0, this.us = ["Territory", "Balance", "Interest", "Numbers"],
		this.sH = !1, this.aHG = -1, this.aHH = !1, this.aHI = [0, 0], this.ch = function() {
			this.sH = !1, this.aHG = -1, this.aHH = !1, this.resize()
		}, this.resize = function() {
			this.g0 = df < 1.369 * dg ? df : 1.369 * dg;
			var f2 = de && df < dg ? 1 : de ? .8 : df < dg ? .65 : .59;
			this.g0 = Math.floor(f2 * this.g0), this.g0 -= de && df < dg ? 2 * nZ + 2 : 0, this.i0 = Math.floor(this.g0 / 1.369), this.xm = Math.floor(this.i0 / 150), this.xm = Math.max(this.xm, 1.5), this.qN = Math.floor(1 + .02 * this.g0), this
				.qO = Math.floor(1 + .04 * this.g0), this.wK = this.qO, this.wL = Math.floor(1 + .075 * this.g0), this.a3k = Math.floor(1 + .1125 * this.g0), this.aHE = Math.floor(this.g0 * (de ? .03 : .029)), this.aHE = Math.max(this.aHE, 4), this
				.aHF = Math.floor(.035 * this.g0), this.aHF = Math.max(this.aHF, 4), this.a51 = this.i0 - 2 * this.wK - this.wL - this.a3k, this.sH && this.aHJ()
		}, this.g3 = function(g4, g5) {
			var pi, ph;
			return !!this.sH && (ph = g4, pi = g5, g4 -= el(jp - this.g0, 2), g5 -= el(g7 - this.i0, 2), g4 < 0 || g5 < 0 || g4 >= this.g0 || g5 >= this.i0 || g4 >= this.g0 - this.a3k && g5 < this.a3k ? 1 < j.g3(ph, pi) || this.oH() : g5 < this
				.a3k || (g5 < this.i0 - this.wL ? (this.aHH = !0, this.aHG = (g4 - 2 * this.qN - this.a2B) / this.a2C, 3 !== this.fu && (b7.d2 = !0)) : (ph = (ph = Math.floor(g4 / (this.g0 / this.us.length))) < 0 ? 0 : ph >= this.us.length ? this
					.us.length - 1 : ph) !== this.fu && (this.fu = ph, this.aHJ(), b7.d2 = !0)), !0)
		}, this.sZ = function() {
			var aHK = Math.floor((this.aHI[0] + hA) / hB),
				aHL = Math.floor((this.aHI[1] + hC) / hB);
			aHK < 1 || aHL < 1 || aHK >= au.eT - 1 || aHL >= au.eU - 1 || console.log(aHK + " " + aHL)
		}, this.rq = function(g4, g5) {
			return this.aHI[0] = g4, this.aHI[1] = g5, !(!this.sH || !this.aHH || (g4 -= el(jp - this.g0, 2), g5 = this.aHG, this.aHG = (g4 - 2 * this.qN - this.a2B) / this.a2C, (0 <= this.aHG && this.aHG <= 1 || 0 <= g5 && g5 <= 1) && (b7.d2 = !0),
				0))
		}, this.sK = function() {
			this.aHH && (this.aHH = !1)
		}, this.sV = function() {
			this.sH ? this.oH() : this.show()
		}, this.show = function() {
			b4.v8 < 2 || (this.sH = !0, this.aHJ())
		}, this.oH = function() {
			this.sH = !1, this.aHG = -1, b7.d2 = !0
		}, this.aHJ = function() {
			this.fu < 2 ? this.a2B = n.measureText(ad.jx.jy(b4.max[this.fu]), this.aHE + fw) : 2 === this.fu && (this.a2B = n.measureText(ad.jx.tR(6, 2), this.aHE + fw)), this.a2C = this.g0 - 2 * this.qN - this.a2B - this.qO
		}, this.fx = function() {
			this.sH && this.aHJ()
		}, this.gA = function() {
			this.sH && this.wP()
		}, this.wP = function() {
			var jh = el(jp - this.g0, 2),
				ji = el(g7 - this.i0, 2);
			gB.setTransform(1, 0, 0, 1, jh, ji), gB.fillStyle = ae.kp, gB.fillRect(0, this.a3k, this.g0, this.i0 - this.a3k), this.aHM(), this.aHN(), gB.strokeRect(0, 0, this.g0, this.i0), gB.textAlign = x3, gB.font = this.aHE + fw, 0 === this.fu ?
				this.aHO(b4.rX, jh, ji) : 1 === this.fu ? this.aHO(b4.tC, jh, ji) : 2 === this.fu ? this.aHP(jh, ji) : 3 === this.fu && (this.aHQ(jh, ji), this.aHR(jh, ji)), j.vA(Math.floor(jh + this.g0 - .725 * this.a3k), Math.floor(ji + .275 * this
					.a3k), Math.floor(.45 * this.a3k)), gB.setTransform(1, 0, 0, 1, 0, 0)
		}, this.aHM = function() {
			var ds, dU;
			for (gB.lineWidth = this.xm, gB.textBaseline = gC, gB.textAlign = gD, gB.strokeStyle = ae.gE, gB.font = fv + this.aHF + fw, dU = this.g0 / this.us.length, gB.fillStyle = ae.l7, gB.fillRect(this.fu * dU, this.i0 - this.wL, dU, this.wL), gB
				.fillStyle = ae.gE, gB.fillRect(0, this.i0 - this.wL - .5 * this.xm, this.g0, this.xm), ds = 1; ds <= 3; ds++) gB.fillRect(ds * dU, this.i0 - this.wL, this.xm, this.wL);
			for (ds = this.us.length - 1; 0 <= ds; ds--) gB.fillText(this.us[ds], (ds + .5) * dU, this.i0 - .46 * this.wL)
		}, this.aHN = function() {
			gB.fillStyle = ae.lM, gB.fillRect(0, 0, this.g0, this.a3k), gB.fillStyle = ae.gE, gB.fillRect(0, this.a3k - .5 * this.xm, this.g0, this.xm), gB.font = fv + Math.floor(.39 * this.a3k) + fw, gB.fillText("Statistics", Math.floor(this.g0 /
				2), Math.floor(.55 * this.a3k))
		}, this.aHO = function(e7, jh, ji) {
			var ow = b4.max[this.fu],
				fq = (gB.setTransform(1, 0, 0, 1, jh + 2 * this.qN + this.a2B, ji + this.wK + this.a3k), gB.lineWidth = 2, this.a51 / Math.sqrt(ow));
			gB.beginPath(), gB.moveTo(this.a2C, this.a51 - fq * Math.sqrt(e7[b4.v8 - 1]));
			for (var ds = b4.v8 - 2; 0 <= ds; ds--) gB.lineTo(ds * this.a2C / (b4.v8 - 1), this.a51 - fq * Math.sqrt(e7[ds]));
			gB.stroke();
			jh = this.vA(e7, fq, .5);
			jh < .95 && gB.fillText(ad.jx.jy(ow), -this.qN, 0), .05 < Math.abs(jh - .5) && gB.fillText(ad.jx.jy(Math.floor(ow / 4)), -this.qN, Math.floor(this.a51 / 2)), .05 < jh && gB.fillText("0", -this.qN, this.a51)
		}, this.aHP = function(jh, ji) {
			gB.setTransform(1, 0, 0, 1, jh + 2 * this.qN + this.a2B, ji + this.wK + this.a3k), gB.lineWidth = 2;
			var fq = this.a51 / Math.max(b4.max[this.fu], 1);
			gB.beginPath(), gB.moveTo(this.a2C, this.a51 - fq * b4.a1J[b4.v8 - 1]);
			for (var ds = b4.v8 - 2; 0 <= ds; ds--) gB.lineTo(ds * this.a2C / (b4.v8 - 1), this.a51 - fq * b4.a1J[ds]);
			gB.stroke();
			jh = this.vA(b4.a1J, fq, 1), ji = b4.max[this.fu] / 100;
			jh < .95 && gB.fillText(ad.jx.tR(ji, 2), -this.qN, 0), .05 < Math.abs(jh - .5) && gB.fillText(ad.jx.tR(ji / 2, 2), -this.qN, Math.floor(this.a51 / 2)), .05 < jh && gB.fillText(ad.jx.tR(0, 2), -this.qN, this.a51)
		}, this.aHQ = function(jh, ji) {
			gB.setTransform(1, 0, 0, 1, jh + .34 * this.g0, ji + 2 * this.wK + this.a3k), gB.textAlign = x3;
			for (var a0j = this.i0 - 4 * this.wK - this.wL - this.a3k, ds = 7; 0 <= ds; ds--) gB.fillText(b4.aH8[ds], 0, ds * a0j / 7);
			gB.setTransform(1, 0, 0, 1, jh + .39 * this.g0, ji + 2 * this.wK + this.a3k), gB.textAlign = vg;
			jh = b4.er[1];
			for (gB.fillText(ad.jx.tR(b4.er[0] / (10 * (jh < 1 ? 1 : jh)), 1), 0, 0), ds = 6; 1 <= ds; ds--) gB.fillText(b4.er[ds].toString(), 0, ds * a0j / 7);
			gB.fillText(ad.jx.tR(100 * (1 - fJ[eo] / b4.er[7]), 0), 0, a0j)
		}, this.aHR = function(jh, ji) {
			gB.setTransform(1, 0, 0, 1, jh + .79 * this.g0, ji + 2 * this.wK + this.a3k), gB.textAlign = x3;
			var ds, a0j = this.i0 - 4 * this.wK - this.wL - this.a3k;
			for (gB.fillStyle = ae.l2, ds = 2; 0 <= ds; ds--) gB.fillText(b4.aH8[ds + 8], 0, ds * a0j / 9);
			for (gB.fillStyle = ae.l1, gB.fillText(b4.aH8[11], 0, 3 * a0j / 9), gB.fillStyle = ae.lF, ds = 8; 4 <= ds; ds--) gB.fillText(b4.aH8[ds + 8], 0, ds * a0j / 9);
			gB.fillStyle = ae.lE, gB.fillText(b4.aH8[17], 0, 9 * a0j / 9), gB.fillStyle = ae.l2;
			var vo = ad.jx.jy(b4.er[8] + b4.er[9] + b4.er[10] + b4.er[11]),
				aHS = gB.measureText(vo).width,
				jh = (gB.setTransform(1, 0, 0, 1, jh + .83 * this.g0 + aHS, ji + 2 * this.wK + this.a3k), gB.fillText(ad.jx.jy(b4.er[8]), 0, 0), gB.fillText(ad.jx.jy(b4.er[9]), 0, a0j / 9), gB.fillText(ad.jx.jy(b4.er[10]), 0, 2 * a0j / 9), gB
					.fillStyle = ae.l1, gB.fillText(vo, 0, 3 * a0j / 9), gB.fillStyle = ae.lF, b4.er[13] - a6.a7v(eo)),
				aHS = (gB.fillText(ad.jx.jy(b4.er[12]), 0, 4 * a0j / 9), gB.fillText(ad.jx.jy(jh), 0, 5 * a0j / 9), gB.fillText(ad.jx.jy(b4.er[14]), 0, 6 * a0j / 9), gB.fillText(ad.jx.jy(b4.er[15]), 0, 7 * a0j / 9), gB.fillText(ad.jx.jy(b4.er[16]),
					0, 8 * a0j / 9), b4.er[12] + jh + b4.er[14] + b4.er[15] + b4.er[16] + b4.er[17]);
			gB.fillStyle = ae.lE, gB.fillText(ad.jx.jy(aHS), 0, a0j), gB.fillStyle = ae.gE
		}, this.vA = function(e7, fq, zS) {
			var ds, dC, e8;
			return this.aHG < 0 || 1 < this.aHG ? .25 : (ds = this.aHG * (b4.v8 - 1), e8 = e7[dC = Math.floor(ds)], e8 += (ds - dC) * (e7[dC < b4.v8 - 1 ? dC + 1 : dC] - e8), gB.strokeStyle = ae.ku, .04 < this.aHG && this.aHV(0, this.a51 - fq * Math
					.pow(e8, zS), ds * this.a2C / (b4.v8 - 1), this.a51 - fq * Math.pow(e8, zS)), .04 < e8 / b4.max[this.fu] && this.aHV(ds * this.a2C / (b4.v8 - 1), this.a51, ds * this.a2C / (b4.v8 - 1), this.a51 - fq * Math.pow(e8, zS)), gB
				.fillStyle = ae.lH, gB.beginPath(), gB.arc(ds * this.a2C / (b4.v8 - 1), this.a51 - fq * Math.pow(e8, zS), Math.max(2, .014 * this.i0), 0, 2 * Math.PI), gB.fill(), e7 = this.aHG * b7.a1L, e7 = 0 === h5[eo] ? Math.floor(e7 * u
				.a1S) : Math.floor(e7 * b7.iT()), gB.fillStyle = ae.gE, gB.fillText(1 === zS ? ad.jx.tR(e8 / 100, 2) : ad.jx.jy(Math.floor(e8)), -this.qN, this.a51 - fq * Math.pow(e8, zS)), gB.textAlign = gD, gB.fillText(t.a04(e7), ds * this
					.a2C / (b4.v8 - 1), this.a51 + this.aHE - (de ? 2 : 0) - this.xm), gB.textAlign = x3, fq * Math.pow(e8, zS) / this.a51)
		}, this.aHV = function(jm, jn, jo, jq) {
			gB.beginPath(), gB.moveTo(jm, jn), gB.lineTo(jo, jq), gB.stroke()
		}
}

function bH() {
	this.aHW = "https://", this.aHX = this.aHW + "territorial.io/", this.aC6 = this.aHX + "changelog", this.aC7 = this.aHX + "terms", this.wO = this.aHX + "cookie_policy", this.rg = this.aHX + "privacy_policy", this.aC3 = this.aHX + "tutorial", this
		.aC4 = this.aHX + "players", this.aC5 = this.aHX + "clans", this.a2R = this.aHW + "play.google.com/store/apps/details?id=territorial.io", this.a2S = this.aHW + "apps.apple.com/app/id1581110913", this.a2T = this.aHW +
		"www.youtube.com/watch?v=toZTQ8aRdFc", this.a2U = this.aHW + "discord.gg/pthqvpTXmh", this.a2V = this.aHW + "www.instagram.com/davidtschacher/"
}

function cW() {
	this.j4 = new aHY, this.qF = new aHZ, this.ch = function() {
		this.j4.ch()
	}, this.iF = function() {
		0 !== this.j4.wR && this.j4.wR--
	}
}

function aHZ() {
	this.gA = function() {
		if (0 !== ar.j4.wR && (gB.globalAlpha = Math.min(ar.j4.wR / 580, 1), gB.drawImage(ar.j4.aHc, 1 + p.jr(), 1 + p.g9()), gB.globalAlpha = 1, kK)) {
			var ds, jm = hA / hB,
				jn = hC / hB,
				jo = (jp + hA) / hB,
				jq = (g7 + hC) / hB,
				f1 = ar.j4.aHd * hB,
				aHe = ar.j4.aHe;
			for (ds = h4 - 1; 0 <= ds; ds--) ! function(ds, f1, jm, jn, jo, jq, aHe) {
				0 === h5[ds] || 0 === fJ[ds] || (jo = jp * ((i4[ds] + i3[ds] + 1) / 2 - jm) / (jo - jm) - .5 * f1, jm = g7 * ((i7[ds] + i6[ds] + 1) / 2 - jn) / (jq - jn) - .5 * f1, jp < jo) || g7 < jm || jo < -f1 || jm < -f1 || (gB
					.setTransform(hB, 0, 0, hB, jo, jm), gB.drawImage(aHe[hV ? b8.iV[ds] : 1], 0, 0))
			}(ds, f1, jm, jn, jo, jq, aHe);
			gB.setTransform(hB, 0, 0, hB, 0, 0)
		}
	}
}

function aHY() {
	this.aHd = 28, this.wR = 0, this.aHc = null;
	var aHg = this.aHe = null;

	function aHj(gG, aHl) {
		var jh, ji, gg, gw, uF = ad.kj.p1(gG, gG),
			gO = ad.kj.getContext(uF, !0),
			gK = ad.kj.getImageData(gO, gG, gG),
			pD = gK.data,
			ow = (gG >> 1) - .5,
			aHm = .5 + ow;
		for (aHm *= aHm, ji = 0; ji < gG; ji++)
			for (jh = 0; jh < gG; jh++) gw = (gw = jh - ow) * gw + (gw = ji - ow) * gw, pD[gg = 4 * (ji * gG + jh)] = aHl[0], pD[1 + gg] = aHl[1], pD[2 + gg] = aHl[2], pD[3 + gg] = (aHm - gw) * aHl[3] / aHm;
		return gO.putImageData(gK, 0, 0), uF
	}

	function aH4(ds, gO, uF, gG) {
		var jh;
		0 !== h5[ds] && 0 !== fJ[ds] && (jh = i4[ds] + i3[ds] + 1 - gG - 2 >> 1, gG = i7[ds] + i6[ds] + 1 - gG - 2 >> 1, gO.drawImage(uF[hV ? b8.iV[ds] : ds < h4 ? 1 : 0], jh, gG))
	}
	this.ch = function() {
		var up;
		this.wR = 700,
			function(up) {
				var ds, gG = up.aHd;
				if (up.aHe = [], aHg = [], hV)
					for (ds = 0; ds <= th; ds++) up.aHe.push(aHj(gG, b8.aHk[b8.rN[ds]])), aHg.push(aHj(gG >> 1, b8.aHk[b8.rN[ds]]));
				else up.aHe.push(aHj(gG, b8.aHk[0])), up.aHe.push(aHj(gG, b8.aHk[4])), aHg.push(aHj(gG >> 1, b8.aHk[0]))
			}(this),
			function(up, aHn) {
				var ds, aHc = up.aHc,
					gO = ad.kj.getContext(aHc, !0),
					et = ex,
					gG = up.aHd >> 1;
				gO.imageSmoothingEnabled = !1, gO.setTransform(1, 0, 0, 1, 0, 0), aHn && gO.clearRect(0, 0, aHc.width, aHc.height);
				for (ds = h4; ds < et; ds++) aH4(ds, gO, aHg, gG)
			}(this, null !== (up = this).aHc && up.aHc.width === au.eT - 2 && up.aHc.height === au.eU - 2 || (up.aHc = ad.kj.p1(au.eT - 2, au.eU - 2), !1))
	}, this.tb = function() {
		for (var et = h4, gG = this.aHd, aHe = this.aHe, gO = ad.kj.getContext(this.aHc, !0), ds = 0; ds < et; ds++) aH4(ds, gO, aHe, gG)
	}
}

function cX() {
	this.aHo = -1, this.ch = function() {
		this.aHo = -1
	}, this.iF = function() {
		-1 !== this.aHo && at.qw.r4(this.aHo)
	}, this.m5 = function(player) {
		return !!j.v7(player) && (1 === iW ? (this.aHo = player, iv && kK && ml.iF()) : (k.r2(player, player === eo ? 21 : 22), 8 === it ? this.aHo = 1 - player : iv ? (a6t(player), a9c(), kK && ml.iF()) : this.aHp(player)), !0)
	}, this.mi = function(player) {
		1 === jE && 0 !== h5[player] && 2 !== h6[player] && (8 === it ? this.aHo = 1 - player : this.aHp(player)), k.r2(player, 4)
	}, this.aHp = function(player) {
		kK ? (a6t(player), a9c()) : aT.a9Y(player)
	}
}

function cu() {
	this.a4a = ["rgba(130,130,130,0.88)", "rgba(130,12,12,0.88)", "rgba(12,130,12,0.88)", "rgba(12,12,130,0.88)", "rgba(130,130,12,0.88)", "rgba(130,12,130,0.88)", "rgba(12,130,130,0.88)", "rgba(130,130,130,0.88)", "rgba(0,0,0,0.88)"], this.a0i = [ae
		.gE, "rgb(255,120,120)", "rgb(0,230,0)", "rgb(150,150,255)", "rgb(240,240,25)", "rgb(255,70,255)", "rgb(25,240,240)", ae.gE, "rgb(170,170,170)"
	], this.aHq = [ae.gE, "rgb(255,0,0)", "rgb(0,255,0)", "rgb(0,0,255)", "rgb(255,255,0)", "rgb(255,0,255)", "rgb(0,255,255)", ae.gE, ae.jt], this.aHr = [ae.jt, ae.gE, ae.gE, ae.gE, ae.jt, ae.jt, ae.jt, ae.jt, ae.gE];
	var aHs = ["255,255,255", "0,0,0", "255,4,4", "200,4,4", "4,255,4", "4,180,4", "255,195,195", "90,3,3", "200,255,200", "3,84,3"],
		aHt = (this.a93 = ["rgba(" + aHs[0] + ",", "rgba(" + aHs[1] + ",", "rgba(" + aHs[2] + ",", "rgba(" + aHs[3] + ",", "rgba(" + aHs[4] + ",", "rgba(" + aHs[5] + ",", "rgba(" + aHs[6] + ",", "rgba(" + aHs[7] + ",", "rgba(" + aHs[8] + ",",
			"rgba(" + aHs[9] + ","
		], this.a94 = ["rgb(" + aHs[0] + ")", "rgb(" + aHs[1] + ")", "rgb(" + aHs[2] + ")", "rgb(" + aHs[3] + ")", "rgb(" + aHs[4] + ")", "rgb(" + aHs[5] + ")", "rgb(" + aHs[6] + ")", "rgb(" + aHs[7] + ")", "rgb(" + aHs[8] + ")", "rgb(" + aHs[
			9] + ")"
		], this.fr = ["White", "Red", "Green", "Blue", "Yellow", "Magenta", "Cyan", "White", "Black"], this.aHk = [
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
	this.rN = [0, 1, 2, 3, 4, 5, 6, 7, 8], this.iV = new Uint8Array(ex), this.rV = null, this.rW = null, this.ch = function(qR) {
		this.iV.fill(0), this.aHu(), hV && (aX.iq && aX.ir.a7d ? this.a6G() : 9 === it ? this.aHv() : this.iF(qR))
	}, this.a6G = function() {
		var ds, et = pj;
		for (this.rN = [0, 1, 2, 3, 4, 5, 6, 7, 8], ds = 0; ds < et; ds++) this.iV[ds] = aX.ir.a7d[ds]
	}, this.aHu = function() {
		for (var ds = this.rN.length - 1; 0 <= ds; ds--) this.rN[ds] = ds;
		this.rV = [], this.rW = []
	}, this.aHv = function() {
		for (var ds = h4 + aA.a9P - 1; 0 <= ds; ds--) this.iV[ds] = 1;
		for (ds = h4 + aA.a9P; ds < ex; ds++) this.iV[ds] = 2;
		this.rN[1] = 7, this.rN[2] = 8
	}, this.iF = function(qR) {
		var ga = new Uint8Array(h4),
			gb = new Uint8Array(h4),
			aHw = new Uint16Array(8),
			aHx = new Uint16Array(this.rN.length);
		this.aHy(qR, ga, gb, aHw), this.a6E(aHw), iv || this.aHz(aHx, ga, gb), this.aI0(ga, gb, aHx), iv ? this.aI1() : this.aI2()
	}, this.aHy = function(qR, ga, gb, aI3) {
		for (var hs, dC, aI4, et = this.rN.length - 1, e7 = new Uint16Array(et), ds = h4 - 1; 0 <= ds; ds--) {
			for (hs = et; 1 <= hs; hs--) e7[hs - 1] = Math.abs(4 * qR[ds].a5F[0] - aHt[hs][0]) + Math.abs(4 * qR[ds].a5F[1] - aHt[hs][1]) + Math.abs(4 * qR[ds].a5F[2] - aHt[hs][2]);
			for (aI4 = 768, hs = et - 1; 0 <= hs; hs--) e7[dC = (hs + ds) % et] < aI4 && (aI4 = e7[dC], ga[ds] = dC);
			for (aI3[ga[ds]] += 4, aI4 = 768, hs = et - 1; 0 <= hs; hs--) e7[dC = (hs + ds) % et] < aI4 && dC !== ga[ds] && (aI4 = e7[dC], gb[ds] = dC);
			aI3[gb[ds]]++
		}
	}, this.a6E = function(aI3) {
		for (var hs, uD, et = this.rN.length - 1, ds = et; 0 <= ds; ds--) this.rN[ds] = ds;
		for (ds = et - 1; 0 <= ds; ds--) aI3[ds]++;
		for (ds = 1; ds <= et; ds++) {
			for (uD = 0, hs = 1; hs < et; hs++) aI3[hs] > aI3[uD] && (uD = hs);
			aI3[uD] = 0, this.rN[ds] = uD + 1
		}
	}, this.aHz = function(aHx, ga, gb) {
		var ds, hs, aI5, iU, f2, dC, kV, sz, aI6 = this.rN.length - 1,
			aI7 = new Uint16Array(aI6),
			aI8 = [];
		loop: for (ds = h4 - 1; 0 <= ds; ds--)
			if (null !== (aI5 = ad.jx.tU(wI[ds]))) {
				for (hs = this.rV.length - 1; 0 <= hs; hs--)
					if (aI5 === this.rV[hs]) {
						this.rW[hs].push(ds);
						continue loop
					} this.rV.push(aI5), aI8.push(!1), this.rW.push([]), this.rW[this.rV.length - 1].push(ds)
			}
		for (hs = this.rV.length - 1; 0 <= hs; hs--) {
			for (f2 = -1, iU = this.rV.length - 1; 0 <= iU; iU--) !aI8[iU] && (-1 === f2 || this.rW[iU].length > this.rW[f2].length) && (f2 = iU);
			for (iU = aI6 - 1; 0 <= iU; iU--) aI7[iU] = 1;
			for (iU = this.rW[f2].length - 1; 0 <= iU; iU--) aI7[ga[this.rW[f2][iU]]] += 3, aI7[gb[this.rW[f2][iU]]]++;
			for (ds = aI6 - 1; 0 <= ds; ds--) {
				for (dC = f2 % aI6, iU = aI6 - 1; 0 <= iU; iU--) aI7[iU] > aI7[dC] && (dC = iU);
				for (kV = -1, iU = th; 0 < iU; iU--)
					if (this.rN[iU] === dC + 1) {
						kV = iU;
						break
					} if (aI7[dC] = 0, -1 !== kV) {
					for (sz = 0, iU = th; 0 < iU; iU--) aHx[kV] > aHx[iU] && sz++;
					if (sz !== th - 1) {
						for (iU = this.rW[f2].length - 1; 0 <= iU; iU--) aHx[kV]++, this.iV[this.rW[f2][iU]] = kV;
						break
					}
				}
			}
			aI8[f2] = !0
		}
	}, this.aI0 = function(ga, gb, aHx) {
		for (var ds, gv, et = this.rN.length - 1, border = el(h4, th), aI9 = (0 < h4 % th && border++, new Uint8Array(1 + et)), hs = et; 1 <= hs; hs--) aI9[this.rN[hs]] = hs;
		for (ds = 0; ds < h4; ds++) gv = aI9[ga[ds] + 1], 0 === this.iV[ds] && gv <= th && aHx[gv] < border && (aHx[gv]++, this.iV[ds] = gv);
		for (ds = 0; ds < h4; ds++) gv = aI9[gb[ds] + 1], 0 === this.iV[ds] && gv <= th && aHx[gv] < border && (aHx[gv]++, this.iV[ds] = gv);
		for (hs = th; 1 <= hs; hs--)
			for (ds = h4 - 1; 0 <= ds && !(aHx[hs] >= border); ds--) 0 === this.iV[ds] && (aHx[hs]++, this.iV[ds] = hs)
	}, this.aI1 = function() {
		var ds, hi, aI3 = new Uint16Array(th);
		for (aI3[th - 1] = ex, ds = th - 2; 0 <= ds; ds--) aI3[ds] = a1.iw[ds].w1;
		for (aI3[0]--, hi = 0 === aI3[0] ? 1 : 0, ds = h4; ds < ex; ds++) this.iV[ds] = hi + 1, aI3[hi]--, aI3[hi] <= 0 && hi++
	}, this.aI2 = function() {
		for (var ds = h4; ds < ex; ds++) this.iV[ds] = 1 + ds % th
	}
}

function fK() {
	for (var jh, ji, ds = eK - 1; 0 <= ds; ds--) jh = el(eM[ds], 4) % au.eT, ji = el(eM[ds], 4 * au.eT), i4[eG] = i4[eG] > jh ? jh : i4[eG], i7[eG] = i7[eG] > ji ? ji : i7[eG], i3[eG] = i3[eG] < jh ? jh : i3[eG], i6[eG] = i6[eG] < ji ? ji : i6[eG]
}

function ec() {
	var f2, f0, ds, et = eu[eG].length;
	loop: for (ds = et - 1; 0 <= ds; ds--) {
		for (f2 = 3; 0 <= f2; f2--)
			if (f0 = eu[eG][ds] + eP[f2], a4.f5(f0) || a4.f3(f0) && a4.f4(f0) !== eG) {
				a4.hf(eu[eG][ds], eG);
				continue loop
			} eu[eG][ds] = eu[eG][et - 1], eu[eG].pop(), et--
	}
}

function ed() {
	var f2, f0, aIA, aIB, et = fB[eG].length;
	loop: for (var ds = et - 1; 0 <= ds; ds--) {
		for (aIA = aIB = !1, f2 = 3; 0 <= f2; f2--) {
			if (f0 = fB[eG][ds] + eP[f2], a4.a6Q(f0, eG)) continue loop;
			aIA = aIA || a4.uZ(f0), aIB = aIB || a4.pN(f0)
		}
		aIA ? fC[eG].push(fB[eG][ds]) : aIB ? fF[eG].push(fB[eG][ds]) : a4.q2(fB[eG][ds], eG), fB[eG][ds] = fB[eG][et - 1], fB[eG].pop(), et--
	}
}

function f9() {
	fJ[eJ] -= eK
}

function fA(border) {
	for (var et = border.length, ds = et - 1; 0 <= ds; ds--) a4.qA(eJ, border[ds]) || (border[ds] = border[et - 1], border.pop(), et--)
}

function fD(border) {
	for (var et = border.length, ds = et - 1; 0 <= ds; ds--) !a4.qA(eJ, border[ds]) && a4.ev(border[ds]) && (border[ds] = border[et - 1], border.pop(), et--)
}

function fE(border) {
	for (var f2, f0, et = border.length, ds = et - 1; 0 <= ds; ds--)
		for (f2 = 3; 0 <= f2; f2--)
			if (f0 = border[ds] + eP[f2], a4.a6Q(f0, eJ)) {
				fB[eJ].push(border[ds]), border[ds] = border[et - 1], border.pop(), et--;
				break
			}
}

function fG() {
	for (var f2, f0, ds = eK - 1; 0 <= ds; ds--)
		for (f2 = 3; 0 <= f2; f2--) f0 = eM[ds] + eP[f2], a4.a6R(eJ, f0) && a4.a6S(f0) && (fB[eJ].push(f0), a4.ew(f0, eJ))
}

function fH() {
	var jh, ji;
	loop: for (; i7[eJ] < i6[eJ];) {
		for (jh = i3[eJ]; jh >= i4[eJ]; jh--)
			if (a4.qA(eJ, 4 * (i7[eJ] * au.eT + jh))) break loop;
		i7[eJ]++
	}
	loop: for (; i7[eJ] < i6[eJ];) {
		for (jh = i3[eJ]; jh >= i4[eJ]; jh--)
			if (a4.qA(eJ, 4 * (i6[eJ] * au.eT + jh))) break loop;
		i6[eJ]--
	}
	loop: for (; i4[eJ] < i3[eJ];) {
		for (ji = i6[eJ]; ji >= i7[eJ]; ji--)
			if (a4.qA(eJ, 4 * (ji * au.eT + i4[eJ]))) break loop;
		i4[eJ]++
	}
	loop: for (; i4[eJ] < i3[eJ];) {
		for (ji = i6[eJ]; ji >= i7[eJ]; ji--)
			if (a4.qA(eJ, 4 * (ji * au.eT + i3[eJ]))) break loop;
		i3[eJ]--
	}
}

function hn(player, hb) {
	return 0 === b8.iV[player] || b8.iV[player] !== b8.iV[hb]
}

function ub(player, hb) {
	for (var dC, aIC = a6.eY(player), ds = 0; ds < aIC; ds++)
		if (0 === a6.eZ(player, ds))
			if ((dC = a6.ee(player, ds)) === ex) {
				if (hb === ex) return !1;
				if (ua(hb)) return !0
			} else if (hb === ex) {
		if (ua(dC)) return !0
	} else if (uf(hb, dC)) return !0;
	return !1
}

function ua(player) {
	for (var ds, f1, et = fB[player].length, f2 = 3; 0 <= f2; f2--)
		for (f1 = eP[f2], ds = 0; ds < et; ds++)
			if (a4.f5(fB[player][ds] + f1)) return !0;
	return !1
}

function uf(t9, tA) {
	var ds, dU, f2, f1, f0, aEF = fB[t9].length,
		aG6 = fB[tA].length;
	for (aG6 < aEF && (dU = t9, t9 = tA, tA = dU, dU = aEF, aEF = aG6, 0), f2 = 3; 0 <= f2; f2--)
		for (f1 = eP[f2], ds = 0; ds < aEF; ds++)
			if (f0 = fB[t9][ds] + f1, a4.f3(f0) && a4.f4(f0) === tA) return !0;
	return !1
}

function aID() {
	this.iF = function() {
		l.iF(), w.iF(), aK.iF(), aP.j4.iF(), aO.a44(), bA.iF(), b7.d2 && (b7.d2 = !1, x.gA())
	}
}

function aIE() {
	this.dT = b7.dT, this.fu = 0, this.aIF = 0, this.a41 = 0, this.aIG = null, this.aIH = 7, this.wS = 0, this.ch = function() {
		this.a41 = 0, this.aIG = [], this.fu = 0, this.aIF = 0
	}, this.aCy = function(mU) {
		var ds;
		if (kK) this.a1M(mU);
		else if (this.aIG.push(mU), 2 === jE) {
			for (ds = 0; ds < this.aIG.length; ds++) aa.lc.iF(this.aIG[ds]);
			this.aIG = []
		}
	}, this.a1M = function(mU) {
		aa.lc.iF(mU), ab.iF(), t.a1M(this.a41), this.a41 === ti ? (ml.iF(), this.a41 = 0, this.fu = 0, this.aIF = 0, this.dT = b7.dT) : (this.a41++, a8.ta(), a8.jD(!0), b2.a1c())
	}, this.iF = function() {
		aK.iF(), kK ? (b7.d2 = t.a1M(-1) || b7.d2, jF()) : (0 !== this.fu || b7.dT >= this.dT && (this.dT += b7.a1L * Math.floor(1 + (b7.dT - this.dT) / b7.a1L), 2 === jE ? j2() : this.aII(), this.fu++, 27 < b7.dT - this.wS)) && this.aIJ(), jA(),
			b7.d2 && (b7.d2 = !1, qD()), this.wS = b7.dT
	}, this.aIJ = function() {
		b7.d2 = !0, jC(), this.fu = 0
	}, this.aII = function() {
		var aIK, ds;
		if (this.aIF !== 7 * this.a41) j7(), b2.a1c();
		else {
			for (aIK = !1; this.aIL() && (aIK = !0, j7(), 0 < this.aIG.length);)
				for (ds = this.aIH - 2; 0 <= ds; ds--) j7();
			aIK ? b2.a1c() : (j2(), b2.td())
		}
	}, this.aIL = function() {
		return 0 < this.aIG.length && (this.a41++, aa.lc.iF(this.aIG[0]), this.aIG.shift(), !0)
	}
}

function aIM() {
	var aIN, aIO, aIP, a41, aIQ, fu = 0,
		dT = b7.dT;

	function aIT() {
		! function() {
			if (!kK) return;
			if (iv) return;
			return aIQ % 7 != 0 ? aIQ++ : a41 === ti ? (aIW(), t.a1M(a41), ml.iF()) : (aIW(), aIQ++, a41++, a8.ta(), a8.jD(!0)), 1
		}() && (aIW(), j7())
	}

	function aIU() {
		fu = 0, (kK ? (b7.d2 = t.a1M(a41 - (aIQ % 7 == 0 ? 0 : 1) + aIQ % 7 / 7) || b7.d2, jF) : j.fe || !af.ux ? jF : (b7.d2 = !0, jC))()
	}

	function aIW() {
		var ds, et, aIX = ab.mj.aDh,
			e8 = ab.mj.aDi,
			eA = ab.mj.aDj,
			eC = ab.mj.aDk,
			aIY = ab.mj.aDl,
			aIZ = ab.mj.aDm;
		if (aIN >= aIZ.length) k.vm("Replay file smaller than expected."), at.qw.r4(-1);
		else if (aIZ = aIZ[aIN], aIY[aIN]) {
			for (et = aIO + aIZ, ds = aIO; ds < et; ds++) aa.lc.mW(aIX[ds], e8[ds], eA[ds], eC[ds]);
			aIO += aIZ, aIN++
		} else ++aIP >= aIZ && (aIN++, aIP = 0)
	}
	this.aIF = 0, this.ch = function() {
		aIQ = a41 = aIP = aIO = aIN = 0
	}, this.iF = function() {
		var aGT;
		aK.iF(), af.yb() < 1.7 ? 0 === fu ? b7.dT >= dT && (aGT = b7.a1L / af.yb(), dT += aGT * Math.floor(1 + (b7.dT - dT) / aGT), 2 === jE || j.fe || !af.ux ? j2() : (aIT(), b2.a1c()), fu++) : aIU() : function() {
			var aGT;
			if (b7.dT >= dT)
				if (2 === jE || j.fe || !af.ux) j2(), dT = b7.dT;
				else {
					for (aGT = b7.a1L / af.yb(), 16 < (b7.dT - dT) / aGT && (dT = b7.dT - 16 * aGT); b7.dT >= dT && 2 !== jE;) dT += aGT, aIT();
					b2.a1c()
				} aIU()
		}(), jA(), b7.d2 && (b7.d2 = !1, qD())
	}, this.rH = function() {
		aIN !== ab.mj.aDm.length && k.vm("Replay file larger than expected.")
	}
}

function aIa() {
	var fu = 0,
		dT = b7.dT;
	this.aIF = 0, this.iF = function() {
		aK.iF(), kK ? jF() : 0 === fu ? b7.dT >= dT && (dT += b7.a1L * Math.floor(1 + (b7.dT - dT) / b7.a1L), 2 === jE || j.fe ? j2() : (j7(), b2.a1c()), fu++) : ((j.fe ? jF : (b7.d2 = !0, jC))(), fu = 0), jA(), b7.d2 && (b7.d2 = !1, qD())
	}
}

function ct() {
	function aIc() {
		b7.dT = performance.now(), b7.rG.iF(), window.requestAnimationFrame(aIc)
	}

	function aId() {
		var dU = performance.now();
		b7.dT + 1500 < dU && (b7.dT = dU, b7.rG.iF())
	}
	this.rG = null, this.d2 = !1, this.dT = 0, this.aIb = -1, this.a1L = 56, this.ch = function() {
		this.u3(), window.requestAnimationFrame(aIc), this.dT = performance.now()
	}, this.tz = function() {
		fd ? (this.rG = new aIM, this.rG.ch()) : iv ? this.rG = new aIa : (this.rG = new aIE, this.rG.ch())
	}, this.u3 = function() {
		this.rG = new aID, this.d2 = !0
	}, this.sa = function() {
		1 !== jE || !iv || j.fe || kK || j.sV(), -1 === this.aIb && (this.aIb = setInterval(aId, 2e3))
	}, this.sb = function() {
		this.d2 = !0, -1 !== this.aIb && (clearInterval(this.aIb), this.aIb = -1)
	}, this.iF = function() {
		this.rG.aIF++
	}, this.iT = function() {
		return this.rG.aIF
	}
}

function cA() {
	var kB = 0,
		aIe = !0;

	function aIg(db) {
		8 !== x.sR() || 2 !== h6[eo] && (0 !== h5[eo] || kK) || k.vw(db)
	}
	this.iF = function() {
		var dU, wV;
		b7.dT > kB && (kB = b7.dT + 2500, dU = new Date, wV = dU.getUTCSeconds(), aIe ? wV < 45 && (aIe = !1) : wV < 45 || -1 !== b7.aIb || (aIe = !0, (wV = dU.getUTCMinutes() + 1) % 15 == 0 && aIg(30 === wV ? "Upcoming Battle Royale Contest!" :
			"Upcoming Alliance Contest!")))
	}
}

function c1() {
	var jm, jn, jo, jq, aIh = 0,
		aIi = 0;

	function aIk() {
		return Math.pow(Math.pow(jo - jm, 2) + Math.pow(jq - jn, 2), .5)
	}

	function aIj(dC) {
		jm = nP * dC.touches[0].clientX, jn = nP * dC.touches[0].clientY, jo = nP * dC.touches[1].clientX, jq = nP * dC.touches[1].clientY
	}
	this.ru = function(dC) {
		return 1 < dC.touches.length ? (aIi = b7.dT, aIh = 3, aIj(dC), i.oH(), !0) : (aIh = 0, !1)
	}, this.rv = function(dC) {
		var aAK, gt, gu;
		return 0 !== jE && 1 < dC.touches.length && (aIh = Math.max(aIh - 1, 0), f.ka() && (aAK = aIk(), aIj(dC), dC = aIk(), gt = Math.floor((jm + jo) / 2), gu = Math.floor((jn + jq) / 2), p.zB(gt, gu, Math.max(.125, dC) / Math.max(.125, aAK)),
			b7.d2 = !0), !0)
	}, this.sN = function() {
		var jh, ji;
		return !!(aIh && (aIh = 0, b7.dT < aIi + 500)) && (jh = (jm + jo) / 2, ji = (jn + jq) / 2, i.sF(jh, ji), i.click(jh, ji, !0) && (b7.d2 = !0), !0)
	}
}

function cP() {
	this.gH = 0, this.fu = 0, this.mU = null, this.ch = function(mU) {
		this.fu = 0, this.mU = mU, this.gH = mU.length
	}, this.a3W = function() {
		this.mU = null
	}, this.mV = function(gH) {
		for (var dy = 0, mU = this.mU, ka = this.fu + gH - 1, ds = this.fu; ds <= ka; ds++) dy |= (mU[ds >> 3] >> 7 - (7 & ds) & 1) << ka - ds;
		return this.fu += gH, this.fu > 8 * this.gH && console.log("error unwrapper"), dy
	}, this.aCl = function(gH) {
		for (var e7 = new Array(gH), ds = 0; ds < gH; ds++) e7[ds] = this.mV(10);
		return h.ou(e7)
	}, this.aIl = function(aE6) {
		return this.gH === ag.aIm(aE6)
	}
}

function cn() {
	this.aEo = 0, this.aEp = 0, this.aEk = 0, this.aEl = 0, this.aEm = 0, this.aEn = 0, this.a1d = [0, 0, 0, 0], this.kZ = function() {
		this.aEo = p.jr(), this.aEp = p.g9(), this.aEk = -this.aEo, this.aEl = -this.aEp, this.aEm = jp / hB, this.aEn = g7 / hB, this.a1d[0] = Math.floor(this.aEk), this.a1d[1] = Math.floor(this.aEl), this.a1d[2] = Math.floor(this.a1d[0] + this
			.aEm + 1), this.a1d[3] = Math.floor(this.a1d[1] + this.aEn + 1), b2.a1a = !0
	}
}

function c2() {
	var xi, kB;
	this.ch = function() {
		xi = 1, kB = 0
	}, this.iF = function() {
		0 < xi && (kB = 0 === kB ? b7.dT + 16 : kB, xi = (xi -= .001 * (b7.dT - kB)) < 0 ? 0 : xi, kB = b7.dT, b7.d2 = !0)
	}, this.gA = function() {
		0 < xi && (gB.fillStyle = "rgba(0,0,0," + xi + ")", gB.fillRect(0, 0, jp, g7))
	}
}

function c5() {
	function aIq(a9k, jh, ji, g0, i0) {
		a9k >= au.a7X || (au.pX === a9k && (gB.fillStyle = ae.lN, gB.fillRect(jh, ji, g0, i0), gB.fillStyle = ae.gE), gB.strokeRect(jh, ji, g0, i0), gB.fillText(au.ir.pW[a9k].name, Math.floor(jh + .5 * g0), Math.floor(ji + .55 * i0)))
	}
	this.sH = !1, this.a52 = [0, 0, 0, 0], this.show = function() {
		this.sH = !0, this.resize(), b7.d2 = !0
	}, this.resize = function() {
		var aEF = el(au.a7X + au.a7X % 2, 2),
			aEF = dg - aEF * g6;
		this.a52[2] = de ? Math.floor(.75 * xB) : Math.floor(.5 * xB), this.a52[3] = Math.floor(1.25 * this.a52[2]), this.a52[3] > aEF && (this.a52[3] = aEF, this.a52[2] = Math.floor(aEF / 1.2)), this.a52[0] = Math.floor((df - this.a52[2]) / 2),
			this.a52[1] = Math.floor((dg - this.a52[3]) / 2)
	}, this.rq = function(jh, ji) {
		return !(jh < this.a52[0] || ji < this.a52[1] || jh > this.a52[0] + this.a52[2] || ji > this.a52[1] + this.a52[3])
	}, this.g3 = function(jh, ji) {
		var wK, aEF = el(au.a7X + au.a7X % 2, 2);
		return b7.d2 = !0, jh < this.a52[0] || ji < this.a52[1] || jh > this.a52[0] + this.a52[2] || ji > this.a52[1] + this.a52[3] ? !(this.sH = !1) : (wK = Math.floor(.17 * this.a52[3]), ji < this.a52[1] + wK ? jh > this.a52[0] + this.a52[2] -
			wK && (this.sH = !1) : (ji = (ji = Math.floor(aEF * (ji - this.a52[1] - wK - .00576 * fs) / (this.a52[3] - wK - .01152 * fs))) < 0 ? 0 : aEF - 1 < ji ? aEF - 1 : ji, jh > this.a52[0] + this.a52[2] / 2 && (ji += aEF), ji >= au
				.a7X || au.bg(ji, Math.floor(16384 * Math.random()))), !0)
	}, this.gA = function() {
		var ds, jn, wK = Math.floor(.17 * this.a52[3]),
			aEF = el(au.a7X + au.a7X % 2, 2),
			gap = .6 * .01152 * fs,
			wL = (this.a52[3] - wK - (aEF + 1) * gap) / aEF,
			qN = Math.floor((this.a52[2] - 3 * gap) / 2);
		for (gB.lineWidth = t3, gB.textAlign = gD, gB.textBaseline = gC, gB.fillStyle = ae.kp, gB.fillRect(this.a52[0], this.a52[1] + wK, this.a52[2], this.a52[3] - wK), gB.fillStyle = ae.lN, gB.fillRect(this.a52[0], this.a52[1], this.a52[2],
			wK), gB.strokeStyle = ae.gE, gB.strokeRect(this.a52[0], this.a52[1], this.a52[2], this.a52[3]), gB.fillStyle = ae.gE, gB.fillRect(this.a52[0], this.a52[1] + wK, this.a52[2], 2), gB.font = fv + Math.floor(.48 * wK) + fw, gB.fillText(
				"Maps", Math.floor(this.a52[0] + this.a52[2] / 2), Math.floor(this.a52[1] + .55 * wK)), gB.font = fv + Math.floor(.48 * wL) + fw, ds = aEF - 1; 0 <= ds; ds--) jn = Math.floor(this.a52[1] + wK + gap + ds * (wL + gap)), aIq(ds, this
			.a52[0] + gap, jn, qN, wL), aIq(ds + aEF, this.a52[0] + qN + 2 * gap, jn, qN, wL);
		j.vA(Math.floor(this.a52[0] + this.a52[2] - .7 * wK), Math.floor(this.a52[1] + .3 * wK), Math.floor(.4 * wK)), gB.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function cN() {
	this.gH = 0, this.fu = 0, this.mU = null, this.ch = function(mU) {
		this.fu = 0, this.mU = mU, this.gH = mU.length
	}, this.bg = function(aE6) {
		return this.ch(new Uint8Array(this.aIm(aE6))), this.mU
	}, this.a3W = function() {
		this.mU = null
	}, this.or = function(gH, wX) {
		for (var mU = this.mU, ka = this.fu + gH - 1, ds = this.fu; ds <= ka; ds++) mU[ds >> 3] |= (wX >> ka - ds & 1) << 7 - (7 & ds);
		this.fu += gH, this.fu > 8 * this.gH && console.log("error wrapper")
	}, this.aIr = function(gH) {
		for (var mU = this.mU, ka = this.fu + gH, ds = this.fu; ds < ka; ds++) mU[ds >> 3] &= 255 ^ 128 >>> (7 & ds)
	}, this.aIm = function(aE6) {
		return aE6 + 7 >> 3
	}, this.aIs = function(e7, hk, ka, aIt) {
		for (var ds = hk; ds < ka; ds++) this.or(aIt, e7[ds])
	}
}
setTimeout(bC, 1e4);